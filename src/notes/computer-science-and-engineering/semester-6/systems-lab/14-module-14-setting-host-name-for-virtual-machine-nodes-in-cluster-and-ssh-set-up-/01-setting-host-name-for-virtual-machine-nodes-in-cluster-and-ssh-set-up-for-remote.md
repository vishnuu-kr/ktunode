---
title: "Setting host name for virtual machine nodes in cluster and ssh set up for remote login."
subject: "SYSTEMS LAB"
module: "Module 14: Setting host name for virtual machine nodes in cluster and ssh set up for remote login."
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8c04a"
status: "completed"
scrapedAt: "2026-05-20T16:57:42.534Z"
---
# SYSTEMS LAB: Module 14 - Virtual Machine Hostnames & SSH Setup

## Topic: Setting Host Names for Virtual Machine Nodes in a Cluster and SSH Setup for Remote Login

This module focuses on essential configurations for managing virtual machine (VM) nodes within a cluster, specifically addressing how to assign meaningful hostnames and establish secure remote access via SSH. This is crucial for effective administration, communication between nodes, and simplifying cluster management tasks.

---

### **Learning Outcomes:**

By the end of this module, you will be able to:

*   **Understand the importance of hostnames in a cluster environment.**
*   **Identify and utilize appropriate methods for setting hostnames on VM nodes.**
*   **Configure SSH for secure remote login between VM nodes.**
*   **Troubleshoot common issues related to hostname resolution and SSH connectivity.**
*   **Generate and manage SSH keys for passwordless authentication.**

---

### **1. The Importance of Hostnames in a Cluster Environment**

In a cluster, multiple machines (nodes) work together to achieve a common goal. Meaningful hostnames are vital for:

*   **Identification:** Uniquely identifying each node within the cluster.
*   **Communication:** Enabling nodes to communicate with each other by their names rather than IP addresses.
*   **Administration:** Simplifying management tasks, configuration, and troubleshooting.
*   **Service Discovery:** Allowing services to find and connect to specific nodes by name.
*   **Readability:** Making configurations and logs easier to understand for human administrators.

---

### **2. Setting Host Names for Virtual Machine Nodes**

There are several ways to set hostnames for VMs, depending on the virtualization platform and the operating system of the VM.

#### **2.1. Static Hostname Configuration (Within the VM)**

This is the most common and recommended method for cluster environments. It involves configuring the hostname directly within the VM's operating system.

**Key Concepts:**

*   **Hostname:** A label assigned to a device connected to a computer network.
*   **`/etc/hostname` (Linux/Unix-like systems):** A file that stores the static hostname of the system.
*   **`hostnamectl` command (Systemd-based Linux distributions):** A command-line utility to view and change the system hostname.
*   **`/etc/hosts` file:** A local lookup table used to map IP addresses to hostnames. This is crucial for local hostname resolution, especially when DNS isn't readily available or for quick testing.

**Methods:**

*   **Using `hostnamectl` (Recommended for Systemd-based systems like Ubuntu 15.04+, CentOS 7+, Debian 8+):**
    *   **Check current hostname:**
        ```bash
        hostnamectl
        ```
    *   **Set new hostname:**
        ```bash
        sudo hostnamectl set-hostname <new_hostname>
        ```
        *Example:* `sudo hostnamectl set-hostname node1.cluster.local`
    *   **Verify the change:** Run `hostnamectl` again. The change is usually immediate and persistent across reboots.

*   **Manually Editing `/etc/hostname` (For older systems or non-Systemd systems):**
    1.  Open the file with a text editor:
        ```bash
        sudo nano /etc/hostname
        ```
    2.  Replace the existing hostname with your desired name (e.g., `node1.cluster.local`).
    3.  Save and close the file.
    4.  To apply the change immediately without rebooting, you can use the `hostname` command:
        ```bash
        sudo hostname <new_hostname>
        ```
        *Example:* `sudo hostname node1.cluster.local`
    *   **Important:** This method is generally less preferred than `hostnamectl` as it might not trigger all necessary system services to recognize the new hostname immediately. A reboot is the most reliable way to ensure all services pick up the change.

*   **Updating `/etc/hosts`:**
    *   After setting the hostname, it's crucial to ensure the VM can resolve its own hostname and potentially other nodes' hostnames locally.
    *   Open the `/etc/hosts` file:
        ```bash
        sudo nano /etc/hosts
        ```
    *   Add an entry for your VM's IP address and its hostname. For a cluster, it's also good practice to add entries for all known cluster nodes.
        ```
        127.0.0.1       localhost
        127.0.1.1       node1.cluster.local node1  # For your current VM
        192.168.1.10    node1.cluster.local node1
        192.168.1.11    node2.cluster.local node2
        192.168.1.12    node3.cluster.local node3
        ```
    *   Replace `192.168.1.*` with the actual IP addresses of your VMs.

#### **2.2. Hostname Configuration via Virtualization Platform**

Some virtualization platforms allow you to set the hostname during VM creation or through VM settings. This often involves passing the hostname as a "guest customisation" or "cloud-init" parameter.

*   **VirtualBox:** Can be done through "Settings" -> "System" -> "Hostname & Domain Name" or by using guest additions.
*   **VMware:** Can be set during VM creation or via vCenter/vSphere client.
*   **Cloud Platforms (AWS, Azure, GCP):** Hostnames are often managed through user data or metadata services during instance creation.

**Note:** While convenient, ensure that the OS within the VM also correctly picks up and uses this hostname. Often, the virtualization platform's method is a hint, and the OS will still need to finalize the configuration.

---

### **3. SSH Setup for Remote Login**

SSH (Secure Shell) is a protocol used for secure remote login and other secure network services over an unsecured network.

**Key Concepts:**

*   **SSH Server (sshd):** The daemon running on the remote machine that listens for incoming SSH connections.
*   **SSH Client:** The program used to initiate an SSH connection from your local machine to a remote server.
*   **Port 22:** The default port for SSH.
*   **Authentication:** The process of verifying the identity of the user trying to connect. Common methods include password-based authentication and public-key cryptography.

#### **3.1. Ensuring SSH Server is Running**

Most Linux distributions have the OpenSSH server installed and running by default, but it's good to verify.

*   **Check SSH service status:**
    ```bash
    sudo systemctl status ssh  # For systemd-based systems
    # or
    sudo service ssh status   # For older init systems
    ```
*   **Start SSH service if not running:**
    ```bash
    sudo systemctl start ssh
    # or
    sudo service ssh start
    ```
*   **Enable SSH service to start on boot:**
    ```bash
    sudo systemctl enable ssh
    # or
    sudo update-rc.d ssh enable  # For Debian/Ubuntu older systems
    ```

#### **3.2. Connecting via SSH**

The basic syntax for connecting to a remote host is:

```bash
ssh <username>@<hostname_or_ip_address>
```

*   **Example:**
    ```bash
    ssh user@node1.cluster.local
    ```
    or
    ```bash
    ssh user@192.168.1.10
    ```

Upon the first connection to a new host, you'll be asked to confirm the host's authenticity. You'll then be prompted for the user's password on the remote machine.

#### **3.3. SSH Configuration for Cluster Nodes**

For seamless cluster operation, you'll often need to establish SSH connections between nodes without frequent password prompts. This is achieved using SSH keys.

#### **3.4. SSH Key Generation and Distribution (Passwordless Login)**

This is a critical step for cluster automation and management.

**Steps:**

1.  **Generate an SSH Key Pair on the Source Machine (e.g., your control node or one of the cluster VMs):**
    *   Run the following command. It's recommended to do this as the user who will be performing actions on other nodes.
        ```bash
        ssh-keygen -t rsa -b 4096
        ```
    *   You will be prompted for:
        *   **File in which to save the key:** Press Enter to accept the default (`~/.ssh/id_rsa`).
        *   **Enter passphrase (empty for no passphrase):** For passwordless login, **press Enter twice** (leave it empty). **Be aware of the security implications of a passphrase-less key – secure your private key file appropriately!**
    *   This creates two files in your `~/.ssh` directory:
        *   `id_rsa` (Private Key): **Keep this file secure and never share it.**
        *   `id_rsa.pub` (Public Key): This key is meant to be distributed to other machines.

2.  **Copy the Public Key to the Target Machine(s):**
    *   Use the `ssh-copy-id` command (highly recommended). This command automatically appends your public key to the `~/.ssh/authorized_keys` file on the remote host and sets the correct permissions.
        ```bash
        ssh-copy-id <username>@<hostname_or_ip_address>
        ```
        *Example:* `ssh-copy-id user@node2.cluster.local`
    *   You will be prompted for the password of the `user` on `node2.cluster.local` for this one-time operation.

3.  **Verify Passwordless Login:**
    *   Now, try to SSH into the target machine again. You should be logged in directly without a password prompt.
        ```bash
        ssh user@node2.cluster.local
        ```

4.  **Repeat for All Nodes:**
    *   Perform steps 1 and 2 for every node in your cluster that needs to SSH into other nodes (or that you need to SSH into from a central management point). For example, if `node1` needs to SSH to `node2` and `node3`, generate keys on `node1` and copy `node1`'s public key to `node2` and `node3`.

#### **3.5. SSH Configuration File (`~/.ssh/config`)**

This file allows you to create aliases and configure default settings for SSH connections, making it easier to manage multiple nodes.

*   **Create/Edit the config file:**
    ```bash
    nano ~/.ssh/config
    ```
*   **Example configuration:**
    ```
    # Default settings for all connections
    # ForwardAgent yes  # Useful if you need to hop through machines and use your local SSH keys

    # Node 1 configuration
    Host node1
        Hostname node1.cluster.local
        User admin
        Port 22
        IdentityFile ~/.ssh/id_rsa

    # Node 2 configuration
    Host node2
        Hostname 192.168.1.11
        User admin
        Port 22
        IdentityFile ~/.ssh/id_rsa

    # Node 3 configuration
    Host node3
        Hostname 192.168.1.12
        User admin
        Port 22
        IdentityFile ~/.ssh/id_rsa
    ```
*   **Usage:** Now you can simply type `ssh node1` instead of `ssh admin@node1.cluster.local`.

#### **3.6. SSH Security Best Practices**

*   **Disable Password Authentication (Once Key-Based Auth is Working):** This significantly enhances security by preventing brute-force password attacks.
    1.  Edit the SSH server configuration file on the *remote* machine:
        ```bash
        sudo nano /etc/ssh/sshd_config
        ```
    2.  Find and modify the following lines:
        ```
        PasswordAuthentication no
        # PubkeyAuthentication yes (should already be yes)
        ```
    3.  Restart the SSH service for changes to take effect:
        ```bash
        sudo systemctl restart ssh
        ```
        **WARNING:** Ensure your SSH key login works perfectly *before* disabling password authentication, otherwise you might lock yourself out!

*   **Change Default Port (Optional but Recommended):** Changing SSH from port 22 to a non-standard port can deter automated bots scanning for port 22.
    1.  In `/etc/ssh/sshd_config`, change:
        ```
        Port 22
        ```
        to something like:
        ```
        Port 2222
        ```
    2.  **Important:** If you change the port, you must also specify it when connecting (`ssh -p 2222 user@hostname`) or update your `~/.ssh/config` file.
    3.  Also, update firewall rules if applicable.

*   **Use a Strong Passphrase for Private Keys (If Not Aiming for Pure Passwordless):** While we focused on passwordless, using a passphrase on your `id_rsa` key adds an extra layer of security if your private key is compromised. You'd then use `ssh-agent` to manage this passphrase.

*   **Limit SSH Access:** Configure firewalls (e.g., `ufw`, `firewalld`, `iptables`) to only allow SSH access from trusted IP addresses.

---

### **4. Troubleshooting Common Issues**

*   **"Connection refused" or "Connection timed out":**
    *   **SSH Server Not Running:** Check `systemctl status ssh` on the target node.
    *   **Firewall Blocking Port:** Verify firewall rules on the target node and any network firewalls in between.
    *   **Incorrect IP Address/Hostname:** Double-check the destination address.
    *   **Wrong Port:** Ensure you're connecting to the correct SSH port (default is 22).

*   **"Permission denied (publickey,password)":**
    *   **Incorrect Username:** Make sure you're using the correct username for the remote system.
    *   **SSH Key Not Copied Correctly:** Verify that `~/.ssh/authorized_keys` on the remote machine contains your public key. Check permissions on the remote `.ssh` directory (700) and `authorized_keys` file (600).
    *   **SSH Agent Not Running/Configured:** If using a passphrase-protected key, ensure `ssh-agent` is running and your key is added (`ssh-add`).
    *   **`sshd_config` Misconfiguration:** Check `PubkeyAuthentication yes` in `/etc/ssh/sshd_config` on the server.

*   **Hostname Resolution Issues (Can't ping or SSH by hostname):**
    *   **`/etc/hosts` File:** Ensure entries are correct on all nodes, including `127.0.0.1` and the machine's own IP/hostname.
    *   **DNS Server:** If using DNS, ensure the DNS server is reachable and the hostnames are correctly registered.
    *   **Local Hostname Setting:** Confirm the `hostnamectl` or `/etc/hostname` is set correctly and has propagated.

---

### **5. Practice Questions and Exercises**

**Question 1:**
What is the primary purpose of setting hostnames for VM nodes in a cluster?
A. To make them easier to identify and manage.
B. To improve the performance of network communication.
C. To ensure the VMs can access the internet.
D. To allow users to connect using their personal usernames.

**Question 2:**
Which file is primarily used to store the static hostname on most modern Linux systems?
A. `/etc/network/interfaces`
B. `/etc/hosts`
C. `/etc/hostname`
D. `/etc/resolv.conf`

**Question 3:**
Which command is used to copy your SSH public key to a remote host, facilitating passwordless login?
A. `ssh-add`
B. `ssh-keygen`
C. `scp`
D. `ssh-copy-id`

**Question 4:**
If you disable password authentication in `sshd_config`, what is the critical prerequisite before restarting the SSH service?
A. Ensure all users have strong, unique passwords.
B. Verify that SSH key-based authentication is working correctly for all intended users.
C. Configure SSH to use a non-standard port.
D. Generate a new SSH key pair on the server.

**Question 5:**
You've set the hostname of a VM to `webserver01.cluster.local` but can only SSH to it using its IP address. What is a likely cause?

---

### **Answers to Practice Questions**

**Answer 1:**
A. To make them easier to identify and manage.
*   *Explanation:* Hostnames provide a human-readable and consistent way to refer to each node, which is essential for cluster administration and communication.

**Answer 2:**
C. `/etc/hostname`
*   *Explanation:* This file contains the static hostname that the system uses. `hostnamectl` manipulates this file (and others) for persistent hostname changes. `/etc/hosts` is for IP-to-hostname mapping.

**Answer 3:**
D. `ssh-copy-id`
*   *Explanation:* `ssh-copy-id` is a utility specifically designed to copy your public SSH key to the `authorized_keys` file on the remote server, simplifying the process.

**Answer 4:**
B. Verify that SSH key-based authentication is working correctly for all intended users.
*   *Explanation:* Disabling password authentication without ensuring key-based access works will lock you out of the server via SSH.

**Answer 5:**
A likely cause is that **local hostname resolution is not configured correctly.** The VM's operating system might have the hostname set, but it might not be able to resolve `webserver01.cluster.local` to its own IP address (or any IP). This often means the `/etc/hosts` file on the VM is missing or incorrect.

*   **Troubleshooting steps:**
    1.  Check the contents of `/etc/hosts` on the VM. It should typically contain an entry like:
        ```
        127.0.0.1       localhost
        127.0.1.1       webserver01.cluster.local webserver01  # Or your VM's actual IP
        ```
    2.  Ensure the correct IP address is used if not using `127.0.0.1`.
    3.  Confirm the hostname was set correctly using `hostnamectl`.

---

### **Important Points to Remember:**

*   **Consistency is Key:** Use a clear and consistent naming convention for your cluster nodes.
*   **`/etc/hostname` vs. `hostnamectl`:** Prefer `hostnamectl` on modern systems for consistent management.
*   **`~/.ssh/authorized_keys` Permissions:** The `~/.ssh` directory on the target machine must have `700` permissions, and the `authorized_keys` file must have `600` permissions. Incorrect permissions are a common cause of SSH key login failures.
*   **Security of Private Keys:** Protect your `~/.ssh/id_rsa` file with your life. If it's compromised, an attacker can impersonate you.
*   **Test SSH Before Disabling Passwords:** Always confirm passwordless SSH works before disabling password authentication.
*   **`~/.ssh/config` Simplifies Management:** Leverage this file to create aliases and streamline connections to your cluster nodes.
*   **Firewalls:** Remember that firewalls can block SSH traffic, even if all configurations are correct.
