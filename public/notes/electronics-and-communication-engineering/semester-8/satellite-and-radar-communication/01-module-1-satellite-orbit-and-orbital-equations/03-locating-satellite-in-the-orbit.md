---
title: "locating satellite in the orbit"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff895"
status: "completed"
scrapedAt: "2026-05-23T18:57:06.274Z"
---
# Module 1: Satellite Orbit and Orbital Equations - Locating Satellites in Orbit

## 1. Introduction to Satellite Orbits

Satellites are artificial bodies placed in orbit around the Earth or other celestial bodies to perform various functions, such as communication, navigation, weather forecasting, and scientific research. Understanding satellite orbits is fundamental to satellite communication.

**Key Concepts:**

*   **Orbit:** The path followed by a satellite around a celestial body due to gravity.
*   **Earth's Gravitational Field:** The force that keeps satellites in orbit.
*   **Orbital Mechanics:** The study of the motion of celestial bodies, particularly satellites.

**Learning Outcomes Addressed:**
*   Illustrate the principles of satellite communication (CO1).

**Textbook References:**
*   **Pratt, Allnutt:** Chapter 2: "Satellite Orbits" (provides foundational concepts).

---

## 2. Kepler's Laws of Planetary Motion (and their application to satellites)

Johannes Kepler's three laws describe the motion of planets around the Sun. These laws are also fundamental to understanding the motion of artificial satellites around the Earth.

**Kepler's First Law (Law of Ellipses):**
*   **Concept:** The orbit of every planet is an ellipse with the Sun at one of the two foci.
*   **Satellite Application:** The orbit of every satellite is an ellipse with the Earth at one of the two foci.
*   **Important Point:** Most satellite orbits are nearly circular, which is a special case of an ellipse where the two foci are at the same point.

**Kepler's Second Law (Law of Equal Areas):**
*   **Concept:** A line joining a planet and the Sun sweeps out equal areas during equal intervals of time.
*   **Satellite Application:** A line joining a satellite and the Earth sweeps out equal areas during equal intervals of time.
*   **Implication:** Satellites move faster when they are closer to the Earth (perigee) and slower when they are farther away (apogee).

**Kepler's Third Law (Law of Harmonies):**
*   **Concept:** The square of the orbital period of a planet is directly proportional to the cube of the semi-major axis of its orbit.
*   **Satellite Application:** The square of the orbital period ($T$) of a satellite is proportional to the cube of the semi-major axis ($a$) of its orbit.
*   **Mathematical Representation:** $T^2 \propto a^3$ or $T^2 = \frac{4\pi^2}{GM} a^3$, where:
    *   $T$ is the orbital period (time for one complete orbit).
    *   $a$ is the semi-major axis of the elliptical orbit.
    *   $G$ is the gravitational constant ($6.674 \times 10^{-11} \, \text{N m}^2/\text{kg}^2$).
    *   $M$ is the mass of the Earth ($5.972 \times 10^{24} \, \text{kg}$).
    *   $GM$ is the geocentric gravitational constant (often denoted by $\mu$), approximately $3.986 \times 10^{14} \, \text{m}^3/\text{s}^2$.

**Example:**
*   If we know the semi-major axis of a geostationary orbit, we can use Kepler's Third Law to calculate its orbital period. For a circular orbit, the semi-major axis is simply the orbital radius.

**Learning Outcomes Addressed:**
*   Illustrate the principles of satellite communication (CO1).

**Textbook References:**
*   **Pratt, Allnutt:** Chapter 2: "Satellite Orbits" (detailed discussion of Kepler's Laws).
*   **Pritchard:** Chapter 3: "Satellite Orbits and Mechanics" (reinforces the application of Kepler's Laws).

---

## 3. Orbital Elements (The Six Classical Orbital Elements)

To precisely define a satellite's orbit, six independent parameters are required. These are known as the **six classical orbital elements**.

**Key Concepts:**

*   **Orbital Plane:** The plane containing the satellite's orbit.
*   **Reference Plane:** Usually the Earth's equatorial plane.
*   **Reference Direction:** Usually the vernal equinox (the direction from the Earth's center to the point where the Sun crosses the celestial equator from south to north).

**The Six Orbital Elements:**

1.  **Semi-major Axis ($a$):**
    *   **Definition:** Half the length of the longest diameter of the ellipse. It determines the size of the orbit and is directly related to the orbital period (via Kepler's Third Law).
    *   **Units:** Kilometers (km) or meters (m).

2.  **Eccentricity ($e$):**
    *   **Definition:** A measure of how much the orbit deviates from a perfect circle. For an ellipse, $0 \le e < 1$.
        *   $e = 0$: Perfect circle.
        *   $0 < e < 1$: Ellipse.
        *   $e = 1$: Parabola (escape trajectory).
        *   $e > 1$: Hyperbola (escape trajectory).
    *   **Units:** Dimensionless.

3.  **Inclination ($i$):**
    *   **Definition:** The angle between the orbital plane and the Earth's equatorial plane.
    *   **Range:** $0^\circ \le i \le 180^\circ$.
    *   **Important Orbits based on Inclination:**
        *   $i = 0^\circ$: Equatorial orbit (e.g., geostationary).
        *   $0^\circ < i < 90^\circ$: Prograde orbit (satellite moves in the same direction as Earth's rotation).
        *   $i = 90^\circ$: Polar orbit (passes over or near the poles).
        *   $90^\circ < i < 180^\circ$: Retrograde orbit (satellite moves in the opposite direction to Earth's rotation).
        *   $i = 180^\circ$: Equivalent to an inclination of $0^\circ$ but moving in the opposite direction.
    *   **Units:** Degrees ($^\circ$) or radians.

4.  **Longitude of the Ascending Node ($\Omega$):**
    *   **Definition:** The angle, measured eastward in the Earth's equatorial plane, from the vernal equinox to the point where the satellite crosses the equatorial plane moving from south to north (the ascending node).
    *   **Units:** Degrees ($^\circ$) or radians.

5.  **Argument of Perigee ($\omega$):**
    *   **Definition:** The angle, measured in the orbital plane from the ascending node to the perigee (the point of closest approach to Earth), at the time of the satellite's passage through the ascending node.
    *   **Units:** Degrees ($^\circ$) or radians.

6.  **True Anomaly ($\nu$ or $\theta$):**
    *   **Definition:** The angle, measured in the orbital plane from the perigee to the satellite's current position. This parameter changes with time and defines the satellite's position at any given instant.
    *   **Units:** Degrees ($^\circ$) or radians.

**Important Point:** The combination of these six elements uniquely defines the shape, size, orientation, and position of a satellite's orbit at a specific epoch (time).

**Learning Outcomes Addressed:**
*   Illustrate the principles of satellite communication (CO1).

**Textbook References:**
*   **Pratt, Allnutt:** Chapter 2: "Satellite Orbits" (comprehensive explanation of orbital elements).
*   **Pritchard:** Chapter 3: "Satellite Orbits and Mechanics" (details the definition and significance of each orbital element).
*   **Ha:** Chapter 2: "Satellite Orbits" (provides a good overview).

---

## 4. Locating a Satellite in its Orbit: The Role of Orbital Equations

While orbital elements define the orbit itself, **orbital equations** are used to determine the satellite's position and velocity at any given time. This involves solving for the satellite's position vector and velocity vector.

**Key Concepts:**

*   **Position Vector ($\mathbf{r}$):** A vector pointing from the center of the Earth to the satellite.
*   **Velocity Vector ($\mathbf{v}$):** A vector representing the satellite's instantaneous velocity.
*   **Two-Body Problem:** The fundamental problem of predicting the motion of two bodies interacting only through their mutual gravitational attraction. The Earth and a satellite are often treated as a two-body system.
*   **Gravitational Parameter ($\mu = GM$):** A crucial constant in orbital mechanics.

**The General Equation of Satellite Motion:**

The motion of a satellite under the influence of Earth's gravity is governed by Newton's law of universal gravitation, leading to the following vector differential equation:

$$ \ddot{\mathbf{r}} = -\mu \frac{\mathbf{r}}{|\mathbf{r}|^3} $$

Where:
*   $\ddot{\mathbf{r}}$ is the acceleration vector of the satellite.
*   $\mathbf{r}$ is the position vector from the center of the Earth to the satellite.
*   $|\mathbf{r}|$ is the magnitude of the position vector (the distance from the Earth's center).
*   $\mu$ is the geocentric gravitational constant ($GM$).

**Solving for Position:**

Solving this differential equation yields the satellite's position vector $\mathbf{r}(t)$ as a function of time. This solution typically involves Kepler's equation, which relates time to the true anomaly.

**Kepler's Equation:**

Kepler's equation is a transcendental equation that links the mean anomaly ($M$) to the eccentric anomaly ($E$):

$$ M = E - e \sin E $$

Where:
*   $M = n(t - t_p)$ is the mean anomaly, representing the angle a fictitious satellite would travel if it moved at a constant angular speed ($n$) from perigee.
*   $n = \sqrt{\frac{\mu}{a^3}}$ is the mean motion (average angular velocity).
*   $t$ is the current time.
*   $t_p$ is the time of perigee passage.
*   $e$ is the eccentricity.
*   $E$ is the eccentric anomaly (an auxiliary angle that simplifies calculations).

**Finding the True Anomaly ($\nu$):**

Once the eccentric anomaly ($E$) is found by solving Kepler's equation (usually iteratively), the true anomaly ($\nu$) can be calculated using:

$$ \tan\left(\frac{\nu}{2}\right) = \sqrt{\frac{1+e}{1-e}} \tan\left(\frac{E}{2}\right) $$

Or alternatively:

$$ \cos \nu = \frac{\cos E - e}{1 - e \cos E} $$
$$ \sin \nu = \frac{\sqrt{1 - e^2} \sin E}{1 - e \cos E} $$

**Calculating Position in the Orbital Plane:**

With the true anomaly ($\nu$) and the semi-major axis ($a$), the distance from the Earth's center to the satellite ($r$) can be found using the polar equation of an ellipse:

$$ r = \frac{a(1 - e^2)}{1 + e \cos \nu} $$

The position of the satellite in the orbital plane (in a coordinate system with the origin at Earth's center, the x-axis pointing towards perigee, and the y-axis 90 degrees ahead in the direction of motion) can then be expressed as:

$$ \mathbf{r}_{\text{orbital}} = \begin{bmatrix} r \cos \nu \\ r \sin \nu \\ 0 \end{bmatrix} $$

**Transforming to Earth-Centered Inertial (ECI) Coordinates:**

To locate the satellite in space, the position vector must be transformed from the orbital plane frame to an Earth-Centered Inertial (ECI) frame. This transformation involves rotations using the other orbital elements (inclination $i$, longitude of the ascending node $\Omega$, and argument of perigee $\omega$).

The rotation sequence is typically:
1.  Rotate by $\omega$ around the z-axis (to align the perigee direction with the x-axis).
2.  Rotate by $i$ around the new x-axis (to tilt the orbit to the correct inclination).
3.  Rotate by $\Omega$ around the z-axis (to orient the ascending node correctly).

The resulting position vector $\mathbf{r}_{\text{ECI}}$ gives the satellite's coordinates $(x, y, z)$ in a fixed inertial frame.

**Example of Satellite Location:**

Imagine you have the six orbital elements for a satellite at a specific time.
1.  You know the semi-major axis ($a$) and eccentricity ($e$).
2.  You know the time since perigee passage ($t - t_p$).
3.  You calculate the mean motion ($n = \sqrt{\mu/a^3}$).
4.  You calculate the mean anomaly ($M = n(t - t_p)$).
5.  You solve Kepler's equation ($M = E - e \sin E$) for $E$ (e.g., using Newton-Raphson iteration).
6.  You calculate the true anomaly ($\nu$) using the relationship between $E$ and $\nu$.
7.  You calculate the radial distance ($r = a(1-e^2)/(1+e\cos\nu)$).
8.  You determine the position in the orbital plane.
9.  You then use the inclination ($i$), longitude of the ascending node ($\Omega$), and argument of perigee ($\omega$) to rotate this position vector into the ECI frame.

**Learning Outcomes Addressed:**
*   Illustrate the principles of satellite communication (CO1).
*   Design and analysis of satellite link (CO2) - Understanding position is crucial for link calculations.

**Textbook References:**
*   **Pratt, Allnutt:** Chapter 2: "Satellite Orbits" (discusses the mathematical basis for locating satellites).
*   **Pritchard:** Chapter 3: "Satellite Orbits and Mechanics" (provides detailed derivations and methods for calculating position).
*   **Ha:** Chapter 2: "Satellite Orbits" (includes relevant equations and their applications).

---

## 5. Important Satellite Orbits and Their Characteristics

Different types of orbits are used for various satellite applications, each with unique characteristics determined by their orbital elements.

**1. Geostationary Orbit (GEO)**

*   **Description:** A circular orbit directly above the Earth's equator.
*   **Orbital Elements:**
    *   Altitude: Approximately 35,786 km above the equator.
    *   Inclination ($i$): $0^\circ$.
    *   Eccentricity ($e$): $0$ (perfectly circular).
    *   Orbital Period: Exactly equal to Earth's sidereal rotation period (23 hours, 56 minutes, 4 seconds).
*   **Characteristics:** The satellite appears to remain stationary at a fixed point in the sky relative to an observer on Earth.
*   **Applications:** Telecommunications, broadcasting, weather monitoring.
*   **Textbook Reference:** Pratt, Allnutt (Chapter 2)

**2. Geostationary Transfer Orbit (GTO)**

*   **Description:** An elliptical orbit used to transfer a satellite from a low Earth orbit (like that achieved by launch vehicles) to its final geostationary orbit.
*   **Orbital Elements:**
    *   Perigee: Typically at a low altitude (e.g., a few hundred km).
    *   Apogee: At geostationary altitude (approx. 35,786 km).
    *   Inclination: Usually high, equal to the launch site latitude.
*   **Characteristics:** The satellite's onboard propulsion system is used to raise its apogee and reduce its inclination to achieve GEO.
*   **Applications:** Used by launch vehicles to deploy GEO satellites.
*   **Textbook Reference:** Pritchard (Chapter 3)

**3. Highly Elliptical Orbit (HEO)**

*   **Description:** Orbits with high eccentricity, resulting in significant variations in altitude and speed.
*   **Orbital Elements:** High eccentricity ($e > 0.7$).
*   **Characteristics:** The satellite spends most of its time in the apogee portion of its orbit, moving slowly, and passes quickly through perigee.
*   **Applications:**
    *   **Molniya Orbit:** A specific HEO with a period of approximately 12 hours and an apogee over Russia, providing coverage to high-latitude regions.
    *   Scientific research, reconnaissance.
*   **Textbook Reference:** Pratt, Allnutt (Chapter 2)

**4. Polar Orbit**

*   **Description:** An orbit where the satellite passes over or near the Earth's North and South poles.
*   **Orbital Elements:** Inclination ($i$) close to $90^\circ$.
*   **Characteristics:** As the Earth rotates beneath the orbit, the satellite can eventually cover the entire surface of the Earth over successive orbits.
*   **Applications:** Earth observation, reconnaissance, weather forecasting, mapping.
*   **Textbook Reference:** Pratt, Allnutt (Chapter 2)

**5. Sun-Synchronous Orbit (SSO)**

*   **Description:** A specific type of polar orbit where the satellite passes over any given point on Earth at the same local solar time.
*   **Orbital Elements:** Typically a near-polar, near-circular orbit with a specific inclination and altitude that causes the orbital plane to precess (rotate) at the same rate as the Earth's revolution around the Sun.
*   **Characteristics:** Ensures consistent illumination conditions for Earth imaging.
*   **Applications:** Remote sensing, Earth imaging, meteorological satellites.
*   **Textbook Reference:** Ha (Chapter 2)

**Learning Outcomes Addressed:**
*   Illustrate the principles of satellite communication (CO1).

**Textbook References:**
*   **Pratt, Allnutt:** Chapter 2: "Satellite Orbits"
*   **Ha:** Chapter 2: "Satellite Orbits"
*   **Pritchard:** Chapter 3: "Satellite Orbits and Mechanics"

---

## 6. Locating Satellites for Communication and Radar Applications

**6.1 Satellite Communication Perspective:**

For satellite communication, knowing the satellite's position is crucial for:

*   **Antenna Pointing:** Ground station antennas must be precisely pointed towards the satellite to maintain a strong link. This requires real-time orbital data.
*   **Link Budget Calculations:** The distance between the ground station and the satellite affects signal strength (path loss). Accurate position data is needed to calculate this distance.
*   **Coverage Prediction:** Understanding the satellite's orbit allows for predicting which geographical areas will be covered at any given time.
*   **Network Management:** Coordinating multiple satellites and ground stations requires precise knowledge of their locations.

**Example:** A geostationary satellite ensures continuous coverage of a particular region. However, its exact position can drift slightly due to gravitational perturbations, so ground antennas need to track these minor movements. For LEO (Low Earth Orbit) satellites, which move much faster, continuous tracking is essential.

**6.2 Radar Perspective:**

While the primary focus of this module is satellite orbits, understanding satellite location also has implications for radar systems, though perhaps indirectly within this context.

*   **Space Surveillance and Tracking (SST):** Radar systems are used to track artificial satellites and space debris in orbit. This involves detecting, identifying, and predicting the trajectories of objects in space.
*   **Target Identification:** If a radar system is designed to detect or track satellites (e.g., for defense or space situational awareness), knowing the predicted orbits of known satellites is vital for distinguishing them from other objects.

**Important Point:** While this module's core is satellite communication, the underlying principles of orbital mechanics and tracking are shared with radar's role in space surveillance.

**Learning Outcomes Addressed:**
*   Illustrate the principles of satellite communication (CO1).
*   Design and analysis of satellite link (CO2) - Location directly impacts link performance.
*   Illustrate Radar Fundamentals like Radar Equation and Applications (CO3) - Radar's role in space object tracking is an application.
*   Compare various types of Radars and tracking techniques (CO4) - Radar tracking of satellites is a specific technique.

**Textbook References:**
*   **Pratt, Allnutt:** Chapter 2, Chapter 12 ("Earth Station Antennas" - highlights the need for pointing).
*   **Skolnik:** Chapter 1 ("Introduction" - broadly covers radar applications, including space surveillance).
*   **Edde:** Chapter 1 ("Introduction to Radar Systems" - mentions tracking as a primary radar function).
*   **Kinsley, Quegan:** Chapter 1 ("Introduction to Radar" - discusses the importance of target dynamics in radar tracking).

---

## 7. Practice Questions and Answers

**Question 1:**
Which of Kepler's Laws directly relates the orbital period of a satellite to the size of its orbit?
a) First Law
b) Second Law
c) Third Law
d) None of the above

**Answer:** c) Third Law

**Question 2:**
What are the six classical orbital elements used to define a satellite's orbit?

**Answer:** Semi-major axis ($a$), Eccentricity ($e$), Inclination ($i$), Longitude of the Ascending Node ($\Omega$), Argument of Perigee ($\omega$), and True Anomaly ($\nu$).

**Question 3:**
A satellite in a perfectly circular orbit has an eccentricity of:
a) 0
b) 0.5
c) 1
d) Greater than 1

**Answer:** a) 0

**Question 4:**
Explain why knowing the satellite's position is crucial for satellite communication.

**Answer:** Knowing the satellite's position is crucial for:
*   **Antenna Pointing:** Ground station antennas need to be accurately aimed at the satellite.
*   **Link Budget Analysis:** The distance affects signal propagation losses.
*   **Coverage Prediction:** Determining which ground locations are within the satellite's footprint.
*   **Network Coordination:** Managing multiple satellites and ground stations effectively.

**Question 5:**
Define the Inclination ($i$) of a satellite orbit and provide an example of an orbit characterized by a specific inclination.

**Answer:** Inclination ($i$) is the angle between the orbital plane and the Earth's equatorial plane. An example is a Polar Orbit, where the inclination is approximately $90^\circ$.

**Question 6:**
If a satellite's orbit is nearly circular, what orbital parameter would be close to zero?
a) Inclination
b) Argument of Perigee
c) Eccentricity
d) True Anomaly

**Answer:** c) Eccentricity

**Question 7:**
What is the primary characteristic of a Geostationary Orbit (GEO) that makes it ideal for broadcasting and telecommunications?

**Answer:** In a GEO, the satellite orbits at the same rate as the Earth rotates and is positioned directly above the equator, causing it to appear stationary from the ground. This allows for fixed pointing of ground antennas and continuous coverage of a specific region.

---

## 8. Important Points to Remember

*   **Kepler's Laws** are fundamental to understanding satellite motion.
*   The **six classical orbital elements** precisely define a satellite's orbit.
*   **Orbital equations**, particularly Kepler's equation, are used to determine a satellite's position and velocity at any given time.
*   The **semi-major axis ($a$) and eccentricity ($e$)** determine the size and shape of the orbit.
*   The **inclination ($i$), longitude of the ascending node ($\Omega$), and argument of perigee ($\omega$)** determine the orientation of the orbital plane in space.
*   The **true anomaly ($\nu$)** defines the satellite's position along its orbit at a specific instant.
*   Different orbits (GEO, HEO, Polar, SSO) are chosen based on application requirements.
*   Accurate satellite location is vital for **communication link establishment, maintenance, and performance.**

---
This comprehensive set of notes covers the topic of locating satellites in orbit within the context of satellite communication, aligning with the specified learning outcomes and course outcomes, and referencing the provided textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
