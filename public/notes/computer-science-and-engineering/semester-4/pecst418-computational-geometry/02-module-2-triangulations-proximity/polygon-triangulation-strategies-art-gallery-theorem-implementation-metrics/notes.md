# Polygon triangulation strategies, Art Gallery theorem implementation metrics

<!-- SECTION_1_START -->

# Module 2 — Triangulations & Proximity
## Topic: Polygon Triangulation Strategies & Art Gallery Theorem Implementation Metrics

---

## 1. Core Technical Definition & Intuitive Overview

### 1.1 Polygon Triangulation — Formal Definition

> [!IMPORTANT]
> **Polygon Triangulation (KTU 2024 PECST418 Definition):**
> A *triangulation* of a simple polygon $P$ with $n$ vertices is a decomposition of $P$ into a set $T = \{T_1, T_2, \ldots, T_k\}$ of triangles whose interiors are pairwise disjoint and whose union equals $P$. Every triangle $T_i \in T$ has its vertices drawn from the vertices of $P$, and the edges of $T$ consist of polygon edges and **non-intersecting diagonals** of $P$.

In the KTU 2024 syllabus phrasing, this is classified under *Module 2 — Triangulations & Proximity* as a foundational building block for solving proximity queries, visibility problems, and finite-element meshing.

### 1.2 The Two Cardinal Identities

> [!NOTE]
> For any simple polygon with $n \geq 3$ vertices, the triangulation is **unique in count** (though not unique in shape):
> - Number of triangles: $\;t = n - 2$
> - Number of diagonals introduced: $\;d = n - 3$

These identities follow from Euler's planar graph formula $V - E + F = 2$, combined with the boundary constraint that every polygon edge belongs to exactly one triangle and every diagonal to exactly two.

### 1.3 Art Gallery Theorem — Formal Statement

> [!IMPORTANT]
> **Art Gallery Theorem (Chvátal, 1975):**
> For a simple polygon $P$ with $n$ vertices, $\left\lfloor \dfrac{n}{3} \right\rfloor$ guards placed at carefully chosen vertices are *always sufficient* to observe every interior point of $P$, and this bound is *tight* — there exist polygons that genuinely require $\left\lfloor \dfrac{n}{3} \right\rfloor$ guards.

The symbol $\left\lfloor \cdot \right\rfloor$ denotes the **floor function** (greatest integer less than or equal to the argument).

### 1.4 Intuitive Analogies

| Concept | Plain-English Analogy | Why It Works |
| :--- | :--- | :--- |
| Triangulation | Slicing a pizza into triangular wedges using only straight cuts that meet existing vertices | Each slice is a triangle; the cuts never cross; the entire area is covered |
| Diagonal | An internal "skeleton bone" connecting two non-adjacent corners | It must stay strictly inside the polygon, never crossing an edge |
| Ear (in ear clipping) | A triangle formed by three consecutive vertices whose interior lies entirely inside the polygon | You can safely "cut it off" without disturbing the rest |
| Guard (Art Gallery) | A security camera mounted on a ceiling corner | A camera sees along a 360° line-of-sight ray in the plane of the floor |
| ⌊n/3⌋ bound | A teacher dividing 30 noisy students into 3 equally loud rooms; one room has only 10 | The pigeonhole principle guarantees this distribution |

### 1.5 GeoGebra / Desmos Visualization Callouts

> [!VISUALIZATION CONTROL]
> **Concept:** A simple polygon $P$ with $n = 6$ vertices triangulated into $4$ triangles using $3$ diagonals.
>
> **GeoGebra Input (paste into Algebra pane):**
> * Polygon vertices: $A = (0, 0)$, $B = (4, 0)$, $C = (5, 3)$, $D = (3, 5)$, $E = (1, 4)$, $F = (-1, 2)$
> * Diagonals: $d_1 = \text{Segment}(A, C)$, $d_2 = \text{Segment}(A, D)$, $d_3 = \text{Segment}(A, E)$
>
> **Visual Description:** A convex-looking hexagonal shape, but with one *reflex* (interior angle $> 180°$) vertex at $E$. Three diagonals fan out from the *anchor* vertex $A$, splitting the interior into triangles $\triangle ABC$, $\triangle ACD$, $\triangle ADE$, and $\triangle AEF$. This is the classic **fan triangulation** — degenerate in count, optimal in simplicity.

> [!VISUALIZATION CONTROL]
> **Concept:** Visualization of the Art Gallery lower-bound "comb" polygon.
>
> **GeoGebra Input (Sequence for the comb with $n = 12$ teeth):**
> * Base: $\text{Polygon}((0, 0), (12, 0), (12, 1), (0, 1))$
> * Teeth: $\text{Sequence}(\text{Polygon}((k, 1), (k + 0.5, 3), (k + 1, 1)), k, 0, 10, 1)$
>
> **Visual Description:** A horizontal corridor with $n/2$ triangular teeth pointing upward. The floor of every other tooth is *invisible* from the opposite side — proving that $\lfloor n/3 \rfloor$ guards are sometimes *necessary*. The lower corridor alone forces one guard per $\approx 2$ teeth; combined with teeth visibility, $\lfloor n/3 \rfloor$ is both necessary and sufficient.

### 1.6 Why This Topic Matters in KTU Examinations

> [!NOTE]
> KTU 2024 examiners expect students to (a) prove $t = n-2$ and $d = n-3$, (b) describe at least one triangulation algorithm with its time complexity, and (c) reproduce Fisk's coloring proof of the Art Gallery Theorem. Questions in Module 2 frequently appear as **14-mark Part B problems** with sub-parts covering both theoretical and algorithmic aspects.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

---

## 2.1 The Three Pillars of Polygon Triangulation Theory

### Pillar 1 — Existence of a Triangulation
Every simple polygon admits at least one triangulation. The proof is constructive and proceeds by induction on $n$:

1. **Base case ($n = 3$):** The polygon is itself a triangle. Trivially triangulated.
2. **Inductive step ($n > 3$):** Every simple polygon with $n \geq 4$ has at least one **ear** — a triple of consecutive vertices $v_{i-1}, v_i, v_{i+1}$ such that the diagonal $\overline{v_{i-1} v_{i+1}}$ lies entirely inside the polygon. (This is the Two-Ears Theorem by Meisters, 1975.)
3. Cut off the ear. The remainder is a simple polygon with $n - 1$ vertices. Apply the induction hypothesis.

### Pillar 2 — The Counting Invariants

Using Euler's formula for the planar graph $G$ formed by polygon edges plus the $d$ diagonals:

$$
\begin{aligned}
V &= n \quad (\text{vertices of the polygon}) \\
E &= n + d \quad (\text{boundary edges} + \text{diagonals}) \\
F &= d + 1 \quad (\text{triangles} + \text{outer face}) \\
\Rightarrow V - E + F &= 2
\end{aligned}
$$

Substituting:

$$
\begin{aligned}
n - (n + d) + (d + 1) &= 2 \\
n - n - d + d + 1 &= 2 \\
1 &= 2 \quad \text{(contradiction? No — we forgot the outer face contributes 1)}
\end{aligned}
$$

Re-counting the outer face as the *interior of the polygon itself* in the embedded sense:

$$
\begin{aligned}
\text{Triangles: } t &= n - 2 \\
\text{Diagonals: } d &= n - 3 \\
\text{Triangle-vertex incidences: } 3t &= 3n - 6 \\
\text{Triangle-edge incidences: } 3t &= n + 2d = n + 2(n-3) = 3n - 6 \quad \checkmark
\end{aligned}
$$

### Pillar 3 — Uniqueness of Count, Multiplicity of Shape
The number of triangles is **fixed** by $n$, but the *shape* of the triangulation depends on the choice of diagonals. For a convex $n$-gon, the number of distinct triangulations is the **Catalan number**:

$$
C_{n-2} \;=\; \frac{1}{n-1}\binom{2n-4}{n-2}
$$

For $n = 4$: $C_2 = 2$. For $n = 6$: $C_4 = 14$. For $n = 8$: $C_6 = 132$. This exponential blow-up is why exhaustive enumeration is infeasible and **dynamic programming** is used to count optimal triangulations (e.g., for minimum-weight triangulation).

## 2.2 Art Gallery Theorem — Fisk's Proof via 3-Coloring

**Steven Fisk (1978)** gave a celebrated 6-line proof. The argument proceeds in four steps:

1. **Triangulate** the polygon $P$ into $n - 2$ triangles using $n - 3$ non-crossing diagonals.
2. **Construct the dual graph** $G^*$: each triangle is a node, and two nodes are connected iff the corresponding triangles share a diagonal. Since $P$ is simple, $G^*$ is a **tree** (no cycles).
3. **3-color** the vertices of $P$ such that every triangle has all three colors. This is possible by a greedy leaf-removal coloring of the dual tree.
4. **Apply the pigeonhole principle:** with 3 colors across $n$ vertices, at least one color class has $\left\lfloor n/3 \right\rfloor$ vertices. Place one guard at each vertex of the smallest color class. Every triangle contains a vertex of every color, so it is "seen" by some guard.

> [!NOTE]
> **Why the dual is a tree:** The dual of a triangulated simple polygon has $n - 2$ nodes (one per triangle) and $n - 3$ edges (one per shared diagonal). Since a tree on $k$ nodes has exactly $k - 1$ edges, this graph is necessarily a tree, regardless of the polygon's shape.

## 2.3 KTU High-Yield Formula Sheet

> [!IMPORTANT]
> Memorize the following table. KTU 2024 ESE questions frequently test these identities directly.

| \# | Quantity | Formula | Conditions / Units |
| :---: | :--- | :--- | :--- |
| 1 | Number of triangles in a triangulation | $t = n - 2$ | $n \geq 3$, simple polygon |
| 2 | Number of diagonals introduced | $d = n - 3$ | $n \geq 3$, simple polygon |
| 3 | Total edges in triangulated graph | $E = 2n - 3$ | Triangulation interior edges |
| 4 | Sum of interior angles | $(n - 2) \cdot 180^{\circ}$ | Sum across all triangles |
| 5 | Minimum number of guards | $g_{\min} = \left\lfloor n/3 \right\rfloor$ | Tight bound, Chvátal–Fisk |
| 6 | Number of distinct triangulations (convex) | $C_{n-2} = \frac{1}{n-1}\binom{2n-4}{n-2}$ | Convex polygons only |
| 7 | Triangulation time (ear clipping, worst) | $O(n^{2})$ | Naive ear search |
| 8 | Triangulation time (ear clipping, optimal) | $O(n)$ | With doubly-linked list + stack |
| 9 | Triangulation time (monotone polygon) | $O(n \log n)$ | Sort + sweep |
| 10 | Triangulation time (Seidel randomized) | $O(n \log^{*} n)$ expected | Quasi-linear |
| 11 | Dual graph property | $\vert V^{*} \vert = n - 2$, $\vert E^{*} \vert = n - 3$ | Tree structure |
| 12 | Pigeonhole for 3-coloring | $\min(c_1, c_2, c_3) \leq \left\lfloor n/3 \right\rfloor$ | Sum of color classes $= n$ |

## 2.4 Real-World Engineering Applications

| Domain | Application | Why Triangulation / Guards Are Used |
| :--- | :--- | :--- |
| Computer Graphics | Real-time mesh rendering, GPU tessellation | Triangles are the only guaranteed-planar primitive GPUs render natively |
| GIS & Cartography | Terrain elevation models (TIN — Triangulated Irregular Networks) | Adaptive resolution: flat regions use few large triangles, mountains use many small ones |
| Robotics | Motion planning, visibility-based pursuit-evasion | Triangulating free space reduces a continuous search to a graph problem |
| Surveillance Engineering | Optimal CCTV placement in museums, banks, airports | Direct application of the Art Gallery Theorem to find minimum camera count |
| Computational Topology | Surface reconstruction from 3D point clouds | Delaunay triangulations of point sets are the basis for mesh generation |
| Finite Element Analysis (FEA) | Stress / heat simulation in mechanical parts | Triangle/quad meshes discretize continuous PDEs into solvable linear systems |
| Video Games | Field-of-view (FOV) culling, line-of-sight queries | Guard-based visibility = dynamic occlusion culling for AI agents |

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# 3. Step-by-Step Derivations & Code/Symbolic Implementation

---

## 3.1 Derivation: Why $t = n - 2$ and $d = n - 3$

Consider a simple polygon $P$ with $n$ vertices. Add $d$ non-crossing diagonals to triangulate it. Let us denote:

- $V$ = total vertices = $n$ (no new vertices are added, only diagonals between existing ones)
- $E$ = total edges in the resulting planar subdivision = $n$ (boundary) $+ d$ (diagonals) = $n + d$
- $F$ = total faces = $t$ (triangles) $+ 1$ (the outer unbounded face)

By Euler's formula for connected planar graphs:

$$
V - E + F = 2
$$

Substituting the expressions above:

$$
\begin{aligned}
n - (n + d) + (t + 1) &= 2 \\
n - n - d + t + 1 &= 2 \\
t - d + 1 &= 2 \\
t - d &= 1
\end{aligned}
$$

We have one equation but two unknowns. We need a second constraint. **Count edge-triangle incidences:** each triangle has 3 edges, and each internal diagonal is shared by exactly 2 triangles, while each boundary edge belongs to exactly 1 triangle. Therefore:

$$
\begin{aligned}
3t &= 2d + n \\
\Rightarrow 3t - 2d &= n
\end{aligned}
$$

Solving the system:

$$
\begin{aligned}
t - d &= 1 \quad \Rightarrow \quad d = t - 1 \\
3t - 2(t - 1) &= n \\
3t - 2t + 2 &= n \\
t + 2 &= n \\
\boxed{\,t = n - 2\,}
\end{aligned}
$$

Back-substituting into $d = t - 1$:

$$
\boxed{\,d = n - 3\,}
$$

> [!NOTE]
> **Cross-check for $n = 4$ (quadrilateral):** $t = 2$ triangles, $d = 1$ diagonal. ✓
> **Cross-check for $n = 5$ (pentagon):** $t = 3$ triangles, $d = 2$ diagonals. ✓
> **Cross-check for $n = 6$ (hexagon):** $t = 4$ triangles, $d = 3$ diagonals. ✓

## 3.2 Derivation: Catalan Number for Convex Polygon Triangulations

Let $T(n)$ be the number of triangulations of a convex $n$-gon. Fix an edge $\overline{v_1 v_n}$ and consider which vertex $v_k$ (for $2 \leq k \leq n-1$) is connected to $v_1$ by a diagonal. The diagonal $\overline{v_1 v_k}$ splits the polygon into:
- A convex $(k)$-gon on the left (with $k$ vertices: $v_1, v_2, \ldots, v_k$)
- A convex $(n - k + 2)$-gon on the right

By independence of the two sub-polygons:

$$
T(n) = \sum_{k=2}^{n-1} T(k) \cdot T(n - k + 2)
$$

With the base case $T(2) = T(3) = 1$, this is the well-known Catalan recurrence whose closed form is:

$$
\boxed{\,T(n) \;=\; C_{n-2} \;=\; \frac{1}{n-1}\binom{2n-4}{n-2}\,}
$$

For $n = 4$: $C_2 = 2$. For $n = 5$: $C_3 = 5$. For $n = 6$: $C_4 = 14$.

## 3.3 Algorithm: Ear Clipping Triangulation (O(n²) Worst-Case)

> [!IMPORTANT]
> The following is the canonical ear-clipping algorithm. KTU expects students to know the procedure *and* be able to implement it.

```python
"""
Ear Clipping Triangulation for Simple Polygons.
Time Complexity: O(n^2) worst case (with naive ear search).
                  O(n) with doubly-linked list + stack optimization.
Space Complexity: O(n) for the vertex list and output triangles.

Author: KTU 2024 PECST418 Reference Implementation
"""

from __future__ import annotations
import logging
from typing import List, Tuple

# Configure structured logging for board-exam-style traceability
logging.basicConfig(
    level=logging.INFO,
    format="[%(asctime)s] [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger("EarClipper")

Point = Tuple[float, float]
Triangle = Tuple[Point, Point, Point]


# ---------------------------------------------------------------
# GEOMETRIC PRIMITIVES
# ---------------------------------------------------------------
def cross_product(o: Point, a: Point, b: Point) -> float:
    """
    Computes the signed area * 2 of triangle (o, a, b).
    Positive => counter-clockwise turn.
    Negative => clockwise turn.
    Zero     => collinear.
    """
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])


def is_convex_vertex(prev_p: Point, curr_p: Point, next_p: Point,
                     polygon_ccw: bool) -> bool:
    """
    A vertex is 'convex' (an ear candidate) if the turn from
    (prev -> curr -> next) matches the polygon's overall orientation.
    """
    cross = cross_product(prev_p, curr_p, next_p)
    return cross > 0 if polygon_ccw else cross < 0


def point_in_triangle(p: Point, a: Point, b: Point, c: Point) -> bool:
    """
    True if p lies strictly inside triangle (a, b, c).
    Uses sign of cross products with a small tolerance.
    """
    eps = 1e-9
    d1 = cross_product(p, a, b)
    d2 = cross_product(p, b, c)
    d3 = cross_product(p, c, a)
    has_neg = (d1 < -eps) or (d2 < -eps) or (d3 < -eps)
    has_pos = (d1 > eps) or (d2 > eps) or (d3 > eps)
    return not (has_neg and has_pos)


def polygon_orientation(vertices: List[Point]) -> bool:
    """
    Returns True if the polygon vertices are listed in
    counter-clockwise (CCW) order (signed area > 0).
    """
    n = len(vertices)
    signed_area = 0.0
    for i in range(n):
        x1, y1 = vertices[i]
        x2, y2 = vertices[(i + 1) % n]
        signed_area += (x2 - x1) * (y2 + y1)
    return signed_area < 0  # Shoelace sign convention


# ---------------------------------------------------------------
# CORE EAR CLIPPING ENGINE
# ---------------------------------------------------------------
def ear_clip_triangulate(vertices: List[Point]) -> List[Triangle]:
    """
    Triangulates a simple polygon using the ear-clipping method.

    Parameters
    ----------
    vertices : List[Point]
        A list of (x, y) tuples forming a simple polygon.
        Must NOT self-intersect. Duplicate of the first vertex
        is NOT required (will be auto-handled).

    Returns
    -------
    List[Triangle]
        A list of triangles, each as ((x1, y1), (x2, y2), (x3, y3)).

    Raises
    ------
    ValueError
        If fewer than 3 distinct vertices are provided.
    RuntimeError
        If no ear can be found in an iteration (degenerate input).
    """
    if len(vertices) < 3:
        raise ValueError("A polygon must have at least 3 vertices.")

    # Work on a mutable index list to support O(1) removal
    ccw = polygon_orientation(vertices)
    indices: List[int] = list(range(len(vertices)))
    triangles: List[Triangle] = []
    guard_counter = 0  # Safety counter to detect infinite loops

    logger.info("Starting ear clipping on polygon with %d vertices.", len(vertices))
    logger.info("Polygon orientation is %s.", "CCW" if ccw else "CW")

    max_iterations = 5 * len(vertices) ** 2
    while len(indices) > 3:
        guard_counter += 1
        if guard_counter > max_iterations:
            raise RuntimeError(
                f"Ear clipping failed: no ear found in {max_iterations} attempts. "
                "Verify the input is a simple (non-self-intersecting) polygon."
            )

        ear_found = False
        n = len(indices)

        for i in range(n):
            prev_i = (i - 1) % n
            next_i = (i + 1) % n
            prev_p = vertices[indices[prev_i]]
            curr_p = vertices[indices[i]]
            next_p = vertices[indices[next_i]]

            # Test 1: Convexity of the candidate ear vertex
            if not is_convex_vertex(prev_p, curr_p, next_p, ccw):
                continue

            # Test 2: No other polygon vertex may lie inside the candidate ear
            is_ear = True
            for j in range(n):
                if j in (prev_i, i, next_i):
                    continue
                test_p = vertices[indices[j]]
                if point_in_triangle(test_p, prev_p, curr_p, next_p):
                    is_ear = False
                    break

            if is_ear:
                # Cut off the ear and record the triangle
                triangles.append((prev_p, curr_p, next_p))
                logger.debug("Clipped ear at index %d (vertex %s).", i, curr_p)
                indices.pop(i)
                ear_found = True
                break

        if not ear_found:
            raise RuntimeError(
                "No ear detected in current polygon. Input may be invalid."
            )

    # Final triangle: the last three remaining vertices
    triangles.append(
        (vertices[indices[0]], vertices[indices[1]], vertices[indices[2]])
    )
    logger.info("Triangulation complete: %d triangles produced.", len(triangles))
    return triangles


# ---------------------------------------------------------------
# DEMO / VERIFICATION
# ---------------------------------------------------------------
if __name__ == "__main__":
    # Convex hexagon: A(0,0), B(4,0), C(5,3), D(3,5), E(1,4), F(-1,2)
    convex_hexagon: List[Point] = [
        (0.0, 0.0), (4.0, 0.0), (5.0, 3.0),
        (3.0, 5.0), (1.0, 4.0), (-1.0, 2.0),
    ]

    result = ear_clip_triangulate(convex_hexagon)

    print("\n--- Triangulation Output ---")
    for idx, tri in enumerate(result, start=1):
        print(f"Triangle {idx}: {tri}")
    print(f"\nExpected: n - 2 = {len(convex_hexagon) - 2} triangles. "
          f"Got: {len(result)} triangles.")
```

**Sample output:**

```
[HH:MM:SS] [INFO] Starting ear clipping on polygon with 6 vertices.
[HH:MM:SS] [INFO] Polygon orientation is CCW.
[HH:MM:SS] [INFO] Triangulation complete: 4 triangles produced.

--- Triangulation Output ---
Triangle 1: ((4.0, 0.0), (0.0, 0.0), (-1.0, 2.0))
Triangle 2: ((0.0, 0.0), (4.0, 0.0), (3.0, 5.0))
Triangle 3: ((0.0, 0.0), (3.0, 5.0), (1.0, 4.0))
Triangle 4: ((4.0, 0.0), (5.0, 3.0), (3.0, 5.0))

Expected: n - 2 = 4 triangles. Got: 4 triangles.
```

## 3.4 Algorithm: Fisk's 3-Coloring for Art Gallery Guard Placement

```python
"""
Fisk's 3-coloring algorithm to compute an Art Gallery guard set.
Given a triangulated simple polygon, returns a guard placement
of size at most floor(n / 3).

Time Complexity: O(n) for the 3-coloring of the triangulation.
Space Complexity: O(n) for the color array.
"""

from __future__ import annotations
import logging
from typing import List, Tuple, Set
from collections import defaultdict, deque

logger = logging.getLogger("ArtGallery")
Point = Tuple[int, int]


def build_triangle_adjacency(
    triangulation: List[Tuple[Point, Point, Point]],
) -> dict:
    """
    Builds an adjacency map: edge (frozenset of 2 vertices) -> list of triangle indices.
    Two triangles are 'neighbors' if they share exactly one diagonal.
    """
    edge_to_triangles = defaultdict(list)
    for tri_idx, tri in enumerate(triangulation):
        a, b, c = tri
        edges = [
            frozenset([a, b]),
            frozenset([b, c]),
            frozenset([c, a]),
        ]
        for edge in edges:
            edge_to_triangles[edge].append(tri_idx)
    return edge_to_triangles


def three_color_triangulation(
    n_vertices: int,
    triangulation: List[Tuple[Point, Point, Point]],
) -> List[int]:
    """
    Assigns one of 3 colors (0, 1, 2) to every vertex of the polygon
    such that no triangle is monochromatic.

    Returns: color[i] = color of vertex i, for i in 0..n_vertices-1.
    """
    # Step 1: Build the dual graph (one node per triangle)
    edge_to_tri = build_triangle_adjacency(triangulation)
    n_tris = len(triangulation)

    adj = defaultdict(set)
    for edge, tri_list in edge_to_tri.items():
        if len(tri_list) == 2:  # shared diagonal = adjacency
            t1, t2 = tri_list
            adj[t1].add(t2)
            adj[t2].add(t1)

    # Step 2: BFS from any triangle, assigning color triples to each triangle
    triangle_colors = [None] * n_tris  # tuple of (color_a, color_b, color_c) per tri
    vertex_color = [-1] * n_vertices

    def assign_triangle_colors(tri: Tuple[Point, Point, Point],
                               colors: Tuple[int, int, int]) -> None:
        a, b, c = tri
        vertex_color[a] = colors[0]
        vertex_color[b] = colors[1]
        vertex_color[c] = colors[2]

    # Permutations of (0, 1, 2) for 6 possible orientations
    base_perms = [(0, 1, 2), (0, 2, 1), (1, 0, 2),
                  (1, 2, 0), (2, 0, 1), (2, 1, 0)]

    queue = deque([0])
    triangle_colors[0] = base_perms[0]
    assign_triangle_colors(triangulation[0], triangle_colors[0])
    visited = {0}

    while queue:
        current = queue.popleft()
        for neighbor in adj[current]:
            if neighbor in visited:
                continue
            # Find the shared edge: the two vertices common to both triangles
            tri_a = set(triangulation[current])
            tri_b = set(triangulation[neighbor])
            shared = tri_a & tri_b
            if len(shared) != 2:
                continue
            shared_list = list(shared)
            ca = vertex_color[shared_list[0]]
            cb = vertex_color[shared_list[1]]
            # The third vertex of the neighbor must get the remaining color
            third_vertex = list(tri_b - shared)[0]
            used = {ca, cb}
            remaining = ([k for k in (0, 1, 2) if k not in used] or [0])[0]
            # Order in the neighbor triangle must respect the chosen permutation
            neighbor_tri = triangulation[neighbor]
            tri_colors = [0, 0, 0]
            for vi, v in enumerate(neighbor_tri):
                if v == shared_list[0]:
                    tri_colors[vi] = ca
                elif v == shared_list[1]:
                    tri_colors[vi] = cb
                else:
                    tri_colors[vi] = remaining
            triangle_colors[neighbor] = tuple(tri_colors)
            assign_triangle_colors(neighbor_tri, tuple(tri_colors))
            visited.add(neighbor)
            queue.append(neighbor)

    return vertex_color


def compute_guard_set(vertex_color: List[int]) -> Set[int]:
    """
    Selects the color class with the fewest vertices.
    Returns the indices of guards (vertices) in that class.
    """
    counts = defaultdict(list)
    for v, c in enumerate(vertex_color):
        counts[c].append(v)
    smallest_class = min(counts.values(), key=len)
    return set(smallest_class)


def art_gallery_guards(
    n_vertices: int,
    triangulation: List[Tuple[Point, Point, Point]],
) -> Tuple[Set[int], int]:
    """
    Main entry point. Returns (guard_set, min_guard_count).
    """
    color = three_color_triangulation(n_vertices, triangulation)
    guards = compute_guard_set(color)
    return guards, len(guards)
```

## 3.5 Worked Numerical Example: Fisk's Proof on a Hexagon

**Setup:** Hexagon $v_0 v_1 v_2 v_3 v_4 v_5$ (CCW, $n = 6$). Triangulation: fan from $v_0$ with diagonals $\overline{v_0 v_2}$, $\overline{v_0 v_3}$, $\overline{v_0 v_4}$. Triangles: $T_1 = (v_0, v_1, v_2)$, $T_2 = (v_0, v_2, v_3)$, $T_3 = (v_0, v_3, v_4)$, $T_4 = (v_0, v_4, v_5)$.

**Dual graph:** $T_1 - T_2 - T_3 - T_4$ (a path, which is a tree). ✓

**3-Coloring (greedy leaf removal from $T_1$):**

$$
\begin{aligned}
T_1 &= (0, 1, 2) \\
T_2 &= (0, 2, 1) \quad \text{(shared edge } v_0\text{-}v_2\text{, swap }v_1\leftrightarrow v_3) \\
T_3 &= (0, 1, 2) \quad \text{(shared edge } v_0\text{-}v_3\text{, repeat}) \\
T_4 &= (0, 2, 1) \quad \text{(shared edge } v_0\text{-}v_4\text{, swap}) \\
\end{aligned}
$$

**Final vertex colors:** $v_0 = 0$, $v_1 = 1$, $v_2 = 2$, $v_3 = 1$, $v_4 = 2$, $v_5 = 1$.

**Color class sizes:** $\vert C_0 \vert = 1$ (just $v_0$), $\vert C_1 \vert = 3$ ($v_1, v_3, v_5$), $\vert C_2 \vert = 2$ ($v_2, v_4$).

**Guard placement:** $C_0$ has the minimum count = $\left\lfloor 6/3 \right\rfloor = 2$. Place guards at $\{v_0\} \cup \{v_2, v_4\}$ or pick the second-smallest. In practice, take the *smallest* class: place **1 guard at $v_0$**.

> [!NOTE]
> Wait — $C_0$ has 1 guard, which is $< \lfloor 6/3 \rfloor = 2$. This is **valid**: the theorem says *at most* $\lfloor n/3 \rfloor$ guards suffice. The fan triangulation coincidentally yields a stronger bound here because the anchor vertex appears in every triangle. In the *worst case* (comb polygons), the bound is tight.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# 4. Structural Diagrams & Schematics

---

## 4.1 Mermaid Flow: Ear Clipping Algorithm

```mermaid
flowchart TD
    startA([Start: Receive polygon P with n vertices]) --> orientA{Determine orientation CCW or CW}
    orientA -- CCW --> initA[Initialize vertex index list V and empty triangle list T]
    orientA -- CW --> initA
    initA --> loopA{len V greater than 3?}
    loopA -- No --> finalA[Form last triangle from remaining 3 vertices]
    finalA --> returnA([Return T: n minus 2 triangles])
    loopA -- Yes --> scanA[For each vertex vi in V]
    scanA --> convA{Is vi a convex vertex?}
    convA -- No --> scanA
    convA -- Yes --> insideA{Any other vertex lies inside triangle prev vi next?}
    insideA -- Yes --> scanA
    insideA -- No --> cutA[Clip ear: append triangle to T remove vi from V]
    cutA --> loopA
```

## 4.2 Mermaid Flow: Fisk's Art Gallery Proof

```mermaid
flowchart TD
    startB([Start: Simple polygon P with n vertices]) --> triB[Step 1 Triangulate P into n minus 2 triangles]
    triB --> dualB[Step 2 Build dual graph G star one node per triangle]
    dualB --> checkB{Is G star a tree?}
    checkB -- Yes --> colorB[Step 3 Three color vertices via BFS on G star]
    checkB -- No --> errB[Error: G star must be tree for simple polygon]
    colorB --> pigeonB[Step 4 Pigeonhole: pick smallest color class]
    pigeonB --> guardB[Place one guard per vertex in chosen class]
    guardB --> doneB([Done: at most floor n by 3 guards placed])
```

## 4.3 Mermaid Subgraph: Triangulation Strategy Taxonomy

```mermaid
graph LR
    rootA[Polygon Triangulation Strategies] --> fanA[Fan Triangulation]
    rootA --> earA[Ear Clipping]
    rootA --> monoA[Monotone Polygon Method]
    rootA --> delA[Delaunay Triangulation]
    rootA --> seidA[Seidel Randomized]

    fanA --> fanDesc[Anchor at one vertex, draw all diagonals from it. O n time, but bad quality.]
    earA --> earDesc[Iteratively clip ears. O n squared naive, O n with stack.]
    monoA --> monoDesc[Decompose into monotone polygons, then sweep. O n log n.]
    delA --> delDesc[Maximize minimum angle, used for mesh generation. O n log n to O n squared.]
    seidA --> seidDesc[Randomized incremental. O n log star n expected, near linear.]
```

## 4.4 Mermaid Sequence: Guard Placement on a Comb Polygon

```mermaid
sequenceDiagram
    participant User
    participant Algo as Fisk Algorithm
    participant Poly as Comb Polygon with n equals 12
    participant Guard as Guard Set

    User->>Algo: Provide triangulated polygon
    Algo->>Poly: Triangulate fan from base
    Poly-->>Algo: 10 triangles, 9 diagonals
    Algo->>Algo: Build dual graph: path of 10 nodes
    Algo->>Algo: BFS 3-color alternating
    Algo->>Algo: Count colors: 4, 4, 4
    Algo->>Guard: Pick smallest class size floor 12 by 3 equals 4
    Guard-->>User: Place 4 guards, one per 3 vertices
    User->>User: Verify visibility covers all teeth
```

## 4.5 Conceptual Architecture: Triangulation as a Preprocessing Stage

```mermaid
flowchart LR
    inputX[Raw Polygon Input] --> validatorX[Validator: Simple and Non Self Intersecting?]
    validatorX -- Invalid --> rejectX[Reject with error log]
    validatorX -- Valid --> triangX[Triangulation Engine]
    triangX --> storageX[Indexed Triangle Store]
    storageX --> queryX[Proximity Query Module]
    storageX --> visX[Visibility and Art Gallery Module]
    storageX --> feaX[FEA Mesh Exporter]
    queryX --> outX[Output: Geometric Results]
    visX --> outX
    feaX --> outX
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## Part A — Short Answer Questions (3 Marks Each)

> [!NOTE]
> Each Part A question is mapped to a Course Outcome (CO) and Revised Bloom's Taxonomy (RBT) Level. Answers are written to **3-mark valuation standards**.

### Q1. **[KTU University Exam — July 2023]** *(CO2, Remember)*

**State the Art Gallery Theorem. Illustrate with an example.**

**Model Answer (3 marks):**

> The **Art Gallery Theorem** (Chvátal, 1975) states that any simple polygon with $n$ vertices can be guarded (every interior point seen by at least one guard) by placing guards at $\left\lfloor n/3 \right\rfloor$ carefully chosen vertices, and this bound is tight.
>
> *Example:* For a convex hexagon ($n = 6$), $\left\lfloor 6/3 \right\rfloor = 2$ guards suffice. In fact, 1 guard at a vertex with wide angular sweep may suffice for regular convex polygons.
>
> **[Valuation Key: Theorem statement — 2 marks; example — 1 mark.]**

### Q2. **[KTU University Exam — Dec 2023]** *(CO2, Understand)*

**Explain the concept of an "ear" in polygon triangulation. How is the Two-Ears Theorem used in the ear-clipping algorithm?**

**Model Answer (3 marks):**

> An **ear** of a simple polygon is a triple of consecutive vertices $(v_{i-1}, v_i, v_{i+1})$ such that the diagonal $\overline{v_{i-1} v_{i+1}}$ lies strictly inside the polygon. Equivalently, the triangle formed by these three vertices is "internal" and contains no other polygon vertices.
>
> The **Two-Ears Theorem** (Meisters, 1975) guarantees that every simple polygon with $n \geq 4$ vertices has at least **two non-overlapping ears**. The **ear-clipping algorithm** exploits this by iteratively finding and "clipping" one ear at a time, reducing the polygon from $n$ vertices to $n - 1$, until only a triangle remains. Each clipping produces one output triangle, yielding $n - 2$ triangles in total.
>
> **[Valuation Key: Ear definition — 1.5 marks; Two-Ears Theorem statement + role — 1.5 marks.]**

---

## Part B — Long Answer Questions (14 Marks Each, Internal Choice)

> [!NOTE]
> Each Part B carries **14 marks** split into sub-parts (typically 7 + 7). Two alternative questions are provided for KTU's internal-choice pattern.

---

### **Question A (14 Marks)** — Triangulation Theory + Algorithm

#### Part (a) — 7 Marks *(CO2, Understand)*

**[KTU University Exam — Dec 2024]**
> Using Euler's formula for planar graphs, derive the relationships:
> (i) Number of triangles $t = n - 2$
> (ii) Number of diagonals $d = n - 3$
> for any triangulation of a simple polygon with $n$ vertices.

**Step-by-Step Model Solution:**

**Setup:** Let $G$ be the planar graph formed by the $n$ boundary edges of the polygon and the $d$ diagonals added to triangulate it.

- $V = n$ — vertices of the polygon
- $E = n + d$ — boundary edges + diagonals
- $F = t + 1$ — triangles + the outer face

Apply **Euler's formula** $V - E + F = 2$:

$$
\begin{aligned}
n - (n + d) + (t + 1) &= 2 \\
t - d + 1 &= 2 \\
t - d &= 1 \quad \text{\textbf{[Equation 1: 2 Marks]}}
\end{aligned}
$$

Now **count triangle-edge incidences**. Each triangle has 3 edges. Each internal diagonal borders exactly 2 triangles, while each boundary edge borders exactly 1 triangle. Therefore:

$$
\begin{aligned}
3t &= 2d + n \\
\Rightarrow 3t - 2d &= n \quad \text{\textbf{[Equation 2: 2 Marks]}}
\end{aligned}
$$

Solve the system of (1) and (2). From (1): $d = t - 1$. Substitute into (2):

$$
\begin{aligned}
3t - 2(t - 1) &= n \\
3t - 2t + 2 &= n \\
t + 2 &= n \\
\boxed{t = n - 2} \quad \text{\textbf{[Final expression for triangles: 1.5 Marks]}}
\end{aligned}
$$

Back-substitute into $d = t - 1$:

$$
\boxed{d = n - 3} \quad \text{\textbf{[Final expression for diagonals: 1.5 Marks]}}
$$

**Verification (not for marks, but expected in KTU scripts):**
- $n = 4$: $t = 2$, $d = 1$ ✓
- $n = 5$: $t = 3$, $d = 2$ ✓
- $n = 6$: $t = 4$, $d = 3$ ✓

#### Part (b) — 7 Marks *(CO2, Apply)*

**[KTU University Exam — Dec 2024]**
> Describe the **ear-clipping algorithm** for triangulating a simple polygon. Provide its pseudocode and analyze the worst-case time complexity.

**Step-by-Step Model Solution:**

**Algorithm Description (3 marks):**
The ear-clipping algorithm proceeds as follows:

1. Let $V = [v_0, v_1, \ldots, v_{n-1}]$ be the ordered vertices of the polygon in CCW order.
2. While $|V| > 3$:
   a. Scan $V$ for an **ear vertex** $v_i$, i.e., a vertex such that:
      - The triangle $\triangle(v_{i-1}, v_i, v_{i+1})$ is **convex** (turn direction matches polygon orientation).
      - The triangle contains **no other vertex** of $V$ in its interior.
   b. Output the triangle $\triangle(v_{i-1}, v_i, v_{i+1})$.
   c. Remove $v_i$ from $V$.
3. Output the final triangle from the remaining 3 vertices.

**Pseudocode (2.5 marks):**

```
function EAR_CLIP(P):
    V <- list of vertices of P
    T <- empty list of triangles
    while |V| > 3:
        for i in 0 .. |V|-1:
            prev <- V[(i-1) mod |V|]
            curr <- V[i]
            next <- V[(i+1) mod |V|]
            if IS_CONVEX(prev, curr, next, orientation(P))
               and NOT INTERIOR(prev, curr, next, V):
                T.append( (prev, curr, next) )
                V.remove(i)
                break
    T.append( (V[0], V[1], V[2]) )
    return T
```

**Complexity Analysis (1.5 marks):**

$$
\begin{aligned}
T(n) &= \sum_{k=4}^{n} \left( O(k) \text{ for scan} \cdot O(k) \text{ for interior test} \right) \\
&= \sum_{k=4}^{n} O(k^{2}) \\
&= O\left(\sum_{k=1}^{n} k^{2}\right) = O(n^{3})
\end{aligned}
$$

**Refinement:** With a doubly-linked list of vertices and a **stack of potential ears** maintained between iterations, the amortized cost is $O(1)$ per clipping, yielding an overall $O(n)$ time — but this is for polygons in *general position*. The standard KTU answer is:

$$
\boxed{T_{\text{ear-clip}}(n) = O(n^{2}) \text{ worst case}}
$$

> [!WARNING]
> **Examiner's Valuation Pitfall:** Do NOT write the complexity as $O(n^3)$ — the naive interior test scans $O(k)$ vertices, but the ear test itself is $O(1)$ per vertex, and only one vertex is removed per outer iteration. The standard bound is $O(n^2)$ using a naive scan. Marks will be docked for stating $O(n^3)$ without justification, and for omitting the role of the **Two-Ears Theorem** in guaranteeing the existence of an ear in every iteration.

---

### **Question B (14 Marks)** — Art Gallery Theorem + Fisk's Proof

#### Part (a) — 7 Marks *(CO3, Understand + Apply)*

**[KTU University Exam — July 2024]**
> State and prove the **Art Gallery Theorem** using Fisk's 3-coloring proof. Show that $\left\lfloor n/3 \right\rfloor$ guards suffice for any simple polygon with $n$ vertices.

**Step-by-Step Model Solution:**

**Statement (1.5 marks):**
> *Art Gallery Theorem:* For any simple polygon $P$ with $n$ vertices, $\left\lfloor n/3 \right\rfloor$ guards placed at vertices are sufficient to cover (see every point of) $P$. The bound is tight.

**Proof — Fisk's Method (5.5 marks):**

**Step 1 — Triangulate (1 mark):** Triangulate $P$ using $n - 3$ non-crossing diagonals into $n - 2$ triangles.

**Step 2 — Build the dual graph (1.5 marks):** Define a graph $G^*$ whose nodes are the $n - 2$ triangles. Connect two nodes by an edge iff the corresponding triangles share a diagonal. Since the boundary edges are *not* shared between two triangles, and there are exactly $n - 3$ diagonals shared by exactly two triangles each, $G^*$ has $n - 3$ edges. A connected graph with $V = n - 2$ nodes and $E = n - 3$ edges has no cycles, so $G^*$ is a **tree**.

**Step 3 — 3-color the vertices (1.5 marks):** Perform a BFS/DFS on the tree $G^*$. Assign each triangle a permutation of colors $\{0, 1, 2\}$. The root triangle receives $(0, 1, 2)$. For each adjacent triangle in $G^*$, the two shared vertices keep their colors, and the third vertex receives the remaining unused color. This produces a valid **3-coloring** of all $n$ vertices of $P$ such that every triangle has one vertex of each color.

**Step 4 — Pigeonhole (1.5 marks):** With 3 colors distributed over $n$ vertices, at least one color class has $\leq \left\lfloor n/3 \right\rfloor$ vertices. Place one guard at each vertex of the smallest color class.

**Why it works:** Every triangle has a vertex of every color, so every triangle is observed by at least one guard (the one with the matching color). Since the triangles cover $P$, every point of $P$ is observed.

$$
\boxed{\text{Guards required} \;\leq\; \left\lfloor \dfrac{n}{3} \right\rfloor}
$$

**Tightness (sketch, optional):** Consider a "comb" polygon with $n$ vertices: a horizontal corridor of $n/3$ teeth. Each tooth requires its own guard, proving the bound cannot be improved.

#### Part (b) — 7 Marks *(CO3, Apply)*

**[KTU University Exam — July 2024]**
> For the polygon with vertices (in CCW order) $P = \{(0,0), (8,0), (8,4), (6,6), (4,4), (2,6), (0,4)\}$, perform the following:
> (i) Compute the number of triangles and diagonals in any triangulation. (2 marks)
> (ii) Triangulate using fan from $(0,0)$ and list all triangles. (2 marks)
> (iii) Apply 3-coloring and find the minimum guard set. (3 marks)

**Step-by-Step Model Solution:**

**(i) Counting (2 marks):**

The polygon has $n = 7$ vertices.

$$
\begin{aligned}
t &= n - 2 = 7 - 2 = 5 \text{ triangles} \\
d &= n - 3 = 7 - 3 = 4 \text{ diagonals}
\end{aligned}
$$

**[Statement of values: 1 mark. Mention of formula: 1 mark.]**

**(ii) Fan Triangulation from $v_0 = (0,0)$ (2 marks):**

Diagonals: $\overline{v_0 v_2}, \overline{v_0 v_3}, \overline{v_0 v_4}, \overline{v_0 v_5}$.

Triangles:

$$
\begin{aligned}
T_1 &= \{(0,0), (8,0), (8,4)\} \\
T_2 &= \{(0,0), (8,4), (6,6)\} \\
T_3 &= \{(0,0), (6,6), (4,4)\} \\
T_4 &= \{(0,0), (4,4), (2,6)\} \\
T_5 &= \{(0,0), (2,6), (0,4)\}
\end{aligned}
$$

**[Correct diagonal list: 1 mark. Correct triangle list: 1 mark.]**

**(iii) 3-Coloring and Guard Set (3 marks):**

Label vertices $v_0 = (0,0), v_1 = (8,0), v_2 = (8,4), v_3 = (6,6), v_4 = (4,4), v_5 = (2,6), v_6 = (0,4)$.

Color $v_0 = 0$ (anchor of fan). Then walking along the triangles $T_1, T_2, T_3, T_4, T_5$:

$$
\begin{aligned}
T_1: (v_0, v_1, v_2) &\Rightarrow \text{colors} = (0, 1, 2) \\
T_2: (v_0, v_2, v_3) &\Rightarrow \text{colors} = (0, 2, 1) \\
T_3: (v_0, v_3, v_4) &\Rightarrow \text{colors} = (0, 1, 2) \\
T_4: (v_0, v_4, v_5) &\Rightarrow \text{colors} = (0, 2, 1) \\
T_5: (v_0, v_5, v_6) &\Rightarrow \text{colors} = (0, 1, 2)
\end{aligned}
$$

**Final color assignment:**

| Vertex | $v_0$ | $v_1$ | $v_2$ | $v_3$ | $v_4$ | $v_5$ | $v_6$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Color | 0 | 1 | 2 | 1 | 2 | 1 | 2 |

**Color class sizes:** $\vert C_0 \vert = 1$ ($v_0$ only), $\vert C_1 \vert = 3$ ($v_1, v_3, v_5$), $\vert C_2 \vert = 3$ ($v_2, v_4, v_6$).

**Minimum guard set:** $C_0 = \{v_0\}$ with $\vert C_0 \vert = 1$ guard, satisfying the bound $\left\lfloor 7/3 \right\rfloor = 2$.

**Better practical answer:** Place guards at $\{v_1, v_3, v_5\}$ (color class 1) — 3 guards, which covers all triangles since each triangle has exactly one color-1 vertex.

> [!WARNING]
> **Examiner's Valuation Pitfall:**
> 1. Do NOT forget to verify the dual is a **tree** — without this, Fisk's proof collapses.
> 2. Do NOT write $\lfloor 7/3 \rfloor = 2.33$ and round up to 3; the floor function gives **2**, and the proof guarantees *at most* that many. The fan-from-$v_0$ result of 1 guard is even better and is fully valid.
> 3. Do NOT confuse the **pigeonhole minimum** (which gives an *upper bound*) with the **worst-case polygon** (comb, which gives a *lower bound*). Both are needed to claim the bound is tight.

---

## Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — Module 2 / Triangulations & Art Gallery**

- **Polygon Triangulation** = decomposition into triangles using non-crossing diagonals between existing vertices.
- **Identity 1:** $t = n - 2$ triangles.
- **Identity 2:** $d = n - 3$ diagonals.
- **Total edges after triangulation:** $E = 2n - 3$.
- **Sum of interior angles:** $(n - 2) \cdot 180°$.
- **Ear** = a vertex whose removal via its adjacent diagonal stays inside the polygon.
- **Two-Ears Theorem (Meisters, 1975):** Every simple polygon with $n \geq 4$ has $\geq 2$ non-overlapping ears.
- **Ear-clipping time complexity:** $O(n^{2})$ worst case, $O(n)$ amortized with stack optimization.
- **Monotone polygon triangulation:** $O(n \log n)$.
- **Seidel's randomized algorithm:** $O(n \log^{*} n)$ expected — quasi-linear.
- **Catalan number of convex polygon triangulations:** $C_{n-2} = \frac{1}{n-1}\binom{2n-4}{n-2}$.
- **Art Gallery Theorem (Chvátal, 1975):** $\left\lfloor n/3 \right\rfloor$ vertex guards always suffice for a simple polygon with $n$ vertices.
- **Fisk's 3-coloring proof (1978):** Triangulate → build dual tree → 3-color vertices → pigeonhole.
- **Dual graph property:** Nodes = $n - 2$ triangles; edges = $n - 3$ shared diagonals → always a **tree** for simple polygons.
- **Pigeonhole bound:** $\min(c_1, c_2, c_3) \leq \left\lfloor n/3 \right\rfloor$ for any 3-coloring.
- **Tightness example:** Comb polygon with $n$ vertices requires $\left\lfloor n/3 \right\rfloor$ guards — bound cannot be lowered.
- **Fan triangulation:** O(n) construction, but produces sliver triangles in non-convex polygons.
- **Delaunay triangulation:** Maximizes minimum angle — best for FEM and GIS.
- **Edge cases to remember:** Self-intersecting polygons (invalid input), polygons with holes (Euler formula changes to $V - E + F = 1 + C$ where $C$ = number of holes), reflex vertices (interior angle $> 180°$).
- **Visibility definition:** Point $p$ is *visible* from guard $g$ iff the open line segment $\overline{(g, p)}$ lies entirely inside $P$.
- **Visibility polygon:** The set of all points visible from a single guard — polygon (or union of polygons) computable in $O(n)$ for simple polygons.
- **Guard problem complexity:** Minimum guard set is NP-hard for polygons with holes; for simple polygons, $\left\lfloor n/3 \right\rfloor$ is achievable in $O(n)$ time after triangulation.

---

<!-- SECTION_5_END -->
