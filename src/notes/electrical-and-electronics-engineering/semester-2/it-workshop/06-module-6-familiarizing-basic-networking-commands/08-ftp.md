---
title: "ftp"
subject: "IT WORKSHOP"
module: "Module 6: Familiarizing basic networking commands "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f97ea"
status: "completed"
scrapedAt: "2026-05-23T16:07:45.619Z"
---
# IT WORKSHOP: Module 6 - Familiarizing Basic Networking Commands

## Topic: FTP (File Transfer Protocol)

Welcome, everyone, to our session on FTP! In this part of Module 6, we're going to dive into a fundamental networking command that's been around for a long time but remains incredibly useful: **FTP**. Think of it as the digital equivalent of sending a package from one place to another. We'll explore what it is, how it works, and importantly, how you can use it from your command line. This ties directly into our course objectives, particularly **CO2: Make use of the command line of Linux operating system and shell programming.** We’ll be using Linux commands today, so get ready to get your hands dirty in the terminal!

### What is FTP and Why Should We Care?

At its heart, FTP stands for **File Transfer Protocol**. Its primary purpose is simple: to move files from one computer to another across a network. Imagine you've created a fantastic website on your local machine (your computer) and now you need to upload it to a web server so everyone can see it. FTP is one of the classic ways to do that. Or perhaps you have a large dataset stored on a remote server that you need to download to your computer for analysis. FTP facilitates these kinds of transfers.

You might wonder, "Aren't there newer, fancier ways to transfer files?" And yes, there are! Technologies like SFTP (SSH File Transfer Protocol) and SCP (Secure Copy) are often preferred today because they are more secure. However, understanding FTP is crucial because:

*   **It's foundational:** Many underlying network concepts we’ll discuss are present in FTP, making it a great learning tool. Schneider and Gersting, in "Invitation to Computer Science," often emphasize understanding the building blocks. FTP is one such building block for file sharing.
*   **Legacy Systems:** You'll still encounter systems that rely on FTP, especially in older infrastructure or for specific internal data transfers. Knowing how to use it can be a lifesaver.
*   **Understanding Security Implications:** By understanding how FTP works, you'll better appreciate why secure alternatives like SFTP and SCP are necessary. This relates to **CO3: Experiment with the data network communication scenarios using Wireshark**, as you can observe the unencrypted nature of FTP traffic.

### How FTP Works: The Client-Server Model

FTP operates on a **client-server model**. This is a very common pattern in networking.

*   **FTP Server:** This is a computer that is configured to listen for incoming FTP requests and has files stored on it that it can share. Think of it as a library that holds books (files) and has librarians (the server software) ready to help you.
*   **FTP Client:** This is the program running on your computer that initiates a connection to the FTP server to request or send files. You are the patron of the library.

When you want to transfer a file, your FTP client program connects to the FTP server. Once connected, you can authenticate (log in, usually with a username and password, though anonymous FTP exists for public servers) and then issue commands to the server.

#### The Two Channels: Control and Data

This is a really important detail about FTP, and something that sometimes trips people up. FTP uses **two separate network connections (or channels)** between the client and the server:

1.  **Control Connection:** This connection is established first and is used for sending commands (like `USER`, `PASS`, `LIST`, `RETR` for retrieve, `STOR` for store) and receiving responses from the server. It's like the phone line you use to tell the librarian what you want. This connection typically uses **port 21** on the server.
2.  **Data Connection:** This connection is used *only* for transferring the actual file data or directory listings. For every file transfer or directory listing requested, a *new* data connection is often opened. This is like the librarian going to the shelf, getting the book, and handing it to you. The port used for the data connection can vary, which is a key characteristic of FTP.

This two-channel approach is a bit different from how many modern protocols work, where a single connection handles both commands and data.

### Connecting to an FTP Server using the Command Line

Now, let's get practical. We'll use the built-in `ftp` command available in most Linux distributions. This is where **CO2** really comes into play – mastering the command line.

**1. Opening the Terminal:**
First, open your terminal. You know how to do this!

**2. Initiating an FTP Connection:**
The basic syntax to connect to an FTP server is:

```bash
ftp <hostname_or_IP_address>
```

Let's say you want to connect to an FTP server with the hostname `ftp.example.com`. You would type:

```bash
ftp ftp.example.com
```

If you know the IP address, say `192.168.1.100`, you'd use:

```bash
ftp 192.168.1.100
```

Upon executing this, the `ftp` client will attempt to establish a connection to the specified host on the default FTP control port (port 21).

**3. Logging In:**
Once the connection is established, the server will likely prompt you for a username and password.

```
Connected to ftp.example.com.
220---------- Welcome to Pure-FTPd [privsep] [TLS] ----------
220-You are channels to: ftp.example.com
220-Local time is now 10.30. Please write HELP for help.
220-Best professional support site: http://www.pureftpd.org/
220-
220-Warning: Local time zone does not match server time zone.
Name (ftp.example.com:yourusername):
```

*   **Username:** You'll be asked for your username. If you're connecting to a public server that allows anonymous access, you might type `anonymous`. For private servers, you'll use your specific username. If you press Enter without typing anything, it often defaults to your current system username. Schneider and Gersting often highlight the importance of proper authentication in networked systems.
*   **Password:** After entering your username, you'll be prompted for your password. Type it carefully, and remember that when you type passwords in the terminal, you won't see any characters appear on the screen for security reasons.

**Example Scenario:**
Imagine you're uploading a project to your web host. Your hosting provider might give you `ftp.mywebsite.com` as the server, and your username might be `myprojectuser` with a password like `SuperSecr3t`.

```bash
ftp ftp.mywebsite.com
```

The terminal will show something like:

```
Name (ftp.mywebsite.com:yourusername): myprojectuser
Password:
230------ 220--------------------------------------------
230------                                                 ------230------
230------          Welcome to our FTP Server!             ------230------
230------                                                 ------230------
230------       This is a private system. No anonymous login.     ------230------
230------                                                 ------230------
230------ You are User 'myprojectuser' logged in           ------230------
230------                                                 ------230------
230 Successfully logged in.
```

You'll then see an `ftp>` prompt, indicating you are successfully logged in and ready to issue commands.

### Basic FTP Commands

Once you're logged in, you can use various commands. Think of these as instructions you give to the "librarian."

*   **`ls` or `dir`:** To list the files and directories in your current location on the *remote* server. This is crucial for understanding where you are and what's available. `ls` is more common in Linux-like environments, while `dir` might work on some servers.
    *   **Analogy:** This is like asking the librarian, "What books are on this shelf?"

*   **`cd` (Change Directory):** To navigate through directories on the remote server.
    *   **Analogy:** This is like moving from one aisle to another in the library. For example, `cd public_html` would take you to the `public_html` directory, a common place for web files.

*   **`lcd` (Local Change Directory):** To change the directory on your *local* machine. This is important when you need to upload files from a specific folder on your computer.
    *   **Analogy:** This is like deciding which box you'll be picking books from back at your desk before going to the library.

*   **`pwd`:** To print the working directory on the *remote* server. It tells you your current location on the server.
    *   **Analogy:** Asking the librarian, "Exactly which shelf am I standing in front of right now?"

*   **`lls` or `ldir`:** To list files and directories on your *local* machine. This helps you see what files you have available to upload.
    *   **Analogy:** Looking at the boxes you brought with you to the library.

*   **`get <filename>`:** To download a file from the remote server to your local machine.
    *   **Analogy:** "Librarian, please give me a copy of 'The Great Gatsby'." The file `The Great Gatsby` will be copied from the server to your current local directory.

*   **`put <filename>`:** To upload a file from your local machine to the remote server.
    *   **Analogy:** "Librarian, I'd like to leave this book, 'My Own Story', on this shelf." The file `My Own Story` will be copied from your local machine to the current directory on the server.

*   **`mget <filename_pattern>`:** To download multiple files matching a pattern. For example, `mget *.txt` would download all files ending with `.txt`.
    *   **Analogy:** "Librarian, please give me all the books with blue covers."

*   **`mput <filename_pattern>`:** To upload multiple files matching a pattern. For example, `mput *.html` would upload all files ending with `.html`.
    *   **Analogy:** "Librarian, I want to leave all these documents, which are all drafts, on this shelf."

*   **`binary`:** To set the transfer mode to binary. This is *essential* for transferring non-text files like images, executables, or compressed archives. If you don't set this, these files can become corrupted.
    *   **Analogy:** When you're transferring a delicate sculpture, you need to be extra careful about how it's handled. Binary mode ensures the data is transferred byte-for-byte, preserving its original form.

*   **`ascii`:** To set the transfer mode to ASCII. This is used for plain text files. It handles line ending conversions between different operating systems (e.g., Windows CRLF to Unix LF).
    *   **Analogy:** When transferring a simple handwritten note, the format might need slight adjustments to be readable in a new context.

*   **`quit` or `bye`:** To disconnect from the FTP server and exit the `ftp` client.
    *   **Analogy:** "Thank you for your help, librarian. I'm leaving now."

**Important Note on Transfer Modes:**
By default, FTP often starts in `ascii` mode. If you are transferring anything other than plain text (like `.jpg`, `.zip`, `.exe`), you **must** use the `binary` command *before* you `put` or `get` the file. This is a very common pitfall! Remember this when you're uploading website assets.

**Example Walkthrough: Uploading a File**

Let's say you have a file named `index.html` on your local computer in a directory called `/home/user/mywebsite/`. You want to upload it to the `public_html` directory on your FTP server.

1.  **Connect:**
    ```bash
    ftp ftp.mywebsite.com
    ```
    (Enter username and password when prompted)

2.  **Navigate to the target directory on the server:**
    ```ftp
    cd public_html
    ```

3.  **Navigate to the source directory on your local machine:**
    ```ftp
    lcd /home/user/mywebsite/
    ```

4.  **Ensure binary mode (good practice, even for HTML, though ASCII is technically fine for pure text):**
    ```ftp
    binary
    ```

5.  **Upload the file:**
    ```ftp
    put index.html
    ```

    The `ftp` client will show the progress:

    ```
    200 SITE command accepted
    150 Opening data connection for file transfer
    226 Transfer complete
    ftp: 127 bytes received in 0.00Seconds 127000.00Kbytes/sec.
    ```

6.  **Check if it's there (optional but good practice):**
    ```ftp
    ls
    ```
    You should see `index.html` listed in the `public_html` directory.

7.  **Disconnect:**
    ```ftp
    quit
    ```

This sequence demonstrates the core usage of `ftp` and connects directly to **CO2** as you’re actively using the command line for file transfer operations.

### Anonymous FTP

Some FTP servers are configured to allow anonymous access. This is often used for distributing public files like software or documentation. When connecting to an anonymous FTP server:

*   **Username:** You typically use `anonymous` or `ftp`.
*   **Password:** You are usually asked for an email address, but any string will often work, or just pressing Enter might suffice. The server uses this "password" more for logging purposes than for security.

This is a great way to practice FTP commands without needing a specific server account. You can often find public FTP servers by searching online.

### Security Considerations and Modern Alternatives

As we touched upon earlier, FTP is inherently insecure.

*   **Unencrypted Transmission:** Both your username, password, and the actual data you transfer are sent in plain text over the network. Anyone sniffing the network traffic (like with Wireshark, tying back to **CO3**) can see this information. This is a major vulnerability, especially on public Wi-Fi networks.
*   **Port 21 is well-known:** Attackers know that FTP uses port 21 for control, making it a target.

Because of these security concerns, **SFTP (SSH File Transfer Protocol)** and **SCP (Secure Copy)** are now widely preferred. These protocols run over SSH, which encrypts the entire communication, protecting your credentials and data.

*   **SFTP:** Often used via clients like `sftp` (which has a similar command structure to `ftp`) or graphical clients like FileZilla.
*   **SCP:** A simpler command-line utility for copying files securely.

While this module focuses on `ftp` for foundational understanding, always consider using SFTP or SCP for any real-world sensitive data transfer. As Englander might put it in "The Architecture of Computer Hardware, Systems Software, & Networking," security is a critical layer in any networked system.

### Summary and Key Takeaways

*   **FTP** is a protocol for transferring files between computers over a network.
*   It uses a **client-server model** and establishes **two connections**: one for commands (control, port 21) and one for data.
*   The command-line `ftp` utility is a powerful tool for managing file transfers directly from the Linux terminal (**CO2**).
*   Key commands include `ls`, `cd`, `get`, `put`, `lcd`, `lls`, `binary`, `ascii`, `quit`.
*   **Always use `binary` mode** for non-text files to prevent corruption.
*   FTP is **insecure** as credentials and data are transmitted in plain text.
*   For secure transfers, prefer **SFTP** or **SCP**.

### Sample Questions with Answers

**1. Conceptual Question:**
Explain the difference between the control connection and the data connection in FTP. Why is this distinction important?

**Answer:**
The control connection in FTP is used for sending commands from the FTP client to the server and receiving server responses. It typically uses port 21. The data connection is established separately for the actual transfer of file content or directory listings. For each file transfer or directory listing request, a new data connection might be established. This distinction is important because it dictates how FTP traffic is managed by firewalls and how different types of data transfer (commands vs. actual files) are handled. It also highlights a design choice that has security and efficiency implications.

**2. Exam-Oriented Question:**
You need to upload an image file (`my_photo.jpg`) from your local Linux machine to an FTP server. You are connected to the server, and your current local directory contains `my_photo.jpg`. What sequence of FTP commands would you use to upload this file, ensuring it's transferred correctly?

**Answer:**
Assuming you are already logged into the FTP server and have navigated to the desired remote directory:

1.  `binary` - This command sets the transfer mode to binary, which is crucial for image files to prevent corruption.
2.  `put my_photo.jpg` - This command uploads the `my_photo.jpg` file from your current local directory to the current remote directory.

**Reasoning:**
The `binary` command ensures that the file is transferred byte-for-byte, preserving its integrity. If `ascii` mode were used, characters like carriage returns and line feeds might be altered, corrupting the image. The `put` command is the standard FTP command for uploading a file.

**3. Practical Application Question:**
Why is it generally a bad idea to transmit sensitive information (like passwords or credit card numbers) using a standard FTP connection, especially when connected to a public Wi-Fi network?

**Answer:**
Standard FTP transmits all data, including usernames and passwords, in plain text over the network. On a public Wi-Fi network, other users on the same network can potentially "sniff" this network traffic using tools like Wireshark (linking to **CO3**). If they capture your FTP login credentials, they can then use those credentials to access the FTP server and potentially steal sensitive files or impersonate you. This lack of encryption makes standard FTP unsuitable for transmitting any sensitive data. Protocols like SFTP or HTTPS are necessary for secure communication.
