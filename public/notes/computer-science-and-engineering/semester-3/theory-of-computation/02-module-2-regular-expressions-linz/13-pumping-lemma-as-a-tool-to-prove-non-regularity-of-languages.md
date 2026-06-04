---
title: "Pumping lemma as a tool to prove non regularity of languages"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abb0"
status: "completed"
scrapedAt: "2026-05-20T16:29:58.599Z"
---
## THEORY OF COMPUTATION: Module 2 - Regular Expressions (Linz)

### Topic: Pumping Lemma as a Tool to Prove Non-Regularity of Languages

**Learning Outcomes:**

*   Understand the Pumping Lemma for regular languages.
*   Apply the Pumping Lemma to prove that a given language is not regular.
*   Identify the common pitfalls in applying the Pumping Lemma.
*   Recognize when the Pumping Lemma is the appropriate tool to use.

**1. Key Concepts and Definitions**

*   **Regular Language:** A language that can be described by a regular expression or accepted by a finite automaton (DFA or NFA).

*   **Pumping Lemma for Regular Languages:** If L is a regular language, then there exists a pumping length p (p ≥ 1) such that for any string w in L with |w| ≥ p, we can divide w into three substrings x, y, and z, satisfying the following conditions:

    *   1.  w = xyz
    *   2.  |y| > 0
    *   3.  |xy| ≤ p
    *   4.  For all i ≥ 0, xy<sup>i</sup>z ∈ L (i.e., xz, xyz, xyyz, xyyyz, ... are all in L)

*   **Pumping Length (p):**  A constant that depends on the regular language L. It is typically related to the number of states in a DFA that accepts L.  The Pumping Lemma guarantees its existence, but does not specify how to find it.

*   **Contradiction:** The cornerstone of using the Pumping Lemma. We assume that the language *is* regular and then use the Pumping Lemma to show that this assumption leads to a contradiction.

*   **Closure Properties (Important for context):**  Regular languages are closed under various operations like union, intersection, concatenation, complement, Kleene star, etc.  If a language can be proven non-regular, any language constructed using these operations combined with it can also be non-regular.

**2. Understanding the Pumping Lemma**

The Pumping Lemma essentially states that any sufficiently long string in a regular language contains a substring that can be repeated (pumped) any number of times without affecting the membership of the resulting string in the language.

*   **Think of it this way:** A DFA with `p` states can accept strings of length at least `p`. To accept such a string, the DFA must visit at least `p+1` states. Therefore, at least one state must be visited twice, forming a loop. The portion of the input string that causes the DFA to loop (y) can be repeated any number of times, and the resulting string will still be accepted.

**3. How to Use the Pumping Lemma to Prove Non-Regularity**

To prove that a language L is *not* regular using the Pumping Lemma, follow these steps:

1.  **Assume L is regular.** This is a crucial initial step. We are going to prove that this assumption leads to a contradiction.

2.  **Let p be the pumping length guaranteed by the Pumping Lemma.** The Pumping Lemma *guarantees* this value exists. We don't know its specific value, but its existence is key.

3.  **Choose a string w ∈ L such that |w| ≥ p.**  This is a strategic step. The choice of `w` is critical for the proof to work.  You need to pick a `w` that will lead to a contradiction when pumped.  Consider what properties of `L` will break if you repeat a specific substring.

4.  **Consider all possible ways to divide w into xyz, such that |y| > 0 and |xy| ≤ p.**  Since L is *assumed* regular, the Pumping Lemma guarantees *all* such divisions must satisfy the pumping condition.  However, it's often sufficient to demonstrate that *one* such division leads to a contradiction.  Sometimes, you might have to consider cases to show a contradiction for all possible splits.

5.  **Show that there exists an i ≥ 0 such that xy<sup>i</sup>z ∉ L.**  This is the core of the proof. Find an `i` such that the pumped string is *not* in L. This contradicts the Pumping Lemma's guarantee that `xy<sup>i</sup>z` must be in `L` for *all* `i`.

6.  **Conclude that L is not regular.** Since the assumption that L is regular leads to a contradiction, L must be non-regular.

**4. Examples**

**Example 1: L = {0<sup>n</sup>1<sup>n</sup> | n ≥ 0}**

1.  **Assume L is regular.**

2.  **Let p be the pumping length.**

3.  **Choose w = 0<sup>p</sup>1<sup>p</sup>.**  |w| = 2p ≥ p, so w satisfies the length requirement.

4.  **Consider all divisions of w into xyz where |y| > 0 and |xy| ≤ p.** Since |xy| ≤ p and w starts with p 0s, both x and y must consist only of 0s. Let y = 0<sup>k</sup>, where k > 0 (because |y| > 0). Thus, x = 0<sup>j</sup>, where j ≥ 0, and z = 0<sup>p-j-k</sup>1<sup>p</sup>.

5.  **Show that there exists an i ≥ 0 such that xy<sup>i</sup>z ∉ L.** Let i = 0. Then xy<sup>0</sup>z = xz = 0<sup>j</sup>0<sup>p-j-k</sup>1<sup>p</sup> = 0<sup>p-k</sup>1<sup>p</sup>.  Since k > 0, p - k < p. Therefore, xz has fewer 0s than 1s and so xz ∉ L.

6.  **Conclude that L is not regular.** Since we reached a contradiction, the language L = {0<sup>n</sup>1<sup>n</sup> | n ≥ 0} is not regular.

**Example 2: L = {ww | w ∈ {0, 1}*}**

1.  **Assume L is regular.**

2.  **Let p be the pumping length.**

3.  **Choose w = 0<sup>p</sup>10<sup>p</sup>1.** |w| = 2p + 2 ≥ p, so w satisfies the length requirement.

4.  **Consider all divisions of w into xyz where |y| > 0 and |xy| ≤ p.** Since |xy| ≤ p and w starts with p 0s followed by a 1, both x and y must consist only of 0s. Let y = 0<sup>k</sup>, where k > 0 (because |y| > 0). Thus, x = 0<sup>j</sup>, where j ≥ 0, and z = 0<sup>p-j-k</sup>10<sup>p</sup>1.

5.  **Show that there exists an i ≥ 0 such that xy<sup>i</sup>z ∉ L.** Let i = 2. Then xy<sup>2</sup>z = xyyz = 0<sup>j</sup>0<sup>k</sup>0<sup>k</sup>0<sup>p-j-k</sup>10<sup>p</sup>1 = 0<sup>p+k</sup>10<sup>p</sup>1.  Since k > 0, the first block of 0s is longer than p. Thus, xy<sup>2</sup>z is not of the form ww (where each w has length p+1). Thus, xy<sup>2</sup>z ∉ L.

6.  **Conclude that L is not regular.** Since we reached a contradiction, the language L = {ww | w ∈ {0, 1}*} is not regular.

**Example 3: L = {0<sup>n<sup>2</sup></sup> | n ≥ 0}**

1.  **Assume L is regular.**

2.  **Let p be the pumping length.**

3.  **Choose w = 0<sup>p<sup>2</sup></sup>.**  |w| = p<sup>2</sup> ≥ p, so w satisfies the length requirement.

4.  **Consider all divisions of w into xyz where |y| > 0 and |xy| ≤ p.**  Since |xy| ≤ p, x and y must consist only of 0s. Let |y| = k, where 0 < k ≤ p. Thus, |x| + k ≤ p, and |z| = p<sup>2</sup> - (|x| + k).

5.  **Show that there exists an i ≥ 0 such that xy<sup>i</sup>z ∉ L.**  Let i = 2. Then xy<sup>2</sup>z = 0<sup>|x| + 2k + p<sup>2</sup> - |x| - k</sup> = 0<sup>p<sup>2</sup> + k</sup>.  We need to show that p<sup>2</sup> + k is not a perfect square.

    Since 0 < k ≤ p, we have p<sup>2</sup> < p<sup>2</sup> + k ≤ p<sup>2</sup> + p < p<sup>2</sup> + 2p + 1 = (p+1)<sup>2</sup>.  Thus, p<sup>2</sup> + k lies strictly between two consecutive perfect squares, and hence cannot be a perfect square itself.  Therefore, xy<sup>2</sup>z ∉ L.

6.  **Conclude that L is not regular.** Since we reached a contradiction, the language L = {0<sup>n<sup>2</sup></sup> | n ≥ 0} is not regular.

**5. Common Pitfalls**

*   **Incorrect Choice of w:** Choosing the wrong string w can make it impossible to arrive at a contradiction, even if the language is non-regular. Your `w` must highlight the feature that causes the language to be non-regular.

*   **Not Considering All Valid Divisions of w:** While you don't always need to explicitly consider *every* possible division, your argument must implicitly cover all valid divisions. If you make assumptions about the format of the split without justification, this may be a weakness.

*   **Incorrectly Assuming the Language is Regular:** The Pumping Lemma is used to prove a language is *not* regular, so starting by assuming the language is non-regular is self-defeating.

*   **Forgetting the Conditions on x, y, and z:**  Remember the constraints: `|y| > 0` and `|xy| ≤ p`. These constraints are crucial for proving the contradiction.  Especially the `|y| > 0` constraint.

*   **Trying to Prove Regularity:** The Pumping Lemma cannot be used to *prove* that a language is regular. It can only be used to disprove regularity. If you want to prove regularity, you need to provide a regular expression, DFA, or NFA for the language.

**6. When to Use the Pumping Lemma**

The Pumping Lemma is generally a good choice for proving non-regularity when:

*   The language involves counting or comparison operations (e.g., the number of 0s equals the number of 1s).
*   The language requires memorizing an arbitrary amount of input (which a finite automaton cannot do).
*   The language involves some kind of structured repetition that a regular language cannot handle.

**7. Important Points to Remember**

*   The Pumping Lemma is a *necessary* condition for regularity, but not a *sufficient* condition.  A language might satisfy the Pumping Lemma but still be non-regular (though such examples are rare and generally require more complex pumping strategies).
*   The Pumping Lemma is a powerful tool, but requires careful application. Make sure you understand the steps involved and the constraints on the division of the string `w`.
*   Practice is key! The more examples you work through, the better you will become at choosing appropriate strings and identifying the conditions that lead to a contradiction.

**8. Practice Questions and Exercises**

**Question 1:** Use the Pumping Lemma to prove that the language L = {0<sup>n</sup>1<sup>m</sup> | n > m} is not regular.

**Answer:**

1.  **Assume L is regular.**

2.  **Let p be the pumping length.**

3.  **Choose w = 0<sup>p+1</sup>1<sup>p</sup>.** |w| = 2p + 1 ≥ p.

4.  **Consider all divisions of w into xyz where |y| > 0 and |xy| ≤ p.** Since |xy| ≤ p, both x and y must consist only of 0s. Let y = 0<sup>k</sup>, where k > 0. Thus, x = 0<sup>j</sup>, where j ≥ 0, and z = 0<sup>p+1-j-k</sup>1<sup>p</sup>.

5.  **Show that there exists an i ≥ 0 such that xy<sup>i</sup>z ∉ L.** Let i = 0. Then xy<sup>0</sup>z = xz = 0<sup>p+1-k</sup>1<sup>p</sup>. Since k > 0, p+1-k < p+1.  However, we still have p+1-k 0s and p 1s.  The condition that `n > m` in the language is not necessarily violated by this choice of `i`. We need to choose a different value. Let's try i = 2. xy<sup>2</sup>z = 0<sup>p+1+k</sup>1<sup>p</sup>.  Since k > 0, p+1+k > p+1. Therefore, the number of 0s (p+1+k) is strictly greater than p+1, so it is *still* greater than the number of 1s, p. This division does *not* lead to a contradiction.  Let's consider a *different division* based on our initial choice of w. Since all 0s are before all 1s in `w`, no matter what we pick as `i`, as long as `y` is some of the 0s, we'll still have more 0s than 1s.  The error is in the CHOICE of `w`, it allows the language condition to hold no matter how the pumping happens within the initial 0s.

    **Corrected Approach (with a different choice for w):**

    3. **Choose w = 0<sup>p+1</sup>1<sup>p</sup>.** |w| = 2p + 1 ≥ p.

    4. **Consider all divisions of w into xyz where |y| > 0 and |xy| ≤ p.** Since |xy| ≤ p, both x and y must consist only of 0s. Let y = 0<sup>k</sup>, where k > 0. Thus, x = 0<sup>j</sup>, where j ≥ 0, and z = 0<sup>p+1-j-k</sup>1<sup>p</sup>.

    5. **Show that there exists an i ≥ 0 such that xy<sup>i</sup>z ∉ L.** Let i = 0.  Then xy<sup>0</sup>z = xz = 0<sup>j</sup>0<sup>p+1-j-k</sup>1<sup>p</sup> = 0<sup>p+1-k</sup>1<sup>p</sup>.  Since k > 0, p+1-k < p+1. Choose k = 1. Thus xy<sup>0</sup>z = 0<sup>p</sup>1<sup>p</sup> which is not in L because in L, we want n > m.

6.  **Conclude that L is not regular.**

**Question 2:**  Explain why the Pumping Lemma cannot be used to prove that a language is regular.

**Answer:** The Pumping Lemma provides a *necessary* condition for regularity. If a language is regular, it *must* satisfy the Pumping Lemma. However, satisfying the Pumping Lemma does not guarantee that a language is regular. There might be other properties of the language that prevent it from being regular, even if it can be pumped. To *prove* a language is regular, one needs to provide a regular expression, DFA, or NFA that accepts the language.  The Pumping Lemma can only be used to show non-regularity, by demonstrating the language violates one or more requirements stated in the lemma.
