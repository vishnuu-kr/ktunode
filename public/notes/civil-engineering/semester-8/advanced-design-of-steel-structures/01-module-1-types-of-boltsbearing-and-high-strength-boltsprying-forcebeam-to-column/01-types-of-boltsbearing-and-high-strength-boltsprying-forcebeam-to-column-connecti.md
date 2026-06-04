---
title: "Types of bolts−Bearing and High strength bolts−Prying Force−Beam to Column connections"
subject: "ADVANCED DESIGN OF STEEL STRUCTURES"
module: "Module 1: Types of bolts−Bearing and High strength bolts−Prying Force−Beam to Column connections"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8118f1"
status: "completed"
scrapedAt: "2026-05-20T19:02:23.984Z"
---
# Advanced Design of Steel Structures - Module 1: Types of Bolts, Prying Force, and Beam-to-Column Connections

This module focuses on fundamental aspects of steel structure design, specifically concerning the behavior and application of various bolt types, the critical concept of prying force, and the common connection between beams and columns.

## 1. Types of Bolts

Steel structures rely on various fasteners to create robust and reliable connections. Understanding the different types of bolts and their applications is crucial for ensuring structural integrity.

### 1.1. Bearing Bolts (Ordinary Bolts)

*   **Definition:** Bearing bolts are designed to transfer loads primarily through shear and bearing at the bolt hole. They are the most common type of bolt used in general construction.
*   **Mechanism of Load Transfer:**
    *   **Shear:** The bolt shank resists forces acting perpendicular to its axis.
    *   **Bearing:** The bolt hole walls and the bolt shank itself resist forces acting perpendicular to the surface of contact. This bearing action can lead to deformation of the connected plates or the bolt.
*   **Classification (based on performance):**
    *   **Class 4.6:** Lower strength bolts, suitable for non-critical applications.
    *   **Class 4.8:** Higher strength than 4.6, but still considered general-purpose.
    *   **Class 5.6, 5.8:** Common in construction, offering a good balance of strength and cost.
    *   **Class 8.8, 9.8:** High-strength bolts, capable of carrying significantly higher loads.
*   **Hole Types:**
    *   **Clearance Holes:** Slightly larger than the bolt diameter to allow for ease of assembly and slight misalignment. This is the most common type for bearing bolts.
    *   **Oversized Holes:** Significantly larger than the bolt diameter, used when significant movement or adjustment is required.
    *   **Slotted Holes:** Elongated holes, allowing for adjustment along a specific axis.
*   **Design Considerations:**
    *   **Shear Capacity:** Determined by the bolt's shear strength and its cross-sectional area.
    *   **Bearing Capacity:** Limited by the strength of the connected material and the bolt. The bearing stress should not exceed a specified limit.
    *   **Edge Distance and Pitch:** Crucial for preventing failure by tear-out of the connected plates. Minimum edge distances and pitches are specified in design codes.

### 1.2. High-Strength Bolts (HS Bolts)

*   **Definition:** High-strength bolts are manufactured from materials with higher tensile strength and are designed to be tightened to a specific preload. They transfer loads primarily through friction between the connected members.
*   **Mechanism of Load Transfer:**
    *   **Friction:** The primary load-carrying mechanism is the friction force generated between the faying surfaces of the connected members, which is achieved by tightening the bolts to a specified tension.
    *   **Shear (Secondary):** While friction is dominant, the bolts still resist shear forces.
    *   **Bearing (Less Significant):** Bearing stress is generally not the critical factor in HS bolt connections, especially when designed for slip resistance.
*   **Types of High-Strength Bolts:**
    *   **Tension Control Bolts (TC Bolts) / Tension Control High Strength Bolts (TCHSB):** These bolts have a splined end that breaks off when a predetermined tension is achieved. This ensures consistent pre-tensioning without requiring specialized torque wrenches.
    *   **Direct Tension Indicators (DTIs):** Washers with protrusions that compress as the bolt is tightened, indicating the achievement of the required preload.
    *   **Torque Wrench Tightened Bolts:** Bolts tightened using calibrated torque wrenches to achieve the desired tension.
*   **Classification (based on performance, often used with specific tightening methods):**
    *   **Class 8.8, 9.8, 10.9, 12.9:** These designations indicate higher tensile strengths.
*   **Tightening Procedures:**
    *   **Snug-Tight:** Bolts are tightened so that the plies are in firm contact, but without significant preload. Used for bearing-type connections with HS bolts.
    *   **Turn-of-Nut Method:** After snug-tightening, the nut is rotated a specified number of turns to achieve the required preload.
    *   **Calibrated Wrench Method:** Using a calibrated torque wrench to achieve a target torque, which induces the required tension.
*   **Fretting Corrosion:** A potential issue in HS bolt connections where relative movement between faying surfaces can occur, leading to wear and degradation of the faying surfaces and the bolt. Surface preparation (e.g., using grit blasting) is crucial to prevent this.
*   **Design Considerations:**
    *   **Slip Resistance:** The primary design consideration for HS bolts in shear. The frictional resistance is calculated based on the bolt preload and the coefficient of friction of the faying surfaces.
    *   **Bearing Strength:** Still considered, but usually not the governing factor.
    *   **Tension Capacity:** The bolt's tensile strength is critical for achieving the required preload.
    *   **Edge Distance and Pitch:** Similar to bearing bolts, these are important to prevent tear-out.

### 1.3. Comparison of Bearing vs. High-Strength Bolts

| Feature            | Bearing Bolts (Ordinary Bolts)                      | High-Strength Bolts (HS Bolts)                       |
| :----------------- | :-------------------------------------------------- | :--------------------------------------------------- |
| **Load Transfer**  | Shear and Bearing                                   | Friction (primary), Shear (secondary)                |
| **Tightening**     | Snug-tight                                          | Snug-tight + Turn-of-Nut, Calibrated Wrench, TC Bolts |
| **Preload**        | Not intentionally applied, minimal during assembly  | Intentionally applied and critical for design        |
| **Hole Type**      | Clearance holes (most common)                       | Clearance holes, potentially slightly larger for snug-tightening before final tightening |
| **Performance**    | Lower strength, less predictable performance        | Higher strength, more predictable performance        |
| **Cost**           | Generally lower                                     | Generally higher                                     |
| **Application**    | General construction, less critical connections     | Critical connections, heavy loads, slip-critical joints |
| **Failure Mode**   | Shear yielding, bearing failure                     | Slip (primary), bolt shear (secondary), bolt tension failure |

---

## 2. Prying Force

*   **Definition:** Prying force is an additional tensile force that acts on a bolt (or group of bolts) in a connection, in addition to the externally applied axial load. It arises due to the deformation characteristics of the connected members and the bolt arrangement.
*   **Mechanism:** When a tensile load is applied to a connection where a flange or web is connected to a rigid element (like a gusset plate or a column flange), the connected element tends to bend. This bending action causes the outer bolts in a group to carry a larger portion of the load, effectively "prying" on the inner bolts.
*   **When does it occur?** Prying forces are most significant in connections where:
    *   The connected member is relatively flexible.
    *   The bolt group is eccentric to the line of action of the applied load.
    *   There is a lever arm between the point of load application and the bolt.
    *   Connections with single angles or tees, or in beam-web connections where the web is primarily resisting the load.
*   **Consequences of Prying Force:**
    *   **Increased Bolt Tension:** Prying forces add to the existing tension in the bolts, potentially exceeding their capacity.
    *   **Reduced Joint Stiffness:** The bending of the connected member can lead to a loss of stiffness in the connection.
    *   **Bolt Failure:** In severe cases, the combined tension from the applied load and prying action can cause bolts to fracture.
*   **Calculation of Prying Force (Conceptual Approach):**
    *   Prying force is typically analyzed using principles of mechanics and structural analysis.
    *   It often involves calculating the bending deformation of the connected member and then determining the additional tension in the bolts required to resist this deformation.
    *   Design codes provide simplified methods or factors to account for prying action without requiring complex analysis for every connection.
*   **Factors Affecting Prying Force:**
    *   **Stiffness of the connected member:** More flexible members lead to higher prying forces.
    *   **Stiffness of the bolt group:** The more bolts and the tighter they are, the more the load is distributed, potentially reducing prying.
    *   **Geometry of the connection:** Lever arms and the arrangement of bolts play a significant role.
    *   **Type of load:** Dynamic or fluctuating loads can exacerbate prying effects.
*   **Mitigation:**
    *   **Stiffer connected members:** Using thicker plates or more robust sections.
    *   **Optimizing bolt arrangement:** Placing bolts closer to the line of action of the applied load.
    *   **Using a sufficient number of bolts:** Distributing the load more effectively.
    *   **Considering stiffer bolt materials.**

---

## 3. Beam to Column Connections

These are fundamental connections in multi-story steel structures, transferring gravity loads (vertical) and sometimes lateral loads (horizontal) from beams to columns. Their design is critical for the overall stability and performance of the building.

### 3.1. Types of Beam-to-Column Connections

The behavior of these connections can be broadly categorized by their rigidity:

#### 3.1.1. Simple Connections (End-Plate Shear Connections)

*   **Description:** These are designed to transfer primarily shear forces from the beam's web to the column. They are considered "pinned" or "simply supported" in idealized structural analysis, meaning they offer little resistance to rotation.
*   **Components:**
    *   **End Plate:** Welded to the beam's web.
    *   **Bolts:** Connect the end plate to the column flange or web.
    *   **Web Cleats (Optional):** Angles that can be bolted or welded to the beam web and the column to provide additional shear support.
*   **Mechanism of Load Transfer:**
    *   **Shear:** The bolts and the end plate are primarily designed to resist the shear force from the beam.
    *   **Bearing:** Bearing between the bolts and the holes in the end plate and column.
*   **Design Considerations:**
    *   **Shear strength of bolts and end plate.**
    *   **Bearing strength of bolts and column flange/web.**
    *   **Web buckling of the beam near the connection.**
    *   **Connection geometry to ensure adequate edge distances and pitches.**
*   **Advantages:** Simple to design and fabricate, cost-effective.
*   **Disadvantages:** Do not contribute to the lateral stability of the structure as they allow rotation.

#### 3.1.2. Moment Resisting Connections (Rigid or Semi-Rigid Connections)

*   **Description:** These connections are designed to transfer both shear forces and bending moments from the beam to the column, thus providing a degree of rigidity and contributing to the overall stability of the structure.
*   **Types:**
    *   **Flush End Plate Connections:** The end plate is flush with the beam's end.
        *   **Mechanism:** The moment is resisted by the tension and compression forces in the bolts, coupled with the bending of the end plate. The bolts in the top and bottom of the end plate are subjected to tension and compression due to the moment.
        *   **Components:** End plate, bolts, column flange.
        *   **Design Considerations:** Bolt tension and shear capacity, end plate bending and yielding, column flange bending and yielding (often requires stiffeners).
    *   **Extended End Plate Connections:** The end plate extends beyond the beam's web to provide a larger lever arm for the bolts resisting the moment.
        *   **Mechanism:** Similar to flush end plate, but the extended portion allows for a greater distance between the tension and compression bolts, leading to higher moment capacity.
        *   **Components:** Extended end plate, bolts, column flange.
        *   **Design Considerations:** Similar to flush end plate, with emphasis on the bending of the extended portion of the end plate and the resistance of the outer bolts to tension.
    *   **Haunched Connections:** A haunch (a triangular or tapered stiffener) is added to the beam's web or flange at the connection to increase its stiffness and moment capacity.
        *   **Mechanism:** The haunch acts to stiffen the connection and reduce the bending in the end plate and beam web.
        *   **Components:** Beam, column, end plate, bolts, haunch (welded or bolted).
        *   **Design Considerations:** Design of the haunch itself, its connection to the beam and column, and the resulting load distribution in the bolts.
    *   **Welded Connections (e.g., Flange and Web Welds):**
        *   **Description:** The beam flange is welded to the column flange, and the beam web is connected to the column web (often with a shear tab).
        *   **Mechanism:** The flange weld resists the moment, while the web connection resists shear.
        *   **Components:** Beam flange, column flange, beam web, column web, welds, shear tab (optional).
        *   **Design Considerations:** Weld strength and type (fillet, full penetration), heat-affected zone, potential for cracking.
*   **Advantages:** Contribute to the lateral stability of the structure, can reduce the need for bracing, allow for more open floor plans.
*   **Disadvantages:** More complex to design and fabricate, higher material and labor costs, can be susceptible to brittle fracture if not designed carefully.

### 3.2. Design Considerations for Beam-to-Column Connections

*   **Load Combinations:** All possible load combinations (gravity, wind, seismic) must be considered.
*   **Shear and Moment Demand:** The forces and moments at the beam end need to be accurately determined from structural analysis.
*   **Bolt Capacity:** Ensuring that the bolts can resist the combined shear and tension forces, considering prying action where applicable.
*   **Plate/Stiffener Strength:** The strength and stiffness of the end plates, shear tabs, and any stiffeners must be checked against yielding, buckling, and rupture.
*   **Column Web/Flange Strength:** The column itself must be able to resist the forces transferred from the beam without yielding or buckling. Column web stiffeners are often required for moment connections.
*   **Weld Strength:** If welds are used, their capacity must be sufficient to transfer the applied forces.
*   **Fit-up and Erection:** Practical considerations for installing the connection in the field.
*   **Ductility:** For seismic applications, connections are often designed to be ductile, allowing for plastic deformation without brittle failure.

---

## Practice Questions and Answers

**Question 1:** Differentiate between bearing bolts and high-strength bolts, focusing on their primary load transfer mechanisms and tightening requirements.

**Answer 1:**
*   **Bearing Bolts:** Primarily transfer loads through shear and bearing action. They are typically tightened to a "snug-tight" condition, meaning the plies are in firm contact, but significant preload is not intentionally applied.
*   **High-Strength Bolts:** Primarily transfer loads through friction between the connected members, achieved by a significant bolt preload. They are tightened using methods like the "turn-of-nut" method or calibrated torque wrenches to induce this preload. Shear and bearing are secondary load transfer mechanisms.

**Question 2:** Explain the concept of prying force and identify situations where it is likely to be significant.

**Answer 2:** Prying force is an additional tensile force that acts on a bolt in a connection, in addition to the externally applied axial load. It arises due to the bending deformation of the connected member. Prying force is significant in connections where the connected member is flexible, the bolt group is eccentric to the load, or there's a lever arm involved, such as in connections with single angles or tees, or in beam-web connections.

**Question 3:** Describe the key characteristics of a simple beam-to-column connection. What type of loads does it primarily transfer?

**Answer 3:** A simple beam-to-column connection (often an end-plate shear connection) is designed to transfer primarily **shear forces** from the beam's web to the column. It is considered a "pinned" connection, meaning it offers little resistance to rotation and is not designed to transfer bending moments.

**Question 4:** What are the advantages and disadvantages of moment-resisting beam-to-column connections compared to simple connections?

**Answer 4:**
*   **Advantages:** Contribute to lateral stability, can reduce the need for bracing, allow for more open floor plans.
*   **Disadvantages:** More complex design and fabrication, higher costs, potential for brittle fracture if not designed carefully.

**Question 5:** A beam is connected to a column using a flush end plate with four bolts in a 2x2 arrangement. The applied moment at the beam end causes the outer bolts to experience tension. Which bolts are more likely to be subjected to a greater tensile force due to prying action, and why?

**Answer 5:** The **outer bolts** of the 2x2 arrangement are more likely to experience a greater tensile force due to prying action. This is because the end plate will bend under the applied moment, and this bending will cause the outer bolts to stretch more, "prying" against the inner bolts and increasing their tensile load. The bending of the end plate creates a lever arm that amplifies the force on the outer bolts.

---

## Important Points to Remember

*   **Bolt Strength Grades:** Always refer to the specified strength grade of the bolts (e.g., 4.6, 8.8) for design calculations.
*   **Friction Surfaces:** For high-strength bolted connections designed for slip resistance, the condition of the faying surfaces (cleanliness, presence of coatings) is critical for achieving the design frictional capacity.
*   **Prying Action is Critical:** Never ignore the potential for prying force in tensile connections, as it can significantly increase the bolt tension and lead to premature failure.
*   **Connection Rigidity:** Understand the behavior of simple vs. moment-resisting connections and their impact on the overall structural system and stability.
*   **Code Provisions:** Always adhere to the relevant national or international design codes (e.g., AISC, Eurocode) for specific design requirements, limitations, and formulas related to bolts, connections, and prying forces.
*   **Weld Access Holes:** For full penetration welds in moment connections, proper weld access holes are crucial to ensure complete fusion and prevent stress concentrations.
*   **Column Web Stiffeners:** Moment connections often require stiffeners on the column web to resist the concentrated forces transmitted from the beam flanges.
