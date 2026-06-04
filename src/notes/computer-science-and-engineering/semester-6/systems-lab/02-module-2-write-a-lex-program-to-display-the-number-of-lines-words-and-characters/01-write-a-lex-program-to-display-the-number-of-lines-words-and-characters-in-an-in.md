---
title: "Write a lex program to display the number of lines, words and characters in an input text."
subject: "SYSTEMS LAB"
module: "Module 2: Write a lex program to display the number of lines, words and characters in an input text."
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8c032"
status: "completed"
scrapedAt: "2026-05-20T16:57:33.729Z"
---
# SYSTEMS LAB: Module 2 - Lexical Analysis for Text Statistics

## Topic: Write a Lex Program to Display the Number of Lines, Words, and Characters in an Input Text

This module focuses on using the Lex tool to create a program that analyzes an input text file and reports the total count of lines, words, and characters.

---

### Learning Outcomes Covered:

*   Understanding the basic structure of a Lex program.
*   Identifying and using common Lex patterns (regular expressions) for lines, words, and characters.
*   Implementing actions within Lex rules to count occurrences.
*   Handling input and output in a Lex program.
*   Compiling and running a Lex program.

---

### 1. Introduction to Lex and Lexical Analysis

*   **Lex (Lexical Analyzer Generator):** A tool used to generate lexical analyzers (scanners or tokenizers). It takes a specification file (usually with a `.l` extension) and produces C source code for a scanner.
*   **Lexical Analysis:** The first phase of a compiler. It reads the source code character by character and groups them into meaningful sequences called *tokens*. In this context, we're not strictly creating tokens for a compiler, but rather using Lex's pattern matching capabilities to count specific elements.
*   **Lex Specification File Structure:** A Lex program consists of three main sections:
    1.  **Definitions Section:** Contains declarations, macro definitions, and definitions of regular expressions.
    2.  **Rules Section:** Contains a series of patterns (regular expressions) and associated actions (C code) to be performed when a pattern is matched.
    3.  **User Subroutines Section:** Contains auxiliary C functions that might be used in the actions.

    The sections are separated by a line containing only `%%`.

---

### 2. Key Concepts and Definitions

*   **Regular Expressions (Patterns):** Sequences of characters that define a search pattern. Lex uses extended regular expressions.
    *   `.` : Matches any single character (except newline).
    *   `[abc]` : Matches any single character 'a', 'b', or 'c'.
    *   `[^abc]` : Matches any single character *except* 'a', 'b', or 'c'.
    *   `[a-z]` : Matches any single lowercase letter from 'a' to 'z'.
    *   `*` : Matches zero or more occurrences of the preceding character/group.
    *   `+` : Matches one or more occurrences of the preceding character/group.
    *   `?` : Matches zero or one occurrence of the preceding character/group.
    *   `|` : Acts as an OR operator (e.g., `a|b` matches 'a' or 'b').
    *   `()` : Groups expressions.
    *   `^` : Matches the beginning of a line (when used at the start of a pattern).
    *   `$` : Matches the end of a line (when used at the end of a pattern).
*   **Actions:** C code enclosed in curly braces `{}` that is executed when a corresponding pattern is matched.
*   **`yytext`:** A character pointer provided by Lex that points to the matched text.
*   **`yyleng`:** An integer variable provided by Lex that stores the length of the matched text.
*   **`yyin`:** An input file pointer. By default, it points to standard input.
*   **`yyout`:** An output file pointer. By default, it points to standard output.
*   **`ECHO`:** A Lex keyword that, when placed in an action, prints the matched text to `yyout`.

---

### 3. Designing the Lex Program for Text Statistics

We need to identify patterns that represent lines, words, and characters, and define actions to count them.

#### 3.1 Counting Characters

*   **Pattern:** Any character. The most general pattern for a character is `.`. However, this will not count newline characters by default. To count *all* characters, including newlines, we need to match every character that appears in the input.
*   **Action:** Increment a character counter.

#### 3.2 Counting Lines

*   **Pattern:** A newline character (`\n`). Each newline character signifies the end of a line.
*   **Action:** Increment a line counter.

#### 3.3 Counting Words

*   **Definition of a Word:** A sequence of non-whitespace characters. Whitespace characters typically include spaces, tabs, and newlines.
*   **Pattern:** We can define a word as a sequence of one or more non-whitespace characters. A common way to represent this is `[^ \t\n]+`.
    *   `[^ \t\n]` matches any character that is *not* a space (` `), a tab (`\t`), or a newline (`\n`).
    *   `+` means "one or more" of the preceding character set.
*   **Action:** Increment a word counter.

    **Important Consideration:** What about leading/trailing spaces or multiple spaces between words? The pattern `[^ \t\n]+` correctly handles these. If there are multiple spaces between words, Lex will skip over them until it finds a non-whitespace character, thus correctly identifying the next word.

#### 3.4 Handling Whitespace

*   Whitespace characters (spaces, tabs, newlines) are important for delimiting words but don't contribute to the word count themselves. We need a rule to match whitespace so that Lex doesn't get stuck or misinterpret them.
*   **Pattern:** `[ \t\n]` (matches space, tab, or newline).
*   **Action:** We don't need to do anything specific with whitespace for our counting purpose, but we must match them. An empty action `{}` or a rule that does nothing is sufficient.

---

### 4. Writing the Lex Program (`.l` file)

Let's put it all together. We'll use global integer variables to store the counts.

```lex
/* Definitions Section */
%{
#include <stdio.h>
int char_count = 0;
int word_count = 0;
int line_count = 0;
%}

/* Rules Section */
%%
[^ \t\n]+    { 
                word_count++; 
                char_count += yyleng; 
             }
\n           { 
                line_count++; 
                char_count++; /* Count the newline character itself */
             }
[ \t]        { 
                char_count += yyleng; /* Count spaces and tabs */
             }
.            { /* This catches any other single character not matched above */
                char_count++; 
             }

%%

/* User Subroutines Section */
int main() {
    // yyin is automatically set to stdin if not redirected
    // yylex() starts the lexical analysis
    yylex(); 

    printf("Number of Lines: %d\n", line_count);
    printf("Number of Words: %d\n", word_count);
    printf("Number of Characters: %d\n", char_count);

    return 0;
}
```

**Explanation of the Rules and Actions:**

1.  **`[^ \t\n]+`**:
    *   **Pattern:** Matches one or more consecutive non-whitespace characters (i.e., a word).
    *   **Action:**
        *   `word_count++;`: Increments the word count.
        *   `char_count += yyleng;`: Adds the length of the matched word (which is the number of characters in that word) to the total character count.

2.  **`\n`**:
    *   **Pattern:** Matches a newline character.
    *   **Action:**
        *   `line_count++;`: Increments the line count.
        *   `char_count++;`: Increments the character count to include the newline character itself.

3.  **`[ \t]`**:
    *   **Pattern:** Matches a space or a tab character.
    *   **Action:**
        *   `char_count += yyleng;`: Adds the length of the matched whitespace (which will be 1 for a space or tab) to the character count. We need this to ensure all characters are counted, even those that are just whitespace between words.

4.  **`.`**:
    *   **Pattern:** Matches any single character *not* matched by the previous rules. In this specific ordering, it primarily catches any other single character that might exist, like punctuation that isn't part of a word pattern directly (though our `[^ \t\n]+` is quite broad). **Crucially, it also catches characters if the `[ \t\n]` rule were omitted or modified.**
    *   **Action:**
        *   `char_count++;`: Increments the character count.

**Refined Logic for Character Counting:**

The current approach counts characters within words and then separately counts newlines and spaces/tabs. A simpler and more robust way to count *all* characters is to have a single rule that matches *any* character and increments the character count, then handle word and line counting separately.

Let's refine the character counting:

```lex
/* Definitions Section */
%{
#include <stdio.h>
int char_count = 0;
int word_count = 0;
int line_count = 0;
%}

/* Rules Section */
%%
[^\t\n ]+   { 
                word_count++; 
                // No need to add yyleng here for char_count,
                // as the '.' rule will cover all characters.
             }
\n           { 
                line_count++; 
             }
.            { 
                char_count++; 
             }
%%

/* User Subroutines Section */
int main() {
    yylex(); 

    printf("Number of Lines: %d\n", line_count);
    printf("Number of Words: %d\n", word_count);
    printf("Number of Characters: %d\n", char_count);

    return 0;
}
```

**Explanation of the Refined Rules:**

1.  **`[^\t\n ]+`**:
    *   **Pattern:** Matches one or more consecutive non-whitespace characters (a word).
    *   **Action:** `word_count++;` (Increments the word count).

2.  **`\n`**:
    *   **Pattern:** Matches a newline character.
    *   **Action:** `line_count++;` (Increments the line count).

3.  **`.`**:
    *   **Pattern:** Matches *any* single character. This is the most comprehensive rule for counting characters. Because Lex processes rules in order, this rule will match:
        *   Spaces.
        *   Tabs.
        *   Characters that are part of words (but we don't add to `char_count` here as that would be double counting if `yyleng` were used).
        *   Newline characters (if the `\n` rule wasn't present).
    *   **Action:** `char_count++;` (Increments the character count for every character matched by this rule).

    This refined version is cleaner. The `.` rule will effectively count every character, including spaces, tabs, and newlines. The `[^\t\n ]+` rule correctly identifies words, and `\n` correctly counts lines.

---

### 5. Compiling and Running the Lex Program

**Steps:**

1.  **Save the Lex specification:** Save the code above into a file named `text_stats.l`.
2.  **Generate the C code using Lex:**
    ```bash
    lex text_stats.l
    ```
    This command will create a C source file named `lex.yy.c`.
3.  **Compile the C code:**
    ```bash
    gcc lex.yy.c -o text_stats -ll
    ```
    *   `gcc`: The GNU C Compiler.
    *   `lex.yy.c`: The C source file generated by Lex.
    *   `-o text_stats`: Specifies the output executable file name as `text_stats`.
    *   `-ll`: Links the Lex library. This is crucial for Lex-generated programs.
4.  **Run the executable:**
    ```bash
    ./text_stats
    ```
    The program will now wait for you to input text from the standard input (your keyboard).
5.  **Provide Input:** Type your text. Press Enter after each line.
6.  **Signal End of Input:**
    *   On Linux/macOS: Press `Ctrl+D` on a new line.
    *   On Windows: Press `Ctrl+Z` followed by Enter on a new line.

    Once you signal the end of input, the program will print the counts.

**Example Interaction:**

```bash
./text_stats
This is the first line.
This is the second, longer line.
And a third.

Number of Lines: 3
Number of Words: 11
Number of Characters: 75
```

*(Note: The exact character count might vary slightly based on how the terminal displays newlines and if you include trailing spaces on lines before pressing Enter. The crucial part is the logic.)*

---

### 6. Practice Questions and Exercises

**Question 1:**

What is the primary purpose of Lex in the context of compiling?

**Answer 1:**
Lex's primary purpose is to generate a lexical analyzer (scanner or tokenizer), which is the first phase of a compiler. It breaks down the source code into a stream of tokens.

**Question 2:**

Explain the role of `yytext` and `yyleng` in a Lex program.

**Answer 2:**
*   `yytext`: A character pointer that points to the actual text that was matched by a Lex pattern.
*   `yyleng`: An integer variable that stores the length of the `yytext`.

**Question 3:**

Consider the following Lex snippet. What will be the output if the input is "Hello world!"?

```lex
%%
[A-Za-z]+  { printf("Word found: %s\n", yytext); }
.          { printf("Other char: %c\n", yytext[0]); }
%%
```

**Answer 3:**
The output will be:
```
Word found: Hello
Other char:  
Word found: world
Other char: !
```
*Explanation:*
1.  `[A-Za-z]+` matches "Hello", so the first action prints "Word found: Hello".
2.  The space after "Hello" is not matched by `[A-Za-z]+`, so the `.` rule matches it. `yytext[0]` is the space character, printing "Other char:  ".
3.  `[A-Za-z]+` matches "world", printing "Word found: world".
4.  The "!" is not matched by `[A-Za-z]+`, so the `.` rule matches it. `yytext[0]` is "!", printing "Other char: !".

**Question 4:**

Modify the `text_stats.l` program to also count the number of *lines that contain at least one word*.

**Answer 4:**

We can introduce a flag to track if a word has been encountered on the current line.

```lex
/* Definitions Section */
%{
#include <stdio.h>
int char_count = 0;
int word_count = 0;
int line_count = 0;
int lines_with_words = 0;
int word_found_on_line = 0; // Flag to track if a word is on the current line
%}

/* Rules Section */
%%
[^\t\n ]+   { 
                word_count++; 
                char_count++; // Count characters within words
                word_found_on_line = 1; // Mark that a word was found on this line
             }
\n           { 
                line_count++; 
                char_count++; // Count the newline character
                if (word_found_on_line) {
                    lines_with_words++; // Increment if a word was found on this line
                }
                word_found_on_line = 0; // Reset for the next line
             }
[ \t]        { 
                char_count++; // Count spaces and tabs
             }
.            { /* Catches any other single character not matched above */
                char_count++; 
             }
%%

/* User Subroutines Section */
int main() {
    yylex(); 

    // Handle case where input ends without a newline after last word
    if (word_found_on_line) {
        lines_with_words++;
    }

    printf("Number of Lines: %d\n", line_count);
    printf("Number of Words: %d\n", word_count);
    printf("Number of Characters: %d\n", char_count);
    printf("Number of Lines with Words: %d\n", lines_with_words);

    return 0;
}
```

**Explanation of the modification:**

*   A new variable `lines_with_words` is introduced.
*   A flag `word_found_on_line` is set to `1` whenever the `[^\t\n ]+` (word) pattern is matched.
*   When a newline `\n` is encountered, we check `word_found_on_line`. If it's `1`, we increment `lines_with_words` and then reset `word_found_on_line` to `0` for the next line.
*   An edge case is handled in `main()`: if the input ends with a word but no trailing newline, the `word_found_on_line` flag might still be `1`. This check ensures that such a line is counted.

---

### 7. Important Points to Remember

*   **Order of Rules Matters:** Lex tries to match patterns from top to bottom in the rules section. The longest possible match is preferred.
*   **Whitespace Handling:** Explicitly handle spaces, tabs, and newlines to avoid unexpected behavior and ensure correct word/line counts.
*   **`ECHO` Keyword:** Can be used in an action to automatically print the matched text if you don't need to perform custom actions.
*   **Linking the Lex Library (`-ll`):** Essential when compiling the generated C code.
*   **End of Input:** Know how to signal the end of input to your Lex program (`Ctrl+D` or `Ctrl+Z`).
*   **Character Counting Robustness:** Ensure your character counting strategy accounts for *all* characters, including spaces, tabs, and newlines. Using a general `.` rule is often the simplest way.

---
