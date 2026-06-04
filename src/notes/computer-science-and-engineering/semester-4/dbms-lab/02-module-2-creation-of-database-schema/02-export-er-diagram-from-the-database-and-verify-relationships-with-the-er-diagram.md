---
title: "Export ER diagram from the database and verify relationships (with the ER diagram designed in step 1)."
subject: "DBMS LAB"
module: "Module 2: Creation of database schema "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4e2"
status: "completed"
scrapedAt: "2026-05-20T16:12:07.642Z"
---
## DBMS LAB - Module 2: Creation of Database Schema

### Topic: Export ER Diagram from the Database and Verify Relationships (with the ER diagram designed in Step 1)

**Learning Outcomes:**

*   Understand the importance of comparing database implementation with the initial ER diagram design.
*   Learn how to export an ER diagram from an existing database using different tools.
*   Be able to visually inspect and verify that relationships defined in the initial ER diagram are correctly implemented in the database schema.
*   Identify discrepancies between the implemented schema and the original ER diagram.
*   Understand the implications of discrepancies and how to resolve them.

**1. Key Concepts and Definitions**

*   **ER Diagram (Entity-Relationship Diagram):** A visual representation of entities and their relationships within a database. It serves as a blueprint for database design.
*   **Entity:** A real-world object or concept about which data is stored (e.g., Customer, Product, Order).
*   **Attribute:** A characteristic or property of an entity (e.g., Customer ID, Product Name, Order Date).
*   **Relationship:** A connection or association between two or more entities (e.g., a Customer places an Order).
*   **Cardinality:**  Defines the numerical relationships between entities.  Common types include:
    *   **One-to-One (1:1):** One instance of entity A is related to one instance of entity B.
    *   **One-to-Many (1:N):** One instance of entity A is related to many instances of entity B.
    *   **Many-to-One (N:1):** Many instances of entity A are related to one instance of entity B.
    *   **Many-to-Many (N:M):** Many instances of entity A are related to many instances of entity B.  Typically implemented using a linking table.
*   **Database Schema:** The logical structure of a database, including tables, columns, data types, constraints, and relationships.
*   **Foreign Key:** A column (or set of columns) in one table that refers to the primary key of another table. Used to establish and enforce relationships between tables.
*   **Primary Key:** A column (or set of columns) that uniquely identifies each row in a table.
*   **Database Management System (DBMS):** Software used to manage and interact with databases (e.g., MySQL, PostgreSQL, Oracle, SQL Server).
*   **Reverse Engineering (of Database Schema):** The process of extracting the schema from an existing database to understand its structure and relationships.

**2. Importance of Comparing Database Implementation with the Initial ER Diagram**

*   **Validation:** Ensures the database schema accurately reflects the requirements captured in the initial ER diagram.
*   **Consistency:**  Maintains consistency between the design and the actual implementation.
*   **Error Detection:** Helps identify errors in the database design or implementation (e.g., missing relationships, incorrect data types).
*   **Documentation:**  Provides up-to-date documentation of the database structure.
*   **Maintainability:** Simplifies database maintenance and future modifications.  A consistent schema makes it easier to understand and modify the database.

**3. Exporting ER Diagram from an Existing Database**

Different DBMSs offer various tools and methods for exporting ER diagrams.  Here are some examples:

*   **MySQL:**
    *   **MySQL Workbench:** A visual database design tool that can reverse engineer a database schema and generate an ER diagram.
        *   Steps:
            1.  Connect to the MySQL database in MySQL Workbench.
            2.  Go to `Database` -> `Reverse Engineer...`.
            3.  Follow the wizard to select the database and tables.
            4.  MySQL Workbench will generate an ER diagram based on the database schema.
    *   **Command-line tools:**  You can use `SHOW CREATE TABLE` statements to extract table definitions and relationships programmatically, then use a third-party tool or script to generate the ER diagram.

*   **PostgreSQL:**
    *   **pgAdmin:** The official GUI administration tool for PostgreSQL. It has an ERD tool that you can use.
        *   Steps:
            1. Connect to your PostgreSQL database in pgAdmin.
            2. Right-click on the database name in the Object Browser.
            3. Select "ERD" -> "Generate ERD".
            4. Customize the ERD options (such as displayed relationships and attributes) and click "Generate".

*   **SQL Server:**
    *   **SQL Server Management Studio (SSMS):** Offers a database diagram feature.
        *   Steps:
            1.  Connect to the SQL Server instance in SSMS.
            2.  Expand the `Databases` node, then your database.
            3.  Right-click on `Database Diagrams` and select `New Database Diagram`.
            4.  Add the tables you want to include in the diagram.
            5.  SSMS will automatically generate relationships based on foreign key constraints.

*   **General Database Tools:**
    *   **DbVisualizer:** A universal database tool that supports various DBMSs and can generate ER diagrams.
    *   **DataGrip:**  A powerful IDE for database development that also has ER diagram support.

**Example (MySQL Workbench):**

Let's say you have a database named `library` with tables `books`, `authors`, and `book_author`.

1.  After connecting to the `library` database in MySQL Workbench and reverse engineering, you should see the ER diagram generated.
2.  The diagram should show entities `books`, `authors`, and `book_author`.
3.  The relationships should reflect the foreign key constraints:
    *   `book_author` table has foreign keys referencing `books` and `authors`.  This implements a many-to-many relationship between `books` and `authors`.

**4. Verifying Relationships**

*   **Visual Inspection:**
    *   Compare the exported ER diagram with the initial ER diagram design.
    *   Check if all entities and relationships are present in the exported diagram.
    *   Verify the cardinality of relationships.  Are they correctly represented (1:1, 1:N, N:M)?
*   **Foreign Key Constraints:**
    *   Confirm that foreign key constraints are defined for all relationships in the database.
    *   Check the `ON DELETE` and `ON UPDATE` actions for each foreign key. Are they appropriate for the application's needs (e.g., `CASCADE`, `SET NULL`, `RESTRICT`)?
*   **Data Types:**
    *   Ensure that the data types of related columns are compatible (e.g., the foreign key column in one table should have the same data type as the primary key column it references).
*   **Naming Conventions:**
    *   Consistent naming conventions make it easier to understand the database schema. Check if the table and column names are consistent with the initial design or the project's naming standards.

**Example:**

Suppose your initial ER diagram for a library database shows a many-to-many relationship between `Books` and `Authors` implemented via a `BookAuthors` linking table.  You need to verify:

1.  **Entities:**  The exported ER diagram should show `Books`, `Authors`, and `BookAuthors` entities.
2.  **Relationships:**
    *   `BookAuthors` should have foreign key relationships to both `Books` and `Authors`.
    *   The relationships should be drawn correctly, indicating that `BookAuthors` connects `Books` and `Authors`.
3.  **Cardinality:** The diagram should clearly show the many-to-many nature of the relationship between `Books` and `Authors` via the `BookAuthors` table.

**5. Identifying Discrepancies**

Discrepancies can arise due to:

*   **Implementation Errors:** Mistakes during database creation (e.g., forgetting to create a foreign key constraint).
*   **Design Changes:** Modifications to the database schema after the initial ER diagram was created, without updating the diagram.
*   **Misunderstanding of Requirements:** Incorrect interpretation of requirements leading to an inaccurate ER diagram or implementation.

**Common Discrepancies:**

*   **Missing Relationships:** A relationship present in the ER diagram is not implemented with a foreign key constraint in the database.
*   **Incorrect Cardinality:** The cardinality of a relationship in the ER diagram is different from the implemented database schema.  For example, an ER diagram might specify a 1:N relationship, but the database implements a N:M relationship.
*   **Missing Entities or Attributes:** An entity or attribute present in the ER diagram is not defined in the database schema.
*   **Incorrect Data Types:** A column in the database has a different data type than specified in the ER diagram.
*   **Missing Constraints:** Constraints (e.g., `NOT NULL`, `UNIQUE`, `CHECK`) are not implemented in the database as intended in the initial design.

**6. Implications of Discrepancies and How to Resolve Them**

*   **Data Integrity Issues:** Discrepancies can lead to data inconsistencies and inaccuracies. For instance, a missing foreign key constraint could allow orphaned records (records in a child table that refer to a non-existent record in the parent table).
*   **Query Performance Problems:**  Incorrect relationships can lead to inefficient queries.
*   **Application Errors:** Applications relying on the database schema may behave incorrectly if the database does not match the expected structure.

**Resolving Discrepancies:**

1.  **Identify the Root Cause:** Determine why the discrepancy exists (implementation error, design change, etc.).
2.  **Update the Database Schema:** Modify the database schema to match the initial ER diagram or the updated requirements. This might involve adding foreign key constraints, changing data types, or adding missing entities/attributes.  Use `ALTER TABLE` statements to modify the database schema.
3.  **Update the ER Diagram (if needed):** If the discrepancy is due to a deliberate design change, update the ER diagram to reflect the current database schema.
4.  **Test Thoroughly:** After making changes, thoroughly test the database and related applications to ensure that the issue is resolved and that no new problems have been introduced.

**7. Example Scenario and Solution**

**Scenario:**

You designed an ER diagram for a simple e-commerce application.  The ER diagram shows `Customers` and `Orders` with a one-to-many relationship (one customer can place many orders).  However, after exporting the ER diagram from the database, you notice that the foreign key constraint from the `Orders` table to the `Customers` table is missing.

**Solution:**

1.  **Identify the Problem:** The foreign key relationship between `Orders` and `Customers` is missing. This means orders are not linked to customers in the database.
2.  **Update the Database Schema:** Add the missing foreign key constraint to the `Orders` table.

    ```sql
    ALTER TABLE Orders
    ADD CONSTRAINT FK_Orders_Customers
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID);
    ```
3.  **Verify the Solution:** Export the ER diagram again to confirm that the foreign key relationship is now present.
4.  **Test:** Test the application to ensure that orders can be associated with customers correctly.

**8. Important Points to Remember**

*   ER diagrams are living documents. Keep them updated to reflect changes in the database schema.
*   Use a consistent naming convention throughout the database schema.
*   Always verify that the database implementation matches the ER diagram design.
*   Thorough testing is crucial after making any changes to the database schema.
*   Understanding cardinality is essential for designing and verifying database relationships.
*   Consider using database version control to track changes to the database schema and ER diagrams.

**9. Practice Questions and Exercises**

**Question 1:** What is an ER diagram, and why is it important in database design?

**Answer:** An ER diagram is a visual representation of entities and their relationships within a database. It's important because it provides a blueprint for database design, helps validate the implementation, and serves as documentation.

**Question 2:**  Explain the different types of cardinality in database relationships. Provide examples of each.

**Answer:**
*   **One-to-One (1:1):**  One instance of entity A is related to one instance of entity B. Example: A person and their passport.
*   **One-to-Many (1:N):** One instance of entity A is related to many instances of entity B. Example: A customer and their orders.
*   **Many-to-One (N:1):** Many instances of entity A are related to one instance of entity B. Example: Many students belong to one department.
*   **Many-to-Many (N:M):** Many instances of entity A are related to many instances of entity B.  Example:  Many students can enroll in many courses. (Requires a linking table, such as a StudentCourse table)

**Question 3:** How do you export an ER diagram from a MySQL database?

**Answer:** Using MySQL Workbench, connect to the database, then go to `Database` -> `Reverse Engineer...` and follow the wizard.

**Question 4:** What are some common discrepancies that can occur between an ER diagram and the implemented database schema?

**Answer:** Missing relationships, incorrect cardinality, missing entities or attributes, incorrect data types, and missing constraints.

**Question 5:**  You have a database with tables `Students` and `Courses`. The ER diagram shows a many-to-many relationship between them, but you don't see a linking table in the database. What is the potential problem and how would you fix it?

**Answer:** The potential problem is that the many-to-many relationship is not properly implemented. You need to create a linking table (e.g., `StudentCourses`) with foreign keys referencing both the `Students` and `Courses` tables to represent the relationship correctly.  Then, you need to add the appropriate foreign key constraints.

**Question 6:** What is a foreign key constraint, and why is it important?

**Answer:** A foreign key constraint is a rule that ensures that the values in a column (or set of columns) in one table match the values in a primary key column of another table.  It enforces relationships between tables and helps maintain data integrity by preventing orphaned records.

**Exercise 1:**

Design a database for a online bookstore. Include Entities like Books, Authors, Categories, and Orders. Create an ER diagram, and then create the corresponding schema in a database of your choice. Then export the ER diagram from the database, and verify it matches your original diagram.  Identify any discrepancies and correct them.

**Exercise 2:**

Consider a social media application.  The application has tables for `Users`, `Posts`, and `Comments`.  Draw an ER diagram representing these entities and their relationships (users can create posts, and users can comment on posts).  Implement this schema in a database.  Then, introduce an error by deleting one of the foreign key constraints.  Export the ER diagram and demonstrate how you would identify the missing relationship.  Correct the database schema by re-adding the missing constraint.
