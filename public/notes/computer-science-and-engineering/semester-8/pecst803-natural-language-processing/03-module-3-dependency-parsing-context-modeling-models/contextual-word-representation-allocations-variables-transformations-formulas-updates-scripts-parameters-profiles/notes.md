# Contextual word representation allocations variables transformations formulas updates scripts parameters profiles

<!-- SECTION_1_START -->

# Contextual Word Representation: Allocations, Variables, Transformations & Parameter Profiles

## 1.1 Formal KTU 2024 Definition

> [!IMPORTANT]
> **Contextual Word Representation (CWR)** is a type of word embedding in which the vector assigned to each token $w_t$ in a sequence $\mathbf{x} = (w_1, w_2, \dots, w_n)$ is a *function of its entire left and right context*, rather than a static lookup. Formally, it is a parametric mapping
> $$f_\theta : \mathcal{V} \times \Sigma^{*} \to \mathbb{R}^{d}$$
> where $f_\theta(w_t, \mathbf{x}) = \mathbf{h}_t$ such that $\mathbf{h}_t$ depends on every position in $\mathbf{x}$.

In the KTU 2024 NLP syllabus (PECST803, Module 3), this concept is treated as the **bridge between context-independent embeddings (Word2Vec, GloVe) and deep context-modeling architectures (ELMo, BERT, BiLSTM encoders)** used inside transition-based and graph-based neural dependency parsers.

A *Contextual Word Representation Allocator* refers to the **mechanism that distributes representational capacity** (hidden dimensions, layer contributions, and contextual windows) across the token positions of an input sentence. The most cited formal instantiation in the KTU module is the **ELMo (Embeddings from Language Model) bi-directional language model**, introduced by Peters et al. (2018), which is the canonical context-modeling layer that the syllabus expects students to be able to derive, implement, and analyze.

> [!NOTE]
> **Syllabus Anchor (KTU 2024 PECST803 – Module 3):**
> The module states that students must be able to *“derive the parameter update equations of a contextual bi-directional language model used as a context encoder in dependency parsing”* and *“compute the layer-weighted contextual vector, the softmax allocation, and the gradient profile for back-propagation through time (BPTT).”*

The mathematical objects involved are conventionally named in the module as follows:

| Symbol | KTU Term | Meaning |
|---|---|---|
| $w_t$ | Token | Discrete word index at position $t$ |
| $\mathbf{e}_t$ | Token Embedding | Static $\mathbb{R}^{d_e}$ vector from $E \in \mathbb{R}^{\vert V \vert \times d_e}$ |
| $\overrightarrow{\mathbf{h}}_t$ | Forward Hidden State | Encodes context $w_{1:t}$ |
| $\overleftarrow{\mathbf{h}}_t$ | Backward Hidden State | Encodes context $w_{n:t}$ |
| $\mathbf{H}_t = [\overrightarrow{\mathbf{h}}_t ; \overleftarrow{\mathbf{h}}_t]$ | Concatenated Context | Bi-directional context vector |
| $\mathbf{s}_t^{\text{task}}$ | Task-Specific Vector | Final representation fed to parser |
| $\gamma^{\text{task}}$ | Scale Parameter (Scalar) | Task-specific rescaling |
| $\mathbf{s}_j^{\text{task}}$ | Softmax Weights | Per-layer allocation profile |

## 1.2 Intuitive Analogy

> [!TIP]
> **Conceptual Analogy — The "Movie Critic with Earmuffs":**
> Imagine a movie critic who reviews a single scene (the token $w_t$) of a long film. A **non-contextual** critic walks into the theater, sees the scene in isolation, and gives a rating. The same scene always gets the same rating — a Word2Vec vector.
>
> A **contextual** critic instead watches the *entire film up to the scene* (the left context) and *the entire film after the scene* (the right context), then writes a review. A wedding scene in a romance gets a "romantic" review; the same wedding scene in a thriller gets an "ominous" review. The *parameters* of the critic's brain (the LSTM/Transformer weights) are **shared across all scenes**, but the *activation* (the contextual vector $\mathbf{h}_t$) is different for every occurrence.
>
> The **allocation** is how the critic *divides attention* between the immediate scene, the earlier scenes, and the later scenes — exactly the role of the per-layer softmax weights $\mathbf{s}^{\text{task}}$ in ELMo.

**Geometric Intuition:** A non-contextual embedding is a *single dot* in $\mathbb{R}^d$. A contextual embedding is a *trajectory* through $\mathbb{R}^d$ that bends depending on the sentence. Two different sentences containing the word *“bank”* trace two different paths; the final point of each path is a different contextual vector.

## 1.3 Standard Metrics & Constants

The following constants are referenced throughout the KTU 2024 PECST803 Module 3 derivations and should be memorized:

- **Vocabulary size** $\vert V \vert \approx 10^6$ (typical)
- **Embedding dimension** $d_e = 512$ (ELMo base)
- **Hidden dimension per direction** $d_h = 1024$ (ELMo LSTM, each direction)
- **Number of biLM layers** $L = 2$
- **Output (softmax) dimension** $\vert V \vert$ — projection layer size
- **Dropout rate** $p_{\text{drop}} = 0.5$ (LSTM input/output)
- **BPTT unroll length** $T_{\text{bptt}} = 20$ to $50$ tokens
- **Task-specific scale initial value** $\gamma^{\text{task}} = 1.0$
- **ELMo total parameters** $\approx 93.6 \times 10^6$ (base cased model)

> [!VISUALIZATION CONTROL]
> **Concept:** Visualization of the contextual vector trajectory of the polysemous word *“bank”* across two different sentences.
> **GeoGebra / Desmos Input Equations (parametric 2-D projection of the $d$-dimensional trajectory):**
> * `Bank_River(t) = (cos(0.3t) + 0.5, sin(0.2t) - 0.5)` (trajectory for *“river bank”* sentence)
> * `Bank_Finance(t) = (cos(0.3t) - 0.5, sin(0.2t) + 0.5)` (trajectory for *“financial bank”* sentence)
> * `t = 0` to `t = 2pi`
> **Visual Description:** Two distinct closed curves in the plane, with the *“bank”* token (the same static $\mathbf{e}_t$) acting as the *starting seed* that both curves share, then diverging. The student should observe that the **same input embedding** maps to **two different terminal contextual vectors** $\mathbf{h}_t$ depending on the surrounding context.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Operational Decomposition of the Contextual Allocation Pipeline

The end-to-end pipeline that the KTU 2024 module calls the *“Contextual Word Representation Allocation System”* has **four stages**. We decompose each stage and identify the variables, transformations, and parameters that the board examiner expects to be testable.

### Stage 1 — Token Embedding Lookup (Static Stage)

- **Input:** token index $w_t \in \{1, \dots, \vert V \vert\}$
- **Transformation:** matrix multiplication with the embedding matrix
- **Parameter:** $E \in \mathbb{R}^{\vert V \vert \times d_e}$, total $\vert V \vert \cdot d_e$ parameters
- **Output:** $\mathbf{e}_t = E[w_t] \in \mathbb{R}^{d_e}$

### Stage 2 — Bi-Directional LSTM Forward Sweep (Left-to-Right Context)

- **Input sequence:** $\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n$
- **Recurrence variables per layer $\ell$, per step $t$:**
  - Input gate $\mathbf{i}_t^{(\ell)} \in \mathbb{R}^{d_h}$
  - Forget gate $\mathbf{f}_t^{(\ell)} \in \mathbb{R}^{d_h}$
  - Output gate $\mathbf{o}_t^{(\ell)} \in \mathbb{R}^{d_h}$
  - Candidate cell $\tilde{\mathbf{c}}_t^{(\ell)} \in \mathbb{R}^{d_h}$
  - Cell state $\mathbf{c}_t^{(\ell)} \in \mathbb{R}^{d_h}$
  - Hidden state $\overrightarrow{\mathbf{h}}_t^{(\ell)} \in \mathbb{R}^{d_h}$
- **Transformation set (the LSTM gate equations):**
  $$\mathbf{i}_t = \sigma(\mathbf{W}_i [\mathbf{h}_{t-1}; \mathbf{e}_t] + \mathbf{b}_i)$$
  $$\mathbf{f}_t = \sigma(\mathbf{W}_f [\mathbf{h}_{t-1}; \mathbf{e}_t] + \mathbf{b}_f)$$
  $$\mathbf{o}_t = \sigma(\mathbf{W}_o [\mathbf{h}_{t-1}; \mathbf{e}_t] + \mathbf{b}_o)$$
  $$\tilde{\mathbf{c}}_t = \tanh(\mathbf{W}_c [\mathbf{h}_{t-1}; \mathbf{e}_t] + \mathbf{b}_c)$$
  $$\mathbf{c}_t = \mathbf{f}_t \odot \mathbf{c}_{t-1} + \mathbf{i}_t \odot \tilde{\mathbf{c}}_t$$
  $$\overrightarrow{\mathbf{h}}_t = \mathbf{o}_t \odot \tanh(\mathbf{c}_t)$$
- **Parameters per layer (forward):** $4 \times (d_h \times (d_h + d_e))$ weights + $4 d_h$ biases
- **Context captured:** $w_{1:t}$ (left context only)

### Stage 3 — Bi-Directional LSTM Backward Sweep (Right-to-Left Context)

- **Recurrence:** the *same* gate structure is run on the *reversed* sequence.
- **Output:** $\overleftarrow{\mathbf{h}}_t \in \mathbb{R}^{d_h}$ capturing context $w_{n:t}$ (right context only).
- **Critical KTU note:** the forward and backward LSTMs **do not share parameters**; they are two independent networks trained jointly.

### Stage 4 — Softmax Allocation & Task-Specific Linear Transformation

This is the **allocation stage** that the KTU module emphasizes. The hidden states of all $L$ biLM layers, plus the embedding layer, are combined into a single task-specific vector:

$$\mathbf{ELMo}_t^{\text{task}} = \gamma^{\text{task}} \cdot \sum_{j=0}^{L} s_j^{\text{task}} \cdot \mathbf{h}_{t,j}$$

where:
- $j = 0$ corresponds to the token embedding layer ($\mathbf{h}_{t,0} = \mathbf{e}_t$),
- $j = 1, \dots, L$ correspond to the biLM layer outputs,
- $s_j^{\text{task}}$ are **softmax-normalized weights** (one per layer, learned by the downstream task),
- $\gamma^{\text{task}}$ is a **scalar rescaling** learned by the downstream task.

> [!IMPORTANT]
> The KTU module calls $\mathbf{s}^{\text{task}} = (s_0, s_1, \dots, s_L)$ the **“allocation profile”** of the model. It answers the question: *“How much of the final contextual vector comes from the embedding, the first LSTM layer, and the second LSTM layer?”* In dependency parsing, a typical allocation profile is roughly $(0.1, 0.4, 0.5)$, meaning the parser relies more on the higher LSTM layer than on the raw embedding.

### Stage 5 — Parameter Update (BPTT)

The biLM is trained to maximize the bi-directional log-likelihood:

$$\mathcal{L}_{\text{biLM}} = \sum_{t=1}^{n} \left( \log p(w_t \mid w_{1:t-1}; \overrightarrow{\theta}, \Theta_x) + \log p(w_t \mid w_{t+1:n}; \overleftarrow{\theta}, \Theta_x) \right)$$

where $\Theta_x$ is the **shared token representation** (the embedding matrix and the softmax projection are tied) and $\overrightarrow{\theta}, \overleftarrow{\theta}$ are the forward/backward LSTM parameters. The update for any parameter $\theta$ follows stochastic gradient ascent:

$$\theta^{(k+1)} = \theta^{(k)} + \eta \cdot \nabla_{\theta} \mathcal{L}_{\text{biLM}}$$

with learning rate $\eta$. In a dependency parser, the same update rule is applied to the parser parameters, but the biLM parameters are typically **frozen** and only the allocation weights $\mathbf{s}^{\text{task}}$ and $\gamma^{\text{task}}$ are updated.

## 2.2 KTU High-Yield Formula Sheet

| # | Formula | LaTeX | Variables / Units | Used For |
|---|---|---|---|---|
| 1 | Token embedding lookup | $\mathbf{e}_t = E[w_t]$ | $E \in \mathbb{R}^{\vert V \vert \times d_e}$, $\vert V \vert$ vocab, $d_e$ dim | Stage 1 |
| 2 | LSTM input gate | $\mathbf{i}_t = \sigma(W_i [\mathbf{h}_{t-1};\mathbf{e}_t] + \mathbf{b}_i)$ | $W_i \in \mathbb{R}^{d_h \times (d_h + d_e)}$ | Stage 2 |
| 3 | LSTM forget gate | $\mathbf{f}_t = \sigma(W_f [\mathbf{h}_{t-1};\mathbf{e}_t] + \mathbf{b}_f)$ | $W_f \in \mathbb{R}^{d_h \times (d_h + d_e)}$ | Stage 2 |
| 4 | LSTM output gate | $\mathbf{o}_t = \sigma(W_o [\mathbf{h}_{t-1};\mathbf{e}_t] + \mathbf{b}_o)$ | $W_o \in \mathbb{R}^{d_h \times (d_h + d_e)}$ | Stage 2 |
| 5 | LSTM candidate cell | $\tilde{\mathbf{c}}_t = \tanh(W_c [\mathbf{h}_{t-1};\mathbf{e}_t] + \mathbf{b}_c)$ | $W_c \in \mathbb{R}^{d_h \times (d_h + d_e)}$ | Stage 2 |
| 6 | LSTM cell update | $\mathbf{c}_t = \mathbf{f}_t \odot \mathbf{c}_{t-1} + \mathbf{i}_t \odot \tilde{\mathbf{c}}_t$ | $\mathbf{c}_t \in \mathbb{R}^{d_h}$ | Stage 2 |
| 7 | LSTM hidden state | $\mathbf{h}_t = \mathbf{o}_t \odot \tanh(\mathbf{c}_t)$ | $\mathbf{h}_t \in \mathbb{R}^{d_h}$ | Stage 2 |
| 8 | BiLM forward log-prob | $\log p(w_t \mid w_{<t}) = \mathbf{h}_{t-1}^{\top} \mathbf{e}_t + \log \tilde{Z}_t$ | joint with softmax over $\vert V \vert$ | Stage 5 |
| 9 | BiLM total loss | $\mathcal{L} = \sum_t (\log p_{\rightarrow}(w_t) + \log p_{\leftarrow}(w_t))$ | summed over $n$ tokens | Stage 5 |
| 10 | ELMo allocation | $\mathbf{ELMo}_t = \gamma \sum_{j=0}^{L} s_j \mathbf{h}_{t,j}$ | $s_j \geq 0, \sum_j s_j = 1$ | Stage 4 |
| 11 | Softmax of allocations | $s_j = \dfrac{\exp(\alpha_j)}{\sum_k \exp(\alpha_k)}$ | logits $\alpha_j$ | Stage 4 |
| 12 | Param update (SGD) | $\theta^{(k+1)} = \theta^{(k)} + \eta \nabla_\theta \mathcal{L}$ | $\eta$ learning rate | Stage 5 |
| 13 | Concatenation of biLSTM | $\mathbf{H}_t = [\overrightarrow{\mathbf{h}}_t; \overleftarrow{\mathbf{h}}_t] \in \mathbb{R}^{2 d_h}$ | both directions | Stage 4 |
| 14 | Param count per LSTM | $4 (d_h^2 + d_h d_e + d_h) + 4 d_h$ | $4$ gates | Stage 2 |
| 15 | Total biLM param count | $\vert V \vert d_e + 2L(4(d_h^2 + d_h d_e + d_h)) + 2 \vert V \vert d_h$ | embedding + LSTMs + softmax | Profile |
| 16 | BPTT truncation | $\dfrac{\partial \mathcal{L}}{\partial \mathbf{h}_t} \approx \sum_{k=0}^{K-1} \dfrac{\partial \mathcal{L}_{t+k}}{\partial \mathbf{h}_t}$ | $K$ unroll length | Stage 5 |
| 17 | Highway projection (Char-CNN bridge) | $\mathbf{p}_t = \text{ReLU}(\mathbf{W}_p \mathbf{e}_t^{\text{char}} + \mathbf{b}_p)$ | $\mathbf{W}_p \in \mathbb{R}^{d_e \times d_c}$ | Optional pre-stage |
| 18 | Softmax projection | $\mathbf{y}_t = \text{softmax}(\mathbf{W}_{\text{out}} \mathbf{h}_{t-1} + \mathbf{b}_{\text{out}})$ | $W_{\text{out}} \in \mathbb{R}^{\vert V \vert \times d_h}$ | Stage 5 |
| 19 | Context window of layer $\ell$ | $C(\ell) = 2^\ell$ (CNN-style) or $n$ (LSTM) | $\ell$ layer index | Profile |
| 20 | Gradient clip | $\mathbf{g} \leftarrow \min(1, \frac{\tau}{\Vert \mathbf{g} \Vert}) \mathbf{g}$ | $\tau$ threshold | Stage 5 |

> [!NOTE]
> **Pipeline view:** Every contextual word representation that enters a neural dependency parser is the result of a chain of these twenty operations. The KTU valuation key expects the student to be able to point to **which formula in this table** corresponds to **which variable** in **which stage** of the architecture.

## 2.3 Real-World Engineering Utility

The contextual word representation allocation system is the **backbone encoder** of every modern production-grade NLP pipeline:

- **Neural Dependency Parsers (Dozat & Manning 2017):** Use a BiLSTM encoder with an attention-based biaffine scorer. The encoder is *exactly* Stage 1–Stage 3 of the table above.
- **Named Entity Recognition (NER):** ELMo is concatenated with character-level word embeddings, and the allocation profile $\mathbf{s}^{\text{task}}$ is learned per-entity-type.
- **Machine Translation:** Transformer encoders replace the LSTM but the allocation profile generalizes to per-layer attention weights.
- **Search Engines (Bing, Google):** BERT-based ranking uses 12- or 24-layer allocation profiles, where the *higher* layers carry more semantic and the *lower* layers carry more syntactic information — a fact exploited in dependency parsing where the parser head is best predicted from the *middle* layers.
- **Biomedical NLP (BioBERT, ClinicalBERT):** The same allocation mechanism is fine-tuned on biomedical corpora; the resulting $\mathbf{s}^{\text{task}}$ profile shifts dramatically toward layer 1 (because biomedical text has more domain-specific surface forms).

> [!TIP]
> **Why KTU tests this:** The 2024 scheme assessment specifically tests whether the student can *derive* the per-layer update, not just state the formula. Expect 14-mark questions that ask the student to derive the gradient $\partial \mathcal{L}/\partial s_j$ of the allocation weight and show how the parser re-balances the layers.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# 3. Step-by-Step Derivations, Transformations & Code Implementation

## 3.1 Derivation 1 — Softmax Allocation Normalization

**Statement (KTU standard form):** Show that the per-layer ELMo allocation weights $\mathbf{s}^{\text{task}}$ are obtained by applying a softmax over learned logits $\boldsymbol{\alpha}$.

**Derivation:**

We are given the unnormalized layer scores $\alpha_0, \alpha_1, \dots, \alpha_L \in \mathbb{R}$. The KTU module requires the allocation profile to satisfy two conditions:

$$\text{(i) } s_j \geq 0 \quad \forall j, \qquad \text{(ii) } \sum_{j=0}^{L} s_j = 1$$

The natural object satisfying both is the **softmax function**:

$$s_j = \frac{\exp(\alpha_j)}{\sum_{k=0}^{L} \exp(\alpha_k)}$$

**Verification of positivity:** $\exp(\cdot) > 0$ for all real inputs, hence $s_j > 0$. ✓

**Verification of normalization:**

$$\sum_{j=0}^{L} s_j = \sum_{j=0}^{L} \frac{\exp(\alpha_j)}{\sum_{k=0}^{L} \exp(\alpha_k)} = \frac{\sum_{j=0}^{L} \exp(\alpha_j)}{\sum_{k=0}^{L} \exp(\alpha_k)} = 1 \quad \checkmark$$

**Limiting cases (exam-relevant):**
- If $\alpha_j \gg \alpha_{k \neq j}$: $s_j \to 1$ and the model becomes **hard attention** on layer $j$.
- If $\alpha_j = \alpha_k$ for all $j, k$: $s_j = 1/(L+1)$ and the model becomes the **uniform average** (this is the KTU baseline initialization).

## 3.2 Derivation 2 — BPTT Gradient Flow Through the Allocation Layer

**Statement:** Derive $\partial \mathcal{L}_{\text{parser}} / \partial s_j$, the gradient of the parser loss with respect to the layer-$j$ allocation weight.

Let the final contextual vector used by the parser head be

$$\mathbf{ELMo}_t = \gamma \sum_{j=0}^{L} s_j \mathbf{h}_{t,j}$$

The parser loss (cross-entropy over the dependency arc set) is denoted $\mathcal{L}$. We treat $\gamma$ and the $s_j$ as **scalar** learnable parameters (typical of ELMo-frozen usage):

$$\frac{\partial \mathcal{L}}{\partial s_j} = \frac{\partial \mathcal{L}}{\partial \mathbf{ELMo}_t} \cdot \frac{\partial \mathbf{ELMo}_t}{\partial s_j} = \gamma \cdot \frac{\partial \mathcal{L}}{\partial \mathbf{ELMo}_t} \cdot \mathbf{h}_{t,j}$$

Substituting the partial derivative of the loss with respect to the contextual vector (this is the back-propagated signal from the parser head, computed by automatic differentiation in practice):

$$\frac{\partial \mathcal{L}}{\partial s_j} = \gamma \cdot \left( \sum_{t=1}^{n} \boldsymbol{\delta}_t \right) \cdot \mathbf{h}_{t,j}^{\top}$$

where $\boldsymbol{\delta}_t \in \mathbb{R}^{d}$ is the error signal at time $t$ flowing back from the parser.

**Final gradient update rule (KTU 2024 board form):**

$$s_j^{(k+1)} = s_j^{(k)} + \eta \cdot \gamma \cdot \sum_{t=1}^{n} \boldsymbol{\delta}_t^\top \mathbf{h}_{t,j}$$

**Marginal note on $\gamma$ gradient:**

$$\frac{\partial \mathcal{L}}{\partial \gamma} = \sum_{j=0}^{L} s_j \cdot \frac{\partial \mathcal{L}}{\partial \mathbf{ELMo}_t} = \sum_{j=0}^{L} s_j \cdot \boldsymbol{\delta}_t$$

$$\gamma^{(k+1)} = \gamma^{(k)} + \eta \cdot \sum_{j} s_j \cdot \boldsymbol{\delta}_t$$

> [!IMPORTANT]
> **KTU Pitfall:** The student often writes $\partial \mathbf{ELMo}_t / \partial s_j = \mathbf{h}_{t,j}$ but forgets the leading $\gamma$ factor. The full derivative carries $\gamma$ because $\mathbf{ELMo}_t$ is linear in **both** $s_j$ and $\gamma$, and the chain rule does not drop constants.

## 3.3 Derivation 3 — Parameter Count Profile

**Statement:** Compute the total number of trainable parameters in a 2-layer biLM with embedding dim $d_e = 512$, hidden dim $d_h = 1024$, and vocabulary $\vert V \vert = 10^5$.

Using the formula from Row 15 of the formula sheet:

$$P_{\text{total}} = \vert V \vert \cdot d_e + 2L \cdot 4(d_h^2 + d_h d_e + d_h) + 2 \vert V \vert \cdot d_h$$

Substituting:

$$P_{\text{total}} = 10^5 \cdot 512 + 2 \cdot 2 \cdot 4(1024^2 + 1024 \cdot 512 + 1024) + 2 \cdot 10^5 \cdot 1024$$

Compute each term step by step.

**Term 1 — Embedding matrix:**
$$10^5 \cdot 512 = 5.12 \times 10^7$$

**Term 2 — LSTM parameters (forward + backward, all gates, all layers):**
$$1024^2 = 1{,}048{,}576$$
$$1024 \cdot 512 = 524{,}288$$
$$1024 = 1{,}024$$
$$1{,}048{,}576 + 524{,}288 + 1{,}024 = 1{,}573{,}888$$
$$4 \cdot 1{,}573{,}888 = 6{,}295{,}552$$
$$2 \cdot 2 \cdot 6{,}295{,}552 = 25{,}182{,}208 = 2.518 \times 10^7$$

**Term 3 — Softmax projection (tied or untied):**
$$2 \cdot 10^5 \cdot 1024 = 2.048 \times 10^8$$

**Sum:**
$$5.12 \times 10^7 + 2.518 \times 10^7 + 2.048 \times 10^8 = 2.812 \times 10^8$$

> **Final answer:** $P_{\text{total}} \approx 281.2$ million parameters for this configuration. The KTU expected answer is *“on the order of $10^8$ parameters, dominated by the softmax projection matrix.”*

## 3.4 Symbolic Implementation (Python / PyTorch)

The following script implements a **parameter-frozen ELMo-style biLM** whose allocation profile is the only trainable surface. This is the typical *“contextual encoder + trainable head”* architecture used inside neural dependency parsers and is what the KTU 2024 practical lab expects.

```python
"""
KTU PECST803 — Module 3
Contextual Word Representation with Learnable Layer Allocation
File: elmo_allocation.py
"""

from __future__ import annotations
import math
import logging
from dataclasses import dataclass, field
from typing import List, Tuple, Optional

import torch
import torch.nn as nn
import torch.nn.functional as F

# ------------------------------------------------------------------
# Logging profile (production-grade, mirrors KTU lab rubric)
# ------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s",
)
logger = logging.getLogger("ELMoAllocator")


# ------------------------------------------------------------------
# Configuration profile
# ------------------------------------------------------------------
@dataclass(frozen=True)
class BiLMConfig:
    vocab_size: int = 100_000      # |V|
    embed_dim: int = 512           # d_e
    hidden_dim: int = 1024         # d_h per direction
    num_layers: int = 2            # L
    dropout: float = 0.5           # p_drop
    bptt_truncate: int = 20        # K
    pad_idx: int = 0
    init_gamma: float = 1.0        # gamma^task initial
    device: str = field(
        default_factory=lambda: "cuda" if torch.cuda.is_available() else "cpu"
    )


# ------------------------------------------------------------------
# Single-layer BiLSTM block (forward + backward independent LSTMs)
# ------------------------------------------------------------------
class BiLSTMBlock(nn.Module):
    def __init__(self, cfg: BiLMConfig) -> None:
        super().__init__()
        self.cfg = cfg
        # NOTE: batch_first=True -> input shape (B, T, d_e)
        self.lstm = nn.LSTM(
            input_size=cfg.embed_dim,
            hidden_size=cfg.hidden_dim,
            num_layers=1,
            batch_first=True,
            bidirectional=True,
            dropout=0.0,
        )
        self.dropout = nn.Dropout(cfg.dropout)
        # Parameter count diagnostic
        n_params = sum(p.numel() for p in self.parameters() if p.requires_grad)
        logger.info(f"BiLSTMBlock initialised with {n_params:,} trainable parameters")

    def forward(
        self,
        x: torch.Tensor,            # (B, T, d_e)
        mask: torch.Tensor,         # (B, T) bool
    ) -> torch.Tensor:              # (B, T, 2*d_h)
        # Apply dropout to input embeddings
        x = self.dropout(x)
        # Pack to ignore padding in the recurrence
        lengths = mask.sum(dim=1).cpu()
        packed = nn.utils.rnn.pack_padded_sequence(
            x, lengths, batch_first=True, enforce_sorted=False
        )
        out, _ = self.lstm(packed)
        out, _ = nn.utils.rnn.pad_packed_sequence(out, batch_first=True)
        return out  # (B, T, 2*d_h)


# ------------------------------------------------------------------
# Full ELMo-style contextual allocator
# ------------------------------------------------------------------
class ELMoContextualAllocator(nn.Module):
    """
    BiLM encoder + learnable layer-allocation profile.
    Frozen: embedding matrix, all LSTM weights, softmax projection.
    Trainable: gamma^task, logits alpha_j (j=0..L).
    """

    def __init__(self, cfg: BiLMConfig, freeze_bilm: bool = True) -> None:
        super().__init__()
        self.cfg = cfg

        # ---- Token embedding (Stage 1) ----
        self.embedding = nn.Embedding(
            cfg.vocab_size, cfg.embed_dim, padding_idx=cfg.pad_idx
        )

        # ---- Stack of L biLSTM blocks (Stage 2 + Stage 3) ----
        self.bilstm_blocks: nn.ModuleList = nn.ModuleList()
        for layer_idx in range(cfg.num_layers):
            self.bilstm_blocks.append(
                BiLSTMBlock(cfg)
            )

        # ---- Task-specific allocation parameters (Stage 4) ----
        # logits alpha_j for j = 0, 1, ..., L
        self.layer_logits = nn.Parameter(torch.zeros(cfg.num_layers + 1))
        # scalar rescaling gamma^task
        self.gamma = nn.Parameter(torch.tensor(cfg.init_gamma))

        # ---- Optionally freeze biLM (production style) ----
        if freeze_bilm:
            for p in self.embedding.parameters():
                p.requires_grad = False
            for block in self.bilstm_blocks:
                for p in block.parameters():
                    p.requires_grad = False
            logger.info("biLM parameters are FROZEN; only gamma and layer_logits trainable")
        else:
            logger.info("biLM parameters are TRAINABLE end-to-end")

    # ----------------------------------------------------------------
    def forward(
        self,
        token_ids: torch.Tensor,    # (B, T)
        mask: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:              # (B, T, 2*d_h) contextual vectors
        if mask is None:
            mask = token_ids != self.cfg.pad_idx

        # ---- Stage 1: token embedding ----
        e = self.embedding(token_ids)          # (B, T, d_e)
        h = e                                   # layer-0 representation

        # Collect per-layer hidden states for allocation
        layer_outputs: List[torch.Tensor] = [e]

        # ---- Stages 2 & 3: stacked biLSTM ----
        cur_input = e
        for block in self.bilstm_blocks:
            cur_input = block(cur_input, mask)  # (B, T, 2*d_h)
            layer_outputs.append(cur_input)

        # ---- Stage 4: softmax allocation + gamma rescaling ----
        # alpha_0 ... alpha_L  ->  s_0 ... s_L
        s = F.softmax(self.layer_logits, dim=0)   # (L+1,)
        logger.debug(f"Current allocation profile s = {s.tolist()}")

        # Weighted sum across layers
        stacked = torch.stack(layer_outputs, dim=0)  # (L+1, B, T, d_layer)
        # project layer-0 (d_e) to (2*d_h) via a learned linear? In ELMo, layer 0 is
        # broadcast. For simplicity we use a small linear projection.
        if stacked.size(-1) != self.cfg.hidden_dim * 2:
            proj = nn.Linear(
                stacked.size(-1),
                self.cfg.hidden_dim * 2,
                bias=False,
            ).to(stacked.device)
            stacked = proj(stacked)

        weighted = (stacked * s.view(-1, 1, 1, 1)).sum(dim=0)  # (B, T, 2*d_h)
        elmo_vec = self.gamma * weighted

        return elmo_vec

    # ----------------------------------------------------------------
    def report_profile(self) -> None:
        s = F.softmax(self.layer_logits, dim=0).detach().cpu().tolist()
        logger.info(
            "Allocation profile: "
            + ", ".join(f"s_{j}={s[j]:.4f}" for j in range(len(s)))
        )
        logger.info(f"gamma^task = {self.gamma.item():.4f}")


# ------------------------------------------------------------------
# Demonstration / smoke test
# ------------------------------------------------------------------
def _smoke_test() -> None:
    cfg = BiLMConfig()
    model = ELMoContextualAllocator(cfg, freeze_bilm=True).to(cfg.device)

    # Synthetic batch
    B, T = 4, 12
    token_ids = torch.randint(0, cfg.vocab_size, (B, T), device=cfg.device)
    mask = (token_ids != cfg.pad_idx)

    out = model(token_ids, mask)
    assert out.shape == (B, T, 2 * cfg.hidden_dim), (
        f"Shape mismatch: expected {(B, T, 2*cfg.hidden_dim)}, got {out.shape}"
    )

    n_trainable = sum(p.numel() for p in model.parameters() if p.requires_grad)
    n_total = sum(p.numel() for p in model.parameters())
    logger.info(
        f"Trainable parameters: {n_trainable:,} / {n_total:,} "
        f"({100.0 * n_trainable / n_total:.4f}%)"
    )
    model.report_profile()


if __name__ == "__main__":
    _smoke_test()
```

**Key implementation profile (what the KTU lab rubric checks):**

| Component | Configuration | Verification |
|---|---|---|
| Token embedding | $\vert V \vert \times d_e$ | Frozen if `freeze_bilm=True` |
| BiLSTM blocks | $L=2$, $d_h=1024$, bidirectional | `batch_first=True`, `pack_padded_sequence` |
| Layer logits | $L+1=3$ trainable scalars | Initialised to 0 → uniform allocation |
| $\gamma^{\text{task}}$ | Single trainable scalar | Initial value 1.0 |
| Mask handling | Padding-aware packing | `enforce_sorted=False` |
| Output shape | $(B, T, 2 d_h) = (4, 12, 2048)$ | Asserted in smoke test |
| Trainable param % | $\ll 1\%$ when frozen | Logged at end |

## 3.5 Per-Token Update Script (BPTT Step)

The following fragment shows the **update step** for a single minibatch — exactly the script the KTU lab asks the student to *“write and execute.”*

```python
optimizer = torch.optim.Adam(
    filter(lambda p: p.requires_grad, model.parameters()),
    lr=2e-3,
)
loss_fn = nn.CrossEntropyLoss(ignore_index=cfg.pad_idx)

def train_step(token_ids: torch.Tensor, parser_targets: torch.Tensor) -> float:
    """
    token_ids:       (B, T)   token indices
    parser_targets:  (B, T)   gold dependency head indices
    """
    model.train()
    mask = token_ids != cfg.pad_idx
    elmo_vec = model(token_ids, mask)              # (B, T, 2*d_h)
    # Biaffine parser head would follow; here we use a simple linear scorer
    logits = torch.einsum("btd,bd->bt", elmo_vec, model.gamma * elmo_vec.mean(dim=1))
    loss = loss_fn(logits.view(-1, logits.size(-1)), parser_targets.view(-1))

    optimizer.zero_grad(set_to_none=True)
    loss.backward()
    # Gradient clipping (formula 20 in cheat sheet)
    torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=5.0)
    optimizer.step()

    return float(loss.item())
```

> [!IMPORTANT]
> The chain of operations `loss → softmax allocation → gamma rescale → biLSTM → embedding` is the **backward graph** that PyTorch traverses. The allocation weights $\mathbf{s}^{\text{task}}$ receive gradients that are **scaled by $\gamma$** — the exact formula derived in §3.2.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# 4. Structural Diagrams & Schematics

## 4.1 End-to-End Allocation Architecture (Mermaid)

```mermaid
graph TD
    A[Token IDs w_t] --> B[Embedding Lookup E]
    B --> B1[Token Vector e_t d_e dims]
    B1 --> C1[BiLSTM Layer 1 Forward h_t1]
    B1 --> C2[BiLSTM Layer 1 Backward h_t1b]
    C1 --> D1[Concatenated H1_t]
    C2 --> D1
    D1 --> E1[BiLSTM Layer 2 Forward h_t2]
    D1 --> E2[BiLSTM Layer 2 Backward h_t2b]
    E1 --> F1[Concatenated H2_t]
    E2 --> F1
    B1 --> G[Layer Stack L+1 vectors]
    D1 --> G
    F1 --> G
    G --> H[Softmax over layer logits alpha_j]
    H --> I[Allocation Weights s_j]
    I --> J[Weighted Sum s_j dot h_tj]
    K[Scalar gamma task] --> J
    J --> L[Final ELMo Vector ELMo_t]
    L --> M[Parser Head Biaffine Scorer]
    M --> N[Dependency Arc Prediction]
    N --> O[Cross Entropy Loss L]
    O --> P[BPTT Backward Pass]
    P --> I
    P --> K
```

## 4.2 Data Flow Topology Matrix

| Stage | Input Variable | Transformation | Output Variable | Trainable? |
|---|---|---|---|---|
| Embedding | $w_t \in \mathbb{N}$ | Matrix lookup $E[w_t]$ | $\mathbf{e}_t \in \mathbb{R}^{d_e}$ | Frozen |
| BiLSTM Layer 1 | $\mathbf{e}_t$ | LSTM gates $\sigma, \tanh$ | $\mathbf{H}^{(1)}_t \in \mathbb{R}^{2 d_h}$ | Frozen |
| BiLSTM Layer 2 | $\mathbf{H}^{(1)}_t$ | LSTM gates $\sigma, \tanh$ | $\mathbf{H}^{(2)}_t \in \mathbb{R}^{2 d_h}$ | Frozen |
| Allocation | $\{\mathbf{h}_{t,0}, \mathbf{h}_{t,1}, \mathbf{h}_{t,2}\}$ | Softmax over $\alpha_j$ | $s_j$ | Trainable |
| Rescale | $\sum_j s_j \mathbf{h}_{t,j}$ | Scalar multiply $\gamma$ | $\mathbf{ELMo}_t$ | Trainable |
| Parser Head | $\mathbf{ELMo}_t$ | Biaffine $W_{\text{arc}}, W_{\text{lab}}$ | Arc logits | Trainable |
| Loss | Arc logits, gold heads | Cross entropy | $\mathcal{L}$ | — |

## 4.3 Allocation Profile Schematic (Per-Layer Softmax Weights)

```mermaid
graph LR
    L0[Layer 0 Embedding] -->|s_0 approx 0.10| SUM[Weighted Sum ELMo_t]
    L1[Layer 1 BiLSTM] -->|s_1 approx 0.40| SUM
    L2[Layer 2 BiLSTM] -->s2[s_2 approx 0.50]
    L2 --> SUM
    SUM --> RES[Times gamma task]
    RES --> OUT[Parser Input]
```

## 4.4 Parameter Profile Diagram

```mermaid
graph TD
    P[Total Parameters P_total] --> P1[Embedding Matrix approx 51 M]
    P --> P2[BiLSTM Stack approx 25 M]
    P --> P3[Softmax Projection approx 205 M]
    P1 --> F1[Frozen]
    P2 --> F2[Frozen]
    P3 --> F3[Frozen]
    P --> P4[Allocation s_j plus gamma approx 4 params]
    P4 --> TR1[Trainable]
```

> [!TIP]
> The diagrams above are *block-level functional architectures*, not pixel-perfect neural-network drawings. They are the diagram style the KTU 2024 board examiner accepts on the answer sheet, and they survive any Mermaid rendering quirk in the candidate’s printout.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question A1 `[KTU University Exam — July 2024]`
**CO1, Remember:**
*Define the term “contextual word representation” as used in neural dependency parsing. How does it differ from a static word embedding such as Word2Vec?*

**Model Answer (Board Key):**
A *contextual word representation* is a vector assigned to a token that **depends on the surrounding tokens in the sentence**, computed by a function $f_\theta(w_t, \mathbf{x})$ where $\mathbf{x}$ is the full sentence. A static embedding (Word2Vec) instead assigns the *same* vector $\mathbf{e}_{w_t}$ to a word regardless of context. Hence “bank” in *“river bank”* and in *“financial bank”* receive two different contextual vectors but the same Word2Vec vector. **[3 Marks — 1 mark definition, 1 mark function form, 1 mark contrast.]**

### Question A2 `[KTU University Exam — Dec 2023]`
**CO2, Understand:**
*State the ELMo allocation formula and explain the role of $\mathbf{s}^{\text{task}}$ and $\gamma^{\text{task}}$.*

**Model Answer:**
The formula is
$$\mathbf{ELMo}_t^{\text{task}} = \gamma^{\text{task}} \sum_{j=0}^{L} s_j^{\text{task}} \mathbf{h}_{t,j}$$
$\mathbf{s}^{\text{task}}$ is the **softmax-normalised layer-weight vector** that allocates how much of the final vector comes from each biLM layer; it is **learned by the downstream task** (e.g., the dependency parser). $\gamma^{\text{task}}$ is a **scalar rescaling** that compensates for the difference in scale between biLM internal activations and the task’s expected input range. Both are typically the **only trainable parameters** when the biLM is frozen. **[3 Marks — 1 mark formula, 1 mark for s, 1 mark for gamma.]**

---

## 5.2 Part B — 14-Mark Questions (Module Internal Choice)

### Question B1 (Choice A) `[KTU University Exam — July 2024]`
**CO3, Apply / Analyse — 14 Marks**

> **(a)** For a 2-layer biLSTM with embedding dim $d_e = 300$, hidden dim $d_h = 500$, and vocabulary size $\vert V \vert = 50000$, derive the **total number of trainable parameters** of the biLM (embedding + LSTMs + softmax projection, with input and output embeddings tied). Show every numerical substitution step. **[7 Marks]**

> **(b)** A neural dependency parser uses the ELMo contextual vector $\mathbf{ELMo}_t = \gamma \sum_{j=0}^{2} s_j \mathbf{h}_{t,j}$ as input to a biaffine scorer. Derive the gradient update rule for the allocation weight $s_1$ when the parser loss is cross-entropy $\mathcal{L} = -\sum_t \log p(y_t \mid \mathbf{ELMo}_t)$. State the chain-rule steps explicitly. **[7 Marks]**

#### Model Solution

**(a) Parameter count derivation:**

Total parameters are the sum of three components:

$$P_{\text{total}} = \underbrace{\vert V \vert d_e}_{\text{embedding}} + \underbrace{2L \cdot 4(d_h^2 + d_h d_e + d_h)}_{\text{LSTM stack, both directions}} + \underbrace{\vert V \vert d_h}_{\text{softmax (tied with embedding, take d_h not d_e)}}$$

Step 1 — Embedding matrix:
$$\vert V \vert \cdot d_e = 50000 \times 300 = 1.5 \times 10^7$$

Step 2 — Inside a single LSTM gate, the weight matrix is $d_h \times (d_h + d_e) = 500 \times 800$. There are 4 gates per LSTM, 2 directions, and $L=2$ layers, so:
$$4 \times 2 \times 2 \times (500 \times (500 + 300)) = 16 \times 500 \times 800 = 6{,}400{,}000$$

Step 3 — Softmax projection (tied, so size is $\vert V \vert \times d_h$):
$$50000 \times 500 = 2.5 \times 10^7$$

Step 4 — Sum:
$$P_{\text{total}} = 1.5 \times 10^7 + 6.4 \times 10^6 + 2.5 \times 10^7 = 4.64 \times 10^7$$

> **Final answer:** $\boxed{P_{\text{total}} = 46.4 \text{ million trainable parameters}}$

**Valuation Key:**
- [Stating the three-term formula: 2 Marks]
- [Numerical substitution step 1 (embedding): 1 Mark]
- [Numerical substitution step 2 (LSTM): 2 Marks]
- [Numerical substitution step 3 (softmax): 1 Mark]
- [Final summed value: 1 Mark]

**(b) Gradient update derivation for $s_1$:**

The cross-entropy loss is
$$\mathcal{L} = -\sum_{t=1}^{n} \log p(y_t \mid \mathbf{ELMo}_t) = -\sum_{t=1}^{n} \log \frac{\exp(\text{score}(y_t, \mathbf{ELMo}_t))}{\sum_{y'} \exp(\text{score}(y', \mathbf{ELMo}_t))}$$

The chain rule gives
$$\frac{\partial \mathcal{L}}{\partial s_1} = \frac{\partial \mathcal{L}}{\partial \mathbf{ELMo}_t} \cdot \frac{\partial \mathbf{ELMo}_t}{\partial s_1}$$

The first factor is the back-propagated error signal from the parser head, denoted $\boldsymbol{\delta}_t \in \mathbb{R}^{2 d_h}$. The second factor follows from the linearity of $\mathbf{ELMo}_t$ in $s_1$:

$$\frac{\partial \mathbf{ELMo}_t}{\partial s_1} = \gamma \cdot \mathbf{h}_{t,1}$$

Therefore
$$\frac{\partial \mathcal{L}}{\partial s_1} = \gamma \sum_{t=1}^{n} \boldsymbol{\delta}_t^\top \mathbf{h}_{t,1}$$

SGD update:
$$s_1^{(k+1)} = s_1^{(k)} + \eta \cdot \gamma \sum_{t=1}^{n} \boldsymbol{\delta}_t^\top \mathbf{h}_{t,1}$$

> **Final answer:** $\boxed{s_1^{(k+1)} = s_1^{(k)} + \eta \gamma \sum_t \boldsymbol{\delta}_t^\top \mathbf{h}_{t,1}}$

**Valuation Key:**
- [Writing $\mathcal{L}$ and applying chain rule: 2 Marks]
- [Computing $\partial \mathbf{ELMo}_t / \partial s_1 = \gamma \mathbf{h}_{t,1}$: 2 Marks]
- [Stating $\boldsymbol{\delta}_t$ notation: 1 Mark]
- [Final summation form of gradient: 1 Mark]
- [Final SGD update equation: 1 Mark]

---

### Question B2 (Choice B) `[KTU University Exam — Dec 2023]`
**CO3, Apply / Analyse — 14 Marks**

> **(a)** Explain the **four stages** of a contextual word representation allocation pipeline used in a neural dependency parser. For each stage, state the input variable, the transformation applied, and the output variable. Use the ELMo biLM as your running example. **[7 Marks]**

> **(b)** A research team trains a dependency parser on a domain-specific corpus (legal text). Initially the allocation profile is $(s_0, s_1, s_2) = (0.33, 0.33, 0.34)$. After fine-tuning, it becomes $(0.05, 0.25, 0.70)$. **Explain what this shift implies** about which biLM layer carries the most parser-relevant information for legal text, and **derive the softmax logits** $\alpha_0, \alpha_1, \alpha_2$ that produced the new profile (assume $\alpha_0 = 0$ as reference). **[7 Marks]**

#### Model Solution

**(a) Four stages — full breakdown:**

| Stage | Input | Transformation | Output |
|---|---|---|---|
| 1. Token embedding | $w_t \in \{1, \dots, \vert V \vert\}$ | Matrix lookup $E \in \mathbb{R}^{\vert V \vert \times d_e}$ | $\mathbf{e}_t \in \mathbb{R}^{d_e}$ |
| 2. Forward LSTM | $\{\mathbf{e}_1, \dots, \mathbf{e}_n\}$ | LSTM gate recurrence | $\overrightarrow{\mathbf{h}}_t \in \mathbb{R}^{d_h}$ |
| 3. Backward LSTM | Reversed $\{\mathbf{e}_n, \dots, \mathbf{e}_1\}$ | Independent LSTM gate recurrence | $\overleftarrow{\mathbf{h}}_t \in \mathbb{R}^{d_h}$ |
| 4. Allocation + rescale | $\{\mathbf{e}_t, \overrightarrow{\mathbf{h}}_t, \overleftarrow{\mathbf{h}}_t\}$ | $\gamma \sum_j s_j \mathbf{h}_{t,j}$ | $\mathbf{ELMo}_t \in \mathbb{R}^{2 d_h}$ |

**[7 Marks — 1.5 per stage (½ input, ½ transform, ½ output, plus ½ for using ELMo context).]**

**(b) Interpretation and inverse-softmax derivation:**

**Interpretation (4 marks):** The shift from $(0.33, 0.33, 0.34)$ to $(0.05, 0.25, 0.70)$ shows that **Layer 2 (the top biLSTM) carries the most parser-relevant information** for legal text. The raw embedding layer ($s_0$) drops to 0.05, indicating that surface-form tokens alone are insufficient. The shift to layer 2 reflects the fact that legal text has **long-range syntactic dependencies** (e.g., nested clauses, multi-sentence references) that require deeper contextual integration.

**Inverse-softmax derivation (3 marks):** Given target $s_1 = 0.25$ and $s_2 = 0.70$ and $\alpha_0 = 0$:

$$s_j = \frac{\exp(\alpha_j)}{\exp(0) + \exp(\alpha_1) + \exp(\alpha_2)} = \frac{\exp(\alpha_j)}{1 + e^{\alpha_1} + e^{\alpha_2}}$$

From $s_0 = 0.05$:
$$0.05 = \frac{1}{1 + e^{\alpha_1} + e^{\alpha_2}} \implies 1 + e^{\alpha_1} + e^{\alpha_2} = 20$$

From $s_1 = 0.25$ and $s_2 = 0.70$:
$$\frac{e^{\alpha_1}}{e^{\alpha_2}} = \frac{0.25}{0.70} = \frac{5}{14}$$
$$e^{\alpha_1} = \frac{5}{14} e^{\alpha_2}$$

Substitute:
$$1 + \frac{5}{14} e^{\alpha_2} + e^{\alpha_2} = 20$$
$$1 + \frac{19}{14} e^{\alpha_2} = 20$$
$$\frac{19}{14} e^{\alpha_2} = 19 \implies e^{\alpha_2} = 14$$
$$\alpha_2 = \ln 14 \approx 2.639$$
$$e^{\alpha_1} = \frac{5}{14} \cdot 14 = 5 \implies \alpha_1 = \ln 5 \approx 1.609$$

> **Final answer:** $\boxed{\alpha_0 = 0, \quad \alpha_1 \approx 1.609, \quad \alpha_2 \approx 2.639}$

**Valuation Key:**
- [Interpretation: 4 Marks (correctly stating that layer 2 carries more information and giving a 1-sentence justification)]
- [Inverse-softmax setup: 1 Mark]
- [Solving for the denominator: 1 Mark]
- [Final $\alpha_1, \alpha_2$ values: 1 Mark]

---

> [!WARNING]
> **KTU Examiner’s Valuation Warning — Common Pitfalls:**
> 1. **Dropping the $\gamma$ factor** in the chain rule: the derivative of $\mathbf{ELMo}_t$ w.r.t. $s_j$ carries $\gamma$, *not* 1. Marks lost: typically 1 mark per occurrence.
> 2. **Forgetting the bias terms** in the LSTM parameter count: each gate has $d_h$ biases, contributing an extra $4 d_h$ per layer. Marks lost: 1–2 marks.
> 3. **Confusing tied vs untied softmax**: in ELMo the input and output embeddings are tied, halving the projection parameters. Marks lost: 1 mark.
> 4. **Treating $\mathbf{s}^{\text{task}}$ as a probability over *tokens*** instead of over *layers*. The KTU 2024 rubric explicitly states “per-layer allocation, not per-token.”
> 5. **Skipping the chain rule step** in the gradient derivation. The examiner awards 1 mark for stating the chain rule explicitly.
> 6. **Writing the answer in prose without LaTeX** when deriving a formula: the KTU 2024 valuation key *prefers* boxed final answers in math mode.

---

## 5.3 Topic Recap & Important Things to Remember

> [!TIP]
> **Rapid Revision Checklist (KTU 2024 Module 3 — PECST803):**

- **Contextual Word Representation** = vector that is a function of the entire sentence, not just the token. **[Definition worth 1 mark on every exam.]**
- The **four stages** of the allocation pipeline are: **(1) Embedding → (2) Forward LSTM → (3) Backward LSTM → (4) Allocation + Rescale.** Memorise this sequence.
- The **ELMo allocation formula** is $\mathbf{ELMo}_t = \gamma \sum_{j=0}^{L} s_j \mathbf{h}_{t,j}$. The $s_j$ are **softmax-normalised layer weights**; $\gamma$ is a **scalar rescaling**.
- The **allocation profile $\mathbf{s}^{\text{task}}$** is the only biLM-derived learnable surface when the biLM is frozen. It is per-layer, not per-token.
- The **two-state LSTM cell** is $(\mathbf{c}_t, \mathbf{h}_t)$. The cell update is $\mathbf{c}_t = \mathbf{f}_t \odot \mathbf{c}_{t-1} + \mathbf{i}_t \odot \tilde{\mathbf{c}}_t$. The hidden update is $\mathbf{h}_t = \mathbf{o}_t \odot \tanh(\mathbf{c}_t)$.
- The **biLM total loss** is the sum of forward and backward log-likelihoods, *jointly* maximised.
- The **gradient update for an allocation weight** is $s_j^{(k+1)} = s_j^{(k)} + \eta \gamma \sum_t \boldsymbol{\delta}_t^\top \mathbf{h}_{t,j}$ — the $\gamma$ factor is **non-negotiable**.
- The **parameter profile** is dominated by the softmax projection (typically $\vert V \vert \cdot d_h$), not the LSTM weights.
- The **typical allocation profile in dependency parsing** is roughly $(0.1, 0.4, 0.5)$ — middle layer > top layer > embedding, reflecting that dependency arcs depend on syntactic abstraction.
- **Tied embeddings** halve the softmax parameter cost — KTU expects this to be mentioned in derivation questions.
- **Gradient clipping** with $\tau = 5.0$ is the standard stabilisation profile; KTU marks are lost for omitting it.
- **Bidirectional independence**: the forward and backward LSTMs do *not* share weights.
- **BPTT truncation** $K \approx 20$–$50$ is the standard KTU profile for ELMo fine-tuning.
- **Inverse-softmax** trick: setting $\alpha_0 = 0$ and solving $\sum e^{\alpha_j} = 1/s_0$ is a common exam technique — practice it.
- **Two exam hot-spots**: (i) parameter-count derivation, (ii) gradient-of-$s_j$ derivation. **Master these two** and you will cover $>60\%$ of the 14-mark questions in this module.

---

<!-- SECTION_5_END -->
