---
title: "Stacks and Queues - Stacks"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac29"
status: "completed"
scrapedAt: "2026-05-20T16:22:47.102Z"
---
# DATA STRUCTURES AND ALGORITHMS - MODULE 1: Basic Concepts of Data Structures - Stacks

## Topic: Stacks

**Learning Outcomes:**

*   Understand the fundamental concept of a Stack data structure.
*   Explain the Last-In, First-Out (LIFO) principle.
*   Describe the common operations associated with a Stack (push, pop, peek, isEmpty, size).
*   Implement a Stack using arrays and linked lists.
*   Apply Stacks to solve real-world problems (e.g., expression evaluation, backtracking).
*   Analyze the time complexity of Stack operations.

---

### 1. Introduction to Stacks

*   **Definition:** A stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle.  Think of a stack of plates - you can only add (push) a new plate on top, and you can only remove (pop) the top plate.

*   **LIFO Principle (Last-In, First-Out):**  The last element added to the stack is the first element removed. This is the core characteristic of a stack.

*   **Analogy:**  A stack of books, a stack of trays in a cafeteria, or the undo/redo functionality in a software application.

---

### 2. Stack Operations

*   **`push(item)`:** Adds a new element to the top of the stack.

*   **`pop()`:** Removes and returns the top element from the stack. If the stack is empty, a "stack underflow" occurs (usually handled by returning a special value like `null` or throwing an exception).

*   **`peek()`:** Returns the top element of the stack *without* removing it. If the stack is empty, it usually returns `null` or throws an exception.

*   **`isEmpty()`:**  Checks if the stack is empty. Returns `true` if empty, `false` otherwise.

*   **`size()`:** Returns the number of elements currently in the stack.

---

### 3. Stack Implementations

A stack can be implemented using either arrays or linked lists.

#### 3.1 Array Implementation

*   **Concept:** Use an array to store the elements of the stack.  A "top" pointer/index keeps track of the top element.

*   **Advantages:**
    *   Simple to implement.
    *   Efficient access to elements (though only the top element is usually accessed).
    *   Good cache performance (elements are stored contiguously in memory).

*   **Disadvantages:**
    *   Fixed size (unless dynamic arrays are used, which can be costly when resizing). Stack overflow can occur if the allocated array is fully utilized.
    *   Can waste memory if the maximum size is much larger than the typical number of elements stored.

*   **Implementation Details (Python):**

    ```python
    class StackArray:
        def __init__(self, capacity):
            self.capacity = capacity
            self.array = [None] * capacity  # Initialize with None values
            self.top = -1  # Index of the top element. -1 indicates an empty stack

        def push(self, item):
            if self.top == self.capacity - 1:
                print("Stack Overflow")
                return  # Or raise an exception
            self.top += 1
            self.array[self.top] = item

        def pop(self):
            if self.isEmpty():
                print("Stack Underflow")
                return None  # Or raise an exception
            item = self.array[self.top]
            self.array[self.top] = None # Important to clear the reference for garbage collection
            self.top -= 1
            return item

        def peek(self):
            if self.isEmpty():
                print("Stack is Empty")
                return None  # Or raise an exception
            return self.array[self.top]

        def isEmpty(self):
            return self.top == -1

        def size(self):
            return self.top + 1

    # Example usage:
    stack = StackArray(5)
    stack.push(10)
    stack.push(20)
    stack.push(30)

    print("Top element:", stack.peek())  # Output: 30
    print("Popped element:", stack.pop())  # Output: 30
    print("Size:", stack.size())  # Output: 2
    print("Is empty?", stack.isEmpty()) # Output: False
    ```

#### 3.2 Linked List Implementation

*   **Concept:** Use a linked list to store the elements of the stack. The `head` of the linked list represents the top of the stack.

*   **Advantages:**
    *   Dynamic size – no fixed capacity.  Can grow and shrink as needed.
    *   No stack overflow (limited only by available memory).

*   **Disadvantages:**
    *   Requires more memory due to the extra pointer in each node.
    *   Slightly slower due to pointer manipulation.

*   **Implementation Details (Python):**

    ```python
    class Node:
        def __init__(self, data):
            self.data = data
            self.next = None

    class StackLinkedList:
        def __init__(self):
            self.head = None  # Head of the linked list is the top of the stack
            self.size_count = 0 # to track the size efficiently

        def push(self, item):
            new_node = Node(item)
            new_node.next = self.head
            self.head = new_node
            self.size_count += 1

        def pop(self):
            if self.isEmpty():
                print("Stack Underflow")
                return None  # Or raise an exception
            item = self.head.data
            self.head = self.head.next
            self.size_count -= 1
            return item

        def peek(self):
            if self.isEmpty():
                print("Stack is Empty")
                return None  # Or raise an exception
            return self.head.data

        def isEmpty(self):
            return self.head is None

        def size(self):
            return self.size_count

    # Example usage:
    stack = StackLinkedList()
    stack.push(10)
    stack.push(20)
    stack.push(30)

    print("Top element:", stack.peek())  # Output: 30
    print("Popped element:", stack.pop())  # Output: 30
    print("Size:", stack.size())  # Output: 2
    print("Is empty?", stack.isEmpty()) # Output: False
    ```

---

### 4. Applications of Stacks

*   **Function Call Stack:** Used by programming languages to manage function calls and return addresses.

*   **Expression Evaluation:**  Converting infix expressions to postfix (RPN - Reverse Polish Notation) and evaluating postfix expressions.

*   **Backtracking:**  Used in algorithms like Depth-First Search (DFS) in graph traversal and solving mazes.

*   **Undo/Redo Functionality:**  Most applications use a stack to store the history of actions.

*   **Syntax Parsing:** Compilers use stacks to parse and validate the syntax of programming code.

*   **Browser History:** The "back" button in a web browser uses a stack to store the history of visited pages.

#### 4.1 Example: Evaluating a Postfix Expression

Postfix (Reverse Polish Notation) is a notation where operators follow their operands. Example: `2 3 +`  (meaning 2 + 3). Stacks are ideal for evaluating postfix expressions.

**Algorithm:**

1.  Scan the postfix expression from left to right.
2.  If the token is an operand (number), push it onto the stack.
3.  If the token is an operator (+, -, \*, /), pop the top two operands from the stack, perform the operation, and push the result back onto the stack.
4.  When the expression is fully scanned, the final result remains on the top of the stack.

**Example:** Evaluate the postfix expression `2 3 + 5 *`

1.  `2`: Push 2 onto the stack. Stack: `[2]`
2.  `3`: Push 3 onto the stack. Stack: `[2, 3]`
3.  `+`: Pop 3 and 2. Calculate 2 + 3 = 5. Push 5 onto the stack. Stack: `[5]`
4.  `5`: Push 5 onto the stack. Stack: `[5, 5]`
5.  `*`: Pop 5 and 5. Calculate 5 * 5 = 25. Push 25 onto the stack. Stack: `[25]`

The result is 25.

**Python Implementation:**

```python
def evaluate_postfix(expression):
    stack = []
    operators = {'+': lambda x, y: x + y,
                 '-': lambda x, y: x - y,
                 '*': lambda x, y: x * y,
                 '/': lambda x, y: x / y}  # Handle division by zero carefully

    tokens = expression.split()  # Split the string into tokens

    for token in tokens:
        if token.isdigit():
            stack.append(int(token))
        elif token in operators:
            if len(stack) < 2:
                raise ValueError("Invalid postfix expression (not enough operands)")
            operand2 = stack.pop()
            operand1 = stack.pop()
            try:
                result = operators[token](operand1, operand2)
            except ZeroDivisionError:
                raise ValueError("Division by zero")

            stack.append(result)
        else:
            raise ValueError(f"Invalid token: {token}")

    if len(stack) != 1:
        raise ValueError("Invalid postfix expression (too many operands)")

    return stack[0]

# Example usage:
expression = "2 3 + 5 *"
result = evaluate_postfix(expression)
print(f"Result of {expression}: {result}")  # Output: Result of 2 3 + 5 *: 25
```

---

### 5. Time Complexity of Stack Operations

| Operation | Array Implementation | Linked List Implementation |
|---|---|---|
| `push()`  | O(1) (Amortized O(1) for dynamic arrays) | O(1) |
| `pop()`   | O(1) | O(1) |
| `peek()`  | O(1) | O(1) |
| `isEmpty()` | O(1) | O(1) |
| `size()` | O(1) | O(1) (If size is maintained as a variable) O(n) (If size has to be calculated by traversing) |

---

### 6. Practice Questions and Exercises

1.  **Reverse a String using a Stack:**  Write a function that takes a string as input and returns the reversed string using a stack.

    **Solution (Python):**

    ```python
    def reverse_string(s):
        stack = []
        for char in s:
            stack.append(char)

        reversed_string = ""
        while not len(stack) == 0: # can also use "while stack"
            reversed_string += stack.pop()

        return reversed_string

    # Example usage:
    string = "hello"
    reversed_string = reverse_string(string)
    print(f"Reversed string of '{string}' is: '{reversed_string}'")  # Output: olleh
    ```

2.  **Check for Balanced Parentheses:** Write a function that takes a string containing parentheses ((), [], {}) as input and returns `true` if the parentheses are balanced (i.e., each opening parenthesis has a matching closing parenthesis in the correct order), and `false` otherwise.

    **Solution (Python):**

    ```python
    def is_balanced_parentheses(s):
        stack = []
        matching_parentheses = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for char in s:
            if char in '([{':
                stack.append(char)
            elif char in ')]}':
                if not stack:
                    return False  # No matching opening parenthesis
                top = stack.pop()
                if matching_parentheses[char] != top:
                    return False  # Mismatched parentheses
            # else ignore characters that are not parentheses

        return not stack  # Stack should be empty if balanced

    # Example usage:
    print(is_balanced_parentheses("(){}[]"))  # Output: True
    print(is_balanced_parentheses("({[}])"))  # Output: False
    print(is_balanced_parentheses("((])"))    # Output: False
    print(is_balanced_parentheses("({[]})")) # Output: True
    print(is_balanced_parentheses("))"))       # Output: False
    print(is_balanced_parentheses(""))          # Output: True
    print(is_balanced_parentheses("abc"))       # Output: True - because other chars are ignored
    ```

3.  **Implement a Stack using two Queues:** This is a classic interview question.  Try to design the push and pop operations for a stack implemented using two queues. (Hint: `push` is easy; `pop` requires moving elements between the queues).  Provide pseudo-code or code implementation.

    **Solution (Python):**

    ```python
    from collections import deque  # Python's built-in queue

    class StackUsingQueues:
        def __init__(self):
            self.q1 = deque()
            self.q2 = deque()

        def push(self, x):
            # Add the new element to q1. This is O(1).
            self.q1.append(x)

        def pop(self):
            # If q1 is empty, there is nothing to pop
            if not self.q1:
                return None

            # Move all elements from q1 to q2, except the last element.
            while len(self.q1) > 1:
                self.q2.append(self.q1.popleft())

            # The last element in q1 is the one we want to return.
            popped_element = self.q1.popleft()

            # Swap q1 and q2. Now q1 has the (n-1) elements.
            self.q1, self.q2 = self.q2, self.q1

            return popped_element

        def top(self):
            # Returns the top element without removing it.
            # Similar process as pop, but instead of popping and storing, 
            # we just temporarily move elements and put them back.
            if not self.q1:
                return None

            top_element = None
            while self.q1:
                top_element = self.q1.popleft()
                self.q2.append(top_element)

            self.q1, self.q2 = self.q2, self.q1  # Swap them back
            self.q2.clear() # clean up q2

            self.q1.append(top_element) # add the element back to q1
            self.q1, self.q2 = self.q2, self.q1  # Swap them back

            return top_element

        def isEmpty(self):
            return not self.q1

    # Example
    s = StackUsingQueues()
    s.push(1)
    s.push(2)
    print(s.top())   # Output: 2
    print(s.pop())   # Output: 2
    print(s.isEmpty()) # Output: False
    print(s.pop())   # Output: 1
    print(s.isEmpty()) # Output: True
    print(s.pop())  # Output: None  (empty queue)
    ```

---

### 7. Important Points to Remember

*   Stacks are LIFO (Last-In, First-Out) data structures.
*   Understand the difference between array and linked list implementations and their respective advantages and disadvantages.
*   Be familiar with common stack operations: `push`, `pop`, `peek`, `isEmpty`, and `size`.
*   Recognize common applications of stacks, such as expression evaluation, backtracking, and function call stacks.
*   Understand the time complexities of stack operations.
*   Pay attention to edge cases: stack overflow (in array implementations) and stack underflow.
*   Always consider memory management, especially when using linked lists (avoid memory leaks). In Python, setting the popped value to `None` helps garbage collection.
