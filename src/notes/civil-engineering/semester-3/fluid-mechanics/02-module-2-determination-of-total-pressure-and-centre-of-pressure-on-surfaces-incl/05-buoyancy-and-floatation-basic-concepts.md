---
title: "Buoyancy and Floatation: Basic concepts"
subject: "FLUID MECHANICS"
module: "Module 2: Determination of total pressure and centre of pressure on surfaces (include numerical problems) : Vertical plane surface"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106ec"
status: "completed"
scrapedAt: "2026-05-20T18:40:27.799Z"
---
# Fluid Mechanics: Module 2 - Buoyancy and Floatation (Basic Concepts)

## 1. Introduction to Buoyancy and Floatation

### 1.1 What is Buoyancy?

*   **Definition:** Buoyancy is the **upward force** exerted by a fluid that opposes the weight of an immersed object. It is the tendency of an object to float in a fluid.
*   **Origin of Buoyant Force:** The buoyant force arises due to the **pressure difference** within the fluid. The pressure at the bottom of an immersed object is greater than the pressure at its top. This pressure difference creates a net upward force.

### 1.2 Archimedes' Principle

*   **Statement:** Archimedes' Principle states that **"a body wholly or partially immersed in a fluid is buoyed up by a force equal to the weight of the fluid displaced by the body."**
*   **Key Concepts:**
    *   **Displaced Fluid:** The volume of fluid that is pushed aside by the immersed object.
    *   **Weight of Displaced Fluid:** This is the magnitude of the buoyant force.

### 1.3 Buoyant Force ($F_B$)

*   **Formula:**
    $F_B = \text{Weight of displaced fluid}$
    $F_B = (\text{Volume of displaced fluid}) \times (\text{Density of fluid}) \times (\text{Acceleration due to gravity})$
    $F_B = V_{submerged} \times \rho_{fluid} \times g$

    Where:
    *   $F_B$ = Buoyant Force (Newtons, N)
    *   $V_{submerged}$ = Volume of the object submerged in the fluid (cubic meters, $m^3$)
    *   $\rho_{fluid}$ = Density of the fluid (kilograms per cubic meter, $kg/m^3$)
    *   $g$ = Acceleration due to gravity (approximately $9.81 m/s^2$)

### 1.4 Center of Buoyancy ($C_B$)

*   **Definition:** The **center of buoyancy** is the point through which the resultant buoyant force acts. It is the centroid (geometric center) of the volume of the displaced fluid.
*   **Location:** The center of buoyancy is always located at the **geometric center of the submerged portion** of the object.

---

## 2. Conditions of Floatation

The behavior of an object immersed in a fluid depends on the comparison between its weight and the buoyant force acting on it. Let $W$ be the weight of the object and $F_B$ be the buoyant force.

### 2.1 Floating Equilibrium

An object floats in a fluid when the **buoyant force is equal to its weight**.

*   **Condition:** $F_B = W$
*   **Implication:** If an object floats, it means it has displaced an amount of fluid whose weight is exactly equal to its own weight. The object will float at a level where this condition is met.

### 2.2 Sinking

An object sinks when its **weight is greater than the buoyant force**.

*   **Condition:** $W > F_B$
*   **Implication:** The downward force (weight) is stronger than the upward force (buoyancy), causing the object to descend through the fluid.

### 2.3 Rising (or Partially Submerged)

An object will rise in a fluid if the **buoyant force is greater than its weight**. This is typically observed when an object is initially pushed down and then released.

*   **Condition:** $F_B > W$
*   **Implication:** The upward force is stronger, causing the object to move upwards until it reaches an equilibrium where $F_B = W$ (floating) or it surfaces completely.

---

## 3. Relative Density (Specific Gravity)

*   **Definition:** Relative density (or specific gravity, SG) of a substance is the **ratio of the density of the substance to the density of a reference substance**, usually water.

*   **Formula:**
    $SG = \frac{\rho_{substance}}{\rho_{reference}}$

    For most engineering applications, the reference substance is water, and $\rho_{water} \approx 1000 \, kg/m^3$.

*   **Significance in Floatation:**
    *   If $SG_{object} < SG_{fluid}$ (i.e., $\rho_{object} < \rho_{fluid}$): The object will **float**.
    *   If $SG_{object} > SG_{fluid}$ (i.e., $\rho_{object} > \rho_{fluid}$): The object will **sink**.
    *   If $SG_{object} = SG_{fluid}$ (i.e., $\rho_{object} = \rho_{fluid}$): The object will **remain suspended** at any level within the fluid.

---

## 4. Examples and Numerical Problems

### Example 1: Calculating Buoyant Force

**Problem:** A cubical block of wood of side 0.1 m floats in water. The density of wood is $800 \, kg/m^3$. Calculate the buoyant force acting on the block.

**Solution:**

1.  **Calculate the volume of the block:**
    $V_{block} = \text{side}^3 = (0.1 \, m)^3 = 0.001 \, m^3$

2.  **Determine the density of the fluid (water):**
    $\rho_{water} = 1000 \, kg/m^3$

3.  **Use Archimedes' Principle:** For a floating object, the buoyant force equals the weight of the displaced fluid. Since the block is floating, it means the volume of displaced water is equal to the volume of the submerged part of the block. To find the buoyant force, we need to know how much of the block is submerged.

    However, we know that for floating: $F_B = W_{object}$.
    $W_{object} = \text{Volume of block} \times \text{Density of block} \times g$
    $W_{object} = 0.001 \, m^3 \times 800 \, kg/m^3 \times 9.81 \, m/s^2$
    $W_{object} = 7.848 \, N$

    Therefore, the buoyant force $F_B = 7.848 \, N$.

**Alternatively, to find the submerged volume first:**

1.  **Weight of the block:**
    $W_{object} = V_{block} \times \rho_{block} \times g = 0.001 \, m^3 \times 800 \, kg/m^3 \times 9.81 \, m/s^2 = 7.848 \, N$

2.  **Buoyant force equals weight for floating:** $F_B = W_{object} = 7.848 \, N$

3.  **Relate $F_B$ to submerged volume:**
    $F_B = V_{submerged} \times \rho_{water} \times g$
    $7.848 \, N = V_{submerged} \times 1000 \, kg/m^3 \times 9.81 \, m/s^2$
    $V_{submerged} = \frac{7.848}{1000 \times 9.81} = 0.0008 \, m^3$

**Answer:** The buoyant force acting on the block is $7.848 \, N$. The submerged volume is $0.0008 \, m^3$.

---

### Example 2: Determining if an Object will Float or Sink

**Problem:** A solid sphere of mass 5 kg and volume $0.006 \, m^3$ is placed in a liquid. The density of the liquid is $900 \, kg/m^3$. Will the sphere float or sink?

**Solution:**

1.  **Calculate the weight of the sphere:**
    $W_{sphere} = m_{sphere} \times g = 5 \, kg \times 9.81 \, m/s^2 = 49.05 \, N$

2.  **Calculate the buoyant force if the sphere were fully submerged:**
    $F_B = V_{sphere} \times \rho_{liquid} \times g$
    $F_B = 0.006 \, m^3 \times 900 \, kg/m^3 \times 9.81 \, m/s^2$
    $F_B = 52.974 \, N$

3.  **Compare the weight and buoyant force:**
    $W_{sphere} = 49.05 \, N$
    $F_B (\text{fully submerged}) = 52.974 \, N$

    Since $F_B > W_{sphere}$, the buoyant force is greater than the weight of the sphere when fully submerged.

**Answer:** The sphere will **float**. It will float such that the buoyant force acting on it equals its weight.

---

### Example 3: Using Relative Density

**Problem:** A solid object has a relative density of 0.8. Will it float or sink in oil of relative density 0.92?

**Solution:**

1.  **Compare relative densities:**
    $SG_{object} = 0.8$
    $SG_{oil} = 0.92$

2.  **Apply the rule:** Since $SG_{object} < SG_{oil}$, the object will float.

**Answer:** The object will **float**.

---

### Example 4: Finding the Submerged Depth

**Problem:** A wooden log of circular cross-section with a diameter of 0.5 m floats in fresh water. The log is uniform and has a length of 3 m. The density of the wood is $750 \, kg/m^3$. Determine the depth to which the log is submerged in water.

**Solution:**

1.  **Calculate the weight of the log:**
    *   Radius of log, $r = \frac{0.5}{2} = 0.25 \, m$
    *   Volume of log, $V_{log} = \pi r^2 \times \text{length} = \pi \times (0.25 \, m)^2 \times 3 \, m = 0.589 \, m^3$
    *   Weight of log, $W_{log} = V_{log} \times \rho_{wood} \times g = 0.589 \, m^3 \times 750 \, kg/m^3 \times 9.81 \, m/s^2 = 4332.4 \, N$

2.  **Buoyant force equals weight for floating:** $F_B = W_{log} = 4332.4 \, N$

3.  **Relate buoyant force to submerged volume:**
    $F_B = V_{submerged} \times \rho_{water} \times g$
    $4332.4 \, N = V_{submerged} \times 1000 \, kg/m^3 \times 9.81 \, m/s^2$
    $V_{submerged} = \frac{4332.4}{1000 \times 9.81} = 0.4416 \, m^3$

4.  **Relate submerged volume to submerged depth:**
    Let $h$ be the submerged depth. The submerged portion of the log is a segment of a circle. The area of the submerged segment is required to calculate the submerged volume for the given length.
    Area of submerged segment ($A_{submerged}$) = $r^2 \cos^{-1}(\frac{r-h}{r}) - (r-h)\sqrt{2rh - h^2}$ (This formula is for the area of a circular segment, which is complex).

    **Easier approach:** Since the log is floating, the weight of the log is balanced by the weight of the displaced water.
    $W_{log} = V_{submerged} \times \rho_{water} \times g$

    Let's work with densities directly. For floating:
    $\rho_{object} V_{object} g = \rho_{fluid} V_{submerged} g$
    $\rho_{object} V_{object} = \rho_{fluid} V_{submerged}$
    $\frac{V_{submerged}}{V_{object}} = \frac{\rho_{object}}{\rho_{fluid}}$

    This ratio of volumes is also equal to the ratio of submerged depth to the total depth if the cross-sectional area is uniform.
    $\frac{A_{submerged}}{A_{total}} = \frac{\rho_{object}}{\rho_{fluid}}$

    Let $h$ be the submerged depth and $D$ be the diameter of the log.
    $\frac{\text{Submerged Volume}}{\text{Total Volume}} = \frac{\text{Submerged Depth}}{\text{Total Depth}}$ is **incorrect** for a cylinder or sphere. It's about the ratio of submerged volume to total volume.

    Let's use the density ratio:
    $\frac{V_{submerged}}{V_{log}} = \frac{\rho_{wood}}{\rho_{water}} = \frac{750 \, kg/m^3}{1000 \, kg/m^3} = 0.75$

    This means 75% of the log's volume is submerged.
    $V_{submerged} = 0.75 \times V_{log} = 0.75 \times 0.589 \, m^3 = 0.44175 \, m^3$ (Matches our earlier calculation).

    Now, we need to find the depth $h$ corresponding to this submerged volume for a circular cross-section.
    Let the width of the submerged part be $2x$ and the submerged depth be $h$. The radius is $r = 0.25 \, m$.
    The area of the submerged portion of the circular cross-section is given by:
    $A_{submerged} = r^2 \cos^{-1}\left(\frac{r-h}{r}\right) - (r-h)\sqrt{r^2 - (r-h)^2}$
    $A_{submerged} = r^2 \cos^{-1}\left(\frac{r-h}{r}\right) - (r-h)\sqrt{2rh - h^2}$

    The submerged volume for the length $L$ is $V_{submerged} = A_{submerged} \times L$.
    $0.44175 \, m^3 = A_{submerged} \times 3 \, m$
    $A_{submerged} = \frac{0.44175}{3} = 0.14725 \, m^2$

    We need to solve for $h$ in the equation for $A_{submerged}$:
    $0.14725 = (0.25)^2 \cos^{-1}\left(\frac{0.25-h}{0.25}\right) - (0.25-h)\sqrt{2(0.25)h - h^2}$
    $0.14725 = 0.0625 \cos^{-1}\left(1 - \frac{h}{0.25}\right) - (0.25-h)\sqrt{0.5h - h^2}$

    This equation is transcendental and usually solved iteratively or using numerical methods/calculators.
    Let's test some values for $h$ (knowing $h$ must be between 0 and 0.5 m):
    *   If $h = 0.25 \, m$ (half submerged), $A_{submerged} = \frac{1}{2} \pi r^2 = \frac{1}{2} \pi (0.25)^2 = 0.098 \, m^2$. This is less than $0.14725 \, m^2$, so $h$ must be greater than $0.25 \, m$.
    *   If $h = 0.4 \, m$, $r-h = 0.25 - 0.4 = -0.15$. This indicates that the submerged portion is greater than a semicircle, which is not correct for a segment formula with $r-h$.

    Let's redefine the angle $\theta$ from the center to the edge of the water line.
    The submerged area can be calculated as:
    Area of sector - Area of triangle
    Area of submerged segment = $r^2 \cos^{-1}\left(\frac{r-h}{r}\right) - (r-h)\sqrt{2rh - h^2}$
    Let's use the angle $\alpha$ from the center to the point where the water level intersects the circle. The submerged depth $h = r(1 - \cos \alpha)$.
    The area of the segment is $r^2 \alpha - \frac{1}{2} r^2 \sin(2\alpha)$.
    If $h$ is the submerged depth, the angle subtended by the submerged portion from the center is $2\theta$ where $\cos \theta = \frac{r-h}{r}$.
    $A_{submerged} = r^2 (\theta - \sin\theta \cos\theta)$. This formula is if $\theta$ is half the angle.
    The correct formula for the area of a circular segment is:
    $A_{segment} = r^2 \cos^{-1}\left(\frac{d}{r}\right) - d\sqrt{r^2 - d^2}$, where $d = r-h$ is the distance from the center to the chord.

    So, $A_{submerged} = (0.25)^2 \cos^{-1}\left(\frac{0.25-h}{0.25}\right) - (0.25-h)\sqrt{(0.25)^2 - (0.25-h)^2}$
    $A_{submerged} = 0.0625 \cos^{-1}\left(1 - \frac{h}{0.25}\right) - (0.25-h)\sqrt{0.0625 - (0.0625 - 0.5h + h^2)}$
    $A_{submerged} = 0.0625 \cos^{-1}\left(1 - 4h\right) - (0.25-h)\sqrt{0.5h - h^2}$

    We need to solve $0.14725 = 0.0625 \cos^{-1}\left(1 - 4h\right) - (0.25-h)\sqrt{0.5h - h^2}$.

    Let's use the ratio of submerged volume to total volume.
    $V_{submerged} = (\text{Area of submerged segment}) \times L$
    $V_{total} = (\pi r^2) \times L$

    $\frac{V_{submerged}}{V_{total}} = \frac{A_{submerged}}{\pi r^2} = \frac{0.14725}{\pi (0.25)^2} = \frac{0.14725}{0.19635} \approx 0.75$

    This confirms our ratio. Now, we need to find $h$ for a circular segment where the area is 75% of the total circle's area.
    Let's check $h = 0.35 \, m$:
    $d = r-h = 0.25 - 0.35 = -0.1 \, m$. This means the center is below the water line. The submerged depth is greater than the radius.
    In this case, the submerged area is the area of the semicircle plus the area of the segment above the center.
    If $h > r$, then $d = h-r$. The angle calculation needs to be adjusted.

    Let's consider the submerged depth $h$. The area of the segment is given by:
    $A = r^2 \cos^{-1}\left(\frac{r-h}{r}\right) - (r-h)\sqrt{2rh-h^2}$
    This formula is for the area of a segment cut by a chord.
    If $h=0.5r$, $A = r^2 \cos^{-1}(0.5) - 0.5r \sqrt{2r(0.5r) - (0.5r)^2} = r^2 (\pi/3) - 0.5r \sqrt{r^2 - 0.25r^2} = r^2 (\pi/3) - 0.5r \sqrt{0.75r^2} = r^2 (\pi/3) - 0.5r (r\sqrt{3}/2) = r^2(\pi/3 - \sqrt{3}/4)$.
    $A = (0.25)^2 (\pi/3 - \sqrt{3}/4) = 0.0625 (1.047 - 0.433) = 0.0625 \times 0.614 \approx 0.038 \, m^2$. This is for half the diameter, which means half the area. Our required area is $0.14725 \, m^2$, which is much larger.

    Let's re-evaluate the geometric calculation.
    The submerged area can be thought of as the area of the sector minus the area of the triangle.
    Let $\phi$ be the angle subtended by the submerged portion at the center. The chord length is $2r \sin(\phi/2)$.
    The submerged depth $h = r(1 - \cos(\phi/2))$.
    The area of the segment is $r^2 \phi - \frac{1}{2} r^2 \sin(\phi)$. (Using $\phi$ as the full angle subtended by the segment).

    We have $A_{submerged} = 0.14725 \, m^2$ and $r = 0.25 \, m$.
    $A_{submerged} = \frac{1}{2} r^2 (\phi - \sin \phi)$, where $\phi$ is in radians.
    $0.14725 = \frac{1}{2} (0.25)^2 (\phi - \sin \phi)$
    $0.14725 = 0.03125 (\phi - \sin \phi)$
    $\phi - \sin \phi = \frac{0.14725}{0.03125} = 4.712$

    This equation is incorrect. The area of the segment formula is usually $r^2 \cos^{-1}\left(\frac{r-h}{r}\right) - (r-h)\sqrt{2rh-h^2}$.
    Let $y = r-h$, the distance from the center to the water line.
    $A_{submerged} = r^2 \cos^{-1}\left(\frac{y}{r}\right) - y\sqrt{r^2-y^2}$
    We know $A_{submerged} = 0.14725 \, m^2$ and $r=0.25 \, m$.
    $0.14725 = (0.25)^2 \cos^{-1}\left(\frac{y}{0.25}\right) - y\sqrt{(0.25)^2-y^2}$
    $0.14725 = 0.0625 \cos^{-1}\left(\frac{y}{0.25}\right) - y\sqrt{0.0625-y^2}$

    If $h$ is the submerged depth, then $y = 0.25 - h$.
    If $h=0.25 \, m$, $y=0$. $A_{submerged} = 0.0625 \cos^{-1}(0) - 0 = 0.0625 \times (\pi/2) \approx 0.098 \, m^2$.
    If $h=0.5 \, m$ (fully submerged), $y=-0.25$. $\cos^{-1}(-1) = \pi$.
    $A_{submerged} = 0.0625 \pi - (-0.25)\sqrt{0.0625 - (-0.25)^2} = 0.0625\pi + 0.25 \times 0 = 0.19635 \, m^2$ (Area of circle).

    We need $A_{submerged} = 0.14725 \, m^2$. This is between $0.098 \, m^2$ and $0.19635 \, m^2$, so $h$ is between $0.25 \, m$ and $0.5 \, m$.
    Let's try $h = 0.35 \, m$. Then $y = 0.25 - 0.35 = -0.1 \, m$.
    $A_{submerged} = 0.0625 \cos^{-1}\left(\frac{-0.1}{0.25}\right) - (-0.1)\sqrt{0.0625 - (-0.1)^2}$
    $A_{submerged} = 0.0625 \cos^{-1}(-0.4) + 0.1\sqrt{0.0625 - 0.01}$
    $A_{submerged} = 0.0625 \times 1.982 + 0.1\sqrt{0.0525}$
    $A_{submerged} = 0.1239 + 0.1 \times 0.229 = 0.1239 + 0.0229 = 0.1468 \, m^2$.

    This is very close to $0.14725 \, m^2$.

**Answer:** The log is submerged to a depth of approximately **0.35 m**.

---

## 5. Practice Questions

1.  **Question:** A rectangular block of dimensions $2 \, m \times 1 \, m \times 0.5 \, m$ floats in fresh water. The mass of the block is $1500 \, kg$.
    *   (a) Calculate the weight of the block.
    *   (b) Calculate the buoyant force acting on the block when floating.
    *   (c) Calculate the submerged volume of the block.
    *   (d) Calculate the depth to which the block is submerged.

    **Answer:**
    *   (a) $W = 1500 \, kg \times 9.81 \, m/s^2 = 14715 \, N$
    *   (b) $F_B = W = 14715 \, N$
    *   (c) $V_{submerged} = \frac{F_B}{\rho_{water} \times g} = \frac{14715 \, N}{1000 \, kg/m^3 \times 9.81 \, m/s^2} = 1.5 \, m^3$
    *   (d) The block has dimensions $2 \, m \times 1 \, m \times 0.5 \, m$. Assume it floats with the $2 \, m \times 1 \, m$ side horizontal. Let $h$ be the submerged depth.
        $V_{submerged} = (\text{length} \times \text{width}) \times h$
        $1.5 \, m^3 = (2 \, m \times 1 \, m) \times h$
        $1.5 \, m^3 = 2 \, m^2 \times h$
        $h = \frac{1.5}{2} = 0.75 \, m$. This is not possible as the total height is $0.5 \, m$.
        This means the block must be floating on its side. The total volume is $2 \times 1 \times 0.5 = 1 \, m^3$.
        Let's recheck calculations.
        $V_{block} = 2 \times 1 \times 0.5 = 1 \, m^3$.
        Weight of block $= 1 \, m^3 \times \rho_{block} \times g$.
        The density of the block is $\rho_{block} = \frac{m_{block}}{V_{block}} = \frac{1500 \, kg}{1 \, m^3} = 1500 \, kg/m^3$.
        Since $\rho_{block} > \rho_{water}$, the block will **sink**. The problem statement says it floats, which implies a contradiction or a different scenario.

        Let's assume the mass was meant to be smaller for it to float.
        **Revised Question 1:** A rectangular block of dimensions $2 \, m \times 1 \, m \times 0.5 \, m$ floats in fresh water. The mass of the block is $750 \, kg$.
        *   (a) Calculate the weight of the block.
        *   (b) Calculate the buoyant force acting on the block when floating.
        *   (c) Calculate the submerged volume of the block.
        *   (d) Calculate the depth to which the block is submerged (assume the $2 \, m \times 1 \, m$ side is horizontal).

        **Revised Answer:**
        *   (a) $W = 750 \, kg \times 9.81 \, m/s^2 = 7357.5 \, N$
        *   (b) $F_B = W = 7357.5 \, N$
        *   (c) $V_{submerged} = \frac{F_B}{\rho_{water} \times g} = \frac{7357.5 \, N}{1000 \, kg/m^3 \times 9.81 \, m/s^2} = 0.75 \, m^3$
        *   (d) Assume the $2 \, m \times 1 \, m$ side is horizontal. Let $h$ be the submerged depth.
            $V_{submerged} = (\text{length} \times \text{width}) \times h$
            $0.75 \, m^3 = (2 \, m \times 1 \, m) \times h$
            $0.75 \, m^3 = 2 \, m^2 \times h$
            $h = \frac{0.75}{2} = 0.375 \, m$
            This is less than the total height of $0.5 \, m$, so this is valid.

2.  **Question:** A body weighs $200 \, N$ in air and $150 \, N$ when submerged in water. Calculate:
    *   (a) The buoyant force acting on the body.
    *   (b) The volume of the body.
    *   (c) The relative density of the body.

    **Answer:**
    *   (a) Buoyant Force ($F_B$) = Weight in air - Weight in water
        $F_B = 200 \, N - 150 \, N = 50 \, N$
    *   (b) $F_B = V_{body} \times \rho_{water} \times g$
        $50 \, N = V_{body} \times 1000 \, kg/m^3 \times 9.81 \, m/s^2$
        $V_{body} = \frac{50}{1000 \times 9.81} \approx 0.005097 \, m^3$
    *   (c) Weight of the body in air is its actual weight. $W_{body} = 200 \, N$.
        Density of body $\rho_{body} = \frac{W_{body}}{V_{body} \times g} = \frac{200 \, N}{0.005097 \, m^3 \times 9.81 \, m/s^2} \approx \frac{200}{49.99} \approx 4.00 \, kg/m^3$? (Units are wrong here)
        Let's calculate density from mass: $W_{body} = m_{body} \times g \implies m_{body} = \frac{200 \, N}{9.81 \, m/s^2} \approx 20.387 \, kg$.
        $\rho_{body} = \frac{m_{body}}{V_{body}} = \frac{20.387 \, kg}{0.005097 \, m^3} \approx 4000 \, kg/m^3$.
        Relative Density ($SG_{body}$) = $\frac{\rho_{body}}{\rho_{water}} = \frac{4000 \, kg/m^3}{1000 \, kg/m^3} = 4$.

        Alternatively, using weights:
        $SG_{body} = \frac{\text{Weight of body}}{\text{Weight of displaced fluid}} = \frac{\text{Weight in air}}{\text{Buoyant Force}}$
        $SG_{body} = \frac{200 \, N}{50 \, N} = 4$.

---

## 6. Important Points to Remember

*   **Buoyancy is an upward force** exerted by a fluid.
*   **Archimedes' Principle is fundamental:** Buoyant force = Weight of displaced fluid.
*   **For a floating object:** Buoyant force = Weight of the object.
*   **For a sinking object:** Weight of the object > Buoyant force (even when fully submerged).
*   **For an object that remains suspended:** Weight of the object = Buoyant force (when fully submerged).
*   **Relative density (Specific Gravity)** is a key indicator of whether an object will float or sink in a given fluid. If $SG_{object} < SG_{fluid}$, it floats.
*   The **center of buoyancy** is the centroid of the submerged volume. This becomes important for stability, which is discussed in later modules.
*   When calculating forces or volumes, ensure **consistent units**.

---
This concludes the basic concepts of buoyancy and floatation. The next steps in Module 2 will likely involve determining the center of pressure on submerged surfaces, which is a separate but related topic concerning forces exerted by fluids.
