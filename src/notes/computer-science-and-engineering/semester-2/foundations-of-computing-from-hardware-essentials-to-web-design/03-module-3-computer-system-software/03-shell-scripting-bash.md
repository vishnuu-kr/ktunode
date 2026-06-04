---
title: "Shell scripting (bash)"
subject: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN"
module: "Module 3: Computer System Software "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e01"
status: "completed"
scrapedAt: "2026-05-20T16:34:20.095Z"
---
## Module 3: Computer System Software - Shell Scripting (Bash)

Welcome, everyone, to our exploration of the fascinating world of Computer System Software! Today, we're diving into a crucial component that makes our computers truly useful: **Shell Scripting**, specifically using the **Bash** shell. Think of this as learning to speak the language of your operating system, allowing you to command it with precision and efficiency.

You've already gained a solid understanding of the hardware essentials, how data is represented, and the foundational architecture of computers. We've touched upon operating systems and their vital role in managing these resources. Now, with shell scripting, we're bridging the gap between the raw power of the hardware and the user's ability to harness it. This topic directly ties into **CO1 (Identify the fundamental components and the working of an IT environment)** and **CO3 (Explain the operating systems, computer network architecture, and necessary protocols used)**, as the shell is the primary interface to the operating system, which in turn manages the hardware.

### What Exactly is a "Shell"?

Before we jump into scripting, let's clarify what a "shell" is. Imagine you're at a busy airport. You don't directly interact with the runway, the air traffic control tower's radar, or the mechanics. Instead, you have a ticket counter, a flight attendant, and perhaps a boarding pass – these are your **interfaces**. They allow you to communicate your intentions (where you want to go, when) to the complex system that gets you there.

In a computer system, the **shell** is exactly that: an **interface** between you, the user, and the operating system's kernel. The kernel is the core of the OS, directly managing the hardware. The shell translates your commands into instructions that the kernel can understand and execute.

There are different types of shells. The most common one on Linux and macOS systems, and increasingly popular on Windows with the Windows Subsystem for Linux (WSL), is **Bash**, which stands for **Bourne Again SHell**. It's incredibly powerful and flexible. When you open a terminal window on your Linux or macOS machine, you're likely interacting with a Bash shell.

### Why Script? The Power of Automation

So, why bother with scripting? Think about repetitive tasks you do on your computer. Maybe you need to rename a dozen files, move files based on their date, or back up a specific set of folders every day. Doing these manually can be tedious and prone to errors.

**Shell scripting** allows you to automate these repetitive tasks by writing a series of commands in a file, which the shell can then execute sequentially. It’s like writing a recipe for your computer to follow. As Schneider and Gersting mention in "Invitation to Computer Science," operating systems provide command-line interfaces that enable users to interact with system services. Scripting takes this interaction to a whole new level of efficiency.

This is where we start touching upon **CO4 (Develop simple interactive web pages and validate the inputs)**. While web design might seem different, the core principle of taking user input, processing it, and performing an action is similar. Shell scripting teaches us fundamental programming logic: sequencing, decision-making, and repetition – concepts that are transferable to web development and many other areas of computing.

### Your First Bash Script: A Simple "Hello, World!"

Let's start with the classic – the "Hello, World!" program, but in Bash.

**Step 1: Create a file.**
Open a text editor (like `nano`, `vim`, `gedit`, or even Notepad on Windows if using WSL) and type the following:

```bash
#!/bin/bash
# This is my first shell script
echo "Hello, World!"
```

**Let's break this down:**

*   `#!/bin/bash`: This is called a **shebang**. It's crucial! It tells the operating system which interpreter should be used to execute the script. In this case, it's Bash. Without this, the system might not know how to run your script. Think of it as a special label on a package that tells the postal service which carrier to use.
*   `# This is my first shell script`: Lines starting with `#` are **comments**. They are ignored by the shell but are essential for human readers to understand what the script does. Good commenting is a hallmark of well-written scripts.
*   `echo "Hello, World!"`: The `echo` command is a built-in Bash command that simply prints whatever follows it to the standard output (usually your terminal screen).

**Step 2: Save the file.**
Save this file with a `.sh` extension. A common convention is `hello.sh`.

**Step 3: Make the script executable.**
By default, newly created files don't have permission to be executed. We need to grant them that permission using the `chmod` command.

Open your terminal and navigate to the directory where you saved `hello.sh`. Then, type:

```bash
chmod +x hello.sh
```

`chmod` stands for "change mode," and `+x` means "add execute permission."

**Step 4: Run the script.**
Now, you can execute your script by typing:

```bash
./hello.sh
```

The `./` tells the shell to look for the script in the current directory.

**What you should see:**

```
Hello, World!
```

Congratulations! You've just written and executed your first Bash script. This demonstrates a fundamental concept of **CO1**: using software (the shell and the script) to interact with the system.

### Variables: Storing Information

Just like in any programming language, Bash allows you to store data in **variables**. These are like named containers for your information.

Let's create a script that uses variables:

```bash
#!/bin/bash
name="Alice"
greeting="Hello"

echo "$greeting, $name!"
```

Save this as `greeting.sh`, make it executable (`chmod +x greeting.sh`), and run it (`./greeting.sh`).

**Output:**

```
Hello, Alice!
```

**Key points about variables in Bash:**

*   **Assignment:** You assign a value to a variable using the equals sign (`=`). There should be **no spaces** around the `=`. So, `name = "Alice"` is incorrect; it should be `name="Alice"`.
*   **Using Variables:** To access the value stored in a variable, you prepend it with a dollar sign (`$`). So, to get the value of `name`, you use `$name`.
*   **Quoting:** Notice `echo "$greeting, $name!"`. The double quotes around the string are important. They tell Bash to perform variable substitution (replace `$greeting` with "Hello" and `$name` with "Alice") before printing. If you had used `echo 'Hello, $name!'` (single quotes), the output would be `Hello, $name!` because single quotes prevent variable expansion. This is a common pitfall!

This ability to store and manipulate data is fundamental to computing and relates to **CO2 (Explain the data representations, CPU architectures, and the basic functioning of a computer)** in that you are learning to manage data at a higher level of abstraction.

### Input and Output (I/O)

We've seen `echo` for output. What about input? The `read` command is used to get input from the user.

Let's enhance our greeting script:

```bash
#!/bin/bash
echo "Please enter your name:"
read userName

echo "Hello, $userName! Welcome."
```

Save, make executable, and run.

**Example Interaction:**

```
Please enter your name:
Bob
Hello, Bob! Welcome.
```

Here, the `read userName` command waits for the user to type something and press Enter. Whatever they type is then stored in the variable `userName`. This is a simple example of **user interaction**, which is a stepping stone towards **CO4**.

### Control Flow: Making Decisions

Real-world scripts don't just execute commands linearly. They need to make decisions based on conditions. This is where **control flow** statements come in. The most fundamental of these is the `if` statement.

Imagine you want to check if a file exists before you try to process it.

```bash
#!/bin/bash
filename="my_report.txt"

if [ -f "$filename" ]; then
  echo "File '$filename' exists. Processing..."
  # Commands to process the file would go here
else
  echo "File '$filename' not found. Creating it..."
  touch "$filename" # Create an empty file
fi
```

**Let's dissect this:**

*   `if [ -f "$filename" ]; then`: This is the conditional statement.
    *   `if`: Keyword to start the conditional block.
    *   `[ -f "$filename" ]`: This is the **test condition**.
        *   `[...]`: This is a shorthand for the `test` command.
        *   `-f`: This is a **file test operator**. It checks if the given path (`$filename`) exists and is a regular file. Other useful operators include:
            *   `-d`: Checks if it's a directory.
            *   `-e`: Checks if it exists (file or directory).
            *   `-r`: Checks if it's readable.
            *   `-w`: Checks if it's writable.
            *   `-x`: Checks if it's executable.
        *   `"$filename"`: Again, using double quotes is good practice to handle filenames with spaces.
    *   `then`: Keyword indicating the start of the code block to execute if the condition is true.
*   `else`: Keyword for the code block to execute if the condition is false.
*   `fi`: Keyword to end the `if` statement.

This script demonstrates **conditional logic**, a core programming concept essential for building more complex applications, linking back to the foundational logic required for **CO4**.

### Loops: Repeating Actions

What if you need to perform an action on multiple files, or repeat a command a certain number of times? That's where **loops** come in. The `for` loop is very common in Bash.

Let's say you have a directory with several text files, and you want to display the first line of each:

```bash
#!/bin/bash
for file in *.txt; do
  if [ -f "$file" ]; then
    echo "--- First line of $file ---"
    head -n 1 "$file" # 'head -n 1' displays the first line
  fi
done
```

**Explanation:**

*   `for file in *.txt; do`: This starts the loop.
    *   `*.txt`: This is a **wildcard** (or glob). It expands to a list of all files in the current directory that end with `.txt`. Bash will iterate through each of these filenames, assigning one to the variable `file` in each iteration.
    *   `do`: Keyword indicating the start of the loop's body.
*   `if [ -f "$file" ]; then ... fi`: We still include the check to ensure we're only processing actual files, not directories that might accidentally match `*.txt`.
*   `head -n 1 "$file"`: The `head` command displays the beginning of a file. `-n 1` tells it to show only the first line.
*   `done`: Keyword to end the `for` loop.

This kind of iteration is fundamental for automation. Imagine needing to process hundreds of log files – a loop makes this trivial. This is directly applicable to efficient system management, aligning with **CO1** and **CO3**.

### Functions: Reusable Blocks of Code

As your scripts grow, you'll find yourself repeating certain sequences of commands. **Functions** allow you to define a block of code once and then call it multiple times from different parts of your script. This promotes modularity and makes your scripts cleaner and easier to maintain.

```bash
#!/bin/bash

# Define a function to greet a user
greet_user() {
  local user=$1 # $1 refers to the first argument passed to the function
  echo "Hello, $user! Hope you're having a great day."
}

# Call the function with different names
greet_user "Charlie"
greet_user "Diana"

# Example of passing a variable
my_friend="Eve"
greet_user "$my_friend"
```

**Explanation:**

*   `greet_user() { ... }`: This defines a function named `greet_user`.
*   `local user=$1`: Inside the function, `local` declares a variable that is only visible within that function. `$1` is a special parameter that represents the first argument passed to the function. Bash functions can take arguments just like scripts.
*   `echo "Hello, $user! Hope you're having a great day."`: This is the body of the function.
*   `greet_user "Charlie"`: This is how you *call* the function. The string `"Charlie"` is passed as the first argument.

Functions are essential for building robust and maintainable scripts, a step towards more complex programming paradigms.

### Connecting to Textbooks and Course Outcomes

Throughout this discussion, we've woven in concepts from our recommended reading:

*   **Schneider & Gersting's "Invitation to Computer Science":** Their coverage of operating systems and system software naturally leads into understanding the role of the shell as an interface to these systems. Their discussions on algorithms and programming logic also underpin the control flow and looping structures we've explored.
*   **Englander's "The Architecture of Computer Hardware, Systems Software, & Networking":** While more focused on the "how" of hardware and low-level software, understanding the shell scripting context helps visualize how users interact with the OS to manage the resources discussed in Englander's book, from CPU scheduling to file system access.
*   **Meloni & Kyrnin's "HTML, CSS, and JavaScript All in One":** This might seem distant, but the core idea of **input validation** and creating **interactive user experiences** is common to both shell scripting and web development. A script that checks if a file exists before operating on it is performing a form of input validation, similar to how JavaScript validates form fields on a web page. This directly supports **CO4**.

**Recap on Course Outcomes:**

*   **CO1 (Identify the fundamental components and the working of an IT environment):** Shell scripting provides a direct way to interact with and manage OS components (like files, processes, users) and understand how they function together.
*   **CO2 (Explain the data representations, CPU architectures, and the basic functioning of a computer):** While not directly manipulating bits and bytes, shell scripting teaches you to manage data (variables, files) and instruct the CPU to perform tasks, giving a practical perspective on computer functioning.
*   **CO3 (Explain the operating systems, computer network architecture, and necessary protocols used):** The shell is the primary gateway to the OS. Scripts can be written to manage network configurations, check network status, and even interact with protocols.
*   **CO4 (Develop simple interactive web pages and validate the inputs):** The logic of taking input, processing it based on conditions, and producing output is shared between shell scripting and web development. Understanding `if` statements, loops, and basic validation in Bash builds a strong foundation for this.

### Common Pitfalls and Exam Tips

*   **Spaces around `=` when assigning variables:** This is a classic mistake. `my_var = 5` is wrong; it must be `my_var=5`.
*   **Quoting:** Forgetting double quotes around variables in commands like `echo` or `if` can lead to unexpected behavior if filenames or strings contain spaces. Always default to using double quotes for variables: `"$my_var"`.
*   **Shebang (`#!/bin/bash`):** Ensure it's the very first line of your script, with no leading whitespace.
*   **Permissions:** Forgetting `chmod +x` is why scripts sometimes don't run. Always check permissions.
*   **Syntax of `if` statements:** Pay close attention to the spaces inside the square brackets `[ ]`. `[ -f "$file" ]` is correct; `[-f "$file"]` or `[ -f "$file" ]` (no space before `]`) will cause errors.

When studying for exams, focus on understanding the purpose of each command (`echo`, `read`, `chmod`, `head`) and the syntax of control flow statements (`if`, `for`). Be prepared to write small scripts or explain what a given script will do.

### Conclusion

Bash scripting is an incredibly powerful tool for anyone working with computers, especially in a Linux/macOS environment. It empowers you to automate tasks, manage your system efficiently, and gain a deeper understanding of how your operating system works. It’s a skill that complements your knowledge of hardware and system software, making you a more capable and versatile IT professional.

Remember this: **the ability to automate is the ability to scale.** Start small, practice consistently, and you'll soon be writing scripts that save you hours of work!

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** What is the primary role of a shell in a computer system?
    **Answer:** The primary role of a shell is to act as an **interface** between the user and the operating system's kernel. It interprets user commands and translates them into instructions that the kernel can execute, thereby managing system resources and running programs.

2.  **Question:** Explain the purpose of the shebang line (`#!/bin/bash`) in a shell script.
    **Answer:** The shebang line, typically `#!/bin/bash`, is the very first line of a script. It is an **interpreter directive** that tells the operating system which program (in this case, the Bash interpreter) should be used to execute the commands contained within the script. Without it, the system might not know how to run the script.

3.  **Question:** Differentiate between single quotes (`'`) and double quotes (`"`) when used with variables in Bash.
    **Answer:**
    *   **Double quotes (`"`)** allow for **variable expansion** and command substitution. For example, `echo "Hello, $name"` will replace `$name` with its value.
    *   **Single quotes (`'`)** prevent any expansion. They treat the enclosed text literally. For example, `echo 'Hello, $name'` will output `Hello, $name` exactly as written, without substituting the variable's value.

**Exam-Oriented Questions:**

4.  **Question:** Analyze the following Bash script and predict its output.

    ```bash
    #!/bin/bash
    fruit="apple"
    if [ "$fruit" = "banana" ]; then
      echo "It's a banana!"
    elif [ "$fruit" = "apple" ]; then
      echo "It's an apple!"
    else
      echo "It's something else."
    fi
    ```
    **Answer:** The script initializes a variable `fruit` to "apple". The `if` statement checks if `fruit` equals "banana" (which is false). The `elif` statement then checks if `fruit` equals "apple" (which is true). Therefore, the script will output:
    ```
    It's an apple!
    ```
    **Reasoning:** The `if`/`elif`/`else` structure evaluates conditions sequentially. Once a true condition is met, its corresponding block is executed, and the rest of the structure is skipped. The double equals sign (`=`) is used for string comparison within `[` `]`.

5.  **Question:** Write a Bash script that prompts the user for a number, checks if it's an even number, and prints a message indicating whether it's even or odd.
    **Answer:**

    ```bash
    #!/bin/bash

    echo "Please enter an integer:"
    read number

    # The modulo operator (%) gives the remainder of a division.
    # If a number divided by 2 has a remainder of 0, it's even.
    if (( number % 2 == 0 )); then
      echo "$number is an even number."
    else
      echo "$number is an odd number."
    fi
    ```
    **Reasoning:** This script uses `read` to get user input. The `(( ))` syntax in Bash is used for arithmetic evaluation. The modulo operator `%` calculates the remainder. If `number % 2` equals 0, the number is even. The `if` statement handles the decision, and `echo` displays the result. This demonstrates input handling and conditional logic, supporting **CO4**.
