---
title: "Email application: SMTP, Message format, MIME, POP3"
subject: "COMPUTER NETWORKS"
module: "Module 2: TCP/IP protocol suite: Introduction"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff044"
status: "completed"
scrapedAt: "2026-05-23T17:59:59.091Z"
---
# Computer Networks: Module 2 - TCP/IP Protocol Suite: Introduction

## Topic: Email Application: SMTP, Message Format, MIME, POP3

This module introduces the fundamental protocols of the TCP/IP suite, with a specific focus on the widely used Email application. We will explore how emails are sent, received, and the underlying mechanisms that enable this process.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the role of the Email application within the TCP/IP protocol suite.
*   Explain the functionality and protocol used for sending emails (SMTP).
*   Describe the standard format of an email message.
*   Understand the purpose and mechanism of MIME for extending email content.
*   Explain the functionality and protocol used for retrieving emails (POP3).
*   Relate these protocols to the layered architecture of the TCP/IP model (specifically Application Layer).

### Course Outcomes Alignment

This topic directly contributes to the following Course Outcomes:

*   **CO1 (K2):** Summarize the principles and components of computer networks, switching, basic concepts of delay analysis and the layered network architecture. (Understanding the Email application's place in the Application Layer and its interactions with transport layers).
*   **CO2 (K2):** Demonstrate protocols and the functions of different layers. (Detailed understanding of SMTP, POP3, and MIME protocols at the Application Layer).

---

## 1. The Email Application

Email is one of the oldest and most ubiquitous applications running on the Internet. It allows users to send and receive text messages, and with extensions like MIME, can also carry various types of data, such as images, audio, and video.

**Key Concept:** The email application operates at the **Application Layer** of the TCP/IP model. It relies on lower-layer protocols (like TCP and IP) for reliable and efficient delivery of messages across the network.

---

## 2. Simple Mail Transfer Protocol (SMTP)

SMTP is the **primary protocol used for sending email messages** from a client to a mail server, and between mail servers.

**Key Concepts & Definitions:**

*   **Client-to-Server:** When you compose an email and click "send," your email client (e.g., Outlook, Gmail web interface) uses SMTP to send the message to your outgoing mail server.
*   **Server-to-Server:** Once the outgoing mail server receives the message, it uses SMTP to transfer the message to the recipient's mail server.
*   **Push Protocol:** SMTP is considered a "push" protocol because it is used to push email messages from the sender to the receiver's mail server. It doesn't directly support pulling messages from the server to the client.
*   **TCP-based:** SMTP typically runs over **TCP port 25**. TCP provides reliable, ordered, and error-checked delivery, which is essential for email transmission.
*   **Text-based Protocol:** The communication between an SMTP client and server is done through plain text commands and responses.

**How SMTP Works (Simplified Flow):**

1.  **Connection Establishment:** The sending client (or mail server) establishes a TCP connection with the recipient's mail server on port 25.
2.  **Greeting (HELO/EHLO):** The client sends a `HELO` (or `EHLO` for extended SMTP) command to introduce itself to the server.
3.  **Sender Identification (MAIL FROM):** The client specifies the sender's email address using the `MAIL FROM:` command.
4.  **Recipient Identification (RCPT TO):** The client specifies the recipient's email address(es) using the `RCPT TO:` command. This can be repeated for multiple recipients.
5.  **Data Transmission (DATA):** Once all recipients are specified, the client sends the `DATA` command. This is followed by the actual email message content (headers and body), terminated by a line containing only a period (`.`).
6.  **Confirmation/Rejection:** The server acknowledges the reception of the data and informs the client whether the message was accepted or rejected.
7.  **Connection Termination (QUIT):** The client sends the `QUIT` command to close the TCP connection.

**Example SMTP Session (Illustrative):**

```
S: 220 smtp.example.com ESMTP Postfix
C: EHLO mail.sender.com
S: 250-smtp.example.com
S: 250-PIPELINING
S: 250-SIZE 10240000
S: 250-VRFY
S: 250-ETRN
S: 250-STARTTLS
S: 250-ENHANCEDSTATUSCODES
S: 250-8BITMIME
S: 250 DSN
C: MAIL FROM:<sender@sender.com>
S: 250 2.1.0 Ok
C: RCPT TO:<recipient@example.com>
S: 250 2.1.5 Ok
C: DATA
S: 354 Start mail input; end with <CRLF>.<CRLF>
C: From: Sender <sender@sender.com>
C: To: Recipient <recipient@example.com>
C: Subject: Test Email
C:
C: This is the body of the email.
C: .
S: 250 2.0.0 Ok: queued as 12345ABCDE
C: QUIT
S: 221 2.0.0 Bye
```

**Important Points to Remember about SMTP:**

*   SMTP is for **sending** email.
*   It's a **push** protocol.
*   Runs on **TCP port 25** by default.
*   It's a **text-based** protocol with specific commands.
*   SMTP itself **does not handle email retrieval** by the end-user.

---

## 3. Email Message Format

An email message is structured into two main parts: **headers** and a **body**.

**Key Concepts & Definitions:**

*   **Headers:** Provide metadata about the email, such as the sender, recipient, subject, date, and routing information. They are crucial for mail servers and clients to process and display the email correctly.
*   **Body:** Contains the actual content of the message, which can be plain text or structured data (using MIME).

**Standard Email Format (RFC 822 / RFC 5322):**

An email message is a plain text file, with headers and body separated by a blank line.

```
Header-Field-1: Value-1
Header-Field-2: Value-2
...
Header-Field-N: Value-N

Body of the email message.
This can be multiple lines.
```

**Common Header Fields:**

*   `From:`: The email address of the sender.
*   `To:`: The email address(es) of the primary recipient(s).
*   `Cc:`: (Carbon Copy) Email address(es) of secondary recipients who should receive a copy.
*   `Bcc:`: (Blind Carbon Copy) Email address(es) of recipients who should receive a copy without other recipients knowing.
*   `Subject:`: A brief summary of the email's content.
*   `Date:`: The date and time the email was sent.
*   `Message-ID:`: A unique identifier for the message.
*   `Received:`: Added by each mail server as the message passes through, indicating the server and the time it received the message. This is crucial for tracing the email's path.
*   `Content-Type:`: Specifies the media type of the message body (e.g., `text/plain`, `text/html`, `multipart/mixed`).

**Example Email Message (RFC 822/5322 compliant):**

```
From: Alice <alice@sender.com>
To: Bob <bob@recipient.com>
Cc: charlie@other.com
Subject: Meeting Reminder
Date: Tue, 25 Oct 2023 10:00:00 -0700
Message-ID: <abc123def456@mail.sender.com>
Received: by mail.sender.com (Postfix, from client[192.168.1.100]); Tue, 25 Oct 2023 10:00:00 -0700
Received: from mx.example.com (mx.example.com [203.0.113.1]) by mail.sender.com with ESMTP id 1234567890; Tue, 25 Oct 2023 10:00:00 -0700

This is a reminder for our meeting tomorrow at 9 AM.
Please bring your project status reports.

Regards,
Alice
```

**Kurose & Ross Reference:** Chapter 6 of "Computer Networking: A Top-Down Approach" often discusses application-layer protocols like email, explaining the message format and the role of protocols like SMTP. They emphasize the layered nature and how application protocols rely on transport protocols.

---

## 4. MIME (Multipurpose Internet Mail Extensions)

MIME was developed to overcome the limitations of plain text-only emails specified by RFC 822. It allows for the transmission of **non-textual data** (binary files, images, audio, etc.) and structured messages with multiple parts.

**Key Concepts & Definitions:**

*   **Extending Email Capabilities:** MIME provides a framework to encode various data types into a format that can be transmitted through SMTP.
*   **Content-Type Header:** MIME introduces new header fields, most importantly `Content-Type`, which tells the receiving email client what kind of data is in the message body.
*   **Content-Transfer-Encoding Header:** This header specifies the encoding used to convert the data into a form suitable for transmission over SMTP. Common encodings include:
    *   `7bit`: For plain ASCII text.
    *   `8bit`: For extended ASCII or other 8-bit characters.
    *   `Base64`: Encodes binary data into printable ASCII characters. This is very common for attachments.
    *   `Quoted-Printable`: Encodes non-ASCII characters into a form usable by 7-bit SMTP, while keeping most of the text in its original form.
*   **Multipart Messages:** MIME allows a single email message to contain multiple parts, each with its own `Content-Type`. The most common type is `multipart/mixed`, where each part can be a different type of data.

**How MIME Works:**

1.  **Encoding:** Before sending an email with non-textual content, the sending email client uses MIME encoding techniques (like Base64) to convert the binary data into a text-based representation.
2.  **Header Fields:** The `Content-Type` header is set to indicate the media type (e.g., `image/jpeg`, `application/pdf`, `text/html`). The `Content-Transfer-Encoding` header is set to the encoding used (e.g., `base64`).
3.  **Multipart Structure:** If an email has multiple parts (e.g., a text body and an attachment), the `Content-Type` is set to `multipart/mixed`, and a unique boundary string is used to separate the parts. Each part then has its own headers.
4.  **Decoding:** The receiving email client reads the MIME headers, recognizes the `Content-Type` and `Content-Transfer-Encoding`, and uses the appropriate decoding mechanism (e.g., Base64 decoding) to reconstruct the original data.

**Example MIME Message Structure:**

```
From: Alice <alice@sender.com>
To: Bob <bob@recipient.com>
Subject: Report with Attachment
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="===============4215918327=="

--===============4215918327==
Content-Type: text/plain; charset="utf-8"
Content-Transfer-Encoding: 7bit

Hi Bob,

Please find the attached report.

Regards,
Alice
--===============4215918327==
Content-Type: application/pdf; name="report.pdf"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename="report.pdf"

JVBERi0xLjQKJc... (Base64 encoded PDF content) ...
=
--===============4215918327==--
```

**Forouzan Reference:** Behrouz Forouzan's "Data Communications and Networking" provides a thorough explanation of email protocols and the evolution to MIME to handle multimedia content. He details the structure of MIME messages and the role of different headers.

**Important Points to Remember about MIME:**

*   MIME extends email to support **non-textual data**.
*   Uses `Content-Type` and `Content-Transfer-Encoding` headers.
*   Enables **multipart messages** (text + attachments).
*   Common encodings: `Base64`, `Quoted-Printable`.

---

## 5. Post Office Protocol Version 3 (POP3)

While SMTP is used for sending emails, POP3 is one of the most common protocols used by email clients to **retrieve emails from a mail server**.

**Key Concepts & Definitions:**

*   **Client-to-Server Retrieval:** When you check your email, your email client uses POP3 to connect to your incoming mail server and download new messages.
*   **Pull Protocol:** POP3 is a "pull" protocol because the client pulls messages from the server.
*   **TCP-based:** POP3 typically runs over **TCP port 110**.
*   **Simple and State-less (mostly):** POP3 is a relatively simple protocol. It operates in two main states: Authorization and Transaction.
*   **Mailbox Access:** POP3 accesses a user's mailbox on the server.
*   **Download and Delete:** By default, when a client retrieves an email using POP3, it is usually deleted from the mail server. This behavior can be configured in most clients to keep a copy on the server.
*   **Transaction Log:** POP3 maintains a simple transaction log on the server, marking messages as deleted or not.

**How POP3 Works (Simplified Flow):**

1.  **Connection Establishment:** The email client establishes a TCP connection with the mail server on port 110.
2.  **Authorization State:**
    *   The server sends a welcome message.
    *   The client sends its username (`USER <username>`).
    *   The client sends its password (`PASS <password>`).
    *   The server authenticates the user.
3.  **Transaction State:** Once authorized, the client can issue commands to manage its mailbox:
    *   `STAT`: Retrieves the number of messages and the total size of the mailbox.
    *   `LIST`: Lists the message numbers and sizes.
    *   `RETR <msg_number>`: Retrieves a specific message.
    *   `DELE <msg_number>`: Marks a message for deletion.
    *   `NOOP`: Does nothing, used to keep the connection alive.
    *   `RSET`: Resets the delete flags (unmarks messages marked for deletion).
4.  **Update and Exit:** When the client sends `QUIT`, the server performs any pending deletions and closes the connection.

**Example POP3 Session (Illustrative):**

```
S: +OK POP3 server ready
C: USER alice
S: +OK
C: PASS secretpassword
S: +OK Mailbox locked and ready
C: STAT
S: +OK 2 120
C: LIST
S: +OK 1 60
S: +OK 2 60
S: .
C: RETR 1
S: +OK 60 octets
S: From: Alice <alice@sender.com>
S: To: Bob <bob@recipient.com>
S: Subject: Test Email
S:
S: This is the body of the email.
S: .
C: DELE 1
S: +OK message 1 deleted
C: QUIT
S: +OK
```

**Important Points to Remember about POP3:**

*   POP3 is for **retrieving** email.
*   It's a **pull** protocol.
*   Runs on **TCP port 110**.
*   **Downloads messages** from the server to the client.
*   By default, **deletes messages from the server** after retrieval (can be configured).
*   Each client accessing the same mailbox via POP3 can lead to **sync issues** if not managed carefully (e.g., if one client deletes a message).

---

## 6. Email Architecture and Layered Model

The Email application clearly demonstrates the principles of layered network architecture, particularly the TCP/IP model.

*   **Application Layer:** Houses the Email application itself, along with the protocols like SMTP (for sending) and POP3 (for receiving). MIME also operates at this layer to format the message content.
*   **Transport Layer:** The Email application relies on **TCP** for reliable data transfer. SMTP and POP3 establish TCP connections to ensure messages are delivered without loss or corruption. TCP provides end-to-end communication and flow control.
*   **Internet Layer:** The **IP** protocol is used to route the email packets from the sender's mail server to the recipient's mail server across the internet. IP handles addressing and packet forwarding.
*   **Link Layer & Physical Layer:** These layers are responsible for the actual transmission of data bits over the physical medium (e.g., Ethernet, Wi-Fi).

**Kurose & Ross Reference:** Their "Top-Down Approach" is excellent for understanding how applications leverage lower-layer services. They emphasize that the application protocol designer doesn't need to worry about the details of the physical link or even the network layer routing; they can assume the transport layer (TCP) provides a reliable data stream.

---

## Practice Questions

**Question 1:**

Which protocol is primarily responsible for sending email messages from a client to a mail server and between mail servers?

a) POP3
b) IMAP
c) SMTP
d) HTTP

**Question 2:**

A typical email message consists of two main parts. What are they?

a) Headers and Attachments
b) Headers and Body
c) Body and Footers
d) Subject and Content

**Question 3:**

You want to send an email that includes an image file. What mechanism would you likely use to ensure the image data is correctly transmitted via SMTP?

a) Encrypting the image with SSL
b) Using MIME to encode the image data
c) Sending the image as a separate FTP transfer
d) Using HTTP POST to upload the image

**Question 4:**

If an email client uses POP3 and chooses the "delete from server after download" option, what happens to the email on the mail server after the client retrieves it?

a) It is archived for backup.
b) It remains on the server for 30 days.
c) It is deleted from the server.
d) It is moved to a "read" folder on the server.

**Question 5:**

Which of the following is NOT a common header field in an email message?

a) `From:`
b) `To:`
c) `Bandwidth:`
d) `Subject:`

---

## Answers to Practice Questions

**Answer 1:**

**c) SMTP**
SMTP (Simple Mail Transfer Protocol) is the protocol used for sending emails.

**Answer 2:**

**b) Headers and Body**
An email message is divided into headers (metadata) and the body (content).

**Answer 3:**

**b) Using MIME to encode the image data**
MIME (Multipurpose Internet Mail Extensions) is designed to allow non-textual data like images to be encoded and transmitted within email messages via SMTP.

**Answer 4:**

**c) It is deleted from the server.**
By default, POP3 clients typically delete messages from the server once they have been successfully downloaded to the client.

**Answer 5:**

**c) `Bandwidth:`**
While headers like `From:`, `To:`, and `Subject:` are standard, `Bandwidth:` is not a standard SMTP or email message header.

---

## Important Points to Remember

*   **Email is an Application Layer protocol.**
*   **SMTP (Simple Mail Transfer Protocol):** Used for **sending** email. It's a push protocol running on TCP port 25.
*   **Email Message Format:** Consists of `Headers` (metadata) and `Body` (content), separated by a blank line.
*   **MIME (Multipurpose Internet Mail Extensions):** Extends email to support **non-textual content** (images, files) and multipart messages using `Content-Type` and `Content-Transfer-Encoding` headers.
*   **POP3 (Post Office Protocol version 3):** Used for **retrieving** email from a mail server. It's a pull protocol running on TCP port 110, and by default, it deletes messages from the server after download.
*   **Layered Architecture:** Email protocols rely on TCP for reliable transport and IP for routing, demonstrating the layered nature of the TCP/IP suite.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
