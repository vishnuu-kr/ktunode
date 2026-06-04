---
title: "Compositions of Functions"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f8a"
status: "completed"
scrapedAt: "2026-05-20T16:32:46.686Z"
---
Absolutely! Let's dive into the fascinating world of function compositions in Discrete Mathematics. As we move through Module 1, you'll see how this topic builds a strong foundation for understanding more complex concepts later in the course.

***

## Module 1: Sets and Subsets - Compositions of Functions

Welcome, everyone! Today, we're going to explore a fundamental operation on functions: **composition**. Think of this as chaining functions together, where the output of one function becomes the input for another. It's a powerful idea that has applications all across computer science, from how programs process data to how we model systems.

### What is a Function, Anyway? A Quick Refresher

Before we compose functions, let's make sure we're all on the same page about what a function is. In Discrete Mathematics, a function $f$ from a set $A$ to a set $B$, denoted as $f: A \to B$, is a rule that assigns to each element in $A$ exactly one element in $B$.

*   **Domain ($A$)**: The set of all possible inputs.
*   **Codomain ($B$)**: The set of all possible outputs.
*   **Range**: The subset of the codomain that actually contains the outputs of the function.

Think of it like a vending machine. The **domain** is all the buttons you can press (e.g., "A1," "B3"). The **codomain** is all the items the machine *could* potentially dispense (e.g., snacks, drinks). The **range** is the set of items that are actually *available* in the machine at any given moment. If a button is broken, it doesn't map to anything, and that violates the definition of a function.

*This is crucial for understanding composition.* For one function to feed into another, the *output* of the first must be a valid *input* for the second.

### Introducing Function Composition: The "Chaining" Effect

So, what happens when we want to apply one function, and then apply another function to that result? That's precisely what **function composition** allows us to do.

Imagine you have two functions:

1.  $f: A \to B$
2.  $g: B \to C$

Notice how the codomain of $f$ ($B$) is the same as the domain of $g$ ($B$). This is the *key condition* that makes composition possible. If the sets didn't "line up" like this, we wouldn't be able to chain them.

We can define a new function, called the **composite function** of $g$ and $f$, denoted as $g \circ f$. This new function takes an element from $A$ (the domain of $f$) and maps it to an element in $C$ (the codomain of $g$).

How does it work? For any element $x$ in set $A$:

1.  First, we apply $f$ to $x$, which gives us an element $f(x)$ in set $B$.
2.  Then, we take this result, $f(x)$, and apply $g$ to it, which gives us an element $g(f(x))$ in set $C$.

So, the composite function $g \circ f$ is defined as:
$(g \circ f)(x) = g(f(x))$

**Important Note:** The order matters! $g \circ f$ is **not** the same as $f \circ g$ unless $f$ and $g$ have specific properties. We'll touch on this later when we discuss properties of composition.

**Analogy Time:** Think about getting dressed in the morning.
*   Let function $f$ be "put on socks" (Domain: You, Codomain: You with socks on).
*   Let function $g$ be "put on shoes" (Domain: You with socks on, Codomain: You with shoes on).

To get dressed properly, you must first put on socks, then put on shoes. The composite function $g \circ f$ represents the entire process of getting dressed from bare feet to being ready to go. If you tried to do $f \circ g$ (put on shoes, then socks), it would be a bit messy and not very functional!

**Connecting to Course Outcomes:**
This concept of chaining operations is fundamental. While not directly an outcome of *this specific topic*, understanding function composition lays the groundwork for analyzing sequences of operations, which is vital for **CO1 (logic validity)** and **CO5 (recurrence relations)** where operations are applied repeatedly. It also helps in understanding how transformations work in **CO3 (relations)** and **CO4 (posets)**.

### Examples to Solidify Understanding

Let's look at some concrete examples.

**Example 1: Numerical Functions**

Suppose we have the following functions:
*   $f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = 2x + 1$
*   $g: \mathbb{R} \to \mathbb{R}$ defined by $g(x) = x^2$

Here, both functions map real numbers to real numbers, so composition is straightforward.

Let's find $(g \circ f)(x)$:
$(g \circ f)(x) = g(f(x))$
Substitute $f(x)$ into $g$:
$g(f(x)) = g(2x + 1)$
Now apply the rule for $g$ to $(2x + 1)$:
$g(2x + 1) = (2x + 1)^2$
So, $(g \circ f)(x) = (2x + 1)^2$.

Now, let's find $(f \circ g)(x)$:
$(f \circ g)(x) = f(g(x))$
Substitute $g(x)$ into $f$:
$f(g(x)) = f(x^2)$
Now apply the rule for $f$ to $x^2$:
$f(x^2) = 2(x^2) + 1$
So, $(f \circ g)(x) = 2x^2 + 1$.

Notice that $(g \circ f)(x) = (2x+1)^2 = 4x^2 + 4x + 1$, which is clearly **not** equal to $(f \circ g)(x) = 2x^2 + 1$. This confirms that the order of composition matters!

**Example 2: Functions on Sets of Objects**

Let's use a more relatable scenario.

Suppose we have a system that processes customer orders.

*   Let Set $A$ be the set of raw order details (customer ID, items ordered, quantity).
*   Let Set $B$ be the set of processed order data (customer ID, total cost, shipping address).
*   Let Set $C$ be the set of shipping labels (recipient name, address, tracking number).

Now, let's define our functions:

*   $f: A \to B$ is a function that takes raw order details and calculates the total cost, retrieves the shipping address, and packages this into processed order data.
    *   Example: $f(\text{Order}[ID=123, Items=\{A, B\}, Qty=\{2,1\}]) = \text{ProcessedOrder}[ID=123, Cost=50.00, Address="123 Main St"]$
*   $g: B \to C$ is a function that takes processed order data and generates a shipping label.
    *   Example: $g(\text{ProcessedOrder}[ID=123, Cost=50.00, Address="123 Main St"]) = \text{ShippingLabel}[Name="John Doe", Address="123 Main St", Tracking="TRK123456789"]$

What is $(g \circ f)$? This composite function takes raw order details and directly produces a shipping label.

$(g \circ f) (\text{Order}[ID=123, Items=\{A, B\}, Qty=\{2,1\}])$
$= g(f(\text{Order}[ID=123, Items=\{A, B\}, Qty=\{2,1\}]))$
$= g(\text{ProcessedOrder}[ID=123, Cost=50.00, Address="123 Main St"])$
$= \text{ShippingLabel}[Name="John Doe", Address="123 Main St", Tracking="TRK123456789"]$

See how we seamlessly went from raw order details to a shipping label? That's the power of composition.

**What about $(f \circ g)$?** For this to be defined, the codomain of $g$ (Set $C$, shipping labels) would need to be the domain of $f$ (Set $A$, raw order details). This doesn't make practical sense in our example. You can't usually take a shipping label and figure out the original item quantities and costs. So, while mathematically we could try to define it if the sets were compatible, in many real-world scenarios, only one direction of composition makes sense.

**Connecting to Course Outcomes:** This example directly relates to **CO3 (relations)** and **CO4 (posets)** by showing how functions can model data transformations and dependencies in computer science. Understanding the flow of data through a system is key.

### Properties of Function Composition

Just like with arithmetic operations, function composition has some interesting properties.

**1. Associativity**

If we have three functions:
*   $f: A \to B$
*   $g: B \to C$
*   $h: C \to D$

Then the composition is associative. This means that when we compose three or more functions, the way we group them doesn't change the final result.

$h \circ (g \circ f) = (h \circ g) \circ f$

Let's see why this is true. For any $x \in A$:

*   Left side: $(h \circ (g \circ f))(x) = h((g \circ f)(x)) = h(g(f(x)))$
*   Right side: $((h \circ g) \circ f)(x) = (h \circ g)(f(x)) = h(g(f(x)))$

They are indeed the same! This is like saying $2 \times (3 \times 4) = (2 \times 3) \times 4$. It's a very important property when dealing with sequences of operations.

**Why is this important?** In programming, if you have a pipeline of functions, this property means you can optimize by composing parts of the pipeline first, without worrying about breaking the overall logic.

**2. Identity Function**

The **identity function** on a set $S$, denoted as $id_S$ or sometimes just $id$, is a function $id_S: S \to S$ defined by $id_S(x) = x$ for all $x \in S$. It's like multiplying by 1 or adding 0 – it doesn't change the value.

If we have a function $f: A \to B$, then composing $f$ with the identity function on its domain or codomain has a special effect:

*   $f \circ id_A = f$
    *   For any $x \in A$, $(f \circ id_A)(x) = f(id_A(x)) = f(x)$.
*   $id_B \circ f = f$
    *   For any $x \in A$, $(id_B \circ f)(x) = id_B(f(x)) = f(x)$.

This is like saying $f \times 1 = f$ or $1 \times f = f$. The identity function acts as an identity element for function composition.

**3. Non-Commutativity (as we've seen!)**

As Example 1 demonstrated, $g \circ f$ is generally **not** equal to $f \circ g$. This is a crucial difference from arithmetic addition and multiplication of numbers.

*   **Commutative Operations:** Addition ($a+b = b+a$), Multiplication ($a \times b = b \times a$).
*   **Non-Commutative Operations:** Subtraction ($a-b \neq b-a$), Division ($a/b \neq b/a$), and **Function Composition** ($g \circ f \neq f \circ g$ in general).

In computer science, non-commutativity is very common and important to be aware of. Think about modifying a document: changing font size then changing color is different from changing color then changing font size.

**Connecting to Course Outcomes:** Associativity is a structural property, similar to how we analyze the structure of relations in **CO3** or the ordering in **CO4**. The non-commutative nature is a key characteristic that distinguishes functions as operations, relevant to understanding algebraic structures later in **C06**.

### When Does Composition Simplify? Special Cases

Sometimes, the composition of functions can lead to simpler or more interesting results, especially when dealing with specific types of functions like bijections.

*   **Identity Function as a Result:** If $f: A \to B$ and $g: B \to A$, and it happens that $g \circ f = id_A$ and $f \circ g = id_B$, then $f$ and $g$ are called **inverses** of each other. This is a very important concept in many areas of math and computer science, particularly in cryptography and solving equations.

    *   **Example:**
        *   $f(x) = x + 5$ (domain and codomain $\mathbb{R}$)
        *   $g(x) = x - 5$ (domain and codomain $\mathbb{R}$)

        Let's check $g \circ f$:
        $(g \circ f)(x) = g(f(x)) = g(x+5) = (x+5) - 5 = x$.
        So, $(g \circ f)(x) = id_{\mathbb{R}}(x)$.

        Let's check $f \circ g$:
        $(f \circ g)(x) = f(g(x)) = f(x-5) = (x-5) + 5 = x$.
        So, $(f \circ g)(x) = id_{\mathbb{R}}(x)$.

        Here, $f$ and $g$ are inverses. This concept is heavily used when we need to "undo" an operation, a core idea in algorithms and data manipulation.

*   **Composition of Injective/Surjective Functions:**
    *   If $f$ and $g$ are both **injective** (one-to-one), then $g \circ f$ is also injective.
    *   If $f$ and $g$ are both **surjective** (onto), then $g \circ f$ is also surjective.
    *   Therefore, if $f$ and $g$ are **bijective** (both injective and surjective), then $g \circ f$ is also bijective. This is extremely useful when defining inverses, as inverses only exist for bijective functions.

**Connecting to Course Outcomes:** The idea of inverse functions and the properties of injective/surjective functions are deeply tied to the nature of relations studied in **CO3**. If a relation is a function and its inverse is also a function, that's a special case of relation composition. Understanding these properties helps in analyzing the structure and mappings of data.

### Why is this Topic Important for You? (Exam Focus & Applications)

Function composition is a building block. You'll see it applied in:

*   **Algorithm Design:** Many algorithms are sequences of transformations. Understanding composition helps analyze their overall effect and efficiency.
*   **Data Structures:** How data is processed and transformed within data structures often involves function composition.
*   **Logic and Proofs (CO1):** While not directly about propositional logic, the idea of a sequence of operations and how to evaluate them is mirrored in logical deduction. If statement A implies B, and B implies C, then A implies C – that's a form of composition.
*   **Counting (CO2):** When you use the Rule of Product, you're essentially composing independent choices. If there are $m$ ways to do step 1 and $n$ ways to do step 2, there are $m \times n$ ways to do both. This is like composing two events.
*   **Relations and Functions (CO3, CO4):** Understanding how functions map elements is a specialized case of understanding relations. Composition allows us to combine relation mappings.
*   **Recurrence Relations (CO5):** Solving recurrence relations often involves building up solutions from smaller cases, which can be thought of as a form of function composition applied iteratively.

**Common Pitfall:** Mixing up the order of composition ($g \circ f$ vs. $f \circ g$) or assuming it's commutative. Always write out the definitions $g(f(x))$ and $f(g(x))$ to check.

**Quick Recall Tip:** Remember $g \circ f$ means "first $f$, then $g$". The function on the *left* is applied *second*.

### Summary of Key Takeaways

*   **Composition Defined:** For $f: A \to B$ and $g: B \to C$, the composite function $(g \circ f): A \to C$ is defined by $(g \circ f)(x) = g(f(x))$.
*   **Condition for Composition:** The codomain of the first function must match the domain of the second function.
*   **Order Matters:** $g \circ f$ is generally not equal to $f \circ g$.
*   **Associativity:** $h \circ (g \circ f) = (h \circ g) \circ f$.
*   **Identity:** $f \circ id_A = f$ and $id_B \circ f = f$.
*   **Applications:** Foundational for understanding data processing, algorithms, and abstract mathematical structures.

***

### Sample Questions and Answers

**Question 1 (Conceptual):**
Let $f: \{1, 2, 3\} \to \{a, b, c\}$ and $g: \{a, b, c\} \to \{X, Y, Z\}$ be functions defined as:
$f(1) = a$, $f(2) = b$, $f(3) = a$
$g(a) = X$, $g(b) = Y$, $g(c) = X$

Find the composite function $(g \circ f)$. What is its domain and codomain?

**Answer:**
The domain of $f$ is $\{1, 2, 3\}$ and its codomain is $\{a, b, c\}$.
The domain of $g$ is $\{a, b, c\}$ and its codomain is $\{X, Y, Z\}$.
Since the codomain of $f$ matches the domain of $g$, we can form the composite function $(g \circ f)$.
The domain of $(g \circ f)$ will be the domain of $f$, which is $\{1, 2, 3\}$.
The codomain of $(g \circ f)$ will be the codomain of $g$, which is $\{X, Y, Z\}$.

Now let's find the mappings:
*   For $x=1$: $(g \circ f)(1) = g(f(1)) = g(a) = X$
*   For $x=2$: $(g \circ f)(2) = g(f(2)) = g(b) = Y$
*   For $x=3$: $(g \circ f)(3) = g(f(3)) = g(a) = X$

So, the composite function $(g \circ f)$ is:
$(g \circ f)(1) = X$
$(g \circ f)(2) = Y$
$(g \circ f)(3) = X$

The domain is $\{1, 2, 3\}$ and the codomain is $\{X, Y, Z\}$.

**Question 2 (Application/Comparison):**
Let $f(x) = x-3$ and $g(x) = 2x+1$, where both functions map real numbers to real numbers.
Calculate $(g \circ f)(x)$ and $(f \circ g)(x)$. Are they equal? Explain why or why not, relating it to a general property of function composition.

**Answer:**
Let's calculate $(g \circ f)(x)$:
$(g \circ f)(x) = g(f(x)) = g(x-3) = 2(x-3) + 1 = 2x - 6 + 1 = 2x - 5$.

Now let's calculate $(f \circ g)(x)$:
$(f \circ g)(x) = f(g(x)) = f(2x+1) = (2x+1) - 3 = 2x - 2$.

Clearly, $(g \circ f)(x) = 2x - 5$ and $(f \circ g)(x) = 2x - 2$. They are **not equal**.

This demonstrates the **non-commutative property** of function composition. Unlike the addition or multiplication of numbers, the order in which functions are composed significantly affects the resulting function. This is a key characteristic to remember for many operations in mathematics and computer science.

**Question 3 (Properties):**
Given functions $f: A \to B$, $g: B \to C$, and $h: C \to D$, prove that $h \circ (g \circ f) = (h \circ g) \circ f$.

**Answer:**
To prove this, we need to show that for any element $x$ in the domain of the composite function (which is set $A$), the outputs of both sides are identical.

Let $x \in A$.

Consider the left side: $h \circ (g \circ f)$.
By the definition of function composition:
$(h \circ (g \circ f))(x) = h((g \circ f)(x))$

Now, apply the definition of $(g \circ f)$:
$h((g \circ f)(x)) = h(g(f(x)))$

Consider the right side: $(h \circ g) \circ f$.
By the definition of function composition:
$((h \circ g) \circ f)(x) = (h \circ g)(f(x))$

Now, apply the definition of $(h \circ g)$ to $f(x)$:
$(h \circ g)(f(x)) = h(g(f(x)))$

Comparing the results for the left and right sides:
Left side: $h(g(f(x)))$
Right side: $h(g(f(x)))$

Since $h(g(f(x))) = h(g(f(x)))$, we have shown that $h \circ (g \circ f) = (h \circ g) \circ f$. This confirms the **associative property** of function composition. This property is fundamental when dealing with pipelines or sequences of operations, as it guarantees that the grouping doesn't alter the final outcome.

***

I hope this detailed breakdown of function composition has been helpful! It's a core concept, and mastering it will make your journey through discrete mathematics much smoother. Keep practicing with different examples, and don't hesitate to ask questions!
