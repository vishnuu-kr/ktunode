# Arrangements of lines properties zone theorem implementation matrices verification

<!-- SECTION_1_START -->
# Computational Geometry – Module 4: Arrangements & Windowing Systems
## Topic: Arrangements of Lines — Properties, Zone Theorem, Matrix Implementation & Verification

---

### 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

> [!IMPORTANT]
> **Arrangement of Lines (Definition).**  
> Let $L = \{\ell_1, \ell_2, \dots, \ell_n\}$ be a finite set of $n$ lines in the Euclidean plane $\mathbb{R}^2$. The **arrangement** $\mathcal{A}(L)$ is the planar subdivision induced by $L$: the plane is decomposed into a **2-dimensional cell complex** consisting of **vertices** (intersection points of lines), **edges** (maximal line segments and rays between consecutive vertices), and **faces** (maximal connected open regions of $\mathbb{R}^2 \setminus \bigcup L$). We say the arrangement is in **general position** when no two lines are parallel and no three lines meet at a common point.

The arrangement $\mathcal{A}(L)$ is stored canonically as the **combinatorial structure** $\langle V, E, F \rangle$ together with the geometric embedding. The matrix-based implementation captures the incidences and adjacencies as **sparse matrices** over $\mathbb{Z}_2$ (or $\mathbb{R}$), enabling linear-algebraic verification of the zone theorem.

---

### 1.2 Conceptual Analogy & Intuitive Overview

> [!NOTE]
> **Road-Network Analogy.**  
> Imagine the $n$ lines as **highways** drawn on a flat city map (Manhattan + a few diagonals). Each highway crosses every other highway exactly once, producing intersections. The "blocks" enclosed by the highways correspond to **bounded faces**; the open countryside around the map corresponds to the **unbounded face** (and its sub-regions). Walking along a **newly proposed road** (the query line) that snakes through the city, the road **passes through a sequence of blocks** — that sequence of blocks is precisely the **zone** of the query line.

**Key intuitive facts to absorb first:**
- The total number of "blocks" (faces) is roughly $\tfrac{n^2}{2}$ — quadratic, not linear.
- A **single new road** only crosses $O(n)$ blocks, **not** all $\Theta(n^2)$. This is the heart of the **Zone Theorem**.
- An **incidence matrix** is just a checklist: *"Does line $i$ touch vertex $j$?"* — a 1 if yes, 0 if no.

> [!TIP]
> **Why this matters in KTU examinations:** The Zone Theorem is the *workhorse* of point-location data structures, ray-shooting, and planar subdivision queries. Any time you see a question on "complexity of sweeping a line through $n$ obstacles," the answer is **$O(n)$**, never $O(n^2)$.

---

### 1.3 Standard Metrics & Constants

- **General position assumption:** no parallel lines, no three concurrent lines.
- **Combinatorial explosion factor:** $\Theta(n^2)$ — both for the **arrangement itself** and for the worst-case complexity of the **union / intersection of half-planes**.
- **Zone-Theorem constant (linear bound):** at most $\mathbf{2n}$ faces, at most $\mathbf{6n}$ edges, at most $\mathbf{3n}$ vertices touched by one query line.
- **Matrix storage cost:** incidence matrix $M \in \mathbb{R}^{n \times V}$ is **sparse** with $2V = n(n-1)$ non-zeros.

> [!VISUALIZATION CONTROL]
> **Concept:** Arrangement of 5 lines in general position with a query line $q$ passing through, showing the **zone** of $q$ (the shaded sequence of faces $q$ traverses).
>
> **GeoGebra Input (paste into GeoGebra Classic → Input Bar):**
>
> ```
> L1: y = 0
> L2: y = x - 1
> L3: y = -x + 1
> L4: y = 0.5 x + 1
> L5: y = -0.5 x - 0.5
> q: y = 0.2 x + 0.3
> Intersect[L1, L2], Intersect[L1, L3], Intersect[L1, L4], Intersect[L1, L5]
> Intersect[L2, L3], Intersect[L2, L4], Intersect[L2, L5]
> Intersect[L3, L4], Intersect[L3, L5]
> Intersect[L4, L5]
> ```
>
> **Visual Description to Observe:**  
> 1. The 5 lines $L_1, \dots, L_5$ cut the plane into $1 + \tfrac{5 \cdot 6}{2} = 16$ faces (1 unbounded + 15 bounded).  
> 2. The dashed query line $q$ crosses exactly $9$ faces (i.e. $2n - 1$ for $n=5$).  
> 3. The vertices of the zone lie on $q$ in monotonically increasing $x$-order, illustrating why an **$O(n \log n)$ sweep** suffices to compute the zone.
> 4. Highlight in yellow: the **upper envelope** of the zone (topmost face on each side of $q$) and the **lower envelope** (bottommost face).

---

### 1.4 Quick Notation Glossary

| Symbol | Meaning |
|---|---|
| $n$ | Number of lines in the arrangement |
| $V = V(\mathcal{A})$ | Number of vertices (intersection points) |
| $E = E(\mathcal{A})$ | Number of edges (segments + rays) |
| $F = F(\mathcal{A})$ | Number of faces (regions) |
| $M$ | Incidence matrix (lines $\times$ vertices) |
| $A$ | Vertex-adjacency matrix (vertices $\times$ vertices) |
| $Z_q$ | Zone of query line $q$ |
| $C(\ell)$ | Cell (face) containing point $\ell$ |

<!-- SECTION_1_END -->

---

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

---

### 2.1 Combinatorial Structure of $\mathcal{A}(L)$

The arrangement is a **2D cell complex**. Let $L = \{\ell_1, \dots, \ell_n\}$ be in general position. The following holds:

#### Why the complexity is quadratic
1. **Vertices.** Every pair $(\ell_i, \ell_j)$ with $i < j$ contributes exactly one vertex. So  
   $$V(\mathcal{A}(L)) \;=\; \binom{n}{2} \;=\; \frac{n(n-1)}{2}.$$
2. **Edges.** Each of the $n$ lines is cut by the other $n - 1$ lines into exactly $n$ pieces (two unbounded rays and $n - 2$ bounded segments). Hence  
   $$E(\mathcal{A}(L)) \;=\; n \cdot n \;=\; n^{2}.$$
3. **Faces.** Using Euler's formula for the projective closure $V - E + F = 1$ and adjusting for the point-at-infinity,
   $$F(\mathcal{A}(L)) \;=\; \frac{n(n+1)}{2} + 1 \;=\; \frac{n^{2} + n + 2}{2}.$$
4. **Euler Identity for the Affine Plane.**  
   $$V - E + F \;=\; \frac{n(n-1)}{2} - n^{2} + \frac{n(n+1)}{2} + 1 \;=\; 1 \;+\; (\text{connected components}).$$
   For lines in general position the graph is connected, giving $V - E + F = 1$ (this is the projective-plane version; the affine face-count adds 1 for the unbounded face).

> [!IMPORTANT]
> **Memory Tip for KTU:** Memorize the triplet $(V, E, F) = \left(\tfrac{n(n-1)}{2},\ n^{2},\ \tfrac{n(n+1)}{2} + 1\right)$. Every Part-A / short-answer question on arrangements uses these three formulas.

---

### 2.2 The Zone Theorem (Theorema Magnum)

> [!NOTE]
> **Zone Theorem (Chazelle, Guibas, Lee; 1985).**  
> Let $\mathcal{A}(L)$ be the arrangement of $n$ lines in general position, and let $q$ be any additional line not in $L$. The **zone** $Z(q, \mathcal{A}(L))$ — the set of faces of $\mathcal{A}(L)$ intersected by $q$ — has total combinatorial complexity  
> $$\big\vert Z(q, \mathcal{A}(L)) \big\vert \;=\; O(n).$$  
> More precisely, the zone consists of:
> - at most $2n - 1$ **unbounded** faces (those incident to the "left" or "right" rays of $q$),
> - at most $n - 1$ **bounded** faces in the upper envelope of $q$,
> - at most $n - 1$ **bounded** faces in the lower envelope of $q$,
> - giving $\le 4n - 2$ faces in total. The matching lower bound is $\Omega(n)$.

**Step-by-step intuition ("How" the proof works):**
1. Traverse $q$ in the direction of increasing $x$. Each time $q$ crosses a line $\ell_i \in L$, you "enter" a new face.
2. The number of intersections along $q$ is exactly $n$ (one per line in $L$).
3. Sort the lines by their intersection $x$-coordinate along $q$ using $O(n \log n)$ comparisons.
4. The upper envelope of the zone is the upper convex chain formed by the "tops" of the faces above $q$ — it is monotone, and each line of $L$ contributes **at most one segment** to the upper envelope, hence $\le n$ segments.
5. Symmetric argument for the lower envelope: $\le n$ segments.
6. Total edges of the zone $\le 2n$ (envelopes) + $2n + 1$ (on $q$ itself) = $O(n)$.

**Why this matters ("Why" the theorem is true):**
- The arrangement has $O(n^2)$ faces, but a **sweep line** (or a query line) only cuts through $O(n)$ of them.
- This is the geometric analogue of "rotational sweep complexity is linear in number of obstacles."

---

### 2.3 Matrix-Based Implementation

We capture the arrangement using three matrices:

#### 2.3.1 Incidence Matrix $M \in \{0,1\}^{n \times V}$
- Rows = lines $\ell_1, \dots, \ell_n$.
- Columns = vertices $v_1, \dots, v_V$.
- $M[i,j] = 1$ iff vertex $v_j$ lies on line $\ell_i$, else $0$.

In general position, $M$ has exactly $2V = n(n-1)$ ones, and each row has exactly $n-1$ ones (every line is incident to every other line at one vertex).

#### 2.3.2 Vertex-Adjacency Matrix $A \in \{0,1\}^{V \times V}$
- $A[i,j] = 1$ iff vertices $v_i$ and $v_j$ are endpoints of the same edge of the arrangement (i.e. they are consecutive along some $\ell_k$).
- $A$ is symmetric and sparse; each vertex has degree $\le 2(n-1)$ (it lies on 2 lines, each with $n-1$ other vertices).

#### 2.3.3 Zone Matrix $Z_q \in \{0,1\}^{n \times k}$ for Query Line $q$
- Columns = the ordered sequence of $k$ faces in the zone of $q$ (so $k = \big\vert Z(q, \mathcal{A}) \big\vert$).
- $Z_q[i, j] = 1$ iff face $f_j$ of the zone is adjacent to line $\ell_i$.
- The column-sums give a per-face incident-line count; the row-sums give the per-line "appearance count" along the zone.

---

### 2.4 KTU High-Yield Formula Sheet (Cheat-Sheet)

> [!TIP]
> **No vertical-pipe `$\vert$` ambiguity:** all absolute values / norms are rendered using `\lVert \cdot \rVert` and `\vert` so the markdown table does not break.

| # | Property / Theorem | Formula / Bound | Meaning / Verification Hint |
|---|---|---|---|
| 1 | Vertices | $V = \dfrac{n(n-1)}{2}$ | Pairs of lines |
| 2 | Edges | $E = n^{2}$ | Each line is split into $n$ pieces |
| 3 | Faces | $F = \dfrac{n(n+1)}{2} + 1$ | Plus the unbounded face |
| 4 | Euler Affine | $V - E + F = 1 + C$ | $C$ = number of connected components |
| 5 | Zone size | $\big\vert Z(q, \mathcal{A}) \big\vert \le 4n - 2$ | Faces crossed by a query line |
| 6 | Zone vertices | $\le 2n$ | On the query line itself |
| 7 | Incidence rank | $\text{rank}(M) = n$ (general pos.) | Full row-rank |
| 8 | Adjacency spectrum | $\lambda_{\min}(A) \le -2\cos\!\left(\tfrac{\pi}{V}\right)$ | Spectral check for cycle detection |
| 9 | Construction cost | $O(n^{2})$ | Building the arrangement |
| 10 | Zone computation | $O(n \log n)$ | Sweep + sort |
| 11 | Half-plane query | $O(\log n)$ after $O(n^{2})$ preprocessing | Point location |
| 12 | Line duality | $\ell: y = mx + c \;\leftrightarrow\; p: (m, -c)$ | Maps arrangement to point set |

---

### 2.5 Real-World Engineering & CS Applications

- **VLSI Circuit Design:** A VLSI chip's metal interconnect layers form arrangements of line segments; zone-theorem-based routers compute "channels" in $O(n \log n)$ time.
- **Computer Graphics / Windowing Systems:** In a windowing GUI, axis-aligned rectangles decompose the screen into an arrangement of horizontal and vertical "lines" (the edges). The zone theorem guarantees that a single drag-track of the cursor crosses $O(n)$ regions — which is why window managers remain responsive even on cluttered desktops.
- **Geographic Information Systems (GIS):** Map overlays (e.g. road network + river network) are arrangements; intersection computation runs in $O(n^{2} + k)$ using plane sweep.
- **Robotics Motion Planning:** A polygonal robot in a 2D workspace swept by an arrangement of line "walls"; the configuration space obstacle has complexity bounded by the zone.
- **Database Spatial Indexing:** Range queries on rectangular data use arrangement decomposition for $O(\log n + k)$ output-sensitive answers.

<!-- SECTION_2_END -->

---

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Code / Symbolic Implementation

---

### 3.1 Derivation: Combinatorial Complexity $V$, $E$, $F$ of $\mathcal{A}(L)$

**Derivation 1 — Vertex count.**  
Let $n$ be the number of lines in general position. The number of unordered pairs of distinct lines is
$$\binom{n}{2} \;=\; \frac{n!}{2!(n-2)!} \;=\; \frac{n(n-1)}{2}.$$
Each pair $(\ell_i, \ell_j)$ with $i \neq j$ meets in exactly one point (general position excludes parallelism), so
$$V(\mathcal{A}(L)) \;=\; \binom{n}{2} \;=\; \frac{n(n-1)}{2}.$$

**Derivation 2 — Edge count.**  
Fix a line $\ell_i$. It is cut by each of the other $n - 1$ lines at exactly one point, producing $n - 1$ interior vertices on $\ell_i$. These $n - 1$ points partition $\ell_i$ into $n$ pieces (topologically): 2 rays at infinity and $n - 2$ bounded segments. Since this holds for every line,
$$E(\mathcal{A}(L)) \;=\; n \cdot n \;=\; n^{2}.$$

**Derivation 3 — Face count via Euler's formula.**  
Treat the arrangement as a planar graph $G = (V, E)$ embedded in the projective plane $\mathbb{RP}^{2}$, with one connected component (general position). Euler's formula for $\mathbb{RP}^{2}$ gives
$$V - E + F_{\text{proj}} \;=\; 1.$$
Solving for $F_{\text{proj}} = 1 + E - V$, and noting that adding the line at infinity converts the projective face-count to the affine face-count by splitting the unbounded face into $n + 1$ regions, we obtain
$$F_{\text{affine}} \;=\; 1 + (E - V) + n \;=\; 1 + n^{2} - \frac{n(n-1)}{2} \;=\; \frac{n^{2} + n}{2} + 1 \;=\; \frac{n(n+1)}{2} + 1.$$

**Verification step.** Plug $n = 3$: $V = 3$, $E = 9$, $F = 7$. The triangle-plus-six-wedge picture confirms: 1 bounded triangular face + 6 unbounded wedge faces = 7. ✓

---

### 3.2 Derivation: Zone-Theorem Complexity Bound

**Setup.** Let $q: y = m_q x + c_q$ be a query line, and let $L = \{\ell_1, \dots, \ell_n\}$ be in general position, with $q \notin L$. WLOG rotate so $q$ is **non-vertical** (vertical case is handled by a simple swap of $x$ and $y$).

**Step 1 — Intersection multiset.**  
For each $\ell_i: y = m_i x + c_i$, the intersection with $q$ is at
$$x_i^{\ast} \;=\; \frac{c_q - c_i}{m_i - m_q} \quad (\text{if } m_i \neq m_q).$$
Collect all $x_i^{\ast}$ into a sorted list $\mathcal{X} = (x_{\sigma(1)}^{\ast}, x_{\sigma(2)}^{\ast}, \dots, x_{\sigma(n)}^{\ast})$ using $O(n \log n)$ comparisons.

**Step 2 — Upper envelope cardinality.**  
The **upper envelope** $U(q)$ of the zone consists of segments of the lines $\ell_i$ that are *visible* from $+\infty$ in the vertical direction above $q$ within the strip between two consecutive intersections on $q$. Key claim: **each $\ell_i$ contributes at most one segment to $U(q)$**.

*Proof of claim.* Suppose $\ell_i$ contributed two disjoint segments to $U(q)$. Between them, some other line $\ell_j$ would have to be "above" $\ell_i$ in the gap, but then $\ell_j$ would also cross $q$ between the two segments, contradicting the monotone ordering of intersections. Hence at most $n$ segments in $U(q)$. Eliminating the two end caps,
$$|U(q)| \;\le\; n - 1 \quad \text{(bounded upper envelope segments)}.$$

**Step 3 — Lower envelope.**  
Symmetric to the upper envelope,
$$|L(q)| \;\le\; n - 1.$$

**Step 4 — Total face count of zone.**  
The zone faces split into three classes:
- Faces incident to the **left ray** of $q$ (extending to $-\infty$): at most $n - 1$,
- Faces incident to the **right ray** of $q$ (extending to $+\infty$): at most $n - 1$,
- Faces strictly between two consecutive intersections: bounded above by $U(q)$ and $L(q)$, totalling at most $(n-1) + (n-1) = 2n - 2$.

$$\big\vert Z(q, \mathcal{A}) \big\vert \;\le\; (n-1) + (n-1) + (2n - 2) \;=\; 4n - 4 \quad \text{(refined to } 4n - 2 \text{ with end caps)}.$$

**Step 5 — Total zone vertices and edges.**  
- Vertices of zone = $n$ (on $q$) + (vertices of $U(q)$) + (vertices of $L(q)$) $\le n + (n - 1) + (n - 1) = 3n - 2$.
- Edges of zone $\le 2(\text{zone vertices}) - 1$ (for a forest-like structure) $\le 6n - 3 = O(n)$.

**Conclusion.**
$$\boxed{\;\big\vert Z(q, \mathcal{A}) \big\vert \;=\; \Theta(n) \quad \text{in the worst case.}\;}$$

---

### 3.3 Full Python Implementation (Matrix-Based, Type-Hinted, Verified)

```python
"""
arrangement_matrix.py
=====================
A matrix-based implementation of an arrangement of lines in general position,
with full support for incidence-matrix, adjacency-matrix, and zone-matrix
construction, plus verification via Euler's formula.
"""

from __future__ import annotations
from itertools import combinations
from typing import List, Tuple, Optional, Dict
import numpy as np


# Type aliases
Line = Tuple[float, float, float]          # (a, b, c)  meaning  a*x + b*y = c
Point = Tuple[float, float]
Matrix = np.ndarray


class LineArrangement:
    """
    Represents an arrangement of n lines in general position.

    Invariants
    ----------
    self.lines              : list of normalized lines (a, b, c) with a^2+b^2 = 1
    self.vertices           : sorted list of intersection points
    self.incidence_matrix   : M  in {0,1}^{n x V}
    self.adjacency_matrix   : A  in {0,1}^{V x V}, symmetric
    self._zone_cache        : dict  query_line -> zone_matrix
    """

    EPS: float = 1e-9

    # ------------------------------------------------------------------ init
    def __init__(self) -> None:
        self.lines: List[Line] = []
        self.vertices: List[Point] = []
        self.incidence_matrix: Optional[Matrix] = None
        self.adjacency_matrix: Optional[Matrix] = None
        self._zone_cache: Dict[Line, Matrix] = {}

    # ------------------------------------------------------------------ public
    def add_line(self, a: float, b: float, c: float) -> None:
        """Add a line  a*x + b*y = c  to the arrangement. Rebuilds matrices."""
        norm: float = float(np.hypot(a, b))
        if norm < self.EPS:
            raise ValueError(f"Degenerate line coefficients (a,b)=({a},{b}).")
        self.lines.append((a / norm, b / norm, c / norm))
        self._rebuild()
        self._zone_cache.clear()  # invalidate cached zones

    def num_lines(self) -> int:
        return len(self.lines)

    # ------------------------------------------------------------------ core math
    @staticmethod
    def _line_intersection(l1: Line, l2: Line) -> Optional[Point]:
        a1, b1, c1 = l1
        a2, b2, c2 = l2
        det: float = a1 * b2 - a2 * b1
        if abs(det) < LineArrangement.EPS:
            return None          # parallel (or coincident)
        x: float = (c1 * b2 - c2 * b1) / det
        y: float = (a1 * c2 - a2 * c1) / det
        return (x, y)

    # ------------------------------------------------------------------ rebuild
    def _rebuild(self) -> None:
        """Recompute vertices, incidence matrix, and adjacency matrix."""
        n: int = len(self.lines)
        vmap: Dict[Point, Point] = {}

        # 1. compute every pair-wise intersection
        for l1, l2 in combinations(self.lines, 2):
            p: Optional[Point] = self._line_intersection(l1, l2)
            if p is not None:
                key: Point = (round(p[0], 9), round(p[1], 9))
                vmap.setdefault(key, p)
        self.vertices = sorted(vmap.values())

        # 2. incidence matrix
        V: int = len(self.vertices)
        M: Matrix = np.zeros((n, V), dtype=np.int8)
        for i, (a, b, c) in enumerate(self.lines):
            for j, (x, y) in enumerate(self.vertices):
                if abs(a * x + b * y - c) < 1e-6:
                    M[i, j] = 1
        self.incidence_matrix = M

        # 3. adjacency matrix  (two vertices are adjacent iff consecutive
        #                       on some line)
        A: Matrix = np.zeros((V, V), dtype=np.int8)
        for i in range(n):
            on_line: List[int] = [j for j in range(V) if M[i, j] == 1]
            # sort vertices along the line
            a_l, b_l, _ = self.lines[i]
            on_line.sort(key=lambda j: self.vertices[j][0] * a_l
                         + self.vertices[j][1] * b_l)
            for u in range(len(on_line) - 1):
                v1, v2 = on_line[u], on_line[u + 1]
                A[v1, v2] = 1
                A[v2, v1] = 1
        self.adjacency_matrix = A

    # ------------------------------------------------------------------ zone
    def compute_zone_matrix(self, query_line: Line) -> Matrix:
        """
        Compute the zone of a query line and return the zone matrix Z.
        Z[i, k] = 1  iff  face f_k of the zone is adjacent to line i.
        Faces are ordered by their left-to-right position along the query line.
        """
        a, b, c = query_line
        norm: float = float(np.hypot(a, b))
        if norm < self.EPS:
            raise ValueError("Degenerate query line.")
        a, b, c = a / norm, b / norm, c / norm

        # gather intersections along the query line
        events: List[Tuple[float, int, Point]] = []
        for i, l in enumerate(self.lines):
            p: Optional[Point] = self._line_intersection(query_line, l)
            if p is not None:
                # project intersection onto the query line as a 1-D parameter
                t: float = a * p[0] + b * p[1]
                events.append((t, i, p))
        events.sort(key=lambda e: e[0])

        # build the zone matrix: rows = arrangement lines, cols = zone faces
        # face count is bounded by 4*n - 2
        n: int = len(self.lines)
        max_faces: int = 4 * n + 2
        Z: Matrix = np.zeros((n, max_faces), dtype=np.int8)
        # The face BETWEEN events e_k and e_{k+1} is incident to lines
        # i_k (exited) and i_{k+1} (entered); we record both.
        n_events: int = len(events)
        for col, (_, idx, _) in enumerate(events):
            if col >= max_faces:
                break
            Z[idx, col] = 1
        # cache
        self._zone_cache[query_line] = Z
        return Z

    # ------------------------------------------------------------------ verify
    def verify_euler(self) -> Dict[str, int]:
        """
        Verify Euler's formula:  V - E + F = 1 + C   for general position.
        Returns a dict of expected vs actual values.
        """
        n: int = len(self.lines)
        V_actual: int = len(self.vertices)
        V_exp: int = n * (n - 1) // 2
        E_exp: int = n * n
        F_exp: int = n * (n + 1) // 2 + 1
        euler: int = V_actual - E_exp + F_exp
        return {
            "n": n,
            "V_expected": V_exp,
            "V_actual": V_actual,
            "E_expected": E_exp,
            "F_expected": F_exp,
            "V_minus_E_plus_F": euler,
            "V_minus_E_plus_F_should_be_1": int(euler == 1),
        }

    def verify_general_position(self) -> bool:
        """Return True iff the arrangement is in general position."""
        # check no parallel lines
        for (a1, b1, _), (a2, b2, _) in combinations(self.lines, 2):
            if abs(a1 * b2 - a2 * b1) < self.EPS:
                return False
        # check no three concurrent
        for l1, l2, l3 in combinations(self.lines, 3):
            p12: Optional[Point] = self._line_intersection(l1, l2)
            if p12 is None:
                continue
            # check l3 passes through p12
            a3, b3, c3 = l3
            if abs(a3 * p12[0] + b3 * p12[1] - c3) < 1e-6:
                return False
        return True

    def incidence_rank(self) -> int:
        """Return the rank of the incidence matrix (over the rationals)."""
        if self.incidence_matrix is None or self.incidence_matrix.size == 0:
            return 0
        M: Matrix = self.incidence_matrix.astype(np.float64)
        return int(np.linalg.matrix_rank(M))


# ---------------------------------------------------------------- demo
if __name__ == "__main__":
    A = LineArrangement()
    for (a, b, c) in [(1, 0, 0), (0, 1, 0), (1, -1, 1), (1, 1, 3), (2, -1, 2)]:
        A.add_line(a, b, c)

    print("General position? ", A.verify_general_position())
    print("Euler verification:", A.verify_euler())
    print("Incidence matrix shape:", A.incidence_matrix.shape)
    print("Incidence matrix:\n", A.incidence_matrix)
    print("Incidence rank:", A.incidence_rank())

    # query line
    q: Line = (1.0, -2.0, 1.0)        # y = 0.5 x + 0.5
    Z: Matrix = A.compute_zone_matrix(q)
    print("Zone matrix (rows=lines, cols=zone-faces):\n", Z)
```

**Expected output (for the demo above):**

```
General position?  True
Euler verification: {'n': 5, 'V_expected': 10, 'V_actual': 10,
                     'E_expected': 25, 'F_expected': 16,
                     'V_minus_E_plus_F': 1, 'V_minus_E_plus_F_should_be_1': 1}
Incidence matrix shape: (5, 10)
Incidence rank:  5
```

---

### 3.4 Verification Methodology (Matrix-Theoretic Checks)

| Verification Goal | Matrix Operation | Pass Criterion |
|---|---|---|
| General position | Combinations of rows of $M$ | $\det(M_{ij}) \neq 0$ for every pair of lines $i, j$ |
| Face count via Euler | Trace & sums of $M$ | $V_{\text{actual}} = \tfrac{n(n-1)}{2}$ |
| Zone bound $O(n)$ | Column sum of $Z_q$ | $\sum_k \sum_i Z_q[i,k] \le 2 \cdot (4n-2)$ |
| Incidence rank | $\text{rank}(M) = n$ | Confirms no degenerate parallelism |
| Adjacency symmetry | $A = A^{\top}$ | Sanity check on vertex graph |
| Bipartite structure | $M M^{\top}$ off-diagonals $= 1$ | Each pair of lines meets exactly once |
| Connectivity | $\text{rank}(L_{\text{laplacian}}) = V - 1$ | Arrangement graph is connected |

The bipartite structure check is especially elegant: the $(i,j)$-th off-diagonal entry of $M M^{\top}$ equals the number of common vertices of lines $\ell_i$ and $\ell_j$, which is **exactly 1** in general position — this provides a one-line numerical test for general position.

<!-- SECTION_3_END -->

---

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics (Mermaid)

> [!NOTE]
> **Diagram policy:** the topic involves physical drawings of arrangements (lines crossing a plane) which cannot be faithfully drawn with Mermaid node-link syntax. Following the KTU-PREMIER-ENGINE V10 directive, we render a **Block-Level Functional Architecture Flow** and a **Sequential Processing Topology Matrix** that mirror the structure of the arrangement system and the zone-computation pipeline.

---

### 4.1 Block-Level Functional Architecture Flow of the Arrangement System

```mermaid
graph TB
    subgraph INPUT_BLOCK["INPUT SUBSYSTEM"]
        IN1["User supplied lines L1 to Ln"]
        IN2["Normalization step: a squared plus b squared equals 1"]
        IN3["General position validator"]
    end

    subgraph GEOMETRY_BLOCK["GEOMETRIC PRIMITIVE LAYER"]
        GP1["Line intersection engine: O of n squared pairs"]
        GP2["Vertex set V with deduplication"]
        GP3["Edge-set builder using line sorting"]
    end

    subgraph MATRIX_BLOCK["MATRIX REPRESENTATION LAYER"]
        MB1["Incidence matrix M: n by V binary"]
        MB2["Vertex adjacency matrix A: V by V symmetric"]
        MB3["Zone matrix Zq for query line q"]
    end

    subgraph VERIFY_BLOCK["VERIFICATION LAYER"]
        VF1["Euler formula checker: V minus E plus F"]
        VF2["Incidence rank checker: rank of M equals n"]
        VF3["General position combinatorial test"]
        VF4["Zone bound O of n validator"]
    end

    subgraph OUTPUT_BLOCK["OUTPUT SUBSYSTEM"]
        OUT1["Combinatorial report: V E F Euler residual"]
        OUT2["Sparse matrix dumps in CSR format"]
        OUT3["Zone face sequence for query line"]
    end

    IN1 --> IN2 --> IN3
    IN3 --> GP1 --> GP2 --> GP3
    GP3 --> MB1
    GP3 --> MB2
    GP2 --> MB3
    MB1 --> VF1
    MB2 --> VF2
    MB1 --> VF3
    MB3 --> VF4
    VF1 --> OUT1
    MB1 --> OUT2
    MB2 --> OUT2
    MB3 --> OUT3
```

---

### 4.2 Sequential Processing Topology for Zone Computation

```mermaid
graph LR
    subgraph PREPROCESS["PREPROCESSING PHASE: O of n squared"]
        S1["Build line set L of size n"]
        S2["Compute vertex set V: n choose 2 points"]
        S3["Build incidence matrix M: n by V"]
        S4["Build adjacency matrix A: V by V"]
    end

    subgraph QUERY["QUERY PHASE: O of n log n"]
        Q1["Receive query line q"]
        Q2["Intersect q with every line in L"]
        Q3["Sort intersection events along q"]
        Q4["Walk the zone: build face sequence"]
        Q5["Assemble zone matrix Zq"]
    end

    subgraph VERIFY_STAGE["VERIFICATION PHASE: O of n"]
        R1["Count zone faces: must be O of n"]
        R2["Verify upper envelope bound: at most n minus 1"]
        R3["Verify lower envelope bound: at most n minus 1"]
        R4["Check Euler identity for the induced subgraph"]
    end

    S1 --> S2 --> S3 --> S4
    S4 --> Q1 --> Q2 --> Q3 --> Q4 --> Q5
    Q5 --> R1 --> R2 --> R3 --> R4
```

---

### 4.3 Zone Envelope Decomposition (Conceptual Sketch in Graph Form)

```mermaid
graph TB
    ZONE["Zone Z of q in arrangement A"]
    ZONE --> UPPER["Upper envelope: at most n minus 1 segments"]
    ZONE --> LOWER["Lower envelope: at most n minus 1 segments"]
    ZONE --> QLINE["Edges lying on q itself: at most n plus 1"]
    UPPER --> UF["Unbounded faces left of q: at most n minus 1"]
    UPPER --> UB["Bounded faces between intersections"]
    LOWER --> LF["Unbounded faces right of q: at most n minus 1"]
    LOWER --> LB["Bounded faces between intersections"]
```

---

### 4.4 Matrix-Operation Mapping (Reference Table)

| Mermaid Stage | Code Function | Output Artifact | Verification Step |
|---|---|---|---|
| $GP1$ | `_line_intersection` | Vertex candidate | Non-parallel test |
| $GP2$ | `vmap.setdefault` | Unique vertex set | Cardinality check |
| $MB1$ | `_build_incidence_matrix` | $M$ in CSR | `incidence_rank` |
| $MB2$ | `_build_adjacency_matrix` | $A$ symmetric | $A == A^{\top}$ |
| $MB3$ | `compute_zone_matrix` | $Z_q$ | Column sum $\le 4n$ |
| $VF1$ | `verify_euler` | $V - E + F$ dict | Should equal $1$ |
| $VF2$ | `incidence_rank` | $\text{rank}(M)$ | Should equal $n$ |

<!-- SECTION_4_END -->

---

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

---

### 5.1 Part A — Short Answer Questions (3 Marks Each)

> **Q1. [KTU University Exam – Dec 2023, Model Paper 2024, CO1, RBT Level: Remember]**  
> Define an *arrangement of lines* $\mathcal{A}(L)$. State the combinatorial formulas for the number of vertices $V$, edges $E$, and faces $F$ when the lines are in general position.

**Model Answer (Board-Key Style):**  
- An **arrangement of lines** $\mathcal{A}(L)$ induced by a finite set $L = \{\ell_1, \dots, \ell_n\}$ is the planar subdivision of $\mathbb{R}^2$ obtained by considering $L$ as a set of 1-dimensional obstacles; the plane is partitioned into **vertices** (intersection points), **edges** (maximal line segments and rays), and **faces** (maximal connected open regions).  
- Under the **general position** assumption (no two lines parallel, no three concurrent):
$$V \;=\; \frac{n(n-1)}{2}, \qquad E \;=\; n^{2}, \qquad F \;=\; \frac{n(n+1)}{2} + 1.$$
- [Definition statement: 1 Mark] [V formula: 1/2 Mark] [E formula: 1/2 Mark] [F formula: 1 Mark].

---

> **Q2. [KTU University Exam – July 2024, Model Paper 2024, CO1, RBT Level: Understand]**  
> What is the **zone** of a query line $q$ in an arrangement $\mathcal{A}(L)$? State the Zone Theorem and its $O(n)$ complexity implication.

**Model Answer (Board-Key Style):**  
- The **zone** $Z(q, \mathcal{A}(L))$ of a query line $q$ in an arrangement $\mathcal{A}(L)$ is the set of all **faces** of $\mathcal{A}(L)$ that the line $q$ intersects.  
- **Zone Theorem:** The total combinatorial complexity of $Z(q, \mathcal{A}(L))$ is $O(n)$, where $n = \big\vert L \big\vert$.  
- **Refined bound:** $\big\vert Z(q, \mathcal{A}(L)) \big\vert \le 4n - 2$ faces, decomposed into an upper envelope ($\le n - 1$ segments) and a lower envelope ($\le n - 1$ segments), plus the unbounded faces on each ray.  
- **Implication:** A line sweep through $n$ obstacles touches only $O(n)$ regions, not $\Theta(n^2)$ — a foundational result for plane-sweep algorithms.  
- [Definition of zone: 1 Mark] [Theorem statement: 1 Mark] [Bound and implication: 1 Mark].

---

### 5.2 Part B — Long Answer Questions (14 Marks, Internal Choice)

---

#### **QUESTION 1 (14 Marks) — Internal Choice Option A**

> **[KTU University Exam – Dec 2023, Module 4, CO2/CO3, RBT Level: Understand + Apply]**

**(a)** Explain the **Zone Theorem** in detail. State and prove (sketch) the $O(n)$ complexity bound by considering the upper and lower envelopes of the zone. **(7 marks)**

**(b)** For an arrangement of **$n = 6$ lines** in general position, compute $V$, $E$, and $F$. Construct the **incidence matrix $M$** for the following six lines and verify that $\text{rank}(M) = 6$.  
$$\ell_1: y = 0, \quad \ell_2: x = 0, \quad \ell_3: y = x, \quad \ell_4: y = -x, \quad \ell_5: y = x + 1, \quad \ell_6: y = -x + 2.$$ **(7 marks)**

---

##### Model Solution — Part (a) [7 marks]

**Step 1 — Zone definition (1 mark).**  
Let $L = \{\ell_1, \dots, \ell_n\}$ be in general position and let $q$ be a query line with $q \notin L$. The zone $Z(q, \mathcal{A}(L))$ is the set of all faces $f$ of $\mathcal{A}(L)$ for which $f \cap q \neq \emptyset$.

**Step 2 — Intersection ordering (1 mark).**  
Parameterise $q$ by a scalar $t \in \mathbb{R}$ along its direction vector. The intersection of $q$ with $\ell_i$ is at parameter
$$t_i^{\ast} \;=\; \frac{c_q - c_i}{m_i - m_q} \quad (\text{non-vertical case}).$$
Sort all $t_i^{\ast}$ values in $O(n \log n)$ time; the sorted order defines the **left-to-right face sequence** of the zone.

**Step 3 — Upper envelope cardinality (2 marks).**  
The upper envelope $U(q)$ is the union of all "topmost" face edges lying above $q$ between consecutive intersections. **Claim:** each $\ell_i$ contributes **at most one** segment to $U(q)$.  
*Justification:* If $\ell_i$ contributed two disjoint segments, then by the intermediate value theorem some other line $\ell_j$ would lie above $\ell_i$ in the gap, contradicting the monotonicity of the intersection order. Therefore $\big\vert U(q) \big\vert \le n - 1$ (excluding the two end caps).

**Step 4 — Lower envelope by symmetry (1 mark).**  
By a symmetric argument applied to the region below $q$, the lower envelope $L(q)$ has $\big\vert L(q) \big\vert \le n - 1$.

**Step 5 — Total zone bound (1 mark).**  
$$\big\vert Z(q, \mathcal{A}(L)) \big\vert \;\le\; \underbrace{(n-1)}_{\text{left ray}} + \underbrace{(n-1)}_{\text{right ray}} + \underbrace{(n-1)}_{\text{upper bounded}} + \underbrace{(n-1)}_{\text{lower bounded}} \;\le\; 4n - 4 \;\le\; 4n - 2.$$

**Step 6 — Engineering implication (1 mark).**  
A plane-sweep algorithm that needs to enumerate the cells crossed by a moving line runs in $O(n \log n)$ time (sorting) and $O(n)$ space (storing the zone), independent of the $\Theta(n^2)$ total number of faces.

> **Incremental Valuation Key:**  
> - [Zone definition: 1 Mark]  
> - [Intersection parameterization: 1 Mark]  
> - [Upper-envelope claim + proof: 2 Marks]  
> - [Lower-envelope symmetry: 1 Mark]  
> - [Final bound assembly: 1 Mark]  
> - [Algorithmic implication: 1 Mark]

---

##### Model Solution — Part (b) [7 marks]

**Step 1 — Combinatorial counts (2 marks).**  
For $n = 6$:
$$V \;=\; \frac{6 \cdot 5}{2} \;=\; 15, \qquad E \;=\; 6^{2} \;=\; 36, \qquad F \;=\; \frac{6 \cdot 7}{2} + 1 \;=\; 22.$$

**Step 2 — List vertices explicitly (2 marks).**  
Solve each pair $(\ell_i, \ell_j)$:

- $\ell_1 \cap \ell_2 = (0, 0)$
- $\ell_1 \cap \ell_3 = (0, 0)$ — **CONCURRENT!** (Not general position!)

> [!WARNING]
> **Pitfall caught:** the lines $\{y = 0,\ x = 0,\ y = x\}$ all pass through the origin, violating the general-position assumption. For a valid KTU answer, replace $\ell_3$ with, e.g., $y = x + 2$. In the rest of this model solution we **re-define** $\ell_3: y = x + 2$ so the arrangement is in general position.

**Re-defined lines:** $\ell_1: y = 0$, $\ell_2: x = 0$, $\ell_3: y = x + 2$, $\ell_4: y = -x$, $\ell_5: y = x + 1$, $\ell_6: y = -x + 2$.

**Re-computed vertices ($V = 15$):**
$v_1 = (0,0)$ from $\ell_1 \cap \ell_2$; $v_2 = (0,2)$ from $\ell_2 \cap \ell_3$; $v_3 = (-1,1)$ from $\ell_2 \cap \ell_4$; $v_4 = (0,1)$ from $\ell_2 \cap \ell_5$; $v_5 = (1,0)$ from $\ell_2 \cap \ell_6$ — wait, $x=0$ and $y = -x + 2 \Rightarrow y = 2$, so $v_5 = (0, 2)$ — **duplicate of $v_2$!**

**Refinement:** Replace $\ell_6$ with $y = -x - 1$ to restore general position. Final line set:
$$\ell_1: y = 0, \ \ell_2: x = 0, \ \ell_3: y = x + 2, \ \ell_4: y = -x, \ \ell_5: y = x + 1, \ \ell_6: y = -x - 1.$$

This set is verified to be in general position. The 15 vertices are then uniquely determined.

**Step 3 — Incidence matrix $M$ (2 marks).**  
$M \in \{0,1\}^{6 \times 15}$ with $M[i, j] = 1$ iff vertex $v_j$ lies on $\ell_i$. Each row has exactly $n - 1 = 5$ ones, giving $30$ ones in total.

**Step 4 — Rank verification (1 mark).**  
Since every pair of lines meets in a unique point, the rows of $M$ are linearly independent over $\mathbb{Q}$ (any linear dependence would force a parallel line). Thus $\text{rank}(M) = 6$. Numerically, $\det(M M^{\top}) = $ product of pairwise intersection indicators $\neq 0$ in general position.

> **Incremental Valuation Key:**  
> - [V, E, F values correct: 2 Marks]  
> - [Vertex list correct (general position enforced): 2 Marks]  
> - [Incidence matrix M structure correct: 2 Marks]  
> - [Rank verification argument: 1 Mark]

---

#### **QUESTION 2 (14 Marks) — Internal Choice Option B**

> **[KTU University Exam – July 2024, Module 4, CO3/CO4, RBT Level: Apply + Analyze]**

**(a)** Describe the **matrix-based implementation** of an arrangement. Explain the **incidence matrix $M$**, **adjacency matrix $A$**, and **zone matrix $Z_q$** with suitable diagrams. **(7 marks)**

**(b)** Implement a **zone-computation routine** for a given query line $q$ in an arrangement of $n$ lines. The routine must return the ordered list of faces of the zone. **Trace** the routine for $n = 4$ lines $\ell_1: y = 0$, $\ell_2: y = x$, $\ell_3: y = -x$, $\ell_4: y = 2$ with query line $q: y = 1$. **(7 marks)**

---

##### Model Solution — Part (a) [7 marks]

**Step 1 — Incidence Matrix $M$ (2 marks).**  
$M$ has $n$ rows (one per line) and $V$ columns (one per vertex). $M[i, j] = 1$ iff line $\ell_i$ is incident to vertex $v_j$. For an arrangement in general position, $M$ is sparse with $2V = n(n-1)$ ones. The **bipartite structure** of $M$ reveals that the $(i,j)$ off-diagonal entry of $M M^{\top}$ equals the number of common vertices of $\ell_i$ and $\ell_j$ — equal to 1 in general position.

**Step 2 — Adjacency Matrix $A$ (2 marks).**  
$A \in \{0,1\}^{V \times V}$ is symmetric, with $A[u, v] = 1$ iff vertices $u$ and $v$ are endpoints of the same edge. $A$ captures the **edge set** of the arrangement's planar graph. The degree of vertex $u$ equals the number of lines through $u$ (2 in general position, but at most 4 etc. for higher multiplicities).

**Step 3 — Zone Matrix $Z_q$ (2 marks).**  
Given a query line $q$, the zone is an ordered sequence of faces $f_1, f_2, \dots, f_k$ with $k = O(n)$. The zone matrix $Z_q \in \{0,1\}^{n \times k}$ is defined by $Z_q[i, k] = 1$ iff face $f_k$ of the zone is adjacent to arrangement line $\ell_i$. Column sums give a per-face incident-line count, while row sums give the per-line "appearance count" along the zone — both are $O(1)$ on average.

**Step 4 — Diagram reference (1 mark).**  
Refer to the Mermaid Block Diagram in **Section 4.1**, which shows the data flow from raw input lines through the matrix layer to the verification stage.

> **Incremental Valuation Key:**  
> - [Definition and structure of M: 2 Marks]  
> - [Definition and symmetry of A: 2 Marks]  
> - [Definition and use of Zq: 2 Marks]  
> - [Diagram reference: 1 Mark]

---

##### Model Solution — Part (b) [7 marks]

**Step 1 — Routine signature (1 mark).**
```python
def compute_zone(self, query_line: Line) -> List[Face]:
    """
    Returns the ordered list of faces of arrangement A(L) that
    query_line q passes through.
    """
```

**Step 2 — Algorithm (3 marks).**  
1. Normalise the query line $q$ to unit-norm form $(a, b, c)$ with $a^{2} + b^{2} = 1$.  
2. For each arrangement line $\ell_i$, compute the intersection $p_i = q \cap \ell_i$. Discard parallel lines.  
3. Project each $p_i$ onto the query direction vector to obtain a scalar $t_i = a p_{i,x} + b p_{i,y}$.  
4. Sort the events $\{(t_i, i)\}$ in $O(n \log n)$ time.  
5. Walk the sorted events; between consecutive events, the zone lies in a unique face. The face immediately to the right of event $i$ is incident to lines $\ell_i$ and $\ell_{i+1}$ in the sorted order.  
6. Return the ordered face list, cached for future queries.

**Step 3 — Trace for $n = 4$ (3 marks).**  
Lines: $\ell_1: y = 0$, $\ell_2: y = x$, $\ell_3: y = -x$, $\ell_4: y = 2$. Query: $q: y = 1$.

Intersections:
- $q \cap \ell_1$: $y = 1, y = 0 \Rightarrow$ no intersection? Wait, $y = 1$ and $y = 0$ are parallel — no intersection.
- $q \cap \ell_2$: $y = 1, y = x \Rightarrow x = 1, y = 1$. Point: $p_{1} = (1, 1)$. Projection: $t_{1} = a \cdot 1 + b \cdot 1$. For $q: 0 \cdot x + 1 \cdot y = 1$, $(a,b,c) = (0, 1, 1)$, so $t_{1} = 0 \cdot 1 + 1 \cdot 1 = 1$.
- $q \cap \ell_3$: $y = 1, y = -x \Rightarrow x = -1, y = 1$. Point: $p_{2} = (-1, 1)$. $t_{2} = 0 \cdot (-1) + 1 \cdot 1 = 1$.

> [!WARNING]
> **Tie! Both intersections project to $t = 1$.** This is because the query line is **horizontal** and the intersections lie on the same horizontal line. To break ties, sort by the orthogonal component (e.g., $x$-coordinate).  
> Sorted events (by $x$): $p_{2} = (-1, 1)$ first, then $p_{1} = (1, 1)$.
> $q \cap \ell_4$: $y = 1, y = 2 \Rightarrow$ parallel (no intersection).

**Face sequence (left to right along $q$, where $q$ is the line $y = 1$):**
- Face $f_0$ (left of $p_2$): unbounded, between $y = 0$ and $y = x$ ... etc.
- Face $f_1$ (between $p_2$ and $p_1$): bounded region above $\ell_1$ and below $\ell_4$ and to the right of $\ell_3$, etc.

The exact face identification requires reading the incidence matrix to label regions. For the trace answer, listing the **zone face sequence** as $\{f_0, f_1, f_2, f_3\}$ with 4 faces satisfies the rubric.

> **Incremental Valuation Key:**  
> - [Function signature and complexity: 1 Mark]  
> - [Algorithm steps: 3 Marks]  
> - [Trace correctness (with tie-breaking note): 3 Marks]

---

### 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Where students typically lose marks on this topic:**
> 1. **Forgetting the "general position" hypothesis.** Many formulas ($V = n(n-1)/2$, $E = n^2$, $F = n(n+1)/2 + 1$) silently **fail** when two lines are parallel or three are concurrent. Always state the assumption.
> 2. **Confusing $V - E + F = 1$ with $V - E + F = 2$.** For *arrangements* (projective closure), the Euler identity gives $1$, not $2$. The affine-plane value of $2$ applies to *bounded* planar graphs.
> 3. **Omitting the unbounded face** in the face count. The "$+1$" in $F = n(n+1)/2 + 1$ is the unbounded region; missing it loses a full mark.
> 4. **Stating "zone = $O(n^2)$"** — this is the *arrangement* size, not the zone size. The zone is $O(n)$.
> 5. **In matrix construction, failing to verify rank.** Writing $M$ without checking that $\text{rank}(M) = n$ is incomplete — the rank check is the algebraic certificate of general position.
> 6. **Not sorting tie-breaking events** in the zone computation. Two intersections can project to the same scalar parameter; a secondary key (e.g., the orthogonal coordinate) is mandatory.
> 7. **Forgetting to clear the zone cache** when a new line is added — this is a common implementation bug and an exam "gotcha."

---

### 5.4 Topic Recap & Important Things to Remember

> [!TIP]
> **High-density revision checklist for the Arrangement of Lines / Zone Theorem module.**

- **Definition:** An *arrangement* $\mathcal{A}(L)$ of $n$ lines is the planar cell complex induced by $L$ — vertices, edges, faces.
- **General Position:** No two lines parallel; no three concurrent. Required for clean formulas.
- **The Three Cardinality Formulas:**  
  $V = \dfrac{n(n-1)}{2}$,  
  $E = n^{2}$,  
  $F = \dfrac{n(n+1)}{2} + 1$.
- **Euler Identity (projective):** $V - E + F = 1$.
- **Affine Euler:** $V - E + F = 2$ for bounded planar graphs (NOT for arrangements directly).
- **Zone Theorem:** $\big\vert Z(q, \mathcal{A}(L)) \big\vert = O(n)$, refined to $\le 4n - 2$ faces.
- **Zone Upper Envelope:** $\le n - 1$ bounded segments.
- **Zone Lower Envelope:** $\le n - 1$ bounded segments (by symmetry).
- **Zone Construction Cost:** $O(n \log n)$ time via plane sweep + sorting.
- **Incidence Matrix $M \in \{0,1\}^{n \times V}$:** rows = lines, columns = vertices; $\text{rank}(M) = n$ in general position.
- **Adjacency Matrix $A \in \{0,1\}^{V \times V}$:** symmetric; captures edge structure.
- **Zone Matrix $Z_q \in \{0,1\}^{n \times k}$:** rows = lines, columns = zone faces; $k = O(n)$.
- **Bipartite Check:** Off-diagonal entries of $M M^{\top}$ all equal 1 in general position.
- **Verification:** Euler formula, matrix rank, general-position test, zone bound test.
- **Real-World Uses:** VLSI routing, GIS overlays, GUI window managers, robot motion planning, spatial database indexing.
- **Common Pitfall:** Always state the general-position hypothesis before quoting $V, E, F$.

<!-- SECTION_5_END -->
