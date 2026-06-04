---
title: "Stiffened and multiple stiffened compression elements−Tension members− Beams and deflection of beams−Combined stresses and connections"
subject: "ADVANCED DESIGN OF STEEL STRUCTURES"
module: "Module 4: Design of Light Gauge Structures: Design of light gauge steel structures: Introduction−Types of cross sections−Materials"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8118fd"
status: "completed"
scrapedAt: "2026-05-20T19:02:30.707Z"
---
# ADVANCED DESIGN OF STEEL STRUCTURES

## Module 4: Design of Light Gauge Structures

### Topic: Stiffened and Multiple Stiffened Compression Elements, Tension Members, Beams and Deflection of Beams, Combined Stresses and Connections

---

### 1. Introduction to Light Gauge Steel Structures

*   **Definition:** Light gauge steel structures are building components formed from cold-formed steel sections. These sections are typically produced by rolling or pressing flat steel sheets or strips into specific shapes.
*   **Key Characteristics:**
    *   **Lightweight:** Significantly lighter than traditional hot-rolled steel sections.
    *   **High Strength-to-Weight Ratio:** Offers excellent structural performance for its weight.
    *   **Economical:** Often cost-effective due to material efficiency and ease of fabrication.
    *   **Corrosion Resistance:** Steel's inherent properties can be enhanced with galvanization or other coatings.
    *   **Versatile:** Can be formed into a wide variety of cross-sectional shapes.
    *   **Fast Construction:** Prefabrication and ease of assembly contribute to rapid erection.
*   **Applications:** Residential framing (walls, floors, roofs), commercial building components, industrial buildings, portable structures, and secondary framing elements.

---

### 2. Types of Cross Sections in Light Gauge Steel Structures

Light gauge steel sections are characterized by their thin walls and often feature unique shapes to enhance their structural efficiency. These shapes are classified based on the presence and arrangement of stiffeners.

*   **Unstiffened Elements:**
    *   **Definition:** Flat elements where the edge is connected to another structural element but is not itself reinforced by a bead, rib, flange, or lip.
    *   **Examples:** The flat web of a C-section, the flanges of a Z-section (before the edge stiffener is considered).
    *   **Behavior:** Prone to local buckling at lower stress levels compared to stiffened elements.

*   **Stiffened Elements:**
    *   **Definition:** Flat elements where at least one edge is reinforced by a web or flange, or by a bead, rib, or lip. This reinforcement helps to delay or prevent local buckling.
    *   **Examples:**
        *   The web of a C-section (stiffened by two flanges).
        *   The web of an I-section (stiffened by two flanges).
        *   The flange of a Z-section with an edge stiffener.
    *   **Behavior:** Possess higher buckling resistance due to the stiffening effect of the edge support.

*   **Multiple Stiffened Elements:**
    *   **Definition:** Flat elements that are stiffened along both edges, or elements within a built-up section that are stiffened along both edges.
    *   **Examples:**
        *   The web of a box section (stiffened by four flanges/webs).
        *   The individual webs of a built-up box or U-channel section composed of multiple elements.
        *   The web of an I-section where the web is divided into multiple panels by intermediate stiffeners.
    *   **Behavior:** Exhibit the highest resistance to local buckling among the flat element types.

*   **Common Cross-Sectional Shapes:**
    *   **C-Sections (Channel Sections):** Consist of a web and two flanges. Widely used for studs, joists, and purlins.
    *   **Z-Sections:** Feature a web and two flanges, with one flange often having an edge stiffener. Used for purlins, girts, and secondary framing.
    *   **U-Sections (Channel or Hat Sections):** Similar to C-sections but open on one side. Used for eave purlins, blocking, and bracing.
    *   **I-Sections (or H-Sections):** Composed of a web and two flanges, resembling hot-rolled I-beams. Used for main structural members like beams and columns.
    *   **Box Sections (Rectangular or Square Tubes):** Formed by four connected elements, providing excellent torsional rigidity. Used for columns, beams, and bracing.
    *   **Corrugated Sheets:** Used for roofing, cladding, and decking, acting as structural elements in some cases.

---

### 3. Materials for Light Gauge Steel Structures

*   **Primary Material:** Cold-formed steel.
*   **Types of Steel:**
    *   **Structural Steel Grades:** Typically conform to standards like ASTM A653 (for galvanized steel) or equivalent international standards. Common grades include:
        *   **G90 (ASTM A653):** Provides a specific minimum zinc coating weight. Higher values indicate thicker coatings for better corrosion resistance.
        *   **High-Strength Low-Alloy (HSLA) steels:** Offer improved yield strength and toughness.
    *   **Steel Sheet Thickness:** Varies from very thin gauge (e.g., 0.4 mm or 26 gauge) to thicker sections (e.g., 3 mm or 1/8 inch).
*   **Material Properties:**
    *   **Yield Strength ($F_y$):** The stress at which the steel begins to deform plastically.
    *   **Tensile Strength ($F_u$):** The maximum stress the steel can withstand before fracture.
    *   **Modulus of Elasticity ($E$):** A measure of stiffness (typically 200,000 MPa or 29,000 ksi for steel).
    *   **Poisson's Ratio ($\nu$):** The ratio of transverse strain to axial strain (typically 0.3 for steel).
    *   **Corrosion Resistance:** Enhanced by galvanization (zinc coating), painting, or other protective finishes.

---

### 4. Stiffened and Multiple Stiffened Compression Elements

This section focuses on the behavior of compression elements within light gauge steel members, particularly their resistance to local buckling.

*   **Local Buckling:** A phenomenon where thin flat elements of a structural member buckle locally under compressive stress, even if the member as a whole remains stable. This significantly reduces the load-carrying capacity.

*   **Factors Influencing Buckling of Flat Elements:**
    *   **Width-to-Thickness Ratio ($b/t$):** A larger ratio indicates a "flimsier" element more prone to buckling.
    *   **Edge Support Conditions:** How the edges of the flat element are connected to other parts of the section.
    *   **Material Properties:** Yield strength ($F_y$) and Modulus of Elasticity ($E$).
    *   **Stiffeners:** The presence, type, and dimensions of stiffeners.

*   **Behavior of Unstiffened Compression Elements:**
    *   **Critical Buckling Stress ($f_{cr}$):** For a simple unstiffened element under uniform compression, the critical buckling stress is given by:
        $$f_{cr} = \frac{K_c E}{ (b/t)^2 }$$
        where $K_c$ is a coefficient depending on the edge support. For a simple edge stiffened element, $K_c \approx 5.73$.
    *   **Design Considerations:** Unstiffened elements typically have lower allowable stresses and are often limited in their contribution to the overall member capacity, especially in compression.

*   **Behavior of Stiffened Compression Elements:**
    *   **Critical Buckling Stress ($f_{cr}$):** For a stiffened element (like a web or flange with an edge stiffener), the buckling behavior is more complex. The effective width ($b_e$) concept is used, where only a portion of the flat width is considered effective in carrying stress due to post-buckling strength.
    *   **Effective Width Concept:**
        *   The edge stiffener provides support, allowing the element to carry stress beyond the critical buckling stress.
        *   The distribution of stress across the stiffened element is not uniform after buckling.
        *   Design codes (e.g., AISI Specification) provide formulas to calculate the effective width ($b_e$), which is typically less than the full width ($b$).
        *   The effective width is a function of the element's width-to-thickness ratio, the applied stress, and the yield strength of the material.
    *   **Calculation of Effective Width ($b_e$):**
        *   For a stiffened element under uniform compression, the effective width is calculated as:
            $$b_e = b \left[ 1 - \frac{f_{cr}}{f} \left( 1 - \frac{f_{cr}}{f_y} \right) \right]$$
            This formula is simplified in design codes. A common simplified approach for $b_e$ for a uniformly compressed stiffened element is:
            $$b_e = b \left[ \left( \frac{f_{cr}}{f} \right)^{1/n} \right]$$
            where $f_{cr}$ is the critical buckling stress of the element, $f$ is the applied stress, and $n$ is a factor (often 1 or 2).
        *   **More common approach:** The AISI specification provides formulas based on the slenderness parameter $\lambda = \frac{b}{t}\sqrt{\frac{F_y}{E}}$ and the ratio of critical buckling stress to yield stress.
            For a uniformly compressed stiffened element:
            If $\frac{b}{t} \le 4.07 \sqrt{\frac{E}{F_y}}$, the element is Class 1 (no reduction).
            If $4.07 \sqrt{\frac{E}{F_y}} < \frac{b}{t} \le 5.67 \sqrt{\frac{E}{F_y}}$, the element is Class 2 (local yielding).
            If $5.67 \sqrt{\frac{E}{F_y}} < \frac{b}{t} \le 7.33 \sqrt{\frac{E}{F_y}}$, the element is Class 3 (local buckling occurs before yielding).
            If $\frac{b}{t} > 7.33 \sqrt{\frac{E}{F_y}}$, the element is Class 4 (buckling before yielding, effective width calculation required).
        *   The effective width ($b_e$) is then used to determine the section's capacity. The effective area ($A_e$) is the sum of the effective widths of all elements multiplied by the thickness. The design strength is then $P_n = A_e F_y$.

*   **Behavior of Multiple Stiffened Elements:**
    *   These elements have even higher buckling resistance.
    *   Design codes typically treat them as a series of unstiffened elements or use more sophisticated effective width calculations depending on the stiffening provided.
    *   For a web with multiple stiffeners, the portion of the web between two consecutive stiffeners, or between a stiffener and the flange, is analyzed.

*   **Design Approach (General):**
    1.  Determine the width-to-thickness ratios ($b/t$) for all flat elements.
    2.  Classify each element (unstiffened, stiffened, multiple stiffened) and its slenderness.
    3.  Calculate the effective width ($b_e$) for elements that are susceptible to local buckling (Class 3 and 4).
    4.  Calculate the effective area ($A_e$) of the cross-section by summing the effective widths multiplied by the thickness.
    5.  Determine the design strength based on the effective area and material properties, considering any global buckling modes.

---

### 5. Tension Members

Light gauge steel sections can also be used as tension members.

*   **Types of Light Gauge Tension Members:**
    *   Single C-sections
    *   Z-sections
    *   Built-up sections (e.g., two C-sections back-to-back)
    *   Angles and channels
*   **Design Considerations:**
    *   **Yielding of Gross Section:** The nominal tensile strength based on yielding of the gross cross-section is $P_n = F_y A_g$, where $A_g$ is the gross cross-sectional area.
    *   **Fracture at Net Section:** The nominal tensile strength based on fracture at the net section (typically at bolt holes) is $P_n = F_u A_{net}$, where $A_{net}$ is the net cross-sectional area.
    *   **Block Shear Failure:** For members connected by bolts, the possibility of block shear failure (simultaneous shear failure of the web and tensile failure of the flange) needs to be checked.
    *   **Slenderness:** While less critical than in compression, excessive slenderness can still lead to vibration issues.
    *   **Effective Net Area ($A_{net,eff}$):** For members with thin elements and open cross-sections, the effective net area may be reduced due to shear lag. Shear lag is the phenomenon where stress distribution is not uniform across the width of the section due to the connection details, causing the connected portions to lag behind in picking up stress.
        $$A_{net,eff} = U A_{net}$$
        where $U$ is a shear lag factor, typically less than 1.0, depending on the cross-section shape and connection type. For simple connections to C-sections, $U$ can be estimated based on the ratio of the connection length to the width of the member.
*   **Design Strength:** The design tensile strength is generally taken as the lower of the strengths calculated for yielding, fracture, block shear, and considering shear lag. The design strength is $\phi P_n$, where $\phi$ is a resistance factor.

---

### 6. Beams and Deflection of Beams

Light gauge steel sections are commonly used as beams in floors, roofs, and walls.

*   **Types of Light Gauge Beams:**
    *   C-sections (joists, rafters)
    *   I-sections (main beams)
    *   Z-sections (purlins, girts)
    *   Box sections
*   **Design Considerations:**
    *   **Flexural Strength:**
        *   **Yielding:** The moment capacity based on yielding of the gross section is $M_n = F_y S_x$, where $S_x$ is the elastic section modulus about the axis of bending.
        *   **Local Buckling of Compression Flange:** If the compression flange is susceptible to local buckling (e.g., a wide, thin flange in a C-section), its effective width must be considered, reducing the moment capacity. The AISI specification provides methods to calculate the section's capacity considering local buckling.
        *   **Lateral-Torsional Buckling (LTB):** For members with open cross-sections (like C and Z sections), the compression flange can buckle laterally and twist out of plane. This is a global buckling mode that significantly reduces the moment capacity.
            *   **Unbraced Length ($L_b$):** The distance between points of lateral support to the compression flange is critical.
            *   **Cb (Moment Gradient Factor):** Accounts for the variation of bending moment along the unbraced length.
            *   **Nominal Moment Strength ($M_n$):** Calculation involves determining the elastic critical moment ($M_{cr}$) or the yield moment ($M_y$), depending on the unbraced length and section properties.
            *   For light gauge sections, LTB is a crucial consideration, especially for longer spans without adequate bracing.
    *   **Shear Strength:** The shear capacity of the web needs to be checked. The web can buckle in shear, especially if it's relatively thin and deep.
    *   **Web Crippling:** Failure of the web due to concentrated loads or reactions at supports, where the web buckles under compression.
    *   **Web Yielding:** Failure of the web due to shear stress.

*   **Deflection of Beams:**
    *   **Importance:** Light gauge members, due to their thinness, can be more susceptible to excessive deflections than heavier sections. Deflection limits are crucial for serviceability.
    *   **Calculation:** Deflection is calculated using standard beam deflection formulas based on the applied loads, beam span, material properties ($E$), and moment of inertia ($I$) of the effective cross-section.
    *   **Effective Moment of Inertia ($I_{eff}$):** For members with stiffened elements and potential local buckling effects, an effective moment of inertia might be used in deflection calculations to account for the reduced stiffness.
    *   **Serviceability Limits:** Design codes specify maximum allowable deflections for different applications (e.g., roof beams, floor joists) to ensure occupant comfort and prevent damage to finishes.

---

### 7. Combined Stresses and Connections

Light gauge steel members often experience combined stresses and require specific connection details.

*   **Combined Stresses:**
    *   **Axial Force and Bending:** Many members, like columns subjected to eccentric loads or beams with axial forces, experience both axial and bending stresses. The interaction of these stresses must be checked using interaction equations, such as:
        $$\frac{P_u}{\phi P_n} + \frac{M_u}{\phi M_n} \le 1.0$$
        (This is a simplified form; specific codes provide detailed interaction formulas).
    *   **Shear and Bending:** Beams primarily experience shear and bending stresses.
    *   **Torsion:** Open sections like C and Z sections are susceptible to torsion, especially when loads are applied eccentrically to the shear center.

*   **Connections:**
    *   **Types of Connections:**
        *   **Self-Drilling Screws:** Most common for light gauge steel, allowing for rapid assembly.
        *   **Welding:** Less common for thin gauge material due to risk of distortion and burn-through.
        *   **Bolting:** Used for thicker gauge sections or for connecting to other structural elements.
    *   **Design Considerations for Connections:**
        *   **Pull-over Strength:** The strength of a screw where the head pulls through the steel sheet.
        *   **Shear Strength of Screws:** The ability of the screw shank to resist shear forces.
        *   **Bearing Strength:** The strength of the steel sheet where it bears against the screw shank.
        *   **Tearing of Connected Material:** The thin steel sheet can tear around the fastener hole.
        *   **Edge Distance and Spacing:** Critical for preventing premature failure of the connected material.
        *   **Punching Shear:** For connections with specific punching requirements.
    *   **Connection Detailing:** Proper detailing is crucial for the performance of light gauge steel structures. This includes:
        *   Ensuring adequate bearing area.
        *   Providing sufficient edge distances and spacing for fasteners.
        *   Using appropriate fastener types and sizes.
        *   Considering the behavior of open sections in connections (e.g., shear lag).

---

### Learning Outcomes Checklist & Key Points to Remember

**Learning Outcomes:**

*   **Understand the basic principles of light gauge steel construction:** [Covered in Introduction]
*   **Identify and differentiate various types of light gauge steel cross-sections:** [Covered in Types of Cross Sections]
*   **Recognize the materials commonly used in light gauge steel structures:** [Covered in Materials]
*   **Analyze the behavior of stiffened and multiple stiffened compression elements under load, including local buckling phenomena:** [Covered in Stiffened and Multiple Stiffened Compression Elements]
*   **Design light gauge steel members as tension members, considering yielding, fracture, and shear lag:** [Covered in Tension Members]
*   **Design light gauge steel beams, addressing flexural strength, shear strength, and lateral-torsional buckling:** [Covered in Beams and Deflection of Beams]
*   **Calculate and control deflection of light gauge steel beams to meet serviceability requirements:** [Covered in Beams and Deflection of Beams]
*   **Analyze members subjected to combined stresses and design appropriate connections:** [Covered in Combined Stresses and Connections]

**Key Points to Remember:**

*   **Thinness of Elements:** This is the defining characteristic of light gauge steel, leading to susceptibility to local buckling.
*   **Effective Width:** A fundamental concept for analyzing the strength of stiffened elements prone to local buckling.
*   **Lateral-Torsional Buckling (LTB):** A critical failure mode for open sections (C, Z) in bending that requires consideration of unbraced length.
*   **Deflection Control:** Often governs the design of light gauge steel members due to their flexibility.
*   **Connections:** The performance of the entire structure is highly dependent on the proper design and execution of connections, especially those using screws.
*   **Design Codes:** Always refer to the relevant design codes (e.g., AISI Specification in the US, or Eurocode 3 Part 1-3) for detailed design procedures, formulas, and resistance factors.
*   **Effective Area ($A_e$) vs. Gross Area ($A_g$):** For compression members and bending members susceptible to local buckling, the design is based on the effective area.
*   **Shear Lag:** An important consideration for tension members with open sections or connections that are not fully effective.

---

### Practice Questions and Answers

**Question 1:**
What is the primary difference in buckling behavior between an unstiffened compression element and a stiffened compression element?

**Answer 1:**
An unstiffened compression element buckles at a much lower stress due to its unsupported edge. A stiffened compression element has its edge supported by a web or flange (or a bead/lip), which significantly increases its resistance to local buckling. This increased resistance is often accounted for in design by using the concept of effective width.

**Question 2:**
For a light gauge steel Z-section purlin supporting a roof, which buckling phenomenon is most likely to govern the design of the purlin in bending, assuming it has a significant unbraced length along its compression flange?
a) Local buckling of the web
b) Shear yielding of the web
c) Lateral-torsional buckling of the compression flange
d) Crippling of the web at supports

**Answer 2:**
c) Lateral-torsional buckling of the compression flange. Z-sections, being open sections, are susceptible to LTB of the compression flange when it is not adequately braced.

**Question 3:**
What is "shear lag" and in which type of member is it most critical?

**Answer 3:**
Shear lag is the phenomenon where stress distribution is not uniform across the width of a member connected at its ends, causing the connected portions to lag behind in picking up stress. It occurs because the shear forces are transferred through the web, and the stress gradually builds up across the flanges. It is most critical in tension members with open cross-sections (like C or Z sections) or members connected eccentrically, as it reduces the effective net area available for resisting tensile loads.

**Question 4:**
A light gauge steel C-section is used as a floor joist. If the span is long and the joists are only braced at mid-span, what is the primary serviceability concern?

**Answer 4:**
Excessive deflection. Light gauge steel members, due to their thin sections, are often more flexible than traditional hot-rolled members, making deflection control a critical serviceability requirement.

**Question 5:**
Calculate the effective width ($b_e$) for a uniformly compressed stiffened element with the following properties:
*   Full width ($b$) = 100 mm
*   Thickness ($t$) = 1.0 mm
*   Yield Strength ($F_y$) = 250 MPa
*   Modulus of Elasticity ($E$) = 200,000 MPa

Assume the critical buckling stress ($f_{cr}$) is 150 MPa and the applied stress ($f$) is 200 MPa. Use the formula: $b_e = b \left[ 1 - \frac{f_{cr}}{f} \left( 1 - \frac{f_{cr}}{F_y} \right) \right]$

**Answer 5:**
Given:
$b = 100 \, \text{mm}$
$t = 1.0 \, \text{mm}$
$F_y = 250 \, \text{MPa}$
$E = 200,000 \, \text{MPa}$
$f_{cr} = 150 \, \text{MPa}$
$f = 200 \, \text{MPa}$

Using the formula:
$b_e = 100 \, \text{mm} \left[ 1 - \frac{150 \, \text{MPa}}{200 \, \text{MPa}} \left( 1 - \frac{150 \, \text{MPa}}{250 \, \text{MPa}} \right) \right]$
$b_e = 100 \, \text{mm} \left[ 1 - 0.75 \left( 1 - 0.6 \right) \right]$
$b_e = 100 \, \text{mm} \left[ 1 - 0.75 \left( 0.4 \right) \right]$
$b_e = 100 \, \text{mm} \left[ 1 - 0.3 \right]$
$b_e = 100 \, \text{mm} \times 0.7$
$b_e = 70 \, \text{mm}$

The effective width of the stiffened element is 70 mm.

---
