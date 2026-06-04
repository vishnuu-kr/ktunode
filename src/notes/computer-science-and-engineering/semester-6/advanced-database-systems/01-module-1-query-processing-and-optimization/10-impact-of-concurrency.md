---
title: "Impact of Concurrency"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 1: Query Processing and Optimization "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbd2"
status: "completed"
scrapedAt: "2026-05-20T16:50:12.564Z"
---
# ADVANCED DATABASE SYSTEMS: Module 1 - Query Processing and Optimization
## Topic: Impact of Concurrency

**Learning Outcomes:**

*   Understand the concept of concurrency in database systems.
*   Identify the problems that arise due to concurrent execution of transactions.
*   Explain the ACID properties (Atomicity, Consistency, Isolation, Durability) and their importance in concurrent database systems.
*   Describe common concurrency control mechanisms (e.g., locking, timestamp ordering, optimistic concurrency control).
*   Evaluate the trade-offs between different concurrency control mechanisms.
*   Understand the impact of different isolation levels on concurrency and data consistency.

---

### 1. Introduction to Concurrency

*   **Definition:** Concurrency in database systems refers to the simultaneous execution of multiple transactions accessing the same database.  These transactions might read, write, or modify data.

*   **Motivation:**
    *   **Improved Throughput:** Allows multiple users to access the database concurrently, increasing the overall system throughput (number of transactions processed per unit time).
    *   **Reduced Response Time:** Users experience faster response times as they don't have to wait for other long-running transactions to complete.
    *   **Better Resource Utilization:** Maximizes the use of system resources (CPU, memory, I/O) by executing transactions in parallel.

*   **Challenges:**
    *   Data inconsistency: Concurrent access can lead to anomalies if not managed correctly.
    *   Ensuring data integrity: The database system must maintain the ACID properties even in the presence of concurrent transactions.
    *   Concurrency control overhead: Managing concurrency introduces overhead, which needs to be minimized to maximize performance.

---

### 2. Problems Arising from Concurrent Execution

Without proper concurrency control, the following problems can occur:

*   **Lost Update Problem:**
    *   **Description:** Occurs when two transactions read the same data item, and then both update the item. The update of the first transaction is lost because it is overwritten by the second transaction's update.
    *   **Example:**
        *   Transaction T1: Reads balance of account A ($100) and adds $50.  Writes back $150.
        *   Transaction T2: Reads balance of account A ($100) and subtracts $20.  Writes back $80.
        *   If these transactions execute concurrently without proper synchronization, the final balance of account A could be $150 instead of the correct $130.

*   **Dirty Read (Uncommitted Data Dependency):**
    *   **Description:** A transaction reads data that has been modified by another transaction but not yet committed. If the modifying transaction aborts, the reading transaction has read incorrect data.
    *   **Example:**
        *   Transaction T1: Updates the balance of account A to $120 but has not yet committed.
        *   Transaction T2: Reads the balance of account A and sees $120.  T2 performs further operations based on this value.
        *   Transaction T1: Aborts, rolling back the balance of account A to the original value of $100.
        *   Transaction T2 now has read and potentially acted upon incorrect data.

*   **Incorrect Summary Problem:**
    *   **Description:** Occurs when one transaction is calculating an aggregate function over a set of data while other transactions are updating some of the data items in that set.  The aggregate function may compute an incorrect result.
    *   **Example:**
        *   Transaction T1: Calculates the total balance of all accounts in a bank.
        *   Transaction T2: Transfers $100 from account A to account B during T1's calculation.
        *   If T1 reads the balance of account A before the transfer and the balance of account B after the transfer, the total balance calculated by T1 will be incorrect.

*   **Unrepeatable Read:**
    *   **Description:** A transaction reads the same data item twice, but the value of the data item has been changed by another transaction in between the two reads.  Therefore, the transaction reads different values each time.
    *   **Example:**
        *   Transaction T1: Reads the balance of account A ($100).
        *   Transaction T2: Transfers $50 from account C to account A and commits.
        *   Transaction T1: Reads the balance of account A again ($150).
        *   Transaction T1 observes different values for the same data item.
---

### 3. ACID Properties

ACID properties are a set of database properties intended to guarantee data validity despite errors, power failures, and other mishaps. They ensure data integrity and reliability in a database system.

*   **Atomicity:**
    *   **Definition:** A transaction is treated as a single, indivisible unit of work. Either all operations within the transaction are executed successfully, or none are.  This is often achieved using a "rollback" mechanism.
    *   **Example:**  A bank transfer requires debiting one account and crediting another. Atomicity ensures that either both operations happen, or neither happens.

*   **Consistency:**
    *   **Definition:** A transaction must maintain the database in a consistent state. It moves the database from one valid state to another. Constraints and rules defined in the database schema must be enforced.
    *   **Example:** If a constraint states that the total balance of all accounts must remain constant, a transaction transferring money between accounts must ensure this constraint is satisfied.

*   **Isolation:**
    *   **Definition:** Transactions should execute as if they are the only transactions running in the system. The effects of concurrent transactions should be hidden from each other until they are committed.  Isolation levels define the degree to which transactions are isolated from each other.
    *   **Example:**  Two transactions transferring money should not interfere with each other's operations or read intermediate, inconsistent states.

*   **Durability:**
    *   **Definition:** Once a transaction is committed, its changes are permanent and should survive even system failures (e.g., power outages, crashes).  This is typically achieved through transaction logs and recovery mechanisms.
    *   **Example:** If a transaction deposits money into an account and commits, that deposit should still be reflected in the database even if the system crashes immediately after.

---

### 4. Concurrency Control Mechanisms

Concurrency control mechanisms are designed to ensure the ACID properties in a concurrent database environment.

*   **Locking:**
    *   **Concept:** Transactions acquire locks on data items before accessing them. Locks prevent other transactions from accessing the same data item in a conflicting mode.
    *   **Types of Locks:**
        *   **Shared (Read) Lock:** Allows multiple transactions to read the data item concurrently.
        *   **Exclusive (Write) Lock:** Allows only one transaction to write to the data item. No other transaction can read or write the data item while the exclusive lock is held.
    *   **Two-Phase Locking (2PL):**  A widely used locking protocol.
        *   **Growing Phase:** A transaction can acquire locks but cannot release them.
        *   **Shrinking Phase:** A transaction can release locks but cannot acquire any new locks.
    *   **Advantages:** Simple to implement, guarantees serializability (executing transactions as if they were executed serially).
    *   **Disadvantages:** Can lead to deadlocks (two or more transactions are blocked indefinitely, waiting for each other to release locks). Starvation (a transaction may repeatedly lose the race for acquiring a lock).

*   **Timestamp Ordering:**
    *   **Concept:** Each transaction is assigned a unique timestamp. Operations are processed based on the timestamps to ensure serializability.
    *   **Basic Timestamp Ordering (TO):**
        *   Each data item has a read timestamp (TS(R)) and a write timestamp (TS(W)).
        *   If a transaction wants to read a data item:
            *   If TS(Transaction) < TS(W)(data item), the read is rejected (as the transaction is trying to read a value that hasn't been written yet according to its timestamp), and the transaction is rolled back.
            *   Otherwise, the read is allowed, and TS(R)(data item) is updated to max(TS(Transaction), TS(R)(data item)).
        *   If a transaction wants to write a data item:
            *   If TS(Transaction) < TS(R)(data item) or TS(Transaction) < TS(W)(data item), the write is rejected, and the transaction is rolled back.
            *   Otherwise, the write is allowed, and TS(W)(data item) is updated to TS(Transaction).
    *   **Advantages:** Avoids deadlocks.
    *   **Disadvantages:** Can lead to cascading rollbacks (if one transaction is rolled back, other transactions that read data written by it must also be rolled back).

*   **Optimistic Concurrency Control (OCC):**
    *   **Concept:** Transactions proceed without acquiring locks. Before committing, a transaction checks if its operations have conflicted with other concurrent transactions. If a conflict is detected, the transaction is rolled back.
    *   **Phases:**
        *   **Read Phase:** The transaction reads data from the database and stores the changes in a local workspace.
        *   **Validation Phase:** The transaction checks for conflicts with other concurrent transactions.
        *   **Write Phase:** If no conflicts are detected, the changes are written to the database.
    *   **Advantages:** Suitable for environments with low contention (few conflicts).
    *   **Disadvantages:** Requires significant rollback overhead if conflicts are frequent.

---

### 5. Trade-offs Between Concurrency Control Mechanisms

| Feature           | Locking (2PL)                       | Timestamp Ordering                 | Optimistic Concurrency Control   |
| ----------------- | ------------------------------------- | ------------------------------------ | --------------------------------- |
| Deadlock          | Possible                              | Not Possible                       | Not Possible                       |
| Starvation        | Possible                              | Possible                           | Possible                          |
| Overhead          | High (lock management)                | Moderate (timestamp management)     | Low (until validation)            |
| Rollback          | Less frequent (unless deadlock)      | Frequent (due to timestamp violations) | Frequent (due to conflicts)       |
| Resource Usage    | High (lock table)                     | Moderate (timestamp storage)        | Low (until validation)            |
| Suitability       | High contention environments          | Mixed contention environments       | Low contention environments         |

**Important Considerations:**

*   **System workload:**  The frequency of concurrent transactions and the likelihood of conflicts.
*   **Performance requirements:**  The desired throughput and response time.
*   **Complexity of implementation:**  The effort required to implement and maintain the concurrency control mechanism.
*   **Resource constraints:**  The available CPU, memory, and I/O resources.

---

### 6. Isolation Levels

Isolation levels define the degree to which transactions are isolated from each other. Lower isolation levels allow for greater concurrency but may lead to data inconsistencies.  Higher isolation levels provide better data consistency but can reduce concurrency.

*   **Read Uncommitted:**
    *   **Description:** The lowest isolation level. Transactions can read uncommitted changes made by other transactions (dirty reads are possible).
    *   **Problems:** Dirty reads, non-repeatable reads, phantom reads.
    *   **Concurrency:** Highest concurrency.

*   **Read Committed:**
    *   **Description:** Transactions can only read committed data. Dirty reads are prevented.
    *   **Problems:** Non-repeatable reads, phantom reads.
    *   **Concurrency:**  Higher than Serializable, lower than Read Uncommitted.

*   **Repeatable Read:**
    *   **Description:**  A transaction can repeatedly read the same data and see the same values, even if other transactions modify the data in the meantime. Prevents dirty reads and non-repeatable reads.
    *   **Problems:** Phantom reads.
    *   **Concurrency:** Lower than Read Committed, higher than Serializable.

*   **Serializable:**
    *   **Description:** The highest isolation level. Transactions execute as if they were executed serially (one after the other). Guarantees the ACID properties.
    *   **Problems:** None.
    *   **Concurrency:** Lowest concurrency.

**Phantom Read:** Occurs when a transaction re-executes a query that returns a set of rows, and finds that the set of rows has changed due to insertions or deletions by other committed transactions.

**Example:**

A transaction T1 executes the query `SELECT * FROM Employees WHERE Salary > 50000;`. Later, another transaction T2 inserts a new employee with a salary of $60,000 and commits.  If T1 re-executes the same query, it will now see a different set of rows (including the new employee), even though T1 has not modified any data.  This is a phantom read.

---

### 7. Practice Questions and Exercises

1.  **Question:** Explain the lost update problem and provide an example. How can this problem be prevented using locking?

    **Answer:** The lost update problem occurs when two transactions read the same data item, and then both update the item. The update of the first transaction is lost because it is overwritten by the second transaction's update. For example:
        *   Transaction T1: Reads balance of account A ($100) and adds $50.  Writes back $150.
        *   Transaction T2: Reads balance of account A ($100) and subtracts $20.  Writes back $80.
        *   If these transactions execute concurrently without proper synchronization, the final balance of account A could be $150 instead of the correct $130.
    This problem can be prevented using locking by having T1 acquire an exclusive (write) lock on account A before reading and updating it.  T2 would then be blocked until T1 releases the lock, ensuring T1's update is not overwritten.

2.  **Question:** What are the ACID properties, and why are they important in concurrent database systems?

    **Answer:** ACID properties (Atomicity, Consistency, Isolation, Durability) are a set of database properties intended to guarantee data validity despite errors, power failures, and other mishaps.
    *   **Atomicity:** Ensures a transaction is treated as a single, indivisible unit of work.
    *   **Consistency:** Ensures a transaction moves the database from one valid state to another.
    *   **Isolation:** Ensures transactions execute as if they are the only transactions running in the system.
    *   **Durability:** Ensures once a transaction is committed, its changes are permanent.
    They are important because they maintain data integrity and reliability in a concurrent database environment, preventing data corruption and ensuring that data remains accurate even in the face of failures.

3.  **Question:** Describe the basic timestamp ordering concurrency control mechanism. What are its advantages and disadvantages?

    **Answer:** In basic timestamp ordering, each transaction is assigned a unique timestamp, and operations are processed based on these timestamps.  If a transaction tries to read or write a data item with a timestamp that violates the ordering rules (described in section 4), the transaction is rolled back. Advantages include avoiding deadlocks. Disadvantages include the potential for cascading rollbacks.

4.  **Question:**  A banking system uses 2PL.  Transaction T1 transfers $100 from account A to account B. Transaction T2 transfers $50 from account B to account C. Explain how 2PL would prevent the lost update problem if both transactions attempt to read and write to account B simultaneously.

    **Answer:**
    1.  T1 requests an exclusive lock on account A and acquires it.
    2.  T1 reads the balance of A, subtracts $100 and writes the new balance to A.
    3.  T1 requests an exclusive lock on account B.
    4.  T2 requests an exclusive lock on account B.  T2 is blocked because T1 holds the lock.
    5.  T1 acquires the exclusive lock on account B.
    6.  T1 reads the balance of B, adds $100, and writes the new balance to B.
    7.  T1 releases locks on A and B.
    8.  T2 now acquires the exclusive lock on B.
    9. T2 reads the *updated* balance of B (which already reflects T1's changes), subtracts $50 and writes the new balance to B.
    10. T2 requests exclusive lock on C.
    11. T2 acquires exclusive lock on C.
    12. T2 reads the balance of C, adds $50, and writes the new balance to C.
    13. T2 releases locks on B and C.

    In this scenario, 2PL ensures that T2 only operates on the updated balance of B after T1 has completed its changes.  Without 2PL, T2 might have read the original balance of B, leading to an incorrect final balance (the lost update problem).

5.  **Question:** Explain the different isolation levels and the types of read phenomena that they prevent. List the isolation levels in terms of concurrency, from highest to lowest.

    **Answer:**
    *   **Read Uncommitted:** Prevents nothing.
    *   **Read Committed:** Prevents dirty reads.
    *   **Repeatable Read:** Prevents dirty reads and non-repeatable reads.
    *   **Serializable:** Prevents dirty reads, non-repeatable reads, and phantom reads.

    Concurrency (highest to lowest): Read Uncommitted > Read Committed > Repeatable Read > Serializable

---

### 8. Important Points to Remember

*   Concurrency is essential for improving database system performance and user experience.
*   Concurrency control mechanisms are critical for maintaining data integrity in a concurrent environment.
*   Locking, timestamp ordering, and optimistic concurrency control are common techniques with different trade-offs.
*   Isolation levels define the degree of isolation between transactions and impact both concurrency and data consistency.
*   Choosing the appropriate concurrency control mechanism and isolation level depends on the specific application requirements and workload characteristics. Understanding the trade-offs is key.
