---
title: "Laplace Transform"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129e0"
status: "completed"
scrapedAt: "2026-05-20T18:31:00.924Z"
---
## Module 3: Laplace Transform - Understanding and Application

Welcome everyone! Today, we embark on a fascinating journey into the world of the **Laplace Transform**. This is a powerful mathematical tool that, quite frankly, can revolutionize how we solve certain types of problems, especially those that pop up frequently in electrical science and physical science. Think of it as a special pair of glasses that allows us to see a complex problem in a simpler, more manageable domain.

Our primary goal here, as outlined in **Course Outcome CO3**, is to **compute Laplace transforms and apply them to solve Ordinary Differential Equations (ODEs) arising in engineering.** This means we’ll not only learn how to *do* the transformation but, more importantly, how to *use* it to untangle those tricky ODEs that describe circuits, mechanical vibrations, and many other physical phenomena.

### 1. What is the Laplace Transform? The Intuitive Idea

Before we dive into the formal definition, let's get a feel for what the Laplace Transform is trying to achieve. Imagine you have a complicated melody, perhaps a symphony. Trying to analyze it directly, note by note, can be overwhelming. But what if you could transform that symphony into a different representation – maybe a spectrogram that shows the intensity of different frequencies over time? Suddenly, patterns emerge, and you can analyze the structure much more effectively.

The Laplace Transform does something similar for functions, particularly those representing signals or system responses over time. It takes a function of time, $f(t)$, and transforms it into a function of a complex variable, usually denoted by $s$. This new function, $F(s)$, often makes differential equations much easier to handle. Why? Because in the $s$-domain, differentiation becomes multiplication, and integration becomes division. This is a huge simplification!

Think about it: in the $t$-domain, a differential equation might look like $y''(t) + 2y'(t) + y(t) = \sin(t)$. This involves derivatives, which can be messy to solve directly. When we apply the Laplace Transform, this equation magically transforms into an algebraic equation in $s$. We then solve this algebraic equation for $Y(s)$ (the Laplace transform of $y(t)$) and finally use the **inverse Laplace transform** to get back to our original time-domain solution $y(t)$. It's like translating a difficult sentence into a simpler language, solving it there, and then translating it back.

### 2. The Formal Definition: A Necessary Step

Now, let's put some mathematical rigor to this idea. The Laplace Transform of a function $f(t)$, defined for $t \ge 0$, is given by the integral:

$$ \mathcal{L}\{f(t)\} = F(s) = \int_{0}^{\infty} e^{-st} f(t) dt $$

Here, $s$ is a complex variable, $s = \sigma + i\omega$. For the integral to converge, we need certain conditions on $f(t)$ and $s$. Specifically, $f(t)$ must be of **exponential order**, meaning there exist constants $M$ and $a$ such that $|f(t)| \le Me^{at}$ for all $t \ge 0$. This ensures that the $e^{-st}$ term in the integrand doesn't cause the integral to diverge. The value of $s$ for which this integral converges defines the **region of convergence (ROC)**.

This integral definition is fundamental, and you’ll see it in textbooks like Kreyszig's *Advanced Engineering Mathematics* and Anton’s *Calculus*. While we won't always be calculating transforms directly from this integral (especially once we have a table of common transforms), understanding it helps us appreciate where these transforms come from.

### 3. Properties of the Laplace Transform: The Workhorses

The real power of the Laplace Transform lies in its properties. These are the tools that allow us to transform and manipulate functions and differential equations efficiently.

#### 3.1 Linearity

This is perhaps the most straightforward property, but incredibly useful. The Laplace Transform is a linear operator:

$$ \mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s) $$

where $a$ and $b$ are constants, and $F(s)$ and $G(s)$ are the Laplace transforms of $f(t)$ and $g(t)$, respectively.

**Think of it like this:** If you know how to transform two individual sounds, say a trumpet and a drum, the transform of the combined sound (trumpet plus drum) is simply the sum of their individual transforms. This is like saying that the "transformed representation" of a sum of signals is the sum of their "transformed representations." This property is crucial when dealing with systems that are composed of multiple parts or when the input signal is a combination of simpler signals.

#### 3.2 Transform of Derivatives

This is where the magic happens for differential equations!

*   **First Derivative:**
    $$ \mathcal{L}\{f'(t)\} = sF(s) - f(0) $$
    Notice how the derivative operation in the $t$-domain becomes multiplication by $s$ in the $s$-domain, with an initial condition term $f(0)$ subtracted.

*   **Second Derivative:**
    $$ \mathcal{L}\{f''(t)\} = s^2F(s) - sf(0) - f'(0) $$
    Again, multiplication by $s^2$ and subtraction of terms involving initial conditions $f(0)$ and $f'(0)$.

In general, for the $n$-th derivative:
$$ \mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - s^{n-1}f(0) - s^{n-2}f'(0) - \dots - f^{(n-1)}(0) $$

**Why is this so important?** Consider a second-order ODE: $ay''(t) + by'(t) + cy(t) = g(t)$. If we take the Laplace Transform of both sides:
$$ \mathcal{L}\{ay''(t) + by'(t) + cy(t)\} = \mathcal{L}\{g(t)\} $$
Using linearity, this becomes:
$$ a\mathcal{L}\{y''(t)\} + b\mathcal{L}\{y'(t)\} + c\mathcal{L}\{y(t)\} = G(s) $$
Substituting the properties for derivatives:
$$ a[s^2Y(s) - sy(0) - y'(0)] + b[sY(s) - y(0)] + cY(s) = G(s) $$
Notice that all the $y'(t)$ and $y''(t)$ terms are now algebraic in $Y(s)$. We can rearrange this to solve for $Y(s)$:
$$ Y(s)(as^2 + bs + c) - a(sy(0) + y'(0)) - b(y(0)) = G(s) $$
$$ Y(s)(as^2 + bs + c) = G(s) + a(sy(0) + y'(0)) + by(0) $$
$$ Y(s) = \frac{G(s) + a(sy(0) + y'(0)) + by(0)}{as^2 + bs + c} $$
This is a purely algebraic expression for $Y(s)$. Once we find $Y(s)$, we can use the inverse Laplace transform to find $y(t)$. This is the essence of solving ODEs using Laplace transforms and directly addresses **CO3**.

**Common Pitfall:** Forgetting the initial condition terms! They are absolutely vital for solving specific initial value problems.

#### 3.3 Transform of Integrals

Just as derivatives become multiplication, integrals become division in the $s$-domain:

$$ \mathcal{L}\left\{\int_{0}^{t} f(\tau) d\tau\right\} = \frac{1}{s} F(s) $$

This property is also incredibly useful, especially in systems where the output is an integral of the input or system response.

#### 3.4 Shifting Theorems (Time and Frequency)

These are like shifting gears in your car – they allow us to move our functions around in either the time domain or the $s$-domain.

*   **First Shifting Theorem (Frequency Shift):**
    If $\mathcal{L}\{f(t)\} = F(s)$, then
    $$ \mathcal{L}\{e^{-at} f(t)\} = F(s+a) $$
    **Analogy:** Imagine $F(s)$ is the "frequency signature" of $f(t)$. Multiplying $f(t)$ by $e^{-at}$ in the time domain is equivalent to shifting its entire frequency signature by $a$ units to the *left* in the $s$-domain. This is super handy for dealing with terms like $e^{-at}$ multiplied by other functions. For example, if you know the transform of $\cos(\omega t)$, you can easily find the transform of $e^{-at}\cos(\omega t)$.

*   **Second Shifting Theorem (Time Shift):**
    If $\mathcal{L}\{f(t)\} = F(s)$, then for $a > 0$:
    $$ \mathcal{L}\{u(t-a) f(t-a)\} = e^{-as} F(s) $$
    where $u(t-a)$ is the **unit step function** (or Heaviside step function). $u(t-a)$ is 0 for $t < a$ and 1 for $t \ge a$.

    **Analogy:** Imagine you have a signal $f(t)$. The term $f(t-a)$ is the same signal, but delayed by $a$ units of time. The $u(t-a)$ term ensures that this delayed signal only starts acting at time $t=a$. This theorem tells us that delaying a signal in the time domain by $a$ units corresponds to multiplying its transform by $e^{-as}$. This is extremely useful for dealing with signals that are switched on at a specific time or are piecewise defined. Think of a circuit that is powered on after a certain time, or a mechanical impact that occurs at a specific moment.

#### 3.5 Transform of Periodic Functions

Many real-world signals are periodic, like AC voltage or repetitive pulses. If $f(t)$ is periodic with period $T$, and $f(t)$ is defined over one period $0 \le t < T$, then its Laplace transform is:

$$ \mathcal{L}\{f(t)\} = \frac{1}{1 - e^{-sT}} \int_{0}^{T} e^{-st} f(t) dt $$

The integral part is simply the Laplace transform of one period of the function. This formula allows us to handle periodic inputs elegantly.

#### 3.6 Convolution Theorem

This is a slightly more advanced but very powerful property, often covered in detail in texts like Haykin & Van Veen's *Signals and Systems*. The convolution of two functions $f(t)$ and $g(t)$ is defined as:

$$ (f * g)(t) = \int_{0}^{t} f(\tau) g(t-\tau) d\tau $$

The convolution theorem states:
$$ \mathcal{L}\{(f * g)(t)\} = F(s) G(s) $$

**What does this mean?** In the $t$-domain, convolution represents the output of a linear time-invariant (LTI) system when an input $f(t)$ is applied to a system with impulse response $g(t)$. The convolution theorem tells us that this convolution operation in the time domain is equivalent to simple multiplication of their Laplace transforms in the $s$-domain!

This is fundamental to system analysis in engineering. If we know the system's impulse response $h(t)$ and the input signal $r(t)$, the output $y(t)$ is given by $y(t) = r(t) * h(t)$. Using Laplace transforms, $Y(s) = R(s) H(s)$. This makes analyzing how systems respond to different inputs incredibly tractable.

### 4. Finding Common Laplace Transforms: Building Your Toolkit

While the definition is important, in practice, we use a table of known Laplace transforms. It's like having a handy cheat sheet for common functions. Here are some essential ones you should memorize:

| $f(t)$             | $\mathcal{L}\{f(t)\} = F(s)$ | Notes                                              |
| :----------------- | :-------------------------- | :------------------------------------------------- |
| $1$ (unit step)    | $\frac{1}{s}$               | $\mathcal{L}\{u(t)\}$                              |
| $t$                | $\frac{1}{s^2}$             |                                                    |
| $t^n$ ($n \ge 0$ integer) | $\frac{n!}{s^{n+1}}$        | Generalization of the above                        |
| $e^{at}$           | $\frac{1}{s-a}$             | Uses the first shifting theorem with $F(s) = 1/s$  |
| $\sin(\omega t)$   | $\frac{\omega}{s^2 + \omega^2}$ |                                                    |
| $\cos(\omega t)$   | $\frac{s}{s^2 + \omega^2}$  |                                                    |
| $e^{at} \sin(\omega t)$ | $\frac{\omega}{(s-a)^2 + \omega^2}$ | Apply first shifting theorem to $\sin(\omega t)$ |
| $e^{at} \cos(\omega t)$ | $\frac{s-a}{(s-a)^2 + \omega^2}$ | Apply first shifting theorem to $\cos(\omega t)$ |
| $\sinh(at)$        | $\frac{a}{s^2 - a^2}$       | ($\frac{e^{at} - e^{-at}}{2}$)                     |
| $\cosh(at)$        | $\frac{s}{s^2 - a^2}$       | ($\frac{e^{at} + e^{-at}}{2}$)                     |
| $\delta(t)$ (Dirac delta) | $1$                         | Transform of the impulse function                  |

**Remember this:** Memorizing the transforms of $1$, $t^n$, $e^{at}$, $\sin(\omega t)$, and $\cos(\omega t)$ is crucial. The others can often be derived using the properties. Pay close attention to the signs in the denominator for exponentials ($s-a$ vs. $s+a$) and hyperbolics ($s^2 - a^2$ vs. $s^2 + a^2$).

### 5. Inverse Laplace Transform: Getting Back to Reality

Once we have $F(s)$, we need to transform it back to the time domain, $f(t)$. This is the inverse Laplace transform, denoted by $\mathcal{L}^{-1}\{F(s)\} = f(t)$.

The most common method for finding the inverse Laplace transform is to use the table in reverse and employ **partial fraction decomposition**.

#### 5.1 Partial Fraction Decomposition

If $F(s)$ is a rational function (a polynomial divided by a polynomial), we can decompose it into simpler fractions whose inverse transforms we know. For example, if we have $F(s) = \frac{s+1}{(s+2)(s+3)}$, we can decompose it as:

$$ F(s) = \frac{A}{s+2} + \frac{B}{s+3} $$

We then solve for $A$ and $B$. Once we have $A$ and $B$, we can find the inverse transform:

$$ f(t) = \mathcal{L}^{-1}\left\{\frac{A}{s+2}\right\} + \mathcal{L}^{-1}\left\{\frac{B}{s+3}\right\} = Ae^{-2t} + Be^{-3t} $$

This technique is essential for solving ODEs where $Y(s)$ is often a rational function. You'll likely encounter different cases for partial fraction decomposition:

*   **Distinct Linear Factors:** As shown above, $(s-a_1)(s-a_2)\dots$.
*   **Repeated Linear Factors:** $(s-a)^n$. This involves terms like $\frac{A_1}{s-a} + \frac{A_2}{(s-a)^2} + \dots + \frac{A_n}{(s-a)^n}$.
*   **Irreducible Quadratic Factors:** $s^2 + bs + c$ with no real roots. These often correspond to sine and cosine terms in the time domain. We'll need to complete the square to match the standard forms like $\frac{\omega}{(s-a)^2 + \omega^2}$ or $\frac{s-a}{(s-a)^2 + \omega^2}$.

Kreyszig and Anton's calculus texts provide detailed explanations of partial fraction decomposition techniques.

#### 5.2 Completing the Square

This is particularly important when you see quadratic terms in the denominator, like $s^2 + 4s + 5$. To use our table, we need to put it in the form $(s-a)^2 + \omega^2$.
For $s^2 + 4s + 5$:
$s^2 + 4s + 4 + 1 = (s+2)^2 + 1^2$.
This now looks like the denominator for a shifted sine or cosine. If the numerator was $s+2$, it would transform back to $e^{-2t}\cos(t)$. If the numerator was $1$, it would transform back to $e^{-2t}\sin(t)$.

### 6. Applying Laplace Transforms to Solve ODEs: The Grand Finale

This is where we tie everything together, directly addressing **CO3**. Let's walk through an example.

**Problem:** Solve the initial value problem: $y''(t) + 3y'(t) + 2y(t) = e^{-t}$, with $y(0) = 1$ and $y'(0) = 0$.

**Step 1: Take the Laplace Transform of both sides.**
$$ \mathcal{L}\{y''(t)\} + 3\mathcal{L}\{y'(t)\} + 2\mathcal{L}\{y(t)\} = \mathcal{L}\{e^{-t}\} $$

**Step 2: Apply the transform properties.**
We know:
*   $\mathcal{L}\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$
*   $\mathcal{L}\{y'(t)\} = sY(s) - y(0)$
*   $\mathcal{L}\{y(t)\} = Y(s)$
*   $\mathcal{L}\{e^{-t}\} = \frac{1}{s+1}$

Substitute the initial conditions $y(0) = 1$ and $y'(0) = 0$:
*   $\mathcal{L}\{y''(t)\} = s^2Y(s) - s(1) - 0 = s^2Y(s) - s$
*   $\mathcal{L}\{y'(t)\} = sY(s) - 1$

Substitute these into the transformed equation:
$$ (s^2Y(s) - s) + 3(sY(s) - 1) + 2Y(s) = \frac{1}{s+1} $$

**Step 3: Solve for Y(s).**
Group terms with $Y(s)$:
$$ Y(s)(s^2 + 3s + 2) - s - 3 = \frac{1}{s+1} $$
Isolate $Y(s)$:
$$ Y(s)(s^2 + 3s + 2) = \frac{1}{s+1} + s + 3 $$
$$ Y(s) = \frac{1}{(s+1)(s^2 + 3s + 2)} + \frac{s+3}{s^2 + 3s + 2} $$

Factor the quadratic: $s^2 + 3s + 2 = (s+1)(s+2)$.
$$ Y(s) = \frac{1}{(s+1)(s+1)(s+2)} + \frac{s+3}{(s+1)(s+2)} $$
$$ Y(s) = \frac{1}{(s+1)^2(s+2)} + \frac{s+3}{(s+1)(s+2)} $$

Combine the fractions (find a common denominator):
$$ Y(s) = \frac{1 + (s+3)(s+1)}{(s+1)^2(s+2)} = \frac{1 + (s^2 + 4s + 3)}{(s+1)^2(s+2)} = \frac{s^2 + 4s + 4}{(s+1)^2(s+2)} $$
$$ Y(s) = \frac{(s+2)^2}{(s+1)^2(s+2)} = \frac{s+2}{(s+1)^2} $$

**Step 4: Perform Partial Fraction Decomposition on Y(s).**
Our $Y(s)$ is $\frac{s+2}{(s+1)^2}$. This has a repeated linear factor $(s+1)^2$.
$$ Y(s) = \frac{A}{s+1} + \frac{B}{(s+1)^2} $$
Multiply both sides by $(s+1)^2$:
$$ s+2 = A(s+1) + B $$
$$ s+2 = As + A + B $$

Equating coefficients:
*   Coefficient of $s$: $1 = A$
*   Constant term: $2 = A + B$

Substitute $A=1$ into the second equation: $2 = 1 + B \implies B = 1$.
So, $$ Y(s) = \frac{1}{s+1} + \frac{1}{(s+1)^2} $$

**Step 5: Take the Inverse Laplace Transform.**
We need the transform of $\frac{1}{(s+1)^2}$. Recall that $\mathcal{L}\{t\} = \frac{1}{s^2}$. Using the first shifting theorem, $\mathcal{L}\{e^{at}f(t)\} = F(s+a)$.
Here, $f(t) = t$ and $a = -1$. So,
$$ \mathcal{L}\{e^{-t}t\} = \frac{1}{(s+1)^2} $$

Therefore,
$$ y(t) = \mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\} + \mathcal{L}^{-1}\left\{\frac{1}{(s+1)^2}\right\} $$
$$ y(t) = e^{-t} + te^{-t} $$

And that's our solution! We've gone from a differential equation in the time domain to an algebraic equation in the $s$-domain, solved it, and transformed back. This is the core application for **CO3**.

### 7. Relation to Other Course Outcomes

*   **CO1 (Linear Systems and Matrices):** While Laplace transforms are not directly about matrix diagonalization, the algebraic manipulation in the $s$-domain to solve for $Y(s)$ resembles solving systems of linear equations. The characteristic equation of a linear system ($as^2 + bs + c = 0$ in our example) is closely related to the eigenvalues of the system matrix, which are determined through matrix operations.
*   **CO2 (Solving ODEs):** This module is the *application* of Laplace transforms *to solve ODEs*. So, CO3 directly supports CO2 by providing a powerful method for solving homogeneous and non-homogeneous linear ODEs with constant coefficients. You'll find that Laplace transforms are often a more direct and intuitive method for ODEs with specific initial conditions compared to the methods of undetermined coefficients or variation of parameters.
*   **CO4 (Taylor and Fourier Series):** Taylor and Fourier series are methods for representing functions. Laplace transforms are a method for *transforming* functions and solving differential equations. While distinct, they all fall under the umbrella of mathematical tools used to analyze and understand functions and systems in science and engineering. For instance, the behavior of a system in the frequency domain (related to Fourier) can sometimes be understood through its Laplace transform, especially when analyzing stability.

### 8. Key Takeaways and Exam Tips

*   **The "Why":** Understand that Laplace transforms convert differential equations into algebraic equations by turning derivatives into multiplication by $s$.
*   **The "How":** Master the linearity property, the derivative properties, and the shifting theorems. Know your common transforms and practice partial fraction decomposition.
*   **Initial Conditions:** Never forget the initial conditions when transforming derivatives! They are critical for specific solutions.
*   **System Analysis:** Recognize that $H(s) = Y(s)/R(s)$ (where $R(s)$ is input transform and $Y(s)$ is output transform) is the **transfer function** of a system. Its poles (roots of the denominator) dictate system stability and response characteristics, a concept you'll see more of in systems and control courses.
*   **Common Exam Questions:** You'll be asked to find Laplace transforms of various functions, find inverse Laplace transforms (requiring partial fractions and completing the square), and solve ODEs using Laplace transforms. Be comfortable with step functions and delays.

Let's solidify this with some practice.

---

## Sample Questions and Answers

**Question 1 (Conceptual):** Explain why the Laplace Transform is a useful tool for solving differential equations in engineering.

**Answer:** The Laplace Transform is a powerful tool because it converts differential equations, which involve derivatives and can be difficult to solve directly, into algebraic equations in the Laplace domain ($s$-domain). In this domain, differentiation becomes multiplication by $s$, and integration becomes division by $s$. This simplification allows us to solve for the transformed solution, $Y(s)$, algebraically. Subsequently, the inverse Laplace Transform is used to convert this solution back to the time domain, $y(t)$, providing the solution to the original differential equation. This method is particularly effective for handling initial conditions directly, making it a preferred method for many initial value problems in electrical circuits, mechanical vibrations, and control systems.

**Question 2 (Transform Calculation):** Find the Laplace Transform of $f(t) = 3e^{-2t}\cos(4t) - 5u(t-1)e^{-3(t-1)}$.

**Answer:**
We will use the linearity property and the shifting theorems.

1.  **For the first term, $3e^{-2t}\cos(4t)$:**
    We know $\mathcal{L}\{\cos(\omega t)\} = \frac{s}{s^2 + \omega^2}$. For $\cos(4t)$, $\omega = 4$, so $\mathcal{L}\{\cos(4t)\} = \frac{s}{s^2 + 4^2} = \frac{s}{s^2 + 16}$.
    Now, apply the first shifting theorem: $\mathcal{L}\{e^{at}f(t)\} = F(s+a)$. Here, $a = -2$.
    So, $\mathcal{L}\{e^{-2t}\cos(4t)\} = \frac{s+2}{(s+2)^2 + 16}$.
    Using linearity, $\mathcal{L}\{3e^{-2t}\cos(4t)\} = 3 \left(\frac{s+2}{(s+2)^2 + 16}\right) = \frac{3s+6}{s^2 + 4s + 4 + 16} = \frac{3s+6}{s^2 + 4s + 20}$.

2.  **For the second term, $-5u(t-1)e^{-3(t-1)}$:**
    We know $\mathcal{L}\{u(t-a)f(t-a)\} = e^{-as}F(s)$.
    Here, the function is $e^{-3(t-1)}$, which is $f(t-1)$ where $f(t) = e^{-3t}$. The delay is $a=1$.
    First, find the transform of $f(t) = e^{-3t}$: $\mathcal{L}\{e^{-3t}\} = \frac{1}{s - (-3)} = \frac{1}{s+3}$. Let this be $F(s)$.
    Now, apply the second shifting theorem: $\mathcal{L}\{u(t-1)e^{-3(t-1)}\} = e^{-1s} F(s) = e^{-s} \left(\frac{1}{s+3}\right)$.
    So, $\mathcal{L}\{-5u(t-1)e^{-3(t-1)}\} = -5e^{-s} \left(\frac{1}{s+3}\right) = -\frac{5e^{-s}}{s+3}$.

**Combining both terms:**
$$ \mathcal{L}\{f(t)\} = \frac{3s+6}{s^2 + 4s + 20} - \frac{5e^{-s}}{s+3} $$

**Question 3 (ODE Solution):** Solve the initial value problem $y''(t) + 4y(t) = \sin(2t)$ with $y(0) = 0$ and $y'(0) = 1$.

**Answer:**
**Step 1: Transform the equation.**
$$ \mathcal{L}\{y''(t)\} + 4\mathcal{L}\{y(t)\} = \mathcal{L}\{\sin(2t)\} $$
Using properties: $(s^2Y(s) - sy(0) - y'(0)) + 4Y(s) = \frac{2}{s^2 + 2^2}$
Substitute initial conditions $y(0)=0, y'(0)=1$:
$$ (s^2Y(s) - s(0) - 1) + 4Y(s) = \frac{2}{s^2 + 4} $$
$$ s^2Y(s) - 1 + 4Y(s) = \frac{2}{s^2 + 4} $$

**Step 2: Solve for Y(s).**
$$ Y(s)(s^2 + 4) - 1 = \frac{2}{s^2 + 4} $$
$$ Y(s)(s^2 + 4) = 1 + \frac{2}{s^2 + 4} = \frac{s^2 + 4 + 2}{s^2 + 4} = \frac{s^2 + 6}{s^2 + 4} $$
$$ Y(s) = \frac{s^2 + 6}{(s^2 + 4)^2} $$

**Step 3: Partial Fraction Decomposition.**
This is a case of repeated quadratic factors. However, we can try to simplify the expression if possible. Let's rewrite $s^2+6$ as $(s^2+4) + 2$.
$$ Y(s) = \frac{s^2 + 4 + 2}{(s^2 + 4)^2} = \frac{s^2 + 4}{(s^2 + 4)^2} + \frac{2}{(s^2 + 4)^2} $$
$$ Y(s) = \frac{1}{s^2 + 4} + \frac{2}{(s^2 + 4)^2} $$

The first term is easy: $\mathcal{L}^{-1}\left\{\frac{1}{s^2 + 4}\right\} = \frac{1}{2}\mathcal{L}^{-1}\left\{\frac{2}{s^2 + 4}\right\} = \frac{1}{2}\sin(2t)$.

For the second term, $\frac{2}{(s^2 + 4)^2}$, we need a property for $\mathcal{L}\{t\sin(\omega t)\}$.
Recall that $\mathcal{L}\{\sin(\omega t)\} = \frac{\omega}{s^2 + \omega^2}$.
Differentiating with respect to $s$:
$\frac{d}{ds}\mathcal{L}\{\sin(\omega t)\} = \frac{d}{ds}\left(\frac{\omega}{s^2 + \omega^2}\right)$
$-\mathcal{L}\{t\sin(\omega t)\} = \omega \frac{-2s}{(s^2 + \omega^2)^2}$
$\mathcal{L}\{t\sin(\omega t)\} = \frac{2\omega s}{(s^2 + \omega^2)^2}$

This doesn't quite match our term $\frac{2}{(s^2 + 4)^2}$. We need a way to get the $(s^2+4)^2$ in the denominator.
Let's use the property: $\mathcal{L}\{tf(t)\} = -F'(s)$.
If we consider $G(s) = \frac{1}{s^2+\omega^2}$ (note the missing $\omega$ in numerator), then $g(t) = \frac{1}{\omega}\sin(\omega t)$.
$\mathcal{L}\{t \cdot \frac{1}{\omega}\sin(\omega t)\} = - \frac{d}{ds}\left(\frac{1}{s^2+\omega^2}\right) = - \left(\frac{-2s}{(s^2+\omega^2)^2}\right) = \frac{2s}{(s^2+\omega^2)^2}$.
So, $\mathcal{L}\left\{\frac{t}{\omega}\sin(\omega t)\right\} = \frac{2s}{(s^2+\omega^2)^2}$.

A more direct approach for $\frac{1}{(s^2+\omega^2)^2}$ uses the result $\mathcal{L}\left\{t \sin(\omega t)\right\} = \frac{2 \omega s}{(s^2+\omega^2)^2}$.
We have $\frac{2}{(s^2+4)^2}$. For $\omega=2$, $\mathcal{L}\{t \sin(2t)\} = \frac{2(2)s}{(s^2+4)^2} = \frac{4s}{(s^2+4)^2}$.
Still not matching. Let's consider the convolution property.

Alternatively, let's try differentiating a simpler transform.
We know $\mathcal{L}\{\sin(\omega t)\} = \frac{\omega}{s^2+\omega^2}$.
Let's consider $\mathcal{L}\{t \sin(\omega t)\}$. Using the property $\mathcal{L}\{t f(t)\} = -F'(s)$:
$F(s) = \frac{\omega}{s^2+\omega^2}$.
$F'(s) = \omega \frac{-2s}{(s^2+\omega^2)^2}$.
So, $\mathcal{L}\{t \sin(\omega t)\} = - F'(s) = \frac{2\omega s}{(s^2+\omega^2)^2}$.
For $\omega = 2$, $\mathcal{L}\{t \sin(2t)\} = \frac{4s}{(s^2+4)^2}$.

This seems tricky. Let's go back to $Y(s) = \frac{1}{s^2 + 4} + \frac{2}{(s^2 + 4)^2}$.
The first term's inverse is $\frac{1}{2}\sin(2t)$.

Consider the identity: $\frac{1}{(s^2+\omega^2)^2} = \frac{1}{2\omega^3} \left( \frac{\omega^3}{s^2+\omega^2} - \frac{\omega^3 s^2}{(s^2+\omega^2)^2} \right)$. This isn't helping directly.

Let's use the property: $\mathcal{L}\left\{ \frac{f(t)}{t} \right\} = \int_s^\infty F(\sigma) d\sigma$. This is for division by t.

A key result from tables or derivation is:
$$ \mathcal{L}^{-1}\left\{ \frac{1}{(s^2+\omega^2)^2} \right\} = \frac{1}{2\omega^3} (\sin(\omega t) - \omega t \cos(\omega t)) $$
For $\omega=2$:
$$ \mathcal{L}^{-1}\left\{ \frac{1}{(s^2+4)^2} \right\} = \frac{1}{2(2^3)} (\sin(2t) - 2t \cos(2t)) = \frac{1}{16} (\sin(2t) - 2t \cos(2t)) $$

Now, substitute this back into $Y(s)$:
$$ Y(s) = \frac{1}{s^2 + 4} + 2 \cdot \frac{1}{(s^2 + 4)^2} $$
$$ y(t) = \mathcal{L}^{-1}\left\{\frac{1}{s^2 + 4}\right\} + 2 \cdot \mathcal{L}^{-1}\left\{\frac{1}{(s^2 + 4)^2}\right\} $$
$$ y(t) = \frac{1}{2}\sin(2t) + 2 \cdot \frac{1}{16} (\sin(2t) - 2t \cos(2t)) $$
$$ y(t) = \frac{1}{2}\sin(2t) + \frac{1}{8} (\sin(2t) - 2t \cos(2t)) $$
$$ y(t) = \left(\frac{1}{2} + \frac{1}{8}\right)\sin(2t) - \frac{2t}{8}\cos(2t) $$
$$ y(t) = \left(\frac{4+1}{8}\right)\sin(2t) - \frac{t}{4}\cos(2t) $$
$$ y(t) = \frac{5}{8}\sin(2t) - \frac{t}{4}\cos(2t) $$

**Check:** The initial conditions $y(0)=0$ and $y'(0)=1$ should be satisfied.
$y(0) = \frac{5}{8}\sin(0) - \frac{0}{4}\cos(0) = 0 - 0 = 0$. (Correct)
$y'(t) = \frac{5}{8}(2\cos(2t)) - \left(\frac{1}{4}\cos(2t) + \frac{t}{4}(-2\sin(2t))\right)$
$y'(t) = \frac{5}{4}\cos(2t) - \frac{1}{4}\cos(2t) + \frac{t}{2}\sin(2t)$
$y'(t) = \cos(2t) + \frac{t}{2}\sin(2t)$
$y'(0) = \cos(0) + \frac{0}{2}\sin(0) = 1 + 0 = 1$. (Correct)
The solution is correct.

This question highlights the need to be proficient with standard inverse transforms, especially those involving repeated denominators or requiring specific identities.
