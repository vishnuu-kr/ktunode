---
title: "Trellis diagram."
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 2: Channel Capacity of AWGN Channel"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed11"
status: "completed"
scrapedAt: "2026-05-23T17:58:45.815Z"
---
# Advanced Communication Theory - Module 2: Channel Capacity of AWGN Channel
## Topic: Trellis Diagrams

---

### **Introduction**

Trellis diagrams are a powerful graphical tool used to represent the possible states and transitions of a **finite state machine (FSM)**. In the context of digital communication, particularly with **convolutional codes**, trellis diagrams are essential for visualizing the encoding process and, more importantly, for decoding the received sequence using algorithms like the Viterbi algorithm. This topic is crucial for understanding how to reliably transmit information over noisy channels, directly relating to **Course Outcome CO3 (Apply channel coding for error detection and correction)**.

---

### **Key Concepts and Definitions**

*   **Finite State Machine (FSM):** A mathematical model of computation. It consists of a finite number of states, transitions between states, and input symbols that trigger these transitions.
    *   **State:** A configuration of the FSM that summarizes its past behavior relevant to future transitions.
    *   **Transition:** A movement from one state to another, triggered by an input symbol.
    *   **Output:** A symbol or sequence of symbols produced by the FSM during a transition.

*   **Convolutional Code:** A type of error-correcting code where the output bits are a function of the current input bits and a finite number of previous input bits. This "memory" is what makes them representable by states.

*   **Constraint Length ($K$):** A fundamental parameter of a convolutional code. It is the total number of bits (including the current input bit) that influence the output. Equivalently, it's the number of bits stored in the shift register. A code with constraint length $K$ has $2^{K-1}$ states.

*   **Generator Polynomials:** These polynomials define the relationship between the input and output bits of a convolutional encoder. They are often represented in octal or binary form. For a code with rate $R = k/n$, there will be $n$ generator polynomials, each of length $K$.

*   **State Diagram:** A diagram that shows the states of an FSM as nodes and the transitions between states as directed arcs. Each arc is labeled with the input symbol that causes the transition and the corresponding output symbol(s).

*   **Trellis Diagram:** An **unfolded state diagram** over time. It shows how the states evolve over successive time steps, illustrating the sequence of transitions and outputs for a given input sequence. It effectively "unrolls" the cyclic nature of the state diagram.

---

### **Understanding Trellis Diagrams for Convolutional Codes**

#### **1. States and State Transitions**

*   The states of a convolutional encoder are determined by the contents of its internal memory (shift register).
*   For a code with constraint length $K$, the encoder has $2^{K-1}$ possible states. Each state can be represented by a binary string of length $K-1$, corresponding to the $K-1$ previous input bits.
*   At each time step, the encoder receives an input bit (0 or 1).
*   This input bit, along with the current state, determines the **next state** and the **output bits**.

#### **2. Constructing a Trellis Diagram**

The construction of a trellis diagram involves depicting the state evolution over time.

*   **Time Axis:** The horizontal axis represents time steps ($t=0, 1, 2, ...$).
*   **States:** Vertical lines at each time step represent the possible states at that time. The number of states at each time step is $2^{K-1}$.
*   **Branches (Transitions):** Connections between states at time $t$ and states at time $t+1$ represent transitions.
    *   For each state at time $t$, there are two possible transitions corresponding to the two possible input bits (0 or 1) at that time.
    *   Each branch is labeled with the **input bit** that caused the transition and the **corresponding output bits**.

#### **Example: A Simple Convolutional Code**

Let's consider a simple convolutional code with:
*   Constraint length $K = 3$
*   Rate $R = 1/2$ (one input bit, two output bits)
*   Generator polynomials (in octal): $g^{(1)} = 111_2 = 7_8$, $g^{(2)} = 101_2 = 5_8$

This means the encoder has a shift register of length $K-1 = 2$. The states are determined by the contents of this 2-bit shift register.

*   **Number of States:** $2^{K-1} = 2^{3-1} = 2^2 = 4$ states.
*   **State Representation:** We can represent the states by the contents of the shift register. Let $S_i$ be the state at time $i$. A state can be represented by the last $K-1=2$ input bits.
    *   State 0: `00` (previous two inputs were 0, 0)
    *   State 1: `01` (previous two inputs were 0, 1)
    *   State 2: `10` (previous two inputs were 1, 0)
    *   State 3: `11` (previous two inputs were 1, 1)

*   **Encoder Operation:**
    *   Input bit $x_t$.
    *   Shift register contents at time $t$: $[s_{t,1}, s_{t,2}]$ where $s_{t,1}$ is the oldest bit and $s_{t,2}$ is the newest bit in the register (excluding the current input).
    *   The current input bit $x_t$ is fed into the register. The new state $S_{t+1}$ is determined by the previous state's contents.
    *   For $g^{(1)} = 111_2$: Output $y_{t}^{(1)} = x_t \oplus s_{t,1} \oplus s_{t,2}$
    *   For $g^{(2)} = 101_2$: Output $y_{t}^{(2)} = x_t \oplus s_{t,2}$

Let's trace the transitions:
Assume the shift register is initially empty (state `00`).

| Current State ($S_t$) | Shift Register Contents ($[s_{t,1}, s_{t,2}]$) | Input ($x_t$) | Next State ($S_{t+1}$) | Shift Register Contents ($[s_{t+1,1}, s_{t+1,2}]$) | Output ($y_t^{(1)}y_t^{(2)}$) |
| :-------------------- | :---------------------------------------------- | :------------ | :--------------------- | :------------------------------------------------- | :----------------------------- |
| 00                    | `00`                                            | 0             | 00                     | `00`                                               | $0 \oplus 0 \oplus 0 = 0$, $0 \oplus 0 = 0$ -> `00` |
| 00                    | `00`                                            | 1             | 10                     | `01`                                               | $1 \oplus 0 \oplus 0 = 1$, $1 \oplus 0 = 1$ -> `11` |
| 01                    | `01`                                            | 0             | 00                     | `00`                                               | $0 \oplus 0 \oplus 1 = 1$, $0 \oplus 1 = 1$ -> `11` |
| 01                    | `01`                                            | 1             | 10                     | `01`                                               | $1 \oplus 0 \oplus 1 = 0$, $1 \oplus 1 = 0$ -> `00` |
| 10                    | `10`                                            | 0             | 01                     | `10`                                               | $0 \oplus 1 \oplus 0 = 1$, $0 \oplus 0 = 0$ -> `10` |
| 10                    | `10`                                            | 1             | 11                     | `10`                                               | $1 \oplus 1 \oplus 0 = 0$, $1 \oplus 0 = 1$ -> `01` |
| 11                    | `11`                                            | 0             | 01                     | `10`                                               | $0 \oplus 1 \oplus 1 = 0$, $0 \oplus 1 = 1$ -> `01` |
| 11                    | `11`                                            | 1             | 11                     | `11`                                               | $1 \oplus 1 \oplus 1 = 1$, $1 \oplus 1 = 0$ -> `10` |

*Note on State Representation:* Conventionally, the state is represented by the $K-1$ bits in the shift register *before* the current input bit is added. So, if the register contains $[s_{t,1}, s_{t,2}]$, the state is often denoted as $s_{t,1}s_{t,2}$. When an input $x_t$ arrives, it pushes $s_{t,1}$ out, $s_{t,2}$ moves to $s_{t+1,1}$, $x_t$ moves to $s_{t+1,2}$, and the new state is $s_{t+1,1}s_{t+1,2}$. The outputs are calculated based on $x_t, s_{t,1}, s_{t,2}$. Let's re-evaluate using a common convention where state is the content of the register $k-1$ bits *before* the current input.

Let the state be represented by the $K-1 = 2$ bits in the shift register.
States: 00, 01, 10, 11.
Initial state: 00.

| Current State (Register) | Input ($x_t$) | Output ($y_t^{(1)}y_t^{(2)}$) | Next State (Register) |
| :----------------------- | :------------ | :----------------------------- | :-------------------- |
| `00`                     | 0             | $0 \oplus 0 \oplus 0 = 0$, $0 \oplus 0 = 0$ -> `00` | `00` (Input 0 enters, old 00 shifts to 00) |
| `00`                     | 1             | $1 \oplus 0 \oplus 0 = 1$, $1 \oplus 0 = 1$ -> `11` | `01` (Input 1 enters, old 00 shifts to 01) |
| `01`                     | 0             | $0 \oplus 0 \oplus 1 = 1$, $0 \oplus 1 = 1$ -> `11` | `10` (Input 0 enters, old 01 shifts to 10) |
| `01`                     | 1             | $1 \oplus 0 \oplus 1 = 0$, $1 \oplus 1 = 0$ -> `00` | `11` (Input 1 enters, old 01 shifts to 11) |
| `10`                     | 0             | $0 \oplus 1 \oplus 0 = 1$, $0 \oplus 0 = 0$ -> `10` | `00` (Input 0 enters, old 10 shifts to 00) |
| `10`                     | 1             | $1 \oplus 1 \oplus 0 = 0$, $1 \oplus 0 = 1$ -> `01` | `01` (Input 1 enters, old 10 shifts to 01) |
| `11`                     | 0             | $0 \oplus 1 \oplus 1 = 0$, $0 \oplus 1 = 1$ -> `01` | `10` (Input 0 enters, old 11 shifts to 10) |
| `11`                     | 1             | $1 \oplus 1 \oplus 1 = 1$, $1 \oplus 1 = 0$ -> `10` | `11` (Input 1 enters, old 11 shifts to 11) |

**Trellis Diagram for $K=3, R=1/2$ with $g^{(1)}=7, g^{(2)}=5$:**

The diagram will have 4 vertical lines of states (00, 01, 10, 11) for each time step.
*   At time $t$, from each state, there are two outgoing branches: one for input 0, one for input 1.
*   Each branch is labeled (input bit / output bits).

```
      State 00 --(0/00)--> State 00
     /           \
    /             \
(0/00)           (1/11)
  /                 \
 /                   \
State 01 --(0/11)--> State 10
    \           /
     \         /
      (1/00)   (0/10)
        \     /
         \   /
          \ /
      State 10 --(0/10)--> State 00
     /           \
    /             \
(0/10)           (1/01)
  /                 \
 /                   \
State 11 --(0/01)--> State 10
    \           /
     \         /
      (1/10)   (0/01)
        \     /
         \   /
          \ /
```

**(Illustrative sketch - a proper trellis diagram would show states at each time step explicitly)**

A more structured way to visualize:

**Time 0:** State 00 (initial)
**Time 1:**
    From State 00 (at T0):
        Input 0 -> State 00, Output 00
        Input 1 -> State 01, Output 11
**Time 2:**
    From State 00 (at T1):
        Input 0 -> State 00, Output 00
        Input 1 -> State 01, Output 11
    From State 01 (at T1):
        Input 0 -> State 10, Output 11
        Input 1 -> State 11, Output 00

And so on for all states and time steps.

#### **Important Considerations for Trellis Diagrams:**

*   **Finite Length:** For practical coding, the trellis is often truncated or assumed to start and end in a known state (e.g., state 00) to simplify decoding of finite length messages.
*   **State Representation Convention:** Different textbooks or sources might use slightly different conventions for representing states (e.g., order of bits). Consistency is key.
*   **Branch Metrics:** In decoding, each branch is associated with a "metric" that quantifies how well the received symbol sequence matches the expected output sequence along that branch. This is typically the Euclidean distance or squared Euclidean distance in AWGN channels.

---

### **Role of Trellis Diagrams in Decoding**

Trellis diagrams are fundamental to the operation of **Maximum Likelihood Sequence Estimation (MLSE)** decoders for convolutional codes, most notably the **Viterbi Algorithm**.

*   **Viterbi Algorithm:** This algorithm finds the most likely sequence of transmitted bits by traversing the trellis. It operates on the principle of **।dynamic programming** to find the path through the trellis that minimizes the accumulated error (or maximizes the likelihood) between the received signal and the expected transmitted signal.
*   **Path Metric:** The Viterbi algorithm calculates a path metric for each possible path through the trellis. This metric accumulates the "distance" (e.g., Hamming distance for hard decisions, Euclidean distance for soft decisions) between the received symbols and the expected symbols on each branch.
*   **Survivor Path:** At each state and time step, the Viterbi algorithm keeps track of the single path that has the minimum path metric to reach that state. This is called the "survivor path."
*   **Traceback:** After reaching the end of the trellis (or a suitable point), the decoder traces back from the final state to determine the most likely sequence of input bits.

**Connection to AWGN Channel Capacity:**
While trellis diagrams are directly related to coding and decoding, they indirectly tie into channel capacity by enabling the practical implementation of error-correcting codes that allow reliable communication close to the channel capacity. By using sophisticated codes represented by trellises and decoded with algorithms like Viterbi, we can achieve lower **Bit Error Rates (BER)** for a given Signal-to-Noise Ratio (SNR), effectively pushing the communication system's performance towards the theoretical limit of the AWGN channel capacity. This relates to **Course Outcome CO1 (Explain information theory measures)** and **CO4 (Explain the basic Principle of wireless communication techniques)** by illustrating a key technique used to approach theoretical limits.

---

### **Types of Trellis Diagrams**

*   **Binary Trellis:** When input and output symbols are binary.
*   **Non-binary Trellis:** For codes with non-binary symbols (e.g., Reed-Solomon codes, though these are typically block codes, but similar concepts apply to trellis-coded modulation or advanced codes).
*   **Terminated Trellis:** For finite-length messages, the trellis can be "closed" by forcing the encoder to return to the zero state at the end. This requires appending a specific sequence of input bits.
*   **Catenated Trellis:** For concatenated codes, where the overall trellis can be a combination of simpler trellises.

---

### **Highlighting Important Points to Remember**

*   **Trellis diagrams visualize the state transitions of convolutional encoders.**
*   **The number of states in a trellis is $2^{K-1}$, where $K$ is the constraint length.**
*   **Each state in a trellis has two outgoing branches, corresponding to input bits 0 and 1.**
*   **Branches are labeled with input and output symbols.**
*   **Trellis diagrams are the foundation for Viterbi decoding.**
*   **They are crucial for understanding how convolutional codes combat noise.**
*   **Understanding trellises helps in appreciating how coding schemes enable communication closer to the channel capacity.**

---

### **Practice Questions and Exercises**

**Question 1:**
A convolutional encoder has a constraint length $K=4$ and rate $R=1/3$.
a) How many states does this encoder have?
b) How many branches emanate from each state at each time step?
c) If the generator polynomials are $g^{(1)}=1011$, $g^{(2)}=1101$, $g^{(3)}=1110$, describe the output of the encoder for an input sequence '101' starting from the zero state. (Assume the shift register is initially filled with zeros).

**Answer 1:**
a) The number of states is $2^{K-1} = 2^{4-1} = 2^3 = 8$ states.
b) From each state, there are two outgoing branches, one for input bit 0 and one for input bit 1.
c) Let's trace the input sequence '101' starting from the zero state (shift register: `000`).
    *   **Input 1 (t=0):**
        *   Shift Register: `000` (state $000$)
        *   Input $x_0 = 1$
        *   $g^{(1)}=1011$: Output $y_0^{(1)} = x_0 \oplus s_{0,1} \oplus s_{0,2} \oplus s_{0,3} = 1 \oplus 0 \oplus 0 \oplus 0 = 1$
        *   $g^{(2)}=1101$: Output $y_0^{(2)} = x_0 \oplus s_{0,1} \oplus s_{0,2} = 1 \oplus 0 \oplus 0 = 1$
        *   $g^{(3)}=1110$: Output $y_0^{(3)} = x_0 \oplus s_{0,1} \oplus s_{0,3} = 1 \oplus 0 \oplus 0 = 1$
        *   Outputs: `111`
        *   New state (shift register contents): `100` (Input 1 shifts in, old `000` becomes `100`)
    *   **Input 0 (t=1):**
        *   Shift Register: `100` (state $100$)
        *   Input $x_1 = 0$
        *   $g^{(1)}=1011$: Output $y_1^{(1)} = x_1 \oplus s_{1,1} \oplus s_{1,2} \oplus s_{1,3} = 0 \oplus 1 \oplus 0 \oplus 0 = 1$
        *   $g^{(2)}=1101$: Output $y_1^{(2)} = x_1 \oplus s_{1,1} \oplus s_{1,2} = 0 \oplus 1 \oplus 0 = 1$
        *   $g^{(3)}=1110$: Output $y_1^{(3)} = x_1 \oplus s_{1,1} \oplus s_{1,3} = 0 \oplus 1 \oplus 0 = 1$
        *   Outputs: `111`
        *   New state (shift register contents): `010` (Input 0 shifts in, old `100` becomes `010`)
    *   **Input 1 (t=2):**
        *   Shift Register: `010` (state $010$)
        *   Input $x_2 = 1$
        *   $g^{(1)}=1011$: Output $y_2^{(1)} = x_2 \oplus s_{2,1} \oplus s_{2,2} \oplus s_{2,3} = 1 \oplus 0 \oplus 1 \oplus 0 = 0$
        *   $g^{(2)}=1101$: Output $y_2^{(2)} = x_2 \oplus s_{2,1} \oplus s_{2,2} = 1 \oplus 0 \oplus 1 = 0$
        *   $g^{(3)}=1110$: Output $y_2^{(3)} = x_2 \oplus s_{2,1} \oplus s_{2,3} = 1 \oplus 0 \oplus 0 = 1$
        *   Outputs: `001`
        *   New state (shift register contents): `101` (Input 1 shifts in, old `010` becomes `101`)

    The output sequence for input '101' is '111' '111' '001'.

**Question 2:**
What is the primary purpose of a trellis diagram in the context of convolutional coding and the Viterbi algorithm?

**Answer 2:**
The primary purpose of a trellis diagram is to provide a visual representation of all possible state transitions and output sequences of a convolutional encoder over time. This structured representation is essential for the Viterbi algorithm, which uses it to efficiently find the most likely transmitted sequence by minimizing accumulated errors (path metrics) across all possible paths through the trellis.

**Question 3:**
Consider a convolutional encoder with $K=3$. What is the maximum number of states it can have? What does each state represent?

**Answer 3:**
A convolutional encoder with constraint length $K=3$ has $2^{K-1} = 2^{3-1} = 2^2 = 4$ states. Each state represents the $K-1=2$ bits stored in the encoder's shift register from the previous two time steps. These bits are crucial for determining the current output and the next state.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **References and Further Reading**

*   **Goldsmith, A. (2005). *Wireless Communications*. Cambridge University Press.**
    *   Chapter 7 (Digital Communications) and subsequent chapters on channel coding will cover convolutional codes and their performance.
*   **Rappaport, T. S. (2022). *Wireless communication: Principles and Practice*. Pearson Education.**
    *   Look for sections on error control coding, convolutional codes, and decoding algorithms.
*   **Cover, T. M., & Thomas, J. A. (2006). *Elements of Information Theory*. Wiley-Interscience.**
    *   While this book focuses on information theory fundamentals, it provides the theoretical basis for why error correction is necessary and how it relates to channel capacity.
*   **Haykin, S. (2020). *Communication Systems*. John Wiley and Sons Inc.**
    *   Detailed coverage of digital modulation and coding techniques, including convolutional codes and trellis representations.
*   **Lin, S., & Costello, D. J. (2011). *Error Control Coding: Fundamentals and Applications*. Prentice Hall Inc.**
    *   This is a seminal text on error control coding and provides in-depth explanations of convolutional codes, trellis diagrams, and the Viterbi algorithm.

---

This concludes the study notes on Trellis Diagrams for Module 2. Ensure to practice drawing and tracing paths on trellis diagrams for different codes to solidify your understanding.