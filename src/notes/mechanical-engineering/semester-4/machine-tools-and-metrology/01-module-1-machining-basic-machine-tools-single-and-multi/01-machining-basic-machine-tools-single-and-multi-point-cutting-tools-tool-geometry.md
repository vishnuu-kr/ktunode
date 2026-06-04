---
title: "Machining; basic machine tools; single and multi-point cutting tools, tool geometry and materials, mechanics of chip formation: orthogonal and oblique cutting, shear angle, velocity relationship; merchant's analysis of cutting forces; cutting power estimation, tool life, and wear; economics of machining, numerical problems"
subject: "MACHINE TOOLS AND METROLOGY"
module: "Module 1: Machining; basic machine tools; single and multi"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f06"
status: "completed"
scrapedAt: "2026-05-20T17:54:01.203Z"
---
# Machine Tools and Metrology: Module 1 - Machining

This module introduces the fundamental concepts of machining, focusing on basic machine tools, cutting tools, the mechanics of chip formation, tool life, wear, and the economics of machining.

---

## 1. Machining: An Overview

**Definition:** Machining is a material removal process that involves shaping a workpiece by cutting away unwanted material using a cutting tool. This process is crucial for achieving desired dimensions, shapes, and surface finishes.

**Importance in Manufacturing:**
*   Achieving high precision and accuracy.
*   Producing complex geometries.
*   Creating smooth and functional surfaces.
*   Essential for finishing operations after casting, forging, or forming.

**Key Concepts:**
*   **Workpiece:** The material being machined.
*   **Cutting Tool:** The sharp edge that removes material from the workpiece.
*   **Machine Tool:** The machine that holds and drives the workpiece and the cutting tool, providing controlled relative motion.
*   **Chip:** The small piece of material removed from the workpiece during cutting.

**Reference:** *Elements of Workshop Technology Vol-II Machine Tools* by S K Hajra Choudhury & Nirjhar Roy, Chapter 1.

---

## 2. Basic Machine Tools

Machine tools are the backbone of manufacturing, providing the necessary rigidity, power, and control for machining operations.

### 2.1 Classification of Machine Tools

Machine tools can be classified based on various criteria:

*   **By Function:**
    *   **Turning Machines:** Lathes, Turret Lathes, Automatic Lathes
    *   **Drilling Machines:** Pillar drills, Bench drills, Radial drills
    *   **Milling Machines:** Horizontal, Vertical, Universal, Plano-milling
    *   **Grinding Machines:** Cylindrical, Surface, Tool grinders
    *   **Boring Machines:** Horizontal boring machines, Vertical boring machines
    *   **Shaping and Planing Machines:** Shapers, Planers
    *   **Saws:** Bandsaws, Hacksaws

*   **By Drive Mechanism:**
    *   Manual
    *   Motor-driven

*   **By Control System:**
    *   Manual Control
    *   Semi-automatic
    *   Automatic
    *   CNC (Computer Numerical Control)

### 2.2 Key Basic Machine Tools

**2.2.1 Lathe:**
*   **Function:** Primarily used for turning operations, where the workpiece rotates and the cutting tool moves linearly to remove material.
*   **Operations:** Turning, facing, threading, knurling, parting, drilling, boring.
*   **Components:** Headstock (spindle, gears), Tailstock (support, holding tools), Carriage (tool post, cross-slide, compound rest), Bed, Lead Screw, Feed Rod.
*   **CO1 Alignment:** Describes turning operations on a lathe.

**2.2.2 Drilling Machine:**
*   **Function:** Used to create holes in a workpiece. The drill bit rotates and advances axially into the workpiece.
*   **Operations:** Drilling, reaming, counter-sinking, counter-boring, tapping.
*   **Components:** Column, Base, Table, Spindle, Drill chuck, Motor.
*   **CO1 Alignment:** Describes drilling operations.

**2.2.3 Milling Machine:**
*   **Function:** Used to remove material by feeding a rotating multi-point cutting tool across the workpiece.
*   **Operations:** Face milling, peripheral milling (slab milling, down milling, up milling), slotting, gear cutting.
*   **Components:** Spindle, Table, Knee, Column, Overarm, Cutter.
*   **CO1 Alignment:** Describes milling operations.

**2.2.4 Shaping Machine:**
*   **Function:** Used for producing flat surfaces by a reciprocating motion of the cutting tool. The workpiece is usually stationary and the tool moves.
*   **Operations:** Shaping flat surfaces, keyways, V-grooves.
*   **Components:** Bed, Standard, Saddle, Table, Tool head, Ram.
*   **CO1 Alignment:** Describes shaping operations.

**2.2.5 Planing Machine:**
*   **Function:** Similar to a shaper but for larger workpieces. The workpiece moves back and forth under a stationary cutting tool.
*   **Operations:** Planing large flat surfaces.
*   **Components:** Bed, Table, Housing, Cross-rail, Tool head.
*   **CO1 Alignment:** Describes planing operations.

**Important Point:** Each machine tool is designed for specific types of machining operations, offering different advantages in terms of precision, workpiece size, and complexity.

**Reference:** *Elements of Workshop Technology Vol-II Machine Tools* by S K Hajra Choudhury & Nirjhar Roy, Chapters 2-6.

---

## 3. Single and Multi-Point Cutting Tools

Cutting tools are classified based on the number of cutting edges engaged in removing material at any given time.

### 3.1 Single-Point Cutting Tools

*   **Definition:** A cutting tool with a single cutting edge.
*   **Examples:** Tools used in lathes, shapers, and planers.
*   **Components:** Shank (body of the tool), Head (working end), Cutting edge.
*   **Tool Geometry:** Crucial for efficient cutting, chip control, and tool life.

#### 3.1.1 Tool Geometry (Single-Point Tool)

The geometry is defined by various angles that are important for cutting performance. These angles are typically measured relative to the tool shank and the direction of cutting.

*   **Back Rake Angle ($\alpha_b$):** The angle between the top surface of the tool and a plane perpendicular to the tool's cutting edge, measured in the plane of the rake face.
    *   **Positive Back Rake:** Reduces cutting forces, facilitates chip flow, useful for soft materials.
    *   **Zero Back Rake:** No inclination of the top surface.
    *   **Negative Back Rake:** Increases cutting forces, better for hard materials, improves tool strength.
*   **Side Rake Angle ($\alpha_s$):** The angle between the top surface of the tool and a plane parallel to the direction of cut and perpendicular to the cutting edge. Affects chip flow and cutting forces.
*   **End Relief Angle ($\beta_e$):** The angle between the end cutting edge and a plane tangent to the side cutting edge at the nose. Prevents the flank from rubbing against the workpiece.
*   **Side Relief Angle ($\beta_s$):** The angle between the side cutting edge and a plane tangent to the end cutting edge at the nose. Prevents the flank from rubbing against the workpiece.
*   **End Cutting Edge Angle ($\gamma_e$):** The angle between the end cutting edge and a line perpendicular to the tool shank. Affects the surface finish and the strength of the nose.
*   **Side Cutting Edge Angle ($\gamma_s$):** The angle between the side cutting edge and the tool shank. Affects chip flow and cutting forces.
*   **Nose Radius (r):** The radius at the tip of the tool.
    *   **Effect:** Improves surface finish, reduces chipping at the nose, allows for higher feed rates. Too large a radius can increase cutting forces and cause chatter.

**Reference:** *Elements of Workshop Technology Vol-II Machine Tools* by S K Hajra Choudhury & Nirjhar Roy, Chapter 7.

#### 3.1.2 Tool Materials

The choice of tool material is critical for achieving high cutting speeds and long tool life.

*   **High Carbon Steels:** Older materials, low hot hardness and wear resistance. Used for low-speed machining.
*   **High-Speed Steels (HSS):** Tungsten and Molybdenum based. Retain hardness at higher temperatures, good wear resistance. Used for a wide range of machining.
*   **Cemented Carbides (Carbides):** Sintered materials made from fine particles of carbides (e.g., Tungsten Carbide, Titanium Carbide) bonded by a metallic binder (e.g., Cobalt). Excellent hardness, high wear resistance, high hot hardness. Used for high-speed machining of most materials. Available in various grades (e.g., straight carbides, TiC coated carbides).
*   **Ceramics:** Aluminum Oxide and Silicon Nitride based. Extremely hard and brittle, excellent hot hardness and wear resistance. Used for high-speed machining of cast iron and hardened steels.
*   **Cubic Boron Nitride (CBN):** Second hardest material after diamond. Excellent hot hardness and wear resistance. Used for machining hard ferrous materials.
*   **Diamond:** Natural or Polycrystalline Diamond (PCD). Hardest known material. Used for machining non-ferrous metals, plastics, and composites.

**Reference:** *Manufacturing Science* by Amitabha Ghosh & Asok Kumar Mallik, Chapter 15.

### 3.2 Multi-Point Cutting Tools

*   **Definition:** A cutting tool with multiple cutting edges.
*   **Examples:** Drills, milling cutters, reamers, broaches.
*   **Features:** Cutting edges are often designed with rake and clearance angles. They remove material in stages.
*   **CO1 Alignment:** Describes the function of multi-point tools in drilling and milling.

#### 3.2.1 Geometry of Multi-Point Tools (Example: Twist Drill)

*   **Point Angle:** The angle at the tip of the drill.
*   **Lip Clearance Angle:** Similar to relief angles on single-point tools, prevents rubbing.
*   **Helix Angle:** Affects chip evacuation.

**Reference:** *Elements of Workshop Technology Vol-II Machine Tools* by S K Hajra Choudhury & Nirjhar Roy, Chapters 8 & 9.

---

## 4. Mechanics of Chip Formation

Understanding how chips are formed is fundamental to controlling the machining process.

### 4.1 Orthogonal Cutting

*   **Definition:** A simplified cutting process where the cutting tool is perpendicular to the direction of cutting velocity and the cutting edge is infinitely long and sharp. The chip flows parallel to the rake face.
*   **Characteristics:** Only two main components of cutting force: cutting force ($F_c$) and thrust force ($F_p$).
*   **Model:** Widely used for theoretical analysis of cutting mechanics.

### 4.2 Oblique Cutting

*   **Definition:** A more realistic cutting process where the cutting edge is not perpendicular to the direction of cutting velocity. The tool has a side cutting edge angle and/or rake angle is not zero.
*   **Characteristics:** Cutting force ($F_c$) has three components, thrust force ($F_p$), and feed force ($F_f$).
*   **Model:** More complex analysis but closer to practical machining operations like turning and milling.

**Reference:** *Manufacturing Science* by Amitabha Ghosh & Asok Kumar Mallik, Chapter 14.

### 4.3 Shear Angle ($\phi$)

*   **Definition:** The angle of the shear plane in orthogonal cutting, which is the plane along which the material shears to form the chip.
*   **Significance:** The shear angle is a critical parameter influencing cutting forces, chip thickness, and machining temperatures.
*   **Factors Affecting Shear Angle:** Tool geometry (especially rake angle) and material properties.
*   **Relationship:** Generally, a larger shear angle leads to lower cutting forces and less friction.

### 4.4 Velocity Relationship

In orthogonal cutting, the velocity vectors are related by the geometry of the cutting process.

*   **Cutting Velocity ($V$):** The relative velocity between the workpiece and the cutting tool.
*   **Chip Velocity ($V_c$):** The velocity at which the chip moves along the rake face.
*   **Shear Velocity ($V_s$):** The velocity at which the material moves along the shear plane.
*   **Chip Thickness ($t_c$):** The thickness of the chip after cutting.
*   **Uncut Chip Thickness ($t$):** The depth of cut.
*   **Rake Angle ($\alpha$):** The rake angle of the tool.

**Key Relationships (Orthogonal Cutting):**

*   **Shear Plane Angle ($\phi$):**
    $\tan \phi = \frac{r \cos \alpha}{1 - r \sin \alpha}$
    where $r = t/t_c$ is the cutting ratio.

*   **Cutting Ratio ($r$):**
    $r = \frac{\text{Uncut chip thickness}}{\text{Chip thickness}} = \frac{t}{t_c}$
    Since $t_c < t$, the cutting ratio $r$ is always less than 1.

*   **Velocity Relationships:**
    $\frac{V_c}{V} = \frac{\cos \alpha}{\cos(\phi - \alpha)}$
    $\frac{V_s}{V} = \frac{\sin \phi}{\cos(\phi - \alpha)}$

**Important Point:** The shear angle and velocity relationships are derived assuming ideal conditions in orthogonal cutting. They provide a theoretical basis for understanding the mechanics.

**Reference:** *Manufacturing Science* by Amitabha Ghosh & Asok Kumar Mallik, Chapter 14.

---

## 5. Merchant's Analysis of Cutting Forces

Merchant's theory is a fundamental model used to predict cutting forces based on the mechanics of chip formation. It's based on the assumption that the shear process occurs along a single plane and that the resultant cutting force acts to minimize the work done in shear.

### 5.1 Merchant's Hypothesis

Merchant's theory states that the resultant force ($R$) in orthogonal cutting bisects the angle between the cutting velocity vector ($V$) and the shear velocity vector ($V_s$). This implies that the system seeks to minimize the energy dissipated during cutting.

### 5.2 Merchant's Equation for Shear Angle

Based on his hypothesis, Merchant derived an equation for the shear angle:

$2\phi + \lambda - \alpha = 90^\circ$

where:
*   $\phi$ is the shear angle.
*   $\lambda$ is the friction angle ($\tan \lambda = \mu$, where $\mu$ is the coefficient of friction between chip and tool).
*   $\alpha$ is the rake angle.

From this, the shear angle can be expressed as:

$\phi = 45^\circ + \frac{\alpha - \lambda}{2}$

**Important Point:** This equation suggests that the shear angle is influenced by both the rake angle and the friction between the chip and the tool. It's an empirical relationship that often provides a good approximation.

### 5.3 Force Components

The resultant force ($R$) can be resolved into:
*   **Cutting Force ($F_c$):** The force acting in the direction of cutting velocity.
*   **Thrust Force ($F_p$):** The force acting perpendicular to the cutting velocity.

The relationship between $R$, $F_c$, and $F_p$ depends on the friction angle and the shear angle.

**Reference:** *Manufacturing Science* by Amitabha Ghosh & Asok Kumar Mallik, Chapter 14.

---

## 6. Cutting Power Estimation

Power consumed in machining is a critical factor for selecting machine tools and calculating energy efficiency.

### 6.1 Main Cutting Power ($P_c$)

*   **Definition:** The power consumed to overcome the cutting force and perform the material removal.
*   **Formula:**
    $P_c = F_c \times V$
    where:
    *   $F_c$ is the main cutting force (in Newtons, N).
    *   $V$ is the cutting speed (in meters per second, m/s).
    *   $P_c$ is in Watts (W).

**Units Conversion:**
*   If cutting speed is in m/min, $V_{m/s} = V_{m/min} / 60$.
*   If cutting force is in kgf, $F_{c(N)} = F_{c(kgf)} \times 9.81$.

### 6.2 Specific Cutting Energy ($u$)

*   **Definition:** The energy required to remove a unit volume of material.
*   **Formula:**
    $u = \frac{P_c}{\text{Volumetric removal rate}}$
    $u = \frac{F_c \times V}{V \times w \times t} = \frac{F_c}{w \times t}$
    where:
    *   $w$ is the width of cut (in meters, m).
    *   $t$ is the depth of cut (in meters, m).
    *   $V \times w \times t$ is the volumetric removal rate (in m³/s).

Specific cutting energy is a characteristic of the workpiece material and the cutting conditions.

### 6.3 Cutting Power Estimation Steps:

1.  **Determine Cutting Force ($F_c$):**
    *   Using empirical formulas (e.g., based on material, cutting speed, feed, depth of cut).
    *   Using specific cutting energy: $F_c = u \times w \times t$.
2.  **Determine Cutting Speed ($V$):** Based on tool material, workpiece material, and desired tool life.
3.  **Calculate Main Cutting Power ($P_c$):** $P_c = F_c \times V$.
4.  **Consider Machine Efficiency:** The actual power required from the motor will be higher due to machine inefficiencies.
    $P_{motor} = P_c / \eta_{machine}$
    where $\eta_{machine}$ is the machine efficiency (typically 0.7 to 0.9).

**CO2 Alignment:** This section directly helps in determining power consumption.

**Reference:** *Manufacturing Science* by Amitabha Ghosh & Asok Kumar Mallik, Chapter 16.

---

## 7. Tool Life and Wear

### 7.1 Tool Life ($T$)

*   **Definition:** The total time or amount of material that a cutting tool can machine before it becomes ineffective due to wear, chipping, or breakage.
*   **Measurement:** Can be expressed in minutes of cutting time, number of pieces machined, or total length of cut.
*   **Criteria for Failure:**
    *   **Excessive Wear:** Wear land on the flank reaches a critical size.
    *   **Catastrophic Failure:** Chipping or breakage of the cutting edge.
    *   **Surface Finish Degradation:** Workpiece surface finish exceeds acceptable limits.
    *   **Dimensional Accuracy Loss:** Workpiece dimensions drift out of tolerance.

### 7.2 Tool Wear

*   **Definition:** The gradual removal of material from the cutting tool's surface during machining.
*   **Types of Wear:**
    *   **Flank Wear:** Wear on the surfaces adjacent to the cutting edge (side flank and end flank). Characterized by a wear land.
    *   **Crater Wear:** Wear on the top surface of the tool, in the region where the chip flows.
    *   **Nose Wear:** Wear at the nose radius of the tool.
    *   **Chipping:** Small pieces breaking off the cutting edge.
    *   **Plastic Deformation:** The cutting edge deforming under high temperature and pressure.
    *   **Adhesion/Built-Up Edge (BUE):** Material from the workpiece adheres to the cutting edge, which can then break off, taking tool material with it.

*   **Causes of Wear:**
    *   **Abrasion:** Hard particles in the workpiece material scratching the tool.
    *   **Adhesion:** Material transfer and welding between the chip and the tool.
    *   **Diffusion:** Atomic exchange between the tool and workpiece at high temperatures.
    *   **Fatigue:** Cyclic stresses causing crack initiation and propagation.
    *   **Oxidation:** Chemical reactions with the atmosphere at high temperatures.

### 7.3 Taylor's Tool Life Equation

*   **Equation:** $V T^n = C$
    where:
    *   $V$ is the cutting speed (m/min).
    *   $T$ is the tool life (min).
    *   $n$ is the Taylor's exponent (depends on tool material, workpiece material, and cutting conditions).
    *   $C$ is a constant (Taylor's constant, depends on the specific conditions).

*   **Logarithmic Form:** $\log V + n \log T = \log C$
    This indicates a linear relationship between $\log V$ and $\log T$.

**Interpretation:**
*   A higher $n$ value means the tool life is less sensitive to cutting speed.
*   For a given tool-workpiece combination, increasing cutting speed ($V$) decreases tool life ($T$), and vice versa.

**Important Point:** Taylor's equation is a simplified model. Real tool life can be affected by feed, depth of cut, and other factors. For multi-variable conditions, more complex empirical models are used.

**Reference:** *Manufacturing Science* by Amitabha Ghosh & Asok Kumar Mallik, Chapter 16.

---

## 8. Economics of Machining

The goal of machining operations is to produce parts at the lowest possible cost while meeting quality requirements.

### 8.1 Cost Components

*   **Direct Labor Cost:** Wages paid to the machine operator.
*   **Machine Operating Cost:** Depreciation, power consumption, maintenance, overheads.
*   **Tooling Cost:** Cost of cutting tools, regrinding, or replacement.
*   **Workpiece Cost:** Cost of the raw material.

### 8.2 Machining Time

*   **Definition:** The time required to machine a single workpiece.
*   **Components:**
    *   **Setup Time:** Time to set up the machine, load workpiece, etc. (often considered fixed per batch).
    *   **Machining Time ($T_m$):** Time spent cutting.
        *   For turning: $T_m = \frac{L}{f \times N}$ or $\frac{L}{f \times V/\pi D}$ (where L is length of cut, f is feed, N is RPM, V is cutting speed, D is workpiece diameter).
        *   For milling: $T_m = \frac{L}{f_{m} \times N \times z}$ (where $L$ is table travel, $f_m$ is feed per tooth, $N$ is cutter RPM, $z$ is number of teeth).
    *   **Tool Changing Time ($T_t$):** Time taken to change or regrind a tool.
    *   **Handling Time:** Time to load and unload workpiece.

### 8.3 Optimum Cutting Speed for Minimum Cost

Minimizing cost involves balancing machining time cost against tooling cost.

*   **Total Cost ($C_{total}$):**
    $C_{total} = \text{Labor Cost} + \text{Machine Cost} + \text{Tooling Cost}$

    Considering machining time ($T_m$) and tool life ($T$), the number of tools needed is $N_{tools} = T_m / T$.
    Tooling cost per piece $\approx \frac{\text{Tool Cost} + \text{Regrinding Cost}}{T} \times T_m$.

    If we assume:
    *   $C_L$ = Labor and machine cost per minute.
    *   $C_T$ = Tool cost per tool.
    *   $n$ = Taylor exponent.
    *   $V T^n = C$ => $T = C^{1/n} V^{-1/n}$.

    The total cost per piece can be approximated by:
    $C_{piece} \approx C_L \times T_m + C_T \times \frac{T_m}{T}$

    Substituting $T_m = \frac{L}{f \times V}$ and $T = C^{1/n} V^{-1/n}$:
    $C_{piece} \approx C_L \times \frac{L}{f \times V} + C_T \times \frac{L}{f \times V} \times \frac{V^{1/n}}{C^{1/n}}$
    $C_{piece} \approx \frac{L}{f} \left( \frac{C_L}{V} + \frac{C_T}{C^{1/n}} V^{\frac{1}{n}-1} \right)$

To find the minimum cost, differentiate $C_{piece}$ with respect to $V$ and set it to zero:

$\frac{dC_{piece}}{dV} = \frac{L}{f} \left( - \frac{C_L}{V^2} + \frac{C_T}{C^{1/n}} (\frac{1}{n}-1) V^{\frac{1}{n}-2} \right) = 0$

This leads to the optimum cutting speed ($V_{opt}$):

$V_{opt} = C \left( \frac{C_L}{n C_T} \right)^{\frac{n}{1-n}}$

**Important Point:** This equation shows that the optimal cutting speed is a compromise between the cost of machining time and the cost of tooling. Higher tool costs or lower labor/machine costs lead to higher optimum cutting speeds.

**CO2 Alignment:** This section helps understand how machining time and tool life influence cost and production efficiency.

**Reference:** *Manufacturing Science* by Amitabha Ghosh & Asok Kumar Mallik, Chapter 16.

---

## 9. Numerical Problems and Practice Exercises

**Problem 1: Orthogonal Cutting Velocity Relationship**

In an orthogonal cutting operation, the uncut chip thickness ($t$) is 0.1 mm. The chip thickness ($t_c$) is 0.25 mm, and the rake angle ($\alpha$) is 10 degrees. Calculate:
a) The cutting ratio ($r$).
b) The shear angle ($\phi$).
c) The ratio of chip velocity to cutting velocity ($V_c/V$).

**Solution:**
a) Cutting ratio $r = t / t_c = 0.1 \text{ mm} / 0.25 \text{ mm} = 0.4$.
b) $\tan \phi = \frac{r \cos \alpha}{1 - r \sin \alpha} = \frac{0.4 \cos 10^\circ}{1 - 0.4 \sin 10^\circ} = \frac{0.4 \times 0.9848}{1 - 0.4 \times 0.1736} = \frac{0.39392}{1 - 0.06944} = \frac{0.39392}{0.93056} \approx 0.4233$
   $\phi = \arctan(0.4233) \approx 22.94^\circ$.
c) $\frac{V_c}{V} = \frac{\cos \alpha}{\cos(\phi - \alpha)} = \frac{\cos 10^\circ}{\cos(22.94^\circ - 10^\circ)} = \frac{0.9848}{\cos(12.94^\circ)} = \frac{0.9848}{0.9747} \approx 1.010$.

**Problem 2: Power Estimation**

During turning of a mild steel rod, the cutting force ($F_c$) is 1200 N. The cutting speed ($V$) is 60 m/min. The depth of cut ($t$) is 2 mm and the feed ($f$) is 0.2 mm/rev. The machine efficiency is 80%. Calculate:
a) The main cutting power in kW.
b) The power required from the motor in kW.

**Solution:**
Convert cutting speed to m/s: $V = 60 \text{ m/min} / 60 \text{ s/min} = 1 \text{ m/s}$.
a) Main cutting power $P_c = F_c \times V = 1200 \text{ N} \times 1 \text{ m/s} = 1200 \text{ W}$.
   $P_c = 1200 \text{ W} / 1000 \text{ W/kW} = 1.2 \text{ kW}$.
b) Power required from the motor $P_{motor} = P_c / \eta_{machine} = 1.2 \text{ kW} / 0.80 = 1.5 \text{ kW}$.

**Problem 3: Taylor's Tool Life Equation**

Using a particular HSS tool on a mild steel, the following data is obtained:
*   At 30 m/min, tool life is 120 minutes.
*   At 45 m/min, tool life is 30 minutes.

Calculate:
a) The Taylor's exponent ($n$).
b) The constant ($C$).
c) The cutting speed for a tool life of 60 minutes.

**Solution:**
Using Taylor's equation $V T^n = C$.
Taking logs: $\log V + n \log T = \log C$.

From the given data:
1) $\log 30 + n \log 120 = \log C$
   $1.477 + n(2.079) = \log C$
2) $\log 45 + n \log 30 = \log C$
   $1.653 + n(1.477) = \log C$

Equating the two expressions for $\log C$:
$1.477 + 2.079n = 1.653 + 1.477n$
$2.079n - 1.477n = 1.653 - 1.477$
$0.602n = 0.176$
a) $n = 0.176 / 0.602 \approx 0.292$.

Now, calculate $C$ using either equation. Using equation 1:
$\log C = 1.477 + 0.292 \times 2.079 = 1.477 + 0.606 = 2.083$
b) $C = 10^{2.083} \approx 121.1$.

c) To find the cutting speed for a tool life of 60 minutes:
   $V (60)^{0.292} = 121.1$
   $V \times 4.825 \approx 121.1$
   $V = 121.1 / 4.825 \approx 25.1 \text{ m/min}$.

**Practice Question 1:**
In an orthogonal cutting operation with a rake angle of $15^\circ$, the uncut chip thickness is $0.15$ mm and the chip thickness is $0.3$ mm. Calculate the shear angle and the coefficient of friction. Assume Merchant's analysis is applicable.
*(Hint: First find the cutting ratio, then the shear angle using the standard formula, and finally use Merchant's shear angle equation to find the friction angle).*

**Answer:**
Cutting Ratio ($r$) = 0.15 / 0.3 = 0.5
Shear Angle ($\phi$) = $\arctan(\frac{0.5 \cos 15^\circ}{1 - 0.5 \sin 15^\circ}) = \arctan(\frac{0.5 \times 0.9659}{1 - 0.5 \times 0.2588}) = \arctan(\frac{0.48295}{1 - 0.1294}) = \arctan(\frac{0.48295}{0.8706}) \approx 29.06^\circ$.
Merchant's Equation: $2\phi + \lambda - \alpha = 90^\circ$
$2(29.06^\circ) + \lambda - 15^\circ = 90^\circ$
$58.12^\circ + \lambda - 15^\circ = 90^\circ$
$43.12^\circ + \lambda = 90^\circ$
$\lambda = 90^\circ - 43.12^\circ = 46.88^\circ$.
Coefficient of friction ($\mu$) = $\tan \lambda = \tan 46.88^\circ \approx 1.067$.

**Practice Question 2:**
A turning operation is performed at a cutting speed of 100 m/min. The tool life is 40 minutes. If the cutting speed is increased to 150 m/min, what will be the new tool life? Assume Taylor's equation applies and $n=0.25$.
*(Hint: Use the ratio of the two conditions to find the new tool life without needing to calculate C).*

**Answer:**
$V_1 T_1^n = V_2 T_2^n$
$100 \times (40)^{0.25} = 150 \times T_2^{0.25}$
$100 \times 2.5118 \approx 150 \times T_2^{0.25}$
$251.18 \approx 150 \times T_2^{0.25}$
$T_2^{0.25} \approx 251.18 / 150 \approx 1.6745$
$T_2 \approx (1.6745)^4 \approx 7.81$ minutes.

---

## 10. Key Points to Remember

*   **Machine Tools:** Classify them by function and understand their primary operations.
*   **Cutting Tools:** Single-point vs. Multi-point. Geometry (rake, relief, cutting angles, nose radius) is crucial.
*   **Tool Materials:** HSS, Carbides, Ceramics, CBN, Diamond – each suited for different applications based on hardness and hot hardness.
*   **Chip Formation:** Orthogonal is a simplified model; Oblique is more realistic. Shear angle is key.
*   **Velocity Relationships:** Understand how cutting speed, chip velocity, and shear velocity are linked.
*   **Merchant's Analysis:** Provides an equation for shear angle based on friction and rake angle.
*   **Power:** Main cutting power ($P_c = F_c \times V$). Motor power accounts for machine efficiency.
*   **Tool Life:** Determined by wear criteria. Taylor's Equation ($V T^n = C$) relates cutting speed and tool life.
*   **Economics:** Balancing machining time costs with tooling costs to find optimum cutting parameters.

---

## 11. Alignment with Course Outcomes

*   **CO1: Describe various machine tool operations (Knowledge Level: K2)**
    *   Covered by sections 2 (Basic Machine Tools) and 3 (Cutting Tools). Examples of operations on lathes, drills, mills, etc., are described.
*   **CO2: Determine machining time and power consumption in various machining processes (Knowledge Level: K3)**
    *   Covered by sections 6 (Power Estimation) and 8 (Economics of Machining), which deal with calculating power and time. Numerical problems reinforce this.
*   **CO3: Explain limits, fits and tolerances (Knowledge Level: K2)**
    *   *Note: This CO is not directly covered in the provided topic description. It would typically be addressed in later modules related to Metrology.*
*   **CO4: Identify the uses of various advanced measuring instruments (Knowledge Level: K1)**
    *   *Note: This CO is not directly covered in the provided topic description. It would typically be addressed in later modules related to Metrology.*

---

This comprehensive set of notes covers the core concepts of Module 1, providing a strong foundation for understanding machining processes, cutting tools, and their associated mechanics and economics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
