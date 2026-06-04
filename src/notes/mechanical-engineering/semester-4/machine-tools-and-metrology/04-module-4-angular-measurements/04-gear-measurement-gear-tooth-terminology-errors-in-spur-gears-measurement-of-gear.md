---
title: "Gear measurement- Gear tooth terminology, errors in spur gears, measurement of gear elements."
subject: "MACHINE TOOLS AND METROLOGY"
module: "Module 4: Angular measurements"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f17"
status: "completed"
scrapedAt: "2026-05-20T17:54:11.289Z"
---
# MACHINE TOOLS AND METROLOGY - MODULE 4: ANGULAR MEASUREMENTS

## Topic: Gear Measurement - Gear Tooth Terminology, Errors in Spur Gears, Measurement of Gear Elements

---

### **Introduction**

Gears are fundamental components in mechanical power transmission systems. Accurate manufacturing and measurement of gears are crucial for their proper functioning, efficiency, and longevity. This topic delves into the terminology used to describe gear teeth, the common errors encountered in spur gear manufacturing, and the essential elements that need to be measured to ensure gear quality. This knowledge is vital for selecting appropriate machine tools and metrology instruments for gear production and inspection.

---

### **1. Gear Tooth Terminology (Spur Gears)**

Understanding the terminology is the first step in comprehending gear geometry and measurement. Spur gears are the most common type, with teeth parallel to the axis of rotation.

**(Referenced from: Hajra Choudhury & Roy, Vol-II; Ghosh & Mallik; Kalpakjian & Schmid)**

*   **Addendum (a):** The radial distance from the pitch circle to the top of the tooth.
    *   *Formula:* $a = m$ (where $m$ is the module)
*   **Dedendum (b):** The radial distance from the pitch circle to the bottom of the tooth space. It includes clearance.
    *   *Formula:* $b = 1.25m$ (for standard gears)
*   **Addendum Circle (Outer Diameter Circle):** The circle passing through the tops of the teeth.
    *   *Formula:* $D_o = D + 2a = D + 2m$ (where $D$ is the pitch diameter)
*   **Dedendum Circle (Root Diameter Circle):** The circle passing through the bottoms of the tooth spaces.
    *   *Formula:* $D_r = D - 2b = D - 2.5m$
*   **Pitch Circle:** An imaginary circle on which the gears mesh. It is the fundamental circle from which other elements are derived. The product of the pitch diameter and the number of teeth is constant for meshing gears ($P = D \times N$).
*   **Pitch Diameter (D):** The diameter of the pitch circle.
*   **Circular Pitch ($p$):** The distance along the pitch circle from a point on one tooth to the corresponding point on the adjacent tooth.
    *   *Formula:* $p = \pi m$
*   **Module (m):** The ratio of the pitch diameter to the number of teeth. It is a direct measure of the size of the gear tooth. Metric module is preferred internationally.
    *   *Formula:* $m = \frac{D}{N}$ (where $N$ is the number of teeth)
    *   *Relationship:* $D = m \times N$
*   **Diametral Pitch ($P_d$):** The ratio of the number of teeth to the pitch diameter in inches.
    *   *Formula:* $P_d = \frac{N}{D}$
    *   *Relationship:* $m = \frac{25.4}{P_d}$ (when $D$ is in mm and $P_d$ is in teeth per inch)
*   **Tooth Thickness:** The thickness of the tooth measured along the pitch circle.
    *   *Formula:* Tooth Thickness = $\frac{p}{2} = \frac{\pi m}{2}$
*   **Tooth Space:** The distance along the pitch circle between adjacent teeth.
    *   *Formula:* Tooth Space = $\frac{p}{2} = \frac{\pi m}{2}$
*   **Face Width (b):** The length of the gear tooth along its face, parallel to the axis of rotation.
*   **Pressure Angle ($\phi$):** The angle between the line of action and the common tangent to the pitch circles at the pitch point. Standard pressure angles are 20° and 25°.
    *   *Significance:* Affects the tooth strength and the force transmitted. Higher pressure angles generally result in stronger teeth but higher bearing loads.
*   **Base Circle:** The circle from which the involute profile of the gear tooth is generated.
    *   *Relationship:* $D_b = D \cos \phi$ (where $D_b$ is the base circle diameter)
*   **Line of Action:** The straight line tangent to the base circles of both meshing gears. The force is transmitted along this line.
*   **Path of Contact:** The path traced by the instantaneous point of contact between two meshing teeth along the line of action.
*   **Length of Contact:** The length of the line of action intercepted by the addendum circles of the two meshing gears.
*   **Arc of Contact:** The arc on the pitch circle through which a tooth moves from the beginning to the end of contact.
*   **Backlash:** The clearance between mating teeth in a gear train. It is the difference between the tooth space and the tooth thickness of the mating gear.
    *   *Significance:* Necessary to prevent jamming due to manufacturing tolerances, thermal expansion, and lubrication. Excessive backlash can lead to noise and vibration.
*   **Root Fillet:** The curved surface at the root of the tooth, connecting the tooth flank to the bottom land. It is designed to reduce stress concentration.
*   **Land:** The top surface of the gear tooth, which is flat for uncorrected teeth.
*   **Root Chord Thickness:** The thickness of the tooth measured at the root diameter.

---

### **2. Errors in Spur Gears**

Errors in gear manufacturing can lead to increased noise, vibration, reduced efficiency, premature wear, and premature failure. These errors can be categorized based on their origin and effect.

**(Referenced from: Hajra Choudhury & Roy, Vol-II; Ghosh & Mallik; Kalpakjian & Schmid; Galyer & Schotbolt)**

**A. Gear Tooth Errors (Leads to Geometric Inaccuracies):**

*   **Pitch Error:**
    *   **Definition:** Variation in the circular pitch from tooth to tooth.
    *   **Causes:** Inaccurate indexing on the gear hobbing or shaping machine, inaccuracies in the dividing head, or errors in the indexing worm and wheel.
    *   **Effect:** Uneven load distribution, increased backlash in certain positions, noise, and vibration.
*   **Profile Error (Tooth Profile Error):**
    *   **Definition:** Deviation of the actual tooth profile from the theoretical involute curve.
    *   **Causes:** Incorrect tool setting, tool wear, improper cutting speed/feed, inaccurate cutter geometry, or forming errors during hobbing/shaping.
    *   **Effect:** Incorrect meshing, interference at the root, increased noise, vibration, and uneven load distribution.
*   **Lead Error (Helix Error for Helical Gears):**
    *   **Definition:** For spur gears, this relates to any deviation from parallelism of the tooth trace relative to the gear axis. For helical gears, it's the deviation from the specified helix angle.
    *   **Causes:** Incorrect setting of the machine, inaccuracies in the lead screw or worm mechanism.
    *   **Effect:** Axial thrust, improper meshing, and vibration.
*   **Tooth Thickness Variation:**
    *   **Definition:** Variation in the measured thickness of teeth along the pitch circle.
    *   **Causes:** Combination of pitch and profile errors.
    *   **Effect:** Affects backlash and load sharing.
*   **Runout Error (Eccentricity):**
    *   **Definition:** Deviation of the gear's rotational axis from its geometric axis. This causes the pitch circle to be eccentric relative to the bore.
    *   **Causes:** Inaccurate mounting of the blank on the machine, inaccuracies in the machine spindle, or improper centering.
    *   **Effect:** The distance between meshing teeth varies as the gear rotates, leading to intermittent contact, vibration, and noise. This is a cumulative error.
*   **Taper Error:**
    *   **Definition:** The tooth thickness or profile varies along the face width.
    *   **Causes:** Worn cutting tools, improper machine setup, or wear on the machine slideways.
    *   **Effect:** Uneven load distribution, bending stresses at the ends, and vibration.
*   **Undercutting:**
    *   **Definition:** Removal of material at the root of the gear tooth, below the theoretical profile.
    *   **Causes:** When a gear blank is too small for the number of teeth, or when the hob or cutter penetrates too deep.
    *   **Effect:** Weakens the tooth at its base, potentially leading to tooth breakage. Reduces the effective depth of engagement.

**B. Gear Body Errors:**

*   **Eccentricity (Runout):** As described above, this is a major body error.
*   **Out-of-Squareness:** The face width is not perpendicular to the bore axis.
    *   **Causes:** Inaccurate chucking or mounting of the gear blank.
    *   **Effect:** Similar to taper error, leading to uneven load distribution.
*   **Out-of-Roundness:** The pitch diameter or outside diameter is not perfectly circular.
    *   **Causes:** Inaccurate turning of the blank before tooth cutting.
    *   **Effect:** Causes variations in tooth spacing and load distribution.

---

### **3. Measurement of Gear Elements**

Measuring gear elements is crucial for quality control and ensuring proper meshing and performance. Various instruments and techniques are used.

**(Referenced from: Hajra Choudhury & Roy, Vol-II; Ghosh & Mallik; Raghavendra & Krishnamurthy; Kalpakjian & Schmid; Galyer & Schotbolt; Hume; ASME Handbook)**

**A. Measurement of Gear Tooth Dimensions:**

*   **Measurement of Tooth Thickness:**
    *   **Vernier Caliper (for rough checks):** Can be used to measure tooth thickness across the pitch circle at specific points, but is not highly accurate due to the curved surface.
    *   **Gear Tooth Vernier Caliper:** A specialized caliper with jaws designed to measure the tooth thickness at the pitch line. It requires knowing the addendum or tooth depth.
        *   *Measurement Procedure:* The caliper jaws are set to the calculated tooth thickness at the pitch line. The vernier caliper is then brought into contact with the tooth flanks.
        *   *Formula for measurement at pitch line:* Tooth Thickness ($t$) = $m \times (\frac{\pi}{2} - 2x \tan \phi)$ (where $x$ is the addendum modification factor, typically 0 for standard gears). For standard gears, $t = \frac{\pi m}{2}$.
    *   **Gear Tooth Micrometer (Blade Micrometer):** Has anvil and spindle tips shaped like blades that engage the tooth flanks at the pitch line.
        *   *Measurement:* The micrometer is adjusted to engage the tooth flanks precisely at the pitch line. The reading gives the tooth thickness.
        *   *Requires:* Knowledge of the pitch diameter and pressure angle to determine the pitch line.
    *   **Constant Chord Method:** Measuring the length of a chord across the tooth flank at a specific depth below the addendum.
        *   *Measurement:* A micrometer is used to measure the chordal thickness ($c$) at a chordal addendum ($a_c$) below the addendum.
        *   *Formula:* $c = D \cos \phi \times (\frac{\pi}{2} - 2x \tan \phi)$ at the pitch line.
        *   *Formula for measurement at chordal addendum:* $c = D \cos \phi \left( \frac{\pi}{2} - \alpha \right) + 2r \sin \alpha$, where $r$ is the radius of curvature of the involute. A more practical formula relates to the number of teeth and module.
        *   *Constant Chord Length:* For a standard gear, the chordal thickness measured at a depth equal to the addendum ($a_c = m$) is constant for all gears of the same module and pressure angle. The formula for chordal thickness at the pitch line is $m \frac{\pi}{2}$. The chordal thickness $c$ at a depth $a_c$ is given by: $c = D \cos \phi (\frac{\pi}{2} - \alpha) + 2 (\frac{D \cos \phi}{2}) \sin \alpha$. The depth of measurement for a standard gear is typically $m$.
    *   **Optical Projectors / Comparators:** Used to magnize the tooth profile and measure various dimensions, including tooth thickness and profile deviation.

*   **Measurement of Tooth Depth (Addendum and Dedendum):**
    *   **Depth Gauge or Height Gauge:** Can be used in conjunction with a setting gauge or a base plate to measure the radial distance from the pitch circle (or a reference diameter) to the top or bottom of the tooth.
    *   **Gear Tooth Vernier Caliper:** Can be used to measure the distance from the top of the tooth to the pitch line (addendum).

*   **Measurement of Circular Pitch:**
    *   **Gear Tooth Caliper:** Can be used to measure the distance between corresponding points on adjacent teeth along the pitch circle.
    *   **Optical Projectors:** Highly accurate for measuring pitch.
    *   **Gear Checking Machines:** Automated machines measure pitch error as part of a comprehensive gear inspection.

*   **Measurement of Pressure Angle:**
    *   **Pitch Gauge / Rolling Test:** Two gears are brought into mesh and rotated. If the gears mesh smoothly and with no binding or excessive play, it indicates correct pressure angle. A pitch gauge can also be used to check the angle of the tooth flank.
    *   **Optical Projectors:** The tooth profile is projected, and the angle can be measured directly using protractor scales.
    *   **Gear Rolling Fixtures:** Gears are rolled against a master gear or a calibrated gear to detect profile errors and pressure angle deviations.

**B. Measurement of Gear Runout (Eccentricity):**

*   **Dial Indicator and Bench Center:** The gear blank is placed on centers, and a dial indicator is traversed along the pitch diameter or outside diameter as the gear is rotated. The total indicator reading (TIR) gives the amount of runout.
    *   *Procedure:* Mount the gear on centers. Set a dial indicator to touch the outside diameter or pitch diameter. Rotate the gear and note the maximum and minimum readings of the dial indicator. The difference is the runout.
*   **Gear Checking Machines:** Automated machines perform this measurement precisely.

**C. Measurement of Backlash:**

*   **Dial Indicator Method:**
    *   *Procedure:* Mesh the gear with its mating gear or a master gear. Hold the mating gear stationary. Rotate the gear being measured by applying a slight force to a tooth flank with a dial indicator positioned on the opposite flank. The dial indicator measures the total movement of the tooth space before engaging the other flank.
    *   *Alternatively:* Apply a slight tangential force (using a weight or spring) to one gear and measure the angular displacement of the other gear before contact.
*   **Plugs or Gauges:** Specialized gauges can be inserted into the tooth space to measure the backlash.

**D. Measurement of Total Composite Error:**

*   **Gear Rolling Test:**
    *   *Concept:* The gear being inspected is meshed with a master gear (known to be accurate) under a controlled load. As the gears rotate, a dial indicator measures the total deviation in center distance or the variation in tangential movement of the master gear.
    *   *Significance:* This single test checks for combined errors in pitch, profile, and runout. A large composite error indicates significant inaccuracies.
    *   *Measurement:* The gear and master gear are mounted on centers. A spring-loaded mechanism applies a controlled force between them. A dial indicator is attached to the movable center of the gear being tested, measuring the variation in center distance.

**E. Measurement of Gear Tooth Spacing and Pitch Variation:**

*   **Pitch Measurement Gauge:** A specialized gauge with contacts that engage adjacent teeth, allowing measurement of the circular pitch.
*   **Gear Checking Machines:** Measure the pitch error between successive teeth and the cumulative pitch error over several teeth.

---

### **Important Points to Remember**

*   **Module (m) and Diametral Pitch ($P_d$)** are key parameters defining gear size. Ensure consistency when working with different systems.
*   **Pressure Angle ($\phi$)** significantly influences tooth strength and contact forces.
*   **Backlash** is essential but must be within acceptable limits to avoid operational issues.
*   **Runout (Eccentricity)** is a critical error that leads to non-uniform meshing.
*   **Total Composite Error** is a comprehensive measure of gear quality, reflecting the combined effect of various individual errors.
*   **Optical projectors and specialized gear checking machines** provide higher accuracy and are preferred for critical applications.
*   **Refer to relevant standards (e.g., AGMA, ISO)** for acceptable tolerances on gear elements and error limits.

---

### **Alignment with Course Outcomes (COs)**

*   **CO1: Describe various machine tool operations (K2)**
    *   This topic implicitly relates to machine tool operations used for gear manufacturing (e.g., hobbing, shaping, milling) by discussing the errors that arise from these operations. Understanding gear terminology helps in setting up these machines.
*   **CO2: Determine machining time and power consumption in various machining processes (K3)**
    *   While not directly calculating time or power, understanding gear geometry (tooth size, module, face width) is essential input for these calculations when dealing with gear manufacturing processes.
*   **CO3: Explain limits, fits and tolerances (K2)**
    *   Gear measurement directly involves assessing whether manufactured gears meet specified limits and tolerances for various elements like pitch, profile, and backlash. Errors in gears are deviations from these tolerances.
*   **CO4: Identify the uses of various advanced measuring instruments (K1)**
    *   This topic highlights the application of instruments like gear tooth vernier calipers, gear tooth micrometers, dial indicators, optical projectors, and gear checking machines for precise gear measurement.

---

### **Practice Questions and Answers**

**Question 1:** Define the following gear tooth terms: Addendum, Dedendum, Circular Pitch, and Pressure Angle.
**Answer:**
*   **Addendum:** The radial distance from the pitch circle to the top of the tooth.
*   **Dedendum:** The radial distance from the pitch circle to the bottom of the tooth space.
*   **Circular Pitch:** The distance along the pitch circle from a point on one tooth to the corresponding point on the adjacent tooth.
*   **Pressure Angle:** The angle between the line of action and the common tangent to the pitch circles at the pitch point.

**Question 2:** What are the common errors found in spur gears, and what is the consequence of each?
**Answer:** Common errors include:
*   **Pitch Error:** Variation in circular pitch. Consequence: Uneven load distribution, noise, vibration.
*   **Profile Error:** Deviation from the involute curve. Consequence: Incorrect meshing, interference, noise.
*   **Runout Error:** Eccentricity of the pitch circle relative to the bore. Consequence: Intermittent contact, vibration, noise.
*   **Tooth Thickness Variation:** Affects backlash and load sharing.
*   **Taper Error:** Variation along face width. Consequence: Uneven load distribution.

**Question 3:** A spur gear has a module of 4 mm and a pressure angle of 20°. Calculate:
    a) Addendum
    b) Dedendum (standard)
    c) Pitch Diameter if it has 50 teeth.
    d) Outer Diameter.
**Answer:**
    a) Addendum ($a$) = module ($m$) = 4 mm
    b) Dedendum ($b$) = 1.25 * module ($m$) = 1.25 * 4 mm = 5 mm
    c) Pitch Diameter ($D$) = module ($m$) * Number of teeth ($N$) = 4 mm * 50 = 200 mm
    d) Outer Diameter ($D_o$) = Pitch Diameter ($D$) + 2 * Addendum ($a$) = 200 mm + 2 * 4 mm = 208 mm

**Question 4:** How is backlash measured? Describe one method.
**Answer:** Backlash is the clearance between meshing teeth. One method is using a dial indicator:
    1. Mesh the gear with its mating gear or a master gear.
    2. Hold the mating gear stationary.
    3. Position a dial indicator to contact the flank of the tooth space of the gear being measured.
    4. Apply a slight tangential force to the gear being measured, moving it until the tooth space contacts the mating gear's tooth.
    5. The reading on the dial indicator represents the backlash.

**Question 5:** What is the purpose of the gear rolling test (Total Composite Error)?
**Answer:** The gear rolling test measures the Total Composite Error. Its purpose is to detect and quantify the combined effect of various gear errors (pitch error, profile error, runout, etc.) in a single test. It provides an overall assessment of gear quality and its ability to mesh smoothly with a known accurate gear.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **Further Reading and References**

*   **Elements of Workshop Technology Vol-II Machine Tools** by S K Hajra Choudhury Nirjhar Roy
*   **Manufacturing Science** by Amitabha Ghosh Asok Kumar Mallik
*   **Engineering Metrology and Measurements** by N.V. Raghavendra, l. Krishnamurthy
*   **Manufacturing Engineering and Technology** by Serope Kalpakjian Steven R Schmid
*   **Workshop Technology** by Chapman W. A. J.
*   **Metrology for Engineers** by Galyer J.F.W., Schotbolt C.R.
*   **Engineering Metrology** by Hume K. J.

---
This concludes the notes for Module 4, Topic: Gear Measurement. Remember to practice identifying these terms and understanding the impact of errors in real-world gear applications.