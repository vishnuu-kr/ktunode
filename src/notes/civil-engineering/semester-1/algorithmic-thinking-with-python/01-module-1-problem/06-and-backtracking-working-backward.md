---
title: "and Backtracking (Working backward)."
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 1: PROBLEM"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912b50"
status: "completed"
scrapedAt: "2026-05-20T18:27:58.980Z"
---
# Module 1: PROBLEM – Topic and Backtracking (Working Backward)

Welcome, everyone, to our journey into the fascinating world of Algorithmic Thinking with Python! In this first module, we're laying the foundation by diving deep into the very essence of problems and how we approach solving them. Today, we're going to explore a powerful problem-solving strategy: **working backward**. This isn't just about undoing things; it's a systematic way to tackle complex challenges by starting from the desired outcome and tracing our steps back to the initial conditions.

You'll find that understanding how to approach problems is central to our entire course. It directly supports our **Course Outcome 1 (CO1)**, which is to utilize computing as a model for solving real-world problems. By learning different problem-solving techniques, we equip ourselves to see how computational thinking can be applied to just about anything! We'll also be hitting **CO2** hard today – articulating a problem before solving it. Working backward forces us to clearly define what our "end goal" is, which is a crucial first step in preparing a clear and accurate model.

This technique is inspired by foundational ideas in problem-solving, like those beautifully articulated by George Pólya in his classic, *How to Solve It*. Pólya emphasizes understanding the problem, devising a plan, carrying out the plan, and looking back. Working backward is a brilliant way to *devise a plan*.

---

## Understanding the Essence of "Working Backward"

So, what exactly *is* working backward? Imagine you've arrived at a beautiful destination, say, a hidden waterfall. You remember the journey: you started at your car, walked through a forest, crossed a stream, and finally arrived. If you wanted to recreate that exact path, where would be the best place to start planning? Would you try to remember every single twist and turn from the beginning? Or would it be easier to think, "Okay, the waterfall is here. What was the *last* step I took to get here? Ah, I crossed a stream. So, before that, I must have been on the other side of the stream. What was the step before *that*?"

This is the core idea of working backward. Instead of starting with the given information and trying to reach the solution (which is often called a "forward-checking" or "forward-reasoning" approach), we start with the *goal* or the *desired outcome* and work our way back to the initial conditions. It's like unwrapping a present – you start with the outer paper and peel it off layer by layer until you get to the gift itself.

This is incredibly useful when the desired outcome is clearly defined, but the starting point might be ambiguous or the path to get there isn't immediately obvious.

### Connecting to Our Learning Outcomes:

*   **CO1 (Utilize computing as a model):** Working backward is a computational thinking strategy. We can model this process in Python to solve problems.
*   **CO2 (Articulate a problem):** To work backward, you *must* know your final state. This forces you to define the problem's end goal clearly.
*   **CO3 (Use effective algorithms):** Working backward often leads to very efficient algorithms, especially for problems with a clear target. We'll see how this translates to Python code.
*   **CO4 (Interpret problem-solving strategies):** This is a direct exploration of a problem-solving strategy. We'll learn how to interpret when this method is most effective.

---

## When is Working Backward Most Effective?

This isn't a magic bullet for every problem, but it shines in specific situations. Think about these scenarios:

*   **Problems with a Clear Target State:** If you know exactly what the final result should look like, working backward is a natural fit. For instance, if you need to reach a specific number through a series of mathematical operations, you can start with that number and reverse the operations.
*   **Problems Where the Reverse Operation is Simple:** If you can easily reverse the steps taken to reach the goal, this method becomes very powerful. For example, if a step involves adding 5, the reverse step is subtracting 5.
*   **Optimization Problems:** Sometimes, working backward helps us find the most efficient path to a solution by eliminating possibilities as we go.
*   **Games and Puzzles:** Many puzzles, like Sudoku or certain board games, benefit greatly from this strategy. You look at the final configuration and deduce what must have happened before.

Donald Treffinger and colleagues, in *Creative Problem Solving*, talk about divergent and convergent thinking. Working backward is often a **convergent** thinking process – we start broad (the goal) and narrow down to a specific starting point or sequence.

---

## Illustrative Examples: Making it Real!

Let's move beyond abstract definitions and see this in action with relatable examples.

### Example 1: The Mystery of the Missing Cookies

Imagine your little sibling ate the last cookie from the jar. You know the cookie is gone, and you want to figure out who took it and when. You ask your sibling: "Where were you an hour ago?" They say, "I was in the living room playing." You know you last saw the cookie in the kitchen. So, what's the backward reasoning?

*   **Goal:** Find out who ate the cookie.
*   **Last Known State:** Cookie was in the jar.
*   **Immediate Preceding Event (Hypothesized):** Someone took the cookie.
*   **Working Backward:**
    *   "Where was the cookie just before it was eaten?" (It was in the jar).
    *   "Who was in the kitchen *after* the cookie was last seen in the jar, and *before* it disappeared?"
    *   Your sibling was in the kitchen, then moved to the living room.
    *   You check the living room and find cookie crumbs on their shirt.
*   **Conclusion:** Your sibling likely ate the cookie.

See? We didn't start by checking everyone in the house chronologically. We focused on the "cookie disappearance event" and worked backward to pinpoint the most likely culprit.

### Example 2: Planning a Surprise Party

Let's say you want to throw a surprise birthday party for your friend. You know the desired outcome: a fun party on Saturday evening at 7 PM.

*   **Goal:** Surprise party on Saturday, 7 PM.
*   **Working Backward:**
    *   What needs to happen *right before* 7 PM? Guests arrive and the guest of honor is surprised!
    *   What needs to happen *before* guests arrive? Decorations are up, food is ready, music is playing, and guests are hidden.
    *   What needs to happen *before* food is ready and decorations are up? You need to buy supplies and prepare food.
    *   What needs to happen *before* buying supplies? You need a guest list and a budget.
    *   What needs to happen *before* all this? You need to decide on the theme and location!

By working backward from the "party happens" state, you can create a chronological to-do list. This ensures you don't miss crucial steps like sending invitations or buying ingredients.

### Example 3: A Simple Mathematical Puzzle

Let's consider a numerical problem.

**Problem:** You are given a number. You can either double it or add 1. Starting with the number 3, can you reach the number 10 in exactly 3 steps?

*   **Goal:** Reach 10.
*   **Steps Allowed:** Double (x2) or Add 1 (+1).
*   **Start:** 3.
*   **Number of Steps:** 3.

If we try forward:
*   3 -> 3*2 = 6 (Step 1)
*   6 -> 6+1 = 7 (Step 2)
*   7 -> 7*2 = 14 (Step 3) - Too high.

Let's try another forward path:
*   3 -> 3+1 = 4 (Step 1)
*   4 -> 4*2 = 8 (Step 2)
*   8 -> 8+1 = 9 (Step 3) - Not 10.

This can get tedious! Now, let's use **working backward**:

*   **Target:** 10.
*   **Step 3 (Reverse):** What number, when either doubled or added 1, results in 10?
    *   If the last step was adding 1, the previous number was 10 - 1 = 9.
    *   If the last step was doubling, the previous number was 10 / 2 = 5.
    *   So, the number before the last step was either 9 or 5. This is our state after Step 2.

*   **Step 2 (Reverse, from 9):** What number, when either doubled or added 1, results in 9?
    *   Reverse of +1: 9 - 1 = 8.
    *   Reverse of x2: 9 / 2 = 4.5 (Not a whole number, so unlikely in this context, but we keep it in mind if fractions were allowed). Let's stick to 8.
    *   So, after Step 1, we could have been at 8.

*   **Step 2 (Reverse, from 5):** What number, when either doubled or added 1, results in 5?
    *   Reverse of +1: 5 - 1 = 4.
    *   Reverse of x2: 5 / 2 = 2.5 (Again, let's consider 4).
    *   So, after Step 1, we could have been at 4.

*   **Step 1 (Reverse, from 8):** What number, when either doubled or added 1, results in 8?
    *   Reverse of +1: 8 - 1 = 7.
    *   Reverse of x2: 8 / 2 = 4.
    *   So, before any steps, we could have been at 7 or 4.

*   **Step 1 (Reverse, from 4):** What number, when either doubled or added 1, results in 4?
    *   Reverse of +1: 4 - 1 = 3.
    *   Reverse of x2: 4 / 2 = 2.
    *   So, before any steps, we could have been at 3 or 2.

Now, we compare our possible starting points with the actual start, which is 3.
We found a path:
*   If we were at 4 after Step 1 (from 5), and 5 came from 10/2 (reverse of x2).
*   If we were at 5 after Step 2 (from 10/2).
*   And 5 could come from 4+1 (reverse of +1) or 2.5*2 (reverse of x2). Let's use 4+1. So, after Step 1, we were at 4.
*   Where could 4 come from? 3+1 or 2*2. Since we start at 3, we must have done 3+1 to get to 4.

Let's trace forward with this backward-derived path:
*   Start: 3
*   Step 1: 3 + 1 = 4 (Reverse of 4-1=3)
*   Step 2: 4 + 1 = 5 (Reverse of 5-1=4)
*   Step 3: 5 * 2 = 10 (Reverse of 10/2=5)

We found a way! The sequence of operations is +1, +1, x2.
This is a great example of how working backward helps us reconstruct a process. It's like a detective retracing the victim's last known movements.

**Exam Tip:** When working backward, always consider *both* possible reverse operations if there are two (e.g., if the forward step was multiply by 2, the backward step is divide by 2; if the forward step was add 1, the backward step is subtract 1). You'll often find multiple potential paths.

---

## Implementing Working Backward in Python

How do we translate this into code? The most natural way to implement "working backward" is often using **recursion**.

Remember recursion? It's when a function calls itself. Think of it like a set of Russian nesting dolls: to open the smallest doll, you have to open the next smallest, and so on.

When working backward, the "problem" we're trying to solve is "Can we reach the target from this current number?" The recursive function will essentially check this.

Let's try to implement the "reach 10 from 3" problem with recursion.

```python
def can_reach_target_backward(current_value, target, steps_remaining):
    # Base Cases: When do we stop?

    # 1. Success! We reached the target exactly
    if current_value == target and steps_remaining == 0:
        print(f"Success! Reached {target} with 0 steps remaining.")
        return True

    # 2. Failure: We ran out of steps before reaching the target
    if steps_remaining < 0:
        # print(f"Failed: Ran out of steps at {current_value}") # uncomment for detailed trace
        return False

    # 3. Failure: We overshot the target (and can't possibly recover by going backward)
    # This specific condition depends on the problem. For our number puzzle,
    # if we are working *forward*, this check is important.
    # When working *backward*, the logic is slightly different:
    # we check if the END value is reachable FROM the START value.
    # Let's rephrase the recursive function to be more "backward" oriented.

    # A better approach for 'working backward' might be to generate ALL possible previous states
    # and check if any of them lead to the start.

    # Let's refine the recursive structure for clarity, thinking about the *goal*
    # and trying to find a path FROM the start. This is often implemented recursively
    # by checking if the START can lead to the TARGET.
    # However, the *strategy* is "working backward" by exploring reverse operations.

    # Let's reconsider the mathematical puzzle from a slightly different angle to showcase the *strategy*
    # in a recursive function. We want to see if the TARGET can be reached FROM the START
    # by applying forward operations. The *thinking* is backward.

    # Let's try again with the actual puzzle structure:
    # Function definition: can_reach(start, target, steps_left)

    if start == target and steps_left == 0:
        return True
    if steps_left <= 0: # If we run out of steps or have negative steps
        return False

    # Explore possible forward moves from 'start' and see if they can reach 'target'
    # This is where the 'thinking backward' comes in: we are checking
    # if any *previous* state could lead to the current one.
    # But the code structure often looks like forward exploration checking against the target.

    # Let's implement the core idea: from a given number, what are the numbers
    # that could have led to it?

    # Revised approach: a function that checks if a target is reachable from a start in N steps.
    # The logic *behind* this check can be 'working backward'.

    # Let's simplify and focus on the *concept* of working backward with a recursive function
    # that models the state transitions.
```

This is where it can get a bit confusing because the *strategy* is working backward, but the *code implementation* for this specific puzzle might look like it's going forward, but it's essentially exploring the *tree* of possibilities that *could have led* to the target.

A more direct Python representation of "working backward" might involve a function that tries to *undo* operations to reach the start.

```python
def can_reach_start_from_target_backward(current, start, steps_taken_so_far, max_steps):
    # Base Cases

    # 1. Success: We have reached the starting value
    if current == start:
        print(f"Success: Reached start {start} after {steps_taken_so_far} steps.")
        return True

    # 2. Failure: We have used too many steps
    if steps_taken_so_far >= max_steps:
        # print(f"Failed: Exceeded max steps ({max_steps}) at value {current}") # uncomment for detailed trace
        return False

    # 3. Failure: We have gone too far past the start in a way we can't recover
    # For our puzzle (x2, +1), if we're working backward from a target, say 10,
    # and we are trying to reach 3.
    # If current value is LESS than start (e.g., current=2, start=3) and we only have reverse operations of *division* and *subtraction*,
    # it might be impossible. BUT, this is tricky because reverse operations are /2 and -1.
    # So, if current < start, we can still potentially reach start by adding 1.
    # The real failure would be if current < start AND the only reverse operation available was division, and current is not divisible by 2.

    # Let's focus on the reverse operations:
    # If the last forward step was multiply by 2, the reverse is divide by 2.
    # If the last forward step was add 1, the reverse is subtract 1.

    # Try reversing the 'divide by 2' operation (i.e., multiply by 2)
    # BUT, only if the current number is even (as forward step was multiply by 2)
    # OR if the forward step was multiply by 2, we can always try the reverse.
    # The constraint is from the *forward* operation.
    # If we are working backwards, we are reversing.
    # The forward steps were x2, +1.
    # The reverse steps are /2, -1.

    # For the reverse operation of /2, the *forward* operation was x2.
    # This means that if we arrive at 'current' by reversing /2,
    # the previous number must have been 'current * 2'.
    # There's no restriction on 'current' for this.
    possible_prev_from_div = current * 2
    if can_reach_start_from_target_backward(possible_prev_from_div, start, steps_taken_so_far + 1, max_steps):
        return True

    # For the reverse operation of -1, the *forward* operation was +1.
    # This means that if we arrive at 'current' by reversing -1,
    # the previous number must have been 'current + 1'.
    # There's no restriction on 'current' for this.
    possible_prev_from_sub = current + 1
    if can_reach_start_from_target_backward(possible_prev_from_sub, start, steps_taken_so_far + 1, max_steps):
        return True

    return False

# Let's test this refined backward function for the puzzle:
# From start=3, can we reach target=10 in 3 steps?
# So we are REVERSING from 10, trying to reach 3.
# The function name should reflect working backwards.

def solve_puzzle_backward(current_state, initial_state, steps_remaining):
    # Base case 1: Success! We reached the initial state
    if current_state == initial_state:
        print(f"Found a path! Reached {initial_state} from {current_state} with {steps_remaining} steps left.")
        return True

    # Base case 2: Ran out of steps or overshot in a way we can't recover
    # For this problem, if our current state is already LESS than the initial state
    # AND the only reverse operations are division and subtraction, we might not recover.
    # However, the reverse operations are actually multiplication and addition if we are building
    # from the START to the TARGET.
    # The true "working backward" is from TARGET to START using reverse operations.

    # Let's try the mathematical puzzle again, with the function designed to START from the TARGET and go to the START.
    # Forward operations: Multiply by 2, Add 1
    # Reverse operations: Divide by 2, Subtract 1

    # Let's try to reach 3 starting from 10, using reverse operations, in at most 3 steps.

    if steps_remaining < 0:
        return False # Ran out of allowed reverse steps

    # Consider reversing the 'multiply by 2' operation: This is 'divide by 2'.
    # We can only do this if the current_state is even.
    if current_state % 2 == 0:
        # If we divide current_state by 2, we are reversing the last step.
        # So, we recursively call for the state (current_state / 2) with one less step.
        if solve_puzzle_backward(current_state // 2, initial_state, steps_remaining - 1):
            print(f" (Reverse step: /2 applied to {current_state})") # Trace the reverse step
            return True

    # Consider reversing the 'add 1' operation: This is 'subtract 1'.
    # We can always do this operation.
    if current_state - 1 >= initial_state: # Ensure we don't go below the initial state if it's not allowed or helpful
        if solve_puzzle_backward(current_state - 1, initial_state, steps_remaining - 1):
            print(f" (Reverse step: -1 applied to {current_state})") # Trace the reverse step
            return True

    return False

# Testing the puzzle again: Start=3, Target=10, Max_Steps=3
# Let's call the function to work backward from Target=10 to Start=3 in 3 steps.
# print("Testing puzzle backward from 10 to 3 in 3 steps:")
# if solve_puzzle_backward(10, 3, 3):
#     print("Puzzle is solvable by working backward!")
# else:
#     print("Puzzle is not solvable by working backward.")

# The prints within the recursive function can get noisy.
# A cleaner way is to return the operations or just True/False.

# Let's re-implement `solve_puzzle_backward` to return True/False and a path if possible,
# or just focus on the True/False.

def find_path_backward(target, start, steps_allowed):
    # This function tries to find a path by working backwards from target to start.
    # It uses reverse operations: /2 (if even) and -1.

    # Base Case 1: We've reached the start. Success!
    if target == start:
        return [True, []] # Indicate success and an empty path (for this step)

    # Base Case 2: We've run out of allowed steps. Failure.
    if steps_allowed <= 0:
        return [False, []] # Indicate failure

    # Try reversing the 'multiply by 2' operation (which is divide by 2)
    if target % 2 == 0:
        # Recursively call for the state (target // 2)
        reached_start, path_from_prev = find_path_backward(target // 2, start, steps_allowed - 1)
        if reached_start:
            # If the recursive call was successful, prepend the reverse operation
            return [True, path_from_prev + [f"({target} / 2)"]]

    # Try reversing the 'add 1' operation (which is subtract 1)
    # We need to ensure that subtracting 1 doesn't take us "too far" below the start if the start is our goal.
    # However, the recursive call itself will handle if it reaches 'start' or not.
    # The condition `target - 1 >= start` might prune valid paths too early if intermediate steps can go below start.
    # Let's keep it simple:
    reached_start, path_from_prev = find_path_backward(target - 1, start, steps_allowed - 1)
    if reached_start:
        # If the recursive call was successful, prepend the reverse operation
        return [True, path_from_prev + [f"({target} - 1)"]]

    # If neither reverse operation leads to the start
    return [False, []]

# Testing the puzzle: Start=3, Target=10, Max_Steps=3
# We want to reach 3 starting from 10 by using reverse operations, within 3 steps.
# print("\nTesting puzzle backward using find_path_backward:")
# success, reverse_operations = find_path_backward(10, 3, 3)
#
# if success:
#     print(f"Success! Path found working backward. Reverse operations: {reverse_operations}")
#     # To get the forward operations, we reverse the list and invert the operations.
#     forward_operations = [op.replace('/', '#').replace('-', '+').replace('#', '2') for op in reversed(reverse_operations)]
#     # This part of converting back to forward operations requires careful string manipulation or storing operation types.
#     # Let's just focus on the backward path finding for now.
# else:
#     print("Failure: Could not find a path working backward.")


# **Key takeaway for coding:** Working backward often maps well to recursion,
# where the base cases are reaching the start state or exhausting possibilities (steps, invalid states).
# Each recursive step explores a reverse operation.
# This supports **CO3 (Use effective algorithms)** by showing a recursive approach and **CO4 (Interpret problem-solving strategies)** by demonstrating the backward strategy.
```

Remember how we discussed that working backward helps us find a plan? In coding, especially with recursion, it helps us define the **state transitions** and **base cases** required for an algorithm to correctly explore the solution space. This is fundamental to developing algorithms.

---

## Potential Pitfalls and How to Avoid Them

While powerful, working backward isn't foolproof. Here are some common traps:

1.  **Ambiguous "Last Step":** If the problem doesn't have a clearly defined "last step" or the reverse operation isn't unique, working backward can become confusing.
    *   **Solution:** Ensure you can precisely define the goal state and that the reverse operation(s) are clear and deterministic. If there are multiple valid reverse operations (like in our number puzzle), you must explore all of them, often recursively.

2.  **Not Considering All Reverse Paths:** If you stop after finding just one successful backward path, you might miss a simpler or more efficient path.
    *   **Solution:** Use recursion or iterative methods that systematically explore all valid reverse steps until the starting condition is met or all paths are exhausted. This is crucial for problems that might have multiple solutions.

3.  **Getting Lost in the Details (or the Numbers!):** When working backward with complex numbers or many steps, it's easy to make calculation errors.
    *   **Solution:** Keep your working clear. Use a systematic approach, like listing out the numbers and the reverse operations. In programming, this means well-structured code and potentially debugging print statements (though use them judiciously!).

4.  **Confusing Forward and Backward Operations:** This is a common mistake when implementing. Double-check your reverse operations.
    *   **Solution:** Clearly write down the forward operations and their corresponding reverse operations before coding. For example:
        *   Forward: `+ k` -> Backward: `- k`
        *   Forward: `* k` -> Backward: `/ k` (and check for divisibility)
        *   Forward: `Apply Function F` -> Backward: `Apply Inverse Function F_inverse`

**Exam Reminder:** Always clarify if the problem expects *a* solution or *all* solutions, or perhaps the *shortest* solution. This will dictate how thoroughly you need to explore paths when working backward.

---

## Summary: The Power of Unwinding

Working backward is a potent problem-solving technique that involves starting with the desired outcome and tracing the steps needed to achieve it. It's particularly effective for problems with a clear target state and simple reverse operations.

*   **Key Idea:** Start from the end, go to the beginning.
*   **Applications:** Puzzles, planning, optimization, and any scenario where the goal is well-defined.
*   **Connection to Computing:** Maps naturally to recursive algorithms, where each step explores a reverse transformation.
*   **Supports:** CO1, CO2, CO3, and CO4. It helps in modeling problems (CO2), finding efficient algorithms (CO3), and understanding problem-solving strategies (CO4).

By mastering this technique, you're not just learning a trick; you're developing a powerful analytical tool that will serve you well in computing and beyond. Remember Pólya's advice: "If you can't solve a problem, then there is an easier problem you can solve: first solve the easier problem, then try to solve the more difficult problem." Working backward is a way to break down that difficult problem into a series of smaller, manageable reverse steps.

---

## Sample Questions and Answers

Here are some questions to test your understanding, ranging from conceptual to exam-style.

**Conceptual Questions:**

1.  **Q:** In your own words, explain the core principle of the "working backward" problem-solving strategy.
    **A:** Working backward is a problem-solving strategy where you start from the desired final outcome or goal and logically deduce the preceding steps or conditions that must have occurred to reach that outcome. Instead of moving from the initial state to the final state, you reverse the process, moving from the final state back to the initial state.

2.  **Q:** When would you typically choose to use the "working backward" strategy over a "forward-checking" approach? Provide a brief example.
    **A:** You would choose "working backward" when the goal is clearly defined, but the starting conditions or the path to the goal are not immediately obvious, or when the reverse operations are simpler to perform than the forward ones. For example, planning a surprise party. The goal is clear (party on Saturday 7 PM), and working backward helps you list all the necessary preceding tasks (invitations, decorations, food prep, etc.) in a logical order. A forward approach might be trying to remember what you need to do day-by-day, which can be less structured for complex plans.

3.  **Q:** How does the "working backward" strategy relate to recursion in computer programming?
    **A:** The "working backward" strategy often maps well to recursive algorithms. In recursion, a function calls itself to solve smaller instances of the same problem. When working backward, each step involves applying a reverse operation. A recursive function can embody this by exploring these reverse operations. The base cases of the recursion typically represent reaching the initial state (success) or exhausting all possible reverse paths (failure), similar to how you'd stop when you've traced back to the beginning or determined it's impossible.

**Exam-Oriented Questions:**

4.  **Q:** Consider the following puzzle: Start with the number 5. You can either double the number or add 3. Can you reach the number 21 in exactly 3 steps? Use the "working backward" strategy to solve this. Show your steps.
    **A:**
    *   **Goal:** Reach 21.
    *   **Allowed Forward Operations:** `* 2`, `+ 3`.
    *   **Allowed Reverse Operations:** `/ 2` (if even), `- 3`.
    *   **Steps Allowed:** 3.

    *   **Step 1 (Working Backward from 21):**
        *   Reverse of `+ 3` is `- 3`: `21 - 3 = 18`. (This means the number before the last step could have been 18).
        *   Reverse of `* 2` is `/ 2`: `21 / 2 = 10.5` (Not a whole number, so this reverse step is not applicable in this puzzle context as we assume integer operations).
        *   So, after 2 steps, the number must have been 18.

    *   **Step 2 (Working Backward from 18):**
        *   Reverse of `+ 3` is `- 3`: `18 - 3 = 15`. (This means the number before these two steps could have been 15).
        *   Reverse of `* 2` is `/ 2`: `18 / 2 = 9`. (This means the number before these two steps could have been 9).
        *   So, after 1 step, the number could have been 15 or 9.

    *   **Step 3 (Working Backward from 15 and 9):**
        *   **From 15:**
            *   Reverse of `+ 3` is `- 3`: `15 - 3 = 12`. (This would be the starting number, but we need to reach 5).
            *   Reverse of `* 2` is `/ 2`: `15 / 2 = 7.5` (Not applicable).
        *   **From 9:**
            *   Reverse of `+ 3` is `- 3`: `9 - 3 = 6`. (This would be the starting number, but we need to reach 5).
            *   Reverse of `* 2` is `/ 2`: `9 / 2 = 4.5` (Not applicable).

    *   **Analysis:**
        Let's re-evaluate the reverse steps and starting point. We need to reach **5**.
        Working backward from 21:
        *   Possible previous: 18 (from 21 - 3)
        *   Possible previous: (21 / 2 = 10.5 - invalid)

        So, after 2 steps (1 reverse step applied), the value was 18.
        Now, from 18 (after 1 reverse step):
        *   Possible previous: 15 (from 18 - 3)
        *   Possible previous: 9 (from 18 / 2)

        So, after 1 step (2 reverse steps applied), the value could be 15 or 9.
        Now, from 15 (after 2 reverse steps):
        *   Possible previous: 12 (from 15 - 3)
        *   Possible previous: (15 / 2 - invalid)

        Now, from 9 (after 2 reverse steps):
        *   Possible previous: 6 (from 9 - 3)
        *   Possible previous: (9 / 2 - invalid)

        So, after 3 reverse steps (meaning 3 forward steps were taken), the possible starting numbers are 12 and 6.
        **Since neither 12 nor 6 is our starting number 5, we cannot reach 21 from 5 in exactly 3 steps using these operations.**

    *   **Verification (Forward Check for illustration):**
        *   5 -> 5*2 = 10 -> 10+3 = 13 -> 13*2 = 26 (Too high)
        *   5 -> 5+3 = 8 -> 8*2 = 16 -> 16+3 = 19 (Close, but not 21)
        *   5 -> 5+3 = 8 -> 8+3 = 11 -> 11*2 = 22 (Too high)
        *   5 -> 5*2 = 10 -> 10*2 = 20 -> 20+3 = 23 (Too high)

    **Conclusion:** No, you cannot reach 21 from 5 in exactly 3 steps.

5.  **Q:** Write a conceptual Python function `solve_backward(current_value, target_value, steps_remaining)` that illustrates the "working backward" strategy for a problem where the allowed forward operations are `multiply by 2` and `add 1`. The function should return `True` if the `target_value` can be reached from `current_value` in `steps_remaining` steps, and `False` otherwise. Assume the function will be called with `current_value` being the target and `target_value` being the start.
    **A:**
    ```python
    def solve_backward(current_value, start_value, steps_remaining):
        # Base Case 1: Success! We have reached the start_value.
        if current_value == start_value:
            return True

        # Base Case 2: Failure! Ran out of steps or overshot in an unrecoverable way.
        # For this problem (reverse ops are /2 and -1), if current_value < start_value,
        # we might not be able to reach start_value anymore if only /2 was available.
        # However, -1 can always be reversed by +1.
        # A safer general check: if steps_remaining <= 0 and current_value != start_value, it's failure.
        if steps_remaining <= 0:
            return False

        # Explore reverse operations:
        # The forward operations were *2 and +1.
        # The reverse operations are /2 and -1.

        # Try reversing the '+1' operation (which is '-1')
        # We can always subtract 1.
        # We check if calling solve_backward with (current_value - 1) leads to success.
        if solve_backward(current_value - 1, start_value, steps_remaining - 1):
            return True

        # Try reversing the '*2' operation (which is '/2')
        # This is only possible if current_value is even.
        if current_value % 2 == 0:
            # We check if calling solve_backward with (current_value // 2) leads to success.
            if solve_backward(current_value // 2, start_value, steps_remaining - 1):
                return True

        # If neither reverse operation leads to the start_value
        return False

    # Example Usage:
    # Can we reach 3 from 10 in 3 steps (working backward from 10 to 3)?
    # print(solve_backward(10, 3, 3)) # Expected: True
    #
    # Can we reach 5 from 10 in 1 step?
    # print(solve_backward(10, 5, 1)) # Expected: True (10 / 2 = 5)
    #
    # Can we reach 5 from 10 in 0 steps?
    # print(solve_backward(10, 5, 0)) # Expected: False
    ```

This concludes our deep dive into "Working Backward." Keep practicing with different puzzles and problems, and you'll soon find this strategy becoming second nature!
