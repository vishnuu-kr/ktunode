---
title: "Resolution proofs"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 1: Introduction to Logic: Propositional Logic"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5ff8"
status: "completed"
scrapedAt: "2026-05-20T16:31:33.720Z"
---
# Module 1: Introduction to Logic: Propositional Logic - Resolution Proofs

Welcome, everyone! Today, we're diving into a powerful and elegant method for proving logical statements: **Resolution**. This technique is a cornerstone in propositional logic and has significant implications in areas like artificial intelligence and automated theorem proving. Think of it as a highly systematic way to check if an argument is valid, or more precisely, if a conclusion logically follows from a set of premises.

Our journey into resolution proofs connects directly with **Course Outcome 1 (CO1)**: "Apply logical reasoning and formal methods to construct and verify logical arguments and proofs involving propositions, truth tables, logical equivalence, and quantifiers." Resolution is precisely a formal method for verifying logical arguments. We’ll be using the tools we’ve learned about propositions, logical equivalence, and now, a specific proof strategy.

Let’s get started by recalling what we've already established about logical arguments. We know that an argument is valid if, whenever all the premises are true, the conclusion is also true. We’ve seen how to use truth tables to verify this. However, as the number of propositions grows, truth tables become unwieldy. Resolution offers a more automated and efficient approach, especially for complex arguments.

## 1. The Foundation: Clauses and Conjunctive Normal Form (CNF)

Before we can master resolution, we need to ensure our logical statements are in a specific format. This format is called **Conjunctive Normal Form (CNF)**. Don't let the name intimidate you; it's quite intuitive once we break it down.

### What is a Clause?

At its heart, resolution works on **clauses**. A clause is simply a **disjunction** (an OR statement) of one or more **literals**. What’s a literal? A literal is either a propositional variable (like $P$, $Q$, $R$) or its negation (like $\neg P$, $\neg Q$, $\neg R$).

Let's look at some examples:

*   $P \lor Q$ is a clause. The literals are $P$ and $Q$.
*   $\neg P \lor R \lor \neg S$ is a clause. The literals are $\neg P$, $R$, and $\neg S$.
*   $P$ is also a clause (a disjunction of one literal).
*   $\neg Q$ is also a clause.

Think of a clause as a set of conditions. If any one of these conditions is met, the entire clause is true. For instance, if you're deciding whether to go to the park ($P$) or watch a movie ($Q$), the statement "$P \lor Q$" means you'll be happy if you go to the park OR you watch a movie (or both!).

### What is Conjunctive Normal Form (CNF)?

A statement is in CNF if it is a **conjunction** (an AND statement) of one or more clauses.

So, CNF looks like:
$(Clause_1) \land (Clause_2) \land \dots \land (Clause_n)$

Where each $Clause_i$ is a disjunction of literals.

Examples of CNF:

*   $(P \lor \neg Q) \land (\neg P \lor R)$
*   $P \land (\neg Q \lor R \lor S)$
*   $(P \lor Q)$ (This is a single clause, which is also a conjunction of one clause.)

Why CNF? CNF is the language of resolution. Resolution operates by taking two clauses that share a literal and its negation, and producing a new clause that combines the remaining literals. This process is much cleaner and more systematic when everything is already structured as a conjunction of disjunctions.

**Crucial Point:** If you're given a logical argument, the first step is often to convert the premises and the *negation* of the conclusion into CNF. Grimaldi's "Discrete and Combinatorial Mathematics" (5th Edition) provides excellent guidance on the equivalences and steps needed for this conversion. We use these equivalences like implication elimination, De Morgan's laws, and double negation. For instance, $P \rightarrow Q$ is equivalent to $\neg P \lor Q$, which is a clause!

**Example of Conversion to CNF:**

Let's say we have the argument:
Premise 1: $P \rightarrow Q$
Premise 2: $Q \rightarrow R$
Conclusion: $P \rightarrow R$

To prove this using resolution, we'll take the premises and the negation of the conclusion, and convert them to CNF.

1.  **Premise 1 ($P \rightarrow Q$):** Equivalent to $\neg P \lor Q$. This is already a clause.
2.  **Premise 2 ($Q \rightarrow R$):** Equivalent to $\neg Q \lor R$. This is also a clause.
3.  **Negation of Conclusion ($\neg(P \rightarrow R)$):**
    *   $\neg(P \rightarrow R) \equiv \neg(\neg P \lor R)$ (Implication elimination)
    *   $\equiv \neg(\neg P) \land \neg R$ (De Morgan's Law)
    *   $\equiv P \land \neg R$ (Double negation)
    *   This gives us two clauses: $P$ and $\neg R$.

So, our set of clauses for resolution is:
$(\neg P \lor Q)$, $(\neg Q \lor R)$, $P$, $\neg R$.

See how each premise and part of the negated conclusion became one or more clauses? This is your starting point for resolution.

## 2. The Resolution Rule: The Heart of the Method

The resolution rule is elegantly simple. It's based on a fundamental logical equivalence:

**The Resolution Principle:**
Given two clauses, $C_1 = (\dots \lor P \lor \dots)$ and $C_2 = (\dots \lor \neg P \lor \dots)$, we can infer a new clause, $C_{new}$, which is the **disjunction of all literals in $C_1$ and $C_2$ except for $P$ and $\neg P$**.

In simpler terms: If you have a clause that says "P is true OR something else is true" and another clause that says "NOT P is true OR something else is true", then you can conclude that "something else from the first clause is true OR something else from the second clause is true". The $P$ and $\neg P$ "cancel each other out".

Let's write this more formally:
If $C_1 = L_1 \lor \dots \lor L_k \lor P$ and $C_2 = M_1 \lor \dots \lor M_m \lor \neg P$,
then $Res(C_1, C_2) = L_1 \lor \dots \lor L_k \lor M_1 \lor \dots \lor M_m$.

This is sometimes called the **resolvent**.

**Analogy Time:** Imagine you’re at a party.
*   **Clause 1:** "Either Alice is coming (A) or Bob is coming (B)." (A $\lor$ B)
*   **Clause 2:** "Either Alice is NOT coming ($\neg$A) or Carol is coming (C)." ($\neg$A $\lor$ C)

Notice that Alice's presence or absence is the key here. If Alice *is* coming, Clause 1 is satisfied. If Alice is *not* coming, Clause 2 tells us Carol must be coming. In either scenario (Alice coming or not coming), what’s the combined outcome? If Alice comes, B could happen. If Alice doesn't come, C must happen. So, the conclusion is: **Either Bob is coming (B) or Carol is coming (C).** (B $\lor$ C).

The resolution rule allows us to derive this new clause from the original two. This is a direct application of **CO1**, using formal methods to verify logical arguments.

**Example Revisited (from earlier):**
Our clauses were: $(\neg P \lor Q)$, $(\neg Q \lor R)$, $P$, $\neg R$.

Let’s apply resolution:

1.  **Resolving $(\neg P \lor Q)$ and $P$:**
    *   Here, $P$ and $\neg P$ are the complementary literals.
    *   The remaining literals are $Q$.
    *   New clause: $Q$.

2.  **Resolving $(\neg Q \lor R)$ and $\neg R$:**
    *   Here, $R$ and $\neg R$ are the complementary literals.
    *   The remaining literal is $\neg Q$.
    *   New clause: $\neg Q$.

Now our set of clauses is: $(\neg P \lor Q)$, $(\neg Q \lor R)$, $P$, $\neg R$, $Q$, $\neg Q$.

3.  **Resolving $(\neg Q \lor R)$ and $Q$:**
    *   Here, $Q$ and $\neg Q$ are the complementary literals.
    *   The remaining literal is $R$.
    *   New clause: $R$.

Our clauses are now: $(\neg P \lor Q)$, $(\neg Q \lor R)$, $P$, $\neg R$, $Q$, $\neg Q$, $R$.

4.  **Resolving $(\neg P \lor Q)$ and $\neg Q$:**
    *   Here, $Q$ and $\neg Q$ are the complementary literals.
    *   The remaining literal is $\neg P$.
    *   New clause: $\neg P$.

Clauses: $(\neg P \lor Q)$, $(\neg Q \lor R)$, $P$, $\neg R$, $Q$, $\neg Q$, $R$, $\neg P$.

5.  **Resolving $P$ and $\neg P$:**
    *   Here, $P$ and $\neg P$ are the complementary literals.
    *   There are no remaining literals from either clause.
    *   This results in an **empty clause**, often denoted by $\square$ or {}.

**What does the empty clause mean?** This is the *most critical takeaway* about resolution.

## 3. Proving Invalidity: The Empty Clause ($\square$)

The goal of a resolution proof for an argument is to show that the set of clauses derived from the premises and the *negated* conclusion is **unsatisfiable**. A set of clauses is unsatisfiable if there is no assignment of truth values to the propositional variables that makes all clauses true simultaneously.

**The Empty Clause ($\square$) represents a contradiction.** It is always false, regardless of the truth values of any propositions.

**Resolution Strategy for Proving an Argument Valid:**

1.  **Convert the Premises to CNF:** Each premise becomes one or more clauses.
2.  **Negate the Conclusion:** Convert the negation of the conclusion into CNF. This will also result in one or more clauses.
3.  **Apply the Resolution Rule Repeatedly:** Take any two existing clauses, resolve them to produce a new clause, and add this new clause to your set.
4.  **The Goal: Derive the Empty Clause ($\square$):** If you can derive the empty clause through a sequence of resolutions, you have proven that the original set of clauses (premises + negated conclusion) is unsatisfiable. This means that the premises and the negated conclusion *cannot* all be true simultaneously. Therefore, the premises and the original conclusion *must* be consistent, meaning the conclusion logically follows from the premises.

**In our example:** We successfully derived the empty clause ($\square$) by resolving $P$ and $\neg P$. This means our initial set of clauses, which consisted of the premises $(P \rightarrow Q)$, $(Q \rightarrow R)$ and the negated conclusion $\neg(P \rightarrow R)$, is unsatisfiable. Therefore, the original argument, "If $P \rightarrow Q$ and $Q \rightarrow R$, then $P \rightarrow R$", is **valid**. This directly demonstrates **CO1** by verifying a logical argument using a formal proof method.

**Think of it like this:** We started with a collection of statements. We assumed the opposite of what we wanted to prove was true, along with the original statements. If this combined assumption leads to an undeniable contradiction (the empty clause), then our initial assumption (the opposite of what we wanted to prove) must be false. Hence, what we wanted to prove must be true.

**Common Pitfalls:**
*   **Incorrect CNF conversion:** Errors in De Morgan's laws or implication elimination can lead to an incorrect set of starting clauses.
*   **Forgetting to negate the conclusion:** Resolution proves that a set of statements is unsatisfiable. To prove an argument is valid, you must try to show the premises AND the NEGATED conclusion is unsatisfiable.
*   **Not applying resolution correctly:** Ensure you are only resolving clauses that share a literal and its negation.

## 4. Demonstrating Different Types of Arguments

Resolution is a powerful tool for checking the validity of various logical statements. Let's consider another example.

**Example: Prove that from $P \lor Q$, $\neg P \lor R$, and $\neg Q \lor R$, we can deduce $R$.**

This means we want to prove:
$((P \lor Q) \land (\neg P \lor R) \land (\neg Q \lor R)) \rightarrow R$ is valid.

1.  **Convert Premises to CNF:**
    *   Premise 1: $P \lor Q$ (already a clause)
    *   Premise 2: $\neg P \lor R$ (already a clause)
    *   Premise 3: $\neg Q \lor R$ (already a clause)

2.  **Negate the Conclusion:**
    *   Conclusion: $R$
    *   Negated Conclusion: $\neg R$ (already a clause)

3.  **Set of Clauses:**
    *   $C_1: P \lor Q$
    *   $C_2: \neg P \lor R$
    *   $C_3: \neg Q \lor R$
    *   $C_4: \neg R$

4.  **Apply Resolution:**

    *   **Resolve $C_2$ and $C_4$:**
        *   $(\neg P \lor R)$ and $\neg R$.
        *   Complementary literals: $R$ and $\neg R$.
        *   Remaining literal: $\neg P$.
        *   New Clause $C_5: \neg P$.

    *   **Resolve $C_3$ and $C_4$:**
        *   $(\neg Q \lor R)$ and $\neg R$.
        *   Complementary literals: $R$ and $\neg R$.
        *   Remaining literal: $\neg Q$.
        *   New Clause $C_6: \neg Q$.

    *   **Resolve $C_1$ and $C_5$:**
        *   $(P \lor Q)$ and $\neg P$.
        *   Complementary literals: $P$ and $\neg P$.
        *   Remaining literal: $Q$.
        *   New Clause $C_7: Q$.

    *   **Resolve $C_1$ and $C_6$:**
        *   $(P \lor Q)$ and $\neg Q$.
        *   Complementary literals: $Q$ and $\neg Q$.
        *   Remaining literal: $P$.
        *   New Clause $C_8: P$.

    *   **Resolve $C_5$ and $C_8$:**
        *   $\neg P$ and $P$.
        *   Complementary literals: $\neg P$ and $P$.
        *   No remaining literals.
        *   New Clause $C_9: \square$ (The empty clause!)

We have successfully derived the empty clause! This confirms that the initial set of clauses (premises + negated conclusion) is unsatisfiable. Therefore, the conclusion $R$ logically follows from the premises $P \lor Q$, $\neg P \lor R$, and $\neg Q \lor R$.

This entire process is a concrete application of **CO1**, demonstrating how to use formal methods to verify logical arguments.

### The Concept of Refutation

Resolution is often called a **refutation proof** method because it works by refuting (proving false) the assumption that the premises and the negation of the conclusion can all be true. If you can't find an assignment of truth values that makes them all true, then the original statement must be true.

## 5. Relating Resolution to Course Outcomes and Textbooks

Let's explicitly tie this back to our learning objectives and the recommended readings.

*   **CO1: Apply logical reasoning and formal methods to construct and verify logical arguments and proofs...**
    Resolution is the *epitome* of applying formal methods. We transform statements into a standard form (CNF) and then apply a specific rule (resolution) systematically. The derivation of the empty clause is the formal verification that the argument is valid. This is a higher level of understanding than just using truth tables, as it involves manipulation and deduction.

*   **Textbook Connections:**
    *   **Grimaldi (5th Ed.):** Chapters on propositional logic, logical equivalence, and formal proof methods will cover the basics of CNF conversion and the resolution principle. Grimaldi often emphasizes the systematic nature of these proofs, which is key for exams. He provides numerous examples of converting complex formulas to CNF.
    *   **Veerarajan:** Likely offers a clear explanation of logical equivalences and proof techniques, including resolution, often with a focus on algorithmic thinking, which is very relevant to how resolution is used in computer science.
    *   **Rosen (7th Ed.):** Rosen's comprehensive approach typically covers resolution as a method for proving unsatisfiability and its role in automated reasoning. He’ll likely highlight the connection between resolution and the logical completeness of propositional calculus.
    *   **Tremblay and Manohar:** This book is particularly strong on the computational aspects and often presents resolution as an algorithm for theorem proving. They might delve into strategies for choosing which clauses to resolve for efficiency.
    *   **Chandrasekharaiah, Mott, Kandel, Baker:** These texts will also provide foundational definitions and examples, reinforcing the core concepts. Mott et al., for example, might connect logical proofs to program correctness.

The core idea is that resolution provides a **decision procedure** for propositional logic. For any given statement, resolution can tell you definitively whether it's a valid argument or not.

## 6. Summary and Key Takeaways

To wrap up our discussion on resolution proofs, let's reinforce the most important points:

*   **Resolution operates on clauses:** which are disjunctions of literals.
*   **Conjunctive Normal Form (CNF) is essential:** Arguments must be converted into CNF (a conjunction of clauses) before applying resolution.
*   **The Resolution Rule:** Resolving $C_1 = (\dots \lor P \lor \dots)$ and $C_2 = (\dots \lor \neg P \lor \dots)$ yields $C_{new} = (\dots \lor \dots)$, where $P$ and $\neg P$ are removed.
*   **The Goal is the Empty Clause ($\square$):** Deriving the empty clause signifies that the set of clauses (premises + negated conclusion) is unsatisfiable, proving the argument is valid.
*   **Refutation Proof:** Resolution is a refutation method. We prove something is true by showing that its opposite leads to a contradiction.

**Remember this:** Resolution is a mechanical process. If you correctly convert your statements to CNF and systematically apply the resolution rule, you will either derive the empty clause or you will reach a point where no more resolutions are possible. If the latter happens without deriving $\square$, then the argument is invalid. This systematic nature makes it incredibly valuable for computer programs designed to check logical arguments.

Mastering CNF conversion and the application of the resolution rule will serve you well, not just in this course but in many areas of computer science and mathematics.

---

## Sample Questions and Answers

Here are some questions to test your understanding, ranging from conceptual to more application-oriented.

**Question 1 (Conceptual):** What is the fundamental purpose of converting logical statements into Conjunctive Normal Form (CNF) before applying the resolution rule?

**Answer:** CNF provides a standardized structure (a conjunction of clauses, where clauses are disjunctions of literals) that the resolution rule can effectively operate on. The resolution rule works by identifying complementary literals ($P$ and $\neg P$) within clauses, and CNF ensures that all logical information is broken down into these disjunctive units, making the systematic cancellation of complementary literals possible. Without CNF, the rule would be much harder to apply consistently across different logical expressions.

**Question 2 (Application):** Prove that the following argument is valid using resolution:
Premises:
1.  $P \vee Q$
2.  $\neg P \vee R$
Conclusion: $Q \vee R$

**Answer:**
1.  **Convert Premises to CNF:**
    *   Premise 1: $P \vee Q$ (already a clause)
    *   Premise 2: $\neg P \vee R$ (already a clause)

2.  **Negate the Conclusion:**
    *   Conclusion: $Q \vee R$
    *   Negated Conclusion: $\neg(Q \vee R)$
    *   Using De Morgan's Law: $\neg Q \wedge \neg R$
    *   This gives us two clauses: $\neg Q$ and $\neg R$.

3.  **Set of Clauses for Resolution:**
    *   $C_1: P \vee Q$
    *   $C_2: \neg P \vee R$
    *   $C_3: \neg Q$
    *   $C_4: \neg R$

4.  **Apply Resolution:**
    *   **Resolve $C_1$ and $C_3$:**
        *   $(P \vee Q)$ and $\neg Q$.
        *   Complementary literals: $Q$ and $\neg Q$.
        *   Remaining literal: $P$.
        *   New Clause $C_5: P$.

    *   **Resolve $C_2$ and $C_5$:**
        *   $(\neg P \vee R)$ and $P$.
        *   Complementary literals: $\neg P$ and $P$.
        *   Remaining literal: $R$.
        *   New Clause $C_6: R$.

    *   **Resolve $C_6$ and $C_4$:**
        *   $R$ and $\neg R$.
        *   Complementary literals: $R$ and $\neg R$.
        *   No remaining literals.
        *   New Clause $C_7: \square$ (Empty Clause)

5.  **Conclusion:** Since the empty clause ($\square$) was derived, the set of clauses (premises + negated conclusion) is unsatisfiable. Therefore, the argument is valid.

**Question 3 (Conceptual/Exam Focus):** If a resolution proof is attempted for a valid argument, what is guaranteed to happen? What happens if the argument is invalid?

**Answer:** If a resolution proof is attempted for a **valid** argument, it is guaranteed that the empty clause ($\square$) will eventually be derived. This is because a valid argument means the premises imply the conclusion, so the premises and the negation of the conclusion form an unsatisfiable set of statements.

If the argument is **invalid**, it means that the conclusion does not logically follow from the premises. In this case, the set of clauses formed by the premises and the negation of the conclusion is satisfiable. During the resolution process, you will eventually reach a state where no more new clauses can be derived by applying the resolution rule, and the empty clause will *not* have been produced. You will have a set of clauses, none of which can be resolved further to produce a contradiction.
