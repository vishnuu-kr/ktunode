---
title: "Types of compression members and sections–Behaviour and types of failures-Effective Length-Slenderness ratio–Column formula and column curves- Design of solid and built-up columns - Design of Built up laced and battened type"
subject: "DESIGN OF STEEL STRUCTURES"
module: "Module 3: Types of compression members and sections–Behaviour and types of failures"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110b8"
status: "completed"
scrapedAt: "2026-05-20T18:52:46.495Z"
---
# Module 3: Types of Compression Members and Sections – Behaviour and Types of Failures

## 1. Introduction to Compression Members

Compression members are structural elements subjected primarily to axial compressive forces. They are critical in steel structures and their failure can be catastrophic.

**Key Concepts:**

*   **Axial Compression:** Force acting along the longitudinal axis of the member.
*   **Buckling:** A sudden lateral deformation of a compression member under an increasing compressive load, even if the stress is below the yield strength of the material. This is the primary failure mode for slender compression members.
*   **Squashing (Yielding):** Failure due to the material exceeding its yield strength. This typically occurs in short, stocky compression members.

**Learning Outcome Addressed:** Understanding the fundamental behavior of compression members.

---

## 2. Types of Compression Members and Sections

Compression members in steel structures can be classified based on their cross-sectional shape and how they are formed.

### 2.1. Solid Columns

These are members with a solid cross-section, meaning they are not hollow.

**Common Solid Sections:**

*   **Rolled I-beams (Universal Columns - UC):** Widely used due to their efficiency in resisting bending and axial loads. The flanges provide stiffness against buckling.
*   **Rolled Channels (C-sections):** Often used in pairs or as single elements in lighter structures.
*   **Rolled Angles (L-sections):** Used in trusses and lighter framing.
*   **Rolled Tubes (Circular and Square/Rectangular Hollow Sections - RHS/CHS):** Offer excellent torsional rigidity and uniform stress distribution. They are also efficient in resisting buckling due to their compact shape.

**Advantages:**

*   Simplicity of manufacturing and connection.
*   Good structural performance.

**Disadvantages:**

*   Can be susceptible to local buckling of flanges or webs if the section proportions are unfavorable.

### 2.2. Built-up Columns

These are formed by combining two or more individual steel sections (usually plates or rolled sections) to create a larger and more complex cross-section. They are used when a single rolled section cannot provide the required strength or stiffness, or to achieve specific geometric properties.

**Types of Built-up Columns:**

*   **Columns formed by plates:** Riveted or welded plates can form a box section or H-section.
*   **Columns formed by rolled sections:**
    *   **Pairs of channels or angles:** Two channels placed back-to-back or angles placed back-to-back.
    *   **Four angles:** Arranged around a central void.
    *   **Universal columns with additional plates:** To increase the cross-sectional area.

**Connections between elements of built-up columns are critical:**

*   **Lacing:** Diagonal or inclined members connecting the individual components of a built-up column.
*   **Battening:** Flat plates connecting the individual components of a built-up column.

**Learning Outcomes Addressed:** Identifying different types of compression members and sections.

---

## 3. Behaviour and Types of Failures

The behavior of a compression member is governed by its slenderness and the type of stress it experiences.

### 3.1. Modes of Failure

1.  **Yielding (Squashing):**
    *   **Description:** Occurs when the axial compressive stress in the member exceeds the yield strength of the steel ($f_y$). This happens in short, stocky columns where buckling is not the primary concern.
    *   **Failure Condition:** Compressive Stress $\geq f_y$.
    *   **Diagram:** A short, thick column deforming axially.

2.  **Flexural Buckling (Euler Buckling):**
    *   **Description:** The most common failure mode for slender compression members. The member undergoes a lateral deflection, causing it to buckle. This is an instability phenomenon.
    *   **Governing Factor:** Slenderness ratio.
    *   **Failure Condition:** Critical buckling load is reached.
    *   **Diagram:** A slender column bowing outwards.

3.  **Torsional Buckling:**
    *   **Description:** Occurs in sections that are weak in torsional rigidity, such as thin-walled open sections (e.g., angles, channels, I-beams) with relatively equal slenderness in both axes. The member twists about its longitudinal axis before or simultaneously with lateral bending.
    *   **Governing Factor:** Torsional stiffness and warping stiffness.
    *   **Failure Condition:** Critical torsional buckling load is reached.
    *   **Diagram:** A column twisting and potentially bending.

4.  **Flexural-Torsional Buckling:**
    *   **Description:** A combination of flexural and torsional buckling. Occurs in sections that lack symmetry about at least one axis and have a low torsional rigidity. The buckling is a coupled movement involving both bending and twisting.
    *   **Governing Factor:** Combined effect of bending and torsional stiffness.
    *   **Failure Condition:** Critical flexural-torsional buckling load is reached.
    *   **Diagram:** A column twisting and bending simultaneously.

5.  **Local Buckling:**
    *   **Description:** Buckling of individual plate elements of a cross-section (e.g., the web or flange of an I-beam, or the legs of an angle). This occurs when the width-to-thickness ratio of these elements is too high.
    *   **Governing Factor:** Width-to-thickness ratio of the plate elements.
    *   **Failure Condition:** Plate element buckles under compressive stress.
    *   **Diagram:** A flange or web of an I-beam buckling inwards.

**Important Point to Remember:** The type of failure depends on the slenderness of the member and the geometry of its cross-section.

**Learning Outcomes Addressed:** Describing the behaviour and types of failures in compression members.

---

## 4. Effective Length

The effective length ($L_e$) of a compression member is the length of an equivalent simply supported column that would buckle under the same load as the actual member. It accounts for the end support conditions, which influence the buckling behavior.

### 4.1. End Restraint Conditions and Effective Length Factors ($k$)

The effective length is calculated as $L_e = k L$, where $L$ is the actual length of the member, and $k$ is the effective length factor. The value of $k$ depends on the rotational and translational restraints at the ends of the column.

| End Condition (Actual Column)                  | Diagram of Buckled Shape | Effective Length ($L_e$) | Effective Length Factor ($k$) |
| :--------------------------------------------- | :----------------------- | :----------------------- | :---------------------------- |
| Pinned at both ends (Simply Supported)         | ![Pinned-Pinned](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pinned-pinned.svg/120px-Pinned-pinned.svg.png) | $L$                      | 1.0                           |
| Fixed at both ends (Clamped)                   | ![Fixed-Fixed](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Fixed-fixed.svg/120px-Fixed-fixed.svg.png) | $0.5 L$                  | 0.5 (approx.)                 |
| Fixed at one end, Pinned at the other          | ![Fixed-Pinned](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Fixed-pinned.svg/120px-Fixed-pinned.svg.png) | $0.7 L$                  | 0.7 (approx.)                 |
| Fixed at one end, Free at the other (Cantilever) | ![Fixed-Free](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Fixed-free.svg/120px-Fixed-free.svg.png) | $2.0 L$                  | 2.0                           |
| Pinned at one end, Guided against translation at the other | ![Pinned-Guided](https://i.imgur.com/1i2zL3Y.png) | $1.0 L$                  | 1.0                           |
| Fixed at one end, Guided against translation at the other | ![Fixed-Guided](https://i.imgur.com/1i2zL3Y.png) | $0.8 L$                  | 0.8                           |

**Note:** The values for fixed ends are theoretical and depend on the rigidity of the fixity. In practice, values closer to 0.7 for fixed-pinned and 0.5 for fixed-fixed are often used. For practical design, codes provide specific guidance or simplified methods.

**Important Considerations for Effective Length:**

*   **Real-world conditions are often complex:** Members may not have perfect end fixity or pinning.
*   **Inelastic buckling:** For shorter columns that yield before buckling, the effective length concept becomes less straightforward.
*   **Compression members in frames:** The effective length of a column in a frame depends on the stiffness of the members connected to its ends. Codes provide methods to calculate effective length factors for framed columns.

**Learning Outcome Addressed:** Explaining the concept of effective length and its dependence on end conditions.

---

## 5. Slenderness Ratio

The slenderness ratio is a dimensionless parameter that quantifies the susceptibility of a compression member to buckling. It is defined as the ratio of the effective length to the radius of gyration of the cross-section.

### 5.1. Definition

**Slenderness Ratio ($\lambda$) = $\frac{L_e}{r}$**

Where:
*   $L_e$ = Effective length of the compression member.
*   $r$ = Radius of gyration of the cross-section.

### 5.2. Radius of Gyration ($r$)

The radius of gyration is a property of a cross-section that represents how the area is distributed around the centroidal axis. It is calculated as:

$r = \sqrt{\frac{I}{A}}$

Where:
*   $I$ = Moment of inertia of the cross-section about the axis of buckling.
*   $A$ = Area of the cross-section.

For a given cross-section, there are usually two principal radii of gyration ($r_x$ and $r_y$ if the principal axes are x and y). Buckling will occur about the axis with the smaller radius of gyration (i.e., the weaker axis). Therefore, the **critical slenderness ratio is determined using the minimum radius of gyration ($r_{min}$)**.

**Example:**

For a rectangular section of width 'b' and depth 'd':
*   $I_x = \frac{bd^3}{12}$, $A = bd \implies r_x = \sqrt{\frac{bd^3/12}{bd}} = \frac{d}{\sqrt{12}}$
*   $I_y = \frac{db^3}{12}$, $A = bd \implies r_y = \sqrt{\frac{db^3/12}{bd}} = \frac{b}{\sqrt{12}}$
The minimum radius of gyration will be $r_{min} = \frac{min(b, d)}{\sqrt{12}}$.

For a rolled I-beam, the radius of gyration about the y-axis (weak axis) is usually smaller than that about the x-axis (strong axis).

**Important Point to Remember:** A higher slenderness ratio indicates a greater susceptibility to buckling.

**Classification of Compression Members based on Slenderness Ratio (General Guidance):**

*   **Short Columns:** $\lambda < \lambda_{critical}$ (buckling does not occur before yielding). Failure is by yielding.
*   **Intermediate Columns:** $\lambda_{critical} < \lambda < \lambda_{transition}$. A combination of yielding and buckling.
*   **Slender Columns:** $\lambda > \lambda_{transition}$ (buckling occurs before yielding). Failure is primarily by buckling.

**Learning Outcome Addressed:** Defining and calculating the slenderness ratio.

---

## 6. Column Formula and Column Curves

Column formulas are empirical or semi-empirical equations used to predict the buckling strength of compression members. They bridge the gap between purely elastic (Euler) buckling and inelastic buckling. Column curves graphically represent these formulas.

### 6.1. Euler's Column Formula (Elastic Buckling)

For long, slender columns where buckling is purely elastic, the critical buckling load ($P_{cr}$) is given by:

$P_{cr} = \frac{\pi^2 E I}{L_e^2}$

The corresponding critical stress ($\sigma_{cr}$) is:

$\sigma_{cr} = \frac{P_{cr}}{A} = \frac{\pi^2 E I}{A L_e^2} = \frac{\pi^2 E}{(L_e/r)^2} = \frac{\pi^2 E}{\lambda^2}$

Where:
*   $E$ = Modulus of elasticity of steel.
*   $I$ = Minimum moment of inertia.
*   $A$ = Cross-sectional area.
*   $L_e$ = Effective length.
*   $\lambda$ = Slenderness ratio.

**Limitations of Euler's Formula:**

*   Assumes perfectly straight columns.
*   Assumes concentric loading.
*   Assumes perfectly elastic material.
*   Only applicable to long, slender columns where buckling occurs at stresses below the yield strength.

### 6.2. Inelastic Buckling and Column Formulas

For shorter and intermediate columns, buckling occurs at stresses that are within the inelastic range of the steel's stress-strain behavior. Several empirical and semi-empirical formulas have been developed to account for this.

**Common Column Formulas (Examples):**

1.  **J.B. Johnson's Parabolic Formula:**
    $\sigma_{cr} = f_y - \frac{f_y^2}{\pi^2 E} (\frac{L_e}{r})^2$
    This formula provides a parabolic transition from yielding to Euler buckling.

2.  **Engesser's Tangent Modulus Formula:**
    $\sigma_{cr} = \frac{\pi^2 E_t}{\lambda^2}$
    Where $E_t$ is the tangent modulus at the stress level of buckling. This is more theoretically sound but difficult to apply directly.

3.  **Eurocode 3 (EN 1993) Column Curves:**
    Eurocode 3 uses a simplified approach based on normalized slenderness and specific formulas for different column curves (a, b, c, d). These curves are derived from extensive testing and analytical studies.

    *   **Normalized Slenderness ($\bar{\lambda}$):**
        $\bar{\lambda} = \frac{\lambda}{\pi} \sqrt{\frac{f_y}{E}}$

    *   **Design Buckling Resistance Stress ($\sigma_{cc}$):**
        The design buckling resistance stress depends on $\bar{\lambda}$ and is obtained from curves. The general form of the design buckling resistance curve is:
        $\sigma_{cc} = \chi f_y$
        Where $\chi$ is the reduction factor, which depends on $\bar{\lambda}$ and the imperfection factor ($\alpha$) associated with the buckling curve.

        *   **Buckling Curve a:** For I-sections, H-sections (buckling about y-y axis), RHS. ($\alpha = 0.21$)
        *   **Buckling Curve b:** For I-sections, H-sections (buckling about x-x axis). ($\alpha = 0.34$)
        *   **Buckling Curve c:** For channels, angles, hollow sections. ($\alpha = 0.49$)
        *   **Buckling Curve d:** For built-up sections like lipped channels, square hollow sections. ($\alpha = 0.76$)

    The reduction factor $\chi$ is calculated using formulas like:
    $\chi = \frac{1}{\phi + \sqrt{\phi^2 - \bar{\lambda}^2}}$
    where $\phi = 0.5 (1 + \alpha (\bar{\lambda} - 0.2) + \bar{\lambda}^2)$

**Column Curves:**

Column curves are plots of critical stress ($\sigma_{cr}$) versus slenderness ratio ($\lambda$).

*   **Euler Curve:** A hyperbolic curve showing elastic buckling stress decreasing with increasing slenderness.
*   **Yield Strength Line:** A horizontal line representing the yield strength ($f_y$) for very stocky columns.
*   **Column Curves (Parabolic, etc.):** Intermediate curves that connect the yield strength line to the Euler curve, representing inelastic buckling.

**Important Point to Remember:** The choice of column formula or curve depends on the material properties, cross-sectional shape, and the slenderness ratio. Modern design codes (like Eurocode, AISC) provide specific column curves and design procedures.

**Learning Outcome Addressed:** Understanding column formulas and column curves.

---

## 7. Design of Solid and Built-up Columns

The design of a compression member involves ensuring that its factored axial resistance is greater than or equal to the factored axial load.

### 7.1. Design of Solid Columns

**Steps:**

1.  **Determine the factored axial load ($N_{Ed}$) acting on the column.**
2.  **Select a suitable steel section** from available rolled sections (e.g., UC, RHS, CHS).
3.  **Determine the effective length ($L_e$)** based on the actual length ($L$) and end restraint conditions. For members in frames, effective length factors may need to be calculated considering the stiffness of connected members.
4.  **Calculate the radius of gyration ($r_{min}$) for the selected section** about the weaker axis.
5.  **Calculate the slenderness ratio ($\lambda = L_e / r_{min}$).**
6.  **Determine the appropriate column curve** based on the section shape and buckling mode.
7.  **Calculate the normalized slenderness ($\bar{\lambda}$).**
8.  **Determine the reduction factor ($\chi$)** from the chosen column curve and $\bar{\lambda}$.
9.  **Calculate the design buckling resistance stress ($\sigma_{cc} = \chi f_y$).**
10. **Calculate the design buckling resistance axial force ($N_{b,Rd} = \sigma_{cc} A_{net}$),** where $A_{net}$ is the net area (consider holes for bolts if applicable, though often the gross area is used for columns unless specified).
11. **Check the condition:** $N_{Ed} \leq N_{b,Rd}$. If the condition is not met, select a larger or more efficient section and repeat the process.
12. **Check for local buckling:** Ensure the section is not susceptible to local buckling by checking the width-to-thickness ratios of its plate elements against code limits (e.g., classifying the section as Class 1, 2, 3, or 4). Class 4 sections require special treatment.

**Example (Conceptual):**

Design a column to carry an axial load of 1000 kN. Assume simply supported ends and a length of 4 meters.

1.  $N_{Ed} = 1000 \text{ kN}$.
2.  Assume a UC 152x152x23 section.
3.  $L = 4 \text{ m}$. For pinned-pinned, $L_e = L = 4 \text{ m}$.
4.  From steel tables for UC 152x152x23: Area $A = 29.3 \text{ cm}^2$, $r_y = 3.86 \text{ cm}$.
5.  $\lambda = L_e / r_y = (4000 \text{ mm}) / (38.6 \text{ mm}) \approx 103.6$.
6.  For UC section, buckling is typically about y-y axis (curve a or b depending on code interpretation for buckling mode). Let's assume curve a.
7.  $f_y = 275 \text{ N/mm}^2$, $E = 200,000 \text{ N/mm}^2$.
    $\bar{\lambda} = \frac{103.6}{\pi} \sqrt{\frac{275}{200000}} \approx \frac{103.6}{3.14159} \sqrt{0.001375} \approx 32.98 \times 0.037 \approx 1.22$.
8.  Using Eurocode 3 formulas for $\bar{\lambda} = 1.22$ and curve a, calculate $\chi$. (Let's assume $\chi \approx 0.55$ for illustration).
9.  $\sigma_{cc} = 0.55 \times 275 \text{ N/mm}^2 = 151.25 \text{ N/mm}^2$.
10. $N_{b,Rd} = \sigma_{cc} \times A = 151.25 \text{ N/mm}^2 \times 2930 \text{ mm}^2 \approx 443187.5 \text{ N} \approx 443 \text{ kN}$.
11. Check: $1000 \text{ kN} \leq 443 \text{ kN}$ is FALSE. The section is inadequate. A larger section is needed.

**Learning Outcome Addressed:** Designing solid compression members.

### 7.2. Design of Built-up Columns (Laced and Battened)

Built-up columns are designed to achieve a higher load-carrying capacity and stiffness than single rolled sections. The design involves ensuring the capacity of the individual elements, the connections between them, and the stability of the composite section.

**Key Considerations for Built-up Columns:**

*   **Main Compression Elements:** These are the primary load-carrying components (e.g., four angles, two channels). Their individual capacity is checked against buckling using their effective lengths between the lacing or battens.
*   **Lacing/Battening System:** This system serves two main purposes:
    *   **Prevent local buckling of the main elements:** By providing intermediate support, it reduces the effective slenderness of the main components.
    *   **Transfer shear forces:** Lacing and battens must be designed to resist the shear forces that arise from eccentric loading or the tendency of the built-up column to buckle in a flexural-torsional mode.

#### 7.2.1. Laced Columns

**Description:** Laced columns consist of two or more main compression members connected by diagonal or inclined members (lacing bars) at intervals.

**Design Principles:**

1.  **Main Compression Elements:** Design of the main elements (e.g., pairs of channels or angles) as columns. The effective length of these elements is taken between the centers of the lacing connections.
2.  **Lacing Bars:**
    *   **Material:** Usually flat bars.
    *   **Arrangement:** Single lacing (single inclined bar) or double lacing (two inclined bars forming a 'V' or 'N').
    *   **Inclination:** Typically between 30° and 60° to the longitudinal axis.
    *   **Strength of Lacing Bars:**
        *   **Axial Load:** Lacing bars primarily resist tensile and compressive forces induced by shear. They are designed to carry a portion of the transverse shear force equal to at least 2.5% of the axial load in the column.
        *   **Buckling:** Lacing bars, especially if slender, must also be checked for buckling as compression members. Their effective length is considered to be the distance between their end connections.
    *   **Connection of Lacing Bars:** The connection of lacing bars to the main members (usually by welding or bolting) must be strong enough to transfer the forces.
3.  **Spacing of Lacing:** The spacing of lacing is determined to limit the slenderness ratio of the main compression elements between the lacing points. The distance between lacing points should not exceed the distance between the centers of gravity of the main members multiplied by a factor (e.g., 0.7 times the distance between centers of gravity for single lacing, or 0.4 times for double lacing).

**Shear Force in Lacing:**

For a column subjected to an axial load $N$ and a moment $M$, it can be idealized as two channels separated by a distance $d$. The shear force in the lacing system is approximately $V = M/d$. This shear force is distributed among the lacing bars.

**Example of Lacing Forces:**

Consider a column made of two channels back-to-back, with a shear force $V$ to be resisted by the lacing.

*   **Single Lacing (inclination $\theta$):** Each lacing bar resists a force $F_{bar} = \frac{V}{2 \sin \theta}$. This force is either tensile or compressive.
*   **Double Lacing (inclination $\theta$):** Each pair of bars resists $F_{bar} = \frac{V}{4 \sin \theta}$.

**Important Point to Remember:** Lacing provides stiffness and stability to built-up columns, but it adds complexity and can be inefficient in transferring shear compared to battens.

#### 7.2.2. Battened Columns

**Description:** Battened columns consist of two or more main compression members connected by flat plates (battens) at intervals along their length.

**Design Principles:**

1.  **Main Compression Elements:** Design of the main elements as columns, with their effective length taken between the centers of the battens.
2.  **Battens:**
    *   **Material:** Usually flat plates or angles.
    *   **Purpose:** Battens primarily provide restraint against lateral movement of the main members, thus reducing their effective slenderness. They also help in distributing the load.
    *   **Strength of Battens:**
        *   **Moment Resistance:** Battens must be designed to resist the bending moment induced by the eccentric forces or the tendency to buckle. They act as beams spanning between the main members.
        *   **Shear Resistance:** Battens must also resist the transverse shear force. In battens, the shear is resisted by the section modulus of the batten plates.
    *   **Arrangement:** Battens can be placed on opposite sides of the main members or on the same side.
    *   **Spacing of Battens:** The spacing is chosen to limit the effective slenderness of the main members. Typically, the distance between battens should not exceed the distance between the centers of gravity of the main members multiplied by a factor (e.g., 0.7 times the distance between centers of gravity).
3.  **End Battens:** These are often wider and stiffer to provide better restraint at the column ends.

**Shear Force and Moment in Battens:**

*   **Shear Force:** The transverse shear force resisted by battens is typically taken as 2.5% of the axial load on the column, distributed across the battens.
*   **Bending Moment:** The moment on a batten is calculated based on the shear force and the distance between the main members. For a batten connecting two elements at a distance $d$, and a shear force $V$, the moment on the batten is approximately $M_{batten} = V \times (d/2)$. This is then used to check the bending stress in the batten material.

**Important Point to Remember:** Battens are generally more efficient in resisting shear forces compared to lacing. The design of battens requires careful consideration of both shear and bending.

**Combined Design of Built-up Columns:**

The overall design process for built-up columns involves:

*   **Designing the main elements:** As if they were individual columns with an appropriate effective length.
*   **Designing the lacing/batten system:** To provide the required spacing for the main elements and to resist the induced shear and bending forces.
*   **Checking the connections:** Ensuring the connections between the main elements and the lacing/battens are adequate.
*   **Checking the overall column stability:** Considering the buckling of the built-up section as a whole, especially for flexural-torsional buckling if the built-up section is not symmetric.

**Learning Outcomes Addressed:** Designing built-up columns (laced and battened types).

---

## 8. Practice Questions and Answers

**Question 1:**
A column of length 5m is pinned at both ends. Its cross-section is a solid square of side 100 mm. The steel has a yield strength ($f_y$) of 300 N/mm² and modulus of elasticity ($E$) of 200,000 N/mm². Calculate the slenderness ratio.

**Answer 1:**
*   Actual length $L = 5 \text{ m} = 5000 \text{ mm}$.
*   End condition: Pinned at both ends, so $k = 1.0$.
*   Effective length $L_e = kL = 1.0 \times 5000 \text{ mm} = 5000 \text{ mm}$.
*   Cross-section: Square of side $100 \text{ mm}$.
*   Area $A = 100 \times 100 = 10000 \text{ mm}^2$.
*   Moment of inertia about centroidal axis $I = \frac{b d^3}{12} = \frac{100 \times 100^3}{12} = 8.333 \times 10^6 \text{ mm}^4$.
*   Radius of gyration $r = \sqrt{\frac{I}{A}} = \sqrt{\frac{8.333 \times 10^6 \text{ mm}^4}{10000 \text{ mm}^2}} = \sqrt{833.3} \approx 28.87 \text{ mm}$.
*   Slenderness ratio $\lambda = \frac{L_e}{r} = \frac{5000 \text{ mm}}{28.87 \text{ mm}} \approx 173.2$.

**Question 2:**
A built-up column consists of two channels placed back-to-back, connected by lacing. If the column is subjected to an axial load of 1500 kN and a moment of 50 kNm at the top, and the distance between the centroids of the channels is 200 mm, calculate the approximate shear force that the lacing system must resist.

**Answer 2:**
*   Axial load $N = 1500 \text{ kN}$.
*   Moment $M = 50 \text{ kNm} = 50 \times 10^6 \text{ Nmm}$.
*   Distance between centroids of channels $d = 200 \text{ mm}$.
*   The shear force ($V$) resisted by the lacing system is primarily due to the bending moment.
*   $V = \frac{M}{d} = \frac{50 \times 10^6 \text{ Nmm}}{200 \text{ mm}} = 250,000 \text{ N} = 250 \text{ kN}$.
*   However, codes also require lacing to resist an additional shear force of at least 2.5% of the axial load.
*   Additional shear $= 0.025 \times 1500 \text{ kN} = 37.5 \text{ kN}$.
*   Total shear force to be resisted by lacing system = $250 \text{ kN} + 37.5 \text{ kN} = 287.5 \text{ kN}$. (Note: Some codes might use different distributions or interpretations. This is a simplified approach.)

**Question 3:**
Explain the two main functions of lacing or battens in a built-up compression member.

**Answer 3:**
The two main functions of lacing or battens in a built-up compression member are:

1.  **To prevent local buckling of the main compression elements:** By connecting the individual components at intervals, the lacing or battens provide lateral support, effectively reducing the unsupported length of the main elements and thus preventing them from buckling locally.
2.  **To transfer shear forces:** In case of eccentric loading or as a consequence of the column's overall buckling behavior, shear forces develop between the main components. The lacing or battens are designed to resist these shear forces and maintain the integrity of the built-up section.

---

## 9. Important Points to Remember

*   **Buckling is the primary failure mode for slender compression members.**
*   **Slenderness ratio ($\lambda = L_e/r$) is a critical parameter.** A higher slenderness ratio leads to lower buckling strength.
*   **Effective length ($L_e$) depends on end support conditions.**
*   **Built-up columns use lacing or battens to enhance stiffness and strength.**
*   **Lacing resists shear and prevents local buckling.**
*   **Battens resist shear and bending moments induced by lateral movement.**
*   **Design codes (like Eurocode 3, AISC) provide specific column curves and design procedures.**
*   **Local buckling of plate elements must also be checked.**
*   **Connections in built-up members are crucial.**

This comprehensive set of notes should provide a solid foundation for understanding Module 3 of Design of Steel Structures. Remember to refer to your specific design code for detailed requirements and formulas.
