---
title: "Proof by counter examples"
subject: "DISCRETE MATHEMATICS"
module: "Module 2: Mathematical logic and proofs"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fa3"
status: "completed"
scrapedAt: "2026-05-20T16:33:04.364Z"
---
Absolutely! Let's dive into the fascinating world of Proof by Counterexample in Discrete Mathematics. Think of this as your go-to guide for understanding how to disprove mathematical statements, a crucial skill in our journey through logic and proofs.

***

# Module 2: Mathematical Logic and Proofs - Proof by Counterexample

Welcome back! In this module, we're building our foundation in how mathematicians construct arguments and establish truths. We've touched upon direct proofs and maybe even indirect ones. Today, we're going to explore a different, yet incredibly powerful, technique: **Proof by Counterexample**.

This is where we learn to be detectives in mathematics. Instead of proving something is *always* true, we're looking for that one instance, that single exception, that shows a statement is *not* always true. It's like being a quality control inspector; you only need one faulty product to reject an entire batch.

### Connecting to Our Course Objectives

Before we start digging into the mechanics, let's see how this fits into our broader learning goals for this course.

*   **CO1: Checking the validity of predicates...** Understanding counterexamples is fundamental to checking validity. If you can find *one* instance where a quantified statement (like "for all x, P(x) is true") fails, you've proven it's invalid. This directly relates to our ability to analyze and validate logical statements.
*   **General Skills:** While not explicitly listed in every CO, the ability to construct and understand proofs (or disproofs) is a cornerstone of mathematical reasoning. It underpins problem-solving across all areas of discrete mathematics, from counting to relations to algorithms.

### What Exactly is a Counterexample?

Let's start with the basics. A **statement** in mathematics is a declarative sentence that is either true or false. Many mathematical statements are *universal quantifiers*. These are statements that claim something is true for *every single element* in a given set.

Consider a statement like: "For every integer $n$, $n^2 > n$."

To prove this statement is true, we'd have to check *every single integer* – positive, negative, and zero. That's an infinite number of checks! Thankfully, direct proofs and other methods are designed for this.

However, if we want to prove this statement is *false*, we don't need to check infinitely many integers. We only need to find **one single integer** for which the statement $n^2 > n$ does *not* hold. This single integer is our **counterexample**.

**Definition:** A **counterexample** to a universal statement is an instance that satisfies the conditions of the statement but violates the conclusion. In simpler terms, it's a specific example that shows the universal statement is false.

### How to Find and Use a Counterexample

The process is elegantly simple, yet requires careful thought:

1.  **Understand the Statement:** Break down the statement. What are the conditions? What is the conclusion? What set are we talking about (integers, real numbers, even numbers, etc.)?
2.  **Identify the Universal Quantifier:** Look for phrases like "for all," "every," "any," "always." These signal that you need to prove it for *every* case.
3.  **Test Potential Candidates:** If the statement claims something is true for all members of a set, start by testing values that seem "edge" cases or might be tricky. Think about:
    *   Zero
    *   Negative numbers
    *   Small positive numbers
    *   Numbers that might behave differently (e.g., even vs. odd, prime vs. composite).
4.  **The "Aha!" Moment:** If you find a value that meets the conditions but *not* the conclusion, you've found your counterexample!
5.  **Construct the Disproof:** Clearly state the counterexample and show *why* it is a counterexample. This means demonstrating that it satisfies the premise of the statement but contradicts its conclusion.

Let's illustrate this with some examples.

**Example 1: A Simple Arithmetic Claim**

**Statement:** For every positive integer $n$, $n^2 + n + 41$ is a prime number.

*   **Analysis:** We're looking at positive integers ($n = 1, 2, 3, \dots$). The claim is that plugging any of these into the expression $n^2 + n + 41$ will always result in a prime number.
*   **Testing:**
    *   If $n = 1$, $1^2 + 1 + 41 = 1 + 1 + 41 = 43$. Is 43 prime? Yes. So far, so good.
    *   If $n = 2$, $2^2 + 2 + 41 = 4 + 2 + 41 = 47$. Is 47 prime? Yes.
    *   If $n = 3$, $3^2 + 3 + 41 = 9 + 3 + 41 = 53$. Is 53 prime? Yes.
    *   If $n = 10$, $10^2 + 10 + 41 = 100 + 10 + 41 = 151$. Is 151 prime? Yes.
*   **The "Aha!" Moment:** These are all positive results. The statement claims "for *every* positive integer." We need to be systematic. Let's try a larger number, or perhaps a number related to 41. What if $n = 41$?
    *   If $n = 41$, $41^2 + 41 + 41$.
    *   We can factor out 41: $41 \times (41 + 1 + 1) = 41 \times 43$.
    *   The result is $41 \times 43$. Is this number prime? Absolutely not! It's divisible by 41 and 43.

*   **Constructing the Disproof:**
    *   The statement is "For every positive integer $n$, $n^2 + n + 41$ is a prime number."
    *   Consider $n = 41$.
    *   When $n=41$, the expression evaluates to $41^2 + 41 + 41 = 1681 + 41 + 41 = 1763$.
    *   We can rewrite this as $41(41 + 1 + 1) = 41(43) = 1763$.
    *   Since 1763 is divisible by 41 (and 43), it is not a prime number.
    *   Therefore, $n=41$ is a counterexample to the statement. The statement is false.

**Remember this:** Finding that *one* instance where the rule breaks is enough to disprove a universal claim. This is incredibly efficient! This type of problem, related to prime-generating polynomials, is a classic example used in many texts, including Rosen's "Discrete Mathematics and Its Applications," to illustrate the concept.

**Example 2: A Claim About Even Numbers**

**Statement:** For every even integer $n$, $n+1$ is an even integer.

*   **Analysis:** We are considering even integers. An even integer is any integer that can be expressed as $2k$ for some integer $k$. The statement claims that if you add 1 to an even integer, the result is also even.
*   **Testing:**
    *   Let's pick an even integer, say $n=2$. $n+1 = 2+1 = 3$. Is 3 even? No, it's odd.
*   **The "Aha!" Moment:** We found an example almost immediately!

*   **Constructing the Disproof:**
    *   The statement is "For every even integer $n$, $n+1$ is an even integer."
    *   Consider the even integer $n = 2$.
    *   Then $n+1 = 2+1 = 3$.
    *   The number 3 is an odd integer, not an even integer.
    *   Therefore, $n=2$ is a counterexample to the statement. The statement is false.

This might seem trivial, but the process is the same. We're applying logical reasoning to specific instances.

**Example 3: A Statement About Divisibility**

**Statement:** For any integers $a$ and $b$, if $a$ divides $b$ and $b$ divides $a$, then $a=b$.

*   **Analysis:** The conditions are: $a$ and $b$ are integers. $a$ divides $b$ (written $a|b$) means $b = ka$ for some integer $k$. $b$ divides $a$ (written $b|a$) means $a = mb$ for some integer $m$. The conclusion is $a=b$.
*   **Testing:**
    *   Let $a=5$, $b=10$. Does $a|b$? Yes, $10 = 2 \times 5$. Does $b|a$? No, $5$ does not divide $10$ such that $10 = k \times 5$ where k is an integer... Oh wait, that's backwards. $a$ divides $b$ means $b$ is a multiple of $a$.
    *   Let's rephrase: $a|b$ means $b = ka$ for some integer $k$. $b|a$ means $a = mb$ for some integer $m$.
    *   If $a=5$, $b=10$: $5|10$ because $10 = 2 \times 5$. Does $10|5$? No, because $5$ is not a multiple of $10$. This pair doesn't satisfy the conditions.
    *   We need *both* conditions to be true.
    *   Let $a=3$, $b=6$. $3|6$ (since $6 = 2 \times 3$). Does $6|3$? No.
    *   What if $a=6$, $b=3$? $6|3$? No.
    *   What if $a=5$, $b=5$? $5|5$ (since $5 = 1 \times 5$). $5|5$ (since $5 = 1 \times 5$). Both conditions are true. Is $a=b$? Yes, $5=5$. This example *supports* the statement.
    *   What if $a=-5$, $b=-5$? $-5|-5$ (since $-5 = 1 \times -5$). $-5|-5$ (since $-5 = 1 \times -5$). Both true. Is $a=b$? Yes, $-5=-5$. This also supports the statement.
    *   The statement says "for *any* integers $a$ and $b$". What if one is positive and one is negative?
    *   Let $a=5$, $b=-5$. Does $a|b$? Is $-5$ a multiple of $5$? Yes, $-5 = (-1) \times 5$. So $5|-5$.
    *   Does $b|a$? Is $5$ a multiple of $-5$? Yes, $5 = (-1) \times (-5)$. So $-5|5$.
    *   Both conditions are satisfied! What is the conclusion? $a=b$? Is $5 = -5$? No, $5 \neq -5$.

*   **The "Aha!" Moment:** We found a pair where the premises hold but the conclusion doesn't.

*   **Constructing the Disproof:**
    *   The statement is "For any integers $a$ and $b$, if $a$ divides $b$ and $b$ divides $a$, then $a=b$."
    *   Consider the integers $a = 5$ and $b = -5$.
    *   Check the conditions:
        *   Does $a$ divide $b$? Yes, because $b = -1 \times a$ (i.e., $-5 = -1 \times 5$).
        *   Does $b$ divide $a$? Yes, because $a = -1 \times b$ (i.e., $5 = -1 \times (-5)$).
    *   Both conditions are met.
    *   Check the conclusion: Is $a=b$? No, $5 \neq -5$.
    *   Therefore, the pair $(a=5, b=-5)$ is a counterexample to the statement. The statement is false.

**Important Nuance:** This is a good moment to discuss the importance of *all* conditions. For this statement to be true, it must hold for *all* integers. The moment we find one exception, the entire statement is invalidated. This is a very direct application of how we can disprove universal statements.

### When is Proof by Counterexample Applicable?

Proof by counterexample is *only* used to disprove **universal statements**.

*   **Universal Statements:** "For all $x$ in $S$, $P(x)$ is true."
*   **Existential Statements:** "There exists an $x$ in $S$ such that $P(x)$ is true."

To disprove an existential statement, you don't find a counterexample. Instead, you show that no such element exists, often by proving its negation (which is a universal statement).

For example, to disprove "There exists an even prime number greater than 2":
You would negate it: "It is not the case that there exists an even prime number greater than 2," which is equivalent to "For all even prime numbers $x$, $x \le 2$." Then you'd prove *this* universal statement.

**Key Takeaway:** Proof by counterexample is for *disproving* statements that claim something is true for *all* cases.

### Common Pitfalls and How to Avoid Them

1.  **Confusing Disproving an Existential Statement with Disproving a Universal Statement:** As mentioned, if a statement says "There exists..." and you can't find one, that doesn't mean it's false. You have to prove its negation. But if a statement says "For all..." and you find one that fails, it *is* false.
2.  **Not Checking All Conditions:** Make sure your proposed counterexample actually satisfies *all* the "if" parts of the statement before you claim it violates the "then" part.
3.  **Making Calculation Errors:** Double-check your arithmetic! A simple mistake in calculation can lead you to believe you've found a counterexample when you haven't, or vice-versa.
4.  **Assuming a Statement is True:** Don't stop looking for counterexamples just because the first few cases you test work. The statement is claimed to be true for *all* cases, so you need to be thorough.

### Examples from Textbooks

Rosen's textbook, for instance, often presents statements like:
*   "For all real numbers $x$, if $x > 2$, then $x^2 > 4$." (This is TRUE, so you can't use a counterexample to disprove it).
*   "For all integers $x$, $x^2 > x$." (We saw this earlier. $n=0$ gives $0^2 > 0$ which is false. $n=1$ gives $1^2 > 1$ which is false. So $n=0$ or $n=1$ are counterexamples).

Schaum's Outlines is also a fantastic resource for practice problems. They might offer statements like:
*   "The sum of two odd numbers is always odd." (Let's test: $3+5=8$. 8 is even, not odd. So, 3 and 5 are counterexamples. The statement is false.)
*   "If $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$, then $ac \equiv bd \pmod{m}$." (This is actually a true statement, so you can't use a counterexample to disprove it. You'd need a different proof method.)

### Relating to Course Outcomes

*   **CO1: Check the validity of predicates...** This is precisely what we are doing. By finding a counterexample, we are demonstrating that a predicate (like $P(n): n^2 + n + 41$ is prime) is *not* universally true for a given domain. It allows us to analyze and invalidate quantified statements.

### Summary and Key Takeaways

*   **Proof by counterexample is used to DISPROVE universal statements.** A universal statement claims something is true for *every* element in a set.
*   **A counterexample is a single instance** that satisfies the conditions of the statement but contradicts its conclusion.
*   **Finding one counterexample is enough to show a universal statement is FALSE.**
*   **When looking for counterexamples, consider edge cases:** zero, negative numbers, small values, values related to the constants in the statement.
*   **Always verify that your proposed counterexample meets ALL the premises** of the statement before concluding it violates the conclusion.

This method is incredibly powerful because it's efficient. Instead of proving something is universally true (which can be very hard), disproving it can sometimes be as simple as finding one exception. It's a critical tool in your mathematical proof toolkit.

***

### Sample Questions with Answers

**Question 1 (Conceptual):**

Explain the difference between proving a statement false and proving it true. How does proof by counterexample fit into this?

**Answer:**
Proving a statement true generally requires demonstrating that it holds for all valid instances. This often involves structured proofs like direct proof, proof by contrapositive, or proof by contradiction. Proving a statement false, especially a *universal* statement (one that claims something for *all* cases), can be achieved much more efficiently by finding a single instance where it fails. This instance is called a counterexample. Proof by counterexample is the method used to find and present such an instance, thereby disproving the universal statement.

**Question 2 (Application):**

Disprove the following statement: "For every integer $n$, if $n$ is divisible by 4, then $n$ is divisible by 8."

**Answer:**
*   **Statement Analysis:** The statement claims that any integer divisible by 4 must also be divisible by 8. We are looking for an integer $n$ such that $n$ is a multiple of 4, but $n$ is *not* a multiple of 8.
*   **Testing Candidates:**
    *   Let $n=4$. Is 4 divisible by 4? Yes ($4 = 1 \times 4$). Is 4 divisible by 8? No.
    *   This single example satisfies the condition (divisible by 4) but violates the conclusion (divisible by 8).
*   **Constructing the Disproof:**
    *   The statement is: "For every integer $n$, if $n$ is divisible by 4, then $n$ is divisible by 8."
    *   Consider the integer $n=4$.
    *   $n=4$ is divisible by 4, since $4 = 1 \times 4$. This satisfies the premise.
    *   However, $n=4$ is not divisible by 8, because there is no integer $k$ such that $4 = k \times 8$. This violates the conclusion.
    *   Therefore, $n=4$ is a counterexample, and the statement is false.

**Question 3 (Conceptual/Exam-Oriented):**

Which of the following types of statements can be disproven using a counterexample?
a) "There exists a prime number $p$ such that $p$ is even."
b) "For all real numbers $x$, $x^2 \ge 0$."
c) "For all integers $n$, $n^2 - n$ is an even number."

**Answer:**
The correct answer is **(c)**.

*   **Explanation:**
    *   **(a) "There exists a prime number $p$ such that $p$ is even."** This is an existential statement. To disprove it, you'd have to show that *no* such prime number exists. We know the number 2 is prime and even. So, this statement is actually true. You cannot disprove a true statement with a counterexample. If it were false, you'd prove its negation.
    *   **(b) "For all real numbers $x$, $x^2 \ge 0$."** This is a universal statement. However, this statement is TRUE. If you try to find a counterexample (a real number whose square is negative), you won't find one. You would need a different proof method (like considering cases for positive, negative, and zero $x$) to prove it true. You use counterexamples only to disprove statements.
    *   **(c) "For all integers $n$, $n^2 - n$ is an even number."** This is a universal statement. We can attempt to find a counterexample.
        *   Let $n=1$: $1^2 - 1 = 1 - 1 = 0$. 0 is even.
        *   Let $n=2$: $2^2 - 2 = 4 - 2 = 2$. 2 is even.
        *   Let $n=3$: $3^2 - 3 = 9 - 3 = 6$. 6 is even.
        *   Let $n=4$: $4^2 - 4 = 16 - 4 = 12$. 12 is even.
        *   Let's try $n=0$: $0^2 - 0 = 0$. 0 is even.
        *   What if we pick a different type of number? Wait, the statement is about *all* integers.
        *   Let's re-examine $n^2 - n$. This can be factored as $n(n-1)$. This is the product of two consecutive integers.
        *   If $n$ is even, then $n-1$ is odd. The product of an even and an odd number is always even.
        *   If $n$ is odd, then $n-1$ is even. The product of an odd and an even number is always even.
        *   So, it seems the statement is actually true! My apologies for the initial setup, this highlights a common test scenario where you must verify first. Let's create a slightly modified statement that *is* false to demonstrate the counterexample approach properly.

**Let's retry Question 3 with a proper false statement:**

**Question 3 (Revised - Conceptual/Exam-Oriented):**

Disprove the following statement using a counterexample: "For every integer $n$, if $n$ is odd, then $n^2$ is odd."

**Answer:**
The statement is "For every integer $n$, if $n$ is odd, then $n^2$ is odd." This is a universal statement about odd integers.

*   **Testing Candidates:**
    *   Let's pick an odd integer. For example, $n=3$.
    *   Is $n=3$ odd? Yes.
    *   Calculate $n^2$: $3^2 = 9$.
    *   Is $n^2=9$ odd? Yes. This example supports the statement.
    *   Let's try another odd integer, $n=5$.
    *   Is $n=5$ odd? Yes.
    *   Calculate $n^2$: $5^2 = 25$.
    *   Is $n^2=25$ odd? Yes. This also supports the statement.
    *   Let's try $n=1$. Is $n=1$ odd? Yes. $1^2 = 1$. Is 1 odd? Yes.
    *   This statement appears to be true, so you cannot disprove it with a counterexample. You would prove it true using a direct proof: Let $n$ be an odd integer. Then $n = 2k+1$ for some integer $k$. Then $n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2+2k) + 1$. Since $2k^2+2k$ is an integer, $n^2$ is of the form $2m+1$, meaning $n^2$ is odd.

**Okay, my apologies! Let's use a genuinely false statement for a counterexample question.**

**Question 3 (Take 3 - Conceptual/Exam-Oriented):**

Disprove the following statement using a counterexample: "For every integer $n \ge 1$, $n^2 + n + 1$ is divisible by 3."

**Answer:**
*   **Statement Analysis:** We are examining integers $n$ starting from 1. The claim is that $n^2 + n + 1$ is *always* divisible by 3. We need to find a value of $n \ge 1$ for which $n^2 + n + 1$ is *not* divisible by 3.
*   **Testing Candidates:**
    *   Let $n=1$: $1^2 + 1 + 1 = 1 + 1 + 1 = 3$. Is 3 divisible by 3? Yes. This supports the statement.
    *   Let $n=2$: $2^2 + 2 + 1 = 4 + 2 + 1 = 7$. Is 7 divisible by 3? No.
*   **The "Aha!" Moment:** We found an instance where the condition ($n \ge 1$) is met, but the conclusion (divisible by 3) is not.
*   **Constructing the Disproof:**
    *   The statement is: "For every integer $n \ge 1$, $n^2 + n + 1$ is divisible by 3."
    *   Consider the integer $n=2$.
    *   The condition $n \ge 1$ is satisfied.
    *   We evaluate the expression for $n=2$: $n^2 + n + 1 = 2^2 + 2 + 1 = 4 + 2 + 1 = 7$.
    *   The number 7 is not divisible by 3 (since $7 = 2 \times 3 + 1$).
    *   Therefore, $n=2$ is a counterexample, and the statement is false.

***

This concludes our exploration of Proof by Counterexample! Keep practicing, and you'll become adept at spotting those crucial exceptions.
