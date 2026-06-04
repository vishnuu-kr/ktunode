---
title: "write"
subject: "IT WORKSHOP"
module: "Module 4: Familiarizing basic Unix/Linux commands "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f97d9"
status: "completed"
scrapedAt: "2026-05-23T16:07:32.882Z"
---
# IT WORKSHOP - Module 4: Familiarizing Basic Unix/Linux Commands

## Topic: The `write` Command - Communicating in Real-Time

Welcome back, everyone! In our journey through the Unix/Linux command line, we've been building a toolkit of essential commands. Today, we're going to explore a command that might seem a little old-school at first glance, but it's a fantastic illustration of how we can achieve direct, real-time communication between users on the same system. We're talking about the `write` command.

Now, why would we want to learn about `write` in a module focused on *basic* commands? Well, it directly ties into **Course Outcome 2: Make use of the command line of Linux operating system and shell programming.** Understanding `write` helps us grasp how processes can interact, even at a fundamental user-to-user level. It’s a peek into the underlying communication mechanisms that keep a multi-user system alive and interactive. Think of it as the command line's equivalent of a quick chat message, but with a bit more formality.

### What is `write` and Why Should We Care?

At its core, the `write` command allows you to send messages directly to another user who is currently logged into the same Unix or Linux system. Imagine you're working on a shared server, and you need to ask a colleague a quick question about a file or a process they're running. Instead of finding their email or walking over to their desk (if you even have desks!), you can use `write` to send them an instant message right on their terminal.

This capability is deeply rooted in the multi-user nature of Unix-like systems. As explained in books like "LINUX for Developers" by William Rothwell, these systems are designed to allow multiple users to access and utilize the same resources concurrently. Commands like `write` are crucial for facilitating this shared environment, enabling basic forms of collaboration and system administration.

Think of it like this: your computer, especially when accessed remotely via SSH, is like a shared office building. Many people can be in different offices (terminal sessions) simultaneously. `write` is like being able to slide a note under someone's office door to get their attention. It’s a direct line, a synchronous communication tool.

### How Does `write` Work? The Mechanics

Let's break down how you actually use `write`. The basic syntax is pretty straightforward:

```bash
write username [tty]
```

*   **`username`**: This is the most crucial part. You need to specify the login name of the user you want to send a message to.
*   **`[tty]`**: This is an optional argument. `tty` stands for "Teletypewriter," but in modern systems, it refers to the terminal device a user is currently logged in on (e.g., `pts/0`, `tty1`). If the user is logged in multiple times (perhaps on different terminals or via SSH sessions), you might need to specify which terminal you want to send the message to. If you omit this, `write` will usually pick the first terminal the user is logged into.

**Let's walk through a scenario:**

Suppose your username is `alice` and you want to send a message to `bob`. Bob is currently logged in, and you know his username.

1.  **You type:**
    ```bash
    write bob
    ```
2.  **What happens next?**
    *   The `write` command sends a signal to Bob's terminal.
    *   Bob will see something on his screen, typically a message like:
        ```
        Message from alice on pts/0 (Mon May 13 10:30:00 2024) on yoursystem.
        ```
    *   Bob's terminal then becomes ready to receive input. He can type his reply.
3.  **You type your message:**
    After you type `write bob`, your own terminal waits for you to type your message. You can type multiple lines.
4.  **How do you signal the end of your message?**
    This is a key point! To tell `write` that you've finished your message and want to send it, you need to signal the end-of-file (EOF). In most Unix/Linux shells, this is achieved by pressing **Ctrl+D** on a new, empty line.

    So, the interaction might look like this on your terminal:

    ```bash
    alice@mycomputer:~$ write bob
    Hello Bob, are you there?
    I wanted to ask about the project file.
    (Press Ctrl+D here)
    ```

    Once you press `Ctrl+D`, your message ("Hello Bob, are you there? I wanted to ask about the project file.") is sent to Bob's terminal.

**What Bob sees on his terminal:**

```
Message from alice on pts/0 (Mon May 13 10:30:00 2024) on yoursystem.
Hello Bob, are you there?
I wanted to ask about the project file.
(Alice has ended the message)
```

**Bob's reply:**

Now, Bob can respond. He would type:

```bash
write alice
```

And then type his message. To send it back to you, he'll also use **Ctrl+D**.

This back-and-forth continues until one of you decides to stop. When you're done with the conversation, pressing `Ctrl+D` again (after `write alice`) will terminate your `write` session with Bob.

**Important Nuance: The `tty` Argument**

What if Bob is logged in twice? Let's say he's on `pts/0` (likely an SSH session) and also `tty2` (a local console). If you just type `write bob`, the system might send the message to `tty2`, which Bob might not be actively watching.

To be precise, you can find out which terminals a user is logged into using the `who` command.

```bash
who
```

This might output something like:

```
alice    pts/0        2024-05-13 09:00 (192.168.1.100)
bob      pts/0        2024-05-13 10:05 (192.168.1.105)
bob      tty2         2024-05-13 08:30
```

Here, Bob is on `pts/0` and `tty2`. If you want to ensure your message reaches his SSH session, you would use:

```bash
write bob pts/0
```

This level of detail is crucial when you're dealing with potentially busy systems or trying to troubleshoot communication issues. It connects directly to **Course Outcome 2**, as you're actively using the command line and understanding how to target specific system resources (in this case, a user's terminal).

### Preventing Incoming Messages: The `mesg` Command

Sometimes, you might not want to receive messages from other users. Perhaps you're in the middle of a critical task, or you're giving a presentation and don't want your terminal to be interrupted. For this, we have the `mesg` command.

*   **`mesg n`**: This command tells the system, "No, I do not want to receive messages." Once you run `mesg n`, other users won't be able to `write` to your terminal. They'll get a message back saying something like "Sorry, user bob has nologin set." or "Sorry, messages turn off."
*   **`mesg y`**: This command, conversely, allows messages to be received. It's usually the default.
*   **`mesg`**: If you just type `mesg` without any arguments, it will tell you whether messages are currently allowed or denied for your terminal.

**Why is this important?** It's about managing your environment and how you interact with others on the system. It’s a form of user-level control over system services, a concept that resonates with **Course Outcome 1** (interfacing hardware and software, where the terminal is the interface) and **Course Outcome 2** (using the command line to control system behavior).

Think of `mesg n` as putting up a "Do Not Disturb" sign on your office door. It’s a polite way to signal that you're unavailable for casual interruptions.

### Limitations and Alternatives

While `write` is useful for quick, informal chats, it has its limitations:

*   **No History:** Messages are ephemeral. Once sent and displayed, they're gone unless the recipient manually copies them. There's no persistent chat log.
*   **Terminal Dependency:** It works directly on the terminal. If the user isn't actively looking at the correct terminal, they might miss the message.
*   **Lack of Formatting:** Messages are plain text only.

For more robust communication, especially in collaborative environments, we have other tools. You might have heard of or will learn about:

*   **`wall` (write all):** This command sends a message to *all* logged-in users. It's typically used by system administrators to broadcast important information (e.g., "The system will be rebooted in 10 minutes."). Using `wall` when you're not an administrator can be seen as disruptive.
*   **`talk` and `ytalk`:** These are older, more interactive chat programs that allow for a two-way conversation with a graphical interface on the terminal, often splitting the screen.
*   **Modern Messaging Tools:** In today's world, we have dedicated chat applications (like Slack, Microsoft Teams, IRC clients) which are far more feature-rich and robust. However, understanding `write` gives us a foundational appreciation for how such communication works at a system level.

The concept of broadcasting messages (like with `wall`) is a good way to think about how information can propagate across a system, linking to how software interacts with the underlying operating system.

### Connecting to Course Outcomes

Let's explicitly tie `write` back to our Course Outcomes:

*   **CO2: Make use of the command line of Linux operating system and shell programming.**
    *   Using `write username [tty]` is a direct application of using the command line.
    *   Understanding how to specify the `tty` involves knowing about terminal devices, a core concept in interacting with the operating system.
    *   The `mesg` command further reinforces the ability to control system behavior and user interaction through the command line.

*   **CO1: Experiment with the fundamental hardware components of a computer and how to interface them with software systems.**
    *   While not as direct as, say, configuring a network card, the terminal itself is an interface between the user (human) and the operating system (software). The `write` command leverages this interface for inter-user communication. The concept of "TTY" originates from physical teletypewriters, a hardware component, and its modern software representation is still the gateway for user input/output.

### Key Takeaways for Exams

When you see questions about communication commands on Unix/Linux, remember these points about `write`:

*   **Purpose:** Direct, real-time message to another logged-in user.
*   **Syntax:** `write username [tty]`
*   **Ending Input:** **Ctrl+D** on an empty line.
*   **Receiving User:** Sees a "Message from..." notification and then the typed text.
*   **Managing Reception:** Use `mesg n` to deny messages, `mesg y` to allow.
*   **Identifying Target:** Use `who` to find the correct `tty` if a user is logged in multiple times.

Think of `write` as a fundamental building block for understanding how processes and users can interact on a multi-user system. It’s a simple command, but it demonstrates powerful concepts about system communication.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, similar to what you might encounter:

**Question 1 (Conceptual):**
What is the primary purpose of the `write` command in Unix/Linux?

**Answer:**
The primary purpose of the `write` command is to allow one logged-in user to send a message directly to another logged-in user on the same Unix/Linux system. It facilitates real-time, albeit simple, communication between users via their terminal sessions.

**Question 2 (Practical/Exam-Oriented):**
You are logged in as `alice` and need to send a message to `bob`, who is logged in on terminal `pts/1`. You want to ask him about a shared file. How would you do this, and what key combination do you use to send your message once you've finished typing it?

**Answer:**
You would use the following command:
```bash
write bob pts/1
```
After typing your message, you would press **Ctrl+D** on an empty line to send it.

**Reasoning:**
The command requires the username (`bob`) and the specific terminal (`pts/1`) to ensure the message is delivered to the correct session. Ctrl+D is the standard way to signal the end of input for many Unix/Linux commands, including `write`, effectively sending the buffered message.

**Question 3 (Conceptual/Troubleshooting):**
A user tries to `write` to you, but you are not receiving any messages. You suspect you might have turned message reception off. What command would you use to check your current message reception status?

**Answer:**
You would use the command:
```bash
mesg
```
This command, when run without arguments, displays whether messages are currently allowed (`yes`) or denied (`no`) for your terminal.

**Reasoning:**
The `mesg` command without arguments queries the system for the current message status of the terminal from which it is executed. This is the direct way to diagnose if message reception is enabled or disabled.

**Question 4 (Comparison/Deeper Understanding):**
While `write` is useful for direct messages, what is a significant limitation compared to modern chat applications, and what command might a system administrator use to broadcast an urgent message to *all* users?

**Answer:**
A significant limitation of `write` compared to modern chat applications is that it lacks message history and is entirely ephemeral – messages are only visible while being typed and immediately after sending. There's no persistent log of conversations.

A system administrator would use the `wall` command (write all) to broadcast an urgent message to all logged-in users.

**Reasoning:**
`write` is designed for one-to-one communication and lacks persistence. `wall` is specifically designed for broadcasting messages to all users simultaneously, serving a different purpose of system-wide announcements. This contrast helps in understanding the spectrum of communication tools available within a Unix-like environment.
