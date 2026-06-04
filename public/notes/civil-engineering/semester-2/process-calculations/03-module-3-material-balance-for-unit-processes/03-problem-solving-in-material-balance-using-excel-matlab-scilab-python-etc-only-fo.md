---
title: "Problem   solving   in   Material   balance   using   EXCEL/   Matlab/ SCILAB/ PYTHON etc.- only for self-study/microproject/assignment."
subject: "PROCESS CALCULATIONS"
module: "Module 3: Material Balance for unit processes "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912fb6"
status: "completed"
scrapedAt: "2026-05-20T18:38:18.118Z"
---
# Process Calculations: Module 3 - Material Balance for Unit Processes

## Topic: Problem Solving in Material Balance using Computational Tools (Excel/MATLAB/SCILAB/Python)

Welcome, everyone! In our journey through Process Calculations, we've built a strong foundation in understanding material balances for various unit operations and, importantly, unit *processes*. We've learned how to set up those fundamental equations based on the Law of Conservation of Mass. Now, as we move into more complex scenarios, or when we're dealing with large-scale industrial problems, manually solving these systems of equations can become quite tedious and prone to errors. That's where our computational tools come in!

This topic is all about leveraging the power of software like Excel, MATLAB, SCILAB, or Python to solve material balance problems efficiently and accurately. Think of these tools not as replacements for your understanding, but as incredibly powerful assistants that can handle the heavy lifting of calculations, allowing you to focus on the *chemical engineering* aspects – setting up the problem correctly and interpreting the results. This is directly linked to our **Course Outcome 5 (CO5): Implement and run software programs for solving stoichiometric problems (Knowledge Level: K5)**, and it underpins our ability to solve the problems we've been learning about in **CO2** and **CO3**.

### Why Use Computational Tools for Material Balances?

Let's consider a simple analogy. Imagine you're baking a cake. The recipe tells you the proportions of ingredients (flour, sugar, eggs, etc.) – this is like setting up your material balance equations. If you only need a small cake for yourself, you might measure everything by hand. But what if you're baking for a wedding reception with hundreds of guests? You wouldn't be measuring flour cup by cup; you'd use industrial-sized mixers and scales. Similarly, for complex chemical processes with many streams, multiple reactions, and perhaps recycling loops, manual calculations become impractical.

Computational tools offer several advantages:

*   **Efficiency:** They can solve large systems of linear or non-linear equations very quickly.
*   **Accuracy:** Once you've correctly formulated the problem in the software, the calculations are extremely accurate, minimizing human error.
*   **Flexibility:** You can easily change input parameters (like feed rates, conversion, or recycle ratios) and see how the output streams change instantly. This is invaluable for process optimization and sensitivity analysis.
*   **Visualization:** Some tools allow for graphical representation of data, which can aid in understanding process behavior.

### Connecting to Our Learning Outcomes and Course Objectives

Remember our **Course Outcome 1 (CO1)**? It's about understanding chemical composition and physical quantities. When we use these tools, we're inputting these very quantities as variables and parameters. For **CO2** and **CO3**, where we develop material balance equations for unit operations and processes, the computational tool is the *method* we use to solve those equations. We’re still doing the setup, the critical thinking, the problem definition – the software just executes the solution.

For example, if we're looking at a reactor with multiple reactions and a recycle stream, setting up the system of equations can be complex. Manually solving it might involve substitution or matrix methods that are time-consuming. By inputting these equations into Excel, MATLAB, or Python, we can get the solution in seconds.

### Choosing Your Tool: A Quick Overview

The choice of tool often depends on personal preference, familiarity, and the specific nature of the problem.

*   **Microsoft Excel:**
    *   **Strengths:** Widely accessible, user-friendly interface, excellent for tabular data, can use built-in solvers (like Solver Add-in) for optimization and equation solving. Great for simpler, well-defined problems, especially those that can be structured in a spreadsheet format.
    *   **How it works:** You typically set up your balance equations in cells, linking them with formulas. For solving systems of equations, you can use goal seek or the Solver add-in.
    *   **Think of it like:** A super-powered calculator with memory and the ability to follow instructions automatically.

*   **MATLAB/SCILAB:**
    *   **Strengths:** Powerful for numerical computation, matrix operations, algorithm development, and plotting. Excellent for more complex mathematical models and simulations. SCILAB is a free and open-source alternative to MATLAB.
    *   **How it works:** You write scripts (sequences of commands) to define variables, set up equations (often in matrix form), and solve them using built-in functions (e.g., `linsolve` for linear systems, `fsolve` for non-linear systems).
    *   **Think of it like:** A sophisticated laboratory for mathematical experimentation.

*   **Python:**
    *   **Strengths:** Highly versatile, open-source, vast libraries for scientific computing (NumPy, SciPy), data analysis (Pandas), and visualization (Matplotlib). Very popular in academia and industry.
    *   **How it works:** Similar to MATLAB/SCILAB, you write Python scripts using libraries like NumPy for array manipulation and SciPy for numerical methods (e.g., `scipy.optimize.fsolve` for non-linear equations).
    *   **Think of it like:** A versatile toolbox that can handle everything from simple calculations to complex simulations.

For this topic, especially for self-study, microprojects, or assignments, we'll focus on the *principles* of translating material balance problems into a format these tools can understand and solve. The core concept is setting up the equations correctly.

### Translating Material Balances into Computational Form

The process generally involves these key steps, regardless of the tool you choose:

1.  **Understand and Define the Process:** This is the bedrock. Draw your block flow diagram, identify all streams, and label each stream with its components and flow rates (known and unknown). Understand the unit operations or processes involved.
2.  **Identify the Basis of Calculation:** Just like in manual calculations, choose a convenient basis (e.g., 100 kg of feed, 1 hour of operation).
3.  **Formulate the Material Balance Equations:** This is where your understanding of **CO2** and **CO3** is crucial.
    *   **Overall Balance:** Total mass in = Total mass out (or mass change if accumulation occurs).
    *   **Component Balances:** Mass of component in = Mass of component out (for inert components or components consumed/produced in reactions).
    *   **Reaction Stoichiometry:** For reactive systems, you'll need to relate the amounts of reactants consumed and products formed using stoichiometric coefficients. This often introduces additional variables (e.g., extent of reaction).
4.  **Identify Unknowns and Equations:** Count the total number of independent variables (flow rates, compositions) and independent equations you have. For a solvable system, the number of equations must equal the number of unknowns.
5.  **Express Equations for the Software:** This is the translation step.

    *   **For Excel:** You'll assign cells to represent variables. Other cells will contain formulas representing your balance equations. You might set up a table to track stream compositions and flow rates.
    *   **For MATLAB/SCILAB/Python:** You'll define variables as arrays or scalars and write functions or scripts that represent your equations. Often, systems of linear equations are represented in matrix form ($A\mathbf{x} = \mathbf{b}$), where $A$ is the coefficient matrix, $\mathbf{x}$ is the vector of unknowns, and $\mathbf{b}$ is the vector of knowns. For non-linear systems, you'll use appropriate solver functions.

### Example 1: A Simple Separation Process (No Reactions)

Let's consider a classic example: a distillation column separating a binary mixture.

**Scenario:** You have a feed stream F containing 40% mole Benzene (B) and 60% mole Toluene (T). This feed is fed to a distillation column. The overhead product (Distillate, D) is 95% B and 5% T. The bottom product (Bottoms, Btm) is 10% B and 90% T. You know the feed rate is 1000 kg/hr. Your goal is to find the flow rates of the distillate (D) and bottoms (Btm) and their compositions (which are already given, but in a real scenario, you might be solving for these if feed compositions were variable).

**Step 1 & 2: Process & Basis:**
*   Block Flow Diagram: Feed (F) -> Column -> Distillate (D) + Bottoms (Btm)
*   Basis: 1000 kg/hr (given as feed rate F)

**Step 3: Formulate Equations:**
We have two components: Benzene (B) and Toluene (T).

*   **Overall Material Balance:**
    $F = D + \text{Btm}$
    $1000 = D + \text{Btm}$ (Equation 1)

*   **Benzene Balance:**
    $x_{F,B} F = x_{D,B} D + x_{\text{Btm},B} \text{Btm}$
    $0.40 \times 1000 = 0.95 \times D + 0.10 \times \text{Btm}$
    $400 = 0.95 D + 0.10 \text{Btm}$ (Equation 2)

*   **Toluene Balance:**
    $x_{F,T} F = x_{D,T} D + x_{\text{Btm},T} \text{Btm}$
    $0.60 \times 1000 = 0.05 \times D + 0.90 \times \text{Btm}$
    $600 = 0.05 D + 0.90 \text{Btm}$ (Equation 3)

Notice that Equation 3 is linearly dependent on Equations 1 and 2 (if you sum the Benzene and Toluene balances, you get the overall balance). We only need two independent equations to solve for the two unknowns D and Btm. Let's use Equation 1 and Equation 2.

**Step 4: Unknowns and Equations:**
*   Unknowns: D, Btm (2 unknowns)
*   Independent Equations: 2 (e.g., Eq 1 and Eq 2)

**Step 5: Express for Computational Tool**

**Using Excel:**

1.  Open a new Excel workbook.
2.  In cells, assign variables:
    *   Cell A1: `F`
    *   Cell A2: `D`
    *   Cell A3: `Btm`
    *   Cell B1: `1000` (Value of F)
    *   Cell B2: `?` (This is what we want to find for D)
    *   Cell B3: `?` (This is what we want to find for Btm)

3.  Set up the equations:
    *   In cell C1, type "Overall Balance Check:"
    *   In cell D1, enter the formula: `=B2 + B3` (This should ideally equal F, i.e., 1000)
    *   In cell C2, type "Benzene Balance Check:"
    *   In cell D2, enter the formula representing the Benzene balance: `=0.95 * B2 + 0.10 * B3` (This should ideally equal 400)

4.  Use the Solver Add-in:
    *   Go to `Data` tab -> `Solver`. (If you don't see it, you need to enable it via File > Options > Add-ins > Excel Add-ins > Go and check "Solver Add-in").
    *   **Set Objective:** Choose cell `D1` (or `D2`) and set it to `Value Of` `1000` (or `400` if you use Benzene balance as objective).
    *   **By Changing Variable Cells:** Select cells `B2:B3` (where D and Btm are).
    *   Click `Solve`.

    Excel's Solver will iterate through values of D and Btm until the conditions are met.

**Using MATLAB/Python (Conceptual):**

You'd represent the system as a matrix equation.
From Eq 1: $D + \text{Btm} = 1000$
From Eq 2: $0.95 D + 0.10 \text{Btm} = 400$

This can be written as:
$\begin{bmatrix} 1 & 1 \\ 0.95 & 0.10 \end{bmatrix} \begin{bmatrix} D \\ \text{Btm} \end{bmatrix} = \begin{bmatrix} 1000 \\ 400 \end{bmatrix}$

In MATLAB, you'd do something like:
```matlab
A = [1, 1; 0.95, 0.10];
b = [1000; 400];
x = A \ b; % Solves Ax = b
D = x(1);
Btm = x(2);
disp(['Distillate (D): ', num2str(D), ' kg/hr']);
disp(['Bottoms (Btm): ', num2str(Btm), ' kg/hr']);
```

In Python (using NumPy):
```python
import numpy as np

A = np.array([[1, 1], [0.95, 0.10]])
b = np.array([1000, 400])

x = np.linalg.solve(A, b) # Solves Ax = b

D = x[0]
Btm = x[1]

print(f'Distillate (D): {D:.2f} kg/hr')
print(f'Bottoms (Btm): {Btm:.2f} kg/hr')
```

The results would be D = 384.62 kg/hr and Btm = 615.38 kg/hr.

### Example 2: A Reactor with a Recycle Stream (Reactions Involved)

Now, let's tackle a slightly more complex scenario involving a reaction and a recycle. This directly relates to **CO3**.

**Scenario:** Consider the synthesis of ammonia: $\text{N}_2 + 3\text{H}_2 \rightleftharpoons 2\text{NH}_3$.
A reactor is fed with a stoichiometric mixture of Nitrogen ($\text{N}_2$) and Hydrogen ($\text{H}_2$). The conversion of $\text{N}_2$ in the reactor is 30%. The product stream from the reactor is cooled, and the ammonia ($\text{NH}_3$) is separated. The unreacted $\text{N}_2$ and $\text{H}_2$ are recycled back to the reactor along with fresh feed. The separation unit is 100% efficient in removing ammonia.

Let's assume a fresh feed rate of 100 kmol/hr of the stoichiometric mixture.

**Step 1 & 2: Process & Basis:**
*   Block Flow Diagram:
    Fresh Feed -> Mixer -> Reactor -> Separator -> Recycle -> Mixer
    *   Fresh Feed: Stoichiometric $\text{N}_2 + \text{H}_2$
    *   Mixer: Combines Fresh Feed and Recycle stream.
    *   Reactor: $\text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3$. 30% $\text{N}_2$ conversion.
    *   Separator: Removes all $\text{NH}_3$. Recycles unreacted $\text{N}_2$ and $\text{H}_2$.

*   Basis: 100 kmol/hr of fresh feed.

**Stoichiometry and Feed:**
A stoichiometric mixture means $\text{N}_2 : \text{H}_2$ ratio is 1:3.
For a 100 kmol/hr fresh feed:
*   Fresh Feed $\text{N}_2$: (1/4) * 100 = 25 kmol/hr
*   Fresh Feed $\text{H}_2$: (3/4) * 100 = 75 kmol/hr

**Step 3: Formulate Equations**

Let's define streams:
*   **F:** Fresh Feed (25 kmol/hr $\text{N}_2$, 75 kmol/hr $\text{H}_2$)
*   **R:** Recycle Stream (unknown kmol/hr of $\text{N}_2$ and $\text{H}_2$)
*   **M:** Mixed Stream entering Reactor (F + R)
*   **P:** Product Stream leaving Reactor (contains $\text{N}_2$, $\text{H}_2$, $\text{NH}_3$)
*   **S:** Separated Ammonia Stream (all $\text{NH}_3$ from P)
*   **U:** Unreacted Stream leaving Separator (sent to Recycle)

Let's use the **Extent of Reaction** (${\xi}$) for the reactor balance, as this is often cleaner for reactive systems, especially with recycle.
The reaction is $\text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3$.
Let $n_{N_2, M}$, $n_{H_2, M}$, $n_{NH_3, M}$ be kmol/hr of components entering the reactor.
Let $n_{N_2, P}$, $n_{H_2, P}$, $n_{NH_3, P}$ be kmol/hr of components leaving the reactor.

Conversion of $\text{N}_2$ is 30%. This means 30% of the $\text{N}_2$ *entering* the reactor is consumed.
Amount of $\text{N}_2$ consumed = 0.30 * $n_{N_2, M}$

From stoichiometry:
Amount of $\text{H}_2$ consumed = 3 * (Amount of $\text{N}_2$ consumed) = 3 * (0.30 * $n_{N_2, M}$) = 0.90 * $n_{N_2, M}$
Amount of $\text{NH}_3$ produced = 2 * (Amount of $\text{N}_2$ consumed) = 2 * (0.30 * $n_{N_2, M}$) = 0.60 * $n_{N_2, M}$

So, the components leaving the reactor are:
$n_{N_2, P} = n_{N_2, M} - \text{Amount of } \text{N}_2 \text{ consumed} = n_{N_2, M} - 0.30 n_{N_2, M} = 0.70 n_{N_2, M}$
$n_{H_2, P} = n_{H_2, M} - \text{Amount of } \text{H}_2 \text{ consumed} = n_{H_2, M} - 0.90 n_{N_2, M}$
$n_{NH_3, P} = 0 + \text{Amount of } \text{NH}_3 \text{ produced} = 0.60 n_{N_2, M}$ (since fresh feed has no $\text{NH}_3$)

**The Challenge:** We have a recycle stream. This means the stream entering the reactor (M) depends on the stream leaving the separator (U), which in turn depends on the stream leaving the reactor (P). This creates a loop! We need to solve this system simultaneously.

Let's focus on finding the flow rates in the **recycle stream (R)**.
The stream U leaving the separator is sent to recycle (U = R).
The separator removes all $\text{NH}_3$. So, stream U contains only unreacted $\text{N}_2$ and $\text{H}_2$.
$n_{N_2, U} = n_{N_2, P}$
$n_{H_2, U} = n_{H_2, P}$
$n_{NH_3, U} = 0$

The stream M entering the reactor is the sum of Fresh Feed (F) and Recycle (R=U):
$n_{N_2, M} = n_{N_2, F} + n_{N_2, U} = 25 + n_{N_2, P}$
$n_{H_2, M} = n_{H_2, F} + n_{H_2, U} = 75 + n_{H_2, P}$

Now we have a system of equations where the output of the reactor depends on its input, and the input depends on its output.

Let's substitute:
$n_{N_2, P} = 0.70 n_{N_2, M} = 0.70 (25 + n_{N_2, P})$
$n_{H_2, P} = n_{H_2, M} - 0.90 n_{N_2, M} = (75 + n_{H_2, P}) - 0.90 (25 + n_{N_2, P})$

This looks like it might lead to infinite loops if we're not careful! We need to define our unknowns clearly and set up a solvable system.

**A Better Approach for Recycles: Cut and Solve or Overall Balance**

For recycle problems, it's often easier to:
1.  **Make an overall balance around a "cut" that includes the recycle loop.** This allows you to solve for the recycle stream composition/flow rate without immediately considering the internal reactor dynamics.
2.  **Then, use the recycle stream composition to analyze the reactor performance.**

Let's try cutting the loop *before* the mixer.
*   **In:** Fresh Feed (F) + Recycle (R)
*   **Out:** Mixed Stream (M)

So, $M = F + R$.
$n_{N_2, M} = n_{N_2, F} + n_{N_2, R} = 25 + n_{N_2, R}$
$n_{H_2, M} = n_{H_2, F} + n_{H_2, R} = 75 + n_{H_2, R}$

Now, consider the reactor:
$n_{N_2, P} = 0.70 n_{N_2, M}$
$n_{H_2, P} = n_{H_2, M} - 0.90 n_{N_2, M}$
$n_{NH_3, P} = 0.60 n_{N_2, M}$

The separator takes P and outputs U (which is the recycle stream R).
$n_{N_2, R} = n_{N_2, P}$
$n_{H_2, R} = n_{H_2, P}$
$n_{NH_3, R} = 0$

Now we have a system of equations where the variables on the right side are related to variables on the left side. We can substitute!

Substitute the reactor outlet expressions into the recycle stream expressions:
$n_{N_2, R} = 0.70 n_{N_2, M}$
$n_{H_2, R} = n_{H_2, M} - 0.90 n_{N_2, M}$

Now, substitute the mixer expressions for $n_{N_2, M}$ and $n_{H_2, M}$:
$n_{N_2, R} = 0.70 (25 + n_{N_2, R})$
$n_{H_2, R} = (75 + n_{H_2, R}) - 0.90 (25 + n_{N_2, R})$

Let's solve these two equations for the two unknowns $n_{N_2, R}$ and $n_{H_2, R}$.

Equation for $\text{N}_2$ recycle:
$n_{N_2, R} = 17.5 + 0.70 n_{N_2, R}$
$n_{N_2, R} - 0.70 n_{N_2, R} = 17.5$
$0.30 n_{N_2, R} = 17.5$
$n_{N_2, R} = 17.5 / 0.30 = 58.33$ kmol/hr

Equation for $\text{H}_2$ recycle:
$n_{H_2, R} = 75 + n_{H_2, R} - 22.5 - 0.90 n_{N_2, R}$
$n_{H_2, R} = 52.5 + n_{H_2, R} - 0.90 n_{N_2, R}$
This equation is problematic: $0 = 52.5 - 0.90 n_{N_2, R}$. This implies $n_{N_2, R}$ is fixed, which it is (58.33). This indicates there might be an issue in how the $\text{H}_2$ balance was set up, or the problem statement implies something about the recycle composition relative to the reactor outlet.

Let's re-evaluate the $\text{H}_2$ balance. The conversion of $\text{N}_2$ is 30%. The feed to the reactor is stoichiometric ($1:3$ $\text{N}_2:\text{H}_2$).

Let the total molar flow rate of the mixed feed (M) be $M_{total}$.
$n_{N_2, M} = 0.25 M_{total}$
$n_{H_2, M} = 0.75 M_{total}$

Conversion of $\text{N}_2$ = 30%.
$\text{N}_2$ consumed = $0.30 \times n_{N_2, M} = 0.30 \times (0.25 M_{total}) = 0.075 M_{total}$
$\text{H}_2$ consumed = $3 \times (\text{N}_2 \text{ consumed}) = 3 \times (0.075 M_{total}) = 0.225 M_{total}$
$\text{NH}_3$ produced = $2 \times (\text{N}_2 \text{ consumed}) = 2 \times (0.075 M_{total}) = 0.15 M_{total}$

$\text{N}_2$ in product (P) = $n_{N_2, M} - \text{N}_2$ consumed = $0.25 M_{total} - 0.075 M_{total} = 0.175 M_{total}$
$\text{H}_2$ in product (P) = $n_{H_2, M} - \text{H}_2$ consumed = $0.75 M_{total} - 0.225 M_{total} = 0.525 M_{total}$
$\text{NH}_3$ in product (P) = $0.15 M_{total}$

The recycle stream (R) consists of unreacted $\text{N}_2$ and $\text{H}_2$ from the product stream P.
$n_{N_2, R} = n_{N_2, P} = 0.175 M_{total}$
$n_{H_2, R} = n_{H_2, P} = 0.525 M_{total}$

Now, we know the composition of the recycle stream (mole fractions):
Mole fraction $\text{N}_2$ in recycle = $n_{N_2, R} / (n_{N_2, R} + n_{H_2, R}) = (0.175 M_{total}) / (0.175 M_{total} + 0.525 M_{total}) = 0.175 / 0.70 = 0.25$
Mole fraction $\text{H}_2$ in recycle = $n_{H_2, R} / (n_{N_2, R} + n_{H_2, R}) = (0.525 M_{total}) / (0.70 M_{total}) = 0.525 / 0.70 = 0.75$

This is a critical observation! The *composition* of the recycle stream is the same as the fresh feed composition. This happens because the conversion is defined *relative* to the feed to the reactor, and the feed to the reactor (M) is made up of fresh feed (F) and recycle (R). If the recycle composition is the same as the fresh feed, then the mixed feed composition (M) will also be the same.

Let's assume the composition of M is indeed stoichiometric (25% $\text{N}_2$, 75% $\text{H}_2$).
Then $n_{N_2, M} = 0.25 M_{total}$ and $n_{H_2, M} = 0.75 M_{total}$.
With 30% $\text{N}_2$ conversion:
$\text{N}_2$ consumed = $0.30 \times (0.25 M_{total}) = 0.075 M_{total}$
$\text{H}_2$ consumed = $3 \times 0.075 M_{total} = 0.225 M_{total}$

$\text{N}_2$ remaining in product (P) = $0.25 M_{total} - 0.075 M_{total} = 0.175 M_{total}$
$\text{H}_2$ remaining in product (P) = $0.75 M_{total} - 0.225 M_{total} = 0.525 M_{total}$

The recycle stream (R) is this unreacted $\text{N}_2$ and $\text{H}_2$.
$n_{N_2, R} = 0.175 M_{total}$
$n_{H_2, R} = 0.525 M_{total}$

The fresh feed is 100 kmol/hr, with 25 kmol/hr $\text{N}_2$ and 75 kmol/hr $\text{H}_2$.
The total molar flow rate entering the mixer is $F_{total} + R_{total} = 100 + n_{N_2, R} + n_{H_2, R} = 100 + 0.175 M_{total} + 0.525 M_{total} = 100 + 0.70 M_{total}$.
This is $M_{total}$.
So, $M_{total} = 100 + 0.70 M_{total}$.
$0.30 M_{total} = 100$
$M_{total} = 100 / 0.30 = 333.33$ kmol/hr.

Now we can find all stream flows:
$n_{N_2, M} = 0.25 \times 333.33 = 83.33$ kmol/hr
$n_{H_2, M} = 0.75 \times 333.33 = 250.00$ kmol/hr

$\text{N}_2$ consumed = $0.30 \times 83.33 = 25.00$ kmol/hr
$\text{H}_2$ consumed = $3 \times 25.00 = 75.00$ kmol/hr
$\text{NH}_3$ produced = $2 \times 25.00 = 50.00$ kmol/hr

Reactor Outlet (P):
$n_{N_2, P} = 83.33 - 25.00 = 58.33$ kmol/hr
$n_{H_2, P} = 250.00 - 75.00 = 175.00$ kmol/hr
$n_{NH_3, P} = 50.00$ kmol/hr

Recycle Stream (R = U):
$n_{N_2, R} = n_{N_2, P} = 58.33$ kmol/hr
$n_{H_2, R} = n_{H_2, P} = 175.00$ kmol/hr

Let's check the mixer input:
Mixed Feed ($M$) = Fresh Feed (F) + Recycle (R)
$n_{N_2, M} = n_{N_2, F} + n_{N_2, R} = 25 + 58.33 = 83.33$ kmol/hr (Matches our calculated $n_{N_2, M}$)
$n_{H_2, M} = n_{H_2, F} + n_{H_2, R} = 75 + 175.00 = 250.00$ kmol/hr (Matches our calculated $n_{H_2, M}$)

**What are we asked to find?** Typically, it's the flow rate of ammonia produced, or the overall yield.
*   Ammonia produced = 50.00 kmol/hr.
*   Overall yield of $\text{NH}_3$ (based on $\text{N}_2$ fed) = $\frac{\text{kmol NH}_3 \text{ produced}}{\text{kmol } \text{N}_2 \text{ fed fresh}} = \frac{50.00}{25.00} = 2$ (or 200% yield, which is correct as we are recycling $\text{N}_2$).

**Using Computational Tools for this Recycle Problem:**

This is where computational tools shine, especially if the conversion wasn't constant or if the feed wasn't stoichiometric, making the recycle composition different from the fresh feed.

Let's define variables:
*   $F_{N2} = 25$
*   $F_{H2} = 75$
*   $R_{N2}$, $R_{H2}$ = flow rates of N2 and H2 in recycle stream.
*   $M_{N2} = F_{N2} + R_{N2} = 25 + R_{N2}$
*   $M_{H2} = F_{H2} + R_{H2} = 75 + R_{H2}$
*   $\text{Conv}_{N2} = 0.30$
*   $N2_{Consumed} = \text{Conv}_{N2} \times M_{N2}$
*   $H2_{Consumed} = 3 \times N2_{Consumed}$
*   $NH3_{Produced} = 2 \times N2_{Consumed}$
*   $P_{N2} = M_{N2} - N2_{Consumed}$
*   $P_{H2} = M_{H2} - H2_{Consumed}$
*   $R_{N2} = P_{N2}$ (since separator removes NH3)
*   $R_{H2} = P_{H2}$

Now we have a system of equations to solve for $R_{N2}$ and $R_{H2}$:
1.  $R_{N2} = (25 + R_{N2}) - 0.30 \times (25 + R_{N2})$
2.  $R_{H2} = (75 + R_{H2}) - 3 \times [0.30 \times (25 + R_{N2})]$

Let's simplify and solve these:

From equation 1:
$R_{N2} = 25 + R_{N2} - 7.5 - 0.30 R_{N2}$
$R_{N2} = 17.5 + 0.70 R_{N2}$
$0.30 R_{N2} = 17.5$
$R_{N2} = 17.5 / 0.30 = 58.33$ kmol/hr

From equation 2:
$R_{H2} = 75 + R_{H2} - 0.90 \times (25 + R_{N2})$
$R_{H2} = 75 + R_{H2} - 22.5 - 0.90 R_{N2}$
$0 = 52.5 - 0.90 R_{N2}$
$0.90 R_{N2} = 52.5$
$R_{N2} = 52.5 / 0.90 = 58.33$ kmol/hr

These equations confirm that our previous assumption about the recycle stream needing to satisfy the stoichiometry was correct, and the problem is solvable. The key is setting up these linked equations.

**Using MATLAB/Python for this:**

You would define functions that represent these relationships. For example, you could define a function `residuals(vars)` where `vars` is a vector containing $[R_{N2}, R_{H2}]$, and the function returns the difference between the left and right sides of our equations:

Equation 1: $f_1(R_{N2}, R_{H2}) = R_{N2} - ( (25 + R_{N2}) - 0.30 \times (25 + R_{N2}) )$
Equation 2: $f_2(R_{N2}, R_{H2}) = R_{H2} - ( (75 + R_{H2}) - 3 \times [0.30 \times (25 + R_{N2})] )$

Then you'd use a solver like `fsolve` in Python or `fsolve` in MATLAB.

**Python Example:**
```python
import numpy as np
from scipy.optimize import fsolve

# Define known values
F_N2 = 25.0  # kmol/hr
F_H2 = 75.0  # kmol/hr
Conv_N2 = 0.30
Stoich_H2_N2 = 3.0
Stoich_NH3_N2 = 2.0

# Define the system of equations for recycle streams R_N2 and R_H2
def recycle_balances(vars):
    R_N2, R_H2 = vars

    # Molar flow rates entering the reactor (Mixed stream M)
    M_N2 = F_N2 + R_N2
    M_H2 = F_H2 + R_H2

    # Components consumed in the reactor
    N2_consumed = Conv_N2 * M_N2
    H2_consumed = Stoich_H2_N2 * N2_consumed

    # Components leaving the reactor (Product stream P)
    P_N2 = M_N2 - N2_consumed
    P_H2 = M_H2 - H2_consumed
    # P_NH3 = Stoich_NH3_N2 * N2_consumed # Not needed for recycle balance

    # The recycle stream R is the unreacted part of P
    # Equation 1: R_N2 = P_N2
    eq1 = R_N2 - P_N2
    # Equation 2: R_H2 = P_H2
    eq2 = R_H2 - P_H2

    return [eq1, eq2]

# Initial guess for recycle stream flows
initial_guess = [10.0, 10.0] # kmol/hr

# Solve the system of equations
recycle_flows = fsolve(recycle_balances, initial_guess)

R_N2_sol, R_H2_sol = recycle_flows

print(f"Recycle N2 flow rate: {R_N2_sol:.2f} kmol/hr")
print(f"Recycle H2 flow rate: {R_H2_sol:.2f} kmol/hr")

# Calculate other stream flows for completeness
M_N2_sol = F_N2 + R_N2_sol
M_H2_sol = F_H2 + R_H2_sol
N2_consumed_sol = Conv_N2 * M_N2_sol
NH3_produced_sol = Stoich_NH3_N2 * N2_consumed_sol

print(f"Mixed Feed N2 flow rate (to reactor): {M_N2_sol:.2f} kmol/hr")
print(f"Mixed Feed H2 flow rate (to reactor): {M_H2_sol:.2f} kmol/hr")
print(f"Ammonia produced: {NH3_produced_sol:.2f} kmol/hr")
```

This kind of problem is a perfect candidate for using these tools, as it involves setting up and solving a system of non-linear (or linearizable) equations that are interconnected due to the recycle loop.

### Dealing with Multiple Reactions and Complex Splits

As problems become more involved, with multiple reactions, side reactions, or complex phase splits (like distillation or extraction), the number of variables and equations can grow rapidly. This is where the power of matrix algebra (for linear systems) and iterative numerical methods (for non-linear systems) becomes essential, and the software is your best friend.

For instance, in a distillation column with multiple components and trays, you might have hundreds of variables and equations based on equilibrium stages and component balances. Solving this manually would be nearly impossible. Software packages are designed to handle these types of large-scale simulations.

### Important Considerations and Pitfalls

*   **Garbage In, Garbage Out (GIGO):** The accuracy of your results depends entirely on the accuracy of the equations you set up. Double-check your stoichiometric coefficients, conversion definitions, and balance equations. This is where your understanding from **CO1, CO2, CO3** is paramount.
*   **Choosing the Right Equations:** Ensure you have a sufficient number of *independent* equations to solve for all unknowns. Don't forget overall balances, component balances, reaction stoichiometry, and physical constraints (like sum of mole fractions = 1).
*   **Numerical Stability:** For complex, non-linear systems, the choice of initial guess for iterative solvers can be important. Sometimes, solving a simplified version of the problem first to get a good initial guess can help.
*   **Units:** Be consistent with units throughout your model. While software can sometimes handle unit conversions, it's best practice to define everything in a consistent set of units from the start.
*   **Understanding the Output:** Don't just blindly accept the numbers. Do they make physical sense? Are the flow rates positive? Are compositions within reasonable ranges? This relates back to **CO1** and critical thinking.

### Summary and Key Takeaways

*   Computational tools (Excel, MATLAB, SCILAB, Python) are powerful aids for solving material balance problems, especially for complex processes.
*   They enhance efficiency and accuracy, allowing focus on problem formulation and interpretation.
*   The core skill remains the ability to correctly set up material balance equations based on unit operations and processes (**CO2, CO3**).
*   For linear systems, matrix methods ($A\mathbf{x} = \mathbf{b}$) are often used. For non-linear systems, iterative solvers are employed.
*   Recycle streams often require careful setup, potentially involving solving systems of interconnected equations or using cut-and-solve techniques.
*   Always verify your model setup and the reasonableness of your results.

Remember, these tools are extensions of your understanding. The more robust your grasp of material balances, the more effectively you can use these tools to solve challenging chemical engineering problems, fulfilling **CO5**.

---

## Sample Questions and Answers

**Q1. Conceptual Question:** Why is it important to ensure the number of independent equations equals the number of unknowns when solving material balance problems using computational tools?

**Answer:** This principle stems directly from fundamental algebra. In a system of linear equations, each independent equation provides a unique constraint on the variables. If you have fewer equations than unknowns, there will be infinitely many solutions, and you won't be able to determine a unique set of flow rates or compositions. If you have more equations than unknowns, the system is overdetermined, and it might indicate an error in your formulation (e.g., including a linearly dependent equation) or that some equations are redundant. Computational solvers require a precisely determined system to yield a single, meaningful answer. This ensures that the results are physically realistic and unique for the given process conditions, directly supporting our ability to **CO2** and **CO3**.

**Q2. Application Question:** A feed stream F containing 20% A and 80% B enters a reactor. The reaction is $A \rightarrow B$. The conversion of A in the reactor is 50%. The product stream P from the reactor is sent to a separator. The separator sends all of B to product and recycles A back to the reactor. The fresh feed rate is 100 kg/hr. What is the flow rate of the recycle stream containing only A?

**Answer:**
Let's denote flows in kg/hr.
Basis: 100 kg/hr Fresh Feed (F).
$F_A = 0.20 \times 100 = 20$ kg/hr
$F_B = 0.80 \times 100 = 80$ kg/hr

The reaction is $A \rightarrow B$.
Conversion of A is 50%.
Let $M_A$ and $M_B$ be the flow rates of A and B entering the reactor (Mixed Stream M).
Let $P_A$ and $P_B$ be the flow rates of A and B leaving the reactor (Product Stream P).

The recycle stream (R) contains only A. So, $R_B = 0$.
The mixed stream M is Fresh Feed (F) + Recycle (R).
$M_A = F_A + R_A = 20 + R_A$
$M_B = F_B + R_B = 80 + 0 = 80$ kg/hr

Reactor balance for A:
A consumed = $0.50 \times M_A$
A remaining ($P_A$) = $M_A - (\text{A consumed}) = M_A - 0.50 M_A = 0.50 M_A$

The separator sends all B to product ($P_B$ is product) and recycles A ($R_A = P_A$).
So, $R_A = P_A$.

Now we have the system:
1.  $M_A = 20 + R_A$
2.  $P_A = 0.50 M_A$
3.  $R_A = P_A$

Substitute (1) into (2):
$P_A = 0.50 \times (20 + R_A)$

Now substitute this into (3):
$R_A = 0.50 \times (20 + R_A)$
$R_A = 10 + 0.50 R_A$
$R_A - 0.50 R_A = 10$
$0.50 R_A = 10$
$R_A = 10 / 0.50 = 20$ kg/hr

The flow rate of the recycle stream containing only A is **20 kg/hr**.

This problem is suitable for Excel: Set up cells for $F_A, F_B, R_A, M_A, M_B, P_A$. Link them with formulas as above. Use Solver to find $R_A$ such that $R_A = P_A$, where $P_A$ is calculated based on $M_A$ which in turn depends on $R_A$.

**Q3. MATLAB/Python Application Question:** A feed stream of 1000 kg/hr contains 60% n-hexane (H) and 40% n-heptane (Hp). This stream is fed to a flash drum. The vapor product contains 80% n-hexane and 20% n-heptane. The liquid product contains 30% n-hexane and 70% n-heptane. Write down the equations that would be solved using MATLAB or Python to find the flow rates of the vapor (V) and liquid (L) products.

**Answer:**
Let the total feed rate F = 1000 kg/hr.
Feed composition:
$x_{F,H} = 0.60$
$x_{F,Hp} = 0.40$

Vapor product (V):
$y_{V,H} = 0.80$
$y_{V,Hp} = 0.20$

Liquid product (L):
$x_{L,H} = 0.30$
$x_{L,Hp} = 0.70$

We need to find V and L.

**Equations:**

1.  **Overall Material Balance:**
    $F = V + L$
    $1000 = V + L$

2.  **Component Balance for n-hexane (H):**
    Flow of H in Feed = Flow of H in Vapor + Flow of H in Liquid
    $x_{F,H} \times F = y_{V,H} \times V + x_{L,H} \times L$
    $0.60 \times 1000 = 0.80 \times V + 0.30 \times L$
    $600 = 0.80 V + 0.30 L$

3.  **Component Balance for n-heptane (Hp):**
    Flow of Hp in Feed = Flow of Hp in Vapor + Flow of Hp in Liquid
    $x_{F,Hp} \times F = y_{V,Hp} \times V + x_{L,Hp} \times L$
    $0.40 \times 1000 = 0.20 \times V + 0.70 \times L$
    $400 = 0.20 V + 0.70 L$

We have three equations, but only two unknowns (V and L). Any two of these equations are independent. For instance, using the Overall Balance and the n-hexane balance:

The system to be solved for V and L is:
*   $V + L = 1000$
*   $0.80 V + 0.30 L = 600$

This is a system of two linear equations in two variables. In matrix form for MATLAB/Python:
$\begin{bmatrix} 1 & 1 \\ 0.80 & 0.30 \end{bmatrix} \begin{bmatrix} V \\ L \end{bmatrix} = \begin{bmatrix} 1000 \\ 600 \end{bmatrix}$

Solving this would yield the values for V and L, which can then be used to check the n-heptane balance.
