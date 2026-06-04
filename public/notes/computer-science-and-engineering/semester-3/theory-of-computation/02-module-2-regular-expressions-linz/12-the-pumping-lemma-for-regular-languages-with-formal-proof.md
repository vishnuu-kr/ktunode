---
title: "The Pumping Lemma for Regular Languages (with formal proof)"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abaf"
status: "completed"
scrapedAt: "2026-05-20T16:29:57.881Z"
---
# THEORY OF COMPUTATION - MODULE 2: REGULAR EXPRESSIONS (Linz)

## Topic: The Pumping Lemma for Regular Languages

**Learning Outcomes:**

*   Understand the Pumping Lemma for Regular Languages.
*   Explain the purpose and significance of the Pumping Lemma.
*   Apply the Pumping Lemma to prove that a language is NOT regular.
*   Understand the limitations of the Pumping Lemma.

**1. Key Concepts and Definitions:**

*   **Regular Language:** A language that can be recognized by a finite automaton (DFA or NFA) or described by a regular expression.
*   **Pumping Lemma:** A tool used to prove that a language is *not* regular. It states that for every regular language *L*, there exists a pumping length *p* (a positive integer) such that any string *w* in *L* that has length *p* or greater can be divided into three substrings, *x*, *y*, and *z*, such that *w = xyz*, and:
    *   |y| > 0 (y is not empty)
    *   |xy| ≤ p (the length of xy is at most the pumping length)
    *   For all i ≥ 0, xy<sup>i</sup>z ∈ L (pumping y any number of times, including zero, results in a string still in the language L)
*   **Pumping Length (p):** A constant that depends on the regular language.  It represents a length at which repeating behavior *must* exist within strings long enough to satisfy the Pumping Lemma's conditions.
*   **Proof by Contradiction:** The Pumping Lemma is typically used in a proof by contradiction. We assume the language is regular, apply the Pumping Lemma, and then show that we can choose a string in the language that violates the Pumping Lemma's conditions. This contradiction proves that our initial assumption (that the language is regular) was false.

**2. The Pumping Lemma for Regular Languages (Formal Statement and Proof):**

*   **Formal Statement:**

    If *L* is a regular language, then there exists an integer *p* ≥ 1 (the pumping length) such that, for every string *w* ∈ *L* with |*w*| ≥ *p*, there exist strings *x*, *y*, and *z* such that *w = xyz*, and:

    1.  |*y*| > 0
    2.  |*xy*| ≤ *p*
    3.  For all *i* ≥ 0, *xy<sup>i</sup>z* ∈ *L*

*   **Proof:**

    1.  **Assume L is regular:** This is the initial assumption of the proof by contradiction.
    2.  **L is accepted by a DFA:**  Since L is regular, there exists a Deterministic Finite Automaton (DFA) *M* = (*Q*, Σ, δ, *q<sub>0</sub>*, *F*) that accepts L.  *Q* is the set of states, Σ is the alphabet, δ is the transition function, *q<sub>0</sub>* is the start state, and *F* is the set of accept states.
    3.  **Define p:** Let *p* = |*Q*| (the number of states in the DFA).  This is our pumping length.
    4.  **Consider w ∈ L, |w| ≥ p:** Let *w* be a string in *L* such that the length of *w* is greater than or equal to *p*. Let *w* = *a<sub>1</sub>a<sub>2</sub>...a<sub>n</sub>*, where *n* ≥ *p* and each *a<sub>i</sub>* is a symbol from the alphabet Σ.
    5.  **Trace the path of w through the DFA:**  Consider the sequence of states the DFA goes through when processing the string *w*:

        *   *r<sub>0</sub>*, *r<sub>1</sub>*, *r<sub>2</sub>*, ..., *r<sub>n</sub>*, where *r<sub>0</sub>* = *q<sub>0</sub>* (the start state) and *r<sub>i</sub>* = δ(*r<sub>i-1</sub>*, *a<sub>i</sub>*) for *i* = 1, 2, ..., *n*.

        This sequence represents the path the DFA takes when reading the input string *w*. Since *w* is accepted by the DFA, *r<sub>n</sub>* ∈ *F* (the last state is an accepting state).
    6.  **Find a repeating state:** The sequence of states *r<sub>0</sub>*, *r<sub>1</sub>*, *r<sub>2</sub>*, ..., *r<sub>p</sub>* (the first *p* + 1 states) must contain a repeating state because there are only *p* distinct states in *Q* (by definition of *p* = |*Q*|).  Therefore, there exist indices *j* and *k* such that 0 ≤ *j* < *k* ≤ *p* and *r<sub>j</sub>* = *r<sub>k</sub>*.  This means the DFA visits the same state twice within the first *p* + 1 steps.
    7.  **Define x, y, and z:** We now define *x*, *y*, and *z* based on the repeating states:

        *   *x* = *a<sub>1</sub>a<sub>2</sub>...a<sub>j</sub>*: The part of *w* that brings the DFA from the start state *q<sub>0</sub>* to state *r<sub>j</sub>*.
        *   *y* = *a<sub>j+1</sub>a<sub>j+2</sub>...a<sub>k</sub>*: The part of *w* that brings the DFA from state *r<sub>j</sub>* back to state *r<sub>k</sub>* (which is the same as *r<sub>j</sub>*).  This is the "pumpable" section.
        *   *z* = *a<sub>k+1</sub>a<sub>k+2</sub>...a<sub>n</sub>*: The remaining part of *w* that brings the DFA from state *r<sub>k</sub>* to the final accepting state *r<sub>n</sub>*.

        Thus, *w* = *xyz*.
    8.  **Verify the conditions of the Pumping Lemma:**

        *   **|y| > 0:**  Since *j* < *k*, *y* = *a<sub>j+1</sub>a<sub>j+2</sub>...a<sub>k</sub>* contains at least one symbol, so |*y*| > 0.
        *   **|xy| ≤ p:**  Since *k* ≤ *p*, *xy* = *a<sub>1</sub>a<sub>2</sub>...a<sub>k</sub>* has length at most *p*.
        *   **For all i ≥ 0, xy<sup>i</sup>z ∈ L:** Consider the string *xy<sup>i</sup>z*.  When *i* = 0, we have *xz*.  The DFA starts in *q<sub>0</sub>*, reads *x* (reaching state *r<sub>j</sub>*), then skips *y* entirely (because *i* = 0) and reads *z* (reaching the accepting state *r<sub>n</sub>*). Thus *xz* ∈ *L*.

            For *i* > 0, the DFA starts in *q<sub>0</sub>*, reads *x* (reaching state *r<sub>j</sub>*), then reads *y* *i* times, returning to state *r<sub>j</sub>* after each repetition of *y*. Finally, it reads *z* (reaching the accepting state *r<sub>n</sub>*).  Thus, *xy<sup>i</sup>z* ∈ *L* for all *i* ≥ 0.
    9.  **Conclusion (for a regular language):** If L is regular, we can always find *x*, *y*, and *z* satisfying the conditions of the Pumping Lemma. The *converse* however is not true.  If we *can* find x, y, and z satisfying the conditions, it doesn't mean the language *is* regular.
    10. **How to use in Proof by Contradiction (when L is *NOT* regular):**  To prove that *L* is *not* regular, you must assume L *is* regular, use the Pumping Lemma to derive a contradiction, and conclude that the initial assumption (that L is regular) must be false.

**3. Applying the Pumping Lemma (Proof of Non-Regularity):**

To prove a language *L* is *not* regular using the Pumping Lemma, follow these steps:

1.  **Assume L is regular:** Start by assuming the language is regular.
2.  **Assume the Pumping Lemma holds:** Therefore, there exists a pumping length *p* for *L*.  Note that you *cannot* choose the value of p. The "adversary" chooses it.
3.  **Choose a string w ∈ L such that |w| ≥ p:** You *choose* this string strategically to make it difficult to satisfy the Pumping Lemma conditions.  The choice of *w* is crucial. It must be in *L*, and its structure should allow you to derive a contradiction later.  Typically, you choose a string whose length is a simple function of *p*, such as *p*, *2p*, or *p<sup>2</sup>*.
4.  **Consider all possible divisions of w into x, y, and z such that w = xyz, |y| > 0, and |xy| ≤ p:** Since you cannot control how the pumping length, *p*, is chosen (the "adversary" chooses it), you also can't control how *w* will be split into *x, y, z*, you must consider *all* possible ways the string can be split.  Since *|xy| ≤ p*, *y* must occur within the first *p* symbols of *w*.
5.  **Show that for each possible division, there exists an i ≥ 0 such that xy<sup>i</sup>z ∉ L:** For *each* possible way *w* can be split into *x, y, z* satisfying the conditions of the Pumping Lemma, find a value of *i* (usually 0, 2, or some other small integer) such that *xy<sup>i</sup>z* is *not* in *L*. This is the crucial step where you demonstrate the contradiction.
6.  **Conclude that L is not regular:** Since we have shown that for every pumping length *p*, we can find a string *w* in *L* such that the Pumping Lemma does not hold, we conclude that our initial assumption (that *L* is regular) must be false. Therefore, *L* is not regular.

**4. Examples:**

*   **Example 1: L = {0<sup>n</sup>1<sup>n</sup> | n ≥ 0} is not regular:**

    1.  **Assume L is regular.**
    2.  **Assume the Pumping Lemma holds.** Therefore, there exists a pumping length *p* for *L*.
    3.  **Choose w = 0<sup>p</sup>1<sup>p</sup>:** This string is in *L* and |*w*| = 2*p* ≥ *p*.
    4.  **Consider all possible divisions:** Since |*xy*| ≤ *p*, *y* must consist only of 0s. So, *x* = 0<sup>j</sup>, *y* = 0<sup>k</sup>, and *z* = 0<sup>p-j-k</sup>1<sup>p</sup>, where *j* ≥ 0, *k* > 0, and *j* + *k* ≤ *p*.
    5.  **Show the contradiction:** Let *i* = 0. Then *xy<sup>0</sup>z* = *xz* = 0<sup>p-k</sup>1<sup>p</sup>. Since *k* > 0, *p* - *k* < *p*. Therefore, the string has fewer 0s than 1s, so *xz* ∉ *L*.
    6.  **Conclude:** Since we have shown that for every possible division of *w*, *xy<sup>0</sup>z* ∉ *L*, we conclude that *L* is not regular.

*   **Example 2: L = {0<sup>n<sup>2</sup></sup> | n ≥ 0} is not regular:**

    1. Assume L is regular.
    2. Assume the Pumping Lemma holds. Therefore, there exists a pumping length *p* for *L*.
    3. Choose w = 0<sup>p<sup>2</sup></sup>. This string is in *L* and |*w*| = *p*<sup>2</sup> ≥ *p*.
    4. Consider all possible divisions:  Since |*xy*| ≤ *p*, *x* = 0<sup>j</sup>, *y* = 0<sup>k</sup>, and *z* = 0<sup>p<sup>2</sup>-j-k</sup>, where *j* ≥ 0, *k* > 0, and *j* + *k* ≤ *p*.
    5. Show the contradiction: Let *i* = 2.  Then *xy<sup>2</sup>z* = 0<sup>j</sup>0<sup>2k</sup>0<sup>p<sup>2</sup>-j-k</sup> = 0<sup>p<sup>2</sup>+k</sup>. Since *k* > 0,  *p<sup>2</sup> < p<sup>2</sup> + k*. Also, since *k ≤ p*, *p<sup>2</sup> + k ≤ p<sup>2</sup> + p < p<sup>2</sup> + 2p + 1 = (p+1)<sup>2</sup>*. Thus, *p<sup>2</sup> < p<sup>2</sup> + k < (p+1)<sup>2</sup>*, which means *p<sup>2</sup> + k* is *not* a perfect square. Therefore, *xy<sup>2</sup>z* ∉ *L*.
    6. Conclude: Since we have shown that for every possible division of *w*, *xy<sup>2</sup>z* ∉ *L*, we conclude that *L* is not regular.

**5. Limitations of the Pumping Lemma:**

*   The Pumping Lemma can only be used to prove that a language is *not* regular. It cannot be used to prove that a language *is* regular.  Even if you can find a pumping length and x, y, z such that the conditions hold, it does *not* guarantee regularity.
*   The Pumping Lemma is not a universal test for non-regularity. There exist non-regular languages for which the Pumping Lemma holds. In other words, it may not always be possible to find a contradiction, even if the language is not regular.

**6. Important Points to Remember:**

*   The Pumping Lemma is a powerful tool for proving non-regularity, but it requires careful application.
*   The *choice of the string w* is crucial for a successful proof.
*   You must consider *all possible divisions* of *w* into *x, y, z*.
*   You must find a value of *i* that leads to a contradiction for *every* possible division of *w*.
*   The Pumping Lemma cannot be used to prove regularity.
*   The adversary (someone else) chooses 'p', and you must accommodate for all possible values of p.
*   You choose the string w. It must be a legal string according to the language L and have length at least p.
*   You cannot pick a specific x, y, and z, because the adversary chooses how w is broken up. All possible cases of x, y, and z must be considered.
*   When all possible cases are considered, you need to find an i such that the string xy<sup>i</sup>z is not in L.

**7. Practice Questions/Exercises:**

1.  **Prove that the language L = {0<sup>n</sup>1<sup>m</sup> | n > m} is not regular.**
2.  **Prove that the language L = {w w | w ∈ {0, 1}*} is not regular.**
3.  **Prove that the language L = {1<sup>k</sup> | k is a prime number} is not regular.**

**8. Answers to Practice Questions:**

**1. L = {0<sup>n</sup>1<sup>m</sup> | n > m} is not regular:**

1.  Assume L is regular.
2.  Assume the Pumping Lemma holds.
3.  Let w = 0<sup>p+1</sup>1<sup>p</sup>.  |w| > p, and w ∈ L.
4.  Since |xy| ≤ p, y must consist of only 0s. Let x = 0<sup>j</sup>, y = 0<sup>k</sup>, and z = 0<sup>p+1-j-k</sup>1<sup>p</sup>, where j ≥ 0, k > 0, and j + k ≤ p.
5.  Let i = 0.  Then xy<sup>0</sup>z = xz = 0<sup>p+1-k</sup>1<sup>p</sup>. Since k > 0, p+1-k < p+1.  Therefore, the number of 0s is less than p+1, and the number of 1s is p.  So, the number of 0s is no longer greater than the number of 1s, and xz ∉ L.
6.  Therefore, L is not regular.

**2. L = {w w | w ∈ {0, 1}*} is not regular:**

1.  Assume L is regular.
2.  Assume the Pumping Lemma holds.
3.  Let w = 0<sup>p</sup>10<sup>p</sup>1.  |w| > p, and w ∈ L since it's of the form ww, where the w in ww is 0<sup>p</sup>1
4.  Since |xy| ≤ p, y must consist of only 0s. Let x = 0<sup>j</sup>, y = 0<sup>k</sup>, and z = 0<sup>p-j-k</sup>10<sup>p</sup>1, where j ≥ 0, k > 0, and j + k ≤ p.
5.  Let i = 2.  Then xy<sup>2</sup>z = 0<sup>j</sup>0<sup>2k</sup>0<sup>p-j-k</sup>10<sup>p</sup>1 = 0<sup>p+k</sup>10<sup>p</sup>1. Since k > 0,  this string is of the form 0<sup>m</sup>10<sup>p</sup>1 where m != p. It is not in the form ww; since we pumped the first section of 0s, its length is no longer equal to the second group.
6.  Therefore, L is not regular.

**3. L = {1<sup>k</sup> | k is a prime number} is not regular:**

1.  Assume L is regular.
2.  Assume the Pumping Lemma holds.
3.  Let w = 1<sup>p</sup><sup>.  Let w = 1<sup>x</sup>, where x is a prime number > p. Since there are infinite primes, such a number must exist.
4.  Since |xy| ≤ p, y must consist of only 1s. Let x = 1<sup>j</sup>, y = 1<sup>k</sup>, and z = 1<sup>x-j-k</sup>, where j ≥ 0, k > 0, and j + k ≤ p.
5.  Consider the string xy<sup>p-j+1</sup>z = 1<sup>j</sup>(1<sup>k</sup>)<sup>p-j+1</sup>1<sup>x-j-k</sup> = 1<sup>j + k(p-j+1) + x -j -k</sup> = 1<sup>x + k(p-j)</sup>.  Since x is prime, if x + k(p-j) is composite, we reach a contradiction. Consider if k(p-j) is a multiple of x. Then we can say that the exponent can be written as x(n), which is composite for all integer values of n > 1, or in our case k(p-j) = x.
    Consider if k(p-j) is a multiple of x or k(p-j) = x. If we assume x + k(p-j) is x^2 (prime * prime) then xy<sup>p-j+1</sup>z is xy<sup>p-j+1</sup>z  is 1<sup>x+k(p-j)</sup> or 1<sup>x^2</sup> which is not prime and x^2 > p.
   However, a simpler route for choosing i:
        Let i = p-j+2, Then xy<sup>i</sup>z = 1<sup>x+k(p-j+1)</sup>. We need to show that x + k(p-j+1) is composite.
        x + k(p-j+1) = x + k(p+1) - k*j = x + (p+1)k -kj > 1.
       Let x > p. |xy| <= p. Then x = j+k+d (d>=0). Thus, the #of elements in xyiz will be
               (j + i*k +d = (j + k + d) + ((i-1) * k)
               Thus # of elements in xyiz = x + ((i-1) * k)

               But here if we take  i  =  x+1  we get  x  +  (x*k)  =  x(k+1)

          For x + (x*k) = x (k+1) to be non-prime x cannot be 1  and  x>=1 .  

          Also as j <= x; (and j must be less than or equal to X), |y| >=1

          Taking x = p then with xy'z with  i = 1 + # 1s then that will make the number non prime . 
6.  Therefore, L is not regular.
