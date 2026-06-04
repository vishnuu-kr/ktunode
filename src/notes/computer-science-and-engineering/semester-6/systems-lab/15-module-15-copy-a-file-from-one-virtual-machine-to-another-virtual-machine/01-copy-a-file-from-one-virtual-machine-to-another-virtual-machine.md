---
title: "Copy a file from one virtual machine to another virtual machine."
subject: "SYSTEMS LAB"
module: "Module 15: Copy a file from one virtual machine to another virtual machine."
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8c04c"
status: "completed"
scrapedAt: "2026-05-20T16:57:43.297Z"
---
# Systems Lab: Module 15 - Copying Files Between Virtual Machines

This module focuses on the essential task of transferring files between different virtual machine (VM) environments. This is a fundamental skill in Systems Lab, enabling you to share configurations, data, and resources across your virtual infrastructure.

---

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the necessity and common scenarios for copying files between VMs.
*   Identify and utilize various methods for file transfer between VMs.
*   Implement secure and efficient file copying techniques.
*   Troubleshoot common issues encountered during file transfers.

---

## 1. Why Copy Files Between VMs?

File copying between VMs is a cornerstone of effective VM management and development. Common scenarios include:

*   **Configuration Sharing:** Transferring configuration files (e.g., Apache configs, application settings) from a master VM to multiple cloned VMs.
*   **Software Deployment:** Moving installation scripts, application binaries, or update packages to target VMs.
*   **Data Migration:** Copying databases, user data, or log files between VMs for backup, analysis, or migration.
*   **Testing and Development:** Sharing test data, code snippets, or test environments between developer VMs.
*   **Snapshot Restoration:** Moving essential files from a previous VM state to a newly provisioned one.
*   **Troubleshooting:** Copying log files from a problematic VM to a host machine for analysis.

---

## 2. Key Concepts and Definitions

*   **Virtual Machine (VM):** A software-based emulation of a physical computer that can run its own operating system and applications.
*   **Host Machine:** The physical computer on which the virtualization software (e.g., VirtualBox, VMware) is installed and running.
*   **Guest Machine:** A VM running on the host machine.
*   **Network Connectivity:** The ability for VMs to communicate with each other and with the host machine. This is crucial for many file transfer methods.
*   **File Transfer Protocols (FTP):** Standards for transferring files over a network. Common examples include SCP, SFTP, and FTP.
*   **Secure Copy Protocol (SCP):** A network protocol used for securely copying files between computers. It's based on SSH (Secure Shell).
*   **Secure File Transfer Protocol (SFTP):** A network protocol that provides file access, file transfer, and file management over any reliable data stream. It is also typically implemented over SSH.
*   **Shared Folders:** A feature provided by most virtualization software that allows a folder on the host machine to be accessible from within the guest VM.
*   **Virtualization Software:** The application that creates and manages VMs (e.g., Oracle VirtualBox, VMware Workstation/Fusion, Hyper-V).
*   **SSH (Secure Shell):** A cryptographic network protocol for operating network services securely over an unsecured network. It's often used as the underlying transport for SCP and SFTP.
*   **IP Address:** A unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. VMs on the same network segment will have IP addresses.
*   **Hostname:** A label assigned to a device connected to a computer network that is used to identify the device.

---

## 3. Methods for Copying Files Between VMs

There are several effective methods for copying files between VMs, each with its own advantages and use cases.

### 3.1. Using Shared Folders (Virtualization Software Feature)

This is often the simplest and most integrated method, especially for VM-to-Host or Host-to-VM transfers, but can be leveraged for VM-to-VM as well.

**How it works:**
1.  Configure a folder on your **host machine** as a shared folder within your virtualization software.
2.  Mount or access this shared folder from your **guest VM**.
3.  Copy files from one VM to the shared folder on the host, and then from the shared folder to another VM.

**Steps (Example using VirtualBox):**

1.  **On the Host Machine:**
    *   Create a folder on your host machine that you want to share (e.g., `~/Documents/VMShare`).
2.  **In VirtualBox:**
    *   Select the **Source VM**.
    *   Go to **Settings** > **Shared Folders**.
    *   Click the **Add Shared Folder** button.
    *   **Folder Path:** Browse to your host-side shared folder (e.g., `~/Documents/VMShare`).
    *   **Folder Name:** Give it a descriptive name (e.g., `VMShare`).
    *   Check **"Make Permanent"**.
    *   **Optional:** Check **"Auto-mount"**.
    *   Click **OK**.
3.  **Inside the Source VM:**
    *   **If Auto-mount is NOT checked:** You might need to manually mount the shared folder. The location varies by OS.
        *   **Linux:** Typically mounted under `/media/<username>/VMShare` or `/mnt/vboxsf/VMShare`. You might need to install `virtualbox-guest-additions` first.
        *   **Windows:** Appears as a network drive (e.g., `\\vboxsvr\VMShare`).
    *   Copy the desired file from its original location within the source VM to the mounted shared folder (e.g., `cp /path/to/your/file.txt ~/VMShare/`).
4.  **Configure the Shared Folder for the Destination VM:**
    *   Repeat steps 1-3 for the **Destination VM**, ensuring it also has access to the same shared folder path on the host.
5.  **Inside the Destination VM:**
    *   Navigate to the mounted shared folder.
    *   Copy the file from the shared folder to the desired location within the destination VM (e.g., `cp ~/VMShare/file.txt /home/user/destination/`).

**Pros:**
*   Easy to set up for VM-to-Host and Host-to-VM.
*   No network configuration needed between VMs if they can access the host.
*   Good for transferring larger files.

**Cons:**
*   Requires virtualization software guest additions to be installed on the guest VM for proper mounting.
*   Indirect method for VM-to-VM transfer (requires the host as an intermediary).
*   Can sometimes be slow depending on the virtualization software and OS.

---

### 3.2. Using Network Protocols (SCP/SFTP)

This is a more direct and robust method for VM-to-VM transfers, provided both VMs have network connectivity. It relies on SSH.

**Prerequisites:**
*   **Network Connectivity:** Both VMs must be on the same network or have a route between them. Ensure their network adapters are configured correctly (e.g., NAT, Bridged Adapter, Host-Only Adapter).
*   **SSH Server:** The **destination VM** must have an SSH server running.
    *   **Linux:** `openssh-server` is usually installed. If not, install it (e.g., `sudo apt update && sudo apt install openssh-server`). Ensure the service is running (`sudo systemctl status ssh` or `sudo service ssh status`).
    *   **Windows:** You can install OpenSSH Server from "Optional Features" in Windows Settings or use third-party SSH servers.
*   **SSH Client:** The **source VM** (or the machine from which you initiate the copy) needs an SSH client. Most Linux/macOS systems have it built-in. For Windows, you can use the built-in OpenSSH client (in newer versions), PuTTY, or Git Bash.

**Using `scp` (Secure Copy):**

`scp` is a command-line utility.

**Syntax:**
```bash
scp [options] source_path destination_path
```

**Examples:**

*   **Copy a file from Source VM to Destination VM:**
    *   From the **Source VM's terminal**:
        ```bash
        scp /path/to/local/file.txt user@destination_vm_ip_or_hostname:/path/to/remote/directory/
        ```
        *   `user`: Username on the destination VM.
        *   `destination_vm_ip_or_hostname`: IP address or hostname of the destination VM.
        *   `/path/to/remote/directory/`: The directory on the destination VM where you want to copy the file.
        *   You will be prompted for the password of `user` on the destination VM.

*   **Copy a file from Destination VM to Source VM:**
    *   From the **Source VM's terminal**:
        ```bash
        scp user@destination_vm_ip_or_hostname:/path/to/remote/file.txt /path/to/local/directory/
        ```

*   **Copy a directory recursively:**
    *   From the **Source VM's terminal**:
        ```bash
        scp -r /path/to/local/directory user@destination_vm_ip_or_hostname:/path/to/remote/directory/
        ```
        *   `-r` flag is for recursive copy.

**Using `sftp` (Secure File Transfer Protocol):**

`sftp` provides an interactive command-line interface for file transfers.

**Steps:**

1.  **From the Source VM's terminal**:
    ```bash
    sftp user@destination_vm_ip_or_hostname
    ```
    *   You'll be prompted for the password.
2.  Once connected, you'll see an `sftp>` prompt.
3.  **Common `sftp` commands:**
    *   `put local_file_path [remote_file_path]`: Uploads a file from the source VM to the destination VM.
        ```sftp
        put /path/to/local/file.txt /path/to/remote/directory/
        ```
    *   `get remote_file_path [local_file_path]`: Downloads a file from the destination VM to the source VM.
        ```sftp
        get /path/to/remote/file.txt /path/to/local/directory/
        ```
    *   `ls`: List files in the current remote directory.
    *   `cd remote_directory`: Change the current remote directory.
    *   `pwd`: Print the current remote working directory.
    *   `bye` or `quit`: Exit the `sftp` session.

**Pros:**
*   Secure and encrypted transfer.
*   Direct VM-to-VM communication.
*   Widely supported and standard protocols.
*   Command-line interface is scriptable.

**Cons:**
*   Requires network connectivity between VMs.
*   Requires SSH server to be running on the destination VM.
*   Can be less intuitive for beginners than GUI methods.

---

### 3.3. Using Network File Sharing (Samba/NFS)

This involves setting up a network file share on one VM and accessing it from another VM. This is similar in concept to shared folders but is a more general network service.

*   **Samba (SMB/CIFS):** Commonly used for sharing files with Windows machines and other Linux/Unix systems.
*   **NFS (Network File System):** Primarily used in Unix-like environments for sharing files and directories.

**General Steps (Conceptual):**

1.  **On the Server VM (where the files reside):**
    *   Install and configure Samba or NFS server software.
    *   Create a shared directory.
    *   Configure permissions and access control for the share.
2.  **On the Client VM (where you want to copy files):**
    *   Ensure network connectivity to the server VM.
    *   Install the appropriate client software (e.g., `cifs-utils` for Samba, `nfs-common` for NFS).
    *   Mount the network share to a local directory.
3.  **Copy Files:** Use standard file copy commands (`cp`, `mv`) to move files between the mounted share and the VM's local file system.

**Pros:**
*   Enables persistent sharing of directories.
*   Good for collaborative environments where multiple VMs need access to the same data.
*   Can be very efficient for large data sets.

**Cons:**
*   More complex to set up and configure compared to SCP/SFTP or shared folders.
*   Requires careful management of permissions.
*   Relies on network connectivity.

---

### 3.4. Using FTP (File Transfer Protocol) - Less Secure

FTP is an older protocol for file transfer. It's generally not recommended for sensitive data due to its lack of encryption.

**How it works:**
1.  **Server VM:** Install and run an FTP server (e.g., `vsftpd`, `proftpd` on Linux).
2.  **Client VM:** Use an FTP client (e.g., `ftp` command-line client, FileZilla) to connect to the server VM and transfer files.

**Pros:**
*   Widely understood.

**Cons:**
*   **Not secure:** Credentials and data are transmitted in plain text.
*   Requires explicit configuration of FTP server and firewall rules.
*   Less efficient than SCP/SFTP for many use cases.

**Important Note:** Unless you have a specific reason (e.g., legacy systems), prefer SCP/SFTP over FTP for security reasons.

---

## 4. Implementing Secure and Efficient File Copying

*   **Prioritize Security:** Always use SCP or SFTP when transferring data over a network. Avoid plain FTP.
*   **SSH Key-Based Authentication:** For frequent transfers or scripting, set up SSH key-based authentication. This allows you to connect and copy files without repeatedly entering passwords.
    *   **How it works:** Generate an SSH key pair on the source VM, and copy the public key to the `~/.ssh/authorized_keys` file on the destination VM.
*   **Network Configuration:** Ensure your VMs' network adapters are configured correctly to allow communication.
    *   **NAT:** VMs can access the internet and the host, but direct VM-to-VM communication might be limited unless port forwarding is used.
    *   **Bridged Adapter:** VMs get IP addresses on the same network as the host, allowing direct VM-to-VM communication and access to the external network. This is often the easiest for direct VM-to-VM transfers.
    *   **Host-Only Adapter:** Creates a private network between the host and VMs, or between VMs. Good for isolated testing environments.
*   **File Integrity:** For critical data, consider using checksum utilities (like `md5sum` or `sha256sum`) before and after transfer to verify that the file hasn't been corrupted.
    ```bash
    # On source VM before copying
    md5sum my_important_file.txt > my_important_file.txt.md5

    # Copy my_important_file.txt and my_important_file.txt.md5 to destination VM

    # On destination VM after copying
    md5sum -c my_important_file.txt.md5
    ```
*   **Compression:** For large files, consider compressing them before transfer (e.g., using `tar -czvf archive.tar.gz /path/to/directory`) to reduce transfer time and bandwidth usage.

---

## 5. Troubleshooting Common Issues

*   **"Connection refused" or "Connection timed out" Error:**
    *   **Cause:** Network connectivity issue, SSH server not running, or firewall blocking the port (default SSH port is 22).
    *   **Solution:**
        *   Verify network configuration of both VMs.
        *   Check if the SSH server is running on the destination VM (`sudo systemctl status ssh`).
        *   Ensure firewalls (both on the guest OS and potentially on the host/router if applicable) allow traffic on port 22.
        *   Try pinging the destination VM's IP address from the source VM to test basic connectivity.

*   **"Permission denied" Error:**
    *   **Cause:** Incorrect username or password, or the user doesn't have sufficient permissions to write to the destination directory. For shared folders, incorrect ownership or permissions on the host-side folder.
    *   **Solution:**
        *   Double-check the username and password.
        *   Verify the destination directory exists and the user has write permissions (`ls -ld /path/to/remote/directory/`).
        *   For shared folders, ensure the user in the guest VM has read/write access to the mounted folder, which often maps to host permissions.

*   **File Not Found:**
    *   **Cause:** Incorrect file path on either the source or destination.
    *   **Solution:** Carefully check and re-type the source and destination paths, paying attention to case sensitivity (especially on Linux).

*   **Shared Folders Not Accessible/Mounting Issues:**
    *   **Cause:** Guest additions not installed or outdated, incorrect mount command, permissions issues on the host.
    *   **Solution:**
        *   Ensure the latest Guest Additions are installed in the VM.
        *   Refer to your virtualization software's documentation for the correct way to mount shared folders for your specific OS.
        *   Check permissions of the shared folder on the host.

*   **Slow Transfer Speeds:**
    *   **Cause:** Network limitations (virtual network type, host network), heavy CPU load on either VM, large file sizes without compression.
    *   **Solution:**
        *   Experiment with different virtual network adapter modes (Bridged often provides better throughput).
        *   Compress large files before transfer.
        *   Ensure VMs are not maxing out CPU or disk I/O.

---

## 6. Practice Questions and Exercises

**Instructions:** Assume you have two VMs, VM1 (Source) and VM2 (Destination), running Linux. VM1 has the IP address `192.168.1.100` and VM2 has the IP address `192.168.1.101`. You have a user named `user2` on VM2.

**Exercise 1: Using SCP**

1.  On VM1, create a file named `my_document.txt` with some content.
2.  Using `scp` from VM1's terminal, copy `my_document.txt` to VM2's `/home/user2/documents/` directory.
3.  Verify the file exists on VM2.
4.  Now, from VM1, copy a file named `important_config.conf` from VM2's `/etc/` directory to VM1's `/tmp/` directory.

**Exercise 2: Using SFTP**

1.  On VM1, create a directory named `test_transfer`.
2.  Using `sftp` from VM1's terminal, connect to VM2.
3.  Navigate to VM2's `/home/user2/` directory.
4.  Upload the `my_document.txt` file (copied in Exercise 1) from VM1 to VM2's `/home/user2/` directory using `sftp`.
5.  Exit the `sftp` session.
6.  On VM2, verify that `my_document.txt` is present in `/home/user2/`.
7.  Download `important_config.conf` from VM2 (`/etc/important_config.conf`) to VM1's `~/test_transfer/` directory using `sftp`.

**Exercise 3: Shared Folders (Conceptual/Scenario)**

Imagine you need to transfer a large application installer (e.g., `app_installer.run`, 500MB) from VM1 to VM2. You have VirtualBox installed. Describe the steps you would take to use shared folders to accomplish this.

**Exercise 4: Security Consideration**

You are asked to transfer sensitive user data between VMs. Which method would you choose and why?

---

## Answers to Practice Questions

**Answer 1: Using SCP**

1.  On VM1:
    ```bash
    echo "This is my sample document." > my_document.txt
    ```
2.  From VM1:
    ```bash
    scp my_document.txt user2@192.168.1.101:/home/user2/documents/
    # Enter user2's password when prompted
    ```
3.  On VM2 (after the SCP command completes):
    ```bash
    ls /home/user2/documents/
    # You should see my_document.txt
    ```
4.  From VM1:
    ```bash
    scp user2@192.168.1.101:/etc/important_config.conf /tmp/
    # Enter user2's password when prompted
    ```

**Answer 2: Using SFTP**

1.  On VM1:
    ```bash
    mkdir ~/test_transfer
    ```
2.  From VM1:
    ```bash
    sftp user2@192.168.1.101
    # Enter user2's password when prompted
    ```
3.  Inside `sftp` session:
    *   `cd /home/user2/`
    *   `put my_document.txt`
    *   `bye`
4.  On VM2:
    ```bash
    ls /home/user2/
    # You should see my_document.txt
    ```
5.  From VM1's `sftp` session (reconnect if you exited):
    ```bash
    sftp user2@192.168.1.101
    # Enter user2's password when prompted
    ```
    Inside `sftp` session:
    *   `get /etc/important_config.conf ~/test_transfer/`
    *   `bye`

**Answer 3: Shared Folders (Conceptual/Scenario)**

1.  **On Host Machine:** Create a shared folder (e.g., `C:\VMShare` on Windows or `/home/user/VMShare` on Linux).
2.  **Configure VM1 (Source):**
    *   In VirtualBox settings for VM1, go to Shared Folders.
    *   Add a shared folder pointing to the host's `VMShare`.
    *   Enable "Auto-mount".
3.  **Inside VM1:** Mount the shared folder if auto-mount isn't active. Copy `app_installer.run` from its original location to the mounted shared folder.
4.  **Configure VM2 (Destination):**
    *   In VirtualBox settings for VM2, go to Shared Folders.
    *   Add the **same** shared folder pointing to the host's `VMShare`.
    *   Enable "Auto-mount".
5.  **Inside VM2:** Mount the shared folder if auto-mount isn't active. Copy `app_installer.run` from the mounted shared folder to VM2's desired location.

**Answer 4: Security Consideration**

The preferred method would be **SCP or SFTP**.
**Reasoning:** These protocols use SSH to encrypt both the credentials (username/password) and the data being transferred. This prevents eavesdropping and protects sensitive user data from being intercepted on the network. Plain FTP or insecure shared folder implementations (without proper access controls) should be avoided for sensitive information.

---

## Important Points to Remember

*   **Network connectivity is paramount** for most VM-to-VM transfer methods.
*   **SCP and SFTP are the secure standards** for network file transfers.
*   **Guest Additions are crucial** for features like shared folders and seamless mouse integration.
*   Always **verify file paths and permissions** when troubleshooting.
*   Consider **SSH key-based authentication** for automation and convenience.
*   Be mindful of **firewall rules** that might block file transfer protocols.
*   Choose the method that best balances **ease of use, security, and efficiency** for your specific task.
