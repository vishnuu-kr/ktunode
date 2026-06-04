---
title: "Methods of Proving Theorems - Direct proof"
subject: "DISCRETE MATHEMATICS"
module: "Module 2: Mathematical logic and proofs"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fa0"
status: "completed"
scrapedAt: "2026-05-20T16:33:02.219Z"
---
# DISCRETE MATHEMATICS - Module 2: Mathematical Logic and Proofs

## Topic: Methods of Proving Theorems - Direct Proof

**(Professor's Welcome!)**

Hello everyone, and welcome back to our journey through Discrete Mathematics! Today, we're diving into a fundamental aspect of this field: **how we prove things**. In mathematics, and especially in computer science where we need to be absolutely certain about our algorithms and systems, proving a statement is not just about believing it's true; it's about demonstrating its truth rigorously. Think of it like building a bridge – you can't just say it's strong; you need blueprints and calculations to prove it can withstand the load.

In this module, we're building the foundation for logical reasoning. We've already touched upon propositional logic, understanding how to represent statements and their truth values. Now, we're moving to the next level: **proving theorems**. And we're starting with the most straightforward and, arguably, the most elegant method: the **Direct Proof**.

### Connecting to Our Course Objectives (COs)

Before we jump in, let's quickly see how this topic directly supports our learning goals for the semester.

*   **CO1: Checking validity of predicates... deductive reasoning and inference theory.** Direct proofs are the *epitome* of deductive reasoning. We start with known facts (axioms, definitions, previously proven theorems) and use logical steps to arrive at our conclusion. Understanding direct proofs is crucial for mastering inference rules and building valid arguments. (Knowledge Level: K3 - Applying)
*   **CO2: Counting problems...** While direct proof itself isn't about counting, the ability to construct logical arguments is essential when you're proving formulas for permutations, combinations, or working with the Pigeonhole Principle. For example, proving the Binomial Theorem often involves combinatorial arguments that are structured as direct proofs.
*   **CO3 & CO4: Binary relations, Posets, Lattices.** When we define properties of relations (like transitivity, reflexivity) or prove theorems about orderings in Posets, we'll be using direct proofs. For instance, proving that if relation R is transitive and S is transitive, then their composition R ∘ S is also transitive, will likely involve a direct proof.
*   **CO5: Recurrence Relations.** Proving a formula for a recurrence relation (like the solution to $a_n = 2a_{n-1} + 1$) often involves a technique called mathematical induction, which itself is a form of direct proof where the "direct step" is proving the inductive step.

So, you see, mastering direct proofs is like getting the master key to unlock many other concepts in this course and beyond.

### What is a Theorem? And What is Proof?

In mathematics, a **theorem** is a statement that has been proven on the basis of previously established statements. These previously established statements could be axioms (statements we accept as true without proof), definitions, or other theorems we've already proven.

A **proof** is a convincing argument that demonstrates the truth of a theorem. It's a sequence of logical deductions. Think of it as a chain of reasoning, where each link is a valid step, leading us from the assumptions (the 'givens') to the conclusion (what we want to prove).

### The Essence of Direct Proof

The **direct proof** is the most intuitive and fundamental method. It's like following a recipe step-by-step to bake a cake. You start with your ingredients (your assumptions and definitions) and perform a series of actions (logical steps) to arrive at the finished product (the conclusion).

**How it works:**

A direct proof typically works by starting with the hypothesis (the "if" part of a statement) and using definitions, axioms, and previously proven theorems to logically deduce the conclusion (the "then" part of a statement).

Let's say we want to prove a statement of the form:
**"If P, then Q."**

In a direct proof, we assume P is true, and then we show that Q *must* also be true. We don't consider any other possibilities or cases. We just go directly from P to Q.

This is beautifully captured in many textbooks, like Kenneth Rosen's "Discrete Mathematics and its Applications." Rosen often emphasizes that proofs are about building a logical bridge. A direct proof builds this bridge by laying down planks of established truths, one after another, until you reach the other side.

### The Structure of a Direct Proof: A Step-by-Step Approach

Let's break down the typical structure you'll see in a direct proof. Imagine you're in front of a blackboard, and I'm writing this down for you:

**Statement to Prove:** "If $P(x)$ is true for all $x$ in a set $S$, then $Q(x)$ is true for all $x$ in a set $S$." (This is a common form involving universal quantifiers).

**Direct Proof Steps:**

1.  **State the Hypothesis:** Begin by assuming that the hypothesis (the "if" part) is true. If we're proving "If P, then Q," we start by saying "Assume P is true."
2.  **Introduce Variables (if necessary):** If our statement involves variables (like "for all $x$"), we pick an arbitrary element from the set we're talking about. So, if we want to prove something about *all* integers, we say, "Let $n$ be an arbitrary integer." This is key! By picking an arbitrary element, anything we prove about it will hold for *all* elements in that set. This is where CO1, checking the validity of predicates, really comes into play – we are building a valid argument about predicates.
3.  **Use Definitions and Axioms:** This is where the heavy lifting happens. You'll unpack your assumptions using their precise mathematical definitions. For example, if you're dealing with even numbers, you'll use the definition: "An integer $n$ is even if there exists an integer $k$ such that $n = 2k$."
4.  **Apply Logical Steps:** Employ rules of inference, algebraic manipulations, or properties of numbers/sets that you know to be true. This might involve substitutions, re-arranging equations, or applying previously proven theorems. This is where the "chain of reasoning" is built, link by link.
5.  **Reach the Conclusion:** Continue applying logical steps until you arrive at the conclusion (the "then" part of your statement). Once you've shown that the conclusion *must* follow from the hypothesis, your proof is complete.
6.  **Declare the Proof Complete:** End your proof with a concluding statement, often using "Q.E.D." (Quod Erat Demonstrandum - "which was to be demonstrated") or simply stating "This completes the proof."

**Rosen's insight (Chapter 1, Introduction to Proofs):** Rosen emphasizes that proofs are about establishing certainty. Direct proof achieves this by starting from a position of certainty (the hypothesis) and moving only through logically sound steps. It's important to be clear about what you are assuming at each step.

### Let's Look at an Example: Proving Properties of Integers

Integers are a great playground for direct proofs. Let's try a classic one:

**Theorem:** If $m$ and $n$ are both even integers, then their sum $m + n$ is also an even integer.

**How would we prove this directly?**

1.  **State the Hypothesis:** We are given that $m$ and $n$ are even integers.
2.  **Use Definitions:**
    *   By the definition of an even integer, if $m$ is even, then there exists an integer $k_1$ such that $m = 2k_1$.
    *   Similarly, if $n$ is even, then there exists an integer $k_2$ such that $n = 2k_2$.
3.  **Apply Logical Steps (Focus on the Conclusion):** We want to show that $m + n$ is even. Let's substitute our expressions for $m$ and $n$ into their sum:
    $m + n = (2k_1) + (2k_2)$
    Now, we can use basic algebra to factor out a 2:
    $m + n = 2(k_1 + k_2)$
4.  **Reach the Conclusion:** Let's define a new integer, say $k_3$, such that $k_3 = k_1 + k_2$. Since $k_1$ and $k_2$ are integers, their sum $k_3$ is also an integer (this is the closure property of integers under addition).
    So, we have $m + n = 2k_3$.
    By the definition of an even integer, this means that $m + n$ is an even integer.
5.  **Declare the Proof Complete:** We have successfully shown that if $m$ and $n$ are even, their sum $m + n$ is also even.

**Remember this:** The key was to use the *definition* of an even number and then manipulate the expression algebraically to *show* it fits that definition. This is a very common pattern in direct proofs.

**Relatable Analogy:** Imagine you have two bags of apples, and each bag has an *even* number of apples.
*   Bag 1 has $2 \times (\text{some number of pairs})$ apples.
*   Bag 2 has $2 \times (\text{some other number of pairs})$ apples.
When you combine the apples from both bags, you're essentially adding $2 \times (\text{number of pairs in Bag 1})$ to $2 \times (\text{number of pairs in Bag 2})$. You can factor out the 2, showing that the total number of apples is also a multiple of 2, hence it's even. You didn't need to know the exact number of apples, just that they came in pairs.

### Another Example: Proving Properties of Odd Numbers

Let's try a similar one, but with odd numbers.

**Theorem:** If $m$ is an odd integer, then $m^2$ is also an odd integer.

**Proof:**

1.  **Hypothesis:** Let $m$ be an odd integer.
2.  **Definition:** By the definition of an odd integer, there exists an integer $k$ such that $m = 2k + 1$.
3.  **Logical Steps (Focus on the Conclusion):** We want to show $m^2$ is odd. Let's compute $m^2$:
    $m^2 = (2k + 1)^2$
    Expand this using algebra:
    $m^2 = (2k)^2 + 2(2k)(1) + 1^2$
    $m^2 = 4k^2 + 4k + 1$
4.  **Reach the Conclusion:** We need to show this is of the form $2 \times (\text{an integer}) + 1$. We can factor out a 2 from the first two terms:
    $m^2 = 2(2k^2 + 2k) + 1$
    Let $j = 2k^2 + 2k$. Since $k$ is an integer, $k^2$ is an integer, $2k^2$ is an integer, $2k$ is an integer, and their sum $j$ is also an integer (closure property).
    So, we have $m^2 = 2j + 1$, where $j$ is an integer.
    This is exactly the definition of an odd integer. Therefore, $m^2$ is odd.
5.  **Proof Complete.**

**Common Pitfall Alert!** A common mistake here is to stop at $4k^2 + 4k + 1$. You *must* rearrange it into the form $2 \times (\text{something}) + 1$ to prove it's odd.

**Textbook Connection:** Schaum's Outline's Discrete Mathematics series is excellent for providing practice with these fundamental number theory proofs. They often present problems like these and meticulously show the steps of definition, substitution, and algebraic manipulation, reinforcing the direct proof technique.

### When is Direct Proof Appropriate?

Direct proof is suitable for many types of statements, especially those that are universally quantified or have a clear "if P, then Q" structure. It's particularly effective when:

*   The definitions of the terms involved are clear and lend themselves to algebraic manipulation.
*   You can easily express the hypothesis in a symbolic form that can be transformed into the conclusion.

It's the go-to method for many basic theorems in number theory, set theory, and even basic algorithm analysis.

### Connection to CO1: Deductive Reasoning

Let's re-emphasize the connection to CO1. Direct proof *is* deductive reasoning.

*   **Premise 1:** $m$ is even (our assumption).
*   **Premise 2:** If an integer $x$ is even, then $x = 2k$ for some integer $k$ (definition).
*   **Deduction:** Therefore, $m = 2k_1$ for some integer $k_1$.

And so on. Each step is a logical deduction from previously accepted truths. When you're asked to check the validity of predicates using deductive reasoning, you're essentially analyzing if a series of steps like these forms a valid proof.

### Summary of Direct Proof: The Core Idea

*   **Start with the hypothesis.**
*   **Use definitions, axioms, and known theorems.**
*   **Perform logical and algebraic manipulations.**
*   **Arrive directly at the conclusion.**
*   **No "what ifs," no "other cases" needed for this specific method.**

Direct proof is your foundational tool for demonstrating mathematical truths. As we move forward, we'll see other proof techniques like proof by contrapositive, proof by contradiction, and mathematical induction, but they all build upon the logical rigor established by direct proof.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** Explain the core principle of a direct proof and why it's considered a fundamental method in mathematics.

**Answer:** A direct proof starts by assuming the hypothesis (the "if" part of a statement) is true and then uses a sequence of logical deductions, definitions, axioms, and previously proven theorems to arrive directly at the conclusion (the "then" part). It's fundamental because it's the most straightforward way to demonstrate a statement's truth. It builds a logical bridge from a known truth (the hypothesis) to the statement we want to prove, without exploring alternative scenarios or negating the conclusion. This directness and reliance on explicit logical steps form the bedrock of mathematical reasoning, directly supporting CO1.

**Question 2 (Application-Oriented):** Prove that if $a$ and $b$ are odd integers, then $a \cdot b$ is also an odd integer.

**Answer:**

*   **Statement:** If $a$ and $b$ are odd integers, then $a \cdot b$ is an odd integer.
*   **Proof:**
    1.  **Hypothesis:** Assume $a$ and $b$ are odd integers.
    2.  **Definitions:**
        *   Since $a$ is odd, there exists an integer $k_1$ such that $a = 2k_1 + 1$.
        *   Since $b$ is odd, there exists an integer $k_2$ such that $b = 2k_2 + 1$.
    3.  **Logical Steps:** We want to show $a \cdot b$ is odd. Let's compute the product:
        $a \cdot b = (2k_1 + 1)(2k_2 + 1)$
        Expand using FOIL (First, Outer, Inner, Last):
        $a \cdot b = (2k_1)(2k_2) + (2k_1)(1) + (1)(2k_2) + (1)(1)$
        $a \cdot b = 4k_1k_2 + 2k_1 + 2k_2 + 1$
    4.  **Reach Conclusion:** We need to express this in the form $2 \times (\text{an integer}) + 1$. We can factor out a 2 from the first three terms:
        $a \cdot b = 2(2k_1k_2 + k_1 + k_2) + 1$
        Let $k_3 = 2k_1k_2 + k_1 + k_2$. Since $k_1$ and $k_2$ are integers, and the set of integers is closed under multiplication and addition, $k_3$ is also an integer.
        Therefore, $a \cdot b = 2k_3 + 1$, which, by definition, means $a \cdot b$ is an odd integer.
    5.  **Proof Complete.** This demonstrates direct proof application in number theory, relevant to CO1.

**Question 3 (Exam-style):** Consider the statement: "For any real numbers $x$ and $y$, if $x+y > 0$, then $x > 0$ or $y > 0$." Is this statement true? If it is, prove it using a direct proof. If not, provide a counterexample.

**Answer:** The statement is **false**.
*   **Counterexample:** Let $x = 3$ and $y = -1$.
    *   Then $x+y = 3 + (-1) = 2$. Since $2 > 0$, the hypothesis ($x+y > 0$) is satisfied.
    *   However, the conclusion states "$x > 0$ or $y > 0$". In our case, $x = 3 > 0$ is true, and $y = -1 < 0$. The "or" statement becomes "True or False", which evaluates to True. So this counterexample doesn't work. My apologies! Let's try again.

    *Let's pause and think.* The statement claims that if the sum is positive, at least one of them *must* be positive. What if one is a large positive number and the other is a small negative number? Or what if both are positive? The phrasing "x > 0 or y > 0" is crucial.

    Let's re-examine the statement carefully.
    "For any real numbers $x$ and $y$, if $x+y > 0$, then $x > 0$ or $y > 0$."

    Let's try a different counterexample.
    Let $x = 5$ and $y = -2$.
    Hypothesis: $x+y = 5 + (-2) = 3$. Since $3 > 0$, the hypothesis is true.
    Conclusion: "$x > 0$ or $y > 0$". Here, $x = 5 > 0$ (True) and $y = -2 < 0$ (False).
    The statement "True or False" is True. This counterexample doesn't work either.

    What if we consider the *negation* of the conclusion? The negation of "$x > 0$ or $y > 0$" is "$x \le 0$ AND $y \le 0$".
    So, the statement is false if we can find $x$ and $y$ such that $x+y > 0$ AND ($x \le 0$ AND $y \le 0$).
    If both $x$ and $y$ are less than or equal to zero, their sum $x+y$ must also be less than or equal to zero. It can *never* be greater than zero.
    Therefore, there are *no* values of $x$ and $y$ such that $x \le 0$ and $y \le 0$ and $x+y > 0$.
    This means that if $x+y > 0$, it's *impossible* for both $x \le 0$ and $y \le 0$ to be true. This implies that at least one of them *must* be positive.

    **Ah! My initial assessment was incorrect. The statement IS true.** Let's proceed with a direct proof.

    *   **Statement:** For any real numbers $x$ and $y$, if $x+y > 0$, then $x > 0$ or $y > 0$.
    *   **Proof:**
        1.  **Hypothesis:** Assume $x$ and $y$ are real numbers such that $x+y > 0$.
        2.  **Logical Steps:** We want to show that $x > 0$ or $y > 0$.
            Let's consider the possibilities for $x$ and $y$.
            *   Case 1: $x > 0$. If $x > 0$, then the conclusion "$x > 0$ or $y > 0$" is immediately true, regardless of the value of $y$.
            *   Case 2: $y > 0$. If $y > 0$, then the conclusion "$x > 0$ or $y > 0$" is immediately true, regardless of the value of $x$.
            *   Wait, this isn't a direct proof in the typical sense of manipulating the hypothesis to reach the conclusion. This feels more like a case analysis. A direct proof should try to go from $x+y>0$ to the conclusion without breaking into cases for the conclusion itself.

            Let's try again, focusing on manipulating the hypothesis $x+y > 0$.
            We know $x+y > 0$.
            Consider the statement we want to prove: $x>0$ or $y>0$.
            This is equivalent to proving: NOT ($x \le 0$ AND $y \le 0$).
            If we can show that the situation ($x \le 0$ AND $y \le 0$) is impossible given the hypothesis ($x+y > 0$), then the original statement must be true.

            Let's try to use the contrapositive. The contrapositive of "If P, then Q" is "If not Q, then not P".
            Original statement: If ($x+y > 0$), then ($x > 0$ or $y > 0$).
            Not Q: NOT ($x > 0$ or $y > 0$) which is ($x \le 0$ AND $y \le 0$).
            Not P: NOT ($x+y > 0$) which is ($x+y \le 0$).
            So the contrapositive is: If ($x \le 0$ AND $y \le 0$), then ($x+y \le 0$).

            Now, let's prove the contrapositive directly:
            1.  **Hypothesis (for contrapositive):** Assume $x \le 0$ AND $y \le 0$.
            2.  **Logical Steps:**
                *   Since $x \le 0$, $x$ is non-positive.
                *   Since $y \le 0$, $y$ is non-positive.
                *   The sum of two non-positive numbers is non-positive.
                *   Specifically, if $x \le 0$ and $y \le 0$, then adding these inequalities gives $x+y \le 0 + 0$, which means $x+y \le 0$.
            3.  **Conclusion (for contrapositive):** We have shown that $x+y \le 0$.
            4.  **Proof Complete for Contrapositive.**

            Since the contrapositive is true, the original statement is true.
            **However, the question asked for a DIRECT proof.** My mistake was in thinking the initial statement was false. Since it's true, a direct proof must exist. Let's try to construct one by manipulating $x+y>0$ to yield $x>0$ or $y>0$.

            **Let's try another approach for direct proof:**
            We are given $x+y > 0$.
            We want to prove $x>0$ or $y>0$.
            Suppose, for the sake of argument, that the conclusion is FALSE.
            If "$x>0$ or $y>0$" is false, then its negation must be true.
            The negation of "$x>0$ or $y>0$" is "$x \le 0$ AND $y \le 0$".

            Now, let's assume this negation is true: $x \le 0$ AND $y \le 0$.
            If $x \le 0$, it means $x$ is zero or negative.
            If $y \le 0$, it means $y$ is zero or negative.
            The sum of two non-positive numbers must be non-positive.
            So, if $x \le 0$ and $y \le 0$, then $x+y \le 0$.

            But our initial hypothesis was $x+y > 0$.
            We have reached a contradiction: $x+y > 0$ and $x+y \le 0$. This is impossible.
            Therefore, our assumption that the conclusion ("$x>0$ or $y>0$") was false must be wrong.
            This means the conclusion "$x>0$ or $y>0$" must be true.

            **This is a Proof by Contradiction**, which is a *type* of direct proof in the sense that it also starts by assuming the hypothesis. The specific method used here to reach the conclusion is by assuming the negation of the conclusion and deriving a contradiction. It's a very common and powerful technique.

            **Is there a purely algebraic direct proof without contradiction or cases?**
            Consider $x+y > 0$.
            If $x$ is positive, we are done.
            If $x$ is not positive (i.e., $x \le 0$), then we must show that $y$ has to be positive to satisfy $x+y > 0$.
            If $x \le 0$, then $-x \ge 0$.
            From $x+y > 0$, we can write $y > -x$.
            Since $-x \ge 0$, this means $y$ must be greater than a non-negative number.
            If $y$ is greater than a non-negative number, then $y$ must be positive.
            Thus, if $x \le 0$, then $y > 0$.
            This covers all possibilities and shows that either $x>0$ or ($x\le 0$ implies $y>0$), which means $x>0$ or $y>0$. This is a valid direct argument using a subtle case analysis on $x$.

            So, yes, the statement is true. The proof by contradiction shown above is a common and effective way to demonstrate it. This illustrates CO1 again, as we are building a valid chain of deductive reasoning.

---
**(Professor's Closing)**

Excellent work today! We've laid the groundwork for proving theorems by understanding the direct proof method. Remember, it's about building that logical bridge from the hypothesis to the conclusion, step-by-step, using definitions and valid inferences. Keep practicing these techniques, especially with the integer examples, as they are the building blocks for much of what we'll do next. See you in our next session!
