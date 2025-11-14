import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useProductStore = create((set, get) => ({
  loading: false,
  products: [],
  categoryAbortController: null,
  setProducts: (products) => set({ products }),

  createProduct: async (productData) => {
    set({ loading: true });
    try {
      const res = await axios.post("/products", productData);
      set((prevState) => ({
        products: [...prevState.products, res.data],
        loading: false,
      }));
    } catch (error) {
      toast.error(error.response.data.error);
      set({ loading: false });
    }
  },
  fetchAllProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/products");
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      toast.error(error.response.data.error || "Failed to fetch products");
    }
  },

  fetchProductsByCategory: async (category) => {
    // Cancel previous request if it exists
    const { categoryAbortController } = get();
    if (categoryAbortController) {
      categoryAbortController.abort();
    }

    // Create new abort controller for this request
    const newAbortController = new AbortController();
    set({
      categoryAbortController: newAbortController,
      loading: true,
      products: [], // Clear previous products immediately
    });

    try {
      const response = await axios.get(`/products/category/${category}`, {
        signal: newAbortController.signal,
      });
      set({ products: response.data.products, loading: false });
    } catch (error) {
      // Ignore errors caused by request cancellation.
      // Axios typically sets error.code === 'ERR_CANCELED' and name === 'CanceledError'.
      const isCanceled =
        error?.code === "ERR_CANCELED" ||
        error?.name === "CanceledError" ||
        error?.message === "canceled";

      if (isCanceled) {
        // stop loading but do not set an error or show a toast for canceled requests
        set({ loading: false });
        return;
      }

      // For other errors, set error state and show toast
      set({ error: "Failed to fetch products", loading: false });
      toast.error(
        error?.response?.data?.error ||
          error?.message ||
          "Failed to fetch products"
      );
    }
  },

  deleteProduct: async (productId) => {
    set({ loading: true });
    try {
      await axios.delete(`/products/${productId}`);
      set((state) => ({
        products: state.products.filter((product) => product._id !== productId),
        loading: false,
      }));
      toast.success("Product deleted successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.error || "Failed to delete product");
    }
  },
  toggleFeaturedProduct: async (productId) => {
    set({ loading: true });
    try {
      const response = await axios.post(
        `/products/${productId}/toggle-featured`
      );
      set((prevProducts) => ({
        products: prevProducts.products.map((product) =>
          product._id === productId
            ? { ...product, isFeatured: response.data.isFeatured }
            : product
        ),
        loading: false,
      }));
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.error || "Failed to update product");
    }
  },
}));
