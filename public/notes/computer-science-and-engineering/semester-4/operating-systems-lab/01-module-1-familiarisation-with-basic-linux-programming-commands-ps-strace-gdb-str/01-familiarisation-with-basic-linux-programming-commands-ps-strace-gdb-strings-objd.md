---
title: "Familiarisation with basic Linux programming commands: ps, strace,  gdb, strings, objdump, nm, file, od, xxd, time, fuser, top"
subject: "OPERATING SYSTEMS LAB"
module: "Module 1: Familiarisation with basic Linux programming commands: ps, strace,  gdb, strings, objdump, nm, file, od, xxd, time, fuser, top"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b480"
status: "completed"
scrapedAt: "2026-05-20T16:14:45.470Z"
---
# OPERATING SYSTEMS LAB - Module 1: Linux Programming Commands

## Topic: Familiarisation with basic Linux programming commands: ps, strace, gdb, strings, objdump, nm, file, od, xxd, time, fuser, top

### Learning Outcomes:

*   Understand the purpose and usage of basic Linux programming commands.
*   Utilize these commands for process monitoring, debugging, and file analysis.
*   Interpret the output of these commands to gain insights into system behavior.

### 1. Introduction

This module provides an introduction to essential Linux programming commands crucial for understanding and debugging programs running on a Linux-based operating system. These commands aid in process monitoring, debugging, reverse engineering, and system administration.

### 2. Commands Overview

Here's a detailed breakdown of each command with examples and explanations:

#### 2.1. `ps` (Process Status)

*   **Definition:** Displays information about active processes. It's used to list processes, their IDs (PIDs), and other relevant data.

*   **Key Concepts:**
    *   **PID:** Process Identifier (unique numerical ID assigned to each process).
    *   **TTY:** Controlling terminal.
    *   **STAT:** Process state code (e.g., R - running, S - sleeping, T - stopped).
    *   **CMD:** Command that started the process.

*   **Usage Examples:**

    *   `ps`: Displays processes associated with the current user and terminal.
    *   `ps aux`: Displays all processes on the system, regardless of user or terminal. (a: processes for all users, u: display user information, x: include processes without controlling terminal).  This is the most commonly used form.
    *   `ps -ef`: Displays all processes in a full format with user, PID, PPID (Parent PID), C (CPU usage), STIME (start time), TTY, TIME (CPU time), and CMD.
    *   `ps -p <PID>`: Displays information about a specific process with the given PID (e.g., `ps -p 1234`).
    *   `ps -u <username>`: Displays processes owned by a specific user (e.g., `ps -u root`).
    *   `ps --forest`: Displays processes in a tree-like structure, showing parent-child relationships.

*   **Output Interpretation:**  Pay attention to the PID, user, %CPU, %MEM, and command name.  This will help you identify processes consuming excessive resources or behaving unexpectedly.

*   **Important Points:**  Different options for `ps` can produce slightly varying outputs.  Familiarize yourself with the most common options (`aux`, `-ef`, `-p`, `-u`).

#### 2.2. `strace` (System Call Trace)

*   **Definition:** Traces system calls made by a program.  It's an invaluable tool for understanding how a program interacts with the operating system kernel.

*   **Key Concepts:**
    *   **System Call:** A request made by a program to the operating system kernel for a specific service (e.g., opening a file, reading data, writing data, creating a process).

*   **Usage Examples:**

    *   `strace <command>`: Traces the execution of a command (e.g., `strace ls`).  The output is printed to the terminal.
    *   `strace -o <filename> <command>`:  Writes the trace output to a file (e.g., `strace -o ls.trace ls`).
    *   `strace -p <PID>`: Attaches to a running process and traces its system calls (e.g., `strace -p 1234`). This requires appropriate permissions.
    *   `strace -f <command>`:  Follows forks (child processes) and traces them as well.  Essential for tracing multi-process applications.
    *   `strace -e <expression> <command>`:  Filters the system calls traced based on an expression (e.g., `strace -e trace=open,read ls` traces only `open` and `read` system calls).
    *   `strace -t <command>`: Prepends each line of the trace with the wall clock time.
    *   `strace -T <command>`: Shows the time spent in each system call.
    *   `strace -c <command>`: Summarizes the system calls made by the process. Useful for identifying bottlenecks.

*   **Output Interpretation:** The output shows each system call, its arguments, and the return value. Error codes (negative return values) are particularly important for debugging. Understanding the arguments and return values of common system calls (e.g., `open`, `read`, `write`, `close`, `socket`, `connect`) is crucial.

*   **Important Points:** `strace` can generate a *lot* of output.  Use filtering options (`-e`) to narrow down the trace to specific system calls of interest. Be aware that `strace` can significantly slow down the program being traced.

#### 2.3. `gdb` (GNU Debugger)

*   **Definition:**  A powerful debugger that allows you to step through code, set breakpoints, examine variables, and much more.

*   **Key Concepts:**
    *   **Breakpoint:**  A point in the code where execution pauses.
    *   **Step:** Execute the next line of code.
    *   **Continue:** Resume execution until the next breakpoint or the program terminates.
    *   **Inspect:**  Examine the value of a variable or expression.
    *   **Backtrace:**  Display the call stack.
    *   **Core Dump:** A snapshot of a program's memory at the time of a crash.

*   **Usage Examples:**

    1.  **Compiling with Debug Information:**
        ```bash
        gcc -g -o myprogram myprogram.c  # -g adds debugging information
        ```

    2.  **Running gdb:**
        ```bash
        gdb myprogram
        ```

    3.  **Common gdb Commands:**
        *   `run`: Starts the program.
        *   `break <function_name>`: Sets a breakpoint at the beginning of a function (e.g., `break main`).
        *   `break <line_number>`: Sets a breakpoint at a specific line number in the source file (e.g., `break myprogram.c:10`).
        *   `next`: Executes the next line of code (steps over function calls).
        *   `step`: Executes the next line of code (steps into function calls).
        *   `continue`: Resumes execution until the next breakpoint.
        *   `print <variable_name>`: Prints the value of a variable (e.g., `print myVariable`).
        *   `backtrace`: Displays the call stack.
        *   `quit`: Exits gdb.
        *   `info locals`: Displays the values of local variables in the current scope.
        *   `list`: Displays the source code around the current line.
        *   `watch <expression>`: Sets a watchpoint that triggers when the value of the expression changes.

    4.  **Debugging with a Core Dump:**
        ```bash
        gdb myprogram core  # Where 'core' is the core dump file
        ```
        Use `backtrace` to examine the call stack at the point of the crash.

*   **Output Interpretation:** `gdb`'s output is interactive.  It displays the current line of code being executed, the values of variables, and the call stack.

*   **Important Points:**  Compile your code with the `-g` flag to include debugging information. This is essential for `gdb` to be effective. Understanding the call stack and how to navigate it is crucial for debugging complex programs.

#### 2.4. `strings`

*   **Definition:** Extracts printable strings from a binary file.  This is useful for identifying text fragments embedded in executables or object files.

*   **Key Concepts:**
    *   **Printable String:** A sequence of characters that can be displayed on a terminal.

*   **Usage Examples:**

    *   `strings <filename>`: Extracts printable strings from a file (e.g., `strings myprogram`).
    *   `strings -n <minimum_length> <filename>`:  Specifies the minimum length of the strings to extract (e.g., `strings -n 5 myprogram` extracts strings of at least 5 characters).
    *   `strings -t <radix> <filename>`: Shows the offset (in the file) of each string. `radix` can be `o` (octal), `x` (hexadecimal), or `d` (decimal) (e.g., `strings -tx myprogram`).

*   **Output Interpretation:** The output is a list of printable strings found in the file.  Often, these strings can reveal important information about the program's functionality, dependencies, or embedded data.

*   **Important Points:** The output of `strings` can be noisy (containing irrelevant strings). Adjust the `-n` option to filter out shorter strings.

#### 2.5. `objdump` (Object Dump)

*   **Definition:** Displays information about object files, executable files, and shared libraries. It's used to disassemble code, view headers, and examine various sections of a binary file.

*   **Key Concepts:**
    *   **Object File:** A file containing compiled code and data that is not yet linked into an executable.
    *   **Executable File:** A file containing a program that can be executed.
    *   **Shared Library:** A collection of code and data that can be used by multiple programs at runtime.
    *   **Disassembly:** The process of converting machine code into assembly language.
    *   **Sections:** Logical divisions of a binary file (e.g., `.text` (code), `.data` (initialized data), `.bss` (uninitialized data)).

*   **Usage Examples:**

    *   `objdump -d <filename>`: Disassembles the code section of a file (e.g., `objdump -d myprogram`). This is the most common use.
    *   `objdump -s <filename>`: Displays the contents of all sections (e.g., `objdump -s myprogram`).
    *   `objdump -h <filename>`: Displays the section headers (e.g., `objdump -h myprogram`).
    *   `objdump -f <filename>`: Displays the header summary of a file (e.g., `objdump -f myprogram`).
    *   `objdump -t <filename>`: Displays the symbol table (e.g., `objdump -t myprogram`).

*   **Output Interpretation:** Disassembly output shows the machine code instructions and their corresponding assembly language mnemonics.  Section headers provide information about the size, type, and attributes of each section.  The symbol table lists the symbols (functions, variables, labels) defined and referenced in the file.

*   **Important Points:** Understanding assembly language is helpful for interpreting the disassembly output. `objdump` can be used to reverse engineer programs, analyze code structure, and identify vulnerabilities.

#### 2.6. `nm` (Name List)

*   **Definition:** Lists the symbols defined or used in an object file, executable file, or shared library.

*   **Key Concepts:**
    *   **Symbol:** A name that represents a function, variable, or label in a program.
    *   **Symbol Table:** A table that contains information about the symbols in a file, including their name, address, and type.

*   **Usage Examples:**

    *   `nm <filename>`: Lists the symbols in a file (e.g., `nm myprogram`).
    *   `nm -a <filename>`: Lists all symbols, even debugger-only symbols.
    *   `nm -C <filename>`: Demangles C++ symbols (makes them more readable).
    *   `nm -D <filename>`: Lists the dynamic symbols (from a shared library).

*   **Output Interpretation:** The output shows the address, type, and name of each symbol. The symbol type indicates whether the symbol is a function, variable, or other type. Useful for understanding a program's API.

*   **Important Points:**  The output of `nm` can be combined with `grep` to search for specific symbols. Useful for identifying undefined symbols (symbols that are used but not defined) during linking.

#### 2.7. `file`

*   **Definition:** Determines the file type. It attempts to identify the file based on its contents rather than just its extension.

*   **Key Concepts:**
    *   **Magic Number:**  A sequence of bytes at the beginning of a file that identifies its type.

*   **Usage Examples:**

    *   `file <filename>`: Determines the file type (e.g., `file myprogram`, `file myimage.jpg`, `file myfile.txt`).
    *   `file -b <filename>`: Provides a brief description without the filename.
    *   `file -i <filename>`: Outputs the MIME type of the file.

*   **Output Interpretation:** The output provides a description of the file type (e.g., "ELF 64-bit LSB executable, x86-64").

*   **Important Points:** Useful for quickly identifying unknown file types.  Can detect executables, shared libraries, text files, images, and other common file formats.

#### 2.8. `od` (Octal Dump)

*   **Definition:** Dumps a file in octal or other formats. Used to examine the raw bytes of a file.

*   **Key Concepts:**
    *   **Hex Dump:**  A representation of a file's contents in hexadecimal format.
    *   **Octal Dump:**  A representation of a file's contents in octal format.
    *   **ASCII Dump:**  A representation of a file's contents in ASCII characters.

*   **Usage Examples:**

    *   `od <filename>`: Dumps the file in octal format.
    *   `od -x <filename>`: Dumps the file in hexadecimal format.
    *   `od -c <filename>`: Dumps the file in ASCII characters.
    *   `od -t x1 <filename>`: Displays bytes as hexadecimal.
    *   `od -t d1 <filename>`: Displays bytes as decimal.

*   **Output Interpretation:** The output shows the offset of each byte in the file, followed by its representation in the specified format.

*   **Important Points:**  Useful for examining binary files and identifying specific byte sequences. Can be helpful for reverse engineering and analyzing file formats.

#### 2.9. `xxd` (Hex Dump)

*   **Definition:** Makes a hex dump of a file, or converts a hex dump back to its original binary form. A more modern and easier to use alternative to `od` for hex dumps.

*   **Key Concepts:** Same as `od`.

*   **Usage Examples:**

    *   `xxd <filename>`: Creates a hex dump of a file.
    *   `xxd -r <hex_dump_file> <output_file>`: Reverts a hex dump back to its original binary form.
    *   `xxd -b <filename>`:  Creates a binary dump (showing bits).
    *   `xxd -g <number> <filename>`: Groups the bytes in the output by the given number (e.g., `xxd -g 1 myprogram`).

*   **Output Interpretation:** The output shows the offset of each byte, followed by the hexadecimal representation of the bytes and their ASCII representation (if applicable).

*   **Important Points:**  `xxd` is often preferred over `od` for hex dumps due to its cleaner output format and the ability to easily convert back to binary.

#### 2.10. `time`

*   **Definition:** Measures the execution time of a command.

*   **Key Concepts:**
    *   **Real Time:** The actual time elapsed from the start to the end of the command's execution.
    *   **User Time:** The amount of CPU time spent executing the command in user mode.
    *   **System Time:** The amount of CPU time spent executing the command in kernel mode (e.g., handling system calls).

*   **Usage Examples:**

    *   `time <command>`: Executes the command and displays its execution time (e.g., `time ls`).
    *   `time -p <command>`:  Provides a more precise and portable output format.

*   **Output Interpretation:** The output shows the real, user, and system time. The sum of user and system time represents the total CPU time used by the command.

*   **Important Points:**  Useful for benchmarking and profiling programs. Helps identify performance bottlenecks. The `time` command only measures the execution time of the command itself; it doesn't include the time spent waiting for I/O or other resources.

#### 2.11. `fuser` (File User)

*   **Definition:** Identifies processes that are using specific files or sockets.

*   **Key Concepts:**
    *   **File Descriptor:** A numerical identifier assigned to an open file or socket.

*   **Usage Examples:**

    *   `fuser <filename>`: Lists the PIDs of processes using a file (e.g., `fuser myfile.txt`).
    *   `fuser -k <filename>`: Kills the processes using a file (e.g., `fuser -k myfile.txt`). Requires root privileges to kill processes owned by other users.
    *   `fuser -v <filename>`:  Provides verbose output, including the user and command of each process.
    *   `fuser <port>/tcp`: Identifies processes using a specific TCP port (e.g., `fuser 80/tcp`).

*   **Output Interpretation:** The output shows the PID of each process using the specified file or socket.

*   **Important Points:**  Useful for identifying processes that are preventing a file from being deleted or modified. Can be used to resolve port conflicts. Be cautious when using the `-k` option, as it can terminate processes unexpectedly.

#### 2.12. `top`

*   **Definition:** Displays a dynamic, real-time view of system processes. It shows CPU usage, memory usage, and other system statistics.

*   **Key Concepts:**
    *   **Load Average:** A measure of the system's load (the average number of processes that are runnable or blocked).
    *   **CPU Usage:** The percentage of CPU time being used by processes.
    *   **Memory Usage:** The amount of memory being used by processes.
    *   **Swap Usage:** The amount of swap space being used by the system.

*   **Usage Examples:**

    *   `top`: Starts the `top` utility.
    *   Press `q` to quit `top`.
    *   Press `1` to show all CPUs on multi-core systems.
    *   Press `M` to sort by memory usage.
    *   Press `P` to sort by CPU usage.
    *   Press `k` to kill a process (prompts for PID).
    *   Press `h` to show help.

*   **Output Interpretation:** The output is updated periodically, showing the CPU usage, memory usage, and a list of processes sorted by CPU usage (by default). The first few lines show system-wide statistics, including the load average, CPU usage, and memory usage.  The process list shows the PID, user, CPU usage, memory usage, and command name for each process.

*   **Important Points:** `top` is an essential tool for monitoring system performance and identifying processes that are consuming excessive resources.

### 3. Practice Questions/Exercises

1.  **Question:** How do you list all processes running on the system with their full command, including processes without a controlling terminal?

    **Answer:** `ps aux` or `ps -ef`

2.  **Question:** How can you trace the system calls made by the `ls` command and save the output to a file named `ls.trace`?

    **Answer:** `strace -o ls.trace ls`

3.  **Question:** How can you set a breakpoint at line 15 of the `myprogram.c` file using `gdb`?

    **Answer:** `break myprogram.c:15`

4.  **Question:** How can you display the strings longer than 8 characters in a program named "test"?

    **Answer:** `strings -n 8 test`

5.  **Question:** How do you disassemble the main function of a program named `myprogram`? (You will need to find the starting address of main first, perhaps by `nm` or `objdump -t`.)

    **Answer:** First determine the address using `nm myprogram | grep main`, then use `objdump -d -j .text -S myprogram`, and finally pipe the results of the objdump command into less if the output is very long

6.  **Question:** How do you determine the type of the `mydata.dat` file?

    **Answer:** `file mydata.dat`

7.  **Question:** How do you find the PIDs of all processes using the file `/tmp/important.txt`?

    **Answer:** `fuser /tmp/important.txt`

8.  **Question:** How do you display the execution time of the `find` command?

    **Answer:** `time find / -name importantfile.txt`

9.  **Question:** How can you find out what processes are listening on port 8080?

    **Answer:** `fuser 8080/tcp`

10. **Question:** You suspect a program called `memoryhog` is using excessive memory. Which command can you use to confirm this in real-time?

    **Answer:** `top`.  Sort by memory usage (press `M` while `top` is running) to easily identify the process consuming the most memory.

### 4. Important Points to Remember

*   Mastering these basic Linux commands is fundamental to system administration, software development, and reverse engineering.
*   Practice using these commands regularly to become proficient.
*   Use the `man` pages to learn more about the options and usage of each command (e.g., `man ps`, `man strace`).
*   Combining these commands with other shell utilities (e.g., `grep`, `awk`, `sed`) can greatly enhance their power and flexibility.
*   Be careful when using commands that can modify system state (e.g., `fuser -k`). Ensure you understand the potential consequences before executing such commands.
