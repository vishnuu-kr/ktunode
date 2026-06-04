---
title: "Unit step function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f950b"
status: "completed"
scrapedAt: "2026-05-23T16:03:23.797Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 1
## Module 3: Laplace Transform
## Unit Step Function

Welcome, everyone! Today, we're diving into a fundamental building block of the Laplace Transform – the **Unit Step Function**. Understanding this function is absolutely crucial because it allows us to model and analyze systems that have sudden changes in their input, which is incredibly common in electrical engineering and many physical science applications. Think about switching on a light, applying a voltage pulse, or even the sudden impact of a force. The unit step function is our mathematical tool for representing these events.

Our journey today aims to demystify this function and show you how it integrates seamlessly with the Laplace Transform, ultimately helping us achieve key Course Outcomes, particularly **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.**

### What is the Unit Step Function?
Let's start with the basics. The unit step function, often denoted by $u(t)$ or $U(t)$, is a piecewise constant function. It's defined as follows:

$$
u(t) =
\begin{cases}
0 & \text{if } t < 0 \\
1 & \text{if } t \ge 0
\end{cases}
$$

Think of it like this: imagine a switch. Before you flip the switch (i.e., for $t < 0$), nothing is happening. The output is zero. The moment you flip the switch (at $t = 0$), the output instantly becomes 'on' – it jumps to 1. This "jump" at $t=0$ is the defining characteristic of the unit step function.

**Visualizing the Unit Step Function:**
If you were to sketch this on a graph, with time $t$ on the horizontal axis and the function value $u(t)$ on the vertical axis, you'd see a flat line at 0 for all negative values of $t$. At $t=0$, there's a sharp, vertical jump to 1, and then the line stays at 1 for all positive values of $t$.

**Real-World Analogy:**
Consider turning on a light at $t=0$.
*   **Before $t=0$**: The light is off. Its "state" or "input signal" is 0.
*   **At $t=0$**: You flip the switch. The light turns on.
*   **After $t=0$**: The light stays on. Its "state" or "input signal" is 1.

The unit step function $u(t)$ perfectly models this simple on/off behaviour.

### Why is it "Unit" Step?
The "unit" in unit step function refers to the *magnitude* of the step. It's a step of size 1. We can also have scaled step functions, like $A \cdot u(t)$, which would represent a step of size $A$.

### Shifting the Unit Step Function
What if the "event" – the sudden change – doesn't happen at $t=0$? What if it happens at some later time, say $t=a$, where $a > 0$? We can model this using a **time-shifted unit step function**.

The function $u(t-a)$ is defined as:

$$
u(t-a) =
\begin{cases}
0 & \text{if } t - a < 0 \quad \implies \quad t < a \\
1 & \text{if } t - a \ge 0 \quad \implies \quad t \ge a
\end{cases}
$$

**Visualizing the Shift:**
Graphically, $u(t-a)$ looks identical to $u(t)$, but the jump from 0 to 1 occurs at $t=a$ instead of $t=0$. It's essentially the original unit step function shifted $a$ units to the *right* along the time axis.

**Example:**
Let's say you want to turn on a device at $t=5$ seconds. You can represent this input signal as $u(t-5)$.
*   For $t < 5$, the input is 0.
*   For $t \ge 5$, the input is 1.

This is a very common scenario in control systems. For instance, a heating element might be switched on after a certain delay.

### Combining Unit Step Functions
The real power comes when we combine multiple unit step functions to model more complex signals. This allows us to represent signals that turn on and off at different times, or signals that change their magnitude abruptly.

**Example: A Pulse Signal**
Suppose we want to represent a signal that is 0 for $t<0$, becomes 1 at $t=a$, stays 1 until $t=b$ (where $b>a$), and then becomes 0 again for $t \ge b$.

How can we construct this using unit step functions?
1.  We want the signal to "turn on" at $t=a$. This is achieved by $u(t-a)$.
2.  However, this signal $u(t-a)$ will stay at 1 forever after $t=a$. We need it to turn off at $t=b$.
3.  To turn it off at $t=b$, we can introduce a *negative* step function at $t=b$. The function $-u(t-b)$ will be 0 for $t<b$ and $-1$ for $t \ge b$.

So, if we add these two together: $u(t-a) - u(t-b)$, what do we get?
*   For $t < a$: $u(t-a) = 0$, $u(t-b) = 0$. Sum = $0 - 0 = 0$.
*   For $a \le t < b$: $u(t-a) = 1$, $u(t-b) = 0$. Sum = $1 - 0 = 1$.
*   For $t \ge b$: $u(t-a) = 1$, $u(t-b) = 1$. Sum = $1 - 1 = 0$.

And voilà! The function $f(t) = u(t-a) - u(t-b)$ represents a rectangular pulse of height 1, starting at $t=a$ and ending at $t=b$. This is incredibly useful for modelling things like a short burst of voltage or a temporary application of force.

**Relatable Example:**
Imagine a temporary discount advertised from Monday ($t=a$) to Friday ($t=b$).
*   Before Monday ($t < a$), the discount is 0.
*   From Monday to Friday ($a \le t < b$), the discount is active (let's say represented by 1).
*   After Friday ($t \ge b$), the discount ends, and it's back to 0.

This pulse behaviour is precisely what $u(t-a) - u(t-b)$ captures.

### The Unit Step Function and Engineering Applications
In electrical engineering, the unit step function is paramount.
*   **Switching Circuits:** Modeling the sudden application or removal of voltage or current. When you close a switch in a circuit, the voltage across it might transition from 0 to some steady value.
*   **Control Systems:** Representing external inputs to a system that are activated at a specific time.
*   **Signal Processing:** Creating or analyzing signals that have abrupt changes.

This directly ties into **CO3**, as these signals are often the inputs we feed into differential equations describing electrical circuits.

### Connection to Course Outcomes
*   **CO3 (Laplace Transform and ODEs):** The Laplace Transform of the unit step function is one of the fundamental transforms we'll learn. It simplifies the process of solving linear ODEs with constant coefficients that have piecewise or switched inputs. When we transform a term like $f(t)u(t-a)$, it becomes much easier to handle in the s-domain.

### The Laplace Transform of the Unit Step Function
This is where the "magic" happens and why we're spending time on $u(t)$. Recall the definition of the Laplace Transform of a function $f(t)$:

$$
\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t) dt
$$

Let's find the Laplace Transform of the standard unit step function $u(t)$. We know $f(t) = u(t) = 1$ for $t \ge 0$.

$$
\mathcal{L}\{u(t)\} = \int_0^\infty e^{-st} \cdot 1 \, dt
$$

The integral of $e^{-st}$ with respect to $t$ is $\frac{e^{-st}}{-s}$. So, evaluating from 0 to $\infty$:

$$
\mathcal{L}\{u(t)\} = \left[ \frac{e^{-st}}{-s} \right]_0^\infty
$$

For this integral to converge, we require $s > 0$ (so that $e^{-st}$ goes to zero as $t \to \infty$).
As $t \to \infty$, $e^{-st} \to 0$ (for $s>0$).
At $t = 0$, $e^{-s \cdot 0} = e^0 = 1$.

So, the evaluation is:

$$
\mathcal{L}\{u(t)\} = 0 - \left( \frac{1}{-s} \right) = \frac{1}{s}
$$

**Key Result:** $\mathcal{L}\{u(t)\} = \frac{1}{s}$, for $s>0$.

**Remember this!** This is a foundational Laplace transform pair. Whenever you see an input that suddenly switches on at $t=0$ and stays on, its Laplace transform is $\frac{1}{s}$.

### The Laplace Transform of the Time-Shifted Unit Step Function
Now, what about $u(t-a)$? This is where the **Second Shifting Theorem** (or Time-Shifting Theorem) of Laplace Transforms comes into play. This theorem is incredibly powerful.

**The Second Shifting Theorem:** If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$ for $a \ge 0$.

Notice the $u(t-a)$ multiplying $f(t-a)$. This is crucial because $f(t-a)$ would be zero for $t<a$, and we don't want contributions from $t<0$ in our Laplace transform definition. The $u(t-a)$ ensures that the function is defined as zero before $t=a$.

Let's apply this to our unit step function. We want to find $\mathcal{L}\{u(t-a)\}$.
Here, the function is $u(t-a)$, which is equivalent to saying $f(t) = 1$ shifted by $a$, and this shifted version is multiplied by $u(t-a)$.
So, we can think of our function as $g(t) = u(t-a)$.
Let $f(t) = 1$. We know $\mathcal{L}\{f(t)\} = \mathcal{L}\{1\} = \frac{1}{s}$.
Using the Second Shifting Theorem, with $f(t)=1$ and $a \ge 0$:
$\mathcal{L}\{f(t-a)u(t-a)\} = \mathcal{L}\{1 \cdot u(t-a)\} = e^{-as} F(s) = e^{-as} \cdot \frac{1}{s}$.

**Key Result:** $\mathcal{L}\{u(t-a)\} = \frac{e^{-as}}{s}$, for $a \ge 0$ and $s>0$.

**Why is this important?**
This tells us that a time delay of $a$ seconds in the time domain corresponds to multiplication by $e^{-as}$ in the s-domain. This is a fundamental property that simplifies solving differential equations with delayed inputs.

**Example Application:**
Consider a circuit with a voltage source that is switched on at $t=2$ seconds, with a value of 5 volts. The input voltage is $v_{in}(t) = 5u(t-2)$.
To find the Laplace transform of this input:
$\mathcal{L}\{v_{in}(t)\} = \mathcal{L}\{5u(t-2)\}$
Using the linearity of the Laplace transform:
$= 5 \mathcal{L}\{u(t-2)\}$
Using the time-shifting theorem with $a=2$ and $f(t)=1$ (so $F(s)=1/s$):
$= 5 \cdot \frac{e^{-2s}}{s}$

This simple transformation would be a critical first step in solving the differential equation describing the circuit's behaviour.

### Representation of Signals using Unit Step Functions
As we saw with the pulse, the unit step function is versatile. We can represent many practical signals by summing or subtracting shifted unit step functions.

**Example: A signal that ramps up at t=0 and stops at t=2**
Suppose we have a signal that starts at 0, increases linearly with time, $t$, until $t=2$, and then becomes 0 again.
How to represent this? This is slightly more advanced and involves multiplying $t$ by a pulse.
The function is $f(t) = t$ for $0 \le t < 2$, and $f(t) = 0$ for $t \ge 2$.
This can be written as $f(t) = t \cdot u(t) - t \cdot u(t-2)$.
Why?
*   $t \cdot u(t)$: This is $t$ for $t \ge 0$, and 0 for $t < 0$.
*   $t \cdot u(t-2)$: This is $t$ for $t \ge 2$, and 0 for $t < 2$.

Let's analyze $t \cdot u(t) - t \cdot u(t-2)$:
*   For $t < 0$: $0 - 0 = 0$. Correct.
*   For $0 \le t < 2$: $t - 0 = t$. Correct.
*   For $t \ge 2$: $t - t = 0$. Correct.

So, $f(t) = t \cdot u(t) - t \cdot u(t-2)$ represents our desired function.
To find its Laplace transform, we'd use the linearity property and the time-shifting theorem. We know $\mathcal{L}\{t\} = \frac{1}{s^2}$.
So, $\mathcal{L}\{t \cdot u(t)\} = \mathcal{L}\{t\} = \frac{1}{s^2}$.
For the second term, $t \cdot u(t-2)$, we need to be careful. The function being shifted is $g(t) = t$. But the theorem states $\mathcal{L}\{f(t-a)u(t-a)\}$. Here, we have $t \cdot u(t-2)$.
We can rewrite $t$ in terms of $(t-2)$: $t = (t-2) + 2$.
So, $t \cdot u(t-2) = ((t-2)+2)u(t-2) = (t-2)u(t-2) + 2u(t-2)$.

Now we can apply the Laplace transform:
$\mathcal{L}\{t \cdot u(t-2)\} = \mathcal{L}\{(t-2)u(t-2)\} + \mathcal{L}\{2u(t-2)\}$
For $\mathcal{L}\{(t-2)u(t-2)\}$, we use the Second Shifting Theorem with $f(t)=t$ (so $F(s)=1/s^2$) and $a=2$. This gives $e^{-2s} F(s) = e^{-2s} \cdot \frac{1}{s^2}$.
For $\mathcal{L}\{2u(t-2)\}$, we use the same theorem with $f(t)=2$ (so $F(s)=2/s$) and $a=2$. This gives $e^{-2s} F(s) = e^{-2s} \cdot \frac{2}{s}$.

So, $\mathcal{L}\{t \cdot u(t-2)\} = \frac{e^{-2s}}{s^2} + \frac{2e^{-2s}}{s}$.

Finally, the Laplace transform of our original ramp-down signal is:
$\mathcal{L}\{f(t)\} = \mathcal{L}\{t \cdot u(t)\} - \mathcal{L}\{t \cdot u(t-2)\}$
$= \frac{1}{s^2} - \left(\frac{e^{-2s}}{s^2} + \frac{2e^{-2s}}{s}\right)$
$= \frac{1}{s^2} - \frac{e^{-2s}}{s^2} - \frac{2e^{-2s}}{s}$

This illustrates how we can represent and transform more complex signals by cleverly combining unit step functions and using the shifting theorems. This is a cornerstone for solving ODEs with discontinuous or delayed inputs, directly supporting **CO3**.
