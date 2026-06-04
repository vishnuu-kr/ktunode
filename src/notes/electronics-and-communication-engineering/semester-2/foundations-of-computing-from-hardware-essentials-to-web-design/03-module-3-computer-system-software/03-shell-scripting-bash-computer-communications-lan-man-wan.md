---
title: "Shell scripting (bash). Computer Communications – LAN, MAN, WAN"
subject: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN"
module: "Module 3: Computer System Software "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da2de"
status: "completed"
scrapedAt: "2026-05-23T17:39:23.343Z"
---
## Module 3: Computer System Software - Shell Scripting (Bash) & Computer Communications (LAN, MAN, WAN)

Welcome everyone! In this module, we're going to dive into two crucial areas that make our computing world tick. First, we'll explore **Shell Scripting, specifically with Bash**, which is like the command-line secret sauce that lets us talk directly to our operating system and automate tasks. Then, we'll broaden our horizons to **Computer Communications**, understanding how devices connect and share information across different scales – from your local office to the global internet. This module directly ties into understanding the fundamental components of an IT environment (CO1), how operating systems work (CO3), and even lays groundwork for building interactive web pages (CO4).

### Part 1: Shell Scripting with Bash – Your Command-Line Power Tool

Think of your computer's operating system as a bustling city. You have the hardware as the buildings and roads, the applications are the businesses and people, and the operating system itself is the city council and infrastructure management. But how do you, as a user, interact with this complex system? You could use the graphical interface (like clicking icons and menus), but sometimes, you need to give more direct, powerful instructions. That's where the **shell** comes in.

The shell is an **interpreter**. It takes the commands you type in and translates them into instructions that the operating system can understand and execute. Different operating systems have different shells. Windows has PowerShell and the Command Prompt, while Linux and macOS primarily use shells like Bash. **Bash**, which stands for **Bourne Again SHell**, is the most common and powerful shell on Linux and macOS systems, and it’s what we’ll focus on.

**Why Learn Bash Scripting?**

Imagine you have a repetitive task, like renaming a hundred files, or checking the disk space on multiple servers every day. Doing this manually would be incredibly tedious and error-prone. This is where **scripting** shines. A **shell script** is simply a text file containing a sequence of shell commands. When you execute this file, the shell runs those commands one after another, automating the entire process. This is a core concept for understanding how operating systems manage resources and execute tasks, directly impacting CO1 and CO3.

**Your First Bash Script: "Hello, World!"**

Let’s start with the classic. Open a text editor (like `nano` or `vim` in Linux/macOS, or even Notepad++ on Windows if you have a Linux environment) and type the following:

```bash
#!/bin/bash
# This is my first bash script
echo "Hello, World!"
```

Let’s break this down:

*   `#!/bin/bash`: This is called the **shebang**. It's absolutely vital! It tells the operating system which interpreter to use to execute the script. In this case, it’s specifying the Bash interpreter located at `/bin/bash`. Without it, the system might try to run your script with the wrong shell, leading to errors. *Remember this line; it’s fundamental for any Bash script.*

*   `# This is my first bash script`: Anything on a line starting with `#` is a **comment**. Comments are ignored by the shell; they are purely for human readers to understand what the script is doing. Good commenting is a hallmark of well-written scripts, making your code understandable for yourself and others.

*   `echo "Hello, World!"`: The `echo` command is one of the most basic but useful commands. It simply prints whatever text you give it to the standard output (usually your terminal screen). So, when you run this script, you’ll see “Hello, World!” displayed.

**Saving and Executing Your Script**

1.  **Save:** Save the file with a `.sh` extension (though it's not strictly required, it’s a convention). Let's say you save it as `hello.sh`.
2.  **Make Executable:** By default, a new text file doesn't have permission to be executed as a program. You need to grant it permission using the `chmod` command:
    ```bash
    chmod +x hello.sh
    ```
    `chmod` stands for "change mode," and `+x` means "add execute permission."

3.  **Run:** Now you can run your script:
    ```bash
    ./hello.sh
    ```
    The `./` is important! It tells the shell to look for the executable file (`hello.sh`) in the current directory.

**Key Bash Concepts You'll Use Constantly:**

1.  **Variables:** Variables are like containers that hold information. You can assign values to them and use those values later in your script.

    ```bash
    #!/bin/bash
    MY_NAME="Alice"
    echo "Hello, $MY_NAME!"
    ```

    Here, `MY_NAME` is a variable holding the string "Alice". When `echo` encounters `$MY_NAME`, it substitutes the value of the variable. *Notice the `$` prefix; this is how you refer to a variable's value.* You can assign numbers, strings, and even the output of commands to variables.

2.  **Input and Output (I/O) Redirection:** Bash allows you to control where commands get their input from and where they send their output.
    *   **Output Redirection (`>` and `>>`):**
        *   `>`: Redirects output to a file, **overwriting** the file if it exists.
            ```bash
            echo "This will overwrite the file." > output.txt
            ```
        *   `>>`: Redirects output to a file, **appending** to the end of the file if it exists.
            ```bash
            echo "This will be added to the file." >> output.txt
            ```
    *   **Input Redirection (`<`):** Reads input from a file.
        ```bash
        grep "error" < logfile.txt
        ```
        This would search for lines containing "error" within `logfile.txt`.

3.  **Pipes (`|`):** This is a really powerful concept. A pipe connects the standard output of one command to the standard input of another. It’s like an assembly line for data.

    ```bash
    ls -l | grep ".txt"
    ```
    Here, `ls -l` lists files in a detailed format. The pipe `|` sends that entire list to `grep ".txt"`, which then filters the list, showing only the lines (files) that contain ".txt". This is a fundamental way to chain commands and perform complex operations efficiently, directly supporting CO3 by showing how commands can work together.

4.  **Control Structures:** Like any programming language, Bash has ways to control the flow of execution.
    *   **Conditional Statements (`if`, `elif`, `else`):** These let your script make decisions.

        ```bash
        #!/bin/bash
        NUM=10
        if [ $NUM -gt 5 ]; then
            echo "The number is greater than 5."
        elif [ $NUM -eq 5 ]; then
            echo "The number is exactly 5."
        else
            echo "The number is less than 5."
        fi
        ```
        *   `[ ]` or `[[ ]]` are used for testing conditions.
        *   `-gt` means "greater than," `-eq` means "equal to," `-lt` means "less than," etc.
        *   `then`, `elif`, `else`, and `fi` (which is `if` spelled backward) are keywords.

    *   **Loops (`for`, `while`):** These allow you to repeat commands.

        **`for` loop:** Great for iterating over a list of items.

        ```bash
        #!/bin/bash
        for file in *.txt; do
            echo "Processing file: $file"
        done
        ```
        This script would loop through all files ending with `.txt` in the current directory and print a message for each.

        **`while` loop:** Repeats as long as a condition is true.

        ```bash
        #!/bin/bash
        COUNT=1
        while [ $COUNT -le 5 ]; do
            echo "Count is: $COUNT"
            COUNT=$((COUNT + 1)) # Arithmetic expansion
        done
        ```
        Notice `$((COUNT + 1))`. This is how you perform arithmetic in Bash.

5.  **Command Substitution:** You can capture the output of a command and use it as part of another command or assign it to a variable. We saw this implicitly with variables, but it can be done directly.

    ```bash
    CURRENT_DATE=$(date)
    echo "Today's date is: $CURRENT_DATE"
    ```
    The command `date` is executed, and its output is captured by `$()` and assigned to `CURRENT_DATE`.

**Real-World Bash Scripting Examples:**

*   **Automated Backups:** A script could find all `.conf` files in a directory, compress them using `tar` and `gzip`, and then move the archive to a backup location.
*   **System Monitoring:** A script could periodically check the CPU load (`top`), disk usage (`df`), and memory usage (`free`), and email an alert if any metric exceeds a certain threshold. This is crucial for system administration, linking back to CO1 and CO3.
*   **Log File Analysis:** A script could process web server logs to count the number of unique visitors or identify the most frequent IP addresses making requests.
*   **File Management:** Renaming multiple files based on a pattern, deleting temporary files older than a week, or organizing downloaded files into specific folders.

**Exam Tip:** Be prepared to write simple Bash scripts or interpret existing ones. Understanding variables, `echo`, `chmod`, `ls`, `grep`, pipes (`|`), and basic `if` statements and `for` loops is often tested. Pay attention to syntax: the dollar sign for variables, spaces around brackets in conditions, and the shebang line.

---

### Part 2: Computer Communications – Connecting the World (LAN, MAN, WAN)

Now, let's shift gears and talk about how computers talk to each other. In our IT environment (CO1), communication is everything. Whether it's sending an email, browsing a website, or accessing shared files, it all relies on networks. Networks allow us to share resources, collaborate, and access information. We're going to look at the different scales of these networks.

Think of it like different types of roads:
*   A small road within your neighborhood (your house to your friend's house next door).
*   A main street connecting different neighborhoods in your town.
*   A highway system connecting cities across the country.

These correspond to the three main types of networks: **Local Area Network (LAN)**, **Metropolitan Area Network (MAN)**, and **Wide Area Network (WAN)**. Understanding these is fundamental to CO1 and CO3.

#### Local Area Network (LAN)

A **LAN** connects computers and devices within a limited geographical area, typically a single building or a small group of adjacent buildings. Think of your home network, your office network, or the computer lab at your school.

*   **Purpose:** To share resources like printers, files, and internet connections.
*   **Characteristics:**
    *   **High Speed:** Data transfer rates are usually very fast within a LAN.
    *   **Low Latency:** The time it takes for data to travel is minimal because distances are short.
    *   **Ownership:** Typically owned and managed by a single organization or individual.
    *   **Technologies:** Ethernet is the most common technology for wired LANs. Wi-Fi (Wireless Fidelity) is the standard for wireless LANs (WLANs).
*   **Components:**
    *   **Computers/Devices:** Desktops, laptops, smartphones, printers, servers.
    *   **Network Interface Cards (NICs):** Built into devices to allow them to connect to the network.
    *   **Cables:** Ethernet cables (like Cat 5e, Cat 6) for wired connections.
    *   **Switches:** Devices that connect multiple devices in a LAN and intelligently forward data only to the intended recipient.
    *   **Routers:** Often used to connect a LAN to other networks, like the internet, and to manage traffic between them.
    *   **Access Points:** For wireless connectivity.

*   **Example:** When you connect your laptop to your home Wi-Fi, you're joining your home **LAN**. Your laptop communicates with the Wi-Fi router, which then connects you to the internet (a WAN). If you have a printer on your home network, your laptop can send print jobs to it directly over the LAN.

*   **Connection to Course Outcomes:** Understanding the LAN helps us grasp the fundamental physical and logical components of an IT environment (CO1) and how devices interact at a local level, which is a building block for understanding broader network architectures (CO3).

#### Metropolitan Area Network (MAN)

A **MAN** is larger than a LAN but smaller than a WAN. It typically spans a city or a large campus. Think of it as a network connecting multiple LANs within a metropolitan area.

*   **Purpose:** To interconnect LANs across a city, often for organizations with multiple branches in different locations within the same city, or to provide high-speed internet access to residents.
*   **Characteristics:**
    *   **Moderate to High Speed:** Faster than WANs typically, but slower than LANs.
    *   **Ownership:** Can be owned by a single large organization or by a consortium of organizations, or by a service provider.
    *   **Technologies:** Often uses fiber optic cables, WiMAX, or high-speed leased lines.
*   **Example:** A university campus with several buildings spread across a city might use a MAN to connect the LANs in each building. Or, a city government might use a MAN to connect its various municipal offices. Internet Service Providers (ISPs) often build MANs to provide broadband internet to homes and businesses within a city.

*   **Connection to Course Outcomes:** MANs illustrate how local networks can be interconnected to cover a larger area, expanding our understanding of network architecture beyond a single building (CO3).

#### Wide Area Network (WAN)

A **WAN** covers a broad geographical area, connecting LANs and MANs across countries or even continents. The most famous example of a WAN is the **Internet**.

*   **Purpose:** To connect geographically dispersed locations, enabling global communication and access to resources.
*   **Characteristics:**
    *   **Lower Speed (compared to LANs):** Data travels much longer distances, often through multiple hops, which increases latency and reduces speeds.
    *   **Higher Latency:** The time for data to travel is significantly longer.
    *   **Ownership:** Typically not owned by a single entity. It's a collection of interconnected networks owned by various organizations (ISPs, telecommunication companies, governments, etc.).
    *   **Technologies:** Uses a wide variety of technologies including leased lines, fiber optic cables, satellite links, cellular networks, and packet-switching technologies.
*   **Components:**
    *   **Routers:** Essential for directing traffic between different networks.
    *   **Gateways:** Connect dissimilar networks.
    *   **Modems:** Convert digital signals to analog signals for transmission over telephone lines (though less common now with fiber).
    *   **Telecommunication links:** The physical infrastructure (cables, satellites) that carry data over long distances.
*   **Example:** When you visit a website hosted on a server in another country, your request travels from your home LAN, through your ISP's network (potentially a MAN), across several interconnected WANs (like the internet backbone), to the server, and then the response travels back the same way. This entire journey highlights the complexity and scale of WANs.

*   **Connection to Course Outcomes:** WANs are central to understanding computer network architecture and the protocols that enable global communication (CO3). The internet, as a WAN, is the foundation of much of modern IT and web development.

**Putting It All Together: Network Hierarchy**

These network types often work together in a hierarchical manner:
*   Many **LANs** within an organization or community might be connected to form a **MAN**.
*   Multiple **MANs** and **LANs** across the globe are interconnected to form the vast **WAN** known as the Internet.

This layered approach is crucial for managing the complexity and scale of modern communication systems.

**Exam Tip:** Be ready to define LAN, MAN, and WAN, and explain their key differences in terms of geographical scope, speed, latency, and ownership. You might be asked to provide examples of each or describe how they interoperate. Understanding the role of routers and switches in connecting these networks is also important for CO3.

---

### Conclusion for Module 3

We've covered a lot today! We saw how **Bash scripting** gives you powerful control over your operating system, allowing you to automate tasks and become more efficient. Remember the shebang (`#!/bin/bash`), variables (`$VAR`), commands like `echo`, `chmod`, `ls`, `grep`, and the power of pipes (`|`) and redirection (`>`, `>>`). Bash is your gateway to mastering the command line.

Simultaneously, we explored the world of **computer communications**, understanding how devices connect through **LANs** (local), **MANs** (metropolitan), and **WANs** (wide area), with the Internet being the prime example of a WAN. These networks are the arteries of our digital world, enabling everything from local file sharing to global access to information.

Mastering these concepts will solidify your understanding of how IT environments function, how operating systems manage resources, and how data moves across vast distances, all of which are foundational for your journey in computing.

---

### Sample Questions with Answers

**1. Conceptual Question:** What is the primary function of a "shebang" line in a Bash script, and why is it important?

*   **Answer:** The shebang line (e.g., `#!/bin/bash`) specifies the interpreter that should be used to execute the script. It's crucial because it tells the operating system exactly which program (in this case, the Bash shell) should process the commands within the script. Without it, the system might try to execute the script with an incorrect interpreter, leading to errors.

**2. Exam-Oriented Question:** You have a directory with many `.jpg` image files. You want to create a script that lists all these files, but you only want to see the ones whose names contain the word "holiday". Which Bash commands would you use in combination to achieve this?

*   **Answer:** You would use `ls` to list the files and `grep` to filter them. The output of `ls` can be piped (`|`) to `grep`.
    ```bash
    ls *.jpg | grep holiday
    ```
    *   `ls *.jpg`: Lists all files ending with `.jpg`.
    *   `|`: Pipes the output of `ls` to the input of `grep`.
    *   `grep holiday`: Filters the input and displays only lines containing the word "holiday".

**3. Conceptual Question:** Describe the key differences between a LAN and a WAN, particularly concerning their typical geographical scope and data transfer speeds.

*   **Answer:**
    *   **LAN (Local Area Network):** Covers a small geographical area (e.g., a single building). It typically offers very high data transfer speeds and low latency because of the short distances involved. Ownership is usually by a single entity.
    *   **WAN (Wide Area Network):** Covers a large geographical area (e.g., cities, countries, continents). Data transfer speeds are generally lower, and latency is higher due to longer distances and multiple network hops. WANs are often a collection of interconnected networks owned by various entities, with the Internet being the most prominent example.

**4. Exam-Oriented Question:** Write a simple Bash script that declares a variable `USER_HOME` and assigns it the value of your home directory using a built-in command substitution. Then, it should print a message: "Your home directory is: [your home directory]".

*   **Answer:**
    ```bash
    #!/bin/bash

    # Assign the home directory to the variable using command substitution
    USER_HOME=$(pwd) # 'pwd' command prints the current working directory, often used as a proxy for home in simple scripts.
                     # For a more robust solution, you'd use $HOME or expand_path in specific shells if needed.
                     # For learning purposes, pwd is clear.

    # Print the message
    echo "Your home directory is: $USER_HOME"
    ```
    *   **Explanation:** `$(pwd)` executes the `pwd` command and substitutes its output (your current directory) into the `USER_HOME` variable. `echo` then prints the formatted message. *Note: If the script was run from somewhere other than the home directory, `pwd` would show that location. For a guaranteed home directory, `$HOME` is often preferred, but `$(pwd)` demonstrates command substitution.*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
