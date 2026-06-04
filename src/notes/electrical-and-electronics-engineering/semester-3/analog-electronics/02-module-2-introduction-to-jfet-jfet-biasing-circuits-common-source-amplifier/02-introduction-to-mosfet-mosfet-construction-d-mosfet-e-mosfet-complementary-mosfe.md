---
title: "Introduction to MOSFET  -MOSFET construction -D-MOSFET, E-MOSFET-Complementary MOSFET"
subject: "ANALOG ELECTRONICS"
module: "Module 2: Introduction to JFET  – JFET biasing circuits – Common Source Amplifier"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b5e"
status: "completed"
scrapedAt: "2026-05-23T16:10:52.413Z"
---
# ANALOG ELECTRONICS - Module 2: Introduction to JFET - Introduction to MOSFET

## Topic: Introduction to MOSFET - MOSFET Construction - D-MOSFET, E-MOSFET - Complementary MOSFET

---

### **1. Introduction to MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor)**

*   **Definition:** MOSFETs are voltage-controlled semiconductor devices that use an electric field to control the conductivity of a channel. They are the cornerstone of modern integrated circuits due to their high input impedance, low power consumption, and scalability.
*   **Comparison with JFET:** While both JFETs and MOSFETs are field-effect transistors, the primary difference lies in their gate structure. In MOSFETs, the gate is insulated from the channel by a thin layer of silicon dioxide ($\text{SiO}_2$), leading to extremely high input impedance (typically $10^{10} - 10^{15} \Omega$). JFETs, on the other hand, use a reverse-biased p-n junction to control the channel.
*   **Advantages of MOSFETs:**
    *   Extremely high input impedance.
    *   Lower power dissipation compared to BJTs.
    *   Easier to fabricate in integrated circuits (ICs).
    *   Can operate in both enhancement and depletion modes.
    *   Excellent for digital switching applications.
*   **Disadvantages of MOSFETs:**
    *   Sensitive to electrostatic discharge (ESD) due to the thin gate insulator.
    *   Can exhibit higher on-resistance in some applications compared to BJTs.
    *   Transconductance ($g_m$) is generally lower than that of BJTs.

---

### **2. MOSFET Construction**

The construction of a MOSFET involves a semiconductor substrate and the formation of a channel between two highly doped regions (source and drain). A metal gate electrode is placed over this channel, insulated by a thin layer of silicon dioxide ($\text{SiO}_2$).

**Key Components:**

*   **Substrate (Body):** The semiconductor material (typically silicon) upon which the MOSFET is built. It is usually doped to be of the opposite type to the majority carriers in the channel.
*   **Source (S):** One terminal of the channel, where charge carriers enter the channel.
*   **Drain (D):** The other terminal of the channel, where charge carriers leave the channel.
*   **Gate (G):** The control terminal, separated from the channel by an insulating layer. Applying a voltage to the gate creates an electric field that modulates the channel's conductivity.
*   **Gate Insulator ($\text{SiO}_2$):** A very thin layer of silicon dioxide that electrically isolates the gate from the channel. This is the defining feature of a MOSFET.
*   **Channel:** A region in the substrate between the source and drain through which charge carriers flow. The width and conductivity of this channel are controlled by the gate voltage.

---

### **3. Types of MOSFETs**

MOSFETs are broadly classified into two main types based on their operation:

*   **Depletion-Mode MOSFET (D-MOSFET)**
*   **Enhancement-Mode MOSFET (E-MOSFET)**

Both types can be further classified based on the type of majority carriers in the channel:

*   **N-channel MOSFET (NMOS):** The channel consists of electrons as the majority carriers.
*   **P-channel MOSFET (PMOS):** The channel consists of holes as the majority carriers.

#### **3.1. Depletion-Mode MOSFET (D-MOSFET)**

*   **Construction:** A D-MOSFET has a physically formed channel between the source and drain even when the gate-to-source voltage ($V_{GS}$) is zero. This channel can be either N-type (N-channel D-MOSFET) or P-type (P-channel D-MOSFET).
*   **Operation:**
    *   **Depletion Mode:** When $V_{GS}$ is applied with a polarity that repels majority carriers from the gate region, the channel becomes narrower, reducing the current. This mode of operation is similar to a JFET.
    *   **Enhancement Mode:** When $V_{GS}$ is applied with a polarity that attracts majority carriers to the gate region, the channel becomes wider, increasing the current.
*   **Symbol:**
    *   **N-channel D-MOSFET:** Arrow on the gate points away from the channel line.
    *   **P-channel D-MOSFET:** Arrow on the gate points towards the channel line.
    *   The channel line is solid, indicating the pre-existing channel.
*   **Drain Curve ($I_D$ vs. $V_{DS}$):**
    *   For $V_{GS} = 0$, there's a non-zero drain current ($I_{DSS}$).
    *   As $V_{GS}$ becomes more negative (for NMOS), the channel is depleted, and $I_D$ decreases.
    *   As $V_{GS}$ becomes more positive (for NMOS), the channel is enhanced, and $I_D$ increases.
*   **Transfer Curve ($I_D$ vs. $V_{GS}$):**
    *   The transfer curve is parabolic, similar to a JFET, but extends into positive $V_{GS}$ values (enhancement region).
    *   The $V_{GS}$ value where $I_D = 0$ is called the pinch-off voltage ($V_P$) (for depletion mode).
*   **Key Parameter:** $I_{DSS}$ (Drain current when $V_{GS}=0$) and $V_P$ (Pinch-off voltage, the $V_{GS}$ at which $I_D=0$ when operating in depletion mode).

**Example (N-channel D-MOSFET):**

*   Constructed on a P-type substrate with N+ source and drain regions.
*   A conductive N-channel exists between source and drain.
*   Applying a negative $V_{GS}$ pushes electrons away from the gate insulator, narrowing the channel and reducing $I_D$.
*   Applying a positive $V_{GS}$ attracts electrons to the gate insulator, widening the channel and increasing $I_D$.

#### **3.2. Enhancement-Mode MOSFET (E-MOSFET)**

*   **Construction:** An E-MOSFET has no physically formed channel between the source and drain when $V_{GS} = 0$. A channel is *induced* only when a sufficient gate-to-source voltage ($V_{GS}$) of the correct polarity is applied.
*   **Operation:**
    *   **Enhancement Mode Only:** The gate voltage must attract charge carriers to form a conductive channel. If $V_{GS}$ is below a certain threshold voltage ($V_{TH}$), no current flows.
    *   **Threshold Voltage ($V_{TH}$):** The minimum gate-to-source voltage required to establish a conductive channel.
*   **Symbol:**
    *   **N-channel E-MOSFET:** Arrow on the gate points away from the channel line. The channel line is *dashed*, indicating no pre-existing channel.
    *   **P-channel E-MOSFET:** Arrow on the gate points towards the channel line. The channel line is *dashed*.
*   **Drain Curve ($I_D$ vs. $V_{DS}$):**
    *   For $V_{GS} < V_{TH}$, $I_D = 0$.
    *   For $V_{GS} \ge V_{TH}$, current flows and increases with both $V_{GS}$ and $V_{DS}$ (in the saturation region, $I_D$ is primarily dependent on $V_{GS}$).
*   **Transfer Curve ($I_D$ vs. $V_{GS}$):**
    *   The transfer curve starts at $I_D = 0$ for $V_{GS} < V_{TH}$ and then follows a parabolic relationship for $V_{GS} \ge V_{TH}$.
*   **Key Parameter:** $V_{TH}$ (Threshold voltage).

**Example (N-channel E-MOSFET):**

*   Constructed on a P-type substrate with N+ source and drain regions.
*   No conductive channel exists between source and drain initially.
*   Applying a positive $V_{GS}$ (greater than $V_{TH}$) attracts electrons to the region beneath the gate insulator, forming an N-type channel.
*   If $V_{GS}$ is less than $V_{TH}$, no channel is formed, and $I_D$ is zero.

#### **Comparison Table: D-MOSFET vs. E-MOSFET**

| Feature           | D-MOSFET                                   | E-MOSFET                                      |
| :---------------- | :----------------------------------------- | :-------------------------------------------- |
| **Channel**       | Physically present at $V_{GS}=0$           | Induced by $V_{GS}$                           |
| **Operation Mode**| Depletion and Enhancement                  | Enhancement only                              |
| **$V_{GS}$ for $I_D>0$** | Can conduct with $V_{GS} < 0$ (depletion) | Requires $V_{GS} \ge V_{TH}$                  |
| **$V_{GS}$ for $I_D=0$** | $V_{GS} = V_P$ (pinch-off voltage)         | $V_{GS} < V_{TH}$                             |
| **Symbol Line**   | Solid                                      | Dashed                                        |
| **Input Impedance** | Very high                                  | Very high                                     |
| **Primary Use**   | Amplification                                | Switching, Amplification                      |

---

### **4. Complementary MOSFET (CMOS)**

*   **Definition:** CMOS is a technology that uses both P-channel and N-channel enhancement-mode MOSFETs in complementary pairs. This is the dominant technology used in modern digital integrated circuits (ICs) like microprocessors and memory chips.
*   **Basic CMOS Inverter:** A fundamental building block of digital circuits. It consists of a PMOS transistor connected to the positive power supply ($V_{DD}$) and an NMOS transistor connected to ground. The gates are tied together to form the input, and the drains are tied together to form the output.
    *   **Operation:**
        *   **Input HIGH ($V_{in} = V_{DD}$):** The NMOS is ON, and the PMOS is OFF. The output is pulled down to ground ($V_{out} \approx 0$ V).
        *   **Input LOW ($V_{in} = 0$ V):** The PMOS is ON, and the NMOS is OFF. The output is pulled up to $V_{DD}$ ($V_{out} \approx V_{DD}$).
*   **Advantages of CMOS:**
    *   **Extremely Low Static Power Consumption:** When operating in a steady state (input is either high or low), one of the transistors is always OFF, resulting in very little current flow and hence negligible static power dissipation.
    *   **High Noise Immunity:** The sharp switching threshold provides good immunity to noise.
    *   **High Input Impedance:** Due to the insulated gate.
    *   **Fast Switching Speeds:** Can be very fast.
*   **Structure:** CMOS fabrication involves building both NMOS and PMOS transistors on the same silicon substrate. This often requires a P-type substrate for NMOS fabrication and an N-type well (or "tub") within the substrate for PMOS fabrication, or vice-versa.

**Example (CMOS Inverter):**

Imagine a circuit with a PMOS connected between $V_{DD}$ and Output, and an NMOS connected between Output and Ground. Both gates are connected to the Input.

*   If Input is High ($V_{DD}$): The NMOS turns ON, providing a low-resistance path from Output to Ground. The PMOS, with its gate voltage equal to its source ($V_{GS} = V_{DD} - V_{DD} = 0$), turns OFF (since $V_{GS}$ is not negative enough to turn it ON). Output is pulled to 0V.
*   If Input is Low (0V): The NMOS, with $V_{GS} = 0 - 0 = 0$, turns OFF. The PMOS, with $V_{GS} = V_{DD} - 0 = V_{DD}$ (a positive voltage for PMOS, meaning its gate is *more positive* than its source, thus turning it ON), provides a low-resistance path from $V_{DD}$ to Output. Output is pulled to $V_{DD}$.

---

### **5. Learning Outcomes Alignment**

This topic directly addresses the foundational understanding required for designing amplifier circuits (CO1) by introducing MOSFETs, which are crucial active components. While the primary focus here is introduction and construction, understanding these building blocks is essential for subsequent design work.

---

### **6. Important Points to Remember**

*   MOSFETs are voltage-controlled devices with extremely high input impedance due to the $\text{SiO}_2$ insulating layer.
*   The three terminals are Source (S), Drain (D), and Gate (G). A fourth terminal, the Body (B) or Substrate, is often present but sometimes internally connected to the source.
*   **D-MOSFETs** have a conductive channel at $V_{GS}=0$ and can operate in both depletion and enhancement modes.
*   **E-MOSFETs** require a gate voltage ($V_{GS} \ge V_{TH}$) to create a conductive channel and operate only in enhancement mode.
*   **CMOS technology** utilizes complementary pairs of NMOS and PMOS transistors, enabling very low static power consumption, making it ideal for digital ICs.
*   The **threshold voltage ($V_{TH}$)** is a critical parameter for E-MOSFETs.
*   The **pinch-off voltage ($V_P$)** is a critical parameter for D-MOSFETs when operating in depletion mode.
*   Pay attention to the symbols: dashed channel line for E-MOSFETs, solid for D-MOSFETs.
*   The arrow direction in MOSFET symbols indicates the channel type (away from channel for N-channel, towards channel for P-channel). The arrow also typically points towards the body/substrate.

---

### **7. Practice Questions**

1.  **What is the primary difference in construction between a JFET and a MOSFET?**
    *   **Answer:** The gate of a MOSFET is insulated from the channel by a thin layer of silicon dioxide ($\text{SiO}_2$), whereas a JFET uses a reverse-biased p-n junction to control the channel.

2.  **Explain the main advantage of MOSFETs over BJTs in terms of input characteristics.**
    *   **Answer:** MOSFETs have an extremely high input impedance (typically $10^{10} - 10^{15} \Omega$) because their gate is insulated from the channel, meaning negligible DC current flows into the gate. BJTs, on the other hand, have a base current that controls the collector current.

3.  **Differentiate between D-MOSFETs and E-MOSFETs. What is the key operating parameter for each?**
    *   **Answer:**
        *   **D-MOSFET:** Has a pre-existing channel at $V_{GS}=0$ and can operate in depletion and enhancement modes. Key parameter: Pinch-off voltage ($V_P$).
        *   **E-MOSFET:** Does not have a channel at $V_{GS}=0$; a channel is induced by a gate voltage. Operates only in enhancement mode. Key parameter: Threshold voltage ($V_{TH}$).

4.  **What is CMOS technology, and why is it significant?**
    *   **Answer:** CMOS (Complementary Metal-Oxide-Semiconductor) technology uses complementary pairs of NMOS and PMOS transistors. It is significant because it offers extremely low static power consumption, high noise immunity, and high packing density, making it the dominant technology for modern digital integrated circuits.

5.  **Draw the circuit symbol for an N-channel E-MOSFET and a P-channel D-MOSFET.**
    *   **Answer:**
        *   **N-channel E-MOSFET:** A rectangular channel with a dashed line, a gate terminal connected to the dashed line with an arrow pointing away from the channel. Source and Drain terminals are on either end of the channel.
        *   **P-channel D-MOSFET:** A rectangular channel with a solid line, a gate terminal connected to the solid line with an arrow pointing towards the channel. Source and Drain terminals are on either end of the channel.

---
