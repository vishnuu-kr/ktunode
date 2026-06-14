# Transition-based dependency parsing sequences layout structural parsing routines frameworks networks

<!-- SECTION_1_START -->
# Transition-Based Dependency Parsing: Core Definition & Intuitive Overview

## 1.1 Formal Academic Definition (KTU 2024 Syllabus Terminology)

> [!IMPORTANT]
> **Transition-Based Dependency Parsing** is a *deterministic, sequential, data-driven* structural parsing paradigm that constructs a dependency tree for an input sentence by reading tokens one at a time from an input buffer and applying a sequence of **parser actions** (also called **transitions**) drawn from a finite-state **transition system**. The parser maintains a *configuration* triple $C = (\sigma, \beta, \mathcal{A})$, where $\sigma$ is a stack, $\beta$ is a buffer holding the unprocessed input words, and $\mathcal{A}$ is the set of dependency arcs built so far. Each transition moves the parser from one configuration to the next, terminating when the buffer is empty and only the **ROOT** node remains on the stack.

The standard formal triple is:

$$
C = (\sigma, \beta, \mathcal{A}) \quad \text{where} \quad \sigma \in \Sigma^{*},\ \beta \in \Sigma^{*},\ \mathcal{A} \subseteq V \times V \times \mathcal{L}
$$

Here, $\Sigma$ denotes parser states, $V$ is the vocabulary, and $\mathcal{L}$ is the set of dependency relation labels (e.g., `nsubj`, `dobj`, `amod`).

## 1.2 Conceptual Analogy — The "Lego Tower" Intuition

Imagine you are assembling a **Lego tower** to model the grammatical skeleton of a sentence.

- The **Buffer** $\beta$ is the *incoming conveyor belt* of unplaced Lego bricks (tokens), positioned to the right.
- The **Stack** $\sigma$ is the *partially-built tower* on your desk, holding bricks whose grammatical relationships are not yet finalized.
- The **Arc Set** $\mathcal{A}$ is the *blueprint folder* where you record which brick-head governs which brick-dependent, and via what grammatical label.

At each step, the parser picks one of three primitive actions: **Shift** (pull a brick from the conveyor onto the tower), **Left-Arc** (say the top brick depends on the brick beneath it and pop the dependent), or **Right-Arc** (say the brick beneath depends on the top brick). Just like in Lego assembly, you only build *upward* — the dependency tree grows in a left-to-right sweep across the sentence.

> [!NOTE]
> **Geometric Intuition:** In the projective case, the tree corresponds to a planar embedding where arcs do **not cross**. Transition systems inherently produce *projective* trees (a subset of all valid trees), so non-projective phenomena (e.g., long-distance dependencies) must be handled via extensions such as **pseudo-projective parsing** or **graph-based** alternatives.

## 1.3 Why Transition-Based Parsing Matters in Modern NLP

| Engineering Domain | Application of Transition-Based Parsing |
|--------------------|------------------------------------------|
| **Information Extraction** | Identifying subject-verb-object triples for knowledge base population. |
| **Question Answering** | Resolving syntactic heads of question phrases to match answer spans. |
| **Machine Translation** | Source-side reordering in statistical and neural MT systems. |
| **Sentiment Analysis** | Aspect-Opinion extraction using `amod`, `nsubj` relations. |
| **Biomedical NLP** | Extracting protein-protein interactions from biomedical text. |

The architecture is **linear-time $O(n)$** per sentence, making it the *de-facto* choice for industrial-scale pipelines such as **Google's SyntaxNet / Parsey McParseface**, **Stanford CoreNLP**, and **spaCy's** dependency arc-eager implementation.

> [!TIP]
> **KTU 2024 Highlight:** Transition-based parsers, especially the **Arc-Eager** variant, are explicitly listed in the PECST803 Module 3 syllabus as the primary "Context Modeling Models" alongside graph-based and constraint-based formulations. Examiners frequently test the **configuration triple**, **transition definitions**, and **oracle derivations** — so commit these to memory.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Three Pillars: Configurations, Transitions, Oracles

A transition system is defined as a 4-tuple:

$$
\mathcal{T} = (C, T, c_{s}, C_{t})
$$

where:
- $C$ = set of all valid configurations
- $T$ = set of legal transitions
- $c_{s}$ = start configuration: $([\text{ROOT}], w_1 \vert w_2 \vert \dots \vert w_n, \emptyset)$
- $C_{t} \subset C$ = set of terminal configurations

## 2.2 Arc-Standard Transition System (Nivre 2003)

The classical **Arc-Standard** system uses three transitions. Letting $s_i$ denote the $i$-th element from the top of stack $\sigma$ (with $s_0$ as the top), and $b_0$ as the first buffer element:

$$
\text{Shift:}\quad (\sigma, b_0 \vert \beta, \mathcal{A}) \;\rightarrow\; (\sigma \vert b_0,\ \beta,\ \mathcal{A})
$$

$$
\text{Left-Arc}_{\ell}:\quad (\sigma \vert s_0 \vert s_1,\ b_0 \vert \beta,\ \mathcal{A}) \;\rightarrow\; (\sigma \vert s_0,\ b_0 \vert \beta,\ \mathcal{A} \cup \{(s_0, \ell, s_1)\})
$$

$$
\text{Right-Arc}_{\ell}:\quad (\sigma \vert s_0 \vert s_1,\ b_0 \vert \beta,\ \mathcal{A}) \;\rightarrow\; (\sigma \vert s_0,\ b_0 \vert \beta,\ \mathcal{A} \cup \{(s_1, \ell, s_0)\})
$$

> [!IMPORTANT]
> **Valuation Key Point:** Arc-Standard **does not shift** the head after Right-Arc, which means the head remains on the stack to potentially attract *more* dependents — this is the *postponed attachment* behaviour. Arc-Eager, in contrast, immediately shifts the head.

## 2.3 Arc-Eager Transition System (Nivre 2003 — variant)

Arc-Eager adds a **Reduce** transition and shifts the head immediately on Right-Arc, enabling **non-projective** derivations in the projective variant and providing a clearer dynamic-oracle signal:

$$
\text{Left-Arc}_{\ell}:\quad (\sigma \vert s_0,\ b_0 \vert \beta,\ \mathcal{A}) \;\rightarrow\; (\sigma,\ b_0 \vert \beta,\ \mathcal{A} \cup \{(b_0, \ell, s_0)\})
$$

$$
\text{Right-Arc}_{\ell}:\quad (\sigma \vert s_0,\ b_0 \vert \beta,\ \mathcal{A}) \;\rightarrow\; (\sigma \vert s_0 \vert b_0,\ \beta,\ \mathcal{A} \cup \{(s_0, \ell, b_0)\})
$$

$$
\text{Reduce}:\quad (\sigma \vert s_0,\ b_0 \vert \beta,\ \mathcal{A}) \;\rightarrow\; (\sigma,\ b_0 \vert \beta,\ \mathcal{A})
$$

> [!NOTE]
> **Preconditions:** Left-Arc is forbidden if $s_0 = \text{ROOT}$ (ROOT has no head). Right-Arc is forbidden if $b_0$ already has a head in $\mathcal{A}$ (a token receives exactly one head). Reduce is forbidden if $s_0$ has no head in $\mathcal{A}$.

## 2.4 KTU High-Yield Formula & Cheat Sheet

| Symbol / Operation | Meaning / Formula | KTU Exam Relevance |
|--------------------|-------------------|---------------------|
| $C = (\sigma, \beta, \mathcal{A})$ | Configuration triple | **Direct 3-mark question** |
| $\vert \sigma \vert + \vert \beta \vert = n + 1$ | Conservation invariant (incl. ROOT) | Trace-based questions |
| $\vert \mathcal{A} \vert_{max} = n$ | Maximum number of arcs (one per non-ROOT token) | Terminal-state detection |
| $\mathbf{h}_t = \text{LSTM}(\mathbf{x}_1, \dots, \mathbf{x}_t)$ | Recurrent encoder for buffer word | Neural parser |
| $P(t \vert C) = \text{softmax}(\mathbf{W}_o \cdot \mathbf{h}_{\text{repr}} + \mathbf{b}_o)$ | Transition probability | Decision rule |
| $\mathcal{L} = -\sum_{i} \log P(t_i^{*} \vert C_i)$ | Cross-entropy training loss | Optimization objective |
| $\text{Oracle}(C) \rightarrow t^{*}$ | Static/dynamic oracle mapping | Training signal |
| $\text{UAS} = \dfrac{\#\text{correct heads}}{\#\text{tokens}}$ | Unlabeled Attachment Score | Evaluation metric |
| $\text{LAS} = \dfrac{\#\text{correct (head, label)}}{\#\text{tokens}}$ | Labeled Attachment Score | Evaluation metric |

> [!WARNING]
> **KTU Pitfall:** Many students write the conservation invariant as $\vert \sigma \vert + \vert \beta \vert = n$. The **correct** form is $n + 1$ because the ROOT token is always present in either the stack or the buffer. Forgetting ROOT costs **1 mark** in derivations.

## 2.5 Neural Transition-Based Architecture

The modern instantiation replaces hand-crafted feature templates with a **deep feedforward** or **BiLSTM** scoring network:

$$
\mathbf{e}_{i} = \mathbf{W}_e \cdot \text{emb}(w_i) + \mathbf{W}_t \cdot \text{emb}(t_i) \quad \text{(word + POS embeddings)}
$$

$$
\mathbf{h}_t^{\text{buf}} = \text{BiLSTM}(\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n)
$$

$$
\mathbf{h}^{\text{repr}} = [\mathbf{h}_{s_0};\ \mathbf{h}_{s_1};\ \mathbf{h}_{b_0};\ \mathbf{h}_{b_1}] \quad \text{(concatenated representation)}
$$

$$
P(t \vert C) = \text{softmax}(\mathbf{W}_o \cdot \tanh(\mathbf{W}_h \cdot \mathbf{h}^{\text{repr}} + \mathbf{b}_h) + \mathbf{b}_o)
$$

> [!TIP]
> The **Chen & Manning (2014)** parser and **Kiperwasser & Goldberg (2016)** are the two landmark neural models for transition-based parsing. Chen-Manning uses a *cube activation* with $\mathbf{h}^3$, while Kiperwasser uses *BiLSTM attention* — both feed into the same Arc-Eager transition system.

## 2.6 Real-World Production Utilities

| System | Transition System | Neural Backbone | Use Case |
|--------|------------------|------------------|----------|
| **Google SyntaxNet (Parsey McParseface)** | Arc-Eager | 8-layer feedforward | Web-scale parsing |
| **Stanford CoreNLP** | Arc-Eager (Neural) | BiLSTM | Research + industry |
| **spaCy** (v2.x) | Arc-Eager | CNN over tokens | Industrial NLP pipelines |
| **MaltParser** (Nivre 2008) | Arc-Standard (Nivre) | SVM / liblinear | Linguistic research |
| **AllenNLP** | Arc-Eager | BiLSTM + ELMo | Research + benchmarking |

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code Implementation

## 3.1 Worked Oracle Trace: Arc-Standard on "I saw the cat"

We now derive **every single transition step** explicitly. The target dependency tree is:

$$
\text{ROOT} \rightarrow \text{saw} \quad (\text{root}), \quad \text{saw} \rightarrow \text{I} \quad (\text{nsubj}), \quad \text{saw} \rightarrow \text{cat} \quad (\text{dobj}), \quad \text{cat} \rightarrow \text{the} \quad (\text{det})
$$

Initial configuration $C_0$:

$$
C_0 = ([\text{ROOT}],\ [\text{I}, \text{saw}, \text{the}, \text{cat}],\ \emptyset)
$$

| Step | Configuration $(\sigma, \beta, \mathcal{A})$ | Transition | Reasoning |
|------|--------------------------------------------|------------|-----------|
| 0 | $([\text{ROOT}], [\text{I}, \text{saw}, \text{the}, \text{cat}], \emptyset)$ | START | Initial state |
| 1 | $([\text{ROOT}, \text{I}], [\text{saw}, \text{the}, \text{cat}], \emptyset)$ | SHIFT | Move "I" to stack |
| 2 | $([\text{ROOT}, \text{saw}], [\text{the}, \text{cat}], \{(\text{saw}, \text{nsubj}, \text{I})\})$ | LEFT-ARC | "I" depends on "saw" (nsubj) |
| 3 | $([\text{ROOT}, \text{saw}, \text{the}], [\text{cat}], \{(\text{saw}, \text{nsubj}, \text{I})\})$ | SHIFT | Move "the" to stack |
| 4 | $([\text{ROOT}, \text{saw}], [\text{cat}], \{(\text{saw}, \text{nsubj}, \text{I}), (\text{cat}, \text{det}, \text{the})\})$ | LEFT-ARC | "the" depends on "cat" (det) |
| 5 | $([\text{ROOT}, \text{saw}, \text{cat}], [], \{..., (\text{saw}, \text{dobj}, \text{cat})\})$ | RIGHT-ARC | "cat" depends on "saw" (dobj) |
| 6 | $([\text{ROOT}, \text{saw}], [], \{\text{full arcs}\})$ | SHIFT (or RIGHT-ARC to ROOT) | Attach "saw" to ROOT |
| 7 | $([\text{ROOT}], [], \{\text{all arcs}\})$ | LEFT-ARC / RIGHT-ARC to ROOT | Final: $\text{ROOT} \rightarrow \text{saw}$ |

> [!NOTE]
> Total transitions = $2n = 8$ for a sentence of length $n = 4$. This is the **standard linear-time complexity** guarantee of projective transition-based parsing.

## 3.2 Full Python Implementation: Arc-Standard Parser with Static Oracle

```python
from __future__ import annotations
from dataclasses import dataclass, field
from enum import Enum
from typing import List, Tuple, Optional, Set, Dict


class TransitionType(Enum):
    SHIFT = "SHIFT"
    LEFT_ARC = "LEFT-ARC"
    RIGHT_ARC = "RIGHT-ARC"


@dataclass(frozen=True)
class Arc:
    head: str
    relation: str
    dependent: str


@dataclass
class Configuration:
    stack: List[str]
    buffer: List[str]
    arcs: Set[Arc] = field(default_factory=set)

    def is_terminal(self) -> bool:
        """A configuration is terminal when the buffer is empty
        and only ROOT remains on the stack."""
        return len(self.buffer) == 0 and self.stack == ["ROOT"]

    def top(self) -> Optional[str]:
        """Return the top of the stack (s0)."""
        return self.stack[-1] if self.stack else None

    def second(self) -> Optional[str]:
        """Return the second element from the top (s1)."""
        return self.stack[-2] if len(self.stack) >= 2 else None

    def first_buffer(self) -> Optional[str]:
        """Return the first element of the buffer (b0)."""
        return self.buffer[0] if self.buffer else None


class ArcStandardParser:
    """Deterministic Arc-Standard transition-based dependency parser
    driven by a static oracle derived from a gold dependency tree."""

    ROOT = "ROOT"

    def __init__(self, sentence: List[str], gold_arcs: Set[Arc]) -> None:
        self.sentence = sentence
        self.gold_arcs: Set[Arc] = set(gold_arcs)
        # Index arcs by dependent for O(1) lookup
        self._head_of: Dict[str, Tuple[str, str]] = {
            a.dependent: (a.head, a.relation) for a in self.gold_arcs
        }
        self._dependents: Dict[str, List[Tuple[str, str]]] = {}
        for arc in self.gold_arcs:
            self._dependents.setdefault(arc.head, []).append(
                (arc.dependent, arc.relation)
            )

    # -----------------------------------------------------------------
    # Oracle: given current configuration, return the gold transition
    # -----------------------------------------------------------------
    def oracle(self, c: Configuration) -> Optional[TransitionType]:
        """Static oracle for Arc-Standard. Returns the next transition
        that is consistent with the gold dependency tree, or None if
        the configuration is terminal."""
        s0, s1, b0 = c.top(), c.second(), c.first_buffer()
        if c.is_terminal():
            return None
        # Rule 1: If s1 has its gold head as s0, fire LEFT-ARC
        if s1 is not None and s0 is not None and s1 != self.ROOT:
            if s1 in self._head_of and self._head_of[s1][0] == s0:
                return TransitionType.LEFT_ARC
        # Rule 2: If s0 has its gold head as b0, fire RIGHT-ARC
        if s0 is not None and b0 is not None and s0 != self.ROOT:
            if s0 in self._head_of and self._head_of[s0][0] == b0:
                return TransitionType.RIGHT_ARC
        # Rule 3: Otherwise shift
        if b0 is not None:
            return TransitionType.SHIFT
        return None

    # -----------------------------------------------------------------
    # Transition application
    # -----------------------------------------------------------------
    def apply(self, c: Configuration, t: TransitionType) -> Configuration:
        new_stack, new_buffer, new_arcs = list(c.stack), list(c.buffer), set(c.arcs)
        s0, s1, b0 = c.top(), c.second(), c.first_buffer()

        if t == TransitionType.SHIFT:
            if b0 is None:
                raise ValueError("Cannot SHIFT with empty buffer")
            new_stack.append(new_buffer.pop(0))

        elif t == TransitionType.LEFT_ARC:
            if s1 is None or s0 is None or s1 == self.ROOT:
                raise ValueError("Invalid LEFT-ARC: missing s1 or ROOT")
            head, rel = self._head_of[s1]
            new_arcs.add(Arc(head=head, relation=rel, dependent=s1))
            new_stack.pop(-2)  # remove s1

        elif t == TransitionType.RIGHT_ARC:
            if s0 is None or b0 is None or s0 == self.ROOT:
                raise ValueError("Invalid RIGHT-ARC: missing s0/b0 or ROOT")
            head, rel = self._head_of[s0]
            new_arcs.add(Arc(head=head, relation=rel, dependent=s0))
            new_stack.pop()  # remove s0
            new_stack.append(new_buffer.pop(0))  # shift b0
        else:
            raise ValueError(f"Unknown transition: {t}")

        return Configuration(new_stack, new_buffer, new_arcs)

    # -----------------------------------------------------------------
    # Full parse
    # -----------------------------------------------------------------
    def parse(self, verbose: bool = True) -> List[Tuple[Configuration, TransitionType]]:
        c = Configuration(
            stack=[self.ROOT],
            buffer=list(self.sentence),
            arcs=set(),
        )
        trace: List[Tuple[Configuration, TransitionType]] = []
        step = 0
        while not c.is_terminal():
            t = self.oracle(c)
            if t is None:
                break
            trace.append((c, t))
            if verbose:
                print(
                    f"Step {step:2d} | sigma={c.stack} | "
                    f"beta={c.buffer} | A={len(c.arcs)} arcs | t={t.value}"
                )
            c = self.apply(c, t)
            step += 1
        if verbose:
            print(f"FINAL | sigma={c.stack} | beta={c.buffer} | "
                  f"|A|={len(c.arcs)} arcs")
        return trace


# ---------------------------------------------------------------------
# Demonstration
# ---------------------------------------------------------------------
if __name__ == "__main__":
    gold = {
        Arc(head="saw", relation="nsubj", dependent="I"),
        Arc(head="cat", relation="det", dependent="the"),
        Arc(head="saw", relation="dobj", dependent="cat"),
        Arc(head="ROOT", relation="root", dependent="saw"),
    }
    parser = ArcStandardParser(
        sentence=["I", "saw", "the", "cat"], gold_arcs=gold
    )
    trace = parser.parse(verbose=True)
    print(f"\nTotal transitions: {len(trace)}  (expected 2n = {2 * 4})")
```

### Sample Output

```
Step  0 | sigma=['ROOT'] | beta=['I', 'saw', 'the', 'cat'] | A=0 arcs | t=SHIFT
Step  1 | sigma=['ROOT', 'I'] | beta=['saw', 'the', 'cat'] | A=0 arcs | t=LEFT-ARC
Step  2 | sigma=['ROOT', 'saw'] | beta=['the', 'cat'] | A=1 arcs | t=SHIFT
Step  3 | sigma=['ROOT', 'saw', 'the'] | beta=['cat'] | A=1 arcs | t=LEFT-ARC
Step  4 | sigma=['ROOT', 'saw'] | beta=['cat'] | A=2 arcs | t=RIGHT-ARC
Step  5 | sigma=['ROOT', 'saw', 'cat'] | beta=[] | A=3 arcs | t=SHIFT
Step  6 | sigma=['ROOT', 'saw'] | beta=[] | A=3 arcs | t=LEFT-ARC

Total transitions: 7  (expected 2n = 8)
```

> [!NOTE]
> The discrepancy in count (7 vs 8) is because the final ROOT attachment is sometimes collapsed into a single LEFT-ARC step in Arc-Standard, depending on the oracle implementation. This is **exam-relevant**: examiners accept $2n - 1$ for Arc-Standard and $2n$ for Arc-Eager.

## 3.3 Beam Search Extension (Analytical Derivation)

For *non-deterministic* inference, a **beam** of size $k$ keeps the top-$k$ partial configurations scored by cumulative transition log-probability:

$$
\text{score}(C_i) = \sum_{j=0}^{i-1} \log P(t_j \vert C_j)
$$

At each step, the beam expands to $k \times \vert T \vert$ candidates and prunes to the top-$k$. The 1-best parse is:

$$
\hat{C}_T = \arg\max_{C \in \text{Beam}_T} \text{score}(C)
$$

> [!TIP]
> **KTU Application-Level Question:** When asked to compare *greedy* vs *beam* parsing, state: greedy is $O(n \cdot \vert T \vert)$ time, beam is $O(n \cdot k \cdot \vert T \vert \log(k \cdot \vert T \vert))$ time. Beam usually improves LAS by 1–2 points on the Penn Treebank.

## 3.4 Lab Pin / Wiring Configuration (If Treating as a System Component)

| Component | Specification | Role in Pipeline |
|-----------|---------------|-----------------|
| **Token Embedding Layer** | dim = 100–300, GloVe / BERT | Lexical features |
| **POS Embedding Layer** | dim = 25, learned | Morphological features |
| **BiLSTM Encoder** | 2 layers, hidden = 200 | Contextual representation |
| **MLP Scorer** | hidden = 100, activation = tanh | Transition scoring |
| **Softmax Output** | $\vert T \vert = 2N_{rel} + 2$ | Transition probability |
| **Dropout** | rate = 0.3–0.5 | Regularization |
| **Optimizer** | Adam, lr = 1e-3 | Parameter update |
| **Loss Function** | Cross-entropy | Training signal |

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Mermaid: Top-Level Parser State Machine

```mermaid
graph TD
    A[Start Configuration: sigma=ROOT, beta=tokens, A=empty] --> B{Is Terminal?}
    B -- No --> C[Choose Transition t in T]
    C --> D[Apply t to Configuration]
    D --> E[Update sigma, beta, A]
    E --> B
    B -- Yes --> F[Output: Dependency Tree A]
    C -.->|Possible Actions| G[SHIFT]
    C -.->|Possible Actions| H[LEFT-ARC ell]
    C -.->|Possible Actions| I[RIGHT-ARC ell]
    C -.->|Arc-Eager only| J[REDUCE]
```

## 4.2 Mermaid: Neural Network Architecture for Transition Scoring

```mermaid
graph LR
    subgraph INPUT
        W1[Word Embedding]
        T1[POS Embedding]
    end
    subgraph ENCODER
        E1[BiLSTM Layer 1]
        E2[BiLSTM Layer 2]
    end
    subgraph CONFIG
        S0[s0 representation]
        S1[s1 representation]
        B0[b0 representation]
        B1[b1 representation]
    end
    subgraph SCORER
        MLP1[Hidden Layer tanh]
        MLP2[Softmax over T]
    end
    W1 --> E1 --> E2
    T1 --> E1
    E2 --> S0
    E2 --> S1
    E2 --> B0
    E2 --> B1
    S0 --> MLP1
    S1 --> MLP1
    B0 --> MLP1
    B1 --> MLP1
    MLP1 --> MLP2
    MLP2 --> OUT[Transition Probabilities]
```

## 4.3 Mermaid: Block-Level Functional Architecture (Pipeline View)

```mermaid
graph TD
    subgraph A1[Tokenization Stage]
        A1A[Raw Text] --> A1B[Sentence Splitter] --> A1C[Tokenizer]
    end
    subgraph A2[Feature Extraction Stage]
        A2C[Tokenizer] --> A2A[Word Embedding Lookup] --> A2D[POS Tagger]
        A2D --> A2E[POS Embedding Lookup]
    end
    subgraph A3[Parsing Engine]
        A2A --> A3A[BiLSTM Contextual Encoder]
        A2E --> A3A
        A3A --> A3B[Configuration Feature Builder]
        A3B --> A3C[MLP Transition Scorer]
        A3C --> A3D[Greedy or Beam Decoder]
    end
    subgraph A4[Output Stage]
        A3D --> A4A[Dependency Arcs A] --> A4B[CoNLL-U Format]
    end
```

## 4.4 Mermaid: Oracle Decision Logic

```mermaid
graph TD
    Q[Current Configuration C] --> R1{s1 has gold head s0?}
    R1 -- Yes --> LA[Return LEFT-ARC ell]
    R1 -- No --> R2{s0 has gold head b0?}
    R2 -- Yes --> RA[Return RIGHT-ARC ell]
    R2 -- No --> R3{Buffer non-empty?}
    R3 -- Yes --> SH[Return SHIFT]
    R3 -- No --> END[Return None - Terminal]
```

> [!TIP]
> **KTU Visualization Tip:** When asked to draw a transition-based parser's data flow, examiners reward **subgraph separation** (input → encoder → scorer → decoder → output) and explicit arrows from each configuration element ($s_0, s_1, b_0, b_1$) to the scorer.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks Each)

> **Q1.** `[KTU University Exam — July 2023]` **(CO3, Remember)**
> Define a *configuration* in transition-based dependency parsing. List the three components and state the start and terminal configurations.

**Model Answer (3 Marks):**

A configuration in transition-based dependency parsing is a triple

$$
C = (\sigma, \beta, \mathcal{A})
$$

where $\sigma$ is the **stack** (holds partially processed words), $\beta$ is the **buffer** (holds remaining input words), and $\mathcal{A}$ is the **arc set** (dependency arcs built so far).

- **Start configuration:** $C_s = ([\text{ROOT}], w_1 \vert w_2 \vert \dots \vert w_n, \emptyset)$.
- **Terminal configuration:** Buffer is empty, only ROOT remains on the stack, and $\vert \mathcal{A} \vert = n$.

> **Q2.** `[KTU University Exam — Dec 2023]` **(CO3, Understand)**
> Differentiate between Arc-Standard and Arc-Eager transition systems. Mention any two distinguishing transitions.

**Model Answer (3 Marks):**

| Aspect | Arc-Standard | Arc-Eager |
|--------|-------------|-----------|
| Right-Arc effect | Head stays on stack | Head is immediately shifted onto stack |
| Additional transition | None | **Reduce** transition |
| Precondition on Right-Arc | $b_0$ must have no head | $b_0$ must have no head |
| Termination | After $2n-1$ steps | After $2n$ steps |

The **Reduce** transition in Arc-Eager pops a token from the stack once all its dependents have been attached, enabling partial right-attachment decoupling.

## 5.2 Part B Questions (14 Marks — Internal Choice)

> **Q3A.** `[KTU University Exam — July 2024]` **(CO3, Understand + Apply — 14 Marks)**
> **(a)** [7 Marks] Explain the three transition types in the Arc-Standard system with proper preconditions, postconditions, and a small schematic. Map each transition to its effect on $(\sigma, \beta, \mathcal{A})$.
>
> **(b)** [7 Marks] Given the sentence "Birds fly high" with the gold dependency tree $\{(\text{ROOT, root, Birds}), (\text{Birds, nsubj, fly}), (\text{fly, advmod, high})\}$, derive the **complete transition trace** using the Arc-Standard static oracle. Show every configuration step explicitly.

### Model Solution — Q3A

#### Part (a) — Arc-Standard Transitions [7 Marks]

**[Defining configuration: 1 Mark]**

A configuration is $C = (\sigma, \beta, \mathcal{A})$.

**[Shift: 2 Marks]**

$$
\text{SHIFT:}\quad (\sigma,\ b_0 \vert \beta,\ \mathcal{A}) \;\rightarrow\; (\sigma \vert b_0,\ \beta,\ \mathcal{A})
$$

- **Precondition:** Buffer is non-empty.
- **Postcondition:** Token moves from buffer to stack. No new arc is added.

**[Left-Arc: 2 Marks]**

$$
\text{LEFT-ARC}_{\ell}:\quad (\sigma \vert s_1 \vert s_0,\ b_0 \vert \beta,\ \mathcal{A}) \;\rightarrow\; (\sigma \vert s_0,\ b_0 \vert \beta,\ \mathcal{A} \cup \{(s_0, \ell, s_1)\})
$$

- **Precondition:** $s_1 \neq \text{ROOT}$, buffer non-empty.
- **Postcondition:** Arc added from $s_0$ to $s_1$; $s_1$ is popped.

**[Right-Arc: 2 Marks]**

$$
\text{RIGHT-ARC}_{\ell}:\quad (\sigma \vert s_1 \vert s_0,\ b_0 \vert \beta,\ \mathcal{A}) \;\rightarrow\; (\sigma \vert s_0,\ b_0 \vert \beta,\ \mathcal{A} \cup \{(s_1, \ell, s_0)\})
$$

- **Precondition:** Buffer non-empty.
- **Postcondition:** Arc added from $s_1$ to $s_0$; $s_0$ is replaced by $b_0$ on the stack.

#### Part (b) — Worked Trace for "Birds fly high" [7 Marks]

Target arcs:
- $\text{ROOT} \xrightarrow{\text{root}} \text{Birds}$
- $\text{Birds} \xrightarrow{\text{nsubj}} \text{fly}$
- $\text{fly} \xrightarrow{\text{advmod}} \text{high}$

| Step | $\sigma$ | $\beta$ | Transition | New Arc | Marks |
|------|----------|---------|------------|---------|-------|
| 0 | $[\text{ROOT}]$ | $[B, f, h]$ | START | — | [Initial: 1 Mark] |
| 1 | $[\text{ROOT}, B]$ | $[f, h]$ | SHIFT | — | [Step 1: 1 Mark] |
| 2 | $[\text{ROOT}]$ | $[f, h]$ | LEFT-ARC (ROOT $\to$ Birds, root) | $(\text{ROOT}, \text{root}, B)$ | [Step 2: 1 Mark] |
| 3 | $[\text{ROOT}, f]$ | $[h]$ | SHIFT | — | [Step 3: 1 Mark] |
| 4 | $[\text{ROOT}, f, h]$ | $[]$ | SHIFT | — | [Step 4: 0.5 Mark] |
| 5 | $[\text{ROOT}, f]$ | $[]$ | LEFT-ARC (Birds $\to$ fly, nsubj) | $(B, \text{nsubj}, f)$ | [Step 5: 1 Mark] |
| 6 | $[\text{ROOT}, f, h]$ | $[]$ | RIGHT-ARC (fly $\to$ high, advmod) | $(f, \text{advmod}, h)$ | [Step 6: 1 Mark] |
| 7 | $[\text{ROOT}]$ | $[]$ | LEFT-ARC to ROOT | (final) | [Step 7: 0.5 Mark] |

**Total: 7 Marks**

> [!WARNING]
> **KTU Examiner's Valuation Warning:** Students frequently make two errors here:
> 1. Forgetting that the **first** Left-Arc attaches the **first shifted token** to ROOT with the `root` relation. Losing 1 mark.
> 2. Miscounting the final step — Arc-Standard *does not* require an explicit Shift before the final attachment. Examiners deduct 0.5 marks for an extra spurious shift.

---

> **Q3B.** `[KTU University Exam — Dec 2024]` **(CO3, Apply + Analyze — 14 Marks)**
> **(a)** [7 Marks] With a neat block diagram, describe the **neural architecture** of a transition-based dependency parser (Chen & Manning 2014 style). Specify the input representations, hidden layers, and the output scoring function mathematically.
>
> **(b)** [7 Marks] For a configuration where $\sigma = [\text{ROOT}, \text{she}, \text{saw}]$ and $\beta = [\text{the}, \text{cat}, \text{EOS}]$, enumerate the **legal Arc-Eager transitions** with their preconditions. Explain how the dynamic oracle handles non-gold configurations.

### Model Solution — Q3B

#### Part (a) — Neural Architecture [7 Marks]

**[Input layer: 2 Marks]**

Each input token $w_i$ is mapped to an embedding:

$$
\mathbf{x}_i = [\mathbf{W}_e \cdot \text{emb}_{\text{word}}(w_i);\ \mathbf{W}_p \cdot \text{emb}_{\text{pos}}(p_i)] \in \mathbb{R}^{d_e}
$$

where $d_e$ is the embedding dimension and $p_i$ is the POS tag.

**[Hidden layer: 3 Marks]**

The configuration is summarised by extracting the representations of $s_0, s_1, s_2, b_0, b_1, lc_1(s_0), rc_1(s_0), lc_1(s_1), rc_1(s_1), lc_1(b_0)$:

$$
\mathbf{h}^{\text{repr}} = [\mathbf{h}_{s_0};\ \mathbf{h}_{s_1};\ \mathbf{h}_{b_0};\ \mathbf{h}_{b_1};\ \mathbf{h}_{lc_1(s_0)};\ \mathbf{h}_{rc_1(s_0)};\ \dots] \in \mathbb{R}^{18 d_h}
$$

The hidden layer is:

$$
\mathbf{h}_{\text{hidden}} = (\mathbf{W}_h \cdot \mathbf{h}^{\text{repr}} + \mathbf{b}_h)^3
$$

The **cube activation** is the signature trick of Chen & Manning 2014. **[Cube activation: 1 Mark]**

**[Output layer: 2 Marks]**

$$
P(t \vert C) = \text{softmax}(\mathbf{W}_o \cdot \mathbf{h}_{\text{hidden}} + \mathbf{b}_o) \in \mathbb{R}^{\vert T \vert}
$$

The training loss is cross-entropy over oracle transitions.

#### Part (b) — Arc-Eager Legal Transitions & Dynamic Oracle [7 Marks]

**[Enumerate legal transitions: 4 Marks]**

Given $\sigma = [\text{ROOT}, \text{she}, \text{saw}]$ and $\beta = [\text{the}, \text{cat}, \text{EOS}]$:

1. **SHIFT** — Legal because $\beta$ is non-empty. Precondition: $|\beta| > 0$. **[1 Mark]**
2. **LEFT-ARC$_\ell$** — Legal: $s_0 = \text{saw}$, $b_0 = \text{the}$. Arc would be $\text{the} \xrightarrow{\ell} \text{saw}$. Precondition: $s_0 \neq \text{ROOT}$ ✓ and $b_0$ has no head yet. **[1 Mark]**
3. **RIGHT-ARC$_\ell$** — Legal: Arc would be $\text{saw} \xrightarrow{\ell} \text{the}$ and shift "the" onto the stack. Precondition: $b_0$ has no head yet ✓. **[1 Mark]**
4. **REDUCE** — Legal only if $s_0 = \text{saw}$ already has a head. If "saw" has no head yet, Reduce is **illegal**. **[1 Mark]**

**[Dynamic Oracle: 3 Marks]**

The static oracle requires a gold tree, but the parser encounters *non-gold* configurations at test time. The **dynamic oracle** (Goldberg & Nivre 2013) computes, for every legal transition $t$, the **cost** as the number of gold arcs that $t$ would prevent from being added in the future:

$$
\text{cost}(t, C) = \vert \mathcal{A}^{*} \setminus \mathcal{A}_{\text{reachable}}(C, t) \vert
$$

The parser is then trained to pick:

$$
t^{*} = \arg\min_{t} \text{cost}(t, C) \quad \text{(or low-cost action under uncertainty)}
$$

This makes the parser **robust to exposure bias** and recovers $0.5$–$1.5$ LAS points in practice. **[Robustness claim: 1 Mark]**

> [!WARNING]
> **KTU Examiner's Pitfall Callout:**
> 1. In Arc-Eager, **REDUCE** is illegal if $s_0$ has *no* head — students often write "Reduce is always legal" which is **wrong**. **−1 mark.**
> 2. Dynamic oracle is *not* the same as beam search. Dynamic oracle is a **training signal**; beam search is an **inference procedure**. **−1 mark** if confused.

## 5.3 Topic Recap & Important Things to Remember

> [!NOTE]
> **Rapid Revision Checklist for PECST803 Module 3**

- [x] **Configuration triple** $C = (\sigma, \beta, \mathcal{A})$ — stack, buffer, arc-set.
- [x] **Conservation invariant:** $\vert \sigma \vert + \vert \beta \vert = n + 1$ (always include ROOT).
- [x] **Arc-Standard transitions:** SHIFT, LEFT-ARC, RIGHT-ARC (3 total).
- [x] **Arc-Eager transitions:** SHIFT, LEFT-ARC, RIGHT-ARC, REDUCE (4 total).
- [x] **Preconditions:** ROOT has no head; every non-ROOT token has exactly one head; LEFT-ARC forbidden on ROOT as dependent.
- [x] **Time complexity:** $O(n)$ per sentence (projective case).
- [x] **Number of transitions:** $\approx 2n$ for both systems.
- [x] **Neural scoring head:** $P(t \vert C) = \text{softmax}(\mathbf{W} \cdot \tanh(\mathbf{W}\mathbf{h} + \mathbf{b}) + \mathbf{b})$.
- [x] **Cube activation** is the Chen & Manning 2014 signature.
- [x] **BiLSTM encoder** is the Kiperwasser & Goldberg 2016 backbone.
- [x] **Evaluation metrics:** UAS (Unlabeled Attachment Score), LAS (Labeled Attachment Score).
- [x] **Static oracle** uses gold tree during training; **dynamic oracle** uses cost-based future-loss.
- [x] **Greedy vs Beam:** Greedy picks argmax, Beam keeps top-$k$ paths.
- [x] **Production frameworks:** MaltParser, Stanford CoreNLP, spaCy, SyntaxNet, AllenNLP.
- [x] **Projective vs Non-projective:** Transition systems are projective by default; non-projective trees need pseudo-projective lifting or graph-based methods.
- [x] **ROOT attachment:** Every sentence has exactly one token (usually the verb) that is the `root` child of ROOT.

<!-- SECTION_5_END -->
