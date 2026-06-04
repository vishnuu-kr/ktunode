---
title: "(b) Using Message Queue - The first process sends a string to the second process. The second process reverses the received string and sends it back to the first process. The first process compares the original string and the reversed string received from the second one and then prints whether the string is a palindrome or not."
subject: "OPERATING SYSTEMS LAB"
module: "Module 7: Inter"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b496"
status: "completed"
scrapedAt: "2026-05-20T16:14:56.978Z"
---
## Operating Systems Lab - Module 7: Inter - Message Queue Palindrome Check

**Topic:** (b) Using Message Queue - The first process sends a string to the second process. The second process reverses the received string and sends it back to the first process. The first process compares the original string and the reversed string received from the second one and then prints whether the string is a palindrome or not.

**Learning Outcomes:**

*   Understand the concept of inter-process communication (IPC) using message queues.
*   Implement message queues for sending and receiving data between processes.
*   Design and implement a program where one process sends a string to another process.
*   Implement string reversal in a separate process.
*   Implement palindrome checking logic.
*   Demonstrate proper error handling in inter-process communication.

---

### 1. Key Concepts and Definitions

*   **Inter-Process Communication (IPC):** Mechanisms that allow different processes to communicate and synchronize their actions.  Examples include message queues, shared memory, pipes, and sockets.
*   **Message Queue:** A data structure that allows processes to exchange messages. Messages are typically placed in a queue (a linked list or array structure) until the receiving process retrieves them. Key properties:
    *   **Asynchronous:** Processes don't need to wait for each other synchronously.
    *   **Buffered:** Messages are stored in the queue, providing a temporary storage space.
    *   **Persistent (Optional):** Depending on the implementation, message queues can persist across system reboots. (Often non-persistent)
*   **Process:** An instance of a program that is being executed.
*   **Palindrome:** A string that reads the same forwards and backward (e.g., "madam", "rotor").
*   **Message Structure:** A structure defining the format of the data being sent through the message queue.  Crucially, it *must* include a `long int` field representing the message type.

### 2. Message Queue Implementation (Conceptual Overview)

The general steps for using message queues are:

1.  **Create/Access the Message Queue:**  Using a system call (e.g., `msgget()` in Linux/Unix) to create a new queue or access an existing one. A unique key is needed for identification.
2.  **Send a Message:** Using a system call (e.g., `msgsnd()`) to send a message to the queue.  The message will consist of:
    *   Message Type (required, used for filtering messages)
    *   Message Data (the actual string being sent)
3.  **Receive a Message:** Using a system call (e.g., `msgrcv()`) to receive a message from the queue. The process can specify a message type to receive specific messages.
4.  **Control the Message Queue:**  Using a system call (e.g., `msgctl()`) to perform operations like deleting the queue or getting queue statistics.

### 3. Program Design

We'll have two processes:

*   **Process 1 (Sender/Palindrome Checker):**
    1.  Gets input string from the user.
    2.  Creates or accesses the message queue.
    3.  Sends the string to Process 2 using `msgsnd()`.
    4.  Receives the reversed string back from Process 2 using `msgrcv()`.
    5.  Compares the original string with the reversed string.
    6.  Prints whether the string is a palindrome or not.
    7.  Optionally removes the message queue (using `msgctl()`).

*   **Process 2 (Receiver/String Reverser):**
    1.  Creates or accesses the same message queue as Process 1.
    2.  Receives the string from Process 1 using `msgrcv()`.
    3.  Reverses the received string.
    4.  Sends the reversed string back to Process 1 using `msgsnd()`.

### 4. Code Example (C - Linux/Unix)

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <unistd.h>
#include <ctype.h>

#define MSG_SIZE 256
#define MSG_TYPE_TO_REVERSE 1
#define MSG_TYPE_REVERSED 2

// Message structure
struct message {
    long int msg_type; // Required field for message queues
    char msg_text[MSG_SIZE];
};

// Function to check if a string is a palindrome
int isPalindrome(char str[]) {
    int left = 0;
    int right = strlen(str) - 1;

    while (left < right) {
        // Ignore non-alphanumeric characters
        while (!isalnum(str[left]) && left < right) {
            left++;
        }
        while (!isalnum(str[right]) && left < right) {
            right--;
        }

        // Convert to lowercase for case-insensitive comparison
        if (tolower(str[left]) != tolower(str[right])) {
            return 0; // Not a palindrome
        }

        left++;
        right--;
    }

    return 1; // Is a palindrome
}

// Function to reverse a string
void reverseString(char str[]) {
    int length = strlen(str);
    int i, j;
    char temp;
    for (i = 0, j = length - 1; i < j; i++, j--) {
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }
}

int main() {
    key_t key = ftok("progfile", 65); // Generate a unique key (important to use the same key for both processes)
    int msgid = msgget(key, 0666 | IPC_CREAT); // Create or access the message queue.  0666 gives read/write permissions to all.

    if (msgid == -1) {
        perror("msgget failed");
        exit(EXIT_FAILURE);
    }

    pid_t pid = fork(); // Create a child process

    if (pid == -1) {
        perror("fork failed");
        exit(EXIT_FAILURE);
    }

    if (pid == 0) { // Child process (Process 2 - Receiver/Reverser)
        struct message received_msg, reversed_msg;

        // Receive the message
        if (msgrcv(msgid, &received_msg, MSG_SIZE, MSG_TYPE_TO_REVERSE, 0) == -1) {
            perror("msgrcv failed (child)");
            exit(EXIT_FAILURE);
        }
        printf("Child received: %s\n", received_msg.msg_text);

        // Reverse the string
        reverseString(received_msg.msg_text);
        printf("Child reversed: %s\n", received_msg.msg_text);

        // Send the reversed string back
        reversed_msg.msg_type = MSG_TYPE_REVERSED;
        strcpy(reversed_msg.msg_text, received_msg.msg_text);

        if (msgsnd(msgid, &reversed_msg, MSG_SIZE, 0) == -1) {
            perror("msgsnd failed (child)");
            exit(EXIT_FAILURE);
        }
        printf("Child sent reversed: %s\n", reversed_msg.msg_text);


    } else { // Parent process (Process 1 - Sender/Palindrome Checker)
        struct message sent_msg, received_reversed_msg;
        char input_string[MSG_SIZE];

        printf("Enter a string: ");
        fgets(input_string, MSG_SIZE, stdin);
        input_string[strcspn(input_string, "\n")] = 0; // Remove trailing newline

        // Send the string to the child
        sent_msg.msg_type = MSG_TYPE_TO_REVERSE;
        strcpy(sent_msg.msg_text, input_string);

        if (msgsnd(msgid, &sent_msg, MSG_SIZE, 0) == -1) {
            perror("msgsnd failed (parent)");
            exit(EXIT_FAILURE);
        }
        printf("Parent sent: %s\n", sent_msg.msg_text);


        // Receive the reversed string
        if (msgrcv(msgid, &received_reversed_msg, MSG_SIZE, MSG_TYPE_REVERSED, 0) == -1) {
            perror("msgrcv failed (parent)");
            exit(EXIT_FAILURE);
        }
        printf("Parent received reversed: %s\n", received_reversed_msg.msg_text);

        // Compare the original and reversed strings
        if (isPalindrome(input_string)) {
            printf("%s is a palindrome.\n", input_string);
        } else {
            printf("%s is not a palindrome.\n", input_string);
        }

        // Clean up: Remove the message queue (Important!)
        if (msgctl(msgid, IPC_RMID, NULL) == -1) {
            perror("msgctl(IPC_RMID) failed");
            exit(EXIT_FAILURE);
        }
        printf("Message queue removed.\n");
    }

    return 0;
}
```

**Explanation:**

*   **Includes:**  Necessary header files for IPC, string manipulation, and standard input/output.
*   **`message` struct:** Defines the structure of the messages passed through the queue.  It includes a `long int msg_type` and a `char msg_text` for the string.
*   **`isPalindrome()` function:**  Checks if a string is a palindrome (case-insensitive, ignores non-alphanumeric characters).  Important to handle spaces and punctuation if you want to treat things like "A man, a plan, a canal: Panama" as a palindrome.
*   **`reverseString()` function:** Reverses the given string in place.
*   **`main()` function:**
    *   **Key Generation (`ftok()`):**  Creates a key that identifies the message queue. *Crucially, both processes MUST use the same key to access the same message queue.* `ftok()` generates a key based on a filename and a project ID. Using the same filename and project ID will produce the same key.
    *   **Message Queue Creation (`msgget()`):**  Creates a new message queue or retrieves the ID of an existing queue.  `IPC_CREAT` creates a new queue if one doesn't exist. `0666` provides read/write permissions to all users.
    *   **Forking (`fork()`):**  Creates a child process.  The `fork()` system call creates a new process that is a copy of the calling process (the parent).
    *   **Process 1 (Parent):**
        *   Gets input from the user.
        *   Sets the message type.
        *   Copies the input string into the message.
        *   Sends the message using `msgsnd()`.
        *   Receives the reversed message using `msgrcv()`.  It specifies `MSG_TYPE_REVERSED` to receive messages of that type.
        *   Checks if the original string is a palindrome.
        *   Removes the message queue using `msgctl(msgid, IPC_RMID, NULL)`.  *It's essential to remove the message queue when you're finished with it to avoid resource leaks.*  This is usually done by the parent process.
    *   **Process 2 (Child):**
        *   Receives the message using `msgrcv()`. It specifies `MSG_TYPE_TO_REVERSE` to receive messages of that type.
        *   Reverses the received string.
        *   Sets the message type for the reversed string.
        *   Copies the reversed string into the message.
        *   Sends the reversed string back to the parent using `msgsnd()`.
*   **Error Handling:** The code includes basic error handling for `msgget()`, `msgsnd()`, `msgrcv()`, `fork()`, and `msgctl()`.
*   **Message Types:** Uses `MSG_TYPE_TO_REVERSE` and `MSG_TYPE_REVERSED` to distinguish between the original string sent from process 1 to process 2 and the reversed string sent from process 2 back to process 1.

**Compilation and Execution:**

1.  Save the code as `palindrome.c`.
2.  Compile: `gcc palindrome.c -o palindrome`
3.  Run: `./palindrome`

**Important Considerations:**

*   **Error Handling:** The provided example includes basic error handling.  In a production environment, more robust error handling is crucial.  Consider logging errors and retrying operations if appropriate.
*   **Message Size:**  The `MSG_SIZE` define limits the size of the string that can be sent.  Ensure this is large enough for your use case.
*   **Key Generation:**  The `ftok()` function is a common way to generate a key, but it can have limitations. In more complex scenarios, consider using a different key generation method, such as a shared file or a known integer value, or even a UUID.
*   **Permissions:** The `0666` permission argument in `msgget()` grants read/write access to all users. Adjust the permissions as needed for security.
*   **Race Conditions:** Although message queues help avoid some synchronization issues, race conditions can still occur, especially if processes are accessing shared resources other than the message queue. Consider using mutexes or semaphores for more complex synchronization needs.
*   **Real-World Applications:** Message queues are used in various real-world applications, such as:
    *   **Asynchronous task processing:**  Offloading tasks to background processes.
    *   **Microservices communication:**  Allowing different microservices to communicate with each other.
    *   **Event-driven systems:**  Notifying processes about events.

### 5. Practice Questions/Exercises

1.  **Modify the code to handle strings with spaces correctly in the palindrome check (e.g., "A man, a plan, a canal: Panama").**  (See the improved `isPalindrome()` function in the example code that now ignores spaces and punctuation).
2.  **Implement error handling in Process 2 (the child process) to gracefully handle the case where it cannot receive the message.** Add a `sleep()` call to the parent before the child starts listening to the message queue, and make sure the parent removes the message queue quickly to cause the child's `msgrcv` call to fail.
3.  **Change the program to use a different method for key generation (e.g., a fixed integer value).**
4.  **Increase the `MSG_SIZE` and test the program with longer strings.**
5.  **Instead of using `fork()`, create two separate programs that communicate using the message queue.** Compile and run these programs in separate terminals.  This requires you to determine which process creates/removes the message queue.

**Answers/Hints:**

1.  The provided example already includes the improved `isPalindrome` function that handles spaces and punctuation.
2.  In the child process, check the return value of `msgrcv()`. If it returns -1, print an error message using `perror()` and exit the child process gracefully.  Consider adding a small delay in the child to allow the parent to remove the queue.
3.  Instead of `key = ftok("progfile", 65);`, use `key = 1234;` (or any other integer value).  Make sure *both* programs use the same integer.
4.  Modify the `#define MSG_SIZE` value and recompile both programs.
5.  Create two separate `.c` files (e.g., `sender.c` and `receiver.c`).  The code for each file should be similar to the parent and child processes in the original example.  Decide which process will create the message queue (usually the sender) and which process will remove it (also usually the sender after the receiver has finished). Remove the `fork()` call and the `pid` variable.  Compile and run each program in separate terminals.

### 6. Important Points to Remember

*   **Key Agreement:**  Ensure that all processes communicating via message queues use the *same* key to identify the queue.
*   **Message Structure:**  The message structure *must* have a `long int` field as the first member.  This is used for message type filtering.
*   **Error Handling:**  Check the return values of system calls (`msgget()`, `msgsnd()`, `msgrcv()`, `msgctl()`) and handle errors appropriately.
*   **Queue Cleanup:**  Always remove the message queue using `msgctl(msgid, IPC_RMID, NULL)` when it's no longer needed to prevent resource leaks.  Usually, the process that created the queue is responsible for removing it.
*   **Message Types:** Use message types to filter messages and ensure that processes receive the correct data.
*   **Permissions:** Set appropriate permissions for the message queue using the second argument to `msgget()`.

These notes provide a comprehensive guide to understanding and implementing message queues for inter-process communication, specifically for the palindrome checking problem. Remember to practice writing and testing code to solidify your understanding. Good luck!
