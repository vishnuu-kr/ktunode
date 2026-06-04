---
title: "Java DataBase Connectivity (JDBC)- JDBC architecture, Creating and Executing Queries – create table, delete, insert, select."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: Graphical User Interface and Database support of Java"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36017"
status: "completed"
scrapedAt: "2026-05-23T16:17:40.825Z"
---
# OBJECT ORIENTED PROGRAMMING
## Module 4: Graphical User Interface and Database Support of Java
### Topic: Java Database Connectivity (JDBC)

---

### **1. Introduction to JDBC**

*   **Definition:** JDBC (Java Database Connectivity) is a Java API that allows Java programs to interact with databases. It provides a standardized way for Java applications to send SQL statements to databases and retrieve results.
*   **Purpose:** JDBC acts as a bridge between Java applications and various database management systems (DBMS). It enables database operations like creating, reading, updating, and deleting data, as well as executing stored procedures.
*   **Relevance to CO4:** This topic directly addresses **CO4: Write Graphical User Interface based application programs by utilising Swing in Java and database connectivity.** Understanding JDBC is crucial for building applications that can store and retrieve data from a backend database.

---

### **2. JDBC Architecture**

The JDBC architecture is designed to be modular and extensible, allowing it to support a wide range of databases with minimal changes to the Java application. It consists of the following key components:

*   **JDBC API:**
    *   This is the set of Java classes and interfaces that provide the functionality for database access.
    *   It includes packages like `java.sql` and `javax.sql`.
    *   **Key Interfaces:** `Connection`, `Statement`, `ResultSet`, `PreparedStatement`, `DatabaseMetaData`, `ResultSetMetaData`.
    *   **Key Classes:** `DriverManager`, `SQLException`.
    *   **Reference:** Herbert Schildt's "Java: The Complete Reference" provides a detailed explanation of the JDBC API and its core interfaces. (Chapter on JDBC).

*   **JDBC Driver:**
    *   This is the most crucial part, acting as the interface between the JDBC API and the actual database.
    *   It translates JDBC calls into database-specific protocols and commands.
    *   There are different types of JDBC drivers:
        *   **Type 1: JDBC-ODBC Bridge Driver:**
            *   Converts JDBC calls into calls to an ODBC (Open Database Connectivity) driver.
            *   Requires an ODBC driver to be installed on the client machine.
            *   Not commonly used in modern applications due to performance and security concerns.
        *   **Type 2: JDBC-Native API Driver:**
            *   Uses the native API of the database to interact with the database.
            *   Requires the database client software to be installed on the client machine.
            *   Performance is better than Type 1, but still relies on native code.
        *   **Type 3: JDBC-Net Driver:**
            *   Communicates with the database through a middleware (network protocol) that translates JDBC requests to the database's native protocol.
            *   Does not require client software installation.
            *   More flexible and portable.
        *   **Type 4: JDBC-Proprietary Driver:**
            *   A pure Java driver that communicates directly with the database using its own network protocol.
            *   **This is the most preferred type of driver** as it requires no installation of client software and offers the best performance and portability.
            *   Examples: MySQL Connector/J, Oracle JDBC Driver.
    *   **Reference:** Paul Deitel and Harvey Deitel's "Java How to Program, Early Objects" provides a clear explanation of the different JDBC driver types. (Chapter on JDBC).

*   **Database:**
    *   The actual database management system (e.g., MySQL, PostgreSQL, Oracle, SQL Server, SQLite) that stores the data.

**Diagrammatic Representation (Conceptual):**

```
+-----------------+      +-----------------+      +-----------------+      +--------------+
| Java Application|----->|    JDBC API     |----->|   JDBC Driver   |----->|   Database   |
| (Your Code)     |      | (java.sql,     |      | (Type 1, 2, 3, 4)|      |              |
|                 |      | javax.sql)      |      |                 |      |              |
+-----------------+      +-----------------+      +-----------------+      +--------------+
```

**Key Concepts:**

*   **Driver Manager (`DriverManager`):** A class that loads JDBC drivers and establishes connections to the database.
*   **Connection (`Connection`):** An object that represents a session with a database. All database operations are performed through a `Connection` object.
*   **Statement (`Statement`):** An object used to execute SQL statements against a database.
*   **PreparedStatement (`PreparedStatement`):** An object that represents a precompiled SQL statement. It offers better performance and security (prevents SQL injection) compared to `Statement`.
*   **ResultSet (`ResultSet`):** A table-like object that holds the results of executing a `SELECT` query. It allows you to iterate through rows and access column values.

---

### **3. Steps for JDBC Connectivity**

To establish a connection and interact with a database using JDBC, follow these general steps:

1.  **Load the JDBC Driver:**
    *   Register the JDBC driver with the `DriverManager`. This tells `DriverManager` about the specific driver class that can handle the database connection.
    *   Modern JDBC drivers (Type 4) often use a `Class.forName()` call to load the driver class.
    *   **Example (for MySQL):**
        ```java
        Class.forName("com.mysql.cj.jdbc.Driver"); // For newer MySQL versions
        // Or for older versions:
        // Class.forName("com.mysql.jdbc.Driver");
        ```
    *   **Reference:** Herbert Schildt's "Java: The Complete Reference" covers the nuances of driver loading.

2.  **Establish a Connection:**
    *   Use the `DriverManager.getConnection()` method to create a `Connection` object.
    *   This method requires a **database URL**, which specifies the protocol, subprotocol, and database location.
    *   **Database URL Format:** `jdbc:<subprotocol>:<driver_specific_info>`
        *   `jdbc`: The standard JDBC prefix.
        *   `<subprotocol>`: Identifies the type of driver (e.g., `mysql`, `postgresql`, `oracle`, `odbc`).
        *   `<driver_specific_info>`: Contains details like the hostname, port, database name, and potentially connection parameters.
    *   **Example URLs:**
        *   **MySQL:** `jdbc:mysql://localhost:3306/mydatabase`
        *   **PostgreSQL:** `jdbc:postgresql://localhost:5432/mydatabase`
        *   **Oracle:** `jdbc:oracle:thin:@localhost:1521:mydatabase`
        *   **MS SQL Server:** `jdbc:sqlserver://localhost:1433;databaseName=mydatabase`
    *   **`getConnection()` Signature:**
        ```java
        Connection con = DriverManager.getConnection(databaseURL, username, password);
        ```
    *   **Reference:** Y. Daniel Liang's "Introduction to Java Programming" provides numerous examples of database URLs for different databases.

3.  **Create a Statement Object:**
    *   Once you have a `Connection`, you can create `Statement` or `PreparedStatement` objects to execute SQL commands.
    *   **Using `Statement`:**
        ```java
        Statement stmt = con.createStatement();
        ```
    *   **Using `PreparedStatement`:**
        ```java
        String sql = "INSERT INTO employees (name, salary) VALUES (?, ?)";
        PreparedStatement pstmt = con.prepareStatement(sql);
        ```

4.  **Execute SQL Queries:**
    *   Use the methods of `Statement` or `PreparedStatement` to send SQL commands to the database.
    *   **For DDL (Data Definition Language) and DML (Data Manipulation Language) statements that don't return a result set (like `CREATE`, `INSERT`, `UPDATE`, `DELETE`):** Use `executeUpdate()`. This method returns the number of rows affected by the query.
    *   **For SELECT queries that return a result set:** Use `executeQuery()`. This method returns a `ResultSet` object.
    *   **For executing stored procedures:** Use `execute()` or `prepareCall()`.
    *   **Example (INSERT using `Statement`):**
        ```java
        String sql = "INSERT INTO Students (rollno, name) VALUES (101, 'Alice')";
        int rowsAffected = stmt.executeUpdate(sql);
        System.out.println(rowsAffected + " row(s) inserted.");
        ```
    *   **Example (SELECT using `Statement`):**
        ```java
        String sql = "SELECT rollno, name FROM Students";
        ResultSet rs = stmt.executeQuery(sql);
        while (rs.next()) {
            int rollno = rs.getInt("rollno");
            String name = rs.getString("name");
            System.out.println("Roll No: " + rollno + ", Name: " + name);
        }
        ```
    *   **Example (INSERT using `PreparedStatement`):**
        ```java
        String sql = "INSERT INTO Employees (name, salary) VALUES (?, ?)";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setString(1, "Bob"); // Set first parameter (name)
        pstmt.setDouble(2, 50000.00); // Set second parameter (salary)
        int rowsAffected = pstmt.executeUpdate();
        System.out.println(rowsAffected + " row(s) inserted.");
        ```
    *   **Reference:** Herbert Schildt and Deitel & Deitel provide comprehensive examples for executing various SQL queries.

5.  **Process the Results (if any):**
    *   If you executed a `SELECT` query, the `ResultSet` object holds the data.
    *   Use `ResultSet.next()` to move to the next row.
    *   Use `ResultSet.getXXX()` methods (e.g., `getInt()`, `getString()`, `getDouble()`) to retrieve data from specific columns. You can refer to columns by their name or by their 1-based index.
    *   **Reference:** Nageswararao R.'s "Core Java: An Integrated Approach" offers practical examples of navigating and processing `ResultSet` objects.

6.  **Close Resources:**
    *   It is crucial to close all database resources (e.g., `ResultSet`, `Statement`, `Connection`) to release them and prevent resource leaks.
    *   Always close in the reverse order of their creation.
    *   **Best Practice:** Use a `try-with-resources` statement (Java 7+) or a `finally` block to ensure resources are closed even if exceptions occur.
    *   **Example (using `try-with-resources`):**
        ```java
        try (Connection con = DriverManager.getConnection(databaseURL, username, password);
             Statement stmt = con.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM Employees")) {

            while (rs.next()) {
                // Process data
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        ```
    *   **Example (using `finally`):**
        ```java
        Connection con = null;
        Statement stmt = null;
        ResultSet rs = null;
        try {
            con = DriverManager.getConnection(databaseURL, username, password);
            stmt = con.createStatement();
            rs = stmt.executeQuery("SELECT * FROM Employees");
            while (rs.next()) {
                // Process data
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (con != null) con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        ```
    *   **Reference:** Herbert Schildt's "Java: The Complete Reference" emphasizes the importance of resource management in JDBC.

---

### **4. Creating and Executing SQL Queries**

This section demonstrates how to perform common database operations using JDBC. For these examples, we'll assume a MySQL database named `companydb` and a table named `Employees`.

**Database Setup (SQL):**

```sql
-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS companydb;

-- Use the database
USE companydb;

-- Create the Employees table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS Employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10, 2),
    hire_date DATE
);
```

**Java Code Examples:**

**Common Setup:**

```java
import java.sql.*;

public class JdbcExample {

    // Database credentials
    static final String DB_URL = "jdbc:mysql://localhost:3306/companydb"; // Change if your DB is elsewhere
    static final String USER = "your_username"; // Replace with your DB username
    static final String PASS = "your_password"; // Replace with your DB password

    public static void main(String[] args) {
        // Database operations will be called from here
    }
}
```

**Important Note:** Replace `"your_username"` and `"your_password"` with your actual database credentials. You'll also need to download the appropriate JDBC driver JAR file (e.g., `mysql-connector-java-x.x.x.jar`) and add it to your project's classpath.

---

#### **4.1. Creating a Table (`CREATE TABLE`)**

*   **Purpose:** To define a new table in the database.
*   **Method:** `executeUpdate()`
*   **SQL Command:** `CREATE TABLE table_name (...)`

```java
// Inside JdbcExample class's main method or a separate method:
public static void createEmployeeTable() {
    String createTableSQL = "CREATE TABLE IF NOT EXISTS Employees (" +
                            "id INT AUTO_INCREMENT PRIMARY KEY, " +
                            "name VARCHAR(100) NOT NULL, " +
                            "salary DECIMAL(10, 2), " +
                            "hire_date DATE)";

    try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
         Statement stmt = conn.createStatement()) {

        System.out.println("Executing CREATE TABLE statement...");
        stmt.executeUpdate(createTableSQL);
        System.out.println("Table 'Employees' created successfully or already exists.");

    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

---

#### **4.2. Inserting Data (`INSERT INTO`)**

*   **Purpose:** To add new records (rows) to a table.
*   **Method:** `executeUpdate()`
*   **SQL Command:** `INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...)`
*   **Using `PreparedStatement` for safety and efficiency:**

```java
// Using Statement (less recommended for dynamic data)
public static void insertEmployeeStatement(String name, double salary, java.sql.Date hireDate) {
    String insertSQL = "INSERT INTO Employees (name, salary, hire_date) VALUES ('" +
                       name + "', " + salary + ", '" + hireDate + "')";

    try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
         Statement stmt = conn.createStatement()) {

        System.out.println("Executing INSERT statement (using Statement)...");
        int rowsAffected = stmt.executeUpdate(insertSQL);
        System.out.println(rowsAffected + " row(s) inserted.");

    } catch (SQLException e) {
        e.printStackTrace();
    }
}

// Using PreparedStatement (recommended)
public static void insertEmployeePreparedStatement(String name, double salary, java.sql.Date hireDate) {
    String insertSQL = "INSERT INTO Employees (name, salary, hire_date) VALUES (?, ?, ?)";

    try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
         PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {

        System.out.println("Executing INSERT statement (using PreparedStatement)...");
        pstmt.setString(1, name);         // Set first parameter
        pstmt.setDouble(2, salary);      // Set second parameter
        pstmt.setDate(3, hireDate);      // Set third parameter

        int rowsAffected = pstmt.executeUpdate();
        System.out.println(rowsAffected + " row(s) inserted.");

    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

**How to call:**
`insertEmployeePreparedStatement("Alice Smith", 60000.00, java.sql.Date.valueOf("2023-01-15"));`

---

#### **4.3. Selecting Data (`SELECT`)**

*   **Purpose:** To retrieve data from one or more tables.
*   **Method:** `executeQuery()`
*   **SQL Command:** `SELECT column1, column2, ... FROM table_name WHERE condition`

```java
public static void selectEmployees() {
    String selectSQL = "SELECT id, name, salary, hire_date FROM Employees";

    try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
         Statement stmt = conn.createStatement();
         ResultSet rs = stmt.executeQuery(selectSQL)) { // Execute query and get ResultSet

        System.out.println("Retrieving employee data:");
        boolean found = false;
        while (rs.next()) {
            found = true;
            // Retrieve by column name
            int id = rs.getInt("id");
            String name = rs.getString("name");
            double salary = rs.getDouble("salary");
            Date hireDate = rs.getDate("hire_date");

            System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary + ", Hire Date: " + hireDate);
        }
        if (!found) {
            System.out.println("No employees found.");
        }

    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

**Example with a WHERE clause:**

```java
public static void selectEmployeeByName(String nameToFind) {
    String selectSQL = "SELECT id, name, salary, hire_date FROM Employees WHERE name = ?";

    try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
         PreparedStatement pstmt = conn.prepareStatement(selectSQL)) {

        pstmt.setString(1, nameToFind); // Set the name for the WHERE clause

        System.out.println("Retrieving employee data for: " + nameToFind);
        try (ResultSet rs = pstmt.executeQuery()) {
            boolean found = false;
            while (rs.next()) {
                found = true;
                int id = rs.getInt("id");
                String name = rs.getString("name");
                double salary = rs.getDouble("salary");
                Date hireDate = rs.getDate("hire_date");
                System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary + ", Hire Date: " + hireDate);
            }
            if (!found) {
                System.out.println("Employee '" + nameToFind + "' not found.");
            }
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

**How to call:**
`selectEmployeeByName("Alice Smith");`

---

#### **4.4. Updating Data (`UPDATE`)**

*   **Purpose:** To modify existing records in a table.
*   **Method:** `executeUpdate()`
*   **SQL Command:** `UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition`

```java
public static void updateEmployeeSalary(int employeeId, double newSalary) {
    String updateSQL = "UPDATE Employees SET salary = ? WHERE id = ?";

    try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
         PreparedStatement pstmt = conn.prepareStatement(updateSQL)) {

        System.out.println("Updating salary for employee ID: " + employeeId);
        pstmt.setDouble(1, newSalary);   // Set new salary
        pstmt.setInt(2, employeeId);     // Set employee ID for WHERE clause

        int rowsAffected = pstmt.executeUpdate();
        if (rowsAffected > 0) {
            System.out.println("Salary updated successfully for employee ID: " + employeeId);
        } else {
            System.out.println("Employee ID " + employeeId + " not found. No update performed.");
        }

    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

**How to call:**
`updateEmployeeSalary(1, 65000.00); // Assuming employee with ID 1 exists`

---

#### **4.5. Deleting Data (`DELETE`)**

*   **Purpose:** To remove records from a table.
*   **Method:** `executeUpdate()`
*   **SQL Command:** `DELETE FROM table_name WHERE condition`

```java
public static void deleteEmployee(int employeeId) {
    String deleteSQL = "DELETE FROM Employees WHERE id = ?";

    try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
         PreparedStatement pstmt = conn.prepareStatement(deleteSQL)) {

        System.out.println("Deleting employee with ID: " + employeeId);
        pstmt.setInt(1, employeeId); // Set employee ID for WHERE clause

        int rowsAffected = pstmt.executeUpdate();
        if (rowsAffected > 0) {
            System.out.println("Employee with ID " + employeeId + " deleted successfully.");
        } else {
            System.out.println("Employee ID " + employeeId + " not found. No deletion performed.");
        }

    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

**How to call:**
`deleteEmployee(1); // Assuming employee with ID 1 exists`

---

### **5. Important Points to Remember**

*   **JDBC Driver:** Always ensure you have the correct JDBC driver JAR file for your database and that it's in your project's classpath.
*   **Database URL:** Double-check the database URL for accuracy (hostname, port, database name).
*   **Credentials:** Use secure methods to manage database usernames and passwords. Avoid hardcoding them directly in production code.
*   **SQL Injection:** **Always use `PreparedStatement`** when dealing with user-supplied input to prevent SQL injection vulnerabilities.
*   **Resource Management:** Close `ResultSet`, `Statement`, and `Connection` objects properly using `try-with-resources` or `finally` blocks to prevent leaks.
*   **Error Handling:** Implement robust `try-catch` blocks to handle `SQLException` and other potential errors.
*   **Transaction Management:** For complex operations involving multiple SQL statements, consider using JDBC transactions to ensure data integrity. (This is a more advanced topic not covered in detail here).
*   **Performance:** `PreparedStatement` is generally more performant than `Statement` for repeated queries. For very large result sets, consider fetching rows in batches.
*   **`java.sql.Date` vs. `java.util.Date`:** When interacting with SQL DATE, TIME, or TIMESTAMP columns, use `java.sql.Date`, `java.sql.Time`, or `java.sql.Timestamp` respectively. `java.sql.Date` can be created from `java.time.LocalDate` using `java.sql.Date.valueOf(localDate)` or from `java.util.Date` using `new java.sql.Date(utilDate.getTime())`.

---

### **6. Practice Questions and Exercises**

1.  **Question:** What is the primary purpose of JDBC?
    *   **Answer:** JDBC (Java Database Connectivity) is a Java API that allows Java applications to communicate with and manipulate data in various databases using SQL statements.

2.  **Question:** Name the four types of JDBC drivers and briefly describe their characteristics.
    *   **Answer:**
        *   **Type 1 (JDBC-ODBC Bridge):** Translates JDBC to ODBC calls. Requires ODBC driver.
        *   **Type 2 (JDBC-Native API):** Translates JDBC to native API calls of the database. Requires client software.
        *   **Type 3 (JDBC-Net):** Translates JDBC to a network protocol that communicates with middleware.
        *   **Type 4 (JDBC-Proprietary):** Pure Java driver that communicates directly with the database's network protocol. (Most preferred).

3.  **Question:** What is the significance of the `PreparedStatement` interface over the `Statement` interface in JDBC?
    *   **Answer:** `PreparedStatement` precompiles SQL statements, leading to better performance, especially for repeatedly executed queries. Crucially, it uses placeholders (?) for parameters, which helps prevent SQL injection attacks by automatically escaping input values.

4.  **Question:** Explain the importance of closing JDBC resources. What is the recommended way to ensure resources are closed?
    *   **Answer:** Closing JDBC resources (`ResultSet`, `Statement`, `Connection`) is vital to release them back to the system and prevent resource leaks, which can degrade application performance and stability. The recommended way is to use the `try-with-resources` statement (introduced in Java 7), which automatically closes resources that implement `AutoCloseable`. Alternatively, a `finally` block can be used.

5.  **Question:** Write a Java JDBC code snippet to connect to a PostgreSQL database named `mydatabase` on `localhost:5432` with username `postgres` and password `mypassword`, and then execute a `SELECT * FROM products` query, printing the `product_name` and `price`. Assume the `products` table has `product_id`, `product_name`, and `price` columns.

    *   **Solution:**

    ```java
    import java.sql.*;

    public class SelectProducts {

        static final String DB_URL = "jdbc:postgresql://localhost:5432/mydatabase";
        static final String USER = "postgres";
        static final String PASS = "mypassword";

        public static void main(String[] args) {
            String selectSQL = "SELECT product_name, price FROM products";

            try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                 Statement stmt = conn.createStatement();
                 ResultSet rs = stmt.executeQuery(selectSQL)) {

                System.out.println("Product List:");
                boolean found = false;
                while (rs.next()) {
                    found = true;
                    String productName = rs.getString("product_name");
                    double price = rs.getDouble("price");
                    System.out.println("Product: " + productName + ", Price: " + price);
                }
                if (!found) {
                    System.out.println("No products found.");
                }

            } catch (SQLException e) {
                System.err.println("SQL Error: " + e.getMessage());
                e.printStackTrace();
            }
        }
    }
    ```
    *(Note: You'll need the PostgreSQL JDBC driver JAR in your classpath and a running PostgreSQL instance with the specified database and table.)*

6.  **Question:** How would you use `PreparedStatement` to insert a new record into an `Employees` table with columns `name` (VARCHAR) and `department` (VARCHAR)?
    *   **Answer:**

    ```java
    String insertSQL = "INSERT INTO Employees (name, department) VALUES (?, ?)";
    PreparedStatement pstmt = connection.prepareStatement(insertSQL); // 'connection' is an active Connection object
    pstmt.setString(1, "Jane Doe");
    pstmt.setString(2, "IT");
    int rowsAffected = pstmt.executeUpdate();
    ```

---
