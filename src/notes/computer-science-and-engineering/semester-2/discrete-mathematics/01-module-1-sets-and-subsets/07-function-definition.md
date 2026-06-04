---
title: "Function definition"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f86"
status: "completed"
scrapedAt: "2026-05-20T16:32:43.719Z"
---
## Discrete Mathematics: Module 1 - Sets and Subsets

### Topic: Function Definition

**(Professor's Note:** Welcome, everyone! Today, we're diving into a fundamental concept in mathematics that underpins so much of what we'll do in Discrete Mathematics: **Functions**. Think of functions as the engines that drive transformations between sets. We’ve already been working with sets, understanding what elements belong to them and how we can combine or relate them. Now, we’re going to introduce a very specific, very important way of relating elements from one set to another. This topic is absolutely crucial, not just for understanding later modules, but also for appreciating how mathematics is used to model real-world processes, especially in computer science. This will directly help us achieve **CO1**, as understanding how information is transformed is key to analyzing logical structures, and it lays the groundwork for many concepts related to **CO3** (relations) and even **CO5** (recurrence relations). Let's get started!)

---

### 1. What Exactly is a Function? Building from Sets

We've learned about sets, these collections of distinct objects. Now, imagine you have two sets, let's call them Set A and Set B. A function is essentially a rule that tells you, for *every single element* in Set A, exactly which element in Set B it corresponds to.

Let's try a relatable analogy. Think about a vending machine.

*   **Set A (The Input):** The buttons you press (e.g., B4 for a chocolate bar, C2 for a soda).
*   **Set B (The Output):** The items dispensed by the machine (e.g., chocolate bars, sodas, chips).

A function, in this case, is the vending machine's internal mechanism. For *each* button you press (each element in Set A), the machine *reliably* dispenses *one specific* item (one element in Set B). You don't press a button and get two different items, nor do you press a button and get nothing (well, ideally!). This "one specific item" part is key.

Formally, we define a function *f* from a set A to a set B, denoted as **$f: A \rightarrow B$**, as follows:

**Definition:** A function *f* from set A to set B is a **rule** that assigns to **each element** in A **exactly one element** in B.

*   **Set A** is called the **domain** of the function *f*. It's the set of all possible inputs.
*   **Set B** is called the **codomain** of the function *f*. It's the set where all the outputs live.
*   If *f* assigns element *a* in A to element *b* in B, we write **$f(a) = b$**. We say that *b* is the **image** of *a* under *f*, and *a* is a **pre-image** of *b*.
*   The set of all actual output values (images) is called the **range** of *f**. The range is always a subset of the codomain: **Range($f$) $\subseteq$ B**.

**(Professor's Note:** It's really important to grasp the "each element" and "exactly one element" parts. If a rule assigns *some* elements of A to *no* element of B, it's not a function. Similarly, if a rule assigns *one* element of A to *more than one* element of B, it's also not a function. Think back to the vending machine: if you press B4 and sometimes get a chocolate bar and sometimes nothing, or if you press B4 and get *both* a chocolate bar *and* a soda, it's broken, it's not a proper function!)

---

### 2. Representing Functions: More Than Just a Formula

How do we actually describe or represent these functions? There are several ways, and understanding them is vital.

#### a) Formulaic Representation

This is what most people first think of when they hear "function." It's a mathematical expression that directly computes the output from the input.

*   **Example:** Let A be the set of integers ($\mathbb{Z}$) and B be the set of integers ($\mathbb{Z}$). The rule $f(x) = x^2$ defines a function from A to B.
    *   Here, A = $\mathbb{Z}$, B = $\mathbb{Z}$.
    *   $f(3) = 3^2 = 9$. So, 9 is the image of 3.
    *   $f(-2) = (-2)^2 = 4$. So, 4 is the image of -2.
    *   The domain is all integers. The codomain is all integers.
    *   What's the range? The squares of integers are 0, 1, 4, 9, 16, ... So, the range is $\{0, 1, 4, 9, 16, \dots\}$. Notice that the range is a subset of the codomain; not all integers are squares.

**(Professor's Note:** This type of function is common in algebra and calculus. In Discrete Math, we often see functions that operate on more abstract domains or have different types of outputs. Rosen's textbook, for example, often uses functions like $f(n) = 2n + 1$ or $g(n) = n \pmod{3}$.)

#### b) Set of Ordered Pairs Representation

A function can also be precisely defined as a set of ordered pairs, where each pair $(a, b)$ means that the function maps element *a* to element *b*. This representation is very direct and is especially useful when dealing with finite sets.

*   **Conditions for a Set of Ordered Pairs to be a Function:** For a set of ordered pairs $F$ to represent a function from A to B, two conditions must be met:
    1.  **Domain Coverage:** For every element *a* in A, there must be exactly one ordered pair in $F$ that starts with *a*. (This ensures every element in the domain is mapped.)
    2.  **Uniqueness of Mapping:** If $(a, b_1)$ and $(a, b_2)$ are in $F$, then $b_1$ must equal $b_2$. (This ensures each element in the domain maps to exactly one element in the codomain.)

*   **Example:** Let A = {1, 2, 3} and B = {x, y, z}.
    Consider the set of ordered pairs $F = \{(1, y), (2, x), (3, y)\}$.
    *   Does every element of A appear as the first element of a pair? Yes: 1, 2, 3.
    *   Does any element of A appear as the first element in *more than one* pair? No.
    *   Therefore, $F$ defines a function from A to B. We can write this function as $f: A \rightarrow B$ where $f(1)=y$, $f(2)=x$, and $f(3)=y$.
    *   The domain is {1, 2, 3}. The codomain could be {x, y, z}. The range is {x, y}.

    Now, consider this set: $G = \{(1, y), (2, x)\}$.
    *   Does every element of A appear as the first element? No, 3 is missing. So, $G$ does *not* define a function from A to B.

    And this set: $H = \{(1, y), (1, z), (2, x), (3, y)\}$.
    *   Does every element of A appear as the first element? Yes: 1, 2, 3.
    *   Does any element of A appear as the first element in *more than one* pair? Yes, 1 appears in (1, y) and (1, z). Since y $\neq$ z, $H$ does *not* define a function from A to B.

**(Professor's Note:** This set-of-ordered-pairs definition is super important in formal computer science. When we talk about databases or mappings in algorithms, we're often dealing with this explicit, pair-wise definition. It's directly related to the concept of **relations** (CO3). In fact, a function is a special type of relation. Think about it: a relation is *any* subset of $A \times B$, where $A \times B$ is the Cartesian product. A function is a relation with these very specific domain coverage and uniqueness rules.)

#### c) Table Representation

For finite sets, a simple table can also represent a function.

*   **Example:** Using the sets A = {1, 2, 3} and B = {x, y, z} from before, the function $f$ with $F = \{(1, y), (2, x), (3, y)\}$ can be represented as:

    | Input (from A) | Output (from B) |
    | :------------- | :-------------- |
    | 1              | y               |
    | 2              | x               |
    | 3              | y               |

**(Professor's Note:** This is very intuitive, right? Again, the rules apply: each input must have exactly one output listed. This is a great way to visualize mappings for small, finite sets.)

#### d) Graphical Representation (for numerical functions)

When the domain and codomain are sets of numbers (like real numbers or integers), we often use graphs.

*   **Example:** The function $f(x) = x^2$ where $f: \mathbb{R} \rightarrow \mathbb{R}$ can be graphed. The graph consists of all points $(x, f(x))$. The "Vertical Line Test" is a visual way to check if a graph represents a function: if any vertical line intersects the graph at more than one point, it's not a function.

**(Professor's Note:** This is familiar from school math. The vertical line test directly checks the "exactly one element in B" rule. If a vertical line hits at two y-values for a single x-value, that x-value is mapped to more than one y-value, violating the function definition.)

---

### 3. Types of Functions: More Nuance to the Mapping

Not all functions are created equal. Understanding different types of functions helps us analyze their properties and applications, which is vital for **CO3** and understanding how data is transformed in computer science.

#### a) Injective Functions (One-to-One Functions)

An **injective function** (or one-to-one function) is a function where distinct elements in the domain are mapped to distinct elements in the codomain. In other words, if $a_1 \neq a_2$, then $f(a_1) \neq f(a_2)$. Equivalently, if $f(a_1) = f(a_2)$, then $a_1 = a_2$.

*   **Analogy:** Imagine assigning student IDs. If each student gets a unique ID, that's an injective function. If two students accidentally get the same ID, it's not injective.
*   **Formal Condition:** For all $a_1, a_2 \in A$, if $f(a_1) = f(a_2)$, then $a_1 = a_2$.
*   **Example:** Let A = {1, 2, 3} and B = {x, y, z}. The function $f = \{(1, x), (2, y), (3, z)\}$ is injective because each input maps to a unique output. The function $g = \{(1, y), (2, x), (3, y)\}$ is **not** injective because both 1 and 3 map to *y*.

**(Professor's Note:** Why is this important? In cryptography or unique identification systems, you want your inputs to map to unique outputs. If an injection fails, you can't uniquely identify the original input from the output, which can be a security risk or lead to errors.)

#### b) Surjective Functions (Onto Functions)

A **surjective function** (or onto function) is a function where every element in the codomain is the image of *at least one* element in the domain. This means the range of the function is equal to its codomain.

*   **Analogy:** Think of a job application process. If every available job position (codomain) has at least one applicant assigned to it (domain), then the assignment is surjective onto the set of job positions. If there's a vacant position that no one is assigned to, it's not surjective.
*   **Formal Condition:** For every element $b \in B$, there exists at least one element $a \in A$ such that $f(a) = b$.
*   **Example:** Let A = {1, 2, 3} and B = {x, y}. The function $f = \{(1, x), (2, y), (3, x)\}$ is surjective because both x and y in the codomain B are mapped to. The range is {x, y}, which is equal to B.
    Now, consider A = {1, 2, 3} and B = {x, y, z}. The function $g = \{(1, x), (2, y), (3, x)\}$ is **not** surjective because *z* in the codomain B is not mapped to by any element in A. The range is {x, y}, which is not equal to B.

**(Professor's Note:** Surjectivity ensures that the entire target set (codomain) is "covered" by the function's outputs. This is crucial in resource allocation or ensuring that all possible states in a system can be reached.)

#### c) Bijective Functions (One-to-One Correspondence)

A function that is **both injective and surjective** is called a **bijective function**, or a one-to-one correspondence. This is the "nicest" type of function, where there's a perfect pairing between elements of the domain and the codomain.

*   **Analogy:** A perfect dance pairing where every person has exactly one partner, and every person is partnered.
*   **Formal Condition:** A function $f: A \rightarrow B$ is bijective if it is both injective and surjective. This means for every $b \in B$, there is *exactly one* $a \in A$ such that $f(a) = b$.
*   **Example:** Let A = {1, 2, 3} and B = {x, y, z}. The function $f = \{(1, x), (2, y), (3, z)\}$ is bijective. It's injective because no two inputs map to the same output, and it's surjective because every element in B is an output.
*   **Significance:** Bijective functions are incredibly important because they allow us to establish a direct, reversible mapping between two sets. If a bijection exists between two sets, it means they have the "same size" in a formal sense (which leads to concepts of cardinality and countability later on). This is fundamental to understanding equivalence and isomorphism in abstract algebra (**CO6**) and counting principles (**CO2**).

**(Professor's Note:** If you can find a bijection between two sets, you can essentially treat them as identical in terms of their structure and how many elements they contain. This is a powerful idea!)

---

### 4. Functions Between Finite Sets: Practical Examples

Let's solidify these ideas with some practical, non-textbook examples.

#### Example 1: Student Course Registrations

*   **Set A (Domain):** The set of all registered students in a university department.
*   **Set B (Codomain):** The set of all available courses offered by the department.
*   **Function $f: A \rightarrow B$:** A function that maps each student to the *primary* course they are enrolled in for a specific term.

    *   **Is it a function?** Yes, assuming each student is assigned exactly one "primary" course.
    *   **Is it injective?** Probably not. It's very likely that multiple students will be enrolled in the same primary course (e.g., many students taking "Introduction to Programming"). So, if $s_1 \neq s_2$ but $f(s_1) = f(s_2) =$ "Introduction to Programming", it's not injective.
    *   **Is it surjective?** Depends. If there's a course offered that *no* student is enrolled in as their primary course, then it's not surjective. If every course has at least one student assigned to it as primary, it is surjective.
    *   **Is it bijective?** Almost certainly not. For it to be bijective, each student would have to be in a unique course, and every course would need at least one student. This implies the number of students and courses would have to be the same, and their enrollment patterns would have to be perfectly unique.

#### Example 2: Employee Task Assignment

*   **Set A (Domain):** The set of employees in a small IT company.
*   **Set B (Codomain):** The set of tasks to be completed for a project.
*   **Function $g: A \rightarrow B$:** A function that assigns each employee to a *specific* task they are responsible for.

    *   **Is it a function?** Yes, if each employee is assigned exactly one main task.
    *   **Is it injective?** Again, unlikely in a team setting. Multiple employees might be assigned to the "Testing" phase of the project.
    *   **Is it surjective?** If there's a task that no employee is assigned to (e.g., a specific documentation task is overlooked), then it's not surjective. If every task has at least one employee assigned, it is surjective.
    *   **Is it bijective?** Very unlikely.

#### Example 3: Hashing a Username to a Database Index

*   **Set A (Domain):** The set of all valid usernames for a website.
*   **Set B (Codomain):** The set of possible indices in a database (e.g., integers from 0 to 9999).
*   **Function $h: A \rightarrow B$:** A hashing function that converts a username into a database index.

    *   **Is it a function?** A good hashing function *must* be a function. Each username must map to *exactly one* index.
    *   **Is it injective?** Highly unlikely for a large system. With millions of usernames and a limited number of database indices, it's mathematically guaranteed that multiple usernames will map to the same index. This is called a **hash collision**. So, typically *not* injective.
    *   **Is it surjective?** Ideally, yes. A good hashing function should distribute usernames relatively evenly across all possible indices, meaning every index should be a possible output for some username.
    *   **Is it bijective?** Definitely not, due to the lack of injectivity.

**(Professor's Note:** This last example is a fantastic illustration of why function types matter in computer science. Hash functions are designed to be fast and distribute data well, but they often sacrifice injectivity. This means we need strategies to handle collisions, like chaining or open addressing, which are topics you'll encounter in data structures and algorithms.)

---

### 5. Important Concepts and Terminology

Let's quickly recap some key terms and introduce a few more.

*   **Domain (A):** The set of all possible inputs.
*   **Codomain (B):** The set of all possible outputs.
*   **Range:** The subset of the codomain consisting of all actual outputs: $\{f(a) \mid a \in A\}$.
*   **Image of an element:** $f(a) = b$, where $b$ is the image of $a$.
*   **Pre-image of an element:** $a$ is a pre-image of $b$ if $f(a) = b$. An element $b$ in the codomain might have zero, one, or many pre-images.
*   **Injective (One-to-One):** Distinct inputs map to distinct outputs.
*   **Surjective (Onto):** Every element in the codomain is an output for at least one input.
*   **Bijective (One-to-One Correspondence):** Both injective and surjective.

**Special Functions we often see:**

*   **Constant Function:** $f(x) = c$ for all $x$ in the domain. Example: $f(x) = 5$. This is generally not injective (unless the domain has only one element) but can be surjective if the codomain is just {5}.
*   **Identity Function:** $f(x) = x$ for all $x$ in the domain. This function is always bijective. It's its own image and pre-image.

---

### 6. Connection to Course Outcomes

Let's explicitly link this topic to our course objectives:

*   **CO1 (Logic and Predicates):** Understanding functions is crucial for working with predicates involving relationships between elements, especially quantified statements. For instance, the statement "For every integer $x$, there exists a unique integer $y$ such that $y = x+1$" is describing the properties of the successor function, a bijective function. Analyzing the truth of such statements requires understanding function definitions.
*   **CO3 (Relations):** As we discussed, a function is a *special type* of binary relation. Understanding the precise conditions that make a relation a function is fundamental to distinguishing between them and recognizing the richer structure functions provide. This is a direct link!
*   **CO6 (Algebraic Systems):** When we move to abstract algebra (Semigroups, Monoids, Groups), functions (specifically homomorphisms and isomorphisms) are the *tools* we use to compare and relate these algebraic structures. An isomorphism is a type of bijection that preserves the structure of the operations. So, this foundational understanding of bijective functions is essential for CO6.

---

### 7. Common Pitfalls and Exam Focus

*   **Confusing Codomain and Range:** Remember, the codomain is the *potential* set of outputs, while the range is the *actual* set of outputs. A function can be surjective only if its range equals its codomain. Many students mix these up.
*   **Forgetting "Exactly One":** When checking if a mapping is a function, always verify both conditions: every element in the domain is mapped, AND each element in the domain is mapped to only one element in the codomain.
*   **Forgetting "At Least One":** When checking for surjectivity, ensure *every* element in the codomain is "hit" by the function.
*   **Testing Injectivity Correctly:** The easiest way is often to assume $f(a_1) = f(a_2)$ and try to prove $a_1 = a_2$. If you can find two *different* inputs that produce the *same* output, it's not injective.

**(Exam Tip:** Be prepared to be given a set of ordered pairs or a description of a mapping and asked: Is this a function? If so, is it injective? Surjective? Bijective? You'll need to justify your answers using the definitions.)

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
Let Set A = {1, 2, 3, 4} and Set B = {a, b, c}. Consider the mapping defined by the set of ordered pairs:
$M = \{(1, a), (2, b), (3, a), (4, c)\}$
Is this mapping a function from A to B? If so, is it injective, surjective, or bijective? Justify your answers.

**Answer:**
1.  **Is it a function?** Yes.
    *   Each element in A (1, 2, 3, 4) appears as the first element in exactly one ordered pair.
    *   There are no elements in A mapped to multiple elements in B.
2.  **Is it injective?** No.
    *   Elements 1 and 3 in Set A are both mapped to the element 'a' in Set B. Since $1 \neq 3$ but $f(1) = f(3)$, it fails the injective property.
3.  **Is it surjective?** Yes.
    *   Every element in Set B (a, b, c) is the image of at least one element from Set A.
    *   'a' is the image of 1 and 3.
    *   'b' is the image of 2.
    *   'c' is the image of 4.
    *   The range of the function is {a, b, c}, which is equal to the codomain B.
4.  **Is it bijective?** No.
    *   Since it is not injective, it cannot be bijective.

---

**Question 2 (Application-oriented):**
In a university system, student IDs are assigned. Suppose the Registrar's office uses a function $R: \{\text{Students}\} \rightarrow \{\text{Student IDs}\}$.
a) Explain why this must be a function.
b) What would it mean if this function $R$ were injective?
c) What would it mean if this function $R$ were surjective?
d) Is it possible for $R$ to be bijective? Explain.

**Answer:**
a)  **Why it must be a function:** Every registered student (element in the domain) is assigned exactly one Student ID (element in the codomain). The system is designed to ensure no student has multiple IDs or no ID at all. This adheres to the definition of a function.
b)  **Meaning of injective:** If $R$ were injective, it would mean that no two different students are assigned the same Student ID. Every student would have a unique ID, distinct from all other students' IDs. This is a desirable property for identification systems.
c)  **Meaning of surjective:** If $R$ were surjective, it would mean that every possible Student ID that the system can generate is assigned to at least one student. This implies that all available ID numbers are in use. In reality, ID numbers are usually assigned sequentially, so there might be unassigned numbers (making it not surjective), or the codomain might be defined as only the *currently assigned* IDs, in which case it would be surjective by definition of the codomain.
d)  **Possibility of bijective:** For $R$ to be bijective, it would need to be both injective and surjective.
    *   **Injective:** This means each student gets a unique ID.
    *   **Surjective:** This means every possible ID is assigned to a student.
    *   **Conclusion:** For $R$ to be bijective, the number of currently enrolled students must be exactly equal to the total number of possible Student IDs. This is highly unlikely in a real university system, as student enrollment fluctuates, and the pool of possible IDs is usually much larger than the current student population. For example, if student IDs are 7-digit numbers, there are $10^7$ possible IDs, but only a few thousand students.

---

**(Professor's Final Note:** Functions are the building blocks for so much of discrete mathematics and computer science. Make sure you're solid on the definitions of domain, codomain, range, and the conditions for being a function, injective, surjective, and bijective. These concepts will reappear constantly! Keep practicing with examples, and don't hesitate to ask questions. See you next time!)
