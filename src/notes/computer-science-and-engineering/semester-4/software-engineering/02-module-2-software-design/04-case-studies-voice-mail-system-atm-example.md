---
title: "Case Studies : Voice mail system, ATM Example"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b085"
status: "completed"
scrapedAt: "2026-05-20T16:16:45.611Z"
---
## Software Engineering - Module 2: Software Design - Case Studies: Voice Mail System & ATM Example

**Module Overview:** This module focuses on software design principles and practices. We will examine design concepts, methodologies, and architectural styles. Through case studies, we will apply these principles to practical problems.

**Topic:** Case Studies: Voice Mail System & ATM Example

**Learning Outcomes:**

*   Understand the application of software design principles to real-world systems.
*   Analyze the requirements of a voice mail system and ATM.
*   Design a software architecture for a voice mail system and ATM.
*   Apply object-oriented design principles to the case studies.
*   Identify potential design challenges and trade-offs in the context of voice mail and ATM systems.

---

**I. Key Concepts and Definitions**

*   **Software Design:**  The process of defining the architecture, components, modules, interfaces, and data for a software system to satisfy specified requirements.  It bridges the gap between requirements and implementation.
*   **Software Architecture:** The fundamental organization of a software system, embodied in its components, their relationships to each other and to the environment, and the principles governing its design and evolution.
*   **Object-Oriented Design (OOD):** A design paradigm based on the concept of "objects", which contain data and code to manipulate that data.  Key OOD principles include:
    *   **Encapsulation:**  Bundling data and methods that operate on that data within a single unit (object) and hiding the internal implementation details.
    *   **Abstraction:**  Presenting essential information while hiding complex or irrelevant details.
    *   **Inheritance:**  A mechanism where a new class (subclass) inherits properties and behaviors from an existing class (superclass).
    *   **Polymorphism:** The ability of an object to take on many forms, often through interface implementation or inheritance.
*   **Use Case Diagram:**  A visual representation of interactions between actors (users or external systems) and the system itself.  It defines system boundaries and functionalities.
*   **Class Diagram:** A diagram that depicts the classes in a system, their attributes, methods, and the relationships between the classes.
*   **Sequence Diagram:** Illustrates how objects interact with each other over time to achieve a specific task or use case.
*   **State Diagram:**  Shows the different states an object can be in and the transitions between those states, triggered by events.
*   **Design Patterns:**  Reusable solutions to commonly occurring problems in software design. Examples include Singleton, Factory, Observer, and Strategy.
*   **Requirements Analysis:** The process of defining the features and functions of a software application by examining the needs of the end-user.  It is a crucial step before design.
*   **Non-Functional Requirements:** Constraints on the system's operation, such as performance, security, usability, and reliability.

---

**II. Case Study 1: Voice Mail System**

**A. Requirements Analysis:**

*   **Functional Requirements:**
    *   Users should be able to create and manage their mailboxes.
    *   Users should be able to record and save greetings.
    *   Callers should be able to leave messages.
    *   Users should be able to listen to, delete, save, and forward messages.
    *   The system should provide prompts and instructions to users.
    *   The system should support password protection for mailboxes.
    *   The system should notify users of new messages (e.g., message waiting indicator).
    *   The system should support remote access to the mailbox.
    *   Administrative features (e.g., adding/removing users, monitoring system usage).
*   **Non-Functional Requirements:**
    *   **Reliability:**  The system must be highly reliable and available. No message should be lost due to system failure.
    *   **Performance:** The system should respond quickly to user requests.
    *   **Security:** Mailboxes should be protected from unauthorized access.
    *   **Usability:**  The system should be easy to use and understand.  Prompts should be clear and concise.
    *   **Scalability:** The system should be able to handle a large number of users and messages.

**B. Software Architecture & Design:**

*   **Proposed Architecture:** A multi-tiered architecture is suitable.
    *   **Presentation Tier:** Handles user interaction (e.g., phone interface, web interface for administration).
    *   **Application Tier:**  Contains the core logic for managing mailboxes, messages, and user authentication.  This could be implemented using a message queue and worker processes.
    *   **Data Tier:** Stores user data (mailboxes, passwords, greetings, messages).  A database system (e.g., MySQL, PostgreSQL) is a good choice.

*   **Object-Oriented Design:**

    *   **Classes:**
        *   `User`: Attributes: `userID`, `password`, `mailboxID`. Methods: `authenticate()`, `changePassword()`.
        *   `Mailbox`: Attributes: `mailboxID`, `greeting`, `messageList`, `maxCapacity`. Methods: `recordGreeting()`, `addMessage()`, `removeMessage()`, `playMessages()`.
        *   `Message`: Attributes: `messageID`, `senderID`, `timestamp`, `audioData`, `status (new, saved, deleted)`. Methods: `play()`, `delete()`, `save()`, `forward()`.
        *   `AuthenticationService`:  Methods: `authenticateUser()`, `registerUser()`.
        *   `MailboxManager`:  Methods: `createMailbox()`, `deleteMailbox()`, `getMailbox()`.
        *   `CallHandler`: Methods:  `handleIncomingCall()`, `promptUser()`.

    *   **Relationships:**
        *   `User` has-a `Mailbox` (One-to-one)
        *   `Mailbox` contains multiple `Message` objects (One-to-many)

    *   **Use Case Diagram Examples:**
        *   Use Case: Leave Message. Actors: Caller, Voice Mail System.
        *   Use Case: Retrieve Messages. Actors: User, Voice Mail System.
        *   Use Case: Manage Greeting. Actors: User, Voice Mail System.

    *   **Sequence Diagram Example (Retrieve Messages):**
        1.  User dials phone number.
        2.  CallHandler receives incoming call.
        3.  CallHandler prompts user for mailbox ID and password.
        4.  User enters mailbox ID and password.
        5.  CallHandler passes credentials to AuthenticationService.
        6.  AuthenticationService authenticates User against User database.
        7.  AuthenticationService returns authentication result.
        8.  If authentication is successful, CallHandler retrieves Mailbox from MailboxManager.
        9.  CallHandler plays greeting.
        10. CallHandler prompts user to listen to messages.
        11. User requests to listen to messages.
        12. CallHandler retrieves list of new Messages from Mailbox.
        13. CallHandler plays each message.

**C. Design Challenges and Trade-offs:**

*   **Storage Capacity:** Determining the appropriate storage capacity for messages, considering the number of users and average message length.
*   **Scalability:**  Designing the system to handle a growing number of users and messages without performance degradation.  This might involve using load balancing, caching, and database sharding.
*   **Security:** Protecting user mailboxes from unauthorized access. This requires robust authentication mechanisms, encryption of messages, and protection against brute-force attacks.
*   **Real-time performance:**  The system needs to respond quickly to user inputs and deliver messages in a timely manner.
*   **Database Choice:** Selecting an appropriate database. A relational database offers consistency. A NoSQL database may offer better scalability for audio storage.

**D. Important Points to Remember (Voice Mail System):**

*   Focus on clear and concise prompts for usability.
*   Prioritize security to protect user privacy.
*   Plan for scalability to accommodate future growth.
*   Consider using a message queue to handle asynchronous tasks like message processing.

---

**III. Case Study 2: ATM (Automated Teller Machine)**

**A. Requirements Analysis:**

*   **Functional Requirements:**
    *   Users should be able to check account balances.
    *   Users should be able to withdraw cash.
    *   Users should be able to deposit cash or checks.
    *   Users should be able to transfer funds between accounts.
    *   Users should be able to print account statements.
    *   The ATM should authenticate users using a card and PIN.
    *   The ATM should communicate with the bank's central system to process transactions.
    *   The ATM should handle transaction logging and error handling.
*   **Non-Functional Requirements:**
    *   **Security:**  The system must be highly secure to prevent fraud and unauthorized access.
    *   **Reliability:** The ATM must be reliable and available for use.
    *   **Performance:**  Transactions should be processed quickly.
    *   **Usability:** The ATM interface should be easy to use and understand.
    *   **Maintainability:** The software should be easy to maintain and update.

**B. Software Architecture & Design:**

*   **Proposed Architecture:** A three-tier architecture is suitable:
    *   **Presentation Tier:** The ATM's user interface (screen, keypad, card reader, cash dispenser, printer).
    *   **Application Tier:**  Handles the core business logic, including user authentication, transaction processing, and communication with the bank's central system.
    *   **Data Tier:**  The bank's central database system, which stores account information.

*   **Object-Oriented Design:**

    *   **Classes:**
        *   `ATM`:  Attributes: `atmID`, `location`, `cashOnHand`. Methods: `authenticateUser()`, `processTransaction()`, `dispenseCash()`, `printStatement()`.
        *   `CardReader`: Methods: `readCard()`.
        *   `Keypad`: Methods: `getInput()`.
        *   `Screen`: Methods: `displayMessage()`, `displayMenu()`.
        *   `CashDispenser`: Methods: `dispenseCash()`.
        *   `Printer`: Methods: `printReceipt()`, `printStatement()`.
        *   `UserAccount`: Attributes: `accountNumber`, `PIN`, `balance`. Methods: `withdraw()`, `deposit()`, `getBalance()`.
        *   `Transaction`: Attributes: `transactionID`, `accountNumber`, `transactionType`, `amount`, `timestamp`. Methods: `execute()`.
        *   `BankServer`: Methods: `validateAccount()`, `processTransaction()`.

    *   **Relationships:**
        *   `ATM` has-a `CardReader`, `Keypad`, `Screen`, `CashDispenser`, `Printer` (Composition)
        *   `ATM` interacts with `BankServer` (Association)
        *   `UserAccount` has many `Transaction` (One-to-many)

    *   **Use Case Diagram Examples:**
        *   Use Case: Withdraw Cash. Actors: User, ATM.
        *   Use Case: Check Balance. Actors: User, ATM.
        *   Use Case: Deposit Funds. Actors: User, ATM.

    *   **Sequence Diagram Example (Withdraw Cash):**
        1.  User inserts card into CardReader.
        2.  CardReader reads card information.
        3.  ATM prompts User for PIN via Screen.
        4.  User enters PIN via Keypad.
        5.  ATM sends card information and PIN to BankServer for authentication.
        6.  BankServer validates account and PIN.
        7.  BankServer returns authentication result to ATM.
        8.  If authentication is successful, ATM displays withdrawal options via Screen.
        9.  User selects withdrawal amount via Keypad.
        10. ATM checks if sufficient funds are available.
        11. ATM requests withdrawal from BankServer.
        12. BankServer processes the transaction and updates the account balance.
        13. BankServer confirms transaction to ATM.
        14. ATM dispenses cash via CashDispenser.
        15. ATM prints receipt via Printer.

**C. Design Challenges and Trade-offs:**

*   **Security:**  Protecting against card skimming, PIN theft, and other forms of fraud. This requires strong encryption, secure communication protocols, and tamper-resistant hardware.
*   **Concurrency:**  Handling multiple transactions concurrently without causing data inconsistencies.  This requires careful synchronization mechanisms.
*   **Error Handling:**  Gracefully handling errors such as network failures, insufficient funds, and invalid PIN entries.  The system should provide informative error messages to the user.
*   **Hardware Integration:**  Interfacing with various hardware components (card reader, cash dispenser, printer) and ensuring they function correctly.
*   **Compliance:**  Adhering to banking regulations and security standards.

**D. Important Points to Remember (ATM System):**

*   Security is paramount.  Implement multiple layers of security.
*   Ensure transactional integrity to prevent data loss or corruption.
*   Design for usability to provide a user-friendly experience.
*   Consider using a state machine to manage the ATM's different states (e.g., idle, authenticating, transaction processing).

---

**IV. Practice Questions/Exercises**

1.  **Voice Mail System:**  Design a class diagram for the voice mail system, including attributes and methods for each class.  Explain the relationships between the classes.
    *   **Answer:** Refer to the class definitions and relationships described in Section II.B.  The diagram should visually represent the classes, attributes, methods, and the associations (e.g., aggregation, composition) between them.

2.  **Voice Mail System:**  Describe how you would handle the "Forward Message" feature in the voice mail system using object-oriented principles.
    *   **Answer:** The `Message` class would have a `forward()` method. This method would involve:
        1.  Prompting the user for the destination mailbox ID.
        2.  Creating a new `Message` object, copying the audio data and sender information from the original message.
        3.  Adding the new `Message` object to the destination `Mailbox`'s `messageList`.
        4.  The original message remains unchanged in the sender's mailbox (unless the user explicitly deletes it).

3.  **ATM System:**  Explain how you would handle concurrent access to a user account in the ATM system. What concurrency control mechanisms would you use?
    *   **Answer:** Concurrent access can lead to race conditions and data inconsistencies. To prevent this:
        1.  **Database Transactions:** Use database transactions with ACID properties (Atomicity, Consistency, Isolation, Durability) to ensure that operations on the account are atomic and isolated from other transactions.
        2.  **Locking:** Implement locking mechanisms (e.g., pessimistic locking or optimistic locking) at the database level or application level to prevent concurrent modifications.  Pessimistic locking acquires a lock on the account before any operation, preventing other transactions from accessing it. Optimistic locking assumes that conflicts are rare and checks for modifications before committing the transaction.
        3.  **Two-Phase Commit (2PC):** In a distributed environment, use 2PC to ensure that all participating systems (e.g., ATM and bank server) either commit or rollback the transaction together.

4.  **ATM System:** Discuss the security considerations when designing the PIN verification process for an ATM.
    *   **Answer:** Security is paramount.
        1.  **Encryption:** Never store PINs in plaintext. Hash the PIN using a strong hashing algorithm (e.g., bcrypt, Argon2) with a salt.
        2.  **Secure Communication:** Use encrypted communication channels (e.g., SSL/TLS) between the ATM and the bank server to protect the PIN from interception.
        3.  **Limited Attempts:** Implement a limit on the number of incorrect PIN attempts to prevent brute-force attacks. After a certain number of failed attempts, lock the card or account.
        4.  **Tamper-Resistant Hardware:** Use tamper-resistant hardware for the keypad and card reader to prevent physical attacks.
        5.  **PIN Masking:** Display asterisks (*) or other characters on the screen instead of the actual PIN as the user enters it.

5.  **General:** Choose a design pattern (e.g., Factory, Singleton, Observer) and explain how it could be applied to either the voice mail or ATM system.  Provide a specific example.
    *   **Answer:**
        *   **Factory Pattern (ATM):** A Factory pattern could be used to create different types of transactions (Withdraw, Deposit, Transfer). A `TransactionFactory` class could take a transaction type as input and return the appropriate `Transaction` object.  This decouples the ATM class from the concrete transaction classes, making the code more maintainable and extensible.  Example: `Transaction transaction = TransactionFactory.createTransaction("Withdraw");`
        *   **Singleton Pattern (Voice Mail):** The AuthenticationService could be implemented as a Singleton.  Only one instance of the AuthenticationService is needed to authenticate users. This ensures that all authentication requests are handled consistently and reduces resource consumption.

---

**V. Important Points to Remember (General Software Design)**

*   **Understand the Requirements:**  Thorough requirements analysis is critical to a successful design.
*   **Choose the Right Architecture:** Select an architecture that aligns with the system's requirements and constraints.
*   **Apply Design Principles:**  Use OOD principles (encapsulation, abstraction, inheritance, polymorphism) to create modular, reusable, and maintainable code.
*   **Consider Non-Functional Requirements:**  Address non-functional requirements (security, performance, usability) throughout the design process.
*   **Document Your Design:**  Create clear and comprehensive documentation to communicate the design to other developers.
*   **Iterate and Refine:** Software design is an iterative process. Be prepared to refine your design as you learn more about the system.
*   **Security First:** Security is not an afterthought.  Consider security vulnerabilities at every stage of the design process.
