---
title: "Writing to and Reading from a file"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e6b"
status: "completed"
scrapedAt: "2026-05-20T16:35:44.306Z"
---
## Programming in C: Module 4: Pointers - Writing to and Reading from a File

Welcome back, everyone! Today, we're diving into a crucial aspect of programming that bridges the gap between our temporary in-memory data and the persistent world outside our running programs: **File Handling**. This topic is intimately connected to our understanding of pointers, as we'll see, and it's a fundamental skill that directly supports **Course Outcome 5: "Use files in C to permanently store and manipulate data."** We’ll also be reinforcing **Course Outcome 4** as pointers are the bedrock upon which file operations are built.

Think about it: every time you save a document, download a picture, or even just run a program, you're interacting with files. C provides powerful tools to manage this interaction, allowing our programs to be much more than just ephemeral calculations. We can store information, retrieve it later, and build applications that persist beyond a single execution.

### Why Files? The Need for Persistence

Imagine you've written a fantastic C program that calculates the average of a set of numbers. When the program finishes, all those numbers and the calculated average are gone, lost forever unless you jot them down. What if you want to process those same numbers again tomorrow, or share them with someone else? This is where files come in.

Files act as our external storage. They reside on your hard drive, USB drive, or any other storage medium, and they allow us to:

*   **Store data permanently:** Unlike variables in memory that vanish when a program ends, data in files remains until explicitly deleted or overwritten.
*   **Transfer data between programs:** One program can write data to a file, and another program can read that same data. This is the basis of data exchange.
*   **Handle large amounts of data:** Memory has its limits. For very large datasets, files become essential.

### The Foundation: File Pointers

So, how does C talk to files? Just like we use pointers to refer to memory locations, C uses a special kind of pointer called a **file pointer** to refer to a file. This file pointer is not a pointer to the actual data within the file, but rather a pointer to a structure that contains information about the file – its current position, the buffer being used to read/write, error flags, and so on. This structure is declared as `FILE`.

To use files in your C programs, you first need to declare a `FILE` pointer. This is typically done as follows:

```c
FILE *ptr_to_file;
```

Here, `ptr_to_file` is our variable that will hold the address of the `FILE` structure associated with our file. It's a common convention to name these pointers descriptively, like `fp`, `file_ptr`, or similar.

### Opening a File: The Gateway to Interaction

Before you can read from or write to a file, you *must* open it. Think of it like opening a physical book before you can read its pages. The function used for this is `fopen()`.

The `fopen()` function takes two arguments:

1.  **The filename:** This is a string representing the name of the file you want to open (e.g., `"mydata.txt"`, `"results.csv"`). You can also specify a path, like `"C:/Documents/mydata.txt"`.
2.  **The mode:** This is a string indicating how you intend to use the file. This is a crucial parameter!

The `fopen()` function returns a `FILE` pointer. If the file opens successfully, the pointer points to the `FILE` structure. If there's an error (e.g., the file doesn't exist in read mode, or you don't have permission), `fopen()` returns `NULL`. This is why it's vital to check the return value of `fopen()`.

Let's look at the common **modes** for `fopen()`:

*   **`"r"` (Read):** Opens a file for reading. The file must exist. If it doesn't, `fopen()` returns `NULL`.
*   **`"w"` (Write):** Opens a file for writing. If the file exists, its contents are **truncated** (deleted). If the file doesn't exist, it's created.
*   **`"a"` (Append):** Opens a file for appending. If the file exists, new data is written at the end of the existing content. If the file doesn't exist, it's created.
*   **`"r+"` (Read and Write):** Opens a file for both reading and writing. The file must exist.
*   **`"w+"` (Write and Read):** Opens a file for both reading and writing. If the file exists, its contents are truncated. If it doesn't exist, it's created.
*   **`"a+"` (Append and Read):** Opens a file for appending and reading. New data is written at the end, and you can read from anywhere in the file. If the file doesn't exist, it's created.

**Important Note:** When you open a file in "write" (`"w"`) or "append" (`"a"`) mode, if the file *already exists*, its previous content will be **lost** (truncated) if you use `"w"`. Use `"a"` if you want to add to an existing file without erasing it. This is a common point of confusion for beginners, so remember it!

**Example:**

```c
#include <stdio.h> // Required for file I/O functions

int main() {
    FILE *fp; // Declare a file pointer

    // Attempt to open "my_document.txt" for reading
    fp = fopen("my_document.txt", "r");

    // Always check if the file opened successfully
    if (fp == NULL) {
        printf("Error opening file!\n");
        return 1; // Indicate an error
    } else {
        printf("File opened successfully for reading.\n");
        // ... do something with the file ...
    }

    // Close the file later (we'll discuss this next!)
    // fclose(fp);

    return 0;
}
```

Here, `fp` now holds the address of the `FILE` structure for `my_document.txt`, provided it exists. If it doesn't, `fp` will be `NULL`.

### Reading from a File: Bringing Data Back

Once a file is open for reading, we can start retrieving its contents. C provides several functions for reading, depending on whether you're reading characters, strings, or formatted data.

#### 1. Reading Character by Character: `fgetc()`

The `fgetc()` function reads a single character from the specified file stream.

```c
int fgetc(FILE *stream);
```

It returns the character read as an `int`. If an error occurs or the end-of-file (EOF) is reached, it returns `EOF` (which is a special negative integer value, typically -1).

**Analogy:** Imagine `fgetc()` is like a very patient reader who carefully picks up one letter at a time from a page.

**Example:** Reading a file character by character and printing it.

```c
#include <stdio.h>

int main() {
    FILE *fp;
    int character; // Use int to store fgetc's return value (can be EOF)

    fp = fopen("sample.txt", "r");

    if (fp == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    printf("Reading file character by character:\n");
    // Loop until fgetc returns EOF
    while ((character = fgetc(fp)) != EOF) {
        printf("%c", character); // Print the character
    }

    fclose(fp); // Close the file
    return 0;
}
```

In this example, we repeatedly call `fgetc(fp)` until it returns `EOF`. Each character read is then printed to the console. Notice the use of `int character` to hold the result of `fgetc` – this is important because `EOF` is not a standard character.

#### 2. Reading String by String: `fgets()`

The `fgets()` function reads a line from the file, up to a specified number of characters or until a newline character is encountered.

```c
char *fgets(char *str, int n, FILE *stream);
```

*   `str`: A pointer to the character array (buffer) where the read string will be stored.
*   `n`: The maximum number of characters to read (including the null terminator `\0`). `fgets()` will read at most `n-1` characters from the stream.
*   `stream`: The file pointer.

`fgets()` returns `str` on success and `NULL` on error or if the end of the file is reached before any characters are read. A crucial detail: `fgets()` *includes* the newline character (`\n`) in the buffer if it reads one. It also null-terminates the string.

**Analogy:** `fgets()` is like reading a whole sentence from a book at once.

**Example:** Reading a file line by line.

```c
#include <stdio.h>

#define MAX_LINE_LENGTH 256 // Define a maximum buffer size

int main() {
    FILE *fp;
    char buffer[MAX_LINE_LENGTH]; // Buffer to store each line

    fp = fopen("sample.txt", "r");

    if (fp == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    printf("Reading file line by line:\n");
    // Loop until fgets returns NULL (end of file or error)
    while (fgets(buffer, MAX_LINE_LENGTH, fp) != NULL) {
        printf("%s", buffer); // Print the line (fgets already includes \n if present)
    }

    fclose(fp);
    return 0;
}
```

This is often more convenient than `fgetc` for processing text files, as you can work with entire lines of text at a time.

#### 3. Reading Formatted Data: `fscanf()`

Just like `scanf()` reads from the keyboard, `fscanf()` reads formatted data from a file. This is incredibly useful when your file contains structured data, like numbers separated by spaces or commas.

```c
int fscanf(FILE *stream, const char *format, ...);
```

*   `stream`: The file pointer.
*   `format`: The format string, similar to `scanf` (e.g., `"%d %f %s"`).
*   `...`: The addresses of the variables where the read data will be stored.

`fscanf()` returns the number of items successfully read and assigned. If an error occurs or the end of the file is reached before any assignment, it returns `EOF`.

**Analogy:** `fscanf()` is like a diligent student who can parse and extract specific pieces of information (like names and scores) from a report card.

**Example:** Reading numbers from a file. Suppose `numbers.txt` contains lines like:
`10 25.5`
`5 12.3`

```c
#include <stdio.h>

int main() {
    FILE *fp;
    int integer_value;
    float float_value;

    fp = fopen("numbers.txt", "r");

    if (fp == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    printf("Reading formatted data:\n");
    // Loop as long as fscanf successfully reads two items
    while (fscanf(fp, "%d %f", &integer_value, &float_value) == 2) {
        printf("Read Integer: %d, Float: %.2f\n", integer_value, float_value);
    }

    fclose(fp);
    return 0;
}
```

This is a powerful way to handle data files where information is neatly organized.

### Writing to a File: Storing Our Creations

Now, let's talk about how to write data *into* files. Similar to reading, we have functions for writing characters, strings, and formatted data.

#### 1. Writing Character by Character: `fputc()`

`fputc()` writes a single character to the specified file stream.

```c
int fputc(int character, FILE *stream);
```

*   `character`: The character to write (passed as an `int`).
*   `stream`: The file pointer.

It returns the character written if successful, or `EOF` if an error occurs.

**Analogy:** `fputc()` is like writing one letter at a time onto a blank page.

**Example:** Writing characters to a file.

```c
#include <stdio.h>

int main() {
    FILE *fp;
    char message[] = "Hello, File!\nThis is a test.";
    int i = 0;

    // Open "output.txt" for writing. If it exists, it will be overwritten.
    fp = fopen("output.txt", "w");

    if (fp == NULL) {
        printf("Error opening file for writing!\n");
        return 1;
    }

    printf("Writing to file character by character...\n");
    // Write characters one by one
    while (message[i] != '\0') {
        fputc(message[i], fp);
        i++;
    }

    printf("Successfully wrote to output.txt\n");
    fclose(fp);
    return 0;
}
```

After running this, `output.txt` will contain the `message`.

#### 2. Writing String by String: `fputs()`

`fputs()` writes a string to the file stream.

```c
int fputs(const char *str, FILE *stream);
```

*   `str`: A pointer to the null-terminated string to write.
*   `stream`: The file pointer.

It returns a non-negative value on success and `EOF` on error. **Crucially, `fputs()` does NOT automatically append a newline character.** If you want a newline, you must explicitly include it in your string.

**Analogy:** `fputs()` is like writing a whole sentence onto a page.

**Example:** Writing a string to a file.

```c
#include <stdio.h>

int main() {
    FILE *fp;
    char line1[] = "First line of text.\n";
    char line2[] = "Second line without a newline.";

    fp = fopen("lines.txt", "w");

    if (fp == NULL) {
        printf("Error opening file for writing!\n");
        return 1;
    }

    printf("Writing strings to file...\n");
    fputs(line1, fp); // Writes "First line of text." and a newline
    fputs(line2, fp); // Writes "Second line without a newline." (no newline added by fputs)

    printf("Successfully wrote to lines.txt\n");
    fclose(fp);
    return 0;
}
```

If you wanted `line2` on a new line, you'd need `char line2[] = "Second line with a newline.\n";`.

#### 3. Writing Formatted Data: `fprintf()`

Mirroring `printf()`, `fprintf()` writes formatted data to a file. This is your go-to for writing structured data.

```c
int fprintf(FILE *stream, const char *format, ...);
```

*   `stream`: The file pointer.
*   `format`: The format string (e.g., `"%d %f %s"`).
*   `...`: The variables to be written.

It returns the number of characters written if successful, or a negative value on error.

**Analogy:** `fprintf()` is like filling out a form with specific data in designated fields, ensuring everything is correctly labeled.

**Example:** Writing structured data to a file.

```c
#include <stdio.h>

int main() {
    FILE *fp;
    char name[50];
    int id;
    float salary;

    fp = fopen("employee_data.txt", "w");

    if (fp == NULL) {
        printf("Error opening file for writing!\n");
        return 1;
    }

    printf("Enter employee name, ID, and salary (or 'quit' for name to exit):\n");

    while (1) {
        printf("Name: ");
        scanf("%49s", name); // Read up to 49 chars to prevent buffer overflow

        if (strcmp(name, "quit") == 0) {
            break; // Exit loop if user types "quit"
        }

        printf("ID: ");
        scanf("%d", &id);

        printf("Salary: ");
        scanf("%f", &salary);

        // Write the data to the file in a formatted way
        fprintf(fp, "%s %d %.2f\n", name, id, salary);
    }

    printf("Successfully wrote employee data to employee_data.txt\n");
    fclose(fp);
    return 0;
}
```

This program interactively collects employee data and writes it to `employee_data.txt` in a structured format.

### Closing a File: Tidying Up

Just as opening is essential, **closing a file is equally important**. When you're finished with a file, you should close it using the `fclose()` function.

```c
int fclose(FILE *stream);
```

*   `stream`: The file pointer.

`fclose()` flushes any buffered data to the file and then releases the resources associated with the file. It returns `0` on success and `EOF` if an error occurs.

**Why close?**

1.  **Data Integrity:** If you've written data but haven't closed the file, the data might still be sitting in a temporary buffer and might not be written to the disk. `fclose()` ensures all buffered data is written.
2.  **Resource Management:** Files consume system resources. Closing them frees up these resources for other programs or operations.
3.  **Preventing Corruption:** Improperly closed files can lead to data corruption.

**Always remember to close every file you open!** It’s a critical part of responsible file handling.

### Beyond Basic I/O: Binary Files

So far, we've focused on "text files" – files where characters are interpreted as text. But what if you need to store raw binary data, like images, audio, or compiled program data? For this, C provides functions for **binary file I/O**.

The primary functions for binary I/O are:

*   **`fread()`**: Reads blocks of binary data from a file.
*   **`fwrite()`**: Writes blocks of binary data to a file.

These functions operate on arrays of bytes (or any data type) and are more efficient for non-textual data. They don't interpret data as characters and don't add or remove newline characters.

When opening a file for binary I/O, you append a `b` to the mode string (e.g., `"rb"` for read binary, `"wb"` for write binary).

#### `fwrite()`: Writing Binary Data

```c
size_t fwrite(const void *ptr, size_t size, size_t count, FILE *stream);
```

*   `ptr`: A pointer to the block of data to be written.
*   `size`: The size (in bytes) of each element to be written.
*   `count`: The number of elements to write.
*   `stream`: The file pointer.

It returns the number of elements successfully written.

**Example:** Writing an array of integers to a binary file.

```c
#include <stdio.h>

int main() {
    FILE *fp;
    int numbers[] = {10, 20, 30, 40, 50};
    int num_elements = sizeof(numbers) / sizeof(numbers[0]);

    fp = fopen("binary_numbers.dat", "wb"); // Open in write binary mode

    if (fp == NULL) {
        printf("Error opening file for binary writing!\n");
        return 1;
    }

    // Write the entire array to the file
    size_t written_count = fwrite(numbers, sizeof(int), num_elements, fp);

    if (written_count == num_elements) {
        printf("Successfully wrote %zu integers to binary_numbers.dat\n", written_count);
    } else {
        printf("Error during binary write.\n");
    }

    fclose(fp);
    return 0;
}
```

#### `fread()`: Reading Binary Data

```c
size_t fread(void *ptr, size_t size, size_t count, FILE *stream);
```

*   `ptr`: A pointer to the buffer where the read data will be stored.
*   `size`: The size (in bytes) of each element to be read.
*   `count`: The number of elements to read.
*   `stream`: The file pointer.

It returns the number of elements successfully read. This can be less than `count` if the end of the file is reached or an error occurs.

**Example:** Reading integers from the binary file created above.

```c
#include <stdio.h>

int main() {
    FILE *fp;
    int numbers[5]; // Buffer to store the read integers
    size_t read_count;

    fp = fopen("binary_numbers.dat", "rb"); // Open in read binary mode

    if (fp == NULL) {
        printf("Error opening file for binary reading!\n");
        return 1;
    }

    // Read up to 5 integers from the file
    read_count = fread(numbers, sizeof(int), 5, fp);

    if (read_count == 5) {
        printf("Successfully read %zu integers from binary_numbers.dat:\n", read_count);
        for (int i = 0; i < 5; i++) {
            printf("%d ", numbers[i]);
        }
        printf("\n");
    } else if (read_count > 0) {
        printf("Read %zu integers, but expected 5. Possibly end of file.\n", read_count);
        for (int i = 0; i < read_count; i++) {
            printf("%d ", numbers[i]);
        }
        printf("\n");
    }
    else {
        printf("Error or end of file reached before any data was read.\n");
    }

    fclose(fp);
    return 0;
}
```

When you run the `fread` example after the `fwrite` example, you'll see the original numbers printed. This demonstrates how binary files preserve the exact bit patterns of your data.

### File Positioning Functions (Briefly)

C also provides functions to control the current position within a file stream. These are more advanced but important for random access:

*   **`fseek()`**: Moves the file position indicator.
*   **`ftell()`**: Returns the current position of the file indicator.
*   **`rewind()`**: Sets the position indicator to the beginning of the file.

These functions are crucial when you need to jump to a specific part of a file to read or write, rather than just sequentially processing it. For instance, if you need to update a specific record in a large data file without re-writing the entire file. This relates to **CO4: "Develop C programs using pointers for dynamic data handling,"** as file positioning is a form of managing an "external" data structure.

### Common Pitfalls and Exam Tips

*   **Forgetting `fclose()`:** This is a very common mistake. Always ensure your files are closed to prevent data loss and resource leaks.
*   **Not checking `fopen()`'s return value:** Always check for `NULL` after `fopen()`. If you don't, your program might crash or behave unpredictably when it tries to use an invalid file pointer.
*   **Confusing `"w"` and `"a"` modes:** Remember `"w"` overwrites, `"a"` appends. Use them deliberately.
*   **Buffer overflow with `fgets()`/`scanf()`:** Always provide a buffer size to `fgets()` and be mindful of buffer sizes with `scanf()` (use width specifiers like `%49s`).
*   **Newline characters with `fputs()`:** `fputs()` doesn't add newlines. If you need them, include `\n` in your strings.
*   **`EOF` vs. `NULL`:** `fopen()` returns `NULL` for errors. `fgetc()`, `fgets()`, `fscanf()` return `EOF` for end-of-file or errors during reading.
*   **Binary vs. Text Mode:** Use the `b` suffix (`"rb"`, `"wb"`) for binary files. This is crucial for correct data interpretation on different operating systems.

Understanding file handling is a significant step in becoming a proficient C programmer. It directly addresses **CO5** and relies heavily on our pointer knowledge from **CO4**. By mastering `fopen`, `fclose`, `fprintf`, `fscanf`, `fputs`, `fgets`, and their binary counterparts, you can build programs that interact with the real world by storing and retrieving data.

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **What is a file pointer in C, and why is it essential for file operations?**
    *   **Answer:** A file pointer is a pointer to a `FILE` structure. This structure holds vital information about the file, such as its name, mode, current position, and buffer details. It acts as an "handle" or "reference" that the C standard library uses to manage interactions with the actual file on the storage device. Without a file pointer, your program wouldn't know which file to operate on or how to manage its state.

2.  **Explain the difference between the `"w"` and `"a"` modes when opening a file with `fopen()` in C.**
    *   **Answer:**
        *   The `"w"` (write) mode opens a file for writing. If the file already exists, its entire content is **erased** (truncated) before writing begins. If the file does not exist, it is created.
        *   The `"a"` (append) mode opens a file for writing. If the file already exists, new data is added to the **end** of the existing content, without erasing it. If the file does not exist, it is created.

3.  **Why is it important to close a file after you are finished with it?**
    *   **Answer:** Closing a file is crucial for several reasons:
        *   **Data Flushing:** It ensures that any data held in internal buffers is written to the actual file on the disk, preventing data loss.
        *   **Resource Management:** It releases system resources (like file handles) that were allocated when the file was opened, making them available for other operations or programs.
        *   **Preventing Corruption:** Improperly closed files can sometimes lead to data corruption or incomplete writes.

**Exam-Oriented Questions:**

4.  **Write a C program that prompts the user to enter a string and then writes that string to a file named `user_input.txt`. Ensure the program handles potential file opening errors.**

    ```c
    #include <stdio.h>
    #include <string.h> // For strlen

    int main() {
        FILE *fp;
        char userInput[100];

        // Prompt user for input
        printf("Enter a string to write to the file: ");
        fgets(userInput, sizeof(userInput), stdin);

        // Remove trailing newline character from fgets
        userInput[strcspn(userInput, "\n")] = 0;

        // Open the file for writing
        fp = fopen("user_input.txt", "w");

        // Check if file opening was successful
        if (fp == NULL) {
            printf("Error: Could not open user_input.txt for writing.\n");
            return 1; // Indicate an error exit
        }

        // Write the user's input to the file using fprintf
        fprintf(fp, "%s\n", userInput); // Add a newline for clarity in the file

        // Close the file
        fclose(fp);

        printf("Successfully wrote \"%s\" to user_input.txt\n", userInput);

        return 0;
    }
    ```
    *   **Reasoning:** This program demonstrates basic text file writing using `fopen` in "w" mode. It prompts the user, reads input using `fgets` (and cleans it up), checks for `fopen` errors, writes the string using `fprintf` (adding a newline for better readability in the file), and finally closes the file with `fclose`.

5.  **Consider the following code snippet. What will be the content of `output.txt` after execution? Explain why.**

    ```c
    #include <stdio.h>

    int main() {
        FILE *fp;
        fp = fopen("output.txt", "w");
        fputs("Hello", fp);
        fputs(" World", fp);
        fclose(fp);
        return 0;
    }
    ```
    *   **Answer:** The content of `output.txt` will be:
        ```
        Hello World
        ```
    *   **Reasoning:** The file is opened in write mode (`"w"`), which overwrites any existing content. `fputs("Hello", fp)` writes the string "Hello" to the file. `fputs(" World", fp)` then writes " World" immediately after "Hello" because `fputs` does not automatically add a newline. Finally, `fclose` ensures the combined string is saved to the file.

6.  **You have a file named `data.bin` containing binary data. Write a C program to read the first 10 bytes from this file into a character array named `buffer`.**

    ```c
    #include <stdio.h>

    int main() {
        FILE *fp;
        char buffer[11]; // 10 bytes to read + 1 for potential null terminator if needed

        fp = fopen("data.bin", "rb"); // Open in read binary mode

        if (fp == NULL) {
            printf("Error: Could not open data.bin for reading.\n");
            return 1;
        }

        // Read 10 bytes, where each "element" is 1 byte
        size_t bytes_read = fread(buffer, 1, 10, fp);

        if (bytes_read > 0) {
            buffer[bytes_read] = '\0'; // Null-terminate the buffer to treat it as a string for printing
            printf("Successfully read %zu bytes:\n", bytes_read);
            printf("Buffer content (as string): %s\n", buffer);

            // Optional: Print as raw bytes if you expect non-printable characters
            printf("Buffer content (as hex):\n");
            for(size_t i = 0; i < bytes_read; ++i) {
                printf("%02X ", (unsigned char)buffer[i]);
            }
            printf("\n");

        } else {
            printf("No bytes were read from data.bin.\n");
        }

        fclose(fp);
        return 0;
    }
    ```
    *   **Reasoning:** This program uses `fopen` in `"rb"` mode for binary reading. `fread` is used with `size = 1` and `count = 10` to read 10 individual bytes. It's important to check the `bytes_read` return value. For printing, we null-terminate the buffer if we want to treat it as a string. If the file contains non-printable binary data, printing it as a string might produce garbage, so showing its hexadecimal representation is often more informative.
