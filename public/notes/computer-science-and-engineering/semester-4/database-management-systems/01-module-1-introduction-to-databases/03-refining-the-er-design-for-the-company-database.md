---
title: "Refining the ER Design for the COMPANY Database."
subject: "DATABASE MANAGEMENT SYSTEMS"
module: "Module 1: Introduction to Databases :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af71"
status: "completed"
scrapedAt: "2026-05-20T16:11:59.821Z"
---
## DATABASE MANAGEMENT SYSTEMS - Module 1: Introduction to Databases - Refining the ER Design for the COMPANY Database

**Learning Outcomes:**

*   Understand the importance of refining an ER design.
*   Identify common issues in ER designs.
*   Apply techniques for transforming ER diagrams to resolve design flaws.
*   Implement these techniques in the context of the COMPANY database ER diagram.
*   Understand the concept of weak entity sets and how they relate to the refined design.

**1. Introduction: Why Refine an ER Design?**

*   **Initial Designs are Rarely Perfect:**  ER diagrams are often developed iteratively.  The first attempt at an ER diagram is usually a good starting point, but further analysis and refinement are essential.
*   **Ensuring Data Integrity:**  A well-refined ER design helps maintain data integrity by minimizing redundancy, preventing anomalies, and enforcing business rules.
*   **Improving Query Performance:** A well-structured database is more efficient to query. Good design contributes to effective indexing and efficient query processing.
*   **Facilitating Future Modifications:**  A flexible and well-designed database is easier to modify and extend to accommodate new requirements.
*   **Avoiding Data Anomalies:** Redundancy and poor design can lead to insertion, deletion, and update anomalies. Refinement helps prevent these.

**2. Common Issues in ER Designs**

*   **Redundancy:** Storing the same information in multiple places.  This leads to inconsistencies and increased storage space.
    *   **Example:** Storing employee address both in the `EMPLOYEE` entity and in each individual project they work on.

*   **Incomplete Attributes:**  Missing critical attributes that are necessary to represent the data effectively.
    *   **Example:**  The `EMPLOYEE` entity lacks an attribute to store the employee's date of birth.

*   **Improper Placement of Attributes:**  Attributes assigned to the wrong entity or relationship.
    *   **Example:** Storing the supervisor's name in the `PROJECT` entity instead of linking it to the `EMPLOYEE` entity.

*   **Overly Complex Relationships:**  Relationships that are too convoluted or difficult to understand.
    *   **Example:** Multiple relationships between `EMPLOYEE` and `PROJECT` that are not clearly defined or serve different purposes.

*   **Incorrect Cardinality Ratios:**  Misrepresenting the real-world relationships between entities (one-to-one, one-to-many, many-to-many).
    *   **Example:** Defining the relationship between `DEPARTMENT` and `EMPLOYEE` as one-to-one when a department can have multiple employees.

*   **Lack of Proper Keys:**  Failing to define suitable primary keys to uniquely identify each entity instance.
    *   **Example:** The `PROJECT` entity lacking a unique project number as a primary key.

*   **Weak Entity Sets Handled Incorrectly:**  Not properly identifying or representing weak entity sets and their dependencies on identifying entities.
    *   **Example:** Not recognizing that dependents are uniquely identified only in relation to an employee.

**3. Techniques for Transforming ER Diagrams**

*   **Decomposition/Normalization:** Dividing entities with too many attributes into smaller, more manageable entities.  This reduces redundancy and improves data integrity.  This relates to database normalization (1NF, 2NF, 3NF, etc.), which you will cover in later modules.
    *   **Example:**  Splitting the `EMPLOYEE` entity into `EMPLOYEE` (personal info) and `EMPLOYEE_SALARY` (salary information).  This is done to separate stable attributes from frequently changing ones, or to address functional dependencies.

*   **Introducing New Entities:** Creating new entities to represent relationships between existing entities or to represent complex concepts.
    *   **Example:** Creating a `PROJECT_ASSIGNMENT` entity to represent the many-to-many relationship between `EMPLOYEE` and `PROJECT`, and to store assignment-specific information like hours worked.  This is often necessary when the relationship itself has attributes.

*   **Removing Redundant Relationships or Attributes:** Eliminating unnecessary relationships or attributes that can be derived from other data.
    *   **Example:** Removing the `Project_Location` attribute from the `EMPLOYEE` entity if the location can be derived from the project they are working on.

*   **Adjusting Cardinality Ratios:**  Correcting the cardinality ratios to accurately reflect the real-world relationships.  Use the min-max notation (e.g., (0,N), (1,1)) to represent participation constraints.
    *   **Example:** Changing a one-to-one relationship between `DEPARTMENT` and `MANAGER` to a one-to-many (a department can have only one manager, but an employee can manage 0 or 1 departments).

*   **Identifying and Handling Weak Entity Sets:** Correctly representing weak entity sets, including their partial key and identifying relationship.  Remember that a weak entity cannot exist without its identifying entity.
    *   **Example:** `DEPENDENT` is a weak entity because a dependent cannot exist without an associated `EMPLOYEE`. The `DEPENDENT` entity would typically have attributes like `Dependent_Name`, `Relationship`, and `Birthdate`, with the primary key being a composite key formed by the `Employee_SSN` (from the related employee) and `Dependent_Name`.

*   **Generalization and Specialization (EER - Enhanced ER Model):**  Introducing superclasses and subclasses to represent hierarchical relationships between entities. This will be covered in later modules, but understanding the concept helps with design clarity.
    *   **Example:**  If you have different types of employees (e.g., `SALARIED_EMPLOYEE`, `HOURLY_EMPLOYEE`), you can create a superclass `EMPLOYEE` with common attributes and subclasses with specific attributes.

**4. Refining the COMPANY Database ER Diagram (Examples)**

Let's consider some potential refinements to a basic COMPANY database ER diagram:

*   **Scenario:** Initially, the `EMPLOYEE` entity includes attributes like `Employee_SSN`, `Employee_Name`, `Employee_Address`, `Employee_Salary`, and `Project_Number`. `Project_Number` directly in the `Employee` entity means one employee can work on only one project. Also, the `EMPLOYEE` entity contains employee address and name, potentially causing redundancy if these details need to be used elsewhere.

*   **Refinement 1: Many-to-Many Relationship between EMPLOYEE and PROJECT**

    *   **Issue:** An employee can work on multiple projects, and a project can have multiple employees.  The initial design only allows an employee to work on one project.
    *   **Solution:** Introduce a new entity called `WORKS_ON`. This entity will have attributes `Employee_SSN`, `Project_Number`, and `Hours` (representing the number of hours the employee worked on the project). `Employee_SSN` and `Project_Number` will form a composite primary key for `WORKS_ON`.
    *   **Diagram Change:**
        *   Remove `Project_Number` from the `EMPLOYEE` entity.
        *   Create a new entity `WORKS_ON`.
        *   Establish relationships:
            *   `EMPLOYEE` (1:N) `WORKS_ON`
            *   `PROJECT` (1:N) `WORKS_ON`

*   **Refinement 2: Address Decomposition**

    *   **Issue:** The `EMPLOYEE` entity contains a compound attribute `Employee_Address`.
    *   **Solution:** Decompose the `Employee_Address` attribute into individual attributes like `Street`, `City`, `State`, and `Zip`. This provides better data granularity and allows for more specific queries (e.g., finding all employees in a specific city).

*   **Refinement 3: Introducing the DEPENDENT Entity (Weak Entity Set)**

    *   **Issue:**  The company needs to store information about employee dependents (e.g., name, relationship, birthdate). Dependents are uniquely identified only in the context of the employee.
    *   **Solution:** Create a `DEPENDENT` entity.
        *   `DEPENDENT` has attributes: `Dependent_Name` (partial key), `Relationship`, `Birthdate`, `Sex`.
        *   Establish an identifying relationship between `EMPLOYEE` and `DEPENDENT` (e.g., `HAS_DEPENDENT`).
        *   The primary key of `DEPENDENT` is a composite key: `Employee_SSN` (inherited from `EMPLOYEE`) + `Dependent_Name`.
    *   **Diagram Change:**
        *   Add the `DEPENDENT` entity.
        *   Add the `HAS_DEPENDENT` identifying relationship (represented with a double line).

*   **Refinement 4:  Mandatory Participation of Department in Employment**

    *   **Issue:** The initial design may not enforce that every employee *must* belong to a department.
    *   **Solution:**  Modify the cardinality ratio of the `EMPLOYEE` to `DEPARTMENT` relationship. Specifically, specify that an employee must belong to one and only one department and that the department can have 0 or more employees. (1,1): (0,N).

**5. Weak Entity Sets**

*   **Definition:** An entity set that does not have a primary key of its own and is existence-dependent on another entity set (the *identifying entity set*).
*   **Identifying Relationship:** The relationship that links a weak entity set to its identifying entity set.  This relationship is represented with a double diamond in ER diagrams.
*   **Partial Key (Discriminator):** An attribute or set of attributes that uniquely identifies weak entity instances within the context of the identifying entity. The partial key, combined with the primary key of the identifying entity, forms the primary key of the weak entity.
*   **Example:** The `DEPENDENT` entity discussed earlier is a classic example of a weak entity set.  It depends on the `EMPLOYEE` entity for its existence and identification.

**6. Important Points to Remember**

*   **Iterative Process:** ER design is an iterative process.  Don't expect to get it perfect on the first try.
*   **Understand the Requirements:**  Thoroughly understand the business requirements before starting the design. Talk to users and stakeholders.
*   **Focus on Data Integrity:**  Strive to create a design that minimizes redundancy and ensures data integrity.
*   **Consider Performance:**  Think about how the design will impact query performance.
*   **Document Everything:**  Document all design decisions and the rationale behind them.
*   **Naming Conventions:**  Use clear and consistent naming conventions for entities, attributes, and relationships.
*   **Use an ER Diagramming Tool:** Employ tools like Lucidchart, draw.io, or others specifically designed for creating and managing ER diagrams.
*   **Normalization:** Understand the principles of database normalization as it directly relates to good ER design.  This will be covered in more detail later.

**7. Practice Questions/Exercises**

1.  **Identify the issues:** In the COMPANY database, an `EMPLOYEE` entity has attributes `Employee_ID`, `Employee_Name`, `Street`, `City`, `State`, `Zip`, `Department_Name`, and `Manager_Name`. What are the potential issues with this design?

    *   **Answer:**
        *   **Redundancy:** Department and manager names are associated with each employee, which can lead to redundancy if multiple employees belong to the same department and have the same manager.  Changes to department/manager names must be updated in multiple employee records.
        *   **Atomicity:** The address is not atomic; the Street, City, State, and Zip should be individual attributes.
        *   **Placement:** The `Department_Name` and `Manager_Name` should not be attributes within the `EMPLOYEE` entity; they should be related through relationships with `DEPARTMENT` and `EMPLOYEE` (for the manager relationship).

2.  **Refine the ER Diagram:**  Given the following simplified ER diagram: `STUDENT` (StudentID, Name, Major, Advisor) and `COURSE` (CourseID, Title, Credits).  Students are advised by professors (represented by 'Advisor' which is professor name). Refine this ER diagram to address the following issues:

    *   Students can take multiple courses.
    *   Each course can have multiple students.
    *   You want to store the grade a student receives for each course.
    *   The Advisor is a professor. Professors have other attributes (ProfessorID, Department).

    *   **Answer:**
        *   Remove `Advisor` attribute from `STUDENT`.
        *   Create a `PROFESSOR` entity with attributes `ProfessorID`, `Name`, `Department`.
        *   Establish a one-to-many relationship `ADVISES` from `PROFESSOR` to `STUDENT`.
        *   Create an intersection/associative entity called `ENROLLMENT` with attributes `StudentID`, `CourseID`, and `Grade`. `StudentID` and `CourseID` will be the composite primary key of `ENROLLMENT`.
        *   Establish relationships:
            *   `STUDENT` (1:N) `ENROLLMENT`
            *   `COURSE` (1:N) `ENROLLMENT`

3.  **Weak Entity Identification:**  A bank has `ACCOUNT` entities (Account_Number, Balance) and needs to store transaction history.  Each transaction has a `Transaction_ID`, `Date`, and `Amount`. Transactions are only relevant in the context of an account. Is `TRANSACTION` a weak entity set? Explain why or why not. If so, what is the identifying entity? What is the partial key?

    *   **Answer:** Yes, `TRANSACTION` is a weak entity set.
        *   **Reason:** Transactions are only meaningful within the context of an account. A transaction without an associated account is not valid.
        *   **Identifying Entity:** `ACCOUNT`
        *   **Partial Key:** `Transaction_ID` (assumes that `Transaction_ID` is unique *within the context of an account* but not necessarily across all accounts).

4.  **Cardinality Refinement:** Consider a scenario where you are modelling a University Database. You have two entities - `PROFESSOR` and `COURSE`. A professor *may* teach several courses. Every course *must* be taught by one professor. What cardinality constraints would you place on the relationship `TEACHES` between PROFESSOR and COURSE? Use min-max notation.

    *   **Answer:**

    *   PROFESSOR (0,N) - TEACHES - (1,1) COURSE

        *   Explanation: A professor can teach zero or more courses, and a course must be taught by one, and only one, professor.

These notes provide a comprehensive overview of refining ER designs, especially within the context of the COMPANY database example. By understanding these concepts and practicing with examples, you'll be well-equipped to create effective and robust database designs. Remember to always consider the specific requirements and constraints of your application. Good luck!
