---
title: "Fractional Knapsack Problem"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 3: Divide and Conquer "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbd4"
status: "completed"
scrapedAt: "2026-05-20T17:25:17.452Z"
---
# Introduction to Algorithms - Module 3: Divide and Conquer

## Topic: Fractional Knapsack Problem

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Understand the Fractional Knapsack Problem statement and its objectives.
*   Identify the greedy strategy applicable to the Fractional Knapsack Problem.
*   Explain why the greedy approach works for this problem.
*   Develop an algorithm to solve the Fractional Knapsack Problem.
*   Analyze the time complexity of the greedy algorithm.
*   Differentiate the Fractional Knapsack Problem from the 0/1 Knapsack Problem.

---

### 1. Understanding the Fractional Knapsack Problem

#### 1.1 Problem Statement:

Imagine you have a knapsack with a maximum weight capacity, let's call it **W**. You are given a set of **n** items, each with a specific **weight ($w_i$)** and a **value ($v_i$)**.

The goal is to fill the knapsack with a combination of these items (or fractions of items) such that the **total value** of the items in the knapsack is **maximized**, without exceeding the knapsack's weight capacity **W**.

**Key Difference from 0/1 Knapsack:** In the Fractional Knapsack Problem, you can take **fractions** of items. For example, if an item has a weight of 10 kg and a value of $100, you can take 5 kg of it, which would give you a value of $50.

#### 1.2 Objectives:

*   **Maximize total value** of items in the knapsack.
*   **Do not exceed** the knapsack's weight capacity **W**.

#### 1.3 Key Concepts and Definitions:

*   **Knapsack Capacity (W):** The maximum weight the knapsack can hold.
*   **Items:** A collection of objects, each with a weight and a value.
*   **Weight of an Item ($w_i$):** The weight of the $i^{th}$ item.
*   **Value of an Item ($v_i$):** The value of the $i^{th}$ item.
*   **Fraction ($x_i$):** The portion of the $i^{th}$ item taken. $0 \le x_i \le 1$. If $x_i = 1$, the whole item is taken. If $x_i = 0.5$, half of the item is taken.
*   **Value-to-Weight Ratio ($v_i / w_i$):** A crucial metric representing the "value density" of an item. This ratio indicates how much value you get per unit of weight.

---

### 2. The Greedy Strategy

The Fractional Knapsack Problem is a classic example where a **greedy approach** yields the optimal solution.

#### 2.1 The Greedy Choice Property:

The greedy strategy for the Fractional Knapsack Problem is to always choose the item that has the **highest value-to-weight ratio**. This means we prioritize items that give us the most "bang for our buck" (most value per unit of weight).

#### 2.2 Why the Greedy Approach Works (Intuition):

Think of it like this: if you have a limited capacity and you want to get the most value, it makes sense to fill that capacity with the most "valuable" material first. Items with higher value-to-weight ratios are more valuable per unit of weight. By picking them first, you are effectively "packing" the knapsack with the best available options, ensuring you don't "waste" capacity on less valuable items.

Let's consider two items:
*   Item A: $w_A = 10$, $v_A = 60$. Ratio $v_A/w_A = 6$.
*   Item B: $w_B = 20$, $v_B = 100$. Ratio $v_B/w_B = 5$.

If you have a capacity of 20, and you pick Item B first (value 100, weight 20), your knapsack is full. Total value = 100.

However, if you pick Item A first (value 60, weight 10), you have 10 capacity remaining. Now you look at Item B. You can take a fraction of Item B. The remaining capacity is 10. You take $10/20 = 0.5$ fraction of Item B. This gives you a value of $0.5 \times 100 = 50$ and uses 10 weight.
Total value = $60 (from A) + 50 (from B) = 110$.
Total weight = $10 (from A) + 10 (from B) = 20$.

This demonstrates that by prioritizing the higher value-to-weight ratio, we achieve a better result. This can be formally proven using an exchange argument, but the intuition is strong.

---

### 3. Developing the Algorithm

The greedy algorithm for the Fractional Knapsack Problem involves the following steps:

**Algorithm: FractionalKnapsack**

**Input:**
*   A list of items, where each item `i` has a `weight[i]` and `value[i]`.
*   Knapsack capacity `W`.

**Output:**
*   The maximum total value that can be obtained.

**Steps:**

1.  **Calculate Value-to-Weight Ratios:** For each item `i`, calculate its value-to-weight ratio: `ratio[i] = value[i] / weight[i]`.
2.  **Sort Items:** Sort the items in **descending order** based on their value-to-weight ratios.
3.  **Fill the Knapsack:**
    *   Initialize `current_weight = 0` and `total_value = 0`.
    *   Iterate through the sorted items:
        *   If `current_weight + weight[i] <= W`:
            *   Take the entire item `i`.
            *   `current_weight = current_weight + weight[i]`
            *   `total_value = total_value + value[i]`
        *   Else (if taking the whole item exceeds capacity):
            *   Calculate the remaining capacity: `remaining_capacity = W - current_weight`.
            *   Calculate the fraction of item `i` that can be taken: `fraction = remaining_capacity / weight[i]`.
            *   Take this fraction of item `i`.
            *   `total_value = total_value + fraction * value[i]`
            *   `current_weight = W` (knapsack is now full)
            *   **Break** the loop (no more items can be added).
4.  **Return `total_value`**.

---

### 4. Example Walkthrough

Let's solve an example:

**Input:**
*   Knapsack Capacity (W) = 50 kg
*   Items:
    *   Item 1: weight = 10 kg, value = 60
    *   Item 2: weight = 20 kg, value = 100
    *   Item 3: weight = 30 kg, value = 120

**Steps:**

1.  **Calculate Value-to-Weight Ratios:**
    *   Item 1: ratio = 60 / 10 = 6
    *   Item 2: ratio = 100 / 20 = 5
    *   Item 3: ratio = 120 / 30 = 4

2.  **Sort Items (Descending by Ratio):**
    *   Item 1 (ratio 6)
    *   Item 2 (ratio 5)
    *   Item 3 (ratio 4)

3.  **Fill the Knapsack:**
    *   Initialize `current_weight = 0`, `total_value = 0`.

    *   **Consider Item 1:**
        *   `current_weight + weight[1]` (0 + 10) <= 50? Yes.
        *   Take Item 1 entirely.
        *   `current_weight = 10`
        *   `total_value = 60`

    *   **Consider Item 2:**
        *   `current_weight + weight[2]` (10 + 20) <= 50? Yes.
        *   Take Item 2 entirely.
        *   `current_weight = 10 + 20 = 30`
        *   `total_value = 60 + 100 = 160`

    *   **Consider Item 3:**
        *   `current_weight + weight[3]` (30 + 30) <= 50? No (60 > 50).
        *   Calculate remaining capacity: `remaining_capacity = 50 - 30 = 20` kg.
        *   Calculate fraction of Item 3 to take: `fraction = 20 / 30 = 2/3`.
        *   Take `2/3` of Item 3.
        *   `total_value = 160 + (2/3) * 120 = 160 + 80 = 240`.
        *   `current_weight = 30 + 20 = 50`. Knapsack is full.
        *   Break the loop.

4.  **Return `total_value`:** The maximum total value is 240.

---

### 5. Analyzing Time Complexity

Let `n` be the number of items and `W` be the knapsack capacity.

1.  **Calculating Value-to-Weight Ratios:** This takes O(n) time, as we iterate through each of the `n` items once.
2.  **Sorting Items:** Sorting `n` items takes O(n log n) time using efficient sorting algorithms like Merge Sort or Quick Sort.
3.  **Filling the Knapsack:** This involves iterating through the sorted items. In the worst case, we might iterate through all `n` items (or until the knapsack is full). Each step inside the loop (addition, comparison, multiplication) takes constant time, O(1). So, this step takes O(n) time.

The dominant factor in the time complexity is the sorting step. Therefore, the **overall time complexity of the greedy algorithm for the Fractional Knapsack Problem is O(n log n)**.

---

### 6. Differentiating from the 0/1 Knapsack Problem

It is crucial to understand the distinction between the Fractional Knapsack Problem and the 0/1 Knapsack Problem.

| Feature                   | Fractional Knapsack Problem                                       | 0/1 Knapsack Problem                                               |
| :------------------------ | :---------------------------------------------------------------- | :----------------------------------------------------------------- |
| **Item Selection**        | Can take **fractions** of items.                                  | Must take an item **entirely** (1) or **not at all** (0).           |
| **Optimal Strategy**      | **Greedy approach** (based on value-to-weight ratio) is optimal. | **Dynamic Programming** is typically required for an optimal solution. |
| **Value-to-Weight Ratio** | Direct use of ratios leads to optimal solution.                   | Greedy strategy based on ratios is **not** guaranteed to be optimal. |
| **Complexity**            | O(n log n) due to sorting.                                        | O(nW) or O(2^n) depending on the DP approach or brute force.      |
| **Example Application**   | Packing valuable materials of different densities.                | Selecting discrete items with weight and value constraints.        |

**Why the greedy approach fails for 0/1 Knapsack:**

Consider a knapsack with capacity W=30.
*   Item 1: w=20, v=30 (ratio = 1.5)
*   Item 2: w=10, v=20 (ratio = 2.0)
*   Item 3: w=10, v=20 (ratio = 2.0)

**Greedy (Fractional-like) Approach:**
1.  Take Item 2 (ratio 2.0): w=10, v=20. Remaining W = 20.
2.  Take Item 3 (ratio 2.0): w=10, v=20. Remaining W = 10.
3.  Cannot take Item 1 (w=20).
Total value = 40.

**Optimal (0/1) Solution:**
1.  Take Item 1: w=20, v=30. Remaining W = 10.
2.  Take Item 2 (or Item 3): w=10, v=20. Remaining W = 0.
Total value = 50.

This clearly shows that the greedy strategy fails for the 0/1 Knapsack Problem because you cannot take a fraction to perfectly fill the remaining capacity.

---

### 7. Important Points to Remember

*   The Fractional Knapsack Problem allows taking **parts** of items.
*   The **greedy strategy** based on **value-to-weight ratio** is **optimal** for the Fractional Knapsack Problem.
*   The algorithm involves **calculating ratios**, **sorting items by ratio**, and then **filling the knapsack greedily**.
*   The time complexity is dominated by **sorting**, making it **O(n log n)**.
*   The **0/1 Knapsack Problem** is different; a greedy approach is **not sufficient** to guarantee an optimal solution, and **dynamic programming** is typically used.

---

### 8. Practice Questions

1.  **Question:** You have a knapsack with a capacity of 10 kg. You are given the following items:
    *   Item A: Weight = 3 kg, Value = 30
    *   Item B: Weight = 5 kg, Value = 50
    *   Item C: Weight = 2 kg, Value = 24

    What is the maximum value you can obtain by solving the Fractional Knapsack Problem? Show your steps.

    **Answer:**
    *   Calculate ratios:
        *   Item A: 30 / 3 = 10
        *   Item B: 50 / 5 = 10
        *   Item C: 24 / 2 = 12
    *   Sort by ratio (descending): Item C (12), Item A (10), Item B (10). (If ratios are equal, the order doesn't strictly matter for the final value, but a consistent tie-breaking rule is good practice, e.g., taking the one with less weight first). Let's assume we take Item A before Item B due to its lower weight in case of a tie.
    *   Fill knapsack (Capacity = 10):
        1.  Take Item C: Weight = 2 kg, Value = 24. Remaining capacity = 10 - 2 = 8 kg. Total value = 24.
        2.  Take Item A: Weight = 3 kg, Value = 30. Remaining capacity = 8 - 3 = 5 kg. Total value = 24 + 30 = 54.
        3.  Take Item B: Remaining capacity is 5 kg. Item B's weight is 5 kg. So, take the whole Item B. Weight = 5 kg, Value = 50. Remaining capacity = 5 - 5 = 0 kg. Total value = 54 + 50 = 104.
    *   Maximum value = 104.

2.  **Question:** Explain why sorting items by value-to-weight ratio is the correct greedy strategy for the Fractional Knapsack Problem.

    **Answer:** By sorting items by their value-to-weight ratio, we prioritize those items that offer the most value per unit of weight. This means that for every kilogram of capacity we fill, we are using it on the most "efficient" item available at that moment. Since we can take fractions, we can always perfectly fill any remaining capacity with a portion of the next best item. This greedy choice property ensures that we never make a choice that prevents us from achieving a better overall solution. If we were to skip a higher-ratio item to take a lower-ratio item instead, we would necessarily be substituting value for weight, leading to a suboptimal solution.

3.  **Question:** What is the time complexity of the Fractional Knapsack algorithm, and which step contributes the most to it?

    **Answer:** The time complexity is O(n log n). The step that contributes the most is the **sorting of items** based on their value-to-weight ratios.
