---
title: "FLOWCHARTS** :- Symbols used in creating a Flowchart - start and end, arithmetic calculations, input/output operation, decision (selection), module name (call), for loop (Hexagon), flow-lines, on-page connector, off-page connector."
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 2: ALGORITHM AND   PSEUDOCODE   REPRESENTATION:"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5ca6"
status: "completed"
scrapedAt: "2026-05-20T16:36:25.936Z"
---
Hello everyone! Welcome back to our journey into **Algorithmic Thinking with Python**. In our previous module, we delved into the fundamental building blocks of problem-solving. Today, in Module 2, we're going to focus on **Algorithm and Pseudocode Representation**, and specifically, we're going to explore a visual tool that's incredibly powerful for understanding and communicating algorithms: **Flowcharts**.

Think of flowcharts as the blueprints for our computer programs, or even for solving many real-world problems. They help us visualize the step-by-step logic, the flow of control, and the decisions our algorithm makes. This is absolutely crucial for building good algorithms, which directly ties into our **Course Outcome 1 (CO1)** – utilizing computing as a model for solving real-world problems. A flowchart is our first step in creating that clear and accurate model, aligning with **CO2**. By the end of this session, you'll understand how to build these visual representations, which is fundamental for translating them into actual Python code later on, linking to **CO3** and **CO4**.

So, let's get started!

### The Art of Visualizing Algorithms: Understanding Flowcharts

Imagine you're giving someone directions to your house. You wouldn't just list streets; you'd talk about turning left at the big oak tree, going straight until you see the blue mailbox, and so on. Flowcharts do something similar for algorithms. They break down a complex process into a series of clear, sequential steps.

From Maureen Sprankle and Jim Hubbard's excellent book, "Problem Solving & Programming Concepts," they emphasize that visualizing the problem-solving process is key. Flowcharts are our primary tool for this visualization. They help us to clearly articulate the steps before we even start coding, a core aspect of **CO2**.

#### What Makes a Flowchart? The Essential Symbols

Like any language, flowcharts have their own set of symbols, each with a specific meaning. Think of these as the words and punctuation marks in our flowchart language. Let's break down the most common ones:

**1. The Start and End Terminators (Ovals/Rounded Rectangles)**

Every journey has a beginning and an end, right? Flowcharts are no different.

*   **Start/End Symbol:** This is typically represented by an oval or a rounded rectangle. It signifies the **beginning** of the algorithm (START) and the **termination** of the algorithm (END). You'll always have one START symbol and at least one END symbol. Without them, the flowchart isn't complete! It's like starting a recipe with "Ingredients" and ending with "Serve." This is the most basic element, and understanding its role is vital for any algorithmic representation, linking to **CO2**.

    *   **Example:** For a simple program that calculates the area of a rectangle, you'd start with a "START" oval.

**2. Input/Output Operations (Parallelograms)**

This is where our algorithm interacts with the outside world. It's how we get information *into* our process and how we present results *out* of it.

*   **Input/Output Symbol:** This is represented by a parallelogram. It's used for operations like reading data from the user (input) or displaying results (output).

    *   **Example:** If you're writing a program to ask for a user's name and then greet them, the "Read Name" operation would be in an input parallelogram, and the "Display Greeting" would be in an output parallelogram. Think of it like a scanner for receiving data or a printer for showing results. This directly supports **CO3** as it’s about interacting with data.

**3. Arithmetic Calculations/Processing (Rectangles)**

This is the "doing" part of your algorithm. It’s where the actual computation, manipulation, or assignment of values happens.

*   **Process/Action Symbol:** This is the workhorse of the flowchart, represented by a rectangle. It's used for any processing step, such as arithmetic calculations (addition, subtraction, multiplication, division), variable assignments, or other data manipulations. George Pólya, in "How to Solve It," stresses understanding the problem and devising a plan. This rectangle is where you execute parts of that plan.

    *   **Example:** If you need to calculate the area of a rectangle, the step `Area = Length * Width` would go inside a rectangle. Or, if you're tracking points in a game, `Score = Score + 10` would be a process.

**4. Decision (Selection) (Diamonds)**

Ah, the crossroads! This is where your algorithm makes a choice based on a condition. This is fundamental to creating dynamic and responsive algorithms, directly impacting **CO3** and **CO4**.

*   **Decision Symbol:** This is represented by a diamond shape. Inside the diamond, you'll write a condition that can be evaluated as either TRUE or FALSE. From the diamond, you'll typically see two or more arrows branching out, each leading to a different sequence of steps based on the truthfulness of the condition. The most common are "Yes" or "No" (or True/False) paths.

    *   **Example:** Imagine you're checking if a student passed a test. The diamond might contain the condition `Score >= 50`. If TRUE, the flow might go to an "Output: 'Pass'" process. If FALSE, it might go to an "Output: 'Fail'" process. This is like asking yourself, "Should I bring an umbrella?" If the sky is cloudy (TRUE), you bring it; if not (FALSE), you don't.

**5. Module Name (Call) (Rectangle with Double Vertical Lines)**

Sometimes, our algorithm might become quite large and complex. To manage this, we can break it down into smaller, reusable sub-programs or functions. This symbol helps us represent calling or invoking these separate modules.

*   **Predefined Process/Subroutine Symbol:** This looks like a rectangle, but it has double vertical lines on the left and right sides. It signifies that a specific process or a sub-program (often called a function or subroutine in programming) is being called. The actual steps of this called process would be defined in a separate flowchart or section.

    *   **Example:** In a larger program, you might have a main flowchart that calls a `Calculate_Tax` subroutine. This `Calculate_Tax` would be represented by this symbol in the main flowchart. This concept of modularity is key to efficient programming and problem-solving, as discussed in "Computational Thinking" by G. Venkatesh Madhavan Mukund.

**6. For Loop (Hexagon)**

This symbol is a bit more specialized and specifically represents a **definite iteration** or a loop that executes a fixed number of times. This is a direct visualization of a `for` loop in programming.

*   **Loop Symbol (often depicted as a Hexagon):** While traditionally a rectangle might be used for loops, a hexagon is often used to specifically denote a "FOR loop" or a loop with a known number of iterations. It clearly indicates a process that will repeat. The actual structure of a FOR loop involves initializing a counter, setting a condition for continuation, and incrementing/decrementing the counter. The hexagon visually encapsulates this repetitive action.

    *   **Example:** If you want to print numbers from 1 to 10, the loop that handles this repetition would be represented by this symbol. You'd specify that it runs "For I from 1 to 10." This is crucial for efficient processing of repetitive tasks, a core aspect of **CO3**.

**7. Flow-Lines (Arrows)**

These are the connectors that show the direction of flow of control within the flowchart. Without them, your symbols would just be floating in space!

*   **Flow-Lines:** These are simple arrows connecting the different symbols. They indicate the sequence in which the steps are to be executed. You generally read a flowchart from top to bottom and left to right, following the arrows.

    *   **Example:** An arrow going from the "START" oval to an "Input Length" parallelogram shows that the input operation happens after the start.

**8. On-Page Connector (Small Circle)**

When your flowchart gets too big to fit neatly on one page, or when you need to connect two points on the *same* page without drawing long, messy flow-lines, you use connectors.

*   **On-Page Connector:** This is represented by a small circle, usually with a letter or number inside. If you have a flow-line that needs to jump to another part of the same page, you'd terminate that line with a circle labeled, say, "A". Then, on the page where you want the flow to continue, you'd start a new flow-line from another circle labeled "A". This helps maintain clarity and organization, supporting **CO2** in clear representation.

    *   **Example:** Imagine a complex decision tree. After a series of steps, you might need to go back to an earlier processing block. Instead of drawing a long arrow looping back, you'd place an "A" circle at the end of the current path and another "A" circle at the beginning of the path you want to return to, connecting them with flow-lines.

**9. Off-Page Connector (Home Plate Shape)**

Similar to on-page connectors, but for when your flowchart truly outgrows a single page.

*   **Off-Page Connector:** This is typically represented by a shape resembling a home plate in baseball. Similar to the on-page connector, you'd place an off-page connector on the current page and label it (e.g., "Page 2 - Section B"). Then, on the next page, you'd use another off-page connector labeled the same way to indicate where the flow continues. This is essential for managing large projects and maintaining clarity, directly aiding in the articulation of complex algorithms (**CO2**).

    *   **Example:** If a detailed process for calculating taxes is too long for one page, the main flowchart might end with an off-page connector labeled "Tax Calculation Details (Page 3)". Page 3 would then begin with a corresponding off-page connector, resuming the flow.

#### Connecting Flowchart Symbols to Course Outcomes

Let's briefly recap how mastering these symbols helps us achieve our course goals:

*   **CO1 (Utilize computing as a model for solving real-world problems):** Flowcharts provide a visual framework, a *model*, for translating real-world problems into a logical, computational structure.
*   **CO2 (Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem):** This is where flowcharts shine! They force you to think through every step, every decision, and every input/output, creating that clear and accurate model before you write a single line of code. Using connectors effectively also ensures your model is well-organized.
*   **CO3 (Utilize effective algorithms to solve the formulated models and translate algorithms into executable programs):** Flowcharts are the direct representation of algorithms. Understanding how to depict calculations, decisions, and loops (like the FOR loop hexagon) allows you to design effective algorithms that can then be translated into Python.
*   **CO4 (Interpret problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills):** Flowcharts embody a systematic approach. By learning to read and create them, you're learning a fundamental problem-solving strategy that underpins all programming. The symbols for loops and decisions are directly analogous to Python's control structures.

Remember, flowcharts are not just for computer programs. They are powerful tools for planning and visualizing any sequential process. Whether you're organizing an event, planning a trip, or even detailing a complex cooking recipe, a flowchart can bring clarity. As Donald Treffinger and his colleagues suggest in "Creative Problem Solving," understanding different representation methods aids creative thinking, and flowcharts are a prime example.

### Putting It All Together: A Simple Example

Let's walk through a very simple example: calculating the price of an item after a discount.

Imagine you're buying a shirt that costs $50, and there's a 10% discount.

1.  **START** (Oval)
2.  **Input Price** (Parallelogram: Read `OriginalPrice`)
3.  **Input Discount Rate** (Parallelogram: Read `DiscountRate`)
4.  **Calculate Discount Amount** (Rectangle: `DiscountAmount = OriginalPrice * DiscountRate`)
5.  **Calculate Final Price** (Rectangle: `FinalPrice = OriginalPrice - DiscountAmount`)
6.  **Output Final Price** (Parallelogram: Display `FinalPrice`)
7.  **END** (Oval)

If we connect these with flow-lines, you get a clear picture of the process.

Now, let's add a decision. What if the discount is only applied if the original price is over $30?

1.  **START** (Oval)
2.  **Input Price** (Parallelogram: Read `OriginalPrice`)
3.  **Input Discount Rate** (Parallelogram: Read `DiscountRate`)
4.  **Is OriginalPrice > 30?** (Diamond)
    *   **If YES:**
        *   **Calculate Discount Amount** (Rectangle: `DiscountAmount = OriginalPrice * DiscountRate`)
        *   **Calculate Final Price** (Rectangle: `FinalPrice = OriginalPrice - DiscountAmount`)
        *   **Output Final Price** (Parallelogram: Display `FinalPrice`)
        *   **END** (Oval)
    *   **If NO:**
        *   **Output Original Price** (Parallelogram: Display `OriginalPrice`)
        *   **END** (Oval)

Notice how the diamond branches the flow. This is a basic selection structure.

### Key Takeaways for Your Exams and Understanding

*   **Every flowchart has a definite start and end.** Never forget these!
*   **Each symbol has a specific meaning.** Using the wrong symbol can confuse the logic.
*   **Flow-lines guide the execution path.** Pay attention to their direction.
*   **Diamonds are for decisions.** They introduce branching logic.
*   **Rectangles are for actions/processes.** This is where the work happens.
*   **Parallelograms are for input and output.** They are the interface to the user or data.
*   **Connectors (on-page and off-page) are for organization.** Use them to keep your flowcharts clean and manageable.
*   **The hexagon is a specific symbol for FOR loops.** It visually represents definite iteration.

Understanding these symbols and how they connect is your first step in mastering algorithmic thinking. It’s about building clarity and precision, which are transferable skills across many domains, as highlighted in texts like "Creative Problem Solving."

### Sample Questions and Answers

**Conceptual Question 1:** What is the primary purpose of a flowchart in algorithmic thinking?

*   **Answer:** The primary purpose of a flowchart is to provide a **visual representation** of an algorithm's logic and flow. It helps in understanding, designing, and communicating the step-by-step process of solving a problem, thereby aiding in the clear articulation and modeling of solutions (**CO1, CO2**).

**Exam-Oriented Question 1:** You are designing a flowchart to calculate the average of three numbers entered by the user. Which flowchart symbol would you use for each of the following operations:
    a) Reading the three numbers.
    b) Adding the three numbers.
    c) Checking if the sum is greater than 100.
    d) Displaying the calculated average.

*   **Answer:**
    *   a) Reading the three numbers: **Parallelogram** (Input Operation)
    *   b) Adding the three numbers: **Rectangle** (Process/Arithmetic Calculation)
    *   c) Checking if the sum is greater than 100: **Diamond** (Decision/Selection)
    *   d) Displaying the calculated average: **Parallelogram** (Output Operation)
    *   **Reasoning:** These answers directly map to the defined uses of each symbol: parallelograms for input/output, rectangles for processing, and diamonds for decisions, crucial for representing algorithms as per **CO3**.

**Conceptual Question 2:** When would you choose to use an on-page connector versus an off-page connector?

*   **Answer:** An **on-page connector** (small circle) is used when you need to connect two points within the **same page** of a flowchart, often to avoid long, crossing flow-lines and improve readability. An **off-page connector** (home plate shape) is used when the flowchart logic needs to continue onto **another page**, ensuring the continuation is clearly marked and linked across pages, supporting better organization of complex algorithms (**CO2**).

**Exam-Oriented Question 2:** Consider a flowchart designed to print numbers from 1 to 5. Which symbol is *specifically* associated with representing this kind of repetitive action where the number of iterations is known?

*   **Answer:** The **Hexagon** symbol is specifically associated with representing a "FOR loop" or a definite iteration, such as printing numbers from 1 to 5.
    *   **Reasoning:** While a rectangle could be used to enclose loop logic, the hexagon is a specialized symbol intended to clearly denote a loop with a predetermined number of repetitions, directly reflecting a "for" loop structure essential for **CO3** and **CO4**.

That's a comprehensive overview of flowchart symbols! Make sure you practice drawing them for various simple problems. It's a skill that will pay dividends as we move forward. See you in the next session!
