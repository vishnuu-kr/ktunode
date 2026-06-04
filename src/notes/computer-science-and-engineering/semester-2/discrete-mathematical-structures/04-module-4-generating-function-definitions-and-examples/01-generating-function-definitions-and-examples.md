---
title: "Generating Function: Definitions and Examples"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 4: Generating Function: Definitions and Examples"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b6016"
status: "completed"
scrapedAt: "2026-05-20T16:32:33.726Z"
---
# Module 4: Generating Functions - Definitions and Examples

Welcome, everyone, to another exciting session in Discrete Mathematical Structures! Today, we're diving headfirst into a powerful tool that will unlock many combinatorial puzzles and help us solve recurrence relations: **Generating Functions**. Think of them as a kind of "super-variable" that encodes sequences of numbers. They're a cornerstone of discrete mathematics and have deep connections to computer science, especially in algorithm analysis.

We've already explored basic counting principles, sets, relations, and functions. Generating functions build upon these, offering a systematic way to count things and analyze patterns. They are particularly relevant to **CO4**, where we discuss solving recurrence relations. Understanding generating functions is key to mastering that part of the course.

***

## 1. What Exactly is a Generating Function?

Imagine you have a sequence of numbers. Let's say it's $a_0, a_1, a_2, a_3, \dots$. What if we could represent this sequence as a polynomial or an infinite series? That's precisely what a generating function does!

**Definition:** For a sequence of numbers $\{a_n\}_{n=0}^\infty$, its **ordinary generating function (OGF)** is the power series:

$A(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \dots = \sum_{n=0}^\infty a_n x^n$

Here, $x$ is just a formal symbol. We're not usually concerned with the convergence of this series; we treat it as a formal power series. The coefficient of $x^n$ in the series $A(x)$ is the $n$-th term of our sequence, $a_n$.

### Why "Generating" Function?

The name is quite descriptive! This series *generates* the sequence as its coefficients. It's like having a compact way to store all the information about the sequence.

### An Everyday Analogy

Let's think about buying fruit. Suppose you want to buy apples, bananas, and oranges. Let's say apples cost \$1, bananas \$2, and oranges \$3. Now, imagine you have a purse with an unlimited supply of each coin (say, \$1 coins), and you want to pay for your fruit.

This might seem a bit abstract, but let's connect it to generating functions. If we consider the number of ways to make a certain amount of money using these fruits, generating functions can help us count them.

Consider a simpler scenario: how many ways can you make change for \$n using coins of value \$1 and \$2?
Let $a_n$ be the number of ways to make change for \$n.
For \$0, there's 1 way (do nothing). $a_0 = 1$.
For \$1, there's 1 way (one \$1 coin). $a_1 = 1$.
For \$2, there are 2 ways (two \$1 coins, or one \$2 coin). $a_2 = 2$.
For \$3, there are 2 ways (three \$1 coins, or one \$1 and one \$2). $a_3 = 2$.
For \$4, there are 3 ways (four \$1, two \$1 and one \$2, two \$2). $a_4 = 3$.

The sequence is $1, 1, 2, 2, 3, 3, \dots$ (for \$0, \$1, \$2, \$3, \$4, \$5...).
The generating function for this would be $1 + 1x + 2x^2 + 2x^3 + 3x^4 + \dots$. This series, if we can find a closed form for it, will encode the solution.

***

## 2. Basic Generating Functions for Common Sequences

To effectively use generating functions, we need to know the generating functions for some fundamental sequences. These are like your basic multiplication tables for generating functions.

### 2.1 The Geometric Series

This is perhaps the most fundamental generating function of all.

**Sequence:** $1, 1, 1, 1, \dots$ (i.e., $a_n = 1$ for all $n \ge 0$)
**Generating Function:**
$A(x) = 1 + x + x^2 + x^3 + \dots = \sum_{n=0}^\infty x^n$

As a geometric series, this converges to $\frac{1}{1-x}$ for $|x| < 1$. However, remember, we treat it as a *formal* power series. So, we can say:

$$ \frac{1}{1-x} \quad \longleftrightarrow \quad 1, 1, 1, 1, \dots $$

This is a key relationship you'll use constantly.

### 2.2 Powers of a Constant

What if our sequence is $1, c, c^2, c^3, \dots$ (i.e., $a_n = c^n$ for some constant $c$)?

**Sequence:** $1, c, c^2, c^3, \dots$ (i.e., $a_n = c^n$ for all $n \ge 0$)
**Generating Function:**
$A(x) = 1 + cx + c^2 x^2 + c^3 x^3 + \dots = \sum_{n=0}^\infty (cx)^n$

Using the geometric series formula, this is equal to $\frac{1}{1-cx}$.

$$ \frac{1}{1-cx} \quad \longleftrightarrow \quad 1, c, c^2, c^3, \dots $$

**Example:** For $c=2$, $\frac{1}{1-2x} \longleftrightarrow 1, 2, 4, 8, 16, \dots$

### 2.3 Binomial Coefficients (with a twist!)

We know the binomial theorem: $(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^{n-k} b^k$.
What if we fix $a=1$ and $b=x$? Then $(1+x)^n = \sum_{k=0}^n \binom{n}{k} x^k$.
This is a polynomial, a finite generating function for the sequence $\binom{n}{0}, \binom{n}{1}, \dots, \binom{n}{n}, 0, 0, \dots$.

But what about sequences involving binomial coefficients for *all* $n$?
Consider the sequence $1, n+1, \binom{n+2}{2}, \binom{n+3}{3}, \dots$, where the $k$-th term is $\binom{n+k}{k}$.
This is related to combinations with repetition! The number of ways to choose $k$ items from $n$ types with repetition allowed is $\binom{n+k-1}{k}$. Let's shift the index: $\binom{n+(k-1)}{k-1}$.
So, the sequence is $a_k = \binom{n+k-1}{k-1}$.
For $k=0$, $a_0 = \binom{n-1}{-1}$ which is 0 if we use the convention $\binom{n}{r}=0$ for $r<0$. Let's adjust our sequence to start indexing from $n=1$ for the terms.

Let's consider the sequence $a_k = \binom{r+k}{k}$ for a fixed $r$.
$a_0 = \binom{r}{0} = 1$
$a_1 = \binom{r+1}{1} = r+1$
$a_2 = \binom{r+2}{2} = \frac{(r+2)(r+1)}{2}$
$a_3 = \binom{r+3}{3} = \frac{(r+3)(r+2)(r+1)}{6}$

The generating function is $A(x) = \sum_{k=0}^\infty \binom{r+k}{k} x^k$.
It turns out that this series is equal to $\frac{1}{(1-x)^{r+1}}$.

$$ \frac{1}{(1-x)^{r+1}} \quad \longleftrightarrow \quad \binom{r}{0}, \binom{r+1}{1}, \binom{r+2}{2}, \binom{r+3}{3}, \dots $$

**Why is this important?** This form is crucial for problems involving combinations with repetition. For instance, the number of ways to choose $k$ items from $n$ distinct types with repetition is $\binom{n+k-1}{k}$. If we let $r=n$, then $a_k = \binom{n+k-1}{k}$ corresponds to the coefficients of $\frac{1}{(1-x)^n}$.
So, $\frac{1}{(1-x)^n} \longleftrightarrow \binom{n-1}{0}, \binom{n}{1}, \binom{n+1}{2}, \dots, \binom{n+k-1}{k}, \dots$
This means the coefficient of $x^k$ in $\frac{1}{(1-x)^n}$ is $\binom{n+k-1}{k}$, which is exactly the number of ways to select $k$ items from $n$ categories with repetition. This directly links to **CO2** (counting principles).

**Example:** How many ways are there to choose 5 pieces of fruit from apples, bananas, and oranges (3 types)?
Here, $n=3$ (types) and we're choosing $k=5$ (pieces). The number of ways is $\binom{3+5-1}{5} = \binom{7}{5} = 21$.
The generating function for this is $\frac{1}{(1-x)^3}$. The coefficient of $x^5$ in its expansion is $\binom{3+5-1}{5} = \binom{7}{5}$.

### 2.4 Generating Functions for Finite Sequences

If a sequence is finite, say $a_0, a_1, \dots, a_m$, its generating function is simply a polynomial: $A(x) = a_0 + a_1 x + \dots + a_m x^m$.

**Example:** Consider the sequence $1, 2, 3, 0, 0, 0, \dots$. Its generating function is $1 + 2x + 3x^2$.

***

## 3. Manipulating Generating Functions: The Algebra of Sequences

The real power of generating functions comes from the fact that we can perform algebraic operations on them, and these operations have a direct interpretation in terms of operations on the underlying sequences. This is where things get really interesting and practical!

### 3.1 Addition of Generating Functions

If $A(x) = \sum a_n x^n$ and $B(x) = \sum b_n x^n$, then $A(x) + B(x) = \sum (a_n + b_n) x^n$.
The sequence corresponding to the sum of generating functions is the sum of the individual sequences.

**Example:**
$\frac{1}{1-x} \longleftrightarrow 1, 1, 1, 1, \dots$
$\frac{1}{1-2x} \longleftrightarrow 1, 2, 4, 8, \dots$

$\frac{1}{1-x} + \frac{1}{1-2x} = \frac{1-2x + 1-x}{(1-x)(1-2x)} = \frac{2-3x}{(1-x)(1-2x)}$
The sequence for this sum is $1+1, 1+2, 1+4, 1+8, \dots = 2, 3, 5, 9, \dots$.
The $n$-th term is $1 + 2^n$.

### 3.2 Multiplication of Generating Functions: The Convolution

This is where the magic happens for counting problems. If $A(x) = \sum a_n x^n$ and $B(x) = \sum b_n x^n$, then their product is:

$A(x)B(x) = (\sum_{i=0}^\infty a_i x^i)(\sum_{j=0}^\infty b_j x^j) = \sum_{n=0}^\infty (\sum_{k=0}^n a_k b_{n-k}) x^n$

The coefficient of $x^n$ in $A(x)B(x)$ is $c_n = \sum_{k=0}^n a_k b_{n-k}$. This is called the **convolution** of the sequences $\{a_n\}$ and $\{b_n\}$.

**What does convolution mean in combinatorics?**
Suppose $a_k$ is the number of ways to do something in step $k$, and $b_{n-k}$ is the number of ways to do something else in the remaining $n-k$ steps. Then $c_n$ is the total number of ways to complete a process in $n$ steps where the first part has $k$ steps and the second part has $n-k$ steps.

**Example:** Let's revisit the fruit-buying scenario.
Suppose we want to buy a total of $n$ items, and we can choose between apples (cost \$1) and bananas (cost \$2). Let $a_k$ be the number of ways to choose $k$ apples, and $b_{n-k}$ be the number of ways to choose $n-k$ bananas. This isn't quite right.

Let's use a clearer combinatorial example.
**Problem:** How many ways are there to form a committee of size $n$ from $m$ men and $p$ women?
If we select $k$ men and $n-k$ women, the number of ways is $\binom{m}{k} \binom{p}{n-k}$.
The total number of ways to form the committee of size $n$ is $\sum_{k=0}^n \binom{m}{k} \binom{p}{n-k}$.
By Vandermonde's Identity, this sum equals $\binom{m+p}{n}$.

Now, let's see this using generating functions.
The generating function for the number of ways to choose $k$ men from $m$ is $(1+x)^m = \sum_{k=0}^m \binom{m}{k} x^k$.
The generating function for the number of ways to choose $j$ women from $p$ is $(1+x)^p = \sum_{j=0}^p \binom{p}{j} x^j$.

The product of these generating functions is:
$(1+x)^m (1+x)^p = (1+x)^{m+p} = \sum_{n=0}^{m+p} \binom{m+p}{n} x^n$.

The coefficient of $x^n$ in this product is obtained by convolution:
$\sum_{k=0}^n \left(\text{coeff of } x^k \text{ in } (1+x)^m\right) \times \left(\text{coeff of } x^{n-k} \text{ in } (1+x)^p\right)$
$= \sum_{k=0}^n \binom{m}{k} \binom{p}{n-k}$

This convolution result is precisely the coefficient of $x^n$ in $(1+x)^{m+p}$, which is $\binom{m+p}{n}$. This beautifully illustrates Vandermonde's Identity through generating functions! This is a core concept for **CO2** and **CO4**.

### 3.3 Scalar Multiplication

If $A(x) = \sum a_n x^n$ and $c$ is a scalar, then $c A(x) = \sum c a_n x^n$.
Multiplying a generating function by a scalar multiplies each term of the sequence by that scalar.

**Example:**
$2 \times (1 + x + x^2 + \dots) = 2 + 2x + 2x^2 + \dots = \frac{2}{1-x}$
The sequence $1, 1, 1, \dots$ becomes $2, 2, 2, \dots$.

### 3.4 Multiplication by $x^k$

If $A(x) = \sum_{n=0}^\infty a_n x^n$, then $x^k A(x) = x^k \sum_{n=0}^\infty a_n x^n = \sum_{n=0}^\infty a_n x^{n+k}$.
Let $m = n+k$, so $n = m-k$. As $n$ goes from $0$ to $\infty$, $m$ goes from $k$ to $\infty$.
$x^k A(x) = \sum_{m=k}^\infty a_{m-k} x^m$.
This means that multiplying a generating function by $x^k$ shifts the sequence $k$ positions to the right, padding with $k$ zeros at the beginning. The new $m$-th coefficient ($a'_m$) is the old $(m-k)$-th coefficient ($a_{m-k}$), and for $m < k$, $a'_m = 0$.

**Example:**
$A(x) = 1 + 2x + 3x^2 + \dots \longleftrightarrow 1, 2, 3, 0, 0, \dots$
$x \cdot A(x) = x(1 + 2x + 3x^2 + \dots) = x + 2x^2 + 3x^3 + \dots \longleftrightarrow 0, 1, 2, 3, 0, 0, \dots$
The sequence is shifted right by 1.

### 3.5 Differentiation

If $A(x) = \sum_{n=0}^\infty a_n x^n$, then $A'(x) = \frac{d}{dx} A(x) = \sum_{n=1}^\infty n a_n x^{n-1}$.
Let $m = n-1$, so $n = m+1$.
$A'(x) = \sum_{m=0}^\infty (m+1) a_{m+1} x^m$.
The new sequence is $\{ (n+1)a_{n+1} \}_{n=0}^\infty$.

**Example:**
Consider $\frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots$.
Differentiating gives: $\frac{d}{dx} \left(\frac{1}{1-x}\right) = \frac{1}{(1-x)^2}$.
The derivative of the series is $0 + 1 + 2x + 3x^2 + \dots = \sum_{n=1}^\infty n x^{n-1}$.
So, $\frac{1}{(1-x)^2} \longleftrightarrow 1, 2, 3, 4, \dots$.
Here, the new $n$-th coefficient is $(n+1) \times 1 = n+1$. The original sequence was $a_n=1$. The new sequence is $(n+1)a_{n+1} = (n+1) \times 1 = n+1$. This matches!

This is very useful for sequences like $n$ or $n^2$.
To get a sequence like $0, 1, 2, 3, \dots$, we differentiate $\frac{1}{1-x}$.
To get a sequence like $0, 1, 4, 9, \dots$ (i.e., $n^2$), we can differentiate $x \cdot \frac{1}{(1-x)^2}$ or perform other manipulations.
Let $G(x) = \frac{x}{(1-x)^2} = x \sum_{n=0}^\infty (n+1) x^n = \sum_{n=0}^\infty (n+1) x^{n+1} = \sum_{m=1}^\infty m x^m$.
$G(x) \longleftrightarrow 0, 1, 2, 3, \dots$.
Now differentiate $G(x)$: $G'(x) = \frac{d}{dx} \left(\frac{x}{(1-x)^2}\right) = \frac{1(1-x)^2 - x \cdot 2(1-x)(-1)}{(1-x)^4} = \frac{(1-x) + 2x}{(1-x)^3} = \frac{1+x}{(1-x)^3}$.
The derivative of the series is $\sum_{m=1}^\infty m^2 x^{m-1}$.
So, $\frac{1+x}{(1-x)^3} \longleftrightarrow 1^2, 2^2, 3^2, 4^2, \dots = 1, 4, 9, 16, \dots$.
This technique is extremely powerful for **CO4**, especially for solving recurrence relations by converting them into algebraic equations in terms of generating functions.

### 3.6 Integration

If $A(x) = \sum_{n=0}^\infty a_n x^n$, then $\int_0^x A(t) dt = \sum_{n=0}^\infty a_n \int_0^x t^n dt = \sum_{n=0}^\infty a_n \frac{x^{n+1}}{n+1}$.
Let $m = n+1$, so $n = m-1$.
$\int_0^x A(t) dt = \sum_{m=1}^\infty \frac{a_{m-1}}{m} x^m$.
The new sequence is $\{0, \frac{a_0}{1}, \frac{a_1}{2}, \frac{a_2}{3}, \dots\}$.

**Example:**
Consider $\frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots$.
$\int_0^x \frac{1}{1-t} dt = [-\ln(1-t)]_0^x = -\ln(1-x)$.
The integral of the series is $0 + \frac{x}{1} + \frac{x^2}{2} + \frac{x^3}{3} + \dots$.
So, $-\ln(1-x) \longleftrightarrow 0, 1, \frac{1}{2}, \frac{1}{3}, \dots$.
This means $\ln(1-x) \longleftrightarrow 0, -1, -\frac{1}{2}, -\frac{1}{3}, \dots$.

***

## 4. Applications: Solving Problems

Generating functions are used in many areas, including:

*   **Counting problems:** As seen with Vandermonde's Identity and combinations with repetition.
*   **Solving recurrence relations:** This is a major application for **CO4**.
*   **Algorithm analysis:** Counting the number of operations in algorithms.

Let's focus on a classic example that illustrates the power of generating functions in a counting problem, and then touch upon recurrence relations.

### 4.1 Example: Distributing Indistinguishable Items into Distinguishable Boxes

**Problem:** In how many ways can we distribute 10 identical candies to 3 children, given the following conditions?

**(a) No restrictions.**
This is a classic stars and bars problem. We have 10 identical candies (stars) and we need to divide them into 3 distinguishable bins (children). This requires 2 bars. The number of ways is $\binom{10+3-1}{3-1} = \binom{12}{2} = 66$.

Using generating functions:
Each child can receive any number of candies, from 0 to 10 (or even more, if we didn't have a limit of 10 candies). The generating function for the number of candies one child can receive is $1 + x + x^2 + x^3 + \dots = \frac{1}{1-x}$.
Since there are 3 children, and their choices are independent, we multiply their generating functions:
$(\frac{1}{1-x}) \times (\frac{1}{1-x}) \times (\frac{1}{1-x}) = (\frac{1}{1-x})^3 = \frac{1}{(1-x)^3}$.

We want to find the number of ways to distribute 10 candies, so we look for the coefficient of $x^{10}$ in the expansion of $\frac{1}{(1-x)^3}$.
We know $\frac{1}{(1-x)^{r+1}} \longleftrightarrow \binom{r+k}{k}$.
Here, $r+1 = 3$, so $r=2$. We want the coefficient of $x^{10}$, so $k=10$.
The coefficient is $\binom{2+10}{10} = \binom{12}{10} = \binom{12}{2} = 66$.
This matches our stars and bars result!

**(b) Each child must receive at least one candy.**
If each child must receive at least one candy, it means we first give one candy to each child. That leaves us with $10 - 3 = 7$ candies to distribute among the 3 children, with no further restrictions.
Using stars and bars: $\binom{7+3-1}{3-1} = \binom{9}{2} = 36$.

Using generating functions:
If each child must receive at least one candy, the generating function for each child changes. The number of candies can be $1, 2, 3, \dots$. So, the GF for one child is $x + x^2 + x^3 + \dots$.
This is a geometric series starting from $x$: $x(1 + x + x^2 + \dots) = x \cdot \frac{1}{1-x} = \frac{x}{1-x}$.
For 3 children, the combined GF is $(\frac{x}{1-x})^3 = \frac{x^3}{(1-x)^3}$.

We need the coefficient of $x^{10}$ in $\frac{x^3}{(1-x)^3}$.
This is equivalent to finding the coefficient of $x^{10-3} = x^7$ in $\frac{1}{(1-x)^3}$.
Using the formula again with $r=2$ and $k=7$:
The coefficient is $\binom{2+7}{7} = \binom{9}{7} = \binom{9}{2} = 36$.
Again, it matches! This is a fantastic way to confirm our understanding.

**(c) Child 1 can receive at most 4 candies, Child 2 at most 5, and Child 3 at most 6.**
This is where generating functions truly shine because traditional combinatorial methods can become very complex.

The generating function for Child 1 (at most 4 candies) is $1 + x + x^2 + x^3 + x^4$.
The generating function for Child 2 (at most 5 candies) is $1 + x + x^2 + x^3 + x^4 + x^5$.
The generating function for Child 3 (at most 6 candies) is $1 + x + x^2 + x^3 + x^4 + x^5 + x^6$.

The combined generating function is the product of these three:
$A(x) = (1+x+x^2+x^3+x^4)(1+x+x^2+x^3+x^4+x^5)(1+x+x^2+x^3+x^4+x^5+x^6)$.

We can express these finite sums using the geometric series formula:
$1+x+\dots+x^m = \frac{1-x^{m+1}}{1-x}$.

So, $A(x) = \left(\frac{1-x^5}{1-x}\right) \left(\frac{1-x^6}{1-x}\right) \left(\frac{1-x^7}{1-x}\right) = \frac{(1-x^5)(1-x^6)(1-x^7)}{(1-x)^3}$.

We need the coefficient of $x^{10}$ in $A(x)$.
$A(x) = (1-x^5-x^6-x^7+x^{11}+x^{12}+x^{13}-x^{18}) \times (1-x)^{-3}$.

Let $B(x) = (1-x)^{-3} = \sum_{k=0}^\infty \binom{2+k}{k} x^k$.
$A(x) = (1-x^5-x^6-x^7+\text{higher order terms}) \times \sum_{k=0}^\infty \binom{k+2}{k} x^k$.

We are interested in the coefficient of $x^{10}$. This will come from terms where the powers of $x$ from the numerator and the denominator sum to 10.

1.  From the '1' in the numerator: $1 \times \binom{10+2}{10} x^{10} = \binom{12}{10} x^{10} = 66 x^{10}$.
2.  From '-$x^5$': $-x^5 \times \binom{(10-5)+2}{10-5} x^{10-5} = -x^5 \times \binom{7}{5} x^5 = -21 x^{10}$.
3.  From '-$x^6$': $-x^6 \times \binom{(10-6)+2}{10-6} x^{10-6} = -x^6 \times \binom{6}{4} x^4 = -15 x^{10}$.
4.  From '-$x^7$': $-x^7 \times \binom{(10-7)+2}{10-7} x^{10-7} = -x^7 \times \binom{5}{3} x^3 = -10 x^{10}$.

The higher order terms in the numerator (like $x^{11}, x^{12}, x^{13}, x^{18}$) won't contribute to the $x^{10}$ term when multiplied by the series $\sum \binom{k+2}{k} x^k$ because their powers are already greater than 10.

So, the coefficient of $x^{10}$ is $66 - 21 - 15 - 10 = 66 - 46 = 20$.
There are 20 ways to distribute the candies under these restrictions. This is a good example for exam-style questions where such specific constraints are given.

### 4.2 Solving Recurrence Relations

Generating functions provide a systematic method for solving linear homogeneous and non-homogeneous recurrence relations with constant coefficients. This is a core topic for **CO4**.

**General Idea:**
1.  Assume a solution exists in the form of a generating function $A(x) = \sum_{n=0}^\infty a_n x^n$, where $\{a_n\}$ is the sequence we want to find.
2.  Write down the recurrence relation.
3.  Multiply the recurrence relation by $x^n$ and sum over all relevant $n$.
4.  Express terms involving $a_n, a_{n-1}, \dots$ in terms of $A(x)$ using manipulations like multiplication by $x^n$, differentiation, etc.
5.  Solve the resulting algebraic equation for $A(x)$.
6.  Expand $A(x)$ into its power series to find the explicit formula for $a_n$.

**Example:** Solve the recurrence relation $a_n = 2a_{n-1} + 1$ for $n \ge 1$, with $a_0 = 0$.
Sequence: $a_0=0, a_1=1, a_2=3, a_3=7, a_4=15, \dots$ (which looks like $2^n - 1$). Let's verify this using generating functions.

Let $A(x) = \sum_{n=0}^\infty a_n x^n = a_0 + a_1 x + a_2 x^2 + \dots$.
The recurrence is $a_n = 2a_{n-1} + 1$ for $n \ge 1$.

Multiply by $x^n$ and sum from $n=1$ to $\infty$:
$\sum_{n=1}^\infty a_n x^n = \sum_{n=1}^\infty (2a_{n-1} + 1) x^n$
$\sum_{n=1}^\infty a_n x^n = 2 \sum_{n=1}^\infty a_{n-1} x^n + \sum_{n=1}^\infty x^n$

Now, let's relate these sums to $A(x)$:
*   $\sum_{n=1}^\infty a_n x^n = (a_0 + a_1 x + a_2 x^2 + \dots) - a_0 = A(x) - a_0$. Since $a_0=0$, this is $A(x)$.
*   $2 \sum_{n=1}^\infty a_{n-1} x^n = 2x \sum_{n=1}^\infty a_{n-1} x^{n-1}$. Let $m=n-1$. As $n$ goes from $1$ to $\infty$, $m$ goes from $0$ to $\infty$.
    So, $2x \sum_{m=0}^\infty a_m x^m = 2x A(x)$.
*   $\sum_{n=1}^\infty x^n$ is a geometric series: $x + x^2 + x^3 + \dots = \frac{x}{1-x}$.

Substituting these back into the equation:
$A(x) = 2x A(x) + \frac{x}{1-x}$

Now, solve for $A(x)$:
$A(x) - 2x A(x) = \frac{x}{1-x}$
$A(x)(1 - 2x) = \frac{x}{1-x}$
$A(x) = \frac{x}{(1-x)(1-2x)}$

To find the formula for $a_n$, we need to decompose $A(x)$ using partial fractions.
$\frac{x}{(1-x)(1-2x)} = \frac{A}{1-x} + \frac{B}{1-2x}$
$x = A(1-2x) + B(1-x)$

If $x=1$: $1 = A(1-2) + B(0) \implies 1 = -A \implies A = -1$.
If $x=1/2$: $1/2 = A(0) + B(1-1/2) \implies 1/2 = B(1/2) \implies B = 1$.

So, $A(x) = \frac{-1}{1-x} + \frac{1}{1-2x}$.
We know the generating functions for these:
$\frac{1}{1-x} \longleftrightarrow 1, 1, 1, \dots$ (i.e., $1$ for all $n$)
$\frac{1}{1-2x} \longleftrightarrow 1, 2, 4, 8, \dots$ (i.e., $2^n$ for $n$)

Therefore, $A(x) = -1 \cdot (1 + x + x^2 + \dots) + (1 + 2x + 4x^2 + \dots)$
$A(x) = (-1 - x - x^2 - \dots) + (1 + 2x + 4x^2 + \dots)$
$A(x) = (1-1) + (2-1)x + (4-1)x^2 + (8-1)x^3 + \dots$
$A(x) = 0 + 1x + 3x^2 + 7x^3 + \dots$

The coefficient of $x^n$ is $a_n$. From the decomposition:
$a_n = (-1) \times 1 + 1 \times 2^n = 2^n - 1$.
So, the solution to the recurrence relation $a_n = 2a_{n-1} + 1$ with $a_0=0$ is $a_n = 2^n - 1$.

This systematic approach is very reliable. For exams, practice converting the recurrence into the algebraic form and then doing the partial fraction decomposition.

***

## 5. Summary and Key Takeaways

*   A **generating function** $A(x)$ for a sequence $\{a_n\}$ is a power series $\sum_{n=0}^\infty a_n x^n$, where $a_n$ is the coefficient of $x^n$.
*   The most fundamental GFs are $\frac{1}{1-x} \longleftrightarrow 1, 1, 1, \dots$ and $\frac{1}{1-cx} \longleftrightarrow 1, c, c^2, \dots$.
*   The binomial expansion $\frac{1}{(1-x)^r} \longleftrightarrow \binom{r-1}{0}, \binom{r}{1}, \binom{r+1}{2}, \dots$ is critical for combinations with repetition.
*   Algebraic operations on GFs correspond to operations on sequences:
    *   Addition of GFs $\implies$ Addition of sequences.
    *   Multiplication of GFs $\implies$ Convolution of sequences.
    *   Multiplying GF by $x^k \implies$ Shifting sequence right by $k$.
    *   Differentiating GF $\implies$ Multiplying sequence terms by $n$ and shifting index.
*   Generating functions are powerful tools for solving combinatorial problems (like distributing items) and for solving linear recurrence relations. This ties directly into **CO2** and **CO4**.

Remember these basic generating functions and the rules for manipulating them. They are your building blocks.

***

## Sample Questions and Answers

**Q1. Conceptual:** What is the fundamental idea behind using generating functions in combinatorics?
**Answer:** The fundamental idea is to represent a sequence of numbers (often counts of combinatorial objects) as coefficients of a power series. The algebraic properties of these power series (like multiplication) then correspond to combinatorial operations (like convolution), providing a systematic way to solve counting problems and derive identities. It transforms "counting directly" into "manipulating algebraic expressions."

**Q2. Recall/Understanding:** What is the ordinary generating function for the sequence $a_n = 3^n$ for $n \ge 0$?
**Answer:** The sequence is $3^0, 3^1, 3^2, 3^3, \dots$ which is $1, 3, 9, 27, \dots$. This is of the form $c^n$ where $c=3$. The generating function is $\sum_{n=0}^\infty c^n x^n = \sum_{n=0}^\infty (3x)^n = \frac{1}{1-3x}$.

**Q3. Application (Counting):** How many ways are there to choose a dozen donuts from 5 different varieties, if there are at least 3 donuts of variety 1 and at least 2 donuts of variety 3?
**Answer:**
Let $a_i$ be the number of donuts of variety $i$. We want to find the number of non-negative integer solutions to $a_1 + a_2 + a_3 + a_4 + a_5 = 12$ with conditions $a_1 \ge 3$, $a_3 \ge 2$, and $a_2, a_4, a_5 \ge 0$.

First, satisfy the minimum requirements: Give 3 donuts to variety 1 and 2 donuts to variety 3. This leaves $12 - 3 - 2 = 7$ donuts to distribute among the 5 varieties with no further restrictions.
The generating function for distributing indistinguishable items into distinguishable bins is $\frac{1}{(1-x)^n}$, where $n$ is the number of bins (varieties).
Here, $n=5$, so the GF is $\frac{1}{(1-x)^5}$. We need the coefficient of $x^7$ (for the remaining 7 donuts).
Using the formula $\frac{1}{(1-x)^{r+1}} \longleftrightarrow \binom{r+k}{k}$, we have $r+1=5 \implies r=4$, and $k=7$.
The number of ways is $\binom{4+7}{7} = \binom{11}{7} = \binom{11}{4} = \frac{11 \times 10 \times 9 \times 8}{4 \times 3 \times 2 \times 1} = 11 \times 10 \times 3 = 330$.

**Q4. Application (Recurrence Relation):** Solve the recurrence relation $a_n = 3a_{n-1} - 2a_{n-2}$ for $n \ge 2$, given $a_0 = 1$ and $a_1 = 2$.
**Answer:**
Let $A(x) = \sum_{n=0}^\infty a_n x^n$.
Multiply the recurrence by $x^n$ and sum from $n=2$ to $\infty$:
$\sum_{n=2}^\infty a_n x^n = 3 \sum_{n=2}^\infty a_{n-1} x^n - 2 \sum_{n=2}^\infty a_{n-2} x^n$

Left side: $\sum_{n=2}^\infty a_n x^n = A(x) - a_0 - a_1 x = A(x) - 1 - 2x$.
First term on right: $3 \sum_{n=2}^\infty a_{n-1} x^n = 3x \sum_{n=2}^\infty a_{n-1} x^{n-1} = 3x \sum_{m=1}^\infty a_m x^m = 3x(A(x) - a_0) = 3x(A(x) - 1)$.
Second term on right: $-2 \sum_{n=2}^\infty a_{n-2} x^n = -2x^2 \sum_{n=2}^\infty a_{n-2} x^{n-2} = -2x^2 \sum_{m=0}^\infty a_m x^m = -2x^2 A(x)$.

So, $A(x) - 1 - 2x = 3x(A(x) - 1) - 2x^2 A(x)$.
$A(x) - 1 - 2x = 3xA(x) - 3x - 2x^2 A(x)$.
$A(x) - 3xA(x) + 2x^2 A(x) = 1 + 2x - 3x$.
$A(x)(1 - 3x + 2x^2) = 1 - x$.
$A(x) = \frac{1-x}{1 - 3x + 2x^2}$.

Factor the denominator: $1 - 3x + 2x^2 = (1-x)(1-2x)$.
$A(x) = \frac{1-x}{(1-x)(1-2x)} = \frac{1}{1-2x}$.

We know that $\frac{1}{1-2x} \longleftrightarrow 2^n$ for $n \ge 0$.
So, $a_n = 2^n$.

Let's check the initial conditions: $a_0 = 2^0 = 1$ (correct). $a_1 = 2^1 = 2$ (correct).
Let's check the recurrence: $2^n = 3(2^{n-1}) - 2(2^{n-2}) = 3 \cdot 2^{n-1} - 2 \cdot \frac{1}{2} \cdot 2^{n-1} = 3 \cdot 2^{n-1} - 2^{n-1} = (3-1) \cdot 2^{n-1} = 2 \cdot 2^{n-1} = 2^n$. The recurrence holds.
Thus, the solution is $a_n = 2^n$.

***
This concludes our introduction to generating functions. We've covered their definitions, basic forms, manipulation rules, and seen how they can solve practical problems in counting and recurrence relations. Keep practicing these techniques; they are incredibly valuable!
