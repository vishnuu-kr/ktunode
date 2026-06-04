---
title: "Applied Probability and Statistics for AI and Data Science : Basics of probability"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b9a"
status: "completed"
scrapedAt: "2026-05-23T16:14:07.829Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

## Course Alignment

This module directly supports:

*   **CO3:** Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions. (Knowledge Level: K3)
*   **CO4:** Integrate statistical approaches and machine learning techniques to ensure practically feasible solutions in engineering contexts. (Knowledge Level: K3)

While not the primary focus, understanding basic probability is foundational for:

*   **CO1:** Applying machine learning algorithms, as many rely on probabilistic models.
*   **CO2:** Understanding concepts like Bayesian inference and probabilistic graphical models, which are rooted in probability theory.

## 1. Introduction to Probability

Probability is the mathematical framework for quantifying uncertainty. In AI and Data Science, it's crucial for:

*   **Modeling uncertainty:** Many real-world phenomena are not deterministic.
*   **Making predictions:** Estimating the likelihood of future events.
*   **Evaluating models:** Quantifying the confidence in model outputs.
*   **Decision making:** Choosing actions based on probabilities of outcomes.

### 1.1 Key Concepts and Definitions

*   **Experiment:** A process that results in one of several possible outcomes.
    *   *Example:* Flipping a coin, rolling a die, measuring a patient's blood pressure.
*   **Outcome:** A single possible result of an experiment.
    *   *Example:* For flipping a coin, outcomes are "Heads" or "Tails".
*   **Sample Space (S):** The set of all possible outcomes of an experiment.
    *   *Example:* For rolling a die, S = {1, 2, 3, 4, 5, 6}.
*   **Event:** A subset of the sample space, representing a specific outcome or a collection of outcomes.
    *   *Example:* For rolling a die, the event "rolling an even number" is {2, 4, 6}.
*   **Probability of an Event (P(E)):** A numerical measure of the likelihood that an event E will occur. Probabilities are always between 0 and 1, inclusive.
    *   $0 \le P(E) \le 1$
    *   If $P(E) = 0$, the event is impossible.
    *   If $P(E) = 1$, the event is certain.

### 1.2 Approaches to Probability

*   **Classical (Theoretical) Probability:** Used when all outcomes are equally likely.
    *   $P(E) = \frac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}}$
    *   *Example:* The probability of rolling a 3 on a fair die is $1/6$.
*   **Empirical (Frequentist) Probability:** Based on observed frequencies of events from repeated experiments.
    *   $P(E) \approx \frac{\text{Number of times event E occurred}}{\text{Total number of trials}}$
    *   *Example:* If you flip a coin 100 times and get 53 heads, the empirical probability of heads is 0.53. This is often used in data science when we have observed data.
    *   *Reference:* **Gupta & Kapoor, Fundamentals of mathematical statistics** often discusses these approaches in detail.
*   **Subjective Probability:** Based on personal belief or judgment, often used when objective data is scarce.
    *   *Example:* A weather forecaster's prediction of a 70% chance of rain.

### 1.3 Important Properties of Probability

*   **Axioms of Probability (Kolmogorov's Axioms):**
    1.  Non-negativity: $P(E) \ge 0$ for any event E.
    2.  Normalization: $P(S) = 1$, where S is the sample space.
    3.  Additivity: For any two mutually exclusive events $E_1$ and $E_2$ (events that cannot happen at the same time, $E_1 \cap E_2 = \emptyset$), $P(E_1 \cup E_2) = P(E_1) + P(E_2)$.
*   **Complement Rule:** The probability of an event not occurring is 1 minus the probability of it occurring.
    *   $P(\neg E) = 1 - P(E)$
    *   *Example:* If the probability of a machine failing is 0.1, the probability of it not failing is $1 - 0.1 = 0.9$.
*   **General Addition Rule:** For any two events $E_1$ and $E_2$, the probability of either $E_1$ or $E_2$ (or both) occurring is:
    *   $P(E_1 \cup E_2) = P(E_1) + P(E_2) - P(E_1 \cap E_2)$
    *   The term $P(E_1 \cap E_2)$ is the probability that both events occur.

### 1.4 Types of Events

*   **Mutually Exclusive Events:** Events that cannot occur simultaneously.
    *   $P(E_1 \cap E_2) = 0$
    *   *Example:* Rolling a 1 and rolling a 6 on a single die roll.
*   **Independent Events:** The occurrence of one event does not affect the probability of the other event occurring.
    *   $P(E_1 \cap E_2) = P(E_1) * P(E_2)$
    *   *Example:* Flipping a fair coin twice. The outcome of the first flip does not influence the outcome of the second flip.
*   **Dependent Events:** The occurrence of one event affects the probability of the other event occurring. This is where **conditional probability** becomes important.

## 2. Conditional Probability

Conditional probability measures the probability of an event occurring given that another event has already occurred.

### 2.1 Key Concepts and Definitions

*   **Conditional Probability of A given B ($P(A|B)$):** The probability of event A occurring, given that event B has occurred.
    *   $P(A|B) = \frac{P(A \cap B)}{P(B)}$, provided $P(B) > 0$.
    *   *Interpretation:* We are reducing our sample space to only those outcomes where B has occurred.

### 2.2 Examples

*   **Example 1 (Medical Testing):**
    *   Let D be the event that a person has a disease.
    *   Let T be the event that a person tests positive for the disease.
    *   We might know:
        *   $P(D) = 0.01$ (1% of the population has the disease - prevalence)
        *   $P(T|D) = 0.95$ (If you have the disease, the test is positive 95% of the time - sensitivity)
        *   $P(T|\neg D) = 0.05$ (If you don't have the disease, the test is positive 5% of the time - false positive rate)
    *   We want to find $P(D|T)$, the probability that a person actually has the disease given they tested positive.
    *   We'll need $P(T)$ and $P(D \cap T)$ for this, which leads to the next concept.

### 2.3 Multiplication Rule

The multiplication rule is derived from the definition of conditional probability and is used to calculate the probability of two events occurring.

*   For any two events A and B:
    *   $P(A \cap B) = P(A|B) * P(B)$
    *   $P(A \cap B) = P(B|A) * P(A)$

### 2.4 Independence vs. Conditional Probability

*   If A and B are independent, then $P(A|B) = P(A)$ and $P(B|A) = P(B)$. The multiplication rule simplifies to $P(A \cap B) = P(A) * P(B)$, as expected.
*   If A and B are dependent, then $P(A|B) \neq P(A)$ and $P(B|A) \neq P(B)$.

### 2.5 Bayes' Theorem

Bayes' Theorem is a fundamental result that relates conditional probabilities. It allows us to update our beliefs (probabilities) in light of new evidence.

*   **Theorem:** For events A and B, with $P(B) > 0$:
    *   $P(A|B) = \frac{P(B|A) * P(A)}{P(B)}$
*   **More general form using the Law of Total Probability:** If we have a set of mutually exclusive and exhaustive events ($A_1, A_2, ..., A_n$) such that $P(A_i) > 0$ for all $i$, and $\sum_{i=1}^n P(A_i) = 1$, then:
    *   $P(A_k|B) = \frac{P(B|A_k) * P(A_k)}{\sum_{i=1}^n P(B|A_i) * P(A_i)}$
    *   The denominator, $\sum_{i=1}^n P(B|A_i) * P(A_i)$, is the **Law of Total Probability**. It's the sum of probabilities of B occurring through each of the possible states ($A_i$).

### 2.6 Example using Bayes' Theorem (Medical Testing Revisited)

Let's continue the medical testing example:
*   D: Person has disease
*   $\neg D$: Person does not have disease
*   T: Person tests positive

We know:
*   $P(D) = 0.01$
*   $P(\neg D) = 1 - P(D) = 0.99$
*   $P(T|D) = 0.95$ (Sensitivity)
*   $P(T|\neg D) = 0.05$ (False Positive Rate)

We want to find $P(D|T)$. Using Bayes' Theorem:

$P(D|T) = \frac{P(T|D) * P(D)}{P(T)}$

First, we need $P(T)$ using the Law of Total Probability:
$P(T) = P(T|D) * P(D) + P(T|\neg D) * P(\neg D)$
$P(T) = (0.95 * 0.01) + (0.05 * 0.99)$
$P(T) = 0.0095 + 0.0495$
$P(T) = 0.059$ (Overall probability of testing positive)

Now, plug it back into Bayes' Theorem:
$P(D|T) = \frac{0.95 * 0.01}{0.059}$
$P(D|T) = \frac{0.0095}{0.059} \approx 0.161$ or 16.1%

**Key Takeaway:** Even with a positive test and a relatively high sensitivity, the probability of actually having the disease is only about 16.1% if the disease is rare in the population. This highlights the importance of base rates (prevalence) in interpreting probabilistic results.

*   *Reference:* **Fernandez-Granda, Probability and Statistics for Data Science** provides excellent, intuitive explanations of Bayes' Theorem and its applications. **Miller, Statistics For Data Science** also covers this extensively.

## 3. Random Variables

A random variable is a variable whose value is a numerical outcome of a random phenomenon.

### 3.1 Key Concepts and Definitions

*   **Random Variable (RV):** A function that maps outcomes from a sample space to real numbers.
    *   *Notation:* Typically denoted by uppercase letters like X, Y, Z.
*   **Types of Random Variables:**
    *   **Discrete Random Variable:** Can only take a finite number of values or a countably infinite number of values.
        *   *Example:* The number of heads in 3 coin flips (0, 1, 2, 3). The number of customers arriving at a store per hour (0, 1, 2, ...).
    *   **Continuous Random Variable:** Can take any value within a given range or interval.
        *   *Example:* The height of a person, the temperature of a room, the time it takes for a machine to fail.

### 3.2 Probability Distributions

A probability distribution describes how probabilities are distributed over the possible values of a random variable.

#### 3.2.1 For Discrete Random Variables

*   **Probability Mass Function (PMF):** For a discrete random variable X, the PMF, denoted by $p(x)$, gives the probability that X takes on a specific value $x$.
    *   $p(x) = P(X = x)$
    *   Properties:
        *   $p(x) \ge 0$ for all $x$.
        *   $\sum_{x} p(x) = 1$ (Sum of probabilities over all possible values is 1).
    *   *Example (Fair Die):* If X is the outcome of a fair die roll, the PMF is $p(x) = 1/6$ for $x \in \{1, 2, 3, 4, 5, 6\}$, and $p(x) = 0$ otherwise.

#### 3.2.2 For Continuous Random Variables

*   **Probability Density Function (PDF):** For a continuous random variable X, the PDF, denoted by $f(x)$, describes the relative likelihood that X will take on a given value. The probability of X falling within a specific range is given by the integral of the PDF over that range.
    *   $P(a \le X \le b) = \int_{a}^{b} f(x) dx$
    *   Properties:
        *   $f(x) \ge 0$ for all $x$.
        *   $\int_{-\infty}^{\infty} f(x) dx = 1$ (The total area under the PDF curve is 1).
    *   **Important Note:** For a continuous random variable, the probability of it taking on any single specific value is zero, i.e., $P(X=x) = 0$. This is why we talk about probability over intervals.
    *   *Example (Uniform Distribution):* If X is uniformly distributed between 0 and 1, its PDF is $f(x) = 1$ for $0 \le x \le 1$, and $f(x) = 0$ otherwise. The probability $P(0.2 \le X \le 0.7)$ is $\int_{0.2}^{0.7} 1 dx = [x]_{0.2}^{0.7} = 0.7 - 0.2 = 0.5$.

*   **Cumulative Distribution Function (CDF):** For any random variable X (discrete or continuous), the CDF, denoted by $F(x)$, gives the probability that X is less than or equal to a specific value $x$.
    *   $F(x) = P(X \le x)$
    *   Properties:
        *   $0 \le F(x) \le 1$.
        *   $F(x)$ is non-decreasing.
        *   $\lim_{x \to -\infty} F(x) = 0$
        *   $\lim_{x \to \infty} F(x) = 1$
    *   For a discrete RV: $F(x) = \sum_{k \le x} p(k)$
    *   For a continuous RV: $F(x) = \int_{-\infty}^{x} f(t) dt$
    *   The CDF is useful for calculating probabilities of intervals: $P(a < X \le b) = F(b) - F(a)$.

### 3.3 Common Probability Distributions (Important for ML)

*   **Bernoulli Distribution:** Describes a single trial with two possible outcomes (success/failure), each with a probability $p$.
    *   $P(X=1) = p$, $P(X=0) = 1-p$.
    *   *Use Case:* Modeling a single coin flip, whether a customer clicks on an ad.
*   **Binomial Distribution:** The number of successes in $n$ independent Bernoulli trials, each with probability $p$ of success.
    *   $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$, for $k=0, 1, ..., n$.
    *   *Use Case:* Number of heads in 10 coin flips, number of defective items in a batch of 50.
*   **Poisson Distribution:** Models the number of events occurring in a fixed interval of time or space, given a known average rate of occurrence.
    *   $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$, for $k=0, 1, 2, ...$, where $\lambda$ is the average rate.
    *   *Use Case:* Number of customer arrivals per hour, number of website requests per minute.
*   **Uniform Distribution:** All values within a given interval are equally likely.
    *   *Use Case:* Generating random numbers between 0 and 1 in simulations.
*   **Normal (Gaussian) Distribution:** A bell-shaped curve, characterized by its mean ($\mu$) and standard deviation ($\sigma$). Many natural phenomena follow a normal distribution.
    *   PDF: $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$
    *   *Use Case:* Heights, IQ scores, errors in measurements. Crucial in statistical inference and many ML algorithms.
    *   *Reference:* **Gupta & Kapoor** and **Miller** provide detailed treatments of these distributions.

## 4. Expectation and Variance

These are key measures of central tendency and dispersion for random variables.

### 4.1 Expectation (Mean)

*   **Definition:** The expected value of a random variable is the weighted average of all possible values it can take, where the weights are the probabilities of those values.
    *   For a discrete RV X with PMF $p(x)$: $E[X] = \sum_{x} x \cdot p(x)$
    *   For a continuous RV X with PDF $f(x)$: $E[X] = \int_{-\infty}^{\infty} x \cdot f(x) dx$
*   **Interpretation:** Represents the long-run average value of the random variable.
*   **Properties:**
    *   $E[c] = c$ (Expectation of a constant is the constant itself).
    *   $E[cX] = cE[X]$ (Linearity of Expectation).
    *   $E[X + Y] = E[X] + E[Y]$ (Linearity of Expectation, holds regardless of independence).
    *   $E[g(X)] = \sum g(x)p(x)$ for discrete, $E[g(X)] = \int g(x)f(x)dx$ for continuous.

### 4.2 Variance and Standard Deviation

*   **Variance ($\text{Var}(X)$ or $\sigma^2$):** A measure of the spread or dispersion of the random variable around its mean. It's the expected squared deviation from the mean.
    *   $\text{Var}(X) = E[(X - E[X])^2]$
    *   Alternatively: $\text{Var}(X) = E[X^2] - (E[X])^2$
    *   *Interpretation:* A higher variance means the values are more spread out; a lower variance means they are clustered closer to the mean.
*   **Standard Deviation ($\sigma$):** The square root of the variance. It's often preferred because it's in the same units as the random variable.
    *   $\sigma = \sqrt{\text{Var}(X)}$
*   **Properties:**
    *   $\text{Var}(c) = 0$ (Variance of a constant is zero).
    *   $\text{Var}(cX) = c^2 \text{Var}(X)$
    *   $\text{Var}(X + c) = \text{Var}(X)$
    *   If X and Y are independent: $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$

*   *Example:* Consider a random variable X representing the outcome of rolling a fair die.
    *   $E[X] = 1(1/6) + 2(1/6) + ... + 6(1/6) = 3.5$
    *   $E[X^2] = 1^2(1/6) + 2^2(1/6) + ... + 6^2(1/6) = (1+4+9+16+25+36)/6 = 91/6 \approx 15.17$
    *   $\text{Var}(X) = E[X^2] - (E[X])^2 = 91/6 - (3.5)^2 = 91/6 - 12.25 = (91 - 73.5)/6 = 17.5/6 \approx 2.917$
    *   $\sigma = \sqrt{2.917} \approx 1.708$

*   *Reference:* **Gupta & Kapoor** and **Miller** are excellent resources for understanding expectation and variance calculations for various distributions. **Strang, Introduction to Linear Algebra** implicitly uses concepts related to expected values in vector spaces, though not in a probabilistic context directly.

## 5. Practice Questions and Exercises

1.  **Coin Flip:** You flip a fair coin three times.
    *   a) What is the probability of getting exactly two heads?
    *   b) What is the probability of getting at least one tail?
    *   c) If you get heads on the first flip, what is the probability of getting heads on the second flip?

2.  **Urn Problem:** An urn contains 5 red balls and 3 blue balls. You draw two balls without replacement.
    *   a) What is the probability that the first ball drawn is red?
    *   b) What is the probability that both balls drawn are red?
    *   c) What is the probability that the second ball drawn is blue, given the first ball was red?

3.  **Medical Diagnosis:** A rare disease affects 0.1% of the population. A diagnostic test has a 99% sensitivity (correctly identifies 99% of those with the disease) and a 2% false positive rate (incorrectly identifies 2% of those without the disease as having it).
    *   a) What is the probability that a randomly selected person tests positive?
    *   b) If a person tests positive, what is the probability they actually have the disease?

4.  **Random Variable:** Let X be a discrete random variable with the following PMF:
    *   $P(X=1) = 0.2$
    *   $P(X=2) = 0.5$
    *   $P(X=3) = 0.3$
    *   a) Calculate $E[X]$.
    *   b) Calculate $\text{Var}(X)$.

5.  **Continuous RV:** Let X be a continuous random variable with PDF $f(x) = 2x$ for $0 \le x \le 1$, and $f(x) = 0$ otherwise.
    *   a) Verify that this is a valid PDF.
    *   b) Calculate $P(0.2 \le X \le 0.7)$.
    *   c) Calculate $E[X]$.

---

## Answers to Practice Questions

1.  **Coin Flip:**
    *   Sample Space (H=Heads, T=Tails): {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}. Total 8 outcomes.
    *   a) Exactly two heads: {HHT, HTH, THH}. Probability = 3/8.
    *   b) At least one tail: This is the complement of getting all heads (HHH). P(at least one tail) = 1 - P(HHH) = 1 - 1/8 = 7/8.
    *   c) The coin flips are independent. The probability of getting heads on the second flip is still 1/2, regardless of the first flip.

2.  **Urn Problem:** (5 Red, 3 Blue. Total 8 balls)
    *   a) $P(\text{1st is Red}) = 5/8$.
    *   b) $P(\text{Both Red}) = P(\text{1st is Red}) * P(\text{2nd is Red | 1st is Red})$
        *   After drawing one red ball, there are 4 red balls left and 7 total balls.
        *   $P(\text{Both Red}) = (5/8) * (4/7) = 20/56 = 5/14$.
    *   c) $P(\text{2nd is Blue | 1st is Red})$. After drawing one red ball, there are 3 blue balls left and 7 total balls. So, the probability is 3/7.

3.  **Medical Diagnosis:**
    *   Let D = Has Disease, $\neg D$ = Does not have Disease, T = Tests Positive.
    *   $P(D) = 0.001$, $P(\neg D) = 0.999$
    *   $P(T|D) = 0.99$ (Sensitivity)
    *   $P(T|\neg D) = 0.02$ (False Positive Rate)
    *   a) $P(T) = P(T|D)P(D) + P(T|\neg D)P(\neg D)$
        *   $P(T) = (0.99 * 0.001) + (0.02 * 0.999) = 0.00099 + 0.01998 = 0.02097$
        *   The probability of testing positive is about 2.1%.
    *   b) Using Bayes' Theorem: $P(D|T) = \frac{P(T|D)P(D)}{P(T)}$
        *   $P(D|T) = \frac{0.99 * 0.001}{0.02097} = \frac{0.00099}{0.02097} \approx 0.0472$
        *   If a person tests positive, the probability they actually have the disease is about 4.7%.

4.  **Random Variable:**
    *   $P(X=1) = 0.2$, $P(X=2) = 0.5$, $P(X=3) = 0.3$
    *   a) $E[X] = (1 * 0.2) + (2 * 0.5) + (3 * 0.3) = 0.2 + 1.0 + 0.9 = 2.1$
    *   b) First, calculate $E[X^2]$:
        *   $E[X^2] = (1^2 * 0.2) + (2^2 * 0.5) + (3^2 * 0.3) = (1 * 0.2) + (4 * 0.5) + (9 * 0.3) = 0.2 + 2.0 + 2.7 = 4.9$
        *   $\text{Var}(X) = E[X^2] - (E[X])^2 = 4.9 - (2.1)^2 = 4.9 - 4.41 = 0.49$

5.  **Continuous RV:** $f(x) = 2x$ for $0 \le x \le 1$.
    *   a) Verification:
        *   $f(x) \ge 0$ for $0 \le x \le 1$.
        *   $\int_{0}^{1} 2x dx = [x^2]_{0}^{1} = 1^2 - 0^2 = 1$. It's a valid PDF.
    *   b) $P(0.2 \le X \le 0.7) = \int_{0.2}^{0.7} 2x dx = [x^2]_{0.2}^{0.7} = (0.7)^2 - (0.2)^2 = 0.49 - 0.04 = 0.45$.
    *   c) $E[X] = \int_{0}^{1} x \cdot (2x) dx = \int_{0}^{1} 2x^2 dx = [\frac{2}{3}x^3]_{0}^{1} = \frac{2}{3}(1)^3 - \frac{2}{3}(0)^3 = 2/3$.

## 6. Important Points to Remember

*   **Probability quantifies uncertainty.** It's a fundamental tool for AI and Data Science.
*   **Sample space** is the set of all possible outcomes. **Events** are subsets of the sample space.
*   **Conditional probability** ($P(A|B)$) is crucial when the occurrence of one event affects another.
*   **Bayes' Theorem** allows us to update our beliefs with new evidence and is central to many AI applications (e.g., spam filters, Bayesian networks).
*   **Random variables** (discrete and continuous) allow us to model numerical outcomes of random experiments.
*   **PMF (discrete) and PDF (continuous)** describe the probability distributions of random variables.
*   **Expectation** is the average value, and **Variance/Standard Deviation** measure the spread of a random variable.
*   Understanding common probability distributions (Bernoulli, Binomial, Poisson, Normal) is essential for building and interpreting statistical models in AI/DS.
*   **Independence** is a key assumption that simplifies calculations, but real-world data often involves dependencies.

This module provides the foundational mathematical language needed to understand many machine learning concepts, including classification, regression, and probabilistic modeling.
