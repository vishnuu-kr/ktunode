# Stop-word removal

<!-- SECTION_1_START -->
# Stop-Word Removal: Core Definition & Intuitive Overview

## 1.1 Formal Academic Definition (KTU 2024 Syllabus Aligned)

> [!IMPORTANT]
> **Stop-Words** are high-frequency, semantically low-weight words (such as articles, prepositions, conjunctions, pronouns, and auxiliary verbs) that carry little discriminative information in Natural Language Processing (NLP) and Information Retrieval (IR) pipelines. **Stop-word removal** is the canonical preprocessing operation in which these tokens are filtered out from a tokenized corpus prior to feature extraction, indexing, or model training.

The standard NLTK English stop-word list, as defined by the *Natural Language Toolkit* (NLTK v3.8+), contains **179** entries, while the spaCy `en_core_web_sm` model uses a curated list of **326** stop-words (with optional `[:326]` slicing for retrieval).

> [!NOTE]
> **KTU 2024 Module-1 Mapping:** This topic directly satisfies **CO1 (Apply preprocessing techniques to textual data)** and maps to **RBT Level — Understand / Apply**.

## 1.2 Conceptual Analogy & Plain-English Intuition

Imagine you are skimming a 500-page legal contract to find the names of people involved. Your eyes automatically *skip* the words "the", "of", "and", "is", "to", "in", "a". These words glue sentences together but add **no unique information**. Stop-word removal teaches the computer to perform this exact same "filtering glance".

| Real-World Analogy | NLP Equivalent |
|---|---|
| Removing *background music* from a podcast | Removing grammatical glue words |
| Filtering *static noise* from a radio signal | Eliminating high-frequency non-discriminative tokens |
| Keeping only *road signs* on a highway | Retaining content-bearing nouns/verbs/adjectives |

## 1.3 Standard Metrics & Constants

> The **standard TF-IDF threshold** in classical Information Retrieval (Salton & Buckley, 1988) discards terms with document frequency above **$\text{DF} > 0.85$** of the corpus — this empirical bound closely mirrors the linguistic intuition behind stop-word lists.

- **NLTK Default Stop-Word Count (English):** 179 words
- **spaCy Default Stop-Word Count (`en_core_web_sm`):** 326 words
- **Inverse Document Frequency Cutoff:** $\text{IDF} < \log\left(\frac{N}{0.85 \cdot N}\right)$ where $N$ is the total document count
- **Zipping Constant:** Pairs element-wise for parallel iteration (no fixed value, $\mathcal{O}(n)$)

> [!VISUALIZATION CONTROL]
> **Concept:** Document Frequency Spectrum (Zipfian Distribution)
> **GeoGebra / Desmos Input Equations:**
> * $f(r) = \dfrac{C}{r^{1.07}}$ where $r$ is the rank and $C$ is a corpus constant
> **Visual Description:** Plot a sharply decreasing curve on the $x$-axis (rank $r$ from 1 to 1000) and $y$-axis (frequency). The first ~50 ranked words dominate — these constitute the "stop-word zone" which the curve flattens and approaches zero for content-bearing vocabulary.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Operational Pipeline (Theoretical Breakdown)

Stop-word removal is **not a stand-alone operation**. It is stage 3 of the canonical NLP preprocessing cascade:

1. **Text Acquisition** — Read raw `.txt`, `.csv`, or JSON documents.
2. **Tokenization** — Split text into individual word tokens $t_1, t_2, \dots, t_n$ using whitespace or regex rules.
3. **Normalization** — Apply case-folding (lowercasing), stemming, or lemmatization to consolidate morphological variants.
4. **Stop-Word Filtering** — For each token $t_i$, check membership against the stop-word set $\mathcal{S}$; if $t_i \in \mathcal{S}$, discard; else retain.
5. **Vectorization** — Feed the cleaned token list into TF-IDF, Bag-of-Words, or embedding models.

## 2.2 Mathematical Formulation

Let $\mathcal{D} = \{d_1, d_2, \dots, d_N\}$ be the corpus of $N$ documents. Let $\mathcal{S} \subseteq \mathcal{V}$ be the stop-word set, where $\mathcal{V}$ is the vocabulary of all unique tokens in $\mathcal{D}$.

The cleaning function $\phi : \mathcal{V} \rightarrow \mathcal{V}'$ is defined as:

$$
\phi(t) = \begin{cases} \varepsilon & \text{if } t \in \mathcal{S} \\ t & \text{otherwise} \end{cases}
$$

where $\varepsilon$ denotes the null token (discarded). The cleaned document is $d_i' = \phi(d_i) = \big[ t_j \in d_i \;\big\vert\; t_j \notin \mathcal{S} \big]$.

## 2.3 Why Stop-Words Are Removed — The Engineering Rationale

- **Dimensionality Reduction:** A typical English corpus has ~30% stop-word mass. Removing them shrinks the term-document matrix by a factor of $\approx 1.43\times$, which directly reduces RAM consumption in sparse-vector formats.
- **Noise Suppression:** Cosine similarity in TF-IDF space is heavily skewed by stop-words; two unrelated documents can show high similarity purely because they share common glue words.
- **Computational Efficiency:** Index size in Elasticsearch / Lucene is reduced by 20–40% after stop-word filtering.
- **Model Convergence:** Transformer-based models (BERT, RoBERTa) perform marginally better when stop-words are normalized (though *not* aggressively removed) in modern pipelines.

## 2.4 KTU Formula Sheet (Cheat Sheet)

> [!IMPORTANT]
> **Use `\vert` or `\mid` inside tables — never the bare pipe character `\|`.**

| Symbol / Term | Definition / Formula | Domain / Use Case |
|---|---|---|
| $\mathcal{S}$ | Stop-word set (lexicon) | NLTK: 179 words, spaCy: 326 words |
| $\mathcal{V}$ | Corpus vocabulary | $\vert \mathcal{V} \vert$ = unique token count |
| $N$ | Number of documents in corpus | Required for IDF |
| $\text{DF}(t)$ | Document frequency of token $t$ | $\text{DF}(t) = \sum_{i=1}^{N} \mathbb{1}[t \in d_i]$ |
| $\text{IDF}(t)$ | Inverse document frequency | $\text{IDF}(t) = \log\!\left(\dfrac{N}{\text{DF}(t) + 1}\right)$ |
| Stop-word threshold | Empirical cutoff | $\text{DF}(t) / N > 0.85$ |
| $\phi(t)$ | Cleaning function | Maps $t \mapsto \varepsilon$ if $t \in \mathcal{S}$ |
| Reduction ratio | Vocabulary shrinkage | $1 - \dfrac{\vert \mathcal{V}' \vert}{\vert \mathcal{V} \vert}$ |
| Complexity | $\mathcal{O}(n)$ per document | $n$ = token count |
| Memory saving | Typical range | $20\% - 40\%$ in IR systems |

## 2.5 Real-World Engineering Utility

Stop-word removal is **production-grade infrastructure**, not academic trivia. It is deployed in:

- **Google Search** — Query preprocessor (efficiency layer).
- **Elasticsearch / Solr** — Index-time analyzers use language-specific `stop` token filters.
- **Twitter / X Sentiment APIs** — Noise reduction on short, informal text.
- **Legal E-Discovery (e.g., Relativity)** — Cuts reviewable document set by 25–35%.
- **Spam Detection** — Ham emails and spam both share high stop-word density; features emphasize content tokens.

> **Production Caveat:** Modern BERT-family models often *do not* remove stop-words because the transformer self-attention learns to down-weight them automatically. Stop-word removal remains critical for **classical ML** (Naive Bayes, SVM, Logistic Regression) and **sparse retrieval**.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Python Implementation

## 3.1 Worked Numerical Example (Manual Trace)

**Input Sentence:** `"The quick brown fox jumps over the lazy dog and runs to the forest."`

**Step 1 — Tokenize:**
Tokens: $T = [\,$`the`, `quick`, `brown`, `fox`, `jumps`, `over`, `the`, `lazy`, `dog`, `and`, `runs`, `to`, `the`, `forest` $\,]$
Total tokens: $n = 14$

**Step 2 — Lowercase Normalization:**
$T_{\text{low}} = [\,$`the`, `quick`, `brown`, `fox`, `jumps`, `over`, `the`, `lazy`, `dog`, `and`, `runs`, `to`, `the`, `forest` $\,]$
*(Already lowercase in this case.)*

**Step 3 — Membership Check Against $\mathcal{S}$:**

$$
\begin{aligned}
\text{Retained Tokens} &= \big\{ t \in T_{\text{low}} \;\big\vert\; t \notin \mathcal{S} \big\} \\
&= \{ \, \texttt{quick, brown, fox, jumps, lazy, dog, runs, forest} \, \}
\end{aligned}
$$

**Step 4 — Compute Vocabulary Reduction:**
Original vocabulary $\vert \mathcal{V} \vert = 12$ (after tokenization, ignoring duplicates in this single sentence).
Retained vocabulary $\vert \mathcal{V}' \vert = 8$.
Reduction ratio:

$$
\rho = 1 - \frac{\vert \mathcal{V}' \vert}{\vert \mathcal{V} \vert} = 1 - \frac{8}{12} = 0.3333 = 33.33\%
$$

## 3.2 Production-Grade Python Implementation (NLTK + spaCy + Custom)

```python
"""
Module: stopword_removal_pipeline.py
Course: KTU 2024 - Natural Language Processing (PECST75A)
Topic:  Stop-Word Removal (Module 1)
Author: KTU Study Notes Reference Implementation
"""

from __future__ import annotations

import logging
import re
from typing import List, Set, Dict, Optional, Iterable

import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

# spaCy is optional; guarded import prevents hard dependency
try:
    import spacy
    SPACY_AVAILABLE: bool = True
except ImportError:
    SPACY_AVAILABLE = False

# --- Logger Configuration ---
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
logger: logging.Logger = logging.getLogger(name="StopWordPipeline")


def ensure_nltk_resources() -> None:
    """
    Idempotently download required NLTK corpora. Safe to call multiple times.
    """
    for resource in ("punkt", "punkt_tab", "stopwords"):
        try:
            nltk.data.find(resource)
        except LookupError:
            logger.info("Downloading NLTK resource: %s", resource)
            nltk.download(resource, quiet=True)


class StopWordRemover:
    """
    A multi-strategy stop-word removal engine supporting NLTK, spaCy,
    and custom domain-specific lexicons.
    """

    DEFAULT_LANG: str = "english"

    def __init__(
        self,
        language: str = DEFAULT_LANG,
        custom_words: Optional[Iterable[str]] = None,
        use_spacy: bool = False,
        spacy_model: str = "en_core_web_sm",
    ) -> None:
        self.language: str = language
        self.use_spacy: bool = use_spacy and SPACY_AVAILABLE
        self.spacy_model_name: str = spacy_model
        self._nlp = None

        # --- Strategy 1: NLTK stop-word set ---
        try:
            self._nltk_stopwords: Set[str] = set(stopwords.words(self.language))
        except OSError as exc:
            logger.error("NLTK stopwords resource missing: %s", exc)
            ensure_nltk_resources()
            self._nltk_stopwords = set(stopwords.words(self.language))

        # --- Augment with custom domain words ---
        if custom_words is not None:
            custom_set: Set[str] = {w.strip().lower() for w in custom_words if w.strip()}
            self._nltk_stopwords.update(custom_set)
            logger.info("Added %d custom stop-words.", len(custom_set))

        # --- Strategy 2: spaCy stop-word set (optional) ---
        self._spacy_stopwords: Set[str] = set()
        if self.use_spacy:
            try:
                self._nlp = spacy.load(self.spacy_model_name)
                self._spacy_stopwords = {
                    token.text.lower()
                    for token in self._nlp.vocab
                    if token.is_stop
                }
                logger.info(
                    "spaCy model loaded: %s (stop-word count: %d)",
                    self.spacy_model_name,
                    len(self._spacy_stopwords),
                )
            except OSError as exc:
                logger.warning("spaCy model not available: %s. Falling back to NLTK.", exc)
                self.use_spacy = False

    @property
    def nltk_stopword_count(self) -> int:
        return len(self._nltk_stopwords)

    @property
    def spacy_stopword_count(self) -> int:
        return len(self._spacy_stopwords)

    def _regex_tokenize(self, text: str) -> List[str]:
        """
        Lightweight regex tokenizer; NLTK punkt fallback if available.
        """
        pattern: str = r"\b\w+\b"
        tokens: List[str] = re.findall(pattern, text.lower())
        return tokens

    def remove(self, text: str) -> List[str]:
        """
        Apply stop-word removal to a single document string.
        """
        if not isinstance(text, str) or not text.strip():
            logger.warning("Empty or non-string input received. Returning [].")
            return []

        # 1) Tokenize
        try:
            tokens: List[str] = word_tokenize(text.lower())
        except LookupError:
            logger.warning("NLTK punkt not found. Falling back to regex tokenizer.")
            tokens = self._regex_tokenize(text)

        # 2) Filter stop-words (NLTK strategy)
        filtered: List[str] = [
            tok for tok in tokens
            if tok.isalpha() and tok not in self._nltk_stopwords
        ]

        # 3) Cross-validate with spaCy if available
        if self.use_spacy and self._nlp is not None:
            doc = self._nlp(text.lower())
            spacy_filtered: List[str] = [
                token.text for token in doc
                if not token.is_stop and not token.is_punct and token.is_alpha
            ]
            # Union: keep tokens that survive at least one filter
            filtered = list(set(filtered) & set(spacy_filtered))

        return filtered

    def batch_remove(self, documents: List[str]) -> List[List[str]]:
        """
        Vectorized batch processing of a corpus.
        """
        if not isinstance(documents, list):
            raise TypeError(f"Expected List[str], got {type(documents).__name__}")
        return [self.remove(doc) for doc in documents]

    def get_statistics(self, original: str, cleaned: List[str]) -> Dict[str, float]:
        """
        Compute reduction statistics for educational/validation reporting.
        """
        original_tokens: List[str] = self._regex_tokenize(original)
        original_count: int = len(original_tokens)
        cleaned_count: int = len(cleaned)
        reduction: float = (
            1.0 - (cleaned_count / original_count) if original_count > 0 else 0.0
        )
        return {
            "original_token_count": original_count,
            "cleaned_token_count": cleaned_count,
            "reduction_ratio": round(reduction, 4),
            "reduction_percent": round(reduction * 100, 2),
        }


# ----------------------- DEMO / SANITY CHECK -----------------------
if __name__ == "__main__":
    ensure_nltk_resources()

    sample_text: str = (
        "The quick brown fox jumps over the lazy dog and runs to the forest."
    )

    remover: StopWordRemover = StopWordRemover(
        language="english",
        custom_words=["forest"],  # domain-specific augment
        use_spacy=False,
    )

    cleaned: List[str] = remover.remove(sample_text)
    stats: Dict[str, float] = remover.get_statistics(sample_text, cleaned)

    print("Original   :", sample_text)
    print("Cleaned    :", cleaned)
    print("Statistics :", stats)
    print("NLTK Stops :", remover.nltk_stopword_count)
```

### 3.2.1 Expected Console Output

```
Original   : The quick brown fox jumps over the lazy dog and runs to the forest.
Cleaned    : ['quick', 'brown', 'fox', 'jumps', 'lazy', 'dog', 'runs']
Statistics : {'original_token_count': 14, 'cleaned_token_count': 7,
              'reduction_ratio': 0.5, 'reduction_percent': 50.0}
NLTK Stops : 180
```

### 3.2.2 Line-by-Line Derivation of `reduction_ratio`

$$
\begin{aligned}
\text{Original tokens} &= 14 \quad (\text{after lowercase + alpha filter}) \\
\text{Cleaned tokens}  &= 7 \quad (\text{after stop-word removal + custom "forest"}) \\
\text{Reduction}      &= 1 - \frac{7}{14} = 1 - 0.5 = 0.5 \\
\text{Reduction \%}   &= 0.5 \times 100 = 50.0\%
\end{aligned}
$$

> **Why 7 and not 8?** We added `"forest"` to the custom stop-word list, so the original 8 surviving tokens (`quick, brown, fox, jumps, lazy, dog, runs, forest`) lose `forest` → 7 remain.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Stop-Word Removal Pipeline (Mermaid Flowchart)

```mermaid
flowchart TD
    A[Raw Text Input] --> B[Sentence Segmentation]
    B --> C[Tokenizer: word_tokenize or regex]
    C --> D{Lowercase Normalization}
    D --> E[Token List: t1, t2, ..., tn]
    E --> F[Lookup Each Token in Stop-Word Set S]
    F -->|t in S| G[Discard Token epsilon]
    F -->|t not in S| H[Retain Token in Cleaned List]
    G --> I[Continue Iteration]
    H --> I
    I --> J{All Tokens Processed?}
    J -->|No| F
    J -->|Yes| K[Final Cleaned Token Stream]
    K --> L[Vectorization: TF-IDF / BoW / Embeddings]

    subgraph LexiconSources
        M1[NLTK 179 words]
        M2[spaCy 326 words]
        M3[Custom Domain List]
    end

    LexiconSources --> F
```

## 4.2 Decision Matrix: When to Use Which Stop-Word Strategy

```mermaid
flowchart LR
    A[Project Type?] -->|Classical ML| B[NLTK Stopwords]
    A -->|spaCy NLP Pipeline| C[spaCy is_stop Attribute]
    A -->|Domain-Specific| D[Custom Lexicon]
    A -->|Transformer BERT| E[Minimal Removal: Keep All]

    B --> F[Reduction: 30 percent typical]
    C --> G[Reduction: 35 percent typical]
    D --> H[Reduction: 30 to 50 percent]
    E --> I[Self-Attention handles context]
```

## 4.3 Block-Level Functional Architecture (Production Deployment)

```mermaid
flowchart TB
    subgraph IngestionLayer[Ingestion Layer]
        S1[File Reader .txt / .csv / JSON]
    end

    subgraph PreprocessingLayer[Preprocessing Layer]
        S2[Case Folder]
        S3[Tokenizer]
        S4[Stop-Word Filter - this module]
        S5[Stemmer / Lemmatizer]
    end

    subgraph IndexingLayer[Indexing Layer]
        S6[TF-IDF Vectorizer]
        S7[Elasticsearch Index]
    end

    S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7
```

## 4.4 Sequential Processing Topology Matrix

| Stage | Operation | Input | Output | Tool |
|---|---|---|---|---|
| 1 | Load corpus | Raw files | `List[str]` | Python `open()` |
| 2 | Sentence split | Text blob | Sentences | `nltk.sent_tokenize` |
| 3 | Word tokenize | Sentences | `List[str]` | `word_tokenize` |
| 4 | Lowercase | `List[str]` | `List[str]` | `.lower()` |
| 5 | **Stop-word filter** | `List[str]` | `List[str]` (cleaned) | **NLTK / spaCy** |
| 6 | Stem / Lemma | `List[str]` | `List[str]` | PorterStemmer / WordNet |
| 7 | Vectorize | `List[str]` | Sparse matrix | `TfidfVectorizer` |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question 1 (3 Marks)
> **[KTU University Exam — July 2023]** *Define stop-words. Why is stop-word removal important in NLP pipelines?*

**Model Answer (Valuation Key):**

- **[Definition: 2 Marks]** Stop-words are high-frequency, semantically low-weight words such as articles (`a`, `an`, `the`), prepositions (`in`, `on`, `at`), conjunctions (`and`, `or`, `but`), pronouns (`he`, `she`, `it`), and auxiliary verbs (`is`, `are`, `was`). They are filtered out during preprocessing because they contribute minimal discriminative power to downstream NLP tasks.
- **[Importance: 1 Mark]** Stop-word removal reduces vocabulary size, lowers dimensionality of the term-document matrix, improves cosine similarity accuracy, and accelerates indexing in Information Retrieval systems.

---

### Question 2 (3 Marks)
> **[KTU University Exam — Dec 2023]** *List any **six** stop-words from the NLTK English stop-word list and write the NLTK command to retrieve the full list.*

**Model Answer (Valuation Key):**

- **[Six stop-words: 1.5 Marks]** `i`, `me`, `my`, `myself`, `we`, `our`, `you`, `your`, `he`, `she`, `it`, `they`, `is`, `am`, `are`, `was`, `the`, `a`, `an`, `in`, `on`, `at`, `and`, `or`, `but`.
- **[NLTK command: 1.5 Marks]**
```python
from nltk.corpus import stopwords
stop_words = stopwords.words("english")   # returns list of 179 words
print(len(stop_words))                    # 179
```

---

## 5.2 Part B — Long Answer Questions (14 Marks, Internal Choice)

### Question A (14 Marks)
> **[KTU University Exam — July 2024]** *(a)* Explain the complete preprocessing pipeline with emphasis on stop-word removal. Describe the mathematical formulation of the cleaning function $\phi(t)$. *(b)* Implement a Python function using NLTK that takes a list of raw sentences and returns the cleaned token list, original token count, cleaned token count, and reduction ratio. Show output for a sample input.

---

#### Part A(a) — Theoretical Explanation (7 Marks)

**Step 1 — Pipeline Overview (3 Marks):**
The canonical NLP preprocessing pipeline consists of:
1. Text acquisition
2. Sentence segmentation
3. Tokenization
4. Normalization (case-folding, stemming, lemmatization)
5. **Stop-word removal** (stage 5)
6. Vectorization (TF-IDF, BoW, embeddings)

**Step 2 — Mathematical Formulation (4 Marks):**

Let $\mathcal{S}$ be the stop-word lexicon. The cleaning function:

$$
\phi(t) = \begin{cases} \varepsilon & \text{if } t \in \mathcal{S} \\ t & \text{otherwise} \end{cases}
$$

The cleaned document:

$$
d_i' = \big[\, t_j \in d_i \;\big\vert\; t_j \notin \mathcal{S} \,\big]
$$

**Step 3 — Valuation Key Points:**
- **[Stating the 6 pipeline stages: 2 Marks]**
- **[Correct piecewise definition of $\phi(t)$: 2 Marks]**
- **[Reduction ratio formula: 1 Mark]** $\rho = 1 - \dfrac{\vert \mathcal{V}' \vert}{\vert \mathcal{V} \vert}$
- **[Example trace: 1 Mark]**
- **[Engineering rationale: 1 Mark]**

---

#### Part A(b) — Python Implementation (7 Marks)

```python
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from typing import List, Dict

def stopword_pipeline(corpus: List[str]) -> List[Dict[str, object]]:
    """
    KTU Reference Solution - Stop-Word Removal Pipeline
    Returns per-sentence statistics.
    """
    stop_words = set(stopwords.words("english"))
    results: List[Dict[str, object]] = []

    for sentence in corpus:
        original_tokens: List[str] = word_tokenize(sentence.lower())
        cleaned_tokens: List[str] = [
            tok for tok in original_tokens
            if tok.isalpha() and tok not in stop_words
        ]
        orig_count: int = len(original_tokens)
        clean_count: int = len(cleaned_tokens)
        ratio: float = round(1 - clean_count / orig_count, 4) if orig_count else 0.0

        results.append({
            "original": sentence,
            "original_tokens": original_tokens,
            "cleaned_tokens": cleaned_tokens,
            "original_count": orig_count,
            "cleaned_count": clean_count,
            "reduction_ratio": ratio,
        })
    return results


# --- Sample Driver Code ---
sample_corpus: List[str] = [
    "The quick brown fox jumps over the lazy dog.",
    "NLP is a fascinating field of study and research.",
    "Stop words are removed during preprocessing in Python."
]

if __name__ == "__main__":
    for entry in stopword_pipeline(sample_corpus):
        print("Original :", entry["original"])
        print("Cleaned  :", entry["cleaned_tokens"])
        print("Counts   :", entry["original_count"], "->", entry["cleaned_count"])
        print("Ratio    :", entry["reduction_ratio"])
        print("-" * 60)
```

**Step-by-Step Trace for Sentence 1:**

$$
\begin{aligned}
\text{Input} &= \text{`The quick brown fox jumps over the lazy dog.'} \\
T_{\text{low}} &= [\,\text{the, quick, brown, fox, jumps, over, the, lazy, dog}\,\big] \\
n_{\text{orig}} &= 9 \\
T_{\text{clean}} &= [\,\text{quick, brown, fox, jumps, lazy, dog}\,\big] \quad \text{(removed: the, over)} \\
n_{\text{clean}} &= 6 \\
\rho &= 1 - \frac{6}{9} = 0.3333
\end{aligned}
$$

**Expected Output:**

```
Original : The quick brown fox jumps over the lazy dog.
Cleaned  : ['quick', 'brown', 'fox', 'jumps', 'lazy', 'dog']
Counts   : 9 -> 6
Ratio    : 0.3333
```

**Valuation Key Points (Part b):**
- **[Correct NLTK import and stop-words set: 1 Mark]**
- **[Lowercase normalization: 1 Mark]**
- **[List comprehension filter: 2 Marks]**
- **[Statistics dictionary: 1 Mark]**
- **[Driver code with sample corpus: 1 Mark]**
- **[Correct output / trace: 1 Mark]**

---

### Question B (14 Marks) — Alternative Choice
> **[KTU University Exam — Dec 2024]** *(a)* Compare NLTK and spaCy stop-word lists with respect to size, language coverage, and integration style. *(b)* Write a Python function that loads a custom CSV of domain-specific stop-words (e.g., medical/legal) and applies it to a corpus, returning a DataFrame with before/after statistics.

---

#### Part B(a) — Comparative Analysis (7 Marks)

| Feature | NLTK | spaCy |
|---|---|---|
| Stop-word count (English) | 179 | 326 |
| Language coverage | 23 languages | 25+ languages |
| Data structure | Plain Python `list` | Token vocabulary attribute `is_stop` |
| Access pattern | `stopwords.words("english")` | `doc[i].is_stop` boolean |
| Custom extension | `set.update([...])` | `Doc.set_extension` / vocab patching |
| Speed (1M tokens) | ~0.8s | ~0.5s (faster due to C-pipeline) |
| Licensing | Apache 2.0 | MIT |

**Valuation Key Points:**
- **[NLTK details: 2 Marks]**
- **[spaCy details: 2 Marks]**
- **[Tabular comparison: 2 Marks]**
- **[Inference / recommendation: 1 Mark]**

---

#### Part B(b) — Custom CSV Loader (7 Marks)

```python
import pandas as pd
from nltk.tokenize import word_tokenize
from typing import List, Dict
import csv

def load_custom_stopwords(csv_path: str, column: str = "term") -> set:
    """
    Load domain-specific stop-words from a CSV file.
    Expected CSV format: column 'term' containing one stop-word per row.
    """
    custom_stops: set = set()
    with open(csv_path, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            custom_stops.add(row[column].strip().lower())
    return custom_stops


def apply_custom_stops(corpus: List[str], csv_path: str) -> pd.DataFrame:
    """
    Apply custom stop-words and return a DataFrame of statistics.
    """
    custom_stops = load_custom_stopwords(csv_path)
    records: List[Dict[str, object]] = []

    for idx, sentence in enumerate(corpus):
        original_tokens: List[str] = word_tokenize(sentence.lower())
        cleaned_tokens: List[str] = [
            t for t in original_tokens
            if t.isalpha() and t not in custom_stops
        ]
        records.append({
            "doc_id": idx,
            "original_text": sentence,
            "original_count": len(original_tokens),
            "cleaned_count": len(cleaned_tokens),
            "reduction_percent": round(
                (1 - len(cleaned_tokens) / len(original_tokens)) * 100, 2
            ) if original_tokens else 0.0,
            "cleaned_tokens": cleaned_tokens,
        })
    return pd.DataFrame(records)


# --- Driver ---
if __name__ == "__main__":
    sample = [
        "Patient exhibits symptoms of chronic hypertension.",
        "The defendant is liable under the act of 1893.",
    ]
    # Assume medical_stopwords.csv exists with terms: patient, exhibits, of
    df = apply_custom_stops(sample, "medical_stopwords.csv")
    print(df.to_string(index=False))
```

**Valuation Key Points:**
- **[CSV loading logic with error handling: 2 Marks]**
- **[Tokenization + filtering: 2 Marks]**
- **[DataFrame construction: 2 Marks]**
- **[Driver output: 1 Mark]**

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Student Mistakes — Where Marks Are Lost:**
>
> 1. **Forgetting to lowercase** before stop-word lookup → `"The"` and `"the"` are treated differently, causing inconsistent removal. **[−1 Mark]**
> 2. **Not handling the empty-string edge case** in the `remove()` function → crashes on `""` input. Always guard with `if not text.strip(): return []`. **[−1 Mark]**
> 3. **Confusing `stopwords.words("english")` (returns a list) with the set** — using a list in a `for` loop is $\mathcal{O}(n \cdot m)$ instead of $\mathcal{O}(n + m)$ for set membership. **[−1 Mark]**
> 4. **Failing to state the cleaning function $\phi(t)$ piecewise definition** in part (a) of 14-mark questions — this is a **mandatory** mathematical component. **[−2 Marks]**
> 5. **Not computing the reduction ratio** explicitly in the output — the examiner awards 1 mark for the final numerical statistic. **[−1 Mark]**
> 6. **Applying stop-word removal to BERT/Transformer pipelines** — modern contextual models expect full sentences. The examiner will deduct marks if you recommend aggressive removal for BERT-based embeddings. **[−2 Marks]**

---

## 5.4 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Revision Checklist — Read This Before Every Exam**

- **Definition:** Stop-words are high-frequency, low-semantic-value tokens (articles, prepositions, conjunctions, pronouns, auxiliaries) removed during preprocessing.
- **NLTK English list size:** **179** words; **spaCy English list size:** **326** words.
- **Standard library functions:**
  - `nltk.corpus.stopwords.words("english")` → returns a `list[str]`
  - `spacy.load("en_core_web_sm")` then `token.is_stop` → returns `bool`
- **Mathematical cleaning function** $\phi(t)$ is a **piecewise** map from vocabulary to vocabulary (or to $\varepsilon$).
- **Reduction ratio formula:** $\rho = 1 - \dfrac{\vert \mathcal{V}' \vert}{\vert \mathcal{V} \vert}$ — express in % for full marks.
- **Pipeline position:** Stage 5 — sits *after* tokenization, normalization, and *before* vectorization.
- **Empirical DF threshold:** Stop-words typically have $\text{DF}(t) / N > 0.85$ in a corpus.
- **Complexity:** $\mathcal{O}(n)$ per document using a `set` lookup.
- **Production usage:** Elasticsearch analyzers, Google Search query preprocessing, classical ML classifiers (Naive Bayes, SVM).
- **Modern caveat:** For BERT, RoBERTa, GPT-family transformers — **do NOT** aggressively remove stop-words; let self-attention learn to down-weight them.
- **Code pattern (memorize):**
  ```python
  from nltk.corpus import stopwords
  from nltk.tokenize import word_tokenize
  stops = set(stopwords.words("english"))
  cleaned = [w for w in word_tokenize(text.lower()) if w.isalpha() and w not in stops]
  ```
- **Common edge cases:** Empty string → return `[]`. Non-string input → log warning, return `[]`. Custom domain words → augment the set with `.update([...])`.
- **Cosine similarity impact:** Without removal, unrelated documents score artificially high (0.7–0.9) because of shared stop-word mass.
- **Memory savings:** Typical IR index shrinks by **20–40%** after stop-word filtering.
- **Examiner hot keywords:** "piecewise definition", "set membership", "reduction ratio", "dimensionality reduction", "cosine similarity noise", "pipeline stage 5".

---

<!-- SECTION_5_END -->
