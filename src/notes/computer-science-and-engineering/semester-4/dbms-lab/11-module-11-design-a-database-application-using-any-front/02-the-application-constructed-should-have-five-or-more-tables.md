---
title: "The application constructed should have five or more tables**."
subject: "DBMS LAB"
module: "Module 11: Design a database application using any front"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4f6"
status: "completed"
scrapedAt: "2026-05-20T16:12:15.922Z"
---
## DBMS Lab: Module 11 - Database Application Design (5+ Tables)

**Subject:** DBMS LAB
**Module:** Module 11: Design a database application using any front end
**Topic:** Database Application Design with Five or More Tables
**Description:** Designing and implementing a database application using a front end, consisting of at least five interrelated tables.

**Learning Outcomes:** After completing this module, students will be able to:

*   Understand the principles of relational database design.
*   Design a database schema for a real-world application.
*   Implement a database with five or more tables using a chosen DBMS.
*   Develop a front-end application to interact with the database.
*   Write SQL queries to retrieve, insert, update, and delete data across multiple tables.
*   Implement data validation and constraints to ensure data integrity.
*   Understand the importance of normalization and its application.
*   Test and debug the application for functionality and performance.

---

### 1. Principles of Relational Database Design

*   **Key Concepts:**
    *   **Data Modeling:**  Creating a visual representation (like an Entity-Relationship Diagram) of the data and their relationships.
    *   **Entities:**  Real-world objects or concepts about which data is stored (e.g., Customer, Product, Order).
    *   **Attributes:**  Properties or characteristics of an entity (e.g., Customer Name, Product Price, Order Date).
    *   **Relationships:**  Associations between entities (e.g., a Customer *places* an Order, a Product *is part of* an Order). Common types:
        *   **One-to-One (1:1):**  One entity instance is related to only one instance of another entity.
        *   **One-to-Many (1:N):**  One entity instance is related to multiple instances of another entity.
        *   **Many-to-Many (N:M):**  Multiple instances of one entity are related to multiple instances of another entity.  Requires an intermediary table (junction table).
    *   **Primary Key (PK):**  A unique identifier for each row in a table (e.g., CustomerID, ProductID).
    *   **Foreign Key (FK):**  An attribute in one table that references the primary key of another table.  Establishes relationships between tables.
    *   **Composite Key:** A primary key made up of two or more attributes.
    *   **Referential Integrity:** Ensures that relationships between tables remain consistent. Foreign key values must exist in the related table's primary key or be null.
    *   **Normalization:** The process of organizing data in a database to reduce redundancy and improve data integrity.

*   **Data Modeling Techniques:**
    *   **Entity-Relationship Diagram (ERD):** A graphical representation of entities, attributes, and relationships.
    *   **UML Class Diagram:** Can also be used for database modeling, representing tables as classes.

*   **Importance of Good Design:**
    *   Reduces data redundancy, saving storage space.
    *   Increases data consistency and integrity, reducing errors.
    *   Simplifies data retrieval and manipulation, improving query performance.
    *   Makes the database easier to maintain and modify.

### 2. Designing a Database Schema

*   **Steps:**
    1.  **Requirements Analysis:**  Understand the purpose of the application and the data it will manage. Gather information about entities, attributes, and relationships.
    2.  **Entity Identification:**  Identify the main entities in the system.
    3.  **Attribute Definition:**  Define the attributes for each entity, including data types (e.g., integer, varchar, date).
    4.  **Relationship Definition:**  Define the relationships between entities, specifying their cardinality (1:1, 1:N, N:M).
    5.  **ER Diagram Creation:**  Draw an ER diagram to visualize the database schema.
    6.  **Table Creation:**  Create tables based on the ER diagram, defining primary keys and foreign keys.
    7.  **Normalization:** Apply normalization rules (1NF, 2NF, 3NF) to optimize the database design.

*   **Example: Library Management System**

    *   **Entities:** Book, Author, Publisher, Member, Loan
    *   **Attributes:**
        *   Book: BookID (PK), Title, ISBN, PublicationYear, PublisherID (FK)
        *   Author: AuthorID (PK), AuthorName, Biography
        *   Publisher: PublisherID (PK), PublisherName, Address
        *   Member: MemberID (PK), MemberName, Address, PhoneNumber
        *   Loan: LoanID (PK), BookID (FK), MemberID (FK), LoanDate, ReturnDate
    *   **Relationships:**
        *   Author *writes* Book (1:N)
        *   Publisher *publishes* Book (1:N)
        *   Member *borrows* Book (N:M) - Loan acts as a junction table.

### 3. Implementing a Database (5+ Tables)

*   **Choosing a DBMS:**  Select a suitable database management system (e.g., MySQL, PostgreSQL, SQL Server, Oracle).
*   **Creating Tables:**  Use SQL `CREATE TABLE` statements to define the tables, specifying column names, data types, and constraints.
*   **Defining Primary Keys:**  Use the `PRIMARY KEY` constraint to specify the primary key column(s).
*   **Defining Foreign Keys:**  Use the `FOREIGN KEY` constraint to establish relationships between tables.  Include `REFERENCES` to specify the related table and column.
*   **Data Types:**  Choose appropriate data types for each attribute (e.g., `INT`, `VARCHAR`, `DATE`, `DECIMAL`).

*   **SQL Examples (MySQL):**

    ```sql
    CREATE TABLE Authors (
        AuthorID INT PRIMARY KEY,
        AuthorName VARCHAR(255),
        Biography TEXT
    );

    CREATE TABLE Publishers (
        PublisherID INT PRIMARY KEY,
        PublisherName VARCHAR(255),
        Address VARCHAR(255)
    );

    CREATE TABLE Books (
        BookID INT PRIMARY KEY,
        Title VARCHAR(255),
        ISBN VARCHAR(20),
        PublicationYear INT,
        PublisherID INT,
        AuthorID INT,
        FOREIGN KEY (PublisherID) REFERENCES Publishers(PublisherID),
        FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)
    );

    CREATE TABLE Members (
        MemberID INT PRIMARY KEY,
        MemberName VARCHAR(255),
        Address VARCHAR(255),
        PhoneNumber VARCHAR(20)
    );

    CREATE TABLE Loans (
        LoanID INT PRIMARY KEY,
        BookID INT,
        MemberID INT,
        LoanDate DATE,
        ReturnDate DATE,
        FOREIGN KEY (BookID) REFERENCES Books(BookID),
        FOREIGN KEY (MemberID) REFERENCES Members(MemberID)
    );
    ```

### 4. Front-End Application Development

*   **Choosing a Front-End Technology:**  Select a front-end technology to build the user interface (e.g., Python with Tkinter/Flask/Django, Java with Swing/JavaFX, C# with Windows Forms/WPF, JavaScript with React/Angular/Vue).
*   **Connecting to the Database:**  Use a database connector library (e.g., `mysql.connector` for MySQL in Python) to establish a connection between the front-end application and the database.
*   **Creating UI Elements:**  Design and implement UI elements for data input, display, and navigation.
*   **Handling User Input:**  Capture user input from UI elements and use it to construct SQL queries.
*   **Executing SQL Queries:**  Execute SQL queries (SELECT, INSERT, UPDATE, DELETE) to interact with the database.
*   **Displaying Results:**  Display the results of SQL queries in the UI.
*   **Error Handling:**  Implement error handling to catch and display database errors.

*   **Example (Python with Flask and MySQL):**  (Simplified example)

    ```python
    from flask import Flask, render_template, request
    import mysql.connector

    app = Flask(__name__)

    # Database Configuration
    db_config = {
        'host': 'localhost',
        'user': 'your_username',
        'password': 'your_password',
        'database': 'your_database'
    }

    @app.route('/')
    def index():
        try:
            mydb = mysql.connector.connect(**db_config)
            mycursor = mydb.cursor()
            mycursor.execute("SELECT * FROM Books")
            books = mycursor.fetchall()
            mydb.close()
            return render_template('index.html', books=books)  # Assumes you have index.html
        except mysql.connector.Error as err:
            return f"Error: {err}"

    @app.route('/add_book', methods=['POST'])
    def add_book():
        if request.method == 'POST':
            title = request.form['title']
            author = request.form['author']
            try:
                mydb = mysql.connector.connect(**db_config)
                mycursor = mydb.cursor()
                sql = "INSERT INTO Books (Title, Author) VALUES (%s, %s)" # Simplified
                val = (title, author)
                mycursor.execute(sql, val)
                mydb.commit()
                mydb.close()
                return "Book added successfully!" #Better to redirect to index
            except mysql.connector.Error as err:
                return f"Error adding book: {err}"

    if __name__ == '__main__':
        app.run(debug=True)
    ```

    **index.html (example):**

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Book List</title>
    </head>
    <body>
        <h1>Book List</h1>
        <ul>
            {% for book in books %}
                <li>{{ book[1] }} - {{ book[2] }}</li>  {# Assuming Title is index 1 and Author is index 2 #}
            {% endfor %}
        </ul>

        <h2>Add New Book</h2>
        <form action="/add_book" method="post">
            Title: <input type="text" name="title"><br>
            Author: <input type="text" name="author"><br>
            <input type="submit" value="Add Book">
        </form>
    </body>
    </html>
    ```

    **Important Considerations:**

    *   **Security:**  Prevent SQL injection vulnerabilities by using parameterized queries or ORM libraries.
    *   **User Interface (UI) Design:**  Create a user-friendly and intuitive UI.
    *   **Data Validation:**  Validate user input to prevent errors and ensure data integrity.

### 5. SQL Queries (CRUD Operations)

*   **SELECT (Read):**  Retrieve data from tables.  Use `WHERE` clauses to filter data. Use `JOIN` clauses to retrieve data from multiple tables.
*   **INSERT (Create):**  Insert new data into tables.
*   **UPDATE (Update):**  Modify existing data in tables.  Use `WHERE` clauses to specify which rows to update.
*   **DELETE (Delete):**  Delete data from tables.  Use `WHERE` clauses to specify which rows to delete.

*   **SQL Examples:**

    *   **SELECT (Retrieve all books published by a specific publisher):**

        ```sql
        SELECT B.Title, A.AuthorName
        FROM Books B
        JOIN Publishers P ON B.PublisherID = P.PublisherID
        JOIN Authors A ON B.AuthorID = A.AuthorID
        WHERE P.PublisherName = 'OReilly';
        ```

    *   **INSERT (Add a new member):**

        ```sql
        INSERT INTO Members (MemberName, Address, PhoneNumber)
        VALUES ('Jane Doe', '123 Main St', '555-1234');
        ```

    *   **UPDATE (Update a member's address):**

        ```sql
        UPDATE Members
        SET Address = '456 Oak Ave'
        WHERE MemberID = 1;
        ```

    *   **DELETE (Delete a book):**

        ```sql
        DELETE FROM Books
        WHERE BookID = 10;
        ```

### 6. Data Validation and Constraints

*   **Purpose:**  Ensure data integrity and prevent invalid data from being entered into the database.
*   **Types of Constraints:**
    *   **NOT NULL:**  Ensures that a column cannot contain a null value.
    *   **UNIQUE:**  Ensures that all values in a column are unique.
    *   **PRIMARY KEY:**  Uniquely identifies each row in a table.
    *   **FOREIGN KEY:**  Establishes relationships between tables.
    *   **CHECK:**  Specifies a condition that must be true for data in a column.

*   **Data Validation in the Front-End:**
    *   **Client-Side Validation:**  Validate user input in the front-end application before sending it to the server.  Use JavaScript or other front-end technologies.  Provides immediate feedback to the user.
    *   **Server-Side Validation:**  Validate user input on the server-side to ensure that the data is valid even if client-side validation is bypassed.

*   **SQL Examples:**

    ```sql
    CREATE TABLE Products (
        ProductID INT PRIMARY KEY,
        ProductName VARCHAR(255) NOT NULL,
        UnitPrice DECIMAL(10, 2) CHECK (UnitPrice > 0)
    );
    ```

### 7. Normalization

*   **Purpose:**  Reduce data redundancy and improve data integrity.
*   **Normal Forms:**
    *   **1NF (First Normal Form):**  Eliminate repeating groups of data. Each column should contain only atomic values.
    *   **2NF (Second Normal Form):**  Be in 1NF and eliminate redundant data that depends on *part* of the primary key (for tables with composite keys).
    *   **3NF (Third Normal Form):**  Be in 2NF and eliminate redundant data that depends on a non-key attribute.

*   **Example (Normalization):**

    *   **Unnormalized Table (Orders):**

        | OrderID | CustomerID | CustomerName | ProductID | ProductName | Quantity |
        |---|---|---|---|---|---|
        | 1 | 101 | John Doe | 1 | Widget A | 2 |
        | 1 | 101 | John Doe | 2 | Widget B | 1 |
        | 2 | 102 | Jane Smith | 1 | Widget A | 3 |

    *   **Normalized Tables:**

        *   **Orders:**

            | OrderID | CustomerID |
            |---|---|
            | 1 | 101 |
            | 2 | 102 |

        *   **Customers:**

            | CustomerID | CustomerName |
            |---|---|
            | 101 | John Doe |
            | 102 | Jane Smith |

        *   **OrderItems:**

            | OrderID | ProductID | Quantity |
            |---|---|---|
            | 1 | 1 | 2 |
            | 1 | 2 | 1 |
            | 2 | 1 | 3 |

        *   **Products:**

            | ProductID | ProductName |
            |---|---|
            | 1 | Widget A |
            | 2 | Widget B |

### 8. Testing and Debugging

*   **Unit Testing:**  Test individual components (e.g., SQL queries, UI elements) in isolation.
*   **Integration Testing:**  Test the interaction between different components (e.g., front-end and database).
*   **System Testing:**  Test the entire application as a whole.
*   **User Acceptance Testing (UAT):**  Allow users to test the application and provide feedback.
*   **Debugging Techniques:**
    *   **Logging:**  Log important events and data values to help identify errors.
    *   **Debugging Tools:**  Use debugging tools provided by the DBMS and front-end technology.
    *   **Code Review:**  Have someone else review your code to identify potential errors.

---

### Practice Questions/Exercises:

1.  **Design a database schema for a hospital management system. Include at least five tables. Draw an ER diagram.**

    *   Possible tables: Patients, Doctors, Appointments, Departments, Medications.
    *   Consider relationships between patients and doctors (appointments), doctors and departments, patients and medications.

2.  **Write SQL queries to:**

    *   Retrieve all patients who have appointments with a specific doctor.
    *   Insert a new appointment.
    *   Update a patient's address.
    *   Delete an appointment.

3.  **Explain the difference between 1NF, 2NF, and 3NF. Provide an example of a table that is not in 3NF and normalize it.**

    *   See the Normalization section above for explanations.
    *   Example:  `Employee (EmployeeID, EmployeeName, DepartmentID, DepartmentName, DepartmentLocation)` - DepartmentName and DepartmentLocation are dependent on DepartmentID, not EmployeeID. Normalize by creating separate Department table.

4.  **How can you prevent SQL injection vulnerabilities in your application?**

    *   Use parameterized queries or ORM libraries.  Never directly embed user input into SQL queries.

5.  **Why is data validation important?  Provide examples of data validation techniques.**

    *   Ensures data integrity, prevents errors, improves data quality.
    *   Examples:  Checking data types, validating ranges, validating formats (e.g., email address), checking for required fields.

6.  **What are primary and foreign keys, and why are they important?**

    *   Primary keys uniquely identify rows; foreign keys establish relationships between tables. Crucial for data integrity and relational database structure.

**Answers/Guidance:**

1.  **(Database Design):** Focus on identifying key entities and relationships.  Your ER diagram should clearly depict the tables, attributes, and relationships. Consider things like: A patient can have many appointments.  A doctor can have many appointments.  A department can have many doctors.
2.  **(SQL Queries):**
    *   `SELECT P.* FROM Patients P JOIN Appointments A ON P.PatientID = A.PatientID WHERE A.DoctorID = 'specific_doctor_id';`
    *   `INSERT INTO Appointments (PatientID, DoctorID, AppointmentDate) VALUES ('patient_id', 'doctor_id', '2024-01-01');`
    *   `UPDATE Patients SET Address = 'new_address' WHERE PatientID = 'patient_id';`
    *   `DELETE FROM Appointments WHERE AppointmentID = 'appointment_id';`
3.  **(Normalization):** Understand the dependencies between attributes. Clearly explain how you would normalize the Employee table.
4.  **(SQL Injection Prevention):** Parameterized queries treat user input as data, not as part of the SQL command.  ORMs provide an abstraction layer that handles parameterization.
5.  **(Data Validation):** Data validation prevents "garbage in, garbage out." It ensures that the data stored in the database is accurate and consistent.
6.  **(Primary and Foreign Keys):** They are the foundation of relational databases and enforce referential integrity.

---

### Important Points to Remember:

*   **Plan before you code:**  Spend time on database design before starting to write code.  A good design will save you time and effort in the long run.
*   **Prioritize Security:** SQL Injection is a serious threat.
*   **Test thoroughly:**  Test your application with a variety of inputs and scenarios to ensure that it works correctly.
*   **Document your work:**  Document your database schema, code, and testing procedures.
*   **Normalization is key to a robust database.**
*   **Choose appropriate data types for your attributes.**  This impacts storage efficiency and data integrity.
*   **Think about performance:**  Consider indexing strategies to improve query performance.  Optimize your SQL queries.
