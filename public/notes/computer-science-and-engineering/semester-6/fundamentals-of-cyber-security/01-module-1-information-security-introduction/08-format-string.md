---
title: "Format String"
subject: "FUNDAMENTALS OF CYBER SECURITY"
module: "Module 1: Information Security Introduction"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be2b"
status: "completed"
scrapedAt: "2026-05-20T16:54:23.783Z"
---
# FUNDAMENTALS OF CYBER SECURITY
## Module 1: Information Security Introduction
### Topic: Format String Vulnerabilities

**Learning Outcomes:**

*   Understand the concept of format string vulnerabilities.
*   Explain how format string vulnerabilities can be exploited.
*   Identify the common format string specifiers used in C/C++.
*   Recognize the risks associated with using user-controlled format strings.
*   Implement basic mitigation techniques to prevent format string vulnerabilities.

---

**1. Introduction to Format String Vulnerabilities**

*   **Definition:** A format string vulnerability is a security flaw that occurs when a program allows user-controlled input to be used as a format string in functions like `printf`, `sprintf`, `fprintf`, etc. This allows an attacker to potentially read from or write to arbitrary memory locations, leading to information disclosure, denial-of-service, or even arbitrary code execution.

*   **Key Concept: Format Strings:** Format strings are used in C/C++ to control how data is formatted and displayed by functions like `printf`. They use special specifiers (e.g., `%d`, `%s`, `%x`) to indicate how arguments should be interpreted and rendered.

*   **The Problem:**  If a user can control the format string, they can inject malicious specifiers that read from or write to unintended memory locations. This is because `printf` and related functions read arguments directly from the stack based on the format string provided. If the format string asks for more arguments than are actually passed, `printf` will read from whatever happens to be on the stack (or elsewhere in memory), potentially leaking sensitive information.

**2. Common Format String Specifiers**

*   **`%d` or `%i`:**  Interprets the argument as a signed integer.

    ```c
    printf("%d", 123); // Output: 123
    ```

*   **`%u`:** Interprets the argument as an unsigned integer.

    ```c
    printf("%u", 456); // Output: 456
    ```

*   **`%x`:** Interprets the argument as an unsigned hexadecimal integer (lowercase).

    ```c
    printf("%x", 0xff); // Output: ff
    ```

*   **`%X`:** Interprets the argument as an unsigned hexadecimal integer (uppercase).

    ```c
    printf("%X", 0xff); // Output: FF
    ```

*   **`%s`:**  Interprets the argument as a pointer to a string and prints the string.  This is particularly dangerous.

    ```c
    char *str = "Hello";
    printf("%s", str); // Output: Hello
    ```

*   **`%c`:** Interprets the argument as a single character.

    ```c
    printf("%c", 'A'); // Output: A
    ```

*   **`%n`:** *This is the most dangerous specifier for exploitation.* Writes the number of characters written so far to the memory location pointed to by the corresponding argument.

    ```c
    int count;
    printf("Test%n", &count);
    printf("Number of characters written: %d\n", count); // Output: Number of characters written: 4
    ```

*   **`%p`:** Prints the value of a pointer in hexadecimal format.

    ```c
    int x = 10;
    int *ptr = &x;
    printf("%p", ptr); // Output: (address of x in hexadecimal, e.g., 0x7ffeea601078)
    ```

*   **Field Width and Precision:**  You can also specify field width and precision with format specifiers. For example:

    *   `%10d`:  Prints an integer, padded to a width of 10 characters.
    *   `%.2f`:  Prints a floating-point number with 2 digits after the decimal point.
    *   `%08x`:  Prints a hexadecimal number, padded with leading zeros to a width of 8 characters.

**3. Exploiting Format String Vulnerabilities**

*   **Information Leakage:**
    *   By providing `%x` specifiers, an attacker can read values from the stack. By repeatedly using `%x`, the attacker can potentially discover addresses or other sensitive information.
    *   Using `%p` directly leaks pointers.
    *   Using `%s` with an address on the stack can cause the program to read from that address, attempting to print it as a string. If the address is valid, the program will print the string at that address. If the address is invalid, the program will crash (Denial of Service) or exhibit unpredictable behavior.

    *Example:*

    ```c
    char user_input[256];
    printf("Enter your input: ");
    fgets(user_input, sizeof(user_input), stdin);
    printf(user_input);  // Vulnerable: User input is used directly as the format string.
    ```

    If the user enters `AAAA%x.%x.%x.%x`, the `printf` function will try to interpret `AAAA` as a string and then read four additional values from the stack, printing them as hexadecimal numbers.

*   **Arbitrary Memory Write:**
    *   The `%n` specifier is used to write to memory.  An attacker can use it to overwrite arbitrary memory locations with controlled values. The value written will be the number of characters printed *so far* by the `printf` function.
    *   Crafting an exploit using `%n` involves carefully controlling the number of characters printed before the `%n` specifier, effectively controlling the value written to the target memory address.

    *Example:*

    ```c
    char user_input[256];
    printf("Enter your input: ");
    fgets(user_input, sizeof(user_input), stdin);
    printf(user_input); // Vulnerable

    // Attacker input (Example, addresses will vary):
    // \x12\x34\x56\x78%x%x%x%x%x%x%x%x%n
    ```

    In this example:

    *   `\x12\x34\x56\x78` is a (little-endian) memory address where the attacker wants to write. (Note: Addresses will vary based on the system).
    *   `%x%x%x%x%x%x%x%x` consumes values from the stack to get the `%n` closer to writing. You might need to adjust the number of `%x` depending on the stack layout.  They are essentially padding.
    *   `%n` writes the total number of characters printed so far (including the address `\x12\x34\x56\x78` and the characters from the `%x` format specifiers) to the memory location pointed to by `\x12\x34\x56\x78`.  To control the *value* written, you need to control the number of characters printed.
    *   For writing larger values, it's often necessary to use techniques like `%<number>x` to print a specific number of characters and combine multiple `%n` writes (`%hn` for short, `%hhn` for byte-sized writes) to construct the desired value incrementally.

**4. Risks Associated with User-Controlled Format Strings**

*   **Information Disclosure:**  Sensitive data such as passwords, encryption keys, or internal program states can be leaked.
*   **Denial of Service (DoS):**  The program can crash if the attacker provides invalid memory addresses to read or write from, or through excessive memory consumption.
*   **Arbitrary Code Execution (ACE):**  By carefully overwriting critical program data (e.g., function pointers, return addresses), an attacker can gain control of the program's execution flow and execute arbitrary code. This is the most severe consequence.

**5. Mitigation Techniques**

*   **Input Validation:**  Never allow user-supplied input to be directly used as a format string. Always use a hardcoded format string.

    ```c
    // Vulnerable:
    // printf(user_input);

    // Correct:
    printf("%s", user_input);  // Treat user_input as a string to be printed.
    ```

*   **Static Analysis:** Use static analysis tools to identify potential format string vulnerabilities in the code. These tools can automatically scan the source code and flag instances where `printf` or similar functions are used with user-controlled format strings.

*   **Compiler Flags and Security Features:**
    *   **`-Wformat -Werror=format-security` (GCC/Clang):** These compiler flags enable format string checking and treat format string vulnerabilities as errors, preventing compilation if a vulnerability is detected.
    *   **Address Space Layout Randomization (ASLR):** ASLR randomizes the memory addresses of key program components, making it harder for attackers to predict memory locations needed for exploitation. However, it doesn't prevent the vulnerability itself.
    *   **Data Execution Prevention (DEP) / No-Execute (NX):** Prevents code execution from certain memory regions (like the stack or heap), making it harder to execute injected code.

*   **Use Secure Alternatives:** Consider using safer alternatives to `printf` if possible.  For example, using logging libraries that handle formatting securely or using functions like `puts` when simply printing a string.

*   **Code Reviews:** Conduct thorough code reviews to identify and address potential format string vulnerabilities.

**6. Important Points to Remember**

*   **User input should *never* be used directly as a format string.**
*   The `%n` specifier is particularly dangerous and should be carefully scrutinized.
*   Compiler flags and security features can help mitigate format string vulnerabilities, but they are not foolproof.  Good coding practices are essential.
*   Understanding how format strings work internally is critical for recognizing and preventing vulnerabilities.

**Practice Questions/Exercises**

1.  **Identify the vulnerability:**  The following code is vulnerable to a format string attack. Explain why and how an attacker could exploit it.

    ```c
    #include <stdio.h>

    int main() {
        char buffer[256];
        printf("Enter your input: ");
        fgets(buffer, sizeof(buffer), stdin);
        printf(buffer);
        return 0;
    }
    ```

    **Answer:**  The code is vulnerable because the `printf` function directly uses user-supplied input (`buffer`) as the format string.  An attacker can exploit this by providing format string specifiers like `%x` to leak information from the stack or `%n` to write to arbitrary memory locations.

2.  **Prevent the vulnerability:**  Rewrite the code above to prevent the format string vulnerability.

    ```c
    #include <stdio.h>

    int main() {
        char buffer[256];
        printf("Enter your input: ");
        fgets(buffer, sizeof(buffer), stdin);
        printf("%s", buffer); // Treat buffer as a string
        return 0;
    }
    ```

    **Answer:**  The corrected code treats the user input as a simple string by passing it as an argument to the `%s` format specifier in `printf`.  This prevents the user from injecting format string specifiers.

3.  **Explain the impact of `%n`:** What does the `%n` format specifier do, and why is it dangerous?

    **Answer:** The `%n` format specifier writes the number of characters written so far by the `printf` function to the memory location pointed to by the corresponding argument. It's dangerous because it allows an attacker to write arbitrary values to arbitrary memory locations, potentially leading to arbitrary code execution.

4.  **Explain why simply disabling ASLR isn't a sufficient mitigation:** Why is Address Space Layout Randomization (ASLR) not a complete solution to format string vulnerabilities?

    **Answer:** While ASLR makes exploitation harder by randomizing memory addresses, it doesn't eliminate the underlying format string vulnerability. An attacker might still be able to leak information to determine the address space layout or use other techniques to bypass ASLR (e.g., information leaks, brute-force attacks, or exploiting other vulnerabilities). The core issue of uncontrolled format strings must be addressed directly.

5. **Challenge:** Explain the strategy an attacker would use to overwrite a function pointer in memory using a format string vulnerability, and why controlling the number of characters written is crucial.

    **Answer:** The attacker's strategy involves these steps:

    1.  **Find the address of the function pointer:** The attacker needs to know the memory address of the function pointer they want to overwrite. This might involve leaking information using `%x` or `%p` if ASLR is not effectively implemented or can be bypassed with other vulnerabilities.
    2.  **Craft the input:** The attacker crafts the input to `printf` (or related function) to include:
        *   The address of the function pointer they want to overwrite, usually in little-endian format (e.g., `\xef\xbe\xad\xde`).
        *   Padding using `%x` or `%<number>x` to manipulate the number of characters printed.
        *   `%n` (or its variants like `%hn`, `%hhn`) to write the controlled number of characters to the memory location pointed to by the address.
    3.  **Control the number of characters written:** This is critical. The attacker must precisely control the number of characters printed before the `%n` specifier so that the desired value (the address of the attacker-controlled code or a different legitimate function they want to redirect to) is written to the function pointer. Techniques like `%<number>x` are used to pad the output to reach the desired count. For example, to write the value 0x12345678, the attacker might use a combination of `%<number>x` specifiers and possibly chained `%hn` or `%hhn` writes to construct the value byte by byte.
    4. **Trigger the function call:** After the function pointer is overwritten, the attacker triggers the execution of the function pointer by calling the corresponding function. This will now execute the code at the address the attacker wrote.

    The ability to precisely control the number of characters written is what allows the attacker to overwrite memory with a specific, desired value. Without this control, they cannot redirect the function pointer to their chosen code.
