---
title: "Linear programming in geometry (Text 1, Chapters 10, 11)"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 4: Advanced Topics and Applications :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b251"
status: "completed"
scrapedAt: "2026-05-20T16:11:04.279Z"
---
# Computational Geometry: Module 4 - Linear Programming in Geometry (Chapters 10 & 11)

**Subject:** Computational Geometry
**Module:** Module 4: Advanced Topics and Applications
**Topic:** Linear Programming in Geometry (Text 1, Chapters 10, 11)

**Learning Outcomes:**  Upon completion of this topic, you will be able to:

*   Understand the formulation of geometric problems as Linear Programs (LPs).
*   Apply Linear Programming techniques to solve geometric optimization problems.
*   Explain the duality of Linear Programs and its geometric interpretations.
*   Describe the Simplex algorithm and other LP solvers, with a focus on their applicability to geometric problems.
*   Analyze the time complexity of different LP solving approaches in the context of geometric problem sizes.
*   Implement basic LP formulations for simple geometric problems.
*   Recognize geometric problems suitable for LP application.

## 1. Introduction to Linear Programming

*   **Definition:** Linear Programming (LP) is a method to achieve the best outcome (such as maximum profit or lowest cost) in a mathematical model whose requirements are represented by linear relationships.

*   **Components of an LP:**

    *   **Objective Function:** A linear function to be maximized or minimized.  e.g.,  `max cᵀx` or `min cᵀx`, where `c` is a vector of coefficients and `x` is a vector of variables.
    *   **Constraints:** A set of linear inequalities or equalities that restrict the values of the variables.  e.g., `Ax ≤ b`, where `A` is a matrix of coefficients, `x` is a vector of variables, and `b` is a vector of constants.
    *   **Variables:** Decision variables that can be adjusted to optimize the objective function while satisfying the constraints.

*   **Feasible Region:**  The set of all points (variable values) that satisfy all the constraints.  If the feasible region is non-empty, the LP is considered *feasible*.

*   **Optimal Solution:** A point within the feasible region that yields the best value (maximum or minimum) for the objective function.  An LP might have a unique optimal solution, multiple optimal solutions, or no optimal solution (unbounded or infeasible).

*   **Geometric Interpretation:** In 2D and 3D, the feasible region is often a polygon or polyhedron defined by the intersection of half-planes or half-spaces defined by the linear constraints.

## 2. Formulating Geometric Problems as Linear Programs

*   **Key Idea:**  Identify the variables, objective function, and constraints based on the geometric problem.

*   **Examples:**

    *   **Smallest Enclosing Disk (Center Point Problem):** Given a set of points in the plane, find the smallest disk that contains all the points.

        *   *Variables:*  Center coordinates `(x, y)` and radius `r`.
        *   *Objective:* Minimize `r`.  `min r`
        *   *Constraints:* For each point `(xᵢ, yᵢ)` in the input set:  `(x - xᵢ)² + (y - yᵢ)² ≤ r²`. This is not linear. To linearize, we introduce a variable `R = r²`, then we have: `(x - xᵢ)² + (y - yᵢ)² ≤ R`.  However, we still can't use LP directly because of the quadratic term in constraints. In higher dimensions, LP is feasible but we typically use alternative approaches (such as randomized algorithms for the minimum enclosing ball).  This problem can be formulated as a *Second-Order Cone Program (SOCP)*.

    *   **Maximum Volume Box Inside a Polygon:** Given a polygon, find the largest-area rectangle that fits inside it.

        *   *Variables:*  Coordinates of the bottom-left corner `(x, y)`, width `w`, and height `h` of the rectangle.
        *   *Objective:* Maximize area `w * h`. This is not linear. We need to linearize this through approximation techniques, which are more advanced. We can fix the aspect ratio `w/h` or the orientation.
        *   *Constraints:* Constraints ensuring the rectangle lies entirely inside the polygon. Expressed as linear inequalities based on the polygon's edge equations. For each edge of the polygon represented as  `ax + by ≤ c`, we need to ensure that all corners of the rectangle satisfy this constraint.  This leads to 4 constraints per polygon edge.

    *   **Line Fitting:** Given a set of points, find a line that minimizes the maximum vertical distance (Chebyshev norm) to the points.

        *   *Variables:*  Slope `m` and y-intercept `b` of the line.
        *   *Objective:* Minimize the maximum vertical distance: `min d` where `d` is the maximum deviation.
        *   *Constraints:* For each point `(xᵢ, yᵢ)`:  `yᵢ - (mxᵢ + b) ≤ d` and `(mxᵢ + b) - yᵢ ≤ d`.  These constraints ensure that the vertical distance between each point and the line is less than or equal to `d`.  This gives us 2 constraints per input point.

## 3. Duality in Linear Programming

*   **Primal LP:** The original LP problem.

*   **Dual LP:**  An LP derived from the primal LP.  The solution to the dual LP provides insights into the primal LP.

*   **Weak Duality:** The objective function value of any feasible solution to the minimization primal LP is always greater than or equal to the objective function value of any feasible solution to the maximization dual LP.

*   **Strong Duality:** If both the primal and dual LPs are feasible, then they both have optimal solutions, and their optimal objective function values are equal.

*   **Geometric Interpretation of Duality:**  The dual variables often represent "shadow prices" or "sensitivity analysis" indicating how much the optimal objective function value would change if a constraint were slightly relaxed or tightened.  In geometric contexts, these can represent the influence or contribution of specific geometric features (e.g., points) to the optimal solution.

*   **Example:** Consider a primal LP of minimizing costs with supply chain constraints. The dual LP might be about maximizing the price a company is willing to pay to acquire resources used by the supplies.

## 4. Simplex Algorithm and Other LP Solvers

*   **Simplex Algorithm:** A classical algorithm for solving LPs.

    *   **Idea:** Iteratively moves from one vertex (corner) of the feasible region to an adjacent vertex with a better objective function value until an optimal vertex is reached.
    *   **Limitations:** Exponential worst-case time complexity. However, often performs well in practice.

*   **Interior-Point Methods:**  More modern LP solvers (e.g., Karmarkar's algorithm).

    *   **Idea:** Moves through the *interior* of the feasible region, rather than along its boundary.
    *   **Advantages:** Polynomial time complexity. More efficient for large-scale LPs.

*   **Ellipsoid Method:** Another polynomial-time algorithm for solving LPs.  Historically important as the first polynomial-time LP algorithm, but less practical than interior-point methods.

*   **Complexity in Geometric Problems:** The time complexity of LP solvers can be influenced by the specific geometric structure of the problem.  For example, the number of constraints often depends on the number of geometric objects (points, lines, etc.) in the input.

## 5. Implementation and Considerations

*   **LP Solvers:** Libraries like GLPK, CPLEX, Gurobi, and SciPy (with linprog) provide implementations of LP solvers.

*   **Software Packages:**  Use existing computational geometry libraries (e.g., CGAL) in combination with LP solvers to handle geometric data structures and LP formulations.

*   **Numerical Stability:** Be aware of potential numerical issues (e.g., rounding errors) when dealing with floating-point arithmetic in LP solvers.  Scaling and normalization of variables can help improve stability.

*   **Preprocessing:** Simplify the geometric problem or the LP formulation before feeding it to the solver (e.g., removing redundant constraints).

## 6. Recognizing Geometric Problems Suitable for LP

*   **Optimization Problems:** Problems that involve finding the "best" configuration of geometric objects according to some criteria (e.g., minimizing area, maximizing distance).

*   **Problems with Linear Constraints:** Problems where the constraints on the geometric objects can be expressed as linear inequalities or equalities.

*   **Examples:**

    *   **Facility Location:** Placing facilities (e.g., warehouses, hospitals) to minimize transportation costs or maximize accessibility, subject to constraints on location or capacity.
    *   **Intersection Problems:** Finding the smallest intersection between different geometric objects.
    *   **Placement Problems:** Placing objects like machines on a factory floor within constraints of safety distances.
    *   **Minimum Cost Flow Problems on Geometric Graphs:** Solving the problem of finding a flow through a network of geometric graph that meets certain demand criteria while minimizing cost.

## 7. Practice Questions/Exercises

1.  **Line Fitting (L1 Norm):** Formulate a linear program to find the line `y = mx + b` that minimizes the *sum* of the absolute vertical distances to a set of points `(xᵢ, yᵢ)`.

    *   *Answer:*
        *   *Variables:* `m`, `b`, `dᵢ` (where `dᵢ` represents the absolute vertical distance for point `i`).
        *   *Objective:* Minimize the sum of distances: `min Σ dᵢ`
        *   *Constraints:* For each point `(xᵢ, yᵢ)`:
            *   `yᵢ - (mxᵢ + b) ≤ dᵢ`
            *   `(mxᵢ + b) - yᵢ ≤ dᵢ`
            *   `dᵢ ≥ 0` (necessary for absolute values)

2.  **Minimum Spanning Tree with Degree Constraints:**  While the standard minimum spanning tree problem can be solved with greedy algorithms like Kruskal's or Prim's, suppose you have a constraint that the degree of a certain vertex in the MST must be at most *k*. Can this be directly formulated as a linear program? Why or why not?  (This is a trick question - this problem is NP-hard and unlikely to be directly formulated into a simple LP).

    *   *Answer:* This problem is unlikely to be directly and efficiently formulated as a *linear* program.  While integer programming *could* represent this (with binary variables for edge inclusion), the integer constraint makes it NP-hard, and not solvable by typical LP solvers in polynomial time.  The constraint on the degree of a node introduces a global dependency that is difficult to express linearly without using integer variables.

3.  **Finding the largest disc contained within a convex polygon:**  Formulate this problem as a Linear Program.

    *   *Answer:*
        *   *Variables*: center of the disc `(x, y)` and radius `r`
        *   *Objective*: Maximize radius `max r`
        *   *Constraints*: For each edge of the convex polygon described by equation `ax + by <= c`, the distance from the center of the disc to the line must be greater than or equal to the radius.  The distance is given by `|ax + by - c| / sqrt(a^2 + b^2)`. Since we want the disc to be *inside* the polygon,  `ax + by <= c`. So, the constraint becomes:  `(c - ax - by) / sqrt(a^2 + b^2) >= r`. Rearranging:  `ax + by + r*sqrt(a^2 + b^2) <= c`.

4.  **A company has two mines: Mine A produces 1 ton of high-quality ore, 3 tons of medium-quality ore, and 5 tons of low-quality ore per day. Mine B produces 2 tons of each grade of ore per day. The company needs at least 100 tons of high-quality ore, 200 tons of medium-quality ore, and 250 tons of low-quality ore. It costs $1000 per day to operate Mine A and $1500 per day to operate Mine B. How many days should each mine be operated to minimize the cost?**

    *   *Answer*:
        *   *Variables*:  `x`: days Mine A operates, `y`: days Mine B operates.
        *   *Objective*: Minimize cost: `min 1000x + 1500y`
        *   *Constraints*:
            *   High-quality ore: `1x + 2y >= 100`
            *   Medium-quality ore: `3x + 2y >= 200`
            *   Low-quality ore: `5x + 2y >= 250`
            *   `x >= 0`, `y >= 0` (non-negativity constraints)

## 8. Important Points to Remember

*   Not all geometric problems are easily formulated as linear programs. Consider the problem's structure and constraints carefully.
*   Linearization techniques may be required to transform non-linear problems into LPs (often leading to approximations).
*   Duality provides valuable insights into the problem's structure and sensitivity analysis.
*   Choose an appropriate LP solver based on the size and structure of the problem.  Interior-point methods are generally preferred for larger problems.
*   Be mindful of numerical stability issues when implementing LP solvers.

This comprehensive set of notes should give you a strong foundation in understanding and applying linear programming techniques to geometric problems. Remember to practice formulating problems and experimenting with different LP solvers to solidify your understanding. Good luck!
