# A case study to compare performance of various models on a suitable dataset.

<!-- SECTION_1_START -->
# 4.X A Case Study to Compare Performance of Various Models on a Suitable Dataset

> [!IMPORTANT]
> **KTU 2024 Scheme | PECST745 | Module 4 | Core Competency:** Model Evaluation & Benchmarking in Computer Vision. This topic integrates the entire segmentation & detection module by demanding a **systematic empirical comparison** of architectures on standardized benchmarks — a skill directly tested in KTU Part B questions.

---

## 1.1 Formal Academic Definition

**Model Performance Comparison (Benchmarking)** is the rigorous, experimental process of evaluating multiple computer vision architectures under **identical conditions** — same dataset, same train/validation/test split, same hardware, and same evaluation protocol — to objectively quantify trade-offs between **accuracy, computational cost, and inference latency**.

In the KTU 2024 Computer Vision syllabus, a *case study* mandates that the student:
1. Selects a **public benchmark dataset** (e.g., PASCAL VOC 2012, COCO 2017, Cityscapes, CamVid).
2. Identifies **at least three state-of-the-art models** spanning semantic segmentation, instance segmentation, and/or object detection paradigms.
3. Evaluates them using **standardized metrics** (mIoU, Dice, mAP, FPS, Params, FLOPs).
4. Performs a **critical trade-off analysis** (accuracy vs. speed vs. memory).

---

## 1.2 Intuitive Conceptual Analogy

> [!NOTE]
> **Analogy — "The Grand Prix of Vision Models"**
>
> Imagine five racing cars lined up at the same starting line (a shared dataset). Each car represents a different model — U-Net, DeepLabV3+, SegNet, Mask R-CNN, YOLOv8. The racetrack is the **test set** they have never seen during training. The stopwatch measures **speed (FPS/inference time)**, the fuel gauge measures **efficiency (FLOPs / Params)**, and the lap-precision tracker measures **accuracy (mIoU / mAP)**.
>
> A "case study" is the post-race report: it does **not** crown a universal winner, but instead answers: *"Which car wins the Nürburgring (accuracy)? Which one wins Monaco (speed)? Which one offers the best fuel economy (efficiency) for a city commute (edge deployment)?"* Just as a Ferrari F1 car is unusable on a muddy village road, a 500M-parameter DeepLab model is unusable on a smartphone — and the case study reveals this.

---

## 1.3 Why This Topic Exists in the KTU Syllabus

Modern computer vision engineers do **not** invent architectures from scratch for every project. They **select** pre-trained models based on empirical benchmarks. The case-study exercise trains students in:
- Reading and producing **benchmark tables** (like those in the COCO Leaderboard).
- Understanding the **accuracy-efficiency frontier** (Pareto-optimal models).
- Defending a model choice with quantitative evidence — a core engineering skill.

> [!TIP]
> **Production Insight:** Companies like Tesla (autonomous driving), Apple (FaceID, Photos), and Google (Google Lens) all perform exactly this kind of case study internally to choose between YOLOv8, RT-DETR, EfficientDet, and Mask R-CNN for their edge-cloud pipeline.

---

## 1.4 Visualization Control — IoU Geometric Intuition

> [!VISUALIZATION CONTROL]
> **Concept:** Intersection over Union (IoU) — the foundational accuracy metric for every segmentation & detection model.
>
> **GeoGebra / Desmos Input Equations:**
> * `R1: rectangle (x, y) with corners (0, 0) and (4, 3)`  *(Ground Truth box / mask)*
> * `R2: rectangle (x, y) with corners (2, 1) and (6, 5)`  *(Predicted box / mask)*
> * `Intersection: x ∈ [2, 4], y ∈ [1, 3]`
> * `Union Area: A(R1) + A(R2) - A(Intersection)`
>
> **Visual Description:** Two overlapping rectangles on the $xy$-plane. The shaded overlap region is the *Intersection*. The total area covered by either rectangle is the *Union*. As the predicted box slides over the ground truth, the student should observe $\text{IoU} \in [0, 1]$, with $\text{IoU} = 1$ only when boxes are perfectly coincident.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Anatomy of a Case Study — The Five Pillars

A KTU-grade case study must address **five structural pillars**:

### Pillar 1 — The Dataset
- **Image classification/detection:** PASCAL VOC 2007/2012 (20 classes), MS-COCO 2017 (80 classes), ImageNet.
- **Semantic segmentation:** PASCAL VOC (21 classes), ADE20K (150 classes), Cityscapes (19 classes for autonomous driving).
- **Instance segmentation:** COCO (80 classes, with instance-level masks).
- **Selection criteria:** domain relevance, number of classes, image resolution, annotation quality, public availability.

### Pillar 2 — The Models
Select models that **span the architectural spectrum**:

| Paradigm | Representative Models | Backbone |
| :--- | :--- | :--- |
| Semantic Seg (encoder-decoder) | FCN, SegNet, **U-Net** | VGG-16 / ResNet |
| Semantic Seg (atrous/dilated) | **DeepLabV3+**, PSPNet | ResNet-101 / Xception |
| Real-time Seg | **STDC**, BiSeNet, DDRNet | Custom lightweight CNNs |
| Two-stage Detection | R-CNN, Fast R-CNN, **Faster R-CNN** | VGG / ResNet |
| One-stage Detection | **YOLO** (v3–v8), **SSD**, RetinaNet | Darknet / ResNet |
| Transformer-based | **DETR**, Mask2Former, SegFormer | ViT / Swin Transformer |

### Pillar 3 — The Metrics (Detailed)
See the formula sheet below.

### Pillar 4 — The Hardware & Inference Protocol
- Identical GPU (e.g., NVIDIA V100 / A100) and identical batch size.
- Use **single-scale inference** and **no test-time augmentation** for fair comparison (TTA inflates mIoU by 1–3%).

### Pillar 5 — The Trade-off Analysis
- **Accuracy vs. Speed** (mIoU vs. FPS)
- **Accuracy vs. Memory** (mIoU vs. Params / FLOPs)
- **Generalization vs. Specialization** (cross-dataset transfer)

---

## 2.2 The Critical Metrics — Theory

### 2.2.1 Confusion Matrix at the Pixel Level
For segmentation, each pixel is classified into one of $C$ classes. The **confusion matrix** is $C \times C$:

$$n_{ij} = \text{number of pixels of true class } i \text{ predicted as class } j$$

- $n_{ii}$ → True Positives (diagonal).
- $\sum_{j \neq i} n_{ij}$ → False Negatives (FN).
- $\sum_{i \neq j} n_{ij}$ → False Positives (FP).

### 2.2.2 Intersection over Union (IoU / Jaccard Index)
$$\text{IoU}_i = \frac{n_{ii}}{\sum_{j} n_{ij} + \sum_{j} n_{ji} - n_{ii}} = \frac{\text{TP}_i}{\text{TP}_i + \text{FP}_i + \text{FN}_i}$$

For bounding boxes:
$$\text{IoU}_{\text{box}} = \frac{\text{Area}(B_{\text{pred}} \cap B_{\text{gt}})}{\text{Area}(B_{\text{pred}} \cup B_{\text{gt}})}$$

### 2.2.3 Mean IoU (mIoU)
Average IoU across all $C$ classes:
$$\text{mIoU} = \frac{1}{C} \sum_{i=1}^{C} \text{IoU}_i$$

### 2.2.4 Dice Coefficient (F1-Score for Segmentation)
$$D_i = \frac{2 \cdot \text{TP}_i}{2 \cdot \text{TP}_i + \text{FP}_i + \text{FN}_i} = \frac{2 \cdot \vert P_i \cap G_i \vert}{\vert P_i \vert + \vert G_i \vert}$$

**Relation to IoU:**
$$D = \frac{2 \cdot \text{IoU}}{1 + \text{IoU}} \quad \Longleftrightarrow \quad \text{IoU} = \frac{D}{2 - D}$$

### 2.2.5 Mean Average Precision (mAP) for Detection
1. Sort all predictions by descending confidence.
2. Compute Precision-Recall curve per class.
3. $\text{AP}_i = \int_0^1 P(R) \, dR$ (area under P-R curve, using 11-point or all-point interpolation).
4. $\text{mAP} = \frac{1}{C} \sum_{i=1}^{C} \text{AP}_i$

For COCO, AP is averaged over $\text{IoU} \in \{0.50, 0.55, \dots, 0.95\}$.

### 2.2.6 Efficiency Metrics
- **Params:** Total trainable parameters (memory footprint).
- **FLOPs:** Floating Point Operations (computational cost).
- **FPS:** Frames Per Second at inference (real-time capability).
- **Latency:** Time-to-first-prediction (responsiveness).

---

## 2.3 KTU Formula Sheet / Cheat Sheet

> [!NOTE]
> **Master these 8 equations — they cover 95% of KTU exam numericals on this topic.**

| # | Metric | Formula | Range | Best For |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Pixel Accuracy | $\frac{\sum_i n_{ii}}{\sum_i \sum_j n_{ij}}$ | $[0, 1]$ | Balanced classes |
| 2 | Mean Accuracy | $\frac{1}{C} \sum_i \frac{n_{ii}}{\sum_j n_{ij}}$ | $[0, 1]$ | Class-imbalanced sets |
| 3 | IoU (per class) | $\frac{\text{TP}}{\text{TP} + \text{FP} + \text{FN}}$ | $[0, 1]$ | Spatial overlap |
| 4 | mIoU | $\frac{1}{C} \sum_{i=1}^{C} \text{IoU}_i$ | $[0, 1]$ | Semantic seg. benchmark |
| 5 | Dice / F1 | $\frac{2 \cdot \text{TP}}{2 \cdot \text{TP} + \text{FP} + \text{FN}}$ | $[0, 1]$ | Medical imaging |
| 6 | Precision | $\frac{\text{TP}}{\text{TP} + \text{FP}}$ | $[0, 1]$ | Detection confidence |
| 7 | Recall | $\frac{\text{TP}}{\text{TP} + \text{FN}}$ | $[0, 1]$ | Miss rate analysis |
| 8 | mAP | $\frac{1}{C} \sum_c \text{AP}_c$ | $[0, 1]$ | Object detection benchmark |
| 9 | FPS | $\frac{1}{T_{\text{infer}}}$ | $\geq 0$ | Real-time systems |
| 10 | IoU-Dice link | $D = \frac{2 \cdot \text{IoU}}{1 + \text{IoU}}$ | — | Conversion problems |

---

## 2.4 Real-World Engineering Utility

| Industry | Use Case | Preferred Model | Driving Metric |
| :--- | :--- | :--- | :--- |
| Autonomous Driving | Drivable area, lane seg. | DDRNet, SegFormer | mIoU + FPS $\geq$ 30 |
| Medical Imaging | Tumor segmentation | U-Net, nnU-Net | Dice score |
| Retail Analytics | Shelf product detection | YOLOv8-nano | mAP50 + FPS |
| Satellite Imagery | Building footprint | Mask R-CNN | mAP @ IoU 0.5–0.75 |
| AR/VR | Real-time depth + seg. | MobileNetV3-DeepLab | Params $\leq$ 5M |

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Code Implementation

## 3.1 Worked Numerical: IoU Computation from Confusion Matrix

> [!IMPORTANT]
> **KTU Board Pattern:** *"Given a 3-class confusion matrix, compute pixel accuracy, mean accuracy, IoU per class, and mIoU."* This is a high-frequency 7-mark sub-question.

### Problem Statement
A semantic segmentation model on a 3-class dataset (Background, Road, Car) produces the following pixel-level confusion matrix $N$:

$$
N = \begin{bmatrix} 70 & 5 & 5 \\ 10 & 80 & 10 \\ 10 & 10 & 50 \end{bmatrix}
$$

where $n_{ij}$ = pixels (in hundreds) of true class $i$ predicted as class $j$. Compute:
(a) Pixel Accuracy, (b) Mean Accuracy, (c) IoU per class, (d) mIoU.

### Solution — Step-by-Step

**Step 1 — Identify totals (Sum of rows = total actual pixels of class $i$):**

$$
\begin{aligned}
\text{Row}_1 &= 70 + 5 + 5 = 80 \quad (\text{Background total}) \\
\text{Row}_2 &= 10 + 80 + 10 = 100 \quad (\text{Road total}) \\
\text{Row}_3 &= 10 + 10 + 50 = 70 \quad (\text{Car total})
\end{aligned}
$$

**Step 2 — Column sums (Sum of columns = total predicted pixels of class $j$):**

$$
\begin{aligned}
\text{Col}_1 &= 70 + 10 + 10 = 90 \\
\text{Col}_2 &= 5 + 80 + 10 = 95 \\
\text{Col}_3 &= 5 + 10 + 50 = 65
\end{aligned}
$$

**Step 3 — Part (a) Pixel Accuracy:**

$$
\text{PA} = \frac{\text{Trace}(N)}{\text{Sum}(N)} = \frac{70 + 80 + 50}{80 + 100 + 70} = \frac{200}{250} = 0.80
$$

**Step 4 — Part (b) Mean Accuracy (per-class recall averaged):**

$$
\begin{aligned}
\text{Acc}_1 &= \frac{n_{11}}{\text{Row}_1} = \frac{70}{80} = 0.875 \\
\text{Acc}_2 &= \frac{n_{22}}{\text{Row}_2} = \frac{80}{100} = 0.800 \\
\text{Acc}_3 &= \frac{n_{33}}{\text{Row}_3} = \frac{50}{70} \approx 0.714 \\
\text{MeanAcc} &= \frac{0.875 + 0.800 + 0.714}{3} = \frac{2.389}{3} \approx 0.796
\end{aligned}
$$

**Step 5 — Part (c) IoU per class (using formula $\text{IoU}_i = \frac{n_{ii}}{\text{Row}_i + \text{Col}_i - n_{ii}}$):**

$$
\begin{aligned}
\text{IoU}_1 &= \frac{70}{80 + 90 - 70} = \frac{70}{100} = 0.70 \\
\text{IoU}_2 &= \frac{80}{100 + 95 - 80} = \frac{80}{115} \approx 0.696 \\
\text{IoU}_3 &= \frac{50}{70 + 65 - 50} = \frac{50}{85} \approx 0.588
\end{aligned}
$$

**Step 6 — Part (d) mIoU:**

$$
\text{mIoU} = \frac{0.70 + 0.696 + 0.588}{3} = \frac{1.984}{3} \approx 0.6613
$$

**Final Answer Box:**
- Pixel Accuracy = **0.80**
- Mean Accuracy = **0.796**
- IoU: Background = 0.700, Road = 0.696, Car = 0.588
- **mIoU = 0.6613 (66.13%)**

---

## 3.2 Worked Numerical: IoU ↔ Dice Conversion

**Given:** A tumor segmentation model achieves $\text{IoU} = 0.75$. Find the Dice score.

$$
D = \frac{2 \cdot \text{IoU}}{1 + \text{IoU}} = \frac{2 \times 0.75}{1 + 0.75} = \frac{1.50}{1.75} \approx 0.857
$$

**Verification (reverse):**
$$
\text{IoU} = \frac{D}{2 - D} = \frac{0.857}{2 - 0.857} = \frac{0.857}{1.143} = 0.75 \quad \checkmark
$$

---

## 3.3 Worked Numerical: Bounding-Box IoU

**Given:**
- Ground-truth box $B_{\text{gt}} = (x_1, y_1, x_2, y_2) = (10, 10, 50, 50)$
- Predicted box $B_{\text{p}} = (30, 30, 70, 70)$

**Step 1 — Intersection coordinates:**
$$
x_{\text{left}} = \max(10, 30) = 30, \quad x_{\text{right}} = \min(50, 70) = 50
$$
$$
y_{\text{top}} = \max(10, 30) = 30, \quad y_{\text{bottom}} = \min(50, 70) = 50
$$

**Step 2 — Intersection area:**
$$
A_{\cap} = (50 - 30) \times (50 - 30) = 20 \times 20 = 400
$$

**Step 3 — Individual areas:**
$$
A_{\text{gt}} = (50-10) \times (50-10) = 1600, \quad A_{\text{p}} = (70-30) \times (70-30) = 1600
$$

**Step 4 — Union area:**
$$
A_{\cup} = 1600 + 1600 - 400 = 2800
$$

**Step 5 — IoU:**
$$
\text{IoU} = \frac{400}{2800} \approx 0.1429
$$

Since $\text{IoU} < 0.5$, this is a **False Positive** under standard PASCAL VOC threshold.

---

## 3.4 Production-Grade Python Implementation: Model Comparison Toolkit

> [!TIP]
> **Exam Strategy:** Writing this script in the lab exam or theory part (b) immediately signals examiner-engineer status. Add type hints, error handling, and clear logging for full marks.

```python
"""
============================================================================
KTU PECST745 - Module 4 Case Study
Model Performance Comparison Toolkit
Author: KTU Premier Engine V10 Reference Implementation
============================================================================
Compares semantic segmentation & object detection models on a unified
benchmark, producing a case-study report (Pandas DataFrame + CSV).
============================================================================
"""

from __future__ import annotations

import time
from dataclasses import dataclass, field, asdict
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import numpy as np
import pandas as pd


# ---------------------------------------------------------------------------
# 1. Metric Computation Module
# ---------------------------------------------------------------------------

@dataclass(frozen=True)
class SegmentationMetrics:
    """Container for segmentation metrics computed from a confusion matrix."""
    pixel_accuracy: float
    mean_accuracy: float
    iou_per_class: Dict[str, float]
    miou: float
    dice_per_class: Dict[str, float]
    mean_dice: float


def compute_confusion_matrix(
    y_true: np.ndarray,
    y_pred: np.ndarray,
    num_classes: int,
) -> np.ndarray:
    """
    Build a [num_classes x num_classes] confusion matrix from flattened masks.

    Parameters
    ----------
    y_true : np.ndarray of shape (H, W), dtype=int
        Ground-truth integer label map.
    y_pred : np.ndarray of shape (H, W), dtype=int
        Predicted integer label map.
    num_classes : int
        Total number of valid class labels (e.g., 21 for PASCAL VOC).

    Returns
    -------
    np.ndarray of shape (num_classes, num_classes)
        Confusion matrix where entry [i, j] is the count of pixels
        with true label i predicted as label j.
    """
    if y_true.shape != y_pred.shape:
        raise ValueError(
            f"Shape mismatch: y_true {y_true.shape} vs y_pred {y_pred.shape}"
        )
    # Mask out invalid labels (negative or >= num_classes)
    valid_mask = (y_true >= 0) & (y_true < num_classes) & \
                 (y_pred >= 0) & (y_pred < num_classes)
    y_true_v = y_true[valid_mask].astype(np.int64)
    y_pred_v = y_pred[valid_mask].astype(np.int64)
    indices = y_true_v * num_classes + y_pred_v
    cm = np.bincount(indices, minlength=num_classes ** 2)
    return cm.reshape(num_classes, num_classes)


def compute_iou(cm: np.ndarray) -> np.ndarray:
    """
    Compute per-class IoU from a confusion matrix.

    IoU_i = n_ii / (row_sum_i + col_sum_i - n_ii)
    Classes with zero ground-truth and zero predictions receive IoU = NaN,
    which is then excluded from the mean.
    """
    tp = np.diag(cm).astype(np.float64)
    row_sum = cm.sum(axis=1).astype(np.float64)
    col_sum = cm.sum(axis=0).astype(np.float64)
    denom = row_sum + col_sum - tp
    iou = np.where(denom > 0, tp / np.maximum(denom, 1e-10), np.nan)
    return iou


def compute_dice_from_iou(iou: np.ndarray) -> np.ndarray:
    """Convert IoU per class to Dice coefficient: D = 2*IoU / (1 + IoU)."""
    with np.errstate(divide="ignore", invalid="ignore"):
        dice = np.where(~np.isnan(iou), (2.0 * iou) / (1.0 + iou), np.nan)
    return dice


def compute_segmentation_metrics(
    y_true: np.ndarray,
    y_pred: np.ndarray,
    num_classes: int,
    class_names: Optional[List[str]] = None,
) -> SegmentationMetrics:
    """End-to-end computation of all segmentation metrics."""
    cm = compute_confusion_matrix(y_true, y_pred, num_classes)
    total = cm.sum()
    tp = np.diag(cm).astype(np.float64)
    row_sum = cm.sum(axis=1).astype(np.float64)
    col_sum = cm.sum(axis=0).astype(np.float64)

    pixel_accuracy = float(tp.sum() / total) if total > 0 else 0.0

    # Per-class recall (mean accuracy)
    per_class_recall = np.where(row_sum > 0, tp / np.maximum(row_sum, 1e-10), 0.0)
    mean_accuracy = float(per_class_recall.mean())

    iou = compute_iou(cm)
    miou = float(np.nanmean(iou))

    dice = compute_dice_from_iou(iou)
    mean_dice = float(np.nanmean(dice))

    names = class_names or [f"class_{i}" for i in range(num_classes)]
    return SegmentationMetrics(
        pixel_accuracy=pixel_accuracy,
        mean_accuracy=mean_accuracy,
        iou_per_class={n: float(v) for n, v in zip(names, iou)},
        miou=miou,
        dice_per_class={n: float(v) for n, v in zip(names, dice)},
        mean_dice=mean_dice,
    )


# ---------------------------------------------------------------------------
# 2. Bounding-Box IoU (for object detection)
# ---------------------------------------------------------------------------

def compute_box_iou(
    boxes_a: np.ndarray,
    boxes_b: np.ndarray,
) -> np.ndarray:
    """
    Compute pairwise IoU between two sets of axis-aligned bounding boxes.

    Parameters
    ----------
    boxes_a : np.ndarray of shape (N, 4) in (x1, y1, x2, y2) format
    boxes_b : np.ndarray of shape (M, 4) in (x1, y1, x2, y2) format

    Returns
    -------
    np.ndarray of shape (N, M) — IoU matrix.
    """
    if boxes_a.size == 0 or boxes_b.size == 0:
        return np.zeros((boxes_a.shape[0], boxes_b.shape[0]), dtype=np.float64)

    a = boxes_a[:, None, :]   # (N, 1, 4)
    b = boxes_b[None, :, :]   # (1, M, 4)

    inter_x1 = np.maximum(a[..., 0], b[..., 0])
    inter_y1 = np.maximum(a[..., 1], b[..., 1])
    inter_x2 = np.minimum(a[..., 2], b[..., 2])
    inter_y2 = np.minimum(a[..., 3], b[..., 3])

    inter_w = np.clip(inter_x2 - inter_x1, a_min=0, a_max=None)
    inter_h = np.clip(inter_y2 - inter_y1, a_min=0, a_max=None)
    inter_area = inter_w * inter_h

    area_a = (a[..., 2] - a[..., 0]) * (a[..., 3] - a[..., 1])
    area_b = (b[..., 2] - b[..., 0]) * (b[..., 3] - b[..., 1])
    union_area = area_a + area_b - inter_area

    return inter_area / np.maximum(union_area, 1e-10)


# ---------------------------------------------------------------------------
# 3. Efficiency Measurement (Params, FLOPs, FPS)
# ---------------------------------------------------------------------------

@dataclass
class ModelProfile:
    """Records the efficiency footprint of a candidate model."""
    name: str
    params_millions: float
    flops_giga: float
    fps_gpu: float
    latency_ms: float
    backbone: str
    family: str  # e.g. "Encoder-Decoder", "Atrous CNN", "Transformer"
    notes: str = ""


def measure_inference_speed(
    model_forward_fn,
    input_shape: Tuple[int, int, int, int] = (1, 3, 512, 512),
    warmup: int = 10,
    iterations: int = 100,
) -> float:
    """
    Measure inference FPS by repeatedly invoking a forward-pass callable.

    NOTE: This is a CPU-friendly wrapper. For GPU, use torch.cuda.Event
    synchronization; for benchmarking, see torch.utils.benchmark.
    """
    import torch
    dummy = torch.randn(*input_shape)
    # Warmup
    for _ in range(warmup):
        _ = model_forward_fn(dummy)
    # Timed
    start = time.perf_counter()
    for _ in range(iterations):
        _ = model_forward_fn(dummy)
    elapsed = time.perf_counter() - start
    return iterations / elapsed


# ---------------------------------------------------------------------------
# 4. Case-Study Aggregator
# ---------------------------------------------------------------------------

@dataclass
class CaseStudyResult:
    model: str
    backbone: str
    params_M: float
    flops_G: float
    fps: float
    miou: float
    mAP_50: float
    mAP_50_95: float
    dataset: str
    verdict: str = ""


def generate_case_study_table(
    results: List[CaseStudyResult],
    output_csv: Optional[Path] = None,
) -> pd.DataFrame:
    """Convert case-study results into a sorted, KTU-style benchmark table."""
    df = pd.DataFrame([asdict(r) for r in results])
    df = df.sort_values(by="mAP_50_95", ascending=False).reset_index(drop=True)
    if output_csv is not None:
        df.to_csv(output_csv, index=False)
    return df


# ---------------------------------------------------------------------------
# 5. Demonstration Run (reproducible example for KTU lab/journal)
# ---------------------------------------------------------------------------

if __name__ == "__main__":

    # ----- (a) Worked IoU on 3-class confusion matrix -----
    print("=" * 70)
    print("DEMO 1: Confusion-Matrix → mIoU pipeline")
    print("=" * 70)
    cm_demo = np.array([
        [70,  5,  5],
        [10, 80, 10],
        [10, 10, 50],
    ], dtype=np.float64)

    # Reconstruct dummy label maps from CM (for demonstration)
    y_true = np.concatenate([np.full(80, 0), np.full(100, 1), np.full(70, 2)])
    y_pred = np.concatenate([
        np.full(70, 0), np.full(5, 1), np.full(5, 2),       # class 0
        np.full(10, 0), np.full(80, 1), np.full(10, 2),     # class 1
        np.full(10, 0), np.full(10, 1), np.full(50, 2),     # class 2
    ])
    metrics = compute_segmentation_metrics(
        y_true, y_pred, num_classes=3,
        class_names=["Background", "Road", "Car"],
    )
    print(f"Pixel Accuracy : {metrics.pixel_accuracy:.4f}")
    print(f"Mean Accuracy  : {metrics.mean_accuracy:.4f}")
    print(f"Per-class IoU  : {metrics.iou_per_class}")
    print(f"mIoU           : {metrics.miou:.4f}")
    print(f"Per-class Dice : {metrics.dice_per_class}")
    print(f"Mean Dice      : {metrics.mean_dice:.4f}")

    # ----- (b) Bounding-Box IoU -----
    print("\n" + "=" * 70)
    print("DEMO 2: Bounding-Box IoU (Detection)")
    print("=" * 70)
    gt_boxes = np.array([[10, 10, 50, 50]], dtype=np.float64)
    pred_boxes = np.array([[30, 30, 70, 70]], dtype=np.float64)
    iou_matrix = compute_box_iou(gt_boxes, pred_boxes)
    print(f"IoU(gt, pred) = {iou_matrix[0, 0]:.4f}  "
          f"(< 0.5 ⇒ False Positive at PASCAL threshold)")

    # ----- (c) Case-Study Table for a real benchmark -----
    print("\n" + "=" * 70)
    print("DEMO 3: Cityscapes Semantic-Segmentation Case Study")
    print("=" * 70)
    case_results = [
        CaseStudyResult(
            model="DeepLabV3+", backbone="ResNet-101", params_M=62.7,
            flops_G=1521.0, fps=4.9, miou=0.821, mAP_50=0.0, mAP_50_95=0.0,
            dataset="Cityscapes", verdict="Highest accuracy, slow.",
        ),
        CaseStudyResult(
            model="SegFormer-B5", backbone="MiT-B5", params_M=84.7,
            flops_G=1460.0, fps=15.2, miou=0.821, mAP_50=0.0, mAP_50_95=0.0,
            dataset="Cityscapes", verdict="Accuracy ≈ DeepLab, 3× faster.",
        ),
        CaseStudyResult(
            model="DDRNet-23-slim", backbone="Custom", params_M=5.7,
            flops_G=36.3, fps=108.0, miou=0.778, mAP_50=0.0, mAP_50_95=0.0,
            dataset="Cityscapes", verdict="Real-time, edge-deployable.",
        ),
        CaseStudyResult(
            model="BiSeNetV2", backbone="Custom", params_M=3.4,
            flops_G=21.0, fps=156.0, miou=0.756, mAP_50=0.0, mAP_50_95=0.0,
            dataset="Cityscapes", verdict="Ultra-light, slight accuracy drop.",
        ),
    ]
    table = generate_case_study_table(
        case_results, output_csv=Path("cityscapes_case_study.csv")
    )
    print(table.to_string(index=False))
```

---

## 3.5 Worked Numerical: Average Precision (AP) from Precision-Recall Pairs

> [!NOTE]
> This is the **11-point interpolation** method, frequently asked in KTU theory.

**Given Precision-Recall pairs (sorted by recall ascending):**
$(R, P) = (0, 1.0), (0.1, 0.9), (0.2, 0.85), (0.3, 0.8), (0.4, 0.7), (0.5, 0.6), (0.6, 0.5), (0.7, 0.4), (0.8, 0.3), (0.9, 0.2), (1.0, 0.1)$

**Step 1 — For each recall level $r \in \{0, 0.1, \dots, 1.0\}$, take the maximum precision at any recall $\geq r$:**

| $r$ | $\max P(R' \geq r)$ |
| :---: | :---: |
| 0.0 | 1.0 |
| 0.1 | 0.9 |
| 0.2 | 0.85 |
| 0.3 | 0.8 |
| 0.4 | 0.7 |
| 0.5 | 0.6 |
| 0.6 | 0.5 |
| 0.7 | 0.4 |
| 0.8 | 0.3 |
| 0.9 | 0.2 |
| 1.0 | 0.1 |

**Step 2 — Average:**
$$
\text{AP} = \frac{1}{11} \sum_{r \in \{0, 0.1, \dots, 1.0\}} P_{\text{interp}}(r) = \frac{6.45}{11} \approx 0.586
$$

**Final AP = 0.586 (58.6%)** for that class.

---

## 3.6 Architecture Comparison Cheat Table (Reference for Case-Study Answers)

> [!NOTE]
> **Memorize at least 3 rows of this table — examiners often ask "Compare DeepLabV3+ and U-Net on PASCAL VOC."**

| Model | Backbone | Params (M) | FLOPs (G) | mIoU (VOC) | mIoU (City) | FPS (V100) | Strength |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| FCN-8s | VGG-16 | 134 | 142 | 62.7 | — | 5 | Foundational baseline |
| SegNet | VGG-16 | 29.5 | 286 | 59.9 | 57.0 | 16 | Memory-efficient |
| U-Net | Custom | 31.0 | 232 | — | — | 25 | Medical imaging standard |
| DeepLabV3+ | Xception | 41.2 | 695 | 89.0 | 82.1 | 8 | High accuracy, large models |
| PSPNet | ResNet-101 | 65.7 | 1800 | 85.4 | 81.2 | 4 | Global context |
| SegFormer-B5 | MiT-B5 | 84.7 | 1460 | — | 82.1 | 15 | Transformer efficiency |
| DDRNet-23 | Custom | 5.7 | 36 | — | 77.8 | 108 | Real-time edge |
| BiSeNetV2 | Custom | 3.4 | 21 | — | 75.6 | 156 | Ultra-lightweight |

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Mermaid Diagram — Case-Study Methodology Flow

```mermaid
flowchart TD
    start([Start Case Study]) --> ds{Select Dataset}
    ds --> ds1[PASCAL VOC]
    ds --> ds2[MS COCO]
    ds --> ds3[Cityscapes]
    ds --> ds4[ADE20K]

    ds1 --> mdl{Choose Models}
    ds2 --> mdl
    ds3 --> mdl
    ds4 --> mdl

    mdl --> mdlA[Semantic Seg Models]
    mdl --> mdlB[Instance Seg Models]
    mdl --> mdlC[Detection Models]

    mdlA --> mdlA1[FCN]
    mdlA --> mdlA2[U-Net]
    mdlA --> mdlA3[SegNet]
    mdlA --> mdlA4[DeepLabV3+]
    mdlA --> mdlA5[SegFormer]

    mdlB --> mdlB1[Mask R-CNN]
    mdlB --> mdlB2[YOLACT]
    mdlB --> mdlB3[SOLO]

    mdlC --> mdlC1[Faster R-CNN]
    mdlC --> mdlC2[RetinaNet]
    mdlC --> mdlC3[YOLOv8]
    mdlC --> mdlC4[DETR]

    mdlA1 --> train[Train on Identical Splits]
    mdlA2 --> train
    mdlA3 --> train
    mdlA4 --> train
    mdlA5 --> train
    mdlB1 --> train
    mdlB2 --> train
    mdlB3 --> train
    mdlC1 --> train
    mdlC2 --> train
    mdlC3 --> train
    mdlC4 --> train

    train --> infer[Inference on Test Set]
    infer --> metric1[Accuracy Metrics]
    infer --> metric2[Efficiency Metrics]

    metric1 --> acc1[mIoU]
    metric1 --> acc2[Dice]
    metric1 --> acc3[mAP]
    metric1 --> acc4[Pixel Accuracy]

    metric2 --> eff1[Params M]
    eff2 --> eff1
    eff2 --> eff2a[FLOPs G]
    metric2 --> eff3[FPS Latency]

    acc1 --> tab[Benchmark Table]
    acc2 --> tab
    acc3 --> tab
    acc4 --> tab
    eff1 --> tab
    eff2a --> tab
    eff3 --> tab

    tab --> trade{Pareto Trade-off Analysis}
    trade --> t1[Accuracy vs Speed]
    trade --> t2[Accuracy vs Memory]
    trade --> t3[Cross-dataset Generalization]

    t1 --> verdict[Final Verdict and Model Recommendation]
    t2 --> verdict
    t3 --> verdict

    verdict --> end([Publish Case Study Report])
```

## 4.2 Mermaid Diagram — Metric Computation Block Architecture

```mermaid
flowchart LR
    subgraph INPUT [Inputs]
        imgA[Predicted Mask / Boxes]
        imgB[Ground Truth Mask / Boxes]
    end

    subgraph PROC [Computation Pipeline]
        cm[Build Confusion Matrix]
        iou[Per-class IoU]
        miou[mIoU Average]
        dice[Dice from IoU]
        mAP[Precision-Recall Curve]
        mAPint[11-point Interpolation]
        iouBox[Box Intersection]
        iouBoxNorm[Union and Normalize]
    end

    subgraph OUT [Outputs]
        o1[Pixel Accuracy]
        o2[Mean Accuracy]
        o3[mIoU]
        o4[Mean Dice]
        o5[mAP]
        o6[Box IoU]
    end

    imgA --> cm
    imgB --> cm
    cm --> iou
    iou --> miou
    iou --> dice

    imgA --> mAP
    imgB --> mAP
    mAP --> mAPint

    imgA --> iouBox
    imgB --> iouBox
    iouBox --> iouBoxNorm

    cm --> o1
    iou --> o2
    miou --> o3
    dice --> o4
    mAPint --> o5
    iouBoxNorm --> o6
```

## 4.3 Mermaid Diagram — Accuracy-Efficiency Pareto Frontier

```mermaid
flowchart TB
    subgraph HIGHACC [High-Accuracy Cluster]
        h1[DeepLabV3+ mIoU 82.1 FPS 5]
        h2[PSPNet mIoU 81.2 FPS 4]
        h3[SegFormer-B5 mIoU 82.1 FPS 15]
    end

    subgraph MIDDLE [Balanced Cluster]
        m1[U-Net mIoU 76 FPS 25]
        m2[SegNet mIoU 57 FPS 16]
    end

    subgraph REALTIME [Real-Time Edge Cluster]
        r1[DDRNet mIoU 77.8 FPS 108]
        r2[BiSeNetV2 mIoU 75.6 FPS 156]
    end

    h1 --> pf1((Pareto Frontier))
    h3 --> pf1
    r1 --> pf1
    r2 --> pf1

    pf1 --> rec[Recommendation Logic]
    rec --> rec1[Need max accuracy? Choose DeepLabV3+]
    rec --> rec2[Need edge deploy? Choose DDRNet]
    rec --> rec3[Need transformer? Choose SegFormer-B5]
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (2 × 3 = 6 Marks)

### **Question 1** [KTU University Exam — July 2024, Model Paper Pattern]
**(a) Differentiate between semantic segmentation and instance segmentation. Give one real-world example of each. (3 Marks)**

**Model Answer:**
| Aspect | Semantic Segmentation | Instance Segmentation |
| :--- | :--- | :--- |
| Output | Class label per pixel | Class label + instance ID per pixel |
| Distinguishes instances? | **No** — all "cars" share one mask | **Yes** — each "car" gets a unique mask |
| Example | Road scene labeling in **autonomous driving** | Counting individual **tumor cells** in histopathology |

**Key Phrase for Full Marks:** *"Semantic segmentation groups all objects of the same class into a single mask, whereas instance segmentation separates each object occurrence as a distinct entity."*

**[Award: 1 Mark for the definition, 1 Mark for difference, 1 Mark for example]**

---

### **Question 2** [KTU University Exam — Dec 2023, Supplementary Pattern]
**(b) Define mIoU and explain why it is preferred over pixel accuracy for imbalanced datasets. (3 Marks)**

**Model Answer:**
**Mean Intersection over Union (mIoU)** is the average of per-class Intersection-over-Union scores across all $C$ classes:

$$
\text{mIoU} = \frac{1}{C} \sum_{i=1}^{C} \frac{\text{TP}_i}{\text{TP}_i + \text{FP}_i + \text{FN}_i}
$$

**Why mIoU over Pixel Accuracy?**
- In an imbalanced dataset (e.g., 95% road, 5% pedestrian), a model that predicts "road" everywhere achieves 95% pixel accuracy but **0% IoU on the pedestrian class**.
- mIoU **averages per-class performance equally**, exposing the model's failure on minority classes.

**[Award: 1 Mark for formula, 1 Mark for definition, 1 Mark for imbalance justification]**

---

## 5.2 Part B — Full-Descriptive Questions (Internal Choice)

### **Question A — 14 Marks** [KTU University Exam — July 2024, Modified Pattern]

**(a)** With a neat diagram, explain the **encoder-decoder architecture of U-Net** for semantic segmentation. Discuss why skip connections are essential. **(7 Marks)**

**(b)** A binary segmentation model (tumor vs. background) produces the following confusion matrix on a test set of 1000 pixels:
$$
\begin{bmatrix} 850 & 30 \\ 20 & 100 \end{bmatrix}
$$
Compute (i) Pixel Accuracy, (ii) IoU for both classes, (iii) mIoU, (iv) Dice coefficient for the tumor class. **(7 Marks)**

---

### **Model Answer — Part (a)** — 7 Marks

**[Diagram: 2 Marks]**
Draw the U-Net "U"-shaped architecture with:
- **Encoder (left arm):** Repeated $3\times3$ conv → ReLU → $2\times2$ max-pool blocks. 4 levels with channels $\{64, 128, 256, 512\}$.
- **Bottleneck (bottom):** Two $3\times3$ convs with 1024 channels.
- **Decoder (right arm):$2\times2$ up-conv (transposed conv) → concat with encoder skip → $3\times3$ conv → ReLU$. 4 levels.
- **Output:** $1\times1$ conv with sigmoid.

**[Skip Connection Explanation: 3 Marks]**
Skip connections copy feature maps from encoder level $i$ to the corresponding decoder level $i$ via concatenation along the channel axis. **Why essential?**
1. **Spatial recovery:** Pooling loses spatial detail; skip connections pass high-resolution features directly to the decoder.
2. **Gradient flow:** They provide short paths for backpropagation, mitigating vanishing gradients in deep networks.
3. **Multi-scale fusion:** Encoder captures *context* (what), decoder recovers *localization* (where).

**[Loss Function: 1 Mark]**
U-Net uses **pixel-wise cross-entropy** weighted by class frequency (to handle imbalance) or the **Dice loss**.

**[Conclusion: 1 Mark]**
U-Net's elegance is its ability to be trained end-to-end on **few images** (data augmentation heavy), making it the gold standard in medical image segmentation.

---

### **Model Answer — Part (b)** — 7 Marks

**Step 1 — Identify rows and columns from confusion matrix $N$:**
$$
N = \begin{bmatrix} n_{00}=850 & n_{01}=30 \\ n_{10}=20 & n_{11}=100 \end{bmatrix}
$$
- Class 0 = Background, Class 1 = Tumor.

**Step 2 — Row sums (per-class true total):**
- $\text{Row}_0 = 850 + 30 = 880$ (true background pixels)
- $\text{Row}_1 = 20 + 100 = 120$ (true tumor pixels)

**Step 3 — Column sums (per-class predicted total):**
- $\text{Col}_0 = 850 + 20 = 870$
- $\text{Col}_1 = 30 + 100 = 130$

**Step 4 — (i) Pixel Accuracy:** **[2 Marks]**
$$
\text{PA} = \frac{n_{00} + n_{11}}{880 + 120} = \frac{850 + 100}{1000} = \frac{950}{1000} = 0.95
$$

**Step 5 — (ii) IoU per class:** **[2 Marks]**
$$
\text{IoU}_{\text{background}} = \frac{850}{880 + 870 - 850} = \frac{850}{900} \approx 0.9444
$$
$$
\text{IoU}_{\text{tumor}} = \frac{100}{120 + 130 - 100} = \frac{100}{150} \approx 0.6667
$$

**Step 6 — (iii) mIoU:** **[1 Mark]**
$$
\text{mIoU} = \frac{0.9444 + 0.6667}{2} = \frac{1.6111}{2} \approx 0.8056
$$

**Step 7 — (iv) Dice for tumor class:** **[2 Marks]**
$$
D_{\text{tumor}} = \frac{2 \cdot \text{IoU}_{\text{tumor}}}{1 + \text{IoU}_{\text{tumor}}} = \frac{2 \times 0.6667}{1 + 0.6667} = \frac{1.3334}{1.6667} \approx 0.80
$$

**[Final Answer Box: mIoU = 0.8056, Dice(tumor) = 0.80]**

---

### **Question B — 14 Marks** [KTU University Exam — Dec 2023, Modified Pattern] — *Internal Choice*

**(a)** Compare the **Faster R-CNN, YOLOv8, and DETR** object detection architectures in terms of (i) pipeline type, (ii) anchor-box usage, (iii) loss function, and (iv) one key advantage and one limitation. Construct a comparison table. **(7 Marks)**

**(b)** A case study compares three segmentation models (A, B, C) on the Cityscapes dataset. The following test-time results are obtained:

| Model | mIoU (%) | FPS (V100) | Params (M) |
| :--- | :---: | :---: | :---: |
| A — DeepLabV3+ | 82.1 | 5 | 62.7 |
| B — DDRNet-23 | 77.8 | 108 | 5.7 |
| C — SegFormer-B5 | 82.1 | 15 | 84.7 |

(i) Identify the **Pareto-optimal** models. (ii) Recommend a model for (1) an embedded dash-cam requiring $\geq 30$ FPS and (2) an offline medical scanner prioritizing accuracy. Justify each. **(7 Marks)**

---

### **Model Answer — Part (a)** — 7 Marks

| Criterion | Faster R-CNN | YOLOv8 | DETR |
| :--- | :--- | :--- | :--- |
| **Pipeline Type** | Two-stage (RPN + RoI Head) | One-stage (single CNN) | One-stage (end-to-end) |
| **Anchor Boxes** | Yes (3 scales × 3 ratios = 9) | Yes (anchor-free in v8) | **No** (set prediction) |
| **Loss Function** | Multi-task: RPN cls + reg + RoI cls + reg | CIoU loss + DFL + cls BCE | Hungarian matching + set loss (cls + L1 + GIoU) |
| **Key Advantage** | High accuracy, strong on small objects | Real-time (50–100 FPS), simple | No NMS, no anchors, clean architecture |
| **Key Limitation** | Slow (~7 FPS), complex pipeline | Lower accuracy on tiny objects | Slow training, long convergence |
| **Backbone** | ResNet-50/101 | CSPDarknet | ResNet + Transformer encoder-decoder |

**[Award: 1.5 Marks per criterion × 4 criteria = 6 Marks; 1 Mark for conclusion sentence]**

**Conclusion Sentence:** *"Faster R-CNN dominates accuracy-critical tasks, YOLOv8 dominates latency-critical tasks, and DETR represents the paradigm shift toward end-to-end set-based detection."*

---

### **Model Answer — Part (b)** — 7 Marks

**Step 1 — Define Pareto Optimality:** **[1 Mark]**
A model is **Pareto-optimal** if no other model is strictly better in **all** chosen objectives. We choose the objectives: mIoU, FPS, and Params (lower is better).

**Step 2 — Pairwise Dominance Check:** **[3 Marks]**

| Pair | Dominance | Verdict |
| :--- | :--- | :--- |
| A vs B | A has higher mIoU (82.1 > 77.8) **but** B has higher FPS (108 > 5) and fewer params (5.7 < 62.7). Neither dominates. | **Both Pareto-optimal** |
| A vs C | A and C tie on mIoU (82.1). A has fewer params (62.7 < 84.7) **and** A has lower FPS (5 < 15). Mixed. A dominates on params, C dominates on FPS. | **Both Pareto-optimal** |
| B vs C | B has lower mIoU (77.8 < 82.1) and lower FPS... wait, **B has higher FPS** (108 > 15) and fewer params (5.7 < 84.7). C has higher mIoU. Neither dominates. | **Both Pareto-optimal** |

**Step 3 — Pareto Set:** **[1 Mark]**
> All three models (A, B, C) are Pareto-optimal. They form a non-dominated frontier representing different trade-offs.

**Step 4 — Recommendations:** **[2 Marks]**

| Scenario | Recommended Model | Justification |
| :--- | :--- | :--- |
| Embedded dash-cam ($\geq 30$ FPS) | **B — DDRNet-23** | Achieves 108 FPS on V100 (well above 30 FPS even on edge GPUs like Jetson Xavier), and has the smallest footprint (5.7M params, edge-deployable). The 4.3-point mIoU drop is acceptable for real-time driving. |
| Offline medical scanner | **A — DeepLabV3+** or **C — SegFormer-B5** (tie on mIoU) | Both achieve 82.1% mIoU. Prefer **DeepLabV3+** for its lower parameter count (62.7M vs 84.7M) and more mature medical-imaging community. Inference latency is irrelevant in offline mode. |

---

## 5.3 KTU Examiner's Valuation Warning

> [!WARNING]
> **Common Pitfalls That Cost Marks:**
>
> 1. **Confusing mIoU with pixel accuracy** — Examiners will deduct 2–3 marks if you use them interchangeably. mIoU is the **average of per-class IoU**, not just TP/(TP+FP+FN) over all pixels.
>
> 2. **Forgetting to average per-class** in Dice computation. Dice is a per-class metric — you must average it across classes, not compute one global Dice over all pixels.
>
> 3. **Not specifying the IoU threshold** when reporting mAP. COCO uses mAP@[.5, .95], PASCAL uses mAP@0.5 — examiners will mark you down if you just say "mAP = 0.7" without the threshold.
>
> 4. **Confusing FPS with latency** — $\text{FPS} = 1 / \text{latency (in seconds)}$. Many students write them as if independent.
>
> 5. **Skipping the dataset name** in the case study — "I compared U-Net and DeepLab" loses marks. Always write: *"…on the PASCAL VOC 2012 validation set, with single-scale inference."*
>
> 6. **In confusion-matrix problems**, the most common error is using $\text{Row}_i$ in the denominator for IoU instead of $\text{Row}_i + \text{Col}_i - n_{ii}$. Triple-check this.
>
> 7. **Forgetting to handle NaN classes** — if a class has zero true and zero predicted pixels, IoU is undefined. Always state: *"Classes with no ground-truth or predictions are excluded from mIoU averaging."*

---

## 5.4 Topic Recap & Important Things to Remember

> [!TIP]
> **Rapid Revision Checklist — Print This Section Before the Exam!**

- [ ] **Case Study = Compare + Measure + Conclude.** Always end with a justified recommendation.
- [ ] **mIoU formula:** $\frac{1}{C}\sum_{i=1}^{C} \frac{n_{ii}}{\text{Row}_i + \text{Col}_i - n_{ii}}$
- [ ] **Dice formula:** $D = \frac{2\,\text{IoU}}{1 + \text{IoU}}$; equivalently $D = \frac{2\,\vert P \cap G \vert}{\vert P \vert + \vert G \vert}$
- [ ] **Pixel accuracy** uses the **global** sum; mIoU uses **per-class** averaging — this is the #1 exam trap.
- [ ] **Box IoU** uses $(x_1, y_1, x_2, y_2)$ format; intersection = max of left/top, min of right/bottom.
- [ ] **PASCAL VOC** uses mAP@IoU=0.5; **COCO** uses mAP averaged over IoU = 0.50:0.05:0.95.
- [ ] **11-point AP interpolation** requires taking $\max P$ for all $R' \geq r$, then averaging across 11 recall levels.
- [ ] **Pareto-optimal set** = no model strictly dominates another in all objectives (mIoU, FPS, Params).
- [ ] **Datasets:** PASCAL VOC (20 cls), COCO (80 cls), Cityscapes (19 cls driving), ADE20K (150 cls scene).
- [ ] **Models to remember for KTU:** U-Net (medical), DeepLabV3+ (high-accuracy), SegFormer (transformer), Mask R-CNN (instance), YOLOv8 (real-time), DETR (anchor-free).
- [ ] **Real-time threshold:** $\geq 30$ FPS for video, $\geq 60$ FPS for AR/VR, $\geq 100$ FPS for high-speed tracking.
- [ ] **Edge constraint:** Models with $\leq 10$M params and $\leq 50$ GFLOPs are edge-deployable.
- [ ] **Hardware matters:** Always report the GPU (e.g., V100 32GB) — FPS differs by 5–10× between V100 and A100.
- [ ] **No test-time augmentation (TTA)** during fair comparison — TTA inflates mIoU by 1–3% and breaks fairness.
- [ ] **mAP = mean Average Precision**, computed **per class then averaged**, NOT a single global metric.
- [ ] **Class imbalance** is why mIoU $>$ Pixel Accuracy for medical, satellite, and autonomous driving datasets.
- [ ] **Inference time ≠ Training time** — Report inference (forward pass) FPS, not training step time.
- [ ] **Final conclusion template:** *"Model X is recommended for [use case] because it achieves [metric] while maintaining [constraint], making it Pareto-optimal relative to the alternatives tested."*

---

<!-- SECTION_5_END -->
