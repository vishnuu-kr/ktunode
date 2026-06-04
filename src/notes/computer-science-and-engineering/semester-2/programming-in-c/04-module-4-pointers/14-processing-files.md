---
title: "Processing files"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e6c"
status: "completed"
scrapedAt: "2026-05-20T16:35:45.038Z"
---
# Module 4: Pointers - Processing Files in C

Welcome back, everyone! In our journey through the power of C programming, we've explored the intricacies of pointers. Today, we're going to combine that knowledge with another crucial aspect of programming: **file handling**. Think of it this way: so far, our programs have been like great storytellers, but their stories disappear as soon as the power goes off. File handling is how we give our programs the ability to write their stories down, to save them, and to recall them later. This is where our programs gain persistence, and it's directly related to our ability to manage data effectively.

Remember our Course Outcome 5: "Use files in C to permanently store and manipulate data" (Knowledge Level: K3)? This topic is the very essence of that outcome. We'll be learning how to interact with external files – reading from them, writing to them, and essentially making our C programs much more useful in the real world. And guess what? Our understanding of pointers will be absolutely vital here, as we'll see how they help us manage the data we're moving between our programs and files.

Let's dive in!

## Why Files? The Need for Persistence

Imagine you're building a simple address book program in C. You ask the user for names, phone numbers, and addresses. Where does this information go when the program ends? If it's just stored in regular variables, poof! It's gone. To make our address book useful, we need to **store** this information **permanently** somewhere. That's where files come in.

Files act as external storage devices – like a notebook, a filing cabinet, or even a hard drive – that our C programs can interact with. They allow us to:

*   **Store data persistently:** Information remains even after the program terminates.
*   **Share data:** Programs can read data created by other programs, or vice-versa.
*   **Handle large datasets:** We can work with data that might be too big to fit into the computer's main memory (RAM) at once.

This is a fundamental concept, and it directly addresses **CO5**. Without files, our programs would be quite limited in their practical application.

## The Foundation: File Pointers and `FILE` Structure

Before we can start reading or writing, C needs a way to keep track of an opened file. This is where our hero, the **pointer**, makes a grand appearance in file handling.

When you want to work with a file, you first need to "open" it. This is like telling the operating system, "Hey, I want to access this particular file." The operating system then manages this access. In C, this opening operation returns a special kind of pointer. This pointer isn't pointing to a character or an integer; it's pointing to a structure called `FILE`.

You'll find this structure and related file handling functions defined in the `<stdio.h>` header file. So, the very first step in any file operation is always:

```c
#include <stdio.h>
```

The `FILE` structure is a way for C to internally manage all the necessary information about an opened file – things like the current position within the file, the buffer being used for reading/writing, and error flags. We, as programmers, don't typically need to worry about the *contents* of the `FILE` structure itself. What we care about is the pointer to it.

Let's declare a file pointer:

```c
FILE *fptr; // fptr is a pointer to a FILE structure
```

Think of `fptr` as a handle or a ticket that represents your connection to the file. When you open a file, you get this ticket. When you're done with the file, you "close" it, which is like returning the ticket.

This is a key concept related to **CO4** (using pointers for dynamic data handling) because `FILE` pointers allow us to manage resources (files) dynamically. We get a pointer to manage the file's data, which isn't directly part of our program's static memory.

## Opening a File: The Gateway to Interaction

The most fundamental function for file handling is `fopen()`. This function takes two arguments:

1.  **The filename:** A string representing the name of the file you want to open (e.g., `"mydata.txt"`).
2.  **The mode:** A string indicating how you intend to use the file (read, write, append, etc.).

The `fopen()` function returns a pointer to a `FILE` structure if the file was opened successfully. If it fails (e.g., the file doesn't exist and you're trying to read it, or you don't have permission), it returns `NULL`. This is crucial for error checking!

Here are the common modes you'll use with `fopen()`:

*   `"r"`: **Read mode.** Opens an existing file for reading. If the file doesn't exist, `fopen()` returns `NULL`.
*   `"w"`: **Write mode.** Opens a file for writing. If the file exists, its contents are **erased**. If the file doesn't exist, it's created.
*   `"a"`: **Append mode.** Opens a file for writing. If the file exists, new data is written at the **end** of the file. If the file doesn't exist, it's created.
*   `"r+"`: **Read and Write mode.** Opens an existing file for both reading and writing.
*   `"w+"`: **Read and Write mode.** Opens a file for both reading and writing. If the file exists, its contents are **erased**. If the file doesn't exist, it's created.
*   `"a+"`: **Append and Read mode.** Opens a file for appending and reading. If the file doesn't exist, it's created.

Let's see an example. Imagine we want to write some initial data to a file named "scores.txt". We'll use write mode (`"w"`).

```c
#include <stdio.h>

int main() {
    FILE *filePtr; // Declare a file pointer

    // Open the file "scores.txt" in write mode
    filePtr = fopen("scores.txt", "w");

    // Check if the file was opened successfully
    if (filePtr == NULL) {
        printf("Error opening file for writing!\n");
        return 1; // Indicate an error
    }

    // If we reach here, the file is open and ready for writing.
    printf("File 'scores.txt' opened successfully for writing.\n");

    // ... we'll write data here later ...

    // Close the file when done
    fclose(filePtr);
    printf("File 'scores.txt' closed.\n");

    return 0;
}
```

This snippet demonstrates the basic ritual: include `<stdio.h>`, declare a `FILE` pointer, `fopen()` with filename and mode, check for `NULL`, do your work, and then `fclose()`.

This relates to **CO5** by showing the initial step of establishing a connection to a file for data manipulation.

### A Relatable Analogy: Opening a Book

Think of `fopen()` like going to a library and asking for a specific book.

*   **`fopen("my_novel.txt", "r")`**: You're asking for "my\_novel.txt" to *read*. If it's not on the shelf, you can't read it.
*   **`fopen("new_story.txt", "w")`**: You're asking for a blank notebook called "new\_story.txt" to *write* in. If a notebook with that name already exists, the librarian takes it, tears out all the pages, and gives you a fresh, empty one to start with.
*   **`fopen("diary.txt", "a")`**: You're asking for your "diary.txt". If it exists, you want to add new entries *at the end*. If it doesn't exist, you get a new, empty diary.

The `FILE *` you get back is like the librarian handing you the book or the notebook. If they can't find it or give it to you, they'll tell you (by returning `NULL`).

## Reading from Files: Bringing Data Back

Once a file is open for reading (`"r"` or `"r+"`), we can start retrieving data. C provides several functions for this, each suited for different scenarios.

### Character-by-Character Reading: `fgetc()`

The `fgetc()` function reads a single character from the file associated with the given `FILE` pointer.

*   **Syntax:** `int fgetc(FILE *stream);`
*   **Return Value:** It returns the character read as an `int`. If it reaches the end of the file (EOF) or an error occurs, it returns `EOF` (which is typically -1).

This is like reading a book one letter at a time.

```c
#include <stdio.h>

int main() {
    FILE *filePtr;
    int character; // Use int to hold EOF

    filePtr = fopen("greeting.txt", "r"); // Assume greeting.txt exists

    if (filePtr == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    printf("Reading characters from greeting.txt:\n");
    // Read characters until EOF is encountered
    while ((character = fgetc(filePtr)) != EOF) {
        printf("%c", character); // Print the character
    }

    fclose(filePtr);
    return 0;
}
```

Remember `CO4`? Here, `character` is an `int` that stores the return value of `fgetc`. This integer might represent a character's ASCII value or the special `EOF` marker. This flexible use of `int` to store both characters and an end-of-file indicator is a common C pattern.

### Line-by-Line Reading: `fgets()`

Often, we want to read data in chunks, typically by line. The `fgets()` function is perfect for this.

*   **Syntax:** `char *fgets(char *str, int n, FILE *stream);`
*   **Arguments:**
    *   `str`: A pointer to a character array (a string buffer) where the read characters will be stored.
    *   `n`: The maximum number of characters to read, including the null terminator (`\0`). This prevents buffer overflows.
    *   `stream`: The `FILE` pointer.
*   **Return Value:** It returns `str` on success. It returns `NULL` if an error occurs or if the end of the file is reached *before* any characters are read. Importantly, `fgets()` reads up to `n-1` characters, or until a newline character (`\n`) is encountered, or until the end of the file. It automatically appends a null terminator (`\0`). If a newline character is read, it is stored in the buffer.

This is like reading a book one sentence or paragraph at a time.

```c
#include <stdio.h>

#define MAX_LINE_LENGTH 100 // Define a buffer size

int main() {
    FILE *filePtr;
    char lineBuffer[MAX_LINE_LENGTH]; // Buffer to store each line

    filePtr = fopen("report.txt", "r"); // Assume report.txt exists

    if (filePtr == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    printf("Reading lines from report.txt:\n");
    // Read lines until fgets returns NULL (indicating EOF or error)
    while (fgets(lineBuffer, MAX_LINE_LENGTH, filePtr) != NULL) {
        printf("%s", lineBuffer); // Print the line (it already has a newline if read)
    }

    fclose(filePtr);
    return 0;
}
```

Notice how `fgets()` reads the newline character (`\n`) if it encounters one. This is why `printf("%s", lineBuffer)` often works without needing an extra `\n`, as the line itself might already end with one. This function is very important for **CO5** as it allows us to process data in a structured, line-based manner.

### Formatted Input: `fscanf()`

Similar to `scanf()` for console input, `fscanf()` allows you to read formatted data from a file. This is incredibly useful when your file contains numbers, strings, or a mix of data types.

*   **Syntax:** `int fscanf(FILE *stream, const char *format, ...);`
*   **Arguments:**
    *   `stream`: The `FILE` pointer.
    *   `format`: The format string (e.g., `"%d %s %f"`).
    *   `...`: Pointers to the variables where the read data will be stored.
*   **Return Value:** The number of input items successfully matched and assigned, or `EOF` if an input failure occurs before the first successful conversion or if the end of the file is reached.

This is like extracting specific pieces of information from a report, like a person's name and their score.

Let's say `data.txt` contains lines like:
`Alice 95`
`Bob 88`
`Charlie 76`

```c
#include <stdio.h>

int main() {
    FILE *filePtr;
    char name[50];
    int score;

    filePtr = fopen("data.txt", "r"); // Assume data.txt exists

    if (filePtr == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    printf("Reading name and score from data.txt:\n");
    // Read until the end of file (EOF) is encountered
    while (fscanf(filePtr, "%s %d", name, &score) == 2) {
        // fscanf returns the number of items successfully read.
        // We expect 2 items: a string and an integer.
        printf("Name: %s, Score: %d\n", name, score);
    }

    fclose(filePtr);
    return 0;
}
```

The `while (fscanf(...) == 2)` condition is a common and important pattern. It keeps reading as long as `fscanf` successfully reads *both* the name and the score. When it can't read two items (because it hit EOF or an unexpected format), the loop terminates. This function is vital for **CO5** when dealing with structured data files.

## Writing to Files: Storing Our Work

Now, let's explore how to write data *to* files. This is where modes like `"w"` and `"a"` come into play.

### Character-by-Character Writing: `fputc()`

The counterpart to `fgetc()`, `fputc()` writes a single character to the file.

*   **Syntax:** `int fputc(int character, FILE *stream);`
*   **Arguments:**
    *   `character`: The character (as an `int`) to write.
    *   `stream`: The `FILE` pointer.
*   **Return Value:** The character written on success, or `EOF` on error.

This is like writing one letter at a time onto a page.

```c
#include <stdio.h>

int main() {
    FILE *filePtr;
    char message[] = "Hello, File Handling!";
    int i = 0;

    filePtr = fopen("output.txt", "w"); // Open for writing

    if (filePtr == NULL) {
        printf("Error opening file for writing!\n");
        return 1;
    }

    printf("Writing characters to output.txt...\n");
    while (message[i] != '\0') {
        // Write each character from the string
        if (fputc(message[i], filePtr) == EOF) {
            printf("Error writing character!\n");
            break; // Stop if an error occurs
        }
        i++;
    }
    // Don't forget to write a newline if you want the file to end with one
    fputc('\n', filePtr);

    fclose(filePtr);
    printf("Data written successfully.\n");
    return 0;
}
```

Here, we're iterating through a string and writing each character. We explicitly add a `\n` at the end to ensure the file has a proper line break. This function helps implement **CO5**.

### Line-by-Line Writing: `fputs()`

For writing strings (lines of text), `fputs()` is the function to use.

*   **Syntax:** `int fputs(const char *str, FILE *stream);`
*   **Arguments:**
    *   `str`: A pointer to the null-terminated string to write.
    *   `stream`: The `FILE` pointer.
*   **Return Value:** Returns a non-negative value on success, or `EOF` on error.

**Important Note:** Unlike `printf`, `fputs()` does **not** automatically append a newline character. You must include `\n` in your string if you want a newline.

This is like writing a whole sentence at once.

```c
#include <stdio.h>

int main() {
    FILE *filePtr;
    char line1[] = "This is the first line.";
    char line2[] = "This is the second line.";

    filePtr = fopen("lines.txt", "w"); // Open for writing

    if (filePtr == NULL) {
        printf("Error opening file for writing!\n");
        return 1;
    }

    printf("Writing lines to lines.txt...\n");
    fputs(line1, filePtr);
    fputs("\n", filePtr); // Manually add newline
    fputs(line2, filePtr);
    fputs("\n", filePtr); // Manually add newline

    fclose(filePtr);
    printf("Lines written successfully.\n");
    return 0;
}
```

Again, the manual addition of `\n` is key. This function is fundamental for **CO5** for writing textual data.

### Formatted Output: `fprintf()`

The most versatile writing function, `fprintf()`, works just like `printf()` but writes to a file instead of the console.

*   **Syntax:** `int fprintf(FILE *stream, const char *format, ...);`
*   **Arguments:**
    *   `stream`: The `FILE` pointer.
    *   `format`: The format string.
    *   `...`: The values to be formatted and written.
*   **Return Value:** The number of characters written on success, or a negative value if an error occurs.

This is like using a sophisticated template to fill in with data and then printing it.

```c
#include <stdio.h>

int main() {
    FILE *filePtr;
    char name[] = "Alice";
    int age = 30;
    float salary = 50000.50;

    filePtr = fopen("employee.txt", "w"); // Open for writing

    if (filePtr == NULL) {
        printf("Error opening file for writing!\n");
        return 1;
    }

    printf("Writing formatted data to employee.txt...\n");
    fprintf(filePtr, "Name: %s\n", name);
    fprintf(filePtr, "Age: %d\n", age);
    fprintf(filePtr, "Salary: %.2f\n", salary); // Format salary to 2 decimal places

    fclose(filePtr);
    printf("Formatted data written successfully.\n");
    return 0;
}
```

This is arguably the most used function for writing structured data to files, directly supporting **CO5**. It allows us to combine strings, numbers, and formatting control effortlessly.

## Appending to Files: Adding to the End

What if you want to add new data to an existing file without overwriting what's already there? That's where the `"a"` (append) mode in `fopen()` is used.

If `my_log.txt` contains:
`[INFO] Program started.`

And you open it with `"a"` and write:
`[WARNING] Disk space low.`

The file will then look like:
`[INFO] Program started.`
`[WARNING] Disk space low.`

```c
#include <stdio.h>
#include <time.h> // For current time

int main() {
    FILE *filePtr;
    char logMessage[100];
    time_t currentTime;
    struct tm *localTime;

    // Open the file in append mode
    filePtr = fopen("system.log", "a");

    if (filePtr == NULL) {
        printf("Error opening file for appending!\n");
        return 1;
    }

    // Get current time
    time(&currentTime);
    localTime = localtime(&currentTime);
    // Format the time into a string (e.g., "2023-10-27 10:30:00")
    strftime(logMessage, sizeof(logMessage), "[%Y-%m-%d %H:%M:%S] ", localTime);

    // Append a sample log message
    strcat(logMessage, "User logged in.\n");

    // Write the log message to the file
    fputs(logMessage, filePtr);

    fclose(filePtr);
    printf("Log message appended successfully.\n");

    return 0;
}
```

This is a very common use case for **CO5**, especially for logging events or accumulating data over time.

## Closing Files: The Polite Farewell

Just as important as opening a file is **closing** it. The `fclose()` function does this.

*   **Syntax:** `int fclose(FILE *stream);`
*   **Arguments:** The `FILE` pointer to the file you want to close.
*   **Return Value:** `0` on success, `EOF` on error.

When you close a file:

1.  Any buffered data is written to the file.
2.  System resources associated with the file are released.
3.  The connection between your program and the file is terminated.

**Why is closing so important?**
*   **Data Integrity:** Not closing a file properly can lead to data loss if data is still in memory buffers waiting to be written.
*   **Resource Management:** Files are system resources. If you don't close them, you can run out of file handles, and your program (or other programs) might not be able to open new files.
*   **Avoiding Corruption:** In write or append modes, closing ensures that the file's structure is finalized correctly.

Think of `fclose()` as putting your notebook back on the shelf and returning your library ticket. You wouldn't just leave the book lying around or pocket the ticket!

Always, always, always close your files. It's a fundamental practice for **CO5**.

## Error Handling: The Safety Net

We've already seen `if (filePtr == NULL)` after `fopen()`. This is basic error checking. But what about errors during read/write operations?

C provides two functions to check for file stream errors:

*   `ferror(FILE *stream)`: Returns a non-zero value if an error indicator for the given stream is set, otherwise returns 0.
*   `clearerr(FILE *stream)`: Clears the error indicator for the given stream.

Let's incorporate `ferror()`:

```c
#include <stdio.h>

int main() {
    FILE *filePtr;
    int character;

    filePtr = fopen("nonexistent.txt", "r"); // Try to open a file that doesn't exist

    if (filePtr == NULL) {
        perror("Error opening file"); // perror prints a descriptive error message
        return 1;
    }

    printf("Attempting to read...\n");
    while ((character = fgetc(filePtr)) != EOF) {
        // If an error occurs during reading, ferror() will detect it
        if (ferror(filePtr)) {
            printf("An error occurred during reading.\n");
            clearerr(filePtr); // Clear the error flag
            break;
        }
        printf("%c", character);
    }

    if (feof(filePtr)) { // feof() checks for end-of-file
        printf("\nReached end of file.\n");
    }

    fclose(filePtr);
    return 0;
}
```

The `perror()` function is a handy utility from `<stdio.h>` that prints a user-defined message followed by a colon and the system's error message corresponding to the last error that occurred. This is excellent for debugging and user feedback, essential for robust **CO5** implementations.

## Pointers and File Processing: A Deeper Dive

So, how do pointers really help here beyond just holding the `FILE` structure?

1.  **Dynamic Allocation for Buffers:** When using `fgets()`, we need a buffer. We can dynamically allocate this buffer using `malloc()` and store its pointer. This is directly using **CO4** principles in conjunction with **CO5**.

    ```c
    #include <stdio.h>
    #include <stdlib.h> // For malloc

    int main() {
        FILE *filePtr;
        char *lineBuffer;
        size_t bufferSize = 256; // Initial buffer size

        filePtr = fopen("config.ini", "r");
        if (filePtr == NULL) {
            perror("Error opening config file");
            return 1;
        }

        lineBuffer = (char *)malloc(bufferSize); // Allocate memory
        if (lineBuffer == NULL) {
            printf("Memory allocation failed!\n");
            fclose(filePtr);
            return 1;
        }

        printf("Reading config data:\n");
        while (fgets(lineBuffer, bufferSize, filePtr) != NULL) {
            printf("%s", lineBuffer);
        }

        free(lineBuffer); // Free allocated memory
        fclose(filePtr);
        return 0;
    }
    ```
    Here, `lineBuffer` is a pointer managed by our program, and it's used to interact with `fgets` and thus the file.

2.  **Passing File Pointers to Functions:** You'll often want to encapsulate file operations into functions. You pass the `FILE` pointer as an argument, allowing functions to read from or write to the same file.

    ```c
    #include <stdio.h>

    void write_greeting(FILE *fp) {
        fprintf(fp, "Hello from a function!\n");
    }

    int main() {
        FILE *filePtr;

        filePtr = fopen("function_output.txt", "w");
        if (filePtr == NULL) {
            perror("Error opening file");
            return 1;
        }

        write_greeting(filePtr); // Pass the file pointer to the function

        fclose(filePtr);
        printf("Data written via function.\n");
        return 0;
    }
    ```
    This demonstrates modularity (**CO3**) applied to file handling, where pointers enable functions to operate on external resources.

## Binary Files vs. Text Files

So far, we've mostly dealt with **text files**. These are files that humans can easily read and edit, like `.txt`, `.c`, `.html` files. The data is stored as sequences of characters.

There are also **binary files**. These store data in its raw, computer-readable format, without any character encoding or interpretation. Examples include images (`.jpg`, `.png`), executable programs (`.exe`), and compressed archives (`.zip`).

When you open a file in binary mode, you append `"b"` to the mode string (e.g., `"rb"`, `"wb"`, `"ab"`).

*   **`fopen("image.jpg", "rb")`**
*   **`fopen("program.exe", "wb")`**

The key difference is how the data is read and written:

*   **Text Mode:** Newline characters (`\n`) might be translated to/from platform-specific representations (e.g., `\r\n` on Windows). Some characters might be processed.
*   **Binary Mode:** Data is read and written exactly as it is stored, without any translation.

For processing binary files, you typically use functions like `fread()` and `fwrite()`, which are designed to read/write blocks of raw memory (like arrays of bytes). While this is slightly outside the direct scope of character/line-based processing, it's important to know that binary modes exist and are crucial for handling non-textual data, also serving **CO5**.
