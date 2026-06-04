---
title: "Graphical User Interface and Database support of Java"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: Graphical User Interface and Database support of Java"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36014"
status: "completed"
scrapedAt: "2026-05-23T16:17:38.437Z"
---
## OBJECT ORIENTED PROGRAMMING

### Module 4: Graphical User Interface and Database Support in Java

This module explores how Java can be used to create interactive graphical user interfaces (GUIs) and to interact with databases, enabling the development of powerful and data-driven applications.

---

### Learning Outcomes Covered:

*   **Creating GUI Applications:** Designing and implementing user interfaces using Java's Swing toolkit.
*   **Handling GUI Events:** Responding to user interactions like button clicks and text input.
*   **Database Connectivity:** Establishing connections to databases from Java applications.
*   **Performing Database Operations:** Executing SQL queries (CRUD - Create, Read, Update, Delete) using JDBC.

---

### Key Concepts and Definitions:

#### 1. Introduction to Graphical User Interfaces (GUIs)

*   **GUI:** A visual way of interacting with a computer, using windows, icons, menus, and a pointer.
*   **Event-Driven Programming:** A programming paradigm where the flow of the program is determined by events (e.g., user actions, sensor outputs).
*   **GUI Toolkit/Framework:** A set of pre-built components and APIs that simplify GUI development. Java provides the **Swing** and **AWT** (Abstract Window Toolkit) toolkits.

#### 2. Java Swing Toolkit

Swing is a platform-independent GUI toolkit built on top of AWT. It offers a richer set of components and is generally preferred for modern Java GUI applications.

*   **Components:**
    *   **Top-Level Containers:**
        *   `JFrame`: The main window of an application. It can have a title bar, borders, and control buttons (minimize, maximize, close).
        *   `JDialog`: A secondary window that typically pops up to get input from the user or display information.
    *   **Intermediate Containers:**
        *   `JPanel`: A general-purpose container that can hold other components and is often used for grouping and organizing.
    *   **Basic Components (Widgets):**
        *   `JLabel`: Displays text or images.
        *   `JButton`: A clickable button.
        *   `JTextField`: A single-line text input field.
        *   `JTextArea`: A multi-line text input/display area.
        *   `JCheckBox`: A toggleable box that can be checked or unchecked.
        *   `JRadioButton`: Allows selection of one option from a group.
        *   `JComboBox`: A drop-down list of choices.
        *   `JList`: Displays a list of selectable items.
        *   `JScrollPane`: Provides scrollbars for components that exceed their display area.
*   **Layout Managers:** Control the arrangement and positioning of components within a container.
    *   `FlowLayout`: Arranges components in a row, wrapping to the next row if the container is too narrow.
    *   `BorderLayout`: Arranges components in five regions: NORTH, SOUTH, EAST, WEST, and CENTER.
    *   `GridLayout`: Arranges components in a grid of rows and columns.
    *   `GridBagLayout`: A flexible and powerful layout manager that allows components to be placed in a grid with varying sizes and alignments.
    *   `BoxLayout`: Arranges components either horizontally or vertically.
*   **`JRootPane`:** The root pane is the top-most container in a `JFrame` or `JDialog`. It contains several layers, including the `content pane`, which is where you typically add your GUI components.

**Example (Creating a simple JFrame):**

```java
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class SimpleFrame {
    public static void main(String[] args) {
        // Create a frame
        JFrame frame = new JFrame("My First GUI"); // Set the title
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Close operation
        frame.setSize(400, 300); // Set size

        // Create a panel to hold components
        JPanel panel = new JPanel();
        panel.add(new JLabel("Hello, Swing!")); // Add a label to the panel

        // Add the panel to the frame's content pane
        frame.getContentPane().add(panel);

        // Make the frame visible
        frame.setVisible(true);
    }
}
```

**Referencing Textbooks:**
*   **Schildt (2011):** Chapter on Swing provides a comprehensive overview of Swing components, layout managers, and event handling.
*   **Deitel & Deitel (2018):** Chapters on GUI programming with Swing cover event handling, common components, and layout managers in detail.

#### 3. Event Handling in Swing

Event handling is crucial for making GUI applications interactive.

*   **Events:** Actions that occur in a GUI, such as a button click, key press, mouse movement, etc.
*   **Event Listeners:** Objects that "listen" for specific events. They contain methods that are executed when the listened-for event occurs.
*   **Event Source:** The component that generates the event (e.g., a `JButton`).
*   **Event Object:** An object that contains information about the event.
*   **The Listener Interface:** For each type of event, there's a corresponding listener interface (e.g., `ActionListener`, `MouseListener`).
*   **The Event Handling Methods:** These methods within the listener interface are called when an event occurs. For `ActionListener`, it's the `actionPerformed(ActionEvent e)` method.
*   **Registering a Listener:** You associate an event listener with an event source using a `register` method (e.g., `button.addActionListener(listener)`).

**Example (Button Click Event):**

```java
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ButtonClickDemo {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Button Click Demo");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 200);

        JPanel panel = new JPanel();

        JLabel label = new JLabel("Button not clicked yet.");
        JButton button = new JButton("Click Me");

        // Create an ActionListener
        ActionListener buttonListener = new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                label.setText("Button was clicked!");
            }
        };

        // Register the listener with the button
        button.addActionListener(buttonListener);

        panel.add(label);
        panel.add(button);
        frame.getContentPane().add(panel);

        frame.setVisible(true);
    }
}
```

**Important Points to Remember:**
*   Swing GUI updates should ideally be performed on the Event Dispatch Thread (EDT) to avoid threading issues. Use `SwingUtilities.invokeLater()` or `SwingUtilities.invokeAndWait()`.
*   Anonymous inner classes are a common way to implement listener interfaces for simple event handling.
*   Lambda expressions (Java 8+) provide a more concise way to implement single-abstract-method interfaces like `ActionListener`.

**Referencing Textbooks:**
*   **Schildt (2011):** Covers event handling in detail, explaining the delegation event model.
*   **Deitel & Deitel (2018):** Provides numerous examples of event handling for various Swing components.
*   **Balagurusamy (2014):** Offers a foundational understanding of event handling mechanisms in Java.

#### 4. Database Connectivity with JDBC

JDBC (Java Database Connectivity) is an API that allows Java programs to interact with databases.

*   **JDBC Architecture:**
    *   **JDBC API:** Provides a set of interfaces and classes for database access.
    *   **JDBC Driver:** Software that translates JDBC calls into calls that the specific database can understand. Different databases require different drivers (e.g., MySQL Connector/J, PostgreSQL JDBC Driver).
*   **Steps for Database Connectivity:**
    1.  **Load the JDBC Driver:** Use `Class.forName("driver_class_name")` to load the driver class into memory.
    2.  **Establish a Connection:** Use `DriverManager.getConnection(url, username, password)` to create a `Connection` object.
        *   **URL:** Database connection string (e.g., `jdbc:mysql://localhost:3306/mydatabase`).
    3.  **Create a Statement:** Use the `Connection` object to create a `Statement` or `PreparedStatement` object to execute SQL commands.
        *   `Statement`: For static SQL queries.
        *   `PreparedStatement`: For parameterized SQL queries, offering better performance and security (prevents SQL injection).
    4.  **Execute SQL Statements:**
        *   `executeQuery()`: For `SELECT` statements, returns a `ResultSet`.
        *   `executeUpdate()`: For `INSERT`, `UPDATE`, `DELETE` statements, returns the number of rows affected.
        *   `execute()`: For all types of SQL statements.
    5.  **Process the ResultSet (for queries):** The `ResultSet` object allows you to iterate through the rows returned by a `SELECT` query and access column values.
    6.  **Close Resources:** It's crucial to close the `ResultSet`, `Statement`, and `Connection` objects in the `finally` block to release database resources.

**Example (Connecting to a Database and Executing a Query):**

*(Note: This example assumes you have a MySQL database named `mydatabase` and a table named `users` with columns `id` and `name`. You'll also need to download the MySQL Connector/J JAR file and include it in your classpath.)*

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class DatabaseQuery {
    public static void main(String[] args) {
        // Database credentials
        String DB_URL = "jdbc:mysql://localhost:3306/mydatabase";
        String USER = "username"; // Your database username
        String PASS = "password"; // Your database password

        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            // 1. Load the JDBC driver
            // For MySQL Connector/J 8.0 and later, the class name is com.mysql.cj.jdbc.Driver
            // For older versions, it was com.mysql.jdbc.Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Establish the connection
            System.out.println("Connecting to database...");
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            System.out.println("Connection successful!");

            // 3. Create a Statement
            stmt = conn.createStatement();
            String sql = "SELECT id, name FROM users";

            // 4. Execute the query
            rs = stmt.executeQuery(sql);

            // 5. Process the ResultSet
            System.out.println("User Data:");
            while (rs.next()) {
                // Retrieve by column name or column number
                int id = rs.getInt("id");
                String name = rs.getString("name");

                // Display values
                System.out.print("ID: " + id);
                System.out.println(", Name: " + name);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 6. Clean up resources
            try {
                if (rs != null) rs.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
            try {
                if (stmt != null) stmt.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
            try {
                if (conn != null) conn.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
            System.out.println("Database connection closed.");
        }
    }
}
```

**Referencing Textbooks:**
*   **Schildt (2011):** Chapters on JDBC provide detailed explanations of the API and common database operations.
*   **Deitel & Deitel (2018):** Offers practical examples of using JDBC for various database tasks.
*   **Liang (2013):** Covers database connectivity and SQL in the context of Java programming.
*   **Flanagan (2005):** Provides a concise reference on JDBC for practical use.

#### 5. Performing Database Operations (CRUD)

*   **Create (INSERT):** Adding new records to a table.
*   **Read (SELECT):** Retrieving data from a table.
*   **Update (UPDATE):** Modifying existing records in a table.
*   **Delete (DELETE):** Removing records from a table.

**Using `PreparedStatement` for Security and Efficiency:**

`PreparedStatement` uses placeholders (`?`) for values, which are then set using `setXXX()` methods. This prevents SQL injection and can be more efficient as the database can precompile the query.

**Example (Using PreparedStatement for INSERT):**

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class InsertData {
    public static void main(String[] args) {
        String DB_URL = "jdbc:mysql://localhost:3306/mydatabase";
        String USER = "username";
        String PASS = "password";

        Connection conn = null;
        PreparedStatement pstmt = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(DB_URL, USER, PASS);

            String sql = "INSERT INTO users (id, name) VALUES (?, ?)";
            pstmt = conn.prepareStatement(sql);

            // Set values for the placeholders
            pstmt.setInt(1, 101); // 1st placeholder (?)
            pstmt.setString(2, "Alice"); // 2nd placeholder (?)

            int rowsAffected = pstmt.executeUpdate();
            System.out.println(rowsAffected + " row(s) inserted.");

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (pstmt != null) pstmt.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
            try {
                if (conn != null) conn.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```

**Referencing Textbooks:**
*   **Schildt (2011):** Explains `PreparedStatement` and its benefits.
*   **Deitel & Deitel (2018):** Provides examples for all CRUD operations.
*   **Liang (2013):** Covers SQL statement execution and result set manipulation for various operations.

#### 6. Integrating GUI with Database

A common application pattern is to use a GUI to interact with a database. For example, a form to add new users, a table to display existing users, and buttons to update or delete them.

**Conceptual Steps:**

1.  **Design the GUI:** Create `JFrame`, `JPanel`, `JTextField`, `JButton`, etc., to provide a user interface for database operations.
2.  **Connect to the Database:** Establish a JDBC connection when the application starts or when the first database operation is needed.
3.  **Implement Event Handlers:**
    *   For "Add User" button: Read data from `JTextField`s, use `PreparedStatement` to `INSERT` into the database, and update the GUI (e.g., refresh a table).
    *   For "Search" button: Read search criteria, use `PreparedStatement` to `SELECT`, populate `JTable` or `JTextField`s with results.
    *   For "Update" button: Read updated data, use `PreparedStatement` to `UPDATE`, and refresh the display.
    *   For "Delete" button: Read identifier, use `PreparedStatement` to `DELETE`, and refresh the display.
4.  **Handle Exceptions:** Gracefully manage database errors (e.g., connection failures, invalid SQL) and GUI errors.
5.  **Close Resources:** Ensure database connections and statements are closed properly when the application exits.

**Referencing Textbooks:**
*   **Deitel & Deitel (2018):** Often present complete applications demonstrating GUI-database integration.
*   **Schildt (2011):** Provides building blocks and examples that can be combined.

---

### Course Outcomes Alignment:

*   **CO4: Write Graphical User Interface based application programs by utilising Swing in Java and database connectivity. (Knowledge Level: K3)**
    *   This entire module directly addresses CO4 by covering Swing GUI development and JDBC database connectivity, enabling students to build interactive, data-driven applications. The examples and explanations of components, layout managers, event handling, and JDBC steps support the "how-to" aspect of this outcome.

---

### Practice Questions/Exercises:

**Question 1:**
Explain the purpose of a `Layout Manager` in Swing and list at least three common layout managers, briefly describing their behavior.

**Answer 1:**
A `Layout Manager` in Swing is responsible for determining the size, position, and arrangement of components within a container. It ensures that the GUI's appearance adapts to different screen sizes and resolutions. Common layout managers include:
*   **`FlowLayout`:** Arranges components in a row, wrapping to the next line if the container width is exceeded.
*   **`BorderLayout`:** Arranges components in five regions: NORTH, SOUTH, EAST, WEST, and CENTER.
*   **`GridLayout`:** Arranges components in a fixed grid of rows and columns, with all cells being the same size.

**Question 2:**
What is the delegation event model in Java GUI programming? Name the three participants involved in this model.

**Answer 2:**
The delegation event model is Java's mechanism for handling events. It allows an object (the event source) to generate an event and send it to another object (the event listener) that is registered to receive events of that type. The three participants are:
1.  **Event Source:** The object that generates the event (e.g., a `JButton`).
2.  **Event Listener:** An object that registers with the event source to receive notifications of events. It contains the event-handling methods.
3.  **Event Object:** An object that encapsulates information about the event that occurred.

**Question 3:**
What are the main steps involved in establishing a database connection using JDBC? What is the advantage of using `PreparedStatement` over `Statement`?

**Answer 3:**
The main steps for establishing a database connection using JDBC are:
1.  **Load the JDBC Driver:** Using `Class.forName()`.
2.  **Establish a Connection:** Using `DriverManager.getConnection()`.
3.  **Create a Statement:** Using `connection.createStatement()` or `connection.prepareStatement()`.
4.  **Execute SQL:** Using `executeQuery()` or `executeUpdate()`.
5.  **Process Results:** If it's a query, iterate through the `ResultSet`.
6.  **Close Resources:** Close `ResultSet`, `Statement`, and `Connection`.

The advantage of using `PreparedStatement` over `Statement` is:
*   **Security:** It prevents SQL injection attacks by separating SQL code from data.
*   **Performance:** The database can precompile the SQL statement, leading to faster execution if the same statement is executed multiple times with different parameters.

**Question 4 (Practical):**
Write a Java Swing program that displays a window with a `JTextField` and a `JButton`. When the button is clicked, the text from the `JTextField` should be displayed in a `JLabel` in the same window.

**Answer 4:**
```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TextFieldButtonEcho extends JFrame {

    private JTextField inputField;
    private JLabel outputLabel;
    private JButton processButton;
    private JPanel panel;

    public TextFieldButtonEcho() {
        // Frame setup
        setTitle("Text Field Button Echo");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 200);
        setLocationRelativeTo(null); // Center the window

        // Panel setup
        panel = new JPanel(new FlowLayout(FlowLayout.CENTER, 10, 10)); // Centered layout with gaps

        // Components
        inputField = new JTextField(20); // Text field with width of 20 columns
        outputLabel = new JLabel("Enter text above and click button.");
        processButton = new JButton("Display Text");

        // Add components to panel
        panel.add(inputField);
        panel.add(processButton);
        panel.add(outputLabel);

        // Add panel to frame
        getContentPane().add(panel);

        // Add ActionListener to button
        processButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String inputText = inputField.getText();
                if (inputText.isEmpty()) {
                    outputLabel.setText("Please enter some text!");
                } else {
                    outputLabel.setText("You entered: " + inputText);
                }
                // Optionally clear the input field
                // inputField.setText("");
            }
        });

        // Make the frame visible
        setVisible(true);
    }

    public static void main(String[] args) {
        // Run the GUI creation on the Event Dispatch Thread (EDT)
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new TextFieldButtonEcho();
            }
        });
    }
}
```

---

### Important Points to Remember Summary:

*   **Swing Components:** `JFrame`, `JPanel`, `JLabel`, `JButton`, `JTextField`, etc., are building blocks for GUIs.
*   **Layout Managers:** Control component positioning and ensure responsive design (`FlowLayout`, `BorderLayout`, `GridLayout`).
*   **Event-Driven Programming:** GUIs respond to user actions via events and listeners.
*   **Delegation Event Model:** The core of Java event handling (Source, Listener, Event Object).
*   **JDBC:** The API for Java database connectivity.
*   **JDBC Driver:** Essential for translating Java calls to database-specific commands.
*   **`PreparedStatement`:** Recommended for executing SQL to enhance security and performance.
*   **CRUD Operations:** `INSERT`, `SELECT`, `UPDATE`, `DELETE` are fundamental database actions.
*   **Resource Management:** Always close JDBC resources (`ResultSet`, `Statement`, `Connection`) to prevent leaks.
*   **EDT:** Swing GUI operations should be performed on the Event Dispatch Thread for thread safety.
