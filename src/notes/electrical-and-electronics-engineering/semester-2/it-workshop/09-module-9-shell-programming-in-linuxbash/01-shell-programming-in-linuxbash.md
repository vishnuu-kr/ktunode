---
title: "Shell programming in Linux(bash)"
subject: "IT WORKSHOP"
module: "Module 9: Shell programming in Linux(bash)"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f97ed"
status: "completed"
scrapedAt: "2026-05-23T16:07:47.922Z"
---
# IT WORKSHOP: Module 9 - Shell Programming in Linux (Bash)

Welcome, everyone, to our journey into the world of Linux shell programming with Bash! In this module, we're going to unlock the power of the command line and learn how to automate tasks, create our own custom commands, and generally make our lives much easier when working with Linux. This is a core skill for anyone venturing into IT, and it directly ties into **Course Outcome 2: Make use of the command line of Linux operating system and shell programming.** We'll be diving deep, building on the foundational understanding of how operating systems work, as discussed in texts like Englander's "The Architecture of Computer Hardware, Systems Software, & Networking."

Think of the Linux command line as a direct conversation with your computer. Bash, or the Bourne Again Shell, is the most common language we use for this conversation. It's not just about typing commands; it's about chaining them together, making decisions, and creating mini-programs that can execute complex tasks for you. This is where we start to really *program* the system, not just interact with it.

## 1. The Linux Shell: Your Command Center

Before we write any scripts, let's solidify our understanding of what the shell *is*. Imagine you're in a busy office. You have people doing various tasks, but you also need a central hub where you can give instructions and get information. That's essentially what the shell is for your computer. It's an **interpreter** – it takes the commands you type, understands them, and tells the operating system kernel what to do.

Bash is a **command-line interpreter** and also a powerful **scripting language**. This dual nature is what makes it so potent. You can use it for quick, one-off commands, or you can write sequences of these commands, save them in a file, and execute them as a program – that's a shell script!

### 1.1 Why Shell Programming? Efficiency and Automation

Why bother with shell programming? Let's say you have to rename 100 files, each with a slightly different naming convention. Typing each `mv` command individually would be tedious, error-prone, and frankly, a waste of your valuable time. With shell scripting, you can write a script that does this automatically.

This directly relates to **Course Outcome 2**. You'll learn to leverage the command line not just for simple tasks but for complex, repetitive operations, making you much more efficient. As Schneider and Gersting might put it in "Invitation to Computer Science," this is a form of algorithmic thinking applied to system administration and development tasks.

Think of it like this: you wouldn't manually dig trenches for every single pipe in a plumbing system, right? You'd use machinery. Shell scripting is your machinery for the digital world.

## 2. Your First Bash Script: A Simple "Hello, World!"

Let's get our hands dirty with a very basic script. Every programming journey starts here, and Bash is no exception.

1.  **Create a file:** Open your favorite text editor (like `nano` or `vim`) and create a file named `hello.sh`. The `.sh` extension is a convention to indicate it's a shell script.

    ```bash
    nano hello.sh
    ```

2.  **Add the script content:** Inside the file, type the following:

    ```bash
    #!/bin/bash
    # This is my first Bash script

    echo "Hello, World!"
    ```

    Let's break this down:
    *   `#!/bin/bash`: This is called a **shebang**. It's a special line that tells the system which interpreter should be used to execute this script. In this case, it's Bash, located at `/bin/bash`. It’s crucial to get this right!
    *   `# This is my first Bash script`: Lines starting with `#` are **comments**. They are for humans to read and understand the script; the interpreter ignores them. Good commenting is a hallmark of well-written code.
    *   `echo "Hello, World!"`: The `echo` command is one of the most fundamental commands. It simply prints whatever you give it to the standard output (usually your terminal screen).

3.  **Save and exit:** In `nano`, you'd press `Ctrl+X`, then `Y` to confirm saving, and `Enter` to keep the filename.

4.  **Make the script executable:** By default, new files don't have permission to be run as programs. We need to grant that permission using the `chmod` command:

    ```bash
    chmod +x hello.sh
    ```
    The `+x` means "add execute permission."

5.  **Run the script:** Now, you can execute your script:

    ```bash
    ./hello.sh
    ```
    The `./` tells the shell to look for the script in the current directory.

    You should see:
    ```
    Hello, World!
    ```

Congratulations! You've just written and executed your first Bash script. This is the foundational step for automating tasks, directly contributing to **Course Outcome 2**.

## 3. Variables: Storing and Manipulating Data

Just like in any programming language, we need to store information. In Bash, we use **variables**. Think of a variable as a labeled box where you can put information, like a name, a number, or a piece of text.

### 3.1 Declaring and Assigning Variables

Assigning a value to a variable is straightforward: `variable_name=value`.

*   **No spaces** around the equals sign (`=`): This is a very common mistake. `my_var = 10` will *not* work, but `my_var=10` will.
*   Variable names are case-sensitive. `MY_VAR` is different from `my_var`.
*   Conventionally, variable names are often in lowercase, and if they have multiple words, they use underscores (e.g., `user_name`). However, uppercase is often used for environment variables (more on that later).

Let's create a script `greet.sh`:

```bash
#!/bin/bash
# Script to greet a user

# Assigning values to variables
user_name="Alice"
greeting="Hello"

# Using variables
echo "$greeting, $user_name!"
```

To run this:
1.  Save as `greet.sh`.
2.  `chmod +x greet.sh`
3.  `./greet.sh`

Output:
```
Hello, Alice!
```

### 3.2 Accessing Variable Values

To use the value stored in a variable, you **prefix its name with a dollar sign (`$`)**. So, to get the value of `user_name`, you'd use `$user_name`.

When you're using variables within strings, it's good practice to **enclose the variable reference in double quotes (`"`)**. This helps prevent unexpected behavior if the variable's content contains spaces or special characters. For example, `echo $greeting, $user_name!` might have issues if `user_name` was "Alice Smith". However, `echo "$greeting, $user_name!"` would correctly output "Hello, Alice Smith!".

### 3.3 Types of Variables

Bash is dynamically typed, meaning you don't explicitly declare a variable's type (like integer or string). It infers the type from the value you assign. However, understanding how Bash treats data is important.

*   **Strings:** Most of what you put in variables will be treated as strings. `name="Bob"`
*   **Numbers:** While you can store numbers, Bash treats them as strings by default for most operations. You'll need specific commands or syntax for arithmetic. `count=10`

**Important for Exams:** Remember the syntax for assigning (`var=value`) and accessing (`$var` or `"${var}"`). The quotes are key for robustness. This concept of variables is fundamental to all programming and directly supports **Course Outcome 2**.

## 4. Input/Output: Talking to the User

We've already seen `echo` for output. But how do we get input from the user? The `read` command is our tool for this.

Let's modify our `greet.sh` script to ask for the user's name:

```bash
#!/bin/bash
# Script to greet a user with input

echo "Please enter your name:"
read user_name # Reads input from the user and stores it in user_name

echo "Hello, $user_name! Welcome."
```

Run this script, and it will pause after printing "Please enter your name:", waiting for you to type your name and press Enter.

### 4.1 The `-p` option with `read`

A more concise way to prompt for input is using the `-p` option with `read`. It combines the prompt and the input reading into one line.

```bash
#!/bin/bash
# Script using read -p for input

read -p "Enter your name: " user_name # -p displays the prompt, then reads input

echo "Hello, $user_name! Nice to meet you."
```

This is much cleaner! It’s a small optimization, but in scripting, these little things add up.

### 4.2 Standard Input, Output, and Error

In Unix-like systems, every process has three standard "files" associated with it:

*   **Standard Input (stdin):** Where a process reads data from. By default, this is your keyboard. (File descriptor 0)
*   **Standard Output (stdout):** Where a process writes its normal output to. By default, this is your terminal screen. (File descriptor 1)
*   **Standard Error (stderr):** Where a process writes error messages to. By default, this is also your terminal screen. (File descriptor 2)

Commands like `echo` write to `stdout`. The `read` command reads from `stdin`. We'll explore how to redirect these later, which is a powerful concept related to **Course Outcome 2** and how components interact, echoing principles from Englander's book on system architecture.

## 5. Conditional Statements: Making Decisions

Real-world programs need to make decisions. Should we proceed if a file exists? Should we offer a discount if a customer is a VIP? In Bash, we use conditional statements for this.

The most common conditional is the `if` statement.

### 5.1 The `if` Statement

The basic structure is:

```bash
if [ condition ]; then
  # commands to execute if the condition is true
fi
```

*   `[ condition ]`: This is where the test happens. The square brackets `[` and `]` are actually commands themselves (synonyms for `test`). There **must be spaces** between the brackets and the condition.
*   `then`: This keyword separates the condition from the commands to be executed.
*   `fi`: This signifies the end of the `if` block.

Let's write a script `check_file.sh` that checks if a file exists:

```bash
#!/bin/bash
# Script to check if a file exists

file_to_check="my_document.txt"

if [ -f "$file_to_check" ]; then
  echo "The file '$file_to_check' exists."
else
  echo "The file '$file_to_check' does not exist."
fi
```

Let's break down `[ -f "$file_to_check" ]`:
*   `-f`: This is a **test operator** that checks if the given path exists and is a regular file.
*   `"$file_to_check"`: The variable holding the filename, quoted to handle spaces.

**Common Test Operators:**
*   `-e`: Exists (any type of file)
*   `-f`: Is a regular file
*   `-d`: Is a directory
*   `-r`: Is readable
*   `-w`: Is writable
*   `-x`: Is executable
*   `==` or `=`: Strings are equal
*   `!=`: Strings are not equal
*   `-gt`: Greater than (for numbers)
*   `-lt`: Less than (for numbers)

### 5.2 `if-else` Statement

As seen in the example above, you can add an `else` block to execute commands if the condition is false.

```bash
if [ condition ]; then
  # commands if true
else
  # commands if false
fi
```

### 5.3 `if-elif-else` Statement

For multiple conditions, you use `elif` (else if):

```bash
if [ condition1 ]; then
  # commands if condition1 is true
elif [ condition2 ]; then
  # commands if condition2 is true
else
  # commands if both condition1 and condition2 are false
fi
```

**Example: Checking a number**

```bash
#!/bin/bash
# Script to check a number

read -p "Enter a number: " num

if [ "$num" -gt 0 ]; then
  echo "The number is positive."
elif [ "$num" -lt 0 ]; then
  echo "The number is negative."
else
  echo "The number is zero."
fi
```

Remember the spaces around `[` and `]` and the use of test operators. This conditional logic is a cornerstone of programming and essential for **Course Outcome 2**.

## 6. Loops: Repeating Actions

Often, you'll need to perform an action multiple times. That's where **loops** come in. Bash offers several types of loops, the most common being `for` and `while`.

### 6.1 The `for` Loop

The `for` loop is great for iterating over a list of items.

**Syntax 1: Iterating over a list of words**

```bash
for item in item1 item2 item3; do
  # commands to execute for each item
done
```

**Example: Listing files in a directory**

```bash
#!/bin/bash
# Script to list files in the current directory

echo "Files in the current directory:"
for file in *; do
  echo "- $file"
done
```

Here, `*` is a wildcard that expands to all files and directories in the current directory. The loop assigns each one to the `file` variable, and `echo "- $file"` prints it.

**Syntax 2: C-style `for` loop**

This is similar to loops in languages like C or Java, useful for numerical sequences.

```bash
for (( initialisation; condition; increment )); do
  # commands
done
```

**Example: Counting up**

```bash
#!/bin/bash
# Script using C-style for loop

echo "Counting from 1 to 5:"
for (( i=1; i<=5; i++ )); do
  echo "Count: $i"
done
```
*   `i=1`: Initializes counter `i` to 1.
*   `i<=5`: The loop continues as long as `i` is less than or equal to 5.
*   `i++`: Increments `i` by 1 after each iteration.

### 6.2 The `while` Loop

A `while` loop executes a block of code as long as a given condition is true.

```bash
while [ condition ]; do
  # commands
done
```

The condition is checked *before* each iteration. If it's false initially, the loop body will never execute.

**Example: Reading lines from a file**

This is a classic use case. Let's say we have a file `data.txt` with names:
```
Alice
Bob
Charlie
```

And our script `read_names.sh`:
```bash
#!/bin/bash
# Script to read names from a file using a while loop

file_name="data.txt"

# Check if the file exists first!
if [ ! -f "$file_name" ]; then
  echo "Error: File '$file_name' not found."
  exit 1 # Exit with an error code
fi

while IFS= read -r line; do
  echo "Processing name: $line"
done < "$file_name"
```

Let's dissect this `while` loop:
*   `done < "$file_name"`: This is **input redirection**. It tells the `while` loop to read its input from the file specified by `$file_name`, instead of standard input.
*   `read -r line`: This is a safe way to read a line.
    *   `-r`: Prevents backslash interpretation (raw mode).
    *   `IFS=`: This is important! `IFS` (Internal Field Separator) is a variable that Bash uses to split words. By setting it to empty for the `read` command, we ensure that leading/trailing whitespace and multiple spaces within a line are preserved correctly in the `$line` variable. Without this, `read` might trim whitespace.
*   `exit 1`: When something goes wrong, it's good practice to exit your script with a non-zero status code, indicating an error. `exit 0` usually means success.

Loops are critical for automating repetitive tasks, directly reinforcing **Course Outcome 2**. They are the engine that drives much of shell scripting's power.

## 7. Functions: Reusable Code Blocks

As your scripts grow, you'll find yourself repeating certain blocks of code. **Functions** allow you to group commands into reusable units. Think of them like mini-scripts within your script. This is analogous to using functions in other programming languages, promoting modularity.

### 7.1 Defining and Calling Functions

```bash
function function_name {
  # commands
}
```
or
```bash
function_name () {
  # commands
}
```

To use (or "call") a function, you simply write its name.

**Example: A greeting function**

```bash
#!/bin/bash
# Script demonstrating functions

greet_user() {
  local user_name="$1" # $1 refers to the first argument passed to the function
  echo "Hello there, $user_name!"
}

# Call the function with an argument
greet_user "Buddy"
greet_user "Friend"
```

Output:
```
Hello there, Buddy!
Hello there, Friend!
```

*   `local user_name="$1"`: Inside a function, `$1`, `$2`, etc., refer to the arguments passed to that function. Using `local` ensures that the `user_name` variable is scoped only to this function, preventing potential conflicts with variables of the same name outside the function. This is good programming practice.

Functions help make scripts more organized, readable, and maintainable, which is key for any programming task, aligning with the spirit of **Course Outcome 2**.

## 8. Input/Output Redirection and Pipes

This is where the true power of the Linux command line and shell scripting shines! We can control where commands get their input from and where their output goes.

### 8.1 Input Redirection (`<`)

We saw this with the `while` loop. It redirects the content of a file to the standard input of a command.

```bash
# Reads input for 'sort' from 'unsorted.txt'
sort < unsorted.txt
```
This is equivalent to `sort unsorted.txt` in this specific case, but redirection is more general.

### 8.2 Output Redirection (`>`, `>>`)

*   `>`: Redirects `stdout` to a file. If the file exists, **it overwrites it**.
*   `>>`: Redirects `stdout` to a file. If the file exists, it **appends** to it.

**Example:**

```bash
#!/bin/bash
# Script demonstrating output redirection

echo "This line goes to the screen." > output.txt
echo "This line is appended." >> output.txt
ls -l >> output.txt # Append the output of ls -l
```

After running this script, `output.txt` will contain:
```
This line goes to the screen.
This line is appended.
-rw-r--r-- 1 user user 1234 Jan  1 10:00 output.txt
-rw-r--r-- 1 user user  567 Jan  1 10:00 script_name.sh
... (other files/dirs)
```

### 8.3 Error Redirection (`2>`, `2>>`)

Remember `stderr`? We can redirect error messages too, using file descriptor `2`.

*   `2>`: Overwrites a file with `stderr`.
*   `2>>`: Appends to a file with `stderr`.

**Example:**
Let's try to list a non-existent file.

```bash
ls non_existent_file 2> error.log
```
The error message "ls: cannot access 'non_existent_file': No such file or directory" will be written to `error.log`, and nothing will appear on your screen (stderr is redirected).

### 8.4 Redirecting Both stdout and stderr

Sometimes, you want to capture everything.

*   `&>`: Overwrites a file with both `stdout` and `stderr`.
*   `&>>`: Appends to a file with both `stdout` and `stderr`.

**Example:**
```bash
ls /etc /nonexistent_dir &> all_output.txt
```
`all_output.txt` will contain the successful `ls /etc` output and the error from `ls /nonexistent_dir`.

### 8.5 Pipes (`|`)

This is arguably the most powerful concept. A **pipe** connects the `stdout` of one command to the `stdin` of another command. It's like an assembly line for data.

```bash
command1 | command2 | command3
```

`command1`'s output becomes `command2`'s input, and `command2`'s output becomes `command3`'s input.

**Example: Finding processes by name**

Let's say you want to find all running processes related to "firefox":

```bash
ps aux | grep firefox
```

*   `ps aux`: Lists all running processes in a detailed format. Its output goes to `stdout`.
*   `|`: The pipe takes that output.
*   `grep firefox`: Searches its input (which is the output of `ps aux`) for lines containing "firefox".

This is a perfect illustration of how these tools work together, directly relating to **Course Outcome 2** and showing the interplay of system components as discussed in Englander's book. It’s how you can build complex operations from simple, single-purpose commands.

## 9. Shell Scripting Best Practices and Exam Tips

As we wrap up, let's think about how to write good scripts and what to expect in exams.

### 9.1 Readability and Maintainability

*   **Shebang:** Always start with `#!/bin/bash`.
*   **Comments:** Use comments (`#`) liberally to explain complex logic, variable purposes, or any non-obvious steps. Imagine someone else (or your future self!) needs to understand this script.
*   **Meaningful Variable Names:** `user_count` is better than `uc`.
*   **Indentation:** Consistent indentation for `if`, `for`, `while` blocks makes code much easier to read.
*   **Functions:** Break down complex tasks into functions.

### 9.2 Error Handling

*   **Check Exit Codes:** Most commands return an exit code (0 for success, non-zero for failure). You can check this with `$?`. For example:
    ```bash
    command_that_might_fail
    if [ $? -ne 0 ]; then
      echo "Error: command_that_might_fail failed!"
      exit 1
    fi
    ```
*   **`set -e`**: Add `set -e` at the beginning of your script. This tells Bash to exit immediately if any command fails (returns a non-zero exit status). This is a quick way to make scripts more robust.
*   **`set -u`**: Treat unset variables as an error and exit. This catches typos in variable names.
*   **`set -o pipefail`**: If any command in a pipeline fails, the pipeline's exit status is the exit status of the rightmost failing command. Without this, a pipeline might succeed even if an intermediate command failed.

Combining these (`set -euo pipefail`) at the top of your script is a common practice for writing safer scripts.

### 9.3 Common Exam Pitfalls

*   **Spaces:** Forgetting spaces around `[` and `]` in `if` conditions.
*   **Equals Sign:** Forgetting spaces around the `=` when assigning variables.
*   **Quoting:** Not quoting variables that might contain spaces (e.g., filenames).
*   **Shebang:** Missing or incorrect shebang line.
*   **Permissions:** Forgetting `chmod +x` before trying to run a script.
*   **Operators:** Using the wrong test operators (e.g., `=` instead of `-eq` for numerical comparison, or using numeric operators like `-gt` on strings).
*   **Redirection vs. Pipes:** Understanding when to use `>` and when to use `|`.

### 9.4 Connecting to Course Outcomes

*   **CO2 (Command Line & Shell Programming):** This entire module is dedicated to this. We've learned to navigate, execute commands, write scripts, use variables, conditionals, loops, functions, and manage I/O. Everything we've done directly enables you to use the Linux command line effectively and program it.
*   **CO1 (Hardware Interface):** While not directly about hardware components, understanding the shell and scripting gives you a higher-level control over the software that interfaces with the hardware. You're telling the OS kernel what to do, which in turn manages the hardware.
*   **CO4 (Websites & Version Control):** While this module focuses on system scripting, the organizational and logical thinking skills you develop (variables, loops, conditionals) are transferable to web development. Version control concepts, like those in Narębski's "Mastering Git," are crucial for managing shell scripts too!

Remember, mastering Bash scripting is about building logical solutions to automate tasks and manage your computing environment. It's a skill that pays dividends in any IT role.

---

## Sample Questions and Answers

Here are some questions to test your understanding, covering both concepts and exam-style scenarios.

**Question 1 (Conceptual):**
What is the purpose of the `#!/bin/bash` line at the beginning of a Bash script?

**Answer:**
This is called the "shebang" line. Its purpose is to tell the operating system which interpreter should be used to execute the script. In this case, `/bin/bash` specifies the Bash shell interpreter. Without it, the system might try to execute the script using the wrong shell or default shell, leading to errors.

**Question 2 (Exam-Oriented - Syntax Error):**
Consider the following script snippet. What is the most likely error if this script fails to assign the value 10 to `my_variable`?

```bash
my_variable = 10
echo $my_variable
```

**Answer:**
The error is the **spaces around the equals sign (`=`)** in the line `my_variable = 10`. In Bash, variable assignment requires no spaces. The correct syntax is `my_variable=10`. The system would likely interpret `my_variable` as a command to be executed, which wouldn't be found, or it might treat `= 10` as arguments to the command `my_variable`.

**Question 3 (Conceptual - Loops):**
Describe the difference between a `for` loop iterating over a list of items and a `while` loop, and provide a scenario where each would be more appropriate.

**Answer:**
*   **`for` loop (list iteration):** Executes a block of commands once for each item in a predefined list or set of items (e.g., files in a directory, a sequence of numbers).
    *   **Scenario:** Renaming all files in a directory with a specific extension (e.g., `.txt` to `.bak`). You'd loop through each `.txt` file and rename it.
*   **`while` loop:** Executes a block of commands repeatedly as long as a specified condition remains true. The condition is checked *before* each iteration.
    *   **Scenario:** Reading a configuration file line by line until the end of the file is reached, or waiting for a specific condition to be met, like a service starting up.

**Question 4 (Exam-Oriented - I/O Redirection):**
What command would you use to count the number of lines in a file named `report.txt` and save that count to a file named `line_count.log`?

**Answer:**
```bash
wc -l report.txt > line_count.log
```
*   `wc -l report.txt`: The `wc` command (word count) with the `-l` option counts the lines in `report.txt`. Its output (the count) goes to standard output.
*   `>`: This redirects the standard output of `wc -l report.txt` to the file `line_count.log`. If `line_count.log` exists, it will be overwritten.

**Question 5 (Conceptual - Pipes):**
What is a pipe (`|`) in Bash, and what is its primary function? Provide an example of its use.

**Answer:**
A pipe (`|`) is a mechanism in Bash that connects the standard output (`stdout`) of one command to the standard input (`stdin`) of another command. Its primary function is to allow the chaining of commands together, enabling complex data processing workflows where the output of one command serves as the input for the next, without needing intermediate temporary files.

*   **Example:** `ps aux | grep "apache2"`
    This command first lists all running processes (`ps aux`) and then pipes that output to `grep "apache2"`, which filters the process list to show only lines containing "apache2".
