---
title: "SELinux."
subject: "FUNDAMENTALS OF CYBER SECURITY"
module: "Module 4: System Security:"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be56"
status: "completed"
scrapedAt: "2026-05-20T16:54:52.624Z"
---
# FUNDAMENTALS OF CYBER SECURITY
## Module 4: System Security:
## Topic: SELinux

---

### **1. Introduction to SELinux**

*   **What is SELinux?**
    *   SELinux (Security-Enhanced Linux) is a security architecture for Linux that is implemented as a kernel security module.
    *   It provides a flexible and powerful Mandatory Access Control (MAC) security mechanism.
    *   SELinux is designed to protect against common security vulnerabilities and to enforce least privilege principles.

*   **Why is SELinux Important?**
    *   **Defense in Depth:** SELinux adds an extra layer of security beyond traditional Discretionary Access Control (DAC) mechanisms (like file permissions).
    *   **Confining Malicious Processes:** Even if a process is compromised, SELinux can prevent it from accessing or modifying resources it's not explicitly allowed to interact with.
    *   **Enforcing System Policies:** It allows administrators to define granular security policies for what processes can do and what resources they can access.
    *   **Reducing Attack Surface:** By limiting the capabilities of processes, SELinux reduces the potential damage an attacker can cause.

*   **SELinux vs. Traditional DAC:**
    *   **DAC (Discretionary Access Control):** The owner of a resource (file, directory) determines who can access it and what permissions they have. This is the standard Unix file permission model (owner, group, others).
    *   **MAC (Mandatory Access Control):** System-wide policies, enforced by the kernel, dictate access permissions. Users and even the owners of resources cannot override these policies. SELinux is a MAC system.

---

### **2. Key Concepts and Definitions**

*   **Security Context (Label):**
    *   Every object (file, process, socket, etc.) in SELinux has a **security context**, also known as a **label**.
    *   A security context is a string composed of three parts:
        *   **User:** Represents an SELinux security user (e.g., `system_u`).
        *   **Role:** Represents a set of permissions that can be assigned to a user or process (e.g., `object_r`, `user_r`).
        *   **Type:** Represents the category of the object, determining what actions can be performed on it and by whom (e.g., `httpd_sys_content_t`, `httpd_t`).
    *   **Example:** `/var/www/html/index.html` might have the context `system_u:object_r:httpd_sys_content_t:s0`.

*   **Policy:**
    *   The **SELinux policy** is a set of rules that defines the allowed interactions between different security contexts.
    *   Policies specify what actions (e.g., read, write, execute, connect) a process of a certain type can perform on an object of another type.

*   **Type Enforcement (TE):**
    *   The most common type of SELinux policy.
    *   TE rules define allowed interactions between **types**.
    *   **Syntax:** `allow <source_type> <target_type>:<class> { <permissions> };`
        *   `allow httpd_t httpd_sys_content_t:file { getattr read open };`
        *   This rule allows an `httpd_t` process to get attributes, read, and open files labeled `httpd_sys_content_t`.

*   **Transitional Policy:**
    *   Allows a process to temporarily switch its type context under specific conditions.
    *   Useful for scenarios where a process needs to perform actions with a different set of privileges, then revert back.

*   **Role-Based Access Control (RBAC):**
    *   SELinux utilizes RBAC to assign roles to users and processes.
    *   Roles define the capabilities that a user or process can have.

*   **Security Identifier (SID):**
    *   A unique identifier assigned to each security context.
    *   Used internally by SELinux for efficient policy enforcement.

*   **Boolean:**
    *   SELinux booleans are on/off switches that allow administrators to customize SELinux behavior without recompiling the policy.
    *   They enable or disable specific types of access or functionality.
    *   **Example:** A boolean like `httpd_can_network_connect` could be enabled to allow the Apache web server (running as `httpd_t`) to establish network connections.

---

### **3. SELinux Modes**

*   SELinux can operate in three main modes:
    *   **Enforcing:** SELinux security policy is enforced. Access denials are logged, and the denied actions are prevented.
    *   **Permissive:** SELinux security policy is not enforced. Access denials are logged, but the denied actions are still allowed. This mode is useful for troubleshooting and debugging SELinux policies.
    *   **Disabled:** SELinux is completely turned off. No logging or enforcement occurs. This is generally not recommended for production systems.

*   **Checking SELinux Status:**
    ```bash
    getenforce
    ```

*   **Changing SELinux Mode (temporarily):**
    ```bash
    sudo setenforce 0  # Sets to Permissive
    sudo setenforce 1  # Sets to Enforcing
    ```

*   **Changing SELinux Mode (permanently):**
    *   Edit the SELinux configuration file: `/etc/selinux/config`
    *   Change the `SELINUX=` line to `enforcing`, `permissive`, or `disabled`.
    *   A reboot is required for this change to take effect.

---

### **4. Managing SELinux**

*   **Viewing Security Contexts:**
    *   **`ls -Z`:** Displays the SELinux security context of files and directories.
        ```bash
        ls -Z /var/www/html/
        # Example Output:
        # drwxr-xr-x. root root system_u:object_r:httpd_sys_content_t:s0 .
        # -rw-r--r--. root root system_u:object_r:httpd_sys_content_t:s0 index.html
        ```
    *   **`ps auxZ`:** Displays the SELinux security context of running processes.
        ```bash
        ps auxZ | grep httpd
        # Example Output:
        # system_u:system_r:httpd_t:s0       root      1234  0.0  0.1 123456 7890 ?        Ss   Oct01   0:00 /usr/sbin/httpd
        ```

*   **Changing Security Contexts (Temporarily):**
    *   **`chcon`:** Changes the SELinux security context of a file or directory.
        ```bash
        # Change context of a file to be httpd_sys_content_t
        sudo chcon -t httpd_sys_content_t /var/www/html/new_page.html

        # Recursively change context of a directory
        sudo chcon -R -t httpd_sys_content_t /var/www/html/
        ```
    *   **Note:** `chcon` changes are temporary and will be lost if the file is relabeled by the `restorecon` command or if the filesystem is relabeled.

*   **Restoring Default Security Contexts:**
    *   **`restorecon`:** Restores the default SELinux security contexts for files and directories based on the SELinux policy.
        ```bash
        # Restore context for a specific file
        sudo restorecon /var/www/html/new_page.html

        # Restore context recursively for a directory
        sudo restorecon -R /var/www/html/
        ```

*   **Managing SELinux Booleans:**
    *   **`getsebool -a`:** Lists all SELinux booleans and their current state.
    *   **`getsebool <boolean_name>`:** Shows the state of a specific boolean.
    *   **`setsebool <boolean_name> <on|off>`:** Sets a boolean to on or off (temporarily).
    *   **`setsebool -P <boolean_name> <on|off>`:** Sets a boolean to on or off persistently (survives reboots).
        ```bash
        # Check if httpd can access network
        getsebool httpd_can_network_connect

        # Allow httpd to connect to the network (temporarily)
        sudo setsebool httpd_can_network_connect on

        # Allow httpd to connect to the network (persistently)
        sudo setsebool -P httpd_can_network_connect on
        ```

*   **Checking SELinux Denials (Audit Log):**
    *   SELinux denial messages are logged in the audit log.
    *   **`ausearch -m AVC,USER_AVC -ts recent`:** Searches for recent Access Vector Cache (AVC) denials.
    *   **`grep avc /var/log/audit/audit.log`:** Another way to find AVC denials.
    *   **`audit2allow`:** A utility that reads audit logs and can suggest SELinux policy rules to allow the denied actions.
        ```bash
        # Example: Run an httpd process that tries to write to a protected directory
        # Check audit log for denials
        sudo ausearch -m AVC,USER_AVC -ts today | audit2allow

        # This might output something like:
        # #------------- httpd_t --------------
        # allow httpd_t httpd_sys_rw_content_t:dir { add_name create link remove_name rename unlink write };

        # You can then use this output to create a custom policy module
        ```

*   **Creating Custom SELinux Policy Modules:**
    *   This is an advanced topic but crucial for tailoring SELinux to specific application needs.
    *   Involves writing `.te` (type enforcement) files, compiling them into `.pp` (policy package) files, and loading them into the kernel.
    *   The `audit2allow` tool is often the starting point for creating these modules.

---

### **5. Common SELinux Scenarios and Examples**

*   **Web Server (Apache/Nginx) Access:**
    *   By default, web servers expect web content to reside in directories with the `httpd_sys_content_t` context.
    *   If you place web files in a non-standard location (e.g., `/srv/mywebapp`), you'll need to:
        1.  Change the context of the new directory and its contents:
            ```bash
            sudo semanage fcontext -a -t httpd_sys_content_t "/srv/mywebapp(/.*)?"
            sudo restorecon -R /srv/mywebapp
            ```
        2.  Ensure the web server process (`httpd_t`) has the necessary permissions to read from this new context. This might involve checking SELinux booleans or creating custom policy rules if needed.

*   **SSH Access:**
    *   If SSHD (`sshd_t`) needs to access files outside its default locations (e.g., user's home directories with custom contexts), you might encounter denials.
    *   You might need to adjust booleans or contexts for user home directories (`user_home_t`, `user_home_dir_t`).

*   **Database Access:**
    *   Database processes (e.g., `mysqld_t`) have specific contexts for accessing data directories and network ports.
    *   If you move the database data directory, you'll need to relabel it to the appropriate context (e.g., `mysqld_db_t`).

*   **Cron Jobs:**
    *   Cron jobs run under specific SELinux contexts. If a cron job needs to access resources with non-default contexts, you might need to:
        *   Ensure the cron job script has the correct execute context.
        *   Modify SELinux booleans or policy rules to allow the cron job's context to interact with the target resources.

---

### **6. Best Practices and Important Points to Remember**

*   **Understand SELinux Modes:** Always know whether SELinux is enforcing or permissive. Start with permissive when implementing or troubleshooting.
*   **Use `restorecon`:** When unsure of file contexts or after changing permissions, use `restorecon` to apply the default policy.
*   **Leverage `semanage fcontext`:** For permanent changes to file contexts, use `semanage fcontext` instead of `chcon`. This ensures contexts are reapplied after filesystem relabeling.
*   **Monitor Audit Logs:** Regularly check `/var/log/audit/audit.log` for SELinux denials.
*   **Use `audit2allow` Wisely:** Use `audit2allow` to understand denials and generate policy suggestions, but carefully review and test any custom policy modules before deploying them. Avoid blindly applying all suggestions.
*   **Test Changes:** After making any SELinux configuration changes, thoroughly test the affected applications and services.
*   **Document SELinux Configurations:** Keep records of any custom policies, booleans, or context changes you make.
*   **Keep SELinux Policy Up-to-Date:** Ensure your system has the latest SELinux policy updates from your distribution.
*   **Disable SELinux as a Last Resort:** Only disable SELinux if absolutely necessary and with a clear understanding of the security implications.

---

### **7. Practice Questions and Exercises**

**Question 1:**
What is the primary difference between Discretionary Access Control (DAC) and Mandatory Access Control (MAC) in the context of system security?

**Answer:**
DAC (like traditional Unix permissions) allows the owner of a resource to control access. MAC, enforced by systems like SELinux, uses system-wide policies to dictate access, and users cannot override these policies.

---

**Question 2:**
You have a web application running on Apache. You've placed your application files in `/srv/mywebapp`. When you try to access them through your browser, you get a "Forbidden" error, and SELinux logs an AVC denial. What are the likely SELinux-related steps you need to take to resolve this?

**Answer:**
1.  **Check current contexts:** Use `ls -Z /srv/mywebapp` to see the current SELinux context of your files.
2.  **Set the correct context:** Use `semanage fcontext -a -t httpd_sys_content_t "/srv/mywebapp(/.*)?"` to tell SELinux that files in this directory should be treated as web content.
3.  **Apply the context:** Use `restorecon -R /srv/mywebapp` to apply the newly defined context to the files.
4.  **Check booleans:** Ensure that any relevant SELinux booleans are enabled (e.g., `httpd_can_network_connect` if your app needs to connect to the network).

---

**Question 3:**
Which SELinux mode logs access denials but still allows the actions to occur?
    a) Enforcing
    b) Permissive
    c) Disabled
    d) Secure

**Answer:**
b) Permissive

---

**Question 4:**
You want to ensure that a specific SELinux boolean, `use_ssh_certs`, remains enabled even after a system reboot. Which command would you use?

**Answer:**
`sudo setsebool -P use_ssh_certs on`

---

**Question 5:**
What is the purpose of the `restorecon` command in SELinux?

**Answer:**
The `restorecon` command is used to reset the SELinux security contexts of files and directories to their default values as defined in the SELinux policy files (`file_contexts`). This is useful after manual context changes with `chcon` or when recovering from potential context issues.

---

**Exercise:**
1.  On a Linux system with SELinux enabled, check the current SELinux mode.
2.  Try to create a file in a directory that has a restrictive SELinux context (e.g., try writing to `/etc/` as a non-root user, though this is a DAC issue, imagine a scenario where a process is not allowed to write to a directory). *Alternatively, try placing an HTML file in `/tmp` and configuring Apache to serve from it without changing contexts.*
3.  If you encounter an SELinux denial, find it in the audit log using `ausearch`.
4.  Use `audit2allow` to suggest a rule that would permit the denied action (for demonstration purposes only; do not apply it directly to a production system without careful review).

---

### **Conclusion**

SELinux is a powerful security mechanism that significantly enhances the security posture of Linux systems by enforcing fine-grained access control policies. While it can add complexity, understanding its core concepts, modes, and management tools is crucial for any cybersecurity professional working with Linux environments. By properly configuring and monitoring SELinux, organizations can build more resilient and secure systems against a wide range of threats.
