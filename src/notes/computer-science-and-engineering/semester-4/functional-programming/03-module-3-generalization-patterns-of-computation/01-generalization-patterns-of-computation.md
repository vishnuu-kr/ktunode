---
title: "Generalization: Patterns of Computation"
subject: "FUNCTIONAL PROGRAMMING"
module: "Module 3: Generalization: Patterns of Computation"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b0df"
status: "completed"
scrapedAt: "2026-05-20T16:13:11.977Z"
---
# FUNCTIONAL PROGRAMMING: Module 3 - Generalization: Patterns of Computation

## Topic: Generalization: Patterns of Computation

**Description:** This topic focuses on identifying and abstracting common patterns of computation in functional programming, enabling code reuse and reducing redundancy. We'll explore techniques like higher-order functions to generalize solutions across various data types and operations.

**Learning Outcomes:**

*   Understand the concept of generalization in functional programming.
*   Identify common patterns of computation (e.g., mapping, filtering, reducing).
*   Implement these patterns using higher-order functions.
*   Apply these patterns to solve a variety of problems.
*   Recognize the benefits of generalizing computations.

### 1. Introduction to Generalization

*   **Definition:** Generalization in programming refers to the process of abstracting away specific details of a problem or algorithm to create a more reusable and versatile solution.  It aims to solve a broader class of problems with a single, parameterized piece of code.

*   **Why Generalize?**
    *   **Code Reusability:** Avoid writing the same logic repeatedly.
    *   **Reduced Redundancy:**  Maintainability becomes easier with less code to update.
    *   **Improved Readability:**  Abstractions often clarify the intent of the code.
    *   **Increased Modularity:**  Well-defined, reusable components make the code more modular.
    *   **Reduced Errors:** Correcting a single generalized implementation fixes it everywhere it's used.

*   **Example (Without Generalization):**

    Suppose we want to square the elements of a list and then cube the elements of another list.  Without generalization, we might write:

    ```python
    def square_list(numbers):
        result = []
        for num in numbers:
            result.append(num * num)
        return result

    def cube_list(numbers):
        result = []
        for num in numbers:
            result.append(num * num * num)
        return result

    # Example Usage:
    numbers1 = [1, 2, 3]
    squared_numbers = square_list(numbers1)
    print(f"Squared numbers: {squared_numbers}") # Output: [1, 4, 9]

    numbers2 = [4, 5, 6]
    cubed_numbers = cube_list(numbers2)
    print(f"Cubed numbers: {cubed_numbers}") # Output: [64, 125, 216]
    ```

    Notice the repetitive structure. This cries out for generalization!

### 2. Common Patterns of Computation

*   **Mapping:** Applying a function to each element of a collection (e.g., list, array) to produce a new collection.

    *   **Key Concept:** `map` (or equivalent function in other languages)

    *   **Example:**  Squaring each element of a list (as seen above, but now generalized).

    *   **Generalized Mapping with Higher-Order Functions:**

        ```python
        def apply_to_list(numbers, func):
            result = []
            for num in numbers:
                result.append(func(num))
            return result

        def square(x):
            return x * x

        def cube(x):
            return x * x * x

        numbers = [1, 2, 3]
        squared_numbers = apply_to_list(numbers, square)
        print(f"Squared numbers (generalized): {squared_numbers}") # Output: [1, 4, 9]

        cubed_numbers = apply_to_list(numbers, cube)
        print(f"Cubed numbers (generalized): {cubed_numbers}") # Output: [1, 8, 27]

        # Using Python's built-in map: even more concise
        squared_numbers_map = list(map(square, numbers))
        print(f"Squared numbers (map): {squared_numbers_map}") # Output: [1, 4, 9]
        ```

        *   **Explanation:** `apply_to_list` is a higher-order function because it takes another function (`func`) as an argument.  This allows us to generalize the operation applied to each element.  Python's built-in `map` is even more direct.

*   **Filtering:** Selecting elements from a collection based on a condition (predicate).

    *   **Key Concept:** `filter` (or equivalent)

    *   **Example:** Selecting even numbers from a list.

    *   **Generalized Filtering:**

        ```python
        def filter_list(numbers, predicate):
            result = []
            for num in numbers:
                if predicate(num):
                    result.append(num)
            return result

        def is_even(x):
            return x % 2 == 0

        numbers = [1, 2, 3, 4, 5, 6]
        even_numbers = filter_list(numbers, is_even)
        print(f"Even numbers (generalized): {even_numbers}") # Output: [2, 4, 6]

        # Using Python's built-in filter:
        even_numbers_filter = list(filter(is_even, numbers))
        print(f"Even numbers (filter): {even_numbers_filter}") # Output: [2, 4, 6]
        ```

        *   **Explanation:** `filter_list` accepts a `predicate` function which returns `True` if an element should be included, `False` otherwise. Again, Python's built-in `filter` is more concise.

*   **Reducing (Folding/Accumulating):**  Combining the elements of a collection into a single value.

    *   **Key Concept:** `reduce` (or equivalent)

    *   **Example:** Summing the elements of a list.

    *   **Generalized Reducing:**

        ```python
        from functools import reduce  # reduce is in functools in Python 3

        def reduce_list(numbers, accumulator, initial_value):
            result = initial_value
            for num in numbers:
                result = accumulator(result, num)
            return result

        def sum_numbers(x, y):
            return x + y

        numbers = [1, 2, 3, 4]
        sum_of_numbers = reduce_list(numbers, sum_numbers, 0)
        print(f"Sum of numbers (generalized): {sum_of_numbers}") # Output: 10

        # Using Python's built-in reduce:
        sum_of_numbers_reduce = reduce(sum_numbers, numbers, 0)
        print(f"Sum of numbers (reduce): {sum_of_numbers_reduce}") # Output: 10

        def multiply_numbers(x, y):
            return x * y

        product_of_numbers = reduce(multiply_numbers, numbers, 1) # Initial value is 1 for multiplication
        print(f"Product of numbers (reduce): {product_of_numbers}") # Output: 24
        ```

        *   **Explanation:** `reduce_list` takes an `accumulator` function that combines the current accumulated value with the next element. An `initial_value` is also required. `reduce` applies the function cumulatively to the items of sequence, from left to right, so as to reduce the sequence to a single value.

*   **Other Patterns:**  Other patterns can be generalized too, such as:

    *   **Traversal:** Visiting each element of a data structure.
    *   **Searching:** Finding an element that satisfies a certain condition.
    *   **Sorting:** Arranging elements in a specific order.

### 3. Higher-Order Functions

*   **Definition:** A higher-order function (HOF) is a function that either:
    *   Takes one or more functions as arguments, *or*
    *   Returns a function as its result.

*   **Importance:** HOFs are crucial for generalization because they allow us to parameterize the behavior of a function.  They are the key to implementing the patterns described above.

*   **Examples:**

    *   `map`, `filter`, `reduce` (as shown above)
    *   Custom functions that accept functions as arguments (e.g., `apply_to_list`, `filter_list`, `reduce_list`)
    *   Functions that return other functions (e.g., function factories, currying)

*   **Benefits of Using Higher-Order Functions:**
    *   **Code Reusability:** They enable the creation of highly reusable and composable code.
    *   **Abstraction:** They allow you to abstract away low-level details and focus on the higher-level logic of your program.
    *   **Conciseness:** Functional code using HOFs tends to be more concise and expressive.

### 4. Applying Generalization to Solve Problems

Let's consider a problem: Calculate the sum of squares of even numbers in a list.

*   **Without Generalization (Imperative Style):**

    ```python
    def sum_of_squares_of_evens(numbers):
        total = 0
        for num in numbers:
            if num % 2 == 0:
                square = num * num
                total += square
        return total

    numbers = [1, 2, 3, 4, 5, 6]
    result = sum_of_squares_of_evens(numbers)
    print(f"Sum of squares of evens (imperative): {result}") # Output: 56
    ```

*   **With Generalization (Functional Style):**

    ```python
    def square(x):
        return x * x

    def is_even(x):
        return x % 2 == 0

    numbers = [1, 2, 3, 4, 5, 6]

    result = reduce(lambda x, y: x + y, map(square, filter(is_even, numbers)), 0)
    print(f"Sum of squares of evens (functional): {result}") # Output: 56

    # Even More Concise (using list comprehension)
    result_comprehension = sum([x*x for x in numbers if x % 2 == 0])
    print(f"Sum of squares of evens (comprehension): {result_comprehension}") # Output: 56
    ```

    *   **Explanation:** We chain together `filter`, `map`, and `reduce` (or use a list comprehension) to achieve the desired result in a more declarative and concise manner.  Each function performs a specific task, making the overall logic easier to understand.

### 5. Benefits of Generalizing Computations

*   **Improved Readability:** Abstracting common patterns simplifies the code and makes it easier to understand the overall purpose.
*   **Reduced Code Duplication:** Generalization helps to avoid repetitive code, making the codebase smaller and more maintainable.
*   **Increased Modularity:** Generalizable functions are often self-contained and can be reused in different parts of the application.
*   **Easier Testing:** Testing generalized components makes it easier to ensure the correctness of the entire system.
*   **Enhanced Maintainability:**  Changes to a generalized function automatically propagate to all places where it is used.
*   **Composition and Reusability:** You can easily combine generalized functions to create more complex operations.

### Important Points to Remember:

*   Identify common patterns of computation in your code.
*   Use higher-order functions to abstract these patterns.
*   Consider using built-in functions like `map`, `filter`, and `reduce` when appropriate.
*   Prioritize code clarity and readability when generalizing computations.
*   Don't over-generalize; find the right balance between reusability and specific needs.
*   List comprehensions provide a concise alternative to `map` and `filter` in many cases.

### Practice Questions and Exercises:

**1.  Write a function that takes a list of strings and returns a new list containing the lengths of each string.**

    *   **Solution (using `map`):**

        ```python
        def string_lengths(strings):
            return list(map(len, strings))

        strings = ["hello", "world", "python"]
        lengths = string_lengths(strings)
        print(f"String lengths: {lengths}")  # Output: [5, 5, 6]
        ```

**2.  Write a function that takes a list of numbers and returns a new list containing only the positive numbers.**

    *   **Solution (using `filter`):**

        ```python
        def get_positives(numbers):
            return list(filter(lambda x: x > 0, numbers))

        numbers = [-1, 2, -3, 4, 0, 5]
        positives = get_positives(numbers)
        print(f"Positive numbers: {positives}")  # Output: [2, 4, 5]
        ```

**3.  Write a function that takes a list of numbers and returns the product of all the numbers in the list.**

    *   **Solution (using `reduce`):**

        ```python
        from functools import reduce

        def product(numbers):
            return reduce(lambda x, y: x * y, numbers, 1)  # Initial value is 1

        numbers = [1, 2, 3, 4]
        result = product(numbers)
        print(f"Product: {result}")  # Output: 24
        ```

**4.  Given a list of dictionaries, each representing a person with keys 'name' and 'age', write a function to find the average age of all people in the list.**

    *   **Solution (using `map` and `reduce`):**

        ```python
        from functools import reduce

        def average_age(people):
            ages = list(map(lambda person: person['age'], people))
            total_age = reduce(lambda x, y: x + y, ages, 0)
            return total_age / len(people)

        people = [
            {'name': 'Alice', 'age': 30},
            {'name': 'Bob', 'age': 25},
            {'name': 'Charlie', 'age': 35}
        ]

        avg_age = average_age(people)
        print(f"Average age: {avg_age}")  # Output: 30.0
        ```

**5.  (Challenging) Write a function that takes a function `f` and a list `xs` and returns a list of `f(x)` where `x` is an element of `xs`, but only if `f(x)` is positive.  (Combine map and filter).**

    *   **Solution:**

        ```python
        def map_and_filter_positive(f, xs):
            # Step 1: Apply the function f to each element of xs
            mapped_values = map(f, xs)
            # Step 2: Filter out any values that are not positive
            positive_values = filter(lambda x: x > 0, mapped_values)
            # Step 3: Convert the filter object to a list
            return list(positive_values)

        # Example usage:
        def square(x):
            return x * x

        def negate(x):
          return -x

        numbers = [-2, -1, 0, 1, 2, 3]
        squared_positives = map_and_filter_positive(square, numbers)
        print(f"Squared positives: {squared_positives}")  # Output: [4, 1, 0, 1, 4, 9] (zero isn't positive)

        negated_positives = map_and_filter_positive(negate, numbers)
        print(f"Negated positives: {negated_positives}")  # Output: [] because all negated become negative or zero
