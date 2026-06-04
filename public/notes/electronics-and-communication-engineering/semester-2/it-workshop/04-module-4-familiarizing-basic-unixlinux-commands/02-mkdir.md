---
title: "mkdir"
subject: "IT WORKSHOP"
module: "Module 4: Familiarizing basic Unix/Linux commands "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da47b"
status: "completed"
scrapedAt: "2026-05-23T17:39:49.001Z"
---
# IT WORKSHOP: Module 4 - Familiarizing Basic Unix/Linux Commands

## Topic: `mkdir` - Creating Directories

Welcome back, everyone! In this session, we're going to dive into one of the most fundamental operations you'll perform in a Unix/Linux environment: creating directories. Think of directories as folders on your computer, where you organize your files. The command we use for this is `mkdir`.

### Why Do We Need Directories?

Imagine trying to keep all your school assignments, personal photos, and downloaded software all in one giant pile. It would be chaos, right? Directories are our way of bringing order to this digital chaos. They allow us to group related files, making it easier to find, manage, and back up our data.

This concept of organizing information is not just for computers; it's a fundamental principle across many areas of IT. For instance, when we talk about managing code versions using Git, as described in *Mastering Git* by Jakub Narębski, you’ll find that organizing your projects into distinct directories is crucial for keeping different versions or branches of your code separate and manageable. Similarly, in web development, as touched upon in *HTML, CSS, and JavaScript - All in One* by Meloni and Kyrnin, you'll create directories for your images, your stylesheets (CSS), and your JavaScript files to keep your website’s structure clean and maintainable.

Our ability to effectively use the command line, including commands like `mkdir`, directly relates to **Course Outcome 2: Make use of the command line of Linux operating system and shell programming (Knowledge Level: K3)**. By mastering these basic commands, you're building the foundation for more advanced shell scripting and system administration tasks.

### The `mkdir` Command: Your Digital Folder Creator

The `mkdir` command is short for "make directory." It's incredibly straightforward: you tell it what you want to name a new directory, and it creates it for you.

Let's start with the most basic usage. Suppose you’re working on your IT Workshop assignments and you want to create a new directory specifically for Module 4.

**Basic Syntax:**

```bash
mkdir directory_name
```

**Example:**

If you are currently in your home directory (which is a common starting point), and you want to create a directory called `module4`, you would type:

```bash
mkdir module4
```

After you press Enter, if everything is successful, you won't see any output. This is typical in Unix/Linux – success is often silent! To confirm it worked, you can use another command called `ls` (which stands for "list"), to see the contents of your current directory.

```bash
ls
```

You should now see `module4` listed among the files and directories.

**Relatable Analogy:** Think of this like going into your physical office and deciding to create a new file folder labeled "IT Workshop - Module 4" and placing it in your filing cabinet. The `mkdir module4` command does precisely that in the digital world.

### Creating Multiple Directories at Once

What if you need to create several directories at the same time? Perhaps you want to set up directories for all the modules in your IT Workshop. You don't have to run `mkdir` multiple times. You can list all the directory names you want to create, separated by spaces.

**Syntax:**

```bash
mkdir directory1 directory2 directory3 ...
```

**Example:**

To create directories for modules 1 through 4, you could do this:

```bash
mkdir module1 module2 module3 module4
```

Again, use `ls` to verify that all these directories have been created. This is a great time-saver!

### Creating Nested Directories: The Power of `-p`

Now, let's talk about something really useful: creating directories within other directories. Sometimes, you want to create a whole structure of directories at once. For instance, you might want a directory for "IT Workshop," and inside that, a directory for "Module 4," and then inside "Module 4," a directory for "Assignments."

If you try to create a directory inside a directory that doesn't exist yet, `mkdir` will give you an error. For example, if `IT_Workshop` doesn't exist and you try:

```bash
mkdir IT_Workshop/Module4
```

You'll likely get an error message like "cannot create directory 'IT_Workshop/Module4': No such file or directory." This is because the parent directory (`IT_Workshop` in this case) doesn't exist.

However, `mkdir` has a very handy option called `-p` (which stands for "parents"). This option tells `mkdir` to create any necessary parent directories as well. It's like saying, "If the path to this new directory doesn't exist, build it for me along the way."

**Syntax with `-p`:**

```bash
mkdir -p path/to/your/new_directory
```

**Example:**

Let's create that nested structure we talked about:

```bash
mkdir -p IT_Workshop/Module4/Assignments
```

This single command will:
1. Check if `IT_Workshop` exists. If not, it creates it.
2. Then, it checks if `IT_Workshop/Module4` exists. If not, it creates it.
3. Finally, it creates `IT_Workshop/Module4/Assignments`.

This is a huge convenience and helps you build complex directory structures efficiently, saving you from multiple `mkdir` commands and error handling. This is particularly relevant when considering **Course Outcome 2**, as building organized file structures is a key aspect of command-line proficiency.

### Understanding Paths

When you use `mkdir -p IT_Workshop/Module4/Assignments`, we are using a **path**. A path tells the system where to find or create a file or directory.

*   **Absolute Path:** Starts from the root directory (`/`) and specifies the full location. For example, `/home/yourusername/IT_Workshop/Module4`.
*   **Relative Path:** Specifies the location relative to your current directory. In our example, `IT_Workshop/Module4/Assignments` is a relative path if you are currently in your home directory (or a directory that contains `IT_Workshop`).

This understanding of paths is fundamental and is a concept that is also vital when you start working with file systems and networking, as hinted at in *The Architecture of Computer Hardware, Systems Software, & Networking* by Irv Englander. Knowing how to navigate and specify locations is a core IT skill.

### Permissions and `mkdir`

By default, when `mkdir` creates a directory, it assigns certain permissions. These permissions determine who can read, write, and execute within that directory. For most users, the default permissions are usually sufficient. If you encounter situations where you need to adjust these, other commands like `chmod` come into play, but for now, just know that directories are created with sensible default access rights. This ties into **Course Outcome 1 (Knowledge Level: K3)** as it relates to how software systems (the command line) interact with the underlying file system structure, which has its own set of rules and permissions.

### Common Pitfalls and Exam Tips

*   **Typos:** Always double-check the spelling of your directory names. A simple typo can lead to an error or the creation of an unintended directory.
*   **Spaces in Names:** While you *can* create directories with spaces in their names (e.g., `mkdir "My Documents"`), it's generally a good practice to avoid spaces in directory and file names on Linux. If you must use spaces, enclose the name in quotes (`"..."`) or escape the space with a backslash (`\ `). For example: `mkdir My\ Documents`. This avoids confusion with the shell interpreting the space as a separator between arguments.
*   **Forgetting `-p`:** A common mistake when starting out is forgetting the `-p` option when creating nested directories. Remember, `mkdir -p` is your best friend for building directory trees!
*   **Current Directory:** Always be mindful of where you are in the file system (your "current working directory") when creating directories. Use `pwd` (print working directory) to see where you are.

**Exam Question Hint:** You might be asked to create a specific directory structure or to explain how to create nested directories. Always remember the `-p` option for the latter.

### Summary

The `mkdir` command is your essential tool for creating directories in Unix/Linux.
*   Use `mkdir directory_name` to create a single directory.
*   Use `mkdir dir1 dir2 dir3` to create multiple directories at once.
*   Use `mkdir -p path/to/new/directory` to create a directory and any necessary parent directories along the way.

Mastering `mkdir` is a foundational step in becoming comfortable with the Linux command line, directly contributing to **Course Outcome 2**. It’s the first step in organizing your digital workspace effectively.

---

## Sample Questions and Answers

**1. Conceptual Question:** What is the primary purpose of the `mkdir` command in Unix/Linux?

**Answer:** The primary purpose of the `mkdir` command is to create new directories (folders) within the file system. Directories are used to organize files and other directories, helping to structure and manage data efficiently.

**2. Exam-Oriented Question:** You are tasked with creating a directory structure for your IT Workshop projects. You need to create a main directory named `IT_Workshop`, and inside it, a subdirectory for `Module_5` and another subdirectory within `Module_5` called `Practical_Exercises`. Assuming you are currently in your home directory, what single command would accomplish this?

**Answer:**
```bash
mkdir -p IT_Workshop/Module_5/Practical_Exercises
```
**Reasoning:** The `-p` option is crucial here because it ensures that if `IT_Workshop` or `IT_Workshop/Module_5` do not already exist, they will be created automatically before `Practical_Exercises` is created. This creates the entire nested structure in one go. Without `-p`, the command would fail if `IT_Workshop` or `Module_5` didn't exist.

**3. Conceptual Question:** Explain the difference between `mkdir mydir` and `mkdir -p mydir/subdir` when `mydir` does not exist.

**Answer:**
*   `mkdir mydir`: This command will create a single directory named `mydir` in the current working directory. If `mydir` already exists, it will produce an error.
*   `mkdir -p mydir/subdir`: This command will create the directory `subdir` and, importantly, any necessary parent directories. If `mydir` does not exist, it will be created first, and then `subdir` will be created inside it. If both `mydir` and `mydir/subdir` already exist, the command will simply do nothing and not produce an error. The `-p` flag makes it "parent-aware" and "idempotent" (meaning it can be run multiple times without changing the result after the first successful execution).

**4. Exam-Oriented Question:** You want to create three directories named `reports`, `archives`, and `logs` in your current location. Which of the following commands is the most efficient way to do this?

a) `mkdir reports` then `mkdir archives` then `mkdir logs`
b) `mkdir reports archives logs`
c) `mkdir -p reports archives logs`
d) `mkdir reports && mkdir archives && mkdir logs`

**Answer:** b) `mkdir reports archives logs`
**Reasoning:** Option (b) is the most direct and efficient way to create multiple directories at once by listing their names separated by spaces. Option (c) would also work but the `-p` flag is unnecessary here since we are not creating nested directories. Option (a) and (d) are functional but require multiple command invocations, making them less efficient than option (b) for this specific task.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
