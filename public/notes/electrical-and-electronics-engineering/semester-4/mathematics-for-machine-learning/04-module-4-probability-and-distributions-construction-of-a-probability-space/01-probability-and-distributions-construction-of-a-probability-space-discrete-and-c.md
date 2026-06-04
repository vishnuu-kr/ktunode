---
title: "Probability and Distributions: Construction of a Probability Space - Discrete and Continuous Probabilities, Bayes’ Theorem."
subject: "MATHEMATICS FOR MACHINE LEARNING"
module: "Module 4: Probability and Distributions: Construction of a Probability Space "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35ef4"
status: "completed"
scrapedAt: "2026-05-23T16:17:22.636Z"
---
# MATHEMATICS FOR MACHINE LEARNING - Module 4: Probability and Distributions: Construction of a Probability Space

## Topic: Discrete and Continuous Probabilities, Bayes’ Theorem

This module builds upon foundational probability concepts, essential for understanding uncertainty and modeling in machine learning. We will explore how to formally construct a probability space and differentiate between discrete and continuous probability distributions. Finally, we'll delve into Bayes' Theorem, a cornerstone for updating beliefs based on new evidence.

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Define and construct a probability space for both discrete and continuous random variables.
*   Distinguish between discrete and continuous probability distributions and understand their properties.
*   Calculate probabilities for discrete events using probability mass functions (PMFs).
*   Calculate probabilities for continuous events using probability density functions (PDFs) and cumulative distribution functions (CDFs).
*   Understand and apply Bayes' Theorem to update probabilities based on new information.
*   Recognize the importance of probability and distributions in various machine learning algorithms.

### Course Outcomes Addressed:

*   **CO3:** Utilize the concepts, rules and results about probability, random variables, additive & multiplicative rules, conditional probability, probability distributions and Bayes’ theorem to find solutions of computational problems. (Knowledge Level: K3)

---

### 1. Construction of a Probability Space

A probability space is a mathematical framework that allows us to formally define and analyze random phenomena. It consists of three fundamental components:

*   **Sample Space ($\Omega$)**: The set of all possible outcomes of a random experiment.
    *   *Example:* Flipping a coin: $\Omega = \{Heads, Tails\}$. Rolling a die: $\Omega = \{1, 2, 3, 4, 5, 6\}$.
*   **Event Space ($\mathcal{F}$)**: A collection of subsets of the sample space, representing events. These events must satisfy certain properties (a $\sigma$-algebra):
    1.  The sample space itself is an event: $\Omega \in \mathcal{F}$.
    2.  If an event $A$ is in $\mathcal{F}$, then its complement $A^c$ (all outcomes not in $A$) is also in $\mathcal{F}$.
    3.  If a countable number of events $A_1, A_2, \dots$ are in $\mathcal{F}$, then their union $\cup_{i=1}^\infty A_i$ is also in $\mathcal{F}$.
    *   *Intuition:* The event space defines what "measurable" outcomes we can assign probabilities to. For finite sample spaces, $\mathcal{F}$ is often the power set (the set of all subsets).
*   **Probability Measure ($P$)**: A function that assigns a probability to each event in the event space, satisfying the following axioms (Kolmogorov's axioms):
    1.  For any event $A \in \mathcal{F}$, $P(A) \ge 0$. (Probabilities are non-negative).
    2.  The probability of the entire sample space is 1: $P(\Omega) = 1$. (Something must happen).
    3.  For any sequence of mutually exclusive events $A_1, A_2, \dots \in \mathcal{F}$ (i.e., $A_i \cap A_j = \emptyset$ for $i \neq j$), the probability of their union is the sum of their probabilities: $P(\cup_{i=1}^\infty A_i) = \sum_{i=1}^\infty P(A_i)$. (Additivity for disjoint events).

**Referenced in:** Deisenroth, Faisal, & Ong (Chapter 4: Probability and Distributions) discuss the formal construction of probability spaces.

---

### 2. Discrete Probabilities

**Definition:** A random variable $X$ is **discrete** if its sample space is countable (finite or countably infinite).

*   **Probability Mass Function (PMF):** For a discrete random variable $X$, the PMF, denoted by $p(x)$ or $P(X=x)$, assigns a probability to each possible value $x$ that $X$ can take.
    *   **Properties of PMF:**
        1.  $0 \le p(x) \le 1$ for all $x$.
        2.  $\sum_{x} p(x) = 1$, where the sum is over all possible values of $X$.
    *   *Example:* Rolling a fair six-sided die. Let $X$ be the outcome.
        *   $\Omega = \{1, 2, 3, 4, 5, 6\}$
        *   $p(x) = 1/6$ for $x \in \{1, 2, 3, 4, 5, 6\}$.
        *   $\sum_{x=1}^6 p(x) = 6 \times (1/6) = 1$.
    *   *Example:* Number of heads in two coin flips. Let $Y$ be the number of heads.
        *   $\Omega = \{HH, HT, TH, TT\}$
        *   Possible values for $Y$: $\{0, 1, 2\}$.
        *   $P(Y=0) = P(\{TT\}) = 1/4$
        *   $P(Y=1) = P(\{HT, TH\}) = 2/4 = 1/2$
        *   $P(Y=2) = P(\{HH\}) = 1/4$
        *   $p(0)=1/4, p(1)=1/2, p(2)=1/4$. $\sum p(y) = 1/4 + 1/2 + 1/4 = 1$.

**Key Discrete Distributions (Important for ML):**

*   **Bernoulli Distribution:** Represents a single trial with two possible outcomes (success/failure), with probability $p$ of success.
    *   $P(X=1) = p$, $P(X=0) = 1-p$.
    *   Used in: Logistic Regression, binary classification.
*   **Binomial Distribution:** The number of successes in a fixed number of independent Bernoulli trials.
    *   $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$ for $k=0, 1, \dots, n$.
    *   Used in: Modeling counts of events.
*   **Poisson Distribution:** The probability of a given number of events occurring in a fixed interval of time or space, if these events occur with a known constant mean rate and independently of the time since the last event.
    *   $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$ for $k=0, 1, 2, \dots$.
    *   Used in: Modeling arrival rates, count data.
*   **Categorical Distribution:** Generalization of Bernoulli for more than two outcomes.
*   **Multinomial Distribution:** Generalization of Binomial for counts of outcomes from a categorical distribution over multiple trials.

---

### 3. Continuous Probabilities

**Definition:** A random variable $X$ is **continuous** if it can take any value within a given range (an interval).

*   **Probability Density Function (PDF):** For a continuous random variable $X$, the PDF, denoted by $f(x)$, describes the relative likelihood for $X$ to take on a given value. **Crucially, for a continuous variable, the probability of $X$ taking any *single* specific value is zero: $P(X=x) = 0$.** Instead, we talk about probabilities over intervals.
    *   **Properties of PDF:**
        1.  $f(x) \ge 0$ for all $x$.
        2.  $\int_{-\infty}^{\infty} f(x) dx = 1$. (The total area under the PDF curve is 1).
    *   *Example:* A random variable $X$ representing the height of a person. $X$ can take any value within a range (e.g., 0 to 3 meters).
    *   *Example:* Uniform Distribution $U(a, b)$: $f(x) = \frac{1}{b-a}$ for $a \le x \le b$, and $0$ otherwise.
        *   $P(c \le X \le d) = \int_c^d f(x) dx = \int_c^d \frac{1}{b-a} dx = \frac{d-c}{b-a}$, for $a \le c \le d \le b$.

*   **Cumulative Distribution Function (CDF):** The CDF, denoted by $F(x)$ or $P(X \le x)$, gives the probability that the random variable $X$ takes on a value less than or equal to $x$.
    *   **Properties of CDF:**
        1.  $0 \le F(x) \le 1$.
        2.  $F(x)$ is non-decreasing.
        3.  $\lim_{x \to -\infty} F(x) = 0$.
        4.  $\lim_{x \to \infty} F(x) = 1$.
    *   **Relationship between PDF and CDF:**
        *   $F(x) = P(X \le x) = \int_{-\infty}^{x} f(t) dt$
        *   $f(x) = \frac{d}{dx} F(x)$ (The PDF is the derivative of the CDF).
    *   *Example:* For the Uniform distribution $U(a, b)$:
        *   $F(x) = 0$ for $x < a$.
        *   $F(x) = \frac{x-a}{b-a}$ for $a \le x \le b$.
        *   $F(x) = 1$ for $x > b$.
    *   **Calculating Probabilities using CDF:**
        *   $P(c \le X \le d) = F(d) - F(c)$.

**Key Continuous Distributions (Important for ML):**

*   **Uniform Distribution:** All values in an interval are equally likely.
    *   Used in: Generating random numbers, initializations.
*   **Normal (Gaussian) Distribution:** Bell-shaped curve, defined by mean ($\mu$) and variance ($\sigma^2$).
    *   $f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$
    *   Used extensively in ML for modeling data, error terms, and as a building block for other distributions (e.g., in Bayesian methods).
*   **Exponential Distribution:** Models the time until an event occurs in a Poisson process.
    *   $f(x) = \lambda e^{-\lambda x}$ for $x \ge 0$.
    *   Used in: Survival analysis, modeling waiting times.
*   **Beta Distribution:** Defined on the interval [0, 1], useful for modeling probabilities or proportions.
    *   Used in: Bayesian inference (conjugate prior for Bernoulli/Binomial).
*   **Dirichlet Distribution:** Generalization of Beta for multivariate probabilities (vectors summing to 1).
    *   Used in: Bayesian inference, topic modeling (e.g., LDA).

**Referenced in:** Deisenroth, Faisal, & Ong (Chapter 4) covers both discrete and continuous distributions in detail, including their PMFs, PDFs, and CDFs. Bishop (Chapter 2: Probability Distributions) provides a comprehensive overview of common probability distributions. Murphy (Chapter 3: Probability and Distributions) also offers extensive coverage.

---

### 4. Bayes’ Theorem

Bayes' Theorem is a fundamental rule in probability that describes how to update the probability of a hypothesis based on new evidence. It is crucial for Bayesian inference in machine learning.

**The Formula:**

$$P(A|B) = \frac{P(B|A) P(A)}{P(B)}$$

Where:

*   $P(A|B)$: **Posterior Probability** - The probability of hypothesis $A$ given evidence $B$. This is what we want to calculate.
*   $P(B|A)$: **Likelihood** - The probability of observing evidence $B$ given that hypothesis $A$ is true.
*   $P(A)$: **Prior Probability** - The initial probability of hypothesis $A$ before observing evidence $B$.
*   $P(B)$: **Marginal Probability of Evidence** - The total probability of observing evidence $B$.

**To calculate $P(B)$, we often use the law of total probability:**

$$P(B) = \sum_{i} P(B|A_i) P(A_i)$$
(where $A_i$ are mutually exclusive and exhaustive hypotheses).

**In terms of random variables:**

If we have a hypothesis $H$ and observed data $D$, Bayes' Theorem can be written as:

$$P(H|D) = \frac{P(D|H) P(H)}{P(D)}$$

Or, more commonly with parameters $\theta$ and data $D$:

$$P(\theta|D) = \frac{P(D|\theta) P(\theta)}{P(D)}$$

**Interpretation:**

Bayes' Theorem tells us that the **posterior probability** ($P(A|B)$) is proportional to the **likelihood** ($P(B|A)$) times the **prior probability** ($P(A)$). The denominator $P(B)$ acts as a normalizing constant, ensuring that the posterior probabilities sum to 1.

**Example: Medical Diagnosis**

Suppose a disease $D$ affects 1% of the population. A test $T$ for this disease is 99% accurate (i.e., if a person has the disease, the test is positive 99% of the time; if a person does not have the disease, the test is negative 99% of the time).

Let:
*   $D$: Event that a person has the disease.
*   $D^c$: Event that a person does not have the disease.
*   $T^+$: Event that the test is positive.
*   $T^-$: Event that the test is negative.

We are given:
*   $P(D) = 0.01$ (Prior)
*   $P(D^c) = 1 - P(D) = 0.99$
*   $P(T^+|D) = 0.99$ (True positive rate / Sensitivity)
*   $P(T^-|D^c) = 0.99$ (True negative rate / Specificity)

From this, we can infer:
*   $P(T^-|D) = 1 - P(T^+|D) = 0.01$ (False negative rate)
*   $P(T^+|D^c) = 1 - P(T^-|D^c) = 0.01$ (False positive rate)

**Question:** If a person tests positive ($T^+$), what is the probability they actually have the disease ($D$)? We want to find $P(D|T^+)$.

Using Bayes' Theorem:

$$P(D|T^+) = \frac{P(T^+|D) P(D)}{P(T^+)}$$

First, we need to calculate $P(T^+)$ using the law of total probability:

$$P(T^+) = P(T^+|D) P(D) + P(T^+|D^c) P(D^c)$$
$$P(T^+) = (0.99)(0.01) + (0.01)(0.99)$$
$$P(T^+) = 0.0099 + 0.0099 = 0.0198$$

Now, substitute back into Bayes' Theorem:

$$P(D|T^+) = \frac{(0.99)(0.01)}{0.0198} = \frac{0.0099}{0.0198} = 0.5$$

**Result:** Even with a positive test, the probability of having the disease is only 50%. This is because the disease is rare (low prior probability), leading to a significant number of false positives relative to true positives.

**Referenced in:** Deisenroth, Faisal, & Ong (Chapter 4) introduces Bayes' Theorem as a fundamental tool for inference. Bishop (Chapter 2) also covers Bayesian inference and Bayes' Theorem. Murphy (Chapter 3) dedicates a section to Bayes' theorem and its applications.

---

### 5. Importance in Machine Learning

*   **Probabilistic Models:** Many ML algorithms are inherently probabilistic, aiming to model the underlying data generation process. Distributions are used to represent uncertainty in predictions.
*   **Classification:** In classification tasks, we often want to predict the probability of a data point belonging to a certain class. Bayes' Theorem is the foundation for Naive Bayes classifiers.
*   **Regression:** In Bayesian regression, we model the parameters of the regression model as probability distributions, allowing us to quantify uncertainty in our predictions.
*   **Generative Models:** Models like Gaussian Mixture Models (GMMs) and Latent Dirichlet Allocation (LDA) rely heavily on probability distributions to model complex data structures.
*   **Uncertainty Quantification:** Understanding probability distributions allows us to quantify the uncertainty associated with our model's predictions, which is crucial for reliable decision-making.

---

### 6. Key Points to Remember

*   **Probability Space:** $\Omega$ (outcomes), $\mathcal{F}$ (events), $P$ (probability measure).
*   **Discrete Random Variables:** Countable outcomes. Use PMFs ($p(x)$) where $\sum p(x) = 1$.
*   **Continuous Random Variables:** Uncountable outcomes (intervals). Use PDFs ($f(x)$) where $\int f(x) dx = 1$ and $P(X=x)=0$. Probabilities are calculated over intervals $P(c \le X \le d) = \int_c^d f(x) dx$.
*   **CDF ($F(x)$):** $P(X \le x)$. For continuous, $P(c \le X \le d) = F(d) - F(c)$.
*   **Bayes' Theorem:** Updates beliefs: $P(\text{Hypothesis}|\text{Evidence}) = \frac{P(\text{Evidence}|\text{Hypothesis}) P(\text{Hypothesis})}{P(\text{Evidence})}$.
*   **Prior vs. Posterior:** Prior is your belief before data; Posterior is your updated belief after data.
*   **Likelihood:** Probability of data given hypothesis.

---

### 7. Practice Questions

**Question 1 (Discrete Probability):**
A bag contains 3 red balls and 5 blue balls. You draw two balls without replacement. Let $R_1$ be the event that the first ball drawn is red, and $R_2$ be the event that the second ball drawn is red.

a) Calculate $P(R_1)$.
b) Calculate $P(R_2|R_1)$.
c) Calculate $P(R_1 \cap R_2)$ (the probability that both balls are red).
d) Calculate $P(R_2)$ using the law of total probability.

**Answer 1:**
Total balls = 8.
a) $P(R_1) = \frac{\text{Number of red balls}}{\text{Total balls}} = \frac{3}{8}$.

b) If the first ball was red, there are now 2 red balls left and 7 total balls.
$P(R_2|R_1) = \frac{2}{7}$.

c) $P(R_1 \cap R_2) = P(R_2|R_1) P(R_1) = \frac{2}{7} \times \frac{3}{8} = \frac{6}{56} = \frac{3}{28}$.

d) To calculate $P(R_2)$, we need to consider two cases for the first draw: it was red ($R_1$) or it was blue ($B_1$).
$P(R_2) = P(R_2|R_1)P(R_1) + P(R_2|B_1)P(B_1)$
We know $P(R_1) = 3/8$.
$P(B_1) = \frac{\text{Number of blue balls}}{\text{Total balls}} = \frac{5}{8}$.
If the first ball was blue, there are 3 red balls left and 7 total balls. So, $P(R_2|B_1) = \frac{3}{7}$.
$P(R_2) = \left(\frac{2}{7}\right)\left(\frac{3}{8}\right) + \left(\frac{3}{7}\right)\left(\frac{5}{8}\right) = \frac{6}{56} + \frac{15}{56} = \frac{21}{56} = \frac{3}{8}$.
*(Note: The probability of drawing a red ball on the second draw is the same as on the first, due to symmetry in this type of problem.)*

---

**Question 2 (Continuous Probability):**
Let $X$ be a continuous random variable with the following PDF:
$f(x) = \begin{cases} 2e^{-2x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases}$
This is an exponential distribution with $\lambda = 2$.

a) Verify that this is a valid PDF.
b) Calculate $P(X \le 1)$.
c) Calculate $P(X > 0.5)$.

**Answer 2:**
a) We need to check if $f(x) \ge 0$ and $\int_{-\infty}^{\infty} f(x) dx = 1$.
For $x \ge 0$, $2e^{-2x} > 0$. For $x < 0$, $f(x)=0$. So $f(x) \ge 0$ for all $x$.
$\int_{-\infty}^{\infty} f(x) dx = \int_{-\infty}^{0} 0 dx + \int_{0}^{\infty} 2e^{-2x} dx$
$= 0 + [-e^{-2x}]_{0}^{\infty} = -( \lim_{x\to\infty} e^{-2x} - e^{-2 \times 0} )$
$= -(0 - 1) = 1$.
The PDF is valid.

b) $P(X \le 1) = \int_{-\infty}^{1} f(x) dx = \int_{0}^{1} 2e^{-2x} dx$
$= [-e^{-2x}]_{0}^{1} = (-e^{-2 \times 1}) - (-e^{-2 \times 0})$
$= -e^{-2} - (-e^0) = -e^{-2} + 1 = 1 - e^{-2} \approx 1 - 0.1353 = 0.8647$.

c) $P(X > 0.5) = \int_{0.5}^{\infty} 2e^{-2x} dx$
$= [-e^{-2x}]_{0.5}^{\infty} = -(\lim_{x\to\infty} e^{-2x}) - (-e^{-2 \times 0.5})$
$= -(0) - (-e^{-1}) = e^{-1} = \frac{1}{e} \approx 0.3679$.
Alternatively, $P(X > 0.5) = 1 - P(X \le 0.5) = 1 - (1 - e^{-2 \times 0.5}) = e^{-1}$.

---

**Question 3 (Bayes' Theorem):**
Consider the medical diagnosis example from the notes.
$P(D) = 0.01$, $P(T^+|D) = 0.99$, $P(T^+|D^c) = 0.01$.

a) What is the probability of a false negative?
b) What is the probability of a false positive?
c) If a person tests negative ($T^-$), what is the probability they do *not* have the disease ($D^c$)? (Use $P(D|T^-)$ and the fact that $P(D|T^-) = 1 - P(D^c|T^-)$).

**Answer 3:**
a) False negative is the probability of testing negative given you have the disease: $P(T^-|D)$.
$P(T^-|D) = 1 - P(T^+|D) = 1 - 0.99 = 0.01$.

b) False positive is the probability of testing positive given you do *not* have the disease: $P(T^+|D^c)$.
$P(T^+|D^c) = 0.01$ (given).

c) We want to find $P(D^c|T^-)$. Using Bayes' Theorem:
$P(D^c|T^-) = \frac{P(T^-|D^c) P(D^c)}{P(T^-)}$

We know:
*   $P(D^c) = 0.99$
*   $P(T^-|D^c) = 0.99$ (True negative rate)

We need $P(T^-)$. Using the law of total probability:
$P(T^-) = P(T^-|D) P(D) + P(T^-|D^c) P(D^c)$
$P(T^-) = (0.01)(0.01) + (0.99)(0.99)$
$P(T^-) = 0.0001 + 0.9801 = 0.9802$

Now, substitute into Bayes' Theorem for $P(D^c|T^-)$:
$P(D^c|T^-) = \frac{(0.99)(0.99)}{0.9802} = \frac{0.9801}{0.9802} \approx 0.999898 \approx 0.9999$

So, if a person tests negative, the probability they do not have the disease is very high (close to 100%). This makes sense, as the test is quite accurate for negative cases.

---

This concludes Module 4, Topic 1. Understanding these probability concepts is fundamental for grasping more advanced machine learning topics.
