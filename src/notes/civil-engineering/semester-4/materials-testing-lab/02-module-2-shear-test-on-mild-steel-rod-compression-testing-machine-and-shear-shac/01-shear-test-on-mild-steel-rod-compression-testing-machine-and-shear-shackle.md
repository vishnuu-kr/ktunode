---
title: "Shear test on mild steel rod (Compression Testing Machine and Shear Shackle)"
subject: "MATERIALS TESTING LAB"
module: "Module 2: Shear test on mild steel rod (Compression Testing Machine and Shear Shackle)"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810d03"
status: "completed"
scrapedAt: "2026-05-20T18:45:40.549Z"
---
# Materials Testing Lab: Module 2 - Shear Test on Mild Steel Rod

This module focuses on understanding the behavior of mild steel under shear stress using a Compression Testing Machine (CTM) and a shear shackle.

## Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   **Understand the principle of shear testing.**
*   **Identify the components of a Compression Testing Machine and a shear shackle.**
*   **Perform a shear test on a mild steel rod accurately.**
*   **Record and analyze the load-deformation data obtained from the shear test.**
*   **Calculate the shear strength of the mild steel rod.**
*   **Interpret the results and draw conclusions about the material's behavior in shear.**

---

## 1. Introduction to Shear Testing

### 1.1 What is Shear Stress?

*   **Definition:** Shear stress ($\tau$) is a type of stress that arises when a force acts parallel to a surface or cross-section of a material. It tends to cause one part of the material to slide relative to another.
*   **Formula:** Shear stress is calculated as:
    $$ \tau = \frac{F}{A} $$
    Where:
    *   $\tau$ is the shear stress (usually in Pascals (Pa) or Megapascals (MPa)).
    *   $F$ is the applied shear force (usually in Newtons (N)).
    *   $A$ is the cross-sectional area resisting the shear (usually in square meters (m²) or square millimeters (mm²)).

### 1.2 Shear Strain

*   **Definition:** Shear strain ($\gamma$) is the measure of deformation in response to shear stress. It is the angular deformation of a material when subjected to shear stress.
*   **Formula:** Shear strain is calculated as:
    $$ \gamma = \tan(\theta) \approx \theta $$
    Where:
    *   $\gamma$ is the shear strain (dimensionless, often expressed in radians).
    *   $\theta$ is the angle of deformation.
*   **Shear Modulus (Modulus of Rigidity), G:** This is the material's resistance to shear deformation. It is the ratio of shear stress to shear strain.
    $$ G = \frac{\tau}{\gamma} $$

### 1.3 Purpose of Shear Testing

*   **Determine Shear Strength:** To find the maximum shear stress a material can withstand before failure.
*   **Assess Material Behavior:** To understand how a material deforms under shear loading.
*   **Material Characterization:** To obtain properties like shear strength and modulus of rigidity, which are crucial for design and material selection.
*   **Quality Control:** To ensure that manufactured components meet specified shear strength requirements.

---

## 2. Components and Setup for the Shear Test

### 2.1 Compression Testing Machine (CTM)

*   **Function:** The CTM is a versatile machine capable of applying compressive, tensile, and flexural loads. In this experiment, it is used to apply the controlled force required for the shear test.
*   **Key Components:**
    *   **Load Frame:** Provides the structural support for the machine.
    *   **Crosshead:** Moves up or down to apply the load.
    *   **Load Cell:** Measures the applied force (load).
    *   **Control Panel:** Allows for setting the test speed, load, or displacement.
    *   **Data Acquisition System:** Records the applied load and the corresponding deformation.
    *   **Platens/Fixtures:** Where the specimen and the testing fixture are placed.

### 2.2 Shear Shackle

*   **Function:** The shear shackle is a specialized fixture that holds the specimen in a manner that induces shear stress in a specific plane. It is designed to allow failure to occur in shear.
*   **Typical Design:**
    *   A robust base to sit on the CTM's lower platen.
    *   A mechanism to hold one end of the rod securely.
    *   A moving punch or plunger that is driven by the CTM's crosshead.
    *   A die or hole through which the rod is pushed, creating a shear plane.
    *   The mild steel rod is placed in a specific orientation within the shackle. The punch applies a force that causes the rod to be pushed through the die, creating a shear failure across the rod's cross-section at the point where it exits the die.

    **Diagrammatic Representation (Conceptual):**

    ```
       +-------------------+
       |    CTM Crosshead  |
       +-------------------+
               | (Force)
               V
       +-------------------+  <-- Punch
       |       ROD         |
       +-------+-----------+
               |  Shear Plane
       +-------+-----------+
       |       ROD         |
       +-------+-----------+
               |
       +-------------------+  <-- Die (Hole)
       |      SHACKLE      |
       +-------------------+
               |
       +-------------------+  <-- CTM Lower Platen
    ```

### 2.3 Specimen Preparation

*   **Material:** Mild Steel Rod (typically with a known diameter).
*   **Dimensions:** The length of the rod should be sufficient to be held securely by the shackle and to allow for shear deformation. The diameter is a critical parameter for calculations.
*   **Surface Finish:** Ensure the rod is free from significant defects or surface irregularities that could affect the test results.

### 2.4 Test Setup Procedure

1.  **Inspect the CTM and Shear Shackle:** Ensure they are in good working order and clean.
2.  **Place the Shear Shackle:** Position the shear shackle securely on the lower platen of the CTM.
3.  **Insert the Specimen:** Carefully place the mild steel rod into the designated slot/holder within the shear shackle. Ensure it is correctly oriented to experience shear.
4.  **Align the Punch:** Position the CTM's upper platen (with the punch attached or integrated into the shackle's design) so that it aligns correctly with the specimen.
5.  **Set Initial Load:** Zero the load reading on the CTM's control panel or data acquisition system.
6.  **Set Test Parameters:** Configure the CTM for a controlled speed of deformation (e.g., mm/min). A relatively slow speed is usually preferred for shear tests to observe the failure mechanism.

---

## 3. Performing the Shear Test

### 3.1 The Test Procedure

1.  **Start the Test:** Initiate the compression stroke of the CTM at the predetermined speed.
2.  **Monitor Load and Deformation:** The CTM's data acquisition system will continuously record the applied load and the corresponding displacement of the crosshead (which relates to the deformation of the rod).
3.  **Observe the Specimen:** Visually inspect the specimen as the load increases. You will observe the rod being pushed through the die.
4.  **Peak Load:** The load will increase until the rod begins to shear. The peak load is the maximum force recorded just before or during the shearing process.
5.  **Failure:** The rod will fracture in shear across its cross-section at the edge of the die.
6.  **Continue the Test (Optional):** You may continue the test for a short duration after failure to observe the behavior of the sheared pieces.
7.  **Stop the Test:** Once the shearing is complete and the load has dropped significantly, stop the CTM.

### 3.2 Data Recording

*   **Raw Data:** The primary data collected will be pairs of load (Force, $F$) and corresponding deformation (Displacement, $\delta$).
*   **Key Measurement:** The **maximum load** reached during the test is critical.
*   **Specimen Dimensions:** Record the **original diameter** of the mild steel rod.

---

## 4. Data Analysis and Calculations

### 4.1 Load-Deformation Curve

*   **Plotting:** Plot the recorded data with Load (Force, $F$) on the y-axis and Deformation (Displacement, $\delta$) on the x-axis.
*   **Interpretation:**
    *   The initial part of the curve might show some elastic deformation.
    *   As the rod approaches yielding and shearing, the curve will become steeper.
    *   The **peak of the curve** represents the maximum load the rod could withstand before shearing.
    *   After the peak, the load will drop as the shearing occurs.

### 4.2 Calculating Shear Strength

*   **Shear Area:** The cross-sectional area of the rod that is undergoing shear. For a circular rod, this is the area of the circle.
    $$ A = \frac{\pi d^2}{4} $$
    Where:
    *   $d$ is the original diameter of the rod.
*   **Shear Strength ($\tau_{max}$):** This is the maximum shear stress the material can withstand before failure. It is calculated using the maximum load recorded and the shear area.
    $$ \tau_{max} = \frac{F_{max}}{A} $$
    Where:
    *   $F_{max}$ is the maximum load recorded from the test.
    *   $A$ is the shear area.

### 4.3 Units

*   **Force:** Typically measured in Newtons (N) or kilonewtons (kN).
*   **Diameter:** Typically measured in millimeters (mm) or meters (m).
*   **Area:** Typically calculated in square millimeters (mm²) or square meters (m²).
*   **Shear Strength:** Usually expressed in Megapascals (MPa) or Gigapascals (GPa).
    *   If $F$ is in N and $d$ is in mm, then $A$ will be in mm².
    *   $\tau_{max} = \frac{F (\text{N})}{A (\text{mm}^2)} \Rightarrow \tau_{max} (\text{MPa})$

---

## 5. Interpretation of Results and Conclusions

### 5.1 Failure Mode

*   **Observation:** Examine the fracture surface of the sheared rod.
*   **Expected Behavior:** Mild steel typically exhibits a ductile failure in shear, characterized by a relatively smooth, often slightly cup-and-cone type fracture surface. There might be some evidence of plastic deformation around the shear plane.

### 5.2 Factors Affecting Results

*   **Specimen Dimensions:** Variations in rod diameter.
*   **Material Properties:** Variations in the batch of mild steel.
*   **Test Speed:** Very high speeds can sometimes affect the apparent strength.
*   **Accuracy of Measurement:** Precision of the CTM's load cell and displacement sensors.
*   **Fixture Alignment:** Misalignment of the rod or punch in the shackle.
*   **Surface Defects:** Cracks or notches on the rod.

### 5.3 Drawing Conclusions

*   State the calculated shear strength of the mild steel rod.
*   Compare the obtained shear strength with known values for mild steel (if available).
*   Discuss the observed failure mode and whether it is consistent with expected ductile behavior.
*   Comment on any factors that might have influenced the results.

---

## 6. Practice Questions and Exercises

**Problem 1:**

A shear test was conducted on a mild steel rod with a diameter of 10 mm. The maximum load recorded during the test was 65 kN. Calculate the shear strength of the mild steel rod.

**Solution:**

1.  **Calculate the shear area (A):**
    $d = 10 \, \text{mm}$
    $A = \frac{\pi d^2}{4} = \frac{\pi \times (10 \, \text{mm})^2}{4} = \frac{\pi \times 100 \, \text{mm}^2}{4} = 25\pi \, \text{mm}^2 \approx 78.54 \, \text{mm}^2$

2.  **Calculate the shear strength ($\tau_{max}$):**
    $F_{max} = 65 \, \text{kN} = 65 \times 10^3 \, \text{N}$
    $\tau_{max} = \frac{F_{max}}{A} = \frac{65 \times 10^3 \, \text{N}}{78.54 \, \text{mm}^2} \approx 827.6 \, \text{MPa}$

**Answer:** The shear strength of the mild steel rod is approximately 827.6 MPa.

**Problem 2:**

A mild steel rod has a shear strength of 400 MPa. If the rod has a diameter of 12 mm, what is the maximum shear force it can withstand?

**Solution:**

1.  **Calculate the shear area (A):**
    $d = 12 \, \text{mm}$
    $A = \frac{\pi d^2}{4} = \frac{\pi \times (12 \, \text{mm})^2}{4} = \frac{\pi \times 144 \, \text{mm}^2}{4} = 36\pi \, \text{mm}^2 \approx 113.1 \, \text{mm}^2$

2.  **Calculate the maximum shear force ($F_{max}$):**
    $\tau_{max} = 400 \, \text{MPa} = 400 \, \text{N/mm}^2$
    $F_{max} = \tau_{max} \times A = (400 \, \text{N/mm}^2) \times (113.1 \, \text{mm}^2) \approx 45240 \, \text{N}$
    $F_{max} \approx 45.24 \, \text{kN}$

**Answer:** The mild steel rod can withstand a maximum shear force of approximately 45.24 kN.

---

## Important Points to Remember:

*   **Shear stress acts parallel to the cross-section.**
*   **The CTM applies the force, and the shear shackle creates the shear plane.**
*   **The diameter of the rod is crucial for calculating the shear area.**
*   **The peak load recorded is the force at which shear failure occurs.**
*   **Shear strength is calculated as Maximum Load / Shear Area.**
*   **Units must be consistent for accurate calculations.**
*   **Observe the failure mode to understand the material's behavior.**
*   **Always wear appropriate safety gear in the lab.**

---
