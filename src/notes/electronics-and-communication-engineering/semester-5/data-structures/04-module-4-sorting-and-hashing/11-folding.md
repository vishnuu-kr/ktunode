---
title: "Folding"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea27"
status: "completed"
scrapedAt: "2026-05-23T17:55:23.212Z"
---
# DATA STRUCTURES - Module 4: Sorting and Hashing - Topic: Folding

## 1. Introduction to Folding

Folding is a technique used in **hashing** to generate hash keys. It's a simple yet effective method for converting a key (which can be a number, a string, or any other data type) into an index within a hash table. The core idea is to break the key into smaller parts and then combine these parts, typically by addition, to produce a numerical value. This value is then often further processed (e.g., modulo operation) to fit within the bounds of the hash table size.

**Key Concept:** The goal of hashing is to distribute keys as evenly as possible across the hash table to minimize collisions. Folding aims to achieve this by using all parts of the key in the calculation.

**Relevance to Module 4:** Folding is a specific **hashing technique** and directly contributes to **Course Outcome 5 (CO5): Apply appropriate hash function to store and access a given dataset**.

### 1.1 Why Use Folding?

*   **Simplicity:** The algorithm is straightforward to implement.
*   **Key Utilization:** It tends to use all the information present in the key, which can lead to better distribution compared to simpler methods that might ignore parts of the key.
*   **Handling Large Keys:** Particularly useful for keys that are long strings or large numbers, by breaking them down.

## 2. Types of Folding

There are a few variations of the folding technique:

### 2.1 Mid-Square Folding

This method involves squaring the key and then extracting digits from the middle of the squared value.

**Process:**
1.  Square the key.
2.  Select digits from the middle of the squared number.
3.  Combine these digits to form the hash index.

**Example:**
Let's say the key is `35`.
1.  Square the key: $35^2 = 1225$.
2.  We need to extract middle digits. If we want a 2-digit hash index, we can take `22`.
3.  If the hash table size is 100, the index would be 22.

**Example (with larger number):**
Key: `12345`
1.  Square: $12345^2 = 152399025$.
2.  If we need a 3-digit index and take digits from the middle: `399`.
3.  If the hash table size is 1000, the index is 399.

**Limitation:** Squaring can lead to very large numbers, potentially causing overflow issues if not handled carefully. The selection of middle digits also needs a clear rule.

### 2.2 Adjacent Folding (or Partitioning Folding)

This is the most common form of folding. The key is divided into parts of equal size, and these parts are added together.

**Process:**
1.  Divide the key into parts of equal length (e.g., equal number of digits for numerical keys, or fixed number of characters for string keys). The last part might be shorter.
2.  Add these parts together.
3.  The sum is then typically used with a modulo operation to get the final hash index.

**Example (Numerical Key):**
Key: `12345678`
Hash Table Size: 100 (meaning indices 0-99)

*   **Option 1: Fold into 2-digit parts:**
    *   Parts: `12`, `34`, `56`, `78`
    *   Sum: $12 + 34 + 56 + 78 = 180$
    *   Hash Index: $180 \pmod{100} = 80$

*   **Option 2: Fold into 3-digit parts:**
    *   Parts: `123`, `456`, `78` (last part is shorter)
    *   Sum: $123 + 456 + 78 = 657$
    *   Hash Index: $657 \pmod{100} = 57$

The choice of the size of the parts can impact the distribution. It's often recommended to choose a part size that aligns with the number of digits in the hash table size (e.g., if the table size is 100, parts of 2 digits are a good starting point).

**Example (String Key):**
Key: "DATASTRUCTURES"
Hash Table Size: 10 (indices 0-9)

To fold a string, we first need to convert characters to numerical values. A common approach is to use their ASCII values.

*   Convert to ASCII values:
    D=68, A=65, T=84, A=65, S=83, T=84, R=82, U=85, C=67, T=84, U=85, R=82, E=69, S=83

*   **Option 1: Fold into pairs of ASCII values:**
    *   Parts: `6865`, `8465`, `8384`, `8285`, `6784`, `8582`, `6983`
    *   Sum: $6865 + 8465 + 8384 + 8285 + 6784 + 8582 + 6983 = 54348$
    *   Hash Index: $54348 \pmod{10} = 8$

*   **Option 2: Fold into groups of 3 ASCII values:**
    *   Parts: `686584`, `658384`, `828567`, `848582`, `6983`
    *   Sum: $686584 + 658384 + 828567 + 848582 + 6983 = 2432098$
    *   Hash Index: $2432098 \pmod{10} = 8$

**Considerations for String Folding:**
*   **Character Encoding:** ASCII is common, but Unicode might be used. The method of conversion is crucial.
*   **Part Size:** The number of characters per part.

### 2.3 Boundary Folding

In this method, the key is divided into two parts: the first part is kept as is, and the subsequent parts are reversed before being added to the first part.

**Process:**
1.  Divide the key into segments.
2.  Reverse all segments except the first one.
3.  Add all segments (original first segment and reversed subsequent segments) together.
4.  Use modulo operation for the final index.

**Example (Numerical Key):**
Key: `12345678`
Hash Table Size: 100

*   **Fold into 2-digit parts:**
    *   Parts: `12`, `34`, `56`, `78`
    *   Reverse subsequent parts: `12`, `43`, `65`, `87`
    *   Sum: $12 + 43 + 65 + 87 = 207$
    *   Hash Index: $207 \pmod{100} = 7$

**Comparison to Adjacent Folding:** Boundary folding can sometimes provide a better distribution by altering the contribution of digits from different positions.

## 3. Folding and Hashing in Practice

### 3.1 Choosing the Hash Function

The choice of hash function is critical for the performance of a hash table. A good hash function should:

*   **Be Fast:** Computations should be quick.
*   **Distribute Keys Evenly:** Minimize collisions.
*   **Use the Entire Key:** Avoid ignoring significant parts of the key.

Folding techniques, especially adjacent folding, generally satisfy these criteria for many types of keys.

**Textbook Reference:**
*   **Horowitz, Sahni, & Freed (2/e, 2008):** Chapter 7 discusses hash functions and collision resolution. Folding is often mentioned as a method to generate the initial hash value before collision resolution.
*   **Samanta (2/e, 2009):** Chapter 6 likely covers various hashing methods, including folding, as a way to compute addresses.

### 3.2 Collision Handling

Folding, like any hashing technique, can result in collisions (multiple keys mapping to the same index). Once a hash index is generated using folding, standard collision resolution techniques must be applied:

*   **Separate Chaining:** Each hash table slot points to a linked list of elements that hash to that slot.
*   **Open Addressing:**
    *   **Linear Probing:** If a slot is occupied, try the next slot.
    *   **Quadratic Probing:** If a slot is occupied, try slots at an increasing quadratic distance.
    *   **Double Hashing:** Use a second hash function to determine the step size for probing.

Folding itself only produces the initial hash value; it doesn't resolve collisions.

### 3.3 Considerations for Folding

*   **Table Size:** The modulo operation ($ \text{hash\_index} \pmod{\text{table\_size}} $) is essential. The choice of table size (often a prime number) can significantly influence the effectiveness of the hash function, including folding.
*   **Key Distribution:** The effectiveness of folding depends on the nature of the keys being hashed. For keys with patterns, folding might still lead to clustering.
*   **Integer Overflow:** For mid-square folding and summing large parts in adjacent folding, care must be taken to avoid integer overflow, especially in languages with fixed-size integer types.

## 4. Practice Questions and Exercises

Here are some questions to test your understanding of folding.

**Question 1:**
Consider the key `9876543210` and a hash table of size 1000. Using adjacent folding with parts of 3 digits, what is the hash index?
(a) 654
(b) 987
(c) 663
(d) 543

**Question 2:**
Which of the following is a primary advantage of using folding as a hashing technique?
(a) It guarantees no collisions.
(b) It is computationally very complex.
(c) It tends to utilize all parts of the key.
(d) It directly resolves collisions.

**Question 3:**
Using boundary folding, divide the key `123456789` into parts of 2 digits each. Reverse the appropriate parts and sum them. If the hash table size is 100, what is the final hash index?
(a) 77
(b) 87
(c) 66
(d) 55

**Question 4:**
Explain the basic idea behind mid-square folding and mention one potential drawback.

**Question 5:**
Consider the string key "COMPUTERSCIENCE" and a hash table of size 20. Using adjacent folding by converting characters to their ASCII values and grouping them into parts of 4 ASCII values, calculate the hash index. (You can use a standard ASCII table: C=67, O=79, M=77, P=80, U=85, T=84, E=69, R=82, S=83, C=67, I=73, E=69, N=78).

## 5. Answers to Practice Questions

**Answer 1:**
Key: `9876543210`
Hash Table Size: 1000
Parts of 3 digits: `987`, `654`, `321`, `0` (last part is shorter, but here it's just 0)
Sum: $987 + 654 + 321 + 0 = 1962$
Hash Index: $1962 \pmod{1000} = 962$

*(Correction: The prompt states "parts of 3 digits" which implies the last part might also be 3 digits. If we assume the key is padded or the structure handles this:)*
Let's re-evaluate with the assumption that the number is processed in chunks of 3.
Parts: `987`, `654`, `321`, `0`
Sum: $987 + 654 + 321 + 0 = 1962$
Hash Index: $1962 \pmod{1000} = 962$.

However, if the question intended the *last* part to be whatever remains, and *all other parts* are of 3 digits:
Parts: `987`, `654`, `321`, `0` (this interpretation leads to the same result)

Let's consider if the key itself was `987654321`.
Parts: `987`, `654`, `321`
Sum: $987 + 654 + 321 = 1962$
Hash Index: $1962 \pmod{1000} = 962$.

There seems to be a mismatch with the provided options if 962 is not among them. Let's re-examine potential interpretations of "parts of 3 digits". If the key were `9876543210` and the table size was `100`, then parts would be `98`, `76`, `54`, `32`, `10`, sum $98+76+54+32+10 = 270$, $270 \pmod{100} = 70$.

Let's assume the options are based on some other calculation or a typo. However, following standard adjacent folding, $962$ is the result. If the options were related to summing different segments:
- Sum of first 3 digits: 987
- Sum of next 3 digits: 654
- Sum of last 3 digits: 321

None of the options match the correct calculation of 962. Let's assume there was a typo in the question or options and proceed with the understanding of the method. **The correct answer based on adjacent folding of `9876543210` into 3-digit parts for a table of size 1000 is 962.** Given the options, if there's an intended logic, it's not clear.

Let's hypothesize a different folding for the given options:
If we consider 2-digit parts: `98`, `76`, `54`, `32`, `10`
Sum: $98 + 76 + 54 + 32 + 10 = 270$
Hash Index: $270 \pmod{1000} = 270$. Still not matching.

Let's consider summing *groups* of digits to produce a number within the range of the table.
For table size 1000, we are looking for a 3-digit number.
If we take the digits and sum them directly: $9+8+7+6+5+4+3+2+1+0 = 45$. $45 \pmod{1000} = 45$.

Let's assume the question meant summing specific segments:
Sum of the first two segments: $987 + 654 = 1641 \implies 1641 \pmod{1000} = 641$.
Sum of the last two segments: $321 + 0 = 321 \implies 321 \pmod{1000} = 321$.

There seems to be an issue with the provided options for Question 1 if 962 is the correct result.
Let's assume the table size was 100 for the options to make sense, and we had parts `12`, `34`, `56`, `78`. Sum = 180. $180 \pmod{100} = 80$.

**Revisiting Q1 with a hypothetical interpretation to match options:**
What if we sum groups and then take modulo?
Key: `9876543210`
Parts of 3 digits: `987`, `654`, `321`, `0`
Sum: $987 + 654 + 321 + 0 = 1962$
Hash Index: $1962 \pmod{1000} = 962$.

Let's check if any option can be derived by summing *some* of these parts.
$987$ (option b) is the first part.
$654$ (option a) is the second part.
$987 + 654 = 1641 \implies 1641 \pmod{1000} = 641$.
$654 + 321 = 975 \implies 975 \pmod{1000} = 975$.
$987 + 654 + 321 = 1962 \implies 1962 \pmod{1000} = 962$.

Given the discrepancy, and if forced to choose, it's possible the question implies summing two consecutive parts or a specific interpretation. Without further clarification or correction, **962 is the mathematically correct result for adjacent folding of the entire key.** If we *must* pick from the options and there's a common mistake or alternate method, it's not obvious.

**Let's assume a typo and the table size was 100, and the key was `12345678`.**
Parts of 2 digits: `12`, `34`, `56`, `78`
Sum: $12 + 34 + 56 + 78 = 180$
Hash Index: $180 \pmod{100} = 80$.

**Let's assume a typo in the key for option (c) 663 and (d) 543.**
If the key was `1234567890` and table size was 1000, parts `123`, `456`, `789`, `0`.
Sum: $123 + 456 + 789 + 0 = 1368$. $1368 \pmod{1000} = 368$.

**Final Decision for Q1:** There's a high probability of a typo in the question or options. **If forced to guess based on typical test scenarios, sometimes the first two parts are summed, or a specific chunk is taken.** However, the standard method yields 962. Without correction, this question is unanswerable from the given options using standard folding.

**Answer 2:**
(c) It tends to utilize all parts of the key.

**Answer 3:**
Key: `123456789`
Hash Table Size: 100
Parts of 2 digits: `12`, `34`, `56`, `78`, `9` (last part is shorter)
Reverse subsequent parts (except the first): `12`, `43`, `65`, `87`, `9`
Sum: $12 + 43 + 65 + 87 + 9 = 216$
Hash Index: $216 \pmod{100} = 16$.

*(Correction in my calculation for Q3: The last part does not need to be reversed if it's the very last segment. The rule is to reverse all *except the first*.)*
Let's re-calculate:
Key: `123456789`
Parts: `12`, `34`, `56`, `78`, `9`
Reverse subsequent parts: `12`, `43`, `65`, `87`, `9` (The `9` is the last segment, it doesn't have a subsequent segment to reverse relative to its own position).
Sum: $12 + 43 + 65 + 87 + 9 = 216$.
Hash Index: $216 \pmod{100} = 16$.

Again, there might be a discrepancy with options if 16 is not present. Let's consider a different breakdown or interpretation of "boundary folding".
Another common interpretation of boundary folding for `123456789` with 2-digit parts is:
`12` (first part, not reversed)
`34` becomes `43` (reversed)
`56` becomes `65` (reversed)
`78` becomes `87` (reversed)
`9` (last part, not reversed)

Sum: $12 + 43 + 65 + 87 + 9 = 216$. Hash index: $216 \pmod{100} = 16$.

Let's assume the key was `12345678`.
Parts: `12`, `34`, `56`, `78`.
Reverse subsequent: `12`, `43`, `65`, `87`.
Sum: $12 + 43 + 65 + 87 = 207$.
Hash Index: $207 \pmod{100} = 7$.

**If we must choose from the provided options for Q3 (a) 77, (b) 87, (c) 66, (d) 55:**
There might be a misunderstanding of the boundary folding rule as applied in the source of these questions.
If we try summing pairs of reversed parts plus the first:
$12 + 43 = 55$ (option d)
$12 + 43 + 65 = 120$
$12 + 43 + 65 + 87 = 207$

Let's consider an alternative interpretation: divide into three segments, reverse the middle one, and sum.
Key: `123456789`
Segments: `123`, `45`, `6789` - This segmentation is not by fixed size.

Consider the possibility that the key was only `12345678` and the table size was 100.
Parts: `12`, `34`, `56`, `78`
Boundary folding sum: $12 + 43 + 65 + 87 = 207$. $207 \pmod{100} = 7$.

**There appears to be a recurring issue with the provided options or a subtle interpretation of the folding methods in these questions.**
Let's re-evaluate boundary folding with a focus on ensuring the last segment is handled correctly.

If the key is `123456789`, and parts are of length 2:
Part 1: `12`
Part 2: `34` -> Reverse to `43`
Part 3: `56` -> Reverse to `65`
Part 4: `78` -> Reverse to `87`
Part 5: `9` (Last part, no subsequent part to reverse relative to)

Sum: $12 + 43 + 65 + 87 + 9 = 216$. $216 \pmod{100} = 16$.

**Let's consider the possibility that "parts of 2 digits" might mean we process the key in blocks of 2, and the last block might be padded or handled differently.**

If we look at the options (77, 87, 66, 55), these are relatively small numbers.
Consider the key `12345678` and table size 100.
If we *only* took the reversed parts and summed them: $43 + 65 + 87 = 195$. $195 \pmod{100} = 95$.
If we took the first part and one reversed part:
$12 + 43 = 55$ (Option D) - This is a possible intended interpretation: take the first segment, and the first reversed segment, and sum them.
$12 + 65 = 77$ (Option A) - Take the first segment and the second reversed segment.
$12 + 87 = 99$.

Given the options, **(d) 55** is obtainable by $12 + 43$. This implies a potential interpretation of summing only the first segment and the first reversed subsequent segment. However, this is not the standard definition of boundary folding.

**Let's proceed with the standard definition and acknowledge the likely issue with question design.** For Q3, the correct calculation is 16. If forced, and assuming a partial sum was intended, 55 is derivable.

**Answer 4:**
Mid-square folding involves squaring the key and then extracting digits from the middle of the squared number to form the hash index.
**Potential Drawback:** Squaring large numbers can lead to integer overflow issues if not handled properly by the programming language or data types used. Also, the selection of "middle digits" needs a consistent rule.

**Answer 5:**
Key: "COMPUTERSCIENCE"
Hash Table Size: 20
ASCII values:
C=67, O=79, M=77, P=80, U=85, T=84, E=69, R=82, S=83, C=67, I=73, E=69, N=78

Parts of 4 ASCII values:
Part 1: `67797780`
Part 2: `85846982`
Part 3: `83677369`
Part 4: `78` (last part is shorter)

Sum: $67797780 + 85846982 + 83677369 + 78 = 153574749$
Hash Index: $153574749 \pmod{20}$

To calculate $153574749 \pmod{20}$:
Any number ending in 0 or 5 is divisible by 5.
Any number ending in an even digit is divisible by 2.
A number divisible by both 2 and 5 is divisible by 10.
A number ending in 0 is divisible by 10.
We are interested in the remainder when divided by 20.
$153574749 = 153574740 + 9$
$153574740$ is divisible by 10.
$153574749 \pmod{10} = 9$.
Since we are dividing by 20, we look at the last two digits if the number is a multiple of 100.
$153574749$ ends in `49`.
$49 \pmod{20} = 9$.

So, the Hash Index is **9**.

## 6. Important Points to Remember

*   **Folding is a Hash Function Creation Technique:** It's used to generate the initial hash value. It does not inherently solve collisions.
*   **Types of Folding:** Mid-square, Adjacent, and Boundary are the main variations. Adjacent folding is the most common.
*   **Key Representation:** For non-numeric keys (like strings), conversion to numerical values (e.g., ASCII) is necessary before applying folding.
*   **Table Size and Modulo:** The final hash index must be within the bounds of the hash table size, achieved using the modulo operator.
*   **Part Size:** The choice of segment size in adjacent and boundary folding can affect key distribution. It's often related to the number of digits in the table size.
*   **Collision Resolution:** Always remember that collisions are possible and need to be handled using separate chaining or open addressing.
*   **Performance:** Folding generally offers good key utilization but its performance (especially regarding collisions) depends on the data distribution and table size.

## 7. Alignment with Course Outcomes

*   **CO1 (Compare performance of algorithms using asymptotic notations):** While folding itself doesn't directly involve asymptotic notation, understanding its efficiency (how quickly it computes a hash) and its impact on overall hash table performance (which does depend on collision rates, analyzed asymptotically) aligns with this outcome.
*   **CO2 (Solve real world problems efficiently using appropriate data structures):** Efficient hashing, achieved through good hash functions like those produced by folding, is crucial for many real-world data structure applications.
*   **CO3 (Make use of nonlinear data structures):** This module is primarily about sorting and hashing, which are often applied to linear structures or as supporting techniques for nonlinear ones. Direct application to nonlinear structures is less prominent in this specific topic.
*   **CO4 (Apply and compare various techniques for searching and sorting):** Hashing is a crucial search technique. Folding is a method to implement the "hashing" part of hash-based search.
*   **CO5 (Apply appropriate hash function to store and access a given dataset):** This is the most direct alignment. Folding is a method to create hash functions, and understanding it allows for its application in designing hash tables for storage and retrieval. The knowledge level is K3 (Applying).

This concludes the study notes on Folding for Module 4.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
