---
title: "Mathematical logic and proofs"
subject: "DISCRETE MATHEMATICS"
module: "Module 2: Mathematical logic and proofs"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f98"
status: "completed"
scrapedAt: "2026-05-20T16:32:56.312Z"
---
## Discrete Mathematics: Module 2 - Mathematical Logic and Proofs

Welcome, everyone, to Module 2 of Discrete Mathematics! This module is absolutely foundational. It's where we build the bedrock for all the rigorous thinking and problem-solving we'll do in this course. We're diving into **Mathematical Logic and Proofs**. Think of this as learning the grammar and language of mathematics. If we want to confidently say something is true in mathematics, we need a solid understanding of how to express that truth and how to prove it.

Our main goals in this module, as outlined in our Course Outcomes, are to:

*   **CO1: Check the validity of predicates in Propositional and Quantified Propositional Logic using truth tables, deductive reasoning and inference theory on Propositional Logic.** This is about understanding how to represent statements logically and how to determine if a complex statement logically follows from a set of premises. We'll be using tools like truth tables and inference rules.
*   And while this module focuses heavily on logic, remember that the skills you develop here, especially in deductive reasoning, will be crucial for other outcomes like **CO2 (Counting)**, **CO3 (Relations)**, **CO4 (Posets)**, **CO5 (Recurrence Relations)**, and **C06 (Algebraic Structures)**. A well-formed argument is key everywhere!

Let's get started by building up from the simplest building blocks.

### 1. Propositions and Basic Logic

At its heart, mathematics is about making statements that are either true or false. These fundamental statements are called **propositions**.

**What is a Proposition?**

A proposition is a declarative statement that is either true or false, but not both.

*   **Think of it like this:** When I say, "The sky is blue," that's a proposition. On a clear day, it's true. On a cloudy day, it's false. It's never both true and false at the same time.
*   **What's NOT a proposition?** Questions like "What time is it?" or commands like "Close the door!" aren't propositions because they don't have a truth value. Statements like "This statement is false" are also problematic – they lead to paradoxes, which we generally try to avoid in standard logic.

**Symbolic Logic: The Language of Propositions**

We use **propositional variables** (like $p$, $q$, $r$, etc.) to represent simple propositions. For example:

*   $p$: "It is raining."
*   $q$: "The ground is wet."

To build more complex statements, we use **logical connectives**. These are like the glue that joins propositions together. Let's meet the most important ones:

*   **Negation ($\neg$ or ~):** This reverses the truth value of a proposition. If $p$ is true, $\neg p$ is false, and vice-versa.
    *   If $p$: "It is raining," then $\neg p$: "It is not raining."
*   **Conjunction ($\wedge$):** This means "and." A conjunction $p \wedge q$ is true if and only if both $p$ and $q$ are true.
    *   $p \wedge q$: "It is raining AND the ground is wet." This is only true if it's actually raining AND the ground is actually wet.
*   **Disjunction ($\vee$):** This means "or." A disjunction $p \vee q$ is true if at least one of $p$ or $q$ is true (or both). This is often called the *inclusive OR*.
    *   $p \vee q$: "It is raining OR the ground is wet." This is true if it's raining, or if the ground is wet, or if both are happening.
*   **Implication ($\rightarrow$ or $\supset$):** This is perhaps the most crucial connective, often read as "if... then..." or "$p$ implies $q$." The statement $p \rightarrow q$ is false *only* when $p$ is true and $q$ is false. In all other cases, it's true.
    *   $p \rightarrow q$: "IF it is raining, THEN the ground is wet."
        *   If it *is* raining (true) and the ground *is* wet (true), the statement is true. Makes sense.
        *   If it *is not* raining (false) and the ground *is* wet (true), the statement is true. Why? Because the "if" part didn't happen, so the implication isn't broken. The ground could be wet for other reasons (sprinklers!).
        *   If it *is not* raining (false) and the ground *is not* wet (false), the statement is true. Again, the "if" part didn't happen.
        *   The *only* case where "If it is raining, then the ground is wet" is false is if it *is* raining, but the ground somehow *isn't* wet. That would be a contradiction, and thus the implication is false.
    *   **Remember this:** An implication with a false premise is *always* true. This can feel a bit counter-intuitive at first, but it's essential for logical consistency.
*   **Biconditional ($\leftrightarrow$ or $\equiv$):** This means "if and only if" (iff). The statement $p \leftrightarrow q$ is true if and only if $p$ and $q$ have the same truth value (both true or both false).
    *   $p \leftrightarrow q$: "It is raining IF AND ONLY IF the ground is wet." This means that rain is the *sole* cause of the ground being wet, and if the ground is wet, it *must* have rained.

### 2. Truth Tables: Visualizing Logical Relationships

Truth tables are our primary tool for systematically determining the truth value of a compound proposition for all possible combinations of truth values of its constituent propositions. This directly helps us achieve **CO1**.

**How to build a Truth Table:**

1.  **Identify the atomic propositions:** These are the basic propositions ($p, q, r, \ldots$).
2.  **Determine the number of rows:** If you have $n$ atomic propositions, you'll need $2^n$ rows to cover all possible truth combinations.
3.  **List all combinations of truth values** for the atomic propositions.
4.  **Add columns for each sub-expression** in the compound proposition, building up to the final statement.
5.  **Fill in the truth values** for each column based on the truth values of the propositions they depend on, using the definitions of the logical connectives.

**Example:** Let's construct a truth table for $(p \wedge q) \rightarrow (\neg p \vee q)$.

| $p$   | $q$   | $p \wedge q$ | $\neg p$ | $\neg p \vee q$ | $(p \wedge q) \rightarrow (\neg p \vee q)$ |
| :---- | :---- | :----------- | :------- | :-------------- | :--------------------------------------- |
| T     | T     | T            | F        | T               | T                                        |
| T     | F     | F            | F        | F               | T                                        |
| F     | T     | F            | T        | T               | T                                        |
| F     | F     | F            | T        | T               | T                                        |

**What does this tell us?** Notice that the final column has "T" for every single row. This means the statement $(p \wedge q) \rightarrow (\neg p \vee q)$ is **always true**, regardless of the truth values of $p$ and $q$. Such a statement is called a **tautology**.

**Tautologies and Contradictions:**

*   **Tautology:** A proposition that is always true. These are important because they represent fundamental logical truths.
*   **Contradiction:** A proposition that is always false.
*   **Contingency:** A proposition that is neither a tautology nor a contradiction (its truth value depends on the truth values of its atomic propositions).

**Using Truth Tables for Equivalence:**

Two compound propositions are logically equivalent if they have the same truth value in every possible situation. We can check this by comparing their columns in a truth table. If the columns are identical, the propositions are equivalent. This is very useful in simplifying complex logical statements.

For instance, the implication $p \rightarrow q$ is logically equivalent to $\neg p \vee q$. Look at the columns for $p \rightarrow q$ (which we can construct) and $\neg p \vee q$ in our example above. You'll see they are identical! So, we can use these equivalences.

**Key Logical Equivalences (often found in Rosen, Chapter 1):**

You'll want to be familiar with these, as they are building blocks for proofs and simplification:

*   **Commutative laws:** $p \vee q \equiv q \vee p$, $p \wedge q \equiv q \wedge p$
*   **Associative laws:** $(p \vee q) \vee r \equiv p \vee (q \vee r)$, $(p \wedge q) \wedge r \equiv p \wedge (q \wedge r)$
*   **Distributive laws:** $p \wedge (q \vee r) \equiv (p \wedge q) \vee (p \wedge r)$, $p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r)$
*   **Identity laws:** $p \vee \mathbf{F} \equiv p$, $p \wedge \mathbf{T} \equiv p$ (where $\mathbf{T}$ is true and $\mathbf{F}$ is false)
*   **Idempotent laws:** $p \vee p \equiv p$, $p \wedge p \equiv p$
*   **Double negation law:** $\neg (\neg p) \equiv p$
*   **De Morgan's laws:** $\neg (p \wedge q) \equiv \neg p \vee \neg q$, $\neg (p \vee q) \equiv \neg p \wedge \neg q$
    *   These are super important! They tell you how to distribute a negation over an AND or OR. "It is NOT true that (it is raining AND the ground is wet)" is the same as "It is NOT raining OR the ground is NOT wet."
*   **Implication law:** $p \rightarrow q \equiv \neg p \vee q$
*   **Contrapositive:** $p \rightarrow q \equiv \neg q \rightarrow \neg p$
    *   This one is gold for proofs! "If it rains, the ground is wet" is logically equivalent to "If the ground is NOT wet, then it is NOT raining." It often makes proving something easier by proving its contrapositive.

### 3. Predicates and Quantified Propositions

While propositions are statements with a fixed truth value, we often encounter statements that depend on variables. This is where **predicates** come in.

**What is a Predicate?**

A predicate is a statement involving variables that becomes a proposition when the variables are assigned specific values from a particular domain.

*   **Think of it like a function:** You define a function, say $P(x)$, which means "x is an even number."
    *   If we let $x = 3$, $P(3)$ is "3 is an even number," which is false.
    *   If we let $x = 4$, $P(4)$ is "4 is an even number," which is true.
*   So, $P(x)$ itself isn't a proposition, but $P(3)$ and $P(4)$ are.

We typically use notation like $P(x)$, $Q(x, y)$, etc., where the letters in parentheses indicate the variables.

**Quantifiers: Making Statements about Collections**

To make propositions out of predicates that talk about *all* or *some* elements in a domain, we use **quantifiers**. This is crucial for achieving **CO1** with quantified logic.

*   **Universal Quantifier ($\forall$):** "For all" or "for every."
    *   The statement $\forall x P(x)$ means "For every element $x$ in the domain, $P(x)$ is true."
    *   **Example:** Let the domain be the set of all integers $\mathbb{Z}$. Let $P(x)$ be the predicate "$x^2 \ge 0$". Then $\forall x P(x)$ is the proposition "For every integer $x$, $x^2 \ge 0$", which is true.
    *   **Think of it like this:** You're making a claim that applies universally. To prove it, you'd need to show it holds for every single case. To disprove it, you only need *one* counterexample.

*   **Existential Quantifier ($\exists$):** "There exists" or "for some" or "there is at least one."
    *   The statement $\exists x P(x)$ means "There exists at least one element $x$ in the domain such that $P(x)$ is true."
    *   **Example:** Let the domain be the set of all integers $\mathbb{Z}$. Let $Q(x)$ be the predicate "$x > 5$". Then $\exists x Q(x)$ is the proposition "There exists an integer $x$ such that $x > 5$", which is true (e.g., $x=6$).
    *   **Think of it like this:** You're claiming that somewhere, something exists with a certain property. To prove it, you just need to find *one* example. To disprove it, you need to show it's true for *none* of the elements.

**Negating Quantified Statements:**

Understanding how negation interacts with quantifiers is vital. These are the counterparts to De Morgan's laws for quantifiers:

*   $\neg (\forall x P(x)) \equiv \exists x (\neg P(x))$
    *   "It is NOT true that for all $x$, $P(x)$ holds" is the same as "There exists an $x$ such that $P(x)$ does NOT hold."
    *   **Example:** Not all integers are positive ($\neg (\forall x \in \mathbb{Z}, x > 0)$) is the same as There exists an integer that is not positive ($\exists x \in \mathbb{Z}, \neg (x > 0)$), which means there exists an integer $x \le 0$.

*   $\neg (\exists x P(x)) \equiv \forall x (\neg P(x))$
    *   "It is NOT true that there exists an $x$ such that $P(x)$ holds" is the same as "For all $x$, $P(x)$ does NOT hold."
    *   **Example:** It is NOT true that there exists an even prime number greater than 2 ($\neg (\exists x (Even(x) \wedge Prime(x) \wedge x > 2))$) is the same as For all numbers $x$, it's NOT the case that ($x$ is even AND $x$ is prime AND $x > 2$) ($\forall x, \neg (Even(x) \wedge Prime(x) \wedge x > 2)$).

**Translating English to Predicate Logic:**

This is a key skill for **CO1** and applying logic to real-world scenarios.

*   **Example 1:** "Every student in this class has visited Canada."
    *   Let $S(x)$ be "$x$ is a student in this class."
    *   Let $C(x)$ be "$x$ has visited Canada."
    *   Domain: All people.
    *   Translation: $\forall x (S(x) \rightarrow C(x))$
    *   **Why the implication?** We're not saying *everyone in the world* has visited Canada. We're only making a claim about the students *in this class*. So, IF someone is a student in this class, THEN they have visited Canada. If they aren't a student in this class, the statement imposes no condition.

*   **Example 2:** "There is a student in this class who has visited Mexico."
    *   Let $S(x)$ be "$x$ is a student in this class."
    *   Let $M(x)$ be "$x$ has visited Mexico."
    *   Domain: All people.
    *   Translation: $\exists x (S(x) \wedge M(x))$
    *   **Why the conjunction?** We're looking for someone who satisfies *both* conditions: being a student in this class AND having visited Mexico.

**Important Note on Translation:** The choice of domain and the logical connective ( $\rightarrow$ vs. $\wedge$) when translating English sentences with quantifiers is critical and often a point of confusion. Always ask yourself: what group are we making a claim about, and what property must they possess?

### 4. Deductive Reasoning and Inference Theory

This is where we move beyond just checking truth values with tables to constructing logical arguments. This is the heart of **CO1**. We want to show that a conclusion logically follows from a set of premises.

**Arguments in Propositional Logic:**

An argument is a sequence of statements, where the initial statements are premises, and the final statement is the conclusion. We say an argument is **valid** if whenever all the premises are true, the conclusion must also be true.

**Formalizing Arguments:**

We represent an argument as:
$p_1$
$p_2$
$\vdots$
$p_n$
$\therefore q$

This means: IF $p_1$ AND $p_2$ AND ... AND $p_n$ are all true, THEN $q$ must be true.

**Methods for Checking Validity:**

1.  **Truth Tables:** We can build a truth table for $(p_1 \wedge p_2 \wedge \dots \wedge p_n) \rightarrow q$. If this compound statement is a tautology, the argument is valid. This is systematic but can be cumbersome for many variables.
2.  **Rules of Inference:** These are basic valid argument forms that we can use as building blocks to construct more complex proofs. Think of them as established logical steps.

**Common Rules of Inference (Essential for CO1):**

*   **Modus Ponens:**
    $p$
    $p \rightarrow q$
    $\therefore q$
    *   *Meaning:* If you know $p$ is true, and you know "if $p$ then $q$" is true, then you can conclude $q$ is true. This is perhaps the most fundamental rule.
    *   *Example:*
        Premise 1: "If it is raining, the street is wet." ($p \rightarrow q$)
        Premise 2: "It is raining." ($p$)
        Conclusion: "Therefore, the street is wet." ($q$)

*   **Modus Tollens:**
    $p \rightarrow q$
    $\neg q$
    $\therefore \neg p$
    *   *Meaning:* If you know "if $p$ then $q$" is true, and you know $q$ is false, then $p$ must be false. This is based on the contrapositive.
    *   *Example:*
        Premise 1: "If it is raining, the street is wet." ($p \rightarrow q$)
        Premise 2: "The street is NOT wet." ($\neg q$)
        Conclusion: "Therefore, it is NOT raining." ($\neg p$)

*   **Hypothetical Syllogism:**
    $p \rightarrow q$
    $q \rightarrow r$
    $\therefore p \rightarrow r$
    *   *Meaning:* If $p$ implies $q$, and $q$ implies $r$, then $p$ implies $r$. It's like a chain reaction.
    *   *Example:*
        Premise 1: "If you study hard, you will pass the exam." ($p \rightarrow q$)
        Premise 2: "If you pass the exam, you will get a good grade." ($q \rightarrow r$)
        Conclusion: "Therefore, if you study hard, you will get a good grade." ($p \rightarrow r$)

*   **Disjunctive Syllogism:**
    $p \vee q$
    $\neg p$
    $\therefore q$
    *   *Meaning:* If you know that at least one of $p$ or $q$ is true, and you also know that $p$ is false, then $q$ must be true.
    *   *Example:*
        Premise 1: "The switch is either on or off." ($p \vee q$)
        Premise 2: "The switch is NOT on." ($\neg p$)
        Conclusion: "Therefore, the switch is off." ($q$)

*   **Addition (or Disjunction Introduction):**
    $p$
    $\therefore p \vee q$
    *   *Meaning:* If $p$ is true, then "p or q" is also true for any $q$.
    *   *Example:*
        Premise 1: "It is sunny." ($p$)
        Conclusion: "Therefore, it is sunny or it is snowing." ($p \vee q$)

*   **Simplification (or Conjunction Elimination):**
    $p \wedge q$
    $\therefore p$
    *   *Meaning:* If "p and q" is true, then $p$ must be true.
    *   *Example:*
        Premise 1: "John is a CS major and Mary is a Math major." ($p \wedge q$)
        Conclusion: "Therefore, John is a CS major." ($p$)

*   **Conjunction Introduction:**
    $p$
    $q$
    $\therefore p \wedge q$
    *   *Meaning:* If $p$ is true and $q$ is true, then "p and q" is true.

*   **Resolution:** (This is more advanced but very powerful, especially in computer science and AI)
    $p \vee q$
    $\neg p \vee r$
    $\therefore q \vee r$
    *   *Meaning:* If you have two statements that share a variable and its negation, you can combine them. It's derived from the implication law and substitution. It’s the basis of many automated reasoning systems.

**Constructing Proofs:**

To show an argument is valid using rules of inference, you start with the premises and apply these rules step-by-step until you reach the conclusion. Each step must be justified by a rule of inference or a previously established premise.

**Example Proof:** Show that the following argument is valid:
Premise 1: $p \vee q$
Premise 2: $(p \rightarrow r) \wedge (q \rightarrow r)$
Conclusion: $\therefore r$

**Proof Steps:**

1.  $p \vee q$  (Premise 1)
2.  $(p \rightarrow r) \wedge (q \rightarrow r)$  (Premise 2)
3.  $p \rightarrow r$  (Simplification from step 2)
4.  $q \rightarrow r$  (Simplification from step 2)
5.  Now we have $p \vee q$, $p \rightarrow r$, and $q \rightarrow r$. This looks like a scenario where if $p$ is true, we get $r$, and if $q$ is true, we also get $r$. Since we know at least one of $p$ or $q$ is true (from step 1), we can use a rule called **Constructive Dilemma**.

    *   **Constructive Dilemma:**
        $(p \vee q) \wedge ((p \rightarrow r) \wedge (q \rightarrow r))$
        $\therefore r$
    *   Let's build it up:
        From step 1, we have $p \vee q$.
        From step 3, we have $p \rightarrow r$.
        From step 4, we have $q \rightarrow r$.
        We can combine step 3 and 4 using Conjunction Introduction: $(p \rightarrow r) \wedge (q \rightarrow r)$ (this is actually Premise 2, but we've shown we can derive it).
        Now, combine step 1 and Premise 2 using Conjunction Introduction: $(p \vee q) \wedge ((p \rightarrow r) \wedge (q \rightarrow r))$.
        Finally, apply the rule of **Hypothetical Syllogism** to steps 3 and 4 to get $p \rightarrow r$ and $q \rightarrow r$. Hmm, that doesn't directly lead to $r$. Let's rethink.

    *   **A better approach using our existing rules:**
        1. $p \vee q$ (Premise 1)
        2. $(p \rightarrow r) \wedge (q \rightarrow r)$ (Premise 2)
        3. $p \rightarrow r$ (Simplification from 2)
        4. $q \rightarrow r$ (Simplification from 2)
        5. Now, consider the two possibilities from $p \vee q$:
            *   **Case 1: $p$ is true.**
                Using Modus Ponens with step 5 ($p$) and step 3 ($p \rightarrow r$), we get $r$.
            *   **Case 2: $q$ is true.**
                Using Modus Ponens with step 6 ($q$) and step 4 ($q \rightarrow r$), we get $r$.
        6. Since in both cases ($p$ being true or $q$ being true), we arrive at $r$, we can conclude $r$. This method of splitting into cases based on a disjunction is called **Proof by Cases** (or Disjunction Elimination).

    *   So, the proof flow would be:
        1. $p \vee q$ (Premise 1)
        2. $(p \rightarrow r) \wedge (q \rightarrow r)$ (Premise 2)
        3. $p \rightarrow r$ (Simplification from 2)
        4. $q \rightarrow r$ (Simplification from 2)
        5. $p$ (Assume $p$ is true for this case) - This is part of the "Proof by Cases" strategy.
        6. $r$ (Modus Ponens from 5 and 3)
        7. $q$ (Assume $q$ is true for this case, since $p$ is false in this case) - This is the other part of "Proof by Cases".
        8. $r$ (Modus Ponens from 7 and 4)
        9. $r$ (Proof by Cases from steps 1, 3, 4, 5-6, and 7-8)

    *   **Exam Tip:** When you see a $p \vee q$ and two implications starting with $p$ and $q$, leading to the same conclusion, the "Proof by Cases" strategy combined with Modus Ponens is often the way to go.

**Quantified Logic Proofs:**

Proving statements with quantifiers requires additional rules:

*   **Universal Generalization (UG):** If you can prove $\forall x P(x)$ by showing that $P(c)$ is true for an *arbitrary* element $c$ in the domain (without making any specific assumptions about $c$ other than it belongs to the domain), then you can conclude $\forall x P(x)$.
    *   *Think:* If I can show this works for *any* $x$ I pick, then it works for *all* $x$.

*   **Universal Instantiation (UI):** If $\forall x P(x)$ is true, then $P(c)$ is true for any element $c$ in the domain.
    *   *Think:* If it's true for all $x$, it's certainly true for any specific $x$ you choose.

*   **Existential Generalization (EG):** If $P(c)$ is true for some element $c$ in the domain, then $\exists x P(x)$ is true.
    *   *Think:* If I found one example that works, then there exists at least one.

*   **Existential Instantiation (EI):** If $\exists x P(x)$ is true, then there exists an element $c$ in the domain such that $P(c)$ is true. *However*, you must be careful: you cannot assume anything specific about this $c$ other than that it satisfies $P(c)$. This $c$ is a "new" element that cannot be related to anything else you've proven about other specific elements.
    *   *Think:* If I know there's *some* $x$ with property $P$, I can give it a temporary name, say 'a', and say $P(a)$ is true, but I can't say 'a' is the same as 'b' unless I have a separate proof for that.

**Example Proof with Quantifiers:**

Show that the following argument is valid:
Premise 1: $\forall x (P(x) \rightarrow Q(x))$
Premise 2: $P(a)$
Conclusion: $\therefore Q(a)$

**Proof Steps:**

1.  $\forall x (P(x) \rightarrow Q(x))$ (Premise 1)
2.  $P(a)$ (Premise 2)
3.  $P(a) \rightarrow Q(a)$ (Universal Instantiation from 1, instantiating $x$ with the specific element $a$)
4.  $Q(a)$ (Modus Ponens from 3 and 2)

This is a straightforward application of UI and Modus Ponens. It shows that if a property holds for all $x$, it must hold for a specific element $a$.

### 5. Connecting to Course Outcomes

Let's recap how this module directly addresses our learning objectives, especially **CO1**:

*   **CO1: Check the validity of predicates in Propositional and Quantified Propositional Logic using truth tables, deductive reasoning and inference theory on Propositional Logic.**
    *   **Truth Tables:** We learned how to construct them to evaluate the truth of compound propositions and check for tautologies (which represent valid arguments).
    *   **Deductive Reasoning & Inference Theory:** We explored rules of inference (Modus Ponens, Modus Tollens, etc.) and how to string them together to form proofs. This is essential for constructing valid arguments in mathematics and computer science. We also saw how these apply to quantified statements using UI, UG, EI, EG.

**How this supports other COs:**

While this module's direct focus is CO1, the principles of logical reasoning and proof are woven into everything else:

*   **CO2 (Counting):** When you use the Pigeonhole Principle or prove combinatorial identities, you're using logical deduction. For example, proving the Pigeonhole Principle often involves assuming the opposite (that you can fit $n+1$ items into $n$ holes without any hole having more than one item) and deriving a contradiction.
*   **CO3 (Relations) & CO4 (Posets):** Defining types of relations (reflexive, symmetric, transitive) and proving properties of posets relies heavily on understanding quantified statements and logical implications. For instance, proving a relation is transitive requires showing that IF $(a, b)$ is in the relation AND $(b, c)$ is in the relation, THEN $(a, c)$ must be in the relation, using $\forall a, \forall b, \forall c$.
*   **CO5 (Recurrence Relations):** Proving that a particular function is a solution to a recurrence relation typically involves mathematical induction, which is a powerful proof technique built upon logical principles.
*   **CO6 (Algebraic Systems):** Defining properties of semigroups, monoids, and groups, and proving homomorphism or isomorphism, relies on precise logical statements about operations and elements.

### 6. Exam Preparation Tips

*   **Master Truth Tables:** Be able to construct them quickly and accurately. Recognize common tautologies and contradictions.
*   **Memorize Key Equivalences:** De Morgan's laws, implication law ($p \rightarrow q \equiv \neg p \vee q$), and contrapositive ($p \rightarrow q \equiv \neg q \rightarrow \neg p$) are your best friends.
*   **Understand Quantifier Negation:** This is a very common question type. Be clear on $\neg(\forall x P(x)) \equiv \exists x (\neg P(x))$ and $\neg(\exists x P(x)) \equiv \forall x (\neg P(x))$.
*   **Translate Carefully:** Pay close attention to the domain and the choice of $\wedge$ vs. $\rightarrow$ when translating English to predicate logic.
*   **Practice Proof Construction:** Work through many examples of proving argument validity using rules of inference. Identify which rule to apply at each step. Be comfortable with Modus Ponens, Modus Tollens, and Proof by Cases.
*   **Identify Fallacies:** Be aware of common logical fallacies like Affirming the Consequent ($p \rightarrow q, q, \therefore p$) or Denying the Antecedent ($p \rightarrow q, \neg p, \therefore \neg q$). They look like valid rules but are not.

**Rosen's Textbook:** Chapters 1.1, 1.2, and 1.3 are particularly relevant here, covering propositional logic, truth tables, equivalences, predicates, and quantifiers. Pay attention to the definitions and examples provided.

### Sample Questions with Answers

**1. Conceptual Question:**
Explain the difference between a proposition and a predicate. Give an example of each.

**Answer:**
A **proposition** is a declarative statement that is definitively either true or false. For example, "2 + 2 = 4" is a proposition (it's true).
A **predicate** is a statement that contains variables and becomes a proposition only when those variables are assigned specific values from a given domain. For example, $P(x)$: "$x$ is an even number" is a predicate. If we assign $x=3$, $P(3)$ becomes "3 is an even number," which is a proposition (false). If we assign $x=4$, $P(4)$ becomes "4 is an even number," which is also a proposition (true). The predicate itself does not have a truth value until the variables are specified.

**2. Truth Table Question:**
Determine if the following argument is valid using a truth table:
Premise 1: $p \rightarrow q$
Premise 2: $\neg q$
Conclusion: $\therefore \neg p$

**Answer:**
This argument structure is known as Modus Tollens. To check validity using a truth table, we evaluate the compound proposition $( (p \rightarrow q) \wedge \neg q ) \rightarrow \neg p$. If this is a tautology, the argument is valid.

| $p$   | $q$   | $p \rightarrow q$ | $\neg q$ | $(p \rightarrow q) \wedge \neg q$ | $\neg p$ | $((p \rightarrow q) \wedge \neg q) \rightarrow \neg p$ |
| :---- | :---- | :---------------- | :------- | :-------------------------------- | :------- | :------------------------------------------------------- |
| T     | T     | T                 | F        | F                                 | F        | T                                                        |
| T     | F     | F                 | T        | F                                 | F        | T                                                        |
| F     | T     | T                 | F        | F                                 | T        | T                                                        |
| F     | F     | T                 | T        | T                                 | T        | T                                                        |

Since the final column is all 'T's, the compound proposition is a tautology, and therefore, the argument is **valid**.

**3. Quantifier Translation Question:**
Let $P(x)$ be the predicate "$x$ is a student in this class," and $F(x)$ be the predicate "$x$ is friendly."
Translate the following English sentence into predicate logic: "Some students in this class are not friendly."
Assume the domain is all people.

**Answer:**
We are looking for at least one person ($x$) who satisfies two conditions:
1. They are a student in this class ($P(x)$).
2. They are not friendly ($\neg F(x)$).

The logical connective that joins these two conditions for a single individual is "and" ($\wedge$). Since we are looking for "some" students, we use the existential quantifier ($\exists$).

Therefore, the translation is: $\exists x (P(x) \wedge \neg F(x))$.

**4. Inference Theory Question:**
Show that the following argument is valid using rules of inference:
Premise 1: $p \vee q$
Premise 2: $\neg p \rightarrow r$
Premise 3: $\neg r$
Conclusion: $\therefore q$

**Answer:**

Here's a step-by-step proof:

1.  $p \vee q$  (Premise 1)
2.  $\neg p \rightarrow r$  (Premise 2)
3.  $\neg r$  (Premise 3)
4.  $\neg (\neg p)$  (Double Negation from 3, i.e., $\neg r \rightarrow \neg(\neg p)$ using contrapositive of Premise 2, then Modus Ponens is not directly applicable here. Let's use Modus Tollens on premise 2 and 3).

Let's correct step 4.
4. $\neg(\neg p)$ (Modus Tollens from Premise 2 ($\neg p \rightarrow r$) and Premise 3 ($\neg r$). If $A \rightarrow B$ and $\neg B$ are true, then $\neg A$ must be true. Here $A = \neg p$ and $B = r$. So $\neg(\neg p)$ is true.)
5. $p$ (Double Negation from step 4)
6. $q$ (Disjunctive Syllogism from step 1 ($p \vee q$) and step 5 ($p$). If $p \vee q$ and $\neg p$ are true, then $q$ must be true. We derived $p$ in step 5, so this is like $p \vee q$ and $\neg(\text{not } p)$, which implies $q$.)

The argument is valid.

This concludes our foundational journey into mathematical logic and proofs. Remember, this is not just theory; these are the tools you'll use every single day in mathematics and computer science. Keep practicing!
