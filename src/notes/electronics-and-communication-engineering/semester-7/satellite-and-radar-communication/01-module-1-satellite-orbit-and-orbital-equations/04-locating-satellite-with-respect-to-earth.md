---
title: "locating satellite with respect to earth"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff30c"
status: "completed"
scrapedAt: "2026-05-23T18:10:30.799Z"
---
# Module 1: Satellite Orbit and Orbital Equations - Locating Satellites with Respect to Earth

**Subject:** Satellite and Radar Communication
**Module:** Module 1: Satellite Orbit and Orbital Equations
**Topic:** Locating Satellite with Respect to Earth
**Description:** This topic focuses on understanding the position and movement of satellites relative to the Earth. This is crucial for establishing communication links, predicting satellite visibility, and understanding the operational environment of a satellite.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 1. Introduction to Satellite Orbits and Earth's Reference Frames

To locate a satellite, we first need to understand the reference frames used in satellite mechanics and communication.

### 1.1 Earth's Reference Frames

*   **Geodetic Reference Frame:** This frame is tied to the Earth's physical surface.
    *   **Latitude ($\phi$):** Angular distance, measured north or south of the equator. Ranges from -90° (South Pole) to +90° (North Pole).
    *   **Longitude ($\lambda$):** Angular distance, measured east or west of the Prime Meridian. Ranges from -180° (West) to +180° (East).
    *   **Altitude (h):** Height above the Earth's surface, typically measured from the geoid (mean sea level).
    *   **Important Point:** These are the coordinates commonly used by users on the ground to specify locations. (Relates to CO1: Illustrate the principles of satellite communication)

*   **Geocentric Equatorial Reference Frame:** This frame is centered at the Earth's center of mass and its plane is aligned with the Earth's equatorial plane.
    *   **X-axis:** Points from the Earth's center to the vernal equinox (the point where the Sun crosses the celestial equator from south to north).
    *   **Y-axis:** Lies in the equatorial plane, 90° east of the X-axis.
    *   **Z-axis:** Points along the Earth's rotational axis (North Pole).
    *   **Important Point:** This frame is fundamental for orbital mechanics calculations. (Relates to CO1: Illustrate the principles of satellite communication)

### 1.2 Satellite Position Vectors

A satellite's position in orbit is typically described by its position vector ($\vec{r}$) relative to the center of the Earth. This vector has both magnitude (distance from Earth's center) and direction.

---

## 2. Key Orbital Parameters and Definitions

To define and locate a satellite's orbit, we use a set of parameters called Keplerian elements (or orbital elements).

### 2.1 Keplerian Elements

These six parameters uniquely define an elliptical orbit in space.

*   **Semi-major Axis (a):** Half of the longest diameter of the ellipse. Determines the size of the orbit and thus the orbital period.
    *   *Relation to Energy:* Directly related to the total energy of the orbit.
    *   *(Pratt & Allnutt, 3rd Ed., p. 41)*

*   **Eccentricity (e):** A measure of how elliptical the orbit is.
    *   $e = 0$ for a circular orbit.
    *   $0 < e < 1$ for an elliptical orbit.
    *   $e = 1$ for a parabolic orbit (escape trajectory).
    *   $e > 1$ for a hyperbolic orbit (escape trajectory).
    *   *(Pratt & Allnutt, 3rd Ed., p. 42)*

*   **Inclination (i):** The angle between the orbital plane and the Earth's equatorial plane.
    *   $i = 0^\circ$: Equatorial orbit.
    *   $i = 90^\circ$: Polar orbit.
    *   $0^\circ < i < 90^\circ$: Prograde orbit (satellite moves in the same direction as Earth's rotation).
    *   $90^\circ < i < 180^\circ$: Retrograde orbit (satellite moves in the opposite direction to Earth's rotation).
    *   *(Pratt & Allnutt, 3rd Ed., p. 42)*

*   **Right Ascension of the Ascending Node (RAAN or $\Omega$):** The angle measured eastward along the celestial equator from the vernal equinox to the ascending node. The ascending node is the point where the satellite crosses the equatorial plane moving from south to north.
    *   *(Pratt & Allnutt, 3rd Ed., p. 42)*

*   **Argument of Perigee ($\omega$):** The angle measured in the orbital plane from the ascending node to the perigee. Perigee is the point in the orbit closest to the Earth.
    *   *(Pratt & Allnutt, 3rd Ed., p. 42)*

*   **True Anomaly ($\nu$ or $\theta$):** The angle measured in the orbital plane from the perigee to the satellite's current position.
    *   *(Pratt & Allnutt, 3rd Ed., p. 42)*

### 2.2 Special Orbital Types and Their Characteristics

*   **Geostationary Orbit (GEO):**
    *   Altitude: Approximately 35,786 km above the equator.
    *   Inclination: $0^\circ$.
    *   Period: 23 hours, 56 minutes, 4 seconds (sidereal day).
    *   Effect: Appears stationary from a fixed point on Earth, always overhead.
    *   *(Pratt & Allnutt, 3rd Ed., p. 44)*

*   **Geosynchronous Orbit (GSO):**
    *   Altitude: Similar to GEO.
    *   Inclination: Can be non-zero.
    *   Period: Same as sidereal day.
    *   Effect: Appears to move in a figure-eight pattern in the sky.
    *   *(Pratt & Allnutt, 3rd Ed., p. 44)*

*   **Medium Earth Orbit (MEO):**
    *   Altitude: 2,000 km to 35,786 km.
    *   Examples: GPS, Galileo, GLONASS, O3b.
    *   Orbital period: Typically 12 hours.
    *   *(Pratt & Allnutt, 3rd Ed., p. 44)*

*   **Low Earth Orbit (LEO):**
    *   Altitude: Below 2,000 km.
    *   Orbital period: Typically 90-120 minutes.
    *   Examples: International Space Station (ISS), Starlink, Iridium.
    *   *(Pratt & Allnutt, 3rd Ed., p. 44)*

*   **Polar Orbit:**
    *   Inclination: Approximately $90^\circ$.
    *   Effect: Passes over or near both poles. Can cover the entire Earth surface over time.

*   **Sun-Synchronous Orbit (SSO):**
    *   A special type of polar orbit.
    *   The orbital plane precesses such that the satellite passes over any given point on Earth at the same local solar time.
    *   Useful for Earth observation and remote sensing.

---

## 3. Locating a Satellite: Mathematical Expressions

To pinpoint a satellite's position at a given time, we need to convert the Keplerian elements into Cartesian coordinates ($x, y, z$) in a specific reference frame.

### 3.1 From Keplerian Elements to Position Vectors

The process involves several steps:

1.  **Calculate Eccentric Anomaly ($E$):** This is the angle in an auxiliary circle that has the same eccentricity as the orbit. It's related to the true anomaly ($\nu$) through Kepler's equation:
    $M = E - e \sin(E)$
    Where $M$ is the **Mean Anomaly** (a measure of orbital position proportional to time). Mean Anomaly is calculated as:
    $M = n(t - t_0)$
    Where:
    *   $n$ is the mean motion ($n = \sqrt{\mu/a^3}$, where $\mu$ is the Earth's gravitational parameter and $a$ is the semi-major axis).
    *   $t$ is the current time.
    *   $t_0$ is the time of perigee passage.
    *   Kepler's equation is transcendental and solved iteratively.

2.  **Calculate Position in Orbital Plane:** Using the eccentric anomaly ($E$) or true anomaly ($\nu$), we can find the satellite's position in a coordinate system aligned with the orbit.
    *   In terms of Eccentric Anomaly ($E$):
        $x' = a(\cos E - e)$
        $y' = a\sqrt{1 - e^2} \sin E$
        $z' = 0$ (for an orbit in the $xy$ plane)

3.  **Rotate to Geocentric Equatorial Frame:** Using the inclination ($i$) and argument of perigee ($\omega$), and RAAN ($\Omega$), we rotate the orbital plane coordinates ($x', y', z'$) to the fixed geocentric equatorial frame ($x, y, z$). This involves three successive rotations:
    *   Rotation by $\omega$ around the $z'$ axis.
    *   Rotation by $i$ around the new $x'$ axis.
    *   Rotation by $\Omega$ around the $z$ axis.

    The resulting position vector $(\vec{r} = [x, y, z]^T)$ is:
    $x = r (\cos(\Omega)\cos(\omega+ \nu) - \sin(\Omega)\sin(\omega + \nu)\cos(i))$
    $y = r (\sin(\Omega)\cos(\omega+ \nu) + \cos(\Omega)\sin(\omega + \nu)\cos(i))$
    $z = r (\sin(\omega + \nu)\sin(i))$

    Where $r$ is the distance from the Earth's center to the satellite, which can be calculated as:
    $r = a(1 - e \cos E)$

    *   *(Pratt & Allnutt, 3rd Ed., p. 48-50)*
    *   *(Ha, 2nd Ed., p. 32-35)*

### 3.2 Converting Earth-Fixed Coordinates to Satellite-Centered Coordinates

Once the satellite's position vector ($\vec{r}$) in the geocentric equatorial frame is known, we can determine its position relative to a ground station.

*   **Earth Station Location:** A ground station's location is given by its latitude ($\phi_e$), longitude ($\lambda_e$), and altitude ($h_e$).
*   **Converting Earth Station to Geocentric Equatorial Frame:** The ground station's position also needs to be converted into the same geocentric equatorial frame. This involves:
    *   Calculating the geocentric radius of the station: $R_e = R_e^0 + h_e$ (where $R_e^0$ is the Earth's mean radius).
    *   Transforming spherical coordinates (latitude, longitude, radius) into Cartesian coordinates ($x_e, y_e, z_e$) in the Earth-fixed frame.
    *   Rotating these coordinates to account for Earth's rotation to align with the geocentric equatorial frame at the specific time.
    $x_e = R_e \cos \phi_e \cos(\lambda_e + \omega_e t)$
    $y_e = R_e \cos \phi_e \sin(\lambda_e + \omega_e t)$
    $z_e = R_e \sin \phi_e$
    Where $\omega_e$ is Earth's rotation rate.

*   **Satellite Position Relative to Station:** The vector from the ground station to the satellite is $\vec{r}_{s/e} = \vec{r}_{sat} - \vec{r}_{station}$.
    *   *(Ha, 2nd Ed., p. 36-37)*

### 3.3 Tracking and Visibility

*   **Elevation Angle ($\epsilon$):** The angle above the local horizon. Crucial for establishing a line-of-sight link.
    *   Calculated from the relative position vector and local horizontal plane.
    *   *(Pratt & Allnutt, 3rd Ed., p. 51)*

*   **Azimuth Angle ($\alpha$):** The angle measured clockwise from true north to the satellite's projection on the local horizontal plane.
    *   *(Pratt & Allnutt, 3rd Ed., p. 51)*

*   **Range (R):** The distance between the ground station and the satellite.
    *   $R = |\vec{r}_{s/e}|$

---

## 4. Orbital Perturbations and Modern Orbit Determination

While Keplerian elements describe an ideal elliptical orbit, real orbits are affected by various forces.

### 4.1 Sources of Perturbations

*   **Earth's Oblateness (J2 effect):** The Earth is not a perfect sphere, its bulge at the equator causes perturbations, especially in the RAAN and argument of perigee.
*   **Gravitational Pull of the Moon and Sun:** These celestial bodies exert tidal forces.
*   **Solar Radiation Pressure:** Photons from the sun exert a small but continuous force.
*   **Atmospheric Drag:** Significant for satellites in LEO, causing orbital decay.
    *   *(Pratt & Allnutt, 3rd Ed., p. 52-53)*

### 4.2 Satellite Orbit Determination

*   **Tracking Stations:** Ground-based antennas continuously monitor satellite signals.
*   **Data Collection:** Range, range-rate, and angle measurements are collected.
*   **Orbit Prediction Software:** Sophisticated software uses these measurements, along with models of orbital perturbations, to propagate the orbit forward in time and predict future positions.
    *   *(Pratt & Allnutt, 3rd Ed., p. 54)*
    *   *(Edde, 1st Ed., Chapter 2 - Radar Measurements for Orbit Determination)*

---

## 5. Practical Applications and Examples

*   **Geostationary Satellites:** Used for broadcasting (TV, radio), weather monitoring, and fixed satellite services. Their fixed position simplifies antenna pointing.
*   **LEO Satellites:** Used for Earth observation, mobile communications (e.g., Iridium, Starlink), and scientific research. Require complex tracking due to their rapid movement.
*   **GPS Satellites:** MEO satellites used for navigation and precise timing. The precise knowledge of their orbits is essential for accurate positioning.

---

## 6. Summary of Key Concepts

*   **Reference Frames:** Geodetic (latitude, longitude, altitude) and Geocentric Equatorial (X, Y, Z) are crucial.
*   **Keplerian Elements:** Define the shape and orientation of an orbit (a, e, i, $\Omega$, $\omega$, $\nu$).
*   **Orbital Mechanics:** Governed by Newton's Law of Gravitation and Kepler's Laws.
*   **Satellite Position:** Calculated by converting Keplerian elements into Cartesian coordinates in a specific reference frame.
*   **Visibility:** Determined by elevation and azimuth angles relative to a ground station.
*   **Perturbations:** Real orbits deviate from ideal ellipses due to various external forces.

---

## 7. Practice Questions and Answers

**Question 1:**
What are the six Keplerian elements that define a satellite's orbit? Briefly describe the significance of two of them.

**Answer 1:**
The six Keplerian elements are:
1.  Semi-major axis ($a$)
2.  Eccentricity ($e$)
3.  Inclination ($i$)
4.  Right Ascension of the Ascending Node (RAAN, $\Omega$)
5.  Argument of Perigee ($\omega$)
6.  True Anomaly ($\nu$)

*   **Semi-major axis ($a$):** Determines the size of the orbit and, along with eccentricity, the orbital period. A larger $a$ generally means a longer period.
*   **Inclination ($i$):** Determines the tilt of the orbital plane with respect to the Earth's equatorial plane. It dictates which latitudes the satellite will pass over.

**Question 2:**
A satellite is in a circular orbit at an altitude of 400 km. What is its approximate orbital period? (Assume Earth's radius $R_e \approx 6371$ km and gravitational parameter $\mu \approx 3.986 \times 10^{14} \, \text{m}^3/\text{s}^2$).

**Answer 2:**
For a circular orbit, the semi-major axis $a$ is equal to the orbital radius.
Orbital radius $r = R_e + \text{altitude}$
$r = 6371 \, \text{km} + 400 \, \text{km} = 6771 \, \text{km} = 6.771 \times 10^6 \, \text{m}$
The orbital period ($T$) for a circular orbit is given by:
$T = 2\pi \sqrt{\frac{a^3}{\mu}}$
Here, $a = r = 6.771 \times 10^6 \, \text{m}$.
$T = 2\pi \sqrt{\frac{(6.771 \times 10^6 \, \text{m})^3}{3.986 \times 10^{14} \, \text{m}^3/\text{s}^2}}$
$T = 2\pi \sqrt{\frac{3.107 \times 10^{20} \, \text{m}^3}{3.986 \times 10^{14} \, \text{m}^3/\text{s}^2}}$
$T = 2\pi \sqrt{7.794 \times 10^5 \, \text{s}^2}$
$T = 2\pi \times 882.8 \, \text{s}$
$T \approx 5546 \, \text{s}$

To convert this to minutes:
$T \approx 5546 \, \text{s} / 60 \, \text{s/min} \approx 92.4 \, \text{minutes}$.
This is characteristic of a Low Earth Orbit (LEO).

**Question 3:**
What is the defining characteristic of a Geostationary Orbit (GEO)?

**Answer 3:**
A geostationary orbit is a circular orbit directly above the Earth's equator ($i=0^\circ$) at an altitude of approximately 35,786 km. Its orbital period matches the Earth's sidereal rotation period, causing the satellite to appear stationary from a fixed point on Earth.

---

## 8. Important Points to Remember

*   **Understanding Reference Frames:** Always be clear about which reference frame you are working in (Earth-fixed vs. inertial/equatorial).
*   **Keplerian Elements are Fundamental:** They are the building blocks for all orbital calculations.
*   **Conversion is Key:** The ability to convert between Keplerian elements and Cartesian coordinates is essential for locating a satellite.
*   **Time is a Critical Variable:** Satellite positions change with time, so any location is specific to a particular moment.
*   **Perturbations Matter for Precision:** For accurate long-term predictions, perturbation effects must be considered.

---

## 9. Textbooks and Reference Material Incorporated

*   **Pratt & Allnutt, "Satellite Communications" (3rd Ed.):** Provided foundational concepts on orbital parameters, GEO/GSO, and the conversion of elements to position. (Sections 1.1, 1.2, 2.1, 2.2, 3.3, 4.1, 4.2)
*   **Skolnik, "Introduction to Radar Systems" (2nd Ed.):** While this module focuses on satellite orbits, Skolnik's text often covers radar tracking of celestial bodies, which shares principles with orbit determination. Radar measurements are key to orbit determination, implying a link to this text for measurement aspects. (Relevant for data collection in 4.2)
*   **Ha, "Digital Satellite Communications" (2nd Ed.):** Contributed to the detailed mathematical steps for coordinate transformations and relative position calculations. (Sections 3.2, 3.3)
*   **Edde, "Radar: Principles, Technology, Applications" (1st Ed.):** Likely provides context on how radar systems are used in tracking and potentially in determining orbital parameters for space objects. (Section 4.2)

---

## 10. Alignment with Course Outcomes

*   **CO1: Illustrate the principles of satellite communication (Knowledge Level: K2)**
    *   This module directly addresses the fundamental principles of how satellites move and are positioned, which is the bedrock for establishing any satellite communication link. Understanding orbits is essential for knowing when and where a satellite will be visible. (Sections 1, 2, 3, 5)

*   **CO2: Design and analysis of satellite link (Knowledge Level: K3)**
    *   While this module primarily focuses on K2 understanding of orbits, the ability to determine satellite position is a prerequisite for link design. Knowing the distance (range) and relative angles (elevation, azimuth) is crucial for calculating link budgets, antenna pointing, and signal path loss. (Section 3.3)

*   **CO3: Illustrate Radar Fundamentals like Radar Equation and Applications. (Knowledge Level: K2)**
    *   This module touches upon radar's role in orbit determination (Section 4.2), linking it to radar applications. Understanding how to "locate" an object in space is a key application of radar, even if the detailed radar equations are covered elsewhere.

*   **CO4: Compare various types of Radars and tracking techniques (Knowledge Level: K2)**
    *   The discussion of different orbital types (GEO, MEO, LEO) implicitly relates to the tracking requirements. Satellites in different orbits necessitate different tracking techniques and radar capabilities. While not directly detailing radar types, it lays the groundwork for understanding what needs to be tracked.

---
This concludes the study notes for Module 1, Topic: Locating Satellite with Respect to Earth.