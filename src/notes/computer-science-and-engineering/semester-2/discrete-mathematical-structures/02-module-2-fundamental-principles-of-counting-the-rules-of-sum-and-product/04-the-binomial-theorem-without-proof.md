---
title: "The Binomial Theorem (without proof)"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 2: Fundamental Principles of Counting: The Rules of Sum and Product"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b6002"
status: "completed"
scrapedAt: "2026-05-20T16:31:50.318Z"
---
Ah, welcome everyone! Today, we're diving into a truly beautiful and powerful part of our Discrete Mathematical Structures journey: the **Binomial Theorem**. This theorem, as we'll see, is a cornerstone for understanding how we can expand expressions like $(a+b)^n$ and is deeply connected to the fundamental counting principles we've been discussing, especially combinations.

You might be thinking, "Why do we need a special theorem for this? Can't I just multiply $(a+b)$ by itself $n$ times?" Well, you absolutely can, especially for small values of $n$. But imagine trying to expand $(a+b)^{20}$ by hand! It would be incredibly tedious and prone to errors. The Binomial Theorem gives us a systematic, elegant, and efficient way to do just that.

As we explore this, keep in mind our Course Outcomes. Specifically, we'll be heavily leaning on **CO2: Apply fundamental counting principles, including permutations, combinations, and the pigeonhole principle, to solve problems related to combinatorial analysis and discrete structures.** The Binomial Theorem is a prime example of how combinations help us solve problems in combinatorial analysis.

### The Heart of the Matter: Expanding $(a+b)^n$

Let's start with some small examples to get a feel for what happens when we expand $(a+b)^n$.

*   For $n=0$: $(a+b)^0 = 1$. Simple enough!
*   For $n=1$: $(a+b)^1 = a + b$.
*   For $n=2$: $(a+b)^2 = (a+b)(a+b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$.
*   For $n=3$: $(a+b)^3 = (a+b)(a+b)^2 = (a+b)(a^2 + 2ab + b^2) = a(a^2 + 2ab + b^2) + b(a^2 + 2ab + b^2) = a^3 + 2a^2b + ab^2 + a^2b + 2ab^2 + b^3 = a^3 + 3a^2b + 3ab^2 + b^3$.

Now, let's look at the coefficients:

*   $n=0$: 1
*   $n=1$: 1, 1
*   $n=2$: 1, 2, 1
*   $n=3$: 1, 3, 3, 1

Do these numbers look familiar? If you've encountered Pascal's Triangle before, you'll recognize these coefficients!

```
        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1
   ...
```

Each row of Pascal's Triangle gives the coefficients for the expansion of $(a+b)^n$ for that row's $n$. The first row (starting with $n=0$) is '1'. The second row ($n=1$) is '1 1', and so on. Notice how each number in the triangle (except for the 1s at the edges) is the sum of the two numbers directly above it. This is a key property that connects to the combinations we'll discuss.

### Connecting to Combinations: The "Why" Behind the Coefficients

So, where do these coefficients come from? Let's think about how we get terms in the expansion of $(a+b)^n$. When we multiply $(a+b)$ by itself $n$ times, say $(a+b)(a+b)...(a+b)$ ($n$ times), each term in the expanded form is obtained by choosing *either* 'a' *or* 'b' from each of the $n$ binomial factors.

Consider $(a+b)^3 = (a+b)(a+b)(a+b)$. To get a term like $a^2b^1$, we need to pick 'a' from two of the factors and 'b' from one factor.
How many ways can we choose two 'a's from three factors? This is exactly a combination problem! It's "3 choose 2", or $\binom{3}{2}$.
And how many ways can we choose one 'b' from three factors? This is "3 choose 1", or $\binom{3}{1}$.

Let's break it down for $(a+b)^3$:

*   **Term $a^3$**: We need to choose 'a' from all three factors. There's only one way to do this: pick 'a' from the first, 'a' from the second, and 'a' from the third. This corresponds to $\binom{3}{0}$ ways to choose 'b' (or $\binom{3}{3}$ ways to choose 'a'). The coefficient is 1.
*   **Term $a^2b^1$**: We need to choose 'a' from two factors and 'b' from one factor. How many ways can we choose which factor provides the 'b'? We can choose the first factor, the second, or the third. That's 3 ways. This is $\binom{3}{1}$ (choose 1 'b' out of 3 factors). The coefficient is 3.
*   **Term $a^1b^2$**: We need to choose 'a' from one factor and 'b' from two factors. How many ways can we choose which factor provides the 'a'? Again, 3 ways. This is $\binom{3}{2}$ (choose 2 'b's out of 3 factors, or $\binom{3}{1}$ to choose 'a'). The coefficient is 3.
*   **Term $b^3$**: We need to choose 'b' from all three factors. Only one way. This is $\binom{3}{3}$ (choose 3 'b's out of 3 factors). The coefficient is 1.

So, $(a+b)^3 = \binom{3}{0}a^3b^0 + \binom{3}{1}a^2b^1 + \binom{3}{2}a^1b^2 + \binom{3}{3}a^0b^3 = 1a^3 + 3a^2b + 3ab^2 + 1b^3$.

This brings us to the general statement of the Binomial Theorem.

### The Binomial Theorem Statement (Without Proof)

For any non-negative integer $n$, the expansion of $(a+b)^n$ is given by:

$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$

Let's unpack this formula.

*   **$\sum_{k=0}^{n}$**: This is the summation symbol. It means we are adding up a series of terms, starting with $k=0$ and going all the way up to $k=n$.
*   **$\binom{n}{k}$**: This is the binomial coefficient, read as "n choose k." It represents the number of ways to choose $k$ items from a set of $n$ distinct items, without regard to order. We know from our combinatorics studies that $\binom{n}{k} = \frac{n!}{k!(n-k)!}$. These are precisely the numbers we saw in Pascal's Triangle!
*   **$a^{n-k}$**: In each term, the power of 'a' starts at $n$ (when $k=0$) and decreases by 1 for each subsequent term, until it reaches 0 (when $k=n$).
*   **$b^k$**: Similarly, the power of 'b' starts at 0 (when $k=0$) and increases by 1 for each subsequent term, until it reaches $n$ (when $k=n$).

So, the theorem states that $(a+b)^n$ is a sum of terms, where each term has a coefficient $\binom{n}{k}$, $a$ raised to the power $n-k$, and $b$ raised to the power $k$, for $k$ ranging from 0 to $n$.

This theorem beautifully ties together our understanding of combinations (CO2) and how they apply to algebraic expansions, which is fundamental for various areas of discrete mathematics.

### Let's See it in Action: Examples

The best way to solidify understanding is through practice!

**Example 1: Expand $(x+y)^4$.**

Here, $n=4$, $a=x$, and $b=y$. We will sum from $k=0$ to $k=4$.

*   $k=0$: $\binom{4}{0} x^{4-0} y^0 = 1 \cdot x^4 \cdot 1 = x^4$
*   $k=1$: $\binom{4}{1} x^{4-1} y^1 = 4 \cdot x^3 \cdot y = 4x^3y$
*   $k=2$: $\binom{4}{2} x^{4-2} y^2 = 6 \cdot x^2 \cdot y^2 = 6x^2y^2$
*   $k=3$: $\binom{4}{3} x^{4-3} y^3 = 4 \cdot x^1 \cdot y^3 = 4xy^3$
*   $k=4$: $\binom{4}{4} x^{4-4} y^4 = 1 \cdot x^0 \cdot y^4 = 1 \cdot 1 \cdot y^4 = y^4$

Putting it all together:
$(x+y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4$.

Notice the coefficients (1, 4, 6, 4, 1) – they form the fifth row of Pascal's Triangle (remembering the first row is $n=0$). This confirms our understanding.

**Example 2: Expand $(2a - 3b)^3$.**

This one has a slight twist: a coefficient within the base and a minus sign.
Here, $n=3$, $a = 2a$, and $b = -3b$. We need to be careful with the signs.

*   $k=0$: $\binom{3}{0} (2a)^{3-0} (-3b)^0 = 1 \cdot (2a)^3 \cdot 1 = 1 \cdot 8a^3 = 8a^3$
*   $k=1$: $\binom{3}{1} (2a)^{3-1} (-3b)^1 = 3 \cdot (2a)^2 \cdot (-3b) = 3 \cdot (4a^2) \cdot (-3b) = -36a^2b$
*   $k=2$: $\binom{3}{2} (2a)^{3-2} (-3b)^2 = 3 \cdot (2a)^1 \cdot (9b^2) = 3 \cdot (2a) \cdot (9b^2) = 54ab^2$
*   $k=3$: $\binom{3}{3} (2a)^{3-3} (-3b)^3 = 1 \cdot (2a)^0 \cdot (-27b^3) = 1 \cdot 1 \cdot (-27b^3) = -27b^3$

So, $(2a - 3b)^3 = 8a^3 - 36a^2b + 54ab^2 - 27b^3$.

**Common Pitfall Alert!** Many students forget to raise the coefficients (like '2' and '-3' here) to the appropriate powers. Always remember that $(2a)^2 = 2^2 a^2 = 4a^2$ and $(-3b)^3 = (-3)^3 b^3 = -27b^3$. Pay close attention to signs, especially with negative terms.

**Example 3: Find the coefficient of $x^7$ in the expansion of $(x+2)^{10}$.**

Here, $n=10$, $a=x$, and $b=2$. We are looking for the term where the power of $x$ is 7. In our formula $\binom{n}{k} a^{n-k} b^k$, the power of $a$ (which is $x$) is $n-k$.
So, we need $n-k = 7$. Since $n=10$, this means $10-k = 7$, which gives us $k=3$.

Now we can plug $n=10$, $k=3$, $a=x$, and $b=2$ into the general term formula:
Term = $\binom{10}{3} x^{10-3} 2^3$
Term = $\binom{10}{3} x^7 2^3$

Let's calculate the parts:
$\binom{10}{3} = \frac{10!}{3!(10-3)!} = \frac{10!}{3!7!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 10 \times 3 \times 4 = 120$.
$2^3 = 8$.

So the term is $120 \cdot x^7 \cdot 8 = 960x^7$.
The coefficient of $x^7$ is 960.

This type of question is very common in exams. The key is to identify $n$, $a$, $b$, and the desired power, then solve for $k$.

### Beyond Simple Expansions: Applications

The Binomial Theorem isn't just about expanding polynomials. Its implications are vast, touching upon probability, number theory, and computer science.

*   **Probability:** In binomial probability distributions, we often calculate probabilities of getting $k$ successes in $n$ independent trials, where each trial has two outcomes. The formula involves binomial coefficients, directly related to the theorem. For example, if you flip a fair coin 10 times, the probability of getting exactly 7 heads involves $\binom{10}{7}$, which comes from a binomial expansion.
*   **Combinatorial Identities:** The theorem can be used to prove various combinatorial identities. For instance, setting $a=1$ and $b=1$ in $(a+b)^n$, we get $(1+1)^n = \sum_{k=0}^{n} \binom{n}{k} 1^{n-k} 1^k$, which simplifies to $2^n = \sum_{k=0}^{n} \binom{n}{k}$. This means the sum of all binomial coefficients for a given $n$ is $2^n$, which also makes sense: for each of the $n$ items, you can either choose it or not choose it, giving $2 \times 2 \times ... \times 2$ ($n$ times) possibilities, which equals the total number of subsets of a set of size $n$. This connects to **CO2** by showing how combinations sum up to a total count.
*   **Computer Science:** Binomial coefficients appear in algorithms, data structures (like binomial heaps), and in analyzing the complexity of certain operations. For example, counting paths on a grid often involves binomial coefficients.

### Useful Identities and Properties to Remember

*   **Symmetry:** $\binom{n}{k} = \binom{n}{n-k}$. This means the coefficients in a binomial expansion are symmetric around the middle term(s). For example, in $(a+b)^4$, the coefficients are 1, 4, 6, 4, 1.
*   **Sum of Coefficients:** $\sum_{k=0}^{n} \binom{n}{k} = 2^n$. (As discussed with $a=1, b=1$)
*   **Alternating Sum:** $\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ for $n \ge 1$. (By setting $a=1, b=-1$ in $(a+b)^n$).

These are powerful tools for solving problems and demonstrating understanding, particularly for **CO2**.

### Summary: What to Take Away

The Binomial Theorem is your go-to tool for expanding $(a+b)^n$.
1.  **The Formula:** $(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$.
2.  **The Coefficients:** These are the binomial coefficients $\binom{n}{k}$, which you can calculate using factorials or find in Pascal's Triangle.
3.  **The Powers:** The powers of $a$ decrease from $n$ to 0, and the powers of $b$ increase from 0 to $n$.
4.  **Application:** It's crucial for combinatorial analysis, probability, and proving identities. It directly demonstrates the application of combinations (CO2).

Mastering the Binomial Theorem will not only help you solve specific problems but also deepen your appreciation for the elegance and interconnectedness of discrete mathematical concepts.

---

### Sample Questions with Answers

**Question 1 (Conceptual):** Explain how the Binomial Theorem connects the algebraic expansion of $(a+b)^n$ with the combinatorial concept of "n choose k."

**Answer:** The Binomial Theorem states that $(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$. When we expand $(a+b)^n = (a+b)(a+b)...(a+b)$ ($n$ times), each term is formed by choosing either 'a' or 'b' from each of the $n$ factors. A specific term, say $a^{n-k}b^k$, arises when we choose 'b' from exactly $k$ of these factors and 'a' from the remaining $n-k$ factors. The number of distinct ways to make this selection of $k$ 'b's (or $n-k$ 'a's) from $n$ factors is precisely given by the binomial coefficient $\binom{n}{k}$. Thus, the coefficient $\binom{n}{k}$ in the expansion quantifies the number of ways a term with $k$ 'b's and $n-k$ 'a's can be formed, directly linking the algebra to combinatorial counting. This illustrates **CO2**.

**Question 2 (Exam-Oriented):** Find the term independent of $x$ in the expansion of $(x + \frac{1}{x})^{8}$.

**Answer:**
We use the general term formula for $(a+b)^n$: $\binom{n}{k} a^{n-k} b^k$.
Here, $n=8$, $a=x$, and $b=\frac{1}{x} = x^{-1}$.
The general term is $\binom{8}{k} (x)^{8-k} (x^{-1})^k = \binom{8}{k} x^{8-k} x^{-k} = \binom{8}{k} x^{8-2k}$.

For the term independent of $x$, the power of $x$ must be 0.
So, we set $8-2k = 0$.
Solving for $k$: $2k = 8 \implies k=4$.

Now, we substitute $k=4$ back into the general term formula:
Term = $\binom{8}{4} x^{8-2(4)} = \binom{8}{4} x^0$.

Calculate the binomial coefficient:
$\binom{8}{4} = \frac{8!}{4!(8-4)!} = \frac{8!}{4!4!} = \frac{8 \times 7 \times 6 \times 5}{4 \times 3 \times 2 \times 1} = \frac{1680}{24} = 70$.

So, the term independent of $x$ is $70 \cdot x^0 = 70$.
The term is 70.

**Question 3 (Conceptual/Application):** What is the sum of the coefficients in the expansion of $(3x - 2y)^{5}$?

**Answer:**
The sum of the coefficients in any polynomial expansion can be found by setting all the variables to 1.
Consider the general binomial expansion $(a+b)^n$. If we set $a=1$ and $b=1$, we get $(1+1)^n = 2^n$, which is the sum of the coefficients $\binom{n}{k}$.

In our case, the expression is $(3x - 2y)^{5}$.
To find the sum of the coefficients, we set $x=1$ and $y=1$.
Sum of coefficients = $(3(1) - 2(1))^{5} = (3 - 2)^{5} = (1)^{5} = 1$.

So, the sum of the coefficients in the expansion of $(3x - 2y)^5$ is 1. This is a quick check and also relates to the identity $\sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$ evaluated at $a=1, b=1$.

---
I hope this detailed breakdown helps you feel confident with the Binomial Theorem. It's a fundamental building block, and understanding it well will pay dividends as we move forward! Let's keep exploring!
