---
title: "Accessing MySQL in PHP"
subject: "WEB PROGRAMMING"
module: "Module 4: SPA – Basics"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0ef"
status: "completed"
scrapedAt: "2026-05-20T17:13:21.748Z"
---
# Web Programming: Module 4 - SPA Basics
## Topic: Accessing MySQL in PHP

---

## Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the fundamental principles of connecting PHP to a MySQL database.
*   Execute basic SQL queries (SELECT, INSERT, UPDATE, DELETE) from PHP.
*   Process and display data retrieved from a MySQL database in a web page.
*   Handle potential errors during database operations.
*   Securely manage database credentials.

---

## 1. Introduction to Database Interaction in Web Programming

*   **What is a Database?**
    *   A structured collection of data, organized for efficient storage, retrieval, and management.
    *   Commonly used in web applications to store user information, product details, content, etc.

*   **Why MySQL?**
    *   A popular open-source Relational Database Management System (RDBMS).
    *   Known for its speed, reliability, and scalability.
    *   Widely supported by web hosting providers.

*   **PHP and MySQL Synergy:**
    *   PHP is a server-side scripting language that can interact with MySQL databases.
    *   This interaction allows dynamic content generation based on data stored in the database.

---

## 2. Connecting PHP to MySQL

To access a MySQL database from PHP, you need a way for PHP to communicate with the MySQL server. PHP provides extensions for this purpose. The most common and recommended extension is **MySQLi (MySQL Improved)**.

### 2.1. MySQLi: Procedural vs. Object-Oriented Styles

MySQLi offers two ways to interact with MySQL:

*   **Procedural Style:** Uses functions prefixed with `mysqli_`.
*   **Object-Oriented Style:** Uses methods of MySQLi objects. This is generally preferred for its cleaner syntax and better organization.

#### 2.1.1. Establishing a Connection (Object-Oriented Style)

**Key Concepts:**

*   **Server Name/Hostname:** The address of the MySQL server (e.g., `localhost`, `127.0.0.1`, or a remote server address).
*   **Username:** The username for accessing the MySQL database.
*   **Password:** The password for the specified username.
*   **Database Name:** The name of the specific database you want to connect to.

**Example:**

```php
<?php
$servername = "localhost";
$username = "your_username"; // Replace with your MySQL username
$password = "your_password"; // Replace with your MySQL password
$dbname = "your_database";   // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully (Object-Oriented)";
?>
```

**Important Points to Remember:**

*   Replace `"your_username"`, `"your_password"`, and `"your_database"` with your actual MySQL credentials.
*   If the connection fails, the script will terminate with an error message.
*   It's crucial to handle connection errors gracefully.

#### 2.1.2. Establishing a Connection (Procedural Style)

**Example:**

```php
<?php
$servername = "localhost";
$username = "your_username"; // Replace with your MySQL username
$password = "your_password"; // Replace with your MySQL password
$dbname = "your_database";   // Replace with your database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully (Procedural)";
?>
```

**Important Points to Remember:**

*   The logic is similar, but it uses `mysqli_connect()` and checks the connection using `!$conn`.
*   Error messages are accessed using `mysqli_connect_error()`.

#### 2.1.3. Closing the Connection

It's good practice to close the database connection when you are finished to free up resources.

**Object-Oriented Style:**

```php
<?php
// ... after performing database operations
$conn->close();
echo "Connection closed.";
?>
```

**Procedural Style:**

```php
<?php
// ... after performing database operations
mysqli_close($conn);
echo "Connection closed.";
?>
```

---

## 3. Executing SQL Queries

Once connected, you can send SQL commands to the database using PHP.

### 3.1. The `query()` Method (Object-Oriented) or `mysqli_query()` Function (Procedural)

These are used to execute SQL statements that don't return a result set (like INSERT, UPDATE, DELETE) or to execute SELECT statements.

#### 3.1.1. Inserting Data

**Example (Object-Oriented):**

Let's assume you have a table named `users` with columns `id` (auto-increment), `firstname`, and `lastname`.

```php
<?php
// ... (connection code as above)

$firstname = "John";
$lastname = "Doe";

$sql = "INSERT INTO users (firstname, lastname) VALUES ('$firstname', '$lastname')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
```

**Example (Procedural):**

```php
<?php
// ... (connection code as above)

$firstname = "Jane";
$lastname = "Smith";

$sql = "INSERT INTO users (firstname, lastname) VALUES ('$firstname', '$lastname')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
```

**Important Points to Remember:**

*   The `query()` method (or `mysqli_query()`) returns `TRUE` on success for non-SELECT queries.
*   It returns `FALSE` on failure.
*   The `$conn->error` (or `mysqli_error($conn)`) property/function provides detailed error messages.

#### 3.1.2. Retrieving Data (SELECT)

When you execute a `SELECT` query, the `query()` method (or `mysqli_query()`) returns a **result object** (or `FALSE` on failure). You then need to fetch the data from this result object.

**Example (Object-Oriented):**

Let's assume you want to retrieve all users from the `users` table.

```php
<?php
// ... (connection code as above)

$sql = "SELECT id, firstname, lastname FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
```

**Key Concepts for SELECT:**

*   **`$result->num_rows`:** Property that returns the number of rows in the result set.
*   **`$result->fetch_assoc()`:** Method that fetches the next row from the result set as an associative array (column names as keys).
*   **`$result->fetch_row()`:** Fetches the next row as a numerically indexed array.
*   **`$result->fetch_array()`:** Fetches the next row as either an associative or numerically indexed array (or both).
*   **`while` loop:** Used to iterate through all the rows in the result set.

**Example (Procedural):**

```php
<?php
// ... (connection code as above)

$sql = "SELECT id, firstname, lastname FROM users";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // Output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}
mysqli_close($conn);
?>
```

**Important Points to Remember:**

*   Always check if `$result->num_rows > 0` (or `mysqli_num_rows($result) > 0`) before trying to fetch data.
*   The `while` loop is essential for processing multiple rows.
*   `fetch_assoc()` is very convenient for accessing columns by their names.

#### 3.1.3. Updating Data

**Example (Object-Oriented):**

Update a user's last name where the ID is 1.

```php
<?php
// ... (connection code as above)

$id = 1;
$new_lastname = "Williams";

$sql = "UPDATE users SET lastname = '$new_lastname' WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>
```

#### 3.1.4. Deleting Data

**Example (Object-Oriented):**

Delete a user where the ID is 2.

```php
<?php
// ... (connection code as above)

$id = 2;

$sql = "DELETE FROM users WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();
?>
```

---

## 4. Handling Errors Gracefully

Database operations can fail for various reasons (invalid SQL, incorrect credentials, network issues, etc.). It's crucial to handle these errors to provide informative feedback to the user and to prevent unexpected behavior.

*   **Check connection errors:** As shown in section 2.1.
*   **Check query execution errors:** The `query()` method (or `mysqli_query()`) returns `FALSE` on failure. You should always check this return value.
*   **Use `$conn->error` or `mysqli_error()`:** To get specific error messages.

**Example of combined error handling:**

```php
<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // Log the error for debugging, but show a user-friendly message
    error_log("Database Connection Error: " . $conn->connect_error);
    die("We are experiencing technical difficulties. Please try again later.");
}

$firstname = "Alice";
$lastname = "Wonderland";

$sql = "INSERT INTO users (firstname, lastname) VALUES ('$firstname', '$lastname')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    // Log the specific SQL error for developers
    error_log("Database Query Error: " . $sql . " - " . $conn->error);
    // Show a user-friendly message
    die("An error occurred while saving your data. Please try again.");
}

$conn->close();
?>
```

**Important Points to Remember:**

*   **Don't expose raw SQL errors to end-users in production.** This can reveal sensitive information about your database structure.
*   **Log errors** for debugging purposes.
*   Provide **user-friendly error messages**.

---

## 5. Security: Preventing SQL Injection

**SQL Injection** is a malicious technique where an attacker inserts SQL code into input fields to manipulate your database. For example, if an attacker enters `' OR '1'='1` into a username field, it could potentially bypass authentication.

**The primary defense against SQL injection is using Prepared Statements.**

### 5.1. Prepared Statements with MySQLi

Prepared statements work by separating the SQL code from the data. The database engine pre-compiles the SQL query with placeholders, and then the data is sent separately. This prevents the data from being interpreted as SQL code.

**Steps for Prepared Statements:**

1.  **Prepare the SQL statement** with placeholders (e.g., `?`).
2.  **Bind parameters** to the placeholders.
3.  **Execute the statement.**
4.  **Fetch results** (if it's a `SELECT` query).

#### 5.1.1. Example: Inserting Data with Prepared Statements

```php
<?php
// ... (connection code as above)

$firstname = "Peter";
$lastname = "Pan";

// 1. Prepare the SQL statement with placeholders
$stmt = $conn->prepare("INSERT INTO users (firstname, lastname) VALUES (?, ?)");

// 2. Bind parameters to the placeholders
// 'ss' means two string parameters
$stmt->bind_param("ss", $firstname, $lastname);

// 3. Execute the statement
if ($stmt->execute() === TRUE) {
    echo "New record created successfully (Prepared Statement)";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the statement
$stmt->close();
$conn->close();
?>
```

#### 5.1.2. Example: Retrieving Data with Prepared Statements

```php
<?php
// ... (connection code as above)

$search_id = 1;

// 1. Prepare the SQL statement
$stmt = $conn->prepare("SELECT id, firstname, lastname FROM users WHERE id = ?");

// 2. Bind parameters
// 'i' means an integer parameter
$stmt->bind_param("i", $search_id);

// 3. Execute the statement
$stmt->execute();

// 4. Get the result
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results for ID: " . $search_id;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
```

**Important Points to Remember:**

*   **Always use prepared statements** for any query that involves user-supplied input.
*   The first parameter of `bind_param()` specifies the data types of the parameters:
    *   `s` - string
    *   `i` - integer
    *   `d` - double
    *   `b` - blob
*   `get_result()` is used with `SELECT` statements to retrieve the result set from a prepared statement.

---

## 6. Managing Database Credentials Securely

*   **Don't embed credentials directly in code that is publicly accessible.**
*   **Use environment variables or configuration files** that are not part of your web-accessible directory.
*   **Limit database user privileges** to only what is necessary for the application. For example, don't give your web application's user `DROP` or `ALTER` privileges unless absolutely required.

---

## Practice Questions

**Question 1:**
What is the primary advantage of using MySQLi over the older `mysql_` extension in PHP?

**Question 2:**
Describe the difference between the procedural and object-oriented styles of using MySQLi. Which is generally recommended, and why?

**Question 3:**
Write a PHP code snippet to connect to a MySQL database using the object-oriented style. Assume the following credentials:
    *   Server: `localhost`
    *   Username: `webdev`
    *   Password: `securepwd123`
    *   Database: `company_db`
    Handle potential connection errors.

**Question 4:**
You have a table named `products` with columns `product_id` (INT, PK, AUTO_INCREMENT), `product_name` (VARCHAR), and `price` (DECIMAL). Write a PHP script using prepared statements to:
    a) Insert a new product named "Laptop" with a price of 1200.50.
    b) Retrieve and display all products from the `products` table.

**Question 5:**
What is SQL injection, and how do prepared statements help prevent it?

---

## Answers to Practice Questions

**Answer 1:**
The primary advantage of using MySQLi over the older `mysql_` extension is improved security, support for prepared statements (to prevent SQL injection), better error handling, and support for newer MySQL features. The `mysql_` extension is deprecated and should not be used.

**Answer 2:**
*   **Procedural Style:** Uses functions that start with `mysqli_` (e.g., `mysqli_connect()`, `mysqli_query()`).
*   **Object-Oriented Style:** Uses methods of MySQLi objects (e.g., `$conn->connect()`, `$conn->query()`).
    The object-oriented style is generally recommended because it provides a more structured and cleaner way to write database code, making it easier to manage and maintain.

**Answer 3:**

```php
<?php
$servername = "localhost";
$username = "webdev";
$password = "securepwd123";
$dbname = "company_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // In a real application, you would log this error and show a user-friendly message
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected to company_db successfully!";

// Remember to close the connection when done
$conn->close();
?>
```

**Answer 4:**

```php
<?php
$servername = "localhost";
$username = "your_username"; // Replace with your actual username
$password = "your_password"; // Replace with your actual password
$dbname = "your_database";   // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// a) Insert a new product
$product_name = "Laptop";
$price = 1200.50;

$stmt_insert = $conn->prepare("INSERT INTO products (product_name, price) VALUES (?, ?)");
$stmt_insert->bind_param("sd", $product_name, $price); // 's' for string, 'd' for decimal/double

if ($stmt_insert->execute() === TRUE) {
    echo "<br>New product '$product_name' inserted successfully.";
} else {
    echo "<br>Error inserting product: " . $stmt_insert->error;
}
$stmt_insert->close();

// b) Retrieve and display all products
echo "<h2>Product List:</h2>";
$sql_select = "SELECT product_id, product_name, price FROM products";
$result = $conn->query($sql_select);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["product_id"]. " - Name: " . $row["product_name"]. " - Price: $" . $row["price"]. "<br>";
    }
} else {
    echo "No products found in the database.";
}

// Close the connection
$conn->close();
?>
```

**Answer 5:**
SQL injection is a security vulnerability where an attacker inserts malicious SQL code into data input fields. This code can be executed by the database, potentially allowing the attacker to access, modify, or delete data, or even gain control of the database server.

Prepared statements help prevent SQL injection by:
1.  **Separating Code from Data:** The SQL query structure is defined separately from the actual data values.
2.  **Using Placeholders:** The query contains placeholders (e.g., `?`) that represent where the data will go.
3.  **Parameter Binding:** The data is sent to the database engine and "bound" to these placeholders. The database engine treats the bound data strictly as data, not as executable SQL commands, thus neutralizing any malicious SQL code within the data.
