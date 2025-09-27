# Model Files Explanation (Simple Terms)

---

## user.model.js

- **Imports:**

  - `bcryptjs`: Helps scramble (hash) passwords so they're safe and unreadable.
  - `mongoose`: Lets you work with the database easily.

- **userSchema:**

  - Describes what a user account looks like in the database.
  - **name:** The user's name. Must be provided.
  - **email:** The user's email. Must be provided, must be unique, always lowercase, and trimmed of spaces.
  - **password:** The user's password. Must be provided and at least 6 characters long.
  - **cartItems:** A list of products the user wants to buy, each with:
    - **quantity:** How many of that product.
    - **product:** The actual product's ID.
  - **role:** Whether the user is a regular customer or an admin. Defaults to customer.
  - **timestamps:** Automatically keeps track of when the user was created or updated.

- **Password Hashing (userSchema.pre("save")):**

  - Before saving a user, if the password was changed, it scrambles the password so it's safe.
  - Uses bcrypt to do the scrambling.

- **comparePassword:**

  - Lets you check if a plain password matches the scrambled one when logging in.

- **User Model:**
  - Makes it possible to create, find, and update users in the database.

---

## product.model.js

- **Imports:**

  - `mongoose`: Lets you work with the database easily.

- **productSchema:**

  - Describes what a product looks like in the database.
  - **name:** The product's name. Must be provided.
  - **description:** Details about the product. Must be provided.
  - **price:** How much the product costs. Must be provided and can't be negative.
  - **image:** A link to the product's picture. Must be provided.
  - **category:** What type of product it is. Must be provided.
  - **isFeatured:** Whether the product is special or highlighted. Defaults to not featured.
  - **timestamps:** Automatically keeps track of when the product was created or updated.

- **Product Model:**
  - Makes it possible to create, find, and update products in the database.

---

This document explains your model files in everyday language, so anyone can understand what each part does. If you want more explanations for other files, just ask!
