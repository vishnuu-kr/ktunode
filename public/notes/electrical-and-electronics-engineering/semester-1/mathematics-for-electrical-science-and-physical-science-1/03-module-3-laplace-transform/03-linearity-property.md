---
title: "Linearity property"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9507"
status: "completed"
scrapedAt: "2026-05-23T16:03:20.720Z"
---
# Mathematics for Electrical Science and Physical Science - 1
## Module 3: Laplace Transform
### Topic: The Linearity Property of the Laplace Transform

Welcome, everyone! Today, we're diving into one of the most fundamental and incredibly useful properties of the Laplace transform: its **linearity**. This property is like a superpower for the Laplace transform, making our lives so much easier when dealing with signals and systems, especially in electrical engineering and physics.

You might recall from our earlier discussions, or perhaps from your foundational math courses like calculus and linear algebra (thinking about your work with texts like Anton's "Calculus" or "Elementary Linear Algebra"), that linearity is a key concept. A function or an operator is linear if it "plays nicely" with addition and scalar multiplication. The Laplace transform is no different! Understanding this property will directly help us achieve **Course Outcome 3 (CO3)**: "Compute Laplace transform and apply it to solve ODEs arising in engineering." Why? Because many engineering problems involve sums of signals or signals scaled by constants, and this property lets us handle them efficiently.

### What Does Linearity Mean, Exactly?

In simple terms, the linearity property tells us that the Laplace transform of a *combination* of functions is the *same combination* of the Laplace transforms of those individual functions. This is true for both addition (or subtraction) of functions and multiplication of functions by constants.

Let's define the Laplace transform first, just to set the stage. If $f(t)$ is a function of time $t$, its Laplace transform, denoted by $F(s)$ or $\mathcal{L}\{f(t)\}$, is given by the integral:

$$
\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t) dt
$$

This integral transforms our function from the time domain ($t$) to the frequency or complex domain ($s$). Now, let's see how linearity works its magic.

### The Two Pillars of Linearity

The linearity property of the Laplace transform, $\mathcal{L}$, can be broken down into two key parts:

1.  **Additivity:** The Laplace transform of the sum of two functions is the sum of their individual Laplace transforms.
2.  **Homogeneity (or Scaling):** The Laplace transform of a function multiplied by a constant is that constant multiplied by the Laplace transform of the function.

We can combine these into a single, powerful statement. If $f_1(t)$ and $f_2(t)$ are functions, and $a$ and $b$ are constants, then:

$$
\mathcal{L}\{a f_1(t) + b f_2(t)\} = a \mathcal{L}\{f_1(t)\} + b \mathcal{L}\{f_2(t)\}
$$

Or, more simply stated:

$$
\mathcal{L}\{a f_1(t) + b f_2(t)\} = a F_1(s) + b F_2(s)
$$

where $F_1(s) = \mathcal{L}\{f_1(t)\}$ and $F_2(s) = \mathcal{L}\{f_2(t)\}$.

### Let's See How This Works with the Definition

To really understand *why* this is true, let's go back to the definition of the Laplace transform and apply it to a linear combination:

Consider the expression $a f_1(t) + b f_2(t)$. According to the definition, its Laplace transform is:

$$
\mathcal{L}\{a f_1(t) + b f_2(t)\} = \int_0^\infty e^{-st} (a f_1(t) + b f_2(t)) dt
$$

Now, we can use the properties of integrals that you've mastered from calculus (and are detailed in texts like Anton, Biven, Davis's "Calculus" or Weir, Hass, Heil, Bogacki's "Thomas' Calculus"). Specifically, the integral of a sum is the sum of the integrals, and constants can be pulled out of integrals.

$$
\mathcal{L}\{a f_1(t) + b f_2(t)\} = \int_0^\infty (a e^{-st} f_1(t) + b e^{-st} f_2(t)) dt
$$

Splitting the integral:

$$
\mathcal{L}\{a f_1(t) + b f_2(t)\} = \int_0^\infty a e^{-st} f_1(t) dt + \int_0^\infty b e^{-st} f_2(t) dt
$$

Pulling out the constants $a$ and $b$:

$$
\mathcal{L}\{a f_1(t) + b f_2(t)\} = a \int_0^\infty e^{-st} f_1(t) dt + b \int_0^\infty e^{-st} f_2(t) dt
$$

And we recognize the integrals on the right-hand side as the Laplace transforms of $f_1(t)$ and $f_2(t)$:

$$
\mathcal{L}\{a f_1(t) + b f_2(t)\} = a F_1(s) + b F_2(s)
$$

There you have it! The linearity property is a direct consequence of the linearity of the integral itself. Isn't that neat?

### Why is This So Important in Practice?

Imagine you're analyzing an electrical circuit with resistors, inductors, and capacitors. The voltage or current in such a circuit might behave like a combination of basic signals, such as a step function, an exponential decay, or a sinusoid. If we know the Laplace transforms of these basic building blocks, we can find the transform of the entire, more complex signal just by applying the linearity property.

Think about it like this: Suppose you're baking a cake and you need to adjust the recipe. If you want to double the recipe, you just double all the ingredients. You don't need a whole new set of instructions! Similarly, if you need to scale a signal (say, if the voltage source is 5V instead of 1V), you just scale its Laplace transform by 5. If you need to combine two different signals, say a constant voltage and a small AC ripple, you just add their individual Laplace transforms. This makes transforming and analyzing complex signals manageable.

This is crucial for solving differential equations, which are abundant in physics and engineering. Many physical systems are described by linear differential equations, and the Laplace transform is a powerful tool for solving them. The linearity property allows us to break down a complex differential equation into simpler terms, transform each term, solve the resulting algebraic equation in the $s$-domain, and then transform back to the time domain. This process aligns perfectly with **CO3**.

Let's consider a simple, relatable analogy from everyday life. Imagine you're calculating the total cost of a shopping trip. If you buy 3 apples and 2 oranges, and you know the price of one apple ($P_{apple}$) and one orange ($P_{orange}$), the total cost is $3 \times P_{apple} + 2 \times P_{orange}$. The "costing" operation is linear! You multiply each item's quantity by its price and then sum them up. The Laplace transform, in a way, is an operation on functions, and it follows the same kind of distributive property.

### Examples to Solidify Your Understanding

Let's work through a few examples to really cement this property.

**Example 1: A Simple Linear Combination**

Suppose we want to find the Laplace transform of $f(t) = 5e^{-2t} + 3\sin(4t)$.

We know (or can look up from tables provided in texts like Kreyszig or Bird's "Higher Engineering Mathematics") the following standard Laplace transforms:
*   $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$
*   $\mathcal{L}\{\sin(\omega t)\} = \frac{\omega}{s^2 + \omega^2}$

Using the linearity property:

$$
\mathcal{L}\{5e^{-2t} + 3\sin(4t)\} = \mathcal{L}\{5e^{-2t}\} + \mathcal{L}\{3\sin(4t)\}
$$

Now, apply the scaling part of linearity:

$$
\mathcal{L}\{5e^{-2t} + 3\sin(4t)\} = 5 \mathcal{L}\{e^{-2t}\} + 3 \mathcal{L}\{\sin(4t)\}
$$

Substitute the known transforms with $a=-2$ and $\omega=4$:

$$
\mathcal{L}\{5e^{-2t} + 3\sin(4t)\} = 5 \left(\frac{1}{s - (-2)}\right) + 3 \left(\frac{4}{s^2 + 4^2}\right)
$$

$$
\mathcal{L}\{5e^{-2t} + 3\sin(4t)\} = \frac{5}{s+2} + \frac{12}{s^2 + 16}
$$

See how straightforward that was? We didn't have to derive the transforms of $5e^{-2t}$ and $3\sin(4t)$ from scratch using the integral definition. We just used the linearity property with the known transforms of $e^{-2t}$ and $\sin(4t)$. This is a huge time-saver.

**Exam Tip:** When you're asked to find the Laplace transform of a function that's a sum or difference of known functions multiplied by constants, always think of linearity first. It's usually the intended method.

**Example 2: Dealing with Subtraction**

Let's find the Laplace transform of $f(t) = 2\cos(t) - 4t^3$.

We need the Laplace transform of $\cos(\omega t)$ and $t^n$:
*   $\mathcal{L}\{\cos(\omega t)\} = \frac{s}{s^2 + \omega^2}$
*   $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$ for integer $n \ge 0$.

Applying linearity for $f(t) = 2\cos(t) - 4t^3$:

$$
\mathcal{L}\{2\cos(t) - 4t^3\} = \mathcal{L}\{2\cos(t)\} - \mathcal{L}\{4t^3\}
$$

$$
\mathcal{L}\{2\cos(t) - 4t^3\} = 2 \mathcal{L}\{\cos(t)\} - 4 \mathcal{L}\{t^3\}
$$

With $\omega=1$ for the cosine term and $n=3$ for the power term:

$$
\mathcal{L}\{2\cos(t) - 4t^3\} = 2 \left(\frac{s}{s^2 + 1^2}\right) - 4 \left(\frac{3!}{s^{3+1}}\right)
$$

$$
\mathcal{L}\{2\cos(t) - 4t^3\} = \frac{2s}{s^2 + 1} - 4 \left(\frac{6}{s^4}\right)
$$

$$
\mathcal{L}\{2\cos(t) - 4t^3\} = \frac{2s}{s^2 + 1} - \frac{24}{s^4}
$$

Again, a straightforward application. The key is recognizing that subtraction is just adding a negative term, so it also falls under the umbrella of linearity.

**Example 3: Connection to Solving ODEs (CO3)**

Let's say we have a simple second-order linear differential equation:
$y''(t) + 4y(t) = e^{-t}$, with initial conditions $y(0)=1$ and $y'(0)=0$.

To solve this using Laplace transforms, we take the transform of both sides:
$\mathcal{L}\{y''(t) + 4y(t)\} = \mathcal{L}\{e^{-t}\}$

Here's where linearity shines. The left side is a sum, so we can transform each term separately:
$\mathcal{L}\{y''(t)\} + \mathcal{L}\{4y(t)\} = \mathcal{L}\{e^{-t}\}$

Using linearity for the second term:
$\mathcal{L}\{y''(t)\} + 4\mathcal{L}\{y(t)\} = \mathcal{L}\{e^{-t}\}$

We also need the properties for derivatives, which we'll cover more in the next topic, but they also rely on linearity. For now, let $Y(s) = \mathcal{L}\{y(t)\}$. We know (or will learn) that:
$\mathcal{L}\{y'(t)\} = sY(s) - y(0)$
$\mathcal{L}\{y''(t)\} = s^2Y(s) - sy(0) - y'(0)$

And $\mathcal{L}\{e^{-t}\} = \frac{1}{s+1}$.

Substituting the initial conditions $y(0)=1$ and $y'(0)=0$:
$\mathcal{L}\{y''(t)\} = s^2Y(s) - s(1) - 0 = s^2Y(s) - s$
$\mathcal{L}\{y'(t)\} = sY(s) - 1$

So, the transformed equation becomes:
$(s^2Y(s) - s) + 4Y(s) = \frac{1}{s+1}$

Now, we rearrange to solve for $Y(s)$:
$Y(s)(s^2 + 4) - s = \frac{1}{s+1}$
$Y(s)(s^2 + 4) = s + \frac{1}{s+1}$
$Y(s) = \frac{s}{s^2 + 4} + \frac{1}{(s+1)(s^2 + 4)}$

To find $y(t)$, we would then take the inverse Laplace transform of $Y(s)$. Notice how linearity allowed us to transform the entire differential equation into an algebraic equation in $s$. The ability to break down $\mathcal{L}\{y''(t) + 4y(t)\}$ into $\mathcal{L}\{y''(t)\} + 4\mathcal{L}\{y(t)\}$ is a direct manifestation of the linearity property. This skill is essential for fulfilling **CO3**.

### Common Pitfalls and Things to Remember

*   **Don't confuse linearity with other properties:** Linearity is *only* about scaling and adding/subtracting functions. Properties like time shifting, frequency shifting, differentiation, and integration have their own specific rules.
*   **Ensure you know the basic transforms:** The power of linearity comes from applying it to known functions. Make sure you have a good grasp of the Laplace transforms of common functions like constants, $t^n$, $e^{at}$, $\sin(\omega t)$, $\cos(\omega t)$, etc. Refer to tables in Kreyszig, Bird, or Ramana for these.
*   **Check for implicit linearity:** Sometimes a problem might not explicitly state a sum of functions, but you might be able to decompose it. For instance, $\mathcal{L}\{\sin(2t)\cos(t)\}$ can be simplified using trigonometric identities first, like $\sin A \cos B = \frac{1}{2}[\sin(A+B) + \sin(A-B)]$, before applying linearity. So, $\mathcal{L}\{\sin(2t)\cos(t)\} = \mathcal{L}\{\frac{1}{2}[\sin(3t) + \sin(t)]\} = \frac{1}{2}\mathcal{L}\{\sin(3t)\} + \frac{1}{2}\mathcal{L}\{\sin(t)\}$. This is where your calculus and trigonometry skills come into play.

### Summary of the Linearity Property

The Laplace transform operator $\mathcal{L}$ is linear. This means that for any constants $a$ and $b$, and any functions $f_1(t)$ and $f_2(t)$ for which the Laplace transforms exist, we have:

$$
\mathcal{L}\{a f_1(t) + b f_2(t)\} = a \mathcal{L}\{f_1(t)\} + b \mathcal{L}\{f_2(t)\}
$$

This property is fundamental because it allows us to:
1.  Find Laplace transforms of complex signals by combining the transforms of simpler signals.
2.  Simplify the process of solving linear differential equations by transforming them into algebraic equations.

Remember this property; it's one of your most powerful tools when working with Laplace transforms in any application. It directly supports our ability to achieve **CO3**.

### Sample Questions and Answers

**Conceptual Question 1:**
Explain why the linearity property of the Laplace transform is so crucial for solving linear differential equations in engineering.

**Answer:**
The linearity property of the Laplace transform is crucial for solving linear differential equations because these equations, by their very nature, involve linear combinations of the unknown function and its derivatives. When we apply the Laplace transform to a linear differential equation, the linearity property allows us to transform the sum of terms into the sum of their transforms and to pull constant coefficients out. This breaks down the differential equation in the time domain into an algebraic equation in the frequency ($s$) domain. We can then solve this algebraic equation for the Laplace transform of the solution, $Y(s)$, and subsequently find the time-domain solution $y(t)$ by taking the inverse Laplace transform. Without linearity, this transformation from differential to algebraic form would not be possible, making the Laplace transform method significantly less effective for linear ODEs.

**Exam-Oriented Question 2:**
Find the Laplace transform of the function $f(t) = 7\cos(5t) - 2e^{3t} + 4t^2$.

**Answer:**
We need to find $\mathcal{L}\{7\cos(5t) - 2e^{3t} + 4t^2\}$.
Using the linearity property, $\mathcal{L}\{a f_1(t) + b f_2(t) + c f_3(t)\} = a \mathcal{L}\{f_1(t)\} + b \mathcal{L}\{f_2(t)\} + c \mathcal{L}\{f_3(t)\}$.

We know the standard Laplace transforms:
*   $\mathcal{L}\{\cos(\omega t)\} = \frac{s}{s^2 + \omega^2}$
*   $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$
*   $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$

Applying these with the linearity property:
$\mathcal{L}\{7\cos(5t)\} = 7 \mathcal{L}\{\cos(5t)\} = 7 \left(\frac{s}{s^2 + 5^2}\right) = \frac{7s}{s^2 + 25}$

$\mathcal{L}\{-2e^{3t}\} = -2 \mathcal{L}\{e^{3t}\} = -2 \left(\frac{1}{s-3}\right) = \frac{-2}{s-3}$

$\mathcal{L}\{4t^2\} = 4 \mathcal{L}\{t^2\} = 4 \left(\frac{2!}{s^{2+1}}\right) = 4 \left(\frac{2}{s^3}\right) = \frac{8}{s^3}$

Combining these results:
$\mathcal{L}\{7\cos(5t) - 2e^{3t} + 4t^2\} = \frac{7s}{s^2 + 25} + \frac{-2}{s-3} + \frac{8}{s^3}$

Therefore, the Laplace transform is $\frac{7s}{s^2 + 25} - \frac{2}{s-3} + \frac{8}{s^3}$.

**Conceptual Question 3:**
What are the two fundamental components of the Laplace transform's linearity property, and how would you use them to find the Laplace transform of $3f(t) - 5g(t)$, given that $\mathcal{L}\{f(t)\} = F(s)$ and $\mathcal{L}\{g(t)\} = G(s)$?

**Answer:**
The two fundamental components of the Laplace transform's linearity property are **additivity** (or superposition for addition) and **homogeneity** (or scalar multiplication).

*   **Additivity:** $\mathcal{L}\{f_1(t) + f_2(t)\} = \mathcal{L}\{f_1(t)\} + \mathcal{L}\{f_2(t)\}$. This means the transform of a sum is the sum of the transforms.
*   **Homogeneity:** $\mathcal{L}\{c f(t)\} = c \mathcal{L}\{f(t)\}$, where $c$ is a constant. This means the transform of a scaled function is the scaled transform of the function.

To find the Laplace transform of $3f(t) - 5g(t)$, we use both components:
First, using additivity (recognizing subtraction as adding a negative):
$\mathcal{L}\{3f(t) - 5g(t)\} = \mathcal{L}\{3f(t) + (-5)g(t)\}$
$\mathcal{L}\{3f(t) - 5g(t)\} = \mathcal{L}\{3f(t)\} + \mathcal{L}\{(-5)g(t)\}$

Next, using homogeneity for each term:
$\mathcal{L}\{3f(t)\} = 3\mathcal{L}\{f(t)\} = 3F(s)$
$\mathcal{L}\{(-5)g(t)\} = -5\mathcal{L}\{g(t)\} = -5G(s)$

Combining these, we get:
$\mathcal{L}\{3f(t) - 5g(t)\} = 3F(s) - 5G(s)$.
