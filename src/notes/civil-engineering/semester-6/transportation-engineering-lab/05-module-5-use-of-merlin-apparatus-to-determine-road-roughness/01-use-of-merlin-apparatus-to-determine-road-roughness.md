---
title: "Use of MERLIN apparatus to determine road roughness"
subject: "TRANSPORTATION ENGINEERING LAB"
module: "Module 5: Use of MERLIN apparatus to determine road roughness"
branch: "Civil Engineering"
semester: 6
topicId: "689f15cf56b5e963ba8113be"
status: "completed"
scrapedAt: "2026-05-20T18:56:34.988Z"
---
# Transportation Engineering Lab: Module 5 - Road Roughness Measurement using MERLIN Apparatus

## Topic: Use of MERLIN Apparatus to Determine Road Roughness

### 1. Introduction to Road Roughness

**What is Road Roughness?**
Road roughness refers to the measure of deviations of the road surface from a perfectly planar surface. It is a crucial indicator of the riding quality of a road, affecting vehicle performance, fuel consumption, tire wear, and most importantly, the comfort and safety of road users.

**Why Measure Road Roughness?**
*   **Riding Quality Assessment:** To quantify how smoothly vehicles can travel over a road surface.
*   **Pavement Condition Monitoring:** To track the deterioration of pavements over time and identify areas needing maintenance.
*   **Performance-Based Specifications:** To ensure that newly constructed or rehabilitated pavements meet minimum roughness standards.
*   **Research and Development:** To study the impact of different materials, construction techniques, and traffic loads on pavement performance.

### 2. The MERLIN Apparatus

**MERLIN** stands for **M**echanical **E**valuation of **R**oad **L**ongitudinal **I**nformation. It is a semi-automatic device used for measuring road roughness.

**Princ of Operation:**
The MERLIN apparatus measures the vertical displacement of a wheel rolling along the road surface. This displacement is directly related to the longitudinal profile of the road.

**Components of MERLIN Apparatus:**
*   **Wheel Assembly:** A freely rotating wheel that rolls on the road surface.
*   **Measuring Head:** Contains a mechanism to detect and record the vertical movement of the wheel relative to the main body of the apparatus. This typically involves a **potentiometer** or an **LVDT (Linear Variable Differential Transformer)**.
*   **Carriage/Frame:** A stable frame that supports the wheel and the measuring head.
*   **Data Acquisition System:** This can range from simple analog recorders to digital data loggers that record the output of the measuring head as the MERLIN is pulled along the road.
*   **Towing Mechanism:** The MERLIN is typically towed by a vehicle at a controlled speed.

**How it Works (Simplified):**
1.  The MERLIN apparatus is placed on the road surface.
2.  The measuring wheel is lowered onto the road.
3.  As the MERLIN is towed, the measuring wheel rolls along the road.
4.  The vertical deviations of the road surface cause the measuring wheel to move up and down.
5.  This vertical movement is translated into an electrical signal by the potentiometer or LVDT in the measuring head.
6.  The electrical signal is recorded by the data acquisition system, providing a continuous record of the road profile.

### 3. Measuring Road Roughness with MERLIN

**Key Concepts:**
*   **Longitudinal Profile:** The vertical alignment of the road surface along its length.
*   **Vertical Displacement:** The change in height of the measuring wheel as it encounters irregularities.
*   **Rolling Wheel:** The MERLIN's wheel is designed to simulate the movement of a vehicle's wheel.

**Procedure for Measurement:**
1.  **Calibration:** Ensure the MERLIN apparatus is properly calibrated according to the manufacturer's specifications. This usually involves checking the output at known displacements.
2.  **Site Selection:** Identify the specific section of the road to be measured. Mark the start and end points clearly.
3.  **Towing Setup:** Attach the MERLIN to a towing vehicle (e.g., a car or a utility vehicle) using a suitable hitch.
4.  **Data Logger Setup:** Connect and start the data acquisition system. Ensure it is set to record the output from the MERLIN.
5.  **Traversal:** Tow the MERLIN along the selected road section at a constant, specified speed (e.g., 20-30 km/h). It's crucial to maintain this speed for consistent readings.
6.  **Multiple Passes:** For better accuracy and to account for variations, it is recommended to conduct multiple passes in each lane. Typically, two passes in each direction of travel are made.
7.  **Data Recording:** The data logger records the electrical signal (representing vertical displacement) against distance traveled.
8.  **Data Transfer and Processing:** After the measurement, transfer the recorded data to a computer for analysis.

### 4. Data Analysis and Interpretation

**Raw Data:**
The raw data from the MERLIN typically consists of a series of voltage readings or digital values corresponding to the vertical displacement at regular intervals along the road.

**Processing Steps:**
1.  **Conversion to Displacement:** Convert the raw electrical signals into actual vertical displacement values using the calibration factor.
2.  **Filtering:** Apply filters to remove noise or unwanted high-frequency vibrations that are not representative of road roughness.
3.  **Calculation of Roughness Index:** The processed data is used to calculate a roughness index. Common indices derived from MERLIN data include:
    *   **Mean Absolute Deviation (MAD):** The average of the absolute values of the vertical displacements.
    *   **Root Mean Square (RMS):** The square root of the average of the squared vertical displacements.
    *   **International Roughness Index (IRI):** A widely accepted standard roughness index that simulates the response of a standard quarter-car model to the road profile. The MERLIN's output can be used to calculate IRI.

**Formula for IRI (Conceptual):**
IRI is calculated by simulating the response of a standard sprung mass (quarter-car model) to the measured road profile. This involves integrating the absolute value of the simulated suspension stroke over the length of the measured section, divided by the length of the section.

$\text{IRI} = \frac{1}{L} \int_{0}^{L} |y_s(t)| dt$

Where:
*   $L$ is the length of the road section.
*   $y_s(t)$ is the vertical displacement of the sprung mass (simulated suspension stroke).

**Example of Data Interpretation:**
Imagine a MERLIN is used to measure a 100-meter section of road. The processed data shows that the average absolute vertical displacement is 5 mm. This could be reported as a MAD value of 5 mm. If the data is further processed to calculate IRI, and the resulting IRI value is 2.5 m/km, this indicates a moderate level of roughness.

### 5. Learning Outcomes Addressed

*   **Understand the concept of road roughness:** Covered in Section 1.
*   **Familiarize with the MERLIN apparatus and its working principle:** Covered in Section 2.
*   **Learn the procedure for measuring road roughness using MERLIN:** Covered in Section 3.
*   **Understand the basic principles of data analysis and interpretation:** Covered in Section 4.
*   **Calculate or interpret standard roughness indices like IRI:** Briefly introduced in Section 4. (Detailed IRI calculation might be a separate lab exercise).

### 6. Practice Questions & Exercises

**Question 1:**
What is the primary purpose of measuring road roughness?
a) To measure the width of the road.
b) To assess the riding quality and condition of the pavement.
c) To determine the number of lanes on the road.
d) To calculate the speed limit.

**Answer:** b) To assess the riding quality and condition of the pavement.

**Question 2:**
What does the acronym MERLIN stand for?
a) Mechanical Evaluation of Road Longitudinal Information
b) Mobile Evaluation of Road Leveling Instrument
c) Measurement of Road Surface Irregularities
d) Motorized Equipment for Roughness Level Investigation

**Answer:** a) Mechanical Evaluation of Road Longitudinal Information

**Question 3:**
Which of the following components in the MERLIN apparatus is responsible for detecting the vertical movement of the measuring wheel?
a) The towing mechanism
b) The carriage frame
c) The measuring head (containing a potentiometer or LVDT)
d) The data logger

**Answer:** c) The measuring head (containing a potentiometer or LVDT)

**Question 4:**
Why is it important to maintain a constant speed when using the MERLIN apparatus?
a) To ensure the towing vehicle doesn't run out of fuel.
b) To get consistent and comparable readings, as the apparatus's response can be speed-dependent.
c) To make the measurement process faster.
d) To avoid disturbing the road surface.

**Answer:** b) To get consistent and comparable readings, as the apparatus's response can be speed-dependent.

**Question 5 (Conceptual):**
If a MERLIN apparatus measures a road section and the processed data shows a high IRI value, what does this generally imply about the road surface?

**Answer:** A high IRI value implies that the road surface is rough, with significant deviations from a smooth, planar surface. This would likely result in a poor riding quality.

### 7. Important Points to Remember

*   **Calibration is Key:** Always ensure the MERLIN apparatus is correctly calibrated before use.
*   **Consistent Speed:** Maintain a constant and specified towing speed for accurate and comparable data.
*   **Multiple Passes:** Conduct multiple passes in each direction to account for variability and improve reliability.
*   **Environmental Conditions:** Avoid measuring during or immediately after heavy rainfall, as water on the surface can affect readings.
*   **Road Surface Type:** Be aware that the performance of the MERLIN might vary slightly on different pavement types (e.g., asphalt vs. concrete).
*   **IRI is the Standard:** While MERLIN can measure various indices, IRI is the most commonly used standard for reporting road roughness globally.

---

These notes provide a comprehensive overview of the MERLIN apparatus and its use in determining road roughness. Remember to refer to specific laboratory manuals and manufacturer guidelines for detailed operational procedures and data analysis techniques relevant to your course.
