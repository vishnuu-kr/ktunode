---
title: "Inverse Functions"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f89"
status: "completed"
scrapedAt: "2026-05-20T16:32:45.969Z"
---
# Discrete Mathematics: Module 1 - Sets and Subsets

## Topic: Inverse Functions

Welcome everyone to our exploration of functions within discrete mathematics! Today, we're going to delve into a fascinating concept: **Inverse Functions**. Understanding inverse functions is crucial because it often allows us to "undo" what a function does, which has widespread applications, particularly in computer science. Think of it like having a lock and its corresponding key – the function is the lock, and the inverse function is the key that opens it!

This topic directly connects to several of our course outcomes. Primarily, it builds a strong foundation for understanding **relations** (CO3), as an inverse function is a specific type of relation. It also has implications for **counting techniques** (CO2) when we analyze the properties of functions, and it's a fundamental building block for more abstract algebraic structures we'll encounter later (CO6).

### What Exactly is a Function? A Quick Recap

Before we jump into inverses, let's quickly remind ourselves what a function is. In discrete mathematics, a function $f$ from a set $A$ to a set $B$, denoted as $f: A \to B$, is a rule that assigns to *each* element in $A$ exactly *one* element in $B$.

*   **Domain:** The set $A$ is the domain of the function.
*   **Codomain:** The set $B$ is the codomain of the function.
*   **Range:** The range of $f$ is the subset of $B$ consisting of all the values $f(a)$ for $a$ in $A$.

Think of a function like a vending machine. The domain is the set of buttons you can press (e.g., A1 for chips, B2 for soda). The codomain is the set of all possible items the machine can dispense. The range is the set of items that are *actually* stocked and dispensed.

### When Can We "Undo" a Function? Introducing Invertibility

Now, imagine you've used the vending machine, and it dispensed a soda. If you wanted to get your money back and magically have the soda disappear, that would be the "inverse" operation. But can we always do this? Not necessarily. What if multiple buttons dispense the *same* soda? If you press button C3 and get a cola, but button D4 also dispenses cola, how would the "undo" operation know whether to undo the C3 press or the D4 press?

This brings us to the concept of **invertibility**. A function $f: A \to B$ is **invertible** if there exists a function $g: B \to A$ such that:

1.  $g(f(a)) = a$ for all $a \in A$. (This is like saying: if you perform the function and then its inverse, you get back to your original input.)
2.  $f(g(b)) = b$ for all $b \in B$. (This is like saying: if you perform the inverse function and then the original function, you get back to your original output.)

If such a function $g$ exists, it's called the **inverse function** of $f$, and we denote it as $f^{-1}$.

So, for a function to have an inverse, we need to be able to uniquely "reverse" its action. This means that no two distinct elements in the domain map to the same element in the codomain.

### Key Properties for Invertibility: One-to-One and Onto

This "no two distinct elements map to the same element" idea sounds familiar, right? This is the definition of a **one-to-one** (or injective) function.

*   **One-to-One (Injective) Function:** A function $f: A \to B$ is one-to-one if for every $b \in B$, there is *at most one* $a \in A$ such that $f(a) = b$. In other words, if $f(a_1) = f(a_2)$, then $a_1 = a_2$.

Let's revisit our vending machine analogy. If each button dispenses a *unique* item (e.g., button A1 gives chips, B2 gives soda, C3 gives candy), then we can easily reverse the process. If you get a cola, you know you pressed a specific button for cola.

But wait, there's another important aspect. What if the vending machine has a button for every item you might want, and every item in the machine is assigned to a button? This relates to the concept of **onto** (or surjective) functions.

*   **Onto (Surjective) Function:** A function $f: A \to B$ is onto if for every $b \in B$, there is *at least one* $a \in A$ such that $f(a) = b$. In simpler terms, every element in the codomain is "hit" by the function.

Consider our vending machine again. If the codomain is the set of *all possible snacks*, but the machine only stocks *chips and soda*, then the function from button presses to snacks is *not* onto, because there's no button that dispenses, say, a "bag of pretzels" (even though pretzels might be in the theoretical codomain of "snacks").

### The Magic Combination: Bijective Functions

So, to have a unique "undo" button for every item, our vending machine needs to satisfy two conditions:

1.  Each button dispenses a unique item (one-to-one).
2.  Every item in the machine is dispensed by some button (onto).

When a function is both one-to-one and onto, we call it **bijective**.

**Theorem:** A function $f: A \to B$ is invertible if and only if it is **bijective**.

This is a fundamental theorem from our textbooks, like Rosen's "Discrete Mathematics and its Applications." It's absolutely crucial to remember this equivalence! If a function isn't bijective, it doesn't have an inverse function.

### Constructing the Inverse Function

If $f: A \to B$ is a bijective function, how do we actually *find* its inverse $f^{-1}: B \to A$?

The definition tells us everything we need: for any element $b$ in the codomain $B$, $f^{-1}(b)$ is the unique element $a$ in the domain $A$ such that $f(a) = b$.

Here’s a step-by-step approach, often useful for finding inverses:

1.  **Check for Bijectivity:** First, verify that the function $f: A \to B$ is indeed one-to-one and onto. If it fails either of these, there's no inverse function.
2.  **Set up the Inverse Relation:** Let $y = f(x)$. To find the inverse, we want to express $x$ in terms of $y$. So, we solve the equation $y = f(x)$ for $x$.
3.  **Define the Inverse Function:** Once you have $x$ expressed as a function of $y$ (i.e., $x = g(y)$), this function $g$ is your inverse function $f^{-1}$. So, we write $f^{-1}(y) = g(y)$.
4.  **Rename the Variable (Optional but Common):** It's conventional to use $x$ as the independent variable for functions. So, if we found $f^{-1}(y) = g(y)$, we often rewrite it as $f^{-1}(x) = g(x)$.

### Example: A Concrete Illustration

Let's put this into practice.

**Example 1:** Consider the function $f: \mathbb{Z} \to \mathbb{Z}$ defined by $f(x) = 2x + 1$.

*   **Domain:** $\mathbb{Z}$ (integers)
*   **Codomain:** $\mathbb{Z}$ (integers)

Is this function bijective?

*   **One-to-One?** Suppose $f(x_1) = f(x_2)$. Then $2x_1 + 1 = 2x_2 + 1$. Subtracting 1 from both sides gives $2x_1 = 2x_2$. Dividing by 2, we get $x_1 = x_2$. So, yes, $f$ is one-to-one.
*   **Onto?** For $f$ to be onto, every integer $y$ in the codomain $\mathbb{Z}$ must be representable as $2x + 1$ for some integer $x$. Let's pick an odd integer, say $y = 3$. We can find $x$ such that $3 = 2x + 1 \implies 2x = 2 \implies x = 1$. This works. What about an even integer, say $y = 4$? If $4 = 2x + 1$, then $2x = 3$, which means $x = 3/2$. But $3/2$ is not an integer! So, $f$ is *not* onto, because no integer input $x$ can produce an even integer output.

Since $f(x) = 2x + 1$ is not onto, it is **not invertible** as a function from $\mathbb{Z}$ to $\mathbb{Z}$.

**What if we change the codomain?**

Let's consider $f: \mathbb{Z} \to \{\text{odd integers}\}$ defined by $f(x) = 2x + 1$.
The set of odd integers is $\{ \dots, -3, -1, 1, 3, 5, \dots \}$.

*   **One-to-One?** Yes, we already proved this.
*   **Onto?** For any odd integer $y$, can we find an integer $x$ such that $2x + 1 = y$? Yes, $2x = y - 1$. Since $y$ is odd, $y-1$ is even. So, $x = (y-1)/2$ will always be an integer. For example, if $y=5$, $x=(5-1)/2=2$. $f(2) = 2(2)+1 = 5$. If $y=-3$, $x=(-3-1)/2=-2$. $f(-2) = 2(-2)+1 = -3$. So, yes, $f$ is onto this specific codomain.

Since $f$ is both one-to-one and onto, it is **bijective** and therefore **invertible**.

Let's find the inverse:
We have $y = 2x + 1$.
Solving for $x$:
$y - 1 = 2x$
$x = \frac{y - 1}{2}$

So, the inverse function is $f^{-1}(y) = \frac{y - 1}{2}$.
If we switch the variable to $x$, we write $f^{-1}(x) = \frac{x - 1}{2}$.
The domain of $f^{-1}$ is the codomain of $f$ (the odd integers), and the codomain of $f^{-1}$ is the domain of $f$ (the integers).

Let's check:
$f^{-1}(f(x)) = f^{-1}(2x+1) = \frac{(2x+1) - 1}{2} = \frac{2x}{2} = x$. (This works for all $x \in \mathbb{Z}$)
$f(f^{-1}(y)) = f(\frac{y-1}{2}) = 2(\frac{y-1}{2}) + 1 = (y-1) + 1 = y$. (This works for all odd integers $y$.)

This confirms our inverse is correct for the specified domain and codomain.

### Example 2: A Scenario with Sets

Let's consider a situation involving sets, which ties into CO3 (classifying relations) and our general understanding of sets.

Suppose we have two sets:
*   $A = \{ \text{Alice, Bob, Carol} \}$
*   $B = \{ \text{Red, Green, Blue} \}$

And a function $f: A \to B$ representing their favorite colors:
*   $f(\text{Alice}) = \text{Red}$
*   $f(\text{Bob}) = \text{Green}$
*   $f(\text{Carol}) = \text{Blue}$

Is this function $f$ bijective?

*   **One-to-One?** Yes, each person has a distinct favorite color. If $f(p_1) = f(p_2)$, then $p_1$ must equal $p_2$.
*   **Onto?** Yes, every color in set $B$ is a favorite of someone in set $A$.

Since $f$ is bijective, it has an inverse function, $f^{-1}: B \to A$. The inverse function maps each favorite color back to the person who likes it.

*   $f^{-1}(\text{Red}) = \text{Alice}$
*   $f^{-1}(\text{Green}) = \text{Bob}$
*   $f^{-1}(\text{Blue}) = \text{Carol}$

This is a very intuitive example. If you know someone's favorite color, you can identify the person. This is directly related to how we can represent relationships. The function $f$ defines a set of ordered pairs: $\{ (\text{Alice}, \text{Red}), (\text{Bob}, \text{Green}), (\text{Carol}, \text{Blue}) \}$. The inverse function $f^{-1}$ defines the relation with the order of elements in each pair reversed: $\{ (\text{Red}, \text{Alice}), (\text{Green}, \text{Bob}), (\text{Blue}, \text{Carol}) \}$. This reversal of ordered pairs is how we find the inverse of a relation in general, and for functions, this reversed relation must also be a function to be called an inverse *function*.

### Why is this Important? Applications and Connections to Course Outcomes

*   **CO3: Classifying Binary Relations:** An inverse function is a specific type of binary relation. If $f$ is a function represented by the set of pairs $\{(a, f(a)) \mid a \in A\}$, then its inverse relation is $\{(f(a), a) \mid a \in A\}$. For this inverse relation to be a function, each element in the domain of the inverse (which is the codomain of the original function) must map to exactly one element. This is precisely the condition of $f$ being one-to-one and onto. Understanding invertibility helps us classify relations – is a relation a function? Is its inverse relation also a function?

*   **CO2: Counting Problems:** When dealing with permutations and combinations, the number of ways to arrange or choose items often involves functions. If we're counting bijective mappings between sets, we're essentially counting permutations. Understanding that a function must be bijective to have an inverse is implicitly used when we analyze the properties of these arrangements.

*   **CO6: Abstract Algebraic Systems:** In groups and monoids, invertibility is a fundamental property. Every element in a group must have an inverse element. Functions themselves can form algebraic structures (like function composition), and the concept of an inverse function mirrors the concept of an inverse element in these algebraic systems. For example, if we consider the set of all bijective functions from a set to itself under the operation of function composition, this forms a group (the symmetric group).

*   **Computer Science Relevance:**
    *   **Cryptography:** Many encryption algorithms rely on the principle of having an inverse function. You encrypt a message using a function, and the recipient decrypts it using the inverse function. The security often lies in the difficulty of finding the inverse function without a "key."
    *   **Data Compression:** Sometimes, reversible transformations are used to compress data. The inverse transformation allows you to recover the original data.
    *   **Algorithm Design:** When designing algorithms that need to reverse a process, understanding inverse functions is critical. For example, in data structures, operations like insertion and deletion might have corresponding "undo" operations.

### Common Pitfalls and Exam Tips

*   **Confusing Inverse Function with Reciprocal:** Be very careful not to confuse $f^{-1}(x)$ with $\frac{1}{f(x)}$. They are entirely different! For example, if $f(x) = x+1$, then $f^{-1}(x) = x-1$, but $\frac{1}{f(x)} = \frac{1}{x+1}$.
*   **Ignoring Domain and Codomain:** As we saw in Example 1, whether a function is invertible often depends on its domain and codomain. Always check these carefully. A function might be invertible on one domain/codomain but not another.
*   **Assuming Invertibility:** Don't assume a function is invertible just because it looks "reversible." Always prove or disprove that it's one-to-one and onto.
*   **Checking Both Conditions:** Remember, for an inverse *function* to exist, the original function must be *bijective* (both one-to-one and onto). Failing either one means no inverse function.

### Summary of Key Takeaways

*   A function $f: A \to B$ has an inverse function $f^{-1}: B \to A$ if and only if $f$ is **bijective** (both one-to-one and onto).
*   **One-to-one** means each element in the codomain is mapped to by at most one element in the domain.
*   **Onto** means each element in the codomain is mapped to by at least one element in the domain.
*   To find the inverse, solve $y = f(x)$ for $x$.
*   The domain of $f^{-1}$ is the codomain of $f$, and the codomain of $f^{-1}$ is the domain of $f$.
*   Inverse functions are crucial in many areas of computer science, including cryptography and algorithm design.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
Can a function that is only one-to-one have an inverse function? Explain your reasoning.

**Answer:**
No, a function that is only one-to-one cannot necessarily have an inverse *function*. For an inverse to exist as a function, the original function must be **bijective**, meaning it must be both one-to-one and onto. If a function is one-to-one but not onto, its inverse relation would map some elements in the codomain of the original function to nothing, meaning the inverse relation wouldn't be defined for all elements in its intended domain, and thus would not be a function.

**Question 2 (Problem Solving):**
Let $f: \mathbb{R} \to \mathbb{R}$ be defined by $f(x) = x^3$. Does $f$ have an inverse function? If yes, find it.

**Answer:**
To determine if $f(x) = x^3$ has an inverse function on $\mathbb{R} \to \mathbb{R}$:

1.  **Check if $f$ is one-to-one:**
    Assume $f(x_1) = f(x_2)$. This means $x_1^3 = x_2^3$. Taking the cube root of both sides gives $x_1 = x_2$. So, $f$ is one-to-one.

2.  **Check if $f$ is onto:**
    For any real number $y$ in the codomain, can we find a real number $x$ in the domain such that $f(x) = y$? We need to solve $x^3 = y$ for $x$. The solution is $x = \sqrt[3]{y}$. Since the cube root of any real number is a real number, for every $y \in \mathbb{R}$, there exists an $x \in \mathbb{R}$ such that $f(x) = y$. So, $f$ is onto.

Since $f$ is both one-to-one and onto, it is bijective and therefore invertible.

3.  **Find the inverse function:**
    Let $y = f(x)$, so $y = x^3$.
    Solve for $x$: $x = \sqrt[3]{y}$.
    Thus, the inverse function is $f^{-1}(y) = \sqrt[3]{y}$.
    Renaming the variable, we get $f^{-1}(x) = \sqrt[3]{x}$.

**Question 3 (Application/Comparison):**
Consider two functions:
$g: \mathbb{Z} \to \mathbb{Z}$ defined by $g(x) = 2x$.
$h: \mathbb{Z} \to \mathbb{Z}$ defined by $h(x) = |x|$.

Which of these functions, if any, has an inverse function? Explain why.

**Answer:**
Let's analyze each function:

*   **Function $g(x) = 2x$ from $\mathbb{Z}$ to $\mathbb{Z}$:**
    *   **One-to-one?** If $g(x_1) = g(x_2)$, then $2x_1 = 2x_2$, which implies $x_1 = x_2$. So, $g$ is one-to-one.
    *   **Onto?** For $g$ to be onto, every integer $y$ in the codomain must be expressible as $2x$ for some integer $x$. However, consider $y=3$. There is no integer $x$ such that $2x = 3$, because $x=3/2$ is not an integer. Therefore, $g$ is **not onto**.
    *   **Conclusion for $g$:** Since $g$ is not onto, it is **not invertible** as a function from $\mathbb{Z}$ to $\mathbb{Z}$.

*   **Function $h(x) = |x|$ from $\mathbb{Z}$ to $\mathbb{Z}$:**
    *   **One-to-one?** Consider $h(2) = |2| = 2$ and $h(-2) = |-2| = 2$. Since $h(2) = h(-2)$ but $2 \neq -2$, the function $h$ is **not one-to-one**.
    *   **Onto?** The range of $|x|$ for $x \in \mathbb{Z}$ is the set of non-negative integers $\{0, 1, 2, 3, \dots\}$. The codomain is $\mathbb{Z}$ (all integers). Since there are negative integers in the codomain (e.g., -1, -2) that are not in the range of $h$, the function $h$ is **not onto**.
    *   **Conclusion for $h$:** Since $h$ is neither one-to-one nor onto, it is **not invertible**.

Therefore, neither $g$ nor $h$ has an inverse function when considered as functions from $\mathbb{Z}$ to $\mathbb{Z}$.
