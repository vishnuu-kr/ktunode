---
title: "String related library functions – Programs for string matching."
subject: "PROGRAMMING IN C"
module: "Module 2: Arrays "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e4c"
status: "completed"
scrapedAt: "2026-05-20T16:35:23.462Z"
---
# PROGRAMMING IN C: Module 2 - Arrays

## Topic: String Related Library Functions – Programs for String Matching

Welcome, everyone! Today, we're diving deeper into the world of strings in C, building upon our understanding of arrays. Strings, as you know, are essentially arrays of characters, and they are fundamental to so many programming tasks – from handling user input to processing text files. In this session, we'll explore some powerful, pre-built functions that C provides to manipulate and, importantly, *compare* strings. This is a crucial area, and understanding these library functions will significantly boost your ability to solve problems efficiently.

Before we jump into the matching part, let's quickly recap what makes strings special in C. Remember, a C string is always terminated by a null character, `\0`. This terminator is key for many string functions to know where the string actually ends.

### The Power of String Library Functions: Why Reinvent the Wheel?

Imagine you need to check if a user has typed their password correctly. You'd need to compare their input string with the stored password. You *could* write your own code to compare each character one by one, but C has already done the heavy lifting for you with a rich set of standard library functions. These functions are part of the `<string.h>` header file, so the first thing you'll always need to do is include it:

```c
#include <string.h>
```

Using these library functions isn't just about saving time; it's also about writing more reliable, readable, and often more optimized code. Think of them as your trusty tools in the C programming toolbox.

### Essential String Manipulation Functions (A Quick Refresher)

While our focus today is on string matching, let's briefly touch upon a few other common string functions you'll likely encounter, as they often work hand-in-hand.

*   **`strcpy(destination, source)`**: This function copies the `source` string into the `destination` string. *Crucially*, it also copies the null terminator. Think of it like moving a whole phrase from one notepad to another. You need to ensure the destination notepad is large enough to hold the entire phrase! (Refer to Gottfried's "Programming with C" for more on safe string copying).

*   **`strncpy(destination, source, n)`**: This is a safer version of `strcpy`. It copies at most `n` characters from `source` to `destination`. If the source string is shorter than `n`, it pads the destination with null characters. If the source string is longer or equal to `n`, it *won't* automatically add the null terminator if `n` characters are copied. This is a common pitfall, so be mindful!

*   **`strcat(destination, source)`**: This function appends the `source` string to the end of the `destination` string. Again, the null terminator from the source replaces the null terminator of the destination, and then a new null terminator is added. It's like adding a new sentence to the end of an existing one.

*   **`strlen(string)`**: This function returns the length of the string (the number of characters before the null terminator). It's a very straightforward count.

### String Matching: Finding if One String is Inside Another

Now, let's get to the heart of our topic: string matching. This is all about finding out if a smaller string (often called a "substring" or "pattern") exists within a larger string (the "text").

#### 1. `strstr(haystack, needle)`: The "Find Substring" Champion

This is probably the most common and versatile function for string matching. Its name is a little hint: you're searching for a "needle" within a "haystack."

**What it does:** `strstr()` searches for the first occurrence of the string `needle` within the string `haystack`.

**What it returns:**
*   If `needle` is found within `haystack`, it returns a pointer to the *first character* of the first occurrence of `needle` in `haystack`.
*   If `needle` is *not* found, it returns `NULL`.

**Analogy:** Imagine you have a long scroll of parchment (the `haystack`) with various writings, and you're looking for a specific, short phrase (the `needle`) written on it. `strstr()` will point you to exactly where that phrase begins on the scroll.

**Example:**

Let's say you want to check if the word "world" is present in the greeting "Hello, world!".

```c
#include <stdio.h>
#include <string.h>

int main() {
    char text[] = "Hello, world!";
    char pattern[] = "world";
    char *ptr;

    ptr = strstr(text, pattern); // Search for "world" in "Hello, world!"

    if (ptr != NULL) {
        printf("Pattern found at position: %ld\n", ptr - text); // Calculate offset
        printf("The substring is: %s\n", ptr);
    } else {
        printf("Pattern not found.\n");
    }

    return 0;
}
```

**Output:**
```
Pattern found at position: 7
The substring is: world!
```

**Explanation:**
*   `ptr - text` is a clever way to get the index. Since `ptr` points to the start of "world" within `text`, subtracting the address of the beginning of `text` gives you the offset (the index).
*   Printing `ptr` directly shows you the part of the string starting from where the pattern was found.

**Exam Tip:** Understanding what `strstr` returns (a pointer, or `NULL`) is crucial for writing the `if` condition correctly. Many students forget to check for `NULL`.

#### 2. `strcmp(string1, string2)`: Comparing Strings for Equality (and Order)

While not strictly for finding a substring *within* another string, `strcmp()` is fundamental for comparing if two strings are identical, or for determining their lexicographical (alphabetical) order. This is often a prerequisite or a part of more complex matching algorithms.

**What it does:** `strcmp()` compares `string1` and `string2` character by character.

**What it returns:**
*   `0`: If `string1` is identical to `string2`.
*   A positive value: If `string1` is lexicographically greater than `string2` (meaning `string1` comes *after* `string2` in alphabetical order).
*   A negative value: If `string1` is lexicographically less than `string2` (meaning `string1` comes *before* `string2` in alphabetical order).

**Analogy:** Think of a dictionary. `strcmp()` is like the librarian telling you if two words are the same, or which one comes first alphabetically. "apple" vs "banana" – `strcmp("apple", "banana")` would return a negative value. "cat" vs "cat" – `strcmp("cat", "cat")` returns `0`. "dog" vs "cat" – `strcmp("dog", "cat")` returns a positive value.

**Example:**

```c
#include <stdio.h>
#include <string.h>

int main() {
    char s1[] = "apple";
    char s2[] = "apple";
    char s3[] = "banana";

    int result1, result2, result3;

    result1 = strcmp(s1, s2); // Compare "apple" with "apple"
    result2 = strcmp(s1, s3); // Compare "apple" with "banana"
    result3 = strcmp(s3, s1); // Compare "banana" with "apple"

    printf("strcmp(\"%s\", \"%s\") = %d\n", s1, s2, result1);
    printf("strcmp(\"%s\", \"%s\") = %d\n", s1, s3, result2);
    printf("strcmp(\"%s\", \"%s\") = %d\n", s3, s1, result3);

    if (strcmp(s1, s2) == 0) {
        printf("The strings s1 and s2 are identical.\n");
    } else {
        printf("The strings s1 and s2 are different.\n");
    }

    return 0;
}
```

**Output:**
```
strcmp("apple", "apple") = 0
strcmp("apple", "banana") = -5 // (or some negative number)
strcmp("banana", "apple") = 5 // (or some positive number)
The strings s1 and s2 are identical.
```

**Important Note:** The *exact* non-zero values returned by `strcmp` are not standardized, only their sign matters (positive, negative, or zero). Some textbooks, like Hanly and Koffman's "Problem Solving and Program Design in C", emphasize that you should only rely on the *zero* return value for equality checks.

**Common Pitfall:** Using `==` to compare strings in C. Remember, `s1 == s2` compares the *addresses* of the arrays, not their contents! You *must* use `strcmp()` for content comparison.

#### 3. `strncmp(string1, string2, n)`: Comparing a Limited Number of Characters

This is a variation of `strcmp` that is particularly useful when you only need to compare a specific number of characters from the beginning of two strings.

**What it does:** `strncmp()` compares at most the first `n` characters of `string1` and `string2`.

**What it returns:** Similar to `strcmp`:
*   `0`: If the first `n` characters are identical.
*   A positive value: If the first `n` characters of `string1` are lexicographically greater than `string2`.
*   A negative value: If the first `n` characters of `string1` are lexicographically less than `string2`.

**Use Case:** Imagine you have a long command string and you only care if it *starts* with a specific command prefix, like "GET " or "POST ". You wouldn't want to compare the entire string, just the beginning part.

**Example:**

Let's check if a command starts with "USER" and see how it compares to "USERS".

```c
#include <stdio.h>
#include <string.h>

int main() {
    char command1[] = "USERNAME: admin";
    char command2[] = "USERS: guest";
    char prefix[] = "USER";

    // Compare first 4 characters of command1 with prefix
    int res1 = strncmp(command1, prefix, 4);
    // Compare first 4 characters of command2 with prefix
    int res2 = strncmp(command2, prefix, 4);

    printf("Comparing first 4 chars of \"%s\" with \"%s\": %d\n", command1, prefix, res1);
    printf("Comparing first 4 chars of \"%s\" with \"%s\": %d\n", command2, prefix, res2);

    // Check if command1 starts with "USER"
    if (strncmp(command1, prefix, 4) == 0) {
        printf("Command 1 starts with \"%s\".\n", prefix);
    }

    // Check if command2 starts with "USER"
    if (strncmp(command2, prefix, 4) == 0) {
        printf("Command 2 starts with \"%s\".\n", prefix);
    } else {
        printf("Command 2 does not start with \"%s\".\n", prefix);
    }

    return 0;
}
```

**Output:**
```
Comparing first 4 chars of "USERNAME: admin" with "USER": 0
Comparing first 4 chars of "USERS: guest" with "USER": 0
Command 1 starts with "USER".
Command 2 starts with "USER".
```
*Self-correction:* Wait, my example output for `command2` was wrong! `strncmp("USERS: guest", "USER", 4)` should be 0 because the first 4 characters are identical. Let's fix that in the code and the explanation.

**Corrected Example and Output:**

```c
#include <stdio.h>
#include <string.h>

int main() {
    char command1[] = "USERNAME: admin";
    char command2[] = "USERS: guest";
    char prefix[] = "USER";

    // Compare first 4 characters of command1 with prefix
    int res1 = strncmp(command1, prefix, 4);
    // Compare first 4 characters of command2 with prefix
    int res2 = strncmp(command2, prefix, 4);

    printf("Comparing first 4 chars of \"%s\" with \"%s\": %d\n", command1, prefix, res1);
    printf("Comparing first 4 chars of \"%s\" with \"%s\": %d\n", command2, prefix, res2);

    // Check if command1 starts with "USER"
    if (strncmp(command1, prefix, 4) == 0) {
        printf("Command 1 starts with \"%s\".\n", prefix);
    }

    // Check if command2 starts with "USER"
    if (strncmp(command2, prefix, 4) == 0) {
        printf("Command 2 starts with \"%s\".\n", prefix);
    } else {
        printf("Command 2 does not start with \"%s\".\n", prefix);
    }

    return 0;
}
```

**Corrected Output:**
```
Comparing first 4 chars of "USERNAME: admin" with "USER": 0
Comparing first 4 chars of "USERS: guest" with "USER": 0
Command 1 starts with "USER".
Command 2 starts with "USER".
```
*Self-correction 2:* My example for command2 was still not showcasing a difference properly. Let's try comparing `command2` with something else, or modify the prefix. Let's refine the example to be clearer about `strncmp`'s behavior.

**Even Better Example:**

Let's check if a command starts with "GET " and then compare it to "POST ".

```c
#include <stdio.h>
#include <string.h>

int main() {
    char command1[] = "GET /index.html HTTP/1.1";
    char command2[] = "POST /submit.php HTTP/1.1";
    char prefix[] = "GET "; // Notice the space

    // Compare first 4 characters of command1 with prefix
    int res1 = strncmp(command1, prefix, 4);
    // Compare first 4 characters of command2 with prefix
    int res2 = strncmp(command2, prefix, 4);

    printf("Comparing first 4 chars of \"%s\" with \"%s\": %d\n", command1, prefix, res1);
    printf("Comparing first 4 chars of \"%s\" with \"%s\": %d\n", command2, prefix, res2);

    // Check if command1 starts with "GET "
    if (strncmp(command1, prefix, 4) == 0) {
        printf("Command 1 starts with \"%s\".\n", prefix);
    }

    // Check if command2 starts with "GET "
    if (strncmp(command2, prefix, 4) == 0) {
        printf("Command 2 starts with \"%s\".\n", prefix);
    } else {
        printf("Command 2 does not start with \"%s\".\n", prefix);
    }

    return 0;
}
```

**Output:**
```
Comparing first 4 chars of "GET /index.html HTTP/1.1" with "GET ": 0
Comparing first 4 chars of "POST /submit.php HTTP/1.1" with "GET ": -6 // (or some negative number, as 'P' < 'G')
Command 1 starts with "GET ".
Command 2 does not start with "GET ".
```
This is much better! It clearly shows `strncmp` stopping at `n` characters.

**Connection to Course Outcomes:**
*   **CO2 (Arrays, Strings):** We are directly working with strings, which are character arrays. Understanding their null-terminated nature and how functions like `strstr` and `strncmp` operate on them is key.
*   **CO3 (Functions):** We are using pre-defined library functions. You could also implement your own string matching functions (like `my_strstr` or `my_strcmp`), which would showcase your understanding of modularization and recursion or iteration.
*   **CO1 (Basic Constructs):** The conditional statements (`if-else`) used to check the return values of these functions are fundamental control structures.

### Implementing Custom String Matching (For Deeper Understanding)

While we rely on library functions for efficiency, understanding how they work internally is invaluable. It shows us the elegance of character-by-character processing and reinforces our knowledge of loops and array manipulation. Let’s try to build a simple version of `strstr`.

#### A Basic `my_strstr` Implementation

This function will take two strings, `haystack` and `needle`, and search for `needle` within `haystack`.

```c
#include <stdio.h>
#include <string.h> // Still include for strlen if needed, or define it too!

// A simple implementation of strstr
char* my_strstr(const char* haystack, const char* needle) {
    // If needle is empty, it's found at the beginning of any haystack.
    if (*needle == '\0') {
        return (char*)haystack; // Return pointer to haystack's start
    }

    // Iterate through the haystack
    for (int i = 0; haystack[i] != '\0'; ++i) {
        // Check if the current character in haystack matches the first char of needle
        if (haystack[i] == needle[0]) {
            // Potential match found, now check the rest of the needle
            int j = 0;
            // Keep comparing as long as characters match AND we don't go out of bounds for needle
            while (needle[j] != '\0' && haystack[i+j] == needle[j]) {
                j++;
            }
            // If we successfully compared all characters of the needle (j reached the end of needle)
            if (needle[j] == '\0') {
                // Match found! Return a pointer to the start of the match in haystack.
                // We need to cast away const here because my_strstr returns char* not const char*
                return (char*)(haystack + i);
            }
        }
    }

    // If the loop finishes without finding a match
    return NULL;
}

int main() {
    char text[] = "This is a test string for searching.";
    char pattern1[] = "test";
    char pattern2[] = "hello";
    char pattern3[] = "searching.";
    char pattern4[] = ""; // Empty string

    char *result;

    printf("Searching for \"%s\" in \"%s\"\n", pattern1, text);
    result = my_strstr(text, pattern1);
    if (result) printf("Found at index: %ld\n", result - text);
    else printf("Not found.\n");

    printf("\nSearching for \"%s\" in \"%s\"\n", pattern2, text);
    result = my_strstr(text, pattern2);
    if (result) printf("Found at index: %ld\n", result - text);
    else printf("Not found.\n");

    printf("\nSearching for \"%s\" in \"%s\"\n", pattern3, text);
    result = my_strstr(text, pattern3);
    if (result) printf("Found at index: %ld\n", result - text);
    else printf("Not found.\n");

    printf("\nSearching for \"%s\" in \"%s\"\n", pattern4, text);
    result = my_strstr(text, pattern4);
    if (result) printf("Found at index: %ld\n", result - text); // Should point to start of text
    else printf("Not found.\n");

    return 0;
}
```

**Output of `my_strstr` example:**
```
Searching for "test" in "This is a test string for searching."
Found at index: 10

Searching for "hello" in "This is a test string for searching."
Not found.

Searching for "searching." in "This is a test string for searching."
Found at index: 28

Searching for "" in "This is a test string for searching."
Found at index: 0
```

**How `my_strstr` works:**
1.  **Outer Loop (`i`):** It iterates through `haystack` character by character.
2.  **Initial Match (`haystack[i] == needle[0]`):** If the current character in `haystack` matches the *first* character of `needle`, we have a potential starting point for our match.
3.  **Inner Loop (`j`):** If a potential start is found, an inner loop starts. This loop checks if the subsequent characters in `haystack` (starting from `i+1`) match the subsequent characters in `needle` (starting from `needle[1]`).
4.  **Success Condition (`needle[j] == '\0'`):** The inner loop continues as long as characters match *and* we haven't reached the end of `needle`. If the inner loop finishes because `needle[j]` became `'\0'`, it means we've successfully matched the entire `needle`! We then return the pointer to the start of the match in `haystack` (`haystack + i`).
5.  **Failure Condition:** If the inner loop breaks because of a mismatch (`haystack[i+j] != needle[j]`), it means this wasn't the correct starting point, so the outer loop continues to the next character in `haystack`.
6.  **No Match:** If the outer loop completes without the inner loop ever satisfying the `needle[j] == '\0'` condition, `NULL` is returned.

This manual implementation is excellent practice for understanding string manipulation at a lower level, relating to **CO1** and **CO2**.

### Common String Matching Algorithms

While `strstr` is a powerful built-in, for very large texts or extremely frequent searches, more advanced algorithms exist. You won't typically implement these from scratch in introductory courses, but it's good to be aware of them.

*   **Naive String Matching:** This is essentially what our `my_strstr` function demonstrates – trying to match the pattern at every possible starting position in the text. Its time complexity can be O(m*n) where m is text length and n is pattern length in the worst case.
*   **Knuth-Morris-Pratt (KMP) Algorithm:** This algorithm is clever. It preprocesses the pattern to create a "failure function" (or "LPS array") that tells it how many characters to "shift" the pattern forward when a mismatch occurs, avoiding redundant comparisons. This significantly improves performance, often achieving O(m+n).
*   **Boyer-Moore Algorithm:** Another efficient algorithm that often starts comparing the pattern from its end, leading to potentially larger shifts and faster matching.

These advanced algorithms demonstrate how to analyze computational problems for efficiency, aligning with higher-level course outcomes, though they are beyond the scope of basic library function usage.

### Summary and Key Takeaways

*   **`#include <string.h>`:** Always remember to include this header for string functions.
*   **`strstr(haystack, needle)`:** Finds the first occurrence of `needle` in `haystack`. Returns a pointer to the start of the match or `NULL`. This is your go-to for general substring finding.
*   **`strcmp(str1, str2)`:** Compares two strings lexicographically. Returns `0` for equality, negative if `str1 < str2`, positive if `str1 > str2`. **Never use `==` for string content comparison.**
*   **`strncmp(str1, str2, n)`:** Compares only the first `n` characters of two strings. Useful for prefix checks.
*   **Null Terminator (`\0`):** The foundation of C strings, informing functions where a string ends.
*   **Pointer Arithmetic:** Understanding how to calculate the index of a match using `pointer_to_match - pointer_to_start` is a common technique.

These library functions are your essential tools for working with strings in C, enabling you to solve tasks efficiently and correctly. Practice using them in various scenarios!

---

## Sample Questions and Answers

**Conceptual Questions:**

1.  **What is the primary purpose of the `<string.h>` header file in C?**
    *   **Answer:** The `<string.h>` header file provides declarations for a comprehensive set of standard library functions designed for string manipulation and processing in C. These include functions for copying, concatenating, comparing, searching, and tokenizing strings.

2.  **Explain the difference between `strcmp()` and `strncmp()`. When would you prefer one over the other?**
    *   **Answer:** `strcmp(str1, str2)` compares two strings entirely until a mismatch is found or both strings end. It returns 0 if they are identical. `strncmp(str1, str2, n)` compares only the first `n` characters of the two strings. You would prefer `strcmp()` when you need to know if two strings are exactly the same or their full lexicographical order. You would prefer `strncmp()` when you only care about a common prefix or a limited portion of the strings, such as checking if a command starts with a specific keyword.

3.  **What does it mean for `strstr()` to return `NULL`? How does this help in program logic?**
    *   **Answer:** If `strstr(haystack, needle)` returns `NULL`, it signifies that the `needle` string was not found anywhere within the `haystack` string. This is crucial for program logic because it allows you to use an `if` condition (`if (strstr(...) != NULL)`) to branch your code, executing different blocks of instructions based on whether the substring was found or not.

**Exam-Oriented Questions:**

4.  **Write a C program that takes two strings as input from the user and checks if the second string is a substring of the first string using `strstr()`. If found, it should print the starting index of the substring.**

    *   **Program:**
        ```c
        #include <stdio.h>
        #include <string.h>

        int main() {
            char text[100];
            char pattern[50];
            char *ptr;

            printf("Enter the main string: ");
            fgets(text, sizeof(text), stdin); // Use fgets for safer input
            // Remove trailing newline character from fgets
            text[strcspn(text, "\n")] = 0;

            printf("Enter the substring to search for: ");
            fgets(pattern, sizeof(pattern), stdin);
            pattern[strcspn(pattern, "\n")] = 0;

            ptr = strstr(text, pattern);

            if (ptr != NULL) {
                // Calculate the index by subtracting the base address of text
                printf("Substring found! It starts at index %ld.\n", ptr - text);
                printf("The matched portion is: %s\n", ptr);
            } else {
                printf("Substring not found.\n");
            }

            return 0;
        }
        ```
    *   **Reasoning:**
        *   We include `stdio.h` for input/output and `string.h` for string functions.
        *   `fgets` is used for input to prevent buffer overflows, a common security concern.
        *   The `strcspn` and assignment `text[strcspn(text, "\n")] = 0;` is a standard way to remove the newline character that `fgets` often appends.
        *   `strstr(text, pattern)` performs the search.
        *   The `if (ptr != NULL)` condition checks if the search was successful.
        *   `ptr - text` calculates the offset (index) from the beginning of `text` to where `pattern` was found.

5.  **Write a C program that compares a user-entered string with the literal string "HELLO" using `strncmp()`. The program should only compare the first 5 characters. If they match, it should print "Prefix Match!". Otherwise, it should print "No Prefix Match.".**

    *   **Program:**
        ```c
        #include <stdio.h>
        #include <string.h>

        int main() {
            char userInput[100];
            const char* target = "HELLO";
            int n = 5; // Number of characters to compare

            printf("Enter a string (at least %d characters): ", n);
            fgets(userInput, sizeof(userInput), stdin);
            userInput[strcspn(userInput, "\n")] = 0; // Remove newline

            // Ensure userInput is at least n characters long before comparing if necessary,
            // or let strncmp handle it (it will compare up to min(strlen(s1), strlen(s2), n))

            if (strncmp(userInput, target, n) == 0) {
                printf("Prefix Match!\n");
            } else {
                printf("No Prefix Match.\n");
            }

            return 0;
        }
        ```
    *   **Reasoning:**
        *   The program uses `fgets` for safe input.
        *   `strncmp(userInput, target, n)` is used to compare only the first `n=5` characters.
        *   The condition `strncmp(...) == 0` checks for exact equality of these first 5 characters.
        *   The output message is displayed accordingly. This tests the understanding of `strncmp`'s behavior and its return value.

These questions cover both the understanding of the functions and their practical application in programming scenarios. Good luck with your practice!
