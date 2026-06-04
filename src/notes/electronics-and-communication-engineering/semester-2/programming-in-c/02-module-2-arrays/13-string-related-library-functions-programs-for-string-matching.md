---
title: "String related library functions – Programs for string matching."
subject: "PROGRAMMING IN C"
module: "Module 2: Arrays "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da36d"
status: "completed"
scrapedAt: "2026-05-23T17:42:08.525Z"
---
# PROGRAMMING IN C: Module 2: Arrays - String Related Library Functions and String Matching

Welcome, everyone! Today, we're diving into a crucial part of C programming: **strings**. While we’ve touched upon arrays, strings are a special kind of array – an array of characters – and C provides us with a powerful set of built-in functions to manipulate them. Think of strings as the words, sentences, and messages we use to communicate. In programming, they’re essential for everything from displaying prompts to users to reading configuration files.

This module builds directly on our understanding of arrays (CO2: Develop C programs using arrays, matrices, and strings). We'll see how these string functions are essentially pre-written code that leverages the array structure we’ve already learned. Moreover, as we explore string matching, we'll be applying our knowledge of control structures (CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements) and, in more complex scenarios, even using functions themselves (CO3: Utilize functions to find solution to the computational problems).

We'll be drawing insights from established texts like Gottfried's "Programming with C" and the foundational "The C Programming Language" by Kernighan and Ritchie (often called K&R), and Schildt's "C: The Complete Reference."

## What Exactly is a String in C?

Before we jump into the functions, let's solidify our understanding of what a string is in the context of C. Unlike some other programming languages where strings are a distinct data type, in C, **a string is simply a character array that is terminated by a null character ('\0')**.

Imagine you have a sentence like "Hello, World!". In C, this isn't just stored as the characters 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!'. It’s stored as:

`'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0'`

The null terminator `\0` is absolutely vital. It’s the signal that tells C where the string ends. Without it, functions trying to process the string wouldn't know when to stop reading, leading to unpredictable behavior – often referred to as reading "beyond the bounds" of the array.

You can declare and initialize a string like this:

```c
char greeting[] = "Hello"; // The compiler automatically adds '\0' at the end
char message[10] = {'W', 'o', 'r', 'l', 'd', '\0'}; // Explicitly adding '\0'
```

It’s important to remember the size of the array. If you declare `char name[5];` and try to store "Alice", which has 5 characters plus the null terminator, you’ll overflow the buffer. So, always ensure your character array is large enough to accommodate the string *and* the null terminator. This is a common point of error, so keep it in mind!

## The String Library: Your Toolkit for String Manipulation

C provides a standard library, `<string.h>`, which is packed with functions to make working with strings much easier. These functions are incredibly useful, saving us from reinventing the wheel every time we need to perform a common string operation. We're going to focus on some of the most important ones today, especially those relevant to finding patterns within strings.

### Essential String Library Functions

Let’s explore some of the workhorses:

*   **`strlen(const char *str)`**: This function calculates the **length** of a string. It counts the number of characters *before* the null terminator.

    *   **Analogy:** Think of it like counting the number of words on a page, but stopping when you hit an empty space (our null terminator).
    *   **Example:** `strlen("C Programming")` would return 13, not 14 (because it doesn't count `\0`).
    *   **Why it’s important (Exam tip):** Many string operations depend on knowing the length. Errors in length calculation can lead to buffer overflows.

*   **`strcpy(char *dest, const char *src)`**: This function **copies** the string from `src` (source) to `dest` (destination). It copies characters one by one, including the null terminator.

    *   **Analogy:** Imagine photocopying a document. You’re creating an exact replica.
    *   **Example:** If `src` is "Hello" and `dest` is an array of sufficient size, `dest` will become "Hello".
    *   **Caution:** You *must* ensure that the destination array `dest` is large enough to hold the copied string. `strcpy` doesn't check this for you! This is a classic source of security vulnerabilities (buffer overflows). Many modern, safer alternatives like `strncpy` exist, but `strcpy` is fundamental to understand.

*   **`strncpy(char *dest, const char *src, size_t n)`**: A safer version of `strcpy`. It copies at most `n` characters from `src` to `dest`. If `src` has fewer than `n` characters, the remainder of `dest` is padded with null characters. If `src` has `n` or more characters, `dest` will *not* be null-terminated automatically if the string is exactly `n` characters long.

    *   **Analogy:** Like photocopying a document but with a strict page limit. If the original is too long, you stop at the limit.
    *   **Example:** `strncpy(dest, "Programming", 5)` would copy "Progr" to `dest`. If `dest` was `char dest[10];`, it would be `dest[0]='P', dest[1]='r', dest[2]='o', dest[3]='g', dest[4]='r', dest[5]='\0', dest[6]='\0', ...`
    *   **Key Point:** Always ensure `dest` is null-terminated manually if `strncpy` doesn't guarantee it (e.g., by setting `dest[n] = '\0';` if you expect the source to be long enough).

*   **`strcat(char *dest, const char *src)`**: This function **concatenates** (appends) the string `src` to the end of the string `dest`. It finds the null terminator in `dest`, overwrites it with the first character of `src`, and then copies the rest of `src`, including its null terminator.

    *   **Analogy:** Tying two pieces of string together. The knot is where the first string ends and the second begins.
    *   **Example:** If `dest` is "Hello" and `src` is " World", after `strcat(dest, src);`, `dest` becomes "Hello World".
    *   **Critical Warning:** Similar to `strcpy`, `strcat` does *not* check if `dest` has enough space to hold the combined string. This is another major source of buffer overflows.

*   **`strncat(char *dest, const char *src, size_t n)`**: A safer version of `strcat`. It appends at most `n` characters from `src` to `dest`. It also appends a null terminator to the result.

    *   **Analogy:** Tying two pieces of string together, but you only use a limited number of knots from the second string.
    *   **Example:** If `dest` is "Hello" and `src` is " World", and `n` is 3, `strncat(dest, src, 3);` would result in `dest` becoming "Hello Wor".
    *   **Benefit:** Helps prevent buffer overflows by limiting the appended characters.

*   **`strcmp(const char *str1, const char *str2)`**: This function **compares** two strings lexicographically (like in a dictionary). It returns:
    *   `0` if `str1` is equal to `str2`.
    *   A negative value if `str1` comes before `str2` alphabetically.
    *   A positive value if `str1` comes after `str2` alphabetically.

    *   **Analogy:** Comparing two names in a phone book. Is "Smith" before, after, or the same as "Smythe"?
    *   **Example:** `strcmp("apple", "banana")` returns a negative value. `strcmp("cat", "cat")` returns 0. `strcmp("dog", "cat")` returns a positive value.
    *   **Exam Insight:** This is fundamental for sorting strings or checking for exact matches.

*   **`strncmp(const char *str1, const char *str2, size_t n)`**: Compares the first `n` characters of `str1` and `str2`. The return values are the same as `strcmp`.

    *   **Analogy:** Comparing only the first few letters of names in a phone book.
    *   **Example:** `strncmp("apple", "apricot", 3)` returns 0 because the first 3 characters ("app") are the same.
    *   **Usefulness:** Great for partial string comparisons or when you only care about a prefix.

*   **`strchr(const char *str, int c)`**: Searches for the **first occurrence** of a character `c` within the string `str`. It returns a pointer to the first occurrence of `c` in `str`, or `NULL` if the character is not found.

    *   **Analogy:** Looking for the first instance of a specific letter on a page.
    *   **Example:** `strchr("programming", 'g')` would return a pointer to the first 'g'. `strchr("programming", 'z')` would return `NULL`.

*   **`strrchr(const char *str, int c)`**: Searches for the **last occurrence** of a character `c` within the string `str`. It returns a pointer to the last occurrence of `c` in `str`, or `NULL` if the character is not found.

    *   **Analogy:** Looking for the last instance of a specific letter on a page.
    *   **Example:** `strrchr("programming", 'g')` would return a pointer to the *second* 'g'.

*   **`strstr(const char *haystack, const char *needle)`**: This is a very important one for our topic! It searches for the **first occurrence** of the substring `needle` within the string `haystack`. It returns a pointer to the beginning of the first occurrence of `needle` in `haystack`, or `NULL` if `needle` is not found.

    *   **Analogy:** Imagine searching for a specific word ("needle") within a long paragraph ("haystack").
    *   **Example:** `strstr("This is a test string", "test")` would return a pointer to the 't' in "test". `strstr("This is a test string", "testing")` would return `NULL`.
    *   **Connection to CO2:** This function directly applies our knowledge of arrays and how we can iterate through them to find patterns.

### Program Example: Using Basic String Functions

Let's put some of these into practice.

```c
#include <stdio.h>
#include <string.h> // Required for string functions

int main() {
    char str1[50] = "Welcome to ";
    char str2[50] = "C Programming!";
    char combined[100];
    int length;

    // 1. Calculate length
    length = strlen(str1);
    printf("Length of str1: %d\n", length); // Output: Length of str1: 11

    // 2. Concatenate strings
    strcat(str1, str2); // str1 now becomes "Welcome to C Programming!"
    printf("Concatenated string: %s\n", str1); // Output: Concatenated string: Welcome to C Programming!

    // Using strcpy and checking length for concatenation
    strcpy(combined, "Part 1 ");
    strncat(combined, "and Part 2", 5); // Appends "and P"
    printf("Combined with strncat: %s\n", combined); // Output: Combined with strncat: Part 1 and P

    // 3. Compare strings
    char word1[] = "apple";
    char word2[] = "banana";
    char word3[] = "apple";

    int comparison1 = strcmp(word1, word2);
    int comparison2 = strcmp(word1, word3);

    printf("'%s' vs '%s': %d\n", word1, word2, comparison1); // Output: 'apple' vs 'banana': -1 (or some negative value)
    printf("'%s' vs '%s': %d\n", word1, word3, comparison2); // Output: 'apple' vs 'apple': 0

    // 4. Find a character
    char *first_g = strchr(str1, 'g');
    if (first_g != NULL) {
        printf("First 'g' found at position (offset from start): %ld\n", first_g - str1);
        // str1 is "Welcome to C Programming!"
        // The first 'g' is in "Programming". Its offset from the start is 15.
    } else {
        printf("Character 'g' not found.\n");
    }

    return 0;
}
```

Notice how `strlen` gives us the count *excluding* the null terminator. Also, be extremely careful with `strcat` and `strcpy` – you *must* ensure ample space in the destination array. This is a core concept from K&R’s emphasis on memory management.

## String Matching: Finding Patterns in Text

Now, let's delve into string matching, which is all about finding if a smaller string (the **pattern** or **substring**) exists within a larger string (the **text**). This is fundamental for tasks like searching for words in a document, validating user input (e.g., checking if a username contains forbidden characters), or even in more complex algorithms.

The most straightforward way to implement string matching in C, without using the built-in `strstr` function directly, is by using nested loops. This approach directly demonstrates our understanding of array traversal and conditional logic (CO1, CO2).

### Naive String Matching Algorithm (Manual Implementation)

The naive approach involves sliding the pattern one character at a time across the text and checking for a match at each position.

**How it works:**

1.  We have a `text` string and a `pattern` string.
2.  We start comparing the `pattern` with the beginning of the `text`.
3.  If all characters of the `pattern` match the corresponding characters in the `text` starting from the current position, we've found a match.
4.  If there's a mismatch at any point, we shift the `pattern` one position to the right in the `text` and repeat the comparison.
5.  We continue this until the `pattern` has been tried at all possible starting positions in the `text`.

Let's illustrate with an example.

*   **Text:** `ACABABCABC`
*   **Pattern:** `ABC`

**Step-by-step:**

*   **Try at index 0 of Text:**
    *   Compare `pattern[0]` ('A') with `text[0]` ('A') - Match!
    *   Compare `pattern[1]` ('B') with `text[1]` ('C') - Mismatch!
    *   Shift pattern.

*   **Try at index 1 of Text:**
    *   Compare `pattern[0]` ('A') with `text[1]` ('C') - Mismatch!
    *   Shift pattern.

*   **Try at index 2 of Text:**
    *   Compare `pattern[0]` ('A') with `text[2]` ('A') - Match!
    *   Compare `pattern[1]` ('B') with `text[3]` ('B') - Match!
    *   Compare `pattern[2]` ('C') with `text[4]` ('A') - Mismatch!
    *   Shift pattern.

*   **Try at index 3 of Text:**
    *   Compare `pattern[0]` ('A') with `text[3]` ('B') - Mismatch!
    *   Shift pattern.

*   **Try at index 4 of Text:**
    *   Compare `pattern[0]` ('A') with `text[4]` ('A') - Match!
    *   Compare `pattern[1]` ('B') with `text[5]` ('B') - Match!
    *   Compare `pattern[2]` ('C') with `text[6]` ('C') - Match!
    *   All pattern characters matched! We found the pattern at index 4.

*   **Try at index 5 of Text:**
    *   Compare `pattern[0]` ('A') with `text[5]` ('B') - Mismatch!
    *   Shift pattern.

*   **Try at index 6 of Text:**
    *   Compare `pattern[0]` ('A') with `text[6]` ('C') - Mismatch!
    *   Shift pattern.

*   **Try at index 7 of Text:**
    *   Compare `pattern[0]` ('A') with `text[7]` ('A') - Match!
    *   Compare `pattern[1]` ('B') with `text[8]` ('B') - Match!
    *   Compare `pattern[2]` ('C') with `text[9]` ('C') - Match!
    *   All pattern characters matched! We found the pattern at index 7.

We stop when the pattern can no longer fit within the remaining text.

### Program Example: Naive String Matching

Here’s a C program demonstrating this logic:

```c
#include <stdio.h>
#include <string.h> // For strlen

#define MAX_TEXT_LEN 100
#define MAX_PATTERN_LEN 50

int main() {
    char text[MAX_TEXT_LEN];
    char pattern[MAX_PATTERN_LEN];
    int text_len, pattern_len;
    int i, j, k; // i for text index, j for pattern index, k for starting position in text

    printf("Enter the text: ");
    fgets(text, MAX_TEXT_LEN, stdin);
    // Remove trailing newline character from fgets
    text[strcspn(text, "\n")] = 0;

    printf("Enter the pattern to search: ");
    fgets(pattern, MAX_PATTERN_LEN, stdin);
    pattern[strcspn(pattern, "\n")] = 0;

    text_len = strlen(text);
    pattern_len = strlen(pattern);

    // Loop through the text. 'k' is the starting position of the potential match.
    // We only need to check up to (text_len - pattern_len) because beyond that,
    // the pattern won't fit.
    for (k = 0; k <= text_len - pattern_len; k++) {
        // Assume a match initially
        int match = 1;

        // Compare pattern characters with text characters starting from k
        for (j = 0; j < pattern_len; j++) {
            // If characters don't match, break this inner loop
            if (text[k + j] != pattern[j]) {
                match = 0; // Indicate mismatch
                break;     // No need to compare further for this starting position
            }
        }

        // If the inner loop completed without finding a mismatch (match is still 1)
        if (match == 1) {
            printf("Pattern found at index %d\n", k);
            // If you only need to find the first occurrence, you can break here:
            // break;
        }
    }

    if (k == text_len - pattern_len + 1 && text_len >= pattern_len) {
        // This check is a bit tricky. If the loop finishes without printing anything,
        // it means no match was found. A more robust way is to use a flag.
        // Let's add a flag for clarity.
    }

    // Let's refine the "not found" message with a flag
    int found_any_match = 0;
    for (k = 0; k <= text_len - pattern_len; k++) {
        int match = 1;
        for (j = 0; j < pattern_len; j++) {
            if (text[k + j] != pattern[j]) {
                match = 0;
                break;
            }
        }
        if (match == 1) {
            printf("Pattern found at index %d\n", k);
            found_any_match = 1;
        }
    }

    if (!found_any_match) {
        printf("Pattern not found in the text.\n");
    }

    return 0;
}
```

**Explanation:**

*   We use `fgets` to read input strings, which is generally safer than `scanf` as it helps prevent buffer overflows by allowing us to specify the maximum number of characters to read. We then use `strcspn` to find and remove the newline character that `fgets` often includes.
*   The outer loop (`for (k = 0; k <= text_len - pattern_len; k++)`) iterates through all possible starting positions `k` for the `pattern` within the `text`. The loop condition `k <= text_len - pattern_len` ensures we don't try to match when the pattern would extend beyond the text.
*   The inner loop (`for (j = 0; j < pattern_len; j++)`) compares each character of the `pattern` (`pattern[j]`) with the corresponding character in the `text` starting from `k` (`text[k + j]`).
*   A `match` flag is used. It's initialized to 1 (true) at the start of each outer loop iteration. If any character mismatch occurs in the inner loop, `match` is set to 0 (false), and we `break` out of the inner loop because there's no point in continuing the comparison for that starting position `k`.
*   After the inner loop finishes, if `match` is still 1, it means all characters of the pattern matched the text at the current starting position `k`, and we print the index.
*   A `found_any_match` flag is used to print "Pattern not found" if the outer loop completes without finding any match.

This manual implementation is a great way to understand the core logic and directly relates to CO1 (using control statements) and CO2 (working with arrays/strings).

### Using `strstr()` for Simpler String Matching

The `<string.h>` library provides `strstr()` which does exactly what our manual program above does, but in a single function call. It's significantly more efficient and less error-prone to use the library function in real-world programming.

**How `strstr()` works:**

`char *strstr(const char *haystack, const char *needle);`

It searches for the first occurrence of `needle` within `haystack`.

*   If found, it returns a pointer to the *beginning* of the first occurrence of `needle` within `haystack`.
*   If not found, it returns `NULL`.

**Program Example: Using `strstr()`**

```c
#include <stdio.h>
#include <string.h>

int main() {
    char text[100];
    char pattern[50];

    printf("Enter the text: ");
    fgets(text, sizeof(text), stdin);
    text[strcspn(text, "\n")] = 0; // Remove newline

    printf("Enter the pattern to search: ");
    fgets(pattern, sizeof(pattern), stdin);
    pattern[strcspn(pattern, "\n")] = 0; // Remove newline

    char *result = strstr(text, pattern);

    if (result != NULL) {
        // Calculate the index: pointer arithmetic
        // The difference between the starting address of result and text
        // gives the offset (index) of the match.
        printf("Pattern found at index: %ld\n", result - text);
    } else {
        printf("Pattern not found in the text.\n");
    }

    return 0;
}
```

**Explanation:**

1.  We get the `text` and `pattern` as input.
2.  We call `strstr(text, pattern)`.
3.  The return value is stored in `char *result`.
4.  If `result` is not `NULL`, it means the pattern was found. The magic of pointer arithmetic (`result - text`) gives us the numerical index of where the pattern starts in the text. This is a powerful concept related to CO4 (pointers) but is used here to get the index from the pointer returned by `strstr`.
5.  If `result` is `NULL`, the pattern wasn't found.

Using `strstr()` directly maps to CO2 as it leverages string manipulation, and conceptually, it's a more efficient way to achieve what our manual loops did.

## Connecting to Course Outcomes

Let’s explicitly tie this topic back to our course outcomes:

*   **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**
    Our manual string matching program is a prime example. The problem is "find a substring". We used `if` statements, `for` loops, and `break` statements (control statements) to solve it by iterating through the array of characters.

*   **CO2: Develop C programs using arrays, matrices, and strings.**
    This entire module is about strings, which are character arrays. We’ve learned to declare, initialize, and manipulate them using library functions like `strlen`, `strcpy`, `strcat`, `strcmp`, and especially `strstr`. Our manual matching algorithm directly manipulates character array indices.

*   **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.**
    While our manual matching program might be in `main`, we could easily extract the matching logic into a separate function (e.g., `int findPattern(const char *text, const char *pattern)`). This would be a good application of CO3, making our code modular and reusable. Even the standard library functions are themselves modules of code performing specific tasks.

*   **CO4: Develop C programs using pointers for dynamic data handling.**
    `strstr` and `strchr`/`strrchr` return pointers. Understanding how to work with these pointers, like calculating the index by subtracting pointers (`result - text`), is crucial. This directly uses pointer concepts for retrieving information about string locations.

*   **CO5: Use files in C to permanently store and manipulate data.**
    While not directly demonstrated in these specific examples, string manipulation is vital when reading from or writing to files. Imagine reading lines from a log file and searching for specific error messages – you'd be using string functions on the data read from the file.

## Important Considerations and Pitfalls

*   **Null Terminator `\0`**: I cannot stress this enough. Always ensure your strings are null-terminated. Functions rely on it.
*   **Buffer Overflows**: Be extremely careful with functions like `strcpy` and `strcat`. They don't check destination buffer sizes. Use `strncpy` and `strncat` with appropriate size limits, or even better, consider functions like `snprintf` for safer string formatting and copying. This is a *very* common bug and security risk.
*   **String Length vs. Array Size**: The length of a string (given by `strlen`) is the number of characters before `\0`. The size of the character array might be larger than the string it holds, which is fine. The problem arises when the string *plus* its null terminator is larger than the array.
*   **Case Sensitivity**: Functions like `strcmp` and `strstr` are case-sensitive. "Hello" is different from "hello". If you need case-insensitive comparison, you’d typically convert both strings to the same case (e.g., lowercase) before comparing or use specialized case-insensitive functions if available in extended libraries.

Remember, the standard library functions are highly optimized. For most practical purposes, you'll want to use `strstr()` for substring searching rather than reinventing the naive algorithm, unless the goal is to learn the algorithm itself.

---

## Sample Questions and Answers

**Conceptual Questions:**

1.  **What is the significance of the null terminator `'\0'` in C strings?**
    *   **Answer:** The null terminator `'\0'` is a special character that marks the end of a string in C. It allows string manipulation functions to know where the string begins and ends. Without it, functions like `strlen`, `strcpy`, or `strstr` would continue reading past the intended end of the string, leading to unpredictable behavior and potential buffer overflows.

2.  **Explain the difference between `strcpy()` and `strncpy()`. Which is generally safer, and why?**
    *   **Answer:** `strcpy(dest, src)` copies the entire string `src` to `dest`, including the null terminator. It does **not** check if `dest` has enough space. `strncpy(dest, src, n)` copies at most `n` characters from `src` to `dest`. It’s generally safer because it limits the number of characters copied, reducing the risk of a buffer overflow. However, `strncpy` does **not** guarantee null-termination if the source string is `n` or more characters long and `n` characters are copied, so manual null-termination might be needed.

3.  **What does `strcmp()` return if the first string is lexicographically greater than the second string?**
    *   **Answer:** `strcmp()` returns a positive integer value if the first string is lexicographically greater than the second string. It returns 0 if they are equal, and a negative integer if the first string is lexicographically less than the second string.

**Exam-Oriented Questions:**

4.  **Write a C program that takes two strings as input and checks if the second string is a substring of the first string. Use the `strstr()` function.**
    *   **Answer:**
        ```c
        #include <stdio.h>
        #include <string.h>

        int main() {
            char text[100];
            char pattern[50];

            printf("Enter the main string: ");
            fgets(text, sizeof(text), stdin);
            text[strcspn(text, "\n")] = 0; // Remove trailing newline

            printf("Enter the substring to search for: ");
            fgets(pattern, sizeof(pattern), stdin);
            pattern[strcspn(pattern, "\n")] = 0; // Remove trailing newline

            char *found_pos = strstr(text, pattern);

            if (found_pos != NULL) {
                printf("Substring found at index: %ld\n", found_pos - text);
            } else {
                printf("Substring not found.\n");
            }

            return 0;
        }
        ```
        *   **Reasoning:** This program directly uses `strstr` as requested. `fgets` is used for safer input, and `strcspn` handles the newline character. The pointer arithmetic `found_pos - text` correctly calculates the starting index of the substring.

5.  **Consider the following C code snippet:**
    ```c
    char strA[10] = "Hello";
    char strB[5] = "World";
    strcat(strA, strB);
    printf("%s\n", strA);
    ```
    **What will be the output, and what is the potential problem here?**
    *   **Answer:**
        *   **Output:** The output is likely to be `HelloWorld` followed by some garbage characters or a crash.
        *   **Potential Problem:** The `strcat` function will attempt to copy `strB` ("World") to the end of `strA` ("Hello"). `strA` has 10 characters allocated. "Hello" takes 5 characters plus the null terminator, leaving 4 characters of space. `strB` is "World" (5 characters + null terminator = 6 characters). `strcat` will try to write 6 characters into the remaining 4 spaces in `strA`, causing a **buffer overflow**. This is undefined behavior, meaning the program might crash, corrupt other data, or produce seemingly correct output for a while before failing.

6.  **Implement a function `countOccurrences(const char *text, const char *pattern)` that returns the number of times `pattern` appears in `text` using only `strlen` and character-by-character comparison (simulating a naive search).**
    *   **Answer:**
        ```c
        #include <stdio.h>
        #include <string.h>

        int countOccurrences(const char *text, const char *pattern) {
            int text_len = strlen(text);
            int pattern_len = strlen(pattern);
            int count = 0;
            int i, j;

            if (pattern_len == 0 || text_len == 0 || pattern_len > text_len) {
                return 0; // Cannot find if pattern is empty, text is empty, or pattern is longer than text
            }

            for (i = 0; i <= text_len - pattern_len; i++) {
                int match = 1; // Assume match for current window
                for (j = 0; j < pattern_len; j++) {
                    if (text[i + j] != pattern[j]) {
                        match = 0; // Mismatch found
                        break;     // Exit inner loop
                    }
                }
                if (match == 1) {
                    count++; // Increment count if a full match was found
                    // Note: For overlapping matches, we continue.
                    // For non-overlapping, we'd advance i by pattern_len.
                }
            }
            return count;
        }

        int main() {
            char main_text[] = "ababababa";
            char search_pattern[] = "aba";

            int occurrences = countOccurrences(main_text, search_pattern);
            printf("The pattern '%s' appears %d times in '%s'.\n", search_pattern, occurrences, main_text);
            // Expected output: The pattern 'aba' appears 4 times in 'ababababa'.

            return 0;
        }
        ```
        *   **Reasoning:** This function implements the naive string searching logic. It uses `strlen` to get lengths, and then nested loops for comparison. The outer loop iterates through all possible start positions `i` in `text`. The inner loop checks if the substring starting at `text[i]` matches `pattern`. A `count` variable is incremented whenever a full match is confirmed. It handles edge cases like empty strings or patterns longer than the text. This directly addresses CO1 and CO2.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
