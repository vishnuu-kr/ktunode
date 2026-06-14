# Distributed Databases  - Distributed Systems, Introduction, Architecture

<!-- SECTION_1_START -->
# Distributed Databases – Distributed Systems, Introduction & Architecture

> [!IMPORTANT]
> **KTU 2024 Scheme Focus (Module 2 – PECST634):** This note establishes the foundational vocabulary of distributed systems, distinguishes distributed databases from related paradigms, and dissects the canonical distributed DBMS architecture that subsequent modules (fragmentation, allocation, query processing, transaction management) build upon.

---

## 1.1 What is a Distributed System?

> [!NOTE]
> **Formal Definition (KTU 2024 Syllabus Terminology):**
> A **Distributed System** is a collection of **autonomous computing elements** (processors, nodes, sites) interconnected by a **computer network**, cooperating to achieve a **common goal** by exchanging messages over the network. From the perspective of the *user*, the entire collection acts as **a single coherent, integrated system**, masking the underlying physical separation.

### Key Qualifying Properties
- **Autonomy** – Each node has its own processor, memory, and local OS; no master clock governs the system.
- **Network Interconnection** – Nodes communicate strictly through **message passing** over LAN/WAN channels.
- **Cooperation** – Nodes coordinate via protocols (TCP/IP, RPC, RMI) to fulfil a unified task.
- **Single System Image (SSI)** – The *client* perceives a unified logical entity despite physical distribution.

### Intuitive Analogy
> Think of a **chain of bank branches** across Kerala. Each branch has its own servers, staff, and ledgers (autonomy). They are connected by leased telecom lines (network) and share a single "Bank Database" in the customer's mind. When you withdraw money in Trivandrum, the branch checks the **central account logic** located in Ernakulam (cooperation). Yet, the customer simply experiences *one bank* — the **Single System Image**.

---

## 1.2 What is a Distributed Database?

> [!NOTE]
> **Formal Definition:**
> A **Distributed Database (DDB)** is a **logically interrelated collection of data** (combined with descriptive metadata) that is **physically distributed** across a network of autonomous computers, yet appears to the user as a **single logical database**. The software that manages such a system uniformly is called a **Distributed Database Management System (DDBMS)**.

Mathematically, a distributed database can be represented as a finite union of *fragmented relations*:

$$DDB = \bigcup_{i=1}^{n} R_i, \quad \text{where } R_i \text{ resides at site } S_i$$

such that $\forall\, q \in Q$ (query set), $q$ can be expressed **without** the user specifying the location of any $R_i$.

### Three Foundational Characteristics of a DDB
| Property | Meaning |
|---|---|
| **Distribution** | Data is stored across geographically separated sites. |
| **Logical Correlation** | Distributed pieces share relationships (joins, referential integrity). |
| **Homogeneity** | All sites run the *same* (or compatible) DDBMS software. |

### Intuitive Analogy
> Imagine a **national e-commerce portal** (e.g., Flipkart). Customer records live in Mumbai, inventory in Bangalore, order history in Chennai, and payment logs in Hyderabad. Customers browsing from Kerala don't see these divisions — they query *one* catalog. Internally, the DBMS is orchestrating a **federation of fragments** spread across the country.

---

## 1.3 Distributed Database ≠ Distributed Processing ≠ Parallel Database

This distinction is **highly tested** in KTU board exams. Memorize it.

| Feature | Distributed Database | Distributed Processing | Parallel Database |
|---|---|---|---|
| **Definition** | Data stored at multiple sites; user views it as one DB | Centralized DB accessed by multiple processors via a network | Multiple processors + disks execute **one** query in parallel |
| **Site Coupling** | Loosely coupled (network) | Loosely coupled | Tightly coupled (high-speed bus) |
| **Inter-Node Distance** | Geographic (WAN/LAN) | Geographic (WAN) | Physical proximity (cluster) |
| **Site Autonomy** | High | Moderate | Low (acts as one machine) |
| **Typical Goal** | Reliability + Local autonomy | Distributed computation on **single** DB | Speed-up of a single query |
| **Example** | Banking network with branches in Kottayam, Kochi, Calicut | A Web server farm processing queries on a single Oracle DB | Oracle RAC, Teradata |

> [!IMPORTANT]
> **Examiner Heuristic:** A *distributed database* is identified by **data distribution**. A *distributed processing system* is identified by **processing distribution over a centralized DB**. A *parallel database* is identified by **tightly coupled cooperation within a single site**.

---

## 1.4 Motivation & Advantages of Distributed Databases

1. **Transparency** – User is unaware of distribution.
2. **Reliability / Availability** – Failure of one site does not halt the system (**robustness**).
3. **Performance** – Queries execute on local data → reduced network traffic.
4. **Scalability** – New sites can be added incrementally.
5. **Modularity** – Sites are loosely coupled; easier evolutionary growth.
6. **Local Autonomy** – A branch can operate independently during network partitions.

---

## 1.5 Disadvantages / Inherent Trade-offs

- **Higher Software Cost** – DDBMS licensing is more expensive.
- **Complex Concurrency Control** – Distributed locking protocols (2PC, 3PC) are required.
- **Distributed Deadlock Detection** – Significantly harder than local.
- **Network Saturation** – Heavy join queries can saturate links.
- **Security Complexity** – More points of attack.
- **Data Integrity Overhead** – Replicated data must be kept consistent.
- **Lack of Standards** – Heterogeneous DDBMS interoperability is non-trivial.
- **Lack of Experience** – Few practitioners understand distributed system subtleties.

---

## 1.6 Architecture Taxonomy Overview

The architecture of a DDBMS can be viewed at **three orthogonal levels**:

> [!VISUALIZATION CONTROL]
> **Concept:** Three-Layer Orthogonal Classification of DDBMS Architecture
> **GeoGebra / Desmos Input Equations:**
> * Autonomy axis: $A = \{0, 1, 2\}$ where $0$=None, $1$=Loose, $2$=Tight
> * Distribution axis: $D \in [0, 1]$ (no distribution $\rightarrow$ full distribution)
> * Heterogeneity axis: $H \in \{0, 1\}$ (homogeneous $\rightarrow$ heterogeneous)
> **Visual Description:** A 3D cuboid space with three orthogonal axes. A point at $(A, D, H)$ classifies a DDBMS architecture — slide along the axes to explore Client–Server, Peer-to-Peer, Federated, and Multi-DBMS configurations.

### 1.6.1 Autonomy
- **Tight Integration** – A single image is preserved *strongly*; global schema is mandatory.
- **Semi-Autonomous** – Local autonomy in design and execution, but global schema is partly shared.
- **Full Autonomy** – No global schema; integration is **loose** (typical of *federated* systems).

### 1.6.2 Distribution
- **Client/Server** – Functionality is split between requesters (clients) and providers (servers).
- **Peer-to-Peer (Collaborating Servers)** – No privileged server; all nodes are equal participants.
- **Multi-DBMS (Heterogeneous)** – Multiple autonomous, possibly heterogeneous DBMSs cooperate.

### 1.6.3 Heterogeneity
- **Heterogeneous DDBMS** – Sites may run *different* DBMSs (Oracle, MySQL, PostgreSQL).
- **Homogeneous DDBMS** – All sites run the *same* DBMS — a strong assumption simplifying query planning and lock management.

---

## 1.7 Reference Architecture: ANSI-SPARC Extended for DDB

The classic **three-schema architecture** (External, Conceptual, Internal) is extended with **two more levels** in a DDBMS:

| Layer | Schema | Scope |
|---|---|---|
| **External Schema (ES₁…ESₙ)** | User view | Per user / per application |
| **Global Conceptual Schema (GCS)** | Logical whole of DDB | Single global view |
| **Fragmentation Schema (FS)** | Maps GCS to fragments | Logical fragmentation |
| **Allocation Schema (AS)** | Maps fragments to sites | Physical placement |
| **Local Mapping Schema (LMS)** | Maps fragment to local storage | Per-site internal schema |

> [!NOTE]
> **Why this matters for KTU 2024:** The **fragmentation schema** and **allocation schema** are the subject of Module 2's core exercises (horizontal, vertical, hybrid fragmentation). Always reference them precisely in your exam answers.

---

## 1.8 Components of a Distributed DBMS (Top-Level)

> [!IMPORTANT]
> **Six core components (Özsu & Valduriez, the KTU prescribed reference):**
> 1. **Local DBMS** (LDBMS) – Manages the local site.
> 2. **Data Manager (DM)** – Controls access to the local physical database.
> 3. **Global Directory / System Catalog** – Stores global schema, fragmentation, allocation, statistics.
> 4. **Distributed Query Processor (DQP)** – Plans, optimizes, decomposes queries.
> 5. **Distributed Transaction Manager (DTM)** – Concurrency control + atomic commit (2PC).
> 6. **Distributed Recovery Manager (DRM)** – Logs and restores sites post-failure.

---

## 1.9 Summary Mental Model for This Section

The **Distributed Database** is the *data* layer. The **DDBMS** is the *software* layer that makes it look unified. The **Distributed System** is the *infrastructure* layer (network + nodes) that physically hosts both. As we descend the KTU Module-2 syllabus, we progressively deal with **how** to slice the global schema (fragmentation), **where** to place the slices (allocation), **how** to ask questions across them (distributed query processing), and **how** to keep them in agreement (distributed transaction management).
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Distributed Database – Formal Definition Recast

A distributed database $D$ is a finite collection of relations $R_1, R_2, \dots, R_n$ partitioned (fragmented) and replicated across a set of sites $S = \{S_1, S_2, \dots, S_m\}$. Mathematically:

$$D \;=\; \big\{ R_1^{S_{i_1}}, R_2^{S_{i_2}}, \dots, R_n^{S_{i_m}} \,\big\}$$

subject to:
- **Distribution Constraint:** $\;m \geq 2$ and at least one $R_j$ must physically reside at a site *different* from at least one other $R_k$.
- **Logical Correlation:** $\;\exists\,\,\text{relationship}(R_j, R_k)$ preserved across sites (e.g., foreign-key, join attribute).
- **Single System Image (SSI):** $\forall q \in Q,\;\; q$ references $D$ by *name*, not by *location*.

---

## 2.2 Twelve Rules of a Distributed Database (Date's Rules)

> [!NOTE]
> **Date's 12 Rules** appear frequently in KTU Module 1 / 2 short-answer questions. Memorize the *principle* behind each:

1. **Local Autonomy** – Each site is independent of all others for local operations.
2. **No Reliance on a Central Site** – No master site; system survives master failure.
3. **Continuous Operation** – 24/7 availability; no scheduled shutdowns.
4. **Location Independence** – User doesn't know (or care) where data resides.
5. **Fragmentation Independence** – User sees one logical object; fragmentation is hidden.
6. **Replication Independence** – User sees one copy; replication is hidden.
7. **Distributed Query Processing** – Queries optimized across sites.
8. **Distributed Transaction Management** – ACID properties preserved globally.
9. **Hardware Independence** – Sites may run heterogeneous hardware.
10. **Operating System Independence** – Sites may run heterogeneous OSes.
11. **Network Independence** – Sites may use different networks/protocols.
12. **DBMS Independence** – Sites may use different DBMSs (heterogeneous DDBMS).

---

## 2.3 Distributed DBMS Architecture Variants

### 2.3.1 Client–Server Architecture
A **two-tier** structure where multiple *clients* issue queries and a (typically single) *server* executes them. A special case is the **multiple client / single server** mode, which is the simplest production DDBMS deployment (e.g., a regional office accessing a central head-office Oracle server).

### 2.3.2 Collaborating Server (Peer-to-Peer) Architecture
**Multiple servers** of equal standing collaborate to satisfy a query. There is **no privileged master site**; each server owns a subset of the data and may act as a client to other servers. This satisfies *Rule 2* (no central site) and is the architecture adopted by *Cassandra* and *Google Spanner* (loosely speaking).

### 2.3.3 Multi-DBMS (Federated / Heterogeneous) Architecture
A **loosely coupled federation** of autonomous, possibly heterogeneous DBMSs, integrated through a **mediator/wrapper** layer. Each constituent DBMS retains full autonomy (the strongest form of *Date Rule 1*). Two flavours exist:
- **Federated DBMS** – Global schema exists, but access is mediated; tightly integrated *federation*.
- **Heterogeneous DDBMS** – No global schema; integration is dynamic and loose.

### 2.3.4 Client–Middleware–Server (Three-Tier)
The most common production pattern: a **middleware layer** (e.g., application server, API gateway) sits between clients and a federation of DBMSs. It hosts the *global query processor*, *directory*, and *transaction coordinator*.

---

## 2.4 The Fragmentation & Allocation Stack

The **fragmentation schema** and **allocation schema** together bridge the GCS and LMS. Their formal interplay:

$$\text{GCS} \;\xrightarrow{\text{Fragmentation Schema (FS)}}\; \{F_1, F_2, \dots, F_k\} \;\xrightarrow{\text{Allocation Schema (AS)}}\; \{(F_i, S_{j})\} \text{ pairs}$$

Three fragmentation types are tested in KTU Module 2:
| Fragmentation | Operation | Symbol |
|---|---|---|
| **Horizontal** | $\sigma_p(R)$ — select tuples by predicate | $R_i = \sigma_{p_i}(R)$ |
| **Vertical** | $\pi_{A_j}(R)$ — project onto attribute subsets | $R_j = \pi_{A_j}(R)$ |
| **Hybrid (Mixed)** | Combination of H and V | $R_{hv} = \sigma_p(\pi_{A_j}(R))$ |
| **Derived Horizontal** | Fragmentation of $R$ driven by $S$ | $R_i = R \bowtie S_i$ |

**Correctness rules of fragmentation** (always cite in exams):
1. **Completeness** – Every tuple of $R$ appears in at least one fragment: $R = \bigcup_i R_i$.
2. **Disjointness** – Fragments of the same relation do not share tuples (for non-replicated H-fragmentation): $R_i \cap R_j = \emptyset$ for $i \neq j$.
3. **Reconstruction** – The original relation can be recovered: $R = \nabla_i R_i$ where $\nabla$ is the appropriate reconstruction operator ($\cup$ for H, $\bowtie$ for V).

---

## 2.5 Replication Schemes

A fragment may be allocated to **one site** (non-replicated / *partitioned*) or **multiple sites** (replicated). Replication types:

| Type | Description | Trade-off |
|---|---|---|
| **Fully Replicated** | Every site holds a complete copy of the DB | Best read performance, worst write cost |
| **Partially Replicated** | Some, but not all, fragments are replicated | Balanced trade-off |
| **Non-Replicated (Partitioned)** | Each fragment at exactly one site | Best write performance, worst availability |
| **Primary-Copy** | One *primary* (writable) + many *secondaries* (read-only) | Practical compromise (e.g., MySQL Group Replication) |

---

## 2.6 KTU Formula & Definition Cheat Sheet

| Symbol / Term | Definition | Use |
|---|---|---|
| $D = \bigcup_i R_i$ | Distributed database as union of fragments | Top-level definition |
| $R_i = \sigma_{p_i}(R)$ | Horizontal fragment | Fragmentation rule |
| $R_j = \pi_{A_j}(R)$ | Vertical fragment | Fragmentation rule |
| $R = \bigcup_i R_i$ | Reconstruction of H-fragments | Completeness rule |
| $R = \Join_i (\pi_{TID} R_i \bowtie R_i)$ | Reconstruction of V-fragments (using tuple-ID) | Reconstruction rule |
| $m \geq 2$ | Number of sites | Minimum for DDB |
| $\text{SSI}$ | Single System Image | User transparency goal |
| $\text{GCS, FS, AS, LMS}$ | Schema layers in DDBMS | 5-layer reference arch. |
| $\text{2PC, 3PC}$ | Two-/Three-Phase Commit | Atomic commit protocol |
| $\text{DQP}$ | Distributed Query Processor | Query decomposition & optimization |
| $\text{DTM}$ | Distributed Transaction Manager | Concurrency + atomicity |
| $\text{DRM}$ | Distributed Recovery Manager | Crash + log recovery |
| $\rho = \dfrac{\#\text{replicas of fragment } F}{\#\text{sites in system}}$ | Degree of replication | Replica analysis |

> [!IMPORTANT]
> **Vertical Fragmentation Reconstruction (VTID Pattern):**
> $$R \;=\; \Join_{i=1}^{n}\, \pi_{A_i \cup \{\text{TID}\}} R_i$$
> Each vertical fragment must include the **tuple identifier (TID)** as a virtual attribute to allow a lossless join-based reconstruction.

---

## 2.7 Real-World Engineering Utility

- **Banking (RBI NEFT/RTGS Backbone):** DDBMS enables 24/7 nationwide transaction processing with primary-copy replication between regional databases.
- **E-Commerce (Amazon, Flipkart):** Horizontally fragmented product catalogs allocated by region; reads are mostly local; writes coordinated by **Two-Phase Commit**.
- **Telecommunications (BSNL, Jio CDR Billing):** Vertically fragmented customer–call–bill relations; data partitioned across zone-level data centres.
- **Healthcare (AIIMS Telemedicine):** Hybrid fragmentation — patients by geography, attributes by clinical department — with selective replication for disaster recovery.
- **Research (CERN LHC Data Grid):** Federated DDBMS over heterogeneous stores (Oracle, Hadoop, custom filesystems) with mediator-based query planning.

> [!WARNING]
> **Common KTU Mistake:** Confusing *DDB* with *DDBMS*. The **database** is the data; the **DBMS** is the software. When asked *"What is a distributed database?"* the answer must start with the **data**, not the software.

---

## 2.8 Why the Five-Layer Reference Architecture Is Used

The five-layer model separates concerns:
- **External schemas** describe *who* sees *what*.
- **GCS** is the *unified logical view* of all data.
- **FS** decides *how* to slice relations (logical fragmentation — a database designer's concern).
- **AS** decides *where* to place slices (physical placement — a database administrator's concern).
- **LMS** maps slices to *local physical storage* (handled by each site's LDBMS).

> [!NOTE]
> **Why this matters:** A *fragmentation* is a logical operation; a *fragment* is a logical entity. *Allocation* makes a fragment a *physical* object at a specific site. Two separate schemas (FS and AS) keep these two concerns independently alterable — you can re-allocate without re-fragmenting.

---

## 2.9 Component Interaction Blueprint (Textual)

For a query $Q$ over $D$:
1. **User** issues $Q$ at a local site through the *External Schema*.
2. **DQP** consults the *GCS* to translate $Q$ into a relational algebra tree.
3. **DQP** consults the *FS* to expand global relations into fragment references.
4. **DQP** consults the *AS* to map fragments to sites and produces a *distributed execution plan*.
5. **DTM** manages concurrency (lock manager) and atomic commit (2PC) across participating sites.
6. **Local DBMS** + **Data Manager** at each site executes the local sub-query.
7. **DRM** logs changes locally and supports recovery after crashes.
8. **DQP** assembles results and returns them through the *External Schema*.

> [!TIP]
> **For KTU 14-mark answers:** Always walk through this pipeline step-by-step. Examiners award marks for naming each component and its exact role. A common pitfall is forgetting the **Distributed Recovery Manager** entirely.
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Code, and Worked Examples

> [!IMPORTANT]
> **Section Discipline:** This section is divided into four worked examples aligned to the most frequently asked KTU Module 2 patterns. Every algebraic, algorithmic, and architecture-mapping step is explicitly written out — *no step-skipping, no placeholders*.

---

## 3.1 Worked Example 1: Classifying an Architecture (Short-Answer Style)

**Problem:** A regional airline operates three reservation centres in Kerala (Trivandrum, Kochi, Calicut). Each centre runs an *identical* Oracle 19c DBMS on its own server and stores its own customer and flight data. There is no central server. Centres communicate via leased lines. End users see one unified reservation system. **Classify the architecture** along Autonomy, Distribution, and Heterogeneity.

### Solution (Step-by-Step)

**Step 1 — Identify the distribution pattern.**
The three servers are *equal* participants; there is no master. ⇒ This is a **Peer-to-Peer / Collaborating Server** architecture.

**Step 2 — Assess Autonomy.**
Each centre can operate independently during a network outage. ⇒ **Full Autonomy** (per Date's Rule 1).

**Step 3 — Assess Heterogeneity.**
All three sites run *Oracle 19c*. ⇒ **Homogeneous** DDBMS.

**Step 4 — Assess Fragmentation behaviour (implied).**
Customers and flights are likely horizontally fragmented by region. ⇒ Implied H-fragmentation with no replication mentioned → **Non-replicated / Partitioned** allocation.

**Step 5 — Compose the final classification.**
- Distribution = **Peer-to-Peer**
- Autonomy = **Full**
- Heterogeneity = **Homogeneous**
- Architecture = **Collaborating-Server Homogeneous DDBMS**

> [!NOTE]
> **Mark Allocation Heuristic (KTU 3-mark):** Each correct axis identification ≈ 1 mark. Always name the three axes explicitly in your answer.

---

## 3.2 Worked Example 2: Fragmentation and Allocation Mapping

**Problem (14-mark style, sub-parts):**

Consider the global relation

$$\text{EMP}(\underline{\text{ENO}}, \text{ENAME}, \text{SALARY}, \text{DEPTNO}, \text{LOCATION})$$

The enterprise has three sites: **Trivandrum (T)**, **Kochi (K)**, **Calicut (C)**. The company decides to:
- **Fragment horizontally** by `DEPTNO`: D1 = {10, 20}, D2 = {30, 40}, D3 = {50, 60}.
- **Allocate** the corresponding fragments to T, K, C respectively.
- **Replicate** the entire `DEPTNO` lookup dimension in a *side relation* `DEPT(DEPTNO, DNAME)`.

**(a) Write the fragmentation schema and the allocation schema. (7 marks)**
**(b) State and apply Date's correctness rules (completeness, disjointness, reconstruction). (7 marks)**

### Solution

#### Part (a) — Fragmentation and Allocation Schemas

**Step 1 — Define the three horizontal fragments using selection predicates:**

$$
\begin{aligned}
\text{EMP}_1 &= \sigma_{\text{DEPTNO} \in \{10,\,20\}}(\text{EMP}) \\
\text{EMP}_2 &= \sigma_{\text{DEPTNO} \in \{30,\,40\}}(\text{EMP}) \\
\text{EMP}_3 &= \sigma_{\text{DEPTNO} \in \{50,\,60\}}(\text{EMP})
\end{aligned}
$$

**Step 2 — Write the Fragmentation Schema (FS):**
$$
\text{FS} \;=\; \big\{\,(\text{EMP}_1,\, p_1),\;(\text{EMP}_2,\, p_2),\;(\text{EMP}_3,\, p_3)\,\big\}
$$
where
- $p_1 : \text{DEPTNO} \in \{10, 20\}$
- $p_2 : \text{DEPTNO} \in \{30, 40\}$
- $p_3 : \text{DEPTNO} \in \{50, 60\}$

**Step 3 — Write the Allocation Schema (AS):**
$$
\text{AS} \;=\; \big\{\,(\text{EMP}_1,\, S_T),\;(\text{EMP}_2,\, S_K),\;(\text{EMP}_3,\, S_C)\,\big\}
$$
Each fragment is allocated to exactly one site ⇒ **non-replicated / partitioned** allocation.

**Step 4 — Replication table for DEPT (full-replication example):**
$$
\text{AS}_\text{DEPT} \;=\; \big\{\,(\text{DEPT},\, \{S_T, S_K, S_C\})\,\big\}
$$
⇒ DEPT is *fully replicated* (one fragment at three sites).

#### Part (b) — Date's Correctness Rules

**Step 1 — Completeness.** Every tuple of EMP must appear in at least one fragment.
$$
\text{EMP} \;=\; \text{EMP}_1 \,\cup\, \text{EMP}_2 \,\cup\, \text{EMP}_3
$$
The predicates $p_1, p_2, p_3$ are exhaustive over the domain of DEPTNO (we assume every employee has a DEPTNO in $\{10, 20, 30, 40, 50, 60\}$). **Completeness satisfied.** `[Stating the rule: 2 Marks][Showing the union: 1 Mark]`

**Step 2 — Disjointness.** Fragments must not overlap for non-replicated H-fragmentation:
$$
\text{EMP}_1 \cap \text{EMP}_2 = \emptyset, \quad \text{EMP}_2 \cap \text{EMP}_3 = \emptyset, \quad \text{EMP}_1 \cap \text{EMP}_3 = \emptyset
$$
The predicates $\{10, 20\}, \{30, 40\}, \{50, 60\}$ are pairwise disjoint. **Disjointness satisfied.** `[Rule: 1 Mark][Pairwise intersections: 1 Mark]`

**Step 3 — Reconstruction.**
$$
\text{EMP} \;=\; \bigcup_{i=1}^{3} \text{EMP}_i
$$
The reconstruction operator is **union** for H-fragments. **Reconstruction satisfied.** `[Rule: 1 Mark][Applying union: 1 Mark]`

> [!WARNING]
> **KTU Valuation Pitfall (H-Fragmentation):** Examiners deduct 1 mark if you write the *intersection* of the predicates as *joint* (e.g., $\{10, 20, 30\}$) — predicates must be *pairwise disjoint* for clean H-fragmentation. Also, never say *“$\text{EMP}_1 = \sigma_{\text{DEPTNO} = 10}$”* — that is **selection**, not the **fragment**, unless the schema is genuinely a singleton.

---

## 3.3 Worked Example 3: Vertical Fragmentation with Tuple-ID Reconstruction

**Problem:** Apply vertical fragmentation to the relation

$$\text{PROJECT}(\underline{\text{PNO}},\; \text{PNAME},\; \text{BUDGET},\; \text{START\_DATE},\; \text{END\_DATE})$$

into two fragments along the attribute split:
- $F_1 = \{\text{PNO}, \text{PNAME}, \text{BUDGET}\}$
- $F_2 = \{\text{PNO}, \text{START\_DATE}, \text{END\_DATE}\}$

**(a) Write the vertical fragments with the TID rule. (7 marks)**
**(b) Show the lossless reconstruction. (7 marks)**

### Solution

#### Part (a) — Vertical Fragments

**Step 1 — Insert the TID attribute.** For lossless join-based reconstruction, both fragments must include the tuple identifier $\text{TID}$ (a synthetic hidden key):

$$
\begin{aligned}
F_1 &= \pi_{\text{TID, PNO, PNAME, BUDGET}}(\text{PROJECT}) \\
F_2 &= \pi_{\text{TID, PNO, START\_DATE, END\_DATE}}(\text{PROJECT})
\end{aligned}
$$

> [!NOTE]
> **Why both PNO and TID?** TID guarantees tuple-level reconstruction; PNO is the *primary key* and must appear in every fragment to keep the relation identifiable across projections. Some texts use TID **or** PNO, but using **both** is the safer KTU pattern.

#### Part (b) — Lossless Reconstruction

**Step 1 — Apply the natural join over TID (and PNO):**
$$
\text{PROJECT} \;=\; F_1 \;\underset{\text{TID}=\text{TID},\; \text{PNO}=\text{PNO}}{\bowtie}\; F_2
$$

**Step 2 — Verify losslessness using the Heath's theorem condition:**
- The common attributes $\{\text{TID, PNO}\}$ functionally determine **all** attributes of `PROJECT` (TID is a key for `PROJECT`).
- Therefore, $F_1 \cap F_2 \rightarrow F_1$ and $F_1 \cap F_2 \rightarrow F_2$ hold.
- **Heath's condition is satisfied ⇒ the join is lossless.** `[Naming the theorem: 2 Marks][Writing the join: 2 Marks][Verifying functional dependency: 3 Marks]`

**Step 3 — Final reconstructed relation:**
$$
\text{PROJECT} \;=\; \pi_{A}\big(F_1 \bowtie_{\text{TID,PNO}} F_2\big)
$$
where $A$ excludes the auxiliary TID if the application does not need it.

> [!WARNING]
> **Common KTU Pitfall:** A *lossless* join is **not** the same as a *dependency-preserving* join. Vertical fragmentation must produce **both** a lossless join **and** preserve functional dependencies. In this example, the FD $\{\text{PNO}\} \rightarrow \{\text{PNAME, BUDGET, START\_DATE, END\_DATE}\}$ is preserved as long as PNO is in *both* fragments. Examiners deduct 1 mark if you ignore this.

---

## 3.4 Worked Example 4: Python Simulation — Distributed Query Routing

> [!NOTE]
> **Pedagogical Code:** The following Python program *simulates* a three-site DDBMS and demonstrates how a global query is routed, executed, and stitched together — exactly what the KTU syllabus expects you to describe verbally for 14-mark questions.

```python
"""
Filename: distributed_query_router.py
Purpose : Simulate a 3-site DDBMS with horizontal fragmentation and
          a global distributed query that joins two fragments.
Author  : KTU 2024 Module-2 Reference Implementation
"""

from dataclasses import dataclass, field
from typing import Callable, Dict, List, Tuple
import logging
import sys

# Configure a strict logger so we can trace query plans (as KTU solutions do)
logging.basicConfig(
    level=logging.INFO,
    format="[%(asctime)s] [%(levelname)s] [%(name)s] :: %(message)s",
    stream=sys.stdout,
)
log = logging.getLogger("DDBMS-SIMULATOR")


@dataclass(frozen=True)
class FragmentDescriptor:
    """Describes a horizontal fragment: name + predicate + site."""
    name: str
    site_id: str
    predicate: Callable[[Tuple], bool]


@dataclass
class Site:
    """A single site holding a local relation (a fragment store)."""
    site_id: str
    local_table: List[Tuple] = field(default_factory=list)
    alive: bool = True

    def execute_local(self, op: Callable[[Tuple], bool]) -> List[Tuple]:
        """Apply a local selection on the site's data with strict error guard."""
        if not self.alive:
            log.error("Site %s is DOWN. Aborting local execution.", self.site_id)
            return []
        try:
            result = [row for row in self.local_table if op(row)]
            log.info("Site %s produced %d rows.", self.site_id, len(result))
            return result
        except Exception as exc:
            log.exception("Local execution failure at site %s: %s",
                          self.site_id, exc)
            return []


class DistributedDBMS:
    """
    Minimal 3-site DDBMS with horizontal fragmentation and a global
    query router (Distributed Query Processor stand-in).
    """

    def __init__(self) -> None:
        # Three sites representing the KTU example (Trivandrum, Kochi, Calicut)
        self.sites: Dict[str, Site] = {
            "TRV": Site("TRV", [
                (101, "Anand",   50000, 10),
                (102, "Beena",   62000, 20),
                (103, "Cyril",   58000, 10),
            ]),
            "KCH": Site("KCH", [
                (201, "Deepa",   71000, 30),
                (202, "Eby",     66000, 40),
            ]),
            "CLT": Site("CLT", [
                (301, "Fathima", 82000, 50),
                (302, "George",  75000, 60),
                (303, "Hari",    69000, 50),
            ]),
        }

        # Fragmentation + Allocation Schema (FS + AS)
        self.fragments: List[FragmentDescriptor] = [
            FragmentDescriptor("EMP_1", "TRV",
                               lambda r: r[3] in {10, 20}),
            FragmentDescriptor("EMP_2", "KCH",
                               lambda r: r[3] in {30, 40}),
            FragmentDescriptor("EMP_3", "CLT",
                               lambda r: r[3] in {50, 60}),
        ]
        log.info("DDBMS initialized with %d sites and %d fragments.",
                 len(self.sites), len(self.fragments))

    # --- (1) Catalog lookup ---
    def locate_fragment(self, fragment_name: str) -> str:
        for f in self.fragments:
            if f.name == fragment_name:
                return f.site_id
        raise KeyError(f"Fragment {fragment_name} not in catalog")

    # --- (2) Distributed Query Processing ---
    def distributed_select(self,
                           min_salary: int) -> List[Tuple]:
        """
        Global query: SELECT * FROM EMP WHERE SALARY > :min_salary
        Implementation:
          1. Decompose into three local sub-queries.
          2. Route each sub-query to the site that owns the fragment.
          3. Collect partial results and return to user (assembly).
        """
        log.info("Global query received: SALARY > %d", min_salary)
        global_result: List[Tuple] = []
        for f in self.fragments:
            site = self.sites[f.site_id]
            # Local predicate combines the fragment predicate with the query predicate
            local_pred = (lambda r:
                          f.predicate(r) and r[2] > min_salary)
            partial = site.execute_local(local_pred)
            global_result.extend(partial)
        log.info("Global query returned %d rows.", len(global_result))
        return global_result

    # --- (3) Crash simulation for the DRM ---
    def crash_site(self, site_id: str) -> None:
        self.sites[site_id].alive = False
        log.warning("Site %s has been marked DOWN.", site_id)


# ------------------------------
# Demonstration run
# ------------------------------
if __name__ == "__main__":
    ddbms = DistributedDBMS()

    print("\n--- Query 1: All employees earning > 60000 ---")
    q1 = ddbms.distributed_select(min_salary=60000)
    for row in q1:
        print(row)

    print("\n--- Simulate failure of Kochi (KCH) ---")
    ddbms.crash_site("KCH")

    print("\n--- Query 2: Re-run, system tolerates KCH failure ---")
    q2 = ddbms.distributed_select(min_salary=50000)
    for row in q2:
        print(row)
```

### Step-by-Step Walkthrough of the Code

1. **Initialization** — three sites are loaded with sample EMP data. The fragmentation + allocation schema is encoded as a list of `FragmentDescriptor` records. `[Corresponds to FS + AS layer: 2 Marks]`
2. **`locate_fragment()`** — emulates a *global directory / catalog* lookup. The DQP calls this to decide *where* to send a sub-query. `[Catalog consultation: 1 Mark]`
3. **`distributed_select()`** — emulates a 3-phase distributed query:
   - *Decomposition* into three local selection predicates.
   - *Routing* to owning sites.
   - *Local execution* via `Site.execute_local()`.
   - *Assembly* of partial results.
4. **`crash_site()`** — toggles a site's `alive` flag, demonstrating the **Distributed Recovery Manager's** role and the system's tolerance of site failure (a Date Rule-3 property). `[Demonstrates availability: 1 Mark]`
5. **Logging** — every step is logged, mirroring the *Distributed Transaction Manager's* log-based recovery.

> [!TIP]
> **For 14-mark KTU answers:** When asked *"Explain distributed query processing with an example,"* present a diagram of this exact 3-stage pipeline (decomposition → routing → assembly) and reference the FS/AS tables explicitly.

---

## 3.5 Practical Component Reference — A Production DDBMS Stack

| Layer | Software / Hardware Profile | Pin / Port / Tool | Configuration Notes |
|---|---|---|---|
| **Compute Node** | x86_64 server, 32+ cores, 128 GB RAM | IPMI 2.0 mgmt port | Redundant PSU + RAID-10 |
| **Local DBMS Engine** | Oracle 19c, PostgreSQL 16, MySQL 8.4 | TCP/1521 (Oracle), TCP/5432 (PG) | `LISTENERS` configured per node |
| **Network Fabric** | 10 GbE switches (L2/L3) | SFP+ ports | VLANs per site, MTU = 9000 (jumbo) |
| **Middleware / Coordinator** | Apache ShardingSphere, Vitess, Citus | TCP/3307 (proxy port) | Stateless for HA |
| **Global Directory** | Apache ZooKeeper, etcd | TCP/2181, TCP/2379 | 3-node ensemble for quorum |
| **Two-Phase Commit Coordinator** | Built into DBMS engine | N/A | Recovery log on shared disk |
| **Monitoring** | Prometheus + Grafana | TCP/9090, TCP/3000 | Site-alive alerts at < 1 s |
| **Backup / DRM** | RMAN (Oracle) / pgBackRest | Disk + S3 | WAL shipping every 5 min |

> [!WARNING]
> **Lab / Practical Pitfall:** When configuring a multi-site DDBMS lab, students frequently forget to **disable firewall on port 1521 (Oracle)** or **enable `wal_level = logical` (Postgres)** for replication. These are the two most common causes of "silent site failure" in KTU lab exams.

---

## 3.6 Summary of All Steps Used in This Section

- We classified an architecture along the three orthogonal axes (Distribution, Autonomy, Heterogeneity).
- We constructed a fragmentation + allocation schema for an EMP relation.
- We verified Date's correctness rules (completeness, disjointness, reconstruction).
- We constructed a vertical fragmentation with TID-based lossless join reconstruction.
- We wrote a fully working Python simulation of a 3-site DDBMS with a global query router.
- We summarized a production DDBMS hardware/software stack for lab use.
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

> [!IMPORTANT]
> **Mermaid Safety Note:** All node IDs in this section are *purely alphanumeric*, prefixed with `node`. Node labels containing punctuation or special characters are enclosed in **double quotes**. No markdown formatting appears inside node labels.

---

## 4.1 Five-Layer Reference Architecture (Module 1 / 2 cornerstone diagram)

```mermaid
flowchart TB
    subgraph EXT["External Schemas (User Views)"]
        nodeE1["ES_1 Application View"]
        nodeE2["ES_2 Analytics View"]
        nodeE3["ES_n Admin View"]
    end

    subgraph GCS["Global Conceptual Schema (GCS)"]
        nodeG["Unified Logical View of Distributed Database"]
    end

    subgraph FS["Fragmentation Schema (FS)"]
        nodeF1["Horizontal Fragments"]
        nodeF2["Vertical Fragments"]
        nodeF3["Hybrid Fragments"]
    end

    subgraph AS["Allocation Schema (AS)"]
        nodeA1["Site Mapping of Fragments"]
        nodeA2["Replication Specifications"]
    end

    subgraph LMS["Local Mapping Schemas (LMS) at each Site"]
        nodeL1["LMS at Site S_1"]
        nodeL2["LMS at Site S_2"]
        nodeL3["LMS at Site S_n"]
    end

    nodeE1 --> nodeG
    nodeE2 --> nodeG
    nodeE3 --> nodeG
    nodeG --> nodeF1
    nodeG --> nodeF2
    nodeG --> nodeF3
    nodeF1 --> nodeA1
    nodeF2 --> nodeA1
    nodeF3 --> nodeA1
    nodeA1 --> nodeA2
    nodeA1 --> nodeL1
    nodeA1 --> nodeL2
    nodeA1 --> nodeL3
```

> [!NOTE]
> **Read this diagram top-down:** External (what user sees) → GCS (unified logical whole) → FS (how to slice) → AS (where to put slices) → LMS (local physical storage).

---

## 4.2 Distributed DBMS Component Interaction Topology

```mermaid
flowchart LR
    subgraph CLIENT_TIER["Client Tier"]
        nodeAPP["User Application / Client Tool"]
    end

    subgraph MIDDLE_TIER["Middleware / Coordination Tier"]
        nodeDQP["Distributed Query Processor (DQP)"]
        nodeDTM["Distributed Transaction Manager (DTM)"]
        nodeDRM["Distributed Recovery Manager (DRM)"]
        nodeGD["Global Directory / Catalog"]
    end

    subgraph SITE1["Site S_1 (Trivandrum)"]
        nodeLDBMS1["Local DBMS"]
        nodeDM1["Data Manager"]
        nodeFS1["Fragment Store F_1"]
    end

    subgraph SITE2["Site S_2 (Kochi)"]
        nodeLDBMS2["Local DBMS"]
        nodeDM2["Data Manager"]
        nodeFS2["Fragment Store F_2"]
    end

    subgraph SITE3["Site S_3 (Calicut)"]
        nodeLDBMS3["Local DBMS"]
        nodeDM3["Data Manager"]
        nodeFS3["Fragment Store F_3"]
    end

    nodeAPP -- "Issue Query / Transaction" --> nodeDQP
    nodeDQP -- "Consult Catalog" --> nodeGD
    nodeDQP -- "Sub-query 1" --> nodeLDBMS1
    nodeDQP -- "Sub-query 2" --> nodeLDBMS2
    nodeDQP -- "Sub-query 3" --> nodeLDBMS3
    nodeLDBMS1 --> nodeDM1 --> nodeFS1
    nodeLDBMS2 --> nodeDM2 --> nodeFS2
    nodeLDBMS3 --> nodeDM3 --> nodeFS3
    nodeDTM -- "2PC Coordination" --> nodeLDBMS1
    nodeDTM -- "2PC Coordination" --> nodeLDBMS2
    nodeDTM -- "2PC Coordination" --> nodeLDBMS3
    nodeDRM -- "Log / Recovery" --> nodeLDBMS1
    nodeDRM -- "Log / Recovery" --> nodeLDBMS2
    nodeDRM -- "Log / Recovery" --> nodeLDBMS3
```

---

## 4.3 Classification Decision Tree (Distribution Axis)

```mermaid
flowchart TD
    nodeSTART["Multiple DBMS instances?"] -->|No| nodeNOT["Centralized DBMS - stop"]
    nodeSTART -->|Yes| nodeCOUPLE{"Tightly or Loosely Coupled?"}
    nodeCOUPLE -->|Tightly Coupled| nodePAR["Parallel DBMS"]
    nodeCOUPLE -->|Loosely Coupled| nodePROC{"Is Data Centralized?"}
    nodePROC -->|Yes| nodeDPROC["Distributed Processing"]
    nodePROC -->|No| nodeDDB["Distributed Database (DDB)"]
    nodeDDB --> nodeHOMO{"All Sites Same DBMS?"}
    nodeHOMO -->|Yes| nodeHOM["Homogeneous DDBMS"]
    nodeHOMO -->|No| nodeHET["Heterogeneous / Federated DDBMS"]
```

---

## 4.4 Distributed Query Processing Pipeline (Block-Level Flow)

```mermaid
flowchart TB
    subgraph PHASE1["Phase 1 - Query Decomposition"]
        nodeQ1["Global Query Q in relational algebra"]
        nodeQ2["DQP consults GCS, FS, AS"]
        nodeQ3["Sub-queries Q_1, Q_2, ..., Q_n"]
    end

    subgraph PHASE2["Phase 2 - Localization and Optimization"]
        nodeQ4["Apply site-specific local schemas"]
        nodeQ5["Cost-based optimizer picks best sites"]
        nodeQ6["Execution plan with join order, access paths"]
    end

    subgraph PHASE3["Phase 3 - Execution and Assembly"]
        nodeQ7["Local sub-queries sent to sites"]
        nodeQ8["Local results assembled at coordinator"]
        nodeQ9["Final result returned to client"]
    end

    nodeQ1 --> nodeQ2 --> nodeQ3
    nodeQ3 --> nodeQ4 --> nodeQ5 --> nodeQ6
    nodeQ6 --> nodeQ7 --> nodeQ8 --> nodeQ9
```

---

## 4.5 Sequential Processing Topology — Date's 12 Rules as a Stack

```mermaid
flowchart TB
    subgraph BASE["Foundational Rules (Bottom of Stack)"]
        nodeR1["Rule 9 - Hardware Independence"]
        nodeR2["Rule 10 - OS Independence"]
        nodeR3["Rule 11 - Network Independence"]
        nodeR4["Rule 12 - DBMS Independence"]
    end

    subgraph MID["Mid-Level Rules"]
        nodeR5["Rule 1 - Local Autonomy"]
        nodeR6["Rule 2 - No Central Site"]
        nodeR7["Rule 3 - Continuous Operation"]
    end

    subgraph TOP["User-Visible Transparency Rules"]
        nodeR8["Rule 4 - Location Independence"]
        nodeR9["Rule 5 - Fragmentation Independence"]
        nodeR10["Rule 6 - Replication Independence"]
    end

    subgraph SERVICE["Service-Level Rules"]
        nodeR11["Rule 7 - Distributed Query Processing"]
        nodeR12["Rule 8 - Distributed Transaction Management"]
    end

    nodeR1 --> nodeR5
    nodeR2 --> nodeR5
    nodeR3 --> nodeR5
    nodeR4 --> nodeR5
    nodeR5 --> nodeR6 --> nodeR7 --> nodeR8
    nodeR8 --> nodeR9 --> nodeR10 --> nodeR11 --> nodeR12
```

---

## 4.6 Architecture Variant Comparison Matrix

| Architecture | Distribution | Autonomy | Heterogeneity | Typical Use Case |
|---|---|---|---|---|
| **Client–Server** | Single server, many clients | Low (server is central) | Homogeneous | Branch office → HQ model |
| **Collaborating Server (Peer-to-Peer)** | All servers equal | High | Often homogeneous | Multi-bank network |
| **Multi-DBMS / Federated** | Independent DBMSs | Very high | Heterogeneous | Cross-organization data sharing |
| **Middleware-Mediated** | Servers behind a coordinator layer | High | Can be heterogeneous | Modern cloud microservices |
| **Parallel DBMS (cluster)** | Tightly coupled nodes | Low | Homogeneous | Teradata, Oracle RAC |
| **Cloud Native (e.g., Spanner, CockroachDB)** | Geo-distributed, consensus-based | Medium | Homogeneous | Globally consistent OLTP |

> [!TIP]
> **For a 14-mark "Compare and Contrast" question,** draw the *Classification Decision Tree* (4.3) first, then expand each branch with a 1-2 line description, then finish with a comparison table (above). Examiners reward **structured, multi-modal** answers.
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

> [!IMPORTANT]
> **Pattern Note:** All questions below model the **KTU 2024 Scheme End-Semester Examination (ESE)** pattern for Module 2 of PECST634. Marks are split as **3-mark short answers (Part A)** and **14-mark long answers with internal choice (Part B)**. Each Part-B sub-question targets a different Revised Bloom's cognitive level. Where possible, a **KTU Past Year Question** tag is provided.

---

## Part A — Short-Answer Questions (3 Marks Each)

### Question A1
> **Q: Define a Distributed Database Management System (DDBMS). List any four advantages of using a DDBMS.**
> `[KTU University Exam - Dec 2023]`
> **Course Outcome:** CO1 | **Cognitive Level:** Remember / Understand

**Model Answer (3 marks):**

A **Distributed Database Management System (DDBMS)** is the software that permits the management of a *logically interrelated* collection of data, *physically distributed* across a network of sites, in such a way that the system appears to the user as a **single, integrated database**.

**Four advantages:**
1. **Transparency** — User need not know data location.
2. **Reliability and Availability** — System continues to function despite partial failures.
3. **Performance** — Queries often executed locally, reducing network traffic.
4. **Scalability** — New sites can be added with minimal disruption.

`[Definition: 1 mark; Two advantages named: 1 mark; Two more: 1 mark]`

---

### Question A2
> **Q: Differentiate between Distributed Database and Distributed Processing. Give one example of each.**
> `[KTU University Exam - July 2024]`
> **Course Outcome:** CO1 | **Cognitive Level:** Understand

**Model Answer (3 marks):**

| Aspect | Distributed Database | Distributed Processing |
|---|---|---|
| **Data location** | Data physically spread across sites | Data is centralized; processing is distributed |
| **Coordination** | DDBMS software | Application / middleware |
| **Example** | Banking network with branch databases | Web-server farm querying one central Oracle DB |

`[Stating core distinction: 1.5 marks; Correct example each: 1.5 marks]`

---

## Part B — Long-Answer Questions (14 Marks, Internal Choice)

### Question B — Module 2 Main Question
> **Q: With neat diagrams, explain the reference architecture of a Distributed DBMS. Describe all five schema layers and the role of each. (14 marks)**
> `[KTU University Exam - Dec 2023, July 2024]`
> **Course Outcome:** CO1 / CO2 | **Cognitive Level:** Understand, Apply

---

#### **Option A — Diagram-Focused Answer (14 marks)**

**Part (a) — Describe the five schema layers. (7 marks) — Understand**

The reference architecture of a DDBMS extends the ANSI-SPARC three-schema model with two additional layers. The five layers, in **top-down** order, are:

1. **External Schema (ES)** — Per-user or per-application view of the data. Multiple external schemas can coexist for the same global database. `[Stating the role: 1 mark]`
2. **Global Conceptual Schema (GCS)** — The logical, unified description of *all* data in the DDB, independent of physical location or fragmentation. `[Stating the role: 1 mark]`
3. **Fragmentation Schema (FS)** — Maps global relations in the GCS to a set of **fragments**. Defines *how* to slice each relation. `[Stating the role: 1 mark]`
4. **Allocation Schema (AS)** — Maps each fragment to one or more **sites**. Defines *where* the slices physically reside and which are replicated. `[Stating the role: 1 mark]`
5. **Local Mapping Schema (LMS)** — At each site, a local conceptual-to-internal mapping, describing the physical storage of the fragment at that site. `[Stating the role: 1 mark]`

`[Drawing the layered diagram (5 rectangles stacked): 1 mark]`
`[Connecting arrows showing flow of mapping: 1 mark]`

**Part (b) — Explain why FS and AS are kept separate. Apply the architecture to a working example. (7 marks) — Apply**

**Step 1 — Why separate FS and AS:**
Fragmentation is a *logical* design decision (made by the database designer based on application semantics). Allocation is a *physical* decision (made by the DBA based on access patterns, network topology, and storage). Separating them means we can **re-allocate without re-fragmenting** and vice versa, achieving *logical data independence* with respect to physical placement. `[Naming the principle: 1 mark; Stating at least one benefit: 1 mark]`

**Step 2 — Apply to an example:**
Consider relation `STUDENT(ROLLNO, NAME, DEPT, CGPA)`. Suppose we apply **horizontal fragmentation** by department:
$$
\begin{aligned}
S_1 &= \sigma_{\text{DEPT} = \text{'CSE'}}(\text{STUDENT}) \\
S_2 &= \sigma_{\text{DEPT} = \text{'ECE'}}(\text{STUDENT})
\end{aligned}
$$
These two fragments are written in the **FS**.

**Step 3 — Now apply the allocation:**
- $S_1 \rightarrow$ Site TRV (CSE department)
- $S_2 \rightarrow$ Site KCH (ECE department)

This is written in the **AS**. The two schemas together form the *physical-data-independent logical design*. `[Stating FS entries: 1 mark; Stating AS entries: 1 mark; Connecting them to architecture: 1 mark]`

**Step 4 — Reconstruction of the global relation:**
$$
\text{STUDENT} \;=\; S_1 \,\cup\, S_2 \quad \text{(provided disjointness and completeness hold).}
$$
`[Reconstruction expression: 1 mark]`

---

#### **Option B — Component-Focused Answer (14 marks)**

**Part (a) — Identify and explain the six core components of a DDBMS. (7 marks) — Understand**

| # | Component | Role |
|---|---|---|
| 1 | **Local DBMS (LDBMS)** | Manages the local site; can be a full DBMS or simply a local data manager. |
| 2 | **Data Manager (DM)** | Controls access to the local physical database; handles physical-level operations. |
| 3 | **Global Directory / System Catalog** | Stores GCS, FS, AS, statistics, and access-path information. |
| 4 | **Distributed Query Processor (DQP)** | Translates global queries into local sub-queries; performs cost-based optimization. |
| 5 | **Distributed Transaction Manager (DTM)** | Manages distributed concurrency (locking / timestamping) and atomic commit (2PC). |
| 6 | **Distributed Recovery Manager (DRM)** | Handles logging, crash recovery, and global consistency restoration. |

`[Six components named: 2 marks; Role of each: 5 marks]`

**Part (b) — Describe how the DQP processes a distributed query, with a step-by-step example. (7 marks) — Apply**

**Step 1 — Query parsing and validation.** The user submits `SELECT name FROM Student WHERE cgpa > 8.5;` against the GCS. `[Query and GCS reference: 1 mark]`

**Step 2 — Fragmentation expansion.** The DQP consults the FS and expands `Student` into its fragments $S_1, S_2, \dots$ located at the appropriate sites. `[FS consultation: 1 mark]`

**Step 3 — Localization.** The DQP consults the AS and rewrites the query in terms of *local* relations at each site. `[AS consultation: 1 mark]`

**Step 4 — Global optimization.** The optimizer chooses a cost-minimal execution plan (e.g., which site performs the selection first, how to ship partial results, join order). `[Optimization mention: 1 mark]`

**Step 5 — Distributed execution.** The coordinator dispatches sub-queries to the relevant sites via the network. `[Execution dispatch: 1 mark]`

**Step 6 — Local execution and assembly.** Each site evaluates its local sub-query; partial results are streamed back to the coordinator, which assembles them. `[Local execution + assembly: 1 mark]`

**Step 7 — Final result returned to user.** `[Final return: 0.5 mark]`
`[Correct sequence + correctness: 0.5 mark]`

> [!WARNING]
> **KTU Examiner's Valuation Pitfall (14-mark question on architecture):**
> - Do **not** skip the **Fragmentation Schema (FS)** and **Allocation Schema (AS)**. Many students stop at "external, conceptual, internal" — a textbook mistake worth **−2 marks**.
> - Do **not** confuse **LMS** (Local Mapping Schema) with **LDBMS** (Local DBMS). The *schema* is the metadata; the *DBMS* is the software engine.
> - In the 2PC / distributed transaction question (Module 2 second half), explicitly mention that the **coordinator** sends `PREPARE` and the **cohorts** respond with `READY` / `NOT READY` — a missing commit-phase diagram costs **2 marks**.
> - Always include a **diagram** for 14-mark architecture questions. A text-only answer caps at ≈ **10/14 marks** even if every word is correct, per KTU valuation norms.

---

## Part C — Bonus Higher-Order Question (Practice)

> **Q: An e-commerce firm has four data centres in India (Bangalore, Mumbai, Delhi, Chennai). The product catalog is 2 TB and is read 1000× more often than it is written. The customer-order relation is write-heavy. Recommend a fragmentation + replication strategy. Justify.**
> `[KTU University Exam - July 2024 - supplementary]`
> **Course Outcome:** CO2 | **Cognitive Level:** Apply / Analyze

### Model Answer Outline

1. **Product catalog** — Apply **vertical fragmentation** by category. Allocate each fragment to one site (partitioned). Then apply **full replication** of the entire catalog to all four sites because reads dominate 1000:1. Use **primary-copy** for the rare writes (one primary + three asynchronous secondaries). `[Strategy + justification: 4 marks]`
2. **Customer–order relation** — Apply **horizontal fragmentation** by geography (orders placed from South India → Bangalore, North → Delhi, etc.). Allocate with **no replication** (since writes are heavy, replication would multiply 2PC cost). Place a **read-replica** at the geographically nearest site for analytics. `[Strategy + justification: 4 marks]`
3. **Trade-off summary** — The system prefers *read performance* for the catalog (full replication) and *write performance + consistency* for orders (no replication). `[Synthesis: 2 marks]`

---

## Topic Recap & Important Things to Remember

> [!NOTE]
> **Use this as your 60-second exam-revision checklist before the Module-2 paper.**

### Core Definitions
- **Distributed System** — Autonomous computers + network + cooperation + single system image.
- **Distributed Database (DDB)** — Logically unified, physically distributed, *logically correlated*, *homogeneous* (or heterogeneous) data.
- **DDBMS** — The *software* that manages a DDB; **DB** is the *data*, **DBMS** is the *software*.
- **DDB ≠ Distributed Processing ≠ Parallel DBMS** — distinguish by *data distribution*, *processing distribution*, *parallel processing on one DB*.
- **Single System Image (SSI)** — User's illusion of one unified database.
- **Autonomy** — Local independence of each site.
- **Heterogeneity** — Variety in hardware/OS/DBMS.

### Reference Architecture (5-Layer)
- **ES** (External) → **GCS** (Global Conceptual) → **FS** (Fragmentation) → **AS** (Allocation) → **LMS** (Local Mapping). **Never skip FS and AS** in exam answers.

### Six Core Components of a DDBMS
- **LDBMS, Data Manager, Global Directory, DQP, DTM, DRM.** Always name all six.

### Fragmentation Cheat Sheet
- **Horizontal (H):** $R_i = \sigma_{p_i}(R)$. Reconstruction = $\bigcup_i R_i$.
- **Vertical (V):** $R_i = \pi_{A_i \cup \{\text{TID}\}}(R)$. Reconstruction = $\Join_i R_i$ over TID.
- **Hybrid:** H + V combined.
- **Derived H:** Fragmentation of $R$ driven by a predicate on a related relation $S$.

### Correctness Rules (Date)
- **Completeness:** $R = \bigcup_i R_i$ (or the equivalent join for V).
- **Disjointness:** $R_i \cap R_j = \emptyset$ (H, non-replicated).
- **Reconstruction:** $R$ can be recovered from fragments.

### Replication Varieties
- **Fully replicated**, **partially replicated**, **non-replicated / partitioned**, **primary-copy**.

### Architecture Variants
- **Client–Server**, **Peer-to-Peer / Collaborating Server**, **Multi-DBMS / Federated**, **Client–Middleware–Server (3-tier)**, **Parallel Cluster**, **Cloud-Native (Spanner, Cockroach)**.

### Date's 12 Rules
- **Local autonomy**, **no central site**, **continuous operation**, **location / fragmentation / replication independence**, **distributed query processing**, **distributed transaction management**, **hardware / OS / network / DBMS independence**.

### Critical KTU Mnemonics
- **5-Layer Stack: E – G – F – A – L** (External, Global, Fragmentation, Allocation, Local).
- **6 Components: L – D – D – D – D – D** (Local DBMS, Data Manager, Directory, DQP, DTM, DRM).
- **3 Correctness Rules: C – D – R** (Completeness, Disjointness, Reconstruction).
- **3 Disambiguating Questions** to ask before answering "DDB vs DDP vs PDB":
  1. Is the **data** distributed? *(DDB if yes)*
  2. Is the **processing** distributed over a single DB? *(DP)*
  3. Are multiple processors tightly coupled on **one** query? *(PDB)*

### Top 5 Exam Triggers
- *"Differentiate DDB, DDP, PDB"* — use the disambiguating table.
- *"Explain Date's 12 rules"* — group into Foundational, Transparency, Service.
- *"Draw and explain 5-layer reference architecture"* — never omit FS and AS.
- *"State correctness rules of fragmentation"* — C-D-R in order.
- *"Compare Client–Server vs Peer-to-Peer DDBMS"* — discuss central-site dependence, failure tolerance, complexity.
<!-- SECTION_5_END -->
