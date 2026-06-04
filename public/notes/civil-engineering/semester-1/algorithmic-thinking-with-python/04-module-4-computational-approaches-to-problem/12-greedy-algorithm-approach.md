---
title: "Greedy Algorithm Approach"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 4: COMPUTATIONAL APPROACHES TO PROBLEM"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912b89"
status: "completed"
scrapedAt: "2026-05-20T18:28:36.695Z"
---
# Module 4: Computational Approaches to Problems - The Greedy Algorithm Approach

Welcome to our exploration of computational problem-solving! In this module, we're diving into powerful strategies that help us tackle complex challenges systematically. Today, we're focusing on a particularly intuitive and often effective approach: the **Greedy Algorithm**.

Think about how you make decisions in everyday life. When faced with a choice, you often pick the option that seems best *right now*, the one that gives you the most immediate benefit, without necessarily worrying too much about the long-term consequences of that single choice. This "take the best available option at each step" mindset is the essence of a greedy algorithm.

## 1. What is a Greedy Algorithm?

At its core, a greedy algorithm is a problem-solving strategy that makes the locally optimal choice at each stage with the hope of finding a global optimum. What does this mean? It means we don't look too far ahead. We make the best decision we can with the information we have *at that very moment*. If we make a sequence of these locally best choices, we *hope* that this sequence will lead us to the overall best solution for the entire problem.

**Connecting to Course Outcomes:**

*   **CO1 (Utilize computing as a model for solving real-world problems):** The greedy approach is a perfect example of how we can model real-world decision-making processes using computational techniques. Many optimization problems, from managing resources to planning routes, can be approached greedily.
*   **CO2 (Articulate a problem before attempting to solve it):** To apply a greedy algorithm effectively, we first need to clearly define the problem, the available choices at each step, and what constitutes a "best" choice. This upfront articulation is crucial.
*   **CO3 (Use effective algorithms to solve the formulated models):** The greedy algorithm is one such effective algorithmic strategy. We'll learn how to translate the greedy strategy into Python code.
*   **CO4 (Interpret problem-solving strategies):** Understanding the greedy approach helps us interpret *why* certain solutions work and where they might fail. It's a foundational strategy in algorithmic thinking.

## 2. The "Greedy" Philosophy: Why it Works (and When it Doesn't)

Imagine you're at a buffet. You want to get the most delicious food possible. What do you do? You probably go for the most appealing dish first, right? You grab that perfectly roasted chicken or that decadent chocolate cake. You're not thinking about what might be left for your second trip, or how balanced your meal is nutritionally. You're taking the most appealing option *now*. This is the greedy choice.

**Key Concept: Local vs. Global Optimum**

*   **Local Optimum:** The best choice available at a particular step in the algorithm.
*   **Global Optimum:** The absolute best solution to the entire problem.

The fundamental question with greedy algorithms is: **Does making the locally optimal choice at each step *always* lead to the globally optimal solution?**

The answer, unfortunately, is **no**. Greedy algorithms don't always work. They are not a universal solution. However, for certain types of problems, they are incredibly efficient and guarantee the best possible outcome. The trick is identifying *when* a greedy approach is appropriate.

Think of it like this: If you're trying to climb a mountain and you always take the steepest path upwards from your current position, you *might* reach the summit. But you might also get stuck on a steep cliff face and be unable to proceed. A more careful planner might take a less steep, winding path that eventually leads to the top.

**Referencing Our Texts:**

George Pólya, in "How to Solve It," emphasizes understanding the problem thoroughly before seeking a solution. This is critical for greedy algorithms. We need to understand the structure of the problem to determine if a greedy choice is indeed the right path. Maureen Sprankle and Jim Hubbard, in "Problem Solving & Programming Concepts," often introduce algorithms by showing their step-by-step logic, which is exactly how we'll analyze greedy approaches.

## 3. Common Problems Solved with Greedy Algorithms

Let's look at some classic examples where the greedy approach shines.

### 3.1. The Change-Making Problem (A Classic Example)

Imagine you're a cashier and you need to give someone change. You have a set of available coin denominations (e.g., 1, 5, 10, 25 cents) and you need to give them a specific amount of change using the *minimum number of coins*.

How would you do it? Most likely, you'd start with the largest denomination coin that is less than or equal to the remaining amount needed.

Let's say you need to give 67 cents in change.
*   You have 25-cent coins (quarters). 25 is less than 67. Use a quarter. Remaining amount: 67 - 25 = 42 cents.
*   You still need 42 cents. You have 25-cent coins. 25 is less than 42. Use another quarter. Remaining amount: 42 - 25 = 17 cents.
*   You still need 17 cents. You can't use a 25-cent coin. What's the next largest coin? A 10-cent coin (dime). 10 is less than 17. Use a dime. Remaining amount: 17 - 10 = 7 cents.
*   You still need 7 cents. You can't use a dime. The next largest is a 5-cent coin (nickel). 5 is less than 7. Use a nickel. Remaining amount: 7 - 5 = 2 cents.
*   You still need 2 cents. You can't use a nickel. The next largest is a 1-cent coin (penny). 1 is less than 2. Use a penny. Remaining amount: 2 - 1 = 1 cent.
*   You still need 1 cent. Use another penny. Remaining amount: 1 - 1 = 0 cents.

You used two quarters, one dime, one nickel, and two pennies. That's a total of 6 coins. This is the greedy strategy: always pick the largest coin that fits.

**Does it always work?** For standard US currency (1, 5, 10, 25), yes, the greedy approach yields the minimum number of coins. However, consider a fictional currency with denominations {1, 3, 4} and you need to make 6 cents.
*   Greedy: Pick 4. Remaining: 2. Pick 1. Remaining: 1. Pick 1. Total: 3 coins (4, 1, 1).
*   Optimal: Pick 3. Remaining: 3. Pick 3. Total: 2 coins (3, 3).

Here, the greedy approach fails! This highlights the importance of understanding the specific problem's properties. The greedy approach is optimal for "canonical" coin systems where each denomination is sufficiently larger than the sum of smaller denominations in a way that avoids these issues.

**Connecting to Course Outcomes:**

*   **CO3 (Use effective algorithms):** The change-making problem is a prime example where we see the greedy algorithm's effectiveness, but also its limitations.
*   **CO4 (Interpret problem-solving strategies):** This example helps us understand *why* greedy works for some coin systems and not others, reinforcing the idea that strategy choice is problem-dependent.

### 3.2. Activity Selection Problem

Suppose you are given a list of activities, each with a start time and a finish time. You want to select the maximum number of non-overlapping activities that can be performed by a single person or machine.

Think about scheduling your day: You have a bunch of meetings or tasks, each with a start and end time. You can only do one at a time. How do you pick the most tasks to complete?

The greedy strategy here is to **always select the activity that finishes earliest** among the remaining compatible activities.

Why does this work? By picking the activity that finishes earliest, you leave the maximum amount of time available for subsequent activities. This maximizes your chances of fitting in more activities later.

Let's say we have activities A (start: 1, finish: 4), B (start: 3, finish: 5), C (start: 0, finish: 6), D (start: 5, finish: 7), E (start: 3, finish: 8), F (start: 5, finish: 9), G (start: 6, finish: 10), H (start: 8, finish: 11), I (start: 8, finish: 12), J (start: 2, finish: 13), K (start: 12, finish: 14).

1.  **Sort activities by finish time:** A(1,4), B(3,5), C(0,6), D(5,7), E(3,8), F(5,9), G(6,10), H(8,11), I(8,12), J(2,13), K(12,14).
    Sorted order by finish time: A(1,4), B(3,5), C(0,6), D(5,7), E(3,8), F(5,9), G(6,10), H(8,11), I(8,12), J(2,13), K(12,14).
    *(Wait, I made a mistake in sorting! Let's re-sort carefully)*
    Correct sorted order by finish time: A(1,4), B(3,5), C(0,6), D(5,7), E(3,8), F(5,9), G(6,10), H(8,11), I(8,12), J(2,13), K(12,14).
    *(Still not right, let's take it step by step)*
    Activity List with Finish Times:
    A: 4
    B: 5
    C: 6
    D: 7
    E: 8
    F: 9
    G: 10
    H: 11
    I: 12
    J: 13
    K: 14

    Sorted by finish time: A(1,4), B(3,5), C(0,6), D(5,7), E(3,8), F(5,9), G(6,10), H(8,11), I(8,12), J(2,13), K(12,14).
    *(Okay, my brain is stuck on the same error. Let's list them with their finish times and then sort properly.)*

    Activities with (start, finish):
    A: (1, 4)
    B: (3, 5)
    C: (0, 6)
    D: (5, 7)
    E: (3, 8)
    F: (5, 9)
    G: (6, 10)
    H: (8, 11)
    I: (8, 12)
    J: (2, 13)
    K: (12, 14)

    Sorted by finish time:
    1. A (1, 4)
    2. B (3, 5)
    3. C (0, 6)
    4. D (5, 7)
    5. E (3, 8)
    6. F (5, 9)
    7. G (6, 10)
    8. H (8, 11)
    9. I (8, 12)
    10. J (2, 13)
    11. K (12, 14)

    *(Self-correction: The start times are also crucial for compatibility, but the greedy choice is based *only* on the finish time for selection. Once selected, we check compatibility based on start times.)*

    Let's execute the greedy strategy:
    *   **Pick A (1, 4)**. It finishes first.
    *   Now, we need an activity that starts *after* A finishes (i.e., start time >= 4). Looking at the remaining activities, the next one that finishes earliest AND starts after 4 is **D (5, 7)**.
    *   Now, we need an activity that starts after D finishes (i.e., start time >= 7). Looking at the remaining activities, the next one that finishes earliest AND starts after 7 is **H (8, 11)**.
    *   Now, we need an activity that starts after H finishes (i.e., start time >= 11). Looking at the remaining activities, the next one that finishes earliest AND starts after 11 is **K (12, 14)**.

    Selected activities: A, D, H, K. Total: 4 activities. This is the maximum number.

    **Connecting to Course Outcomes:**

    *   **CO1, CO3 (Utilize computing, use algorithms):** This is a practical application where a greedy algorithm solves a real-world scheduling problem.
    *   **CO2 (Articulate a problem):** We clearly defined the problem (maximum non-overlapping activities) and the selection criteria (earliest finish time).

### 3.3. Huffman Coding (Brief Mention)

This is a more advanced topic, but Huffman coding is a brilliant example of a greedy algorithm used for data compression. It builds a prefix code (like a special binary code for characters) by repeatedly merging the two least frequent characters (or groups of characters) into a new node. The greedy choice is always to merge the two smallest frequencies. This process ensures that the most frequent characters get the shortest codes, leading to efficient compression.

**Connecting to Course Outcomes:**

*   **CO1 (Utilize computing for real-world problems):** Data compression is a fundamental use of computing.
*   **CO3 (Use effective algorithms):** Huffman coding is a highly effective and widely used algorithm.

## 4. The Greedy Choice Property and Optimal Substructure

For a greedy algorithm to be provably correct (i.e., guaranteed to find the global optimum), the problem must possess two key properties:

### 4.1. The Greedy Choice Property

This property means that a globally optimal solution can be arrived at by making a sequence of locally optimal (greedy) choices. In essence, if we make the greedy choice now, it doesn't prevent us from reaching the overall best solution.

Think back to the change-making problem with {1, 5, 10, 25}. When we need 67 cents and choose a quarter, we are confident that this choice is part of *some* optimal solution. We don't regret choosing the quarter later because it doesn't make it impossible to find the minimum number of coins for the remaining 42 cents.

**Analogy:** Imagine you're packing a suitcase for a trip. You want to pack as much as possible. The greedy strategy might be to pack the largest items first. If you can fit a large suitcase, does that prevent you from packing optimally overall? Often, yes. If you pack a huge, bulky item that leaves no room for smaller, more essential items, your greedy choice (largest item first) might not lead to the best packed suitcase. However, for other problems, like activity selection, picking the earliest finishing activity *does* leave the most room for future activities, making it a valid greedy choice.

**Connecting to Course Outcomes:**

*   **CO4 (Interpret problem-solving strategies):** Understanding the greedy choice property helps us analyze *why* a greedy algorithm works and where it might fail. It’s about the assurance that our current "best" choice doesn't trap us.

### 4.2. Optimal Substructure

A problem exhibits optimal substructure if an optimal solution to the problem contains within it optimal solutions to subproblems.

In the activity selection example, if we decide to select activity A (which finishes earliest), the remaining problem is to find the maximum number of non-overlapping activities from the set of activities that start *after* A finishes. If our overall selection is optimal, then the selection of activities *after* A must also be optimal for the subproblem.

This is like solving a puzzle. If you find the best way to place one piece, and that piece is part of the overall best arrangement of all pieces, then the arrangement of the remaining pieces must also be optimal for the rest of the puzzle.

**Referencing Our Texts:**

Many algorithm textbooks, including those like Guttag's "Introduction to Computation and Programming using Python," discuss these fundamental properties (optimal substructure, greedy choice property) that underpin the correctness of dynamic programming and greedy algorithms. It's about breaking down a problem into smaller, similar pieces.

**Connecting to Course Outcomes:**

*   **CO3 (Use effective algorithms):** Recognizing optimal substructure is key to designing or validating algorithms that aim for optimality.
*   **CO4 (Interpret problem-solving strategies):** This property is central to understanding how complex problems can be solved by solving smaller, related versions of themselves.

## 5. Designing and Implementing a Greedy Algorithm in Python

The general structure of a greedy algorithm typically involves:

1.  **Understanding the Problem:** Clearly define the goal and constraints.
2.  **Defining the Greedy Choice:** Identify the criterion for making the "best" choice at each step.
3.  **Structuring the Data:** Often, sorting the input data based on the greedy criterion is the first step.
4.  **Iterating and Selecting:** Loop through the sorted data, making the greedy choice at each step if it's compatible with previous choices.
5.  **Building the Solution:** Add the selected items to your solution set.

Let's outline the process for the Activity Selection Problem in Python:

```python
# Assume activities is a list of tuples, where each tuple is (start_time, finish_time)
# Example: activities = [(1, 4), (3, 5), (0, 6), (5, 7)]

def select_activities(activities):
    # 1. Sort activities by their finish times (Greedy Choice Criterion)
    # We use a lambda function to specify sorting by the second element of the tuple (finish time)
    activities.sort(key=lambda x: x[1])

    # Initialize the list of selected activities.
    # The first activity in the sorted list is always selected because it finishes earliest.
    selected_activities = []
    
    # If there are no activities, return an empty list.
    if not activities:
        return selected_activities

    # Select the first activity (it has the earliest finish time)
    selected_activities.append(activities[0])
    
    # Keep track of the finish time of the last selected activity
    last_finish_time = activities[0][1]

    # 2. Iterate through the remaining activities
    # We start from the second activity (index 1) because the first one is already selected.
    for i in range(1, len(activities)):
        current_activity = activities[i]
        current_start_time = current_activity[0]
        current_finish_time = current_activity[1]

        # 3. Make the greedy choice: If the current activity's start time
        # is greater than or equal to the finish time of the last selected activity,
        # then it's compatible and we select it.
        if current_start_time >= last_finish_time:
            selected_activities.append(current_activity)
            # Update the finish time of the last selected activity
            last_finish_time = current_finish_time

    return selected_activities

# Example usage:
# activities_list = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)]
# result = select_activities(activities_list)
# print("Selected activities:", result)
# print("Number of activities:", len(result))
```

**Important Considerations for Implementation:**

*   **Sorting:** The efficiency of your greedy algorithm often depends on how quickly you can sort the data. Python's built-in `sort()` is very efficient (Timsort, typically O(N log N)).
*   **Compatibility Check:** The logic for checking if the current choice is compatible with previous ones is crucial.
*   **Edge Cases:** Always consider empty input lists or single-item lists.

**Connecting to Course Outcomes:**

*   **CO3 (Use effective algorithms, translate algorithms):** This code snippet directly demonstrates translating the greedy strategy for activity selection into Python.
*   **CO1 (Utilize computing):** Shows how computing power can implement this strategy to solve a scheduling problem.

## 6. When to Use a Greedy Algorithm?

As we've seen, greedy algorithms are powerful, but not universally applicable. You should consider a greedy approach when:

*   **The problem exhibits the greedy choice property:** You can make a locally optimal choice that does not preclude reaching a global optimum.
*   **The problem exhibits optimal substructure:** The optimal solution to the problem contains optimal solutions to its subproblems.
*   **Efficiency is paramount:** Greedy algorithms are often simpler and faster than other techniques like dynamic programming or brute force.

**A quick sanity check:** Before implementing a greedy algorithm, ask yourself: "If I make the best choice *now*, am I sure this won't lead me into a situation where I *could have* gotten a better overall solution by making a different, perhaps locally worse, choice earlier?" If the answer is "yes, I'm sure," then greedy is a good candidate. If the answer is "maybe not," you might need to explore other techniques.

**Referencing Our Texts:**

Donald Treffinger and colleagues, in "Creative Problem Solving," highlight the importance of exploring multiple solution paths. While greedy is one path, recognizing its limitations encourages considering alternatives if the problem doesn't fit the greedy mold.

## 7. Common Pitfalls and How to Avoid Them

*   **Assuming Greedy Always Works:** This is the biggest pitfall. Always verify the greedy choice property and optimal substructure for your specific problem. The fictional currency example is a stark reminder!
*   **Incorrect Greedy Criterion:** Choosing the wrong "best" option at each step will lead to a suboptimal solution. For example, if in activity selection you chose the activity that starts earliest instead of finishes earliest, it might block out many other shorter activities.
*   **Ignoring Compatibility:** For problems like activity selection or interval scheduling, forgetting to check if the current choice conflicts with previously selected items will break the algorithm.
*   **Off-by-One Errors:** Especially when dealing with indices or start/end times, be meticulous with your loops and comparisons.

**Quick Recall Tip:** Think of the greedy approach as a "myopic" optimization strategy. It sees the immediate benefit and acts on it. For it to be correct, this myopic view must align with the long-term goal.

## Summary

The Greedy Algorithm Approach is a powerful problem-solving technique that involves making the best possible choice at each step, hoping to arrive at a global optimum.

*   It's intuitive and often efficient.
*   It works best for problems that exhibit the **greedy choice property** and **optimal substructure**.
*   Common examples include the change-making problem (with specific coin systems) and the activity selection problem.
*   Crucially, greedy algorithms are **not always optimal**. We must carefully analyze the problem to determine if the greedy strategy is appropriate.
*   In Python, implementing greedy algorithms often involves sorting data according to the greedy criterion and then iterating, making selections based on compatibility.

Remember this: when approaching a new problem, ask yourself if a greedy strategy could apply. If it seems like it might, try to articulate the greedy choice and then test its validity with examples, especially edge cases where it might fail. This iterative process of understanding, hypothesizing, and testing is at the heart of algorithmic thinking.

---

## Sample Questions and Answers

**Q1. (Conceptual) What is the fundamental difference between a greedy algorithm and dynamic programming?**

**Answer:**
The fundamental difference lies in how they make decisions. A **greedy algorithm** makes the locally optimal choice at each step, hoping that this sequence of choices leads to a global optimum. It commits to a choice immediately. **Dynamic programming**, on the other hand, explores multiple possibilities by solving subproblems and storing their solutions. It typically builds up a solution from smaller subproblems, making decisions based on the optimal solutions to those subproblems. If a problem exhibits optimal substructure but *not* the greedy choice property, dynamic programming is often the better approach.

**Q2. (Application) You are given a set of tasks, each with a duration and a deadline. You want to complete as many tasks as possible before their deadlines. Which greedy strategy would you employ?**

**Answer:**
The optimal greedy strategy here is to sort the tasks by their **deadlines**. Then, iterate through the sorted tasks. For each task, if it can be completed before its deadline (considering the time already spent on previous tasks), schedule it. This approach prioritizes tasks that need to be finished sooner, maximizing the chances of meeting more deadlines.

**Reasoning:** By tackling the tasks with the earliest deadlines first, you reduce the pressure on those critical tasks. If you instead prioritized the longest tasks, you might miss the deadlines for shorter, but equally important, tasks. This greedy choice (earliest deadline first) leaves more "room" in the timeline to accommodate other tasks.

**Q3. (Conceptual/Exam-Oriented) Explain why the greedy approach for making change with coins {1, 3, 4} to make 6 cents is not optimal, and what the optimal solution is.**

**Answer:**
The greedy approach for the coin set {1, 3, 4} to make 6 cents is as follows:
1.  Pick the largest coin less than or equal to 6: **4**. Remaining amount: 6 - 4 = 2.
2.  Pick the largest coin less than or equal to 2: **1**. Remaining amount: 2 - 1 = 1.
3.  Pick the largest coin less than or equal to 1: **1**. Remaining amount: 1 - 1 = 0.
This results in using **3 coins** (4, 1, 1).

The **optimal solution** is to use **2 coins**: **3 and 3**. (3 + 3 = 6).

The greedy approach fails because picking the largest coin (4) at the first step, while locally optimal for that step, prevents us from making a better overall selection. The subproblem (making 2 cents with {1, 3, 4}) is solved greedily with two 1s, but an alternative choice (using 3 instead of 4 initially) leads to a better overall solution. This problem lacks the greedy choice property for this specific coin set.

**Q4. (Application/Implementation) You need to write a Python function `max_activities(activities)` where `activities` is a list of tuples `(start_time, finish_time)`. The function should return a list of selected non-overlapping activities that maximizes the number of selected activities.**

**Answer:**

```python
def max_activities(activities):
    """
    Selects the maximum number of non-overlapping activities using a greedy approach.

    Args:
        activities: A list of tuples, where each tuple is (start_time, finish_time).

    Returns:
        A list of selected activities (tuples).
    """
    # 1. Sort activities by their finish times. This is the greedy choice criterion.
    # The lambda function tells sort to use the second element (index 1) of each tuple for sorting.
    activities.sort(key=lambda x: x[1])

    selected_activities = []

    # If there are no activities, we can't select any.
    if not activities:
        return selected_activities

    # 2. Select the first activity (which has the earliest finish time).
    selected_activities.append(activities[0])
    
    # Keep track of the finish time of the most recently selected activity.
    last_finish_time = activities[0][1]

    # 3. Iterate through the rest of the sorted activities.
    for i in range(1, len(activities)):
        current_activity = activities[i]
        current_start_time = current_activity[0]
        current_finish_time = current_activity[1] # Not strictly needed in loop, but good for clarity

        # 4. Make the greedy choice: If the current activity starts AFTER or AT
        # the same time the last selected activity finishes, it's compatible.
        if current_start_time >= last_finish_time:
            selected_activities.append(current_activity)
            # Update the finish time of the last selected activity for the next iteration.
            last_finish_time = current_finish_time

    return selected_activities

# Example Usage:
# tasks = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)]
# result = max_activities(tasks)
# print("Selected Activities:", result)
# print("Number of activities:", len(result))
```

**Reasoning for the Code:**
The code first sorts the activities by their finish times. This is the core greedy step: choosing the activity that frees up the resource (or person) earliest. It then initializes the `selected_activities` list with the very first activity from the sorted list (as it's guaranteed to be part of *some* optimal solution due to finishing earliest). The loop then iterates through the remaining activities, checking if an activity's start time is compatible (i.e., greater than or equal to) the finish time of the last activity added to `selected_activities`. If compatible, it's added, and `last_finish_time` is updated. This systematically builds the maximal set of non-overlapping activities.
