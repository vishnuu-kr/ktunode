---
title: "Problem solving Agents Well-defined problems and solutions, Formulating problems;"
subject: "ARTIFICIAL INTELLIGENCE"
module: "Module 1: Introduction to Artificial Intelligence:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b6dd"
status: "completed"
scrapedAt: "2026-05-20T16:43:06.495Z"
---
# Artificial Intelligence: Module 1 - Introduction to AI
## Topic: Problem-Solving Agents, Well-Defined Problems and Solutions, Formulating Problems

**Module Overview:** This module introduces the fundamental concepts of Artificial Intelligence (AI), focusing on intelligent agents and their ability to solve problems. We will delve into the characteristics of well-defined problems, solutions, and the crucial process of formulating problems for AI systems.

**Learning Outcomes:**

*   Define and describe a problem-solving agent.
*   Explain the components of a well-defined problem.
*   Describe the process of formulating a problem suitable for AI techniques.
*   Distinguish between different problem-solving strategies.
*   Apply the problem formulation process to real-world scenarios.

---

### 1. Problem-Solving Agents

*   **Definition:** A problem-solving agent is a goal-based agent that decides what actions to take by finding sequences of actions that lead to desirable states. It's a rational agent designed to achieve its goals by searching for a solution to a defined problem.

*   **Key Characteristics:**

    *   **Goal-Oriented:** Operates with a specific goal in mind.
    *   **Problem Formulation:** Translates the goal into a well-defined problem.
    *   **Search:** Explores possible sequences of actions to find a solution.
    *   **Execution:** Executes the selected sequence of actions.
    *   **Learning:**  (Ideally) Learns from past experiences to improve future problem-solving.

*   **Components of a Problem-Solving Agent:**

    *   **Goal:** A description of the desired state or outcome.  E.g., "Be in Bucharest."
    *   **Problem:** A formal description including:
        *   Initial State: The starting point. E.g., "Currently in Arad."
        *   Actions: Available operators that can change the state. E.g., "Drive to Sibiu," "Drive to Timisoara," "Drive to Zerind."
        *   Transition Model: Describes the result of performing an action in a given state.  E.g., "Driving to Sibiu from Arad results in being in Sibiu."
        *   Goal Test: A function that determines if a given state is a goal state.  E.g., "Is the current state Bucharest?"
        *   Path Cost: Assigns a numeric cost to each path.  E.g., "Distance traveled in km."

*   **Agent Architecture (Simplified):**

    1.  **Input:** Percepts (Information from the environment).
    2.  **Problem Formulation:** Translates the percepts and goal into a formal problem.
    3.  **Search:** Explores the state space to find a solution (sequence of actions).
    4.  **Execution:** Executes the actions in the solution.

### 2. Well-Defined Problems and Solutions

*   **Definition of a Well-Defined Problem:**  A problem is well-defined if it contains all the following elements:

    *   **Initial State:** The state the agent starts in.
    *   **Actions (Operators):**  A description of the possible actions available to the agent.
    *   **Transition Model:** A description of what each action does; the state that results from performing a particular action in a particular state.
    *   **Goal Test:** A test that determines whether a given state is a goal state.
    *   **Path Cost Function:** A function that assigns a numeric cost to a path. The agent aims to find a solution with the lowest path cost.

*   **Solution:** A sequence of actions that, when executed from the initial state, leads to a goal state.

*   **Optimal Solution:** A solution with the lowest path cost among all possible solutions.

*   **Example:  The 8-Puzzle**

    *   **Initial State:** A specific configuration of the 8 tiles in the puzzle.
    *   **Actions:**  Moving the blank tile Up, Down, Left, or Right.
    *   **Transition Model:** Describes how the board changes when the blank tile moves.
    *   **Goal Test:** Checks if the current state matches the desired goal configuration.
    *   **Path Cost:** Typically, each move has a cost of 1.

### 3. Formulating Problems

*   **Definition:** Problem formulation is the process of taking a real-world problem and translating it into a form that an AI agent can understand and solve.

*   **Steps in Problem Formulation:**

    1.  **Define the Goal:** What is the desired outcome?  This should be specific and measurable.
    2.  **Define the State Space:**  What are all the possible states the agent can be in? This is critical and depends on the level of abstraction.
    3.  **Define the Actions:**  What are the possible actions the agent can take to move from one state to another?
    4.  **Define the Transition Model:**  How do the actions affect the state of the environment?  This model should be deterministic (predictable) or stochastic (probabilistic).
    5.  **Define the Goal Test:**  How can the agent determine if it has reached the goal?
    6.  **Define the Path Cost Function:**  What is the cost associated with taking different paths to the goal?  This helps the agent find the optimal solution.

*   **Importance of Abstraction:** Abstraction is crucial in problem formulation. We need to simplify the real-world problem by removing irrelevant details and focusing on the essential elements. The right level of abstraction makes the problem solvable while still capturing the key aspects of the real-world scenario.

    *   **Example: Route Finding (Romania example from the book)**
        *   **Real-world:**  Driving a car, considering traffic, weather, road conditions, etc.
        *   **Abstraction:** Representing the problem as finding a path between cities, ignoring details like road width or specific car parameters.  The state space becomes "being in city X," and actions become "driving from city X to city Y."

*   **Example: Vacuum World**

    *   **Goal:** All squares are clean.
    *   **State Space:** The agent's location (square A or B) and whether each square is clean or dirty.  Total 2 x 2<sup>2</sup> = 8 possible states.
    *   **Actions:** `Left`, `Right`, `Suck`.
    *   **Transition Model:**  Describes the effect of each action.  `Suck` cleans the current square, `Left` moves the agent to the left (if possible), and `Right` moves the agent to the right (if possible).
    *   **Goal Test:**  Checks if both squares are clean.
    *   **Path Cost:**  Each action has a cost of 1.

### 4.  Distinguishing Between Problem-Solving Strategies

*   **Uninformed Search (Blind Search):**  These strategies have no additional information about the state space beyond the problem definition.  They systematically explore the state space. Examples include:

    *   **Breadth-First Search (BFS):** Explores all nodes at a given depth before moving to the next depth.
    *   **Depth-First Search (DFS):** Explores one branch of the search tree as deeply as possible before backtracking.
    *   **Depth-Limited Search (DLS):** DFS with a predefined depth limit to avoid infinite loops.
    *   **Iterative Deepening Search (IDS):**  Repeatedly performs DLS with increasing depth limits.

*   **Informed Search (Heuristic Search):** These strategies use heuristic functions to estimate the cost of reaching the goal from a given state. This information guides the search and helps to find a solution more efficiently. Examples include:

    *   **Greedy Best-First Search:** Expands the node that is estimated to be closest to the goal.
    *   **A* Search:**  Combines the cost to reach the node (g(n)) with the estimated cost to the goal (h(n)). It expands the node with the lowest f(n) = g(n) + h(n).

*   **Key Differences:** The primary difference lies in the use of *knowledge* (heuristic functions) to guide the search.  Informed search strategies are generally more efficient than uninformed strategies, especially for complex problems.

### 5. Applying Problem Formulation to Real-World Scenarios

*   **Example 1:  Logistics Planning (Delivery Trucks)**

    *   **Goal:** Deliver all packages to their designated locations in the shortest amount of time.
    *   **State Space:** The current location of each truck, the packages each truck is carrying, and the locations of all packages.
    *   **Actions:** Drive to a location, load a package, unload a package.
    *   **Transition Model:** Describes how the truck's location and package inventory change with each action.
    *   **Goal Test:** Checks if all packages have been delivered to their correct locations.
    *   **Path Cost:**  Time or distance traveled.

*   **Example 2:  Game Playing (Chess)**

    *   **Goal:** Checkmate the opponent's king.
    *   **State Space:** The current configuration of pieces on the chessboard.
    *   **Actions:** All legal moves for each piece.
    *   **Transition Model:**  Describes how the board changes after each move.
    *   **Goal Test:** Checks if the opponent's king is in checkmate.
    *   **Path Cost:** (Less relevant here, as the goal is binary: win or lose. However, a cost could represent the number of moves taken).

*   **General Tips:**

    *   Start with a simple abstraction and gradually add complexity as needed.
    *   Consider different representations for the state space.
    *   Carefully choose actions that are both relevant and computationally feasible.
    *   Think about the trade-off between solution quality and computational cost.

---

### Practice Questions/Exercises

**1.  Define a problem-solving agent in your own words.**

    *   **Answer:** A problem-solving agent is an AI agent designed to find solutions to defined problems.  It does this by formulating the problem, searching for a sequence of actions that leads to a goal state, and then executing those actions.

**2.  What are the five components of a well-defined problem? Give a brief example of each using the 8-puzzle.**

    *   **Answer:**
        *   **Initial State:** The starting configuration of the 8-puzzle. (e.g., a specific arrangement of tiles 1-8 and a blank space)
        *   **Actions:**  Moving the blank tile up, down, left, or right (if possible).
        *   **Transition Model:**  The result of moving the blank tile, e.g., "moving the blank tile up swaps the position of the blank tile and the tile above it."
        *   **Goal Test:**  Checking if the current state matches the desired goal configuration of the tiles.
        *   **Path Cost Function:**  Each move costs 1.

**3.  Why is abstraction important in problem formulation?**

    *   **Answer:** Abstraction simplifies complex real-world problems by removing irrelevant details. This makes the problem manageable and solvable for an AI agent.  A good abstraction captures the essential aspects of the problem while reducing the computational complexity.

**4.  Differentiate between Informed and Uninformed search strategies. Give an example of each.**

    *   **Answer:**
        *   **Uninformed Search:** Does not use any domain knowledge or heuristic functions to guide the search. Examples: Breadth-First Search (BFS), Depth-First Search (DFS).
        *   **Informed Search:** Uses heuristic functions to estimate the cost of reaching the goal from a given state. Examples: Greedy Best-First Search, A* Search.

**5. Formulate the problem of finding a route from your house to a specific landmark in your city. Describe each component of the problem.**

    *   **Answer (Example):**
        *   **Goal:** Arrive at [Landmark Name] (e.g., the Eiffel Tower).
        *   **Initial State:** My current location (e.g., "At my house, 123 Main Street").
        *   **Actions:** Drive North, Drive South, Drive East, Drive West, Turn Left, Turn Right.  (Could be more detailed, specifying streets.)
        *   **Transition Model:** "Driving North on Main Street for one block moves me to the next intersection North on Main Street."
        *   **Goal Test:** "Am I at the Eiffel Tower?"
        *   **Path Cost:**  Distance traveled (e.g., in kilometers) or time taken (e.g., in minutes).  Could also include costs associated with traffic.

---

### Important Points to Remember

*   A well-defined problem is crucial for successful problem-solving.
*   Problem formulation is the foundation of applying AI techniques to real-world problems.
*   Abstraction simplifies problems, making them tractable.
*   Informed search strategies are generally more efficient than uninformed search strategies for complex problems.
*   The choice of problem-solving strategy depends on the nature of the problem and the available resources.
