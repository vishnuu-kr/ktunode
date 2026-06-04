---
title: "locating satellite with respect to earth"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff896"
status: "completed"
scrapedAt: "2026-05-23T18:57:07.001Z"
---
# Module 1: Satellite Orbit and Orbital Equations - Locating Satellites with Respect to Earth

## Introduction

This module introduces the fundamental concepts of satellite orbits and the equations that govern their motion. Understanding satellite orbits is crucial for designing effective satellite communication systems and for various radar applications. This topic focuses on how to determine a satellite's position relative to the Earth.

**Course Outcomes Alignment:**

*   **CO1: Illustrate the principles of satellite communication (Knowledge Level: K2)** - Understanding satellite orbits is a foundational principle for all satellite communications.
*   **CO2: Design and analysis of satellite link (Knowledge Level: K3)** - Precise knowledge of satellite location is vital for accurate link budget calculations and antenna pointing.

**Textbook References:**

*   **Satellite Communications by Timothy Pratt, Jeremy Allnutt (Wiley, 3rd Edition, 2021):** Chapters 1 and 2 likely cover orbital mechanics and basic positioning concepts.
*   **Introduction to Radar Systems by Merrill I. Skolnik (Tata McGraw-Hill, 2nd Edition, 2017):** While focused on radar, understanding target location, including satellites, is relevant. Chapters on radar tracking principles might touch upon orbital motion.

**Reference Book References:**

*   **Digital Satellite Communications by Tri, T.Ha, (McGraw-Hill Education, 2nd Edition, 2017):** Similar to Pratt & Allnutt, expect foundational orbital mechanics.
*   **Satellite Communications Systems Engineering by Pritchard (Pearson Education, 2nd Edition, 2006):** Likely provides an engineering perspective on orbital parameters and their impact on system design.

## 1. Fundamentals of Orbital Motion

### 1.1 Kepler's Laws of Planetary Motion

These laws, formulated by Johannes Kepler, describe the motion of celestial bodies around the Sun. They are also applicable to satellites orbiting the Earth.

*   **First Law (Law of Ellipses):** The orbit of a satellite is an ellipse, with the Earth (or the primary body) at one of the foci.
    *   **Key Concept:** Elliptical orbits are the general case. Circular orbits are a special case of an ellipse where the eccentricity is zero.
    *   **Pratt & Allnutt (Chapter 2):** Discusses elliptical orbits and their parameters.
*   **Second Law (Law of Areas):** A line joining a satellite and the Earth sweeps out equal areas in equal intervals of time.
    *   **Key Concept:** This implies that a satellite moves faster when it is closer to the Earth (perigee) and slower when it is farther away (apogee).
    *   **Pratt & Allnutt (Chapter 2):** Explains the conservation of angular momentum underlying this law.
*   **Third Law (Law of Periods):** The square of the orbital period of a satellite is directly proportional to the cube of the semi-major axis of its orbit.
    *   **Key Concept:** This law relates the orbital period (time for one complete orbit) to the size of the orbit.
    *   **Formula:** $T^2 \propto a^3$, where $T$ is the orbital period and $a$ is the semi-major axis.

### 1.2 Orbital Parameters (Orbital Elements)

To precisely define a satellite's orbit, a set of six orbital elements is used. These are typically based on Keplerian elements.

*   **Semi-major Axis ($a$):** Half the length of the longest axis of the ellipse. It determines the size of the orbit and thus the orbital period.
*   **Eccentricity ($e$):** A measure of how much the orbit deviates from a perfect circle. $e=0$ for a circle, $0 < e < 1$ for an ellipse.
*   **Inclination ($i$):** The angle between the orbital plane and the Earth's equatorial plane. It determines how far north or south the satellite travels.
    *   $i = 0^\circ$: Equatorial orbit.
    *   $i = 90^\circ$: Polar orbit.
    *   $0^\circ < i < 90^\circ$: Prograde orbit.
    *   $90^\circ < i < 180^\circ$: Retrograde orbit.
*   **Right Ascension of the Ascending Node (RAAN) ($\Omega$ or $\omega_{asc}$):** The angle measured eastward from the vernal equinox to the ascending node. The ascending node is the point where the satellite crosses the equatorial plane moving from south to north. This defines the orientation of the orbital plane in space.
*   **Argument of Perigee ($\omega$ or $\omega_{per}$):** The angle measured in the orbital plane from the ascending node to the perigee. Perigee is the point in the orbit closest to the Earth. This defines the orientation of the ellipse within the orbital plane.
*   **True Anomaly ($\nu$ or $f$):** The angle measured in the orbital plane from the perigee to the satellite's current position. This indicates the satellite's position along its orbit at a given time.

**Example:** A geostationary satellite has $e \approx 0$ and $i \approx 0^\circ$. Its orbital period matches the Earth's rotation.

**Pratt & Allnutt (Chapter 2):** Provides detailed explanations and diagrams of these orbital elements.

### 1.3 Types of Orbits

The choice of orbit significantly impacts a satellite's coverage and application.

*   **Geostationary Orbit (GEO):**
    *   Altitude: Approximately 35,786 km above the equator.
    *   Inclination: $0^\circ$.
    *   Period: 23 hours, 56 minutes, 4 seconds (sidereal day), matching Earth's rotation.
    *   **Characteristic:** Appears stationary from the ground.
    *   **Application:** Broadcasting, telecommunications, weather monitoring.
    *   **Pratt & Allnutt (Chapter 1):** Discusses GEO extensively.
*   **Geosynchronous Orbit (GSO):**
    *   Altitude: Same as GEO, but inclination can be non-zero.
    *   Period: Matches Earth's rotation.
    *   **Characteristic:** Appears to trace a figure-eight pattern in the sky over a day if inclined.
    *   **Application:** Some communications and observation satellites.
*   **Low Earth Orbit (LEO):**
    *   Altitude: 160 km to 2,000 km.
    *   **Characteristic:** High orbital speed, short period (around 90 minutes), global coverage with a constellation.
    *   **Application:** Earth observation, imaging, some communication constellations (e.g., Starlink).
    *   **Pratt & Allnutt (Chapter 1):** Covers LEO characteristics.
*   **Medium Earth Orbit (MEO):**
    *   Altitude: 2,000 km to 35,786 km.
    *   **Characteristic:** Balance between LEO and GEO, longer revisit times than LEO, less latency than GEO.
    *   **Application:** Global Positioning System (GPS), Galileo, GLONASS.
*   **Polar Orbit:**
    *   Inclination: Close to $90^\circ$.
    *   **Characteristic:** The satellite passes over or near both poles on each orbit, allowing it to scan the entire Earth's surface over time.
    *   **Application:** Earth observation, reconnaissance, weather mapping.
    *   **Pratt & Allnutt (Chapter 1):** Mentions polar orbits.
*   **Sun-Synchronous Orbit (SSO):**
    *   Type of polar orbit.
    *   **Characteristic:** The satellite passes over any given point on Earth at the same local solar time each day. This is achieved by carefully selecting the orbital inclination and altitude so that the orbital plane precesses (rotates) eastward at the same rate as the Earth rotates around the Sun.
    *   **Application:** Remote sensing, Earth imaging where consistent lighting conditions are important.

## 2. Locating a Satellite with Respect to Earth

To locate a satellite, we need to determine its position in a defined coordinate system at a specific time. This involves understanding both its orbital path and its position along that path.

### 2.1 Earth-Centered Inertial (ECI) Coordinate System

This is a non-rotating coordinate system with its origin at the Earth's center. The axes are fixed with respect to distant stars.

*   **Z-axis:** Points towards the Celestial North Pole.
*   **X-axis:** Points towards the vernal equinox (the point on the celestial sphere where the Sun crosses the ecliptic from south to north).
*   **Y-axis:** Completes the right-handed system (perpendicular to both Z and X).

**Use:** This is the fundamental system for describing orbital mechanics as it's inertial (non-accelerating).

**Pratt & Allnutt (Chapter 2):** Often uses ECI as the primary frame for orbital calculations.

### 2.2 Earth-Centered Earth-Fixed (ECEF) Coordinate System

This is a rotating coordinate system with its origin at the Earth's center. The axes rotate with the Earth.

*   **Z-axis:** Points along the Earth's rotation axis (towards the North Pole).
*   **X-axis:** Points towards the intersection of the Prime Meridian and the Equator.
*   **Y-axis:** Completes the right-handed system (points towards the intersection of the Prime Meridian $90^\circ$ east of the Prime Meridian and the Equator).

**Use:** This system is useful for relating satellite positions to points on the Earth's surface (e.g., ground stations, targets).

**Key Concept:** The relationship between ECI and ECEF depends on the Earth's rotation rate and the Greenwich Mean Sidereal Time (GMST).

### 2.3 Calculating Position from Orbital Elements

The six orbital elements define the shape, size, and orientation of the orbit in space. To find the satellite's position at any given time, we need to perform calculations involving these elements and the laws of orbital motion.

1.  **Determine the time:** This includes the epoch (the time the orbital elements were valid).
2.  **Calculate the mean anomaly ($M$):** This is a time-dependent parameter that increases linearly with time.
    *   Formula: $M = n(t - t_0)$, where $n$ is the mean motion ($2\pi/T$) and $t_0$ is the epoch time.
3.  **Solve Kepler's Equation for the eccentric anomaly ($E$):** This is an implicit equation that relates mean anomaly to eccentric anomaly.
    *   Kepler's Equation: $M = E - e \sin E$.
    *   **Challenge:** This equation cannot be solved analytically for $E$. It must be solved numerically using iterative methods (e.g., Newton-Raphson method).
    *   **Pratt & Allnutt (Chapter 2):** Provides methods for solving Kepler's equation.
4.  **Calculate the true anomaly ($\nu$):** Once $E$ is known, the true anomaly can be found.
    *   Formulas:
        *   $\cos \nu = \frac{\cos E - e}{1 - e \cos E}$
        *   $\sin \nu = \frac{\sqrt{1 - e^2} \sin E}{1 - e \cos E}$
5.  **Calculate the satellite's position and velocity in the orbital plane (e.g., in a perifocal coordinate system):**
    *   Perifocal system: X-axis points to perigee, Z-axis along the angular momentum vector, Y-axis completes the right-handed system.
    *   Position in perifocal system:
        *   $r = a(1 - e \cos E)$ (distance from Earth's center)
        *   $x_{perifocal} = r \cos \nu$
        *   $y_{perifocal} = r \sin \nu$
        *   $z_{perifocal} = 0$
6.  **Transform position from perifocal to ECI coordinate system:** This involves rotations using the inclination ($i$), RAAN ($\Omega$), and argument of perigee ($\omega$).
    *   The transformation involves three rotations:
        *   Rotation by $\omega$ around the Z-axis (to align with the line of apsides).
        *   Rotation by $i$ around the new X-axis (to align the orbital plane with the inclination).
        *   Rotation by $\Omega$ around the final Z-axis (to align the ascending node with the vernal equinox).
    *   **Pratt & Allnutt (Chapter 2):** Details these transformation matrices.

### 2.4 Ground Track

The ground track is the path traced by the satellite on the Earth's surface. It is obtained by transforming the satellite's ECI position into ECEF coordinates and then converting these Cartesian coordinates into latitude and longitude.

1.  **Earth Rotation:** Account for the Earth's rotation. The angle of rotation is given by GMST at the time of calculation.
2.  **ECI to ECEF Transformation:** This involves a rotation around the Z-axis by the GMST.
3.  **ECEF to Latitude/Longitude:** Convert the Earth-centered Cartesian coordinates (X, Y, Z) to geodetic latitude ($\phi$), longitude ($\lambda$), and altitude ($h$).

**Important Point:** The ground track's shape and repetition depend on the orbital inclination and period. Polar orbits have ground tracks that cover the entire Earth. GEO satellites have a ground track that is a single point on the equator.

**Example:** A satellite in a circular orbit with inclination $i$ and zero eccentricity will trace a path oscillating between $\pm i$ degrees latitude. If the RAAN is fixed, the ground track repeats every orbit. If the orbit is also geosynchronous and equatorial, the ground track is a stationary point.

### 2.5 Satellite Position Reporting Formats

Satellite positions are often reported using standardized formats to ensure interoperability.

*   **Two-Line Elements (TLE):** A widely used two-line ASCII text format that contains all the necessary orbital elements to propagate a satellite's orbit for a short period. TLEs are updated regularly.
    *   **Source:** Primarily from NORAD (North American Aerospace Defense Command).
    *   **Use:** Tracking of artificial satellites, amateur satellite tracking.
    *   **Limitations:** Based on a simplified atmospheric drag model and is generally accurate for a few days.
    *   **Pratt & Allnutt (Appendix):** May contain information on TLE format or propagation methods.
*   **Two-Line Elements (TLE) - Example:**
    ```
    1 25544U 98067A   23300.12345678  .00000000  00000-0  00000-0 0  999
    2 25544  51.6416 247.4627 0006602  17.5000 342.5000 15.49000000420000
    ```
    *   Line 1: Contains epoch, ballistics coefficient, etc.
    *   Line 2: Contains inclination, RAAN, eccentricity, argument of perigee, true anomaly, mean motion.

**Pratt & Allnutt (Chapter 2):** Likely discusses the practical aspects of orbital element propagation and tracking.

## 3. Practical Considerations and Applications

### 3.1 Antenna Pointing

Accurate knowledge of a satellite's position is essential for ground stations to point their antennas towards it. The required pointing accuracy depends on the antenna beamwidth.

*   **GEO Satellites:** Relatively static position, so antenna pointing is less critical, but still requires adjustments for orbital perturbations.
*   **LEO Satellites:** Move rapidly across the sky, requiring precise tracking antennas.

**CO2 Alignment:** This directly impacts the design and analysis of satellite links.

### 3.2 Coverage Prediction

Understanding the satellite's orbit allows prediction of its visibility from different ground locations. This is crucial for mission planning and communication scheduling.

*   **GEO Satellites:** Provide continuous coverage over a large geographical area.
*   **LEO Satellites:** Provide intermittent coverage, requiring a constellation for continuous global service.

### 3.3 Radar Tracking of Satellites

Radar systems are used to track satellites, especially for space surveillance and missile defense.

*   **Radar Equation:** The fundamental equation for radar performance relates transmitted power, antenna gain, target size, range, and receiver sensitivity.
*   **Tracking Radar:** Special radars designed to continuously measure the position and velocity of a target. They often employ conical scan, sequential lobing, or monopulse techniques.
    *   **Monopulse:** A sophisticated technique that uses multiple simultaneous antenna beams to determine the angular error relative to the target's true position, allowing for very precise tracking.
*   **CO3 Alignment:** Locating a satellite is a primary function of tracking radar.
*   **CO4 Alignment:** Tracking techniques are used to determine the satellite's location.

**Skolnik (Chapter 1):** Introduces the basic radar equation.
**Edde (Chapter 1):** Likely covers radar fundamentals and tracking principles.
**Kinsley & Quegan (Chapter 1):** Provides a comprehensive overview of radar systems.

## Important Points to Remember

*   **Orbital elements (Keplerian elements) completely define a satellite's orbit.**
*   **Kepler's Laws govern the motion of satellites.**
*   **ECI is the inertial frame for orbital mechanics; ECEF is the rotating frame for Earth-based applications.**
*   **Numerical methods are required to solve Kepler's Equation.**
*   **The ground track is the satellite's path projected onto the Earth's surface.**
*   **TLEs are a practical format for representing orbital elements but have limitations.**
*   **Accurate satellite location is critical for antenna pointing, coverage prediction, and radar tracking.**

## Practice Questions

**Question 1:**
Which of Kepler's Laws states that the square of the orbital period is proportional to the cube of the semi-major axis?
a) First Law
b) Second Law
c) Third Law
d) Law of Gravitation

**Question 2:**
A satellite has an inclination of $0^\circ$ and an orbital period that matches the Earth's sidereal rotation period. What type of orbit is this?
a) LEO
b) MEO
c) Polar Orbit
d) Geostationary Orbit (GEO)

**Question 3:**
What are the six Keplerian orbital elements used to define a satellite's orbit?

**Question 4:**
Explain the difference between an Earth-Centered Inertial (ECI) and an Earth-Centered Earth-Fixed (ECEF) coordinate system and their respective uses in satellite operations.

**Question 5:**
Why is solving Kepler's Equation typically done using numerical methods?

**Question 6:**
If a satellite is in a polar orbit, what does this imply about its inclination and the coverage it can provide?

**Question 7:**
What is the primary use of Two-Line Elements (TLEs)?

## Answers to Practice Questions

**Answer 1:**
c) Third Law

**Answer 2:**
d) Geostationary Orbit (GEO)

**Answer 3:**
The six Keplerian orbital elements are:
1.  Semi-major axis ($a$)
2.  Eccentricity ($e$)
3.  Inclination ($i$)
4.  Right Ascension of the Ascending Node (RAAN) ($\Omega$)
5.  Argument of Perigee ($\omega$)
6.  True Anomaly ($\nu$) (or Mean Anomaly or Eccentric Anomaly, which can be converted to true anomaly)

**Answer 4:**
*   **ECI (Earth-Centered Inertial):** A non-rotating coordinate system with its origin at the Earth's center and axes fixed with respect to distant stars. It is used for describing the fundamental physics of orbital mechanics because it is inertial (non-accelerating), making Newton's laws of motion directly applicable.
*   **ECEF (Earth-Centered Earth-Fixed):** A rotating coordinate system with its origin at the Earth's center and axes fixed to the Earth's surface, rotating with the Earth. It is used for relating satellite positions to locations on the Earth's surface (e.g., ground stations, cities) and for practical navigation and communication system design. The transformation between ECI and ECEF accounts for the Earth's rotation.

**Answer 5:**
Kepler's Equation ($M = E - e \sin E$) is a transcendental equation where the unknown ($E$) appears both inside and outside a trigonometric function. There is no closed-form algebraic solution for $E$ in terms of $M$ and $e$. Therefore, iterative numerical methods (like the Newton-Raphson method) are required to approximate the value of $E$ to a desired accuracy.

**Answer 6:**
A satellite in a polar orbit has an inclination close to $90^\circ$. This means that the satellite's orbital plane passes over or near both the North and South Poles. As the Earth rotates beneath the orbit, a polar-orbiting satellite can eventually scan and provide coverage of the entire Earth's surface over a period of time.

**Answer 7:**
The primary use of Two-Line Elements (TLEs) is to provide a concise and standardized way to represent the orbital parameters of artificial satellites. They are used by ground control, tracking stations, and amateur satellite enthusiasts to predict satellite positions for tracking, communication, and observation purposes. TLEs are updated regularly to account for orbital perturbations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
