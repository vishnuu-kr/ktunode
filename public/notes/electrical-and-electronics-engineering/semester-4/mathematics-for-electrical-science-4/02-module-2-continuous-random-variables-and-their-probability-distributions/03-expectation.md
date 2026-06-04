---
title: "Expectation"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d9f"
status: "completed"
scrapedAt: "2026-05-23T16:16:54.231Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Expectation

This module delves into the fundamental concepts of continuous random variables and their probability distributions. A key aspect of understanding these distributions is the **Expectation**, which represents the average value we can expect from a random variable over many trials. This topic is crucial for analyzing and predicting the behavior of systems in electrical science.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the definition of expectation for a continuous random variable.**
*   **Calculate the expected value of a continuous random variable given its probability density function (PDF).**
*   **Understand and apply the properties of expectation.**
*   **Calculate the expected value of a function of a continuous random variable.**
*   **Define and calculate the variance and standard deviation of a continuous random variable.**
*   **Understand and apply the properties of variance.**
*   **Relate expectation and variance to the physical interpretation in electrical science contexts.**

---

### Key Concepts and Definitions

#### 1. Expectation (Expected Value) of a Continuous Random Variable

The **expectation** or **expected value** of a continuous random variable $X$, denoted by $E(X)$ or $\mu_X$, is the weighted average of all possible values of $X$, where the weights are given by the probability density function (PDF).

**Definition:**
For a continuous random variable $X$ with probability density function $f(x)$, the expectation is defined as:

$$ E(X) = \int_{-\infty}^{\infty} x f(x) \, dx $$

**Intuition:**
Imagine taking many samples from the distribution of $X$. The expected value is the average of these samples. It represents the "center of mass" of the probability distribution.

**Reference:**
*   **Devore (9th ed.):** Chapter 4, Section 4.1 - Expected Value of a Continuous Random Variable. Devore emphasizes that the expected value is a key characteristic of a random variable's distribution, representing the long-run average.
*   **Veerarajan (3rd ed.):** Chapter 7, Section 7.2 - Expected Values. Veerarajan provides a similar definition and discusses its interpretation as the mean of the distribution.

**Example 1: Exponential Distribution**
Consider a continuous random variable $X$ representing the lifetime of an electronic component, following an exponential distribution with parameter $\lambda$. Its PDF is given by:
$f(x) = \lambda e^{-\lambda x}$ for $x \ge 0$, and $f(x) = 0$ for $x < 0$.

Let's calculate the expected lifetime:
$$ E(X) = \int_{-\infty}^{\infty} x f(x) \, dx = \int_{0}^{\infty} x (\lambda e^{-\lambda x}) \, dx $$
We can solve this integral using integration by parts. Let $u = x$ and $dv = \lambda e^{-\lambda x} \, dx$. Then $du = dx$ and $v = -e^{-\lambda x}$.
$$ E(X) = [-x e^{-\lambda x}]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-\lambda x}) \, dx $$
$$ E(X) = (0 - 0) + \int_{0}^{\infty} e^{-\lambda x} \, dx $$
$$ E(X) = [-\frac{1}{\lambda} e^{-\lambda x}]_{0}^{\infty} $$
$$ E(X) = (0 - (-\frac{1}{\lambda})) = \frac{1}{\lambda} $$
So, the expected lifetime of a component following an exponential distribution with parameter $\lambda$ is $1/\lambda$.

**Example 2: Uniform Distribution**
Consider a continuous random variable $X$ uniformly distributed over the interval $[a, b]$. Its PDF is $f(x) = \frac{1}{b-a}$ for $a \le x \le b$, and $f(x) = 0$ otherwise.

$$ E(X) = \int_{-\infty}^{\infty} x f(x) \, dx = \int_{a}^{b} x \left(\frac{1}{b-a}\right) \, dx $$
$$ E(X) = \frac{1}{b-a} \int_{a}^{b} x \, dx = \frac{1}{b-a} \left[\frac{x^2}{2}\right]_{a}^{b} $$
$$ E(X) = \frac{1}{b-a} \left(\frac{b^2}{2} - \frac{a^2}{2}\right) = \frac{1}{b-a} \frac{(b-a)(b+a)}{2} $$
$$ E(X) = \frac{a+b}{2} $$
This makes sense, as the expected value of a uniform distribution is simply the midpoint of the interval.

#### 2. Properties of Expectation

Let $X$ and $Y$ be continuous random variables, and let $a$ and $b$ be constants.

*   **Expectation of a Constant:** $E(a) = a$
    *   *Proof:* If $X=a$ is a constant, its PDF is a Dirac delta function at $a$. Alternatively, if $a$ is a constant value, its probability is 1 at that point, and 0 elsewhere. $E(a) = a \times P(X=a) = a \times 1 = a$.
*   **Linearity of Expectation:** $E(aX + b) = aE(X) + b$
    *   *Proof:*
        $$ E(aX + b) = \int_{-\infty}^{\infty} (ax + b) f(x) \, dx $$
        $$ E(aX + b) = \int_{-\infty}^{\infty} ax f(x) \, dx + \int_{-\infty}^{\infty} b f(x) \, dx $$
        $$ E(aX + b) = a \int_{-\infty}^{\infty} x f(x) \, dx + b \int_{-\infty}^{\infty} f(x) \, dx $$
        Since $\int_{-\infty}^{\infty} f(x) \, dx = 1$ (the total probability is 1),
        $$ E(aX + b) = aE(X) + b(1) = aE(X) + b $$
*   **Expectation of a Sum/Difference:** $E(X \pm Y) = E(X) \pm E(Y)$
    *   This property holds regardless of whether $X$ and $Y$ are independent.
*   **Expectation of a Product (for independent variables):** If $X$ and $Y$ are independent, then $E(XY) = E(X)E(Y)$.
    *   *Note:* This property does *not* hold if $X$ and $Y$ are not independent.
*   **Monotonicity:** If $X \ge 0$ for all $x$, then $E(X) \ge 0$. If $X \le Y$ for all $x$, then $E(X) \le E(Y)$.

**Reference:**
*   **Devore (9th ed.):** Chapter 4, Section 4.1 - Properties of Expected Value. Devore dedicates a section to these fundamental properties, which are crucial for simplifying calculations.
*   **Veerarajan (3rd ed.):** Chapter 7, Section 7.2 - Properties of Expectation. Similar to Devore, Veerarajan highlights the significance of these properties.

**Example 3: Linearity of Expectation in a Circuit**
Suppose the voltage across a resistor is $V = aI + b$, where $I$ is a random current, $a$ is resistance, and $b$ is a bias voltage. The expected voltage is $E(V) = E(aI + b) = aE(I) + b$. This means the expected voltage is the resistance times the expected current plus the bias voltage.

#### 3. Expectation of a Function of a Random Variable

If $Y = g(X)$, where $X$ is a continuous random variable with PDF $f(x)$, then the expected value of $Y$ can be calculated directly without first finding the PDF of $Y$.

**Definition:**
$$ E(Y) = E(g(X)) = \int_{-\infty}^{\infty} g(x) f(x) \, dx $$

**Reference:**
*   **Devore (9th ed.):** Chapter 4, Section 4.1 - Expected Value of a Function of a Random Variable. Devore calls this the "Law of the Unconscious Statistician" (LOTUS), as it's a powerful result that often bypasses the need to derive the distribution of $g(X)$.
*   **Veerarajan (3rd ed.):** Chapter 7, Section 7.3 - Expected Value of a Function of a Random Variable. Veerarajan also covers LOTUS and provides examples.

**Example 4: Expected Square of a Uniform Random Variable**
Let $X$ be uniformly distributed on $[0, 1]$, so $f(x) = 1$ for $0 \le x \le 1$. Let's find $E(X^2)$.
$$ E(X^2) = \int_{0}^{1} x^2 f(x) \, dx = \int_{0}^{1} x^2 (1) \, dx $$
$$ E(X^2) = \left[\frac{x^3}{3}\right]_{0}^{1} = \frac{1}{3} $$

**Example 5: Expected Value of a Sine Wave Component**
Consider a signal voltage $V(t) = A \sin(\omega t)$, where $A$ is a random variable with PDF $f(a)$. If we are interested in the expected value of the amplitude of this sine wave, it's simply $E(A)$. If $A$ is a constant, $E(A) = A$. If $A$ is a random variable, we would use its distribution to find $E(A)$.

#### 4. Variance and Standard Deviation

While the expectation gives us the average value, it doesn't tell us how spread out the distribution is. Variance and standard deviation quantify this spread.

**Definition of Variance:**
The **variance** of a continuous random variable $X$, denoted by $Var(X)$ or $\sigma_X^2$, measures the average squared deviation of $X$ from its mean $E(X)$.

$$ Var(X) = E[(X - E(X))^2] $$

Using the property $E(g(X)) = \int g(x) f(x) \, dx$, we have:
$$ Var(X) = \int_{-\infty}^{\infty} (x - E(X))^2 f(x) \, dx $$

**Computational Formula for Variance:**
A more convenient formula for calculation is:
$$ Var(X) = E(X^2) - [E(X)]^2 $$
*   *Proof:*
    $$ Var(X) = E[(X - E(X))^2] = E[X^2 - 2XE(X) + (E(X))^2] $$
    Using linearity of expectation:
    $$ Var(X) = E(X^2) - E(2XE(X)) + E((E(X))^2) $$
    Since $E(X)$ and $(E(X))^2$ are constants:
    $$ Var(X) = E(X^2) - 2E(X)E(X) + (E(X))^2 $$
    $$ Var(X) = E(X^2) - 2(E(X))^2 + (E(X))^2 $$
    $$ Var(X) = E(X^2) - (E(X))^2 $$

**Definition of Standard Deviation:**
The **standard deviation** of a continuous random variable $X$, denoted by $\sigma_X$ or $SD(X)$, is the square root of the variance. It has the same units as $X$, making it more interpretable than variance.

$$ \sigma_X = \sqrt{Var(X)} $$

**Reference:**
*   **Devore (9th ed.):** Chapter 4, Section 4.2 - Variance and Standard Deviation. Devore provides a thorough explanation of variance and standard deviation, including their computational formulas and interpretations.
*   **Veerarajan (3rd ed.):** Chapter 7, Section 7.4 - Variance. Veerarajan also covers variance and its calculation, emphasizing its role in measuring spread.
*   **Papoulis & Pillai (4th ed.):** Chapter 5 - Moments. Papoulis discusses moments (including mean and variance) in the context of probability distributions.
*   **Ross (6th ed.):** Chapter 4, Section 4.3 - Variance. Ross similarly introduces variance and its importance.

**Example 6: Variance of the Exponential Distribution**
For the exponential distribution with PDF $f(x) = \lambda e^{-\lambda x}$ for $x \ge 0$, we found $E(X) = 1/\lambda$. Now let's find $E(X^2)$.
$$ E(X^2) = \int_{0}^{\infty} x^2 (\lambda e^{-\lambda x}) \, dx $$
Using integration by parts twice, or by recognizing this as the second moment of the Gamma distribution (with parameters $\alpha=2, \beta=1/\lambda$), we get $E(X^2) = \frac{2!}{(1/\lambda)^2} = 2\lambda^2$. (Alternatively, perform the integration).

$$ Var(X) = E(X^2) - [E(X)]^2 = 2\lambda^2 - \left(\frac{1}{\lambda}\right)^2 $$
Wait, there's an error here. The PDF for Exponential distribution is $f(x) = \lambda e^{-\lambda x}$. The formula for moments of Gamma distribution $Gamma(k, \theta)$ is $E(X^n) = \frac{\Gamma(k+n)}{\Gamma(k)\theta^n}$.
For $f(x) = \frac{1}{\Gamma(k)\theta^k} x^{k-1} e^{-x/\theta}$, the $n^{th}$ moment is $E(X^n) = \frac{\Gamma(k+n)}{\Gamma(k)\theta^n}$.
For the exponential distribution $f(x) = \lambda e^{-\lambda x}$, we can write it as $f(x) = \frac{1}{\Gamma(1)\lambda^{-1}} x^{1-1} e^{-x/\lambda^{-1}} = \frac{1}{\lambda} e^{-x/\lambda}$. No, this is not correct.
The standard form of Exponential PDF is $f(x; \lambda) = \lambda e^{-\lambda x}$ for $x \ge 0$.
Here, $E(X) = 1/\lambda$.

Let's recalculate $E(X^2)$:
$$ E(X^2) = \int_{0}^{\infty} x^2 (\lambda e^{-\lambda x}) \, dx $$
Let $u = \lambda x$, so $x = u/\lambda$ and $dx = du/\lambda$.
$$ E(X^2) = \int_{0}^{\infty} \left(\frac{u}{\lambda}\right)^2 (\lambda e^{-u}) \frac{du}{\lambda} = \int_{0}^{\infty} \frac{u^2}{\lambda^2} e^{-u} \, du $$
$$ E(X^2) = \frac{1}{\lambda^2} \int_{0}^{\infty} u^2 e^{-u} \, du $$
The integral $\int_{0}^{\infty} u^2 e^{-u} \, du$ is the Gamma function $\Gamma(3) = 2! = 2$.
$$ E(X^2) = \frac{1}{\lambda^2} (2) = \frac{2}{\lambda^2} $$

Now, calculate the variance:
$$ Var(X) = E(X^2) - [E(X)]^2 = \frac{2}{\lambda^2} - \left(\frac{1}{\lambda}\right)^2 = \frac{2}{\lambda^2} - \frac{1}{\lambda^2} = \frac{1}{\lambda^2} $$
The standard deviation is $\sigma_X = \sqrt{\frac{1}{\lambda^2}} = \frac{1}{\lambda}$.
For the exponential distribution, the mean and standard deviation are equal ($1/\lambda$).

**Example 7: Variance of the Uniform Distribution**
For $X \sim U(a, b)$, $f(x) = \frac{1}{b-a}$ for $a \le x \le b$. We found $E(X) = \frac{a+b}{2}$.
Now let's find $E(X^2)$:
$$ E(X^2) = \int_{a}^{b} x^2 \left(\frac{1}{b-a}\right) \, dx = \frac{1}{b-a} \left[\frac{x^3}{3}\right]_{a}^{b} $$
$$ E(X^2) = \frac{1}{b-a} \left(\frac{b^3}{3} - \frac{a^3}{3}\right) = \frac{1}{3(b-a)} (b^3 - a^3) $$
$$ E(X^2) = \frac{(b-a)(b^2 + ab + a^2)}{3(b-a)} = \frac{a^2 + ab + b^2}{3} $$

Now, calculate the variance:
$$ Var(X) = E(X^2) - [E(X)]^2 = \frac{a^2 + ab + b^2}{3} - \left(\frac{a+b}{2}\right)^2 $$
$$ Var(X) = \frac{a^2 + ab + b^2}{3} - \frac{a^2 + 2ab + b^2}{4} $$
$$ Var(X) = \frac{4(a^2 + ab + b^2) - 3(a^2 + 2ab + b^2)}{12} $$
$$ Var(X) = \frac{4a^2 + 4ab + 4b^2 - 3a^2 - 6ab - 3b^2}{12} $$
$$ Var(X) = \frac{a^2 - 2ab + b^2}{12} = \frac{(b-a)^2}{12} $$
The standard deviation is $\sigma_X = \sqrt{\frac{(b-a)^2}{12}} = \frac{b-a}{\sqrt{12}} = \frac{b-a}{2\sqrt{3}}$.

#### 5. Properties of Variance

Let $X$ be a continuous random variable, and let $a$ and $b$ be constants.

*   **Variance of a Constant:** $Var(a) = 0$
    *   *Proof:* If $X=a$, then $X-E(X) = a-a = 0$. So $E[(X-E(X))^2] = E(0) = 0$.
*   **Variance of a Scaled Variable:** $Var(aX) = a^2 Var(X)$
    *   *Proof:*
        $$ Var(aX) = E[(aX - E(aX))^2] = E[(aX - aE(X))^2] $$
        $$ Var(aX) = E[a^2 (X - E(X))^2] = a^2 E[(X - E(X))^2] = a^2 Var(X) $$
*   **Variance of a Shifted Variable:** $Var(X + b) = Var(X)$
    *   *Proof:*
        $$ Var(X + b) = E[((X + b) - E(X + b))^2] = E[((X + b) - (E(X) + b))^2] $$
        $$ Var(X + b) = E[(X - E(X))^2] = Var(X) $$
*   **Variance of a Scaled and Shifted Variable:** $Var(aX + b) = a^2 Var(X)$
    *   This is a direct consequence of the previous two properties.
*   **Variance of a Sum/Difference of Independent Variables:** If $X$ and $Y$ are independent, then $Var(X \pm Y) = Var(X) + Var(Y)$.
    *   *Note:* This property *only* holds for independent variables.

**Reference:**
*   **Devore (9th ed.):** Chapter 4, Section 4.2 - Properties of Variance.
*   **Veerarajan (3rd ed.):** Chapter 7, Section 7.4 - Properties of Variance.
*   **Ross (6th ed.):** Chapter 4, Section 4.3 - Properties of Variance.

**Example 8: Variance in Noise Modeling**
In electrical circuits, noise can often be modeled as a random voltage $N$. If the noise is additive and independent of the signal $S$, the total voltage is $V = S + N$. The variance of the total voltage is $Var(V) = Var(S+N) = Var(S) + Var(N)$, assuming $S$ and $N$ are independent. This means the total noise power (proportional to variance) is the sum of the signal noise power and the external noise power.

**Example 9: Variance in Signal Amplification**
If a signal $X$ is amplified by a factor $a$, the new signal is $aX$. The variance of the amplified signal is $Var(aX) = a^2 Var(X)$. This shows that amplification increases the spread (and thus the noise power relative to the mean) by the square of the amplification factor.

---

### Relevance to Electrical Science (CO2, CO4)

*   **Signal Analysis:** Expectation and variance are fundamental in characterizing random signals. The expected value can represent the DC component or average power of a signal. The variance quantifies the AC component or fluctuations around the mean.
*   **System Performance:** In communication systems, the signal-to-noise ratio (SNR) is often related to the ratio of the square of the expected signal amplitude to the variance of the noise.
*   **Reliability Engineering:** For components with random failure times (e.g., exponential distribution), the expected lifetime and the variance of the lifetime are crucial parameters for assessing reliability.
*   **Stochastic Processes:** Understanding the expectation and variance of individual random variables is a prerequisite for studying more complex random processes, which are used to model time-varying phenomena in electrical systems.
*   **Error Analysis:** When measurements are subject to random errors, the expected value of the error is often assumed to be zero, and the variance quantifies the precision of the measurement.

---

### Practice Questions/Exercises

**Question 1:**
A continuous random variable $X$ has the PDF $f(x) = 3x^2$ for $0 \le x \le 1$, and $f(x) = 0$ otherwise.
(a) Calculate the expected value of $X$, $E(X)$.
(b) Calculate the variance of $X$, $Var(X)$.
(c) Calculate the standard deviation of $X$, $\sigma_X$.
(d) Calculate $E(X^3)$.

**Question 2:**
Let $X$ be a random variable representing the time to failure of a certain electronic component, following an exponential distribution with a mean lifetime of 1000 hours.
(a) What is the parameter $\lambda$ for this distribution?
(b) What is the expected time to failure $E(X)$?
(c) What is the variance of the time to failure $Var(X)$?
(d) If a batch of these components is used, what is the expected total operating time for 10 such components used independently?

**Question 3:**
Consider a random variable $Y = 2X + 5$, where $X$ is a random variable with $E(X) = 10$ and $Var(X) = 4$.
(a) Calculate $E(Y)$.
(b) Calculate $Var(Y)$.

**Question 4:**
A signal voltage is given by $V = A \cos(\omega t)$, where $A$ is a random variable with $E(A) = 5$ and $Var(A) = 1$. $\omega$ and $t$ are constants.
(a) What is the expected value of the voltage, $E(V)$?
(b) What is the variance of the voltage, $Var(V)$?

---

### Answers to Practice Questions

**Answer 1:**
(a) $E(X) = \int_{0}^{1} x (3x^2) \, dx = \int_{0}^{1} 3x^3 \, dx = \left[\frac{3x^4}{4}\right]_{0}^{1} = \frac{3}{4}$
(b) First, find $E(X^2)$: $E(X^2) = \int_{0}^{1} x^2 (3x^2) \, dx = \int_{0}^{1} 3x^4 \, dx = \left[\frac{3x^5}{5}\right]_{0}^{1} = \frac{3}{5}$.
    $Var(X) = E(X^2) - [E(X)]^2 = \frac{3}{5} - \left(\frac{3}{4}\right)^2 = \frac{3}{5} - \frac{9}{16} = \frac{48 - 45}{80} = \frac{3}{80}$.
(c) $\sigma_X = \sqrt{Var(X)} = \sqrt{\frac{3}{80}} = \frac{\sqrt{3}}{4\sqrt{5}} = \frac{\sqrt{15}}{20}$.
(d) $E(X^3) = \int_{0}^{1} x^3 (3x^2) \, dx = \int_{0}^{1} 3x^5 \, dx = \left[\frac{3x^6}{6}\right]_{0}^{1} = \frac{3}{6} = \frac{1}{2}$.

**Answer 2:**
(a) For an exponential distribution, the mean is $E(X) = 1/\lambda$. Given $E(X) = 1000$ hours, we have $1/\lambda = 1000$, so $\lambda = 1/1000 = 0.001$.
(b) $E(X) = 1000$ hours (given as the mean lifetime).
(c) For an exponential distribution, $Var(X) = 1/\lambda^2$. So, $Var(X) = (1000)^2 = 1,000,000$ hours$^2$.
(d) Let $X_1, X_2, \dots, X_{10}$ be the lifetimes of the 10 components. The total operating time is $T = X_1 + X_2 + \dots + X_{10}$.
    Using the linearity of expectation, $E(T) = E(X_1) + E(X_2) + \dots + E(X_{10})$. Since each component has an expected lifetime of 1000 hours, $E(T) = 10 \times 1000 = 10,000$ hours.

**Answer 3:**
(a) $E(Y) = E(2X + 5) = 2E(X) + 5 = 2(10) + 5 = 20 + 5 = 25$.
(b) $Var(Y) = Var(2X + 5) = 2^2 Var(X) = 4 \times 4 = 16$.

**Answer 4:**
(a) $E(V) = E(A \cos(\omega t))$. Since $\omega$ and $t$ are constants, $\cos(\omega t)$ is a constant.
    $E(V) = \cos(\omega t) E(A) = \cos(\omega t) \times 5 = 5 \cos(\omega t)$.
(b) $Var(V) = Var(A \cos(\omega t))$. Since $\cos(\omega t)$ is a constant, $Var(V) = (\cos(\omega t))^2 Var(A) = \cos^2(\omega t) \times 1 = \cos^2(\omega t)$.

---

### Important Points to Remember

*   The **expectation** is the mean or average value of a random variable.
*   The formula for expectation of a continuous random variable involves an integral: $E(X) = \int_{-\infty}^{\infty} x f(x) \, dx$.
*   **LOTUS** (Law of the Unconscious Statistician) allows us to calculate $E(g(X))$ directly: $E(g(X)) = \int_{-\infty}^{\infty} g(x) f(x) \, dx$.
*   **Linearity of Expectation** ($E(aX + b) = aE(X) + b$) is a powerful tool for simplifying calculations.
*   **Variance** measures the spread or dispersion of a random variable around its mean.
*   The **computational formula** $Var(X) = E(X^2) - [E(X)]^2$ is often easier to use than the definition.
*   The **standard deviation** ($\sigma_X = \sqrt{Var(X)}$) is the square root of the variance and is in the same units as the random variable.
*   Key variance properties: $Var(a) = 0$, $Var(aX) = a^2 Var(X)$, $Var(X + b) = Var(X)$.
*   For **independent** random variables $X$ and $Y$: $E(XY) = E(X)E(Y)$ and $Var(X \pm Y) = Var(X) + Var(Y)$.
*   Expectation and variance are crucial for understanding signal characteristics, system performance, and reliability in electrical engineering.

---
