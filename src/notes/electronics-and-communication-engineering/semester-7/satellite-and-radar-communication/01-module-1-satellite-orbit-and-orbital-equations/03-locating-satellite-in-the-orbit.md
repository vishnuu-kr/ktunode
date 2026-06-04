---
title: "locating satellite in the orbit"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff30b"
status: "completed"
scrapedAt: "2026-05-23T18:10:29.935Z"
---
# Module 1: Satellite Orbit and Orbital Equations - Locating a Satellite in Orbit

## 1. Introduction to Satellite Orbits

This module focuses on understanding how satellites are positioned and tracked in space. To effectively communicate with or utilize a satellite, we must first know its location. This involves understanding the fundamental principles of orbital mechanics.

### 1.1 Key Concepts and Definitions

*   **Orbit:** The path taken by a celestial body or artificial satellite around another celestial body due to gravity.
*   **Satellite:** An object, either natural or artificial, that orbits a planet or star. In this context, we are primarily concerned with artificial satellites.
*   **Geocentric Orbit:** An orbit around the Earth.
*   **Perigee:** The point in an elliptical orbit where the satellite is closest to Earth.
*   **Apogee:** The point in an elliptical orbit where the satellite is farthest from Earth.
*   **Orbital Velocity:** The speed at which a satellite travels in its orbit.
*   **Gravitational Force:** The force of attraction between two objects with mass, which keeps satellites in orbit.
*   **Centripetal Force:** The force that keeps an object moving in a circular path, directed towards the center of the circle. In satellite orbits, gravity provides the centripetal force.
*   **Kepler's Laws of Planetary Motion:** These laws describe the motion of planets around the Sun and are also applicable to satellites orbiting the Earth.
    1.  **First Law (Law of Ellipses):** The orbit of every planet (or satellite) is an ellipse with the Sun (or Earth) at one of the two foci.
    2.  **Second Law (Law of Areas):** A line joining a planet (or satellite) and the Sun (or Earth) sweeps out equal areas during equal intervals of time. This implies that the satellite moves faster when closer to Earth and slower when farther away.
    3.  **Third Law (Law of Periods):** The square of the orbital period of a planet (or satellite) is proportional to the cube of the semi-major axis of its orbit.

### 1.2 The Role of Gravity in Maintaining Orbits

As stated by Newton's Law of Universal Gravitation, every particle of matter in the universe attracts every other particle. For a satellite orbiting Earth, the Earth's gravitational pull provides the necessary centripetal force to keep the satellite moving in its curved path.

*   **Force of Gravity ($F_g$)**: $F_g = \frac{G M m}{r^2}$, where:
    *   $G$ is the gravitational constant.
    *   $M$ is the mass of the Earth.
    *   $m$ is the mass of the satellite.
    *   $r$ is the distance between the center of the Earth and the satellite.

*   For a satellite in a **circular orbit**, the gravitational force is equal to the centripetal force ($F_c$):
    *   $F_c = \frac{m v^2}{r}$, where $v$ is the orbital velocity.
    *   Therefore, $\frac{G M m}{r^2} = \frac{m v^2}{r}$.

*   This simplifies to: $v^2 = \frac{G M}{r}$, or $v = \sqrt{\frac{G M}{r}}$.
    *   This equation shows that the orbital velocity depends only on the distance from the Earth's center.

*(Refer to Pratt & Allnutt, Chapter 2 for detailed derivations and examples of orbital mechanics.)*

## 2. Describing Satellite Orbits

To locate a satellite, we need to define its orbital path. This is typically done using a set of orbital elements.

### 2.1 Orbital Elements (Keplerian Elements)

These six parameters uniquely define the size, shape, and orientation of a satellite's orbit at a specific time. They are typically measured with respect to the Earth.

1.  **Semi-major Axis ($a$)**: Defines the size of the orbit. For a circular orbit, $a$ is the radius. For an elliptical orbit, it's half the longest diameter of the ellipse.
    *   Related to the orbital period ($T$) by Kepler's Third Law: $T^2 = \frac{4\pi^2}{GM} a^3$.

2.  **Eccentricity ($e$)**: Defines the shape of the orbit.
    *   $e = 0$: Circular orbit.
    *   $0 < e < 1$: Elliptical orbit.
    *   $e = 1$: Parabolic orbit (escape trajectory).
    *   $e > 1$: Hyperbolic orbit (escape trajectory).

3.  **Inclination ($i$)**: The angle between the orbital plane and the Earth's equatorial plane.
    *   $i = 0^\circ$: Equatorial orbit (satellite orbits directly above the equator).
    *   $i = 90^\circ$: Polar orbit (satellite passes over or near the Earth's poles).
    *   $i = 180^\circ$: Retrograde orbit (orbit in the opposite direction of Earth's rotation).

4.  **Right Ascension of the Ascending Node (RAAN) ($\Omega$)**: The angle, measured in the equatorial plane, from the Vernal Equinox (the direction towards the constellation Aries) to the point where the satellite crosses the equator moving from south to north (the ascending node).

5.  **Argument of Perigee ($\omega$)**: The angle, measured in the orbital plane, from the ascending node to the perigee.

6.  **True Anomaly ($v$ or $\theta$)**: The angle, measured in the orbital plane, from the perigee to the satellite's current position. This describes the satellite's position along its orbit at a given time.

*(Refer to Pratt & Allnutt, Chapter 3 for detailed explanations and diagrams of orbital elements.)*

### 2.2 Important Orbital Types and Their Location Characteristics

Different orbit types have distinct characteristics that help in locating and predicting their positions.

*   **Geostationary Orbit (GEO)**:
    *   Altitude: Approximately 35,786 km above the equator.
    *   Inclination: $0^\circ$.
    *   Eccentricity: Close to 0 (near-circular).
    *   Orbital Period: 23 hours, 56 minutes, 4 seconds (same as Earth's sidereal rotation period).
    *   **Location Characteristic:** Appears to be stationary from a point on Earth's surface. This makes them ideal for fixed-point communication. The satellite is located directly above a specific point on the equator.
    *   *(Pratt & Allnutt, Chapter 2.3.2)*

*   **Geosynchronous Orbit (GSO)**:
    *   Altitude: Same as GEO.
    *   Orbital Period: Same as Earth's sidereal rotation period.
    *   **Location Characteristic:** The satellite has the same period as Earth's rotation, meaning it returns to the same position in the sky after one sidereal day. However, GSO satellites can have an inclination and/or eccentricity, causing them to drift north-south or east-west relative to a ground observer.
    *   *(Pratt & Allnutt, Chapter 2.3.1)*

*   **Medium Earth Orbit (MEO)**:
    *   Altitude: Typically between 2,000 km and 35,786 km.
    *   Orbital Period: Varies, but typically a few hours.
    *   **Location Characteristic:** Satellites in MEO are visible from a particular ground station for a significant portion of their orbit but are not stationary. Examples include GPS, GLONASS, and Galileo navigation systems. Their position changes predictably throughout their orbit.
    *   *(Pratt & Allnutt, Chapter 2.3.3)*

*   **Low Earth Orbit (LEO)**:
    *   Altitude: Typically between 160 km and 2,000 km.
    *   Orbital Period: Around 90-120 minutes.
    *   **Location Characteristic:** Satellites in LEO move rapidly across the sky and are visible from a ground station for only a few minutes at a time. They often have polar or near-polar orbits, allowing them to cover the entire Earth's surface over multiple orbits. Examples include the International Space Station (ISS) and many communication constellations like Starlink.
    *   *(Pratt & Allnutt, Chapter 2.3.4)*

*(CO1: Illustrate the principles of satellite communication. Understanding these orbits is fundamental to satellite communication.)*

## 3. Predicting Satellite Position

Locating a satellite means predicting its position (latitude, longitude, and altitude) at any given time. This is achieved by using the orbital elements and applying orbital mechanics equations.

### 3.1 The Two-Body Problem and its Solutions

The motion of a satellite around a central body (like Earth) can be approximated as a **two-body problem**, where only the gravitational interaction between the Earth and the satellite is considered. The solution to this problem, as described by Kepler's laws, is that orbits are conic sections (ellipses, parabolas, or hyperbolas).

### 3.2 Orbit Determination Techniques

Orbit determination involves using observed data (tracking data like range and range rate, or angular measurements) to calculate the satellite's orbital elements.

*   **Initial Orbit Determination (IOD)**: This is done when a satellite is first launched or when its orbit is unknown. It involves using a few sets of observations to estimate the initial orbital elements.
*   **Orbit Refinement/Propagation**: Once the orbital elements are known, they can be used to predict the satellite's position at future times. This involves considering perturbations that cause the orbital elements to change over time.

### 3.3 Mathematical Models for Position Prediction

The core of locating a satellite lies in solving the equations of motion.

#### 3.3.1 Positional Coordinates

A satellite's position can be described in various coordinate systems:

*   **Inertial Coordinate System**: A frame of reference that is not accelerating. The Earth-Centered Inertial (ECI) frame is commonly used, with its origin at the Earth's center, one axis pointing to the Vernal Equinox, and another axis aligned with the Earth's rotational axis.
*   **Earth-Centered Earth-Fixed (ECEF) Coordinate System**: A frame of reference that rotates with the Earth. Its origin is at the Earth's center, and its axes are fixed to the Earth's surface. This system is useful for relating the satellite's position to ground stations.

#### 3.3.2 Equations for Position Calculation (Conceptual)

While the detailed mathematical derivations are complex, the general approach is:

1.  **Solve Kepler's Equation**: This is a transcendental equation that relates the mean anomaly (which increases uniformly with time) to the true anomaly (the actual angular position of the satellite).
    *   Mean Anomaly ($M$) = $n(t - t_0)$, where $n$ is the mean motion ($n = \sqrt{\frac{GM}{a^3}}$) and $t_0$ is the epoch time.
    *   Kepler's Equation: $M = E - e \sin E$, where $E$ is the eccentric anomaly. This equation is solved iteratively for $E$.

2.  **Calculate Position in the Orbital Plane**: Once the true anomaly ($v$) is known, the satellite's position (distance from the focus and components of position vector) can be calculated in a coordinate system within the orbital plane.
    *   Distance from Earth's center ($r$) = $\frac{a(1-e^2)}{1+e \cos v}$

3.  **Transform to Inertial Frame**: Using the orbital elements RAAN ($\Omega$), inclination ($i$), and argument of perigee ($\omega$), the position vector is rotated from the orbital plane coordinate system to the inertial (ECI) frame. This involves a series of rotation matrices.

4.  **Transform to Earth-Fixed Frame (if needed)**: The position in the ECI frame is then transformed to the ECEF frame by accounting for Earth's rotation.

*(Refer to Pratt & Allnutt, Chapter 3 and Appendix C for detailed mathematical treatments of orbit propagation and coordinate transformations.)*

### 3.4 Perturbations on Orbits

Real-world orbits are not perfect ellipses due to various external forces and non-uniformities.

*   **Earth's Oblateness (J2 perturbation)**: The Earth is not a perfect sphere, but is slightly flattened at the poles and bulges at the equator. This causes perturbations in the orbital elements, particularly the RAAN and the argument of perigee.
*   **Atmospheric Drag**: Significant for satellites in LEO, this force slows down the satellite, causing its orbit to decay.
*   **Gravitational Pull of the Moon and Sun**: These celestial bodies exert gravitational forces on satellites, causing minor perturbations.
*   **Solar Radiation Pressure**: Photons from the sun exert a small but continuous force on the satellite's surface.

These perturbations require sophisticated models and continuous tracking to maintain accurate orbit predictions.

*(Refer to Pratt & Allnutt, Chapter 3.5 for a discussion on orbital perturbations.)*

## 4. Practical Aspects of Locating Satellites

### 4.1 Ground Station Tracking

Ground stations are essential for tracking satellites. They use various techniques:

*   **Radar Tracking**: Active tracking using radar pulses to determine the range, range rate, and angular position of the satellite.
*   **Telemetry, Tracking, and Command (TT&C)**: Satellites transmit telemetry data (health status, sensor readings) and receive commands from ground stations. The timing and frequency of these transmissions can also be used for tracking.
*   **Global Navigation Satellite Systems (GNSS)**: Some satellites (especially those in MEO) use GNSS signals for precise orbit determination.

### 4.2 Satellite Tracking Networks

Organizations like NASA, ESA, and commercial entities operate dedicated tracking networks to monitor and control satellites. These networks comprise multiple ground stations strategically located around the globe.

### 4.3 Two-Line Elements (TLEs)

A widely used format for disseminating satellite orbital information. TLEs are sets of data, usually updated daily, that contain the orbital elements of a satellite in a simplified format. They are derived from complex orbital models but are a convenient way to predict satellite positions for amateur and professional use.

*   **Format:** TLEs consist of three lines of text.
    *   Line 0: Satellite name and designation.
    *   Line 1: Orbital elements (inclination, RAAN, eccentricity, etc.) in a specific format.
    *   Line 2: Orbital period, epoch time, and other parameters.

*   **Usage:** Software and websites use TLEs to calculate satellite passes, predict visibility, and estimate positions. While useful for general tracking, they are less precise than state-vector data.

*(Refer to online resources for examples and explanations of TLE format and usage.)*

## 5. Course Outcome Alignment

*   **CO1: Illustrate the principles of satellite communication (Knowledge Level: K2)**
    *   This module directly addresses this by explaining the fundamental concept of orbits, which is the foundation of how satellites stay in position to provide communication services. Understanding GEO, GSO, MEO, and LEO orbits is crucial for illustrating different communication architectures.

*   **CO2: Design and analysis of satellite link (Knowledge Level: K3)**
    *   While this module focuses on locating the satellite, understanding its position is a prerequisite for link design. Knowing the satellite's location and orbital path allows for calculating the distance to the ground station, the elevation angle, and the look angles, all of which are critical for link budget analysis. For instance, the distance dictates path loss, and elevation angles affect atmospheric attenuation and antenna pointing.

*(Note: While CO2 is a K3 level outcome, this module lays the K2 groundwork. The application of this knowledge in design comes in later modules.)*

## 6. Important Points to Remember

*   **Gravity is the primary force** keeping satellites in orbit.
*   **Kepler's Laws** are fundamental to understanding orbital motion.
*   **Orbital elements** (a, e, i, $\Omega$, $\omega$, $v$) uniquely define an orbit.
*   **Different orbit types (GEO, GSO, MEO, LEO)** have distinct characteristics that dictate their application.
*   **Accurate position prediction** requires solving complex orbital mechanics equations and accounting for perturbations.
*   **Ground station tracking** and data dissemination (like TLEs) are crucial for operational use.

## 7. Practice Questions and Exercises

**Question 1:**
A satellite is in a circular orbit around Earth at an altitude of 1000 km. What is its orbital velocity? (Assume Earth's radius = 6371 km, $G = 6.674 \times 10^{-11} \text{ Nm}^2/\text{kg}^2$, $M_{Earth} = 5.972 \times 10^{24} \text{ kg}$).

**Answer:**
*   Radius of orbit ($r$) = Earth's radius + altitude = $6371 \text{ km} + 1000 \text{ km} = 7371 \text{ km} = 7.371 \times 10^6 \text{ m}$.
*   Orbital velocity ($v$) = $\sqrt{\frac{GM}{r}}$
*   $v = \sqrt{\frac{(6.674 \times 10^{-11} \text{ Nm}^2/\text{kg}^2) \times (5.972 \times 10^{24} \text{ kg})}{7.371 \times 10^6 \text{ m}}}$
*   $v \approx \sqrt{\frac{3.986 \times 10^{14}}{7.371 \times 10^6}} \approx \sqrt{5.407 \times 10^7} \approx 7353 \text{ m/s}$ or $7.353 \text{ km/s}$.

**Question 2:**
Which orbital element describes the shape of a satellite's orbit, and what is the value of this element for a perfectly circular orbit?

**Answer:**
The orbital element that describes the shape of a satellite's orbit is **eccentricity ($e$)**. For a perfectly circular orbit, the eccentricity is **0**.

**Question 3:**
What is the primary characteristic of a Geostationary Orbit (GEO) that makes it suitable for broadcasting and fixed communication services?

**Answer:**
The primary characteristic of a GEO orbit is that a satellite in this orbit **appears stationary** relative to a specific point on Earth's surface. This is because its orbital period matches Earth's sidereal rotation period, and it orbits directly above the equator with zero inclination.

**Question 4:**
Explain the difference between a Geosynchronous Orbit (GSO) and a Geostationary Orbit (GEO).

**Answer:**
Both GSO and GEO have orbital periods matching Earth's sidereal rotation period. However, a **GEO** orbit is a specific type of GSO that is **circular and has an inclination of 0 degrees**. This means a GEO satellite remains fixed over a particular point on the equator. A general **GSO** orbit can have an **inclination and/or eccentricity**, causing the satellite to appear to move in a figure-eight or east-west pattern in the sky from a ground observer's perspective, while still returning to the same position each day.

**Question 5:**
List at least three factors that cause perturbations in a satellite's orbit.

**Answer:**
Three factors that cause perturbations in a satellite's orbit are:
1.  Earth's oblateness (non-spherical shape).
2.  Atmospheric drag (especially for LEO satellites).
3.  Gravitational pull of the Moon and Sun.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 8. References and Further Reading

*   **Pratt & Allnutt, Satellite Communications, 3rd Edition (2021):**
    *   Chapter 2: Orbital Mechanics
    *   Chapter 3: Satellite Orbits
*   **Skolnik, Introduction to Radar Systems, 2nd Edition (2017):** While primarily radar focused, understanding tracking principles in radar can offer parallels to satellite tracking.
*   **Ha, Digital Satellite Communications, 2nd Edition (2017):** Chapters on orbital mechanics and satellite positioning.
*   **Pritchard, Satellite Communications Systems Engineering, 2nd Edition (2006):** Chapters covering orbital considerations.

This concludes Module 1, providing a foundational understanding of satellite orbits and the principles involved in locating them. This knowledge is critical for all subsequent aspects of satellite and radar communications.