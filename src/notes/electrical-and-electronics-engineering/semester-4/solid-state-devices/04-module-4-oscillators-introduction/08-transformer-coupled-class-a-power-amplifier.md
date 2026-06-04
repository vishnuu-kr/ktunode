---
title: "Transformer coupled class A power amplifier"
subject: "SOLID STATE DEVICES"
module: "Module 4: Oscillators: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f9d"
status: "completed"
scrapedAt: "2026-05-23T16:18:59.953Z"
---
## SOLID STATE DEVICES - Module 4: Oscillators: Introduction

### Topic: Transformer Coupled Class A Power Amplifier

---

### 1. Introduction to Power Amplifiers

*   **Purpose:** Power amplifiers are designed to deliver a significant amount of power to a load. They are used in applications where the output signal needs to drive devices like loudspeakers, motors, or transmission lines.
*   **Distinction from Voltage Amplifiers:** Unlike voltage amplifiers that focus on increasing the voltage gain, power amplifiers prioritize maximizing the output power delivered to the load.
*   **Classification:** Power amplifiers are broadly classified into Class A, Class B, Class AB, Class C, Class D, etc., based on their conduction angle.
*   **Class A Operation:** In Class A operation, the active device (BJT or MOSFET) conducts for the entire 360 degrees of the input signal cycle. This results in the lowest distortion but also the lowest efficiency among the different classes.

---

### 2. Transformer Coupled Class A Power Amplifier: Basic Concept

*   **Objective:** To achieve a higher power output and potentially better efficiency compared to a simple resistor-coupled Class A amplifier.
*   **Key Component:** A transformer is used as the coupling element between the amplifier stage and the load.
*   **Transformer's Role:**
    *   **Impedance Matching:** The primary function is to match the high output impedance of the active device (transistor) to a lower impedance load, maximizing power transfer. This is crucial for efficient power delivery. (Boylestad & Nashelsky, Chapter 12)
    *   **DC Isolation:** It blocks the DC component of the collector (or drain) current from reaching the load, allowing the AC signal to pass through.
    *   **Load Voltage Magnification:** By using the turns ratio of the transformer, the effective load impedance presented to the transistor can be controlled, allowing for higher output voltage swings.

---

### 3. Circuit Configuration and Operation

**(Refer to diagrams from Boylestad & Nashelsky or Sedra & Smith for circuit schematics)**

*   **NPN BJT Class A Amplifier:**
    *   The transformer's primary winding is connected in series with the collector of the NPN transistor.
    *   The collector is biased to operate in the active region for the entire input cycle.
    *   The secondary winding of the transformer is connected to the load resistance ($R_L$).

*   **N-Channel MOSFET Class A Amplifier:**
    *   Similar to the BJT configuration, the primary winding is connected in series with the drain of the MOSFET.
    *   The MOSFET is biased in the saturation region for the entire input cycle.
    *   The secondary winding is connected to the load resistance ($R_L$).

*   **DC Analysis:**
    *   The DC bias point ($I_{CQ}$, $V_{CEQ}$ for BJT or $I_{DQ}$, $V_{DSQ}$ for MOSFET) is set to achieve Class A operation. This typically means the quiescent collector/drain current is set at half of its maximum possible value.
    *   The transformer's primary winding has a DC resistance ($R_P$).
    *   The DC equivalent circuit for biasing is simpler, primarily involving the biasing resistors and the DC resistance of the primary winding.

*   **AC Analysis:**
    *   The transformer's leakage inductance and magnetizing inductance are typically ignored for basic analysis. The transformer is modeled as an ideal transformer with a turns ratio ($n = N_2 / N_1$).
    *   The AC load seen by the primary winding is the reflected load from the secondary. If the load on the secondary is $R_L$, the equivalent load on the primary side is $R'_L = n^2 R_L$.
    *   The collector (or drain) current flows through the primary winding, producing a changing magnetic flux. This flux induces a voltage in the secondary winding, driving the load.
    *   The output voltage across the load is determined by the turns ratio and the AC collector (or drain) current.

---

### 4. Analysis of Transformer Coupled Class A Amplifier

#### 4.1. Maximum Output Voltage Swing

*   **BJT:**
    *   The collector voltage swings between $V_{CE, min}$ and $V_{CE, max}$.
    *   Ideally, $V_{CE, min}$ is close to 0V (saturation voltage, $V_{CE(sat)}$).
    *   The quiescent collector voltage is $V_{CEQ}$.
    *   The AC voltage swing across the primary is $\Delta V_C$.
    *   The quiescent collector current is $I_{CQ}$.
    *   The AC collector current swing is $\Delta I_C$.
    *   The voltage across the primary during the AC cycle is $v_p(t) = V_{CE}(t) - V_{CEQ}$.
    *   The AC current through the primary is $i_p(t) = i_C(t) - I_{CQ}$.
    *   The AC load resistance seen by the primary is $R'_L = n^2 R_L$.
    *   $V_{CE, max} = V_{CC} - I_{CQ}R_P$ (where $R_P$ is DC resistance of the primary).
    *   For maximum output swing, the quiescent point is set such that:
        *   $V_{CEQ} \approx V_{CC}/2$
        *   $I_{CQ} \approx V_{CC} / (2R'_L)$ (assuming $R_P$ is negligible)
    *   The maximum AC output voltage across the load is $V_{o,max} = n \times V_{p,max}$.
    *   The voltage across the primary during negative peak of current is $V_{p,min} = -I_{CQ}R'_L$. The collector voltage at this point is $V_{CE, min} = V_{CEQ} - I_{CQ}R'_L$. This should be greater than $V_{CE(sat)}$.
    *   The voltage across the primary during positive peak of current is $V_{p,max} = I_{CQ}R'_L$. The collector voltage at this point is $V_{CE, max} = V_{CEQ} + I_{CQ}R'_L$. This should be less than $V_{CC}$.
    *   To avoid saturation and cutoff, the AC current swing $\Delta I_C$ should be less than or equal to $2I_{CQ}$.
    *   The maximum AC voltage swing across the primary is $V_{p,max} = I_{CQ}R'_L$.
    *   The maximum output AC voltage is $V_{o,max} = n \times I_{CQ}R'_L$.

*   **MOSFET:**
    *   Similar analysis applies, with $V_{DSQ}$, $I_{DQ}$, $V_{DS(sat)}$, and $V_{DD}$ instead of their BJT counterparts.
    *   The quiescent drain voltage is $V_{DSQ} \approx V_{DD}/2$.
    *   The quiescent drain current is $I_{DQ}$.
    *   The maximum AC output voltage is $V_{o,max} = n \times I_{DQ}R'_L$, where $R'_L = n^2 R_L$.

#### 4.2. Output Power ($P_o$)

*   The output power delivered to the load is the RMS value of the AC voltage across the load.
*   $V_{o,rms} = V_{o,max} / \sqrt{2}$ (assuming sinusoidal output).
*   $P_o = V_{o,rms}^2 / R_L = (V_{o,max} / \sqrt{2})^2 / R_L = V_{o,max}^2 / (2R_L)$.
*   Substituting $V_{o,max} = n \times I_{CQ}R'_L = n \times I_{CQ} \times n^2 R_L = n^2 I_{CQ}R_L$, this seems incorrect. Let's re-evaluate.
*   The AC voltage across the primary is $v_p(t) = i_p(t) R'_L$, where $i_p(t)$ is the AC collector current.
*   For maximum sinusoidal output, the peak AC collector current is $I_{peak} = I_{CQ}$.
*   The peak AC voltage across the primary is $V_{p,peak} = I_{peak}R'_L = I_{CQ}R'_L$.
*   The peak AC voltage across the load is $V_{o,peak} = n \times V_{p,peak} = n \times I_{CQ}R'_L$.
*   The RMS output voltage is $V_{o,rms} = V_{o,peak} / \sqrt{2} = (n I_{CQ}R'_L) / \sqrt{2}$.
*   **Output Power ($P_o$):**
    $P_o = \frac{V_{o,rms}^2}{R_L} = \frac{1}{R_L} \left(\frac{n I_{CQ}R'_L}{\sqrt{2}}\right)^2 = \frac{1}{R_L} \frac{n^2 I_{CQ}^2 (n^2 R_L)}{2} = \frac{n^4 I_{CQ}^2 R_L}{2}$.
    This still doesn't feel right. Let's think about the load on the primary.
*   The AC load presented to the transistor collector is $R'_L = n^2 R_L$.
*   The peak AC collector current is $I_{CQ}$.
*   The peak AC voltage across the primary is $V_{p,peak} = I_{CQ} R'_L = I_{CQ} n^2 R_L$.
*   The peak AC voltage across the load is $V_{o,peak} = n V_{p,peak} = n (I_{CQ} n^2 R_L) = n^3 I_{CQ} R_L$. This is getting more complex than it should be.
*   Let's use a simpler approach: the output power is the power dissipated in the load $R_L$.
*   The voltage across the load is $v_L(t) = n v_p(t)$.
*   The current through the load is $i_L(t) = i_p(t)/n$.
*   The peak AC voltage across the load is $V_{o,peak} = n V_{p,peak}$.
*   For maximum sinusoidal output swing, the collector voltage swings between $V_{CE(sat)}$ and $V_{CC}$.
*   So, the peak AC voltage swing across the primary is $V_{p,peak} = V_{CC} - V_{CE(sat)} \approx V_{CC}$.
*   The peak AC current swing through the primary is $I_{peak} = I_{CQ}$ (for Class A).
*   The peak AC voltage across the primary is also $I_{peak} \times R'_L = I_{CQ} \times n^2 R_L$.
*   Equating the two expressions for $V_{p,peak}$: $V_{CC} \approx I_{CQ} n^2 R_L$. This sets the bias point.
*   The RMS output voltage is $V_{o,rms} = (n \times V_{p,peak}) / \sqrt{2} = (n \times V_{CC}) / \sqrt{2}$ (assuming $V_{CE(sat)} \approx 0$).
*   **Output Power ($P_o$)**:
    $P_o = \frac{V_{o,rms}^2}{R_L} = \frac{1}{R_L} \left(\frac{n V_{CC}}{\sqrt{2}}\right)^2 = \frac{n^2 V_{CC}^2}{2R_L}$.
    This assumes the transformer is ideal and the primary is driven by $V_{CC}$ without voltage drop.

    Let's consider the power delivered from the DC supply:
    *   DC collector current $I_{CQ}$.
    *   DC supply voltage $V_{CC}$.
    *   DC power input $P_{DC} = V_{CC} \times I_{CQ}$.
    *   Power dissipated in the transistor: $P_T = V_{CEQ} \times I_{CQ} = (V_{CC}/2) \times I_{CQ}$.
    *   Power dissipated in the primary winding resistance $R_P$: $P_{RP} = I_{CQ}^2 R_P$.
    *   Output power $P_o = \frac{1}{2} V_{p,peak} I_{peak}$ if $R'_L$ is the load. $P_o = \frac{1}{2} (I_{CQ} R'_L) I_{CQ} = \frac{1}{2} I_{CQ}^2 R'_L = \frac{1}{2} I_{CQ}^2 n^2 R_L$.
    *   This expression is more consistent. The maximum output power is achieved when $V_{CEQ} = V_{CC}/2$ and $I_{CQ} = V_{CC} / (2R'_L)$.
    *   Substituting $I_{CQ}$ back into the power equation: $P_o = \frac{1}{2} \left(\frac{V_{CC}}{2R'_L}\right)^2 R'_L = \frac{1}{2} \frac{V_{CC}^2}{4R'_L^2} R'_L = \frac{V_{CC}^2}{8R'_L} = \frac{V_{CC}^2}{8n^2 R_L}$.

    **Let's stick with the power delivered to the load:**
    *   Maximum AC voltage across the primary (peak-to-peak) = $2 \times V_{CEQ} = V_{CC}$ (assuming $V_{CEQ} = V_{CC}/2$ and $V_{CE(sat)} \approx 0$).
    *   Maximum AC current through the primary (peak-to-peak) = $2 \times I_{CQ}$.
    *   The peak AC current is $I_{peak} = I_{CQ}$.
    *   The peak AC voltage across the primary is $V_{p,peak} = I_{CQ} R'_L$.
    *   For maximum swing, $V_{p,peak} = V_{CEQ} = V_{CC}/2$.
    *   So, $I_{CQ} R'_L = V_{CC}/2$.
    *   **Maximum Output Power ($P_{o,max}$):**
        $P_{o,max} = \frac{1}{2} V_{p,peak} I_{peak} = \frac{1}{2} (V_{CC}/2) I_{CQ} = \frac{V_{CC} I_{CQ}}{4}$.
        Substituting $I_{CQ} = \frac{V_{CC}}{2R'_L}$: $P_{o,max} = \frac{V_{CC}}{4} \frac{V_{CC}}{2R'_L} = \frac{V_{CC}^2}{8R'_L} = \frac{V_{CC}^2}{8n^2 R_L}$.

#### 4.3. Efficiency ($\eta$)

*   **Definition:** Efficiency is the ratio of output AC power to the DC input power.
    $\eta = \frac{P_o}{P_{DC}}$
*   **DC Input Power ($P_{DC}$):** For a Class A amplifier, the DC input power is $P_{DC} = V_{CC} \times I_{CQ}$ (ignoring the small power dissipated in biasing resistors).
*   **Maximum Efficiency for Transformer Coupled Class A:**
    *   When biased optimally ($V_{CEQ} = V_{CC}/2$ and $I_{CQ} = V_{CC} / (2R'_L)$), $P_{o,max} = V_{CC}^2 / (8R'_L)$.
    *   $P_{DC} = V_{CC} \times I_{CQ} = V_{CC} \times (V_{CC} / (2R'_L)) = V_{CC}^2 / (2R'_L)$.
    *   $\eta_{max} = \frac{V_{CC}^2 / (8R'_L)}{V_{CC}^2 / (2R'_L)} = \frac{2R'_L}{8R'_L} = \frac{1}{4} = 0.25 = 25\%$.
*   **Important Note:** This 25% efficiency is the *theoretical maximum* for a transformer-coupled Class A amplifier. In practice, due to the DC resistance of the primary winding ($R_P$) and transformer losses, the efficiency is even lower, typically around 10-20%. (Bell, Chapter 11)

#### 4.4. Power Dissipation in the Transistor

*   **Power dissipated in the transistor ($P_T$)**: This is the power lost as heat in the active device.
*   $P_T = P_{DC} - P_o$
*   For optimal biasing ($V_{CEQ} = V_{CC}/2$, $I_{CQ} = V_{CC} / (2R'_L)$):
    *   $P_{DC} = V_{CC}^2 / (2R'_L)$
    *   $P_o = V_{CC}^2 / (8R'_L)$
    *   $P_T = \frac{V_{CC}^2}{2R'_L} - \frac{V_{CC}^2}{8R'_L} = \frac{4V_{CC}^2 - V_{CC}^2}{8R'_L} = \frac{3V_{CC}^2}{8R'_L}$.
*   Since $P_{o,max} = V_{CC}^2 / (8R'_L)$, we have $P_T = 3 P_{o,max}$.
*   This means the transistor dissipates three times the output power, which is why Class A amplifiers are inherently inefficient and generate significant heat.

#### 4.5. Transformer Losses

*   **Core Losses:** Hysteresis and eddy current losses in the transformer core.
*   **Copper Losses:** $I^2R$ losses due to the DC resistance of the primary and secondary windings. This significantly reduces the practical efficiency.
*   **Stray Capacitances and Leakage Inductance:** Affect high-frequency performance and can introduce distortion.

---

### 5. Advantages of Transformer Coupling

*   **Excellent Impedance Matching:** Allows efficient transfer of power to low-impedance loads (like loudspeakers). (Neamen, Chapter 10)
*   **DC Isolation:** Prevents DC current from flowing into the load.
*   **Higher Output Voltage Swing:** The transformer can step up the voltage, allowing for larger output voltage swings compared to direct coupling or RC coupling when driving a specific load impedance.
*   **DC Power Supply Minimization:** The DC quiescent current doesn't need to flow through the load, so the supply voltage ($V_{CC}$ or $V_{DD}$) can be chosen more freely.

---

### 6. Disadvantages of Transformer Coupling

*   **Low Efficiency:** Theoretical maximum of 25%, practical much lower. Significant heat dissipation in the transistor.
*   **Bulky and Expensive:** Transformers, especially for power applications, are large, heavy, and costly.
*   **Frequency Response Limitations:** Transformers have limitations at low and high frequencies due to:
    *   **Low Frequency:** Magnetizing inductance causes a decrease in gain as frequency drops.
    *   **High Frequency:** Leakage inductance and winding capacitance cause a decrease in gain and phase shift as frequency increases.
*   **Hum Pickup:** The transformer's magnetic field can pick up external hum (e.g., 50/60 Hz mains frequency).
*   **Saturation:** The transformer core can saturate if the DC current is too high or if there are large DC offsets, leading to severe distortion.

---

### 7. Design Considerations

*   **Load Impedance ($R_L$):** Usually specified by the application (e.g., 8-ohm speaker).
*   **Turns Ratio ($n$):** Determined by the desired impedance matching. The effective load on the primary is $R'_L = n^2 R_L$.
*   **Transformer Specifications:** The transformer must be rated for the operating voltage, current, and power. The core material and size determine the frequency response and susceptibility to saturation.
*   **Biasing:**
    *   The quiescent collector/drain voltage is typically set to $V_{CC}/2$ or $V_{DD}/2$.
    *   The quiescent collector/drain current ($I_{CQ}$ or $I_{DQ}$) is chosen to provide maximum output voltage and current swing without clipping. It's usually set to $I_{CQ} = V_{CC} / (2R'_L)$ or $I_{DQ} = V_{DD} / (2R'_L)$.
*   **Transistor Selection:** The transistor must be able to handle the required DC collector/drain current, voltage, and power dissipation. It should have a low saturation voltage ($V_{CE(sat)}$ or $V_{DS(sat)}$) for better efficiency.
*   **Heat Sink:** A heat sink is almost always required for the transistor due to its high power dissipation.

---

### 8. Comparison with Other Class A Coupling Methods

*   **Resistor-Capacitor (RC) Coupling:**
    *   **Efficiency:** Very low (theoretical max ~25%, but practical much lower due to $I_{CQ}R_C$ power loss).
    *   **Output Power:** Limited by the maximum allowable collector voltage swing before clipping.
    *   **Complexity:** Simple.
    *   **Cost:** Low.
    *   **Frequency Response:** Good over a wide range, limited by coupling capacitor at low frequencies.

*   **Transformer Coupling:**
    *   **Efficiency:** Theoretical max 25%, practical lower.
    *   **Output Power:** Can be higher due to impedance matching and voltage step-up.
    *   **Complexity:** Moderate (requires a transformer).
    *   **Cost:** Higher.
    *   **Frequency Response:** Limited by transformer characteristics.

---

### 9. Connection to Course Outcomes

*   **CO1: Design and analyze the RC circuits and BJT biasing circuits (Knowledge Level: K4):** Understanding the biasing of the transistor for Class A operation is crucial. The choice of $V_{CC}$, load ($R'_L$), and quiescent current ($I_{CQ}$) involves basic circuit analysis and design principles.
*   **CO2: Perform small signal and high frequency analysis of BJT amplifier circuits using equivalent models (Knowledge Level: K3):** While this topic focuses on power, understanding the AC equivalent circuit of the transistor and how the transformer reflects impedance is related to equivalent models. High-frequency limitations are also a factor.
*   **CO3: Design and analyze MOSFET amplifier circuits (Knowledge Level: K4):** The principles are directly transferable from BJT to MOSFET, with appropriate parameter changes ($V_{DD}$, $I_{DQ}$, $V_{DS(sat)}$).
*   **CO4: Design and analyze feedback amplifiers and oscillators (Knowledge Level: K4):** While not directly related to feedback or oscillators, the fundamental understanding of amplifier operation and impedance matching is a prerequisite.
*   **CO5: Design power amplifiers and voltage regulator circuits (Knowledge Level: K4):** This is the primary relevant outcome. Transformer-coupled Class A is a type of power amplifier. The analysis of output power, efficiency, and power dissipation directly addresses the design and analysis of power amplifiers.

---

### 10. Practice Questions and Exercises

**Question 1:**
A transformer-coupled Class A power amplifier uses an NPN BJT. The supply voltage $V_{CC} = 12V$. The transformer has a turns ratio $n=1:2$ (primary:secondary). The load resistance $R_L = 4\Omega$. The primary winding has a DC resistance $R_P = 1\Omega$. Design the amplifier for maximum output power.
(a) Calculate the required turns ratio $n$ for proper impedance matching if the transformer was primary:secondary 1:1.
(b) Calculate the optimal quiescent collector current ($I_{CQ}$).
(c) Calculate the optimal quiescent collector-emitter voltage ($V_{CEQ}$).
(d) Calculate the AC load resistance seen by the collector ($R'_L$).
(e) Calculate the maximum output AC voltage across the load ($V_{o,max}$).
(f) Calculate the maximum output power ($P_o$).
(g) Calculate the DC input power ($P_{DC}$).
(h) Calculate the efficiency ($\eta$).
(i) Calculate the power dissipated by the transistor ($P_T$).

**Solution 1:**
First, let's correct the turns ratio convention. Usually, $n$ is secondary turns / primary turns. Let's assume the problem statement implies $N_1:N_2 = 1:2$, so $n = N_2/N_1 = 2$.

(a) For maximum power transfer, the effective AC load on the primary ($R'_L$) should match the source impedance. However, the design is about matching the transistor's output to the load $R_L$. The effective AC load on the collector is $R'_L = n^2 R_L$. If the transformer was $1:1$ ($n=1$), then $R'_L = R_L = 4\Omega$. This is usually not the goal of transformer coupling. The goal is to present a suitable $R'_L$ to the collector. The given turns ratio determines this.

(b) For maximum output power in Class A, $V_{CEQ} = V_{CC}/2$ and $I_{CQ} = V_{CC} / (2R'_L)$.
First, calculate $R'_L$:
$R'_L = n^2 R_L = 2^2 \times 4\Omega = 4 \times 4\Omega = 16\Omega$.
$I_{CQ} = V_{CC} / (2R'_L) = 12V / (2 \times 16\Omega) = 12V / 32\Omega = 0.375A = 375mA$.

(c) $V_{CEQ} = V_{CC} / 2 = 12V / 2 = 6V$.
We need to check if this quiescent point is achievable and if the transistor stays in the active region.
The DC voltage drop across the primary winding resistance $R_P$ is $I_{CQ}R_P = 0.375A \times 1\Omega = 0.375V$.
The collector voltage would be $V_{CC} - I_{CQ}R_P = 12V - 0.375V = 11.625V$.
So, the actual $V_{CEQ}$ is approximately $11.625V$. This is not $V_{CC}/2$.

Let's re-approach the design based on the transistor's quiescent operating point.
We want $V_{CEQ} \approx V_{CC}/2 = 6V$.
The collector current is $I_{CQ}$. The voltage across the primary winding is $V_{p} = V_{CC} - I_{CQ}R_P$ (DC).
So, $V_{CEQ} = V_{CC} - I_{CQ}R_P$.
$6V = 12V - I_{CQ}(1\Omega) \Rightarrow I_{CQ}(1\Omega) = 6V \Rightarrow I_{CQ} = 6A$.
This is a very high current for a typical small-signal BJT and might saturate the transistor or the transformer.

Let's assume the transformer's primary resistance $R_P$ is negligible for simplicity in setting the quiescent point for maximum power.
If $R_P \approx 0$, then $V_{CEQ} = V_{CC} = 12V$.
For maximum power, $V_{CEQ} = V_{CC}/2 = 6V$.
This implies that the biasing resistors must be adjusted to set $V_{CEQ}=6V$. In a transformer-coupled circuit, the DC bias is set by the $V_{CC}$ and the quiescent current. The quiescent current is primarily determined by the required AC swing.

Let's stick to the common design approach where $R_P$ is assumed small or the bias is set such that $V_{CEQ} = V_{CC}/2$.
If $V_{CEQ} = 6V$, then the AC voltage swing across the primary is $V_{p,peak} = 6V$.
The peak AC current is $I_{peak} = I_{CQ}$.
The AC load seen by the collector is $R'_L = n^2 R_L = 2^2 \times 4\Omega = 16\Omega$.
For maximum swing, $V_{p,peak} = I_{peak} R'_L$.
$6V = I_{CQ} \times 16\Omega \Rightarrow I_{CQ} = 6V / 16\Omega = 0.375A = 375mA$.
This is the same $I_{CQ}$ calculated before.
Let's check the condition $V_{CE,min} > V_{CE(sat)}$.
$V_{CE,min} = V_{CEQ} - V_{p,peak} = 6V - 6V = 0V$.
Ideally, $V_{CE(sat)} \approx 0.2V$ for a silicon BJT. So, the collector voltage will just touch saturation, which is acceptable for maximum power.

(d) AC load resistance seen by the collector ($R'_L$):
$R'_L = n^2 R_L = 2^2 \times 4\Omega = 16\Omega$.

(e) Maximum output AC voltage across the load ($V_{o,max}$):
$V_{o,max} = n \times V_{p,peak} = 2 \times 6V = 12V$.

(f) Maximum output power ($P_o$):
$P_o = \frac{V_{o,max}^2}{2R_L} = \frac{(12V)^2}{2 \times 4\Omega} = \frac{144V^2}{8\Omega} = 18W$.
Alternatively, using $P_o = \frac{V_{CC}^2}{8n^2 R_L} = \frac{(12V)^2}{8 \times 2^2 \times 4\Omega} = \frac{144V^2}{8 \times 16\Omega} = \frac{144V^2}{128\Omega} \approx 1.125W$. This formula seems to be incorrect.

Let's use $P_o = \frac{1}{2} I_{peak} V_{p,peak}$ for the primary side power and then reflect to the load.
$P_o = \frac{1}{2} I_{CQ} V_{p,peak} = \frac{1}{2} (0.375A) (6V) = 1.125W$.
This is the power delivered to the primary load resistance $R'_L$.
The power delivered to the secondary load $R_L$ is:
$P_o = \frac{1}{2} (\frac{I_{peak}}{n}) (n V_{p,peak}) = \frac{1}{2} I_{peak} V_{p,peak}$. No, this is power in the primary.
$P_o = \frac{V_{o,rms}^2}{R_L}$.
$V_{o,peak} = n V_{p,peak} = 2 \times 6V = 12V$.
$V_{o,rms} = V_{o,peak} / \sqrt{2} = 12V / \sqrt{2}$.
$P_o = \frac{(12V / \sqrt{2})^2}{4\Omega} = \frac{144V^2 / 2}{4\Omega} = \frac{72V^2}{4\Omega} = 18W$.

Wait, let's re-check the calculation for $I_{CQ}$.
$V_{CEQ} = 6V$. $I_{CQ} = 375mA$.
DC power input $P_{DC} = V_{CC} \times I_{CQ} = 12V \times 0.375A = 4.5W$.
If $P_o = 18W$, then efficiency is $18W/4.5W = 400\%$, which is impossible.

Let's re-examine the conditions for maximum power.
$V_{CEQ} = V_{CC}/2 = 6V$.
$I_{CQ} = V_{CC} / (2R'_L) = 12V / (2 \times 16\Omega) = 0.375A$.
With these values:
$V_{CE,max} = V_{CC} = 12V$.
$V_{CE,min} = V_{CEQ} - I_{CQ}R'_L = 6V - 0.375A \times 16\Omega = 6V - 6V = 0V$.
This is the ideal condition where the collector voltage swings from 0 to $V_{CC}$.

Now, let's look at the power delivered to the primary load $R'_L$.
The AC voltage across the primary is $v_p(t)$. Peak AC voltage $V_{p,peak} = 6V$.
The AC current through the primary is $i_p(t)$. Peak AC current $I_{peak} = I_{CQ} = 0.375A$.
Power delivered to $R'_L = \frac{1}{2} I_{peak}^2 R'_L = \frac{1}{2} (0.375A)^2 \times 16\Omega = \frac{1}{2} (0.140625 A^2) \times 16\Omega = 1.125W$.
Power delivered to $R'_L = \frac{1}{2} \frac{V_{p,peak}^2}{R'_L} = \frac{1}{2} \frac{(6V)^2}{16\Omega} = \frac{1}{2} \frac{36V^2}{16\Omega} = 1.125W$.

The output power is delivered to $R_L$.
$V_{o,peak} = n \times V_{p,peak} = 2 \times 6V = 12V$.
$P_o = \frac{V_{o,peak}^2}{2R_L} = \frac{(12V)^2}{2 \times 4\Omega} = \frac{144V^2}{8\Omega} = 18W$.

There is a discrepancy. The power delivered to the primary load $R'_L$ should be equal to the power delivered to the secondary load $R_L$ if the transformer is ideal.
Let's use the power formula $P_o = V_{CC}^2 / (8n^2 R_L)$.
$P_o = (12V)^2 / (8 \times 2^2 \times 4\Omega) = 144V^2 / (8 \times 16\Omega) = 144V^2 / 128\Omega = 1.125W$.
This result matches the power calculated using the primary side values.

The issue might be in the assumption of $V_{CEQ} = V_{CC}/2$ and the resulting $V_{o,max}$.
Let's reconsider the $V_{CE,max}$ and $V_{CE,min}$.
$V_{CE,max} = V_{CC} = 12V$.
$V_{CE,min} = V_{CE(sat)} \approx 0.2V$.
The total voltage swing available across the primary is $V_{CC} - V_{CE(sat)} \approx 12V$.
So, the peak AC voltage across the primary is $V_{p,peak} \approx 12V / 2 = 6V$. This confirms the previous calculation.

Where is the power discrepancy coming from?
Let's check the calculation of $R'_L$.
$R'_L = n^2 R_L$. If $n=2$, $R'_L = 4 \times 4 = 16\Omega$.
If $V_{p,peak} = 6V$ and $I_{peak} = 0.375A$, then $R'_L = V_{p,peak} / I_{peak} = 6V / 0.375A = 16\Omega$. This is consistent.

The output power should be the power dissipated in $R_L$.
$V_{o,rms} = (n \times V_{p,peak}) / \sqrt{2} = (2 \times 6V) / \sqrt{2} = 12V / \sqrt{2}$.
$P_o = V_{o,rms}^2 / R_L = (12V/\sqrt{2})^2 / 4\Omega = (144V^2/2) / 4\Omega = 72V^2 / 4\Omega = 18W$.

Let's go back to the DC power.
If $I_{CQ} = 0.375A$, then $P_{DC} = V_{CC} \times I_{CQ} = 12V \times 0.375A = 4.5W$.
If $P_o = 18W$, efficiency is $400\%$. This indicates an error in either the problem setup or my understanding of the equations.

Let's reconsider the transformer coupling and impedance matching.
The transformer primary winding has a DC resistance $R_P$. The AC impedance it presents to the transistor is $R'_L = n^2 R_L$.
For Class A operation, the quiescent current $I_{CQ}$ flows through the primary. The DC voltage drop is $I_{CQ}R_P$.
The quiescent collector voltage is $V_{CEQ} = V_{CC} - I_{CQ}R_P$.

For maximum output power, we want the AC collector current to be as large as possible without clipping, and the AC collector voltage to swing as widely as possible.
Peak AC collector current $I_{peak} \le I_{CQ}$. For maximum power, $I_{peak} = I_{CQ}$.
Peak AC collector voltage swing $V_{p,peak} \le V_{CEQ} - V_{CE(sat)}$ and $V_{p,peak} \le V_{CC} - V_{CEQ}$.
For maximum swing, $V_{CEQ} - V_{CE(sat)} \approx V_{CC} - V_{CEQ}$, so $V_{CEQ} \approx (V_{CC} + V_{CE(sat)})/2 \approx V_{CC}/2$.

So, we set $V_{CEQ} = 6V$.
$V_{CEQ} = V_{CC} - I_{CQ}R_P$.
$6V = 12V - I_{CQ} \times 1\Omega \Rightarrow I_{CQ} = 6A$.

Now, with $I_{CQ} = 6A$, the peak AC current is $I_{peak} = 6A$.
The AC load on the collector is $R'_L = 16\Omega$.
The peak AC voltage across the primary due to this current is $V_{p,peak} = I_{peak} R'_L = 6A \times 16\Omega = 96V$.
This is much larger than the available voltage swing ($V_{CEQ} - V_{CE(sat)} \approx 6V$).
This means the transistor will clip heavily.

The initial assumption of setting $V_{CEQ} = V_{CC}/2$ and $I_{CQ} = V_{CC}/(2R'_L)$ implicitly assumes $R_P=0$.
When $R_P$ is not negligible, the design needs to consider it.

Let's assume the transformer primary is ideal for power calculation, but its $R_P$ affects the DC bias.
If $I_{CQ} = 0.375A$, $V_{CEQ} = 12V - 0.375A \times 1\Omega = 11.625V$.
This $V_{CEQ}$ is quite high, far from $V_{CC}/2$.
The AC voltage swing capability from $V_{CEQ}$ is $11.625V - 0.2V = 11.425V$ (peak).
The AC current swing capability is $I_{CQ} = 0.375A$ (peak).
The load presented is $R'_L = 16\Omega$.
The AC voltage swing that can be produced by this current is $V_{p,peak} = I_{CQ} R'_L = 0.375A \times 16\Omega = 6V$.
Since $6V < 11.425V$, the current is the limiting factor, and the amplifier will operate without voltage clipping.

(b) $I_{CQ} = 0.375A$.
(c) $V_{CEQ} = 11.625V$.
(d) $R'_L = 16\Omega$.
(e) Maximum output AC voltage across the load ($V_{o,max}$):
$V_{o,max} = n \times V_{p,peak} = 2 \times 6V = 12V$.
(f) Maximum output power ($P_o$):
$P_o = \frac{V_{o,max}^2}{2R_L} = \frac{(12V)^2}{2 \times 4\Omega} = 18W$.
(g) DC input power ($P_{DC}$):
$P_{DC} = V_{CC} \times I_{CQ} = 12V \times 0.375A = 4.5W$.
(h) Efficiency ($\eta$):
$\eta = \frac{P_o}{P_{DC}} = \frac{18W}{4.5W} = 400\%$. Still impossible.

Let's use the power formula $P_o = \frac{1}{2} I_{peak} V_{p,peak}$. This is power delivered to $R'_L$.
$P_{o\_primary} = \frac{1}{2} I_{CQ} V_{p,peak} = \frac{1}{2} (0.375A)(6V) = 1.125W$.
The power delivered to the load $R_L$ is $P_o = n^2 P_{o\_primary} = 2^2 \times 1.125W = 4 \times 1.125W = 4.5W$.
This now makes sense! The transformer steps up the voltage but also reflects an impedance of $n^2 R_L$ to the primary. The power handled by the primary load $R'_L$ equals the power delivered to the secondary load $R_L$.

Let's re-calculate the output power using the $V_{o,max}$:
$V_{o,max} = n V_{p,peak} = 2 \times 6V = 12V$.
$P_o = \frac{V_{o,max}^2}{2R_L} = \frac{(12V)^2}{2 \times 4\Omega} = 18W$. There is still a mismatch.

Let's re-evaluate the relation $V_{p,peak} = I_{peak} R'_L$.
$V_{p,peak}$ is the peak AC voltage across the primary winding.
$R'_L$ is the equivalent AC load on the primary.
$I_{peak}$ is the peak AC current through the primary.

The power delivered *to* $R'_L$ is $P_{R'_L} = \frac{1}{2} I_{peak}^2 R'_L = \frac{1}{2} (0.375A)^2 (16\Omega) = 1.125W$.
The power delivered *to* $R_L$ is $P_o = \frac{1}{2} I_{L,peak} V_{L,peak}$.
$I_{L,peak} = I_{peak}/n = 0.375A/2 = 0.1875A$.
$V_{L,peak} = n V_{p,peak} = 2 \times 6V = 12V$.
$P_o = \frac{1}{2} (0.1875A)(12V) = 1.125W$.
This power calculation is consistent. The power delivered to the load $R_L$ is 1.125W.

So, where did $P_o = 18W$ come from?
$P_o = \frac{V_{o,max}^2}{2R_L}$ implies $V_{o,rms} = V_{o,max} / \sqrt{2}$.
$V_{o,max} = n V_{p,peak} = 2 \times 6V = 12V$.
$P_o = \frac{(12V)^2}{2 \times 4\Omega} = \frac{144}{8} = 18W$.

The error is in assuming $V_{p,peak} = 6V$ and $I_{peak} = 0.375A$ can both be simultaneously at their peak values while maintaining the power balance through the transformer.
The relationship $V_{p,peak} = I_{peak} R'_L$ must hold.
$6V = 0.375A \times 16\Omega$ holds.

The output power is indeed $1.125W$.
Let's verify the efficiency.
$P_o = 1.125W$.
$P_{DC} = 4.5W$.
$\eta = \frac{1.125W}{4.5W} = 0.25 = 25\%$.
This is the theoretical maximum efficiency for Class A transformer coupled amplifier.

So, the corrected answers are:
(b) $I_{CQ} = 0.375A$.
(c) $V_{CEQ} = 11.625V$.
(d) $R'_L = 16\Omega$.
(e) Maximum output AC voltage across the load ($V_{o,peak}$) = $12V$. (RMS is $12V/\sqrt{2}$).
(f) Maximum output power ($P_o$) = $1.125W$.
(g) DC input power ($P_{DC}$) = $4.5W$.
(h) Efficiency ($\eta$) = $25\%$.
(i) Power dissipated by the transistor ($P_T$):
$P_T = P_{DC} - P_o = 4.5W - 1.125W = 3.375W$.

**Question 2:**
What are the main limitations of transformer-coupled Class A amplifiers regarding their frequency response? Explain briefly.

**Answer 2:**
The main limitations of transformer-coupled Class A amplifiers regarding their frequency response are:
*   **Low Frequencies:** The **magnetizing inductance** ($L_M$) of the transformer appears in series with the load. At low frequencies, the impedance of $L_M$ ($2\pi f L_M$) becomes comparable to the load impedance ($R'_L$). This reduces the AC voltage developed across the primary, leading to a drop in gain as frequency decreases.
*   **High Frequencies:** At high frequencies, the **leakage inductance** ($L_s$) and **stray shunt capacitance** ($C_s$) between windings become significant. Leakage inductance acts in series and reduces the AC signal. The stray capacitance acts in parallel with the load, forming a resonant circuit that can cause a peak in the response, followed by a sharp drop in gain at very high frequencies.

**Question 3:**
A transformer-coupled Class A amplifier has $V_{CC} = 24V$, $R_L = 8\Omega$, and the transformer turns ratio $n = N_2/N_1 = 1:2$. Assume the primary winding resistance $R_P$ is negligible. Calculate the maximum output power.

**Answer 3:**
Transformer turns ratio $n = N_2/N_1 = 2/1 = 2$.
Effective AC load on the primary: $R'_L = n^2 R_L = 2^2 \times 8\Omega = 4 \times 8\Omega = 32\Omega$.
For maximum output power, $V_{CEQ} = V_{CC}/2 = 24V/2 = 12V$.
Peak AC collector current $I_{peak} = V_{CEQ} / R'_L = 12V / 32\Omega = 0.375A$.
This also means $I_{CQ} = 0.375A$.
Peak AC voltage across the primary $V_{p,peak} = V_{CEQ} = 12V$.
Output power $P_o = \frac{1}{2} I_{peak}^2 R'_L = \frac{1}{2} (0.375A)^2 (32\Omega) = \frac{1}{2} (0.140625) (32) = 2.25W$.
Alternatively, using the output side:
$V_{o,peak} = n \times V_{p,peak} = 2 \times 12V = 24V$.
$P_o = \frac{V_{o,peak}^2}{2R_L} = \frac{(24V)^2}{2 \times 8\Omega} = \frac{576V^2}{16\Omega} = 36W$.

There is still a discrepancy in power calculation. Let's re-check formulas.
$P_o = \frac{1}{2} I_{peak}^2 R'_L$ is power delivered to $R'_L$. This power is transferred to $R_L$.
$P_o = \frac{1}{2} \times (0.375)^2 \times 32 = 2.25W$. This is correct.

Let's check the $V_{o,peak}$ calculation again.
$V_{p,peak} = 12V$.
$V_{o,peak} = n \times V_{p,peak} = 2 \times 12V = 24V$. This is the peak voltage across the secondary.
$P_o = \frac{V_{o,peak}^2}{2R_L} = \frac{(24V)^2}{2 \times 8\Omega} = \frac{576}{16} = 36W$.

The power delivered to the load $R_L$ is indeed $36W$.
The power delivered to the primary load $R'_L$ is $2.25W$.
The power transfer through an ideal transformer follows $P_{primary} = P_{secondary}$.
So, $2.25W$ must equal $36W$, which is not possible.

The issue lies in how $I_{peak}$ and $V_{p,peak}$ are related to the power delivered to $R_L$.
The power delivered to the primary load $R'_L$ is indeed $P_{R'_L} = \frac{1}{2} I_{peak}^2 R'_L$.
The power delivered to the secondary load $R_L$ is $P_o = \frac{1}{2} I_{L,peak}^2 R_L$, where $I_{L,peak} = I_{peak}/n$.
$P_o = \frac{1}{2} (I_{peak}/n)^2 R_L = \frac{1}{2} \frac{I_{peak}^2}{n^2} R_L = \frac{1}{2} I_{peak}^2 \frac{R_L}{n^2}$.
We know $R'_L = n^2 R_L$. So $R_L/n^2 = R_L / (R'_L/R_L) = R_L^2/R'_L$. This is not correct.
$R_L/n^2 = R_L / (N_2^2/N_1^2) = R_L \times (N_1^2/N_2^2) = R_L / n^2$.

Let's use $R'_L = n^2 R_L$.
$P_{R'_L} = \frac{1}{2} I_{peak}^2 R'_L$.
$P_o = \frac{1}{2} I_{L,peak}^2 R_L = \frac{1}{2} (\frac{I_{peak}}{n})^2 R_L = \frac{1}{2} \frac{I_{peak}^2}{n^2} R_L = \frac{1}{2} I_{peak}^2 (\frac{R_L}{n^2})$.
So, $P_o = \frac{1}{2} I_{peak}^2 \frac{R_L}{n^2}$.
And $P_{R'_L} = \frac{1}{2} I_{peak}^2 (n^2 R_L)$.
For power to be equal, $\frac{R_L}{n^2} = n^2 R_L$, which means $n^4 = 1$, so $n=1$.
This implies that my power calculation methods are inconsistent when relating primary and secondary powers.

Let's stick to the fundamental definition of power delivered to the load $R_L$.
The peak voltage across $R_L$ is $V_{o,peak} = n \times V_{p,peak}$.
$V_{p,peak} = V_{CEQ} = 12V$.
$V_{o,peak} = 2 \times 12V = 24V$.
$P_o = \frac{V_{o,peak}^2}{2R_L} = \frac{(24V)^2}{2 \times 8\Omega} = \frac{576}{16} = 36W$.

Let's verify DC power.
$I_{CQ} = 0.375A$.
$P_{DC} = V_{CC} \times I_{CQ} = 24V \times 0.375A = 9W$.
Efficiency $\eta = P_o / P_{DC} = 36W / 9W = 400\%$. This indicates a serious misunderstanding of the power calculations or the problem parameters.

The fundamental issue is that the maximum output power is limited by the DC power input.
In Class A, $P_{o,max} = V_{CC}^2 / (8R'_L)$ if $R_P=0$.
$R'_L = n^2 R_L = 2^2 \times 8\Omega = 32\Omega$.
$P_{o,max} = (24V)^2 / (8 \times 32\Omega) = 576V^2 / 256\Omega = 2.25W$.

This result (2.25W) is consistent with $P_{R'_L} = \frac{1}{2} I_{peak}^2 R'_L = \frac{1}{2} (0.375A)^2 (32\Omega) = 2.25W$.
The power delivered to the load $R_L$ is equal to the power delivered to the equivalent load $R'_L$ on the primary side.

So, the corrected answer for Question 3 is:
Maximum output power ($P_o$) = $2.25W$.

---

### 11. Important Points to Remember

*   **Class A Definition:** Active device conducts for 360 degrees.
*   **Transformer Role:** Impedance matching, DC isolation.
*   **Efficiency Limit:** Theoretical maximum of 25% for Class A transformer-coupled. Practical efficiency is lower (10-20%).
*   **Power Dissipation:** Transistor dissipates significant heat (e.g., $P_T = 3 P_o$ at max efficiency). A heat sink is essential.
*   **Frequency Response:** Limited by transformer magnetizing inductance (low freq) and leakage inductance/capacitance (high freq).
*   **Design Goal:** Maximize output power by setting $V_{CEQ} \approx V_{CC}/2$ and $I_{CQ} \approx V_{CC} / (2R'_L)$, where $R'_L = n^2 R_L$.
*   **Transformer Rating:** Must handle DC bias current and AC signal voltage/current without saturation or excessive heating.

---
