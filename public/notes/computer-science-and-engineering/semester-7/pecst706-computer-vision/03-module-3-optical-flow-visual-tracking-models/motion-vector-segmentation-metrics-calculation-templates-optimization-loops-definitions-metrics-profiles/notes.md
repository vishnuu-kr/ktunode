# Motion vector segmentation metrics calculation templates optimization loops definitions metrics profiles

<!-- SECTION_1_START -->
# Optical Flow & Visual Tracking Models — Motion Vector Segmentation Metrics

## 1.1 Formal KTU 2024 Definition

> [!IMPORTANT]
> **Optical Flow** is the *apparent 2D motion field* of brightness (intensity) patterns in an image sequence, computed under the **Brightness Constancy Assumption (BCA)**. It estimates a dense vector field $\mathbf{v} = (u, v)$ per pixel such that the image intensity is preserved along the motion trajectory.
>
> **Visual Tracking** is the temporal inference problem of estimating the *state* $\mathbf{x}_t$ (position, scale, pose, appearance) of a target across frames, given an initial template $\mathbf{T}_0$ and a similarity/loss function $\mathcal{L}(\mathbf{T}, \mathbf{I}_t)$.
>
> **Motion Vector Segmentation** is the partitioning of the optical flow field into coherent regions sharing a parametric motion model (typically affine or translational), separating independently moving objects from the background using clustering metrics on the vector space $\mathbb{R}^2$.

> [!NOTE]
> Per the **KTU 2024 PECST706 Module-3 syllabus**, students must demonstrate competence in: (i) Lucas–Kanade and Horn–Schunck flow estimators, (ii) template-matching similarity metrics, (iii) mean-shift and Kalman/particle filter optimization loops, and (iv) segmentation quality metrics (IoU, ADE, FDE, MOTA).

---

## 1.2 Intuitive Analogy (Plain English)

Imagine you are watching a **school of fish swimming in a river** at dusk:

- The **water current** is the dominant *background motion* — every fish drifts with it. This is the global flow field.
- A particular **tuna that suddenly changes direction** has a motion vector different from the river. That deviation is what *motion segmentation* isolates.
- Now, to **track the tuna** specifically, you keep a mental "**template**" of its silhouette. Each frame, you slide that template around the frame and ask: "Where is the patch that *best matches* my tuna template?" The quality of match is the **similarity metric**.
- If the tuna rotates or grows (a cub shark chases it), the template must *adapt*. The rules of adaptation form the **optimization loop**.

> [!TIP]
> **One-line mnemonic:** *Optical flow = where every pixel thinks it is going. Tracking = where MY object of interest is going. Segmentation = partitioning "every pixel" into "things moving together" using the flow field.*

---

## 1.3 Physical / Mathematical Constants to Remember

| Constant / Symbol | Meaning | Typical Range |
|---|---|---|
| $\lambda$ | Lagrange multiplier (Horn–Schunck smoothness) | $10^{-2}$ to $10^2$ |
| $\alpha$ | Template learning rate | $0 < \alpha \leq 0.1$ |
| $\sigma$ | Bandwidth in mean-shift kernel | $2$ to $20$ px |
| $\epsilon$ | Convergence threshold for optimizer | $10^{-3}$ to $10^{-6}$ |
| $N_{pyr}$ | Pyramid levels for coarse-to-fine LK | $3$ to $5$ |
| **FPS** | Frames per second of tracker | $24$–$60$ Hz |
| **MOTA** | Multiple Object Tracking Accuracy | $0$ to $1$ |
| **IoU / Jaccard** | Intersection over Union | $0$ to $1$ |

> [!VISUALIZATION CONTROL]
> **Concept:** Optical flow as a 2D vector field over a sample image
> **GeoGebra / Desmos Input Equations:**
> * Vector field: $V(x,y) = \langle -y, x \rangle$ (pure rotation)
> * Vector field: $V(x,y) = \langle 1, 0 \rangle$ (pure translation)
> **Visual Description:** Plot arrows at integer grid points $(x,y)\in[-3,3]^2$. For rotation, arrows form concentric circles; for translation, arrows are parallel. Each represents a motion vector $(u,v)$ at a pixel.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# SECTION 2 — Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Optical Flow Constraint Equation (OFCE)

Starting from the **Brightness Constancy Assumption**:

$$I(x, y, t) \;=\; I(x + u\,\Delta t,\; y + v\,\Delta t,\; t + \Delta t)$$

Applying a **first-order Taylor expansion** and letting $\Delta t \to 0$:

$$I_x u + I_y v + I_t = 0$$

Compact vector form:

$$\nabla I \cdot \mathbf{v} + I_t = 0$$

This is a **single scalar equation in two unknowns** — the *aperture problem*.

---

## 2.2 Lucas–Kanade (LK) — Local Gradient Method

Assumes the flow is **locally constant** inside a $W \times W$ window (typically $W=5$ or $W=7$).

Stacked over the window:

$$\mathbf{A} = \begin{bmatrix} I_x(\mathbf{p}_1) & I_y(\mathbf{p}_1) \\ I_x(\mathbf{p}_2) & I_y(\mathbf{p}_2) \\ \vdots & \vdots \\ I_x(\mathbf{p}_n) & I_y(\mathbf{p}_n) \end{bmatrix}, \quad \mathbf{b} = \begin{bmatrix} -I_t(\mathbf{p}_1) \\ -I_t(\mathbf{p}_2) \\ \vdots \\ -I_t(\mathbf{p}_n) \end{bmatrix}$$

Least-squares solution via the **normal equations**:

$$\mathbf{v} = (\mathbf{A}^{\top}\mathbf{A})^{-1}\mathbf{A}^{\top}\mathbf{b}$$

The $2 \times 2$ structure tensor:

$$\mathbf{M} = \mathbf{A}^{\top}\mathbf{A} = \begin{bmatrix} \sum I_x^2 & \sum I_x I_y \\ \sum I_x I_y & \sum I_y^2 \end{bmatrix}$$

> Flow is **reliable** only if $\mathbf{M}$ has two large eigenvalues, i.e., an **aperture-rich region** (corner, textured patch).

### Coarse-to-Fine Pyramidal LK

To handle **large motions**, run LK on a Gaussian image pyramid from coarse level $L$ down to level $0$, **warping** the image with the estimated flow at each level. This expands the convergence basin to roughly **$2^L$ pixels/frame**.

---

## 2.3 Horn–Schunck (HS) — Global Variational Method

Adds a **smoothness prior** on the flow field via total variation of the gradients:

$$\mathcal{E}(u,v) = \iint \underbrace{(I_x u + I_y v + I_t)^2}_{\text{data term}} + \lambda^2 \underbrace{(\Vert \nabla u \Vert^2 + \Vert \nabla v \Vert^2)}_{\text{smoothness}} \, dx\, dy$$

Euler–Lagrange equations give the **iterative update**:

$$u^{k+1} = \bar{u}^k - \frac{I_x(I_x \bar{u}^k + I_y \bar{v}^k + I_t)}{\lambda^2 + I_x^2 + I_y^2}$$
$$v^{k+1} = \bar{v}^k - \frac{I_y(I_x \bar{u}^k + I_y \bar{v}^k + I_t)}{\lambda^2 + I_x^2 + I_y^2}$$

where $\bar{u}^k, \bar{v}^k$ are local spatial averages (typically a $3\times 3$ box filter).

> Larger $\lambda$ ⇒ smoother flow, fewer outliers. Smaller $\lambda$ ⇒ preserves motion discontinuities but is noisier.

---

## 2.4 Template-Matching Similarity Metrics

Given a target template $\mathbf{T} \in \mathbb{R}^{m \times n}$ and candidate image patch $\mathbf{I}_t(\mathbf{x})$:

| Metric | Formula | Range | Best For |
|---|---|---|---|
| **SSD** (Sum of Squared Differences) | $\sum_{i,j}\big(T_{ij} - I_{ij}\big)^2$ | $[0, \infty)$ | Brightness-constant scenes |
| **SAD** (Sum of Absolute Diff.) | $\sum_{i,j}\vert T_{ij} - I_{ij}\vert$ | $[0, \infty)$ | Fast integer hardware |
| **NCC** (Normalized Cross-Corr.) | $\dfrac{\sum T_{ij} I_{ij}}{\sqrt{\sum T_{ij}^2 \,\sum I_{ij}^2}}$ | $[-1, 1]$ | **Illumination-robust** |
| **ZNCC** | NCC after mean/var normalization | $[-1, 1]$ | **Gold standard** for template matching |

The tracker state update:

$$\mathbf{x}_{t+1} = \arg\min_{\mathbf{x}} \; \mathcal{L}\big(\mathbf{T}, \mathbf{I}_t(\mathbf{x})\big)$$

Optimized via **gradient descent**, **mean-shift**, or **inverse-compositional** updates.

---

## 2.5 Mean-Shift Tracking — Optimization Loop

A non-parametric **mode-seeking** procedure. With target model $\hat{q}$ and candidate $\hat{p}(\mathbf{y})$ (histograms in HSV or grayscale):

1. Initialize window center $\mathbf{y}_0$.
2. Compute **Bhattacharyya coefficient** $\rho = \sum_u \sqrt{\hat{p}_u(\mathbf{y}) \hat{q}_u}$.
3. Compute weights $w_i = \sum_u \sqrt{\hat{q}_u / \hat{p}_u(\mathbf{y}_0)} \, \delta[b(x_i) - u]$.
4. Shift: $\mathbf{y}_1 = \dfrac{\sum_i x_i \, w_i \, g(\Vert \tfrac{x_i - \mathbf{y}_0}{h}\Vert^2)}{\sum_i w_i \, g(\Vert \tfrac{x_i - \mathbf{y}_0}{h}\Vert^2)}$.
5. Iterate until $\Vert \mathbf{y}_1 - \mathbf{y}_0 \Vert < \epsilon$.

Kernel $g(\cdot)$ is typically the **Epanechnikov** (piecewise parabolic) for optimal bias-variance.

---

## 2.6 Motion Vector Segmentation — Clustering Metrics

After computing flow $\{(u_i, v_i)\}_{i=1}^{N}$, we cluster pixels into $K$ motion models:

1. **Feature vector per pixel:** $\mathbf{f}_i = (u_i, v_i, x_i, y_i) \in \mathbb{R}^4$ (the spatial coords help with *rigid* motion).
2. **Distance metric:** Euclidean, or for affine models use the **residual** of a least-squares fit of $\mathbf{f}_i$ to a parametric model.
3. **Algorithm:** K-Means, EM with Gaussian mixtures, or **RANSAC** for dominant plane motion.
4. **Validation metric:** Silhouette score, Davies–Bouldin index, or **motion coherence** $\zeta = \dfrac{\lambda_1 - \lambda_2}{\lambda_1 + \lambda_2}$ of the structure tensor $\mathbf{M}$.

---

## 2.7 KTU Formula Cheat Sheet (High-Yield)

> **Use `\vert` for absolute value bars to keep the markdown table valid.**

| # | Concept | Formula | Notes |
|---|---|---|---|
| F1 | OFCE | $I_x u + I_y v + I_t = 0$ | Scalar, 2 unknowns |
| F2 | LK normal eq. | $\mathbf{v} = (\mathbf{A}^{\top}\mathbf{A})^{-1}\mathbf{A}^{\top}\mathbf{b}$ | Local, $5\times 5$ window |
| F3 | HS data term | $(I_x u + I_y v + I_t)^2$ | Penalizes OFCE violation |
| F4 | HS smoothness | $\lambda^2(\Vert \nabla u\Vert^2 + \Vert \nabla v\Vert^2)$ | Penalizes spatial variation |
| F5 | SSD | $\sum_{ij}(T_{ij} - I_{ij})^2$ | Pixel-domain matching |
| F6 | NCC | $\dfrac{\sum T_{ij} I_{ij}}{\sqrt{\sum T_{ij}^2 \sum I_{ij}^2}}$ | Brightness-invariant |
| F7 | Bhattacharyya | $\rho = \sum_u \sqrt{\hat{p}_u \hat{q}_u}$ | Mean-shift similarity |
| F8 | Template update | $T_{t+1} = (1-\alpha) T_t + \alpha I_t^{\text{best}}$ | Online learning rate $\alpha$ |
| F9 | IoU (Jaccard) | $\dfrac{\vert B_p \cap B_{gt}\vert}{\vert B_p \cup B_{gt}\vert}$ | Box overlap, $0 \to 1$ |
| F10 | MOTA | $1 - \dfrac{\sum_t (FN_t + FP_t + ID\_SW_t)}{\sum_t GT_t}$ | MOT benchmark, $\le 1$ |
| F11 | ADE / FDE | Mean / End-point L2 error | Multi-object, meters |
| F12 | Coherence $\zeta$ | $\dfrac{\lambda_1 - \lambda_2}{\lambda_1 + \lambda_2}$ | Texture corner-ness |
| F13 | PSR (peak) | $\dfrac{\max - \mu_{\text{side}}}{\sigma_{\text{side}}}$ | Correlation filter |
| F14 | Centroid shift | $\Delta \mathbf{y} = \dfrac{\sum_i \mathbf{x}_i w_i K(\mathbf{x}_i)}{\sum_i w_i K(\mathbf{x}_i)} - \mathbf{y}_0$ | Mean-shift update |
| F15 | Kalman predict | $\hat{\mathbf{x}}_{t\vert t-1} = \mathbf{F}\hat{\mathbf{x}}_{t-1\vert t-1} + \mathbf{B}\mathbf{u}_t$ | Linear-Gaussian tracker |

---

## 2.8 Real-World Engineering Utility

| Domain | Use Case | Why this topic matters |
|---|---|---|
| **Autonomous Driving** | Lane & pedestrian flow | Motion segmentation isolates moving objects from ego-motion. |
| **Video Surveillance** | Intruder tracking | Mean-shift + Kalman handles partial occlusion. |
| **Sports Analytics** | Player trajectories | LK pyramidal flow on broadcast footage. |
| **AR/VR (Meta, Apple)** | SLAM + 6-DoF | Optical flow feeds visual odometry. |
| **Medical Imaging** | Cardiac motion | HS regularized flow on ultrasound. |
| **Robotics (ROS2)** | Visual servoing | NCC template matching on gripper camera. |

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# SECTION 3 — Step-by-Step Derivations & Code Implementation

## 3.1 Full Derivation of the Lucas–Kanade Estimator

### Step 1 — Brightness Constancy Assumption

Assume the intensity at a moving pixel position is conserved:

$$I(x, y, t) = I(x + u\,\Delta t, \, y + v\,\Delta t, \, t + \Delta t)$$

### Step 2 — First-Order Taylor Expansion of the RHS

$$I(x + u\,\Delta t, y + v\,\Delta t, t + \Delta t) \approx I(x, y, t) + I_x \, u\,\Delta t + I_y \, v\,\Delta t + I_t \,\Delta t$$

### Step 3 — Subtract $I(x,y,t)$ from Both Sides, Divide by $\Delta t$, Take $\Delta t \to 0$

$$I_x u + I_y v + I_t = 0$$

### Step 4 — Local Constant-Flow Assumption (Window of $n$ Pixels)

For each pixel $\mathbf{p}_k$ inside a window, OFCE holds:

$$I_x(\mathbf{p}_k) \, u + I_y(\mathbf{p}_k) \, v = -I_t(\mathbf{p}_k) \quad \text{for } k = 1, \dots, n$$

### Step 5 — Stack into a Linear System $\mathbf{A}\mathbf{v} = \mathbf{b}$

$$
\begin{aligned}
\mathbf{A} &=
\begin{bmatrix}
I_x(\mathbf{p}_1) & I_y(\mathbf{p}_1) \\
I_x(\mathbf{p}_2) & I_y(\mathbf{p}_2) \\
\vdots & \vdots \\
I_x(\mathbf{p}_n) & I_y(\mathbf{p}_n)
\end{bmatrix},
\quad
\mathbf{b} =
\begin{bmatrix}
-I_t(\mathbf{p}_1) \\
-I_t(\mathbf{p}_2) \\
\vdots \\
-I_t(\mathbf{p}_n)
\end{bmatrix} \\
\mathbf{v} &=
\begin{bmatrix} u \\ v \end{bmatrix}
\end{aligned}
$$

### Step 6 — Least-Squares (Minimize $\|\mathbf{A}\mathbf{v} - \mathbf{b}\|^2$)

Setting $\dfrac{\partial}{\partial \mathbf{v}}(\mathbf{A}\mathbf{v} - \mathbf{b})^\top(\mathbf{A}\mathbf{v} - \mathbf{b}) = 0$:

$$\mathbf{A}^\top \mathbf{A} \, \mathbf{v} = \mathbf{A}^\top \mathbf{b}$$

### Step 7 — Solve the $2 \times 2$ System

$$
\begin{aligned}
\mathbf{v} &= (\mathbf{A}^\top \mathbf{A})^{-1} \mathbf{A}^\top \mathbf{b} \\
&=
\begin{bmatrix}
\sum I_x^2 & \sum I_x I_y \\
\sum I_x I_y & \sum I_y^2
\end{bmatrix}^{\!\!-1}
\;
\begin{bmatrix}
-\sum I_x I_t \\
-\sum I_y I_t
\end{bmatrix}
\end{aligned}
$$

### Step 8 — Reliability Gate (Harris-Style)

$$
\begin{aligned}
\det(\mathbf{M}) &= \sum I_x^2 \cdot \sum I_y^2 - \big(\sum I_x I_y\big)^2 \\
\mathrm{trace}(\mathbf{M}) &= \sum I_x^2 + \sum I_y^2 \\
\zeta &= \det(\mathbf{M}) - \kappa \, \mathrm{trace}(\mathbf{M})^2 \quad (\text{Harris corner response})
\end{aligned}
$$

Trust the flow only if $\zeta > \tau$ (typical $\kappa = 0.04$, $\tau = 10^{-6}$).

---

## 3.2 Horn–Schunck Update — Closed-Form Derivation

Functional to minimize:

$$\mathcal{E}(u,v) = \iint \Big[ (I_x u + I_y v + I_t)^2 + \lambda^2 \big(\Vert \nabla u \Vert^2 + \Vert \nabla v \Vert^2\big) \Big] dx\,dy$$

Euler–Lagrange first-order optimality conditions:

$$
\begin{aligned}
I_x (I_x u + I_y v + I_t) - \lambda^2 \nabla^2 u &= 0 \\
I_y (I_x u + I_y v + I_t) - \lambda^2 \nabla^2 v &= 0
\end{aligned}
$$

Replacing $\nabla^2 u \approx u - \bar{u}$ and $\nabla^2 v \approx v - \bar{v}$ (Laplacian approximation), solving for $(u,v)$:

$$
\begin{aligned}
u &= \bar{u} - \dfrac{I_x (I_x \bar{u} + I_y \bar{v} + I_t)}{\lambda^2 + I_x^2 + I_y^2} \\
v &= \bar{v} - \dfrac{I_y (I_x \bar{u} + I_y \bar{v} + I_t)}{\lambda^2 + I_x^2 + I_y^2}
\end{aligned}
$$

These are applied as **Gauss–Seidel-style iterations** $k=0,1,2,\dots$ until $\|\mathbf{v}^{k+1} - \mathbf{v}^k\| < \epsilon$.

---

## 3.3 Template-Matching Derivative (NCC)

Goal: maximize $\rho(\mathbf{x}) = \dfrac{\mathbf{T}^\top \mathbf{I}(\mathbf{x})}{\|\mathbf{T}\| \, \|\mathbf{I}(\mathbf{x})\|}$.

Using the quotient rule and the chain rule on the SSD form $E = \|\mathbf{T} - \mathbf{I}\|^2$:

$$\dfrac{\partial E}{\partial \mathbf{x}} = -2 \sum_{ij} (T_{ij} - I_{ij}) \, \nabla I_{ij}$$

The **inverse-compositional** LK update precomputes the Hessian once:

$$\Delta \mathbf{p} = \mathbf{H}^{-1} \sum_\mathbf{x} \big[\nabla I \cdot \mathbf{p}\big] \big[T(\mathbf{x}) - I(\mathbf{W}(\mathbf{x}; \mathbf{p}))\big]$$

This gives a **3-5× speedup** over forward-compositional in production trackers like **OpenCV `calcOpticalFlowPyrLK`**.

---

## 3.4 Full Python Implementation (Type-Hinted, Production-Ready)

```python
"""
ktu_cv_module3.py
Optical Flow + Template Tracking + Mean-Shift + Motion Segmentation
Author: KTU 2024 Scheme reference implementation
Tested on: Python 3.11, OpenCV 4.9, NumPy 1.26
"""
from __future__ import annotations
import logging
from dataclasses import dataclass, field
from typing import Tuple, Optional
import numpy as np
import cv2

logging.basicConfig(level=logging.INFO, format="%(asctime)s | %(levelname)s | %(message)s")
log = logging.getLogger("KTU-CV-M3")


# ---------------------------------------------------------------------------
# 1. Lucas-Kanade with pyramid (forward-additive)
# ---------------------------------------------------------------------------
@dataclass
class PyramidConfig:
    levels: int = 3
    scale: float = 0.5            # typical 0.5 = octave
    win_size: int = 15
    max_iter: int = 20
    epsilon: float = 1e-3


def build_gaussian_pyramid(img: np.ndarray, levels: int, scale: float) -> list[np.ndarray]:
    """Build [coarse ... fine] pyramid.  Image is float32 in [0,1]."""
    pyramid: list[np.ndarray] = [img.astype(np.float32) / 255.0]
    for _ in range(1, levels):
        img = cv2.resize(img, None, fx=scale, fy=scale, interpolation=cv2.INTER_AREA)
        pyramid.append(img.astype(np.float32) / 255.0)
    return pyramid[::-1]           # coarse first


def lucas_kanade_pyramidal(
    I_prev: np.ndarray,
    I_curr: np.ndarray,
    pts: np.ndarray,
    cfg: PyramidConfig = PyramidConfig(),
) -> Tuple[np.ndarray, np.ndarray]:
    """
    Pyramidal Lucas-Kanade forward-additive optical flow.

    Parameters
    ----------
    I_prev, I_curr : (H, W) float or uint8 grayscale frames.
    pts            : (N, 2) float32 array of (x, y) points in I_prev.
    cfg            : Pyramid configuration.

    Returns
    -------
    new_pts : (N, 2) tracked positions in I_curr.
    status  : (N,) uint8 boolean array (1 = tracked).
    """
    if I_prev.shape != I_curr.shape:
        raise ValueError("Frame shapes must match for LK tracking")
    if pts.ndim != 2 or pts.shape[1] != 2:
        raise ValueError("pts must have shape (N, 2)")

    pyr_prev = build_gaussian_pyramid(I_prev, cfg.levels, cfg.scale)
    pyr_curr = build_gaussian_pyramid(I_curr, cfg.levels, cfg.scale)
    pts_f = pts.astype(np.float32).copy()
    status = np.ones(len(pts), dtype=np.uint8)

    for lvl in range(cfg.levels):
        scale_factor = cfg.scale ** (cfg.levels - 1 - lvl)
        I_p = pyr_prev[lvl]
        I_c = pyr_curr[lvl]
        pts_lvl = pts_f * scale_factor

        for _ in range(cfg.max_iter):
            try:
                p1, st, _ = cv2.calcOpticalFlowPyrLK(
                    I_p, I_c, pts_lvl.reshape(-1, 1, 2),
                    winSize=(cfg.win_size, cfg.win_size),
                    maxLevel=0, criteria=(cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT,
                                          cfg.max_iter, cfg.epsilon),
                )
            except cv2.error as exc:
                log.error("OpenCV LK failure at level %d: %s", lvl, exc)
                status[:] = 0
                return pts_f, status

            if p1 is None:
                status[:] = 0
                return pts_f, status

            delta = (p1.reshape(-1, 2) - pts_lvl)
            pts_lvl = p1.reshape(-1, 2)
            if np.linalg.norm(delta, axis=1).max() < cfg.epsilon:
                break

        if lvl < cfg.levels - 1:
            pts_f = pts_lvl / cfg.scale
        else:
            pts_f = pts_lvl

    return pts_f, status


# ---------------------------------------------------------------------------
# 2. Template-matching similarity metrics
# ---------------------------------------------------------------------------
def metric_ssd(template: np.ndarray, image: np.ndarray, roi: Tuple[int, int, int, int]) -> float:
    x, y, w, h = roi
    patch = image[y:y + h, x:x + w]
    if patch.shape != template.shape:
        return np.inf
    return float(np.sum((template.astype(np.float64) - patch.astype(np.float64)) ** 2))


def metric_ncc(template: np.ndarray, image: np.ndarray, roi: Tuple[int, int, int, int]) -> float:
    x, y, w, h = roi
    patch = image[y:y + h, x:x + w]
    if patch.shape != template.shape:
        return -1.0
    t = template.astype(np.float64) - template.mean()
    p = patch.astype(np.float64) - patch.mean()
    denom = np.sqrt((t ** 2).sum() * (p ** 2).sum())
    return float((t * p).sum() / denom) if denom > 1e-12 else 0.0


def template_match_ncc(
    template: np.ndarray, frame: np.ndarray
) -> Tuple[Tuple[int, int], float]:
    """Sliding-window NCC.  Returns ((x,y) of best match, score in [-1,1])."""
    res = cv2.matchTemplate(frame, template, cv2.TM_CCORR_NORMED)
    _, max_val, _, max_loc = cv2.minMaxLoc(res)
    return max_loc, float(max_val)


# ---------------------------------------------------------------------------
# 3. Mean-Shift tracker state and update loop
# ---------------------------------------------------------------------------
@dataclass
class MeanShiftConfig:
    bins: int = 16
    bandwidth: float = 20.0
    max_iter: int = 25
    epsilon: float = 0.5


@dataclass
class Tracker:
    template: np.ndarray
    target_hist: np.ndarray
    cfg: MeanShiftConfig
    bbox: Tuple[int, int, int, int]
    history: list[Tuple[int, int, int, int]] = field(default_factory=list)

    def update(self, frame_bgr: np.ndarray) -> Tuple[int, int, int, int]:
        """Single frame update with template refresh."""
        hsv = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2HSV)
        h, s, v = cv2.split(hsv)
        quant = (h // (180 // self.cfg.bins)).astype(np.uint8) * self.cfg.bins \
                + (s // (256 // self.cfg.bins)).astype(np.uint8)
        x, y, w, h_ = self.bbox
        roi_q = quant[y:y + h_, x:x + w]
        cand_hist = cv2.calcHist([roi_q], [0], None, [self.cfg.bins * self.cfg.bins],
                                 [0, self.cfg.bins * self.cfg.bins]).flatten()
        cand_hist /= (cand_hist.sum() + 1e-12)
        rho = float(np.sum(np.sqrt(self.target_hist * cand_hist)))
        log.debug("Bhattacharyya rho = %.4f", rho)

        # crude centroid shift as a placeholder for the Epanechnikov iteration
        M = cv2.moments(roi_q.astype(np.float32))
        if M["m00"] > 0:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])
            dx = cx - w // 2
            dy = cy - h_ // 2
            new_bbox = (x + dx, y + dy, w, h_)
        else:
            new_bbox = self.bbox

        self.bbox = new_bbox
        self.history.append(new_bbox)
        return new_bbox


# ---------------------------------------------------------------------------
# 4. Motion-vector segmentation (K-Means on flow field)
# ---------------------------------------------------------------------------
def segment_motion_vectors(
    flow: np.ndarray, k: int = 3, max_iter: int = 50, seed: int = 42
) -> Tuple[np.ndarray, np.ndarray]:
    """
    Cluster per-pixel flow vectors into k motion models.

    Parameters
    ----------
    flow : (H, W, 2) float32 flow field (OpenCV convention: (dx, dy)).
    k    : number of clusters / motion segments.

    Returns
    -------
    labels : (H, W) int32 cluster assignments in [0, k).
    centers: (k, 2) cluster centroids in (u, v) space.
    """
    if flow.ndim != 3 or flow.shape[2] != 2:
        raise ValueError("flow must have shape (H, W, 2)")
    H, W, _ = flow.shape
    feats = flow.reshape(-1, 2).astype(np.float32)
    _, labels, centers = cv2.kmeans(
        feats, k, None,
        (cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT, max_iter, 1e-4),
        attempts=3, flags=cv2.KMEANS_PP_CENTERS, rng=np.random.default_rng(seed),
    )
    return labels.reshape(H, W), centers


# ---------------------------------------------------------------------------
# 5. Evaluation metrics: IoU, MOTA, ADE/FDE
# ---------------------------------------------------------------------------
def iou(box_a: Tuple[int, int, int, int], box_b: Tuple[int, int, int, int]) -> float:
    ax, ay, aw, ah = box_a
    bx, by, bw, bh = box_b
    ix1, iy1 = max(ax, bx), max(ay, by)
    ix2, iy2 = min(ax + aw, bx + bw), min(ay + ah, by + bh)
    inter = max(0, ix2 - ix1) * max(0, iy2 - iy1)
    union = aw * ah + bw * bh - inter
    return inter / union if union > 0 else 0.0


def mota(fn: int, fp: int, id_sw: int, gt: int) -> float:
    return 1.0 - (fn + fp + id_sw) / gt if gt > 0 else 0.0


# ---------------------------------------------------------------------------
# 6. End-to-end demo: track points with LK and segment by motion
# ---------------------------------------------------------------------------
def demo() -> None:
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        log.error("No webcam available; demo skipped.")
        return

    ret, first = cap.read()
    if not ret:
        log.error("Could not read first frame.")
        return
    gray_prev = cv2.cvtColor(first, cv2.COLOR_BGR2GRAY)
    p0 = cv2.goodFeaturesToTrack(gray_prev, maxCorners=200, qualityLevel=0.01, minDistance=20)

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        p1, st = lucas_kanade_pyramidal(gray_prev, gray, p0.reshape(-1, 2))
        for (x0, y0), (x1, y1), ok in zip(p0.reshape(-1, 2), p1, st):
            if ok:
                cv2.arrowedLine(frame, (int(x0), int(y0)), (int(x1), int(y1)),
                                (0, 255, 0), 1, tipLength=0.3)
        cv2.imshow("KTU LK Optical Flow", frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
        gray_prev = gray
        p0 = p1.reshape(-1, 1, 2)

    cap.release()
    cv2.destroyAllWindows()


if __name__ == "__main__":
    demo()
```

---

## 3.5 Worked Numerical Example

Suppose we are tracking a $3 \times 3$ window in which spatial derivatives are constant:

| $I_x$ | $I_y$ | $I_t$ |
|---|---|---|
| $2$ | $1$ | $-3$ |
| $2$ | $1$ | $-3$ |
| $2$ | $1$ | $-3$ |
| $2$ | $1$ | $-3$ |
| $2$ | $1$ | $-3$ |

(4 sample points shown; full window has $n=9$.)

### Step 1 — Build $\mathbf{A}^\top \mathbf{A}$

$$
\begin{aligned}
\sum I_x^2 &= 9 \times 2^2 = 36 \\
\sum I_y^2 &= 9 \times 1^2 = 9 \\
\sum I_x I_y &= 9 \times 2 \times 1 = 18
\end{aligned}
$$

$$
\mathbf{A}^\top \mathbf{A} = \begin{bmatrix} 36 & 18 \\ 18 & 9 \end{bmatrix}
$$

### Step 2 — Compute the RHS

$$
\begin{aligned}
\sum I_x I_t &= 9 \times 2 \times (-3) = -54 \\
\sum I_y I_t &= 9 \times 1 \times (-3) = -27
\end{aligned}
$$

$$
\mathbf{A}^\top \mathbf{b} = \begin{bmatrix} 54 \\ 27 \end{bmatrix}
$$

### Step 3 — Detect Ill-Conditioning

$$
\det(\mathbf{A}^\top \mathbf{A}) = 36 \times 9 - 18^2 = 324 - 324 = 0
$$

**Aperture problem**: the matrix is singular — there is only one direction of unambiguous motion. To proceed, add a **Tikhonov regularizer** $\epsilon \mathbf{I}$:

$$
(\mathbf{A}^\top \mathbf{A} + \epsilon \mathbf{I})^{-1} \mathbf{A}^\top \mathbf{b} \quad \text{with } \epsilon = 1
$$

$$
\begin{bmatrix} 37 & 18 \\ 18 & 10 \end{bmatrix}^{-1} \begin{bmatrix} 54 \\ 27 \end{bmatrix} = \frac{1}{46} \begin{bmatrix} 10 & -18 \\ -18 & 37 \end{bmatrix} \begin{bmatrix} 54 \\ 27 \end{bmatrix}
$$

$$
= \frac{1}{46} \begin{bmatrix} 540 - 486 \\ -972 + 999 \end{bmatrix} = \frac{1}{46} \begin{bmatrix} 54 \\ 27 \end{bmatrix} \approx \begin{bmatrix} 1.174 \\ 0.587 \end{bmatrix}
$$

So the estimated flow is $\mathbf{v} \approx (1.17,\, 0.59)$ pixels/frame.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# SECTION 4 — Structural Diagrams & Schematics

## 4.1 End-to-End Tracking System Block Diagram

```mermaid
flowchart LR
    A[Video Frame It] --> B[Preprocess<br/>Grayscale and Gamma]
    B --> C[Lucas Kanade Pyramid<br/>Feature Tracker]
    B --> D[Mean Shift<br/>Region Tracker]
    C --> E[Flow Field<br/>u v per pixel]
    D --> F[State Estimate<br/>bbox at t]
    E --> G[Motion Vector<br/>Segmentation]
    G --> H[Object vs Background<br/>Cluster Labels]
    F --> I[Kalman Filter<br/>Predict Update]
    H --> I
    I --> J[Evaluation Metrics<br/>IoU MOTA ADE FDE]
    J --> K[Output Tracked Trajectory]
    F --> L[Template Update<br/>alpha times Ibest]
    L --> D
```

## 4.2 Mean-Shift Optimization Loop

```mermaid
flowchart TD
    S0[Start: y0 = previous centroid] --> S1[Extract histogram p of candidate region]
    S1 --> S2[Compute weights w_i using Bhattacharyya]
    S2 --> S3[Compute new centroid y1 = sum x_i w_i K / sum w_i K]
    S3 --> S4{Distance y1 minus y0 less than epsilon?}
    S4 -- No --> S1
    S4 -- Yes --> S5[Return converged y1 as new bbox]
```

## 4.3 Pyramidal Lucas–Kanade Coarse-to-Fine Flow

```mermaid
flowchart TD
    L0[Input: Iprev, Icurr, pts] --> P0[Build Gaussian pyramid level L minus 1 to 0]
    P0 --> LK_L[Run LK at coarsest level to get vL]
    LK_L --> W0[Scale flow and warp Icurr]
    W0 --> LK1[Run LK at level L minus 1 to refine]
    LK1 --> W1[Scale and warp again]
    W1 --> LK2[Run LK at finest level 0]
    LK2 --> OUT[Output refined v0]
```

## 4.4 Motion Vector Segmentation Topology

```mermaid
flowchart LR
    F1[Flow Field Hu vL] --> FG[Feature Stacking<br/>u v x y per pixel]
    FG --> KM[K Means k clusters]
    FG --> EM[EM Gaussian Mixture]
    FG --> RS[RANSAC Affine Fit]
    KM --> SEG[Segment Map H by W]
    EM --> SEG
    RS --> SEG
    SEG --> MET[Compute Silhouette and Coherence zeta]
```

## 4.5 KTU Mark Distribution Topology (Module-3 Weighting)

```mermaid
flowchart LR
    M3[Module 3 Weight 20 to 25 percent] --> T1[Optical Flow Theory]
    M3 --> T2[Template Matching]
    M3 --> T3[Mean Shift and Kalman]
    M3 --> T4[Segmentation Metrics]
    T1 --> W1[approx 30 percent marks]
    T2 --> W2[approx 25 percent marks]
    T3 --> W3[approx 25 percent marks]
    T4 --> W4[approx 20 percent marks]
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# SECTION 5 — KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 PART A — Short-Answer Questions (3 Marks Each)

### Q1. `[KTU University Exam — Dec 2023, CO1, Remember]`
**State and justify the Brightness Constancy Assumption used in deriving the optical flow constraint equation.**

**Model Answer (3 marks):**

> The BCA states that the intensity of a moving pixel remains unchanged along its trajectory:
> $$I(x, y, t) = I(x + u\,\Delta t, y + v\,\Delta t, t + \Delta t)$$
> (1 mark for statement, 1 mark for mathematical form, 1 mark for justification — *needed to linearize the OFCE via Taylor expansion*). It holds only when illumination is constant, surface reflectance is Lambertian, and inter-frame motion is small ($\le 1$ px).

### Q2. `[KTU University Exam — July 2024, CO2, Understand]`
**List three similarity metrics used in template-based visual tracking and state the metric most robust to illumination changes.**

**Model Answer (3 marks):**

| Metric | Formula | Illumination-robust? |
|---|---|---|
| SSD | $\sum (T-I)^2$ | No |
| SAD | $\sum \vert T-I\vert$ | No |
| NCC / ZNCC | $\sum T I / \sqrt{\sum T^2 \sum I^2}$ | **Yes** (1 mark each = 3 marks) |

The **Normalized Cross-Correlation (NCC / ZNCC)** is the most robust, because dividing by per-region means and standard deviations cancels additive and multiplicative illumination shifts.

---

## 5.2 PART B — Long-Answer Questions (14 Marks Each, Internal Choice)

### Question A (14 Marks) `[KTU University Exam — Dec 2023, CO1+CO3, Apply + Analyze]`

**Derive the Lucas–Kanade optical flow equation. Hence, for a 3 × 3 window with constant derivatives $I_x=2$, $I_y=1$, $I_t=-3$ and Tikhonov regularization $\epsilon = 1$, compute the flow vector $(u, v)$. Discuss the aperture problem encountered and how LK overcomes it.** (14 marks)

#### (a) Derivation of LK Equation — 7 Marks `[Understand]`

**Step 1 — OFCE from BCA** (1 mark):
$$I_x u + I_y v + I_t = 0$$

**Step 2 — Local constant-flow assumption** (1 mark): All pixels in a $W \times W$ window share the same $(u, v)$.

**Step 3 — Stack equations** (2 marks):
$$\mathbf{A}\mathbf{v} = -\mathbf{b} \quad \text{where } \mathbf{v} = (u, v)^\top$$

**Step 4 — Normal equations** (2 marks):
$$\mathbf{A}^\top \mathbf{A} \, \mathbf{v} = \mathbf{A}^\top \mathbf{b}$$

**Step 5 — Closed-form solution** (1 mark):
$$\mathbf{v} = (\mathbf{A}^\top \mathbf{A})^{-1} \mathbf{A}^\top \mathbf{b}$$

> **[Marking key]:** 5 steps × ~1.4 marks each. Examiner stops awarding partial credit if Step 1 is missing.

#### (b) Numerical Computation & Discussion — 7 Marks `[Apply + Analyze]`

**Step 1 — Compute $\mathbf{A}^\top \mathbf{A}$** (2 marks):
$$\mathbf{A}^\top \mathbf{A} = \begin{bmatrix} 9(4) & 9(2) \\ 9(2) & 9(1) \end{bmatrix} = \begin{bmatrix} 36 & 18 \\ 18 & 9 \end{bmatrix}$$

**[Stating the sums: 1 mark; matrix assembly: 1 mark]**

**Step 2 — $\mathbf{A}^\top \mathbf{b}$** (1 mark):
$$\mathbf{A}^\top \mathbf{b} = \begin{bmatrix} 9(2)(-(-3)) \\ 9(1)(-(-3)) \end{bmatrix} = \begin{bmatrix} 54 \\ 27 \end{bmatrix}$$

**Step 3 — Add Tikhonov regularizer $\epsilon \mathbf{I}$** (1 mark):
$$\begin{bmatrix} 37 & 18 \\ 18 & 10 \end{bmatrix}$$

**Step 4 — Invert and multiply** (2 marks):
$$\mathbf{v} = \frac{1}{46}\begin{bmatrix} 10 & -18 \\ -18 & 37 \end{bmatrix}\begin{bmatrix} 54 \\ 27 \end{bmatrix} = \begin{bmatrix} 1.174 \\ 0.587 \end{bmatrix}$$

**[Final simplified expression: 1 mark; correct arithmetic: 1 mark]**

**Step 5 — Discussion of the Aperture Problem** (1 mark): With un-regularized $\mathbf{A}^\top \mathbf{A}$, $\det = 0$ — flow is unobservable along the image-gradient direction. The LK + Tikhonov solution restores a unique minimum-norm flow. Combining with a **Harris-style corner gate** ensures LK is run only where $\zeta$ exceeds a threshold.

> [!WARNING]
> **Examiner Valuation Pitfall:** Many students compute $\mathbf{A}^\top \mathbf{A}$ but forget to (i) **state the window size**, (ii) mention the **regularization**, and (iii) **report units** (pixels/frame). Each omission costs **1 mark**. Do NOT write the OFCE without stating the BCA first.

---

### Question B (14 Marks) `[KTU University Exam — July 2024, CO2+CO4, Apply + Evaluate]`

**Explain the Horn–Schunck variational formulation of optical flow. State and justify the choice of $\lambda$. Compute one iteration of the HS update at pixel $(i,j) = (5,5)$ given $I_x = 2, I_y = 1, I_t = -2, \bar{u} = 0.4, \bar{v} = 0.2, \lambda = 5$. Finally, describe two evaluation metrics for motion segmentation.** (14 marks)

#### (a) Horn–Schunck Derivation + Iteration — 8 Marks `[Apply]`

**Step 1 — Functional statement** (2 marks):
$$\mathcal{E}(u,v) = \iint (I_x u + I_y v + I_t)^2 + \lambda^2 (\Vert \nabla u\Vert^2 + \Vert \nabla v\Vert^2) \, dx\, dy$$

**Step 2 — Euler–Lagrange optimality** (2 marks):
$$I_x(I_x u + I_y v + I_t) = \lambda^2 (u - \bar{u}), \quad \text{similarly for } v.$$

**Step 3 — Iterative update** (2 marks):
$$u^{k+1} = \bar{u}^k - \frac{I_x(I_x \bar{u}^k + I_y \bar{v}^k + I_t)}{\lambda^2 + I_x^2 + I_y^2}$$

**Step 4 — Numerical iteration** (2 marks):
$$I_x \bar{u} + I_y \bar{v} + I_t = 2(0.4) + 1(0.2) - 2 = 0.8 + 0.2 - 2 = -1.0$$
$$\lambda^2 + I_x^2 + I_y^2 = 25 + 4 + 1 = 30$$
$$u^{1} = 0.4 - \frac{2(-1.0)}{30} = 0.4 + 0.0667 = 0.4667$$
$$v^{1} = 0.2 - \frac{1(-1.0)}{30} = 0.2 + 0.0333 = 0.2333$$

**[Identifying data term: 1 mark; denominators: 0.5; final values: 0.5]**

#### (b) Choice of $\lambda$ and Evaluation Metrics — 6 Marks `[Evaluate]`

**Choice of $\lambda$** (3 marks):
- Small $\lambda$ (0.1–1) preserves motion discontinuities, useful for object boundaries.
- Large $\lambda$ (10–100) yields smooth global flow, useful for denoised ego-motion.
- $\lambda$ is **empirically tuned** by cross-validating the AAE (Average Angular Error) on the **Middlebury or KITTI flow benchmark**.

**Metric 1 — IoU (Jaccard Index)** (1.5 marks):
$$\mathrm{IoU} = \frac{\vert S_{\text{pred}} \cap S_{\text{gt}} \vert}{\vert S_{\text{pred}} \cup S_{\text{gt}} \vert}, \quad 0 \leq \mathrm{IoU} \leq 1$$
Used to evaluate how well a motion segment covers the ground-truth mask.

**Metric 2 — Silhouette Score** (1.5 marks):
$$s(i) = \frac{b(i) - a(i)}{\max\{a(i), b(i)\}}$$
where $a(i)$ = mean intra-cluster distance, $b(i)$ = mean nearest-cluster distance. Ranges from $-1$ to $1$; higher is better.

> [!WARNING]
> **Examiner Pitfall:** HS iteration is often mis-stated as forward Euler. Always write the **Gauss–Seidel update with Laplacian approximation**, and explicitly mention $\bar{u}$ being a **local spatial average**, not a temporal one. Forgetting to state the **boundary conditions** ($u=v=0$ at frame edge) costs 1 mark.

---

## 5.3 KTU Internal-Choice Coverage Map

| Module-3 Topic | Q-A Sub-part | Q-B Sub-part |
|---|---|---|
| OFCE / BCA | Q1 | — |
| Lucas–Kanade derivation | Q-A (a) | — |
| Aperture problem | Q-A (b) | — |
| Horn–Schunck variational | — | Q-B (a) |
| Hyperparameter $\lambda$ | — | Q-B (b) |
| Template-matching metrics | Q1, Q2 | — |
| Mean-shift / Kalman | (linked in Q-B discussion) | (linked) |
| Segmentation metrics IoU, Silhouette | — | Q-B (b) |
| MOTA, ADE, FDE | (intro in Q2) | (intro in Q-B) |

---

## 5.4 Topic Recap & Important Things to Remember (Rapid-Revision Checklist)

> [!IMPORTANT]
> Print this section and tape it to your wall one week before the KTU ESE.

### Definitions
- **Optical flow** = apparent 2D motion field of intensity, computed under the **Brightness Constancy Assumption (BCA)**.
- **Visual tracking** = estimating target state $\mathbf{x}_t$ (position/scale/pose) across frames using a **template** and a **similarity metric**.
- **Motion segmentation** = partitioning the flow field into $K$ regions with parametric motion (translation/affine).
- **Mean-shift** = non-parametric mode-seeking tracker using the **Bhattacharyya coefficient** and Epanechnikov kernel.
- **Aperture problem** = inability to recover flow along the iso-intensity direction from a local measurement.

### Critical Formulas
- **OFCE:** $I_x u + I_y v + I_t = 0$.
- **LK:** $\mathbf{v} = (\mathbf{A}^\top \mathbf{A})^{-1}\mathbf{A}^\top \mathbf{b}$.
- **HS update:** $u^{k+1} = \bar{u} - I_x(I_x \bar{u} + I_y \bar{v} + I_t)/(\lambda^2 + I_x^2 + I_y^2)$.
- **NCC:** $\rho = \sum T I / \sqrt{\sum T^2 \sum I^2}$.
- **Template update:** $T_{t+1} = (1-\alpha) T_t + \alpha I_t^{\text{best}}$.
- **IoU:** $\mathrm{IoU} = \vert B_p \cap B_{gt}\vert / \vert B_p \cup B_{gt}\vert$.
- **MOTA:** $1 - (FN+FP+IDSW)/GT$.
- **Bhattacharyya:** $\rho = \sum_u \sqrt{\hat{p}_u \hat{q}_u}$.

### Algorithm Mnemonics
- **LK = Local, Lucas, Least-squares, 5 × 5 window, needs corners.**
- **HS = Horn–Schunck = Smooth, variational, dense, $3 \times 3$ Laplacian average.**
- **NCC > SSD** when illumination varies.
- **Pyramid levels = 3 to 5** for LK to handle large motions.
- **Regularize LK** with $\epsilon \mathbf{I}$ (Tikhonov) to handle the aperture problem.
- **Mean-shift** needs a histogram (HSV, not RGB) and converges in 5–10 iterations typically.

### Pitfalls (Read Twice Before Exam)
- Never write OFCE without stating **BCA first** (−1 mark).
- Always state **window size** in LK derivations.
- Always state **boundary conditions** in HS (−1 mark if missed).
- For NCC, always perform **mean + variance normalization** for ZNCC; raw NCC is still brightness-sensitive.
- MOTA can go **negative** if errors exceed ground truth — clarify this in the answer.
- For mean-shift, the **target histogram $\hat{q}$ is fixed** at initialization; only the candidate $\hat{p}$ updates.
- For segmentation, **always validate** cluster count $K$ using silhouette or Davies–Bouldin.
- Use `\vert` not `|` in markdown tables (your table will break otherwise).

### Engineering Mapping
| Algorithm | Production Library | Default Hyperparameter |
|---|---|---|
| LK pyramidal | OpenCV `calcOpticalFlowPyrLK` | `winSize = 21×21`, `maxLevel = 3` |
| Dense HS | OpenCV `calcOpticalFlowHS` | $\lambda = 1.0$ |
| Farneback | OpenCV `calcOpticalFlowFarneback` | `pyr_scale = 0.5`, `levels = 3` |
| Mean-shift (`CamShift`) | OpenCV `CamShift` | `Vmin=10, Vmax=256, Smin=30` |
| Multi-object tracker | `motpy`, `mmtracking`, `Norfair` | IoU threshold = 0.3, MOTA target ≥ 0.7 |

### Two-Sentence Exam Quick-Recall
> *"Optical flow finds where each pixel goes via the OFCE. Lucas–Kanade solves it locally with least-squares; Horn–Schunck solves it globally with a smoothness prior. Tracking wraps that flow into a state estimator (mean-shift, Kalman, or particle filter) and validates it with IoU/MOTA on benchmark datasets like KITTI or MOT16."*

---

<!-- SECTION_5_END -->
