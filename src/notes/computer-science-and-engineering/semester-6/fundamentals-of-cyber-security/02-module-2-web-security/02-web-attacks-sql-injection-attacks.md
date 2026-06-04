---
title: "Web Attacks- SQL Injection Attacks"
subject: "FUNDAMENTALS OF CYBER SECURITY"
module: "Module 2: Web Security"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be2f"
status: "completed"
scrapedAt: "2026-05-20T16:54:25.917Z"
---
## FUNDAMENTALS OF CYBER SECURITY - Module 2: Web Security - SQL Injection Attacks

**Learning Outcomes:**

*   Understand the principles and mechanics of SQL injection attacks.
*   Identify different types of SQL injection vulnerabilities.
*   Analyze and classify SQL injection attack vectors.
*   Explain the impact and consequences of successful SQL injection attacks.
*   Describe common SQL injection prevention techniques and best practices.

**1. Introduction to SQL Injection (SQLi)**

*   **Definition:** SQL Injection (SQLi) is a code injection technique that exploits security vulnerabilities in the data-layer of an application. It occurs when user-supplied input is not properly sanitized and is then inserted into an SQL query, potentially allowing an attacker to manipulate the database logic.
*   **Principle:** SQLi works by tricking the application into executing unintended SQL code. Attackers insert malicious SQL statements into an input field, which the application then processes as a legitimate query, thus gaining unauthorized access to sensitive data.
*   **Why it's a Threat:** SQLi is a prevalent and dangerous attack vector because it can lead to:
    *   Data breaches (sensitive information disclosure)
    *   Data modification or deletion
    *   Authentication bypass
    *   Server compromise (in some cases, OS command execution)

**2. Key Concepts and Definitions**

*   **SQL (Structured Query Language):** The standard language for managing data held in a relational database management system (RDBMS).
*   **RDBMS (Relational Database Management System):** A database management system (DBMS) that is based on the relational model. Examples include MySQL, PostgreSQL, Oracle, SQL Server.
*   **User Input:** Data provided by the user, often through web forms, URL parameters, or cookies.  This is the entry point for SQLi.
*   **Sanitization:** The process of cleaning user input to remove or escape potentially harmful characters or code snippets before using the input in SQL queries.
*   **Prepared Statements (Parameterized Queries):** A method of executing SQL statements where the SQL code is defined separately from the user-provided data. This helps prevent SQLi.
*   **Database Credentials:** Usernames and passwords used to authenticate to the database.  SQLi can expose these.
*   **Database Schema:** The structure and organization of the data within a database, including tables, columns, and relationships. SQLi can be used to extract the schema.
*   **Error-Based SQLi:**  An attack technique that relies on the database server returning error messages containing sensitive information about the database structure or contents. The attacker uses these errors to infer information and craft further attacks.
*   **Blind SQLi:**  An attack technique where the attacker cannot see any data output from the injected SQL query, but can still infer information by observing the application's response time or other behavioral changes.
*   **Boolean-Based Blind SQLi:** An attack where the attacker forces the application to return different results depending on the truth value of a condition.
*   **Time-Based Blind SQLi:** An attack where the attacker induces a delay in the database server's response based on the result of a logical statement.

**3. Types of SQL Injection Vulnerabilities**

*   **Error-Based SQL Injection:**
    *   **Description:** The attacker crafts malicious SQL queries that cause the database to generate error messages. These errors often reveal sensitive information like table names, column names, and database version.
    *   **Example:**

        ```sql
        -- Vulnerable PHP code:
        $id = $_GET['id'];
        $query = "SELECT * FROM users WHERE id = " . $id;
        $result = mysqli_query($connection, $query);

        -- Attacker Input:
        ' OR 1=1 --
        -- Resulting Query:
        SELECT * FROM users WHERE id = ' OR 1=1 --
        ```
        In this case, `1=1` will always be true, returning all rows. The `--` comments out the rest of the original query.  Error messages can be used to learn table and column names, for example, by deliberately introducing syntax errors.

*   **Union-Based SQL Injection:**
    *   **Description:** The attacker uses the `UNION` SQL keyword to combine the results of their malicious query with the results of the original query.  This allows them to extract data from other tables in the database.
    *   **Example:**

        ```sql
        -- Vulnerable PHP code:
        $username = $_POST['username'];
        $password = $_POST['password'];
        $query = "SELECT * FROM users WHERE username = '" . $username . "' AND password = '" . $password . "'";
        $result = mysqli_query($connection, $query);

        -- Attacker Input (Username):
        ' UNION SELECT username, password FROM admin --
        -- Resulting Query:
        SELECT * FROM users WHERE username = '' UNION SELECT username, password FROM admin --' AND password = 'some_password'
        ```
        This query will return the usernames and passwords from the `admin` table in addition to any matching entries from the `users` table.  The number of columns in each `SELECT` statement must match.

*   **Blind SQL Injection (Boolean-Based):**
    *   **Description:** The attacker cannot directly see the output of the query, but can infer information based on whether the application returns different results based on a true/false condition.
    *   **Example:**

        ```sql
        -- Vulnerable PHP code:
        $id = $_GET['id'];
        $query = "SELECT * FROM products WHERE id = " . $id;
        $result = mysqli_query($connection, $query);

        -- Attacker Input:
        1 AND (SELECT 1 FROM users WHERE username='admin')=1
        -- Resulting Query:
        SELECT * FROM products WHERE id = 1 AND (SELECT 1 FROM users WHERE username='admin')=1
        ```

        If the application returns a product, the attacker knows an admin user exists. The attacker can then brute-force the password character by character.

*   **Blind SQL Injection (Time-Based):**
    *   **Description:** The attacker injects SQL code that causes the database to pause for a specific amount of time if a condition is true. The attacker can then determine the truth of the condition by observing the response time of the application.
    *   **Example:**

        ```sql
        -- Vulnerable PHP code:
        $id = $_GET['id'];
        $query = "SELECT * FROM products WHERE id = " . $id;
        $result = mysqli_query($connection, $query);

        -- Attacker Input:
        1 AND IF(SUBSTRING(version(),1,1)='5',SLEEP(5),0)
        -- Resulting Query:
        SELECT * FROM products WHERE id = 1 AND IF(SUBSTRING(version(),1,1)='5',SLEEP(5),0)
        ```

        If the first character of the database version is '5', the query will sleep for 5 seconds. The attacker can detect this delay and infer information about the database version.

*   **Second-Order SQL Injection:**
    *   **Description:** The attacker's malicious SQL code is stored in the database (e.g., through a user profile field). Later, when this stored data is retrieved and used in another SQL query without proper sanitization, the SQL injection is triggered.
    *   **Example:**  A user profile update form allows storing a city. The city field is not sanitized. An attacker enters a malicious SQL payload as their city.  Later, an administrative script generates a report using the city data without sanitizing it, leading to an SQL injection.

**4. SQL Injection Attack Vectors**

*   **GET Requests (URL Parameters):**  Data passed in the URL (e.g., `example.com/page.php?id=1`).  Easily manipulated by the attacker.
*   **POST Requests (Form Data):** Data submitted via HTML forms.  Less visible than GET parameters but equally vulnerable if not sanitized.
*   **Cookies:** Data stored in the user's browser.  Attackers can modify cookie values and potentially inject SQL code.
*   **HTTP Headers:** Some headers can be vulnerable (e.g., `User-Agent`, `Referer`) if applications log or use them in SQL queries without proper sanitization.
*   **JSON/XML Data:** If JSON or XML data is parsed and used to construct SQL queries, vulnerabilities can arise if proper sanitization is not implemented.

**5. Impact and Consequences of SQL Injection Attacks**

*   **Data Breach/Data Theft:**  Access to sensitive information such as usernames, passwords, credit card details, personal data, trade secrets, and intellectual property.
*   **Data Modification/Deletion:**  Altering or deleting data within the database, leading to data corruption, financial losses, or reputational damage.
*   **Authentication Bypass:**  Bypassing login mechanisms to gain unauthorized access to administrator accounts or other privileged user accounts.
*   **Denial of Service (DoS):**  Disrupting the availability of the application by overloading the database server or causing errors.
*   **Remote Code Execution (RCE):** In certain database configurations, it might be possible to execute operating system commands on the database server, leading to a complete compromise of the system.
*   **Lateral Movement:** Gaining access to other systems within the network by leveraging the compromised database server as a stepping stone.

**6. SQL Injection Prevention Techniques and Best Practices**

*   **Input Validation:**
    *   **Whitelisting:**  Defining a set of allowed characters or patterns for each input field and rejecting any input that does not conform to these rules.  This is the most secure approach when possible.
    *   **Blacklisting:** Filtering out specific characters or keywords known to be used in SQL injection attacks (e.g., `;`, `'`, `--`, `UNION`, `SELECT`).  Less effective than whitelisting as attackers can often find ways to bypass blacklist filters.
    *   **Data Type Validation:** Ensuring that user input matches the expected data type (e.g., integers, strings, dates).

*   **Parameterized Queries (Prepared Statements):**
    *   **Description:**  Separating the SQL code from the user-supplied data. The SQL code is precompiled by the database server, and the user data is passed as parameters to the query. This prevents the user data from being interpreted as SQL code.
    *   **Example (PHP with PDO):**

        ```php
        $username = $_POST['username'];
        $password = $_POST['password'];

        $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username AND password = :password");
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        $stmt->execute();
        ```

*   **Escaping Special Characters:**
    *   **Description:**  Modifying characters that have special meaning in SQL (e.g., single quotes, double quotes, backslashes) by adding a backslash before them.  This prevents them from being interpreted as SQL code.  This is a less secure option than prepared statements.
    *   **Example (PHP with `mysqli_real_escape_string`):**

        ```php
        $username = mysqli_real_escape_string($connection, $_POST['username']);
        $password = mysqli_real_escape_string($connection, $_POST['password']);
        $query = "SELECT * FROM users WHERE username = '" . $username . "' AND password = '" . $password . "'";
        $result = mysqli_query($connection, $query);
        ```

*   **Least Privilege Principle:**
    *   Grant database users only the minimum necessary privileges to perform their tasks.  Avoid using the `root` or `admin` account for application connections.

*   **Database Security Hardening:**
    *   Keeping the database software up to date with the latest security patches.
    *   Disabling unnecessary database features and stored procedures that could be exploited.
    *   Configuring proper database authentication and authorization mechanisms.
    *   Regularly auditing database logs for suspicious activity.

*   **Web Application Firewall (WAF):**
    *   A WAF can analyze incoming HTTP traffic and block requests that contain malicious SQL injection payloads.

*   **Regular Security Audits and Penetration Testing:**
    *   Identify and remediate SQL injection vulnerabilities before attackers can exploit them.

*   **Error Handling:**
    *   Avoid displaying detailed database error messages to users in production environments, as this can provide attackers with valuable information.  Log errors for debugging purposes instead.

**7. Important Points to Remember**

*   **Always validate and sanitize user input.**
*   **Use parameterized queries (prepared statements) whenever possible.**
*   **Never trust user input, even if it comes from a seemingly trusted source.**
*   **Implement a layered security approach with multiple defense mechanisms.**
*   **Stay up-to-date with the latest SQL injection techniques and prevention methods.**
*   **Regularly test your applications for SQL injection vulnerabilities.**
*   **Educate developers on secure coding practices.**

**8. Practice Questions/Exercises**

**Question 1:** What is SQL Injection and how does it work?

**Answer:** SQL Injection is a code injection technique that exploits security vulnerabilities in the data-layer of an application. It works by injecting malicious SQL statements into an input field, which the application then processes as a legitimate query, thus gaining unauthorized access to sensitive data.

**Question 2:** Explain the difference between Error-Based and Blind SQL Injection.

**Answer:**
*   **Error-Based SQL Injection:** The attacker receives error messages from the database server containing sensitive information about the database structure.  The attacker uses this feedback to craft further attacks.
*   **Blind SQL Injection:** The attacker doesn't see any direct output from the injected SQL query but can infer information based on the application's response time (Time-Based) or different behavior (Boolean-Based) depending on the truth value of a condition.

**Question 3:** Give an example of a vulnerable code snippet and show how an attacker could exploit it with SQL injection.

**Answer:**

```php
// Vulnerable PHP code:
$id = $_GET['product_id'];
$query = "SELECT * FROM products WHERE id = " . $id;
$result = mysqli_query($connection, $query);
```

**Attack:**

`example.com/product.php?product_id=1 OR 1=1 --`

**Resulting Query:**

`SELECT * FROM products WHERE id = 1 OR 1=1 --`

This will return all rows from the `products` table, as `1=1` is always true.  The `--` comments out the remainder of the original SQL query.

**Question 4:** What is a parameterized query, and how does it help prevent SQL injection?

**Answer:** A parameterized query (also known as a prepared statement) is a way of executing SQL statements where the SQL code is defined separately from the user-provided data. The database server precompiles the SQL code and treats the user data as parameters, preventing it from being interpreted as SQL code. This prevents attackers from injecting malicious SQL commands.

**Question 5:** List three common SQL injection prevention techniques.

**Answer:**
1.  Input Validation (whitelisting is preferable)
2.  Parameterized Queries (Prepared Statements)
3.  Least Privilege Principle

**Question 6:** Explain the concept of Second-Order SQL Injection.

**Answer:** Second-order SQL injection occurs when malicious SQL code is initially stored in the database (e.g., through a vulnerable input field), and then later executed when that stored data is retrieved and used in another SQL query without proper sanitization.

**Question 7:** True or False: Blacklisting is the most effective way to prevent SQL injection.

**Answer:** False. Whitelisting is the most effective, as it allows you to control exactly what input is valid. Blacklisting can be bypassed by attackers finding new ways to inject SQL.

These notes provide a comprehensive overview of SQL injection attacks, covering the learning outcomes and including key concepts, examples, practice questions, and important points to remember. They are designed to help students understand the principles of SQLi and how to prevent it. Remember to always prioritize secure coding practices and implement robust security measures to protect your web applications.
