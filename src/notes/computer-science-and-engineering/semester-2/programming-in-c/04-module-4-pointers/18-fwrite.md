---
title: "fwrite()."
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e70"
status: "completed"
scrapedAt: "2026-05-20T16:35:48.343Z"
---
Alright class, welcome back to our journey into the fascinating world of programming in C! Today, we're diving deep into **Module 4: Pointers**, and our specific focus is on a very powerful function that bridges the gap between our C programs and the persistent storage of data: **`fwrite()`**.

You know, in our previous modules, we've gotten quite comfortable with how data lives and breathes within our program's memory. We've used variables, arrays, and even explored how pointers allow us to directly manipulate memory addresses. But what happens when we want to save this data so it's not lost when the program ends? That's where file I/O comes in, and `fwrite()` is one of our key tools for writing data to files, especially when we're dealing with structured blocks of information.

### Understanding `fwrite()`: Writing Structured Data to Files

Think of your computer's hard drive as a giant filing cabinet. When you create a file, you're essentially creating a new folder or a document within that cabinet. Now, you can write text into that document, which is what functions like `fprintf()` are excellent for. But what if you have something more complex, like a whole array of integers, or a structure that holds different types of data? Writing each piece individually can be cumbersome, and more importantly, it might not preserve the exact way that data is stored in memory.

This is precisely where `fwrite()` shines. It's designed to write **blocks of binary data** from memory to a file. Unlike text-based functions, `fwrite()` doesn't care about converting your numbers into characters or interpreting your data as human-readable text. It just takes a chunk of memory and writes its raw bytes to the file. This is incredibly efficient and preserves the exact representation of your data.

This capability directly relates to our **Course Outcome 5: Use files in C to permanently store and manipulate data.** `fwrite()` is a fundamental function that enables us to fulfill this outcome by writing data reliably to files for later retrieval. It also indirectly supports **Course Outcome 4: Develop C programs using pointers for dynamic data handling**, because `fwrite()` works with pointers to specify the memory location of the data to be written.

Let's look at the syntax of `fwrite()`:

```c
size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);
```

Now, I know that looks a little intimidating with all those `size_t` and `void*` types. Let's break it down, just like we would in a classroom discussion.

#### The Parameters of `fwrite()`

1.  **`const void *ptr`**: This is the **pointer** to the block of memory from which data is to be read.
    *   Think of `ptr` as the address of the first piece of data you want to save.
    *   Why `void*`? Because `fwrite()` is generic. It doesn't know or care *what kind* of data is at that address – it could be an integer, a character, a structure, or anything else. It just knows it's a block of memory.
    *   The `const` keyword here tells us that `fwrite()` will not modify the data pointed to by `ptr`; it will only read from it.
    *   This parameter is crucial for **CO4**, as it directly involves handling data through pointers.

2.  **`size_t size`**: This is the **size, in bytes**, of each **element** to be written.
    *   For example, if you're writing an array of integers, `size` would be `sizeof(int)`. If you're writing an array of characters, it would be `sizeof(char)` (which is always 1). If you're writing a structure, it would be `sizeof(your_structure_type)`.
    *   This tells `fwrite()` how big each individual "item" in your data block is.

3.  **`size_t nmemb`**: This is the **number of elements**, each of size `size`, to be written.
    *   So, if you have an array of 10 integers, and `size` is `sizeof(int)`, then `nmemb` would be `10`.
    *   `fwrite()` will attempt to write a total of `size * nmemb` bytes to the file.

4.  **`FILE *stream`**: This is a **pointer to a `FILE` object**.
    *   This pointer, which you get from functions like `fopen()`, tells `fwrite()` *where* to write the data. It's like the specific document in your filing cabinet that you're writing into.
    *   Remember, you *must* open the file in a mode that allows writing (like "wb", "ab", "wb+", "ab+") for `fwrite()` to work. "wb" for write binary, "ab" for append binary.

#### Return Value of `fwrite()`

`fwrite()` returns the **number of elements successfully written**.
*   This is a really important check! It will return a value less than `nmemb` if an error occurred during the write operation or if the disk became full.
*   If the return value is less than the `nmemb` you requested, it's a strong indication that something went wrong. You should always compare the return value with `nmemb` to ensure all data was written.

### Connecting `fwrite()` to Textbook Concepts

Let's briefly touch upon how our recommended books discuss this.

*   **Byron S. Gottfried's "Programming with C"** (and similar texts like Balagurusamy's) often introduce file I/O after discussing arrays and structures. They emphasize `fwrite()` for writing arrays of data types or entire structures efficiently, contrasting it with character-by-character or line-by-line writing. They'll likely show examples of writing arrays of integers, floating-point numbers, or even custom structures. You'll see how `sizeof()` is used extensively with `fwrite()`.
*   **Kernighan and Ritchie's "The C Programming Language"** (K&R) is the foundational text. They explain binary I/O with `fread()` and `fwrite()` as ways to handle data without translation, perfect for saving program state or structured data. They'll often use `FILE *` as the stream pointer and highlight the importance of error checking the return value.
*   **Hanly and Koffman's "Problem Solving and Program Design in C"** often frames file I/O within problem-solving contexts. They might present scenarios where you need to store the results of a scientific calculation or a simulation, and `fwrite()` becomes the natural choice for saving that data in a compact and precise binary format.

### Bringing it to Life: Relatable Examples

Let's ditch the abstract for a moment and imagine some scenarios.

**Scenario 1: Saving your High Scores in a Game**

Imagine you've written a simple game in C, and you want to keep track of the top 5 scores. Each score might be represented by a structure like this:

```c
typedef struct {
    char playerName[20];
    int score;
} PlayerScore;
```

You have an array of these `PlayerScore` structures: `PlayerScore highScores[5];`.

When the game ends, and a player achieves a new high score, you update the `highScores` array. To save these scores so they persist even after the game closes, you'd use `fwrite()`.

```c
// Assume 'highScores' array is populated and 'outFile' is a valid FILE pointer opened in "wb" mode

int elementsWritten = fwrite(highScores, sizeof(PlayerScore), 5, outFile);

if (elementsWritten < 5) {
    perror("Error writing high scores");
    // Handle the error appropriately
} else {
    printf("Successfully wrote %d player scores.\n", elementsWritten);
}
```

Here:
*   `highScores` is the pointer to our array of structures.
*   `sizeof(PlayerScore)` is the size of each individual element (one `PlayerScore` structure).
*   `5` is the number of elements (the 5 scores in our array).
*   `outFile` is the file pointer to where we want to save.

This is so much cleaner than trying to manually convert each player's name and score into a string and writing them line by line! `fwrite()` just grabs the raw memory representation of each `PlayerScore` structure and dumps it into the file.

**Scenario 2: Storing Sensor Readings**

Let's say you're collecting data from a temperature sensor. Each reading might be a `float` representing the temperature. You're taking 100 readings and storing them in an array: `float temperatureReadings[100];`.

To save these readings for later analysis, you could use `fwrite()`:

```c
// Assume 'temperatureReadings' array is populated and 'tempFile' is a valid FILE pointer opened in "wb" mode

int elementsWritten = fwrite(temperatureReadings, sizeof(float), 100, tempFile);

if (elementsWritten < 100) {
    perror("Error writing temperature readings");
    // Handle the error
} else {
    printf("Successfully wrote %d temperature readings.\n", elementsWritten);
}
```

*   `temperatureReadings` is the pointer to the first `float`.
*   `sizeof(float)` is the size of each element (a floating-point number).
*   `100` is the number of elements.
*   `tempFile` is the file pointer.

**Why Binary?**

The key here is "binary." When we write in binary mode (`"wb"`), the data isn't translated. If you were to open the resulting file in a text editor, you'd see a jumble of unreadable characters. This is because the bytes in the file directly represent the binary patterns of your numbers or structures, not their printable text equivalents. This makes the file smaller and the writing/reading process much faster.

This binary aspect is vital for **CO5**, as it shows a different, often more efficient, way to store and manipulate data compared to text-based file operations.

### Important Considerations and Common Pitfalls

1.  **File Opening Mode**: Always, always, *always* open your file in a binary mode (`"wb"`, `"ab"`, `"wb+"`, `"ab+"`) when using `fwrite()`. If you use a text mode like `"w"` or `"a"`, the system might perform character translations (e.g., converting newline characters), which can corrupt your binary data. K&R and other core texts stress the importance of choosing the correct mode.

2.  **Error Checking**: As I mentioned, the return value of `fwrite()` is crucial. **Never assume all data was written.** Always check if the number of elements returned matches `nmemb`. If it doesn't, you need to figure out why – disk full? Disk error? Permissions issue? This is a common exam question point!

3.  **`sizeof()` is Your Friend**: Using `sizeof(type)` is much safer and more portable than hardcoding byte sizes (like `4` for an integer). `sizeof()` ensures that the code works correctly regardless of the underlying system's architecture or compiler. This is a direct link to good programming practices taught across all the reference books.

4.  **Pointer Arithmetic and `fwrite()`**: When you pass an array name (like `myArray`) to `fwrite()`, it implicitly decays into a pointer to its first element. This is standard C behavior and works perfectly with `fwrite()`. If you have a pointer `p` to a single element, you can also pass `p` to `fwrite()`.

5.  **`fseek()` and `ftell()`**: While not part of `fwrite()` itself, it's worth remembering that to read this binary data back later correctly, you'll need functions like `fread()`, and potentially `fseek()` to move the file position indicator and `ftell()` to get the current position. They work in tandem with `fwrite()`.

### How This Connects to Learning Outcomes

Let's explicitly map `fwrite()` back to our learning objectives:

*   **CO1 (Infer and develop programs using basic constructs):** `fwrite()` is a function that uses basic constructs like pointers (`const void *ptr`) and data types (`size_t`). Understanding its syntax and purpose helps in developing programs that can save their state.
*   **CO2 (Develop programs using arrays, matrices, and strings):** `fwrite()` is *ideal* for writing entire arrays or blocks of data that might contain strings (as part of structures). You can write an array of strings (which are character arrays) or an array of structures that have string members.
*   **CO3 (Utilize functions for problem-solving):** `fwrite()` is a function that encapsulates complex file writing operations, allowing you to solve the problem of data persistence in a modular way. You call it, and it handles the low-level details.
*   **CO4 (Develop programs using pointers for dynamic data handling):** The very first argument of `fwrite()` is a pointer. This function directly leverages pointer concepts to access and write data from memory. It's a practical application of how pointers allow us to manipulate memory blocks.
*   **CO5 (Use files in C to permanently store and manipulate data):** This is the primary outcome that `fwrite()` serves. It's a core mechanism for writing data to files, making it permanent and available for later manipulation or retrieval. Its binary nature makes it distinct from text file operations, offering different ways to achieve data storage.

### A Quick Summary to Remember

*   **What it does:** Writes a block of binary data from memory to a file.
*   **Key Arguments:** `ptr` (source data address), `size` (element size), `nmemb` (number of elements), `stream` (output file).
*   **Mode:** Must use binary file modes (`"wb"`, `"ab"` etc.).
*   **Return:** Number of elements successfully written. **Always check it!**
*   **Why use it?** Efficiency, preserving data integrity for structured types, speed, and compactness compared to text.

---

### Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual recall to exam-style problems.

**1. Conceptual Question:**
What is the primary difference between using `fprintf()` and `fwrite()` to write data to a file?

**Answer:**
`fprintf()` is used for writing formatted text to a file. It converts data types (like integers or floats) into their character representations before writing. `fwrite()`, on the other hand, writes raw, unformatted binary data directly from memory to the file. This means `fwrite()` doesn't perform any type of translation, making it faster and more suitable for saving complex data structures or large blocks of numerical data where exact representation is important.

**2. Application Question:**
You have an array of 50 `double` values that you need to save to a file named "readings.dat". Write the C code snippet to perform this operation, assuming `readingsArray` is your array and `outFilePtr` is a valid `FILE` pointer opened in write binary mode (`"wb"`). Include error checking.

**Answer:**
```c
#include <stdio.h> // For FILE, fwrite, perror
#include <stdlib.h> // For size_t

// Assume:
// double readingsArray[50]; // Populated with data
// FILE *outFilePtr;         // Opened using fopen("readings.dat", "wb");

size_t elementsToWrite = 50;
size_t elementsWritten;

elementsWritten = fwrite(readingsArray, sizeof(double), elementsToWrite, outFilePtr);

if (elementsWritten < elementsToWrite) {
    perror("Error writing data to readings.dat");
    // You might also want to check feof(outFilePtr) or ferror(outFilePtr)
    // and handle the error, perhaps by closing the file and exiting.
} else {
    printf("Successfully wrote %zu elements to readings.dat\n", elementsWritten);
}

// Remember to fclose(outFilePtr); when done.
```
*Reasoning:* The question requires saving an array of `double`. `fwrite()` is appropriate for this binary data. We use `sizeof(double)` for the element size and `50` for the number of elements. Crucially, error checking on the return value (`elementsWritten`) is included, as required for robust programming and often tested in exams.

**3. Critical Thinking Question:**
You are writing a program that needs to save a list of student records, where each record is a `struct Student` containing a name (string) and an ID (integer). You decide to use `fwrite()` to store an array of these `Student` structures. What is a potential pitfall regarding the `name` field when reading this data back later using `fread()`?

**Answer:**
The primary pitfall is related to how strings (character arrays) are handled within the `struct Student`. When `fwrite()` writes the `struct Student`, it copies the raw bytes of the `name` character array. If `name` is, for example, `char name[50];`, `fwrite()` will write all 50 bytes, including any uninitialized or null-terminated padding bytes within that array.

When you later read this back using `fread()` into a `Student` structure, `fread()` will copy those 50 bytes into the `name` array of the new `Student` structure. If the original name was shorter than 50 characters, the rest of the bytes in the `name` array might contain garbage data from other memory locations (if the structure was not fully zero-initialized before the first `fwrite`) or data from previous writes.

When you try to treat this `name` array as a C-style string (e.g., by printing it or passing it to string functions without proper null-termination handling), it can lead to unexpected behavior or crashes because there might not be a terminating null character (`\0`) in the expected place within the first 50 bytes. A common mistake is assuming the string read back will be properly null-terminated just because it was in memory.

*To mitigate this:* Ensure that when you *create* the `Student` data to be written, the `name` field is always null-terminated within its allocated space, and preferably, the entire `Student` structure is zero-initialized before writing. When reading back, it's good practice to ensure the `name` array is null-terminated after reading, e.g., `readStudent.name[sizeof(readingsArray.name) - 1] = '\0';` before using any string functions on it.

---

Alright, that's a thorough look at `fwrite()`. Remember, mastering file I/O, especially binary operations like this, is key to building robust C applications that can handle data persistently. Keep practicing these examples, and don't hesitate to experiment! We'll build on this in our next session.
