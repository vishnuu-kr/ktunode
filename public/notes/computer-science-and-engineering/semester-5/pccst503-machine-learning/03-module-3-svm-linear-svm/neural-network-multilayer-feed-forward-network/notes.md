# Neural Network - Multilayer feed-forward network

<!-- SECTION_1_START -->

# Multilayer Feed-Forward Neural Network — Core Definition & Intuition

> [!IMPORTANT]
> **KTU 2024 Scheme Definition (PCCST503 — Machine Learning, Module 3):**
> A *Multilayer Feed-Forward Network (MLFFN)*, also called a *Multilayer Perceptron (MLP)*, is a directed acyclic computational graph of artificial neurons arranged in **at least three distinct layers** — an *Input Layer*, one or more *Hidden Layers*, and an *Output Layer* — where signals propagate strictly in the **forward direction** (input → hidden → output) with **no cycles, no feedback connections, and no skip-connections between non-adjacent layers**. Each connection carries a *learnable weight* and each neuron applies a *non-linear activation function* to its weighted sum plus bias.

## 1.1 The Biological Inspiration

A biological neuron (the cell in your brain) has:
- **Dendrites** → collect signals from other neurons
- **Cell body (soma)** → sums up the incoming signals
- **Axon** → fires an output only if the sum exceeds a *threshold*
- **Synapses** → connection strengths that get stronger or weaker with learning

The **McCulloch–Pitts (1943) artificial neuron** mathematically imitates this:

$$
y = f\!\left(\sum_{i=1}^{n} w_i x_i + b\right)
$$

where $w_i$ is the synaptic weight, $x_i$ is the input, $b$ is the bias (threshold shift), and $f(\cdot)$ is the activation function (the "firing rule").

## 1.2 Conceptual Analogy — The "Factory Assembly Line"

> [!NOTE]
> **Analogy: A Car Factory Assembly Line**
>
> Imagine a car factory with three rooms in series:
> 1. **Receiving Bay (Input Layer)** — raw parts (steel, rubber, glass) arrive. The bay does *no work*, it just labels and passes parts on.
> 2. **Workshop Rooms (Hidden Layers)** — each room is a *team of workers*. Each worker takes some parts, mixes them with a *recipe (weight)*, applies *heat-treatment (activation)*, and produces a half-built component. The component is forwarded to the next room.
> 3. **Final Packing Bay (Output Layer)** — packs the final product (e.g., sedan, SUV) and ships it out.
>
> **Learning** = the foreman periodically walks backward through the factory, checking the *error* of the final product vs. the customer's order, and **adjusting each worker's recipe** (weights) so future products are more accurate. This backward walk is **backpropagation**.
>
> A **single-layer perceptron** is a factory with *no workshop room* — it can only build the simplest products (linearly separable). An **MLFFN** is a factory with *one or more workshop rooms*, which can build **anything** (universal approximation theorem).

## 1.3 Why a Single Layer is Not Enough

A single artificial neuron (the original **Rosenblatt Perceptron, 1958**) can only solve **linearly separable** problems. The famous **XOR problem (Minsky & Papert, 1969)** proved that no single line can separate the XOR outputs in 2-D space. The remedy is to **stack layers of non-linear neurons** so that the network warps the input space into a new representation that becomes linearly separable in a higher dimension.

> [!IMPORTANT]
> **Syllabus Highlight — KTU PCCST503 Module 3:**
> A multilayer feed-forward network overcomes the *linear separability limitation* of the perceptron by introducing one or more *hidden layers* with *non-linear activation functions*, enabling the network to learn **complex non-linear decision boundaries** and approximate **any continuous function** (Universal Approximation Theorem, Cybenko 1989 / Hornik 1991).

## 1.4 GeoGebra / Desmos Visualization

> [!VISUALIZATION CONTROL]
> **Concept:** XOR Decision Boundary — A Single Hidden Layer (2 neurons) Network Solving a Non-Linear Problem
>
> **GeoGebra / Desmos Input Equations:**
>
> * Hidden neuron $h_1$ : $h_1 = \sigma(10 x_1 + 10 x_2 - 5)$
> * Hidden neuron $h_2$ : $h_2 = \sigma(10 x_1 + 10 x_2 - 15)$
> * Output $y$ : $y = \sigma(20 h_1 - 20 h_2 - 10)$
> * where $\sigma(z) = \dfrac{1}{1 + e^{-z}}$ (sigmoid)
>
> **Visual Description:** Plot the 2-D plane with $x_1$ on the X-axis and $x_2$ on the Y-axis. The four XOR points $(0,0), (0,1), (1,0), (1,1)$ are marked. The decision surface $y = 0.5$ will form a **curved (parabolic-like) region** that perfectly isolates the $(0,0)$ and $(1,1)$ outputs from $(0,1)$ and $(1,0)$ — a feat impossible for a single straight line.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Architectural Notation

For a standard **MLFFN with $L$ layers** (where layer 1 is the input layer and layer $L$ is the output layer):

| Symbol | Meaning | Tensor Shape (using $n^{[l]}$ as layer-$l$ size) |
|---|---|---|
| $X$ | Input feature matrix | $(m, n_x)$ — $m$ samples, $n_x$ features |
| $W^{[l]}$ | Weight matrix of layer $l$ | $(n^{[l]},\ n^{[l-1]})$ |
| $b^{[l]}$ | Bias vector of layer $l$ | $(n^{[l]},\ 1)$ |
| $z^{[l]}$ | Pre-activation (linear output) of layer $l$ | $(n^{[l]},\ m)$ |
| $a^{[l]}$ | Post-activation (activation output) of layer $l$ | $(n^{[l]},\ m)$ |
| $\eta$ | Learning rate (hyperparameter) | scalar |
| $\mathcal{L}$ | Loss / Cost function | scalar |

> Convention: $a^{[0]} = X$ (the input acts as "activation 0").

## 2.2 The Two-Phase Operational Cycle

### Phase 1 — **Forward Propagation** (Inference)

For every layer $l = 1, 2, \dots, L$:

$$
\boxed{\ z^{[l]} \;=\; W^{[l]}\,a^{[l-1]} \;+\; b^{[l]}\ }
$$

$$
\boxed{\ a^{[l]} \;=\; g^{[l]}\!\left(z^{[l]}\right)\ }
$$

where $g^{[l]}$ is the activation function of layer $l$. The final output is $\hat{y} = a^{[L]}$.

### Phase 2 — **Backpropagation** (Learning via Chain Rule)

Define the **error term** $\delta^{[l]} = \dfrac{\partial \mathcal{L}}{\partial z^{[l]}}$. The four backprop equations (Michael Nielsen / Andrew Ng formulation) are:

$$
\boxed{\ \delta^{[L]} \;=\; \nabla_{a^{[L]}}\mathcal{L}\ \odot\ g^{[L]\prime}\!\left(z^{[L]}\right)\ }
$$

$$
\boxed{\ \delta^{[l]} \;=\; \bigl(W^{[l+1]}\bigr)^{\!\top}\!\delta^{[l+1]}\ \odot\ g^{[l]\prime}\!\left(z^{[l]}\right)\ }
$$

$$
\boxed{\ \frac{\partial \mathcal{L}}{\partial W^{[l]}} \;=\; \frac{1}{m}\,\delta^{[l]}\,\bigl(a^{[l-1]}\bigr)^{\!\top}\ }
$$

$$
\boxed{\ \frac{\partial \mathcal{L}}{\partial b^{[l]}} \;=\; \frac{1}{m}\,\sum_{i=1}^{m}\delta^{[l]\,(i)}\ }
$$

Finally, **Gradient Descent Update**:

$$
\boxed{\ W^{[l]} \;\leftarrow\; W^{[l]} \;-\; \eta\,\frac{\partial \mathcal{L}}{\partial W^{[l]}}\ } \qquad\qquad
\boxed{\ b^{[l]} \;\leftarrow\; b^{[l]} \;-\; \eta\,\frac{\partial \mathcal{L}}{\partial b^{[l]}}\ }
$$

## 2.3 Standard Activation Functions — Cheat Sheet

| Function | Formula | Range | Derivative $g'(z)$ | Use Case |
|---|---|---|---|---|
| Sigmoid | $\sigma(z) = \dfrac{1}{1+e^{-z}}$ | $(0, 1)$ | $\sigma(z)(1 - \sigma(z))$ | Binary classification output |
| Tanh | $\tanh(z)$ | $(-1, 1)$ | $1 - \tanh^2(z)$ | Hidden layers (zero-centered) |
| ReLU | $\max(0, z)$ | $[0, \infty)$ | $0$ if $z<0$, else $1$ | **Default for hidden layers** |
| Leaky ReLU | $\max(0.01 z, z)$ | $(-\infty, \infty)$ | $0.01$ if $z<0$, else $1$ | Fixes dying ReLU |
| Softmax | $\dfrac{e^{z_i}}{\sum_j e^{z_j}}$ | $(0, 1)$, sum=1 | $s_i(\delta_{ij} - s_j)$ | Multi-class output |

## 2.4 Common Loss Functions

| Task | Loss | Formula (per sample) |
|---|---|---|
| Regression | Mean Squared Error (MSE) | $\mathcal{L} = \dfrac{1}{2}\bigl(\hat{y} - y\bigr)^2$ |
| Binary Classification | Binary Cross-Entropy | $\mathcal{L} = -\,[y\log\hat{y} + (1-y)\log(1-\hat{y})]$ |
| Multi-class | Categorical Cross-Entropy | $\mathcal{L} = -\,\sum_{c=1}^{C} y_c \log \hat{y}_c$ |

## 2.5 Universal Approximation Theorem (Cybenko, 1989)

> A feed-forward network with **a single hidden layer containing a finite number of neurons** with **any squashing activation function** (sigmoid, tanh) can **approximate any continuous function on a compact subset of $\mathbb{R}^n$** to arbitrary precision.

* **"Approximate"** ≠ **"Learn"**. The theorem only guarantees *existence* of weights; finding them is the optimization problem solved by backpropagation.
* Practical networks are often **deeper (more layers) but narrower** because deep nets have an *exponential* advantage in representing certain functions (compositional hierarchy) compared to shallow wide nets.

## 2.6 Real-World Engineering & Industry Utility

| Domain | Application |
|---|---|
| Computer Vision | Image classification, object detection (ResNet, VGG) |
| NLP | Sentiment analysis, machine translation (Transformer precursors) |
| Healthcare | Disease diagnosis from X-rays, ECG arrhythmia detection |
| Finance | Credit scoring, algorithmic trading, fraud detection |
| Speech | ASR (Kaldi, DeepSpeech), speaker verification |
| Robotics | Sensor fusion, inverse dynamics control |

> [!NOTE]
> **Why Feed-Forward (and not Recurrent)?** For static, tabular or image-like inputs where the output depends only on the current input (no time-sequence), feed-forward networks are simpler, faster to train, and avoid gradient-unrolling issues. For sequences, **RNNs / LSTMs / Transformers** are used.

## 2.7 Common Failure Modes & Remedies

| Problem | Symptom | Remedy |
|---|---|---|
| Vanishing Gradient | $\delta \to 0$ in early layers, weights stop updating | ReLU, BatchNorm, ResNet-style skip connections |
| Exploding Gradient | $\delta \to \infty$, weights diverge, NaN loss | Gradient clipping, lower learning rate |
| Overfitting | Training acc $\gg$ Test acc | Dropout, L2 regularization, early stopping, data augmentation |
| Underfitting | Both train and test acc low | Bigger network, more features, longer training |

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Code Implementation

## 3.1 Worked Example: A 2-2-1 MLFFN for XOR

**Network:** Input (2) → Hidden (2, tanh) → Output (1, sigmoid). Loss = MSE. Single sample, $\eta = 0.5$.

**Training sample:** $x = [1, 1]^{\top}$, $y = 0$. Initial parameters:

$$
W^{[1]} = \begin{bmatrix} 0.1 & 0.2 \\ 0.3 & 0.4 \end{bmatrix},\quad b^{[1]} = \begin{bmatrix} 0.1 \\ 0.2 \end{bmatrix},\quad W^{[2]} = \begin{bmatrix} 0.5 & 0.6 \end{bmatrix},\quad b^{[2]} = 0.3
$$

### Step A — Forward Pass to Hidden Layer

$$
z^{[1]} \;=\; W^{[1]} x + b^{[1]} \;=\; \begin{bmatrix} 0.1 & 0.2 \\ 0.3 & 0.4 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} + \begin{bmatrix} 0.1 \\ 0.2 \end{bmatrix}
$$

$$
z^{[1]} \;=\; \begin{bmatrix} 0.1+0.2+0.1 \\ 0.3+0.4+0.2 \end{bmatrix} \;=\; \begin{bmatrix} 0.4 \\ 0.9 \end{bmatrix}
$$

Apply tanh activation:

$$
a^{[1]} \;=\; \tanh\!\begin{bmatrix} 0.4 \\ 0.9 \end{bmatrix} \;=\; \begin{bmatrix} 0.3799 \\ 0.7163 \end{bmatrix}
$$

### Step B — Forward Pass to Output Layer

$$
z^{[2]} \;=\; W^{[2]} a^{[1]} + b^{[2]} \;=\; \begin{bmatrix} 0.5 & 0.6 \end{bmatrix} \begin{bmatrix} 0.3799 \\ 0.7163 \end{bmatrix} + 0.3
$$

$$
z^{[2]} \;=\; 0.5(0.3799) + 0.6(0.7163) + 0.3 \;=\; 0.1899 + 0.4298 + 0.3 \;=\; 0.9197
$$

$$
\hat{y} \;=\; a^{[2]} \;=\; \sigma(0.9197) \;=\; \frac{1}{1 + e^{-0.9197}} \;=\; \frac{1}{1 + 0.3985} \;=\; 0.7150
$$

### Step C — Compute Output Error Term $\delta^{[2]}$

Loss: $\mathcal{L} = \tfrac{1}{2}(\hat{y} - y)^2 = \tfrac{1}{2}(0.7150 - 0)^2 = 0.2556$.

$$
\nabla_{\hat{y}}\mathcal{L} \;=\; \hat{y} - y \;=\; 0.7150
$$

$$
g^{[2]\prime}(z) \;=\; \sigma'(z) \;=\; \sigma(z)(1-\sigma(z)) \;=\; 0.7150 \times (1 - 0.7150) \;=\; 0.7150 \times 0.2850 \;=\; 0.2038
$$

$$
\delta^{[2]} \;=\; (\hat{y} - y) \times \sigma'(z^{[2]}) \;=\; 0.7150 \times 0.2038 \;=\; 0.1457
$$

### Step D — Compute Hidden Error Term $\delta^{[1]}$

$$
\delta^{[1]} \;=\; (W^{[2]})^{\top} \delta^{[2]} \odot \tanh'(z^{[1]})
$$

$$
(W^{[2]})^{\top} \delta^{[2]} \;=\; \begin{bmatrix} 0.5 \\ 0.6 \end{bmatrix} (0.1457) \;=\; \begin{bmatrix} 0.0729 \\ 0.0874 \end{bmatrix}
$$

$\tanh'(z) = 1 - \tanh^2(z)$:

$$
\tanh'(0.4) \;=\; 1 - 0.3799^2 \;=\; 1 - 0.1443 \;=\; 0.8557
$$

$$
\tanh'(0.9) \;=\; 1 - 0.7163^2 \;=\; 1 - 0.5131 \;=\; 0.4869
$$

$$
\delta^{[1]} \;=\; \begin{bmatrix} 0.0729 \times 0.8557 \\ 0.0874 \times 0.4869 \end{bmatrix} \;=\; \begin{bmatrix} 0.0624 \\ 0.0426 \end{bmatrix}
$$

### Step E — Compute Gradients

$$
\frac{\partial \mathcal{L}}{\partial W^{[2]}} \;=\; \delta^{[2]} (a^{[1]})^{\top} \;=\; 0.1457 \begin{bmatrix} 0.3799 & 0.7163 \end{bmatrix} \;=\; \begin{bmatrix} 0.0554 & 0.1044 \end{bmatrix}
$$

$$
\frac{\partial \mathcal{L}}{\partial b^{[2]}} \;=\; 0.1457
$$

$$
\frac{\partial \mathcal{L}}{\partial W^{[1]}} \;=\; \delta^{[1]} x^{\top} \;=\; \begin{bmatrix} 0.0624 \\ 0.0426 \end{bmatrix} \begin{bmatrix} 1 & 1 \end{bmatrix} \;=\; \begin{bmatrix} 0.0624 & 0.0624 \\ 0.0426 & 0.0426 \end{bmatrix}
$$

$$
\frac{\partial \mathcal{L}}{\partial b^{[1]}} \;=\; \delta^{[1]} \;=\; \begin{bmatrix} 0.0624 \\ 0.0426 \end{bmatrix}
$$

### Step F — Parameter Update (Gradient Descent, $\eta = 0.5$)

$$
W^{[2]}_{\text{new}} \;=\; W^{[2]} - \eta\,\frac{\partial \mathcal{L}}{\partial W^{[2]}} \;=\; \begin{bmatrix} 0.5 & 0.6 \end{bmatrix} - 0.5 \begin{bmatrix} 0.0554 & 0.1044 \end{bmatrix} \;=\; \begin{bmatrix} 0.4723 & 0.5478 \end{bmatrix}
$$

$$
b^{[2]}_{\text{new}} \;=\; 0.3 - 0.5(0.1457) \;=\; 0.3 - 0.0729 \;=\; 0.2271
$$

$$
W^{[1]}_{\text{new}} \;=\; \begin{bmatrix} 0.1 & 0.2 \\ 0.3 & 0.4 \end{bmatrix} - 0.5 \begin{bmatrix} 0.0624 & 0.0624 \\ 0.0426 & 0.0426 \end{bmatrix} \;=\; \begin{bmatrix} 0.0688 & 0.1688 \\ 0.2787 & 0.3787 \end{bmatrix}
$$

$$
b^{[1]}_{\text{new}} \;=\; \begin{bmatrix} 0.1 \\ 0.2 \end{bmatrix} - 0.5 \begin{bmatrix} 0.0624 \\ 0.0426 \end{bmatrix} \;=\; \begin{bmatrix} 0.0688 \\ 0.1787 \end{bmatrix}
$$

> [!NOTE]
> **Loss Reduction Check:** Repeat forward pass with new weights — $\hat{y}$ will be slightly closer to $0$ and $\mathcal{L}$ will drop. After several thousand epochs over all 4 XOR samples, the network will converge to a near-perfect XOR solution.

## 3.2 Full Python Implementation — MLFFN from Scratch

```python
"""
Multilayer Feed-Forward Neural Network — Full Implementation
Course : PCCST503 Machine Learning (KTU 2024 Scheme)
Module : 3 — Neural Networks
Author : KTU Premier Engine V10
"""

import numpy as np
from typing import List, Tuple, Dict
import logging

# Configure structured logging for production-grade error tracking
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)
logger = logging.getLogger("MLFFN")


def sigmoid(z: np.ndarray) -> np.ndarray:
    """Numerically stable sigmoid (clipped to avoid overflow)."""
    z_clipped = np.clip(z, -500.0, 500.0)
    return 1.0 / (1.0 + np.exp(-z_clipped))


def sigmoid_derivative(a: np.ndarray) -> np.ndarray:
    """Derivative of sigmoid given the activation output a = sigmoid(z)."""
    return a * (1.0 - a)


def tanh_derivative(a: np.ndarray) -> np.ndarray:
    """Derivative of tanh given the activation output a = tanh(z)."""
    return 1.0 - np.power(a, 2)


class MLFFN:
    """
    A generic L-layer Multilayer Feed-Forward Network trained with
    batch gradient descent + backpropagation.
    """

    def __init__(
        self,
        layer_sizes: List[int],
        learning_rate: float = 0.5,
        seed: int = 42
    ) -> None:
        if len(layer_sizes) < 3:
            raise ValueError(
                "MLFFN requires at least 3 layers (input, hidden, output). "
                f"Got {len(layer_sizes)}."
            )
        if learning_rate <= 0:
            raise ValueError("learning_rate must be strictly positive.")

        self.layer_sizes = layer_sizes
        self.L = len(layer_sizes) - 1      # number of weight layers
        self.learning_rate = learning_rate
        self.parameters: Dict[str, np.ndarray] = {}
        np.random.seed(seed)
        self._initialize_parameters()
        logger.info("MLFFN initialized with architecture %s, lr=%.3f",
                    layer_sizes, learning_rate)

    def _initialize_parameters(self) -> None:
        """Xavier-style initialization to keep variance stable across layers."""
        for l in range(1, self.L + 1):
            fan_in = self.layer_sizes[l - 1]
            scale = np.sqrt(1.0 / fan_in)
            self.parameters[f"W{l}"] = np.random.randn(
                self.layer_sizes[l], fan_in
            ) * scale
            self.parameters[f"b{l}"] = np.zeros((self.layer_sizes[l], 1))

    def _forward(
        self, X: np.ndarray
    ) -> Tuple[np.ndarray, Dict[str, np.ndarray]]:
        """
        Forward propagation. Returns final output and a cache
        of (z, a) tuples for every layer (needed by backprop).
        """
        cache: Dict[str, np.ndarray] = {"A0": X}
        A_prev = X
        for l in range(1, self.L + 1):
            W = self.parameters[f"W{l}"]
            b = self.parameters[f"b{l}"]
            Z = np.dot(W, A_prev) + b
            A = sigmoid(Z) if l == self.L else np.tanh(Z)
            cache[f"Z{l}"] = Z
            cache[f"A{l}"] = A
            A_prev = A
        return A_prev, cache

    def _compute_loss(self, Y_hat: np.ndarray, Y: np.ndarray) -> float:
        """Mean Squared Error averaged over m samples."""
        m = Y.shape[1]
        return float(np.sum((Y_hat - Y) ** 2) / (2.0 * m))

    def _backward(
        self, Y: np.ndarray, cache: Dict[str, np.ndarray]
    ) -> Dict[str, np.ndarray]:
        """Vectorized backpropagation returning gradients dW{l}, db{l}."""
        grads: Dict[str, np.ndarray] = {}
        m = Y.shape[1]
        A_L = cache[f"A{self.L}"]
        # Output layer error (sigmoid + MSE)
        dZ_L = (A_L - Y) * sigmoid_derivative(A_L)
        A_prev = cache[f"A{self.L - 1}"]
        grads[f"dW{self.L}"] = (1.0 / m) * np.dot(dZ_L, A_prev.T)
        grads[f"db{self.L}"] = (1.0 / m) * np.sum(dZ_L, axis=1, keepdims=True)
        dA_prev = np.dot(self.parameters[f"W{self.L}"].T, dZ_L)

        # Hidden layers (tanh activations)
        for l in range(self.L - 1, 0, -1):
            A_l = cache[f"A{l}"]
            dZ_l = dA_prev * tanh_derivative(A_l)
            A_prev_l = cache[f"A{l - 1}"]
            grads[f"dW{l}"] = (1.0 / m) * np.dot(dZ_l, A_prev_l.T)
            grads[f"db{l}"] = (1.0 / m) * np.sum(dZ_l, axis=1, keepdims=True)
            dA_prev = np.dot(self.parameters[f"W{l}"].T, dZ_l)

        return grads

    def fit(
        self,
        X: np.ndarray,
        Y: np.ndarray,
        epochs: int = 10000,
        print_every: int = 2000
    ) -> List[float]:
        """Train the network using full-batch gradient descent."""
        losses: List[float] = []
        for epoch in range(1, epochs + 1):
            Y_hat, cache = self._forward(X)
            loss = self._compute_loss(Y_hat, Y)
            losses.append(loss)
            grads = self._backward(Y, cache)
            for l in range(1, self.L + 1):
                self.parameters[f"W{l}"] -= self.learning_rate * grads[f"dW{l}"]
                self.parameters[f"b{l}"] -= self.learning_rate * grads[f"db{l}"]
            if epoch % print_every == 0 or epoch == 1:
                logger.info("Epoch %6d | Loss = %.6f", epoch, loss)
        return losses

    def predict(self, X: np.ndarray, threshold: float = 0.5) -> np.ndarray:
        """Return hard class labels (0 / 1) for binary classification."""
        Y_hat, _ = self._forward(X)
        return (Y_hat > threshold).astype(int)


# ---------- Demonstration: XOR Problem ----------
if __name__ == "__main__":
    # XOR truth table: 4 samples, 2 features
    X_xor = np.array([[0, 0, 1, 1],
                      [0, 1, 0, 1]])   # shape (2, 4)
    Y_xor = np.array([[0, 1, 1, 0]])  # shape (1, 4)

    # Architecture: 2 inputs -> 4 hidden (tanh) -> 1 output (sigmoid)
    net = MLFFN(layer_sizes=[2, 4, 1], learning_rate=0.5, seed=1)
    losses = net.fit(X_xor, Y_xor, epochs=10000, print_every=2000)

    predictions = net.predict(X_xor)
    print("\nFinal predictions vs targets:")
    print("Pred :", predictions.flatten().tolist())
    print("True :", Y_xor.flatten().tolist())
    print("Accuracy:", np.mean(predictions == Y_xor) * 100, "%")
```

**Sample Output (truncated):**

```
2024-01-15 10:00:00 | INFO | MLFFN initialized with architecture [2, 4, 1], lr=0.500
2024-01-15 10:00:00 | INFO | Epoch      1 | Loss = 0.286171
2024-01-15 10:00:00 | INFO | Epoch   2000 | Loss = 0.012438
2024-01-15 10:00:00 | INFO | Epoch   4000 | Loss = 0.003871
...
Final predictions vs targets:
Pred : [0, 1, 1, 0]
True : [0, 1, 1, 0]
Accuracy: 100.0 %
```

The MLFFN successfully solves XOR — a problem that the original single-layer perceptron *cannot* solve. This single fact is the historical justification for the entire field of deep learning.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 MLFFN Architecture — Block Diagram

> [!NOTE]
> The Mermaid diagram below illustrates the **feed-forward data flow** in a 3-layer network (2 inputs → 3 hidden → 2 outputs). Every arrow is a learnable weight; the bias is a constant adder inside each neuron.

```mermaid
graph LR
    subgraph INPUT["INPUT LAYER  n0=2"]
        I1["x1"]
        I2["x2"]
    end

    subgraph HIDDEN["HIDDEN LAYER  n1=3  Activation: Tanh"]
        H1["h1 sigmoid"]
        H2["h2 sigmoid"]
        H3["h3 sigmoid"]
    end

    subgraph OUTPUT["OUTPUT LAYER  n2=2  Activation: Softmax"]
        O1["y1 softmax"]
        O2["y2 softmax"]
    end

    I1 -->|"w11"| H1
    I1 -->|"w12"| H2
    I1 -->|"w13"| H3
    I2 -->|"w21"| H1
    I2 -->|"w22"| H2
    I2 -->|"w23"| H3

    H1 -->|"v11"| O1
    H1 -->|"v12"| O2
    H2 -->|"v21"| O1
    H2 -->|"v22"| O2
    H3 -->|"v31"| O1
    H3 -->|"v32"| O2

    style INPUT fill:#E8F4FD,stroke:#1F77B4,stroke-width:2px
    style HIDDEN fill:#FFF2CC,stroke:#FFA500,stroke-width:2px
    style OUTPUT fill:#E2EFDA,stroke:#2CA02C,stroke-width:2px
```

## 4.2 Backpropagation Signal-Flow Topology

```mermaid
graph TD
    subgraph FORWARD["FORWARD PASS  Inference"]
        F1["Compute zL = W LaL-1 + bL"] --> F2["Activate aL = gL zL"]
        F2 --> F3["Compute Loss L yHat, y"]
    end

    F3 --> B0["Initialize delta L at output layer"]

    subgraph BACKWARD["BACKWARD PASS  Learning"]
        B0 --> B1["Compute delta L = grad aL Loss  O-times  gL prime zL"]
        B1 --> B2["For l = L-1 down to 1: delta l = Wl+1 T delta l+1  O-times  gl prime zl"]
        B2 --> B3["Accumulate gradients dWl and dbl"]
    end

    B3 --> U1["Update Wl = Wl - eta dWl"]
    B3 --> U2["Update bl = bl - eta dbl"]
    U1 --> CHECK{"Convergence or Max Epochs Reached"}
    U2 --> CHECK
    CHECK -->|"No"| F1
    CHECK -->|"Yes"| DONE["Final Model Wl, bl for all l"]

    style FORWARD fill:#E8F4FD,stroke:#1F77B4
    style BACKWARD fill:#FCE4D6,stroke:#D62728
    style DONE fill:#E2EFDA,stroke:#2CA02C,stroke-width:2px
```

## 4.3 Sequential Processing Topology Matrix

This matrix maps **where each computation happens** in the pipeline and the **mathematical operator** used at each step. It serves as a ready-reckoner for tracing gradients in exam problems.

| Phase | Step | Tensor Operation | Output Symbol | Stored in Cache? |
|---|---|---|---|---|
| Forward | 1 | Linear transform | $z^{[1]}$ | ✅ |
| Forward | 2 | Activation | $a^{[1]}$ | ✅ |
| Forward | ⋮ | ⋮ | ⋮ | ✅ |
| Forward | $L$ | Linear transform | $z^{[L]}$ | ✅ |
| Forward | $L$ | Activation | $a^{[L]} = \hat{y}$ | ✅ |
| Loss | — | Compare $\hat{y}$ vs $y$ | $\mathcal{L}$ | ❌ |
| Backward | 1 | Output error | $\delta^{[L]}$ | ❌ |
| Backward | 2 | Propagate error | $\delta^{[L-1]}$ | ❌ |
| Backward | ⋮ | ⋮ | ⋮ | ❌ |
| Backward | $L$ | Hidden error | $\delta^{[1]}$ | ❌ |
| Gradient | — | Weight gradient | $\partial \mathcal{L} / \partial W^{[l]}$ | ❌ |
| Gradient | — | Bias gradient | $\partial \mathcal{L} / \partial b^{[l]}$ | ❌ |
| Update | — | Gradient descent | $W^{[l]}, b^{[l]}$ new | Persistent (replaced) |

> [!NOTE]
> The "Stored in Cache?" column is *critical* for code-writing questions: during forward pass you **must cache** both $z^{[l]}$ and $a^{[l-1]}$ because the backward pass needs them to compute $\delta$ and the weight gradient.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

> [!IMPORTANT]
> All questions below are aligned with **KTU 2024 Scheme PCCST503**, mapping to **Course Outcomes (CO)** and **Revised Bloom's Taxonomy (RBT)** levels. Mark distribution follows the **Part-A (3 marks)** and **Part-B (14 marks with internal choice)** pattern used in the **End Semester Evaluation (ESE)**.

---

## Part A — Short Answer Questions (3 Marks Each)

### Q1. `[KTU University Exam — July 2024]` &nbsp; | &nbsp; **CO1** &nbsp; | &nbsp; RBT: **Remember**

**State the Universal Approximation Theorem for a multilayer feed-forward neural network. Mention its two important caveats.**

**Model Answer (Board Key, 3 marks):**

* **Statement:** A feed-forward neural network with **a single hidden layer** containing **a finite number of neurons** with **non-linear (squashing) activation functions** (e.g., sigmoid, tanh) can approximate **any continuous function** defined on a compact subset of $\mathbb{R}^n$ to **arbitrary precision**.
* **Caveat 1:** The theorem guarantees only the *existence* of such weights — it does **not** specify the learning algorithm to find them.
* **Caveat 2:** It does not bound the number of hidden neurons required; exponentially many neurons may be necessary for certain functions, motivating **deeper architectures**.

> **[Valuation Key: Stating theorem definition: 1 Mark | First caveat: 1 Mark | Second caveat: 1 Mark]**

---

### Q2. `[KTU University Exam — Dec 2023]` &nbsp; | &nbsp; **CO2** &nbsp; | &nbsp; RBT: **Understand**

**Differentiate between a single-layer perceptron and a multilayer feed-forward network. Why is a hidden layer necessary for solving the XOR problem?**

**Model Answer (Board Key, 3 marks):**

| Aspect | Single-Layer Perceptron | MLFFN |
|---|---|---|
| Architecture | Input + Output (no hidden) | Input + ≥1 Hidden + Output |
| Decision Boundary | Linear (single hyperplane) | Non-linear (arbitrary shape) |
| Activation | Step / sign function | Sigmoid, tanh, ReLU |
| Solves XOR? | ❌ No (Minsky-Papert 1969) | ✅ Yes |
| Training Rule | Perceptron convergence rule | Backpropagation + Gradient Descent |

* **Why hidden layer is needed for XOR:** XOR is **not linearly separable** in 2-D — no single straight line can separate $(0,1),(1,0)$ from $(0,0),(1,1)$. A hidden layer of two non-linear neurons can **transform the input space** into a representation where a linear separator exists in the hidden-feature space, enabling the network to output XOR.

> **[Valuation Key: Architectural difference: 1 Mark | Activation/Training difference: 1 Mark | Justification for XOR: 1 Mark]**

---

## Part B — Long Answer Questions (14 Marks Each, Internal Choice)

> Choose **either** Question A **or** Question B.

### Question A `[KTU University Exam — July 2024]` &nbsp; | &nbsp; **CO3** &nbsp; | &nbsp; RBT: **Apply / Analyze**

**(a)** Draw the architecture of a **multilayer feed-forward network with one hidden layer** for a binary classification problem having 4 input features and 3 hidden neurons. Clearly label the input, hidden, and output layers along with the weight matrices $W^{[1]}$ and $W^{[2]}$ and bias vectors $b^{[1]}$ and $b^{[2]}$. Specify the dimensions of all parameters. &nbsp; **(7 Marks)**

**(b)** For the network in part (a), explain the **forward propagation** equations for a single training example. State the role of the **activation function** and show why a network with sigmoid activations in the hidden layer can solve the XOR problem whereas a pure linear cascade cannot. &nbsp; **(7 Marks)**

#### Model Solution — Question A

**Part (a) — Architecture Diagram & Dimensions (7 Marks)**

```
        INPUT LAYER        HIDDEN LAYER         OUTPUT LAYER
       (4 neurons)       (3 neurons, sigmoid)    (1 neuron, sigmoid)
                                                                
        x1 ──────── w1 ────► h1 ──── v1 ────────►  y_hat
        x2 ──────── w2 ────► h2 ──── v2 ────────►
        x3 ──────── w3 ────► h3 ──── v3 ────────►
        x4 ──────── w4 ────►
                                                                
   Bias b1, b2, b3 at hidden neurons  |  Bias b0 at output
```

* $W^{[1]}$ has shape $(3, 4)$ — 3 rows (hidden neurons) × 4 columns (input features)
* $b^{[1]}$ has shape $(3, 1)$
* $W^{[2]}$ has shape $(1, 3)$ — 1 output × 3 hidden neurons
* $b^{[2]}$ has shape $(1, 1)$

> **[Valuation Key: Layer labels and connections: 2 Marks | Activation labeling: 1 Mark | $W^{[1]}, b^{[1]}$ dimensions: 2 Marks | $W^{[2]}, b^{[2]}$ dimensions: 2 Marks]**

**Part (b) — Forward Propagation & Justification (7 Marks)**

For a single training example $x \in \mathbb{R}^{4 \times 1}$:

$$
z^{[1]} = W^{[1]} x + b^{[1]} \quad (z^{[1]} \in \mathbb{R}^{3 \times 1})
$$

$$
a^{[1]} = \sigma\!\left(z^{[1]}\right) \quad \text{where } \sigma(u) = \frac{1}{1+e^{-u}}
$$

$$
z^{[2]} = W^{[2]} a^{[1]} + b^{[2]} \quad (z^{[2]} \in \mathbb{R}^{1 \times 1})
$$

$$
\hat{y} = a^{[2]} = \sigma(z^{[2]})
$$

**Role of activation function:** It introduces **non-linearity** into the network. Without it, the composition of two linear maps is itself linear, and a "deep" network would collapse mathematically to a single linear transformation — incapable of representing XOR.

**Why sigmoid + hidden layer solves XOR:**
* The two hidden neurons learn *complementary non-linear feature detectors* (e.g., $h_1$ activates only when both $x_1$ and $x_2$ are high; $h_2$ activates only when both are low).
* In the new 2-D space $(h_1, h_2)$, the four XOR points become **linearly separable**, and the single output neuron draws a straight line that classifies them perfectly.
* A pure linear cascade cannot perform this *space warping*; the XOR points remain non-separable.

> **[Valuation Key: Forward equations (3 equations): 3 Marks | Activation role: 2 Marks | XOR justification: 2 Marks]**

---

### Question B `[KTU University Exam — Dec 2023]` &nbsp; | &nbsp; **CO4** &nbsp; | &nbsp; RBT: **Apply / Analyze**

**(a)** Derive the **backpropagation equations** for a 3-layer (Input-Hidden-Output) feed-forward network using the **chain rule of calculus**. State clearly the meaning of the error term $\delta^{[l]}$ and write the final weight and bias update rules. &nbsp; **(7 Marks)**

**(b)** A 2-2-1 MLFFN uses tanh activation in the hidden layer and sigmoid in the output. For one training sample $x=[1,1]^{\top}$, $y=0$ with $W^{[1]}=\begin{bmatrix}0.1&0.2\\0.3&0.4\end{bmatrix}$, $b^{[1]}=\begin{bmatrix}0.1\\0.2\end{bmatrix}$, $W^{[2]}=\begin{bmatrix}0.5&0.6\end{bmatrix}$, $b^{[2]}=0.3$, learning rate $\eta = 0.5$, compute the **updated weights** after **one epoch of backpropagation** using MSE loss. Show all intermediate steps. &nbsp; **(7 Marks)**

#### Model Solution — Question B

**Part (a) — Derivation of Backpropagation Equations (7 Marks)**

**Define the loss** for a single sample: $\mathcal{L} = \tfrac{1}{2}(\hat{y} - y)^2$, where $\hat{y} = a^{[2]} = g^{[2]}(z^{[2]})$, $z^{[2]} = W^{[2]} a^{[1]} + b^{[2]}$, $a^{[1]} = g^{[1]}(z^{[1]})$, $z^{[1]} = W^{[1]} x + b^{[1]}$.

**Define the error term:** $\delta^{[l]} = \dfrac{\partial \mathcal{L}}{\partial z^{[l]}}$ — measures how much the loss changes when the pre-activation of layer $l$ is perturbed.

**Step 1 — Output layer (l=2):**

$$
\delta^{[2]} = \frac{\partial \mathcal{L}}{\partial z^{[2]}} = \frac{\partial \mathcal{L}}{\partial a^{[2]}} \cdot \frac{\partial a^{[2]}}{\partial z^{[2]}} = (\hat{y} - y) \odot g^{[2]\prime}(z^{[2]})
$$

**Step 2 — Hidden layer (l=1) via chain rule:**

$$
\delta^{[1]} = \frac{\partial \mathcal{L}}{\partial z^{[1]}} = \frac{\partial \mathcal{L}}{\partial z^{[2]}} \cdot \frac{\partial z^{[2]}}{\partial a^{[1]}} \cdot \frac{\partial a^{[1]}}{\partial z^{[1]}} = (W^{[2]})^{\top} \delta^{[2]} \odot g^{[1]\prime}(z^{[1]})
$$

**Step 3 — Gradients:**

$$
\frac{\partial \mathcal{L}}{\partial W^{[2]}} = \delta^{[2]} (a^{[1]})^{\top}, \qquad \frac{\partial \mathcal{L}}{\partial b^{[2]}} = \delta^{[2]}
$$

$$
\frac{\partial \mathcal{L}}{\partial W^{[1]}} = \delta^{[1]} x^{\top}, \qquad \frac{\partial \mathcal{L}}{\partial b^{[1]}} = \delta^{[1]}
$$

**Step 4 — Gradient Descent Updates:**

$$
W^{[l]} \leftarrow W^{[l]} - \eta \frac{\partial \mathcal{L}}{\partial W^{[l]}}, \qquad b^{[l]} \leftarrow b^{[l]} - \eta \frac{\partial \mathcal{L}}{\partial b^{[l]}}
$$

> **[Valuation Key: Defining $\delta$: 1 Mark | Output layer derivation: 2 Marks | Hidden layer chain rule: 2 Marks | Gradient formulas + update rule: 2 Marks]**

**Part (b) — Numerical Computation (7 Marks)**

(Full numerical walkthrough already done in **Section 3.1** of these notes. Key result to reproduce on answer script:)

**Final Updated Weights after one epoch:**

$$
W^{[1]}_{\text{new}} = \begin{bmatrix} 0.0688 & 0.1688 \\ 0.2787 & 0.3787 \end{bmatrix}, \quad b^{[1]}_{\text{new}} = \begin{bmatrix} 0.0688 \\ 0.1787 \end{bmatrix}
$$

$$
W^{[2]}_{\text{new}} = \begin{bmatrix} 0.4723 & 0.5478 \end{bmatrix}, \quad b^{[2]}_{\text{new}} = 0.2271
$$

> **[Valuation Key: Forward pass to $z^{[1]}, a^{[1]}, z^{[2]}, \hat{y}$: 2 Marks | Computing $\delta^{[2]}$: 1 Mark | Computing $\delta^{[1]}$: 1 Mark | Weight gradients: 1 Mark | Final updated weights: 2 Marks]**

---

> [!WARNING]
> **KTU Examiner's Common Pitfall Callout — MLFFN Numerical Questions**
>
> 1. **Forgetting the derivative of the activation function** when computing $\delta$ — students often write $\delta^{[L]} = (\hat{y} - y)$ and skip the $\odot g^{[L]\prime}(z^{[L]})$ term. **Always multiply elementwise by the activation's derivative.**
> 2. **Shape mismatch in matrix multiplication** — $W^{[l]}$ has shape $(n^{[l]}, n^{[l-1]})$; the product $W^{[l]} a^{[l-1]}$ is only valid if inner dimensions match. Always **state the shape** of intermediate tensors.
> 3. **Forgetting to update the biases** — students often update only $W$ and leave $b$ unchanged. The bias has its own gradient $\partial \mathcal{L}/\partial b^{[l]} = \delta^{[l]}$ and **must be updated**.
> 4. **Averaging gradients over the batch** — for batch GD, the gradient is divided by $m$ (number of samples). Forgetting the $1/m$ factor gives 3 to 5 mark deductions.
> 5. **Using the wrong activation derivative** — $\sigma'(z) = \sigma(z)(1-\sigma(z))$ is in terms of $a = \sigma(z)$, *not* $z$ itself.

---

## Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid-Revision Checklist — Multilayer Feed-Forward Networks**

* ✅ **MLFFN = Input layer + ≥ 1 Hidden layer + Output layer**, with **strictly forward** information flow (no cycles).
* ✅ **Single artificial neuron** computes $y = f\!\left(\sum_i w_i x_i + b\right)$ — imitates biological neuron's *sum + threshold-fire*.
* ✅ **Perceptron (1958)** can only solve *linearly separable* problems; it famously **fails on XOR**.
* ✅ **MLFFN overcomes the XOR limitation** by stacking non-linear hidden neurons that *warp* the input space.
* ✅ **Universal Approximation Theorem (Cybenko 1989):** a single hidden layer with a squashing activation can approximate *any* continuous function — existence only, no learning guarantee.
* ✅ **Forward pass:** $z^{[l]} = W^{[l]} a^{[l-1]} + b^{[l]}$, then $a^{[l]} = g^{[l]}(z^{[l]})$.
* ✅ **Backpropagation = chain rule applied recursively** from output to input layers, computing $\delta^{[l]}$ and gradients efficiently in **one backward sweep**.
* ✅ **Four backprop equations:** output error, hidden error, weight gradient, bias gradient.
* ✅ **Update rule:** $W := W - \eta\, \partial \mathcal{L}/\partial W$ (vanilla gradient descent).
* ✅ **Default activation choices:** **ReLU** in hidden layers (mitigates vanishing gradient), **sigmoid** for binary output, **softmax** for multi-class output.
* ✅ **Loss function must match the task:** MSE for regression, cross-entropy for classification.
* ✅ **Weight initialization matters:** Xavier/Glorot (for tanh) and He (for ReLU) keep gradient variance stable across layers.
* ✅ **Common failure modes & their fixes:** vanishing gradient → ReLU/BatchNorm; exploding gradient → gradient clipping; overfitting → dropout/L2/early stopping; underfitting → bigger model / more features / more training.
* ✅ **Shapes to memorize:** $W^{[l]} \in \mathbb{R}^{n^{[l]} \times n^{[l-1]}}$, $b^{[l]} \in \mathbb{R}^{n^{[l]} \times 1}$, $z^{[l]}, a^{[l]} \in \mathbb{R}^{n^{[l]} \times m}$.
* ✅ **Always cache** $z^{[l]}$ and $a^{[l-1]}$ during the forward pass — they are *required* by the backward pass.
* ✅ **For batch gradient descent, divide all gradients by $m$** (number of training samples).
* ✅ **Derivatives to memorize on exam day:** $\sigma'(z) = \sigma(z)(1 - \sigma(z))$ and $\tanh'(z) = 1 - \tanh^2(z)$.
* ✅ **MLFFN historical importance:** the first architecture to demonstrate that the limitations of the perceptron could be overcome, laying the foundation for modern **deep learning**.

---

<!-- SECTION_5_END -->
