---
title: "ssh"
subject: "IT WORKSHOP"
module: "Module 6: Familiarizing basic networking commands "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f97e7"
status: "completed"
scrapedAt: "2026-05-23T16:07:43.397Z"
---
# IT WORKSHOP - Module 6: Familiarizing Basic Networking Commands

## Topic: SSH (Secure Shell)

Welcome, everyone! Today, we're diving into a command that is absolutely fundamental for anyone working with remote systems, especially in the Linux environment. We're talking about **SSH**, which stands for **Secure Shell**.

You might be wondering, "Why do I need to learn about this in an IT Workshop focused on basic networking commands?" Well, think about it. As you progress in IT, you'll often need to access and manage servers, virtual machines, or even other computers from a distance. You won't always be sitting right in front of the machine. This is where SSH comes in as your secure gateway. It's your reliable way to connect to another computer, as if you were sitting right there, but with a crucial layer of security.

This topic directly ties into our **Course Outcome 2: Make use of the command line of the Linux operating system and shell programming.** SSH is a command-line utility, and understanding it empowers you to interact with remote Linux systems effectively. It also indirectly supports **Course Outcome 1: Experiment with the fundamental hardware components of a computer and how to interface them with software systems**, as you'll be using your local machine's hardware (network card, CPU) to establish a secure connection to a remote system. And, in a broader sense, it’s part of the infrastructure that makes many network services possible, touching upon **Course Outcome 3: Experiment with data network communication scenarios using Wireshark**, though we'll focus on SSH itself here.

### What is SSH? The Secure Way to Talk to Remote Computers

Imagine you have a friend who lives in another city, and you need to access their computer to check on something or make a small adjustment. How would you do that without SSH? You might have heard of older protocols like Telnet. Telnet allows you to connect to a remote computer, but here's the catch: all the information you send – your username, password, and everything you type – travels across the network in plain text. That's like sending a postcard with your secret information on it. Anyone intercepting that postcard can read everything!

SSH, on the other hand, is designed to be **secure**. It encrypts all the data exchanged between your computer and the remote computer. So, even if someone were to "listen in" on your connection, all they would see is scrambled gibberish, not your sensitive login details or commands. This encryption is what makes SSH so vital for remote administration and secure data transfer.

Think of SSH as a private, encrypted tunnel through the internet. Only you and the remote server have the keys to this tunnel. Everything you send through it is protected. This is a core concept in network security, a theme that runs through many of the resources we're referencing, like "The Architecture of Computer Hardware, Systems Software, & Networking" by Irv Englander, which emphasizes the importance of secure communication protocols.

### The Basic SSH Command: Connecting to a Remote Server

The most common way to use SSH is to log into a remote machine. The basic syntax for this is:

```bash
ssh username@hostname
```

Let's break this down:

*   **`ssh`**: This is the command itself, invoking the Secure Shell client on your local machine.
*   **`username`**: This is the user account you want to log in as on the *remote* server. Just like you have a username on your own computer, the remote server also has users.
*   **`@`**: This symbol separates your username from the server's address.
*   **`hostname`**: This is the address of the remote server. It can be an IP address (like `192.168.1.100`) or a domain name (like `server.example.com`).

**Example Scenario:**

Let's say you have an account on a server with the IP address `203.0.113.50` and your username on that server is `alice`. To connect to it, you would type:

```bash
ssh alice@203.0.113.50
```

When you press Enter, your SSH client will initiate a connection to the specified server.

**The First Connection: The Host Key Fingerprint**

The very first time you connect to a new server using SSH, you'll see a message that looks something like this:

```
The authenticity of host '203.0.113.50 (203.0.113.50)' can't be established.
ECDSA key fingerprint is SHA256:AbCdEfGhIjKlMnOpQrStUvWxYz0123456789.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

What's happening here? The remote server has a unique identifier, like a digital fingerprint, called a **host key**. When you connect for the first time, your SSH client doesn't know this server. It's asking you to verify that you're connecting to the *correct* server and not some imposter.

This is like meeting a new person and asking for their ID before you fully trust them. The output shows you the "fingerprint" of the server's key. If you know what the server's legitimate fingerprint should be (perhaps you got it from the server administrator), you can compare them. If they match, you can safely type `yes`. Once you confirm, your SSH client stores this fingerprint, and you won't be asked again unless the server's key changes (which might happen if the server is reinstalled or compromised, so be mindful!).

This is a critical security feature to prevent **man-in-the-middle attacks**, where an attacker tries to intercept your connection by pretending to be the server. Understanding this initial prompt is crucial for secure operations.

**Authentication: Proving Who You Are**

After you've confirmed the host key, the server needs to know that you are who you say you are. There are generally two main ways SSH authenticates you:

1.  **Password Authentication:** This is the most straightforward. The server will prompt you for your password for the `username` you specified.

    ```
    alice@server's password:
    ```

    When you type your password, you won't see any characters appear on the screen (not even asterisks). This is another security measure to prevent someone looking over your shoulder from seeing your password length. Just type it in and press Enter. If it's correct, you'll be logged in!

    *   **Exam Tip:** Remember, no password characters are displayed. This is a common point of confusion for beginners.

2.  **SSH Key-Based Authentication:** This is a more secure and convenient method. Instead of typing a password, you use a pair of cryptographic keys: a **private key** (which you keep secret on your local machine) and a **public key** (which you place on the remote server). When you try to connect, your SSH client uses your private key to prove your identity, and the server checks if the corresponding public key is authorized. This eliminates the need to type passwords repeatedly and is generally considered more secure. We won't go into setting this up in detail today, but it's something you'll definitely encounter and use extensively later on.

### Navigating the Remote System

Once you're successfully logged in, you'll see the command prompt of the remote server. It might look different from your local machine's prompt. For example, it might include the server's hostname:

```
alice@remote-server:~$
```

Now, you can type Linux commands just as if you were sitting at the server's console. You can list files (`ls`), change directories (`cd`), edit files, run programs, and so on.

This is where **Course Outcome 2** really shines. You're using your Linux command-line skills on a remote system. All the commands you learn in your Linux workshops (`ls`, `cd`, `pwd`, `cat`, `nano` or `vim`, etc.) work here.

**Example:**

To see the files in your home directory on the remote server:

```bash
ls -l
```

To navigate to a directory named `projects`:

```bash
cd projects
```

### Logging Out of an SSH Session

When you're finished working on the remote server, it's crucial to disconnect your session securely. You do this by typing:

```bash
exit
```

or

```bash
logout
```

Pressing Enter will close the SSH connection, and you'll return to your local machine's command prompt.

### Other Useful SSH Options

SSH is a powerful tool with many options. Let's look at a couple of very common ones:

#### Specifying a Different Port

By default, SSH uses port **22**. This is the standard port for SSH traffic. However, for security reasons, administrators sometimes change the default port on a server to make it less of a target for automated attacks. If a server is running SSH on a different port, say port `2222`, you need to tell your SSH client to use that port. You do this with the `-p` option:

```bash
ssh -p PORT username@hostname
```

**Example:**

To connect to `alice` on `203.0.113.50` using port `2222`:

```bash
ssh -p 2222 alice@203.0.113.50
```

*   **Exam Tip:** Be aware of the `-p` option for specifying ports. This is a common variation asked in exams.

#### Running a Single Command Remotely

Sometimes, you don't need a full interactive shell on the remote server. You might just want to run a single command and get its output. You can do this by simply appending the command after the hostname:

```bash
ssh username@hostname 'your_command_here'
```

The command must be enclosed in single quotes if it contains spaces or special characters.

**Example:**

To check the disk space usage on the remote server without logging in interactively:

```bash
ssh alice@203.0.113.50 'df -h'
```

The output of the `df -h` command will be displayed on your local terminal, and the SSH connection will close immediately afterward. This is incredibly handy for scripting and automation.

### SSH for File Transfer: SCP and SFTP

While SSH provides a secure connection for command-line access, you'll also need to transfer files securely. SSH itself doesn't directly handle file transfers, but it provides the secure foundation for other protocols like **SCP (Secure Copy)** and **SFTP (SSH File Transfer Protocol)**.

*   **SCP:** This command-line utility is like a secure version of the `cp` command, allowing you to copy files between your local machine and a remote server over SSH.
    *   **Copying a file from local to remote:**
        ```bash
        scp /path/to/local/file username@hostname:/path/to/remote/destination
        ```
    *   **Copying a file from remote to local:**
        ```bash
        scp username@hostname:/path/to/remote/file /path/to/local/destination
        ```
    *   **Example:** To copy a file named `report.txt` from your local machine to the `documents` directory on the remote server:
        ```bash
        scp report.txt alice@203.0.113.50:~/documents/
        ```
        (Note: `~` represents the home directory of the user on the remote server).

*   **SFTP:** This is an interactive file transfer program, similar to FTP, but it runs over SSH, making it secure. You can connect to a remote server using SFTP, then use commands like `put` to upload files and `get` to download files.

    ```bash
    sftp username@hostname
    ```

    Once connected, you'll have an `sftp>` prompt. You can then use commands like `put local_file` or `get remote_file`.

These file transfer methods are essential for moving data safely, connecting to **Course Outcome 4** where we talk about managing data and versions (even though that's usually website-focused, the principle of secure data movement applies broadly).

### SSH and Your Textbooks

Let's briefly connect this to our reading materials:

*   "Invitation to Computer Science" by Schneider & Gersting might discuss network protocols and security concepts in general terms. SSH fits into this as a concrete example of a secure, encrypted protocol.
*   "LINUX for Developers" by William Rothwell is where you'll find extensive practical details on using the Linux command line, including SSH. It will likely cover setting up SSH keys and more advanced usage.
*   "HTML, CSS, and JavaScript - All in One" by Meloni & Kyrnin is more focused on web development, but understanding how to remotely manage web servers using SSH is a crucial skill for web developers.
*   "The Architecture of Computer Hardware, Systems Software, & Networking" by Irv Englander provides the underlying principles of how networks and secure communications work, which helps you understand *why* SSH is designed the way it is.
*   "Mastering Git" by Jakub Narębski might touch upon using SSH for Git repositories (e.g., `git clone git@github.com:user/repo.git`), which is a very common real-world use case.

### Summary: Key Takeaways for SSH

*   **SSH (Secure Shell)** is a network protocol used for secure remote login and other secure network services over an unsecured network.
*   It uses **encryption** to protect data, including passwords and commands.
*   The basic command is `ssh username@hostname`.
*   The first time you connect, you'll see a **host key fingerprint** to verify the server's identity.
*   Authentication is typically done via **password** or more securely via **SSH keys**.
*   You can run single commands remotely by appending them to the `ssh` command.
*   **SCP** and **SFTP** are secure file transfer protocols that use SSH.
*   SSH is fundamental for remote administration of Linux systems and is a vital tool for IT professionals.

Remember, mastering SSH is not just about knowing a command; it's about understanding how to securely interact with the digital world beyond your immediate physical reach. It's a building block for many advanced IT tasks.

---

## Sample Questions and Answers

Here are a few questions to test your understanding and prepare you for exams:

**Q1. What is the primary security benefit of using SSH over older protocols like Telnet?**

*   **Answer:** SSH encrypts all data transmitted between the client and server. This means that usernames, passwords, commands, and data are scrambled and unreadable to anyone who might intercept the traffic, unlike Telnet which sends data in plain text.

*   **Reasoning:** This question tests the fundamental concept of SSH's purpose. The key differentiator is encryption, protecting sensitive information.

**Q2. You are trying to connect to a remote server for the first time and see the following message: "The authenticity of host 'server.example.com' can't be established. ECDSA key fingerprint is SHA256:XYZ... Are you sure you want to continue connecting (yes/no/[fingerprint])?". What is this prompt asking you to do, and why is it important?**

*   **Answer:** This prompt is asking you to confirm the identity of the remote server by verifying its SSH host key fingerprint. It's important because it helps protect you from man-in-the-middle attacks, ensuring you are connecting to the legitimate server and not an imposter posing as it.

*   **Reasoning:** This assesses understanding of the initial connection process and the underlying security mechanism (host key verification) to prevent MITM attacks.

**Q3. Which command would you use to copy a file named `config.txt` from your local machine's current directory to the `/etc/` directory on a remote server with IP address `192.168.1.100`, assuming your username on the remote server is `admin`?**

*   **Answer:** `scp config.txt admin@192.168.1.100:/etc/`

*   **Reasoning:** This tests practical application of the `scp` command for file transfer, specifically copying from local to remote, and understanding the correct syntax for source and destination paths.

**Q4. If an SSH server is configured to listen on port `2222` instead of the default port `22`, how would you connect to it using the SSH client with the username `user` and hostname `my.server.com`?**

*   **Answer:** `ssh -p 2222 user@my.server.com`

*   **Reasoning:** This question focuses on a common variation of SSH usage: specifying a non-default port using the `-p` option.

**Q5. True or False: When you type your password in an SSH login prompt, you will see asterisks (*) for each character you type.**

*   **Answer:** False. For security reasons, no characters (not even asterisks) are displayed on the screen when typing a password for SSH (or most other command-line password prompts).

*   **Reasoning:** This targets a common misconception and highlights a specific security feature of password input on the command line.
