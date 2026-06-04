---
title: "Rigid pavements:  Types of stresses: wheel load stresses, temperature stresses, Critical combination of stresses - worked out problem, Functions of longitudinal, contraction and expansion joints (Design not expected)"
subject: "TRANSPORTATION ENGINEERING"
module: "Module 2: Highway materials:  Desirable properties and testing of road aggregates, bituminous materials and sub grade soil"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810dd7"
status: "completed"
scrapedAt: "2026-05-20T18:51:35.379Z"
---
# Transportation Engineering: Module 2 - Highway Materials & Rigid Pavements

## Topic: Rigid Pavements: Stresses, Joints, and Critical Combinations

---

### Learning Outcomes

This topic will help you understand:

*   The different types of stresses experienced by rigid pavements.
*   How wheel loads induce stresses in rigid pavements.
*   How temperature variations cause stresses in rigid pavements.
*   The concept of critical combinations of stresses and how to analyze them.
*   The functions of various types of joints used in rigid pavements.

---

### 1. Introduction to Rigid Pavements

Rigid pavements are constructed with a continuous slab of plain or reinforced concrete. They distribute the load over a wide area of the subgrade, primarily acting as a beam.

---

### 2. Types of Stresses in Rigid Pavements

Rigid pavements are subjected to various stresses due to applied loads and environmental factors. The primary stresses considered are:

#### 2.1. Wheel Load Stresses

These stresses are caused by the vertical loads applied by vehicle tires. The magnitude and distribution of these stresses depend on several factors:

*   **Magnitude of the wheel load:** Higher loads induce higher stresses.
*   **Contact pressure:** The pressure exerted by the tire on the pavement surface.
*   **Radius of relative stiffness (l):** This is a crucial parameter that reflects the rigidity of the concrete slab relative to the stiffness of the subgrade. It is calculated as:

    $l = \left( \frac{E \cdot k \cdot h^3}{12(1 - \mu^2)} \right)^{1/4}$

    Where:
    *   $E$: Modulus of Elasticity of concrete
    *   $k$: Modulus of Subgrade Reaction (stiffness of the subgrade)
    *   $h$: Thickness of the concrete slab
    *   $\mu$: Poisson's ratio of concrete

*   **Radius of the loaded area (a):** The contact area of the tire.
*   **Position of the load:** Stresses are highest when the load is near the interior of the slab, but edge and corner loading are critical for different types of stresses.

**Types of Wheel Load Stresses:**

*   **Stresses due to Load at the Interior:** When a load is far from any edge or joint, it induces compressive stresses in the concrete. The maximum stress occurs directly below the center of the load.

*   **Stresses due to Load at the Edge:** When a load is positioned on the edge of the slab, it causes bending. The stresses are tensile on the bottom of the slab and compressive on the top. Edge loading is generally more critical than interior loading.

*   **Stresses due to Load at the Corner:** This is the most critical scenario for wheel load stresses. When a load is placed at the corner of the slab, it causes significant tensile stresses on the bottom of the slab due to the free edges. These stresses are usually the highest and are a major design consideration.

**Factors influencing Wheel Load Stresses:**

*   **Westergaard's Theory:** This theory is fundamental to analyzing stresses in rigid pavements. It considers the slab as an elastic plate resting on an elastic foundation (subgrade).

*   **Load Transfer:** The ability of joints and cracks to transfer load from one slab to another reduces the stress on the individual slab. Dowel bars and keyways are used for load transfer at joints.

#### 2.2. Temperature Stresses

Temperature variations within the concrete slab cause it to expand or contract, leading to internal stresses.

*   **Temperature Differential Stress:** This occurs when there is a temperature difference between the top and bottom of the slab.
    *   **Warmer Top:** If the top of the slab is warmer than the bottom, the top will expand more, causing compressive stresses in the top and tensile stresses in the bottom. This can lead to cracking at the bottom.
    *   **Colder Top:** If the top of the slab is colder than the bottom, the top will contract more, causing tensile stresses in the top and compressive stresses in the bottom. This can lead to cracking at the top.

*   **Uniform Temperature Stress:** This occurs when the entire slab cools down or heats up uniformly from the time of construction.
    *   **Cooling:** When the concrete cools from its casting temperature, it tries to contract. If contraction is restrained by the subgrade or other parts of the pavement, tensile stresses develop.
    *   **Heating:** When the concrete heats up, it tries to expand. If expansion is restrained, compressive stresses develop.

**Formulas for Temperature Stresses (Simplified):**

*   **Stress due to temperature differential ($\Delta T$) between top and bottom:**

    $\sigma_{TD} = \frac{E \alpha \Delta T}{2(1 - \mu)}$ (Tensile stress at the bottom if top is warmer)

    Where:
    *   $E$: Modulus of Elasticity of concrete
    *   $\alpha$: Coefficient of thermal expansion of concrete
    *   $\Delta T$: Temperature difference between the top and bottom of the slab
    *   $\mu$: Poisson's ratio of concrete

*   **Stress due to uniform temperature change ($\Delta T$) from casting temperature:**

    $\sigma_{T} = E \alpha \Delta T$ (Tensile stress if cooled, compressive if heated, assuming full restraint)

#### 2.3. Shrinkage Stresses

These stresses are caused by the drying and shrinkage of concrete as it cures.

*   **Plastic Shrinkage:** Occurs during the early stages of hydration when surface water evaporates faster than it can be supplied from within the concrete.
*   **Drying Shrinkage:** Occurs over a longer period as the concrete loses moisture.

If shrinkage is restrained, tensile stresses develop in the concrete.

---

### 3. Critical Combination of Stresses

The pavement is subjected to simultaneous stresses from wheel loads, temperature variations, and shrinkage. The critical combination of these stresses determines the pavement's structural capacity and the likelihood of failure (cracking).

**Critical Scenarios:**

*   **Maximum Tensile Stress:** This typically occurs at the corners of the slab. It's a combination of:
    *   Maximum tensile stress due to a wheel load at the corner.
    *   Tensile stress due to a negative temperature differential (colder top) or uniform cooling.
    *   Tensile stress due to shrinkage.

*   **Maximum Compressive Stress:** This typically occurs at the interior or edge. It's a combination of:
    *   Compressive stress due to a wheel load at the interior or edge.
    *   Compressive stress due to a positive temperature differential (warmer top) or uniform heating.

**Design Consideration:**

The design of rigid pavements aims to ensure that the maximum tensile stress induced by any combination of loads and environmental factors does not exceed the flexural strength of the concrete.

---

### 4. Worked Out Problem: Critical Combination of Stresses

**Problem:**
A rigid pavement slab of thickness 250 mm is subjected to the following stresses:

*   Maximum tensile stress due to corner loading (Westergaard's analysis) = 1.5 MPa
*   Maximum tensile stress due to a temperature differential of +15°C (top warmer than bottom) = 0.8 MPa
*   Maximum tensile stress due to uniform cooling from casting temperature = 0.5 MPa

The flexural strength of the concrete is 4.0 MPa. Determine if the pavement is safe under these conditions, considering the critical combination of stresses.

**Solution:**

We need to identify the combination that results in the maximum *net* tensile stress.

**Scenario 1: Corner Load + Temperature Differential (Top Warmer)**

In this case, the wheel load at the corner creates tension at the bottom. A temperature differential with a warmer top also creates tension at the bottom. These stresses add up.

Net Tensile Stress = Stress from Corner Load + Stress from Temperature Differential
Net Tensile Stress = 1.5 MPa + 0.8 MPa = **2.3 MPa**

**Scenario 2: Corner Load + Uniform Cooling**

The wheel load at the corner creates tension at the bottom. Uniform cooling also creates tension (assuming restraint). These stresses add up.

Net Tensile Stress = Stress from Corner Load + Stress from Uniform Cooling
Net Tensile Stress = 1.5 MPa + 0.5 MPa = **2.0 MPa**

**Scenario 3: Corner Load + Temperature Differential (Top Colder)**

If the top is colder than the bottom, the temperature differential creates tension at the *top*. The corner load creates tension at the *bottom*. These stresses act on opposite surfaces and don't directly add to the tensile stress at a single location in the most critical way for the bottom tensile stress. However, we must consider the maximum tensile stress *anywhere* in the slab. A corner load's peak tension is at the bottom. A colder top would create tension at the top.

For this problem, the given temperature differential is positive (top warmer), which exacerbates bottom tension.

**Considering the provided stresses and common critical combinations:**

The most critical combination for *bottom* tensile stress (which is often the failure point for corner loading) is when tensile stresses from different sources act on the same surface.

*   Corner load: Tensile at the bottom.
*   Top warmer than bottom: Tensile at the bottom.
*   Uniform cooling: Tensile (if restrained).

Let's assume the problem implies that the temperature differential and uniform cooling stresses are independent and can occur simultaneously with the wheel load. The most critical combination for tensile stress at the bottom of the slab is the corner load (which causes tension at the bottom) combined with a condition that also causes tension at the bottom.

**Critical Combination:** Wheel Load at Corner + Temperature Differential (Top Warmer)

Total Tensile Stress = Stress (Corner Load) + Stress (Temp. Differential)
Total Tensile Stress = 1.5 MPa + 0.8 MPa = **2.3 MPa**

Let's also consider the possibility of uniform cooling and corner load:
Total Tensile Stress = Stress (Corner Load) + Stress (Uniform Cooling)
Total Tensile Stress = 1.5 MPa + 0.5 MPa = **2.0 MPa**

The maximum tensile stress experienced is **2.3 MPa**.

**Comparison with Flexural Strength:**

*   Maximum Tensile Stress = 2.3 MPa
*   Flexural Strength of Concrete = 4.0 MPa

Since the maximum tensile stress (2.3 MPa) is less than the flexural strength of the concrete (4.0 MPa), the pavement is considered safe under these specific combined stress conditions.

**Important Note:** In real-world design, a safety factor is applied, and more complex Westergaard's equations considering load transfer and modulus of subgrade reaction would be used. The calculation of temperature stresses also involves factors like the coefficient of thermal expansion and specific temperature variations.

---

### 5. Functions of Joints in Rigid Pavements

Joints are intentionally created weak planes in concrete pavements to control cracking caused by temperature changes, shrinkage, and to provide for load transfer.

#### 5.1. Longitudinal Joints

*   **Function:**
    *   **Control of Shrinkage and Temperature Cracking:** They are placed at the center of the slab (for wider slabs) or between adjacent lanes to provide weakened planes that can control longitudinal cracking that might otherwise occur due to shrinkage and temperature variations.
    *   **Formation of Lanes:** They delineate lane boundaries and provide a consistent width for the pavement.
    *   **Load Transfer:** Often designed with dowel bars or tie bars to transfer loads between adjacent slabs, preventing differential settlement and reducing stresses. Tie bars are used to hold slabs together, while dowel bars allow for movement.

#### 5.2. Contraction Joints (Transverse Joints)

*   **Function:**
    *   **Control of Shrinkage and Temperature Cracking:** These joints are designed to accommodate the contraction of the concrete slab due to cooling and drying shrinkage. They create weakened planes that will crack at the joint location rather than randomly along the slab.
    *   **Permit Movement:** They allow the slabs to shrink and move longitudinally.
    *   **Load Transfer:** Contraction joints can be doweled to transfer loads across the joint, ensuring that one slab doesn't sag relative to the adjacent one when loaded.

#### 5.3. Expansion Joints (Transverse Joints)

*   **Function:**
    *   **Accommodation of Expansion:** These joints are primarily designed to accommodate the expansion of concrete slabs due to temperature increases. They create a gap that allows the slab to expand without building up excessive compressive stresses that could cause buckling or blow-ups.
    *   **Separation:** They provide a complete separation between adjacent slabs, often across the entire pavement width.
    *   **Load Transfer:** Expansion joints can also be doweled to provide load transfer, but the dowels are usually lubricated or have a specific design to allow for the large expansion movement. Expansion joints are typically placed at less frequent intervals than contraction joints.

**Important Distinction:**

*   **Contraction joints** are designed to *control cracking* due to contraction.
*   **Expansion joints** are designed to *prevent compressive stress* due to expansion.

---

### 6. Key Points to Remember

*   **Rigid pavements act as beams** and distribute loads over a wide area.
*   **Wheel load stresses** are critical at the corners due to tensile forces at the bottom.
*   **Temperature stresses** arise from temperature differentials and uniform temperature changes.
*   **Tensile stresses** are generally more critical than compressive stresses in rigid pavements because concrete has lower tensile strength.
*   **Critical combination of stresses** involves summing tensile stresses on the same surface or analyzing the net stress state.
*   **Joints** are essential for controlling cracking and managing movement in rigid pavements.
*   **Longitudinal joints** control longitudinal cracking and delineate lanes.
*   **Contraction joints** control transverse cracking due to contraction.
*   **Expansion joints** accommodate expansion and prevent buckling.
*   **Dowel bars** are used for load transfer across joints.
*   **Tie bars** are used to hold slabs together at longitudinal joints.

---

### 7. Practice Questions

**Question 1:**
Which type of loading typically induces the highest tensile stresses in a rigid pavement slab?
a) Interior loading
b) Edge loading
c) Corner loading
d) Uniform loading

**Question 2:**
A temperature differential where the top of the concrete slab is warmer than the bottom will primarily cause:
a) Tensile stresses at the top and compressive stresses at the bottom
b) Compressive stresses at the top and tensile stresses at the bottom
c) Uniform tensile stresses throughout the slab
d) Uniform compressive stresses throughout the slab

**Question 3:**
What is the primary function of contraction joints in rigid pavements?
a) To accommodate slab expansion
b) To control cracking caused by contraction
c) To facilitate drainage
d) To provide a smooth riding surface

**Question 4:**
If a rigid pavement experiences a maximum tensile stress of 3.5 MPa due to a combination of wheel load and temperature effects, and the flexural strength of the concrete is 4.0 MPa, the pavement is:
a) Safe, as the stress is below the flexural strength.
b) Unsafe, as the stress is close to the flexural strength.
c) Unsafe, as the stress exceeds the flexural strength.
d) Cannot be determined without considering shrinkage stresses.

**Question 5:**
What is the purpose of dowel bars in rigid pavement joints?

---

### 8. Answers to Practice Questions

**Answer 1:**
c) Corner loading

**Answer 2:**
b) Compressive stresses at the top and tensile stresses at the bottom

**Answer 3:**
b) To control cracking caused by contraction

**Answer 4:**
a) Safe, as the stress is below the flexural strength. (Note: In design, a safety factor is crucial, but based solely on the given values, it's safe).

**Answer 5:**
The purpose of dowel bars in rigid pavement joints is to provide load transfer between adjacent slabs. They are smooth, cylindrical steel bars placed across the joint, allowing traffic loads to be distributed from one slab to the next, thereby reducing the stresses on the individual slabs and preventing excessive differential deflection.

---
