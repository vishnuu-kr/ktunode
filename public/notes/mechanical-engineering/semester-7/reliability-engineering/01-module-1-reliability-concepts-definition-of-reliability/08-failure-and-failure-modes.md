---
title: "Failure and Failure modes"
subject: "RELIABILITY ENGINEERING"
module: "Module 1: Reliability Concepts: Definition of reliability"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e43"
status: "completed"
scrapedAt: "2026-05-20T18:17:48.830Z"
---
# RELIABILITY ENGINEERING: Module 1: Reliability Concepts - Failure and Failure Modes

## 1. Introduction to Reliability Engineering

Reliability Engineering is a discipline focused on ensuring that systems, products, and services perform their intended functions without failure for a specified period under given conditions. It is crucial for product development, quality assurance, and operational efficiency. This module introduces the foundational concepts of reliability, starting with understanding failure and its various modes.

## 2. Definition of Failure

**Definition:** Failure is the event where a system or component ceases to perform its intended function as specified. It is the cessation of the ability of an item to perform a required function.

*   **Key Aspects of Failure:**
    *   **Loss of Function:** The core of failure is the inability to perform as designed or expected.
    *   **Specified Conditions:** Failures are typically defined within the context of operating environment, load, and time.
    *   **Time-Dependent:** Failures often occur over time, leading to the study of reliability as a time-dependent characteristic.

*   **Reference:** Balagurusamy (2017) often emphasizes that reliability is about performing the required function under stated conditions for a stated period of time. Failure is the opposite of this successful operation.

## 3. Understanding Failure Modes

**Definition:** A failure mode is the manner in which a failure is initiated or occurs. It describes the physical or functional deviation from the intended performance.

*   **Importance of Identifying Failure Modes:**
    *   **Root Cause Analysis:** Understanding how a failure occurs helps in identifying the underlying causes.
    *   **Design Improvements:** Knowledge of failure modes guides engineers in designing more robust and reliable systems.
    *   **Testing and Prevention:** Specific failure modes can be targeted during testing and addressed through preventive measures.

*   **Reference:** Chandrupatla (2009) discusses failure modes as critical for understanding the "why" and "how" of product failures, forming the basis for FMEA (Failure Mode and Effects Analysis).

### 3.1. Common Types of Failure Modes

Failures can be broadly categorized based on their physical manifestation and the underlying causes.

#### 3.1.1. Functional Failures

These failures occur when a system or component deviates from its specified functional performance without necessarily experiencing a physical break or damage.

*   **Examples:**
    *   **Drift:** A sensor's output gradually deviates from the true value due to aging or environmental changes.
    *   **Mal-adjustment:** A setting or calibration drifts out of tolerance.
    *   **Intermittent Operation:** A device works sometimes and fails at other times, often due to loose connections or internal issues.

*   **Reference:** Srinath (2005) highlights functional failures as common in electronic and control systems where precise operation is critical.

#### 3.1.2. Physical Failures

These failures are characterized by observable physical damage or breakdown of the component or system.

*   **Examples:**
    *   **Fracture/Breakage:** A mechanical part breaks due to stress exceeding its strength (e.g., a shaft snapping).
    *   **Corrosion:** Material degradation due to chemical or electrochemical reactions (e.g., rust on a metal component).
    *   **Wear:** Gradual removal of material from surfaces due to friction (e.g., worn gears in a gearbox).
    *   **Overheating:** Components exceeding their thermal limits, leading to damage or performance degradation.
    *   **Short Circuit:** An unintended low-resistance path for current, often causing damage to electronic components.
    *   **Open Circuit:** A break in an electrical path, preventing current flow.

*   **Reference:** Ebling (2004) provides extensive examples of physical failures in mechanical systems, emphasizing material properties and stress analysis.

#### 3.1.3. Catastrophic Failures

These are sudden and complete failures, often resulting in immediate loss of function.

*   **Examples:**
    *   **Sudden breakage:** A component shattering under sudden impact.
    *   **Explosion:** A rapid release of energy.
    *   **Complete electrical breakdown:** A major component burning out.

*   **Reference:** Lewis (2012) often categorizes failures by their suddenness, with catastrophic failures being a distinct type requiring robust design.

#### 3.1.4. Degradation Failures

These failures occur due to a gradual deterioration of performance over time. The item continues to function, but its performance levels fall below acceptable limits.

*   **Examples:**
    *   **Reduced efficiency:** A pump delivering less fluid than specified due to wear.
    *   **Increased noise:** A motor producing more noise due to bearing degradation.
    *   **Slower processing speed:** A computer processor experiencing performance degradation due to heat or aging.

*   **Reference:** Barlow (1998) extensively covers degradation models, linking them to wear-out phases of the reliability life cycle.

### 3.2. Classification of Failure Modes by Cause

Failure modes can also be classified based on their root causes.

#### 3.2.1. Design-Induced Failures

Failures that arise from flaws in the initial design of the product or system.

*   **Examples:**
    *   **Inadequate stress margins:** Designing components to operate too close to their stress limits.
    *   **Material selection errors:** Choosing materials that are not suitable for the operating environment or loads.
    *   **Incorrect specifications:** Misunderstanding or misrepresenting the required performance.
    *   **Poor thermal management:** Leading to overheating.

*   **Reference:** Balagurusamy (2017) emphasizes that early identification of design-related failure modes through techniques like FMEA is critical for preventing field failures.

#### 3.2.2. Manufacturing/Production-Induced Failures

Failures stemming from issues during the manufacturing or assembly process.

*   **Examples:**
    *   **Poor workmanship:** Soldering defects, improper assembly.
    *   **Material defects:** Internal flaws in raw materials (e.g., voids, inclusions).
    *   **Process variation:** Deviations in manufacturing parameters (e.g., heat treatment, plating).
    *   **Contamination:** Introduction of foreign substances.

*   **Reference:** Chandrupatla (2009) discusses how process control and quality checks are essential to mitigate manufacturing-induced failures.

#### 3.2.3. Usage/Environmental-Induced Failures

Failures resulting from how the product is used or the environment in which it operates.

*   **Examples:**
    *   **Overloading:** Exceeding the specified operational limits.
    *   **Improper maintenance:** Lack of lubrication, cleaning, or timely replacement of parts.
    *   **Harsh environmental conditions:** Exposure to extreme temperatures, humidity, vibration, or corrosive substances beyond design specifications.
    *   **Human error:** Incorrect operation or installation.

*   **Reference:** Srinath (2005) often links these failures to the operating environment and usage profiles, which are key inputs for reliability prediction.

#### 3.2.4. Wear-Out Failures

Failures that occur after a period of successful operation due to the cumulative effects of aging, fatigue, and wear.

*   **Examples:**
    *   **Fatigue failure:** Cracks initiating and propagating due to repeated stress cycles.
    *   **Creep:** Gradual deformation of materials under sustained load at elevated temperatures.
    *   **Abrasion:** Wear caused by rubbing against another surface.
    *   **Oxidation:** Chemical reaction with oxygen leading to material degradation.

*   **Reference:** Ebling (2004) and Barlow (1998) dedicate significant attention to wear-out failures, often modeling them using specific statistical distributions like the Weibull distribution.

## 4. Learning Outcomes Addressed

This topic directly contributes to the following learning outcomes:

*   **CO1: Explain various modes of failure and basic concepts of reliability (Knowledge Level: K2)**
    *   This section defines failure and details various failure modes (functional, physical, catastrophic, degradation) and their causes (design, manufacturing, usage, wear-out). This directly supports explaining these concepts at a K2 level.

## 5. Key Concepts and Definitions Recap

*   **Reliability:** The probability that an item will perform its intended function without failure for a specified period under given conditions.
*   **Failure:** The event where a system or component ceases to perform its intended function as specified.
*   **Failure Mode:** The manner in which a failure is initiated or occurs.
*   **Functional Failure:** Deviation from specified performance without physical damage (e.g., drift).
*   **Physical Failure:** Observable damage or breakdown (e.g., fracture, wear, corrosion).
*   **Catastrophic Failure:** Sudden and complete loss of function.
*   **Degradation Failure:** Gradual deterioration of performance below acceptable limits.
*   **Design-Induced Failures:** Caused by flaws in the initial design.
*   **Manufacturing-Induced Failures:** Caused by issues during production.
*   **Usage/Environmental-Induced Failures:** Caused by how the item is used or its environment.
*   **Wear-Out Failures:** Occur due to aging, fatigue, and wear over time.

## 6. Important Points to Remember

*   **Failure is not always dramatic:** Degradation failures are common and can be just as critical as catastrophic ones.
*   **Understanding the "how" and "why" is crucial:** Identifying failure modes is the first step in preventing or mitigating them.
*   **Failure modes can overlap:** A single event might manifest in multiple ways or have multiple contributing causes.
*   **Context is key:** A failure is defined relative to the specified function and conditions.

## 7. Practice Questions

1.  **Define Reliability and Failure in your own words.**
    *   *Answer:* Reliability is the ability of a system to perform its intended function successfully over a specified period. Failure is the event when this successful performance stops.

2.  **List and briefly describe at least three common types of failure modes.**
    *   *Answer:*
        *   **Fracture:** A component breaks apart.
        *   **Wear:** Material is gradually removed from a surface due to friction.
        *   **Drift:** A parameter's value deviates from its intended setting over time.

3.  **Provide an example of a failure mode that could be classified as both "Physical Failure" and "Degradation Failure". Explain why.**
    *   *Answer:* **Wear** is a good example. Physically, it involves material removal. Over time, this gradual removal can lead to performance degradation (e.g., a bearing becoming noisy and less efficient) until it eventually fails to perform its function.

4.  **Distinguish between a Design-Induced Failure and a Manufacturing-Induced Failure with an example for each.**
    *   *Answer:*
        *   **Design-Induced:** A product designer specifies a material that cannot withstand the operating temperature, leading to failure. For example, using plastic in a component that is exposed to high heat and warps.
        *   **Manufacturing-Induced:** A component is manufactured with a microscopic crack due to improper cooling during a casting process, which later propagates under normal stress, causing failure. For example, a subtly flawed weld that fails under load.

5.  **How does understanding failure modes contribute to improving product reliability? (Relate to CO1)**
    *   *Answer:* By identifying how and why failures occur (failure modes), engineers can pinpoint weaknesses in the design, manufacturing process, or usage guidelines. This knowledge allows them to implement corrective actions, such as strengthening components, improving manufacturing tolerances, or providing clearer user instructions, thereby enhancing the overall reliability of the product.

---
This concludes the notes for the topic "Failure and Failure Modes" from Module 1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
