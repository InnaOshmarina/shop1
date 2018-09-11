# Online store

>  ⚛ Online store app built with the MERN stack.
>
> Shop1 is a Platform where you can add, edit product categories and products and sell them in the web application. It can be implemented in a store / shop or other business that registers their products to show and sell them to their customers.

## Quick Start

```bash
# Cloning repository
git clone https://github.com/InnaOshmarina/shop1.git

# Open directory
cd shop1

# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a keys_dev.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

## App Info

### Author

Inna Oshmarina

**Version**

1.0.0

### License

This project is licensed under the MIT License
