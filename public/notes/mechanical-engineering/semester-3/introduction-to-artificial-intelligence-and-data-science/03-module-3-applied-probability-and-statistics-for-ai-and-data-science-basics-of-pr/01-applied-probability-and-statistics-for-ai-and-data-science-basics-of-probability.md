---
title: "Applied Probability and Statistics for AI and Data Science : Basics of probability"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d92"
status: "completed"
scrapedAt: "2026-05-20T17:49:50.514Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

This module introduces the fundamental concepts of probability, which are essential for understanding and applying various AI and Data Science techniques. Probability provides a framework for quantifying uncertainty, a ubiquitous element in data and decision-making processes.

---

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand and apply the basic axioms and rules of probability.
*   Distinguish between different types of probability (e.g., classical, empirical, subjective).
*   Define and calculate conditional probability and independence.
*   Understand and apply Bayes' Theorem.
*   Recognize and apply the concepts of random variables and probability distributions.

---

## Course Outcomes Alignment

This module directly contributes to the following Course Outcomes:

*   **CO3: Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions.**
    *   Understanding probability is foundational for statistical methods like hypothesis testing, confidence intervals, and regression analysis, which are crucial for data interpretation and decision-making. (Knowledge Level: K3 - Applying)
*   **CO4: Integrate statistical approaches and machine learning techniques to ensure practically feasible solutions in engineering contexts.**
    *   Many machine learning algorithms rely heavily on probabilistic models (e.g., Naive Bayes, Bayesian Networks, probabilistic graphical models). A strong grasp of probability is vital for implementing and understanding these techniques. (Knowledge Level: K3 - Applying)

---

## 1. Introduction to Probability

Probability is the mathematical framework used to measure the likelihood of an event occurring. In AI and Data Science, it's crucial for:

*   **Modeling Uncertainty:** Real-world data is often noisy and incomplete. Probability allows us to model this inherent uncertainty.
*   **Making Predictions:** Probabilistic models can predict the likelihood of future events.
*   **Decision Making Under Uncertainty:** AI systems need to make decisions even when outcomes are not guaranteed.
*   **Understanding Machine Learning Algorithms:** Many algorithms are built upon probabilistic principles.

**Key Concept:** Probability quantifies the chance or likelihood of an event.

---

## 2. Fundamental Concepts of Probability

### 2.1. Experiment, Outcome, and Sample Space

*   **Experiment:** A process or action that produces an observable outcome.
    *   *Example:* Rolling a die, flipping a coin, measuring the height of a person.
*   **Outcome:** A single possible result of an experiment.
    *   *Example:* For rolling a die, an outcome is '3'. For flipping a coin, an outcome is 'Heads'.
*   **Sample Space ($\mathcal{S}$ or $\Omega$):** The set of all possible outcomes of an experiment.
    *   *Example:* For rolling a fair six-sided die, $\mathcal{S} = \{1, 2, 3, 4, 5, 6\}$.
    *   *Example:* For flipping a coin twice, $\mathcal{S} = \{\text{HH, HT, TH, TT}\}$.

### 2.2. Event

*   **Event:** A subset of the sample space; a collection of one or more outcomes. Events are what we are interested in measuring the probability of.
    *   *Example:* For rolling a die, the event of rolling an even number is $E = \{2, 4, 6\}$.
    *   *Example:* For flipping a coin twice, the event of getting exactly one head is $E = \{\text{HT, TH}\}$.

### 2.3. Probability of an Event

The probability of an event $E$, denoted by $P(E)$, is a number between 0 and 1 (inclusive) that represents its likelihood.

*   $P(E) = 0$: The event is impossible.
*   $P(E) = 1$: The event is certain.
*   $0 < P(E) < 1$: The event is possible but not certain.

### 2.4. Axioms of Probability (Kolmogorov's Axioms)

These are the fundamental rules that all probability assignments must satisfy:

1.  **Non-negativity:** For any event $E$, $P(E) \ge 0$.
    *   *Point to Remember:* Probabilities cannot be negative.
2.  **Normalization:** The probability of the entire sample space is 1. $P(\mathcal{S}) = 1$.
    *   *Point to Remember:* Something in the sample space must always happen.
3.  **Additivity (for mutually exclusive events):** If $E_1, E_2, \dots, E_n$ are mutually exclusive events (meaning no two events can occur at the same time, $E_i \cap E_j = \emptyset$ for $i \neq j$), then the probability of their union is the sum of their individual probabilities:
    $P(E_1 \cup E_2 \cup \dots \cup E_n) = P(E_1) + P(E_2) + \dots + P(E_n)$.
    *   *Example:* The probability of rolling a 1 or a 6 on a die is $P(\{1\} \cup \{6\}) = P(\{1\}) + P(\{6\}) = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}$.

### 2.5. Basic Probability Rules Derived from Axioms

*   **Complement Rule:** The probability of an event NOT happening is 1 minus the probability of it happening. If $E^c$ is the complement of event $E$, then $P(E^c) = 1 - P(E)$.
    *   *Example:* The probability of NOT rolling a 6 on a die is $P(E^c) = 1 - P(\{6\}) = 1 - \frac{1}{6} = \frac{5}{6}$.
*   **Addition Rule (for any two events):** For any two events $A$ and $B$, the probability of $A$ or $B$ (or both) occurring is:
    $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
    *   $P(A \cap B)$ is the probability that both $A$ and $B$ occur. This term is subtracted to avoid double-counting the overlap.
    *   *Example:* What is the probability of drawing a King or a Heart from a standard deck of 52 cards?
        *   Let $K$ be the event of drawing a King. $P(K) = \frac{4}{52}$.
        *   Let $H$ be the event of drawing a Heart. $P(H) = \frac{13}{52}$.
        *   The event $K \cap H$ is drawing the King of Hearts. $P(K \cap H) = \frac{1}{52}$.
        *   $P(K \cup H) = P(K) + P(H) - P(K \cap H) = \frac{4}{52} + \frac{13}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13}$.

---

## 3. Types of Probability

There are different interpretations and ways to assign probabilities:

### 3.1. Classical Probability

*   **Definition:** Assumes all outcomes in a finite sample space are equally likely. The probability of an event is the ratio of the number of favorable outcomes to the total number of possible outcomes.
*   **Formula:** $P(E) = \frac{\text{Number of outcomes in } E}{\text{Total number of outcomes in } \mathcal{S}}$
*   **Requirement:** Equally likely outcomes.
*   *Example:* For a fair coin flip, $P(\text{Heads}) = \frac{1}{2}$. For a fair die roll, $P(\text{rolling a 4}) = \frac{1}{6}$.
*   **Reference:** This is the foundational concept often introduced in introductory statistics texts like Gupta & Kapoor.

### 3.2. Empirical (Statistical or Frequentist) Probability

*   **Definition:** Based on observed data from experiments or real-world situations. It's the relative frequency of an event after a large number of trials.
*   **Formula:** $P(E) \approx \frac{\text{Number of times event } E \text{ occurred}}{\text{Total number of trials}}$
*   **Requirement:** Performing experiments or collecting data.
*   *Example:* If a website visitor clicks a specific button 150 times out of 1000 visits, the empirical probability of clicking that button is $P(\text{click}) = \frac{150}{1000} = 0.15$.
*   **Relevance to AI/DS:** This is how probabilities are often estimated in data science from datasets. Aurélien Géron's "Hands-on machine learning" implicitly uses empirical probabilities when discussing data distributions and model performance.
*   **Point to Remember:** The accuracy of empirical probability increases with the number of trials.

### 3.3. Subjective Probability

*   **Definition:** Based on personal belief, intuition, or judgment. It's often used when classical or empirical probabilities are difficult or impossible to determine.
*   *Example:* An expert's assessment of the probability of a new AI model succeeding in a specific market.
*   **Relevance to AI/DS:** While less common for direct algorithm implementation, it can influence the framing of problems or prior beliefs in Bayesian methods.

---

## 4. Conditional Probability and Independence

### 4.1. Conditional Probability

*   **Definition:** The probability of an event $A$ occurring given that another event $B$ has already occurred. It's denoted as $P(A|B)$.
*   **Formula:** $P(A|B) = \frac{P(A \cap B)}{P(B)}$, provided $P(B) > 0$.
    *   This formula tells us that we are now operating within the reduced sample space defined by event $B$.
*   *Example:* What is the probability of drawing a King given that the card drawn is a Heart?
    *   $P(\text{King | Heart}) = \frac{P(\text{King and Heart})}{P(\text{Heart})} = \frac{1/52}{13/52} = \frac{1}{13}$.
*   **Reference:** A core concept covered in all probability and statistics textbooks, including Gupta & Kapoor and Evans & Rosenthal.

### 4.2. Independence of Events

*   **Definition:** Two events $A$ and $B$ are independent if the occurrence of one does not affect the probability of the other occurring.
*   **Condition for Independence:**
    *   $P(A|B) = P(A)$
    *   $P(B|A) = P(B)$
    *   And crucially, $P(A \cap B) = P(A) \cdot P(B)$
*   *Example:*
    *   Drawing two cards from a deck *with replacement*. The outcome of the second draw is independent of the first.
    *   Rolling a fair die twice. The outcome of the first roll is independent of the second.
*   *Non-Example:* Drawing two cards from a deck *without replacement*. The probability of drawing an Ace on the second draw depends on whether an Ace was drawn on the first.
*   **Point to Remember:** Always verify the condition $P(A \cap B) = P(A) \cdot P(B)$ to confirm independence.

---

## 5. Bayes' Theorem

Bayes' Theorem provides a way to update our beliefs about an event based on new evidence. It's fundamental for many AI applications, especially in probabilistic reasoning and Bayesian machine learning.

*   **Derivation:** Start with the definition of conditional probability:
    $P(A|B) = \frac{P(A \cap B)}{P(B)}$
    $P(B|A) = \frac{P(B \cap A)}{P(A)}$
    Since $P(A \cap B) = P(B \cap A)$, we have:
    $P(A|B) \cdot P(B) = P(B|A) \cdot P(A)$
    Rearranging, we get Bayes' Theorem:

*   **Bayes' Theorem:**
    $P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$

*   **Components:**
    *   $P(A|B)$: **Posterior Probability** - The probability of event A given evidence B. This is what we want to find.
    *   $P(B|A)$: **Likelihood** - The probability of observing evidence B given that event A is true.
    *   $P(A)$: **Prior Probability** - Our initial belief in the probability of event A before observing any evidence.
    *   $P(B)$: **Marginal Likelihood** or **Evidence** - The total probability of observing evidence B. This can be calculated using the law of total probability.

*   **Law of Total Probability:** If $A_1, A_2, \dots, A_n$ form a partition of the sample space (i.e., they are mutually exclusive and their union is the entire sample space), then for any event $B$:
    $P(B) = P(B|A_1)P(A_1) + P(B|A_2)P(A_2) + \dots + P(B|A_n)P(A_n)$

*   **Bayes' Theorem with Law of Total Probability:**
    $P(A|B) = \frac{P(B|A) \cdot P(A)}{\sum_{i} P(B|A_i)P(A_i)}$
    (where $A_i$ are the possible states or hypotheses that explain B).

*   **Example: Medical Diagnosis**
    *   Suppose a disease is rare, occurring in 1% of the population ($P(\text{Disease}) = 0.01$).
    *   A test for the disease is 95% accurate for people who have it ($P(\text{Positive Test | Disease}) = 0.95$).
    *   The test also has a 5% false positive rate for people who don't have it ($P(\text{Positive Test | No Disease}) = 0.05$).
    *   What is the probability that a person actually has the disease given they tested positive? $P(\text{Disease | Positive Test})$?

    Let $D$ be the event of having the disease, and $P_T$ be the event of a positive test.
    We have:
    *   $P(D) = 0.01$ (Prior)
    *   $P(D^c) = 0.99$ (Prior for not having the disease)
    *   $P(P_T|D) = 0.95$ (Likelihood of positive test if diseased)
    *   $P(P_T|D^c) = 0.05$ (Likelihood of positive test if not diseased - False Positive)

    Using Bayes' Theorem:
    $P(D|P_T) = \frac{P(P_T|D) \cdot P(D)}{P(P_T)}$

    First, calculate $P(P_T)$ using the Law of Total Probability:
    $P(P_T) = P(P_T|D)P(D) + P(P_T|D^c)P(D^c)$
    $P(P_T) = (0.95)(0.01) + (0.05)(0.99)$
    $P(P_T) = 0.0095 + 0.0495 = 0.059$

    Now, plug into Bayes' Theorem:
    $P(D|P_T) = \frac{(0.95)(0.01)}{0.059} = \frac{0.0095}{0.059} \approx 0.161$

    *   **Interpretation:** Even with a positive test result, the probability of actually having the disease is only about 16.1%. This is because the disease is rare, and the false positive rate, while low, applies to a much larger population of healthy individuals.
*   **Relevance to AI/DS:** Spam filtering (Bayesian classification), medical diagnosis systems, belief networks, and updating model parameters are all applications of Bayes' Theorem. It's a cornerstone of probabilistic AI.
*   **Reference:** "Mathematics for Machine Learning" by Deisenroth et al. provides a strong foundation for Bayesian inference. "Probability and Statistics for Data Science" by Fernandez-Granda is also highly relevant.

---

## 6. Random Variables and Probability Distributions

These concepts extend probability from specific events to mapping outcomes to numerical values and describing the likelihood of those values.

### 6.1. Random Variable (RV)

*   **Definition:** A variable whose value is a numerical outcome of a random phenomenon.
*   **Types:**
    *   **Discrete Random Variable:** Can only take a finite number of values or a countably infinite number of values (e.g., number of heads in 3 coin flips, number of defective items in a batch).
    *   **Continuous Random Variable:** Can take any value within a given range (e.g., height, temperature, time).

### 6.2. Probability Distribution

*   **Definition:** A function that describes the probability of obtaining each possible value for a random variable.
*   **For Discrete RVs: Probability Mass Function (PMF)**
    *   **Definition:** $P(X=x)$ gives the probability that the discrete random variable $X$ takes on the value $x$.
    *   **Properties:**
        *   $0 \le P(X=x) \le 1$ for all $x$.
        *   $\sum_{x} P(X=x) = 1$ (The sum of probabilities over all possible values must be 1).
    *   *Example: Flipping a fair coin twice. Let X be the number of heads.*
        *   Possible values for X: 0, 1, 2.
        *   $P(X=0) = P(\text{TT}) = 0.25$
        *   $P(X=1) = P(\text{HT or TH}) = P(\text{HT}) + P(\text{TH}) = 0.25 + 0.25 = 0.50$
        *   $P(X=2) = P(\text{HH}) = 0.25$
        *   Check: $0.25 + 0.50 + 0.25 = 1$.

*   **For Continuous RVs: Probability Density Function (PDF)**
    *   **Definition:** $f(x)$ is a function such that the probability of the RV $X$ falling within an interval $[a, b]$ is given by the integral of $f(x)$ over that interval: $P(a \le X \le b) = \int_a^b f(x) dx$.
    *   **Properties:**
        *   $f(x) \ge 0$ for all $x$.
        *   $\int_{-\infty}^{\infty} f(x) dx = 1$.
    *   *Point to Remember:* For continuous random variables, the probability of $X$ taking any *single specific value* is zero, i.e., $P(X=x) = 0$. We only talk about probabilities over intervals.
    *   *Example:* The Uniform distribution, where $f(x) = \frac{1}{b-a}$ for $a \le x \le b$, and $f(x)=0$ otherwise. The probability of $X$ being between $a$ and $b$ is $\int_a^b \frac{1}{b-a} dx = \frac{1}{b-a} [x]_a^b = \frac{1}{b-a} (b-a) = 1$.

*   **Reference:** Gupta & Kapoor's "Fundamentals of Mathematical Statistics" and Deisenroth et al.'s "Mathematics for Machine Learning" cover these topics in detail.

---

## 7. Important Points to Remember

*   **Probability is a number between 0 and 1.**
*   **The sum of probabilities for all possible outcomes in a sample space is always 1.**
*   **Mutually Exclusive Events:** $P(A \cup B) = P(A) + P(B)$
*   **General Events:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
*   **Independence:** $P(A \cap B) = P(A) \cdot P(B)$
*   **Conditional Probability:** $P(A|B) = \frac{P(A \cap B)}{P(B)}$
*   **Bayes' Theorem:** Use it to update beliefs with new evidence. Crucial for many AI algorithms.
*   **PMF vs. PDF:** Use PMF for discrete RVs, PDF for continuous RVs.

---

## 8. Practice Questions and Answers

**Question 1:**
You have a bag with 5 red balls and 3 blue balls. You draw one ball at random. What is the probability of drawing a red ball?

**Answer 1:**
*   Total number of balls = 5 (red) + 3 (blue) = 8.
*   Number of red balls = 5.
*   Using classical probability: $P(\text{Red}) = \frac{\text{Number of red balls}}{\text{Total number of balls}} = \frac{5}{8}$.

**Question 2:**
Consider rolling two fair six-sided dice. What is the probability that the sum of the numbers shown is 7?

**Answer 2:**
*   Total possible outcomes = $6 \times 6 = 36$.
*   Outcomes that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). There are 6 such outcomes.
*   $P(\text{Sum is 7}) = \frac{6}{36} = \frac{1}{6}$.

**Question 3:**
From a standard deck of 52 cards, you draw one card. What is the probability that the card is a Heart or a Face Card (Jack, Queen, King)?

**Answer 3:**
*   Let H be the event of drawing a Heart. $P(H) = \frac{13}{52}$.
*   Let F be the event of drawing a Face Card. There are 12 face cards (3 in each suit: J, Q, K). $P(F) = \frac{12}{52}$.
*   The event $H \cap F$ is drawing a Face Card that is also a Heart (Jack of Hearts, Queen of Hearts, King of Hearts). There are 3 such cards. $P(H \cap F) = \frac{3}{52}$.
*   Using the addition rule:
    $P(H \cup F) = P(H) + P(F) - P(H \cap F)$
    $P(H \cup F) = \frac{13}{52} + \frac{12}{52} - \frac{3}{52} = \frac{22}{52} = \frac{11}{26}$.

**Question 4:**
Two events, A and B, are independent. If $P(A) = 0.6$ and $P(B) = 0.3$, what is $P(A \cap B)$?

**Answer 4:**
*   Since A and B are independent, $P(A \cap B) = P(A) \cdot P(B)$.
*   $P(A \cap B) = 0.6 \times 0.3 = 0.18$.

**Question 5:**
A machine produces widgets. 2% of the widgets are defective. A quality control test can identify a defective widget with 98% accuracy (true positive rate). However, it incorrectly flags a good widget as defective 5% of the time (false positive rate). If a widget is flagged as defective by the test, what is the probability that it is actually defective?

**Answer 5:**
*   Let D be the event that a widget is defective. $P(D) = 0.02$.
*   Let $D^c$ be the event that a widget is not defective. $P(D^c) = 1 - 0.02 = 0.98$.
*   Let T be the event that the test flags a widget as defective.
*   $P(T|D) = 0.98$ (True Positive Rate)
*   $P(T|D^c) = 0.05$ (False Positive Rate)

We want to find $P(D|T)$. Using Bayes' Theorem:
$P(D|T) = \frac{P(T|D) \cdot P(D)}{P(T)}$

First, calculate $P(T)$ using the Law of Total Probability:
$P(T) = P(T|D)P(D) + P(T|D^c)P(D^c)$
$P(T) = (0.98)(0.02) + (0.05)(0.98)$
$P(T) = 0.0196 + 0.0490 = 0.0686$

Now, plug into Bayes' Theorem:
$P(D|T) = \frac{(0.98)(0.02)}{0.0686} = \frac{0.0196}{0.0686} \approx 0.2857$

*   **Interpretation:** Even if a widget is flagged as defective, there's only about a 28.6% chance it's actually defective.

---

This module provides the foundational probabilistic understanding necessary for many of the more advanced topics in AI and Data Science. It's essential to master these basics before moving on to probability distributions, statistical inference, and probabilistic modeling.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
