---
title: "Light gauge sections – Types of cross sections – Local buckling and post buckling"
subject: "ADVANCED DESIGN OF CONCRETE STRUCTURES"
module: "Module 4: Review of the codes –IS 811(1987), IS 801(1975), SP 6"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110e0"
status: "completed"
scrapedAt: "2026-05-20T18:51:53.722Z"
---
# Advanced Design of Concrete Structures: Module 4 - Light Gauge Sections

This module delves into the design principles for light gauge steel sections, focusing on their behavior under load, particularly local buckling, and the review of relevant Indian Standards.

---

## 1. Introduction to Light Gauge Steel Sections

Light gauge steel sections, often referred to as cold-formed steel sections, are fabricated from thin sheets or strips of steel that are cold-worked to achieve the desired cross-sectional shape. This cold-forming process imparts unique material properties and structural behaviors.

### Key Concepts & Definitions:

*   **Cold-Formed Steel:** Steel that has been formed into shape at ambient temperatures (below the critical temperature for recrystallization). This is typically done through roll forming or press braking.
*   **Thin-walled:** Sections with a width-to-thickness ratio typically greater than or equal to 0.5.
*   **Effective Design:** Due to the thinness of the material, local buckling can occur at stresses significantly lower than the yield strength of the steel. Therefore, the design must account for the reduced effective width of the flanges and webs.
*   **Advantages of Light Gauge Steel:**
    *   High strength-to-weight ratio.
    *   Corrosion resistance (with proper coatings).
    *   Ease of fabrication and assembly.
    *   Dimensional stability.
    *   Sustainability (recyclable).

---

## 2. Review of Relevant Codes

The design of light gauge steel sections in India is primarily governed by:

### 2.1 IS 811 (1987): Code of Practice for Cold-Formed Structural Steel Sections

*   **Purpose:** This code provides the fundamental principles and methods for the design of cold-formed steel structural members.
*   **Scope:** Covers various types of cold-formed sections used in building construction, including beams, columns, purlins, girts, and built-up sections.
*   **Key Provisions:**
    *   **Material Properties:** Defines the yield strength ($f_y$) and ultimate tensile strength ($f_u$) of steel.
    *   **Section Classification:** Classifies sections based on the slenderness of their elements (flanges, webs) to determine the need for effective width calculations.
    *   **Local Buckling:** Provides methods for calculating the reduced strength due to local buckling of individual elements and overall buckling of the section.
    *   **Design Stresses:** Specifies allowable stresses for tension, compression, bending, and shear.
    *   **Connections:** Addresses the design of connections for light gauge steel members.

### 2.2 IS 801 (1975): Code of Practice for Use of Cold-Formed Light Gauge Steel Members in Structures

*   **Purpose:** This code is specifically dedicated to the design and construction of structures utilizing cold-formed light gauge steel members.
*   **Scope:** Extends the principles of IS 811 to the design of complete structural systems. It provides guidance on load combinations, stability checks, and specific applications.
*   **Key Provisions:**
    *   **Load Combinations:** Outlines various load combinations for design purposes (dead load, live load, wind load, etc.).
    *   **Stability Considerations:** Emphasizes the importance of overall stability of the structure and individual members against lateral-torsional buckling and local buckling.
    *   **Design of Built-up Sections:** Provides guidelines for designing sections formed by joining multiple light gauge steel members.
    *   **Fasteners:** Discusses the design and selection of fasteners for connecting light gauge steel members.

### 2.3 SP 6: Handbooks on Steel Structures (Various Volumes)

*   **Purpose:** SP 6 volumes, particularly those related to steel structures, serve as practical guides and contain extensive tables, charts, and design aids for steel members, including light gauge sections.
*   **Key Provisions (depending on the specific volume):**
    *   **Standard Section Properties:** Tables listing dimensions, cross-sectional areas, moments of inertia, and other properties for commonly used light gauge sections.
    *   **Load Tables:** Pre-calculated load-carrying capacities for standard sections under various loading conditions.
    *   **Design Examples:** Illustrative examples demonstrating the application of code provisions.
    *   **Design Charts:** Graphical aids to simplify design calculations.

---

## 3. Types of Light Gauge Steel Cross Sections

Light gauge steel sections come in a wide variety of shapes, each suited for specific structural applications. They are typically formed by bending a single sheet of steel.

### Common Cross-Sectional Shapes:

*   **C-Sections (Channel Sections):**
    *   **Description:** Open sections with a web and two flanges.
    *   **Applications:** Purlins, girts, studs, joists, beams.
    *   **Variations:** With or without lip (edge stiffeners).

    ```
         ______
        /      \
       /        \_______
      /__________/      \
     |__________|________|
    ```
    *(Simplified diagram of a C-section with a lip)*

*   **Z-Sections:**
    *   **Description:** Similar to C-sections but with flanges oriented in opposite directions.
    *   **Applications:** Purlins, girts, framing members.
    *   **Advantages:** Offer good load-carrying capacity and are often used in a lapped connection for purlins, providing a continuous bearing surface.

    ```
         ______
        /      \_______
       /______/      \
      |_______\_______\
             /
    ```
    *(Simplified diagram of a Z-section)*

*   **U-Sections (Hat Sections):**
    *   **Description:** Sections with a flat base and two flanges extending upwards.
    *   **Applications:** Purlins, girts, roof deck supports.

    ```
     ________
    /        \
   /          \
  /____________\
 |______________|
    ```
    *(Simplified diagram of a U-section)*

*   **Angles (L-Sections):**
    *   **Description:** Sections with two legs joined at an angle.
    *   **Applications:** Bracing, purlins, girts, framing members.

    ```
     ______
    /      \
   /________\
    ```
    *(Simplified diagram of an angle section)*

*   **Tubular Sections (Square, Rectangular, Circular):**
    *   **Description:** Closed sections formed by welding or interlocking.
    *   **Applications:** Columns, beams, structural framing.
    *   **Advantages:** Higher torsional rigidity and greater resistance to local buckling compared to open sections.

    ```
     ______
    |      |
    |      |
    |______|
    ```
    *(Simplified diagram of a square tubular section)*

*   **Corrugated and Ribbed Sections:**
    *   **Description:** Sections with undulating or ribbed surfaces to enhance stiffness and strength.
    *   **Applications:** Roof and wall cladding, floor decking.

### Section Classification:

*   **Purpose:** Classifying the elements of a cross-section (flange, web) based on their width-to-thickness ratio helps determine their susceptibility to local buckling.
*   **Categories:**
    *   **Stiffened Elements:** Elements supported along one edge by a web or flange (e.g., the flange of a C-section).
    *   **Unstiffened Elements:** Elements supported along both edges by another element (e.g., the edge stiffener/lip of a C-section).

---

## 4. Local Buckling and Post-Buckling Behavior

Local buckling is a critical failure mode for thin-walled members. It occurs when a flat element of the cross-section buckles under compressive stress before the overall member reaches its yield or Euler buckling load.

### 4.1 Local Buckling of Elements

#### 4.1.1 Stiffened Elements (e.g., Flanges, Webs)

*   **Mechanism:** Compressive stresses in a flat element can cause it to buckle outwards or inwards, forming waves.
*   **Critical Buckling Stress ($F_{cr}$):** The critical buckling stress depends on the element's slenderness ratio (width-to-thickness ratio, $b/t$), the material's Young's modulus ($E$), and the yield strength ($f_y$).
*   **IS 811 Approach:**
    *   Elements are classified into categories based on their width-to-thickness ratio ($\lambda = b/t$).
    *   For elements where $\lambda$ exceeds a certain limit, the effective width ($b_e$) is reduced.
    *   The reduction in effective width accounts for the stress redistribution due to buckling.

    **Formula for Effective Width ($b_e$) of Stiffened Elements (Simplified Representation from IS 811):**

    $b_e = C \frac{t}{\sqrt{f_y}} \cdot \alpha$

    Where:
    *   $C$ is a factor depending on the edge condition (stiffened along one edge).
    *   $t$ is the thickness of the element.
    *   $f_y$ is the yield strength of the steel.
    *   $\alpha$ is a reduction factor that depends on the slenderness ratio ($\lambda = b/t$).

    **General Concept:** As the slenderness ratio increases, the effective width decreases, leading to a reduced load-carrying capacity.

#### 4.1.2 Unstiffened Elements (e.g., Lips of C-Sections)

*   **Mechanism:** An unstiffened element is supported along both edges. It buckles as a column or a plate strip.
*   **Critical Buckling Stress ($F_{cr}$):** The critical buckling stress depends on the element's unsupported width-to-thickness ratio ($b/t$), $E$, and $f_y$.
*   **IS 811 Approach:**
    *   Similar to stiffened elements, unstiffened elements are classified based on their slenderness ratio.
    *   Effective width is calculated to account for buckling.

    **Formula for Effective Width ($b_e$) of Unstiffened Elements (Simplified Representation from IS 811):**

    $b_e = C' \frac{t}{\sqrt{f_y}} \cdot \beta$

    Where:
    *   $C'$ is a factor for unstiffened elements.
    *   $t$ is the thickness of the element.
    *   $f_y$ is the yield strength of the steel.
    *   $\beta$ is a reduction factor that depends on the slenderness ratio ($\lambda = b/t$).

#### 4.2 Local Buckling of the Entire Section

*   **Mechanism:** In addition to individual element buckling, the entire cross-section can buckle locally, particularly in members under uniform compression. This is an interaction of the buckling of multiple elements.
*   **Affected Sections:** Primarily open sections like C, Z, and hat sections.
*   **IS 811 Approach:**
    *   The code provides methods to check the overall buckling behavior of the section by considering the interaction of flanges and webs.
    *   The reduction factor for the entire section's compressive strength will depend on the slenderness of the critical elements and their arrangement.

---

## 5. Post-Buckling Behavior

Post-buckling behavior describes the behavior of a structural element after it has buckled. For light gauge steel sections, understanding post-buckling is crucial for accurate design, especially for elements that buckle locally.

### Key Concepts:

*   **Load Redistribution:** After an element buckles, the stress distribution changes. The highly stressed regions relax, and the load is redistributed to adjacent, less-stressed regions.
*   **Increased Load Carrying Capacity:** Due to this redistribution, the element can still carry additional load even after buckling has initiated. The effective width concept aims to capture this.
*   **Residual Stresses:** Cold-forming introduces residual stresses within the steel. These stresses can interact with applied stresses and affect the buckling behavior. IS 811 accounts for these effects.
*   **Ultimate Strength:** The ultimate strength of a locally buckled element is often significantly higher than the critical buckling stress. The effective width method provides a simplified way to calculate this ultimate strength by reducing the geometry of the buckled element.

### Effective Width Concept in Post-Buckling:

*   The effective width ($b_e$) is a reduced width that, when subjected to uniform stress equal to the yield strength ($f_y$), carries the same load as the actual element under the non-uniform stress distribution that exists after buckling.
*   This concept allows for a more rational design by utilizing the post-buckling strength of the material.

---

## 6. Design Considerations based on Codes

### 6.1 IS 811 Design Procedure (General Outline)

1.  **Section Classification:** Determine the slenderness of flanges and webs based on their width-to-thickness ratios.
2.  **Effective Width Calculation:**
    *   Calculate the effective width for stiffened elements (e.g., flange edge, web).
    *   Calculate the effective width for unstiffened elements (e.g., lips).
    *   Assemble the effective cross-section by summing the effective widths of the individual elements.
3.  **Stress Calculation:** Determine the stresses in the effective section due to applied loads.
4.  **Strength Checks:**
    *   **Axial Compression:** Check the compressive capacity of the member considering the effective area and potential overall buckling.
    *   **Bending:** Check the bending capacity of the member considering the effective section modulus and lateral-torsional stability.
    *   **Shear:** Check the shear capacity of the web.
    *   **Combined Stresses:** Check for combined axial and bending stresses.
5.  **Connection Design:** Design connections for adequate strength and stiffness.

### 6.2 IS 801 Design Considerations

*   **Overall Stability:** In addition to local buckling, IS 801 emphasizes the need for checks against overall buckling phenomena like lateral-torsional buckling, especially for beams and longer columns.
*   **Deflection Control:** The design must also ensure that deflections are within acceptable limits.
*   **Serviceability Limits:** For structures, serviceability conditions like vibration and deformation under service loads are important.

---

## 7. Practice Questions and Exercises

**Q1:** What is the primary difference in the application of IS 811 and IS 801?

**Answer:** IS 811 provides the fundamental principles for designing cold-formed steel members at the cross-sectional level, while IS 801 extends these principles to the design of complete structures utilizing these members.

**Q2:** Explain the concept of "effective width" in the context of local buckling of light gauge steel sections. Why is it necessary?

**Answer:** Effective width is a reduced width of a flat element that, when subjected to uniform stress equal to the yield stress, carries the same load as the actual element under a non-uniform stress distribution that arises after local buckling has occurred. It is necessary to account for the reduced load-carrying capacity of thin elements that are susceptible to buckling at stresses below the material's yield strength.

**Q3:** List three common types of light gauge steel cross-sections and their typical applications.

**Answer:**
*   **C-Sections:** Purlins, girts, studs, beams.
*   **Z-Sections:** Purlins, girts, framing members.
*   **Tubular Sections (e.g., Square/Rectangular):** Columns, beams, structural framing.

**Q4:** What is meant by "post-buckling behavior" in light gauge steel design?

**Answer:** Post-buckling behavior refers to the ability of a buckled element to continue carrying load after the initiation of buckling due to stress redistribution. The effective width concept is used to quantify this behavior for design purposes.

**Q5:** (Conceptual) A C-section purlin with a lip is subjected to bending. Which elements are likely to be more critical for local buckling, and why?

**Answer:** The flanges of the C-section are likely to be more critical for local buckling as they are stiffened elements supported only at one edge (by the web). The lip is an unstiffened element supported at both edges, and while it can buckle, its slenderness ratio is typically smaller, making it less critical than the main flange. However, the interaction of both flange and lip buckling needs to be considered.

---

## 8. Important Points to Remember

*   **Thin-walled Sections:** Light gauge steel members are characterized by their thinness, making them prone to local buckling.
*   **Cold-Forming:** The manufacturing process of cold-forming imparts unique material properties and can introduce residual stresses.
*   **Effective Width:** This is a fundamental concept in the design of light gauge steel sections to account for the reduction in load-carrying capacity due to local buckling and post-buckling effects.
*   **Code Provisions:** Always refer to the latest versions of IS 811 and IS 801 for detailed design procedures and specifications.
*   **Element Classification:** Understanding the classification of stiffened and unstiffened elements is crucial for applying the correct effective width calculations.
*   **Overall Stability:** Don't forget to check for overall stability (e.g., lateral-torsional buckling) in addition to local buckling effects.
*   **SP 6:** Utilize SP 6 handbooks as valuable resources for practical design aids and examples.

---
