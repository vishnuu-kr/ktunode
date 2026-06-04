---
title: "Working with Result Set"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: SOLID Principles in Java ( https://www.javatpoint.com/solid"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ace1"
status: "completed"
scrapedAt: "2026-05-20T16:29:34.753Z"
---
## Module 4: SOLID Principles in Java - Working with Result Sets

**Description:** This topic focuses on how the principles of SOLID can be applied when working with `ResultSet` objects in Java, especially in the context of database interactions. This helps in writing more maintainable, understandable, and extensible code when dealing with database results.

**Learning Outcomes:**

*   Understand how SOLID principles apply when processing database result sets.
*   Identify potential violations of SOLID principles in `ResultSet` handling code.
*   Refactor code to adhere to SOLID principles when working with `ResultSet`.
*   Create more robust, maintainable, and testable code when retrieving data from a database.

### 1. Key Concepts and Definitions

*   **SOLID Principles:** A set of five design principles intended to make software designs more understandable, flexible, and maintainable. These principles are:

    *   **Single Responsibility Principle (SRP):** A class should have only one reason to change.
    *   **Open/Closed Principle (OCP):** Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
    *   **Liskov Substitution Principle (LSP):** Subtypes must be substitutable for their base types without altering the correctness of the program.
    *   **Interface Segregation Principle (ISP):** Clients should not be forced to depend on methods they do not use.
    *   **Dependency Inversion Principle (DIP):**
        *   High-level modules should not depend on low-level modules. Both should depend on abstractions.
        *   Abstractions should not depend on details. Details should depend on abstractions.
*   **ResultSet:**  An interface representing the result set of a database query. It provides methods to access the data retrieved from the database.
*   **DAO (Data Access Object):** A design pattern used to abstract and encapsulate all access to a persistent data source.
*   **DTO (Data Transfer Object):** A simple object used to transfer data between layers of an application. It typically doesn't contain any business logic.

### 2. SOLID Principles Applied to ResultSet Handling

When working with `ResultSet` objects, it's easy to violate SOLID principles. Let's examine how each principle can be applied to make code more robust.

**2.1 Single Responsibility Principle (SRP)**

*   **Violation:** A class that both executes the database query *and* processes the `ResultSet` violates SRP. It has two responsibilities: database interaction and data manipulation. This makes the class harder to test and maintain.
*   **Solution:** Separate the responsibilities. Create a DAO (Data Access Object) class that focuses solely on database interaction (executing queries and handling `ResultSet` objects). Create separate classes or methods to process the data retrieved from the `ResultSet`.  Use a DTO to represent the processed data.

    **Example (Violation):**

    ```java
    public class UserDatabase {

        public String getUserName(int userId) throws SQLException {
            Connection connection = null;
            PreparedStatement statement = null;
            ResultSet resultSet = null;
            String userName = null;

            try {
                connection = DatabaseConnection.getConnection();
                statement = connection.prepareStatement("SELECT name FROM users WHERE id = ?");
                statement.setInt(1, userId);
                resultSet = statement.executeQuery();

                if (resultSet.next()) {
                    userName = resultSet.getString("name");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                //Close resources
                if(resultSet != null) resultSet.close();
                if(statement != null) statement.close();
                if(connection != null) connection.close();
            }
            return userName;
        }
    }
    ```

    **Example (Adhering to SRP using DAO and DTO):**

    ```java
    // DTO
    public class User {
        private int id;
        private String name;

        public User(int id, String name) {
            this.id = id;
            this.name = name;
        }

        public int getId() { return id; }
        public String getName() { return name; }
    }


    // DAO
    public class UserDAO {
        public User getUserById(int userId) throws SQLException {
            Connection connection = null;
            PreparedStatement statement = null;
            ResultSet resultSet = null;
            User user = null;

            try {
                connection = DatabaseConnection.getConnection();
                statement = connection.prepareStatement("SELECT id, name FROM users WHERE id = ?");
                statement.setInt(1, userId);
                resultSet = statement.executeQuery();

                if (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String name = resultSet.getString("name");
                    user = new User(id, name);
                }
            } catch (SQLException e) {
                e.printStackTrace();
                throw e; // Re-throw the exception for handling by the caller
            } finally {
                //Close resources
                if(resultSet != null) resultSet.close();
                if(statement != null) statement.close();
                if(connection != null) connection.close();
            }
            return user;
        }
    }

    // Client code
    public class UserService {
        private UserDAO userDAO = new UserDAO();

        public String getUserName(int userId) throws SQLException {
            User user = userDAO.getUserById(userId);
            if (user != null) {
                return user.getName();
            } else {
                return null;
            }
        }
    }
    ```
    In the improved version:
    * The `UserDAO` is solely responsible for data access concerning Users.  It handles the database connection, query execution, and mapping to the `User` DTO.
    * The `UserService` is responsible for business logic related to users (like retrieving the username). It uses the `UserDAO` to get the data.
    * The `User` class is a simple DTO that holds the user's information.

**2.2 Open/Closed Principle (OCP)**

*   **Violation:** If you need to add support for a new type of data in the `ResultSet` (e.g., a new column with a different data type), and you have to modify the existing data processing code, you're violating OCP.  The code is not open for extension without modification.
*   **Solution:** Use polymorphism or strategy pattern to allow for new data types to be added without changing existing code. You can create an interface for data extraction and implement different classes for different data types.

    **Example (Violation):**

    ```java
    public class ResultSetProcessor {
        public String process(ResultSet rs, String columnName) throws SQLException {
            if (columnName.equals("name")) {
                return rs.getString("name");
            } else if (columnName.equals("age")) {
                return String.valueOf(rs.getInt("age"));
            }
             // Add more 'else if' statements for each new type
            else {
                throw new IllegalArgumentException("Unsupported column name: " + columnName);
            }
        }
    }
    ```

    **Example (Adhering to OCP):**

    ```java
    // Interface for data extraction
    public interface DataExtractor {
        String extract(ResultSet rs, String columnName) throws SQLException;
    }

    // Implementation for String extraction
    public class StringExtractor implements DataExtractor {
        @Override
        public String extract(ResultSet rs, String columnName) throws SQLException {
            return rs.getString(columnName);
        }
    }

    // Implementation for Integer extraction
    public class IntegerExtractor implements DataExtractor {
        @Override
        public String extract(ResultSet rs, String columnName) throws SQLException {
            return String.valueOf(rs.getInt(columnName));
        }
    }

    // ResultSet Processor using the DataExtractor interface
    public class ResultSetProcessor {
        private Map<String, DataExtractor> extractors = new HashMap<>();

        public ResultSetProcessor() {
            extractors.put("string", new StringExtractor());
            extractors.put("integer", new IntegerExtractor());
        }

        public String process(ResultSet rs, String columnName, String type) throws SQLException {
            DataExtractor extractor = extractors.get(type);
            if (extractor == null) {
                throw new IllegalArgumentException("Unsupported data type: " + type);
            }
            return extractor.extract(rs, columnName);
        }

        // Method to add new extractors
        public void addExtractor(String type, DataExtractor extractor) {
            extractors.put(type, extractor);
        }
    }

    // Client Code
    ResultSetProcessor processor = new ResultSetProcessor();
    String name = processor.process(resultSet, "name", "string");
    String age = processor.process(resultSet, "age", "integer");

    // To add support for a new data type (e.g., Date):
    // 1. Create a new DateExtractor class implementing DataExtractor
    // 2. Add the new extractor to the ResultSetProcessor
    ```

    In this example, adding support for a new column type only requires creating a new `DataExtractor` implementation and registering it with the `ResultSetProcessor`.  The existing `process` method doesn't need to be modified.

**2.3 Liskov Substitution Principle (LSP)**

*   **Considerations:** LSP is less directly applicable when dealing with `ResultSet` in isolation, but more important when thinking about database interactions in general and especially with mock `ResultSet` implementations for testing.
*   **Violation:** Imagine you have a base class `DatabaseConnection` and a subclass `MockDatabaseConnection` for testing. If the `MockDatabaseConnection` throws exceptions when methods are called that don't align with the expectations of code designed to work with a real `DatabaseConnection`, it violates LSP.
*   **Solution:** Ensure that subclasses of data access objects (e.g., mock implementations for testing) behave in a way that is consistent with their base classes.  This means not throwing unexpected exceptions or altering fundamental behaviors. If mocking, return appropriate default or dummy values instead of throwing exceptions, especially for read-only operations.

    **Example (LSP Violation in Mock):**

    ```java
    //Base Class
    public interface DatabaseConnection {
        Connection getConnection() throws SQLException;
        void closeConnection(Connection connection) throws SQLException;
    }

    //Mock implementation (Bad)
    public class MockDatabaseConnection implements DatabaseConnection {
        @Override
        public Connection getConnection() throws SQLException {
            throw new UnsupportedOperationException("Mock connection not implemented for this test.");
        }

        @Override
        public void closeConnection(Connection connection) throws SQLException {
            //Do nothing.
        }
    }

    //Client Code (that expects a connection)
    public class UserDAO {
        private DatabaseConnection dbConnection;

        public UserDAO(DatabaseConnection dbConnection) {
            this.dbConnection = dbConnection;
        }

        public User getUserById(int userId) throws SQLException {
           Connection connection = dbConnection.getConnection(); //May throw an exception
           // ...
           dbConnection.closeConnection(connection);
        }
    }
    ```

    **Example (LSP Adherence):**

    ```java
    import java.sql.Connection;
    import java.sql.SQLException;

    //Base Class
    public interface DatabaseConnection {
        Connection getConnection() throws SQLException;
        void closeConnection(Connection connection) throws SQLException;
    }


    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;

    //Real Database Connection
    public class RealDatabaseConnection implements DatabaseConnection {
        private final String url;
        private final String user;
        private final String password;

        public RealDatabaseConnection(String url, String user, String password) {
            this.url = url;
            this.user = user;
            this.password = password;
        }

        @Override
        public Connection getConnection() throws SQLException {
            return DriverManager.getConnection(url, user, password);
        }

        @Override
        public void closeConnection(Connection connection) throws SQLException {
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        }
    }

    //Mock implementation (Good)
    public class MockDatabaseConnection implements DatabaseConnection {
        private Connection mockConnection;

        public MockDatabaseConnection(Connection mockConnection) {
            this.mockConnection = mockConnection;
        }

        @Override
        public Connection getConnection() throws SQLException {
            return mockConnection; // Return the mock connection
        }

        @Override
        public void closeConnection(Connection connection) throws SQLException {
            // Optionally, you could verify the connection is the mock connection
            // if (connection != mockConnection) {
            //   throw new IllegalArgumentException("Attempting to close a non-mock connection!");
            // }
            // In a simple mock, you might just do nothing.  A more complex mock may track close calls.
        }
    }
    ```

    In the corrected example, the `MockDatabaseConnection` *returns* a mock connection instead of throwing an exception.  The mock connection can be pre-configured to return appropriate `ResultSet` data, allowing tests to execute without requiring a real database. This allows the code using `DatabaseConnection` to work without modification when using either `RealDatabaseConnection` or `MockDatabaseConnection`.

**2.4 Interface Segregation Principle (ISP)**

*   **Violation:** An interface that forces classes to implement methods related to `ResultSet` processing that they don't need violates ISP.  This can lead to bloated classes.
*   **Solution:** Create smaller, more specific interfaces. If some classes only need to read data, and others need to update data based on the `ResultSet`, create separate interfaces for reading and updating.

    **Example (Violation):**

    ```java
    public interface DatabaseOperations {
        ResultSet getData(String query) throws SQLException;
        void updateData(ResultSet rs) throws SQLException;
        void insertData(ResultSet rs) throws SQLException;
    }

    public class ReadOnlyDAO implements DatabaseOperations {
        @Override
        public ResultSet getData(String query) throws SQLException {
            // Implementation for getting data
            return null;
        }

        @Override
        public void updateData(ResultSet rs) throws SQLException {
            throw new UnsupportedOperationException("Update operation not supported.");
        }

        @Override
        public void insertData(ResultSet rs) throws SQLException {
             throw new UnsupportedOperationException("Insert operation not supported.");
        }
    }
    ```

    **Example (Adhering to ISP):**

    ```java
    public interface DataReader {
        ResultSet getData(String query) throws SQLException;
    }

    public interface DataUpdater {
        void updateData(ResultSet rs) throws SQLException;
    }

    public interface DataInserter {
         void insertData(ResultSet rs) throws SQLException;
    }

    public class ReadOnlyDAO implements DataReader {
        @Override
        public ResultSet getData(String query) throws SQLException {
            // Implementation for getting data
            return null;
        }
    }

    public class FullAccessDAO implements DataReader, DataUpdater, DataInserter {

        @Override
        public ResultSet getData(String query) throws SQLException {
            return null;
        }

        @Override
        public void updateData(ResultSet rs) throws SQLException {

        }

        @Override
        public void insertData(ResultSet rs) throws SQLException {

        }
    }
    ```

    Now, `ReadOnlyDAO` only implements the `DataReader` interface, so it's not forced to implement methods it doesn't need. `FullAccessDAO` can implement all 3.

**2.5 Dependency Inversion Principle (DIP)**

*   **Violation:** High-level modules (e.g., business logic) directly depend on low-level modules (e.g., database access classes). This makes the system rigid and difficult to change.
*   **Solution:** High-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces).  Create interfaces for your DAOs and use dependency injection to provide concrete implementations.

    **Example (Violation):**

    ```java
    public class ReportGenerator {
        private UserDAO userDAO = new UserDAO(); // High-level module depends directly on low-level module

        public void generateReport(int userId) throws SQLException {
            User user = userDAO.getUserById(userId);
            // ... generate report based on user data
        }
    }
    ```

    **Example (Adhering to DIP):**

    ```java
    public interface IUserDAO {
        User getUserById(int userId) throws SQLException;
    }

    public class UserDAO implements IUserDAO {
        @Override
        public User getUserById(int userId) throws SQLException {
            // ... database access logic
            return null; // Replace with actual user retrieval
        }
    }

    public class ReportGenerator {
        private IUserDAO userDAO;

        public ReportGenerator(IUserDAO userDAO) {
            this.userDAO = userDAO;
        }

        public void generateReport(int userId) throws SQLException {
            User user = userDAO.getUserById(userId);
            // ... generate report based on user data
        }
    }

    // Client Code (using dependency injection)
    IUserDAO userDAO = new UserDAO();
    ReportGenerator reportGenerator = new ReportGenerator(userDAO);
    reportGenerator.generateReport(123);
    ```

    Now, `ReportGenerator` depends on the `IUserDAO` interface, not the concrete `UserDAO` class.  This allows you to easily switch to a different data source or a mock implementation for testing without modifying the `ReportGenerator` class.

### 3. Example: Refactoring Code to Adhere to SOLID Principles

Let's consider a more complex example of reading and processing data from a `ResultSet` to create a list of products.

**Initial Code (Violates SRP, OCP):**

```java
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductManager {

    public List<String> getProductNames() throws SQLException {
        List<String> productNames = new ArrayList<>();
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;

        try {
            connection = DriverManager.getConnection("jdbc:h2:mem:test", "sa", "");
            statement = connection.createStatement();
            resultSet = statement.executeQuery("SELECT name FROM products");

            while (resultSet.next()) {
                productNames.add(resultSet.getString("name"));
            }

        } catch (SQLException e) {
            System.err.println("Error fetching product names: " + e.getMessage());
            throw e;

        } finally {
            if (resultSet != null) resultSet.close();
            if (statement != null) statement.close();
            if (connection != null) connection.close();
        }
        return productNames;
    }
}
```

**Refactored Code (Adheres to SOLID Principles):**

```java
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

// DTO
class Product {
    private String name;
    private int id;

    public Product(int id,String name) {
        this.name = name;
        this.id = id;
    }

    public String getName() { return name; }
    public int getId() {
        return id;
    }
}

// DAO Interface
interface IProductDAO {
    List<Product> getAllProducts() throws SQLException;
}

// DAO Implementation
class ProductDAO implements IProductDAO {

    private final String dbUrl;
    private final String dbUser;
    private final String dbPassword;

    public ProductDAO(String dbUrl, String dbUser, String dbPassword) {
        this.dbUrl = dbUrl;
        this.dbUser = dbUser;
        this.dbPassword = dbPassword;
    }

    @Override
    public List<Product> getAllProducts() throws SQLException {
        List<Product> products = new ArrayList<>();
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;

        try {
            connection = DriverManager.getConnection(dbUrl, dbUser, dbPassword);
            statement = connection.createStatement();
            resultSet = statement.executeQuery("SELECT id, name FROM products");

            while (resultSet.next()) {
                products.add(new Product(resultSet.getInt("id"),resultSet.getString("name")));
            }

        } catch (SQLException e) {
            System.err.println("Error fetching product names: " + e.getMessage());
            throw e;

        } finally {
            if (resultSet != null) resultSet.close();
            if (statement != null) statement.close();
            if (connection != null) connection.close();
        }
        return products;
    }
}

// Business Logic
class ProductService {
    private final IProductDAO productDAO;

    public ProductService(IProductDAO productDAO) {
        this.productDAO = productDAO;
    }

    public List<String> getProductNames() throws SQLException {
        List<Product> products = productDAO.getAllProducts();
        List<String> productNames = new ArrayList<>();
        for (Product product : products) {
            productNames.add(product.getName());
        }
        return productNames;
    }
}

// Example Usage
public class Main {
    public static void main(String[] args) {
        try {
            IProductDAO productDAO = new ProductDAO("jdbc:h2:mem:test", "sa", "");
            ProductService productService = new ProductService(productDAO);
            List<String> productNames = productService.getProductNames();
            System.out.println("Product Names: " + productNames);

        } catch (SQLException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
```

**Explanation of Changes:**

*   **SRP:** The responsibility of data access is now separated into the `ProductDAO` class.  The `ProductService` class handles business logic (getting product names).
*   **OCP:**  The code is now more open for extension. If you need to use a different data source, you can create a new class that implements the `IProductDAO` interface, without modifying the `ProductService` class.  If you needed to extract more than just the name from the ResultSet, you could define a new method within the DAO that returns the complete product objects, which is facilitated now that a `Product` DTO exists.
*   **DIP:**  The `ProductService` class depends on the `IProductDAO` interface, not the concrete `ProductDAO` class.  This allows for easier testing and switching between different data access implementations.
*   **DTO**:  A `Product` class has been added to act as a DTO.

### 4. Practice Questions/Exercises

**Question 1:**  Explain how the Single Responsibility Principle applies when working with JDBC and `ResultSet` objects.  Give an example of code that violates this principle and how it could be refactored.

**Answer:** SRP states that a class should have only one reason to change. When working with JDBC and `ResultSet`, it's common to violate SRP by having a class that both connects to the database *and* processes the `ResultSet`.  For example, a class might execute a query, iterate through the `ResultSet`, and then perform business logic on the retrieved data.  This class has two responsibilities: data access and business logic.

To refactor, separate these responsibilities into different classes: a DAO for data access and a separate class for business logic, using a DTO to transfer data between them. The DAO would handle the database connection, query execution, and mapping the `ResultSet` to DTOs.

**(See example in section 2.1 above)**

**Question 2:**  How does the Open/Closed Principle relate to handling different data types in a `ResultSet`? Provide an example.

**Answer:**  OCP states that software entities should be open for extension, but closed for modification. When dealing with different data types in a `ResultSet`, a common violation is to use `if/else` statements to handle each type. This violates OCP because adding a new data type requires modifying the existing code.

The solution is to use polymorphism or the strategy pattern. Define an interface for data extraction and create separate classes for each data type that implements the interface.  This allows adding support for new data types without modifying existing code.  (See example in Section 2.2)

**Question 3:**  Explain how using dependency injection can improve the testability of code that uses `ResultSet` objects.

**Answer:** Dependency injection (DIP) allows high-level modules to depend on abstractions instead of concrete implementations. When working with `ResultSet`, this means that business logic should depend on an interface (e.g., `IUserDAO`) instead of a concrete DAO class.  For testing, you can then inject a mock implementation of the interface, allowing you to control the data returned from the `ResultSet` without needing a real database connection. This isolates the unit being tested from external dependencies.

**(See example in section 2.5 above)**

**Question 4:**  How would you ensure Liskov Substitution Principle is upheld when creating mock `ResultSet` objects for unit testing?

**Answer:** To adhere to LSP when creating mock `ResultSet` objects:

1.  **Mimic Expected Behavior:** The mock `ResultSet` should behave consistently with a real `ResultSet`. This means methods like `next()`, `getString()`, `getInt()`, etc., should return values of the correct type and not throw unexpected exceptions unless that's the intended behavior of the real implementation under specific circumstances (like accessing a column that doesn't exist).  Returning `null` or default values can be acceptable alternatives to throwing exceptions for columns that may be empty.
2.  **Avoid Unsupported Operations:**  Don't throw `UnsupportedOperationException` for methods that are typically supported by a real `ResultSet` (unless the intention is to test the *handling* of that exception). Instead, provide reasonable default behaviors.
3.  **Implement All Necessary Methods:** Ensure that the mock `ResultSet` implements all the methods required by the code that's using it.
4.  **State Consistency:** Maintain internal state correctly.  For instance, `next()` should advance the cursor and return `false` when there are no more rows.

**Question 5:**  What are the benefits of using a DTO when processing data from a `ResultSet`?

**Answer:** Using a DTO (Data Transfer Object) when processing data from a `ResultSet` provides several benefits:

1.  **Encapsulation:** DTOs encapsulate the data retrieved from the `ResultSet`, providing a clear separation between the data access layer and the business logic layer.
2.  **Type Safety:** DTOs provide type safety by defining the data types of the attributes, reducing the risk of errors when accessing the data.
3.  **Decoupling:** DTOs decouple the data access layer from the business logic layer. The business logic layer doesn't need to know about the structure of the database or the `ResultSet`. It only needs to know about the DTO.
4.  **Testability:** DTOs make it easier to test the business logic layer, as you can easily create mock DTOs without needing a real database connection or a `ResultSet`.
5.  **Simplified Logic:**  The business logic can operate on strongly-typed objects instead of dealing directly with the generic and exception-prone nature of accessing a `ResultSet` directly.

### 5. Important Points to Remember

*   **SOLID principles are guidelines, not rules.** Use them where they provide value.
*   **Refactor iteratively.** Don't try to apply all SOLID principles at once.
*   **Test your code after each refactoring step** to ensure that you haven't introduced any regressions.
*   **Understand the trade-offs.** Applying SOLID principles can sometimes lead to more complex code, but the benefits in terms of maintainability, testability, and extensibility often outweigh the costs.
*   **DAO pattern is your friend.** Use DAOs to abstract data access logic and improve the separation of concerns.
*   **DTOs are simple data containers.**  They should not contain business logic.
