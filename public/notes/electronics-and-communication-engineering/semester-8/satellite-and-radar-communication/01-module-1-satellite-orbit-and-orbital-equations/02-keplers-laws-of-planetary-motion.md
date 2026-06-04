---
title: "Kepler‟s laws of planetary motion"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff894"
status: "completed"
scrapedAt: "2026-05-23T18:57:05.541Z"
---
# Module 1: Satellite Orbit and Orbital Equations

## Topic: Kepler's Laws of Planetary Motion

**Course Outcomes Addressed:**

*   **CO1: Illustrate the principles of satellite communication (Knowledge Level: K2)** - Understanding Kepler's Laws is fundamental to grasping how satellites orbit Earth, a core principle of satellite communication.

---

### Introduction

Kepler's Laws of Planetary Motion, formulated by Johannes Kepler in the early 17th century, describe the motion of celestial bodies, including satellites orbiting the Earth. These laws are empirical, derived from meticulous astronomical observations, and provide the foundational mathematical framework for understanding satellite orbits. In the context of satellite communication, these laws are crucial for determining satellite trajectories, predicting their positions, and designing communication systems.

---

### Kepler's First Law: The Law of Ellipses

**Key Concept:** The orbit of every planet is an ellipse with the Sun at one of the two foci.

**Description:**

*   For satellites orbiting Earth, the Earth itself occupies one of the foci of the elliptical orbit.
*   An ellipse is defined as the set of all points in a plane that are equidistant from two fixed points (the foci).
*   A perfectly circular orbit is a special case of an ellipse where both foci coincide at the center.

**Definitions:**

*   **Ellipse:** A closed curve defined by two focal points (foci). The sum of the distances from any point on the ellipse to the two foci is constant.
*   **Foci (plural of focus):** The two fixed points that define an ellipse.
*   **Semi-major axis (a):** Half of the longest diameter of an ellipse. It's the average distance of the satellite from the Earth's center.
*   **Eccentricity (e):** A dimensionless parameter that describes how "stretched out" an ellipse is.
    *   For a **circle**, $e = 0$.
    *   For an **ellipse**, $0 < e < 1$.
    *   For a **parabola**, $e = 1$.
    *   For a **hyperbola**, $e > 1$.
*   **Periapsis:** The point in an orbit where the satellite is closest to the Earth.
*   **Apoapsis:** The point in an orbit where the satellite is farthest from the Earth.
    *   For Earth orbits, these are specifically called **Perigee** (closest) and **Apogee** (farthest).

**Mathematical Representation:**

The equation of an ellipse in polar coordinates with the focus at the origin is:

$r(\theta) = \frac{a(1 - e^2)}{1 + e \cos(\theta)}$

where:
*   $r(\theta)$ is the distance from the focus (Earth's center) to the satellite at an angle $\theta$.
*   $a$ is the semi-major axis.
*   $e$ is the eccentricity.
*   $\theta$ is the true anomaly (angle measured from the periapsis).

**Important Points to Remember:**

*   All natural satellites and most artificial satellites follow elliptical orbits.
*   The eccentricity of an orbit determines its shape. Low eccentricity means a nearly circular orbit, while high eccentricity means a more elongated orbit.

**Example:**

A geostationary orbit is a circular orbit (eccentricity $e=0$) above the Earth's equator. A highly elliptical orbit (HEO) might be used for certain communication or observation missions, characterized by a significant eccentricity.

---

### Kepler's Second Law: The Law of Areas

**Key Concept:** A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time.

**Description:**

*   For a satellite orbiting the Earth, the line connecting the Earth's center to the satellite sweeps out equal areas in equal time intervals.
*   This means that a satellite moves **faster** when it is closer to the Earth (near periapsis) and **slower** when it is farther from the Earth (near apoapsis).

**Definitions:**

*   **Areal velocity:** The rate at which the line segment from the focus to the orbiting body sweeps out area. Kepler's second law states that this areal velocity is constant.

**Mathematical Representation:**

The areal velocity ($dA/dt$) is constant and can be expressed as:

$\frac{dA}{dt} = \frac{1}{2} r^2 \dot{\theta} = \text{constant}$

where:
*   $r$ is the distance of the satellite from the Earth's center.
*   $\dot{\theta}$ is the angular velocity of the satellite (rate of change of true anomaly with respect to time).

This constant areal velocity is related to the satellite's specific angular momentum ($h$):

$\frac{dA}{dt} = \frac{h}{2}$

where $h = r^2 \dot{\theta}$.

**Important Points to Remember:**

*   This law directly explains why satellites speed up and slow down in their orbits.
*   It's a direct consequence of the conservation of angular momentum in the absence of external torques.

**Example:**

Imagine a satellite in an elliptical orbit. When it's at perigee (closest to Earth), it covers a certain area in one hour. According to Kepler's second law, in the same amount of time at apogee (farthest from Earth), it will cover the *exact same* area. However, because it's farther away, it will have to travel a much larger distance to sweep out that area, hence moving slower.

---

### Kepler's Third Law: The Law of Periods

**Key Concept:** The square of the orbital period is proportional to the cube of the semi-major axis of the orbit.

**Description:**

*   This law relates the time it takes for a satellite to complete one orbit (the orbital period) to the size of its orbit (the semi-major axis).
*   Satellites in larger orbits (larger semi-major axis) take longer to complete an orbit.

**Definitions:**

*   **Orbital Period (T):** The time it takes for a satellite to complete one full revolution around the Earth.

**Mathematical Representation:**

$T^2 \propto a^3$

Or, more precisely, for an orbit around a central mass $M$:

$T^2 = \frac{4\pi^2}{GM} a^3$

where:
*   $T$ is the orbital period.
*   $a$ is the semi-major axis.
*   $G$ is the gravitational constant ($6.674 \times 10^{-11} \, \text{N m}^2/\text{kg}^2$).
*   $M$ is the mass of the central body (Earth in this case).

The term $GM$ is also known as the standard gravitational parameter ($\mu$) for the central body. For Earth, $\mu \approx 3.986 \times 10^{14} \, \text{m}^3/\text{s}^2$.

So, the equation becomes:

$T^2 = \frac{4\pi^2}{\mu} a^3$

**Important Points to Remember:**

*   This is a crucial law for satellite communication as it allows us to determine the period of a satellite for a given orbit, or vice-versa.
*   For circular orbits ($e=0$), the semi-major axis $a$ is equal to the orbital radius $r$.

**Example:**

*   **Geostationary Orbit (GEO):** Satellites in GEO are placed in a circular orbit with a period of approximately 23 hours, 56 minutes, and 4 seconds (one sidereal day), which matches the Earth's rotation period. This requires a specific semi-major axis. Using Kepler's third law, we can calculate this semi-major axis.
*   **Low Earth Orbit (LEO):** Satellites in LEO have much shorter orbital periods (around 90 minutes) because their semi-major axes are significantly smaller.

**Calculation Example (GEO):**

Let's estimate the semi-major axis of a geostationary orbit. We know $T \approx 23.934$ hours $\approx 86164$ seconds.
$T^2 = \frac{4\pi^2}{\mu} a^3$
$a^3 = \frac{\mu T^2}{4\pi^2}$
$a^3 = \frac{(3.986 \times 10^{14} \, \text{m}^3/\text{s}^2) \times (86164 \, \text{s})^2}{4\pi^2}$
$a^3 \approx \frac{(3.986 \times 10^{14}) \times (7.424 \times 10^9)}{39.478}$
$a^3 \approx 7.50 \times 10^{22} \, \text{m}^3$
$a \approx \sqrt[3]{7.50 \times 10^{22}} \, \text{m} \approx 42164 \, \text{km}$

This is the semi-major axis, which for a circular orbit is the orbital radius. The altitude above the Earth's surface is $a - R_{Earth}$, where $R_{Earth} \approx 6371 \, \text{km}$. So, the altitude is approximately $42164 - 6371 \approx 35793 \, \text{km}$.

---

### Relationship to Newton's Law of Universal Gravitation

Kepler's laws, while observational, are a direct consequence of Newton's Law of Universal Gravitation. Newton proved that the inverse-square nature of gravity leads to elliptical orbits.

*   **Kepler's First Law:** Derived from Newton's law, proving that objects under an inverse-square force law follow conic sections (including ellipses).
*   **Kepler's Second Law:** A consequence of the conservation of angular momentum, which holds true for any central force (like gravity).
*   **Kepler's Third Law:** Derived by applying Newton's Law of Gravitation to circular and then elliptical orbits, relating the period and semi-major axis through the mass of the central body.

**Textbook References:**

*   **Pratt & Allnutt (Wiley, 3rd Edition, 2021):** Chapter 2, "Satellite Orbits," will provide detailed derivations and applications of Kepler's laws in the context of satellite communication.
*   **Skolnik (Tata McGraw-Hill, 2nd Edition, 2017):** Chapter 2, "Orbital Mechanics," will also cover these foundational laws and their importance for radar and satellite systems.

---

### Practice Questions and Answers

**Question 1:**
A satellite has an elliptical orbit with an eccentricity of 0.2.
a) What type of orbit is this?
b) If the semi-major axis of the orbit is 8,000 km, what is the distance at perigee? (Assume Earth's radius is negligible for this calculation, or use the formula directly).

**Answer 1:**
a) The orbit is elliptical because the eccentricity (0.2) is between 0 and 1.
b) The distance at perigee is given by $r_p = a(1-e)$.
$r_p = 8000 \, \text{km} \times (1 - 0.2)$
$r_p = 8000 \, \text{km} \times 0.8$
$r_p = 6400 \, \text{km}$

**Question 2:**
A satellite in a circular orbit around Earth has a period of 100 minutes. Using Kepler's Third Law, estimate the altitude of this satellite. (Given: $\mu_{Earth} \approx 3.986 \times 10^{14} \, \text{m}^3/\text{s}^2$, $R_{Earth} \approx 6371 \, \text{km}$).

**Answer 2:**
First, convert the period to seconds:
$T = 100 \, \text{minutes} \times 60 \, \text{s/minute} = 6000 \, \text{s}$.

Using Kepler's Third Law: $T^2 = \frac{4\pi^2}{\mu} a^3$
$a^3 = \frac{\mu T^2}{4\pi^2}$
$a^3 = \frac{(3.986 \times 10^{14} \, \text{m}^3/\text{s}^2) \times (6000 \, \text{s})^2}{4\pi^2}$
$a^3 = \frac{(3.986 \times 10^{14}) \times (3.6 \times 10^7)}{39.478}$
$a^3 \approx \frac{1.435 \times 10^{22}}{39.478} \approx 3.635 \times 10^{20} \, \text{m}^3$
$a = \sqrt[3]{3.635 \times 10^{20}} \, \text{m} \approx 71355 \, \text{m} \approx 7135.5 \, \text{km}$

This value $a$ is the semi-major axis. For a circular orbit, $a$ is the orbital radius.
Altitude = Orbital radius - Earth's radius
Altitude $\approx 7135.5 \, \text{km} - 6371 \, \text{km}$
Altitude $\approx 764.5 \, \text{km}$

*(Note: This is a typical altitude for Low Earth Orbit (LEO) satellites).*

**Question 3:**
Explain why a satellite moves faster when it is closer to Earth. Which of Kepler's laws explains this phenomenon?

**Answer 3:**
A satellite moves faster when it is closer to Earth due to the conservation of angular momentum. As the satellite moves closer to Earth, its distance ($r$) decreases. To keep the angular momentum ($L = mvr$, where $v$ is tangential velocity) constant, the velocity ($v$) must increase. This phenomenon is explained by **Kepler's Second Law** (the Law of Areas), which states that the areal velocity is constant. When the satellite is closer, it sweeps out a given area in the same time it sweeps out a smaller area when farther away, implying a higher velocity when closer.

---

### Key Takeaways for Satellite Communication

*   Kepler's laws are the foundation for understanding any satellite's trajectory.
*   The shape of the orbit (defined by eccentricity) dictates how close and far the satellite gets from Earth.
*   The speed of the satellite varies throughout its orbit, being fastest at perigee and slowest at apogee.
*   The orbital period is directly related to the size of the orbit, which is crucial for mission planning and communication link budgets.
*   Geostationary orbits are a special case of circular orbits that require a specific altitude to match Earth's rotation, a direct application of Kepler's Third Law.

---

This concludes the notes on Kepler's Laws of Planetary Motion for Module 1. These laws are fundamental building blocks for all subsequent topics in satellite orbits and communication.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
