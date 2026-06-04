---
title: "fdisk"
subject: "IT WORKSHOP"
module: "Module 4: Familiarizing basic Unix/Linux commands "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f97da"
status: "completed"
scrapedAt: "2026-05-23T16:07:33.650Z"
---
# IT WORKSHOP: Module 4 - Familiarizing Basic Unix/Linux Commands

## Topic: `fdisk` - Managing Disk Partitions

Welcome, everyone, to our exploration of fundamental Linux commands! Today, we’re diving into a crucial utility that forms the bedrock of how our operating systems store information: `fdisk`. Think of your computer's hard drive as a vast library. If you just throw all the books randomly onto shelves, finding anything becomes a nightmare, right? Disk partitioning is like organizing that library into distinct sections – one for fiction, one for non-fiction, one for reference, and so on. The `fdisk` command is our primary tool for managing these sections, or *partitions*, on our storage devices.

This topic directly ties into **Course Outcome 1 (CO1)**: "Experiment with the fundamental hardware components of a computer and how to interface them with software systems." Understanding `fdisk` allows us to see how the Linux operating system (software) interacts with and manages the physical hard drives (hardware). It’s a tangible example of that interface. It also supports **Course Outcome 2 (CO2)**: "Make use of the command line of Linux operating system and shell programming," as `fdisk` is a powerful command-line tool.

### What are Disk Partitions, Anyway?

Before we get our hands dirty with `fdisk`, let’s clarify what we’re talking about. A hard drive, whether it’s an old-school HDD or a speedy SSD, is essentially a large, blank slate. To make it useful for an operating system, we need to divide this slate into manageable chunks. These chunks are called **partitions**.

*   **Primary Partitions:** These are the main divisions of a hard disk. Historically, a disk could only have up to four primary partitions.
*   **Extended Partitions:** To overcome the four-primary partition limit, one of the primary partitions could be designated as an “extended” partition. This acts as a container, within which you can create multiple *logical partitions*. Think of it like a folder that can hold many documents, whereas primary partitions are like individual documents themselves.
*   **Logical Partitions:** These are created within an extended partition.

Each partition can then be formatted with a specific **file system** (like ext4, XFS, NTFS, FAT32) which dictates how data is organized and stored on that partition. The operating system uses these partitions to store its files, your programs, and your personal data.

### Why Do We Need `fdisk`?

`fdisk` is a powerful, albeit low-level, utility for manipulating disk partition tables. It’s been around since the early days of Unix and Linux, and while more modern tools like `parted` exist, `fdisk` is still widely used and understood. Its primary functions include:

*   **Creating new partitions:** When you get a new drive or want to reallocate space.
*   **Deleting existing partitions:** If you no longer need a particular section of your disk.
*   **Changing partition types:** Assigning specific characteristics to a partition, like whether it's for Linux, swap space, or another OS.
*   **Viewing partition information:** Checking the current layout of your disks.

The importance of `fdisk` in managing the fundamental hardware of our computer cannot be overstated, directly linking back to **CO1**. It's how we tell the hardware how to organize itself for the software to use.

### Getting Started with `fdisk`: The Basics

To use `fdisk`, you typically need superuser privileges (root access), because you’re making significant changes to your storage devices. You’ll usually preface the command with `sudo`.

The basic syntax is:

```bash
sudo fdisk /dev/sdX
```

Here, `/dev/sdX` represents the disk device you want to manage. The `sd` part is common for SCSI-like devices (which includes most modern SATA and USB drives), and `X` is a letter, starting with `a`, that identifies the specific disk. For example:

*   `/dev/sda`: The first detected SATA or SCSI disk.
*   `/dev/sdb`: The second detected SATA or SCSI disk.
*   `/dev/nvme0n1`: Often the first NVMe SSD.

**How to find your disk devices?** A quick way is to use `lsblk` or `fdisk -l`. `lsblk` provides a tree-like view of your block devices, showing disks and their partitions. `fdisk -l` lists all partition tables.

Let’s imagine you’ve just plugged in a new USB drive. You’d likely see it appear as `/dev/sdb` or `/dev/sdc`. **Crucially, be absolutely certain you are working with the correct device! If you run `fdisk` on the wrong disk, you could erase all your important data.** This is a critical point to remember, both for your practical work and for exams where understanding potential data loss is key.

#### Entering the `fdisk` Interactive Mode

When you run `sudo fdisk /dev/sdX`, you’re dropped into an interactive command prompt within `fdisk`. This prompt usually looks like this:

```
Welcome to fdisk (util-linux 2.34).
Changes will remain in memory only, until you write them and exit.

Device does not contain a recognized partition table.
Command (m for help):
```

Here, you’ll enter single-letter commands to perform various actions. Let’s explore the most common ones.

### Core `fdisk` Commands (Interactive Mode)

Once you are in the `fdisk` prompt (e.g., `Command (m for help):`), you can type a letter followed by Enter to execute a command.

*   **`m` (Help):** This is your best friend! Typing `m` will display a list of all available commands. Always refer to this if you're unsure.

*   **`p` (Print Partition Table):** This command is vital for understanding the current state of your disk. It will show you the existing partitions, their types, sizes, and start/end sectors.

    *Example:*
    ```
    Command (m for help): p
    Disk /dev/sda: 238.47 GiB, 256060514304 bytes, 500118192 sectors
    Disk model: Crucial_CT250MX
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: gpt
    Disk identifier: 3EC173F6-3F4D-42B1-A8A2-B2C4C8B7A1B3

    Device         Start       End   Sectors   Size Type
    /dev/sda1       2048   1050623   1048576   512M EFI System
    /dev/sda2    1050624 499990015 498939392 238G Linux filesystem
    ```
    Notice the `Disklabel type`. Modern systems often use `gpt` (GUID Partition Table), while older ones might use `mbr` (Master Boot Record). `fdisk` can handle both.

*   **`n` (New Partition):** This is how you create a new partition. When you enter `n`, `fdisk` will ask you a series of questions:
    *   **Partition type:** (primary/extended or just partition number for GPT)
        *   If using MBR, you'll be asked if it's primary or extended. Remember the limit of four primary partitions.
        *   If using GPT, you'll simply be asked for the partition number.
    *   **Partition number:** Choose a number for your new partition.
    *   **First sector:** This defines where the partition starts. `fdisk` will often suggest a default value (e.g., the next available unallocated space), which is usually fine.
    *   **Last sector or size:** You can specify the end of the partition by sector number or by providing a size (e.g., `+10G` for 10 Gigabytes, `+512M` for 512 Megabytes). `fdisk` will suggest the maximum available size if you just press Enter.

    *Analogy:* Creating a new partition is like deciding you need a new shelf in your library. You specify where it starts (its position), its size (how much space it occupies), and what type of books it will hold (partition type).

*   **`d` (Delete Partition):** Use this to remove an existing partition. `fdisk` will ask which partition number you want to delete. **Once deleted, the data on that partition is usually gone, unless you’re very careful and use recovery tools.** It’s like removing a shelf – everything on it is essentially inaccessible.

    *Important Note:* Deleting a partition doesn't immediately free up the space in a way that `fdisk` shows until you write the changes. It just marks the space as available.

*   **`t` (Change Partition Type):** This command allows you to change the hexadecimal code that identifies the type of a partition. For example, a common Linux filesystem type is `83`. A swap partition is typically `82`. For GPT disks, you’ll specify a UUID (Universally Unique Identifier) for the partition type, which `fdisk` will guide you through.

    *Connecting to CO1:* Changing partition types is a direct way of telling the hardware how the software intends to use that segment of storage. You might partition a drive for a different OS (like Windows, using NTFS type) or specifically for Linux swap space.

*   **`w` (Write Table to Disk and Exit):** This is the **final and most critical step** after you've made all your desired changes (creating, deleting, changing partitions). **Until you execute `w`, all your changes are only in memory and have not been applied to the actual disk.** This is a safety feature, preventing accidental changes from being permanent. Pressing `w` commits all your modifications and exits `fdisk`.

*   **`q` (Quit without Saving):** If you decide not to save your changes, or if you made a mistake and want to start over, use `q`. This is like closing a document without saving your work.

### Working with Disk Labels: MBR vs. GPT

`fdisk` can manage disks using either the older MBR (Master Boot Record) partitioning scheme or the newer GPT (GUID Partition Table) scheme.

*   **MBR:**
    *   Older standard.
    *   Limited to 2TB disk size maximum for a single partition.
    *   Supports only 4 primary partitions, or 3 primary and 1 extended (which can contain many logical partitions).
    *   Less robust error checking.

*   **GPT:**
    *   Modern standard, part of the UEFI specification.
    *   Supports disks much larger than 2TB.
    *   Allows for a virtually unlimited number of partitions (though the OS might impose its own limits, typically 128).
    *   Each partition has a unique GUID, making it more robust.
    *   Includes a backup of the partition table at the end of the disk for better data recovery.

When you first run `fdisk` on a disk that has no partition table, or if you want to change it, `fdisk` might prompt you about the partition table type. You can also explicitly create a new partition table using `o` (for MBR) or `g` (for GPT) at the `fdisk` prompt. If you are working with modern hardware and drives larger than 2TB, **GPT is generally the preferred and recommended choice.** This aligns with understanding how the system interfaces with modern hardware components, again linking to **CO1**.

### A Practical Example: Adding a New Partition

Let’s say you have a new 1TB drive, `/dev/sdb`, and you want to create a single partition on it for storing your media files.

1.  **Identify the disk:**
    ```bash
    sudo fdisk -l
    ```
    You see `/dev/sdb` listed as a 1TB disk with no partitions.

2.  **Start `fdisk`:**
    ```bash
    sudo fdisk /dev/sdb
    ```

3.  **Check the current state (optional but recommended):**
    ```
    Command (m for help): p
    ```
    You'll likely see a message indicating no partition table.

4.  **Create a new partition table (GPT is recommended for a new disk):**
    ```
    Command (m for help): g
    Created a new GPT disklabel (GUID: ...).
    ```

5.  **Create the new partition:**
    ```
    Command (m for help): n
    ```
    `fdisk` will likely ask: "Partition number (default 1):". Press Enter to accept the default `1`.
    Then it will ask: "First sector (default 2048):". Press Enter to accept the default.
    Finally, it will ask: "Last sector, +/-sectors or size{K,M,G,T,P} (default 1000408064):". To use the whole disk, press Enter. If you wanted, say, 500GB, you’d type `+500G`. Let’s assume you want the whole disk.

    Now, you’ll see something like:
    ```
    Created a new partition 1 of type 'Linux filesystem' and of size 931.5 GiB.
    ```

6.  **Verify the changes (optional):**
    ```
    Command (m for help): p
    ```
    You should now see your new partition, e.g., `/dev/sdb1`, taking up most of the disk space.

7.  **Write changes and exit:**
    ```
    Command (m for help): w
    ```
    The system will write the changes. You might see messages about the kernel recognizing the new partition table.

After exiting `fdisk`, the kernel is aware of the new partition, but it's not yet ready to store files. You need to **format** it. For a Linux filesystem, you’d typically use `mkfs`. For example, to format `/dev/sdb1` with the ext4 filesystem:

```bash
sudo mkfs.ext4 /dev/sdb1
```

Once formatted, you can mount it and start using it. This whole process, from partitioning with `fdisk` to formatting with `mkfs`, is a direct demonstration of **CO1** and **CO2**.

### Common Pitfalls and Exam Tips

*   **Device Name:** The most common mistake is running `fdisk` on the wrong disk (`/dev/sda` vs. `/dev/sdb`). **Always double-check with `lsblk` or `fdisk -l` before starting.** In exams, questions might test your awareness of this by presenting scenarios with multiple disks.
*   **`w` is Final:** Remember that `fdisk` changes are not permanent until you type `w`. This is a crucial safety mechanism. If a question asks "What command makes your partition changes permanent?", the answer is `w`.
*   **Formatting:** `fdisk` only manipulates the partition table. It does *not* format the partition. You must use a command like `mkfs` afterwards. This is a frequent exam question – distinguishing between partitioning and formatting.
*   **Partition Types:** Be aware of common partition type codes (e.g., `83` for Linux, `82` for Linux swap) if working with MBR, or understand the concept of UUIDs for GPT partition types.
*   **UEFI/GPT:** For modern systems, expect to work with GPT. Understanding the differences from MBR is important for **CO1**.

### Connecting to Textbooks

*   **Schneider & Gersting:** This book, while broader in scope, lays the foundation for understanding how operating systems manage hardware resources. Disk partitioning is a fundamental aspect of this resource management.
*   **Rothwell's "LINUX for Developers":** This is highly relevant. You’ll find detailed explanations of command-line utilities like `fdisk` and their role in system administration and development. Rothwell likely covers the commands and options we’ve discussed in depth. It directly supports **CO2**.
*   **Englander's "The Architecture of Computer Hardware, Systems Software, & Networking":** This reference book provides the crucial context for *why* partitioning is necessary. It explains how the physical disk is structured and how the operating system's software layer needs to interact with this hardware structure. Understanding `fdisk` is a direct application of these architectural principles, strengthening your grasp of **CO1**.

### Summary

`fdisk` is your command-line tool for manipulating disk partition tables on Unix/Linux systems. It allows you to view, create, delete, and modify partitions on your storage devices. Always use `sudo` for `fdisk` and be extremely careful to select the correct disk device. Remember the key commands: `p` for print, `n` for new, `d` for delete, `t` for type, `m` for help, `w` to save and exit, and `q` to quit without saving. Partitioning is a critical step before formatting and mounting a disk for use, directly showcasing the interface between hardware and software.

---

## Sample Questions with Answers

**1. Conceptual Question:**
What is the primary role of the `fdisk` command in a Linux system, and how does it relate to the concept of disk storage?

**Answer:**
The primary role of `fdisk` is to manage disk partition tables. It allows users to create, delete, modify, and view partitions on storage devices like hard drives and SSDs. This relates to disk storage by dividing a large, contiguous block of storage hardware into smaller, manageable logical units (partitions). Each partition can then be treated as an independent storage volume, allowing for organization, installation of different operating systems, or separation of data. Essentially, `fdisk` defines *how* the operating system sees and can use the raw storage space provided by the hardware.

**Reasoning:** This question tests understanding of `fdisk`'s core function and its connection to storage. The answer highlights partitioning as a logical division of physical space.

**2. Exam-Oriented Question:**
You are given a new, unformatted 2TB SSD. You need to prepare it to store user data in a Linux environment. Which partitioning scheme would you generally prefer for this SSD, and why? Briefly outline the steps you would take using `fdisk` to create a single partition covering the entire drive.

**Answer:**
For a new 2TB SSD, I would generally prefer the **GPT (GUID Partition Table)** partitioning scheme.
**Reasoning:** GPT is the modern standard, overcomes the 2TB partition limit of the older MBR scheme, supports a much larger number of partitions, and offers better data integrity and robustness due to unique identifiers (GUIDs) for each partition and a backup partition table. Since the SSD is 2TB, MBR would be at its limit, making GPT a more future-proof choice.

**Steps using `fdisk`:**
1.  **Identify the SSD:** Use `sudo fdisk -l` or `lsblk` to confirm the device name (e.g., `/dev/sdb`).
2.  **Start `fdisk`:** Run `sudo fdisk /dev/sdb`.
3.  **Create GPT partition table:** At the `fdisk` prompt, type `g` and press Enter to create a new GPT partition table.
4.  **Create a new partition:** Type `n` and press Enter. Accept the default partition number (usually `1`), the default first sector, and the default last sector (to use the entire drive).
5.  **Verify:** Type `p` and press Enter to review the partition table. You should see `/dev/sdb1` listed.
6.  **Save and exit:** Type `w` and press Enter to write the changes to disk and exit `fdisk`.
7.  **Format the partition:** After `fdisk` exits, format the new partition, e.g., `sudo mkfs.ext4 /dev/sdb1`.

**Reasoning:** This question assesses practical application and decision-making (MBR vs. GPT) based on hardware characteristics, as well as command sequence recall. It directly relates to **CO1** and **CO2**.

**3. Scenario Question:**
A user accidentally typed `fdisk /dev/sda` and then immediately typed `q` without entering any other commands. What is the likely outcome for the `/dev/sda` disk and its partitions?

**Answer:**
If the user immediately typed `q` after starting `fdisk /dev/sda` without making any changes or typing `w`, the likely outcome is that **no changes were made to the partition table of `/dev/sda`**. The `q` command exits `fdisk` without saving any modifications. The partition table remains in its original state, and no data is lost or altered as a direct result of this specific action.

**Reasoning:** This tests understanding of the `q` command's function and the non-destructive nature of `fdisk` until the `w` command is issued. It’s a common question to gauge user awareness of safety mechanisms.
