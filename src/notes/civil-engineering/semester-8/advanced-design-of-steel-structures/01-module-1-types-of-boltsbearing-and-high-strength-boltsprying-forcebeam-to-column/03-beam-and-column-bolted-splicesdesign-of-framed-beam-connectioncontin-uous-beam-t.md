---
title: "Beam and column bolted splices−Design of framed beam connection−contin uous beam to beam connection"
subject: "ADVANCED DESIGN OF STEEL STRUCTURES"
module: "Module 1: Types of bolts−Bearing and High strength bolts−Prying Force−Beam to Column connections"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8118f3"
status: "completed"
scrapedAt: "2026-05-20T19:02:25.490Z"
---
# ADVANCED DESIGN OF STEEL STRUCTURES - Module 1: Types of Bolts, Connections, and Forces

## Topic: Beam and Column Bolted Splices; Design of Framed Beam Connection; Continuous Beam to Beam Connection

---

### Learning Outcomes Covered:

*   Understanding of different types of bolted connections for beams and columns.
*   Ability to design beam and column splices, considering various load conditions.
*   Proficiency in designing framed beam connections to columns.
*   Knowledge and application of designing continuous beam-to-beam connections.
*   Understanding and consideration of prying forces in connections.
*   Familiarity with the differences between bearing-type and high-strength bolts and their applications.

---

### 1. Types of Bolts in Steel Structures

#### 1.1 Introduction to Bolting

Bolting is a common method for joining steel members in structural applications. It offers advantages like ease of erection, flexibility, and the ability to dismantle connections.

#### 1.2 Types of Bolts

*   **Bearing Type Bolts:**
    *   **Definition:** These bolts transfer load primarily through bearing pressure between the bolt shank and the edge of the hole. The hole is typically oversized or slotted to allow for alignment.
    *   **Mechanism:** Load is transferred by shear stress in the bolt and bearing stress between the bolt and the connected material.
    *   **Types:**
        *   **Black Bolts (Unfinished Bolts):** Lower strength, used in less critical connections where high slip resistance is not required. Typically used in bearing-type connections.
        *   **Finished Bolts:** Made to closer tolerances, often with turned shanks, suitable for bearing-type connections where snug-fitting is desired.
    *   **Advantages:** Cost-effective, readily available.
    *   **Disadvantages:** Susceptible to slip under reversal of stress or vibration.
    *   **Design Consideration:** Design is based on shear strength of the bolt and bearing strength of the connected member.

*   **High Strength Bolts (HS Bolts):**
    *   **Definition:** These bolts are made from higher grade steel and are designed to be tightened to a specific tension, inducing a clamping force between the connected members.
    *   **Mechanism:**
        *   **Slip-Critical Connections:** Load is transferred by friction between the faying surfaces of the connected members. The high tensile force in the bolt creates a clamping force that resists slip.
        *   **Bearing-Type Connections (with HS Bolts):** Even in bearing-type applications, HS bolts provide higher shear capacity due to their material strength and are often used when higher loads are involved or when slip resistance is crucial even in bearing applications.
    *   **Types:** Commonly available in grades like ASTM A325, ASTM A490 (US Standards) or equivalent ISO grades.
    *   **Advantages:** High slip resistance, suitable for dynamic loads, reversal of stresses, and connections where deformation must be minimized.
    *   **Disadvantages:** More expensive, requires special tightening procedures (e.g., torque wrenches, turn-of-nut method, direct tension indicators).
    *   **Design Consideration:**
        *   **Slip-Critical:** Design is based on the coefficient of friction between faying surfaces and the bolt tension.
        *   **Bearing-Type (with HS Bolts):** Design is based on shear strength of the bolt and bearing strength of the connected member, with higher capacities than bearing bolts.

#### 1.3 Bolt Tightening Methods for HS Bolts

*   **Turn-of-Nut Method:** Tightening the nut a specified fraction of a turn (e.g., 1/3 turn, 1/2 turn) after the snug-tight condition. This is a common and reliable method.
*   **Direct Tension Indicator (DTI) Washers:** Washers with protrusions that deform under sufficient tension, indicating correct tightening.
*   **Torque Wrench Method:** Applying a specific torque to the nut. Less reliable due to variations in friction.
*   **Direct Tension Indicating (DTI) Bolts:** Bolts with a built-in indicator that shows when the correct tension is achieved.

#### 1.4 Bolt Holes

*   **Standard Holes:** Slightly larger than the bolt diameter to allow for alignment.
*   **Oversized Holes:** Larger than standard holes, used in slip-critical connections to allow for adjustment and to prevent premature bearing failure if slip occurs.
*   **Slotted Holes:** Elongated holes, used in connections with potential for significant movement or for greater adjustability.

---

### 2. Prying Force

#### 2.1 Definition and Concept

*   **Prying Force:** An additional tensile force that is induced in a bolt connecting a cleat or connecting plate to a main member, due to the deformation of the connected members under load. This force acts in addition to the applied external tensile force.
*   **Mechanism:** When a flexible flange or web element of a beam or a connecting plate is subjected to an applied tension force, it deforms. This deformation can cause the edge of the cleat/plate to bear against the bolt shank or nut, creating an additional lever arm and a prying action on the bolt.
*   **Conditions that Induce Prying:**
    *   Connecting flexible elements (e.g., thin plates, beam flanges) to the main member.
    *   When the line of action of the applied force is offset from the line of action of the bolt resistance.
    *   When the connected element itself deforms significantly under load.

#### 2.2 Factors Affecting Prying Force

*   **Stiffness of the connected element:** Thinner and longer elements are more flexible and prone to prying.
*   **Distance from the bolt line to the edge of the connected element.**
*   **Magnitude of the applied external tension force.**
*   **Type of connection.**

#### 2.3 Importance in Design

*   **Overestimation of bolt capacity:** Ignoring prying forces can lead to an underestimation of the tensile stress in the bolts, potentially leading to failure.
*   **Bolt Failure:** Bolts can fail in tension due to the combined effect of applied load and prying force.

#### 2.4 Methods to Mitigate Prying Force

*   **Use of thicker connecting plates.**
*   **Use of smaller bolt edge distances.**
*   **Stiffening the connected elements.**
*   **Using a larger number of smaller bolts.**
*   **Designing connections to minimize the lever arm causing prying.**

#### 2.5 Design Considerations (Simplified Approach)

*   For simple connections (e.g., angle cleats), an empirical factor can be applied to the applied tensile force to account for prying.
*   More advanced analysis involves calculating the deformation of the connected elements and determining the resultant prying force. This often involves finite element analysis or simplified analytical models.

---

### 3. Beam to Column Connections

This section focuses on how beams are connected to columns, typically using bolted connections.

#### 3.1 Types of Beam to Column Connections

*   **Framed Connections (Seated Connections):**
    *   **Description:** A beam is supported by a seat angle or a web cleat attached to the column. The beam web rests on the seat, and typically a pair of stiffeners or web cleats are used to transfer the shear force and the bending moment.
    *   **Load Transfer:**
        *   **Shear:** Primarily transferred through the web cleats or stiffeners to the column web.
        *   **Moment:** Typically resisted by the beam flange cleats (if present) and the web cleats. The connection is often designed as semi-rigid or simple shear connection.
    *   **Diagrammatic Representation:** Imagine a beam sitting on a shelf-like angle attached to the column.

*   **Unstiffened Seated Connections:**
    *   **Description:** Similar to framed connections but without stiffeners or web cleats, relying solely on the seat angle for support. Less common for significant moments.

*   **Extended End Plate Connections:**
    *   **Description:** An end plate is welded to the beam end, and this plate is bolted to the column flange. These can be designed as simple shear connections or moment-resisting connections.

*   **Haunched Connections:**
    *   **Description:** A haunch (a triangular or trapezoidal stiffener) is welded to the beam and column to provide increased rigidity and moment capacity.

#### 3.2 Design of Framed Beam Connection (Focus on Welded/Bolted Cleats)

This is a common connection type where a beam frames into a column. We will focus on the bolted cleat arrangement.

*   **Components:**
    *   **Beam:** The member being connected.
    *   **Column:** The supporting member.
    *   **Cleats (Angles or Plates):** Connect the beam to the column.
        *   **Web Cleats:** Connect to the beam web and the column web. Primarily transfer shear.
        *   **Flange Cleats (Optional for moment resistance):** Connect to the beam flanges and the column flanges. Help transfer moment.
    *   **Bolts:** Fasten the cleats to the beam and column.

*   **Design Steps (Simplified for Shear Connection):**

    1.  **Determine Design Loads:** Obtain the shear force ($V_u$) and any applied axial force ($T_u$) on the beam at the column face from structural analysis.
    2.  **Select Beam and Column Sections:** Choose appropriate steel sections based on preliminary bending and shear checks.
    3.  **Select Cleat Material and Thickness:** Typically, the same grade as the main members or a compatible grade is used. Thickness depends on shear and bearing requirements.
    4.  **Select Bolt Type and Size:** High-strength bolts are preferred for shear connections to ensure slip resistance. Common sizes are M16, M20, M24.
    5.  **Design Web Cleats for Shear:**
        *   **Shear Capacity of Bolts:** Calculate the shear capacity of a single bolt based on its shear strength and the number of shear planes.
        *   **Number of Bolts required:** $N_{bolts} = \frac{V_u}{\text{Shear capacity of one bolt}}$
        *   **Bolt Spacing:** Ensure adequate spacing between bolts (longitudinal and transverse) according to code requirements to prevent bearing failure and ensure proper load distribution.
        *   **Bearing Capacity of Bolts:** Check the bearing capacity of the bolt on the cleat and the column web.
        *   **Bearing Capacity of Connected Material:** Check the bearing capacity of the cleat and the column web against the bolt.
        *   **Number of Bolts for Bearing:** Ensure the number of bolts is sufficient to resist bearing failure.
        *   **Gusset Plate Thickness:** If a web cleat is used, its thickness should be sufficient to resist the shear forces and any potential prying.
        *   **Weld Design:** If the cleats are welded to the beam and column, design the fillet welds for shear transfer.

    6.  **Design Flange Cleats (for Moment Resistance, if applicable):**
        *   **Tension/Compression in Flanges:** Calculate the forces in the top and bottom beam flanges due to bending moment.
        *   **Bolts for Tension/Compression:** Design the bolts connecting the flange cleats to the beam flanges and column flanges to resist these tensile/compressive forces. Consider prying forces in the tensile flange connection.
        *   **Cleat Thickness and Width:** Ensure the cleats are stiff enough to transfer these forces and have sufficient weld/bolt capacity.

*   **Example Calculation (Shear Connection):**

    *   **Problem:** Design a simple shear connection for a beam with a factored shear force of $V_u = 150$ kN framing into a column. Use M20, Grade 4.6 bolts. The connection uses a pair of web cleats.
    *   **Assumptions:**
        *   Bolt shear strength ($f_{ub}$): 400 N/mm² (for Grade 4.6)
        *   Shear area of M20 bolt ($A_{nb}$): $\pi/4 * (20)^2 \approx 314$ mm²
        *   Shear plane: 1
        *   Number of bolts in each cleat: Let's assume 3 bolts per cleat.

    *   **Solution:**
        1.  **Shear Capacity of one bolt:**
            $V_{sb} = \frac{f_{ub}}{\sqrt{3}} A_{nb} \times \text{No. of shear planes}$ (This is a simplified formula, actual codes might be more precise)
            For Grade 4.6, ultimate tensile strength ($f_{ub}$) is 400 N/mm². Shear strength is usually taken as a fraction of this. For standard holes, $V_{sb} = 0.48 \times \frac{f_{ub}}{\sqrt{3}} \times A_{nb}$ (using IS codes as an example). Let's use a simplified value for illustration: $V_{sb} \approx 400 N/mm^2 \times 314 mm^2 \times 1 = 125,600 N = 125.6$ kN. (Note: This is a simplified approach; refer to design codes for accurate values).

        2.  **Required number of bolts per cleat (for shear):**
            $N_{bolts} = \frac{V_u / 2}{V_{sb}} = \frac{150 \text{ kN} / 2}{125.6 \text{ kN}} \approx 0.6$ bolts per cleat.
            This indicates that 2 bolts per cleat would be more than sufficient for shear, assuming adequate spacing. Let's use 3 bolts per cleat for better load distribution and bearing.

        3.  **Check Bearing:** (Requires code-specific bearing strength calculations)
            *   Bearing strength of bolt on cleat/column web depends on hole size, bolt diameter, and ultimate tensile strength of the connected member.
            *   Bearing strength of cleat/column web on bolt depends on bolt diameter, number of bolts, and ultimate tensile strength of the connected member.

        4.  **Spacing:**
            *   Minimum pitch (longitudinal): e.g., 2.5 to 3 times bolt diameter.
            *   Minimum gauge (transverse): e.g., 3 to 4 times bolt diameter.
            *   Edge distance: e.g., 1.5 to 2 times bolt diameter.

        5.  **Cleat Thickness:** The cleat thickness needs to be checked for shear-out, block shear rupture, and bearing.

*   **Important Points to Remember:**
    *   The connection is often designed as semi-rigid.
    *   The primary load transferred is shear.
    *   Ensure adequate bolt spacing and edge distances.
    *   Always refer to relevant steel design codes for specific formulas and safety factors.

---

### 4. Beam Splices

Beam splices are used to join two beam segments to create a longer continuous beam or to erect a beam in sections.

#### 4.1 Types of Beam Splices

*   **Web Splices:**
    *   **Description:** Connects the webs of two beam segments. Typically uses splice plates on the web, fastened by bolts or welds.
    *   **Load Transfer:** Primarily designed to transfer shear forces. Can be designed to transfer axial forces if present.
    *   **Design:** Web splice plates and bolts/welds are designed to resist the shear force at the splice location.

*   **Flange Splices (Moment Splices):**
    *   **Description:** Connects the flanges of two beam segments to transfer bending moments. Usually involves splice plates on both flanges or a single splice plate on one side and bolts in the web.
    *   **Load Transfer:** Designed to transfer the tensile and compressive forces in the flanges due to bending.
    *   **Design:** Flange splice plates and bolts/welds are designed to resist the flange forces. This is a more complex connection.

*   **Combined Web and Flange Splices:**
    *   **Description:** A comprehensive splice designed to transfer both shear and moment.

#### 4.2 Design of Beam Splices

The design of beam splices is crucial for maintaining the continuity and load-carrying capacity of the beam.

*   **Web Splice Design:**
    1.  **Determine Shear Force:** Find the maximum shear force ($V_u$) at the splice location.
    2.  **Select Splice Plate Material:** Usually same grade as the beam.
    3.  **Select Bolt Type and Size:** HS bolts are generally preferred for their shear capacity and slip resistance.
    4.  **Design Splice Plates:**
        *   **Thickness:** Ensure sufficient thickness to resist shear and bearing.
        *   **Weld/Bolt Capacity:** Design welds or determine the number of bolts required to transfer the shear force from the beam web to the splice plate, and then from the splice plate to the other beam web.
    5.  **Number of Bolts:** Calculated based on the shear capacity of the bolts and the shear force.
    6.  **Spacing and Edge Distance:** Follow code requirements.

*   **Flange Splice (Moment Splice) Design:**
    1.  **Determine Flange Forces:** Calculate the tensile and compressive forces in the beam flanges at the splice location due to the bending moment ($M_u$).
        $F_{tension} = F_{compression} = \frac{M_u}{h_o}$ where $h_o$ is the distance between the centroids of the flanges (approximately the effective depth of the beam).
    2.  **Select Splice Plates:** Typically, plates are placed on both sides of the web, covering the flanges.
    3.  **Design for Tension:**
        *   **Bolts:** Design the bolts connecting the splice plate to the beam flange to resist the tensile force. Consider prying forces in the tensile flange connection.
        *   **Splice Plate:** Check the tensile capacity of the splice plate.
    4.  **Design for Compression:**
        *   **Bolts:** Design the bolts connecting the splice plate to the beam flange to resist the compressive force.
        *   **Splice Plate:** Check the compressive capacity and buckling stability of the splice plate and the connected flange.
    5.  **Combined Shear and Tension/Compression:** If shear is also present at the splice, the bolts and plates must be designed to resist both.
    6.  **Staggering of Bolts:** In some cases, bolts might be staggered to optimize load distribution and minimize stress concentrations.

*   **Example (Web Splice):**

    *   **Problem:** Design a web splice for a beam carrying a shear force of 200 kN. Use M20 HS bolts (Grade 8.8).
    *   **Assumptions:**
        *   Bolt shear strength ($f_{us}$): 640 N/mm²
        *   Shear area ($A_{nb}$): 314 mm²
        *   Number of shear planes: 1
        *   Shear capacity of one bolt: $V_{sb} = 0.48 \times \frac{640}{\sqrt{3}} \times 314 \approx 178$ kN (using IS code simplified value)

    *   **Solution:**
        1.  **Number of bolts required:**
            $N_{bolts} = \frac{V_u}{V_{sb}} = \frac{200 \text{ kN}}{178 \text{ kN}} \approx 1.12$
            Therefore, at least 2 bolts are required for the splice.
        2.  **Splice Plates:** Two plates, one on each side of the beam web. The number of bolts in each plate will be half the total. So, 1 bolt per plate is insufficient if we consider the load transfer from one side. We need to ensure the load from one beam section is transferred to the splice plate, and then from the splice plate to the other beam section. Thus, the number of bolts should be sufficient to carry the full shear. Let's consider 3 bolts in a line on each side of the web.
            $N_{bolts} = \frac{200 \text{ kN}}{178 \text{ kN}} \approx 1.12$. So, we need at least 2 bolts.
            Let's use 2 bolts per splice plate. This would mean a total of 4 bolts.
            Total shear capacity of 4 bolts = $4 \times 178$ kN = 712 kN (more than enough).
        3.  **Splice Plate Thickness:** The splice plates must be thick enough to resist bearing and shear-out. The thickness must be sufficient to accommodate at least two rows of bolts if they are in a line.
        4.  **Spacing and Edge Distance:** Ensure proper spacing for the chosen number of bolts.

*   **Important Points to Remember:**
    *   Splices are critical for maintaining structural integrity.
    *   Moment splices are more complex than web splices.
    *   Ensure adequate strength and stiffness of splice plates and fasteners.

---

### 5. Continuous Beam to Beam Connections

This refers to connecting one beam to another beam to create a continuous span.

#### 5.1 Types of Continuous Beam to Beam Connections

*   **Bolted End Plate Connection:**
    *   **Description:** An end plate is welded to the end of one beam and bolted to the flange or web of the other beam.
    *   **Load Transfer:** Can transfer shear and moment depending on the design.

*   **Welded End Plate Connection:**
    *   **Description:** An end plate is welded to the end of one beam and then welded to the other beam.

*   **Fin Plate (Puddle Plate) Connection:**
    *   **Description:** A relatively thin plate is welded to the web of one beam and then bolted to the web of the other beam.
    *   **Load Transfer:** Primarily transfers shear. Can be made semi-rigid with the addition of flange cleats.
    *   **Common Application:** Connecting secondary beams to primary beams.

*   **Angle Cleat Connection:**
    *   **Description:** Angle cleats are used to connect the flanges or webs of two beams.
    *   **Load Transfer:** Can transfer shear and, with flange cleats, moment.

#### 5.2 Design of Fin Plate Connection (Common Example)

Fin plate connections are widely used for connecting secondary beams to primary beams.

*   **Components:**
    *   **Secondary Beam:** The beam being connected.
    *   **Primary Beam:** The beam providing support.
    *   **Fin Plate:** A single plate welded to the web of the secondary beam and bolted to the web of the primary beam.
    *   **Bolts:** Fasten the fin plate to the primary beam.

*   **Design Steps (Simplified for Shear Connection):**

    1.  **Determine Design Loads:** Obtain the shear force ($V_u$) on the secondary beam at the connection to the primary beam.
    2.  **Select Secondary Beam Section:** Choose the section for the beam being connected.
    3.  **Select Primary Beam Section:** Ensure the primary beam has sufficient capacity to receive the load.
    4.  **Select Fin Plate Material and Thickness:** Typically, the same grade as the secondary beam. Thickness is determined by shear and bearing requirements.
    5.  **Select Bolt Type and Size:** HS bolts are preferred.
    6.  **Design Fin Plate Welds:** Weld the fin plate to the web of the secondary beam. Design fillet welds for shear transfer.
    7.  **Design Bolts:**
        *   **Shear Capacity of Bolts:** Calculate the shear capacity of the bolts connecting the fin plate to the primary beam.
        *   **Number of Bolts Required:** $N_{bolts} = \frac{V_u}{\text{Shear capacity of one bolt}}$
        *   **Bearing Capacity:** Check bearing of bolts on the fin plate and the primary beam web.
        *   **Bolt Spacing and Edge Distance:** Ensure compliance with code requirements.
    8.  **Fin Plate Thickness:**
        *   **Shear Capacity of Plate:** Check the shear capacity of the fin plate itself (often treated as a beam in bending or a plate in shear).
        *   **Bearing Capacity:** Ensure the plate is thick enough for the bolts.
        *   **Shear-out and Block Shear:** Check these failure modes for the fin plate.
    9.  **Weld Design to Primary Beam (if bolted):** Not applicable if bolted, but if welded, design the welds.

*   **Example Calculation (Fin Plate Connection):**

    *   **Problem:** Design a fin plate connection for a secondary beam with a factored shear force of $V_u = 80$ kN. Use M16, Grade 4.6 bolts to connect the fin plate to the primary beam web.
    *   **Assumptions:**
        *   Bolt shear strength ($f_{ub}$): 400 N/mm²
        *   Shear area of M16 bolt ($A_{nb}$): $\pi/4 * (16)^2 \approx 201$ mm²
        *   Shear plane: 1
        *   Shear capacity of one bolt: $V_{sb} = 0.48 \times \frac{400}{\sqrt{3}} \times 201 \approx 111$ kN (using IS code simplified value)

    *   **Solution:**
        1.  **Number of bolts required:**
            $N_{bolts} = \frac{V_u}{V_{sb}} = \frac{80 \text{ kN}}{111 \text{ kN}} \approx 0.72$
            Therefore, 1 bolt is technically enough for shear. However, to ensure adequate bearing and stability, and for practicality, 2 bolts in a line are typically used.
        2.  **With 2 bolts:** Total shear capacity = $2 \times 111$ kN = 222 kN (sufficient).
        3.  **Fin Plate Thickness:** The fin plate thickness should be sufficient for bearing and shear. For M16 bolts, a thickness of 6 mm or 8 mm is common, depending on bearing checks and code requirements.
        4.  **Weld to Secondary Beam:** The weld connecting the fin plate to the secondary beam web must be designed to carry the full shear force of 80 kN. The length of the weld will depend on the strength of the weld material and the weld size.
        5.  **Spacing:** Minimum pitch for M16 bolts is usually around 50 mm (2.5 times diameter).

*   **Important Points to Remember:**
    *   Fin plate connections are efficient for shear transfer.
    *   The fin plate is welded to one beam and bolted to the other.
    *   The welds to the supported beam must be designed to carry the full shear.
    *   Consider the bearing strength of the bolts and the web of the supported beam.

---

### Practice Questions

**Question 1:**
A beam framing into a column is subjected to a factored shear force of 120 kN. You are to design a simple shear connection using M20, Grade 4.6 bolts. If the shear capacity of a single bolt is 80 kN, how many bolts are required per connection plate?

**Question 2:**
Explain the phenomenon of prying force in bolted connections and list two factors that influence its magnitude.

**Question 3:**
Describe the primary mechanism of load transfer in a slip-critical connection using high-strength bolts.

**Question 4:**
A beam splice needs to transfer a shear force of 180 kN. You plan to use M24, Grade 8.8 bolts, each with a shear capacity of 140 kN. How many bolts are required for the web splice?

**Question 5:**
What is the main advantage of using high-strength bolts over bearing-type bolts in certain connections?

---

### Answers to Practice Questions

**Answer 1:**
To find the number of bolts required, divide the total shear force by the shear capacity of a single bolt:
Number of bolts = Total Shear Force / Shear Capacity per Bolt
Number of bolts = 120 kN / 80 kN = 1.5
Since you cannot have half a bolt, you must round up to the next whole number. Therefore, **2 bolts** are required per connection plate.

**Answer 2:**
Prying force is an additional tensile force induced in a bolt due to the deformation of the connected members under load. It occurs when the line of action of the applied force is offset from the line of action of the bolt resistance, causing a lever arm and a prying action.
Factors influencing its magnitude include:
*   **Stiffness of the connected element:** Thinner and more flexible connected elements lead to higher prying forces.
*   **Distance from the bolt line to the edge of the connected element:** A larger distance increases the lever arm and thus the prying force.
*   **Magnitude of the applied external tension force.**

**Answer 3:**
In a slip-critical connection, the high-strength bolts are tightened to a specific tension, creating a significant clamping force between the connected members. Load is transferred through friction between the faying surfaces of these members. The connection is designed to prevent slip under service loads, and the bolts are not intended to carry shear directly through bearing.

**Answer 4:**
Number of bolts = Total Shear Force / Shear Capacity per Bolt
Number of bolts = 180 kN / 140 kN = 1.28
Rounding up to the nearest whole number, **2 bolts** are required for the web splice.

**Answer 5:**
The main advantage of using high-strength bolts over bearing-type bolts is their ability to provide **high slip resistance**, especially in slip-critical connections. This makes them suitable for connections subjected to reversals of stress, vibrations, or where minimal deformation is desired. They also generally offer higher shear capacity due to their material strength.

---

### Important Points to Remember

*   **Bolt Grades:** Understand the difference between bearing type (e.g., Grade 4.6) and high-strength bolts (e.g., Grade 8.8) and their applications.
*   **Load Transfer Mechanisms:** Differentiate between load transfer via shear-bearing and load transfer via friction.
*   **Prying Force:** Always consider the potential for prying forces, especially in tensile connections with flexible elements.
*   **Connection Types:** Familiarize yourself with the basic configurations and load-carrying capabilities of framed connections, splices, and beam-to-beam connections.
*   **Code Compliance:** Always refer to the relevant national or international steel design codes for specific design procedures, formulas, safety factors, and detailing requirements.
*   **Serviceability:** Consider deformation and vibration control in addition to strength.

---
