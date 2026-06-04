---
title: "Continuous random variables and their probability distributions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d9d"
status: "completed"
scrapedAt: "2026-05-23T16:16:52.816Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Continuous Random Variables and Their Probability Distributions

---

### **1. Introduction to Continuous Random Variables**

*   **Definition:** A random variable $X$ is called a **continuous random variable** if its possible values are all the numbers in some interval or intervals of the real line.
    *   *Example:* The time it takes for a transistor to fail, the voltage level of a signal, the temperature of a component. These values can take on any value within a given range.
    *   *(Devore, 9th ed., Ch. 3)*
    *   *(Veerarajan, 3rd ed., Ch. 8)*

*   **Contrast with Discrete Random Variables:** Unlike discrete random variables, which can only take on a countable number of values (e.g., number of defects), continuous random variables can take on an uncountable infinity of values.

---

### **2. Probability Density Function (PDF)**

*   **Definition:** For a continuous random variable $X$, the **probability density function (PDF)**, denoted by $f(x)$, is a function that describes the relative likelihood for $X$ to take on a given value.
    *   The PDF must satisfy the following conditions:
        1.  $f(x) \ge 0$ for all $x$.
        2.  $\int_{-\infty}^{\infty} f(x) dx = 1$.
    *   *(Devore, 9th ed., Ch. 3)*
    *   *(Veerarajan, 3rd ed., Ch. 8)*
    *   *(Ross, 6th ed., Ch. 4)*

*   **Interpretation of PDF:** The PDF itself is NOT a probability. Instead, the **probability that $X$ lies in a certain interval $[a, b]$ is given by the integral of the PDF over that interval:**
    $$P(a \le X \le b) = \int_{a}^{b} f(x) dx$$
    *   This means the probability of $X$ taking on any *specific* value is zero: $P(X=x) = \int_{x}^{x} f(t) dt = 0$. This is a crucial difference from discrete random variables.
    *   *(Devore, 9th ed., Ch. 3)*

*   **Cumulative Distribution Function (CDF):** The **cumulative distribution function (CDF)**, denoted by $F(x)$, gives the probability that $X$ is less than or equal to a specific value $x$.
    $$F(x) = P(X \le x) = \int_{-\infty}^{x} f(t) dt$$
    *   **Properties of CDF:**
        1.  $0 \le F(x) \le 1$ for all $x$.
        2.  $F(x)$ is non-decreasing.
        3.  $\lim_{x \to -\infty} F(x) = 0$.
        4.  $\lim_{x \to \infty} F(x) = 1$.
        5.  $P(a < X \le b) = F(b) - F(a)$.
    *   The PDF can be obtained from the CDF by differentiation: $f(x) = \frac{d}{dx} F(x)$.
    *   *(Devore, 9th ed., Ch. 3)*
    *   *(Veerarajan, 3rd ed., Ch. 8)*
    *   *(Papoulis & Pillai, 4th ed., Ch. 4)*

---

### **3. Properties of Continuous Random Variables**

*   **Expected Value (Mean):** The expected value of a continuous random variable $X$ with PDF $f(x)$ is given by:
    $$E[X] = \mu_X = \int_{-\infty}^{\infty} x f(x) dx$$
    *   *(Devore, 9th ed., Ch. 3)*
    *   *(Veerarajan, 3rd ed., Ch. 8)*
    *   *(Ross, 6th ed., Ch. 4)*

*   **Variance:** The variance of $X$ measures the spread of the distribution:
    $$Var(X) = \sigma_X^2 = E[(X - \mu_X)^2] = \int_{-\infty}^{\infty} (x - \mu_X)^2 f(x) dx$$
    *   An alternative formula is $Var(X) = E[X^2] - (E[X])^2$, where $E[X^2] = \int_{-\infty}^{\infty} x^2 f(x) dx$.
    *   The standard deviation is $\sigma_X = \sqrt{Var(X)}$.
    *   *(Devore, 9th ed., Ch. 3)*
    *   *(Veerarajan, 3rd ed., Ch. 8)*
    *   *(Palaniammal, 3rd ed., Ch. 6)*

*   **Expected Value of a Function of a Random Variable:** For a function $g(X)$, its expected value is:
    $$E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) dx$$
    *   This is the **Law of the Unconscious Statistician**.
    *   *(Devore, 9th ed., Ch. 3)*

---

### **4. Important Continuous Probability Distributions**

This section covers essential models for continuous random variables that are widely used in electrical science.

#### **4.1 Uniform Distribution**

*   **Description:** The uniform distribution describes a situation where all values in a given interval are equally likely.
*   **PDF:**
    $$f(x) = \begin{cases} \frac{1}{b-a} & \text{if } a \le x \le b \\ 0 & \text{otherwise} \end{cases}$$
    *   Where $[a, b]$ is the interval of possible values.
    *   *(Devore, 9th ed., Ch. 3)*
    *   *(Veerarajan, 3rd ed., Ch. 8)*

*   **Expected Value:** $E[X] = \frac{a+b}{2}$
*   **Variance:** $Var(X) = \frac{(b-a)^2}{12}$
*   **Example:** The arrival time of a signal within a specific time slot (e.g., between 10:00 AM and 10:01 AM) can be modeled as a uniform distribution.
*   **Practice Question:** A sensor output is uniformly distributed between 0 and 5 volts. What is the probability that the output is between 1 and 3 volts?
    *   **Answer:** $f(x) = \frac{1}{5-0} = \frac{1}{5}$ for $0 \le x \le 5$.
        $P(1 \le X \le 3) = \int_{1}^{3} \frac{1}{5} dx = \frac{1}{5} [x]_{1}^{3} = \frac{1}{5}(3-1) = \frac{2}{5} = 0.4$.

#### **4.2 Exponential Distribution**

*   **Description:** The exponential distribution is commonly used to model the time until an event occurs in a Poisson process (events occurring at a constant average rate). It is memoryless.
*   **PDF:**
    $$f(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{otherwise} \end{cases}$$
    *   Where $\lambda > 0$ is the rate parameter.
    *   *(Devore, 9th ed., Ch. 3)*
    *   *(Veerarajan, 3rd ed., Ch. 8)*
    *   *(Ross, 6th ed., Ch. 4)*
    *   *(Anderson, Benedek, 1st ed., Ch. 7)*

*   **Expected Value:** $E[X] = \frac{1}{\lambda}$
*   **Variance:** $Var(X) = \frac{1}{\lambda^2}$
*   **CDF:** $F(x) = 1 - e^{-\lambda x}$ for $x \ge 0$.
*   **Memoryless Property:** $P(X > s+t | X > s) = P(X > t)$. This means the probability of the event occurring after time $s+t$, given it hasn't occurred by time $s$, is the same as the probability of it occurring after time $t$.
*   **Example:** The lifetime of electronic components (like vacuum tubes or transistors, under certain assumptions), the time between calls to a service center, or the time between occurrences of a specific fault in a system.
*   **Practice Question:** The time (in hours) between successive arrivals of packets at a router is exponentially distributed with a rate parameter $\lambda = 0.5$ packets per hour. What is the probability that the time between arrivals is more than 3 hours?
    *   **Answer:** $P(X > 3) = \int_{3}^{\infty} 0.5 e^{-0.5 x} dx = [-e^{-0.5 x}]_{3}^{\infty} = 0 - (-e^{-0.5 \times 3}) = e^{-1.5} \approx 0.223$.
    *   Alternatively, using the CDF: $P(X > 3) = 1 - F(3) = 1 - (1 - e^{-0.5 \times 3}) = e^{-1.5} \approx 0.223$.

#### **4.3 Normal Distribution (Gaussian Distribution)**

*   **Description:** The normal distribution is perhaps the most important continuous distribution in statistics and science. It is characterized by its bell-shaped curve and is often used to model phenomena that are the result of many small, independent random factors. The Central Limit Theorem is key to its widespread use.
*   **PDF:**
    $$f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2} \left(\frac{x-\mu}{\sigma}\right)^2}, \quad -\infty < x < \infty$$
    *   Where $\mu$ is the mean and $\sigma > 0$ is the standard deviation.
    *   *(Devore, 9th ed., Ch. 3)*
    *   *(Veerarajan, 3rd ed., Ch. 8)*
    *   *(Ross, 6th ed., Ch. 4)*
    *   *(Papoulis & Pillai, 4th ed., Ch. 5)*
    *   *(Anderson, Benedek, 1st ed., Ch. 7)*

*   **Expected Value:** $E[X] = \mu$
*   **Variance:** $Var(X) = \sigma^2$
*   **Standard Normal Variable:** A normal random variable with $\mu=0$ and $\sigma=1$ is called a **standard normal random variable**, denoted by $Z$. Its PDF is $\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2} z^2}$.
*   **Standardization:** Any normal random variable $X$ with mean $\mu$ and standard deviation $\sigma$ can be transformed into a standard normal variable $Z$ using the formula:
    $$Z = \frac{X - \mu}{\sigma}$$
    *   This transformation allows us to use standard normal tables (Z-tables) to find probabilities for any normal distribution.
    *   *(Devore, 9th ed., Ch. 3)*

*   **Example:** The distribution of measurement errors, the distribution of voltages in a noisy circuit, the height of manufactured components.
*   **Practice Question:** The output voltage of a power supply is normally distributed with a mean of 12.0 V and a standard deviation of 0.1 V. What is the probability that the output voltage is between 11.9 V and 12.1 V?
    *   **Answer:** We need to find $P(11.9 \le X \le 12.1)$.
        First, standardize the values:
        $z_1 = \frac{11.9 - 12.0}{0.1} = \frac{-0.1}{0.1} = -1.0$
        $z_2 = \frac{12.1 - 12.0}{0.1} = \frac{0.1}{0.1} = 1.0$
        So, we need to find $P(-1.0 \le Z \le 1.0) = F(1.0) - F(-1.0)$.
        Using a standard normal table, $F(1.0) \approx 0.8413$ and $F(-1.0) \approx 0.1587$.
        $P(-1.0 \le Z \le 1.0) \approx 0.8413 - 0.1587 = 0.6826$.
        This is consistent with the empirical rule (68-95-99.7 rule), which states that approximately 68% of the data falls within one standard deviation of the mean.

#### **4.4 Gamma Distribution**

*   **Description:** The gamma distribution is a flexible, continuous probability distribution that is often used to model waiting times or the sum of several exponentially distributed random variables. It's particularly useful for modeling phenomena that have a skewed distribution.
*   **PDF:**
    $$f(x; \alpha, \beta) = \begin{cases} \frac{\beta^\alpha x^{\alpha-1} e^{-\beta x}}{\Gamma(\alpha)} & \text{if } x > 0 \\ 0 & \text{otherwise} \end{cases}$$
    *   Where $\alpha > 0$ is the shape parameter and $\beta > 0$ is the rate parameter.
    *   $\Gamma(\alpha)$ is the Gamma function, defined as $\Gamma(\alpha) = \int_{0}^{\infty} t^{\alpha-1} e^{-t} dt$. For integer $\alpha$, $\Gamma(\alpha) = (\alpha-1)!$.
    *   *(Devore, 9th ed., Ch. 3)*
    *   *(Veerarajan, 3rd ed., Ch. 8)*
    *   *(Ross, 6th ed., Ch. 4)*

*   **Expected Value:** $E[X] = \frac{\alpha}{\beta}$
*   **Variance:** $Var(X) = \frac{\alpha}{\beta^2}$
*   **Special Cases:**
    *   If $\alpha = 1$, the gamma distribution is the **exponential distribution** with rate parameter $\beta$.
    *   If $\alpha = k/2$ and $\beta = 1/2$, it's the **chi-squared distribution** with $k$ degrees of freedom.

*   **Example:** Modeling the lifetime of systems with multiple components where failures can occur in sequence, modeling the arrival times of customers at a service point if the rate of arrivals changes over time in a specific way. In electrical engineering, it can be used to model the distribution of the sum of several independent random variables, each exponentially distributed, such as the total time to complete a series of tasks.
*   **Practice Question:** Suppose the time to failure of a certain electronic component is modeled by a Gamma distribution with shape parameter $\alpha = 2$ and rate parameter $\beta = 0.1$ per hour. Calculate the mean time to failure and the variance.
    *   **Answer:**
        Mean: $E[X] = \frac{\alpha}{\beta} = \frac{2}{0.1} = 20$ hours.
        Variance: $Var(X) = \frac{\alpha}{\beta^2} = \frac{2}{(0.1)^2} = \frac{2}{0.01} = 200$ hours$^2$.

#### **4.5 Beta Distribution**

*   **Description:** The beta distribution is defined on the interval $[0, 1]$ and is often used to model probabilities or proportions. Its shape can vary widely depending on its two shape parameters.
*   **PDF:**
    $$f(x; \alpha, \beta) = \begin{cases} \frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)} x^{\alpha-1} (1-x)^{\beta-1} & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$$
    *   Where $\alpha > 0$ and $\beta > 0$ are the shape parameters.
    *   *(Devore, 9th ed., Ch. 3)*
    *   *(Veerarajan, 3rd ed., Ch. 8)*

*   **Expected Value:** $E[X] = \frac{\alpha}{\alpha+\beta}$
*   **Variance:** $Var(X) = \frac{\alpha\beta}{(\alpha+\beta)^2 (\alpha+\beta+1)}$

*   **Example:** Modeling the probability of success in a Bernoulli trial when the probability itself is uncertain, modeling the proportion of time a system is operational, or modeling the signal-to-noise ratio within a certain range.
*   **Practice Question:** A communication channel has a bit error rate (BER) which is unknown. It's assumed to be a random variable following a Beta distribution with parameters $\alpha=1$ and $\beta=5$. What is the expected BER?
    *   **Answer:** $E[X] = \frac{\alpha}{\alpha+\beta} = \frac{1}{1+5} = \frac{1}{6}$.

---

### **5. Jointly Distributed Continuous Random Variables**

*   **Definition:** Two or more continuous random variables can be described by their joint probability distribution.
*   **Joint PDF:** For two continuous random variables $X$ and $Y$, the joint PDF $f(x,y)$ must satisfy:
    1.  $f(x,y) \ge 0$ for all $x, y$.
    2.  $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x,y) dx dy = 1$.
*   **Probabilities:** $P((X,Y) \in A) = \iint_{A} f(x,y) dx dy$ for any region $A$ in the $xy$-plane.
*   **Marginal PDFs:** The PDFs of individual variables $X$ and $Y$ are called marginal PDFs:
    *   $f_X(x) = \int_{-\infty}^{\infty} f(x,y) dy$
    *   $f_Y(y) = \int_{-\infty}^{\infty} f(x,y) dx$
*   **Conditional PDF:** The PDF of $X$ given $Y=y$ is $f_{X|Y}(x|y) = \frac{f(x,y)}{f_Y(y)}$, provided $f_Y(y) > 0$.
*   **Independence:** $X$ and $Y$ are independent if $f(x,y) = f_X(x) f_Y(y)$ for all $x, y$.
*   **Covariance and Correlation:** These concepts extend to continuous random variables to measure the linear relationship between them.
    *   $Cov(X, Y) = E[(X - \mu_X)(Y - \mu_Y)] = E[XY] - \mu_X \mu_Y$
    *   $\rho_{XY} = \frac{Cov(X, Y)}{\sigma_X \sigma_Y}$
*   *(Devore, 9th ed., Ch. 5)*
*   *(Veerarajan, 3rd ed., Ch. 9)*
*   *(Ross, 6th ed., Ch. 5)*

---

### **6. Approximations using Normal Distribution**

*   **Central Limit Theorem (CLT):** The CLT states that the sum (or average) of a large number of independent and identically distributed random variables, each with finite mean and variance, will be approximately normally distributed, regardless of the original distribution of the individual variables.
    *   This is crucial in electrical science as many physical phenomena can be thought of as the sum of many small random effects (e.g., noise).
    *   *(Devore, 9th ed., Ch. 6)*
    *   *(Veerarajan, 3rd ed., Ch. 7)*
    *   *(Ross, 6th ed., Ch. 6)*

*   **Approximation of Binomial Distribution:** For large $n$, a binomial distribution $B(n,p)$ can be approximated by a normal distribution with mean $\mu = np$ and variance $\sigma^2 = np(1-p)$. A continuity correction is often used for better accuracy.
    *   *(Devore, 9th ed., Ch. 5)*

*   **Approximation of Poisson Distribution:** For large $\lambda$, a Poisson distribution $P(\lambda)$ can be approximated by a normal distribution with mean $\mu = \lambda$ and variance $\sigma^2 = \lambda$.
    *   *(Devore, 9th ed., Ch. 5)*

---

### **7. Relation to Course Outcomes**

*   **CO2: Understand the concept, properties and important models of continuous random variables and to apply in suitable random phenomena. (Knowledge Level: K3)**
    *   This entire module directly addresses CO2. We have defined continuous random variables, their PDFs, CDFs, expected values, and variances. We have explored key models like uniform, exponential, normal, gamma, and beta distributions and discussed their properties and applications in electrical science contexts.

---

### **8. Important Points to Remember**

*   **Probabilities are Areas:** For continuous random variables, probabilities are calculated as areas under the PDF curve (integrals). The probability of any single value is zero.
*   **PDF vs. CDF:** The PDF ($f(x)$) describes relative likelihood, while the CDF ($F(x)$) gives cumulative probability ($P(X \le x)$). $f(x) = F'(x)$ and $F(x) = \int_{-\infty}^x f(t) dt$.
*   **Memoryless Property:** The exponential distribution is memoryless, meaning the past history of the random process does not affect future probabilities.
*   **Normal Distribution Dominance:** The normal distribution's prevalence is due to the Central Limit Theorem, making it a fundamental tool for modeling aggregate effects.
*   **Parameter Interpretation:** Understand what the parameters (e.g., $\lambda$ for exponential, $\mu$ and $\sigma$ for normal, $\alpha$ and $\beta$ for gamma/beta) represent in the context of electrical phenomena.

---

### **9. Practice Questions**

1.  **Uniform Distribution:** The time to process a data packet in a network router is uniformly distributed between 5 milliseconds and 20 milliseconds.
    *   (a) What is the PDF of the processing time?
    *   (b) What is the probability that a packet is processed in less than 10 milliseconds?
    *   (c) What is the expected processing time?

2.  **Exponential Distribution:** The time between signal interruptions in a communication link follows an exponential distribution with a mean of 100 seconds.
    *   (a) What is the rate parameter $\lambda$?
    *   (b) What is the probability that the next interruption occurs within 50 seconds?
    *   (c) What is the probability that there are no interruptions in a 200-second interval, given that there was no interruption in the first 100 seconds?

3.  **Normal Distribution:** The noise voltage in a circuit has a normal distribution with a mean of 0 volts and a standard deviation of 0.5 millivolts.
    *   (a) What is the probability that the noise voltage exceeds 0.75 millivolts?
    *   (b) What is the probability that the absolute value of the noise voltage is less than 0.25 millivolts?

4.  **Gamma Distribution:** The time taken to assemble a complex electronic circuit is modeled by a Gamma distribution with shape $\alpha=3$ and rate $\beta=0.2$ per hour.
    *   (a) Calculate the mean and variance of the assembly time.
    *   (b) What is the probability that the assembly takes more than 20 hours? (Hint: If $\alpha$ is an integer, the Gamma CDF can be related to the Poisson sum).

---

### **Answers to Practice Questions**

1.  **Uniform Distribution:**
    *   (a) $f(x) = \frac{1}{20-5} = \frac{1}{15}$ for $5 \le x \le 20$, and 0 otherwise.
    *   (b) $P(5 \le X < 10) = \int_{5}^{10} \frac{1}{15} dx = \frac{1}{15}[x]_{5}^{10} = \frac{1}{15}(10-5) = \frac{5}{15} = \frac{1}{3} \approx 0.333$.
    *   (c) $E[X] = \frac{5+20}{2} = \frac{25}{2} = 12.5$ milliseconds.

2.  **Exponential Distribution:**
    *   (a) Mean $E[X] = \frac{1}{\lambda} = 100$ seconds, so $\lambda = \frac{1}{100} = 0.01$ per second.
    *   (b) $P(X < 50) = 1 - e^{-\lambda \times 50} = 1 - e^{-0.01 \times 50} = 1 - e^{-0.5} \approx 1 - 0.6065 = 0.3935$.
    *   (c) Due to the memoryless property, $P(X > 200 | X > 100) = P(X > 100) = e^{-0.01 \times 100} = e^{-1} \approx 0.3679$.

3.  **Normal Distribution:** $X \sim N(\mu=0, \sigma=0.5 \text{ mV})$.
    *   (a) $P(X > 0.75) = P\left(Z > \frac{0.75 - 0}{0.5}\right) = P(Z > 1.5)$. Using Z-table, $P(Z > 1.5) = 1 - P(Z \le 1.5) = 1 - 0.9332 = 0.0668$.
    *   (b) $P(|X| < 0.25) = P(-0.25 < X < 0.25) = P\left(\frac{-0.25 - 0}{0.5} < Z < \frac{0.25 - 0}{0.5}\right) = P(-0.5 < Z < 0.5)$.
        $P(-0.5 < Z < 0.5) = P(Z < 0.5) - P(Z < -0.5) = 0.6915 - 0.3085 = 0.3830$.

4.  **Gamma Distribution:** $\alpha=3$, $\beta=0.2$ per hour.
    *   (a) Mean: $E[X] = \frac{\alpha}{\beta} = \frac{3}{0.2} = 15$ hours.
        Variance: $Var(X) = \frac{\alpha}{\beta^2} = \frac{3}{(0.2)^2} = \frac{3}{0.04} = 75$ hours$^2$.
    *   (b) For integer $\alpha$, $P(X > x) = \sum_{k=0}^{\alpha-1} \frac{e^{-\beta x}(\beta x)^k}{k!}$.
        Here $\alpha=3$, $\beta=0.2$, $x=20$. $\beta x = 0.2 \times 20 = 4$.
        $P(X > 20) = \sum_{k=0}^{2} \frac{e^{-4}(4)^k}{k!} = \frac{e^{-4}(4^0)}{0!} + \frac{e^{-4}(4^1)}{1!} + \frac{e^{-4}(4^2)}{2!}$
        $P(X > 20) = e^{-4} (1 + 4 + \frac{16}{2}) = e^{-4} (1 + 4 + 8) = 13 e^{-4}$.
        $e^{-4} \approx 0.0183$.
        $P(X > 20) \approx 13 \times 0.0183 \approx 0.238$.

---
This concludes Module 2 on Continuous Random Variables and Their Probability Distributions.
