---
title: "Find the shortest distance of every cell from a landmine inside a maze."
subject: "DATA STRUCTURES LAB"
module: "Module 9: Find the shortest distance of every cell from a landmine inside a maze."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae76"
status: "completed"
scrapedAt: "2026-05-20T16:23:22.795Z"
---
# DATA STRUCTURES LAB - Module 9: Shortest Distance from Landmines in a Maze

## Topic: Find the Shortest Distance of Every Cell from a Landmine Inside a Maze

### Learning Outcomes:

*   Understand the problem of finding shortest distances in a grid/maze.
*   Learn how to represent a maze using data structures.
*   Apply Breadth-First Search (BFS) algorithm for finding shortest paths.
*   Implement the algorithm to calculate the shortest distance of each cell from a landmine.
*   Analyze the time and space complexity of the solution.

### 1. Introduction

This module focuses on solving a classic graph traversal problem in the context of a maze: finding the shortest distance of every cell from a landmine. This problem can be viewed as finding the shortest path from multiple source nodes (landmines) to all other nodes in a grid.  We will use Breadth-First Search (BFS) to solve this problem efficiently.

### 2. Key Concepts and Definitions

*   **Maze/Grid Representation:**  A maze can be represented as a 2D array (matrix) where:
    *   `0` typically represents an open cell (passable).
    *   `1` represents a landmine.
    *   Other values might represent walls or obstacles (impassable).

*   **Shortest Distance:** The minimum number of steps (or cells traversed) required to reach a cell from the nearest landmine.

*   **Landmine:** A cell containing a value indicating its status as a hazardous location (e.g., a cell with value `1`).

*   **Breadth-First Search (BFS):** A graph traversal algorithm that explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.  It's suitable for finding the shortest path in an unweighted graph.

*   **Queue:** A data structure that follows the First-In, First-Out (FIFO) principle.  Essential for implementing BFS.

*   **Visited Array:** A 2D array used to keep track of cells that have already been processed during BFS, preventing cycles and redundant computations.

*   **Distance Array:** A 2D array storing the shortest distance from the nearest landmine to each cell in the maze.

### 3. Algorithm: BFS for Shortest Distance from Landmines

The core idea is to perform a modified BFS starting from all landmines simultaneously.

1.  **Initialization:**
    *   Create a `distance` array with the same dimensions as the maze, and initialize all cells to `Infinity` (or a large value).  This array will store the shortest distances.
    *   Create a `visited` array with the same dimensions as the maze, and initialize all cells to `false`.
    *   Create a queue `q` to store the cells to be visited.
    *   Enqueue all landmine cells into the queue `q`.  Set the corresponding cells in the `distance` array to `0` (distance from a landmine to itself is 0). Mark these landmines as visited.

2.  **BFS Traversal:**
    *   While the queue `q` is not empty:
        *   Dequeue a cell `(row, col)` from the queue `q`.
        *   Explore the four neighbors of the cell `(row, col)`: Up, Down, Left, Right.
        *   For each neighbor `(new_row, new_col)`:
            *   **Check if it is a valid cell:** Ensure `new_row` and `new_col` are within the bounds of the maze.
            *   **Check if it's a passable cell:** Ensure the cell `(new_row, new_col)` is not an obstacle/wall (e.g., value `0` is a valid cell, value `1` or other values may not be).
            *   **Check if it's not visited:** Ensure `visited[new_row][new_col]` is `false`.
            *   If all the above conditions are true:
                *   Update the distance to the neighbor: `distance[new_row][new_col] = min(distance[new_row][new_col], distance[row][col] + 1)`.  Crucially, we are looking for *shortest* distances.
                *   Enqueue the neighbor `(new_row, new_col)` into the queue `q`.
                *   Mark the neighbor `(new_row, new_col)` as visited: `visited[new_row][new_col] = true`.

3.  **Result:**
    *   The `distance` array now contains the shortest distance from each cell to the nearest landmine.

### 4. Example

**Maze:**

```
[
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 0]
]
```

**Explanation:**

*   Landmines are at (0, 3), (1, 2), and (2, 1).

**Step-by-Step BFS:**

1.  **Initialization:**  Enqueue (0, 3), (1, 2), and (2, 1) into the queue.  `distance[0][3] = distance[1][2] = distance[2][1] = 0`.  Mark them as visited.

2.  **BFS:**
    *   From (0, 3): Explore (0, 2). `distance[0][2] = 1`. Enqueue (0, 2). Mark (0,2) as visited.
    *   From (1, 2): Explore (0, 2), (1, 1), (2, 2).
        *   (0, 2) is already in queue. The distance has been set so this will be skipped.
        *   `distance[1][1] = 1`. Enqueue (1, 1). Mark (1,1) as visited.
        *   `distance[2][2] = 1`. Enqueue (2, 2). Mark (2,2) as visited.
    *   From (2, 1): Explore (1, 1), (2, 0).
        *   (1, 1) is already in queue. The distance has been set so this will be skipped.
        *   `distance[2][0] = 1`. Enqueue (2, 0). Mark (2,0) as visited.
    *   Continue this process until the queue is empty.

**Resultant Distance Array:**

```
[
  [2, 1, 1, 0],
  [1, 1, 0, 1],
  [2, 0, 1, 2]
]
```

### 5. Code Implementation (Python)

```python
from collections import deque

def shortest_distance_from_landmines(maze):
    rows = len(maze)
    cols = len(maze[0])
    distance = [[float('inf')] * cols for _ in range(rows)]
    visited = [[False] * cols for _ in range(rows)]
    queue = deque()

    # Find landmines and initialize
    for i in range(rows):
        for j in range(cols):
            if maze[i][j] == 1:
                distance[i][j] = 0
                visited[i][j] = True
                queue.append((i, j))

    # BFS traversal
    while queue:
        row, col = queue.popleft()
        # Possible movements (up, down, left, right)
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        for dr, dc in directions:
            new_row, new_col = row + dr, col + dc

            # Check if the neighbor is valid
            if 0 <= new_row < rows and 0 <= new_col < cols and not visited[new_row][new_col]:
                distance[new_row][new_col] = distance[row][col] + 1
                visited[new_row][new_col] = True
                queue.append((new_row, new_col))

    return distance

# Example usage:
maze = [
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 0]
]

result = shortest_distance_from_landmines(maze)
for row in result:
    print(row)
```

### 6. Time and Space Complexity

*   **Time Complexity:** O(R * C), where R is the number of rows and C is the number of columns in the maze.  Each cell is visited at most once.  This is because of the visited array.
*   **Space Complexity:** O(R * C).  This is due to the `distance` array, the `visited` array, and the queue (in the worst-case scenario, all cells could be added to the queue).

### 7. Practice Questions/Exercises

1.  **Modify the code to handle obstacles (walls) in the maze.**  Assume a value of `-1` represents a wall.

    **Answer:**
    ```python
    from collections import deque

    def shortest_distance_from_landmines_with_obstacles(maze):
        rows = len(maze)
        cols = len(maze[0])
        distance = [[float('inf')] * cols for _ in range(rows)]
        visited = [[False] * cols for _ in range(rows)]
        queue = deque()

        # Find landmines and initialize
        for i in range(rows):
            for j in range(cols):
                if maze[i][j] == 1:
                    distance[i][j] = 0
                    visited[i][j] = True
                    queue.append((i, j))

        # BFS traversal
        while queue:
            row, col = queue.popleft()
            # Possible movements (up, down, left, right)
            directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

            for dr, dc in directions:
                new_row, new_col = row + dr, col + dc

                # Check if the neighbor is valid and not a wall
                if (0 <= new_row < rows and 0 <= new_col < cols and
                        maze[new_row][new_col] != -1 and not visited[new_row][new_col]):  # Added obstacle check
                    distance[new_row][new_col] = distance[row][col] + 1
                    visited[new_row][new_col] = True
                    queue.append((new_row, new_col))

        return distance

    # Example usage:
    maze = [
      [0, 0, 0, 1],
      [0, -1, 1, 0],  # -1 represents an obstacle
      [0, 1, 0, 0]
    ]

    result = shortest_distance_from_landmines_with_obstacles(maze)
    for row in result:
        print(row)
    ```

2.  **What happens if there are no landmines in the maze?**

    **Answer:**  If there are no landmines, the `distance` array will remain initialized with `Infinity` values for all cells. The code will still execute without errors, but the output will indicate that no cell is reachable from a landmine.

3.  **Implement the solution using Depth-First Search (DFS).  What are the advantages and disadvantages compared to BFS?**

    **Answer:**  While DFS can also find paths, BFS is generally preferred for finding the *shortest* path in unweighted graphs like this maze.  DFS might find a path, but it's not guaranteed to be the shortest.  Also, DFS can lead to stack overflow issues with very large mazes.  Implementing it with DFS would require more complex logic to track distances and potentially backtrack.  BFS inherently explores paths in order of increasing distance, making it the natural choice for shortest path problems.

4.  **Analyze the time complexity if the queue is implemented using a priority queue.**  Would this change the optimal approach for this specific problem?

    **Answer:** If we used a priority queue, the time complexity would likely become O(R * C * log(R * C)). While priority queues are used in Dijkstra's algorithm for finding shortest paths in weighted graphs, our maze problem is unweighted. BFS provides a simpler and more efficient solution (O(R * C)) for unweighted graphs. Using a priority queue would introduce unnecessary overhead and increase the time complexity.

### 8. Important Points to Remember

*   BFS is the go-to algorithm for finding the shortest path in unweighted graphs.
*   The `visited` array is crucial to prevent infinite loops and ensure efficiency.
*   Proper initialization of the `distance` array is essential.
*   Carefully consider the base cases (e.g., no landmines, obstacles) when designing your algorithm.
*   Understanding the time and space complexity helps in choosing the right algorithm and optimizing it if necessary.
