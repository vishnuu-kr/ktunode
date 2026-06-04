---
title: "Implementation of various aggregate functions, Order By, Group By & Having clause in SQL."
subject: "DBMS LAB"
module: "Module 5: Implementation of various aggregate functions, Order By, Group By & Having clause in SQL."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4e8"
status: "completed"
scrapedAt: "2026-05-20T16:12:09.731Z"
---
# DBMS LAB: Module 5 - Aggregate Functions, ORDER BY, GROUP BY & HAVING Clause in SQL

## Introduction

This module focuses on implementing essential SQL features: aggregate functions, the `ORDER BY` clause, the `GROUP BY` clause, and the `HAVING` clause. These tools are crucial for analyzing and summarizing data within a database.  We'll explore each concept with definitions, examples, and practice exercises.

## Learning Outcomes

*   Understand and implement various aggregate functions in SQL.
*   Use the `ORDER BY` clause to sort query results.
*   Apply the `GROUP BY` clause to group rows based on specific columns.
*   Utilize the `HAVING` clause to filter groups based on specified conditions.
*   Combine aggregate functions, `ORDER BY`, `GROUP BY`, and `HAVING` to perform complex data analysis.

## 1. Aggregate Functions

### 1.1 Definition

Aggregate functions perform calculations on multiple rows of a table and return a single value. They are commonly used with the `GROUP BY` clause to summarize data within groups.

### 1.2 Key Aggregate Functions

*   **`COUNT()`**: Returns the number of rows.  `COUNT(*)` counts all rows, while `COUNT(column_name)` counts non-null values in the specified column.
*   **`SUM()`**: Returns the sum of values in a numeric column.
*   **`AVG()`**: Returns the average of values in a numeric column.
*   **`MIN()`**: Returns the minimum value in a column.
*   **`MAX()`**: Returns the maximum value in a column.

### 1.3 Examples

Let's assume we have a table named `Employees` with the following structure:

| EmployeeID | FirstName | LastName | Department | Salary |
|---|---|---|---|---|
| 1 | John | Doe | Sales | 60000 |
| 2 | Jane | Smith | Marketing | 75000 |
| 3 | David | Lee | Sales | 65000 |
| 4 | Emily | Brown | HR | 55000 |
| 5 | Michael | Wilson | Marketing | 80000 |
| 6 | Sarah | Davis | HR | 60000 |

**Example 1: Counting the total number of employees:**

```sql
SELECT COUNT(*) AS TotalEmployees FROM Employees;
```

**Output:**

| TotalEmployees |
|---|
| 6 |

**Example 2: Calculating the average salary:**

```sql
SELECT AVG(Salary) AS AverageSalary FROM Employees;
```

**Output:**

| AverageSalary |
|---|
| 65833.3333 |

**Example 3: Finding the highest salary:**

```sql
SELECT MAX(Salary) AS HighestSalary FROM Employees;
```

**Output:**

| HighestSalary |
|---|
| 80000 |

**Example 4: Finding the total salary paid:**

```sql
SELECT SUM(Salary) AS TotalSalaryPaid FROM Employees;
```

**Output:**

| TotalSalaryPaid |
|---|
| 395000 |

**Example 5: Counting the number of employees in the Sales department:**

```sql
SELECT COUNT(*) AS SalesEmployees FROM Employees WHERE Department = 'Sales';
```

**Output:**

| SalesEmployees |
|---|
| 2 |

### 1.4 Important Points

*   Aggregate functions ignore `NULL` values (except for `COUNT(*)`).
*   They can be used in the `SELECT` list.
*   They are often used with the `GROUP BY` clause.

## 2. ORDER BY Clause

### 2.1 Definition

The `ORDER BY` clause is used to sort the result set of a query in ascending or descending order based on one or more columns.

### 2.2 Syntax

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition
ORDER BY column1 [ASC | DESC], column2 [ASC | DESC], ...;
```

*   `ASC` (Ascending) is the default sorting order.
*   `DESC` (Descending) sorts in reverse order.

### 2.3 Examples

Using the `Employees` table:

**Example 1: Ordering employees by last name in ascending order:**

```sql
SELECT FirstName, LastName FROM Employees ORDER BY LastName ASC;
```

**Output (sorted by LastName):**

| FirstName | LastName |
|---|---|
| Emily | Brown |
| Sarah | Davis |
| John | Doe |
| David | Lee |
| Jane | Smith |
| Michael | Wilson |

**Example 2: Ordering employees by salary in descending order:**

```sql
SELECT FirstName, LastName, Salary FROM Employees ORDER BY Salary DESC;
```

**Output (sorted by Salary, highest to lowest):**

| FirstName | LastName | Salary |
|---|---|---|
| Michael | Wilson | 80000 |
| Jane | Smith | 75000 |
| David | Lee | 65000 |
| John | Doe | 60000 |
| Sarah | Davis | 60000 |
| Emily | Brown | 55000 |

**Example 3: Ordering employees by department (ascending) and then by salary (descending):**

```sql
SELECT FirstName, LastName, Department, Salary FROM Employees ORDER BY Department ASC, Salary DESC;
```

**Output (sorted by Department, then by Salary within each department):**

| FirstName | LastName | Department | Salary |
|---|---|---|---|
| Emily | Brown | HR | 55000 |
| Sarah | Davis | HR | 60000 |
| Jane | Smith | Marketing | 75000 |
| Michael | Wilson | Marketing | 80000 |
| John | Doe | Sales | 60000 |
| David | Lee | Sales | 65000 |

### 2.4 Important Points

*   The `ORDER BY` clause is typically placed at the end of the `SELECT` statement.
*   You can order by multiple columns.  The order of columns in the `ORDER BY` clause determines the priority of sorting.
*   The `ORDER BY` clause affects only the order of the output, not the actual data in the table.

## 3. GROUP BY Clause

### 3.1 Definition

The `GROUP BY` clause groups rows that have the same values in one or more columns into a summary row. It is often used with aggregate functions to calculate summary statistics for each group.

### 3.2 Syntax

```sql
SELECT column1, column2, aggregate_function(column3)
FROM table_name
WHERE condition
GROUP BY column1, column2
ORDER BY column1, column2;
```

### 3.3 Examples

Using the `Employees` table:

**Example 1: Counting the number of employees in each department:**

```sql
SELECT Department, COUNT(*) AS NumberOfEmployees
FROM Employees
GROUP BY Department;
```

**Output:**

| Department | NumberOfEmployees |
|---|---|
| HR | 2 |
| Marketing | 2 |
| Sales | 2 |

**Example 2: Calculating the average salary for each department:**

```sql
SELECT Department, AVG(Salary) AS AverageSalary
FROM Employees
GROUP BY Department;
```

**Output:**

| Department | AverageSalary |
|---|---|
| HR | 57500.0000 |
| Marketing | 77500.0000 |
| Sales | 62500.0000 |

**Example 3: Finding the highest salary in each department and ordering the results by department:**

```sql
SELECT Department, MAX(Salary) AS HighestSalary
FROM Employees
GROUP BY Department
ORDER BY Department;
```

**Output:**

| Department | HighestSalary |
|---|---|
| HR | 60000 |
| Marketing | 80000 |
| Sales | 65000 |

### 3.4 Important Points

*   All non-aggregated columns in the `SELECT` list must be included in the `GROUP BY` clause.
*   The `GROUP BY` clause is placed after the `WHERE` clause and before the `ORDER BY` clause.

## 4. HAVING Clause

### 4.1 Definition

The `HAVING` clause is used to filter the results of a `GROUP BY` query. It filters groups based on a specified condition *after* the grouping has been performed. It's similar to the `WHERE` clause, but the `WHERE` clause filters individual rows *before* grouping, while the `HAVING` clause filters groups *after* grouping.

### 4.2 Syntax

```sql
SELECT column1, column2, aggregate_function(column3)
FROM table_name
WHERE condition
GROUP BY column1, column2
HAVING condition
ORDER BY column1, column2;
```

### 4.3 Examples

Using the `Employees` table:

**Example 1: Finding departments with more than one employee:**

```sql
SELECT Department, COUNT(*) AS NumberOfEmployees
FROM Employees
GROUP BY Department
HAVING COUNT(*) > 1;
```

**Output:**

| Department | NumberOfEmployees |
|---|---|
| HR | 2 |
| Marketing | 2 |
| Sales | 2 |

**Example 2: Finding departments where the average salary is greater than 65000:**

```sql
SELECT Department, AVG(Salary) AS AverageSalary
FROM Employees
GROUP BY Department
HAVING AVG(Salary) > 65000;
```

**Output:**

| Department | AverageSalary |
|---|---|
| Marketing | 77500.0000 |

**Example 3: Finding departments with a total salary expenditure greater than 120000:**

```sql
SELECT Department, SUM(Salary) AS TotalSalary
FROM Employees
GROUP BY Department
HAVING SUM(Salary) > 120000;
```

**Output:**

| Department | TotalSalary |
|---|---|
| Marketing | 155000 |

### 4.4 Important Points

*   The `HAVING` clause is used to filter groups, not individual rows.
*   The `HAVING` clause is placed after the `GROUP BY` clause and before the `ORDER BY` clause.
*   The `HAVING` clause typically contains aggregate functions.

## 5. Combining Aggregate Functions, ORDER BY, GROUP BY, and HAVING

It's common to use all these elements together to perform complex data analysis.

**Example:  Find departments with more than one employee and an average salary above 60000, order the result by average salary in descending order:**

```sql
SELECT Department, COUNT(*) AS NumberOfEmployees, AVG(Salary) AS AverageSalary
FROM Employees
GROUP BY Department
HAVING COUNT(*) > 1 AND AVG(Salary) > 60000
ORDER BY AverageSalary DESC;
```

**Output:**

| Department | NumberOfEmployees | AverageSalary |
|---|---|---|
| Marketing | 2 | 77500.0000 |
| Sales | 2 | 62500.0000 |

## Practice Questions & Exercises

**Consider the following table named `Orders`:**

| OrderID | CustomerID | OrderDate | TotalAmount | ProductID |
|---|---|---|---|---|
| 1 | 101 | 2023-01-15 | 100.00 | 201 |
| 2 | 102 | 2023-01-20 | 150.00 | 202 |
| 3 | 101 | 2023-02-01 | 200.00 | 201 |
| 4 | 103 | 2023-02-10 | 75.00 | 203 |
| 5 | 102 | 2023-02-25 | 120.00 | 202 |
| 6 | 101 | 2023-03-05 | 250.00 | 201 |
| 7 | 104 | 2023-03-15 | 90.00 | 204 |

**1.  Write a query to find the total number of orders.**

```sql
SELECT COUNT(*) AS TotalOrders FROM Orders;
```

**2.  Write a query to find the average order amount.**

```sql
SELECT AVG(TotalAmount) AS AverageOrderAmount FROM Orders;
```

**3.  Write a query to find the highest order amount.**

```sql
SELECT MAX(TotalAmount) AS HighestOrderAmount FROM Orders;
```

**4.  Write a query to find the total amount spent by each customer (grouped by CustomerID).**

```sql
SELECT CustomerID, SUM(TotalAmount) AS TotalSpent FROM Orders GROUP BY CustomerID;
```

**5.  Write a query to find the CustomerIDs who have spent more than $300 in total.**

```sql
SELECT CustomerID, SUM(TotalAmount) AS TotalSpent
FROM Orders
GROUP BY CustomerID
HAVING SUM(TotalAmount) > 300;
```

**6.  Write a query to list all orders sorted by OrderDate in descending order.**

```sql
SELECT * FROM Orders ORDER BY OrderDate DESC;
```

**7.  Write a query to find the number of orders placed in each month.** *(Hint: You might need to use date functions depending on your DBMS, e.g., `MONTH()` in MySQL or `MONTH()` in SQL Server or `strftime('%m', OrderDate)` in SQLite).*

   *Example Solution (MySQL/SQL Server):*

   ```sql
   SELECT MONTH(OrderDate) AS OrderMonth, COUNT(*) AS NumberOfOrders
   FROM Orders
   GROUP BY MONTH(OrderDate)
   ORDER BY MONTH(OrderDate);
   ```

   *Example Solution (SQLite):*

   ```sql
   SELECT strftime('%m', OrderDate) AS OrderMonth, COUNT(*) AS NumberOfOrders
   FROM Orders
   GROUP BY OrderMonth
   ORDER BY OrderMonth;
   ```

**8.  Write a query to find the product ID and the count of the number of times each product has been ordered, sorted in descending order by the number of orders**

```sql
SELECT ProductID, COUNT(*) AS NumberOfOrders
FROM Orders
GROUP BY ProductID
ORDER BY NumberOfOrders DESC;
```

## Important Points to Remember

*   The order of clauses in a `SELECT` statement is typically: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`.
*   Make sure to include all non-aggregated columns in the `SELECT` list within the `GROUP BY` clause.
*   Use the `WHERE` clause to filter rows before grouping, and the `HAVING` clause to filter groups after grouping.
*   Understanding these concepts is critical for effective data analysis and reporting using SQL.
