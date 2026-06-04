---
title: "Cumulative distribution function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4b5"
status: "completed"
scrapedAt: "2026-05-23T17:50:33.869Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4
## Module 1: Random Variables
## Topic: Cumulative Distribution Function (CDF)

---

### 1. Introduction to Random Variables and the Need for CDF

**What is a Random Variable?**

A random variable (RV) is a function that assigns a real numerical value to each outcome in the sample space of a random experiment. It quantifies the uncertainty associated with random events.

**Why do we need CDF?**

While the probability mass function (PMF) for discrete RVs and the probability density function (PDF) for continuous RVs describe the likelihood of specific values or ranges of values, they don't directly answer questions like:
*   "What is the probability that the random variable takes a value *less than or equal to* a specific value?"

The Cumulative Distribution Function (CDF) provides this essential information and offers a unified way to describe the probability distribution of *both* discrete and continuous random variables.

---

### 2. Definition of the Cumulative Distribution Function (CDF)

Let $X$ be a random variable. The **cumulative distribution function (CDF)** of $X$, denoted by $F_X(x)$, is defined as:

$F_X(x) = P(X \le x)$

where:
*   $x$ is any real number.
*   $P(X \le x)$ is the probability that the random variable $X$ takes on a value less than or equal to $x$.

**Key Insight:** The CDF answers the question: "What is the probability that the random variable's value is at most $x$?"

---

### 3. Properties of the Cumulative Distribution Function (CDF)

The CDF, $F_X(x)$, of any random variable $X$ must satisfy the following properties:

1.  **Non-decreasing:** For any $x_1$ and $x_2$ such that $x_1 < x_2$, $F_X(x_1) \le F_X(x_2)$.
    *   **Explanation:** As the value of $x$ increases, the probability of $X$ being less than or equal to $x$ can only stay the same or increase. It cannot decrease.
    *   **Textbook Reference:** Devore (9th ed.), p. 68; Veerarajan (3rd ed.), p. 52.

2.  **Limits at $-\infty$ and $+\infty$:**
    *   $\lim_{x \to -\infty} F_X(x) = 0$
    *   $\lim_{x \to +\infty} F_X(x) = 1$
    *   **Explanation:**
        *   As $x$ approaches negative infinity, the probability of $X$ being less than or equal to $x$ becomes zero (it's impossible for $X$ to be less than $-\infty$).
        *   As $x$ approaches positive infinity, the probability of $X$ being less than or equal to $x$ becomes one (it's certain that $X$ will take some value as $x$ becomes infinitely large).
    *   **Textbook Reference:** Devore (9th ed.), p. 68; Veerarajan (3rd ed.), p. 52.

3.  **Right-continuity:** For any real number $a$, $\lim_{x \to a^+} F_X(x) = F_X(a)$.
    *   **Explanation:** The CDF is continuous from the right. This is particularly important for discrete random variables, where the CDF has jumps. The value of the CDF at a specific point $a$ is the value *after* the jump at $a$.
    *   **Textbook Reference:** Papoulis & Pillai (4th ed.), p. 35.

4.  **Probability of a specific value (for discrete RVs):** For a discrete random variable $X$ taking values $x_1, x_2, \dots$, the probability of $X$ taking a specific value $a$ is given by the jump size of the CDF at $a$:
    $P(X = a) = F_X(a) - \lim_{x \to a^-} F_X(x)$
    *   **Explanation:** The probability of $X$ being exactly equal to $a$ is the difference between the CDF value just after $a$ and the CDF value just before $a$.
    *   **Textbook Reference:** Veerarajan (3rd ed.), p. 53.

5.  **Probability of an interval:** For any real numbers $a$ and $b$ such that $a < b$:
    $P(a < X \le b) = F_X(b) - F_X(a)$
    *   **Explanation:** This is a crucial property. The probability that $X$ falls into the interval $(a, b]$ is the CDF value at the upper bound minus the CDF value at the lower bound.
    *   **Textbook Reference:** Devore (9th ed.), p. 68; Veerarajan (3rd ed.), p. 52.

---

### 4. CDF for Discrete Random Variables

For a discrete random variable $X$ with PMF $p_X(x) = P(X=x)$, the CDF is calculated by summing the probabilities of all values less than or equal to $x$.

$F_X(x) = P(X \le x) = \sum_{t \le x} p_X(t)$

**Characteristics of CDF for Discrete RVs:**
*   The CDF is a **step function**.
*   It is **non-decreasing**.
*   It has jumps at the values where the PMF is non-zero. The size of the jump at a value $x_i$ is equal to $P(X=x_i)$.
*   It is **right-continuous**.

**Example 1: Rolling a Fair Die**

Let $X$ be the outcome of rolling a fair six-sided die. The PMF is:
$p_X(x) = 1/6$ for $x \in \{1, 2, 3, 4, 5, 6\}$, and $p_X(x) = 0$ otherwise.

Let's calculate the CDF $F_X(x)$:

*   For $x < 1$: $F_X(x) = P(X \le x) = 0$
*   For $1 \le x < 2$: $F_X(x) = P(X \le x) = P(X=1) = 1/6$
*   For $2 \le x < 3$: $F_X(x) = P(X \le x) = P(X=1) + P(X=2) = 1/6 + 1/6 = 2/6$
*   For $3 \le x < 4$: $F_X(x) = P(X \le x) = P(X=1) + P(X=2) + P(X=3) = 3/6$
*   For $4 \le x < 5$: $F_X(x) = P(X \le x) = 4/6$
*   For $5 \le x < 6$: $F_X(x) = P(X \le x) = 5/6$
*   For $x \ge 6$: $F_X(x) = P(X \le x) = 6/6 = 1$

The CDF can be written as:
$F_X(x) = \begin{cases} 0 & \text{if } x < 1 \\ 1/6 & \text{if } 1 \le x < 2 \\ 2/6 & \text{if } 2 \le x < 3 \\ 3/6 & \text{if } 3 \le x < 4 \\ 4/6 & \text{if } 4 \le x < 5 \\ 5/6 & \text{if } 5 \le x < 6 \\ 1 & \text{if } x \ge 6 \end{cases}$

**Using the CDF:**

*   What is the probability of rolling a 3 or less?
    $P(X \le 3) = F_X(3) = 3/6$ (from the definition of the interval $3 \le x < 4$).
*   What is the probability of rolling exactly a 4?
    $P(X = 4) = F_X(4) - \lim_{x \to 4^-} F_X(x) = F_X(4) - F_X(3.999...) = 4/6 - 3/6 = 1/6$.
*   What is the probability of rolling a value between 2 and 5 (inclusive)?
    $P(2 \le X \le 5) = P(X \le 5) - P(X < 2) = P(X \le 5) - P(X \le 1)$
    $P(2 \le X \le 5) = F_X(5) - F_X(1) = 5/6 - 1/6 = 4/6$.

---

### 5. CDF for Continuous Random Variables

For a continuous random variable $X$ with PDF $f_X(x)$, the CDF is calculated by integrating the PDF from $-\infty$ up to $x$.

$F_X(x) = P(X \le x) = \int_{-\infty}^{x} f_X(t) dt$

**Characteristics of CDF for Continuous RVs:**
*   The CDF is a **continuous function**.
*   It is **non-decreasing**.
*   It is **differentiable** (except possibly at a finite number of points where the PDF might be discontinuous). The derivative of the CDF is the PDF: $f_X(x) = \frac{d}{dx} F_X(x)$.
*   It is **right-continuous** (which is automatically satisfied if it's continuous).

**Example 2: Exponential Distribution**

Let $X$ be an exponentially distributed random variable with parameter $\lambda > 0$. Its PDF is:
$f_X(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases}$

Let's calculate the CDF $F_X(x)$:

*   For $x < 0$: $F_X(x) = \int_{-\infty}^{x} 0 dt = 0$
*   For $x \ge 0$: $F_X(x) = \int_{-\infty}^{x} f_X(t) dt = \int_{-\infty}^{0} 0 dt + \int_{0}^{x} \lambda e^{-\lambda t} dt$
    $F_X(x) = 0 + \left[ -e^{-\lambda t} \right]_0^x$
    $F_X(x) = (-e^{-\lambda x}) - (-e^{-\lambda \cdot 0})$
    $F_X(x) = -e^{-\lambda x} - (-e^0)$
    $F_X(x) = -e^{-\lambda x} + 1$
    $F_X(x) = 1 - e^{-\lambda x}$

So, the CDF of the Exponential distribution is:
$F_X(x) = \begin{cases} 0 & \text{if } x < 0 \\ 1 - e^{-\lambda x} & \text{if } x \ge 0 \end{cases}$

**Using the CDF:**

*   What is the probability that $X$ is less than or equal to $a$?
    $P(X \le a) = F_X(a)$. If $a \ge 0$, this is $1 - e^{-\lambda a}$.
*   What is the probability that $X$ is greater than $b$?
    $P(X > b) = 1 - P(X \le b) = 1 - F_X(b)$. If $b \ge 0$, this is $1 - (1 - e^{-\lambda b}) = e^{-\lambda b}$.
*   What is the probability that $X$ is between $a$ and $b$ (inclusive, $0 \le a \le b$)?
    $P(a \le X \le b) = F_X(b) - F_X(a) = (1 - e^{-\lambda b}) - (1 - e^{-\lambda a}) = e^{-\lambda a} - e^{-\lambda b}$.

**Textbook Reference:** Devore (9th ed.), pp. 115-116 (for Exponential distribution); Veerarajan (3rd ed.), p. 95 (for Exponential distribution).

---

### 6. CDF for a Mixed Random Variable

A random variable can be mixed if it has both discrete and continuous components. The CDF will reflect this by being a step function at discrete values and continuous elsewhere.

**Example 3: A Mixed Random Variable**

Consider a random variable $Y$ representing the time until a certain event occurs, where there's a probability of it never occurring.
Suppose $Y$ has the following CDF:
$F_Y(y) = \begin{cases} 0 & \text{if } y < 0 \\ 0.2 & \text{if } 0 \le y < 1 \\ 0.2 + 0.3(1 - e^{-(y-1)}) & \text{if } y \ge 1 \end{cases}$

Let's analyze this CDF:
*   At $y=0$, there's a jump of 0.2. This means $P(Y=0) = 0.2$. This is a discrete component.
*   For $y \ge 1$, the term $0.3(1 - e^{-(y-1)})$ is continuous. This represents a continuous component with a total probability mass of 0.3 distributed over $y \ge 1$.

**Using the CDF:**

*   $P(Y=0) = F_Y(0) - \lim_{y \to 0^-} F_Y(y) = 0.2 - 0 = 0.2$.
*   $P(0 < Y \le 2) = F_Y(2) - F_Y(0) = (0.2 + 0.3(1 - e^{-(2-1)})) - 0.2$
    $P(0 < Y \le 2) = 0.3(1 - e^{-1}) \approx 0.3(1 - 0.368) \approx 0.3 \times 0.632 \approx 0.1896$.
*   $P(Y > 2) = 1 - P(Y \le 2) = 1 - F_Y(2) = 1 - (0.2 + 0.3(1 - e^{-1})) = 0.8 - 0.3(1 - e^{-1})$
    $P(Y > 2) \approx 0.8 - 0.1896 \approx 0.6104$.

**Textbook Reference:** Similar examples involving mixed distributions are often discussed in advanced texts, e.g., Papoulis & Pillai (4th ed.), Chapter 5, "Random Variables".

---

### 7. Key Relationships between CDF, PMF, and PDF

*   **Discrete RV:** $F_X(x) = \sum_{t \le x} p_X(t)$ and $p_X(x) = F_X(x) - F_X(x^-)$ (where $F_X(x^-)$ is the limit from the left).
*   **Continuous RV:** $F_X(x) = \int_{-\infty}^{x} f_X(t) dt$ and $f_X(x) = \frac{d}{dx} F_X(x)$.
*   **Interval Probability:** $P(a < X \le b) = F_X(b) - F_X(a)$ for all types of random variables.

---

### 8. Application to Course Outcomes

*   **CO1 (Discrete RVs):** The CDF is a fundamental tool to summarize the entire probability distribution of discrete random variables. It allows for direct calculation of probabilities for ranges of outcomes, which is essential for applying discrete RV models (like Binomial, Poisson) to electrical phenomena such as signal arrivals, component failures, or digital signal errors.
    *   *Knowledge Level K3: Applying.* The ability to use the CDF to calculate probabilities like $P(X \le k)$ or $P(a < X \le b)$ for a given discrete RV model demonstrates K3.

*   **CO2 (Continuous RVs):** The CDF provides the complete probabilistic description for continuous random variables used in electrical science, such as voltage fluctuations, signal noise levels, or component lifetimes (Exponential, Normal distributions). Calculating CDFs enables performance analysis of systems where random variables represent these quantities.
    *   *Knowledge Level K3: Applying.* Calculating CDFs for standard continuous distributions and using them to find probabilities for specific ranges is a K3 skill.

*   **CO3 (Parameter Estimation & Confidence Intervals):** While CDFs themselves aren't directly used for parameter estimation in the same way as sample means or variances, understanding the underlying probability distributions (often described by their CDFs) is foundational. For instance, knowing the CDF of a Normal distribution helps in understanding why sample means follow a Normal distribution and how confidence intervals are constructed.

*   **CO4 (Random Processes):** For a random process $X(t)$, the CDF of the random variable $X(t)$ at a specific time $t$ is denoted $F_{X(t)}(x) = P(X(t) \le x)$. This is a key concept in characterizing the probability distribution of the process at any given instant, which is a building block for understanding more complex properties like autocorrelation functions.

---

### 9. Important Points to Remember

*   The CDF $F_X(x)$ gives $P(X \le x)$.
*   It's universally applicable to discrete, continuous, and mixed random variables.
*   Key properties: non-decreasing, limits at $-\infty$ and $+\infty$ are 0 and 1, right-continuous.
*   For discrete RVs, the CDF is a step function; for continuous RVs, it's a continuous function.
*   The jump size of the CDF at a point $x$ for a discrete RV is $P(X=x)$.
*   The derivative of the CDF of a continuous RV is its PDF.
*   The probability $P(a < X \le b) = F_X(b) - F_X(a)$ is a fundamental property.

---

### 10. Practice Questions

**Question 1 (Discrete):**
A communication system transmits data packets, and the number of corrupted packets in a block of 10 is a Binomial random variable $X \sim \text{Binomial}(n=10, p=0.2)$.
a) Calculate the CDF of $X$, $F_X(x)$, for $x=0, 1, 2, ..., 10$.
b) What is the probability that at most 3 packets are corrupted? ($P(X \le 3)$)
c) What is the probability that exactly 5 packets are corrupted? ($P(X = 5)$)
d) What is the probability that between 2 and 6 packets (inclusive) are corrupted? ($P(2 \le X \le 6)$)

**Question 2 (Continuous):**
The time to failure (in hours) of a certain electronic component follows an Exponential distribution with a mean of 500 hours.
a) Determine the parameter $\lambda$ for this distribution.
b) Find the CDF of the time to failure, $F_T(t)$.
c) What is the probability that a component fails before 400 hours? ($P(T < 400)$)
d) What is the probability that a component lasts for more than 600 hours? ($P(T > 600)$)
e) What is the probability that a component fails between 300 and 700 hours? ($P(300 < T < 700)$)

**Question 3 (Properties):**
Let $F_X(x)$ be the CDF of a random variable $X$. Which of the following statements are always true?
I. $F_X(x)$ is a non-decreasing function.
II. $\lim_{x \to \infty} F_X(x) = 1$.
III. $P(X=a) = F_X(a)$ for all $a$.
IV. $P(a < X \le b) = F_X(b) - F_X(a)$ for $a < b$.

---

### 11. Answers to Practice Questions

**Answer 1:**
Given $X \sim \text{Binomial}(10, 0.2)$, the PMF is $p_X(k) = \binom{10}{k} (0.2)^k (0.8)^{10-k}$ for $k=0, 1, \dots, 10$.

a) The CDF is $F_X(x) = P(X \le x) = \sum_{k=0}^{\lfloor x \rfloor} \binom{10}{k} (0.2)^k (0.8)^{10-k}$.
   *   $F_X(0) = \binom{10}{0}(0.2)^0(0.8)^{10} = 0.8^{10} \approx 0.1074$
   *   $F_X(1) = F_X(0) + \binom{10}{1}(0.2)^1(0.8)^9 \approx 0.1074 + 10(0.2)(0.1342) \approx 0.1074 + 0.2684 = 0.3758$
   *   $F_X(2) = F_X(1) + \binom{10}{2}(0.2)^2(0.8)^8 \approx 0.3758 + 45(0.04)(0.1678) \approx 0.3758 + 0.3020 = 0.6778$
   *   $F_X(3) = F_X(2) + \binom{10}{3}(0.2)^3(0.8)^7 \approx 0.6778 + 120(0.008)(0.2097) \approx 0.6778 + 0.2013 = 0.8791$
   *   $F_X(4) = F_X(3) + \binom{10}{4}(0.2)^4(0.8)^6 \approx 0.8791 + 210(0.0016)(0.2621) \approx 0.8791 + 0.0881 = 0.9672$
   *   $F_X(5) = F_X(4) + \binom{10}{5}(0.2)^5(0.8)^5 \approx 0.9672 + 252(0.00032)(0.3277) \approx 0.9672 + 0.0264 = 0.9936$
   *   $F_X(6) = F_X(5) + \binom{10}{6}(0.2)^6(0.8)^4 \approx 0.9936 + 210(0.000064)(0.4096) \approx 0.9936 + 0.0055 = 0.9991$
   *   For $x=7, \dots, 9$, the values will be very close to 1.
   *   $F_X(10) = 1$.
   (Note: Exact calculation for each step would require precise values, but the method is shown).

b) $P(X \le 3) = F_X(3) \approx 0.8791$.

c) $P(X = 5) = F_X(5) - F_X(4) \approx 0.9936 - 0.9672 = 0.0264$.
   (Alternatively, calculate $p_X(5) = \binom{10}{5}(0.2)^5(0.8)^5$).

d) $P(2 \le X \le 6) = P(X \le 6) - P(X \le 1) = F_X(6) - F_X(1)$.
   $P(2 \le X \le 6) \approx 0.9991 - 0.3758 = 0.6233$.

**Answer 2:**
The mean of an Exponential distribution is $1/\lambda$. Given mean = 500 hours, $1/\lambda = 500$.

a) $\lambda = 1/500 = 0.002$.

b) The CDF is $F_T(t) = \begin{cases} 0 & \text{if } t < 0 \\ 1 - e^{-0.002t} & \text{if } t \ge 0 \end{cases}$.

c) $P(T < 400) = P(T \le 400) = F_T(400)$ (since it's continuous).
   $F_T(400) = 1 - e^{-0.002 \times 400} = 1 - e^{-0.8} \approx 1 - 0.4493 = 0.5507$.

d) $P(T > 600) = 1 - P(T \le 600) = 1 - F_T(600)$.
   $1 - (1 - e^{-0.002 \times 600}) = e^{-1.2} \approx 0.3012$.

e) $P(300 < T < 700) = F_T(700) - F_T(300)$.
   $F_T(700) = 1 - e^{-0.002 \times 700} = 1 - e^{-1.4} \approx 1 - 0.2466 = 0.7534$.
   $F_T(300) = 1 - e^{-0.002 \times 300} = 1 - e^{-0.6} \approx 1 - 0.5488 = 0.4512$.
   $P(300 < T < 700) \approx 0.7534 - 0.4512 = 0.3022$.
   (Alternatively, $e^{-0.002 \times 300} - e^{-0.002 \times 700} = e^{-0.6} - e^{-1.4} \approx 0.5488 - 0.2466 = 0.3022$).

**Answer 3:**
I. True (Property 1).
II. True (Property 2).
III. False. This is only true for continuous random variables at certain points, or for discrete random variables if $F_X(x^-)$ is considered 0. However, the general statement $P(X=a) = F_X(a)$ is incorrect for discrete RVs if there's a jump *before* $a$. The correct form is $P(X=a) = F_X(a) - F_X(a^-)$.
IV. True (Property 5).

Therefore, statements I, II, and IV are always true.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
