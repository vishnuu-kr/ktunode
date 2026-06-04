---
title: "FLOWCHARTS** :- Symbols used in creating a Flowchart - start and end"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 2: ALGORITHM AND   PSEUDOCODE   REPRESENTATION:"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1e0bca560598cfa34a8d"
status: "completed"
scrapedAt: "2026-05-20T17:36:21.706Z"
---
# Module 2: Algorithm and Pseudocode Representation: Flowcharts - Start and End Symbols

Welcome back, everyone! In our journey through Algorithmic Thinking with Python, we've already touched upon the essence of algorithms – those step-by-step instructions that tell a computer (or even a human!) how to accomplish a task. Today, we're diving deeper into a powerful way to visually represent these algorithms: **Flowcharts**.

Think of a flowchart as a map for your algorithm. It uses a series of standardized symbols connected by arrows to show the sequence of operations and decisions involved in a process. This visual representation makes complex logic much easier to understand, debug, and communicate. It’s a fundamental tool, helping us bridge the gap between a problem statement and actual code.

This aligns directly with our course objectives, particularly **CO2: Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem.** Flowcharts are precisely that clear and accurate model. They help us organize our thoughts and ensure we’ve considered all necessary steps before we even start writing Python code.

## The Building Blocks of a Flowchart: Symbols

Just like you need specific bricks and mortar to build a house, flowcharts use specific symbols to represent different types of actions or steps in an algorithm. Understanding these symbols is key to reading and creating effective flowcharts.

Today, we'll focus on the most fundamental symbols that bookend every algorithm: the **Start** and **End** symbols.

### The Terminator: Start and End Symbols

Every flowchart, without exception, must have a beginning and an end. These aren't just arbitrary points; they mark the entry and exit of the process being described. We use a specific symbol for this purpose, often called a **Terminator**.

**What does it look like?**
The Terminator symbol is typically represented by an **oval** or a **rounded rectangle**. Imagine a pill shape.

**Why this shape?**
This shape signifies a definitive beginning or end. It’s like the start and finish lines on a race track. You can't have a race without them, and you can't have a complete algorithm without a start and an end. This is a crucial concept that you’ll see emphasized in books like Maureen Sprankle and Jim Hubbard’s *Problem Solving & Programming Concepts*. They stress that a well-defined algorithm has clear entry and exit points.

**How do we use it?**

1.  **The Start Symbol:** At the very beginning of your flowchart, you’ll place a Terminator symbol containing the word "**START**" or a similar indicator like "BEGIN." This tells anyone reading the flowchart, "Okay, this is where the process kicks off."

    *   **Relatable Example:** Think about making a cup of tea. The very first step is always to "START making tea." You don't just magically have tea; there's a point where you begin the process.

2.  **The End Symbol:** Similarly, at the very conclusion of your algorithm's execution, you'll have another Terminator symbol, this time with the word "**END**" or "STOP" inside. This signifies that the process has completed its tasks.

    *   **Relatable Example:** Continuing with our tea analogy, after you've sipped your tea and are satisfied, the process of "making and drinking tea" has come to its natural "END."

**Connecting Start and End:**
These Terminator symbols are connected by **flow lines** (arrows) to the next step in the process. There will be only *one* arrow entering the START symbol (from nowhere, as it's the absolute beginning) and only *one* arrow exiting the END symbol (going nowhere, as it's the absolute end).

**Why are Start and End so important? (Exam Focus!)**
In exams, you might be asked to identify the symbols used to mark the beginning and end of a process. The Terminator symbol (oval/rounded rectangle) is your answer. It’s also important to remember that an algorithm *must* have both a clear start and a clear end. Missing either of these can lead to an incomplete or even non-functional algorithm. This relates to **CO1: Utilize computing as a model for solving real-world problems.** Even in the real world, every task or process has a beginning and an end.

**Quick Recall Tip:** Think of an oval as an "O" for "Oh, it's starting!" or "Oh, it's over!"

---

### Connecting to Course Outcomes:

*   **CO1 (Utilize computing as a model for solving real-world problems):** By using standard symbols like Terminators, we are adopting a codified, standardized way of thinking about processes, which is essential for modeling real-world problems computationally. Every real-world task, from cooking to driving, has a start and an end. Flowcharts formalize this.
*   **CO2 (Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem):** The Start and End symbols are the first and last structural elements of our visual model (the flowchart). They establish the boundaries of the problem we are trying to solve through the algorithm. Without these, the model would be incomplete.

---

## Putting it Together: A Simple Illustration

Let's consider a very basic example. Suppose we want to create a flowchart for a simple process: greeting someone.

The flowchart would look something like this:

```mermaid
graph TD
    A([START]) --> B[/Print "Hello!"];
    B --> C([END]);
```

*   We begin with the **START** symbol (an oval).
*   An arrow points from START to the next operation: "Print 'Hello!'" (This would be represented by a different symbol, a parallelogram, which we'll cover later, but for now, focus on the start and end).
*   Finally, an arrow points from "Print 'Hello!'" to the **END** symbol (another oval).

See? It’s a clear, linear path. This visual clarity is precisely what makes flowcharts so valuable, especially when you’re just beginning to grasp algorithmic concepts, as highlighted in introductory texts like John V. Guttag's *Introduction to Computation and Programming using Python*.

## Looking Ahead

Today, we've laid the foundation by understanding the essential Start and End symbols. These might seem simple, but they are the critical bookends of every algorithm you'll ever design. In our next session, we'll build upon this by introducing other essential flowchart symbols, allowing us to represent more complex processes, decisions, and data manipulations. Remember, a good flowchart is like a good story – it has a clear beginning, a compelling middle, and a satisfying end.

---

## Sample Questions and Answers

**Q1. What is the purpose of the oval (or rounded rectangle) symbol in a flowchart?**

**Answer:** The oval or rounded rectangle symbol, known as the **Terminator**, is used to represent the **start** and **end** points of an algorithm. It signifies the entry and exit of the process being visually depicted. This is a foundational element in visually structuring an algorithm, as discussed in principles of problem-solving and programming.

**Q2. Can an algorithm be represented by a flowchart without a Start or End symbol? Explain why or why not.**

**Answer:** No, an algorithm cannot be properly represented by a flowchart without a Start and an End symbol. Every process, computational or otherwise, has a defined beginning where it commences and a defined end where it concludes. The Start and End symbols in a flowchart visually enforce these critical boundaries, ensuring the algorithm is complete and well-defined. Without them, the flowchart would lack clarity on when the process begins and when it is considered finished, making it an incomplete model. This adheres to the principle of defining the scope of a problem before solving it, a key aspect of **CO2**.

**Q3. In the context of algorithmic thinking, why is it important to have both a "START" and an "END" point?**

**Answer:** Having both a "START" and an "END" point is crucial for several reasons:
*   **Clarity and Completeness:** It clearly defines the scope and boundaries of the algorithm. You know precisely where the process begins and where it is expected to finish.
*   **Preventing Infinite Loops:** While not directly handled by the Terminator symbol itself, the concept of an END is vital for ensuring that algorithms eventually terminate and don't run forever, a common pitfall in programming.
*   **Communication:** It makes the algorithm understandable to others. Anyone looking at the flowchart immediately knows where to begin and when to expect the process to be over.
*   **Debugging:** If a process doesn't end as expected, the absence of a clear "END" or a path leading to it can be an indicator of a problem.

This fundamental concept supports **CO1** by providing a structured model for problem-solving, mirroring how real-world tasks are initiated and completed.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
