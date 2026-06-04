---
title: "Indirect proof (Proof by Contraposition)"
subject: "DISCRETE MATHEMATICS"
module: "Module 2: Mathematical logic and proofs"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fa1"
status: "completed"
scrapedAt: "2026-05-20T16:33:02.930Z"
---
Alright class, let's dive into the fascinating world of mathematical proofs! Today, we're going to tackle a very powerful and elegant technique known as **Indirect Proof**, and specifically, we'll focus on a common form called **Proof by Contraposition**.

You've already learned about direct proofs, where we start with our assumptions and logically march our way to the conclusion. That's like following a clear path from point A to point B. But sometimes, that path is hidden, overgrown, or just plain tricky to find. That's where indirect proofs come in, offering us a brilliant alternative.

### Module 2: Mathematical Logic and Proofs
#### Topic: Indirect Proof (Proof by Contraposition)

**Why do we need different proof techniques?**

Think about it. In Discrete Mathematics, we're often trying to establish the truth of statements. These statements can be about numbers, relationships between sets, properties of algorithms, and so much more. Being able to prove something with certainty is the bedrock of mathematical understanding and is absolutely crucial in computer science. For instance, when we're analyzing algorithms (and you'll do this a lot!), we need to *prove* that an algorithm will always terminate, or that it will produce the correct output. Knowing different proof strategies gives us more tools in our toolbox to tackle these problems.

This topic directly relates to **CO1: Check the validity of predicates in Propositional and Quantified Propositional Logic using truth tables, deductive reasoning and inference theory on Propositional Logic (Knowledge Level: K3)**. While truth tables are fantastic for propositional logic, they become unwieldy for statements involving quantifiers or more complex predicates. Proof techniques, like contraposition, allow us to reason about these more complex statements and establish their truth rigorously. They are the engine of deductive reasoning that goes beyond simple truth assignments.

---

#### The Essence of Indirect Proof: Thinking Backwards (and Sideways!)

Indirect proof is all about a clever shift in perspective. Instead of proving a statement directly, we prove *something else* that, if true, guarantees the original statement is also true. It's a bit like trying to prove that your friend, Sarah, is definitely at home. Instead of trying to find her directly (maybe she's out in the garden, or in the garage), you could try to prove that she's *not* at the library and *not* at the park. If you can conclusively show she's nowhere else she might be, then she *must* be at home.

There are two main flavors of indirect proofs:

1.  **Proof by Contradiction (Reductio ad Absurdum):** In this method, we assume the *opposite* of what we want to prove and then show that this assumption leads to a logical contradiction (like $P \land \neg P$, which is always false). If our assumption leads to something impossible, then the assumption itself must be false, meaning the original statement must be true.

2.  **Proof by Contraposition:** This is our main focus today. It's a special case of indirect proof that is particularly useful for proving **conditional statements** – statements of the form "If P, then Q" (often written as $P \implies Q$).

---

#### Understanding the Contrapositive: The Mirror Image of Implication

So, what exactly is a contrapositive? Let's take our conditional statement:

**If P, then Q**

The **contrapositive** of this statement is:

**If not Q, then not P** (or $\neg Q \implies \neg P$)

Let's write it out symbolically:

*   Original Statement: $P \implies Q$
*   Contrapositive Statement: $\neg Q \implies \neg P$

Now, here's the magic, and this is crucial for your understanding and for exams: **A conditional statement $P \implies Q$ is logically equivalent to its contrapositive $\neg Q \implies \neg P$.**

Why is this true? Let's think about it using truth tables.

| P     | Q     | $\neg P$ | $\neg Q$ | $P \implies Q$ | $\neg Q \implies \neg P$ |
| :---- | :---- | :------- | :------- | :------------- | :----------------------- |
| True  | True  | False    | False    | True           | True                     |
| True  | False | False    | True     | False          | False                    |
| False | True  | True     | False    | True           | True                     |
| False | False | True     | True     | True           | True                     |

Notice something? The columns for $P \implies Q$ and $\neg Q \implies \neg P$ are identical! This means they always have the same truth value. If one is true, the other is true. If one is false, the other is false. They are, in essence, the same statement dressed up differently. This equivalence is a cornerstone of what's being tested in **CO1**.

**Analogy Time:** Imagine you want to prove: "If it is raining (P), then the ground is wet (Q)."

The contrapositive of this is: "If the ground is *not* wet ($\neg Q$), then it is *not* raining ($\neg P$)."

If you can prove the contrapositive – that is, if you observe the ground is dry and correctly conclude that it cannot possibly be raining – then you've also proven the original statement! It's a perfectly valid way to establish the truth of the original "If P, then Q" statement.

**Key Takeaway:** To prove $P \implies Q$ using contraposition, you prove $\neg Q \implies \neg P$. You start by assuming $\neg Q$ and use logical steps to arrive at $\neg P$.

---

#### How to Construct a Proof by Contraposition: A Step-by-Step Guide

Let's break down the process. Suppose you want to prove a statement of the form "If P, then Q."

1.  **Identify P and Q:** Clearly identify the hypothesis (P) and the conclusion (Q) of the conditional statement you need to prove.
2.  **Formulate the Contrapositive:** State the contrapositive statement: "If not Q, then not P."
3.  **Assume the Negation of the Conclusion:** Start your proof by assuming that Q is false (i.e., assume $\neg Q$).
4.  **Use Logical Deduction:** Using your assumption ($\neg Q$) and any established facts, definitions, or theorems, logically deduce that P must also be false (i.e., deduce $\neg P$).
5.  **Conclude:** Since you have successfully shown that $\neg Q$ implies $\neg P$, and because a conditional statement is equivalent to its contrapositive, you have proven the original statement "If P, then Q."

**Professor's Note:** This technique is particularly useful when the negation of P or Q is easier to work with than P or Q themselves. It's about finding the easiest path, even if it means taking a detour!

---

#### Examples: Bringing Contraposition to Life

Let's look at some examples to solidify this.

**Example 1: A Simple Integer Property**

**Statement:** If $n$ is an integer such that $3n + 2$ is odd, then $n$ is odd.

*   **Identify P and Q:**
    *   P: "$3n + 2$ is odd"
    *   Q: "$n$ is odd"
*   **Formulate the Contrapositive:**
    *   "If $n$ is *not* odd, then $3n + 2$ is *not* odd."
    *   This translates to: "If $n$ is even, then $3n + 2$ is even."
*   **Proof by Contraposition:**
    *   Assume $n$ is even. (This is our $\neg Q$ ).
    *   By the definition of an even integer, there exists some integer $k$ such that $n = 2k$.
    *   Now, let's substitute this into the expression $3n + 2$:
        $3n + 2 = 3(2k) + 2$
        $3n + 2 = 6k + 2$
    *   We can factor out a 2:
        $3n + 2 = 2(3k + 1)$
    *   Since $k$ is an integer, $3k + 1$ is also an integer. Let $m = 3k + 1$.
    *   So, $3n + 2 = 2m$, where $m$ is an integer.
    *   By the definition of an even integer, $3n + 2$ is even. (This is our $\neg P$).
    *   We have successfully shown that if $n$ is even, then $3n + 2$ is even.
    *   Therefore, by contraposition, we conclude that if $3n + 2$ is odd, then $n$ is odd.

**See what we did?** We started by assuming $n$ was even (the opposite of "n is odd") and showed that $3n+2$ had to be even (the opposite of "$3n+2$ is odd"). This is much cleaner than trying to assume $3n+2$ is odd and then trying to directly isolate $n$.

**Example 2: Set Theory Connection (Relating to CO3)**

While CO3 focuses on classifying relations, understanding proofs helps us establish properties *about* these relations. Let's consider a simple implication that might arise in set theory.

**Statement:** Let $A$ and $B$ be sets. If $A \subseteq B$ and $B \subseteq A$, then $A=B$.

This is a fundamental property. Let's prove it using contraposition, though a direct proof is often more natural here. However, let's imagine a scenario where we're asked to prove the contrapositive of its negation.

Let's rephrase the statement slightly to make contraposition more obvious.
**Statement:** If $A \neq B$, then it is *not* the case that ($A \subseteq B$ and $B \subseteq A$).
This is equivalent to: If $A \neq B$, then ($A \not\subseteq B$ or $B \not\subseteq A$).

Let's try proving this version by contraposition (though it's a bit convoluted for this specific problem, it illustrates the method).

*   **Original Statement (rewritten):** If $A \neq B$, then ($A \not\subseteq B$ or $B \not\subseteq A$).
*   **Negation of the Conclusion:** We need to negate "$A \not\subseteq B$ or $B \not\subseteq A$". Using De Morgan's laws for propositions (which we've covered!), this becomes: $\neg(A \not\subseteq B) \land \neg(B \not\subseteq A)$.
    *   $\neg(A \not\subseteq B)$ means $A \subseteq B$.
    *   $\neg(B \not\subseteq A)$ means $B \subseteq A$.
    *   So, the negation of the conclusion is: ($A \subseteq B$ AND $B \subseteq A$).
*   **Formulate the Contrapositive:** If ($A \subseteq B$ AND $B \subseteq A$), then $A = B$.
*   **Proof by Contraposition:**
    *   Assume ($A \subseteq B$ AND $B \subseteq A$). (This is our $\neg Q$).
    *   By definition of subset, $A \subseteq B$ means that every element in $A$ is also in $B$.
    *   By definition of subset, $B \subseteq A$ means that every element in $B$ is also in $A$.
    *   Now, let's consider an arbitrary element $x$.
    *   If $x \in A$, then since $A \subseteq B$, we know $x \in B$.
    *   If $x \in B$, then since $B \subseteq A$, we know $x \in A$.
    *   So, for any element $x$, if $x \in A$, then $x \in B$. And if $x \in B$, then $x \in A$. This means that $A$ and $B$ contain precisely the same elements.
    *   Therefore, $A = B$. (This is our $\neg P$).
    *   We have proven that if $A \subseteq B$ and $B \subseteq A$, then $A=B$. By contraposition, this proves our original statement.

**Professor's Insight:** Sometimes, reformulating the statement to make the hypothesis and conclusion clearer for contraposition is a useful strategy. Notice how proving "$A \subseteq B$ and $B \subseteq A$ implies $A=B$" is quite direct, and its contrapositive is the original statement we started with! This highlights the tight connection.

---

#### When is Proof by Contraposition Most Useful?

Proof by contraposition shines when:

*   **The conclusion (Q) is easier to negate than the hypothesis (P).** If saying "not Q" leads to a simpler starting point, contraposition is your friend.
*   **The hypothesis (P) is harder to work with directly.** If assuming P makes it difficult to reach Q, consider if assuming not Q makes it easier to reach not P.
*   **Proving properties of "for all" statements.** Many statements in mathematics are universal quantifications (e.g., "For all integers n, ..."). Contraposition is a powerful tool for these. This relates to **CO1** as we deal with quantified statements.

**Common Pitfall:** Be careful not to confuse the contrapositive with the **inverse** ($\neg P \implies \neg Q$) or the **converse** ($Q \implies P$). Neither the inverse nor the converse are logically equivalent to the original statement $P \implies Q$.

*   **Converse:** If $n$ is odd, then $3n+2$ is odd. (This is FALSE. If $n=3$, $3n+2 = 11$, which is odd. But if $n=5$, $3n+2 = 17$, which is odd. Hmm, wait. Let's try $n=1$, $3n+2=5$ odd. $n=3$, $3n+2=11$ odd. It seems this might be true too... Ah, the original statement was "If $3n+2$ is odd, then $n$ is odd". Let's re-check my contrapositive: "If $n$ is even, then $3n+2$ is even." That was correct. Now the converse of the original statement: "If $n$ is odd, then $3n+2$ is odd." Let $n=2k+1$. Then $3n+2 = 3(2k+1)+2 = 6k+3+2 = 6k+5 = 2(3k+2)+1$. This IS odd. So, for this particular example, the converse is ALSO true! This is not always the case.)
*   **Inverse:** If $3n+2$ is not odd (i.e., even), then $n$ is not odd (i.e., even). (This is FALSE. If $3n+2 = 4$ (even), then $3n=2$, which means $n=2/3$, not an integer. If $3n+2$ is even, then $3n$ must be even. For $3n$ to be even, $n$ must be even. So it seems this is also true! My examples are leading me astray. Let's stick to the logic: $P \implies Q$ is NOT equivalent to $\neg P \implies \neg Q$. The key is *equivalence*. $P \implies Q$ IS equivalent to $\neg Q \implies \neg P$. That's our focus.)

The important relationship to remember is:
$P \implies Q \quad \equiv \quad \neg Q \implies \neg P$

And for completeness, although not equivalent to $P \implies Q$:
$Q \implies P \quad \equiv \quad \neg P \implies \neg Q$

So, the converse and the inverse are equivalent to each other, but not to the original statement. Always stick to proving the contrapositive!

---

#### Connection to Course Outcomes (COs)

*   **CO1 (Knowledge Level K3 - Understanding/Application):** Proof by contraposition is a core deductive reasoning technique. Understanding its logical equivalence to the original statement allows you to apply it to determine the validity of predicates and logical arguments, especially those involving implications. You're not just checking truth tables; you're building logical arguments that hold universally. For example, proving a statement about all even numbers using contraposition demonstrates this application.

---

#### Review and Quick Recall

*   **Goal:** Prove $P \implies Q$.
*   **Method:** Prove the contrapositive $\neg Q \implies \neg P$.
*   **Steps:** Assume $\neg Q$, deduce $\neg P$.
*   **Equivalence:** $P \implies Q$ is logically equivalent to $\neg Q \implies \neg P$.
*   **Don't confuse with:** Converse ($Q \implies P$) or Inverse ($\neg P \implies \neg Q$).

---

### Sample Questions with Answers

**1. Conceptual Question:**
Explain why proof by contraposition is considered an indirect proof method.

**Answer:**
Proof by contraposition is an indirect proof method because instead of directly demonstrating that the hypothesis leads to the conclusion (proving $P \implies Q$), we instead prove a logically equivalent but different statement: that the negation of the conclusion leads to the negation of the hypothesis (proving $\neg Q \implies \neg P$). We infer the truth of the original statement by establishing the truth of its equivalent contrapositive, rather than by a direct line of reasoning from P to Q.

**2. Exam-Oriented Question:**
Prove the following statement using proof by contraposition:
If $n$ is an integer and $n^2$ is even, then $n$ is even.

**Answer:**
*   **Statement:** If $n^2$ is even, then $n$ is even.
*   **Identify P and Q:**
    *   P: "$n^2$ is even"
    *   Q: "$n$ is even"
*   **Formulate the Contrapositive:** "If $n$ is not even, then $n^2$ is not even."
    *   This translates to: "If $n$ is odd, then $n^2$ is odd."
*   **Proof by Contraposition:**
    *   Assume $n$ is odd. (This is our $\neg Q$).
    *   By the definition of an odd integer, there exists an integer $k$ such that $n = 2k + 1$.
    *   Now, let's consider $n^2$:
        $n^2 = (2k + 1)^2$
        $n^2 = (2k)^2 + 2(2k)(1) + 1^2$
        $n^2 = 4k^2 + 4k + 1$
    *   We can rewrite this as:
        $n^2 = 2(2k^2 + 2k) + 1$
    *   Let $m = 2k^2 + 2k$. Since $k$ is an integer, $m$ is also an integer.
    *   So, $n^2 = 2m + 1$, which is the definition of an odd integer.
    *   Therefore, $n^2$ is odd. (This is our $\neg P$).
    *   We have successfully shown that if $n$ is odd, then $n^2$ is odd.
    *   By the principle of contraposition, the original statement "If $n^2$ is even, then $n$ is even" is true.

**3. Conceptual Question:**
What is the difference between a contrapositive, a converse, and an inverse of a conditional statement $P \implies Q$? Which of these is logically equivalent to $P \implies Q$?

**Answer:**
Given a conditional statement $P \implies Q$:
*   **Contrapositive:** $\neg Q \implies \neg P$. This statement *is* logically equivalent to $P \implies Q$.
*   **Converse:** $Q \implies P$. This statement is *not* logically equivalent to $P \implies Q$.
*   **Inverse:** $\neg P \implies \neg Q$. This statement is *not* logically equivalent to $P \implies Q$.

The contrapositive is the only one of the three that is guaranteed to have the same truth value as the original statement.

**4. Application Question (Relating to CO1):**
Consider the predicate $P(x)$: "$x$ is a prime number greater than 2".
Consider the predicate $Q(x)$: "$x$ is an odd number".
We want to prove: For all integers $x$, if $P(x)$, then $Q(x)$. (If $x$ is a prime number greater than 2, then $x$ is odd).

Describe how you would approach proving this using contraposition. What would you assume and what would you need to show?

**Answer:**
To prove "For all integers $x$, if $P(x)$, then $Q(x)$" using contraposition, we would prove its contrapositive: "For all integers $x$, if $\neg Q(x)$, then $\neg P(x)$".

*   **$\neg Q(x)$:** "$x$ is not an odd number", which means "$x$ is an even number".
*   **$\neg P(x)$:** "$x$ is not a prime number greater than 2".

So, the contrapositive statement to prove is: "For all integers $x$, if $x$ is an even number, then $x$ is not a prime number greater than 2."

**Proof Strategy:**
1.  **Assume $\neg Q(x)$:** Assume $x$ is an even number.
2.  **Deduce $\neg P(x)$:**
    *   If $x$ is an even number, then by definition, $x$ can be written as $x = 2k$ for some integer $k$.
    *   We are considering prime numbers greater than 2. The only even prime number is 2.
    *   If $x$ is an even number and $x > 2$, then $x$ must be a composite number (since it is divisible by 2 and is greater than 2).
    *   Therefore, if $x$ is an even number and $x > 2$, it cannot be a prime number greater than 2.
    *   Thus, $\neg P(x)$ holds: $x$ is not a prime number greater than 2.

This application shows how contraposition helps us reason about quantified statements and the properties of numbers, directly supporting CO1.

---

Keep practicing these proofs! The more you do, the more natural this way of thinking becomes. It's a fundamental skill that will serve you well throughout your studies in discrete mathematics and computer science.
