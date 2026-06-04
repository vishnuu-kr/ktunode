---
title: "Expectation"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4c2"
status: "completed"
scrapedAt: "2026-05-23T17:50:42.296Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 2: Continuous Random Variables and their Probability Distributions

### Topic: Expectation

---

### 1. Introduction to Expectation

**What is Expectation?**

In probability theory, the **expectation** of a random variable is a measure of the central tendency of its distribution. It represents the weighted average of all possible values that the random variable can take, where the weights are the corresponding probabilities. For continuous random variables, this average is calculated using integration.

**Relevance in Electrical Science:**

Understanding expectation is crucial in electrical science for:

*   **Predicting average behavior:** For example, the average power consumption of a device, the average voltage fluctuation in a circuit, or the average signal strength.
*   **Decision-making under uncertainty:** Evaluating the expected cost or profit of different engineering designs or operational strategies.
*   **System analysis:** Analyzing the long-term average performance of systems with random components.
*   **Statistical quality control:** Determining the expected number of defects in a manufactured batch.

---

### 2. Expectation of a Continuous Random Variable

**Definition:**

Let $X$ be a continuous random variable with probability density function (PDF) $f(x)$. The **expectation** of $X$, denoted by $E(X)$ or $\mu$, is defined as:

$$ E(X) = \int_{-\infty}^{\infty} x f(x) dx $$

**Conditions for Existence:**

The expectation $E(X)$ exists if the integral $\int_{-\infty}^{\infty} |x| f(x) dx$ converges. This is generally true for most practical PDFs encountered in electrical science.

**Intuitive Understanding:**

Imagine discretizing the continuous range of $X$ into very small intervals. The probability of $X$ falling into an interval $[x, x + \Delta x]$ is approximately $f(x) \Delta x$. The contribution of this interval to the expectation is $x \cdot f(x) \Delta x$. Summing these contributions over all possible values of $x$ and taking the limit as $\Delta x \to 0$ leads to the integral definition.

---

### 3. Expectation of a Function of a Continuous Random Variable

**Definition:**

If $Y = g(X)$ is a function of a continuous random variable $X$ with PDF $f(x)$, then the expectation of $Y$ is given by the **Law of the Unconscious Statistician (LOTUS)**:

$$ E(Y) = E(g(X)) = \int_{-\infty}^{\infty} g(x) f(x) dx $$

This means we can find the expected value of a function of $X$ without first finding the PDF of $Y$.

**Example:**

Let $X$ be a continuous random variable with PDF $f(x) = 2x$ for $0 \le x \le 1$, and $f(x) = 0$ otherwise. Find $E(X^2)$.

Using LOTUS:
$g(x) = x^2$
$E(X^2) = \int_{-\infty}^{\infty} x^2 f(x) dx = \int_{0}^{1} x^2 (2x) dx = \int_{0}^{1} 2x^3 dx$
$E(X^2) = \left[ \frac{2x^4}{4} \right]_{0}^{1} = \left[ \frac{x^4}{2} \right]_{0}^{1} = \frac{1^4}{2} - \frac{0^4}{2} = \frac{1}{2}$

---

### 4. Properties of Expectation

The expectation operator $E(\cdot)$ has several important properties, analogous to those for discrete random variables:

1.  **Linearity of Expectation:** For any constants $a$ and $b$, and random variable $X$:
    $$ E(aX + b) = aE(X) + b $$
    *   **Proof:**
        $E(aX + b) = \int_{-\infty}^{\infty} (ax + b) f(x) dx = \int_{-\infty}^{\infty} ax f(x) dx + \int_{-\infty}^{\infty} b f(x) dx$
        $E(aX + b) = a \int_{-\infty}^{\infty} x f(x) dx + b \int_{-\infty}^{\infty} f(x) dx$
        Since $\int_{-\infty}^{\infty} f(x) dx = 1$ (total probability),
        $E(aX + b) = aE(X) + b \cdot 1 = aE(X) + b$

2.  **Expectation of a Constant:** The expectation of a constant is the constant itself.
    $$ E(c) = c $$
    *   **Proof:** Using linearity with $X$ being a degenerate random variable that always takes value $c$, or directly from the integral:
        $E(c) = \int_{-\infty}^{\infty} c f(x) dx = c \int_{-\infty}^{\infty} f(x) dx = c \cdot 1 = c$.

3.  **Expectation of a Sum of Random Variables:** For random variables $X_1, X_2, \ldots, X_n$ and constants $c_1, c_2, \ldots, c_n$:
    $$ E(c_1 X_1 + c_2 X_2 + \ldots + c_n X_n) = c_1 E(X_1) + c_2 E(X_2) + \ldots + c_n E(X_n) $$
    This property holds **regardless of whether the random variables are independent**. This is a very powerful property.

**Example:**
Let $X$ and $Y$ be two continuous random variables with $E(X) = 5$ and $E(Y) = 10$. Then, $E(2X - 3Y + 7) = 2E(X) - 3E(Y) + 7 = 2(5) - 3(10) + 7 = 10 - 30 + 7 = -13$.

---

### 5. Moments of a Continuous Random Variable

**Moments about the Origin (Raw Moments):**

The $k$-th moment about the origin is defined as $E(X^k)$.
$$ E(X^k) = \int_{-\infty}^{\infty} x^k f(x) dx $$

*   **First Moment:** $E(X)$ - This is the mean (or expected value) of the random variable.
*   **Second Moment:** $E(X^2)$ - This is used to calculate the variance.

**Moments about the Mean (Central Moments):**

The $k$-th central moment is defined as $E[(X - E(X))^k]$. Let $\mu = E(X)$.
$$ E[(X - \mu)^k] = \int_{-\infty}^{\infty} (x - \mu)^k f(x) dx $$

*   **First Central Moment:** $E[(X - \mu)^1] = E(X - \mu) = E(X) - E(\mu) = \mu - \mu = 0$. (Always zero).
*   **Second Central Moment:** $E[(X - \mu)^2]$ - This is the **variance**, denoted by $\text{Var}(X)$ or $\sigma^2$.

---

### 6. Variance and Standard Deviation

**Variance:**

The variance of a continuous random variable $X$ is a measure of the spread or dispersion of its distribution around its mean. It is the expected value of the squared deviation from the mean.

$$ \text{Var}(X) = E[(X - \mu)^2] = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) dx $$

**Alternative Formula for Variance:**

A more convenient formula for calculating variance is:
$$ \text{Var}(X) = E(X^2) - [E(X)]^2 $$
*   **Proof:**
    $\text{Var}(X) = E[(X - \mu)^2] = E[X^2 - 2\mu X + \mu^2]$
    Using linearity of expectation:
    $\text{Var}(X) = E(X^2) - E(2\mu X) + E(\mu^2)$
    $\text{Var}(X) = E(X^2) - 2\mu E(X) + \mu^2$ (since $2\mu$ and $\mu^2$ are constants)
    $\text{Var}(X) = E(X^2) - 2\mu(\mu) + \mu^2$ (since $E(X) = \mu$)
    $\text{Var}(X) = E(X^2) - 2\mu^2 + \mu^2 = E(X^2) - \mu^2 = E(X^2) - [E(X)]^2$

**Standard Deviation:**

The standard deviation, denoted by $\sigma$, is the square root of the variance. It is a more interpretable measure of spread as it has the same units as the random variable.
$$ \sigma = \sqrt{\text{Var}(X)} = \sqrt{E(X^2) - [E(X)]^2} $$

**Example:**
Let $X$ be a continuous random variable with PDF $f(x) = 2x$ for $0 \le x \le 1$, and $f(x) = 0$ otherwise.
We previously calculated $E(X) = \int_{0}^{1} x(2x) dx = \int_{0}^{1} 2x^2 dx = [\frac{2x^3}{3}]_{0}^{1} = \frac{2}{3}$.
We also calculated $E(X^2) = \frac{1}{2}$.

Now, let's calculate the variance and standard deviation:
$\text{Var}(X) = E(X^2) - [E(X)]^2 = \frac{1}{2} - \left(\frac{2}{3}\right)^2 = \frac{1}{2} - \frac{4}{9} = \frac{9 - 8}{18} = \frac{1}{18}$.
$\sigma = \sqrt{\text{Var}(X)} = \sqrt{\frac{1}{18}} = \frac{1}{3\sqrt{2}} = \frac{\sqrt{2}}{6}$.

---

### 7. Expectation and Variance of Common Continuous Distributions

(This section will briefly cover expectations and variances of distributions often encountered in Electrical Science. Detailed derivation of PDFs and expectations can be found in textbooks like Devore or Veerarajan.)

**a) Uniform Distribution (Continuous Uniform Distribution)**

*   **PDF:** $f(x) = \frac{1}{b-a}$ for $a \le x \le b$, and $0$ otherwise.
*   **Mean:** $E(X) = \frac{a+b}{2}$
*   **Variance:** $\text{Var}(X) = \frac{(b-a)^2}{12}$

**Electrical Science Application:** Modeling errors in measurements with a bounded range, random sampling within a specific interval.

**b) Exponential Distribution**

*   **PDF:** $f(x) = \lambda e^{-\lambda x}$ for $x \ge 0$, and $0$ otherwise. ($\lambda > 0$)
*   **Mean:** $E(X) = \frac{1}{\lambda}$
*   **Variance:** $\text{Var}(X) = \frac{1}{\lambda^2}$

**Electrical Science Application:** Modeling the time between events in a Poisson process, such as the failure times of electronic components, arrival times of calls in a telecommunication system.

**c) Normal Distribution (Gaussian Distribution)**

*   **PDF:** $f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$ for $-\infty < x < \infty$. ($\sigma > 0$)
*   **Mean:** $E(X) = \mu$
*   **Variance:** $\text{Var}(X) = \sigma^2$

**Electrical Science Application:** Modeling noise in electronic circuits, measurement errors, signal amplitudes. It's a fundamental distribution in many statistical analyses.

**d) Gamma Distribution**

*   **PDF:** $f(x) = \frac{1}{\Gamma(\alpha)\beta^\alpha} x^{\alpha-1} e^{-x/\beta}$ for $x \ge 0$, $\alpha > 0$, $\beta > 0$.
*   **Mean:** $E(X) = \alpha\beta$
*   **Variance:** $\text{Var}(X) = \alpha\beta^2$

**Electrical Science Application:** Modeling waiting times, sums of exponentially distributed random variables, reliability analysis.

**e) Beta Distribution**

*   **PDF:** $f(x) = \frac{1}{B(\alpha, \beta)} x^{\alpha-1} (1-x)^{\beta-1}$ for $0 \le x \le 1$, $\alpha > 0$, $\beta > 0$. Where $B(\alpha, \beta)$ is the Beta function.
*   **Mean:** $E(X) = \frac{\alpha}{\alpha + \beta}$
*   **Variance:** $\text{Var}(X) = \frac{\alpha\beta}{(\alpha + \beta)^2 (\alpha + \beta + 1)}$

**Electrical Science Application:** Modeling probabilities, proportions, or percentages where the outcome is bounded between 0 and 1. Useful in system reliability and performance assessment.

---

### 8. Applications and Connections to Course Outcomes

*   **CO1 (Discrete Random Variables):** While this module focuses on continuous variables, the fundamental concepts of expectation (weighted average) and variance apply similarly to discrete variables, highlighting the foundational nature of these topics.
*   **CO2 (Continuous Random Variables):** This entire module directly addresses CO2. Understanding expectation and variance is key to describing the properties and models of continuous random variables.
*   **CO3 (Parameter Estimation):** The sample mean ($\bar{X}$) is an estimator for the population mean ($E(X)$). The sample variance ($S^2$) is an estimator for the population variance ($\text{Var}(X)$). Understanding the properties of expectation ($E(\bar{X}) = \mu$) and variance ($E(S^2) = \sigma^2$) is crucial for constructing confidence intervals and performing hypothesis tests.
*   **CO4 (Random Processes):** For a stationary random process, the mean $E[X(t)]$ is constant over time, and the variance $E[(X(t) - E[X(t)])^2]$ is also constant. The expectation of a random process plays a vital role in its characterization and analysis, especially in understanding its average behavior over time.

---

### 9. Important Points to Remember

*   **Expectation (Mean):** The weighted average of all possible values of a random variable. It's a measure of central tendency.
*   **LOTUS:** $E(g(X)) = \int_{-\infty}^{\infty} g(x) f(x) dx$.
*   **Linearity:** $E(aX + b) = aE(X) + b$. This property is extremely useful and holds even if random variables are not independent.
*   **Variance:** A measure of the spread of the distribution around the mean. $\text{Var}(X) = E[(X - \mu)^2] = E(X^2) - [E(X)]^2$.
*   **Standard Deviation:** The square root of variance, providing a measure of spread in the same units as the variable.
*   **Moments:** $E(X^k)$ are raw moments, $E[(X-\mu)^k]$ are central moments. The first raw moment is the mean, the second central moment is the variance.
*   **Interpretation:** Expectation tells you "where the distribution is centered," while variance tells you "how spread out it is."

---

### 10. Practice Questions and Exercises

**Question 1:**

Let $X$ be a continuous random variable with PDF $f(x) = \frac{1}{2}e^{-|x|}$ for $-\infty < x < \infty$. This is known as the Laplace distribution.
(a) Calculate the expected value of $X$, $E(X)$.
(b) Calculate the variance of $X$, $\text{Var}(X)$.
(c) Find the expected value of $Y = X^2$.

**Solution 1:**

The PDF is $f(x) = \frac{1}{2}e^{-|x|} = \begin{cases} \frac{1}{2}e^{-x} & x \ge 0 \\ \frac{1}{2}e^{x} & x < 0 \end{cases}$.

(a) $E(X) = \int_{-\infty}^{\infty} x f(x) dx = \int_{-\infty}^{0} x (\frac{1}{2}e^{x}) dx + \int_{0}^{\infty} x (\frac{1}{2}e^{-x}) dx$.
Both integrals are of the form $\int_{0}^{\infty} x e^{-ax} dx$. Using integration by parts ($\int u dv = uv - \int v du$):
Let $u=x, dv=e^{-ax}dx$. Then $du=dx, v=-\frac{1}{a}e^{-ax}$.
$\int_{0}^{\infty} x e^{-ax} dx = \left[-\frac{x}{a}e^{-ax}\right]_0^{\infty} - \int_{0}^{\infty} (-\frac{1}{a}e^{-ax}) dx = 0 - 0 + \frac{1}{a} \int_{0}^{\infty} e^{-ax} dx = \frac{1}{a} [-\frac{1}{a}e^{-ax}]_0^{\infty} = \frac{1}{a}(0 - (-\frac{1}{a})) = \frac{1}{a^2}$.

For the first integral ($\int_{-\infty}^{0} x e^{x} dx$), let $y = -x$, so $x = -y$, $dx = -dy$. The limits change from $-\infty, 0$ to $\infty, 0$.
$\int_{\infty}^{0} (-y) e^{-y} (-dy) = \int_{\infty}^{0} y e^{-y} dy = - \int_{0}^{\infty} y e^{-y} dy$.
Using the formula with $a=1$, this is $-\frac{1}{1^2} = -1$.
So the first part of $E(X)$ is $\frac{1}{2} (-1) = -\frac{1}{2}$.

For the second integral ($\int_{0}^{\infty} x e^{-x} dx$), using the formula with $a=1$, this is $\frac{1}{1^2} = 1$.
So the second part of $E(X)$ is $\frac{1}{2} (1) = \frac{1}{2}$.

$E(X) = -\frac{1}{2} + \frac{1}{2} = 0$.
*(Note: The Laplace distribution is symmetric around 0, so its mean is 0, which we could have deduced by symmetry)*.

(b) $\text{Var}(X) = E(X^2) - [E(X)]^2$. Since $E(X)=0$, $\text{Var}(X) = E(X^2)$.
$E(X^2) = \int_{-\infty}^{\infty} x^2 f(x) dx = \int_{-\infty}^{0} x^2 (\frac{1}{2}e^{x}) dx + \int_{0}^{\infty} x^2 (\frac{1}{2}e^{-x}) dx$.
Due to symmetry ($x^2$ is even, $e^{-|x|}$ is even), the two integrals are equal.
$E(X^2) = 2 \int_{0}^{\infty} x^2 (\frac{1}{2}e^{-x}) dx = \int_{0}^{\infty} x^2 e^{-x} dx$.
Using integration by parts twice, or the Gamma function $\Gamma(z+1) = z! = \int_{0}^{\infty} x^z e^{-x} dx$.
Here, $z=2$. So, $\int_{0}^{\infty} x^2 e^{-x} dx = \Gamma(2+1) = \Gamma(3) = 2! = 2$.
Thus, $\text{Var}(X) = E(X^2) = 2$.

(c) $Y = X^2$. $E(Y) = E(X^2)$. We already calculated this in part (b).
$E(Y) = E(X^2) = 2$.

---

**Question 2:**

A component's lifetime $T$ (in hours) is exponentially distributed with a failure rate of $\lambda = 0.01$ per hour.
(a) What is the expected lifetime of the component?
(b) What is the variance of the component's lifetime?
(c) What is the probability that the component lasts longer than its expected lifetime?

**Solution 2:**

The lifetime $T$ follows an exponential distribution with $\lambda = 0.01$.
The PDF is $f(t) = 0.01 e^{-0.01 t}$ for $t \ge 0$.

(a) Expected lifetime: $E(T) = \frac{1}{\lambda} = \frac{1}{0.01} = 100$ hours.

(b) Variance of lifetime: $\text{Var}(T) = \frac{1}{\lambda^2} = \frac{1}{(0.01)^2} = \frac{1}{0.0001} = 10000$ hours$^2$.

(c) Probability that the component lasts longer than its expected lifetime ($E(T) = 100$ hours):
$P(T > 100) = \int_{100}^{\infty} f(t) dt = \int_{100}^{\infty} 0.01 e^{-0.01 t} dt$.
Let $u = -0.01 t$, so $du = -0.01 dt$. When $t=100, u = -1$. When $t \to \infty, u \to -\infty$.
$\int_{-1}^{-\infty} e^u (-du) = - \int_{-1}^{-\infty} e^u du = \int_{-\infty}^{-1} e^u du$.
$\int_{-\infty}^{-1} e^u du = [e^u]_{-\infty}^{-1} = e^{-1} - e^{-\infty} = e^{-1} - 0 = e^{-1}$.

Alternatively, using the survival function for exponential distribution: $P(T > t) = e^{-\lambda t}$.
$P(T > 100) = e^{-0.01 \times 100} = e^{-1}$.
$e^{-1} \approx 0.36788$.

---

**Question 3:**

Consider a random variable $X$ uniformly distributed on the interval $[0, 10]$.
(a) Find the expected value of $X$.
(b) Find the variance of $X$.
(c) Find the expected value of $Y = e^X$.

**Solution 3:**

$X \sim U(0, 10)$.
$f(x) = \frac{1}{10-0} = \frac{1}{10}$ for $0 \le x \le 10$, and $0$ otherwise.

(a) $E(X) = \frac{a+b}{2} = \frac{0+10}{2} = 5$.

(b) $\text{Var}(X) = \frac{(b-a)^2}{12} = \frac{(10-0)^2}{12} = \frac{100}{12} = \frac{25}{3} \approx 8.33$.

(c) $Y = e^X$. We need to find $E(Y) = E(e^X)$. Using LOTUS:
$E(e^X) = \int_{-\infty}^{\infty} e^x f(x) dx = \int_{0}^{10} e^x (\frac{1}{10}) dx$.
$E(e^X) = \frac{1}{10} \int_{0}^{10} e^x dx = \frac{1}{10} [e^x]_{0}^{10} = \frac{1}{10} (e^{10} - e^0) = \frac{1}{10} (e^{10} - 1)$.
$e^{10} \approx 22026.46$.
$E(e^X) \approx \frac{1}{10} (22026.46 - 1) \approx 2202.546$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### 11. References and Further Reading

*   **Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning.**
    *   Specifically, Chapters 4 and 5 in Devore (9th ed.) cover continuous random variables and their probability distributions, including detailed explanations and examples of expectation and variance.

*   **Veerarajan, T. (2008). *Probability, Statistics and Random Processes* (3rd ed.). The McGraw-Hill.**
    *   Chapter 5 in Veerarajan (3rd ed.) is highly relevant, discussing expected values and variance for continuous random variables with numerous solved examples.

*   **Papoulis, A., & Pillai, S. U. (2002). *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill.**
    *   A more advanced text, particularly Chapter 5 for expectation and variance of continuous RVs.

*   **Ross, S. M. (2020). *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press.**
    *   Provides a solid foundation on expectation and variance for continuous random variables in Chapters 4 and 5.

*   **Palaniammal, S. (2015). *Probability and Random Processes* (3rd ed.). PHI Learning Private Limited.**
    *   Relevant chapters cover continuous random variables, their expectation, and variance.

*   **Anderson, D. F., Timo, B. (2017). *Introduction to Probability* (1st ed.). Cambridge.**
    *   Offers foundational concepts of expectation and variance for continuous distributions.

---