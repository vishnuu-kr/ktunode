---
title: "Probability Review - Basic probability theory, Random variables and distributions, Linearity of expectation."
subject: "RANDOMIZED ALGORITHMS"
module: "Module 1: Basics of Randomization "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd56"
status: "completed"
scrapedAt: "2026-05-20T16:57:05.951Z"
---
## RANDOMIZED ALGORITHMS - Module 1: Basics of Randomization - Probability Review

**Topic:** Basic probability theory, Random variables and distributions, Linearity of expectation.

**Learning Outcomes:**

*   Understand basic probability theory concepts.
*   Define and understand random variables and probability distributions (discrete and continuous).
*   Apply the principle of linearity of expectation to solve problems.

---

**I. Basic Probability Theory**

*   **Definition of Probability:** The probability of an event *E*, denoted as *P(E)*, is a measure of the likelihood that the event will occur.  It's a real number between 0 and 1 (inclusive).

    *   0 ≤ *P(E)* ≤ 1
    *   *P(E) = 0* means event *E* is impossible.
    *   *P(E) = 1* means event *E* is certain.

*   **Sample Space (Ω):** The set of all possible outcomes of a random experiment.  Example: Tossing a coin twice: Ω = {HH, HT, TH, TT}.

*   **Event (E):** A subset of the sample space (Ω). Example: Getting at least one Head when tossing a coin twice: E = {HH, HT, TH}.

*   **Probability of an Event:**  If the sample space is finite and all outcomes are equally likely, then:

    *   *P(E) = |E| / |Ω|* , where |E| is the number of outcomes in event *E* and |Ω| is the number of outcomes in the sample space.

*   **Axioms of Probability:**

    *   **Non-negativity:** For any event *E*, *P(E)* ≥ 0.
    *   **Normalization:** *P(Ω) = 1*.
    *   **Additivity (for mutually exclusive events):** If *E* and *F* are mutually exclusive events (i.e., *E ∩ F = ∅*), then *P(E ∪ F) = P(E) + P(F)*.  More generally, for a countable collection of mutually exclusive events *E<sub>1</sub>, E<sub>2</sub>, E<sub>3</sub>, ...* , *P(∪<sub>i</sub> E<sub>i</sub>) = Σ<sub>i</sub> P(E<sub>i</sub>)*.

*   **Complementary Events:** If *E* is an event, then its complement, denoted by *E<sup>c</sup>* or *E'*, consists of all outcomes in the sample space that are not in *E*.

    *   *P(E<sup>c</sup>) = 1 - P(E)*

*   **Conditional Probability:** The probability of event *E* occurring, given that event *F* has already occurred, is denoted by *P(E|F)*.

    *   *P(E|F) = P(E ∩ F) / P(F)*,  provided *P(F) > 0*.

*   **Independence:** Two events *E* and *F* are independent if the occurrence of one does not affect the probability of the other.

    *   *P(E|F) = P(E)*
    *   *P(F|E) = P(F)*
    *   *P(E ∩ F) = P(E) * P(F)*

*   **Bayes' Theorem:** Relates conditional probabilities.

    *   *P(E|F) = [P(F|E) * P(E)] / P(F)*

**II. Random Variables and Distributions**

*   **Random Variable (RV):** A function that assigns a numerical value to each outcome in the sample space.  It's a mapping *X: Ω → ℝ*.

    *   Think of it as a variable whose value is a numerical outcome of a random phenomenon.
    *   Example: Tossing a coin twice.  X = number of heads. X(HH) = 2, X(HT) = 1, X(TH) = 1, X(TT) = 0.

*   **Types of Random Variables:**

    *   **Discrete Random Variable:**  A random variable that can take on only a finite or countably infinite number of values.  Example: Number of heads in *n* coin tosses.

    *   **Continuous Random Variable:** A random variable that can take on any value within a given range. Example: Height of a person.

*   **Probability Mass Function (PMF):**  For a discrete random variable *X*, the PMF, denoted by *p<sub>X</sub>(x)* or *P(X = x)*, gives the probability that *X* takes on the value *x*.

    *   *p<sub>X</sub>(x) = P(X = x)*
    *   Σ<sub>x</sub> *p<sub>X</sub>(x) = 1*  (Sum of probabilities over all possible values is 1)

*   **Probability Density Function (PDF):** For a continuous random variable *X*, the PDF, denoted by *f<sub>X</sub>(x)*, is a function such that the probability that *X* lies in the interval [*a, b*] is given by the integral of *f<sub>X</sub>(x)* from *a* to *b*.

    *   *P(a ≤ X ≤ b) = ∫<sub>a</sub><sup>b</sup> f<sub>X</sub>(x) dx*
    *   *f<sub>X</sub>(x) ≥ 0* for all *x*
    *   ∫<sub>-∞</sub><sup>∞</sup> *f<sub>X</sub>(x) dx = 1* (The area under the curve is 1)

*   **Cumulative Distribution Function (CDF):**  For any random variable (discrete or continuous) *X*, the CDF, denoted by *F<sub>X</sub>(x)*, gives the probability that *X* is less than or equal to *x*.

    *   *F<sub>X</sub>(x) = P(X ≤ x)*
    *   For discrete RV: *F<sub>X</sub>(x) = Σ<sub>y ≤ x</sub> p<sub>X</sub>(y)*
    *   For continuous RV: *F<sub>X</sub>(x) = ∫<sub>-∞</sub><sup>x</sup> f<sub>X</sub>(t) dt*
    *   *F<sub>X</sub>(x)* is non-decreasing and *0 ≤ F<sub>X</sub>(x) ≤ 1*.  Also, *lim<sub>x→-∞</sub> F<sub>X</sub>(x) = 0* and *lim<sub>x→∞</sub> F<sub>X</sub>(x) = 1*.

*   **Important Discrete Distributions:**

    *   **Bernoulli Distribution:** Models a single trial with two outcomes (success/failure).  Parameter: *p* (probability of success). *P(X = 1) = p*, *P(X = 0) = 1 - p*.

    *   **Binomial Distribution:** Models the number of successes in *n* independent Bernoulli trials. Parameters: *n* (number of trials), *p* (probability of success).  *P(X = k) = (<sup>n</sup>C<sub>k</sub>) * p<sup>k</sup> * (1 - p)<sup>n-k</sup>* , where *<sup>n</sup>C<sub>k</sub> = n! / (k! * (n - k)!)*.

    *   **Geometric Distribution:** Models the number of trials needed to get the first success. Parameter: *p* (probability of success). *P(X = k) = (1 - p)<sup>k-1</sup> * p*.

*   **Important Continuous Distributions:**

    *   **Uniform Distribution:**  All values within a given interval are equally likely. Parameters: *a* (lower bound), *b* (upper bound). *f<sub>X</sub>(x) = 1 / (b - a)* for *a ≤ x ≤ b*, and *0* otherwise.

    *   **Exponential Distribution:** Models the time until an event occurs in a Poisson process. Parameter: λ (rate parameter). *f<sub>X</sub>(x) = λe<sup>-λx</sup>* for *x ≥ 0*, and *0* otherwise.

    *   **Normal (Gaussian) Distribution:**  Bell-shaped curve, often used to model real-valued random variables whose distribution is not known exactly. Parameters: μ (mean), σ<sup>2</sup> (variance). *f<sub>X</sub>(x) = (1 / (σ√(2π))) * e<sup>-((x - μ)<sup>2</sup> / (2σ<sup>2</sup>))*.

*   **Expected Value (Mean):**  A measure of the "average" value of a random variable.

    *   For discrete RV: *E[X] = Σ<sub>x</sub> x * p<sub>X</sub>(x)*
    *   For continuous RV: *E[X] = ∫<sub>-∞</sub><sup>∞</sup> x * f<sub>X</sub>(x) dx*

*   **Variance:**  A measure of the spread or dispersion of a random variable around its expected value.

    *   *Var(X) = E[(X - E[X])<sup>2</sup>] = E[X<sup>2</sup>] - (E[X])<sup>2</sup>*

*   **Standard Deviation:** The square root of the variance. *SD(X) = √Var(X)*

**III. Linearity of Expectation**

*   **Definition:** For any random variables *X<sub>1</sub>, X<sub>2</sub>, ..., X<sub>n</sub>* (they don't need to be independent) and any constants *a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub>*, the expected value of the linear combination of these random variables is equal to the linear combination of their expected values.

    *   *E[a<sub>1</sub>X<sub>1</sub> + a<sub>2</sub>X<sub>2</sub> + ... + a<sub>n</sub>X<sub>n</sub>] = a<sub>1</sub>E[X<sub>1</sub>] + a<sub>2</sub>E[X<sub>2</sub>] + ... + a<sub>n</sub>E[X<sub>n</sub>]*

*   **Key Idea:** Linearity of expectation is a *very* powerful tool because it holds *regardless* of whether the random variables are independent.

*   **Application:** Often used to calculate the expected value of a complex random variable by breaking it down into a sum of simpler random variables (indicator random variables).

*   **Indicator Random Variable:** A random variable that takes on the value 1 if a specific event occurs and 0 otherwise.

    *   *I<sub>E</sub> = 1* if event *E* occurs, *0* otherwise.
    *   *E[I<sub>E</sub>] = P(E)*

**Examples and Exercises**

1.  **Problem:** You flip a fair coin 10 times.  What is the expected number of heads?

    *   **Solution:**
        *   Let *X* be the random variable representing the number of heads.
        *   Let *X<sub>i</sub>* be an indicator random variable such that *X<sub>i</sub> = 1* if the *i*-th flip is heads, and *X<sub>i</sub> = 0* otherwise.  *P(X<sub>i</sub> = 1) = 1/2*.
        *   Then, *X = X<sub>1</sub> + X<sub>2</sub> + ... + X<sub>10</sub>*.
        *   By linearity of expectation: *E[X] = E[X<sub>1</sub>] + E[X<sub>2</sub>] + ... + E[X<sub>10</sub>]*.
        *   Since each coin flip is fair, *E[X<sub>i</sub>] = P(X<sub>i</sub> = 1) = 1/2*.
        *   Therefore, *E[X] = 10 * (1/2) = 5*.
        *   The expected number of heads is 5.

2.  **Problem:** Suppose you have an array *A* of *n* distinct numbers. You pick two elements *i* and *j* uniformly at random with replacement and compare *A[i]* and *A[j]*. What is the expected number of times you pick elements where *i = j* in *m* trials?

    *   **Solution:**
        *   Let *X* be the number of times you pick elements where *i = j*.
        *   Let *X<sub>k</sub>* be an indicator random variable such that *X<sub>k</sub> = 1* if *i = j* on the *k*-th trial, and *X<sub>k</sub> = 0* otherwise.
        *   *P(X<sub>k</sub> = 1) = 1/n* (since there are n possible pairs for i and j with replacement and there are n cases when i = j)
        *   Then, *X = X<sub>1</sub> + X<sub>2</sub> + ... + X<sub>m</sub>*.
        *   By linearity of expectation: *E[X] = E[X<sub>1</sub>] + E[X<sub>2</sub>] + ... + E[X<sub>m</sub>]*.
        *   Since *E[X<sub>k</sub>] = P(X<sub>k</sub> = 1) = 1/n*.
        *   Therefore, *E[X] = m * (1/n) = m/n*.

3.  **Problem:**  A hat contains *n* slips of paper, each with a different number from 1 to *n*. You draw a slip at random, look at the number, and replace the slip.  You repeat this *k* times.  What is the expected number of times you draw the number 1?

    *   **Solution:**
        *   Let X be the number of times you draw the number 1.
        *   Let *X<sub>i</sub>* be an indicator random variable such that *X<sub>i</sub> = 1* if you draw the number 1 on the *i*-th draw, and *X<sub>i</sub> = 0* otherwise.
        *   *P(X<sub>i</sub> = 1) = 1/n*.
        *   Then, *X = X<sub>1</sub> + X<sub>2</sub> + ... + X<sub>k</sub>*.
        *   By linearity of expectation: *E[X] = E[X<sub>1</sub>] + E[X<sub>2</sub>] + ... + E[X<sub>k</sub>]*.
        *   Since *E[X<sub>i</sub>] = P(X<sub>i</sub> = 1) = 1/n*.
        *   Therefore, *E[X] = k * (1/n) = k/n*.

4.  **Exercise:**  You roll a fair six-sided die twice. What is the expected value of the sum of the two rolls?

    *   **Answer:** 7

5.  **Exercise:**  You have a bag with 5 red balls and 3 blue balls. You randomly draw two balls without replacement. What is the probability that both balls are red?

    *   **Answer:** 5/14

**Important Points to Remember:**

*   Probability is a fundamental concept in randomized algorithms.
*   Understanding different types of random variables and their distributions is crucial.
*   Linearity of expectation is a powerful technique for calculating expected values, especially when dealing with sums of random variables.
*   Indicator random variables are often useful when applying linearity of expectation.
*   Remember that linearity of expectation holds even when the random variables are dependent.

---
These notes cover the basics of probability theory, random variables and distributions, and linearity of expectation, with examples and exercises to reinforce understanding. This foundation is essential for studying randomized algorithms.
