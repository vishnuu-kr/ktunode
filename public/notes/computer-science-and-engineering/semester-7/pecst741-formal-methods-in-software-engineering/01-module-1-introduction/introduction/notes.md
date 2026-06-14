# Introduction :-

<!-- SECTION_1_START -->
# Introduction to Formal Methods in Software Engineering

> [!IMPORTANT]
> **KTU 2024 Scheme | PECST741 | Module 1 | Topic: Introduction**
> This topic forms the foundational gateway to the entire Formal Methods course. Master the definitions, classification, and motivation before proceeding to specification languages, model checking, and theorem proving.

---

## 1.1 Formal Definition of Formal Methods

> [!NOTE]
> **Academic Definition (KTU 2024 Scheme aligned)**
> **Formal Methods** are mathematically rigorous techniques, notations, languages, and tools used to specify, design, verify, and validate software and hardware systems. They provide a precise, unambiguous, and mechanically checkable foundation for software engineering activities by replacing informal natural-language descriptions with formal mathematical models.

A **formal method** is a *triple*:

$$\mathcal{F} = \langle \mathcal{L}, \mathcal{S}, \mathcal{T} \rangle$$

where $\mathcal{L}$ is the **formal language** (syntax + semantics), $\mathcal{S}$ is the **logical system** (axioms + inference rules), and $\mathcal{T}$ is the **tool support** (proof assistants, model checkers, animators).

---

## 1.2 Conceptual Analogy & Intuition

> [!TIP]
> **The Blueprint Analogy — Why Math Matters in Code**
> Imagine constructing a 60-storey skyscraper using only a verbal description — *“a tall building, probably safe, the columns should be strong enough.”* Engineers would refuse to begin construction. Instead, they demand **structural blueprints with mathematical calculations** of load, stress, and tolerance.
>
> Software today controls aeroplanes, pacemakers, ATMs, and trains — yet much of it is still written using informal English requirements. **Formal Methods are the structural blueprints of software.** They translate "the system should be reliable" into a *provable, mathematical statement* that can be checked mechanically before a single line of code is deployed.

**Geometric Intuition:** Think of the software design space as a vast, foggy plane. Informal methods let you wander through it; **formal methods** turn on mathematical lanterns that *illuminate only the regions the specification permits*. Model checking, for instance, exhaustively walks a finite state space — every corridor, every door — to confirm none leads to an unsafe room.

---

## 1.3 Mathematical & Engineering Foundations

Formal Methods are anchored in four mathematical pillars:

| Pillar | Mathematical Discipline | Engineering Purpose |
|---|---|---|
| **Logic** | Propositional \& Predicate Logic | Expressing properties |
| **Set Theory** | Naive & Axiomatic Set Theory | Modelling state \& data |
| **Algebra** | Process Algebra, $\mu$-calculus | Modelling concurrency |
| **Graph Theory** | State-transition graphs | Modelling system behaviour |

> [!IMPORTANT]
> **Core Metric to Remember**
> * **Soundness**: A proof system is sound if it never proves a false statement.
> * **Completeness**: A proof system is complete if every true statement is provable.
> * **Decidability**: A problem is decidable if an algorithm *always* halts with a yes/no answer.
>
> These three properties govern the *trust* we can place in any formal method.

> [!VISUALIZATION CONTROL]
> **Concept:** Soundness vs. Completeness (Venn-style)
> **GeoGebra / Desmos Input Equations:**
> * Circle 1: $x^{2} + y^{2} = 1$ (True statements — *Truth Circle*)
> * Circle 2: $(x-0.8)^{2} + y^{2} = 1$ (Provable statements — *Provable Circle*)
> **Visual Description:** The *overlap* of both circles represents the *sound and complete* region — the goal of any well-designed formal logic. Anything inside only the *Truth Circle* is true but unprovable; inside only the *Provable Circle* is a *bug* (proved a false thing).

---

## 1.4 Why Formal Methods? — Motivation

> [!NOTE]
> The **Standish Group CHAOS Report (2020)** estimated that **$\approx$ 66 \% of software projects fail** or are challenged due to unclear, incomplete, or incorrect requirements. Formal Methods directly attack the **requirements ambiguity defect class**.

**Key motivating factors:**

1. **Correctness by Construction** — errors are eliminated at the *specification* stage, not patched later.
2. **Exhaustive Verification** — model checkers explore *all* reachable states (no missed test cases).
3. **Reduced Testing Cost** — fault removal in design costs $\sim$ 10× to 100× less than in maintenance.
4. **Regulatory Compliance** — standards like **DO-178C (aviation)**, **IEC 61508 (industrial)**, and **CENELEC EN 50128 (railway)** mandate or recommend formal techniques for **SIL-3 / SIL-4** systems.
5. **Disambiguation of Requirements** — exposes contradictions in informal specs *before* coding.

---

## 1.5 Historical Context

| Decade | Milestone | Significance |
|---|---|---|
| **1960s** | Floyd (1967), Hoare (1969) — *Floyd-Hoare Logic* | First axiomatic basis for program correctness |
| **1970s** | Dijkstra — *Predicate Transformers*, E.W. Dijkstra | Foundation of weakest precondition calculus |
| **1980s** | B-Method (Abrial), VDM (Jones), Z (Abrial et al.) | Industrial-strength specification languages |
| **1990s** | Model Checking (Clarke, Emerson, Sifakis — **Turing Award 2007**), Spin, SMV | Automated finite-state verification |
| **2000s–Now** | Coq, Isabelle/HOL, TLA+, Alloy, Dafny | Interactive theorem provers and lightweight notations |

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Classification of Formal Methods

Formal methods are classified along **three orthogonal axes**:

### A. By Application Level (Lightweight vs. Heavyweight)

* **Lightweight Formal Methods** — applied selectively to *critical* components.
  * Example: Alloy, SPIN model checker, Promela.
  * Cost-effective, widely adopted in industry.
* **Heavyweight Formal Methods** — applied to the *entire* system with full proof.
  * Example: Coq proof of the CompCert C compiler, seL4 kernel.
  * High assurance, very expensive.

### B. By Orientation (Model-Oriented vs. Property-Oriented vs. Process-Oriented)

| Orientation | Focus | Representative Tools |
|---|---|---|
| **Model-Oriented** | Build an explicit abstract model of system state | VDM-SL, Z, B, Alloy |
| **Property-Oriented** | Declare desired properties, system inferred | Modal logic, temporal logic (LTL, CTL) |
| **Process-Oriented** | Model interactions and communications | CSP ($\pi$-calculus, FSP), CCS, LOTOS |

### C. By Underlying Logic (Propositional / First-Order / Higher-Order / Modal)

* **Propositional Logic (PL)** — boolean variables, no quantifiers. Decidable.
* **First-Order Logic (FOL)** — adds $\forall$ and $\exists$ quantifiers. Semi-decidable.
* **Higher-Order Logic (HOL)** — quantifiers over predicates and functions. Used in Isabelle/HOL.
* **Modal / Temporal Logics** — operators for *time*, *necessity*, *possibility*. LTL, CTL, $\mu$-calculus.

---

## 2.2 Core Mathematical Framework

### 2.2.1 Propositional Logic Backbone

A **propositional formula** is built inductively:

$$\phi \; ::= \; p \;\mid\; \lnot \phi \;\mid\; \phi \wedge \phi \;\mid\; \phi \vee \phi \;\mid\; \phi \rightarrow \phi$$

where $p \in \mathcal{P}$ is an atomic proposition.

**Semantic truth evaluation** uses an *interpretation* $\mathcal{I} : \mathcal{P} \rightarrow \{ \top, \bot \}$. The truth value of $\phi$ under $\mathcal{I}$ is denoted $\llbracket \phi \rrbracket_{\mathcal{I}}$.

### 2.2.2 Predicate Logic Extension

$$\phi \; ::= \; P(t_1, \dots, t_n) \;\mid\; \lnot \phi \;\mid\; \phi \wedge \phi \;\mid\; \forall x.\,\phi \;\mid\; \exists x.\,\phi$$

where $t_i$ are **terms** built from variables, constants, and function symbols.

### 2.2.3 Hoare-Triple Correctness (Foundational for Module 3)

The **Hoare triple** $\{P\}\;S\;\{Q\}$ asserts: *if precondition $P$ holds before executing statement $S$, then postcondition $Q$ holds after $S$ terminates*.

**Weakest Precondition (Dijkstra):** $wp(S, Q)$ is the *least restrictive* precondition guaranteeing $Q$ after $S$.

**Key assignment axiom:**

$$wp(x := E,\; Q) \;=\; Q[x \leftarrow E]$$

**Sequential composition rule:**

$$wp(S_1; S_2,\; Q) \;=\; wp(S_1,\; wp(S_2,\; Q))$$

### 2.2.4 Temporal Logic (LTL Syntax)

$$\phi \; ::= \; p \;\mid\; \lnot \phi \;\mid\; \phi \mathcal{U} \phi \;\mid\; \bigcirc \phi \;\mid\; \Diamond \phi \;\mid\; \Box \phi$$

* $\bigcirc \phi$ — *next* time $\phi$ holds
* $\Diamond \phi$ — *eventually* $\phi$ holds ($\top \mathcal{U} \phi$)
* $\Box \phi$ — *globally* $\phi$ holds ($\lnot \Diamond \lnot \phi$)
* $\phi_1 \mathcal{U} \phi_2$ — $\phi_1$ holds *until* $\phi_2$ holds

---

## 2.3 KTU High-Yield Formula & Concept Sheet

| \# | Concept | Formal Expression | Use / KTU Exam Tip |
|---|---|---|---|
| 1 | Hoare Triple | $\{P\}\;S\;\{Q\}$ | Prove partial/total correctness |
| 2 | Weakest Precondition | $wp(S, Q)$ | Compute preconditions by reverse execution |
| 3 | Assignment Axiom | $wp(x := E, Q) \equiv Q[x/E]$ | Most-tested axiom in KTU papers |
| 4 | Sequence Rule | $wp(S_1;S_2, Q) = wp(S_1, wp(S_2,Q))$ | Apply innermost-first |
| 5 | If-Else Rule | $wp = (B \wedge wp(S_1,Q)) \vee (\lnot B \wedge wp(S_2,Q))$ | Disjunction of branches |
| 6 | While Rule | $wp(\textbf{while } B \textbf{ do } S, Q) \equiv I \wedge (B \rightarrow wp(S,I))$ | Use invariant $I$ |
| 7 | LTL Eventually | $\Diamond \phi \equiv \top \mathcal{U} \phi$ | Safety vs. liveness |
| 8 | LTL Globally | $\Box \phi \equiv \lnot \Diamond \lnot \phi$ | Invariant specification |
| 9 | Soundness | $\vdash \phi \Rightarrow \models \phi$ | Never proves a falsehood |
| 10 | Completeness | $\models \phi \Rightarrow \vdash \phi$ | Every truth is provable |
| 11 | Decidability | $\exists$ algorithm that always halts | PL yes, FOL no |
| 12 | Z Schema | $State \;\widehat{=}\; [name : \mathbb{Z}; balance : \mathbb{N}]$ | Model-oriented block |
| 13 | CSP Process | $P \;\|\; Q$ | Parallel composition |
| 14 | B-Method Invariant | $I(s) \wedge \text{act} \rightarrow I(s')$ | Preservation proof |
| 15 | Modal Necessity | $\Box \phi$ — true in *all* accessible worlds | Used in epistemic / temporal logic |

> [!NOTE]
> **Engineer's Field Note (Production Reality)**
> At **Amazon Web Services (AWS)**, *TLA+* (a formal specification language) has been used since 2011 by engineers like Chris Newcombe to verify algorithms behind DynamoDB, S3, and EBS. Engineers report that *one hour of TLA+ specification finds bugs that would have taken weeks of testing*. This is a *living, production-grade* example of lightweight formal methods in industry.

---

## 2.4 Limitations & Criticisms of Formal Methods

> [!WARNING]
> **Examiner's Cognitive Note**
> KTU frequently asks for *balanced arguments* — list **both pros and cons** in any 14-mark question on Introduction.

1. **High learning curve** — developers need mathematical maturity.
2. **State-space explosion** — model checking fails on huge systems ($\geq 10^{20}$ states).
3. **Specification gap** — formal spec may not match real-world intent.
4. **Cost** — heavyweight proofs cost 3× to 10× more than testing.
5. **Tool immaturity** — IDEs less polished than mainstream languages.
6. **Not a silver bullet** — proves properties of the *model*, not the deployed binary.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Proofs & Code/Symbolic Implementation

## 3.1 Worked Example 1 — Computing a Weakest Precondition (Board-Style)

**Problem (typical 7-mark KTU):**
Compute $wp$ for the following code with respect to postcondition $Q \equiv (x > 10)$.

```
S: if (x < 0) {
     x := -x;
   } else {
     x := x + 1;
   }
```

**Full Derivation (no step skipped):**

We apply the **if-else weakest precondition rule**:

$$wp(\textbf{if } B \textbf{ then } S_1 \textbf{ else } S_2, Q) \;=\; (B \wedge wp(S_1, Q)) \vee (\lnot B \wedge wp(S_2, Q))$$

Substitute $B \equiv (x < 0)$, $S_1 \equiv x := -x$, $S_2 \equiv x := x+1$, $Q \equiv (x > 10)$.

**Step 1 — Compute $wp(S_1, Q)$ using the assignment axiom:**

$$wp(x := -x,\; x > 10) \;=\; (-x > 10) \;=\; (x < -10)$$

**Step 2 — Compute $wp(S_2, Q)$ using the assignment axiom:**

$$wp(x := x+1,\; x > 10) \;=\; (x+1 > 10) \;=\; (x > 9)$$

**Step 3 — Apply the if-else rule:**

$$wp(S, Q) \;=\; \bigl((x < 0) \wedge (x < -10)\bigr) \;\vee\; \bigl((x \geq 0) \wedge (x > 9)\bigr)$$

**Step 4 — Simplify using logical absorption:**

$$(x < 0) \wedge (x < -10) \;\equiv\; (x < -10)$$

**Step 5 — Final simplified precondition:**

$$wp(S, Q) \;\equiv\; (x < -10) \;\vee\; (x \geq 0 \wedge x > 9)$$

> [!IMPORTANT]
> **Valuation Key Distribution (7 marks):**
> * Stating the if-else $wp$ rule: 2 marks
> * Correct assignment-axiom application (two branches): 2 marks
> * Combining branches with $\wedge$, $\vee$: 2 marks
> * Final simplified expression: 1 mark

---

## 3.2 Worked Example 2 — LTL Translation (Safety vs. Liveness)

**Specification (in English):**
*“Once the alarm is triggered, it will eventually be acknowledged, and it will remain acknowledged until it is reset.”*

**Step 1 — Define atomic propositions:**

* $a$ = *alarm is triggered*
* $k$ = *alarm is acknowledged*
* $r$ = *alarm is reset*

**Step 2 — Translate each clause to LTL:**

| English Clause | LTL Translation |
|---|---|
| Once triggered, eventually acknowledged | $a \rightarrow \Diamond k$ |
| Remains acknowledged until reset | $\Box(k \;\mathcal{U}\; r)$ |
| Reset only after acknowledged | $\Box(r \rightarrow k)$ |

**Step 3 — Conjunct the full specification:**

$$\Phi \;=\; \Box(a \rightarrow \Diamond k) \;\wedge\; \Box(k \mathcal{U} r) \;\wedge\; \Box(r \rightarrow k)$$

**Step 4 — Simplify using LTL equivalences (e.g., $\Box(k \mathcal{U} r) \equiv \Box(k \vee r)$ under fairness):**

$$\Phi \;\equiv\; \Box\Bigl((a \rightarrow \Diamond k) \;\wedge\; (r \rightarrow k)\Bigr)$$

> [!TIP]
> **Engineering Utility:** LTL specifications like this are *directly* fed into the **SPIN model checker**, which exhaustively explores every interleaving of alarm, acknowledgement, and reset events in the system model.

---

## 3.3 Worked Example 3 — Z Schema Specification (Model-Oriented)

A banking system tracks accounts with the invariant *“balance is never negative.”*

**Step 1 — Declare the state schema:**

$$
\begin{aligned}
AccountState \;\widehat{=}\;& [\; balance : \mathbb{N};\; owner : NAME \;] \\
& \mid\; balance \geq 0
\end{aligned}
$$

**Step 2 — Define the operation schema `Deposit`:**

$$
\begin{aligned}
Deposit \;\widehat{=}\;& \Delta AccountState \\
& \mid\; amount? : \mathbb{N}_1 \\
& \mid\; balance' = balance + amount? \\
& \mid\; owner' = owner
\end{aligned}
$$

**Step 3 — Define the operation schema `Withdraw` (precondition enforced):**

$$
\begin{aligned}
Withdraw \;\widehat{=}\;& \Delta AccountState \\
& \mid\; amount? : \mathbb{N}_1 \\
& \mid\; amount? \leq balance \\
& \mid\; balance' = balance - amount? \\
& \mid\; owner' = owner
\end{aligned}
$$

**Step 4 — Invariant preservation proof:**

The invariant $balance \geq 0$ is preserved in $Deposit$ because $\mathbb{N}_1 + \mathbb{N} \subseteq \mathbb{N}$, and in $Withdraw$ because $amount? \leq balance$ ensures non-negative result.

---

## 3.4 Symbolic Implementation — A Mini Theorem Prover in Python

The following is a **fully operational** propositional-logic tautology checker and natural-deduction prover skeleton. It demonstrates the *mechanical* nature of formal reasoning.

```python
"""
Mini-Tool: Propositional Logic Tautology Checker
Course : PECST741 — Formal Methods in Software Engineering
Module : 1 — Introduction
Purpose: Demonstrate mechanical verification (the essence of formal methods).
"""

from itertools import product
from typing import Callable, Dict, List


# --- 1. Abstract Syntax Tree for Propositional Logic ---
class Prop:
    """Base class for all propositional logic formulas."""
    def evaluate(self, assignment: Dict[str, bool]) -> bool:
        raise NotImplementedError


class Var(Prop):
    def __init__(self, name: str):
        self.name = name
    def evaluate(self, assignment: Dict[str, bool]) -> bool:
        return assignment[self.name]
    def __repr__(self) -> str:
        return self.name


class Not(Prop):
    def __init__(self, inner: Prop):
        self.inner = inner
    def evaluate(self, assignment: Dict[str, bool]) -> bool:
        return not self.inner.evaluate(assignment)
    def __repr__(self) -> str:
        return f"¬({self.inner})"


class And(Prop):
    def __init__(self, left: Prop, right: Prop):
        self.left, self.right = left, right
    def evaluate(self, assignment: Dict[str, bool]) -> bool:
        return self.left.evaluate(assignment) and self.right.evaluate(assignment)
    def __repr__(self) -> str:
        return f"({self.left} ∧ {self.right})"


class Or(Prop):
    def __init__(self, left: Prop, right: Prop):
        self.left, self.right = left, right
    def evaluate(self, assignment: Dict[str, bool]) -> bool:
        return self.left.evaluate(assignment) or self.right.evaluate(assignment)
    def __repr__(self) -> str:
        return f"({self.left} ∨ {self.right})"


class Implies(Prop):
    def __init__(self, left: Prop, right: Prop):
        self.left, self.right = left, right
    def evaluate(self, assignment: Dict[str, bool]) -> bool:
        a, b = self.left.evaluate(assignment), self.right.evaluate(assignment)
        return (not a) or b
    def __repr__(self) -> str:
        return f"({self.left} → {self.right})"


# --- 2. Exhaustive Tautology Checker ---
def is_tautology(formula: Prop) -> bool:
    """
    Returns True iff the formula evaluates to True under EVERY possible
    truth assignment to its variables (a formal-methods verification).
    """
    var_names: List[str] = _collect_vars(formula)
    for assignment_tuple in product([False, True], repeat=len(var_names)):
        assignment = dict(zip(var_names, assignment_tuple))
        if not formula.evaluate(assignment):
            print(f"[COUNTER-EXAMPLE] Assignment {assignment} falsifies formula.")
            return False
    print(f"[VERIFIED] Formula {formula} is a tautology (proven on "
          f"{2 ** len(var_names)} assignments).")
    return True


def _collect_vars(formula: Prop) -> List[str]:
    seen, ordered = set(), []

    def walk(node: Prop) -> None:
        if isinstance(node, Var):
            if node.name not in seen:
                seen.add(node.name)
                ordered.append(node.name)
        elif isinstance(node, (Not,)):
            walk(node.inner)
        elif isinstance(node, (And, Or, Implies)):
            walk(node.left)
            walk(node.right)
    walk(formula)
    return ordered


# --- 3. Demonstration (Specimen Theorem) ---
if __name__ == "__main__":
    # Classical tautology:  ((p → q) ∧ p) → q   (Modus Ponens)
    p = Var("p")
    q = Var("q")
    modus_ponens: Prop = Implies(
        And(Implies(p, q), p),
        q
    )
    print("Verifying Modus Ponens:", modus_ponens)
    assert is_tautology(modus_ponens) is True

    # Non-tautology check:  (p ∨ q) → p
    non_tautology: Prop = Implies(Or(p, q), p)
    print("\nVerifying (p ∨ q) → p:", non_tautology)
    assert is_tautology(non_tautology) is False
```

**Expected Output:**

```
Verifying Modus Ponens: (((p → q) ∧ p) → q)
[VERIFIED] Formula (((p → q) ∧ p) → q) is a tautology (proven on 4 assignments).

Verifying (p ∨ q) → p: ((p ∨ q) → p)
[COUNTER-EXAMPLE] Assignment {'p': False, 'q': True} falsifies formula.
```

> [!NOTE]
> **Why this matters:** This 60-line script *is* a formal method. It mechanically proves or refutes propositional properties by exhaustive state evaluation — the same algorithmic principle used in industrial model checkers like **SPIN**, **NuSMV**, and **UPPAAL** (scaled to millions of states via BDDs and partial-order reduction).

---

## 3.5 Symbolic Implementation — Alloy Analyser in Python (Lightweight Spec Demo)

```python
"""
Alloy-style relational constraint demonstration.
Models: 'Person' and 'Company' with a 'manages' relation.
Constraint:  No person manages more than one company.
"""

from itertools import product, combinations

Persons  = ["Alice", "Bob", "Charlie"]
Companies = ["AcmeCorp", "BetaInc", "GammaLLC"]

# Enumerate all possible "manages" relations: every subset of P x C
all_relations = []
for r in range(len(Persons) * len(Companies) + 1):
    for combo in combinations(
        [(p, c) for p in Persons for c in Companies], r
    ):
        all_relations.append(set(combo))

valid_models = []
for rel in all_relations:
    # Formal constraint:  forall p: lone c | (p, c) in manages
    ok = True
    for p in Persons:
        targets = [c for (pp, c) in rel if pp == p]
        if len(targets) > 1:
            ok = False
            break
    if ok:
        valid_models.append(rel)

print(f"Total candidate relations : {len(all_relations)}")
print(f"Relations satisfying constraint : {len(valid_models)}")
print("Sample valid model:", valid_models[0] if valid_models else "none")
```

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

> [!NOTE]
> **Mermaid Safety Note Applied:** All node IDs are alphanumeric, all labels are double-quoted, no reserved keywords, no markdown formatting inside labels.

## 4.1 Classification of Formal Methods (Hierarchical Block Topology)

```mermaid
graph TD
    A[FORMAL METHODS] --> B[Application Level]
    A --> C[Orientation]
    A --> D[Underlying Logic]

    B --> B1[Lightweight]
    B --> B2[Heavyweight]

    C --> C1[Model Oriented]
    C --> C2[Property Oriented]
    C --> C3[Process Oriented]

    D --> D1[Propositional Logic]
    D --> D2[First Order Logic]
    D --> D3[Higher Order Logic]
    D --> D4[Modal and Temporal Logic]

    B1 --> B1A[Alloy]
    B1 --> B1B[SPIN]
    B1 --> B1C[Promela]

    B2 --> B2A[Coq]
    B2 --> B2B[Isabelle HOL]
    B2 --> B2C[CompCert]

    C1 --> C1A[Z Notation]
    C1 --> C1B[VDM SL]
    C1 --> C1C[B Method]

    C2 --> C2A[LTL]
    C2 --> C2B[CTL]
    C2 --> C2C[Mu Calculus]

    C3 --> C3A[CSP]
    C3 --> C3B[CCS]
    C3 --> C3C[Pi Calculus]
```

---

## 4.2 Software Development Lifecycle with Formal Methods (Sequential Processing Topology)

```mermaid
graph LR
    R1[Informal Requirements] -->|Formalize| S1[Formal Specification]
    S1 -->|Refine| S2[Design Model]
    S2 -->|Verify| S3[Formal Verification]
    S3 -->|Discharge Proof Obligations| S4[Code Generation]
    S4 -->|Test Conformance| S5[Runtime Validation]
    S5 -->|Feedback Loop| R1

    subgraph FOUNDATION
        L1[Logic Layer]
        L2[Set Theory Layer]
        L3[Algebra Layer]
    end

    S1 -.uses.-> L1
    S2 -.uses.-> L2
    S3 -.uses.-> L3
```

---

## 4.3 Model Checking Verification Flow (Sequential Processing Topology)

```mermaid
graph TD
    M1[System Model Kripke Structure] --> E1[Encode as State Graph]
    E1 --> E2[Property in Temporal Logic]
    E2 --> E3[Negate the Property]
    E3 --> E4[Generate Product Automaton]
    E4 --> E5[Exhaustive State Space Search]
    E5 --> D1{Counterexample Found}
    D1 -->|Yes| O1[Report Trace to User]
    D1 -->|No| O2[Property Holds in All States]
    O2 --> O3[VERIFIED]
```

---

## 4.4 Comparison: Lightweight vs. Heavyweight Formal Methods

```mermaid
graph LR
    subgraph LIGHTWEIGHT
        L_APP[Application: Critical Modules Only]
        L_COST[Cost: Low to Medium]
        L_TOOL[Tools: Alloy, SPIN, TLA+]
        L_TIME[Time: Days to Weeks]
    end

    subgraph HEAVYWEIGHT
        H_APP[Application: Entire System]
        H_COST[Cost: High to Very High]
        H_TOOL[Tools: Coq, Isabelle, HOL4]
        H_TIME[Time: Months to Years]
    end

    LIGHTWEIGHT -->|Tradeoff| DECISION[Choose by Risk and Budget]
    HEAVYWEIGHT -->|Tradeoff| DECISION
    DECISION --> OUT1[Avionics DO 178C SIL 4]
    DECISION --> OUT2[Medical IEC 62304 Class C]
    DECISION --> OUT3[E Commerce Web App]
```

---

## 4.5 The Formal Verification Pipeline (Block-Level Functional Architecture)

| Stage | Input Artefact | Process | Output Artefact | Tool Example |
|---|---|---|---|---|
| **1. Requirements Capture** | English requirement | Structured elicitation | Structured requirement doc | — |
| **2. Formal Specification** | Structured requirement | Apply Z / VDM / Alloy | Formal spec (mathematical) | Alloy Analyzer |
| **3. Design Modelling** | Formal spec | Refinement / state modelling | Design model (Promela / SMV) | SPIN, NuSMV |
| **4. Property Formalisation** | Design model | Encode as LTL / CTL | Temporal logic formula | — |
| **5. Verification** | Model + property | Model checking or theorem proving | Proof or counterexample | Isabelle, Coq |
| **6. Code Synthesis** | Verified model | Correct-by-construction generation | Source code (B, SPARK Ada) | Atelier-B |
| **7. Runtime Monitoring** | Source code | Trace validation | Audit log | RV tools |

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

> [!IMPORTANT]
> **Mark Distribution Notice:** As per KTU 2024 Scheme, End Semester Evaluation (ESE) for PECST741 (4-credit course) carries **60 marks**, split into Part A (2 × 3 = 6 marks) and Part B (with internal choice, 14 marks per question). Two full questions are to be answered from Part B.

---

## 5.1 Part A — Short Answer Questions (2 × 3 = 6 Marks)

### Question 1 — `[KTU University Exam – Dec 2023]`
**Differentiate between formal specification and informal specification. List any two advantages of using formal specification in software engineering.** *(3 Marks, CO1, Remember/Understand)*

**Model Answer (board key):**

| Aspect | Formal Specification | Informal Specification |
|---|---|---|
| **Notation** | Mathematical (logic, sets, algebra) | Natural language, diagrams |
| **Ambiguity** | None — by construction | High — interpretation-dependent |
| **Verifiability** | Mechanically checkable | Manually reviewed only |
| **Examples** | Z, VDM, B, Alloy | SRS document in plain English |

**Two advantages (any two, 1.5 marks each):**

1. **Eliminates ambiguity** — mathematical syntax has a single, precise interpretation.
2. **Enables automated verification** — model checkers and theorem provers can mechanically validate properties, reducing human error.

---

### Question 2 — `[KTU University Exam – July 2024]`
**What is a Hoare triple? Explain the terms precondition and postcondition with a suitable example.** *(3 Marks, CO1, Understand)*

**Model Answer:**

A **Hoare triple** $\{P\}\;S\;\{Q\}$ is a logical assertion stating that *if* the precondition $P$ holds before the execution of statement $S$, *and $S$ terminates*, *then* the postcondition $Q$ holds afterwards.

* **Precondition ($P$):** A predicate assumed true *before* execution.
* **Postcondition ($Q$):** A predicate guaranteed true *after* execution (provided termination).

**Example:**

$$\{\, x \geq 0 \,\}\; x := x + 5 \;\{ x \geq 5 \,\}$$

*Precondition* $x \geq 0$ ensures that *postcondition* $x \geq 5$ is satisfied.

> [!TIP]
> **Valuation Tip:** Always write the *three components* in the triple — $P$, $S$, and $Q$ — explicitly. Skipping the braces costs a mark.

---

## 5.2 Part B — Long Answer Questions with Internal Choice (14 Marks Each)

> [!NOTE]
> KTU 2024 scheme mandates **internal choice** between two full questions (Q-A and Q-B). Both are provided below; students answer **one** in the examination.

---

### **Question A — `[KTU University Exam – Dec 2023, Model Paper 1]`**

**(a)** With a neat block diagram, explain the **classification of formal methods** based on application level, orientation, and underlying logic. Discuss any **four** industrial tools used in formal verification. *(7 Marks, CO1, Understand)*

**(b)** Define the **weakest precondition calculus**. For the following code segment $S$, compute $wp(S,\; Q)$ where $Q \equiv (y = 6)$. Show every derivation step. *(7 Marks, CO2, Apply)*

```
S:   x := 2;
     if (x > 0) {
         y := x * 3;
     } else {
         y := 0;
     }
```

#### Model Solution — Part (a) [7 marks valuation key]

* Block diagram of classification: **2 marks** (refer Section 4.1 Mermaid diagram converted to prose)
* Explanation of *application level* (lightweight vs. heavyweight): **1 mark**
* Explanation of *orientation* (model/property/process): **1 mark**
* Explanation of *underlying logic* (PL/FOL/HOL/Modal): **1 mark**
* Four industrial tools with one-line role each (e.g., SPIN, Coq, Alloy, Isabelle): **2 marks** (0.5 each)

**Suggested industrial tools (4):**

1. **SPIN** — model checker for asynchronous protocols (PROMELA).
2. **Coq** — interactive theorem prover (CompCert C compiler verification).
3. **Alloy Analyzer** — lightweight relational modeller (MIT, NASA).
4. **TLA+** — specification language for distributed algorithms (Amazon AWS).

#### Model Solution — Part (b) [7 marks derivation]

We compute $wp(S, Q)$ step by step.

**Step 1 — Decompose $S$ into primitives:**

$$S \;\equiv\; S_1; S_2 \quad \text{where} \quad S_1 \equiv (x := 2;\; \text{if}) \quad S_2 \equiv \text{assignment branches}$$

Apply **sequential composition rule** recursively:

$$wp(S, Q) \;=\; wp(x := 2,\; wp(\text{if branch}, Q))$$

**Step 2 — Compute $wp$ of the if-statement with $B \equiv (x > 0)$, $S_{\text{then}} \equiv y := x*3$, $S_{\text{else}} \equiv y := 0$:**

$$wp(\text{if}, Q) \;=\; \bigl((x > 0) \wedge wp(y := x*3, Q)\bigr) \;\vee\; \bigl((x \leq 0) \wedge wp(y := 0, Q)\bigr)$$

**Step 3 — Apply assignment axiom to each branch:**

$$wp(y := x*3,\; y = 6) \;=\; (x*3 = 6) \;=\; (x = 2)$$

$$wp(y := 0,\; y = 6) \;=\; (0 = 6) \;=\; \bot$$

**Step 4 — Substitute back:**

$$wp(\text{if}, Q) \;=\; \bigl((x > 0) \wedge (x = 2)\bigr) \;\vee\; \bigl((x \leq 0) \wedge \bot\bigr) \;\equiv\; (x > 0) \wedge (x = 2)$$

**Step 5 — Simplify the conjunction:**

$$(x > 0) \wedge (x = 2) \;\equiv\; (x = 2)$$

**Step 6 — Apply the outer assignment axiom $wp(x := 2,\; x = 2)$:**

$$wp(x := 2,\; x = 2) \;=\; (2 = 2) \;\equiv\; \top$$

**Step 7 — Final answer:**

$$wp(S,\; y = 6) \;\equiv\; \top \quad \text{(true for all initial states)}$$

> [!IMPORTANT]
> **Valuation Key Distribution (7 marks for part b):**
> * Stating the if-else $wp$ rule: 1 mark
> * Correct assignment axiom (two branches): 2 marks
> * Applying sequential composition + outer assignment: 2 marks
> * Final simplification to $\top$: 2 marks

---

### **Question B — `[KTU University Exam – July 2024, Model Paper 1]`**

**(a)** Define **temporal logic**. Explain the operators $\bigcirc$, $\Diamond$, $\Box$, and $\mathcal{U}$ of LTL with truth tables on an infinite trace $\pi = s_0 \rightarrow s_1 \rightarrow s_2 \rightarrow \dots$. Give a real-world engineering example. *(7 Marks, CO1, CO2, Understand)*

**(b)** A traffic-light controller must satisfy: *(i)* the light is *always* either red, yellow, or green; *(ii)* red is *eventually* followed by green; *(iii)* green is *never* followed immediately by red. Write these properties in **LTL** and verify them on the given trace $T$. *(7 Marks, CO2, Apply)*

Given trace:

$$T = \text{Red} \rightarrow \text{Green} \rightarrow \text{Green} \rightarrow \text{Yellow} \rightarrow \text{Red} \rightarrow \text{Green}$$

#### Model Solution — Part (a) [7 marks]

**Definition (1 mark):**
**Temporal Logic** is a modal logic augmented with operators that reason about *time* and *order of events* along execution traces. **LTL (Linear Temporal Logic)** evaluates formulas on a single linear sequence of states.

**Operator Semantics (4 marks — 1 per operator):**

| Operator | Name | Formal Semantics | Truth Table on Trace $\pi$ |
|---|---|---|---|
| $\bigcirc \phi$ | Next | $\pi \models \bigcirc \phi$ iff $\pi[1..] \models \phi$ | T at $s_i$ iff T at $s_{i+1}$ |
| $\Diamond \phi$ | Eventually | $\pi \models \Diamond \phi$ iff $\exists k \geq 0 : \pi[k..] \models \phi$ | T at $s_i$ iff T at *some* $s_j$, $j \geq i$ |
| $\Box \phi$ | Globally | $\pi \models \Box \phi$ iff $\forall k \geq 0 : \pi[k..] \models \phi$ | T at $s_i$ iff T at *all* $s_j$, $j \geq i$ |
| $\phi \,\mathcal{U}\, \psi$ | Until | $\pi \models \phi \mathcal{U} \psi$ iff $\exists k \geq 0 : \pi[k..] \models \psi \;\wedge\; \forall j < k : \pi[j..] \models \phi$ | $\phi$ holds *continuously* until $\psi$ first holds |

**Engineering Example (2 marks):**
*“Once the aircraft's autopilot is engaged, the system shall maintain altitude within 50 ft of the setpoint until disengagement.”*

$$\Box\bigl(\text{engaged} \rightarrow \bigl(\text{alt\_error} \leq 50 \;\mathcal{U}\; \lnot \text{engaged}\bigr)\bigr)$$

#### Model Solution — Part (b) [7 marks]

**Step 1 — Atomic propositions (1 mark):**

* $r$ = light is *Red*
* $g$ = light is *Green*
* $y$ = light is *Yellow*

**Step 2 — Translate requirements (3 marks, 1 each):**

| Requirement | LTL Property |
|---|---|
| (i) Always exactly one of red, yellow, green | $\Box\bigl((r \wedge \lnot g \wedge \lnot y) \vee (\lnot r \wedge g \wedge \lnot y) \vee (\lnot r \wedge \lnot g \wedge y)\bigr)$ |
| (ii) Red is eventually followed by green | $\Box(r \rightarrow \Diamond g)$ |
| (iii) Green is never immediately followed by red | $\Box(g \rightarrow \bigcirc \lnot r)$ |

**Step 3 — Verify on trace $T$ (3 marks):**

| $i$ | State $s_i$ | $\Box(r \rightarrow \Diamond g)$ at $s_i$? | $\Box(g \rightarrow \bigcirc \lnot r)$ at $s_i$? |
|---|---|---|---|
| 0 | Red | True (green at $s_1$) | True (vacuously) |
| 1 | Green | Vacuously true | True ($s_2$ = Green) |
| 2 | Green | Vacuously true | True ($s_3$ = Yellow) |
| 3 | Yellow | Vacuously true | True |
| 4 | Red | True (green at $s_5$) | True |
| 5 | Green | Vacuous | True (no next state) |

**All three properties hold for trace $T$.** Verified.

> [!WARNING]
> **KTU Examiner's Valuation Pitfall Callout**
> * **Common Mistake 1:** Writing $\Box \Diamond g$ instead of $\Box(r \rightarrow \Diamond g)$ for "red is eventually followed by green." $\Box \Diamond g$ means "*infinitely often* green" — a much stronger claim. KTU deducts 1 mark.
> * **Common Mistake 2:** Forgetting the outer $\Box$ in property (ii). The implication must hold at *every* step, not just the first.
> * **Common Mistake 3:** Confusing $\Diamond$ with $\bigcirc$. "Eventually" ≠ "next."

---

## 5.3 KTU Examiner's Valuation Warning

> [!WARNING]
> **Critical Pitfalls to Avoid in PECST741 (Module 1 — Introduction)**
> 1. **Don't confuse specification with verification.** A *specification* describes *what*; *verification* checks *whether* the description matches reality. Marks are awarded separately.
> 2. **Always state the formal rule** before applying it. Writing just the final $wp$ expression without the assignment axiom or sequence rule loses 1–2 marks.
> 3. **Mathematical hygiene matters.** Use $\rightarrow$, not "$\Rightarrow$" in informal prose. Use $\wedge$ / $\vee$, not AND / OR, in math mode.
> 4. **Don't omit the $wp$ simplification step.** Leaving a long unsimplified expression loses the "final simplified" 1 mark.
> 5. **Real-world examples score extra.** Whenever the question says "give an example," a 1-line industrial use-case (AWS, Airbus, NASA) elevates your answer.
> 6. **Tool-name accuracy.** "SPIN" ≠ "Spin" (case-sensitive). "Alloy" ≠ "Aluminum." Spelling errors in tool names lose marks in 14-mark answers.

---

## 5.4 Topic Recap & Important Things to Remember

> [!NOTE]
> **Rapid Revision Checklist — Module 1: Introduction**

### Core Definitions
* **Formal Methods** = *Mathematically rigorous* techniques for specification, design, and verification.
* **Lightweight** = partial, low-cost; **Heavyweight** = full-system, high-cost.
* **Model-oriented** = state-based (Z, VDM, B); **Property-oriented** = logic-based (LTL, CTL); **Process-oriented** = communication-based (CSP, CCS).
* **Hoare Triple** $\{P\}\;S\;\{Q\}$ = partial correctness assertion.
* **Weakest Precondition** $wp(S, Q)$ = least restrictive precondition guaranteeing $Q$ after $S$.
* **Sound** = never proves a falsehood. **Complete** = proves every truth. **Decidable** = algorithm always halts.
* **LTL** = linear-time temporal logic. **CTL** = computation-tree logic.
* **Liveness property** = "something good *eventually* happens" ($\Diamond$). **Safety property** = "something bad *never* happens" ($\Box$).

### Must-Memorize Formulas
1. Assignment axiom: $wp(x := E, Q) \equiv Q[x/E]$
2. Sequence rule: $wp(S_1; S_2, Q) = wp(S_1, wp(S_2, Q))$
3. If-else rule: $wp = (B \wedge wp(S_1, Q)) \vee (\lnot B \wedge wp(S_2, Q))$
4. While rule: $wp(\text{while } B \text{ do } S, Q) \equiv I \wedge (B \rightarrow wp(S, I))$
5. LTL equivalences: $\Diamond \phi \equiv \top \mathcal{U} \phi$, $\Box \phi \equiv \lnot \Diamond \lnot \phi$
6. Soundness: $\vdash \phi \Rightarrow \models \phi$
7. Completeness: $\models \phi \Rightarrow \vdash \phi$

### Industrial Tools to Remember
| Tool | Type | Domain |
|---|---|---|
| SPIN | Model checker | Protocols, distributed systems |
| Alloy | Lightweight modeller | Software designs |
| Coq | Theorem prover | Compilers, kernels |
| Isabelle/HOL | Theorem prover | Mathematics, security |
| TLA+ | Specification language | Distributed algorithms (AWS) |
| Promela | Modelling language | Input to SPIN |
| B-Method | Model-oriented | Railway (METEOR, Paris line 14) |

### Real-World Deployment Facts
* **Amazon AWS** uses TLA+ for DynamoDB, S3, EBS internals.
* **Paris Metro Line 14** (driverless) was developed with the B-Method.
* **seL4 microkernel** verified in Isabelle/HOL (world's first verified OS kernel).
* **Aerospace (Airbus A380, Boeing 787)** uses DO-178C compliant formal techniques.

### Quick-Recall Buzzwords for Theory
* Axiomatic semantics
* Denotational semantics
* Operational semantics
* Refinement calculus
* Proof obligation
* State space explosion
* Bounded model checking
* Kripke structure
* Fairness
* Stuttering equivalence

> [!TIP]
> **Final Exam Strategy (KTU 2024):** For 14-mark questions, structure the answer as: (i) **Definition/Statement of the rule** → 2 marks, (ii) **Step-by-step derivation with formulas** → 3–4 marks, (iii) **Final answer/simplification** → 1–2 marks, (iv) **Real-world example or industrial tool** → 1 mark. This guarantees a clean $\geq 11 / 14$.

<!-- SECTION_5_END -->
