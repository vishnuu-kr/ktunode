---
title: "Group action - Group efficiency - Capacity of Pile groups - Numerical problems"
subject: "FOUNDATION ENGINEERING"
module: "Module 4: Pile foundations: Uses and classification of piles "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e47"
status: "completed"
scrapedAt: "2026-05-20T18:48:45.480Z"
---
# FOUNDATION ENGINEERING: Module 4 - Pile Foundations

## Topic: Group Action, Group Efficiency, Capacity of Pile Groups & Numerical Problems

---

### Learning Outcomes:

Upon completion of this module, you will be able to:

*   Understand the concept of group action in pile foundations.
*   Define and calculate group efficiency.
*   Determine the capacity of pile groups.
*   Solve numerical problems related to pile group capacity and efficiency.

---

### 1. Group Action in Pile Foundations

#### 1.1 Introduction to Pile Groups

*   **Individual Piles:** When a single pile is used to support a structural load, it is referred to as a single pile foundation.
*   **Pile Groups:** In most practical situations, a single pile cannot carry the entire load of the structure, or the settlement of a single pile may be excessive. Therefore, multiple piles are driven or bored close to each other and capped with a structural element (like a pile cap or a grade beam) to act as a single unit. This arrangement is called a **pile group**.
*   **Purpose of Pile Groups:**
    *   **Increased Load-Carrying Capacity:** Distributing the load over multiple piles significantly increases the overall load-carrying capacity of the foundation.
    *   **Reduced Settlement:** By spreading the load over a larger area, settlement is generally reduced compared to a single pile.
    *   **Resistance to Lateral Loads:** Pile groups can provide better resistance to lateral forces (wind, seismic, etc.) due to their collective stiffness.
    *   **Support for Heavy Structures:** Essential for supporting heavy structures like bridges, multi-story buildings, and industrial plants.

#### 1.2 Principles of Group Action

*   **Interaction Between Piles:** When piles are placed in close proximity, the stress zones around each pile interact. This interaction affects the load-carrying capacity and settlement of the individual piles within the group.
*   **Factors Influencing Interaction:**
    *   **Spacing:** The distance between the centers of adjacent piles is crucial. Closer spacing leads to greater interaction.
    *   **Soil Type:** The compressibility and strength characteristics of the soil significantly influence the interaction.
    *   **Pile Material and Construction Method:** These can also play a role in how stresses are distributed and how the soil responds.
*   **Consequences of Interaction:**
    *   **Compressible Soils (Clays):** In cohesive soils, closely spaced piles tend to experience increased settlement and reduced individual pile capacity due to overlapping stress bulbs. The soil between the piles gets squeezed out.
    *   **Cohesionless Soils (Sands):** In granular soils, closely spaced piles might experience some increase in capacity due to soil dilation (compaction) between the piles, though interaction still occurs.

#### 1.3 Spacing of Piles in a Group

*   **General Guidelines:** The spacing of piles in a group is a critical design parameter. It's usually specified as a multiple of the pile diameter (for circular piles) or the width/side length (for square/rectangular piles).
*   **Common Spacing Recommendations:**
    *   **Sands:** 2.5D to 4D (where D is the diameter or width).
    *   **Clays:** 3D to 4D.
*   **Too Close Spacing:** Can lead to significant group inefficiency and excessive settlement, especially in clays.
*   **Too Wide Spacing:** May result in the piles not acting as a unified group, negating some of the benefits of a pile group. The pile cap might also become uneconomical.
*   **Optimum Spacing:** A balance is sought to maximize capacity and minimize settlement while remaining economical.

---

### 2. Group Efficiency

#### 2.1 Definition of Group Efficiency ($ \eta_g $)

*   **Concept:** Group efficiency represents the ratio of the ultimate load-carrying capacity of a pile group to the sum of the ultimate load-carrying capacities of individual piles if they were tested alone.
*   **Formula:**
    $$ \eta_g = \frac{Q_{ug}}{n \cdot Q_u} $$
    Where:
    *   $ \eta_g $ = Group efficiency
    *   $ Q_{ug} $ = Ultimate load-carrying capacity of the pile group
    *   $ n $ = Number of piles in the group
    *   $ Q_u $ = Ultimate load-carrying capacity of a single pile (tested alone)

#### 2.2 Factors Affecting Group Efficiency

*   **Spacing of Piles:** As discussed, closer spacing generally leads to lower group efficiency in clays.
*   **Soil Type:** Group efficiency is generally lower in cohesive soils (clays) than in cohesionless soils (sands).
*   **Arrangement of Piles:** The configuration (e.g., square, rectangular, triangular) can have a minor influence.
*   **Pile Length:** Longer piles tend to have less interaction effect compared to shorter piles.
*   **Construction Method:** Driving piles can cause more soil disturbance and hence lower group efficiency than bored piles.

#### 2.3 Empirical Rules for Group Efficiency (especially for bearing capacity)

*   **Feltre's Rule (for cohesive soils):**
    $$ \eta_g = 1 - \left( \frac{\theta}{\pi} \right) \left( \frac{(m-1)x + (n-1)y}{mn \cdot D} \right) $$
    Where:
    *   $ \theta $ = Angle of internal friction of the soil (in radians). For soft clays, $ \theta $ can be approximated as $ \frac{\pi}{2} $.
    *   $ m $ = Number of piles in one direction.
    *   $ n $ = Number of piles in the perpendicular direction.
    *   $ x $ = Spacing between piles in the direction of $m$.
    *   $ y $ = Spacing between piles in the direction of $n$.
    *   $ D $ = Diameter or width of the pile.

    **Simplified Feltre's Rule (for clays where $ \theta = \frac{\pi}{2} $):**
    $$ \eta_g = 1 - \frac{1}{\pi} \left( \frac{(m-1)x + (n-1)y}{mn \cdot D} \right) $$

*   **Berezantsev's Rule (for cohesive soils, often considered more accurate):**
    $$ \eta_g = 1 - \frac{\tan^{-1}\left(\frac{D}{s}\right)}{\pi/2} \cdot \frac{n \cdot (m-1) + m \cdot (n-1)}{mn} $$
    Where:
    *   $ s $ = Center-to-center spacing of piles.
    *   $ D $ = Diameter of pile.
    *   $ m, n $ = Number of piles in each direction.

*   **General Observations:**
    *   Group efficiency ($ \eta_g $) is usually less than 1.
    *   For widely spaced piles (e.g., $ s \ge 5D $), the interaction is minimal, and $ \eta_g $ approaches 1.
    *   For very closely spaced piles, $ \eta_g $ can be significantly less than 1, sometimes even below 0.5 in soft clays.

#### 2.4 Group Efficiency for Settlement

*   **Concept:** The settlement of a pile group is generally larger than the settlement of a single pile under its proportionate load.
*   **Empirical Observation:** The settlement of a pile group in cohesive soils is often found to be $ 1.25 $ to $ 2 $ times the settlement of a single pile.
*   **Formula (for settlement consideration):**
    $$ S_g \approx \eta_s \cdot S_u $$
    Where:
    *   $ S_g $ = Settlement of the pile group.
    *   $ S_u $ = Settlement of a single pile under a load of $ \frac{Q_{ug}}{n} $.
    *   $ \eta_s $ = Settlement efficiency factor, often greater than 1 (e.g., $1.25$ to $2.0$ for clays).

---

### 3. Capacity of Pile Groups

#### 3.1 Methods for Calculating Pile Group Capacity ($ Q_{ug} $)

There are two primary methods to estimate the ultimate load-carrying capacity of a pile group:

**Method 1: Based on Group Efficiency ($ Q_{ug} = \eta_g \cdot n \cdot Q_u $)**

*   This method assumes the group acts as a unit and applies the efficiency factor to the total capacity of individual piles.
*   **Steps:**
    1.  Calculate the ultimate load capacity of a single pile ($ Q_u $). This involves calculating the base resistance ($ Q_b $) and the skin friction resistance ($ Q_s $) for a single pile and summing them ($ Q_u = Q_b + Q_s $).
    2.  Calculate the group efficiency ($ \eta_g $) using empirical rules (Feltre's, Berezantsev's, or other relevant methods).
    3.  Calculate the ultimate load capacity of the pile group: $ Q_{ug} = \eta_g \cdot n \cdot Q_u $.

**Method 2: Block Failure (or Faggot/Block Analogy Method)**

*   This method treats the entire pile group and the soil mass enclosed within it as a single, large block or prism. The capacity is then calculated as the bearing capacity of this block.
*   **Steps:**
    1.  **Identify the Block Dimensions:** Consider the outer perimeter of the pile group.
    2.  **Calculate the Area of the Block:**
        *   For a square group of $ m \times n $ piles with spacing $ s $, the block dimensions are approximately $ (m-1)s + D $ by $ (n-1)s + D $.
        *   The gross area of the block is $ A_g = \text{width} \times \text{length} $.
    3.  **Calculate the Base Resistance of the Block ($ Q_{bg} $):**
        *   $ Q_{bg} = A_g \cdot q_b' $
        *   $ q_b' $ is the ultimate bearing capacity of the soil at the base of the block. This is determined using bearing capacity formulas, considering the soil properties at that depth.
    4.  **Calculate the Skin Friction Resistance of the Block ($ Q_{sg} $):**
        *   This is the sum of the skin friction along the outer perimeter of the block.
        *   $ Q_{sg} = P_g \cdot L \cdot \bar{f}_s $
        *   $ P_g $ is the perimeter of the block.
        *   $ L $ is the embedded length of the piles (depth of the block).
        *   $ \bar{f}_s $ is the average ultimate skin friction along the perimeter.
    5.  **Calculate the Ultimate Capacity of the Block:**
        *   $ Q_{ug} = Q_{bg} + Q_{sg} $

*   **Important Note for Block Failure:**
    *   The weight of the soil block is often neglected or considered as part of the capacity in simplified analyses.
    *   For very stiff soils or rock, the block failure mode can govern.
    *   In cohesive soils, the capacity of the pile group is the *lesser* of the capacities calculated by Method 1 and Method 2.

#### 3.2 Net Load Capacity

*   **Concept:** The net load capacity considers the load that can be applied *above* the frictional resistance. It's essentially the load that contributes to bearing capacity at the pile base.
*   **Calculation:**
    *   Net capacity of a single pile: $ Q_{nu} = Q_u - W_p $ (where $ W_p $ is the weight of the pile)
    *   Net capacity of the group: $ Q_{ug, net} = Q_{ug} - W_{group} $ (where $ W_{group} $ is the total weight of the piles in the group).
    *   Alternatively, consider the safe load capacity based on factor of safety on net ultimate load capacity.

#### 3.3 Safe Load Capacity

*   **Concept:** The safe load capacity is the maximum allowable load that can be applied to the pile group, considering a factor of safety against the ultimate capacity.
*   **Formula:**
    $$ Q_{safe} = \frac{Q_{ug}}{\text{Factor of Safety (FOS)}} $$
*   **Typical FOS:** Usually ranges from 2.0 to 3.0, depending on the reliability of soil investigation, pile load tests, and structural requirements.

---

### 4. Numerical Problems

**Example 1: Group Efficiency Calculation (Feltre's Rule)**

A group of 9 piles (3x3 square arrangement) is driven into a clay deposit. The diameter of each pile is 300 mm. The spacing between piles is 900 mm (center-to-center). Calculate the group efficiency using Feltre's rule, assuming the clay has an angle of internal friction $ \theta = 90^\circ $ ($ \frac{\pi}{2} $ radians).

**Solution:**

*   $ m = 3 $ (number of piles in one direction)
*   $ n = 3 $ (number of piles in the perpendicular direction)
*   $ D = 0.3 \text{ m} $
*   $ x = 0.9 \text{ m} $
*   $ y = 0.9 \text{ m} $
*   $ \theta = \frac{\pi}{2} $ radians

Using the simplified Feltre's rule for clays:
$$ \eta_g = 1 - \frac{1}{\pi} \left( \frac{(m-1)x + (n-1)y}{mn \cdot D} \right) $$
$$ \eta_g = 1 - \frac{1}{\pi} \left( \frac{(3-1)(0.9) + (3-1)(0.9)}{(3)(3) \cdot 0.3} \right) $$
$$ \eta_g = 1 - \frac{1}{\pi} \left( \frac{(2)(0.9) + (2)(0.9)}{9 \cdot 0.3} \right) $$
$$ \eta_g = 1 - \frac{1}{\pi} \left( \frac{1.8 + 1.8}{2.7} \right) $$
$$ \eta_g = 1 - \frac{1}{\pi} \left( \frac{3.6}{2.7} \right) $$
$$ \eta_g = 1 - \frac{1}{\pi} (1.333) $$
$$ \eta_g = 1 - 0.424 = 0.576 $$

**Answer:** The group efficiency is approximately 0.576 or 57.6%.

**Example 2: Pile Group Capacity (Method 1)**

Consider the 3x3 pile group from Example 1. Each pile is 10 meters long. The diameter is 300 mm.
The ultimate capacity of a single pile ($ Q_u $) was determined to be $ 600 \text{ kN} $.
Calculate the ultimate load-carrying capacity of the pile group using the calculated group efficiency.

**Solution:**

*   $ n = 9 $ (total number of piles)
*   $ Q_u = 600 \text{ kN} $ (ultimate capacity of a single pile)
*   $ \eta_g = 0.576 $ (from Example 1)

$$ Q_{ug} = \eta_g \cdot n \cdot Q_u $$
$$ Q_{ug} = 0.576 \cdot 9 \cdot 600 \text{ kN} $$
$$ Q_{ug} = 3110.4 \text{ kN} $$

**Answer:** The ultimate load-carrying capacity of the pile group is approximately 3110.4 kN.

**Example 3: Pile Group Capacity (Method 2 - Block Failure)**

A square group of $ 2 \times 2 $ piles is to be constructed in a clay soil. Each pile is 300 mm x 300 mm and 12 m long. The spacing between pile centers is 900 mm. The soil is cohesive with $ c_u = 50 \text{ kN/m}^2 $ (undrained cohesion) and $ \gamma = 18 \text{ kN/m}^3 $. The bearing capacity factor $ N_c = 9 $.

Calculate the ultimate capacity of the pile group assuming block failure.

**Solution:**

*   Pile dimensions: $ D = 0.3 \text{ m} $ (for simplicity, treat as square with width = 0.3m)
*   Spacing, $ s = 0.9 \text{ m} $
*   $ m = 2 $, $ n = 2 $
*   $ L = 12 \text{ m} $
*   $ c_u = 50 \text{ kN/m}^2 $
*   $ \gamma = 18 \text{ kN/m}^3 $
*   $ N_c = 9 $

**Block Dimensions:**
The block is square.
Width of block = $ (m-1)s + D = (2-1)(0.9) + 0.3 = 0.9 + 0.3 = 1.2 \text{ m} $
Length of block = $ (n-1)s + D = (2-1)(0.9) + 0.3 = 0.9 + 0.3 = 1.2 \text{ m} $

**Area of the Block ($ A_g $):**
$ A_g = 1.2 \text{ m} \times 1.2 \text{ m} = 1.44 \text{ m}^2 $

**Base Resistance of the Block ($ Q_{bg} $):**
Ultimate bearing pressure at the base of the block ($ q_b' $):
$ q_b' = c_u N_c $ (assuming the block base is in clay, and no surcharge is considered for simplicity)
$ q_b' = 50 \text{ kN/m}^2 \times 9 = 450 \text{ kN/m}^2 $

$ Q_{bg} = A_g \cdot q_b' $
$ Q_{bg} = 1.44 \text{ m}^2 \times 450 \text{ kN/m}^2 = 648 \text{ kN} $

**Skin Friction Resistance of the Block ($ Q_{sg} $):**
Perimeter of the block ($ P_g $):
$ P_g = 2 \times (\text{width} + \text{length}) = 2 \times (1.2 + 1.2) = 2 \times 2.4 = 4.8 \text{ m} $

Average shear resistance along the perimeter ($ \bar{f}_s $):
In cohesive soils, for block failure, the shear resistance along the perimeter is usually taken as the cohesion value ($ c_u $).
$ \bar{f}_s = c_u = 50 \text{ kN/m}^2 $

$ Q_{sg} = P_g \cdot L \cdot \bar{f}_s $
$ Q_{sg} = 4.8 \text{ m} \times 12 \text{ m} \times 50 \text{ kN/m}^2 $
$ Q_{sg} = 2880 \text{ kN} $

**Ultimate Capacity of the Block ($ Q_{ug, block} $):**
$ Q_{ug, block} = Q_{bg} + Q_{sg} $
$ Q_{ug, block} = 648 \text{ kN} + 2880 \text{ kN} = 3528 \text{ kN} $

**Answer:** The ultimate capacity of the pile group based on block failure is 3528 kN.

*(Note: To compare with Method 1, we would need the capacity of a single pile and its group efficiency.)*

---

### 5. Practice Questions

1.  Define group action and explain why pile groups are used in foundation engineering.
2.  What is group efficiency? State the formula for calculating it.
3.  List the key factors that influence group efficiency.
4.  A group of $ 3 \times 3 $ piles, each 250 mm in diameter and spaced 750 mm apart center-to-center, is installed in a clay deposit. Using Feltre's rule (with $ \theta = 90^\circ $), calculate the group efficiency.
5.  The ultimate load capacity of a single pile is $ 500 \text{ kN} $. If it's part of a $ 2 \times 3 $ pile group with 8 piles in total, and the group efficiency is calculated to be 0.75, what is the ultimate load-carrying capacity of the pile group?
6.  Explain the block failure method for calculating pile group capacity. What are the components of capacity in this method?
7.  A $ 2 \times 2 $ square pile group consists of piles of 300 mm diameter and 15 m length. The spacing between pile centers is 1 m. The soil is sand with an average allowable bearing pressure of $ q_a = 100 \text{ kN/m}^2 $. The pile group is embedded 15 m deep. If the soil's average skin friction is $ f_s = 30 \text{ kN/m}^2 $, estimate the ultimate capacity of the pile group using the block failure method. (Assume a simplified bearing capacity calculation where $ q_b' \approx q_a $ at the base of the block for this problem).

---

### 6. Answers to Practice Questions

1.  **Group Action:** Refers to the interaction between piles in a closely spaced group, where the soil stress zones around individual piles overlap. This interaction affects the overall load-carrying capacity and settlement behavior of the group.
    **Why Pile Groups are Used:** To support heavy structural loads, reduce settlement, provide resistance to lateral loads, and when single piles cannot safely carry the intended load or satisfy settlement criteria.

2.  **Group Efficiency ($ \eta_g $):** The ratio of the ultimate load-carrying capacity of a pile group to the sum of the ultimate load-carrying capacities of individual piles.
    $$ \eta_g = \frac{Q_{ug}}{n \cdot Q_u} $$

3.  **Factors Influencing Group Efficiency:** Spacing of piles, soil type (cohesive vs. cohesionless), arrangement of piles, pile length, and construction method.

4.  **Group Efficiency Calculation:**
    *   $ m = 3 $, $ n = 3 $
    *   $ D = 0.25 \text{ m} $
    *   $ s = 0.75 \text{ m} $
    *   $ \theta = \frac{\pi}{2} $ radians
    Using simplified Feltre's rule:
    $$ \eta_g = 1 - \frac{1}{\pi} \left( \frac{(3-1)(0.75) + (3-1)(0.75)}{(3)(3) \cdot 0.25} \right) $$
    $$ \eta_g = 1 - \frac{1}{\pi} \left( \frac{2(0.75) + 2(0.75)}{9 \cdot 0.25} \right) $$
    $$ \eta_g = 1 - \frac{1}{\pi} \left( \frac{1.5 + 1.5}{2.25} \right) $$
    $$ \eta_g = 1 - \frac{1}{\pi} \left( \frac{3.0}{2.25} \right) $$
    $$ \eta_g = 1 - \frac{1}{\pi} (1.333) $$
    $$ \eta_g = 1 - 0.424 = 0.576 $$
    **Answer:** $ \eta_g \approx 0.576 $ or 57.6%.

5.  **Pile Group Capacity Calculation:**
    *   $ n = 8 $
    *   $ Q_u = 500 \text{ kN} $
    *   $ \eta_g = 0.75 $
    $$ Q_{ug} = \eta_g \cdot n \cdot Q_u $$
    $$ Q_{ug} = 0.75 \cdot 8 \cdot 500 \text{ kN} $$
    $$ Q_{ug} = 6 \cdot 500 \text{ kN} = 3000 \text{ kN} $$
    **Answer:** The ultimate load-carrying capacity of the pile group is 3000 kN.

6.  **Block Failure Method:** This method considers the pile group and the soil mass within its perimeter as a single block. The capacity is calculated as the sum of:
    *   **Base Resistance of the Block ($ Q_{bg} $):** Bearing capacity of the soil at the base of the block multiplied by the area of the block.
    *   **Skin Friction Resistance of the Block ($ Q_{sg} $):** Skin friction along the perimeter of the block multiplied by the perimeter length and the embedded depth.

7.  **Pile Group Capacity (Block Failure):**
    *   Pile dimensions: $ D = 0.3 \text{ m} $
    *   Spacing, $ s = 1.0 \text{ m} $
    *   $ m = 2 $, $ n = 2 $
    *   $ L = 15 \text{ m} $
    *   $ q_a = 100 \text{ kN/m}^2 $ (assumed as $ q_b' $ for this problem)
    *   $ f_s = 30 \text{ kN/m}^2 $

    **Block Dimensions:**
    Width = $ (m-1)s + D = (2-1)(1.0) + 0.3 = 1.0 + 0.3 = 1.3 \text{ m} $
    Length = $ (n-1)s + D = (2-1)(1.0) + 0.3 = 1.0 + 0.3 = 1.3 \text{ m} $

    **Area of the Block ($ A_g $):**
    $ A_g = 1.3 \text{ m} \times 1.3 \text{ m} = 1.69 \text{ m}^2 $

    **Base Resistance of the Block ($ Q_{bg} $):**
    $ q_b' \approx q_a = 100 \text{ kN/m}^2 $
    $ Q_{bg} = A_g \cdot q_b' = 1.69 \text{ m}^2 \times 100 \text{ kN/m}^2 = 169 \text{ kN} $

    **Skin Friction Resistance of the Block ($ Q_{sg} $):**
    Perimeter of the block ($ P_g $):
    $ P_g = 2 \times (1.3 + 1.3) = 2 \times 2.6 = 5.2 \text{ m} $

    $ Q_{sg} = P_g \cdot L \cdot f_s $
    $ Q_{sg} = 5.2 \text{ m} \times 15 \text{ m} \times 30 \text{ kN/m}^2 $
    $ Q_{sg} = 2340 \text{ kN} $

    **Ultimate Capacity of the Block ($ Q_{ug, block} $):**
    $ Q_{ug, block} = Q_{bg} + Q_{sg} $
    $ Q_{ug, block} = 169 \text{ kN} + 2340 \text{ kN} = 2509 \text{ kN} $

    **Answer:** The ultimate capacity of the pile group using the block failure method is approximately 2509 kN.

---

### Important Points to Remember:

*   **Interaction:** The key concept in pile groups is the interaction between piles, which is heavily dependent on spacing and soil type.
*   **Group Efficiency ($ \eta_g $):** Typically less than 1.0 in clays, and closer to 1.0 in sands. It's a crucial factor in determining the group capacity.
*   **Two Methods for Group Capacity:** Always consider both the group efficiency method ($ Q_{ug} = \eta_g \cdot n \cdot Q_u $) and the block failure method. The governing capacity is generally the *lesser* of the two, especially in clays.
*   **Settlement:** Pile groups generally settle more than individual piles. Settlement analysis for pile groups is a separate, important topic.
*   **Spacing:** Adequate spacing is vital to avoid excessive reduction in group efficiency and settlement.
*   **Safe Load:** Always apply a Factor of Safety to the ultimate capacity to determine the safe, allowable load.

---
