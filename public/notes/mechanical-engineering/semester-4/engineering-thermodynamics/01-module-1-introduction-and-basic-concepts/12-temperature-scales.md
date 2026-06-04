---
title: "temperature scales"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 1: Introduction and basic concepts"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f3e"
status: "completed"
scrapedAt: "2026-05-20T17:53:17.557Z"
---
# ENGINEERING THERMODYNAMICS - Module 1: Introduction and Basic Concepts

## Topic: Temperature Scales

**Course Outcomes Alignment:**
*   **CO1: Understand basic concepts of thermodynamics (Knowledge Level: K1, K2)** - This topic directly addresses fundamental thermodynamic concepts like temperature and its measurement.
*   **CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2)** - Temperature is a crucial component in the statement and application of the Zeroth Law of Thermodynamics.

**Learning Outcomes Covered:**
*   This topic focuses on the fundamental concept of temperature and its various scales, which is a prerequisite for understanding all subsequent thermodynamic principles.

---

### 1. Introduction to Temperature

*   **Definition:** Temperature is a measure of the average kinetic energy of the molecules within a substance. It is a fundamental property that determines the direction of heat transfer.
    *   **High Temperature:** Molecules are moving faster, possessing higher kinetic energy.
    *   **Low Temperature:** Molecules are moving slower, possessing lower kinetic energy.
*   **Heat Transfer:** Heat naturally flows from a region of higher temperature to a region of lower temperature.
*   **Equilibrium:** When two systems are in thermal contact and there is no net heat transfer between them, they are said to be in thermal equilibrium.

---

### 2. Zeroth Law of Thermodynamics

*   **Statement:** If two systems are separately in thermal equilibrium with a third system, then they are also in thermal equilibrium with each other.
*   **Significance:** This law provides the fundamental basis for temperature measurement. The "third system" acts as a thermometer. If system A is in equilibrium with a thermometer, and system B is also in equilibrium with the same thermometer (indicating they register the same temperature), then A and B are at the same temperature.
*   **Reference:** As stated in *Thermodynamics: an engineering approach* by Cengel, Boles, and Kanoğlu, the Zeroth Law establishes the concept of temperature as a measurable property.

---

### 3. Common Temperature Scales

Different temperature scales are used for measurement, each with its own reference points and intervals.

#### 3.1. Celsius Scale (°C)

*   **Developed by:** Anders Celsius (18th century).
*   **Reference Points:**
    *   **Freezing Point of Water:** Defined as $0^\circ C$.
    *   **Boiling Point of Water:** Defined as $100^\circ C$.
*   **Interval:** The interval between these two points is divided into 100 equal degrees.
*   **Type:** This is a **relative** temperature scale, meaning its zero point is arbitrary (based on the freezing point of water).
*   **Common Usage:** Widely used in everyday life and in many scientific applications.

#### 3.2. Fahrenheit Scale (°F)

*   **Developed by:** Daniel Gabriel Fahrenheit (18th century).
*   **Reference Points:**
    *   **Freezing Point of Water:** Defined as $32^\circ F$.
    *   **Boiling Point of Water:** Defined as $212^\circ F$.
*   **Interval:** The interval between these two points is divided into 180 equal degrees.
*   **Type:** Also a **relative** temperature scale.
*   **Common Usage:** Primarily used in the United States for weather and everyday temperature measurements.

#### 3.3. Kelvin Scale (K)

*   **Developed by:** Lord Kelvin (William Thomson).
*   **Reference Points:**
    *   **Absolute Zero:** The theoretical lowest possible temperature at which molecular motion ceases. Defined as $0 \, K$.
    *   **Triple Point of Water:** The temperature and pressure at which water can coexist in solid, liquid, and gaseous phases. Defined as $273.16 \, K$.
*   **Interval:** The interval between the triple point of water and absolute zero is divided into 100 equal degrees. Importantly, the **size of a Kelvin degree is the same as the size of a Celsius degree.**
*   **Type:** This is an **absolute** temperature scale. Its zero point is absolute zero, not based on arbitrary properties of a substance.
*   **Common Usage:** The standard unit of temperature in the International System of Units (SI) and is widely used in scientific research and engineering.
*   **Reference:** *Engineering Thermodynamics* by P.K. Nag highlights the significance of the Kelvin scale as an absolute scale and its relation to the Zeroth Law.

#### 3.4. Rankine Scale (°R)

*   **Developed by:** William Rankine.
*   **Reference Points:**
    *   **Absolute Zero:** Defined as $0 \, ^\circ R$.
    *   **Freezing Point of Water:** Defined as $491.67 \, ^\circ R$ (approximately).
*   **Interval:** The interval between the freezing point and boiling point of water is 180 degrees (same as Fahrenheit). The size of a Rankine degree is the same as the size of a Fahrenheit degree.
*   **Type:** An **absolute** temperature scale.
*   **Common Usage:** Primarily used in some engineering applications in the United States, particularly in fields like HVAC and aerospace.

---

### 4. Interconversion Between Temperature Scales

The relationships between these scales allow for conversion from one to another.

#### 4.1. Celsius (°C) and Fahrenheit (°F)

*   **From °C to °F:** $T_{^\circ F} = \frac{9}{5} T_{^\circ C} + 32$
*   **From °F to °C:** $T_{^\circ C} = \frac{5}{9} (T_{^\circ F} - 32)$

**Example:** Convert $25^\circ C$ to Fahrenheit.
$T_{^\circ F} = \frac{9}{5} (25) + 32 = 9 \times 5 + 32 = 45 + 32 = 77^\circ F$

**Example:** Convert $98.6^\circ F$ (normal body temperature) to Celsius.
$T_{^\circ C} = \frac{5}{9} (98.6 - 32) = \frac{5}{9} (66.6) \approx 37^\circ C$

#### 4.2. Celsius (°C) and Kelvin (K)

*   **From °C to K:** $T_K = T_{^\circ C} + 273.15$
*   **From K to °C:** $T_{^\circ C} = T_K - 273.15$

**Important Note:** For many thermodynamic calculations, using $273$ instead of $273.15$ is often sufficient and accepted unless high precision is required.

**Example:** Convert $0^\circ C$ (freezing point of water) to Kelvin.
$T_K = 0 + 273.15 = 273.15 \, K$

**Example:** Convert $373.15 \, K$ (boiling point of water) to Celsius.
$T_{^\circ C} = 373.15 - 273.15 = 100^\circ C$

#### 4.3. Fahrenheit (°F) and Rankine (°R)

*   **From °F to °R:** $T_{^\circ R} = T_{^\circ F} + 459.67$
*   **From °R to °F:** $T_{^\circ F} = T_{^\circ R} - 459.67$

**Important Note:** Similar to Celsius to Kelvin, $459.67$ is often approximated as $460$ for less precise calculations.

**Example:** Convert $32^\circ F$ (freezing point of water) to Rankine.
$T_{^\circ R} = 32 + 459.67 = 491.67 \, ^\circ R$

#### 4.4. Kelvin (K) and Rankine (°R)

Since both are absolute scales and their degree sizes are related to Celsius and Fahrenheit respectively:
*   Size of a Kelvin degree = Size of a Celsius degree
*   Size of a Rankine degree = Size of a Fahrenheit degree
*   Relationship between Celsius and Fahrenheit: $\Delta T_{^\circ F} = \frac{9}{5} \Delta T_{^\circ C}$
*   Therefore, the relationship between Kelvin and Rankine degree intervals is: $\Delta T_{^\circ R} = \frac{9}{5} \Delta T_K$

*   **From K to °R:** $T_{^\circ R} = \frac{9}{5} T_K$
*   **From °R to K:** $T_K = \frac{5}{9} T_{^\circ R}$

**Example:** Convert $273.15 \, K$ to Rankine.
$T_{^\circ R} = \frac{9}{5} (273.15) = 1.8 \times 273.15 = 491.67 \, ^\circ R$

---

### 5. Absolute Zero and Its Significance

*   **Absolute Zero:** The theoretical point where particle motion stops, and thus no more thermal energy can be removed. This is $0 \, K$ or $0 \, ^\circ R$.
*   **Thermodynamic Temperature Scale:** The Kelvin scale (and Rankine) is crucial because it is based on absolute zero. All thermodynamic relations are expressed in terms of absolute temperatures. Using relative scales (Celsius or Fahrenheit) can lead to incorrect results or indeterminate forms in thermodynamic equations, particularly those involving ratios of temperatures.
*   **Reference:** *Fundamentals of Engineering Thermodynamics* by Moran and Shapiro emphasize the importance of using absolute temperature scales in thermodynamic analysis.

---

### 6. Practice Questions and Exercises

**Instructions:** Solve the following problems.

1.  Convert $50^\circ C$ to Fahrenheit.
2.  Convert $100^\circ F$ to Celsius.
3.  Convert $25^\circ C$ to Kelvin.
4.  Convert $298 \, K$ to Celsius.
5.  Convert $60^\circ F$ to Rankine.
6.  Convert $500 \, ^\circ R$ to Fahrenheit.
7.  Convert $0 \, ^\circ R$ to Kelvin.
8.  A patient has a body temperature of $38.5^\circ C$. What is this temperature in Fahrenheit?
9.  The temperature of a comfortable room is $70^\circ F$. What is this temperature in Kelvin?
10. The surface temperature of the sun is approximately $5778 \, K$. What is this temperature in Celsius?

---

### 7. Answers to Practice Questions

1.  $T_{^\circ F} = \frac{9}{5} (50) + 32 = 90 + 32 = 122^\circ F$
2.  $T_{^\circ C} = \frac{5}{9} (100 - 32) = \frac{5}{9} (68) \approx 37.78^\circ C$
3.  $T_K = 25 + 273.15 = 298.15 \, K$
4.  $T_{^\circ C} = 298 - 273.15 = 24.85^\circ C$
5.  $T_{^\circ R} = 60 + 459.67 = 519.67 \, ^\circ R$
6.  $T_{^\circ F} = 500 - 459.67 = 40.33^\circ F$
7.  $T_K = \frac{5}{9} (0) = 0 \, K$
8.  $T_{^\circ F} = \frac{9}{5} (38.5) + 32 = 69.3 + 32 = 101.3^\circ F$
9.  $T_{^\circ C} = \frac{5}{9} (70 - 32) = \frac{5}{9} (38) \approx 21.11^\circ C$. Then $T_K = 21.11 + 273.15 = 294.26 \, K$.
10. $T_{^\circ C} = 5778 - 273.15 = 5504.85^\circ C$

---

### 8. Important Points to Remember

*   **Temperature:** A measure of average molecular kinetic energy and the driving force for heat transfer.
*   **Zeroth Law:** Establishes the concept of temperature and thermal equilibrium.
*   **Celsius and Fahrenheit:** Relative scales with arbitrary zero points.
*   **Kelvin and Rankine:** Absolute scales with $0$ at absolute zero.
*   **Absolute Temperature:** Essential for accurate thermodynamic calculations. Always use Kelvin or Rankine when formulas require absolute temperature.
*   **Degree Size:**
    *   Celsius and Kelvin degrees are the same size.
    *   Fahrenheit and Rankine degrees are the same size.
*   **Conversion Formulas:** Memorize the key conversion formulas for Celsius-Fahrenheit and Celsius-Kelvin.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 9. References and Further Reading

*   **Cengel, Y. A., Boles, M. A., & Kanoğlu, M. (2011). *Thermodynamics: An Engineering Approach*. McGraw-Hill.** (Chapter 1)
*   **Nag, P. K. (2017). *Engineering Thermodynamics*. McGraw-Hill Education.** (Chapter 1)
*   **Moran, J. M., & Shapiro, N. M. (2006). *Fundamentals of Engineering Thermodynamics*. Wiley.** (Chapter 1)
*   **Sonntag, R. E., Borgnakke, C., & VanWylen, G. J. (2014). *Fundamentals of Thermodynamics*. Wiley.** (Chapter 1)
*   **Ansermet, J.-P., & Brechet, S. D. (2019). *Thermodynamics: Principles and Applications*. Cambridge University Press.** (Chapter 1)

---