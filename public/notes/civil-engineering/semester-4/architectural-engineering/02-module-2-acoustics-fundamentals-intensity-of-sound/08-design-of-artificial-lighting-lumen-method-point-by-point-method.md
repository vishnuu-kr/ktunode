---
title: "Design of artificial lighting – lumen method – point by point method."
subject: "ARCHITECTURAL ENGINEERING"
module: "Module 2: Acoustics, fundamentals: Intensity of sound"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810bc3"
status: "completed"
scrapedAt: "2026-05-20T18:42:59.844Z"
---
It seems there might be a slight misunderstanding in the provided prompt. The topic you've requested study notes for is **"Design of artificial lighting – lumen method – point by point method."** However, you've stated that this topic falls under **"Module 2: Acoustics, fundamentals: Intensity of sound"** in Architectural Engineering.

**Artificial lighting design and acoustics are distinct fields within Architectural Engineering.** While both are crucial for building design, they deal with entirely different physical phenomena and design methodologies.

**I will proceed to generate comprehensive study notes for the design of artificial lighting using the Lumen Method and the Point-by-Point Method, as this is the core subject matter described.** I will **not** include any information related to acoustics, as it is not relevant to the lighting design topic.

---

# ARCHITECTURAL ENGINEERING: Module X - Artificial Lighting Design

## Topic: Design of Artificial Lighting – Lumen Method – Point-by-Point Method

---

### **1. Introduction to Artificial Lighting Design**

Artificial lighting is essential for providing adequate illumination levels for various activities within buildings, enhancing visual comfort, safety, and aesthetics. Effective lighting design aims to balance functional requirements with energy efficiency and occupant well-being.

**Key Concepts:**

*   **Illuminance (E):** The luminous flux incident on a surface per unit area. Measured in Lux (lx), where 1 lx = 1 lumen/m².
*   **Luminous Flux ($\Phi$):** The total amount of visible light emitted by a source per unit time. Measured in Lumens (lm).
*   **Luminous Intensity (I):** The luminous flux emitted by a point source in a particular direction per unit solid angle. Measured in Candela (cd).
*   **Luminance (L):** The luminous intensity per unit apparent area of a light source or a reflecting surface. Measured in Candela per square meter (cd/m²) or Nit.
*   **Light Source:** The fixture or lamp that emits light.
*   **Luminaire:** A complete lighting unit including the light source, reflector, diffuser, and housing.
*   **Task Area:** The surface where the primary visual activity takes place (e.g., a desk, a workbench).

---

### **2. The Lumen Method (or Flux Method)**

The Lumen Method is a simplified, empirical method used for calculating the *average* illuminance over a large area. It's suitable for general lighting calculations in spaces where the illuminance is relatively uniform.

**Core Principle:**

The total luminous flux from all the luminaires in a space, after accounting for losses due to reflections and absorption, is distributed over the total area of the space to determine the average illuminance.

**Formula:**

$E_{avg} = (\Phi_{total} \times CU \times LLF) / A$

Where:

*   $E_{avg}$: Average illuminance on the work plane (lx).
*   $\Phi_{total}$: Total luminous flux emitted by all lamps in the installation (lm). This is typically the sum of the luminous flux per lamp multiplied by the number of lamps.
*   $CU$ (Coefficient of Utilization): A factor that represents the ratio of the luminous flux received on the work plane to the total luminous flux emitted by the lamps. It accounts for the geometry of the room, the reflectivity of surfaces, and the light distribution characteristics of the luminaire.
*   $LLF$ (Light Loss Factor): A factor that accounts for all the factors that cause the illuminance to decrease over time. This includes:
    *   **Lamp Lumen Depreciation (LLD):** The decrease in light output of a lamp over its life.
    *   **Luminaire Dirt Depreciation (LDD):** The accumulation of dirt on the luminaire surfaces.
    *   **Room Surface Dirt Depreciation (RSDD):** The accumulation of dirt on room surfaces.
    *   **Lamp Burnout:** The failure of lamps.
*   $A$: The area of the work plane (m²).

**Steps for Applying the Lumen Method:**

1.  **Determine the Required Illuminance ($E_{req}$):** Based on the activity and the relevant lighting codes or standards (e.g., IESNA recommendations).
2.  **Determine the Area of the Work Plane (A):** Calculate the area of the space where illumination is needed.
3.  **Select a Luminaire Type and Light Source:** Choose luminaires based on the desired light distribution, efficiency, aesthetics, and cost. Obtain the lumen output ($\Phi_{lamp}$) per lamp.
4.  **Determine the Coefficient of Utilization (CU):** This is a critical step and often involves using charts or tables provided by luminaire manufacturers. CU depends on:
    *   **Room Cavity Ratio (RCR):** A ratio that describes the shape of the room.
        $RCR = (5 \times h_{rc} \times (l + w)) / (l \times w)$
        Where:
        *   $h_{rc}$: Height of the room cavity (distance from the luminaire mounting plane to the work plane).
        *   $l$: Length of the room.
        *   $w$: Width of the room.
    *   **Effective Ceiling Cavity Reflectance (pcc):** Reflectance of the ceiling.
    *   **Effective Wall Reflectance (pwc):** Reflectance of the walls.
    *   **Effective Floor Cavity Reflectance (pfc):** Reflectance of the floor.
    *   **Luminaire Light Distribution:** How the light is spread by the luminaire.
5.  **Determine the Light Loss Factor (LLF):** Estimate or obtain values for LLD, LDD, RSDD, etc., and multiply them together.
    $LLF = LLD \times LDD \times RSDD \times ...$
6.  **Calculate the Total Required Luminous Flux ($\Phi_{total}$):** Rearrange the Lumen Method formula:
    $\Phi_{total} = (E_{req} \times A) / (CU \times LLF)$
7.  **Calculate the Number of Luminaires (N):**
    $N = \Phi_{total} / \Phi_{lamp}$
    *   If the result is not a whole number, round up to the nearest whole number.
8.  **Calculate the Actual Average Illuminance:** Using the actual number of luminaires, recalculate the average illuminance to verify it meets or exceeds the requirement.

**Example:**

Design the general lighting for an office space measuring 10m x 15m. The required average illuminance is 500 lx. The chosen luminaires are equipped with 2 x 36W fluorescent lamps, each producing 3200 lm. Manufacturer data indicates a CU of 0.7 for this room and luminaire combination. The LLF is estimated to be 0.8.

**Solution:**

1.  $E_{req} = 500$ lx
2.  $A = 10m \times 15m = 150$ m²
3.  $\Phi_{lamp}$ per luminaire = 2 lamps $\times 3200$ lm/lamp = 6400 lm
4.  $CU = 0.7$
5.  $LLF = 0.8$
6.  $\Phi_{total} = (500 \text{ lx} \times 150 \text{ m}²) / (0.7 \times 0.8) = 75000 \text{ lm} / 0.56 \approx 133928.57$ lm
7.  $N = 133928.57 \text{ lm} / 6400 \text{ lm/luminaire} \approx 20.93$

    Therefore, **21 luminaires** are required.

    **Verification:**
    $E_{avg} = (21 \text{ luminaires} \times 6400 \text{ lm/luminaire} \times 0.7 \times 0.8) / 150 \text{ m}²$
    $E_{avg} = (134400 \text{ lm} \times 0.56) / 150 \text{ m}²$
    $E_{avg} = 75264 \text{ lm} / 150 \text{ m}² \approx 501.76$ lx (This meets the requirement)

---

### **3. The Point-by-Point Method**

The Point-by-Point method, also known as the Inverse Square Law method, calculates the illuminance at specific points on a surface. It's used when illuminance is not uniform across a space or when detailed illuminance distribution is required, such as for task lighting or in areas with varying requirements.

**Core Principles:**

*   **Inverse Square Law:** The illuminance at a point on a surface is inversely proportional to the square of the distance from the light source to that point.
*   **Cosine Law:** The illuminance on a surface is proportional to the cosine of the angle between the light ray and the normal to the surface.

**Formula for Illuminance at a Point (from a single point source):**

$E = (I \times \cos \theta) / d²$

Where:

*   $E$: Illuminance at the point (lx).
*   $I$: Luminous intensity of the source in the direction of the point (cd).
*   $\theta$: The angle between the direction of the luminous intensity and the line perpendicular to the surface at the point.
*   $d$: The distance from the source to the point (m).

**Steps for Applying the Point-by-Point Method:**

1.  **Identify the Point(s) of Interest:** Determine the specific locations on the work plane where illuminance needs to be calculated.
2.  **Select the Luminaire and Light Source:** Choose the luminaire and understand its light distribution characteristics (e.g., from a photometric data file or polar intensity curve).
3.  **Determine the Luminous Intensity (I) in the Direction of the Point:** This is the most crucial step. It requires using the photometric data of the luminaire.
    *   **Photometric Curve:** A graphical representation of the luminous intensity distribution of a luminaire as a function of angle.
    *   **Convert Angles and Distances:** From the geometry of the room and luminaire placement, determine the angle ($\theta$) and distance ($d$) from each luminaire to the point of interest.
4.  **Calculate Illuminance from Each Luminaire:** Apply the formula $E = (I \times \cos \theta) / d²$ for each luminaire contributing light to the point.
5.  **Sum the Illuminances:** The total illuminance at the point is the sum of the illuminances contributed by all luminaires.
    $E_{total} = E_1 + E_2 + E_3 + ... + E_n$

**Considerations for Real-World Applications:**

*   **Non-Point Sources:** Luminaires are not true point sources. The Inverse Square Law and Cosine Law are approximations. For more accuracy, the "Zonal Cavity Method" for illuminance calculation at a point is more robust, but the fundamental principles of inverse square and cosine laws are still employed within it.
*   **Reflected Light:** The Point-by-Point method primarily calculates direct illuminance. In many cases, reflected light from walls and ceilings can contribute significantly to the total illuminance. This is often implicitly handled in more advanced methods or can be estimated using the "flux transfer" method.
*   **Complex Geometries:** Calculating $I$, $d$, and $\theta$ for multiple points and multiple luminaires can be computationally intensive. Software is often used for complex projects.

**Example:**

Calculate the illuminance at point P on a desk surface directly below a luminaire mounted 3 meters above the desk. The luminaire has a luminous intensity of 1000 cd in the vertical direction (towards point P).

**Solution:**

1.  Point of Interest: Point P directly below the luminaire.
2.  Luminaire: Assume a simple source for this example.
3.  Luminous Intensity ($I$): $I = 1000$ cd (given in the direction of P).
4.  Distance ($d$): The luminaire is mounted 3m above the desk. Point P is on the desk, directly below. So, $d = 3$ m.
5.  Angle ($\theta$): The normal to the desk surface at point P is vertical. The light ray from the luminaire to P is also vertical. Therefore, the angle between the direction of intensity and the normal is $\theta = 0$°.
6.  Calculate Illuminance:
    $E = (I \times \cos \theta) / d²$
    $E = (1000 \text{ cd} \times \cos 0° ) / (3 \text{ m})²$
    $E = (1000 \text{ cd} \times 1) / 9 \text{ m}²$
    $E = 111.11$ lx

**Example 2 (More Complex Geometry):**

Consider a point P on the work plane, located 2 meters horizontally away from the point directly below a luminaire. The luminaire is mounted 3 meters above the work plane. The luminous intensity of the luminaire at an angle of 45° from the vertical is 800 cd.

**Solution:**

1.  Point of Interest: Point P, 2m horizontally from the nadir.
2.  Luminaire: Assume photometric data is available.
3.  Luminous Intensity ($I$): We need the intensity at the angle corresponding to point P.
4.  Distance ($d$): The vertical distance is 3m, and the horizontal distance is 2m. Using Pythagoras theorem:
    $d = \sqrt{3² + 2²} = \sqrt{9 + 4} = \sqrt{13} \approx 3.606$ m
5.  Angle ($\theta$): The angle between the light ray and the normal (vertical) to the surface.
    $\cos \theta = \text{adjacent} / \text{hypotenuse} = 3 \text{ m} / \sqrt{13} \text{ m}$
    $\theta = \arccos(3 / \sqrt{13}) \approx 33.69°$
6.  Luminous Intensity ($I$): We need the intensity value from the luminaire's polar curve at approximately 33.69°. Let's assume the manufacturer's data shows $I = 900$ cd at this angle.
7.  Calculate Illuminance:
    $E = (I \times \cos \theta) / d²$
    $E = (900 \text{ cd} \times (3 / \sqrt{13})) / (\sqrt{13} \text{ m})²$
    $E = (900 \text{ cd} \times 3 / \sqrt{13}) / 13 \text{ m}²$
    $E = (2700 / \sqrt{13}) / 13 \text{ m}² \approx (748.85 / 13) \text{ m}² \approx 57.6$ lx

---

### **4. Comparison of Lumen Method and Point-by-Point Method**

| Feature              | Lumen Method                                    | Point-by-Point Method                                    |
| :------------------- | :---------------------------------------------- | :------------------------------------------------------- |
| **Purpose**          | Calculate average illuminance over an area.     | Calculate illuminance at specific points.                |
| **Accuracy**         | Less precise for non-uniform lighting.          | More precise for specific points, requires detailed data. |
| **Complexity**       | Relatively simple, uses average values.         | More complex, requires geometric calculations and data. |
| **Applications**     | General office lighting, hallways, large spaces. | Task lighting, display lighting, areas with gradients.   |
| **Data Requirements**| CU, LLF, room dimensions, lamp lumens.          | Luminaire photometric data (intensity distribution), precise geometry. |
| **Output**           | Average illuminance.                            | Illuminance at specific points, illuminance distribution. |

---

### **5. Key Points to Remember**

*   **Understand the Goal:** Is average illuminance sufficient (Lumen Method), or is point-specific illuminance critical (Point-by-Point)?
*   **Accuracy of CU:** The accuracy of the Lumen Method heavily relies on the correct determination of the Coefficient of Utilization (CU). Consider room shape, surface reflectances, and luminaire characteristics.
*   **LLF is Crucial:** Always account for light loss factors to ensure that illuminance levels remain adequate throughout the lifespan of the installation.
*   **Photometric Data is King:** For the Point-by-Point method, having accurate photometric data (intensity distribution curves) for the chosen luminaires is essential.
*   **Software Assistance:** For complex spaces or detailed analysis, lighting design software can significantly simplify calculations and provide visual representations of illuminance levels.
*   **Safety and Standards:** Always refer to relevant lighting standards and codes (e.g., IES recommendations, local building codes) for required illuminance levels for different applications.

---

### **6. Practice Questions**

**Question 1 (Lumen Method):**

A classroom requires an average illuminance of 300 lx. The room dimensions are 8m x 10m. Luminaires with 2 x 32W T8 fluorescent lamps, each producing 2800 lm, are to be used. The Coefficient of Utilization (CU) for this setup is 0.65, and the Light Loss Factor (LLF) is 0.75. How many luminaires are needed?

**Answer 1:**

1.  $E_{req} = 300$ lx
2.  $A = 8m \times 10m = 80$ m²
3.  $\Phi_{lamp}$ per luminaire = 2 lamps $\times 2800$ lm/lamp = 5600 lm
4.  $CU = 0.65$
5.  $LLF = 0.75$
6.  $\Phi_{total} = (300 \text{ lx} \times 80 \text{ m}²) / (0.65 \times 0.75) = 24000 \text{ lm} / 0.4875 \approx 49230.77$ lm
7.  $N = 49230.77 \text{ lm} / 5600 \text{ lm/luminaire} \approx 8.79$

    Therefore, **9 luminaires** are needed.

**Question 2 (Point-by-Point Method):**

A single spotlight with a luminous intensity of 1500 cd in the direction of a point P is mounted 4 meters directly above point P. Calculate the illuminance at point P.

**Answer 2:**

1.  $I = 1500$ cd
2.  $d = 4$ m
3.  $\theta = 0°$ (since the intensity is in the direction of the normal)
4.  $E = (I \times \cos \theta) / d² = (1500 \text{ cd} \times \cos 0°) / (4 \text{ m})² = (1500 \times 1) / 16 = 93.75$ lx

**Question 3 (Point-by-Point Method - Conceptual):**

If you move a point P further away from a light source, how will the illuminance at point P change, assuming the light source's intensity in that direction remains constant? Explain using the Inverse Square Law.

**Answer 3:**

According to the Inverse Square Law ($E = (I \times \cos \theta) / d²$), illuminance ($E$) is inversely proportional to the square of the distance ($d²$) from the light source. Therefore, if you move point P further away from the light source, the distance $d$ increases. As $d$ increases, $d²$ increases even more rapidly. Consequently, the illuminance $E$ at point P will **decrease**.

---
