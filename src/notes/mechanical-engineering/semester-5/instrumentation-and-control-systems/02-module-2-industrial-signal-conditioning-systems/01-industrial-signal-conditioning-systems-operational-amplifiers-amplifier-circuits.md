---
title: "Industrial signal conditioning systems- Operational amplifiers - Amplifier circuits with ideal operational amplifiers - Current-to voltage converters - Inverting voltage amplifiers - Non-inverting voltage amplifiers - Differential amplifiers -Instrumentation amplifiers"
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 2: Industrial signal conditioning systems"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446366f"
status: "completed"
scrapedAt: "2026-05-20T18:00:37.151Z"
---
# Instrumentation and Control Systems - Module 2: Industrial Signal Conditioning Systems

## Topic: Operational Amplifiers and Basic Amplifier Circuits

### **Introduction to Signal Conditioning** (CO1, CO3 - K2, K4)

Signal conditioning is the process of converting a raw sensor signal into a format suitable for processing by other electronic components, microcontrollers, or control systems. This often involves:

*   **Amplification:** Boosting weak sensor signals to a usable level.
*   **Filtering:** Removing unwanted noise or frequencies.
*   **Isolation:** Preventing ground loops and protecting sensitive circuits.
*   **Linearization:** Correcting non-linear sensor outputs.
*   **Analog-to-Digital Conversion (ADC):** Converting analog signals to digital for processing.

Operational Amplifiers (Op-Amps) are fundamental building blocks for many signal conditioning circuits due to their high gain, high input impedance, and low output impedance.

### **Operational Amplifiers (Op-Amps)** (CO3 - K4)

**Definition:** An operational amplifier is a high-gain, direct-coupled, high-impedance differential amplifier. It is a versatile integrated circuit that can perform a wide variety of analog operations.

**Key Characteristics of an IDEAL Op-Amp:** (Important to Remember)

*   **Infinite Open-loop Gain ($A_{OL} \rightarrow \infty$):** The output voltage is infinitely amplified relative to the input voltage difference.
*   **Infinite Input Impedance ($Z_{in} \rightarrow \infty$):** No current flows into the input terminals. This ensures that the op-amp does not load the source signal.
*   **Zero Output Impedance ($Z_{out} = 0$):** The op-amp can deliver current to the load without any voltage drop.
*   **Infinite Bandwidth ($BW \rightarrow \infty$):** The op-amp can amplify signals of any frequency without attenuation.
*   **Zero Input Offset Voltage ($V_{os} = 0$):** When the input terminals are at the same potential, the output voltage is zero.
*   **Zero Input Bias Current ($I_{bias} = 0$):** No current flows into or out of the input terminals.
*   **Infinite Common-Mode Rejection Ratio (CMRR $\rightarrow \infty$):** The op-amp rejects signals common to both input terminals.

**Practical Op-Amp vs. Ideal Op-Amp:**
While ideal op-amps simplify analysis, real op-amps have finite gains, input/output impedances, bandwidth, and non-zero input offset voltages and bias currents. These non-idealities can affect circuit performance, especially at high frequencies or with weak signals. (Refer to Doebelin, Chapter 7 for details on practical sensor signal conditioning).

**Op-Amp Terminals:**

*   **Inverting Input (-):** The output voltage is 180 degrees out of phase with the input signal applied here.
*   **Non-inverting Input (+):** The output voltage is in phase with the input signal applied here.
*   **Output:** The amplified signal.
*   **Power Supply Inputs (+Vcc, -Vee):** Provide DC power to the op-amp.

### **Amplifier Circuits with Ideal Operational Amplifiers** (CO3 - K4)

When an op-amp is used with negative feedback (connecting the output back to the inverting input, directly or indirectly), its behavior is governed by two fundamental rules derived from the ideal op-amp characteristics:

1.  **Rule 1 (Virtual Short):** If the op-amp is in a negative feedback configuration and is operating in its linear region, the voltage difference between the inverting and non-inverting inputs is virtually zero ($V_+ \approx V_-$).
2.  **Rule 2 (Virtual Open):** If the op-amp is in a negative feedback configuration and is operating in its linear region, no current flows into the input terminals ($I_+ = 0$, $I_- = 0$).

These rules are crucial for analyzing op-amp circuits.

---

### **1. Current-to-Voltage (I/V) Converters** (CO3 - K4)

**Purpose:** To convert a current signal (e.g., from a photodiode, current transducer) into a voltage signal.

**Circuit Configuration:**

*   The current source is connected to the **inverting input (-)** of the op-amp.
*   The **non-inverting input (+)** is connected to ground (0V).
*   A feedback resistor ($R_f$) is connected between the output and the inverting input.

**Analysis (using Ideal Op-Amp Rules):**

1.  Since $V_+$ is at ground (0V), and by Rule 1, $V_- \approx V_+$, therefore $V_- = 0V$.
2.  By Rule 2, no current flows into the op-amp's inverting input.
3.  The input current ($I_{in}$) must therefore flow through the feedback resistor ($R_f$).
4.  Applying Ohm's Law to $R_f$: $V_{out} - V_- = I_{in} \times R_f$.
5.  Substituting $V_- = 0V$: $V_{out} - 0 = I_{in} \times R_f$.
6.  Therefore, the output voltage is: $V_{out} = -I_{in} \times R_f$.

**Transfer Function:** $V_{out} = -I_{in} \times R_f$

**Gain:** The gain is determined by the feedback resistor $R_f$. The output voltage is proportional to the input current, with a gain of $-R_f$ (and an inversion).

**Example:** If $I_{in} = 10 \mu A$ and $R_f = 100 k\Omega$, then $V_{out} = -(10 \times 10^{-6} A) \times (100 \times 10^3 \Omega) = -1V$.

**Important Points:**

*   The output voltage is negative for a positive input current due to the inverting configuration.
*   The feedback resistor value determines the sensitivity of the converter. Higher $R_f$ means higher output voltage for the same input current.
*   This circuit is also known as a **transimpedance amplifier**.

**(Refer to Krishnaswamy, Chapter 5 for more on transducer signal conditioning and the role of amplifiers)**

---

### **2. Inverting Voltage Amplifiers** (CO3 - K4)

**Purpose:** To amplify a voltage signal and invert its polarity.

**Circuit Configuration:**

*   The input voltage signal ($V_{in}$) is applied through an input resistor ($R_{in}$) to the **inverting input (-)**.
*   The **non-inverting input (+)** is connected to ground (0V).
*   A feedback resistor ($R_f$) is connected between the output and the inverting input.

**Analysis (using Ideal Op-Amp Rules):**

1.  $V_+ = 0V$.
2.  By Rule 1, $V_- \approx V_+$, so $V_- = 0V$ (this point is called a **virtual ground**).
3.  By Rule 2, no current flows into the op-amp's inverting input.
4.  The input current ($I_{in}$) flows through $R_{in}$ to the virtual ground.
    $I_{in} = \frac{V_{in} - V_-}{R_{in}} = \frac{V_{in} - 0}{R_{in}} = \frac{V_{in}}{R_{in}}$.
5.  This current must flow through $R_f$ because no current enters the op-amp.
    $I_{out} = I_{in}$.
6.  Applying Ohm's Law to $R_f$: $V_{out} - V_- = -I_{out} \times R_f$. (Note the negative sign because current flows from $V_{out}$ to $V_-$ through $R_f$).
7.  Substituting $V_- = 0V$ and $I_{out} = I_{in}$: $V_{out} - 0 = -(\frac{V_{in}}{R_{in}}) \times R_f$.
8.  Therefore, the output voltage is: $V_{out} = -\frac{R_f}{R_{in}} \times V_{in}$.

**Transfer Function:** $V_{out} = -(\frac{R_f}{R_{in}}) V_{in}$

**Voltage Gain ($A_v$):** $A_v = -\frac{R_f}{R_{in}}$

**Key Features:**

*   The gain is negative, meaning the output signal is inverted relative to the input.
*   The input impedance of the circuit is approximately equal to $R_{in}$ (since the inverting input is a virtual ground).
*   The gain can be precisely controlled by selecting the ratio of $R_f$ to $R_{in}$.

**Example:** If $R_{in} = 1 k\Omega$ and $R_f = 10 k\Omega$, the gain is $-10$. For an input of $V_{in} = 0.5V$, the output will be $V_{out} = -10 \times 0.5V = -5V$.

**(Refer to Krishnaswamy, Chapter 5 for amplifier circuits)**

---

### **3. Non-inverting Voltage Amplifiers** (CO3 - K4)

**Purpose:** To amplify a voltage signal without inverting its polarity.

**Circuit Configuration:**

*   The input voltage signal ($V_{in}$) is applied directly to the **non-inverting input (+)**.
*   The **inverting input (-)** is connected to ground through an input resistor ($R_1$).
*   A feedback resistor ($R_f$) is connected between the output and the inverting input.

**Analysis (using Ideal Op-Amp Rules):**

1.  $V_{in}$ is applied to the non-inverting input, so $V_+ = V_{in}$.
2.  By Rule 1, $V_- \approx V_+$, so $V_- = V_{in}$.
3.  By Rule 2, no current flows into the op-amp's inverting input.
4.  The current flowing through $R_1$ is $I_1 = \frac{V_- - 0}{R_1} = \frac{V_-}{R_1}$.
5.  Since no current enters the op-amp, this current ($I_1$) must also flow through $R_f$.
    $I_{in\_feedback} = I_1$.
6.  Applying Ohm's Law to $R_f$: $V_{out} - V_- = I_{in\_feedback} \times R_f$.
7.  Substituting $V_- = V_{in}$ and $I_{in\_feedback} = \frac{V_{in}}{R_1}$:
    $V_{out} - V_{in} = (\frac{V_{in}}{R_1}) \times R_f$.
8.  Rearranging for $V_{out}$:
    $V_{out} = V_{in} + \frac{R_f}{R_1} V_{in}$.
9.  Therefore, the output voltage is: $V_{out} = (1 + \frac{R_f}{R_1}) V_{in}$.

**Transfer Function:** $V_{out} = (1 + \frac{R_f}{R_1}) V_{in}$

**Voltage Gain ($A_v$):** $A_v = 1 + \frac{R_f}{R_1}$

**Key Features:**

*   The gain is positive, meaning the output signal is in phase with the input.
*   The input impedance of the circuit is very high, essentially infinite (equal to the op-amp's input impedance, which is assumed infinite for an ideal op-amp). This is a significant advantage when dealing with low-impedance sources.
*   The gain is always greater than or equal to 1.

**Example:** If $R_1 = 1 k\Omega$ and $R_f = 10 k\Omega$, the gain is $1 + \frac{10}{1} = 11$. For an input of $V_{in} = 0.5V$, the output will be $V_{out} = 11 \times 0.5V = 5.5V$.

**(Refer to Krishnaswamy, Chapter 5 for amplifier circuits)**

---

### **4. Differential Amplifiers** (CO3 - K4)

**Purpose:** To amplify the difference between two input voltage signals. This is particularly useful for rejecting common-mode noise.

**Circuit Configuration:**

*   Input voltage $V_1$ is applied to the **inverting input (-)** through $R_1$.
*   Input voltage $V_2$ is applied to the **non-inverting input (+)** through $R_2$.
*   Resistors $R_f$ and $R_g$ form the feedback network. For common-mode rejection, it's essential that the ratio of feedback resistors equals the ratio of input resistors: $\frac{R_f}{R_1} = \frac{R_g}{R_2}$.

**Analysis (assuming $\frac{R_f}{R_1} = \frac{R_g}{R_2}$):**

1.  Consider the voltage at the inverting input: $V_-$.
    The current through $R_1$ is $\frac{V_1 - V_-}{R_1}$.
    The current through $R_f$ is $\frac{V_{out} - V_-}{R_f}$.
    Since no current flows into the op-amp's inverting input: $\frac{V_1 - V_-}{R_1} = \frac{V_- - V_{out}}{R_f}$.
    $R_f(V_1 - V_-) = R_1(V_- - V_{out})$.
    $R_f V_1 - R_f V_- = R_1 V_- - R_1 V_{out}$.
    $R_f V_1 + R_1 V_{out} = (R_1 + R_f) V_-$.
    $V_- = \frac{R_f V_1 + R_1 V_{out}}{R_1 + R_f}$.

2.  Consider the voltage at the non-inverting input: $V_+$.
    This is a voltage divider network formed by $R_2$ and $R_g$ connected to $V_2$ and ground.
    $V_+ = V_2 \frac{R_g}{R_2 + R_g}$.

3.  Using the virtual short rule ($V_- \approx V_+$):
    $\frac{R_f V_1 + R_1 V_{out}}{R_1 + R_f} = V_2 \frac{R_g}{R_2 + R_g}$.

4.  Rearranging for $V_{out}$:
    $R_f V_1 + R_1 V_{out} = (R_1 + R_f) V_2 \frac{R_g}{R_2 + R_g}$.
    $R_1 V_{out} = (R_1 + R_f) V_2 \frac{R_g}{R_2 + R_g} - R_f V_1$.

5.  Using the condition $\frac{R_f}{R_1} = \frac{R_g}{R_2}$, which implies $R_f R_2 = R_1 R_g$. Let this ratio be $k$, so $R_f = k R_1$ and $R_g = k R_2$.
    $R_1 V_{out} = (R_1 + k R_1) V_2 \frac{k R_2}{R_2 + k R_2} - k R_1 V_1$.
    $R_1 V_{out} = R_1(1+k) V_2 \frac{k R_2}{R_2(1+k)} - k R_1 V_1$.
    $R_1 V_{out} = R_1(1+k) V_2 \frac{k}{1+k} - k R_1 V_1$.
    $R_1 V_{out} = R_1 k V_2 - k R_1 V_1$.
    $V_{out} = k V_2 - k V_1$.
    $V_{out} = k (V_2 - V_1)$.

**Transfer Function:** $V_{out} = \frac{R_f}{R_1} (V_2 - V_1)$ (assuming $\frac{R_f}{R_1} = \frac{R_g}{R_2}$)

**Voltage Gain ($A_v$):** $A_v = \frac{R_f}{R_1}$ (for the differential component)

**Common-Mode Rejection:**
If $V_1 = V_2$ (common-mode signal), and $\frac{R_f}{R_1} = \frac{R_g}{R_2}$, then $V_{out} = 0$. This demonstrates the ability of the differential amplifier to reject common-mode signals (noise present on both inputs).

**Example:** If $R_1 = 1 k\Omega, R_f = 10 k\Omega, R_2 = 1 k\Omega, R_g = 10 k\Omega$.
The gain for the differential signal is $\frac{10}{1} = 10$.
If $V_1 = 0.2V$ and $V_2 = 0.3V$, then $V_{out} = 10 \times (0.3V - 0.2V) = 10 \times 0.1V = 1V$.
If $V_1 = 0.2V + 0.1V_{noise}$ and $V_2 = 0.3V + 0.1V_{noise}$, then $V_{out} = 10 \times [(0.3V + 0.1V_{noise}) - (0.2V + 0.1V_{noise})] = 10 \times (0.1V) = 1V$. The common-mode noise is rejected.

**(Refer to Krishnaswamy, Chapter 5 for amplifier circuits)**

---

### **5. Instrumentation Amplifiers (In-Amps)** (CO3 - K4)

**Purpose:** To provide high-precision, high-gain amplification of differential signals, often with excellent common-mode rejection and high input impedance. They are crucial for amplifying low-level signals from transducers in noisy industrial environments.

**Key Features:**

*   **High Input Impedance:** Essential for not loading the source.
*   **High Common-Mode Rejection Ratio (CMRR):** Rejects noise that is common to both inputs.
*   **Precise and Adjustable Gain:** Easily set to a desired amplification.
*   **Low DC Offset and Drift:** Important for accurate measurements.

**Circuit Configuration (using 3 Op-Amps):**

A common instrumentation amplifier configuration uses three op-amps:

*   **Two non-inverting amplifiers** for the inputs, configured to amplify the differential signal and reject common-mode signals.
*   **One differential amplifier** stage to subtract the amplified common-mode components and provide the final amplified differential signal.

**Analysis (simplified for understanding):**

Let's analyze a typical three-op-amp instrumentation amplifier:

*   **Stage 1 (Op-Amps A and B):**
    *   Op-Amp A is configured as a non-inverting amplifier for $V_{in+}$ (with gain $1 + R_f/R_g$) and driven by $V_{in+}$.
    *   Op-Amp B is configured as a non-inverting amplifier for $V_{in-}$ (with gain $1 + R_f/R_g$) and driven by $V_{in-}$.
    *   Crucially, there is a resistor $R_{gain}$ connected between the non-inverting inputs of A and B.
    *   The output of A is $V_{outA} = V_{in+} (1 + R_f/R_{gain}) + V_{in-}(\text{common mode term})$.
    *   The output of B is $V_{outB} = V_{in-} (1 + R_f/R_{gain}) + V_{in+}(\text{common mode term})$.
    *   The common-mode rejection is achieved by careful design of these stages.

*   **Stage 2 (Op-Amp C):**
    *   Op-Amp C is configured as a differential amplifier with inputs from $V_{outA}$ and $V_{outB}$.
    *   The feedback resistors are typically set to unity gain for the differential stage (e.g., all four resistors are equal, say $R$).
    *   $V_{out} = (V_{outB} - V_{outA})$.

**Derivation of Gain (with ideal op-amps and careful resistor matching):**

1.  Current through $R_{gain}$: $I_{gain} = \frac{V_{in+} - V_{in-}}{R_{gain}}$.
2.  Current through feedback resistors of op-amp A and B: $I_{feedbackA} = I_{gain}$ and $I_{feedbackB} = I_{gain}$.
3.  Voltage at non-inverting input of A: $V_{+A} = V_{in+} + I_{feedbackB} R_f = V_{in+} + \frac{V_{in+} - V_{in-}}{R_{gain}} R_f$.
4.  Voltage at non-inverting input of B: $V_{+B} = V_{in-} - I_{feedbackA} R_f = V_{in-} - \frac{V_{in+} - V_{in-}}{R_{gain}} R_f$.
5.  Output of op-amp A (assuming op-amp A is a follower with gain for $V_{+A}$ or that the output is taken from a separate stage after A):
    Let's simplify by considering the output of the first stage as $V_{outA}$ and $V_{outB}$. The gain of the first stage (non-inverting amplifier part) is $G = 1 + R_f/R_{gain}$.
    $V_{outA} = G \times V_{+A}$ and $V_{outB} = G \times V_{+B}$.
    This is getting complex. Let's use a more standard approach that relates the gain to $R_{gain}$ and the feedback resistors $R_1$ in the second stage.

**Standard 3-Op-Amp Instrumentation Amplifier Gain:**

Consider the configuration where $R_f$ is between the output and inverting input of the first two op-amps (A and B), and $R_{gain}$ connects the non-inverting inputs. The second stage is a differential amplifier with unity gain.

*   Gain of non-inverting stages (A and B): $1 + R_f / R_{gain}$.
*   Output of A: $V_{outA} = (1 + R_f/R_{gain}) V_{in+} - (R_f/R_{gain}) V_{in-}$
*   Output of B: $V_{outB} = (1 + R_f/R_{gain}) V_{in-} - (R_f/R_{gain}) V_{in+}$

*   The third stage (differential amplifier) with unity gain ($R_1=R_f', R_2=R_g'$ in the differential amp section):
    $V_{out} = V_{outB} - V_{outA}$ (assuming the diff amp stage has unity gain for simplicity).
    $V_{out} = [(1 + R_f/R_{gain}) V_{in-} - (R_f/R_{gain}) V_{in+}] - [(1 + R_f/R_{gain}) V_{in+} - (R_f/R_{gain}) V_{in-}]$
    $V_{out} = (1 + R_f/R_{gain}) V_{in-} - (R_f/R_{gain}) V_{in+} - (1 + R_f/R_{gain}) V_{in+} + (R_f/R_{gain}) V_{in-}$
    $V_{out} = (1 + R_f/R_{gain} + R_f/R_{gain}) V_{in-} - (R_f/R_{gain} + 1 + R_f/R_{gain}) V_{in+}$
    $V_{out} = (1 + 2R_f/R_{gain}) V_{in-} - (1 + 2R_f/R_{gain}) V_{in+}$
    $V_{out} = (1 + 2R_f/R_{gain}) (V_{in-} - V_{in+})$

**Wait, this derivation seems off for the standard configuration.** Let's revisit the standard formulation.

**Corrected Analysis of a 3-Op-Amp Instrumentation Amplifier:**

*   **Stage 1 (Op-Amps A and B):**
    *   Op-Amp A: Input $V_{in+}$ is connected to a resistor $R_1$. The non-inverting input of A is connected to $V_{in+}$. The inverting input of A is connected to ground via $R_2$. The feedback resistor from output to inverting input is $R_3$.
    *   Op-Amp B: Input $V_{in-}$ is connected to a resistor $R_1'$. The non-inverting input of B is connected to $V_{in-}$. The inverting input of B is connected to ground via $R_2'$. The feedback resistor from output to inverting input is $R_3'$.
    *   A resistor $R_{gain}$ is connected between the output of A and the inverting input of B. This is where the adjustable gain comes in.

**Simpler, more common configuration and analysis:**

*   **Op-Amp A:** Acts as a buffer/gain stage for $V_{in+}$. Input $V_{in+}$ goes to a resistor $R_1$. The non-inverting input of A is connected to ground. The inverting input of A is connected via $R_2$ to ground, and via $R_f$ to the output. This looks like an inverting amplifier for $V_{in+}$ which is NOT correct.

**Let's use the configuration where $R_{gain}$ controls the gain directly:**

*   **Two non-inverting amplifiers:** Op-Amp A amplifies $V_{in+}$ with resistors $R_1$ and $R_f$. Op-Amp B amplifies $V_{in-}$ with resistors $R_1'$ and $R_f'$. The key is how these are connected and how $R_{gain}$ is used.

**The most common 3-Op-Amp configuration:**

1.  **Two non-inverting stages (Op-Amps A & B):**
    *   $V_{in+}$ is applied to Op-Amp A, which has its non-inverting input directly connected to $V_{in+}$. A resistor $R_1$ is connected from the output of A to its inverting input. A resistor $R_g$ is connected from the inverting input of A to ground.
    *   $V_{in-}$ is applied to Op-Amp B, which has its non-inverting input directly connected to $V_{in-}$. A resistor $R_1'$ is connected from the output of B to its inverting input. A resistor $R_g'$ is connected from the inverting input of B to ground.
    *   A resistor $R_{gain}$ is connected between the **inverting input of A** and the **inverting input of B**. This is unusual.

**Standard 3-Op-Amp Instrumentation Amplifier Gain Formula:**

Let's refer to standard texts for the gain formula. A common configuration uses two non-inverting amplifiers at the input stage and a differential amplifier at the output stage.

*   **First Stage (Op-Amps A & B):**
    *   $V_{in+}$ is applied to the non-inverting input of Op-Amp A.
    *   $V_{in-}$ is applied to the non-inverting input of Op-Amp B.
    *   A resistor $R_G$ is connected between the inverting inputs of A and B.
    *   For Op-Amp A, its inverting input is connected to its output via $R_F$ and to ground via $R_1$.
    *   For Op-Amp B, its inverting input is connected to its output via $R_F'$ and to ground via $R_1'$.
    *   **Crucially, $R_F = R_F'$ and $R_1 = R_1'$.**

    *   **Gain of Op-Amp A (non-inverting input):** $V_{outA} = (1 + R_F/R_1) V_{in+} + I_{in\_A} R_F$ where $I_{in\_A}$ is current into inverting input of A.
    *   **Ideal Op-Amp assumptions:** $V_{-A} = V_{+A} = V_{in+}$ and $V_{-B} = V_{+B} = V_{in-}$.
    *   Current through $R_G$: $I_G = (V_{outA} - V_{in+}) / R_F = (V_{outB} - V_{in-}) / R_F'$? No, this is incorrect.

Let's use the widely accepted gain formula directly. For the common 3-op-amp configuration:

**Gain $A_v = (1 + \frac{2R_f}{R_g})$**

Where:
*   $R_f$ are the feedback resistors for the first two op-amps.
*   $R_g$ is the gain-setting resistor between the inverting inputs of the first two op-amps.

**Why this gain?**
The first two stages act as buffers and provide high input impedance. The difference in voltage between the inputs ($V_{in+} - V_{in-}$) is applied across $R_g$. The current through $R_g$ creates a voltage drop across the feedback resistors ($R_f$) in the first stage. This voltage appears amplified at the output of the first stage and is then processed by the second stage (a differential amplifier with unity gain).

**Example:**
If $R_f = 10 k\Omega$ and $R_g = 1 k\Omega$, then $A_v = 1 + 2 \times (10/1) = 1 + 20 = 21$.
If $V_{in+} = 5mV$ and $V_{in-} = 2mV$, the differential input is $3mV$.
$V_{out} = 21 \times 3mV = 63mV$.

**Adjustable Gain:** The gain can be easily adjusted by changing the value of $R_g$. Increasing $R_g$ decreases the gain, and decreasing $R_g$ increases the gain.

**Common-Mode Rejection:** The high CMRR is achieved because the common-mode voltage appears at both non-inverting inputs of the first stage. With matched resistors, this common-mode voltage is amplified equally and then subtracted in the differential stage, effectively canceling it out. (Refer to Nise, Chapter 2 for introduction to feedback and signal amplification, and Ogata, Chapter 1 for overview of control system components which often include signal conditioning).

**(Refer to Patranabis, Chapter 3 for detailed amplifier configurations and signal conditioning)**

---

### **Practice Questions**

1.  **Q:** An inverting amplifier using an op-amp has $R_{in} = 2k\Omega$ and $R_f = 20k\Omega$. If the input voltage is $V_{in} = 0.1V$, what is the output voltage?
    **A:** $A_v = -R_f/R_{in} = -20/2 = -10$. $V_{out} = -10 \times 0.1V = -1V$.

2.  **Q:** A non-inverting amplifier has $R_1 = 5k\Omega$ and $R_f = 45k\Omega$. What is the voltage gain of the amplifier?
    **A:** $A_v = 1 + R_f/R_1 = 1 + 45/5 = 1 + 9 = 10$.

3.  **Q:** A current-to-voltage converter uses an op-amp with a feedback resistor $R_f = 1M\Omega$. If the input current is $I_{in} = -50nA$ (negative current flowing into the inverting terminal), what is the output voltage?
    **A:** $V_{out} = -I_{in} \times R_f = -(-50 \times 10^{-9}A) \times (1 \times 10^6 \Omega) = 50 \times 10^{-3}V = 50mV$.

4.  **Q:** A differential amplifier has $R_1 = R_2 = 10k\Omega$ and $R_f = R_g = 100k\Omega$. If $V_1 = 0.5V$ and $V_2 = 0.6V$, what is the output voltage?
    **A:** The gain is $R_f/R_1 = 100/10 = 10$. $V_{out} = 10 \times (V_2 - V_1) = 10 \times (0.6V - 0.5V) = 10 \times 0.1V = 1V$.

5.  **Q:** An instrumentation amplifier has $R_f = 50k\Omega$ and $R_g = 2k\Omega$. What is its voltage gain? If the differential input voltage is $10mV$, what is the output voltage?
    **A:** Gain $A_v = 1 + 2R_f/R_g = 1 + 2(50/2) = 1 + 2(25) = 1 + 50 = 51$.
    Output voltage $V_{out} = 51 \times 10mV = 510mV = 0.51V$.

---

### **Important Points to Remember**

*   **Ideal Op-Amp Assumptions** are crucial for analyzing basic op-amp circuits.
*   **Virtual Ground** is a key concept in inverting configurations.
*   **Input impedance** is very high for non-inverting amplifiers and instrumentation amplifiers.
*   **Gain setting** for amplifiers is determined by the ratio of feedback resistors.
*   **Differential amplifiers and Instrumentation amplifiers** are vital for rejecting common-mode noise.
*   **Instrumentation amplifiers** offer higher precision, gain, and CMRR compared to basic differential amplifiers.
*   Signal conditioning is essential for preparing raw sensor data for further processing in control systems. (CO3 - K4)
*   Understanding these basic op-amp circuits aligns with the objective of acquiring knowledge about signal conditioning circuits for industrial measurement systems. (CO3 - K4)

---

### **Alignment with Course Outcomes**

*   **CO1: To get basic knowledge about industrial measurement system and different elements involved in it. (Knowledge Level: K2)**
    *   This module provides the foundational understanding of signal conditioning elements (op-amps) that are crucial components of industrial measurement systems.
*   **CO3: Acquire knowledge about signal conditional circuits like amplifiers, filters, ADC, etc. for working industrial measurement systems (Knowledge Level: K4)**
    *   This entire topic focuses on essential signal conditioning circuits (amplifiers: I/V, inverting, non-inverting, differential, instrumentation amplifiers) which are directly addressed by this CO. The detailed analysis and understanding of their operation support the K4 knowledge level.

These notes cover the specified operational amplifier circuits and their applications in signal conditioning, directly addressing learning outcomes related to signal conditioning for industrial measurement systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
