---
title: "Inverse Laplace transforms"
subject: "NETWORK THEORY"
module: "Module 3: Laplace transforms and transient analysis: Laplace transforms of standard signals and common functions"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9880"
status: "completed"
scrapedAt: "2026-05-23T16:08:38.299Z"
---
## Module 3: Laplace Transforms and Transient Analysis

### Topic: Inverse Laplace Transforms – Bringing Signals Back to Life!

Welcome back, everyone! In our previous sessions, we delved into the powerful world of Laplace transforms, a tool that has revolutionized how we analyze electrical circuits, especially during those tricky transient periods. We learned how to convert complex differential equations in the time domain (think $v(t), i(t)$) into simpler algebraic equations in the frequency domain (our friend $V(s), I(s)$). This made solving circuits much, much easier.

But here's the crucial question: we've transformed our circuit behavior into the 's'-domain. Now, how do we translate that back into the real world, back into the time-domain signals, the actual voltages and currents that we can observe and measure? That's precisely where the **Inverse Laplace Transform** comes in! Think of it as the decoder ring for our s-domain equations. It allows us to retrieve the original time-domain function from its s-domain representation. This is absolutely fundamental for understanding transient analysis, directly linking to **Course Outcome CO3: Analyze transient behavior of electrical networks using Laplace transforms**. Without the inverse transform, our s-domain analysis would be incomplete.

### Understanding the Need: Why Go Back?

Imagine you're trying to fix a flickering light. You understand the flickering pattern in terms of its frequency components (like a complex s-domain representation). But to actually adjust the dimmer switch or check the bulb's filament, you need to know *when* the flicker happens and *how much* voltage is involved at any given time. The inverse Laplace transform gives us precisely that time-domain information – the $v(t)$ or $i(t)$ that describes the circuit's behavior moment by moment.

### The Core Idea: Mapping Back to Time

The Laplace transform, denoted by $\mathcal{L}$, takes a time-domain function $f(t)$ and produces its s-domain equivalent $F(s)$. The inverse Laplace transform, denoted by $\mathcal{L}^{-1}$, does the opposite: it takes $F(s)$ and brings us back to $f(t)$.

Mathematically, if $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}^{-1}\{F(s)\} = f(t)$.

This seems straightforward, right? But how do we actually *do* it? The inverse Laplace transform relies heavily on our knowledge of the Laplace transforms of standard signals and functions that we've already covered. We essentially use a lookup table – the same table we used to go from time to s-domain, but now in reverse!

### Common Techniques for Finding Inverse Laplace Transforms

While a direct mathematical formula for the inverse Laplace transform exists (involving complex contour integration, a topic for more advanced courses), for our purposes in network theory, we primarily use two main techniques:

1.  **Using Standard Transform Pairs (Lookup Table Method):** This is our bread and butter. We manipulate the given $F(s)$ expression into forms that match known Laplace transform pairs.
2.  **Partial Fraction Expansion:** This is a crucial algebraic technique when $F(s)$ is a rational function (a ratio of polynomials in $s$). It breaks down a complex $F(s)$ into simpler fractions, each of which can be inverted using the standard pairs.

Let's dive into these, starting with the most common scenarios.

#### 1. Using Standard Transform Pairs: The Reverse Lookup

Remember our table of Laplace transforms? Things like the unit step function, the exponential function, sinusoids, etc.? We'll be using that table in reverse.

*   **Unit Step Function:**
    We know $\mathcal{L}\{u(t)\} = \frac{1}{s}$.
    So, if we see $F(s) = \frac{1}{s}$, we immediately know that $f(t) = u(t)$.
    *Think of it like this:* The $\frac{1}{s}$ term in the s-domain often signifies that a constant voltage or current source is applied at $t=0$ and continues indefinitely.

*   **Damped Exponential:**
    We know $\mathcal{L}\{e^{-at}u(t)\} = \frac{1}{s+a}$.
    So, if we encounter $F(s) = \frac{1}{s+5}$, we can directly infer that $f(t) = e^{-5t}u(t)$.
    *Analogy:* Imagine a leaking bucket. The rate at which it empties depends on how much water is left. This exponential decay is a common pattern in circuits with resistors and capacitors or inductors, where energy dissipates over time.

*   **Ramped Function:**
    We know $\mathcal{L}\{tu(t)\} = \frac{1}{s^2}$.
    So, if $F(s) = \frac{1}{s^2}$, then $f(t) = tu(t)$.
    *This is interesting:* A ramp function means the rate of change is constant, like applying a constant *rate* of voltage increase.

*   **Sinusoidal Functions:**
    We know $\mathcal{L}\{\sin(\omega t)u(t)\} = \frac{\omega}{s^2 + \omega^2}$ and $\mathcal{L}\{\cos(\omega t)u(t)\} = \frac{s}{s^2 + \omega^2}$.
    So, if $F(s) = \frac{3}{s^2 + 9}$, we can recognize this. First, notice the denominator: $s^2 + 9$ means $\omega^2 = 9$, so $\omega = 3$. Now look at the numerator. It should be $\omega$, which is 3. Since it *is* 3, this is the transform of $\sin(3t)u(t)$.
    What if $F(s) = \frac{s}{s^2 + 4}$? Here, $\omega^2 = 4$, so $\omega = 2$. The numerator is $s$. This perfectly matches the transform of $\cos(2t)u(t)$.
    *What if the numerator doesn't match perfectly?* For example, $F(s) = \frac{5}{s^2 + 4}$. We want $\omega=2$ in the numerator. We can rewrite $F(s)$ as $\frac{5}{2} \cdot \frac{2}{s^2 + 4}$. Now, $\frac{2}{s^2 + 4}$ transforms to $\sin(2t)u(t)$. So, $f(t) = \frac{5}{2}\sin(2t)u(t)$. This highlights the linearity property of Laplace transforms: $\mathcal{L}^{-1}\{c F(s)\} = c f(t)$.

These basic pairs, along with properties like linearity and the frequency-shift property, allow us to invert many common s-domain functions.

#### 2. Partial Fraction Expansion (PFE): Breaking Down the Complexity

When $F(s)$ is a rational function, say $F(s) = \frac{P(s)}{Q(s)}$, where $P(s)$ and $Q(s)$ are polynomials in $s$, we often need to decompose it. This is especially true when $Q(s)$ is a higher-order polynomial. Partial fraction expansion is our algebraic tool for this.

The goal is to express $F(s)$ as a sum of simpler fractions whose inverse transforms are known. The form of the expansion depends on the roots of the denominator polynomial $Q(s)$. We'll focus on the common cases as discussed in texts like Irwin and Nelms or Sudhakar & Shyammohan.

**Case 1: Distinct Real Roots in the Denominator**

If $Q(s) = (s+a_1)(s+a_2)...(s+a_n)$, where all $a_i$ are distinct real numbers, then we can write:
$F(s) = \frac{P(s)}{Q(s)} = \frac{A_1}{s+a_1} + \frac{A_2}{s+a_2} + ... + \frac{A_n}{s+a_n}$

Once we find the coefficients $A_1, A_2, ..., A_n$, we can find the inverse transform term by term using the property $\mathcal{L}^{-1}\{\frac{A}{s+a}\} = A e^{-at}u(t)$.

**Example:** Let $F(s) = \frac{s+1}{(s+2)(s+3)}$.
We expect an expansion of the form: $F(s) = \frac{A}{s+2} + \frac{B}{s+3}$.

To find $A$: Multiply both sides by $(s+2)$:
$\frac{s+1}{s+3} = A + \frac{B(s+2)}{s+3}$
Now, set $s = -2$:
$\frac{-2+1}{-2+3} = A + 0 \implies \frac{-1}{1} = A \implies A = -1$.

To find $B$: Multiply both sides by $(s+3)$:
$\frac{s+1}{s+2} = \frac{A(s+3)}{s+2} + B$
Now, set $s = -3$:
$\frac{-3+1}{-3+2} = 0 + B \implies \frac{-2}{-1} = B \implies B = 2$.

So, $F(s) = \frac{-1}{s+2} + \frac{2}{s+3}$.
Taking the inverse Laplace transform:
$f(t) = \mathcal{L}^{-1}\{\frac{-1}{s+2}\} + \mathcal{L}^{-1}\{\frac{2}{s+3}\}$
$f(t) = -1 \cdot e^{-2t}u(t) + 2 \cdot e^{-3t}u(t)$
$f(t) = (-e^{-2t} + 2e^{-3t})u(t)$.

*Remember this tip:* When finding the coefficient for a term like $\frac{A}{s+a_i}$, you can cover up that term in the original fraction and substitute $s = -a_i$ into the remaining expression. This is often called the "Heaviside cover-up method." It's a quick way to find the coefficients.

**Case 2: Repeated Real Roots in the Denominator**

If $Q(s) = (s+a)^m \cdot (\text{other factors})$, the expansion involves terms with powers of $(s+a)$:
$F(s) = \frac{A_1}{s+a} + \frac{A_2}{(s+a)^2} + ... + \frac{A_m}{(s+a)^m} + (\text{terms for other factors})$

We use similar methods (cover-up for $A_m$, differentiation for others, or equating coefficients) to find the constants.

**Key transform pairs for repeated roots:**
$\mathcal{L}\{t^n u(t)\} = \frac{n!}{s^{n+1}}$
So, $\mathcal{L}\{\frac{t^{n-1}}{(n-1)!}u(t)\} = \frac{1}{s^n}$
And the shift property: $\mathcal{L}\{e^{-at} t^{n-1} u(t)\} = \frac{(n-1)!}{(s+a)^n}$
Which means $\mathcal{L}\{\frac{t^{n-1}}{(n-1)!}e^{-at} u(t)\} = \frac{1}{(s+a)^n}$.

**Example:** Let $F(s) = \frac{1}{s(s+1)^2}$.
The expansion is $F(s) = \frac{A}{s} + \frac{B}{s+1} + \frac{C}{(s+1)^2}$.

To find $A$: Cover up $s$ and set $s=0$:
$A = \frac{1}{(0+1)^2} = \frac{1}{1} = 1$.

To find $C$: Cover up $(s+1)^2$ and set $s=-1$:
$C = \frac{1}{-1} = -1$.

To find $B$: We can use the cover-up method with differentiation or equate coefficients. Let's try equating coefficients.
$F(s) = \frac{1}{s(s+1)^2} = \frac{1}{s(s^2+2s+1)} = \frac{1}{s^3+2s^2+s}$.
$\frac{A}{s} + \frac{B}{s+1} + \frac{C}{(s+1)^2} = \frac{A(s+1)^2 + B s(s+1) + C s}{s(s+1)^2}$
$= \frac{A(s^2+2s+1) + B(s^2+s) + Cs}{s(s+1)^2}$
$= \frac{(A+B)s^2 + (2A+B+C)s + A}{s(s+1)^2}$

Comparing numerators: $1 = (A+B)s^2 + (2A+B+C)s + A$.
For this to hold for all $s$, the coefficients of powers of $s$ on both sides must match.
Coefficient of $s^2$: $0 = A+B$. Since $A=1$, $0 = 1+B \implies B = -1$.
Coefficient of $s$: $0 = 2A+B+C$. $0 = 2(1) + (-1) + C \implies 0 = 2-1+C \implies C = -1$. (This matches what we found for C earlier, good!)
Constant term: $1 = A$. (This also matches!)

So, $F(s) = \frac{1}{s} + \frac{-1}{s+1} + \frac{-1}{(s+1)^2}$.
Now, invert each term:
$f(t) = \mathcal{L}^{-1}\{\frac{1}{s}\} - \mathcal{L}^{-1}\{\frac{1}{s+1}\} - \mathcal{L}^{-1}\{\frac{1}{(s+1)^2}\}$
We know $\mathcal{L}^{-1}\{\frac{1}{s}\} = u(t)$.
We know $\mathcal{L}^{-1}\{\frac{1}{s+1}\} = e^{-t}u(t)$.
For the last term, $\frac{1}{(s+1)^2}$, this matches $\frac{1}{(s+a)^n}$ with $a=1$ and $n=2$. So $n-1=1$. The transform is $\frac{t^{2-1}}{(2-1)!}e^{-1t}u(t) = \frac{t^1}{1!}e^{-t}u(t) = te^{-t}u(t)$.

Therefore, $f(t) = u(t) - e^{-t}u(t) - te^{-t}u(t) = (1 - e^{-t} - te^{-t})u(t)$.

**Case 3: Complex Conjugate Roots in the Denominator**

If $Q(s)$ has complex roots, they will appear as conjugate pairs, like $(s^2 + bs + c)$, where $b^2 - 4c < 0$. This is very common in circuits with RLC components, leading to oscillatory responses.

The expansion will involve terms like $\frac{As+B}{s^2+bs+c}$.
We often complete the square in the denominator: $s^2+bs+c = (s + \frac{b}{2})^2 + (c - \frac{b^2}{4})$. Let $a = \frac{b}{2}$ and $\omega_0^2 = c - \frac{b^2}{4}$. Then the denominator is $(s+a)^2 + \omega_0^2$.

Now, we look for transforms of the form:
$\mathcal{L}\{e^{-at}\cos(\omega_0 t)u(t)\} = \frac{s+a}{(s+a)^2 + \omega_0^2}$
$\mathcal{L}\{e^{-at}\sin(\omega_0 t)u(t)\} = \frac{\omega_0}{(s+a)^2 + \omega_0^2}$

**Example:** Let $F(s) = \frac{s+3}{s^2+4s+13}$.
First, complete the square in the denominator: $s^2+4s+13 = (s^2+4s+4) + 9 = (s+2)^2 + 3^2$.
So, $a=2$ and $\omega_0=3$.
Our $F(s)$ is $\frac{s+3}{(s+2)^2+3^2}$.
We want to match it to the forms $\frac{s+a}{(s+a)^2 + \omega_0^2}$ or $\frac{\omega_0}{(s+a)^2 + \omega_0^2}$.
The numerator is $s+3$. We can rewrite this as $(s+2) + 1$.
So, $F(s) = \frac{(s+2) + 1}{(s+2)^2 + 3^2} = \frac{s+2}{(s+2)^2+3^2} + \frac{1}{(s+2)^2+3^2}$.

Now, invert each part:
The first term $\frac{s+2}{(s+2)^2+3^2}$ matches $\frac{s+a}{(s+a)^2 + \omega_0^2}$ with $a=2, \omega_0=3$. Its inverse transform is $e^{-2t}\cos(3t)u(t)$.

The second term is $\frac{1}{(s+2)^2+3^2}$. We need $\omega_0$ in the numerator. Since $\omega_0=3$, we can write this as $\frac{1}{3} \cdot \frac{3}{(s+2)^2+3^2}$.
The transform of $\frac{3}{(s+2)^2+3^2}$ is $e^{-2t}\sin(3t)u(t)$.
So, the inverse transform of $\frac{1}{(s+2)^2+3^2}$ is $\frac{1}{3}e^{-2t}\sin(3t)u(t)$.

Combining them:
$f(t) = e^{-2t}\cos(3t)u(t) + \frac{1}{3}e^{-2t}\sin(3t)u(t)$.

**Important Note on Pole-Zero Cancellation:** Sometimes, after PFE, you might get a term like $\frac{1}{s+2}$ but the original function had a zero at $s=-2$. This indicates that the pole at $s=-2$ is cancelled by a zero. In such cases, that specific term might not contribute to the final time-domain response. However, in circuit analysis, the presence of a pole in the network function usually means a corresponding response term. Be mindful of how zeros might affect the system's output.

### Properties of the Inverse Laplace Transform

Just as the Laplace transform has useful properties, so does the inverse transform. These are often used in conjunction with PFE or when manipulating $F(s)$ expressions.

*   **Linearity:** $\mathcal{L}^{-1}\{aF_1(s) + bF_2(s)\} = a f_1(t) + b f_2(t)$. This is what we used when splitting fractions and factoring out constants.
*   **Frequency Shifting (First Shifting Theorem):** If $\mathcal{L}^{-1}\{F(s)\} = f(t)$, then $\mathcal{L}^{-1}\{F(s-a)\} = e^{at}f(t)u(t)$. This is crucial for handling terms like $(s+a)$ in the denominator, as seen in the examples with exponential damping.
*   **Time Differentiation:** $\mathcal{L}^{-1}\{\frac{dF(s)}{ds}\} = -tf(t)u(t)$. This is less commonly used directly for inversion but is fundamental.
*   **Integration in the s-domain:** $\mathcal{L}^{-1}\{\int_s^\infty F(\sigma) d\sigma\} = \frac{f(t)}{t}u(t)$. Again, more of a theoretical tool for us.

### Connecting Back to Network Analysis (CO3 and CO1)

This entire process of inverse Laplace transforms is what allows us to move from the s-domain analysis (using mesh/node equations written in terms of s, as per **CO1**) to the time-domain response.

For example, when we analyze an RLC circuit in the s-domain, we might get an impedance like $Z(s) = R + sL + \frac{1}{sC} = \frac{s^2LC + sRC + 1}{sC}$. If we're looking for the current $I(s)$ through this impedance when a voltage $V(s)$ is applied, we have $I(s) = \frac{V(s)}{Z(s)}$. If $V(s) = \frac{V_0}{s}$ (a DC voltage step) and $Z(s)$ is a second-order polynomial, $I(s)$ will be a rational function. Applying partial fraction expansion to $I(s)$ and then taking the inverse Laplace transform will give us the current $i(t)$ as a function of time, showing the initial surge, oscillations (if any), and settling behavior. This is the essence of transient analysis.

### Real-World Analogy: Predicting a Rollercoaster's Motion

Imagine you're designing a rollercoaster. You can calculate the forces and speeds in terms of complex mathematical functions (the s-domain). But the people riding the rollercoaster want to know *how fast* they're going at *what specific time* and *when* they'll experience a particular force. The inverse Laplace transform is like taking your complex force calculations and translating them into a rider's experience – "At 10 seconds, you'll be going 50 mph and experiencing 3 Gs." This is the practical outcome of our s-domain work.

### Common Pitfalls and Exam Tips

*   **Forgetting the Unit Step Function $u(t)$:** Most of the standard transforms we use are for functions that start at $t=0$. Always include $u(t)$ in your time-domain answers unless the problem explicitly states otherwise or the context makes it obvious. Many exam marking schemes look for this.
*   **Incorrect PFE Coefficients:** Double-check your algebra when calculating $A, B, C$, etc. A small error here propagates through the entire solution. The Heaviside cover-up method is fast but can be error-prone if not applied carefully. Equating coefficients is more systematic but takes longer.
*   **Not Matching Numerators for Sinusoids:** Remember that $\mathcal{L}\{\sin(\omega t)\}$ has $\omega$ in the numerator, and $\mathcal{L}\{\cos(\omega t)\}$ has $s$ in the numerator. When you've identified the $\omega$ from the denominator, ensure the numerator is adjusted correctly, possibly by multiplying by a constant.
*   **Overlooking Repeated Roots:** Treat each instance of a repeated root as a distinct term in the PFE. The $n$-th power requires terms up to the $n$-th power in the expansion.
*   **Complex Roots:** Be comfortable completing the square and recognizing the sine and cosine forms with the exponential shift. These are very common for RLC circuits.

By mastering the inverse Laplace transform, you gain the ability to fully interpret the results of your s-domain analysis and understand the actual time-dependent behavior of circuits. This is absolutely key to achieving **Course Outcome CO3**.

---

### Sample Questions with Answers

**Q1. Conceptual Question: What is the primary purpose of the inverse Laplace transform in network theory?**

**Answer:** The primary purpose of the inverse Laplace transform in network theory is to convert the mathematical representation of a circuit's behavior from the frequency (s-domain) back into the time domain. This allows us to determine the actual voltage or current signals ($v(t)$, $i(t)$) as functions of time, which is essential for understanding and analyzing transient responses, steady-state behavior, and the overall dynamic operation of the circuit. It bridges the gap between the simplified algebraic analysis in the s-domain and the real-world physical response of the circuit.

**Q2. Exam-Oriented Question: Find the inverse Laplace transform of the function $F(s) = \frac{2s+5}{(s+1)(s+3)}$.**

**Solution:**
This is a case of distinct real roots in the denominator. We will use Partial Fraction Expansion.
Let $F(s) = \frac{A}{s+1} + \frac{B}{s+3}$.

To find A (using Heaviside cover-up method):
Set $s = -1$ in $\frac{2s+5}{s+3}$:
$A = \frac{2(-1)+5}{-1+3} = \frac{-2+5}{2} = \frac{3}{2}$.

To find B (using Heaviside cover-up method):
Set $s = -3$ in $\frac{2s+5}{s+1}$:
$B = \frac{2(-3)+5}{-3+1} = \frac{-6+5}{-2} = \frac{-1}{-2} = \frac{1}{2}$.

So, $F(s) = \frac{3/2}{s+1} + \frac{1/2}{s+3}$.

Now, take the inverse Laplace transform term by term:
$f(t) = \mathcal{L}^{-1}\left\{\frac{3/2}{s+1}\right\} + \mathcal{L}^{-1}\left\{\frac{1/2}{s+3}\right\}$
Using $\mathcal{L}^{-1}\left\{\frac{1}{s+a}\right\} = e^{-at}u(t)$:
$f(t) = \frac{3}{2}e^{-1t}u(t) + \frac{1}{2}e^{-3t}u(t)$
$f(t) = \left(\frac{3}{2}e^{-t} + \frac{1}{2}e^{-3t}\right)u(t)$.

**Reasoning:** The problem requires finding the time-domain representation of a given s-domain function. The denominator is a product of distinct linear terms, indicating that a partial fraction expansion into simple first-order terms is appropriate. The Heaviside cover-up method is an efficient way to find the coefficients of these terms. Once the function is decomposed into standard forms, the inverse Laplace transform is applied to each term using known transform pairs, with the unit step function $u(t)$ included to denote the causal nature of the response.

**Q3. Exam-Oriented Question: Determine the inverse Laplace transform of $G(s) = \frac{4s+2}{s^2+2s+5}$.**

**Solution:**
The denominator $s^2+2s+5$ has complex roots (discriminant $b^2-4ac = 2^2 - 4(1)(5) = 4 - 20 = -16 < 0$). We need to complete the square and use the forms related to damped sinusoids.
Complete the square for $s^2+2s+5$:
$s^2+2s+5 = (s^2+2s+1) + 4 = (s+1)^2 + 2^2$.
So, $a=1$ and $\omega_0=2$.

The function is $G(s) = \frac{4s+2}{(s+1)^2+2^2}$.
We want to match this to forms $\frac{s+a}{(s+a)^2+\omega_0^2}$ and $\frac{\omega_0}{(s+a)^2+\omega_0^2}$.
The numerator is $4s+2$. We need to express this in terms of $(s+1)$.
$4s+2 = 4(s+1) - 4 + 2 = 4(s+1) - 2$.

So, $G(s) = \frac{4(s+1) - 2}{(s+1)^2+2^2} = \frac{4(s+1)}{(s+1)^2+2^2} - \frac{2}{(s+1)^2+2^2}$.

Now, invert each term:
Term 1: $\frac{4(s+1)}{(s+1)^2+2^2} = 4 \cdot \frac{s+1}{(s+1)^2+2^2}$.
The transform pair is $\mathcal{L}\{e^{-at}\cos(\omega_0 t)u(t)\} = \frac{s+a}{(s+a)^2+\omega_0^2}$.
With $a=1, \omega_0=2$, the inverse transform is $4e^{-t}\cos(2t)u(t)$.

Term 2: $-\frac{2}{(s+1)^2+2^2}$.
We need $\omega_0=2$ in the numerator. We can write this as $-1 \cdot \frac{2}{(s+1)^2+2^2}$.
The transform pair is $\mathcal{L}\{e^{-at}\sin(\omega_0 t)u(t)\} = \frac{\omega_0}{(s+a)^2+\omega_0^2}$.
With $a=1, \omega_0=2$, the inverse transform is $-1 \cdot e^{-t}\sin(2t)u(t) = -e^{-t}\sin(2t)u(t)$.

Combining both parts:
$g(t) = 4e^{-t}\cos(2t)u(t) - e^{-t}\sin(2t)u(t)$.
$g(t) = e^{-t}(4\cos(2t) - \sin(2t))u(t)$.

**Reasoning:** The presence of complex roots in the denominator signals an oscillatory behavior, modified by an exponential decay due to the real part of the roots. Completing the square transforms the denominator into the standard form $(s+a)^2+\omega_0^2$. The numerator is then manipulated to match the forms associated with damped sinusoids (cosine and sine). The linearity property is used to separate and scale terms to match these standard forms, and the frequency-shifting property is implicitly used by recognizing the $(s+a)$ term in the numerator and denominator. The unit step function $u(t)$ is included for causal signals.
