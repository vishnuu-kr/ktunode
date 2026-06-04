---
title: "Tanner Graphs"
subject: "CODING THEORY"
module: "Module 4: Review on Convolution Codes"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff236"
status: "completed"
scrapedAt: "2026-05-23T18:05:26.404Z"
---
# CODING THEORY - Module 4: Review on Convolutional Codes

## Topic: Tanner Graphs

**Learning Outcomes:**

*   Understand the graphical representation of linear block codes and convolutional codes.
*   Construct Tanner graphs for various codes.
*   Analyze the properties of codes using Tanner graphs, such as minimum distance and error-correcting capabilities.
*   Apply Tanner graphs for decoding algorithms, particularly message passing algorithms.

---

### 1. Introduction to Tanner Graphs

Tanner graphs are bipartite graphs used to represent linear block codes and convolutional codes. They provide a powerful visual and analytical tool for understanding the structure of these codes and for developing decoding algorithms.

**Key Concept:** A Tanner graph is a bipartite graph consisting of two types of nodes: **variable nodes** and **check nodes**.

*   **Variable Nodes:** Represent the **message bits** or **codeword bits**.
*   **Check Nodes:** Represent the **parity check equations** that define the code.

**Structure of a Tanner Graph:**

*   An edge exists between a variable node and a check node if and only if the corresponding variable node is involved in the parity check equation represented by the check node.

**In the context of Convolutional Codes:**

While Tanner graphs are most commonly associated with block codes (like LDPC codes), the concept can be extended to represent convolutional codes. For convolutional codes, the graph represents the trellis structure of the code.

*   **Variable Nodes:** Can represent the **state transitions** or the **transmitted bits** at different time instances.
*   **Check Nodes:** Represent the **linear constraints** imposed by the generator polynomials on the transmitted bits.

**Reference:** Lin & Costello, "Error Control Coding: Fundamentals and Applications," 2nd Ed., Chapter 8 (for general graphical representations of codes) and relevant sections on convolutional codes.

---

### 2. Tanner Graphs for Convolutional Codes (Extending the Concept)

While the term "Tanner Graph" is primarily used for block codes, the graphical representation of convolutional codes, known as the **trellis diagram**, shares fundamental similarities in its bipartite nature and the representation of constraints. We can adapt the Tanner graph concept to analyze convolutional codes.

**Trellis Diagram as a Generalized Tanner Graph:**

For a convolutional code with constraint length $K$ and rate $k/n$, the trellis diagram unfolds over time.

*   **State Nodes:** At each time instant $i$, there are $2^{m}$ state nodes, where $m = K-1$ is the memory of the encoder. These nodes represent the current state of the shift register.
*   **Variable Nodes (Implicit):** The transmitted bits at each time instant can be considered implicit variable nodes.
*   **Check Nodes (Implicit):** The parity check equations, derived from the generator polynomials, can be viewed as implicit check nodes that link the transmitted bits and influence state transitions.

**Example: Convolutional Code with $g^{(1)} = (1, 0, 1)$ and $g^{(2)} = (1, 1, 0)$ (rate 1/2, constraint length $K=3$)**

The encoder has a memory of $m = K-1 = 2$. The state is determined by the last two input bits. There are $2^2 = 4$ states: 00, 01, 10, 11.

The parity check equations are derived from the generator polynomials. For example, if the input stream is $u_1, u_2, u_3, ...$, the output bits $y_1^{(1)}, y_2^{(1)}, ...$ and $y_1^{(2)}, y_2^{(2)}, ...$ are generated.

The trellis diagram explicitly shows the state transitions and the output bits for each input bit. Each transition can be seen as satisfying certain linear constraints.

**Connecting to Tanner Graphs:**

Imagine "unrolling" the trellis for a fixed number of time steps. We can then define explicit variable and check nodes.

*   **Variable Nodes:** Represent the input bits $u_i$ and output bits $y_i^{(j)}$ at each time instance.
*   **Check Nodes:** Represent the relationships between input and output bits as defined by the generator polynomials. For instance, a check node could enforce the relationship: $y_i^{(1)} = u_i \oplus u_{i-2}$ (for $g^{(1)} = 1+x^2$) and $y_i^{(2)} = u_i \oplus u_{i-1}$ (for $g^{(2)} = 1+x$).

**Formalizing for Convolutional Codes:**

A more formal approach to represent convolutional codes using Tanner-like graphs involves using the **parity-check matrix** of the code, which is a block-circulant matrix. The Tanner graph for a block code is directly constructed from its parity-check matrix.

For convolutional codes, we can consider a finite-length representation where the parity-check matrix is not truly circulant but has a specific structured form.

*   **Variable Nodes:** Represent the bits $c_{i,j}$ of the encoded codeword of length $N$ at time $i$ and for the $j$-th output stream ($j=1, \dots, n$).
*   **Check Nodes:** Represent the parity check equations, each involving a subset of the codeword bits. These equations are derived from the generator polynomials and the structure of the trellis.

**Example (Conceptual):**

Let's consider a simple convolutional code. If a parity check equation is $c_{i,1} \oplus c_{i,2} \oplus c_{i-1,1} = 0$, this would correspond to a check node connecting variable nodes representing $c_{i,1}$, $c_{i,2}$, and $c_{i-1,1}$.

**Reference:** Richardson & Urbanke, "Modern Coding Theory," Chapter 4 (Graphical Representations of Codes) and Chapter 15 (Introduction to Convolutional Codes). While this book focuses on modern codes, the principles of graphical representation are applicable.

---

### 3. Constructing Tanner Graphs for Convolutional Codes

The construction of a Tanner graph for a convolutional code can be achieved by considering its parity-check matrix.

**Steps:**

1.  **Determine the Parity-Check Matrix:** For a convolutional code with rate $k/n$, the parity-check matrix $H$ is an infinite matrix (or a finite matrix for a finite-length code) that defines the linear code. The rows of $H$ correspond to the parity check equations.
2.  **Identify Variable Nodes:** Create variable nodes for each bit in the codeword. If the code is considered over $N$ time steps, there will be $N \times n$ variable nodes (for $n$ output streams).
3.  **Identify Check Nodes:** Create check nodes for each row of the parity-check matrix.
4.  **Draw Edges:** An edge is drawn between a variable node representing bit $c_{i,j}$ and a check node representing the $m$-th parity check equation if the entry $H_{m, (i,j)}$ in the parity-check matrix is 1.

**Challenges with Infinite Parity-Check Matrices:**

For infinite convolutional codes, the parity-check matrix is infinite. In practice, we analyze finite-length codes by truncating the parity-check matrix or by considering the trellis structure.

**Tanner Graph Representation of the Trellis:**

A more practical approach for convolutional codes is to directly represent the trellis structure as a Tanner graph:

*   **Nodes:** The nodes in the graph are the states at different time steps and the transmitted bits.
*   **Edges:** Edges represent transitions between states and the corresponding transmitted bits.

This leads to a **time-unfolded Tanner graph** or a representation directly derived from the trellis.

**Example: Convolutional Code with $g^{(1)} = 1+x^2$ and $g^{(2)} = 1+x$ (rate 1/2, $K=3$)**

The generator polynomials in polynomial form are:
$g^{(1)}(x) = 1 + x^2$
$g^{(2)}(x) = 1 + x$

The parity check polynomial is $h(x) = g^{(1)}(x) \oplus g^{(2)}(x) = (1+x^2) \oplus (1+x) = x \oplus x^2 = x(1+x)$.
The parity check equation is $c_i^{(1)} \oplus c_{i-1}^{(2)} = 0$ (or $c_i^{(1)} = c_{i-1}^{(2)}$), where $c_i^{(j)}$ is the $j$-th output bit at time $i$.

Let's consider the encoder structure:
State $s_i$ depends on $u_i$ and $u_{i-1}$.
$y_i^{(1)} = u_i + u_{i-2}$ (modulo 2)
$y_i^{(2)} = u_i + u_{i-1}$ (modulo 2)

The parity check equation derived from the relation between the parity bits is: $y_i^{(1)} = y_{i-1}^{(2)}$.

**Tanner Graph Perspective (Conceptual):**

*   **Variable Nodes:** Represent the input bits ($u_i$) and output bits ($y_i^{(1)}, y_i^{(2)}$) for each time step $i$.
*   **Check Nodes:** Represent the parity check equations. For instance, a check node could enforce $y_i^{(1)} = u_i \oplus u_{i-2}$. Another check node would enforce the relationship between output bits, like $y_i^{(1)} \oplus y_{i-1}^{(2)} = 0$.

**More Formal Tanner Graph Construction (using parity check matrix for a finite block):**

Consider encoding a block of $L$ input bits. This results in a block of $N = L \times n$ output bits. We can then construct the parity-check matrix $H$ for this finite-length code.

For the given example ($K=3$, rate 1/2), the parity check matrix $H$ for a block of length $L$ would have dimensions $(L-1) \times 2L$.

Let's assume $L=4$ input bits: $u_1, u_2, u_3, u_4$.
The encoded bits are $(y_1^{(1)}, y_1^{(2)}), (y_2^{(1)}, y_2^{(2)}), (y_3^{(1)}, y_3^{(2)}), (y_4^{(1)}, y_4^{(2)})$.

The parity check polynomial $h(x) = x(1+x)$ implies a check equation for each time step, relating outputs at adjacent time steps.
The relation $y_i^{(1)} = u_i \oplus u_{i-2}$ is enforced by the generator polynomial $g^{(1)}(x)$.
The relation $y_i^{(2)} = u_i \oplus u_{i-1}$ is enforced by the generator polynomial $g^{(2)}(x)$.

The parity check matrix $H$ for a block of length $L$ can be constructed to reflect these constraints. For instance, the relation $y_i^{(1)} = u_i \oplus u_{i-2}$ would contribute to rows of $H$. The relation $y_i^{(1)} \oplus y_{i-1}^{(2)} = 0$ implies a structure in the parity-check matrix.

**Tanner Graph from Parity-Check Matrix:**
For a parity-check matrix $H$ of size $M \times N$, where $M$ is the number of parity check equations and $N$ is the codeword length:
*   Variable nodes: $v_1, v_2, \dots, v_N$ (representing codeword bits $c_1, c_2, \dots, c_N$).
*   Check nodes: $c_1, c_2, \dots, c_M$ (representing the $M$ parity check equations).
*   An edge exists between $v_j$ and $c_i$ if $H_{i,j} = 1$.

**Reference:** Lin & Costello, "Error Control Coding: Fundamentals and Applications," 2nd Ed., Chapter 8 (Graphical Representations of Codes).

---

### 4. Analyzing Code Properties using Tanner Graphs

Tanner graphs provide insights into various properties of codes, including their minimum distance and error-correcting capabilities.

**Minimum Distance ($d_{min}$):**

The minimum distance of a linear code is the minimum number of non-zero weights of any non-zero codeword. In a Tanner graph, this corresponds to the minimum weight of a codeword, which can be related to the cycles in the graph.

*   **Smallest Cycle:** The girth of a Tanner graph (the length of the shortest cycle) is a crucial parameter for decoding performance.
*   **Distance and Cycles:** For block codes, the minimum distance is related to the smallest weight of a linear combination of rows of the parity-check matrix that results in a non-zero linear combination. In the Tanner graph, this relates to finding subsets of variable nodes that are connected to the same set of check nodes in a way that forms a cycle of minimal length.

**Error-Correcting Capabilities:**

The structure of the Tanner graph influences the code's ability to correct errors.

*   **Code Rate:** The ratio of variable nodes to check nodes is related to the code rate.
*   **Degree of Nodes:** The degree of variable nodes (number of check nodes they are connected to) and check nodes (number of variable nodes they are connected to) are important.
    *   High degree check nodes mean more constraints on fewer bits.
    *   High degree variable nodes mean a bit participates in many parity checks.
*   **Girth:** Codes with larger girths generally have better error-correcting capabilities, especially when using message-passing decoding algorithms. This is because short cycles can lead to the propagation of incorrect messages during decoding.

**Decoding and Tanner Graphs:**

Tanner graphs are the foundation for **message-passing decoding algorithms**, such as the **Sum-Product Algorithm (SPA)** and **Belief Propagation (BP)**.

*   **Message Passing:** In these algorithms, messages are passed iteratively between variable nodes and check nodes.
    *   **Variable-to-Check (V2C) Messages:** Convey information about the likelihood of a bit being 0 or 1.
    *   **Check-to-Variable (C2V) Messages:** Update the likelihood of a bit based on the parity check constraints.
*   **Convergence:** The algorithm converges to the Maximum A Posteriori (MAP) or Maximum Likelihood (ML) estimate of the transmitted codeword if the Tanner graph is a tree (or has no cycles). For graphs with cycles, convergence is not guaranteed, and performance can degrade.

**Reference:** Richardson & Urbanke, "Modern Coding Theory," Chapter 4 (Graphical Representations of Codes), and Chapter 15 (Sum-Product Algorithm).

---

### 5. Example: Tanner Graph for a Simple Linear Block Code (Illustrative)

To understand the concept, let's consider a simple linear block code first.

**Code:** Hamming code [7,4] with parity check matrix:
$H = \begin{pmatrix}
0 & 0 & 0 & 1 & 1 & 1 & 1 \\
0 & 1 & 1 & 0 & 0 & 1 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 1
\end{pmatrix}$

**Tanner Graph Construction:**

*   **Variable Nodes (7):** $v_1, v_2, v_3, v_4, v_5, v_6, v_7$ (representing codeword bits $c_1$ to $c_7$).
*   **Check Nodes (3):** $c_1, c_2, c_3$ (representing the three parity check equations).

**Edges:**
*   Row 1 of H (0001111): $v_4, v_5, v_6, v_7$ are connected to $c_1$.
*   Row 2 of H (0110011): $v_2, v_3, v_6, v_7$ are connected to $c_2$.
*   Row 3 of H (1010101): $v_1, v_3, v_5, v_7$ are connected to $c_3$.

**Visual Representation:**

```
      c1 --- v4
      | \   /
      |  \ /
      |   v5
      |   |
      |   v6
      | / |
      |/  |
      c2 -- v7
      | \ /
      |  \
      |   v2
      |   |
      |   v3
      | /
      |/
      c3 --- v1
```
*(Note: This is a simplified ASCII representation. A proper diagram would show all connections clearly. For example, v7 is connected to c1, c2, and c3.)*

**Degrees:**
*   Variable Node Degrees:
    *   $v_1$: 1 (to $c_3$)
    *   $v_2$: 1 (to $c_2$)
    *   $v_3$: 2 (to $c_2, c_3$)
    *   $v_4$: 1 (to $c_1$)
    *   $v_5$: 2 (to $c_1, c_3$)
    *   $v_6$: 2 (to $c_1, c_2$)
    *   $v_7$: 3 (to $c_1, c_2, c_3$)
*   Check Node Degrees:
    *   $c_1$: 4 (to $v_4, v_5, v_6, v_7$)
    *   $c_2$: 4 (to $v_2, v_3, v_6, v_7$)
    *   $c_3$: 4 (to $v_1, v_3, v_5, v_7$)

**Minimum Distance:** For Hamming [7,4], $d_{min}=3$. This means that any two distinct codewords differ in at least 3 positions.

**Cycles:** The shortest cycle in this graph has length 6. For example: $v_5 - c_1 - v_7 - c_2 - v_6 - c_1 - v_5$. (This is one of them; there are others.) The girth is 6.

---

### 6. Tanner Graphs for Convolutional Codes - Revisit and Clarification

The application of "Tanner Graphs" specifically to convolutional codes can be understood in a couple of ways:

**A. Tanner Graph of the Trellis:**

The most intuitive way is to view the time-unfolded trellis as a Tanner graph.

*   **States as Variable Nodes:** At each time step $i$, the $2^m$ states can be represented as variable nodes. However, this can lead to a very large graph.
*   **Bit Transitions:** A more common representation for message passing on convolutional codes (like Viterbi algorithm) uses the trellis where nodes are states.
*   **Parity Check Constraints on the Trellis:** The actual parity check equations for the convolutional code define the relationships between input bits and output bits at different time steps. These relationships can be mapped onto the edges of the trellis.

**Example:** For $g^{(1)} = 1+x^2$ and $g^{(2)} = 1+x$, the constraint $y_i^{(1)} \oplus y_{i-1}^{(2)} = 0$ links the parity bit at time $i$ (from generator 1) with the parity bit at time $i-1$ (from generator 2). This constraint acts like a "check node" connecting these bits.

**B. Tanner Graph of the Finite-Length Parity-Check Matrix:**

If we consider a convolutional code encoded over a finite block of $L$ input bits, we get a finite-length codeword. This finite-length code has a parity-check matrix $H$. We can then construct the standard Tanner graph from this $H$ matrix.

*   The $H$ matrix for a convolutional code has a specific structure: it's a block-circulant matrix (or close to it). This structure reflects the repetitive nature of the convolutional encoding.
*   The Tanner graph derived from this $H$ matrix will also exhibit a regular structure, repeating over time.

**Important Note:** When discussing Tanner graphs in the context of convolutional codes, it's often in relation to modern decoding algorithms that operate on graphical representations, like iterative decoding for Turbo codes (which are based on concatenated convolutional codes) or for decoding convolutional codes using belief propagation.

**Course Outcome Alignment:**

*   **CO1 (Algebraic Structures):** Tanner graphs are built upon the linear algebraic properties of codes (parity check matrices).
*   **CO2 (Error Detection/Correction):** The structure of the Tanner graph directly reveals the error-correcting capabilities. Cycles, node degrees, and connectivity influence performance.
*   **CO3 & CO5 (Applying Codes):** Understanding Tanner graphs is crucial for applying convolutional codes using iterative decoding algorithms.
*   **CO6 (Modern Codes):** Tanner graphs are fundamental to LDPC codes and are used in decoding Turbo codes and Polar codes.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the role of variable nodes and check nodes in a Tanner graph.

**Answer:**
Variable nodes represent the bits of the codeword, while check nodes represent the parity check equations that the codeword must satisfy. Edges connect variable nodes to the check nodes in which they participate.

**Question 2:**
For a linear block code, what property of the Tanner graph is directly related to the minimum distance of the code?

**Answer:**
The girth (length of the shortest cycle) of the Tanner graph is related to the minimum distance of the code. Codes with larger girths generally have better minimum distances, especially for message-passing decoding.

**Question 3:**
Consider a convolutional code with generator polynomials $g^{(1)}(x) = 1+x$ and $g^{(2)}(x) = 1+x+x^2$. (Rate 1/2, $K=3$). What is the parity check polynomial? If we consider this as a finite block code, how would its parity-check matrix reflect the recursive nature of the code?

**Answer:**
The parity check polynomial $h(x)$ is found by XORing the generator polynomials:
$h(x) = g^{(1)}(x) \oplus g^{(2)}(x) = (1+x) \oplus (1+x+x^2) = x^2$.
The parity check equation is $c_i^{(1)} \oplus c_{i-2}^{(2)} = 0$.

The parity-check matrix for a finite block of this convolutional code would be a block-circulant matrix, meaning it's composed of repetitions of a smaller base matrix along its anti-diagonals. This structure directly reflects the fact that the same encoding process is applied at each time step, hence the recursive nature.

**Question 4:**
What is the main advantage of using Tanner graphs for decoding?

**Answer:**
Tanner graphs are the basis for message-passing decoding algorithms (like Belief Propagation/Sum-Product Algorithm), which can achieve near-optimal performance and are particularly effective for codes with good graphical properties (e.g., high girth).

**Question 5 (Conceptual):**
Imagine a very sparse Tanner graph for a convolutional code (many nodes, few edges per node). What might be the implications for its error-correcting capability and decoding complexity?

**Answer:**
*   **Error-Correcting Capability:** Sparseness often implies a larger girth, which is generally good for error correction. However, if variable nodes have very low degrees (e.g., degree 1 or 2), it might mean weaker constraints, potentially affecting error correction power.
*   **Decoding Complexity:** A sparse graph can lead to lower decoding complexity for message-passing algorithms, as fewer messages need to be processed per iteration.

---

### 8. Important Points to Remember

*   **Bipartite Nature:** Tanner graphs are always bipartite, connecting two distinct sets of nodes (variable and check nodes).
*   **Parity-Check Matrix:** The structure of a Tanner graph is directly determined by the parity-check matrix of a code.
*   **Girth:** The length of the shortest cycle in a Tanner graph is a crucial parameter for code performance, especially in iterative decoding.
*   **Message Passing:** Tanner graphs are the visual and analytical foundation for message-passing decoding algorithms.
*   **Convolutional Codes:** While the term "Tanner Graph" is more commonly associated with block codes, the underlying graphical principles are evident in the trellis diagrams of convolutional codes. Time-unfolded trellises or Tanner graphs derived from finite-length parity-check matrices can represent convolutional codes.
*   **Applications:** Tanner graphs are essential for understanding and decoding modern codes like LDPC codes, Turbo codes, and Polar codes.

---

This comprehensive study material covers the topic of Tanner Graphs in the context of convolutional codes, aiming to meet the learning outcomes and align with the course objectives. The references provided can be consulted for further in-depth understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
