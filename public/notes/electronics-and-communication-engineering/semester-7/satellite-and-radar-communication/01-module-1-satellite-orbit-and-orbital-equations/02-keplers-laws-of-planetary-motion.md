---
title: "Kepler‟s laws of planetary motion"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff30a"
status: "completed"
scrapedAt: "2026-05-23T18:10:29.024Z"
---
# Module 1: Satellite Orbit and Orbital Equations - Kepler's Laws of Planetary Motion

## 1. Introduction to Orbital Mechanics

Understanding satellite orbits is fundamental to satellite communication. Satellites are launched into space and follow specific paths around the Earth, dictated by the laws of physics. Kepler's laws, developed by Johannes Kepler in the early 17th century, describe the motion of celestial bodies under the influence of gravity. These laws are crucial for predicting and controlling the paths of satellites.

**Learning Outcome:** Illustrate the principles of satellite communication (K2) - *This topic lays the groundwork for understanding how satellites are positioned and how their movement affects communication.*

**Course Outcome Alignment:** CO1 (K2)

---

## 2. Kepler's First Law of Planetary Motion: The Law of Ellipses

### 2.1. Statement of the Law

"The orbit of every planet is an ellipse with the Sun at one of the two foci."

### 2.2. Application to Satellites

While Kepler originally described planetary motion around the Sun, his laws are directly applicable to the motion of satellites around the Earth. The Earth acts as the primary body (analogous to the Sun), and the satellite is the orbiting body (analogous to a planet).

### 2.3. Key Concepts and Definitions

*   **Ellipse:** A closed curve defined as the set of all points in a plane for which the sum of the distances from two fixed points (the foci) is constant.
*   **Foci (plural of focus):** The two fixed points within an ellipse. For a satellite orbit, one focus is always at the center of the Earth.
*   **Semi-major Axis (a):** Half of the longest diameter of the ellipse. It's a measure of the size of the orbit.
*   **Semi-minor Axis (b):** Half of the shortest diameter of the ellipse.
*   **Eccentricity (e):** A parameter that describes the shape of the ellipse.
    *   $e = 0$ for a circle (a special case of an ellipse).
    *   $0 < e < 1$ for an ellipse.
    *   $e = 1$ for a parabola.
    *   $e > 1$ for a hyperbola.

### 2.4. Orbital Elements Related to the Ellipse

The shape and orientation of an elliptical orbit are defined by several orbital elements:

*   **Semi-major Axis ($a$):** Determines the size of the orbit. The period of the orbit is directly related to the semi-major axis.
*   **Eccentricity ($e$):** Determines the shape of the orbit. A higher eccentricity means a more elongated ellipse.

### 2.5. Important Points to Remember

*   All satellite orbits are elliptical (or circular as a special case).
*   The Earth's center is always at one focus of the elliptical orbit.
*   The shape of the orbit depends on the eccentricity.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 2.6. Textual Reference

*   **Pratt & Allnutt, 3rd Edition, 2021 (Chapter 2: Orbital Mechanics):** This textbook will likely detail the mathematical definition of an ellipse and its relation to orbital parameters. They will emphasize that the Earth's gravitational pull dictates this elliptical path.

---

## 3. Kepler's Second Law of Planetary Motion: The Law of Areas

### 3.1. Statement of the Law

"A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time."

### 3.2. Application to Satellites

This law means that a satellite moves faster when it is closer to the Earth (perigee) and slower when it is farther away (apogee). The rate at which the satellite covers area in its orbit remains constant.

### 3.3. Key Concepts and Definitions

*   **Perigee:** The point in an orbit closest to the Earth.
*   **Apogee:** The point in an orbit farthest from the Earth.
*   **Areal Velocity:** The rate at which the area is swept out by the line segment connecting the satellite to the Earth's center. Kepler's second law states that this areal velocity is constant.

### 3.4. Mathematical Representation

The constancy of areal velocity can be expressed as:

$$ \frac{dA}{dt} = \text{constant} $$

Where:
*   $dA$ is the infinitesimal area swept out in time $dt$.

In terms of orbital parameters, the constant areal velocity is related to the semi-major axis ($a$) and the standard gravitational parameter ($\mu = GM$, where $G$ is the gravitational constant and $M$ is the mass of the Earth) by:

$$ \frac{dA}{dt} = \frac{1}{2} \sqrt{\mu a(1-e^2)} $$

Since $\mu$ and $a$ are constants for a given orbit, and $e$ is also constant for an elliptical orbit, the term $\sqrt{\mu a(1-e^2)}$ is a constant.

### 3.5. Important Points to Remember

*   Satellites speed up and slow down in their orbits.
*   The speed is maximum at perigee and minimum at apogee.
*   The product of the velocity and the distance from the focus is proportional to the distance from the focus. Specifically, $r \cdot v \cdot \sin(\phi)$ is constant, where $\phi$ is the angle between the velocity vector and the radial vector. At perigee and apogee, $\phi = 90^\circ$, so $r_p v_p = r_a v_a$.

### 3.6. Textual Reference

*   **Pratt & Allnutt, 3rd Edition, 2021 (Chapter 2: Orbital Mechanics):** This book will explain how the conservation of angular momentum leads to Kepler's second law and will likely provide derivations and examples of how speed varies with distance.

---

## 4. Kepler's Third Law of Planetary Motion: The Law of Harmonies

### 4.1. Statement of the Law

"The square of the orbital period of a planet is directly proportional to the cube of the semi-major axis of its orbit."

### 4.2. Application to Satellites

This law allows us to calculate the orbital period of a satellite if we know its semi-major axis, or vice versa. This is critical for planning satellite missions, as the period determines how often a satellite revisits a particular point on Earth.

### 4.3. Key Concepts and Definitions

*   **Orbital Period (T):** The time it takes for a satellite to complete one full orbit around the Earth.

### 4.4. Mathematical Representation

The relationship can be expressed as:

$$ T^2 \propto a^3 $$

Or, more precisely, for orbits around the Earth:

$$ T^2 = \frac{4\pi^2}{\mu} a^3 $$

Where:
*   $T$ is the orbital period in seconds.
*   $\mu = GM$ is the standard gravitational parameter of the Earth. For Earth, $\mu \approx 3.986 \times 10^{14} \, \text{m}^3/\text{s}^2$.
*   $a$ is the semi-major axis in meters.

### 4.5. Important Points to Remember

*   The orbital period depends only on the semi-major axis ($a$) and the mass of the central body (Earth).
*   The period is independent of the eccentricity and the mass of the satellite.
*   A larger semi-major axis results in a longer orbital period.

### 4.6. Examples

**Example 1:**
A satellite is in a circular orbit with a radius of 7,000 km. Calculate its orbital period.

*   For a circular orbit, the semi-major axis $a$ is equal to the radius $r$.
*   $a = 7,000 \, \text{km} = 7 \times 10^6 \, \text{m}$.
*   $\mu = 3.986 \times 10^{14} \, \text{m}^3/\text{s}^2$.

Using Kepler's Third Law:
$$ T^2 = \frac{4\pi^2}{\mu} a^3 $$
$$ T^2 = \frac{4\pi^2}{3.986 \times 10^{14} \, \text{m}^3/\text{s}^2} (7 \times 10^6 \, \text{m})^3 $$
$$ T^2 = \frac{39.478}{3.986 \times 10^{14}} (343 \times 10^{18}) \, \text{s}^2 $$
$$ T^2 \approx 9.89 \times 10^{-14} \times 343 \times 10^{18} \, \text{s}^2 $$
$$ T^2 \approx 3.39 \times 10^5 \, \text{s}^2 $$
$$ T \approx \sqrt{3.39 \times 10^5} \, \text{s} $$
$$ T \approx 582 \, \text{s} $$

To convert to minutes: $582 \, \text{s} / 60 \, \text{s/min} \approx 9.7 \, \text{minutes}$.

**Example 2:**
A geostationary satellite has an orbital period of approximately 23 hours, 56 minutes, and 4 seconds (one sidereal day). What is its semi-major axis?

*   $T = 23 \, \text{h} \times 3600 \, \text{s/h} + 56 \, \text{min} \times 60 \, \text{s/min} + 4 \, \text{s} = 82800 + 3360 + 4 = 86164 \, \text{s}$.
*   $\mu = 3.986 \times 10^{14} \, \text{m}^3/\text{s}^2$.

Rearranging Kepler's Third Law to solve for $a$:
$$ a^3 = \frac{\mu T^2}{4\pi^2} $$
$$ a^3 = \frac{(3.986 \times 10^{14} \, \text{m}^3/\text{s}^2) \times (86164 \, \text{s})^2}{4\pi^2} $$
$$ a^3 = \frac{(3.986 \times 10^{14}) \times (7.424 \times 10^9)}{39.478} \, \text{m}^3 $$
$$ a^3 = \frac{2.960 \times 10^{24}}{39.478} \, \text{m}^3 $$
$$ a^3 \approx 7.50 \times 10^{22} \, \text{m}^3 $$
$$ a = \sqrt[3]{7.50 \times 10^{22}} \, \text{m} $$
$$ a \approx 4.216 \times 10^7 \, \text{m} $$
$$ a \approx 42,160 \, \text{km} $$

This is the semi-major axis of a geostationary orbit.

### 4.7. Textual Reference

*   **Pratt & Allnutt, 3rd Edition, 2021 (Chapter 2: Orbital Mechanics):** This will be a core concept discussed extensively, providing the formula and its application for various orbit types. They might also discuss the limitations of the formula, like neglecting atmospheric drag for lower orbits.

---

## 5. Types of Satellite Orbits and Their Relation to Kepler's Laws

Kepler's laws govern all types of orbits, but the specific parameters ($a$, $e$) define the characteristics of each orbit type.

### 5.1. Circular Orbits

*   **Description:** A special case of an ellipse where $e = 0$. The distance from the Earth's center is constant.
*   **Kepler's Laws Applied:**
    *   **Law 1:** The orbit is a circle, with the Earth's center at the center of the circle (which is also a focus).
    *   **Law 2:** The satellite moves at a constant speed. Areal velocity is constant.
    *   **Law 3:** $T^2 \propto a^3$ still holds, where $a$ is the radius of the circular orbit.

### 5.2. Elliptical Orbits

*   **Description:** Orbits with $0 < e < 1$. The distance from the Earth varies.
*   **Kepler's Laws Applied:**
    *   **Law 1:** The orbit is an ellipse with the Earth's center at one focus.
    *   **Law 2:** The satellite's speed varies, being fastest at perigee and slowest at apogee. Areal velocity is constant.
    *   **Law 3:** $T^2 \propto a^3$ holds, where $a$ is the semi-major axis.

### 5.3. Specific Orbit Types (Examples)

*   **Geostationary Orbit (GEO):**
    *   **Characteristics:** Circular orbit in the equatorial plane with a period matching Earth's sidereal rotation (approx. 23h 56m 4s). Appears stationary from the ground.
    *   **Kepler's Laws Applied:** Governed by Kepler's laws. The constant speed and specific period are dictated by its semi-major axis (approx. 42,164 km from Earth's center).

*   **Geosynchronous Orbit (GSO):**
    *   **Characteristics:** An orbit with a period matching Earth's sidereal rotation, but it can be inclined or elliptical. The satellite appears to move in a figure-eight pattern or along a line in the sky.
    *   **Kepler's Laws Applied:** Governed by Kepler's laws. The period is determined by its semi-major axis, which is the same as GEO, but the eccentricity and inclination can vary.

*   **Low Earth Orbit (LEO):**
    *   **Characteristics:** Orbits typically between 160 km and 2,000 km altitude. Satellites move very quickly, with periods around 90-120 minutes.
    *   **Kepler's Laws Applied:** Governed by Kepler's laws. The small semi-major axis results in short periods. Atmospheric drag becomes a significant factor for LEO satellites, causing their orbits to decay over time, which is a deviation from the ideal Keplerian motion.

*   **Medium Earth Orbit (MEO):**
    *   **Characteristics:** Orbits between LEO and GEO, typically from 2,000 km to 35,786 km altitude. Examples include GPS and Galileo satellites.
    *   **Kepler's Laws Applied:** Governed by Kepler's laws. Periods are typically a few hours.

**Course Outcome Alignment:** CO1 (K2) - Understanding these orbit types is fundamental to illustrating satellite communication principles.

---

## 6. Summary of Kepler's Laws and Their Significance

| Law                               | Statement                                                                                                                            | Key Insight                                                                                                    | Application in Satellite Communication                                                                                                              |
| :-------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| **First Law (Law of Ellipses)**   | The orbit of every satellite is an ellipse with the Earth at one focus.                                                              | Defines the shape of the orbit.                                                                                | Understanding satellite visibility, coverage patterns, and station-keeping requirements.                                                            |
| **Second Law (Law of Areas)**     | A line segment joining a satellite and the Earth sweeps out equal areas during equal intervals of time.                              | Describes the satellite's speed variation within its orbit.                                                    | Predicting satellite position and velocity, critical for ground station antenna tracking and Doppler shift compensation.                          |
| **Third Law (Law of Harmonies)**  | The square of the orbital period is directly proportional to the cube of the semi-major axis of its orbit ($T^2 \propto a^3$). | Relates the orbital size to the time it takes to complete an orbit.                                            | Calculating orbital periods for different altitudes, crucial for mission planning, satellite constellation design, and communication scheduling. |

**Important Points to Remember:**

*   Kepler's laws provide a simplified model of orbital motion, assuming a two-body system and no external forces (like atmospheric drag or the gravitational pull of other celestial bodies).
*   These laws are fundamental to satellite orbit prediction, design, and control.
*   They are the basis for calculating orbital parameters such as period, velocity, and position.

---

## 7. Practice Questions and Exercises

**Question 1:**
A satellite is in a circular orbit around the Earth with a radius of 8,000 km. Calculate its orbital period in minutes.
(Given: $\mu_{\text{Earth}} = 3.986 \times 10^{14} \, \text{m}^3/\text{s}^2$)

**Answer:**
*   $a = r = 8,000 \, \text{km} = 8 \times 10^6 \, \text{m}$.
*   $T^2 = \frac{4\pi^2}{\mu} a^3$
*   $T^2 = \frac{4\pi^2}{3.986 \times 10^{14}} (8 \times 10^6)^3$
*   $T^2 = \frac{39.478}{3.986 \times 10^{14}} (512 \times 10^{18})$
*   $T^2 \approx 9.89 \times 10^{-14} \times 512 \times 10^{18}$
*   $T^2 \approx 5.06 \times 10^5 \, \text{s}^2$
*   $T \approx \sqrt{5.06 \times 10^5} \, \text{s} \approx 711.3 \, \text{s}$
*   $T \approx \frac{711.3}{60} \, \text{minutes} \approx 11.85 \, \text{minutes}$.

**Question 2:**
If a satellite has a perigee altitude of 200 km and an apogee altitude of 500 km, what can you say about its orbit based on Kepler's First Law?

**Answer:**
Based on Kepler's First Law, the orbit is an ellipse. The Earth's center is located at one of the foci of this ellipse. The varying altitudes indicate that the orbit is not circular ($e > 0$).

**Question 3:**
Explain how Kepler's Second Law is relevant to ground station tracking of a satellite.

**Answer:**
Kepler's Second Law states that a satellite's speed varies in its orbit, being fastest at perigee and slowest at apogee. This means the rate at which the satellite moves across the sky is not constant. Ground station antennas must continuously adjust their pointing direction and account for the Doppler shift caused by this changing velocity to maintain a locked connection.

**Question 4:**
A satellite in an elliptical orbit has a semi-major axis of 10,000 km. What is its approximate orbital period?
(Given: $\mu_{\text{Earth}} = 3.986 \times 10^{14} \, \text{m}^3/\text{s}^2$)

**Answer:**
*   $a = 10,000 \, \text{km} = 10 \times 10^6 \, \text{m}$.
*   $T^2 = \frac{4\pi^2}{\mu} a^3$
*   $T^2 = \frac{4\pi^2}{3.986 \times 10^{14}} (10 \times 10^6)^3$
*   $T^2 = \frac{39.478}{3.986 \times 10^{14}} (1000 \times 10^{18})$
*   $T^2 \approx 9.89 \times 10^{-14} \times 1000 \times 10^{18}$
*   $T^2 \approx 9.89 \times 10^{14} \, \text{s}^2$
*   $T \approx \sqrt{9.89 \times 10^{14}} \, \text{s} \approx 994,500 \, \text{s}$
*   $T \approx \frac{994,500}{3600} \, \text{hours} \approx 276.25 \, \text{hours}$.

*(Note: This period is extremely long, indicating a very large orbit, much larger than typical LEO or MEO orbits. This highlights the sensitivity of the period to the semi-major axis as per Kepler's Third Law.)*

---

## 8. References

*   **Primary:**
    *   Pratt, T., & Allnutt, J. (2021). *Satellite Communications* (3rd ed.). Wiley. (Chapter 2: Orbital Mechanics)
*   **Secondary:**
    *   Skolnik, M. I. (2017). *Introduction to Radar Systems* (2nd ed.). Tata McGraw-Hill. (While this book focuses on radar, foundational orbital mechanics might be briefly touched upon if relevant to radar tracking of satellites. However, Pratt & Allnutt is the primary source for this module).
    *   Ha, T. T. (2017). *Digital Satellite Communications* (2nd ed.). McGraw-Hill Education. (Likely to provide similar orbital mechanics coverage as Pratt & Allnutt).
    *   Pritchard, W. L. (2006). *Satellite Communications Systems Engineering* (2nd ed.). Pearson Education. (Another valuable resource for orbital mechanics principles).