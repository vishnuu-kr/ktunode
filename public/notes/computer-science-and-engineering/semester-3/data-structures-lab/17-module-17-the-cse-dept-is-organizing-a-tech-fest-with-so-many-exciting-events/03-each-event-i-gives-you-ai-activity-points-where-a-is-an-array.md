---
title: "Each event i gives you A[i] activity points where A is an array."
subject: "DATA STRUCTURES LAB"
module: "Module 17: The CSE dept is organizing a tech fest with so many exciting events."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae90"
status: "completed"
scrapedAt: "2026-05-20T16:23:35.811Z"
---
## Data Structures Lab: Module 17 - Tech Fest Activity Points

**Module Topic:** The CSE dept is organizing a tech fest with so many exciting events. Each event i gives you A[i] activity points where A is an array.

**Learning Outcomes:** (Implicit - need to be inferred from the problem description)

*   Understanding how to represent event activity points using arrays.
*   Applying data structures (especially arrays) to store and process event-related data.
*   Developing algorithms to efficiently manage and calculate activity points.
*   Being able to implement and test code to solve problems related to event points and arrays.
*   Potentially, optimizing algorithms for scenarios with a large number of events.
*   Being able to identify edge cases and provide adequate solutions.

---

### 1. Representing Event Activity Points with Arrays

*   **Key Concept:** An array is a contiguous block of memory locations, each storing a data element of the same type. It is a fundamental data structure used to store collections of items, such as event activity points.

*   **Definition:**  An array `A` of size `n` represents the activity points of `n` events in the tech fest. `A[i]` (where `i` ranges from 0 to n-1) represents the activity points awarded for event `i`.

*   **Example:**

    ```
    A = [10, 5, 20, 15, 8]
    ```

    In this example:
    *   `A[0] = 10`: Event 0 (e.g., coding competition) gives 10 activity points.
    *   `A[1] = 5`: Event 1 (e.g., web designing) gives 5 activity points.
    *   `A[2] = 20`: Event 2 (e.g., robotics challenge) gives 20 activity points.
    *   `A[3] = 15`: Event 3 (e.g., debugging contest) gives 15 activity points.
    *   `A[4] = 8`: Event 4 (e.g., quiz) gives 8 activity points.

*   **Data Type:** The data type of the array elements (activity points) will typically be integers (e.g., `int`, `long`).  Depending on the problem, you might use `float` or `double` if fractional points are possible.

### 2. Basic Array Operations for Activity Points

*   **Accessing Elements:** Use the index `i` to access the activity points of a specific event: `A[i]`.

*   **Modifying Elements:** Update the activity points of an event: `A[i] = new_value;`

*   **Iteration:** Iterate through the array to process all events:

    ```python
    for i in range(len(A)):
        # Process A[i] (e.g., print, calculate sum)
        print(f"Event {i}: {A[i]} points")
    ```

    ```java
    for (int i = 0; i < A.length; i++) {
        // Process A[i] (e.g., print, calculate sum)
        System.out.println("Event " + i + ": " + A[i] + " points");
    }
    ```

*   **Calculating Total Activity Points:**

    ```python
    total_points = 0
    for points in A:
        total_points += points
    print(f"Total activity points: {total_points}")
    ```

    ```java
    int totalPoints = 0;
    for (int points : A) {
        totalPoints += points;
    }
    System.out.println("Total activity points: " + totalPoints);
    ```

### 3. Algorithm Development and Implementation

*   **Example Problem 1:** Find the event with the maximum activity points.

    *   **Algorithm:**
        1.  Initialize `max_points` to `A[0]` and `max_index` to 0.
        2.  Iterate through the array `A` from index 1 to `n-1`.
        3.  If `A[i] > max_points`, update `max_points` to `A[i]` and `max_index` to `i`.
        4.  Return `max_index` (the index of the event with the maximum points).

    *   **Python Implementation:**

        ```python
        def find_max_points(A):
            max_points = A[0]
            max_index = 0
            for i in range(1, len(A)):
                if A[i] > max_points:
                    max_points = A[i]
                    max_index = i
            return max_index

        A = [10, 5, 20, 15, 8]
        max_event_index = find_max_points(A)
        print(f"Event with maximum points: {max_event_index} (Points: {A[max_event_index]})")
        ```

    *   **Java Implementation:**

        ```java
        public class MaxPoints {
            public static int findMaxPoints(int[] A) {
                int maxPoints = A[0];
                int maxIndex = 0;
                for (int i = 1; i < A.length; i++) {
                    if (A[i] > maxPoints) {
                        maxPoints = A[i];
                        maxIndex = i;
                    }
                }
                return maxIndex;
            }

            public static void main(String[] args) {
                int[] A = {10, 5, 20, 15, 8};
                int maxEventIndex = findMaxPoints(A);
                System.out.println("Event with maximum points: " + maxEventIndex + " (Points: " + A[maxEventIndex] + ")");
            }
        }
        ```

*   **Example Problem 2:** Calculate the average activity points across all events.

    *   **Algorithm:**
        1.  Initialize `total_points` to 0.
        2.  Iterate through the array `A` and add each element to `total_points`.
        3.  Calculate the average: `average = total_points / n` (where `n` is the number of events).
        4.  Return the average.

    *   **Python Implementation:**

        ```python
        def calculate_average_points(A):
            total_points = sum(A)
            average = total_points / len(A)
            return average

        A = [10, 5, 20, 15, 8]
        average_points = calculate_average_points(A)
        print(f"Average activity points: {average_points}")
        ```

    *   **Java Implementation:**

        ```java
        public class AveragePoints {
            public static double calculateAveragePoints(int[] A) {
                int totalPoints = 0;
                for (int points : A) {
                    totalPoints += points;
                }
                double average = (double) totalPoints / A.length;
                return average;
            }

            public static void main(String[] args) {
                int[] A = {10, 5, 20, 15, 8};
                double averagePoints = calculateAveragePoints(A);
                System.out.println("Average activity points: " + averagePoints);
            }
        }
        ```

### 4. Optimization (For Larger Datasets)

*   For larger datasets, consider using more efficient algorithms if needed. However, for simple calculations like finding the maximum or average, the linear-time algorithms shown above are generally sufficient.
*   If frequent updates to the array are required, consider alternative data structures (e.g., balanced binary search tree) for faster updates.

### 5. Edge Cases and Considerations

*   **Empty Array:** Check for an empty array (`A.length == 0` or `len(A) == 0`) to prevent errors like division by zero or out-of-bounds access. Return an appropriate value (e.g., 0, -1, or `None`) or raise an exception in such cases.

*   **Negative Activity Points:**  Consider whether negative activity points are possible.  If so, adjust algorithms accordingly (e.g., when finding the maximum).  If not, validate the input array to ensure all points are non-negative.

*   **Large Number of Events:** For extremely large arrays, consider using techniques like distributed processing or more specialized data structures for optimization. However, this is generally beyond the scope of a basic data structures lab.

*   **Integer Overflow:**  If the total activity points can become very large, use a larger data type (e.g., `long` in Java or Python) to prevent integer overflow.

### 6. Practice Questions/Exercises

1.  **Problem:** Given an array `A` of activity points, find the event with the *minimum* activity points.

    *   **Solution:** (Similar to finding the maximum, but compare for the minimum value)

        ```python
        def find_min_points(A):
            if not A:  # Handle empty array
                return -1  # Or raise an exception

            min_points = A[0]
            min_index = 0
            for i in range(1, len(A)):
                if A[i] < min_points:
                    min_points = A[i]
                    min_index = i
            return min_index

        A = [10, 5, 20, 15, 8]
        min_event_index = find_min_points(A)
        print(f"Event with minimum points: {min_event_index} (Points: {A[min_event_index]})") #Output: Event with minimum points: 1 (Points: 5)
        ```

        ```java
        public class MinPoints {
            public static int findMinPoints(int[] A) {
                if (A.length == 0) { // Handle empty array
                    return -1; // Or throw an exception
                }

                int minPoints = A[0];
                int minIndex = 0;
                for (int i = 1; i < A.length; i++) {
                    if (A[i] < minPoints) {
                        minPoints = A[i];
                        minIndex = i;
                    }
                }
                return minIndex;
            }

            public static void main(String[] args) {
                int[] A = {10, 5, 20, 15, 8};
                int minEventIndex = findMinPoints(A);
                System.out.println("Event with minimum points: " + minEventIndex + " (Points: " + A[minEventIndex] + ")"); //Output: Event with minimum points: 1 (Points: 5)
            }
        }
        ```

2.  **Problem:** Given an array `A` of activity points, find the number of events with activity points greater than a given threshold `T`.

    *   **Solution:**

        ```python
        def count_events_above_threshold(A, T):
            count = 0
            for points in A:
                if points > T:
                    count += 1
            return count

        A = [10, 5, 20, 15, 8]
        T = 12
        count = count_events_above_threshold(A, T)
        print(f"Number of events with points above {T}: {count}") # Output: Number of events with points above 12: 2
        ```

        ```java
        public class CountEvents {
            public static int countEventsAboveThreshold(int[] A, int T) {
                int count = 0;
                for (int points : A) {
                    if (points > T) {
                        count += 1;
                    }
                }
                return count;
            }

            public static void main(String[] args) {
                int[] A = {10, 5, 20, 15, 8};
                int T = 12;
                int count = countEventsAboveThreshold(A, T);
                System.out.println("Number of events with points above " + T + ": " + count); // Output: Number of events with points above 12: 2
            }
        }
        ```

3.  **Problem:** Given an array `A` of activity points and an index `i`, calculate the average activity points of the events adjacent to event `i` (events `i-1` and `i+1`), handling edge cases when `i` is the first or last element.

    *   **Solution:**

        ```python
        def average_adjacent_points(A, i):
            n = len(A)
            if n == 0:
                return 0  # Or handle as appropriate
            if i < 0 or i >= n:
                return 0 # or handle appropriately

            total_points = 0
            count = 0

            if i > 0:
                total_points += A[i - 1]
                count += 1
            if i < n - 1:
                total_points += A[i + 1]
                count += 1

            if count == 0:
                return 0  # Or handle as appropriate.  If i is the only element.
            return total_points / count

        A = [10, 5, 20, 15, 8]
        i = 2
        average = average_adjacent_points(A, i)
        print(f"Average points adjacent to event {i}: {average}") #Output: Average points adjacent to event 2: 10.0
        ```

        ```java
        public class AdjacentPoints {
            public static double averageAdjacentPoints(int[] A, int i) {
                int n = A.length;
                if (n == 0) {
                    return 0; // Or handle as appropriate
                }
                if (i < 0 || i >= n) {
                    return 0; // Or handle appropriately
                }

                int totalPoints = 0;
                int count = 0;

                if (i > 0) {
                    totalPoints += A[i - 1];
                    count += 1;
                }
                if (i < n - 1) {
                    totalPoints += A[i + 1];
                    count += 1;
                }

                if (count == 0) {
                    return 0; // Or handle as appropriate, if i is the only element
                }
                return (double) totalPoints / count;
            }

            public static void main(String[] args) {
                int[] A = {10, 5, 20, 15, 8};
                int i = 2;
                double average = averageAdjacentPoints(A, i);
                System.out.println("Average points adjacent to event " + i + ": " + average); //Output: Average points adjacent to event 2: 10.0
            }
        }
        ```

### 7. Important Points to Remember

*   Arrays are fundamental for storing collections of data.
*   Understand how to access, modify, and iterate through array elements.
*   Consider edge cases like empty arrays and invalid indices.
*   Choose appropriate data types to prevent overflow issues.
*   For performance-critical applications with frequent updates, consider alternative data structures.
*   Clear code and comments contribute to maintainability and debugging.
