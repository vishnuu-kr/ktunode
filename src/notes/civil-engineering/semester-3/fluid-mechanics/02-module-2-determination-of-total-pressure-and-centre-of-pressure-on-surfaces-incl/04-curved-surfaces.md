---
title: "curved surfaces"
subject: "FLUID MECHANICS"
module: "Module 2: Determination of total pressure and centre of pressure on surfaces (include numerical problems) : Vertical plane surface"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106eb"
status: "completed"
scrapedAt: "2026-05-20T18:40:27.106Z"
---
# Fluid Mechanics: Module 2 - Determination of Total Pressure and Centre of Pressure on Surfaces

## Topic: Curved Surfaces

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the concept of hydrostatic force on curved surfaces.
*   Determine the resultant hydrostatic force on a curved surface.
*   Determine the point of application (centre of pressure) of the hydrostatic force on a curved surface.
*   Apply these principles to solve practical engineering problems involving curved surfaces submerged in fluids.

---

### 1. Introduction to Hydrostatic Force on Curved Surfaces

Unlike plane surfaces, the hydrostatic force on a curved surface is not straightforward to calculate directly. This is because the direction of the hydrostatic pressure varies along the curved surface.

*   **Hydrostatic Pressure:** The pressure exerted by a fluid at rest due to gravity. It increases with depth, given by $P = \rho g h$, where $\rho$ is the fluid density, $g$ is the acceleration due to gravity, and $h$ is the depth from the free surface.
*   **Force Vector:** Pressure acts perpendicular to the surface. On a curved surface, this means the pressure forces are not parallel, making direct vector summation challenging.

The key to determining the hydrostatic force on a curved surface is to resolve it into horizontal and vertical components.

---

### 2. Determination of Hydrostatic Force on Curved Surfaces

The hydrostatic force on a curved surface submerged in a fluid is resolved into two components:

*   **Horizontal Component ($F_H$):** This component is equal to the hydrostatic force on the **projection** of the curved surface onto a **vertical plane**.
*   **Vertical Component ($F_V$):** This component is equal to the weight of the **imaginary volume of fluid** that would be above the curved surface up to the free surface of the fluid.

**Resultant Hydrostatic Force ($F_R$):**

The resultant hydrostatic force is the vector sum of the horizontal and vertical components:

$F_R = \sqrt{F_H^2 + F_V^2}$

The angle $\theta$ that the resultant force makes with the horizontal is given by:

$\tan \theta = \frac{F_V}{F_H}$

---

#### 2.1 Horizontal Component ($F_H$)

The horizontal component of the hydrostatic force on a curved surface is equal to the force on its vertical projection.

*   **Calculation:**
    *   Identify the vertical plane that is the projection of the curved surface.
    *   Calculate the hydrostatic force on this vertical plane using the formula: $F_H = P_{avg} \times A_{projection}$
    *   Where $P_{avg}$ is the average pressure on the projected area, and $A_{projection}$ is the area of the vertical projection.
    *   $P_{avg} = \rho g h_{c}$, where $h_c$ is the depth of the centroid of the projected area.
    *   So, $F_H = \rho g h_c A_{projection}$.

*   **Point of Application of $F_H$:**
    *   The horizontal component acts at the centre of pressure ($CP_H$) of the projected vertical plane.
    *   The depth of $CP_H$ is given by $h_{CP_H} = h_c + \frac{I_c}{A_{projection} h_c}$, where $I_c$ is the moment of inertia of the projected area about its centroidal axis parallel to the surface.

---

#### 2.2 Vertical Component ($F_V$)

The vertical component of the hydrostatic force on a curved surface is equal to the weight of the fluid column that would occupy the space between the curved surface and the free surface.

*   **Calculation:**
    *   Identify the volume of fluid directly above the curved surface, up to the free surface. This is often referred to as the "prism" of fluid.
    *   The vertical component of the force is equal to the weight of this fluid volume: $F_V = W_{fluid} = \rho g V_{fluid}$.
    *   Where $V_{fluid}$ is the volume of the imaginary fluid prism.

*   **Point of Application of $F_V$:**
    *   The vertical component acts at the centroid of the volume of fluid that produces the force (i.e., the centroid of the imaginary fluid prism). This point is often referred to as the centre of buoyancy or the centre of gravity of the fluid prism.

---

### 3. Common Types of Curved Surfaces

Let's consider specific examples:

#### 3.1 Quadrant-shaped Curved Surface (Concave or Convex)

Consider a quadrant of a cylinder or a circle with radius $R$, submerged such that its straight edges are horizontal and vertical, and the curved surface is in contact with the fluid.

**Example 1: Quadrant of a Cylinder (Concave)**

A quadrant of a cylinder of radius $R$ is submerged in water, with the quadrant in the first quadrant of the xy-plane. The vertical edge lies along the y-axis and the horizontal edge lies along the x-axis. The free surface of the water is at the level of the origin (0,0).

*   **Problem:** Determine the total hydrostatic force and its point of application on the curved surface.

*   **Solution:**

    1.  **Horizontal Component ($F_H$):**
        *   The projection of the curved surface onto a vertical plane is the straight vertical edge of length $R$ (along the y-axis).
        *   The depth of the centroid of this projected area (a line) is $h_c = R/2$ (assuming the origin is at the free surface).
        *   The area of the projected vertical plane is $A_{projection} = R \times \text{width}$ (if it's a surface of finite width, let's assume unit width for simplicity, $A_{projection} = R \times 1 = R$).
        *   $F_H = \rho g h_c A_{projection} = \rho g (R/2) (R \times \text{width}) = \rho g R^2 \times \text{width}$.
        *   The horizontal force acts at a depth $h_{CP_H}$ from the free surface on the projected vertical plane. For a rectangular area of height $R$, the centroid is at $R/2$. The moment of inertia of a rectangle of width $b$ and height $h$ about its centroidal axis parallel to the width is $I_c = \frac{b h^3}{12}$. Here, $b = \text{width}$ and $h = R$.
        *   $h_{CP_H} = \frac{R}{2} + \frac{(\text{width}) R^3 / 12}{(\text{width}) R (R/2)} = \frac{R}{2} + \frac{R^2/12}{R/2} = \frac{R}{2} + \frac{R}{6} = \frac{4R}{6} = \frac{2R}{3}$.
        *   So, $F_H$ acts at a depth of $2R/3$ from the free surface, acting horizontally outwards (away from the fluid).

    2.  **Vertical Component ($F_V$):**
        *   The imaginary volume of fluid above the curved surface is a quarter cylinder of radius $R$ and width $W$.
        *   The volume of this fluid prism is $V_{fluid} = \frac{1}{4} \pi R^2 \times \text{width}$.
        *   $F_V = \rho g V_{fluid} = \rho g (\frac{1}{4} \pi R^2 \times \text{width})$.
        *   This force acts vertically downwards.
        *   The centroid of this quarter-cylinder of fluid is located at a distance $\frac{4R}{3\pi}$ from the y-axis and $\frac{4R}{3\pi}$ from the x-axis.
        *   The point of application of $F_V$ will be at the centroid of this volume. If the origin is at the free surface, the depth of the centroid is $\frac{4R}{3\pi}$.

    3.  **Resultant Force ($F_R$):**
        *   $F_R = \sqrt{F_H^2 + F_V^2} = \sqrt{(\rho g R^2 \times \text{width})^2 + (\rho g \frac{\pi R^2}{4} \times \text{width})^2}$
        *   $F_R = \rho g R^2 \times \text{width} \sqrt{1 + (\frac{\pi}{4})^2}$

    4.  **Point of Application of $F_R$:**
        *   The point of application is the intersection of the lines of action of $F_H$ and $F_V$. $F_H$ acts horizontally at a depth $2R/3$ from the free surface. $F_V$ acts vertically through the centroid of the fluid volume.

**Important Note:** If the curved surface is **convex** to the fluid, the vertical component $F_V$ will be **upwards** and equal to the weight of the fluid that would fill the void outside the curved surface.

**Example 2: Gate of a Tank in the Shape of a Quarter Circle**

A quarter-circular gate of radius 2m is placed in a tank containing water. The straight edges of the gate are horizontal and vertical. The free surface of the water is at the top edge of the vertical straight side. Determine the total hydrostatic force on the gate and its point of application. Assume the gate has a width of 1.5m.

*   **Given:**
    *   Radius of the quarter-circular gate, $R = 2$ m
    *   Width of the gate, $W = 1.5$ m
    *   Fluid: Water ($\rho = 1000 \text{ kg/m}^3$)
    *   $g = 9.81 \text{ m/s}^2$

*   **Solution:**

    1.  **Horizontal Component ($F_H$):**
        *   The projection of the quarter-circular gate onto a vertical plane is a rectangle of height $R = 2$ m and width $W = 1.5$ m.
        *   The centroid of this rectangular projected area is at a depth $h_c = R/2 = 2/2 = 1$ m from the free surface.
        *   The area of the projected vertical plane is $A_{projection} = R \times W = 2 \times 1.5 = 3 \text{ m}^2$.
        *   $F_H = \rho g h_c A_{projection} = 1000 \times 9.81 \times 1 \times 3 = 29430$ N.
        *   The depth of the centre of pressure for this rectangular projection:
            $h_{CP_H} = h_c + \frac{I_c}{A_{projection} h_c}$
            $I_c$ for a rectangle of base $W$ and height $R$ about its centroidal axis parallel to the base is $\frac{W R^3}{12}$.
            $I_c = \frac{1.5 \times (2)^3}{12} = \frac{1.5 \times 8}{12} = \frac{12}{12} = 1 \text{ m}^4$.
            $h_{CP_H} = 1 + \frac{1}{3 \times 1} = 1 + \frac{1}{3} = \frac{4}{3} \approx 1.33$ m from the free surface.

    2.  **Vertical Component ($F_V$):**
        *   The imaginary volume of fluid above the curved surface is a quarter cylinder of radius $R=2$ m and width $W=1.5$ m.
        *   Volume of this fluid prism, $V_{fluid} = \frac{1}{4} \pi R^2 W = \frac{1}{4} \pi (2)^2 \times 1.5 = \frac{1}{4} \pi \times 4 \times 1.5 = 1.5 \pi \text{ m}^3$.
        *   $F_V = \rho g V_{fluid} = 1000 \times 9.81 \times 1.5 \pi = 14715 \pi \approx 46225$ N.
        *   The vertical component acts at the centroid of this quarter-cylinder. The centroid of a quarter circle of radius $R$ from its axes is at $\frac{4R}{3\pi}$. The centroid of the volume will also be at this distance from the straight edges.
        *   If the origin is at the free surface (top edge of the vertical side), the depth of the centroid of the fluid volume is $\frac{4R}{3\pi} = \frac{4 \times 2}{3\pi} = \frac{8}{3\pi} \approx 0.85$ m from the free surface.

    3.  **Resultant Force ($F_R$):**
        *   $F_R = \sqrt{F_H^2 + F_V^2} = \sqrt{(29430)^2 + (46225)^2}$
        *   $F_R = \sqrt{866124900 + 2136750625} = \sqrt{3002875525} \approx 54798$ N.

    4.  **Point of Application of $F_R$:**
        *   $F_H$ acts horizontally at a depth of $1.33$ m.
        *   $F_V$ acts vertically at a depth of $0.85$ m.
        *   The resultant force $F_R$ will act at the intersection of the horizontal line at $1.33$ m depth and the vertical line passing through the centroid of the fluid volume.

---

#### 3.2 Cylindrical Surface Submerged in a Fluid

Consider a cylindrical surface, such as a dam or a pipe, submerged in a fluid.

**Example 3: Partially Submerged Cylinder**

A cylindrical drum of diameter 2m and length 3m is floating with its axis horizontal. Half of the drum is submerged in water. Calculate the hydrostatic force on the submerged half of the curved surface and its point of application.

*   **Given:**
    *   Diameter of cylinder, $D = 2$ m (Radius, $R = 1$ m)
    *   Length of cylinder, $L = 3$ m
    *   Fluid: Water ($\rho = 1000 \text{ kg/m}^3$)
    *   $g = 9.81 \text{ m/s}^2$

*   **Solution:**

    1.  **Horizontal Component ($F_H$):**
        *   The projection of the submerged half of the cylinder onto a vertical plane is a rectangle of width $D=2$ m and height $R=1$ m. The free surface coincides with the top of the submerged half.
        *   The centroid of this projected rectangle is at a depth $h_c = R/2 = 1/2 = 0.5$ m from the free surface.
        *   The area of the projected vertical plane is $A_{projection} = D \times L = 2 \times 3 = 6 \text{ m}^2$.
        *   $F_H = \rho g h_c A_{projection} = 1000 \times 9.81 \times 0.5 \times 6 = 29430$ N.
        *   The depth of the centre of pressure for this rectangular projection:
            $h_{CP_H} = h_c + \frac{I_c}{A_{projection} h_c}$
            $I_c$ for a rectangle of base $L$ and height $D$ about its centroidal axis parallel to the base is $\frac{L D^3}{12}$.
            $I_c = \frac{3 \times (2)^3}{12} = \frac{3 \times 8}{12} = \frac{24}{12} = 2 \text{ m}^4$.
            $h_{CP_H} = 0.5 + \frac{2}{6 \times 0.5} = 0.5 + \frac{2}{3} = 0.5 + 0.667 \approx 1.167$ m from the free surface.

    2.  **Vertical Component ($F_V$):**
        *   The imaginary volume of fluid above the submerged half of the cylinder is a semi-cylinder of radius $R=1$ m and length $L=3$ m.
        *   Volume of this fluid prism, $V_{fluid} = \frac{1}{2} \pi R^2 L = \frac{1}{2} \pi (1)^2 \times 3 = 1.5 \pi \text{ m}^3$.
        *   $F_V = \rho g V_{fluid} = 1000 \times 9.81 \times 1.5 \pi = 14715 \pi \approx 46225$ N.
        *   This force acts vertically downwards.
        *   The centroid of a semi-circle of radius $R$ from its diameter is at a distance $\frac{4R}{3\pi}$.
        *   The depth of the centroid of the fluid volume is therefore $\frac{4R}{3\pi} = \frac{4 \times 1}{3\pi} = \frac{4}{3\pi} \approx 0.424$ m from the free surface (which is at the diameter).

    3.  **Resultant Force ($F_R$):**
        *   $F_R = \sqrt{F_H^2 + F_V^2} = \sqrt{(29430)^2 + (46225)^2}$
        *   $F_R = \sqrt{866124900 + 2136750625} = \sqrt{3002875525} \approx 54798$ N.

    4.  **Point of Application of $F_R$:**
        *   $F_H$ acts horizontally at a depth of $1.167$ m from the free surface.
        *   $F_V$ acts vertically at a depth of $0.424$ m from the free surface.
        *   The resultant force $F_R$ acts at the intersection of the horizontal line at $1.167$ m depth and the vertical line passing through the centroid of the semi-cylinder.

---

#### 3.3 Curved Surfaces with Water Away from the Surface

In cases where the water is contained by a curved surface and the free surface of the water is *below* the top of the curved surface, the vertical component calculation needs careful consideration.

**Example 4: Water Stored in a Tank with a Curved Bottom**

A tank has a curved bottom in the shape of a parabola given by $y = \frac{x^2}{4}$, where $x$ and $y$ are in meters. The tank is filled with water to a depth of 2m. The width of the tank is 3m. Calculate the hydrostatic force on the curved bottom and its point of application.

*   **Given:**
    *   Parabolic curve: $y = \frac{x^2}{4}$
    *   Depth of water, $H = 2$ m
    *   Width of tank, $W = 3$ m
    *   Fluid: Water ($\rho = 1000 \text{ kg/m}^3$)
    *   $g = 9.81 \text{ m/s}^2$

*   **Solution:**

    1.  **Horizontal Component ($F_H$):**
        *   The projection of the curved bottom onto a vertical plane is a rectangle. The base of this rectangle is determined by the extent of the parabola at the water surface.
        *   At the water surface ($y=2$ m), $2 = \frac{x^2}{4} \Rightarrow x^2 = 8 \Rightarrow x = \pm \sqrt{8} = \pm 2\sqrt{2}$ m.
        *   The width of the projected rectangle is $2\sqrt{2} - (-\sqrt{8}) = 2\sqrt{2} + 2\sqrt{2} = 4\sqrt{2}$ m.
        *   The height of the projected rectangle is the depth of the water, $H = 2$ m.
        *   The projected area is $A_{projection} = (4\sqrt{2}) \times 2 = 8\sqrt{2} \text{ m}^2$.
        *   The centroid of this projected rectangular area is at a depth $h_c = H/2 = 2/2 = 1$ m from the free surface.
        *   $F_H = \rho g h_c A_{projection} = 1000 \times 9.81 \times 1 \times (8\sqrt{2}) \approx 110950$ N.
        *   The depth of the centre of pressure for this rectangular projection:
            $h_{CP_H} = h_c + \frac{I_c}{A_{projection} h_c}$
            $I_c$ for a rectangle of base $4\sqrt{2}$ and height $2$ about its centroidal axis parallel to the base is $\frac{(4\sqrt{2}) (2)^3}{12} = \frac{32\sqrt{2}}{12} = \frac{8\sqrt{2}}{3} \text{ m}^4$.
            $h_{CP_H} = 1 + \frac{8\sqrt{2}/3}{(8\sqrt{2}) \times 1} = 1 + \frac{1}{3} = \frac{4}{3} \approx 1.33$ m from the free surface.

    2.  **Vertical Component ($F_V$):**
        *   The imaginary volume of fluid above the curved bottom is the volume of water in the tank, bounded by the parabolic bottom and the free surface.
        *   The volume of this fluid prism needs to be calculated by integration.
        *   The area of the parabolic segment is given by $\int_{-2\sqrt{2}}^{2\sqrt{2}} (2 - \frac{x^2}{4}) dx$.
        *   Area $= [2x - \frac{x^3}{12}]_{-2\sqrt{2}}^{2\sqrt{2}} = (4\sqrt{2} - \frac{(2\sqrt{2})^3}{12}) - (-4\sqrt{2} - \frac{(-2\sqrt{2})^3}{12})$
        *   $= (4\sqrt{2} - \frac{16\sqrt{2}}{12}) - (-4\sqrt{2} + \frac{16\sqrt{2}}{12})$
        *   $= 4\sqrt{2} - \frac{4\sqrt{2}}{3} + 4\sqrt{2} - \frac{4\sqrt{2}}{3} = 8\sqrt{2} - \frac{8\sqrt{2}}{3} = \frac{16\sqrt{2}}{3} \text{ m}^2$.
        *   This is the area of the water in the cross-section. The volume of fluid is $V_{fluid} = \text{Area} \times \text{Width} = \frac{16\sqrt{2}}{3} \times 3 = 16\sqrt{2} \text{ m}^3$.
        *   $F_V = \rho g V_{fluid} = 1000 \times 9.81 \times 16\sqrt{2} \approx 221900$ N.
        *   This force acts vertically downwards through the centroid of this volume.
        *   To find the centroid of this volume:
            *   The centroid of the parabolic segment area is given by $\bar{y} = \frac{\int y dA}{\int dA}$. Here, $y$ is the height from the bottom. Let's consider the height from the free surface as $h = 2 - y$.
            *   The centroid of the volume will be at the centre of the width (since it's uniform) and at the centroidal depth of the fluid volume.
            *   The depth of the centroid of the fluid volume (measured from the free surface) is often calculated using the "moment of area" concept: $h_{centroid} = \frac{\int y_{depth} dA}{A}$.
            *   Let $y'$ be the distance from the free surface, so $y' = 2 - y = 2 - \frac{x^2}{4}$.
            *   The integral for the moment of the area about the free surface:
                $\int A_{cross-section} y' dx = \int_{-2\sqrt{2}}^{2\sqrt{2}} (2 - \frac{x^2}{4}) \times (\text{width}) \times (2 - \frac{x^2}{4}) dx$ - This is incorrect as it is not the depth of the centroid of the volume.
            *   The correct approach is to consider the moment of the fluid volume about the free surface.
            *   Let's calculate the depth of the centroid of the volume $y_{vol\_centroid}$ from the bottom of the tank.
            *   The $y$-coordinate of the centroid of the fluid area is $\bar{y} = \frac{\int_{-2\sqrt{2}}^{2\sqrt{2}} y \cdot (\text{width}) \cdot dx}{\int_{-2\sqrt{2}}^{2\sqrt{2}} (\text{width}) \cdot dx} = \frac{\int_{-2\sqrt{2}}^{2\sqrt{2}} \frac{x^2}{4} \cdot 3 \cdot dx}{3 \cdot 4\sqrt{2}} = \frac{3 \int_{-2\sqrt{2}}^{2\sqrt{2}} \frac{x^2}{4} dx}{12\sqrt{2}}$
            *   $\int_{-2\sqrt{2}}^{2\sqrt{2}} \frac{x^2}{4} dx = [\frac{x^3}{12}]_{-2\sqrt{2}}^{2\sqrt{2}} = \frac{(2\sqrt{2})^3}{12} - \frac{(-2\sqrt{2})^3}{12} = \frac{16\sqrt{2}}{12} - (-\frac{16\sqrt{2}}{12}) = \frac{32\sqrt{2}}{12} = \frac{8\sqrt{2}}{3}$.
            *   $\bar{y} = \frac{3 \times \frac{8\sqrt{2}}{3}}{12\sqrt{2}} = \frac{8\sqrt{2}}{12\sqrt{2}} = \frac{2}{3}$ m.
            *   This $\bar{y}$ is the distance of the centroid from the bottom of the tank.
            *   The depth of the centroid of the fluid volume from the free surface is $h_{V\_centroid} = H - \bar{y} = 2 - \frac{2}{3} = \frac{4}{3}$ m.

    3.  **Resultant Force ($F_R$):**
        *   $F_R = \sqrt{F_H^2 + F_V^2} = \sqrt{(110950)^2 + (221900)^2}$
        *   $F_R = \sqrt{12309902500 + 49239610000} = \sqrt{61549512500} \approx 248092$ N.

    4.  **Point of Application of $F_R$:**
        *   $F_H$ acts horizontally at a depth of $1.33$ m from the free surface.
        *   $F_V$ acts vertically at a depth of $4/3 \approx 1.33$ m from the free surface.
        *   The resultant force $F_R$ acts at the intersection of the horizontal line at $1.33$ m depth and the vertical line passing through the centroid of the fluid volume.

---

### 4. Important Points to Remember

*   **Decomposition:** Always resolve the hydrostatic force on a curved surface into horizontal and vertical components.
*   **Horizontal Component:** It acts on the **projection** of the curved surface onto a **vertical plane**.
*   **Vertical Component:** It is equal to the **weight** of the **imaginary fluid column** above the curved surface up to the free surface.
*   **Direction of $F_V$:**
    *   **Downward** if the curved surface is concave upwards or flat downwards.
    *   **Upward** if the curved surface is convex upwards (e.g., a curved dam where the water is on the convex side).
*   **Centroid Calculation:** For complex shapes, integration is often required to find the centroid of the projected area and the centroid of the fluid volume.
*   **Free Surface:** The location of the free surface is crucial for determining the depths of the centroids and thus the magnitude of the forces.
*   **Units:** Ensure consistency in units throughout the calculations.

---

### 5. Practice Questions

**Question 1:**
A curved surface is in the shape of a quarter circle of radius 3m and has a width of 2m. It is immersed in water such that the straight edges are horizontal and vertical, and the free surface of the water coincides with the top edge of the vertical straight side. Calculate the magnitude and direction of the hydrostatic force on the curved surface.

**Question 2:**
A cylindrical tank of radius 1.5m and length 4m is lying on its side. The tank is filled with oil of specific gravity 0.8 up to a depth of 1m. Determine the total hydrostatic force on the curved surface of the tank and the location of its point of application.

**Question 3:**
A tank has a bottom in the shape of a parabola $y = x^2$, where $x$ and $y$ are in meters. The tank is 4m wide and is filled with water to a depth of 2m. Calculate the hydrostatic force on the parabolic bottom and its point of application.

---

### Answers to Practice Questions

**Answer 1:**
*   Radius, $R = 3$ m, Width, $W = 2$ m, $\rho = 1000 \text{ kg/m}^3$, $g = 9.81 \text{ m/s}^2$.

    *   **Horizontal Component ($F_H$):**
        *   Projected area is a rectangle: $A_{projection} = R \times W = 3 \times 2 = 6 \text{ m}^2$.
        *   Depth of centroid of projection, $h_c = R/2 = 3/2 = 1.5$ m.
        *   $F_H = \rho g h_c A_{projection} = 1000 \times 9.81 \times 1.5 \times 6 = 88290$ N.
        *   Depth of $CP_H = 1.5 + \frac{3 \times 3^3 / 12}{6 \times 1.5} = 1.5 + \frac{27/12}{9} = 1.5 + \frac{2.25}{9} = 1.5 + 0.25 = 2$ m from the free surface.

    *   **Vertical Component ($F_V$):**
        *   Volume of quarter-cylinder: $V_{fluid} = \frac{1}{4} \pi R^2 W = \frac{1}{4} \pi (3)^2 \times 2 = \frac{9\pi}{2} \text{ m}^3$.
        *   $F_V = \rho g V_{fluid} = 1000 \times 9.81 \times \frac{9\pi}{2} = 44145 \pi \approx 138684$ N.
        *   Depth of centroid of fluid volume = $\frac{4R}{3\pi} = \frac{4 \times 3}{3\pi} = \frac{4}{\pi} \approx 1.27$ m from the free surface.

    *   **Resultant Force ($F_R$):**
        *   $F_R = \sqrt{F_H^2 + F_V^2} = \sqrt{(88290)^2 + (138684)^2} = \sqrt{7795124100 + 19233436000} = \sqrt{27028560100} \approx 164403$ N.

    *   **Direction:** The resultant force acts at an angle $\theta = \tan^{-1}\left(\frac{F_V}{F_H}\right) = \tan^{-1}\left(\frac{138684}{88290}\right) \approx 57.5^\circ$ with the horizontal.

**Answer 2:**
*   Radius, $R = 1.5$ m, Length, $L = 4$ m, Depth of oil, $h = 1$ m. Specific gravity = 0.8 $\Rightarrow \rho_{oil} = 0.8 \times 1000 = 800 \text{ kg/m}^3$, $g = 9.81 \text{ m/s}^2$.

    *   **Horizontal Component ($F_H$):**
        *   The projection is a rectangle of width $2R=3$m and height $h=1$m.
        *   Depth of centroid of projection, $h_c = h/2 = 1/2 = 0.5$ m.
        *   Area of projection, $A_{projection} = (2R) \times L = 3 \times 4 = 12 \text{ m}^2$.
        *   $F_H = \rho_{oil} g h_c A_{projection} = 800 \times 9.81 \times 0.5 \times 12 = 47088$ N.
        *   Depth of $CP_H = 0.5 + \frac{4 \times (3)^3 / 12}{12 \times 0.5} = 0.5 + \frac{108/12}{6} = 0.5 + \frac{9}{6} = 0.5 + 1.5 = 2$ m from the free surface.

    *   **Vertical Component ($F_V$):**
        *   The volume of oil above the curved surface is the area of the segment of the circle (width 3m, depth 1m) multiplied by the length. The segment area is the area of the rectangle (3m x 1m) minus the area of the triangle formed by the chord and the centre.
        *   Let's use integration to find the volume of the segment directly. The equation of the circle is $x^2 + y^2 = R^2$. Considering the centre of the circle at (0,0), the oil surface is at $y=0$ and the bottom of the tank is at $y=-1.5$. The oil fills up to $y=0.5$.
        *   Let's re-orient: Free surface at $y=0$. Tank centre at (0, 1.5). Circle equation $x^2 + (y-1.5)^2 = 1.5^2$. Oil depth is 1m. So oil fills from $y=0.5$ to $y=1.5$.
        *   Area of cross-section of oil: $\int_{-1.5}^{0.5} 2x dy = \int_{-1.5}^{0.5} 2 \sqrt{1.5^2 - (y-1.5)^2} dy$. This is complex.
        *   A simpler way: The volume of fluid above the curved surface is the weight of the fluid in the segment. The depth of the fluid is 1m. The curved surface is the lower half of the circle, with the free surface at the horizontal diameter.
        *   The volume of the submerged part is a segment of a circle. Let's consider the centre of the circle at the origin. The free surface is at $y=0$. The curved surface is the lower semi-circle ($y$ from 0 to -1.5).
        *   The volume of the fluid is the volume of the semi-cylinder: $V_{fluid} = \frac{1}{2} \pi R^2 L = \frac{1}{2} \pi (1.5)^2 \times 4 = \frac{1}{2} \pi \times 2.25 \times 4 = 4.5 \pi \text{ m}^3$.
        *   $F_V = \rho_{oil} g V_{fluid} = 800 \times 9.81 \times 4.5 \pi = 35316 \pi \approx 110950$ N.
        *   The centroid of the semi-circular fluid volume from the free surface (diameter) is $\frac{4R}{3\pi} = \frac{4 \times 1.5}{3\pi} = \frac{2}{\pi} \approx 0.64$ m.

    *   **Resultant Force ($F_R$):**
        *   $F_R = \sqrt{F_H^2 + F_V^2} = \sqrt{(47088)^2 + (110950)^2} = \sqrt{2217277000 + 12309902500} = \sqrt{14527179500} \approx 120529$ N.

    *   **Point of Application:** $F_H$ acts at 2m depth. $F_V$ acts at 0.64m depth. The resultant force acts at the intersection of these lines of action.

**Answer 3:**
*   Parabolic bottom: $y = x^2$. Depth of water $H = 2$m. Width $W = 4$m. $\rho = 1000 \text{ kg/m}^3$, $g = 9.81 \text{ m/s}^2$.

    *   **Horizontal Component ($F_H$):**
        *   At $y=2$, $2 = x^2 \Rightarrow x = \pm \sqrt{2}$ m.
        *   Width of projected rectangle: $2\sqrt{2}$ m.
        *   Height of projected rectangle: $H = 2$ m.
        *   Area of projection: $A_{projection} = (2\sqrt{2}) \times 2 = 4\sqrt{2} \text{ m}^2$.
        *   Depth of centroid of projection: $h_c = H/2 = 2/2 = 1$ m.
        *   $F_H = \rho g h_c A_{projection} = 1000 \times 9.81 \times 1 \times 4\sqrt{2} = 39240 \sqrt{2} \approx 55480$ N.
        *   Depth of $CP_H = 1 + \frac{(4\sqrt{2}) (2)^3 / 12}{(4\sqrt{2}) \times 1} = 1 + \frac{32\sqrt{2}/12}{4\sqrt{2}} = 1 + \frac{8\sqrt{2}/3}{4\sqrt{2}} = 1 + \frac{2}{3} = \frac{5}{3} \approx 1.67$ m from the free surface.

    *   **Vertical Component ($F_V$):**
        *   Volume of water in the tank: $V_{fluid} = \int_{-\sqrt{2}}^{\sqrt{2}} (2 - x^2) \times (\text{width}) dx$
        *   $V_{fluid} = 4 \int_{-\sqrt{2}}^{\sqrt{2}} (2 - x^2) dx = 4 [2x - \frac{x^3}{3}]_{-\sqrt{2}}^{\sqrt{2}}$
        *   $V_{fluid} = 4 [(2\sqrt{2} - \frac{(\sqrt{2})^3}{3}) - (-2\sqrt{2} - \frac{(-\sqrt{2})^3}{3})]$
        *   $V_{fluid} = 4 [(2\sqrt{2} - \frac{2\sqrt{2}}{3}) - (-2\sqrt{2} + \frac{2\sqrt{2}}{3})]$
        *   $V_{fluid} = 4 [ \frac{4\sqrt{2}}{3} + \frac{4\sqrt{2}}{3} ] = 4 \times \frac{8\sqrt{2}}{3} = \frac{32\sqrt{2}}{3} \text{ m}^3$.
        *   $F_V = \rho g V_{fluid} = 1000 \times 9.81 \times \frac{32\sqrt{2}}{3} = \frac{313920 \sqrt{2}}{3} \approx 147559$ N.
        *   To find the depth of the centroid of the fluid volume from the free surface:
            *   Centroid of the parabolic segment area from the bottom: $\bar{y} = \frac{\int y dA}{A}$.
            *   Area of the segment: $A = \frac{32\sqrt{2}}{3} / 4 = \frac{8\sqrt{2}}{3} \text{ m}^2$.
            *   $\int y dA = \int_{-\sqrt{2}}^{\sqrt{2}} x^2 \times 4 \times dx = 4 [\frac{x^3}{3}]_{-\sqrt{2}}^{\sqrt{2}} = 4 (\frac{2\sqrt{2}}{3} - (-\frac{2\sqrt{2}}{3})) = 4 \times \frac{4\sqrt{2}}{3} = \frac{16\sqrt{2}}{3}$.
            *   $\bar{y} = \frac{16\sqrt{2}/3}{8\sqrt{2}/3} = 2$ m.
            *   This is the distance of the centroid from the vertex of the parabola (which is at the bottom of the tank). Since the water depth is 2m, the centroid is at the free surface if measured from the vertex. This means the centroid of the volume is at the vertex of the parabola, which is at a depth of 2m from the free surface. This result seems counter-intuitive. Let's recheck the centroid calculation for the parabolic area.
            *   For a parabolic segment area bounded by $y=ax^2$ and $y=h$, the centroid is at $\frac{3}{4}h$ from the vertex. Here, $h=2$m, $a=1$. So centroid is at $3/4 \times 2 = 1.5$m from the vertex.
            *   Depth of centroid of fluid volume from free surface $= H - (\text{distance from vertex}) = 2 - 1.5 = 0.5$ m.

    *   **Resultant Force ($F_R$):**
        *   $F_R = \sqrt{F_H^2 + F_V^2} = \sqrt{(55480)^2 + (147559)^2} = \sqrt{3078070400 + 21774760000} = \sqrt{24852830400} \approx 157654$ N.

    *   **Point of Application:** $F_H$ acts at 1.67m depth. $F_V$ acts at 0.5m depth. The resultant force acts at the intersection of these lines of action.

---
