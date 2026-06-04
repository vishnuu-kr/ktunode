---
title: "Inverse Laplace Transform"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83555"
status: "completed"
scrapedAt: "2026-05-20T17:39:28.679Z"
---
# Module 3: Laplace Transform - Inverse Laplace Transform

Welcome back, everyone! In our previous sessions, we delved into the fascinating world of the Laplace Transform, a powerful tool that allows us to convert differential equations into algebraic ones, making them significantly easier to solve. Today, we're going to focus on the *other side* of this coin: the **Inverse Laplace Transform**.

Think of it like this: The Laplace Transform is like translating a complex piece of music from its original score into a simplified digital format. It's easier to manipulate and analyze in that digital form. The Inverse Laplace Transform, then, is like taking that digital file and reconstructing the original, beautiful music. We're going back from the algebraic domain (the 's-domain') to the time domain (the 't-domain'). This is crucial because, ultimately, our engineering problems are about how things behave *over time*.

This topic directly supports **Course Outcome 3 (CO3)**, where we aim to "Compute Laplace transform and apply it to solve ODEs arising in engineering." The inverse transform is the final step in applying the Laplace transform to solve those ODEs. Without it, we'd have our algebraic solution in the s-domain, but we wouldn't know what it means in terms of actual time-dependent functions.

---

## Understanding the Concept: Going Backwards

The Laplace transform of a function $f(t)$, denoted by $\mathcal{L}\{f(t)\} = F(s)$, maps a function of time $t$ to a function of a complex variable $s$. The inverse Laplace transform, denoted by $\mathcal{L}^{-1}\{F(s)\} = f(t)$, performs the reverse operation.

**Definition:** If $F(s)$ is the Laplace transform of $f(t)$, i.e., $F(s) = \mathcal{L}\{f(t)\}$, then $f(t)$ is called the inverse Laplace transform of $F(s)$. We write this as $f(t) = \mathcal{L}^{-1}\{F(s)\}$.

The fundamental definition of the Laplace transform, $F(s) = \int_0^\infty e^{-st} f(t) dt$, involves an integral. The inverse Laplace transform, mathematically, is defined using a complex contour integral:

$f(t) = \frac{1}{2\pi i} \int_{\gamma - i\infty}^{\gamma + i\infty} e^{st} F(s) ds$

Now, I know what you might be thinking: "Professor, are we going to be doing complex contour integration in this course?" And the answer is **no, not directly for routine calculations**. This complex integral is the theoretical underpinning, proving that the inverse transform exists and is unique under certain conditions (which are met by most functions we encounter in engineering). Our focus will be on practical methods for finding the inverse transform, primarily using **linearity** and **standard transform pairs**.

---

## Practical Methods for Finding the Inverse Laplace Transform

Just as we had tables of Laplace transforms, we also have tables of inverse Laplace transforms. These are invaluable! Think of them as a dictionary – you look up the s-domain function, and it tells you the corresponding t-domain function.

### 1. Using Standard Transform Pairs (The "Dictionary" Method)

This is the most common and direct method. We'll encounter many functions $F(s)$ that are combinations of basic forms we've already seen.

**Key Idea:** If you know that $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}^{-1}\{F(s)\} = f(t)$.

Let's revisit some fundamental pairs we learned earlier, and how to find their inverses:

*   **Unit Step Function:** $\mathcal{L}\{u(t)\} = \frac{1}{s}$  =>  $\mathcal{L}^{-1}\left\{\frac{1}{s}\right\} = u(t)$
    *   *Analogy:* Think of switching on a light. The unit step is zero before you flip the switch and one after.
*   **Exponential Function:** $\mathcal{L}\{e^{at} u(t)\} = \frac{1}{s-a}$  =>  $\mathcal{L}^{-1}\left\{\frac{1}{s-a}\right\} = e^{at} u(t)$
    *   *Relatable Example:* Imagine a radioactive substance decaying. Its concentration over time might be modeled by $e^{-kt}$, where $k$ is the decay constant. The Laplace transform of this decaying process would involve a term like $\frac{1}{s+k}$.
*   **Sine and Cosine:**
    *   $\mathcal{L}\{\sin(\omega t) u(t)\} = \frac{\omega}{s^2 + \omega^2}$  =>  $\mathcal{L}^{-1}\left\{\frac{\omega}{s^2 + \omega^2}\right\} = \sin(\omega t) u(t)$
    *   $\mathcal{L}\{\cos(\omega t) u(t)\} = \frac{s}{s^2 + \omega^2}$  =>  $\mathcal{L}^{-1}\left\{\frac{s}{s^2 + \omega^2}\right\} = \cos(\omega t) u(t)$
    *   *Engineering Context:* These are the building blocks of oscillatory systems like simple harmonic motion in mechanical springs or AC circuits with capacitors and inductors.
*   **Hyperbolic Functions:**
    *   $\mathcal{L}\{\sinh(at) u(t)\} = \frac{a}{s^2 - a^2}$  =>  $\mathcal{L}^{-1}\left\{\frac{a}{s^2 - a^2}\right\} = \sinh(at) u(t)$
    *   $\mathcal{L}\{\cosh(at) u(t)\} = \frac{s}{s^2 - a^2}$  =>  $\mathcal{L}^{-1}\left\{\frac{s}{s^2 - a^2}\right\} = \cosh(at) u(t)$
*   **Power Functions:** $\mathcal{L}\{t^n u(t)\} = \frac{n!}{s^{n+1}}$  =>  $\mathcal{L}^{-1}\left\{\frac{n!}{s^{n+1}}\right\} = t^n u(t)$
    *   *Remember this:* For $t^n$, the Laplace transform is $\frac{n!}{s^{n+1}}$. So, if you see $\frac{1}{s^2}$, you know it's related to $t^1$. Specifically, $\mathcal{L}^{-1}\left\{\frac{1}{s^2}\right\} = \mathcal{L}^{-1}\left\{\frac{1!}{s^{1+1}}\right\} = t^1 u(t) = t u(t)$. If you see $\frac{2}{s^3}$, you know it's $\mathcal{L}^{-1}\left\{\frac{2!}{s^{2+1}}\right\} = t^2 u(t)$. If the numerator isn't the required factorial, you just adjust it by multiplying and dividing outside the transform.

**Example 1: Simple Inverse Transform**
Find $\mathcal{L}^{-1}\left\{\frac{3}{s-5}\right\}$.
We know $\mathcal{L}^{-1}\left\{\frac{1}{s-a}\right\} = e^{at} u(t)$. Here, $a=5$.
So, $\mathcal{L}^{-1}\left\{\frac{3}{s-5}\right\} = 3 \mathcal{L}^{-1}\left\{\frac{1}{s-5}\right\} = 3e^{5t} u(t)$.
Easy enough, right? Just spotting the basic form and applying the constant multiplier.

**Example 2: Dealing with Numerators**
Find $\mathcal{L}^{-1}\left\{\frac{1}{s^2+9}\right\}$.
This looks like the sine transform, $\frac{\omega}{s^2+\omega^2}$. Here, $\omega^2 = 9$, so $\omega = 3$.
The transform requires $\omega$ in the numerator. So, we write:
$\mathcal{L}^{-1}\left\{\frac{1}{s^2+9}\right\} = \mathcal{L}^{-1}\left\{\frac{1}{3} \cdot \frac{3}{s^2+9}\right\}$
Using linearity again:
$= \frac{1}{3} \mathcal{L}^{-1}\left\{\frac{3}{s^2+9}\right\} = \frac{1}{3} \sin(3t) u(t)$.

**Example 3: Powers of s**
Find $\mathcal{L}^{-1}\left\{\frac{2}{s^4}\right\}$.
We know $\mathcal{L}\{t^n u(t)\} = \frac{n!}{s^{n+1}}$.
We have $s^4$, so $n+1 = 4$, which means $n=3$.
The transform should have $3! = 6$ in the numerator.
$\mathcal{L}^{-1}\left\{\frac{2}{s^4}\right\} = \mathcal{L}^{-1}\left\{\frac{2}{6} \cdot \frac{6}{s^4}\right\} = \frac{2}{6} \mathcal{L}^{-1}\left\{\frac{3!}{s^{3+1}}\right\}$
$= \frac{1}{3} t^3 u(t)$.

### 2. Linearity Property

This is a fundamental property that we've already used in the examples above. It states that for constants $a$ and $b$, and functions $F(s)$ and $G(s)$ with inverse transforms $f(t)$ and $g(t)$ respectively:

$\mathcal{L}^{-1}\{aF(s) + bG(s)\} = a \mathcal{L}^{-1}\{F(s)\} + b \mathcal{L}^{-1}\{G(s)\}$

This is incredibly powerful because it means we can find the inverse transform of a sum or difference of functions by finding the inverse transform of each term separately and then combining them. Most complex rational functions in $s$ can be broken down into simpler terms using partial fraction decomposition.

### 3. Partial Fraction Decomposition (PFD)

This is probably the most important technique for handling rational functions $F(s) = \frac{N(s)}{D(s)}$, where $N(s)$ and $D(s)$ are polynomials in $s$. We decompose $F(s)$ into a sum of simpler fractions whose inverse transforms are known from standard tables. This directly aids in satisfying **CO3**.

**The Process:**

1.  **Ensure Proper Fraction:** The degree of the numerator $N(s)$ must be strictly less than the degree of the denominator $D(s)$. If it's not, perform polynomial long division first.
2.  **Factor the Denominator:** Completely factor the denominator $D(s)$ into linear factors (of the form $s-a$) and irreducible quadratic factors (of the form $s^2+bs+c$ where $b^2-4c < 0$).
3.  **Set up the Decomposition:**
    *   For each distinct linear factor $(s-a)$, the partial fraction will have a term $\frac{A}{s-a}$.
    *   For each repeated linear factor $(s-a)^k$, the partial fractions will have terms $\frac{A_1}{s-a} + \frac{A_2}{(s-a)^2} + \dots + \frac{A_k}{(s-a)^k}$.
    *   For each distinct irreducible quadratic factor $(s^2+bs+c)$, the partial fraction will have a term $\frac{As+B}{s^2+bs+c}$.
    *   For each repeated irreducible quadratic factor $(s^2+bs+c)^k$, the partial fractions will have terms $\frac{A_1s+B_1}{s^2+bs+c} + \frac{A_2s+B_2}{(s^2+bs+c)^2} + \dots + \frac{A_ks+B_k}{(s^2+bs+c)^k}$.
4.  **Solve for the Coefficients:** Use algebraic methods (equating coefficients or substituting strategic values of $s$) to find the unknown coefficients (A, B, etc.).

**Example 4: Distinct Linear Factors**
Find $\mathcal{L}^{-1}\left\{\frac{s+1}{s(s+2)}\right\}$.
The denominator is already factored, and the degree of the numerator (1) is less than the degree of the denominator (2).
We set up the partial fraction decomposition:
$\frac{s+1}{s(s+2)} = \frac{A}{s} + \frac{B}{s+2}$

To find A and B, multiply both sides by $s(s+2)$:
$s+1 = A(s+2) + Bs$

*   **Method 1: Substituting values of s**
    *   Let $s=0$: $0+1 = A(0+2) + B(0) \implies 1 = 2A \implies A = \frac{1}{2}$.
    *   Let $s=-2$: $-2+1 = A(-2+2) + B(-2) \implies -1 = -2B \implies B = \frac{1}{2}$.

*   **Method 2: Equating Coefficients**
    $s+1 = As + 2A + Bs = (A+B)s + 2A$
    Equating coefficients of $s$: $1 = A+B$
    Equating constant terms: $1 = 2A \implies A = \frac{1}{2}$.
    Substitute A into the first equation: $1 = \frac{1}{2} + B \implies B = \frac{1}{2}$.

So, $F(s) = \frac{1/2}{s} + \frac{1/2}{s+2}$.
Now, we take the inverse Laplace transform term by term:
$\mathcal{L}^{-1}\left\{\frac{s+1}{s(s+2)}\right\} = \mathcal{L}^{-1}\left\{\frac{1/2}{s}\right\} + \mathcal{L}^{-1}\left\{\frac{1/2}{s+2}\right\}$
$= \frac{1}{2} \mathcal{L}^{-1}\left\{\frac{1}{s}\right\} + \frac{1}{2} \mathcal{L}^{-1}\left\{\frac{1}{s+2}\right\}$
$= \frac{1}{2}(1) + \frac{1}{2}e^{-2t} u(t)$
$= \frac{1}{2} + \frac{1}{2}e^{-2t} u(t)$.

**Example 5: Repeated Linear Factors**
Find $\mathcal{L}^{-1}\left\{\frac{s+3}{(s-1)^2}\right\}$.
The denominator has a repeated linear factor $(s-1)^2$.
Decomposition: $\frac{s+3}{(s-1)^2} = \frac{A}{s-1} + \frac{B}{(s-1)^2}$
Multiply by $(s-1)^2$: $s+3 = A(s-1) + B$.

*   **Method 1: Substituting values of s**
    *   Let $s=1$: $1+3 = A(1-1) + B \implies 4 = B$.
*   **Method 2: Equating Coefficients**
    $s+3 = As - A + B$
    Equating coefficients of $s$: $1 = A$.
    Equating constant terms: $3 = -A + B$. Substitute $A=1$: $3 = -1 + B \implies B = 4$.

So, $F(s) = \frac{1}{s-1} + \frac{4}{(s-1)^2}$.
Inverse transform:
$\mathcal{L}^{-1}\left\{\frac{s+3}{(s-1)^2}\right\} = \mathcal{L}^{-1}\left\{\frac{1}{s-1}\right\} + \mathcal{L}^{-1}\left\{\frac{4}{(s-1)^2}\right\}$
$= e^t u(t) + 4 \mathcal{L}^{-1}\left\{\frac{1}{(s-1)^2}\right\}$
Now, we need the inverse of $\frac{1}{(s-1)^2}$. We know $\mathcal{L}\{t^n u(t)\} = \frac{n!}{s^{n+1}}$.
For $n=1$, $\mathcal{L}\{t u(t)\} = \frac{1!}{s^2} = \frac{1}{s^2}$.
Using the first shifting theorem (which we'll cover next, but it's intuitive here): $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$.
So, $\mathcal{L}\{e^{at} t u(t)\} = \frac{1!}{(s-a)^2}$.
In our case, $a=1$, so $\mathcal{L}\{e^t t u(t)\} = \frac{1}{(s-1)^2}$.
Therefore, $\mathcal{L}^{-1}\left\{\frac{1}{(s-1)^2}\right\} = t e^t u(t)$.

Putting it all together:
$\mathcal{L}^{-1}\left\{\frac{s+3}{(s-1)^2}\right\} = e^t u(t) + 4 t e^t u(t)$.

### 4. Shifting Theorems

These theorems are extremely useful for handling terms like $(s-a)$ in the denominator or $s$ replaced by $(s-a)$ in the numerator. They directly relate to transformations of functions involving $e^{at}$.

#### First Shifting Theorem (Frequency Shifting)

If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{e^{at} f(t)\} = F(s-a)$.
This means that if you see $F(s-a)$ as your transform, you first find the inverse transform of $F(s)$ (let's call it $f(t)$), and then multiply that by $e^{at}$.

**Example 6: Using the First Shifting Theorem**
Find $\mathcal{L}^{-1}\left\{\frac{s}{s^2+4s+5}\right\}$.
The denominator $s^2+4s+5$ is an irreducible quadratic (discriminant $4^2 - 4(1)(5) = 16-20 = -4 < 0$).
To use our standard sine and cosine transforms, we need to complete the square in the denominator:
$s^2+4s+5 = (s^2+4s+4) + 1 = (s+2)^2 + 1$.
So, $F(s) = \frac{s}{(s+2)^2 + 1}$.

This form $F(s-a)$ suggests the first shifting theorem. Here, $a=2$.
We want to express the numerator in terms of $(s+2)$.
$\frac{s}{(s+2)^2+1} = \frac{(s+2)-2}{(s+2)^2+1} = \frac{s+2}{(s+2)^2+1} - \frac{2}{(s+2)^2+1}$.

Now, let's look at the standard forms.
We know:
*   $\mathcal{L}\{\cos(\omega t) u(t)\} = \frac{s}{s^2+\omega^2}$
*   $\mathcal{L}\{\sin(\omega t) u(t)\} = \frac{\omega}{s^2+\omega^2}$

Here, $\omega^2=1$, so $\omega=1$.

Consider the first term: $\frac{s+2}{(s+2)^2+1}$.
If we let $G(s) = \frac{s}{s^2+1}$, then $g(t) = \cos(t)u(t)$.
According to the first shifting theorem, $\mathcal{L}\{e^{-2t}\cos(t)u(t)\} = G(s+2) = \frac{s+2}{(s+2)^2+1}$.
So, $\mathcal{L}^{-1}\left\{\frac{s+2}{(s+2)^2+1}\right\} = e^{-2t}\cos(t)u(t)$.

Now consider the second term: $\frac{2}{(s+2)^2+1}$.
If we let $H(s) = \frac{1}{s^2+1}$, then $h(t) = \sin(t)u(t)$.
The first shifting theorem states $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$.
Here, we have $\frac{2}{(s+2)^2+1} = 2 \cdot \frac{1}{(s+2)^2+1}$.
So, $\mathcal{L}^{-1}\left\{\frac{2}{(s+2)^2+1}\right\} = 2 \mathcal{L}^{-1}\left\{\frac{1}{(s+2)^2+1}\right\}$.
Using the theorem with $a=2$ and $f(t) = \sin(t)u(t)$, we get:
$\mathcal{L}^{-1}\left\{\frac{1}{(s+2)^2+1}\right\} = e^{-2t}\sin(t)u(t)$.
Thus, $\mathcal{L}^{-1}\left\{\frac{2}{(s+2)^2+1}\right\} = 2e^{-2t}\sin(t)u(t)$.

Combining both parts:
$\mathcal{L}^{-1}\left\{\frac{s}{s^2+4s+5}\right\} = e^{-2t}\cos(t)u(t) - 2e^{-2t}\sin(t)u(t)$.

**Important Note on completing the square and matching numerators:**
When you have a denominator like $(s-a)^2 + \omega^2$, and you need to invert it:
*   If the numerator is $(s-a)$, the inverse transform involves $e^{at}\cos(\omega t)$.
*   If the numerator is a constant $\omega$, the inverse transform involves $e^{at}\sin(\omega t)$.
*   If the numerator is any other polynomial, you'll likely need to split it to match these forms, as we did in Example 6.

#### Second Shifting Theorem (Time Shifting)

If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{f(t-a) u(t-a)\} = e^{-as} F(s)$ for $a > 0$.
The inverse form is: $\mathcal{L}^{-1}\{e^{-as} F(s)\} = f(t-a) u(t-a)$ for $a > 0$.

**What does this mean?** When you see $e^{-as}$ multiplying a function $F(s)$, it means that the original function $f(t)$ (the inverse of $F(s)$) has been "delayed" by $a$ units of time and is zero for $t < a$. The $u(t-a)$ ensures this delay is implemented correctly, making the function start at $t=a$.

**Example 7: Using the Second Shifting Theorem**
Find $\mathcal{L}^{-1}\left\{\frac{e^{-2s}}{s^2+4}\right\}$.
Here, we have $e^{-2s}$, so $a=2$.
We need to find the inverse transform of $F(s) = \frac{1}{s^2+4}$.
From our standard pairs, $\mathcal{L}^{-1}\left\{\frac{\omega}{s^2+\omega^2}\right\} = \sin(\omega t) u(t)$.
For $F(s) = \frac{1}{s^2+4}$, we have $\omega^2=4$, so $\omega=2$.
We need a 2 in the numerator.
$\mathcal{L}^{-1}\left\{\frac{1}{s^2+4}\right\} = \mathcal{L}^{-1}\left\{\frac{1}{2} \cdot \frac{2}{s^2+4}\right\} = \frac{1}{2} \sin(2t) u(t)$.
Let $f(t) = \frac{1}{2} \sin(2t) u(t)$.

Now, apply the second shifting theorem: $\mathcal{L}^{-1}\{e^{-as} F(s)\} = f(t-a) u(t-a)$.
With $a=2$ and $f(t) = \frac{1}{2} \sin(2t) u(t)$:
$\mathcal{L}^{-1}\left\{\frac{e^{-2s}}{s^2+4}\right\} = f(t-2) u(t-2) = \left(\frac{1}{2} \sin(2(t-2)) u(t-2)\right) u(t-2)$.
Since $u(t-2) \cdot u(t-2) = u(t-2)$, we get:
$= \frac{1}{2} \sin(2(t-2)) u(t-2)$.
$= \frac{1}{2} \sin(2t-4) u(t-2)$.

*   *Real-world analogy:* Imagine a signal pulse representing a message. The second shifting theorem tells us how to reconstruct that message if it's transmitted with a delay. If the original message is $m(t)$, then $e^{-as}M(s)$ corresponds to sending the message $m(t-a)u(t-a)$, meaning the message starts arriving $a$ seconds later.

### 5. Convolution Theorem

This theorem is essential for finding the inverse transform of a product of two functions $F(s)G(s)$.
If $\mathcal{L}\{f(t)\} = F(s)$ and $\mathcal{L}\{g(t)\} = G(s)$, then
$\mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$.

This theorem allows us to handle situations where a function $F(s)$ cannot be easily decomposed using partial fractions, but can be viewed as a product of simpler transforms.

**Example 8: Using the Convolution Theorem**
Find $\mathcal{L}^{-1}\left\{\frac{1}{s(s^2+4)}\right\}$.
We can split this into $F(s)G(s)$ where:
$F(s) = \frac{1}{s} \implies f(t) = u(t)$
$G(s) = \frac{1}{s^2+4} \implies g(t) = \frac{1}{2}\sin(2t)u(t)$ (from earlier work).

Using the convolution integral:
$\mathcal{L}^{-1}\left\{\frac{1}{s(s^2+4)}\right\} = \int_0^t f(\tau) g(t-\tau) d\tau$
$= \int_0^t (1) \left(\frac{1}{2}\sin(2(t-\tau)) u(t-\tau)\right) d\tau$.

Since the integration is from $0$ to $t$, and $\tau$ will always be less than or equal to $t$, $(t-\tau)$ will be non-negative. This means $u(t-\tau)=1$ for $\tau \in [0, t]$. So we can drop the $u(t-\tau)$:
$= \int_0^t \frac{1}{2}\sin(2(t-\tau)) d\tau$
Let $u = 2(t-\tau)$. Then $du = -2 d\tau$, so $d\tau = -\frac{1}{2} du$.
When $\tau = 0$, $u = 2t$.
When $\tau = t$, $u = 0$.

The integral becomes:
$= \int_{2t}^{0} \frac{1}{2}\sin(u) \left(-\frac{1}{2} du\right)$
$= -\frac{1}{4} \int_{2t}^{0} \sin(u) du$
$= \frac{1}{4} \int_{0}^{2t} \sin(u) du$
$= \frac{1}{4} [-\cos(u)]_0^{2t}$
$= \frac{1}{4} (-\cos(2t) - (-\cos(0)))$
$= \frac{1}{4} (-\cos(2t) + 1)$
$= \frac{1}{4}(1 - \cos(2t))$.

So, $\mathcal{L}^{-1}\left\{\frac{1}{s(s^2+4)}\right\} = \frac{1}{4}(1 - \cos(2t)) u(t)$.

*   **Alternative to Convolution (often easier):** Notice that in this specific example, we could have used partial fractions:
    $\frac{1}{s(s^2+4)} = \frac{A}{s} + \frac{Bs+C}{s^2+4}$
    $1 = A(s^2+4) + (Bs+C)s$
    $1 = As^2 + 4A + Bs^2 + Cs$
    $1 = (A+B)s^2 + Cs + 4A$
    Equating coefficients:
    $s^2: A+B = 0 \implies B = -A$
    $s^1: C = 0$
    $s^0: 4A = 1 \implies A = \frac{1}{4}$
    Therefore, $B = -\frac{1}{4}$.
    $F(s) = \frac{1/4}{s} + \frac{-1/4 s}{s^2+4} = \frac{1}{4} \frac{1}{s} - \frac{1}{4} \frac{s}{s^2+4}$.
    Taking the inverse transform:
    $\mathcal{L}^{-1}\{F(s)\} = \frac{1}{4}\mathcal{L}^{-1}\left\{\frac{1}{s}\right\} - \frac{1}{4}\mathcal{L}^{-1}\left\{\frac{s}{s^2+4}\right\}$
    $= \frac{1}{4}(1) - \frac{1}{4}\cos(2t) u(t) = \frac{1}{4}(1 - \cos(2t)) u(t)$.
    This matches the convolution result. Generally, if PFD is feasible, it's often less computationally intensive than convolution.

### 6. Differentiation and Integration in the s-domain

These properties also have inverse relationships:

*   **Inverse of Differentiation in s:** If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{t f(t)\} = -\frac{d}{ds}F(s)$.
    The inverse relationship: $\mathcal{L}^{-1}\left\{-\frac{d}{ds}F(s)\right\} = t f(t)$.
*   **Inverse of Integration in s:** If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\left\{\int_0^t f(\tau) d\tau\right\} = \frac{1}{s}F(s)$.
    The inverse relationship: $\mathcal{L}^{-1}\left\{\frac{1}{s}F(s)\right\} = \int_0^t f(\tau) d\tau$.

**Example 9: Using Inverse Differentiation in s**
Find $\mathcal{L}^{-1}\left\{\ln\left(\frac{s+a}{s+b}\right)\right\}$.
Let $F(s) = \ln\left(\frac{s+a}{s+b}\right) = \ln(s+a) - \ln(s+b)$.
We need to differentiate $F(s)$ with respect to $s$:
$\frac{dF}{ds} = \frac{1}{s+a} - \frac{1}{s+b}$.

Now, we find the inverse transform of $\frac{dF}{ds}$:
$\mathcal{L}^{-1}\left\{\frac{1}{s+a}\right\} = e^{-at}u(t)$
$\mathcal{L}^{-1}\left\{\frac{1}{s+b}\right\} = e^{-bt}u(t)$
So, $\mathcal{L}^{-1}\left\{\frac{1}{s+a} - \frac{1}{s+b}\right\} = e^{-at}u(t) - e^{-bt}u(t)$.
This is $f(t)$.

Using the inverse differentiation property:
$\mathcal{L}^{-1}\left\{\ln\left(\frac{s+a}{s+b}\right)\right\} = \mathcal{L}^{-1}\left\{- \frac{d}{ds}F(s)\right\} = -t f(t)$
$= -t (e^{-at}u(t) - e^{-bt}u(t))$
$= t (e^{-bt} - e^{-at}) u(t)$.

### Connecting to Solving ODEs (CO3 Revisited)

Once we have $Y(s)$, the Laplace transform of our solution $y(t)$, for an ODE like $ay'' + by' + cy = r(t)$ with initial conditions $y(0) = y_0$ and $y'(0) = y'_0$, we get an algebraic equation for $Y(s)$.

The steps are:
1.  Take the Laplace transform of both sides of the ODE.
2.  Use the differentiation properties:
    $\mathcal{L}\{y'(t)\} = sY(s) - y(0)$
    $\mathcal{L}\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$
3.  Substitute the transform of the forcing function $r(t)$, which is $R(s)$.
4.  Rearrange the equation to solve for $Y(s)$:
    $a(s^2Y(s) - sy_0 - y'_0) + b(sY(s) - y_0) + cY(s) = R(s)$
    $Y(s)(as^2 + bs + c) = R(s) + a(sy_0 + y'_0) + by_0$
    $Y(s) = \frac{R(s) + a(sy_0 + y'_0) + by_0}{as^2 + bs + c}$
5.  **Now, the inverse Laplace transform comes into play!** We take the inverse Laplace transform of this expression for $Y(s)$ to find the solution $y(t)$. This almost always involves partial fraction decomposition, shifting theorems, and standard transform pairs.

**Example 10: Solving an ODE**
Solve $y'' + 2y' + y = e^{-t}$, with $y(0)=1$, $y'(0)=0$.

1.  **Transform the ODE:**
    $\mathcal{L}\{y''\} + 2\mathcal{L}\{y'\} + \mathcal{L}\{y\} = \mathcal{L}\{e^{-t}\}$
    $(s^2Y(s) - sy(0) - y'(0)) + 2(sY(s) - y(0)) + Y(s) = \frac{1}{s+1}$
2.  **Substitute initial conditions:** $y(0)=1, y'(0)=0$.
    $(s^2Y(s) - s(1) - 0) + 2(sY(s) - 1) + Y(s) = \frac{1}{s+1}$
    $s^2Y(s) - s + 2sY(s) - 2 + Y(s) = \frac{1}{s+1}$
3.  **Solve for $Y(s)$:**
    $Y(s)(s^2 + 2s + 1) - s - 2 = \frac{1}{s+1}$
    $Y(s)(s+1)^2 = \frac{1}{s+1} + s + 2$
    $Y(s) = \frac{1}{(s+1)^3} + \frac{s+2}{(s+1)^2}$
    $Y(s) = \frac{1}{(s+1)^3} + \frac{(s+1)+1}{(s+1)^2}$
    $Y(s) = \frac{1}{(s+1)^3} + \frac{s+1}{(s+1)^2} + \frac{1}{(s+1)^2}$
    $Y(s) = \frac{1}{(s+1)^3} + \frac{1}{s+1} + \frac{1}{(s+1)^2}$

4.  **Find the inverse Laplace transform of each term:**
    *   For $\frac{1}{s+1}$: $\mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\} = e^{-t}u(t)$.
    *   For $\frac{1}{(s+1)^2}$: We know $\mathcal{L}\{t^n u(t)\} = \frac{n!}{s^{n+1}}$. For $n=1$, $\mathcal{L}\{tu(t)\} = \frac{1}{s^2}$. Using the first shifting theorem $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$, we have $\mathcal{L}\{te^{-t}u(t)\} = \frac{1}{(s-(-1))^2} = \frac{1}{(s+1)^2}$. So, $\mathcal{L}^{-1}\left\{\frac{1}{(s+1)^2}\right\} = te^{-t}u(t)$.
    *   For $\frac{1}{(s+1)^3}$: We need $\frac{n!}{(s-a)^{n+1}}$. Here $n+1=3$, so $n=2$. We need $2! = 2$ in the numerator.
        $\frac{1}{(s+1)^3} = \frac{1}{2} \cdot \frac{2}{(s+1)^3}$.
        Using $\mathcal{L}\{t^n e^{at} u(t)\} = \frac{n!}{(s-a)^{n+1}}$ with $n=2$ and $a=-1$:
        $\mathcal{L}\{t^2 e^{-t} u(t)\} = \frac{2!}{(s-(-1))^{2+1}} = \frac{2}{(s+1)^3}$.
        So, $\mathcal{L}^{-1}\left\{\frac{1}{(s+1)^3}\right\} = \frac{1}{2}t^2 e^{-t} u(t)$.

5.  **Combine the results:**
    $y(t) = \mathcal{L}^{-1}\left\{\frac{1}{(s+1)^3}\right\} + \mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\} + \mathcal{L}^{-1}\left\{\frac{1}{(s+1)^2}\right\}$
    $y(t) = \frac{1}{2}t^2 e^{-t} u(t) + e^{-t} u(t) + te^{-t} u(t)$
    $y(t) = \left(\frac{1}{2}t^2 + t + 1\right) e^{-t} u(t)$.

This is our solution! It's a function of time that satisfies the differential equation and the initial conditions. This is where the power of Laplace transforms really shines, especially for solving ODEs that arise in electrical circuits (RLC circuits, transient analysis) and mechanical vibrations.

---

## Summary of Key Takeaways for Inverse Laplace Transform

*   **It's the reverse process:** Going from the s-domain back to the t-domain.
*   **Tables are your friends:** Memorize or have easy access to standard Laplace transform pairs.
*   **Linearity is crucial:** You can break down complex functions and add inverse transforms.
*   **Partial Fraction Decomposition (PFD):** Your primary tool for rational functions. Master handling distinct linear, repeated linear, and irreducible quadratic factors.
*   **Shifting Theorems:** Essential for dealing with $e^{at}$ terms (frequency shifting) and time delays ($e^{-as}$) (time shifting). Remember to adjust the function $f(t)$ accordingly.
*   **Convolution:** Useful when $F(s)$ is a product and PFD is difficult.
*   **Inverse Differentiation/Integration in s:** For $\ln$ or inverse trig functions in $F(s)$, or for $\frac{1}{s}$ multiplying $F(s)$.
*   **Application to ODEs:** The inverse transform is the final step in solving differential equations, bringing the s-domain solution back to a time-domain function.

---

## Common Pitfalls to Avoid

*   **Algebraic Errors in PFD:** Double-check your coefficients. A single mistake here cascades.
*   **Forgetting the $u(t)$ or $u(t-a)$:** While often omitted in casual writing, these unit step functions are crucial for defining functions that are zero for $t < 0$ or $t < a$. For ODEs, the $u(t)$ on the solution is usually implied.
*   **Incorrectly applying Shifting Theorems:** Confusing the first and second shifting theorems, or forgetting to adjust the function $f(t)$ when using the second theorem.
*   **Mistakes in completing the square:** Especially for quadratic denominators that are irreducible.
*   **Confusing $\sin$ and $\cos$ forms:** Making sure the numerator matches $s$ for cosine and $\omega$ for sine.
*   **Missing constants:** Forgetting to adjust for factorials in the numerator when using power functions or for $\omega$ in sine/cosine transforms.

---

Remember, practice is key! Work through as many examples as you can, especially those from Kreyszig or Bird. The more you practice, the more natural spotting the patterns and applying the techniques will become. This skill is fundamental to understanding system responses in signals and systems, control theory, and circuit analysis, directly reinforcing **CO3**.

---

## Sample Questions with Answers

**Question 1 (Conceptual):**
What is the primary purpose of the inverse Laplace transform in the context of solving differential equations?

**Answer:**
The primary purpose of the inverse Laplace transform is to convert the algebraic solution obtained in the complex frequency domain (s-domain) back into a time-domain function $f(t)$. This time-domain function represents the actual behavior or response of the system described by the differential equation over time, which is ultimately what we need in most engineering applications. It's the final step in the Laplace transform method for solving ODEs.

**Question 2 (Procedural - PFD):**
Find $\mathcal{L}^{-1}\left\{\frac{2s+1}{s^2+s-2}\right\}$.

**Answer:**
1.  **Factor the denominator:** $s^2+s-2 = (s+2)(s-1)$.
2.  **Set up PFD:** $\frac{2s+1}{(s+2)(s-1)} = \frac{A}{s+2} + \frac{B}{s-1}$.
3.  **Solve for A and B:** Multiply by $(s+2)(s-1)$: $2s+1 = A(s-1) + B(s+2)$.
    *   Let $s=1$: $2(1)+1 = A(0) + B(1+2) \implies 3 = 3B \implies B=1$.
    *   Let $s=-2$: $2(-2)+1 = A(-2-1) + B(0) \implies -3 = -3A \implies A=1$.
4.  **Rewrite F(s):** $F(s) = \frac{1}{s+2} + \frac{1}{s-1}$.
5.  **Take inverse Laplace transform:**
    $\mathcal{L}^{-1}\left\{\frac{1}{s+2}\right\} = e^{-2t} u(t)$
    $\mathcal{L}^{-1}\left\{\frac{1}{s-1}\right\} = e^{t} u(t)$
6.  **Combine:**
    $\mathcal{L}^{-1}\left\{\frac{2s+1}{s^2+s-2}\right\} = e^{-2t} u(t) + e^{t} u(t)$.

**Question 3 (Procedural - Shifting Theorem):**
Find $\mathcal{L}^{-1}\left\{\frac{e^{-3s}}{s^2-2s+5}\right\}$.

**Answer:**
1.  **Identify the exponential term:** $e^{-3s}$, so $a=3$. This means we'll use the second shifting theorem: $\mathcal{L}^{-1}\{e^{-as}F(s)\} = f(t-a)u(t-a)$.
2.  **Find the inverse of $F(s) = \frac{1}{s^2-2s+5}$:**
    *   Complete the square in the denominator: $s^2-2s+5 = (s^2-2s+1) + 4 = (s-1)^2 + 4$.
    *   So, $F(s) = \frac{1}{(s-1)^2+4}$. This suggests the first shifting theorem.
    *   We know $\mathcal{L}\{\sin(\omega t)u(t)\} = \frac{\omega}{s^2+\omega^2}$. Here $\omega^2=4$, so $\omega=2$.
    *   We need a 2 in the numerator: $F(s) = \frac{1}{2} \cdot \frac{2}{(s-1)^2+4}$.
    *   Let $G(s) = \frac{2}{s^2+4}$, so $g(t) = \sin(2t)u(t)$.
    *   Using the first shifting theorem $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$, with $a=1$:
        $\mathcal{L}\{e^t \sin(2t)u(t)\} = \frac{2}{(s-1)^2+4}$.
    *   So, $f(t) = \frac{1}{2} \sin(2t) u(t)$. (Note: we extracted the $\frac{1}{2}$ from F(s) to match the form. The inverse transform of $F(s)$ is indeed $\frac{1}{2}\sin(2t)u(t)$).
3.  **Apply the second shifting theorem:**
    $\mathcal{L}^{-1}\left\{\frac{e^{-3s}}{s^2-2s+5}\right\} = f(t-3)u(t-3)$.
    Substitute $(t-3)$ for $t$ in $f(t) = \frac{1}{2} \sin(2t) u(t)$:
    $= \frac{1}{2} \sin(2(t-3)) u(t-3)$
    $= \frac{1}{2} \sin(2t-6) u(t-3)$.

**Question 4 (Conceptual - ODE Application):**
Consider an ODE $y'' + y = \cos(2t)$. If its Laplace transform is $Y(s) = \frac{s+1}{s^2+1} \cdot \frac{s}{s^2+4}$, briefly explain how you would find the particular solution $y_p(t)$ using the convolution theorem.

**Answer:**
The Laplace transform of the forcing function $\cos(2t)$ is $F(s) = \frac{s}{s^2+4}$. The transfer function of the system $y''+y$ is $H(s) = \frac{1}{s^2+1}$ (assuming zero initial conditions for the homogeneous part). Thus, $Y(s) = H(s)F(s)$.
The particular solution $y_p(t)$ (or the total solution if initial conditions are zero) can be found using the convolution theorem:
$y_p(t) = \mathcal{L}^{-1}\{Y(s)\} = \mathcal{L}^{-1}\{H(s)F(s)\} = h(t) * f(t) = \int_0^t h(\tau) f(t-\tau) d\tau$.
Here, $h(t) = \mathcal{L}^{-1}\left\{\frac{1}{s^2+1}\right\} = \sin(t)u(t)$ and $f(t) = \mathcal{L}^{-1}\left\{\frac{s}{s^2+4}\right\} = \cos(2t)u(t)$.
So, $y_p(t) = \int_0^t \sin(\tau) \cos(2(t-\tau)) d\tau$. Evaluating this integral would give the particular solution. (Note: For this specific ODE, PFD of $Y(s)$ would likely be simpler than convolution).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
