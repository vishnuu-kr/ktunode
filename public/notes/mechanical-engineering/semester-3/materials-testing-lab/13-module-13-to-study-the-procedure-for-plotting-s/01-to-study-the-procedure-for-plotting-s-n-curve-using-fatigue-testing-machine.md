---
title: "To study the procedure for plotting S-N curve using Fatigue testing machine"
subject: "MATERIALS TESTING LAB"
module: "Module 13: To study the procedure for plotting S"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e88"
status: "completed"
scrapedAt: "2026-05-20T17:50:27.320Z"
---
# Materials Testing Lab: Module 13 - Plotting S-N Curves using Fatigue Testing Machines

## Topic: To study the procedure for plotting S-N curve using Fatigue testing machine

### **Introduction**

Fatigue is a critical failure mechanism in materials, especially under cyclic loading conditions. Understanding a material's resistance to fatigue is crucial for designing components that operate under repeated stresses, such as in aircraft structures, automotive parts, and rotating machinery. The S-N curve, also known as the Wöhler curve, is a graphical representation that illustrates the relationship between the applied stress amplitude (S) and the number of cycles to failure (N) for a material. This module will guide you through the procedure of plotting an S-N curve using a fatigue testing machine.

---

### **Learning Outcomes Covered:**

*   **Evaluate the mechanical properties of different materials under various loading conditions (CO1 - K3):** This module directly addresses this by demonstrating how to determine the fatigue strength and endurance limit, which are key mechanical properties related to cyclic loading.
*   **Relate material microstructure to its mechanical behaviour (CO2 - K4):** While the direct measurement of microstructure isn't part of this lab, understanding fatigue failure mechanisms (covered in related theory) allows for relating microstructural features to the observed fatigue life.
*   **Analyse the effect of design features on the performance of mechanical components (CO3 - K4):** The S-N curve is a fundamental tool for designers to assess the suitability of materials for components subjected to fatigue, thus influencing design decisions.
*   **Utilize experimental techniques to determine material properties (CO4 - K3):** This module provides a hands-on understanding of the experimental setup and procedure for fatigue testing.
*   **Apply fundamental engineering principles to analyse the behaviour of structures under load (CO5 - K3):** Fatigue testing and the interpretation of S-N curves are applications of fundamental principles of mechanics of materials and material science.

---

### **Key Concepts and Definitions**

*   **Fatigue:** The phenomenon of progressive and localized structural damage that occurs when a material is subjected to cyclic or fluctuating stresses.
*   **Fatigue Strength (or Stress Life):** The maximum stress a material can withstand for a specified number of cycles without failing. Typically expressed as $\sigma_a$ or $S$.
*   **Endurance Limit (or Fatigue Limit):** The stress level below which a material can theoretically withstand an infinite number of cycles without failure. This is characteristic of ferrous alloys and titanium alloys. Other materials, like aluminum and copper alloys, do not exhibit a true endurance limit but have a fatigue strength at a very high number of cycles.
*   **Stress Amplitude ($\sigma_a$ or S):** Half the difference between the maximum stress ($\sigma_{max}$) and the minimum stress ($\sigma_{min}$) in a cycle.
    $S = \frac{\sigma_{max} - \sigma_{min}}{2}$
*   **Mean Stress ($\sigma_m$):** The average of the maximum and minimum stress in a cycle.
    $\sigma_m = \frac{\sigma_{max} + \sigma_{min}}{2}$
*   **Stress Ratio (R):** The ratio of the minimum stress to the maximum stress in a cycle.
    $R = \frac{\sigma_{min}}{\sigma_{max}}$
*   **Number of Cycles to Failure (N):** The total number of stress cycles a material can endure before fracturing.
*   **S-N Curve (Wöhler Curve):** A plot of stress amplitude (S) versus the logarithm of the number of cycles to failure (N).
*   **Fatigue Testing Machine:** A specialized machine designed to apply controlled cyclic loads to a specimen to determine its fatigue life. Common types include rotating-beam, axial-load, and vibratory fatigue testers.

---

### **Understanding Fatigue Failure (Referencing Callister & Rethwisch, Chapter 7, Chapter 9, Chapter 12)**

Fatigue failure is a progressive process that typically involves three stages:

1.  **Crack Initiation:** Cracks usually begin at stress concentrations, such as surface imperfections, microscopic flaws, or geometric discontinuities.
2.  **Crack Propagation:** Once initiated, the crack grows incrementally with each applied stress cycle. The crack front often exhibits characteristic "beach marks" or "striations" visible under a microscope.
3.  **Final Fracture:** When the crack reaches a critical size, the remaining cross-section can no longer support the applied load, leading to rapid, brittle fracture.

The resistance of a material to fatigue is influenced by its microstructure, surface condition, and the presence of defects. For example, fine-grained structures generally exhibit better fatigue resistance than coarse-grained ones (Callister & Rethwisch).

---

### **Procedure for Plotting an S-N Curve using a Fatigue Testing Machine**

The fundamental principle is to test multiple identical specimens, each subjected to a different constant stress amplitude, and record the number of cycles each specimen survives before failure.

#### **1. Specimen Preparation**

*   **Material Selection:** Choose the material to be tested.
*   **Machining:** Machine multiple specimens from the same batch of material. These specimens should be identical in geometry and surface finish. Fatigue specimens are typically waisted (reduced in the central section) to ensure that fracture occurs in the gauge length and to provide a consistent stress distribution.
*   **Surface Finish:** The surface finish is critical as fatigue often initiates at the surface. A smooth, polished surface generally leads to higher fatigue life compared to a rough surface. The required surface finish depends on the application and the material being tested. (Refer to Callister & Rethwisch, Chapter 12 on surface properties).

#### **2. Fatigue Testing Machine Setup**

*   **Machine Type:** Select the appropriate fatigue testing machine (e.g., rotating-beam fatigue tester, axial-load fatigue tester). The type of machine determines the nature of the cyclic stress applied.
    *   **Rotating-Beam Fatigue Tester:** A common method where a cylindrical specimen is bent by a constantly applied load while it rotates. This creates a condition of fully reversed axial stress ($\sigma_{max} = -\sigma_{min}$) along the surface of the specimen. The stress amplitude is proportional to the applied load.
    *   **Axial-Load Fatigue Tester:** Applies fluctuating axial loads directly to the specimen, allowing for control of stress ratio (R).
*   **Load Application:**
    *   Set the desired stress level (or load that will produce the desired stress) for the first specimen. This is typically a relatively high stress for testing early points on the curve.
    *   Set the frequency of cyclic loading. Higher frequencies can accelerate testing but might introduce heating effects, which need to be managed.
*   **Data Acquisition:** Ensure the machine is configured to accurately record the number of cycles completed by each specimen.

#### **3. Conducting the Tests**

*   **Test Multiple Specimens:** Test a series of specimens, each at a different stress amplitude.
*   **High Stress to Low Stress:** It is common practice to start testing at a high stress amplitude, which results in a low number of cycles to failure (e.g., $10^3$ to $10^5$ cycles). Then, progressively decrease the stress amplitude for subsequent specimens, which will result in a higher number of cycles to failure.
*   **Minimum Number of Data Points:** To establish a reliable S-N curve, a minimum of 5-8 data points are generally required, spanning a wide range of N values.
*   **Testing to High Cycles:** For materials exhibiting an endurance limit, it is important to test specimens at stress levels below the suspected endurance limit to confirm that they survive a very large number of cycles (e.g., $10^7$ or more). If a specimen survives this high number of cycles, it is considered to have infinite life at that stress level.
*   **Record Data:** For each tested specimen, record:
    *   Applied stress amplitude ($S$)
    *   Number of cycles to failure ($N$)
    *   Type of fracture surface (if observed)

#### **4. Plotting the S-N Curve**

*   **Axes:** Plot the stress amplitude ($S$) on the vertical axis and the number of cycles to failure ($N$) on the horizontal axis.
*   **Logarithmic Scales:** Typically, both axes are plotted on a logarithmic scale. This allows for a wider range of N values to be displayed effectively and often results in a nearly linear relationship for many materials, especially in the high-cycle fatigue region.
*   **Plot Data Points:** Mark each (N, S) data pair obtained from the fatigue tests on the graph.
*   **Curve Fitting:** Draw a smooth curve that best fits the plotted data points. This curve is the S-N curve for the material under the specific test conditions (e.g., stress ratio, temperature, specimen geometry).
*   **Identifying Endurance Limit (if applicable):** If the curve becomes horizontal at a certain stress level, that stress level represents the endurance limit of the material.

---

### **Factors Affecting Fatigue Life (Referencing Kuhn & Medlin, Volume 8)**

Several factors can significantly influence the fatigue life of a material and the resulting S-N curve:

*   **Stress Concentration:** Features like notches, holes, or sharp corners can concentrate stress, leading to premature crack initiation and reduced fatigue life.
*   **Surface Finish:** As mentioned, smoother surfaces generally have better fatigue resistance.
*   **Mean Stress:** Tensile mean stresses tend to reduce fatigue life, while compressive mean stresses can improve it.
*   **Environment:** Corrosive environments can accelerate fatigue crack growth (corrosion fatigue).
*   **Temperature:** Elevated temperatures can reduce fatigue strength, while very low temperatures might alter fracture modes.
*   **Material Properties:** The inherent strength, ductility, microstructure, and presence of defects all play a role. (Refer to Callister & Rethwisch for material properties).
*   **Loading Frequency:** While not always a primary factor in the S-N curve itself, very high frequencies can lead to self-heating, which might affect the test.

---

### **Examples**

*   **Steel vs. Aluminum:** Steel alloys often exhibit a distinct endurance limit, meaning the S-N curve becomes horizontal at a certain stress level. Aluminum alloys, on the other hand, typically do not have a sharp endurance limit; their fatigue strength continues to increase with decreasing stress, albeit at a slower rate. This is a crucial difference for designers.
*   **Notched Specimen vs. Smooth Specimen:** A specimen with a sharp notch will likely have a significantly lower fatigue life than a smooth specimen of the same material when tested at the same stress concentration factor. The S-N curve for the notched specimen would lie below that of the smooth specimen. This relates to CO3: Analyse the effect of design features.

---

### **Practice Questions/Exercises**

**Question 1:** Define fatigue and explain the three stages of fatigue failure. (Relates to CO1, CO2)

**Question 2:** What is the difference between fatigue strength and endurance limit? For which class of materials is an endurance limit typically observed? (Relates to CO1)

**Question 3:** A fatigue test was conducted on a steel specimen. The following data was obtained:

| Specimen | Stress Amplitude (S), MPa | Number of Cycles to Failure (N) |
| :------- | :------------------------ | :------------------------------ |
| 1        | 500                       | $8 \times 10^4$                 |
| 2        | 450                       | $1.5 \times 10^5$               |
| 3        | 400                       | $4 \times 10^5$                 |
| 4        | 350                       | $1.2 \times 10^6$               |
| 5        | 300                       | $5 \times 10^6$                 |
| 6        | 250                       | $> 10^7$                        |

a) Plot the S-N curve using these data points on semi-logarithmic axes (S on linear, N on log).
b) Estimate the fatigue strength of the material at $10^6$ cycles.
c) Based on the data, what is the approximate endurance limit of this steel? (Relates to CO4)

**Question 4:** Briefly explain how surface finish can affect the fatigue life of a component. (Relates to CO2, CO3)

---

### **Answers to Practice Questions**

**Answer 1:**
*   **Fatigue:** The phenomenon of progressive and localized structural damage that occurs when a material is subjected to cyclic or fluctuating stresses.
*   **Stages of Fatigue Failure:**
    1.  **Crack Initiation:** Cracks begin at stress concentrations or surface defects.
    2.  **Crack Propagation:** The crack grows incrementally with each stress cycle.
    3.  **Final Fracture:** The crack reaches a critical size, leading to rapid failure.

**Answer 2:**
*   **Fatigue Strength:** The maximum stress a material can withstand for a specified number of cycles without failing.
*   **Endurance Limit:** The stress level below which a material can theoretically withstand an infinite number of cycles without failure.
*   Endurance limits are typically observed in **ferrous alloys (like steel) and titanium alloys**.

**Answer 3:**

a) **Plotting the S-N Curve:**
You would create a graph with the vertical axis representing Stress Amplitude (S) (linear scale) and the horizontal axis representing the Number of Cycles to Failure (N) (logarithmic scale). You would then plot the points (e.g., (80000, 500), (150000, 450), etc.). You would then draw a smooth curve through these points.

b) **Fatigue Strength at $10^6$ cycles:**
Looking at the table, the stress for $5 \times 10^6$ cycles is 300 MPa, and for $> 10^7$ cycles (implying the endurance limit is at or below 250 MPa) is 250 MPa. Interpolating between these points or simply observing the trend, the fatigue strength at $10^6$ cycles would be approximately **between 300 MPa and 350 MPa**, likely closer to 300 MPa based on the provided data points.

c) **Approximate Endurance Limit:**
The data for specimen 6 shows that it survived greater than $10^7$ cycles at a stress of 250 MPa. This suggests that the endurance limit for this steel is at or below **250 MPa**. If you were to test further points below 250 MPa and they also survived $> 10^7$ cycles, you would confirm this value.

**Answer 4:**
A smoother surface finish reduces the number of potential crack initiation sites and stress concentrators. Therefore, a smoother surface generally leads to a higher fatigue life, meaning the component can withstand more cycles at a given stress level or a higher stress for a given number of cycles, compared to a component with a rough surface. This is because fatigue cracks most commonly initiate at surface imperfections.

---

### **Important Points to Remember**

*   **S-N curves are material-specific:** They are also dependent on test conditions (e.g., stress ratio, temperature, environment).
*   **Logarithmic scales are crucial:** For visualizing the wide range of cycles to failure.
*   **Surface condition is paramount:** Fatigue often initiates at the surface.
*   **Multiple specimens are necessary:** To obtain statistically significant results and establish a reliable curve.
*   **Endurance limit is not universal:** Only certain material classes exhibit a true endurance limit. For others, fatigue strength is quoted at a specific high number of cycles (e.g., $10^7$ or $10^8$).
*   **Design implications:** S-N curves are direct tools for engineers to select materials and design components for fatigue resistance (CO3).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **References**

*   **Callister's Materials Science and Engineering by D. Wayne Callister and David G. Rethwisch** (Wiley, 10th Ed (2018)) - Provides foundational knowledge on material properties, strengthening mechanisms, and fatigue failure mechanisms (Chapters 7, 9, 12).
*   **Mechanical Testing and Evaluation by Howard Kuhn; Dana Medlin** (ASM International, Volume 8 (2000)) - Offers detailed insights into various testing methods, including fatigue testing, and interpretation of results.
*   **Mechanics of Materials by James M. Gere and Barry J. Goodno** (Cengage Learning, 9th Ed (2022)) - Useful for understanding stress analysis and the concepts of stress amplitude and mean stress.
*   **Introduction to Materials Science for Engineers by James F. Shackelford** (Pearson, 8th Ed (2022)) - Provides a good overview of material behavior and properties relevant to fatigue.

---