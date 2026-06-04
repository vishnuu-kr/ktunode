---
title: "Multidimensional data model- Warehouse schema"
subject: "DATA MINING"
module: "Module 1: Data Mining  "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b898"
status: "completed"
scrapedAt: "2026-05-20T16:44:55.424Z"
---
# DATA MINING - MODULE 1: DATA MINING - MULTIDIMENSIONAL DATA MODEL - WAREHOUSE SCHEMA

**Learning Outcomes:**

*   Understand the concept of a multidimensional data model.
*   Describe different warehouse schemas (star, snowflake, and fact constellation).
*   Identify the components of each schema (facts, dimensions, attributes).
*   Compare and contrast the advantages and disadvantages of each schema.
*   Apply the appropriate schema for different data warehousing scenarios.

## 1. Introduction to Multidimensional Data Model

*   **Definition:** A multidimensional data model organizes data in a way that allows for efficient querying and analysis based on multiple dimensions. It views data as residing in an n-dimensional space, where each dimension represents a different aspect of the data.

*   **Key Concepts:**
    *   **Fact:** A numerical measurement or metric that represents an event or observation. Examples include sales amount, quantity sold, profit, number of visits.
    *   **Dimension:** A descriptive attribute or category that provides context for the facts. Examples include time, product, location, customer.
    *   **Attributes:** Characteristics or properties of a dimension. For example, the *Time* dimension may have attributes like *Year*, *Quarter*, *Month*, *Day*.  The *Product* dimension might have *ProductID*, *ProductName*, *Category*, *Brand*.
    *   **Measures:** Quantitative values that are analyzed in a data warehouse.  Facts often serve as measures.
    *   **Cubes:** The multidimensional representation of data; it's a logical way to visualize the data with facts surrounded by dimensions.

*   **Benefits of Multidimensional Data Model:**
    *   **Improved Query Performance:** Optimized for analytical queries (OLAP).
    *   **Easy Data Analysis:** Simplified data navigation and exploration.
    *   **Enhanced Decision Making:** Facilitates business intelligence and reporting.
    *   **Data Consolidation:** Integrates data from disparate sources into a unified view.

## 2. Data Warehouse Schema Types

Data warehouse schemas define the logical structure of the data warehouse, describing how facts and dimensions are organized. The most common types are:

### 2.1 Star Schema

*   **Description:**  A central fact table connected to multiple dimension tables.  It resembles a star, hence the name.  It's the simplest and most common schema.

*   **Components:**
    *   **Fact Table:** Contains the measures/facts and foreign keys referencing dimension tables. Often has a composite key formed by combining the foreign keys.
    *   **Dimension Tables:** Contain descriptive attributes about the dimensions. Each dimension table has a primary key and attributes describing the dimension.  Dimension tables are usually denormalized.

*   **Example:**

    Imagine a sales data warehouse.

    *   **Fact Table:** `Sales` (containing `SaleID`, `TimeID`, `ProductID`, `LocationID`, `CustomerID`, `Quantity`, `SalesAmount`)
    *   **Dimension Tables:**
        *   `Time` (containing `TimeID`, `Year`, `Quarter`, `Month`, `Day`)
        *   `Product` (containing `ProductID`, `ProductName`, `Category`, `Brand`)
        *   `Location` (containing `LocationID`, `City`, `State`, `Country`)
        *   `Customer` (containing `CustomerID`, `CustomerName`, `City`, `AgeGroup`)

*   **Advantages:**
    *   **Simple to understand and implement.**
    *   **Fast query performance** due to denormalized dimension tables (fewer joins needed).

*   **Disadvantages:**
    *   **Data redundancy** in dimension tables due to denormalization.
    *   **Limited flexibility** for complex analysis if dimensions are not granular enough.

### 2.2 Snowflake Schema

*   **Description:**  An extension of the star schema where dimension tables are further normalized into multiple related tables.  It resembles a snowflake.

*   **Components:**
    *   **Fact Table:** Similar to the star schema.
    *   **Dimension Tables:** Normalized into smaller tables. This means that attributes related to a dimension are separated into multiple tables instead of being stored in a single, denormalized table.

*   **Example (Continuing the Sales Data Warehouse):**

    The `Product` dimension table from the star schema might be normalized into two tables:

    *   `Product` (containing `ProductID`, `ProductName`, `CategoryID`)
    *   `Category` (containing `CategoryID`, `CategoryName`)

    Now, the `Sales` fact table would contain `ProductID` and the `Product` table would contain `CategoryID`.

*   **Advantages:**
    *   **Reduced data redundancy** compared to the star schema.
    *   **Improved data integrity** due to normalization.
    *   **Easier to maintain** and update dimension tables.

*   **Disadvantages:**
    *   **More complex to understand and implement.**
    *   **Slower query performance** due to more joins required between tables.

### 2.3 Fact Constellation Schema

*   **Description:**  Multiple fact tables share dimension tables.  It's also known as a galaxy schema. It allows for modeling more complex relationships between facts and dimensions.

*   **Components:**
    *   **Multiple Fact Tables:** Each fact table represents a different business process or subject area.
    *   **Shared Dimension Tables:** Dimension tables are shared by multiple fact tables.

*   **Example:**

    Consider a university data warehouse.

    *   **Fact Tables:**
        *   `CourseEnrollment` (containing `StudentID`, `CourseID`, `TimeID`, `Grade`) - Records student enrollment in courses.
        *   `ProfessorTeaching` (containing `ProfessorID`, `CourseID`, `TimeID`, `Salary`) - Records professor assignments to courses.

    *   **Shared Dimension Tables:**
        *   `Time` (containing `TimeID`, `Year`, `Semester`) - Shared by both fact tables.
        *   `Course` (containing `CourseID`, `CourseName`, `Credits`) - Shared by both fact tables.
        *   `Student` (containing `StudentID`, `StudentName`, `Major`) - Used by `CourseEnrollment`
        *   `Professor` (containing `ProfessorID`, `ProfessorName`, `Department`) - Used by `ProfessorTeaching`

*   **Advantages:**
    *   **Models complex relationships** between multiple business processes.
    *   **Reduced data redundancy** by sharing dimension tables.
    *   **Increased flexibility** to support diverse analytical needs.

*   **Disadvantages:**
    *   **Most complex schema to design and implement.**
    *   **Potential for performance issues** if not designed carefully.

## 3. Choosing the Right Schema

The choice of schema depends on several factors:

*   **Complexity of the data:** Simple data might be well-suited for a star schema.  Complex data with many relationships might require a snowflake or fact constellation schema.
*   **Performance requirements:** Star schemas generally offer the best performance for simple queries.  Snowflake schemas can be slower due to the need for more joins.
*   **Data redundancy:** Snowflake and fact constellation schemas reduce data redundancy compared to the star schema.
*   **Maintainability:** Star schemas are easier to maintain, while snowflake and fact constellation schemas require more careful planning and management.
*   **Storage space:** Snowflake schemas, by normalizing dimension tables, can take more space due to a larger number of tables.

## 4. Examples and Application Scenarios

*   **Retail Sales:** A star schema could be used to analyze sales data, with dimensions like product, time, location, and customer.
*   **Healthcare:** A snowflake schema could be used to analyze patient data, with dimensions like patient, diagnosis, treatment, and provider.
*   **Financial Analysis:** A fact constellation schema could be used to analyze financial data, with multiple fact tables representing different financial transactions (e.g., sales, purchases, payments) sharing common dimensions like time and account.
*   **Manufacturing:** A fact constellation could model the supply chain.  One fact table might store 'Orders' while another stores 'Shipments' with shared dimensions such as Customer, Product and Time.

## 5. Practice Questions/Exercises

**Question 1:**  Describe the main difference between a star schema and a snowflake schema.

**Answer:**  The main difference is that in a star schema, dimension tables are typically denormalized, while in a snowflake schema, dimension tables are further normalized into multiple related tables.

**Question 2:**  What is the primary advantage of using a fact constellation schema?

**Answer:**  The primary advantage is its ability to model complex relationships between multiple business processes or subject areas.

**Question 3:**  Which schema generally offers the fastest query performance?

**Answer:**  The star schema generally offers the fastest query performance due to its simplicity and denormalized dimension tables.

**Question 4:**  You are designing a data warehouse for a library. You need to track book loans and member details. You want a simple design with fast query performance. Which schema would you recommend?

**Answer:** A Star schema is recommended.  The fact table would be 'Loans' with key fields like LoanID, MemberID, BookID, and DateBorrowed. Dimension tables would include 'Member' and 'Book'.

**Question 5:** Explain the concept of 'Grain' in the context of data warehousing.

**Answer:** 'Grain' refers to the level of detail in the fact table. It defines what each record in the fact table represents. For example, in a sales data warehouse, the grain could be "daily sales by product and store" or "monthly sales by product category". Choosing the right grain is critical for the data warehouse design and influences the types of analysis that can be performed.

## 6. Important Points to Remember

*   **Facts are the core of the data warehouse.** They are the measurable values being analyzed.
*   **Dimensions provide context to the facts.** They allow you to slice and dice the data.
*   **Normalization affects performance.**  Denormalization (star schema) is faster but increases redundancy. Normalization (snowflake schema) reduces redundancy but can slow down queries.
*   **Choose the schema based on your specific needs.**  Consider complexity, performance, redundancy, and maintainability.
*   Data warehouse design is an iterative process. You may need to refine the schema as your business requirements evolve.
