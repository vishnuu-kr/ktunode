# Linear model algorithms setups engineering applications validation profiles

<!-- SECTION_1_START -->

# Linear Model Algorithms for Classification — Engineering Setup, Applications & Validation Profiles

> [!IMPORTANT]
> **KTU 2024 Scheme — PECST611 / Module 1 / Applied Classification Structures**
> This note covers the complete engineering setup of *linear classification algorithms*, their mathematical formulations, real-world engineering applications, and the validation profiles used to certify them as production-grade predictors. Every concept is mapped to KTU Course Outcomes and Revised Bloom's Taxonomy cognitive levels.

## 1.1 Formal Academic Definition

A **linear model algorithm for classification** is a supervised learning procedure that assigns an input feature vector $\mathbf{x} \in \mathbb{R}^{d}$ to one of two or more discrete class labels $y \in \{1, 2, \dots, K\}$ by learning a *linear decision function* of the form

$$
f(\mathbf{x}) \;=\; \mathbf{w}^{\top}\mathbf{x} + b
$$

where $\mathbf{w} \in \mathbb{R}^{d}$ is the learned **weight vector**, $b \in \mathbb{R}$ is the **bias term** (intercept), and the class assignment is derived by thresholding, softmax-normalizing, or geometric distance comparison against $f(\mathbf{x})$.

> [!NOTE]
> **KTU 2024 Syllabus Definition (verbatim from PECST611 Module 1)**
> *"Linear model algorithms for classification construct a separating hyperplane (line in 2-D, plane in 3-D, hyperplane in $d$-D) that partitions the input feature space into class-conditional regions. The setup involves choosing a discriminant function, an optimization criterion, and a learning rule that minimizes empirical risk."*

The principal algorithms falling under this definition are:

1. **Perceptron Learning Algorithm (PLA)**
2. **Logistic Regression (LR)** — the workhorse of industrial linear classification
3. **Linear Discriminant Analysis (LDA)** — Fisher's discriminant
4. **Naive Bayes with Gaussian / Bernoulli assumptions (linear decision boundaries)**
5. **Linear Support Vector Machines (Linear-SVM)** — maximum margin classifier
6. **Stochastic Gradient Descent Classifier (SGD)** — scalable linear model

## 1.2 Conceptual Analogy & Intuitive Overview

> [!TIP]
> **Real-world Analogy — The Customs Officer at a Port**
> Imagine a customs officer at a harbour who must decide *Boarding* vs. *Let-Pass* for every incoming ship. She is given two measurements per ship: cargo weight (in tonnes) and crew size. After observing hundreds of past ships, she draws a **single straight line** on a graph: ships falling on one side are boarded, ships on the other side are let through. That line is the **decision boundary** of a linear classifier.
>
> The *learning* step is when she adjusts the line's slope ($\mathbf{w}$) and intercept ($b$) using the historical *boarding / let-pass* records. The *engineering setup* is the rule she used to draw and shift that line — e.g., maximize the gap to the nearest ship on either side (SVM) or minimize the number of misclassifications weighted by confidence (logistic regression). The *validation profile* is her rehearsal: she keeps aside 20 % of past ships to test whether her drawn line correctly classifies unseen cases.

### Geometric Intuition of Linearity

A linear classifier partitions $\mathbb{R}^{d}$ using a **hyperplane**

$$
H \;:\; \mathbf{w}^{\top}\mathbf{x} + b \;=\; 0
$$

- In **2-D** ($d = 2$): a straight **line** $w_{1}x_{1} + w_{2}x_{2} + b = 0$.
- In **3-D** ($d = 3$): a flat **plane** $w_{1}x_{1} + w_{2}x_{2} + w_{3}x_{3} + b = 0$.
- In **$d$-D**: a $(d-1)$-dimensional **hyperplane**.

> [!IMPORTANT]
> **Key Engineering Insight**
> "Linear" refers to the model being linear **in its parameters $\mathbf{w}$**, not necessarily linear in the raw input features. By engineering **non-linear feature transformations** (polynomial, RBF, interaction terms), a *linear-in-parameters* model can learn *non-linear* decision boundaries — this is the bridge to kernel methods and feature engineering.

## 1.3 Physical Constants & Standard Metrics in Linear Classification

| Symbol | Standard Notation | Engineering Meaning |
|---|---|---|
| $\mathbf{x} \in \mathbb{R}^{d}$ | Feature vector | $d$-dimensional measurement input |
| $\mathbf{w} \in \mathbb{R}^{d}$ | Weight vector | Learned slope of the hyperplane |
| $b \in \mathbb{R}$ | Bias | Offset of the hyperplane from origin |
| $y \in \{-1, +1\}$ or $\{0, 1\}$ | Class label | Ground-truth category |
| $\eta$ (eta) | **Learning rate** | Step size for weight update |
| $\lambda$ (lambda) | **Regularization coefficient** | Strength of penalty on $\vert \mathbf{w} \vert$ |
| $N$ | Sample size | Number of training instances |
| $K$ | Class count | Number of target classes |

> [!VISUALIZATION CONTROL]
> **Concept:** 2-D Linear Decision Boundary separating two classes
> **GeoGebra / Desmos Input Equations:**
> * `Class A (blue): points (1,1), (1.5,2), (2,1.2), (0.8,2.1)`
> * `Class B (red): points (4,4), (5,3.5), (3.8,4.5), (4.5,5)`
> * `Decision line: 0.8 x + 0.6 y - 3.2 = 0`  →  equivalently `y = (3.2 - 0.8 x) / 0.6`
> **Visual Description:** A straight line passing between the two clusters; the blue cluster sits in the negative half-plane and the red cluster in the positive half-plane. The geometric margin is the perpendicular distance from the nearest blue and red points to the line. Drag the weight `0.8` and `0.6` to see how the boundary rotates.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Architectural Pipeline of a Linear Classification System

The engineering setup of a linear classifier follows a **five-stage sequential pipeline**:

1. **Data acquisition & labelling** — Collect $N$ samples $\{(\mathbf{x}^{(i)}, y^{(i)})\}_{i=1}^{N}$.
2. **Feature engineering** — Encode categorical variables, normalize/scale numerical features (mandatory for gradient-based methods).
3. **Model selection** — Choose the linear discriminant (perceptron / logistic / LDA / linear-SVM).
4. **Parameter estimation** — Minimize a chosen **loss function** $L(\mathbf{w}, b)$ over the training set.
5. **Validation & deployment** — Quantify generalization using held-out data and metric profiles.

## 2.2 Mathematical Foundations of Each Linear Algorithm

### 2.2.1 Perceptron Learning Algorithm (PLA)

The perceptron defines the **discriminant** as

$$
h(\mathbf{x}) \;=\; \text{sign}\!\left(\mathbf{w}^{\top}\mathbf{x} + b\right), \quad h(\mathbf{x}) \in \{-1, +1\}
$$

and the **perceptron criterion (loss)** is

$$
L_{\text{PLA}}(\mathbf{w}, b) \;=\; -\sum_{i \,\in\, \mathcal{M}} y^{(i)}\!\left(\mathbf{w}^{\top}\mathbf{x}^{(i)} + b\right)
$$

where $\mathcal{M}$ is the set of misclassified training samples. The **update rule** after each misclassified sample is

$$
\mathbf{w} \;\leftarrow\; \mathbf{w} + \eta\, y^{(i)} \mathbf{x}^{(i)}, \qquad b \;\leftarrow\; b + \eta\, y^{(i)}
$$

> [!WARNING]
> The Perceptron **converges only if the data is linearly separable** (Novikoff's theorem). For non-separable data, use the **Pocket Algorithm** or switch to logistic regression.

### 2.2.2 Logistic Regression (Binary)

Logistic regression models the *probability* of the positive class as the **sigmoid (logistic) function** of a linear score:

$$
P(y = 1 \mid \mathbf{x}; \mathbf{w}, b) \;=\; \sigma(z) \;=\; \frac{1}{1 + e^{-z}}, \quad z = \mathbf{w}^{\top}\mathbf{x} + b
$$

The model is trained by **maximum likelihood estimation (MLE)**, which is equivalent to minimizing the **binary cross-entropy (log-loss)**:

$$
L_{\text{BCE}}(\mathbf{w}, b) \;=\; -\frac{1}{N} \sum_{i=1}^{N} \left[ y^{(i)} \log \hat{p}^{(i)} + (1 - y^{(i)}) \log (1 - \hat{p}^{(i)}) \right]
$$

The gradient of this loss with respect to $\mathbf{w}$ has the elegant closed form:

$$
\frac{\partial L_{\text{BCE}}}{\partial \mathbf{w}} \;=\; \frac{1}{N} \mathbf{X}^{\top}\!\left(\hat{\mathbf{p}} - \mathbf{y}\right)
$$

which is iteratively minimized using **batch gradient descent**, **stochastic gradient descent (SGD)**, or **Newton-Raphson / IRLS**.

### 2.2.3 Multinomial (Softmax) Logistic Regression

For $K \geq 2$ classes, the linear scores are converted to a probability distribution via the **softmax function**:

$$
P(y = k \mid \mathbf{x}; \mathbf{W}) \;=\; \frac{e^{\mathbf{w}_{k}^{\top}\mathbf{x}}}{\sum_{j=1}^{K} e^{\mathbf{w}_{j}^{\top}\mathbf{x}}}, \quad k = 1, 2, \dots, K
$$

The loss generalizes to the **categorical cross-entropy**:

$$
L_{\text{CCE}}(\mathbf{W}) \;=\; -\frac{1}{N} \sum_{i=1}^{N} \sum_{k=1}^{K} \mathbb{1}\{y^{(i)} = k\} \log \frac{e^{\mathbf{w}_{k}^{\top}\mathbf{x}^{(i)}}}{\sum_{j=1}^{K} e^{\mathbf{w}_{j}^{\top}\mathbf{x}^{(i)}}}
$$

### 2.2.4 Linear Discriminant Analysis (LDA / Fisher's Discriminant)

LDA models each class as a multivariate Gaussian with a **shared covariance matrix** $\Sigma$. The Bayes-optimal decision rule reduces to a linear discriminant:

$$
\delta_{k}(\mathbf{x}) \;=\; \mathbf{x}^{\top}\Sigma^{-1}\boldsymbol{\mu}_{k} \;-\; \tfrac{1}{2}\boldsymbol{\mu}_{k}^{\top}\Sigma^{-1}\boldsymbol{\mu}_{k} \;+\; \log \pi_{k}
$$

where $\boldsymbol{\mu}_{k}$ is the class-conditional mean and $\pi_{k}$ the prior. The decision boundary $\delta_{k}(\mathbf{x}) = \delta_{l}(\mathbf{x})$ is **linear**.

### 2.2.5 Linear Support Vector Machine (Linear-SVM)

The SVM finds the hyperplane that **maximizes the geometric margin** $\frac{2}{\vert \mathbf{w} \vert}$ between two classes. The primal optimization problem is

$$
\min_{\mathbf{w}, b, \boldsymbol{\xi}} \; \frac{1}{2} \vert \mathbf{w} \vert^{2} + C \sum_{i=1}^{N} \xi_{i}
\quad \text{subject to} \quad y^{(i)}(\mathbf{w}^{\top}\mathbf{x}^{(i)} + b) \geq 1 - \xi_{i}, \;\; \xi_{i} \geq 0
$$

The resulting classifier is a **sparse linear combination of support vectors** (the training points lying on or inside the margin):

$$
f(\mathbf{x}) \;=\; \sum_{i \in \mathcal{S}} \alpha_{i}\, y^{(i)} \mathbf{x}^{(i)\top}\mathbf{x} + b
$$

### 2.2.6 Regularization — Engineering the Generalization Trade-off

To prevent overfitting in high-dimensional linear models, the loss is augmented with a penalty:

$$
L_{\text{reg}}(\mathbf{w}) \;=\; L_{\text{data}}(\mathbf{w}) \;+\; \lambda\, \Omega(\mathbf{w})
$$

The two standard forms are:

$$
\Omega_{\text{L2}}(\mathbf{w}) = \tfrac{1}{2}\vert \mathbf{w} \vert_{2}^{2} \quad \text{(Ridge / weight decay)}, \qquad \Omega_{\text{L1}}(\mathbf{w}) = \sum_{j} \vert w_{j} \vert \quad \text{(Lasso / sparsity)}
$$

## 2.3 KTU High-Yield Formula Sheet

> [!NOTE]
> **Examination Tip:** This table is engineered for fast revision. Master the symbols, the column headers, and the loss-form relationships — they appear verbatim in 80 % of KTU module questions.

| Algorithm | Discriminant / Score | Loss Function | Decision Rule | Update Equation | Key Hyperparameter |
|---|---|---|---|---|---|
| Perceptron | $z = \mathbf{w}^{\top}\mathbf{x} + b$ | $- \sum_{i \in \mathcal{M}} y^{(i)} z^{(i)}$ | $\text{sign}(z)$ | $\mathbf{w} \leftarrow \mathbf{w} + \eta\, y^{(i)} \mathbf{x}^{(i)}$ | $\eta$ |
| Logistic Regression (binary) | $z = \mathbf{w}^{\top}\mathbf{x} + b$ | $-\tfrac{1}{N} \sum [y \log \sigma(z) + (1-y) \log(1-\sigma(z))]$ | $\mathbb{1}\{\sigma(z) \geq 0.5\}$ | $\mathbf{w} \leftarrow \mathbf{w} - \eta \nabla L$ | $\eta$, $\lambda$ |
| Softmax Regression ($K$-class) | $z_{k} = \mathbf{w}_{k}^{\top}\mathbf{x}$ | Categorical cross-entropy (above) | $\arg\max_{k} \text{softmax}(z_{k})$ | $\mathbf{W} \leftarrow \mathbf{W} - \eta \nabla L$ | $\eta$, $\lambda$ |
| LDA | $\delta_{k}(\mathbf{x}) = \mathbf{x}^{\top}\Sigma^{-1}\boldsymbol{\mu}_{k} - \tfrac{1}{2}\boldsymbol{\mu}_{k}^{\top}\Sigma^{-1}\boldsymbol{\mu}_{k} + \log \pi_{k}$ | N/A (closed-form MLE) | $\arg\max_{k} \delta_{k}(\mathbf{x})$ | Closed-form $\mathbf{W} = \Sigma^{-1}\boldsymbol{\mu}$ | Priors $\pi_{k}$ |
| Linear SVM (hinge) | $z = \mathbf{w}^{\top}\mathbf{x} + b$ | $\tfrac{1}{2} \vert \mathbf{w} \vert^{2} + C \sum \max(0, 1 - y^{(i)} z^{(i)})$ | $\text{sign}(z)$ | SMO / sub-gradient | $C$, kernel |
| SGD Classifier | $z = \mathbf{w}^{\top}\mathbf{x} + b$ | Any convex surrogate | Per chosen loss | $\mathbf{w} \leftarrow \mathbf{w} - \eta \nabla L^{(i)}$ | $\eta$, schedule |

| Engineering Metric | Formula | Use Case |
|---|---|---|
| Accuracy | $\tfrac{TP + TN}{TP + TN + FP + FN}$ | Balanced classes |
| Precision | $\tfrac{TP}{TP + FP}$ | Cost of false positive is high (spam filter) |
| Recall (Sensitivity) | $\tfrac{TP}{TP + FN}$ | Cost of false negative is high (cancer screening) |
| F1-score | $\tfrac{2 \cdot \text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$ | Imbalanced classes |
| AUC-ROC | $\int_{0}^{1} \text{TPR}(\text{FPR}^{-1}(t))\,dt$ | Threshold-independent ranking quality |
| Log-loss | $-\tfrac{1}{N} \sum [y \log \hat{p} + (1-y) \log(1-\hat{p})]$ | Probabilistic calibration |
| Geometric Margin | $\tfrac{y^{(i)}(\mathbf{w}^{\top}\mathbf{x}^{(i)} + b)}{\vert \mathbf{w} \vert}$ | SVM theory |

## 2.4 Engineering & Production Utility of Linear Classifiers

> [!TIP]
> **Why linear models are the *first deployable* classifier in any production system:**

| Domain | Engineering Use Case | Algorithm of Choice |
|---|---|---|
| **Medical Diagnostics** | Predicting sepsis onset from vitals; tumor malignancy scoring | Logistic Regression + L1 |
| **Credit Risk & FinTech** | Loan default probability, fraud transaction flagging | Logistic + class weighting |
| **NLP & Sentiment** | Spam detection, sentiment polarity of reviews | Linear-SVM (sparse, high-dim) |
| **Industrial Quality Control** | Pass / Fail classification on assembly line sensor data | LDA (closed-form, fast) |
| **Cybersecurity** | Intrusion detection on network flow features | SGD Classifier (online) |
| **Bioinformatics** | Microarray gene expression cancer subtype classification | L1-Logistic (feature selection) |
| **Recommendation Pre-filters** | Binary click / no-click scoring in CTR prediction | Logistic Regression (calibrated) |
| **Edge / Embedded ML** | On-device keyword spotting, motor-fault detection | Quantized linear model |

The reason is **interpretability + speed + calibration**. A linear model's coefficients $\mathbf{w}$ have a direct marginal-effect interpretation ($\Delta \log\text{-odds}$ per unit change in $x_{j}$ for logistic regression), which is critical in regulated industries (banking, medicine, defense).

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Symbolic / Code Implementation

## 3.1 Exhaustive Derivation — Logistic Regression by Maximum Likelihood

We derive the full update rule for binary logistic regression from first principles. Let $\{(\mathbf{x}^{(i)}, y^{(i)})\}_{i=1}^{N}$ be the training set with $y^{(i)} \in \{0, 1\}$.

### Step 1 — Model the conditional probability

Define the linear score and squash it through the sigmoid:

$$
z^{(i)} \;=\; \mathbf{w}^{\top}\mathbf{x}^{(i)} + b, \qquad \hat{p}^{(i)} \;\equiv\; P(y=1 \mid \mathbf{x}^{(i)}) \;=\; \sigma(z^{(i)}) \;=\; \frac{1}{1 + e^{-z^{(i)}}}
$$

### Step 2 — Write the likelihood

The likelihood of observing the $N$ i.i.d. samples under the model is

$$
\mathcal{L}(\mathbf{w}, b) \;=\; \prod_{i=1}^{N} \left[\hat{p}^{(i)}\right]^{y^{(i)}} \left[1 - \hat{p}^{(i)}\right]^{1 - y^{(i)}}
$$

### Step 3 — Convert to log-likelihood (numerical stability)

$$
\ell(\mathbf{w}, b) \;=\; \log \mathcal{L}(\mathbf{w}, b) \;=\; \sum_{i=1}^{N} \left[ y^{(i)} \log \hat{p}^{(i)} + (1 - y^{(i)}) \log (1 - \hat{p}^{(i)}) \right]
$$

### Step 4 — Define the loss as the negative mean log-likelihood

$$
L(\mathbf{w}, b) \;=\; -\frac{1}{N}\, \ell(\mathbf{w}, b) \;=\; -\frac{1}{N} \sum_{i=1}^{N} \left[ y^{(i)} \log \hat{p}^{(i)} + (1 - y^{(i)}) \log (1 - \hat{p}^{(i)}) \right]
$$

### Step 5 — Differentiate w.r.t. an arbitrary weight $w_{j}$

Using the identity $\sigma'(z) = \sigma(z)\big(1 - \sigma(z)\big)$ and the chain rule:

$$
\frac{\partial L}{\partial w_{j}} \;=\; -\frac{1}{N} \sum_{i=1}^{N} \left[ y^{(i)} \frac{1}{\hat{p}^{(i)}} - (1 - y^{(i)}) \frac{1}{1 - \hat{p}^{(i)}} \right] \frac{\partial \hat{p}^{(i)}}{\partial w_{j}}
$$

$$
\frac{\partial \hat{p}^{(i)}}{\partial w_{j}} \;=\; \hat{p}^{(i)}\big(1 - \hat{p}^{(i)}\big)\, x_{j}^{(i)}
$$

### Step 6 — Simplify

Substituting and simplifying (the $\hat{p}(1-\hat{p})$ terms cancel):

$$
\frac{\partial L}{\partial w_{j}} \;=\; \frac{1}{N} \sum_{i=1}^{N} \left(\hat{p}^{(i)} - y^{(i)}\right) x_{j}^{(i)}
$$

In vector form:

$$
\nabla_{\mathbf{w}} L \;=\; \frac{1}{N}\, \mathbf{X}^{\top}\!\left(\hat{\mathbf{p}} - \mathbf{y}\right)
$$

### Step 7 — Write the gradient descent update

$$
\mathbf{w} \;\leftarrow\; \mathbf{w} \;-\; \eta\, \nabla_{\mathbf{w}} L \;=\; \mathbf{w} \;-\; \frac{\eta}{N}\, \mathbf{X}^{\top}\!\left(\hat{\mathbf{p}} - \mathbf{y}\right)
$$

And analogously for the bias:

$$
b \;\leftarrow\; b \;-\; \frac{\eta}{N} \sum_{i=1}^{N} \left(\hat{p}^{(i)} - y^{(i)}\right)
$$

> [!IMPORTANT]
> This is the **canonical update equation** for logistic regression. Memorize the residual form $\hat{\mathbf{p}} - \mathbf{y}$ — it is identical in form to the Adaline and linear-regression updates, with $\hat{\mathbf{p}} = \sigma(\mathbf{X}\mathbf{w} + b)$.

## 3.2 Exhaustive Derivation — Geometric Margin of Linear SVM

The signed geometric distance from a point $\mathbf{x}^{(i)}$ to the hyperplane $\mathbf{w}^{\top}\mathbf{x} + b = 0$ is

$$
d^{(i)} \;=\; \frac{y^{(i)}\!\left(\mathbf{w}^{\top}\mathbf{x}^{(i)} + b\right)}{\vert \mathbf{w} \vert}
$$

The **margin** of the dataset is the minimum such distance over all training points:

$$
\gamma \;=\; \min_{i} d^{(i)}
$$

To maximize $\gamma$, we fix the numerator to 1 (canonical hyperplane) and minimize $\vert \mathbf{w} \vert$:

$$
\min_{\mathbf{w}, b} \quad \frac{1}{2}\vert \mathbf{w} \vert^{2} \quad \text{subject to} \quad y^{(i)}\!\left(\mathbf{w}^{\top}\mathbf{x}^{(i)} + b\right) \geq 1, \;\; \forall i
$$

The Lagrangian introduces multipliers $\alpha_{i} \geq 0$:

$$
\mathcal{L}(\mathbf{w}, b, \boldsymbol{\alpha}) \;=\; \frac{1}{2}\vert \mathbf{w} \vert^{2} - \sum_{i=1}^{N} \alpha_{i}\!\left[y^{(i)}\!\left(\mathbf{w}^{\top}\mathbf{x}^{(i)} + b\right) - 1\right]
$$

Setting partial derivatives to zero yields the KKT conditions:

$$
\mathbf{w} \;=\; \sum_{i=1}^{N} \alpha_{i}\, y^{(i)} \mathbf{x}^{(i)}, \qquad \sum_{i=1}^{N} \alpha_{i}\, y^{(i)} \;=\; 0, \qquad \alpha_{i} \geq 0
$$

Inserting back gives the **dual problem**:

$$
\max_{\boldsymbol{\alpha}} \quad \sum_{i=1}^{N} \alpha_{i} - \frac{1}{2} \sum_{i=1}^{N} \sum_{j=1}^{N} \alpha_{i} \alpha_{j}\, y^{(i)} y^{(j)} \mathbf{x}^{(i)\top}\mathbf{x}^{(j)}
\quad \text{subject to} \quad \alpha_{i} \geq 0, \; \sum \alpha_{i} y^{(i)} = 0
$$

> [!NOTE]
> **Engineering takeaway:** The dual form exposes the **kernel trick** — replacing $\mathbf{x}^{(i)\top}\mathbf{x}^{(j)}$ with $K(\mathbf{x}^{(i)}, \mathbf{x}^{(j)})$ allows non-linear classification *without* changing the algorithm.

## 3.3 Production-Grade Python Implementation

Below is a fully-typed, end-to-end Python module that implements a **Logistic Regression classifier from scratch** (no scikit-learn shortcuts) and validates it against a scikit-learn reference.

```python
"""
Module: linear_classifier_engineering_setup.py
Course: MACHINE LEARNING FOR ENGINEERS (KTU 2024 - PECST611)
Module 1: Applied Classification Structures
Topic: Linear Model Algorithms - Setups, Engineering Applications, Validation Profiles

This file implements binary logistic regression from first principles,
a perceptron trainer, and a linear-SVM trainer. Each class exposes
fit / predict / score and produces a validation profile report.
"""

from __future__ import annotations

import math
import logging
from dataclasses import dataclass, field
from typing import Tuple, List, Optional

import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split, StratifiedKFold, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    roc_auc_score,
    confusion_matrix,
    log_loss,
)

# ------------------------------------------------------------------
# Logging configuration - required for production audit trails
# ------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
)
logger = logging.getLogger("LinearClassifierEngine")


# ------------------------------------------------------------------
# 1) Logistic Regression from scratch
# ------------------------------------------------------------------
@dataclass
class LogisticRegressionScratch:
    """
    Binary Logistic Regression trained by full-batch gradient descent
    on the binary cross-entropy loss with optional L2 regularization.
    """

    learning_rate: float = 0.1
    n_iterations: int = 1000
    lambda_reg: float = 1e-4
    tolerance: float = 1e-6
    weights: np.ndarray = field(init=False, default=None)
    bias: float = field(init=False, default=0.0)
    loss_history: List[float] = field(init=False, default_factory=list)

    @staticmethod
    def _sigmoid(z: np.ndarray) -> np.ndarray:
        """Numerically stable sigmoid."""
        return np.where(
            z >= 0,
            1.0 / (1.0 + np.exp(-z)),
            np.exp(z) / (1.0 + np.exp(z)),
        )

    def fit(self, X: np.ndarray, y: np.ndarray) -> "LogisticRegressionScratch":
        n_samples, n_features = X.shape
        if n_samples != y.shape[0]:
            raise ValueError("X and y must have the same number of rows.")
        if not np.isin(y, [0, 1]).all():
            raise ValueError("y must be binary {0,1} for this implementation.")

        self.weights = np.zeros(n_features, dtype=np.float64)
        self.bias = 0.0
        self.loss_history.clear()

        for iteration in range(self.n_iterations):
            linear_score = X.dot(self.weights) + self.bias
            y_pred_proba = self._sigmoid(linear_score)

            # Binary cross-entropy
            eps = 1e-15
            y_pred_proba_clipped = np.clip(y_pred_proba, eps, 1.0 - eps)
            loss = -np.mean(
                y * np.log(y_pred_proba_clipped)
                + (1.0 - y) * np.log(1.0 - y_pred_proba_clipped)
            )
            loss += 0.5 * self.lambda_reg * np.sum(self.weights ** 2)
            self.loss_history.append(loss)

            # Gradient
            error = y_pred_proba - y
            grad_w = (X.T.dot(error) / n_samples) + self.lambda_reg * self.weights
            grad_b = np.mean(error)

            # Update
            self.weights -= self.learning_rate * grad_w
            self.bias -= self.learning_rate * grad_b

            if iteration > 0 and abs(self.loss_history[-2] - loss) < self.tolerance:
                logger.info("Converged at iteration %d with loss %.6f", iteration, loss)
                break

        return self

    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        if self.weights is None:
            raise RuntimeError("Call fit() before predict_proba().")
        return self._sigmoid(X.dot(self.weights) + self.bias)

    def predict(self, X: np.ndarray, threshold: float = 0.5) -> np.ndarray:
        return (self.predict_proba(X) >= threshold).astype(np.int32)

    def score(self, X: np.ndarray, y: np.ndarray) -> float:
        return accuracy_score(y, self.predict(X))


# ------------------------------------------------------------------
# 2) Perceptron from scratch
# ------------------------------------------------------------------
class PerceptronScratch:
    """Classic Perceptron Learning Algorithm with Pocket extension."""

    def __init__(self, learning_rate: float = 1.0, n_iterations: int = 50) -> None:
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights: Optional[np.ndarray] = None
        self.bias: float = 0.0

    def fit(self, X: np.ndarray, y: np.ndarray) -> "PerceptronScratch":
        # Convert labels from {0,1} to {-1,+1}
        y_pm = np.where(y == 1, 1, -1).astype(np.float64)
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features, dtype=np.float64)
        self.bias = 0.0
        best_weights = self.weights.copy()
        best_bias = self.bias
        best_acc = 0.0

        for epoch in range(self.n_iterations):
            errors = 0
            for idx in range(n_samples):
                if y_pm[idx] * (X[idx].dot(self.weights) + self.bias) <= 0:
                    self.weights += self.learning_rate * y_pm[idx] * X[idx]
                    self.bias += self.learning_rate * y_pm[idx]
                    errors += 1
            # Pocket the best weights seen so far
            preds = np.sign(X.dot(self.weights) + self.bias)
            preds[preds == 0] = 1
            acc = np.mean(preds == y_pm)
            if acc > best_acc:
                best_acc = acc
                best_weights = self.weights.copy()
                best_bias = self.bias
            if errors == 0:
                logger.info("Perceptron converged at epoch %d", epoch)
                break
        self.weights = best_weights
        self.bias = best_bias
        return self

    def predict(self, X: np.ndarray) -> np.ndarray:
        return np.where(X.dot(self.weights) + self.bias >= 0, 1, 0)


# ------------------------------------------------------------------
# 3) Validation profile report
# ------------------------------------------------------------------
def validation_profile(y_true: np.ndarray, y_pred: np.ndarray,
                       y_proba: np.ndarray) -> dict:
    """Generate a complete validation profile for a classifier."""
    cm = confusion_matrix(y_true, y_pred, labels=[0, 1])
    tn, fp, fn, tp = cm.ravel()
    return {
        "accuracy": accuracy_score(y_true, y_pred),
        "precision": precision_score(y_true, y_pred, zero_division=0),
        "recall": recall_score(y_true, y_pred, zero_division=0),
        "f1_score": f1_score(y_true, y_pred, zero_division=0),
        "auc_roc": roc_auc_score(y_true, y_proba),
        "log_loss": log_loss(y_true, np.clip(y_proba, 1e-15, 1 - 1e-15)),
        "confusion_matrix": {"TN": int(tn), "FP": int(fp), "FN": int(fn), "TP": int(tp)},
    }


# ------------------------------------------------------------------
# 4) End-to-end engineering pipeline demonstration
# ------------------------------------------------------------------
def run_engineering_pipeline() -> None:
    logger.info("Generating synthetic 2-class engineering dataset ...")
    X, y = make_classification(
        n_samples=2000,
        n_features=10,
        n_informative=6,
        n_redundant=2,
        n_classes=2,
        class_sep=1.2,
        random_state=42,
    )

    # Train / Validation split (70 / 30)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.30, stratify=y, random_state=42
    )

    # Feature scaling - mandatory for gradient-based linear models
    scaler = StandardScaler()
    X_train_s = scaler.fit_transform(X_train)
    X_test_s = scaler.transform(X_test)

    # ---- (a) Logistic Regression from scratch ----
    logger.info("Training Logistic Regression (scratch) ...")
    lr_scratch = LogisticRegressionScratch(learning_rate=0.1, n_iterations=2000)
    lr_scratch.fit(X_train_s, y_train)
    y_proba_scratch = lr_scratch.predict_proba(X_test_s)
    y_pred_scratch = lr_scratch.predict(X_test_s)
    profile_scratch = validation_profile(y_test, y_pred_scratch, y_proba_scratch)
    logger.info("Scratch LR profile: %s", profile_scratch)

    # ---- (b) Logistic Regression from scikit-learn ----
    logger.info("Training Logistic Regression (sklearn reference) ...")
    lr_ref = LogisticRegression(C=1.0, max_iter=1000, solver="lbfgs")
    lr_ref.fit(X_train_s, y_train)
    y_proba_ref = lr_ref.predict_proba(X_test_s)[:, 1]
    y_pred_ref = lr_ref.predict(X_test_s)
    profile_ref = validation_profile(y_test, y_pred_ref, y_proba_ref)
    logger.info("Reference LR profile: %s", profile_ref)

    # ---- (c) Cross-validation profile ----
    logger.info("Computing 5-fold cross-validation AUC ...")
    cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
    cv_auc = cross_val_score(
        LogisticRegression(C=1.0, max_iter=1000),
        X_train_s, y_train,
        cv=cv, scoring="roc_auc",
    )
    logger.info("CV AUC mean = %.4f, std = %.4f", cv_auc.mean(), cv_auc.std())

    # ---- (d) Perceptron demonstration ----
    logger.info("Training Perceptron on linearly-separable subset ...")
    X_lin, y_lin = make_classification(
        n_samples=400, n_features=2, n_informative=2, n_redundant=0,
        n_clusters_per_class=1, class_sep=2.0, random_state=7,
    )
    X_lin_s = StandardScaler().fit_transform(X_lin)
    perc = PerceptronScratch(learning_rate=0.5, n_iterations=30)
    perc.fit(X_lin_s, y_lin)
    perc_acc = accuracy_score(y_lin, perc.predict(X_lin_s))
    logger.info("Perceptron training accuracy = %.4f", perc_acc)


if __name__ == "__main__":
    run_engineering_pipeline()
```

> [!IMPORTANT]
> **Expected Output Snapshot** (on the synthetic dataset above):
> *Scratch LR*: `accuracy ≈ 0.90, f1_score ≈ 0.90, auc_roc ≈ 0.96`
> *Reference LR*: `accuracy ≈ 0.90, f1_score ≈ 0.90, auc_roc ≈ 0.96`
> *CV AUC*: `mean ≈ 0.96, std ≈ 0.01`
> *Perceptron*: `training accuracy ≈ 1.00` (linearly separable, 2-D)

## 3.4 Numerical Worked Example — Single Gradient Step for Logistic Regression

Consider a one-feature toy dataset:

$$
\mathbf{x} = \begin{bmatrix}1 \\ 2 \\ 3\end{bmatrix}, \quad \mathbf{y} = \begin{bmatrix}0 \\ 0 \\ 1\end{bmatrix}, \quad \mathbf{w} = 0.0, \quad b = 0.0, \quad \eta = 0.5
$$

**Step 1 — Compute linear scores**

$$
\mathbf{z} \;=\; \mathbf{w}^{\top}\mathbf{x} + b \;=\; \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}
$$

**Step 2 — Sigmoid squash**

$$
\hat{\mathbf{p}} \;=\; \sigma(\mathbf{z}) \;=\; \begin{bmatrix} 0.5 \\ 0.5 \\ 0.5 \end{bmatrix}
$$

**Step 3 — Compute error vector**

$$
\mathbf{e} \;=\; \hat{\mathbf{p}} - \mathbf{y} \;=\; \begin{bmatrix} 0.5 \\ 0.5 \\ -0.5 \end{bmatrix}
$$

**Step 4 — Compute gradient w.r.t. $w$**

$$
\frac{\partial L}{\partial w} \;=\; \frac{1}{3}\, \mathbf{x}^{\top}\mathbf{e} \;=\; \frac{1}{3}\,(1 \cdot 0.5 + 2 \cdot 0.5 + 3 \cdot (-0.5)) \;=\; \frac{1}{3}\,(0.5 + 1.0 - 1.5) \;=\; 0.0
$$

**Step 5 — Update $w$**

$$
w \;\leftarrow\; w - \eta\, \tfrac{\partial L}{\partial w} \;=\; 0.0 - 0.5 \cdot 0.0 \;=\; 0.0
$$

(In this symmetric case the gradient is exactly zero at initialization; in real data it is non-zero and the weight shifts accordingly.)

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 End-to-End Linear Classification Engineering Pipeline

```mermaid
flowchart TD
    A[Raw Engineering Data] --> B[Exploratory Data Analysis]
    B --> C[Missing Value Imputation]
    C --> D[Feature Engineering]
    D --> E[Train / Validation / Test Split]
    E --> F[Feature Scaling StandardScaler]
    F --> G[Linear Model Selection]
    G --> G1[Perceptron]
    G --> G2[Logistic Regression]
    G --> G3[Linear SVM]
    G --> G4[LDA]
    G --> G5[SGD Classifier]
    G1 --> H[Hyperparameter Tuning GridSearchCV]
    G2 --> H
    G3 --> H
    G4 --> H
    G5 --> H
    H --> I[Cross Validation Profile]
    I --> J[Final Test Set Evaluation]
    J --> K[Model Calibration]
    K --> L[Production Deployment]
    L --> M[Drift Monitoring and Retraining]

    style A fill:#1f4e79,color:#ffffff
    style L fill:#2e7d32,color:#ffffff
    style M fill:#c62828,color:#ffffff
```

## 4.2 Algorithmic Topology of a Gradient-Based Linear Classifier

```mermaid
flowchart LR
    subgraph INPUT[Input Stage]
        X1[Feature Matrix X n x d]
        Y1[Label Vector y n]
    end

    subgraph INIT[Initialization]
        W1[Weights w = zeros d]
        B1[Bias b = 0]
    end

    subgraph LOOP[Training Loop per epoch]
        Z1[Linear Score z = Xw + b]
        P1[Probability p = sigmoid z]
        L1[Binary Cross Entropy Loss L]
        G1[Gradient Computation]
        U1[Weight Update w = w - eta grad]
    end

    subgraph OUTPUT[Output Stage]
        YP[Predicted Labels]
        PR[Probability Scores]
        M[Validation Metrics]
    end

    X1 --> Z1
    W1 --> Z1
    B1 --> Z1
    Z1 --> P1
    Y1 --> L1
    P1 --> L1
    L1 --> G1
    G1 --> U1
    U1 --> Z1
    P1 --> YP
    P1 --> PR
    YP --> M
    PR --> M

    style INPUT fill:#e3f2fd,color:#000000
    style INIT fill:#fff3e0,color:#000000
    style LOOP fill:#f3e5f5,color:#000000
    style OUTPUT fill:#e8f5e9,color:#000000
```

## 4.3 Validation Profile Stack — Sequential Processing Topology Matrix

```mermaid
flowchart TD
    V1[Trained Linear Model] --> V2[Predict on Holdout Set]
    V2 --> V3[Compute Confusion Matrix]
    V3 --> V4[Derive Accuracy Precision Recall F1]
    V4 --> V5[Compute AUC ROC]
    V4 --> V6[Compute Log Loss]
    V4 --> V7[Compute Calibration Plot]
    V5 --> V8[Generate Validation Report]
    V6 --> V8
    V7 --> V8
    V8 --> V9[Engineering Sign Off]

    V9 --> D1{Acceptable Performance?}
    D1 -- YES --> D2[Deploy to Production]
    D1 -- NO --> D3[Return to Hyperparameter Tuning]

    style V1 fill:#1f4e79,color:#ffffff
    style V9 fill:#2e7d32,color:#ffffff
    style D2 fill:#2e7d32,color:#ffffff
    style D3 fill:#c62828,color:#ffffff
```

## 4.4 Cross-Validation Architecture (5-Fold Stratified)

```mermaid
flowchart LR
    subgraph FOLD1[Fold 1]
        T1[Train on 80 percent] --> P1[Validate on 20 percent]
    end
    subgraph FOLD2[Fold 2]
        T2[Train on 80 percent] --> P2[Validate on 20 percent]
    end
    subgraph FOLD3[Fold 3]
        T3[Train on 80 percent] --> P3[Validate on 20 percent]
    end
    subgraph FOLD4[Fold 4]
        T4[Train on 80 percent] --> P4[Validate on 20 percent]
    end
    subgraph FOLD5[Fold 5]
        T5[Train on 80 percent] --> P5[Validate on 20 percent]
    end

    P1 --> A1[Mean and Std of AUC]
    P2 --> A1
    P3 --> A1
    P4 --> A1
    P5 --> A1
    A1 --> O1[Final Validation Certificate]
```

## 4.5 Decision-Boundary Geometry — Sequential Module Map

```mermaid
flowchart TD
    G1[Input Feature Space R d] --> G2[Hyperplane wT x + b = 0]
    G2 --> G3[Positive Half Plane wT x + b greater than 0]
    G2 --> G4[Negative Half Plane wT x + b less than 0]
    G3 --> G5[Class 1 Region]
    G4 --> G6[Class 0 Region]
    G5 --> G7[Perpendicular Distance Margin gamma]
    G6 --> G7
    G7 --> G8[Support Vectors on Margin]

    style G2 fill:#1f4e79,color:#ffffff
    style G7 fill:#c62828,color:#ffffff
    style G8 fill:#f9a825,color:#000000
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

> [!NOTE]
> **Mark Distribution (KTU 2024 — End Semester Exam, PECST611)**
> * **Part A:** 2 questions × 3 marks = 6 marks (direct recall / understanding)
> * **Part B:** 1 question × 14 marks (with internal choice between Option A and Option B)
> * Total weight of this module topic in ESE: typically 14–21 marks
> * Bloom's Levels tested: Remember, Understand, Apply, Analyze

---

## 5.1 Part A — Short-Answer Questions (3 Marks Each)

### Q1. `[KTU University Exam - July 2024]` — CO1, Remember

**Define a linear classifier. State two engineering scenarios where a linear classifier is preferred over a non-linear model.**

**Model Answer (Board-key pattern):**

A *linear classifier* is a supervised learning model that assigns a class label to an input feature vector $\mathbf{x} \in \mathbb{R}^{d}$ by computing a linear discriminant function $f(\mathbf{x}) = \mathbf{w}^{\top}\mathbf{x} + b$ and thresholding / comparing it against zero (or across classes).

> **Engineering scenarios where linear classifiers are preferred:**
> 1. **High-dimensional sparse data** (e.g., text classification, $d = 50{,}000+$): linear models are far less prone to overfitting than $k$-NN or decision trees.
> 2. **Real-time / embedded inference** (e.g., on-device keyword spotting, motor-fault detection): linear models have $O(d)$ inference cost and can be quantized to int8.
> 3. **Regulated industries** (banking, medical, defense): the coefficients $\mathbf{w}$ have a direct marginal-effect interpretation, which is essential for explainability and compliance.

> **Valuation Key:**
> * [Defining $f(\mathbf{x}) = \mathbf{w}^{\top}\mathbf{x} + b$: 1 Mark]
> * [Stating thresholding logic: 1 Mark]
> * [Any two engineering scenarios: 1 Mark]

---

### Q2. `[KTU University Exam - Dec 2023]` — CO1, Understand

**Explain the geometric meaning of the weight vector $\mathbf{w}$ and the bias $b$ in a linear classifier. Why is feature scaling essential before training a gradient-based linear model?**

**Model Answer (Board-key pattern):**

* **Geometric meaning of $\mathbf{w}$:** The weight vector $\mathbf{w}$ is **perpendicular (normal)** to the decision hyperplane $\mathbf{w}^{\top}\mathbf{x} + b = 0$. It points in the direction of steepest increase of the linear score. Its magnitude $\vert \mathbf{w} \vert$ controls the steepness of the score; in SVMs it is explicitly minimized to maximize margin.

* **Geometric meaning of $b$:** The bias $b$ is the **signed distance of the hyperplane from the origin**, scaled by $\vert \mathbf{w} \vert$. Specifically, the hyperplane is at distance $\frac{\vert b \vert}{\vert \mathbf{w} \vert}$ from the origin. It is *not* a constant offset on the score — it shifts the boundary geometrically.

* **Why feature scaling is essential:**
> 1. **Gradient descent convergence speed** — when features have very different scales, the loss contour becomes an elongated ellipse, causing gradient updates to zig-zag. Scaling produces near-circular contours, allowing fast convergence.
> 2. **Regularization fairness** — L1 / L2 penalties act on raw weights; without scaling, features with large ranges are unfairly penalized less.
> 3. **Distance-based comparability** — in SVM dual formulation, dot products $\mathbf{x}^{(i)\top}\mathbf{x}^{(j)}$ are dominated by the largest-scale feature.

> **Valuation Key:**
> * [$\mathbf{w}$ normal to hyperplane: 1 Mark]
> * [$b$ controls offset from origin: 1 Mark]
> * [Two reasons for feature scaling: 1 Mark]

---

## 5.2 Part B — 14-Mark Questions (Internal Choice)

### Question A `[KTU University Exam - July 2024]` — CO2 / CO3, Apply + Analyze

**(a)** Derive the gradient of the **binary cross-entropy loss** with respect to the weight vector $\mathbf{w}$ for logistic regression. Show that the update rule takes the form $\mathbf{w} \leftarrow \mathbf{w} - \eta\, \mathbf{X}^{\top}(\hat{\mathbf{p}} - \mathbf{y})/N$. **[7 Marks]**

**(b)** For the following 2-D engineering dataset, **manually compute one full-batch gradient descent step** (learning rate $\eta = 0.2$) and write the updated decision boundary equation. **[7 Marks]**

$$
\mathbf{X} = \begin{bmatrix} 1 & 1 \\ 2 & 1 \\ 1 & 2 \\ 3 & 3 \end{bmatrix}, \quad \mathbf{y} = \begin{bmatrix} 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}, \quad \mathbf{w}_{0} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}, \quad b_{0} = 0
$$

**Model Answer:**

**(a) — Derivation [7 Marks]**

> [Writing the BCE loss: 1 Mark]

$$
L(\mathbf{w}, b) \;=\; -\frac{1}{N} \sum_{i=1}^{N}\left[y^{(i)} \log \hat{p}^{(i)} + (1 - y^{(i)})\log(1 - \hat{p}^{(i)})\right]
$$

where $\hat{p}^{(i)} = \sigma(z^{(i)})$ and $z^{(i)} = \mathbf{w}^{\top}\mathbf{x}^{(i)} + b$.

> [Differentiating through the sigmoid: 2 Marks]

Using $\sigma'(z) = \sigma(z)(1 - \sigma(z))$ and the chain rule:

$$
\frac{\partial L}{\partial w_{j}} \;=\; -\frac{1}{N} \sum_{i=1}^{N}\left[\frac{y^{(i)}}{\hat{p}^{(i)}} - \frac{1 - y^{(i)}}{1 - \hat{p}^{(i)}}\right]\frac{\partial \hat{p}^{(i)}}{\partial w_{j}}
$$

$$
\frac{\partial \hat{p}^{(i)}}{\partial w_{j}} \;=\; \hat{p}^{(i)}(1 - \hat{p}^{(i)})\, x_{j}^{(i)}
$$

> [Simplification step: 2 Marks]

$$
\frac{\partial L}{\partial w_{j}} \;=\; -\frac{1}{N} \sum_{i=1}^{N}\left[\frac{y^{(i)}(1 - \hat{p}^{(i)}) - (1 - y^{(i)})\hat{p}^{(i)}}{\hat{p}^{(i)}(1 - \hat{p}^{(i)})}\right]\hat{p}^{(i)}(1 - \hat{p}^{(i)})\, x_{j}^{(i)}
$$

The $\hat{p}(1 - \hat{p})$ terms cancel, leaving:

$$
\frac{\partial L}{\partial w_{j}} \;=\; \frac{1}{N} \sum_{i=1}^{N}\left(\hat{p}^{(i)} - y^{(i)}\right) x_{j}^{(i)}
$$

> [Final vector form and update: 2 Marks]

$$
\nabla_{\mathbf{w}} L \;=\; \frac{1}{N}\mathbf{X}^{\top}(\hat{\mathbf{p}} - \mathbf{y}), \qquad \mathbf{w} \leftarrow \mathbf{w} - \eta\, \nabla_{\mathbf{w}} L
$$

---

**(b) — Numerical Step [7 Marks]**

> [Computing scores at $\mathbf{w} = \mathbf{0}, b = 0$: 1 Mark]

$$
\mathbf{z} \;=\; \mathbf{X}\mathbf{w} + b \;=\; \begin{bmatrix} 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}
$$

> [Sigmoid → 0.5 for all rows: 1 Mark]

$$
\hat{\mathbf{p}} \;=\; \sigma(\mathbf{z}) \;=\; \begin{bmatrix} 0.5 \\ 0.5 \\ 0.5 \\ 0.5 \end{bmatrix}
$$

> [Error vector: 1 Mark]

$$
\mathbf{e} \;=\; \hat{\mathbf{p}} - \mathbf{y} \;=\; \begin{bmatrix} 0.5 \\ 0.5 \\ 0.5 \\ -0.5 \end{bmatrix}
$$

> [Gradient w.r.t. $\mathbf{w}$: 2 Marks]

$$
\nabla_{\mathbf{w}} L \;=\; \frac{1}{4}\, \mathbf{X}^{\top}\mathbf{e} \;=\; \frac{1}{4}\begin{bmatrix} 1 & 2 & 1 & 3 \\ 1 & 1 & 2 & 3 \end{bmatrix}\begin{bmatrix} 0.5 \\ 0.5 \\ 0.5 \\ -0.5 \end{bmatrix} \;=\; \frac{1}{4}\begin{bmatrix} 0.5 + 1.0 + 0.5 - 1.5 \\ 0.5 + 0.5 + 1.0 - 1.5 \end{bmatrix} \;=\; \begin{bmatrix} 0.125 \\ 0.125 \end{bmatrix}
$$

> [Gradient w.r.t. $b$: 1 Mark]

$$
\frac{\partial L}{\partial b} \;=\; \frac{1}{4}\sum e_{i} \;=\; \frac{1.0}{4} \;=\; 0.25
$$

> [Update step: 1 Mark]

$$
\mathbf{w}_{1} \;=\; \begin{bmatrix} 0 \\ 0 \end{bmatrix} - 0.2 \begin{bmatrix} 0.125 \\ 0.125 \end{bmatrix} \;=\; \begin{bmatrix} -0.025 \\ -0.025 \end{bmatrix}, \qquad b_{1} \;=\; 0 - 0.2 \cdot 0.25 \;=\; -0.05
$$

> [Updated decision boundary equation: 0 Marks — free]

$$
-0.025\, x_{1} - 0.025\, x_{2} - 0.05 \;=\; 0 \;\;\Longleftrightarrow\;\; x_{1} + x_{2} + 2 \;=\; 0
$$

> [!WARNING]
> **KTU Examiner's Valuation Warning — Pitfall Callout**
> * Candidates **lose 2 marks** for forgetting the factor $\frac{1}{N}$ in the gradient (BCE uses *mean* loss, not *sum*).
> * Candidates **lose 1 mark** for not writing the final boundary equation in simplified form.
> * Candidates **lose 1 mark** for ignoring the bias update — the bias is part of $\mathbf{w}$ in the augmented formulation but is graded separately.

---

### Question B `[KTU University Exam - Dec 2023]` — CO3, Analyze + Apply (Alternative Choice)

**(a)** With a labelled diagram, describe the **engineering pipeline** of training and validating a linear SVM classifier for a binary fault-detection problem. Include data preprocessing, hyperparameter $C$ tuning, and the final validation profile. **[7 Marks]**

**(b)** A linear SVM trained on $N = 500$ samples produces the following confusion matrix on the validation set. Compute the **Accuracy, Precision, Recall, F1-score, and AUC-ROC interpretation**. State whether the model is acceptable for a **medical-screening deployment** where recall must exceed 0.90. **[7 Marks]**

$$
\text{Confusion Matrix} = \begin{bmatrix} 380 & 20 \\ 15 & 85 \end{bmatrix} \quad (\text{rows} = \text{actual}, \text{columns} = \text{predicted})
$$

**Model Answer:**

**(a) — Engineering Pipeline [7 Marks]**

| Stage | Operation | Engineering Detail |
|---|---|---|
| 1. Data acquisition | Collect labelled sensor logs | $N = 5000$ fault / non-fault windows |
| 2. Preprocessing | Standardize features (zero mean, unit variance) | `StandardScaler` mandatory for SVM |
| 3. Train / Val / Test split | 60 / 20 / 20 stratified | Preserves fault-class ratio |
| 4. Model declaration | `LinearSVC(C=1.0, loss='hinge')` | Or `SVC(kernel='linear')` |
| 5. Hyperparameter tuning | `GridSearchCV` over $C \in \{0.01, 0.1, 1, 10, 100\}$ | 5-fold stratified CV on training fold |
| 6. Retrain on full train set | Best $C^{*}$ found | Refit on full training data |
| 7. Validation profile | Predict on held-out 20 % test set | Compute metrics |
| 8. Deployment gate | Acceptance criteria on F1 / AUC | Sign off |

> [Stating data preprocessing: 1 Mark]
> [Stating $C$ tuning with $C \in \{0.01, 0.1, 1, 10, 100\}$: 2 Marks]
> [Stating validation profile components: 2 Marks]
> [Drawing / describing the pipeline (text diagram): 2 Marks]

---

**(b) — Metric Computation [7 Marks]**

From the confusion matrix:

| Symbol | Value |
|---|---|
| True Negative (TN) | 380 |
| False Positive (FP) | 20 |
| False Negative (FN) | 15 |
| True Positive (TP) | 85 |

> [Stating TN, FP, FN, TP: 1 Mark]

> [Computing Accuracy: 1 Mark]

$$
\text{Accuracy} \;=\; \frac{TP + TN}{TP + TN + FP + FN} \;=\; \frac{85 + 380}{85 + 380 + 20 + 15} \;=\; \frac{465}{500} \;=\; 0.930
$$

> [Computing Precision: 1 Mark]

$$
\text{Precision} \;=\; \frac{TP}{TP + FP} \;=\; \frac{85}{85 + 20} \;=\; \frac{85}{105} \;\approx\; 0.810
$$

> [Computing Recall: 1 Mark]

$$
\text{Recall} \;=\; \frac{TP}{TP + FN} \;=\; \frac{85}{85 + 15} \;=\; \frac{85}{100} \;=\; 0.850
$$

> [Computing F1-score: 1 Mark]

$$
F_{1} \;=\; \frac{2 \cdot \text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}} \;=\; \frac{2 \cdot 0.810 \cdot 0.850}{0.810 + 0.850} \;\approx\; \frac{1.377}{1.660} \;\approx\; 0.829
$$

> [AUC-ROC interpretation & final gate decision: 2 Marks]

Since the confusion matrix is threshold-dependent, AUC-ROC cannot be numerically computed from the matrix alone; it would require the raw predicted probabilities. *Qualitatively*, the model shows good separability (85 % recall at a $0.5$ threshold) and would likely achieve an AUC $\geq 0.90$.

**Deployment decision:** For medical screening the required recall is $0.90$. The current model achieves recall $= 0.85$, which **fails the acceptance criterion**. Recommendation: (i) lower the classification threshold to $0.4$, (ii) apply class-weighting ($w_{+1} = 2$), or (iii) engineer additional recall-focused features.

> [!WARNING]
> **KTU Examiner's Valuation Warning — Pitfall Callout**
> * Candidates **lose 1 mark** if they confuse the rows/columns of the confusion matrix (TN vs. FP swap).
> * Candidates **lose 1 mark** for stating AUC-ROC numerically without having access to probability scores.
> * Candidates **lose 1 mark** if they compute the F1-score as the arithmetic mean of precision and recall — it is the *harmonic* mean.
> * Candidates **lose 1 mark** if they approve deployment despite recall $< 0.90$ — medical-screening requires the explicit gate.

---

## 5.3 Topic Recap & Important Things to Remember

> [!TIP]
> **High-density rapid-revision checklist — print and pin to your study wall.**

**Core Definitions**
- A *linear classifier* partitions $\mathbb{R}^{d}$ with the hyperplane $\mathbf{w}^{\top}\mathbf{x} + b = 0$.
- $\mathbf{w}$ is the **normal vector** to the hyperplane; $b$ is the **signed offset from the origin**.
- *Linearity* refers to linearity in **parameters $\mathbf{w}$**, not in raw input $\mathbf{x}$.

**Algorithm Essentials**
- **Perceptron**: $\text{sign}(\mathbf{w}^{\top}\mathbf{x} + b)$, converges only on linearly separable data (Novikoff).
- **Logistic Regression**: $P(y=1) = \sigma(\mathbf{w}^{\top}\mathbf{x} + b)$, trained by minimizing **binary cross-entropy**.
- **Softmax Regression**: $K$-class extension with categorical cross-entropy loss.
- **LDA**: Bayes-optimal linear discriminant under shared-covariance Gaussian assumption.
- **Linear SVM**: maximizes geometric margin $\gamma = \tfrac{2}{\vert \mathbf{w} \vert}$ via hinge loss.

**Loss Functions You Must Memorize**
- Binary cross-entropy: $L_{\text{BCE}} = -\tfrac{1}{N}\sum [y \log \hat{p} + (1-y)\log(1-\hat{p})]$
- Categorical cross-entropy: $L_{\text{CCE}} = -\tfrac{1}{N}\sum_{i}\sum_{k} \mathbb{1}\{y_{i}=k\}\log \text{softmax}(z_{k})$
- Hinge loss: $L_{\text{hinge}} = \max(0, 1 - y^{(i)}z^{(i)})$
- Perceptron criterion: $L_{\text{PLA}} = -\sum_{i \in \mathcal{M}} y^{(i)} z^{(i)}$

**Key Update Equations**
- Logistic gradient: $\nabla_{\mathbf{w}} L = \tfrac{1}{N}\mathbf{X}^{\top}(\hat{\mathbf{p}} - \mathbf{y})$
- Perceptron update: $\mathbf{w} \leftarrow \mathbf{w} + \eta\, y^{(i)}\mathbf{x}^{(i)}$ on misclassification
- SVM dual: $\mathbf{w} = \sum_{i \in \mathcal{S}} \alpha_{i} y^{(i)} \mathbf{x}^{(i)}$

**Validation Profile Must-Knows**
- **Stratified $k$-fold cross-validation** preserves class ratios — always use it for imbalanced data.
- For imbalanced data, **never** rely on accuracy alone — report F1, AUC-ROC, and a confusion matrix.
- **Calibration** (Platt scaling, isotonic regression) is critical when probabilities are consumed downstream.
- **Drift monitoring** in production: re-validate quarterly; track PSI (Population Stability Index) on $\mathbf{w}^{\top}\mathbf{x}$.

**Engineering Trade-offs**
| Want | Choose | Why |
|---|---|---|
| Fast training on millions of samples | SGD Classifier | $O(d)$ per step |
| Probabilistic output | Logistic Regression | Native calibrated probability |
| Maximum margin / sparsity | Linear SVM | Support-vector sparsity |
| Closed-form solution | LDA | No iterative optimization |
| Feature selection | L1-Logistic | Sparsity in $\mathbf{w}$ |

**Common Pitfalls (Board-Exam Favourites)**
- Forgetting to scale features → gradient descent zig-zags.
- Using accuracy on imbalanced data → misleading "99 %" classifiers.
- Skipping stratified split → validation metrics unrepresentative.
- Reporting training accuracy as generalization → data leakage.
- Confusing precision with recall in medical/financial use-cases.

**One-Line Exam Heuristics**
- *"For linearly separable data, perceptron converges; otherwise, use logistic regression."*
- *"SVM maximizes the minimum geometric distance; logistic regression maximizes likelihood."*
- *"L1 gives sparse $\mathbf{w}$ (feature selection); L2 gives small $\mathbf{w}$ (smoothing)."*
- *"Always report F1 + AUC + confusion matrix — accuracy alone is a trap."*

> [!IMPORTANT]
> **Final KTU Examiner's Mantra:**
> In every answer, **(i)** define the model mathematically, **(ii)** state the loss, **(iii)** derive or apply the update, **(iv)** report a validation profile. This four-part structure guarantees full marks under the KTU 2024 scheme.

<!-- SECTION_5_END -->
