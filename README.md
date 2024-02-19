# CRUD App with Express.js and MongoDB

This CRUD (Create, Read, Update, Delete) application is built using Express.js for the backend and MongoDB for data storage. It provides endpoints to perform CRUD operations on a collection of products.

## Technologies Used

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database program, using JSON-like documents with optional schemas.
- **Mongoose**: An object modeling tool designed to work in an asynchronous environment.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Axios**: A promise-based HTTP client for making requests to the backend.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file.
- **nodemon**: A utility that monitors for changes in files and automatically restarts the server.
- **Postman**: A collaboration platform for API development used for testing API endpoints.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sangamprashant/CRUD_APP.git
    ```

2. Install dependencies:

    ```bash
    cd frontend
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following variables:

```
MONGO_URL="mongodb+srv://your_username:your_password@your_cluster_url.your_provider.net/retryWrites=true&w=majority"
MONGO_DATABASE="your_database_name"
JWT_SECRET="your_jwt_secret"
EMAIL="your_email@example.com"
EMAIL_PASSWORD="your_email_password"
```

4. Start the server:

```bash
npm start
```

## Usage

### Endpoints

- **GET /products**: Retrieve all products.
- **GET /products/:id**: Retrieve a product by ID.
- **POST /products**: Create a new product.
- **PUT /products/:id**: Update a product by ID.
- **DELETE /products/:id**: Delete a product by ID.

### Dummy Email and Password
To log in and preview the CRUD application, you can use the following dummy email and password:

- **Email**: admin@gmail.com
- **Password**: 1234

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or additional features.

## License

This project is licensed under the [MIT License](LICENSE).

Replace  `your_username`, `your_password`, `your_cluster_url`, `your_provider`, `your_database_name`, `your_jwt_secret`, `your_email@example.com`, and `your_email_password` with appropriate values.

## Previews

![](./images/1.png)
![](./images/2.png)
![](./images/9.png)
![](./images/3.png)
![](./images/4.png)
![](./images/5.png)
![](./images/6.png)
![](./images/7.png)
![](./images/8.png)
