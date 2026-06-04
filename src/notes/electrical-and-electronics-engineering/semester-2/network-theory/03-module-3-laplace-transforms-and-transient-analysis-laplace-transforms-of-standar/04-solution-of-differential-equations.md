---
title: "Solution of differential equations"
subject: "NETWORK THEORY"
module: "Module 3: Laplace transforms and transient analysis: Laplace transforms of standard signals and common functions"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9881"
status: "completed"
scrapedAt: "2026-05-23T16:08:39.181Z"
---
# Network Theory: Module 3 - Laplace Transforms and Transient Analysis

## Topic: Solution of Differential Equations

Welcome, everyone! In this module, we're diving into one of the most powerful tools in our network analysis arsenal: the **Laplace Transform**. Specifically, today we're going to focus on how this tool helps us conquer a challenge that often seems daunting: **solving differential equations**, particularly those that describe the behavior of electrical circuits over time – our **transient analysis**.

You've all seen them, right? Those equations involving derivatives and integrals that pop up when we analyze circuits with capacitors and inductors. They tell us how voltages and currents change, how they *transiently* behave before settling down. And while we can, in theory, solve them using classical methods, it can be quite cumbersome, especially for more complex circuits.

This is where the Laplace Transform comes in, like a superhero swooping in to simplify things. It takes these time-domain differential equations and transforms them into algebraic equations in the *frequency domain* (or *s-domain*, as we call it). Algebraic equations are generally much easier to manipulate and solve. Once we have our solution in the s-domain, we can then use the *inverse Laplace Transform* to bring it back to the time domain, giving us the actual voltage or current waveforms we're looking for.

This ties directly into our **Course Outcome 3 (CO3): Analyze transient behavior of electrical networks using Laplace transforms (Knowledge Level: K4)**. By the end of this session, you'll be equipped to not just understand, but *analyze* these transient behaviors, which is crucial for designing and troubleshooting circuits. You’ll see how this technique connects to our ability to understand how a circuit "wakes up" after a switch is thrown or a voltage source is applied.

### Bridging the Gap: From Time Domain to s-Domain

Think of it like this: imagine you have a complex dance routine (the differential equation). Trying to figure out each individual step, the timing, the turns, all in real-time, can be overwhelming. The Laplace Transform is like creating a musical score for that dance. The score (the s-domain equation) breaks down the entire routine into individual notes and their durations, making it much easier to read, understand, and even modify. Once you have the score, you can then translate it back into the dance steps.

**Key Idea:** The Laplace Transform is a mathematical operator that converts a function of time, $f(t)$, into a function of complex frequency, $F(s)$.

The formal definition is:
$F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty e^{-st} f(t) dt$

Where:
*   $f(t)$ is the function in the time domain.
*   $F(s)$ is the function in the s-domain (or Laplace domain).
*   $s$ is the complex frequency, $s = \sigma + j\omega$.
*   The integral is from $0$ to infinity, which is why this transform is particularly useful for circuits that start at $t=0$ (like when a switch is closed).

### The Power of Laplace Transforms in Solving Differential Equations

So, how does this help us with differential equations? Let's consider a general linear ordinary differential equation with constant coefficients. For example, something like:

$a \frac{d^2y}{dt^2} + b \frac{dy}{dt} + cy = f(t)$

When we apply the Laplace Transform to each term, a few magical things happen:

1.  **Derivatives become multiplication by $s$**:
    *   $\mathcal{L}\{\frac{dy}{dt}\} = sY(s) - y(0)$
    *   $\mathcal{L}\{\frac{d^2y}{dt^2}\} = s^2Y(s) - sy(0) - y'(0)$
    Here, $Y(s) = \mathcal{L}\{y(t)\}$, $y(0)$ is the initial value of $y$ at $t=0$, and $y'(0)$ is the initial value of its derivative. Notice how the initial conditions are automatically incorporated! This is a huge advantage over classical methods.

2.  **Integrals become division by $s$**:
    *   $\mathcal{L}\{\int_0^t y(\tau) d\tau\} = \frac{Y(s)}{s}$

3.  **The Laplace Transform of the forcing function $f(t)$**: We find this from our standard Laplace transform tables, which we'll be using extensively. For instance, if $f(t)$ is a unit step function, $u(t)$, its Laplace transform is $1/s$.

**The Big Win:** Applying these rules transforms our differential equation into an algebraic equation in terms of $Y(s)$ and $s$.

Let's illustrate with our example equation:
$a \mathcal{L}\{\frac{d^2y}{dt^2}\} + b \mathcal{L}\{\frac{dy}{dt}\} + c \mathcal{L}\{y\} = \mathcal{L}\{f(t)\}$

Substituting the s-domain equivalents:
$a[s^2Y(s) - sy(0) - y'(0)] + b[sY(s) - y(0)] + cY(s) = F(s)$

Now, let's rearrange this to solve for $Y(s)$:
$Y(s)[as^2 + bs + c] - a[sy(0) + y'(0)] - b[y(0)] = F(s)$
$Y(s)[as^2 + bs + c] = F(s) + a[sy(0) + y'(0)] + b[y(0)]$
$Y(s) = \frac{F(s) + a[sy(0) + y'(0)] + b[y(0)]}{as^2 + bs + c}$

See what happened? The differential equation is gone! We now have an expression for $Y(s)$, which is simply a rational function of $s$ (a ratio of two polynomials in $s$). Our next steps will be to simplify this expression and then use the inverse Laplace transform to get back to $y(t)$.

This process is what allows us to achieve **CO3**, by systematically converting the time-domain dynamics into an algebraic problem.

### Handling Initial Conditions: The "Memory" of the Circuit

A crucial aspect of solving differential equations for circuits is accounting for the initial conditions. For a capacitor, this means its initial voltage; for an inductor, its initial current. These initial conditions represent the "state" of the circuit at $t=0$, or before our analysis really begins.

In our Laplace transform approach, the initial conditions ($y(0)$, $y'(0)$, etc.) appear as terms that are added to the excitation term ($F(s)$) on the right-hand side of the transformed equation. This is a very elegant way to include them.

**Recall from your textbooks (like Irwin & Nelms, Kuo, Sudhakar & Shyammohan, or Van Valkenburg):** When you deal with circuits, initial conditions for capacitors ($v_C(0)$) and inductors ($i_L(0)$) are directly used.

*   An inductor with initial current $I_0$ can be modeled in the s-domain as a voltage source of value $L I_0$ in series with an inductor of inductance $L$.
*   A capacitor with initial voltage $V_0$ can be modeled in the s-domain as a current source of value $C V_0$ in parallel with a capacitor of capacitance $C$.

These circuit element models directly lead to the initial condition terms in the transformed differential equations we derived above.

### Step-by-Step Process for Solving Differential Equations using Laplace Transforms

Let's outline a clear, actionable process that we can follow for any such problem. This is your roadmap to tackling these questions in exams.

**Step 1: Formulate the Differential Equation**
This involves writing down Kirchhoff's Voltage Law (KVL) or Kirchhoff's Current Law (KCL) for the circuit, expressing the relationship between voltages and currents, and then substituting component relationships ($v_C = \frac{1}{C}\int i dt$, $v_L = L \frac{di}{dt}$) to get a single differential equation in terms of the unknown voltage or current. This step often utilizes **CO1: Analyze electrical networks using mesh and node methods**.

**Step 2: Determine Initial Conditions**
Identify the voltage across capacitors and the current through inductors at time $t=0^-$. These are the values just before the circuit is activated (e.g., switch closed).

**Step 3: Apply the Laplace Transform**
Transform the entire differential equation into the s-domain using the Laplace transform rules, paying close attention to the initial condition terms. You'll need your Laplace transform tables here!

**Step 4: Solve for the Unknown in the s-Domain**
This now becomes an algebraic problem. Isolate the Laplace transform of the desired variable (e.g., $V(s)$ or $I(s)$). This usually involves some algebraic manipulation, like partial fraction expansion.

**Step 5: Apply the Inverse Laplace Transform**
Use the inverse Laplace transform to convert the s-domain solution back into the time domain, giving you the transient response $v(t)$ or $i(t)$. Again, tables are your best friend here!

**Step 6: Verify the Solution (Optional but Recommended)**
Check if your time-domain solution satisfies the original differential equation and the initial conditions. This is a good way to catch errors.

### Example: A Simple RC Circuit

Let's work through a relatable example. Imagine a simple series RC circuit with a switch that closes at $t=0$, connecting the circuit to a DC voltage source, $V_s$.

![Simple RC circuit with switch](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RC_circuit_with_DC_source.svg/300px-RC_circuit_with_DC_source.svg.png)
*(Image conceptual, not directly from textbooks, but illustrating a standard circuit)*

Let's say we want to find the voltage across the capacitor, $v_C(t)$, for $t \ge 0$.
Assume the capacitor is initially uncharged, so $v_C(0) = 0$.

**Step 1: Formulate the Differential Equation**
Using KVL for the loop:
$V_s u(t) - R i(t) - v_C(t) = 0$
We know that $i(t) = C \frac{dv_C(t)}{dt}$. Substituting this into the KVL equation:
$V_s u(t) - R \left(C \frac{dv_C(t)}{dt}\right) - v_C(t) = 0$
Rearranging to a standard form:
$RC \frac{dv_C(t)}{dt} + v_C(t) = V_s u(t)$

This is a first-order linear ordinary differential equation.

**Step 2: Determine Initial Conditions**
We are given that the capacitor is initially uncharged: $v_C(0) = 0$.

**Step 3: Apply the Laplace Transform**
Let $V_C(s) = \mathcal{L}\{v_C(t)\}$.
We know $\mathcal{L}\{u(t)\} = \frac{1}{s}$.
And $\mathcal{L}\{\frac{dv_C(t)}{dt}\} = sV_C(s) - v_C(0)$.

Applying the transform to our equation:
$RC [sV_C(s) - v_C(0)] + V_C(s) = V_s \left(\frac{1}{s}\right)$

Substitute $v_C(0) = 0$:
$RC [sV_C(s) - 0] + V_C(s) = \frac{V_s}{s}$
$RCsV_C(s) + V_C(s) = \frac{V_s}{s}$

**Step 4: Solve for $V_C(s)$ in the s-Domain**
Factor out $V_C(s)$:
$V_C(s) [RCs + 1] = \frac{V_s}{s}$

Now, isolate $V_C(s)$:
$V_C(s) = \frac{V_s}{s(RCs + 1)}$

To make it easier for partial fraction expansion, let's factor out RC from the denominator:
$V_C(s) = \frac{V_s}{RCs(s + \frac{1}{RC})}$

Now, we perform a partial fraction expansion on this expression. We want to express it in the form:
$V_C(s) = \frac{A}{s} + \frac{B}{s + \frac{1}{RC}}$

Multiply both sides by $s(s + \frac{1}{RC})$:
$V_s = A(s + \frac{1}{RC}) + Bs$

To find $A$, set $s=0$:
$V_s = A(0 + \frac{1}{RC}) + B(0) \implies V_s = A \frac{1}{RC} \implies A = V_s RC$

To find $B$, set $s = -\frac{1}{RC}$:
$V_s = A(-\frac{1}{RC} + \frac{1}{RC}) + B(-\frac{1}{RC}) \implies V_s = 0 + B(-\frac{1}{RC}) \implies B = -V_s RC$

So, our expression for $V_C(s)$ becomes:
$V_C(s) = \frac{V_s RC}{s} - \frac{V_s RC}{s + \frac{1}{RC}}$

Wait, there's a slight simplification possible. We often write the denominator as $s + \frac{1}{\tau}$, where $\tau = RC$ is the time constant.
So, $V_C(s) = \frac{V_s}{s(s + \frac{1}{\tau})}$

Let's redo the partial fraction with this form:
$\frac{V_s}{s(s + \frac{1}{\tau})} = \frac{A}{s} + \frac{B}{s + \frac{1}{\tau}}$
$V_s = A(s + \frac{1}{\tau}) + Bs$

Set $s=0$: $V_s = A(\frac{1}{\tau}) \implies A = V_s \tau$
Set $s=-\frac{1}{\tau}$: $V_s = B(-\frac{1}{\tau}) \implies B = -V_s \tau$

So, $V_C(s) = \frac{V_s \tau}{s} - \frac{V_s \tau}{s + \frac{1}{\tau}}$

**Step 5: Apply the Inverse Laplace Transform**
Now we use our Laplace transform tables to go back to the time domain.

We know:
*   $\mathcal{L}^{-1}\{\frac{1}{s}\} = u(t)$ (unit step function)
*   $\mathcal{L}^{-1}\{\frac{a}{s+a}\} = ae^{-at}u(t)$

Applying these:
$v_C(t) = \mathcal{L}^{-1}\{V_C(s)\} = \mathcal{L}^{-1}\left\{\frac{V_s \tau}{s} - \frac{V_s \tau}{s + \frac{1}{\tau}}\right\}$
$v_C(t) = V_s \tau \mathcal{L}^{-1}\left\{\frac{1}{s}\right\} - V_s \tau \mathcal{L}^{-1}\left\{\frac{1}{s + \frac{1}{\tau}}\right\}$

This is not quite right. Let's look at the form $\frac{a}{s+a}$. We have $s + \frac{1}{\tau}$ in the denominator. So, the numerator needs to be $\frac{1}{\tau}$ to use that form directly.

Let's rewrite $V_C(s)$ as:
$V_C(s) = \frac{V_s}{s(s + \frac{1}{\tau})} = \frac{V_s}{\frac{1}{\tau} \cdot \tau s (s + \frac{1}{\tau})} = \frac{V_s \tau}{\tau s (s + \frac{1}{\tau})}$ - this is getting complicated.

Let's use the standard form of partial fractions again.
$V_C(s) = \frac{V_s}{s(RCs + 1)}$
Let $RC = \tau$.
$V_C(s) = \frac{V_s}{s(\tau s + 1)}$

Partial fraction expansion:
$\frac{V_s}{s(\tau s + 1)} = \frac{A}{s} + \frac{B}{\tau s + 1}$
$V_s = A(\tau s + 1) + Bs$

Set $s=0$: $V_s = A(0+1) \implies A = V_s$.
Set $\tau s + 1 = 0 \implies s = -1/\tau$: $V_s = B(-1/\tau) \implies B = -V_s \tau$.

So, $V_C(s) = \frac{V_s}{s} - \frac{V_s \tau}{\tau s + 1}$.
To use the standard inverse transform $\mathcal{L}^{-1}\{\frac{a}{s+a}\} = ae^{-at}u(t)$, we need the numerator to be 1 for the term $\frac{1}{s+1/\tau}$.
Let's rewrite the second term:
$\frac{V_s \tau}{\tau s + 1} = \frac{V_s \tau}{\tau(s + \frac{1}{\tau})} = \frac{V_s}{s + \frac{1}{\tau}}$.

Ah, this is much cleaner!
So, $V_C(s) = \frac{V_s}{s} - \frac{V_s}{s + \frac{1}{\tau}}$.

Now, applying the inverse Laplace transform:
$v_C(t) = \mathcal{L}^{-1}\left\{\frac{V_s}{s}\right\} - \mathcal{L}^{-1}\left\{\frac{V_s}{s + \frac{1}{\tau}}\right\}$
$v_C(t) = V_s \mathcal{L}^{-1}\left\{\frac{1}{s}\right\} - V_s \mathcal{L}^{-1}\left\{\frac{1}{s + \frac{1}{\tau}}\right\}$

Using the standard transforms:
$\mathcal{L}^{-1}\left\{\frac{1}{s}\right\} = u(t)$
$\mathcal{L}^{-1}\left\{\frac{1}{s+a}\right\} = e^{-at}u(t)$

With $a = \frac{1}{\tau}$:
$v_C(t) = V_s u(t) - V_s e^{-\frac{1}{\tau}t} u(t)$
$v_C(t) = V_s (1 - e^{-t/\tau}) u(t)$

Since $\tau = RC$, the solution is:
$v_C(t) = V_s (1 - e^{-t/RC}) u(t)$

This is the classic charging curve for a capacitor in an RC circuit. At $t=0$, $v_C(0)=0$. As $t \to \infty$, $v_C(t) \to V_s$. This makes physical sense! And it beautifully demonstrates how Laplace transforms handle initial conditions and arrive at the time-domain solution. This process directly addresses **CO3**.

### Analogies and Visualization

Think about the capacitor charging. Initially, it's like an empty bucket trying to catch water from a tap. The rate it fills depends on how much it's already filled. The differential equation describes this changing rate. The Laplace transform takes this "rate of change" problem and turns it into an algebraic problem about "amounts" in the s-domain. The initial condition $v_C(0)=0$ means the bucket starts empty. The $V_s$ is the water pressure from the tap. The $1 - e^{-t/RC}$ part describes how the filling rate changes over time, slowing down as the bucket gets fuller, until it reaches the tap's water level.

### Common Pitfalls and Exam Tips

*   **Forgetting Initial Conditions:** This is a big one! Always remember to include $y(0)$, $y'(0)$, etc., when transforming derivatives. These are not zero unless explicitly stated.
*   **Incorrect Laplace Transforms:** Double-check your tables for standard functions and transform pairs. Small errors here cascade.
*   **Partial Fraction Expansion Errors:** This is a common algebraic stumbling block. Practice these! Ensure you cover all roots, including repeated ones if they arise.
*   **Inverse Laplace Transform Errors:** Make sure the form you get after partial fractions matches a standard transform pair. Sometimes you might need to manipulate it slightly, like factoring out a constant.
*   **Including $u(t)$:** Remember that the Laplace transform is defined for $t \ge 0$, so the resulting time-domain solution should technically be multiplied by the unit step function $u(t)$, indicating it's valid from $t=0$ onwards.

### Connecting to Other Course Outcomes

While our primary focus today is **CO3**, the techniques we've discussed are foundational for other outcomes:

*   **CO1 (Mesh and Node Methods):** The very first step of formulating the differential equation relies on correctly applying KVL and KCL, which you learn in mesh and node analysis.
*   **CO2 (Network Theorems):** While we're not directly applying superposition or Thevenin's theorem *during* the Laplace transform solution, the *initial formulation* of the circuit might sometimes be simplified using these theorems before you even start writing the differential equation. For instance, if you have a complex source, you might find its equivalent DC value for steady-state and then consider the transient part separately. However, the Laplace transform approach is more general and often bypasses the need for some theorem applications in transient analysis.
*   **CO4 (Network Functions):** The expression $Y(s)$ that we solve for is essentially the *network function* (or transfer function, depending on the context) in the s-domain. For example, in our RC circuit, $\frac{V_C(s)}{V_s(s)} = \frac{1}{RCs+1}$ is the transfer function relating the output capacitor voltage to the input voltage source. Understanding these functions is key to analyzing circuit behavior in the frequency domain.

### Summary for Recall

*   **Laplace Transform:** Converts differential equations in the time domain to algebraic equations in the s-domain.
*   **Key Properties:** $\mathcal{L}\{f'(t)\} = sF(s) - f(0)$, $\mathcal{L}\{\int f(t) dt\} = F(s)/s$.
*   **Initial Conditions:** Crucial for transient analysis and automatically included in the derivative transforms.
*   **Solution Steps:** Formulate DE -> Find initial conditions -> Transform to s-domain -> Solve algebraically for $X(s)$ -> Inverse transform to $x(t)$.
*   **Application:** Essential for **CO3** – analyzing transient behavior.

Remember, the Laplace transform is your tool to make complex time-dependent circuit problems manageable. Practice is key to mastering the transforms, the algebra, and the inverse transforms.

---

## Sample Questions with Answers

Here are a few questions to test your understanding, covering both conceptual and exam-style problems:

**Question 1 (Conceptual):**
Why is the Laplace Transform a preferred method for solving linear differential equations in circuit analysis compared to classical methods, especially for transient analysis?

**Answer:**
The Laplace Transform is preferred because:
1.  **Simplification:** It converts differential equations with derivatives and integrals into algebraic equations in the s-domain, which are much easier to manipulate.
2.  **Automatic Inclusion of Initial Conditions:** The initial conditions of the circuit (like initial capacitor voltage or inductor current) are automatically incorporated into the transformed equations, simplifying the process of finding the complete solution.
3.  **Systematic Approach:** It provides a structured, step-by-step method that is less prone to errors for complex circuits than solving differential equations directly. This directly supports **CO3**.

**Question 2 (Exam-Oriented - Calculation):**
Consider a series RL circuit with a switch that closes at $t=0$, connecting a DC voltage source $V_s$ to the circuit. If the initial current through the inductor is zero ($i_L(0)=0$), find the current $i(t)$ using Laplace Transforms. The circuit has resistance $R$ and inductance $L$.

**Answer:**

**Step 1: Formulate the Differential Equation**
Using KVL for the RL series circuit:
$V_s u(t) - R i(t) - L \frac{di(t)}{dt} = 0$
Rearranging:
$L \frac{di(t)}{dt} + R i(t) = V_s u(t)$

**Step 2: Determine Initial Conditions**
Given: $i(0) = 0$.

**Step 3: Apply the Laplace Transform**
Let $I(s) = \mathcal{L}\{i(t)\}$.
$\mathcal{L}\{V_s u(t)\} = \frac{V_s}{s}$
$\mathcal{L}\{\frac{di(t)}{dt}\} = sI(s) - i(0)$

Transforming the equation:
$L[sI(s) - i(0)] + R I(s) = \frac{V_s}{s}$
Substitute $i(0)=0$:
$L[sI(s)] + R I(s) = \frac{V_s}{s}$
$LsI(s) + RI(s) = \frac{V_s}{s}$

**Step 4: Solve for $I(s)$ in the s-Domain**
Factor out $I(s)$:
$I(s)(Ls + R) = \frac{V_s}{s}$
$I(s) = \frac{V_s}{s(Ls + R)}$

Perform partial fraction expansion:
$\frac{V_s}{s(Ls + R)} = \frac{A}{s} + \frac{B}{Ls + R}$
$V_s = A(Ls + R) + Bs$

Set $s=0$: $V_s = A(0+R) \implies A = \frac{V_s}{R}$.
Set $Ls+R=0 \implies s = -R/L$: $V_s = B(-R/L) \implies B = -\frac{V_s L}{R}$.

So, $I(s) = \frac{V_s/R}{s} - \frac{V_s L/R}{Ls + R}$.
To make the second term match the standard form $\frac{a}{s+a}$, we rewrite the second term:
$-\frac{V_s L/R}{Ls + R} = -\frac{V_s L/R}{L(s + R/L)} = -\frac{V_s/R}{s + R/L}$.

Thus, $I(s) = \frac{V_s}{R} \left(\frac{1}{s}\right) - \frac{V_s}{R} \left(\frac{1}{s + R/L}\right)$.

**Step 5: Apply the Inverse Laplace Transform**
Using $\mathcal{L}^{-1}\{\frac{1}{s}\} = u(t)$ and $\mathcal{L}^{-1}\{\frac{1}{s+a}\} = e^{-at}u(t)$ with $a=R/L$:
$i(t) = \mathcal{L}^{-1}\{I(s)\}$
$i(t) = \frac{V_s}{R} u(t) - \frac{V_s}{R} e^{-(R/L)t} u(t)$
$i(t) = \frac{V_s}{R} (1 - e^{-Rt/L}) u(t)$

This is the familiar exponential rise of current in an RL circuit. This demonstrates **CO3** application.

**Question 3 (Conceptual - Relating to Network Functions):**
In the context of the RL circuit example above, what is the transfer function relating the current $I(s)$ to the voltage source $V_s(s)$? Explain its significance.

**Answer:**
The transfer function $H(s)$ is defined as the ratio of the output Laplace transform to the input Laplace transform, assuming zero initial conditions. In our RL circuit example:
$H(s) = \frac{I(s)}{V_s(s)}$

From Step 4 of the previous question, we had $I(s) = \frac{V_s}{s(Ls + R)}$.
Therefore, the transfer function is:
$H(s) = \frac{1}{s(Ls + R)} \times \frac{V_s}{V_s} = \frac{1}{s(Ls + R)}$

This can also be written as $H(s) = \frac{1/L}{s(s+R/L)}$.

**Significance:**
This transfer function, $H(s)$, is a fundamental characteristic of the circuit, independent of the input signal.
*   It completely describes the circuit's input-output relationship in the s-domain.
*   By analyzing the poles of $H(s)$ (the roots of the denominator, $s=0$ and $s=-R/L$), we can predict the nature of the circuit's response (e.g., stability, oscillation, exponential decay/growth).
*   It allows us to directly calculate the output for any input by multiplying $H(s)$ by the Laplace transform of that input, as we did in Question 2. This connects directly to **CO4** and reinforces **CO3**.
