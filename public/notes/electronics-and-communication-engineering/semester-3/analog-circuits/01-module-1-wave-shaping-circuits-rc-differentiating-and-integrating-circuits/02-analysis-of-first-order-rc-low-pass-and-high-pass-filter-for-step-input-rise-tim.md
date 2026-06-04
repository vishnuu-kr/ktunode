---
title: "Analysis of First order RC low pass and high pass filter for step input -rise time, band width"
subject: "ANALOG CIRCUITS"
module: "Module 1: Wave Shaping Circuits: RC differentiating and integrating circuits"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2df"
status: "completed"
scrapedAt: "2026-05-23T17:44:04.064Z"
---
# ANALOG CIRCUITS: Module 1 - Wave Shaping Circuits: RC Differentiating and Integrating Circuits

## Topic: Analysis of First Order RC Low Pass and High Pass Filters for Step Input - Rise Time, Bandwidth

---

### **1. Introduction to RC Filters**

*   **Concept:** RC filters are simple passive circuits used for frequency selective signal processing. They consist of a resistor (R) and a capacitor (C).
*   **Functionality:** They attenuate or pass signals based on their frequency.
*   **Types:**
    *   **Low Pass Filter (LPF):** Allows low-frequency signals to pass through while attenuating high-frequency signals.
    *   **High Pass Filter (HPF):** Allows high-frequency signals to pass through while attenuating low-frequency signals.
*   **Order of Filters:** First-order filters have a single reactive component (one capacitor or one inductor, here we focus on RC circuits).
*   **Applications:** Signal filtering, noise reduction, smoothing, waveform shaping (as per CO1).

---

### **2. First-Order RC Low Pass Filter (LPF)**

#### 2.1 Circuit Configuration

*   **Description:** In an RC LPF, the output voltage is taken across the capacitor.
*   **Schematic:**
    ```
         Vin ---- R ----+---- Vout
                        |
                        C
                        |
                       GND
    ```
*   **Key Components:** Resistor (R), Capacitor (C), Input Voltage Source (Vin), Output Voltage (Vout).

#### 2.2 Circuit Analysis for Step Input

*   **Step Input:** A voltage that changes instantaneously from one level to another (e.g., from 0V to V volts at t=0).
    $$ V_{in}(t) = V_u(t) $$
    where $V_u(t)$ is the unit step function.
*   **Initial Conditions:** Assuming the capacitor is initially uncharged, $V_C(0^-) = 0$.
*   **Transient Response:** The behavior of the circuit immediately after the step input is applied.
*   **Governing Equation:** Using Kirchhoff's Voltage Law (KVL):
    $$ V_{in}(t) = i(t)R + V_C(t) $$
    Since $i(t) = C \frac{dV_C(t)}{dt}$:
    $$ V_{in}(t) = RC \frac{dV_C(t)}{dt} + V_C(t) $$
    For $t \ge 0$, $V_{in}(t) = V$:
    $$ V = RC \frac{dV_C(t)}{dt} + V_C(t) $$
*   **Solution for Vout (VC(t)):** This is a first-order linear differential equation. The solution for $V_C(t)$ is:
    $$ V_{out}(t) = V_C(t) = V (1 - e^{-t/RC}) \quad \text{for } t \ge 0 $$
    This equation describes the charging of the capacitor towards the input voltage $V$.

#### 2.3 Time Constant ($\tau$)

*   **Definition:** The time constant ($\tau$) is a measure of how quickly the capacitor charges or discharges. For an RC circuit, $\tau = RC$.
*   **Significance:**
    *   At $t = \tau$, the capacitor voltage reaches approximately 63.2% of its final value ($V(1 - e^{-1}) \approx 0.632V$).
    *   After $5\tau$, the capacitor is considered to be almost fully charged (approximately 99.3% of the final value).
*   **Impact on Response:** A smaller time constant leads to a faster response, and a larger time constant leads to a slower response.

#### 2.4 Rise Time ($t_r$)

*   **Definition:** The time it takes for the output voltage to rise from 10% of its final value to 90% of its final value. This is a common metric for characterizing the speed of a system's response.
*   **Calculation:**
    *   At 10% of final value ($0.1V$):
        $$ 0.1V = V (1 - e^{-t_1/RC}) $$
        $$ 0.1 = 1 - e^{-t_1/RC} $$
        $$ e^{-t_1/RC} = 0.9 $$
        $$ -t_1/RC = \ln(0.9) $$
        $$ t_1 = -RC \ln(0.9) \approx 0.105RC $$
    *   At 90% of final value ($0.9V$):
        $$ 0.9V = V (1 - e^{-t_2/RC}) $$
        $$ 0.9 = 1 - e^{-t_2/RC} $$
        $$ e^{-t_2/RC} = 0.1 $$
        $$ -t_2/RC = \ln(0.1) $$
        $$ t_2 = -RC \ln(0.1) \approx 2.303RC $$
    *   Rise Time ($t_r$) = $t_2 - t_1$:
        $$ t_r = -RC \ln(0.1) - (-RC \ln(0.9)) = RC (\ln(0.9) - \ln(0.1)) $$
        $$ t_r = RC \ln(0.9 / 0.1) = RC \ln(9) $$
        $$ t_r \approx 2.197RC $$
    *   **Approximation:** Often, the rise time is approximated as $t_r \approx 2.2\tau$ or $t_r \approx 2.2RC$.
*   **Significance:** A faster rise time indicates a quicker response to the input step.

#### 2.5 Bandwidth (BW)

*   **Definition:** The range of frequencies over which the filter operates effectively. For a low-pass filter, it is the range of frequencies from DC up to the **cutoff frequency**.
*   **Cutoff Frequency ($f_c$):** The frequency at which the output power is half the input power, or the output voltage magnitude is $1/\sqrt{2}$ (approximately 0.707) of the input voltage magnitude. This is also known as the **-3dB frequency**.
*   **Analysis in Frequency Domain (Transfer Function):**
    The transfer function $H(j\omega)$ is the ratio of the output voltage to the input voltage in the phasor domain:
    $$ H(j\omega) = \frac{V_{out}(j\omega)}{V_{in}(j\omega)} = \frac{Z_C}{Z_R + Z_C} = \frac{1/(j\omega C)}{R + 1/(j\omega C)} $$
    $$ H(j\omega) = \frac{1}{1 + j\omega RC} $$
    The magnitude of the transfer function is:
    $$ |H(j\omega)| = \frac{1}{|1 + j\omega RC|} = \frac{1}{\sqrt{1^2 + (\omega RC)^2}} = \frac{1}{\sqrt{1 + (\omega \tau)^2}} $$
*   **Finding the Cutoff Frequency:**
    At the cutoff frequency $\omega_c$, $|H(j\omega_c)| = \frac{1}{\sqrt{2}}$:
    $$ \frac{1}{\sqrt{1 + (\omega_c \tau)^2}} = \frac{1}{\sqrt{2}} $$
    $$ 1 + (\omega_c \tau)^2 = 2 $$
    $$ (\omega_c \tau)^2 = 1 $$
    $$ \omega_c \tau = 1 $$
    $$ \omega_c = \frac{1}{\tau} = \frac{1}{RC} \text{ rad/s} $$
    In Hertz:
    $$ f_c = \frac{\omega_c}{2\pi} = \frac{1}{2\pi RC} \text{ Hz} $$
*   **Bandwidth (BW) for LPF:** For an ideal low-pass filter, the bandwidth is equal to the cutoff frequency.
    $$ BW = f_c = \frac{1}{2\pi RC} $$
*   **Relationship between Rise Time and Bandwidth:**
    $$ t_r \approx 2.2RC $$
    $$ BW = \frac{1}{2\pi RC} $$
    Therefore,
    $$ BW \approx \frac{2.2}{2\pi t_r} \approx \frac{0.35}{t_r} $$
    This inverse relationship is crucial: a faster rise time (faster system) implies a wider bandwidth, and vice-versa.

---

### **3. First-Order RC High Pass Filter (HPF)**

#### 3.1 Circuit Configuration

*   **Description:** In an RC HPF, the output voltage is taken across the resistor.
*   **Schematic:**
    ```
         Vin ----+---- R ---- Vout
                |
                C
                |
               GND
    ```
*   **Key Components:** Resistor (R), Capacitor (C), Input Voltage Source (Vin), Output Voltage (Vout).

#### 3.2 Circuit Analysis for Step Input

*   **Step Input:** $V_{in}(t) = V_u(t)$ for $t \ge 0$.
*   **Initial Conditions:** Assuming the capacitor is initially uncharged, $V_C(0^-) = 0$. At $t=0^+$, the capacitor acts like an open circuit for a brief moment due to its stored charge (or lack thereof).
*   **Transient Response:** The output voltage will initially be zero and then rise as the capacitor charges.
*   **Governing Equation:** Using KVL:
    $$ V_{in}(t) = V_C(t) + i(t)R $$
    Since $i(t) = C \frac{dV_C(t)}{dt}$:
    $$ V_{in}(t) = V_C(t) + RC \frac{dV_C(t)}{dt} $$
    The output voltage is $V_{out}(t) = i(t)R = CR \frac{dV_C(t)}{dt}$.
    Alternatively, from the node voltage at Vout:
    $$ i_R(t) = \frac{V_{out}(t)}{R} $$
    $$ i_C(t) = C \frac{d(V_{in}(t) - V_{out}(t))}{dt} $$
    Since $i_R(t) = i_C(t)$:
    $$ \frac{V_{out}(t)}{R} = C \frac{d(V_{in}(t) - V_{out}(t))}{dt} $$
    $$ \frac{V_{out}(t)}{R} = C \frac{dV_{in}(t)}{dt} - C \frac{dV_{out}(t)}{dt} $$
    $$ \frac{V_{out}(t)}{R} + C \frac{dV_{out}(t)}{dt} = C \frac{dV_{in}(t)}{dt} $$
    Multiplying by $R$:
    $$ V_{out}(t) + RC \frac{dV_{out}(t)}{dt} = RC \frac{dV_{in}(t)}{dt} $$
    Let $V_{in}(t) = V$ (a constant for $t \ge 0$). Then $\frac{dV_{in}(t)}{dt} = 0$.
    $$ V_{out}(t) + \tau \frac{dV_{out}(t)}{dt} = 0 $$
    where $\tau = RC$. This is a homogeneous first-order linear differential equation.
*   **Solution for Vout (Vout(t)):**
    The general solution is $V_{out}(t) = A e^{-t/\tau}$.
    We need to find the constant $A$ using initial conditions.
    At $t=0^+$, $V_{in}(0^+) = V$, but $V_C(0^+) = 0$ (initially uncharged). The voltage across the resistor $V_{out}(0^+)$ is the voltage difference across the resistor. Since the capacitor is initially an open circuit to DC, no current flows initially, so $V_{out}(0^+) = i(0^+)R = 0$.
    Substituting $V_{out}(0^+) = 0$ into the general solution:
    $$ 0 = A e^0 \Rightarrow A = 0 $$
    This seems incorrect. Let's re-evaluate the current at $t=0^+$.
    At $t=0^+$, $V_{in}(0^+) = V$. The capacitor, not having been charged, will act as a short circuit to the instantaneous change. However, the voltage across a capacitor cannot change instantaneously. The voltage across the capacitor $V_C(t)$ is continuous. $V_C(0^-)=0$. Thus, $V_C(0^+)=0$.
    The KVL is $V_{in}(t) = V_C(t) + V_{out}(t)$.
    At $t=0^+$, $V_{in}(0^+) = V$. So, $V = V_C(0^+) + V_{out}(0^+)$.
    Since $V_C(0^+) = 0$, then $V_{out}(0^+) = V$.
    Now, using the general solution $V_{out}(t) = A e^{-t/\tau}$ and the initial condition $V_{out}(0^+) = V$:
    $$ V = A e^0 \Rightarrow A = V $$
    Therefore, the solution for the output voltage is:
    $$ V_{out}(t) = V e^{-t/RC} \quad \text{for } t \ge 0 $$
    This describes the decay of voltage across the resistor as the capacitor charges. The output is an impulse-like spike at the moment of the step input.

#### 3.3 Time Constant ($\tau$)

*   **Definition:** Same as for LPF, $\tau = RC$.
*   **Significance:** Determines the rate at which the output voltage decays to zero after the initial spike. A smaller $\tau$ means a faster decay.

#### 3.4 Rise Time ($t_r$)

*   **Definition:** For an HPF, the "rise time" isn't typically defined in the same way as for LPFs because the output starts at its peak value ($V$) and decays.
*   **Alternative Interpretation:** If we consider the duration the output stays above a certain percentage of its initial peak, it relates to the time constant. For example, the time it takes to decay from $V$ to $0.1V$ or $0.9V$.
    *   Time to decay to 90% of peak ($0.9V$):
        $$ 0.9V = V e^{-t_1/RC} $$
        $$ 0.9 = e^{-t_1/RC} $$
        $$ t_1 = -RC \ln(0.9) \approx 0.105RC $$
    *   Time to decay to 10% of peak ($0.1V$):
        $$ 0.1V = V e^{-t_2/RC} $$
        $$ 0.1 = e^{-t_2/RC} $$
        $$ t_2 = -RC \ln(0.1) \approx 2.303RC $$
    *   Duration to decay from 90% to 10%: $t_2 - t_1 \approx 2.303RC - 0.105RC = 2.198RC \approx 2.2RC$. This is the same *duration* as the rise time for an LPF.

#### 3.5 Bandwidth (BW)

*   **Definition:** For an HPF, the bandwidth is the range of frequencies from the cutoff frequency up to infinity.
*   **Transfer Function:**
    $$ H(j\omega) = \frac{V_{out}(j\omega)}{V_{in}(j\omega)} = \frac{Z_R}{Z_R + Z_C} = \frac{R}{R + 1/(j\omega C)} $$
    $$ H(j\omega) = \frac{j\omega RC}{1 + j\omega RC} $$
    The magnitude of the transfer function is:
    $$ |H(j\omega)| = \frac{|j\omega RC|}{|1 + j\omega RC|} = \frac{\omega RC}{\sqrt{1 + (\omega RC)^2}} = \frac{\omega \tau}{\sqrt{1 + (\omega \tau)^2}} $$
*   **Finding the Cutoff Frequency:**
    At the cutoff frequency $\omega_c$, $|H(j\omega_c)| = \frac{1}{\sqrt{2}}$:
    $$ \frac{\omega_c \tau}{\sqrt{1 + (\omega_c \tau)^2}} = \frac{1}{\sqrt{2}} $$
    Squaring both sides:
    $$ \frac{(\omega_c \tau)^2}{1 + (\omega_c \tau)^2} = \frac{1}{2} $$
    $$ 2(\omega_c \tau)^2 = 1 + (\omega_c \tau)^2 $$
    $$ (\omega_c \tau)^2 = 1 $$
    $$ \omega_c \tau = 1 $$
    $$ \omega_c = \frac{1}{\tau} = \frac{1}{RC} \text{ rad/s} $$
    In Hertz:
    $$ f_c = \frac{\omega_c}{2\pi} = \frac{1}{2\pi RC} \text{ Hz} $$
*   **Bandwidth (BW) for HPF:** The bandwidth is theoretically infinite. However, the **-3dB bandwidth** is defined as the range of frequencies above the cutoff frequency.
    $$ BW = \infty $$
    The cutoff frequency $f_c$ is the lower limit of the passband.

---

### **4. Key Concepts and Definitions Summary**

*   **Time Constant ($\tau$):** $\tau = RC$. The characteristic time for charging/discharging of the capacitor.
*   **Cutoff Frequency ($f_c$):** $f_c = \frac{1}{2\pi RC}$. The frequency where the output voltage magnitude drops to $1/\sqrt{2}$ (approx. 0.707) of its maximum value.
*   **Rise Time ($t_r$) for LPF:** Time for output to rise from 10% to 90% of its final value. $t_r \approx 2.2 RC$.
*   **Bandwidth (BW) for LPF:** The frequency range from DC to $f_c$. $BW = f_c$.
*   **Bandwidth (BW) for HPF:** The frequency range from $f_c$ to infinity. The lower cutoff frequency is $f_c$.
*   **Inverse Relationship:** $BW \approx 0.35 / t_r$.

---

### **5. Relation to Course Outcomes**

*   **CO1: Design wave shaping circuits using first order RC network and diodes.**
    *   This topic directly addresses the design aspect of RC networks for shaping (filtering) waveforms. Understanding LPF and HPF behavior for step inputs is fundamental to designing circuits that either pass or block certain frequency components, thus shaping the output signal.
    *   **Knowledge Level: K3 (Apply):** Students can apply the formulas for $\tau$, $f_c$, and $t_r$ to select appropriate R and C values for a desired filtering or shaping characteristic.

---

### **6. Important Points to Remember**

*   **LPF Output:** Taken across the capacitor. Output follows the input but is smoothed; slow to respond to rapid changes.
*   **HPF Output:** Taken across the resistor. Output is an impulse-like spike for a step input; it blocks DC and low frequencies.
*   **Time Constant:** The product $RC$ is the critical parameter for both speed of response (rise time) and frequency response (cutoff frequency).
*   **LPF:** Passes low frequencies, attenuates high frequencies. Has a finite bandwidth up to $f_c$.
*   **HPF:** Passes high frequencies, attenuates low frequencies. Has a lower cutoff frequency $f_c$.
*   **Step Response:** The response to a sudden change in input voltage is characterized by how quickly the output voltage reaches its final value (rise time for LPF) or decays from its initial peak (for HPF).

---

### **7. Examples and Problem Solving**

**Example 1: LPF Design**

A first-order RC low-pass filter needs to have a cutoff frequency of 1 kHz and a rise time of approximately 0.2 ms.
*   **Find R and C:**
    *   From $f_c = \frac{1}{2\pi RC}$, we get $RC = \frac{1}{2\pi f_c} = \frac{1}{2\pi (1000)} \approx 1.59 \times 10^{-4}$ seconds.
    *   From $t_r \approx 2.2 RC$, we get $RC = \frac{t_r}{2.2} = \frac{0.2 \times 10^{-3}}{2.2} \approx 0.909 \times 10^{-4}$ seconds.
    *   **Discrepancy:** There's a slight conflict. The cutoff frequency and rise time are directly related via the time constant. Let's use one to determine the time constant and check the other.
    *   Using $f_c = 1$ kHz: $\tau = \frac{1}{2\pi f_c} = \frac{1}{2\pi (1000)} \approx 0.159$ ms.
        The corresponding rise time would be $t_r \approx 2.2 \tau \approx 2.2 \times 0.159 \text{ ms} \approx 0.35 \text{ ms}$.
    *   Using $t_r = 0.2$ ms: $\tau = \frac{t_r}{2.2} = \frac{0.2 \text{ ms}}{2.2} \approx 0.0909$ ms.
        The corresponding cutoff frequency would be $f_c = \frac{1}{2\pi \tau} = \frac{1}{2\pi (0.0909 \times 10^{-3})} \approx 1.76 \text{ kHz}$.
    *   **Conclusion:** You cannot simultaneously achieve *exactly* 1 kHz cutoff and 0.2 ms rise time with a simple first-order RC filter. You would need to choose one specification to prioritize.
    *   Let's prioritize $f_c = 1$ kHz. Then $\tau = 0.159$ ms. We can choose $C = 0.1 \mu F$. Then $R = \frac{\tau}{C} = \frac{0.159 \times 10^{-3}}{0.1 \times 10^{-6}} \approx 1590 \Omega$.
        With $R=1.59k\Omega$ and $C=0.1\mu F$:
        $f_c = \frac{1}{2\pi (1.59k\Omega)(0.1\mu F)} \approx 1 \text{ kHz}$
        $t_r \approx 2.2 \times (1.59k\Omega)(0.1\mu F) \approx 0.35 \text{ ms}$.

**Example 2: HPF Analysis**

An RC high-pass filter has $R = 10 k\Omega$ and $C = 0.01 \mu F$. A step voltage of 5V is applied at $t=0$.
*   **Calculate the time constant:**
    $\tau = RC = (10 \times 10^3 \Omega) \times (0.01 \times 10^{-6} F) = 0.1 \times 10^{-3} s = 0.1$ ms.
*   **Calculate the cutoff frequency:**
    $f_c = \frac{1}{2\pi RC} = \frac{1}{2\pi (0.1 \times 10^{-3})} \approx 1591.5 \text{ Hz} \approx 1.59 \text{ kHz}$.
*   **Determine the output voltage as a function of time:**
    $V_{out}(t) = V e^{-t/\tau} = 5 e^{-t/(0.1 \text{ ms})} V$.
*   **Find the output voltage at $t=0.05$ ms:**
    $V_{out}(0.05 \text{ ms}) = 5 e^{-0.05 \text{ ms} / 0.1 \text{ ms}} = 5 e^{-0.5} \approx 5 \times 0.6065 = 3.0325 V$.
*   **Find the time it takes for the output to drop to 1V:**
    $1 = 5 e^{-t/0.1 \text{ ms}}$
    $0.2 = e^{-t/0.1 \text{ ms}}$
    $\ln(0.2) = -t/0.1 \text{ ms}$
    $t = -0.1 \text{ ms} \times \ln(0.2) \approx -0.1 \text{ ms} \times (-1.609) \approx 0.1609 \text{ ms}$.

---

### **8. Practice Questions**

**Question 1:**
An RC low-pass filter has a time constant of $100 \mu s$.
a) What is its cutoff frequency?
b) What is its approximate rise time?
c) What is the output voltage at $t=200 \mu s$ if a 10V step is applied?

**Question 2:**
A first-order RC high-pass filter is designed with $R = 47 k\Omega$ and $C = 0.1 \mu F$.
a) Calculate the time constant and the cutoff frequency.
b) If a 5V step input is applied, what is the initial output voltage?
c) What is the output voltage at a time equal to twice the time constant?

**Question 3:**
You are designing a filter circuit. You need a circuit that passes frequencies above 5 kHz and has a rise time of no more than $50 \mu s$. Can a single-order RC network meet both requirements simultaneously? Explain your reasoning.

---

### **9. Answers to Practice Questions**

**Answer 1:**
a) $\tau = 100 \mu s = 100 \times 10^{-6} s$.
   $f_c = \frac{1}{2\pi \tau} = \frac{1}{2\pi (100 \times 10^{-6})} \approx 1591.5 Hz$.
b) $t_r \approx 2.2 \tau = 2.2 \times 100 \mu s = 220 \mu s$.
c) $V_{out}(t) = V(1 - e^{-t/\tau})$.
   $V_{out}(200 \mu s) = 10 (1 - e^{-200 \mu s / 100 \mu s}) = 10 (1 - e^{-2}) \approx 10 (1 - 0.1353) = 10 \times 0.8647 = 8.647 V$.

**Answer 2:**
a) $\tau = RC = (47 \times 10^3 \Omega) \times (0.1 \times 10^{-6} F) = 4.7 \times 10^{-3} s = 4.7$ ms.
   $f_c = \frac{1}{2\pi \tau} = \frac{1}{2\pi (4.7 \times 10^{-3})} \approx 33.98 Hz$.
b) For a step input of 5V to an HPF, the initial output voltage is equal to the input voltage step, so $V_{out}(0^+) = 5V$.
c) $V_{out}(t) = V e^{-t/\tau}$.
   At $t = 2\tau$: $V_{out}(2\tau) = 5 e^{-2\tau/\tau} = 5 e^{-2} \approx 5 \times 0.1353 = 0.6765 V$.

**Answer 3:**
Let's check the requirements separately:
*   **For $f_c \ge 5$ kHz:**
    $\tau = \frac{1}{2\pi f_c}$. To have $f_c \ge 5$ kHz, we need $\tau \le \frac{1}{2\pi (5000)} \approx 31.8 \mu s$.
*   **For $t_r \le 50 \mu s$:**
    $t_r \approx 2.2 \tau$. To have $t_r \le 50 \mu s$, we need $\tau \le \frac{50 \mu s}{2.2} \approx 22.7 \mu s$.

Since the requirement for rise time ($ \tau \le 22.7 \mu s$) is more stringent than the requirement for cutoff frequency ($\tau \le 31.8 \mu s$), a single-order RC network **can** meet both requirements simultaneously. If we choose a time constant $\tau \le 22.7 \mu s$, both conditions will be satisfied. For instance, choosing $\tau = 20 \mu s$:
$f_c = \frac{1}{2\pi (20 \mu s)} \approx 7.96 kHz$ (which is $> 5 kHz$)
$t_r = 2.2 \times 20 \mu s = 44 \mu s$ (which is $< 50 \mu s$)

---
This concludes the study notes for the analysis of first-order RC LPF and HPF for step input, covering rise time and bandwidth. These concepts are foundational for understanding signal conditioning and filter design in analog circuits, directly supporting CO1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
