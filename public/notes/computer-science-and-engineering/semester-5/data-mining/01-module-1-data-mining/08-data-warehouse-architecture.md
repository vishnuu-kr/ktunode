---
title: "Data Warehouse  Architecture"
subject: "DATA MINING"
module: "Module 1: Data Mining  "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b89a"
status: "completed"
scrapedAt: "2026-05-20T16:44:56.829Z"
---
## DATA MINING - Module 1: Data Warehouse Architecture

**Subject:** DATA MINING
**Module:** Module 1: Data Mining
**Topic:** Data Warehouse Architecture
**Description:** Understanding the architecture of a data warehouse and its components.

**Learning Outcomes:**

*   Understand the fundamental components of a data warehouse architecture.
*   Differentiate between various data warehouse architectures (e.g., single-tier, two-tier, three-tier).
*   Describe the role of ETL (Extract, Transform, Load) processes in data warehousing.
*   Identify different data warehouse modeling techniques (e.g., star schema, snowflake schema).
*   Understand the importance of metadata in data warehousing.

---

### 1. Fundamental Components of a Data Warehouse Architecture

A data warehouse (DW) is a subject-oriented, integrated, time-variant, and non-volatile collection of data in support of management's decision-making process.  Its architecture is crucial for performance, scalability, and usability.

*   **Subject-Oriented:** Data is organized around major subjects like customer, product, or sales, rather than application-oriented.
    *   *Example:* Instead of having separate databases for order entry, shipping, and billing, a data warehouse focuses on the "Customer" and pulls relevant information from these various sources.

*   **Integrated:** Data from different operational sources is integrated and made consistent. This involves resolving naming conflicts, unit of measure inconsistencies, and coding discrepancies.
    *   *Example:*  Customer names might be stored differently in different systems (e.g., "John Smith" vs. "J. Smith").  The integration process resolves these inconsistencies to ensure data quality.

*   **Time-Variant:** Data is stored with a historical perspective, meaning changes are tracked over time. This allows for analysis of trends and patterns.
    *   *Example:*  Tracking sales figures not just for the current month, but for previous months, quarters, and years.

*   **Non-Volatile:** Data is read-only and not updated in the DW.  Operational systems handle transactional updates.  The DW is refreshed periodically (e.g., daily, weekly).
    *   *Example:*  Sales figures are updated in the operational CRM system, and then loaded into the data warehouse on a nightly basis.  Users don't directly modify data in the DW.

**Key Components:**

*   **Source Systems:** These are the operational systems that generate the raw data.  Examples include:
    *   CRM (Customer Relationship Management) systems
    *   ERP (Enterprise Resource Planning) systems
    *   Point-of-Sale (POS) systems
    *   Legacy databases
    *   External data sources (e.g., market research data)

*   **ETL (Extract, Transform, Load) System:** This is the engine that moves data from source systems to the data warehouse.
    *   **Extract:**  Retrieving data from source systems.
    *   **Transform:** Cleaning, integrating, and transforming data to conform to the DW schema.  This includes:
        *   Data cleaning (handling missing values, errors)
        *   Data transformation (converting data types, units)
        *   Data integration (resolving inconsistencies)
    *   **Load:**  Moving the transformed data into the data warehouse.

*   **Data Warehouse Database:** This is the central repository for the integrated data.  Typically a relational database management system (RDBMS) optimized for analytical queries.
    *   Examples: Teradata, Oracle, Microsoft SQL Server, Amazon Redshift, Snowflake

*   **Metadata Repository:** Stores metadata about the data warehouse, including:
    *   Data source information
    *   Transformation rules
    *   Data definitions
    *   Business rules
    *   Data lineage (tracing the origin of data)

*   **Data Marts (Optional):**  Subsets of the data warehouse that are focused on specific subject areas or business units.
    *   *Example:* A marketing data mart containing customer demographics, purchase history, and campaign response data.

*   **Data Access Tools:** Tools that allow users to query and analyze the data in the data warehouse.
    *   Reporting tools (e.g., Tableau, Power BI, SSRS)
    *   OLAP (Online Analytical Processing) tools
    *   Data mining tools

### 2. Data Warehouse Architectures

Data warehouse architectures can be categorized based on the number of tiers.

*   **Single-Tier Architecture:** All components (source systems, ETL, data warehouse, and data access tools) are integrated into a single physical system.  Simple, but not scalable or suitable for complex data warehousing.  Rarely used in enterprise environments.

*   **Two-Tier Architecture:** Separates the data warehouse database from the source systems.  The ETL process runs on a separate server.  More scalable than single-tier, but still limited.
    *   Directly connects the front-end client to the data warehouse database.

*   **Three-Tier Architecture:** The most common architecture.  Introduces a middle tier (e.g., OLAP server) between the data warehouse database and the data access tools.
    *   Improved performance, scalability, and security.
    *   Provides a more abstract view of the data for end-users.
    *   ETL server, data warehouse server, and client server are distinct.
    *   *Example:*
        *   **Tier 1 (Bottom):** Data Warehouse server (e.g., Teradata)
        *   **Tier 2 (Middle):** OLAP server or Application server.
        *   **Tier 3 (Top):** Client tools (e.g., Tableau)

**Choosing an Architecture:** Depends on factors like:

*   Data volume
*   Query complexity
*   Scalability requirements
*   Budget

### 3. ETL (Extract, Transform, Load) Processes

ETL is the heart of the data warehouse.  It's responsible for moving and preparing data for analysis.

*   **Extract:**
    *   Identifying and retrieving data from various source systems.
    *   Handling different data formats (e.g., flat files, relational databases, XML).
    *   Performing initial data validation and filtering.

*   **Transform:**
    *   **Cleaning:** Removing errors, inconsistencies, and duplicates.
    *   **Standardizing:** Converting data to a consistent format.
    *   **Enriching:** Adding additional information to the data (e.g., geographic codes).
    *   **Integrating:** Combining data from multiple sources into a unified view.
    *   **Aggregating:** Summarizing data to reduce its volume (e.g., calculating daily sales totals).

*   **Load:**
    *   Loading the transformed data into the data warehouse.
    *   Performing data validation to ensure data quality.
    *   Creating indexes to improve query performance.
    *   Handling errors and exceptions.
    *   Maintaining data lineage information.

**ETL Tools:**

*   Informatica PowerCenter
*   IBM DataStage
*   Microsoft SSIS (SQL Server Integration Services)
*   Talend Open Studio
*   Apache NiFi

### 4. Data Warehouse Modeling Techniques

Data warehouse modeling defines how data is organized and structured within the DW.

*   **Star Schema:** The most common DW modeling technique.  Consists of:
    *   **Fact Table:** Contains the quantitative data (measures) and foreign keys to dimension tables.
        *   *Example:* Sales fact table with measures like quantity sold, sales amount, and foreign keys to customer, product, time, and store dimensions.
    *   **Dimension Tables:** Contain descriptive attributes about the fact table data.
        *   *Example:* Customer dimension with attributes like customer ID, name, address, and demographics.
    *   Simple and efficient for querying.
    *   Denormalized to improve query performance.

*   **Snowflake Schema:** An extension of the star schema where dimension tables are further normalized into multiple related tables.
    *   Reduces data redundancy but can increase query complexity.
    *   *Example:* Customer dimension might be normalized into separate customer, address, and country tables.

*   **Galaxy Schema (Fact Constellation):**  Multiple fact tables sharing dimension tables.  Used for complex data warehousing scenarios.

**Choosing a Modeling Technique:**

*   **Star schema:** Simple, efficient for most scenarios.
*   **Snowflake schema:** Used when data redundancy is a major concern or when dimension tables are very large and complex.
*   **Galaxy schema:** Used for complex, multi-faceted data warehousing requirements.

### 5. Importance of Metadata

Metadata is "data about data."  It's crucial for understanding, managing, and using the data warehouse effectively.

*   **Types of Metadata:**
    *   **Technical Metadata:** Information about the data warehouse infrastructure, such as database schemas, table definitions, and ETL processes.
    *   **Business Metadata:** Information about the business meaning of the data, such as business rules, data definitions, and data ownership.
    *   **Operational Metadata:** Information about the data warehouse operations, such as data loading times, query performance statistics, and error logs.

*   **Benefits of Metadata Management:**
    *   Improved data quality
    *   Increased data understanding
    *   Simplified data access
    *   Enhanced data governance
    *   Better decision-making

**Example of Metadata:**

*   **Table name:** `SalesFact`
*   **Description:** Contains sales transaction data.
*   **Columns:**
    *   `SalesID` (INT, Primary Key)
    *   `CustomerID` (INT, Foreign Key referencing `CustomerDimension`)
    *   `ProductID` (INT, Foreign Key referencing `ProductDimension`)
    *   `SaleDate` (DATE, Foreign Key referencing `TimeDimension`)
    *   `QuantitySold` (INT)
    *   `SalesAmount` (DECIMAL)
*   **Data Source:** CRM system
*   **ETL Process:** `LoadSalesData.dtsx` (SSIS package)

---

### Practice Questions and Exercises

**Question 1:**  What are the four key characteristics of a data warehouse?

**Answer:** Subject-oriented, integrated, time-variant, and non-volatile.

**Question 2:**  Explain the purpose of the ETL process in data warehousing.

**Answer:** ETL extracts data from source systems, transforms it to conform to the data warehouse schema, and loads it into the data warehouse.

**Question 3:**  Compare and contrast the star schema and snowflake schema data warehouse modeling techniques.

**Answer:**  The star schema is simpler and more efficient for querying, while the snowflake schema is more normalized and reduces data redundancy but can increase query complexity.  Star schema has one fact table surrounded by dimension tables, while snowflake has normalized dimension tables that branch out into multiple tables.

**Question 4:**  What is metadata and why is it important in data warehousing?

**Answer:** Metadata is "data about data." It provides information about the data warehouse infrastructure, business meaning of the data, and data warehouse operations. It's important for understanding, managing, and using the data warehouse effectively.

**Question 5:**  Give examples of source systems that might feed into a data warehouse.

**Answer:** CRM systems, ERP systems, POS systems, legacy databases, external data sources.

**Exercise:**

Design a star schema for a data warehouse to track online movie rentals.  Identify the fact table and at least three dimension tables with relevant attributes for each.

**Answer:**

*   **Fact Table:** `RentalFact`
    *   `RentalID` (INT, Primary Key)
    *   `CustomerID` (INT, Foreign Key referencing `CustomerDimension`)
    *   `MovieID` (INT, Foreign Key referencing `MovieDimension`)
    *   `RentalDate` (DATE, Foreign Key referencing `TimeDimension`)
    *   `RentalDuration` (INT) (in days)
    *   `RentalPrice` (DECIMAL)

*   **Dimension Table:** `CustomerDimension`
    *   `CustomerID` (INT, Primary Key)
    *   `CustomerName` (VARCHAR)
    *   `CustomerAddress` (VARCHAR)
    *   `CustomerEmail` (VARCHAR)
    *   `CustomerJoinDate` (DATE)

*   **Dimension Table:** `MovieDimension`
    *   `MovieID` (INT, Primary Key)
    *   `MovieTitle` (VARCHAR)
    *   `MovieGenre` (VARCHAR)
    *   `MovieReleaseYear` (INT)
    *   `MovieDirector` (VARCHAR)

*   **Dimension Table:** `TimeDimension`
    *   `DateKey` (INT, Primary Key)
    *   `Date` (DATE)
    *   `Day` (VARCHAR)
    *   `Month` (VARCHAR)
    *   `Quarter` (VARCHAR)
    *   `Year` (INT)

---

### Important Points to Remember

*   Data warehouses are designed for analytical processing, not transactional processing.
*   ETL is a critical component of data warehousing, ensuring data quality and consistency.
*   Choose the appropriate data warehouse architecture and modeling technique based on your specific needs.
*   Metadata is essential for understanding and managing the data warehouse.
*   Regularly review and optimize the data warehouse architecture to ensure performance and scalability.
