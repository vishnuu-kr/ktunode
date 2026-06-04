---
title: "Access control matrix"
subject: "INFORMATION SECURITY"
module: "Module 1: Introduction to Information Security "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c1da"
status: "completed"
scrapedAt: "2026-05-20T17:07:30.973Z"
---
# Information Security: Module 1 - Introduction to Information Security
## Topic: Access Control Matrix

---

### 1. Understanding the Access Control Matrix

The Access Control Matrix is a fundamental concept in information security that defines how subjects (users, processes, or programs) are granted or denied access to objects (files, directories, devices, or other resources) and what operations they are allowed to perform on those objects.

**Key Concepts:**

*   **Subjects:** Entities that request access to resources.
    *   **Examples:** A user logging into a system, a program requesting to read a file, a process executing a command.
*   **Objects:** Resources that are being protected.
    *   **Examples:** Files (e.g., `confidential_report.docx`), directories (e.g., `/home/user/private`), printers, network devices, databases.
*   **Operations/Rights/Permissions:** Actions that a subject can perform on an object.
    *   **Examples:**
        *   **Read:** View the contents of a file.
        *   **Write:** Modify the contents of a file.
        *   **Execute:** Run a program.
        *   **Delete:** Remove a file.
        *   **Create:** Create a new file or directory.
        *   **List:** View the names of files in a directory.
        *   **Change Permissions:** Modify the access rights of others to an object.

---

### 2. Structure of the Access Control Matrix

The Access Control Matrix is typically represented as a two-dimensional table.

*   **Rows:** Represent the subjects.
*   **Columns:** Represent the objects.
*   **Cells:** At the intersection of a subject row and an object column, the cell contains the set of allowed operations (permissions) for that subject on that object.

**Conceptual Representation:**

| Subject   | Object 1 (File A) | Object 2 (Directory B) | Object 3 (Printer) | ... |
| :-------- | :---------------- | :--------------------- | :----------------- | :-- |
| User 1    | Read, Write       | Read, List             | Print              | ... |
| User 2    | Read              | Read, Execute          |                    | ... |
| Admin     | Read, Write, Delete, Change Permissions | Read, Write, List, Change Permissions | Print, Manage      | ... |
| Process X | Read              |                        |                    | ... |
| ...       | ...               | ...                    | ...                | ... |

**Important Note:**
In a practical implementation, the matrix can be very large and sparse (many cells are empty or have no permissions). Therefore, different data structures are used to store and manage access control information efficiently.

---

### 3. How the Access Control Matrix Works

When a subject requests an operation on an object, the system consults the Access Control Matrix:

1.  **Identify the Subject:** The system determines which row corresponds to the requesting subject.
2.  **Identify the Object:** The system determines which column corresponds to the requested object.
3.  **Check Permissions:** The system looks at the cell at the intersection of the subject's row and the object's column.
4.  **Grant or Deny:** If the requested operation is listed in the cell, access is granted. If the operation is not listed, or the cell is empty, access is denied.

**Example Scenario:**

*   **Subject:** `Alice` (User)
*   **Object:** `confidential_report.docx` (File)
*   **Requested Operation:** `Write`

**Action:** The system looks up Alice's row and the `confidential_report.docx` column. If the cell contains `Write` (along with other permissions), Alice is allowed to modify the file. If it only contains `Read`, or if the cell is empty, Alice's write request will be denied.

---

### 4. Implementations and Variations of the Access Control Matrix

While the conceptual matrix is useful for understanding, real-world systems use more efficient methods for storing and managing access control information due to the potential size and sparsity.

**a) Access Control Lists (ACLs)**

*   **Description:** ACLs are associated with **objects**, rather than subjects. Each object has a list of subjects and the permissions they are granted.
*   **Structure:** A list attached to each object.
*   **Example (for `confidential_report.docx`):**
    *   `Alice`: `Read`, `Write`
    *   `Bob`: `Read`
    *   `Everyone`: `None`
*   **Advantages:** More space-efficient for objects with few users having specific permissions. Easier to determine who has access to a specific object.
*   **Disadvantages:** Can be difficult to determine all the objects a specific user has access to (requires iterating through all objects).

**b) Capability Lists (or Capability-Based Security)**

*   **Description:** Capabilities are associated with **subjects**. A capability is essentially a "token" or "key" that grants a subject specific rights to a specific object. The subject must possess the capability to perform the operation.
*   **Structure:** Each subject has a list of capabilities it holds.
*   **Example (for `Alice`):**
    *   Capability to `Read`, `Write` on `confidential_report.docx`
    *   Capability to `List` on `/home/alice/documents`
*   **Advantages:** More efficient for determining all objects a subject can access.
*   **Disadvantages:** Can be complex to manage and revoke capabilities. Security of the capability itself is crucial.

**c) Role-Based Access Control (RBAC)**

*   **Description:** Instead of assigning permissions directly to individual users, permissions are assigned to **roles**. Users are then assigned to one or more roles. This simplifies management, especially in large organizations.
*   **Structure:**
    *   Users are assigned to Roles.
    *   Roles are assigned Permissions (operations on objects).
*   **Example:**
    *   **Role:** `Accountant`
        *   **Permissions:** `Read` `financial_data.xlsx`, `Write` `expense_reports.xlsx`
    *   **User:** `Alice`
        *   **Assigned Role:** `Accountant`
    *   **User:** `Bob`
        *   **Assigned Role:** `Accountant`, `Manager`
*   **Advantages:** Highly scalable, easier to manage permissions, reduces administrative overhead, promotes consistency.
*   **Disadvantages:** Can be less granular than direct user-permission assignments if not designed carefully.

**d) Attribute-Based Access Control (ABAC)**

*   **Description:** Access decisions are based on evaluating policies that use attributes of the user, the object, the requested action, and the environment.
*   **Structure:** Policies that define rules based on attributes.
*   **Example Policy:** "Allow `Engineer` role to `Read` any `Source Code` file if the `Project Status` attribute is `Active` and the `Time of Day` attribute is between 9 AM and 5 PM."
*   **Advantages:** Extremely flexible and granular, allows for dynamic and context-aware access control.
*   **Disadvantages:** Can be complex to design and implement policies.

---

### 4. Importance and Goals of Access Control

*   **Confidentiality:** Ensuring that only authorized subjects can access sensitive information.
*   **Integrity:** Ensuring that only authorized subjects can modify or delete information, preventing unauthorized changes.
*   **Availability:** Ensuring that authorized subjects can access and use resources when they need them (though excessive restrictions can impact availability).
*   **Non-repudiation:** Preventing subjects from denying having performed an action (often supported by logging and auditing access).
*   **Least Privilege:** Granting subjects only the minimum permissions necessary to perform their intended functions. This minimizes the potential damage if a subject's account is compromised.
*   **Separation of Duties:** Ensuring that critical tasks require more than one person to complete, preventing a single individual from committing fraud or error undetected.

---

### 5. Practice Questions

1.  What are the two primary components of the Access Control Matrix?
2.  Give an example of a Subject and an Object in an information security context.
3.  List three common operations (permissions) that can be associated with files.
4.  Explain the difference between Access Control Lists (ACLs) and Capability Lists.
5.  Why is Role-Based Access Control (RBAC) often preferred in larger organizations?
6.  What is the principle of "least privilege" and why is it important in access control?

---

### 6. Answers to Practice Questions

1.  The two primary components are **Subjects** (who is accessing) and **Objects** (what is being accessed).
2.  **Subject:** A user named `David`. **Object:** A file named `customer_data.csv`.
3.  Three common operations are: **Read**, **Write**, and **Execute**. (Other valid answers include Delete, Create, List, Change Permissions, etc.)
4.  **ACLs** are associated with objects and list the subjects that can access them and their permissions. **Capability Lists** are associated with subjects and are like tokens that grant specific rights to objects.
5.  RBAC is preferred because it simplifies management by grouping users into roles and assigning permissions to roles. This reduces the administrative overhead of managing individual user permissions, especially as the number of users grows.
6.  The principle of "least privilege" means granting a subject only the minimal set of permissions necessary to perform its authorized tasks. It's important because it limits the potential damage that can be caused if a subject's account is compromised or if the subject makes a mistake.

---

### 7. Important Points to Remember

*   The Access Control Matrix is a conceptual model; real systems use variations like ACLs, capabilities, RBAC, or ABAC for efficiency.
*   Access control is crucial for maintaining confidentiality, integrity, and availability of information.
*   Always strive to implement the principle of **least privilege**.
*   Understanding the relationship between subjects, objects, and operations is fundamental to access control.
*   RBAC is a powerful abstraction that significantly simplifies security management.

---
