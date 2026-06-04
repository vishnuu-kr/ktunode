---
title: "Concurrency Control with Two-Phase Locking Techniques- Database Recovery management: Deferred update-immediate update- shadow paging."
subject: "DATABASE MANAGEMENT SYSTEMS"
module: "Module 3: Database Design Theory & Normalization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af78"
status: "completed"
scrapedAt: "2026-05-20T16:12:03.472Z"
---
# DATABASE MANAGEMENT SYSTEMS - Module 3: Database Design Theory & Normalization
## Topic: Concurrency Control with Two-Phase Locking Techniques & Database Recovery Management

### Learning Outcomes:

*   Understand the need for concurrency control in multi-user database systems.
*   Explain the Two-Phase Locking (2PL) protocol and its variants.
*   Understand and explain deadlock and starvation problems related to concurrency control
*   Understand the concepts of deferred update, immediate update, and shadow paging recovery techniques.
*   Describe the advantages and disadvantages of each recovery technique.
*   Compare and contrast different recovery techniques.
*   Be able to apply the concepts of concurrency control and recovery management to practical scenarios.

---

## I. Concurrency Control with Two-Phase Locking Techniques

### 1. Need for Concurrency Control

*   **Definition:** Concurrency control is the process of managing simultaneous operations on a database to prevent data inconsistencies and ensure data integrity in a multi-user environment.
*   **Why it's needed:**
    *   **Lost Update Problem:** Two transactions reading and updating the same data, resulting in one update being overwritten.
    *   **Dirty Read Problem:** A transaction reads data that has been updated by another transaction that has not yet committed. If the uncommitted transaction aborts, the first transaction has read incorrect data.
    *   **Incorrect Summary Problem:** One transaction calculates an aggregate function while another transaction is updating the same data, leading to an incorrect result.
    *   **Unrepeatable Read Problem:** A transaction reads the same data twice, but the data has been changed by another committed transaction in between the reads, resulting in different values.

*   **Example (Lost Update):**
    *   Transaction T1: Reads account balance of $100.
    *   Transaction T2: Reads account balance of $100.
    *   Transaction T1: Adds $50 to the balance (new balance: $150).
    *   Transaction T2: Adds $25 to the balance (new balance: $125).
    *   If T1 commits, then T2 commits, the final balance in the database is $125 instead of the correct $175.

### 2. Locking Mechanism

*   **Definition:** A locking mechanism is a concurrency control technique that restricts access to database resources to prevent conflicts.
*   **Lock Types:**
    *   **Shared Lock (Read Lock):** Allows multiple transactions to read the same data concurrently.
    *   **Exclusive Lock (Write Lock):**  Allows only one transaction to write to the data. No other transaction can read or write.
*   **Locking Rules:**
    *   A transaction must acquire a lock before accessing a data item.
    *   A shared lock can be granted on a data item if no transaction holds an exclusive lock on it.
    *   An exclusive lock can be granted on a data item if no transaction holds any lock on it.
    *   A transaction must release all its locks when it completes (commits or aborts).

### 3. Two-Phase Locking (2PL) Protocol

*   **Definition:** A locking protocol that guarantees serializability. A transaction follows two phases:
    *   **Growing Phase:**  A transaction can acquire locks but cannot release any locks.
    *   **Shrinking Phase:**  A transaction can release locks but cannot acquire any new locks.
*   **Types of 2PL:**
    *   **Basic 2PL:** Follows the strict two-phase locking rule. Guarantees serializability but can lead to deadlock.
    *   **Strict 2PL:**  Holds all exclusive locks until the transaction commits or aborts. Prevents cascading aborts.  (Cascading aborts happen when if a transaction T1 reads from a transaction T2, and T2 later aborts, then T1 must also abort.).
    *   **Conservative 2PL (Static 2PL):**  Acquires all necessary locks before the transaction starts.  Guarantees serializability and deadlock freedom, but can be inefficient.
*   **Advantages of 2PL:**
    *   Guarantees serializability (if transactions follow the protocol, the resulting schedule is serializable).
*   **Disadvantages of 2PL:**
    *   Can lead to deadlock.
    *   Can lead to starvation (a transaction might wait indefinitely for a lock).

### 4. Deadlock and Starvation

*   **Deadlock:**  A situation where two or more transactions are blocked indefinitely, waiting for each other to release locks.
    *   **Example:**
        *   Transaction T1:  Holds lock on data item A, waiting for lock on data item B.
        *   Transaction T2:  Holds lock on data item B, waiting for lock on data item A.

*   **Deadlock Detection:** Regularly check the lock wait-for graph to detect cycles (which indicate deadlock).
*   **Deadlock Prevention:** Techniques to avoid deadlock by preventing one of the deadlock conditions. Examples:
    *   **Lock Ordering:** Impose a total order on data items and require transactions to acquire locks in that order.
    *   **Timeout:**  If a transaction waits for a lock for too long, it is automatically aborted and restarted.
*   **Deadlock Resolution:** Aborting one or more transactions involved in the deadlock.  The chosen transaction is rolled back, releasing its locks. The victim selection criteria often considers factors such as the age of the transaction, the number of resources it holds, and the cost of rollback.
*   **Starvation:**  A situation where a transaction is repeatedly denied access to a data item and cannot proceed.
    *   **Causes:**  Poor scheduling policies or continuous requests from higher-priority transactions.
    *   **Solutions:**  Prioritize transactions based on waiting time, aging mechanism (gradually increasing priority of waiting transactions).

### 5. Example of 2PL

Transaction T1:
```
Lock-X(A);
Read(A);
A = A + 10;
Write(A);
Lock-S(B);
Read(B);
Unlock(A);  // End of Growing Phase, beginning of Shrinking Phase (Basic 2PL)
B = B * 2;
Write(B);
Unlock(B);
Commit;
```

Transaction T2:
```
Lock-S(A);
Read(A);
Lock-X(C);
Read(C);
C = C + A;
Write(C);
Unlock(A);
Unlock(C);
Commit;
```

This schedule is valid under basic 2PL.  Note how a lock is released on A before acquiring a lock on C in T2.  In Strict 2PL, the Locks on A and C would be held until the Commit.

### 6. Important Points to Remember:

*   2PL guarantees serializability.
*   Strict 2PL prevents cascading aborts.
*   2PL does not guarantee deadlock freedom.
*   Deadlock can be detected and resolved by aborting transactions.
*   Starvation can occur if a transaction is repeatedly denied access to a resource.

### Practice Questions:

1.  Explain the difference between shared and exclusive locks.
2.  Describe the two phases of the Two-Phase Locking (2PL) protocol.
3.  What are the advantages and disadvantages of strict 2PL?
4.  How can deadlock be detected in a database system?
5.  Explain what Starvation is.

**Answers:**

1.  A shared lock allows multiple transactions to read data concurrently, while an exclusive lock allows only one transaction to write data.
2.  The two phases of 2PL are the growing phase (acquiring locks) and the shrinking phase (releasing locks).
3.  Advantages of strict 2PL: Guarantees serializability, prevents cascading aborts. Disadvantages: Can lead to deadlock, reduced concurrency.
4.  Deadlock can be detected by using a wait-for graph and looking for cycles.
5.  Starvation is a situation where a transaction is repeatedly denied access to a data item and cannot proceed, even though the resources are available at different times.

---

## II. Database Recovery Management

### 1. Introduction to Database Recovery

*   **Definition:** Database recovery is the process of restoring the database to a consistent state after a failure.
*   **Types of Failures:**
    *   **Transaction Failure:** Logical error within a transaction or system error during transaction execution.
    *   **System Failure (Soft Crash):**  Loss of volatile memory (RAM) but persistent storage (disk) remains intact.
    *   **Media Failure (Hard Crash):**  Failure of the persistent storage (disk) itself. The most serious.

### 2. Recovery Techniques Overview

*   Different recovery techniques provide different trade-offs between performance, complexity, and the extent to which they can recover from different types of failures.

### 3. Deferred Update (NO-UNDO/REDO)

*   **Definition:**  Changes are not physically written to the database until after the transaction reaches its commit point. The database is only updated *after* a successful commit.
*   **Mechanism:**
    *   Updates are first written to a log file in temporary storage.
    *   Log records contain information needed to REDO the operation.
    *   At commit, log records are forced to disk.
    *   Only then are the updates applied to the database.
*   **Recovery Process:**
    *   If a failure occurs before commit, the log records for the transaction are discarded (NO-UNDO).
    *   If a failure occurs after commit, the log records are used to REDO the changes to the database.
*   **Advantages:**
    *   Simple to implement.
    *   Minimizes the amount of data written to disk during transaction execution.
*   **Disadvantages:**
    *   Changes not visible until commit, which can delay other transactions.
    *   Requires a REDO phase, which can be time-consuming after a failure.

*   **Example:**
    *   Transaction T1 updates account A.
    *   Log record: `<START T1>`, `<A, old_value, new_value>`, `<COMMIT T1>`.
    *   If system crashes before `<COMMIT T1>`, no changes are made to the database.
    *   If system crashes after `<COMMIT T1>`, use `<A, old_value, new_value>` in the log to reapply the update to A.

### 4. Immediate Update (UNDO/REDO)

*   **Definition:** Changes are immediately written to the database as the transaction executes, even before the transaction commits.
*   **Mechanism:**
    *   Updates are written to the database immediately.
    *   Log records contain information needed to UNDO and REDO the operation.
    *   Log records are written to disk before the database is updated.
*   **Recovery Process:**
    *   If a failure occurs before commit, the log records are used to UNDO the changes to the database.
    *   If a failure occurs after commit, the log records are used to REDO the changes to the database (to ensure durability if the changes weren't fully written to the database).
*   **Advantages:**
    *   Changes are visible sooner to other transactions.
*   **Disadvantages:**
    *   More complex to implement than deferred update.
    *   Requires both UNDO and REDO phases, which can be time-consuming.
    *   More frequent disk writes during transaction execution.

*   **Example:**
    *   Transaction T1 updates account A.
    *   Log record: `<START T1>`, `<A, old_value, new_value>`, `<COMMIT T1>`.
    *   If system crashes before `<COMMIT T1>`, use `<A, old_value, new_value>` in the log to undo the changes to A (restore the old value).
    *   If system crashes after `<COMMIT T1>`, use `<A, old_value, new_value>` in the log to redo the changes to A (if necessary, to ensure the update persists).

### 5. Shadow Paging

*   **Definition:**  Maintains two copies of each page (or block) of the database: the current page (the shadow page) and a new page. Changes are made only to the new page.  The old pages act as backup.
*   **Mechanism:**
    *   The database is organized as a set of fixed-size pages.
    *   A directory contains pointers to the current pages.
    *   When a transaction starts, the directory is copied (shadow directory).
    *   During the transaction, changes are made to new pages, and entries in the shadow directory are updated to point to the new pages.
    *   On commit, the shadow directory becomes the current directory, making all changes visible.
    *   On abort, the shadow directory is discarded, and the original directory is retained.
*   **Recovery Process:**
    *   On commit, only the directory needs to be updated.
    *   On abort, simply discard the shadow directory.
*   **Advantages:**
    *   Simple recovery.
    *   No UNDO/REDO operations are needed.
*   **Disadvantages:**
    *   Data fragmentation (dead pages) can occur.  Requires garbage collection.
    *   Overhead of copying the directory for each transaction.
    *   Difficult to implement with complex database structures.

*   **Example:**
    *   Transaction T1 updates page P1.
    *   Copy page P1 to P1'.  Make changes to P1'.
    *   Update the shadow directory to point to P1' instead of P1.
    *   On commit, the shadow directory becomes the new directory, making P1' visible.
    *   On abort, discard the shadow directory, reverting to the original directory pointing to P1.

### 6. Comparison of Recovery Techniques

| Feature        | Deferred Update (NO-UNDO/REDO) | Immediate Update (UNDO/REDO) | Shadow Paging |
|----------------|--------------------------------|--------------------------------|---------------|
| Complexity      | Simple                       | Moderate                       | Moderate      |
| Disk Writes     | Fewer                        | More                           | Varies        |
| Recovery Speed  | Moderate                       | Moderate                       | Fast          |
| Data Visibility | Delayed                      | Immediate                      | Delayed       |
| Overhead        | Low                          | Moderate                       | High          |
| Undo Needed?    | No                           | Yes                            | No            |
| Redo Needed?    | Yes                          | Yes                            | No            |
| Fragmentation  | Low                          | Low                            | High          |

### 7. Important Points to Remember:

*   Deferred update delays database modifications until commit.
*   Immediate update writes changes to the database immediately.
*   Shadow paging maintains two copies of each page.
*   Each technique has its own advantages and disadvantages regarding complexity, performance, and recovery capabilities.

### Practice Questions:

1.  Explain the difference between deferred update and immediate update recovery techniques.
2.  What are the advantages and disadvantages of shadow paging?
3.  What is the role of the log file in deferred update and immediate update recovery techniques?
4.  Which recovery technique requires both UNDO and REDO operations?
5.  Explain what a media failure is and the recovery strategy for such a failure.

**Answers:**

1.  Deferred update writes changes to the database only after commit, while immediate update writes changes immediately.
2.  Advantages of shadow paging: Simple recovery, no UNDO/REDO needed. Disadvantages: Data fragmentation, overhead of directory copying.
3.  The log file stores information needed to undo or redo database changes in case of failure.  Deferred update uses the log to redo changes after commit, while immediate update uses it to undo changes before commit and possibly redo changes after commit.
4.  Immediate update requires both UNDO and REDO operations.
5.  Media failure is the failure of the physical storage medium (e.g., hard drive). Recovery usually involves restoring from a backup and replaying the transaction log from the backup point.  This usually requires sophisticated and lengthy database down-time.
