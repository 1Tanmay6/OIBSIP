# Introduction

1. The folder named "admin-inventory" has the code for admin mini inventory.

2. The folder named "pizza-ordering-main" contains the program for the main application.



# Tools and Technologies

1. The front-end framework is React.js, the back-end environment is Node.js and the tool that connects them is Next.js.

2. To actually use these files, you would be in need to create your own [`MongoDB(Atlas)`](https://www.mongodb.com/cloud/atlas/register) instance.



    ## About React.js, Node.js and Next.js
    This project uses React.js, Node.js and Next.js to build a fast and scalable web application.
    
    - **React.js** is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their application. You can learn more about React.js on its [official website](https://reactjs.org/).
    
    - **Node.js** is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side and build fast and scalable network applications. You can learn more about Node.js on its [official website](https://nodejs.org/).
    
    - **Next.js** is a framework for building server-rendered or statically-exported React applications. It provides features like automatic code splitting, optimized pre-fetching and route-based code splitting to improve the performance of your application. You can learn more about Next.js on its [official website](https://nextjs.org/).
    
    Together, these technologies provide a powerful stack for building modern web applications.

   ## About MongoDB
    - Create 3 Database in your [`MongoDB(Atlas)`](https://www.mongodb.com/cloud/atlas/register) cluster named.
      
      ``` bash
      contents
      # and
      login
      # and
      orders
      ```
        - In the contents database, create 5 collections named.
      
          ``` bash
          bases
          # and
          cheeses
          # and
          pizzas
          # and
          sauces
          # and
          toppings
          ```
          
        - In the login database, create 5 collections named.
  
    
          ``` bash
          credentials
          ```
        
         - In the orders database, create 5 collections named.
  
    
            ``` bash
            order
            ```
      Now, you can customiza the Object as you want in that database for each collection.

# Code Execution

1. Install the npm packages in both folders, open the terminal, and run:

    ```bash
    npm install
    # or
    yarn install
    # or
    npm i
    ```


2. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    npm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/<filename>](http://localhost:3000/api/<filename>). This endpoint can be edited in `pages/api/<filename>.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Learn More

To learn more about the tools used, take a look at the following resources:

- **React.js**: You can learn more about React.js by checking out the [React.js documentation](https://reactjs.org/docs/getting-started.html) or trying the [React tutorial](https://reactjs.org/tutorial/tutorial.html) for an interactive introduction to the library.

- **Node.js**: You can learn more about Node.js by checking out the [Node.js documentation](https://nodejs.org/en/docs/) to learn about its features and API.

- **Next.js**: You can learn more about Next.js by checking out the [Next.js documentation](https://nextjs.org/docs) or trying the [Learn Next.js tutorial](https://nextjs.org/learn) for an interactive introduction to the framework.

You can also check out their respective GitHub repositories to learn more about their development and contribute to their communities:

- [React.js GitHub repository](https://github.com/facebook/react)
- [Node.js GitHub repository](https://github.com/nodejs/node)
- [Next.js GitHub repository](https://github.com/vercel/next.js/)
   

