---
title: "Transaction Management -  Transaction Processing : Introduction , problems and failures in transaction , Desirable properties of transaction , Characterizing schedules based on recoverability and serializability;"
subject: "DATABASE MANAGEMENT SYSTEMS"
module: "Module 3: Database Design Theory & Normalization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af77"
status: "completed"
scrapedAt: "2026-05-20T16:12:02.776Z"
---
## DATABASE MANAGEMENT SYSTEMS - Module 3: Database Design Theory & Normalization - Transaction Management

**Topic:** Transaction Processing: Introduction, problems and failures in transaction, Desirable properties of transaction, Characterizing schedules based on recoverability and serializability

**Learning Outcomes:**

*   Understand the concept of a transaction and its significance in database systems.
*   Identify potential problems and failures that can occur during transaction processing.
*   Describe the desirable properties (ACID properties) of transactions.
*   Distinguish between different types of transaction schedules based on recoverability.
*   Differentiate between different types of transaction schedules based on serializability.

---

### 1. Introduction to Transaction Processing

*   **What is a Transaction?** A transaction is a logical unit of work that performs a sequence of operations (read, write, update, delete) on a database. It represents a complete and indivisible operation.
    *   **Example:** Transferring money from one bank account to another. This involves debiting one account and crediting another. This entire process must be treated as a single transaction.
*   **Purpose of Transactions:**
    *   **Data Consistency:** Ensure data remains in a consistent state despite multiple users accessing and modifying the database concurrently.
    *   **Data Integrity:** Protect the integrity of the data even if errors or system failures occur.
*   **Transaction States:** A transaction typically goes through the following states:
    *   **Active:** The transaction is currently executing.
    *   **Partially Committed:** The final operation of the transaction has been executed, but the changes have not been permanently written to the database.
    *   **Committed:** The transaction has completed successfully, and all its changes are permanently stored in the database.
    *   **Failed:** The transaction has encountered an error and cannot proceed.
    *   **Aborted/Rolled Back:** The transaction has been terminated and all changes made by the transaction are undone, restoring the database to its original state before the transaction began.

### 2. Problems and Failures in Transaction Processing

*   **Concurrency Problems:** When multiple transactions access and modify the same data concurrently, several problems can arise.
    *   **Lost Update Problem:** Two transactions read the same data. One transaction updates the data, and then the other transaction updates the data again, overwriting the first transaction's update.
        *   **Example:**  T1 reads balance (100). T2 reads balance (100). T1 adds 50 (balance=150) and writes it. T2 adds 100 (balance=200) and writes it. T1's update is lost. The correct balance should be 250.
    *   **Dirty Read Problem:** A transaction reads data that has been updated by another transaction but not yet committed. If the updating transaction fails and is rolled back, the reading transaction will have read an invalid value.
        *   **Example:** T1 updates balance to 150 (not committed). T2 reads balance (150). T1 rolls back. T2 now has read an incorrect balance.
    *   **Incorrect Summary Problem:** A transaction is calculating an aggregate function (e.g., sum, average) over a set of data while other transactions are updating the same data. The aggregate function may reflect an inconsistent state.
        *   **Example:** T1 is calculating the total balance of all accounts. While T1 is running, T2 transfers money from account A to account B. T1 might read the balance of A before the transfer and the balance of B after the transfer, leading to an incorrect total.
*   **Types of Failures:**
    *   **Transaction Failure:** A transaction encounters an error during execution (e.g., invalid data, constraint violation) and must be aborted.
    *   **System Failure (Crash):** The entire database system crashes (e.g., power outage, hardware failure).
    *   **Media Failure:** The storage media (e.g., hard drive) containing the database fails.
    *   **Disk Failure:** Disk failure involves the database storage drive failing which causes the loss of data.
*   **Importance of Failure Handling:**  Database systems must have mechanisms to recover from failures and ensure data consistency. These mechanisms involve transaction rollback, logging, and recovery procedures.

### 3. Desirable Properties of Transactions (ACID Properties)

To ensure data consistency and reliability, transactions should adhere to the ACID properties:

*   **Atomicity:** A transaction must be treated as a single, indivisible unit of work. Either all operations within the transaction are completed successfully, or none of them are. If a transaction fails, all changes made by it must be rolled back.
    *   **Example:**  In the money transfer example, either both the debit and credit operations must succeed, or both must fail.
*   **Consistency:** A transaction must maintain the consistency of the database. It must transform the database from one consistent state to another consistent state.  Constraints and rules defined on the database must be preserved.
    *   **Example:** The sum of debits and credits in a money transfer transaction must be equal to zero.  Database constraints (e.g., primary key, foreign key) must not be violated.
*   **Isolation:** Transactions should be isolated from each other.  Concurrent transactions should not interfere with each other's execution.  It should appear to each transaction that it is the only transaction running on the system.
    *   **Example:**  If two transactions are transferring money between accounts, the result should be the same as if they were executed serially, one after the other.
*   **Durability:** Once a transaction is committed, its changes are permanent and should survive even system failures.  The database system must ensure that committed transactions are not lost.
    *   **Example:**  Once the money transfer transaction is committed, the changes to the bank accounts must be permanently stored, even if a power outage occurs shortly after.

### 4. Characterizing Schedules Based on Recoverability

*   **Schedule:** A schedule is a sequence of operations (read, write, commit, abort) from one or more transactions. It represents the interleaved execution of transactions.
*   **Recoverable Schedule:** A schedule is recoverable if, for each transaction *Tj* that reads a data item previously written by transaction *Ti*, the commit operation of *Ti* precedes the commit operation of *Tj*. This ensures that if *Tj* commits, *Ti* has already committed, and its changes are permanent.
    *   **Example (Recoverable):**
        *   T1: W(X)
        *   T2: R(X)
        *   T1: Commit
        *   T2: Commit
    *   **Example (Non-Recoverable):**
        *   T1: W(X)
        *   T2: R(X)
        *   T2: Commit
        *   T1: Abort  (T2 has read a value that is now rolled back, leaving the database inconsistent)

*   **Cascading Rollback:**  A cascading rollback occurs when the failure of one transaction leads to the rollback of other transactions that have read data written by the failed transaction. Cascading rollbacks can be inefficient and difficult to manage.
*   **Avoids Cascading Rollback (ACR) Schedule:**  A schedule avoids cascading rollback if, for each transaction *Tj* that reads a data item previously written by transaction *Ti*, the commit operation of *Ti* precedes the read operation of *Tj*.  This ensures that *Tj* only reads data that has already been committed. ACR schedules are always recoverable.
    *   **Example (ACR):**
        *   T1: W(X)
        *   T1: Commit
        *   T2: R(X)
        *   T2: Commit

*   **Strict Schedule:** A schedule is strict if, for each transaction *Tj* that reads or writes a data item previously written by transaction *Ti*, the commit or abort operation of *Ti* precedes the read or write operation of *Tj*.  Strict schedules simplify recovery because no transaction can read or write uncommitted data. Strict schedules are always ACR and recoverable.
    *   **Example (Strict):**
        *   T1: W(X)
        *   T1: Commit
        *   T2: R(X)
        *   T2: W(Y)
        *   T2: Commit

### 5. Characterizing Schedules Based on Serializability

*   **Serial Schedule:** A serial schedule is one in which the operations of each transaction are executed consecutively, without any interleaving. Transactions are executed one after the other.
*   **Serializable Schedule:** A schedule is serializable if its effect on the database is the same as some serial schedule. This means that the final state of the database after executing the schedule is equivalent to the final state after executing the same transactions in some serial order.
    *   **Why is Serializability Important?** Serializability ensures that concurrent transactions do not interfere with each other and that the database remains consistent.

*   **Conflict Serializability:** A schedule is conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting operations. Two operations are conflicting if:
    *   They belong to different transactions.
    *   They operate on the same data item.
    *   At least one of them is a write operation.
    *   **Example (Conflicting Operations):** T1: R(X) and T2: W(X) are conflicting. T1: W(X) and T2: R(X) are conflicting. T1: W(X) and T2: W(X) are conflicting. T1: R(X) and T2: R(X) are *not* conflicting.

*   **Precedence Graph:** A precedence graph is used to determine if a schedule is conflict serializable.
    *   **Nodes:**  Each transaction is represented by a node in the graph.
    *   **Edges:** An edge from *Ti* to *Tj* exists if an operation of *Ti* conflicts with an operation of *Tj* and the operation of *Ti* precedes the operation of *Tj* in the schedule.
    *   **If the precedence graph contains a cycle, the schedule is not conflict serializable.**
    *   **If the precedence graph is acyclic, the schedule is conflict serializable.**  A topological sort of the graph gives a serial schedule equivalent to the original schedule.

*   **View Serializability:**  A schedule is view serializable if it is view equivalent to some serial schedule.  Two schedules are view equivalent if:
    *   For each data item X, if transaction Ti reads the initial value of X in S, Ti also reads the initial value of X in S'.
    *   For each data item X, if transaction Ti reads a value written by transaction Tj in S, Ti also reads a value written by transaction Tj in S'.
    *   For each data item X, if transaction Ti performs the final write on X in S, Ti also performs the final write on X in S'.
    *   View Serializability is more general than Conflict Serializability. Every Conflict Serializable schedule is View Serializable, but not vice versa.

**Important Points to Remember:**

*   ACID properties are crucial for maintaining data consistency in database systems.
*   Concurrency control mechanisms are used to prevent interference between concurrent transactions.
*   Recoverability ensures that committed transactions are not lost and that uncommitted transactions are rolled back.
*   Serializability ensures that concurrent transactions have the same effect as if they were executed serially.
*   Understanding different types of schedules (recoverable, ACR, strict, serializable) is essential for designing reliable database systems.

---

### Practice Questions and Exercises:

**Question 1:**  Define a transaction and explain why it is important in database systems.

**Answer:** A transaction is a logical unit of work that performs a sequence of operations (read, write, update, delete) on a database.  It is important because it ensures data consistency and integrity by enforcing the ACID properties and providing mechanisms for recovery from failures.

**Question 2:**  Explain the Lost Update problem and provide an example.

**Answer:** The Lost Update problem occurs when two transactions read the same data, and then both update it based on the initial read value.  The second transaction's update overwrites the first transaction's update, resulting in lost data.

**Example:** T1 reads balance (100). T2 reads balance (100). T1 adds 50 (balance=150) and writes it. T2 adds 100 (balance=200) and writes it. T1's update is lost.

**Question 3:**  Describe the ACID properties of transactions.

**Answer:**
*   **Atomicity:** All operations in a transaction must either complete successfully or none must occur.
*   **Consistency:** A transaction must transform the database from one consistent state to another.
*   **Isolation:** Concurrent transactions should not interfere with each other.
*   **Durability:** Once a transaction is committed, its changes are permanent.

**Question 4:**  What is a recoverable schedule? Provide an example of a recoverable schedule and a non-recoverable schedule.

**Answer:** A recoverable schedule is one where, for each transaction *Tj* that reads a data item written by *Ti*, the commit operation of *Ti* precedes the commit operation of *Tj*.

*   **Recoverable:**
    *   T1: W(X)
    *   T2: R(X)
    *   T1: Commit
    *   T2: Commit
*   **Non-Recoverable:**
    *   T1: W(X)
    *   T2: R(X)
    *   T2: Commit
    *   T1: Abort

**Question 5:** What is the difference between conflict serializability and view serializability?

**Answer:** Conflict serializability is based on swapping non-conflicting operations to achieve a serial schedule. View serializability is based on ensuring that the final state of the database and the read/write dependencies between transactions are the same as some serial schedule.  View serializability is more general than conflict serializability. Every conflict serializable schedule is view serializable, but the reverse is not true.

**Question 6:**  Consider the following schedule:

*   T1: R(A)
*   T2: R(B)
*   T1: R(B)
*   T2: R(A)
*   T1: W(A)
*   T2: W(B)

Draw the precedence graph for this schedule. Is the schedule conflict serializable?

**Answer:**

*   **Precedence Graph:**
    *   Nodes: T1, T2
    *   Edges: T1 -> T2 (due to R1(A) and W2(A)) , T2 -> T1 (due to R2(B) and W1(B))
*   **Conflict Serializable?** No, the precedence graph contains a cycle (T1 -> T2 -> T1). Therefore, the schedule is not conflict serializable.
