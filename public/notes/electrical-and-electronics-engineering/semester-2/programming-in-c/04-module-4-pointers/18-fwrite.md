---
title: "fwrite()."
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f991a"
status: "completed"
scrapedAt: "2026-05-23T16:09:43.953Z"
---
# PROGRAMMING IN C: Module 4: Pointers - `fwrite()`

Welcome back, everyone! In our journey through the fascinating world of C programming, we've delved deep into the power of pointers. We've seen how they allow us to directly manipulate memory, manage dynamic data structures, and even optimize our code. Today, we're going to build upon that foundation and explore a crucial function for working with files, especially when dealing with structured data: `fwrite()`.

You might be thinking, "Wait, pointers and files? How do they connect?" Well, remember how we talked about pointers giving us direct access to memory locations? When we work with files, especially binary files, we're often dealing with blocks of data that reside in memory and need to be transferred to or from disk. Pointers are the perfect tools to manage these blocks of data efficiently. This is where `fwrite()` comes into play, allowing us to write contiguous blocks of memory directly to a file. This directly supports our **CO5: Use files in C to permanently store and manipulate data**, and by extension, **CO4: Develop C programs using pointers for dynamic data handling**, as we'll be manipulating data in memory before writing it.

## Understanding `fwrite()`: The Block Writer

So, what exactly is `fwrite()`? Think of it as a highly efficient way to copy a chunk of data, a "block," from your program's memory straight into a file. Unlike functions like `fprintf()` which are designed for formatted text output, `fwrite()` deals with raw binary data. This makes it incredibly useful for storing arrays, structures, or any other data that isn't just plain text.

The prototype for `fwrite()` is a bit of a mouthful, but let's break it down:

```c
size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);
```

Don't let this scare you! Let's dissect each parameter, just like we're taking apart a complex machine to understand its components:

*   **`const void *ptr`**: This is a pointer to the **block of memory** that you want to write to the file. The `void *` is important here. It means this pointer can point to *any* type of data – an array of integers, a structure, a character array, you name it. It's a generic pointer, signifying that `fwrite()` doesn't care about the *type* of data, only the bytes it represents. This reinforces the idea of handling raw data, a concept closely tied to our understanding of pointers.
*   **`size_t size`**: This specifies the **size of each individual item** in the block you're writing, measured in bytes. For example, if you're writing an array of integers, `size` would be `sizeof(int)`. If you're writing an array of structures, `size` would be `sizeof(your_struct_type)`. This is where our pointer knowledge comes in handy, as we'll use `sizeof` to determine the exact byte count for each element.
*   **`size_t nmemb`**: This is the **number of items** (or elements) in the block that you want to write. If you have an array of 10 integers, `nmemb` would be 10. If you have an array of 5 structures, `nmemb` would be 5.
*   **`FILE *stream`**: This is a pointer to the `FILE` structure that identifies the **output file stream** you're writing to. This `FILE` pointer is typically obtained by opening a file using `fopen()`.

Now, let's think about how these parameters work together. `fwrite()` essentially says: "Take `nmemb` items, each of `size` bytes, starting from the memory location pointed to by `ptr`, and write them into the file represented by `stream`."

The function returns the **number of items successfully written**. This is a crucial return value! It might not always be equal to `nmemb`, especially if there's an error during the write operation (like the disk being full). Always check this return value to ensure your data was written as expected. This emphasis on checking return values is a common theme in C programming, helping us write robust code, which relates to building reliable solutions as per our course objectives.

## When to Use `fwrite()`: Beyond Text

`fwrite()` truly shines when you're dealing with data that isn't just plain text. Think about these scenarios:

*   **Saving Arrays of Numbers:** Imagine you've calculated a large set of floating-point numbers, perhaps sensor readings or simulation results, and you want to save them efficiently for later analysis. `fwrite()` is perfect for this.
*   **Storing Structures:** In C, we often define structures to group related data. For example, a `Student` structure might contain a name (string), roll number (integer), and marks (float). If you have an array of `Student` structures, `fwrite()` can save them directly to a file, preserving their exact format. This is a prime example of how `fwrite()` helps us with **CO5** and how understanding data representation, a skill honed by **CO4**, is vital.
*   **Creating Binary Files:** `fwrite()` is the go-to function for creating binary files. These files are not meant to be read directly by humans using a text editor; they contain raw bytes that are interpreted by your program.

Let's consider an analogy. Imagine you have a box filled with identical toy cars. `fwrite()` is like saying, "Take these 10 toy cars (nmemb), each one is a specific size (size), starting from this box (ptr), and put them into this shipping container (stream)." The function will then count how many cars actually made it into the container.

## Practical Examples: Bringing `fwrite()` to Life

Let's dive into some code examples to see `fwrite()` in action.

### Example 1: Writing an Array of Integers

Suppose we have an array of integers and we want to save it to a file in its raw binary form.

```c
#include <stdio.h>
#include <stdlib.h> // For exit()

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    FILE *outfile;
    size_t elements_written;

    // Open the file in binary write mode ("wb")
    // "wb" is crucial for binary operations!
    outfile = fopen("numbers.bin", "wb");
    if (outfile == NULL) {
        perror("Error opening file for writing");
        return 1; // Indicate an error
    }

    // Write the array to the file
    // ptr = numbers (address of the first element)
    // size = sizeof(int) (size of one integer)
    // nmemb = 5 (number of integers in the array)
    // stream = outfile (the file pointer)
    elements_written = fwrite(numbers, sizeof(int), 5, outfile);

    // Check if all elements were written successfully
    if (elements_written != 5) {
        fprintf(stderr, "Error: Only %zu elements were written.\n", elements_written);
        // We should also check ferror(outfile) for more specific error info
    } else {
        printf("Successfully wrote %zu integers to numbers.bin\n", elements_written);
    }

    // Close the file
    fclose(outfile);

    return 0;
}
```

**Explanation and Why This Works:**

1.  **`#include <stdio.h>` and `#include <stdlib.h>`**: We need these standard libraries for file operations (`FILE`, `fopen`, `fclose`, `fwrite`, `printf`, `fprintf`, `stderr`) and for `exit()` (or returning 1 for error indication).
2.  **`int numbers[] = {10, 20, 30, 40, 50};`**: This is our data, an array of integers.
3.  **`outfile = fopen("numbers.bin", "wb");`**: This is where we open the file. The `"wb"` mode is critically important.
    *   `w`: Opens the file for writing. If the file exists, its contents are truncated (deleted). If it doesn't exist, it's created.
    *   `b`: Specifies that the file should be treated as a **binary file**. This is essential for `fwrite()`. If you omit the `b`, you might encounter issues with line endings and character translations, which are specific to text files.
4.  **`if (outfile == NULL)`**: Error checking is paramount in C! If `fopen` fails (e.g., due to insufficient permissions or disk space), it returns `NULL`. We print an error message using `perror` (which gives system-specific error descriptions) and exit.
5.  **`elements_written = fwrite(numbers, sizeof(int), 5, outfile);`**: This is the core `fwrite()` call.
    *   `numbers`: Our array `numbers` decays into a pointer to its first element, which is exactly what `fwrite` expects for `ptr`.
    *   `sizeof(int)`: Since each element is an `int`, we tell `fwrite` its size in bytes.
    *   `5`: We know there are 5 integers in our array.
    *   `outfile`: The file stream we opened.
6.  **`if (elements_written != 5)`**: We check if the number of items returned by `fwrite` matches the number we intended to write. If not, it indicates a problem.
7.  **`fclose(outfile);`**: Always, always close your files when you're done with them. This ensures that any buffered data is flushed to the disk and system resources are released.

This example directly addresses **CO5** by writing data to a file. It also implicitly uses our pointer knowledge (**CO4**) because the `numbers` array name is treated as a pointer to its first element.

### Example 2: Writing a Structure to a File

Let's say we have a `struct` to represent a point in 2D space.

```c
#include <stdio.h>
#include <stdlib.h> // For exit()

// Define a structure for a point
typedef struct {
    int x;
    int y;
} Point;

int main() {
    Point p1 = {10, 20};
    Point p2 = {30, 40};
    Point points_array[2] = {p1, p2}; // An array of Point structures

    FILE *outfile;
    size_t elements_written;

    outfile = fopen("points.bin", "wb");
    if (outfile == NULL) {
        perror("Error opening file for writing");
        return 1;
    }

    // Write the array of structures to the file
    // ptr = points_array (address of the first Point struct)
    // size = sizeof(Point) (size of one Point struct)
    // nmemb = 2 (number of Point structs in the array)
    // stream = outfile
    elements_written = fwrite(points_array, sizeof(Point), 2, outfile);

    if (elements_written != 2) {
        fprintf(stderr, "Error: Only %zu points were written.\n", elements_written);
    } else {
        printf("Successfully wrote %zu points to points.bin\n", elements_written);
    }

    fclose(outfile);

    return 0;
}
```

**Explanation:**

This is very similar to the integer array example, but the key difference is `sizeof(Point)`. When we define a structure, the compiler allocates contiguous memory for its members. `sizeof(Point)` tells `fwrite()` exactly how many bytes that entire block of memory is. `fwrite()` then copies that entire block, `nmemb` times.

This example is a perfect illustration of using structured data with file I/O, directly supporting **CO5**, and relying on our understanding of memory layout and data types through pointers (**CO4**).

## Common Pitfalls and Important Considerations

`fwrite()` is powerful, but like any powerful tool, it's important to use it correctly. Here are some common traps and things to keep in mind:

*   **Forgetting the `"b"` in `fopen()`**: I cannot stress this enough! If you open a file for writing with just `"w"` (text mode) and try to write binary data using `fwrite()`, you might corrupt the file or get unexpected results due to character translations (e.g., newline characters). Always use `"wb"` for binary writing. This relates to understanding file modes, a fundamental aspect of **CO5**.
*   **Incorrect `size` or `nmemb`**: If you miscalculate `sizeof(type)` or the number of members (`nmemb`), you'll either write incomplete data or too much data, corrupting your file structure. Always be precise. This highlights the need for careful parameter handling, essential for accurate **CO2** and **CO4**.
*   **Not Checking the Return Value**: What if the disk is full? What if there's a hardware error? `fwrite()` might not be able to write all the requested data. Not checking the return value means you might think your data is saved when it's not, leading to silent data loss. Always compare the return value with `nmemb`. This is a crucial aspect of writing robust code, a core skill in **CO1**.
*   **`ptr` is `void *`**: Remember that `ptr` is `const void *`. This means you can pass a pointer to an array, a single variable, or the beginning of a dynamically allocated memory block. For example, `fwrite(my_array_name, sizeof(my_array_name[0]), num_elements, fp);` or even `fwrite(&my_single_variable, sizeof(my_single_variable), 1, fp);`.
*   **File Positioning**: `fwrite()` writes data sequentially from the current file position. If you want to write at a specific location, you'll need to use `fseek()` or `rewind()` first. This is an advanced file manipulation technique that further enhances our ability to meet **CO5**.

## Connecting to Course Outcomes

Let's explicitly tie `fwrite()` back to our course outcomes:

*   **CO1 (Infer and Develop Programs):** Understanding `fwrite()` allows you to write programs that save structured or binary data, a common requirement for many computational problems. For example, a program that simulates physical phenomena might need to save the simulation state at regular intervals.
*   **CO2 (Arrays, Matrices, Strings):** `fwrite()` is exceptionally useful for saving entire arrays or matrices directly to files without manually converting each element to a string. This is much faster and preserves the original data format, making it ideal for numerical computations.
*   **CO3 (Functions):** You might create a function that takes an array or structure and writes it to a file using `fwrite()`, encapsulating this functionality for reuse. For instance, a `save_data_to_file(const void *data, size_t element_size, size_t num_elements, const char *filename)` function.
*   **CO4 (Pointers for Dynamic Data Handling):** `fwrite()` is intrinsically linked to pointers. It operates on memory blocks identified by pointers and requires you to know the size of data items, which is often derived using `sizeof` with pointer types. When dealing with dynamically allocated arrays or complex data structures created with `malloc()`, `fwrite()` is essential for persisting that data.
*   **CO5 (Use Files for Permanent Storage):** This is the primary outcome that `fwrite()` serves. It provides a direct, efficient mechanism for writing blocks of data to files, enabling permanent storage of program state, results, or custom data formats.

## Summary: The Essence of `fwrite()`

Remember this: `fwrite()` is your go-to function for writing **contiguous blocks of binary data** from memory to a file. It's efficient, versatile, and essential for handling anything more complex than simple text.

*   **What it does:** Writes `nmemb` items, each of `size` bytes, from the memory location `ptr` to the `stream`.
*   **Key parameters:** `ptr` (source data), `size` (item size), `nmemb` (number of items), `stream` (output file).
*   **Crucial mode:** Always use `"wb"` when opening the file for `fwrite()`.
*   **Return value:** Check the number of items successfully written!

By mastering `fwrite()`, you gain a powerful tool for data persistence and manipulation in C, directly contributing to your ability to solve complex computational problems and manage data effectively.

---

## Sample Questions with Answers

**Conceptual Questions:**

1.  **Question:** What is the primary difference between `fprintf()` and `fwrite()`?
    **Answer:** `fprintf()` is used for formatted text output, converting data (like numbers) into their string representations before writing. `fwrite()`, on the other hand, writes raw binary data directly from memory to the file without any conversion. This makes `fwrite()` more efficient for large blocks of structured data or numerical arrays where preserving the exact binary format is important.

2.  **Question:** Why is it crucial to open a file in `"wb"` mode when using `fwrite()`?
    **Answer:** The `"wb"` mode signifies "write binary." In binary mode, the C standard library avoids any character translations that might occur in text mode (like converting `\n` to `\r\n` on some systems). This ensures that the raw bytes from memory are written to the file exactly as they are, preserving the integrity of binary data. If text mode (`"w"`) were used, these translations could corrupt binary data.

3.  **Question:** If `fwrite()` is asked to write 100 elements but returns 98, what does this usually indicate?
    **Answer:** This typically indicates an error occurred during the write operation. Common reasons include the disk becoming full, a hardware error, or the file stream being closed prematurely. It's essential to check the return value of `fwrite()` against the number of elements requested (`nmemb`) and potentially check `ferror()` on the file stream for more specific error diagnostics.

**Exam-Oriented Questions:**

1.  **Question:** Consider the following C code snippet. What will be written into `data.bin`? Explain your reasoning.

    ```c
    #include <stdio.h>

    int main() {
        float values[] = {1.1f, 2.2f, 3.3f};
        FILE *fp = fopen("data.bin", "wb");
        if (fp == NULL) return 1;

        fwrite(values, sizeof(float), 3, fp);

        fclose(fp);
        return 0;
    }
    ```
    **Answer:** The file `data.bin` will contain the raw binary representation of three `float` numbers: `1.1`, `2.2`, and `3.3`.
    *   **Reasoning:**
        *   `fopen("data.bin", "wb")` correctly opens the file in binary write mode.
        *   `fwrite(values, sizeof(float), 3, fp)` instructs the program to write:
            *   `values`: The array `values`, which decays to a pointer to its first `float` element.
            *   `sizeof(float)`: The size of each individual element (which is usually 4 bytes on most systems, but `sizeof` ensures portability).
            *   `3`: The number of elements to write.
        *   Therefore, a total of `3 * sizeof(float)` bytes, representing the three floating-point numbers, will be written directly to `data.bin` in their binary format.

2.  **Question:** You have a structure `Record { int id; char name[20]; }`. How would you write an array of 5 `Record` structures to a file named `records.dat` using `fwrite()`? Write the relevant `fwrite()` call and explain each parameter.
    **Answer:**

    ```c
    #include <stdio.h> // Assuming Record is defined and fp is a FILE pointer

    // Assume Record structure is defined as:
    typedef struct {
        int id;
        char name[20];
    } Record;

    // Assume 'records_array' is an array of 5 Record structures,
    // and 'fp' is a valid FILE pointer opened in "wb" mode.
    Record records_array[5];
    FILE *fp; // Assume fp is opened elsewhere like: fp = fopen("records.dat", "wb");

    // The fwrite call:
    size_t written_count = fwrite(records_array, sizeof(Record), 5, fp);
    ```

    **Explanation of Parameters:**
    *   **`records_array`**: This is the pointer to the first element of the array of `Record` structures in memory. It's the source of the data to be written.
    *   **`sizeof(Record)`**: This specifies the size of each individual item we are writing, which is the size of one `Record` structure in bytes. This ensures `fwrite` knows how much memory each record occupies.
    *   **`5`**: This is `nmemb`, the number of items (which are `Record` structures in this case) that we want to write from the array.
    *   **`fp`**: This is the `FILE` pointer representing the output file (`records.dat`), to which the data will be written.

    This demonstrates the application of **CO2** (working with arrays of structures) and **CO5** (file handling) using pointers (**CO4**).
