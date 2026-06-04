---
title: "Implementation of set operators nested queries, and join queries."
subject: "DBMS LAB"
module: "Module 6: Implementation of set operators nested queries, and join queries."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4ea"
status: "completed"
scrapedAt: "2026-05-20T16:12:10.429Z"
---
# DBMS Lab - Module 6: Set Operators, Nested Queries, and Join Queries

**Topic:** Implementation of Set Operators, Nested Queries, and Join Queries

**Description:** This module focuses on the practical implementation of set operators, nested queries, and join queries in a Database Management System (DBMS).

**Learning Outcomes:**

*   Understand and implement set operators (UNION, INTERSECT, EXCEPT/MINUS)
*   Understand and implement nested queries (correlated and non-correlated)
*   Understand and implement different types of join queries (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN)
*   Choose the appropriate query type for a given problem.
*   Optimize query performance.

## 1. Set Operators

**1.1 Key Concepts and Definitions:**

Set operators combine the results of two or more `SELECT` statements into a single result set.  For these operators to work effectively, the `SELECT` statements must adhere to specific rules:

*   **Number of Columns:** The number of columns in each `SELECT` statement must be the same.
*   **Data Types:** The corresponding columns in each `SELECT` statement must have compatible data types.  The data types do not need to be *exactly* the same, but they must be implicitly convertible (e.g., INT to FLOAT).
*   **Column Order:** The order of the columns in each `SELECT` statement must be the same.
*   The column names from the first `SELECT` statement are used for the resulting result set.

**Types of Set Operators:**

*   **UNION:** Combines the results of two or more `SELECT` statements, removing duplicate rows.  `UNION ALL` keeps duplicates.
*   **INTERSECT:** Returns only the rows that are present in the result sets of all `SELECT` statements.
*   **EXCEPT/MINUS:** Returns the rows that are present in the result set of the first `SELECT` statement but are not present in the result set of the second `SELECT` statement.  The name (`EXCEPT` or `MINUS`) depends on the specific DBMS.

**1.2 Implementation and Examples:**

Let's assume we have two tables: `Customers` and `Suppliers`.

**Customers Table:**

| CustomerID | CustomerName | City     |
| :--------- | :----------- | :------- |
| 1          | John Doe     | New York |
| 2          | Jane Smith   | London   |
| 3          | Peter Jones  | Paris    |
| 4          | Alice Brown  | New York |

**Suppliers Table:**

| SupplierID | SupplierName | City     |
| :--------- | :----------- | :------- |
| 10         | Acme Corp    | London   |
| 11         | Beta Inc     | Paris    |
| 12         | Gamma Ltd    | Tokyo    |
| 13         | Delta Group  | New York |

**Examples:**

*   **UNION:** Get a list of all cities where either customers or suppliers are located (without duplicates):

    ```sql
    SELECT City FROM Customers
    UNION
    SELECT City FROM Suppliers;
    ```

    Result:

    | City     |
    | :------- |
    | New York |
    | London   |
    | Paris    |
    | Tokyo    |

*   **UNION ALL:** Get a list of all cities where either customers or suppliers are located (including duplicates):

    ```sql
    SELECT City FROM Customers
    UNION ALL
    SELECT City FROM Suppliers;
    ```

    Result:

    | City     |
    | :------- |
    | New York |
    | London   |
    | Paris    |
    | New York |
    | London   |
    | Paris    |
    | Tokyo    |
    | New York |

*   **INTERSECT:** Get a list of cities where both customers and suppliers are located:

    ```sql
    SELECT City FROM Customers
    INTERSECT
    SELECT City FROM Suppliers;
    ```

    Result:

    | City     |
    | :------- |
    | New York |
    | London   |
    | Paris    |

*   **EXCEPT/MINUS:** Get a list of cities where customers are located, but suppliers are not (assuming the DBMS uses `EXCEPT`):

    ```sql
    SELECT City FROM Customers
    EXCEPT
    SELECT City FROM Suppliers;
    ```

    Result: (In this specific data set, there are no cities where customers are, but suppliers are not.) So it returns an empty set if using the dataset above.

    If we modify the `Customers` table and add a city `Rome`:

    | CustomerID | CustomerName | City     |
    | :--------- | :----------- | :------- |
    | 1          | John Doe     | New York |
    | 2          | Jane Smith   | London   |
    | 3          | Peter Jones  | Paris    |
    | 4          | Alice Brown  | New York |
    | 5          | Robert King  | Rome     |

    Then running the query again:

    ```sql
    SELECT City FROM Customers
    EXCEPT
    SELECT City FROM Suppliers;
    ```

    Result:

    | City     |
    | :------- |
    | Rome     |

**1.3 Important Points to Remember:**

*   Ensure the number and data types of columns are compatible across `SELECT` statements.
*   `UNION ALL` preserves duplicates, while `UNION` removes them.
*   Understand the differences between `INTERSECT` and `EXCEPT`/`MINUS`.
*   The order of `SELECT` statements matters for `EXCEPT`/`MINUS`.  The result set of the first statement is filtered by the result set of the second statement.
*   Set operators can be chained to combine more than two `SELECT` statements.

**1.4 Practice Questions/Exercises:**

1.  Given two tables, `Employees` (EmployeeID, Name, Department) and `Managers` (ManagerID, Name, Department), write a query to find all names that are either employees or managers (no duplicates).
    *   **Answer:**

        ```sql
        SELECT Name FROM Employees
        UNION
        SELECT Name FROM Managers;
        ```

2.  Given the same tables `Employees` and `Managers`, write a query to find all names that are both employees and managers.
    *   **Answer:**

        ```sql
        SELECT Name FROM Employees
        INTERSECT
        SELECT Name FROM Managers;
        ```

3.  Given tables `Orders` (OrderID, CustomerID) and `Returns` (OrderID, CustomerID), write a query to find CustomerIDs that have placed orders but have not returned any.
    *   **Answer:**

        ```sql
        SELECT CustomerID FROM Orders
        EXCEPT
        SELECT CustomerID FROM Returns;
        ```

## 2. Nested Queries

**2.1 Key Concepts and Definitions:**

A nested query (also known as a subquery) is a `SELECT` statement embedded within another SQL query. Nested queries are used to retrieve data that will be used in the outer query.

**Types of Nested Queries:**

*   **Non-Correlated (Independent) Subquery:** The inner query executes independently of the outer query. Its result is used as a constant value or a set of values for the outer query.  It's executed only once.

*   **Correlated Subquery:** The inner query depends on the outer query. It references a column from the outer query. The inner query is executed for each row processed by the outer query.

**2.2 Implementation and Examples:**

Using the `Customers` and `Orders` tables (with `CustomerID` as the foreign key in `Orders`):

**Customers Table:**

| CustomerID | CustomerName | City     |
| :--------- | :----------- | :------- |
| 1          | John Doe     | New York |
| 2          | Jane Smith   | London   |
| 3          | Peter Jones  | Paris    |

**Orders Table:**

| OrderID | CustomerID | OrderDate  | Amount |
| :------ | :--------- | :--------- | :----- |
| 101     | 1          | 2023-01-15 | 100    |
| 102     | 2          | 2023-02-20 | 200    |
| 103     | 1          | 2023-03-10 | 150    |
| 104     | 3          | 2023-04-05 | 300    |

**Examples:**

*   **Non-Correlated Subquery (IN operator):**  Find all customers who have placed orders.

    ```sql
    SELECT *
    FROM Customers
    WHERE CustomerID IN (SELECT CustomerID FROM Orders);
    ```

    Result:

    | CustomerID | CustomerName | City     |
    | :--------- | :----------- | :------- |
    | 1          | John Doe     | New York |
    | 2          | Jane Smith   | London   |
    | 3          | Peter Jones  | Paris    |

*   **Non-Correlated Subquery (using = operator with a single value):** Find the customer who placed the order with the highest amount.  (Assumes only one order has the maximum amount).

    ```sql
    SELECT c.*
    FROM Customers c
    JOIN Orders o ON c.CustomerID = o.CustomerID
    WHERE o.Amount = (SELECT MAX(Amount) FROM Orders);
    ```

    Result:

    | CustomerID | CustomerName | City     |
    | :--------- | :----------- | :------- |
    | 3          | Peter Jones  | Paris    |

*   **Correlated Subquery (EXISTS operator):** Find all customers who have placed at least one order.

    ```sql
    SELECT *
    FROM Customers c
    WHERE EXISTS (SELECT 1 FROM Orders o WHERE o.CustomerID = c.CustomerID);
    ```

    Result:  (Same as the first non-correlated example in this case)

    | CustomerID | CustomerName | City     |
    | :--------- | :----------- | :------- |
    | 1          | John Doe     | New York |
    | 2          | Jane Smith   | London   |
    | 3          | Peter Jones  | Paris    |

*   **Correlated Subquery (NOT EXISTS operator):** Find all customers who have *not* placed any orders.

    ```sql
    SELECT *
    FROM Customers c
    WHERE NOT EXISTS (SELECT 1 FROM Orders o WHERE o.CustomerID = c.CustomerID);
    ```

    Result: (In this data set, there are no customers who have not placed an order. If we added a new customer that did not place an order it would be returned)

**2.3 Important Points to Remember:**

*   Nested queries can improve readability and modularity of SQL code.
*   Correlated subqueries can be less efficient than joins, especially for large datasets, because they are executed for each row of the outer query.
*   Consider performance implications when using nested queries, and explore alternative solutions (e.g., joins) if necessary.
*   The `IN`, `ANY`, `ALL`, `EXISTS`, and comparison operators (=, >, <, etc.) are commonly used with nested queries.
*   Nested queries can be nested within other nested queries (but excessive nesting can negatively impact performance and readability).
*   Pay attention to scoping and referencing columns correctly in correlated subqueries.  Use aliases to avoid ambiguity.

**2.4 Practice Questions/Exercises:**

1.  Given tables `Products` (ProductID, ProductName, Price) and `OrderItems` (OrderItemID, OrderID, ProductID, Quantity), write a query to find all products with a price higher than the average price of all products.
    *   **Answer:**

        ```sql
        SELECT *
        FROM Products
        WHERE Price > (SELECT AVG(Price) FROM Products);
        ```

2.  Given tables `Students` (StudentID, Name, Major) and `Courses` (CourseID, CourseName, Instructor) and `Enrollments` (EnrollmentID, StudentID, CourseID), write a query to find the names of all students enrolled in courses taught by 'Dr. Smith'.
    *   **Answer:**

        ```sql
        SELECT s.Name
        FROM Students s
        WHERE s.StudentID IN (SELECT e.StudentID FROM Enrollments e WHERE e.CourseID IN (SELECT c.CourseID FROM Courses c WHERE c.Instructor = 'Dr. Smith'));
        ```

3.  Given tables `Employees` (EmployeeID, Name, Salary, DepartmentID) and `Departments` (DepartmentID, DepartmentName), write a query to find the names of all departments where the average salary of employees is greater than $50,000.
    *   **Answer:**

        ```sql
        SELECT d.DepartmentName
        FROM Departments d
        WHERE d.DepartmentID IN (SELECT e.DepartmentID FROM Employees e GROUP BY e.DepartmentID HAVING AVG(e.Salary) > 50000);
        ```

## 3. Join Queries

**3.1 Key Concepts and Definitions:**

Join queries combine rows from two or more tables based on a related column. Joins are essential for retrieving data from related tables in a relational database.

**Types of Joins:**

*   **INNER JOIN:** Returns rows only when there is a match in both tables based on the join condition.  The most common type of join.

*   **LEFT (OUTER) JOIN:** Returns all rows from the left table and the matching rows from the right table. If there is no match in the right table, it returns NULL values for the columns of the right table.

*   **RIGHT (OUTER) JOIN:** Returns all rows from the right table and the matching rows from the left table. If there is no match in the left table, it returns NULL values for the columns of the left table.

*   **FULL (OUTER) JOIN:** Returns all rows from both tables. If there is no match, it returns NULL values for the columns of the table without a match.  Not supported by all DBMS (e.g., MySQL before version 8.0).

*   **CROSS JOIN:** Returns the Cartesian product of the two tables. Every row in the first table is joined with every row in the second table.  Generally avoided unless specifically needed due to its potential to create very large result sets.

**3.2 Implementation and Examples:**

Using the `Customers` and `Orders` tables from the Nested Queries section:

**Customers Table:**

| CustomerID | CustomerName | City     |
| :--------- | :----------- | :------- |
| 1          | John Doe     | New York |
| 2          | Jane Smith   | London   |
| 3          | Peter Jones  | Paris    |

**Orders Table:**

| OrderID | CustomerID | OrderDate  | Amount |
| :------ | :--------- | :--------- | :----- |
| 101     | 1          | 2023-01-15 | 100    |
| 102     | 2          | 2023-02-20 | 200    |
| 103     | 1          | 2023-03-10 | 150    |
| 104     | 3          | 2023-04-05 | 300    |

**Examples:**

*   **INNER JOIN:** Get a list of all customers and their corresponding orders.

    ```sql
    SELECT c.CustomerName, o.OrderID, o.OrderDate, o.Amount
    FROM Customers c
    INNER JOIN Orders o ON c.CustomerID = o.CustomerID;
    ```

    Result:

    | CustomerName | OrderID | OrderDate  | Amount |
    | :----------- | :------ | :--------- | :----- |
    | John Doe     | 101     | 2023-01-15 | 100    |
    | Jane Smith   | 102     | 2023-02-20 | 200    |
    | John Doe     | 103     | 2023-03-10 | 150    |
    | Peter Jones  | 104     | 2023-04-05 | 300    |

*   **LEFT JOIN:** Get a list of all customers and their corresponding orders.  Include customers even if they haven't placed any orders.

    ```sql
    SELECT c.CustomerName, o.OrderID, o.OrderDate, o.Amount
    FROM Customers c
    LEFT JOIN Orders o ON c.CustomerID = o.CustomerID;
    ```

    If we add a customer, 'David Lee', to the `Customers` table without any corresponding orders, the result would be:

    | CustomerName | OrderID | OrderDate  | Amount |
    | :----------- | :------ | :--------- | :----- |
    | John Doe     | 101     | 2023-01-15 | 100    |
    | Jane Smith   | 102     | 2023-02-20 | 200    |
    | John Doe     | 103     | 2023-03-10 | 150    |
    | Peter Jones  | 104     | 2023-04-05 | 300    |
    | David Lee    | NULL    | NULL       | NULL   |

*   **RIGHT JOIN:**  Get a list of all orders and the corresponding customers.  Include orders even if they don't have a matching customer (less common use case with this data). In this example a RIGHT JOIN and INNER JOIN would give same results because every order has a corresponding Customer.

    ```sql
    SELECT c.CustomerName, o.OrderID, o.OrderDate, o.Amount
    FROM Customers c
    RIGHT JOIN Orders o ON c.CustomerID = o.CustomerID;
    ```

    Would return

        | CustomerName | OrderID | OrderDate  | Amount |
        | :----------- | :------ | :--------- | :----- |
        | John Doe     | 101     | 2023-01-15 | 100    |
        | Jane Smith   | 102     | 2023-02-20 | 200    |
        | John Doe     | 103     | 2023-03-10 | 150    |
        | Peter Jones  | 104     | 2023-04-05 | 300    |

*   **FULL OUTER JOIN:**  Returns all records when there is a match in either left or right table records.
    In this case, it would return the same result as the left join when including the customer 'David Lee' who has no order, because every order has a corresponding customer. If we deleted one of the customers and left the order in place, a `FULL OUTER JOIN` would return all the customers even the one with no order and all the orders even the one with no customer.

**3.3 Important Points to Remember:**

*   The `ON` clause specifies the join condition – the relationship between the tables.
*   Use aliases to shorten table names and improve readability.
*   Understand the differences between the various join types to choose the appropriate one for your specific query.
*   Consider using `WHERE` clauses with LEFT/RIGHT/FULL OUTER JOINs to filter the results and achieve specific outcomes (e.g., finding customers who have not placed orders).
*   Be mindful of performance, especially with large datasets.  Ensure that appropriate indexes are in place on the join columns.
*   Joining on non-indexed columns can significantly slow down query execution.
*   Avoid unnecessary joins.  Only join tables that are required to retrieve the desired data.
*   Be aware of the potential for `NULL` values when using outer joins.

**3.4 Practice Questions/Exercises:**

1.  Given tables `Employees` (EmployeeID, Name, DepartmentID) and `Departments` (DepartmentID, DepartmentName), write a query to find the name of each employee and their department name.
    *   **Answer:**

        ```sql
        SELECT e.Name, d.DepartmentName
        FROM Employees e
        INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID;
        ```

2.  Given tables `Customers` (CustomerID, Name) and `Orders` (OrderID, CustomerID), write a query to list all customers and the number of orders they have placed. If a customer has not placed any orders, the order count should be 0.
    *   **Answer:**

        ```sql
        SELECT c.Name, COUNT(o.OrderID) AS OrderCount
        FROM Customers c
        LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
        GROUP BY c.Name;
        ```

3.  Given tables `Products` (ProductID, ProductName) and `OrderItems` (OrderItemID, OrderID, ProductID), write a query to find all products that have never been ordered.
    *   **Answer:**

        ```sql
        SELECT p.ProductName
        FROM Products p
        LEFT JOIN OrderItems oi ON p.ProductID = oi.ProductID
        WHERE oi.ProductID IS NULL;
        ```

## 4. Choosing the Appropriate Query Type

*   **Set Operators:** Use when combining results from multiple `SELECT` statements.
*   **Nested Queries:**  Use when a subquery needs to filter or provide values for the outer query. Especially useful when the logic to filter or select data is complex and best expressed in a separate query.  Correlated subqueries are particularly helpful when each row of the outer query needs to be compared against the result of the inner query.
*   **Join Queries:** Use when combining data from two or more related tables.  Often more efficient than correlated subqueries, especially for large datasets.  Choosing the correct join type (INNER, LEFT, RIGHT, FULL) is crucial for getting the desired results.  Prioritize joins where possible for performance.

## 5. Query Optimization

*   **Indexing:** Ensure appropriate indexes are defined on join columns and columns used in `WHERE` clauses.
*   **Avoid `SELECT *`:**  Select only the columns that are needed.
*   **Use `EXISTS` instead of `COUNT` in Subqueries:** `EXISTS` is often faster as it stops searching once a match is found.
*   **Minimize the use of correlated subqueries:**  Rewrite them as joins whenever possible.
*   **Analyze Query Execution Plans:**  Use the DBMS's tools to analyze the query execution plan and identify performance bottlenecks.
*   **Optimize `WHERE` clauses:**  Place more selective conditions earlier in the `WHERE` clause.
*   **Consider using derived tables (subqueries in the FROM clause) to simplify complex queries.**
*   **Regularly update statistics on tables:**  This helps the query optimizer make better decisions.

This provides a comprehensive overview of set operators, nested queries, and join queries in DBMS. Remember to practice these concepts with different datasets and scenarios to fully grasp their functionality and nuances.  Always consider performance implications and strive for efficient query design.
