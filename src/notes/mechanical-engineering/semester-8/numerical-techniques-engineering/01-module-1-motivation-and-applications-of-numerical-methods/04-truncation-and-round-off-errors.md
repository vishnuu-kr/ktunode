---
title: "Truncation and round-off errors"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 1: Motivation and Applications of numerical methods"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446469f"
status: "completed"
scrapedAt: "2026-05-20T18:23:01.045Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - Module 1: Motivation and Applications of Numerical Methods

## Topic: Truncation and Round-off Errors

This module introduces the fundamental concepts of numerical methods, their necessity in engineering, and the inherent sources of error that arise when using them. Understanding these errors is crucial for interpreting results and ensuring the accuracy and reliability of numerical solutions.

### 1. Introduction to Numerical Methods and the Need for Them

Numerical methods are powerful tools used to approximate solutions to mathematical problems that are difficult or impossible to solve analytically.

*   **What are Analytical Solutions?**
    *   Exact solutions obtained through symbolic manipulation and mathematical theorems.
    *   Example: Solving $2x + 4 = 10$ analytically yields $x = 3$.

*   **Why are Numerical Methods Necessary in Engineering?**
    *   **Complex Problems:** Many real-world engineering problems involve complex mathematical models (e.g., differential equations, integrals, systems of equations) for which analytical solutions do not exist or are too difficult to derive.
        *   *Example:* Predicting the trajectory of a projectile with air resistance, simulating fluid flow, analyzing structural loads.
    *   **Computational Power:** Computers excel at performing repetitive calculations, making numerical methods ideal for tackling these complex problems.
    *   **Approximation:** Numerical methods provide approximate solutions that are often sufficiently accurate for practical engineering applications.
    *   **Design and Optimization:** Enabling engineers to explore design variations, optimize parameters, and analyze performance under various conditions.

*   **Scope of Numerical Methods in Engineering:**
    *   Solving linear and nonlinear equations.
    *   Data fitting and interpolation.
    *   Numerical differentiation and integration.
    *   Solving ordinary and partial differential equations.
    *   Optimization problems.

**Reference (Chapra & Canale, 6th Ed., Ch. 1):** Chapra and Canale emphasize that numerical methods are essential when analytical solutions are unavailable or impractical, highlighting their role in solving complex engineering challenges through computational power.

### 2. Sources of Error in Numerical Computations

Every numerical computation is subject to errors. Understanding these errors is vital for evaluating the accuracy and reliability of our results. There are two primary categories of errors:

#### 2.1. Truncation Errors

*   **Definition:** Truncation error arises from the **approximation** of mathematical procedures. This happens when an infinite series is replaced by a finite number of terms, or when a continuous function is approximated by a simpler, discrete form.
*   **Origin:**
    *   **Approximation of Mathematical Operations:**
        *   **Infinite Series:** Truncating an infinite Taylor series to a finite number of terms.
        *   **Calculus Operations:** Approximating derivatives using finite differences or integrals using numerical quadrature.
    *   **Simplification of Models:** Using simplified mathematical models that are easier to compute but less accurate than the original model.
*   **Characteristics:**
    *   Related to the algorithm or method used.
    *   Generally decreases as the number of terms in a series or the complexity of the approximation increases.
    *   Can be analyzed theoretically (e.g., using Taylor series expansion).

*   **Examples:**
    *   **Taylor Series Expansion:** The Taylor series for $e^x$ is $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$. If we approximate $e^x$ using only the first three terms ($1 + x + \frac{x^2}{2!}$), we introduce a truncation error.
        *   Let $f(x) = e^x$. The Taylor series expansion around $x=0$ is:
            $f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots$
            For $f(x) = e^x$, $f^{(n)}(x) = e^x$, so $f^{(n)}(0) = 1$ for all $n$.
            $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots + \frac{x^n}{n!} + R_{n+1}(x)$
        *   The truncation error ($E_T$) for approximating $e^x$ with the first $n+1$ terms (up to $x^n/n!$) is the remainder term $R_{n+1}(x) = \frac{f^{(n+1)}(c)}{(n+1)!}x^{n+1}$ for some $c$ between $0$ and $x$.
    *   **Finite Difference Approximation of Derivative:**
        *   The true derivative of $f(x)$ at $x_i$ is $f'(x_i)$.
        *   The forward difference approximation is $\frac{f(x_{i+1}) - f(x_i)}{h}$.
        *   Using Taylor series:
            $f(x_{i+1}) = f(x_i) + f'(x_i)h + \frac{f''(x_i)}{2!}h^2 + \dots$
            $\frac{f(x_{i+1}) - f(x_i)}{h} = f'(x_i) + \frac{f''(x_i)}{2!}h + \dots$
        *   The truncation error is approximately $\frac{f''(x_i)}{2!}h$. This error decreases linearly with $h$.
    *   **Numerical Integration (Trapezoidal Rule):**
        *   The integral $\int_a^b f(x) dx$ is approximated by the sum of areas of trapezoids.
        *   The truncation error for the trapezoidal rule with $n$ intervals is approximately $-\frac{(b-a)^3}{12n^2} f''(\xi)$, where $\xi$ is in $[a,b]$. This error decreases quadratically with the number of intervals $n$ (or inversely with the square of the step size).

**Reference (Gupta, 1995, Ch. 2):** Gupta discusses truncation error as a consequence of approximating infinite processes by finite ones, providing detailed explanations of Taylor series approximations and their errors in numerical differentiation and integration.

#### 2.2. Round-off Errors

*   **Definition:** Round-off error arises from the **finite precision** of computers or calculators used to represent real numbers. During calculations, numbers are often rounded to a certain number of digits, leading to small inaccuracies.
*   **Origin:**
    *   **Representation of Real Numbers:** Computers use a fixed number of bits to represent numbers, leading to approximations for irrational numbers or numbers with many decimal places.
    *   **Rounding Operations:** During arithmetic operations (addition, subtraction, multiplication, division), results are rounded to fit within the computer's precision.
*   **Characteristics:**
    *   Related to the hardware (computer or calculator) and the number of digits it can store.
    *   Can accumulate over many computations, leading to significant errors.
    *   Can be exacerbated by catastrophic cancellation (subtracting nearly equal numbers).
    *   Difficult to predict precisely due to the random nature of rounding.

*   **Examples:**
    *   **Representing $\pi$:** $\pi \approx 3.1415926535...$. A calculator with 8 decimal places will store it as $3.14159265$. The difference is a round-off error.
    *   **Adding many small numbers:** Consider adding $0.0000001$ one million times to $1$. If the machine only stores 6 decimal places, it might add $0.000000$ (after rounding) a million times to $1$, resulting in $1$ instead of $1 + 1000000 \times 0.0000001 = 1.1$.
    *   **Catastrophic Cancellation:** Consider calculating $f(x) = \sqrt{x+1} - \sqrt{x}$ for large values of $x$. For example, if $x = 10^6$.
        *   $\sqrt{10^6+1} \approx 1000.0000005$
        *   $\sqrt{10^6} = 1000$
        *   $f(10^6) \approx 1000.0000005 - 1000 = 0.0000005$
        *   If the machine has limited precision, these two large, nearly equal numbers might be rounded such that their subtraction yields zero or a significantly erroneous result. A more stable way to calculate this is by multiplying by the conjugate:
            $f(x) = (\sqrt{x+1} - \sqrt{x}) \times \frac{\sqrt{x+1} + \sqrt{x}}{\sqrt{x+1} + \sqrt{x}} = \frac{(x+1) - x}{\sqrt{x+1} + \sqrt{x}} = \frac{1}{\sqrt{x+1} + \sqrt{x}}$
            For $x=10^6$, $f(x) = \frac{1}{\sqrt{10^6+1} + \sqrt{10^6}} \approx \frac{1}{1000.0000005 + 1000} \approx \frac{1}{2000.0000005} \approx 0.000499999999875$ which is more accurate.

**Reference (Balagurusamy, 2017, Ch. 1):** Balagurusamy introduces round-off errors as an inherent limitation of digital computers, explaining how finite representation of numbers and rounding during computations contribute to these errors.

### 3. Total Error

The total error in a numerical computation is the sum of the truncation error and the round-off error.

*   **Total Error = Truncation Error + Round-off Error**

*   **Error Behavior with Step Size (or Precision):**
    *   As the step size ($h$) decreases (or precision increases), truncation error generally decreases.
    *   However, as the step size ($h$) decreases, the number of computations increases, potentially leading to an increase in the accumulation of round-off errors.
    *   This creates a trade-off: making the approximation more accurate in terms of truncation can lead to more round-off error.
    *   The goal is to find an optimal step size that minimizes the total error.

*   **Graphical Representation of Error vs. Step Size:**
    *   Plotting truncation error vs. step size: Typically shows a decreasing curve.
    *   Plotting round-off error vs. step size: Typically shows an increasing curve.
    *   Plotting total error vs. step size: Shows a U-shaped curve, with a minimum at an optimal step size.

**Reference (Gerald & Wheatly, 6th Ed., Ch. 1):** Gerald and Wheatly discuss the interplay between truncation and round-off errors, explaining how the total error can exhibit a U-shaped behavior with respect to step size, a critical concept in selecting appropriate numerical methods.

### 4. Error Analysis and Measures

To quantify and manage errors, we use various measures:

*   **Absolute Error ($E_a$):** The magnitude of the difference between the true value and the approximate value.
    *   $E_a = |\text{True Value} - \text{Approximate Value}|$

*   **Relative Error ($E_r$):** The absolute error divided by the magnitude of the true value. It provides a measure of error relative to the size of the true value, which is often more informative.
    *   $E_r = \frac{|E_a|}{|\text{True Value}|} = \frac{|\text{True Value} - \text{Approximate Value}|}{|\text{True Value}|}$
    *   Often expressed as a percentage: $E_r \times 100\%$.

*   **Important Note:** When the true value is close to zero, the relative error can become very large or undefined. In such cases, the absolute error might be a more meaningful measure.

*   **True Value vs. Approximation:** In many engineering problems, the "true value" is itself unknown (that's why we're using numerical methods). In such cases, we often compare our current approximation with a more accurate approximation obtained by using a finer step size or a more sophisticated method. This difference is then considered an "approximate error" or "estimated error."

**Reference (Jain, Iyengar, & Jain, Ch. 1):** Jain, Iyengar, and Jain provide a thorough treatment of error analysis, defining and illustrating absolute and relative errors, and discussing their significance in evaluating the accuracy of numerical computations.

### 5. Practical Implications and Mitigation Strategies

*   **Choosing Appropriate Methods:** Select methods with lower truncation errors if computational resources allow (e.g., higher-order methods).
*   **Step Size Selection:** Carefully choose step sizes to balance truncation and round-off errors.
*   **Algorithm Stability:** Prefer algorithms that are less prone to amplification of round-off errors (e.g., avoiding catastrophic cancellation).
*   **Higher Precision:** Utilize higher precision arithmetic (e.g., double-precision floating-point numbers) when available and necessary.
*   **Order of Operations:** Be mindful of the order of operations, especially in summations, to minimize round-off errors. Summing small numbers first and then larger numbers can be beneficial.
*   **Error Monitoring:** Implement error estimation techniques within algorithms to monitor the accumulation of errors.

### 6. Learning Outcome Coverage

This topic directly addresses the foundational understanding required for all course outcomes by:

*   **CO1: Apply numerical methods to solve linear and nonlinear equations:** Understanding errors is crucial for interpreting the convergence and accuracy of iterative methods used for solving equations.
*   **CO2: Implement numerical schemes to fit data:** Knowing error types helps in selecting appropriate interpolation or regression techniques and assessing the quality of the fit.
*   **CO3: Solve differentiation and integration numerically:** Truncation errors are inherent in finite difference and numerical integration schemes, making their analysis critical.
*   **CO4: Execute numerical procedures to solve ordinary and partial differential equations:** ODE and PDE solvers rely heavily on numerical approximations (e.g., Taylor series, finite differences), where truncation and round-off errors significantly impact solution accuracy.

### 7. Practice Questions and Exercises

**Question 1:**
Consider the function $f(x) = \sin(x)$. We want to approximate $f'(0.5)$ using the forward difference formula: $f'(x) \approx \frac{f(x+h) - f(x)}{h}$.
Let $x = 0.5$.
(a) Calculate the approximate derivative using $h = 0.1$.
(b) Calculate the true derivative at $x = 0.5$.
(c) Calculate the absolute and relative errors for your approximation in (a).
(d) Explain how reducing $h$ would affect the truncation error and the round-off error.

**Answer 1:**
(a) $f(0.5) = \sin(0.5) \approx 0.4794255$
$f(0.6) = \sin(0.6) \approx 0.5646425$
Approximate derivative = $\frac{0.5646425 - 0.4794255}{0.1} = \frac{0.085217}{0.1} = 0.85217$

(b) True derivative of $\sin(x)$ is $\cos(x)$.
True derivative at $x = 0.5$ is $\cos(0.5) \approx 0.8775826$

(c) Absolute Error ($E_a$) = $|0.8775826 - 0.85217| = 0.0254126$
Relative Error ($E_r$) = $\frac{0.0254126}{0.8775826} \approx 0.028957 \approx 2.90\%$

(d)
*   **Truncation Error:** The forward difference formula has a truncation error of approximately $\frac{f''(x)}{2!}h$. Since $f''(x) = -\sin(x)$, the truncation error is roughly proportional to $h$. **Reducing $h$ will decrease the truncation error.**
*   **Round-off Error:** As $h$ gets smaller, the calculation involves subtracting two numbers ($f(x+h)$ and $f(x)$) that are very close to each other. This can lead to catastrophic cancellation, amplifying round-off errors. Also, smaller $h$ might require more precise representations of $f(x+h)$ and $f(x)$, increasing the possibility of round-off. **Reducing $h$ can potentially increase the round-off error.**

**Question 2:**
What is the primary difference between truncation error and round-off error?

**Answer 2:**
Truncation error arises from approximating mathematical procedures (e.g., replacing an infinite series with a finite one, or approximating a derivative with finite differences). Round-off error arises from the finite precision of computer representation of numbers and the rounding operations performed during calculations.

**Question 3:**
If a computer can store numbers with 7 decimal digits, and you calculate $\sqrt{2}$ and then square it, what might happen due to round-off errors?

**Answer 3:**
$\sqrt{2} \approx 1.41421356...$
If the computer stores it as $1.4142136$ (rounding up).
Squaring this approximation: $(1.4142136)^2 \approx 2.000000115$.
The result is slightly off from the true value of 2 due to the initial rounding of $\sqrt{2}$.

**Question 4:**
Explain the concept of "catastrophic cancellation" and how it relates to round-off errors.

**Answer 4:**
Catastrophic cancellation occurs when two nearly equal numbers are subtracted, resulting in a number that has very few significant digits. The inherent round-off errors in the original numbers then become magnified in the difference, potentially dominating the true result. This is a significant issue in numerical computation, especially when dealing with small step sizes or ill-conditioned problems.

### 8. Important Points to Remember

*   **No Numerical Method is Perfect:** All numerical computations involve errors.
*   **Error is Inevitable:** Truncation error is due to approximation, and round-off error is due to finite machine precision.
*   **Total Error = Truncation Error + Round-off Error.**
*   **Trade-off:** Reducing truncation error often increases round-off error and vice-versa. Find the optimal balance.
*   **Relative Error is Often More Meaningful:** Especially when dealing with numbers of vastly different magnitudes.
*   **Understand the Source:** Identifying the source of error helps in choosing better methods or adjusting parameters.
*   **Stability Matters:** Choose algorithms that are numerically stable to minimize error amplification.

This comprehensive overview of truncation and round-off errors lays the groundwork for understanding the behavior and limitations of all numerical techniques used in engineering. Mastering these concepts is essential for producing reliable and accurate solutions to complex engineering problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
