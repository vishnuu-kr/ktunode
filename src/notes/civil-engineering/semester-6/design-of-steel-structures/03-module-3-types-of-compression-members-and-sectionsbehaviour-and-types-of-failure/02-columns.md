---
title: "columns ."
subject: "DESIGN OF STEEL STRUCTURES"
module: "Module 3: Types of compression members and sections–Behaviour and types of failures"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110b9"
status: "completed"
scrapedAt: "2026-05-20T18:52:47.263Z"
---
# DESIGN OF STEEL STRUCTURES - Module 3: Types of Compression Members and Sections – Behaviour and Types of Failures

## Topic: Columns

---

### 1. Introduction to Columns in Steel Structures

*   **Definition:** A column is a primary vertical structural member designed to carry axial compressive loads from beams, slabs, or other structural elements to the foundation.
*   **Function:** They are crucial for transmitting gravity loads, wind loads, and seismic loads to the substructure.
*   **Importance:** The capacity of a column to resist buckling is critical to the overall stability of the steel structure. Failure of a column can lead to catastrophic collapse.
*   **Types of Loads:** Primarily axial compression, but can also experience bending moments due to eccentric loading or frame action.

---

### 2. Types of Steel Columns

Steel columns can be classified based on their cross-sectional shape and how they are fabricated.

#### 2.1. Based on Cross-Sectional Shape

*   **Rolled Steel Sections:** These are the most common and economical.
    *   **Universal Columns (UC) / I-beams:**
        *   **Description:** Symmetrical I-shaped sections with parallel flanges and webs.
        *   **Advantages:** Efficient in resisting bending about both major and minor axes, good axial load capacity.
        *   **Common Use:** Main load-bearing columns in buildings, bridges.
        *   **Example:** A building with a rectangular footprint where UC sections are used as corner and intermediate columns.
        *   ![Universal Column Section](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Universal_beam_section.svg/1200px-Universal_beam_section.svg.png) *Typical Universal Column (I-beam) section.*
    *   **Universal Beams (UB) / I-beams:**
        *   **Description:** Similar to UCs but generally with wider flanges relative to their depth.
        *   **Advantages:** Also efficient for bending, can be used as columns, particularly where lateral stability is a concern.
        *   **Common Use:** Can be used as columns, but more commonly used as beams.
    *   **Channel Sections (C-sections / U-sections):**
        *   **Description:** C-shaped sections with a web and two flanges.
        *   **Advantages:** Can be used individually or in pairs (back-to-back or with cover plates) to form columns. Efficient in resisting loads in the plane of symmetry.
        *   **Disadvantages:** Less efficient in resisting loads about the axis perpendicular to the web.
        *   **Common Use:** Secondary columns, bracing members, built-up sections.
        *   ![Channel Section](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Channel_section.svg/1200px-Channel_section.svg.png) *Typical Channel section.*
    *   **Angle Sections (L-sections):**
        *   **Description:** L-shaped sections with two legs.
        *   **Advantages:** Primarily used in lighter structures or as parts of built-up columns. Can be used singly or in pairs.
        *   **Disadvantages:** Poor torsional stiffness, less efficient for axial loads compared to I-sections.
        *   **Common Use:** Lattice towers, lighter framing, built-up columns.
        *   ![Angle Section](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Angle_section.svg/1200px-Angle_section.svg.png) *Typical Angle section.*
    *   **Tubes (Hollow Sections):**
        *   **Circular Hollow Sections (CHS) / Pipes:**
            *   **Description:** Cylindrical tubes.
            *   **Advantages:** Excellent torsional resistance, uniform strength in all directions, good buckling resistance due to inherent symmetry and self-bracing.
            *   **Common Use:** Architectural columns, exposed structures, bridges.
            *   ![Circular Hollow Section](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Circular_hollow_section.svg/1200px-Circular_hollow_section.svg.png) *Typical Circular Hollow Section.*
        *   **Square/Rectangular Hollow Sections (SHS/RHS):**
            *   **Description:** Square or rectangular tubes.
            *   **Advantages:** Good bending resistance about both axes, efficient use of material, aesthetically pleasing.
            *   **Common Use:** Modern buildings, industrial structures, furniture.
            *   ![Rectangular Hollow Section](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rectangular_hollow_section.svg/1200px-Rectangular_hollow_section.svg.png) *Typical Rectangular Hollow Section.*

*   **Built-up Columns:** Formed by combining two or more individual rolled sections or plates, connected by welding or riveting.
    *   **Types:**
        *   **Two Channels Back-to-Back:** Simple and common for moderate loads.
        *   **Four Angles:** Often with lacing or battening for stability. Used for heavier loads.
        *   **Two Universal Columns:** Can be placed side-by-side or face-to-face with cover plates.
        *   **Box Columns (Four Plates):** Formed by four plates to create a closed rectangular box section.
        *   **Batterned Columns:** Two or more main members (channels, angles, or I-sections) connected by single or double battens.
        *   **Laced Columns:** Two or more main members connected by diagonal or criss-cross lacings.
    *   **Advantages:** Can achieve higher load capacities than single rolled sections, can be tailored to specific load and buckling requirements, provide greater rigidity and stability.
    *   **Disadvantages:** More expensive to fabricate, require careful connection design, can be susceptible to local buckling if not designed properly.
    *   **Example:** A heavy industrial column requiring a high axial load capacity, constructed from two channels connected with battens.

#### 2.2. Based on Fabrication Method

*   **Rolled Sections:** As discussed above.
*   **Built-up Sections:** As discussed above.
*   **Welded Sections:** Columns fabricated entirely by welding plates together to form complex shapes or efficient sections.

---

### 3. Behaviour of Steel Columns Under Compression

*   **Elastic Buckling (Euler Buckling):** For slender columns (high slenderness ratio), the primary mode of failure is elastic buckling. This is a sudden lateral deflection that occurs when the applied axial load reaches a critical value, even if the material stresses are below the yield strength.
    *   **Key Concept:** Critical buckling load ($P_{cr}$) is proportional to the material's Young's Modulus ($E$), the area ($A$), the minimum second moment of area ($I_{min}$), and inversely proportional to the square of the effective length ($L_e$).
    *   **Euler's Formula:** $P_{cr} = \frac{\pi^2 E I_{min}}{(L_e)^2}$
    *   **Slenderness Ratio:** $\frac{L_e}{r_{min}}$, where $r_{min}$ is the minimum radius of gyration ($r_{min} = \sqrt{I_{min}/A}$). A higher slenderness ratio indicates a more slender column.

*   **Inelastic Buckling:** For intermediate length columns (moderate slenderness ratio), buckling occurs after the material has yielded. The buckling load is influenced by both the material's yield strength ($f_y$) and its Young's Modulus ($E$).
    *   **Key Concept:** As the load increases, the stiffness of the column reduces as it yields. Buckling occurs when the applied load equals the buckling load determined by tangent modulus or reduced modulus theory.

*   **Yielding (Crushing):** For short, stocky columns (low slenderness ratio), the axial load causes the entire cross-section to reach the yield stress before buckling can occur. Failure is by crushing or plastic collapse.
    *   **Key Concept:** Failure load is approximately $P_y = A \times f_y$.

*   **Local Buckling:** This occurs within the cross-section itself, before overall buckling or yielding. Thin plate elements (flanges or webs) of a column section can buckle locally under compressive stress.
    *   **Key Concept:** The susceptibility to local buckling depends on the width-to-thickness ratio of the plate elements. Sections with high width-to-thickness ratios are more prone to local buckling.
    *   **Classification of Sections:** Steel sections are classified into Class 1, 2, 3, or 4 based on the slenderness of their compression elements, which determines their local buckling behaviour and thus their capacity.
        *   **Class 1 & 2:** Can achieve full plastic moment (for bending) or yield load (for axial compression).
        *   **Class 3:** Can reach the yield load but are susceptible to local buckling before reaching the plastic moment.
        *   **Class 4:** Local buckling occurs before or at the yield load; the effective area must be used.

---

### 4. Types of Column Failures

*   **Overall Buckling (Flexural Buckling):** The entire column bends about its weaker axis. This is the most common failure mode for slender and intermediate columns.
    *   **Description:** The column bends outwards as a whole unit.
    *   **Factors influencing:** Length, cross-sectional shape, end conditions (how the column is supported at its ends).

*   **Local Buckling:** Buckling of individual plate elements (flange or web) within the cross-section.
    *   **Description:** A portion of the flange or web wrinkles or buckles.
    *   **Factors influencing:** Width-to-thickness ratio of the elements, material properties.

*   **Torsional Buckling:** The column twists about its longitudinal axis. This is more likely in sections that are not torsionally stiff, such as singly symmetric sections or built-up sections without adequate bracing.
    *   **Description:** The column twists and bends simultaneously.
    *   **Factors influencing:** Torsional stiffness of the section.

*   **Flexural-Torsional Buckling:** A combined mode of failure where the column experiences both bending and twisting. This typically occurs in columns with a single axis of symmetry (like channels or angles) or with elements arranged eccentrically, where the shear centre does not coincide with the centroid.
    *   **Description:** A complex deformation involving both bending and twisting.
    *   **Factors influencing:** Position of the shear centre relative to the centroid, end conditions.

*   **Crushing/Yielding:** Occurs in short, stocky columns where the compressive stress reaches the yield strength of the material before buckling can initiate.
    *   **Description:** The material is compressed and deformed plastically.
    *   **Factors influencing:** Cross-sectional area, yield strength, column length (lack thereof).

---

### 5. Effective Length of Columns

*   **Definition:** The effective length ($L_e$) of a column is the length of an equivalent simply supported column that would buckle under the same load as the actual column. It accounts for the end restraint conditions.
*   **Relationship to Actual Length:** $L_e = k \times L$, where $L$ is the actual unsupported length of the column and $k$ is the effective length factor.
*   **Effective Length Factor (k):** This factor depends on the degree of restraint at the column ends.
    *   **Common End Conditions and Corresponding 'k' values (theoretical):**
        *   **Pinned-Pinned:** Both ends are free to rotate but prevented from translation. $k = 1.0$.
        *   **Fixed-Fixed:** Both ends are prevented from rotation and translation. $k = 0.5$.
        *   **Fixed-Pinned:** One end fixed, the other pinned. $k = 0.7$.
        *   **Fixed-Free:** One end fixed, the other free to translate and rotate (cantilever). $k = 2.0$.
    *   **Practical Considerations:** In actual steel structures, ends are rarely perfectly fixed or pinned. The $k$ values are often estimated based on the relative stiffness of the members connected to the column ends. Codes of practice provide methods for calculating $k$.
    *   **Example:** A column fixed at the base and pinned at the top would have an effective length of $0.7 \times L$.

*   **Radius of Gyration ($r$):** The property of a cross-section that describes how the area is distributed around the centroidal axis.
    *   **Formula:** $r = \sqrt{\frac{I}{A}}$, where $I$ is the second moment of area and $A$ is the cross-sectional area.
    *   **Importance:** Used in calculating the slenderness ratio ($L_e/r$). Columns are designed based on their weakest radius of gyration.

---

### 6. Design of Steel Columns (Brief Overview - Further details in later modules)

*   **General Approach:**
    1.  **Determine Load:** Calculate the factored axial load on the column.
    2.  **Select Material:** Specify the grade of steel.
    3.  **Choose Section:** Select a trial section based on preliminary estimates and experience.
    4.  **Calculate Effective Length:** Determine the effective length ($L_e$) for buckling about both principal axes considering end conditions.
    5.  **Calculate Slenderness Ratios:** Compute $L_e/r$ for both axes.
    6.  **Determine Compressive Resistance:** Use design codes (e.g., IS 800, AISC) to find the allowable or design compressive strength of the section based on its slenderness ratios and material properties. This involves calculating the buckling reduction factor ($\chi$) and multiplying it by the squash load ($A_g f_y$).
    7.  **Check Capacity:** Ensure the design compressive strength is greater than or equal to the applied factored load.
    8.  **Check Local Buckling:** Verify that the selected section is not Class 4 for the governing axis.
    9.  **Check Connections:** Design the base plate, cap plate, and any bracing connections.

*   **Key Design Parameters:**
    *   **Squash Load ($P_y = A_g f_y$):** The load at which the entire cross-section yields.
    *   **Buckling Load ($P_{cr} = \frac{\pi^2 E I}{(L_e)^2}$):** The theoretical elastic buckling load.
    *   **Design Compressive Resistance ($P_{cd}$ or $P_{d}$):** The factored resistance of the column against buckling, determined by design codes, considering material properties, section shape, effective length, and safety factors.

---

### 7. Practice Questions

**Question 1:**
Which of the following steel sections is generally considered to have the best torsional resistance and uniform strength in all directions?
(a) Universal Column (UC)
(b) Channel Section (C-section)
(c) Circular Hollow Section (CHS)
(d) Angle Section (L-section)

**Question 2:**
Define "effective length" of a column and explain its significance in column design.

**Question 3:**
A short, stocky column is primarily susceptible to failure by:
(a) Elastic Buckling
(b) Local Buckling
(c) Crushing/Yielding
(d) Torsional Buckling

**Question 4:**
Explain the difference between overall buckling and local buckling in steel columns.

**Question 5:**
For a column with one end fixed and the other end pinned, what is the theoretical effective length factor ($k$)?

---

### 8. Answers to Practice Questions

**Answer 1:**
(c) Circular Hollow Section (CHS). CHS sections are inherently symmetrical and have a continuous circular profile, providing excellent torsional rigidity and uniform resistance to buckling regardless of the axis.

**Answer 2:**
The **effective length ($L_e$)** of a column is the length of an equivalent simply supported column that would buckle under the same load as the actual column. It is calculated as $L_e = k \times L$, where $L$ is the actual unsupported length and $k$ is the effective length factor.
**Significance:** The effective length is crucial because column buckling strength is highly sensitive to its length and the manner in which its ends are supported (restrained). A higher effective length leads to a lower buckling load. By incorporating the effective length factor ($k$), which accounts for end conditions, engineers can accurately predict the buckling capacity of columns in real structures.

**Answer 3:**
(c) Crushing/Yielding. Short, stocky columns have a low slenderness ratio, meaning they are more likely to reach the material's yield stress across the entire cross-section before any significant bending or buckling occurs. The failure mode is plastic deformation or crushing.

**Answer 4:**
*   **Overall Buckling (Flexural Buckling):** This refers to the buckling of the entire column as a single unit, where the column bends laterally about its weakest axis. This is the primary concern for slender to intermediate columns.
*   **Local Buckling:** This refers to the buckling of individual plate elements that make up the cross-section of the column (e.g., the web or flanges of an I-beam). It occurs when the width-to-thickness ratio of these elements is too high, causing them to wrinkle or buckle inwards before the entire column can buckle or yield.

**Answer 5:**
For a column with one end fixed and the other end pinned, the theoretical effective length factor ($k$) is **0.7**.

---

### 9. Important Points to Remember

*   **Buckling is critical:** For steel columns, buckling is often the governing failure mode, and it can occur at stresses well below the material's yield strength.
*   **Slenderness Ratio is key:** The slenderness ratio ($L_e/r$) is the primary parameter determining the buckling behaviour and capacity of a column.
*   **End Conditions matter:** The way a column is supported at its ends significantly affects its effective length and thus its buckling resistance.
*   **Section shape is crucial:** Different cross-sectional shapes have different strengths, buckling characteristics, and local buckling tendencies.
*   **Built-up sections offer flexibility:** They can be designed to achieve high load capacities and specific buckling characteristics but require careful connection design.
*   **Local buckling limits section capacity:** Thin-walled sections need to be classified to ensure local buckling is adequately accounted for in the design.
*   **Radius of Gyration:** Always consider the minimum radius of gyration for buckling checks, as this represents the weakest axis of the section.
*   **Design codes provide methods:** Always refer to the relevant steel design codes (e.g., IS 800, AISC) for specific formulas, classification of sections, and design procedures.

---
