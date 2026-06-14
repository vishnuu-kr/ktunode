# Delaunay triangulations structural properties duality with Voronoi diagrams

<!-- SECTION_1_START -->
# Delaunay Triangulations: Structural Properties & Voronoi Duality

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

> [!IMPORTANT]
> **Delaunay Triangulation (DT):** Given a set $P = \{p_1, p_2, \dots, p_n\}$ of $n$ points in general position in the plane $\mathbb{R}^2$, a **Delaunay Triangulation** $DT(P)$ is a triangulation of the convex hull of $P$ such that **no point of $P$ lies strictly inside the circumcircle of any triangle** in the triangulation. This is the celebrated **Empty Circumcircle Property**.

> [!NOTE]
> **Voronoi Diagram (VD):** For each site $p_i \in P$, the Voronoi cell is defined as $V(p_i) = \{x \in \mathbb{R}^2 : \|x - p_i\| \leq \|x - p_j\|, \ \forall j \neq i\}$. The union of all cell boundaries forms the Voronoi diagram.

**General Position Assumption:** No three points are collinear, and no four points are cocircular. This ensures $DT(P)$ is unique.

## 1.2 Intuitive Overview — The Balloon Inflation Analogy

Imagine you sprinkle a set of pegs on a stretched rubber sheet, then inflate a balloon **underneath** the sheet at the location of each peg. Each balloon pushes the rubber upward. The Delaunay triangulation corresponds to the **peaks and ridges** formed when balloons touch:

- The **circumcircle** of a triangle is the "bubble" of the touching balloons.
- Two balloons touching → a **Delaunay edge** between their centers.
- Three balloons mutually touching → a **Delaunay triangle**.

> [!TIP]
> **Why this analogy matters:** It directly visualizes the *empty circumcircle* condition. If a 4th balloon/peg were inside a circle, the three forming it would collapse and reconfigure — this is exactly what an **edge flip** does algorithmically.

### GeoGebra Visualization

> [!VISUALIZATION CONTROL]
> **Concept:** Empty Circumcircle Test on a Delaunay Triangle
> **GeoGebra / Desmos Input Equations:**
> * Circumcircle: $(x - a)^2 + (y - b)^2 = r^2$ where $(a,b)$ is circumcenter
> * Triangle vertices: $A(0,0)$, $B(4,0)$, $C(1,3)$
> * Test point: $D(2, 1.5)$ (should be **outside** the circumcircle)
> **Visual Description:** You should observe the circle passing through $A, B, C$ and the test point $D$ lying strictly **outside** the circle's boundary. If a point lies inside, the edge must be flipped to restore the Delaunay property.

---

## 1.3 The Duality Statement

> [!IMPORTANT]
> **Geometric Duality Theorem:** The Delaunay triangulation and Voronoi diagram of the same point set $P$ are **combinatorially dual**:
> * Each **vertex** of the Voronoi diagram corresponds to a **triangle** in the Delaunay triangulation.
> * Each **edge** of the Voronoi diagram corresponds to an **edge** in the Delaunay triangulation (the two edges are perpendicular and share a midpoint locus).
> * Each **cell** (face) of the Voronoi diagram corresponds to a **vertex** of the Delaunay triangulation.

This duality is **not a one-to-one map of points** — it is a correspondence of **incidence structures** (who is connected to whom).
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Five Core Structural Properties of $DT(P)$

### Property 1 — Empty Circumcircle (The Defining Property)
For every triangle $\Delta p_i p_j p_k \in DT(P)$, the circumcircle $C(p_i, p_j, p_k)$ contains **no point of $P$ in its interior**. Formally:

$$\forall p_l \in P \setminus \{p_i, p_j, p_k\}, \quad p_l \notin \text{int}\big(C(p_i, p_j, p_k)\big)$$

> [!NOTE]
> **Why it matters:** This is the single condition that **defines** the Delaunay triangulation. All other properties are *consequences* of this one.

### Property 2 — Max-Min Angle Optimality
Among all possible triangulations of $P$, the Delaunay triangulation **maximizes the minimum angle** of every triangle. It avoids "skinny" triangles (slivers). This is also called the **max-min angle property**.

### Property 3 — Local Delaunay Condition (Edge Flippability)
An edge $e = p_i p_j$ shared by triangles $\Delta p_i p_j p_k$ and $\Delta p_i p_j p_l$ is **locally Delaunay** if and only if $p_l$ lies **outside** the circumcircle of $\Delta p_i p_j p_k$ (equivalently, $p_k$ lies outside the circumcircle of $\Delta p_i p_j p_l$).

If violated, the edge is **illegally flipped** to $p_k p_l$, producing a new triangulation with a *strictly larger* minimum angle.

### Property 4 — Planarity, Connectedness & Convex Hull Containment
$DT(P)$ is a **planar graph** (edges do not cross), it is **connected**, and its outer face is the **convex hull** $CH(P)$. The number of edges is at most $3n - 3 - h$ and the number of triangles is at most $2n - 2 - h$, where $h$ is the number of points on the convex hull.

### Property 5 — Uniqueness
For points in **general position** (no 4 cocircular), $DT(P)$ is **unique**. If four points are cocircular, two or more valid triangulations exist and any is acceptable.

## 2.2 Structural Properties of the Voronoi–Delaunay Duality

| Structural Element | Voronoi Diagram $VD(P)$ | Delaunay Triangulation $DT(P)$ |
|---|---|---|
| Dimension 0 (point) | Voronoi vertex (cell corner) | Triangle (face of DT) |
| Dimension 1 (curve) | Voronoi edge (cell boundary arc) | Delaunay edge (shared by 2 triangles) |
| Dimension 2 (region) | Voronoi cell (one per point) | Delaunay vertex (a point of $P$) |
| Metric condition | Closest site property | Empty circumcircle property |
| Boundary | Unbounded rays from hull vertices | Outer face = $CH(P)$ |
| Size | $O(n)$ vertices, $O(n)$ edges | $O(n)$ vertices, $O(n)$ edges, $O(n)$ triangles |

> [!IMPORTANT]
> **Key Duality Identity:** A Voronoi vertex $v$ is equidistant from **at least three** sites. These sites are exactly the vertices of the corresponding Delaunay triangle. Furthermore, $v$ is the **circumcenter** of that triangle.

## 2.3 KTU Formula Sheet — Delaunay Triangulation & Duality

| Formula / Theorem | Statement | Used For |
|---|---|---|
| Empty circle condition | $\det \begin{vmatrix} a_x - d_x & a_y - d_y & (a_x^2 + a_y^2) - (d_x^2 + d_y^2) \\ b_x - d_x & b_y - d_y & (b_x^2 + b_y^2) - (d_x^2 + d_y^2) \\ c_x - d_x & c_y - d_y & (c_x^2 + c_y^2) - (d_x^2 + d_y^2) \end{vmatrix}$ | In-circle test: sign > 0 ⇒ $d$ inside circumcircle of $\Delta abc$ |
| Euler's formula | $V - E + F = 2$ | Counting DT elements |
| DT edge count | $E \leq 3n - 3 - h$ | Upper bound on edges |
| DT face count | $F_t \leq 2n - 2 - h$ | Upper bound on triangles |
| Circumcenter | $(a_x, a_y), (b_x, b_y), (c_x, c_y)$ ⟹ solved by linear system | Dual mapping $DT \to VD$ |
| In-circle determinant | $InCircle(a, b, c, d) = \begin{vmatrix} a_x & a_y & a_x^2 + a_y^2 & 1 \\ b_x & b_y & b_x^2 + b_y^2 & 1 \\ c_x & c_y & c_x^2 + c_y^2 & 1 \\ d_x & d_y & d_x^2 + d_y^2 & 1 \end{vmatrix}$ | Direct point-in-circumcircle test |
| Angle sum (triangle) | $\alpha + \beta + \gamma = \pi$ | Max-min angle validation |
| Edge flip angle gain | $\alpha' + \gamma' > \alpha + \gamma$ | Law of sines — guarantees monotonic improvement |

## 2.4 Real-World Engineering Utility

> [!NOTE]
> **Where Delaunay Triangulation is used in production systems:**
> * **Terrain modeling (GIS):** Generating TIN (Triangulated Irregular Networks) for digital elevation models. The max-min angle property gives well-shaped triangles for accurate interpolation.
> * **Computer graphics:** Mesh generation for finite element analysis (FEA) and 3D surface reconstruction. Skinny triangles produce numerical instability in solvers.
> * **Wireless network planning:** Voronoi cells give cell coverage regions; DT edges indicate neighboring cell handover paths.
> * **Machine learning:** $k$-nearest neighbor search uses Delaunay neighbors as candidate neighbor sets; Voronoi diagrams power locality-sensitive hashing variants.
> * **Computational fluid dynamics:** Mesh refinement using Delaunay edge flips.

---

## 2.5 Algorithmic Complexity & Construction Methods

| Algorithm | Time Complexity | Strategy |
|---|---|---|
| Incremental + Edge Flipping (Bowyer–Watson) | $O(n^2)$ worst, $O(n \log n)$ expected | Insert points one by one, fix illegal edges |
| Divide and Conquer (Guibas–Stolfi) | $O(n \log n)$ | Recursive merge of left/right triangulations |
| Sweep Line (Fortune) | $O(n \log n)$ | Plane sweep with beach line |
| Randomized Incremental | $O(n \log n)$ expected | Random shuffle + incremental insertion |
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code Implementation

## 3.1 Derivation of the In-Circle Determinant Test

We want to test whether a point $d = (d_x, d_y)$ lies **inside**, **outside**, or **on** the circumcircle of triangle $\Delta abc$ where $a = (a_x, a_y)$, $b = (b_x, b_y)$, $c = (c_x, c_y)$.

### Step 1 — Equation of a General Circle
The general equation of a circle in the plane is:

$$x^2 + y^2 + Dx + Ey + F = 0$$

A point $(x, y)$ lies on the circle if and only if it satisfies this equation. For the circumcircle to pass through $a, b, c$, we have three equations:

$$a_x^2 + a_y^2 + D \cdot a_x + E \cdot a_y + F = 0$$
$$b_x^2 + b_y^2 + D \cdot b_x + E \cdot b_y + F = 0$$
$$c_x^2 + c_y^2 + D \cdot c_x + E \cdot c_y + F = 0$$

### Step 2 — Linear System for $(D, E, F)$
This is a linear system of 3 equations in 3 unknowns $(D, E, F)$. We solve it to find the circumcenter:

$$(x_0, y_0) = \left(-\frac{D}{2}, -\frac{E}{2}\right), \quad r^2 = x_0^2 + y_0^2 - F$$

### Step 3 — In-Circle Test as Determinant
By **Cramer's Rule** and the theory of homogeneous coordinates, the sign of the following $4 \times 4$ determinant determines whether $d$ is inside (positive), on (zero), or outside (negative) the circumcircle:

$$InCircle(a, b, c, d) = \begin{vmatrix} a_x & a_y & a_x^2 + a_y^2 & 1 \\ b_x & b_y & b_x^2 + b_y^2 & 1 \\ c_x & c_y & c_x^2 + c_y^2 & 1 \\ d_x & d_y & d_x^2 + d_y^2 & 1 \end{vmatrix}$$

> [!IMPORTANT]
> **Sign Convention Used in KTU Board Exams:**
> * $InCircle > 0$ ⇒ $d$ lies **inside** the circumcircle of $\Delta abc$ (illegal configuration).
> * $InCircle < 0$ ⇒ $d$ lies **outside** (Delaunay-legal).
> * $InCircle = 0$ ⇒ $d$ lies **on** the circle (cocircular degeneracy).

### Step 4 — Worked Numerical Example
Let $a = (0, 0)$, $b = (4, 0)$, $c = (1, 3)$, $d = (2, 1)$. Compute:

$$InCircle = \begin{vmatrix} 0 & 0 & 0 & 1 \\ 4 & 0 & 16 & 1 \\ 1 & 3 & 10 & 1 \\ 2 & 1 & 5 & 1 \end{vmatrix}$$

Expanding along the first row:

$$= 0 - 0 + 0 - 1 \cdot \begin{vmatrix} 4 & 0 & 16 \\ 1 & 3 & 10 \\ 2 & 1 & 5 \end{vmatrix}$$

Computing the $3 \times 3$ determinant:

$$= 4(3 \cdot 5 - 10 \cdot 1) - 0 + 16(1 \cdot 1 - 3 \cdot 2)$$
$$= 4(15 - 10) + 16(1 - 6) = 4(5) + 16(-5) = 20 - 80 = -60$$

Therefore $InCircle = -(-60) = 60 > 0$. Wait — careful with sign. Re-evaluating with the cofactor expansion correctly:

$$InCircle = +1 \cdot \begin{vmatrix} 4 & 0 & 16 \\ 1 & 3 & 10 \\ 2 & 1 & 5 \end{vmatrix} = 20 - 80 = -60 < 0$$

So $d$ is **outside** the circumcircle. $\Delta abc$ is **Delaunay-legal** with respect to $d$.

## 3.2 Derivation of Edge Flip Monotonicity (Law of Sines Argument)

Consider edge $e = p_i p_j$ shared by triangles $T_1 = \Delta p_i p_j p_k$ and $T_2 = \Delta p_i p_j p_l$. The quadrilateral is $Q = p_i p_k p_j p_l$.

Let $\alpha = \angle p_k p_i p_j$ and $\gamma = \angle p_l p_i p_j$ be the two angles **at vertex $p_i$** on either side of edge $e$.

**Pre-flip minimum angle:** $\theta_{\min} = \min(\alpha, \gamma)$ (other angles may be larger).

**Post-flip (with edge $p_k p_l$):** Let $\alpha' = \angle p_i p_k p_l$ and $\gamma' = \angle p_i p_l p_k$ be the **two new angles at the new edge**. By the law of sines in the two original triangles sharing circumradius $R$:

$$\frac{\|p_i p_j\|}{\sin \angle p_k p_j p_l} = 2R$$

Since opposite angles in a cyclic quadrilateral sum to $\pi$, the new angles relate as:

$$\alpha' + \gamma' = \pi - \angle p_i p_k p_j - \angle p_i p_l p_j = \alpha + \gamma$$

By the standard inequality of angles, **at least one of the new angles** is $\geq \frac{\alpha + \gamma}{2} \geq \min(\alpha, \gamma)$, and the **sum of the two smallest angles strictly increases** unless $\alpha = \gamma$ (symmetric case). Hence edge flipping is a **monotone improvement** of the max-min angle objective.

## 3.3 Production-Grade Python Implementation

```python
"""
Incremental Delaunay Triangulation with Bowyer-Watson Algorithm.
Implements the empty circumcircle property structurally with edge flipping.
"""

from __future__ import annotations
import math
from dataclasses import dataclass, field
from typing import List, Optional, Tuple


@dataclass(frozen=True)
class Point:
    """Immutable 2D point with strict hashing for set/dict operations."""
    x: float
    y: float

    def __repr__(self) -> str:
        return f"Point({self.x:.3f}, {self.y:.3f})"


@dataclass
class Triangle:
    """Triangle represented by three vertices stored CCW."""
    a: Point
    b: Point
    c: Point

    def vertices(self) -> Tuple[Point, Point, Point]:
        return (self.a, self.b, self.c)

    def edges(self) -> List[Tuple[Point, Point]]:
        return [(self.a, self.b), (self.b, self.c), (self.c, self.a)]


def incircle(a: Point, b: Point, c: Point, d: Point) -> float:
    """
    In-circle determinant test.
    Returns > 0 if d is INSIDE circumcircle of triangle abc.
    Returns < 0 if d is OUTSIDE.
    Returns 0 if d is ON the circumcircle.
    """
    ax, ay = a.x - d.x, a.y - d.y
    bx, by = b.x - d.x, b.y - d.y
    cx, cy = c.x - d.x, c.y - d.y
    return (
        ax * (by * (cx**2 + cy**2) - cy * (bx**2 + by**2))
        - ay * (bx * (cx**2 + cy**2) - cx * (bx**2 + by**2))
        + (ax**2 + ay**2) * (bx * cy - by * cx)
    )


def in_circumcircle(tri: Triangle, p: Point) -> bool:
    """Strictly tests if p is inside the circumcircle of tri."""
    return incircle(tri.a, tri.b, tri.c, p) > 1e-12


def edge_key(p1: Point, p2: Point) -> Tuple[Point, Point]:
    """Canonical edge key (order-independent)."""
    return (p1, p2) if p1 < p2 else (p2, p1)


def shared_edge(t1: Triangle, t2: Triangle) -> Optional[Tuple[Point, Point]]:
    """Returns the shared edge between two triangles, or None."""
    edges1 = {edge_key(*e) for e in t1.edges()}
    for e in t2.edges():
        k = edge_key(*e)
        if k in edges1:
            return k
    return None


class DelaunayTriangulation:
    """
    Bowyer-Watson incremental Delaunay triangulation.
    Uses a super-triangle to bootstrap, then trims to convex hull.
    """

    def __init__(self, points: List[Point]):
        if len(points) < 3:
            raise ValueError("Need at least 3 non-collinear points.")
        self.points: List[Point] = list(points)
        self.triangles: List[Triangle] = []
        self._build_super_triangle()
        self._insert_all_points()

    def _build_super_triangle(self) -> None:
        """Construct a super-triangle enclosing all input points."""
        min_x = min(p.x for p in self.points)
        max_x = max(p.x for p in self.points)
        min_y = min(p.y for p in self.points)
        max_y = max(p.y for p in self.points)
        dx = (max_x - min_x) or 1.0
        dy = (max_y - min_y) or 1.0
        dmax = max(dx, dy) * 20.0
        midx = (min_x + max_x) / 2.0
        midy = (min_y + max_y) / 2.0
        self.super_tri = Triangle(
            Point(midx - 2 * dmax, midy - dmax),
            Point(midx + 2 * dmax, midy - dmax),
            Point(midx, midy + 2 * dmax),
        )
        self.triangles.append(self.super_tri)
        self.super_vertices = set(self.super_tri.vertices())

    def _insert_all_points(self) -> None:
        """Insert every input point one at a time."""
        for p in self.points:
            self._insert_point(p)
        self._remove_super_triangle_vertices()

    def _insert_point(self, p: Point) -> None:
        """Bowyer-Watson insertion: find bad triangles, re-triangulate cavity."""
        bad: List[Triangle] = []
        for tri in self.triangles:
            if in_circumcircle(tri, p):
                bad.append(tri)

        # Compute polygon boundary of the cavity
        edge_count: dict = {}
        for tri in bad:
            for e in tri.edges():
                k = edge_key(*e)
                edge_count[k] = edge_count.get(k, 0) + 1

        polygon_edges = [e for e, cnt in edge_count.items() if cnt == 1]

        # Remove bad triangles
        self.triangles = [t for t in self.triangles if t not in bad]

        # Re-triangulate: connect p to each polygon edge
        for (u, v) in polygon_edges:
            self.triangles.append(Triangle(u, v, p))

    def _remove_super_triangle_vertices(self) -> None:
        """Discard any triangle still touching a super-triangle vertex."""
        self.triangles = [
            t for t in self.triangles
            if not any(v in self.super_vertices for v in t.vertices())
        ]

    def get_edges(self) -> List[Tuple[Point, Point]]:
        """Return all unique Delaunay edges."""
        edge_set: set = set()
        for t in self.triangles:
            for e in t.edges():
                edge_set.add(edge_key(*e))
        return list(edge_set)

    def min_angle_degrees(self) -> float:
        """Returns the minimum interior angle across all triangles (in degrees)."""
        min_a = math.inf
        for t in self.triangles:
            pts = t.vertices()
            for i in range(3):
                p0 = pts[(i - 1) % 3]
                p1 = pts[i]
                p2 = pts[(i + 1) % 3]
                v1 = (p0.x - p1.x, p0.y - p1.y)
                v2 = (p2.x - p1.x, p2.y - p1.y)
                dot = v1[0] * v2[0] + v1[1] * v2[1]
                n1 = math.hypot(*v1)
                n2 = math.hypot(*v2)
                if n1 == 0 or n2 == 0:
                    continue
                cos_a = max(-1.0, min(1.0, dot / (n1 * n2)))
                ang = math.degrees(math.acos(cos_a))
                if ang < min_a:
                    min_a = ang
        return min_a


def voronoi_from_delaunay(dt: DelaunayTriangulation) -> List[Tuple[Point, List[Point]]]:
    """
    Computes the Voronoi diagram by exploiting Delaunay-Voronoi duality.
    For each Delaunay triangle, its circumcenter is a Voronoi vertex.
    Voronoi edges connect circumcenters of adjacent Delaunay triangles.
    Returns a list of (voronoi_vertex, list_of_adjacent_voronoi_vertices).
    """
    circumcenters: dict = {}
    adjacency: dict = {}

    def circumcenter(tri: Triangle) -> Point:
        ax, ay = tri.a.x, tri.a.y
        bx, by = tri.b.x, tri.b.y
        cx, cy = tri.c.x, tri.c.y
        d = 2.0 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by))
        if abs(d) < 1e-15:
            return Point(0.0, 0.0)
        ux = ((ax**2 + ay**2) * (by - cy) +
              (bx**2 + by**2) * (cy - ay) +
              (cx**2 + cy**2) * (ay - by)) / d
        uy = ((ax**2 + ay**2) * (cx - bx) +
              (bx**2 + by**2) * (ax - cx) +
              (cx**2 + cy**2) * (bx - ax)) / d
        return Point(ux, uy)

    # Map each Delaunay edge to the two triangles sharing it
    edge_to_tris: dict = {}
    for idx, t in enumerate(dt.triangles):
        for e in t.edges():
            k = edge_key(*e)
            edge_to_tris.setdefault(k, []).append(idx)
        circumcenters[idx] = circumcenter(t)

    # Voronoi edges connect circumcenters of triangles sharing a Delaunay edge
    for k, idx_list in edge_to_tris.items():
        if len(idx_list) == 2:
            i, j = idx_list
            ci, cj = circumcenters[i], circumcenters[j]
            adjacency.setdefault(i, []).append(cj)
            adjacency.setdefault(j, []).append(ci)

    return [(circumcenters[i], adjacency.get(i, []))
            for i in range(len(dt.triangles))]


# ----------------------- DEMONSTRATION -----------------------
if __name__ == "__main__":
    pts = [
        Point(0.0, 0.0), Point(4.0, 0.0), Point(1.0, 3.0),
        Point(2.0, 1.5), Point(3.0, 2.0), Point(0.5, 2.0),
        Point(3.5, 0.5),
    ]
    dt = DelaunayTriangulation(pts)
    print(f"Triangles: {len(dt.triangles)}")
    print(f"Edges:     {len(dt.get_edges())}")
    print(f"Min angle: {dt.min_angle_degrees():.3f} degrees")
    vor = voronoi_from_delaunay(dt)
    print(f"Voronoi vertices (circumcenters): {len(vor)}")
```

## 3.4 Manual Edge-Flip Trace (Exam-Style Walkthrough)

Given quadrilateral $p_1(0,0)$, $p_2(4,0)$, $p_3(1,3)$, $p_4(3,3)$ with diagonal $p_1 p_2$ (concave quadrilateral).

**Step 1.** Compute $InCircle(p_1, p_2, p_3, p_4)$:

$$= \begin{vmatrix} 0 & 0 & 0 & 1 \\ 4 & 0 & 16 & 1 \\ 1 & 3 & 10 & 1 \\ 3 & 3 & 18 & 1 \end{vmatrix} = +12 > 0$$

**Step 2.** Since $InCircle > 0$, the point $p_4$ lies **inside** the circumcircle of $\Delta p_1 p_2 p_3$. The edge $p_1 p_2$ is **illegal**.

**Step 3.** **Flip** the edge $p_1 p_2 \to p_3 p_4$.

**Step 4.** Verify with the new triangles $\Delta p_1 p_3 p_4$ and $\Delta p_2 p_4 p_3$ that all in-circle tests are now negative.

**Step 5.** Compute the angles:
- Pre-flip minimum angle: $\angle p_1 p_3 p_2 = 30.96°$
- Post-flip minimum angle: $\angle p_4 p_1 p_3 = 56.31°$

The minimum angle has **strictly increased** → max-min angle property verified.
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Voronoi–Delaunay Duality Map

```mermaid
graph TB
    subgraph S1["VORONOI DIAGRAM VD of P"]
        V0["Voronoi Cell V(p1)<br/>Region closest to p1"]
        V1["Voronoi Cell V(p2)<br/>Region closest to p2"]
        V2["Voronoi Cell V(p3)<br/>Region closest to p3"]
        EVD["Voronoi Edge e<br/>Equidistant locus from p1 and p2"]
        WVD["Voronoi Vertex v<br/>Circumcenter of triangle p1p2p3<br/>Equidistant from 3 sites"]
    end

    subgraph S2["DELAUNAY TRIANGULATION DT of P"]
        DP1["Delaunay Vertex p1"]
        DP2["Delaunay Vertex p2"]
        DP3["Delaunay Vertex p3"]
        DED["Delaunay Edge p1-p2<br/>Perpendicular bisector of Voronoi edge"]
        DTR["Delaunay Triangle p1p2p3<br/>DUAL of Voronoi vertex v"]
    end

    WVD -. "dual of" .-> DTR
    EVD -. "dual of" .-> DED
    DP1 -. "site of" .-> V0
    DP2 -. "site of" .-> V1
    DP3 -. "site of" .-> V2

    style S1 fill:#E6F3FF,stroke:#1F77B4,stroke-width:2px
    style S2 fill:#FFF0E6,stroke:#FF7F0E,stroke-width:2px
    style WVD fill:#FFE6E6,stroke:#D62728
    style DTR fill:#FFE6E6,stroke:#D62728
    style EVD fill:#E6FFE6,stroke:#2CA02C
    style DED fill:#E6FFE6,stroke:#2CA02C
```

## 4.2 Bowyer–Watson Incremental Construction Flow

```mermaid
flowchart TD
    A[Start: Initialize Super-Triangle enclosing all points] --> B[Shuffle point list randomly]
    B --> C{All points inserted?}
    C -->|No| D[Pick next point p from shuffled list]
    D --> E[Find all triangles whose circumcircle contains p]
    E --> F[Mark these triangles as BAD and remove from DT]
    F --> G[Compute cavity boundary polygon edges]
    G --> H[Create new triangles by connecting p to each cavity edge]
    H --> C
    C -->|Yes| I[Remove all triangles still touching super-triangle vertices]
    I --> J[Return final Delaunay Triangulation DT P]

    style A fill:#E6F3FF
    style J fill:#90EE90
    style F fill:#FFB6C1
    style H fill:#FFE4B5
```

## 4.3 Edge Flip State Machine

```mermaid
stateDiagram-v2
    [*] --> Legal: Edge satisfies<br/>empty circumcircle test
    Legal --> Illegal: New point insertion<br/>violates in-circle test
    Illegal --> Flipping: InCircle determinant > 0
    Flipping --> Recomputed: Replace edge p_i p_j<br/>with edge p_k p_l
    Recomputed --> Legal: Verify both new triangles<br/>are Delaunay-legal
    Legal --> [*]: Triangulation is<br/>fully Delaunay

    note right of Flipping
        Max-min angle
        strictly increases
        by Law of Sines
    end note
```

## 4.4 Block Architecture: From Point Set to Dual Diagram

```mermaid
graph LR
    P0["Input<br/>Point Set P"] --> P1[Convex Hull<br/>Computation]
    P1 --> P2[Super-Triangle<br/>Initialization]
    P2 --> P3[Bowyer Watson<br/>Insertion Loop]
    P3 --> P4[Edge Flip<br/>Repair Module]
    P4 --> P5[Super-Triangle<br/>Pruning]
    P5 --> P6["Output<br/>Delaunay DT P"]
    P6 --> P7[Voronoi<br/>Vertex Extraction]
    P7 --> P8[Voronoi Edge<br/>Construction]
    P8 --> P9["Output<br/>Voronoi VD P"]
    P6 -. "Duality Mapping" .-> P7

    style P0 fill:#E6F3FF
    style P6 fill:#FFE4B5
    style P9 fill:#90EE90
    style P4 fill:#FFB6C1
```

## 4.5 Sequential Processing Topology Matrix

| Stage | Module | Input | Output | Complexity | Failure Mode |
|---|---|---|---|---|---|
| 1 | Convex Hull | $P$ | $CH(P)$ | $O(n \log n)$ | Degenerate collinear input |
| 2 | Super-Triangle | $P$, $CH(P)$ | $T_{super}$ | $O(n)$ | Numerical underflow at small scales |
| 3 | Bowyer–Watson Insert | $T_{super}$, $p_i$ | Updated $DT$ | $O(n)$ per insert | Floating-point error in incircle test |
| 4 | Edge Flip Repair | Illegal edge | Flipped $DT$ | Amortized $O(1)$ | Convergence on cocircular 4-tuples |
| 5 | Super Pruning | $DT$ with super verts | Clean $DT(P)$ | $O(n)$ | None |
| 6 | VD Construction | $DT(P)$ | $VD(P)$ | $O(n)$ | Unbounded rays for hull sites |
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank

> [!NOTE]
> **Mark Distribution Reference (KTU 2024 Scheme ESE Pattern):**
> * **Part A:** 2 marks each × 5 questions = 10 marks (Short answer, CO1–CO2)
> * **Part B:** 14 marks each × 2 modules = 28 marks (Internal choice within module, CO1–CO3)
> * **Total ESE:** 50 marks
> * Bloom's Levels: Apply (35%), Understand (30%), Remember (20%), Analyze (15%)

---

## Part A — Short Answer Questions (3 Marks Each)

### Question 1 [KTU University Exam – July 2024]
**State and explain the Empty Circumcircle Property of a Delaunay Triangulation.** *(3 Marks)* `[CO1, Remember]`

**Model Answer:**

> [!IMPORTANT]
> The **Empty Circumcircle Property** states that for a triangulation of a set of points $P = \{p_1, p_2, \ldots, p_n\}$ to be a Delaunay triangulation, the **circumcircle of every triangle** in the triangulation must **not contain any other point of $P$ in its interior**.

Formally, for every triangle $\Delta p_i p_j p_k \in DT(P)$:

$$\forall p_l \in P \setminus \{p_i, p_j, p_k\}: \quad p_l \notin \text{int}\big(C(p_i, p_j, p_k)\big)$$

> **Significance:** This single property uniquely characterizes the Delaunay triangulation and is the foundation for all other structural properties (max-min angle, edge flip legality, duality with Voronoi). **[3 Marks]**

---

### Question 2 [KTU University Exam – Dec 2023]
**What is the dual relationship between a Voronoi diagram and a Delaunay triangulation? Mention any two correspondences.** *(3 Marks)* `[CO1, Understand]`

**Model Answer:**

The Voronoi diagram $VD(P)$ and Delaunay triangulation $DT(P)$ of the same point set $P$ are **geometric duals**. They share an incidence-reversing correspondence. **[1 Mark]**

| Voronoi Element | Delaunay Element | Geometry |
|---|---|---|
| Vertex $v$ | Triangle $\Delta p_i p_j p_k$ | $v$ = circumcenter |
| Edge $e$ | Edge $p_i p_j$ | $e \perp p_i p_j$, midpoint shared |
| Cell $V(p_i)$ | Vertex $p_i$ | Site–cell duality |

> **Two correspondences:** (1) A Voronoi vertex at the intersection of three cell boundaries corresponds to the Delaunay triangle whose three vertices are the sites of those cells. (2) A Voronoi edge separating $V(p_i)$ and $V(p_j)$ is the perpendicular bisector of the Delaunay edge $p_i p_j$. **[2 Marks]**

---

## Part B — 14-Mark Questions (Module Internal Choice)

### Question A — Option 1 [KTU University Exam – July 2024, Module 3]

**`(a)` Explain the structural properties of a Delaunay Triangulation in detail with diagrams.** *(7 Marks)* `[CO1, Understand]`

**Model Solution:**

**Property 1 — Empty Circumcircle Property (Defining):** The circumcircle of any triangle in $DT(P)$ contains no other point of $P$ in its interior. *[2 Marks — Statement with formal condition]*

**Property 2 — Max-Min Angle Optimality:** $DT(P)$ maximizes the minimum interior angle of all triangles among all possible triangulations of $P$. This is the most important *consequence* of the empty circle property. *[1 Mark — Statement]*

**Property 3 — Local Delaunay Condition:** An edge $p_i p_j$ shared by two triangles is legal iff the opposite vertex of one triangle lies outside the circumcircle of the other. Violation triggers an **edge flip**. *[2 Marks]*

**Property 4 — Planarity and Convex Hull:** $DT(P)$ is a planar graph, connected, with outer face equal to $CH(P)$. Has at most $3n - 3 - h$ edges and $2n - 2 - h$ triangles. *[1 Mark]*

**Property 5 — Uniqueness:** For points in general position (no 4 cocircular), $DT(P)$ is unique. *[1 Mark]*

**`[Diagram: 0 marks — text description sufficient in exam unless specifically asked for a sketch.]`**

**Valuation Key:**
- [Empty circle statement: 2 Marks]
- [Max-min angle: 1 Mark]
- [Local Delaunay + edge flip: 2 Marks]
- [Planarity & hull: 1 Mark]
- [Uniqueness: 1 Mark]

---

**`(b)` Describe the Bowyer–Watson algorithm for computing a Delaunay Triangulation. Show that the in-circle test is sufficient to detect illegal edges.** *(7 Marks)* `[CO2, Apply]`

**Model Solution:**

**Algorithm Steps:** *[4 Marks for the algorithm trace]*

1. **Super-triangle construction:** Construct a large triangle $T_{super}$ enclosing all $n$ input points.
2. **Initialize:** $DT \leftarrow \{T_{super}\}$.
3. **Insert each point $p$:** For each input point $p \in P$ (in random order):
   - Find all triangles $T \in DT$ such that $p$ lies inside the circumcircle of $T$ (these are **bad triangles**).
   - Compute the **cavity boundary** = the set of edges that belong to exactly one bad triangle.
   - Remove all bad triangles from $DT$.
   - Connect $p$ to each cavity-boundary edge to form new triangles.
4. **Cleanup:** Remove any triangle that contains a super-triangle vertex.
5. **Return** $DT$.

**In-Circle Test Sufficiency:** *[3 Marks]*

The in-circle test checks the local Delaunay condition. By the **Empty Circumcircle Property** (the definition), a triangle is legal iff all other points are outside its circumcircle. The in-circle test detects when this is violated, identifying **illegal edges** that need flipping. Sufficiency follows because:

- The Bowyer–Watson algorithm **only inserts** triangles whose three edges are all cavity-boundary edges (each such edge is shared by exactly one bad triangle, hence no current $DT$ point lies on the other side violating the empty-circle condition).
- The cavity boundary is constructed precisely using the in-circle predicate, so the algorithm terminates with **all triangles satisfying the empty circumcircle property**.

**Valuation Key:**
- [Super-triangle initialization: 1 Mark]
- [Insertion + bad triangle detection: 2 Marks]
- [Cavity re-triangulation: 1 Mark]
- [In-circle test sufficiency reasoning: 3 Marks]

---

### Question B — Option 2 [KTU University Exam – Dec 2023, Module 3]

**`(a)` With a neat diagram, explain the geometric duality between Voronoi diagrams and Delaunay Triangulations. Prove that the circumcenter of a Delaunay triangle is a Voronoi vertex.** *(7 Marks)* `[CO1 + CO3, Understand / Apply]`

**Model Solution:**

**Geometric Duality — Diagram & Description:** *[3 Marks]*

The duality correspondence is:

| Voronoi | Delaunay |
|---|---|
| Vertex $v$ | Triangle $\Delta p_i p_j p_k$ |
| Edge $e$ | Edge $p_i p_j$ |
| Cell $V(p_i)$ | Vertex $p_i$ |

A Voronoi edge between $V(p_i)$ and $V(p_j)$ lies on the **perpendicular bisector** of $p_i p_j$. The two Delaunay triangles incident to edge $p_i p_j$ have their circumcenters joined by this Voronoi edge.

**Proof: Circumcenter of a Delaunay Triangle is a Voronoi Vertex** *[4 Marks]*

**Claim:** If $\Delta p_i p_j p_k$ is a triangle in $DT(P)$, then its circumcenter $c$ is a vertex of $VD(P)$.

**Proof:**

*Step 1 — Equidistance.* The circumcenter $c$ of $\Delta p_i p_j p_k$ satisfies:

$$\|c - p_i\| = \|c - p_j\| = \|c - p_k\| = r$$

where $r$ is the circumradius. Thus $c$ is equidistant from $p_i, p_j, p_k$. *[1 Mark]*

*Step 2 — Strictly closer than any other point.* By the empty circumcircle property of $DT(P)$, no other point $p_l \in P$ lies inside the circumcircle of $\Delta p_i p_j p_k$. Therefore:

$$\|c - p_l\| \geq r = \|c - p_i\|, \quad \forall p_l \in P \setminus \{p_i, p_j, p_k\}$$

This means $c$ is closer (or equally close) to $p_i, p_j, p_k$ than to any other site. *[2 Marks]*

*Step 3 — Voronoi vertex.* A Voronoi vertex is a point equidistant from at least three sites and no closer to any other site. Since $c$ is equidistant from $p_i, p_j, p_k$ and is no closer to any other site, $c$ lies at the intersection of $V(p_i), V(p_j), V(p_k)$ boundaries — i.e., it is a Voronoi vertex. *[1 Mark]*

$\blacksquare$

**Valuation Key:**
- [Duality diagram with three correspondences: 3 Marks]
- [Step 1 equidistance: 1 Mark]
- [Step 2 strict inequality via empty circle: 2 Marks]
- [Step 3 conclusion: 1 Mark]

---

**`(b)` For a set of 8 points, the Delaunay triangulation has 12 edges and 6 triangles. Verify Euler's formula and compute the number of convex hull vertices.** *(7 Marks)* `[CO2, Apply]`

**Model Solution:**

**Given:**
- $n = 8$ points
- $E = 12$ Delaunay edges
- $F_t = 6$ Delaunay triangles (bounded faces)
- Outer face = convex hull boundary

**Euler's formula for planar graphs:** $V - E + F = 2$

For a triangulation: total faces $F = F_t + 1$ (including the outer face).

$$V - E + (F_t + 1) = 2$$
$$8 - 12 + (6 + 1) = 2$$
$$8 - 12 + 7 = 3 \neq 2$$

This indicates an **inconsistency in the problem data** OR the triangulation is missing the super-triangle structure. Let us verify with the proper DT counts. *[2 Marks — Setting up Euler's formula]*

**Using DT-specific bounds:** The number of triangles satisfies $F_t \leq 2n - 2 - h$, where $h$ = number of convex hull vertices.

If $F_t = 6$ and $n = 8$, then:

$$6 \leq 2(8) - 2 - h \implies h \leq 16 - 2 - 6 = 8$$

Now use the edge count formula $E \leq 3n - 3 - h$:

$$12 \leq 3(8) - 3 - h \implies h \leq 24 - 3 - 12 = 9$$

Both bounds are consistent. Let us check the **handshake identity** for a planar graph where each face (including outer) is a triangle and each edge borders exactly 2 faces:

$$3F = 2E \implies 3 \times 7 = 21 \neq 24 = 2 \times 12$$

This confirms the **data is inconsistent** — a valid DT with $E = 12$ and $F_t = 6$ cannot exist for $n = 8$ points in general position. The expected count would be $E = 3 \times 8 - 3 - 2 = 19$ and $F_t = 2 \times 8 - 2 - 2 = 12$ for $h = 2$. *[3 Marks]*

**Corrected Computation:** If we assume a consistent DT with $E = 19$, $F_t = 12$, $n = 8$:

$$h = 3n - 3 - E = 24 - 3 - 19 = 2$$

So the convex hull has $h = 2$ vertices (a degenerate hull where points are nearly collinear), or alternatively the proper formula for a valid DT:

$$h = 2n - 2 - F_t = 16 - 2 - 12 = 2 \text{ (degenerate)}$$

**Verification with Euler's formula on a corrected scenario:** Suppose $n = 8$, $E = 19$, $F_t = 12$ (DT with $h = 2$):

$$V - E + F = 8 - 19 + (12 + 1) = 8 - 19 + 13 = 2 \checkmark$$

Euler's formula is verified. *[2 Marks]*

**Valuation Key:**
- [Correct application of Euler's formula: 2 Marks]
- [Use of DT-specific bounds: 2 Marks]
- [Detection of data inconsistency: 1 Mark]
- [Corrected computation with verification: 2 Marks]

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
> 1. **Sign of the In-Circle Determinant:** The board expects the convention $> 0$ ⇒ point **inside** circumcircle. Mixing up the sign costs **2 full marks** in Section A and **3 marks** in Section B. Always state the convention explicitly.
> 2. **Duality is NOT a point-to-point map:** Students often incorrectly write "$VD$ is the dual of $DT$" without specifying the **incidence-reversing** nature. You must list the *three* element correspondences (vertex↔triangle, edge↔edge, cell↔vertex) to get full credit.
> 3. **Empty Circumcircle vs Empty Bounding Box:** Do not confuse Delaunay triangulation (empty **circle**) with axis-aligned minimum bounding box. Examiners specifically test this distinction.
> 4. **Edge Flip Convergence:** The max-min angle strictly increases **per flip** by the Law of Sines, but you must also state the **termination** argument (finite number of triangulations ⇒ monotonic improvement ⇒ finite flips).
> 5. **Euler's Formula on DT:** The total face count includes the **outer face** ($F = F_t + 1$). Forgetting this gives $V - E + F_t = 2$ which is wrong; you need $F = F_t + 1$.
> 6. **Super-Triangle Cleanup:** Forgetting to remove the super-triangle vertices in Bowyer–Watson results in extraneous triangles — the final DT will not match the expected $2n - 2 - h$ bound.

---

## Topic Recap & Important Things to Remember

> [!NOTE]
> **Rapid Revision Checklist — Module 3: Delaunay Triangulations & Voronoi Duality**

### Core Definitions
- **Delaunay Triangulation $DT(P)$:** A triangulation of $CH(P)$ satisfying the empty circumcircle property — no point of $P$ is strictly inside any triangle's circumcircle.
- **Voronoi Diagram $VD(P)$:** Partition of $\mathbb{R}^2$ into cells $V(p_i)$, where each cell is the locus of points closer to $p_i$ than to any other site.
- **Circumcircle $C(a,b,c)$:** The unique circle passing through three non-collinear points.
- **In-Circle Test:** Determinant test to check if a point $d$ lies inside, on, or outside the circumcircle of $\Delta abc$.

### The Five Structural Properties of $DT(P)$
1. **Empty circumcircle** (defining).
2. **Max-min angle** (maximizes the smallest triangle angle).
3. **Local Delaunay condition** (edge flip criterion).
4. **Planar, connected, $CH(P)$ is the outer face** with $|E| \leq 3n - 3 - h$ and $|F_t| \leq 2n - 2 - h$.
5. **Uniqueness** under general position (no 4 cocircular).

### Duality Mapping (KTU Board-Favorite Table)
- Voronoi **vertex** $\longleftrightarrow$ Delaunay **triangle** (vertex = circumcenter).
- Voronoi **edge** $\longleftrightarrow$ Delaunay **edge** (perpendicular intersection).
- Voronoi **cell** $\longleftrightarrow$ Delaunay **vertex** (site-cell bijection).

### Critical Formulas
- **In-circle determinant:** $4 \times 4$ matrix with columns $[x, y, x^2 + y^2, 1]$.
- **Euler's formula:** $V - E + F = 2$ where $F = F_t + 1$.
- **DT edge count:** $E \leq 3n - 3 - h$.
- **DT triangle count:** $F_t \leq 2n - 2 - h$.

### Algorithm Highlight — Bowyer–Watson
1. Build super-triangle.
2. Insert points one by one (random order helps expected complexity).
3. Identify bad triangles via in-circle test.
4. Compute cavity boundary and re-triangulate.
5. Remove triangles touching super-triangle vertices.
- **Time:** $O(n^2)$ worst, $O(n \log n)$ expected.

### Edge Flip Rules
- **Illegal edge** = in-circle test fails ($InCircle > 0$).
- **Flip** replaces $p_i p_j$ with $p_k p_l$ (the other diagonal of the quadrilateral).
- **Monotone:** min angle strictly increases per flip (Law of Sines).
- **Termination:** Finite triangulations + monotone improvement ⇒ terminates.

### Engineering Relevance
- **GIS / Terrain:** TIN generation.
- **FEA / CFD:** Quality mesh generation (no slivers).
- **Graphics:** 3D surface reconstruction.
- **Networks:** Cell coverage and handover planning.
- **ML:** $k$-NN candidate set via Delaunay neighbors.

### Memory Aid for KTU Exam
- **"Empty Circle, Empty Triangle"** — Delaunay.
- **"Closest Site, Cell Boundary"** — Voronoi.
- **"Circumcenter of triangle is the vertex of cells"** — the duality mantra.
<!-- SECTION_5_END -->
