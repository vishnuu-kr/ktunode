---
title: "Differential Backups"
subject: "STORAGE SYSTEMS"
module: "Module 3: Business Continuity, Backup and Recovery:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cac4"
status: "completed"
scrapedAt: "2026-05-20T17:27:40.010Z"
---
# Storage Systems: Module 3 - Business Continuity, Backup, and Recovery

## Topic: Differential Backups

---

### 1. Introduction to Differential Backups

Differential backups are a crucial component of a comprehensive backup strategy, offering a balance between full backups and incremental backups. They aim to reduce backup time and storage space compared to full backups, while simplifying the restore process compared to incremental backups.

**Key Concepts:**

*   **Backup Strategy:** A plan outlining how data will be protected and restored in the event of data loss.
*   **Data Loss:** The unintentional or unauthorized deletion, corruption, or inaccessibility of data.
*   **Business Continuity:** The ability of an organization to continue its critical business functions during and after a disruptive event.
*   **Disaster Recovery:** The process of restoring IT infrastructure and data after a disaster.

---

### 2. How Differential Backups Work

Differential backups capture all data that has changed **since the last full backup**.

**Core Mechanism:**

1.  **Full Backup (Base Backup):** The first backup taken is a full backup of all selected data. This establishes a baseline.
2.  **Differential Backup 1:** Captures all changes made to the data since the **last full backup**.
3.  **Differential Backup 2:** Captures all changes made to the data since the **last full backup** (which is the same as the last differential backup taken, as it references the original full backup).
4.  **And so on...** Each subsequent differential backup continues to back up all changes since the original full backup.

**Important Distinction:**

*   **Differential vs. Incremental:** Unlike incremental backups, which back up changes since the *previous backup* (whether full or incremental), differential backups *always* reference the **last full backup**.

**Example:**

Let's assume you have a folder with files A, B, and C.

*   **Day 1 (Full Backup):** Files A, B, C are backed up.
*   **Day 2 (Differential Backup):** File A is modified. The differential backup will contain the modified File A.
*   **Day 3 (Differential Backup):** File B is deleted, and File C is modified. The differential backup will contain the modified File A, the deleted File B, and the modified File C. It contains *all* changes since Day 1.

---

### 3. Advantages of Differential Backups

*   **Faster Backups than Full Backups:** Only changed data since the last full backup is backed up, significantly reducing backup time and resource utilization compared to repeated full backups.
*   **Simpler Restore Process than Incremental Backups:** To restore data to a specific point in time, you only need the **last full backup** and the **most recent differential backup**. This is simpler than managing a chain of incremental backups.
*   **Reduced Backup Window:** By backing up only changes since the last full backup, the time required for each backup job is reduced, allowing for more frequent backups.
*   **Less Storage Space than Full Backups:** While differential backups grow over time, they generally consume less storage space than performing a full backup every time.

---

### 4. Disadvantages of Differential Backups

*   **Larger Backup Sizes Over Time:** As more changes accumulate since the last full backup, the size of differential backups will progressively increase. This can lead to longer backup times and higher storage consumption if full backups are not performed regularly.
*   **Restores Still Dependent on Full Backup:** While simpler than incremental, the restore process still requires the initial full backup. If the full backup is corrupted or lost, you cannot restore using the differential backups.
*   **Potentially Slower Restores than Incremental (in some specific scenarios):** If you need to restore to a very recent point in time and have many differential backups, the restore process might involve applying a larger amount of data from the most recent differential backup compared to a single incremental backup.

---

### 5. Restore Process with Differential Backups

Restoring data using differential backups is straightforward:

1.  **Restore the Last Full Backup:** This brings the system back to the state at the time of the full backup.
2.  **Restore the Most Recent Differential Backup:** This applies all changes that have occurred since the last full backup.

**Example of Restore:**

Continuing the previous example:

*   **Last Full Backup:** Day 1 (A, B, C)
*   **Last Differential Backup:** Day 3 (modified A, deleted B, modified C)

To restore to the state on Day 3:

1.  Restore the Day 1 Full Backup. The system now has original A, B, C.
2.  Apply the Day 3 Differential Backup. This overwrites A with its modified version, restores B (as it was deleted in the differential backup, meaning its absence from the full backup is now accounted for by the differential needing to bring it back to the state *since* the full backup - *Correction: Differential backup will contain all changes since the last full backup. If a file was deleted after the full backup, the differential backup will reflect that deletion. Therefore, the restore process would involve applying the differential backup that accurately represents the state including the deletion.* Let's refine this understanding.

    **Refined Restore Understanding for Deleted Files:**
    When a file is deleted after a full backup, a differential backup that captures that change will typically contain metadata indicating the file's deletion. When restoring, this metadata is applied, effectively removing the file from the restored dataset if it existed in the full backup.

    Let's re-evaluate the example with a clearer understanding of deletions in differential backups:

    *   **Day 1 (Full Backup):** Files A, B, C.
    *   **Day 2 (Differential Backup):** File A is modified. Diff Backup 1 contains modified A.
    *   **Day 3 (Differential Backup):** File B is deleted, File C is modified. Diff Backup 2 contains modified A, the *deletion* of B, and modified C.

    **Restore to Day 3 state:**
    1.  Restore Day 1 Full Backup (A, B, C).
    2.  Apply Day 3 Differential Backup. This will:
        *   Update A to its modified version.
        *   Remove B (as indicated by the differential backup reflecting its deletion since the full backup).
        *   Update C to its modified version.

    The result is a system with modified A, no B, and modified C, accurately reflecting the state on Day 3.

---

### 6. Best Practices for Differential Backups

*   **Establish a Regular Full Backup Schedule:** To prevent differential backups from becoming excessively large, perform full backups periodically (e.g., weekly, monthly).
*   **Consider the Backup Window:** Ensure your differential backup jobs can complete within the allocated backup window.
*   **Monitor Backup Growth:** Keep an eye on the size of your differential backups to anticipate storage needs and identify potential issues.
*   **Test Restores Regularly:** The most crucial aspect of any backup strategy is ensuring that restores work correctly.

---

### 7. When to Use Differential Backups

Differential backups are a good choice for:

*   **Organizations that need a balance between backup speed and restore simplicity.**
*   **Situations where the backup window is a concern, but not as critical as with daily incremental backups.**
*   **When you want to avoid the complexity of managing a long chain of incremental backups.**
*   **As part of a hybrid backup strategy (e.g., weekly full, daily differential).**

---

### 8. Comparison with Other Backup Types

| Feature            | Full Backup                                  | Differential Backup                               | Incremental Backup                                        |
| :----------------- | :------------------------------------------- | :------------------------------------------------ | :-------------------------------------------------------- |
| **Data Backed Up** | All selected data                            | Changes since the last **full** backup            | Changes since the **previous backup** (full or incremental) |
| **Backup Speed**   | Slowest                                      | Faster than full, slower than incremental         | Fastest                                                   |
| **Storage Space**  | Highest                                      | Moderate (grows over time)                        | Lowest                                                    |
| **Restore Speed**  | Fastest                                      | Faster than incremental (fewer files to process)  | Slowest (requires multiple files)                         |
| **Restore Complexity** | Simplest (one file)                          | Simple (two files: full + last differential)      | Complex (requires full + all subsequent incrementals)     |
| **Resource Usage** | Highest                                      | Moderate                                          | Lowest                                                    |

---

### 9. Practice Questions & Exercises

**Question 1:**
You perform a full backup on Monday. On Tuesday, you modify File X. On Wednesday, you modify File Y and delete File Z. Which files would be included in the differential backup taken on Wednesday, and what is it backed up against?

**Answer 1:**
The differential backup on Wednesday would include the modified File X, the modified File Y, and the deletion of File Z. It is backed up against the **last full backup** (taken on Monday).

**Question 2:**
Describe the process of restoring data to the state it was in on Tuesday, given a full backup on Monday and a differential backup on Tuesday.

**Answer 2:**
1.  Restore the full backup from Monday.
2.  Restore the differential backup from Tuesday.

**Question 3:**
What is the primary advantage of a differential backup over a full backup in terms of backup time?

**Answer 3:**
The primary advantage is that a differential backup only backs up data that has changed since the last full backup, rather than backing up all selected data again. This significantly reduces the backup time.

**Question 4:**
What is the main disadvantage of differential backups compared to incremental backups in terms of storage space over time?

**Answer 4:**
The main disadvantage is that differential backups grow in size over time as more changes accumulate since the last full backup. Incremental backups, by contrast, only back up changes since the *previous* backup, keeping their individual file sizes smaller.

---

### 10. Important Points to Remember

*   **Differential backup tracks changes since the LAST FULL backup.**
*   Restoring requires the **last full backup** and the **most recent differential backup**.
*   Differential backups offer a good compromise between backup speed, storage space, and restore simplicity.
*   Regularly scheduled **full backups** are crucial to manage the size of differential backups.
*   Always **test your restore process** to ensure data can be recovered.

---
