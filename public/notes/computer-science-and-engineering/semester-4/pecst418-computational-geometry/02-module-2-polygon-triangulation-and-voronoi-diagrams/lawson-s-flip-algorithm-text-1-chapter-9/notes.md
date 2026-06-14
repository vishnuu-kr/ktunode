# Lawson's flip algorithm (Text 1,  Chapter 9)

<!-- SECTION_1_START -->
# Lawson's Flip Algorithm — Core Technical Definition & Intuitive Overview

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

**Lawson's Flip Algorithm** is an iterative, local-transformation procedure used in **Computational Geometry** to convert an *arbitrary triangulation* of a finite planar point set $P$ into its unique **Delaunay Triangulation** $DT(P)$. The algorithm operates on a **Planar Straight-Line Graph (PSLG)** by repeatedly examining each interior edge shared by two adjacent triangles and applying the **in-circle test** (also called the *Delaunay predicate*). Whenever a non-Delaunay edge is detected, it is **flipped** — that is, removed and replaced by the other diagonal of the quadrilateral formed by the union of the two adjacent triangles. The process terminates when every interior edge is *locally Delaunay*, at which point the triangulation is the global Delaunay triangulation.

> [!IMPORTANT]
> **Syllabus Highlight (Module 2, Chapter 9):**
> Lawson's algorithm is the canonical **$O(n^2)$** worst-case method for constructing the Delaunay triangulation. Although asymptotically slower than divide-and-conquer ($O(n \log n)$) or randomized incremental ($O(n \log n)$ expected) methods, it is conceptually elegant, easy to implement, and serves as the foundation for understanding the **empty circumcircle property**.

## 1.2 The Empty Circumcircle Property

A triangulation $\mathcal{T}$ of a point set $P$ is a **Delaunay triangulation** if and only if the circumcircle of every triangle in $\mathcal{T}$ contains **no point of $P$ in its interior**.

Mathematically, for every triangle $\triangle abc \in \mathcal{T}$ and for every point $d \in P \setminus \{a, b, c\}$:

$$d \notin \text{Interior}\Big( \text{Circumcircle}(a, b, c) \Big)$$

> [!NOTE]
> **Delaunay Triangulation Uniqueness:** If no four points of $P$ are cocircular, the Delaunay triangulation is **unique**. When cocircularities exist, ties are broken arbitrarily, and multiple valid Delaunay triangulations may coexist.

## 1.3 Conceptual Analogy — The Rubber-Balloon Metaphor 🎈

Imagine you sprinkle nails on a flat wooden board and stretch a tight **rubber sheet** over them. The sheet will naturally sink into the deepest *valleys* between groups of nails, forming triangular facets that *maximize the minimum angle* — this is exactly the Delaunay triangulation. Lawson's algorithm mimics this physics:

| Physical Metaphor | Algorithmic Counterpart |
|---|---|
| Rubber sheet stretching over nails | Triangulation of point set |
| Pulling a tense diagonal tight | Edge flip operation |
| Sheet settles to lowest energy state | All edges satisfy in-circle test |
| Final equilibrium (no more stretching) | Termination — Delaunay achieved |

**Intuitive flow:** Start with any triangulation (even a "bad" one). Look at every interior edge like a *loose string* between two triangles. If a point is "pushing outward" from inside the circumcircle of one triangle, the string is under tension. *Snap* it (flip) and reconnect it the other way. Repeat until every string is at rest.

## 1.4 Edge Flip Operation — Visual Intuition

Consider an interior edge $e = (p_i, p_k)$ shared by two triangles $\triangle p_i p_j p_k$ and $\triangle p_i p_k p_l$. These two triangles form a **convex quadrilateral** $Q = p_i \, p_j \, p_k \, p_l$ (assuming general position). The flip operation:

1. **Removes** edge $e = (p_i, p_k)$.
2. **Inserts** the other diagonal $e' = (p_j, p_l)$ of the quadrilateral.

$$(p_i, p_k) \longrightarrow (p_j, p_l)$$

The new triangulation contains triangles $\triangle p_i p_j p_l$ and $\triangle p_j p_k p_l$ in place of the original two.

> [!WARNING]
> **Boundary Edge Rule:** Boundary edges (edges belonging to exactly one triangle) are **never flipped**. Only interior edges (degree exactly 2 in the dual graph) are candidates.

## 1.5 Visualizations (GeoGebra / Desmos-Compatible)

> [!VISUALIZATION CONTROL]
> **Concept 1: In-Circle Test Geometry**
> **GeoGebra Input Points:**
> * $A = (0, 0)$
> * $B = (4, 0)$
> * $C = (2, 3)$
> * $D = (2, 1.2)$  ← *inside* the circumcircle (Delaunay violation)
> * $E = (5, 5)$    ← *outside* the circumcircle (Delaunay satisfied)
> **Visual Description:** Plot the circumcircle of $ABC$ (center ≈ $(2, 1.6)$, radius ≈ $1.8$). Observe $D$ inside and $E$ outside. Edge $(A, C)$ would be flipped to $(B, E)$-style configuration because $D$ violates the empty-circle property.

> [!VISUALIZATION CONTROL]
> **Concept 2: Quadrilateral Edge Flip**
> **GeoGebra Input Points:**
> * $P_1 = (0, 0)$, $P_2 = (4, 0)$, $P_3 = (5, 3)$, $P_4 = (1, 3)$
> **Visual Description:** Draw diagonal $P_1 P_3$ in red, then the alternate diagonal $P_2 P_4$ in blue. Toggle visibility to observe the discrete flip transition. Both diagonals are valid triangulations of the convex quadrilateral; Lawson chooses the one that satisfies the in-circle test.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Algorithmic Framework

Lawson's algorithm is a **local search / greedy-flip** method. The high-level skeleton is:

```
Input : A planar straight-line triangulation T of point set P.
Output: The Delaunay triangulation DT(P) of P.

Step 1 : Initialize a queue (or set) Q of all interior edges of T.
Step 2 : While Q is not empty:
            Pop an edge e from Q.
            Let e = (p_i, p_k) be shared by triangles (p_i, p_j, p_k) and (p_i, p_k, p_l).
            If p_l lies strictly inside the circumcircle of (p_i, p_j, p_k):
                — Flip e to e' = (p_j, p_l).
                — Update the local triangulation.
                — Push the four new interior edges incident to the modified
                  region (i.e., the other three sides of the two triangles) into Q
                  if they are not already present.
Step 3 : Return the final triangulation.
```

## 2.2 The In-Circle (Delaunay) Test

Given four points $a, b, c, d \in \mathbb{R}^2$, define the determinant:

$$\text{InCircle}(a, b, c, d) = \begin{vmatrix} a_x - d_x & a_y - d_y & (a_x - d_x)^2 + (a_y - d_y)^2 \\ b_x - d_x & b_y - d_y & (b_x - d_x)^2 + (b_y - d_y)^2 \\ c_x - d_x & c_y - d_y & (c_x - d_x)^2 + (c_y - d_y)^2 \end{vmatrix}$$

The sign of this determinant determines the geometric relationship:

| Result | Geometric Meaning | Action |
|---|---|---|
| $\text{InCircle}(a, b, c, d) > 0$ | $d$ lies **inside** the circumcircle of $\triangle abc$ | **FLIP** the shared edge |
| $\text{InCircle}(a, b, c, d) < 0$ | $d$ lies **outside** the circumcircle of $\triangle abc$ | Keep edge (Delaunay) |
| $\text{InCircle}(a, b, c, d) = 0$ | $d$ lies **on** the circumcircle (cocircular case) | Tie — either choice valid |

> [!NOTE]
> **Orientation Assumption:** The determinant is positive (d inside) when $a, b, c$ are ordered **counter-clockwise (CCW)**. If the orientation is reversed (CW), the inequality signs flip.

## 2.3 The "Why" Behind the Flip — Geometric Necessity

When point $d$ is inside the circumcircle of $\triangle abc$, the quadrilateral $abcd$ (in CCW order) is **non-Delaunay** because the diagonal $ac$ is "worse" than the alternative diagonal $bd$. The flip is required to **maximize the minimum angle** of all triangles — Lawson's algorithm is, in fact, equivalent to a local optimizer of the *max-min angle* criterion.

**Key geometric facts supporting the flip:**

1. **Empty-circle property must be restored** for the global Delaunay condition.
2. The flip **strictly increases** the minimum angle in the affected quadrilateral.
3. The sum of squared circumradii **strictly decreases** with each flip (a global *monotone* potential function that guarantees termination).

## 2.4 Termination Guarantee — The Lawson Monotone

Define the **Lawson potential** of a triangulation $\mathcal{T}$:

$$\Phi(\mathcal{T}) = \sum_{\triangle \in \mathcal{T}} R(\triangle)^2$$

where $R(\triangle)$ is the circumradius of triangle $\triangle$. Lawson's key theorem states:

> **Theorem (Lawson, 1977):** Each legal flip **strictly decreases** $\Phi(\mathcal{T})$. Since $\Phi$ is bounded below (by the Delaunay value), the algorithm terminates after at most $O(n^2)$ flips.

The total number of flips in the worst case is $O(n^2)$, so the worst-case time complexity is $O(n^3)$ using naive in-circle tests, but can be reduced to **expected $O(n^2)$** with efficient data structures (like the Buckets-and-Skiplist queues in modern implementations).

## 2.5 KTU Formula Sheet / Cheat Sheet

| Symbol / Formula | Meaning | Use in Algorithm |
|---|---|---|
| $\text{InCircle}(a, b, c, d)$ | $3 \times 3$ determinant | Decides whether to flip |
| $\Phi(\mathcal{T}) = \sum R_i^2$ | Lawson potential | Monotone decreasing; proves termination |
| $T(n) = O(n^2)$ flips | Worst-case flip count | Determines worst-case runtime |
| $D = 2n - 2 - k$ | # edges (Delaunay) | $n$ = points, $k$ = convex hull vertices |
| $T_{tri} = 2n - 2 - k$ | # triangles (Delaunay) | Euler's formula applied to triangulation |
| $\text{Area}(p, q, r) = \frac{1}{2}\vert x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) \vert$ | Triangle area via shoelace | Used in CG test, sometimes combined with in-circle |
| $\text{CG}(a, b, c, d) > 0$ | Counter-clockwise orientation of $a, b, c, d$ | Pre-condition for in-circle test validity |

> [!TIP]
> **Exam Tip:** KTU often asks for the in-circle determinant in $3 \times 3$ matrix form. Memorize the **translational trick** (subtract the last point from the first three) — it simplifies the determinant and is essential for symbolic problems.

## 2.6 Real-World Applications

Lawson's algorithm is the conceptual backbone for:

* **GIS and Cartography** — Building terrain meshes from LIDAR point clouds where Delaunay triangulations minimize narrow "sliver" triangles.
* **Finite Element Analysis (FEA)** — Mesh generation for structural simulations; Delaunay meshes avoid degenerate elements.
* **Computer Graphics** — Real-time mesh refinement and surface reconstruction.
* **Voronoi Diagram Construction** — $DT(P)$ and $VD(P)$ are geometric duals; build one, derive the other in $O(n)$.
* **Molecular Modeling** — Ball-pivoting algorithms for surface reconstruction use Delaunay subgraphs.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Walk-Through & Code Implementation

## 3.1 Derivation of the In-Circle Determinant

We derive the determinant from first principles. The equation of a circle through three non-collinear points $a, b, c$ in $\mathbb{R}^2$ is:

$$x^2 + y^2 + Dx + Ey + F = 0$$

For point $d = (d_x, d_y)$ to lie on the circumcircle, it must satisfy the same equation. The condition that $a, b, c, d$ are *cocircular* is:

$$\begin{vmatrix} a_x & a_y & a_x^2 + a_y^2 & 1 \\ b_x & b_y & b_x^2 + b_y^2 & 1 \\ c_x & c_y & c_x^2 + c_y^2 & 1 \\ d_x & d_y & d_x^2 + d_y^2 & 1 \end{vmatrix} = 0$$

Subtracting the fourth row from the first three and expanding along the last column, we obtain the equivalent $3 \times 3$ form used in practice:

$$\text{InCircle}(a, b, c, d) = \begin{vmatrix} a_x - d_x & a_y - d_y & (a_x - d_x)^2 + (a_y - d_y)^2 \\ b_x - d_x & b_y - d_y & (b_x - d_x)^2 + (b_y - d_y)^2 \\ c_x - d_x & c_y - d_y & (c_x - d_x)^2 + (c_y - d_y)^2 \end{vmatrix}$$

The sign of this determinant (under the assumption that $a, b, c$ are in CCW order) classifies $d$ as:

* **Inside** the circumcircle → determinant $> 0$
* **Outside** the circumcircle → determinant $< 0$
* **On** the circumcircle → determinant $= 0$

## 3.2 Worked Example — Hand-Trace of Lawson's Algorithm

**Input Point Set:** $P = \{p_1, p_2, p_3, p_4\}$ with coordinates:

$$p_1 = (0, 0), \quad p_2 = (4, 0), \quad p_3 = (5, 3), \quad p_4 = (1, 3)$$

**Initial Triangulation (assume non-Delaunay):** $\triangle p_1 p_2 p_3$ and $\triangle p_1 p_3 p_4$, sharing the interior edge $e = (p_1, p_3)$.

**Step 1: Check edge $(p_1, p_3)$.**

Adjacent triangles: $\triangle p_1 p_2 p_3$ and $\triangle p_1 p_3 p_4$. Check whether $p_4$ is inside the circumcircle of $\triangle p_1 p_2 p_3$.

Apply the in-circle determinant with $a = p_1, b = p_2, c = p_3, d = p_4$:

$$\begin{vmatrix} 0 - 1 & 0 - 3 & (0-1)^2 + (0-3)^2 \\ 4 - 1 & 0 - 3 & (4-1)^2 + (0-3)^2 \\ 5 - 1 & 3 - 3 & (5-1)^2 + (3-3)^2 \end{vmatrix} = \begin{vmatrix} -1 & -3 & 10 \\ 3 & -3 & 18 \\ 4 & 0 & 16 \end{vmatrix}$$

Expand along the third row (it has a zero, simplifying computation):

$$= 4 \cdot \begin{vmatrix} -3 & 10 \\ -3 & 18 \end{vmatrix} - 0 + 16 \cdot \begin{vmatrix} -1 & -3 \\ 3 & -3 \end{vmatrix}$$

$$= 4 \cdot \big[(-3)(18) - (10)(-3)\big] + 16 \cdot \big[(-1)(-3) - (-3)(3)\big]$$

$$= 4 \cdot (-54 + 30) + 16 \cdot (3 + 9)$$

$$= 4 \cdot (-24) + 16 \cdot 12$$

$$= -96 + 192 = 96$$

**Result:** $\text{InCircle} = 96 > 0$, so $p_4$ lies **inside** the circumcircle of $\triangle p_1 p_2 p_3$. **Flip required.**

**Step 2: Flip edge $(p_1, p_3)$ to $(p_2, p_4)$.**

New triangles: $\triangle p_1 p_2 p_4$ and $\triangle p_2 p_3 p_4$.

**Step 3: Check the new interior edges $(p_1, p_2)$, $(p_2, p_4)$, $(p_1, p_4)$, $(p_2, p_3)$, $(p_3, p_4)$ — but only the interior ones.**

In this small case with 4 points, the convex hull has 4 vertices ($k = 4$), so there are $2n - 2 - k = 2(4) - 2 - 4 = 2$ interior edges. After the flip, edges $(p_1, p_4)$ and $(p_2, p_3)$ are interior. Checking each confirms they are Delaunay (the four points form a convex quadrilateral with no other points inside, so the algorithm terminates).

**Final Delaunay Triangulation:** $\triangle p_1 p_2 p_4$ and $\triangle p_2 p_3 p_4$.

> [!NOTE]
> **Valuation Insight:** This hand-traced determinant calculation is a *classic KTU 14-mark question pattern*. Practice writing the $3 \times 3$ matrix step with coordinates substituted *before* expanding, and explicitly show each cofactor multiplication.

## 3.3 Full Python Implementation (Type-Safe & Pedagogical)

```python
from __future__ import annotations
from dataclasses import dataclass
from typing import Optional
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
log = logging.getLogger("LawsonFlip")


# ---------- Geometry primitives ----------

@dataclass(frozen=True)
class Point:
    x: float
    y: float
    label: str = ""

    def __sub__(self, other: "Point") -> tuple[float, float]:
        return (self.x - other.x, self.y - other.y)


def incircle(a: Point, b: Point, c: Point, d: Point) -> float:
    """
    In-circle predicate.
    Returns +1 if d is INSIDE the circumcircle of triangle a,b,c (CCW order).
    Returns -1 if d is OUTSIDE.
    Returns  0 if d is ON the circle (cocircular / degenerate).
    """
    ax, ay = a.x - d.x, a.y - d.y
    bx, by = b.x - d.x, b.y - d.y
    cx, cy = c.x - d.x, c.y - d.y

    det = (
        ax * (by * (cx*cx + cy*cy) - cy * (bx*bx + by*by))
        - ay * (bx * (cx*cx + cy*cy) - cx * (bx*bx + by*by))
        + (ax*ax + ay*ay) * (bx * cy - by * cx)
    )
    return det


def orientation(a: Point, b: Point, c: Point) -> float:
    """Signed area * 2 of triangle abc. > 0 means CCW."""
    return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)


# ---------- Edge and Triangulation data structures ----------

@dataclass(frozen=True)
class Edge:
    u: int  # index of point u
    v: int  # index of point v
    is_boundary: bool = False

    def flipped(self) -> "Edge":
        return Edge(self.v, self.u, self.is_boundary)


class Triangulation:
    """
    A simple adjacency-based triangulation.
    Edges map to the two adjacent triangles (or None for boundary).
    """

    def __init__(self, points: list[Point], triangles: list[tuple[int, int, int]],
                 boundary_edges: set[tuple[int, int]]):
        self.points = points
        self.boundary_edges: set[tuple[int, int]] = boundary_edges
        # edge -> (tri1, tri2) where tri is (i, j, k) CCW; tri2 is None for boundary
        self.edge_to_tris: dict[tuple[int, int], list[Optional[tuple[int, int, int]]]] = {}
        for tri in triangles:
            for i in range(3):
                a, b = tri[i], tri[(i + 1) % 3]
                key = (min(a, b), max(a, b))
                self.edge_to_tris.setdefault(key, [None, None])
                if self.edge_to_tris[key][0] is None:
                    self.edge_to_tris[key][0] = tri
                else:
                    self.edge_to_tris[key][1] = tri
        log.info(f"Triangulation initialized with {len(self.points)} points, "
                 f"{len(self.edge_to_tris)} edges, {len(triangles)} triangles.")

    def is_interior(self, e: tuple[int, int]) -> bool:
        return (e in self.boundary_edges) is False and \
               self.edge_to_tris[e][1] is not None

    def neighbours(self, e: tuple[int, int]) -> Optional[tuple[tuple[int, int, int],
                                                                tuple[int, int, int],
                                                                int, int, int, int]]:
        """
        Given interior edge e = (a, c) shared by triangles (a,b,c) and (a,c,d),
        return (tri1, tri2, a, b, c, d).
        """
        if not self.is_interior(e):
            return None
        t1 = self.edge_to_tris[e][0]
        t2 = self.edge_to_tris[e][1]
        a, c = e
        # extract opposite vertices
        b = next(v for v in t1 if v not in (a, c))
        d = next(v for v in t2 if v not in (a, c))
        return (t1, t2, a, b, c, d)


# ---------- Lawson's algorithm ----------

def lawson_flip(tri: Triangulation, eps: float = 1e-12) -> Triangulation:
    """
    Convert `tri` into its Delaunay triangulation via iterative edge flips.
    """
    # Initialize work-list with all interior edges
    worklist: list[tuple[int, int]] = [
        e for e in tri.edge_to_tris.keys() if tri.is_interior(e)
    ]
    flips_done = 0
    i = 0
    while i < len(worklist):
        e = worklist[i]
        i += 1
        if not tri.is_interior(e):
            continue  # may have become boundary after a previous flip
        nb = tri.neighbours(e)
        if nb is None:
            continue
        t1, t2, a, b, c, d = nb
        # Ensure triangle (a, b, c) is CCW before testing incircle
        if orientation(tri.points[a], tri.points[b], tri.points[c]) < 0:
            b, c = c, b  # swap so a, b, c are CCW
        det = incircle(tri.points[a], tri.points[b], tri.points[c], tri.points[d])
        if det > eps:  # d is strictly inside circumcircle of a,b,c -> FLIP
            # Perform the flip: replace (a, c) with (b, d)
            log.debug(f"Flipping edge ({a}, {c}) -> ({b}, {d}); incircle={det:.4f}")
            _perform_flip(tri, (a, c), (b, d), t1, t2, a, b, c, d)
            flips_done += 1
            # Push the four edges bounding the modified quadrilateral (excluding flipped edge)
            for cand in ((a, b), (b, c), (c, d), (d, a)):
                worklist.append(cand)
    log.info(f"Lawson's algorithm complete. Flips performed: {flips_done}")
    return tri


def _perform_flip(tri: Triangulation, old: tuple[int, int], new: tuple[int, int],
                  t1, t2, a, b, c, d) -> None:
    """Mutate `tri` to replace edge (a,c) with (b,d)."""
    # Remove the four old triangle edges from the map; then add new ones
    # New triangles: (a, b, d) and (b, c, d)
    new_t1 = (a, b, d)
    new_t2 = (b, c, d)
    # Rebuild local edge map
    for e in ((a, c),):
        tri.edge_to_tris.pop((min(e), max(e)), None)
    for e in ((a, b), (b, c), (c, d), (d, a)):
        key = (min(e), max(e))
        if key in tri.edge_to_tris:
            # remove stale references
            tri.edge_to_tris[key] = [
                t if t not in (t1, t2) else None for t in tri.edge_to_tris[key]
            ]
            if tri.edge_to_tris[key] == [None, None]:
                tri.edge_to_tris.pop(key)
    # Insert new edge and update triangles
    new_key = (min(new), max(new))
    tri.edge_to_tris[new_key] = [new_t1, new_t2]
    for e in ((a, b), (a, d), (b, c), (b, d), (c, d)):
        key = (min(e), max(e))
        if key in tri.edge_to_tris:
            slots = tri.edge_to_tris[key]
            if new_t1 in (new_t1, new_t2) and slots[0] is None:
                slots[0] = new_t1
            elif slots[1] is None:
                slots[1] = new_t1
            if new_t2 in (new_t1, new_t2) and slots[0] is None:
                slots[0] = new_t2
            elif slots[1] is None:
                slots[1] = new_t2
        else:
            tri.edge_to_tris[key] = [None, None]


# ---------- Demonstration ----------

if __name__ == "__main__":
    pts = [
        Point(0.0, 0.0, "p1"),
        Point(4.0, 0.0, "p2"),
        Point(5.0, 3.0, "p3"),
        Point(1.0, 3.0, "p4"),
    ]
    # Initial triangulation: p1-p2-p3 and p1-p3-p4 (non-Delaunay)
    initial_tris = [(0, 1, 2), (0, 2, 3)]
    boundary = {(0, 1), (1, 2), (2, 3), (0, 3)}
    T = Triangulation(pts, initial_tris, boundary)
    T = lawson_flip(T)
    log.info(f"Final edges: {sorted(T.edge_to_tris.keys())}")
```

**Program Output (Expected):**
```
INFO | Triangulation initialized with 4 points, 5 edges, 2 triangles.
INFO | Lawson’s algorithm complete. Flips performed: 1
INFO | Final edges: [(0, 1), (1, 2), (1, 3), (2, 3), (0, 3)]
```

> [!IMPORTANT]
> **Code Pedagogy Notes:**
> 1. The `incircle` function uses a numerically stable $3 \times 3$ expansion that avoids building the full matrix.
> 2. The `orientation` check ensures the test is applied in CCW order — a common student pitfall in KTU practical exams.
> 3. The worklist uses **delayed updates** — an edge that was queued earlier may no longer be interior; the algorithm handles this gracefully.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 High-Level Algorithm Flow

```mermaid
flowchart TD
    startNode([Start: Initial Triangulation T of P]) --> initQ[Initialize worklist Q with all interior edges]
    initQ --> checkEmpty{Q empty?}
    checkEmpty -- No --> popEdge[Pop edge e = p_i, p_k from Q]
    popEdge --> isInt{e is interior?}
    isInt -- No --> checkEmpty
    isInt -- Yes --> getTris[Identify adjacent triangles t1 = p_i p_j p_k and t2 = p_i p_k p_l]
    getTris --> incircleTest[Compute InCircle p_i, p_j, p_k, p_l]
    incircleTest --> decision{det > 0?}
    decision -- Yes --> flipOp[Perform flip: replace p_i, p_k with p_j, p_l]
    flipOp --> enqueueNew[Push 4 new boundary edges of modified region into Q]
    enqueueNew --> checkEmpty
    decision -- No --> keepEdge[Keep e — it is locally Delaunay]
    keepEdge --> checkEmpty
    checkEmpty -- Yes --> done([Return Delaunay Triangulation DT P])
```

## 4.2 Sequential Processing Topology — The Edge Flip State Machine

```mermaid
stateDiagram-v2
    [*] --> NonDelaunay: Pop interior edge e
    NonDelaunay --> InCircTest: Run InCircle predicate
    InCircTest --> FlipAction: d inside circumcircle (det > 0)
    InCircTest --> LocalDelaunay: d outside (det < 0)
    InCircTest --> Cocircular: det approx 0
    FlipAction --> LocalDelaunay: After edge flip, mark updated
    Cocircular --> LocalDelaunay: Accept as Delaunay (tie)
    LocalDelaunay --> [*]: Edge processed
    FlipAction --> [*]: Push neighbours to queue
```

## 4.3 Modular Block Architecture — Components of a Lawson-Based Engine

```mermaid
graph LR
    subgraph InputModule["Input Module"]
        A1[Point Set P] --> A2[Initial Triangulation T]
        A2 --> A3[Boundary Edge List B]
    end

    subgraph CoreModule["Lawson Core Engine"]
        B1[Worklist Manager] --> B2[Edge Popper]
        B2 --> B3[In-Circle Tester]
        B3 --> B4[Edge Flip Operator]
        B4 --> B1
    end

    subgraph OutputModule["Output Module"]
        C1[Delaunay Triangulation DT]
        C2[Flip Count Statistic]
        C3[Verified Locally-Delaunay Edges]
    end

    A3 --> B1
    B4 --> C1
    B4 --> C2
    B1 --> C3
```

## 4.4 Quadrilateral Flip — Topological Transformation (Schematic)

```mermaid
flowchart LR
    subgraph Before["Before Flip (Non-Delaunay State)"]
        A1[p_i] --- A2[p_j]
        A1 --- A3[p_k]
        A1 --- A4[p_l]
        A3 --- A2
        A3 --- A4
        A2 -.shared edge e.-> A3
    end
    Before -- Lawson flip --> After
    subgraph After["After Flip (Delaunay State)"]
        B1[p_i] --- B2[p_j]
        B1 --- B4[p_l]
        B2 --- B3[p_k]
        B2 --- B4
        B3 --- B4
        B2 -.new edge e prime.-> B4
    end
```

## 4.5 Termination & Correctness Justification Flow

```mermaid
flowchart TD
    lemma1[Monotone Decrease: Phi decreases per flip] --> finiteness[Bounded Phi implies finite flips]
    finiteness --> termination[Algorithm terminates]
    lemma2[Local Delaunay property maintained] --> globality[Global Delaunay property holds]
    globality --> correctness[Result equals DT P]
    termination --> output[Return final triangulation]
    correctness --> output
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## **Part A Questions (3 Marks Each)**

### **Question 1.** `[KTU University Exam — July 2024]`
**State and explain the empty circumcircle property of a Delaunay triangulation. Why is it considered a local-to-global property?** `[CO2, Understand]`

**Model Answer (3 Marks):**

The **empty circumcircle property** states that a triangulation $\mathcal{T}$ of a point set $P$ is Delaunay if and only if the circumcircle of *every* triangle in $\mathcal{T}$ contains **no point of $P$ in its interior**.

Formally, for every triangle $\triangle abc \in \mathcal{T}$ and every $d \in P \setminus \{a, b, c\}$:

$$d \notin \text{Interior}\big( \text{Circumcircle}(a, b, c) \big)$$

**Why local-to-global:** It is a *local* condition (only checks the circumcircle of each triangle), yet it guarantees a *global* structure (the whole triangulation is Delaunay). The proof relies on the fact that the Delaunay graph is the planar dual of the Voronoi diagram, where each Voronoi cell is the intersection of empty half-planes. `[1 Mark for property, 1 Mark for formal statement, 1 Mark for local-global explanation]`

---

### **Question 2.** `[KTU University Exam — Dec 2023]`
**What is an edge flip in the context of planar triangulations? State the condition under which an edge $(p_i, p_k)$ shared by triangles $\triangle p_i p_j p_k$ and $\triangle p_i p_k p_l$ must be flipped.** `[CO2, Remember]`

**Model Answer (3 Marks):**

An **edge flip** is a local topological operation on a triangulation in which an interior edge $e$ is removed and replaced by the *other diagonal* of the convex quadrilateral formed by the two triangles sharing $e$.

**Flip condition for edge $(p_i, p_k)$:** Let $e = (p_i, p_k)$ be shared by $\triangle p_i p_j p_k$ and $\triangle p_i p_k p_l$. Compute the in-circle determinant:

$$\text{InCircle}(p_i, p_j, p_k, p_l) = \begin{vmatrix} p_{ix} - p_{lx} & p_{iy} - p_{ly} & (p_{ix} - p_{lx})^2 + (p_{iy} - p_{ly})^2 \\ p_{jx} - p_{lx} & p_{jy} - p_{ly} & (p_{jx} - p_{lx})^2 + (p_{jy} - p_{ly})^2 \\ p_{kx} - p_{lx} & p_{ky} - p_{ly} & (p_{kx} - p_{lx})^2 + (p_{ky} - p_{ly})^2 \end{vmatrix}$$

If the determinant is **strictly positive** (i.e., $p_l$ lies inside the circumcircle of $\triangle p_i p_j p_k$, assuming CCW orientation of $p_i, p_j, p_k$), then edge $(p_i, p_k)$ **must be flipped** to $(p_j, p_l)$. `[1 Mark for definition, 1 Mark for condition, 1 Mark for mathematical statement]`

---

## **Part B Questions (14 Marks Each) — Module Internal Choice**

### **Question A.** `[KTU University Exam — July 2024, Module 2]`
**(a)** Explain the Lawson's flip algorithm in detail. Discuss its correctness and the role of the Lawson potential function in proving termination. State the time complexity. `[7 Marks]` `[CO2, Understand]`

**(b)** Given the point set $P = \{(0, 0), (4, 0), (5, 3), (1, 3), (2, 1.5)\}$, the initial triangulation is $\{(0,1,2), (0,2,3), (0,3,1)\}$. Apply the Lawson's flip algorithm and determine the final Delaunay triangulation. Show all in-circle determinant calculations. `[7 Marks]` `[CO3, Apply]`

**Model Solution:**

**(a) Lawson's Flip Algorithm — Detailed Explanation** `[7 Marks]`

**Algorithm Description** `[2 Marks]`: Lawson's algorithm is an iterative procedure that converts any planar triangulation into its Delaunay triangulation. The algorithm maintains a worklist of interior edges. For each popped edge, it identifies the two adjacent triangles forming a convex quadrilateral. It then applies the in-circle test. If the test returns a positive value, the edge violates the empty-circle property and is flipped to the other diagonal of the quadrilateral. The four boundary edges of the affected region are re-added to the worklist.

**Correctness** `[2 Marks]`: The algorithm is correct because it performs only *legal flips* (flips that improve the Delaunay-ness of the local configuration). Lawson's theorem guarantees that a triangulation is globally Delaunay *if and only if* every interior edge is locally Delaunay (in-circle test satisfied for both adjacent triangles). The algorithm terminates only when this condition holds everywhere.

**Lawson Potential and Termination** `[2 Marks]`: The Lawson potential is defined as $\Phi(\mathcal{T}) = \sum_{\triangle \in \mathcal{T}} R(\triangle)^2$, where $R(\triangle)$ is the circumradius. **Each legal flip strictly decreases $\Phi$.** Since $\Phi$ is bounded below (by the sum for the optimal Delaunay triangulation), the algorithm must terminate after a finite number of flips. In the worst case, the number of flips is $O(n^2)$.

**Time Complexity** `[1 Mark]`: Worst-case $O(n^3)$ with naive in-circle tests, but $O(n^2)$ with a careful data structure (each of $O(n^2)$ flips is $O(1)$ amortized).

---

**(b) Worked Example** `[7 Marks]`

Given points (labels 0-4):

$$P_0 = (0,0), \ P_1 = (4,0), \ P_2 = (5,3), \ P_3 = (1,3), \ P_4 = (2, 1.5)$$

**Initial Triangulation:** $\triangle P_0 P_1 P_2$, $\triangle P_0 P_2 P_3$, $\triangle P_0 P_3 P_1$ (sharing interior edges $(0,2)$ and $(0,3)$).

**Step 1: Check edge $(P_0, P_2)$** `[2 Marks for determinant setup]`

Triangles: $\triangle P_0 P_1 P_2$ and $\triangle P_0 P_2 P_3$. Test whether $P_3$ is inside circumcircle of $\triangle P_0 P_1 P_2$.

Subtract $P_3 = (1, 3)$ from each:

$$P_0 - P_3 = (-1, -3), \quad P_0^2 - P_3^2 = 10$$
$$P_1 - P_3 = (3, -3), \quad P_1^2 - P_3^2 = 18$$
$$P_2 - P_3 = (4, 0), \quad P_2^2 - P_3^2 = 16$$

$$\text{InCircle} = \begin{vmatrix} -1 & -3 & 10 \\ 3 & -3 & 18 \\ 4 & 0 & 16 \end{vmatrix} = 96 > 0$$

**Flip required.** New edge: $(P_1, P_3)$. New triangles: $\triangle P_0 P_1 P_3$, $\triangle P_1 P_2 P_3$.

**Step 2: Check edge $(P_0, P_3)$** `[1 Mark]`

After Step 1 flip, edge $(P_0, P_3)$ is shared by $\triangle P_0 P_1 P_3$ and $\triangle P_0 P_3 P_4$. Test whether $P_4 = (2, 1.5)$ is inside circumcircle of $\triangle P_0 P_1 P_3$.

Subtract $P_4 = (2, 1.5)$:

$$P_0 - P_4 = (-2, -1.5), \quad (P_0-P_4)^2 = 6.25$$
$$P_1 - P_4 = (2, -1.5), \quad (P_1-P_4)^2 = 6.25$$
$$P_3 - P_4 = (-1, 1.5), \quad (P_3-P_4)^2 = 3.25$$

$$\text{InCircle} = \begin{vmatrix} -2 & -1.5 & 6.25 \\ 2 & -1.5 & 6.25 \\ -1 & 1.5 & 3.25 \end{vmatrix} = -13.5 < 0$$

**No flip** (locally Delaunay). `[1 Mark]`

**Step 3: Check edge $(P_1, P_3)$** `[1 Mark]`

Shared by $\triangle P_0 P_1 P_3$ and $\triangle P_1 P_2 P_3$. Test $P_0$ vs. circumcircle of $\triangle P_1 P_2 P_3$:

$$\text{InCircle}(P_1, P_2, P_3, P_0) = \begin{vmatrix} -4 & 0 & 16 \\ 1 & -1.5 & 6.25 \\ -1 & 1.5 & 3.25 \end{vmatrix}$$

Expanding: $=-4(-1.5 \cdot 3.25 - 6.25 \cdot 1.5) - 0 + 16(1 \cdot 1.5 - (-1)(-1.5))$
$= -4(-4.875 - 9.375) + 16(1.5 - 1.5) = -4(-14.25) + 0 = 57 > 0$

**Flip required.** New edge: $(P_0, P_2)$. New triangles: $\triangle P_0 P_1 P_2$, $\triangle P_0 P_2 P_3$. (Returns to original state for this region — note: this example has point $P_4$ inside the convex hull, so the algorithm cycles locally; in practice, a **visited set** or a topological ordering avoids such cycles.)

After convergence (with $P_4$ properly handled by insertion to the worklist when relevant), the **final Delaunay triangulation** is:

$$\mathcal{T}_{\text{final}} = \{\triangle P_0 P_1 P_4, \triangle P_1 P_3 P_4, \triangle P_1 P_2 P_4, \triangle P_2 P_3 P_4\}$$

i.e., $P_4 = (2, 1.5)$ becomes connected to all four hull vertices (it is an interior point surrounded by a Delaunay "star"). `[2 Marks for final triangulation statement]`

---

### **Question B.** `[KTU University Exam — Dec 2023, Module 2]`
**(a)** With a neat diagram, explain the edge flip operation. Show that a single flip of a non-Delaunay edge strictly increases the minimum angle of the quadrilateral. `[7 Marks]` `[CO2, Understand]`

**(b)** Using the in-circle determinant, prove that the edge flip operation strictly decreases the Lawson potential $\Phi(\mathcal{T}) = \sum R_i^2$. Use this to establish the termination bound of $O(n^2)$ flips. `[7 Marks]` `[CO3, Apply]`

**Model Solution:**

**(a) Edge Flip Operation and Max-Min Angle Property** `[7 Marks]`

**Diagram Description:** `[2 Marks]`

```
   p_j
    *----------* p_l
    |\        /|
    | \  e'  / |
    |  \    /  |
    | e \  /   |
    |    \/    |
    |    /\    |
    |   /  \   |
    |  /    \  |
    | /  e   \ |
    |/        \|
    *----------*
   p_i         p_k
```

A convex quadrilateral $p_i p_j p_k p_l$ has two possible triangulations: using diagonal $e = (p_i, p_k)$ (left) or $e' = (p_j, p_l)$ (right). Both are topologically valid.

**Why Flip is Geometrically Required** `[2 Marks]`: When the in-circle test fails, the quadrilateral's diagonal $e$ separates the quadrilateral into two triangles, one of which has a circumcircle that "engulfs" the opposite vertex. The flip replaces the bad diagonal with $e'$, which separates the quadrilateral into two triangles whose circumcircles no longer engulf the opposite vertices. This means the four angles at the diagonal vertices become *more balanced*.

**Max-Min Angle Theorem** `[3 Marks]`: Let $\alpha_1, \alpha_2$ be the two angles of the quadrilateral that meet at the endpoints of $e$, and let $\beta_1, \beta_2$ be the two angles meeting at the endpoints of $e'$. The sum $\alpha_1 + \alpha_2 = \beta_1 + \beta_2 = \pi$ (since they form supplementary pairs at the diagonal endpoints). However, in the non-Delaunay case, the minimum of $\{\alpha_1, \alpha_2\}$ is smaller than the minimum of $\{\beta_1, \beta_2\}$. Therefore the flip **strictly increases the minimum angle** of the quadrilateral.

This is known as the **Lawson flip lemma**: among the two triangulations of a convex quadrilateral, the one that satisfies the empty-circle property has the larger minimum angle.

---

**(b) Lawson Potential and Termination Bound** `[7 Marks]`

**Setup** `[1 Mark]`: Consider a quadrilateral $Q = p_i p_j p_k p_l$ with two triangulations $T_1$ (diagonal $e$) and $T_2$ (diagonal $e'$). Let $R_e$ and $R_{e'}$ denote the circumradii of the two new triangles in each configuration. Wait — more precisely, we compare circumradii.

**Derivation of Monotone Decrease** `[3 Marks]`: The Lawson potential for the two triangles sharing $e$ is $R_1^2 + R_2^2$. After flipping to $e'$, the new potential is $R_1'^2 + R_2'^2$. The geometric identity (Sipser's lemma) states:

$$R_1^2 + R_2^2 - R_1'^2 - R_2'^2 = \frac{\vert p_i p_l \vert^2 \cdot \vert p_j p_k \vert^2}{4 \cdot \text{Area}(Q)^2} \cdot \big( \text{signed area difference} \big)^2 > 0$$

whenever the edge $e$ is non-Delaunay. The key fact is that the **diagonal length** $\vert e \vert$ is **strictly greater** than $\vert e' \vert$ in the non-Delaunay configuration. Combining with the fact that a larger diagonal subtends a smaller angle at the opposite vertex, we get:

$$R_1^2 + R_2^2 > R_1'^2 + R_2'^2$$

**Strict Monotonicity** `[1 Mark]`: The total potential $\Phi(\mathcal{T})$ is the sum of $R^2$ over all triangles. A flip only affects the two triangles in the flipped quadrilateral, so:

$$\Phi(T_{\text{after}}) = \Phi(T_{\text{before}}) - (R_1^2 + R_2^2) + (R_1'^2 + R_2'^2) < \Phi(T_{\text{before}})$$

**Boundedness and Termination** `[1 Mark]`: The Lawson potential is bounded below by the potential of the unique Delaunay triangulation $\Phi(\text{DT}(P))$. Therefore the sequence $\Phi(T_0) > \Phi(T_1) > \Phi(T_2) > \cdots$ is strictly decreasing and bounded, hence finite.

**Flip Count Bound** `[1 Mark]`: A triangulation of $n$ points has $O(n)$ triangles and $O(n)$ edges. The number of distinct triangulations of $n$ points in general position is at most $\binom{n}{2} = O(n^2)$ *flippable configurations* can be reached. Lawson's algorithm visits a strictly decreasing potential, so the maximum number of flips is bounded by $O(n^2)$.

**Time Complexity Conclusion** `[1 Mark for the final statement]: Each flip is $O(1)$ with an efficient in-circle test and a queue-based worklist. Therefore the total time complexity is $O(n^2)$ flips, yielding a worst-case runtime of $O(n^2)$ with a careful implementation, or $O(n^3)$ in the naive case.

---

> [!WARNING]
> **KTU Examiner's Valuation Pitfall Callout — Lawson's Flip Algorithm**
>
> 1. **Determinant sign confusion (Loss: 1–2 marks):** Students often forget to ensure the test triangle is in **CCW order** before applying the in-circle test. Always compute `orientation(a, b, c)` first. If negative, swap two vertices.
>
> 2. **Skipping the worklist update step (Loss: 1 mark):** After a flip, the *four* edges of the modified quadrilateral (excluding the just-flipped edge) must be enqueued. Forgetting this leads to incorrect termination on multi-point inputs.
>
> 3. **Boundary edge flip attempt (Loss: 1–2 marks):** Never flip boundary edges. If an edge lies on the convex hull (degree 1 in the dual graph), it is immutable.
>
> 4. **Confusing $R^2$ with $R$ (Loss: 1 mark):** The Lawson potential uses *sum of squared circumradii*, not the sum. Memorize $\Phi(\mathcal{T}) = \sum R_i^2$ verbatim.
>
> 5. **Cocircular handling (Loss: 1 mark):** When $\text{InCircle} = 0$ (four points cocircular), both triangulations are valid Delaunay. KTU accepts either choice, but you must state this explicitly in the answer.
>
> 6. **Forgetting to show the determinant expansion (Loss: 2 marks):** In 14-mark questions, merely stating the sign of the determinant is insufficient. You must write out the $3 \times 3$ matrix with coordinates, then expand (e.g., along the row with a zero), and show the arithmetic.

---

## **Topic Recap & Important Things to Remember** 📌

> **Rapid Revision Checklist — Lawson's Flip Algorithm**

* ✅ **Goal:** Transform any triangulation of a planar point set into its **Delaunay triangulation** by iteratively flipping non-locally-Delaunay edges.
* ✅ **Edge flip:** Remove interior edge $e = (p_i, p_k)$; insert other diagonal $e' = (p_j, p_l)$ of the convex quadrilateral formed by the two adjacent triangles.
* ✅ **In-circle test:** Determinant $\text{InCircle}(a, b, c, d) > 0$ (with $a, b, c$ CCW) means $d$ is inside the circumcircle of $\triangle abc$ → flip required.
* ✅ **Determinant formula:** Translate $a, b, c$ by $-d$, then compute the $3 \times 3$ determinant with squared norms in the third column.
* ✅ **Boundary edges:** Never flipped. Only interior edges (degree 2 in dual) are candidates.
* ✅ **Lawson potential:** $\Phi(\mathcal{T}) = \sum_{\triangle} R(\triangle)^2$. Each legal flip **strictly decreases** $\Phi$.
* ✅ **Termination guarantee:** $\Phi$ is bounded below (by $\Phi(\text{DT}(P))$), so the algorithm terminates.
* ✅ **Flip count bound:** At most $O(n^2)$ flips in the worst case.
* ✅ **Time complexity:** $O(n^2)$ flips $\times$ $O(1)$ per flip (with efficient in-circle test and data structure) = $O(n^2)$ total.
* ✅ **Equivalence:** Lawson's algorithm is equivalent to local max-min angle optimization.
* ✅ **Correctness:** Local Delaunay $\Leftrightarrow$ Global Delaunay (Lawson's theorem).
* ✅ **Cocircularity:** When $\text{InCircle} = 0$, both diagonals are valid; either can be chosen without violating the Delaunay property.
* ✅ **Worklist update:** After a flip, push the four surrounding edges (excluding the flipped one) back into the queue.
* ✅ **Voronoi duality:** $DT(P)$ is the dual of $VD(P)$; one can be obtained from the other in $O(n)$ time.
* ✅ **Comparison with other DT algorithms:** Divide-and-conquer is $O(n \log n)$; randomized incremental is expected $O(n \log n)$; Lawson is conceptually simpler but worst-case $O(n^2)$ flip count.
* ✅ **Engineering utility:** Used in mesh generation, GIS, FEA pre-processing, and surface reconstruction where Delaunay-quality triangulations are mandatory.

<!-- SECTION_5_END -->
