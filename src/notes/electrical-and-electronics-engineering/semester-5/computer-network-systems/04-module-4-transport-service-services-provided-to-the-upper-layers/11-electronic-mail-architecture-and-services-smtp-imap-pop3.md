---
title: "Electronic mail – Architecture and services- SMTP – IMAP - POP3"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3649c"
status: "completed"
scrapedAt: "2026-05-23T16:20:29.446Z"
---
## COMPUTER NETWORK SYSTEMS: Module 4 - Transport Service: Services Provided to the Upper Layers

### Topic: Electronic Mail – Architecture and Services - SMTP – IMAP - POP3

This module delves into the fundamental services provided by the transport layer, focusing on how these services enable essential applications for users. Electronic mail is a prime example of such an application, and understanding its underlying protocols is crucial.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   **Explain the architecture of electronic mail systems.**
*   **Describe the services provided by electronic mail.**
*   **Understand the role and functionality of the Simple Mail Transfer Protocol (SMTP).**
*   **Differentiate between the Internet Message Access Protocol (IMAP) and the Post Office Protocol version 3 (POP3).**
*   **Compare and contrast the access methods provided by IMAP and POP3.**

---

### Course Outcomes Alignment:

This topic directly contributes to:

*   **CO4: Explain the services provided by the transport layer and application layer. (Knowledge Level: K2)**
    *   Understanding how the transport layer facilitates the application layer services of electronic mail.
    *   Explaining the functionality of key application layer protocols for email.

---

### 1. Electronic Mail: Architecture and Services

Electronic mail (email) is one of the most widely used applications in computer networks. It allows users to send and receive messages electronically.

#### 1.1 Architecture of Electronic Mail

Email systems are typically distributed and involve several key components:

*   **Mailbox:** A storage location on a mail server where incoming messages for a specific user are kept.
*   **Mail Client (User Agent - UA):** A program that allows users to compose, send, receive, and manage their emails. Examples include Outlook, Thunderbird, Gmail web interface, etc.
*   **Mail Server (Mail Transfer Agent - MTA):** A server that handles the transfer of emails between mail servers and stores incoming mail in user mailboxes. Examples include Sendmail, Postfix, Exim.
*   **Mail Submission Agent (MSA):** A specialized server that receives outgoing emails from mail clients. This is often a port on the mail server.
*   **Mail Delivery Agent (MDA):** A program on the mail server that delivers incoming mail to the correct user's mailbox.

**Basic Email Transfer Flow:**

1.  **User A (Client) composes an email** using their Mail Client.
2.  **Mail Client sends the email to a Mail Submission Agent (MSA)**, often on the sender's Mail Server.
3.  **The Mail Server (MTA) determines the recipient's mail server.**
4.  **The sender's Mail Server (MTA) connects to the recipient's Mail Server (MTA)** using SMTP.
5.  **The recipient's Mail Server (MTA) receives the email and stores it in the recipient's Mailbox.**
6.  **User B (Client) retrieves the email** from their Mailbox using a Mail Access Protocol (POP3 or IMAP) via their Mail Client.

**Diagrammatic Representation (Conceptual):**

```
      +-------------+       +-------------+       +-------------+
      | User A      | ----> | Mail Client | ----> | Mail Server |
      | (Sender)    |       | (UA)        |       | (MSA/MTA)   |
      +-------------+       +-------------+       +-------------+
                                                           | (SMTP)
                                                           v
                                                      +-------------+
                                                      | Mail Server |
                                                      | (MTA/MDA)   |
                                                      +-------------+
                                                           |
                                                           v
                                                      +-------------+
                                                      | Mailbox for |
                                                      | User B      |
                                                      +-------------+
                                                           ^
                                                           | (POP3/IMAP)
                                                      +-------------+
                                                      | Mail Client |
                                                      | (UA)        |
                                                      +-------------+
                                                      | User B      |
                                                      | (Recipient) |
                                                      +-------------+
```

*(Source: Adapted from Tanenbaum's Computer Networks, 5th Ed., Chapter 6)*

#### 1.2 Services Provided by Electronic Mail

*   **Message Composition:** Users can create and format text messages.
*   **Message Sending:** Facilitates the transmission of messages from one user to another, potentially across different networks.
*   **Message Receiving:** Enables users to access and retrieve incoming messages.
*   **Message Storage:** Provides a mechanism to store messages on mail servers for later retrieval.
*   **Message Forwarding:** Allows users to forward received messages to other recipients.
*   **Attachments:** Supports the inclusion of non-textual data (files, images, etc.) along with messages.

---

### 2. Simple Mail Transfer Protocol (SMTP)

SMTP is the **de facto standard protocol for sending emails** across the internet. It is an **application layer protocol** that operates over TCP.

#### 2.1 Key Concepts and Functionality

*   **Purpose:** Primarily used for sending (pushing) email messages from a client to a server, and from one mail server to another.
*   **Transport Layer:** SMTP relies on **TCP** for reliable data transfer. It typically uses **port 25** for server-to-server communication and **port 587** for mail submission from clients.
*   **Client-Server Model:** SMTP operates in a client-server model. The mail client acts as the SMTP client, and the mail server acts as the SMTP server.
*   **Connection Establishment:** An SMTP client initiates a TCP connection to an SMTP server.
*   **Transaction Phases:** An SMTP transaction consists of three phases:
    1.  **Handshake:** The client and server exchange greetings.
    2.  **Transfer:** The sender specifies the sender and recipient addresses, and then sends the message content.
    3.  **Termination:** The client closes the connection.
*   **Commands and Responses:** Communication between the client and server is done through a series of commands sent by the client and responses (status codes and messages) sent by the server.

#### 2.2 Key SMTP Commands (Examples)

| Command       | Description                                                                     |
| :------------ | :------------------------------------------------------------------------------ |
| **HELO/EHLO** | Initiates communication, identifies the client to the server. EHLO is extended. |
| **MAIL FROM** | Specifies the sender's email address.                                           |
| **RCPT TO**   | Specifies the recipient's email address. Can be used multiple times.            |
| **DATA**      | Indicates that the following lines are the message content.                     |
| **QUIT**      | Terminates the SMTP session.                                                    |
| **RSET**      | Resets the sender, recipient, and message data.                                 |
| **VRFY**      | Verifies a recipient's address. (Often disabled for security)                   |
| **EXPN**      | Expands a mailing list. (Often disabled for security)                           |

#### 2.3 Key SMTP Responses (Status Codes)

SMTP responses are three-digit codes followed by a text message.

| Code | Meaning                 | Description                                                                       |
| :--- | :---------------------- | :-------------------------------------------------------------------------------- |
| 2xx  | Success                 | Command successful.                                                               |
| 3xx  | Intermediate positive   | Command needs more information.                                                   |
| 4xx  | Transient negative      | Command failed, but retry might succeed.                                          |
| 5xx  | Permanent negative      | Command failed, and retrying will likely also fail.                               |

**Example SMTP Conversation:**

```
Client: EHLO mail.example.com
Server: 250-mail.example.com
Server: 250-SIZE 35882577
Server: 250-8BITMIME
Server: 250 HELP

Client: MAIL FROM:<sender@example.com>
Server: 250 2.1.0 Ok

Client: RCPT TO:<recipient@domain.com>
Server: 250 2.1.5 Ok

Client: DATA
Server: 354 Start mail input; end with <CRLF>.<CRLF>
Subject: Hello
From: sender@example.com
To: recipient@domain.com

This is the body of the email.
.

Server: 250 2.0.0 Ok: queued as 12345

Client: QUIT
Server: 221 Bye
```

*(Source: RFC 5321 - Simple Mail Transfer Protocol)*

#### 2.4 SMTP and MIME (Multipurpose Internet Mail Extensions)

*   SMTP was originally designed for plain text messages.
*   **MIME** is a standard that extends SMTP to support **non-textual content**, such as images, audio, video, and structured documents.
*   MIME defines headers that describe the content type and encoding of the message body, allowing email clients to properly interpret and display various types of attachments.

#### 2.5 Important Points to Remember about SMTP

*   **Push Protocol:** SMTP is designed for sending emails. It does not handle the retrieval of emails.
*   **Text-based:** The protocol itself is text-based.
*   **Reliable Transport:** Relies on TCP for delivery.
*   **Port 25 (Server-to-Server) & Port 587 (Mail Submission):** Key ports to remember.
*   **MIME Extension:** Crucial for sending non-textual content.

---

### 3. Internet Message Access Protocol (IMAP)

IMAP is a **protocol for accessing and retrieving emails** from a mail server. It allows users to manage their emails directly on the server.

#### 3.1 Key Concepts and Functionality

*   **Purpose:** To provide a way for email clients to access and manage emails stored on a mail server.
*   **Server-centric:** Emails remain on the server by default. The client synchronizes with the server.
*   **Access Methods:**
    *   **Online Access:** Users typically interact with their mailboxes while connected to the server.
    *   **Offline Access:** Clients can download messages for offline reading, but changes made offline are synchronized when the connection is re-established.
*   **Features:**
    *   **Folder Management:** Users can create, delete, and manage folders (e.g., Inbox, Sent, Spam, custom folders) on the server.
    *   **Message Status:** Allows clients to mark messages as read, unread, flagged, replied, etc., and these statuses are maintained on the server.
    *   **Search and Sort:** Enables clients to search and sort messages on the server.
    *   **Multiple Client Access:** Users can access their mail from multiple devices or clients simultaneously, and their view of the mailbox will be consistent across all clients.
*   **Transport Layer:** IMAP typically uses **TCP port 143** for unencrypted communication and **port 993** for secure communication (IMAP over SSL/TLS, often called IMAPS).

#### 3.2 IMAP Operations (Examples)

*   **`LOGIN`**: Authenticates the user.
*   **`SELECT`**: Selects a mailbox (e.g., "INBOX").
*   **`FETCH`**: Retrieves message data (headers, body).
*   **`STORE`**: Modifies message flags or attributes.
*   **`CREATE`**: Creates a new folder.
*   **`DELETE`**: Deletes a folder.

#### 3.3 Important Points to Remember about IMAP

*   **"Keep on Server" Model:** Emails are primarily stored on the server.
*   **Rich Feature Set:** Offers robust mailbox management features.
*   **Multiple Device Sync:** Ideal for users accessing email from multiple devices.
*   **Port 143 (Unencrypted) & 993 (Encrypted):** Key ports.

---

### 4. Post Office Protocol version 3 (POP3)

POP3 is another protocol for accessing and retrieving emails, but it operates differently from IMAP.

#### 4.1 Key Concepts and Functionality

*   **Purpose:** To download emails from a mail server to a client and then typically delete them from the server.
*   **Client-centric:** The primary action is to download emails to the client's local storage.
*   **Access Methods:**
    *   **Download and Delete:** The default behavior is to download messages to the client and then remove them from the server. This frees up server space but makes emails accessible only on the device where they were downloaded.
    *   **Download and Keep:** Many POP3 clients offer an option to keep a copy of the messages on the server for a specified period, offering some flexibility.
*   **Features:**
    *   **Simpler than IMAP:** Generally has a less complex feature set compared to IMAP.
    *   **Offline Access:** Once downloaded, emails are available offline without needing a server connection.
    *   **Limited Folder Management:** Typically deals with a single "Inbox" on the server. Local folders are managed by the client.
*   **Transport Layer:** POP3 typically uses **TCP port 110** for unencrypted communication and **port 995** for secure communication (POP3 over SSL/TLS, often called POP3S).

#### 4.2 POP3 Operations (Examples)

*   **`USER`**: Specifies the user's username.
*   **`PASS`**: Specifies the user's password.
*   **`STAT`**: Retrieves mailbox status (number of messages, total size).
*   **`LIST`**: Lists message numbers and sizes.
*   **`RETR`**: Retrieves a specific message.
*   **`DELE`**: Marks a message for deletion.
*   **`QUIT`**: Exits POP3 and commits deletions.

#### 4.3 Important Points to Remember about POP3

*   **"Download and Delete" Model:** Emails are typically removed from the server after download.
*   **Local Storage:** Primarily intended for accessing emails locally.
*   **Limited Synchronization:** Not ideal for accessing email from multiple devices simultaneously.
*   **Port 110 (Unencrypted) & 995 (Encrypted):** Key ports.

---

### 5. Comparing IMAP and POP3

| Feature           | IMAP (Internet Message Access Protocol)                                | POP3 (Post Office Protocol v3)                                       |
| :---------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------ |
| **Primary Goal**  | Access and manage emails on the server.                                | Download emails from the server to the client.                      |
| **Email Storage** | Emails remain on the server by default.                                | Emails are typically deleted from the server after download.        |
| **Access Method** | Server-centric; synchronized across multiple clients.                  | Client-centric; primarily for a single client's local storage.      |
| **Folder Mgmt.**  | Rich folder management on the server.                                  | Limited folder management on the server (primarily Inbox).          |
| **Message Status**| Status (read, unread, flagged) synced across clients.                 | Status is client-specific; not synced if multiple clients access.   |
| **Offline Access**| Can download for offline reading, but syncs when online.             | Downloads emails for offline access; server copy is often removed.  |
| **Bandwidth Use** | Can be higher as it synchronizes state and potentially downloads parts. | Can be lower as it downloads entire messages and then disconnects. |
| **Use Case**      | Users accessing email from multiple devices/clients.                   | Users primarily accessing email from one device, wanting local copies. |
| **Default Ports** | 143 (unencrypted), 993 (SSL/TLS)                                       | 110 (unencrypted), 995 (SSL/TLS)                                    |

*(Source: Forouzan's Data Communication and Networking, 5th Ed., Chapter 20)*

---

### Practice Questions & Exercises

**Multiple Choice Questions:**

1.  Which protocol is primarily used for *sending* emails from a client to a server and between servers?
    a) POP3
    b) IMAP
    c) SMTP
    d) HTTP

2.  Which protocol allows users to manage their email folders and message statuses directly on the mail server, enabling synchronization across multiple devices?
    a) POP3
    b) IMAP
    c) SMTP
    d) FTP

3.  The default behavior of POP3 is to:
    a) Keep emails on the server and allow remote access.
    b) Download emails to the client and then delete them from the server.
    c) Synchronize email status with multiple clients.
    d) Only download email headers.

4.  Which port is commonly used for secure IMAP communication (IMAPS)?
    a) 110
    b) 143
    c) 993
    d) 995

**Short Answer Questions:**

5.  Explain the roles of a Mail Client and a Mail Server in the electronic mail system.
6.  What is the purpose of MIME in the context of email?
7.  Describe the main difference between the email access models of IMAP and POP3.
8.  Why is it generally recommended to use the secure versions (IMAPS/POP3S) of IMAP and POP3?

**Scenario-Based Question:**

9.  Sarah uses her email on her laptop, her smartphone, and a web browser on a public computer. She wants to ensure that when she marks an email as "read" on her laptop, it also appears as "read" on her smartphone, and that if she deletes an email on her phone, it is removed from all her access points. Which email access protocol would be most suitable for Sarah and why?

---

### Answers to Practice Questions

**Multiple Choice Questions:**

1.  **c) SMTP** (Simple Mail Transfer Protocol is for sending/pushing emails.)
2.  **b) IMAP** (IMAP allows server-side management and synchronization.)
3.  **b) Download emails to the client and then delete them from the server.** (This is the default, though configurable.)
4.  **c) 993** (Port 993 is for IMAP over SSL/TLS.)

**Short Answer Questions:**

5.  **Mail Client (User Agent - UA):** Software used by the end-user to compose, send, receive, and manage emails (e.g., Outlook, Thunderbird). **Mail Server (Mail Transfer Agent - MTA):** Server responsible for receiving emails from sending servers, storing them in user mailboxes, and forwarding them to recipient servers.
6.  **MIME (Multipurpose Internet Mail Extensions)** extends SMTP to support non-textual content (attachments like images, audio, video) by defining headers that specify the content type and encoding.
7.  The main difference is where the emails are stored and managed. **IMAP** keeps emails on the server, allowing access and management from multiple clients with synchronized views. **POP3** typically downloads emails to the client and removes them from the server, making them primarily accessible from the device where they were downloaded.
8.  Using secure versions (IMAPS on port 993 and POP3S on port 995) encrypts the communication between the email client and the server. This protects sensitive information like login credentials and the content of emails from being intercepted by unauthorized parties on the network.

**Scenario-Based Question:**

9.  **IMAP** would be most suitable for Sarah.
    *   **Why IMAP:** IMAP is designed for server-side management of emails. When Sarah marks an email as read or deletes it on one device, this change is reflected on the mail server. Consequently, when she accesses her email from another device, the server's state is synchronized, showing the email as read or deleted across all her access points. This consistent view across multiple devices is a key advantage of IMAP. POP3, with its default "download and delete" behavior, would not provide this synchronization.

---

### Important Points to Remember:

*   **SMTP is for PUSHING emails, POP3 and IMAP are for PULLING emails.**
*   **SMTP uses TCP ports 25 (server-to-server) and 587 (mail submission).**
*   **POP3 uses TCP ports 110 (unencrypted) and 995 (encrypted).**
*   **IMAP uses TCP ports 143 (unencrypted) and 993 (encrypted).**
*   **IMAP provides a richer, server-centric experience ideal for multi-device access.**
*   **POP3 provides a simpler, client-centric experience focused on local storage.**
*   **MIME is essential for sending attachments with emails.**
*   **Understanding the transport layer's role (TCP for reliability) is crucial for these application layer protocols.**

---
*(Content adapted from Tanenbaum's Computer Networks, 5th Ed., Forouzan's Data Communication and Networking, 5th Ed., and Kurose & Ross's Computer Networking: A Top-Down Approach, 6th Ed.)*
