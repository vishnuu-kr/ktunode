---
title: "Distributed Databases  - Distributed Systems, Introduction, Architecture"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 2: Distributed Databases  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbd4"
status: "completed"
scrapedAt: "2026-05-20T16:50:13.269Z"
---
## ADVANCED DATABASE SYSTEMS - Module 2: Distributed Databases

### Topic: Distributed Databases - Distributed Systems, Introduction, Architecture

**Learning Outcomes:**

*   Understand the concept of a distributed system and its benefits.
*   Define a distributed database and differentiate it from centralized databases.
*   Describe the architecture of a distributed database management system (DDBMS).
*   Identify and explain the various components of a DDBMS architecture.

---

**1. Distributed Systems**

*   **Definition:** A distributed system is a collection of independent computing nodes (e.g., computers, servers) that appear to users as a single coherent system.  These nodes cooperate to achieve a common goal.

*   **Key Characteristics:**
    *   **Concurrency:** Multiple components operate simultaneously.
    *   **Lack of a Global Clock:** No single, synchronized clock across the entire system.  Timing events across nodes can be challenging.
    *   **Independent Failure:**  Components can fail independently without affecting the entire system (ideally).
    *   **Geographic Distribution:** Nodes can be geographically dispersed.
    *   **Resource Sharing:** Nodes share resources such as data, processing power, and storage.

*   **Benefits of Distributed Systems:**
    *   **Scalability:** Easier to increase system capacity by adding more nodes.
        *   *Horizontal Scalability:* Adding more machines.
        *   *Vertical Scalability:*  Upgrading hardware on existing machines (more limited).
    *   **High Availability (Reliability):**  If one node fails, others can continue to operate. Redundancy plays a vital role.
    *   **Improved Performance:** Distributing workload across multiple nodes can reduce response times.
    *   **Resource Sharing:** Enables efficient sharing of resources among users and applications.
    *   **Economic Advantages:**  Can be more cost-effective than a single, powerful centralized system.  Commodity hardware can be used.
    *   **Data Localization:** Data can be stored closer to users who need it, reducing latency.

*   **Challenges of Distributed Systems:**
    *   **Complexity:** Designing, implementing, and managing distributed systems are inherently complex.
    *   **Communication Overhead:**  Communication between nodes introduces overhead.
    *   **Data Consistency:** Maintaining data consistency across multiple nodes is challenging.
    *   **Security:** Distributed systems introduce new security vulnerabilities.
    *   **Fault Tolerance:**  Designing systems that can handle failures gracefully is crucial.
    *   **Coordination:** Ensuring that distributed components work together harmoniously requires sophisticated coordination mechanisms.
    *   **Debugging:** Debugging distributed applications can be difficult.

**2. Introduction to Distributed Databases**

*   **Definition:** A distributed database is a collection of multiple, logically interrelated databases distributed over a computer network.  These databases are managed by a Distributed Database Management System (DDBMS).

*   **Key Concepts:**
    *   **Data Fragmentation:** Dividing a database table (relation) into smaller, logical units called fragments.  Fragments can be stored at different sites.  Types of fragmentation include:
        *   *Horizontal Fragmentation:* Dividing a table by rows (e.g., customers in different regions).
        *   *Vertical Fragmentation:* Dividing a table by columns (e.g., customer demographics and order history stored separately).
        *   *Mixed Fragmentation:* A combination of horizontal and vertical fragmentation.
    *   **Data Replication:** Storing multiple copies of data at different sites.  Improves availability and performance but increases storage costs and complexity of maintaining consistency.
    *   **Data Allocation:**  Deciding where to store data fragments or replicas.  Allocation strategies include:
        *   *Centralized:* All data stored at a single site. (Not truly distributed).
        *   *Partitioned (Fragmented):* Data is divided into fragments and each fragment is stored at a different site.
        *   *Replicated:* Multiple copies of data are stored at different sites.
        *   *Hybrid:* A combination of partitioning and replication.
    *   **Transparency:** Hiding the distributed nature of the database from the user.  Different levels of transparency include:
        *   *Fragmentation Transparency:*  Users are unaware that data is fragmented.
        *   *Replication Transparency:* Users are unaware that data is replicated.
        *   *Location Transparency:* Users are unaware of the location of data.
        *   *Local Mapping Transparency:* Users are unaware of the mapping between logical and physical data locations.
    *   **Transaction Management:** Ensuring that transactions are executed atomically, consistently, isolated, and durably (ACID properties) even in a distributed environment.

*   **Distributed Database vs. Centralized Database:**

    | Feature            | Centralized Database | Distributed Database          |
    | ------------------ | -------------------- | ----------------------------- |
    | Data Location      | Single Location       | Multiple Locations            |
    | Management         | Single DBMS         | Distributed DBMS (DDBMS)        |
    | Availability       | Lower                | Higher                         |
    | Scalability        | Limited              | Higher                         |
    | Complexity         | Lower                | Higher                         |
    | Failure Impact     | Greater (single point of failure) | Lower (failure isolation)      |
    | Data Consistency   | Easier to maintain  | More complex to maintain       |

*   **Advantages of Distributed Databases:**
    *   **Improved Data Availability and Reliability:** Data replication ensures that data is available even if one site fails.
    *   **Enhanced Scalability:** Easily scale the database by adding more nodes to the network.
    *   **Localized Data Access:** Data can be stored closer to users who need it, reducing latency.
    *   **Improved Performance:** Distribute workload across multiple nodes for faster query processing.
    *   **Modular Growth:** Allows for gradual expansion of the database system.
    *   **Autonomy:** Each site can have some degree of autonomy in managing its local data.

*   **Disadvantages of Distributed Databases:**
    *   **Increased Complexity:** Designing, implementing, and managing a distributed database is more complex than a centralized database.
    *   **Higher Development Costs:**  Developing applications for a distributed database can be more expensive.
    *   **Difficult to Maintain Data Integrity:** Maintaining data consistency across multiple sites is challenging.
    *   **Increased Security Risks:** Distributed systems introduce new security vulnerabilities.
    *   **Complexity in Query Processing:** Optimizing queries that access data across multiple sites is more complex.
    *   **Transaction Management Overhead:** Distributed transaction management introduces overhead.

**3. Architecture of a Distributed Database Management System (DDBMS)**

*   **General Architecture:** A DDBMS typically consists of multiple sites (nodes) connected by a communication network. Each site has its own DBMS instance and some local data.

*   **Key Components:**
    *   **Sites/Nodes:** Independent computing nodes in the distributed system. Each site has its own processing power, memory, and storage.
    *   **DBMS Instance:**  A database management system running at each site.  This manages the local data at that site.  Can be the same or different DBMSs at different sites (homogeneous vs. heterogeneous DDBMS).
    *   **Communication Network:** The network that connects the sites and allows them to communicate and exchange data.  This can be a LAN, WAN, or the internet.
    *   **Global Data Dictionary/Catalog:** A repository that stores information about the entire distributed database, including:
        *   Data fragmentation information (how tables are split).
        *   Data replication information (which sites store copies of which data).
        *   Data allocation information (where data fragments are stored).
        *   Security information (access control).
        *   Metadata about data at each site.
        *   Can be centralized, fully replicated, or distributed.
    *   **Transaction Manager:**  Responsible for ensuring ACID properties of transactions in the distributed environment.  Handles concurrency control (e.g., locking) and recovery (e.g., two-phase commit).
    *   **Query Processor:** Processes user queries.  This involves:
        *   *Query Decomposition:* Breaking down a global query into subqueries that can be executed at individual sites.
        *   *Data Localization:* Identifying the sites where the data needed for each subquery is located.
        *   *Query Optimization:*  Determining the most efficient way to execute the query (considering data transfer costs, processing costs, etc.).
        *   *Query Execution:*  Sending the subqueries to the appropriate sites and coordinating their execution.
        *   *Results Integration:*  Combining the results from the subqueries into a single result set.
    *   **Data Communication Manager:** Handles the communication between the sites.  Responsible for sending and receiving data, and for handling network errors.

*   **DDBMS Architectures (Examples):**
    *   **Client-Server:** One or more client sites access data stored on one or more server sites. Clients send requests to servers, and servers respond with data. A common and relatively simple architecture.
    *   **Peer-to-Peer:** All sites have equal capabilities and can act as both clients and servers.  More complex to manage but can offer better scalability and fault tolerance.

*   **Homogeneous vs. Heterogeneous DDBMS:**
    *   **Homogeneous DDBMS:** All sites use the same DBMS software. Easier to manage and maintain data consistency.
    *   **Heterogeneous DDBMS:** Sites use different DBMS software. More challenging to manage and requires a gateway or mediator to translate between the different DBMSs.  Useful for integrating existing systems.

**Important Points to Remember:**

*   Distributed databases are designed to improve availability, scalability, and performance.
*   Data fragmentation, replication, and allocation are key concepts in distributed database design.
*   Maintaining data consistency and managing transactions in a distributed environment are complex challenges.
*   Transparency is a crucial goal in DDBMS, hiding the distributed nature from the user.
*   The architecture of a DDBMS includes sites, DBMS instances, a communication network, a global data dictionary, a transaction manager, a query processor, and a data communication manager.

**Practice Questions/Exercises:**

1.  **Question:** What are the primary benefits of using a distributed database compared to a centralized database?
    *   **Answer:** Improved availability, scalability, localized data access, and potential for improved performance.

2.  **Question:** Explain the difference between horizontal and vertical fragmentation. Provide an example of when each type of fragmentation would be appropriate.
    *   **Answer:**
        *   *Horizontal Fragmentation:* Dividing a table by rows. Example: Storing customer data for different regions in separate fragments.
        *   *Vertical Fragmentation:* Dividing a table by columns. Example: Storing customer demographics and order history in separate fragments.

3.  **Question:** Define data replication and explain its advantages and disadvantages.
    *   **Answer:**  Data replication is storing multiple copies of data at different sites.
        *   *Advantages:* Improves availability and performance.
        *   *Disadvantages:* Increases storage costs and complexity of maintaining consistency.

4.  **Question:**  Describe the role of the Global Data Dictionary in a DDBMS.
    *   **Answer:** The Global Data Dictionary stores metadata about the entire distributed database, including data fragmentation, replication, and allocation information, security information, and mappings between logical and physical data locations.

5.  **Question:** Explain the difference between a homogeneous and a heterogeneous DDBMS.
    *   **Answer:** A homogeneous DDBMS uses the same DBMS software at all sites, while a heterogeneous DDBMS uses different DBMS software at different sites.

6.  **Exercise:** Consider a database table called `Employees` with attributes: `EmployeeID`, `Name`, `Department`, `Salary`, and `Location`. Design a suitable fragmentation strategy for this table if the database is distributed across three sites: Site A, Site B, and Site C.  Assume that Site A primarily accesses employee information for the 'Sales' department, Site B for the 'Marketing' department, and Site C for the 'Engineering' department. How would you fragment this table? Would replication be beneficial? Why or why not?
    *   **Answer:**
        *   *Fragmentation Strategy:*  Horizontal fragmentation based on the `Department` attribute.
            *   Site A: Stores tuples where `Department` = 'Sales'.
            *   Site B: Stores tuples where `Department` = 'Marketing'.
            *   Site C: Stores tuples where `Department` = 'Engineering'.
        *   *Replication:* Replication might be beneficial for the `Location` attribute if all sites frequently need to access the location of all employees, regardless of department.  Replicating the entire table is likely unnecessary as each site predominantly works with data specific to a department. The trade-off would be increased storage costs versus reduced query times for location-based queries.
7.  **Question**: Describe the ACID properties and why they are crucial in a distributed database environment.  Explain how maintaining ACID can be more complex in a distributed setting than in a centralized one.
      * **Answer**:
          * **ACID Properties:**
            * **Atomicity:**  A transaction is treated as a single, indivisible unit of work. Either all changes are applied, or none are.
            * **Consistency:** A transaction must maintain the database in a valid state, adhering to defined rules and constraints.
            * **Isolation:** Concurrent transactions should not interfere with each other.  Each transaction should appear to execute in isolation.
            * **Durability:** Once a transaction is committed, its changes are permanent and will survive even system failures.
          * **Importance:**  ACID properties are crucial to ensure data integrity and reliability, especially in distributed systems where data is spread across multiple nodes and failures are more likely.
          * **Complexity in Distributed Systems:**  Maintaining ACID is harder in distributed systems due to the following:
            * **Communication Overhead:** Coordinating transactions across multiple nodes introduces communication delays.
            * **Concurrency Control:** Managing concurrent access to data across multiple sites requires sophisticated locking mechanisms (e.g., two-phase locking).  Distributed deadlocks can occur.
            * **Failure Handling:** Ensuring atomicity and durability in the face of node failures or network partitions requires robust commit protocols (e.g., two-phase commit).
            * **Data Consistency:**  Maintaining consistency across replicated data requires mechanisms to propagate updates consistently and efficiently.

---
