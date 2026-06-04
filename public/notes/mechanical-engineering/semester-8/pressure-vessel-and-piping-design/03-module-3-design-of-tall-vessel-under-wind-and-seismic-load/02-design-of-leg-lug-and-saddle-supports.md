---
title: "Design of leg, lug and saddle supports"
subject: "PRESSURE VESSEL AND PIPING DESIGN"
module: "Module 3: Design of tall vessel under wind and seismic load"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464402"
status: "completed"
scrapedAt: "2026-05-20T18:23:35.193Z"
---
# Pressure Vessel and Piping Design

## Module 3: Design of Tall Vessels Under Wind and Seismic Load

### Topic: Design of Leg, Lug, and Saddle Supports

---

This module delves into the crucial aspects of supporting tall pressure vessels, especially when subjected to significant environmental loads like wind and seismic forces. Understanding the design principles for various support types is paramount to ensuring structural integrity and safe operation.

---

### 1. Introduction to Supports for Tall Vessels

Tall vessels, due to their inherent height and slenderness, are particularly susceptible to lateral loads. These loads can induce bending moments, shear forces, and axial forces in the vessel shell and its supports. The primary function of supports is to safely transfer these loads to the foundation while maintaining the vessel's stability and preventing excessive deformation.

**Key Concepts:**

*   **Lateral Loads:** Wind pressure and seismic ground acceleration are the primary lateral loads considered for tall vessels.
*   **Load Transfer Path:** Supports act as the intermediary for transferring all vessel loads (weight, internal pressure, wind, seismic) to the supporting structure or foundation.
*   **Stability:** Supports must prevent overturning and excessive sway of the vessel.
*   **Thermal Expansion/Contraction:** Supports must accommodate the thermal movements of the vessel without inducing undue stresses.

**Relevant Textbooks/References:**

*   **Harvey, John F. (CBS Publisher):** Likely discusses the fundamental principles of load transfer and vessel behavior under various forces.
*   **Brownell & Young (John Wiley & Sons):** May provide practical insights into support selection and load calculations for process equipment.
*   **Megyesy, Eugene F. (Pressure Vessel Publishing Inc.):** A dedicated handbook for pressure vessel design, which would undoubtedly cover support design in detail.
*   **Moss, Dennis R. (Elsevier Inc.):** Offers practical guidance and industry best practices for pressure vessel design, including support considerations.

---

### 2. Types of Supports for Tall Vessels

Tall vessels typically employ either **Leg Supports** or **Saddle Supports**. Lugs are often used in conjunction with saddle supports or as alternative attachment points.

#### 2.1. Leg Supports

Leg supports are a common choice for tall vessels, providing a stable and rigid base. They are typically attached directly to the vessel shell or to reinforcing pads.

**Description:**

*   Four or more legs are equally spaced around the circumference of the vessel.
*   Legs are usually fabricated from structural steel members (angles, channels, or I-beams).
*   They are connected to the vessel shell via gusset plates, reinforcing pads, and welding.
*   The base of each leg is anchored to the foundation.

**Design Considerations:**

*   **Load Distribution:** Ensuring uniform load distribution among all legs is crucial.
*   **Buckling of Legs:** Legs, being slender compression members, are susceptible to buckling under axial loads (from vessel weight and potentially uplift from wind).
*   **Attachment to Shell:** The connection between the leg and the vessel shell must be robust enough to transfer all applied loads and moments. This often involves reinforcing the shell at the attachment points.
*   **Wind and Seismic Load Effects:**
    *   **Wind:** Generates overturning moments and shear forces at the base.
    *   **Seismic:** Induces inertial forces proportional to mass and acceleration, resulting in significant overturning moments and shear forces.
*   **Foundation Design:** The foundation must be designed to resist all vertical and lateral loads transferred by the legs.
*   **Thermal Expansion:** The design must accommodate differential thermal expansion between the vessel and the supports, or incorporate expansion joints if necessary.

**Design Process Outline:**

1.  **Determine Applied Loads:** Calculate all vertical (deadweight, contents) and lateral (wind, seismic) loads acting on the vessel and its supports.
2.  **Analyze Load Transfer:** Determine the forces and moments acting on each leg. This often involves analyzing the vessel as a beam-column under lateral loads.
3.  **Leg Member Selection:** Choose a suitable structural section for the legs based on buckling and yielding criteria.
4.  **Leg Buckling Analysis:**
    *   Calculate the critical buckling load for the chosen leg member using Euler's formula or relevant design codes (e.g., AISC for structural steel).
    *   Ensure the applied axial load is significantly less than the critical buckling load.
    *   **Important:** The effective length of the leg for buckling analysis depends on the end conditions (e.g., fixed at the base, pinned or fixed at the vessel connection).
5.  **Connection Design:** Design the weld connections and reinforcing pads to safely transfer the calculated loads from the legs to the vessel shell. This involves checking for shear, tension, and bearing stresses.
6.  **Foundation Anchor Bolt Design:** Design anchor bolts to resist uplift, shear, and bending moments at the base of the legs.

**Example Scenario (Conceptual):**

Consider a tall vessel subjected to wind. The wind creates a net overturning moment at the base. This moment is resisted by the axial forces in the legs – some legs will be in compression, and others in tension. The weight of the vessel adds to the compressive forces.

**Relevant Textbooks/References:**

*   **Harvey, John F.:** Might discuss stress concentration around openings and attachments, relevant for leg-to-shell connections.
*   **Megyesy, Eugene F.:** Likely has detailed procedures for calculating forces in leg supports and designing reinforcing pads.
*   **Chathopadhyay, Somnath (C.R.C Press):** Could offer specific design methodologies for wind and seismic load resistance in pressure vessels.
*   **Moss, Dennis R.:** Will provide practical examples and code interpretations for support design.

#### 2.2. Saddle Supports

Saddle supports are commonly used for horizontal vessels and sometimes for vertical vessels that require a lower profile or specific load distribution. For tall vertical vessels, saddle-like structures might be employed at higher elevations to provide lateral support and resist bending.

**Description:**

*   Typically consists of two or more curved or flat saddles that encircle a portion of the vessel shell.
*   Saddles distribute the load over a larger area of the shell.
*   They are usually fabricated from steel and may have reinforcing plates.
*   Attached to a substructure (e.g., concrete piers, steel frame).

**Types of Saddle Supports:**

*   **Two-Saddle Support:** Common for horizontal vessels.
*   **Multi-Saddle Support:** Used for longer vessels or to reduce bending stresses.
*   **Skirts with Saddle-like Features:** For tall vertical vessels, skirt extensions might incorporate features that act like saddles to provide lateral restraint at elevated points.

**Design Considerations for Tall Vessels (as lateral restraints):**

*   **Shell Stress:** The concentrated load from the saddle can cause high stresses in the vessel shell. Reinforcing pads and careful geometry are essential.
*   **Shell Buckling (Local):** The shell under the saddle can be prone to local buckling due to the concentrated pressure.
*   **Load Transfer to Structure:** The saddle must effectively transfer vessel loads to the supporting structure.
*   **Longitudinal Bending:** Saddles induce longitudinal bending moments in the vessel shell.
*   **Thermal Expansion:** Saddles might be designed to slide to accommodate longitudinal thermal expansion, or they may be fixed, requiring expansion bellows in the piping.
*   **Wind and Seismic Load Effects:**
    *   **Wind/Seismic:** These loads create bending moments and shear forces in the vessel. Saddles at specific elevations help resist these by providing lateral restraint.

**Design Process Outline (Conceptual for Lateral Restraint):**

1.  **Identify Restraint Points:** Determine the optimal locations for saddle supports to provide lateral stiffness against wind and seismic loads.
2.  **Analyze Vessel as a Cantilever:** Model the vessel as a cantilever beam fixed at the base and subjected to lateral loads. The saddles act as intermediate supports.
3.  **Calculate Saddle Reactions:** Determine the shear and bending moments transferred at the saddle locations.
4.  **Saddle Geometry Design:** Design the curvature or shape of the saddle to minimize stress concentration on the vessel shell. The angle of contact and saddle radius are critical parameters.
5.  **Shell Reinforcement:** Design reinforcing pads or thickened shell sections under the saddles to handle the concentrated loads and prevent local buckling.
6.  **Saddle Structure Design:** Design the saddle itself and its connection to the supporting structure, considering the forces and moments acting on it.
7.  **Sliding vs. Fixed Saddles:** Decide if the saddle needs to accommodate thermal expansion (sliding) or if it is a fixed support.

**Important Formulas/Concepts for Saddles:**

*   **Stress Concentration:** Formulas exist to estimate stress concentration factors due to saddle loads. Harvey and Megyesy are good sources for these.
*   **Local Buckling:** Codes like the ASME Boiler and Pressure Vessel Code (Section VIII, Division 1) provide rules for calculating shell thickness required to prevent local buckling under external pressure or concentrated loads.
*   **Saddle Angle and Radius:** The angle of contact (e.g., 90°, 120°) and the radius of the saddle significantly affect load distribution and stress.

**Relevant Textbooks/References:**

*   **Harvey, John F.:** Likely provides detailed analysis of stresses and shell behavior under saddle supports.
*   **Brownell & Young:** May offer practical guidance on selecting saddle types and their placement.
*   **Megyesy, Eugene F.:** Is a primary resource for saddle support design, including geometry and reinforcement.
*   **Moss, Dennis R.:** Will cover code compliance and practical considerations for saddle design.

#### 2.3. Lug Supports

Lugs are relatively small brackets or bosses welded to the vessel shell, typically used to attach components or provide specific support points. They are often used in conjunction with other support systems like legs or saddles.

**Description:**

*   Small structural members (e.g., plates, angles) welded to the vessel shell.
*   Used for supporting piping, lifting points, or as attachment points for external bracing.
*   Can also be used as attachment points for legs or other structural elements.

**Design Considerations:**

*   **Load Concentration:** Lugs concentrate loads on the vessel shell, leading to high stresses.
*   **Shell Reinforcement:** Reinforcing pads are almost always required around lug attachments.
*   **Weld Design:** The welds connecting the lug to the pad and the pad to the shell are critical and must be designed to handle the applied loads.
*   **Stress Concentration at Lug Corners:** Sharp corners in lugs can be stress risers. Radiused corners are preferred.
*   **Punching Shear:** The lug can exert a punching shear force on the reinforced shell area.
*   **Bearing Stress:** The bearing stress between the lug and the supported component (or the vessel shell itself if it's a direct attachment) must be checked.
*   **Wind and Seismic Load Effects:** Lugs used for external bracing or to attach to large structural supports will be subjected to the forces and moments induced by these lateral loads.

**Design Process Outline:**

1.  **Determine Loads on Lug:** Calculate the forces and moments acting on the lug from the attached component or structural system.
2.  **Lug Geometry and Material:** Select the shape and material for the lug itself.
3.  **Reinforcing Pad Design:** Design a reinforcing pad to distribute the lug's load over a larger area of the shell.
4.  **Shell Reinforcement Requirements:** Determine the required thickness and extent of the reinforcing pad based on code rules (e.g., ASME Section VIII, Division 1) for nozzle/lug attachments. This often involves checking against rules for openings.
5.  **Weld Design:** Design the welds (fillet welds are common) for the lug-to-pad and pad-to-shell connections. Check for shear and tension capacity of the welds.
6.  **Stress Analysis:** Perform a detailed stress analysis of the lug, pad, and shell area to ensure stresses are within allowable limits. This may involve Finite Element Analysis (FEA) for complex geometries or high loads.
7.  **Punching Shear and Bearing:** Check for punching shear through the reinforced shell and bearing stresses.

**Important Considerations for Lugs:**

*   **ASME Section VIII, Division 1:** Provides extensive rules for the design of openings and attachments, which are applicable to lug design. Look for rules pertaining to compensating for openings.
*   **Weld Lug vs. Slip Lug:** Understand the difference. Weld lugs are fixed attachments, while slip lugs allow for axial movement (thermal expansion).
*   **Load Line of Action:** The location of the load relative to the vessel centerline and the lug attachment point influences the bending moments developed.

**Relevant Textbooks/References:**

*   **Harvey, John F.:** Likely discusses stress concentrations and reinforcement around attachments.
*   **Megyesy, Eugene F.:** A key resource for detailed design procedures for lugs and reinforcing pads, referencing ASME codes.
*   **Chathopadhyay, Somnath:** May provide examples of lug design in specific applications.
*   **Moss, Dennis R.:** Offers practical advice and code interpretations related to lug and attachment design.

---

### 3. Design Philosophies and Code Requirements

The design of supports for pressure vessels, especially under wind and seismic loads, is governed by established engineering codes and standards.

**Key Codes/Standards:**

*   **ASME Boiler and Pressure Vessel Code (BPVC), Section VIII, Division 1 & 2:** While primarily for the vessel itself, it contains rules for openings, attachments, and general mechanical design principles that influence support design.
*   **ASME B31.3 (Process Piping):** Relevant if supports are designed to carry piping loads in addition to vessel loads.
*   **AISC (American Institute of Steel Construction) Standards:** Crucial for designing the structural steel components of leg supports and supporting structures for saddles.
*   **Local Building Codes and Seismic Design Standards (e.g., IBC, ASCE 7):** These codes dictate the wind and seismic forces that must be considered based on geographical location, building occupancy, and site conditions.

**Design Philosophies:**

*   **Strength Design:** Ensuring that the support components can withstand the applied stresses without yielding or rupturing.
*   **Stiffness Design:** Ensuring that deflections and deformations of the vessel and its supports are within acceptable limits to prevent operational issues or structural instability.
*   **Buckling Prevention:** Designing compression members (like legs) to resist buckling failure.
*   **Fatigue Analysis:** For components subjected to cyclic loading (though less common for primary supports under static wind/seismic unless there are strong resonant effects).

---

### 4. Wind Load Considerations

Wind loads are a significant consideration for tall vessels.

**Key Concepts:**

*   **Wind Pressure:** Wind exerts pressure on the exposed surface of the vessel, increasing with height and wind speed.
*   **Drag Force:** The force exerted by wind on the vessel.
*   **Overturning Moment:** The primary concern for tall, slender structures. Wind pressure acting above the center of pressure creates a moment that tends to tip the vessel over.
*   **Shear Force:** Wind also induces shear forces at the base.
*   **Gust Effects:** Wind speed is not constant; gusts can impose higher, transient loads.
*   **Dynamic Effects:** For very tall or flexible structures, wind can induce vibrations (vortex shedding).

**Calculation of Wind Loads (as per ASCE 7 or similar codes):**

*   **Basic Wind Speed:** Determined from meteorological data for the site.
*   **Wind Exposure Category:** Based on the surrounding terrain and roughness.
*   **Velocity Pressure:** Calculated based on wind speed, air density, and height.
*   **Drag Coefficient:** Depends on the shape of the vessel and its surface roughness.
*   **Force Coefficients:** Account for the overall shape and aspect ratio.

**Impact on Supports:**

*   **Leg Supports:** Must resist the overturning moment by generating axial forces (compression and tension) in the legs. The base of the legs must be anchored securely to counteract uplift.
*   **Saddle Supports:** If used as lateral restraints for a tall vessel, they will experience shear forces and bending moments transferred from the vessel shell.
*   **Foundation:** The foundation must be designed to resist the combined overturning moment and shear force.

**Important Point to Remember:** Tall vessels are often treated as cantilever beams fixed at the base for wind load analysis.

---

### 5. Seismic Load Considerations

Seismic loads are inertial forces generated within the vessel and its contents during an earthquake.

**Key Concepts:**

*   **Ground Acceleration:** Earthquakes cause the ground to shake, inducing accelerations.
*   **Inertial Forces:** The mass of the vessel and its contents resist these accelerations, creating inertial forces acting at the center of mass.
*   **Base Shear:** The total horizontal force acting at the base of the structure.
*   **Overturning Moment:** Inertial forces acting at higher elevations create a significant overturning moment at the base.
*   **Dynamic Amplification:** The response of the structure to seismic loads can be amplified by its natural vibration frequencies.
*   **Spectral Analysis:** Seismic design often uses response spectra to define the expected ground motion.

**Calculation of Seismic Loads (as per IBC, ASCE 7, or seismic design codes):**

*   **Seismic Response Coefficient (Cs):** Depends on the site seismic hazard, soil type, and structural system.
*   **Occupancy Category:** Influences the seismic design requirements.
*   **Importance Factor (Ie):** For critical facilities, higher seismic loads are considered.
*   **Base Shear Calculation:** $V = C_s W$, where W is the total weight of the vessel and its contents.
*   **Vertical Distribution of Force:** The lateral forces are distributed along the height of the vessel based on the mass distribution.

**Impact on Supports:**

*   **Leg Supports:** Similar to wind, legs must resist the base shear and overturning moment. The axial forces in the legs will be significant.
*   **Saddle Supports:** Will experience substantial shear forces and bending moments.
*   **Foundation:** Must be designed to withstand the seismic base shear and overturning moment, including potential uplift and sliding.
*   **Equipment Internals:** Seismic loads can also affect internal components, trays, or packing, which might transmit additional forces to the supports.

**Important Point to Remember:** Seismic design requires consideration of both horizontal and vertical ground accelerations, although horizontal is often dominant. The vessel's natural frequency is a critical parameter.

---

### 6. Interplay Between Vessel Design and Support Design

The design of the vessel shell is intrinsically linked to the design of its supports.

*   **Shell Thickness:** The required shell thickness for pressure containment might be influenced by the need to accommodate stresses from external loads transferred through supports.
*   **Reinforcing Pads:** Required at support attachment points, these pads add weight and can influence the overall vessel design.
*   **Nozzle Design Rules:** Rules for designing nozzles and other openings in ASME Section VIII are often applied to lug and saddle attachments, especially regarding reinforcement.
*   **Buckling of Shell:** Tall, slender shells can be susceptible to buckling under external pressure or combined loads. The presence of supports can alter the buckling modes.
*   **Thermal Expansion:** The design of supports must account for the thermal expansion and contraction of the vessel. Fixed supports can induce significant stresses if not properly designed for or if thermal expansion is not accommodated elsewhere (e.g., in piping).

---

### 7. Practice Questions and Answers

**Question 1:**

A tall vertical pressure vessel is supported by four equally spaced legs. The vessel has a diameter of 3m and a height of 20m. It is subjected to a wind load that creates an overturning moment of 5000 kN-m at the base and a base shear of 200 kN. The weight of the vessel and its contents is uniformly distributed along its height, resulting in a total vertical load of 1000 kN.

a) Calculate the axial load in each leg if the legs are located at the base of the vessel.
b) If the legs are made of 150x150x10mm structural steel angles (Area = 29.1 cm², Moment of Inertia about x-x axis = 8.55 x 10⁶ mm⁴), and assuming an effective length for buckling of 4 meters with pinned-pinned end conditions, what is the safety factor against buckling under the maximum compressive load? (Assume Young's Modulus for steel = 200 GPa).

**Answer 1:**

**a) Axial Load in each leg:**

*   Total vertical load (Deadweight) = 1000 kN
*   Vertical load per leg (due to deadweight) = 1000 kN / 4 legs = 250 kN (compression)
*   Overturning Moment (M) = 5000 kN-m
*   Base Shear (V) = 200 kN
*   Assume legs are at a radius (r) from the vessel centerline = Diameter / 2 = 3m / 2 = 1.5 m

The overturning moment is resisted by the axial forces in the legs. The legs experiencing maximum compression are those on the leeward side, and those experiencing maximum tension are on the windward side.

Force due to overturning moment in the most loaded leg = M / (n * r)
Where n = number of legs (4)

Force due to overturning moment = 5000 kN-m / (4 * 1.5 m) = 5000 / 6 kN = 833.33 kN

Maximum compressive load in a leg = Vertical load per leg + Force due to overturning moment
Max Compressive Load = 250 kN + 833.33 kN = **1083.33 kN**

The base shear is also distributed among the legs, but the overturning moment typically dominates the axial load. For a more detailed analysis, the base shear would be considered as a shear force on the foundation. However, if the legs are directly attached, a portion of the shear would be resolved into axial forces depending on the attachment geometry. For simplicity here, we focus on the overturning moment.

**b) Safety Factor against Buckling:**

*   Maximum compressive load ($P_{applied}$) = 1083.33 kN
*   Leg member properties:
    *   Area (A) = 29.1 cm² = 2910 mm²
    *   Moment of Inertia ($I$) = 8.55 x 10⁶ mm⁴
    *   Effective length ($L_e$) = 4000 mm
    *   Young's Modulus (E) = 200 GPa = 200,000 N/mm²

First, calculate the radius of gyration ($r$):
$r = \sqrt{I/A} = \sqrt{8.55 \times 10^6 \text{ mm}^4 / 2910 \text{ mm}^2} = \sqrt{2938.14 \text{ mm}^2} = 54.2 \text{ mm}$

Calculate the slenderness ratio ($\lambda$):
$\lambda = L_e / r = 4000 \text{ mm} / 54.2 \text{ mm} = 73.8$

Now, calculate the critical buckling load ($P_{cr}$) using Euler's formula for pinned-pinned ends:
$P_{cr} = (\pi^2 E I) / L_e^2$
$P_{cr} = (\pi^2 \times 200,000 \text{ N/mm}^2 \times 8.55 \times 10^6 \text{ mm}^4) / (4000 \text{ mm})^2$
$P_{cr} = (\pi^2 \times 200,000 \times 8.55 \times 10^6) / 16 \times 10^6 \text{ N}$
$P_{cr} = (1973.9 \times 200,000 \times 8.55 \times 10^6) / 16 \times 10^6 \text{ N}$
$P_{cr} = 3.37 \times 10^{12} \text{ N} / 16 \times 10^6 \text{ N}$
$P_{cr} = 210,625,000 \text{ N} = 210,625 \text{ kN}$

Safety Factor ($SF$) = $P_{cr} / P_{applied}$
$SF = 210,625 \text{ kN} / 1083.33 \text{ kN}$
$SF \approx 194.4$

*(Note: In actual design, more refined buckling formulas from steel design codes like AISC would be used, which consider the yield strength of the material and the slenderness ratio more precisely. Euler's formula is an approximation for slender columns.)*

**Question 2:**

What is the primary difference in how leg supports and saddle supports are used to support tall vertical pressure vessels, particularly concerning their role in resisting lateral loads?

**Answer 2:**

*   **Leg Supports:** Primarily provide **vertical support** and resist overturning moments due to lateral loads by developing **axial forces (tension and compression)** in the individual legs. They form a rigid base.
*   **Saddle Supports (or similar elevated restraints):** When used for tall vertical vessels, they act more as **lateral restraints** at specific elevations. They resist **shear forces** and **bending moments** within the vessel shell, providing stiffness against sway caused by wind or seismic loads. They don't typically carry the full vertical weight in the same way legs do, but rather transfer lateral forces to an external structure.

---

### 8. Important Points to Remember

*   **Load Path is Crucial:** Always trace the path of all loads (vertical, lateral, thermal) from the vessel to the foundation.
*   **Buckling is a Major Concern:** For slender compression members like legs, buckling analysis is critical.
*   **Stress Concentration:** Pay close attention to areas around support attachments (legs, lugs, saddles) where stresses can be significantly higher. Reinforcement is often mandatory.
*   **Code Compliance:** Adhere strictly to relevant design codes (ASME, AISC, building codes) for safety and validity.
*   **Seismic and Wind Loads:** These are often the governing loads for the design of supports for tall vessels and must be calculated according to applicable standards.
*   **Thermal Expansion:** Ensure that the support design does not impede necessary thermal movements and does not induce excessive stresses due to expansion/contraction.
*   **Foundation Interaction:** The support design is incomplete without considering the foundation's capacity to handle the applied loads.

---

### 9. Alignment with Course Outcomes

This module directly addresses:

*   **CO1 (K2):** By explaining the design considerations for supports, which are integral parts of a vessel system.
*   **CO2 (K2):** Understanding how lateral loads induce bending and shear in the vessel shell, which are then transferred through supports.
*   **CO3 (K3):** This topic is central to CO3, as it involves applying design concepts to calculate thickness and stiffener requirements (reinforcing pads) for supports and the vessel shell under buckling loads (legs) and concentrated loads (saddles/lugs). It also covers supporting vertical vessels under buckling loads.
*   **CO4 (K3):** While not directly about pipe stress analysis, the understanding of lateral load transfer and structural behavior informs the overall system design, which is related to the broader context of piping and vessel integrity.

---

This comprehensive set of notes provides a foundation for understanding the design of leg, lug, and saddle supports for tall pressure vessels under wind and seismic loads. Remember to consult the referenced textbooks and relevant design codes for detailed calculations and specific requirements.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
