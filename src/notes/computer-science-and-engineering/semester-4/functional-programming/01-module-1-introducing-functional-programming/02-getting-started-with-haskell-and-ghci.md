---
title: "Getting Started with Haskell and GHCi"
subject: "FUNCTIONAL PROGRAMMING"
module: "Module 1: Introducing Functional Programming"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b0d5"
status: "completed"
scrapedAt: "2026-05-20T16:13:06.286Z"
---
# FUNCTIONAL PROGRAMMING - Module 1: Introducing Functional Programming - Getting Started with Haskell and GHCi

These notes cover the basics of getting started with Haskell and GHCi, the interactive environment for Haskell.

**Learning Outcomes:**

*   Install Haskell and GHCi.
*   Understand the basic syntax of Haskell.
*   Evaluate simple Haskell expressions in GHCi.
*   Define and use simple functions in GHCi.
*   Load and execute Haskell source files in GHCi.
*   Understand basic GHCi commands.

## 1. Installation of Haskell and GHCi

*   **The Haskell Platform:** The easiest way to install Haskell is through the Haskell Platform.  It includes the GHC (Glasgow Haskell Compiler), GHCi, cabal (the package manager), and other essential tools.

    *   **Installation Steps:**
        1.  **Download:**  Go to the Haskell Platform website (usually via Google search: "Haskell Platform") and download the installer appropriate for your operating system (Windows, macOS, Linux).
        2.  **Installation:** Run the installer and follow the on-screen instructions.  Accept the default options if you're unsure.  Make sure the installer adds Haskell and GHCi to your system's PATH environment variable. This is usually an option presented during installation and should be checked/selected.
        3.  **Verification:**  After installation, open a terminal or command prompt and type `ghci`. If GHCi starts up, the installation was successful.

*   **Alternatively: Stack:** Stack is a build tool and package manager for Haskell that can be used instead of the Haskell Platform. It provides isolated environments for your projects, which can help avoid dependency conflicts.

    *   **Installation:** Follow the instructions on the Stack website ([https://docs.haskellstack.org/en/stable/install_and_upgrade/](https://docs.haskellstack.org/en/stable/install_and_upgrade/)). This usually involves downloading and running a small installer script.
    *   **Using Stack:** With Stack installed, you can create a new Haskell project with `stack new my-project`.

## 2. Understanding Basic Haskell Syntax

*   **Expressions:** Haskell programs are built from expressions.  An expression evaluates to a value.  Examples:
    *   `2 + 2` (evaluates to 4)
    *   `"Hello, world!"` (evaluates to the string "Hello, world!")
    *   `True` (evaluates to the boolean value True)

*   **Values:** Values are the results of evaluating expressions.
    *   `4` is a value.
    *   `"Hello, world!"` is a value.
    *   `True` is a value.

*   **Types:** Every expression and value in Haskell has a type.  The type indicates the kind of value it represents.  Some common types:
    *   `Int`:  Integers (e.g., `-2`, `0`, `42`)
    *   `Float`: Floating-point numbers (e.g., `3.14`, `-2.71`)
    *   `Double`:  Double-precision floating-point numbers (more precision than `Float`)
    *   `Bool`: Boolean values (`True` or `False`)
    *   `Char`: Characters (e.g., `'a'`, `'?'`, `' '`)
    *   `String`:  Sequences of characters (e.g., `"Hello"`)  - equivalent to `[Char]` (list of Characters)

*   **Function Application:** Functions are applied to arguments by writing the function name followed by the arguments, separated by spaces. No parentheses or commas are required (except for precedence control).
    *   Example: `sqrt 16`  (applies the `sqrt` function to the argument `16`)
    *   Example: `max 10 20` (applies the `max` function to the arguments `10` and `20`)

*   **Comments:**
    *   Single-line comments start with `--` (two hyphens).
        *   `-- This is a comment.`
    *   Multi-line comments are enclosed in `{- ... -}`.
        *   `{- This is a
            multi-line
            comment. -}`

*   **Whitespace:** Haskell is layout-sensitive.  Indentation matters.  Generally, code within a block (e.g., the body of a function) should be indented more than the code that defines the block.

*   **Operators:** Standard arithmetic and logical operators are available:
    *   `+` (addition)
    *   `-` (subtraction)
    *   `*` (multiplication)
    *   `/` (division)
    *   `^` (exponentiation)
    *   `==` (equality)
    *   `/=` (inequality)  (Note: different from most languages where it's `!=`)
    *   `<` (less than)
    *   `>` (greater than)
    *   `<=` (less than or equal to)
    *   `>=` (greater than or equal to)
    *   `&&` (logical AND)
    *   `||` (logical OR)
    *   `not` (logical NOT)

## 3. Evaluating Simple Haskell Expressions in GHCi

*   **Starting GHCi:** Open a terminal or command prompt and type `ghci`. You should see a prompt like `Prelude>`.

*   **Evaluating Expressions:** Type an expression at the prompt and press Enter. GHCi will evaluate the expression and print the result, along with its type.
    *   Example:
        ```
        Prelude> 2 + 2
        4
        Prelude> "Hello, " ++ "world!"  -- ++ concatenates strings
        "Hello, world!"
        Prelude> sqrt 25
        5.0
        ```

*   **Type Checking:** Use the `:type` (or `:t`) command to check the type of an expression without evaluating it.
    *   Example:
        ```
        Prelude> :type 2 + 2
        2 + 2 :: Num a => a
        Prelude> :type "Hello"
        "Hello" :: [Char]  -- or String
        Prelude> :type True
        True :: Bool
        ```
        The `Num a => a` type for `2+2` means "for any type `a` that is an instance of the `Num` typeclass, the result will be of type `a`." `Num` is a typeclass for numeric types (like `Int`, `Float`, `Double`).

## 4. Defining and Using Simple Functions in GHCi

*   **Function Definition:**  Use the following syntax to define a function in GHCi:
    ```
    let functionName argument1 argument2 = expression
    ```
    The `let` keyword is required in GHCi to introduce new bindings (like functions).

*   **Example:** Defining a function to square a number:
    ```
    Prelude> let square x = x * x
    Prelude> square 5
    25
    Prelude> square 3.14
    9.8596
    ```

*   **Multiple Arguments:** Functions can take multiple arguments.
    ```
    Prelude> let add x y = x + y
    Prelude> add 3 5
    8
    ```

*   **Local Variables:**  You can use `let` within a function definition to create local variables. Use `where` for a more common and arguably cleaner way to define locals (see example below).

*   **Example with `where`:** Defining a function to calculate the area of a circle:
    ```haskell
    let area radius = pi * radiusSquared
        where radiusSquared = radius * radius
              pi = 3.14159
    ```

## 5. Loading and Executing Haskell Source Files in GHCi

*   **Creating a Source File:** Create a plain text file (e.g., `myfunctions.hs`) and write Haskell code in it. For example:
    ```haskell
    -- myfunctions.hs
    double :: Int -> Int  -- Type signature (optional but good practice)
    double x = x * 2

    greet :: String -> String
    greet name = "Hello, " ++ name ++ "!"
    ```

*   **Loading the File:** In GHCi, use the `:load` (or `:l`) command followed by the filename.
    ```
    Prelude> :load myfunctions.hs
    [1 of 1] Compiling Main             ( myfunctions.hs, interpreted )
    Ok, modules loaded: Main.
    *Main>
    ```
    Now you can use the functions defined in `myfunctions.hs`.

*   **Using the Functions:**
    ```
    *Main> double 10
    20
    *Main> greet "Alice"
    "Hello, Alice!"
    ```

*   **Reloading:** If you modify the source file, use `:reload` (or `:r`) to reload it. GHCi will recompile the file.

## 6. Understanding Basic GHCi Commands

*   `:load <filename>` or `:l <filename>`: Loads a Haskell source file.
*   `:reload` or `:r`: Reloads the currently loaded source file.
*   `:type <expression>` or `:t <expression>`: Displays the type of an expression.
*   `:info <name>` or `:i <name>`:  Displays information about a name (e.g., a function or type).
*   `:quit` or `:q`: Exits GHCi.
*   `:help` or `:?`: Displays a list of available commands.
*   `:browse <module>` or `:b <module>`: Displays the public definitions in the specified module.  For example, `:browse Prelude` shows the functions available by default.
*   `:set +t`:  Turns on type annotations for results.  After you evaluate an expression, GHCi will display the type of the result as well as the result itself.
*   `:set -t`: Turns off type annotations.

## Practice Questions/Exercises

1.  **Install Haskell and GHCi on your machine.** Verify the installation by running `ghci` in your terminal.
    *   **Answer:**  Follow the installation instructions using the Haskell Platform or Stack as described above.  If `ghci` starts, you're good to go.

2.  **Evaluate the expression `(10 + 5) * 2` in GHCi.** What is the result?
    *   **Answer:** `Prelude> (10 + 5) * 2`  Output: `30`

3.  **Define a function in GHCi called `cube` that calculates the cube of a number.** Test it with the input `3`.
    *   **Answer:** `Prelude> let cube x = x * x * x`  `Prelude> cube 3` Output: `27`

4.  **Create a Haskell source file named `math_utils.hs` containing a function called `average` that calculates the average of two numbers. Load the file into GHCi and test the function with the inputs `10` and `20`.**
    *   **Answer:**
        ```haskell
        -- math_utils.hs
        average :: Float -> Float -> Float
        average x y = (x + y) / 2
        ```
        In GHCi:
        ```
        Prelude> :load math_utils.hs
        [1 of 1] Compiling Main             ( math_utils.hs, interpreted )
        Ok, modules loaded: Main.
        *Main> average 10 20
        15.0
        ```

5.  **Use the `:type` command to find the type of the `average` function you defined in the previous question.**
    *   **Answer:**
        ```
        *Main> :type average
        average :: Float -> Float -> Float
        ```

6.  **What is the purpose of the `:reload` command in GHCi?**
    *   **Answer:** The `:reload` command reloads the currently loaded Haskell source file.  This is useful after you've made changes to the file.

## Important Points to Remember

*   **Indentation is crucial in Haskell.**  Use consistent indentation to define blocks of code.
*   **Haskell is statically typed.** The compiler checks the types of expressions before running the program.  Type annotations (like `:: Int -> Int`) are optional, but strongly recommended for clarity and error prevention.
*   **Functions are first-class citizens.** This means functions can be passed as arguments to other functions, returned as values from functions, and assigned to variables. This is a cornerstone of functional programming.
*   **GHCi is a valuable tool for experimenting with Haskell code.** Use it to test expressions, define functions, and load source files.  Get familiar with the basic commands.
*   **Immutability is key.** Values in Haskell are generally immutable (cannot be changed after they are created).  This encourages writing pure functions that don't have side effects. This will be covered in more detail later.
