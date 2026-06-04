---
title: "Database Design Theory & Normalization  - Functional Dependencies - Basic definition; Normalization- First, Second, and Third normal forms."
subject: "DATABASE MANAGEMENT SYSTEMS"
module: "Module 3: Database Design Theory & Normalization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af76"
status: "completed"
scrapedAt: "2026-05-20T16:12:02.054Z"
---
# DATABASE MANAGEMENT SYSTEMS - Module 3: Database Design Theory & Normalization
## Topic: Database Design Theory & Normalization - Functional Dependencies & Normalization (1NF, 2NF, 3NF)

**Learning Outcomes:**

*   Understand the basic definition of functional dependency.
*   Define and apply the concepts of First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF).
*   Identify violations of 1NF, 2NF, and 3NF.
*   Normalize relations to 1NF, 2NF, and 3NF.
*   Understand the importance of normalization in database design.

---

### I. Functional Dependencies (FDs)

*   **Basic Definition:** A functional dependency (FD) is a constraint between two sets of attributes in a relation.  Specifically, a functional dependency X -> Y holds on a relation R if for every two tuples t1 and t2 in R, if t1[X] = t2[X] (i.e., the values of attribute(s) X are the same), then t1[Y] = t2[Y] (i.e., the values of attribute(s) Y are also the same).

*   **Notation:** X -> Y (Read as "X functionally determines Y" or "Y is functionally dependent on X").  X and Y are sets of attributes.

*   **Explanation:**
    *   X is the determinant.
    *   Y is the dependent.
    *   If you know the value of X, you can uniquely determine the value of Y.
    *   FDs are semantic constraints derived from the meaning of the attributes and application domain.

*   **Example:**
    Consider a relation `Employee (EmpID, EmpName, DeptID, DeptName, Salary)`.

    *   `EmpID -> EmpName` (EmpID uniquely determines EmpName) -  A valid FD.
    *   `DeptID -> DeptName` (DeptID uniquely determines DeptName) - A valid FD.
    *   `EmpID -> Salary` (EmpID uniquely determines Salary) - A valid FD.
    *   `EmpName -> EmpID` - (EmpName uniquely determines EmpID).  This FD *might* be valid, depending on the uniqueness of EmpName in the application. If two employees share the same name, this FD is *not* valid. This shows FD is based on real-world application.

*   **Trivial Functional Dependency:** A functional dependency X -> Y is trivial if Y is a subset of X.
    *   Example: `EmpID, EmpName -> EmpID` is trivial because `EmpID` is part of the left-hand side.  Trivial FDs always hold.

*   **Non-Trivial Functional Dependency:** A functional dependency X -> Y is non-trivial if Y is not a subset of X.
    *   Example: `EmpID -> EmpName` is non-trivial.

*   **Completely Non-Trivial Functional Dependency:** A functional dependency X -> Y is completely non-trivial if X and Y have no attributes in common.
    *   Example: `EmpID -> EmpName` is completely non-trivial.

*   **Importance of FDs:** FDs are crucial for normalization. They help identify redundancy and anomalies in the database design.

---

### II. Normalization

Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing databases into two or more tables and defining relationships between the tables. The goal is to isolate data so that amendments to an attribute can be made in one place only.

*   **Goals of Normalization:**
    *   Minimize data redundancy.
    *   Reduce or eliminate data anomalies (insertion, update, deletion anomalies).
    *   Simplify data management.
    *   Improve data integrity.

*   **Normal Forms:** Normal forms are a series of guidelines that help ensure a good database design.  Each normal form builds upon the previous one. We will focus on First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF).  Higher normal forms (BCNF, 4NF, 5NF) exist but are less commonly encountered in introductory contexts.

#### A. First Normal Form (1NF)

*   **Definition:** A relation is in 1NF if and only if all attribute values are atomic. This means each attribute should contain only a single value, not a set or list of values.
*   **Problem addressed:** Eliminates repeating groups of attributes.
*   **Violation Example:**

    Consider a `Student` table: `Student (StudentID, StudentName, Courses)`.
    If the `Courses` attribute can hold multiple course values (e.g., "CS101, MATH201"), then the table is *not* in 1NF.

*   **Solution (Normalization to 1NF):** Decompose the table to remove the repeating group.  Create a new table or modify the existing one:

    **Option 1: Create a new table:**

    *   `Student (StudentID, StudentName)`
    *   `StudentCourse (StudentID, Course)`

    **Option 2:  Modify existing table:**

    *   `Student (StudentID, StudentName, Course)`  (This could introduce redundancy, but it satisfies 1NF).

*   **Example Table and Normalization:**

    **Original Table (Not in 1NF):**

    | StudentID | StudentName | Courses        |
    | --------- | ----------- | -------------- |
    | 101       | Alice       | CS101, MATH101 |
    | 102       | Bob         | ENG201         |

    **Table in 1NF (Using Option 2):**

    | StudentID | StudentName | Course   |
    | --------- | ----------- | -------- |
    | 101       | Alice       | CS101    |
    | 101       | Alice       | MATH101  |
    | 102       | Bob         | ENG201   |

*   **Key Takeaway:** 1NF ensures that each cell in the table contains only one value.

#### B. Second Normal Form (2NF)

*   **Definition:** A relation is in 2NF if and only if it is in 1NF and every non-key attribute is fully functionally dependent on the *entire* primary key.
*   **Problem addressed:** Eliminates redundancy caused by partial dependencies.  A partial dependency exists when a non-key attribute is dependent on only part of the primary key (when the primary key is a composite key).
*   **Conditions:**
    1.  Must be in 1NF.
    2.  No partial dependencies.
*   **Violation Example:**

    Consider a `StudentCourse` table: `StudentCourse (StudentID, CourseID, StudentName, CourseName, Instructor)`.  Assume `StudentID` and `CourseID` form the composite primary key.

    *   `StudentID, CourseID -> Instructor` (The instructor teaching the course is dependent on the combination of student and course)
    *   `StudentID -> StudentName` (The student's name is dependent only on the student ID)  This is a *partial dependency*.
    *   `CourseID -> CourseName` (The course's name is dependent only on the course ID) This is a *partial dependency*.

*   **Solution (Normalization to 2NF):** Decompose the table to eliminate partial dependencies.

    1.  `StudentCourse (StudentID, CourseID, Instructor)` (Primary Key: StudentID, CourseID)
    2.  `Student (StudentID, StudentName)` (Primary Key: StudentID)
    3.  `Course (CourseID, CourseName)` (Primary Key: CourseID)

*   **Example Table and Normalization:**

    **Original Table (Not in 2NF):**

    | StudentID | CourseID | StudentName | CourseName | Instructor |
    | --------- | -------- | ----------- | ---------- | ---------- |
    | 101       | CS101    | Alice       | Intro to CS| Prof. Smith|
    | 101       | MATH101  | Alice       | Calculus   | Prof. Jones|
    | 102       | CS101    | Bob         | Intro to CS| Prof. Smith|

    **Tables in 2NF:**

    *   **StudentCourse (StudentID, CourseID, Instructor):**

        | StudentID | CourseID | Instructor  |
        | --------- | -------- | ----------- |
        | 101       | CS101    | Prof. Smith |
        | 101       | MATH101  | Prof. Jones |
        | 102       | CS101    | Prof. Smith |

    *   **Student (StudentID, StudentName):**

        | StudentID | StudentName |
        | --------- | ----------- |
        | 101       | Alice       |
        | 102       | Bob         |

    *   **Course (CourseID, CourseName):**

        | CourseID | CourseName |
        | -------- | ---------- |
        | CS101    | Intro to CS|
        | MATH101  | Calculus   |

*   **Key Takeaway:** 2NF eliminates redundancy arising from attributes being dependent on only *part* of the primary key.

#### C. Third Normal Form (3NF)

*   **Definition:** A relation is in 3NF if and only if it is in 2NF and no non-key attribute is transitively dependent on the primary key.
*   **Problem addressed:** Eliminates redundancy caused by transitive dependencies. A transitive dependency exists when a non-key attribute depends on another non-key attribute, which in turn depends on the primary key.
*   **Conditions:**
    1.  Must be in 2NF.
    2.  No transitive dependencies.
*   **Violation Example:**

    Consider an `Employee` table: `Employee (EmpID, EmpName, DeptID, DeptName, Salary)`.  Assume `EmpID` is the primary key.

    *   `EmpID -> EmpName` (Employee ID determines Employee Name)
    *   `EmpID -> DeptID` (Employee ID determines Department ID)
    *   `DeptID -> DeptName` (Department ID determines Department Name)  This is a transitive dependency: `EmpID -> DeptID -> DeptName`.  `DeptName` is transitively dependent on `EmpID` through `DeptID`.

*   **Solution (Normalization to 3NF):** Decompose the table to eliminate transitive dependencies.

    1.  `Employee (EmpID, EmpName, DeptID, Salary)` (Primary Key: EmpID)
    2.  `Department (DeptID, DeptName)` (Primary Key: DeptID)

*   **Example Table and Normalization:**

    **Original Table (Not in 3NF):**

    | EmpID | EmpName | DeptID | DeptName     | Salary |
    | ----- | ------- | ------ | ------------ | ------ |
    | 101   | Alice   | D101   | Sales        | 60000  |
    | 102   | Bob     | D102   | Marketing    | 70000  |
    | 103   | Carol   | D101   | Sales        | 65000  |

    **Tables in 3NF:**

    *   **Employee (EmpID, EmpName, DeptID, Salary):**

        | EmpID | EmpName | DeptID | Salary |
        | ----- | ------- | ------ | ------ |
        | 101   | Alice   | D101   | 60000  |
        | 102   | Bob     | D102   | 70000  |
        | 103   | Carol   | D101   | 65000  |

    *   **Department (DeptID, DeptName):**

        | DeptID | DeptName     |
        | ------ | ------------ |
        | D101   | Sales        |
        | D102   | Marketing    |

*   **Key Takeaway:** 3NF eliminates redundancy arising from transitive dependencies, ensuring that non-key attributes depend only on the primary key and not on other non-key attributes.

---

### III. Importance of Normalization

*   **Reduced Redundancy:** Data is stored only once, minimizing storage space and preventing inconsistencies.
*   **Improved Data Integrity:**  Changes need to be made in only one place, ensuring that data remains consistent.
*   **Easier Maintenance:**  Modifying the database structure or data becomes simpler and less error-prone.
*   **Better Query Performance:**  Well-structured databases can be queried more efficiently.

---

### IV. Practice Questions/Exercises

1.  **Consider the following relation: `Order (OrderID, CustomerID, CustomerName, CustomerAddress, OrderDate, ProductID, ProductName, Quantity, Price)`.**

    a.  Identify the primary key.
    b.  List any functional dependencies that you believe exist in the relation.
    c.  Is this relation in 1NF?  If not, how would you normalize it?
    d.  Assuming the relation is in 1NF (or after you've normalized it to 1NF), is it in 2NF? If not, how would you normalize it?
    e.  Assuming the relation is in 2NF (or after you've normalized it to 2NF), is it in 3NF? If not, how would you normalize it?

2.  **Given the relation `Project (ProjectID, EmployeeID, EmployeeName, ProjectName, HourlyRate)`.  We know the following:**

    *   `ProjectID` is the primary key.
    *   `ProjectID -> ProjectName`
    *   `EmployeeID -> EmployeeName, HourlyRate`

    Is this relation in 2NF? Is it in 3NF?  Justify your answer and, if not in 3NF, normalize it to 3NF.

3.  **Consider a relation `Book (ISBN, Title, AuthorID, AuthorName, PublisherID, PublisherName)`.  Given the following dependencies:**
    *   `ISBN -> Title, AuthorID, PublisherID`
    *   `AuthorID -> AuthorName`
    *   `PublisherID -> PublisherName`

    What normal form is this relation in?  Normalize it to 3NF.

---

### V. Answers to Practice Questions/Exercises

1.  **a. Primary Key:** `OrderID, ProductID` (composite key) - assuming that each order can contain multiple products. If each order contains a single product, then `OrderID` can be the primary key. This assumption has a big impact on the answer.

    **b. Functional Dependencies:**

    *   `OrderID, ProductID -> Quantity`
    *   `OrderID -> CustomerID, OrderDate`
    *   `CustomerID -> CustomerName, CustomerAddress`
    *   `ProductID -> ProductName, Price`

    **c. Is it in 1NF?**  Assuming the data model stores the entire address in a single attribute, it's in 1NF. If address is broken into multiple attributes, the answer remains in 1NF.

    **d. Is it in 2NF?** No, it is not in 2NF.  There are partial dependencies:

    *   `OrderID -> CustomerID, CustomerName, CustomerAddress, OrderDate` (CustomerID, CustomerName, CustomerAddress, and OrderDate depend only on OrderID, part of the primary key).
    *   `ProductID -> ProductName, Price` (ProductName and Price depend only on ProductID, part of the primary key).

    **Normalization to 2NF:**

    1.  `OrderProduct (OrderID, ProductID, Quantity)` (Primary Key: OrderID, ProductID)
    2.  `Order (OrderID, CustomerID, OrderDate)` (Primary Key: OrderID)
    3.  `Customer (CustomerID, CustomerName, CustomerAddress)` (Primary Key: CustomerID)
    4.  `Product (ProductID, ProductName, Price)` (Primary Key: ProductID)

    **e. Is it in 3NF?** Yes, the relations are now in 3NF.  There are no transitive dependencies.

2.  *   **2NF:** No.  There is a partial dependency: `EmployeeID -> EmployeeName, HourlyRate` because `EmployeeID` is part of no key and it functionally defines `EmployeeName`, `HourlyRate`.
    *   **3NF:** No.  Since it's not in 2NF, it can't be in 3NF.

    **Normalization to 3NF:**

    1.  `ProjectEmployee (ProjectID, EmployeeID)` (Primary Key: ProjectID, EmployeeID)
    2.  `Project (ProjectID, ProjectName)` (Primary Key: ProjectID)
    3.  `Employee (EmployeeID, EmployeeName, HourlyRate)` (Primary Key: EmployeeID)

3.  *   **Normal Form:** The relation is in 1NF. It is *not* in 2NF or 3NF, as it contains transitive dependencies.

    **Normalization to 3NF:**

    1.  `Book (ISBN, Title, AuthorID, PublisherID)` (Primary Key: ISBN)
    2.  `Author (AuthorID, AuthorName)` (Primary Key: AuthorID)
    3.  `Publisher (PublisherID, PublisherName)` (Primary Key: PublisherID)

---

### VI. Important Points to Remember

*   Functional dependencies are the foundation of normalization.
*   Normalization is an iterative process; you move from one normal form to the next.
*   Higher normal forms generally result in better data integrity but can sometimes impact query performance (more joins).  A balance must be struck based on the specific application requirements.
*   Always clearly identify the primary key and all functional dependencies before attempting normalization.
*   Consider real-world constraints and the meaning of attributes when determining functional dependencies. They are application-specific.
