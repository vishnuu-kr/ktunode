---
title: "fread()"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da38e"
status: "completed"
scrapedAt: "2026-05-23T17:42:43.322Z"
---
# Module 4: Pointers - Understanding `fread()` in C

Welcome back, everyone! In this session, we're diving deeper into the fascinating world of pointers, and specifically, we're going to focus on a powerful function that allows us to read data from files: **`fread()`**. This function is crucial when you want to transfer a block of data from a file directly into memory. Think of it like reading an entire chapter of a book in one go, rather than word by word.

As we've explored pointers, we've seen how they give us direct access to memory locations. `fread()` takes this concept and applies it to file input. Remember, our **Course Outcome 4 (CO4)** is all about developing C programs using pointers for dynamic data handling. `fread()` is a prime example of this, as it allows us to manage data transfers efficiently, often dealing with data structures or arrays stored in files. And don't forget **Course Outcome 5 (CO5)**, which emphasizes using files for permanent data storage and manipulation; `fread()` is your go-to tool for getting that data *back* into your program.

Let's break down what `fread()` is, how it works, and why it's so important.

## What is `fread()`?

The `fread()` function is part of the standard C library (`<stdio.h>`). Its primary purpose is to read a specified number of data items, each of a specified size, from a given input stream (a file) and store them in a buffer in memory.

At its core, `fread()` helps us read *binary* data. While `fscanf()` is great for reading formatted text, `fread()` is designed for reading raw bytes, making it ideal for structured data like arrays, structs, or any data that isn't necessarily human-readable text.

Let's look at its syntax:

```c
size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);
```

Let's dissect these parameters, as understanding them is key to using `fread()` effectively.

### Understanding the Parameters of `fread()`

1.  **`void *ptr`**:
    *   This is a pointer to a block of memory (a buffer) where the data read from the file will be stored.
    *   Why `void *`? Because `fread()` is generic. It doesn't know or care what *type* of data you're reading. It just knows it's going to dump raw bytes into this memory location. You, the programmer, need to ensure that `ptr` points to a memory region large enough to hold the data you intend to read.
    *   **Connection to Pointers (CO4):** This is where pointers shine! You'll typically declare an array or allocate memory dynamically (using `malloc` or `calloc`) and then pass the address of the beginning of that memory block to `fread()`. For instance, if you're reading an array of integers, `ptr` would be the address of the first element of that array.

2.  **`size_t size`**:
    *   This specifies the size, in bytes, of *each individual element* you want to read.
    *   Think about what you're reading. If you're reading an array of integers, and an integer is typically 4 bytes, then `size` would be `sizeof(int)`. If you're reading an array of structs, `size` would be `sizeof(YourStructName)`.
    *   **Exam Tip:** Always use `sizeof()` here! Don't hardcode byte sizes (like `4` for an integer). `sizeof()` makes your code portable and ensures it works correctly on different systems where data types might have different sizes.

3.  **`size_t nmemb`**:
    *   This tells `fread()` *how many* elements, each of `size` bytes, you want to read from the file.
    *   So, if you want to read 10 integers, `nmemb` would be `10`. The total number of bytes read would be `size * nmemb`.
    *   **Analogy:** Imagine a bookshelf. `size` is the width of one book, and `nmemb` is the number of books you want to take off the shelf.

4.  **`FILE *stream`**:
    *   This is a pointer to a `FILE` structure that identifies the input stream from which data is to be read.
    *   You get this `FILE` pointer when you successfully open a file using `fopen()`. For example, `FILE *file_pointer = fopen("mydata.bin", "rb");`.
    *   **Connection to Files (CO5):** This is the bridge connecting your program's memory to the actual file on disk. `fread()` needs this pointer to know *which* file to read from.

### What `fread()` Returns

The return value of `fread()` is also very important:

*   It returns the total number of *elements* successfully read. This is crucial for error checking and knowing how much data you *actually* got.
*   If an error occurs during the read operation, or if the end-of-file (EOF) is reached *before* any data is read, `fread()` returns 0.
*   If the number of elements read is less than `nmemb`, it usually indicates that the end of the file was encountered before reading the requested number of items.

**Remember this:** The return value is the *number of elements*, not the number of bytes. So, if you requested to read 10 integers (`nmemb = 10`) and `fread()` returns `7`, it means you successfully read 7 integers.

### Common Pitfalls and How to Avoid Them

*   **Buffer Overflow:** Always ensure your buffer (`ptr`) is large enough to hold `size * nmemb` bytes. If it's too small, you'll write past the allocated memory, corrupting other data, which is a classic C bug.
*   **End-of-File Handling:** If `fread()` returns a value less than `nmemb`, don't assume the read was complete. Check if the EOF has been reached using `feof()` or if an error occurred using `ferror()`.
*   **Binary Mode:** When working with `fread()` for non-text data, always open the file in binary mode (e.g., `"rb"` for read binary). This prevents any potential text-mode translations (like converting newline characters) that could corrupt your data.

## Putting `fread()` into Practice: Examples

Let's walk through some practical examples.

### Example 1: Reading an Array of Integers

Imagine you have a file named `numbers.bin` that contains a sequence of integers written in binary format. You want to read these integers back into an array in your C program.

First, let's assume we have a file that was created by writing integers like this:

```c
// Code to create numbers.bin (for demonstration)
#include <stdio.h>

int main() {
    FILE *fp = fopen("numbers.bin", "wb"); // Open in write binary mode
    if (fp == NULL) {
        perror("Error opening file");
        return 1;
    }
    int data[] = {10, 20, 30, 40, 50};
    size_t num_elements = sizeof(data) / sizeof(data[0]);
    fwrite(data, sizeof(int), num_elements, fp);
    fclose(fp);
    printf("numbers.bin created successfully.\n");
    return 0;
}
```

Now, here's how we would read it back using `fread()`:

```c
#include <stdio.h>

int main() {
    FILE *fp;
    int buffer[100]; // A buffer to hold up to 100 integers
    size_t elements_read;
    int i;

    // Open the file in read binary mode
    fp = fopen("numbers.bin", "rb");
    if (fp == NULL) {
        perror("Error opening file"); // Useful for debugging!
        return 1; // Indicate an error
    }

    // Read up to 100 integers from the file
    // ptr: buffer (address of the first element)
    // size: sizeof(int) (size of one integer)
    // nmemb: 100 (maximum number of integers to read)
    // stream: fp (the file pointer)
    elements_read = fread(buffer, sizeof(int), 100, fp);

    // Check how many elements were actually read
    if (elements_read > 0) {
        printf("Successfully read %zu integers:\n", elements_read);
        for (i = 0; i < elements_read; i++) {
            printf("%d ", buffer[i]);
        }
        printf("\n");
    } else if (feof(fp)) { // Check if end of file was reached
        printf("End of file reached, no data read or file is empty.\n");
    } else { // An error occurred
        printf("An error occurred during file reading.\n");
    }

    // Close the file
    fclose(fp);

    return 0;
}
```

**Explanation:**

*   We declare `buffer` as an array of `int`s. This is our destination in memory.
*   `fopen("numbers.bin", "rb")` opens the file for reading in binary mode.
*   `fread(buffer, sizeof(int), 100, fp)` attempts to read up to 100 integers. `sizeof(int)` tells `fread` each item is an integer. `buffer` is where they go.
*   The `elements_read` variable stores the actual count of integers successfully read. We then iterate through this count to print the numbers.
*   The checks for `feof(fp)` and general error conditions are vital for robust programming.

**Connection to Course Objectives:**

*   **CO4 (Pointers for dynamic data handling):** `buffer` is a memory block, and `fread` directly manipulates it via the pointer `buffer`. If we were using `malloc` to allocate memory, the pointer usage would be even more explicit.
*   **CO5 (Use files to permanently store and manipulate data):** This example directly demonstrates reading data that was previously stored in a file.

### Example 2: Reading a Structure

Let's say you have defined a `Student` structure and written records of students to a file.

```c
// Define the structure
typedef struct {
    int student_id;
    char name[50];
    float gpa;
} Student;

// Code to create students.bin (for demonstration)
#include <stdio.h>
#include <string.h>

typedef struct {
    int student_id;
    char name[50];
    float gpa;
} Student;

int main() {
    FILE *fp = fopen("students.bin", "wb");
    if (fp == NULL) {
        perror("Error opening file");
        return 1;
    }

    Student s1 = {101, "Alice Smith", 3.8};
    Student s2 = {102, "Bob Johnson", 3.5};

    // Write the entire structure s1
    fwrite(&s1, sizeof(Student), 1, fp);
    // Write the entire structure s2
    fwrite(&s2, sizeof(Student), 1, fp);

    fclose(fp);
    printf("students.bin created successfully.\n");
    return 0;
}
```

Now, to read these student records back:

```c
#include <stdio.h>
#include <string.h> // For strcpy if needed, though not strictly for fread here

// Define the structure (must match the structure used for writing)
typedef struct {
    int student_id;
    char name[50];
    float gpa;
} Student;

int main() {
    FILE *fp;
    Student student_record; // Variable to hold one student record
    size_t records_read;

    fp = fopen("students.bin", "rb"); // Open in read binary mode
    if (fp == NULL) {
        perror("Error opening file");
        return 1;
    }

    printf("Reading student records:\n");

    // Read one Student structure at a time until EOF or error
    // ptr: &student_record (address of the Student variable)
    // size: sizeof(Student) (size of the entire structure)
    // nmemb: 1 (we want to read one record at a time)
    // stream: fp
    while ((records_read = fread(&student_record, sizeof(Student), 1, fp)) > 0) {
        // If records_read is 1, we successfully read one student
        printf("ID: %d, Name: %s, GPA: %.2f\n",
               student_record.student_id,
               student_record.name,
               student_record.gpa);
    }

    // After the loop, check why it exited
    if (ferror(fp)) {
        printf("An error occurred during file reading.\n");
    } else if (!feof(fp)) {
        // This case is less common but could happen if fread returns 0 for reasons other than EOF
        printf("fread returned 0, but EOF not reached.\n");
    }

    fclose(fp);
    return 0;
}
```

**Explanation:**

*   We declare a `Student` variable, `student_record`, which will act as our buffer for each record.
*   `sizeof(Student)` is crucial here. It tells `fread` the exact number of bytes that constitute a single `Student` record.
*   We use `nmemb = 1` because we want to read one full `Student` structure at a time.
*   The `while` loop continues as long as `fread` successfully reads at least one element (in this case, one `Student` structure).
*   Inside the loop, we print the fields of the `student_record`.

**Connection to Course Objectives:**

*   **CO4 (Pointers for dynamic data handling):** We are using a pointer `&student_record` to a complex data structure. `fread` populates this structure directly from the file's binary representation. This is a core aspect of handling structured data efficiently.
*   **CO5 (Use files to permanently store and manipulate data):** This demonstrates reading back complex, structured data that was saved to a file.

## `fread()` vs. `fscanf()`

It's important to reiterate the difference:

*   **`fread()`:** Reads raw binary data. It's fast and efficient for structured data, arrays, and entire memory blocks. It doesn't interpret the data.
*   **`fscanf()`:** Reads formatted text data. It parses strings, converts them to numbers, and expects specific delimiters. It's for human-readable text files or files where data is organized as text.

If you write a `struct` to a file using `fwrite()`, you *must* read it back using `fread()`. Trying to read a binary `struct` with `fscanf()` would be like trying to read a picture file using a text editor – it just won't make sense.

## Advanced Considerations and Best Practices

*   **Error Checking is Paramount:** Always check the return value of `fread()`. A common mistake is to assume it read exactly what you asked for. Check for `0` or values less than `nmemb` and use `feof()` and `ferror()` to diagnose.
*   **File Position:** `fread()` reads from the current position in the file stream. If you need to read from a specific location, you'll use `fseek()` or `rewind()` before calling `fread()`.
*   **Buffer Management:** For very large files or when dealing with many records, consider reading in chunks rather than trying to load everything into memory at once. This is where `fread()` is flexible – you can adjust `nmemb` to read smaller or larger blocks as needed.
*   **Portability:** As mentioned, always use `sizeof()` to ensure your code is portable across different systems and compiler configurations.

## Summary

So, to recap our journey with `fread()`:

*   `fread()` is your tool for reading blocks of binary data from a file into memory.
*   It takes a pointer to a buffer, the size of each element, the number of elements, and the file stream pointer.
*   The return value tells you how many elements were successfully read, which is essential for error checking.
*   Always open files in binary mode (`"rb"`) when using `fread()` for non-textual data.
*   It's intimately tied to our understanding of pointers (CO4) and file handling (CO5), allowing us to bring stored data back into our programs for manipulation.

By mastering `fread()`, you gain a significant ability to manage data persistence and transfer, which is a cornerstone of building practical C applications.

---

## Sample Questions and Answers

Here are some questions to test your understanding, ranging from conceptual to exam-style.

**Question 1 (Conceptual):** What is the primary purpose of the `fread()` function in C?

**Answer:** The primary purpose of `fread()` is to read a specified number of data items, each of a specified size, from an input stream (typically a file opened in binary mode) into a buffer in memory. It's used for reading raw, unformatted binary data.

**Question 2 (Exam-Oriented - Parameter Identification):** Consider the following `fread()` call: `fread(myArray, sizeof(int), 50, inputFile);`.
    *   What is the buffer `fread()` will write to?
    *   What is the size of each element `fread()` expects to read?
    *   How many elements is `fread()` attempting to read?
    *   What is the input stream being read from?

**Answer:**
    *   The buffer `fread()` will write to is `myArray`.
    *   The size of each element is `sizeof(int)` bytes.
    *   `fread()` is attempting to read `50` elements.
    *   The input stream is `inputFile`.

**Question 3 (Conceptual - Return Value):** If `fread()` is called to read 100 integers (`nmemb = 100`) from a file, but the file only contains 30 integers, what will be the return value of `fread()`? What should you do next?

**Answer:** The return value of `fread()` will be `30`. After this, you should check `feof(fp)` to confirm that the end of the file was reached. If `feof(fp)` is true, the read operation completed as expected given the file's contents. If `feof(fp)` is false, it might indicate an error occurred during the read operation, in which case you should check `ferror(fp)`.

**Question 4 (Practical - Error Scenario):** You are reading a file of `Student` structures (as defined in the lecture notes) using `fread(student_ptr, sizeof(Student), 1, fp);`. The file was created with 5 student records. Your program crashes with a segmentation fault. What is the most likely cause?

**Answer:** The most likely cause is that `student_ptr` is not pointing to a valid memory location large enough to hold a `Student` structure. This could happen if:
    1.  `student_ptr` was not initialized (e.g., it's a dangling pointer).
    2.  Memory was not allocated for `student_ptr` (e.g., `malloc` was not called, or it failed).
    3.  Memory was allocated, but not enough space was reserved, or `sizeof(Student)` is incorrect.
    When `fread()` attempts to write into this invalid memory, the program crashes.

**Question 5 (Code Analysis):** What is the potential problem in the following code snippet, and how would you fix it?

```c
#include <stdio.h>

int main() {
    FILE *fp = fopen("data.txt", "rb");
    char data[10];
    size_t count;

    if (fp == NULL) {
        perror("Error");
        return 1;
    }

    // Attempt to read 20 characters
    count = fread(data, 1, 20, fp);
    printf("Read %zu characters.\n", count);

    fclose(fp);
    return 0;
}
```

**Answer:**
The potential problem is a **buffer overflow**. The `data` array is declared to hold only `10` characters. However, the `fread` function is instructed to read `20` characters (because `1 * 20 = 20` bytes, and the element size is 1 byte). If the file contains at least 20 bytes, `fread` will write beyond the allocated `10` bytes of the `data` array, leading to undefined behavior, including potential crashes or data corruption.

**Fix:**
You should ensure the buffer is large enough or adjust the number of elements requested:

*   **Option 1 (Enlarge Buffer):** Declare the buffer to be large enough:
    ```c
    char data[20]; // Or a more appropriate size like 100 or 1024
    count = fread(data, 1, 20, fp);
    ```
*   **Option 2 (Read Fewer Elements):** If you only want to read up to the buffer's capacity:
    ```c
    count = fread(data, 1, 10, fp); // Read at most 10 characters
    ```
    In this case, `count` will be at most 10. If the file has fewer than 10 characters, `count` will reflect that.

This highlights the importance of matching your `fread` request (`size * nmemb`) with the allocated buffer size.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
