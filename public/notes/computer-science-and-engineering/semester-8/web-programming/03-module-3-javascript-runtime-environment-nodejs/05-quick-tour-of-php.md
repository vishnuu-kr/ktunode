---
title: "Quick tour of PHP"
subject: "WEB PROGRAMMING"
module: "Module 3: JavaScript runtime environment : Node.js "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc3c"
status: "completed"
scrapedAt: "2026-05-20T17:28:29.573Z"
---
# Web Programming: Module 3 - JavaScript Runtime Environment: Node.js

## Topic: Quick Tour of PHP

**Important Note:** This topic, "Quick Tour of PHP," is included within the Node.js module. This is likely to provide a comparative context for server-side technologies, helping to understand how different languages and environments handle web development tasks. While this module focuses on Node.js, understanding PHP offers valuable insight into the landscape of backend development.

---

### 1. Introduction to PHP

*   **What is PHP?**
    *   PHP (Hypertext Preprocessor) is a popular, open-source, server-side scripting language.
    *   It's widely used for web development and can be embedded directly into HTML.
    *   PHP code is executed on the web server, and the output (usually HTML) is sent to the client's browser.

*   **Key Characteristics:**
    *   **Server-Side:** Code runs on the server, not in the user's browser. This allows for secure access to databases, file systems, and other server resources.
    *   **Interpreted:** PHP code is interpreted line by line at runtime, meaning no compilation step is required.
    *   **Open-Source:** Free to use, distribute, and modify.
    *   **Cross-Platform:** Runs on various operating systems (Windows, Linux, macOS).
    *   **Database Integration:** Excellent support for a wide range of databases, especially MySQL.
    *   **Large Community:** Extensive documentation, forums, and libraries available.

*   **Why is it in a Node.js Module?**
    *   To highlight the **differences and similarities** between PHP and Node.js as server-side environments.
    *   To understand the **evolution of server-side technologies** and the factors that led to the popularity of Node.js.
    *   To appreciate the **various tools and approaches** available for backend development.

---

### 2. Basic PHP Syntax and Concepts

*   **PHP Tags:**
    *   PHP code is enclosed within special tags. The most common ones are:
        *   `<?php ... ?>` (Standard and recommended)
        *   `<?= ... ?>` (Shorthand for echoing a variable or expression)

*   **Statements and Semicolons:**
    *   Each statement in PHP must end with a semicolon (`;`).

*   **Variables:**
    *   Variables in PHP start with a dollar sign (`$`).
    *   No explicit declaration of variable type is needed (dynamically typed).
    *   Variable names are case-sensitive.

    ```php
    <?php
    $greeting = "Hello";
    $name = "World";
    $number = 10;
    ?>
    ```

*   **Data Types:**
    *   **String:** Sequence of characters.
    *   **Integer:** Whole numbers.
    *   **Float (or Double):** Numbers with decimal points.
    *   **Boolean:** `true` or `false`.
    *   **Array:** Ordered map (key-value pairs or indexed).
    *   **Object:** Instance of a class.
    *   **NULL:** Represents a variable with no value.

*   **Comments:**
    *   Single-line comments: `// This is a comment` or `# This is a comment`
    *   Multi-line comments: `/* This is a
       multi-line comment */`

*   **Outputting Data:**
    *   `echo`: Outputs one or more strings.
    *   `print`: Outputs a string (similar to `echo`, but returns 1).

    ```php
    <?php
    echo "<h1>Welcome</h1>";
    echo "This is a " . "concatenated" . " string.";
    print "This is also output.<br>";
    ?>
    ```

*   **Control Structures:**
    *   **Conditional Statements:** `if`, `else`, `elseif`, `switch`.

        ```php
        <?php
        $age = 20;
        if ($age >= 18) {
            echo "You are an adult.";
        } else {
            echo "You are a minor.";
        }
        ?>
        ```

    *   **Loops:** `for`, `while`, `do-while`, `foreach`.

        ```php
        <?php
        for ($i = 0; $i < 5; $i++) {
            echo "Iteration: " . $i . "<br>";
        }

        $colors = array("red", "green", "blue");
        foreach ($colors as $color) {
            echo $color . "<br>";
        }
        ?>
        ```

*   **Functions:**
    *   User-defined functions allow code to be reused.
    *   PHP has a vast library of built-in functions.

    ```php
    <?php
    function greet($name) {
        return "Hello, " . $name . "!";
    }

    echo greet("Alice"); // Output: Hello, Alice!
    ?>
    ```

*   **Arrays:**
    *   **Indexed Arrays:** Keys are integers starting from 0.
    *   **Associative Arrays:** Keys are strings.

    ```php
    <?php
    // Indexed Array
    $fruits = array("Apple", "Banana", "Cherry");
    echo $fruits[0]; // Output: Apple

    // Associative Array
    $person = array("name" => "Bob", "age" => 30, "city" => "New York");
    echo $person['name']; // Output: Bob
    ?>
    ```

*   **Embedding PHP in HTML:**
    *   PHP code can be mixed directly with HTML.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>PHP Example</title>
    </head>
    <body>
        <h1>My First PHP Page</h1>
        <?php
        $pageTitle = "Dynamic Title";
        echo "<p>This content is generated by PHP. The title is: " . $pageTitle . "</p>";
        ?>
    </body>
    </html>
    ```

---

### 3. Server-Side Operations

*   **Form Handling:**
    *   PHP is commonly used to process data submitted from HTML forms.
    *   `$_GET`: Superglobal array containing variables passed via the URL (GET method).
    *   `$_POST`: Superglobal array containing variables passed via the HTTP POST method.
    *   `$_REQUEST`: Contains the contents of `$_GET`, `$_POST`, and `$_COOKIE`.

    **Example (HTML Form):**
    ```html
    <form action="process.php" method="post">
        Name: <input type="text" name="username"><br>
        <input type="submit" value="Submit">
    </form>
    ```

    **Example (process.php):**
    ```php
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST['username'];
        echo "Hello, " . htmlspecialchars($username) . "!";
    }
    ?>
    ```
    *   `htmlspecialchars()` is used to prevent Cross-Site Scripting (XSS) attacks.

*   **Database Interaction (e.g., MySQL):**
    *   PHP has extensions like `mysqli` and `PDO` for interacting with databases.
    *   Common operations: connecting, querying, fetching data, inserting, updating, deleting.

    **Example (using mysqli - simplified):**
    ```php
    <?php
    $servername = "localhost";
    $username_db = "root";
    $password_db = "password";
    $dbname = "mydatabase";

    // Create connection
    $conn = new mysqli($servername, $username_db, $password_db, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully<br>";

    // Example query
    $sql = "SELECT id, name FROM users";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Output data of each row
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"]. " - Name: " . $row["name"]. "<br>";
        }
    } else {
        echo "0 results";
    }
    $conn->close();
    ?>
    ```

*   **File Handling:**
    *   Reading from and writing to files on the server.
    *   Functions like `fopen()`, `fread()`, `fwrite()`, `fclose()`, `file_get_contents()`, `file_put_contents()`.

    ```php
    <?php
    // Writing to a file
    $file = 'my_log.txt';
    $log_message = date('Y-m-d H:i:s') . " - Log entry.\n";
    file_put_contents($file, $log_message, FILE_APPEND); // FILE_APPEND to add to the end

    // Reading from a file
    $content = file_get_contents($file);
    echo "<pre>" . htmlspecialchars($content) . "</pre>";
    ?>
    ```

*   **Session Management:**
    *   Allows storing user-specific information across multiple page requests (e.g., login status).
    *   Uses `$_SESSION` superglobal and functions like `session_start()`.

    ```php
    <?php
    session_start(); // Must be called before any output

    $_SESSION['username'] = 'Alice';
    echo "Session variable 'username' set to: " . $_SESSION['username'];
    ?>
    ```

---

### 4. PHP vs. Node.js (Contextual Understanding)

*   **Execution Model:**
    *   **PHP:** Typically multi-process or multi-thread per request. A new process/thread is often spun up for each incoming request.
    *   **Node.js:** Single-threaded, event-driven, non-blocking I/O. Excellent for handling many concurrent connections efficiently with fewer resources.

*   **Language:**
    *   **PHP:** A dedicated server-side scripting language.
    *   **Node.js:** JavaScript runtime, allowing developers to use JavaScript on both the frontend and backend.

*   **Asynchronous Operations:**
    *   **PHP:** Historically synchronous, but modern PHP frameworks and extensions (like Swoole, ReactPHP) are enabling asynchronous programming.
    *   **Node.js:** Built from the ground up for asynchronous operations using callbacks, Promises, and async/await.

*   **Package Management:**
    *   **PHP:** Composer (for libraries and dependencies).
    *   **Node.js:** npm (Node Package Manager) or Yarn.

*   **Use Cases:**
    *   **PHP:** Still very strong for traditional web applications, content management systems (WordPress, Drupal), and general-purpose backend development.
    *   **Node.js:** Popular for real-time applications (chat apps, gaming), APIs, microservices, SPAs (Single Page Applications), and projects requiring high concurrency.

---

### 5. Practice Questions and Exercises

**Question 1:**
What is the primary difference between how PHP and Node.js handle incoming requests in terms of their execution model?

**Answer 1:**
PHP typically uses a multi-process or multi-thread per request model, meaning a new process or thread might be created for each request. Node.js, on the other hand, uses a single-threaded, event-driven, non-blocking I/O model, allowing it to handle many concurrent connections efficiently without necessarily spawning new processes for each.

**Question 2:**
Which PHP superglobal array is used to access data submitted via an HTML form using the POST method?

**Answer 2:**
The `$_POST` superglobal array.

**Question 3:**
Write a short PHP script that:
a) Declares a variable `$userName` and assigns it the string "Guest".
b) Prints a welcome message using `echo` that includes the `$userName`.
c) Uses `htmlspecialchars()` when printing to ensure safety.

**Answer 3:**
```php
<?php
$userName = "Guest";
echo "<p>Welcome, " . htmlspecialchars($userName) . "!</p>";
?>
```

**Question 4:**
What is the purpose of `session_start()` in PHP?

**Answer 4:**
`session_start()` is used to initiate or resume a session. It must be called before any output is sent to the browser, and it allows you to store and retrieve user-specific data across multiple page requests using the `$_SESSION` superglobal array.

**Question 5 (Conceptual):**
If you were building a real-time chat application where many users would be connected simultaneously, which server-side environment (PHP or Node.js) might be more inherently suited for handling the concurrency, and why?

**Answer 5:**
Node.js would likely be more inherently suited. Its event-driven, non-blocking I/O architecture is designed to handle a large number of concurrent connections efficiently with a single thread, which is ideal for real-time applications like chat. While PHP can achieve similar results with specific frameworks or extensions, Node.js's core design is built for this.

---

### 6. Important Points to Remember

*   **Server-Side Execution:** PHP code runs on the server, processing requests and generating dynamic content before sending HTML to the browser.
*   **`<?php ... ?>`:** The standard way to delimit PHP code.
*   **Variables:** Always start with `$`.
*   **Semicolons:** Essential to terminate statements.
*   **Superglobals:** Arrays like `$_GET`, `$_POST`, `$_SESSION`, and `$_SERVER` provide access to request data and server information.
*   **Security:** Always sanitize user input (e.g., using `htmlspecialchars()`) to prevent security vulnerabilities like XSS.
*   **Database Interaction:** Use extensions like `mysqli` or `PDO` for secure and efficient database operations.
*   **Contextual Understanding:** This PHP tour is to contrast and compare with Node.js, understanding their strengths and weaknesses. Node.js's asynchronous nature is a key differentiator.

---
