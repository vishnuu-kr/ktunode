---
title: "Functions"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 3: Relations, Functions and Algebraic Structures: Sets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b600a"
status: "completed"
scrapedAt: "2026-05-20T16:32:25.715Z"
---
Welcome, everyone! Today, we're diving into a cornerstone of discrete mathematics: **Functions**. In Module 3, we've already touched upon sets and relations, and functions are, in essence, a very special kind of relation. Think of them as the "rules" or "machines" that connect elements from one set to another in a precise and organized way. Understanding functions is absolutely crucial, not just for this course, but for so many areas in computer science and mathematics, from algorithm design to data structures. So, let's get started!

***

## Module 3: Relations, Functions and Algebraic Structures: Sets

### Topic: Functions

Functions are a fundamental concept we encounter everywhere, even if we don't always call them by that name. When you think about inputs and outputs, like typing a query into a search engine and getting results, or pressing a button on a calculator and seeing a number, you're interacting with a function. In discrete mathematics, we give this intuitive idea a rigorous definition.

#### What Exactly is a Function?

Let's build upon what we learned about relations. A **relation** from a set $A$ to a set $B$ is simply a subset of the Cartesian product $A \times B$. This means it's a collection of ordered pairs $(a, b)$ where $a \in A$ and $b \in B$.

Now, a **function** from a set $A$ to a set $B$, denoted as $f: A \to B$, is a special type of relation where **every element in the set $A$ (the domain) is related to exactly one element in the set $B$ (the codomain)**.

Let's break that down:

*   **Domain ($A$)**: This is the set of all possible "inputs" to our function. Every single element in the domain must have an output.
*   **Codomain ($B$)**: This is the set of all possible "outputs." It's important to remember that not every element in the codomain might be an output of the function.
*   **"Exactly one element"**: This is the key condition that makes a relation a function. If an element in $A$ were related to two or more different elements in $B$, it wouldn't be a function; it would be ambiguous!

**Think of it this way:** Imagine a vending machine. The set of buttons you can press is your domain ($A$). The set of items the machine dispenses is your codomain ($B$). A function would be a vending machine where pressing any given button *always* results in exactly one specific item being dispensed. If pressing button 'C3' sometimes gave you chips and sometimes gave you a soda, that wouldn't be a function – it would be a faulty machine!

**Formally:** A function $f$ from $A$ to $B$ is a subset of $A \times B$ such that for every $a \in A$, there exists a unique $b \in B$ with $(a, b) \in f$. We write $f(a) = b$ to indicate that $b$ is the unique element in $B$ that $f$ assigns to $a$.

This formal definition helps us be precise. It's like saying, for every input $a$, there's precisely one output $f(a)$.

**Connection to Course Outcomes:**
*   This definition directly addresses **CO3** and **CO4**, as we are describing the concepts of sets (domain, codomain) and functions, and recognizing their structure. The "exactly one" rule is a key structural property.

#### Examples to Make it Clear

Let's look at some examples.

**Example 1: A Simple Function**
Let $A = \{1, 2, 3\}$ and $B = \{a, b, c, d\}$.
Consider the relation $R = \{(1, a), (2, c), (3, a)\}$.
Is $R$ a function from $A$ to $B$?
Yes!
*   Every element in $A$ (1, 2, and 3) appears exactly once as the first element of an ordered pair.
*   1 is mapped to 'a'.
*   2 is mapped to 'c'.
*   3 is mapped to 'a'.
So, we can write this function as $f(1)=a$, $f(2)=c$, and $f(3)=a$.

**Example 2: Not a Function**
Let $A = \{1, 2, 3\}$ and $B = \{a, b, c, d\}$.
Consider the relation $S = \{(1, a), (1, b), (2, c), (3, a)\}$.
Is $S$ a function from $A$ to $B$?
No! The element '1' in $A$ is related to *two* different elements in $B$ ('a' and 'b'). This violates the "exactly one" rule. If this were a function, what would $f(1)$ be? 'a' or 'b'? We can't have that ambiguity.

**Example 3: Not a Function (Missing Input)**
Let $A = \{1, 2, 3\}$ and $B = \{a, b, c, d\}$.
Consider the relation $T = \{(1, a), (2, c)\}$.
Is $T$ a function from $A$ to $B$?
No! The element '3' in $A$ has no corresponding element in $B$. Every element in the domain *must* be mapped to something.

**Example 4: Functions with Real-World Analogies**
*   **Student ID to Student Name:** Let $A$ be the set of all student IDs at your university, and $B$ be the set of all students. The function $f: A \to B$ assigns each student ID to the student who possesses it. Every ID uniquely identifies one student. (Grimaldi, 5th Ed., discusses this idea of a "well-defined" mapping).
*   **A Person's Birthdate:** Let $A$ be the set of people, and $B$ be the set of dates. The function $g: A \to B$ assigns each person to their birthdate. A person has only one birthdate.
*   **Website URL to Web Page Content:** Let $A$ be the set of valid URLs, and $B$ be the set of all possible web page contents. The function $h: A \to B$ maps a URL to the content of the page it points to. A URL leads to specific content.

**Understanding the "Range"**
While the codomain ($B$) is the set of *all possible* outputs, the **range** of a function $f$ is the set of *actual* outputs that the function produces. It's the subset of the codomain that is "hit" by the function.

For example, in Example 1 ($f = \{(1, a), (2, c), (3, a)\}$ from $A = \{1, 2, 3\}$ to $B = \{a, b, c, d\}$):
*   The domain is $A = \{1, 2, 3\}$.
*   The codomain is $B = \{a, b, c, d\}$.
*   The range of $f$ is $\{a, c\}$. Notice that 'b' and 'd' from the codomain are not used as outputs.

The range is a very important concept, and it helps us classify functions.

#### Types of Functions

Now, we classify functions based on how they map elements from the domain to the codomain. This is where we start seeing some more nuanced properties.

##### 1. Injective Functions (One-to-One Functions)

An injective function is one where **distinct elements in the domain are mapped to distinct elements in the codomain**. In simpler terms, no two different inputs produce the same output.

**Definition:** A function $f: A \to B$ is **injective** if for every $a_1, a_2 \in A$, whenever $f(a_1) = f(a_2)$, it must be that $a_1 = a_2$.
Alternatively, and perhaps more intuitively: if $a_1 \neq a_2$, then $f(a_1) \neq f(a_2)$.

**Analogy:** Think of assigning unique locker numbers to students. If each student gets a different locker number, that's an injective mapping. If two students are assigned the same locker, it's not injective.

**Example:**
Let $A = \{1, 2, 3\}$ and $B = \{a, b, c, d\}$.
The function $f = \{(1, a), (2, c), (3, b)\}$ is injective because $f(1) \neq f(2)$, $f(1) \neq f(3)$, and $f(2) \neq f(3)$. All inputs go to different outputs.

Consider $g = \{(1, a), (2, c), (3, a)\}$. This is *not* injective because $f(1) = f(3) = a$, but $1 \neq 3$.

**Real-world connection:** A student ID system is generally injective. Each student has a unique ID. If two students somehow ended up with the same ID, that system would have a problem (it wouldn't be injective).

**Connection to Course Outcomes:**
*   This directly relates to **CO3** and **CO4** by describing the properties of functions. Recognizing injectivity is a key step in understanding function structures.

##### 2. Surjective Functions (Onto Functions)

A surjective function is one where **every element in the codomain is an output for at least one element in the domain**. In other words, the range of the function is equal to its codomain.

**Definition:** A function $f: A \to B$ is **surjective** if for every $b \in B$, there exists at least one $a \in A$ such that $f(a) = b$.

**Analogy:** Imagine you have a set of tasks to assign to a group of people. If every person in the group ends up with at least one task, then the assignment is surjective onto the group of people.

**Example:**
Let $A = \{1, 2, 3, 4\}$ and $B = \{a, b, c\}$.
The function $f = \{(1, a), (2, b), (3, c), (4, a)\}$ is surjective onto $B$ because every element in $B$ ('a', 'b', 'c') is an output from the function.
*   'a' is the output for 1 and 4.
*   'b' is the output for 2.
*   'c' is the output for 3.

Consider $g = \{(1, a), (2, b), (3, c)\}$ from $A = \{1, 2, 3\}$ to $B = \{a, b, c, d\}$. This function is *not* surjective because the element 'd' in the codomain $B$ is not an output for any element in $A$. The range is $\{a, b, c\}$, which is not equal to the codomain $B$.

**Connection to Course Outcomes:**
*   Again, this falls under **CO3** and **CO4**, detailing more function properties.

##### 3. Bijective Functions (One-to-One Correspondence)

A function is **bijective** if it is **both injective and surjective**. This is a very powerful type of function, as it establishes a perfect pairing between the elements of the domain and the codomain.

**Definition:** A function $f: A \to B$ is **bijective** if it is injective and surjective.

**What does this mean?**
*   Every element in $A$ maps to a unique element in $B$ (injective).
*   Every element in $B$ is mapped to by exactly one element in $A$ (surjective, combined with injective ensures uniqueness).

**Analogy:** Think about pairing dancers for a dance. If every dancer is paired with exactly one other dancer, and every dancer is paired up, that's a bijective mapping. No one is left out, and no one is dancing with multiple partners.

**Example:**
Let $A = \{1, 2, 3\}$ and $B = \{a, b, c\}$.
The function $f = \{(1, a), (2, b), (3, c)\}$ is bijective.
*   It's injective: $f(1), f(2), f(3)$ are all distinct.
*   It's surjective: The range $\{a, b, c\}$ is equal to the codomain $B$.

If the domain and codomain are finite sets, a bijection can only exist if the sets have the same number of elements. This is a crucial observation!

**Connection to Course Outcomes:**
*   Bijective functions are key in understanding **CO3** and **CO4**, especially when discussing structures and mappings. They are fundamental to concepts like isomorphism in algebraic structures.

##### 4. Other Important Function Types

*   **Identity Function:** For any set $A$, the identity function $id_A: A \to A$ is defined by $id_A(a) = a$ for all $a \in A$. It maps every element to itself. It's always injective, surjective, and thus bijective. Simple, but important!
*   **Constant Function:** A function $f: A \to B$ is constant if there exists a single element $b_0 \in B$ such that $f(a) = b_0$ for all $a \in A$. This function maps every element of $A$ to the same element in $B$. It's generally not injective (unless $A$ has only one element) and only surjective if the codomain $B$ has just one element.

#### Function Composition: Building More Complex Functions

Just as we can combine operations, we can combine functions. **Function composition** allows us to create new functions from existing ones.

**Definition:** If $f: A \to B$ and $g: B \to C$ are functions, then the composite function $g \circ f: A \to C$ is defined by $(g \circ f)(a) = g(f(a))$ for all $a \in A$.

**Think of it as a pipeline:** First, $a$ goes into function $f$, producing $f(a)$. Then, $f(a)$ goes into function $g$, producing $g(f(a))$.

**Crucial Point:** The codomain of the first function ($f$) must match the domain of the second function ($g$) for the composition $g \circ f$ to be defined.

**Example:**
Let $A = \{1, 2, 3\}$, $B = \{a, b\}$, $C = \{x, y\}$.
Let $f: A \to B$ be $f = \{(1, a), (2, b), (3, a)\}$.
Let $g: B \to C$ be $g = \{(a, x), (b, y)\}$.

What is $(g \circ f)(a)$?
First, find $f(1) = a$.
Then, find $g(f(1)) = g(a) = x$.
So, $(g \circ f)(1) = x$.

Let's compute for all elements in $A$:
*   $(g \circ f)(1) = g(f(1)) = g(a) = x$.
*   $(g \circ f)(2) = g(f(2)) = g(b) = y$.
*   $(g \circ f)(3) = g(f(3)) = g(a) = x$.

So, the composite function $g \circ f: A \to C$ is $\{(1, x), (2, y), (3, x)\}$.

**Important Note:** Function composition is **not generally commutative**. That is, $g \circ f$ is usually not the same as $f \circ g$. For $f \circ g$ to even be defined, the codomain of $g$ must be a subset of the domain of $f$. In our example above, $f \circ g$ is not defined because the codomain of $g$ is $C$, and the domain of $f$ is $A$, and $C$ is not a subset of $A$.

**Connection to Course Outcomes:**
*   Function composition is a key technique that can be used in applying logical reasoning and constructing proofs involving functions (**CO1**). It's also fundamental to understanding algebraic structures where operations are defined, linking to **CO3** and **CO4**.

#### Inverse Functions

If a function is bijective, it has a special property: it can be "undone." This is where inverse functions come in.

**Definition:** If $f: A \to B$ is a bijective function, then its **inverse function**, denoted by $f^{-1}: B \to A$, is defined by $f^{-1}(b) = a$ if and only if $f(a) = b$.

**Key Idea:** The inverse function simply reverses the mapping of the original function.

**Example:**
Using our bijective function from earlier:
$f = \{(1, a), (2, b), (3, c)\}$ where $f: \{1, 2, 3\} \to \{a, b, c\}$.
The inverse function $f^{-1}: \{a, b, c\} \to \{1, 2, 3\}$ is:
$f^{-1} = \{(a, 1), (b, 2), (c, 3)\}$.

Notice how the pairs are flipped.

**Conditions for Inverse:**
*   A function *must* be **bijective** to have an inverse function. If it's not injective, there would be multiple elements in $B$ mapping back to the same element in $A$, which is not allowed for a function. If it's not surjective, there would be elements in $B$ that have no corresponding element in $A$ to map back to.

**Properties of Inverse Functions:**
For a bijective function $f: A \to B$ with inverse $f^{-1}: B \to A$:
*   $f^{-1} \circ f = id_A$ (Composing $f^{-1}$ with $f$ gives the identity function on $A$)
*   $f \circ f^{-1} = id_B$ (Composing $f$ with $f^{-1}$ gives the identity function on $B$)

This means that applying a function and then its inverse (or vice-versa) brings you back to where you started.

**Connection to Course Outcomes:**
*   The concept of inverse functions is crucial for **CO3** and **CO4**, as it defines an operation that can "undo" the function, a property vital in algebraic systems.

#### Functions on Specific Sets

We often deal with functions where the domain and codomain are specific types of sets, like integers or subsets of integers.

*   **Functions from $\mathbb{Z}$ to $\mathbb{Z}$**: For example, $f(x) = 2x + 1$ is a function from the set of integers ($\mathbb{Z}$) to itself. Is it injective? Yes, if $2x_1 + 1 = 2x_2 + 1$, then $2x_1 = 2x_2$, so $x_1 = x_2$. Is it surjective? No, because an odd number like 3 can be represented as $2x+1$ (with $x=1$), but an even number like 2 cannot. So, this function is injective but not surjective from $\mathbb{Z}$ to $\mathbb{Z}$. If we changed the codomain to the set of odd integers, then it would be surjective.

*   **Functions on Subsets:** Let $A$ be a set. We can define functions on the power set of $A$, $\mathcal{P}(A)$. For example, a function that maps a subset to its complement, or a function that maps a subset to its cardinality.

#### Properties of Functions that are Exam-Oriented

When you're studying for exams, pay close attention to these aspects:

*   **Identifying if a given relation is a function:** Check the "exactly one" rule for every element in the domain.
*   **Determining if a function is injective, surjective, or bijective:** This requires careful proof or counterexample.
    *   For injectivity: Assume $f(a_1) = f(a_2)$ and show $a_1 = a_2$. Or, find $a_1 \neq a_2$ such that $f(a_1) = f(a_2)$ for a counterexample.
    *   For surjectivity: Pick an arbitrary element $b$ in the codomain and try to find an $a$ in the domain such that $f(a) = b$. If you can always do this, it's surjective. If you find a $b$ that cannot be "hit," it's not surjective.
*   **Calculating function compositions:** Be careful with the order of operations and ensure the domains/codomains match.
*   **Finding inverse functions:** Remember the bijection requirement and how to reverse the pairs.
*   **Understanding the difference between codomain and range:** This is a common point of confusion. The codomain is given; the range is what's actually produced.

**Connecting to Course Outcomes:**
*   **CO1 (Logical Reasoning & Proofs):** Proving injectivity, surjectivity, and properties of composition/inverses requires formal logical reasoning. You'll use techniques like proof by contradiction or direct proof.
*   **CO2 (Counting Principles):** While not directly about counting elements, understanding the sizes of domains and codomains, and whether they are equal, is crucial for determining if a bijection can exist. For finite sets, if $|A| \neq |B|$, a bijection from $A$ to $B$ is impossible.
*   **CO3 & CO4 (Concepts of Sets, Relations, Functions, Algebraic Structures):** All the types of functions, composition, and inverses are core concepts that fall directly under these outcomes. They lay the groundwork for understanding algebraic structures later.

### Summary of Key Function Concepts

Let's recap the most important takeaways:

*   A **function** $f: A \to B$ is a relation where every element in the domain $A$ is mapped to **exactly one** element in the codomain $B$.
*   The **domain** is the set of all possible inputs.
*   The **codomain** is the set of all possible outputs.
*   The **range** is the set of actual outputs produced by the function.
*   **Injective (one-to-one):** Distinct inputs map to distinct outputs.
*   **Surjective (onto):** Every element in the codomain is an output.
*   **Bijective:** Both injective and surjective; a one-to-one correspondence.
*   **Composition $g \circ f$**: $(g \circ f)(a) = g(f(a))$. Codomain of $f$ must match domain of $g$.
*   **Inverse $f^{-1}$**: Only exists for bijective functions. Reverses the mapping. $f^{-1} \circ f = id_A$ and $f \circ f^{-1} = id_B$.

Remember these definitions and properties; they are the building blocks for much of what we'll do next!

***

## Sample Questions and Answers

Let's test your understanding with some practice questions.

**Question 1 (Conceptual - CO3/CO4):**
What is the defining characteristic that distinguishes a function from a general relation?

**Answer:**
The defining characteristic is that for every element in the domain, there must be *exactly one* corresponding element in the codomain. A relation can map an element from the domain to multiple elements in the codomain, or leave some domain elements unmapped, but a function cannot.

**Question 2 (Application - CO1/CO3):**
Let $A = \{1, 2, 3, 4\}$ and $B = \{a, b, c\}$. Consider the relation $R = \{(1, a), (2, b), (3, a), (4, c)\}$. Is $R$ a function from $A$ to $B$? If it is, is it injective, surjective, or bijective?

**Answer:**
1.  **Is it a function?**
    Yes, $R$ is a function from $A$ to $B$. Every element in $A$ (1, 2, 3, and 4) appears exactly once as the first element of an ordered pair.
    *   $f(1) = a$
    *   $f(2) = b$
    *   $f(3) = a$
    *   $f(4) = c$

2.  **Is it injective?**
    No. We have $f(1) = a$ and $f(3) = a$, but $1 \neq 3$. Since two different inputs map to the same output, it is not injective.

3.  **Is it surjective?**
    Yes. The codomain is $B = \{a, b, c\}$.
    *   'a' is an output ($f(1)$ and $f(3)$).
    *   'b' is an output ($f(2)$).
    *   'c' is an output ($f(4)$).
    Since every element in the codomain $B$ is an output for at least one element in the domain $A$, the function is surjective.

4.  **Is it bijective?**
    No. For a function to be bijective, it must be both injective and surjective. Since this function is not injective, it cannot be bijective.

**Question 3 (Application - CO1/CO4):**
Let $f: \mathbb{R} \to \mathbb{R}$ be defined by $f(x) = x^2$. Is this function injective, surjective, or bijective? Justify your answer.

**Answer:**
*   **Injective?** No. For example, $f(2) = 2^2 = 4$ and $f(-2) = (-2)^2 = 4$. We have $f(2) = f(-2)$ but $2 \neq -2$. Thus, it is not injective.
*   **Surjective?** No. The codomain is $\mathbb{R}$ (all real numbers). However, the function $f(x) = x^2$ only produces non-negative values. There is no real number $x$ such that $f(x) = -1$ (since $x^2$ can never be negative). Therefore, not every element in the codomain is an output, so it is not surjective.
*   **Bijective?** No, because it is neither injective nor surjective.

*Self-Correction/Pitfall to Watch For:* If the codomain was specified as $\{x \in \mathbb{R} \mid x \ge 0\}$, then $f(x) = x^2$ *would* be surjective. However, without that restriction, it's not.

**Question 4 (Application - CO1/CO4):**
Let $f: \{1, 2, 3\} \to \{a, b, c\}$ be defined by $f = \{(1, a), (2, b), (3, c)\}$ and $g: \{a, b, c\} \to \{x, y, z\}$ be defined by $g = \{(a, y), (b, y), (c, z)\}$.
Compute $(g \circ f)(x)$ and $(f \circ g)(x)$. Which composition is defined?

**Answer:**
*   **Compute $(g \circ f)(x)$:**
    The composition $(g \circ f)$ maps from the domain of $f$ to the codomain of $g$.
    *   $(g \circ f)(1) = g(f(1)) = g(a) = y$.
    *   $(g \circ f)(2) = g(f(2)) = g(b) = y$.
    *   $(g \circ f)(3) = g(f(3)) = g(c) = z$.
    So, $(g \circ f) = \{(1, y), (2, y), (3, z)\}$.

*   **Compute $(f \circ g)(x)$:**
    The composition $(f \circ g)$ maps from the domain of $g$ to the codomain of $f$.
    The domain of $g$ is $\{a, b, c\}$. The codomain of $f$ is $\{a, b, c\}$.
    The codomain of $g$ is $\{x, y, z\}$.
    For $f \circ g$ to be defined, the codomain of $g$ must be a subset of the domain of $f$.
    Codomain of $g$ is $\{x, y, z\}$.
    Domain of $f$ is $\{1, 2, 3\}$.
    Since $\{x, y, z\}$ is NOT a subset of $\{1, 2, 3\}$, the composition $f \circ g$ is **not defined**.

**Question 5 (Conceptual - CO1/CO3):**
If a function $f: A \to B$ has an inverse $f^{-1}$, what must be true about $f$?

**Answer:**
The function $f$ must be **bijective** (both injective and surjective). This is because the inverse function must map each element in $B$ to exactly one element in $A$. If $f$ were not injective, some elements in $B$ would be the image of multiple elements in $A$, leading to ambiguity for $f^{-1}$. If $f$ were not surjective, some elements in $B$ would have no pre-image in $A$, meaning $f^{-1}$ would be undefined for those elements.

***

That concludes our exploration of functions. Make sure to practice these concepts, as they are foundational for everything that follows in this course! Keep reviewing your definitions, work through problems, and don't hesitate to ask questions. Good luck with your studies!
