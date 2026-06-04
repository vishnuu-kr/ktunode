---
title: "Sub- threshold conduction in MOS."
subject: "SOLID STATE DEVICES"
module: "Module 4: MOSFET scaling : Need for scaling, constant voltage scaling and constant field scaling."
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2bf"
status: "completed"
scrapedAt: "2026-05-23T17:47:39.459Z"
---
# Module 4: MOSFET Scaling & Sub-threshold Conduction in MOS

**Subject:** SOLID STATE DEVICES

**Topic:** Sub-threshold Conduction in MOS

**Learning Outcomes:**

*   Understand the phenomenon of sub-threshold conduction in MOS transistors.
*   Analyze the factors influencing sub-threshold current.
*   Relate sub-threshold conduction to MOSFET scaling.
*   Differentiate between constant voltage and constant field scaling in the context of sub-threshold behavior.

**Course Outcomes Alignment:**

*   **CO3:** Apply the concept of semiconductor physics to solve the current components in semiconductor devices. (Sub-threshold current is a specific current component.)
*   **CO4:** Analyze the response of semiconductor devices for different biasing conditions. (Sub-threshold conduction occurs at low gate-source voltages.)
*   **CO5:** Outline the effects of scaling in semiconductor devices. (Sub-threshold conduction becomes more pronounced with scaling.)

---

## 1. Introduction to Sub-threshold Conduction in MOS

In a MOSFET, the channel is formed when the gate-source voltage ($V_{GS}$) is sufficiently high to create an inversion layer of charge carriers at the semiconductor-insulator interface. The threshold voltage ($V_{TH}$) is defined as the minimum $V_{GS}$ required for significant channel formation and current flow.

However, even for $V_{GS} < V_{TH}$, a small but non-negligible current flows between the drain and source. This current is known as the **sub-threshold current** or **weak inversion current**.

**Key Concept:** The sub-threshold current arises from the diffusion of minority carriers from the source to the drain, driven by the concentration gradient created by the applied drain-source voltage ($V_{DS}$).

**Reference:** Sze, S.M., Lee, M.K. (2021). *Semiconductor Physics and Devices, 3ed, An Indian Adaptation.* (Chapter on MOS Transistors)

---

## 2. Physics of Sub-threshold Conduction

When $V_{GS}$ is below $V_{TH}$, the gate voltage is not strong enough to create a strong inversion layer. Instead, a **depletion region** is formed, and a small concentration of minority carriers exists at the interface.

*   **Band Bending:** As $V_{GS}$ increases (but remains below $V_{TH}$), the energy bands at the semiconductor-insulator interface bend upwards. This bending creates a potential well that can attract a small number of minority carriers.
*   **Boltzmann Statistics:** The concentration of minority carriers in this region is governed by Boltzmann statistics and is exponentially dependent on the surface potential ($\psi_s$).
*   **Diffusion Current:** When a drain-source voltage ($V_{DS}$) is applied, there is a potential difference between the source and drain terminals. This creates a concentration gradient of minority carriers across the channel region. Minority carriers diffuse from the source (higher concentration) to the drain (lower concentration), resulting in the sub-threshold current.

**Mathematical Formulation (Simplified):**

The sub-threshold current ($I_{DS,sub}$) is approximately given by:

$I_{DS,sub} \approx I_0 \exp\left(\frac{q(\psi_s - 2\phi_F)}{kT}\right) \left(1 - \exp\left(-\frac{qV_{DS}}{kT}\right)\right)$

Where:
*   $I_0$ is a pre-exponential factor related to device geometry and material properties.
*   $q$ is the elementary charge.
*   $\psi_s$ is the surface potential.
*   $\phi_F$ is the Fermi potential.
*   $k$ is Boltzmann's constant.
*   $T$ is the temperature.

A more common and useful expression relates the sub-threshold current to the gate-source voltage:

$I_{DS,sub} \approx I_{D0} \exp\left(\frac{qV_{GS}}{nkT}\right)$

Where:
*   $I_{D0}$ is a constant dependent on $V_{DS}$, device dimensions, and material properties, essentially the current at $V_{GS}=0$.
*   $n$ is the **sub-threshold swing factor** or **ideality factor**, which is typically between 1 and 2 for ideal MOSFETs. It represents how effectively the gate voltage controls the channel potential.

**Key Takeaway:** The sub-threshold current has an **exponential dependence** on $V_{GS}$. This is a crucial difference from the current in the strong inversion region, which is quadratic in $(V_{GS} - V_{TH})$.

**Reference:** Pierret, R. (1996). *Semiconductor device Fundamentals.* (Chapter on MOS Capacitors and Transistors)

---

## 3. Factors Affecting Sub-threshold Conduction

Several factors influence the magnitude of the sub-threshold current:

*   **Gate-Source Voltage ($V_{GS}$):** As $V_{GS}$ increases from below $V_{TH}$, the sub-threshold current increases exponentially.
*   **Drain-Source Voltage ($V_{DS}$):**
    *   For small $V_{DS}$, the current is primarily diffusion-driven and depends on the concentration gradient.
    *   As $V_{DS}$ increases, the channel near the drain becomes more depleted, and the electric field across the channel becomes more pronounced. This can lead to some DIBL (Drain-Induced Barrier Lowering) effect, further increasing the sub-threshold current.
*   **Temperature ($T$):** Higher temperatures increase the intrinsic carrier concentration and the thermal energy of carriers, leading to a larger sub-threshold current. The sub-threshold swing factor ($n$) is also temperature-dependent.
*   **Device Geometry:**
    *   **Channel Length ($L$):** Shorter channel lengths lead to increased sub-threshold conduction due to DIBL and reduced control of the gate over the channel.
    *   **Channel Width ($W$):** A wider channel will have a proportionally larger sub-threshold current.
*   **Substrate Bias ($V_{SB}$):** A more negative substrate bias (for NMOS) increases the threshold voltage and generally reduces the sub-threshold current by increasing the depletion charge.
*   **Oxide Thickness ($t_{ox}$):** A thinner oxide provides better electrostatic control by the gate, potentially reducing sub-threshold leakage. However, its primary impact is on the threshold voltage.
*   **Doping Concentration ($N_A$):** Higher substrate doping increases the threshold voltage and the depletion charge, which can influence the sub-threshold slope.

**Example:** Consider two NMOS transistors, one with a channel length of 1 µm and another with 0.1 µm, both operating at $V_{GS} < V_{TH}$. The shorter channel device will likely exhibit a significantly higher sub-threshold current due to enhanced DIBL.

**Reference:** Shur, M. (2019). *Physics of Semiconductor Devices.* (Chapter on MOSFETs)

---

## 4. Sub-threshold Swing ($S$)

The **sub-threshold swing ($S$)** is a crucial parameter that quantifies how rapidly the drain current turns on as $V_{GS}$ increases in the sub-threshold region. It is defined as the change in $V_{GS}$ required to increase the drain current by one decade.

$S = \frac{\partial V_{GS}}{\partial (\log_{10} I_{DS})}$

**Relationship with $n$:**

The sub-threshold swing is related to the ideality factor $n$ as:

$S = n \frac{kT}{q} \ln(10)$

At room temperature (300K), $\frac{kT}{q} \approx 26$ mV. Therefore:

$S \approx 26n \text{ mV/decade}$

*   **Ideal Sub-threshold Swing:** For an ideal MOS transistor, $n=1$, giving an ideal sub-threshold swing of approximately 60 mV/decade at room temperature. This means that a change of 60 mV in $V_{GS}$ results in a 10x change in drain current.
*   **Non-ideal Sub-threshold Swing:** In real devices, $n > 1$ due to various non-ideal effects like charge sharing, series resistance, and parasitic capacitances. This leads to a larger sub-threshold swing, meaning the turn-on is less abrupt.

**Impact of Sub-threshold Swing:**

*   A **lower** sub-threshold swing is desirable for energy-efficient digital circuits. It allows transistors to switch from off to on with a smaller change in gate voltage, reducing power consumption.
*   A **higher** sub-threshold swing indicates poorer gate control and can lead to increased leakage current and reduced noise margins.

**Reference:** Tsividis, Y. (2010). *Operation and Modelling of the MOS Transistor.* (Chapter on MOSFET Characteristics)

---

## 5. Sub-threshold Conduction and MOSFET Scaling

MOSFET scaling aims to reduce the size of transistors to improve performance and reduce power consumption. Two common scaling approaches are:

1.  **Constant Voltage Scaling:** In this approach, all voltages are scaled down by a factor of $s > 1$. Gate voltage, drain voltage, and threshold voltage are all reduced by $s$.
2.  **Constant Field Scaling:** In this approach, all linear dimensions are scaled down by a factor of $s$, and all voltages are also scaled down by $s$. This implies that the electric fields remain constant.

**Impact of Scaling on Sub-threshold Conduction:**

Scaling generally exacerbates the problem of sub-threshold leakage. Let's analyze the impact on the sub-threshold current:

*   **Constant Voltage Scaling:**
    *   If $V_{DD}$ and $V_{TH}$ are scaled down, the ratio $V_{GS}/(nkT)$ in the sub-threshold current equation might not change significantly. However, the device dimensions also need to be scaled.
    *   If $V_{TH}$ is reduced, the "off-state" gate voltage (e.g., $V_{GS} = 0$) is closer to $V_{TH}$, potentially leading to higher leakage.
    *   Reduced channel length ($L$) due to scaling can lead to increased DIBL, increasing sub-threshold current.
    *   Reduced oxide thickness ($t_{ox}$) improves gate control, which could help reduce leakage, but the reduced voltage can counteract this.

*   **Constant Field Scaling:**
    *   All dimensions ($L, W, t_{ox}$) are scaled down by $s$.
    *   All voltages ($V_{GS}, V_{DS}, V_{DD}, V_{TH}$) are scaled down by $s$.
    *   The sub-threshold current expression $I_{DS,sub} \approx I_{D0} \exp\left(\frac{qV_{GS}}{nkT}\right)$ shows that the scaling of $V_{GS}$ by $s$ reduces the exponential term.
    *   However, $I_{D0}$ is related to device transconductance and channel dimensions. When dimensions are scaled by $s$, currents generally scale by $1/s$.
    *   More importantly, the sub-threshold swing ($S \approx 26n$ mV/decade) is **independent of voltage scaling** if $n$ remains constant. This means that the *steepness* of the turn-on does not improve.
    *   With scaled-down voltages, the transistors operate closer to their sub-threshold region, meaning a larger fraction of the transistors are in the weak inversion state for a given $V_{GS}$ relative to $V_{TH}$.

**DIBL (Drain-Induced Barrier Lowering) and Short Channel Effects:**

As transistors are scaled to shorter channel lengths, the drain voltage starts to influence the threshold voltage. This phenomenon, DIBL, causes the threshold voltage to decrease as $V_{DS}$ increases. In the sub-threshold region, DIBL can significantly increase leakage current because the "off-state" barrier is lowered by the drain potential.

**Impact on Power Consumption:**

*   **Dynamic Power:** Scaling down voltages ($V_{DD}$) reduces dynamic power ($P_{dyn} \propto C V_{DD}^2 f$) significantly.
*   **Static Power (Leakage Power):** Sub-threshold leakage contributes to static power. As devices are scaled, the ratio of sub-threshold leakage to operating current can increase, becoming a dominant factor in overall power consumption.

**Important Point:** The ideal sub-threshold swing of 60 mV/decade is a theoretical limit. Achieving this in scaled-down devices is challenging, and non-ideal swings lead to higher leakage currents, impacting the "off-state" power consumption of integrated circuits.

**Reference:** Neamen, D. A. (2017). *Semiconductor Physics and Devices.* (Chapter on MOS Field-Effect Transistors)
**Reference:** Sze, S.M. (2015). *Physics of Semiconductor Devices.* (Chapter on MOS Devices)

---

## 6. Practice Questions and Answers

**Question 1:** What is the fundamental mechanism responsible for current flow in a MOSFET when the gate-source voltage ($V_{GS}$) is below the threshold voltage ($V_{TH}$)?

**Answer:** The fundamental mechanism is the diffusion of minority carriers from the source to the drain, driven by the concentration gradient established by the applied drain-source voltage ($V_{DS}$), under conditions of weak inversion.

**Question 2:** How does the sub-threshold current ($I_{DS,sub}$) depend on the gate-source voltage ($V_{GS}$) in the sub-threshold region?

**Answer:** The sub-threshold current has an exponential dependence on $V_{GS}$: $I_{DS,sub} \approx I_{D0} \exp\left(\frac{qV_{GS}}{nkT}\right)$.

**Question 3:** Define the sub-threshold swing ($S$) and state its typical value for an ideal MOSFET at room temperature.

**Answer:** The sub-threshold swing ($S$) is the change in $V_{GS}$ required to increase the drain current by one decade. For an ideal MOSFET at room temperature (300K), $S \approx 60$ mV/decade.

**Question 4:** Explain how constant field scaling affects the sub-threshold swing.

**Answer:** Constant field scaling scales down both dimensions and voltages by the same factor. If the sub-threshold swing factor ($n$) remains constant, the sub-threshold swing ($S$) remains unchanged, as $S \approx 26n$ mV/decade. This means that while the operating voltages are reduced, the steepness of the transistor's turn-on does not improve, potentially leading to increased relative leakage.

**Question 5:** What is DIBL and how does it impact sub-threshold conduction, especially in scaled-down devices?

**Answer:** DIBL (Drain-Induced Barrier Lowering) is the phenomenon where the drain voltage influences the threshold voltage of the MOSFET, causing $V_{TH}$ to decrease as $V_{DS}$ increases. In scaled-down devices with shorter channel lengths, DIBL becomes more pronounced. This lowers the energy barrier at the source-channel junction, allowing more carriers to flow from the source to the drain even at low $V_{GS}$, thus increasing the sub-threshold leakage current.

---

## 7. Important Points to Remember

*   **Sub-threshold current** is the leakage current that flows when $V_{GS} < V_{TH}$.
*   It arises from the **diffusion of minority carriers** under weak inversion conditions.
*   The sub-threshold current has an **exponential dependence** on $V_{GS}$.
*   The **sub-threshold swing ($S$)** quantifies the abruptness of the turn-on and is ideally around 60 mV/decade at room temperature.
*   Scaling down MOSFETs generally leads to **increased sub-threshold leakage** due to reduced dimensions and operating voltages, and effects like DIBL.
*   A lower sub-threshold swing is desirable for **low-power designs**.
*   Sub-threshold leakage contributes to **static power consumption**, which becomes a significant concern in modern scaled-down technologies.
*   **Constant field scaling** preserves electric fields but does not inherently improve the sub-threshold swing if the ideality factor $n$ remains constant.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 8. Further Reading and References

*   **Semiconductor device Fundamentals by Robert Pierret (Pearson Education, 1/e, 1996):** Excellent for fundamental understanding of MOS device physics.
*   **Physics of Semiconductor Devices by Michael Shur (Pearson Education, 1/e, 2019):** Provides a modern perspective on device physics and scaling effects.
*   **Semiconductor Physics and Devices, 3ed, An Indian Adaptation by S.M. Sze, M.K. Lee (Wiley, 3/e, 2021):** A comprehensive text covering all aspects of semiconductor devices, including detailed discussions on MOSFETs.
*   **Operation and Modelling of the MOS Transistor by Yannis Tsividis (Oxford University Press, 3/e, 2010):** A specialized text focusing on MOSFET operation and modeling, very useful for in-depth analysis.
*   **Semiconductor Physics and Devices by Neamen (McGraw Hill, 4/e, 2017):** Another strong contender for understanding device physics and scaling.
*   **Physics of Semiconductor Devices by Sze S.M (John Wiley, 3/e, 2015):** A classic and highly respected reference.

These notes provide a comprehensive overview of sub-threshold conduction in MOS transistors, its dependence on various parameters, and its significance in the context of MOSFET scaling. Understanding this phenomenon is critical for analyzing the performance and power consumption of modern integrated circuits.