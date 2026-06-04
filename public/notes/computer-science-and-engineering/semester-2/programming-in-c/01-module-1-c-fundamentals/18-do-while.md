---
title: "do-while"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e3b"
status: "completed"
scrapedAt: "2026-05-20T16:35:11.964Z"
---
## PROGRAMMING IN C: Module 1: C Fundamentals

### Topic: The `do-while` Loop: Ensuring Execution, Even If Just Once!

Welcome back, everyone! Today, we're diving into another crucial control flow statement in C – the `do-while` loop. We've already explored `while` and `for` loops, which are fantastic for repeating a block of code. But what if you need to *guarantee* that your code runs at least once, regardless of the initial condition? That's where our `do-while` loop shines!

Think about it like this: imagine you're asking a friend for a favor. You want to ask them *at least* once, even if they seem hesitant from the start. You might say, "Hey, could you please do this for me?" (that's the "do" part). If they say "no," you might ask again, or maybe you don't. But you *definitely* made the request at least once. The `do-while` loop works in a very similar fashion.

#### What is a `do-while` Loop?

At its core, a `do-while` loop is an **exit-controlled** loop. This is a key distinction from the `while` loop, which is an **entry-controlled** loop.

*   **Entry-controlled loops (like `while` and `for`):** The condition is checked *before* the loop body is executed. If the condition is initially false, the loop body might never run.
*   **Exit-controlled loops (like `do-while`):** The loop body is executed *first*, and *then* the condition is checked. This means the statements within the loop are guaranteed to execute at least once.

This characteristic makes `do-while` loops incredibly useful in scenarios where you need some initial action to take place, and only then decide if further repetitions are necessary.

#### The Syntax of a `do-while` Loop

Let's look at how we write a `do-while` loop in C. It's quite straightforward:

```c
do {
    // Statements to be executed
    // This is the loop body
    // ...
    // Update statements (e.g., increment/decrement)
} while (condition); // The condition is checked here
```

Notice the semicolon (`;`) after the `while (condition)`. This is mandatory and a common oversight for beginners. Don't forget it!

Let's break this down:

1.  **`do` Keyword:** This signifies the beginning of the `do-while` loop.
2.  **Opening Brace `{`:** Encloses the block of statements that will be executed repeatedly.
3.  **Loop Body:** Contains the C statements you want to execute. Crucially, this block *will* be executed once before the condition is ever checked.
4.  **`while` Keyword:** Marks the point where the loop's continuation condition is evaluated.
5.  **`condition`:** This is an expression that evaluates to either true (non-zero) or false (zero). As long as this condition remains true, the loop will continue to execute.
6.  **Closing Brace `}` and Semicolon `;`:** These mark the end of the loop body and the `while` statement, respectively.

#### How it Works: Step-by-Step

1.  The statements within the `do { ... }` block are executed.
2.  After the execution of the loop body, the `condition` in the `while (condition)` part is checked.
3.  If the `condition` evaluates to true (non-zero), the program jumps back to the `do` keyword, and the loop body is executed again.
4.  If the `condition` evaluates to false (zero), the loop terminates, and the program continues executing the statements that follow the `do-while` loop.

#### Connecting to Course Outcomes

Now, how does this fit into our broader understanding of C programming and the course objectives?

*   **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**
    The `do-while` loop is a fundamental control statement. Understanding its unique behavior (executing at least once) allows us to accurately model real-world problems. For instance, think about data validation. You need to prompt the user for input *at least once* to see if it's valid. If it's not, you might ask again. The `do-while` loop is perfect for this, as we'll see in examples. This directly addresses how we use control statements to solve problems.

#### Everyday Examples to Visualize `do-while`

Let's move away from abstract code and think about situations where this "do it first, check later" logic makes sense.

**Example 1: Playing a Game of Chance**

Imagine you're playing a simple dice game. You roll the dice once to get a score. You want to keep rolling as long as your score is below a certain target (say, 20), but you *must* roll at least once to even start the game.

Here’s a conceptual idea (we'll write the C code shortly):

1.  **Do** roll the dice and get your score.
2.  **While** your score is less than 20, repeat the process (roll again, check score).

You can't check if your score is less than 20 *before* you roll the dice, right? You have to roll *first*. This is the essence of `do-while`.

**Example 2: User Input Validation**

This is a classic! Suppose you need a user to enter a positive number. You'll prompt them for input.

1.  **Do** prompt the user to enter a positive number and read their input.
2.  **While** the entered number is not positive (i.e., it's zero or negative), repeat the prompting and reading.

You *must* ask for input at least once. You can't check if the input is valid before you've received it.

#### Practical C Code Examples

Let's translate these ideas into C code.

**Example 1: Dice Game Simulation (Simplified)**

```c
#include <stdio.h>
#include <stdlib.h> // For rand() and srand()
#include <time.h>   // For time()

int main() {
    int score = 0;
    int diceRoll;

    // Seed the random number generator to get different rolls each time
    srand(time(0));

    printf("Welcome to the Dice Game!\n");

    do {
        // Roll the dice (generates a random number between 1 and 6)
        diceRoll = (rand() % 6) + 1;
        score += diceRoll; // Add the roll to the total score

        printf("You rolled a %d. Your current score is: %d\n", diceRoll, score);

        // We need to roll at least once, so the condition is checked AFTER the first roll.
        // Let's say we continue as long as the score is less than 20.
    } while (score < 20);

    printf("Game over! Your final score is %d.\n", score);

    return 0;
}
```

**Explanation:**

*   We initialize `score` to 0.
*   The `do` block executes first. It simulates a dice roll, adds it to the `score`, and prints the result.
*   Then, the `while (score < 20)` condition is checked. If `score` is less than 20, the loop body repeats.
*   This continues until `score` becomes 20 or greater. Notice how the first roll *always* happens, and then the check determines if we roll again. This perfectly illustrates the "do first, check later" nature.

**Example 2: Input Validation - Getting a Positive Number**

```c
#include <stdio.h>

int main() {
    int number;

    printf("Please enter a positive number: ");

    do {
        // Read the number from the user
        scanf("%d", &number);

        // Check if the number is NOT positive
        if (number <= 0) {
            printf("Invalid input. Please enter a POSITIVE number: ");
        }
    } while (number <= 0); // Keep asking as long as the number is not positive

    printf("Thank you! You entered the positive number: %d\n", number);

    return 0;
}
```

**Explanation:**

*   We declare an integer `number`.
*   The `do` block starts by asking the user for input using `printf` and immediately reads it using `scanf`.
*   Then, the `if (number <= 0)` statement checks if the input was invalid. If it was, it prints an error message.
*   Finally, `while (number <= 0)` checks the condition. If `number` is still less than or equal to zero, the loop repeats, prompting the user again.
*   The loop terminates only when a positive number is entered. The crucial point here is that `scanf` is called *at least once* within the loop, ensuring we always get some input before deciding to ask again.

#### `do-while` vs. `while`: When to Use Which?

This is a very important distinction and often a point of confusion for students. Remember our friend wanting a favor?

*   **`while` loop:** Use when the loop body might *not* need to execute at all.
    *   *Analogy:* "While it's raining, stay inside." If it's not raining when you check, you don't need to stay inside based on this rule.
    *   *Programming Example:* Iterating through a list that might be empty.

*   **`do-while` loop:** Use when the loop body *must* execute at least once.
    *   *Analogy:* "Ask for the password, and then check if it's correct. If not, ask again." You have to ask the first time!
    *   *Programming Example:* User input validation, menu-driven programs where you display the menu at least once.

**A common question in exams might be:** "Under what circumstances would you prefer a `do-while` loop over a `while` loop?" The answer is simple: when you need to ensure the loop body executes *at least once*.

#### Common Pitfalls and How to Avoid Them

1.  **Missing Semicolon:** As mentioned, `while (condition);` is mandatory. Forgetting it is a syntax error. Always double-check this.
2.  **Infinite Loops:** Just like any loop, if your condition never becomes false, you'll get an infinite loop. In a `do-while`, this can happen if the statements within the loop never modify the variables involved in the condition to make it false.
    *   *Example Pitfall:*
        ```c
        int count = 0;
        do {
            printf("Hello!\n");
            // Oops! Forgot to increment count!
        } while (count < 5); // count will always be 0, so this is an infinite loop!
        ```
    *   *Correction:* Always ensure there's a mechanism *inside* the loop to eventually make the `while` condition false.

#### Relationship to Other Control Statements (Briefly)

While we're focusing on `do-while`, it's good to remember its place. `do-while` loops, like `while` and `for` loops, are used for **iteration** or **repetition**. They help us build programs that can perform tasks multiple times without writing the same code over and over. This is fundamental to CO1, as it allows us to implement repetitive algorithms or respond to user input repeatedly.
