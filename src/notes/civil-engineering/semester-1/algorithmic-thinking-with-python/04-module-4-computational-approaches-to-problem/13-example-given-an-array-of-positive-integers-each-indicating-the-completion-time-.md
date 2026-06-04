---
title: "- Example: Given an array of positive integers each indicating the completion time for a task, find the maximum number of tasks that can be completed in the limited amount of time that you have."
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 4: COMPUTATIONAL APPROACHES TO PROBLEM"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912b8a"
status: "completed"
scrapedAt: "2026-05-20T18:28:37.396Z"
---
# Module 4: Computational Approaches to Problems

## Topic: Maximizing Tasks within a Time Limit - A Greedy Approach

Welcome, everyone! In this module, we're diving into the heart of **computational thinking** and how we can use it to tackle real-world challenges. Today, we're going to look at a very practical problem: **Given a set of tasks, each with a specific completion time, and a total time limit, how can we find the maximum number of tasks we can complete?**

Think about it like this: You have a busy Saturday. You have a list of errands: grocery shopping (30 minutes), picking up dry cleaning (10 minutes), visiting the bank (15 minutes), and meeting a friend for coffee (45 minutes). You only have 1 hour (60 minutes) of free time. Which tasks should you prioritize to get the most done? This is exactly the kind of problem we can solve using a structured, computational approach.

This problem directly ties into several of our **Course Outcomes**:

*   **CO1 (Utilize computing as a model for solving real-world problems):** This entire module is about demonstrating this. We're taking a real-life scenario and modeling it computationally.
*   **CO2 (Articulate and model a problem):** Before we write any code, we need to clearly understand what we're being asked. What are the inputs? What's the desired output? How do we represent the information?
*   **CO3 (Use effective algorithms and translate them into programs):** This is where the "how-to" comes in. We'll figure out a strategy (an algorithm) and then see how to implement it in Python.
*   **CO4 (Interpret problem-solving strategies):** We’ll be exploring *why* a particular strategy works and how it aligns with computational thinking principles.

### Understanding the Problem: Inputs, Outputs, and Constraints

Let's formalize our problem statement, as George Pólya, in his seminal work "How to Solve It," emphasizes the importance of understanding the problem before attempting a solution.

**Problem:** Given an array (or list) of positive integers, where each integer represents the time required to complete a specific task, and a total time limit, find the maximum number of tasks that can be completed within this limit.

*   **Input:**
    *   `task_completion_times`: A list of positive integers (e.g., `[10, 30, 15, 45]`).
    *   `time_limit`: A positive integer representing the total available time (e.g., `60`).

*   **Output:**
    *   The maximum number of tasks that can be completed.

*   **Constraint:** We cannot do a fraction of a task. We either complete a task or we don't. The total time spent on completed tasks must not exceed the `time_limit`.

### Developing a Strategy: The Power of "Greedy"

Now, how do we go about solving this? We have a limited resource (time) and we want to maximize something (the number of tasks). This often points towards what we call a **Greedy Algorithm**.

What does "greedy" mean in this context? A greedy algorithm makes the locally optimal choice at each step with the hope of finding a global optimum. It's like picking the easiest or quickest thing first, believing that this will lead to the best overall outcome.

Let's revisit our Saturday errands: `[10, 15, 30, 45]` minutes, with a `60` minute limit.
If we just pick tasks in the order they are given:
1.  Task 1 (30 minutes): Time remaining = 60 - 30 = 30 minutes. Tasks completed = 1.
2.  Task 2 (15 minutes): Time remaining = 30 - 15 = 15 minutes. Tasks completed = 2.
3.  Task 3 (45 minutes): We only have 15 minutes left, so we can't do this task.

In this arbitrary order, we completed 2 tasks. Is this the maximum? What if we picked differently?

Consider the strategy: **"Always pick the shortest task that we can still complete."** This is the core idea of a greedy approach for this specific problem. Why is this likely to work? Because by finishing shorter tasks first, we leave more time available for potentially more tasks later. It’s about being efficient with our limited resource.

Let's apply this greedy strategy to our errands:
*   **Task times:** `[10, 15, 30, 45]` minutes.
*   **Time limit:** `60` minutes.

**Step 1: Sort the tasks by completion time.**
This is crucial for our greedy strategy. We want to consider the quickest tasks first.
Sorted times: `[10, 15, 30, 45]`

**Step 2: Iterate through the sorted tasks and pick them if we have enough time.**

*   **Consider task 1 (10 minutes):**
    *   Current time spent = 0. Time limit = 60.
    *   Can we do it? Yes, 10 <= 60.
    *   Pick task 1.
    *   Time spent = 10 minutes. Tasks completed = 1.
    *   Time remaining = 60 - 10 = 50 minutes.

*   **Consider task 2 (15 minutes):**
    *   Current time spent = 10. Time limit = 60.
    *   Can we do it? Yes, 10 (current) + 15 (task time) <= 60, or more simply, is 15 <= 50 (time remaining)? Yes.
    *   Pick task 2.
    *   Time spent = 10 + 15 = 25 minutes. Tasks completed = 2.
    *   Time remaining = 50 - 15 = 35 minutes.

*   **Consider task 3 (30 minutes):**
    *   Current time spent = 25. Time limit = 60.
    *   Can we do it? Yes, is 30 <= 35 (time remaining)? Yes.
    *   Pick task 3.
    *   Time spent = 25 + 30 = 55 minutes. Tasks completed = 3.
    *   Time remaining = 35 - 30 = 5 minutes.

*   **Consider task 4 (45 minutes):**
    *   Current time spent = 55. Time limit = 60.
    *   Can we do it? No, is 45 <= 5 (time remaining)? No.
    *   Do not pick task 4.

**Result:** We completed 3 tasks: the 10-minute, 15-minute, and 30-minute tasks. This is more than the 2 tasks we got with the arbitrary order! This greedy approach seems to be working.

This strategy aligns with **CO3** – we've formulated an algorithm. And it's a good example of how we can simplify a complex decision-making process into a series of smaller, manageable steps, a key aspect of **CO1**.

### Why Does the Greedy Approach Work Here?

This is a critical question for understanding **CO4** and building robust problem-solving skills. Is this greedy strategy *always* going to give us the maximum number of tasks? Yes, for this specific problem.

Let's think about it logically, as Maureen Sprankle and Jim Hubbard discuss in "Problem Solving & Programming Concepts." Suppose there's an optimal solution that doesn't pick the shortest available task at some step. Let's say the optimal solution picks task 'A' when task 'B' is shorter and also available. If we swap 'A' with 'B', we use less time (or the same amount of time if they were equal) to complete one task. This leaves us with at least as much time as before, and since we've completed one task (just a different one), we haven't decreased the number of tasks. In fact, by choosing the shorter task 'B', we might be able to fit in *even more* tasks later. This line of reasoning, known as an "exchange argument" or "proof by contradiction," is fundamental in algorithm analysis.

Essentially, by always picking the smallest task, we preserve as much of our limited time as possible for future decisions, maximizing our chances of fitting in more tasks. This makes our greedy choice a "safe" choice.

### Implementing the Algorithm in Python

Now, let's translate this strategy into Python code.

**Algorithm Steps:**

1.  **Sort:** Sort the `task_completion_times` list in ascending order.
2.  **Initialize:**
    *   `tasks_completed_count = 0`
    *   `current_time_spent = 0`
3.  **Iterate:** Loop through each `task_time` in the sorted list.
4.  **Check and Add:**
    *   If `current_time_spent + task_time <= time_limit`:
        *   Add `task_time` to `current_time_spent`.
        *   Increment `tasks_completed_count` by 1.
5.  **Return:** Return `tasks_completed_count`.

Let's write this out:

```python
def max_tasks(task_completion_times, time_limit):
    """
    Finds the maximum number of tasks that can be completed within a given time limit.

    Args:
        task_completion_times: A list of positive integers representing task completion times.
        time_limit: A positive integer representing the total available time.

    Returns:
        The maximum number of tasks that can be completed.
    """
    # Step 1: Sort the tasks by their completion times in ascending order.
    # This is the core of our greedy strategy.
    sorted_tasks = sorted(task_completion_times)

    # Step 2: Initialize variables to keep track of our progress.
    tasks_completed_count = 0
    current_time_spent = 0

    # Step 3: Iterate through each task, starting with the shortest.
    for task_time in sorted_tasks:
        # Step 4: Check if adding the current task exceeds our time limit.
        if current_time_spent + task_time <= time_limit:
            # If not, we 'greedily' choose to do this task.
            current_time_spent += task_time
            tasks_completed_count += 1
        else:
            # If adding this task would exceed the limit, we can't do it.
            # Since the tasks are sorted, any subsequent tasks will be
            # equal or longer, so we can stop considering them.
            break # Important optimization!

    # Step 5: Return the total count of tasks we were able to complete.
    return tasks_completed_count

# Example Usage:
task_times_example = [30, 15, 10, 45, 5]
total_time_example = 60
result = max_tasks(task_times_example, total_time_example)
print(f"Given tasks with times: {task_times_example}")
print(f"With a time limit of {total_time_example} minutes:")
print(f"Maximum number of tasks that can be completed: {result}")

task_times_example_2 = [20, 50, 10, 30, 25]
total_time_example_2 = 70
result_2 = max_tasks(task_times_example_2, total_time_example_2)
print(f"\nGiven tasks with times: {task_times_example_2}")
print(f"With a time limit of {total_time_example_2} minutes:")
print(f"Maximum number of tasks that can be completed: {result_2}")
```

Let's trace the first example: `task_times_example = [30, 15, 10, 45, 5]`, `time_limit = 60`.

1.  `sorted_tasks` becomes `[5, 10, 15, 30, 45]`.
2.  `tasks_completed_count = 0`, `current_time_spent = 0`.
3.  **Loop 1 (`task_time = 5`):**
    *   `0 + 5 <= 60` is True.
    *   `current_time_spent = 5`.
    *   `tasks_completed_count = 1`.
4.  **Loop 2 (`task_time = 10`):**
    *   `5 + 10 <= 60` is True.
    *   `current_time_spent = 5 + 10 = 15`.
    *   `tasks_completed_count = 2`.
5.  **Loop 3 (`task_time = 15`):**
    *   `15 + 15 <= 60` is True.
    *   `current_time_spent = 15 + 15 = 30`.
    *   `tasks_completed_count = 3`.
6.  **Loop 4 (`task_time = 30`):**
    *   `30 + 30 <= 60` is True.
    *   `current_time_spent = 30 + 30 = 60`.
    *   `tasks_completed_count = 4`.
7.  **Loop 5 (`task_time = 45`):**
    *   `60 + 45 <= 60` is False.
    *   `break` statement executes.
8.  **Return:** `tasks_completed_count` which is `4`.

So, in this case, we can complete 4 tasks: 5, 10, 15, and 30 minutes. This is a great illustration of **CO3** – taking an abstract algorithm and making it concrete in code.

This approach is efficient. Sorting takes `O(N log N)` time, where N is the number of tasks. The loop takes `O(N)` time. So, the overall time complexity is dominated by sorting, making it an efficient way to solve the problem, especially when compared to trying every possible combination of tasks (which would be computationally very expensive!).
