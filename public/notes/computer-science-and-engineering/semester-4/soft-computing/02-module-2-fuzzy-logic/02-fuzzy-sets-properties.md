---
title: "Fuzzy sets – Properties"
subject: "SOFT COMPUTING"
module: "Module 2: Fuzzy logic"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b1dc"
status: "completed"
scrapedAt: "2026-05-20T16:16:19.139Z"
---
# SOFT COMPUTING - Module 2: Fuzzy Logic - Fuzzy Sets - Properties

These notes cover the properties of fuzzy sets, a fundamental concept in fuzzy logic.

**Learning Outcomes:**

*   Understand the definition and representation of fuzzy sets.
*   Learn and apply the key properties of fuzzy sets, including equality, containment, complement, union, intersection, and difference.
*   Apply fuzzy set properties to solve practical problems.
*   Differentiate fuzzy set properties from their crisp set counterparts.

## 1. Introduction to Fuzzy Sets

*   **Crisp Sets (Classical Sets):**  An element either belongs to a set or does not.  Membership is binary (0 or 1).
*   **Fuzzy Sets:**  An element can belong to a set to a *degree*. This degree is represented by a membership value between 0 and 1 (inclusive).
*   **Membership Function (µ<sub>A</sub>(x)):**  Assigns a degree of membership to each element x in the universe of discourse X for a fuzzy set A.  It maps X to [0, 1].
    *   µ<sub>A</sub>(x) = 1:  x is fully a member of A.
    *   µ<sub>A</sub>(x) = 0:  x is not a member of A.
    *   0 < µ<sub>A</sub>(x) < 1: x is a partial member of A.

*   **Universe of Discourse (X):**  The set of all possible elements under consideration.
*   **Fuzzy Set Representation:**  A fuzzy set A can be represented in several ways:
    *   **General Form:**  A = { (x, µ<sub>A</sub>(x)) | x ∈ X }
    *   **Discrete Universe (X):** A =  Σ µ<sub>A</sub>(x<sub>i</sub>) / x<sub>i</sub>
    *   **Continuous Universe (X):** A = ∫ µ<sub>A</sub>(x) / x
*   **Example:**  Consider the fuzzy set "Tall People" with the universe of discourse being the set of people's heights in centimeters.  A person who is 180cm might have a membership grade of 0.8 in the "Tall People" set, meaning they are "mostly" tall. A person who is 150cm might have a membership grade of 0.1.

## 2. Properties of Fuzzy Sets

These properties describe how fuzzy sets relate to each other and how operations can be performed on them.  It's important to note that many properties of crisp sets have fuzzy counterparts, but with nuances due to the nature of partial membership.

### 2.1. Equality

*   **Definition:** Two fuzzy sets A and B are equal (A = B) if and only if their membership functions are identical for all elements in the universe of discourse X.
    *   µ<sub>A</sub>(x) = µ<sub>B</sub>(x) for all x ∈ X
*   **Example:**
    *   A = { (1, 0.5), (2, 0.8), (3, 0.2) }
    *   B = { (1, 0.5), (2, 0.8), (3, 0.2) }
    *   A = B, because their membership functions are the same for each element.

### 2.2. Containment (Subsethood)

*   **Definition:** Fuzzy set A is a subset of fuzzy set B (A ⊆ B) if and only if the membership grade of each element in A is less than or equal to the membership grade of the corresponding element in B.
    *   µ<sub>A</sub>(x) ≤ µ<sub>B</sub>(x) for all x ∈ X
*   **Example:**
    *   A = { (1, 0.2), (2, 0.5), (3, 0.1) }
    *   B = { (1, 0.7), (2, 0.6), (3, 0.4) }
    *   A ⊆ B, because 0.2 ≤ 0.7, 0.5 ≤ 0.6, and 0.1 ≤ 0.4.

### 2.3. Complement

*   **Definition:** The complement of a fuzzy set A (denoted as A') is defined such that the membership function of A' is 1 minus the membership function of A.
    *   µ<sub>A'</sub>(x) = 1 - µ<sub>A</sub>(x) for all x ∈ X
*   **Interpretation:**  Represents the degree to which an element *does not* belong to the fuzzy set A.
*   **Example:**
    *   A = { (1, 0.3), (2, 0.8), (3, 0.5) }
    *   A' = { (1, 0.7), (2, 0.2), (3, 0.5) }

### 2.4. Union (Fuzzy OR)

*   **Definition:** The union of two fuzzy sets A and B (denoted as A ∪ B) is defined as the fuzzy set whose membership function is the *maximum* of the membership functions of A and B for each element.
    *   µ<sub>A ∪ B</sub>(x) = max(µ<sub>A</sub>(x), µ<sub>B</sub>(x)) for all x ∈ X
*   **Interpretation:**  An element belongs to the union if it belongs to either A *or* B (or both), with a membership grade determined by the *highest* membership grade in either set.
*   **Example:**
    *   A = { (1, 0.2), (2, 0.7), (3, 0.4) }
    *   B = { (1, 0.5), (2, 0.3), (3, 0.8) }
    *   A ∪ B = { (1, 0.5), (2, 0.7), (3, 0.8) }

### 2.5. Intersection (Fuzzy AND)

*   **Definition:** The intersection of two fuzzy sets A and B (denoted as A ∩ B) is defined as the fuzzy set whose membership function is the *minimum* of the membership functions of A and B for each element.
    *   µ<sub>A ∩ B</sub>(x) = min(µ<sub>A</sub>(x), µ<sub>B</sub>(x)) for all x ∈ X
*   **Interpretation:** An element belongs to the intersection if it belongs to both A *and* B, with a membership grade determined by the *lowest* membership grade in either set.
*   **Example:**
    *   A = { (1, 0.2), (2, 0.7), (3, 0.4) }
    *   B = { (1, 0.5), (2, 0.3), (3, 0.8) }
    *   A ∩ B = { (1, 0.2), (2, 0.3), (3, 0.4) }

### 2.6. Difference

*   **Definition:** The difference between two fuzzy sets A and B (denoted as A - B) can be defined in several ways. A common definition is:
    *   A - B = A ∩ B'
    *   Meaning: The fuzzy set of elements that belong to A but *not* to B.
    *   µ<sub>A - B</sub>(x) = min(µ<sub>A</sub>(x), 1 - µ<sub>B</sub>(x)) for all x ∈ X
*   **Example:**
    *   A = { (1, 0.7), (2, 0.8), (3, 0.3) }
    *   B = { (1, 0.2), (2, 0.9), (3, 0.5) }
    *   B' = { (1, 0.8), (2, 0.1), (3, 0.5) }
    *   A - B = A ∩ B' = { (1, 0.7), (2, 0.1), (3, 0.3) }

## 3.  Important Points to Remember

*   Fuzzy sets are a generalization of crisp sets, allowing for partial membership.
*   The membership function is central to the definition of a fuzzy set.
*   Fuzzy set operations (union, intersection, complement, etc.) are defined using the membership functions.  Understand *how* these functions are calculated.
*   Fuzzy set properties differ from crisp set properties in that they account for degrees of membership.

## 4. Practice Questions / Exercises

**Question 1:**

Given the fuzzy sets:

*   A = { (a, 0.2), (b, 0.5), (c, 0.8), (d, 0.1) }
*   B = { (a, 0.6), (b, 0.2), (c, 0.4), (d, 0.9) }

Calculate:

a) A ∪ B
b) A ∩ B
c) A'
d) A - B

**Answer 1:**

a) A ∪ B = { (a, 0.6), (b, 0.5), (c, 0.8), (d, 0.9) }
b) A ∩ B = { (a, 0.2), (b, 0.2), (c, 0.4), (d, 0.1) }
c) A' = { (a, 0.8), (b, 0.5), (c, 0.2), (d, 0.9) }
d) A - B =  { (a, 0.2), (b, 0.5), (c, 0.6), (d, 0.1) }  [Calculated as min(µ<sub>A</sub>(x), 1 - µ<sub>B</sub>(x))]

**Question 2:**

Is A a subset of B given:

*   A = { (x, 0.3), (y, 0.7), (z, 0.2) }
*   B = { (x, 0.5), (y, 0.6), (z, 0.8) }

**Answer 2:**

No, A is not a subset of B.  Because µ<sub>A</sub>(y) = 0.7, which is greater than µ<sub>B</sub>(y) = 0.6. For A to be a subset of B, µ<sub>A</sub>(x) ≤ µ<sub>B</sub>(x) must hold for *all* x.

**Question 3:**

Explain the difference between the union of two crisp sets and the union of two fuzzy sets.

**Answer 3:**

In crisp sets, the union of A and B contains all elements that belong to either A or B (or both). An element is either in the union or not (binary membership). In fuzzy sets, the union A ∪ B contains elements that belong to either A or B to a certain degree. The membership grade of an element in the union is the *maximum* of its membership grades in A and B. This allows for a gradual transition between belonging and not belonging to the union.

**Question 4:**

Define Equality of Fuzzy Sets.

**Answer 4:**

Two fuzzy sets, A and B, are equal if and only if their membership functions are identical for all elements in the universe of discourse. Mathematically, this is expressed as: µ<sub>A</sub>(x) = µ<sub>B</sub>(x) for all x ∈ X.

**Question 5:**

Give an example of a real-world scenario where fuzzy sets are useful.

**Answer 5:**

Controlling the temperature of a shower. "Hot water" is a fuzzy concept. A crisp set would require a precise temperature to be considered "hot," which is not realistic. A fuzzy set can represent "hot water" with varying degrees of membership based on the actual temperature. For example, water at 45°C might have a membership grade of 0.2 in the "Hot Water" set, while water at 60°C might have a membership grade of 0.9. This allows for more nuanced and realistic control.

These notes provide a solid foundation for understanding the properties of fuzzy sets. Make sure to practice with different examples and scenarios to solidify your understanding. Good luck!
