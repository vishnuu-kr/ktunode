---
title: "Library functions related to file – fseek()"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da38c"
status: "completed"
scrapedAt: "2026-05-23T17:42:41.511Z"
---
# Programming in C: Module 4 - Pointers

## Topic: Library Functions Related to Files – `fseek()`

Hello everyone! Welcome back to our exploration of C programming. Today, we're diving deeper into file handling, a crucial aspect of making our programs interact with the persistent storage on our computers. We've already touched upon opening, reading, and writing files, but what if we need to jump to a specific location within a file? What if we want to re-read a part of the file, or perhaps skip over some data? This is where the `fseek()` function comes in, and it's a powerful tool that leverages our understanding of pointers, as we've been learning in this module.

This topic directly contributes to **Course Outcome 5 (CO5)**: "Use files in C to permanently store and manipulate data." By learning `fseek()`, we gain finer control over data manipulation within files, moving beyond sequential access. It also indirectly supports **CO4** ("Develop C programs using pointers for dynamic data handling") because `fseek()`'s core mechanism relies on manipulating file positions, which are conceptually tied to pointer arithmetic within the file's structure.

### Understanding File Pointers and Positions

Before we get to `fseek()`, let's quickly recap what's happening behind the scenes when we work with files in C. When you open a file using `fopen()`, the system creates a `FILE` pointer (often declared as `FILE *fptr;`). This isn't a pointer to the actual data in the file, but rather a pointer to a structure that holds important information about the file, such as:

*   The current buffer being used for reading/writing.
*   The current position within that buffer.
*   The mode in which the file was opened (read, write, append, etc.).
*   And critically, the **current file position indicator**.

Think of this file position indicator as a bookmark in a very long book. Every time you read or write data, this bookmark moves forward to show you where you are. If you're reading characters one by one, the bookmark moves one character forward after each read. This is called **sequential access**.

However, what if our "book" is a massive database file, and we know we need to read a specific record that's, say, 1000 bytes from the beginning? We don't want to read and discard the first 999 bytes! We want to *jump* directly to the 1000th byte. This is where `fseek()` becomes our best friend.

### Introducing `fseek()`: The File Navigator

The `fseek()` function allows us to reposition the file position indicator within a file. It's like telling your bookmark, "Okay, forget where you are now; go to *this specific page and line*."

The standard library declaration for `fseek()` is:

```c
int fseek(FILE *stream, long offset, int whence);
```

Let's break down these parameters:

1.  `FILE *stream`: This is the pointer to the `FILE` object that was returned by `fopen()`. It's the handle to the file we're working with. It's the same `FILE *` you use for `fread()`, `fwrite()`, `fgetc()`, etc.

2.  `long offset`: This is a `long` integer value that represents the number of bytes to move the file position indicator. The meaning of this `offset` depends entirely on the third parameter, `whence`.

3.  `int whence`: This is a crucial integer constant that tells `fseek()` *from where* the `offset` should be measured. There are three standard values for `whence`:

    *   `SEEK_SET`: This means the `offset` is measured from the **beginning of the file**. If `whence` is `SEEK_SET` and `offset` is 100, the file position indicator will be moved to the 100th byte from the start of the file. This is like saying, "Go to page 100."

    *   `SEEK_CUR`: This means the `offset` is measured from the **current position of the file indicator**. If you are currently at byte 500 and call `fseek(fptr, 50, SEEK_CUR)`, the indicator will move 50 bytes forward from the current position, landing at byte 550. This is like saying, "Move forward 50 pages from where you are now." A negative `offset` here would move the indicator backward.

    *   `SEEK_END`: This means the `offset` is measured from the **end of the file**. If `whence` is `SEEK_END` and `offset` is -50, the indicator will be moved to 50 bytes *before* the end of the file. Note that when using `SEEK_END`, the `offset` is typically negative to move backward from the end. If you use a positive offset with `SEEK_END`, it's often implementation-defined or might not behave as expected, so it's best practice to use negative offsets here. This is like saying, "Go to 50 pages from the end of the book."

### The Return Value of `fseek()`

`fseek()` returns an integer:

*   **0** on success.
*   **Non-zero** on failure.

It's always good practice to check the return value, just like with most C library functions, to ensure your operation was successful. If it fails, you might want to use `perror()` to get more information about the error.

### When Can We Use `fseek()`?

`fseek()` is primarily used with files that support **random access**. This includes most disk files. However, it generally **cannot** be used with sequential input streams like pipes or terminals, where the concept of a "position" is not well-defined or controllable.

Also, and this is an important point often highlighted in textbooks like Kernighan and Ritchie, `fseek()` is most reliable when used with files opened in **binary mode** (`"rb"`, `"wb"`, `"r+b"`, etc.). In text mode, the system might perform translations (like converting newline characters `\n` to carriage return-newline pairs `\r\n` on some operating systems, or vice-versa). These translations can alter the actual byte offsets, making `fseek()`'s behavior unpredictable. So, if you need precise control over byte positions, always use binary mode.

### Practical Examples: Bringing `fseek()` to Life

Let's move beyond theory and see `fseek()` in action with some relatable examples.

**Example 1: Reading a Specific Line (Conceptually)**

Imagine a simple text file called `data.txt` containing:

```
Line 1: Hello
Line 2: World
Line 3: C Programming
```

We want to read "World". In a text file, finding the start of "World" isn't just about counting bytes, as line endings can vary. However, if we assume a consistent structure or work with binary mode where each character is 1 byte, we can use `fseek()`.

Let's say we know each line (including the newline character `\n`) is approximately 15 bytes long. To get to the start of the second line's content ("World"), we'd want to be at byte 15 (after the first line and its newline).

```c
#include <stdio.h>

int main() {
    FILE *fptr;
    char buffer[50];
    long offset;

    // Assuming data.txt exists with the content mentioned above.
    // It's safer to use binary mode for precise seeking.
    fptr = fopen("data.txt", "rb");
    if (fptr == NULL) {
        perror("Error opening file");
        return 1;
    }

    // Let's find the start of the second line.
    // Each line is roughly 15 bytes including the newline.
    // So, we want to be at offset 15 from the beginning.
    offset = 15; // Position after the first line + newline

    printf("Attempting to seek to byte %ld from the beginning...\n", offset);

    if (fseek(fptr, offset, SEEK_SET) == 0) {
        printf("Seek successful!\n");
        // Now read some data from this new position.
        // Let's try to read the content of the second line.
        if (fgets(buffer, sizeof(buffer), fptr) != NULL) {
            printf("Data read from new position: %s\n", buffer);
        } else {
            printf("Error reading from file after seeking.\n");
        }
    } else {
        printf("Error seeking in the file.\n");
    }

    fclose(fptr);
    return 0;
}
```

In this example, `fseek(fptr, 15, SEEK_SET)` moves the pointer to the 15th byte of the file, assuming the first line and its newline character occupy exactly 15 bytes. Then, `fgets` reads from this new position.

**Important Note:** This example uses `fgets`, which reads until a newline or EOF. In binary mode, you might use `fread` for more precise byte-level reading after seeking.

**Example 2: Moving Backwards to Re-read Data**

Consider a log file where we've just written a new entry. Now, we want to go back and read the last 10 characters we wrote to verify them.

Let's say we wrote "Operation successful." to a file `log.txt`.
The string length is 24 characters.
Let's assume we wrote it in binary mode, so each character is 1 byte.
The file pointer is now at the end of "Operation successful.".

```c
#include <stdio.h>

int main() {
    FILE *fptr;
    char buffer[20]; // Buffer to read the last part

    fptr = fopen("log.txt", "w+b"); // Open for read/write, binary mode
    if (fptr == NULL) {
        perror("Error opening file");
        return 1;
    }

    // Write some data
    char message[] = "Operation successful.";
    fputs(message, fptr);
    printf("Wrote: %s\n", message);

    // Now, let's go back 10 bytes from the current position (end of written data)
    // The current position is strlen(message) bytes from the start.
    // We want to read the last 10 bytes.
    long bytes_to_read_back = 10;

    printf("Attempting to seek %ld bytes back from current position...\n", bytes_to_read_back);

    if (fseek(fptr, -bytes_to_read_back, SEEK_CUR) == 0) {
        printf("Seek successful!\n");
        // Read the last 10 bytes
        if (fread(buffer, 1, bytes_to_read_back, fptr) == bytes_to_read_back) {
            buffer[bytes_to_read_back] = '\0'; // Null-terminate for printing
            printf("Last 10 bytes read: '%s'\n", buffer);
        } else {
            printf("Error reading the last 10 bytes.\n");
        }
    } else {
        printf("Error seeking backward in the file.\n");
    }

    fclose(fptr);
    return 0;
}
```

Here, `fseek(fptr, -10, SEEK_CUR)` moves the file indicator 10 bytes *before* its current position. Then `fread` reads exactly 10 bytes from that new, earlier position. This is incredibly useful for things like error checking or re-processing recently written data.

**Example 3: Navigating to the End of the File**

Sometimes you just need to know the size of the file or jump to the very end.

```c
#include <stdio.h>

int main() {
    FILE *fptr;
    long fileSize;

    fptr = fopen("my_document.txt", "rb"); // Assume this file exists
    if (fptr == NULL) {
        perror("Error opening file");
        return 1;
    }

    // To find the file size, we can seek to the end and then
    // find the current position, which will be the size.
    // SEEK_END with an offset of 0 takes us exactly to the end.
    printf("Seeking to the end of the file...\n");
    if (fseek(fptr, 0, SEEK_END) == 0) {
        printf("Seek successful!\n");
        // ftell() returns the current position of the file indicator
        fileSize = ftell(fptr);
        if (fileSize != -1L) { // ftell returns -1L on error
            printf("File size is: %ld bytes\n", fileSize);
        } else {
            perror("Error getting file size with ftell");
        }
    } else {
        printf("Error seeking to the end of the file.\n");
    }

    fclose(fptr);
    return 0;
}
```

This is a standard and very common way to determine the size of a file in C. `fseek(fptr, 0, SEEK_END)` positions the indicator at the very end, and `ftell(fptr)` then tells us that position, which is equivalent to the file's size in bytes.

### Common Pitfalls and Best Practices

1.  **Text Mode vs. Binary Mode:** As stressed before, for predictable byte-level positioning, **always use binary mode** (`"rb"`, `"wb"`, `"r+b"`, etc.) when using `fseek()`. Text mode translations can mess with your offsets.
2.  **Offset with `SEEK_END`:** Remember to use a *negative* offset when `whence` is `SEEK_END` to move backward from the end. A positive offset might lead to undefined behavior.
3.  **Checking Return Values:** Never forget to check if `fseek()` and `ftell()` returned `0` or not `-1L` respectively. Errors can and do happen (e.g., trying to seek beyond the end of a file in some contexts, or permission issues).
4.  **`ftell()` and Large Files:** For extremely large files (beyond 2GB on some systems), `long` might not be sufficient to store the file size or position. In such cases, the C99 standard introduced `fgetpos()` and `fsetpos()`, which use a `fpos_t` type that is guaranteed to be able to represent any valid file position. While `fseek` is most common, be aware of `fgetpos`/`fsetpos` for very large files.
5.  **`SEEK_DATA` and `SEEK_HOLE`:** Modern C standards (like C11) have introduced `SEEK_DATA` and `SEEK_HOLE` for sparse files, but these are less commonly used in introductory programming and might not be supported by all compilers or operating systems. For our purposes, `SEEK_SET`, `SEEK_CUR`, and `SEEK_END` are the essentials.

### Relating to Course Outcomes

*   **CO5 (Use files in C to permanently store and manipulate data):** `fseek()` is a fundamental tool for *manipulating* data within files beyond simple sequential read/write. It allows for direct access to data records, making file processing more efficient and enabling complex operations like updating specific parts of a file without rewriting the whole thing. This directly enhances our ability to store and manipulate data persistently.
*   **CO4 (Develop C programs using pointers for dynamic data handling):** While `fseek()` operates on `FILE` pointers and `long` offsets, its underlying mechanism involves managing the file's internal position indicator. This indicator is conceptually similar to a pointer; it points to a location. The `offset` parameter, especially when combined with `SEEK_CUR` or `SEEK_END`, behaves much like pointer arithmetic – moving a certain number of "bytes" from a reference point. Understanding this helps solidify the concept of indirect addressing and data positioning that pointers facilitate.

### Key Takeaways

*   `fseek()` allows you to move the file position indicator to a specific location.
*   It takes a `FILE` pointer, an `offset` (number of bytes), and a `whence` flag (`SEEK_SET`, `SEEK_CUR`, `SEEK_END`).
*   **Binary mode is crucial** for predictable behavior with `fseek()`.
*   Use `fseek()` with `SEEK_END` and a negative offset to find file sizes using `ftell()`.
*   Always check the return value of `fseek()` for success.

Remember, mastering `fseek()` gives you the power to navigate and interact with files in a much more sophisticated way. It's a vital function for anyone serious about file handling in C!

---

## Sample Questions with Answers

**1. Conceptual Question:** Explain the purpose of the `fseek()` function and describe its three main arguments.

**Answer:**
The `fseek()` function is used to reposition the file position indicator associated with a `FILE` stream. This allows for non-sequential access to data within a file, enabling a program to jump to a specific byte offset rather than reading through the file sequentially.

The three arguments are:
*   `FILE *stream`: A pointer to the `FILE` object (obtained from `fopen()`) that identifies the stream to be repositioned.
*   `long offset`: The number of bytes to move the file position indicator. The meaning of this offset is determined by the `whence` argument.
*   `int whence`: A constant that specifies the reference point from which the `offset` is measured. The standard values are:
    *   `SEEK_SET`: The offset is measured from the beginning of the file.
    *   `SEEK_CUR`: The offset is measured from the current position of the file indicator.
    *   `SEEK_END`: The offset is measured from the end of the file.

**2. Exam-Oriented Question:** What is the most important consideration when using `fseek()` for precise byte-level positioning, and why? Provide a code snippet illustrating how to find the size of a file using `fseek()` and `ftell()`.

**Answer:**
The most important consideration when using `fseek()` for precise byte-level positioning is to **open the file in binary mode**. This is because when files are opened in text mode, the C runtime library might perform character translations (e.g., converting `\n` to `\r\n` or vice versa) between the external file and the internal stream buffer. These translations can alter the actual byte count, making `fseek()`'s `offset` calculations unpredictable and potentially incorrect. Binary mode ensures that there are no such translations, and the `offset` directly corresponds to the actual byte position in the file.

**Code Snippet to find file size:**

```c
#include <stdio.h>

int main() {
    FILE *file_ptr;
    long file_size;

    // Open the file in binary read mode for accurate positioning
    file_ptr = fopen("my_data.bin", "rb"); // Replace with your file name

    if (file_ptr == NULL) {
        perror("Error opening file");
        return 1;
    }

    // Seek to the end of the file
    // offset = 0, whence = SEEK_END means "go to the end of the file"
    if (fseek(file_ptr, 0, SEEK_END) != 0) {
        perror("Error seeking to end of file");
        fclose(file_ptr);
        return 1;
    }

    // Get the current position, which is the file size
    // ftell() returns the current position in bytes
    file_size = ftell(file_ptr);

    if (file_size == -1L) { // ftell returns -1L on error
        perror("Error getting file position");
    } else {
        printf("The size of the file is: %ld bytes\n", file_size);
    }

    // Close the file
    fclose(file_ptr);

    return 0;
}
```

**Reasoning:** The code opens `my_data.bin` in binary mode (`"rb"`). `fseek(file_ptr, 0, SEEK_END)` moves the file indicator to the end of the file. `ftell(file_ptr)` then returns the current position of the indicator, which is exactly the total number of bytes in the file. The return values of `fseek` and `ftell` are checked for errors.

**3. Scenario-Based Question:** You are working with a file that stores records of a fixed size, say 256 bytes per record. You want to read the 5th record (remembering that records are 0-indexed, so the 5th record is at index 4). How would you use `fseek()` to position the file indicator correctly before reading?

**Answer:**
To read the 5th record (which is at index 4), we need to position the file indicator at the start of that record. Since each record is 256 bytes and we are using 0-based indexing for records, the 5th record starts at an offset of `4 * 256` bytes from the beginning of the file.

We would use `fseek()` with `SEEK_SET` to specify that the offset is from the beginning of the file.

The call would be:
`fseek(file_pointer, 4 * 256, SEEK_SET);`

Or, calculating the offset:
`fseek(file_pointer, 1024L, SEEK_SET);` (Using `1024L` ensures it's treated as a `long` to match the function signature.)

After this call, the file indicator will be at the start of the 5th record, ready for a read operation (e.g., `fread()` to read 256 bytes). We would also check the return value of `fseek` to ensure the operation was successful.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
