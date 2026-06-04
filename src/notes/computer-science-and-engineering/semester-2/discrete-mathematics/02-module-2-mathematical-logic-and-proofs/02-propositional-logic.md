---
title: "Propositional Logic"
subject: "DISCRETE MATHEMATICS"
module: "Module 2: Mathematical logic and proofs"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f99"
status: "completed"
scrapedAt: "2026-05-20T16:32:57.026Z"
---
Alright everyone, welcome back to Discrete Mathematics! Today, we're diving headfirst into **Module 2: Mathematical Logic and Proofs**, and our focus for this session is **Propositional Logic**. This is the bedrock, the very foundation, upon which much of mathematics, and indeed computer science, is built. If you can master this, you're setting yourself up for success in this course, especially when it comes to our Course Outcome 1: checking the validity of arguments.

Think of propositional logic as learning the grammar of mathematical arguments. We're going to learn how to break down statements, understand their truth values, and how to combine them to form more complex, meaningful statements.

### 1. What are Propositions? The Building Blocks of Logic

So, what exactly is a proposition? In discrete mathematics, a **proposition** is a declarative statement that is either true or false, but not both. This "either true or false" property is crucial. It's what allows us to reason about statements in a structured way.

Let's consider some examples:

*   "The sky is blue." (This is a proposition, and assuming it's a clear day, it's true.)
*   "2 + 2 = 5." (This is a proposition, and it's false.)
*   "Close the door." (This is *not* a proposition. It's a command, not a statement of fact.)
*   "What is your name?" (This is also *not* a proposition. It's a question.)
*   "x is greater than 3." (This statement, as it stands, is not a proposition. Its truth value depends on what 'x' is. We'll deal with statements like this later when we get to predicate logic, which builds upon propositional logic.)

We often represent simple propositions with lowercase letters, like $p, q, r, s,$ and so on. These are our basic truth-bearers.

### 2. Logical Connectives: Building Complex Statements

Now, just having individual true or false statements isn't very exciting. The real power comes when we combine these simple propositions to form more complex ones. We do this using **logical connectives**. These are like the conjunctions and disjunctions in natural language, but with precise mathematical meanings.

Let's explore the fundamental connectives:

#### 2.1. Negation (NOT)

The negation of a proposition $p$, denoted by $\neg p$ (or sometimes $\sim p$), is the proposition that is true when $p$ is false, and false when $p$ is true. It's simply the opposite.

*   If $p$: "It is raining."
*   Then $\neg p$: "It is not raining."

If $p$ is true, $\neg p$ is false. If $p$ is false, $\neg p$ is true.

#### 2.2. Conjunction (AND)

The conjunction of two propositions $p$ and $q$, denoted by $p \wedge q$, is true if and only if both $p$ and $q$ are true. Think of it as "p AND q."

*   If $p$: "The sun is shining."
*   If $q$: "It is warm."
*   Then $p \wedge q$: "The sun is shining AND it is warm."

For $p \wedge q$ to be true, both "The sun is shining" and "It is warm" must be true. If either one is false, the whole statement is false.

#### 2.3. Disjunction (OR)

The disjunction of two propositions $p$ and $q$, denoted by $p \vee q$, is true if at least one of $p$ or $q$ is true (or both are true). This is the "inclusive OR." Think of it as "p OR q."

*   If $p$: "I will have coffee."
*   If $q$: "I will have tea."
*   Then $p \vee q$: "I will have coffee OR I will have tea."

This statement is true if I have coffee, or if I have tea, or if I have both coffee and tea. It's only false if I have neither.

*   **Important Note:** In everyday language, "or" can sometimes be exclusive (one or the other, but not both). In logic, the $\vee$ symbol almost always means *inclusive* or. If you need an *exclusive OR*, we have a specific symbol for that later!

#### 2.4. Implication (IF... THEN...)

This is a really important one, and often a source of confusion because the logical "if... then..." doesn't always match our everyday usage perfectly. The implication $p \rightarrow q$ (read as "if $p$, then $q$" or "$p$ implies $q$") is false only when $p$ is true and $q$ is false. In all other cases, it is true.

*   If $p$: "You study hard."
*   If $q$: "You will pass the exam."
*   Then $p \rightarrow q$: "IF you study hard, THEN you will pass the exam."

Let's break down the truth conditions for $p \rightarrow q$:
*   **$p$ is True, $q$ is True:** "If you study hard, you will pass." (This is true if you indeed study hard and pass. Makes sense!)
*   **$p$ is True, $q$ is False:** "If you study hard, you will fail." (This is the *only* case where the implication is false. It states that studying hard guarantees passing, so if you study hard but fail, the statement is broken.)
*   **$p$ is False, $q$ is True:** "If you don't study hard, you will pass." (This statement is still considered true in logic. Why? Because the premise "you don't study hard" is false, so the implication hasn't been violated. You might pass for other reasons, like the exam being easy or you already knowing the material.)
*   **$p$ is False, $q$ is False:** "If you don't study hard, you will fail." (This is also true. The premise is false, so the statement isn't proven wrong.)

*   **Key Takeaway for Implication:** An implication $p \rightarrow q$ is only false when the antecedent ($p$) is true and the consequent ($q$) is false. Think of it as a promise: "If X happens, then Y will happen." The promise is broken only if X happens and Y *doesn't* happen.

#### 2.5. Biconditional (IF AND ONLY IF)

The biconditional statement $p \leftrightarrow q$ (read as "$p$ if and only if $q$," often abbreviated as "iff") is true when $p$ and $q$ have the same truth value. This means it's true when both are true, and true when both are false.

*   If $p$: "A triangle has three sides."
*   If $q$: "A triangle has three angles."
*   Then $p \leftrightarrow q$: "A triangle has three sides IF AND ONLY IF it has three angles."

This statement is true because if a shape has three sides, it *must* have three angles, and if a shape has three angles, it *must* have three sides. They are logically equivalent.

### 3. Truth Tables: Analyzing Compound Propositions

How do we systematically determine the truth value of complex statements? We use **truth tables**! Truth tables are a fundamental tool in propositional logic, allowing us to explore all possible combinations of truth values for the propositions involved and determine the truth value of the resulting compound proposition. This directly addresses **Course Outcome 1 (CO1)** – checking validity.

Let's construct a truth table for a compound proposition like $(p \wedge q) \rightarrow r$.

First, identify all the atomic propositions: $p, q, r$.
Next, determine the number of rows needed. If you have $n$ atomic propositions, you'll need $2^n$ rows. Here, we have 3 propositions, so $2^3 = 8$ rows.

We'll build the table step-by-step:

| $p$   | $q$   | $r$   | $p \wedge q$ | $(p \wedge q) \rightarrow r$ |
| :---- | :---- | :---- | :----------- | :--------------------------- |
| T     | T     | T     | T            | T                            |
| T     | T     | F     | T            | F                            |
| T     | F     | T     | F            | T                            |
| T     | F     | F     | F            | T                            |
| F     | T     | T     | F            | T                            |
| F     | T     | F     | F            | T                            |
| F     | F     | T     | F            | T                            |
| F     | F     | F     | F            | T                            |

Let's trace a couple of rows:
*   **Row 1:** $p$ is T, $q$ is T, $r$ is T. $p \wedge q$ is T. Then $(T) \rightarrow T$ is T.
*   **Row 2:** $p$ is T, $q$ is T, $r$ is F. $p \wedge q$ is T. Then $(T) \rightarrow F$ is F. This is the only case where an implication is false.

Truth tables are essential for understanding equivalence and determining if an argument is valid.

### 4. Tautologies, Contradictions, and Contingencies

Based on the final column of a truth table, we can classify compound propositions:

*   **Tautology:** A compound proposition that is always true, regardless of the truth values of its individual propositions. The entire column for the proposition will be filled with 'T'. These are like universal truths in logic.
    *   Example: $p \vee \neg p$ (A statement is true OR it is not true. This is always true).
        | $p$   | $\neg p$ | $p \vee \neg p$ |
        | :---- | :------- | :-------------- |
        | T     | F        | T               |
        | F     | T        | T               |
*   **Contradiction:** A compound proposition that is always false. The entire column will be filled with 'F'. These statements are logically impossible.
    *   Example: $p \wedge \neg p$ (A statement is true AND it is not true. Impossible!)
        | $p$   | $\neg p$ | $p \wedge \neg p$ |
        | :---- | :------- | :---------------- |
        | T     | F        | F                 |
        | F     | T        | F                 |
*   **Contingency:** A compound proposition that is neither a tautology nor a contradiction. Its truth value depends on the truth values of its individual propositions. Most compound propositions we form will be contingencies. Our example $(p \wedge q) \rightarrow r$ was a contingency.

### 5. Logical Equivalence: Different Statements, Same Meaning

Two compound propositions are **logically equivalent** if they have the same truth value for all possible truth value assignments to their propositional variables. We denote logical equivalence by $\equiv$. This means their truth tables are identical.

Why is this important? It allows us to substitute one expression for another in an argument, as long as they are equivalent, without changing the validity of the argument. This is crucial for simplifying expressions and for the deductive reasoning mentioned in **CO1**.

Some important logical equivalences are laws of logic, much like algebraic laws. Let's look at a few key ones, often found in textbooks like Rosen and Krithivasan:

*   **Commutative Laws:**
    *   $p \vee q \equiv q \vee p$
    *   $p \wedge q \equiv q \wedge p$
*   **Associative Laws:**
    *   $(p \vee q) \vee r \equiv p \vee (q \vee r)$
    *   $(p \wedge q) \wedge r \equiv p \wedge (q \wedge r)$
*   **Distributive Laws:**
    *   $p \wedge (q \vee r) \equiv (p \wedge q) \vee (p \wedge r)$
    *   $p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r)$
*   **Identity Laws:**
    *   $p \vee F \equiv p$ (where $F$ represents a contradiction, like $q \wedge \neg q$)
    *   $p \wedge T \equiv p$ (where $T$ represents a tautology, like $q \vee \neg q$)
*   **Idempotent Laws:**
    *   $p \vee p \equiv p$
    *   $p \wedge p \equiv p$
*   **De Morgan's Laws:** These are super useful for negating complex statements!
    *   $\neg (p \vee q) \equiv \neg p \wedge \neg q$
    *   $\neg (p \wedge q) \equiv \neg p \vee \neg q$
    *   Think of it like distributing the negation, but flipping the connective! "It's not true that (p or q)" is the same as "It's not p AND it's not q."
*   **Implication Law:** This is how we express implication using only NOT and AND/OR.
    *   $p \rightarrow q \equiv \neg p \vee q$
    *   This is very handy! If $p \rightarrow q$ is true, it means *either* $p$ is false, *or* $q$ is true. This perfectly captures the truth table we discussed earlier.
*   **Biconditional Law:**
    *   $p \leftrightarrow q \equiv (p \rightarrow q) \wedge (q \rightarrow p)$
    *   This means "$p$ iff $q$" is the same as "if $p$ then $q$, AND if $q$ then $p$." Makes sense, doesn't it?

**How to use these laws for proofs (CO1)?** You can start with one compound proposition and use these equivalences, step-by-step, to transform it into another. For example, to show $\neg (p \wedge q) \equiv \neg p \vee \neg q$, you would start with $\neg (p \wedge q)$ and apply De Morgan's law.

### 6. Introducing Exclusive OR (XOR)

We mentioned the "inclusive OR" with $\vee$. What if we need an "exclusive OR"? This is denoted by $p \oplus q$. It is true if *exactly one* of $p$ or $q$ is true, but not both.

We can define $p \oplus q$ in terms of other connectives:
$p \oplus q \equiv (p \vee q) \wedge \neg (p \wedge q)$
Or, more conveniently, using the implication law:
$p \oplus q \equiv (p \wedge \neg q) \vee (\neg p \wedge q)$

Let's check this with a truth table:

| $p$   | $q$   | $p \wedge \neg q$ | $\neg p \wedge q$ | $(p \wedge \neg q) \vee (\neg p \wedge q)$ | $p \oplus q$ |
| :---- | :---- | :---------------- | :---------------- | :----------------------------------------- | :----------- |
| T     | T     | F                 | F                 | F                                          | F            |
| T     | F     | T                 | F                 | T                                          | T            |
| F     | T     | F                 | T                 | T                                          | T            |
| F     | F     | F                 | F                 | F                                          | F            |

See? The last two columns match perfectly. So, $p \oplus q$ is true when one is true and the other is false.

**Analogy:** Think about choosing an ice cream flavor. "You can have vanilla OR chocolate." If it's an inclusive OR (which we assume in logic unless stated), you could have vanilla, or chocolate, or even a scoop of both. If it's an exclusive OR, you can have vanilla, or you can have chocolate, but you *can't* have both.

### 7. Building Arguments: Validity and Inference

This is where propositional logic really shines for **CO1**. An **argument** in logic consists of a set of propositions called **premises** and a single proposition called the **conclusion**.

An argument is **valid** if and only if whenever all the premises are true, the conclusion must also be true. It's impossible for all premises to be true and the conclusion false.

We can check the validity of an argument using truth tables or by using logical equivalences and inference rules.

**Method 1: Truth Table Approach**
To check the validity of an argument with premises $P_1, P_2, \dots, P_n$ and conclusion $Q$:
1.  Construct a truth table that includes all the atomic propositions involved.
2.  For each row, evaluate the truth values of all premises ($P_1, \dots, P_n$) and the conclusion ($Q$).
3.  Examine only those rows where *all* premises are true.
4.  If, in all such rows, the conclusion $Q$ is also true, then the argument is valid.
5.  If there is even one row where all premises are true but the conclusion is false, the argument is invalid.

**Example:**
Consider the argument:
Premise 1: $p \vee q$
Premise 2: $\neg p$
Conclusion: $q$

Let's make a truth table:

| $p$   | $q$   | $p \vee q$ | $\neg p$ | Conclusion ($q$) | Are Premises True? | Is Conclusion True? |
| :---- | :---- | :--------- | :------- | :--------------- | :----------------- | :------------------ |
| T     | T     | T          | F        | T                | No (P2 is F)       | Yes                 |
| T     | F     | T          | F        | F                | No (P2 is F)       | No                  |
| F     | T     | T          | T        | T                | **Yes**            | **Yes**             |
| F     | F     | F          | T        | F                | No (P1 is F)       | No                  |

Look at the rows where *both* premises are true. There's only one such row: Row 3. In that row, the conclusion ($q$) is also true. Therefore, this argument is **valid**.

**Method 2: Using Inference Rules**
These are pre-established valid argument forms. If you can show your argument can be reduced to one of these forms, it's valid. Some common ones (you'll find these in your texts):

*   **Modus Ponens (Law of Detachment):**
    Premises: $p$, $p \rightarrow q$
    Conclusion: $q$
    This is like saying, "If $p$ is true, and we know $p$ implies $q$, then $q$ must be true."
*   **Modus Tollens:**
    Premises: $p \rightarrow q$, $\neg q$
    Conclusion: $\neg p$
    "If $p$ implies $q$, and we know $q$ is false, then $p$ must also be false."
*   **Hypothetical Syllogism:**
    Premises: $p \rightarrow q$, $q \rightarrow r$
    Conclusion: $p \rightarrow r$
    "If $p$ implies $q$, and $q$ implies $r$, then $p$ implies $r$." This is like a chain reaction.
*   **Disjunctive Syllogism:**
    Premises: $p \vee q$, $\neg p$
    Conclusion: $q$
    This is the form from our example above. "Either $p$ or $q$ is true, and $p$ is false, so $q$ must be true."

**How to use these rules for CO1:** You can construct a deductive proof by starting with your premises and applying these rules step-by-step to derive the conclusion. For instance, to show the validity of the $(p \vee q), \neg p \vdash q$ argument using inference rules:

1.  $p \vee q$ (Premise 1)
2.  $\neg p$ (Premise 2)
3.  $q$ (From 1 and 2, by Disjunctive Syllogism)

This is a formal proof. It's efficient and shows the logical flow.

### 8. Connecting to Course Outcomes

Let's quickly recap how propositional logic relates to our course objectives:

*   **CO1: Check the validity of predicates in Propositional and Quantified Propositional Logic using truth tables, deductive reasoning and inference theory on Propositional Logic.**
    *   **Truth Tables:** We've seen how they work for checking validity.
    *   **Deductive Reasoning / Inference Theory:** This is what we do with inference rules. We use logical equivalences to transform statements and inference rules to step through premises to reach a conclusion. This is crucial for constructing proofs, which is a major part of discrete mathematics.
    *   **Quantified Propositional Logic:** This is the next step. Propositional logic deals with simple propositions. Quantified logic deals with statements about *all* or *some* elements (like "For all x, P(x)" or "There exists x such that Q(x)"). Propositional logic is the foundation for understanding these more complex statements.

*   **CO2: Solve counting problems by applying the elementary counting techniques - Rule of Sum, Rule of Product, Permutation, Combination, Binomial Theorem, Pigeonhole Principle and Principle of Inclusion and Exclusion.**
    *   While not directly about counting, the rigor and structured thinking developed in propositional logic are essential for understanding the proofs and derivations behind these counting principles. The logic helps ensure we're not double-counting or missing cases.

*   **CO3 & CO4: Classify binary relations, Partially Ordered Sets, and lattices.**
    *   The precise definitions of relations, properties (like reflexivity, symmetry, transitivity), and orderings are all built on logical statements. Understanding implications ($p \rightarrow q$) and equivalences is key to defining and working with these concepts.

*   **CO5 & CO6: Generating Functions, Recurrence Relations, and Algebraic Systems.**
    *   Again, the language of logic, especially the ability to express conditions precisely and reason about them, is fundamental. For recurrence relations, you'll be writing statements like "If $a_n$ depends on $a_{n-1}$ and $a_{n-2}$, then..." which are implications. In abstract algebra, proving properties of groups or semigroups relies heavily on deductive reasoning using logical rules.

Essentially, propositional logic provides the language and rules for making precise statements and constructing valid arguments, which are applicable across almost all areas of discrete mathematics and computer science.

### 9. Pitfalls and Exam Tips

*   **Implication Truth Values:** The most common mistake is not grasping the truth values of $p \rightarrow q$, especially when $p$ is false. Remember, "False implies anything is True" is a statement that doesn't break the rule.
*   **Inclusive vs. Exclusive OR:** Always assume OR ($\vee$) is inclusive unless explicitly stated otherwise or the context (like XOR symbol $\oplus$) demands exclusivity.
*   **Truth Table Accuracy:** Double-check your truth table construction. A single error in a column can lead to incorrect conclusions about validity or equivalence.
*   **Recognizing Forms:** Practice identifying standard inference rules (Modus Ponens, Modus Tollens) and logical equivalences (De Morgan's, Distributive) in more complex statements. This is what makes proofs efficient.
*   **Validity vs. Truth:** An argument can be valid even if its premises or conclusion are false. Validity is about the *structure* of the argument, not the actual truth of the statements within it. A valid argument ensures that *if* the premises were true, the conclusion *would have to be* true.

**Rosen & Krithivasan, Chapter 1:** This chapter is your primary resource. Pay close attention to the definitions of propositions, logical connectives, truth tables, logical equivalence, and the various laws of logic. The exercises at the end of the chapter are invaluable for practice.
**Lipson & Lipschutz (Schaum's):** This is a great supplementary resource for more examples and different ways of explaining the same concepts. It's particularly good for working through many practice problems.
**Ross & Wright:** This book offers a slightly more formal and perhaps theoretical perspective, which can be beneficial for a deeper understanding of the underlying principles.

### Sample Questions and Answers

**Q1. (Conceptual) What is the difference between an inclusive OR and an exclusive OR? Provide an everyday example for each.**

**Answer:**
The **inclusive OR** ($p \vee q$) is true if $p$ is true, or $q$ is true, or both are true.
The **exclusive OR** ($p \oplus q$) is true if $p$ is true and $q$ is false, OR if $p$ is false and $q$ is true. It is false if both are true or both are false.

*   **Inclusive OR Example:** "To pass this course, you need to score 70% on the final exam OR complete all the homework assignments." You could score 70% *and* complete all assignments, and still pass.
*   **Exclusive OR Example:** "For dessert, you can have either cake OR ice cream." Usually, this implies you choose one, not both. If you chose both, it would violate the implied condition of choosing *one*.

**Q2. (Exam-Oriented) Determine if the following argument is valid using a truth table:**
Premise 1: $p \rightarrow q$
Premise 2: $\neg q$
Conclusion: $\neg p$

**Answer:**
We need to check if there's any row where both premises ($p \rightarrow q$ and $\neg q$) are true, but the conclusion ($\neg p$) is false. If such a row exists, the argument is invalid. If no such row exists, it's valid.

| $p$   | $q$   | $p \rightarrow q$ (P1) | $\neg q$ (P2) | $\neg p$ (Conclusion) | Are Premises True? | Is Conclusion True? |
| :---- | :---- | :------------------- | :---------- | :-------------------- | :----------------- | :------------------ |
| T     | T     | T                    | F           | F                     | No (P2 is F)       | F                   |
| T     | F     | F                    | T           | F                     | No (P1 is F)       | F                   |
| F     | T     | T                    | F           | T                     | No (P2 is F)       | T                   |
| F     | F     | T                    | T           | T                     | **Yes**            | **Yes**             |

**Reasoning:** We look for rows where P1 and P2 are both 'T'. Only Row 4 satisfies this. In Row 4, the conclusion ($\neg p$) is 'T'. Since there is no row where all premises are true and the conclusion is false, the argument is **valid**. This is a classic example of **Modus Tollens**.

**Q3. (Conceptual/Equivalence) Use logical equivalences to show that $\neg (p \vee (\neg p \wedge q)) \equiv \neg p \wedge \neg q$.**

**Answer:**
We will start with the left side and apply laws of logic to transform it into the right side.

$\neg (p \vee (\neg p \wedge q))$
$\equiv \neg p \wedge \neg (\neg p \wedge q)$  (Applying De Morgan's Law to the outer negation)
$\equiv \neg p \wedge (\neg (\neg p) \vee \neg q)$ (Applying De Morgan's Law to the second negation)
$\equiv \neg p \wedge (p \vee \neg q)$     (Applying Double Negation Law: $\neg(\neg p) \equiv p$)
$\equiv (\neg p \wedge p) \vee (\neg p \wedge \neg q)$ (Applying Distributive Law)
$\equiv F \vee (\neg p \wedge \neg q)$      (Applying the property $\neg p \wedge p \equiv F$, which is a contradiction)
$\equiv \neg p \wedge \neg q$          (Applying the Identity Law: $F \vee X \equiv X$)

Thus, we have shown that $\neg (p \vee (\neg p \wedge q)) \equiv \neg p \wedge \neg q$.

---
That's a solid introduction to propositional logic! Remember, practice is key. Work through the examples in your textbooks, try to build your own truth tables and use logical equivalences. If you've got a good grasp on this, you're well on your way to tackling the rest of the course. Any questions?
