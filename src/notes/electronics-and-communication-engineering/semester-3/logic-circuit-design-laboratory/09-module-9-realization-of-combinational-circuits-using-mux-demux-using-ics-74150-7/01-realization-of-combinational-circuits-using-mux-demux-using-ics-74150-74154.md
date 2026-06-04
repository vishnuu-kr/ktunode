---
title: "Realization of combinational circuits using MUX & DEMUX, using ICs (74150, 74154)"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 9: Realization of combinational circuits using MUX & DEMUX, using ICs (74150, 74154)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe44c"
status: "completed"
scrapedAt: "2026-05-23T17:46:23.843Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY: Module 9 - Realization of Combinational Circuits using MUX & DEMUX (ICs 74150, 74154)

## Introduction

This module delves into the practical realization of combinational logic circuits using Multiplexers (MUX) and Demultiplexers (DEMUX), specifically focusing on industry-standard integrated circuits (ICs) like the 74150 (16-to-1 MUX) and 74154 (4-to-16 DEMUX). We will explore how these versatile building blocks can be used to implement complex Boolean functions efficiently, a core skill in digital logic design.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Design and demonstrate the functioning of combinational circuits using MUX and DEMUX ICs (CO1, K3).**
*   **Implement logic functions using 74150 (16-to-1 MUX) and 74154 (4-to-16 DEMUX) ICs.**
*   **Understand the operational principles of MUX and DEMUX ICs.**
*   **Connect and configure these ICs on a breadboard or development board.**
*   **Verify the functionality of the implemented circuits through testing.**
*   **Relate the practical implementation to theoretical concepts from textbooks.**

## Key Concepts and Definitions

### Multiplexer (MUX)

A **Multiplexer** (MUX) is a combinational logic circuit that selects one of several input signals and forwards it to a single output line. The selection of which input line is connected to the output is determined by a set of **select lines**. A MUX can be thought of as a "data selector."

*   **Functionality:**
    *   $n$ input data lines
    *   $m$ select lines, where $2^m = n$
    *   1 output line
*   **Operation:** The binary value applied to the select lines determines which input line is connected to the output. If the select lines represent the binary value $S$, then the input line $I_S$ is connected to the output.

### Demultiplexer (DEMUX)

A **Demultiplexer** (DEMUX) is a combinational logic circuit that receives a single input signal and directs it to one of several output lines. The selection of which output line receives the input is determined by a set of **select lines**. A DEMUX can be thought of as a "data distributor."

*   **Functionality:**
    *   1 input data line
    *   $m$ select lines, where $2^m = n$ (number of output lines)
    *   $n$ output lines
*   **Operation:** The binary value applied to the select lines determines which output line receives the input signal. If the select lines represent the binary value $S$, then the input is routed to output line $O_S$.

### Integrated Circuits (ICs)

ICs are miniaturized electronic circuits fabricated on a semiconductor substrate (typically silicon). They contain numerous transistors, resistors, capacitors, and other components interconnected to perform specific functions.

### 74150: 16-to-1 Multiplexer

*   **Description:** The 74150 is a standard TTL (Transistor-Transistor Logic) IC that functions as a 16-to-1 multiplexer.
*   **Pin Configuration:**
    *   16 Data Inputs ($I_0$ to $I_{15}$)
    *   4 Select Inputs ($S_0$ to $S_3$). These determine which of the 16 data inputs is connected to the output. The binary combination of $S_3S_2S_1S_0$ selects the input $I_{S_3S_2S_1S_0}$.
    *   1 Enable Input ($\bar{E}$ or $G$). This is an active-low input. When $\bar{E}$ is low, the MUX operates normally. When $\bar{E}$ is high, the output is forced to a high logic level (1).
    *   1 Output ($Y$).
*   **Truth Table (Conceptual):**
    *   $Y = (\bar{E}) \cdot (I_0 \cdot \overline{S_3}\overline{S_2}\overline{S_1}\overline{S_0} + I_1 \cdot \overline{S_3}\overline{S_2}\overline{S_1}S_0 + ... + I_{15} \cdot S_3S_2S_1S_0)$
    *   Essentially, $Y = I_{select\_code}$ when $\bar{E}$ is low.

### 74154: 4-to-16 Demultiplexer

*   **Description:** The 74154 is a standard TTL IC that functions as a 4-to-16 demultiplexer.
*   **Pin Configuration:**
    *   1 Data Input ($D$). This is the single input that will be routed to one of the outputs.
    *   4 Select Inputs ($S_0$ to $S_3$). These determine which of the 16 output lines receives the input data. The binary combination of $S_3S_2S_1S_0$ selects the output $O_{S_3S_2S_1S_0}$.
    *   2 Enable Inputs ($\bar{G}_1$, $\bar{G}_2$). These are active-low enable inputs. For the DEMUX to operate, both $\bar{G}_1$ and $\bar{G}_2$ must be low. If either is high, all outputs are forced to a high logic level (1).
    *   16 Output Lines ($O_0$ to $O_{15}$). These are active-low outputs. This means that when an output line is selected and enabled, it will be at a low logic level (0). When not selected, or when the device is disabled, the output will be at a high logic level (1).
*   **Truth Table (Conceptual):**
    *   $O_i = \overline{D}$ if the select code corresponds to $i$ and $\bar{G}_1 = \bar{G}_2 = 0$.
    *   $O_i = 1$ otherwise.

## Realization of Combinational Circuits using MUX

**Principle:** A MUX can be used to implement any Boolean function of a certain number of variables. For an $n$-input MUX, we can implement any Boolean function of $m$ variables, where $2^m \le n$.

### Implementing a Boolean Function using a MUX

Let's consider implementing a Boolean function with $m$ variables, $F(A, B, C, ...)$. We will use an $n$-input MUX where $2^m \le n$.

1.  **Identify the number of variables:** Determine the number of input variables ($m$) for your Boolean function.
2.  **Select the appropriate MUX:** Choose a MUX with enough input lines ($n$) such that $2^m \le n$. For example, to implement a 3-variable function ($A, B, C$), a 4-to-1 MUX or an 8-to-1 MUX can be used. If we use an 8-to-1 MUX, $m=3$, $n=8$, $2^3=8$. If we use a 16-to-1 MUX (74150), we can implement functions of up to 4 variables ($A, B, C, D$), as $2^4=16$.
3.  **Assign select lines:** Connect the $m$ input variables to the $m$ select lines of the MUX. For a 74150, we can connect up to 4 variables (e.g., $D, C, B, A$) to the select lines $S_3, S_2, S_1, S_0$ respectively.
4.  **Generate the logic function:** The core idea is to express the Boolean function $F(A, B, C, D)$ in a Sum of Products (SOP) form. For each minterm where $F=1$, the corresponding data input of the MUX is connected to logic HIGH (1). For each minterm where $F=0$, the corresponding data input is connected to logic LOW (0).

    However, when the number of input variables ($m$) is less than the number of select lines of the chosen MUX, we need to manipulate the logic. If we have a $k$-variable function and use a $2^k$-to-1 MUX, we can directly map the minterms.

    When $m < k$, we need to express the function in terms of the $k$ variables. Let the function be $F(A, B, C)$, and we use a 74150 (4 variables, $D, C, B, A$). We need to express $F(A, B, C)$ as a function of $D, C, B, A$.

    **Method for $m < k$ variables:**
    *   Write the Karnaugh Map (K-map) for the function with $m$ variables.
    *   To implement this on a $2^k$-to-1 MUX with variables $V_k, V_{k-1}, ..., V_1$ connected to select lines, where $m < k$. Let the unused variables be $U_1, U_2, ...$.
    *   The $n$ data inputs ($I_0$ to $I_{n-1}$) of the MUX will be connected to combinations of the remaining variables and constants (0 or 1).
    *   For a $2^k$-to-1 MUX, each input line corresponds to a unique combination of the $k$ select variables. Let the select lines be $S_{k-1}, ..., S_0$. The input $I_j$ is activated when $S_{k-1}...S_0$ equals $j$.
    *   Consider a function of 3 variables ($A, B, C$) implemented using an 8-to-1 MUX with select lines $C, B, A$.
        *   Input $I_0$ is activated when $CBA=000$.
        *   Input $I_1$ is activated when $CBA=001$.
        *   ...
        *   Input $I_7$ is activated when $CBA=111$.

    *   Now, consider implementing $F(A, B, C)$ using a 16-to-1 MUX (74150) with select lines $D, C, B, A$.
        *   Each input $I_j$ is activated when $DCBA$ corresponds to the binary value of $j$.
        *   For a given input $I_j$, we need to determine what to connect to it based on the function $F(A, B, C)$.
        *   Let's take a specific input combination for the select lines, say $DCBA = 0101$ (decimal 5). This selects input $I_5$. What should $I_5$ be connected to?
        *   For $I_5$ to be connected to the output, the select lines must be $DCBA=0101$. The function we are implementing is $F(A, B, C)$. The value of $D$ is fixed to 0 in this case. So, for $DCBA=0101$, the function value should be $F(1, 0, 1, D=0)$, which is $F(A=1, B=0, C=1)$ with $D=0$.
        *   So, for each input $I_j$ of the MUX, the connection will be determined by the values of the unused variable(s) for that specific minterm $j$.

    **Example: Implement $F(A, B, C) = \Sigma m(1, 3, 4, 7)$ using a 74150 (16-to-1 MUX).**

    *   We have $m=3$ variables $(A, B, C)$ and $k=4$ select lines $(D, C, B, A)$.
    *   The select lines for the 74150 are $S_3, S_2, S_1, S_0$. Let's map $D \to S_3, C \to S_2, B \to S_1, A \to S_0$.
    *   The function is given by minterms $1, 3, 4, 7$.
    *   The full minterms for 4 variables are:
        *   $m_0 = \overline{D}\overline{C}\overline{B}\overline{A}$
        *   $m_1 = \overline{D}\overline{C}\overline{B}A$
        *   $m_2 = \overline{D}\overline{C}B\overline{A}$
        *   $m_3 = \overline{D}\overline{C}BA$
        *   $m_4 = \overline{D}C\overline{B}\overline{A}$
        *   $m_5 = \overline{D}C\overline{B}A$
        *   $m_6 = \overline{D}CB\overline{A}$
        *   $m_7 = \overline{D}CBA$
        *   $m_8 = D\overline{C}\overline{B}\overline{A}$
        *   ... and so on up to $m_{15}$.

    *   The function $F(A, B, C) = \Sigma m(1, 3, 4, 7)$ means that $F=1$ for these minterms *considering only the 3 variables*. When we extend to 4 variables, these minterms will be present for both $D=0$ and $D=1$.
        *   $m_1$ in 3 variables corresponds to $m_1 (\overline{D}\overline{C}\overline{B}A)$ and $m_9 (D\overline{C}\overline{B}A)$ in 4 variables.
        *   $m_3$ in 3 variables corresponds to $m_3 (\overline{D}\overline{C}BA)$ and $m_{11} (D\overline{C}BA)$ in 4 variables.
        *   $m_4$ in 3 variables corresponds to $m_4 (\overline{D}C\overline{B}\overline{A})$ and $m_{12} (DC\overline{B}\overline{A})$ in 4 variables.
        *   $m_7$ in 3 variables corresponds to $m_7 (\overline{D}CBA)$ and $m_{15} (DCBA)$ in 4 variables.

    *   So, the function in 4 variables is $F(D, C, B, A) = \Sigma m(1, 3, 4, 7, 9, 11, 12, 15)$.
    *   For an 8-to-1 MUX, we would map $C, B, A$ to select lines.
        *   Input $I_1$ connected to 1 (since $m_1$ is in the function).
        *   Input $I_3$ connected to 1 (since $m_3$ is in the function).
        *   Input $I_4$ connected to 1 (since $m_4$ is in the function).
        *   Input $I_7$ connected to 1 (since $m_7$ is in the function).
        *   All other inputs connected to 0.

    *   **Using the 74150 (16-to-1 MUX) with $D, C, B, A$ as select lines:**
        *   Map $D \to S_3, C \to S_2, B \to S_1, A \to S_0$.
        *   The function is $F(A, B, C)$. We need to decide what to connect to each input $I_j$ of the 74150. The choice depends on the value of the unused variable $D$.

        **Method using K-map with extra variable:**
        *   Create a K-map for the 4 variables $(D, C, B, A)$. We are interested in the function $F(A, B, C)$, which means for each combination of $CBA$, $F$ depends on $A$, and $D$ is an additional variable.
        *   Let's use the $m$-variable function and group the minterms by the values of the remaining $k-m$ variables.
        *   For $F(A, B, C) = \Sigma m(1, 3, 4, 7)$, use a 16-to-1 MUX with select lines $S_3=D, S_2=C, S_1=B, S_0=A$.
        *   We need to determine the values for inputs $I_0$ through $I_{15}$. Each input $I_j$ corresponds to a unique combination of $DCBA$.

        **Procedure:**
        1.  Write out the truth table for $F(A, B, C)$.
        2.  For each output of the MUX (corresponding to a combination of select lines $D, C, B, A$), determine what the value of $F(A, B, C)$ should be.
        3.  **Crucial Step:** If a minterm $j$ (combination of $D, C, B, A$) requires a specific value of $F$, but that value is not fixed by $A, B, C$ (i.e., it depends on $D$), we use the values of the other variables.

        Let's simplify the function $F(A, B, C)$ for each input of the 74150:
        *   **Input $I_0$ (DCBA=0000):** Selects input when $D=0, C=0, B=0, A=0$. Function value should be $F(A=0, B=0, C=0, D=0)$. Since $F$ is defined for 3 variables, we look at $F(0,0,0)$. This minterm is not in the sum, so $F=0$. We connect $I_0$ to 0.
        *   **Input $I_1$ (DCBA=0001):** Selects input when $D=0, C=0, B=0, A=1$. Function value should be $F(A=1, B=0, C=0, D=0)$. $m_1$ is in the sum, so $F=1$. We connect $I_1$ to 1.
        *   **Input $I_2$ (DCBA=0010):** Selects input when $D=0, C=0, B=1, A=0$. Function value should be $F(A=0, B=1, C=0, D=0)$. This minterm ($m_2$ in 3 variables) is not in the sum. So, $F=0$. We connect $I_2$ to 0.
        *   **Input $I_3$ (DCBA=0011):** Selects input when $D=0, C=0, B=1, A=1$. Function value should be $F(A=1, B=1, C=0, D=0)$. $m_3$ is in the sum, so $F=1$. We connect $I_3$ to 1.
        *   **Input $I_4$ (DCBA=0100):** Selects input when $D=0, C=1, B=0, A=0$. Function value should be $F(A=0, B=0, C=1, D=0)$. $m_4$ is in the sum, so $F=1$. We connect $I_4$ to 1.
        *   **Input $I_5$ (DCBA=0101):** Selects input when $D=0, C=1, B=0, A=1$. Function value should be $F(A=1, B=0, C=1, D=0)$. This minterm ($m_5$ in 3 variables) is not in the sum. So, $F=0$. We connect $I_5$ to 0.
        *   **Input $I_6$ (DCBA=0110):** Selects input when $D=0, C=1, B=1, A=0$. Function value should be $F(A=0, B=1, C=1, D=0)$. This minterm ($m_6$ in 3 variables) is not in the sum. So, $F=0$. We connect $I_6$ to 0.
        *   **Input $I_7$ (DCBA=0111):** Selects input when $D=0, C=1, B=1, A=1$. Function value should be $F(A=1, B=1, C=1, D=0)$. $m_7$ is in the sum, so $F=1$. We connect $I_7$ to 1.

        Now consider the cases where $D=1$:
        *   **Input $I_8$ (DCBA=1000):** Selects input when $D=1, C=0, B=0, A=0$. Function value should be $F(A=0, B=0, C=0, D=1)$. Since $F$ is defined for 3 variables $(A, B, C)$, and $D$ is not part of the function, we need to group based on $D$.
            *   If the function is $F(A, B, C) = \Sigma m(1, 3, 4, 7)$, we can express this using a K-map of 4 variables.
            *   In a 4-variable K-map for $F(D, C, B, A)$, the outputs for $D=0$ are $00010101$. The outputs for $D=1$ will be the same if the function doesn't depend on $D$.
            *   **Better Approach: K-map Grouping**
                *   Create a K-map for the 3 variables $A, B, C$.
                *   For each cell in the K-map, the value of $F$ is either 0 or 1.
                *   Now, consider the 4-variable MUX. Let $D$ be the most significant variable for select lines.
                *   For each minterm $j$ of the 4-variable MUX (determined by $DCBA$), we need to decide the value for $I_j$. This value depends on the function $F(A, B, C)$.
                *   For a given minterm $j$ corresponding to select lines $S_3 S_2 S_1 S_0$, let the values of $C, B, A$ be fixed. If the function $F(A, B, C)$ is defined for this combination of $C, B, A$, we use that value.

            **Let's use the general method of expressing the function on the MUX inputs:**
            For an $n$-input MUX with $k$ select lines ($n=2^k$) and a function of $m$ variables ($m < k$):
            Let the select lines be $S_{k-1}, \dots, S_0$ and the function variables be $V_{m-1}, \dots, V_0$.
            We map $V_{m-1} \to S_{k-1}, \dots, V_0 \to S_m$. The remaining select lines $S_{m-1}, \dots, S_0$ are not used for the function variables.

            Let's re-apply to our example: $F(A, B, C)$ and 74150 ($D, C, B, A$ for select lines $S_3, S_2, S_1, S_0$).
            Map $C \to S_2, B \to S_1, A \to S_0$. $D$ is now one of the "unused" select lines, which will influence the inputs to the MUX.
            Let's assign $D$ to $S_3$.
            So, select lines are $S_3=D, S_2=C, S_1=B, S_0=A$.

            For each input $I_j$ (where $j$ is the decimal equivalent of $S_3S_2S_1S_0$), we need to determine what to connect.

            Consider the $m$ variables $A, B, C$. We need to construct $F(A, B, C)$ using a 16-to-1 MUX.
            The 16 inputs of the MUX will be connected to combinations of $A, B, C$ and constants.

            **Table showing how to connect MUX inputs for $F(A, B, C)$ using a 16-to-1 MUX:**
            | Select Lines ($S_3S_2S_1S_0$) | $D C B A$ | MUX Input Connection (based on $F(A,B,C)$) | $F(A,B,C)$ value if $D$ is held at 0 or 1 |
            | :---------------------------- | :-------- | :------------------------------------------ | :------------------------------------------ |
            | 0000                          | $D C B A$ | $I_0$                                       | $F(0,0,0)$                                  |
            | 0001                          | $D C B A$ | $I_1$                                       | $F(1,0,0)$                                  |
            | 0010                          | $D C B A$ | $I_2$                                       | $F(0,1,0)$                                  |
            | 0011                          | $D C B A$ | $I_3$                                       | $F(1,1,0)$                                  |
            | 0100                          | $D C B A$ | $I_4$                                       | $F(0,0,1)$                                  |
            | 0101                          | $D C B A$ | $I_5$                                       | $F(1,0,1)$                                  |
            | 0110                          | $D C B A$ | $I_6$                                       | $F(0,1,1)$                                  |
            | 0111                          | $D C B A$ | $I_7$                                       | $F(1,1,1)$                                  |
            | 1000                          | $D C B A$ | $I_8$                                       | $F(0,0,0)$                                  |
            | 1001                          | $D C B A$ | $I_9$                                       | $F(1,0,0)$                                  |
            | 1010                          | $D C B A$ | $I_{10}$                                    | $F(0,1,0)$                                  |
            | 1011                          | $D C B A$ | $I_{11}$                                    | $F(1,1,0)$                                  |
            | 1100                          | $D C B A$ | $I_{12}$                                    | $F(0,0,1)$                                  |
            | 1101                          | $D C B A$ | $I_{13}$                                    | $F(1,0,1)$                                  |
            | 1110                          | $D C B A$ | $I_{14}$                                    | $F(0,1,1)$                                  |
            | 1111                          | $D C B A$ | $I_{15}$                                    | $F(1,1,1)$                                  |

            Now, let's use the function $F(A, B, C) = \Sigma m(1, 3, 4, 7)$.
            Truth Table for $F(A, B, C)$:
            | $C$ | $B$ | $A$ | $F(A, B, C)$ |
            | :-- | :-- | :-- | :----------- |
            | 0   | 0   | 0   | 0            |
            | 0   | 0   | 1   | 1            |
            | 0   | 1   | 0   | 0            |
            | 0   | 1   | 1   | 1            |
            | 1   | 0   | 0   | 1            |
            | 1   | 0   | 1   | 0            |
            | 1   | 1   | 0   | 0            |
            | 1   | 1   | 1   | 1            |

            Now fill the MUX input table:
            *   For $I_0$ (DCBA=0000): $C=0, B=0, A=0$. $F(0,0,0)=0$. Connect $I_0$ to 0.
            *   For $I_1$ (DCBA=0001): $C=0, B=0, A=1$. $F(1,0,0)=1$. Connect $I_1$ to 1.
            *   For $I_2$ (DCBA=0010): $C=0, B=1, A=0$. $F(0,1,0)=0$. Connect $I_2$ to 0.
            *   For $I_3$ (DCBA=0011): $C=0, B=1, A=1$. $F(1,1,0)=1$. Connect $I_3$ to 1.
            *   For $I_4$ (DCBA=0100): $C=1, B=0, A=0$. $F(0,0,1)=1$. Connect $I_4$ to 1.
            *   For $I_5$ (DCBA=0101): $C=1, B=0, A=1$. $F(1,0,1)=0$. Connect $I_5$ to 0.
            *   For $I_6$ (DCBA=0110): $C=1, B=1, A=0$. $F(0,1,1)=0$. Connect $I_6$ to 0.
            *   For $I_7$ (DCBA=0111): $C=1, B=1, A=1$. $F(1,1,1)=1$. Connect $I_7$ to 1.

            *   Now consider the cases where $D=1$ (select lines $1xxx$):
            *   For $I_8$ (DCBA=1000): $C=0, B=0, A=0$. The function is $F(A, B, C)$. The value of $D$ (which is 1 here) does not affect $F$. So, we use the value of $F(0,0,0)$ which is 0. Connect $I_8$ to 0.
            *   For $I_9$ (DCBA=1001): $C=0, B=0, A=1$. $F(1,0,0)=1$. Connect $I_9$ to 1.
            *   For $I_{10}$ (DCBA=1010): $C=0, B=1, A=0$. $F(0,1,0)=0$. Connect $I_{10}$ to 0.
            *   For $I_{11}$ (DCBA=1011): $C=0, B=1, A=1$. $F(1,1,0)=1$. Connect $I_{11}$ to 1.
            *   For $I_{12}$ (DCBA=1100): $C=1, B=0, A=0$. $F(0,0,1)=1$. Connect $I_{12}$ to 1.
            *   For $I_{13}$ (DCBA=1101): $C=1, B=0, A=1$. $F(1,0,1)=0$. Connect $I_{13}$ to 0.
            *   For $I_{14}$ (DCBA=1110): $C=1, B=1, A=0$. $F(0,1,1)=0$. Connect $I_{14}$ to 0.
            *   For $I_{15}$ (DCBA=1111): $C=1, B=1, A=1$. $F(1,1,1)=1$. Connect $I_{15}$ to 1.

            **Summary of Connections for $F(A, B, C) = \Sigma m(1, 3, 4, 7)$ using 74150:**
            Connect $C \to S_2, B \to S_1, A \to S_0$. Let $D \to S_3$.
            Connect data inputs $I_1, I_3, I_4, I_7, I_9, I_{11}, I_{12}, I_{15}$ to logic HIGH (1).
            Connect data inputs $I_0, I_2, I_5, I_6, I_8, I_{10}, I_{13}, I_{14}$ to logic LOW (0).
            Connect the enable pin $\bar{E}$ to LOW.

**Alternative Method (when $m < k$ variables):**
This method directly uses the K-map for the $m$ variables and maps it onto the MUX.
Let $F(A, B, C)$ be implemented using a $2^k$-to-1 MUX with select lines $S_{k-1}, \dots, S_0$. Let the function variables be $V_{m-1}, \dots, V_0$.
Map $V_{m-1} \to S_{k-1}, \dots, V_0 \to S_0$. This is if we are using an $m$-variable MUX.

If we are using a MUX with more select lines than function variables (e.g., 4-variable MUX for a 3-variable function), we can use the remaining select lines to generate the inputs.

Consider $F(A, B, C)$ and 8-to-1 MUX with select lines $C, B, A$.
*   $I_0$ connected to $F(0,0,0)$
*   $I_1$ connected to $F(1,0,0)$
*   ...
*   $I_7$ connected to $F(1,1,1)$

To implement $F(A, B, C) = \Sigma m(1, 3, 4, 7)$ using an 8-to-1 MUX:
*   $I_0$: $F(0,0,0)=0$, connect to 0.
*   $I_1$: $F(1,0,0)=1$, connect to 1.
*   $I_2$: $F(0,1,0)=0$, connect to 0.
*   $I_3$: $F(1,1,0)=1$, connect to 1.
*   $I_4$: $F(0,0,1)=1$, connect to 1.
*   $I_5$: $F(1,0,1)=0$, connect to 0.
*   $I_6$: $F(0,1,1)=0$, connect to 0.
*   $I_7$: $F(1,1,1)=1$, connect to 1.

This is simpler. When using a MUX with more inputs than variables, we are essentially extending the function's domain.

**Textbook Reference:**
*   **Roth C.H. Fundamentals of Logic Design:** Chapter 5 "Combinational Logic Synthesis" and Chapter 6 "Combinational Logic Design Using MSI Circuits" covers MUX and DEMUX applications in detail. The method of mapping Boolean functions to MUX inputs is explained clearly. The text emphasizes using K-maps to determine the logic required for each MUX input when the number of variables is less than the number of select lines.

### Using 74150 as a Universal Logic Gate
A single 74150 can implement any Boolean function of up to 4 variables. This is because it has 16 data inputs, corresponding to the 16 minterms of a 4-variable function. By appropriately connecting the 4 select lines to the 4 variables ($A, B, C, D$) and connecting the 16 data inputs to logic 0 or 1, any 4-variable Boolean function can be realized.

### Practice Question 1:
Implement the Boolean function $F(A, B, C) = A\overline{B} + \overline{A}BC$ using a 74150 (16-to-1 MUX).

**Solution:**
1.  **Simplify the function:** $F(A, B, C) = A\overline{B} + \overline{A}BC$.
2.  **Convert to SOP form (optional but helpful):**
    Using a K-map for 3 variables, or by algebraic manipulation:
    $F = A\overline{B}(C+\overline{C}) + \overline{A}BC$
    $F = AC\overline{B} + \overline{A}CB + \overline{A}\overline{B}C$ (This is missing a term)

    Let's use a K-map for $F(A, B, C)$:
    | $C$ | $B$ | $A$ | $F$ |
    | :-- | :-- | :-- | :-- |
    | 0   | 0   | 0   | 0   | ($A\overline{B}$)
    | 0   | 0   | 1   | 1   | ($A\overline{B}$)
    | 0   | 1   | 0   | 0   |
    | 0   | 1   | 1   | 0   |
    | 1   | 0   | 0   | 1   | ($\overline{A}BC$)
    | 1   | 0   | 1   | 1   | ($A\overline{B}$)
    | 1   | 1   | 0   | 0   |
    | 1   | 1   | 1   | 1   | ($\overline{A}BC$)

    So, $F(A, B, C) = \Sigma m(1, 4, 5, 7)$.

3.  **Using 74150 (16-to-1 MUX) with select lines $D, C, B, A$ ($S_3=D, S_2=C, S_1=B, S_0=A$):**
    We need to determine the connection for each of the 16 inputs based on $F(A, B, C)$.
    *   $I_0$ (DCBA=0000): $F(0,0,0)=0$. Connect to 0.
    *   $I_1$ (DCBA=0001): $F(1,0,0)=1$. Connect to 1.
    *   $I_2$ (DCBA=0010): $F(0,1,0)=0$. Connect to 0.
    *   $I_3$ (DCBA=0011): $F(1,1,0)=0$. Connect to 0.
    *   $I_4$ (DCBA=0100): $F(0,0,1)=1$. Connect to 1.
    *   $I_5$ (DCBA=0101): $F(1,0,1)=1$. Connect to 1.
    *   $I_6$ (DCBA=0110): $F(0,1,1)=0$. Connect to 0.
    *   $I_7$ (DCBA=0111): $F(1,1,1)=1$. Connect to 1.
    *   $I_8$ (DCBA=1000): $F(0,0,0)=0$. Connect to 0.
    *   $I_9$ (DCBA=1001): $F(1,0,0)=1$. Connect to 1.
    *   $I_{10}$ (DCBA=1010): $F(0,1,0)=0$. Connect to 0.
    *   $I_{11}$ (DCBA=1011): $F(1,1,0)=0$. Connect to 0.
    *   $I_{12}$ (DCBA=1100): $F(0,0,1)=1$. Connect to 1.
    *   $I_{13}$ (DCBA=1101): $F(1,0,1)=1$. Connect to 1.
    *   $I_{14}$ (DCBA=1110): $F(0,1,1)=0$. Connect to 0.
    *   $I_{15}$ (DCBA=1111): $F(1,1,1)=1$. Connect to 1.

    **Connections:**
    *   Connect $C \to S_2, B \to S_1, A \to S_0$.
    *   Connect $D \to S_3$ (if using 4 variables). Or, if only using 3 variables, connect $S_3$ to 0.
    *   Connect data inputs $I_1, I_4, I_5, I_7, I_9, I_{12}, I_{13}, I_{15}$ to logic HIGH (1).
    *   Connect data inputs $I_0, I_2, I_3, I_6, I_8, I_{10}, I_{11}, I_{14}$ to logic LOW (0).
    *   Connect the enable pin $\bar{E}$ of the 74150 to LOW.

## Realization of Combinational Circuits using DEMUX

**Principle:** A DEMUX can be used to implement a Sum of Products (SOP) expression where the product terms correspond to the minterms selected by the select lines.

### Implementing a Boolean Function using a DEMUX

Let's consider implementing a Boolean function with $m$ variables, $F(A, B, C, ...)$. We will use a DEMUX with $m$ select lines.

1.  **Identify the number of variables:** Determine the number of input variables ($m$) for your Boolean function.
2.  **Select the appropriate DEMUX:** Choose a DEMUX with $m$ select lines. For example, to implement a 3-variable function ($A, B, C$), we need a DEMUX with 3 select lines. A 1-to-8 DEMUX or a 1-to-16 DEMUX (74154) can be used.
3.  **Assign select lines:** Connect the $m$ input variables to the $m$ select lines of the DEMUX. For a 74154, we can connect up to 4 variables (e.g., $D, C, B, A$) to the select lines $S_3, S_2, S_1, S_0$ respectively.
4.  **Generate the logic function:**
    *   Convert the Boolean function into a Sum of Products (SOP) form, specifically listing the minterms where the function is HIGH (1).
    *   For each minterm in the SOP expression, connect the corresponding output line of the DEMUX to logic HIGH (1) through a pull-up resistor or a buffer.
    *   All other output lines are connected to logic LOW (0).
    *   The single data input of the DEMUX is connected to logic HIGH (1).
    *   The DEMUX should be enabled.

**Important Note on 74154:** The 74154 has active-low outputs. This means that when an output is selected and enabled, it goes to LOW (0). When not selected, it is HIGH (1).
Therefore, to implement a function where $F=1$ for certain minterms, we need to use the *inversion* of the function. Or, we need to ensure that the logic HIGH for the function results in the DEMUX output being LOW.

Let's re-evaluate the connection for $F=1$ minterms with 74154:
*   If $F=1$ for minterm $m_i$, then the output $O_i$ of the 74154 should be LOW.
*   The input $D$ of the 74154 is usually connected to logic HIGH (1).
*   If $D=1$ and the select lines match $m_i$, the output $O_i$ will be LOW.
*   So, for $F=1$ at minterm $m_i$, we connect the corresponding output $O_i$ to logic LOW (0).
*   For $F=0$ at minterm $m_j$, the output $O_j$ should be HIGH (1). This is the default state for unselected outputs of the 74154.

This means the 74154 is naturally suited for implementing the *inverted* form of a function ($\bar{F}$), or we need to invert the output for each minterm where $F=1$.

**Implementing $F(A, B, C)$ using 74154 (4-to-16 DEMUX):**
*   Connect $C \to S_2, B \to S_1, A \to S_0$. Let $S_3$ be unused and connected to 0, or connect the second enable $\bar{G}_2$ to 0 and use $\bar{G}_1$ as the enable. To implement a 3-variable function, we would ideally use a 1-to-8 DEMUX. If using 74154, we'd use $S_2, S_1, S_0$ and connect $S_3$ to 0.
*   Connect data input $D$ to logic HIGH (1).
*   Connect enable pins $\bar{G}_1, \bar{G}_2$ to logic LOW (0).

Let's implement $F(A, B, C) = \Sigma m(1, 4, 5, 7)$ (using the same example as for MUX).
*   The minterms where $F=1$ are $1, 4, 5, 7$.
*   For these minterms, the corresponding outputs of the 74154 must be LOW.
*   Output $O_1$ must be LOW.
*   Output $O_4$ must be LOW.
*   Output $O_5$ must be LOW.
*   Output $O_7$ must be LOW.
*   All other outputs ($O_0, O_2, O_3, O_6, O_8, O_9, O_{10}, O_{11}, O_{12}, O_{13}, O_{14}, O_{15}$) should be HIGH. This is the default behavior for unselected outputs.

So, to implement $F(A, B, C) = \Sigma m(1, 4, 5, 7)$ using 74154 with $C \to S_2, B \to S_1, A \to S_0$:
*   Connect $D$ to 1.
*   Connect $\bar{G}_1$ and $\bar{G}_2$ to 0.
*   Connect outputs $O_1, O_4, O_5, O_7$ to an OR gate or any logic that combines them (if we are combining multiple terms).
*   If we are directly implementing the function, we need to ensure that the output of the DEMUX structure represents $F$. Since the outputs are active low, we can invert the function first.

**Implementing $\overline{F(A, B, C)}$ using 74154:**
$\overline{F(A, B, C)} = \overline{\Sigma m(1, 4, 5, 7)} = \Sigma m(0, 2, 3, 6)$.
*   For minterms $0, 2, 3, 6$, the function is HIGH.
*   With the 74154, this means outputs $O_0, O_2, O_3, O_6$ should be LOW.
*   The other outputs will be HIGH.

**Practical Implementation with DEMUX for $F=1$:**
If we want to directly implement $F$, we need to invert the output of the DEMUX for the minterms where $F=1$. This requires adding inverters.

**Standard Method:** Implement $\overline{F}$ using the DEMUX, and then invert the output.
$F(A, B, C) = \Sigma m(1, 4, 5, 7)$
$\overline{F(A, B, C)} = \Sigma m(0, 2, 3, 6)$

Using 74154 with $C \to S_2, B \to S_1, A \to S_0$:
*   Connect $D$ to 1.
*   Connect $\bar{G}_1, \bar{G}_2$ to 0.
*   Outputs $O_0, O_2, O_3, O_6$ will be LOW.
*   All other outputs will be HIGH.

To get $F$, we need to OR the outputs that should be 1.
The desired output is 1 for minterms $1, 4, 5, 7$.
With the 74154, this means outputs $O_1, O_4, O_5, O_7$ should be LOW.
We can achieve this by connecting $O_1, O_4, O_5, O_7$ to an OR gate, which will give us the desired output. This is incorrect because the OR gate will output 0 if all inputs are 0.

Let's stick to the principle:
A DEMUX routes a single input to one of many outputs.
To implement $F(A, B, C) = \Sigma m(1, 4, 5, 7)$:
We use a 1-to-8 DEMUX.
Connect $C, B, A$ to the select lines.
Connect the input to logic HIGH (1).
The outputs are $O_0, O_1, \dots, O_7$.
We want $F=1$ for $m(1, 4, 5, 7)$. This means outputs $O_1, O_4, O_5, O_7$ should be HIGH.
All other outputs should be LOW.
This is precisely what a DEMUX does if its input is held HIGH.
So, for $F = \Sigma m(1, 4, 5, 7)$:
*   Connect the DEMUX input to 1.
*   Connect select lines $S_2, S_1, S_0$ to $C, B, A$.
*   The output $Y$ of the circuit is the OR of the selected output lines of the DEMUX.

This implies that the DEMUX is used to generate the minterms, and then these minterms are ORed together.

**Textbook Reference:**
*   **Roth C.H. Fundamentals of Logic Design:** Chapter 6 discusses the use of DEMUXs to generate minterms, which are then ORed to form a SOP expression. The 74154 is a common example of a 4-to-16 DEMUX.

### Practice Question 2:
Implement the Boolean function $F(A, B) = \overline{A} + B$ using a 74154 (4-to-16 DEMUX).

**Solution:**
1.  **Simplify the function:** $F(A, B) = \overline{A} + B$.
2.  **Convert to SOP form:**
    $F(A, B) = \overline{A}(B+\overline{B}) + B(A+\overline{A})$
    $F(A, B) = \overline{A}B + \overline{A}\overline{B} + AB + \overline{A}B$
    $F(A, B) = \overline{A}\overline{B} + \overline{A}B + AB$
    The minterms are $m_0, m_1, m_3$. (Error in calculation here, check K-map)

    Using a K-map for $F(A, B)$:
    | $B$ | $A$ | $F$ |
    | :-- | :-- | :-- |
    | 0   | 0   | 1   | ($\overline{A}$)
    | 0   | 1   | 0   |
    | 1   | 0   | 1   | ($\overline{A} + B$)
    | 1   | 1   | 1   | ($B$)

    So, $F(A, B) = \Sigma m(0, 2, 3)$.

3.  **Using 74154 (4-to-16 DEMUX):**
    *   We need 2 select lines for the 2 variables $A, B$. Let $S_1=B, S_0=A$. The 74154 has 4 select lines ($S_3, S_2, S_1, S_0$). We will use $S_1$ and $S_0$. Connect $S_3$ and $S_2$ to 0, or use enable pins.
    *   Connect the data input $D$ to logic HIGH (1).
    *   Connect the enable pins $\bar{G}_1, \bar{G}_2$ to logic LOW (0).
    *   The function is $F(A, B) = \Sigma m(0, 2, 3)$. This means for minterms 0, 2, and 3, the output of the DEMUX structure should be HIGH.
    *   With 74154, outputs are active LOW. So, for minterms 0, 2, 3, the output lines $O_0, O_2, O_3$ should be LOW.
    *   All other outputs will be HIGH.

    **To implement $F = \Sigma m(0, 2, 3)$ directly:**
    *   Connect $S_1=B, S_0=A$. Connect $S_3=0, S_2=0$.
    *   Connect $D=1$.
    *   Connect $\bar{G}_1, \bar{G}_2 = 0$.
    *   The output of the circuit is the OR of $O_0, O_2, O_3$.
    *   However, the default for unselected outputs is HIGH. For selected outputs, it's LOW.

    **Correct Approach with DEMUX for SOP:**
    A DEMUX with input $I$ and select lines $S$ routes $I$ to output $O_j$ if $S=j$.
    To implement $F = \Sigma m_i$:
    *   Connect the DEMUX input $I$ to logic HIGH (1).
    *   Connect the select lines to the function variables.
    *   Connect the output $O_i$ corresponding to each minterm $m_i$ of the function to an OR gate.
    *   The output of the OR gate is the implemented function $F$.

    For $F(A, B) = \Sigma m(0, 2, 3)$ using 74154:
    *   Use select lines $S_1=B, S_0=A$. Connect $S_3=0, S_2=0$.
    *   Connect $D=1$.
    *   Connect $\bar{G}_1, \bar{G}_2 = 0$.
    *   The outputs $O_0, O_2, O_3$ will be LOW. All others HIGH.
    *   We need the output of the circuit to be 1 for these minterms.
    *   This means we need to OR the outputs that are active LOW when they should be HIGH.

    **The standard way to implement $F = \Sigma m_i$ using DEMUX is to use a DEMUX and an OR gate:**
    *   Use a DEMUX with $m$ select lines for an $m$-variable function.
    *   Connect the $m$ variables to the select lines.
    *   Connect the DEMUX input to logic HIGH (1).
    *   Connect an OR gate to the output lines of the DEMUX corresponding to the minterms in the SOP expression.
    *   The output of the OR gate is the desired function.

    For $F(A, B) = \Sigma m(0, 2, 3)$ and 74154:
    *   Connect $S_1=B, S_0=A$. Connect $S_3=0, S_2=0$.
    *   Connect $D=1$.
    *   Connect $\bar{G}_1, \bar{G}_2 = 0$.
    *   The outputs $O_0, O_2, O_3$ will be LOW.
    *   We need the final output to be HIGH for these conditions.
    *   This implies we need to invert the outputs $O_0, O_2, O_3$ and then OR them. Or, use an OR gate on the *inverted* outputs from the DEMUX.

    **Correction for active-low outputs:**
    If the DEMUX has active-low outputs, to get a HIGH output for a selected minterm, the output line should be LOW.
    So, for $F(A, B) = \Sigma m(0, 2, 3)$:
    *   Connect $S_1=B, S_0=A$. Set $S_3=0, S_2=0$.
    *   Connect $D=1$.
    *   Connect $\bar{G}_1, \bar{G}_2 = 0$.
    *   This will make $O_0, O_2, O_3$ LOW.
    *   We need to combine these LOW outputs to produce a HIGH output when any of them is LOW. This requires a NOR gate or ORing the inverted outputs.
    *   Let's OR the inverted outputs: $\overline{O_0} + \overline{O_2} + \overline{O_3}$.
    *   This is equivalent to $\overline{O_0 \cdot O_2 \cdot O_3}$ by De Morgan's.

    **Final Plan for $F(A, B) = \Sigma m(0, 2, 3)$ using 74154:**
    1.  Connect $C \to S_2, B \to S_1, A \to S_0$. (If using 2 variables, we can select an 8-input DEMUX. With 74154, use $S_1, S_0$ and set $S_3, S_2$ to 0).
    2.  Connect the Data Input $D$ to logic HIGH (1).
    3.  Connect Enable inputs $\bar{G}_1$ and $\bar{G}_2$ to logic LOW (0).
    4.  The function $F$ is 1 for minterms 0, 2, 3.
    5.  With active-low outputs, $O_0, O_2, O_3$ will be LOW. All other outputs will be HIGH.
    6.  To get $F=1$ when $O_0$ or $O_2$ or $O_3$ is LOW, we need to invert these specific outputs and then OR them.
    7.  Alternatively, we can use the fact that DEMUX output is LOW for the selected minterm when input is HIGH. So, if we want $F$ to be HIGH for $m_0, m_2, m_3$, we need to take the OR of the inverted outputs $O_0, O_2, O_3$.
    8.  Thus, connect outputs $O_0, O_2, O_3$ to an OR gate after inverting each of them.

    **Simpler approach:** Implement $\overline{F(A, B)} = \Sigma m(1)$.
    *   Using the 74154, set select lines to $A, B$ (e.g., $S_0=A, S_1=B$). Set $S_2, S_3$ to 0.
    *   Connect $D=1$.
    *   Connect $\bar{G}_1, \bar{G}_2 = 0$.
    *   This will make output $O_1$ LOW. All others HIGH.
    *   If we want $\overline{F} = \Sigma m(1)$, then we need the output to be HIGH only for $m_1$.
    *   This means we need to OR the outputs that are HIGH by default, excluding the one that is LOW.
    *   This implies we need to invert $O_1$ and then OR it with all other outputs.

    Let's use the direct implementation of SOP with OR gate:
    *   For $F(A, B) = \Sigma m(0, 2, 3)$:
    *   Connect $S_1=B, S_0=A$. Set $S_3, S_2$ to 0.
    *   Connect $D=1$.
    *   Connect $\bar{G}_1, \bar{G}_2 = 0$.
    *   This makes $O_0, O_2, O_3$ LOW.
    *   We need to produce a HIGH output when any of these are LOW.
    *   This is achieved by inverting $O_0, O_2, O_3$ and ORing them.
    *   Circuit: $F = \overline{O_0} + \overline{O_2} + \overline{O_3}$.

## Practical Considerations and Setup

*   **Power Supply:** Ensure correct voltage (typically 5V for TTL) is supplied to the ICs.
*   **Connections:** Double-check all wiring on the breadboard. Loose connections are a common source of errors.
*   **Ground and Vcc:** Connect Vcc to pin 14 and GND to pin 7 for most 74xx series ICs (verify pinout for specific ICs).
*   **Enable Pins:** Ensure enable pins are correctly configured (LOW for active-low).
*   **Input Signals:** Use DIP switches or logic level generators for input signals.
*   **Output Observation:** Use LEDs with current-limiting resistors or a logic analyzer/oscilloscope to observe the output.
*   **Pull-up/Pull-down Resistors:** While not always strictly necessary for logic inputs, they can help stabilize inputs that are left floating. For the 74150 output, if not connected to another logic gate directly, a pull-up resistor might be needed if you're observing it with a voltmeter. However, for 74154 outputs, they are active-low, so they are HIGH when not selected.

## Verilog HDL Synthesis (Brief Mention)

While this module focuses on hardware IC implementation, it's important to note that these combinational circuits can be synthesized from hardware description languages (HDLs) like Verilog.

*   **MUX Implementation in Verilog:**
    ```verilog
    module my_mux (
        input [15:0] data;
        input [3:0] select;
        output reg out;

        always @(*) begin
            out = data[select]; // Direct assignment for MUX
        end
    endmodule
    ```
    Or using a case statement for better readability:
    ```verilog
    module my_mux (
        input [15:0] data;
        input [3:0] select;
        output reg out;

        always @(*) begin
            case (select)
                4'b0000: out = data[0];
                4'b0001: out = data[1];
                // ... and so on for all 16 inputs
                4'b1111: out = data[15];
                default: out = 1'b0; // or some default value
            endcase
        end
    endmodule
    ```
*   **DEMUX Implementation in Verilog:**
    A DEMUX distributes a single input to multiple outputs based on select lines.
    ```verilog
    module my_demux (
        input in;
        input [3:0] select;
        output reg [15:0] out; // 16 outputs

        always @(*) begin
            out = 16'b0; // Initialize all outputs to 0
            if (in == 1) begin // Assuming active high input
                out[select] = 1; // Route input to selected output
            end
        end
    endmodule
    ```
    For active-low outputs and active-low enables, the Verilog would reflect that.

**Textbook Reference:**
*   **Verilog HDL Synthesis: A Practical Primer by J. Bhasker** and **Verilog HDL: A guide to digital design and synthesis by Palnitkar S.** provide comprehensive details on writing Verilog code for various digital circuits, including MUX and DEMUX. They cover synthesis aspects, where HDL code is translated into logic gates and optimized for implementation on FPGAs or ASICs.

## Course Outcomes Alignment

*   **CO1: Design and demonstrate the functioning of various combinational and sequential circuits using ICs (Knowledge Level: K3).**
    *   This module directly addresses this outcome by having students design and practically demonstrate combinational circuits (Boolean functions) using the 74150 (MUX) and 74154 (DEMUX) ICs. The lab work will involve building and testing these circuits.
*   **CO2: Apply an industry compatible hardware description language to implement digital circuits (Knowledge Level: K3).**
    *   While the primary focus is on IC realization, the mention of Verilog implementation connects to this outcome by showing how the same logic can be described in an HDL. This provides context for how these fundamental circuits are handled in modern digital design flows.
*   **CO3: Implement digital circuits on FPGA boards and connect external hardware to the boards (Knowledge Level: K3).**
    *   The MUX and DEMUX ICs are fundamental building blocks that are also realized within FPGAs. Understanding their IC-level implementation provides a strong foundation for understanding how these functions are implemented at the hardware level on an FPGA.
*   **CO4: Function effectively as an individual and in a team to accomplish the given task. (Knowledge Level: K2).**
    *   The laboratory exercises in this module will require students to work individually or in teams to successfully design, build, and test the circuits, fostering teamwork and practical problem-solving skills.

## Important Points to Remember

*   **MUX:** Data selector. Selects one of many inputs to one output.
*   **DEMUX:** Data distributor. Routes one input to one of many outputs.
*   **74150:** 16-to-1 MUX. Useful for functions of up to 4 variables.
*   **74154:** 4-to-16 DEMUX. Useful for generating minterms or implementing functions by combining outputs.
*   **Active-Low Outputs:** The 74154 has active-low outputs, meaning the selected output is LOW (0) when enabled, and unselected outputs are HIGH (1).
*   **Enabling:** Ensure enable pins are correctly connected for the ICs to function.
*   **Mapping Functions:** Carefully map Boolean functions to MUX inputs or DEMUX outputs based on minterms.
*   **Variable Count:** The number of select lines dictates the maximum number of variables that can be directly controlled.

---
This concludes the study notes for Module 9. Ensure you practice the examples and questions to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
