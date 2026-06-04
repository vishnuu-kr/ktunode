---
title: "current setting and time setting - Numerical Problems - Differential relays: Operating and restraining characteristics"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 1: Introduction : Need for protective systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36578"
status: "completed"
scrapedAt: "2026-05-23T16:25:48.791Z"
---
# Digital Protection of Power Systems: Module 1 - Introduction: Need for Protective Systems

## Topic: Current Setting and Time Setting - Numerical Problems - Differential Relays: Operating and Restraining Characteristics

---

### 1. Introduction: Need for Protective Systems

Protective relaying in power systems is crucial for ensuring the reliable and safe operation of the electrical network. Its primary objectives include:

*   **Fault Detection:** Quickly identifying abnormal operating conditions (faults) such as short circuits, open circuits, and overloads.
*   **Fault Isolation:** Rapidly disconnecting the faulty section of the power system to prevent further damage to equipment and to maintain system stability.
*   **System Stability:** Minimizing the duration of faults to prevent cascading failures and maintain the synchronism of generators.
*   **Equipment Protection:** Safeguarding expensive and critical equipment like generators, transformers, busbars, and transmission lines from damage during fault conditions.
*   **Personnel Safety:** Protecting human lives by ensuring that faulty sections are isolated from the power supply.

**Textbook References:**
*   Johns & Salman, Chapter 1: Introduction to Protective Relaying
*   Phadke & Thorpe, Chapter 1: Introduction to Computer Relaying
*   Badri Ram & Viswakarma, Chapter 1: Introduction to Protective Relaying

---

### 2. Current Setting and Time Setting

Modern protective relays, especially numerical relays, offer sophisticated control over their operating parameters. Two fundamental settings that govern their behavior are:

#### 2.1. Current Setting (Pickup Current)

*   **Definition:** The minimum current magnitude at which the relay starts to operate or "pick up." Below this value, the relay is considered to be in its non-operating state.
*   **Purpose:**
    *   To avoid unwanted operation during normal load conditions, which might be higher than the rated current.
    *   To distinguish between different types of faults or fault locations.
    *   To coordinate with other protective devices (e.g., fuses, circuit breakers).
*   **Setting Parameter:** Typically expressed as a percentage of the relay's rated current or as a specific current value (e.g., 0.5A, 1A).

#### 2.2. Time Setting (Time Multiplier Setting - TMS)

*   **Definition:** A factor used to adjust the operating time of an inverse time overcurrent relay. The actual operating time is proportional to the TMS.
*   **Purpose:**
    *   **Discrimination:** To ensure that in a series of protective devices, the closest device to the fault operates first, while others upstream delay their operation. This is achieved by setting different TMS values for different relays.
    *   **Coordination:** To allow sufficient time for circuit breakers to operate and clear the fault before the next protective device attempts to do so.
*   **Relationship with Operating Time:** The operating time is inversely proportional to the current magnitude and directly proportional to the TMS. A higher TMS value will result in a longer operating time for the same fault current.

**Key Concept: Inverse Time Characteristic**
Most overcurrent relays exhibit an inverse time characteristic, meaning the higher the fault current, the shorter the operating time. This is crucial for selectivity. The general relationship can be expressed as:

$t_{operate} = k \times \frac{TMS}{(I_{fault}/I_{pickup})^n - 1}$

Where:
*   $t_{operate}$ is the operating time.
*   $k$ is a characteristic constant of the relay (often incorporated into the TMS).
*   $TMS$ is the Time Multiplier Setting.
*   $I_{fault}$ is the fault current magnitude.
*   $I_{pickup}$ is the pickup current magnitude.
*   $n$ is the inverse time exponent (typically 0.02, 1, or 2 for different inverse time curves).

**Textbook References:**
*   Johns & Salman, Chapter 3: Overcurrent Protection
*   Badri Ram & Viswakarma, Chapter 3: Overcurrent Relays

---

### 3. Numerical Problems: Current Setting and Time Setting

Let's illustrate these concepts with numerical examples.

**Problem 1: Simple Overcurrent Relay Time Calculation**

An overcurrent relay has a rated current of 1A.
*   Pickup current setting (Is): 0.5A (50% of rated current)
*   Time Multiplier Setting (TMS): 0.2
*   The relay is set to the "Very Inverse" curve (n=2).
*   The fault current through the relay is 5A.

Calculate the operating time of the relay.

**Solution:**

1.  **Calculate the current ratio:**
    $I_{fault}/I_{pickup} = 5A / 0.5A = 10$

2.  **Apply the inverse time formula (for Very Inverse, n=2):**
    $t_{operate} = k \times \frac{TMS}{(I_{fault}/I_{pickup})^n - 1}$

    Assuming a standard inverse time characteristic where the proportionality constant is implicitly handled by the TMS and the formula structure. For simplified calculations, often the formula is presented as:
    $t_{operate} = TMS \times \text{Time for Multiples of Pickup}$

    Let's use a common reference table or a standard formula interpretation. A widely used form for "Very Inverse" is $t = \frac{0.14}{((I/Is)^2 - 1)}$, where $t$ is in seconds and the constants depend on the specific relay standard.

    For our purpose, let's use a simplified proportional relationship where $TMS$ directly scales a base time. If we consider a reference point, say at 10 times pickup for a "Very Inverse" relay, the base operating time might be around 1 second (this is a simplification for demonstration).

    Let's re-frame using a more direct interpretation often used in practical settings with relay software: the relay provides a time-current characteristic curve or a formula.

    Using a common inverse time equation form:
    $t_{op} = TMS \times \frac{C}{(I/I_{pickup})^n}$
    Where C is a constant for a specific curve.

    A more practical approach, often provided by relay manufacturers, is using a base time associated with a multiple of pickup. For a "Very Inverse" relay, a common characteristic implies:
    *   At 2x pickup: time ~ 10 sec
    *   At 5x pickup: time ~ 2.2 sec
    *   At 10x pickup: time ~ 1.0 sec

    Let's use the formula provided in many textbooks, acknowledging that specific constants vary:
    $t_{op} = TMS \times \frac{K}{(I/I_{pickup})^2 - 1}$

    If we assume $K=1$ and the formula is $t_{op} = TMS \times \frac{1}{(I/I_{pickup})^2 - 1}$, then:
    $t_{op} = 0.2 \times \frac{1}{(10)^2 - 1} = 0.2 \times \frac{1}{100 - 1} = 0.2 \times \frac{1}{99} \approx 0.002 \text{ seconds}$

    This result seems very small. This highlights the importance of using correct constants or manufacturer-specific curves. Let's use another common simplified representation of inverse time:

    $t_{op} = TMS \times (\frac{T_{base}}{(I/I_{pickup})^n})$

    Where $T_{base}$ is the time taken at a specified multiple of pickup. For instance, if $T_{base}$ is the time at 5x pickup for the specific curve.

    **Let's use the commonly cited IEC 60255-3 standard inverse time curves for illustration:**
    *   **Very Inverse:** $t = 13.5 \times \frac{TMS}{I^2 - 1}$ (where I is in multiples of pickup)
    *   **Extremely Inverse:** $t = 80 \times \frac{TMS}{I - 1}$ (where I is in multiples of pickup)

    Using the "Very Inverse" formula:
    $I = I_{fault} / I_{pickup} = 10$
    $t_{op} = 13.5 \times \frac{0.2}{10^2 - 1} = 13.5 \times \frac{0.2}{99} = \frac{2.7}{99} \approx 0.027 \text{ seconds}$

    **Answer:** The operating time of the relay is approximately 0.027 seconds.

**Problem 2: Coordination of Overcurrent Relays**

Consider two overcurrent relays, Relay A and Relay B, in series. Relay A is closer to the fault.

*   **Relay A:**
    *   Pickup Current (IsA): 1A
    *   TMS A: 0.2
    *   Curve: Standard Inverse (n=1)
    *   Fault current through Relay A: 10A

*   **Relay B:**
    *   Pickup Current (IsB): 1A
    *   TMS B: 0.4
    *   Curve: Standard Inverse (n=1)
    *   Fault current through Relay B: 10A

Calculate the operating times for both relays. Assume the "Standard Inverse" formula is $t = 1 \times \frac{TMS}{I - 1}$ (where I is in multiples of pickup).

**Solution:**

**Relay A:**
1.  Current ratio for Relay A: $I_A / Is_A = 10A / 1A = 10$
2.  Operating time for Relay A:
    $t_{opA} = 1 \times \frac{TMS_A}{I_A/Is_A - 1} = 1 \times \frac{0.2}{10 - 1} = \frac{0.2}{9} \approx 0.022 \text{ seconds}$

**Relay B:**
1.  Current ratio for Relay B: $I_B / Is_B = 10A / 1A = 10$
2.  Operating time for Relay B:
    $t_{opB} = 1 \times \frac{TMS_B}{I_B/Is_B - 1} = 1 \times \frac{0.4}{10 - 1} = \frac{0.4}{9} \approx 0.044 \text{ seconds}$

**Analysis:**
Relay A operates in approximately 0.022 seconds, while Relay B operates in approximately 0.044 seconds. Since Relay A operates faster, it will clear the fault first, demonstrating proper coordination.

**Answer:** Relay A operates in ~0.022 seconds, and Relay B operates in ~0.044 seconds.

---

### 4. Differential Relays: Operating and Restraining Characteristics

Differential relays are used to protect specific zones within a power system, such as transformers, generators, and busbars. They operate based on **Kirchhoff's Current Law (KCL)**, comparing the current entering the protected zone with the current leaving it.

#### 4.1. Principle of Operation

*   For a healthy power system element, the current entering the zone should equal the current leaving the zone ($I_{in} = I_{out}$).
*   During an internal fault within the protected zone, $I_{in} \neq I_{out}$, resulting in a difference current ($I_{diff} = I_{in} - I_{out}$).
*   The differential relay is designed to detect this difference current and initiate tripping.

#### 4.2. Basic Differential Relay

A simple differential relay compares the magnitude of the incoming and outgoing currents. If $|I_{in} - I_{out}| > I_{pickup}$, the relay operates.

#### 4.3. Challenges and Introduction of Restraining

Several factors can cause a difference current even during healthy conditions or external faults, leading to incorrect tripping:

1.  **CT Mismatch/Saturation:** Differences in the characteristics and performance of Current Transformers (CTs) connected at different terminals of the protected zone can lead to current discrepancies. CT saturation during heavy external faults is a major issue, causing the relay to see a large difference current.
2.  **Transformer Tap Changers:** Changes in transformer taps alter the voltage and current ratios, introducing a small difference current.
3.  **Transformer Vector Group:** Different vector groups (e.g., Dyn11) introduce phase shifts between primary and secondary currents, which need to be compensated for.
4.  **High Inrush Current:** During transformer energization, a large magnetizing inrush current flows, which is primarily confined to the transformer winding. This can be misinterpreted as an internal fault by a basic differential relay.

To overcome these issues, **restraining** is introduced.

#### 4.4. Percentage Differential Relay (Biased Differential Relay)

This is the most common type of differential relay. It has an **operating coil** and a **restraining coil**.

*   **Operating Coil:** Connected to the difference current ($I_{diff} = I_1 - I_2$). If $I_{diff}$ exceeds a threshold, the relay *tends* to operate.
*   **Restraining Coil:** Connected to the sum of the currents entering and leaving the zone (often the average or sum of the magnitudes of the currents, $|I_1| + |I_2|$ or $\frac{|I_1| + |I_2|}{2}$). This coil produces a restraining force that opposes the operating force.

**Operating Principle:** The relay operates only when the difference current is sufficiently large compared to the through current. The operating threshold is not a fixed value but increases with the magnitude of the through current.

#### 4.5. Operating and Restraining Characteristics

The characteristics are typically plotted on a graph with:
*   **X-axis:** Restraining Current (proportional to through current, e.g., $\frac{|I_1| + |I_2|}{2}$)
*   **Y-axis:** Operating Current (proportional to difference current, $|I_1 - I_2|$)

The characteristic is usually a piecewise linear curve with two or more slopes.

**Typical Characteristic:**

*   **Region 1: Low Through Current (Slope m1)**
    *   The relay has a low pickup current (fixed threshold $I_{pickup}$) for small difference currents. This is to detect low-magnitude internal faults.
    *   The slope $m1$ is usually very low or zero, meaning the restraint is minimal.
    *   **Operating Condition:** $|I_1 - I_2| > I_{pickup}$

*   **Region 2: High Through Current (Slope m2)**
    *   As the through current increases, the operating threshold for the difference current also increases proportionally.
    *   The slope $m2$ determines how much the operating current must increase for a given increase in restraining current. $m2$ is typically greater than $m1$.
    *   **Operating Condition:** $|I_1 - I_2| > m2 \times \frac{|I_1| + |I_2|}{2} + C$ (where C is an offset for the second slope)

**Key Features of the Characteristic:**

*   **Pickup Setting:** The initial low threshold (in Region 1) is the primary pickup setting.
*   **Restraining Slopes (m1, m2):** These slopes determine the relay's sensitivity at higher current levels. A steeper slope means less sensitivity to difference current at higher through currents.
*   **Percentage Bias:** The slope $m2$ is often referred to as the percentage bias. If $m2 = 50\%$, it means for every 1A increase in restraining current, the operating current threshold increases by 0.5A.
*   **Higher Slopes (m3, etc.):** Some relays have multiple slopes to provide even greater security against spurious tripping during severe external faults where CT saturation is significant.

**Handling Transformer Inrush:**
To prevent tripping during transformer energization (magnetizing inrush), differential relays employ mechanisms such as:

*   **Harmonic Restraint:** Magnetizing inrush current contains a significant second harmonic component. The relay can be designed to measure the second harmonic content. If it exceeds a certain percentage of the fundamental frequency current, the relay restraint is increased, preventing operation.
*   **Frequency Discrimination:** Similar to harmonic restraint, but the relay can also distinguish between the fundamental frequency and other frequencies.

**Handling CT Saturation:**
To avoid operation due to CT saturation during severe external faults, higher slopes are used in the differential characteristic. These higher slopes mean the relay requires a larger difference current to operate when the through current is high, effectively desensitizing it to CT errors.

**Example of Characteristic Interpretation:**

Consider a percentage differential relay with:
*   Pickup setting: 0.2A (for the operating coil)
*   Restraining characteristic:
    *   First slope (m1): 0% (or very low, effectively a fixed pickup up to a certain restraining current)
    *   Second slope (m2): 50% starting after a restraining current of 1A.

Plotting this:
*   Up to a restraining current of 1A, the relay operates if the difference current (operating current) exceeds 0.2A.
*   Beyond 1A restraining current:
    *   Operating current threshold = 0.2A (initial offset) + 0.50 * (Restraining Current - 1A)
    *   If Restraining Current = 2A, Operating Threshold = 0.2 + 0.50 * (2 - 1) = 0.2 + 0.5 = 0.7A
    *   If Restraining Current = 5A, Operating Threshold = 0.2 + 0.50 * (5 - 1) = 0.2 + 0.50 * 4 = 0.2 + 2 = 2.2A

The characteristic would be a horizontal line at 0.2A up to a restraining current of 1A, and then a line with a slope of 0.5 starting from the point (Restraining Current = 1A, Operating Current = 0.2A).

**Textbook References:**
*   Johns & Salman, Chapter 4: Transformer Protection (Differential Protection)
*   Phadke & Thorpe, Chapter 6: Differential Relays
*   Badri Ram & Viswakarma, Chapter 5: Transformer Protection

---

### 5. Relating to Course Outcomes

*   **CO1: Identify the relay protection scheme suitable for overcurrent, differential and distance protection.**
    *   This module introduces overcurrent and differential protection. Understanding current/time settings is fundamental to overcurrent protection, and the operating/restraining characteristics are key to differential protection.
*   **CO2: Develop the protection scheme for bus bars, transformers, generators, motors and distribution systems using appropriate protective relays.**
    *   Differential relays are extensively used for transformers, generators, and busbars. The concepts of settings and characteristics are crucial for developing these schemes.
*   **CO3: Illustrate the operation of a numerical relay.**
    *   Numerical relays offer precise control over current and time settings, as discussed. The ability to implement complex characteristics like percentage differential curves is a hallmark of numerical relays.
*   **CO4: Explain signal processing methods and algorithms in digital protection.**
    *   While not explicitly covered in this specific topic, the sophisticated algorithms within numerical relays are what enable the precise implementation of these settings and characteristics, including harmonic restraint for inrush.
*   **CO5: Infer emerging protection schemes in power systems.**
    *   Understanding the foundational principles of traditional relays (like percentage differential) provides the context for appreciating how modern adaptive and intelligent protection schemes build upon these concepts.

---

### 6. Important Points to Remember

*   **Current Setting:** Defines the minimum current for relay operation.
*   **Time Setting (TMS):** Adjusts the operating time of inverse time relays for coordination and discrimination.
*   **Differential Relays:** Operate on the principle of comparing currents entering and leaving a protected zone.
*   **Restraining Current:** Provides a bias that increases the operating threshold of differential relays with increasing through current, enhancing security.
*   **Percentage Differential Relays:** Feature operating and restraining coils, creating a characteristic with distinct slopes.
*   **Transformer Inrush:** A common cause of spurious tripping in differential protection, addressed by harmonic restraint.
*   **CT Saturation:** A significant challenge in differential protection, managed by higher restraining slopes.
*   **Coordination:** Achieved by setting TMS values and pickup currents of series relays to ensure the closest relay operates first.

---

### 7. Practice Questions

**Question 1:**
An overcurrent relay has a rated current of 1A. Its pickup current is set at 0.8A (80%) and the TMS is set at 0.3. The relay is set to the "Normal Inverse" curve. If the fault current is 8A, what is the approximate operating time of the relay?
(Assume the "Normal Inverse" time-current characteristic formula is $t = 0.05 \times \frac{TMS}{(I/Is) - 1}$, where $t$ is in seconds, $I$ is the fault current, and $Is$ is the pickup current.)

**Answer 1:**
1.  **Current Ratio:** $I/Is = 8A / 0.8A = 10$
2.  **Operating Time:** $t = 0.05 \times \frac{0.3}{10 - 1} = 0.05 \times \frac{0.3}{9} = 0.05 \times 0.0333 \approx 0.00167$ seconds.

**Question 2:**
A percentage differential relay is used to protect a transformer. The relay has a pickup setting of 0.3A. The restraining characteristic has a first slope (m1) of 0% up to a restraining current of 1.5A, and a second slope (m2) of 50% thereafter.
Calculate the operating current threshold when the restraining current is:
a) 1.0A
b) 3.0A

**Answer 2:**
a) **Restraining Current = 1.0A:**
Since 1.0A is less than 1.5A, the first slope (0%) applies. The operating threshold is the pickup setting.
Operating Threshold = 0.3A.

b) **Restraining Current = 3.0A:**
Since 3.0A is greater than 1.5A, the second slope (50%) applies. The operating threshold is calculated as:
Operating Threshold = Initial Pickup + m2 * (Restraining Current - Threshold Current for m2)
Operating Threshold = 0.3A + 0.50 * (3.0A - 1.5A)
Operating Threshold = 0.3A + 0.50 * (1.5A)
Operating Threshold = 0.3A + 0.75A
Operating Threshold = 1.05A

**Question 3:**
Explain why harmonic restraint is used in differential relays for transformer protection.

**Answer 3:**
When a transformer is energized, it experiences a large **magnetizing inrush current**. This inrush current is primarily due to the need to establish the magnetic flux in the core. The waveform of this inrush current is highly distorted and rich in harmonics, particularly the **second harmonic**. A basic differential relay would interpret this large inrush current flowing into the transformer winding as an internal fault and would trip. Harmonic restraint is a feature where the relay measures the harmonic content of the current. If the second harmonic content exceeds a predefined threshold (e.g., 10-15% of the fundamental frequency component), the relay increases its restraint, preventing it from operating during the inrush period, thus improving security.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
