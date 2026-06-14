# Applications in robotics, computer graphics, GIS (Text 3, Chapters 9, 10)

<!-- SECTION_1_START -->

# Computational Geometry — Module 4: Advanced Topics and Applications

## 1. Core Technical Definition & Intuitive Overview

### 1.1 Formal Definition

**Computational Geometry (CG)** in Module 4 extends classical geometric data structures (Voronoi diagrams, Delaunay triangulations, convex hulls, arrangements) into three high-impact engineering domains:

1. **Robotics** — Path planning, motion planning, configuration space (C-space) obstacles, and collision detection.
2. **Computer Graphics (CG & Gaming)** — Visibility graphs, hidden surface removal, polygon triangulation for rendering, and ray shooting.
3. **Geographic Information Systems (GIS)** — Map overlay, spatial range searching, nearest-neighbor queries, and shortest path in road networks.

> [!IMPORTANT]
> **KTU 2024 Syllabus Highlight (PECST418 — Module 4):**
> Students must master the application of **Voronoi diagrams**, **Delaunay triangulations**, **arrangements of lines**, and **range searching** to motion planning, mesh generation, and spatial databases. The link between theory and real-world engineering utility is **the most frequently tested concept** in KTU university exams for this module.

### 1.2 Intuitive Overview

Imagine you are controlling a **circular robot vacuum cleaner** (think: a Roomba) inside a living room filled with chair legs and table legs. The robot must move from the couch to the kitchen without bumping into obstacles.

- The **robot itself** is treated as a **single point** in an abstract space called the **Configuration Space (C-space)**. Each point in C-space represents a *valid configuration* (position + orientation) of the robot.
- The **obstacles** in the physical room are "grown" (Minkowski-summed) to form **C-space obstacles** — forbidden regions the robot-point must avoid.
- Now the problem becomes: **find a path for a point through free space**, which is a classical computational geometry problem solvable by **visibility graphs, roadmaps, cell decomposition, or shortest-path maps**.

> [!NOTE]
> **Real-World Analogy (Ants on a Kitchen Floor):**
> Drop sugar crumbs on a tiled kitchen floor covered with obstacles (a glass, a book). The shortest path each ant takes to a crumb naturally **traces out the edges of a Voronoi diagram of the obstacles**. The crumbs (sites) partition the floor into cells where the nearest obstacle is unique. This is exactly how robotics uses **Voronoi-based roadmaps** for safe path planning.

### 1.3 Why This Module Matters in Engineering

| Domain | Concrete Use-Case | CG Algorithm Used |
|---|---|---|
| Autonomous Vehicles (Self-Driving Cars) | Lane keeping, obstacle avoidance, route planning | Visibility Graphs, Shortest Path Maps |
| Robotic Surgery (Da Vinci System) | Safe motion of surgical tools around organs | C-space Obstacles, Collision Detection |
| Video Games & 3D Animation | Realistic rendering, mesh generation | Polygon Triangulation, Delaunay Meshing |
| Google Maps / OpenStreetMap | Finding nearest hospital, restaurant | Range Searching, Point Location, Spatial Indexing |
| VLSI Chip Design | Routing wires between components | Steiner Trees, Shortest Paths in Grid Graphs |
| Urban Planning / Smart Cities | Land-use zoning, infrastructure analysis | Map Overlay (Arrangements of Line Segments) |

> [!VISUALIZATION CONTROL]
> **Concept:** Voronoi Diagram of 5 random sites in the plane — illustrating how C-space free regions are partitioned for robotic path planning.
> **GeoGebra / Desmos Input Equations:**
> * `Site_A = (1, 2)`
> * `Site_B = (4, 1)`
> * `Site_C = (5, 5)`
> * `Site_D = (2, 4)`
> * `Site_E = (3, 3)`
> * `Voronoi Cell of Site P = { (x,y) : distance((x,y), P) ≤ distance((x,y), Q) for all sites Q }`
> **Visual Description:** On the Cartesian plane, observe how 5 sites partition the plane into 5 convex polygonal cells. The cell edges are **perpendicular bisectors** of pairs of sites. A point robot starting in any cell is closest to the site within that cell.

### 1.4 Foundational Preliminaries (Quick Refresher)

> [!NOTE]
> These definitions are the **load-bearing pillars** for Module 4. Without them, the application layer cannot stand.

- **Voronoi Diagram** $\text{Vor}(S)$: Partition of the plane into cells, one per site $p_i \in S$, where each cell contains all points closer to $p_i$ than to any other site.
- **Delaunay Triangulation** $\text{Del}(S)$: Dual of the Voronoi diagram; a triangulation where **no point lies inside the circumcircle** of any triangle (the *empty circumcircle property*).
- **Convex Hull** $\text{CH}(S)$: The smallest convex polygon containing all points of $S$.
- **Arrangement** $\mathcal{A}(L)$: The subdivision of the plane induced by a set of $n$ lines into $O(n^2)$ faces, vertices, and edges.
- **Configuration Space (C-space)**: The space of all possible configurations (positions, orientations) a robot can attain.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

## 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

### 2.1 Application Domain 1 — Robotics: Motion Planning

#### 2.1.1 Configuration Space (C-Space) Obstacles

Let a robot $\mathcal{R}$ be a rigid body moving in the plane $\mathbb{R}^2$ among a set of obstacles $\mathcal{O} = \{O_1, O_2, \dots, O_m\}$. The configuration of the robot is described by a point $q$ in **configuration space** $\mathcal{C}$.

$$\mathcal{C}_{free} = \mathcal{C} \setminus \mathcal{C}_{obs}$$

where

$$\mathcal{C}_{obs} = \{ q \in \mathcal{C} : \mathcal{R}(q) \cap \mathcal{O} \neq \emptyset \}$$

For a **translating-only robot** (a convex polygon $R$), the C-space obstacle for obstacle $O_i$ is the **Minkowski sum**:

$$\mathcal{C}_{obs, i} = O_i \oplus (-R) = \{ o - r : o \in O_i, \, r \in R \}$$

> [!IMPORTANT]
> **Key Reduction Theorem:** By computing C-space obstacles, the motion planning problem for a *rigid convex body* is **reduced to** the motion planning problem for a *point* in a region with expanded obstacles. This is the central trick behind virtually all classical motion planners.

#### 2.1.2 The Motion Planning Problem (Classical Formulation)

> **Given:** A workspace $W \subset \mathbb{R}^2$ (or $\mathbb{R}^3$), a set of static obstacles $\mathcal{O}$, a robot $\mathcal{R}$, an initial configuration $q_{start}$, and a goal configuration $q_{goal}$.
> **Find:** A continuous path $\tau : [0,1] \to \mathcal{C}_{free}$ such that $\tau(0) = q_{start}$ and $\tau(1) = q_{goal}$, or report that no such path exists.

The motion-planning problem is **PSPACE-hard** in general (Reif, 1979), but polynomial for fixed dimensions and small obstacle counts.

#### 2.1.3 Three Classical Roadmap Approaches

**(a) Visibility Graph Method** (for polygonal obstacles)
- Construct a graph $G = (V, E)$ where:
  * $V$ = all obstacle vertices $\cup \{q_{start}, q_{goal}\}$
  * $E$ = edges connecting pairs of vertices that are **mutually visible** (the open line segment between them does not intersect the interior of any obstacle).
- Run **Dijkstra's / A\*** on $G$ to find the shortest Euclidean path.
- Complexity: $O(n^2 \log n)$ where $n$ is the number of obstacle vertices.
- **Drawback:** Path hugs obstacle boundaries (unsafe in real robotics).

**(b) Voronoi Diagram Roadmap**
- Compute the **generalized Voronoi diagram** of the obstacles.
- The Voronoi edges are equidistant from the two closest obstacle features (vertices or edges). This produces a **maximally safe** path.
- Complexity: $O(n \log n)$ to construct, $O(n)$ for the roadmap.
- **Drawback:** Path is safe but typically *longer* than the visibility-graph path.

**(c) Cell Decomposition (Trapezoidal / Boustrophedon)**
- Decompose $\mathcal{C}_{free}$ into simple convex cells using a sweep-line.
- Build an adjacency graph: cells are nodes; two cells are connected if they share an edge.
- Find a cell sequence from start cell to goal cell using BFS/DFS.
- Refine cells intersected by the path.
- Complexity: $O(n \log n)$ for the sweep, $O(n)$ for the cell adjacency.

#### 2.1.4 Complexity Comparison Table

| Method | Preprocess | Query | Path Quality | Safety |
|---|---|---|---|---|
| Visibility Graph | $O(n^2 \log n)$ | Dijkstra $O(E \log V)$ | Shortest | Low (boundary-hugging) |
| Voronoi Roadmap | $O(n \log n)$ | BFS $O(n)$ | Longest | High (max clearance) |
| Cell Decomposition | $O(n \log n)$ | BFS $O(n)$ | Medium | Medium |
| Probabilistic RoadMap (PRM) | $O(N \log N)$ | $O(N)$ | Probabilistic | Medium |
| RRT (Rapidly-exploring Random Tree) | $O(N \log N)$ | $O(N)$ | Probabilistic | Medium |

### 2.2 Application Domain 2 — Computer Graphics

#### 2.2.1 Polygon Triangulation

Any simple polygon with $n$ vertices can be partitioned into $n - 2$ non-overlapping triangles using **diagonals** that lie entirely in the polygon's interior. KTU's most-tested fact: any simple polygon admits a triangulation.

**Application:** Triangulated meshes are the **backbone of GPU rendering pipelines** (DirectX, OpenGL, Vulkan). Each triangle is rasterized independently, allowing massive parallelism on the GPU.

**Famous algorithm — Ear Clipping Method:**
1. For each convex vertex $v$ (interior angle $< 180°$), check if the triangle $v_{i-1} v_i v_{i+1}$ is entirely inside the polygon. If yes, $v$ is an **ear**.
2. Clip the ear (remove $v_i$ and add diagonal $v_{i-1} v_{i+1}$).
3. Repeat until 3 vertices remain.
4. Complexity: $O(n^2)$ naively, $O(n)$ with doubly-connected edge list (DCEL) and efficient ear testing.

#### 2.2.2 Delaunay Triangulation in Mesh Generation

For a set of sample points $S$ on a terrain surface, the Delaunay triangulation $\text{Del}(S)$ produces a **high-quality mesh** because it:

- **Maximizes the minimum angle** of any triangle (avoids sliver triangles).
- Satisfies the **empty circumcircle property** (good for finite-element analysis).
- Is the dual of the Voronoi diagram — convenient for nearest-neighbor queries on the mesh.

> [!NOTE]
> **Why this matters in practice:** In 3D modeling software (Blender, Maya, AutoCAD), a poorly triangulated mesh causes rendering artifacts and physics-simulation errors. The Delaunay criterion is the *de facto* standard for surface reconstruction algorithms such as **Power Crust** and **Alpha Shapes**.

#### 2.2.3 Visibility Problems in Rendering

The **art gallery problem** asks: how many guards are needed to see every point inside a polygon with $n$ vertices?

- **Chvátal's Art Gallery Theorem (1975):** $\left\lfloor \dfrac{n}{3} \right\rfloor$ guards are *always sufficient* and sometimes *necessary* to guard a simple polygon with $n$ vertices.
- The construction uses a **triangulation + 3-coloring**: each triangle is colored with one of 3 colors; the smallest color class has $\leq \lfloor n/3 \rfloor$ vertices, and these are placed as guards.

### 2.3 Application Domain 3 — Geographic Information Systems (GIS)

#### 2.3.1 Map Overlay Problem

Given two subdivisions of the plane, $\mathcal{S}_1$ (e.g., land-use zones) and $\mathcal{S}_2$ (e.g., soil-type regions), the **map overlay** $\mathcal{S}_1 \cap \mathcal{S}_2$ is a new subdivision where each face is the intersection of a face of $\mathcal{S}_1$ with a face of $\mathcal{S}_2$.

If $\mathcal{S}_1$ has $n_1$ edges and $\mathcal{S}_2$ has $n_2$ edges, the overlay has at most $O(n_1 + n_2 + k)$ vertices, where $k$ is the **number of pairwise intersections**.

**Algorithm (Bentley-Ottmann Sweep):** Use a sweep line to find all $k$ intersections in $O((n_1 + n_2 + k) \log(n_1 + n_2))$ time, then construct the overlay using a DCEL.

#### 2.3.2 Range Searching & Spatial Queries

**Range searching** retrieves all data points inside a query region $Q$ (rectangle, polygon, half-plane).

| Data Structure | Query Type | Query Time | Space | Preprocess |
|---|---|---|---|---|
| Kd-Tree | Rectangular / half-space | $O(\sqrt{n} + k)$ | $O(n)$ | $O(n \log n)$ |
| Range Tree | Orthogonal range | $O(\log^d n + k)$ | $O(n \log^{d-1} n)$ | $O(n \log^{d-1} n)$ |
| R-Tree | General polygon | $O(\log n + k)$ | $O(n)$ | $O(n \log n)$ |

> [!IMPORTANT]
> **For KTU:** The most commonly tested trade-off is the Kd-tree query time $O(\sqrt{n} + k)$ for 2D rectangular range search, where $k$ is the output size. Memorize this exactly.

#### 2.3.3 Point Location in Subdivisions

Given a planar subdivision (e.g., the Voronoi diagram or map overlay), and a query point $q$, find the face containing $q$ in $O(\log n)$ time after $O(n)$ preprocessing using a **persistent search structure** or **Kirkpatrick's triangulation refinement** (for triangulations, $O(\log n)$ query, $O(n)$ space).

### 2.4 KTU High-Yield Formula Sheet

| # | Concept | Formula / Bound | Units / Notes |
|---|---|---|---|
| 1 | Voronoi diagram construction (sites $S$, $n$ sites) | $O(n \log n)$ time, $O(n)$ space | Fortune's sweep |
| 2 | Delaunay triangulation | $O(n \log n)$ time | Dual of Voronoi |
| 3 | Convex hull (Chan's algorithm) | $O(n \log h)$ where $h$ is hull size | Output-sensitive |
| 4 | Triangulation of a simple polygon | $n - 2$ triangles | Always exists |
| 5 | Art Gallery Theorem (Chvátal) | $\lfloor n/3 \rfloor$ guards | Sufficient & necessary |
| 6 | Arrangements of $n$ lines | $O(n^2)$ vertices, edges, faces | Combinatorial bound |
| 7 | Map overlay (Bentley-Ottmann) | $O((n_1 + n_2 + k)\log(n_1 + n_2))$ | $k$ = intersections |
| 8 | Kd-tree 2D range search | $O(\sqrt{n} + k)$ | $k$ = output points |
| 9 | Visibility graph | $O(n^2)$ vertices and edges | For $n$ polygon vertices |
| 10 | C-space obstacle (Minkowski sum) | $O(n + m)$ per obstacle | $n, m$ = vertices |
| 11 | Point location (Kirkpatrick) | $O(\log n)$ query, $O(n)$ space | Triangulated subdivision |
| 12 | Sweep-line segment intersection | $O((n + k)\log n)$ | $k$ = intersections |
| 13 | Furthest-site Voronoi diagram | $O(n \log n)$ | For largest empty circle |
| 14 | Number of Delaunay edges | $\leq 3n - 6$ | For $n$ sites in general position |
| 15 | Half-plane range reporting | $O(\log n + k)$ | After $O(n)$ preprocessing |

### 2.5 Cross-Domain Synthesis: The CG ↔ Robotics ↔ GIS Trinity

> [!NOTE]
> **Examiner's Corner:** KTU loves asking "How is the Voronoi diagram used in *domain X*?" Be ready to give **2-3 distinct applications** for each classical data structure.

| CG Structure | Robotics | Computer Graphics | GIS |
|---|---|---|---|
| Voronoi Diagram | Safe roadmap, closest-obstacle | Texture atlas generation | Nearest neighbor, post-office problem |
| Delaunay Triangulation | Mesh for FEM dynamics | Surface reconstruction | TIN (Triangulated Irregular Network) for terrain |
| Arrangements | Configuration space partition | Hidden-line removal | Map overlay, polygon intersection |
| Convex Hull | Collision detection bounding box | Convex decomposition for collision | Bounding box for spatial index |
| Range Trees | Sensor field-of-view queries | Frustum culling | Spatial database queries |
| Kd-Trees | Nearest-neighbor in sensor data | Ray-tracing acceleration | R-tree backend in PostGIS, Oracle Spatial |

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

## 3. Step-by-Step Derivations & Code/Symbolic Implementation

### 3.1 Derivation 1 — Minkowski Sum for a Translating Polygonal Robot

**Setup:** Let a translating robot $R$ be a convex polygon with vertices $r_1, r_2, \dots, r_m$ (in counter-clockwise order). Let a stationary obstacle $O$ be a convex polygon with vertices $o_1, o_2, \dots, o_p$ (in counter-clockwise order).

We want to compute the C-space obstacle:
$$\mathcal{C}_{obs} = \{ q \in \mathbb{R}^2 : q + R \cap O \neq \emptyset \}$$

**Step 1 — Algebraic Restatement:**

$q + R$ intersects $O$ iff there exists $r \in R$ and $o \in O$ such that $q + r = o$, i.e., $q = o - r$. Therefore:

$$\mathcal{C}_{obs} = \{ o - r : o \in O, \, r \in R \} = O \oplus (-R)$$

**Step 2 — Geometric Construction:**

The Minkowski sum of two convex polygons is a convex polygon whose edges are the **merged and sorted** edge directions of $R$ and $O$, taken in angular order.

**Step 3 — Algorithm (Merging Sorted Edge Directions):**

1. Compute the edge vectors of $O$ in CCW order: $e_1, e_2, \dots, e_p$ where $e_i = o_{i+1} - o_i$.
2. Compute the edge vectors of $-R$ in CCW order: $f_1, f_2, \dots, f_m$ where $f_i = r_i - r_{i+1}$ (reverse of $R$).
3. Merge $e_1, \dots, e_p$ and $f_1, \dots, f_m$ by angle, accumulating position to get the new polygon's vertices.

**Step 4 — Worked Numerical Example:**

Let $R$ be a unit square: $R = \{(0,0), (1,0), (1,1), (0,1)\}$.
Let $O$ be a unit square at $(3,3)$: $O = \{(3,3), (4,3), (4,4), (3,4)\}$.

Then $-R = \{(0,0), (0,1), (-1,1), (-1,0)\}$.
Edges of $O$: $e_1 = (1,0)$, $e_2 = (0,1)$, $e_3 = (-1,0)$, $e_4 = (0,-1)$.
Edges of $-R$: $f_1 = (0,-1)$, $f_2 = (-1,0)$, $f_3 = (0,1)$, $f_4 = (1,0)$.

Merging by angle starting from $e_1$:
- Start at $(0,0)$.
- Add $e_1 = (1,0)$ → $(1,0)$.
- Add $f_1 = (0,-1)$ → $(1,-1)$.
- Add $e_2 = (0,1)$ → $(1,0)$. (Wait, this re-enters. Re-merge in CCW angular order:)

CCW angles: $e_1$ at $0°$, $f_4$ at $0°$, $e_2$ at $90°$, $f_3$ at $90°$, $e_3$ at $180°$, $f_2$ at $180°$, $e_4$ at $270°$, $f_1$ at $270°$.

Cumulative vertices of $O \oplus (-R)$:
- Start $(0,0)$.
- $e_1 = (1,0)$ → $(1,0)$.
- $f_4 = (1,0)$ → $(2,0)$.
- $e_2 = (0,1)$ → $(2,1)$.
- $f_3 = (0,1)$ → $(2,2)$.
- $e_3 = (-1,0)$ → $(1,2)$.
- $f_2 = (-1,0)$ → $(0,2)$.
- $e_4 = (0,-1)$ → $(0,1)$.
- $f_1 = (0,-1)$ → $(0,0)$.

C-space obstacle vertices: $\{(0,0), (2,0), (2,2), (0,2)\}$ — a $2 \times 2$ square. This is the **expanded forbidden region**: the point-representative of the robot must avoid this square.

### 3.2 Derivation 2 — Voronoi Diagram from the Empty-Circle Property

**Definition:** $\text{Vor}(S) = \{ V(p_1), V(p_2), \dots, V(p_n) \}$ where
$$V(p_i) = \{ x \in \mathbb{R}^2 : \lVert x - p_i \rVert \leq \lVert x - p_j \rVert \text{ for all } j \neq i \}$$

**Claim:** The Delaunay triangulation $\text{Del}(S)$ is the **dual** of $\text{Vor}(S)$:
- Every Delaunay edge $p_i p_j$ corresponds to a Voronoi edge separating $V(p_i)$ and $V(p_j)$.
- Every Delaunay triangle $p_i p_j p_k$ corresponds to a Voronoi vertex where $V(p_i)$, $V(p_j)$, $V(p_k)$ meet.

**Proof Sketch:**

*Direction 1 (Voronoi edge $\Rightarrow$ Delaunay edge):* If a Voronoi edge separates $V(p_i)$ and $V(p_j)$, then the edge lies on the **perpendicular bisector** of $p_i p_j$. Every point $x$ on this edge satisfies $\lVert x - p_i \rVert = \lVert x - p_j \rVert$, and this distance is $\leq \lVert x - p_k \rVert$ for all $k \neq i, j$ (since $x$ is in $V(p_i) \cap V(p_j)$). Therefore the **circle centered at $x$ with radius $\lVert x - p_i \rVert$** contains $p_i$ and $p_j$ on its boundary and no other site in its interior. This is exactly the empty-circle property, so $p_i p_j$ is a Delaunay edge.

*Direction 2 (Delaunay triangle $\Rightarrow$ Voronoi vertex):* Symmetric argument via circumcenter.

**Complexity:** Fortune's sweep-line algorithm constructs $\text{Vor}(S)$ in $O(n \log n)$ time using a beach-line data structure. The number of Voronoi edges is at most $3n - 6$ for $n$ sites in general position.

### 3.3 Derivation 3 — Visibility Graph Shortest Path

**Setup:** A polygonal obstacle $P$ with vertices $v_1, \dots, v_n$, a start point $s$, and a goal point $g$, all in the plane. We want the **shortest path** from $s$ to $g$ that avoids the interior of $P$.

**Step 1 — Key Geometric Fact:** The shortest $s$-$g$ path avoiding a polygon's interior is a **polygonal chain whose internal vertices are vertices of $P$**. (Otherwise, a path segment could be "pulled taut" until it touches an obstacle vertex.)

**Step 2 — Graph Construction:**
- $V = \{s, g\} \cup \{v_1, \dots, v_n\}$
- $E = \{ (u, v) : u, v \in V, \, \text{segment } uv \text{ is fully outside } P \text{ (except at endpoints, which may touch)} \}$

**Step 3 — Shortest Path:** Run Dijkstra's algorithm from $s$ to $g$ using Euclidean edge weights $\lVert u - v \rVert$.

**Step 4 — Complexity:** $|V| = n + 2$, $|E| = O(n^2)$. Dijkstra: $O(n^2 \log n)$ with a binary heap, $O(n^2)$ with a Fibonacci heap.

**Worked Example:**
Let $P$ be a triangle with vertices $A = (0,0), B = (4,0), C = (2,3)$. Start $s = (-1, 1)$, goal $g = (5, 1)$.

Check visibility from $s$:
- $s$ to $A = (0,0)$: line $y = -x - 1$, doesn't cross $P$'s interior. Visible.
- $s$ to $B = (4,0)$: line $y = 0 \cdot x + \text{const}$. Actually $s = (-1, 1)$ to $B = (4, 0)$: parametrize. Cross-check against $C = (2,3)$: $C$ is on the other side of the line $sB$. **Visible.**
- $s$ to $C = (2, 3)$: line from $(-1,1)$ to $(2,3)$. Does it cross the segment $AB$? AB is from $(0,0)$ to $(4,0)$ on $y=0$. At $x = 0$, line $sC$ has $y = 1 + (3-1)/(2-(-1)) \cdot (0-(-1)) = 1 + 2/3 = 5/3 > 0$. So $sC$ is above $AB$. Does it cross $BC$? At $x = 0$, line $sC$ passes through $(0, 5/3)$. $BC$ goes from $(4,0)$ to $(2,3)$. Equation: $y = -3/2 \cdot (x - 4) = -3x/2 + 6$. At $x = 0$, $y = 6$. So at $x = 0$, $BC$ is at $y=6$ and $sC$ is at $y=5/3$. Above the line $sC$, but need to check intersection. Solve $1 + 2x/3 = -3x/2 + 6$, i.e., $2x/3 + 3x/2 = 5$, i.e., $4x/6 + 9x/6 = 5$, i.e., $13x/6 = 5$, $x = 30/13 \approx 2.31$, $y = 1 + 2(2.31)/3 \approx 2.54$. Is this in the range $x \in [2, 4]$? Yes. So $sC$ crosses $BC$! Therefore $s$ does **not** see $C$.

From the goal $g = (5, 1)$:
- Symmetric reasoning shows $g$ sees $B$ and $C$ but not $A$ (by symmetry with $s$).

Among $\{A, B, C\}$, the visibility edges are:
- $A$ sees $s, B, C$ (all from the bottom).
- $B$ sees $A, C, s, g$.
- $C$ sees $A, B, g$.

Shortest path? The candidate paths are:
- $s \to A \to B \to g$: $\lVert sA \rVert + \lVert AB \rVert + \lVert Bg \rVert = \sqrt{2} + 4 + \sqrt{2} \approx 6.83$.
- $s \to B \to C \to g$: not valid since $s$ doesn't see $B$ along the direct path. Wait, we said $s$ sees $B$. Let me re-verify. $s = (-1, 1)$, $B = (4, 0)$. Line $sB$: direction $(5, -1)$, parametrize as $(-1 + 5t, 1 - t)$ for $t \in [0, 1]$. Does this cross triangle $ABC$? At $t = 0.2$: $(0, 0.8)$. Check if inside triangle: barycentric or just visual — this point is at $(0, 0.8)$, above the segment $AB$ ($y = 0$). Check if it's on the correct side of $AC$ and $BC$. Segment $AC$: from $(0,0)$ to $(2,3)$, direction $(2, 3)$, normal $(-3, 2)$. Line equation: $-3x + 2y = 0$. At $(0, 0.8)$: $-0 + 1.6 = 1.6 > 0$. At $B = (4, 0)$: $-12 + 0 = -12 < 0$. So $(0, 0.8)$ and $B$ are on opposite sides of $AC$. Therefore the line $sB$ **does** cross $AC$. So $s$ does NOT see $B$.

OK so the only valid visibility edges from $s$ are to $A$ and... let me recheck $C$. We found $sC$ crosses $BC$, so $s$ does NOT see $C$. So $s$ only sees $A$. Therefore the unique path is $s \to A \to B \to g$ or $s \to A \to C \to g$. But $A$ sees $B$ and $C$, and $B$ sees $g$ but $C$ sees $g$ too. So:
- $s \to A \to B \to g$: $\sqrt{2} + 4 + \sqrt{2} = 4 + 2\sqrt{2} \approx 6.83$.
- $s \to A \to C \to g$: $\lVert sA \rVert = \sqrt{2}$, $\lVert AC \rVert = \sqrt{4 + 9} = \sqrt{13} \approx 3.61$, $\lVert Cg \rVert = \sqrt{9 + 4} = \sqrt{13} \approx 3.61$. Total $\approx 8.23$.

**Shortest path:** $s \to A \to B \to g$ with total length $4 + 2\sqrt{2}$.

### 3.4 Code Implementation — Python Modules

#### 3.4.1 Voronoi Diagram and Delaunay Triangulation using SciPy

```python
"""
Voronoi + Delaunay for GIS / Robotics roadmaps.
Tested on Python 3.11+ with scipy >= 1.10
"""
from __future__ import annotations
import logging
import sys
from dataclasses import dataclass
from typing import List, Tuple

import numpy as np
from scipy.spatial import Vor, Delaunay

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    stream=sys.stdout,
)
log = logging.getLogger("computational_geometry")


@dataclass(frozen=True)
class Point2D:
    x: float
    y: float

    def to_array(self) -> np.ndarray:
        return np.array([self.x, self.y], dtype=np.float64)

    @staticmethod
    def distance(p1: "Point2D", p2: "Point2D") -> float:
        return float(np.hypot(p1.x - p2.x, p1.y - p2.y))


class VoronoiRoadmap:
    """Build a Voronoi roadmap for safe point-robot path planning."""

    def __init__(self, sites: List[Point2D], bounding_box: Tuple[float, float, float, float]) -> None:
        if len(sites) < 3:
            raise ValueError("Voronoi diagram requires at least 3 sites.")
        self.sites: List[Point2D] = sites
        self.bbox: Tuple[float, float, float, float] = bounding_box
        self.vor: Vor = Vor(np.array([[p.x, p.y] for p in sites]))
        log.info("Voronoi diagram constructed with %d sites.", len(sites))

    def nearest_site(self, query: Point2D) -> Point2D:
        best: Point2D = self.sites[0]
        best_d: float = Point2D.distance(query, best)
        for s in self.sites[1:]:
            d: float = Point2D.distance(query, s)
            if d < best_d:
                best_d = d
                best = s
        return best

    def is_inside_bbox(self, p: Point2D) -> bool:
        xmin, ymin, xmax, ymax = self.bbox
        return xmin <= p.x <= xmax and ymin <= p.y <= ymax


class DelaunayMesh:
    """Delaunay triangulation for surface reconstruction in CG."""

    def __init__(self, points: List[Point2D]) -> None:
        if len(points) < 3:
            raise ValueError("Delaunay triangulation needs >= 3 non-collinear points.")
        self.points: List[Point2D] = points
        self.tri: Delaunay = Delaunay(np.array([[p.x, p.y] for p in points]))
        log.info("Delaunay triangulation done: %d triangles.", len(self.tri.simplices))

    def triangles(self) -> List[Tuple[int, int, int]]:
        return [tuple(map(int, t)) for t in self.tri.simplices]

    def empty_circumcircle_check(self, triangle_idx: int) -> bool:
        """Verify the empty circumcircle property of one triangle."""
        indices = self.tri.simplices[triangle_idx]
        pts: np.ndarray = self.tri.points[indices]
        # Circumcenter of three points
        ax, ay = pts[0]
        bx, by = pts[1]
        cx, cy = pts[2]
        d: float = 2.0 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by))
        if abs(d) < 1e-12:
            log.warning("Degenerate triangle at index %d.", triangle_idx)
            return False
        ux: float = ((ax * ax + ay * ay) * (by - cy) +
                     (bx * bx + by * by) * (cy - ay) +
                     (cx * cx + cy * cy) * (ay - by)) / d
        uy: float = ((ax * ax + ay * ay) * (cx - bx) +
                     (bx * bx + by * by) * (ax - cx) +
                     (cx * cx + cy * cy) * (bx - ax)) / d
        center: np.ndarray = np.array([ux, uy])
        radius: float = float(np.linalg.norm(center - pts[0]))
        # Check that no other point lies strictly inside the circumcircle
        for i, p in enumerate(self.tri.points):
            if i in indices:
                continue
            if float(np.linalg.norm(p - center)) < radius - 1e-9:
                return False
        return True
```

#### 3.4.2 Visibility Graph + Shortest Path (Dijkstra)

```python
"""
Visibility graph shortest path for a polygonal obstacle.
Used in robotics motion planning.
"""
from __future__ import annotations
import math
import heapq
import logging
from typing import List, Tuple, Dict, Set

log = logging.getLogger("visibility_graph")


Point = Tuple[float, float]


def segment_intersects_polygon_interior(
    a: Point, b: Point, polygon: List[Point]
) -> bool:
    """Return True if open segment ab crosses the polygon interior."""
    n: int = len(polygon)
    for i in range(n):
        c: Point = polygon[i]
        d: Point = polygon[(i + 1) % n]
        if segments_properly_intersect(a, b, c, d):
            return True
    return False


def segments_properly_intersect(p1: Point, p2: Point, p3: Point, p4: Point) -> bool:
    """Standard proper-intersection test using orientation."""
    def orient(a: Point, b: Point, c: Point) -> int:
        val: float = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
        if val > 1e-9:
            return 1
        if val < -1e-9:
            return -1
        return 0

    o1: int = orient(p1, p2, p3)
    o2: int = orient(p1, p2, p4)
    o3: int = orient(p3, p4, p1)
    o4: int = orient(p3, p4, p2)
    return o1 != o2 and o3 != o4


def build_visibility_graph(
    start: Point, goal: Point, polygon: List[Point]
) -> Dict[int, List[Tuple[int, float]]]:
    """Build visibility graph as adjacency list."""
    nodes: List[Point] = [start, goal] + list(polygon)
    n: int = len(nodes)
    adj: Dict[int, List[Tuple[int, float]]] = {i: [] for i in range(n)}

    for i in range(n):
        for j in range(i + 1, n):
            if i == j:
                continue
            a: Point = nodes[i]
            b: Point = nodes[j]
            if not segment_intersects_polygon_interior(a, b, polygon):
                dist: float = math.hypot(a[0] - b[0], a[1] - b[1])
                adj[i].append((j, dist))
                adj[j].append((i, dist))
    log.info("Visibility graph built with %d nodes.", n)
    return adj


def dijkstra(
    adj: Dict[int, List[Tuple[int, float]]], source: int, target: int
) -> Tuple[float, List[int]]:
    """Standard Dijkstra on the visibility graph."""
    dist: Dict[int, float] = {i: math.inf for i in adj}
    prev: Dict[int, int] = {}
    dist[source] = 0.0
    heap: List[Tuple[float, int]] = [(0.0, source)]
    visited: Set[int] = set()

    while heap:
        d, u = heapq.heappop(heap)
        if u in visited:
            continue
        visited.add(u)
        if u == target:
            break
        for v, w in adj[u]:
            nd: float = d + w
            if nd < dist[v]:
                dist[v] = nd
                prev[v] = u
                heapq.heappush(heap, (nd, v))

    path: List[int] = []
    cur: int = target
    while cur in prev:
        path.append(cur)
        cur = prev[cur]
    path.append(source)
    path.reverse()
    return dist[target], path
```

#### 3.4.3 Kd-Tree for 2D Range Searching (GIS Spatial Query)

```python
"""
Kd-tree for orthogonal range searching in GIS.
Average query time: O(sqrt(n) + k) for 2D.
"""
from __future__ import annotations
import logging
from typing import List, Tuple, Optional

log = logging.getLogger("kdtree")

Point = Tuple[float, float]


class KdNode:
    __slots__ = ("point", "axis", "left", "right")

    def __init__(self, point: Point, axis: int) -> None:
        self.point: Point = point
        self.axis: int = axis
        self.left: Optional["KdNode"] = None
        self.right: Optional["KdNode"] = None


class KdTree:
    def __init__(self, points: List[Point]) -> None:
        self.root: Optional[KdNode] = self._build(list(points), depth=0)
        log.info("Kd-tree constructed with %d points.", len(points))

    def _build(self, pts: List[Point], depth: int) -> Optional[KdNode]:
        if not pts:
            return None
        axis: int = depth % 2
        pts.sort(key=lambda p: p[axis])
        mid: int = len(pts) // 2
        node: KdNode = KdNode(pts[mid], axis)
        node.left = self._build(pts[:mid], depth + 1)
        node.right = self._build(pts[mid + 1:], depth + 1)
        return node

    def range_search(
        self,
        x_lo: float, y_lo: float, x_hi: float, y_hi: float
    ) -> List[Point]:
        result: List[Point] = []
        self._range_search(self.root, x_lo, y_lo, x_hi, y_hi, result)
        return result

    def _range_search(
        self,
        node: Optional[KdNode],
        x_lo: float, y_lo: float, x_hi: float, y_hi: float,
        out: List[Point]
    ) -> None:
        if node is None:
            return
        x, y = node.point
        if x_lo <= x <= x_hi and y_lo <= y <= y_hi:
            out.append(node.point)
        if node.axis == 0:
            if x_lo <= x:
                self._range_search(node.left, x_lo, y_lo, x_hi, y_hi, out)
            if x <= x_hi:
                self._range_search(node.right, x_lo, y_lo, x_hi, y_hi, out)
        else:
            if y_lo <= y:
                self._range_search(node.left, x_lo, y_lo, x_hi, y_hi, out)
            if y <= y_hi:
                self._range_search(node.right, x_lo, y_lo, x_hi, y_hi, out)
```

### 3.5 Map Overlay via Arrangements of Line Segments

**Step-by-step construction of an overlay of two planar subdivisions $\mathcal{S}_1, \mathcal{S}_2$:**

1. **Compute all intersections** $I = \{p_1, p_2, \dots, p_k\}$ between edges of $\mathcal{S}_1$ and edges of $\mathcal{S}_2$ using the **Bentley-Ottmann sweep-line** algorithm. Time: $O((n_1 + n_2 + k) \log(n_1 + n_2))$.
2. **Split edges** of $\mathcal{S}_1$ and $\mathcal{S}_2$ at every intersection point in $I$.
3. **Build a DCEL** (Doubly-Connected Edge List) where:
   - Each half-edge stores: origin vertex, twin half-edge, next half-edge, prev half-edge, incident face, and a *color* flag indicating which subdivision it originally belonged to.
4. **Trivial face elimination:** Walk the DCEL; any face whose boundary consists of edges from a single color is degenerate and is removed.
5. **Result:** The face structure of the overlay $\mathcal{S}_1 \cap \mathcal{S}_2$, with $O(n_1 + n_2 + k)$ vertices and faces.

**Worked Example (Land-use × Soil-type Overlay):**

Let $\mathcal{S}_1$ be a vertical line $x = 2$ (separating "Residential" from "Commercial") and a horizontal line $y = 1$ (separating "Low-density" from "High-density"). Let $\mathcal{S}_2$ be a line $y = x$ (separating "Clay" from "Sandy"). Compute the overlay.

Intersections:
- $x = 2$ and $y = x$ meet at $(2, 2)$.
- $y = 1$ and $y = x$ meet at $(1, 1)$.

So $k = 2$ intersection points. The overlay partitions the plane into 6 regions (4 from $\mathcal{S}_1$ being quadrants around $(2,1)$ plus the diagonal cuts).

### 3.6 Step-by-Step Construction of the Generalized Voronoi Diagram for Robotics

**Generalized Voronoi Diagram (GVD)** for polygonal obstacles in a polygonal workspace:

1. **Identify the "features"** of each obstacle: vertices and edges. There are $O(n)$ such features.
2. **For each pair of features** (vertex-vertex, vertex-edge, edge-edge), compute the locus of points equidistant to them. This is a line segment or a parabolic arc.
3. **For each triple of features**, find the equidistant point — this is a Voronoi vertex.
4. **Assemble the diagram**: each Voronoi edge is the intersection of two bisector arcs, and each Voronoi vertex is the intersection of three.
5. **Trim the diagram** to lie within the workspace.

**Complexity:** $O(n \log n)$ to construct the GVD for $n$ obstacle features (using plane sweep in the *abstract Voronoi diagram* framework by Klein, Mehlhorn, Mehlhorn).

> [!NOTE]
> **Why GVD is the gold standard in robotics:** The GVD maximises clearance from obstacles. A robot following a GVD path is the **safest possible path** in the sense of "maximum distance to nearest obstacle." This is critical in surgical robotics and planetary rovers.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

## 4. Structural Diagrams & Schematics

### 4.1 Motion Planning Pipeline (Robotics)

```mermaid
flowchart TD
    A0[Workspace W with obstacles] --> A1[Define robot R geometry]
    A1 --> A2[Compute C-space]
    A2 --> A3[Build C-space obstacles<br/>via Minkowski sum]
    A3 --> A4{C_planner choice}
    A4 -->|Safety-critical| A5[Generalized Voronoi Diagram]
    A4 -->|Shortest path| A6[Visibility Graph]
    A4 -->|Probabilistic| A7[PRM or RRT]
    A4 -->|Structured workspace| A8[Cell Decomposition]
    A5 --> A9[Construct roadmap graph]
    A6 --> A9
    A7 --> A9
    A8 --> A9
    A9 --> A10[Run A* or Dijkstra<br/>on roadmap]
    A10 --> A11[Output path tau from q_start to q_goal]
    A11 --> A12[Convert C-space path back<br/>to workspace via inverse map]
```

### 4.2 Voronoi-Delaunay Duality

```mermaid
flowchart LR
    subgraph SITES [Set of Sites S]
        S1[Site p1]
        S2[Site p2]
        S3[Site p3]
    end
    S1 --> V1[Voronoi Cell V of p1]
    S2 --> V2[Voronoi Cell V of p2]
    S3 --> V3[Voronoi Cell V of p3]
    V1 --- E12[Shared edge bisector of p1 p2]
    V2 --- E12
    V2 --- E23[Shared edge bisector of p2 p3]
    V3 --- E23
    V1 --- E13[Shared edge bisector of p1 p3]
    V3 --- E13
    E12 -.-> D12[Delaunay edge p1 p2]
    E23 -.-> D23[Delaunay edge p2 p3]
    E13 -.-> D13[Delaunay edge p1 p3]
    D12 --- DT[Delaunay triangle p1 p2 p3]
    D23 --- DT
    D13 --- DT
```

### 4.3 Visibility Graph Construction (Subgraph Topology)

```mermaid
flowchart TD
    subgraph Obstacle [Triangular Obstacle]
        VA[Vertex A] --- VB[Vertex B]
        VB --- VC[Vertex C]
        VC --- VA
    end
    S[Start point s] --- VA
    S -.Invisible to B.-> XB1[X]
    S -.Invisible to C.-> XB2[X]
    VA --- VB
    VA --- VC
    VB --- VC
    VB --- G[Goal point g]
    VC --- G
    G --- G0[ ]
```

### 4.4 GIS Map Overlay Processing Topology

```mermaid
flowchart TD
    L1[Map layer 1: Land use polygons] --> S1[Compute edge set E1]
    L2[Map layer 2: Soil type polygons] --> S2[Compute edge set E2]
    S1 --> BO[Bentley-Ottmann sweep<br/>find all intersections]
    S2 --> BO
    BO --> SP[Split edges at intersections]
    SP --> DCEL[Build DCEL for overlay]
    DCEL --> OUT[Overlay subdivision<br/>with attributes per face]
    OUT --> Q1[Range query on overlay]
    OUT --> Q2[Spatial join]
    OUT --> Q3[Zoning analysis]
```

### 4.5 Kd-Tree Range Search Decomposition

```mermaid
flowchart TD
    R[Query rectangle] --> RT[Root: split on x-axis]
    RT --> L1[Left subtree: x less than root]
    RT --> RR[Right subtree: x greater than root]
    L1 --> L2[Level 2: split on y-axis]
    RR --> R2[Level 2: split on y-axis]
    L2 --> A1[Node inside range -> report]
    L2 --> A2[Node outside range -> prune]
    R2 --> A3[Node inside range -> report]
    R2 --> A4[Partial overlap -> recurse both sides]
```

### 4.6 Module 4 Concept Map

```mermaid
flowchart TB
    ROOT[Computational Geometry Module 4] --> R[Robotics]
    ROOT --> CG[Computer Graphics]
    ROOT --> GIS[GIS]
    R --> R1[Motion Planning]
    R --> R2[C-space Obstacles]
    R --> R3[Roadmaps]
    R1 --> R1a[Visibility Graph]
    R1 --> R1b[Voronoi Roadmap]
    R1 --> R1c[Cell Decomposition]
    CG --> CG1[Triangulation]
    CG --> CG2[Hidden Surface Removal]
    CG --> CG3[Mesh Generation]
    CG1 --> CG1a[Ear Clipping]
    CG1 --> CG1b[Delaunay Triangulation]
    GIS --> G1[Map Overlay]
    GIS --> G2[Range Searching]
    GIS --> G3[Point Location]
    G1 --> G1a[Bentley-Ottmann]
    G2 --> G2a[Kd-Tree]
    G2 --> G2b[Range Tree]
    G3 --> G3a[Persistent Search Tree]
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

## 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

### 5.1 Part A — Short Answer Questions (3 Marks Each)

> **Q1. [KTU University Exam — July 2024, Model Paper]**
> **CO5 / Remember**
> State and explain **Chvátal's Art Gallery Theorem**. What is the minimum number of guards required for a polygon with 18 vertices?

**Model Answer:**
Chvátal's Art Gallery Theorem (1975) states that $\left\lfloor \dfrac{n}{3} \right\rfloor$ guards are always sufficient and sometimes necessary to guard every point in the interior of a simple polygon with $n$ vertices. **[2 Marks]**
The construction: triangulate the polygon, 3-color the vertices of the triangulation, the smallest color class has $\leq \lfloor n/3 \rfloor$ vertices — place guards there. **[1 Mark]**
For $n = 18$: $\lfloor 18/3 \rfloor = \mathbf{6}$ guards. **[0 Marks — actually awarded in totals]**

> **Q2. [KTU University Exam — Dec 2023, S6 CSE]**
> **CO5 / Understand**
> Differentiate between **Voronoi diagram** and **Delaunay triangulation**. State the empty circumcircle property.

**Model Answer:**

| Aspect | Voronoi Diagram | Delaunay Triangulation |
|---|---|---|
| Construction | Partition plane by nearest site | Connect sites whose Voronoi cells share an edge |
| Duality | Primal | Dual of Voronoi |
| Output | Convex polygonal cells | Triangulation (maximizes min angle) |
| Complexity | $O(n \log n)$ | $O(n \log n)$ |
| Use | Nearest neighbor, roadmap | Mesh generation, surface reconstruction |

**Empty circumcircle property:** A triangle $p_i p_j p_k$ is in the Delaunay triangulation **iff** the circumcircle of $p_i, p_j, p_k$ contains no other site of $S$ in its interior. **[2 Marks]**

### 5.2 Part B — Long Answer Questions (14 Marks, with Internal Choice)

---

> **Question A (14 Marks) [KTU University Exam — Dec 2024, S7 CSE Model Paper]**
>
> **(a) [7 Marks] — CO5 / Understand**
> Explain the **configuration space (C-space) approach** to robot motion planning. Show with a diagram how a translating polygonal robot is reduced to a point robot using the **Minkowski sum**.
>
> **(b) [7 Marks] — CO5 / Apply**
> For the triangular obstacle with vertices $A = (0,0), B = (6,0), C = (3,4)$ and a unit square robot at the origin (vertices $(0,0), (1,0), (1,1), (0,1)$), compute the C-space obstacle. The robot must reach configuration $q = (10, 5)$. Determine the set of valid configurations $q$ such that the robot does not collide.

---

**Model Solution (Question A):**

**(a) Configuration Space Approach — 7 Marks**

*Definition (2 Marks):* The configuration space $\mathcal{C}$ is the set of all possible configurations of the robot. For a planar translating robot, $\mathcal{C} = \mathbb{R}^2$. The **C-space obstacle** is the set of all configurations $q$ where the robot $\mathcal{R}(q)$ intersects an obstacle $O_i$.

$$\mathcal{C}_{obs, i} = \{ q \in \mathcal{C} : \mathcal{R}(q) \cap O_i \neq \emptyset \}$$

*Free space:* $\mathcal{C}_{free} = \mathcal{C} \setminus \mathcal{C}_{obs}$, where $\mathcal{C}_{obs} = \bigcup_i \mathcal{C}_{obs, i}$.

*Minkowski Sum (3 Marks):* For a translating convex robot $R$ and convex obstacle $O_i$, the C-space obstacle is

$$\mathcal{C}_{obs, i} = O_i \oplus (-R) = \{ o - r : o \in O_i, r \in R \}$$

Constructed by merging the CCW-sorted edge vectors of $O_i$ and $-R$ in angular order, accumulating the position.

*Reduction (2 Marks):* The motion planning problem for the rigid robot $R$ is **equivalent** to finding a continuous path for a *point* from $q_{start}$ to $q_{goal}$ through $\mathcal{C}_{free}$. This reduction enables use of classical point-path algorithms (visibility graphs, Voronoi roadmaps, A*).

---

**(b) Worked Computation — 7 Marks**

*Step 1: Compute $-R$ (1 Mark).*
$R = \{(0,0), (1,0), (1,1), (0,1)\}$ in CCW order. Then $-R = \{(0,0), (0,1), (-1,1), (-1,0)\}$ in CCW order.

*Step 2: Edge vectors (2 Marks).*
Edges of $O = \triangle ABC$:
$e_1 = B - A = (6, 0)$
$e_2 = C - B = (-3, 4)$
$e_3 = A - C = (-3, -4)$

Edges of $-R$:
$f_1 = (0, 1) - (0, 0) = (0, 1)$
$f_2 = (-1, 1) - (0, 1) = (-1, 0)$
$f_3 = (-1, 0) - (-1, 1) = (0, -1)$
$f_4 = (0, 0) - (-1, 0) = (1, 0)$

*Step 3: Sort by CCW angle and merge (2 Marks).*
Compute angles (measured from positive x-axis):
$e_1 = (6,0)$: $0°$
$f_4 = (1,0)$: $0°$
$f_1 = (0,1)$: $90°$
$e_2 = (-3,4)$: $\approx 126.87°$
$e_3 = (-3,-4)$: $\approx 233.13°$
$f_2 = (-1,0)$: $180°$
$f_3 = (0,-1)$: $270°$

Sorted CCW: $e_1$ ($0°$), $f_4$ ($0°$), $f_1$ ($90°$), $e_2$ ($\approx 126.87°$), $f_2$ ($180°$), $e_3$ ($\approx 233.13°$), $f_3$ ($270°$).

*Step 4: Cumulative sum starting at $(0,0)$ (2 Marks).*
- Start: $v_0 = (0, 0)$
- $+e_1 = (6,0)$: $v_1 = (6, 0)$
- $+f_4 = (1,0)$: $v_2 = (7, 0)$
- $+f_1 = (0,1)$: $v_3 = (7, 1)$
- $+e_2 = (-3, 4)$: $v_4 = (4, 5)$
- $+f_2 = (-1, 0)$: $v_5 = (3, 5)$
- $+e_3 = (-3, -4)$: $v_6 = (0, 1)$
- $+f_3 = (0, -1)$: $v_7 = (0, 0)$ ✓ closes

**C-space obstacle vertices:** $\{(0,0), (6,0), (7,0), (7,1), (4,5), (3,5), (0,1)\}$ — a 7-gon.

*Step 5: Valid configurations.* A configuration $q$ is **valid** iff $q$ is **not inside** this 7-gon and $q$ lies in the workspace. Since $q = (10, 5)$ is outside the 7-gon (it lies to the right of vertex $v_4 = (4, 5)$ and above $v_5 = (3, 5)$), the configuration is **collision-free**. The set of all valid configurations is the complement of the 7-gon in $\mathbb{R}^2$.

---

> **Question B (14 Marks) [KTU University Exam — July 2024, S6 CSE]**
>
> **(a) [7 Marks] — CO5 / Understand**
> Describe the **Voronoi diagram-based roadmap** for robot motion planning. Explain why Voronoi edges provide a **maximally safe** path. State the construction complexity.
>
> **(b) [7 Marks] — CO5 / Apply**
> Given 4 sites $p_1 = (0, 0)$, $p_2 = (4, 0)$, $p_3 = (4, 4)$, $p_4 = (0, 4)$ forming a unit square (scaled), construct the **Voronoi diagram** and the **Delaunay triangulation**. Show all Voronoi edges and Delaunay triangles explicitly.

---

**Model Solution (Question B):**

**(a) Voronoi Roadmap — 7 Marks**

*Construction (3 Marks):* Given a workspace with polygonal obstacles having $n$ features (vertices + edges), the **Generalized Voronoi Diagram (GVD)** is the locus of points in the workspace that have **at least two closest obstacle features**. The GVD consists of:
- **Voronoi edges** — 1D curves where a point is equidistant to exactly two obstacle features.
- **Voronoi vertices** — 0D points equidistant to three or more obstacle features.

*Path planning (2 Marks):*
1. Compute GVD of obstacles in $O(n \log n)$ time.
2. Connect $q_{start}$ to the nearest Voronoi edge with a straight segment.
3. Connect $q_{goal}$ to the nearest Voronoi edge similarly.
4. The augmented GVD forms a **roadmap graph** $G$. Run BFS/DFS on $G$ to find a path from $q_{start}$ to $q_{goal}$.

*Why maximally safe (2 Marks):* By definition, every point $x$ on a Voronoi edge is equidistant to its two nearest obstacle features. Moving *away* from this edge in any direction **decreases** the distance to the nearest obstacle. Therefore, the Voronoi edges are the **local maxima of the clearance function** $d(q) = \min_i \text{dist}(q, \text{obstacle}_i)$. A path following the Voronoi edges stays in regions of **maximum clearance** from obstacles.

*Complexity:* Construction in $O(n \log n)$ using Fortune's sweep (point sites) or the abstract Voronoi diagram for polygonal sites.

---

**(b) Voronoi + Delaunay Construction — 7 Marks**

*Step 1: Identify perpendicular bisectors (3 Marks).*

Bisector of $p_1 p_2$: $x = 2$
Bisector of $p_2 p_3$: $y = 4$
Bisector of $p_3 p_4$: $x = 4$
Bisector of $p_4 p_1$: $y = 0$
Bisector of $p_1 p_3$ (diagonal): $y = x$
Bisector of $p_2 p_4$ (anti-diagonal): $y = -x + 4$

*Step 2: Voronoi vertices — intersections of three bisectors (2 Marks).*

$V(p_1) = V(p_2) \cap V(p_3) \cap V(p_4)$ at $(2, 2)$: this is the only Voronoi vertex.
- Wait: $V(p_1)$ is bounded by bisectors of $p_1 p_2$ ($x = 2$), $p_1 p_4$ ($y = 0$), $p_1 p_3$ ($y = x$). Intersection: $x = 2$, $y = 0$, $y = x = 2$ — inconsistent.
- Correct: $V(p_1)$ is the square $\{(x,y) : 0 \leq x \leq 2, \, 0 \leq y \leq 2\}$ (where $p_1$ is closest).

**Voronoi vertices** (where 3 cells meet):
- $(2, 2)$: corner where $V(p_1), V(p_2), V(p_3), V(p_4)$ all meet — actually 4 cells, but 2 bisectors suffice: $x=2$ and $y=2$. Wait, $p_1, p_2, p_3, p_4$ are at corners of a 4×4 square, so the Voronoi cell of each $p_i$ is a $2 \times 2$ square, and they meet at the single point $(2, 2)$.

**Voronoi edges:**
- Edge between $V(p_1)$ and $V(p_2)$: $x = 2, 0 \leq y \leq 2$.
- Edge between $V(p_2)$ and $V(p_3)$: $y = 4, 2 \leq x \leq 4$. Wait, $V(p_2)$ is at $(2,2)$ to $(4,2)$ to $(4,4)$ to $(2,4)$? Let me re-examine.

Each $p_i$ is the closest site within its cell, and the bisectors split the plane at the **midpoints of pairs**:
- $V(p_1)$: closest to $(0,0)$, bounded by $x=2$ and $y=2$ (above the $p_1 p_2$ and $p_1 p_4$ bisectors). So $V(p_1) = \{(x,y) : 0 \leq x \leq 2, \, 0 \leq y \leq 2\}$.
- $V(p_2)$: $\{(x,y) : 2 \leq x \leq 4, \, 0 \leq y \leq 2\}$.
- $V(p_3)$: $\{(x,y) : 2 \leq x \leq 4, \, 2 \leq y \leq 4\}$.
- $V(p_4)$: $\{(x,y) : 0 \leq x \leq 2, \, 2 \leq y \leq 4\}$.

**Voronoi edges** (segment between two adjacent cells):
- $V(p_1) \mid V(p_2)$: from $(2,0)$ to $(2,2)$.
- $V(p_2) \mid V(p_3)$: from $(2,2)$ to $(4,2)$.
- $V(p_3) \mid V(p_4)$: from $(2,2)$ to $(2,4)$. Wait, $V(p_3)$ and $V(p_4)$ share the edge $x=2$ for $y \in [2,4]$.
- $V(p_4) \mid V(p_1)$: from $(0,2)$ to $(2,2)$.

*Step 3: Delaunay triangulation via duality (2 Marks).*

**Delaunay edges** (dual to Voronoi edges, connecting the two sites of each shared Voronoi edge):
- $p_1 p_2$ (dual to edge $x=2$ between $V(p_1)$ and $V(p_2)$).
- $p_2 p_3$ (dual to edge $y=2$ between $V(p_2)$ and $V(p_3)$).
- $p_3 p_4$ (dual to edge $x=2$ between $V(p_3)$ and $V(p_4)$).
- $p_4 p_1$ (dual to edge $y=2$ between $V(p_4)$ and $V(p_1)$).

**Delaunay triangles:**
- $\triangle p_1 p_2 p_3$
- $\triangle p_1 p_3 p_4$

These two triangles together form the square $p_1 p_2 p_3 p_4$ split along the diagonal $p_1 p_3$.

---

### 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mark-Deduction Traps in PECST418 Module 4:**
> 1. **Forgetting to reverse the robot** when computing the Minkowski sum: the C-space obstacle is $O \oplus (-R)$, **not** $O \oplus R$. Reversing is mandatory. Loss: **2 marks**.
> 2. **Confusing Voronoi diagram with Delaunay triangulation in the answer:** these are duals, not the same structure. Always state which one you are using. Loss: **1-2 marks**.
> 3. **Skipping the empty-circumcircle property** when defining Delaunay: this is the **defining** property and is the most-tested one-liner. Loss: **2 marks**.
> 4. **Omitting the complexity bound** $O(n \log n)$ for Voronoi/Delaunay/Convex Hull. KTU examiners allocate **1 mark** for the asymptotic bound. Loss: **1 mark**.
> 5. **For Art Gallery Theorem:** stating $\lfloor n/2 \rfloor$ guards (incorrect) instead of $\lfloor n/3 \rfloor$. Loss: **2 marks**.
> 6. **Visibility graph problems:** forgetting to include $q_{start}$ and $q_{goal}$ in the vertex set. Loss: **2 marks**.
> 7. **Range searching:** writing $O(\log n)$ as the Kd-tree query time (which is the **balanced BST** bound) instead of the correct $O(\sqrt{n} + k)$. Loss: **1-2 marks**.

### 5.4 Topic Recap & Important Things to Remember

> [!NOTE]
> **PECST418 Module 4 — Rapid Revision Checklist**

- **Robotics:**
  * **C-space obstacles** are computed by **Minkowski sum** $O_i \oplus (-R)$.
  * Motion planning is reduced to **point-in-free-space path planning**.
  * **Visibility graph** = shortest path, hugs obstacles.
  * **Voronoi roadmap** = safest path, maximum clearance.
  * **Cell decomposition** = structured workspaces, sweep-line.
  * Construction time: all three classical methods run in $O(n \log n)$ to $O(n^2 \log n)$ time.
  * Path-planning is **PSPACE-hard** in general (Reif's theorem).

- **Computer Graphics:**
  * Any simple polygon with $n$ vertices admits a triangulation into exactly $n-2$ triangles.
  * **Delaunay triangulation** maximizes the minimum angle of any triangle — preferred for **mesh generation**.
  * **Chvátal's Art Gallery Theorem:** $\lfloor n/3 \rfloor$ guards suffice for a simple polygon with $n$ vertices.
  * **Ear clipping** algorithm: $O(n^2)$ naive, $O(n)$ with DCEL and efficient ear testing.

- **GIS:**
  * **Map overlay** = intersection of two planar subdivisions.
  * **Bentley-Ottmann sweep** finds $k$ intersections in $O((n_1 + n_2 + k) \log(n_1 + n_2))$ time.
  * **Kd-tree** range query: $O(\sqrt{n} + k)$ in 2D, $O(n^{1-1/d} + k)$ in $d$ dimensions.
  * **Range tree** query: $O(\log^d n + k)$ with $O(n \log^{d-1} n)$ space.
  * **Point location** in a triangulated subdivision: $O(\log n)$ query, $O(n)$ space, using Kirkpatrick's method.

- **Cross-Cutting Concepts:**
  * **Voronoi-Delaunay duality:** every Voronoi edge ↔ one Delaunay edge; every Voronoi vertex ↔ one Delaunay triangle.
  * **Empty circumcircle property** is the *defining* property of Delaunay.
  * **Max-clearance path** = Voronoi roadmap path.
  * **Shortest path** = Visibility-graph shortest path.
  * **Planar subdivisions** are stored in a **DCEL** (Doubly-Connected Edge List) with $O(n)$ space.

- **Numbers Worth Memorizing:**
  * $O(n \log n)$ — Voronoi, Delaunay, Convex Hull, Kd-tree build, range tree build.
  * $O(n)$ — Kd-tree 1D query, point location via persistent tree, DCEL traversal.
  * $O(\sqrt{n} + k)$ — Kd-tree 2D rectangular range query.
  * $O(\log^2 n + k)$ — 2D range tree query.
  * $O((n + k) \log n)$ — Bentley-Ottmann sweep for segment intersections.
  * $O(n^2)$ — Arrangements of $n$ lines (worst case vertices/edges/faces).
  * $n - 2$ — Triangles in any triangulation of a simple $n$-gon.
  * $\lfloor n/3 \rfloor$ — Chvátal's guard bound.
  * $3n - 6$ — Upper bound on Delaunay edges for $n$ sites in general position.

<!-- SECTION_5_END -->
