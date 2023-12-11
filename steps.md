# MOG AUTH

## create react app

npm create vite@latest -> react -> javascript

## initialize tailwind

tailwind postcss autoprefixer

## create empty page components

srs/pages/Auth.jsx Home.jsx Dashboard.jsx Settings.jsx

## initialize react router dom

[tutorial](https://youtu.be/Ul3y1LXxzdU?si=FI75ZjbC7rFqF5D1)
[docs](https://reactrouter.com/en/main/start/tutorial)

## create BrowserRouter

there are 3 ways to create router:

___

The choice of which method to use for creating routes in React Router DOM depends on your specific needs and preferences. Here's a breakdown of each method and its suitability:

**1. Using <BrowserRouter> and nesting <Route> components:**

This method is the simplest and most straightforward approach, especially for beginners. It involves directly nesting <Route> components within a <BrowserRouter> component. It's ideal for small projects with a limited number of routes.

**Advantages:**

- Easy to understand and implement
- Ideal for simple routing scenarios

**Disadvantages:**

- Can become verbose with complex routing setups
- May not be as flexible for managing nested routes

**2. Using createBrowserRouter and declaring routes as object properties:**

This method involves creating a router instance using `createBrowserRouter` and then defining routes as an array of objects. This approach provides more control over route configuration and enables nested routes with ease.

**Advantages:**

- Offers more flexibility in configuring routes
- Allows for nested routes and custom properties
- Suitable for larger projects with complex routing needs

**Disadvantages:**

- Requires more understanding of routing concepts
- May be slightly more complex than the <BrowserRouter> method

**3. Using createRoutesFromElements:**

This method combines the flexibility of the `createBrowserRouter` approach with the simplicity of the <BrowserRouter> method. It allows you to define routes using JSX elements, making it less verbose and easier to maintain.

**Advantages:**

- Combines simplicity of JSX with flexibility of object-based routing
- Suitable for medium-sized projects with moderate routing complexity

**Disadvantages:**

- Introduces an additional step of converting routes to elements
- May not be as clear as the explicit `createBrowserRouter` method

**Overall Recommendation:**

For beginners, the <BrowserRouter> method is the recommended approach due to its simplicity. As you progress and require more complex routing setups, the `createBrowserRouter` or `createRoutesFromElements` methods become more suitable. Ultimately, the choice depends on your project's size, complexity, and personal preferences.

___

we are using createBrowserRouter

[docs](https://reactrouter.com/en/main/routers/create-browser-router)

src/main.jsx

or

src/Routes.jsx (have all routes in a separate file - cleaner way)
