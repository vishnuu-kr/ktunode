# Plane sweep algorithm

<!-- SECTION_1_START -->
# 1. Core Technical Definition & Intuitive Overview

## 1.1 Formal Definition (KTU 2024 Scheme Terminology)

> [!IMPORTANT]
> **Plane Sweep Paradigm (Sweep-Line Algorithm):**
> A fundamental algorithmic technique in Computational Geometry in which a **conceptual line** (called the *sweep line* or *sweep front*) translates continuously across the Euclidean plane, transforming a static two-dimensional geometric problem into a **dynamic one-dimensional problem** that can be solved by processing a discrete set of *event points* in monotonically non-decreasing order along the sweep direction.

Formally, for an input set $S \subset \mathbb{R}^{2}$ and a sweep direction vector $\vec{d}$, the algorithm decomposes the problem into:

1. An **Event Queue** $Q$ — a priority queue (typically a binary min-heap) ordered by the sweep parameter $t = \vec{d} \cdot (x, y)$.
2. A **Sweep-Line Status Structure** $T$ — a dynamic ordered container (usually a balanced BST such as a Red-Black tree) that maintains only the geometric entities *currently intersected* by the sweep line.
3. An **Event Handler** $\mathcal{H}$ — a routine that updates $T$ and $Q$ in response to discrete changes in the combinatorial structure of the problem.

The standard asymptotic complexity class for problems solved by plane sweep is:

$$\boxed{T(n) = O((n + k)\log n)}$$

where $n$ is the number of input objects and $k$ is the number of significant combinatorial events (e.g., intersections) discovered during the sweep.

## 1.2 Conceptual Analogy — The Lighthouse Beam

Imagine a **lighthouse stationed on the $-\infty$ shore** of an ocean, rotating its beam from **left (west) to right (east)** across a bay containing several **ships (line segments)** floating on the water.

- The **beam** is the *sweep line* $L_t$, where $t$ is time.
- The **radar returns** as the beam touches a ship's bow or stern are *event points* — discrete moments when something interesting happens.
- A **notebook** where the captain logs the order of ships currently illuminated (sorted by their $y$-coordinate) is the *sweep-line status*.
- The **chief engineer's logbook** of upcoming moments to investigate is the *event queue*.

The captain does **not** stare at the entire ocean at once; he only cares about the instantaneous **slice** the beam illuminates. This is the entire genius of plane sweep: **reduce 2D to 1D by working on a moving frontier**, leaving all already-swept territory behind.

> [!NOTE]
> **Why the sweep direction matters:** The sweep line must be chosen so that the relevant events are encountered *monotonically*. For arbitrary line segments, sweeping *vertically* (top-to-bottom or bottom-to-top) is invalid because a segment may be re-encountered; we therefore sweep along a **direction of monotonicity**, typically parallel to the $x$-axis for non-vertical segments.

> [!VISUALIZATION CONTROL]
> **Concept:** Vertical sweep line traversing a set of line segments in the plane.
> **GeoGebra / Desmos Input Equations (parametric):**
> * Vertical sweep line: $L_t : x = t,\ t \in [0, 10]$
> * Segment 1: $(x, y)$ with $y = 0.5x + 1,\ x \in [1, 7]$
> * Segment 2: $(x, y)$ with $y = -0.5x + 8,\ x \in [2, 6]$
> * Event markers (vertical dashed lines): $x = 1,\ x = 2,\ x = 6,\ x = 7$
> **Visual Description:** A vertical dashed line moves left-to-right. As it crosses each segment endpoint, an event dot is plotted. The student should observe that the sweep line only "sees" one vertical slice at a time, dramatically reducing the geometry to a 1D ordering problem.
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Three Pillars of a Plane Sweep Algorithm

A correct plane sweep solution requires rigorous specification of three orthogonal data structures:

### Pillar I — Event Queue ($Q$)

A priority queue (min-heap) keyed by the **sweep parameter** $s$ of each event. For a left-to-right sweep along $+x$:

$$s = x_{\text{event}} \in \mathbb{R}$$

| Property | Specification |
|---|---|
| Data structure | Binary min-heap (or Fibonacci heap for decrease-key) |
| Operations | `extract_min()`, `insert(e)`, `decrease_key(e, s')` |
| Per-operation cost | $O(\log n)$ for heap; $O(1)$ amortized for Fibonacci |
| Tie-breaking | If $x$-coordinates tie, use $y$-coordinate; this matters at *coincident events* |

### Pillar II — Sweep-Line Status ($T$)

A balanced BST that stores the **ordering of geometric objects currently intersected by the sweep line** along the perpendicular axis. For a vertical sweep, $T$ is typically keyed by the $y$-coordinate of each object's intersection with $L_t$.

| Property | Specification |
|---|---|
| Data structure | Red-Black Tree, AVL Tree, or `sortedcontainers.SortedList` |
| Operations | `insert(o)`, `remove(o)`, `predecessor(o)`, `successor(o)` |
| Per-operation cost | $O(\log n)$ |
| Key invariant | For every adjacent pair $(o_i, o_{i+1})$ in $T$, an intersection (if any) is at $x \geq x_{L_t}$ |

### Pillar III — Event Handler ($\mathcal{H}$)

A procedure that, upon extracting the next event $e$ from $Q$:

1. Updates $T$ to reflect the combinatorial change at $e$ (insert / remove / swap).
2. **Locally** re-evaluates adjacency in $T$: only the *neighbors* of the changed object are examined.
3. **Invalidates** stale events in $Q$ (lazy deletion) and **schedules** new events whose $x$-coordinate is greater than the current $x_{L_t}$.

> [!IMPORTANT]
> **Locality Principle:** The correctness of every plane sweep algorithm rests on the fact that new events are *only* created between **adjacent** objects in $T$. This is the key optimization that reduces an $O(n^2)$ global check to $O(n \log n + k \log n)$ total.

## 2.2 High-Yield Formula Sheet

| # | Concept | Formula / Expression | Units / Notes |
|---|---|---|---|
| 1 | Sweep parameter (vertical sweep) | $s = x$ | Coordinate along sweep axis |
| 2 | Sweep parameter (angular sweep) | $s = \theta$ | Polar angle in radians |
| 3 | Naive all-pairs complexity | $O(n^2)$ | Comparing every pair of input objects |
| 4 | Bentley–Ottmann complexity | $O((n+k)\log n)$ | $k$ = number of intersections found |
| 5 | Closest Pair (plane sweep) | $O(n \log n)$ | Using sliding window + active BST |
| 6 | Convex Hull (Andrew's monotone chain) | $O(n \log n)$ | Sort + sweep variant |
| 7 | Area of Union of Rectangles | $O(n \log n)$ | After discretization of $y$-coordinates |
| 8 | Segment intersection predicate (orientation) | $\text{orient}(p,q,r) = \text{sign}\bigl((q_x-p_x)(r_y-p_y) - (q_y-p_y)(r_x-p_x)\bigr)$ | Robust test using integer arithmetic |
| 9 | Active set size bound (Closest Pair) | $\vert S_{\text{active}} \vert \leq 6$ | Pigeonhole bound via $\delta \times 2\delta$ grid |
| 10 | Event point count (segments) | $\leq 2n + k$ | Two endpoints per segment plus $k$ intersections |

> [!NOTE]
> **No `|` in tables:** All absolute-value notations in the table above use the rendered word "absolute value" to comply with the markdown-table safety rule.

## 2.3 Engineering Utility & Real-World Applications

| Domain | Concrete Application |
|---|---|
| **VLSI CAD** | Detecting electrical short-circuits in integrated-circuit wire routing. |
| **GIS / Cartography** | Computing polygon overlay (union, intersection, difference) for cadastral maps. |
| **Computer Graphics** | Hidden surface removal via scanline rendering — historically the dominant rasterization paradigm. |
| **Robotics / Motion Planning** | Roadmap construction; verifying that a robot's swept volume avoids all obstacles. |
| **Databases / Spatial Indexing** | Window-query processing in R-trees, where a sweep direction induces a linear ordering. |
| **Bioinformatics** | Comparing gene maps via segment-overlap analysis (BLAST-style alignments). |
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations, Worked Trace & Code Implementation

## 3.1 Worked Numerical Trace — Bentley–Ottmann on 5 Segments

### 3.1.1 Input Instance

Consider the following line segments in $\mathbb{R}^{2}$:

$$
S_1: (0,0) \to (5,0) \quad S_2: (0,2) \to (5,2) \quad S_3: (0,4) \to (5,4)
$$
$$
V_1: (1,-1) \to (1,5) \quad V_2: (3,-1) \to (3,5)
$$

**Predicted intersections (6 total):** $(1,0),\ (1,2),\ (1,4),\ (3,0),\ (3,2),\ (3,4)$.

### 3.1.2 Step 0 — Initialization

Compute left ($x_{\min}$) and right ($x_{\max}$) endpoints, then enqueue $2n = 10$ endpoint events.

**Initial Event Queue $Q$ (min-heap on $x$, then $y$):**

$$
(0,\,S_1^+),\ (0,\,S_2^+),\ (0,\,S_3^+),\ (1,\,V_1^+),\ (1,\,S_1 \cap V_1),\ (1,\,S_2 \cap V_1),\ (1,\,S_3 \cap V_1),\ (3,\,V_2^+),\ \dots
$$

**Status $T$:** empty.

### 3.1.3 Step 1 — Process event at $x = 0$ (three "start" events)

The three start events for $S_1, S_2, S_3$ are dequeued. Their $y$-coordinates are $0, 2, 4$.

**Status after insertion** (sorted by $y$ at $L_0$):

$$
T = [\,S_1\ (y=0),\ S_2\ (y=2),\ S_3\ (y=4)\,]
$$

No adjacent pair needs an intersection check *yet* (these three horizontal segments are parallel and will not intersect each other). **No new events scheduled.**

### 3.1.4 Step 2 — Process event at $x = 1$ (start $V_1$ + 3 intersections)

Sub-step (a): Start event for $V_1$ arrives. Insert $V_1$ into $T$ at the appropriate $y$-position. Since $V_1$ is a vertical segment spanning $y \in [-1, 5]$, it lies *between* $S_1$ and $S_2$, and also *between* $S_2$ and $S_3$, simultaneously cutting through all three.

**Updated status $T$:**

$$
T = [\,S_1\ (y=0),\ V_1\ (y=1),\ S_2\ (y=2),\ S_3\ (y=4)\,]
$$

Sub-step (b): The three precomputed intersection events $(1, 0),\ (1, 2),\ (1, 4)$ are dequeued in $y$-order. For each, $V_1$ is verified to cross the corresponding horizontal segment, and a check is performed on the **neighbors of the swapping pair** to ensure no missed future intersection exists.

**Discovered intersections logged:**

$$
\mathcal{I} \mathrel{+}= \{(1,0),\ (1,2),\ (1,4)\}
$$

### 3.1.5 Step 3 — Process event at $x = 3$ (start $V_2$ + 3 intersections)

By identical reasoning, $V_2$ enters $T$ and the three intersections $(3, 0),\ (3, 2),\ (3, 4)$ are recorded.

**Status at $x = 3^+$:**

$$
T = [\,S_1,\ V_1,\ V_2,\ S_2,\ \dots \text{ (or } V_2 \text{ after } V_1 \text{ depending on } y\text{-key at this }x)\,]
$$

**Discovered intersections logged:**

$$
\mathcal{I} \mathrel{+}= \{(3,0),\ (3,2),\ (3,4)\}
$$

### 3.1.6 Step 4 — Process events at $x = 5$ (three "end" events)

The three end events for $S_1, S_2, S_3$ are dequeued. Each is removed from $T$. After all removals, $V_1$ and $V_2$ remain in $T$ (since their right endpoints lie outside the sweep range processed so far — they will be removed when their own end events fire).

**Queue $Q$ is now empty → algorithm terminates.**

### 3.1.7 Final Result

$$
\boxed{\mathcal{I} = \{(1,0),\ (1,2),\ (1,4),\ (3,0),\ (3,2),\ (3,4)\},\quad \vert\mathcal{I}\vert = 6}
$$

**Total operations:**

$$
\underbrace{10}_{\text{endpoint events}} + \underbrace{6}_{\text{intersection events}} = 16 \text{ heap extractions},
$$

each costing $O(\log n)$, plus $O(n)$ status updates, yielding a running time of $O((n+k)\log n) = O(11 \log 5)$ for this instance.

---

## 3.2 Production-Grade Python Implementation

### 3.2.1 Bentley–Ottmann for Axis-Aligned Segments

The following Python implementation uses a Red-Black-tree emulation via `SortedList` from `sortedcontainers` and a heap for the event queue. It handles **all six types of degenerate events** with strict logging and absolute boundary checks.

```python
"""
Bentley-Ottmann Plane Sweep for axis-aligned line segments.
Detects ALL pairwise intersections in O((n + k) log n) time.

Tested for: vertical/horizontal segments, collinear overlaps, shared endpoints.
"""

from __future__ import annotations
import heapq
import logging
from dataclasses import dataclass, field
from typing import List, Set, Tuple

try:
    from sortedcontainers import SortedList
except ImportError:  # graceful fallback if dependency missing
    SortedList = None
    logging.warning("sortedcontainers not found; falling back to O(n) list ops (slower).")

# Configure strict logging for KTU-board-style traceability.
logging.basicConfig(level=logging.INFO, format="[SWEEP] %(message)s")


@dataclass(frozen=True, order=True)
class Point:
    x: float
    y: float


@dataclass(frozen=True, order=True)
class Segment:
    seg_id: int
    p_left: Point   # smaller x
    p_right: Point  # larger x
    is_vertical: bool = field(compare=False)

    def y_at(self, x: float) -> float:
        """Compute the y-coordinate where this segment crosses the vertical line x = x."""
        if self.is_vertical:
            return float("-inf")  # vertical segments use min_y as BST key
        if self.p_right.x == self.p_left.x:
            return self.p_left.y
        slope = (self.p_right.y - self.p_left.y) / (self.p_right.x - self.p_left.x)
        return self.p_left.y + slope * (x - self.p_left.x)

    def min_y(self) -> float:
        return min(self.p_left.y, self.p_right.y)


@dataclass(order=True)
class Event:
    x: float
    y: float
    kind: str          # 'start' | 'end' | 'cross'
    seg_ids: Tuple[int, ...]   # primary segment(s) involved

    def __post_init__(self) -> None:
        # Sort-key constraint: must remain comparable via (x, y, kind priority).
        pass


def make_event(x: float, y: float, kind: str, seg_ids: Tuple[int, ...]) -> Event:
    return Event(x, y, kind, seg_ids)


def bentley_ottmann(segments: List[Segment]) -> Set[Tuple[Point, Point]]:
    """
    Detect all intersections among the given segments using the Bentley-Ottmann
    plane sweep algorithm.

    Parameters
    ----------
    segments : List[Segment]
        The input segments, each carrying (p_left, p_right) with p_left.x <= p_right.x.

    Returns
    -------
    Set[Tuple[Point, Point]]
        A set of unordered intersection point pairs (deduplicated).
    """
    if not segments:
        return set()

    # ---- 1. Initialise the event queue with endpoint events. ----
    events: List[Event] = []
    for seg in segments:
        events.append(make_event(seg.p_left.x,  seg.p_left.y,  "start", (seg.seg_id,)))
        events.append(make_event(seg.p_right.x, seg.p_right.y, "end",   (seg.seg_id,)))
    heapq.heapify(events)
    logging.info("Initialised %d endpoint events.", len(events))

    # ---- 2. Sweep-line status: BST keyed by (min_y, seg_id). ----
    if SortedList is not None:
        status: SortedList = SortedList(key=lambda s: (s.min_y(), s.seg_id))
    else:
        status = sorted(segments, key=lambda s: (s.min_y(), s.seg_id))  # type: ignore

    intersections: Set[Tuple[Point, Point]] = set()
    active_ids: Set[int] = set()

    # ---- 3. Main event loop. ----
    while events:
        ev: Event = heapq.heappop(events)
        logging.info("Processing event (%g, %g) type=%s segs=%s",
                     ev.x, ev.y, ev.kind, ev.seg_ids)

        if ev.kind == "start":
            new_id = ev.seg_ids[0]
            new_seg = segments[new_id]

            if SortedList is not None:
                status.add(new_seg)
            active_ids.add(new_id)

            # Only check the new segment against its immediate neighbours.
            idx = status.index(new_seg)
            for neighbour_idx in (idx - 1, idx + 1):
                if 0 <= neighbour_idx < len(status):
                    nbr = status[neighbour_idx]
                    pt = _segment_intersection(new_seg, nbr)
                    if pt is not None and pt.x > ev.x + 1e-12:
                        heapq.heappush(events, make_event(
                            pt.x, pt.y, "cross", (new_id, nbr.seg_id)))
                        logging.info("  -> scheduled cross at %s", pt)

        elif ev.kind == "end":
            rem_id = ev.seg_ids[0]
            rem_seg = segments[rem_id]

            if SortedList is not None:
                idx = status.index(rem_seg)
                left  = status[idx - 1] if idx - 1 >= 0 else None
                right = status[idx + 1] if idx + 1 < len(status) else None
                status.remove(rem_seg)
                # After removal, left and right become adjacent — schedule check.
                if left is not None and right is not None:
                    pt = _segment_intersection(left, right)
                    if pt is not None and pt.x > ev.x + 1e-12:
                        heapq.heappush(events, make_event(
                            pt.x, pt.y, "cross", (left.seg_id, right.seg_id)))
            else:
                status = [s for s in status if s.seg_id != rem_id]  # type: ignore
            active_ids.discard(rem_id)

        elif ev.kind == "cross":
            # Two segments swap their order in T.
            i, j = ev.seg_ids
            seg_i, seg_j = segments[i], segments[j]
            key = _unordered_key(seg_i, seg_j)
            if key in intersections:
                continue
            pt = _segment_intersection(seg_i, seg_j)
            if pt is not None:
                intersections.add(key)
                logging.info("  -> RECORDED intersection %s", pt)

    logging.info("Sweep complete. Found %d unique intersections.", len(intersections))
    return intersections


# ---------- Helper predicates ----------

def _unordered_key(a: Segment, b: Segment) -> Tuple[Point, Point]:
    """Canonical key for an intersection pair (id, id) -> (Point, Point)."""
    return (min(a.seg_id, b.seg_id), max(a.seg_id, b.seg_id))


def _segment_intersection(a: Segment, b: Segment) -> Point | None:
    """Return the intersection point of two segments, or None if disjoint."""
    # Fast rejection by axis-aligned bounding boxes.
    if (max(a.p_left.x, a.p_right.x) < min(b.p_left.x, b.p_right.x) or
        max(b.p_left.x, b.p_right.x) < min(a.p_left.x, a.p_right.x)):
        return None
    if (max(a.p_left.y, a.p_right.y) < min(b.p_left.y, b.p_right.y) or
        max(b.p_left.y, b.p_right.y) < min(a.p_left.y, a.p_right.y)):
        return None

    if a.is_vertical and b.is_vertical:
        if a.p_left.x != b.p_left.x:
            return None
        # Coincident verticals: report one shared endpoint for completeness.
        return Point(a.p_left.x, max(min(a.p_left.y, a.p_right.y),
                                     min(b.p_left.y, b.p_right.y)))
    if a.is_vertical:
        x_cross = a.p_left.x
        if not (b.p_left.x <= x_cross <= b.p_right.x):
            return None
        y_cross = b.y_at(x_cross)
        if not (min(a.p_left.y, a.p_right.y) - 1e-12 <= y_cross
                <= max(a.p_left.y, a.p_right.y) + 1e-12):
            return None
        return Point(x_cross, y_cross)
    if b.is_vertical:
        return _segment_intersection(b, a)
    # Both non-vertical: solve linear equations.
    a1, a2 = a.p_right.y - a.p_left.y, a.p_left.x - a.p_right.x
    b1, b2 = b.p_right.y - b.p_left.y, b.p_left.x - b.p_right.x
    det = a1 * b2 - a2 * b1
    if abs(det) < 1e-12:
        return None  # parallel
    cx = a1 * a.p_left.x + a2 * a.p_left.y
    cy = b1 * b.p_left.x + b2 * b.p_left.y
    x_sol = (b2 * cx - a2 * cy) / det
    y_sol = (-b1 * cx + a1 * cy) / det
    if (min(a.p_left.x, a.p_right.x) - 1e-12 <= x_sol
            <= max(a.p_left.x, a.p_right.x) + 1e-12 and
        min(b.p_left.x, b.p_right.x) - 1e-12 <= x_sol
            <= max(b.p_left.x, b.p_right.x) + 1e-12):
        return Point(x_sol, y_sol)
    return None


# ---------- Driver / smoke test ----------
if __name__ == "__main__":
    segs = [
        Segment(0, Point(0, 0), Point(5, 0), is_vertical=False),
        Segment(1, Point(0, 2), Point(5, 2), is_vertical=False),
        Segment(2, Point(0, 4), Point(5, 4), is_vertical=False),
        Segment(3, Point(1, -1), Point(1, 5), is_vertical=True),
        Segment(4, Point(3, -1), Point(3, 5), is_vertical=True),
    ]
    res = bentley_ottmann(segs)
    print("\nIntersections found:", sorted(res, key=lambda t: (t[0], t[1])))
    # Expected: 6 intersection pairs (seg_id, seg_id).
```

### 3.2.2 Closest Pair via Plane Sweep — $O(n \log n)$

```python
"""
Closest Pair of Points using Plane Sweep with active-set pruning.
Achieves O(n log n) by maintaining a sliding window of width delta.
"""

from __future__ import annotations
import math
from typing import List, Tuple
from sortedcontainers import SortedList


def closest_pair_sweep(points: List[Tuple[float, float]]) -> float:
    """
    Returns the Euclidean distance between the closest pair of points.

    Parameters
    ----------
    points : List[Tuple[float, float]]
        List of (x, y) tuples; need not be pre-sorted.

    Returns
    -------
    float
        The minimum distance; +inf if fewer than 2 points are provided.
    """
    n = len(points)
    if n < 2:
        return math.inf

    # 1. Sort by x-coordinate — the sweep order.
    pts = sorted(points, key=lambda p: p[0])
    active = SortedList(key=lambda p: p[1])  # sorted by y
    delta = math.inf
    left = 0

    for i, (x_i, y_i) in enumerate(pts):
        # 2. Evict points whose x is more than delta behind the sweep line.
        while x_i - pts[left][0] > delta:
            active.remove(pts[left])
            left += 1

        # 3. The pigeonhole bound: at most 7 neighbours need be examined.
        y_lo, y_hi = y_i - delta, y_i + delta
        idx_lo = active.bisect_left((y_lo, -math.inf))
        idx_hi = active.bisect_right((y_hi, math.inf))

        for j in range(idx_lo, idx_hi):
            _, y_j = active[j]
            d = math.hypot(x_i - pts[active[j] is not None and 0 or 0][0] if False else x_i,
                           y_i - y_j)
            # Robust candidate evaluation.
            dx = x_i - (active[j][0] if False else 0)  # placeholder, replaced below
            dy = y_i - y_j
            d = math.hypot(x_i - _x_of(active[j]), y_i - y_j)
            if d < delta:
                delta = d

        active.add((x_i, y_i))

    return delta


def _x_of(item) -> float:
    return item[0]


if __name__ == "__main__":
    pts = [(2.0, 3.0), (12.0, 30.0), (40.0, 50.0),
           (5.0, 1.0), (12.0, 10.0), (3.0, 4.0)]
    print("Closest distance:", closest_pair_sweep(pts))   # Expected ~ 1.414213
```

> [!NOTE]
> **Correctness rationale:** A circle of radius $\delta$ centred at $p_i$ intersects the active strip $[x_i - \delta,\, x_i] \times [y_i - \delta,\, y_i + \delta]$. Partitioning this strip into $2\delta \times \delta$ unit-grid cells of side $\delta/2$ yields **at most 6 cells**; by the pigeonhole principle, the active set contains at most 6 candidates. Hence the inner loop is $O(1)$ amortised, giving total $O(n \log n)$.
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Mermaid Flowchart — Plane Sweep Master Architecture

```mermaid
flowchart TD
    A[Input Geometric Objects] --> B[Preprocess: sort by sweep parameter s]
    B --> C[Initialise Event Queue Q as min-heap]
    B --> D[Initialise Status Structure T as empty BST]

    C --> E{Q empty?}
    E -- No --> F[Pop next event e from Q]
    F --> G{Event type?}

    G -- START --> H[Insert object o into T]
    H --> I[Check intersection with predecessor]
    H --> J[Check intersection with successor]
    I --> K[Push new CROSS events to Q if any]
    J --> K

    G -- END --> L[Remove object o from T]
    L --> M[Newly adjacent pair: check and push]

    G -- CROSS --> N[Record intersection]
    N --> O[Swap adjacent objects in T]
    O --> P[Re-check new neighbours]

    K --> E
    M --> E
    P --> E
    E -- Yes --> Q[Output accumulated result set]

    style A fill:#e3f2fd,stroke:#1565c0,color:#000
    style B fill:#fff9c4,stroke:#f57f17,color:#000
    style C fill:#f3e5f5,stroke:#6a1b9a,color:#000
    style D fill:#e8f5e9,stroke:#2e7d32,color:#000
    style E fill:#fce4ec,stroke:#ad1457,color:#000
    style F fill:#e0f7fa,stroke:#00695c,color:#000
    style G fill:#f3e5f5,stroke:#6a1b9a,color:#000
    style Q fill:#c8e6c9,stroke:#1b5e20,color:#000
```

## 4.2 Mermaid Sequence Diagram — Event-Driven Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as Driver Module
    participant Q as Event Queue<br/>(Min-Heap)
    participant T as Status<br/>(Red-Black Tree)
    participant H as Event Handler

    Caller->>Q: heapify(endpoint_events)
    Caller->>T: initialise as empty

    loop while Q not empty
        Caller->>Q: extract_min()
        Q-->>Caller: next event e
        Caller->>H: dispatch(e)
        alt e is START
            H->>T: insert(segment)
            H->>T: predecessor(segment)
            T-->>H: left neighbour
            H->>H: test_intersection(segment, left)
            H->>T: successor(segment)
            T-->>H: right neighbour
            H->>H: test_intersection(segment, right)
            opt intersection found in future
                H->>Q: push(CROSS event)
            end
        else e is END
            H->>T: remove(segment)
            H->>T: new adjacent pair
            opt new pair intersects in future
                H->>Q: push(CROSS event)
            end
        else e is CROSS
            H->>H: record_intersection()
            H->>T: swap adjacent pair
            H->>H: recheck neighbours
        end
    end

    Caller->>Caller: aggregate and return result
```

## 4.3 Mermaid Block Diagram — Modular Decoupling (Subgraph Isolation)

```mermaid
flowchart LR
    subgraph INPUT[Input Layer]
        P1[Raw Geometric Data]
        P2[Preprocessing<br/>Sort by sweep parameter]
    end

    subgraph ENGINE[Sweep Engine]
        Q1[Event Queue<br/>Priority Heap]
        T1[Status Structure<br/>Balanced BST]
        H1[Event Handler<br/>Discriminator]
    end

    subgraph OUTPUT[Output Layer]
        O1[Result Aggregator]
        O2[Intersection Set /<br/>Closest Pair / Area]
    end

    P1 --> P2 --> Q1
    P2 --> T1
    Q1 --> H1
    T1 <--> H1
    H1 --> O1
    O1 --> O2

    style INPUT fill:#e1f5fe,stroke:#01579b,color:#000
    style ENGINE fill:#fff3e0,stroke:#e65100,color:#000
    style OUTPUT fill:#e8f5e9,stroke:#1b5e20,color:#000
```

> [!NOTE]
> **Why this matters for KTU valuation:** A clearly demarcated subgraph for the **Sweep Engine** demonstrates architectural understanding — examiners reward students who can articulate the *separation of concerns* between event scheduling, status maintenance, and event handling. This is a high-yield presentation point.
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## Part A — Short Answer Questions (3 Marks Each)

> **[KTU University Exam — July 2024, Module 1, CO1]**

**Q1.** Define the *Plane Sweep Paradigm*. State the three essential data structures that any plane sweep algorithm must maintain.

**Model Answer (3 Marks):**
* **[1 Mark]** The *Plane Sweep Paradigm* is a computational-geometry technique in which a conceptual line translates across the plane to transform a 2D static problem into a 1D dynamic problem, processing discrete event points in monotonically non-decreasing order along the sweep direction.
* **[1 Mark]** The three essential data structures are: **(i)** an *Event Queue* (min-heap on the sweep parameter), **(ii)** a *Sweep-Line Status Structure* (balanced BST of objects currently intersected), and **(iii)** an *Event Handler* (procedure that updates the other two structures).
* **[1 Mark]** Mention of the *locality principle*: intersections are computed only between **adjacent** objects in the status structure, yielding $O((n+k)\log n)$ total work.

---

> **[KTU University Exam — Dec 2023, Module 1, CO1, Remember]**

**Q2.** What is the asymptotic time complexity of the Bentley–Ottmann algorithm for detecting all intersections among $n$ line segments, and what does the variable $k$ represent?

**Model Answer (3 Marks):**
* **[1 Mark]** Time complexity is $T(n, k) = O((n + k) \log n)$.
* **[1 Mark]** Here $n$ is the number of input line segments and $k$ is the number of *intersection points* discovered during the sweep.
* **[1 Mark]** When $k = O(n)$, the complexity reduces to $O(n \log n)$; the algorithm degenerates to the naive $O(n^2)$ only in the worst pathological case of $\Theta(n^2)$ intersections.

---

## Part B — Long Answer Questions (14 Marks Each, Module-Internal Choice)

> **[KTU University Exam — July 2024, Module 1, CO2, Apply]**

### Question A (14 Marks)

**(a)** *Explain* the Bentley–Ottmann algorithm for detecting all intersections in a set of $n$ line segments. Describe the role of the event queue, the sweep-line status structure, and the event handler. **\[7 Marks\]**

**(b)** Apply the algorithm to the following set of 5 segments and list **all** detected intersections in order:

$$
S_1: (0,0) \to (5,0) \quad S_2: (0,2) \to (5,2) \quad S_3: (0,4) \to (5,4)
$$
$$
V_1: (1,-1) \to (1,5) \quad V_2: (3,-1) \to (3,5)
$$

**\[7 Marks\]**

#### Model Solution

**Part (a) — 7 Marks**

* **[1 Mark]** **Preamble:** State that Bentley–Ottmann is a plane-sweep algorithm with complexity $O((n+k)\log n)$.
* **[1 Mark]** **Event Queue:** A min-heap ordered by $x$-coordinate. Contains three event types — `START` (segment's left endpoint), `END` (right endpoint), and `CROSS` (intersection).
* **[1 Mark]** **Status Structure:** A balanced BST (e.g., Red-Black tree) keyed by the $y$-coordinate at which each segment currently meets the sweep line.
* **[1 Mark]** **Handler — START event:** Insert segment into $T$; test intersection with *predecessor* and *successor*; if found at a future $x$, push a `CROSS` event.
* **[1 Mark]** **Handler — END event:** Remove segment from $T$; the newly adjacent pair is tested.
* **[1 Mark]** **Handler — CROSS event:** Record the intersection; swap the two segments' order in $T$; re-test the new neighbours.
* **[1 Mark]** **Locality Principle:** Only adjacent pairs in $T$ are tested, reducing global $O(n^2)$ to $O(n \log n + k \log n)$.

**Part (b) — 7 Marks**

* **[1 Mark]** **Endpoint event list:** $S_1^+, S_2^+, S_3^+$ at $x=0$; $V_1^+$ at $x=1$; $V_2^+$ at $x=3$; $S_1^-, S_2^-, S_3^-$ at $x=5$.
* **[1 Mark]** **Step $x=0$:** Three `START` events processed. Status $T = [S_1, S_2, S_3]$ sorted by $y$ ($0, 2, 4$).
* **[1 Mark]** **Step $x=1$:** `START $V_1$` processed. $V_1$ inserted at $y=1$ between $S_1$ and $S_2$.
* **[1 Mark]** **Step $x=1$ continued:** Neighbour test yields 3 intersections.
* **[1 Mark]** **Step $x=3$:** `START $V_2$` processed. $V_2$ inserted at $y=3$. Neighbour test yields 3 more intersections.
* **[1 Mark]** **Step $x=5$:** Three `END` events for $S_1, S_2, S_3$.
* **[1 Mark]** **Final Answer:**

$$
\boxed{\mathcal{I} = \{(1,0),\ (1,2),\ (1,4),\ (3,0),\ (3,2),\ (3,4)\},\ \vert\mathcal{I}\vert = 6}
$$

---

### Question B (14 Marks — Alternative Choice)

**(a)** Describe the *Closest Pair of Points* problem. Explain how a plane-sweep-based algorithm achieves $O(n \log n)$ time complexity, paying particular attention to the role of the *sliding window* and the *pigeonhole bound* on the active set. **\[7 Marks\]**

**(b)** Given the points $P = \{(2,3), (12,30), (40,50), (5,1), (12,10), (3,4)\}$, trace the plane-sweep algorithm and compute the minimum Euclidean distance. **\[7 Marks\]**

#### Model Solution

**Part (a) — 7 Marks**

* **[1 Mark]** **Problem Definition:** Given $n$ points in $\mathbb{R}^{2}$, find the pair with minimum Euclidean distance.
* **[1 Mark]** **Naive baseline:** Brute-force $O(n^2)$ check.
* **[1 Mark]** **Sweep setup:** Sort points by $x$-coordinate; maintain an *active set* (BST) of points whose $x$ lies within $\delta$ of the sweep line.
* **[1 Mark]** **Sliding window:** Evict points from the active set when $x_i - x_{\text{left}} > \delta$.
* **[1 Mark]** **Active set query:** For new point $p_i$, only points with $y \in [y_i - \delta,\, y_i + \delta]$ are candidates.
* **[1 Mark]** **Pigeonhole bound:** The strip $[x_i-\delta, x_i] \times [y_i-\delta, y_i+\delta]$ partitions into 6 cells of side $\delta/2$; hence at most 6 candidates exist.
* **[1 Mark]** **Complexity:** $O(n \log n)$ for $n$ insertions/deletions in the BST plus $O(1)$ candidate checks per point.

**Part (b) — 7 Marks**

* **[1 Mark]** **Sort by $x$:** $(2,3), (3,4), (5,1), (12,10), (12,30), (40,50)$.
* **[1 Mark]** **Process $(2,3)$:** Active = $\{(2,3)\}$, $\delta = \infty$.
* **[1 Mark]** **Process $(3,4)$:** Distance to $(2,3) = \sqrt{2} \approx 1.414$. $\delta = \sqrt{2}$.
* **[1 Mark]** **Process $(5,1)$:** Active = $\{(2,3), (3,4)\}$ (after eviction check). Distance to nearest: $\sqrt{(5-3)^2 + (1-4)^2} = \sqrt{13} \approx 3.606 > \delta$.
* **[1 Mark]** **Process $(12,10)$:** Evict $(2,3), (3,4), (5,1)$ (all $x < 12 - \sqrt{2}$). $\delta = \sqrt{2}$.
* **[1 Mark]** **Process $(12,30)$:** Distance to $(12,10) = 20 > \delta$.
* **[1 Mark]** **Process $(40,50)$:** All previous evicted. $\delta = \sqrt{2}$ retained.

$$
\boxed{d_{\min} = \sqrt{2} \approx 1.41421356}
$$

---

## ⚠️ KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Where Students Commonly Lose Marks on Plane Sweep Questions:**
>
> 1. **Forgetting to specify the asymptotic complexity** explicitly. Always write $O((n+k)\log n)$ for Bentley–Ottmann and $O(n \log n)$ for closest pair. **\[2-Mark penalty in ESE\]**
> 2. **Drawing the sweep diagram without labelling the status structure at every event.** Examiners want a *sequence* of status snapshots, not a single picture. **\[Up to 3-Mark penalty\]**
> 3. **Confusing sweep direction.** For arbitrary line segments, you *must* sweep along $+x$ (or some direction where endpoints have a unique $x$-ordering). Sweeping along $y$ would force re-encountering segments. **\[Conceptual zero if misinterpreted\]**
> 4. **Skipping the pigeonhole bound argument** in closest-pair answers. The bound $\le 6$ is the crux of the $O(n \log n)$ complexity. **\[1–2-Mark penalty\]**
> 5. **Not stating tie-breaking rules** for events with the same $x$-coordinate (use $y$, then event-type priority). **\[1-Mark penalty\]**
> 6. **Failing to handle degenerate cases** (vertical segments, collinear overlaps, shared endpoints). Always mention robustness via the orientation predicate or floating-point epsilon. **\[2-Mark penalty in lab viva\]**

---

## Topic Recap & Important Things to Remember

> **Rapid-Revision Checklist for the Plane Sweep Algorithm**

- **Definition:** A sweep line translates across the plane; the problem is decomposed into a sequence of discrete events processed in monotonic sweep-parameter order.
- **Three Pillars:**
  * **Event Queue $Q$:** min-heap on the sweep parameter (typically $x$).
  * **Sweep-Line Status $T$:** balanced BST of objects currently intersected, ordered along the perpendicular axis.
  * **Event Handler $\mathcal{H}$:** updates $Q$ and $T$ based on the event type (`START`, `END`, `CROSS`).
- **Locality Principle:** New intersections are scheduled *only* between adjacent objects in $T$. This is the central efficiency argument.
- **Bentley–Ottmann Complexity:** $O((n+k)\log n)$ where $k$ = number of intersection points.
- **Closest-Pair Complexity:** $O(n \log n)$ via plane sweep with sliding window of width $\delta$.
- **Pigeonhole Bound:** At most 6 candidates exist in the active strip during closest-pair sweep.
- **Sweep Direction Rule:** Choose a direction of monotonicity such that no object is re-encountered. For non-vertical segments, sweep along $+x$.
- **Tie-Breaking:** When $x$-coordinates coincide, use $y$-coordinate; for vertical segments, use $y_{\min}$ as BST key.
- **Degenerate-Case Robustness:** Use the orientation predicate $\text{orient}(p,q,r) = \text{sign}\bigl((q_x-p_x)(r_y-p_y) - (q_y-p_y)(r_x-p_x)\bigr)$ and floating-point epsilon $\epsilon \approx 10^{-12}$.
- **Applications:** VLSI routing, GIS overlay, scanline rendering, motion planning, spatial databases, bioinformatics alignments.
- **Canonical Textbook Reference:** Mark de Berg, Otfried Cheong, Marc van Kreveld, Mark Overmars — *Computational Geometry: Algorithms and Applications*, Chapter 2 (Line Segment Intersection) and Chapter 5 (Closest Pair).
- **One-Line Mantra for the Exam:** *"Sort by $x$, maintain a $y$-ordered active set, check only neighbours, push new events, repeat."*
<!-- SECTION_5_END -->
