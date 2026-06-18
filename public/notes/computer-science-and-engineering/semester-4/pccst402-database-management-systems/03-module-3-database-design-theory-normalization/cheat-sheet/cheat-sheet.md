# MODULE CHEAT SHEET: Database Design Theory, Normalization & Transaction Management

---

## 1. CORE CONCEPT MATRIX

| # | Topic | Core Definition | Bloom Level | Primary Utility |
|---|-------|-----------------|-------------|-----------------|
| 1 | Functional Dependency (FD) | A constraint $X \rightarrow Y$: same X values ⇒ same Y values | Understand | Schema refinement, redundancy control |
| 2 | Trivial FD | $Y \subseteq X$ (always holds) | Remember | Simplification of FD sets |
| 3 | Non-Trivial FD | $Y \not\subseteq X$ | Remember | Meaningful constraints |
| 4 | Armstrong's Axioms | Reflexivity, Augmentation, Transitivity — sound & complete inference rules | Apply | Deriving $F^+$ |
| 5 | Closure $X^+$ | Set of all attributes functionally determined by X under F | Apply | Finding keys, testing membership |
| 6 | Canonical Cover $F_c$ | Minimal, unique equivalent FD set (no extraneous attrs, no redundant FDs) | Apply | Minimal basis for normalization |
| 7 | 1NF | Every attribute holds atomic (indivisible) values; no multi-valued/repeating groups | Apply | Eliminate multi-valued attrs |
| 8 | 2NF | 1NF + no partial dependency (non-prime attr not dependent on part of candidate key) | Analyze | Remove partial dependencies |
| 9 | 3NF | 2NF + no transitive dependency of non-prime attrs on candidate key | Analyze | Remove transitive dependencies |
| 10 | BCNF | For every $X \rightarrow Y$ in $F^+$, X must be a super key | Analyze | Stronger 3NF — lossless, dependency preserving may fail |
| 11 | Transaction | Logical unit of DB work — sequence of read/write ops executed atomically | Remember | Workload demarcation |
| 12 | ACID Properties | Atomicity, Consistency, Isolation, Durability | Understand | Reliability guarantees |
| 13 | Transaction Failure | Logical error, system crash, deadlock, local error | Remember | Recovery & abort handling |
| 14 | Lost Update Problem | Two concurrent transactions overwrite each other's writes | Analyze | Concurrency anomaly |
| 15 | Dirty Read | Reading uncommitted (possibly rolled-back) data | Analyze | Concurrency anomaly |
| 16 | Non-Repeatable Read | Same item read twice returns different values | Analyze | Concurrency anomaly |
| 17 | Phantom Read | New tuples appear in re-execution of range query | Analyze | Concurrency anomaly |
| 18 | Serial Schedule | Transactions execute one after another — no interleaving | Remember | Correctness benchmark |
| 19 | Serializable Schedule | Equivalent to some serial schedule (conflict / view) | Apply | Concurrency correctness |
| 20 | Recoverable Schedule | $T_j$ reads from $T_i$ ⇒ $T_i$ commits before $T_j$ | Apply | Recovery feasibility |
| 21 | Cascadeless Schedule | $T_j$ reads only committed values of other transactions | Apply | No cascading rollbacks |
| 22 | Strict Schedule | $T_j$ reads/writes neither uncommitted data of $T_i$ until $T_i$ aborts/commits | Apply | Easy recovery via before-image |
| 23 | Conflict Serializability | Precedence graph is acyclic (no cycles) | Analyze | Testing schedule equivalence |
| 24 | View Serializability | Same reads-from & final writes as some serial schedule | Analyze | Weaker condition — includes blind writes |
| 25 | 2-Phase Locking (2PL) | Locking in Growing phase; unlocking in Shrinking phase | Apply | Ensures conflict serializability |
| 26 | Strict 2PL | All exclusive locks held until commit/abort | Apply | Ensures strictness + recoverability |
| 27 | Time-Stamp Ordering (TSO) | Order by transaction start time; detect conflicts via timestamps | Apply | Non-locking CC |
| 28 | Thomas' Write Rule | Outdated writes ignored (skipped) to maintain view serializability | Apply | Optimized TSO |

---

## 2. THE MASTER FORMULA SHEET

### 2.1 Functional Dependency Theory

| # | Concept | Formula / Rule | Notation / Parameters |
|---|---------|----------------|------------------------|
| 1 | FD Definition | $X \rightarrow Y \iff \forall t_1, t_2 \in r(R): t_1[X] = t_2[X] \Rightarrow t_1[Y] = t_2[Y]$ | $X, Y \subseteq R$ (relation schema) |
| 2 | Trivial FD | $X \rightarrow Y$ where $Y \subseteq X$ | Always true by Reflexivity |
| 3 | Reflexivity | If $Y \subseteq X$ then $X \rightarrow Y$ | IR1 |
| 4 | Augmentation | If $X \rightarrow Y$ then $XZ \rightarrow YZ$ | IR2 |
| 5 | Transitivity | If $X \rightarrow Y$ and $Y \rightarrow Z$ then $X \rightarrow Z$ | IR3 |
| 6 | Union Rule | $\{X \rightarrow Y, X \rightarrow Z\} \vdash X \rightarrow YZ$ | Derived |
| 7 | Decomposition | $X \rightarrow YZ \vdash X \rightarrow Y$ | Inverse of Union |
| 8 | Pseudo-Transitivity | $X \rightarrow Y, WY \rightarrow Z \vdash WX \rightarrow Z$ | Derived |
| 9 | Set Closure | $F^+ = \{X \rightarrow Y \vert F \models X \rightarrow Y\}$ | $F$ = given FD set |
| 10 | Attribute Closure | $X^+ = \{A \in R \vert X \rightarrow A \in F^+\}$ | Computed iteratively |
| 11 | Key Test | $X$ is super key $\iff X^+ = R$ | Candidate key: minimal super key |
| 12 | Extraneous Attribute (in LHS) | $A$ extraneous in $X \rightarrow Y$ if $A \in X$ and $(X - \{A\}) \rightarrow Y \in F^+$ | — |
| 13 | Extraneous Attribute (in RHS) | $A$ extraneous in $X \rightarrow Y$ if $A \in Y$ and $X \rightarrow (Y - \{A\}) \in F^+$ | — |
| 14 | Canonical Cover Steps | (i) Make RHS singleton, (ii) Remove extraneous LHS, (iii) Remove redundant FDs | Repeat until no change |
| 15 | Lossless Join (Heuristic) | $(R_1 \cap R_2) \rightarrow R_1$ or $(R_1 \cap R_2) \rightarrow R_2$ | Tested per decomposition |

### 2.2 Normalization Decision Rules

| # | Normal Form | Condition | Decomposition Strategy |
|---|-------------|-----------|------------------------|
| 1 | 1NF | $\forall A \in R:$ values are atomic | Create separate table for multi-valued attrs |
| 2 | 2NF | 1NF + $\not\exists$ partial FD: $K_p \rightarrow A$ where $K_p \subset CK$, A is non-prime | Move A to relation with full key |
| 3 | 3NF | 2NF + $\not\exists$ transitive FD: $X \rightarrow Y \rightarrow A$ where A non-prime, X not super key, Y not candidate key | Synthesize using canonical cover |
| 4 | BCNF | $\forall X \rightarrow Y \in F^+$, X is super key | Decompose to eliminate offending FDs |
| 5 | Lossless-Join Test | $R = R_1 \bowtie R_2$ iff $(R_1 \cap R_2) \rightarrow R_1$ OR $(R_1 \cap R_2) \rightarrow R_2$ | Always aim for this |
| 6 | Dependency-Preserving | $(F_1 \cup F_2 \cup \ldots \cup F_n)^+ = F^+$ | Mandatory for 3NF (BCNF may fail) |

### 2.3 Transaction & Schedule Properties

| # | Concept | Formula / Definition | Units / Notation |
|---|---------|----------------------|------------------|
| 1 | Transaction | $T = \langle a_1, a_2, \ldots, a_n \rangle$ where $a_i$ = read/write op | $T_i$ denotes i-th transaction |
| 2 | Atomicity | All-or-nothing: $\Sigma_T = \Sigma$ (whole) or $\emptyset$ (nothing) | — |
| 3 | Consistency | $\Sigma_{T_i}(D) = \text{consistent}$ if $D$ was consistent | — |
| 4 | Isolation | $\text{Result}(T_i \parallel T_j) = \text{Result}(T_i; T_j)$ for some order | — |
| 5 | Durability | Committed changes survive all failures | — |
| 6 | Schedule $S$ | Ordering of ops of $\{T_1, T_2, \ldots, T_n\}$ preserving order within each $T_i$ | — |
| 7 | Serial Schedule | All ops of $T_i$ before all ops of $T_j$ | Conflict-free by definition |
| 8 | Equivalent Schedules | Same conflict relations / reads-from set / final DB state | — |
| 9 | Conflict Operations | $o_i, o_j$ on same data item, at least one is write, belong to different $T$ | (Read-Write, Write-Read, Write-Write) |
| 10 | Precedence Graph | Node per $T_i$; edge $T_i \rightarrow T_j$ if $T_j$ reads/writes after $T_i$'s conflicting op | Acyclic $\iff$ conflict-serializable |
| 11 | Recoverable | $\forall T_j$ reading $T_i$'s uncommitted value: $c_i \prec c_j$ | — |
| 12 | Cascadeless | $\forall T_j$: $T_j$ reads only values written by committed $T_i$ | — |
| 13 | Strict | No $T_j$ reads/writes uncommitted values of $T_i$ until $T_i$ ends | Strongest recoverability |

### 2.4 Concurrency Control — Lock & Time-Stamp Parameters

| # | Concept | Formula / Rule | Parameters |
|---|---------|----------------|------------|
| 1 | Shared Lock (S / Read) | Multiple compatible; prevents write | $S_i(X)$ |
| 2 | Exclusive Lock (X / Write) | Exclusive; blocks all others | $X_i(X)$ |
| 3 | Lock Compatibility | $S$-$S$: ✓, $S$-$X$: ✗, $X$-$X$: ✗ | Matrix check |
| 4 | 2PL Condition | $\forall T_i: \text{Lock point} = \text{last lock acquired}$ | $G(T_i) \cap S(T_i) = \emptyset$ for any time $t$ |
| 5 | Basic 2PL | Growing phase (locks only) → Shrinking phase (unlocks only) | Guarantees conflict-serializability |
| 6 | Conservative 2PL | Lock all items before execution begins | No deadlock, no starvation possible |
| 7 | Strict 2PL | All X-locks held until commit/abort | Guarantees strict schedule |
| 8 | Timestamp $TS(T_i)$ | $TS(T_i) < TS(T_j) \iff T_i$ started before $T_j$ | Logical or system clock |
| 9 | W-timestamp $W\text{-}TS(Q)$ | Largest $TS(T_i)$ that wrote Q successfully | Per data item |
| 10 | R-timestamp $R\text{-}TS(Q)$ | Largest $TS(T_i)$ that read Q | Per data item |
| 11 | TSO Read Rule | $T_i$ reads Q: if $TS(T_i) < W\text{-}TS(Q)$ → reject $T_i$ & rollback | $TS(T_i) \geq W\text{-}TS(Q)$ ⇒ accept |
| 12 | TSO Write Rule | $T_i$ writes Q: if $TS(T_i) < R\text{-}TS(Q)$ → reject; if $TS(T_i) < W\text{-}TS(Q)$ → reject | Otherwise accept |
| 13 | Thomas' Write Rule | If $TS(T_i) < R\text{-}TS(Q)$ reject; If $TS(T_i) < W\text{-}TS(Q)$ **ignore write** (accept $T_i$) | Maintains view-serializability |
| 14 | Deadlock Detection | Wait-for graph: cycle ⇒ deadlock | Periodic detection by victim selection |

### 2.5 Precedence Graph Decision Rule

| Graph Property | Conclusion |
|----------------|------------|
| Empty graph | Schedule is serializable to any order |
| Acyclic (DAG) | **Conflict-serializable** |
| Cycle present | **NOT** conflict-serializable |
| All nodes on single path | Serial schedule |
| Multiple sources in DAG | Some valid serial order exists |

---

## 3. HIGH-YIELD EXAM CHECKPOINTS

### A. Functional Dependencies
- **Armstrong's Axioms are SOUND and COMPLETE** — guaranteed mark if asked.
- $X^+$ algorithm: iterative — start with $X$, add RHS of FDs whose LHS $\subseteq$ current set.
- Always list candidate keys in sorted order; CK count = `n!` possibilities to check.
- **Canonical cover** steps: (1) Split RHS, (2) Try removing LHS attrs (test via closure), (3) Try removing redundant FDs.
- **Extraneous attribute test** (LHS): remove A from $\alpha$; if $(\alpha - \{A\})^+ \supseteq \beta$, then A is extraneous.
- **Extraneous attribute test** (RHS): remove A from $\beta$; if $\alpha^+ \supseteq (\beta - \{A\})$, then A is extraneous.

### B. Normal Forms
- **1NF ↔ 2NF transition**: Eliminate partial dependencies (sub-keys determining non-prime).
- **2NF ↔ 3NF transition**: Eliminate transitive dependencies (X → Y → A, where A non-prime).
- **3NF algorithm (Synthesis)**: Compute $F_c$, for each FD create $R_i = XY$, merge if $R_i \subseteq R_j$, ensure CK preserved.
- **BCNF algorithm (Decomposition)**: Find $X \rightarrow Y$ where X not super key, decompose $R$ into $(X \cup Y)$ and $(R - (Y - X))$; repeat.
- **BCNF is NOT always dependency-preserving** — example: R(A,B,C), F = {AB→C, C→B} has BCNF that loses C→B.

### C. Transactions & ACID
- **ACID order**: Atomicity → Consistency → Isolation → Durability.
- **Transaction state diagram**: Active → Partially Committed → Committed / Failed → Aborted → Terminated.
- Difference: **System failure** (DB on disk intact) vs **Media failure** (DB disk corrupted).
- **Logical error** = bad input/condition; **System error** = deadlock/timeout; **System crash** = power failure.

### D. Schedules — THE most-asked topic
- Identify conflict pairs: same data item + at least one write + different transactions.
- **Draw precedence graph**: $T_i \rightarrow T_j$ if $T_j$ has conflict op AFTER $T_i$.
- **Conflict-serializable ⟺ acyclic precedence graph** (cyclicity test is the key).
- View-equivalent requires: (1) Same initial reads, (2) Same reads-from, (3) Same final writes.
- **Cascade**: $T_2$ reads $T_1$'s uncommitted write, then $T_3$ reads $T_2$ → cascade rollback on $T_1$ failure.
- Hierarchy: **Serial ⊂ Strict ⊂ Cascadeless ⊂ Recoverable ⊂ All schedules**.

### E. Concurrency Control
- **2PL guarantees conflict-serializability but NOT deadlock-freeness**.
- Basic 2PL: lock-only-then-unlock-only — ensures serializability.
- Strict 2PL: hold all X-locks till commit — ensures recoverability + serializability.
- **Thomas' Write Rule is OPTIMIZATION** — maintains view-serializability but not conflict-serializability.
- Time-stamp algorithm: NO deadlock, NO starvation, but transactions may restart.
- **Deadlock prevention**: wait-die (old waits for young) or wound-wait (young waits for old).

### F. Quick Equivalences & Theorems
- Lossless join ⟺ common attributes form a key for at least one of the two relations.
- Every BCNF relation is in 3NF, but NOT vice versa.
- Every conflict-serializable schedule is view-serializable; reverse is FALSE (blind writes case).
- Strict 2PL schedule is both conflict-serializable and recoverable.

---

## 4. EXAMINER'S WARNING GUIDE (Valuation Insights)

| # | Common Mistake | Penalty Risk | Correct Approach |
|---|----------------|--------------|------------------|
| 1 | Writing FD as $X \rightarrow Y$ without context | -1 to -2 | Always state: $X, Y \subseteq R$ for relation R |
| 2 | Confusing "super key" and "candidate key" | -2 | Super key: any set determining all attrs; Candidate key: **minimal** super key |
| 3 | Forgetting atomicity in 1NF definition | -1 | 1NF = no multi-valued, no nested relations, no repeating groups |
| 4 | Saying 2NF removes "all" dependencies | -2 | 2NF removes only **partial** dependencies, not transitive |
| 5 | Stating BCNF is always dependency-preserving | -3 (FALSE) | Counter-example: AB→C, C→B violates DP |
| 6 | Confusing cascadeless with strict | -2 | Cascadeless: no read of uncommitted; Strict: no read OR write of uncommitted |
| 7 | Saying serial schedule ≠ serializable schedule | -1 | Serial IS a serializable schedule (trivially equivalent to itself) |
| 8 | Treating 2PL as deadlock-free | -2 | 2PL can deadlock; need conservative/prevention techniques |
| 9 | Skipping direction in precedence edge | -1 to -2 | Edge $T_i \rightarrow T_j$ means $T_i$ **precedes** $T_j$ |
| 10 | Not listing all candidate keys | -1 each | Check all minimal subsets; sort them in answer |
| 11 | Writing closure algorithm without iteration | -2 | Show step-by-step iteration table |
| 12 | Claiming Thomas' Write Rule is conflict-serializable | -3 | TWR ensures **view-serializability** only |
| 13 | Wrong ACID expansion | -1 | Atomicity, Consistency, Isolation, Durability — exact order |
| 14 | Mixing transaction states "aborted" and "terminated" | -1 | Aborted: rolled back; Terminated: completed (committed or aborted) |
| 15 | Forgetting to test lossless join after decomposition | -2 | Always show $R_1 \cap R_2 \rightarrow R_1$ or $R_2$ test |
| 16 | Mislabeling schedule as "serializable" without proof | -1 | Must show precedence graph + acyclicity OR view equivalence |
| 17 | Not stating "Phantom" requires SET/Range query | -1 | Phantom: predicate-based; Non-repeatable: tuple-based |
| 18 | Treating deadlock prevention ≠ detection | -1 | Prevention: never occur; Detection: occur but recover |

### ✍️ Presentation Guidelines for Maximum Marks
- **Always draw precedence graphs** with labeled edges (operation + data item).
- For closure problems, use **tabular iteration** with columns: Iteration $\vert$ Attrs added $\vert$ FDs used.
- For canonical cover: number each transformation step (Step 1, 2, 3...).
- For 2PL: show **growing/shrinking phase boundaries** explicitly with timestamp.
- Use **R₁, R₂, R₃** consistently for decomposed relations; never reuse names.
- Mention "**lossless join**" and "**dependency-preserving**" verdict for every decomposition.
- For schedule problems: list conflict pairs **before** drawing the graph.

---

## 5. QUICK-REVISION DIAGRAM (Mermaid)

```mermaid
mindmap
  root((Module 3: Design Theory & Transactions))
    FD_Theor)
    y("Functional Dependency Theory"))
      Basics
        Definition_X_to_Y
        Trivial_vs_NonTrivial
      Inference_Rules
        Reflexivity
        Augmentation
        Transitivity
        Derived_Union_Decomp_Pseudo
      Computations
        Attribute_Closure_X_plus
        Set_Closure_F_plus
        Canonical_Cover_Fc
        Extraneous_Attribute_Test
        Candidate_Key_Finding
    Normal_Forms
      1NF
        Atomic_Values
        No_Repeating_Groups
      2NF
        Removes_Partial_Dependency
      3NF
        Removes_Transitive_Dependency
        Synthesis_Algorithm
      BCNF
        Super_Key_Test
        Decomposition_Algorithm
        May_Lose_DP
    Transactions
      ACID_Properties
        Atomicity
        Consistency
        Isolation
        Durability
      States
        Active
        Partially_Committed
        Committed
        Failed
        Aborted
        Terminated
      Failures
        Logical_Error
        System_Crash
        Media_Failure
        Deadlock
      Concurrency_Problems
        Lost_Update
        Dirty_Read
        Non_Repeatable_Read
        Phantom_Read
    Schedules
      Serial
      Serializable
        Conflict_Serializable_PG_Acyclic
        View_Serializable
      Recoverability
        Recoverable
        Cascadeless
        Strict
    Concurrency_Control
      Lock_Based
        Shared_S
        Exclusive_X
        Two_Phase_Locking_2PL
          Basic_2PL
          Strict_2PL
          Conservative_2PL
        Deadlock_Handling
          Wait_Die
          Wound_Wait
      Timestamp_Based
        TSO_Read_Rule
        TSO_Write_Rule
        Thomas_Write_Rule
```

---

## 6. RAPID-FIRE RECALL FACTS

| # | Fact |
|---|------|
| 1 | Armstrong's axioms are **sound** (don't derive false FDs) and **complete** (derive all true FDs). |
| 2 | $F^+$ can have up to $2^{2^{n}}$ FDs where $n = \vert R \vert$. |
| 3 | Candidate key ordering convention: lexicographic ascending. |
| 4 | Prime attribute = part of ANY candidate key; Non-prime = part of NO candidate key. |
| 5 | BCNF ⊂ 3NF ⊂ 2NF ⊂ 1NF (strict inclusion). |
| 6 | Phantom problem is solved by **predicate locking / index locking**, not just 2PL. |
| 7 | **Strict 2PL** = Basic 2PL + hold all exclusive locks till commit/abort. |
| 8 | Time-stamp ordering: NO deadlocks, but **possible starvation** of long transactions. |
| 9 | Schedule of n transactions has at most $n!$ equivalent serial schedules. |
| 10 | "Conflict equivalent" ⇒ "View equivalent" (BUT NOT vice versa). |
| 11 | Conservative 2PL: deadlock-free but **impractical** (must predeclare all items). |
| 12 | Media failure requires **archive backup** + log; System failure needs only log recovery. |
| 13 | **Dirty read** = write-read conflict; **Lost update** = write-write conflict. |
| 14 | Thomas' Write Rule **skips** (ignores) the write, does not abort the transaction. |
| 15 | Checkpoint = point in log where DB is consistent; speeds up recovery. |

---

**END OF MODULE CHEAT SHEET — Module 3**
*Best of luck for your ESE — revise FDs, draw precedence graphs, and remember the ACID hierarchy!* 🎯
