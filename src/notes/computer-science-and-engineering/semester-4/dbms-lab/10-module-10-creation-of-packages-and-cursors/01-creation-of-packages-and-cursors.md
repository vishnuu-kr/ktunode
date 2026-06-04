---
title: "Creation of Packages and cursors."
subject: "DBMS LAB"
module: "Module 10: Creation of Packages and cursors."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4f3"
status: "completed"
scrapedAt: "2026-05-20T16:12:14.438Z"
---
## DBMS LAB - Module 10: Creation of Packages and Cursors

**Topic: Creation of Packages and Cursors**

**Learning Outcomes:**

*   Understand the concept of packages in database systems.
*   Learn to create and use packages.
*   Understand the concept of cursors.
*   Learn to declare, open, fetch, and close cursors.
*   Understand the different types of cursors (Implicit and Explicit).
*   Learn to use cursors to process data row by row.
*   Understand the benefits and limitations of using packages and cursors.

### 1. Packages: Organizing PL/SQL Code

**1.1. Key Concepts and Definitions:**

*   **Package:** A schema object that groups logically related PL/SQL types, variables, constants, subprograms (procedures and functions), and cursors. It acts as a container for related code, improving modularity and reusability.

*   **Package Specification:** The public interface of the package. It declares the types, variables, constants, subprograms, and cursors that are accessible to users outside the package. Think of it as the contract.

*   **Package Body:** The implementation details of the package. It defines the logic of the subprograms declared in the package specification. This part is hidden from the user, allowing you to change the implementation without affecting other code that uses the package.

*   **Advantages of Packages:**
    *   **Modularity:**  Breaks down large applications into smaller, manageable units.
    *   **Data Hiding:**  Only the components declared in the specification are visible to the outside world. This protects internal data and logic from accidental modification.
    *   **Code Reusability:**  Subprograms and variables defined in a package can be reused by multiple applications.
    *   **Improved Performance:** When a package subprogram is called for the first time, the entire package is loaded into memory. Subsequent calls to subprograms in the same package are faster because the code is already in memory.
    *   **Easy Maintenance:** Changes to the package body do not require recompilation of dependent objects as long as the specification remains unchanged.
    *   **Namespace Management:** Packages prevent naming conflicts by providing a separate namespace for each package.

**1.2. Creating Packages:**

Packages are created in two parts: the specification and the body.

*   **Creating the Package Specification:**

    ```sql
    CREATE OR REPLACE PACKAGE my_package IS
      -- Public declarations go here (variables, procedures, functions, cursors)

      -- Example:
      g_max_salary NUMBER := 100000;  -- Global variable

      PROCEDURE increment_salary (emp_id NUMBER, amount NUMBER);

      FUNCTION get_employee_name (emp_id NUMBER) RETURN VARCHAR2;

    END my_package;
    /
    ```

    *   `CREATE OR REPLACE PACKAGE`: Creates or replaces an existing package.
    *   `package_name`: The name of the package (e.g., `my_package`).
    *   `IS`: Indicates the start of the specification.
    *   Declarations: Declares the public components of the package (e.g., `g_max_salary`, `increment_salary`, `get_employee_name`).  These are what other code can 'see' and use.
    *   `END package_name;`:  Indicates the end of the specification.
    *   `/`: Executes the SQL command.

*   **Creating the Package Body:**

    ```sql
    CREATE OR REPLACE PACKAGE BODY my_package IS

      -- Implementation of declared procedures and functions go here

      PROCEDURE increment_salary (emp_id NUMBER, amount NUMBER) IS
      BEGIN
        UPDATE employees
        SET salary = salary + amount
        WHERE employee_id = emp_id;
        COMMIT;
      END increment_salary;

      FUNCTION get_employee_name (emp_id NUMBER) RETURN VARCHAR2 IS
        v_name VARCHAR2(100);
      BEGIN
        SELECT first_name || ' ' || last_name
        INTO v_name
        FROM employees
        WHERE employee_id = emp_id;
        RETURN v_name;
      END get_employee_name;

    END my_package;
    /
    ```

    *   `CREATE OR REPLACE PACKAGE BODY`: Creates or replaces an existing package body.
    *   `package_name`: The name of the package (must match the specification).
    *   `IS`: Indicates the start of the body.
    *   Implementations: Provides the code for the procedures and functions declared in the specification.
    *   `END package_name;`: Indicates the end of the body.
    *   `/`: Executes the SQL command.

**1.3. Using Packages:**

To access the components of a package, use the package name followed by a dot (.) and the component name.

```sql
DECLARE
  emp_name VARCHAR2(100);
BEGIN
  my_package.increment_salary(100, 1000); -- Call procedure
  emp_name := my_package.get_employee_name(100); -- Call function
  DBMS_OUTPUT.PUT_LINE('Employee Name: ' || emp_name);
  DBMS_OUTPUT.PUT_LINE('Max Salary: ' || my_package.g_max_salary);
END;
/
```

**1.4. Package Initialization:**

The package body can contain an initialization section that is executed only once, the first time the package is referenced.  This is useful for setting up global variables or performing other initialization tasks.

```sql
CREATE OR REPLACE PACKAGE BODY my_package IS

  -- Implementation of declared procedures and functions go here

  -- Initialization Section
BEGIN
  -- This code is executed only once when the package is first used.
  DBMS_OUTPUT.PUT_LINE('Package my_package initialized.');
END my_package;
/
```

### 2. Cursors: Row-by-Row Processing

**2.1. Key Concepts and Definitions:**

*   **Cursor:** A pointer or handle to a private SQL area that stores information about a SQL statement. It allows you to process the rows returned by a query one at a time.

*   **SQL Area:** A memory area that Oracle uses to process SQL statements.

*   **Implicit Cursor:** Created automatically by Oracle for every DML (Data Manipulation Language) statement (INSERT, UPDATE, DELETE) and SELECT statement that returns only one row. You access information about the implicit cursor through the `SQL` cursor attributes (e.g., `SQL%ROWCOUNT`, `SQL%FOUND`, `SQL%NOTFOUND`).

*   **Explicit Cursor:** Declared and managed by the programmer to process multiple rows returned by a SELECT statement. You have full control over opening, fetching, and closing the cursor.

**2.2. Explicit Cursor Lifecycle:**

An explicit cursor goes through the following steps:

1.  **Declaration:** Declare the cursor, specifying the SQL SELECT statement it will use.
2.  **Opening:** Open the cursor, which executes the associated SELECT statement and populates the active set of rows.
3.  **Fetching:** Fetch data from the active set, one row at a time, into variables.
4.  **Closing:** Close the cursor to release the resources associated with it.

**2.3. Explicit Cursor Syntax:**

```sql
DECLARE
  -- 1. Declare the cursor
  CURSOR emp_cursor IS
    SELECT employee_id, first_name, last_name, salary
    FROM employees
    WHERE department_id = 30;

  -- Declare variables to hold the fetched data
  v_emp_id     employees.employee_id%TYPE;
  v_first_name employees.first_name%TYPE;
  v_last_name  employees.last_name%TYPE;
  v_salary     employees.salary%TYPE;

BEGIN
  -- 2. Open the cursor
  OPEN emp_cursor;

  LOOP
    -- 3. Fetch data from the cursor
    FETCH emp_cursor INTO v_emp_id, v_first_name, v_last_name, v_salary;

    -- Exit the loop when there are no more rows to fetch
    EXIT WHEN emp_cursor%NOTFOUND;

    -- Process the fetched data
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || v_emp_id || ', Name: ' || v_first_name || ' ' || v_last_name || ', Salary: ' || v_salary);
  END LOOP;

  -- 4. Close the cursor
  CLOSE emp_cursor;
END;
/
```

*   `CURSOR cursor_name IS`:  Declares the cursor with the given name.
*   `SELECT ... FROM ... WHERE ...`: The SQL query that the cursor will use.
*   `OPEN cursor_name`: Opens the cursor and executes the query.
*   `FETCH cursor_name INTO variable1, variable2, ...`: Fetches the next row of data from the cursor into the specified variables. The variables must match the data types and order of the columns in the SELECT statement.
*   `EXIT WHEN cursor_name%NOTFOUND`:  A condition to exit the loop when no more rows are found in the cursor.  `cursor_name%NOTFOUND` returns TRUE when the last `FETCH` operation returned no rows.
*   `CLOSE cursor_name`:  Closes the cursor, releasing resources.

**2.4. Cursor Attributes:**

Cursors have attributes that provide information about their state and the results of the most recent operation.

*   `%FOUND`:  TRUE if the last fetch returned a row. FALSE otherwise.
*   `%NOTFOUND`: TRUE if the last fetch did NOT return a row. FALSE otherwise.
*   `%ISOPEN`: TRUE if the cursor is currently open. FALSE otherwise.
*   `%ROWCOUNT`: The number of rows fetched from the cursor so far.

**2.5. Implicit Cursors:**

These are automatically created for DML statements.

```sql
DECLARE
  v_rows_updated NUMBER;
BEGIN
  UPDATE employees
  SET salary = salary * 1.10
  WHERE department_id = 50;

  v_rows_updated := SQL%ROWCOUNT;  -- Get the number of rows updated

  DBMS_OUTPUT.PUT_LINE(v_rows_updated || ' rows updated.');

  IF SQL%FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Update operation was successful on at least one row.');
  END IF;

  COMMIT;
END;
/
```

*   `SQL%ROWCOUNT`: Returns the number of rows affected by the last DML statement.
*   `SQL%FOUND`: Returns TRUE if the last DML statement affected at least one row.
*   `SQL%NOTFOUND`: Returns TRUE if the last DML statement affected no rows.
*   `SQL%ISOPEN`: Always FALSE for implicit cursors, as they are automatically opened and closed.

**2.6. Cursors with Parameters:**

You can declare cursors with parameters to make them more flexible and reusable.  The parameters are passed when you open the cursor.

```sql
DECLARE
  CURSOR emp_cursor (p_dept_id NUMBER) IS
    SELECT employee_id, first_name, last_name, salary
    FROM employees
    WHERE department_id = p_dept_id;

  v_emp_id     employees.employee_id%TYPE;
  v_first_name employees.first_name%TYPE;
  v_last_name  employees.last_name%TYPE;
  v_salary     employees.salary%TYPE;

BEGIN
  OPEN emp_cursor(50); -- Open the cursor for department 50

  LOOP
    FETCH emp_cursor INTO v_emp_id, v_first_name, v_last_name, v_salary;
    EXIT WHEN emp_cursor%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || v_emp_id || ', Name: ' || v_first_name || ' ' || v_last_name || ', Salary: ' || v_salary);
  END LOOP;

  CLOSE emp_cursor;

  OPEN emp_cursor(80); -- Open the cursor for department 80

    LOOP
    FETCH emp_cursor INTO v_emp_id, v_first_name, v_last_name, v_salary;
    EXIT WHEN emp_cursor%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || v_emp_id || ', Name: ' || v_first_name || ' ' || v_last_name || ', Salary: ' || v_salary);
  END LOOP;

  CLOSE emp_cursor;
END;
/
```

**2.7. FOR UPDATE Clause:**

When using a cursor to update data, you can use the `FOR UPDATE` clause to lock the rows that the cursor selects. This prevents other users from modifying the rows while you are processing them.

```sql
DECLARE
  CURSOR emp_cursor IS
    SELECT employee_id, salary
    FROM employees
    WHERE department_id = 60
    FOR UPDATE OF salary; -- Lock the salary column

  v_emp_id   employees.employee_id%TYPE;
  v_salary   employees.salary%TYPE;
  v_new_salary NUMBER;
BEGIN
  OPEN emp_cursor;

  LOOP
    FETCH emp_cursor INTO v_emp_id, v_salary;
    EXIT WHEN emp_cursor%NOTFOUND;

    v_new_salary := v_salary * 1.15;  -- Increase salary by 15%

    UPDATE employees
    SET salary = v_new_salary
    WHERE CURRENT OF emp_cursor; -- Update the current row pointed to by the cursor
  END LOOP;

  CLOSE emp_cursor;
  COMMIT;
END;
/
```

*   `FOR UPDATE OF column1, column2, ...`: Locks the specified columns in the rows selected by the cursor. If you omit the columns, all columns in the table are locked.
*   `WHERE CURRENT OF cursor_name`:  Refers to the row that the cursor currently points to. This is used in the `UPDATE` statement to update the correct row.
*   Important:  Remember to `COMMIT` the changes after updating the rows.  If you don't commit, the locks will remain in place until you rollback or disconnect, potentially blocking other users.

**2.8. Considerations When Using Cursors:**

*   **Performance:**  Using cursors to process data row by row can be slower than using set-based operations (e.g., using a single `UPDATE` statement to update multiple rows).
*   **Resource Usage:**  Cursors consume database resources. Always close cursors when you are finished with them to release these resources.
*   **Locking:**  When using the `FOR UPDATE` clause, be careful to avoid long-running transactions that can block other users.
*   **Alternatives:** Consider alternatives to cursors, such as bulk operations (e.g., `FORALL` statement) or pipelined table functions, for better performance when processing large amounts of data.

### 3. Practice Questions and Exercises:

**Question 1:**

Write a package named `employee_management` with the following specifications:

*   A global variable `max_employees` of type `NUMBER` initialized to 100.
*   A procedure `add_employee` that takes employee details (employee_id, first_name, last_name, salary, department_id) as input and inserts a new employee record into the `employees` table.
*   A function `get_employee_count` that returns the total number of employees in the `employees` table.

**Answer 1:**

```sql
-- Package Specification
CREATE OR REPLACE PACKAGE employee_management IS
  max_employees NUMBER := 100;

  PROCEDURE add_employee (
    p_employee_id NUMBER,
    p_first_name VARCHAR2,
    p_last_name VARCHAR2,
    p_salary NUMBER,
    p_department_id NUMBER
  );

  FUNCTION get_employee_count RETURN NUMBER;
END employee_management;
/

-- Package Body
CREATE OR REPLACE PACKAGE BODY employee_management IS

  PROCEDURE add_employee (
    p_employee_id NUMBER,
    p_first_name VARCHAR2,
    p_last_name VARCHAR2,
    p_salary NUMBER,
    p_department_id NUMBER
  ) IS
  BEGIN
    INSERT INTO employees (employee_id, first_name, last_name, salary, department_id)
    VALUES (p_employee_id, p_first_name, p_last_name, p_salary, p_department_id);
    COMMIT;
  END add_employee;

  FUNCTION get_employee_count RETURN NUMBER IS
    v_count NUMBER;
  BEGIN
    SELECT COUNT(*) INTO v_count FROM employees;
    RETURN v_count;
  END get_employee_count;

END employee_management;
/
```

**Question 2:**

Write a PL/SQL block that uses an explicit cursor to retrieve the employee_id, first_name, and salary for all employees in department 50. Display the results using `DBMS_OUTPUT.PUT_LINE`.

**Answer 2:**

```sql
DECLARE
  CURSOR emp_cursor IS
    SELECT employee_id, first_name, salary
    FROM employees
    WHERE department_id = 50;

  v_emp_id     employees.employee_id%TYPE;
  v_first_name employees.first_name%TYPE;
  v_salary     employees.salary%TYPE;

BEGIN
  OPEN emp_cursor;

  LOOP
    FETCH emp_cursor INTO v_emp_id, v_first_name, v_salary;
    EXIT WHEN emp_cursor%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || v_emp_id || ', Name: ' || v_first_name || ', Salary: ' || v_salary);
  END LOOP;

  CLOSE emp_cursor;
END;
/
```

**Question 3:**

Modify the PL/SQL block from Question 2 to use a cursor with a parameter to retrieve the employee details for a specified department ID.  Get the department ID from the user via substitution variable.

**Answer 3:**

```sql
DECLARE
  CURSOR emp_cursor (p_dept_id NUMBER) IS
    SELECT employee_id, first_name, salary
    FROM employees
    WHERE department_id = p_dept_id;

  v_emp_id     employees.employee_id%TYPE;
  v_first_name employees.first_name%TYPE;
  v_salary     employees.salary%TYPE;

BEGIN
  OPEN emp_cursor(&department_id); -- Use a substitution variable for department ID

  LOOP
    FETCH emp_cursor INTO v_emp_id, v_first_name, v_salary;
    EXIT WHEN emp_cursor%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || v_emp_id || ', Name: ' || v_first_name || ', Salary: ' || v_salary);
  END LOOP;

  CLOSE emp_cursor;
END;
/
```

**Question 4:**

Write a PL/SQL block that uses an explicit cursor with the `FOR UPDATE` clause to increase the salary of all employees in department 80 by 5%.  Display the number of rows updated.

**Answer 4:**

```sql
DECLARE
  CURSOR emp_cursor IS
    SELECT employee_id, salary
    FROM employees
    WHERE department_id = 80
    FOR UPDATE OF salary;

  v_emp_id   employees.employee_id%TYPE;
  v_salary   employees.salary%TYPE;
  v_new_salary NUMBER;
  v_rows_updated NUMBER := 0;

BEGIN
  OPEN emp_cursor;

  LOOP
    FETCH emp_cursor INTO v_emp_id, v_salary;
    EXIT WHEN emp_cursor%NOTFOUND;

    v_new_salary := v_salary * 1.05;

    UPDATE employees
    SET salary = v_new_salary
    WHERE CURRENT OF emp_cursor;

    v_rows_updated := v_rows_updated + 1;

  END LOOP;

  CLOSE emp_cursor;
  COMMIT;

  DBMS_OUTPUT.PUT_LINE(v_rows_updated || ' rows updated.');

END;
/
```

### 4. Important Points to Remember:

*   Always compile the package specification before the package body.
*   Use packages to group related code and improve modularity.
*   Always close explicit cursors to release resources.
*   Consider using cursor attributes to check the status of cursor operations.
*   Use the `FOR UPDATE` clause carefully to avoid locking issues.
*   Understand the performance implications of using cursors and consider alternatives when processing large datasets.
*   Document your packages and cursors to make them easier to understand and maintain.
