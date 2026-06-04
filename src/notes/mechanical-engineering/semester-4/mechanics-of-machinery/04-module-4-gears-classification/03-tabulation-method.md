---
title: "Tabulation method"
subject: "MECHANICS OF MACHINERY"
module: "Module 4: Gears – Classification"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fe6"
status: "completed"
scrapedAt: "2026-05-20T17:55:14.843Z"
---
# MECHANICS OF MACHINERY: Module 4 - Gears – Classification

## Topic: Tabulation Method

This topic focuses on a systematic approach to analyzing gear trains, particularly in understanding their output characteristics and relationships between input and output speeds. The tabulation method is a crucial tool for organizing calculations and gaining a clear insight into the functioning of complex gear arrangements.

---

### 1. Learning Outcomes Covered:

While the primary focus of the tabulation method is on analyzing gear trains, it directly supports the following learning outcomes:

*   **CO1: Calculate degrees of freedom of mechanisms and Interpret their inversions.** (While not directly calculating DOF, the tabulation method helps in understanding the interconnectedness and freedom of rotation in gear trains, which are mechanisms.)
*   **CO2: Perform velocity and acceleration analysis of various planar mechanisms.** (The tabulation method is foundational for velocity analysis in gear trains, a specific type of planar mechanism.)
*   **CO4: Solve the problem on cams and gear drives, including selection depending on requirement.** (This is the most direct alignment. The tabulation method is used to determine the speed ratios required for selecting appropriate gear drives for specific applications.)

---

### 2. Key Concepts and Definitions:

*   **Gear Train:** A combination of two or more gears meshing with each other to transmit motion and power.
*   **Gear Ratio (or Speed Ratio):** The ratio of the number of teeth on the driven gear to the number of teeth on the driving gear. For a simple gear pair, if Gear 1 drives Gear 2:
    *   Gear Ratio ($i$) = $\frac{\text{Number of teeth on driven gear (Gear 2)}}{\text{Number of teeth on driving gear (Gear 1)}} = \frac{N_2}{N_1}$
    *   Also, Gear Ratio ($i$) = $\frac{\text{Angular velocity of driving gear (Gear 1)}}{\text{Angular velocity of driven gear (Gear 2)}} = \frac{\omega_1}{\omega_2}$
*   **Train Value (or Gear Train Value):** For a gear train, it is the ratio of the angular velocity of the last driven gear to the angular velocity of the first driving gear.
*   **Idler Gear:** An intermediate gear placed between the driver and the driven gear. Idler gears change the direction of rotation of the driven gear but do not affect the overall speed ratio.
*   **Simple Gear Train:** A gear train where each shaft carries only one gear.
*   **Compound Gear Train:** A gear train where at least one shaft carries more than one gear.
*   **Reverted Gear Train:** A gear train where the first and last gears are concentric (mounted on the same axis).

---

### 3. The Tabulation Method:

The tabulation method is a structured way to analyze gear trains by listing the gears, their number of teeth, and their corresponding speeds (angular velocities) in a table. This method is particularly useful for:

*   **Simple Gear Trains:**
*   **Compound Gear Trains:**
*   **Reverted Gear Trains:**

The fundamental principle applied in the tabulation method is the concept of the gear ratio between meshing gears.

**General Procedure for Tabulation:**

1.  **Identify the Gears:** List all gears in the train sequentially.
2.  **Determine Number of Teeth ($N$):** For each gear, know or determine its number of teeth.
3.  **Assign Input Speed:** Assign a reference speed (e.g., 100 rpm or $N_1$) to the input (driver) gear.
4.  **Calculate Speeds of Meshing Gears:** For each meshing pair, use the gear ratio to calculate the speed of the driven gear based on the speed of the driving gear.
    *   If Gear A drives Gear B: Speed of B = Speed of A $\times \frac{\text{Number of teeth on A}}{\text{Number of teeth on B}}$
5.  **Handle Compound Gears:** If a shaft carries multiple gears, all gears on that shaft will rotate at the same speed.
6.  **Calculate Train Value/Speed Ratio:** The ratio of the speed of the last driven gear to the speed of the first driver gear gives the overall train value or speed ratio.

---

#### 3.1. Application to Simple Gear Trains:

**Example:** A simple gear train consists of three gears: Gear A (driver) meshes with Gear B (idler), and Gear B meshes with Gear C (driven).
*   Number of teeth: $N_A = 20$, $N_B = 40$, $N_C = 30$.
*   Input speed of Gear A ($\omega_A$) = 100 rpm.

**Tabulation:**

| Gear    | Number of Teeth ($N$) | Driving Gear | Driven Gear | Speed ($\omega$) (rpm) |
| :------ | :-------------------- | :----------- | :---------- | :--------------------- |
| Gear A  | 20                    | -            | Gear B      | 100                    |
| Gear B  | 40                    | Gear A       | Gear C      | $100 \times \frac{20}{40} = 50$ |
| Gear C  | 30                    | Gear B       | -           | $50 \times \frac{40}{30} = 66.67$ |

**Analysis:**
*   The idler gear (Gear B) changes the direction of rotation of Gear C relative to Gear A.
*   The speed ratio (Train Value) = $\frac{\omega_C}{\omega_A} = \frac{66.67}{100} = \frac{2}{3}$.
*   This can also be calculated as: Train Value = $\frac{N_A}{N_B} \times \frac{N_B}{N_C} = \frac{N_A}{N_C} = \frac{20}{30} = \frac{2}{3}$. (As noted, idlers don't affect the overall speed ratio).

---

#### 3.2. Application to Compound Gear Trains:

**Example:** A compound gear train has the following arrangement:
*   Gear A (driver) meshes with Gear B.
*   Gear C is mounted on the same shaft as Gear B and meshes with Gear D (driven).
*   Number of teeth: $N_A = 30$, $N_B = 60$, $N_C = 20$, $N_D = 50$.
*   Input speed of Gear A ($\omega_A$) = 200 rpm.

**Tabulation:**

| Gear    | Number of Teeth ($N$) | Driving Gear | Driven Gear | Shaft Mounted On | Speed ($\omega$) (rpm) |
| :------ | :-------------------- | :----------- | :---------- | :--------------- | :--------------------- |
| Gear A  | 30                    | -            | Gear B      | Shaft 1          | 200                    |
| Gear B  | 60                    | Gear A       | Gear C      | Shaft 2          | $200 \times \frac{30}{60} = 100$ |
| Gear C  | 20                    | Gear B       | Gear D      | Shaft 2          | 100 (Same as Gear B)   |
| Gear D  | 50                    | Gear C       | -           | Shaft 3          | $100 \times \frac{20}{50} = 40$ |

**Analysis:**
*   Shaft 2 carries both Gear B and Gear C, so they rotate at the same speed (100 rpm).
*   The speed ratio (Train Value) = $\frac{\omega_D}{\omega_A} = \frac{40}{200} = \frac{1}{5}$.
*   This can also be calculated as: Train Value = $\frac{N_A}{N_B} \times \frac{N_C}{N_D} = \frac{30}{60} \times \frac{20}{50} = \frac{1}{2} \times \frac{2}{5} = \frac{1}{5}$.

---

#### 3.3. Application to Reverted Gear Trains:

**Key Characteristic of Reverted Gear Trains:** The shafts carrying the first and last gears are concentric. This implies that the center distance between the first pair of gears is the same as the center distance between the second pair of gears (in a two-stage reverted train).

Let Gear 1 drive Gear 2, and Gear 3 drive Gear 4. Shafts 1 and 4 are concentric. Gears 1 and 4 are on the same axis.
*   Center distance between axes of 1 and 2 = $\frac{R_1 + R_2}{2} = \frac{d_1 + d_2}{4}$ (where R is radius, d is diameter).
*   Center distance between axes of 3 and 4 = $\frac{R_3 + R_4}{2} = \frac{d_3 + d_4}{4}$.
*   For a reverted gear train, these center distances are equal: $\frac{d_1 + d_2}{4} = \frac{d_3 + d_4}{4}$.
*   This simplifies to: $d_1 + d_2 = d_3 + d_4$.
*   Since $d = \frac{N \times m}{\pi}$ (where $m$ is the module and $\pi$ is a constant for all gears in mesh), we can write:
    *   $\frac{N_1 m}{\pi} + \frac{N_2 m}{\pi} = \frac{N_3 m}{\pi} + \frac{N_4 m}{\pi}$
    *   Dividing by $\frac{m}{\pi}$ (since it's common): $N_1 + N_2 = N_3 + N_4$. This is a crucial condition for reverted gear trains.

**Example:** A reverted gear train is used to drive a machine.
*   Gear 1 (driver) meshes with Gear 2.
*   Gear 3 is mounted on the same shaft as Gear 2 and meshes with Gear 4 (driven).
*   Gear 1 and Gear 4 are concentric.
*   Number of teeth: $N_1 = 50$, $N_2 = 25$, $N_3 = 40$.
*   Input speed of Gear 1 ($\omega_1$) = 300 rpm.
*   Find the number of teeth on Gear 4 ($N_4$) and the speed of Gear 4 ($\omega_4$).

**Using the Reverted Gear Train Condition:**
$N_1 + N_2 = N_3 + N_4$
$50 + 25 = 40 + N_4$
$75 = 40 + N_4$
$N_4 = 35$

**Tabulation:**

| Gear    | Number of Teeth ($N$) | Driving Gear | Driven Gear | Shaft Mounted On | Speed ($\omega$) (rpm) |
| :------ | :-------------------- | :----------- | :---------- | :--------------- | :--------------------- |
| Gear 1  | 50                    | -            | Gear 2      | Shaft 1          | 300                    |
| Gear 2  | 25                    | Gear 1       | Gear 3      | Shaft 2          | $300 \times \frac{50}{25} = 600$ |
| Gear 3  | 40                    | Gear 2       | Gear 4      | Shaft 2          | 600 (Same as Gear 2)   |
| Gear 4  | 35                    | Gear 3       | -           | Shaft 1 (concentric) | $600 \times \frac{40}{35} = 685.71$ |

**Analysis:**
*   The train value (Speed Ratio) = $\frac{\omega_4}{\omega_1} = \frac{685.71}{300} \approx 2.286$.
*   This can also be calculated as: Train Value = $\frac{N_1}{N_2} \times \frac{N_3}{N_4} = \frac{50}{25} \times \frac{40}{35} = 2 \times \frac{8}{7} = \frac{16}{7} \approx 2.286$.

---

### 4. Important Points to Remember:

*   **Direction of Rotation:** In a simple gear train with an odd number of gears, the first and last gears rotate in the same direction. With an even number, they rotate in opposite directions. Idlers do not change the final direction of rotation relative to the number of meshes.
*   **Compound Gears:** All gears on a single shaft rotate at the same speed.
*   **Reverted Gear Trains:** The condition $N_1 + N_2 = N_3 + N_4$ (for a two-stage reverted train) is critical for design. The shafts of the first and last gears are concentric.
*   **Speed Ratio Calculation:** For any gear train, the overall speed ratio is the product of the individual speed ratios of each meshing pair, taking into account compound gears.
*   **Tabulation Method:** Provides a clear, step-by-step approach to organize calculations and avoid errors, especially in complex gear trains.
*   **Reference Books:**
    *   **Ballaney P. L. (2005):** Often provides straightforward examples and explanations of basic gear train types and their analysis.
    *   **Rattan S. S. (2009):** May delve into more detailed derivations of speed ratios and compound gear train applications.
    *   **Ghosh A. (2008):** Might offer a more theoretical approach to gear train kinematics and the underlying principles.
    *   **Shigley & Uicker (2010):** A comprehensive text that can provide advanced analysis techniques and insights into gear design considerations, supporting the understanding of how tabulation methods are applied in practice.

---

### 5. Practice Questions/Exercises:

**Question 1:**
A simple gear train consists of three gears A, B, and C. Gear A is the driver and meshes with gear B. Gear B is the idler gear and meshes with gear C. Gear C is the driven gear.
Number of teeth: $N_A = 24$, $N_B = 48$, $N_C = 30$.
If the driver gear A rotates at 120 rpm, determine the speed of gear C and its direction of rotation relative to gear A.

**Answer 1:**
*   Speed of Gear B ($\omega_B$): $\omega_B = \omega_A \times \frac{N_A}{N_B} = 120 \times \frac{24}{48} = 120 \times \frac{1}{2} = 60$ rpm.
*   Speed of Gear C ($\omega_C$): $\omega_C = \omega_B \times \frac{N_B}{N_C} = 60 \times \frac{48}{30} = 60 \times \frac{8}{5} = 96$ rpm.
*   Direction: Since there are three gears (odd number of meshes between A and C), Gear C rotates in the same direction as Gear A.

**Question 2:**
In a compound gear train, Gear A (driver) meshes with Gear B. Gear C is mounted on the same shaft as Gear B and meshes with Gear D (driven).
Number of teeth: $N_A = 20$, $N_B = 50$, $N_C = 25$, $N_D = 75$.
If Gear A rotates at 600 rpm, find the speed of the driven gear D.

**Answer 2:**
*   Speed of Gear B ($\omega_B$): $\omega_B = \omega_A \times \frac{N_A}{N_B} = 600 \times \frac{20}{50} = 600 \times \frac{2}{5} = 240$ rpm.
*   Since Gear C is on the same shaft as Gear B, $\omega_C = \omega_B = 240$ rpm.
*   Speed of Gear D ($\omega_D$): $\omega_D = \omega_C \times \frac{N_C}{N_D} = 240 \times \frac{25}{75} = 240 \times \frac{1}{3} = 80$ rpm.
*   Speed of driven gear D is 80 rpm.

**Question 3:**
A reverted gear train is to be designed. The first driver gear has 60 teeth and drives a gear with 30 teeth. The second driver gear, mounted on the same shaft as the first driven gear, has 20 teeth and drives the final driven gear. The first and last gears are concentric.
If the input speed of the first driver gear is 400 rpm, determine the number of teeth on the final driven gear and its speed.

**Answer 3:**
Let the gears be $G_1, G_2, G_3, G_4$, where $G_1$ drives $G_2$, and $G_3$ drives $G_4$. $G_1$ and $G_4$ are concentric.
$N_1 = 60$, $N_2 = 30$, $N_3 = 20$.
For a reverted gear train: $N_1 + N_2 = N_3 + N_4$.
$60 + 30 = 20 + N_4$
$90 = 20 + N_4$
$N_4 = 70$ teeth.

Speed of $G_1$ ($\omega_1$) = 400 rpm.
Speed of $G_2$ ($\omega_2$): $\omega_2 = \omega_1 \times \frac{N_1}{N_2} = 400 \times \frac{60}{30} = 400 \times 2 = 800$ rpm.
Since $G_3$ is on the same shaft as $G_2$, $\omega_3 = \omega_2 = 800$ rpm.
Speed of $G_4$ ($\omega_4$): $\omega_4 = \omega_3 \times \frac{N_3}{N_4} = 800 \times \frac{20}{70} = 800 \times \frac{2}{7} \approx 228.57$ rpm.

The number of teeth on the final driven gear is 70, and its speed is approximately 228.57 rpm.

---

### 6. Conclusion:

The tabulation method is an indispensable tool for analyzing gear trains in Mechanics of Machinery. It provides a structured, step-by-step approach to calculate speeds and understand the behavior of simple, compound, and reverted gear trains. By mastering this method, students can effectively solve problems related to gear drives, which is crucial for meeting Course Outcome 4. The principles discussed align with the foundational knowledge required for velocity analysis (CO2) and understanding the inversions of mechanisms (CO1), as gear trains are a fundamental type of mechanism.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
