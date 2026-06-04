---
title: "Permission bits and Access Control Lists"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afda"
status: "completed"
scrapedAt: "2026-05-20T16:14:40.466Z"
---
# OPERATING SYSTEMS - Module 4: I/O System - Permission Bits and Access Control Lists

## Introduction

This module delves into the crucial topic of security within the I/O system, specifically focusing on permission bits and Access Control Lists (ACLs). These mechanisms control access to files and directories, ensuring data integrity and system security. Understanding these concepts is essential for building secure and reliable operating systems.

## Learning Outcomes

Upon completion of this module, you should be able to:

*   **Define** permission bits and Access Control Lists (ACLs).
*   **Explain** how permission bits and ACLs control access to files and directories.
*   **Interpret** permission bits in octal and symbolic notations.
*   **Apply** commands to modify permission bits and ACLs.
*   **Compare and contrast** permission bits and ACLs, highlighting their strengths and weaknesses.
*   **Analyze** scenarios and determine the appropriate access control mechanism.

## 1. Permission Bits

### 1.1 Definition

Permission bits are a simple form of access control implemented in many Unix-like operating systems. They specify what actions a user, a group, or all other users can perform on a particular file or directory.

### 1.2 Key Concepts

*   **File Owner:** The user who created the file or directory.
*   **File Group:** A group of users associated with the file or directory.
*   **Other:** All users who are neither the owner nor members of the group.
*   **Permissions:**
    *   **Read (r):** Allows the user to view the contents of a file or list the contents of a directory.
    *   **Write (w):** Allows the user to modify the contents of a file or create/delete files within a directory.
    *   **Execute (x):** Allows the user to execute a file (if it's an executable) or enter a directory (if it's a directory).

### 1.3 Representation

Permission bits are represented in two common notations:

*   **Symbolic Notation:** A string of characters representing the permissions for the owner, group, and others.  Example: `rwxr-xr--`
    *   `d` at the beginning indicates a directory. `-` indicates a regular file.
    *   The first three characters (`rwx`) represent permissions for the **owner**.
    *   The next three characters (`r-x`) represent permissions for the **group**.
    *   The last three characters (`r--`) represent permissions for **others**.
    *   `-` means the permission is denied.

*   **Octal Notation:** A three-digit number where each digit represents the permissions for the owner, group, and others.
    *   **4:** Read permission
    *   **2:** Write permission
    *   **1:** Execute permission
    *   The octal number is the sum of the permissions granted.
        *   `rwx` = 4 + 2 + 1 = 7
        *   `r-x` = 4 + 0 + 1 = 5
        *   `r--` = 4 + 0 + 0 = 4
        *   `-wx` = 0 + 2 + 1 = 3
        *   `---` = 0 + 0 + 0 = 0

    *   Example: `754` means the owner has `rwx` (7), the group has `r-x` (5), and others have `r--` (4).

### 1.4 Commands for Modifying Permissions

*   **`chmod` (change mode):** Used to change the permission bits of a file or directory.

    *   **Using Octal Notation:**
        ```bash
        chmod 755 myfile.txt  # Owner: rwx, Group: r-x, Others: r-x
        chmod 644 myfile.txt  # Owner: rw-, Group: r--, Others: r--
        ```
    *   **Using Symbolic Notation:**
        *   `u`: User (owner)
        *   `g`: Group
        *   `o`: Others
        *   `a`: All (user, group, and others)
        *   `+`: Add permission
        *   `-`: Remove permission
        *   `=`: Set permission

        ```bash
        chmod u+x myfile.txt   # Add execute permission for the owner
        chmod g-w myfile.txt   # Remove write permission for the group
        chmod o=r myfile.txt   # Set read-only permission for others
        chmod a+r myfile.txt   # Add read permission for everyone
        ```

### 1.5 Special Permissions

Besides standard permissions, there are special permission bits:

*   **SUID (Set User ID):**  When set on an executable, the process runs with the privileges of the file owner, not the user executing the process. Indicated by `s` instead of `x` for the user/owner permission.
*   **SGID (Set Group ID):** When set on an executable, the process runs with the privileges of the file group. When set on a directory, newly created files within that directory inherit the group ownership of the directory. Indicated by `s` instead of `x` for the group permission.
*   **Sticky Bit:** When set on a directory, only the file owner, directory owner, or root user can delete or rename files within that directory.  Indicated by `t` instead of `x` for the others permission.  Commonly used on `/tmp` directory.

### 1.6 Example

Let's say you have a file named `report.txt`. Initially, its permissions are `-rw-r--r--`.

*   The owner has read and write permissions.
*   The group has read-only permissions.
*   Others have read-only permissions.

If you want to give the group write access, you can use `chmod g+w report.txt`.  The permissions would then become `-rw-rw-r--`.

If you want to represent that change in octal, the initial permissions were `644`, and the new permissions are `664`.

## 2. Access Control Lists (ACLs)

### 2.1 Definition

ACLs are a more granular and flexible access control mechanism compared to permission bits. They allow specifying permissions for individual users or groups, beyond the simple owner, group, and others.

### 2.2 Key Concepts

*   **ACL Entries:** Each entry in an ACL specifies the permissions for a particular user or group.
*   **Default ACLs:** Can be set on directories.  New files and subdirectories created within a directory with a default ACL will inherit the permissions specified in the default ACL.
*   **Mask:**  Limits the permissions granted by ACL entries. It acts as a "ceiling" for the effective permissions of users and groups.

### 2.3 Commands for Managing ACLs

*   **`getfacl` (get file ACL):** Used to view the ACL of a file or directory.
*   **`setfacl` (set file ACL):** Used to modify the ACL of a file or directory.

### 2.4 Usage Examples

*   **`getfacl myfile.txt`:** Displays the ACL for `myfile.txt`.  Typical output might look like this:

```
# file: myfile.txt
# owner: user1
# group: group1
user::rw-
user:user2:r--
group::r--
group:group2:rw-
mask::rw-
other::r--
```

    * `user::rw-` - The owner of the file (user1) has read and write access.
    * `user:user2:r--` - The user "user2" has read-only access.
    * `group::r--` - The owning group (group1) has read-only access.
    * `group:group2:rw-` - The group "group2" has read and write access.
    * `mask::rw-` -  The mask limits group and named user permissions to read and write.
    * `other::r--` -  Other users have read-only access.

*   **`setfacl -m u:user2:rw- myfile.txt`:**  Grants read and write access to the user `user2` on `myfile.txt`. The `-m` option means "modify".

*   **`setfacl -x u:user2 myfile.txt`:**  Removes the ACL entry for the user `user2` from `myfile.txt`. The `-x` option means "remove".

*   **`setfacl -b myfile.txt`:**  Removes all ACL entries from `myfile.txt` (removes the ACL entirely, reverting to basic permission bits). The `-b` option means "remove all".

*   **Setting default ACLs on a directory:**
    ```bash
    setfacl -d -m u:user3:rwx mydirectory
    ```
    This sets the default ACL on `mydirectory` such that any new files or subdirectories created within `mydirectory` will have user `user3` granted read, write, and execute permissions.

### 2.5 Important Considerations with ACLs and the Mask

The ACL mask limits the permissions that can be granted to users and groups specified in ACL entries. The mask acts as an upper bound or ceiling.

*   **`getfacl` output shows the mask:** The output of `getfacl` shows the current mask permissions. This is important to note.

*   **Modifying the mask:** You can change the mask with `setfacl -m m::permissions filename`. For example:

```bash
setfacl -m m::r-- myfile.txt  # Set the mask to read-only
```

*   **Impact on permissions:** If a user or group is granted `rwx` permissions in their ACL entry, but the mask is set to `r--`, their effective permissions will only be `r--`. The mask effectively overrides the granted permissions.

*   **Default Mask:** If no mask is explicitly set, the system typically uses a default mask based on the file's permissions.

### 2.6 Example

Imagine you have a directory `project_files` where several users collaborate. You want `user1` (the project lead) to have full control, `user2` to have read-write access, and all other project members (group `project_group`) to have read-only access.

1.  **Set the basic permissions:** `chmod 750 project_files` (owner rwx, group r-x, others ---). This gives the owner (say, `user1`) full control, the group (e.g., `project_group`) read and execute (listing), and others no access.

2.  **Set ACLs for finer control:**

    *   `setfacl -m u:user2:rw- project_files` (gives `user2` read-write access)
    *   `setfacl -m g:project_group:r-- project_files` (confirms read-only access for the `project_group` *after* the basic permissions)

3. **Set a default ACL:**

    * `setfacl -d -m u:user2:rw- project_files`
    This gives `user2` read-write access by default to all newly created files.

## 3. Comparison: Permission Bits vs. ACLs

| Feature          | Permission Bits                                     | ACLs                                                                                                  |
|-------------------|------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Granularity        | Limited (owner, group, others)                       | Fine-grained (individual users and groups)                                                             |
| Complexity         | Simple to understand and manage                       | More complex, requires understanding of ACL entries and the mask                                       |
| Flexibility        | Inflexible, difficult to handle complex scenarios      | Highly flexible, allows complex access control policies                                              |
| Number of Entries | Fixed (3 categories)                               | Variable, can have multiple entries for different users and groups                                        |
| Overhead           | Low                                                  | Higher overhead due to managing multiple entries                                                    |
| Use Cases          | Simple access control needs                           | Complex collaboration environments, shared directories, situations requiring specific user/group permissions |

## 4. Analyzing Scenarios and Choosing the Right Mechanism

*   **Scenario 1: Personal Files:** You want to protect your personal files from being accessed by other users on the system. Permission bits are generally sufficient for this.  Setting permissions like `600` (owner rw, no one else) is common.

*   **Scenario 2: Shared Project Directory:** Multiple users are working on a project, and some users need read-write access while others only need read access. ACLs are better suited here because they can specify different permissions for individual users and groups.

*   **Scenario 3: Temporary Files:** You want to ensure that only the creator of a file in `/tmp` can delete it. Use the sticky bit on the `/tmp` directory: `chmod +t /tmp`.

*   **Scenario 4: Execute a Program with Elevated Privileges:** A program needs to perform actions requiring root privileges, but you don't want users to run the program as root directly. Use the SUID bit to allow users to run the program with the privileges of the program's owner (e.g., root). `chmod u+s program`. **Important Security Consideration**: SUID binaries should be carefully audited and secured to prevent vulnerabilities.

## 5. Important Points to Remember

*   **Least Privilege Principle:** Always grant the minimum necessary permissions to users and processes.
*   **Understanding the Mask:**  The ACL mask can significantly impact the effective permissions. Be sure to check and adjust the mask if necessary.
*   **Default ACLs:** Using default ACLs simplifies access control management for new files and directories.
*   **Security Auditing:** Regularly review and audit permissions and ACLs to ensure they are correctly configured and that no unintended access is granted.

## 6. Practice Questions & Exercises

**Q1:** What is the octal representation of the permission string `rwxr-x--x`?

**Answer:** 751

**Q2:** How do you grant read and execute permissions to the group for a file named `data.txt` using symbolic notation?

**Answer:** `chmod g+rx data.txt`

**Q3:** What command would you use to view the ACL of a directory named `shared_folder`?

**Answer:** `getfacl shared_folder`

**Q4:**  You grant `user1` read-write-execute permissions on `myfile.txt` using `setfacl -m u:user1:rwx myfile.txt`. However, when you check the ACL with `getfacl`, `user1` only has read and execute permissions. What might be the problem?

**Answer:** The ACL mask might be limiting the permissions. Check the mask using `getfacl myfile.txt` and adjust it if necessary using `setfacl -m m::rwx myfile.txt` to allow full `rwx` permissions for `user1`.

**Q5:** What is the difference between using `chmod` and `setfacl` for managing file permissions? Give an example of when `setfacl` is a better choice.

**Answer:** `chmod` changes the basic permission bits (owner, group, others), providing limited granularity. `setfacl` allows for more fine-grained control by specifying permissions for individual users or groups. `setfacl` is a better choice when you need to grant specific permissions to a user who is not the owner or a member of the file's group. For example, granting read-only access to `user2` on a file that's owned by `user1` and belongs to `group1` requires `setfacl`.

**Q6:** How does the sticky bit affect directory access? Provide an example of a common use case.

**Answer:**  The sticky bit, when set on a directory, restricts file deletion or renaming within that directory to only the file owner, directory owner, or root user. A common use case is the `/tmp` directory, where users can create temporary files, but cannot delete files created by other users, even if they have write permissions to the directory.

**Q7:** Explain the purpose of SUID and SGID bits. What are the security considerations when using them?

**Answer:** The SUID bit allows a program to run with the privileges of the file's owner, and the SGID bit allows a program to run with the privileges of the file's group. Security considerations include the risk of privilege escalation. If a program with SUID set contains vulnerabilities, a malicious user could exploit them to gain root access. SUID binaries should be audited for security flaws before deployment and carefully maintained.

These notes provide a comprehensive overview of permission bits and ACLs, covering the key concepts, commands, and considerations for securing the I/O system in an operating system. Remember to practice using the commands and analyzing different scenarios to solidify your understanding.
