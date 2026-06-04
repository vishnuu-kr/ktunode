---
title: "Fuzzy Reasoning – Generalized Modus Ponens (GMP) and Generalized Modus Tollens (GMT)."
subject: "FUZZY SYSTEMS"
module: "Module 2: Fuzzy Relations :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c4be"
status: "completed"
scrapedAt: "2026-05-20T17:06:15.880Z"
---
# Fuzzy Systems: Module 2 - Fuzzy Relations

## Topic: Fuzzy Reasoning – Generalized Modus Ponens (GMP) and Generalized Modus Tollens (GMT)

### 1. Introduction to Fuzzy Reasoning

Fuzzy reasoning is a method of inferring conclusions from fuzzy premises and fuzzy rules. It's a crucial aspect of fuzzy logic systems that allows for handling imprecise and uncertain information. Unlike classical logic, which deals with binary truth values (true or false), fuzzy reasoning operates with degrees of truth.

The core of fuzzy reasoning lies in extending classical inference rules to the fuzzy domain. This module focuses on two fundamental inference rules: Generalized Modus Ponens (GMP) and Generalized Modus Tollens (GMT).

### 2. Generalized Modus Ponens (GMP)

**2.1 Classical Modus Ponens (MP)**

Before delving into GMP, let's recall classical Modus Ponens:

*   **Premise 1:** If P, then Q. ($P \rightarrow Q$)
*   **Premise 2:** P is true. (P)
*   **Conclusion:** Therefore, Q is true. (Q)

**2.2 Fuzzy Modus Ponens (FMP)**

Fuzzy Modus Ponens extends this to fuzzy sets and fuzzy propositions. It allows us to infer a conclusion about a consequent variable based on a fuzzy observation of an antecedent variable and a fuzzy implication rule.

**2.3 Key Components of GMP**

*   **Fuzzy Implication Rule:** This is typically expressed as a fuzzy relation $R$ on the Cartesian product of the antecedent and consequent linguistic variables. It defines the relationship between the fuzzy sets of the antecedent and consequent. A common form is $A \rightarrow B$, where $A$ and $B$ are fuzzy sets.
*   **Fuzzy Observation (Input):** This is a fuzzy set $A'$ representing the observed state of the antecedent variable.
*   **Composition Operator:** This is used to combine the fuzzy observation $A'$ with the fuzzy implication rule $R$ to derive the fuzzy conclusion about the consequent variable. Common composition operators are the **Max-Min** (or Sup-Min) and **Max-Product** (or Sup-Product) compositions.

**2.4 The Generalized Modus Ponens (GMP) Process**

The GMP process can be summarized as follows:

1.  **Represent the Rule:** A fuzzy rule is typically of the form "IF antecedent is $A$ THEN consequent is $B$". This can be represented as a fuzzy relation $R_{AB}$ on the universe of discourse $U \times V$ (where $U$ is the antecedent domain and $V$ is the consequent domain). A common way to construct $R_{AB}$ is using implication operators (e.g., Mamdani implication, Larsen implication). For instance, using the Mamdani implication:
    $R_{AB}(u, v) = A(u) \odot B(v)$
    where $\odot$ is a t-norm (e.g., $\min$, $\times$).

2.  **Represent the Observation:** The fuzzy observation is a fuzzy set $A'$ on the antecedent domain $U$.

3.  **Apply the Composition Operator:** The fuzzy conclusion $B'$ on the consequent domain $V$ is obtained by composing the observation $A'$ with the fuzzy relation $R_{AB}$ using a composition operator.

    *   **Max-Min Composition (Sup-Min):**
        $B'(v) = \sup_{u \in U} [A'(u) \min R_{AB}(u, v)]$
        This is equivalent to:
        $B'(v) = \sup_{u \in U} [A'(u) \min (A(u) \odot B(v))]$

    *   **Max-Product Composition (Sup-Product):**
        $B'(v) = \sup_{u \in U} [A'(u) \times R_{AB}(u, v)]$
        This is equivalent to:
        $B'(v) = \sup_{u \in U} [A'(u) \times (A(u) \odot B(v))]$

    The resulting $B'$ is the activated fuzzy set for the consequent, which is then typically defuzzified to obtain a crisp output.

**2.5 Example of GMP**

Let's consider a simple example:

*   **Rule:** IF temperature IS **Hot** THEN fan\_speed IS **Fast**.
    *   Antecedent variable: Temperature ($U = \{10, 20, 30, 40, 50\}$ degrees Celsius)
    *   Consequent variable: Fan Speed ($V = \{0, 1, 2, 3, 4\}$ RPM)
    *   Fuzzy set $A$ (Hot):  e.g., a triangular or trapezoidal membership function centered around higher temperatures.
    *   Fuzzy set $B$ (Fast): e.g., a membership function centered around higher RPMs.

    Let's assume the fuzzy relation $R_{Hot \rightarrow Fast}$ has been pre-computed (e.g., using Mamdani implication $R(u,v) = \min(A(u), B(v))$).

*   **Observation:** Temperature IS **Very Hot**.
    *   Fuzzy set $A'$ (Very Hot): A fuzzy set on the temperature domain, typically a scaled-down version of $A$ or a different fuzzy set entirely, representing a higher degree of "hotness". Let's assume $A'(u)$ represents the membership of a specific temperature observation. For simplicity, let's consider a crisp observation: Temperature is 45 degrees Celsius.

    In a typical fuzzy inference system, the input is mapped to a membership degree for the antecedent fuzzy set. So, if the actual temperature is 45, and the membership function for "Hot" is $\mu_{Hot}(45)$, this value becomes our $A'(u)$.

Let's consider a simplified scenario with discrete values for clarity.

*   **Rule:** IF $x$ IS $A$ THEN $y$ IS $B$.
    *   $A = \{0.2/1, 0.7/2, 1.0/3, 0.5/4\}$
    *   $B = \{0.1/10, 0.4/20, 0.8/30, 1.0/40\}$
    *   Let's assume a **Mamdani implication** is used: $R(x, y) = \min(A(x), B(y))$.

*   **Observation:** $x$ IS $A'$.
    *   $A' = \{0.3/1, 0.8/2, 0.9/3, 0.4/4\}$

We want to find $B'$ using **Max-Min composition**:
$B'(y) = \sup_{x} [\min(A'(x), R(x, y))]$
$B'(y) = \sup_{x} [\min(A'(x), \min(A(x), B(y)))]$

Let's calculate $B'(y)$ for a specific value, say $y=30$.
$B'(30) = \sup_{x \in \{1,2,3,4\}} [\min(A'(x), \min(A(x), B(30)))]$

We know $B(30) = 0.8$.
$B'(30) = \sup_{x \in \{1,2,3,4\}} [\min(A'(x), \min(A(x), 0.8))]$

*   For $x=1$: $\min(A'(1), \min(A(1), 0.8)) = \min(0.3, \min(0.2, 0.8)) = \min(0.3, 0.2) = 0.2$
*   For $x=2$: $\min(A'(2), \min(A(2), 0.8)) = \min(0.8, \min(0.7, 0.8)) = \min(0.8, 0.7) = 0.7$
*   For $x=3$: $\min(A'(3), \min(A(3), 0.8)) = \min(0.9, \min(1.0, 0.8)) = \min(0.9, 0.8) = 0.8$
*   For $x=4$: $\min(A'(4), \min(A(4), 0.8)) = \min(0.4, \min(0.5, 0.8)) = \min(0.4, 0.5) = 0.4$

$B'(30) = \max(0.2, 0.7, 0.8, 0.4) = 0.8$

This indicates that the membership of the consequent $y$ being 30 is 0.8, given the rule and the observation.

**2.6 Important Note on GMP:**
GMP is the backbone of Mamdani-type fuzzy inference systems. It allows for the "firing strength" of a rule (determined by the observation's membership in the antecedent) to modulate the consequent fuzzy set.

### 3. Generalized Modus Tollens (GMT)

**3.1 Classical Modus Tollens (MT)**

Classical Modus Tollens is:

*   **Premise 1:** If P, then Q. ($P \rightarrow Q$)
*   **Premise 2:** Q is false. ($\neg Q$)
*   **Conclusion:** Therefore, P is false. ($\neg P$)

**3.2 Fuzzy Modus Tollens (FMT)**

Fuzzy Modus Tollens allows us to infer the state of an antecedent variable given an observation about the consequent variable and a fuzzy implication rule. It's useful for diagnostic or inverse reasoning.

**3.3 The Generalized Modus Tollens (GMT) Process**

The GMT process is analogous to GMP but with the roles of antecedent and consequent reversed in terms of the inference direction.

1.  **Represent the Rule:** As before, the rule "IF antecedent is $A$ THEN consequent is $B$" is represented by a fuzzy relation $R_{AB}$ on $U \times V$.
    $R_{AB}(u, v) = A(u) \odot B(v)$

2.  **Represent the Observation:** The fuzzy observation is a fuzzy set $B'$ on the consequent domain $V$. This represents the observed state of the consequent.

3.  **Apply the Composition Operator (Backward Reasoning):** We want to find the fuzzy conclusion $A'$ on the antecedent domain $U$. This is achieved by composing the observed consequent $B'$ with the *inverse* relation $R_{AB}^{-1}$ or by using a specific GMT operator.

    A common formulation for GMT using the **Max-Min composition** is:
    $A'(u) = \sup_{v \in V} [\min(B'(v), R_{AB}(u, v))]$
    Substituting the relation:
    $A'(u) = \sup_{v \in V} [\min(B'(v), A(u) \odot B(v))]$

    In this formula, $B'(v)$ is the membership degree of the observed consequent, and we are looking for the membership degree of the antecedent $A'(u)$.

**3.4 Example of GMT**

Let's use the same fuzzy sets from the GMP example, but now we'll infer the antecedent from the consequent.

*   **Rule:** IF $x$ IS $A$ THEN $y$ IS $B$.
    *   $A = \{0.2/1, 0.7/2, 1.0/3, 0.5/4\}$
    *   $B = \{0.1/10, 0.4/20, 0.8/30, 1.0/40\}$
    *   **Mamdani implication**: $R(x, y) = \min(A(x), B(y))$.

*   **Observation:** $y$ IS $B'$.
    *   Let $B' = \{0.2/10, 0.7/20, 0.5/30, 0.1/40\}$ (This represents the observed "degree" of $y$ being at these values).

We want to find $A'$ using **Max-Min composition** for GMT:
$A'(x) = \sup_{y \in \{10,20,30,40\}} [\min(B'(y), R(x, y))]$
$A'(x) = \sup_{y \in \{10,20,30,40\}} [\min(B'(y), \min(A(x), B(y)))]$

Let's calculate $A'(x)$ for a specific value, say $x=2$.
$A'(2) = \sup_{y \in \{10,20,30,40\}} [\min(B'(y), \min(A(2), B(y)))]$

We know $A(2) = 0.7$.
$A'(2) = \sup_{y \in \{10,20,30,40\}} [\min(B'(y), \min(0.7, B(y)))]$

*   For $y=10$: $\min(B'(10), \min(0.7, B(10))) = \min(0.2, \min(0.7, 0.1)) = \min(0.2, 0.1) = 0.1$
*   For $y=20$: $\min(B'(20), \min(0.7, B(20))) = \min(0.7, \min(0.7, 0.4)) = \min(0.7, 0.4) = 0.4$
*   For $y=30$: $\min(B'(30), \min(0.7, B(30))) = \min(0.5, \min(0.7, 0.8)) = \min(0.5, 0.7) = 0.5$
*   For $y=40$: $\min(B'(40), \min(0.7, B(40))) = \min(0.1, \min(0.7, 1.0)) = \min(0.1, 0.7) = 0.1$

$A'(2) = \max(0.1, 0.4, 0.5, 0.1) = 0.5$

This means that given the observation about $y$, the inferred membership of $x$ being in the fuzzy set $A$ is 0.5. This is a lower degree than the original membership of $A(2)=0.7$, which is expected in GMT.

**3.5 Important Note on GMT:**
GMT is generally more sensitive to the choice of implication operator and composition operator than GMP. It can lead to a "loss of information" if the observed consequent does not fully activate the rule. The inference of the antecedent tends to be "weaker" than the original rule's antecedent.

### 4. Key Concepts and Definitions

*   **Fuzzy Implication:** A function $I: [0, 1] \times [0, 1] \rightarrow [0, 1]$ that defines the truth value of $A \rightarrow B$. Common examples include:
    *   **Mamdani:** $I_M(a, b) = \min(a, b)$
    *   **Larsen:** $I_L(a, b) = \min(1, \frac{b}{a})$
    *   **Kleene-Dienes:** $I_{KD}(a, b) = \max(\neg a, b)$

*   **Fuzzy Relation:** A fuzzy subset of the Cartesian product of two or more sets. For a rule "IF $x$ is $A$ THEN $y$ is $B$", the fuzzy relation $R_{AB}$ is often defined as $R_{AB}(x, y) = A(x) \odot B(y)$, where $\odot$ is a t-norm.

*   **Composition Operator:** A function used to combine fuzzy sets and fuzzy relations.
    *   **Max-Min (Sup-Min):** $(A \circ R)(y) = \sup_{x} [\min(A(x), R(x, y))]$
    *   **Max-Product (Sup-Product):** $(A \circ R)(y) = \sup_{x} [A(x) \times R(x, y)]$

*   **T-norm:** A binary function $T: [0, 1] \times [0, 1] \rightarrow [0, 1]$ that is associative, commutative, monotonically increasing, and has 1 as an identity element. Examples: $\min$, $\times$ (product), Lukasiewicz t-norm.

*   **Antecedent:** The "IF" part of a fuzzy rule.
*   **Consequent:** The "THEN" part of a fuzzy rule.
*   **Fuzzy Observation:** A fuzzy set representing the input data or observed state of a variable.

### 5. Practice Questions and Exercises

**Question 1:**
Consider the following fuzzy rule: "IF temperature is **Warm** THEN fan\_speed is **Medium**."
Let the fuzzy sets for **Warm** ($A$) and **Medium** ($B$) be defined on the universe of discourse $U = \{10, 20, 30, 40\}$ and $V = \{1, 2, 3, 4\}$ respectively:

$A = \{0.2/10, 0.7/20, 1.0/30, 0.5/40\}$
$B = \{0.1/1, 0.4/2, 0.8/3, 1.0/4\}$

Assume the fuzzy relation $R_{AW \rightarrow MS}$ is formed using the **Larsen implication**: $R(u, v) = \min(1, \frac{B(v)}{A(u)})$.
Calculate the membership degree for fan\_speed being 2 (i.e., $B'(2)$) when the temperature is observed to be 25 degrees Celsius, and the membership of 25 in **Warm** is $\mu_{Warm}(25) = 0.8$. This observation is represented by $A' = \{0.8/20, 0.3/30\}$ (assuming only these values are relevant for the observation of 25 degrees).

**Solution 1:**

First, we need to determine the relevant $A(u)$ values for the observation $A'$.
The observation for temperature 25 is given as $A' = \{0.8/20, 0.3/30\}$. This implies that the input observation is linked to the discrete points 20 and 30 in the antecedent universe.

Let's use **Mamdani implication** for constructing $R$ as it's more common in standard GMP examples, and the question implies a standard GMP setup. If Larsen was strictly required, the problem would be more complex to solve manually without a pre-computed relation. Assuming Mamdani: $R(u, v) = \min(A(u), B(v))$.

The observation is $A'$. The GMP using Max-Min composition is $B'(v) = \sup_{u} [\min(A'(u), R(u, v))]$.
We want to find $B'(2)$.
$B'(2) = \sup_{u \in \{10,20,30,40\}} [\min(A'(u), R(u, 2))]$
$R(u, 2) = \min(A(u), B(2))$
We know $B(2) = 0.4$.
$R(u, 2) = \min(A(u), 0.4)$

The observation $A'$ is given as $\{0.8/20, 0.3/30\}$. This means $A'(20) = 0.8$ and $A'(30) = 0.3$, and $A'(10)=0, A'(40)=0$.

Let's calculate for the relevant $u$ values:
*   For $u=20$:
    $R(20, 2) = \min(A(20), B(2)) = \min(0.7, 0.4) = 0.4$
    $\min(A'(20), R(20, 2)) = \min(0.8, 0.4) = 0.4$

*   For $u=30$:
    $R(30, 2) = \min(A(30), B(2)) = \min(1.0, 0.4) = 0.4$
    $\min(A'(30), R(30, 2)) = \min(0.3, 0.4) = 0.3$

$B'(2) = \max(\min(A'(10), R(10, 2)), \min(A'(20), R(20, 2)), \min(A'(30), R(30, 2)), \min(A'(40), R(40, 2)))$
$B'(2) = \max(\min(0, R(10, 2)), \min(0.8, 0.4), \min(0.3, 0.4), \min(0, R(40, 2)))$
$B'(2) = \max(0, 0.4, 0.3, 0) = 0.4$

Therefore, the membership degree for fan\_speed being 2 is **0.4**.

---

**Question 2:**
Using the same fuzzy rule and fuzzy sets as in Question 1, now perform Generalized Modus Tollens.
Assume the observation about fan\_speed is $B' = \{0.6/2, 0.9/3\}$. This means the fan\_speed is observed to be "somewhat 2" and "very much 3".
Calculate the membership degree for temperature being 30 (i.e., $A'(30)$) using the **Max-Min composition** for GMT.

**Solution 2:**

GMT using Max-Min composition: $A'(u) = \sup_{v} [\min(B'(v), R(u, v))]$.
We want to find $A'(30)$.
$A'(30) = \sup_{v \in \{1,2,3,4\}} [\min(B'(v), R(30, v))]$
$R(30, v) = \min(A(30), B(v))$
We know $A(30) = 1.0$.
$R(30, v) = \min(1.0, B(v)) = B(v)$

The observation is $B' = \{0.6/2, 0.9/3\}$. This means $B'(2) = 0.6$ and $B'(3) = 0.9$, and $B'(1)=0, B'(4)=0$.

Let's calculate for the relevant $v$ values:
*   For $v=2$:
    $R(30, 2) = B(2) = 0.4$
    $\min(B'(2), R(30, 2)) = \min(0.6, 0.4) = 0.4$

*   For $v=3$:
    $R(30, 3) = B(3) = 0.8$
    $\min(B'(3), R(30, 3)) = \min(0.9, 0.8) = 0.8$

$A'(30) = \max(\min(B'(1), R(30, 1)), \min(B'(2), R(30, 2)), \min(B'(3), R(30, 3)), \min(B'(4), R(30, 4)))$
$A'(30) = \max(\min(0, R(30, 1)), \min(0.6, 0.4), \min(0.9, 0.8), \min(0, R(30, 4)))$
$A'(30) = \max(0, 0.4, 0.8, 0) = 0.8$

Therefore, the inferred membership degree for temperature being 30 is **0.8**.

---

**Question 3 (Conceptual):**
When is Generalized Modus Ponens most useful? When is Generalized Modus Tollens most useful?

**Solution 3:**
*   **Generalized Modus Ponens (GMP):** Most useful for **forward reasoning** or **control applications**, where we have fuzzy inputs and fuzzy rules, and we want to determine the fuzzy output. For example, in a temperature control system, if the temperature is "slightly hot", GMP helps determine the appropriate fan speed.

*   **Generalized Modus Tollens (GMT):** Most useful for **backward reasoning**, **diagnosis**, or **pattern recognition**, where we observe a state of the consequent and want to infer the likely state of the antecedent. For example, if the fan speed is observed to be "medium", GMT can help infer the likely temperature range.

---

### 6. Important Points to Remember

*   **GMP** allows inference of the consequent from the antecedent and a rule. It's the basis of **forward reasoning**.
*   **GMT** allows inference of the antecedent from the consequent and a rule. It's the basis of **backward reasoning**.
*   The **composition operator** (typically Max-Min or Max-Product) is crucial in both GMP and GMT for combining fuzzy sets and relations.
*   The **fuzzy implication operator** used to construct the fuzzy relation significantly impacts the results of both GMP and GMT.
*   GMT is generally more prone to information loss and can result in weaker inferences compared to GMP.
*   GMP fires rules based on how well the input matches the antecedent and modifies the consequent accordingly.
*   GMT "back-propagates" the observed consequent through the relation to find matching antecedents.

This concludes the notes on Fuzzy Reasoning: Generalized Modus Ponens (GMP) and Generalized Modus Tollens (GMT).
