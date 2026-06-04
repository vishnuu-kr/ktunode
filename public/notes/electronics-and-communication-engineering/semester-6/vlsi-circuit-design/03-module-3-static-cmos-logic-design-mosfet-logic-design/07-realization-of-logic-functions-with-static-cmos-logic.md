---
title: "Realization of logic functions with static CMOS logic"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 3: Static CMOS Logic Design : MOSFET Logic Design "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefcf"
status: "completed"
scrapedAt: "2026-05-23T18:03:45.526Z"
---
# VLSI CIRCUIT DESIGN - Module 3: Static CMOS Logic Design - MOSFET Logic Design

## Topic: Realization of Logic Functions with Static CMOS Logic

---

### Learning Outcomes Covered:

*   **Understanding Static CMOS Logic:** Grasp the fundamental principles of how logic functions are implemented using static CMOS technology.
*   **NMOS and PMOS Network Construction:** Learn to construct the pull-up (PMOS) and pull-down (NMOS) networks for a given logic function.
*   **Design Principles and Rules:** Understand the design rules and considerations for creating robust and efficient static CMOS logic gates.
*   **Analysis of Static CMOS Circuits:** Be able to analyze the behavior and characteristics of static CMOS logic circuits.
*   **Layout Considerations:** Gain insight into the layout aspects of static CMOS logic gates.

---

### Course Outcomes Alignment:

*   **CO3: Design, analyse and create the layout of static CMOS logic circuits adhering to design rules and specifications.** This entire topic directly supports CO3 by teaching the core principles of designing, analyzing, and ultimately leading to the layout of static CMOS logic circuits.

---

### 1. Introduction to Static CMOS Logic

Static CMOS logic is a digital logic family that utilizes complementary pairs of n-channel Metal-Oxide-Semiconductor Field-Effect Transistors (NMOSFETs) and p-channel Metal-Oxide-Semiconductor Field-Effect Transistors (PMOSFETs) to implement logic functions.

*   **Key Characteristics:**
    *   **DC Noise Immunity:** Excellent DC noise margins due to the complementary nature of the pull-up and pull-down networks.
    *   **Low Static Power Consumption:** Ideally, no static power is consumed when the output is stable (either VDD or GND) as there is no direct path from VDD to GND.
    *   **Rail-to-Rail Output Swing:** The output voltage can swing between VDD (logic '1') and GND (logic '0').
    *   **Ratioed Logic:** Unlike NMOS-only or PMOS-only logic, static CMOS is not ratioed, meaning the performance is less dependent on the relative sizing of transistors.
    *   **Simplicity and Versatility:** Can implement any Boolean logic function.

*   **Fundamental Structure:**
    A static CMOS logic gate consists of two complementary networks:
    1.  **Pull-up Network (PUN):** Implemented using PMOS transistors. This network connects the output to the VDD supply.
    2.  **Pull-down Network (PDN):** Implemented using NMOS transistors. This network connects the output to the GND supply.

    *   **Complementary Property:** The PUN and PDN are designed such that they are always mutually exclusive. When the PUN is conducting (output is VDD), the PDN is non-conducting (output is isolated from GND), and vice-versa. This ensures that there is no direct path from VDD to GND during the transition phase, minimizing shoot-through current.

*   **Textbook Reference:**
    *   **Kang, Leblebici, Kim:** Chapter 4, "CMOS Inverter and Basic Gates" and Chapter 5, "Combinational Logic Design." This section provides the foundational understanding of CMOS inverter operation and its extension to basic gates.
    *   **Rabaey:** Chapter 3, "CMOS Logic." Rabaey's book offers a comprehensive overview of CMOS logic families and their design.

---

### 2. Realizing Logic Functions with Static CMOS

The core idea is to map the logic function into a structure with complementary pull-up and pull-down networks.

#### 2.1. The NMOS Pull-down Network (PDN)

*   **Rule:** The PDN implements the **sum of products** (SOP) form of the function.
*   **Structure:**
    *   **Series Connection:** Represents the **AND** operation. If transistors are in series, they must *all* conduct to pass the signal to ground.
    *   **Parallel Connection:** Represents the **OR** operation. If transistors are in parallel, *any one* of them conducting will pass the signal to ground.
*   **Derivation:** To derive the PDN for a function $F$, we consider the condition when $F = 0$. The PDN connects the output to ground when $F=0$.
    *   If $F = A \cdot B$, the PDN will have transistors for A and B in series.
    *   If $F = A + B$, the PDN will have transistors for A and B in parallel.

*   **Example: NAND Gate**
    *   Function: $F = (A \cdot B)'$
    *   PDN condition for $F=0$: $(A \cdot B)$ must be active.
    *   This means both A and B must be '1' to pull the output down.
    *   So, transistors controlled by A and B are in series.
    *   **PDN Structure:** Two NMOS transistors in series, controlled by inputs A and B.

*   **Example: AND Gate**
    *   Function: $F = A \cdot B$
    *   PDN condition for $F=0$: $A \cdot B$ must be '0'. This means either A is '0' OR B is '0'.
    *   So, transistors controlled by A and B are in parallel.
    *   **PDN Structure:** Two NMOS transistors in parallel, controlled by inputs A and B.

*   **Example: 3-input AND Gate**
    *   Function: $F = A \cdot B \cdot C$
    *   PDN condition for $F=0$: $A \cdot B \cdot C$ must be '0'. This means A=0 OR B=0 OR C=0.
    *   **PDN Structure:** Three NMOS transistors in series, controlled by inputs A, B, and C.

*   **Example: 2-input XOR Gate**
    *   Function: $F = A \oplus B = A\bar{B} + \bar{A}B$
    *   PDN condition for $F=0$: $A\bar{B} + \bar{A}B = 0$. This implies $(A\bar{B} = 0)$ AND $(\bar{A}B = 0)$.
    *   For $A\bar{B}=0$, we need A=0 OR B=1. This is implemented by an NMOS controlled by A in series with an NMOS controlled by $\bar{B}$.
    *   For $\bar{A}B=0$, we need A=1 OR B=0. This is implemented by an NMOS controlled by $\bar{A}$ in series with an NMOS controlled by B.
    *   These two branches are in parallel.
    *   **PDN Structure:** Two parallel branches. Branch 1: NMOS(A) in series with NMOS($\bar{B}$). Branch 2: NMOS($\bar{A}$) in series with NMOS(B).

#### 2.2. The PMOS Pull-up Network (PUN)

*   **Rule:** The PUN implements the **product of sums** (POS) form of the function.
*   **Structure:**
    *   **Parallel Connection:** Represents the **AND** operation. If transistors are in parallel, they must *all* conduct to pass the VDD supply.
    *   **Series Connection:** Represents the **OR** operation. If transistors are in series, *any one* of them conducting will pass the VDD supply.
*   **Derivation:** To derive the PUN for a function $F$, we consider the condition when $F = 1$. The PUN connects the output to VDD when $F=1$.
    *   If $F = (A + B)'$, the PUN will have transistors for A and B in parallel.
    *   If $F = (A \cdot B)'$, the PUN will have transistors for A and B in series.

*   **Important Note:** The PUN is the dual of the PDN. If the PDN implements a function $G$, the PUN implements $G'$. Alternatively, if PDN is derived from $F=0$, the PUN is derived from $F=1$ (which is $\bar{F}$ if we think of the output as $F$). To get the PUN for $F$, we take the dual of the PDN. For every series connection in the PDN, there's a parallel connection in the PUN. For every parallel connection in the PDN, there's a series connection in the PUN. The input controls are swapped (e.g., A controls a PMOS, $\bar{A}$ controls an NMOS).

*   **Example: NAND Gate**
    *   Function: $F = (A \cdot B)'$
    *   PUN condition for $F=1$: $(A \cdot B)' = 1$. This means $A \cdot B = 0$. So, A=0 OR B=0.
    *   So, PMOS transistors controlled by A and B are in parallel.
    *   **PUN Structure:** Two PMOS transistors in parallel, controlled by inputs A and B.

*   **Example: AND Gate**
    *   Function: $F = A \cdot B$
    *   PUN condition for $F=1$: $A \cdot B = 1$. This means A=1 AND B=1.
    *   So, PMOS transistors controlled by A and B are in series.
    *   **PUN Structure:** Two PMOS transistors in series, controlled by inputs A and B.

*   **Example: 3-input AND Gate**
    *   Function: $F = A \cdot B \cdot C$
    *   PUN condition for $F=1$: $A \cdot B \cdot C = 1$. This means A=1 AND B=1 AND C=1.
    *   **PUN Structure:** Three PMOS transistors in series, controlled by inputs A, B, and C.

*   **Example: 2-input XOR Gate**
    *   Function: $F = A \oplus B = A\bar{B} + \bar{A}B$
    *   PUN condition for $F=1$: $A\bar{B} + \bar{A}B = 1$. This implies $(A\bar{B}=1)$ OR $(\bar{A}B=1)$.
    *   For $A\bar{B}=1$, we need A=1 AND B=0. This is implemented by a PMOS controlled by $\bar{A}$ in series with a PMOS controlled by B.
    *   For $\bar{A}B=1$, we need A=0 AND B=1. This is implemented by a PMOS controlled by A in series with a PMOS controlled by $\bar{B}$.
    *   These two branches are in parallel.
    *   **PUN Structure:** Two parallel branches. Branch 1: PMOS($\bar{A}$) in series with PMOS(B). Branch 2: PMOS(A) in series with PMOS($\bar{B}$).

#### 2.3. Constructing the Complementary Networks (The Duality Principle)

The PUN can be derived directly from the PDN by applying the following rules:
1.  Replace every series connection in the PDN with a parallel connection in the PUN.
2.  Replace every parallel connection in the PDN with a series connection in the PUN.
3.  Replace every NMOS transistor in the PDN with a PMOS transistor in the PUN.
4.  Replace every PMOS transistor in the PDN with an NMOS transistor in the PUN.
5.  If a transistor in the PDN is controlled by an input 'A', the corresponding transistor in the PUN is controlled by 'A'.
6.  If a transistor in the PDN is controlled by an inverted input '$\bar{A}$', the corresponding transistor in the PUN is controlled by '$\bar{A}$'. (This is implicit in the device type).

*   **Textbook Reference:**
    *   **Wolf:** Chapter 4, "Combinational Logic Circuits." Wolf discusses the mapping of Boolean functions to CMOS structures.
    *   **Smith:** Chapter 3, "Basic CMOS Gates." Smith provides a detailed walkthrough of constructing PUN and PDN for various logic functions.

#### 2.4. Implementation of Basic Logic Gates

*   **Inverter:**
    *   Function: $F = A'$
    *   PDN: NMOS controlled by A (connects output to GND when A=1).
    *   PUN: PMOS controlled by A (connects output to VDD when A=0).
    *   Structure: One NMOS in series with GND, one PMOS in series with VDD. Both controlled by A.

*   **NAND Gate (2-input):**
    *   Function: $F = (A \cdot B)'$
    *   PDN: NMOS(A) in series with NMOS(B).
    *   PUN: PMOS(A) in parallel with PMOS(B).

*   **NOR Gate (2-input):**
    *   Function: $F = (A + B)'$
    *   PDN: NMOS(A) in parallel with NMOS(B).
    *   PUN: PMOS(A) in series with PMOS(B).

*   **AND Gate (2-input):**
    *   Function: $F = A \cdot B$
    *   PDN: NMOS(A) in parallel with NMOS(B).
    *   PUN: PMOS(A) in series with PMOS(B).
    *   *Note:* This structure has a "three-state" output when inputs are not 0 or 1, which is undesirable. For better performance, a transmission gate or a buffered gate is preferred. However, for simple realization of the function, this is the structure. A more robust AND gate would be $( (A \cdot B)' )''$ which uses a NAND gate followed by an inverter.

*   **OR Gate (2-input):**
    *   Function: $F = A + B$
    *   PDN: NMOS(A) in series with NMOS(B).
    *   PUN: PMOS(A) in parallel with PMOS(B).
    *   *Note:* Similar to AND, this direct implementation has issues. A robust OR gate is $((A' + B')')'$ using a NOR gate followed by an inverter.

*   **XOR Gate (2-input):**
    *   Function: $F = A \oplus B = A\bar{B} + \bar{A}B$
    *   PDN: (NMOS(A) in series with NMOS($\bar{B}$)) in parallel with (NMOS($\bar{A}$) in series with NMOS(B)).
    *   PUN: (PMOS($\bar{A}$) in series with PMOS(B)) in parallel with (PMOS(A) in series with PMOS($\bar{B}$)).
    *   *Note:* XOR gates are complex and have many transistors.

*   **Textbook Reference:**
    *   **Kang, Leblebici, Kim:** Chapter 5, "Combinational Logic Design." Provides detailed schematics and transistor arrangements for various gates.
    *   **Weste, Eshraghian:** Chapter 2, "CMOS Logic Gates." Explains the fundamental gates and their implementations.

#### 2.5. CMOS Complex Gate (Multi-input, Multi-output)

*   **Definition:** A complex gate is a CMOS gate that implements a function not representable by a single simple gate (NAND, NOR, AND, OR). It can have multiple inputs and/or multiple outputs.
*   **Structure:** The same principle of complementary PUN and PDN applies.
*   **Derivation for PDN:**
    1.  Express the function in SOP form: $F = \sum_{i} M_i$, where $M_i$ are minterms.
    2.  For each minterm $M_i$, construct a series branch of NMOS transistors. If the variable in the minterm is $X$, use NMOS(X). If it's $\bar{X}$, use NMOS($\bar{X}$).
    3.  Connect these series branches in parallel.
*   **Derivation for PUN:**
    1.  Take the dual of the PDN structure.
    2.  Replace series with parallel and parallel with series.
    3.  Replace NMOS with PMOS.
    4.  If PDN uses NMOS(X), PUN uses PMOS(X). If PDN uses NMOS($\bar{X}$), PUN uses PMOS($\bar{X}$).

*   **Example: $F = \overline{(A \cdot B) + (C \cdot D)}$**
    *   PDN: $F=0$ when $(A \cdot B) + (C \cdot D) = 1$.
        *   $(A \cdot B)$ is represented by NMOS(A) series NMOS(B).
        *   $(C \cdot D)$ is represented by NMOS(C) series NMOS(D).
        *   These two product terms are ORed, so the branches are in parallel.
        *   **PDN:** (NMOS(A) series NMOS(B)) || (NMOS(C) series NMOS(D)).
    *   PUN: $F=1$ when $(A \cdot B) + (C \cdot D) = 0$.
        *   This means $(A \cdot B) = 0$ AND $(C \cdot D) = 0$.
        *   $(A \cdot B) = 0$ requires A=0 OR B=0. This is PMOS(A) parallel PMOS(B).
        *   $(C \cdot D) = 0$ requires C=0 OR D=0. This is PMOS(C) parallel PMOS(D).
        *   These two OR terms are ANDed, so the branches are in series.
        *   **PUN:** (PMOS(A) || PMOS(B)) series (PMOS(C) || PMOS(D)).

*   **Example: $F = A\bar{B} + \bar{A}C$**
    *   PDN: $F=0$ when $A\bar{B} + \bar{A}C = 0$. This means $(A\bar{B}=0)$ AND $(\bar{A}C=0)$.
        *   For $A\bar{B}=0$, we need A=0 OR B=1. This is NMOS(A) series NMOS($\bar{B}$).
        *   For $\bar{A}C=0$, we need A=1 OR C=0. This is NMOS($\bar{A}$) series NMOS(C).
        *   These two terms are ANDed, so the branches are in series.
        *   **PDN:** (NMOS(A) series NMOS($\bar{B}$)) series (NMOS($\bar{A}$) series NMOS(C)).
    *   PUN: $F=1$ when $A\bar{B} + \bar{A}C = 1$.
        *   This means $(A\bar{B}=1)$ OR $(\bar{A}C=1)$.
        *   For $A\bar{B}=1$, we need A=1 AND B=0. This is PMOS($\bar{A}$) series PMOS(B).
        *   For $\bar{A}C=1$, we need A=0 AND C=1. This is PMOS(A) series PMOS($\bar{C}$).
        *   These two terms are ORed, so the branches are in parallel.
        *   **PUN:** (PMOS($\bar{A}$) series PMOS(B)) || (PMOS(A) series PMOS($\bar{C}$)).

*   **Important Consideration for Complex Gates:**
    *   **Multiple output branches:** A complex gate can have multiple parallel branches in the PDN and PUN.
    *   **Transistor sizing:** Proper sizing is crucial for performance. The total conductance of each path to VDD or GND should be considered. For faster switching, the parallel combination of transistors should have a conductance similar to the series combination. In static CMOS, the PUN should have a PMOS network conductance equal to the NMOS network conductance for optimal speed. This is often achieved by sizing transistors such that their $W/L$ ratios are adjusted accordingly. A common rule of thumb is that the PMOS transistors need to be wider than NMOS transistors for equivalent resistance. Specifically, PMOS transistors should be sized up by a factor of $\beta_n / \beta_p$, where $\beta = \mu C_{ox} (W/L)$. Since $\mu_p \approx 0.4 \mu_n$, PMOS devices need to be ~2.5 times wider.

*   **Textbook Reference:**
    *   **Kang, Leblebici, Kim:** Chapter 5, "Combinational Logic Design." Section on complex gates.
    *   **Rabaey:** Chapter 3, "CMOS Logic." Discusses compound gates and their advantages.

---

### 3. Design Principles and Considerations

#### 3.1. Minimizing Transistor Count and Gate Delay

*   **Logic Minimization:** Using Boolean algebra to simplify the logic function before translating it into transistor networks helps reduce the number of transistors and thus gate delay. Karnaugh maps (K-maps) or Quine-McCluskey algorithms can be used.
*   **Transistor Path Conductance:** For symmetric switching speed, the total ON-resistance of the pull-up network should ideally equal the total ON-resistance of the pull-down network. Since PMOS transistors have lower mobility than NMOS transistors, they must be made wider.
    *   For a given technology, the ratio of ON-resistances of a PMOS and an NMOS transistor of the same $W/L$ is approximately $R_{on,PMOS} / R_{on,NMOS} \approx \frac{1}{\mu_p (W/L)} / \frac{1}{\mu_n (W/L)} = \frac{\mu_n}{\mu_p}$.
    *   Given $\mu_p \approx 0.4 \mu_n$, $R_{on,PMOS} / R_{on,NMOS} \approx 2.5$.
    *   Therefore, to achieve equal conductance, a PMOS transistor should have its $W/L$ ratio approximately $2.5$ times that of an NMOS transistor of equivalent resistance.
*   **Worst-Case Path:** The critical path determines the gate delay. A gate with many transistors in series will have a higher delay than one with fewer. Parallel paths can be faster if any one path conducts.

#### 3.2. Ratioed Logic vs. Ratio-less Logic

*   **Ratioed Logic (e.g., NMOS-only):** Performance depends heavily on the $W/L$ ratio of transistors to ensure the output goes to the correct logic level. For example, in NMOS logic, the pull-up resistor is replaced by a depletion-mode NMOS. The $W/L$ ratio of the enhancement-mode NMOS (pull-down) to the depletion-mode NMOS (pull-up) is critical for defining the logic threshold voltage. This makes them susceptible to noise and slower.
*   **Ratio-less Logic (Static CMOS):** Static CMOS is considered ratio-less because the pull-up and pull-down networks are complementary. The output is always strongly driven to VDD or GND. This provides excellent noise margins and good speed without strict sizing requirements for logic level definition (though sizing is critical for *performance*).

#### 3.3. Power Dissipation in Static CMOS

*   **Static Power:** Theoretically zero, but in reality, there's a small leakage current when transistors are OFF. This is usually negligible compared to dynamic power.
*   **Dynamic Power:** Occurs during switching.
    *   **Charging/Discharging Load Capacitance ($C_L$):** $P_{dynamic} = C_L V_{DD}^2 f$, where $f$ is the switching frequency.
    *   **Short-Circuit Current:** Occurs during the transition when both PMOS and NMOS networks are momentarily conducting. This current flows from VDD to GND through the conducting transistors. The magnitude depends on the input transition time and transistor characteristics. This is generally much smaller than the dynamic power from charging/discharging load capacitance.

#### 3.4. Layout Considerations

*   **Stick Diagrams:** A graphical representation of the layout, showing the placement of active regions, diffusion, polysilicon gates, and metal interconnections.
*   **Minimum Feature Size (Lambda):** The design rules are often expressed in terms of $\lambda$, where $\lambda$ is half the minimum feature size (e.g., minimum width of a metal line or polysilicon line).
*   **Spacing Rules:**
    *   Minimum spacing between NMOS and PMOS transistors.
    *   Minimum spacing between diffusion regions.
    *   Minimum spacing between polysilicon lines.
    *   Minimum spacing between metal lines.
    *   Minimum spacing between active regions and well boundaries.
*   **Connection Rules:**
    *   Contact/via rules: Minimum size and spacing of contacts between metal layers and polysilicon/diffusion.
*   **Layout of Basic Gates (Example: Inverter)**
    *   **N-well process:** PMOS transistors are placed in an N-well, and NMOS transistors are placed in the p-substrate.
    *   **Layout:** Typically, the gate terminals (polysilicon) of the NMOS and PMOS are connected together to form the input. The source/drain regions of the NMOS are connected to GND and the output. The source/drain regions of the PMOS are connected to VDD and the output. The substrate/well contacts are also essential.
    *   **Symmetry:** A symmetrical layout is often preferred for better matching and reduced parasitic effects.
    *   **Transistor Sizing:** The width of the active regions (diffusion) and polysilicon gates are laid out according to the required $W/L$ ratios.
    *   **Routing:** Metal layers are used for VDD, GND, and the output connection.

*   **Textbook Reference:**
    *   **Sze:** Chapter 8, "Integrated-Circuit Fabrication Technology." Discusses process steps and design rules.
    *   **Wolf:** Chapter 7, "Layout and Design Rules." Crucial for understanding physical implementation.
    *   **Weste, Eshraghian:** Chapter 2, "CMOS Logic Gates" (Layout aspects) and Chapter 5, "Integrated Circuit Layout."

---

### 4. Analysis of Static CMOS Circuits

*   **Rise and Fall Times:**
    *   **Fall Time ($t_f$):** Time for the output to transition from $V_{DD}$ to $0.5 V_{DD}$. Primarily determined by the PDN (NMOS transistors) and the load capacitance.
    *   **Rise Time ($t_r$):** Time for the output to transition from $0.5 V_{DD}$ to $V_{DD}$. Primarily determined by the PUN (PMOS transistors) and the load capacitance.
    *   **Relationship:** Due to lower mobility of holes, PMOS transistors are less conductive than NMOS transistors of the same dimensions. Therefore, $t_r > t_f$.
    *   **Approximation:** $t_f \approx \frac{C_L R_{eq,n}}{1}$ and $t_r \approx \frac{C_L R_{eq,p}}{1}$, where $R_{eq,n}$ and $R_{eq,p}$ are the equivalent resistances of the PDN and PUN respectively.

*   **Propagation Delay ($t_p$):** The time taken for an input change to propagate to the output. It is typically defined as the average of the rise and fall delays: $t_p = (t_{PLH} + t_{PHL}) / 2$, where $t_{PLH}$ is the delay from Low-to-High transition and $t_{PHL}$ is the delay from High-to-Low transition.
    *   For an inverter with a load capacitance $C_L$: $t_{PLH} \approx \frac{C_L R_{eq,p}}{1}$ and $t_{PHL} \approx \frac{C_L R_{eq,n}}{1}$.
    *   The delays are influenced by the transistor sizing, the path resistance, and the load capacitance.

*   **Noise Margins:**
    *   **$NM_H$ (High Noise Margin):** The maximum noise voltage that can be added to the input when it is high (logic '1') without causing a transition at the output. $NM_H = V_{OH} - V_{IH}$. For static CMOS, $V_{OH} \approx V_{DD}$.
    *   **$NM_L$ (Low Noise Margin):** The maximum noise voltage that can be subtracted from the input when it is low (logic '0') without causing a transition at the output. $NM_L = V_{IL} - V_{OL}$. For static CMOS, $V_{OL} \approx 0$.
    *   Static CMOS exhibits excellent and symmetrical noise margins ($NM_H \approx NM_L \approx 0.4 V_{DD}$ to $0.5 V_{DD}$). This is a major advantage.

*   **Textbook Reference:**
    *   **Kang, Leblebici, Kim:** Chapter 4, "CMOS Inverter and Basic Gates" (Delay analysis) and Chapter 5, "Combinational Logic Design" (Noise Margins).
    *   **Razavi:** Chapter 1, "Introduction to MOS Transistor Theory" (Provides underlying transistor models for analysis) and Chapter 9, "Basic Analog Circuits" (analog perspective on noise and gain).

---

### 5. Examples and Practice Questions

**Question 1:**
Design a static CMOS circuit for the function $F = \overline{A(B+C)}$. Draw the transistor-level schematic showing both the pull-up (PMOS) and pull-down (NMOS) networks.

**Answer 1:**
*   **Function:** $F = \overline{A(B+C)} = \overline{AB + AC}$
*   **PDN:** $F=0$ when $A(B+C)=1$. This means $A=1$ AND $(B+C)=1$.
    *   $(B+C)=1$ means $B=1$ OR $C=1$. This is implemented by NMOS(B) in parallel with NMOS(C).
    *   $A=1$ needs to AND this with the parallel combination. This is done by putting NMOS(A) in series with the parallel combination.
    *   **PDN:** NMOS(A) in series with (NMOS(B) || NMOS(C)).
*   **PUN:** $F=1$ when $A(B+C)=0$. This means $A=0$ OR $(B+C)=0$.
    *   $(B+C)=0$ means $B=0$ AND $C=0$. This is implemented by PMOS(B) in series with PMOS(C).
    *   $A=0$ needs to OR this with the series combination. This is done by putting PMOS(A) in parallel with the series combination.
    *   **PUN:** PMOS(A) in parallel with (PMOS(B) || PMOS(C)).

**Schematic:**

```
       VDD
        |
       --- PMOS(A) ---
      /             \
     /               \
   --- PMOS(B) ---   --- PMOS(C) ---
   |               |   |               |
   |               |   |               |
   \               /   \               /
    \             /     \             /
     |           |       |           |
     |           |       |           |
     +-----------+-------+-----------+---- Output F
     |           |       |           |
     |           |       |           |
   ----- NMOS(A) -----   ----- NMOS(B) -----
   |                   |   |                   |
   |                   |   |                   |
   ----- NMOS(C) -----   -----------------------
   |                   |
   |                   |
   ---------------------
        |
       GND
```
*(Self-correction: The diagram above shows the connection of PMOS(B) and PMOS(C) to the output, which is correct. The NMOS(A) is in series with the parallel combination of NMOS(B) and NMOS(C). For PUN, PMOS(A) is in parallel with the series combination of PMOS(B) and PMOS(C). Let's redraw for clarity)*

**Corrected Schematic:**

```
       VDD
        |
       +- PMOS(A) -+
       |           |
      +- PMOS(B) -+ +- PMOS(C) -+
      |           | |           |
      +-----------+ +-----------+---- Output F
      |           | |           |
      |           | |           |
   +-- NMOS(A) --+ +-- NMOS(B) --+
   |             | |             |
   |             | |             |
   +-- NMOS(C) --+ +-------------+
   |             |
   |             |
   +-------------+---- GND
```

**Question 2:**
Consider a static CMOS gate implementing the function $F = (A+B)(C+D)$.
a) Derive the pull-down network (PDN).
b) Derive the pull-up network (PUN).
c) What is the minimum number of transistors required to implement this function using static CMOS?

**Answer 2:**
*   **Function:** $F = (A+B)(C+D)$
*   **a) PDN:** $F=0$ when $(A+B)(C+D) = 0$. This means $(A+B)=0$ AND $(C+D)=0$.
    *   $(A+B)=0$ implies $A=0$ AND $B=0$. This is implemented by NMOS(A) in series with NMOS(B).
    *   $(C+D)=0$ implies $C=0$ AND $D=0$. This is implemented by NMOS(C) in series with NMOS(D).
    *   Since these two conditions must both be true (ANDed), these two series branches are in parallel.
    *   **PDN:** (NMOS(A) series NMOS(B)) || (NMOS(C) series NMOS(D)).
*   **b) PUN:** Take the dual of the PDN.
    *   Series connections become parallel, parallel become series. NMOS become PMOS.
    *   **PUN:** (PMOS(A) || PMOS(B)) series (PMOS(C) || PMOS(D)).
*   **c) Minimum Transistors:**
    *   PDN: 2 transistors in the first branch + 2 transistors in the second branch = 4 NMOS transistors.
    *   PUN: 2 transistors in the first branch + 2 transistors in the second branch = 4 PMOS transistors.
    *   Total = 4 NMOS + 4 PMOS = 8 transistors.

**Question 3:**
Explain why static CMOS logic has better noise margins compared to NMOS-only logic.

**Answer 3:**
Static CMOS logic utilizes complementary pull-up (PMOS) and pull-down (NMOS) networks. When the input is high, the NMOS network turns ON, connecting the output to GND, while the PMOS network turns OFF, isolating the output from VDD. This creates a strong low output. Conversely, when the input is low, the PMOS network turns ON, connecting the output to VDD, while the NMOS network turns OFF, isolating the output from GND, creating a strong high output. This push-pull action ensures that the output voltage is very close to VDD or GND, providing excellent DC noise margins.

In contrast, NMOS-only logic typically uses a resistive load (often a depletion-mode NMOS). When the NMOS transistors in the pull-down network are ON, they have to fight against the pull-up resistance. This results in a higher logic '0' voltage ($V_{OL}$) and a lower logic '1' voltage ($V_{OH}$) compared to static CMOS. The transition region is wider, leading to poorer noise margins.

---

### 6. Important Points to Remember

*   **Complementary Networks:** Static CMOS relies on perfectly complementary pull-up (PMOS) and pull-down (NMOS) networks.
*   **No Static Power:** Ideally, static CMOS consumes no static power.
*   **Rail-to-Rail Output:** Output swings from VDD to GND.
*   **Dual Networks:** The PUN is the dual of the PDN.
*   **PDN for SOP, PUN for POS:** Or, PDN conducts when $F=0$, PUN conducts when $F=1$.
*   **Transistor Sizing for Performance:** PMOS transistors are typically wider than NMOS transistors by a factor of ~2.5 for matched performance.
*   **Low Transistor Count Preferred:** Minimize transistors for better speed and area.
*   **Excellent Noise Margins:** A key advantage of static CMOS.
*   **Short-circuit current:** Exists but is generally small compared to dynamic power.
*   **Layout Rules are Critical:** Adherence to design rules ensures manufacturability and reliable operation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References:

*   **CMOS Digital Integrated Circuits- Analysis & Design** by Sung-Mo Kang, Yusuf Leblebici, Chulwoo Kim (Mc Graw Hill, 4/e, Indian Edition, 2016) - **Primary Text**
*   **VLSI Technology** by S.M. SZE (Mc Graw Hill, 2/e, Indian Edition, 2017) - For fabrication and layout aspects.
*   **Modern VLSI Design** by Wayne Wolf (Prentice Hall; 4th edition, 4/e, 2008) - For design methodology and CMOS logic.
*   **Digital Integrated Circuits** by Jan M. Rabaey (Pearson, 2/e, 2016) - Comprehensive coverage of CMOS logic.
*   **Principles of CMOS VLSI Design -A Systems Perspective** by Neil H. E. Weste, Kamran Eshraghian (Pearson, 2/e, 2007) - Good for fundamental gates and layout.

---