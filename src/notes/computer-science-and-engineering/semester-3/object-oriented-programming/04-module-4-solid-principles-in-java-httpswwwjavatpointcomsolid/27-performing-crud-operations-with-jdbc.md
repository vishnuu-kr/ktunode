---
title: "Performing CRUD Operations with JDBC."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: SOLID Principles in Java ( https://www.javatpoint.com/solid"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ace2"
status: "completed"
scrapedAt: "2026-05-20T16:29:36.901Z"
---
## Module 4: Performing CRUD Operations with JDBC

**Subject:** OBJECT ORIENTED PROGRAMMING
**Module:** Module 4: SOLID Principles in Java
**Topic:** Performing CRUD Operations with JDBC
**Description:** Implementing CRUD (Create, Read, Update, Delete) operations in Java using JDBC (Java Database Connectivity).  This topic touches upon the application of SOLID principles indirectly by highlighting the importance of well-defined interfaces and separation of concerns when interacting with databases. While the provided link focuses on SOLID principles in general, this module's specific focus is on JDBC operations.
**Resource:** While the provided link focuses on SOLID principles, the core material for this module relies on understanding JDBC and SQL. The provided link (https://www.javatpoint.com/solid) serves as a contextual reference point and its contents are used to inform the application of SOLID principles later.

**Learning Outcomes:**

*   Understand the core concepts of JDBC.
*   Establish a connection to a database using JDBC.
*   Implement Create, Read, Update, and Delete (CRUD) operations.
*   Write and execute SQL queries for each CRUD operation.
*   Handle exceptions and manage resources properly.
*   Discuss how SOLID principles can be applied, even if indirectly, to code interacting with JDBC.

### 1. Introduction to JDBC

*   **Definition:** Java Database Connectivity (JDBC) is a Java API that allows Java applications to interact with databases.  It provides a set of interfaces and classes to connect to databases, execute queries, and retrieve results.

*   **Key Components:**
    *   **JDBC Driver:** A software component that enables a Java application to interact with a specific database.  Each database (e.g., MySQL, PostgreSQL, Oracle) requires its own JDBC driver.
    *   **DriverManager:** Manages the available JDBC drivers.
    *   **Connection:** Represents a connection to a database.
    *   **Statement:** Used to execute SQL queries.  There are three types:
        *   `Statement`: For basic SQL queries.
        *   `PreparedStatement`: For precompiled SQL queries, especially useful for parameterized queries to prevent SQL injection.
        *   `CallableStatement`: For executing stored procedures.
    *   **ResultSet:** Represents the result set returned by a SQL query.

### 2. Setting up the Environment

*   **JDBC Driver Installation:** Download the appropriate JDBC driver JAR file for your database (e.g., `mysql-connector-java-8.0.33.jar` for MySQL).  Add the JAR file to your project's classpath. (e.g., using your IDE's project structure settings or Maven/Gradle).

*   **Database Setup:** Ensure you have a database server installed and running (e.g., MySQL, PostgreSQL). Create a database and a table for your application.

    **Example SQL (MySQL):**

    ```sql
    CREATE DATABASE IF NOT EXISTS java_crud;

    USE java_crud;

    CREATE TABLE IF NOT EXISTS employees (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE,
        salary DECIMAL(10, 2)
    );
    ```

### 3. Establishing a Connection

*   **Code Example:**

    ```java
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;

    public class DatabaseConnection {

        private static final String DB_URL = "jdbc:mysql://localhost:3306/java_crud"; // Replace with your database URL
        private static final String DB_USER = "root";       // Replace with your database username
        private static final String DB_PASSWORD = "password"; // Replace with your database password

        public static Connection getConnection() throws SQLException {
            Connection connection = null;
            try {
                Class.forName("com.mysql.cj.jdbc.Driver"); // Load the driver class (specific to MySQL)
                connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
                System.out.println("Connected to the database!");
            } catch (ClassNotFoundException e) {
                System.err.println("JDBC driver not found: " + e.getMessage());
                // Handle the exception appropriately, e.g., throw a RuntimeException
                throw new SQLException("JDBC driver not found", e);
            }
            return connection;
        }

        public static void main(String[] args) {
            try (Connection connection = getConnection()) {
                // Connection successful - do something with the connection if needed
            } catch (SQLException e) {
                System.err.println("Connection failed: " + e.getMessage());
            }
        }
    }
    ```

*   **Explanation:**
    *   `Class.forName("com.mysql.cj.jdbc.Driver")`: Loads the MySQL JDBC driver class. This is necessary for the `DriverManager` to find the correct driver.  The driver class name depends on the database and driver version.
    *   `DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)`: Establishes a connection to the database using the URL, username, and password. The URL format depends on the database.
    *   **Important:** Handle `SQLException` appropriately. Use try-with-resources for automatic resource management (closing the connection).

### 4. CRUD Operations

*   **C - Create (Insert)**

    ```java
    import java.sql.Connection;
    import java.sql.PreparedStatement;
    import java.sql.SQLException;

    public class EmployeeDAO { // Data Access Object (DAO)

        public void createEmployee(String name, String email, double salary) throws SQLException {
            String sql = "INSERT INTO employees (name, email, salary) VALUES (?, ?, ?)";
            try (Connection connection = DatabaseConnection.getConnection();
                 PreparedStatement preparedStatement = connection.prepareStatement(sql)) {

                preparedStatement.setString(1, name);
                preparedStatement.setString(2, email);
                preparedStatement.setDouble(3, salary);

                int rowsAffected = preparedStatement.executeUpdate();
                System.out.println(rowsAffected + " row(s) inserted.");
            }
        }
    }

    //Example usage:
    public class Main {
        public static void main(String[] args) {
            EmployeeDAO employeeDAO = new EmployeeDAO();
            try {
                employeeDAO.createEmployee("John Doe", "john.doe@example.com", 50000.00);
            } catch (SQLException e) {
                System.err.println("Error creating employee: " + e.getMessage());
            }
        }
    }
    ```

    *   **Key Concepts:**
        *   `PreparedStatement`:  Crucial for preventing SQL injection. Uses placeholders (`?`) for parameters.  Values are then set using methods like `setString`, `setInt`, `setDouble`, etc.
        *   `executeUpdate()`: Executes INSERT, UPDATE, or DELETE statements.  Returns the number of rows affected.
        *   **DAO Pattern (Data Access Object):**  This pattern separates the data access logic from the business logic.  The `EmployeeDAO` class encapsulates all database interactions related to employees.

*   **R - Read (Select)**

    ```java
    import java.sql.Connection;
    import java.sql.PreparedStatement;
    import java.sql.ResultSet;
    import java.sql.SQLException;

    public class EmployeeDAO { // Using the same EmployeeDAO class

        public void getEmployeeById(int id) throws SQLException {
            String sql = "SELECT * FROM employees WHERE id = ?";
            try (Connection connection = DatabaseConnection.getConnection();
                 PreparedStatement preparedStatement = connection.prepareStatement(sql)) {

                preparedStatement.setInt(1, id);

                try (ResultSet resultSet = preparedStatement.executeQuery()) {
                    if (resultSet.next()) {
                        System.out.println("ID: " + resultSet.getInt("id"));
                        System.out.println("Name: " + resultSet.getString("name"));
                        System.out.println("Email: " + resultSet.getString("email"));
                        System.out.println("Salary: " + resultSet.getDouble("salary"));
                    } else {
                        System.out.println("Employee not found with ID: " + id);
                    }
                }
            }
        }
    }

    //Example usage:
    public class Main {
        public static void main(String[] args) {
            EmployeeDAO employeeDAO = new EmployeeDAO();
            try {
                employeeDAO.getEmployeeById(1);
            } catch (SQLException e) {
                System.err.println("Error retrieving employee: " + e.getMessage());
            }
        }
    }
    ```

    *   **Key Concepts:**
        *   `executeQuery()`: Executes SELECT statements.  Returns a `ResultSet`.
        *   `ResultSet`:  Represents the result of the query.  You iterate through the rows using `resultSet.next()`.
        *   Access column values using methods like `resultSet.getInt(columnName)`, `resultSet.getString(columnName)`, `resultSet.getDouble(columnName)`, etc.
        *   **Always close the ResultSet** within a `try-with-resources` block, after closing the PreparedStatement/Statement.

*   **U - Update (Update)**

    ```java
    import java.sql.Connection;
    import java.sql.PreparedStatement;
    import java.sql.SQLException;

    public class EmployeeDAO { // Using the same EmployeeDAO class

        public void updateEmployeeSalary(int id, double newSalary) throws SQLException {
            String sql = "UPDATE employees SET salary = ? WHERE id = ?";
            try (Connection connection = DatabaseConnection.getConnection();
                 PreparedStatement preparedStatement = connection.prepareStatement(sql)) {

                preparedStatement.setDouble(1, newSalary);
                preparedStatement.setInt(2, id);

                int rowsAffected = preparedStatement.executeUpdate();
                System.out.println(rowsAffected + " row(s) updated.");
            }
        }
    }

    //Example usage:
    public class Main {
        public static void main(String[] args) {
            EmployeeDAO employeeDAO = new EmployeeDAO();
            try {
                employeeDAO.updateEmployeeSalary(1, 60000.00);
            } catch (SQLException e) {
                System.err.println("Error updating employee salary: " + e.getMessage());
            }
        }
    }
    ```

    *   **Key Concepts:**
        *   Uses `executeUpdate()` like INSERT.
        *   The `WHERE` clause is crucial to specify which rows to update.  Without it, all rows in the table would be updated.

*   **D - Delete (Delete)**

    ```java
    import java.sql.Connection;
    import java.sql.PreparedStatement;
    import java.sql.SQLException;

    public class EmployeeDAO { // Using the same EmployeeDAO class

        public void deleteEmployee(int id) throws SQLException {
            String sql = "DELETE FROM employees WHERE id = ?";
            try (Connection connection = DatabaseConnection.getConnection();
                 PreparedStatement preparedStatement = connection.prepareStatement(sql)) {

                preparedStatement.setInt(1, id);

                int rowsAffected = preparedStatement.executeUpdate();
                System.out.println(rowsAffected + " row(s) deleted.");
            }
        }
    }

    //Example usage:
    public class Main {
        public static void main(String[] args) {
            EmployeeDAO employeeDAO = new EmployeeDAO();
            try {
                employeeDAO.deleteEmployee(1);
            } catch (SQLException e) {
                System.err.println("Error deleting employee: " + e.getMessage());
            }
        }
    }
    ```

    *   **Key Concepts:**
        *   Uses `executeUpdate()` like INSERT and UPDATE.
        *   The `WHERE` clause is essential to avoid deleting all rows in the table.

### 5. Exception Handling and Resource Management

*   **Importance:** JDBC operations can throw `SQLException` due to various reasons (e.g., database connection errors, invalid SQL syntax).  Proper exception handling and resource management are crucial for application stability and data integrity.

*   **Best Practices:**
    *   **Use `try-catch` blocks:** To catch `SQLException` and handle errors gracefully.
    *   **Use `try-with-resources`:**  This ensures that resources like `Connection`, `Statement`, and `ResultSet` are automatically closed, even if exceptions occur.  This prevents resource leaks.
    *   **Log Errors:** Use a logging framework (e.g., SLF4J, Log4j) to log errors for debugging and monitoring.
    *   **Rollback Transactions:** If multiple database operations must be performed atomically (all or nothing), use transactions. If an error occurs, rollback the transaction to revert any changes.

    ```java
    import java.sql.Connection;
    import java.sql.SQLException;

    public class TransactionExample {

        public void transferFunds(int account1Id, int account2Id, double amount) {
            Connection connection = null;
            try {
                connection = DatabaseConnection.getConnection();
                connection.setAutoCommit(false); // Start a transaction

                // 1. Withdraw from account1
                withdraw(connection, account1Id, amount);

                // 2. Deposit to account2
                deposit(connection, account2Id, amount);

                connection.commit(); // Commit the transaction if both operations succeed
                System.out.println("Funds transferred successfully.");

            } catch (SQLException e) {
                System.err.println("Transaction failed: " + e.getMessage());
                if (connection != null) {
                    try {
                        connection.rollback(); // Rollback the transaction if any operation fails
                        System.out.println("Transaction rolled back.");
                    } catch (SQLException ex) {
                        System.err.println("Error rolling back transaction: " + ex.getMessage());
                    }
                }
            } finally {
                if (connection != null) {
                    try {
                        connection.setAutoCommit(true); // Reset to default auto-commit mode
                        connection.close();
                    } catch (SQLException e) {
                        System.err.println("Error closing connection: " + e.getMessage());
                    }
                }
            }
        }

        private void withdraw(Connection connection, int accountId, double amount) throws SQLException {
            // Implement withdraw logic using PreparedStatement
            System.out.println("Withdrawing " + amount + " from account " + accountId);
            // (Placeholder for actual database interaction)
        }

        private void deposit(Connection connection, int accountId, double amount) throws SQLException {
            // Implement deposit logic using PreparedStatement
            System.out.println("Depositing " + amount + " to account " + accountId);
            // (Placeholder for actual database interaction)
        }

        public static void main(String[] args) {
            TransactionExample example = new TransactionExample();
            example.transferFunds(1, 2, 100.00);
        }
    }
    ```

### 6. SOLID Principles and JDBC Interaction (Indirect Application)

While the provided javatpoint link directly addresses SOLID principles in more general terms, consider how those principles can influence your JDBC code structure:

*   **Single Responsibility Principle (SRP):** A class should have only one reason to change. The `EmployeeDAO` example follows this. It's responsible *only* for accessing employee data in the database.  The business logic that uses the employee data should reside elsewhere.

*   **Open/Closed Principle (OCP):** Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. Imagine you need to support a new database. Instead of modifying the existing `DatabaseConnection` class, you could create a new `PostgresDatabaseConnection` class that extends an abstract `DatabaseConnection` or implements a `DatabaseConnectionInterface`. This minimizes changes to existing code.

*   **Liskov Substitution Principle (LSP):** Subtypes must be substitutable for their base types without altering the correctness of the program. If you were to create different DAO implementations (e.g., `EmployeeDAOMySQL`, `EmployeeDAOPostgres`), they should all adhere to a common interface (e.g., `EmployeeDAOInterface`). This allows you to switch between different database implementations without breaking the code that uses the DAO.

*   **Interface Segregation Principle (ISP):** Clients should not be forced to depend upon interfaces that they do not use. Imagine your `EmployeeDAO` interface had a method called `getAllEmployeeAddresses()`.  If a particular component only needed the employee's name and ID, it would be forced to implement (or depend on) a method it doesn't use. It's better to have smaller, more focused interfaces.

*   **Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules. Both should depend on abstractions. The `EmployeeDAO` depends on abstractions like `Connection`, `PreparedStatement`, and `ResultSet`, which are provided by the JDBC API. The business logic doesn't directly depend on concrete JDBC implementations. This makes the code more testable and maintainable. Use dependency injection to provide concrete implementations.

### 7. Important Points to Remember

*   **SQL Injection:**  Always use `PreparedStatement` to prevent SQL injection vulnerabilities.  Never concatenate user input directly into SQL queries.
*   **Resource Management:**  Ensure that all database resources (Connections, Statements, ResultSets) are closed properly to prevent resource leaks. Use `try-with-resources`.
*   **Error Handling:** Implement robust exception handling to catch `SQLExceptions` and handle errors gracefully.
*   **Transactions:**  Use transactions to ensure data consistency when performing multiple database operations.
*   **Connection Pooling:**  For production environments, use connection pooling to improve performance and reduce the overhead of establishing new connections.  Popular connection pool libraries include HikariCP and Apache Commons DBCP.
*   **Data Access Object (DAO) Pattern:** Use the DAO pattern to separate data access logic from business logic.
*   **Logging:**  Implement logging to track database interactions and errors.

### 8. Practice Questions/Exercises

1.  **Question:** Explain the purpose of the `PreparedStatement` interface in JDBC and how it helps prevent SQL injection.
    *   **Answer:** The `PreparedStatement` interface is used to execute precompiled SQL queries with parameters.  It prevents SQL injection by treating user input as data rather than executable SQL code. Placeholders (`?`) are used for parameters, and values are set using methods like `setString()` and `setInt()`.  The JDBC driver then properly escapes the data before inserting it into the query.

2.  **Question:** Write a Java code snippet using JDBC to update the email address of an employee given their ID.
    *   **Answer:**

    ```java
    public void updateEmployeeEmail(int id, String newEmail) throws SQLException {
        String sql = "UPDATE employees SET email = ? WHERE id = ?";
        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql)) {

            preparedStatement.setString(1, newEmail);
            preparedStatement.setInt(2, id);

            int rowsAffected = preparedStatement.executeUpdate();
            System.out.println(rowsAffected + " row(s) updated.");
        }
    }
    ```

3.  **Question:** Explain the importance of using `try-with-resources` in JDBC code.
    *   **Answer:** `try-with-resources` automatically closes resources (e.g., `Connection`, `Statement`, `ResultSet`) after the `try` block completes, regardless of whether exceptions occur. This prevents resource leaks and ensures that database connections are released promptly, improving application stability and performance.  Before try-with-resources, you would need to use `finally` blocks to explicitly close the resources, which is more verbose and prone to errors if not done correctly.

4.  **Question:** What is a transaction, and why is it important when performing multiple related database operations?
    *   **Answer:** A transaction is a sequence of database operations that are treated as a single logical unit of work. Either all operations within the transaction succeed (commit), or none of them succeed (rollback). Transactions are important for ensuring data consistency and integrity when performing multiple related database operations. If one operation fails, the transaction can be rolled back to undo any changes made by previous operations, leaving the database in a consistent state.

5.  **Question:** How can the Single Responsibility Principle (SRP) influence the design of a class that interacts with a database using JDBC?
    *   **Answer:** Applying SRP means the class should have only one reason to change.  A class responsible for interacting with the database should *only* focus on data access logic (e.g., connecting to the database, executing queries, retrieving results).  It should not contain business logic or presentation logic.  This separation makes the code more modular, testable, and maintainable. The `EmployeeDAO` example demonstrates this, focusing solely on database interactions related to employees.

6.  **Question:**  Describe the purpose of the `DriverManager` class in JDBC.
    *   **Answer:**  The `DriverManager` class manages a list of JDBC drivers. When a Java application attempts to connect to a database, the `DriverManager` uses the registered drivers to establish a connection based on the provided database URL. It selects the appropriate driver that can handle the connection request.  Before connecting, the correct driver class needs to be loaded (e.g., using `Class.forName("com.mysql.cj.jdbc.Driver");`).
