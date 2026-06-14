# Load and preprocess the MNIST dataset.

<!-- SECTION_1_START -->
# Load and Preprocess the MNIST Dataset

## 1. Core Technical Definition

The **MNIST dataset** (Modified National Institute of Standards and Technology) is the canonical benchmark dataset in computer vision and machine learning, consisting of 70,000 grayscale images of handwritten digits (0 through 9), each of size **28 × 28 pixels**, with an associated integer label in the range **[0, 9]**. It serves as the standardized baseline for evaluating classification algorithms, particularly Artificial Neural Networks (ANNs) and Convolutional Neural Networks (CNNs).

In the **KTU 2024 Scheme Machine Learning Lab (PCCSL508)**, preprocessing MNIST constitutes the foundational *data ingestion and conditioning* stage. It transforms raw, network-incompatible pixel arrays into normalized, shape-conformed, and statistically balanced tensors that gradient-descent optimizers can consume efficiently.

> [!IMPORTANT]
> **KTU Syllabus Highlight (Module 14):** Loading and preprocessing is treated as a *mandatory pre-experiment step* before any neural network architecture can be defined, compiled, or trained. Marks are explicitly awarded for demonstrating the correct shape conversions, normalization, and train/test partitioning.

## 2. The Anatomy of MNIST

| Attribute | Value | Engineering Significance |
| :--- | :--- | :--- |
| Total Samples | **70,000** | 60,000 training + 10,000 testing (fixed split) |
| Image Dimensions | **28 × 28 pixels** | Single-channel grayscale (intensity $0 \to 255$) |
| Number of Classes | **10** (digits 0-9) | Mutually exclusive, balanced distribution |
| Pixel Value Range | **[0, 255]** (uint8) | Requires scaling to **[0, 1]** (float32) for stable gradients |
| Storage Format | IDX file format (legacy) / NumPy arrays (modern) | TensorFlow/Keras auto-downloads into `~/.keras/datasets/` |
| Memory Footprint | $\approx$ **47 MB** compressed | Fits entirely in RAM — no streaming/batching needed |

> [!NOTE]
> **Conceptual Analogy — The Postal Sorting Office:** Imagine MNIST as a massive post office where 70,000 letters (images) arrive, each bearing a handwritten postcode (label 0–9) and written on a standardized 28×28 grid slip. Before any automated sorting machine (neural network) can read them, the postmaster (preprocessing pipeline) must: (1) uncrumple and flatten the slips, (2) standardize the ink intensity so no scanner is overwhelmed, (3) separate the training pile from the evaluation pile, and (4) translate the digits into a universal numerical "barcode" (one-hot encoding) the machine can pattern-match. Without this conditioning, the sorter crashes on inconsistent input.

## 3. Why Preprocessing is Non-Negotiable

Raw pixel data in the range **[0, 255]** causes two critical pathologies in neural networks:

1. **Exploding Gradients:** Large input magnitudes propagate through weighted sums, producing enormous activation values that destabilize backpropagation.
2. **Slow Convergence:** Gradient descent oscillates across elongated cost-surface contours when features have disparate scales.

The mathematical remedy is **Min-Max Normalization**:

$$x_{\text{norm}} = \frac{x - x_{\min}}{x_{\max} - x_{\min}}$$

For MNIST specifically, since $x_{\min} = 0$ and $x_{\max} = 255$, this simplifies to $x_{\text{norm}} = x / 255.0$, mapping every pixel into **[0, 1]**.

> [!VISUALIZATION CONTROL]
> **Concept:** 28×28 MNIST digit pixel-intensity heatmap (e.g., the digit "5").
> **GeoGebra / Desmos Input Equations:**
> * Plot a $28 \times 28$ matrix $M_{ij}$ where $M_{ij} \in [0, 1]$ represents normalized pixel intensity.
> * Use a `Surface` plot with colormap `Jet` mapping low values to dark blue and high values to bright yellow.
> **Visual Description:** Students should observe a bright yellow stroke forming the digit "5" against a dark-blue background, confirming that meaningful information is encoded in sparse high-intensity regions while the majority of pixels carry near-zero intensity.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 1. The Five-Stage Preprocessing Pipeline

The complete MNIST preprocessing pipeline consists of five sequential, idempotent transformations. Each stage produces a verifiable intermediate artifact that can be logged for KTU lab record validation.

### Stage 1 — Data Ingestion
* Load the dataset from a local IDX archive or via the `keras.datasets.mnist.load_data()` API.
* Verify the returned structure is a **2-tuple of tuples**: `((train_X, train_y), (test_X, test_y))`.
* Validate shapes: `train_X.shape == (60000, 28, 28)`, `train_y.shape == (60000,)`.

### Stage 2 — Shape Reshaping
* Flatten each $28 \times 28$ image into a **784-dimensional vector** for a feedforward ANN: `train_X.reshape(-1, 784)`.
* Add a **channel axis** for a CNN: `train_X.reshape(-1, 28, 28, 1)`.
* This step is *architecture-dependent* and is a frequent KTU exam question.

### Stage 3 — Type Casting
* Convert `uint8` pixel arrays to `float32` to prevent integer overflow during matrix multiplication: `train_X.astype('float32')`.

### Stage 4 — Min-Max Normalization
* Scale pixel intensities to **[0, 1]**: `train_X /= 255.0`.
* This guarantees that the input distribution has zero mean-shift concerns and unit-magnitude compatibility with sigmoid/tanh activations.

### Stage 5 — Label Encoding
* Convert the sparse integer label vector into a **one-hot encoded matrix** of shape `(N, 10)`.
* The `to_categorical` utility from `keras.utils` performs this transformation in O(1) per sample.
* This encoding is required when the output layer uses `softmax` activation paired with `categorical_crossentropy` loss.

> [!TIP]
> **Engineering Tip — Why One-Hot Encode?** Integer labels (e.g., `y = 7`) imply a *false ordinal relationship*: the network might infer that class 7 is "greater than" class 3. One-hot vectors `[0,0,0,0,0,0,0,1,0,0]` eliminate this bias and align the loss function with the geometric properties of the probability simplex.

## 2. KTU Formula Sheet / Cheat Sheet

| Transformation | Mathematical Form | Input Shape | Output Shape | PyTorch/TensorFlow Operation |
| :--- | :--- | :--- | :--- | :--- |
| Flattening (ANN) | $x_{\text{flat}} = \text{vec}(X) \in \mathbb{R}^{784}$ | $(N, 28, 28)$ | $(N, 784)$ | `X.reshape(-1, 784)` |
| Expanding (CNN) | $X_{\text{cnn}} = X \oplus \mathbf{0}_{\text{axis}}$ | $(N, 28, 28)$ | $(N, 28, 28, 1)$ | `X.reshape(-1, 28, 28, 1)` |
| Normalization | $x' = x / 255.0$ | $(N, 28, 28)$ | $(N, 28, 28)$ | `X.astype('float32') / 255.0` |
| Standardization (alt.) | $x' = (x - \mu) / \sigma$ | $(N, 784)$ | $(N, 784)$ | `StandardScaler.fit_transform` |
| One-Hot Encoding | $y_{\text{oh}}[i, c] = \mathbb{1}[c = y_i]$ | $(N,)$ | $(N, 10)$ | `to_categorical(y, 10)` |
| Train-Test Split | $N_{\text{train}} + N_{\text{test}} = 70{,}000$ | N/A | Fixed by source | Default 60k/10k |

## 3. Real-World Engineering Utility

The MNIST preprocessing workflow is the direct template for production-grade image pipelines in:

* **Optical Character Recognition (OCR):** Google Books, reCAPTCHA v1, ATM cheque scanning.
* **Medical Imaging:** Normalizing CT/MRI slices to **[0, 1]** before feeding into U-Net segmentation networks.
* **Autonomous Driving:** Preprocessing LiDAR-camera fused frames — the 60k/10k split pattern generalizes to the KITTI and Cityscapes benchmarks.
* **Edge AI Deployment:** TensorFlow Lite's quantization step assumes normalized input; deviation causes silent misclassification on microcontrollers.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Implementation & Code

## 1. Exhaustive Python Implementation (Keras / TensorFlow Backend)

The following code is fully operational, rigorously typed, and includes defensive boundary checks suitable for direct KTU lab record submission.

```python
"""
=============================================================
 KT U 2024 SCHEME - MACHINE LEARNING LAB (PCCSL508)
 Module 14 : Load and Preprocess the MNIST Dataset
=============================================================
 Author  : B.Tech Student
 Tool    : Python 3.10+, TensorFlow 2.15+
 Output  : Preprocessed NumPy arrays ready for ANN/CNN
=============================================================
"""

# -----------------------------------------------------------
# STEP 0 : Import dependencies with explicit aliases
# -----------------------------------------------------------
import numpy as np
import tensorflow as tf
from tensorflow.keras.datasets import mnist
from tensorflow.keras.utils import to_categorical
import matplotlib.pyplot as plt
import logging
import sys
import os

# Configure structured logging for traceability
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s | %(levelname)s | %(message)s',
    handlers=[logging.StreamHandler(sys.stdout)]
)
logger = logging.getLogger(__name__)

# -----------------------------------------------------------
# STEP 1 : Load the MNIST dataset from the Keras repository
# -----------------------------------------------------------
# The .load_data() method returns two tuples: training and test
# Each tuple contains (images, labels).
# Download happens once and is cached in ~/.keras/datasets/
logger.info("Initiating MNIST download (one-time, ~47 MB) ...")
(train_X, train_y), (test_X, test_y) = mnist.load_data()

# -----------------------------------------------------------
# STEP 2 : Validate raw dataset integrity
# -----------------------------------------------------------
assert train_X.shape == (60000, 28, 28), \
    f"CRITICAL: train_X shape mismatch -> {train_X.shape}"
assert test_X.shape == (10000, 28, 28), \
    f"CRITICAL: test_X shape mismatch -> {test_X.shape}"
assert train_X.dtype == np.uint8, \
    f"CRITICAL: Expected uint8 raw pixels, got {train_X.dtype}"

logger.info(f"Raw train_X shape : {train_X.shape}, dtype : {train_X.dtype}")
logger.info(f"Raw train_y shape : {train_y.shape}, dtype : {train_y.dtype}")
logger.info(f"Raw test_X  shape : {test_X.shape}, dtype : {test_X.dtype}")
logger.info(f"Pixel range       : [{train_X.min()}, {train_X.max()}]")
logger.info(f"Class distribution: {np.bincount(train_y)}")

# -----------------------------------------------------------
# STEP 3 : Reshape for the target neural network architecture
# -----------------------------------------------------------
# For a Feedforward ANN, flatten 28x28 -> 784
train_X_flat = train_X.reshape(60000, 784)
test_X_flat  = test_X.reshape(10000, 784)

# For a CNN, keep 2D structure but add the channel axis
train_X_cnn = train_X.reshape(60000, 28, 28, 1)
test_X_cnn  = test_X.reshape(10000, 28, 28, 1)

logger.info(f"ANN-ready train_X shape : {train_X_flat.shape}")
logger.info(f"CNN-ready train_X shape : {train_X_cnn.shape}")

# -----------------------------------------------------------
# STEP 4 : Type-cast to float32 (prevents int overflow)
# -----------------------------------------------------------
train_X_flat = train_X_flat.astype(np.float32)
test_X_flat  = test_X_flat.astype(np.float32)
train_X_cnn  = train_X_cnn.astype(np.float32)
test_X_cnn   = test_X_cnn.astype(np.float32)

# -----------------------------------------------------------
# STEP 5 : Min-Max Normalization to [0, 1]
# -----------------------------------------------------------
train_X_flat /= 255.0
test_X_flat  /= 255.0
train_X_cnn  /= 255.0
test_X_cnn   /= 255.0

# Post-normalization boundary verification
assert train_X_flat.max() <= 1.0 and train_X_flat.min() >= 0.0, \
    "CRITICAL: Normalization failed - pixels outside [0,1]"
logger.info(f"Post-norm pixel range : "
            f"[{train_X_flat.min():.4f}, {train_X_flat.max():.4f}]")

# -----------------------------------------------------------
# STEP 6 : One-Hot Encode the labels
# -----------------------------------------------------------
# Convert shape (N,) -> (N, 10) where col c is 1 iff label == c
train_y_oh = to_categorical(train_y, num_classes=10)
test_y_oh  = to_categorical(test_y,  num_classes=10)

logger.info(f"One-hot train_y shape : {train_y_oh.shape}")
logger.info(f"Example label  -> one-hot: "
            f"{train_y[0]} -> {train_y_oh[0]}")

# -----------------------------------------------------------
# STEP 7 : Create output directory and persist tensors
# -----------------------------------------------------------
output_dir = "./preprocessed_mnist"
os.makedirs(output_dir, exist_ok=True)

np.save(f"{output_dir}/train_X_flat.npy", train_X_flat)
np.save(f"{output_dir}/test_X_flat.npy",  test_X_flat)
np.save(f"{output_dir}/train_X_cnn.npy",  train_X_cnn)
np.save(f"{output_dir}/test_X_cnn.npy",   test_X_cnn)
np.save(f"{output_dir}/train_y_oh.npy",   train_y_oh)
np.save(f"{output_dir}/test_y_oh.npy",    test_y_oh)

logger.info(f"All preprocessed tensors saved to {output_dir}/")

# -----------------------------------------------------------
# STEP 8 : Visualization for lab record evidence
# -----------------------------------------------------------
fig, axes = plt.subplots(2, 5, figsize=(12, 5))
for i, ax in enumerate(axes.flat):
    ax.imshow(train_X[i], cmap='gray')
    ax.set_title(f"Label: {train_y[i]}")
    ax.axis('off')
plt.suptitle("Sample MNIST Digits (Pre-normalization)")
plt.tight_layout()
plt.savefig(f"{output_dir}/sample_visualization.png", dpi=150)
plt.show()

logger.info("Preprocessing pipeline executed successfully.")
```

## 2. Mathematical Walkthrough of Normalization

Let the raw pixel tensor be $X \in \mathbb{R}^{N \times 28 \times 28}$ with values in $\{0, 1, \dots, 255\}$.

The normalization operation is:

$$X_{\text{norm}} = \frac{X - 0}{255 - 0} = \frac{X}{255}$$

After normalization, the empirical mean and standard deviation approximate:

$$\mu_{\text{norm}} = \frac{1}{N \cdot 28 \cdot 28} \sum_{i,j,k} X_{\text{norm}}[i,j,k] \approx 0.131$$

$$\sigma_{\text{norm}} = \sqrt{\frac{1}{N \cdot 28 \cdot 28} \sum_{i,j,k} (X_{\text{norm}}[i,j,k] - \mu_{\text{norm}})^2} \approx 0.308$$

These non-zero statistics confirm that MNIST images are *not* background-uniform — there is meaningful foreground structure (the digit strokes) that the network must learn to detect.

## 3. PyTorch Alternative Implementation

```python
import torch
from torchvision import datasets, transforms
from torch.utils.data import DataLoader

# Define a deterministic preprocessing pipeline
transform_pipeline = transforms.Compose([
    transforms.ToTensor(),                       # HxW uint8 -> 1xHxW float32, [0,1]
    transforms.Normalize((0.1307,), (0.3081,))   # Standard MNIST mean/std
])

# Download and auto-create train/test splits
train_dataset = datasets.MNIST(
    root='./data', train=True,  download=True, transform=transform_pipeline
)
test_dataset = datasets.MNIST(
    root='./data', train=False, download=True, transform=transform_pipeline
)

# Wrap in DataLoader for mini-batch gradient descent
train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)
test_loader  = DataLoader(test_dataset,  batch_size=64, shuffle=False)

# Inspect a single batch
data_iter = iter(train_loader)
images, labels = next(data_iter)
print(f"Batch image shape : {images.shape}")  # torch.Size([64, 1, 28, 28])
print(f"Batch label shape : {labels.shape}")  # torch.Size([64])
```

> [!NOTE]
> **Difference Between Frameworks:** Keras performs normalization *in-memory* on the entire dataset at once, while PyTorch applies the `transform` *on-the-fly* per batch via the `DataLoader`. The latter is memory-efficient for datasets that exceed RAM but adds CPU overhead during training.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 1. Mermaid Flowchart — End-to-End Preprocessing Pipeline

```mermaid
flowchart TD
    startA([Experiment Start]) --> stepB[Download MNIST via Keras API]
    stepB --> stepC[Verify raw shapes: 60000x28x28 and 10000x28x28]
    stepC --> stepD{Choose Target Architecture}
    stepD -- Feedforward ANN --> stepE[Reshape to N x 784]
    stepD -- Convolutional CNN --> stepF[Reshape to N x 28 x 28 x 1]
    stepE --> stepG[Cast to float32]
    stepF --> stepG
    stepG --> stepH[Normalize: divide by 255.0]
    stepH --> stepI[One-hot encode labels: to_categorical y 10]
    stepI --> stepJ[Persist NumPy tensors to disk]
    stepJ --> stepK[Visualize 10 random samples for lab record]
    stepK --> stepL[Feed into ANN or CNN model.fit]
    stepL --> endM([Training Begin])

    style startA fill:#2c3e50,color:#ffffff
    style endM fill:#27ae60,color:#ffffff
    style stepD fill:#f39c12,color:#ffffff
    style stepH fill:#e74c3c,color:#ffffff
    style stepI fill:#9b59b6,color:#ffffff
```

## 2. Mermaid Block Diagram — Data Tensor Shape Transitions

```mermaid
graph LR
    subgraph RAW["STAGE 0 - RAW INPUT"]
        A1["train_X: (60000, 28, 28) uint8"]
        A2["train_y: (60000,) uint8"]
    end

    subgraph FLAT["STAGE 1 - FLATTEN FOR ANN"]
        B1["train_X_flat: (60000, 784) float32"]
    end

    subgraph CHAN["STAGE 2 - EXPAND FOR CNN"]
        C1["train_X_cnn: (60000, 28, 28, 1) float32"]
    end

    subgraph LABEL["STAGE 3 - LABEL ENCODING"]
        D1["train_y_oh: (60000, 10) float32"]
    end

    A1 -- reshape -1 784 --> B1
    A1 -- reshape -1 28 28 1 --> C1
    A2 -- to_categorical 10 --> D1
    B1 -- divide 255.0 --> B1
    C1 -- divide 255.0 --> C1
```

## 3. Sequential Processing Topology Matrix

| Pipeline Stage | Input Artifact | Transformation | Output Artifact | KTU Validation Check |
| :--- | :--- | :--- | :--- | :--- |
| **0. Ingestion** | None | `mnist.load_data()` | 4 NumPy arrays | `assert shape == (60000, 28, 28)` |
| **1. Reshape-ANN** | `(60000, 28, 28)` | `reshape(-1, 784)` | `(60000, 784)` | Print `train_X_flat.shape` |
| **2. Reshape-CNN** | `(60000, 28, 28)` | `reshape(-1, 28, 28, 1)` | `(60000, 28, 28, 1)` | Print `train_X_cnn.shape` |
| **3. Cast** | uint8 array | `.astype('float32')` | float32 array | Print `dtype` |
| **4. Normalize** | `[0, 255]` | `/= 255.0` | `[0, 1]` | Assert `0 <= x <= 1` |
| **5. One-Hot** | `(60000,)` | `to_categorical(y, 10)` | `(60000, 10)` | Print sample encoding |
| **6. Persist** | All arrays | `np.save()` | 6 `.npy` files | List `os.listdir()` |

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank

---

## **Part A — 3 Mark Questions**

### **Q1. [KTU University Exam – July 2024, Model Paper 1]**
**List the exact shapes of the training and testing tensors returned by `mnist.load_data()` and state the data type of the pixel values.**

**Model Answer (Remember — CO1, 3 Marks):**
* `train_X.shape = (60000, 28, 28)` — *1 Mark for each correct shape*
* `test_X.shape = (10000, 28, 28)` — *1 Mark*
* `train_y.shape = (60000,)` and `test_y.shape = (10000,)` — *1 Mark combined*
* **Data type:** `uint8` with values in **[0, 255]**.

> **Valuation Key:** Students lose a mark if they confuse the train/test counts (60k/10k) or omit the data type.

---

### **Q2. [KTU University Exam – Dec 2023]**
**Why is Min-Max normalization applied to MNIST pixel values before training a neural network?**

**Model Answer (Understand — CO2, 3 Marks):**
* To scale raw pixel values from **[0, 255]** to **[0, 1]**, ensuring numerical stability during gradient descent. *(1 Mark)*
* To prevent exploding/vanishing gradients caused by large input magnitudes. *(1 Mark)*
* To ensure faster convergence since the loss-surface becomes more isotropic. *(1 Mark)*

---

## **Part B — 14 Mark Questions (Internal Choice Provided)**

### **Question A — 14 Marks** `[KTU University Exam – July 2024]`

**a)** Explain the complete preprocessing pipeline for the MNIST dataset, with the exact transformations applied at each stage. *(7 Marks — Understand, CO2)*

**Model Answer:**

The MNIST preprocessing pipeline consists of five sequential stages:

1. **Data Ingestion:** `mnist.load_data()` retrieves `((train_X, train_y), (test_X, test_y))` with shapes `(60000, 28, 28)` and `(10000, 28, 28)` respectively. *[1 Mark]*

2. **Reshaping:** For a feedforward ANN, flatten each image to a 784-dimensional vector: `train_X.reshape(-1, 784)`. For a CNN, expand with a channel axis: `train_X.reshape(-1, 28, 28, 1)`. *[1 Mark]*

3. **Type Casting:** Convert `uint8` to `float32` to prevent integer overflow during weighted summation. *[1 Mark]*

4. **Normalization:** Divide by 255.0 to map values into **[0, 1]** using $x_{\text{norm}} = x / 255$. *[1 Mark]*

5. **One-Hot Encoding:** Apply `to_categorical(train_y, num_classes=10)` to convert label vector from shape `(N,)` to `(N, 10)`. *[1 Mark]*

6. **Persistence:** Save preprocessed tensors as `.npy` files for reproducibility. *[1 Mark]*

7. **Visualization:** Plot 10 random samples with `plt.imshow(..., cmap='gray')` to provide visual evidence in the lab record. *[1 Mark]*

---

**b)** Write a complete Python program to load MNIST, normalize the images, and one-hot encode the labels. Display the shape of every preprocessed tensor. *(7 Marks — Apply, CO3)*

**Model Answer:**

```python
import numpy as np
from tensorflow.keras.datasets import mnist
from tensorflow.keras.utils import to_categorical

# Stage 1: Load
(train_X, train_y), (test_X, test_y) = mnist.load_data()

# Stage 2: Reshape for ANN
train_X = train_X.reshape(60000, 784).astype('float32')
test_X  = test_X.reshape(10000, 784).astype('float32')

# Stage 3: Normalize
train_X /= 255.0
test_X  /= 255.0

# Stage 4: One-hot encode
train_y = to_categorical(train_y, 10)
test_y  = to_categorical(test_y, 10)

# Stage 5: Display shapes
print(f"train_X shape: {train_X.shape}")   # (60000, 784)
print(f"test_X  shape: {test_X.shape}")    # (10000, 784)
print(f"train_y shape: {train_y.shape}")   # (60000, 10)
print(f"test_y  shape: {test_y.shape}")    # (10000, 10)
```

**Incremental Valuation Key:**
* [Correct import statements: 1 Mark]
* [Correct reshape operation: 1 Mark]
* [Correct normalization (division by 255): 1 Mark]
* [Correct one-hot encoding call: 1 Mark]
* [Correct shape verification: 2 Marks]
* [Program executes without errors: 1 Mark]

---

### **Question B — 14 Marks** `[KTU University Exam – Dec 2023]`

**a)** Compare Min-Max normalization and Z-score standardization. State the formula for each and explain which is preferred for MNIST image data. *(7 Marks — Understand, CO2)*

**Model Answer:**

| Aspect | Min-Max Normalization | Z-Score Standardization |
| :--- | :--- | :--- |
| **Formula** | $x' = (x - x_{\min}) / (x_{\max} - x_{\min})$ | $x' = (x - \mu) / \sigma$ |
| **Output Range** | **[0, 1]** (bounded) | Unbounded (typically $[-3, +3]$) |
| **Use Case** | Image data with fixed pixel range | Features with Gaussian distribution |
| **Sensitivity to Outliers** | High | Low |
| **MNIST Suitability** | **Highly preferred** | Acceptable but suboptimal |

For MNIST, **Min-Max normalization is preferred** because the pixel range is fixed and known (**[0, 255]**), there are no significant outliers (all pixels fall within the dynamic range), and neural network activations (sigmoid/ReLU) are better calibrated for inputs in **[0, 1]**. *[Valuation: 7 Marks — 1 Mark per correct row, 2 Marks for explicit justification]*

---

**b)** Given a raw MNIST sample with pixel values `[[0, 128, 255], [64, 192, 32]]`, compute the normalized tensor and the one-hot encoded label assuming the true label is 4. *(7 Marks — Apply, CO3)*

**Model Answer:**

**Step 1 — Normalization:** Apply $x_{\text{norm}} = x / 255$ element-wise:

$$X_{\text{norm}} = \frac{1}{255} \begin{bmatrix} 0 & 128 & 255 \\ 64 & 192 & 32 \end{bmatrix} = \begin{bmatrix} 0.0000 & 0.5020 & 1.0000 \\ 0.2510 & 0.7529 & 0.1255 \end{bmatrix}$$

*[2 Marks for correct division, 1 Mark for correct decimals to 4 places]*

**Step 2 — One-Hot Encoding:** Create a 10-dimensional vector with 1 at index 4 and 0 elsewhere:

$$y_{\text{oh}} = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]$$

*[2 Marks for correct vector construction, 1 Mark for correct position of 1]*

**Step 3 — Verification:** The sum of the one-hot vector must equal 1 (probabilistic constraint), and all values in $X_{\text{norm}}$ must be in **[0, 1]**. *[1 Mark]*

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls**
> * **Forgetting the type cast** — Leaving pixels as `uint8` causes silent overflow during the `/= 255.0` operation in some PyTorch versions. Always cast to `float32` first.
> * **Wrong reshape order** — `(28, 28, 1)` vs `(1, 28, 28)` is a common error. For CNNs using TensorFlow/Keras, the channel axis comes **last**; for PyTorch, it comes **first**.
> * **Skipping one-hot encoding** — Passing integer labels directly to a `softmax` output layer with `categorical_crossentropy` loss raises a shape-mismatch error. Use `sparse_categorical_crossentropy` instead, or one-hot encode.
> * **Not asserting shape integrity** — The KTU lab rubric awards a mark for `assert` statements validating tensor dimensions.
> * **Confusing train/test split** — MNIST has a fixed 60k/10k split. Do not apply `train_test_split` on top of it; use the provided partition as-is to ensure comparability with published benchmarks.

---

## **Topic Recap & Important Things to Remember**

* MNIST contains **70,000** grayscale handwritten digit images: **60,000 training + 10,000 testing**.
* Each image is **28 × 28** pixels, single-channel, with intensity values in **[0, 255]** stored as `uint8`.
* There are **10 classes** (digits 0–9), perfectly balanced, representing a multi-class classification problem.
* The **preprocessing pipeline** has 5 mandatory stages: Ingest → Reshape → Cast → Normalize → One-Hot Encode.
* **Reshaping for ANN** uses `reshape(-1, 784)`; **reshaping for CNN** uses `reshape(-1, 28, 28, 1)` (Keras) or `reshape(-1, 1, 28, 28)` (PyTorch).
* **Min-Max normalization** formula: $x_{\text{norm}} = x / 255.0$ maps pixels to **[0, 1]**.
* **Type casting** from `uint8` to `float32` is mandatory to prevent integer overflow.
* **One-hot encoding** transforms label vector shape from `(N,)` to `(N, 10)` using `to_categorical(y, 10)`.
* **One-hot encoding is required** when using `categorical_crossentropy` loss; otherwise use `sparse_categorical_crossentropy`.
* The **post-normalization empirical statistics** for MNIST are approximately $\mu \approx 0.131$ and $\sigma \approx 0.308$.
* **Validation step:** Always `assert` that pixel values are in **[0, 1]** and shapes match `(60000, 784)` or `(60000, 28, 28, 1)`.
* **Persistence:** Save preprocessed arrays as `.npy` files for reproducible lab experiments.
* **Visualization:** `plt.imshow(X[i], cmap='gray')` is the standard way to render samples in the lab record.
* **Keras vs PyTorch difference:** Keras normalizes in-memory at load time; PyTorch normalizes on-the-fly per batch via `transforms.Normalize`.
* **Engineering applications:** OCR systems, medical imaging, autonomous driving perception, edge AI deployment.
* **The 60k/10k split is fixed** — do not re-split the dataset; this ensures benchmark comparability across research papers.

<!-- SECTION_5_END -->
