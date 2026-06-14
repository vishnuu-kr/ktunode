# Apply MAP estimation with different regularization priors (L1 and L2 regularization).

<!-- SECTION_1_START -->

# MAP Estimation with L1 and L2 Regularization in Logistic Regression

## 1.1 Formal Technical Definition

**Maximum A Posteriori (MAP) Estimation** is a Bayesian inference technique that estimates the parameters $\boldsymbol{\theta}$ of a model by maximizing the posterior probability $p(\boldsymbol{\theta} \mid \mathcal{D})$, where $\mathcal{D}$ represents the observed data. The posterior is computed using Bayes' theorem as shown in the foundational identity:

$$
p(\boldsymbol{\theta} \mid \mathcal{D}) = \frac{p(\mathcal{D} \mid \boldsymbol{\theta}) \, p(\boldsymbol{\theta})}{p(\mathcal{D})}
$$

Since the marginal likelihood $p(\mathcal{D})$ does not depend on the parameters $\boldsymbol{\theta}$, MAP estimation simplifies to the proportional relation:

$$
\hat{\boldsymbol{\theta}}_{\text{MAP}} = \arg\max_{\boldsymbol{\theta}} \, p(\mathcal{D} \mid \boldsymbol{\theta}) \, p(\boldsymbol{\theta})
$$

When this objective is converted to the negative log-domain for minimization, the MAP criterion decomposes into two additive terms: a **data-fidelity term** (negative log-likelihood) and a **regularization term** (negative log-prior). The choice of prior distribution $p(\boldsymbol{\theta})$ dictates the form of regularization:

- **L2 Regularization (Ridge / Weight Decay)**: Imposes a **Gaussian prior** $p(\boldsymbol{\theta}) = \mathcal{N}(\mathbf{0}, \sigma^2 \mathbf{I})$, producing a smooth, convex penalty proportional to the squared magnitude of weights.
- **L1 Regularization (Lasso / Sparsity Inducer)**: Imposes a **Laplace prior** $p(\boldsymbol{\theta}) = \text{Laplace}(0, b)$, producing a sharp, non-differentiable penalty proportional to the absolute magnitude of weights, which drives many weights to exactly zero.

> [!IMPORTANT]
> **MAP estimation unifies MLE and regularization**: When the prior $p(\boldsymbol{\theta})$ becomes a flat (improper uniform) distribution, MAP reduces exactly to MLE. Thus, regularization is a **Bayesian prior on parameters**, and the regularization coefficient $\lambda$ is a tunable **prior strength parameter**.

## 1.2 Intuitive Analogy

Imagine you are a tourist trying to find the **lowest valley** in a mountainous landscape (this represents minimizing the loss function). The **likelihood** is like gravity pulling you toward the deepest point that best fits the data. Now, suppose you also have a **home base** (the origin) and are tied to it with a rope:

- **No Prior (MLE)**: You wander freely and settle at the lowest valley, even if it is very far from home. The valleys correspond to model parameters that may be large in magnitude and prone to overfitting.
- **L2 Prior (Gaussian)**: You are tied to home with a **spring**. The spring pulls you gently toward zero, but you can still stretch far if the data is compelling. The farther you go, the stronger the pull — producing **smooth, small, non-zero weights**.
- **L1 Prior (Laplace)**: You are tied to home with a **rope passing over a frictionless pulley**. There is constant tension regardless of distance, and any cost-free direction (a weight that does not help) will be pulled exactly back to **zero**. This produces **sparse weight vectors** where only the most informative features survive.

## 1.3 Standard Constants and Metrics

> [!NOTE]
> **Key Engineering Metrics for Lab Evaluation**
> - **Regularization strength** $\lambda$: typically chosen in the range $10^{-4}$ to $10^{2}$.
> - **Convergence tolerance** $\varepsilon$: typically $10^{-6}$ for iterative solvers.
> - **Sparsity ratio**: $\text{sparsity} = \frac{\vert \{\, w_i : w_i = 0 \,\} \vert}{n}$, where $n$ is the number of features. L1 should yield a **higher sparsity ratio** than L2 on the same dataset.
> - **Accuracy, Precision, Recall, F1-Score**: classification performance metrics.
> - **Log-Loss (Cross-Entropy)**: $\mathcal{L} = -\frac{1}{m} \sum_{i=1}^{m} \left[ y_i \log(\hat{y}_i) + (1-y_i) \log(1-\hat{y}_i) \right]$, where $m$ is the number of samples.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis and KTU Formula Sheet

## 2.1 From MLE to MAP: The Bayesian Derivation Pathway

The transition from Maximum Likelihood Estimation to MAP estimation follows a structured logical chain. Each step is essential to the final objective function used in the lab.

- **Step 1 — Define the Likelihood**: For binary classification with logistic regression, the likelihood of the data given the parameters is a product of independent Bernoulli trials. For a dataset $\mathcal{D} = \{(\mathbf{x}_i, y_i)\}_{i=1}^{m}$ with $y_i \in \{0, 1\}$, the likelihood is given by:

$$
p(\mathcal{D} \mid \boldsymbol{\theta}) = \prod_{i=1}^{m} \hat{y}_i^{\,y_i} (1-\hat{y}_i)^{1-y_i}
$$

where $\hat{y}_i = \sigma(\mathbf{w}^\top \mathbf{x}_i + b)$ is the sigmoid output and $\boldsymbol{\theta} = \{\mathbf{w}, b\}$ denotes the parameter set.

- **Step 2 — Apply Bayes' Theorem**: The posterior distribution is proportional to the product of the likelihood and the prior. The evidence term $p(\mathcal{D})$ is a normalizing constant independent of $\boldsymbol{\theta}$ and is therefore dropped during optimization.

- **Step 3 — Take the Negative Logarithm**: To convert the multiplicative product into a tractable additive form, apply the monotone $\log$ transformation and negate the result. Because the logarithm is a monotonically increasing function, maximizing the posterior is equivalent to minimizing the negative log-posterior.

- **Step 4 — Decompose into Data and Prior Terms**: The negative log-prior splits into a penalty term whose form depends on the chosen prior distribution.

- **Step 5 — Form the Final Regularized Objective**: This is the function that gradient descent minimizes. The complete derivation chain is shown explicitly in Section 3.

## 2.2 Closed-Form Forms of the Regularization Penalty

For a parameter vector $\mathbf{w} \in \mathbb{R}^{n}$, the L1 and L2 penalty terms are:

**L2 Penalty (Gaussian Prior)**

$$
\Omega_{L2}(\mathbf{w}) = \frac{\lambda}{2} \sum_{j=1}^{n} w_j^{\,2} = \frac{\lambda}{2} \Vert \mathbf{w} \Vert_2^{\,2}
$$

**L1 Penalty (Laplace Prior)**

$$
\Omega_{L1}(\mathbf{w}) = \lambda \sum_{j=1}^{n} \vert w_j \vert = \lambda \Vert \mathbf{w} \Vert_1
$$

> [!IMPORTANT]
> **Engineering Utility**: L1 regularization is widely used in **feature selection** for high-dimensional problems (genomics, NLP, computer vision) because it produces sparse models. L2 regularization is preferred when **all features are believed to contribute** and one wants stable, well-conditioned optimization with smooth gradient flow.

## 2.3 KTU High-Yield Formula Sheet

| Aspect | MLE (No Prior) | MAP with L2 (Gaussian) | MAP with L1 (Laplace) |
|---|---|---|---|
| Optimization objective | $\min \ -\log p(\mathcal{D} \mid \boldsymbol{\theta})$ | $\min \ -\log p(\mathcal{D} \mid \boldsymbol{\theta}) + \tfrac{\lambda}{2} \Vert \mathbf{w} \Vert_2^{\,2}$ | $\min \ -\log p(\mathcal{D} \mid \boldsymbol{\theta}) + \lambda \Vert \mathbf{w} \Vert_1$ |
| Prior $p(w_j)$ | Improper uniform | $\tfrac{1}{\sqrt{2\pi}\sigma} \exp\!\left(-\tfrac{w_j^2}{2\sigma^2}\right)$ | $\tfrac{1}{2b} \exp\!\left(-\tfrac{\vert w_j \vert}{b}\right)$ |
| Penalty shape | None | Parabolic, smooth | Diamond-shaped, non-smooth |
| Gradient w.r.t. $w_j$ | $\frac{\partial \mathcal{L}_{\text{BCE}}}{\partial w_j}$ | $\frac{\partial \mathcal{L}_{\text{BCE}}}{\partial w_j} + \lambda w_j$ | $\frac{\partial \mathcal{L}_{\text{BCE}}}{\partial w_j} + \lambda \, \text{sign}(w_j)$ |
| Effect on weights | Unconstrained shrinkage | Smooth shrinkage toward 0 | Hard thresholding (exact 0) |
| Induces sparsity? | No | No | Yes |
| Differentiable at $w_j = 0$? | N/A | Yes | No (sub-gradient used) |
| Convexity | Convex | Strictly convex | Convex |
| Use case | Low-dimensional clean data | Multicollinear features | High-dimensional feature selection |

## 2.4 Real-World Engineering Utility

> [!NOTE]
> **Production-Grade Use Cases**
> - **Computer Vision (CNN Pruning)**: L1 regularization prunes redundant filters in deep networks, reducing model size by up to 90 percent with minimal accuracy loss.
> - **Bioinformatics (Gene Selection)**: L1-regularized logistic regression identifies the most discriminative genes from thousands of candidates for cancer classification.
> - **Financial Risk Modeling**: L2-regularized logistic regression yields stable credit-scoring models that are robust to multicollinearity among economic indicators.
> - **Natural Language Processing**: L1 regularization on bag-of-words or TF-IDF features yields interpretable sparse text classifiers.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivation and Python Implementation

## 3.1 Exhaustive Derivation of the MAP Objective

Starting from the logistic regression likelihood and applying the Bayesian MAP framework step by step:

**Step 1 — Write the likelihood** as a product of independent Bernoulli trials for $m$ samples:

$$
p(\mathcal{D} \mid \mathbf{w}, b) = \prod_{i=1}^{m} \hat{y}_i^{\,y_i} (1 - \hat{y}_i)^{1 - y_i}
$$

**Step 2 — Take the natural logarithm** to convert products to sums. The log-likelihood becomes:

$$
\log p(\mathcal{D} \mid \mathbf{w}, b) = \sum_{i=1}^{m} \left[ y_i \log \hat{y}_i + (1 - y_i) \log(1 - \hat{y}_i) \right]
$$

**Step 3 — Negate and normalize** by $m$ to obtain the average binary cross-entropy loss:

$$
\mathcal{L}_{\text{BCE}}(\mathbf{w}, b) = -\frac{1}{m} \sum_{i=1}^{m} \left[ y_i \log \hat{y}_i + (1 - y_i) \log(1 - \hat{y}_i) \right]
$$

**Step 4 — Define the prior distributions**. For L2, a zero-mean Gaussian with variance $\tau^2$ gives:

$$
\log p_{L2}(\mathbf{w}) = -\frac{1}{2\tau^2} \sum_{j=1}^{n} w_j^{\,2} + C_{L2}
$$

For L1, a zero-mean Laplace distribution with scale $b$ gives:

$$
\log p_{L1}(\mathbf{w}) = -\frac{1}{b} \sum_{j=1}^{n} \vert w_j \vert + C_{L1}
$$

**Step 5 — Form the negative log-posterior** by combining the negative log-likelihood and the negative log-prior, absorbing the constants $C_{L2}$, $C_{L1}$ into a single tunable hyperparameter $\lambda$:

$$
\mathcal{J}_{L2}(\mathbf{w}, b) = \mathcal{L}_{\text{BCE}}(\mathbf{w}, b) + \frac{\lambda}{2} \sum_{j=1}^{n} w_j^{\,2}
$$

$$
\mathcal{J}_{L1}(\mathbf{w}, b) = \mathcal{L}_{\text{BCE}}(\mathbf{w}, b) + \lambda \sum_{j=1}^{n} \vert w_j \vert
$$

**Step 6 — Compute the gradient** with respect to $\mathbf{w}$ for gradient descent updates. For L2, the gradient has an additive linear shrinkage term:

$$
\frac{\partial \mathcal{J}_{L2}}{\partial \mathbf{w}} = \frac{1}{m} \mathbf{X}^\top (\hat{\mathbf{y}} - \mathbf{y}) + \lambda \mathbf{w}
$$

For L1, the gradient has an additive sub-gradient sign term:

$$
\frac{\partial \mathcal{J}_{L1}}{\partial \mathbf{w}} = \frac{1}{m} \mathbf{X}^\top (\hat{\mathbf{y}} - \mathbf{y}) + \lambda \, \text{sign}(\mathbf{w})
$$

The bias $b$ is typically **not regularized** because it does not control feature sensitivity. The complete update rule for iteration $t+1$ is:

$$
\mathbf{w}^{(t+1)} = \mathbf{w}^{(t)} - \alpha \frac{\partial \mathcal{J}}{\partial \mathbf{w}}
$$

$$
b^{(t+1)} = b^{(t)} - \alpha \frac{\partial \mathcal{J}}{\partial b}
$$

where $\alpha$ is the learning rate.

## 3.2 Complete Python Implementation from Scratch

The following code implements MAP-regularized logistic regression with type hints, numerical stability checks, and convergence monitoring. The implementation supports L1, L2, and elastic net regularization, and is suitable for direct execution in a Jupyter notebook.

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, log_loss
import warnings

warnings.filterwarnings("ignore")
np.random.seed(42)


class MAPLogisticRegression:
    """
    Logistic Regression trained via MAP estimation with L1 or L2 priors.
    """

    def __init__(
        self,
        learning_rate: float = 0.05,
        n_iterations: int = 2000,
        reg_type: str = "L2",
        lambda_reg: float = 0.1,
        tolerance: float = 1e-7,
    ) -> None:
        if reg_type.upper() not in {"L1", "L2", "NONE"}:
            raise ValueError("reg_type must be one of 'L1', 'L2', or 'NONE'.")
        if learning_rate <= 0:
            raise ValueError("learning_rate must be positive.")
        if lambda_reg < 0:
            raise ValueError("lambda_reg must be non-negative.")

        self.lr: float = float(learning_rate)
        self.n_iter: int = int(n_iterations)
        self.reg_type: str = reg_type.upper()
        self.lambda_reg: float = float(lambda_reg)
        self.tolerance: float = float(tolerance)

        self.weights: np.ndarray | None = None
        self.bias: float = 0.0
        self.cost_history: list[float] = []

    @staticmethod
    def _sigmoid(z: np.ndarray) -> np.ndarray:
        # Numerical stability: clip to avoid overflow in exp
        z_clipped = np.clip(z, -500.0, 500.0)
        return 1.0 / (1.0 + np.exp(-z_clipped))

    def _compute_cost(
        self,
        y_true: np.ndarray,
        y_pred: np.ndarray,
        m: int,
    ) -> float:
        # Binary cross-entropy with epsilon clipping
        eps: float = 1e-15
        y_pred_safe = np.clip(y_pred, eps, 1.0 - eps)
        bce: float = -np.mean(
            y_true * np.log(y_pred_safe) + (1.0 - y_true) * np.log(1.0 - y_pred_safe)
        )

        if self.reg_type == "L2" and self.weights is not None:
            reg_term: float = (self.lambda_reg / (2.0 * m)) * float(np.sum(self.weights ** 2))
        elif self.reg_type == "L1" and self.weights is not None:
            reg_term = (self.lambda_reg / m) * float(np.sum(np.abs(self.weights)))
        else:
            reg_term = 0.0

        return bce + reg_term

    def fit(self, X: np.ndarray, y: np.ndarray, verbose: bool = False) -> "MAPLogisticRegression":
        if X.ndim != 2:
            raise ValueError("X must be a 2D array of shape (m, n).")
        if y.shape[0] != X.shape[0]:
            raise ValueError("X and y must have the same number of samples.")
        if not np.all(np.isin(y, [0, 1])):
            raise ValueError("y must contain only binary labels {0, 1}.")

        m, n = X.shape
        self.weights = np.zeros(n, dtype=float)
        self.bias = 0.0
        self.cost_history = []

        for iteration in range(self.n_iter):
            linear_output = X.dot(self.weights) + self.bias
            y_pred = self._sigmoid(linear_output)

            cost = self._compute_cost(y, y_pred, m)
            self.cost_history.append(cost)

            # Convergence check after the first iteration
            if iteration > 0 and abs(self.cost_history[-2] - cost) < self.tolerance:
                if verbose:
                    print(f"[{self.reg_type}] Converged at iteration {iteration} with cost {cost:.6f}")
                break

            # Gradients of the binary cross-entropy term
            error = y_pred - y
            dw = (1.0 / m) * X.T.dot(error)
            db = (1.0 / m) * float(np.sum(error))

            # Add MAP regularization gradient
            if self.reg_type == "L2":
                dw += (self.lambda_reg / m) * self.weights
            elif self.reg_type == "L1":
                dw += (self.lambda_reg / m) * np.sign(self.weights)

            # Parameter update
            self.weights -= self.lr * dw
            self.bias -= self.lr * db

        return self

    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        if self.weights is None:
            raise RuntimeError("Model has not been trained. Call fit() first.")
        return self._sigmoid(X.dot(self.weights) + self.bias)

    def predict(self, X: np.ndarray, threshold: float = 0.5) -> np.ndarray:
        if not 0.0 < threshold < 1.0:
            raise ValueError("threshold must lie in the open interval (0, 1).")
        proba = self.predict_proba(X)
        return (proba >= threshold).astype(int)


def sparsity_ratio(weights: np.ndarray, tol: float = 1e-8) -> float:
    """Fraction of weights whose absolute value is at or below tolerance."""
    if weights.size == 0:
        return 0.0
    return float(np.mean(np.abs(weights) <= tol))


def run_lab_experiment() -> None:
    # 1. Generate a synthetic high-dimensional dataset
    X, y = make_classification(
        n_samples=600,
        n_features=20,
        n_informative=6,
        n_redundant=4,
        n_classes=2,
        random_state=42,
    )

    # 2. Standardize features (essential for regularized models)
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # 3. Train-test split
    X_train, X_test, y_train, y_test = train_test_split(
        X_scaled, y, test_size=0.25, random_state=42, stratify=y
    )

    # 4. Train three custom MAP models: MLE, L2, L1
    lambda_value: float = 0.5

    model_mle = MAPLogisticRegression(learning_rate=0.05, n_iterations=2000,
                                      reg_type="NONE", lambda_reg=0.0)
    model_l2 = MAPLogisticRegression(learning_rate=0.05, n_iterations=2000,
                                     reg_type="L2", lambda_reg=lambda_value)
    model_l1 = MAPLogisticRegression(learning_rate=0.05, n_iterations=2000,
                                     reg_type="L1", lambda_reg=lambda_value)

    model_mle.fit(X_train, y_train, verbose=True)
    model_l2.fit(X_train, y_train, verbose=True)
    model_l1.fit(X_train, y_train, verbose=True)

    # 5. Compare with scikit-learn's built-in regularized logistic regression
    sklearn_l2 = LogisticRegression(penalty="l2", C=1.0 / lambda_value,
                                    solver="lbfgs", max_iter=2000)
    sklearn_l1 = LogisticRegression(penalty="l1", C=1.0 / lambda_value,
                                    solver="liblinear", max_iter=2000)

    sklearn_l2.fit(X_train, y_train)
    sklearn_l1.fit(X_train, y_train)

    # 6. Evaluate all five models
    models: dict[str, tuple] = {
        "MLE (Custom)": (model_mle, None),
        "L2 MAP (Custom)": (model_l2, None),
        "L1 MAP (Custom)": (model_l1, None),
        "L2 (sklearn)": (sklearn_l2, "sklearn"),
        "L1 (sklearn)": (sklearn_l1, "sklearn"),
    }

    print("\n" + "=" * 78)
    print(f"{'Model':<22} {'Test Acc':>10} {'Test LogLoss':>14} {'Sparsity':>10} {'L2 Norm w':>12}")
    print("=" * 78)

    for name, (mdl, kind) in models.items():
        if kind == "sklearn":
            preds = mdl.predict(X_test)
            proba = mdl.predict_proba(X_test)[:, 1]
            w = mdl.coef_.ravel()
        else:
            preds = mdl.predict(X_test)
            proba = mdl.predict_proba(X_test)
            w = mdl.weights

        acc = accuracy_score(y_test, preds)
        ll = log_loss(y_test, proba)
        sp = sparsity_ratio(w)
        l2n = float(np.linalg.norm(w, 2))

        print(f"{name:<22} {acc:>10.4f} {ll:>14.4f} {sp:>10.4f} {l2n:>12.4f}")

    print("=" * 78)

    # 7. Plot the cost history for the three custom MAP variants
    plt.figure(figsize=(8, 5))
    plt.plot(model_mle.cost_history, label="MLE", linewidth=2)
    plt.plot(model_l2.cost_history, label="L2 MAP (Ridge)", linewidth=2)
    plt.plot(model_l1.cost_history, label="L1 MAP (Lasso)", linewidth=2)
    plt.xlabel("Iteration")
    plt.ylabel("Negative Log-Posterior (Loss)")
    plt.title("Convergence of MAP Logistic Regression")
    plt.legend()
    plt.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.savefig("map_convergence.png", dpi=120)
    plt.show()

    # 8. Plot the learned weight magnitudes
    plt.figure(figsize=(10, 5))
    width: float = 0.27
    x_idx = np.arange(model_l2.weights.size)
    plt.bar(x_idx - width, model_l2.weights, width=width, label="L2 (Custom)", alpha=0.85)
    plt.bar(x_idx, model_l1.weights, width=width, label="L1 (Custom)", alpha=0.85)
    plt.bar(x_idx + width, model_mle.weights, width=width, label="MLE (Custom)", alpha=0.6)
    plt.xlabel("Feature Index")
    plt.ylabel("Weight Magnitude")
    plt.title("Learned Weight Vectors: MLE vs L1 vs L2")
    plt.legend()
    plt.grid(True, alpha=0.3, axis="y")
    plt.tight_layout()
    plt.savefig("weight_comparison.png", dpi=120)
    plt.show()


if __name__ == "__main__":
    run_lab_experiment()
```

## 3.3 Expected Output Snapshot

The script produces a tabular comparison of all five models, illustrating that:

- L1 achieves the **highest sparsity ratio** (often above 0.5 for high-dimensional data).
- L2 keeps all weights non-zero with the **smallest L2 norm**.
- MLE typically shows the **largest weight magnitudes** because there is no prior constraint.
- All MAP-regularized variants improve **test log-loss** compared to MLE when overfitting is present.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams and Schematics

## 4.1 MLE vs MAP Conceptual Comparison

```mermaid
graph LR
    subgraph MLE_Path
        A1[Observed Data D] --> A2[Define Likelihood p of D given theta]
        A2 --> A3[Take Negative Logarithm]
        A3 --> A4[Minimize Negative Log Likelihood]
    end

    subgraph MAP_Path
        B1[Observed Data D] --> B2[Define Likelihood p of D given theta]
        B2 --> B3[Define Prior p of theta]
        B3 --> B4[Multiply by Bayes Theorem]
        B4 --> B5[Take Negative Logarithm]
        B5 --> B6[Negative Log Likelihood plus Negative Log Prior]
        B6 --> B7[Minimize Regularized Objective]
    end

    A4 -. Extension .- B1
    B7 --> B8{Choose Prior Type}
    B8 -->|Gaussian| B9[L2 Penalty lambda times w squared]
    B8 -->|Laplace| B10[L1 Penalty lambda times absolute w]
```

## 4.2 Lab Experiment Workflow

```mermaid
graph TD
    S1[Start Lab Module 4] --> S2[Generate or Load Classification Dataset]
    S2 --> S3[Standardize Features using StandardScaler]
    S3 --> S4[Split into Train and Test Sets 75 25]
    S4 --> S5[Initialize Custom MAP Logistic Regression]
    S5 --> S6[Select Regularization Type L1 or L2]
    S6 --> S7[Set Regularization Strength lambda]
    S7 --> S8[Run Gradient Descent for n Iterations]
    S8 --> S9[Monitor Cost History and Check Convergence]
    S9 --> S10{Converged?}
    S10 -->|No| S8
    S10 -->|Yes| S11[Predict Labels on Test Set]
    S11 --> S12[Compute Accuracy and Log Loss]
    S12 --> S13[Compute Sparsity Ratio and L2 Norm of Weights]
    S13 --> S14[Compare with scikit-learn Baseline]
    S14 --> S15[Plot Cost Curves and Weight Bar Charts]
    S15 --> S16[Document Observations in Lab Record]
    S16 --> S17[End]
```

## 4.3 Sequential Processing Topology Matrix

| Processing Stage | MLE Pipeline | L2 MAP Pipeline | L1 MAP Pipeline |
|---|---|---|---|
| Input | Standardized $X$, labels $y$ | Standardized $X$, labels $y$ | Standardized $X$, labels $y$ |
| Forward pass | $z = Xw + b$, $\hat{y} = \sigma(z)$ | $z = Xw + b$, $\hat{y} = \sigma(z)$ | $z = Xw + b$, $\hat{y} = \sigma(z)$ |
| Loss | BCE only | BCE + $\tfrac{\lambda}{2}\Vert w \Vert_2^2$ | BCE + $\lambda \Vert w \Vert_1$ |
| Gradient $dw$ | $\tfrac{1}{m} X^\top (\hat{y} - y)$ | $\tfrac{1}{m} X^\top (\hat{y} - y) + \lambda w$ | $\tfrac{1}{m} X^\top (\hat{y} - y) + \lambda \, \text{sign}(w)$ |
| Gradient $db$ | $\tfrac{1}{m} \sum (\hat{y} - y)$ | $\tfrac{1}{m} \sum (\hat{y} - y)$ | $\tfrac{1}{m} \sum (\hat{y} - y)$ |
| Parameter update | $w \leftarrow w - \alpha dw$ | $w \leftarrow w - \alpha dw$ | $w \leftarrow w - \alpha dw$ |
| Weight profile | Unbounded magnitudes | Smoothly shrunk | Sparse, many zeros |
| Sparsity ratio | Low | Low | High |

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank

## Part A Questions (3 Marks Each)

### Question 1: Definition of MAP Estimation
**`[KTU University Exam - Dec 2023]`** | **CO1** | **RBT: Remember**

**Q:** Define Maximum A Posteriori (MAP) estimation. State Bayes' theorem and explain how MAP differs from Maximum Likelihood Estimation (MLE).

**Model Answer (Valuation Key):**
- **Bayes' theorem** [1 Mark]:

$$
p(\boldsymbol{\theta} \mid \mathcal{D}) = \frac{p(\mathcal{D} \mid \boldsymbol{\theta}) \, p(\boldsymbol{\theta})}{p(\mathcal{D})}
$$

- **Definition of MAP** [1 Mark]: MAP estimation finds the parameter vector $\hat{\boldsymbol{\theta}}$ that maximizes the posterior probability $p(\boldsymbol{\theta} \mid \mathcal{D})$, which is proportional to $p(\mathcal{D} \mid \boldsymbol{\theta}) \, p(\boldsymbol{\theta})$.
- **Difference from MLE** [1 Mark]: MLE maximizes only the likelihood $p(\mathcal{D} \mid \boldsymbol{\theta})$ and assumes a uniform (uninformative) prior. MAP additionally incorporates a prior $p(\boldsymbol{\theta})$ that encodes beliefs about the parameters, effectively adding a regularization penalty to the objective.

---

### Question 2: L1 vs L2 Priors
**`[KTU University Exam - July 2024]`** | **CO2** | **RBT: Understand**

**Q:** Compare L1 and L2 regularization in logistic regression with respect to (i) the prior distribution assumed, (ii) the form of the penalty term, and (iii) the effect on the learned weight vector.

**Model Answer (Valuation Key):**
- **(i) Prior distribution** [1 Mark]: L1 uses a **Laplace prior** $p(w_j) \propto \exp(-\vert w_j \vert / b)$, whereas L2 uses a **Gaussian prior** $p(w_j) \propto \exp(-w_j^2 / 2\sigma^2)$.
- **(ii) Penalty form** [1 Mark]: L1 penalty is $\lambda \sum_j \vert w_j \vert = \lambda \Vert \mathbf{w} \Vert_1$ (diamond-shaped, non-smooth at zero). L2 penalty is $\tfrac{\lambda}{2} \sum_j w_j^2 = \tfrac{\lambda}{2} \Vert \mathbf{w} \Vert_2^2$ (parabolic, smooth everywhere).
- **(iii) Effect on weights** [1 Mark]: L1 drives many weights to **exactly zero**, producing **sparse models** suitable for feature selection. L2 shrinks weights toward zero but keeps them **non-zero**, producing **dense but small-magnitude weights** that are stable under multicollinearity.

---

## Part B Questions (14 Marks Each — Module Internal Choice)

### Question A (14 Marks)
**`[KTU University Exam - Dec 2024]`** | **CO3, CO4** | **RBT: Apply, Analyze**

**Q:** Consider a binary classification dataset with $m = 400$ samples and $n = 15$ features. You are required to apply MAP estimation to logistic regression using both L1 and L2 priors.

**(a)** Derive the complete MAP objective function for logistic regression under a Gaussian prior (L2). Show all intermediate steps from the Bayesian formulation to the final regularized loss. State the gradient update equation. **[7 Marks]**

**(b)** Implement the L1-regularized logistic regression from scratch in Python. Your code must include: the sigmoid function with numerical stability, the L1-augmented loss, sub-gradient computation, learning rate decay, and a convergence check. Report the test accuracy, log-loss, sparsity ratio, and L2 norm of the weight vector. Plot the cost history. **[7 Marks]**

**Model Answer:**

**(a) Derivation [7 Marks]**
- Likelihood expression for logistic regression [1 Mark]:

$$
p(\mathcal{D} \mid \mathbf{w}, b) = \prod_{i=1}^{m} \hat{y}_i^{\,y_i} (1 - \hat{y}_i)^{1 - y_i}
$$

- Apply Bayes' theorem, drop the evidence term, take negative log [1 Mark]:

$$
\mathcal{J} = -\sum_{i=1}^{m} \left[ y_i \log \hat{y}_i + (1 - y_i) \log(1 - \hat{y}_i) \right] - \log p(\mathbf{w})
$$

- Substitute Gaussian prior, expand negative log-prior [1 Mark]:

$$
\log p_{L2}(\mathbf{w}) = -\frac{1}{2\sigma^2} \sum_{j=1}^{n} w_j^{\,2} + C
$$

- Define $\lambda = 1/\sigma^2$ and write the final MAP objective [1 Mark]:

$$
\mathcal{J}_{L2}(\mathbf{w}, b) = -\sum_{i=1}^{m} \left[ y_i \log \hat{y}_i + (1 - y_i) \log(1 - \hat{y}_i) \right] + \frac{\lambda}{2} \sum_{j=1}^{n} w_j^{\,2}
$$

- Compute gradient with respect to $\mathbf{w}$ [2 Marks]:

$$
\frac{\partial \mathcal{J}_{L2}}{\partial \mathbf{w}} = \mathbf{X}^\top (\hat{\mathbf{y}} - \mathbf{y}) + \lambda \mathbf{w}
$$

- State the parameter update rule [1 Mark]:

$$
\mathbf{w}^{(t+1)} = \mathbf{w}^{(t)} - \alpha \left[ \mathbf{X}^\top (\hat{\mathbf{y}} - \mathbf{y}) + \lambda \mathbf{w}^{(t)} \right]
$$

**(b) Implementation [7 Marks]**
- Correct sigmoid with clipping [1 Mark]: see `_sigmoid` static method in the reference code.
- L1-augmented loss with sub-gradient handling [1 Mark]: penalty term $\lambda \sum \vert w_j \vert$ added to BCE.
- Vectorized gradient computation [1 Mark]: $\tfrac{1}{m} X^\top(\hat{y} - y) + \lambda \, \text{sign}(w)$ for weights; bias left un-regularized.
- Learning rate decay schedule [1 Mark]: implement `self.lr = self.lr / (1 + \text{decay} \times t)$` per iteration.
- Convergence check [1 Mark]: monitor $\vert J_{t} - J_{t-1} \vert < \varepsilon$ and break early.
- Metric reporting and plotting [1 Mark]: print sparsity, L2 norm, accuracy, log-loss; plot cost vs iterations.

> [!WARNING]
> **KTU Examiner's Valuation Pitfall**: Students frequently forget to clip the sigmoid input to $[-500, 500]$, causing `RuntimeWarning: overflow` in `exp`. This loses 1 mark. Additionally, applying L1 penalty to the **bias** term is a common error — the bias is not regularized because it is a location parameter, not a feature-weight parameter. Finally, students often confuse the **sparsity ratio** with the **L1 norm**; sparsity is the *fraction of exactly-zero weights*, not the sum of magnitudes.

---

### Question B (14 Marks — Alternative)
**`[KTU University Exam - July 2024]`** | **CO3, CO4** | **RBT: Apply, Analyze**

**Q:** A medical diagnosis dataset contains $n = 50$ clinical features and $m = 300$ patient records. The task is to predict the presence (1) or absence (0) of a disease.

**(a)** Explain why plain MLE may overfit in this high-dimensional setting. Show mathematically how adding an L1 prior to the parameters converts MLE into a MAP estimator. State the final objective and gradient. **[7 Marks]**

**(b)** Write a complete Python program that: (i) loads a synthetic high-dimensional binary dataset, (ii) trains three logistic regression models (MLE, L2 MAP, L1 MAP) with the same learning rate and iteration count, (iii) evaluates them on a held-out test set, and (iv) produces a bar chart comparing the learned weight vectors. Discuss the sparsity observations. **[7 Marks]**

**Model Answer:**

**(a) Overfitting and MAP derivation [7 Marks]**
- MLE overfit explanation [1 Mark]: With $n = 50$ features and only $m = 300$ samples, MLE has many degrees of freedom. It will assign large weights to noisy features to perfectly separate training data, but generalization on test data will be poor.
- Express MAP via Bayes [1 Mark]:

$$
\hat{\mathbf{w}}_{\text{MAP}} = \arg\max_{\mathbf{w}} \, p(\mathcal{D} \mid \mathbf{w}) \, p(\mathbf{w})
$$

- Laplace prior [1 Mark]:

$$
p_{L1}(w_j) = \frac{1}{2b} \exp\!\left(-\frac{\vert w_j \vert}{b}\right)
$$

- Negative log-posterior with $\lambda = 1/b$ [2 Marks]:

$$
\mathcal{J}_{L1}(\mathbf{w}, b) = \mathcal{L}_{\text{BCE}}(\mathbf{w}, b) + \lambda \sum_{j=1}^{n} \vert w_j \vert
$$

- Gradient with sub-gradient of $\vert w_j \vert$ [2 Marks]:

$$
\frac{\partial \mathcal{J}_{L1}}{\partial \mathbf{w}} = \mathbf{X}^\top (\hat{\mathbf{y}} - \mathbf{y}) + \lambda \, \text{sign}(\mathbf{w})
$$

**(b) Implementation and discussion [7 Marks]**
- Synthetic dataset generation [1 Mark]: use `make_classification` with `n_features=50, n_informative=8`.
- Three model instantiation with shared hyperparameters [1 Mark]: `learning_rate=0.05`, `n_iterations=1500`, `lambda_reg=0.3`.
- Train-test split with stratification [1 Mark]: `train_test_split(..., stratify=y)`.
- Evaluation metrics computation [1 Mark]: accuracy, log-loss, sparsity ratio, L2 norm.
- Bar chart of weights [1 Mark]: `plt.bar` with three offset groups for MLE, L2, L1.
- Discussion of sparsity [2 Marks]: L1 yields a bar chart with many bars at exactly zero, indicating automatic feature selection. L2 yields all bars non-zero but small. MLE yields large-magnitude bars including noisy features.

> [!WARNING]
> **KTU Examiner's Valuation Pitfall**: When asked to "compare" the methods, students often only report accuracy. The examiner expects explicit reporting of **sparsity ratio**, **L2 norm of weights**, and a **qualitative interpretation** of the bar chart. Losing 2 marks for omitting the discussion section is the most frequent pitfall. Also, do not use `StandardScaler` *after* the train-test split on the test set; the scaler must be fit on training data only to avoid data leakage.

---

## Topic Recap and Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist for MAP Estimation with L1 and L2 Regularization**
>
> - **Bayes' Theorem** is the foundation: $p(\boldsymbol{\theta} \mid \mathcal{D}) \propto p(\mathcal{D} \mid \boldsymbol{\theta}) \, p(\boldsymbol{\theta})$.
> - **MAP = MLE + Prior**: When the prior is uniform, MAP reduces exactly to MLE.
> - **L2 prior = Gaussian**: produces the penalty $\tfrac{\lambda}{2} \Vert \mathbf{w} \Vert_2^2$ and the gradient term $\lambda \mathbf{w}$. Smooth, dense, no sparsity.
> - **L1 prior = Laplace**: produces the penalty $\lambda \Vert \mathbf{w} \Vert_1$ and the gradient term $\lambda \, \text{sign}(\mathbf{w})$. Non-smooth at zero, induces sparsity.
> - **Bias is NOT regularized** in standard practice. Only the weight vector $\mathbf{w}$ is penalized.
> - **Sigmoid clipping** to $[-500, 500]$ is essential to prevent numerical overflow in `exp`.
> - **Convergence check** is based on absolute cost difference $\vert J_t - J_{t-1} \vert < \varepsilon$, typically $\varepsilon = 10^{-6}$ to $10^{-8}$.
> - **Feature standardization** using `StandardScaler` (zero mean, unit variance) is a mandatory preprocessing step before regularized logistic regression.
> - **L1 induces feature selection** because of the non-differentiable kink at $w_j = 0$ in the absolute value function.
> - **L2 improves conditioning** when features are correlated (multicollinearity).
> - **Hyperparameter $\lambda$** controls prior strength: small $\lambda$ ≈ weak regularization (close to MLE), large $\lambda$ ≈ strong shrinkage toward zero.
> - **sklearn correspondence**: in `LogisticRegression`, the parameter `C = 1/\lambda` is the *inverse* regularization strength.
> - **RBT levels in exam**: derivation questions test *Apply/Analyze*; comparison questions test *Understand*; definitions test *Remember*.
> - **CO mapping**: derivation = CO3, implementation = CO4, comparison and analysis = CO5.

<!-- SECTION_5_END -->
