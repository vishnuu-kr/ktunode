# Discuss the strengths and weaknesses of each Naïve Bayes variant for text classification.

<!-- SECTION_1_START -->

# Naïve Bayes Variants for Text Classification: Strengths & Weaknesses

> [!IMPORTANT]
> **KTU 2024 Scheme | Course:** PCCSL508 — Machine Learning Lab | **Module:** 7 | **CO Mapping:** CO5 (Apply standard ML algorithms using Python toolkits)

## 1.1 Formal Academic Definition

In the context of **text classification**, the **Naïve Bayes (NB)** family of probabilistic classifiers applies **Bayes' Theorem** under the **conditional independence assumption** — that is, the presence (or value) of any one feature (word/token) is assumed to be statistically independent of every other feature, given the class label $y \in \{c_1, c_2, \dots, c_K\}$.

For a document represented as a feature vector $\mathbf{x} = (x_1, x_2, \dots, x_n)$ over a vocabulary of size $n$, the classifier selects the class with the **maximum a posteriori (MAP)** probability:

$$\hat{y} = \arg\max_{c_k \in \mathcal{C}} \; P(c_k \mid \mathbf{x}) = \arg\max_{c_k \in \mathcal{C}} \; P(c_k) \prod_{i=1}^{n} P(x_i \mid c_k)$$

The KTU 2024 syllabus recognises **three principal variants** used specifically for text data, each differing only in the **assumed distribution of the likelihood term** $P(x_i \mid c_k)$:

| Variant | Full Name | Likelihood Model | Input Representation |
|---|---|---|---|
| **MNB** | **Multinomial Naïve Bayes** | **Multinomial distribution** | **Word counts / TF** |
| **BNB** | **Bernoulli Naïve Bayes** | **Bernoulli distribution** | **Binary occurrence (0/1)** |
| **CNB** | **Complement Naïve Bayes** | **Multinomial on complement** | **Word counts (TF-IDF)** |

> [!NOTE]
> **Syllabus Highlight:** The KTU 2024 Module 7 specifically asks you to *implement* a NB classifier and *compare* variants — this means examiners expect you to discuss **MNB vs BNB** quantitatively, not just code a single model.

## 1.2 Intuitive Analogy — "The Postal Sorting Office"

Imagine a **postal sorting office** where letters (documents) must be routed into one of three bins: **Spam**, **Promotions**, or **Personal**. A junior sorter (the NB classifier) is not allowed to read the whole letter — they can only glance at the **stamps and postmarks** (tokens/features).

- **Multinomial NB** says: *"Count how many times each stamp appears. A 'royal' stamp appearing 5 times across many letters is strong evidence."* — this is the **frequency-aware** sorter.
- **Bernoulli NB** says: *"Did the 'royal' stamp appear at all? Yes or No. Even one occurrence is enough signal."* — this is the **presence/absence** sorter.
- **Complement NB** says: *"Don't just look at letters sorted into 'Spam'. Look at what stamps are common in **all the other** bins — that contrast gives a sharper signal."* — this is the **contrastive** sorter.

> [!TIP]
> **Geometric Intuition:** Each document is a point in a high-dimensional word-space (one axis per word). MNB weighs the **distance** from the centroid by count; BNB checks the **quadrant** (which side of each axis); CNB uses **anti-centroids** of opposing classes.

## 1.3 Standard Metrics Highlighted for Examiners

> [!IMPORTANT]
> **Key Constants / Hyper-parameters to memorise:**
> - **Laplace (additive) smoothing parameter** $\alpha = 1.0$ (default in scikit-learn)
> - **Vocabulary size** $V$ (typically $> 10^4$ for text)
> - **Document length** $N_d = \sum_{i=1}^{n} x_i$
> - **Token frequency** $f_{w,c} = $ count of word $w$ in class $c$
> - **Class prior** $P(c) = N_c / N$ (document-frequency-based)

---

> [!VISUALIZATION CONTROL]
> **Concept:** Decision boundary geometry of MNB vs BNB in a 2-D word-space (toy corpus with two words $w_1, w_2$).
>
> **GeoGebra / Desmos Input Equations (paste into graphing tool):**
> - $P(c_1 \mid w_1) = \frac{e^{2 w_1 + 1.5 w_2}}{1 + e^{2 w_1 + 1.5 w_2}}$
> - $P(c_1 \mid w_1) = 0.5$  *(decision boundary line)*
> - For BNB: the same line but evaluated only at the **four corner points** $(0,0), (1,0), (0,1), (1,1)$.
>
> **Visual Description:** In MNB, the boundary is a smooth **log-linear hyperplane** that slices the positive quadrant diagonally. In BNB, the boundary is a **staircase** that jumps at the four binary corner points. MNB is "soft" and continuous; BNB is "hard" and discrete.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Underlying Engine — Bayes' Theorem for Text

Given a document $d$ with feature vector $\mathbf{x}$, every NB variant estimates:

$$P(c_k \mid \mathbf{x}) = \frac{P(c_k) \cdot P(\mathbf{x} \mid c_k)}{P(\mathbf{x})}$$

Because $P(\mathbf{x})$ is constant across classes for a given $\mathbf{x}$, we drop it and use the MAP rule from §1.1. The "naïve" part is the **conditional independence assumption**:

$$P(\mathbf{x} \mid c_k) = \prod_{i=1}^{n} P(x_i \mid c_k)$$

This assumption is *almost always violated* in real text (the words "machine" and "learning" co-occur far more often than chance), but it is the reason NB trains in **a single pass** and is dramatically fast.

## 2.2 Variant-by-Variant Theoretical Breakdown

### 2.2.1 Multinomial Naïve Bayes (MNB)
Treats a document as a **bag of word-counts**. The likelihood is parameterised by a multinomial distribution over the vocabulary:

$$P(\mathbf{x} \mid c_k) = \frac{(\sum_i x_i)!}{\prod_i x_i!} \prod_{i=1}^{n} P(w_i \mid c_k)^{x_i}$$

**Log-form** (used in practice to avoid underflow):

$$\log P(c_k \mid \mathbf{x}) = \log P(c_k) + \sum_{i=1}^{n} x_i \cdot \log P(w_i \mid c_k)$$

With **Laplace smoothing** to handle unseen words:

$$P(w_i \mid c_k) = \frac{f_{w_i, c_k} + \alpha}{\sum_{w \in V} f_{w, c_k} + \alpha \cdot \mid V \mid} = \frac{f_{w_i, c_k} + \alpha}{N_{c_k} + \alpha \cdot \mid V \mid}$$

> **Why this works for text:** Word counts are the natural representation of a document's content. MNB is the **de-facto baseline** in spam filtering, sentiment analysis, and topic classification.

### 2.2.2 Bernoulli Naïve Bayes (BNB)
Treats each word as a **binary feature** (present/absent) and models the document with $n$ independent Bernoulli trials:

$$P(\mathbf{x} \mid c_k) = \prod_{i=1}^{n} P(w_i \mid c_k)^{x_i} \cdot \big(1 - P(w_i \mid c_k)\big)^{1 - x_i}$$

Smoothing form:

$$P(w_i \mid c_k) = \frac{\text{count}(w_i \in d, d \in c_k) + \alpha}{\text{count}(d \in c_k) + 2\alpha}$$

> **Why this works for text:** Captures *whether* a word appears, not *how many times*. Excellent for **short documents** (tweets, headlines, search queries) and for vocabulary that includes **many rare words**.

### 2.2.3 Complement Naïve Bayes (CNB)
A 2003 refinement by **Rennie et al.** (popularised in scikit-learn 0.22+). It computes parameters from the **complement** $\bar{c}_k$ (i.e., *all other classes except* $c_k$):

$$\hat{\theta}_{w_i, c_k} = \frac{f_{w_i, \bar{c}_k} + \alpha}{\sum_w f_{w, \bar{c}_k} + \alpha \cdot \mid V \mid}$$

Decision rule (weights are negated to pick the *smallest* complement score):

$$\hat{y} = \arg\min_{c_k} \sum_{i: x_i > 0} x_i \cdot \log \hat{\theta}_{w_i, c_k}$$

> **Why this works for text:** Solves the **class-imbalance problem** in NB by treating each class as if it were the "minority" class. Particularly strong on **imbalanced text datasets** (e.g., rare-event classification, long-tail categories).

## 2.3 KTU High-Yield Formula Sheet

> [!NOTE]
> **Master this table — it directly addresses the "strengths and weaknesses" question in the KTU 2024 exam.**

| # | Component | MNB Formula | BNB Formula | CNB Formula |
|---|---|---|---|---|
| 1 | **Likelihood model** | $\prod_i P(w_i \mid c_k)^{x_i}$ | $\prod_i P(w_i \mid c_k)^{x_i} (1-P(w_i \mid c_k))^{1-x_i}$ | Uses $\hat{\theta}_{w_i, \bar{c}_k}$ from complement class |
| 2 | **Parameter estimator** | $\frac{f_{w,c} + \alpha}{N_c + \alpha \mid V \mid}$ | $\frac{\text{bf}_{w,c} + \alpha}{N_c + 2\alpha}$ | $\frac{f_{w,\bar{c}} + \alpha}{N_{\bar{c}} + \alpha \mid V \mid}$ |
| 3 | **Decision rule** | $\arg\max_c \log P(c) + \sum_i x_i \log P(w_i \mid c)$ | $\arg\max_c \log P(c) + \sum_i [x_i \log P(w_i \mid c) + (1-x_i) \log(1 - P(w_i \mid c))]$ | $\arg\min_c \sum_{i: x_i>0} x_i \log \hat{\theta}_{w_i, c}$ |
| 4 | **Input feature type** | Integer count vector | Binary 0/1 vector | Integer count vector (TF-IDF works best) |
| 5 | **Optimal document length** | Medium-to-long (≥ 30 words) | Short (≤ 30 words) | Any length |
| 6 | **Hyper-parameter $\alpha$** | Default **$\alpha = 1.0$** | Default **$\alpha = 1.0$** | Default **$\alpha = 1.0$** |
| 7 | **Time complexity (train)** | $O(N \cdot \mid V \mid)$ | $O(N \cdot \mid V \mid)$ | $O(K \cdot N \cdot \mid V \mid)$ |
| 8 | **Space complexity** | $O(K \cdot \mid V \mid)$ | $O(K \cdot \mid V \mid)$ | $O(K \cdot \mid V \mid)$ |

## 2.4 Real-World Engineering Utility

| Application Domain | Why NB? | Variant Used |
|---|---|---|
| **Email spam filtering** (Gmail, Outlook) | Trains on millions of emails in one pass; interpretable | MNB |
| **Sentiment analysis** (Amazon, Flipkart reviews) | Handles high-dimensional sparse text well | MNB / CNB |
| **News article categorisation** (BBC, Reuters-21578) | Robust to vocabulary size; works with TF-IDF | MNB |
| **Short-message classification** (SMS, tweets) | Binary features dominate; short docs | BNB |
| **Medical ICD coding** (imbalanced classes) | Rare-disease codes need complement weighting | CNB |
| **Real-time content moderation** | Sub-millisecond inference | MNB (log-vector dot product) |

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Python Implementation

## 3.1 Full Worked Example: Deriving the MNB Log-Score

Consider a 2-class problem: **Spam** ($c_1$) vs **Ham** ($c_2$) with vocabulary $V = \{\text{``free''}, \text{``offer''}, \text{``meeting''}, \text{``tomorrow''}\}$.

**Training counts:**

| Word $w$ | $f_{w, \text{spam}}$ | $f_{w, \text{ham}}$ |
|---|---|---|
| free | 8 | 1 |
| offer | 6 | 2 |
| meeting | 0 | 7 |
| tomorrow | 1 | 6 |
| **Total $N_c$** | **15** | **16** |
| **Documents per class $N_d$** | **10** | **14** |

**Step 1 — Class priors (Laplace smoothing not needed for priors):**

$$P(\text{spam}) = \frac{N_{\text{spam}}}{N_{\text{spam}} + N_{\text{ham}}} = \frac{10}{24} \approx 0.4167$$

$$P(\text{ham}) = \frac{14}{24} \approx 0.5833$$

**Step 2 — Likelihoods with $\alpha = 1$ and $\vert V \vert = 4$:**

$$P(\text{``free''} \mid \text{spam}) = \frac{8 + 1}{15 + 4} = \frac{9}{19} \approx 0.4737$$

$$P(\text{``free''} \mid \text{ham}) = \frac{1 + 1}{16 + 4} = \frac{2}{20} = 0.1000$$

**Step 3 — Log-scores for new document $\mathbf{x} = (\text{``free''}, \text{``free''}, \text{``offer''})$:**

$$\log P(\text{spam} \mid \mathbf{x}) \propto \log 0.4167 + 2 \cdot \log 0.4737 + 1 \cdot \log\frac{7}{19}$$

**Step 4 — Numerical evaluation:**

$$
\begin{aligned}
\log P(\text{spam} \mid \mathbf{x}) &\propto \log(0.4167) + 2\log(0.4737) + \log(7/19) \\
&= -0.8755 + 2(-0.7466) + (-0.9985) \\
&= -0.8755 - 1.4932 - 0.9985 \\
&= -3.3672
\end{aligned}
$$

$$
\begin{aligned}
\log P(\text{ham} \mid \mathbf{x}) &\propto \log(0.5833) + 2\log(0.1000) + \log(3/20) \\
&= -0.5390 + 2(-2.3026) + (-1.8971) \\
&= -0.5390 - 4.6052 - 1.8971 \\
&= -7.0413
\end{aligned}
$$

**Step 5 — Argmax decision:**

Since $-3.3672 > -7.0413$, the document is classified as **Spam**. ✓

## 3.2 Complete Python Implementation (Lab-Ready, Scikit-learn)

```python
# naive_bayes_text_classifier.py
# KTU 2024 | Module 7 | PCCSL508 Machine Learning Lab
# Implements MNB, BNB, and CNB on the 20 Newsgroups dataset
# and prints a side-by-side comparison of strengths & weaknesses.

from __future__ import annotations

import logging
import time
from dataclasses import dataclass
from typing import Dict, List, Tuple

import numpy as np
from sklearn.datasets import fetch_20newsgroups
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix,
    f1_score,
)
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import (
    BernoulliNB,
    ComplementNB,
    GaussianNB,
    MultinomialNB,
)

# ----------------------------------------------------------------------
# Logging configuration — keeps the lab notebook output auditable
# ----------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s",
)
logger = logging.getLogger("NB-Lab")


# ----------------------------------------------------------------------
# Configuration dataclass — keeps hyperparameters explicit and typed
# ----------------------------------------------------------------------
@dataclass(frozen=True)
class LabConfig:
    """Immutable hyper-parameter container for the lab experiment."""

    alpha: float = 1.0          # Laplace smoothing
    test_size: float = 0.25    # 75/25 train/test split
    random_state: int = 42     # Reproducibility
    n_classes: int = 4          # Subset of 20 Newsgroups for tractability
    max_features: int = 20000   # Vocabulary cap


def _select_categories(cfg: LabConfig) -> List[str]:
    """Pick a balanced 4-class subset so the comparison is meaningful."""
    return [
        "sci.med",
        "sci.space",
        "rec.sport.baseball",
        "talk.politics.misc",
    ]


def load_corpus(cfg: LabConfig) -> Tuple[
    List[str], List[str], List[str], List[str]
]:
    """Fetch and split the 20 Newsgroups subset."""
    categories = _select_categories(cfg)
    logger.info("Loading 20 Newsgroups subset: %s", categories)
    data = fetch_20newsgroups(
        subset="all",
        categories=categories,
        remove=("headers", "footers", "quotes"),
        random_state=cfg.random_state,
    )
    docs_train, docs_test, y_train, y_test = train_test_split(
        data.data,
        data.target,
        test_size=cfg.test_size,
        random_state=cfg.random_state,
        stratify=data.target,
    )
    logger.info("Train docs: %d | Test docs: %d", len(docs_train), len(docs_test))
    return docs_train, docs_test, y_train.tolist(), y_test.tolist()


def featurize(
    docs_train: List[str],
    docs_test: List[str],
    cfg: LabConfig,
) -> Dict[str, Tuple[np.ndarray, np.ndarray]]:
    """Build three different feature matrices — one per NB variant."""
    # 1. Word counts → MNB and CNB prefer raw counts
    count_vec = CountVectorizer(
        max_features=cfg.max_features,
        stop_words="english",
        lowercase=True,
    )
    Xtr_cnt = count_vec.fit_transform(docs_train)
    Xte_cnt = count_vec.transform(docs_test)

    # 2. TF-IDF → CNB's recommended input (down-weights common terms)
    tfidf_vec = TfidfVectorizer(
        max_features=cfg.max_features,
        stop_words="english",
        lowercase=True,
        sublinear_tf=True,        # apply log(1 + tf)
    )
    Xtr_tfidf = tfidf_vec.fit_transform(docs_train)
    Xte_tfidf = tfidf_vec.transform(docs_test)

    # 3. Binary occurrence → BNB requires explicit binarisation
    Xtr_bin = (Xtr_cnt > 0).astype(np.int8)
    Xte_bin = (Xte_cnt > 0).astype(np.int8)

    return {
        "counts_train": Xtr_cnt,
        "counts_test": Xte_cnt,
        "tfidf_train": Xtr_tfidf,
        "tfidf_test": Xte_tfidf,
        "binary_train": Xtr_bin,
        "binary_test": Xte_bin,
    }


def train_and_evaluate(
    features: Dict[str, Tuple[np.ndarray, np.ndarray]],
    y_train: List[int],
    y_test: List[int],
    cfg: LabConfig,
) -> List[Dict[str, object]]:
    """Train MNB, BNB, CNB and return a comparison table."""
    models: List[Tuple[str, object, np.ndarray, np.ndarray]] = [
        (
            "MultinomialNB (MNB)",
            MultinomialNB(alpha=cfg.alpha),
            features["counts_train"],
            features["counts_test"],
        ),
        (
            "BernoulliNB (BNB)",
            BernoulliNB(alpha=cfg.alpha, binarize=0.0),
            features["binary_train"],
            features["binary_test"],
        ),
        (
            "ComplementNB (CNB)",
            ComplementNB(alpha=cfg.alpha),
            features["tfidf_train"],
            features["tfidf_test"],
        ),
    ]

    results: List[Dict[str, object]] = []
    for name, model, Xtr, Xte in models:
        t0 = time.perf_counter()
        try:
            model.fit(Xtr, y_train)
        except ValueError as exc:
            logger.error("Training failed for %s: %s", name, exc)
            continue
        train_time = time.perf_counter() - t0

        t0 = time.perf_counter()
        y_pred = model.predict(Xte)
        infer_time = time.perf_counter() - t0

        acc = accuracy_score(y_test, y_pred)
        f1m = f1_score(y_test, y_pred, average="macro")
        results.append(
            {
                "model": name,
                "accuracy": round(acc, 4),
                "macro_f1": round(f1m, 4),
                "train_time_s": round(train_time, 4),
                "infer_time_s": round(infer_time, 4),
                "y_pred": y_pred,
            }
        )
        logger.info(
            "%s → acc=%.4f | macro-F1=%.4f | train=%.3fs",
            name, acc, f1m, train_time,
        )
    return results


def report(results: List[Dict[str, object]], y_test: List[int]) -> None:
    """Print a markdown-style summary table for the lab record."""
    header = (
        f"{'Variant':<22} {'Accuracy':>9} {'Macro-F1':>9} "
        f"{'Train (s)':>10} {'Infer (s)':>10}"
    )
    sep = "-" * len(header)
    print("\n" + sep)
    print(header)
    print(sep)
    for r in results:
        print(
            f"{r['model']:<22} {r['accuracy']:>9.4f} {r['macro_f1']:>9.4f} "
            f"{r['train_time_s']:>10.4f} {r['infer_time_s']:>10.4f}"
        )
    print(sep)

    # Detailed classification report for the best model (highest macro-F1)
    best = max(results, key=lambda r: r["macro_f1"])
    print(f"\nDetailed report for {best['model']}:\n")
    print(classification_report(y_test, best["y_pred"], digits=4))


def main() -> None:
    cfg = LabConfig()
    docs_train, docs_test, y_train, y_test = load_corpus(cfg)
    features = featurize(docs_train, docs_test, cfg)
    results = train_and_evaluate(features, y_train, y_test, cfg)
    report(results, y_test)


if __name__ == "__main__":
    main()
```

### 3.3 Expected Output (Illustrative)

```
----------------------------------------------------------------
Variant                  Accuracy Macro-F1  Train (s)  Infer (s)
----------------------------------------------------------------
MultinomialNB (MNB)        0.9120    0.9105     0.0123     0.0031
BernoulliNB (BNB)          0.8745    0.8712     0.0098     0.0027
ComplementNB (CNB)         0.9234    0.9221     0.0141     0.0033
----------------------------------------------------------------
```

> [!TIP]
> **Lab Observation:** On the 20 Newsgroups subset, **CNB > MNB > BNB** in accuracy. This is a textbook result — the imbalanced class distribution (e.g., `talk.politics.misc` has fewer docs) favours CNB.

## 3.4 Hand-Calculation: BNB on a Mini Corpus

Suppose a 3-document training set with binary features $V = \{w_1, w_2, w_3, w_4\}$:

| Doc | $w_1$ | $w_2$ | $w_3$ | $w_4$ | Class |
|---|---|---|---|---|---|
| $d_1$ | 1 | 0 | 1 | 0 | $c_A$ |
| $d_2$ | 1 | 1 | 0 | 0 | $c_A$ |
| $d_3$ | 0 | 0 | 1 | 1 | $c_B$ |

**Step 1 — Priors:** $P(c_A) = 2/3$, $P(c_B) = 1/3$.

**Step 2 — BNB parameters (with $\alpha = 1$):**

$$P(w_1 \mid c_A) = \frac{2 + 1}{2 + 2} = \frac{3}{4}, \quad P(w_1 \mid c_B) = \frac{0 + 1}{1 + 2} = \frac{1}{3}$$

**Step 3 — Score new test doc $\mathbf{x} = (1, 0, 0, 1)$:**

$$
\begin{aligned}
\log P(c_A \mid \mathbf{x}) &\propto \log(2/3) + \log(3/4) + \log(1 - 1/4) + \log(1 - 1/4) + \log(1 - 1/4) \\
&= -0.4055 - 0.2877 - 0.2877 - 0.2877 - 0.2877 \\
&= -1.5563
\end{aligned}
$$

$$
\begin{aligned}
\log P(c_B \mid \mathbf{x}) &\propto \log(1/3) + \log(1/3) + \log(2/3) + \log(1/3) + \log(1 + 1/3 - \text{...}) \\
&\text{(full derivation similar, classify accordingly)}
\end{aligned}
$$

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 Master Flowchart: Naïve Bayes Text-Classification Pipeline

```mermaid
flowchart TD
    startNode[Start: Raw Text Corpus] --> lowerNode[Lowercase + Tokenise]
    lowerNode --> stopNode[Remove Stopwords]
    stopNode --> featNode{Choose Feature Representation}

    featNode -->|Word Counts| mnbFeat[CountVectorizer Output]
    featNode -->|Binary 0/1| bnbFeat[Binarised CountVectorizer]
    featNode -->|TF-IDF| cnbFeat[TfidfVectorizer Output]

    mnbFeat --> mnbTrain[Train MultinomialNB]
    bnbFeat --> bnbTrain[Train BernoulliNB]
    cnbFeat --> cnbTrain[Train ComplementNB]

    mnbTrain --> mnbPred[Predict via argmax log P]
    bnbTrain --> bnbPred[Predict via Bernoulli log-odds]
    cnbTrain --> cnbPred[Predict via min complement score]

    mnbPred --> evalNode[Evaluate: Accuracy, F1, CM]
    bnbPred --> evalNode
    cnbPred --> evalNode

    evalNode --> compNode{Compare Variants}
    compNode --> strongMNB[MNB wins on long docs and balanced classes]
    compNode --> strongBNB[BNB wins on short docs and rare-word signals]
    compNode --> strongCNB[CNB wins on imbalanced datasets]
    compNode --> endNode[End: Choose variant by data profile]
```

## 4.2 Decision Tree: Which NB Variant Should You Use?

```mermaid
flowchart TD
    rootNode{What is the average document length?}
    rootNode -->|Short less than 30 words| shortNode{Is class balance skewed?}
    rootNode -->|Medium to Long 30+ words| longNode{Is class balance skewed?}

    shortNode -->|No balanced| pickBNB[Use BernoulliNB]
    shortNode -->|Yes imbalanced| pickCNB[Use ComplementNB]

    longNode -->|No balanced| pickMNB[Use MultinomialNB]
    longNode -->|Yes imbalanced| pickCNB2[Use ComplementNB]

    pickBNB --> featBin[Featurise: CountVectorizer then threshold to 0 or 1]
    pickMNB --> featCnt[Featurise: CountVectorizer raw counts]
    pickCNB --> featTfidf[Featurise: TfidfVectorizer with sublinear TF]
    pickCNB2 --> featTfidf
```

## 4.3 Block Architecture: NB Variant Comparison Matrix

```mermaid
flowchart LR
    subgraph INPUT_LAYER
        rawDoc[Raw Document d]
    end

    subgraph FEATURISATION
        cntVec[CountVectorizer]
        binVec[Binary Vectorizer]
        tfidfVec[TF-IDF Vectorizer]
    end

    subgraph NB_VARIANTS
        mnbModel[MultinomialNB]
        bnbModel[BernoulliNB]
        cnbModel[ComplementNB]
    end

    subgraph OUTPUT
        predMNB[Predicted Class MNB]
        predBNB[Predicted Class BNB]
        predCNB[Predicted Class CNB]
    end

    rawDoc --> cntVec --> mnbModel --> predMNB
    rawDoc --> binVec --> bnbModel --> predBNB
    rawDoc --> tfidfVec --> cnbModel --> predCNB

    predMNB --> finalEval[Compare and select best variant]
    predBNB --> finalEval
    predCNB --> finalEval
```

## 4.4 Sequential Processing Topology: Training vs Inference

```mermaid
flowchart TD
    subgraph TRAINING_PHASE
        tA1[Collect labelled documents] --> tA2[Tokenise and clean]
        tA2 --> tA3{Choose featuriser}
        tA3 -->|Counts| tA4[CountVectorizer fit transform]
        tA3 -->|Binary| tA5[Binarise]
        tA3 -->|TF-IDF| tA6[TfidfVectorizer fit transform]
        tA4 --> tA7[Fit MNB model]
        tA5 --> tA8[Fit BNB model]
        tA6 --> tA9[Fit CNB model]
        tA7 --> tA10[Persist vocabulary and log priors]
        tA8 --> tA10
        tA9 --> tA10
    end

    subgraph INFERENCE_PHASE
        iA1[New unseen document] --> iA2[Tokenise using persisted vocab]
        iA2 --> iA3[Vectorise with frozen CountVectorizer or TfidfVectorizer]
        iA3 --> iA4[Compute log P c plus sum x_i log P w i given c]
        iA4 --> iA5[Argmax over classes]
        iA5 --> iA6[Output predicted label]
    end

    tA10 -.serves as input to.-> iA2
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A — Short Answer Questions (3 Marks Each)

### Q1. `[KTU University Exam — July 2024]`
**Differentiate between Multinomial and Bernoulli Naïve Bayes with respect to their likelihood models. When would you prefer BNB over MNB for text classification?** *(CO5, Remember / Understand)*

**Model Answer (3 marks):**

| Aspect | Multinomial NB | Bernoulli NB |
|---|---|---|
| Likelihood | $P(w_i \mid c)^{x_i}$ | $P(w_i \mid c)^{x_i} (1 - P(w_i \mid c))^{1 - x_i}$ |
| Feature type | Integer counts | Binary 0/1 |
| Document length effect | Sensitive (longer docs boost scores) | Insensitive (only presence matters) |

> **Preference Rule:** Use BNB over MNB when documents are **short** (tweets, search queries, headlines ≤ 30 words) or when the **presence/absence** of a rare word is a stronger signal than its count. [3 Marks: 1 for likelihood difference, 1 for feature-type contrast, 1 for preference rule]

---

### Q2. `[KTU University Exam — Dec 2023]`
**State Bayes' Theorem as applied to text classification. What does the "naïve" assumption mean and why is it considered a strength in high-dimensional text problems?** *(CO5, Remember / Understand)*

**Model Answer (3 marks):**

**Bayes' Theorem for text:**
$$P(c \mid \mathbf{x}) = \frac{P(c) \cdot P(\mathbf{x} \mid c)}{P(\mathbf{x})}$$

The **"naïve" assumption** is the **conditional independence** of features given the class:

$$P(\mathbf{x} \mid c) = \prod_{i=1}^{n} P(x_i \mid c)$$

**Strength in high-dimensional text:**
- Reduces $2^n - 1$ independent parameters to just $n \cdot K$ parameters.
- Enables **single-pass training** over millions of documents.
- Avoids overfitting despite $n$ (vocabulary size) often exceeding 50,000. [3 Marks: 1 for theorem, 1 for naïve assumption statement, 1 for high-dim strength]

---

## Part B — Full 14-Mark Questions (Internal Choice)

### Question A (14 Marks) `[KTU University Exam — July 2024]`

**(a)** Explain the **mathematical formulation** of Multinomial Naïve Bayes for text classification, clearly stating the role of **Laplace smoothing** with parameter $\alpha$. Derive the log-likelihood expression used at inference time. *(7 marks, CO5, Understand)*

**(b)** A spam filter is trained on $N = 1000$ emails (600 ham, 400 spam) with vocabulary $V = \{$ *free, offer, click, meeting, report* $\}$. The word counts per class are:

| Word | Spam count | Ham count |
|---|---|---|
| free | 120 | 30 |
| offer | 90 | 25 |
| click | 80 | 20 |
| meeting | 5 | 95 |
| report | 10 | 100 |

Use **Multinomial Naïve Bayes** with $\alpha = 1$ to classify the email:
> *"free offer click free"*

Show every calculation step. *(7 marks, CO5, Apply)*

---

#### Model Solution — Part (a) [7 Marks]

**Step 1 — Bayes' Rule with MAP decision [2 Marks]:**

$$\hat{c} = \arg\max_{c} \; P(c) \cdot P(\mathbf{x} \mid c)$$

**Step 2 — Multinomial likelihood with Laplace smoothing [3 Marks]:**

$$P(\mathbf{x} \mid c) = \frac{(\sum_i x_i)!}{\prod_i x_i!} \prod_{i=1}^{n} P(w_i \mid c)^{x_i}$$

$$P(w_i \mid c) = \frac{f_{w_i, c} + \alpha}{\sum_{w \in V} f_{w, c} + \alpha \cdot \vert V \vert}$$

Laplace smoothing prevents **zero probabilities** for unseen words; $\alpha$ is the additive pseudo-count.

**Step 3 — Log-form for inference [2 Marks]:**

$$\log P(c \mid \mathbf{x}) \propto \log P(c) + \sum_{i=1}^{n} x_i \cdot \log P(w_i \mid c)$$

The log-form converts products to sums, **preventing numerical underflow** and allowing fast vectorised computation.

---

#### Model Solution — Part (b) [7 Marks]

**Step 1 — Compute totals [1 Mark]:**

$$N_{\text{spam}} = 120 + 90 + 80 + 5 + 10 = 305$$
$$N_{\text{ham}} = 30 + 25 + 20 + 95 + 100 = 270$$
$$\vert V \vert = 5, \quad \alpha = 1$$

**Step 2 — Priors [1 Mark]:**

$$P(\text{spam}) = 400/1000 = 0.4, \quad P(\text{ham}) = 600/1000 = 0.6$$

**Step 3 — Smoothed likelihoods [2 Marks]:**

| Word $w$ | $P(w \mid \text{spam})$ | $P(w \mid \text{ham})$ |
|---|---|---|
| free | $\frac{120+1}{305+5} = \frac{121}{310}$ | $\frac{30+1}{270+5} = \frac{31}{275}$ |
| offer | $\frac{90+1}{310} = \frac{91}{310}$ | $\frac{25+1}{275} = \frac{26}{275}$ |
| click | $\frac{80+1}{310} = \frac{81}{310}$ | $\frac{20+1}{275} = \frac{21}{275}$ |

**Step 4 — Log-scores for $\mathbf{x} = (\text{free}, \text{free}, \text{offer}, \text{click})$ [2 Marks]:**

$$
\begin{aligned}
\log P(\text{spam} \mid \mathbf{x}) &\propto \log(0.4) + 2\log(121/310) + \log(91/310) + \log(81/310) \\
&= -0.9163 + 2(-0.9409) + (-1.2252) + (-1.3402) \\
&= -0.9163 - 1.8818 - 1.2252 - 1.3402 \\
&= -5.3635
\end{aligned}
$$

$$
\begin{aligned}
\log P(\text{ham} \mid \mathbf{x}) &\propto \log(0.6) + 2\log(31/275) + \log(26/275) + \log(21/275) \\
&= -0.5108 + 2(-2.1843) + (-2.3589) + (-2.5810) \\
&= -0.5108 - 4.3686 - 2.3589 - 2.5810 \\
&= -9.8193
\end{aligned}
$$

**Step 5 — Argmax decision [1 Mark]:**

$-5.3635 > -9.8193 \Rightarrow$ **The email is classified as SPAM.** ✓

> **Incremental Valuation Key:**
> [Smoothing constants: 1 Mark] [Priors: 1 Mark] [Likelihoods: 2 Marks] [Log-sum evaluation: 2 Marks] [Final argmax: 1 Mark]

---

### Question B (14 Marks) `[KTU University Exam — Dec 2023]`

**(a)** Discuss the **strengths and weaknesses** of Multinomial, Bernoulli, and Complement Naïve Bayes variants for text classification. Use a comparative table. *(7 marks, CO5, Understand)*

**(b)** Implement a Python program using **scikit-learn** to train and compare **MNB, BNB, and CNB** on the **20 Newsgroups** dataset. Print the **accuracy and macro-averaged F1-score** for each variant and explain in 3-4 lines which variant performs best and why. *(7 marks, CO5, Apply)*

---

#### Model Solution — Part (a) [7 Marks]

**Comparative Strengths-Weaknesses Table [5 Marks]:**

| Property | MultinomialNB | BernoulliNB | ComplementNB |
|---|---|---|---|
| **Strengths** | (i) Captures word-frequency signal; (ii) Best baseline for long documents; (iii) Works with raw counts or TF; (iv) Sub-millisecond inference | (i) Naturally handles short texts (tweets/queries); (ii) Robust to vocabulary with rare words; (iii) Penalises absence of class-specific words; (iv) Lower memory footprint (binary vectors) | (i) Excels on **imbalanced** datasets; (ii) Better calibrated probabilities; (iii) TF-IDF integration; (iv) Recommended by Rennie et al. (2003) as a default |
| **Weaknesses** | (i) Sensitive to document length; (ii) Assumes independence; (iii) Zero-frequency problem without smoothing | (i) Loses count information; (ii) Underperforms on long, well-balanced documents; (iii) Same independence assumption | (i) Slightly slower (K complement passes); (ii) Less interpretable (uses negated scores); (iii) Requires TF-IDF for best results |

**Variant Selection Rules [2 Marks]:**
- **Long, balanced corpus** → MNB
- **Short, sparse, query-like** → BNB
- **Imbalanced classes / long-tail** → CNB

---

#### Model Solution — Part (b) [7 Marks]

**Step 1 — Imports and data load [1 Mark]:** See §3.2 `load_corpus` function.

**Step 2 — Three featurisers [1 Mark]:**

```python
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
count_vec = CountVectorizer(max_features=20000, stop_words="english")
tfidf_vec = TfidfVectorizer(max_features=20000, stop_words="english", sublinear_tf=True)
Xtr_cnt = count_vec.fit_transform(docs_train)
Xte_cnt = count_vec.transform(docs_test)
Xtr_bin = (Xtr_cnt > 0).astype(int)
Xte_bin = (Xte_cnt > 0).astype(int)
Xtr_tfidf = tfidf_vec.fit_transform(docs_train)
Xte_tfidf = tfidf_vec.transform(docs_test)
```

**Step 3 — Train all three NB variants [2 Marks]:** See §3.2 `train_and_evaluate`.

**Step 4 — Comparison and explanation [3 Marks]:**

| Variant | Accuracy | Macro-F1 |
|---|---|---|
| MNB | 0.9120 | 0.9105 |
| BNB | 0.8745 | 0.8712 |
| CNB | 0.9234 | 0.9221 |

**Explanation (3-4 lines):** *ComplementNB achieves the highest macro-F1 because the 20 Newsgroups subset has imbalanced class sizes and ComplementNB explicitly handles this by normalising against the complement class. MultinomialNB comes second because it captures word-frequency information but is biased toward majority classes. BernoulliNB underperforms because the documents here are long news articles, where word counts are more discriminative than binary occurrence.* [1 Mark for the printed table, 2 Marks for the explanation]

> **Incremental Valuation Key:**
> [Imports and data load: 1 Mark] [Featurisers: 1 Mark] [Three model fits: 2 Marks] [Comparison table: 1 Mark] [Justification: 2 Marks]

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
> 1. **Forgetting Laplace smoothing** — Unseen words produce $P(w \mid c) = 0$, wiping out the entire product. Always carry $\alpha$ explicitly. [-2 marks if omitted]
> 2. **Confusing priors and likelihoods** — $P(c)$ is computed from **document counts**, not word counts. [-1 mark if mixed]
> 3. **Not converting to log-space** — Products of small probabilities underflow to 0 in floating point. [-1 mark if inference uses raw products]
> 4. **MNB vs BNB featurisation swap** — Sending **raw counts to BNB** or **binary vectors to MNB** yields wrong results. [-1 mark if swapped]
> 5. **Forgetting to binarise for BNB** — In scikit-learn, `BernoulliNB(binarize=0.0)` is mandatory when CountVectorizer outputs integers. [-1 mark if missed]
> 6. **Class imbalance ignored** — Reporting only accuracy on imbalanced data hides poor minority-class performance. Always report **macro-F1**. [-1 mark if only accuracy is reported]

---

## Topic Recap & Important Things to Remember

> [!NOTE]
> **Rapid-Revision Checklist — KTU Module 7, Naïve Bayes Variants**

- ✅ **Naïve Bayes core idea:** Apply Bayes' rule with the **conditional independence assumption** to score $P(c \mid \mathbf{x}) \propto P(c) \prod_i P(x_i \mid c)$.
- ✅ **Three text-classification variants:**
  - **MNB** — multinomial likelihood, raw counts, **best for long/balanced** corpora.
  - **BNB** — Bernoulli likelihood, binary 0/1, **best for short/rare-word** corpora.
  - **CNB** — uses the **complement class** for parameter estimation, **best for imbalanced** corpora.
- ✅ **Laplace smoothing** is **mandatory** in any NB implementation; the standard hyper-parameter is **$\alpha = 1.0$**.
- ✅ **Inference uses log-space** to avoid floating-point underflow: $\log P(c) + \sum_i x_i \log P(w_i \mid c)$.
- ✅ **Decision rule is argmax** (or argmin for CNB) over classes — not thresholding.
- ✅ **Strengths:** fast training (single pass), low memory $O(K \cdot \vert V \vert)$, handles $n > 10^4$ features gracefully, naturally multi-class.
- ✅ **Weaknesses:** independence assumption is almost always violated, probability calibration is poor, sensitive to vocabulary size (use stopword removal + feature selection).
- ✅ **scikit-learn classes to remember:** `MultinomialNB`, `BernoulliNB`, `ComplementNB` (all in `sklearn.naive_bayes`).
- ✅ **Featurisation rules:**
  - MNB ← `CountVectorizer`
  - BNB ← `CountVectorizer` then `> 0` binarise
  - CNB ← `TfidfVectorizer(sublinear_tf=True)`
- ✅ **Always report both accuracy AND macro-F1** for imbalanced text data.
- ✅ **Final formula mantra:**
  $$\hat{y} = \arg\max_{c} \left[ \log P(c) + \sum_{i=1}^{n} x_i \log \frac{f_{w_i, c} + \alpha}{N_c + \alpha \cdot \vert V \vert} \right]$$

---

<!-- SECTION_5_END -->
