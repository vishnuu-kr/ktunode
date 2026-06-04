---
title: "(c) Using Shared Memory - The first process sends three strings to the second process. The second process concatenates them to a single string (with whitespace being inserted between the two individual strings) and sends it back to the first process. The first process prints the concatenated string in the flipped case, that is if the concatenated string is “ Hello S4 Students ”, the final output should be “ hELLO s4 sTUDENTS ”"
subject: "OPERATING SYSTEMS LAB"
module: "Module 7: Inter"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b497"
status: "completed"
scrapedAt: "2026-05-20T16:14:57.747Z"
---
# OPERATING SYSTEMS LAB - Module 7: Inter - Shared Memory String Manipulation

**Topic:** (c) Using Shared Memory - String Concatenation and Case Flipping

**Description:**  The first process sends three strings to the second process using shared memory. The second process concatenates these strings with whitespace in between and sends the resulting concatenated string back to the first process using shared memory. The first process then flips the case of each character in the concatenated string and prints the final result.

**Learning Outcomes:**

*   Understand the concept of shared memory and its use in inter-process communication (IPC).
*   Learn how to create, access, and detach shared memory segments.
*   Implement synchronization mechanisms (like semaphores) to manage access to shared memory.
*   Implement string manipulation techniques in C/C++.
*   Understand how to pass data between processes using shared memory.
*   Implement the required functionality of sending strings, concatenating them, and flipping the case of characters in a string.

## 1. Key Concepts and Definitions

*   **Inter-Process Communication (IPC):** Mechanisms that allow different processes to communicate and synchronize their actions. Examples include shared memory, message queues, pipes, and sockets.
*   **Shared Memory:** A segment of memory that is accessible by multiple processes. It provides a fast and efficient way for processes to share data. Unlike message passing, it does not involve copying data.
*   **Synchronization:** Ensuring that multiple processes accessing shared resources do so in a coordinated manner to prevent data corruption or race conditions. Common synchronization mechanisms include semaphores, mutexes, and condition variables.
*   **Race Condition:** A situation where the outcome of a program depends on the unpredictable order in which multiple processes execute critical sections of code that access shared resources.
*   **Critical Section:** A section of code that accesses shared resources and must be protected from concurrent access by multiple processes.
*   **Semaphore:** A synchronization primitive used to control access to a shared resource by multiple processes.  It maintains a counter that can be incremented (signaled) or decremented (waited on).
*   **shmget():**  A system call used to create a shared memory segment or obtain the ID of an existing segment.
*   **shmat():**  A system call used to attach a shared memory segment to the address space of a process.  This makes the shared memory accessible to the process.
*   **shmdt():** A system call used to detach a shared memory segment from the address space of a process.
*   **shmctl():** A system call used to perform control operations on a shared memory segment, such as deleting it.
*   **ftok():** A system call that generates a unique key based on a file path and project ID.  This key is used to identify the shared memory segment.

## 2. Shared Memory in Detail

### 2.1 Creating and Accessing Shared Memory

1.  **`shmget(key_t key, size_t size, int shmflg)`:**
    *   `key`:  A unique identifier for the shared memory segment, typically generated using `ftok()`.
    *   `size`:  The size of the shared memory segment in bytes.
    *   `shmflg`:  Flags specifying the permissions and behavior of the shared memory segment.  `IPC_CREAT` creates a new segment if one doesn't exist.  `IPC_EXCL` used with `IPC_CREAT` will fail if the shared memory segment already exists. Permissions are specified using octal values (e.g., `0666` for read/write access for all users).
    *   **Return Value:** Returns the shared memory identifier (shmid) on success, or -1 on error.

2.  **`shmat(int shmid, const void *shmaddr, int shmflg)`:**
    *   `shmid`: The shared memory identifier returned by `shmget()`.
    *   `shmaddr`:  The address at which the shared memory segment should be attached.  `NULL` lets the system choose the address.
    *   `shmflg`:  Flags controlling the attach operation.  `SHM_RDONLY` attaches the segment read-only.
    *   **Return Value:** Returns the address of the attached shared memory segment on success, or `(void *) -1` on error.

3.  **`shmdt(const void *shmaddr)`:**
    *   `shmaddr`:  The address of the attached shared memory segment (returned by `shmat()`).
    *   **Return Value:** Returns 0 on success, or -1 on error.

4.  **`shmctl(int shmid, int cmd, struct shmid_ds *buf)`:**
    *   `shmid`: The shared memory identifier.
    *   `cmd`:  The command to perform on the shared memory segment.  `IPC_RMID` destroys the segment.
    *   `buf`:  A pointer to a `shmid_ds` structure containing information about the segment. Can be `NULL` for `IPC_RMID`.
    *   **Return Value:** Returns 0 on success, or -1 on error.

### 2.2 Synchronization using Semaphores

Semaphores are crucial to prevent race conditions when multiple processes access shared memory.

1.  **Semaphore Operations:**
    *   **`sem_wait(sem_t *sem)`:** Decrements the semaphore value. If the value is 0, the process blocks until the semaphore value becomes positive.
    *   **`sem_post(sem_t *sem)`:** Increments the semaphore value, potentially waking up a blocked process waiting on the semaphore.

2.  **Example:**

```c
#include <semaphore.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h> // For O_* constants
#include <sys/shm.h>
#include <sys/stat.h>

#define SEM_NAME "/my_semaphore"

int main() {
  sem_t *semaphore;

  // Create a named semaphore.  O_CREAT | O_EXCL ensures the semaphore
  // is only created if it doesn't already exist.  This is important for preventing errors.
  semaphore = sem_open(SEM_NAME, O_CREAT | O_EXCL, 0666, 1);

  if (semaphore == SEM_FAILED) {
    perror("sem_open failed");
    // If it already exists, open the existing one
    semaphore = sem_open(SEM_NAME, 0);
     if (semaphore == SEM_FAILED) {
       perror("sem_open (existing) failed");
       return 1;
    }
  }


  printf("Waiting for semaphore...\n");
  sem_wait(semaphore); // Decrement the semaphore (acquire lock)
  printf("Got the semaphore!\n");

  // Critical section: Access shared resource here

  printf("Releasing semaphore...\n");
  sem_post(semaphore); // Increment the semaphore (release lock)

  // Clean up if you created the semaphore
  if (sem_close(semaphore) == -1) {
      perror("sem_close failed");
      return 1;
  }

  // Unlink the semaphore (important to do once it's not needed anymore)
  if (sem_unlink(SEM_NAME) == -1) {
     perror("sem_unlink failed");
  }

  return 0;
}
```

**Important Notes on Semaphores:**

*   **Named vs. Unnamed Semaphores:**  The example uses named semaphores (using `sem_open`). These are accessible across processes even if they don't share ancestry. Unnamed semaphores (using `sem_init`) are suitable for threads within a single process or for related processes that share memory space for the semaphore.
*   **Error Handling:**  Always check for errors when creating, opening, waiting, posting, closing, and unlinking semaphores.
*   **Unlinking:**  It's crucial to unlink named semaphores when they're no longer needed. If you don't, they'll persist in the system.  Only one process should unlink the semaphore, typically the process that initially created it.
*   **Initialization:** When using named semaphores and `O_CREAT | O_EXCL`, only one process will successfully create the semaphore.  The other processes will need to open the existing semaphore.

## 3. Implementation Details for the Problem

### 3.1 Data Structures in Shared Memory

Define a structure to hold the data to be shared between the processes:

```c
#include <string.h> // for strcpy
#define MAX_STRING_LENGTH 100 // Define a maximum length for the strings
#define NUM_STRINGS 3 // Number of strings to be sent

struct SharedData {
    char string1[MAX_STRING_LENGTH];
    char string2[MAX_STRING_LENGTH];
    char string3[MAX_STRING_LENGTH];
    char concatenatedString[3 * MAX_STRING_LENGTH + 2 * 1]; // Added space for concatenated string + whitespace
    int dataReady; // Flag to indicate when data is ready (for synchronization)
    int resultReady; // Flag to indicate when the result is ready to be read
};
```

### 3.2 Process 1 (Sender)

1.  **Create Shared Memory:**
    *   Use `shmget()` to create a shared memory segment large enough to hold the `SharedData` structure.
    *   Handle errors appropriately.

2.  **Attach Shared Memory:**
    *   Use `shmat()` to attach the shared memory segment to the process's address space.
    *   Handle errors appropriately.

3.  **Initialize Semaphores (Important for synchronization)**
    * You will need two semaphores.  One to signal to the receiver when new strings are available and one to signal to the sender when the concatenated and case-flipped string is available.
    * Use `sem_open()` to create (if necessary) and open the semaphores. Be very careful with error handling and unlinking.

4.  **Populate Shared Memory:**
    *   Copy the three strings into the `string1`, `string2`, and `string3` fields of the `SharedData` structure in the shared memory.
    *   Set the `dataReady` flag to 1 to signal to Process 2 that the data is ready. Before setting `dataReady` acquire the "data available" semaphore and release it after setting dataReady.

5.  **Wait for Result:**
    *   Wait for the `resultReady` flag in the shared memory to be set to 1 by Process 2 (using a semaphore).  This ensures that the concatenated string is ready.  Wait on the "result available" semaphore.

6.  **Read Concatenated String:**
    *   Read the concatenated string from the `concatenatedString` field of the `SharedData` structure.

7.  **Flip Case and Print:**
    *   Iterate through the concatenated string, flipping the case of each character:
        *   If the character is uppercase, convert it to lowercase.
        *   If the character is lowercase, convert it to uppercase.
        *   Leave other characters (e.g., spaces, numbers) unchanged.
    *   Print the final, case-flipped string.

8.  **Detach and Optionally Remove Shared Memory:**
    *   Use `shmdt()` to detach the shared memory segment.
    *   Use `shmctl()` with `IPC_RMID` to remove the shared memory segment when it's no longer needed.  *Only one process should do this.*  Typically, the sender (Process 1) is responsible for cleaning up the shared memory. Also, unlink the semaphores.

### 3.3 Process 2 (Concatenator)

1.  **Access Shared Memory:**
    *   Use `shmget()` with the same key as Process 1 to obtain the shared memory identifier. *Do not use `IPC_CREAT` here, or you'll create a new shared memory segment.*
    *   Handle errors appropriately.

2.  **Attach Shared Memory:**
    *   Use `shmat()` to attach the shared memory segment to the process's address space.
    *   Handle errors appropriately.

3.  **Initialize Semaphores:**
    *   Open the same semaphores created by Process 1 using `sem_open()`.

4.  **Wait for Data:**
    *   Wait for the `dataReady` flag in the shared memory to be set to 1 by Process 1 (using the data available semaphore).

5.  **Read Strings and Concatenate:**
    *   Read the three strings from the `string1`, `string2`, and `string3` fields of the `SharedData` structure in shared memory.
    *   Concatenate the strings with whitespace in between, storing the result in the `concatenatedString` field of the `SharedData` structure. Use `strcpy` and `strcat`. Be extremely careful to avoid buffer overflows.

6.  **Signal Result Ready:**
    *   Set the `resultReady` flag in the shared memory to 1 (using the result available semaphore) to signal to Process 1 that the concatenated string is ready.

7.  **Detach Shared Memory:**
    *   Use `shmdt()` to detach the shared memory segment.

### 3.4 Example Code (Illustrative - Requires Error Handling and Semaphores)

```c
//Illustrative - Requires Error Handling and Semaphores
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h> // For toupper, tolower
#include <sys/ipc.h>
#include <sys/shm.h>
#include <unistd.h>
#include <semaphore.h>
#include <fcntl.h>
#include <sys/stat.h>

#define MAX_STRING_LENGTH 100
#define NUM_STRINGS 3
#define SEM_DATA_READY "/sem_data_ready"
#define SEM_RESULT_READY "/sem_result_ready"

struct SharedData {
    char string1[MAX_STRING_LENGTH];
    char string2[MAX_STRING_LENGTH];
    char string3[MAX_STRING_LENGTH];
    char concatenatedString[3 * MAX_STRING_LENGTH + 2];
    int dataReady;
    int resultReady;
};

// Function to flip the case of a character
char flipCase(char c) {
    if (isupper(c)) {
        return tolower(c);
    } else if (islower(c)) {
        return toupper(c);
    } else {
        return c; // Leave non-alphabetic characters unchanged
    }
}

int main(int argc, char *argv[]) {
    key_t key = 1234; // Shared memory key
    int shmid;
    struct SharedData *sharedMemory;

    // Semaphores
    sem_t *sem_data_ready;
    sem_t *sem_result_ready;

    // Process ID (0 for sender, 1 for receiver)
    int processID = 0;
    if(argc > 1){
        processID = atoi(argv[1]);
    }

    // Shared Memory Operations
    if(processID == 0){ //Sender

      shmid = shmget(key, sizeof(struct SharedData), IPC_CREAT | 0666);
      if (shmid < 0) {
        perror("shmget failed");
        exit(1);
      }

      sharedMemory = (struct SharedData*) shmat(shmid, NULL, 0);
      if (sharedMemory == (struct SharedData *) -1) {
        perror("shmat failed");
        exit(1);
      }

      //Initialize semaphores
      sem_data_ready = sem_open(SEM_DATA_READY, O_CREAT | O_EXCL, 0666, 0); // Initial value 0
      if (sem_data_ready == SEM_FAILED) {
          sem_data_ready = sem_open(SEM_DATA_READY, 0);
          if (sem_data_ready == SEM_FAILED) {
              perror("sem_open (existing) failed");
              exit(EXIT_FAILURE);
          }

      }

      sem_result_ready = sem_open(SEM_RESULT_READY, O_CREAT | O_EXCL, 0666, 0); //Initial Value 0
      if (sem_result_ready == SEM_FAILED) {
          sem_result_ready = sem_open(SEM_RESULT_READY, 0);
          if (sem_result_ready == SEM_FAILED) {
              perror("sem_open (existing) failed");
              exit(EXIT_FAILURE);
          }
      }


      // Prepare strings to send
      strcpy(sharedMemory->string1, "Hello");
      strcpy(sharedMemory->string2, "S4");
      strcpy(sharedMemory->string3, "Students");


      // Signal that data is ready
      sharedMemory->dataReady = 1;
      if (sem_post(sem_data_ready) == -1) {
          perror("sem_post(sem_data_ready) failed");
          exit(EXIT_FAILURE);
      }

       printf("Sender: Data sent. Waiting for result...\n");

       if (sem_wait(sem_result_ready) == -1) {
           perror("sem_wait(sem_result_ready) failed");
           exit(EXIT_FAILURE);
       }

        printf("Sender: Result received.\n");
        char flippedString[3 * MAX_STRING_LENGTH + 2];
        strcpy(flippedString, sharedMemory->concatenatedString);

        // Flip the case of each character
        for (int i = 0; flippedString[i] != '\0'; i++) {
            flippedString[i] = flipCase(flippedString[i]);
        }

        printf("Flipped string: %s\n", flippedString);

        // Detach shared memory and remove (cleanup only by sender)
        if (shmdt(sharedMemory) == -1) {
             perror("shmdt failed");
             exit(EXIT_FAILURE);
        }

        if (shmctl(shmid, IPC_RMID, NULL) == -1) {
            perror("shmctl failed");
            exit(EXIT_FAILURE);
        }

        if (sem_close(sem_data_ready) == -1) {
            perror("sem_close(sem_data_ready) failed");
            exit(EXIT_FAILURE);
        }

        if (sem_close(sem_result_ready) == -1) {
            perror("sem_close(sem_result_ready) failed");
            exit(EXIT_FAILURE);
        }

        if (sem_unlink(SEM_DATA_READY) == -1) {
            perror("sem_unlink(SEM_DATA_READY) failed");
        }

        if (sem_unlink(SEM_RESULT_READY) == -1) {
            perror("sem_unlink(SEM_RESULT_READY) failed");
        }


    }else if (processID == 1){ //Receiver

        shmid = shmget(key, sizeof(struct SharedData), 0666);
        if (shmid < 0) {
          perror("shmget failed");
          exit(1);
        }

        sharedMemory = (struct SharedData*) shmat(shmid, NULL, 0);
        if (sharedMemory == (struct SharedData *) -1) {
          perror("shmat failed");
          exit(1);
        }

        // Open Semaphores (important to open, not create)
        sem_data_ready = sem_open(SEM_DATA_READY, 0);
        if (sem_data_ready == SEM_FAILED) {
             perror("sem_open(sem_data_ready) failed");
             exit(EXIT_FAILURE);
        }

        sem_result_ready = sem_open(SEM_RESULT_READY, 0);
        if (sem_result_ready == SEM_FAILED) {
             perror("sem_open(sem_result_ready) failed");
             exit(EXIT_FAILURE);
        }


        printf("Receiver: Waiting for data...\n");

        // Wait for the data
        if (sem_wait(sem_data_ready) == -1) {
            perror("sem_wait(sem_data_ready) failed");
            exit(EXIT_FAILURE);
        }

        printf("Receiver: Data received.\n");


        // Concatenate strings
        strcpy(sharedMemory->concatenatedString, sharedMemory->string1);
        strcat(sharedMemory->concatenatedString, " ");
        strcat(sharedMemory->concatenatedString, sharedMemory->string2);
        strcat(sharedMemory->concatenatedString, " ");
        strcat(sharedMemory->concatenatedString, sharedMemory->string3);

        // Signal that the result is ready
        sharedMemory->resultReady = 1;

        if (sem_post(sem_result_ready) == -1) {
            perror("sem_post(sem_result_ready) failed");
            exit(EXIT_FAILURE);
        }

        printf("Receiver: Result sent back.\n");

        if (shmdt(sharedMemory) == -1) {
            perror("shmdt failed");
            exit(EXIT_FAILURE);
        }

        if (sem_close(sem_data_ready) == -1) {
            perror("sem_close(sem_data_ready) failed");
            exit(EXIT_FAILURE);
        }

        if (sem_close(sem_result_ready) == -1) {
            perror("sem_close(sem_result_ready) failed");
            exit(EXIT_FAILURE);
        }


    } else {
        printf("Invalid process ID.\n");
        exit(1);
    }
    return 0;
}
```

**How to Compile and Run (Illustrative):**

1.  **Save:** Save the code as `shared_memory_strings.c`.

2.  **Compile:**

    ```bash
    gcc shared_memory_strings.c -o shared_memory_strings -pthread
    ```
    (The `-pthread` flag is essential for using semaphores.)

3.  **Run:**

    *   **Terminal 1 (Sender):** `./shared_memory_strings 0`
    *   **Terminal 2 (Receiver):** `./shared_memory_strings 1`

Remember that this is simplified code.  You MUST add proper error handling (checking return values of all system calls) and proper semaphore management to avoid race conditions and deadlocks.

## 4. Important Points to Remember

*   **Error Handling:**  Always check the return values of system calls like `shmget()`, `shmat()`, `shmdt()`, `sem_open()`, `sem_wait()`, `sem_post()`, etc., to handle potential errors gracefully.
*   **Synchronization:**  Use semaphores to protect shared resources and avoid race conditions.  Proper semaphore initialization and usage are critical for correct behavior.
*   **Shared Memory Size:** Allocate enough shared memory to hold all the data that needs to be shared.  Be mindful of potential buffer overflows when copying data into the shared memory.
*   **Key Management:**  Use `ftok()` or a similar mechanism to generate a unique key for the shared memory segment. Ensure that both processes use the same key.  Don't hardcode the key unless it's for testing.
*   **Cleanup:** Properly detach the shared memory segment using `shmdt()` when it's no longer needed. Remove the shared memory segment using `shmctl(..., IPC_RMID, ...)` when it's no longer needed, but only one process should do this. Unlink semaphores.
*   **Security:** Pay attention to the permissions of the shared memory segment to prevent unauthorized access.
*   **Semaphore Initialization:** Ensure semaphores are properly initialized. If using named semaphores, ensure that you're handling the case where the semaphore already exists.

## 5. Practice Questions/Exercises

1.  **What is shared memory and why is it useful for inter-process communication?**
    *   *Answer:* Shared memory is a region of memory that can be accessed by multiple processes. It is useful because it allows processes to share data without the overhead of copying data, making it faster than other IPC mechanisms like message queues.

2.  **Explain the purpose of `shmget()`, `shmat()`, `shmdt()`, and `shmctl()` system calls.**
    *   *Answer:*
        *   `shmget()`: Creates or retrieves a shared memory identifier.
        *   `shmat()`: Attaches a shared memory segment to the address space of a process.
        *   `shmdt()`: Detaches a shared memory segment from the address space of a process.
        *   `shmctl()`: Performs control operations on a shared memory segment (e.g., removing it).

3.  **Why is synchronization important when using shared memory? Give an example of what could happen if synchronization is not used.**
    *   *Answer:* Synchronization is important to prevent race conditions, where multiple processes try to access and modify shared data simultaneously, leading to data corruption or unexpected behavior. For example, if two processes try to write to the same location in shared memory at the same time without synchronization, the final value may be unpredictable.

4.  **What is a semaphore, and how can it be used to synchronize access to shared memory?**
    *   *Answer:* A semaphore is a synchronization primitive that controls access to a shared resource. It can be used to ensure that only one process at a time accesses a critical section of code that modifies shared memory, preventing race conditions.

5.  **How do you prevent a shared memory segment from persisting after the program terminates?**
    *   *Answer:* You can use `shmctl(shmid, IPC_RMID, NULL)` to remove the shared memory segment. It is important to do this in one of the processes *after* it has finished using the shared memory.

6.  **What are named semaphores and how are they different from unnamed semaphores?**
    *   *Answer:* Named semaphores are identified by a string name and can be accessed by unrelated processes (processes that don't share ancestry). Unnamed semaphores are typically used for synchronization within a single process (e.g., between threads) or between related processes that share a common ancestor.  Named semaphores are created and accessed using `sem_open` and unnamed semaphores are initialized using `sem_init`.

7.  **Write a code snippet that creates a shared memory segment of 1024 bytes.**
    *   *Answer:*

```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#define SHM_SIZE 1024

int main() {
    key_t key = 5678; // Shared memory key
    int shmid;

    shmid = shmget(key, SHM_SIZE, IPC_CREAT | 0666);
    if (shmid < 0) {
        perror("shmget failed");
        exit(1);
    }

    printf("Shared memory segment created with ID: %d\n", shmid);

    // Later, to remove the shared memory
    // shmctl(shmid, IPC_RMID, NULL);

    return 0;
}
```

8. **Write a code snippet to attach the shared memory created above to a process.**

```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#define SHM_SIZE 1024

int main() {
    key_t key = 5678; // Shared memory key
    int shmid;
    void *shared_memory;

    shmid = shmget(key, SHM_SIZE, 0666); // No IPC_CREAT - accessing existing
    if (shmid < 0) {
        perror("shmget failed");
        exit(1);
    }

    shared_memory = shmat(shmid, NULL, 0);
    if (shared_memory == (void *) -1) {
        perror("shmat failed");
        exit(1);
    }

    printf("Shared memory attached at address %p\n", shared_memory);
    // Access shared memory:  ((char*)shared_memory)[0] = 'A';

    // Later, to detach
    // shmdt(shared_memory);

    return 0;
}
```

These study notes cover the necessary concepts, implementation details, and potential challenges involved in the shared memory string manipulation task.  Remember to focus on error handling, synchronization, and proper cleanup to build robust and reliable programs.
