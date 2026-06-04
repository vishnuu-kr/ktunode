---
title: "Exercises on milling machine: - Spur gear  cutting operation."
subject: "MANUFACTURING TECHNOLOGY LAB"
module: "Module 1: Exercises on lathe: "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1451d0cf480446335b"
status: "completed"
scrapedAt: "2026-05-20T17:54:23.534Z"
---
# MANUFACTURING TECHNOLOGY LAB - MODULE 1: EXERCISES ON MILLING MACHINE

## TOPIC: SPUR GEAR CUTTING OPERATION

This module focuses on understanding and performing the spur gear cutting operation on a milling machine. It builds upon fundamental machining principles and introduces specific techniques for producing gears with high accuracy.

---

### 1. INTRODUCTION TO SPUR GEARS

*   **Definition:** A spur gear is a cylindrical gear with teeth cut parallel to the axis of rotation. They are the simplest and most common type of gear.
*   **Purpose:** Spur gears are used to transmit rotational motion and torque between parallel shafts.
*   **Key Terminology:**
    *   **Pitch Diameter (D):** The diameter of an imaginary circle on which the teeth are considered to be based.
    *   **Addendum (a):** The radial distance from the pitch surface to the top of the tooth.
    *   **Dedendum (b):** The radial distance from the pitch surface to the bottom of the tooth space.
    *   **Circular Pitch (p):** The distance along the pitch circle from one point on a tooth to the corresponding point on the next tooth. It is the circumference of the pitch circle divided by the number of teeth.
    *   **Module (m):** A unit of size for gear teeth. It is defined as the pitch diameter divided by the number of teeth. $m = D/N$. A smaller module means smaller teeth.
    *   **Diametral Pitch (P):** The number of teeth per inch of pitch diameter. $P = N/D$. This is common in the imperial system. $P = 25.4 / m$ (when m is in mm).
    *   **Tooth Thickness:** The thickness of a tooth measured along the pitch circle.
    *   **Tooth Space:** The distance between two adjacent teeth measured along the pitch circle.
    *   **Face Width:** The width of the gear tooth along the axis of rotation.
    *   **Pressure Angle ($\phi$):** The angle between the line of action and the common tangent to the pitch circles. The standard pressure angle is typically 20 degrees.
    *   **Addendum Circle:** The circle defining the outer diameter of the gear.
    *   **Root Circle:** The circle defining the bottom diameter of the gear teeth.
    *   **Addendum Height:** Standard addendum is 1 module ($a = m$).
    *   **Dedendum Depth:** Standard dedendum is 1.25 module ($b = 1.25m$). This provides clearance at the root of the tooth.
    *   **Outside Diameter ($D_o$):** $D_o = D + 2a = D + 2m = m(N+2)$.
    *   **Root Diameter ($D_r$):** $D_r = D - 2b = D - 2.5m = m(N-2.5)$.

---

### 2. MILLING MACHINE PRINCIPLES FOR GEAR CUTTING

*   **Milling Machine Types:**
    *   **Horizontal Milling Machine:** Most commonly used for gear cutting, especially with dividing heads.
    *   **Vertical Milling Machine:** Can also be used, especially with specialized attachments.
*   **Indexing/Dividing Head:** This is a crucial attachment used to accurately divide the circumference of a workpiece into a specific number of equal parts (for gear teeth).
    *   **Mechanism:** Typically uses a worm and worm wheel mechanism. The worm is usually geared with the workpiece spindle.
    *   **Indexing Ratio:** The ratio of the worm to the worm wheel (e.g., 40:1 means 40 turns of the crank handle rotate the workpiece by 1 revolution).
*   **Types of Milling Cutters for Gears:**
    *   **Form Milling Cutters:** These cutters are shaped to the exact profile of the tooth space. They are specific to the module and pressure angle of the gear.
        *   **Advantages:** Can achieve good surface finish and accuracy.
        *   **Disadvantages:** A separate cutter is needed for each module and pressure angle.
    *   **Gear Hobbing (Not directly on standard milling machines, but a related concept):** Uses a rotating hob cutter that continuously cuts the gear teeth. This is a faster and more efficient method for mass production.
*   **Work Holding:**
    *   **Mandrel/Arbor:** The gear blank is mounted on a mandrel held between centers or in the chuck of the dividing head.
    *   **Dividing Head Chuck:** The mandrel can be gripped by the chuck of the dividing head.

---

### 3. SPUR GEAR CUTTING PROCESS ON A MILLING MACHINE (USING FORM CUTTERS)

This section outlines the steps and considerations for cutting spur gears using a form milling cutter on a horizontal milling machine with a dividing head.

**3.1. Machine Setup:**

1.  **Select the appropriate Milling Machine:** A horizontal milling machine is preferred.
2.  **Mount the Dividing Head:** Securely attach the dividing head to the milling machine table. Ensure it is level and aligned.
3.  **Mount the Workpiece (Gear Blank):**
    *   The gear blank should be machined to the correct outside diameter and face width prior to gear cutting.
    *   Mount the gear blank on a suitable mandrel or arbor.
    *   Secure the mandrel in the dividing head spindle (either directly or via a chuck).
    *   Support the other end of the mandrel with a dead center (if applicable) to ensure rigidity.
4.  **Select and Mount the Milling Cutter:**
    *   Choose a **Form Milling Cutter** that matches the **module** and **pressure angle** of the gear to be cut. Gear cutters are typically supplied in sets for different modules.
    *   Mount the cutter on a suitable arbor and install it on the milling machine spindle. Ensure the cutter is positioned at the correct height.
5.  **Set Machine Parameters:**
    *   **Spindle Speed:** Determined by the cutter material, workpiece material, and desired surface finish. Refer to cutting speed charts. (Relates to **CO2**).
    *   **Table Feed Rate:** This controls the speed at which the workpiece moves past the cutter. It affects surface finish and cutting time.
    *   **Depth of Cut:** The cutter is brought down to remove material incrementally.

**3.2. Indexing Calculations:**

This is the most critical step for dividing the circumference accurately.

*   **Purpose:** To rotate the workpiece by a specific angle for each tooth to be cut.
*   **Formula:** The number of turns of the indexing crank (handle) required for one tooth space is given by:
    $$ \text{Turns} = \frac{\text{Indexing Ratio}}{\text{Number of Teeth (N)}} $$
    *   **Indexing Ratio:** This is a fixed value for the dividing head (e.g., 40:1).
    *   **Number of Teeth (N):** The desired number of teeth on the spur gear.

*   **Example:**
    *   **Problem:** You need to cut a spur gear with 30 teeth on a milling machine with a 40:1 dividing head.
    *   **Calculation:**
        $$ \text{Turns per tooth} = \frac{40}{30} = \frac{4}{3} = 1 \frac{1}{3} \text{ turns} $$
        This means 1 full turn of the crank plus 1/3 of a turn.
    *   **Practical Indexing:** To achieve 1/3 of a turn, you'll use a dividing plate on the dividing head. If the plate has a 21-hole circle, you would move the index pin 7 holes (since 7/21 = 1/3).

**3.3. Cutting Operation:**

1.  **Engage the Feed:** Start the spindle and engage the feed. The workpiece will move horizontally past the rotating cutter.
2.  **First Tooth (Roughing Cut):**
    *   Bring the cutter down to a shallow depth of cut.
    *   Engage the feed to cut the first tooth space.
    *   Disengage the feed and retract the cutter.
3.  **Indexing:**
    *   Perform the indexing calculation (as described above).
    *   Rotate the indexing crank by the calculated number of turns to position the workpiece for the next tooth space.
    *   Ensure the index pin is properly engaged in a hole on the dividing plate.
4.  **Subsequent Cuts (Finishing Pass):**
    *   After indexing, make another cut in the same tooth space by lowering the cutter slightly for a finishing pass. This is crucial for achieving the desired accuracy and surface finish.
    *   The depth of cut for each pass should be shallow to avoid excessive load on the cutter and machine, and to improve accuracy.
5.  **Repeat:** Continue the process of indexing and cutting until all tooth spaces are milled.
6.  **Final Finishing:** A final light pass might be required for an optimal surface finish.

---

### 4. CALCULATIONS AND PARAMETER SELECTION

*   **Cutter Selection:**
    *   **Module:** Calculate module from desired gear dimensions or pitch diameter and number of teeth. $m = D/N$.
    *   **Pressure Angle:** Typically 20 degrees. Ensure the cutter matches this.
    *   **Number of Teeth on Cutter:** Form cutters are often available for a range of teeth (e.g., 12-15 teeth, 17-25 teeth, 26-35 teeth, 37-50 teeth, 51-75 teeth, 76-100 teeth, 100+ teeth). A cutter for a specific tooth count is ideal, but a cutter from a range can be used with slight modifications to the addendum and dedendum. For laboratory exercises, a cutter for the exact number of teeth is usually provided.
*   **Spindle Speed ($N_{spindle}$):**
    *   Based on cutting speed ($V$) and cutter diameter ($D_{cutter}$): $V = \frac{\pi D_{cutter} N_{spindle}}{1000}$ (for V in m/min, D in mm).
    *   **Example:** For a HSS cutter of 60mm diameter cutting mild steel at a cutting speed of 25 m/min:
        $$ 25 = \frac{\pi \times 60 \times N_{spindle}}{1000} $$
        $$ N_{spindle} = \frac{25 \times 1000}{\pi \times 60} \approx 133 \text{ RPM} $$
        (Refer to HMT Production Technology for detailed cutting speed tables).
*   **Feed Rate (f):**
    *   Usually expressed in mm/rev of the workpiece or mm/min.
    *   Affects surface finish and tool life. Finer feeds give better finish but take longer.
*   **Depth of Cut (d):**
    *   Depends on the material, cutter rigidity, and machine rigidity.
    *   For roughing, it can be larger. For finishing, it should be small (e.g., 0.1-0.3 mm).
    *   Total depth to cut is the addendum + dedendum (approx. $2.25m$).
    *   It's best to take multiple passes.

---

### 5. PRACTICAL CONSIDERATIONS AND TROUBLESHOOTING

*   **Accurate Indexing:** This is paramount. Any error here will result in improperly meshing gears. Double-check calculations and movements.
*   **Cutter Runout:** Ensure the cutter is mounted correctly and runs true to avoid tooth inaccuracies.
*   **Workpiece Rigidity:** A flexible mandrel or loose workpiece will lead to chatter and inaccurate tooth profiles.
*   **Tool Wear:** Dull cutters will lead to poor surface finish, increased cutting forces, and potentially inaccurate dimensions.
*   **Chatter:** Vibrations during cutting can be caused by:
    *   Loose workholding or machine parts.
    *   Excessive feed rate or depth of cut.
    *   Dull cutter.
    *   Incorrect spindle speed.
*   **Surface Finish:** Controlled by spindle speed, feed rate, and depth of cut. A finishing pass with a fine feed is essential.
*   **Cutting Fluid:** Use appropriate cutting fluid (e.g., soluble oil) to cool the cutter and workpiece, lubricate the cutting zone, and flush away chips.

---

### 6. RELEVANCE TO COURSE OUTCOMES

*   **CO1: Operate different machine tools with understanding of work holders and operating principles to produce different part features to the desired quality.**
    *   This entire topic directly addresses operating a milling machine with a dividing head (work holder) to produce a specific part feature (spur gear teeth) to desired quality (accuracy, surface finish).
*   **CO2: Apply cutting mechanics to metal machining based on cutting force and power consumption.**
    *   Selection of spindle speed and feed rate directly relates to cutting mechanics, tool life, and optimizing the cutting process for efficiency and quality. Understanding chip formation and the forces involved is implicit in parameter selection.
*   **CO3: Programming and manufacturing of complex profiles in CNC machines with high precision.**
    *   While this exercise is on a manual machine, understanding gear geometry and the precision required for tooth profiles lays the groundwork for programming CNC machines to achieve similar or higher precision for complex profiles. The concept of dividing the circumference into precise segments is analogous to tool path generation in CNC.
*   **CO4: Fabricate and assemble various metal components by welding and students will be able to visually examine their work and that of others for discontinuities and defects.**
    *   Visual inspection for defects (chatter marks, incomplete cuts, incorrect tooth profile) is crucial in this operation, similar to visual inspection in welding.
*   **CO5: Gain knowledge on the structure, properties, testing and applications of ferrous and non ferrous metals.**
    *   The choice of cutting speed and feed rate is influenced by the material properties of the workpiece (e.g., hardness, machinability of mild steel vs. aluminum).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. TEXTBOOK REFERENCES

*   **Production Technology by HMT:** This textbook is a primary resource for detailed information on milling machines, dividing heads, cutting tools, cutting speeds, feed rates, and various machining operations, including gear cutting. It will provide tables for recommended cutting speeds and feeds for different materials and tools.
*   **Workshop Technology Part I by W. A. J. Chapman:** This book provides foundational knowledge on machine tools, including milling machines, their parts, and the principles of operation. It will cover the basics of indexing mechanisms.
*   **Numerical Control of Machine Tools by Yoram Koren:** While focused on CNC, this book can provide context on the precision and geometric control required for manufacturing components like gears, highlighting the evolution from manual to automated methods.

---

### 8. PRACTICE QUESTIONS & EXERCISES

**Question 1:** A spur gear with 40 teeth and a module of 3 mm needs to be cut on a milling machine equipped with a 40:1 dividing head. Calculate the indexing required per tooth.

**Answer 1:**
Indexing Ratio = 40:1
Number of Teeth (N) = 40
$$ \text{Turns per tooth} = \frac{40}{40} = 1 \text{ turn} $$
This means exactly one full turn of the indexing crank for each tooth space.

**Question 2:** You need to cut a gear with 25 teeth using a 40:1 dividing head. The indexing plate has circles of holes with the following number of holes: 15, 19, 23, 27, 31, 37. Calculate the indexing for one tooth and suggest a suitable indexing plate and movement.

**Answer 2:**
Indexing Ratio = 40:1
Number of Teeth (N) = 25
$$ \text{Turns per tooth} = \frac{40}{25} = \frac{8}{5} = 1 \frac{3}{5} \text{ turns} $$
This means 1 full turn of the crank plus 3/5 of a turn.
To achieve 3/5 of a turn, we need a hole circle where the number of holes is a multiple of 5. From the available plates, the 15-hole circle is suitable.
We need to move 3/5 of a turn. On the 15-hole circle:
$$ \text{Holes to move} = \frac{3}{5} \times 15 = 3 \times 3 = 9 \text{ holes} $$
So, the indexing required is **1 full turn plus 9 holes on the 15-hole circle**.

**Question 3:** List at least three critical factors that influence the surface finish of a gear cut on a milling machine.

**Answer 3:**
1.  **Feed Rate:** Finer feed rates generally result in better surface finish.
2.  **Spindle Speed:** Appropriate spindle speed for the material and cutter, avoiding excessive vibration.
3.  **Depth of Cut:** Shallow finishing passes lead to a smoother surface.
4.  **Cutter Sharpness:** A sharp cutter produces a cleaner cut.
5.  **Workpiece Rigidity:** A stable setup minimizes chatter.

**Exercise:**
Given a gear blank of module 2 mm and 30 teeth, calculate:
a) The pitch diameter.
b) The outside diameter.
c) The root diameter.
d) If using a 40:1 dividing head, how many turns of the crank are needed per tooth?
e) If using a 20-hole indexing plate, how many holes would represent 1/3 of a turn?

**Answers to Exercise:**
a) Pitch Diameter ($D$) = Module ($m$) $\times$ Number of Teeth ($N$) = $2 \text{ mm} \times 30 = 60 \text{ mm}$.
b) Outside Diameter ($D_o$) = $m(N+2) = 2(30+2) = 2 \times 32 = 64 \text{ mm}$.
c) Root Diameter ($D_r$) = $m(N-2.5) = 2(30-2.5) = 2 \times 27.5 = 55 \text{ mm}$.
d) Turns per tooth = Indexing Ratio / Number of Teeth = $40 / 30 = 4/3 = 1 \frac{1}{3}$ turns.
e) 1/3 of a turn on a 20-hole plate: $(1/3) \times 20 = 20/3 = 6.67$ holes. Since we can't move a fraction of a hole, this indicates the 20-hole plate is not ideal for 1/3 turn. We would need a plate where the number of holes is a multiple of 3 (e.g., 15, 18, 21, 24 holes). If a 21-hole plate were available, it would be $ (1/3) \times 21 = 7 $ holes.

---

### 9. IMPORTANT POINTS TO REMEMBER

*   **Cutter Selection is Key:** Always use a form cutter specific to the gear's module and pressure angle.
*   **Accuracy in Indexing:** Double-check all calculations and ensure precise movements of the indexing crank.
*   **Incremental Cutting:** Take multiple shallow passes for finishing to achieve accuracy and good surface finish.
*   **Workholding Rigidity:** A stable setup prevents chatter and ensures accurate tooth profiles.
*   **Cutting Fluid:** Essential for cooling, lubrication, and chip removal.
*   **Understanding the Dividing Head:** The indexing ratio is critical for all gear cutting operations.

---