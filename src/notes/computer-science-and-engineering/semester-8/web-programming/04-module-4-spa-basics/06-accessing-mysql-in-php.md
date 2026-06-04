---
title: "Accessing MySQL in PHP"
subject: "WEB PROGRAMMING"
module: "Module 4: SPA – Basics"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc4e"
status: "completed"
scrapedAt: "2026-05-20T17:28:41.366Z"
---
# WEB PROGRAMMING - Module 4: SPA – Basics

## Topic: Accessing MySQL in PHP

This module focuses on how PHP, a server-side scripting language, interacts with MySQL databases to store, retrieve, and manage data for web applications. This is a fundamental skill for building dynamic websites and Single Page Applications (SPAs).

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Connect to a MySQL database using PHP.**
*   **Execute SQL queries from PHP to interact with the database.**
*   **Retrieve and process data returned from MySQL queries.**
*   **Handle potential errors during database operations.**
*   **Understand best practices for secure database access in PHP.**

---

### 1. Connecting to a MySQL Database using PHP

To interact with a MySQL database, your PHP script needs to establish a connection. PHP offers several ways to do this, with **MySQLi (MySQL Improved Extension)** being the recommended and most common method.

#### Key Concepts:

*   **Database Server:** The software (MySQL) that manages your database.
*   **Hostname/Server Name:** The address of the database server (e.g., `localhost` for a local server, an IP address, or a domain name).
*   **Username:** The login credentials for accessing the database.
*   **Password:** The password associated with the username.
*   **Database Name:** The specific database you want to connect to.

#### Methods for Connection:

*   **MySQLi Object-Oriented Style:**
    *   Provides a more structured and modern approach to database interaction.
    *   Uses objects to represent connections and results.

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
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully (Object-Oriented)";
    ?>
    ```

*   **MySQLi Procedural Style:**
    *   Uses functions to perform database operations.
    *   Can be simpler for basic tasks.

    ```php
    <?php
    $servername = "localhost";
    $username = "your_username";
    $password = "your_password";
    $dbname = "your_database";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully (Procedural)";
    ?>
    ```

**Important Point:** Always store your database credentials securely. Avoid hardcoding them directly in publicly accessible files. Consider using environment variables or configuration files outside your web root.

---

### 2. Executing SQL Queries from PHP

Once connected, you can execute SQL (Structured Query Language) commands to interact with your MySQL database. This includes creating tables, inserting data, retrieving data, updating records, and deleting records.

#### Key Concepts:

*   **SQL Query:** A command written in SQL to perform an action on the database.
*   **`mysqli_query()` (Procedural) / `$conn->query()` (Object-Oriented):** PHP functions used to send SQL queries to the database.

#### Examples of SQL Queries and PHP Execution:

*   **Creating a Table:**

    ```php
    <?php
    // Assuming $conn is an established mysqli connection

    $sql = "CREATE TABLE MyGuests (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(30) NOT NULL,
        lastname VARCHAR(30) NOT NULL,
        email VARCHAR(50),
        reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

    if ($conn->query($sql) === TRUE) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }

    $conn->close(); // Close the connection
    ?>
    ```

*   **Inserting Data:**

    ```php
    <?php
    // Assuming $conn is an established mysqli connection

    $sql = "INSERT INTO MyGuests (firstname, lastname, email)
            VALUES ('John', 'Doe', 'john@example.com')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close(); // Close the connection
    ?>
    ```

*   **Retrieving Data (SELECT):**

    This is a crucial operation. When you `SELECT` data, the query returns a result set, which you'll need to process.

    ```php
    <?php
    // Assuming $conn is an established mysqli connection

    $sql = "SELECT id, firstname, lastname FROM MyGuests";
    $result = $conn->query($sql); // Executes the query and stores the result

    if ($result->num_rows > 0) {
        // Output data of each row
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
        }
    } else {
        echo "0 results";
    }

    $conn->close(); // Close the connection
    ?>
    ```

*   **Updating Data:**

    ```php
    <?php
    // Assuming $conn is an established mysqli connection

    $sql = "UPDATE MyGuests SET lastname='Doe' WHERE id=2";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }

    $conn->close(); // Close the connection
    ?>
    ```

*   **Deleting Data:**

    ```php
    <?php
    // Assuming $conn is an established mysqli connection

    $sql = "DELETE FROM MyGuests WHERE id=3";

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }

    $conn->close(); // Close the connection
    ?>
    ```

---

### 3. Retrieving and Processing Data Returned from MySQL Queries

When you execute `SELECT` queries, the database returns a set of rows. PHP provides methods to iterate through these rows and access the data within them.

#### Key Concepts:

*   **Result Set:** The collection of rows returned by a `SELECT` query.
*   **`mysqli_result` Object:** The object returned by `$conn->query()` for `SELECT` statements.
*   **`fetch_assoc()`:** Fetches the next row from the result set as an associative array (column names as keys).
*   **`fetch_row()`:** Fetches the next row from the result set as a numerically indexed array.
*   **`fetch_array()`:** Fetches the result as either an associative array, a numeric array, or both.
*   **`fetch_all()`:** Fetches all rows from the result set as an array of associative arrays.
*   **`num_rows`:** A property of the `mysqli_result` object that indicates the number of rows returned by the query.

#### Processing the Result Set:

The most common way to process a result set is using a `while` loop with `fetch_assoc()`:

```php
<?php
// ... (connection established and SELECT query executed as above)

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . ", Name: " . $row["firstname"] . " " . $row["lastname"] . "<br>";
    }
} else {
    echo "No records found.";
}

// ... (close connection)
?>
```

**Example using `fetch_row()`:**

```php
<?php
// ... (connection established and SELECT query executed as above)

if ($result->num_rows > 0) {
    while($row = $result->fetch_row()) {
        echo "ID: " . $row[0] . ", Name: " . $row[1] . " " . $row[2] . "<br>";
    }
} else {
    echo "No records found.";
}

// ... (close connection)
?>
```

**Example using `fetch_all()`:**

```php
<?php
// ... (connection established and SELECT query executed as above)

if ($result->num_rows > 0) {
    $all_rows = $result->fetch_all(MYSQLI_ASSOC); // Fetch all as associative array
    foreach ($all_rows as $row) {
        echo "ID: " . $row["id"] . ", Name: " . $row["firstname"] . " " . $row["lastname"] . "<br>";
    }
} else {
    echo "No records found.";
}

// ... (close connection)
?>
```

**Important Point:** Always check if `$result->num_rows > 0` before trying to fetch data to avoid errors if the query returns no results.

---

### 4. Handling Potential Errors during Database Operations

Database operations can fail for various reasons (incorrect SQL, network issues, incorrect credentials, etc.). Robust PHP applications must gracefully handle these errors.

#### Key Concepts:

*   **Error Reporting:** PHP provides mechanisms to report errors.
*   **`die()` / `exit()`:** Functions to stop script execution and display a message.
*   **`$conn->connect_error` (Object-Oriented):** Property to get the connection error message.
*   **`mysqli_connect_error()` (Procedural):** Function to get the connection error message.
*   **`$conn->error` (Object-Oriented):** Property to get the most recent query error message.
*   **`mysqli_error($conn)` (Procedural):** Function to get the most recent query error message.
*   **Prepared Statements:** A more secure way to execute queries, which also helps with error handling.

#### Error Handling Techniques:

*   **Checking Connection Errors:**

    ```php
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    ```

*   **Checking Query Execution Errors:**

    ```php
    if ($conn->query($sql) === TRUE) {
        echo "Operation successful!";
    } else {
        echo "Error executing query: " . $conn->error;
    }
    ```

    For `SELECT` queries, you check the `$result` object:

    ```php
    $result = $conn->query($sql);
    if (!$result) {
        echo "Error executing SELECT query: " . $conn->error;
    } else {
        // Process results...
    }
    ```

*   **Using `try...catch` blocks (with PDO for more advanced error handling):** While `mysqli` doesn't directly use `try...catch` for its primary error reporting, PDO (PHP Data Objects) does, offering a more modern exception-based error handling.

---

### 5. Best Practices for Secure Database Access in PHP

Security is paramount when dealing with databases. Malicious users can exploit vulnerabilities to gain unauthorized access or corrupt your data.

#### Key Concepts:

*   **SQL Injection:** A type of security attack where malicious SQL code is inserted into database queries.
*   **Prepared Statements:** A way to send SQL commands to the database for execution where the SQL statement is precompiled. The user-supplied data is sent separately, ensuring that it is treated as data, not executable code.
*   **Parameter Binding:** The process of securely substituting placeholders in a prepared statement with actual data values.
*   **Input Validation:** Checking and sanitizing user input before using it in database queries.
*   **Least Privilege:** Granting database users only the necessary permissions to perform their tasks.
*   **Secure Credential Management:** Storing database credentials safely.

#### Secure Practices:

*   **Use Prepared Statements:** This is the most effective defense against SQL injection.

    **Example using prepared statements:**

    ```php
    <?php
    // Assuming $conn is an established mysqli connection

    $stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $firstname, $lastname, $email); // "sss" indicates three string parameters

    // Set parameters
    $firstname = "John";
    $lastname = "Doe";
    $email = "john.doe@example.com";

    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "New record created successfully (prepared statement)";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close(); // Close the statement
    $conn->close(); // Close the connection
    ?>
    ```

    **Retrieving data with prepared statements:**

    ```php
    <?php
    // Assuming $conn is an established mysqli connection

    $id_to_find = 1; // Example ID

    $stmt = $conn->prepare("SELECT firstname, lastname, email FROM MyGuests WHERE id = ?");
    $stmt->bind_param("i", $id_to_find); // "i" for integer parameter

    $stmt->execute();
    $result = $stmt->get_result(); // Get the result set from the prepared statement

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "Name: " . $row["firstname"]. " " . $row["lastname"]. " - Email: " . $row["email"]. "<br>";
        }
    } else {
        echo "No results found for ID: " . $id_to_find;
    }

    $stmt->close();
    $conn->close();
    ?>
    ```

*   **Validate and Sanitize User Input:** Even with prepared statements, it's good practice to validate input types and formats. Use functions like `filter_var()`, `htmlspecialchars()`, and `strip_tags()`.

*   **Securely Store Credentials:** As mentioned earlier, never put credentials directly in your code if it's web-accessible. Use configuration files outside the web root or environment variables.

*   **Limit Database User Privileges:** Create specific database users with only the permissions they need (e.g., a user that can only `SELECT` and `INSERT` into a particular table, not `DROP` tables).

*   **Close Connections and Statements:** Always close your database connections and prepared statements when you are finished with them to free up resources.

    ```php
    $conn->close();
    $stmt->close();
    ```

---

### Practice Questions and Exercises:

**Question 1:**
What is the primary recommended PHP extension for interacting with MySQL databases, and why?

**Answer 1:**
The primary recommended PHP extension is **MySQLi (MySQL Improved Extension)**. It is recommended because it offers a more modern, object-oriented interface, better performance, and enhanced security features compared to older extensions like `mysql_` (which is deprecated and removed).

---

**Question 2:**
Write a PHP script that connects to a MySQL database using the object-oriented MySQLi style. Assume your database server details are:
*   Hostname: `localhost`
*   Username: `root`
*   Password: `mysecretpassword`
*   Database Name: `mydatabase`

If the connection fails, the script should display an error message.

**Answer 2:**

```php
<?php
$servername = "localhost";
$username = "root";
$password = "mysecretpassword";
$dbname = "mydatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully to the database!";

// It's good practice to close the connection when done, even if this is a simple script.
$conn->close();
?>
```

---

**Question 3:**
You have a table named `products` with columns `product_id` (INT, PRIMARY KEY, AUTO_INCREMENT), `product_name` (VARCHAR), and `price` (DECIMAL). Write a PHP script using MySQLi to insert a new product with `product_name` as 'Laptop' and `price` as 999.99.

**Answer 3:**

```php
<?php
$servername = "localhost";
$username = "root";
$password = "mysecretpassword";
$dbname = "mydatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL to insert data using prepared statements for security
$sql = "INSERT INTO products (product_name, price) VALUES (?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sd", $product_name, $price); // "s" for string, "d" for decimal

// Set values
$product_name = "Laptop";
$price = 999.99;

// Execute the prepared statement
if ($stmt->execute()) {
    echo "New product added successfully. Last inserted ID: " . $conn->insert_id;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
?>
```

---

**Question 4:**
Explain the risk of SQL injection and how prepared statements mitigate this risk.

**Answer 4:**
**SQL Injection Risk:**
SQL injection is a vulnerability where an attacker can interfere with the queries that an application makes to its database. It typically occurs when user-supplied input is directly included in an SQL query without proper sanitization or escaping. An attacker can inject malicious SQL code, which might:
*   Bypass authentication.
*   Read sensitive data from the database (e.g., user credentials, credit card numbers).
*   Modify or delete data in the database.
*   Execute administrative operations on the database (e.g., shut down the database).

**How Prepared Statements Mitigate the Risk:**
Prepared statements work by separating the SQL command from the data that needs to be processed. The process involves:
1.  **Precompiling the SQL:** The database server receives the SQL query structure (with placeholders for data) and precompiles it.
2.  **Sending Data Separately:** The user-supplied data is sent to the database server in a separate communication channel.
3.  **Binding Parameters:** The database server then binds the supplied data to the placeholders. Crucially, the data is treated *only* as data, not as executable SQL code.

Because the data is never concatenated directly into the SQL string, any potentially malicious SQL code within the user input is simply treated as a literal string value, rendering it harmless.

---

### Important Points to Remember:

*   **MySQLi is the preferred extension.**
*   **Always check your connection.**
*   **Use prepared statements to prevent SQL injection.**
*   **Handle errors gracefully** by checking return values and using error messages.
*   **Sanitize and validate all user input.**
*   **Close database connections and statements** when you are finished to free up resources.
*   **Store database credentials securely**, ideally outside of your web-accessible files.
*   **Be mindful of the `num_rows` property** when processing `SELECT` results.
*   **Understand the different fetching methods** (`fetch_assoc`, `fetch_row`, `fetch_array`, `fetch_all`) and choose the most appropriate one.
