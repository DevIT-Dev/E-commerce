# E-commerce Backend Controllers: Detailed Explanation

This document explains every line of code in your backend controller files in simple, non-technical language. Each section covers a different controller file and describes what each part does, so anyone can understand how your backend works.

---

## auth.controllers.js

- **Imports:**

  - `User`: Lets you work with user accounts stored in the database.
  - `jwt`: Used to create and check special codes (tokens) for user login and security.
  - `redis`: Used to store and manage refresh tokens for users, helping with secure logins.

- **generateTokens(userId):**

  - Makes two special codes for a user: one for short-term access (accessToken) and one for longer-term use (refreshToken).
  - These codes help keep users logged in and secure.

- **storeRefreshToken(userId, refreshToken):**

  - Saves the refreshToken in a fast storage (Redis) so the server can check it later.

- **setCookies(res, accessToken, refreshToken):**

  - Puts the accessToken and refreshToken into the user's browser as cookies, which are small pieces of data that help keep the user logged in.
  - Cookies are set to be secure and only readable by the server.

- **signup:**

  - Gets the user's email, password, and name from the signup form.
  - Checks if the email is already used. If yes, tells the user they already have an account.
  - If not, creates a new user account.
  - Makes tokens for the new user and saves the refresh token.
  - Sets cookies for the user and sends back a message that signup was successful.

- **login:**

  - Gets the user's email and password from the login form.
  - Finds the user in the database and checks if the password matches.
  - If correct, makes tokens, saves the refresh token, sets cookies, and sends back a message that login was successful.
  - If not, tells the user the login failed.

- **logout:**

  - Gets the refresh token from the user's cookies.
  - Removes the refresh token from Redis.
  - Clears the cookies from the user's browser and sends a message that logout was successful.

- **refreshToken:**
  - Gets the refresh token from the user's cookies.
  - Checks if the token is valid and matches what is stored.
  - If valid, makes a new access token and sets it as a cookie.
  - Sends a message that the token was refreshed.

---

## cart.controller.js

- **Imports:**

  - `Product`: Lets you work with products in the database.

- **getCartProducts:**

  - Finds all products that are in the user's cart.
  - Matches each product with its quantity in the cart.
  - Sends back a list of products in the cart with their quantities.

- **addToCart:**

  - Gets the product ID from the user's request.
  - Checks if the product is already in the cart.
  - If yes, increases the quantity.
  - If not, adds the product to the cart.
  - Saves the updated cart and sends it back to the user.

- **removeAllFromCart:**

  - Gets the product ID from the user's request.
  - If no product ID is given, removes all items from the cart.
  - If a product ID is given, removes only that product from the cart.
  - Saves the updated cart and sends it back to the user.

- **updateQuantity:**
  - Gets the product ID and new quantity from the user's request.
  - Finds the product in the cart.
  - If the new quantity is zero, removes the product from the cart.
  - If not, updates the quantity.
  - Saves the updated cart and sends it back to the user.

---

## product.controller.js

- **Imports:**

  - `cloudinary`: Used to upload and manage product images.
  - `redis`: Used to store and quickly access featured products.
  - `Product`: Lets you work with products in the database.

- **getAllProducts:**

  - Finds all products in the database and sends them back to the user.

- **getFeaturedProducts:**

  - Checks if featured products are already stored in Redis.
  - If yes, sends them back quickly.
  - If not, finds them in the database, stores them in Redis, and sends them back.

- **getProductsByCategory:**

  - Gets the category from the user's request.
  - Finds all products in that category and sends them back.

- **getrecommendedProducts:**

  - Picks three random products from the database and sends them back.

- **updateFeaturedProductsCache:**

  - Updates the list of featured products in Redis for quick access.

- **toggleFeaturedProduct:**

  - Finds a product by its ID.
  - Switches its featured status (on/off).
  - Updates the featured products cache and sends back the updated product.

- **createProduct:**

  - Gets product details from the user's request.
  - Uploads the product image to Cloudinary.
  - Creates a new product in the database and sends it back.

- **deleteProduct:**
  - Finds a product by its ID.
  - Deletes its image from Cloudinary.
  - Removes the product from the database and sends a message that it was deleted.

---

This document is meant to help you understand what each part of your backend code does, step by step, in everyday language. If you want more details or explanations for other files, just ask!
