---
title: "Equivalent sound level"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 3: Ear its structure and function"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463ff0"
status: "completed"
scrapedAt: "2026-05-20T18:09:43.906Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 3: Ear - Its Structure and Function

### Topic: Equivalent Sound Level ($L_{eq}$)

---

### 1. Learning Outcomes Covered

This topic will help you understand:

*   **The concept of equivalent sound level** and its importance in describing time-varying noise.
*   **How $L_{eq}$ relates to the subjective perception of loudness and annoyance** over a period of time.
*   **The fundamental principles behind calculating $L_{eq}$** from fluctuating sound levels.
*   **The application of $L_{eq}$ in noise regulations and measurements**. (Aligns with CO3: To understand the mechanism of hearing, noise regulations and noise measuring devices - K2)

---

### 2. Key Concepts and Definitions

*   **Sound Pressure Level (SPL):** A logarithmic measure of the effective pressure of a sound relative to a reference value. Measured in decibels (dB).
*   **Time-Varying Noise:** Noise that changes in intensity over time. This is common in most real-world scenarios (e.g., traffic noise, industrial machinery, construction sites).
*   **A-weighting:** A frequency weighting applied to sound measurements to approximate the human ear's sensitivity to different frequencies at moderate sound levels. This is crucial for $L_{eq}$ measurements in environmental noise.
*   **Equivalent Sound Level ($L_{eq}$):**
    *   **Definition:** The $L_{eq}$ is the **equivalent continuous sound level** that would contain the same acoustic energy as the actual, time-varying sound level over a given period. In simpler terms, it's the **average sound level, in terms of energy**, over a specific time interval.
    *   **Purpose:** To provide a single, representative value for a fluctuating noise environment, making it easier to compare and regulate noise levels that are not constant. It is a cornerstone of environmental noise assessment and regulation.
    *   **Mathematical Definition:** For a continuous time-varying sound pressure $p(t)$, the $L_{eq}$ over a time interval $T$ is defined as:

        $L_{eq, T} = 10 \log_{10} \left[ \frac{1}{T} \int_{0}^{T} \frac{p(t)^2}{p_{ref}^2} dt \right]$ dB

        Where:
        *   $p(t)$ is the instantaneous sound pressure at time $t$.
        *   $p_{ref}$ is the reference sound pressure, typically $20 \mu Pa$ (microPascals).
        *   $T$ is the averaging time interval.

        *Note:* The term $\frac{p(t)^2}{p_{ref}^2}$ represents the squared sound pressure level (or acoustic energy) normalized to the reference. The integration averages this energy over time, and the $10 \log_{10}$ converts it back to a decibel scale.

*   **Sound Exposure Level ($SEL$):** A measure of the total sound energy in a single event (e.g., an aircraft flyover, a truck passing). It's essentially the $L_{eq}$ of that single event normalized to a 1-second duration. $SEL$ is often used for impulsive or transient noise events.

---

### 3. Understanding the Calculation and Significance

#### 3.1 Why $L_{eq}$ is Used

*   **Subjective Perception:** While the human ear perceives loudness on a roughly logarithmic scale, our overall annoyance or impact from noise is more related to the total energy exposure over time. A noise that fluctuates between 70 dB and 80 dB might be more disruptive than a constant 75 dB, but $L_{eq}$ provides a way to quantify the overall energy impact.
*   **Regulatory Frameworks:** $L_{eq}$ is widely used by regulatory bodies (e.g., EPA in the US, EU directives) to set noise limits for environments like residential areas, workplaces, and transportation noise.
*   **Comparison:** It allows for a fair comparison of different noise environments or noise control strategies.

#### 3.2 $L_{eq}$ for Discrete Events (Impulsive Noise)

When noise occurs as discrete events, the $L_{eq}$ can be calculated from the sound exposure levels ($SEL$) of those events. For a series of $n$ events, each with a duration $t_i$ and an $L_{eq, t_i}$ value:

$L_{eq, T} = 10 \log_{10} \left[ \frac{1}{T} \sum_{i=1}^{n} 10^{(L_{eq, t_i} / 10)} \cdot t_i \right]$ dB

If all events have the same $L_{eq, t_i}$ and duration $t$, then for $n$ events within time $T$:

$L_{eq, T} = L_{eq, t} + 10 \log_{10} \left( \frac{n \cdot t}{T} \right)$ dB

*Note:* In practice, sound level meters are calibrated to directly measure and display $L_{eq}$ over chosen time intervals.

#### 3.3 A-Weighted $L_{eq}$ ($L_{Aeq}$)

In most environmental and occupational noise assessments, the sound pressure levels are first A-weighted to reflect human hearing sensitivity. Therefore, the most commonly used equivalent sound level is the **A-weighted equivalent sound level**, denoted as **$L_{Aeq}$**.

$L_{Aeq, T} = 10 \log_{10} \left[ \frac{1}{T} \int_{0}^{T} \frac{p_A(t)^2}{p_{ref}^2} dt \right]$ dB

Where $p_A(t)$ is the instantaneous A-weighted sound pressure.

---

### 4. Examples and Applications

*   **Example 1: Constant Noise:** If a machine operates at a constant 80 dB(A) for 8 hours, the $L_{Aeq}$ over that period is 80 dB(A).
*   **Example 2: Fluctuating Noise:**
    *   A residential area experiences traffic noise. For a specific hour, the A-weighted sound levels fluctuate. A sound level meter measures the following 1-minute averaged levels:
        *   10 minutes at 60 dB(A)
        *   20 minutes at 70 dB(A)
        *   30 minutes at 65 dB(A)
    *   To calculate the $L_{Aeq}$ for this hour (3600 seconds):
        *   Energy from 60 dB(A) for 10 mins (600s): $10^{60/10} \times 600$
        *   Energy from 70 dB(A) for 20 mins (1200s): $10^{70/10} \times 1200$
        *   Energy from 65 dB(A) for 30 mins (1800s): $10^{65/10} \times 1800$
    *   Total energy: $(10^6 \times 600) + (10^7 \times 1200) + (10^{6.5} \times 1800)$
    *   $L_{Aeq} = 10 \log_{10} \left[ \frac{\text{Total Energy}}{3600 \times p_{ref}^2} \right]$
    *   A sound level meter would directly provide the $L_{Aeq}$ for that hour. For this example, it would be somewhere between 65 dB(A) and 70 dB(A), closer to 70 dB(A) due to the longer duration and higher levels. (Using a calculator, it would be approximately 68.7 dB(A)).

*   **Application in Noise Regulations:**
    *   A common noise regulation might state that the $L_{Aeq, 12hr}$ (daytime) should not exceed 65 dB(A) and the $L_{Aeq, 4hr}$ (nighttime) should not exceed 55 dB(A) for residential areas.
    *   This means that over the 12-hour daytime period, the total acoustic energy should be equivalent to a constant 65 dB(A) level.

*   **Application in Occupational Health:**
    *   Workplace noise exposure is often limited by $L_{Aeq, 8hr}$ (e.g., 85 dB(A) in many countries). This ensures that over an 8-hour workday, the total noise energy does not exceed a level that could cause hearing damage.

---

### 5. Practice Questions and Exercises

**Question 1:**
Define Equivalent Sound Level ($L_{eq}$). What is its primary purpose in acoustics and noise control?

**Answer 1:**
The Equivalent Sound Level ($L_{eq}$) is the equivalent continuous sound level that contains the same acoustic energy as a time-varying sound over a given period. Its primary purpose is to provide a single, representative value for fluctuating noise environments, allowing for easier comparison, assessment, and regulation of noise exposure.

**Question 2:**
What is the common designation for the equivalent sound level when frequency weighting is applied to approximate human hearing sensitivity?

**Answer 2:**
The common designation is the A-weighted equivalent sound level, denoted as $L_{Aeq}$.

**Question 3:**
A construction site has the following A-weighted sound levels measured over a 1-hour period (3600 seconds):
*   30 minutes at 75 dB(A)
*   20 minutes at 85 dB(A)
*   10 minutes at 70 dB(A)
Calculate the $L_{Aeq}$ for this 1-hour period. (Assume $p_{ref} = 20 \mu Pa$).

**Answer 3:**
First, convert times to seconds:
30 minutes = $30 \times 60 = 1800$ seconds
20 minutes = $20 \times 60 = 1200$ seconds
10 minutes = $10 \times 60 = 600$ seconds

Next, calculate the sound energy contribution for each period:
Energy from 75 dB(A) for 1800s: $10^{(75/10)} \times 1800 = 10^{7.5} \times 1800$
Energy from 85 dB(A) for 1200s: $10^{(85/10)} \times 1200 = 10^{8.5} \times 1200$
Energy from 70 dB(A) for 600s: $10^{(70/10)} \times 600 = 10^{7.0} \times 600$

Total energy $= (10^{7.5} \times 1800) + (10^{8.5} \times 1200) + (10^{7.0} \times 600)$
Total energy $= (31,622,776.6 \times 1800) + (316,227,766 \times 1200) + (10,000,000 \times 600)$
Total energy $\approx 5.692 \times 10^{10} + 3.795 \times 10^{11} + 6.000 \times 10^{9}$
Total energy $\approx 4.425 \times 10^{11}$ (units of $p^2/p_{ref}^2$)

Now, calculate the $L_{Aeq}$ for the 1-hour period (3600 seconds):
$L_{Aeq} = 10 \log_{10} \left[ \frac{\text{Total Energy}}{3600} \right]$
$L_{Aeq} = 10 \log_{10} \left[ \frac{4.425 \times 10^{11}}{3600} \right]$
$L_{Aeq} = 10 \log_{10} [1.229 \times 10^8]$
$L_{Aeq} \approx 10 \times 8.089$
$L_{Aeq} \approx 80.89$ dB(A)

**Question 4:**
Explain the difference between $L_{eq}$ and a simple average of sound levels (e.g., arithmetic mean of dB values). Why is $L_{eq}$ preferred for noise assessment?

**Answer 4:**
A simple arithmetic average of sound pressure levels (dB values) is **not** a physically meaningful representation of the noise. Sound pressure levels are already on a logarithmic scale, and averaging them directly does not accurately reflect the total acoustic energy. The human ear perceives loudness based on sound pressure, and the energy content of sound is proportional to the square of the sound pressure.

$L_{eq}$ is preferred because it is an **energy-averaging** metric. It calculates the average of the squared sound pressures (or the energy flux) over a given time and then converts this average back to the decibel scale. This accurately represents the overall sound energy exposure, which is more closely related to the perceived loudness, potential for hearing damage, and annoyance caused by noise.

---

### 6. Important Points to Remember

*   **$L_{eq}$ is an energy-based average.** It reflects the total acoustic energy content over a period, not just the average of the decibel readings.
*   **$L_{Aeq}$ is the most commonly used form** in environmental and occupational noise assessments because it incorporates A-weighting, which approximates human hearing sensitivity.
*   **The averaging time ($T$) is critical** for $L_{eq}$. Common averaging times include 1 hour, 8 hours (workday), 24 hours, or specific periods like night.
*   **$L_{eq}$ simplifies complex, fluctuating noise** into a single, understandable metric.
*   **Regulatory standards often use $L_{eq}$** to set noise limits for various environments.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. References and Further Reading

*   **Noise and vibration control engineering by Istvan L. Ver and Leo L. Beranek (Wiley, Second edition, 2006):** Chapters on noise measurement and environmental noise will extensively cover $L_{eq}$ and its applications.
*   **Fundamentals of Acoustics by Lawrence E Kinsler, Austin R Frey, Alan B Coppens, James V Sanders (Wiley, Fourth edition, 2000):** While more focused on fundamental physics, concepts of sound intensity and energy are the basis for understanding $L_{eq}$.
*   **Noise and Vibration Control by M L Munjal (World Scientific publishing, 2013):** Provides detailed discussions on noise metrics and their measurement, including $L_{eq}$.
*   **Handbook of Noise and Vibration Control by Malcom J Crocker (Wiley, 2007):** Offers practical applications and detailed explanations of noise metrics used in industry and environmental monitoring.

---

### 8. Alignment with Course Outcomes (CO)

*   **CO1: To define various acoustic terminologies and understand the physics behind acoustic wave propagation (Knowledge Level: K2)**
    *   This topic helps define "Equivalent Sound Level" and its basis in sound energy and pressure. Understanding the formula reinforces the physics of sound energy accumulation.
*   **CO3: To understand the mechanism of hearing, noise regulations and noise measuring devices (Knowledge Level: K2)**
    *   $L_{eq}$ is a fundamental metric used in noise regulations for environmental and occupational health. Sound level meters are designed to measure and display $L_{eq}$, directly linking to this CO. The A-weighting applied for $L_{Aeq}$ also relates to the mechanism of hearing.

---