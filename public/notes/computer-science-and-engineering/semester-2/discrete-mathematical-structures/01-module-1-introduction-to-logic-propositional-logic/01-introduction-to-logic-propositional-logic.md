---
title: "Introduction to Logic: Propositional Logic"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 1: Introduction to Logic: Propositional Logic"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5ff3"
status: "completed"
scrapedAt: "2026-05-20T16:31:30.026Z"
---
All right everyone, settle in! Welcome to Discrete Mathematical Structures. I'm really excited to dive into this subject with you. It's the foundation for so much of computer science and mathematics, and once you grasp these building blocks, you'll find yourself able to tackle incredibly complex problems.

Today, we're kicking off **Module 1: Introduction to Logic**, and specifically, we're going to get a solid understanding of **Propositional Logic**. Think of this as learning the basic grammar and sentence structure for making logical arguments. Without this, we can't build anything robust, whether it's a software program or a mathematical proof.

---

### Module 1: Introduction to Logic: Propositional Logic

Our journey into logic begins with understanding how we make statements and how we can determine if those statements are true or false, and how we combine them. This is the essence of propositional logic.

**(Connecting to Course Outcomes):**

As we go through this, keep our **Course Outcomes (COs)** in mind.
*   **CO1** is all about applying logical reasoning. Today's topic, propositional logic, is the very bedrock of that. We'll learn to construct and verify simple logical arguments using propositions and truth tables.
*   While we're not directly dealing with counting (CO2) or sets/functions (CO3, CO4) *yet*, the logical rigor we develop here will be crucial when we tackle those later. Think of this as strengthening your logical muscles before hitting the gym for more complex exercises.

#### What is Logic, Really?

At its heart, logic is the study of reasoning. It's about how we make inferences, how we determine what conclusions necessarily follow from a given set of premises. In discrete mathematics, and especially in computer science, we need this to be precise, unambiguous, and formal. We can't have fuzzy logic when we're designing algorithms or verifying code!

#### The Building Blocks: Propositions

So, what's the fundamental unit we work with in propositional logic? It's the **proposition**.

**Definition:** A proposition is a declarative sentence that is either true or false, but not both.

Let's unpack this.
*   **Declarative sentence:** It needs to be a statement, something that asserts a fact or an idea. Questions, commands, or exclamations aren't propositions.
*   **Either true or false:** This is the crucial part – the "law of excluded middle" in action. There's no middle ground, no "maybe." A proposition has a definite truth value.

**Examples to illustrate:**

*   "The sky is blue." – This is a proposition. (Assuming clear weather, it's true.)
*   "2 + 2 = 4." – This is a proposition. (It's true.)
*   "Paris is the capital of France." – Proposition. (True.)
*   "Go home now!" – Not a proposition. (It's a command.)
*   "What is your name?" – Not a proposition. (It's a question.)
*   "This statement is false." – Ah, a classic! This is a **paradox**, and it's not a proposition because it leads to a contradiction. If it's true, then it must be false, and if it's false, then it must be true. We'll typically avoid such self-referential paradoxes in basic propositional logic.

We often represent propositions with letters like $p$, $q$, $r$, $s$, and so on.

#### Combining Propositions: Logical Connectives (Operators)

Now, individual propositions are useful, but the real power comes from combining them. We use **logical connectives** or **logical operators** to form more complex statements. These are like the conjunctions and adverbs of our logical language.

Here are the fundamental ones:

**1. Negation (NOT)**

*   **Symbol:** $\neg$ (or `~` or `!`)
*   **Meaning:** It reverses the truth value of a proposition. If $p$ is true, $\neg p$ is false. If $p$ is false, $\neg p$ is true.
*   **Example:**
    *   Let $p$ be "The sun is shining." ($p$ is true on a sunny day.)
    *   Then $\neg p$ is "The sun is not shining." ($\neg p$ is false on a sunny day.)

**2. Conjunction (AND)**

*   **Symbol:** $\wedge$ (or `.` or `&`)
*   **Meaning:** The conjunction $p \wedge q$ is true if and only if *both* $p$ and $q$ are true. If either $p$ or $q$ (or both) is false, then $p \wedge q$ is false.
*   **Analogy:** Think of it like needing *both* ingredients for a recipe. If you have flour AND eggs, you can bake. If you're missing flour OR eggs, you can't.
*   **Example:**
    *   Let $p$ be "It is raining."
    *   Let $q$ be "The streets are wet."
    *   $p \wedge q$ is "It is raining and the streets are wet." This statement is true only if it's actually raining AND the streets are wet. If it's not raining, or if it's raining but the streets are somehow dry (maybe it's a desert and it just rained!), then the conjunction is false.
*   **Textbook Insight:** Grimaldi and Ramana discuss these connectives extensively, emphasizing that the "and" operator is central to many logical and computational processes.

**3. Disjunction (OR)**

*   **Symbol:** $\vee$ (or `+`)
*   **Meaning:** The disjunction $p \vee q$ is true if *at least one* of $p$ or $q$ is true. It's only false when *both* $p$ and $q$ are false.
*   **Important Note:** In logic, "OR" is typically **inclusive OR**. This means "A or B" is true even if both A and B are true. Contrast this with "exclusive OR" which we'll see later.
*   **Analogy:** Think of it as "pick one or both." If a restaurant offers "Soup or Salad" with your meal, you can have soup, you can have salad, or you can have both (if they allow it). The only way you *don't* get soup or salad is if they give you neither.
*   **Example:**
    *   Let $p$ be "I will study."
    *   Let $q$ be "I will watch TV."
    *   $p \vee q$ is "I will study or I will watch TV." This statement is true if I study, if I watch TV, or if I do both. It's only false if I do neither.
*   **Common Pitfall:** People often confuse inclusive OR with exclusive OR. Remember, in propositional logic, $\vee$ means inclusive OR unless specified otherwise.

**4. Implication (IF... THEN...)**

*   **Symbol:** $\rightarrow$ (or `⊃`)
*   **Meaning:** The statement $p \rightarrow q$ (read as "if $p$, then $q$" or "$p$ implies $q$") is a bit tricky, especially its truth value when $p$ is false.
    *   If $p$ is true and $q$ is true, then $p \rightarrow q$ is true.
    *   If $p$ is true and $q$ is false, then $p \rightarrow q$ is false. (This is the *only* case where an implication is false.)
    *   If $p$ is false and $q$ is true, then $p \rightarrow q$ is true.
    *   If $p$ is false and $q$ is false, then $p \rightarrow q$ is true.

*   **Let's break down the "false antecedent" cases (when $p$ is false):** Why are these true? This is a common sticking point! Think of an implication as a promise.
    *   **Analogy:** Imagine I promise you: "If you get an A in this course, I will buy you a pizza."
        *   **Case 1: You get an A, and I buy you a pizza.** My promise is kept. (True $\rightarrow$ True = True)
        *   **Case 2: You get an A, but I *don't* buy you a pizza.** I broke my promise. (True $\rightarrow$ False = False) This is the "cheater" case!
        *   **Case 3: You *don't* get an A, and I *do* buy you a pizza.** Did I break my promise? No. My promise was conditional on you getting an A. Since that condition wasn't met, whatever I do afterwards doesn't violate the promise. (False $\rightarrow$ True = True)
        *   **Case 4: You *don't* get an A, and I *don't* buy you a pizza.** Again, my promise was only about what happens *if* you get an A. Since you didn't, my not buying pizza is not a broken promise. (False $\rightarrow$ False = True)

*   **Key Takeaway:** An implication $p \rightarrow q$ is only false when the premise ($p$) is true and the conclusion ($q$) is false. In all other cases, it's true. This is super important for proofs!
*   **Terminology:**
    *   $p$ is the **antecedent** (or hypothesis, premise).
    *   $q$ is the **consequent** (or conclusion).

**5. Biconditional (IF AND ONLY IF)**

*   **Symbol:** $\leftrightarrow$ (or `⇔` or `≡`)
*   **Meaning:** The statement $p \leftrightarrow q$ is true if and only if $p$ and $q$ have the same truth value (i.e., both are true, or both are false).
*   **Analogy:** This is like saying "you get this if and only if you do that." It implies a two-way street. "You get a driver's license if and only if you pass the driving test." This means:
    *   If you pass the test, you get the license. (True $\rightarrow$ True = True)
    *   If you don't pass the test, you don't get the license. (False $\rightarrow$ False = True)
    *   Crucially, it also means:
        *   If you get a license, you must have passed the test. (True $\rightarrow$ True = True)
        *   If you don't get a license, you must not have passed the test. (False $\rightarrow$ False = True)
*   **Relationship to other connectives:** $p \leftrightarrow q$ is equivalent to $(p \rightarrow q) \wedge (q \rightarrow p)$.

**6. Exclusive OR (XOR)**

*   **Symbol:** $\oplus$ (or `XOR`)
*   **Meaning:** The statement $p \oplus q$ is true if and only if *exactly one* of $p$ or $q$ is true. It is false if both are true or both are false.
*   **Analogy:** "You can have cake or ice cream, but not both."
*   **Example:**
    *   Let $p$ be "The light is on."
    *   Let $q$ be "The switch is up."
    *   $p \oplus q$ might be "The light is on XOR the switch is up." This would be true if the light is on and the switch is down, or if the light is off and the switch is up (assuming a faulty circuit where the switch position doesn't match the light status). It would be false if the light is on AND the switch is up, or if the light is off AND the switch is down.

#### Truth Tables: Visualizing Truth Values

Now, how do we systematically figure out the truth value of complex statements formed by these connectives? We use **truth tables**. A truth table lists all possible combinations of truth values for the individual propositions involved and shows the resulting truth value for the compound proposition.

**How to construct a truth table:**

1.  **Identify atomic propositions:** List the basic propositions (e.g., $p$, $q$).
2.  **Determine the number of rows:** If you have $n$ atomic propositions, you'll need $2^n$ rows. This accounts for all possible true/false combinations.
3.  **Fill columns for subexpressions:** Build up the truth table by calculating the truth values for intermediate expressions first.
4.  **Calculate the final expression:** Once you have the truth values for all subexpressions, calculate the truth value for the main compound proposition.

**Example: Truth Table for $p \vee q$ (Disjunction)**

| $p$   | $q$   | $p \vee q$ |
| :---- | :---- | :--------- |
| True  | True  | True       |
| True  | False | True       |
| False | True  | True       |
| False | False | False      |

*   Notice we have $2^2 = 4$ rows for two propositions $p$ and $q$.
*   The last column, $p \vee q$, is true in the first three rows (where at least one of $p$ or $q$ is true) and false only in the last row (where both are false).

**Example: Truth Table for $p \rightarrow q$ (Implication)**

| $p$   | $q$   | $p \rightarrow q$ |
| :---- | :---- | :---------------- |
| True  | True  | True              |
| True  | False | False             |
| False | True  | True              |
| False | False | True              |

*   Remember our promise analogy? This table directly reflects it. The only time the implication is false is when the premise ($p$) is true and the conclusion ($q$) is false.

**Example: Truth Table for $(p \wedge q) \vee (\neg p \wedge \neg q)$**

This looks more complex, but we just follow the steps.
*   Atomic propositions: $p, q$.
*   Number of rows: $2^2 = 4$.
*   We'll need columns for $p$, $q$, $p \wedge q$, $\neg p$, $\neg q$, and finally $(\neg p \wedge \neg q)$.

| $p$   | $q$   | $p \wedge q$ | $\neg p$ | $\neg q$ | $\neg p \wedge \neg q$ | $(p \wedge q) \vee (\neg p \wedge \neg q)$ |
| :---- | :---- | :----------- | :------- | :------- | :--------------------- | :---------------------------------------- |
| True  | True  | True         | False    | False    | False                  | True                                      |
| True  | False | False        | False    | True     | False                  | False                                     |
| False | True  | False        | True     | False    | False                  | False                                     |
| False | False | False        | True     | True     | True                   | True                                      |

Wow, look at that last column! It's True, False, False, True. Does that look familiar? That's the truth table for $p \leftrightarrow q$! So, we've just discovered (or confirmed) that $(p \wedge q) \vee (\neg p \wedge \neg q)$ is logically equivalent to $p \leftrightarrow q$. This is a powerful demonstration of how truth tables can reveal equivalences.

#### Logical Equivalence

Speaking of equivalences, this is a cornerstone of propositional logic.

**Definition:** Two propositions are **logically equivalent** if they have the same truth value for every possible assignment of truth values to their component propositions. We denote logical equivalence by $\equiv$ or $\Leftrightarrow$.

*   **How to check for equivalence:** Construct truth tables for both propositions. If the final columns of their truth tables are identical, they are logically equivalent.
*   **Why is this important?** It means you can substitute one for the other in any larger logical expression without changing the overall truth value. This is the basis of simplifying complex logical statements and proving theorems.

**Important Logical Equivalences (Often seen in textbooks like Grimaldi's):**

These are rules you'll want to become very familiar with. You'll use them constantly!

*   **Commutative Laws:**
    *   $p \vee q \equiv q \vee p$
    *   $p \wedge q \equiv q \wedge p$
*   **Associative Laws:**
    *   $(p \vee q) \vee r \equiv p \vee (q \vee r)$
    *   $(p \wedge q) \wedge r \equiv p \wedge (q \wedge r)$
*   **Distributive Laws:**
    *   $p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r)$
    *   $p \wedge (q \vee r) \equiv (p \wedge q) \vee (p \wedge r)$
    *   *(Think of these like regular algebra's distributive property: $a(b+c) = ab + ac$)*
*   **Identity Laws:**
    *   $p \vee T \equiv T$ (ORing with True is always True)
    *   $p \wedge T \equiv p$ (ANDing with True doesn't change it)
    *   $p \vee F \equiv p$ (ORing with False doesn't change it)
    *   $p \wedge F \equiv F$ (ANDing with False is always False)
    *   *(Here, $T$ represents a proposition that is always true, and $F$ represents a proposition that is always false.)*
*   **Inverse (Complement) Laws:**
    *   $p \vee \neg p \equiv T$ (A proposition is true or it's not true - always true)
    *   $p \wedge \neg p \equiv F$ (A proposition cannot be both true and not true - always false)
*   **Idempotent Laws:**
    *   $p \vee p \equiv p$
    *   $p \wedge p \equiv p$
*   **De Morgan's Laws:** These are HUGE! They tell us how to negate conjunctions and disjunctions.
    *   $\neg (p \wedge q) \equiv \neg p \vee \neg q$ (NOT (p AND q) is equivalent to (NOT p) OR (NOT q))
    *   $\neg (p \vee q) \equiv \neg p \wedge \neg q$ (NOT (p OR q) is equivalent to (NOT p) AND (NOT q))
    *   **Analogy:** If it's NOT true that "you must wear a coat AND gloves", it means either "you don't have to wear a coat" OR "you don't have to wear gloves."
*   **Implication Law:**
    *   $p \rightarrow q \equiv \neg p \vee q$ (This is incredibly useful! It converts implications into OR statements, which are sometimes easier to work with.)
*   **Contrapositive:**
    *   $p \rightarrow q \equiv \neg q \rightarrow \neg p$ (This is fundamental for proof techniques like proof by contrapositive.)
    *   **Example:** "If it is raining, then the ground is wet." is equivalent to "If the ground is not wet, then it is not raining." Both statements have the same truth conditions.
*   **Other Implication Equivalences:**
    *   $p \rightarrow q \equiv \neg q \rightarrow \neg p$ (Contrapositive)
    *   $p \rightarrow q \equiv \neg p \vee q$
    *   $\neg (p \rightarrow q) \equiv p \wedge \neg q$ (The negation of an implication)

**Using Equivalences to Simplify Expressions:**

Let's simplify $\neg (p \vee \neg q)$.
1.  Apply De Morgan's Law: $\neg (p \vee \neg q) \equiv \neg p \wedge \neg (\neg q)$
2.  Apply Double Negation: $\neg (\neg q) \equiv q$
3.  So, $\neg (p \vee \neg q) \equiv \neg p \wedge q$

And there you have it! We've simplified a complex statement into a much simpler one. This skill is invaluable.

#### Tautologies, Contradictions, and Contingencies

Based on their truth tables, propositions can be classified into three types:

1.  **Tautology:** A proposition that is always true, regardless of the truth values of its components. Its truth table column is all "True."
    *   **Example:** $p \vee \neg p$ (Law of excluded middle)
    *   **Why important?** Tautologies are always true statements, the bedrock of logical certainty.
    *   **Textbook mention:** Rosen’s book emphasizes tautologies as the axioms of logical systems.

2.  **Contradiction:** A proposition that is always false, regardless of the truth values of its components. Its truth table column is all "False."
    *   **Example:** $p \wedge \neg p$ (A statement cannot be true and false at the same time)
    *   **Why important?** Contradictions represent impossible situations and are key to proving things by contradiction.

3.  **Contingency:** A proposition that is neither a tautology nor a contradiction. Its truth value depends on the truth values of its components.
    *   **Example:** $p \wedge q$ (This can be true or false depending on $p$ and $q$)

**Example: Is $(p \rightarrow q) \vee (q \rightarrow p)$ a tautology?**

Let's check with a truth table. We know $p \rightarrow q \equiv \neg p \vee q$.
So, $(p \rightarrow q) \vee (q \rightarrow p) \equiv (\neg p \vee q) \vee (\neg q \vee p)$.
Let's build the table:

| $p$   | $q$   | $\neg p$ | $\neg q$ | $\neg p \vee q$ | $\neg q \vee p$ | $(\neg p \vee q) \vee (\neg q \vee p)$ |
| :---- | :---- | :------- | :------- | :-------------- | :-------------- | :-------------------------------------- |
| True  | True  | False    | False    | True            | True            | True                                    |
| True  | False | False    | True     | False           | True            | True                                    |
| False | True  | True     | False    | True            | True            | True                                    |
| False | False | True     | True     | True            | True            | True                                    |

Yes! The last column is all True. So, $(p \rightarrow q) \vee (q \rightarrow p)$ is a tautology. This means that for any two propositions $p$ and $q$, at least one of "if $p$ then $q$" or "if $q$ then $p$" must be true.

#### Normal Forms (Briefly Mentioned)

While we won't delve deeply into this today, it's worth knowing that any compound proposition can be expressed in specific standard forms, like **Disjunctive Normal Form (DNF)** and **Conjunctive Normal Form (CNF)**.

*   **DNF:** An OR of AND terms. E.g., $(p \wedge q) \vee (\neg p \wedge r)$.
*   **CNF:** An AND of OR terms. E.g., $(p \vee q) \wedge (\neg p \vee r)$.

These forms are important for designing logic circuits and for certain proof methods.

#### Applications and Relevance

Why are we spending time on this seemingly abstract stuff?

*   **Computer Science:**
    *   **Digital Logic Design:** The gates in computer circuits (AND gates, OR gates, NOT gates) directly correspond to logical connectives. Understanding propositional logic is fundamental to designing and analyzing these circuits.
    *   **Programming:** Conditional statements (`if-then-else`), logical operators in programming languages ( `&&`, `||`, `!`), and boolean algebra are direct applications.
    *   **Database Queries:** The WHERE clauses in SQL use logical connectives.
    *   **Artificial Intelligence:** Knowledge representation and reasoning systems rely heavily on logic.
    *   **Algorithm Correctness:** Proving that an algorithm works correctly often involves formal logical reasoning.
*   **Mathematics:**
    *   **Proof Writing:** This is the foundation of all mathematical proofs. Mastering propositional logic helps you construct sound and valid arguments. (Connects strongly to **CO1**).
*   **General Reasoning:** It hones your ability to think clearly, identify assumptions, and draw valid conclusions in any field.

---

### Summary and Key Takeaways

Alright, let's recap what we've covered. This is critical for your understanding and for exam preparation!

*   **Propositions:** Declarative sentences that are strictly true or false.
*   **Logical Connectives:** $\neg$ (NOT), $\wedge$ (AND), $\vee$ (OR), $\rightarrow$ (IF...THEN...), $\leftrightarrow$ (IF AND ONLY IF), $\oplus$ (XOR). Each has a precise definition of how it combines truth values.
*   **Truth Tables:** Your indispensable tool for analyzing the truth values of compound propositions and for determining logical equivalence. Remember $2^n$ rows for $n$ propositions.
*   **Logical Equivalence:** Propositions with identical truth tables. Crucial for simplification and substitution. **De Morgan's Laws** and the **Implication Law** ($\boldsymbol{p \rightarrow q \equiv \neg p \vee q}$) are your best friends here.
*   **Tautologies (always true), Contradictions (always false), Contingencies (depend on components).** Knowing how to identify these is key.
*   **The implication $p \rightarrow q$ is FALSE only when $p$ is TRUE and $q$ is FALSE.** This is probably the most common place students make mistakes, so internalize this!

**(Connecting back to COs):** Everything we did today directly supports **CO1**. We learned how to construct logical statements (propositions and their combinations) and how to evaluate their truthfulness using truth tables, which is the first step in verifying logical arguments.

---

### Sample Questions and Answers

Let's test your understanding with a few questions.

**Question 1 (Conceptual):**
Explain why the implication $p \rightarrow q$ is true when $p$ is false. Use an analogy.

**Answer:**
The implication $p \rightarrow q$ is true when $p$ is false because it represents a promise that is not broken. If the condition ($p$) for the promise to be active is not met, then any outcome for the consequence ($q$) does not invalidate the original promise.
*   **Analogy:** "If it rains tomorrow, I will give you $5."
    *   If it *doesn't* rain ($p$ is false), whether I give you $5 or not ($q$ is true or false), I haven't broken my promise. The promise was only about what happens IF it rains. So, in both cases (I give you $5, or I don't), the statement "If it rains tomorrow, I will give you $5" is considered true in a logical sense, because the condition for it to be false (it rains AND I don't give you $5) never occurred.

**Question 2 (Exam-Oriented - Truth Table):**
Construct a truth table for the proposition $(\neg p \vee q) \wedge (p \vee \neg q)$. Is this proposition a tautology, a contradiction, or a contingency?

**Answer:**
Let's build the table step-by-step:

| $p$   | $q$   | $\neg p$ | $\neg q$ | $\neg p \vee q$ | $p \vee \neg q$ | $(\neg p \vee q) \wedge (p \vee \neg q)$ |
| :---- | :---- | :------- | :------- | :-------------- | :-------------- | :---------------------------------------- |
| True  | True  | False    | False    | True            | True            | True                                      |
| True  | False | False    | True     | False           | True            | False                                     |
| False | True  | True     | False    | True            | False           | False                                     |
| False | False | True     | True     | True            | True            | True                                      |

The final column contains "True," "False," "False," "True." Since the truth value depends on the truth values of $p$ and $q$, this proposition is a **contingency**.

**Question 3 (Exam-Oriented - Logical Equivalence):**
Show, using logical equivalences, that $\neg (p \rightarrow q) \equiv p \wedge \neg q$.

**Answer:**
We start with the left-hand side and transform it using known equivalences:
$\neg (p \rightarrow q)$
$\equiv \neg (\neg p \vee q)$  (Using the implication law: $p \rightarrow q \equiv \neg p \vee q$)
$\equiv \neg (\neg p) \wedge \neg q$ (Using De Morgan's Law: $\neg(A \vee B) \equiv \neg A \wedge \neg B$, where $A=\neg p, B=q$)
$\equiv p \wedge \neg q$      (Using the Double Negation Law: $\neg(\neg p) \equiv p$)

We have successfully transformed the left-hand side into the right-hand side, thus proving the equivalence.

---

That's our introduction to propositional logic! I encourage you to practice constructing truth tables and using the logical equivalences. These are skills you'll build on throughout the course. Don't hesitate to ask questions as you work through the exercises. See you next time!
