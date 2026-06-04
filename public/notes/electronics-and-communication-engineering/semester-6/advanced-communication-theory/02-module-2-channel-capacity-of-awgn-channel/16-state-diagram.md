---
title: "State diagram."
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 2: Channel Capacity of AWGN Channel"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed10"
status: "completed"
scrapedAt: "2026-05-23T17:58:45.106Z"
---
# Advanced Communication Theory: Module 2 - Channel Capacity of AWGN Channel

## Topic: State Diagrams

### 1. Introduction to State Diagrams in Communication Systems

State diagrams are powerful visual tools used to represent the behavior of systems that evolve over time, particularly those with memory or sequential dependencies. In the context of communication theory, especially when analyzing the performance and capacity of channels, state diagrams are crucial for understanding the impact of memory in the channel or the encoder/decoder. While the Additive White Gaussian Noise (AWGN) channel itself is memoryless, state diagrams become relevant when we consider the effects of coding schemes that introduce memory.

**Key Concept:** A state diagram graphically represents a system's possible states and the transitions between these states caused by input symbols or events.

**Relevance to AWGN Channel Capacity:**
While the AWGN channel is memoryless, the concept of state diagrams is fundamental to understanding the performance of **coded** systems operating over AWGN channels. Specifically, when exploring techniques that improve reliability and can potentially approach channel capacity, we often encounter systems with memory, such as convolutional codes. The state of a convolutional encoder, for example, determines the output based on the current input and the previous inputs.

### 2. Understanding State Diagrams

A state diagram consists of:

*   **States:** Represented by circles or nodes. Each state encapsulates the "memory" of the system at a particular point in time.
*   **Transitions:** Represented by directed arrows connecting states. Each transition signifies a change from one state to another, typically triggered by an input.
*   **Input/Output Labels:** Associated with each transition. These labels indicate the input that causes the transition and the output produced during that transition.

**Example (Conceptual): A Simple Finite State Machine**

Imagine a simple machine that can be in one of two states: 'On' or 'Off'.

*   **State 1:** 'Off'
*   **State 2:** 'On'

**Transitions:**

*   From 'Off' to 'On': Triggered by input '1' (e.g., power on). Output: 'Click'.
*   From 'On' to 'Off': Triggered by input '0' (e.g., power off). Output: 'Click'.
*   From 'Off' to 'Off': Triggered by input '0'. Output: 'No sound'.
*   From 'On' to 'On': Triggered by input '1'. Output: 'No sound'.

**Visual Representation:**

```
       +-------+
       |       |
 (0)---|       |---(1)
       |  Off  |
       |       |
       +-------+
          ^ ^
          | |
       (0)| |(1)
          | |
       +-------+
       |       |
 (0)---|       |---(1)
       |  On   |
       |       |
       +-------+
```
*(Note: This is a conceptual example to illustrate state diagram components. The output labels are simplified.)*

### 3. State Diagrams in Convolutional Coding (Crucial for AWGN Analysis)

Convolutional codes are a prime example where state diagrams are indispensable. They are used to analyze the structure, properties, and decoding of these codes.

**Key Concepts for Convolutional Codes:**

*   **Constraint Length (K):** A parameter of the convolutional code that determines the number of previous input bits that influence the current output. This directly dictates the number of states in the encoder.
*   **Number of States:** For a convolutional encoder with $m$ memory elements (shift register stages), there are $2^m$ possible states. Each state represents a unique combination of the $m$ previous input bits stored in the shift register.
*   **State Transition Diagram:** This is the specific type of state diagram used for convolutional encoders. It shows how the encoder moves from one state to another as new input bits arrive.

**Understanding the State Transition Diagram for a Convolutional Encoder:**

1.  **States:** The states are labeled by the contents of the encoder's shift register, typically represented as a binary string of length $m$. For example, if $m=2$, states can be $00$, $01$, $10$, $11$.
2.  **Transitions:** For each state, there are two possible input bits: '0' and '1'. Each input bit causes a transition to a new state.
3.  **Output:** Each transition is labeled with the output bits produced by the encoder for that specific input bit and the current state.

**Example: A Simple Convolutional Encoder (Goldsmith, Chapter 4.3.1, p. 133)**

Consider a convolutional encoder with constraint length $K=3$ (meaning $m=K-1=2$ memory elements). The encoder has $2^m = 2^2 = 4$ states. Let the generator polynomials be $g^{(1)} = (1, 1, 1)$ and $g^{(2)} = (1, 0, 1)$.

*   **States:** Represented by the contents of the 2-bit shift register: $00$, $01$, $10$, $11$. State $00$ is the initial state.
*   **Transitions:**
    *   If the current state is $S_i$ (represented by the shift register content) and the input bit is '0', the shift register is shifted left (most significant bit discarded) and a '0' is appended to the right. The output bits are calculated by XORing the input bit and the contents of the register according to the generator polynomials.
    *   If the input bit is '1', the process is similar, but a '1' is appended to the right.

**State Transition Diagram Construction:**

Let the shift register content be represented as $b_1b_0$, where $b_1$ is the oldest bit and $b_0$ is the newest.

*   **Current State:** $b_1b_0$
*   **Input Bit:** $x$

**If input is '0':**
*   New shift register content: $b_00$ (The old $b_1$ is discarded, $b_0$ moves to the first position, and a new '0' is added).
*   Output $c^{(1)}$: $x \oplus b_1 \oplus b_0$ (using $g^{(1)} = (1, 1, 1)$ for $x=0$, this is $0 \oplus b_1 \oplus b_0$)
*   Output $c^{(2)}$: $x \oplus b_1$ (using $g^{(2)} = (1, 0, 1)$ for $x=0$, this is $0 \oplus b_1$)

**If input is '1':**
*   New shift register content: $b_01$
*   Output $c^{(1)}$: $x \oplus b_1 \oplus b_0$ (using $g^{(1)} = (1, 1, 1)$ for $x=1$, this is $1 \oplus b_1 \oplus b_0$)
*   Output $c^{(2)}$: $x \oplus b_1$ (using $g^{(2)} = (1, 0, 1)$ for $x=1$, this is $1 \oplus b_1$)

**Example Transitions:**

*   **State 00 (shift register $00$):**
    *   Input '0': Next state $00$. Output: $0 \oplus 0 \oplus 0 = 0$ (for $c^{(1)}$), $0 \oplus 0 = 0$ (for $c^{(2)}$). Transition: $00 \xrightarrow{0/00} 00$.
    *   Input '1': Next state $01$. Output: $1 \oplus 0 \oplus 0 = 1$ (for $c^{(1)}$), $1 \oplus 0 = 1$ (for $c^{(2)}$). Transition: $00 \xrightarrow{1/11} 01$.
*   **State 01 (shift register $01$):**
    *   Input '0': Next state $10$. Output: $0 \oplus 0 \oplus 1 = 1$ (for $c^{(1)}$), $0 \oplus 0 = 0$ (for $c^{(2)}$). Transition: $01 \xrightarrow{0/10} 10$.
    *   Input '1': Next state $11$. Output: $1 \oplus 0 \oplus 1 = 0$ (for $c^{(1)}$), $1 \oplus 0 = 1$ (for $c^{(2)}$). Transition: $01 \xrightarrow{1/01} 11$.

**(Continue this for all states and inputs to complete the diagram.)**

**Visualizing the State Transition Diagram:**

```
State 00 --(0/00)--> State 00
  |                     ^
  | (1/11)              | (0/10)
  v                     |
State 01 --(1/01)--> State 11
  |                     ^
  | (0/10)              | (1/11)
  v                     |
State 10 --(1/11)--> State 10
  |                     ^
  | (0/00)              | (1/01)
  v                     |
State 11 --(0/01)--> State 01
```
*(Note: This is a simplified representation. The actual diagram would be more structured showing all transitions from each state. The labels are input/output bits.)*

**Importance of State Diagrams in Decoding:**

*   **Viterbi Algorithm:** The Viterbi algorithm, a maximum likelihood decoding algorithm for convolutional codes, relies heavily on the state diagram (or its equivalent trellis diagram). It efficiently searches for the most likely path through the states over time to recover the transmitted sequence. The state diagram helps visualize the trellis structure.
*   **Understanding Code Properties:** The structure of the state diagram reveals important properties of the code, such as its free distance, which is crucial for understanding its error-correcting capabilities.

### 4. State Diagrams and Channel Capacity (Indirect Relation)

While the state diagram itself doesn't directly *define* channel capacity, it is instrumental in understanding how **coding schemes** can be used to approach the channel capacity of an AWGN channel.

*   **AWGN Channel Capacity (Shannon-Hartley Theorem):** The capacity $C$ of an AWGN channel is given by $C = B \log_2(1 + \frac{SNR}{\gamma})$. The state diagram helps us design codes (like convolutional codes) that, when decoded appropriately, can operate reliably at low SNR values, effectively utilizing the channel's capacity.
*   **Capacity-Approaching Codes:** Advanced coding techniques that utilize memory (and thus can be represented by state diagrams) are essential for achieving near-capacity performance. Understanding their state transitions is key to their analysis and design.

### 5. Learning Outcomes Addressed

*   **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)**
    *   While state diagrams don't directly define these, understanding them is part of the broader context of information theory that motivates the need for coding schemes analyzed by state diagrams.
*   **CO2: Apply source coding theorem for data compression. (Knowledge Level: K3)**
    *   Not directly related to state diagrams in this context.
*   **CO3: Apply channel coding for error detection and correction (Knowledge Level: K3)**
    *   **Crucially important.** State diagrams are fundamental to understanding and designing convolutional codes, which are a major class of channel codes used to improve reliability over AWGN channels and approach capacity.
*   **CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)**
    *   Understanding memory in communication systems, as depicted by state diagrams, is a basic principle applicable to various wireless techniques beyond just convolutional codes.
*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)**
    *   State diagrams are primarily used for analyzing **coded** systems. While the AWGN channel is memoryless, fading channels often exhibit memory, and state diagrams can be applied to model the state of the fading process or the performance of coding over such channels.
*   **CO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance . (Knowledge Level: K3)**
    *   While not directly about diversity or equalization, state diagrams are key to understanding the error-correcting capabilities of codes that are often used *in conjunction* with diversity and equalization to improve receiver performance.

### 6. Key Points to Remember

*   State diagrams visualize the sequential behavior of systems with memory.
*   In communication theory, they are most prominently used to represent **convolutional encoders**.
*   The number of states in a convolutional encoder is $2^{K-1}$, where $K$ is the constraint length.
*   State diagrams are the basis for understanding the structure and decoding of convolutional codes, particularly the Viterbi algorithm.
*   By enabling effective channel coding, state diagrams indirectly help in approaching the **channel capacity** of systems like the AWGN channel.
*   The labels on state diagram transitions indicate the input that causes the transition and the corresponding output bits.

### 7. Practice Questions and Exercises

**Question 1 (Conceptual):**
What are the two main components of a state diagram, and what do they represent?

**Answer:**
The two main components are **states** (representing the memory or configuration of the system) and **transitions** (representing the changes between states caused by inputs, often labeled with inputs and outputs).

**Question 2 (Convolutional Codes):**
Consider a convolutional encoder with constraint length $K=3$. How many states does this encoder have? If the encoder is in state '10' (shift register content), what are the possible next states if the input bits are '0' and '1'?

**Answer:**
*   Number of states: $2^{K-1} = 2^{3-1} = 2^2 = 4$ states.
*   Let's assume the shift register stores $b_1b_0$. If the current state is '10', then $b_1=1, b_0=0$.
    *   **Input '0':** The new shift register content becomes $b_00 = 00$. So, the next state is '00'.
    *   **Input '1':** The new shift register content becomes $b_01 = 01$. So, the next state is '01'.

**Question 3 (Application to AWGN):**
Why is understanding the state diagrams of convolutional codes important for achieving high data rates and reliability over an AWGN channel, even though the AWGN channel itself is memoryless?

**Answer:**
The AWGN channel is memoryless, meaning the noise at any time instant is independent of previous noise. However, to achieve reliable communication, especially at low signal-to-noise ratios, we use channel coding. Convolutional codes, whose behavior is effectively modeled by state diagrams, are powerful error-correcting codes. By understanding the state transitions and output behavior of these codes (via their state diagrams), we can design efficient decoding algorithms (like Viterbi) that can correct errors introduced by the AWGN channel. This allows us to operate closer to the Shannon capacity of the AWGN channel, enabling both high data rates and high reliability.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Textual References

*   **Wireless Communications by Andrea Goldsmith:** Chapter 4 (Digital Modulation) and Chapter 5 (Detection and Estimation) discuss error control coding and its performance over AWGN channels. While the book might not dedicate a specific section solely to "state diagrams" as a standalone concept, it extensively uses the principles of state diagrams when explaining convolutional codes and their decoding algorithms (like the Viterbi algorithm). The state diagram is implicitly present in the description of the encoder's shift register and its transitions.
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover:** This book lays the theoretical foundation for channel capacity. While it doesn't focus on state diagrams directly, it provides the "why" behind needing codes that can be represented by state diagrams to achieve capacity.
*   **Communication Systems by Simon Haykin:** Chapter 7 (Digital Modulation Schemes) and Chapter 9 (Error Control Coding) are highly relevant. Haykin's text often delves into the encoder structures, including convolutional encoders, and the underlying principles that would necessitate the use of state diagrams for their analysis and decoding.

### 9. Conclusion

State diagrams are a fundamental tool for understanding and analyzing the behavior of sequential systems in communication. In the context of Module 2, their primary importance lies in their application to convolutional codes, which are critical for achieving reliable communication and approaching the channel capacity of AWGN channels. By visualizing the encoder's states and transitions, we gain insights into the code's structure and the basis for powerful decoding algorithms like the Viterbi algorithm.