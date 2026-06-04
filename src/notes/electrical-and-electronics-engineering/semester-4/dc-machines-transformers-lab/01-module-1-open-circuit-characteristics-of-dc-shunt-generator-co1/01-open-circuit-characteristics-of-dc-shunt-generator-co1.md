---
title: "Open circuit characteristics of DC shunt generator (CO1)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 1: Open circuit characteristics of DC shunt generator (CO1)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360a2"
status: "completed"
scrapedAt: "2026-05-23T16:15:05.692Z"
---
# DC MACHINES & TRANSFORMERS LAB: Module 1 - Open Circuit Characteristics of DC Shunt Generator (CO1)

## Introduction

This module focuses on understanding the fundamental operating principle and performance characteristics of a DC shunt generator through the Open Circuit (OC) test. This test helps us analyze how the generated voltage behaves with varying field excitation, independent of any load. This forms the basis for understanding the behavior of DC generators under various operating conditions, contributing to **Course Outcome 1 (CO1): Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**.

## 1. What is a DC Shunt Generator?

A DC shunt generator is a type of DC generator where the field winding is connected in parallel (shunt) with the armature winding.

### Key Components:
*   **Armature:** The rotating part of the DC machine where the electromotive force (EMF) is induced.
*   **Field Winding:** The stationary winding that creates the magnetic field. In a shunt generator, it's connected in parallel with the armature.
*   **Commutator:** A mechanical rectifier that converts the generated AC EMF in the armature into DC EMF.
*   **Brushes:** Conductors that make contact with the commutator to collect the current.

## 2. Principle of Operation

A DC shunt generator operates on the principle of electromagnetic induction (Faraday's Law of Electromagnetic Induction). When the armature rotates in a magnetic field produced by the field winding, an EMF is induced in the armature conductors. In a shunt generator, the field winding is connected across the armature terminals, meaning it receives the same voltage as the armature. This allows for self-excitation, where the residual magnetism in the field poles, combined with the armature current, builds up the magnetic field and hence the generated voltage.

**Reference:**
*   *Electrical Machinery* by P.S. Bimbhra (Chapter 4: DC Generators) discusses the fundamental principles of DC generators.
*   *Electric Machines* by D P Kothari & I J Nagrath (Chapter 5: DC Generators) also provides a detailed explanation of the operating principles.

## 3. Open Circuit (OC) Characteristics of a DC Shunt Generator

The Open Circuit (OC) characteristics, also known as the **No-Load Saturation Curve** or **Magnetization Curve**, represent the relationship between the **generated EMF (E$_g$)** and the **field current (I$_{f}$)** when the armature is driven at a constant speed and the armature terminals are kept open-circuited (no load connected).

### 3.1 Significance of OC Characteristics:

*   **Determines the voltage build-up capability:** It shows how effectively the generator can produce voltage with increasing field excitation.
*   **Indicates the magnetic saturation of the machine:** The curve becomes horizontal when the magnetic poles reach saturation, meaning further increases in field current produce only small increases in EMF.
*   **Helps in determining the critical field resistance:** The slope of the OC curve at any point represents the effective resistance of the field circuit. The point where the straight line representing field resistance is tangent to the OC curve is crucial for self-excitation.
*   **Provides insight into the residual magnetism:** The small EMF generated at zero field current is due to residual magnetism.
*   **Essential for predicting performance under load:** While this test is at no load, it forms the foundation for understanding how voltage will behave under varying load conditions.

**Reference:**
*   Both Bimbhra and Kothari & Nagrath extensively cover the OC characteristics of DC generators, often referred to as the magnetization characteristic.

### 3.2 Experimental Setup and Procedure

**Objective:** To plot the Open Circuit (OC) characteristics of a DC shunt generator.

**Apparatus Required:**
*   DC Shunt Generator (rated voltage and power)
*   DC Shunt Motor (to drive the generator at constant speed)
*   Rheostat (for field control of the driving motor)
*   Rheostat (for controlling the field current of the DC shunt generator)
*   Voltmeter (to measure armature terminal voltage/generated EMF)
*   Ammeter (to measure field current)
*   Tachometer (optional, to monitor and maintain constant speed)
*   Connecting wires

**Circuit Diagram:**

A typical circuit diagram would show:
*   The DC shunt motor connected to a DC supply (or another suitable power source).
*   The field winding of the DC shunt motor connected to a rheostat for speed control.
*   The armature of the DC shunt motor connected to the armature of the DC shunt generator.
*   The field winding of the DC shunt generator connected in series with a variable rheostat and an ammeter.
*   The armature terminals of the DC shunt generator connected directly to a voltmeter.

**(Visual representation of the circuit diagram would be beneficial here in a printed note, but can be described as above.)**

**Procedure:**

1.  **Connections:** Connect the circuit as per the circuit diagram. Ensure the DC shunt generator is properly excited from an external DC source initially for building up the field.
2.  **Set Constant Speed:** Start the DC shunt motor and adjust its field rheostat to drive the DC shunt generator at its rated speed. This speed must be maintained constant throughout the experiment. Use a tachometer to monitor the speed.
3.  **Initial State:** Ensure the field rheostat of the DC shunt generator is at its maximum resistance position.
4.  **Build-up of EMF:** Close the field circuit of the DC shunt generator. The generated voltage will build up due to residual magnetism. Record the voltmeter reading (E$_g$) and the corresponding field current (I$_f$) from the ammeter.
5.  **Vary Field Current:** Gradually decrease the resistance of the DC shunt generator's field rheostat. This increases the field current (I$_f$).
6.  **Record Readings:** For each step of decreasing field rheostat resistance, allow the voltage to stabilize and record the corresponding values of field current (I$_f$) and generated EMF (E$_g$).
7.  **Continue to Saturation:** Continue taking readings until the field current is increased to a point where the generated EMF shows little or no further increase, indicating magnetic saturation.
8.  **Reverse Field Current (Optional but recommended):** Gradually increase the field rheostat resistance back to its maximum, and then *optionally* reverse the polarity of the external excitation (if an external source is used for initial excitation) or adjust the field rheostat to gradually decrease the field current from its maximum towards zero. This helps in verifying the hysteresis effect, though for basic OC characteristics, this is often omitted.
9.  **Shut Down:** After taking all readings, switch off the excitation and then the motor.

### 3.3 Observation Table

| S.No. | Field Current (I$_f$) (A) | Generated EMF (E$_g$) (V) | Armature Speed (RPM) |
| :---- | :------------------------ | :------------------------ | :------------------- |
| 1     |                           |                           | Constant             |
| 2     |                           |                           | Constant             |
| ...   |                           |                           | Constant             |

### 3.4 Plotting the Graph

*   Plot the **Generated EMF (E$_g$) on the Y-axis** and the **Field Current (I$_f$) on the X-axis**.
*   The resulting curve is the Open Circuit Characteristic (OCC) or Magnetization Curve of the DC shunt generator.

### 3.5 Interpretation of the Graph

The OC characteristic curve is generally divided into two regions:

1.  **Linear Region:** In the initial part of the curve, the generated EMF is approximately proportional to the field current. This is because the magnetic flux density in the air gap is directly proportional to the field current, and hence the EMF is proportional to the field current (E$_g$ ∝ ΦN, and Φ ∝ I$_f$ in the unsaturated region).
2.  **Saturated Region:** As the field current increases, the magnetic core of the generator starts to saturate. This means that further increases in field current produce progressively smaller increases in magnetic flux. Consequently, the generated EMF also increases at a decreasing rate, and the curve becomes horizontal.

### 3.6 Effect of Speed

The generated EMF is directly proportional to the speed of the armature (E$_g$ ∝ ΦN). Therefore, if the OC characteristics are plotted at different constant speeds, we will obtain a family of curves. Higher speeds will result in higher generated EMF for the same field current.

**Reference:**
*   Bimbhra (Chapter 4) and Kothari & Nagrath (Chapter 5) illustrate these curves and explain their interpretation in detail.

## 4. Critical Field Resistance and Critical Speed

### 4.1 Critical Field Resistance (R$_{f,crit}$)

Critical field resistance is the maximum value of field circuit resistance for which the DC shunt generator will self-excite at a given speed.

*   **Graphical Determination:** The critical field resistance is represented by the slope of the straight line drawn from the origin that is tangential to the OC characteristic curve.
*   **Condition for Self-Excitation:** For self-excitation to occur, the actual resistance of the shunt field winding (R$_{f}$) must be less than the critical field resistance (R$_{f}$ < R$_{f,crit}$). If R$_{f}$ > R$_{f,crit}$, the generator will not build up voltage.

### 4.2 Critical Speed (N$_{crit}$)

Critical speed is the minimum speed at which the DC shunt generator will self-excite at a given field resistance.

*   **Graphical Determination:** If we plot the OC characteristics at various speeds, the critical speed is the lowest speed at which the field resistance line intersects the OC curve at a point other than the origin.
*   **Condition for Self-Excitation:** For self-excitation to occur, the actual operating speed (N) must be greater than the critical speed (N > N$_{crit}$) for the given field resistance. If N < N$_{crit}$, the generator will not build up voltage.

**Relationship:**
There is an inverse relationship between speed and critical field resistance. If the speed is increased, the critical field resistance also increases. Conversely, if the field resistance is increased, the critical speed increases.

**Reference:**
*   These concepts are crucial for understanding the self-excitation of DC generators and are well-explained in Bimbhra and Kothari & Nagrath.

## 5. Practice Questions and Answers

**Question 1:** What is the primary purpose of conducting the Open Circuit (OC) test on a DC shunt generator?
**Answer:** The primary purpose is to determine the relationship between the generated EMF and the field current at a constant speed, which is known as the Open Circuit Characteristic or Magnetization Curve. This helps in understanding the generator's voltage build-up capability and the saturation of its magnetic field.

**Question 2:** If the armature of a DC shunt generator is driven at a constant speed, how does the generated EMF vary with the field current in the unsaturated region?
**Answer:** In the unsaturated region, the generated EMF is approximately directly proportional to the field current.

**Question 3:** What is the critical field resistance? How is it determined graphically?
**Answer:** Critical field resistance is the maximum field circuit resistance for which a DC shunt generator will self-excite at a given speed. It is determined graphically as the slope of the straight line drawn from the origin that is tangential to the OC characteristic curve.

**Question 4:** Under what condition will a DC shunt generator fail to build up voltage?
**Answer:** A DC shunt generator will fail to build up voltage if:
    *   The field resistance is greater than the critical field resistance for the given speed.
    *   The speed of rotation is less than the critical speed for the given field resistance.
    *   There is no residual magnetism in the field poles.
    *   The field winding is connected incorrectly (e.g., in series instead of shunt).

**Question 5:** How would you modify the procedure if you wanted to obtain OC characteristics at a different speed?
**Answer:** After completing the test at the initial rated speed, you would adjust the field rheostat of the driving motor to achieve the new desired constant speed for the DC shunt generator. Then, you would repeat the steps of varying the field current of the generator and recording the generated EMF.

## 6. Important Points to Remember

*   **Constant Speed is Crucial:** The OC test must be performed at a *constant* and *rated* speed. Any variation in speed will directly affect the generated EMF and invalidate the results.
*   **Initial Excitation:** Ensure the generator has sufficient residual magnetism to start the voltage build-up. If not, a temporary external DC excitation to the field winding might be needed to establish the magnetic flux.
*   **Field Resistance:** The rheostat used for controlling the field current of the generator must have a wide range to cover all necessary values.
*   **Voltmeter Connection:** The voltmeter must be connected directly across the armature terminals to measure the generated EMF accurately.
*   **Saturation:** The OC curve will eventually flatten out due to the magnetic saturation of the iron core.
*   **CO1 Alignment:** This experiment directly addresses CO1 by allowing analysis of DC generator performance at no-load, establishing the fundamental voltage-field current relationship.

## 7. Connection to Course Outcomes

This module's experiments and understanding of OC characteristics directly contribute to **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**. By performing this no-load test, students gain a foundational understanding of how a DC shunt generator behaves, which is essential for analyzing its performance under load conditions (which would be covered in subsequent experiments). This knowledge allows for the prediction of voltage regulation and overall performance.
