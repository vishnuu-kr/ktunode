---
title: "Synthetic Full Backups"
subject: "STORAGE SYSTEMS"
module: "Module 3: Business Continuity, Backup and Recovery:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cac5"
status: "completed"
scrapedAt: "2026-05-20T17:27:40.706Z"
---
# STORAGE SYSTEMS: Module 3: Business Continuity, Backup and Recovery

## Topic: Synthetic Full Backups

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   **Understand the concept of synthetic full backups and how they differ from traditional full backups.**
*   **Explain the process of creating a synthetic full backup.**
*   **Identify the advantages and disadvantages of using synthetic full backups.**
*   **Recognize the scenarios where synthetic full backups are particularly beneficial.**
*   **Differentiate synthetic full backups from incremental backups and differential backups.**

---

### 1. Introduction to Synthetic Full Backups

**What is a Synthetic Full Backup?**

A synthetic full backup is a backup method that creates a full backup of your data without performing a full data read from the source every time. Instead, it combines an existing full backup with subsequent incremental or differential backups to construct a new, current full backup image.

**Key Concept:** It's a *synthesized* or *constructed* full backup, not a direct copy of the entire dataset from the source.

**Contrast with Traditional Full Backups:**

*   **Traditional Full Backup:** Reads and copies *all* selected data from the source to the backup destination. This happens every time a full backup is scheduled.
*   **Synthetic Full Backup:** Leverages previously existing backup data (a prior full backup and incremental/differential backups) to create a new full backup. Only the *changes* since the last full backup (or the last synthetic full backup) are read from the source.

---

### 2. The Process of Creating a Synthetic Full Backup

The creation of a synthetic full backup involves two main phases:

**Phase 1: Initial Full Backup**

1.  **First Backup:** A traditional full backup is performed to establish the baseline. This is the *only* time the entire dataset is read from the source.
2.  **Subsequent Incremental/Differential Backups:** After the initial full backup, regular incremental or differential backups are taken.
    *   **Incremental Backup:** Backs up only the data that has changed since the *last* backup (full, differential, or incremental).
    *   **Differential Backup:** Backs up only the data that has changed since the *last full backup*.

**Phase 2: Synthetic Full Backup Creation**

This phase happens on the backup server or storage system, not on the production server.

1.  **Selection:** The backup software identifies the original full backup and all incremental/differential backups taken since that full backup.
2.  **Combination:** The backup software on the backup server (or a dedicated backup appliance) accesses the backup storage.
    *   It reads the original full backup.
    *   It then reads each incremental or differential backup taken *after* that full backup.
    *   It combines (synthesizes) the data from these individual backup sets to create a new, complete backup image.
3.  **New Full Backup:** This newly created image is then written to the backup storage as a "new" full backup.

**Example Scenario:**

Let's say you back up your server data daily.

*   **Day 1 (Sunday):** Traditional Full Backup. Backup image: `Full_Sun`.
*   **Day 2 (Monday):** Incremental Backup. Backs up only changes since Sunday. Backup image: `Incr_Mon`.
*   **Day 3 (Tuesday):** Incremental Backup. Backs up only changes since Monday. Backup image: `Incr_Tue`.
*   **Day 4 (Wednesday):** Synthetic Full Backup.
    *   Backup software reads `Full_Sun`.
    *   Reads `Incr_Mon` and applies its changes to `Full_Sun`.
    *   Reads `Incr_Tue` and applies its changes to the combined image.
    *   Creates a new full backup image: `SyntheticFull_Wed`. This `SyntheticFull_Wed` now represents a complete snapshot of your data as of Wednesday, without reading all data from the original server.
*   **Day 5 (Thursday):** Incremental Backup. Backs up changes since Wednesday. Backup image: `Incr_Thu`.

**Important Note:** For a synthetic full backup to be created, you need the original full backup and *all* subsequent incremental/differential backups to be available.

---

### 3. Advantages of Synthetic Full Backups

*   **Reduced Source Server Load:** The primary benefit is that the production server only needs to perform incremental or differential backups, which read significantly less data compared to a full backup. This minimizes the impact on server performance, CPU, I/O, and network bandwidth during the backup window.
*   **Faster Backup Windows:** Since only incremental/differential data is read from the source, the backup process from the source server is much quicker.
*   **Faster Restore Times (Potentially):** A synthetic full backup is a single, consolidated backup image. This means that to restore your data to a specific point in time, you only need to restore this single full backup file, rather than the original full backup plus a chain of incremental/differential backups. This can significantly speed up recovery.
*   **More Frequent Full Backups:** Because the burden on the source server is reduced, you can schedule synthetic full backups more frequently (e.g., weekly or even daily) while still maintaining the performance benefits of incremental backups. This improves your recovery point objectives (RPOs).
*   **Consolidated Backup Files:** Over time, the synthetic full backup process consolidates multiple backup pieces into a single, manageable full backup file, simplifying management.

---

### 4. Disadvantages of Synthetic Full Backups

*   **Increased Backup Server/Appliance Load:** The process of synthesizing the full backup occurs on the backup server or storage system. This requires more processing power, memory, and I/O capacity on the backup infrastructure.
*   **Dependency on Backup Infrastructure:** The success of a synthetic full backup relies heavily on the capabilities and performance of the backup server and its storage.
*   **Slower Initial Full Backup:** The very first backup in the chain will always be a traditional, potentially lengthy, full backup.
*   **More Complex Setup:** Implementing and managing synthetic full backups can be more complex than traditional full backups, requiring careful configuration of backup software and policies.
*   **Potential for Longer Synthetic Full Creation Time:** If the backup infrastructure is not adequately provisioned, the process of synthesizing the full backup can be time-consuming.

---

### 5. When to Use Synthetic Full Backups

Synthetic full backups are ideal in scenarios where:

*   **Minimizing production server impact is critical:** For servers with high utilization, sensitive applications, or strict performance SLAs.
*   **Backup windows are limited:** When the time available for backups is short, incremental/differential backups from the source are essential.
*   **Faster restore times are a priority:** When quick recovery from a full backup is a business requirement.
*   **Frequent full backup cycles are desired:** To improve RPOs without overloading production systems.
*   **Bandwidth is a constraint:** Reducing the amount of data read from the production network.

---

### 6. Synthetic Full Backups vs. Incremental vs. Differential Backups

| Feature             | Traditional Full Backup                                    | Incremental Backup                                     | Differential Backup                                    | Synthetic Full Backup                                                                                                  |
| :------------------ | :--------------------------------------------------------- | :----------------------------------------------------- | :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **Data Read from Source** | All data                                                   | Only data changed since the *last* backup              | Only data changed since the *last full* backup         | Only data changed since the *last backup* (incremental) or *last full* backup (differential)                         |
| **Backup Size**     | Largest                                                    | Smallest                                               | Medium                                                 | Varies (depends on the data changed since the last full/synthetic full)                                              |
| **Restore Process** | Restore one full backup                                    | Restore full backup + all subsequent incrementals      | Restore full backup + the *last* differential backup   | Restore one synthetic full backup                                                                                      |
| **Restore Speed**   | Fast                                                       | Slowest (requires multiple restores)                   | Medium                                                 | Fast (potentially faster than traditional full if the synthetic full is more recent than the traditional full)       |
| **Impact on Source**| High                                                       | Low                                                    | Medium                                                 | Low                                                                                                                    |
| **Impact on Backup Server** | Low                                                        | Low                                                    | Medium                                                 | High (for synthesizing)                                                                                                |
| **Frequency**       | Less frequent (e.g., weekly) due to resource impact        | Frequent (e.g., daily)                                 | Frequent (e.g., daily)                                 | Can be frequent (e.g., daily/weekly) due to reduced source impact                                                      |
| **Dependency**      | None                                                       | Depends on full and all previous incrementals          | Depends on full and the last differential              | Depends on the original full and all subsequent incrementals/differentials to create the synthetic full               |

---

### 7. Key Points to Remember

*   **Synthetic full backups offload the "full" backup creation from the production server to the backup infrastructure.**
*   **They are built by combining a base full backup with subsequent incremental or differential backups.**
*   **The primary benefit is reduced load on the production server and shorter backup windows.**
*   **Restoration from a synthetic full backup is typically faster than restoring from a chain of incrementals.**
*   **They require robust backup server hardware and efficient backup software.**
*   **The initial full backup is always a traditional, full data read from the source.**

---

### Practice Questions and Exercises

**Question 1:**
What is the primary advantage of using synthetic full backups over traditional full backups from the perspective of the production server?

**Answer 1:**
The primary advantage is the **reduced impact on the production server**. Synthetic full backups only require incremental or differential backups to be read from the source, which is significantly less data than a traditional full backup. This leads to less CPU, I/O, and network utilization on the production server during the backup window.

---

**Question 2:**
Describe the steps involved in creating a synthetic full backup, assuming you already have a traditional full backup and several incremental backups.

**Answer 2:**
The backup software on the backup server will:
1.  Locate the original full backup.
2.  Locate all incremental (or differential) backups that have been taken since that original full backup.
3.  Read the data from the original full backup.
4.  Apply the changes from each subsequent incremental/differential backup sequentially to the data from the original full backup.
5.  Create and store a new, consolidated backup image which represents a complete, current full backup.

---

**Question 3:**
If a company experiences frequent hardware failures and needs to restore data quickly, which backup strategy is generally more beneficial: a chain of incremental backups or synthetic full backups? Explain why.

**Answer 3:**
**Synthetic full backups** are generally more beneficial for quick restores. This is because restoring from a synthetic full backup involves retrieving and applying a single, consolidated backup image. In contrast, restoring from a chain of incremental backups requires restoring the initial full backup and then sequentially restoring each subsequent incremental backup, which is a more time-consuming and complex process.

---

**Question 4:**
What are the potential downsides of synthetic full backups?

**Answer 4:**
The potential downsides include:
*   **Increased load on the backup server/storage:** The processing power and I/O required to synthesize the full backup are significant.
*   **Dependency on backup infrastructure:** Performance and reliability of the backup system are crucial.
*   **More complex setup and management.**
*   **The initial full backup is still a traditional, potentially long, process.**

---

**Question 5:**
A backup policy dictates a full backup every Sunday, with incremental backups every other day. The company wants to minimize production server impact. How could synthetic full backups be implemented here?

**Answer 5:**
Instead of performing a traditional full backup every Sunday, the company could:
1.  Perform an initial traditional full backup on the first Sunday.
2.  Perform incremental backups on Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday.
3.  On the *next* Sunday (or any scheduled full backup day), the backup software would synthesize a new full backup by combining the initial full backup with all the incremental backups taken throughout the week. This new synthetic full backup would then serve as the new base for subsequent incremental backups, eliminating the need to read all data from the production server each Sunday.

---
