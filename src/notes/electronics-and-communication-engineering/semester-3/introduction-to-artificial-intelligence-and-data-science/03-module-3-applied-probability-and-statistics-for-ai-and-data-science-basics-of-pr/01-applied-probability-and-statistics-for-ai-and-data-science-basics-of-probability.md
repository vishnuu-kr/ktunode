---
title: "Applied Probability and Statistics for AI and Data Science : Basics of probability"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe34e"
status: "completed"
scrapedAt: "2026-05-23T17:45:49.760Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

## 1. Introduction

Probability is the cornerstone of understanding uncertainty, a fundamental aspect of real-world data and many AI/Data Science problems. This module introduces the basic concepts of probability, essential for analyzing data, building predictive models, and evaluating the performance of AI systems.

**Key Concept:** **Uncertainty** is inherent in many phenomena we observe and try to model. Probability provides a mathematical framework to quantify and manage this uncertainty.

**Relevance to AI/Data Science:**
*   **Model Building:** Probabilistic models are used extensively in machine learning (e.g., Bayesian networks, Hidden Markov Models).
*   **Decision Making:** Probabilistic reasoning helps in making decisions under uncertainty (e.g., in game playing AI, risk assessment).
*   **Data Analysis:** Understanding the probability distributions of data is crucial for exploratory data analysis and feature engineering.
*   **Evaluation:** Probabilistic metrics are used to assess the reliability and performance of AI models.

**Textbook/Reference Connection:**
*   Gupta & Kapoor (Fundamentals of mathematical statistics) and Fernandez-Granda (Probability and Statistics for Data Science) are primary resources for the mathematical foundations of probability.
*   Miller (Statistics For Data Science) and Evans & Rosenthal (Probability and Statistics - The Science of Uncertainty) provide applied perspectives relevant to data science applications.

## 2. Fundamental Concepts of Probability

### 2.1. Experiment, Outcome, Sample Space, and Event

*   **Experiment:** Any process that results in an outcome that cannot be predicted with certainty.
    *   **Example:** Tossing a coin, rolling a die, predicting if a customer will click an ad.
*   **Outcome:** A single possible result of an experiment.
    *   **Example:** For a coin toss, the outcomes are "Heads" (H) and "Tails" (T). For rolling a die, the outcomes are {1, 2, 3, 4, 5, 6}.
*   **Sample Space (S):** The set of all possible outcomes of an experiment.
    *   **Example:** For a coin toss, S = {H, T}. For rolling a die, S = {1, 2, 3, 4, 5, 6}.
*   **Event (E):** A subset of the sample space. It represents a collection of one or more outcomes.
    *   **Example:**
        *   For a coin toss, the event of getting "Heads" is E = {H}.
        *   For rolling a die, the event of getting an even number is E = {2, 4, 6}.
        *   The event of getting a sum of 7 when rolling two dice.

**Important Point:** The sample space is exhaustive (includes all possibilities) and mutually exclusive (outcomes cannot occur simultaneously if they are distinct).

### 2.2. Types of Events

*   **Simple Event:** An event consisting of only one outcome.
    *   **Example:** Getting a "3" when rolling a die.
*   **Compound Event:** An event consisting of two or more outcomes.
    *   **Example:** Getting an even number when rolling a die.
*   **Certain Event:** An event that is sure to happen. Its probability is 1.
    *   **Example:** Rolling a number less than 7 on a standard die (S = {1, 2, 3, 4, 5, 6}).
*   **Impossible Event:** An event that cannot happen. Its probability is 0.
    *   **Example:** Rolling a 7 on a standard die.
*   **Mutually Exclusive Events:** Two or more events that cannot occur at the same time. If one event occurs, the others cannot.
    *   **Example:** In a single coin toss, getting "Heads" and getting "Tails" are mutually exclusive.
*   **Independent Events:** Two or more events are independent if the occurrence of one does not affect the probability of the other.
    *   **Example:** Tossing a coin twice. The outcome of the first toss does not influence the outcome of the second toss.

### 2.3. Axioms of Probability (Kolmogorov's Axioms)

Probability is a function P that assigns a real number to each event of a sample space S, satisfying:

1.  **Non-negativity:** For any event E, $0 \le P(E) \le 1$. The probability of an event is always between 0 and 1, inclusive.
2.  **Normalization:** The probability of the entire sample space is 1. $P(S) = 1$. This means that some outcome from the sample space must occur.
3.  **Additivity for Mutually Exclusive Events:** For any sequence of mutually exclusive events $E_1, E_2, E_3, ...$, the probability of their union is the sum of their individual probabilities:
    $P(E_1 \cup E_2 \cup E_3 \cup ...) = P(E_1) + P(E_2) + P(E_3) + ...$

**Derived Rule:** For any two events A and B, the probability of their union is:
$P(A \cup B) = P(A) + P(B) - P(A \cap B)$
*   $P(A \cup B)$ is the probability that A or B or both occur.
*   $P(A \cap B)$ is the probability that both A and B occur.

**Important Point:** If A and B are mutually exclusive, then $P(A \cap B) = 0$, and the formula simplifies to $P(A \cup B) = P(A) + P(B)$.

### 2.4. Approaches to Probability

#### 2.4.1. Classical (A Priori) Approach

This approach applies when all outcomes in the sample space are equally likely.
*   **Definition:** If an experiment has *n* equally likely outcomes, and an event E consists of *m* of these outcomes, then the probability of E is:
    $P(E) = \frac{\text{Number of favorable outcomes for E}}{\text{Total number of possible outcomes}} = \frac{m}{n}$

*   **Example:** Rolling a fair die.
    *   Sample space S = {1, 2, 3, 4, 5, 6}, so n = 6.
    *   Event E: getting an even number = {2, 4, 6}, so m = 3.
    *   $P(E) = \frac{3}{6} = \frac{1}{2}$.

*   **Limitations:** Requires outcomes to be equally likely, which is not always the case in real-world data.

#### 2.4.2. Empirical (Frequentist/A Posteriori) Approach

This approach is based on observed frequencies from experiments or historical data.
*   **Definition:** The probability of an event E is the limit of the relative frequency of E as the number of trials approaches infinity. In practice, it's estimated by the proportion of times the event occurred in a large number of trials.
    $P(E) \approx \frac{\text{Number of times event E occurred}}{\text{Total number of trials}}$

*   **Example:** Predicting customer churn.
    *   We have data from 1000 past customers. 150 of them churned.
    *   The empirical probability of a customer churning is $P(\text{Churn}) \approx \frac{150}{1000} = 0.15$.

*   **Relevance to AI/Data Science:** This is the most common approach in data science, as we often work with historical data to estimate probabilities of events.

#### 2.4.3. Subjective Approach

This approach assigns probabilities based on personal beliefs, intuition, or degrees of confidence.
*   **Definition:** The probability of an event reflects an individual's belief in its likelihood.
*   **Example:** A forecaster estimating the probability of a new product's success based on market research and intuition.
*   **Usage:** Used when data is scarce or for events that cannot be easily repeated or quantified.

**Textbook/Reference Connection:** Gupta & Kapoor cover classical and empirical probability extensively. Fernandez-Granda and Miller also emphasize the empirical approach for data science.

## 3. Conditional Probability

**Key Concept:** Conditional probability deals with the probability of an event occurring *given that another event has already occurred*.

### 3.1. Definition

The conditional probability of event A given event B has occurred is denoted as $P(A|B)$ and is defined as:

$P(A|B) = \frac{P(A \cap B)}{P(B)}$

**Provided:** $P(B) > 0$.

*   $P(A \cap B)$ is the probability that both A and B occur.
*   $P(B)$ is the probability that B occurs.

**Intuition:** When we know B has occurred, our sample space effectively shrinks to only the outcomes in B. We are then interested in the proportion of outcomes within B that also satisfy A.

### 3.2. Multiplication Rule

Rearranging the conditional probability formula, we get the multiplication rule:

$P(A \cap B) = P(A|B) P(B)$

This can be extended:
$P(A \cap B \cap C) = P(A|B \cap C) P(B|C) P(C)$

**Example:** Email spam detection.
Let A = "Email is spam" and B = "Email contains the word 'free'".
We want to find the probability that an email is spam AND contains the word "free", $P(A \cap B)$.
Suppose:
*   $P(A) = 0.2$ (20% of emails are spam)
*   $P(B) = 0.3$ (30% of emails contain the word "free")
*   $P(A|B) = 0.6$ (Given an email contains "free", there's a 60% chance it's spam)

Using the multiplication rule:
$P(A \cap B) = P(A|B) P(B) = 0.6 \times 0.3 = 0.18$

So, 18% of emails are spam and contain the word "free".

### 3.3. Independence and Conditional Probability

If events A and B are independent, then the occurrence of B does not affect the probability of A.
Therefore, $P(A|B) = P(A)$.
Substituting this into the multiplication rule:
$P(A \cap B) = P(A|B) P(B) = P(A) P(B)$

This is the definition of independence for two events.

**Textbook/Reference Connection:** All core statistics textbooks (Gupta & Kapoor, Fernandez-Granda, Evans & Rosenthal, Miller) detail conditional probability and the multiplication rule.

## 4. Bayes' Theorem

**Key Concept:** Bayes' Theorem is a fundamental tool for updating probabilities based on new evidence. It relates conditional probabilities and is crucial in many AI applications like classification and inference.

### 4.1. Statement of Bayes' Theorem

If $P(B) > 0$, then for any events A and B:

$P(A|B) = \frac{P(B|A) P(A)}{P(B)}$

Often, we express $P(B)$ using the law of total probability. If $A_1, A_2, ..., A_n$ are mutually exclusive and exhaustive events (i.e., they partition the sample space S), then:

$P(B) = \sum_{i=1}^{n} P(B|A_i) P(A_i)$

Substituting this into Bayes' Theorem:

$P(A_k|B) = \frac{P(B|A_k) P(A_k)}{\sum_{i=1}^{n} P(B|A_i) P(A_i)}$

**Terminology:**
*   $P(A_k)$: Prior probability of hypothesis $A_k$.
*   $P(B|A_k)$: Likelihood of observing evidence B given hypothesis $A_k$ is true.
*   $P(B)$: Probability of the evidence.
*   $P(A_k|B)$: Posterior probability of hypothesis $A_k$ after observing evidence B.

### 4.2. Application Example: Medical Diagnosis

*   **Scenario:** A patient is tested for a rare disease.
*   **Events:**
    *   D: Patient has the disease.
    *   D': Patient does not have the disease.
    *   T: Test result is positive.
    *   T': Test result is negative.

*   **Given Information:**
    *   Prevalence of the disease (prior probability): $P(D) = 0.001$ (0.1% of the population has the disease).
    *   Sensitivity of the test (true positive rate): $P(T|D) = 0.99$ (If a person has the disease, the test is positive 99% of the time).
    *   Specificity of the test (true negative rate): $P(T'|D') = 0.98$ (If a person does not have the disease, the test is negative 98% of the time).
    *   From specificity, the false positive rate is $P(T|D') = 1 - P(T'|D') = 1 - 0.98 = 0.02$.

*   **Question:** If a patient tests positive, what is the probability they actually have the disease? We want to find $P(D|T)$.

*   **Applying Bayes' Theorem:**
    1.  We need $P(T)$, the probability of a positive test. Using the law of total probability:
        $P(T) = P(T|D)P(D) + P(T|D')P(D')$
        First, $P(D') = 1 - P(D) = 1 - 0.001 = 0.999$.
        $P(T) = (0.99 \times 0.001) + (0.02 \times 0.999)$
        $P(T) = 0.00099 + 0.01998 = 0.02097$

    2.  Now apply Bayes' Theorem:
        $P(D|T) = \frac{P(T|D) P(D)}{P(T)}$
        $P(D|T) = \frac{0.99 \times 0.001}{0.02097} = \frac{0.00099}{0.02097} \approx 0.0472$

*   **Interpretation:** Even with a positive test result, the probability of actually having the disease is only about 4.72%. This is because the disease is rare, and the false positive rate (though seemingly low) applied to the large population without the disease contributes significantly to positive test results.

**Relevance to AI/Data Science:**
*   **Spam Filters:** Classifying emails as spam or not spam.
*   **Medical Diagnosis Systems:** Interpreting test results.
*   **Natural Language Processing:** Bayesian inference for language models.
*   **Machine Learning:** Updating model parameters based on new data.

**Textbook/Reference Connection:** Gupta & Kapoor, Fernandez-Granda, and Evans & Rosenthal provide in-depth coverage of Bayes' Theorem and its applications.

## 5. Probability Distributions (Brief Introduction)

While this module focuses on basics, it's essential to acknowledge that probability is often described by distributions.

*   **Random Variable:** A variable whose value is a numerical outcome of a random phenomenon.
    *   **Discrete Random Variable:** Can only take a finite number of values or a countably infinite number of values (e.g., number of heads in 3 coin tosses, number of customers arriving per hour).
    *   **Continuous Random Variable:** Can take any value within a given range (e.g., height of a person, temperature).

*   **Probability Mass Function (PMF):** For a discrete random variable X, $P(X=x)$ gives the probability that X takes on the value x.
*   **Probability Density Function (PDF):** For a continuous random variable X, $f(x)$ describes the relative likelihood for the random variable to take on a given value. The probability of X falling within a range is the integral of the PDF over that range.

**Common Distributions:**
*   **Bernoulli Distribution:** For a single trial with two outcomes (success/failure), e.g., a single coin toss. $P(X=1) = p$, $P(X=0) = 1-p$.
*   **Binomial Distribution:** The number of successes in a fixed number of independent Bernoulli trials, e.g., number of heads in 10 coin tosses.
*   **Poisson Distribution:** The number of events occurring in a fixed interval of time or space, e.g., number of website visits per minute.
*   **Normal (Gaussian) Distribution:** A bell-shaped curve, prevalent in nature and often used to model data that clusters around a mean.

**Textbook/Reference Connection:** Gupta & Kapoor and Fernandez-Granda are excellent sources for understanding various probability distributions.

## 6. Practice Questions

1.  **Question:** You roll a fair six-sided die. What is the probability of rolling a number greater than 4?
    *   **Answer:** The sample space is {1, 2, 3, 4, 5, 6}. The outcomes greater than 4 are {5, 6}. There are 2 favorable outcomes out of 6 total. So, $P(\text{roll > 4}) = \frac{2}{6} = \frac{1}{3}$.

2.  **Question:** A bag contains 5 red balls and 3 blue balls. You draw one ball at random. What is the probability of drawing a blue ball?
    *   **Answer:** Total balls = 5 + 3 = 8. Number of blue balls = 3. $P(\text{Blue}) = \frac{3}{8}$.

3.  **Question:** In a group of 100 students, 60 like coffee, 40 like tea, and 30 like both coffee and tea.
    *   a) What is the probability a randomly selected student likes coffee or tea?
    *   b) What is the probability a randomly selected student likes neither coffee nor tea?
    *   **Answer:**
        *   Let C = likes coffee, T = likes tea.
        *   $P(C) = 60/100 = 0.6$
        *   $P(T) = 40/100 = 0.4$
        *   $P(C \cap T) = 30/100 = 0.3$
        *   a) $P(C \cup T) = P(C) + P(T) - P(C \cap T) = 0.6 + 0.4 - 0.3 = 0.7$.
        *   b) $P(\text{neither C nor T}) = P((C \cup T)') = 1 - P(C \cup T) = 1 - 0.7 = 0.3$.

4.  **Question:** You flip a fair coin twice. What is the probability of getting two heads (HH)?
    *   **Answer:** Sample space S = {HH, HT, TH, TT}. Total outcomes = 4. Favorable outcome = {HH}. $P(HH) = \frac{1}{4}$.
    *   Alternatively, since the flips are independent: $P(HH) = P(\text{Head on 1st flip}) \times P(\text{Head on 2nd flip}) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$.

5.  **Question:** A biased coin has a probability of landing heads of 0.6. If you flip it twice, what is the probability of getting one head and one tail?
    *   **Answer:** The possibilities are HT and TH.
    *   $P(HT) = P(H) \times P(T) = 0.6 \times (1-0.6) = 0.6 \times 0.4 = 0.24$.
    *   $P(TH) = P(T) \times P(H) = (1-0.6) \times 0.6 = 0.4 \times 0.6 = 0.24$.
    *   Since HT and TH are mutually exclusive, $P(\text{one H and one T}) = P(HT) + P(TH) = 0.24 + 0.24 = 0.48$.

6.  **Question:** In a data science class, 80% of students have prior programming experience, and 60% have prior statistics experience. 50% have both.
    *   a) What is the probability that a student has programming experience given they have statistics experience?
    *   b) What is the probability that a student has statistics experience given they have programming experience?
    *   **Answer:**
        *   Let P = prior programming experience, S = prior statistics experience.
        *   $P(P) = 0.80$, $P(S) = 0.60$, $P(P \cap S) = 0.50$.
        *   a) $P(P|S) = \frac{P(P \cap S)}{P(S)} = \frac{0.50}{0.60} = \frac{5}{6} \approx 0.833$.
        *   b) $P(S|P) = \frac{P(P \cap S)}{P(P)} = \frac{0.50}{0.80} = \frac{5}{8} = 0.625$.

7.  **Question:** Using the medical diagnosis example from the notes, if a patient tests negative (T'), what is the probability they do not have the disease (D')? (Hint: Use Bayes' Theorem and the provided sensitivity and specificity).
    *   **Answer:** We want $P(D'|T')$.
    *   We know: $P(D) = 0.001$, $P(D') = 0.999$.
    *   $P(T|D) = 0.99$ (sensitivity), $P(T'|D) = 1 - 0.99 = 0.01$ (false negative).
    *   $P(T'|D') = 0.98$ (specificity), $P(T|D') = 1 - 0.98 = 0.02$ (false positive).
    *   Using Bayes' Theorem: $P(D'|T') = \frac{P(T'|D') P(D')}{P(T')}$
    *   First, find $P(T')$ using the law of total probability:
        $P(T') = P(T'|D) P(D) + P(T'|D') P(D')$
        $P(T') = (0.01 \times 0.001) + (0.98 \times 0.999)$
        $P(T') = 0.00001 + 0.97902 = 0.97903$
    *   Now, $P(D'|T') = \frac{0.98 \times 0.999}{0.97903} = \frac{0.97902}{0.97903} \approx 0.9999898$
    *   Interpretation: If the test is negative, there is an extremely high probability (over 99.99%) that the patient does not have the disease, which makes intuitive sense given the test's high specificity and the disease's rarity.

## 7. Key Points to Remember

*   **Probability quantifies uncertainty.**
*   **Sample Space (S)** is the set of all possible outcomes.
*   **Event (E)** is a subset of S.
*   Probabilities are between 0 and 1 ($0 \le P(E) \le 1$), and $P(S) = 1$.
*   **Mutually Exclusive Events** cannot happen together.
*   **Independent Events** do not affect each other's probabilities.
*   **Conditional Probability $P(A|B)$** is the probability of A given B has occurred.
*   **Bayes' Theorem** is crucial for updating beliefs with new evidence.
*   **Empirical probability** (based on data frequencies) is widely used in AI and Data Science.
*   Understanding probability distributions (like Bernoulli, Binomial, Normal) is essential for modeling data.

This module lays the groundwork for understanding statistical inference and the probabilistic nature of machine learning models. The concepts covered here are directly applicable to AI tasks like classification, prediction, and decision-making under uncertainty, aligning with **CO1, CO3, and CO4** of the course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
