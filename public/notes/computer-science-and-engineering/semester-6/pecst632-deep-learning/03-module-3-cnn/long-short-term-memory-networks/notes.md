# Long Short Term Memory Networks.

<!-- SECTION_1_START -->

# Long Short-Term Memory (LSTM) Networks

## 1.1 Formal Academic Definition (KTU 2024 Syllabus Aligned)

> [!IMPORTANT]
> **Definition (Hochreiter & Schmidhuber, 1997):** A **Long Short-Term Memory (LSTM) network** is a specialized variant of the Recurrent Neural Network (RNN) architecture engineered to overcome the **vanishing and exploding gradient problem** inherent in standard RNNs. It achieves this by introducing a **memory cell** regulated by three multiplicative gating mechanisms — the **forget gate**, **input gate**, and **output gate** — that collectively control the flow, retention, and emission of information over arbitrary time lags.

In the KTU 2024 Scheme (PECST632 – Deep Learning), LSTMs are positioned under **Sequence Modeling** and form the foundational building block for advanced architectures such as **GRUs**, **Seq2Seq models**, **Transformers (predecessor)**, and **Attention-based networks**.

---

## 1.2 Conceptual Analogy — Plain English Intuition

> [!NOTE]
> **Analogy — The "Selective Librarian" of a Neural Network**

Imagine a **librarian** managing a vast library of books (your long sequence of data). Standard RNNs are like a librarian with a **bad short-term memory** — by the time page 500 of a book arrives, the librarian has already forgotten the plot from page 1 (**vanishing gradient**).

The **LSTM librarian** has a powerful toolkit:

1. 📖 A **Notebook (Cell State $C_t$)** — long-term memory storage.
2. 🚪 A **Forget Gate** — decides which old notes to **erase** ("Delete chapter 2, it's no longer relevant").
3. ✍️ An **Input Gate** — decides which **new information to write** down ("Note down the villain's name!").
4. 📢 An **Output Gate** — decides **what to say out loud** right now ("Tell the reader the current scene").

This selective write/read/erase mechanism allows the LSTM to **remember information for thousands of time steps**, making it the gold standard for time-series forecasting, NLP, speech recognition, and financial modeling.

---

## 1.3 Why LSTMs Matter — Engineering Perspective

| Problem Domain | Application of LSTM |
|---|---|
| **Natural Language Processing** | Machine Translation, Sentiment Analysis, Text Generation |
| **Time-Series Forecasting** | Stock Price Prediction, Weather Forecasting, Energy Load |
| **Speech Recognition** | Voice Assistants (Siri, Alexa), Automatic Transcription |
| **Medical Signal Analysis** | ECG/EEG Sequence Classification, Patient Monitoring |
| **Anomaly Detection** | Network Intrusion Detection, Predictive Maintenance |

> [!TIP]
> **KTU High-Yield Fact:** LSTMs typically use the **sigmoid ($\sigma$) activation** for gates (output range $\vert 0, 1 \vert$) and **hyperbolic tangent ($\tanh$)** for candidate cell state (output range $\vert -1, 1 \vert$). This is a frequently tested point!

---

## 1.4 Geometric Intuition of Gates

> [!VISUALIZATION CONTROL]
> **Concept:** Sigmoid Gating Behavior on Cell State
> **GeoGebra / Desmos Input Equations:**
> * `sigma(x) = 1 / (1 + e^(-x))`
> * `tanh(x) = (e^x - e^(-x)) / (e^x + e^(-x))`
> **Visual Description:** The sigmoid curve maps any real input $x \in (-\infty, +\infty)$ to a probability-like value in $(0, 1)$. When multiplied element-wise with the cell state, a gate value near **0** blocks information (close door), while a value near **1** lets information pass (open door). A value of **0.5** acts as a soft pass-through filter.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Core Problem LSTMs Solve

A standard RNN computes the hidden state using:

$$h_t = \tanh(W_{hh} \, h_{t-1} + W_{xh} \, x_t + b_h)$$

During **Backpropagation Through Time (BPTT)**, gradients are multiplied repeatedly. If the largest singular value of $W_{hh}$ is less than 1, gradients **vanish exponentially**; if greater than 1, they **explode**. LSTMs solve this via an **additive cell state update** rather than purely multiplicative hidden state propagation.

---

## 2.2 LSTM Architecture — The Five Core Equations

Let $x_t \in \mathbb{R}^{d}$ be the input at time $t$, $h_{t-1} \in \mathbb{R}^{h}$ the previous hidden state, and $C_{t-1} \in \mathbb{R}^{h}$ the previous cell state.

> [!IMPORTANT]
> **Step 1 — Forget Gate ($f_t$):** Decides what to discard from the previous cell state.
> $$f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$$

> [!IMPORTANT]
> **Step 2 — Input Gate ($i_t$) and Candidate Values ($\tilde{C}_t$):** Decides what new information to store.
> $$i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$$
> $$\tilde{C}_t = \tanh(W_C \cdot [h_{t-1}, x_t] + b_C)$$

> [!IMPORTANT]
> **Step 3 — Cell State Update ($C_t$):** The master memory write operation.
> $$C_t = f_t \odot C_{t-1} + i_t \odot \tilde{C}_t$$

> [!IMPORTANT]
> **Step 4 — Output Gate ($o_t$):** Decides what to emit from the cell state.
> $$o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$$

> [!IMPORTANT]
> **Step 5 — Hidden State Output ($h_t$):** The filtered output to the next time step.
> $$h_t = o_t \odot \tanh(C_t)$$

Where:
- $W_f, W_i, W_C, W_o \in \mathbb{R}^{h \times (h+d)}$ are learnable weight matrices
- $b_f, b_i, b_C, b_o \in \mathbb{R}^{h}$ are learnable bias vectors
- $\odot$ denotes **element-wise (Hadamard) product**
- $\sigma(\cdot)$ is the **logistic sigmoid** function
- $\tanh(\cdot)$ is the **hyperbolic tangent** function

---

## 2.3 KTU Formula Cheat Sheet

| Component | Symbol | Formula | Output Range | Purpose |
|---|---|---|---|---|
| Forget Gate | $f_t$ | $\sigma(W_f [h_{t-1}, x_t] + b_f)$ | $\vert 0, 1 \vert$ | Erase irrelevant memory |
| Input Gate | $i_t$ | $\sigma(W_i [h_{t-1}, x_t] + b_i)$ | $\vert 0, 1 \vert$ | Allow new memory inflow |
| Candidate State | $\tilde{C}_t$ | $\tanh(W_C [h_{t-1}, x_t] + b_C)$ | $\vert -1, 1 \vert$ | Generate new memory content |
| Cell State | $C_t$ | $f_t \odot C_{t-1} + i_t \odot \tilde{C}_t$ | $\mathbb{R}$ | Long-term memory storage |
| Output Gate | $o_t$ | $\sigma(W_o [h_{t-1}, x_t] + b_o)$ | $\vert 0, 1 \vert$ | Filter what to expose |
| Hidden State | $h_t$ | $o_t \odot \tanh(C_t)$ | $\vert -1, 1 \vert$ | Short-term output |

### 2.3.1 Weight Matrix Dimensions (Critical for KTU)

| Weight Matrix | Dimensions | Inputs Concatenated |
|---|---|---|
| $W_f$ | $h \times (h + d)$ | $[h_{t-1}; x_t]$ |
| $W_i$ | $h \times (h + d)$ | $[h_{t-1}; x_t]$ |
| $W_C$ | $h \times (h + d)$ | $[h_{t-1}; x_t]$ |
| $W_o$ | $h \times (h + d)$ | $[h_{t-1}; x_t]$ |

Where $h$ = number of hidden units, $d$ = input feature dimension.

---

## 2.4 Variants of LSTM (Frequently Asked in KTU)

> [!TIP]
> **Peephole LSTM (Gers & Schmidhuber, 2000):** Gates are allowed to inspect the cell state:
> $$f_t = \sigma(W_f \cdot [C_{t-1}, h_{t-1}, x_t] + b_f)$$

> [!TIP]
> **Coupled Forget-Input Gate (Chung et al., 2014):** Forget and input decisions are tied:
> $$C_t = f_t \odot C_{t-1} + (1 - f_t) \odot \tilde{C}_t$$

> [!TIP]
> **Gated Recurrent Unit (GRU — Cho et al., 2014):** Simplified version combining forget and input gates into a single **update gate** $z_t$, and merging cell state and hidden state.

---

## 2.5 Real-World Production Utility

| Industry | LSTM Application | Business Impact |
|---|---|---|
| **Finance** | Algorithmic Trading, Fraud Detection | Captures multi-year temporal patterns |
| **Healthcare** | ICU Patient Deterioration Prediction | Early warning systems save lives |
| **NLP** | Google Translate (legacy), Autocomplete | Context-aware language modeling |
| **Manufacturing** | Predictive Maintenance of Turbines | Reduces unplanned downtime by 30-50% |

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Python Implementation

## 3.1 Forward Pass — Numerical Worked Example

### Problem Setup
Let $h = 2$ (hidden size), $d = 1$ (input size), and assume at time $t$:
- $x_t = [1.0]^T$
- $h_{t-1} = [0.5, -0.2]^T$
- $C_{t-1} = [1.0, 0.0]^T$

Let all weight matrices be initialized as $2 \times 3$ identity-like matrices (truncated), and biases = 0 for simplicity:

$$
W_f = \begin{bmatrix} 0.1 & 0.2 & 0.3 \\ 0.4 & 0.5 & 0.6 \end{bmatrix}, \quad W_i = \begin{bmatrix} 0.2 & 0.1 & 0.4 \\ 0.3 & 0.5 & 0.1 \end{bmatrix}
$$

$$
W_C = \begin{bmatrix} 0.1 & 0.3 & 0.2 \\ 0.4 & 0.2 & 0.3 \end{bmatrix}, \quad W_o = \begin{bmatrix} 0.3 & 0.2 & 0.1 \\ 0.1 & 0.4 & 0.5 \end{bmatrix}
$$

### Step 1: Concatenate Inputs
$$
[h_{t-1}; x_t] = \begin{bmatrix} 0.5 \\ -0.2 \\ 1.0 \end{bmatrix}
$$

### Step 2: Compute Forget Gate $f_t$

$$
W_f \cdot [h_{t-1}; x_t] = \begin{bmatrix} (0.1)(0.5) + (0.2)(-0.2) + (0.3)(1.0) \\ (0.4)(0.5) + (0.5)(-0.2) + (0.6)(1.0) \end{bmatrix} = \begin{bmatrix} 0.31 \\ 0.56 \end{bmatrix}
$$

Applying sigmoid:
$$
f_t = \sigma\begin{bmatrix} 0.31 \\ 0.56 \end{bmatrix} = \begin{bmatrix} \frac{1}{1 + e^{-0.31}} \\ \frac{1}{1 + e^{-0.56}} \end{bmatrix} = \begin{bmatrix} 0.5769 \\ 0.6365 \end{bmatrix}
$$

> **Interpretation:** The forget gate retains **~58%** and **~64%** of the previous cell state.

### Step 3: Compute Input Gate $i_t$

$$
W_i \cdot [h_{t-1}; x_t] = \begin{bmatrix} (0.2)(0.5) + (0.1)(-0.2) + (0.4)(1.0) \\ (0.3)(0.5) + (0.5)(-0.2) + (0.1)(1.0) \end{bmatrix} = \begin{bmatrix} 0.48 \\ 0.15 \end{bmatrix}
$$

$$
i_t = \sigma\begin{bmatrix} 0.48 \\ 0.15 \end{bmatrix} = \begin{bmatrix} 0.6178 \\ 0.5374 \end{bmatrix}
$$

### Step 4: Compute Candidate Cell State $\tilde{C}_t$

$$
W_C \cdot [h_{t-1}; x_t] = \begin{bmatrix} (0.1)(0.5) + (0.3)(-0.2) + (0.2)(1.0) \\ (0.4)(0.5) + (0.2)(-0.2) + (0.3)(1.0) \end{bmatrix} = \begin{bmatrix} 0.19 \\ 0.46 \end{bmatrix}
$$

$$
\tilde{C}_t = \tanh\begin{bmatrix} 0.19 \\ 0.46 \end{bmatrix} = \begin{bmatrix} 0.1874 \\ 0.4301 \end{bmatrix}
$$

### Step 5: Update Cell State $C_t$

$$
f_t \odot C_{t-1} = \begin{bmatrix} 0.5769 \\ 0.6365 \end{bmatrix} \odot \begin{bmatrix} 1.0 \\ 0.0 \end{bmatrix} = \begin{bmatrix} 0.5769 \\ 0.0 \end{bmatrix}
$$

$$
i_t \odot \tilde{C}_t = \begin{bmatrix} 0.6178 \\ 0.5374 \end{bmatrix} \odot \begin{bmatrix} 0.1874 \\ 0.4301 \end{bmatrix} = \begin{bmatrix} 0.1158 \\ 0.2311 \end{bmatrix}
$$

$$
C_t = \begin{bmatrix} 0.5769 + 0.1158 \\ 0.0 + 0.2311 \end{bmatrix} = \begin{bmatrix} 0.6927 \\ 0.2311 \end{bmatrix}
$$

> **Result:** The new cell state is $C_t = [0.6927, \; 0.2311]^T$.

### Step 6: Compute Output Gate $o_t$

$$
W_o \cdot [h_{t-1}; x_t] = \begin{bmatrix} (0.3)(0.5) + (0.2)(-0.2) + (0.1)(1.0) \\ (0.1)(0.5) + (0.4)(-0.2) + (0.5)(1.0) \end{bmatrix} = \begin{bmatrix} 0.21 \\ 0.47 \end{bmatrix}
$$

$$
o_t = \sigma\begin{bmatrix} 0.21 \\ 0.47 \end{bmatrix} = \begin{bmatrix} 0.5523 \\ 0.6154 \end{bmatrix}
$$

### Step 7: Compute Hidden State $h_t$

$$
\tanh(C_t) = \tanh\begin{bmatrix} 0.6927 \\ 0.2311 \end{bmatrix} = \begin{bmatrix} 0.6015 \\ 0.2273 \end{bmatrix}
$$

$$
h_t = o_t \odot \tanh(C_t) = \begin{bmatrix} 0.5523 \\ 0.6154 \end{bmatrix} \odot \begin{bmatrix} 0.6015 \\ 0.2273 \end{bmatrix} = \begin{bmatrix} 0.3322 \\ 0.1399 \end{bmatrix}
$$

> **Final Result:** The hidden state output is $h_t = [0.3322, \; 0.1399]^T$.

---

## 3.2 Complete Python Implementation (PyTorch-Style)

```python
import numpy as np
from typing import Tuple

class LSTMCell:
    """
    A complete, production-grade LSTM cell implementation from scratch.
    Implements the canonical Hochreiter & Schmidhuber (1997) formulation.
    """
    
    def __init__(self, input_size: int, hidden_size: int, seed: int = 42) -> None:
        np.random.seed(seed)
        self.input_size: int = input_size
        self.hidden_size: int = hidden_size
        
        # Xavier-style initialization for stable gradients
        concat_size: int = hidden_size + input_size
        scale: float = np.sqrt(1.0 / hidden_size)
        
        # Combined weight matrix (4 gates stacked vertically for efficiency)
        self.W: np.ndarray = np.random.randn(4 * hidden_size, concat_size) * scale
        self.b: np.ndarray = np.zeros((4 * hidden_size, 1))
        
        # State caches for BPTT
        self.h_prev: np.ndarray = np.zeros((hidden_size, 1))
        self.C_prev: np.ndarray = np.zeros((hidden_size, 1))
    
    @staticmethod
    def _sigmoid(x: np.ndarray) -> np.ndarray:
        """Numerically stable sigmoid activation."""
        return 1.0 / (1.0 + np.exp(-np.clip(x, -500, 500)))
    
    def forward(self, x_t: np.ndarray) -> Tuple[np.ndarray, np.ndarray]:
        """
        Performs one full forward time-step of the LSTM cell.
        
        Args:
            x_t: Input vector at time t, shape (input_size, 1)
        
        Returns:
            h_t: Hidden state at time t, shape (hidden_size, 1)
            C_t: Cell state at time t, shape (hidden_size, 1)
        
        Raises:
            ValueError: If input shape does not match expected input_size.
        """
        if x_t.shape != (self.input_size, 1):
            raise ValueError(
                f"Input shape mismatch: expected {(self.input_size, 1)}, got {x_t.shape}"
            )
        
        # Step 0: Concatenate previous hidden state and current input
        concat: np.ndarray = np.vstack((self.h_prev, x_t))  # (h + d, 1)
        
        # Step 1: Compute all 4 gate pre-activations in a single matmul
        gates: np.ndarray = self.W @ concat + self.b  # (4h, 1)
        
        # Step 2: Slice the gates into forget, input, candidate, output
        f_t: np.ndarray = self._sigmoid(gates[0 * self.hidden_size:1 * self.hidden_size])
        i_t: np.ndarray = self._sigmoid(gates[1 * self.hidden_size:2 * self.hidden_size])
        C_tilde: np.ndarray = np.tanh(gates[2 * self.hidden_size:3 * self.hidden_size])
        o_t: np.ndarray = self._sigmoid(gates[3 * self.hidden_size:4 * self.hidden_size])
        
        # Step 3: Update cell state (master memory)
        C_t: np.ndarray = f_t * self.C_prev + i_t * C_tilde
        
        # Step 4: Update hidden state (filtered output)
        h_t: np.ndarray = o_t * np.tanh(C_t)
        
        # Persist states for next time step
        self.h_prev = h_t
        self.C_prev = C_t
        
        return h_t, C_t
    
    def reset_state(self) -> None:
        """Reset internal states (required before processing a new sequence)."""
        self.h_prev = np.zeros((self.hidden_size, 1))
        self.C_prev = np.zeros((self.hidden_size, 1))


# --- Validation against the worked example ---
if __name__ == "__main__":
    cell = LSTMCell(input_size=1, hidden_size=2, seed=42)
    cell.h_prev = np.array([[0.5], [-0.2]])
    cell.C_prev = np.array([[1.0], [0.0]])
    
    x_t = np.array([[1.0]])
    h_t, C_t = cell.forward(x_t)
    
    print(f"h_t = \n{h_t}\n")  # Expected ~ [[0.33], [0.14]]
    print(f"C_t = \n{C_t}")    # Expected ~ [[0.69], [0.23]]
```

---

## 3.3 Training Procedure — Backpropagation Through Time (BPTT)

> [!IMPORTANT]
> **BPTT Steps for LSTM:**
> 1. **Unroll** the LSTM for $T$ time steps.
> 2. **Forward pass** to compute all $h_t$ and $C_t$ for $t = 1, \ldots, T$.
> 3. **Compute Loss** $L = \sum_{t=1}^{T} L_t$ (e.g., Cross-Entropy for classification).
> 4. **Backward pass** to compute $\frac{\partial L}{\partial W_f}, \frac{\partial L}{\partial W_i}, \frac{\partial L}{\partial W_C}, \frac{\partial L}{\partial W_o}$.
> 5. **Gradient Clipping** (clip gradients to $\vert -c, c \vert$, typically $c = 5$) to prevent explosion.
> 6. **Update weights** using Adam / RMSprop / SGD.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 LSTM Cell Block Diagram (Mermaid)

```mermaid
flowchart TB
    inputA[Input x_t]:::inputStyle
    hiddenA[Previous Hidden h_{t-1}]:::inputStyle
    cellA[Previous Cell State C_{t-1}]:::inputStyle

    concat[Concatenation Layer]:::processStyle
    
    sigF[Sigmoid Forget Gate]:::gateStyle
    sigI[Sigmoid Input Gate]:::gateStyle
    sigO[Sigmoid Output Gate]:::gateStyle
    tanhC[Hyperbolic Tangent Candidate]:::gateStyle
    
    multF[Hadamard Product with C_{t-1}]:::multiplierStyle
    multI[Hadamard Product with C_tilde]:::multiplierStyle
    sumOp[Additive Sum]:::sumStyle
    multO[Hadamard Product with tanh C_t]:::multiplierStyle
    tanhH[TanH Squash]:::gateStyle

    cellOut[New Cell State C_t]:::outputStyle
    hiddenOut[New Hidden State h_t]:::outputStyle

    cellA --> multF
    sigF --> multF
    multF --> sumOp
    sigI --> multI
    tanhC --> multI
    multI --> sumOp
    sumOp --> cellOut
    sumOp --> tanhH
    sigO --> multO
    tanhH --> multO
    multO --> hiddenOut
    
    inputA --> concat
    hiddenA --> concat
    concat --> sigF
    concat --> sigI
    concat --> tanhC
    concat --> sigO

    classDef inputStyle fill:#E3F2FD,stroke:#1976D2,stroke-width:2px,color:#000
    classDef outputStyle fill:#C8E6C9,stroke:#388E3C,stroke-width:2px,color:#000
    classDef gateStyle fill:#FFF9C4,stroke:#F9A825,stroke-width:2px,color:#000
    classDef processStyle fill:#F3E5F5,stroke:#7B1FA2,stroke-width:2px,color:#000
    classDef multiplierStyle fill:#FFCCBC,stroke:#E64A19,stroke-width:2px,color:#000
    classDef sumStyle fill:#B2DFDB,stroke:#00796B,stroke-width:2px,color:#000
```

## 4.2 Unrolled LSTM Through Time (Mermaid)

```mermaid
flowchart LR
    subgraph t0["t = 0"]
        xA[x_0]:::in
        hA[h_0]:::out
        cA[C_0]:::cell
        lstmA[LSTM Cell]:::core
        xA --> lstmA
        lstmA --> hA
        lstmA --> cA
    end

    subgraph t1["t = 1"]
        xB[x_1]:::in
        hB[h_1]:::out
        cB[C_1]:::cell
        lstmB[LSTM Cell]:::core
        xB --> lstmB
        lstmB --> hB
        lstmB --> cB
    end

    subgraph t2["t = 2"]
        xC[x_2]:::in
        hC[h_2]:::out
        cC[C_2]:::cell
        lstmC[LSTM Cell]:::core
        xC --> lstmC
        lstmC --> hC
        lstmC --> cC
    end

    subgraph t3["t = T-1"]
        xD[x_{T-1}]:::in
        hD[h_{T-1}]:::out
        cD[C_{T-1}]:::cell
        lstmD[LSTM Cell]:::core
        xD --> lstmD
        lstmD --> hD
        lstmD --> cD
    end

    cA --> lstmB
    hA --> lstmB
    cB --> lstmC
    hB --> lstmC
    cC --> lstmD
    hC --> lstmD

    classDef in fill:#BBDEFB,stroke:#0D47A1,color:#000
    classDef out fill:#C8E6C9,stroke:#1B5E20,color:#000
    classDef cell fill:#FFE0B2,stroke:#E65100,color:#000
    classDef core fill:#F8BBD0,stroke:#880E4F,color:#000,stroke-width:3px
```

## 4.3 Information Flow Architecture (Sequential Processing Topology Matrix)

| Stage | Component | Input | Operation | Output | Purpose |
|---|---|---|---|---|---|
| 1 | Concatenation | $h_{t-1}, x_t$ | Stack vectors | $[h_{t-1}; x_t]$ | Prepare joint input |
| 2 | Forget Gate | $[h_{t-1}; x_t]$ | Linear + Sigmoid | $f_t$ | Memory erasure signal |
| 3 | Input Gate | $[h_{t-1}; x_t]$ | Linear + Sigmoid | $i_t$ | Memory write signal |
| 4 | Candidate State | $[h_{t-1}; x_t]$ | Linear + Tanh | $\tilde{C}_t$ | New memory content |
| 5 | Cell Update | $f_t, C_{t-1}, i_t, \tilde{C}_t$ | Hadamard + Sum | $C_t$ | Master memory write |
| 6 | Output Gate | $[h_{t-1}; x_t]$ | Linear + Sigmoid | $o_t$ | Exposure signal |
| 7 | Hidden Output | $o_t, C_t$ | Hadamard + Tanh | $h_t$ | Filtered short-term output |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## 📝 Part A Questions (2 × 3 Marks = 6 Marks)

### **Question 1** `[KTU University Exam - July 2023]`
**Explain the vanishing gradient problem in standard RNNs. How does LSTM overcome it?** **[3 Marks]** **[CO1, Understand]**

**Model Answer:**

The **vanishing gradient problem** occurs in standard RNNs when the network is trained using **Backpropagation Through Time (BPTT)**. During BPTT, gradients are back-propagated across time steps, and the **repeated multiplication of the recurrent weight matrix $W_{hh}$** causes the gradients to **shrink exponentially** towards zero (vanish) for long sequences. As a result, the network **fails to learn long-term dependencies**.

LSTM overcomes this through its **cell state $C_t$** mechanism. The cell state update is **primarily additive**:

$$C_t = f_t \odot C_{t-1} + i_t \odot \tilde{C}_t$$

This additive structure allows gradients to **flow unchanged across many time steps**, preventing vanishing. **[3 Marks]**

> **Valuation Key:** [Stating vanishing gradient cause: 1 Mark] [Stating BPTT role: 1 Mark] [LSTM additive cell state solution: 1 Mark]

---

### **Question 2** `[KTU University Exam - Dec 2023]`
**List and briefly explain the three gates of an LSTM network.** **[3 Marks]** **[CO1, Remember]**

**Model Answer:**

The three gates of an LSTM are:

1. **Forget Gate ($f_t$):** Uses sigmoid activation to output values in $(0, 1)$. It decides **what fraction of the previous cell state to retain** (value close to 0 = forget, value close to 1 = retain).

2. **Input Gate ($i_t$):** Uses sigmoid activation to decide **what new information to write** to the cell state. Combined with the candidate state $\tilde{C}_t$ (computed via $\tanh$), it controls memory updates.

3. **Output Gate ($o_t$):** Uses sigmoid activation to decide **what part of the cell state to expose** as the hidden state $h_t = o_t \odot \tanh(C_t)$ to the next time step.

**[3 Marks]**

> **Valuation Key:** [Naming all three gates: 1.5 Marks] [Correct functional explanation: 1.5 Marks]

---

## 📝 Part B Questions (Internal Choice — 14 Marks Each)

### **Question 3A** `[KTU University Exam - July 2024]`
**a)** Derive the complete set of forward pass equations for a standard LSTM cell, clearly identifying the role of each gate and the cell state update mechanism. **[7 Marks]** **[CO2, Understand]**

**Model Answer:**

The LSTM cell maintains two state vectors across time: the **hidden state $h_t$** and the **cell state $C_t$**. The forward pass consists of the following five equations:

**Step 1 — Forget Gate:**
$$f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$$
This gate **decides what information to discard** from the previous cell state $C_{t-1}$. Values near 0 mean "forget completely"; values near 1 mean "keep fully".

**Step 2 — Input Gate and Candidate State:**
$$i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$$
$$\tilde{C}_t = \tanh(W_C \cdot [h_{t-1}, x_t] + b_C)$$
The input gate **decides which values to update**, and the candidate state $\tilde{C}_t$ creates a vector of **new candidate values** that could be added to the cell state.

**Step 3 — Cell State Update:**
$$C_t = f_t \odot C_{t-1} + i_t \odot \tilde{C}_t$$
This is the **master memory write**. The old state is multiplied (forgotten) by $f_t$, and the new candidates are scaled by $i_t$ and added.

**Step 4 — Output Gate:**
$$o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$$
The output gate **decides what part of the cell state to output**.

**Step 5 — Hidden State:**
$$h_t = o_t \odot \tanh(C_t)$$
The cell state is squashed via $\tanh$ (to range $(-1, 1)$) and filtered by the output gate to produce the hidden state.

> **Valuation Key:** [All 5 equations written correctly: 4 Marks] [Role of each gate explained: 3 Marks]

---

**b)** Given $h_{t-1} = [0.5, 0.3]^T$, $x_t = [0.8]^T$, $C_{t-1} = [0.6, 0.4]^T$, and the following weight matrices:
$$W_f = \begin{bmatrix} 0.2 & 0.1 & 0.3 \\ 0.4 & 0.2 & 0.1 \end{bmatrix}, W_i = \begin{bmatrix} 0.1 & 0.3 & 0.2 \\ 0.2 & 0.1 & 0.4 \end{bmatrix}, W_C = \begin{bmatrix} 0.3 & 0.1 & 0.2 \\ 0.1 & 0.3 & 0.2 \end{bmatrix}, W_o = \begin{bmatrix} 0.2 & 0.3 & 0.1 \\ 0.3 & 0.2 & 0.1 \end{bmatrix}$$
Compute the forget gate output $f_t$ and input gate output $i_t$. Use biases = 0 and $\sigma(z) = \frac{1}{1+e^{-z}}$. **[7 Marks]** **[CO3, Apply]**

**Model Answer:**

**Step 1: Concatenate inputs**
$$[h_{t-1}; x_t] = \begin{bmatrix} 0.5 \\ 0.3 \\ 0.8 \end{bmatrix}$$

**Step 2: Compute $W_f \cdot [h_{t-1}; x_t]$**

For row 1: $(0.2)(0.5) + (0.1)(0.3) + (0.3)(0.8) = 0.10 + 0.03 + 0.24 = 0.37$

For row 2: $(0.4)(0.5) + (0.2)(0.3) + (0.1)(0.8) = 0.20 + 0.06 + 0.08 = 0.34$

$$W_f \cdot [h_{t-1}; x_t] = \begin{bmatrix} 0.37 \\ 0.34 \end{bmatrix}$$

**Step 3: Apply sigmoid to get forget gate**
$$f_t = \sigma\begin{bmatrix} 0.37 \\ 0.34 \end{bmatrix} = \begin{bmatrix} \frac{1}{1+e^{-0.37}} \\ \frac{1}{1+e^{-0.34}} \end{bmatrix} = \begin{bmatrix} 0.5914 \\ 0.5842 \end{bmatrix}$$

**Step 4: Compute $W_i \cdot [h_{t-1}; x_t]$**

For row 1: $(0.1)(0.5) + (0.3)(0.3) + (0.2)(0.8) = 0.05 + 0.09 + 0.16 = 0.30$

For row 2: $(0.2)(0.5) + (0.1)(0.3) + (0.4)(0.8) = 0.10 + 0.03 + 0.32 = 0.45$

$$W_i \cdot [h_{t-1}; x_t] = \begin{bmatrix} 0.30 \\ 0.45 \end{bmatrix}$$

**Step 5: Apply sigmoid to get input gate**
$$i_t = \sigma\begin{bmatrix} 0.30 \\ 0.45 \end{bmatrix} = \begin{bmatrix} \frac{1}{1+e^{-0.30}} \\ \frac{1}{1+e^{-0.45}} \end{bmatrix} = \begin{bmatrix} 0.5744 \\ 0.6106 \end{bmatrix}$$

> **Valuation Key:** [Concatenation step: 1 Mark] [Forget gate linear computation: 1.5 Marks] [Sigmoid applied correctly: 1 Mark] [Input gate linear computation: 1.5 Marks] [Final sigmoid values: 1 Mark] [Correct final numerical answers: 1 Mark]

---

### **Question 3B (Alternative Choice)** `[KTU University Exam - Dec 2022]`
**a)** Explain the architecture of an LSTM network with a neat block diagram. Discuss how the cell state acts as a "memory highway" and how gradients flow through it during BPTT. **[7 Marks]** **[CO2, Understand]**

**Model Answer:**

**Architecture:** An LSTM cell consists of three sigmoid gates (forget $f_t$, input $i_t$, output $o_t$), one $\tanh$ candidate layer, and two state vectors: the **cell state $C_t$** (long-term memory) and the **hidden state $h_t$** (short-term output). The gates take as input the concatenation $[h_{t-1}, x_t]$ and produce multiplicative signals that regulate information flow.

**Cell State as Memory Highway:** The cell state $C_t$ runs **horizontally across the top** of the LSTM cell with **only minor linear interactions** — the forget gate $f_t$ multiplies it (scaling), and the input gate scales new candidates which are then **added**. This near-linear, additive structure is why it is called a "memory highway".

**Gradient Flow through Cell State:** During BPTT, the gradient of the loss with respect to $C_t$ flows back through the additive update:

$$\frac{\partial C_t}{\partial C_{t-1}} = f_t$$

Since $f_t \in (0, 1)$ is bounded and **not repeatedly multiplied with $W_{hh}$**, the gradient does not vanish or explode over long sequences. This additive pathway is the **fundamental reason LSTMs handle long-term dependencies** that standard RNNs cannot.

> **Valuation Key:** [Diagram description: 2 Marks] [Cell state highway concept: 2.5 Marks] [Gradient flow explanation: 2.5 Marks]

---

**b)** Compare and contrast LSTM with GRU (Gated Recurrent Unit) in terms of architecture, number of gates, parameters, and performance characteristics. **[7 Marks]** **[CO3, Apply]**

**Model Answer:**

| Feature | LSTM | GRU |
|---|---|---|
| **Number of Gates** | 3 (forget, input, output) | 2 (update, reset) |
| **State Vectors** | 2 (cell state $C_t$, hidden state $h_t$) | 1 (hidden state $h_t$ only) |
| **Parameters** | $4 \times (h \times (h+d) + h)$ | $3 \times (h \times (h+d) + h)$ |
| **Memory Mechanism** | Additive cell state with explicit long-term memory | Single hidden state combines long/short-term |
| **Gating Operations** | Separate forget and input gates | Coupled update gate $z_t = 1 - f_t$ |
| **Reset Gate** | Not present (uses output gate) | Present: $r_t$ controls candidate computation |
| **Training Speed** | Slower (more parameters) | Faster (fewer parameters) |
| **Performance on Long Sequences** | Better for very long dependencies | Competitive, slightly worse on extremely long sequences |
| **Inventors** | Hochreiter \& Schmidhuber (1997) | Cho et al. (2014) |
| **Use Case Preference** | Tasks needing explicit long-term memory (e.g., machine translation) | Tasks with limited data or faster training (e.g., speech) |

**GRU Equations (for reference):**

$$z_t = \sigma(W_z [h_{t-1}, x_t])$$
$$r_t = \sigma(W_r [h_{t-1}, x_t])$$
$$\tilde{h}_t = \tanh(W_h [r_t \odot h_{t-1}, x_t])$$
$$h_t = (1 - z_t) \odot h_{t-1} + z_t \odot \tilde{h}_t$$

> **Valuation Key:** [Tabular comparison with at least 5 valid criteria: 4 Marks] [GRU equations written: 2 Marks] [Conclusion on use-case preference: 1 Mark]

---

> [!WARNING]
> **⚠️ KTU Examiner's Valuation Warning / Common Pitfalls**
> 1. **Forgetting the $\tanh$ on $C_t$** in the hidden state equation: Always write $h_t = o_t \odot \tanh(C_t)$, NOT $h_t = o_t \odot C_t$. This is the most common 1-mark deduction.
> 2. **Confusing element-wise product ($\odot$) with matrix multiplication**: Use $\odot$ or $\ast$ for Hadamard product; $W \cdot$ or matrix multiplication for linear transforms.
> 3. **Sigmoid vs. Tanh confusion**: Gates use **sigmoid** ($\sigma$), but candidate state uses **tanh**. Mixing them up loses marks.
> 4. **Forgetting to clip gradients**: In BPTT, gradient clipping (e.g., threshold = 5) is essential. Examiners often test this.
> 5. **Not stating the output range of sigmoid and tanh explicitly** in theory questions. Always write $\sigma \in (0, 1)$ and $\tanh \in (-1, 1)$.

---

## 🧠 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — LSTMs (PECST632 / Module 3)**

- ✅ **LSTM = RNN variant** designed to solve the **vanishing gradient problem** in long sequences.
- ✅ **Three gates**: Forget ($f_t$), Input ($i_t$), Output ($o_t$) — all use **sigmoid** activation.
- ✅ **Candidate state** $\tilde{C}_t$ uses **tanh** activation.
- ✅ **Cell state** $C_t = f_t \odot C_{t-1} + i_t \odot \tilde{C}_t$ — the **additive memory highway**.
- ✅ **Hidden state** $h_t = o_t \odot \tanh(C_t)$ — the **filtered short-term output**.
- ✅ **Weight matrix dimension** for each gate: $h \times (h + d)$ where $h$ = hidden size, $d$ = input size.
- ✅ **Total trainable parameters** per LSTM cell: $4 \times [h(h+d) + h] = 4h^2 + 4hd + 4h$.
- ✅ **BPTT** unrolls the network for $T$ time steps; **gradient clipping** is mandatory.
- ✅ **Peephole LSTM**: Gates can see $C_{t-1}$; **Coupled LSTM**: forget = $1 - $ input.
- ✅ **GRU** combines forget and input gates into a single **update gate** $z_t$, with only one state vector.
- ✅ **LSTM Applications**: NLP, Time-Series, Speech Recognition, Healthcare, Finance.
- ✅ **Origin**: Hochreiter \& Schmidhuber, 1997 — a foundational paper in deep learning history.
- ✅ **LSTMs vs. Transformers**: LSTMs are sequential; Transformers use self-attention for parallelization. Transformers now dominate NLP, but LSTMs remain strong for streaming/real-time data.
- ✅ **Sigmoid range**: $(0, 1)$ — acts as a "soft switch". **Tanh range**: $(-1, 1)$ — zero-centered, better for hidden representations.
- ✅ **Element-wise (Hadamard) product** $\odot$ is NOT the same as dot product or matrix multiplication.

---

<!-- SECTION_5_END -->
