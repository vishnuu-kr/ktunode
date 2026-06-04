---
title: "Exercises on lathe: - Plain and step turning."
subject: "MANUFACTURING TECHNOLOGY LAB"
module: "Module 1: Exercises on lathe: "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1451d0cf480446334f"
status: "completed"
scrapedAt: "2026-05-20T17:54:14.781Z"
---
# MANUFACTURING TECHNOLOGY LAB - Module 1: Exercises on Lathe: Plain and Step Turning

---

## **Introduction to Lathe Operations**

The lathe is a fundamental machine tool used for shaping workpieces by rotating them against a cutting tool. It is primarily used for producing cylindrical, conical, and other axisymmetric shapes. Understanding lathe operations is crucial for achieving desired part features and quality, directly contributing to **CO1: The students can operate different machine tools with understanding of work holders and operating principles to produce different part features to the desired quality.**

### **Key Concepts:**

*   **Workpiece:** The material being machined.
*   **Cutting Tool:** The sharp edge that removes material from the workpiece.
*   **Spindle:** The rotating part of the lathe that holds the workpiece.
*   **Carriage:** The assembly that moves the cutting tool along the workpiece.
*   **Headstock:** Houses the spindle and drive mechanism.
*   **Tailstock:** Provides support for long workpieces and can be used to hold tools for drilling or reaming.
*   **Bed:** The main structural component of the lathe.
*   **Lead Screw & Feed Rod:** Provide longitudinal and cross-feed movement to the carriage.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **Reference:**

*   **HMT Production Technology (2017):** Chapters on Lathe operations provide a comprehensive overview of lathe components, types, and basic machining processes.
*   **W. A. J. Chapman Workshop Technology Part I (1972):** Offers detailed explanations of machine tool principles, including the functioning of a lathe.

---

## **Exercise 1: Plain Turning**

Plain turning is a basic lathe operation that reduces the diameter of a cylindrical workpiece to a specific dimension. This exercise is foundational for understanding workpiece setup and tool movement.

### **Learning Outcomes Covered:**

*   **CO1:** Operating the lathe to produce a cylindrical feature.

### **Key Concepts & Definitions:**

*   **Plain Turning:** Machining a cylindrical surface parallel to the axis of rotation.
*   **Depth of Cut (d):** The thickness of the layer of material removed by the cutting tool in a single pass.
    *   *Formula:* $d = (D_{initial} - D_{final}) / 2$
        *   Where $D_{initial}$ is the initial diameter and $D_{final}$ is the final diameter.
*   **Cutting Speed (v):** The peripheral velocity of the workpiece at the cutting edge.
    *   *Formula:* $v = (\pi * D * N) / 1000$ (where D is in mm, N in rpm, v in m/min)
*   **Feed (f):** The distance the cutting tool advances along the workpiece axis per revolution of the workpiece.
*   **Material Removal Rate (MRR):** The volume of material removed per unit time.
    *   *Formula:* $MRR = v * f * d$ (approximate, for turning)
*   **Surface Finish:** The quality of the machined surface, influenced by factors like cutting speed, feed, depth of cut, and tool geometry.
*   **Work Holder:** In plain turning, the workpiece is typically held between centers (using a driving dog and faceplate) or in a chuck.

### **Procedure (General Steps):**

1.  **Select and Inspect Workpiece:** Choose a suitable raw material and ensure it is free from defects.
2.  **Mount Workpiece:**
    *   **Between Centers:** Center punch both ends of the workpiece. Mount centers in the headstock and tailstock spindles. Clamp the workpiece between the centers and use a driving dog to transmit rotation from the faceplate.
    *   **In a Chuck:** Grip the workpiece securely in a three-jaw or four-jaw chuck.
3.  **Select and Mount Cutting Tool:** Use an appropriate HSS or carbide turning tool. Mount it securely in the tool post.
4.  **Set Tool Height:** Align the cutting tool tip with the center height of the workpiece.
5.  **Set Lathe Parameters:**
    *   **Spindle Speed (N):** Based on the chosen cutting speed (v) and workpiece diameter (D).
    *   **Feed Rate (f):** Selected based on the desired surface finish and MRR.
    *   **Depth of Cut (d):** Typically set to remove most of the excess material in roughing passes, with a lighter depth of cut for finishing.
6.  **Perform Machining:**
    *   **Roughing Passes:** Remove excess material to bring the workpiece close to the final dimension. Take multiple passes with appropriate depth of cut and feed.
    *   **Finishing Pass:** A final pass with a lighter depth of cut and finer feed to achieve the desired surface finish and dimensional accuracy.
7.  **Measure and Inspect:** Use measuring instruments (e.g., vernier caliper, micrometer) to check the diameter, length, and surface finish.

### **Example:**

Turn a mild steel rod of 25 mm diameter and 100 mm length down to 20 mm diameter.

*   **Initial Diameter ($D_{initial}$):** 25 mm
*   **Final Diameter ($D_{final}$):** 20 mm
*   **Total depth of cut required:** $(25 - 20) / 2 = 2.5$ mm

Let's say we choose a cutting speed $v = 60$ m/min and a feed $f = 0.2$ mm/rev.

*   **Calculate Spindle Speed (N):**
    *   $N = (1000 * v) / (\pi * D_{initial})$ for roughing, or use the average diameter. Let's use the initial diameter for initial setup:
    *   $N = (1000 * 60) / (\pi * 25) \approx 764$ rpm.
*   **Depth of Cut per pass:** If we decide on a depth of cut of 1 mm per pass (for roughing), we'll need 3 passes to remove 2.5 mm depth (1mm, 1mm, 0.5mm).
    *   Pass 1: Remove 1 mm depth (Dia from 25 to 23 mm).
    *   Pass 2: Remove 1 mm depth (Dia from 23 to 21 mm).
    *   Pass 3: Remove 0.5 mm depth (Dia from 21 to 20 mm).
*   **Finishing Pass:** A final pass with a reduced feed (e.g., 0.1 mm/rev) and a smaller depth of cut (e.g., 0.2 mm) after bringing it to 20 mm.

### **Important Points to Remember:**

*   **Tool Geometry:** The rake angles, clearance angles, and nose radius of the cutting tool significantly affect surface finish and tool life.
*   **Coolant:** Use appropriate coolant to reduce friction, cool the workpiece and tool, and flush away chips, especially for harder materials.
*   **Chucks vs. Centers:** Choose the appropriate work holder based on the workpiece shape and length.
*   **Accuracy:** Take careful measurements after each pass, especially during finishing.

---

## **Exercise 2: Step Turning**

Step turning is a lathe operation used to create multiple cylindrical diameters on a single workpiece in a single setup. This allows for the production of components with varying diameters, common in shafts and arbors.

### **Learning Outcomes Covered:**

*   **CO1:** Operating the lathe to produce multiple part features (different diameters).

### **Key Concepts & Definitions:**

*   **Step Turning:** Machining a workpiece to create shoulders or steps of different diameters.
*   **Shoulder:** The abrupt change in diameter on a workpiece.
*   **Chamfering:** Slightly beveling the edge of a step to remove sharp corners and improve handling and stress distribution. This is often done in conjunction with step turning.
*   **Interference Fit:** Sometimes, steps are machined to specific dimensions to allow for press fits with mating parts.

### **Procedure (General Steps):**

The procedure is similar to plain turning but involves repositioning the carriage and/or using the cross-slide to create different diameters.

1.  **Mount Workpiece:** As in plain turning, secure the workpiece between centers or in a chuck. Ensure it is correctly aligned if multiple features are to be machined.
2.  **Select and Mount Cutting Tool:** A general-purpose turning tool is usually sufficient.
3.  **Set Tool Height:** Align with the center height.
4.  **Set Lathe Parameters:** Determine appropriate speeds, feeds, and depths of cut for each step, considering the different diameters.
5.  **Machine the First Step:** Perform plain turning to achieve the first desired diameter and length.
6.  **Position for the Second Step:**
    *   **Using Carriage Movement:** Move the carriage longitudinally along the bed to position the tool for the next step.
    *   **Using Cross-Slide Movement:** Engage the cross-slide to move the tool radially to the required diameter.
7.  **Machine Subsequent Steps:** Repeat plain turning for each subsequent step, carefully managing longitudinal and cross-feed movements.
8.  **Chamfering (Optional but Recommended):** If required, use a chamfering tool or the corner of the turning tool to create a chamfer at the edge of each step.
9.  **Measure and Inspect:** Carefully measure all diameters, lengths, and check for squareness of the shoulders.

### **Example:**

Machine a steel rod to create steps of diameters 20 mm, 25 mm, and 30 mm, each with a length of 30 mm. Assume the raw material is 35 mm diameter and 100 mm long.

*   **Sequence:**
    *   Turn the 20 mm diameter section (length 30 mm).
    *   Turn the 25 mm diameter section (length 30 mm), creating a shoulder at the end of the 20 mm section.
    *   Turn the 30 mm diameter section (length 30 mm), creating a shoulder at the end of the 25 mm section.
    *   The remaining section will be the original 35 mm diameter.

*   **Machining Considerations:**
    *   Start by turning the smallest diameter first is often preferred to minimize deflection. Alternatively, one can start with the largest diameter and work inwards. The sequence depends on the specific setup and desired outcome.
    *   When turning a larger diameter after a smaller one, ensure the cutting tool is correctly positioned to avoid accidentally machining the already finished smaller diameter.
    *   Careful measurement is critical to ensure shoulders are square and diameters are accurate.

### **Important Points to Remember:**

*   **Shoulder Squareness:** Ensure the shoulders are square to the axis of rotation. Misaligned shoulders can lead to assembly issues.
*   **Corner Radius:** Pay attention to the radius at the base of the step. A sharp corner can be a stress riser and may chip during machining. A small radius (often achieved by the tool's nose radius or a specific chamfering operation) is usually desirable.
*   **Tool Presentation:** The orientation of the cutting tool is crucial, especially when creating shoulders. The tool should present itself correctly to ensure a clean cut and avoid gouging the adjacent diameter.
*   **Machining Order:** The order in which steps are machined can affect accuracy due to residual stresses and workpiece deflection. Consider machining from the tailstock end towards the headstock end or vice-versa, depending on the workpiece rigidity.

---

## **Alignment with Course Outcomes (COs):**

*   **CO1: The students can operate different machine tools with understanding of work holders and operating principles to produce different part features to the desired quality.**
    *   **Plain Turning:** Directly addresses operating the lathe, understanding work holders (centers, chucks), and producing a basic cylindrical feature. The quality is assessed by dimensional accuracy and surface finish.
    *   **Step Turning:** Extends CO1 by requiring the operation of the lathe to produce multiple features (different diameters) on a single workpiece, demonstrating a deeper understanding of tool positioning and control.

*   **CO2: Apply cutting mechanics to metal machining based on cutting force and power consumption.**
    *   While not explicitly calculated in these basic exercises, the choice of cutting speed, feed, and depth of cut directly relates to cutting mechanics. Understanding how these parameters influence MRR, surface finish, and tool life is a precursor to calculating cutting forces and power consumption in more advanced exercises. **HMT Production Technology** is a key resource for this.

*   **CO3: Programming and manufacturing of complex profiles in CNC machines with high precision.**
    *   These manual lathe exercises build the foundational understanding of geometry, tool path, and parameter selection that is essential for CNC programming. The principles of sequential cuts and dimensional control learned here are directly transferable to understanding G-code and M-code for CNC operations.

*   **CO4: Fabricate and assemble various metal components by welding and students will be able to visually examine their work and that of others for discontinuities and defects.**
    *   While welding is a different process, the concept of visual inspection for defects and discontinuities applies. In these lathe exercises, students are expected to visually examine their machined parts for surface finish issues, dimensional errors, and sharp corners that might be considered defects in a functional component.

*   **CO5: Gain knowledge on the structure, properties, testing and applications of ferrous and non ferrous metals.**
    *   The choice of cutting parameters (speed, feed, depth of cut) is heavily influenced by the material being machined. Understanding the machinability of different metals (e.g., mild steel, aluminum, brass) is crucial for selecting appropriate tools and parameters. **HMT Production Technology** provides information on material properties and their impact on machining.

---

## **Practice Questions & Exercises:**

**Question 1:**
A mild steel rod of 30 mm diameter is to be plain turned to 28 mm diameter over a length of 75 mm. If the cutting speed is 70 m/min and the feed is 0.2 mm/rev, calculate:
a) The required spindle speed in RPM.
b) The total depth of cut required.
c) If a depth of cut of 1 mm is used per roughing pass, how many roughing passes are needed?

**Answer 1:**
a) Spindle Speed (N):
   $D_{initial} = 30$ mm
   $v = 70$ m/min
   $N = (1000 * v) / (\pi * D_{initial})$
   $N = (1000 * 70) / (\pi * 30) \approx 737$ RPM

b) Total depth of cut required:
   $D_{initial} = 30$ mm, $D_{final} = 28$ mm
   Total depth of cut = $(30 - 28) / 2 = 1$ mm

c) Number of roughing passes:
   Depth of cut per pass = 1 mm
   Total depth of cut = 1 mm
   Number of passes = Total depth of cut / Depth of cut per pass = 1 mm / 1 mm = 1 pass.
   *(Correction based on calculation: If the total depth of cut is 1mm, and the initial diameter is 30mm, the final diameter is 28mm. This requires removing 1mm from the radius. If a depth of cut of 1mm is used per pass, only one pass is needed to reduce the radius from 15mm to 14mm, achieving the 28mm diameter.)*
   *If the question implied a reduction from 30mm to 26mm, then total depth of cut would be 2mm, and 2 passes would be needed.*

**Question 2:**
When performing step turning, what are the primary reasons for chamfering the edges of the steps? (Refer to CO1)

**Answer 2:**
The primary reasons for chamfering the edges of steps during step turning are:
1.  **Ease of Handling:** Sharp corners can be dangerous and can snag clothing or skin. Chamfers make the part safer to handle.
2.  **Stress Concentration Reduction:** Sharp corners act as stress risers, making the component more susceptible to fatigue failure. A chamfer or fillet effectively distributes stress over a larger area, improving the part's fatigue life.
3.  **Ease of Assembly:** Chamfers can help guide mating parts during assembly, especially for press fits or sliding fits, preventing damage to edges.
4.  **Tool Clearance:** In some designs, a chamfer is required to provide clearance for mating components.

**Question 3:**
Explain the importance of aligning the cutting tool with the center height of the workpiece for plain turning. (Refer to CO1)

**Answer 3:**
Aligning the cutting tool with the center height of the workpiece is crucial for several reasons:
1.  **Correct Cutting Action:** Most turning tools are designed to cut optimally when the tip is at center height. This ensures proper rake angles are presented to the workpiece, leading to efficient material removal and good surface finish.
2.  **Accurate Diameter Control:** If the tool is too high, it can lead to a digging-in effect and potentially rougher surfaces. If it's too low, it might rub rather than cut effectively, leading to poor surface finish and increased tool wear. Correct height ensures the intended depth of cut results in the desired diameter reduction.
3.  **Preventing Tool Damage:** Incorrect height can lead to chipping or breakage of the tool's cutting edge.
4.  **Achieving Square Shoulders:** For step turning, correct tool height is essential for ensuring that the shoulders created are perpendicular to the axis of the workpiece.

---

## **Further Reading:**

*   **HMT Production Technology (2017):** Chapters 3, 4, and 5 provide detailed information on lathe types, operations, cutting tools, and cutting parameters.
*   **W. A. J. Chapman Workshop Technology Part I (1972):** Chapters related to lathes and machining processes offer fundamental understanding.
*   **Numerical Control of Machine Tools by Yoram Koren (2014):** While focused on CNC, the underlying principles of programmed tool paths and precision control are rooted in manual machining concepts.

---