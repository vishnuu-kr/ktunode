---
title: "Library functions related to file – fseek()"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e6d"
status: "completed"
scrapedAt: "2026-05-20T16:35:46.186Z"
---
## PROGRAMMING IN C: Module 4 - Pointers
### Topic: Library Functions Related to Files – `fseek()`

Hello everyone, and welcome back to our journey into the fascinating world of C programming! Today, we're diving deep into Module 4, where we've been exploring the power of pointers. Now, we're going to combine that pointer knowledge with something incredibly practical and essential: **file handling**. Specifically, we'll be focusing on a crucial library function that allows us to navigate and manipulate data within files: `fseek()`.

Think of a file as a long, continuous stream of data, like a very long scroll. When we open a file, we're essentially given a starting point, a "current position" in that stream. Most of the time, when we read or write, we do so sequentially, moving from one byte to the next. But what if you need to jump to a specific point in the file? What if you want to go back and re-read a section, or perhaps insert data in the middle? That's precisely where `fseek()` comes to our rescue.

This function is fundamental for what we call **random access** in files. Instead of just reading from the beginning to the end, `fseek()` allows us to "seek" or move our file pointer to any arbitrary position within the file. This is a powerful capability, especially when dealing with large files or when you need to perform targeted operations.

### Understanding the `fseek()` Function

Let's get down to the nitty-gritty of `fseek()`. It's a standard library function found in `<stdio.h>`, just like `fopen()`, `fclose()`, `fread()`, and `fwrite()`.

The general syntax of `fseek()` looks like this:

```c
int fseek(FILE *stream, long offset, int whence);
```

Don't let the syntax scare you! Let's break down each of these arguments:

1.  **`FILE *stream`**: This is a pointer to a `FILE` structure. When you successfully open a file using `fopen()`, it returns a pointer to this structure. This `stream` pointer is your handle to the file you want to manipulate. Think of it as the "address" of your file on your computer.

2.  **`long offset`**: This is a `long` integer value that specifies the number of bytes to move. The direction of the move depends on the third argument, `whence`.
    *   If `whence` indicates the beginning of the file or the current position, the `offset` is usually positive to move forward.
    *   If `whence` indicates the end of the file, the `offset` is typically negative to move backward from the end.

3.  **`int whence`**: This is the crucial part that tells `fseek()` *from where* to start counting the `offset`. It's an integer that can take one of three predefined constants:

    *   **`SEEK_SET`**: This means the `offset` is counted from the **beginning of the file**. So, `fseek(filePtr, 100L, SEEK_SET);` would move the file pointer exactly 100 bytes from the very start of the file. This is often used for absolute positioning.

    *   **`SEEK_CUR`**: This means the `offset` is counted from the **current position of the file pointer**. If your file pointer is currently at byte 50, and you call `fseek(filePtr, 20L, SEEK_CUR);`, the pointer will move forward 20 bytes, landing at byte 70. If you use a negative offset, say `fseek(filePtr, -10L, SEEK_CUR);`, it will move backward 10 bytes.

    *   **`SEEK_END`**: This means the `offset` is counted from the **end of the file**. If you want to go to the very last byte of the file, you'd typically use `fseek(filePtr, 0L, SEEK_END);`. If you wanted to go 50 bytes *before* the end, you'd use `fseek(filePtr, -50L, SEEK_END);`.

**Important Note on `offset`**: Notice the `L` suffix in `100L`. It's good practice to specify `long` constants when dealing with `offset` to ensure type compatibility, as `offset` is declared as `long`.

**Return Value**:
`fseek()` returns **0 on success** and a non-zero value if an error occurs. This is a common pattern in C library functions – a return value of 0 or `NULL` often signifies success.

### Connecting to Course Outcomes

Before we dive into examples, let's quickly see how this relates to our course objectives:

*   **CO4: Develop C programs using pointers for dynamic data handling.** `fseek()` inherently works with file pointers, allowing us to move around within a file, which is a form of dynamic data manipulation. We're not just reading sequentially; we're actively controlling our position based on computed offsets.
*   **CO5: Use files in C to permanently store and manipulate data.** `fseek()` is a key tool for manipulating data within files. It enables more complex file operations than simple sequential reading and writing, allowing for targeted updates and data retrieval.

Think of `fseek()` as giving you the ability to use a bookmark in a very long book. Without it, you'd have to flip through page by page. With `fseek()`, you can jump directly to chapter 5, section 3!

### Practical Examples and Analogies

Let's make this concrete with some scenarios.

**Scenario 1: Reading a specific record from a fixed-size record file.**

Imagine you have a file that stores student records, and each record is exactly 100 bytes long.
Record 0: bytes 0-99
Record 1: bytes 100-199
Record 2: bytes 200-299
And so on.

If you want to read the 5th student's record (remember, indexing often starts from 0, so the 5th record is at index 4), how would you do it?

*   The size of each record is 100 bytes.
*   To get to the 5th record (index 4), you need to skip the previous 4 records.
*   So, the total number of bytes to skip from the beginning is `4 * 100 = 400` bytes.

Here's how you'd use `fseek()` for this:

```c
#include <stdio.h>

typedef struct {
    int id;
    char name[50];
    float marks;
} Student;

int main() {
    FILE *filePtr;
    Student studentData;
    int recordNumber = 4; // We want to read the 5th record (index 4)
    long fileSize;
    long recordSize = sizeof(Student); // Assuming sizeof(Student) is indeed 100 bytes

    // Open the file in binary read mode
    filePtr = fopen("students.dat", "rb");
    if (filePtr == NULL) {
        perror("Error opening file");
        return 1;
    }

    // Calculate the offset to reach the desired record
    // Offset = recordNumber * size_of_each_record
    long offset = (long)recordNumber * recordSize;

    // Move the file pointer to the beginning of the desired record
    // SEEK_SET means from the beginning of the file
    if (fseek(filePtr, offset, SEEK_SET) != 0) {
        perror("Error seeking to record");
        fclose(filePtr);
        return 1;
    }

    // Now, read the record
    if (fread(&studentData, sizeof(Student), 1, filePtr) != 1) {
        if (feof(filePtr)) {
            printf("Reached end of file before reading record %d.\n", recordNumber);
        } else {
            perror("Error reading record");
        }
        fclose(filePtr);
        return 1;
    }

    // Print the student information
    printf("Student ID: %d\n", studentData.id);
    printf("Student Name: %s\n", studentData.name);
    printf("Student Marks: %.2f\n", studentData.marks);

    // Close the file
    fclose(filePtr);

    return 0;
}
```

In this example, `fseek(filePtr, offset, SEEK_SET)` is the key. It jumps our file cursor exactly where we need it to start reading the 5th student's data. This is a very common use case in data processing where you have structured, fixed-size records.

**Scenario 2: Appending data to a file without overwriting.**

Let's say you have a log file, and you want to add a new entry at the very end. You could use `fopen("log.txt", "a");`, which automatically positions the pointer at the end. However, if you already opened the file in read mode (`"r"`) or read-write mode (`"r+"`), and you want to append, you'd use `fseek()`:

```c
#include <stdio.h>
#include <time.h> // For timestamp

int main() {
    FILE *logFile;
    char logEntry[100];
    time_t currentTime;

    // Open the file in read-write mode, so we can both check the end and write
    logFile = fopen("application.log", "r+");
    if (logFile == NULL) {
        // If file doesn't exist, create it in write mode and then reopen in r+
        logFile = fopen("application.log", "w+");
        if (logFile == NULL) {
            perror("Error creating/opening log file");
            return 1;
        }
    }

    // Find the end of the file
    // SEEK_END positions offset from the end. 0L means 0 bytes from the end.
    if (fseek(logFile, 0L, SEEK_END) != 0) {
        perror("Error seeking to end of file");
        fclose(logFile);
        return 1;
    }

    // Now, the file pointer is at the end. We can write a new entry.
    // Get current timestamp
    time(&currentTime);
    sprintf(logEntry, "[%s] Application started.\n", ctime(&currentTime));

    // Write the log entry
    if (fputs(logEntry, logFile) == EOF) {
        perror("Error writing to log file");
        fclose(logFile);
        return 1;
    }

    printf("Log entry added successfully.\n");

    // Close the file
    fclose(logFile);

    return 0;
}
```

Here, `fseek(logFile, 0L, SEEK_END)` takes us to the very end of the file. Now, any `fwrite` or `fputs` will add data at this position, effectively appending to the file.

**Scenario 3: Moving backward to re-read data.**

Suppose you've read some data, and now you realize you missed a detail or made a mistake in processing. You can use `fseek()` with `SEEK_CUR` to go back.

Imagine reading a string, then realizing you need to re-read the last few characters from the current position.

```c
#include <stdio.h>

int main() {
    FILE *filePtr;
    char buffer[50];
    char currentChar;

    // Create a dummy file for demonstration
    filePtr = fopen("test_seek.txt", "w");
    fprintf(filePtr, "This is a sample text file for fseek demonstration.");
    fclose(filePtr);

    // Open the file in read mode
    filePtr = fopen("test_seek.txt", "r");
    if (filePtr == NULL) {
        perror("Error opening file");
        return 1;
    }

    // Read the first part of the file
    if (fgets(buffer, sizeof(buffer), filePtr) == NULL) {
        perror("Error reading initial part");
        fclose(filePtr);
        return 1;
    }
    printf("Read: %s\n", buffer); // e.g., "This is a sample text file for fseek de"

    // Let's say we want to read the next 5 characters and then go back 2 characters
    // We are currently after reading 'de'

    // First, read 5 characters from the current position
    if (fgets(buffer, sizeof(buffer), filePtr) == NULL) {
        printf("Reached end of file.\n");
    } else {
        printf("Read next part: %s\n", buffer); // e.g., "monstration.\n"

        // Now, let's say we want to go back 7 characters from the current position
        // to re-read the word "fseek" which is before " demonstration."
        // (This is a bit contrived, but illustrates SEEK_CUR)
        // The last read was 'n' of demonstration.
        // The word 'fseek' is about 20 chars before that. Let's try moving back 20.
        // To go back 20 bytes from the current position
        if (fseek(filePtr, -20L, SEEK_CUR) != 0) {
            perror("Error seeking backward");
        } else {
            printf("Successfully moved back 20 bytes from current position.\n");
            // Now read again from this new position for demonstration
            if (fgets(buffer, sizeof(buffer), filePtr) == NULL) {
                 perror("Error reading after seeking back");
            } else {
                 printf("Read after seeking back: %s\n", buffer); // Should start with "fseek demonstration."
            }
        }
    }

    // Close the file
    fclose(filePtr);

    return 0;
}
```

In this example, `fseek(filePtr, -20L, SEEK_CUR)` moved the pointer backward by 20 bytes relative to wherever `fgets` had left it. This ability to move backward is crucial for certain parsing tasks or data validation where you might peek ahead and then rewind.

### Key Considerations and Common Pitfalls

When working with `fseek()`, there are a few things to keep in mind to avoid common errors:

1.  **Binary vs. Text Mode**: The behavior of `fseek()` can be *different* depending on whether you open the file in binary mode (`"rb"`, `"wb"`, `"ab"`, `"r+b"`, etc.) or text mode (`"r"`, `"w"`, `"a"`, `"r+"`, etc.).
    *   In **binary mode**, the `offset` is a direct byte count. This is generally more predictable.
    *   In **text mode**, some systems might perform automatic newline translations (e.g., converting `\r\n` to `\n` on Windows). This can subtly change the byte offset required. For precise control, especially when dealing with non-ASCII data or specific file structures, **binary mode is usually preferred**. The `long offset` argument in text mode is only guaranteed to be meaningful when used with `SEEK_SET`. Moving with `SEEK_CUR` or `SEEK_END` in text mode can be unpredictable due to these translations. Hanly and Koffman in "Problem Solving and Program Design in C" emphasize using binary mode for reliable file manipulation with `fseek`.

2.  **File Positions and `long`**: The `offset` argument is of type `long`. Make sure your calculated offsets fit within a `long`. For extremely large files on systems where `long` might not be 64-bit, you might need to consider alternative functions or file systems. However, for typical use cases, `long` is sufficient. Remember to cast your calculated offset to `long` to avoid potential issues.

3.  **`SEEK_END` Offset**: When using `SEEK_END`, the offset is relative to the end. A positive offset from `SEEK_END` is technically invalid for most standard file types and can lead to unpredictable behavior or errors. Kernighan and Ritchie's "The C Programming Language" (K&R) is the authoritative source for C standards, and it clarifies that the `offset` for `SEEK_END` should generally be zero or negative.

4.  **Error Checking**: Always check the return value of `fseek()`. If it returns non-zero, it means an error occurred. This could be because you tried to seek beyond the end of the file (though some systems might allow this and then subsequent reads would return EOF) or into invalid memory. Use `perror()` to get more information about the error.

5.  **Interaction with `fread`/`fwrite`**: After calling `fseek()`, the *next* read or write operation will start at the new file position. Ensure you perform `fseek()` *before* your read/write operations if you want them to start at the new location.

### `rewind()` and `fgetpos()`/`fsetpos()`

While `fseek()` is the most versatile, C also provides other related functions:

*   **`rewind(FILE *stream)`**: This is a simpler function that resets the file position indicator to the beginning of the file. It's equivalent to `fseek(stream, 0L, SEEK_SET);`. It's useful when you've finished processing a file and want to start over from the beginning for another pass.

*   **`fgetpos(FILE *stream, fpos_t *pos)`**: This function stores the current value of the file position indicator in the object pointed to by `pos`. `fpos_t` is a type defined in `<stdio.h>` that can uniquely identify a position within a file. This is useful if you need to mark a specific position and then return to it later, especially in scenarios where `fseek`'s simple `long offset` might not be sufficient (e.g., very large files or specific file system characteristics where a simple byte offset isn't enough to define a position).

*   **`fsetpos(FILE *stream, const fpos_t *pos)`**: This function sets the file position indicator to the value stored in `pos`, which was previously obtained by a call to `fgetpos()`.

While `fgetpos()` and `fsetpos()` offer a more robust way to manage file positions across different systems and large files, `fseek()` with `SEEK_SET`, `SEEK_CUR`, and `SEEK_END` is more commonly used for direct manipulation based on byte offsets. For the scope of this topic, understanding `fseek()` is paramount.

### Summary and Exam Focus

Let's recap the key takeaways for `fseek()`:

*   **Purpose**: To move the file position indicator to a specific location within a file, enabling random access.
*   **Syntax**: `int fseek(FILE *stream, long offset, int whence);`
*   **`whence` values**:
    *   `SEEK_SET`: From the beginning of the file.
    *   `SEEK_CUR`: From the current file position.
    *   `SEEK_END`: From the end of the file.
*   **`offset`**: The number of bytes to move. Typically positive for forward movement, negative for backward movement. Use `long` constants (e.g., `100L`).
*   **Mode**: Binary mode (`"rb"`, `"wb"`, etc.) is generally preferred for predictable `fseek()` behavior.
*   **Error Checking**: Always check the return value (0 for success, non-zero for error).
*   **Relation to `rewind()`**: `rewind()` is a specialized, simpler form of `fseek(stream, 0L, SEEK_SET)`.

**Exam Tip**: Expect questions that ask you to write code to access a specific record in a fixed-size record file, or to append data to a file that was opened in a read mode. You might also be asked about the differences between `SEEK_SET`, `SEEK_CUR`, and `SEEK_END`, and the implications of binary vs. text mode.

Remember this: `fseek()` is your key to unlocking the ability to navigate and manipulate files with precision, moving beyond simple sequential processing. It's a fundamental tool for any serious file handling in C.

### Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual and practical aspects:

**Question 1 (Conceptual):**
What is the primary purpose of the `fseek()` function in C? Explain the three possible values for the `whence` argument.

**Answer 1:**
The primary purpose of `fseek()` is to allow for **random access** to data within a file. Instead of processing a file strictly from beginning to end, it lets you move the file position indicator to any arbitrary point within the file. This is crucial for efficiently accessing specific records or modifying data in place.

The three possible values for the `whence` argument are:
*   **`SEEK_SET`**: The offset is calculated from the **beginning of the file**.
*   **`SEEK_CUR`**: The offset is calculated from the **current position** of the file indicator.
*   **`SEEK_END`**: The offset is calculated from the **end of the file**.

**Question 2 (Practical):**
You have a file named `data.bin` containing 100 records, where each record is exactly 64 bytes long. Write a C code snippet to open this file in binary read mode and move the file pointer to the beginning of the 15th record.

**Answer 2:**

```c
#include <stdio.h>

int main() {
    FILE *filePtr;
    long recordNumber = 14; // To get the 15th record, index is 14
    long recordSize = 64L;
    long offset;

    filePtr = fopen("data.bin", "rb");
    if (filePtr == NULL) {
        perror("Error opening file");
        return 1;
    }

    // Calculate the offset to the start of the 15th record
    offset = recordNumber * recordSize;

    // Move the file pointer to the calculated offset from the beginning
    if (fseek(filePtr, offset, SEEK_SET) != 0) {
        perror("Error seeking to record");
        fclose(filePtr);
        return 1;
    }

    printf("File pointer positioned at the beginning of the 15th record.\n");

    // Now you can read the 15th record using fread, for example:
    // YourRecordStructure record;
    // fread(&record, sizeof(YourRecordStructure), 1, filePtr);

    fclose(filePtr);
    return 0;
}
```

**Question 3 (Application/Comparison):**
What is the difference in behavior between `fseek(filePtr, 0L, SEEK_SET)` and `rewind(filePtr)`? When would you prefer `rewind()`?

**Answer 3:**
Both `fseek(filePtr, 0L, SEEK_SET)` and `rewind(filePtr)` achieve the same result: they reposition the file indicator to the beginning of the file.

The key difference is in their generality and error handling:
*   `fseek()` is a general-purpose function that can move the file pointer to any position relative to the beginning, current, or end of the file, using a `long offset`. It returns an integer status code (0 for success, non-zero for failure).
*   `rewind()` is a more specialized function designed *only* to move the file pointer to the beginning of the file. It does not take an offset or `whence` argument. Its return type is `void`, meaning it doesn't explicitly signal success or failure. However, it also clears the error indicator for the stream.

You would prefer `rewind()` when your *sole intention* is to go back to the very start of the file. It's more concise and clearly expresses this specific intent. It's also useful for resetting error flags associated with the stream. For any other type of file pointer movement (e.g., moving forward, moving backward, moving relative to the current position), `fseek()` is the required function.

Keep practicing these concepts, and you'll find file handling in C becomes much more manageable and powerful!
