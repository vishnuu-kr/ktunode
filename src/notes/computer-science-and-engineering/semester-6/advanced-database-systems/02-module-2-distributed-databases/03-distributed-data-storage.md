---
title: "Distributed Data Storage"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 2: Distributed Databases  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbd6"
status: "completed"
scrapedAt: "2026-05-20T16:50:14.693Z"
---
## ADVANCED DATABASE SYSTEMS: Module 2 - Distributed Databases: Distributed Data Storage

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   Understand the fundamental concepts of distributed data storage.
*   Describe different fragmentation techniques (horizontal, vertical, mixed).
*   Explain data replication and its associated challenges (consistency, concurrency).
*   Compare and contrast different data allocation strategies.
*   Analyze the trade-offs involved in choosing a suitable distributed data storage strategy.

---

**I. Fundamental Concepts of Distributed Data Storage**

*   **Definition:** Distributed data storage refers to the storage of a database across multiple physical locations or nodes connected by a network. It's a key aspect of distributed database systems.

*   **Goals of Distributed Data Storage:**
    *   **Increased Availability:** If one site fails, data is still accessible from other sites.
    *   **Improved Performance:** Data can be located closer to users, reducing access time and network latency.
    *   **Scalability:** Easily increase storage capacity by adding more nodes to the system.
    *   **Autonomy:** Individual sites can manage their local data while participating in a global database.
    *   **Fault Tolerance:** System can continue operating even if some nodes fail.

*   **Key Considerations:**
    *   **Data Fragmentation:** How to divide the data into smaller units.
    *   **Data Replication:** Whether to store multiple copies of data.
    *   **Data Allocation:** Where to store the fragmented and replicated data.
    *   **Consistency:** Maintaining data integrity across all sites.
    *   **Concurrency Control:** Managing concurrent access to data.

**II. Data Fragmentation Techniques**

Fragmentation divides a relation into smaller, more manageable pieces called fragments. This enables distributing these fragments across different sites.

*   **Horizontal Fragmentation:** Divides a relation into subsets of tuples (rows).

    *   **Definition:**  Each fragment contains a subset of the rows of the original table, based on some predicate (condition).

    *   **Types:**
        *   **Primary Horizontal Fragmentation:** Fragmentation based on attributes of the table itself.
        *   **Derived Horizontal Fragmentation:** Fragmentation based on the attributes of another table (often related via a foreign key).

    *   **Example:** Consider a `CUSTOMER` table with attributes: `cust_id`, `name`, `city`, `balance`.  We can horizontally fragment the table based on `city`:

        *   `CUSTOMER_NY`:  Contains customers from New York (e.g., `SELECT * FROM CUSTOMER WHERE city = 'New York'`)
        *   `CUSTOMER_LA`: Contains customers from Los Angeles (e.g., `SELECT * FROM CUSTOMER WHERE city = 'Los Angeles'`)

    *   **Benefits:** Improved performance for queries that access only a subset of tuples, increased parallelism.

    *   **Disadvantages:** Can make complex queries that need data from multiple fragments more complex.

*   **Vertical Fragmentation:** Divides a relation into subsets of attributes (columns).

    *   **Definition:** Each fragment contains a subset of the columns of the original table.

    *   **Example:** Using the same `CUSTOMER` table:

        *   `CUSTOMER_INFO`: Contains `cust_id`, `name`, `city`
        *   `CUSTOMER_FINANCE`: Contains `cust_id`, `balance`

    *   **Benefits:** Reduces data transfer size when only a subset of attributes is needed. Can improve security by separating sensitive data.

    *   **Disadvantages:**  Requires joining fragments back together to reconstruct the original relation, which can be expensive. Primary key must be present in each fragment to enable joining.

*   **Mixed Fragmentation:** A combination of horizontal and vertical fragmentation.

    *   **Definition:** First one form of fragmentation (horizontal or vertical) is applied, and then the resulting fragments are further fragmented using the other form.

    *   **Example:** Fragment the `CUSTOMER` table horizontally based on city (as above), and then vertically fragment each city-specific fragment into information and finance fragments (as above).  So, you would have `CUSTOMER_NY_INFO`, `CUSTOMER_NY_FINANCE`, `CUSTOMER_LA_INFO`, `CUSTOMER_LA_FINANCE`.

    *   **Benefits:**  Combines the advantages of both horizontal and vertical fragmentation, allowing for more tailored data distribution.

    *   **Disadvantages:**  More complex to manage and query.  Requires careful planning to ensure correct and efficient reconstruction of data.

**III. Data Replication**

Data replication involves storing multiple copies of the same data at different sites.

*   **Definition:**  The process of creating and maintaining multiple, consistent copies of data across a distributed system.

*   **Types:**
    *   **Full Replication:**  The entire database is stored at each site.
        *   **Advantages:** High availability, fast read access.
        *   **Disadvantages:** High storage cost, complex update management (consistency issues).
    *   **Partial Replication:**  Some fragments are replicated, while others are not.
        *   **Advantages:**  Balances availability and storage costs.
        *   **Disadvantages:**  Requires careful planning to determine which data to replicate.

*   **Benefits of Replication:**
    *   **Increased Availability:** If one site fails, data is still accessible from other replicas.
    *   **Improved Performance:** Read operations can be performed at the nearest replica.
    *   **Fault Tolerance:** System can tolerate node failures without data loss.

*   **Challenges of Replication:**
    *   **Consistency:** Maintaining consistency across all replicas is crucial.  This can be achieved through various replication protocols (e.g., two-phase commit).
    *   **Concurrency Control:** Managing concurrent access to replicated data requires complex concurrency control mechanisms.
    *   **Update Propagation:** Updates must be propagated to all replicas, which can be time-consuming and resource-intensive.
    *   **Increased Storage Overhead:** Storing multiple copies of data increases storage requirements.

*   **Replication Protocols:**
    *   **Synchronous Replication:** Updates are applied to all replicas before the transaction commits.
        *   **Advantage:** Strong consistency.
        *   **Disadvantage:** High latency, lower availability (if one replica is unavailable, updates are blocked).
    *   **Asynchronous Replication:** Updates are applied to the primary replica first, and then propagated to other replicas later.
        *   **Advantage:** Lower latency, higher availability.
        *   **Disadvantage:** Potential for data inconsistency (eventual consistency).
    *   **Quorum-Based Replication:**  Requires a certain number of replicas (a quorum) to agree before a read or write operation is considered successful.
        *   **Advantage:** Balances consistency and availability.
        *   **Disadvantage:** Requires careful configuration to determine the optimal quorum size.

**IV. Data Allocation Strategies**

Data allocation determines where to store the fragmented and replicated data.

*   **Definition:**  The process of assigning data fragments to specific sites in the distributed database system.

*   **Types:**

    *   **Centralized Allocation:**  The entire database is stored at a single site.
        *   **Advantages:** Simple to manage.
        *   **Disadvantages:** Low availability, performance bottleneck at the central site.  Not truly a distributed database in terms of storage.

    *   **Partitioned (Non-Replicated) Allocation:**  Each fragment is stored at only one site.
        *   **Advantages:**  Reduces storage overhead, simpler to manage than replicated allocation.
        *   **Disadvantages:**  Lower availability than replicated allocation. Requires careful placement of fragments to minimize data transfer.
        *   **Example:**  `CUSTOMER_NY` stored at the New York site, `CUSTOMER_LA` stored at the Los Angeles site.

    *   **Replicated Allocation:**  Multiple copies of some or all fragments are stored at different sites.
        *   **Advantages:**  High availability, improved performance for read operations.
        *   **Disadvantages:**  Increased storage overhead, more complex update management.
        *   **Example:** `CUSTOMER_NY` stored at both the New York and Chicago sites.

    *   **Selective Replication:**  Only certain fragments are replicated.  This is a common and practical approach.
        *   **Advantages:**  Balances availability, performance, and storage costs.
        *   **Disadvantages:**  Requires careful analysis of data access patterns to determine which fragments to replicate.

**V. Trade-offs in Choosing a Distributed Data Storage Strategy**

Choosing the right distributed data storage strategy involves considering several trade-offs:

*   **Availability vs. Cost:** Replication increases availability but also increases storage costs and management complexity.
*   **Performance vs. Consistency:**  Asynchronous replication provides better performance but may lead to temporary inconsistency. Synchronous replication ensures strong consistency but may impact performance.
*   **Complexity vs. Benefits:**  More complex fragmentation and allocation strategies can provide greater performance and flexibility but are also more difficult to manage.
*   **Data Access Patterns:**  The frequency and location of data access should influence the fragmentation and allocation strategies.
*   **Network Bandwidth:**  Limited network bandwidth may necessitate data localization through fragmentation and replication.
*   **Security Requirements:**  Data sensitivity should be considered when determining fragmentation and allocation strategies. Vertical fragmentation can be used to isolate sensitive data.

**VI. Important Points to Remember**

*   **Fragmentation, Replication, and Allocation are interrelated.** The choice of one strategy impacts the others.
*   **Consistency and Concurrency Control are crucial** for maintaining data integrity in a distributed environment.
*   **Understand the trade-offs** involved in each strategy before making a decision.
*   **Consider the specific needs** of the application when choosing a distributed data storage strategy. There is no "one size fits all" solution.
*   **Monitoring and Performance Tuning** are essential for optimizing the performance of a distributed database system.

---

**VII. Practice Questions/Exercises**

1.  **Question:** Explain the difference between horizontal and vertical fragmentation. Give an example of when each would be most appropriate.

    **Answer:**  Horizontal fragmentation divides a table into subsets of *rows* (tuples), based on a predicate (condition). It's suitable when different sites are primarily interested in different subsets of data (e.g., customer data by region).  Vertical fragmentation divides a table into subsets of *columns* (attributes).  It's suitable when different applications or users only need access to a subset of the columns (e.g., separating sensitive financial data from general customer information).

2.  **Question:** What are the advantages and disadvantages of full replication?

    **Answer:**  *Advantages:* High availability (if one site fails, data is still accessible), fast read access (data can be read locally). *Disadvantages:* High storage cost (every site stores the entire database), complex update management (ensuring consistency across all replicas is challenging).

3.  **Question:** Describe the difference between synchronous and asynchronous replication. What are the trade-offs between them?

    **Answer:** *Synchronous replication* updates all replicas *before* a transaction commits. This guarantees strong consistency but can slow down transactions and reduce availability (if one replica is down, the entire system might be blocked). *Asynchronous replication* updates the primary replica first, then propagates the changes to other replicas later. This provides better performance and availability but introduces the possibility of temporary data inconsistency (eventual consistency). The trade-off is between consistency and performance/availability.

4.  **Question:** Consider a distributed database for a library system. The `BOOK` table has attributes `book_id`, `title`, `author`, `publisher`, `publication_year`, and `available_copies`. The library has branches in New York, London, and Tokyo.  Design a suitable data storage strategy, considering fragmentation, replication, and allocation. Justify your choices.

    **Answer:** Here's a possible strategy:

    *   **Fragmentation:**
        *   **Horizontal Fragmentation:** Fragment the `BOOK` table based on the primary subject of books. This will create fragments like `BOOK_SCIENCE`, `BOOK_FICTION` and `BOOK_HISTORY`.
        *   **Vertical Fragmentation:** If the system keeps track of lending history separate from the information of books, this would be suitable. Vertical fragmentation would create fragments like `BOOK_INFO` with `book_id`, `title`, `author`, `publisher`, `publication_year`, and `BOOK_LENDING` with `book_id` and `available_copies`.

    *   **Replication:**  Replicate the `BOOK_INFO` fragments, in its horizontal fragments,  at all three sites (New York, London, Tokyo). This ensures high availability and fast read access to book information for all branches. Replicate `BOOK_LENDING` for all three sites to ensure availability for users to lend books.

    *   **Allocation:**
        *   Allocate `BOOK_SCIENCE`, `BOOK_FICTION` and `BOOK_HISTORY` and `BOOK_LENDING` to all three sites to ensure higher availability.

    *   **Justification:** This strategy balances the need for high availability (through replication) with the potential for localized data access (through fragmentation). Books that can be lent at all branches will be replicated. Since the library has branches across different geographical locations, replication is important to ensure that users in each location have access to the database even if one branch is temporarily unavailable.  Since, lending changes frequently, we would use asynchronous replication to improve performance.

5.  **Question:** What is the role of a primary key in vertical fragmentation?  What happens if the primary key is not included in all vertical fragments?

    **Answer:** The primary key is essential in vertical fragmentation.  It serves as the join attribute to reconstruct the original relation from the fragments.  If the primary key is not included in all fragments, it becomes impossible to correctly and efficiently join the fragments back together, leading to data loss or incorrect results. The query performance will be severely affected.
