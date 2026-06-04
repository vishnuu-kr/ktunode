---
title: "Satellite orbit and orbital equations"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff893"
status: "completed"
scrapedAt: "2026-05-23T18:57:04.876Z"
---
# Module 1: Satellite Orbit and Orbital Equations

## Introduction to Satellite Communication

This module lays the foundation for understanding satellite communication by exploring the fundamental principles of satellite orbits and the mathematical equations that govern them. A thorough understanding of these concepts is crucial for designing, analyzing, and operating satellite communication systems effectively.

**Course Outcome Alignment:**
*   **CO1 (K2): Illustrate the principles of satellite communication.** This module directly addresses this by explaining the fundamental concept of using satellites in orbit for communication.

**Learning Outcomes:**
*   Understand Kepler's Laws of Planetary Motion.
*   Describe the elliptical orbit of a satellite.
*   Define and explain the concept of perigee and apogee.
*   Define and explain the concept of line of apsides and line of nodes.
*   Derive and understand the orbital equations.
*   Calculate the velocity of a satellite in an elliptical orbit.
*   Determine the period of a satellite in an elliptical orbit.
*   Explain the concept of geostationary orbit and its applications.
*   Define and explain the concept of launch windows.

**Textbook References:**
*   *Satellite Communications* by Timothy Pratt, Jeremy Allnutt (Wiley, 3rd Edition, 2021) - Chapters related to orbital mechanics.
*   *Introduction to Radar Systems* by Merrill I. Skolnik (Tata McGraw-Hill, 2nd Edition, 2017) - While primarily radar, basic orbital concepts might be touched upon for tracking.

**Reference Book References:**
*   *Digital Satellite Communications* by Tri, T. Ha (McGraw-Hill Education, 2nd Edition, 2017) - Chapters on orbital parameters and mechanics.
*   *Satellite Communications Systems Engineering* by Pritchard (Pearson Education, 2nd Edition, 2006) - Detailed coverage of orbital mechanics.

---

## 1. Kepler's Laws of Planetary Motion

Johannes Kepler, through meticulous observation, formulated three fundamental laws that describe the motion of celestial bodies, including satellites orbiting the Earth. These laws are the cornerstone of understanding satellite orbits.

**Key Concepts & Definitions:**

*   **Orbital Mechanics:** The study of the motion of objects in orbit under the influence of gravity.
*   **Focus:** In an ellipse, the two fixed points around which the ellipse is defined. The Earth is at one focus of a satellite's orbit.

**Kepler's Laws:**

1.  **The Law of Ellipses:**
    *   **Statement:** Every planet (or satellite) moves in an elliptical orbit, and the Sun (or Earth) is at one of the foci of the ellipse.
    *   **Description:** This means that the path of a satellite is not a perfect circle, but rather an ellipse, meaning its distance from Earth varies throughout its orbit.
    *   **Reference:** Pratt & Allnutt, Chapter 2 (General Principles of Satellite Orbits).

2.  **The Law of Equal Areas:**
    *   **Statement:** A line segment joining the satellite and the Earth (at the focus) sweeps out equal areas during equal intervals of time.
    *   **Description:** This law implies that a satellite moves faster when it is closer to the Earth (perigee) and slower when it is farther away (apogee). The rate of change of the satellite's angular momentum is zero.
    *   **Example:** If a satellite covers a certain area in one hour near perigee, it will cover the same area in another hour near apogee, but the arc length covered will be different (longer arc at apogee, shorter arc at perigee).
    *   **Reference:** Tri, T. Ha, Chapter 2 (Orbital Mechanics).

3.  **The Law of Harmonies:**
    *   **Statement:** The square of the orbital period of a satellite is directly proportional to the cube of the semi-major axis of its orbit.
    *   **Description:** This law relates the time it takes for a satellite to complete one orbit to the size of its orbit. It's a crucial law for calculating orbital periods.
    *   **Equation Form (for planets around the Sun, but analogous for satellites):** $T^2 \propto a^3$
    *   **Reference:** Pritchard, Chapter 3 (Satellite Orbits).

**Important Points to Remember:**
*   Kepler's Laws are empirical and derived from observations, later explained by Newton's Law of Universal Gravitation.
*   These laws are fundamental to understanding any celestial motion influenced by gravity.

---

## 2. The Elliptical Orbit of a Satellite

A satellite's orbit around the Earth is best described as an ellipse, defined by several key parameters.

**Key Concepts & Definitions:**

*   **Ellipse:** A closed curve where the sum of the distances from any point on the curve to two fixed points (foci) is constant.
*   **Semi-major Axis (a):** Half the length of the longest diameter of the ellipse. It is a measure of the "size" of the orbit.
*   **Semi-minor Axis (b):** Half the length of the shortest diameter of the ellipse.
*   **Eccentricity (e):** A measure of how much an ellipse deviates from being circular. It is defined as $e = \sqrt{1 - (b^2/a^2)}$. For a circle, $e=0$. For an ellipse, $0 < e < 1$.
*   **Perigee:** The point in a satellite's orbit closest to the Earth.
*   **Apogee:** The point in a satellite's orbit farthest from the Earth.
*   **Periapsis/Apoapsis:** General terms for the closest/farthest points in any orbit around a central body. For Earth, these are specifically perigee and apogee.
*   **Line of Apsides:** The line connecting perigee and apogee, passing through the foci of the ellipse.
*   **Line of Nodes:** The line formed by the intersection of the orbital plane and the Earth's equatorial plane. The points where the satellite crosses the equatorial plane are called nodes.
*   **Orbital Plane:** The plane containing the satellite's orbit.

**Relationship between Elliptical Parameters:**

*   The distance $r$ from the Earth's center to the satellite at any point in the orbit is given by:
    $r = \frac{a(1-e^2)}{1 + e \cos(\theta)}$
    Where:
    *   $a$ is the semi-major axis.
    *   $e$ is the eccentricity.
    *   $\theta$ is the true anomaly (the angle measured from the perigee direction to the satellite's current position).

*   At perigee ($\theta = 0$): $r_p = \frac{a(1-e^2)}{1 + e} = a(1-e)$
*   At apogee ($\theta = \pi$): $r_a = \frac{a(1-e^2)}{1 - e} = a(1+e)$

**Reference:** Pratt & Allnutt, Chapter 2.

**Example:**
Consider a satellite in an elliptical orbit with a semi-major axis of 7000 km and an eccentricity of 0.1.
*   Perigee distance ($r_p$) = $7000 \times (1 - 0.1) = 6300$ km (from Earth's center).
*   Apogee distance ($r_a$) = $7000 \times (1 + 0.1) = 7700$ km (from Earth's center).

**Important Points to Remember:**
*   The Earth's gravitational force is the central force causing the elliptical motion.
*   Eccentricity determines the "shape" of the ellipse. A higher eccentricity means a more elongated orbit.

---

## 3. Orbital Equations and Calculations

Understanding the orbital equations allows us to predict a satellite's position, velocity, and orbital period.

**Key Concepts & Definitions:**

*   **Gravitational Parameter ($\mu$):** The product of the gravitational constant ($G$) and the mass ($M$) of the central body (Earth). For Earth, $\mu = G M \approx 3.986 \times 10^{14} m^3/s^2$.
*   **Specific Angular Momentum ($h$):** Angular momentum per unit mass. It is constant for a given orbit and is equal to $r^2 \frac{d\theta}{dt}$. It can also be expressed as $h = \sqrt{\mu a(1-e^2)}$.
*   **Velocity ($v$):** The speed of the satellite in its orbit.

**Orbital Equations:**

*   **Velocity in an Elliptical Orbit (Vis-Viva Equation):**
    The speed of a satellite at any point in its orbit is given by:
    $v = \sqrt{\mu \left(\frac{2}{r} - \frac{1}{a}\right)}$
    Where:
    *   $v$ is the velocity.
    *   $\mu$ is the gravitational parameter of Earth.
    *   $r$ is the instantaneous distance from the Earth's center to the satellite.
    *   $a$ is the semi-major axis.

*   **Velocity at Perigee ($v_p$):**
    $v_p = \sqrt{\mu \left(\frac{2}{r_p} - \frac{1}{a}\right)} = \sqrt{\frac{\mu}{a(1-e^2)}} (1-e)$ (This can be simplified to $v_p = \sqrt{\frac{\mu(1+e)}{a(1-e)}}$)

*   **Velocity at Apogee ($v_a$):**
    $v_a = \sqrt{\mu \left(\frac{2}{r_a} - \frac{1}{a}\right)} = \sqrt{\frac{\mu}{a(1-e^2)}} (1+e)$ (This can be simplified to $v_a = \sqrt{\frac{\mu(1-e)}{a(1+e)}}$)

*   **Orbital Period ($T$):**
    The time it takes for a satellite to complete one orbit. From Kepler's Third Law, we can derive:
    $T = 2\pi \sqrt{\frac{a^3}{\mu}}$
    Where:
    *   $T$ is the orbital period in seconds.
    *   $a$ is the semi-major axis in meters.
    *   $\mu$ is the gravitational parameter of Earth in $m^3/s^2$.

**Reference:** Pratt & Allnutt, Chapter 2. Skolnik, Chapter 12 (Satellite Motion and Tracking - may have relevant concepts).

**Example:**
A satellite has an elliptical orbit with a semi-major axis $a = 7500$ km and an eccentricity $e = 0.2$. Calculate its velocity at perigee and apogee, and its orbital period.
Given: $\mu = 3.986 \times 10^{14} m^3/s^2$.
Convert $a$ to meters: $a = 7500 \times 10^3 m$.

1.  **Calculate Perigee and Apogee Distances:**
    $r_p = a(1-e) = 7500 \times 10^3 \times (1 - 0.2) = 6 \times 10^6 m$
    $r_a = a(1+e) = 7500 \times 10^3 \times (1 + 0.2) = 9 \times 10^6 m$

2.  **Calculate Velocity at Perigee ($v_p$):**
    $v_p = \sqrt{\mu \left(\frac{2}{r_p} - \frac{1}{a}\right)} = \sqrt{3.986 \times 10^{14} \left(\frac{2}{6 \times 10^6} - \frac{1}{7.5 \times 10^6}\right)}$
    $v_p = \sqrt{3.986 \times 10^{14} \left(0.3333 \times 10^{-6} - 0.1333 \times 10^{-6}\right)}$
    $v_p = \sqrt{3.986 \times 10^{14} \times 0.2 \times 10^{-6}} = \sqrt{7.972 \times 10^7} \approx 8928.6 m/s$

3.  **Calculate Velocity at Apogee ($v_a$):**
    $v_a = \sqrt{\mu \left(\frac{2}{r_a} - \frac{1}{a}\right)} = \sqrt{3.986 \times 10^{14} \left(\frac{2}{9 \times 10^6} - \frac{1}{7.5 \times 10^6}\right)}$
    $v_a = \sqrt{3.986 \times 10^{14} \left(0.2222 \times 10^{-6} - 0.1333 \times 10^{-6}\right)}$
    $v_a = \sqrt{3.986 \times 10^{14} \times 0.0889 \times 10^{-6}} = \sqrt{3.543 \times 10^7} \approx 5952.7 m/s$

4.  **Calculate Orbital Period ($T$):**
    $T = 2\pi \sqrt{\frac{a^3}{\mu}} = 2\pi \sqrt{\frac{(7.5 \times 10^6)^3}{3.986 \times 10^{14}}}$
    $T = 2\pi \sqrt{\frac{421.875 \times 10^{18}}{3.986 \times 10^{14}}} = 2\pi \sqrt{1.058 \times 10^6} \approx 2\pi \times 1028.6$
    $T \approx 6462.7$ seconds (or approximately 1 hour 47 minutes 43 seconds).

**Important Points to Remember:**
*   The velocity is maximum at perigee and minimum at apogee.
*   The orbital period is solely dependent on the semi-major axis and the gravitational parameter of the central body.

---

## 4. Geostationary Orbit (GEO)

The geostationary orbit is a special type of orbit that is of immense importance for communication satellites.

**Key Concepts & Definitions:**

*   **Geostationary Orbit (GEO):** A circular orbit directly above the Earth's equator, at an altitude of approximately 35,786 kilometers (22,236 miles).
*   **Characteristics of GEO:**
    *   **Altitude:** ~35,786 km.
    *   **Inclination:** 0 degrees (orbit is in the equatorial plane).
    *   **Eccentricity:** 0 (orbit is circular).
    *   **Orbital Period:** Exactly 23 hours, 56 minutes, 4 seconds (one sidereal day), matching Earth's rotation period.
*   **Apparent Stationary Position:** Because the satellite orbits at the same angular velocity as the Earth's rotation and in the same direction (west to east), it appears to remain fixed in the sky from any point on Earth.

**Derivation of GEO Altitude:**
For a circular orbit, the gravitational force provides the centripetal force.
$F_g = F_c$
$\frac{G M m}{r^2} = \frac{m v^2}{r}$
Where:
*   $G$ is the gravitational constant.
*   $M$ is the mass of the Earth.
*   $m$ is the mass of the satellite.
*   $r$ is the orbital radius (distance from Earth's center).
*   $v$ is the orbital velocity.

From $v = \frac{2\pi r}{T}$, we get $v^2 = \frac{4\pi^2 r^2}{T^2}$.
Substituting into the force equation:
$\frac{G M}{r^2} = \frac{4\pi^2 r^2}{T^2 r} = \frac{4\pi^2 r}{T^2}$
Rearranging to solve for $r$:
$r^3 = \frac{G M T^2}{4\pi^2}$
$r = \left(\frac{G M T^2}{4\pi^2}\right)^{1/3}$

Using $\mu = GM$:
$r = \left(\frac{\mu T^2}{4\pi^2}\right)^{1/3}$

For GEO, $T = 86164$ seconds (sidereal day).
$\mu = 3.986 \times 10^{14} m^3/s^2$.

$r = \left(\frac{3.986 \times 10^{14} \times (86164)^2}{4\pi^2}\right)^{1/3}$
$r = \left(\frac{3.986 \times 10^{14} \times 7.424 \times 10^9}{39.48}\right)^{1/3}$
$r = \left(\frac{2.959 \times 10^{24}}{39.48}\right)^{1/3} \approx (7.497 \times 10^{22})^{1/3}$
$r \approx 42,164 \times 10^3 m = 42,164$ km (from Earth's center).

This radius is measured from the center of the Earth. To find the altitude above the Earth's surface, we subtract the Earth's mean radius ($R_e \approx 6371$ km):
Altitude = $42164$ km - $6371$ km $\approx 35793$ km.
This is commonly rounded to 35,786 km.

**Applications of GEO:**
*   **Broadcasting:** Television and radio broadcasting (e.g., direct-to-home TV).
*   **Telecommunications:** Fixed satellite services for voice, data, and internet.
*   **Meteorology:** Weather satellites providing continuous observation of weather patterns.

**Advantages of GEO:**
*   **Continuous Coverage:** A single GEO satellite can cover about one-third of the Earth's surface, providing continuous communication without needing ground tracking antennas.
*   **Simple Ground Antennas:** Ground antennas do not need to track the satellite, allowing for fixed, simpler, and lower-cost ground equipment.

**Disadvantages of GEO:**
*   **High Latency:** Due to the large distance, there is a significant propagation delay (latency) of about 250 milliseconds for a round trip.
*   **Lower Signal Strength:** The path loss is higher, requiring more powerful transmitters and sensitive receivers.
*   **Limited Polar Coverage:** GEO satellites cannot provide coverage to the extreme polar regions.
*   **Cost:** Launching and maintaining satellites in GEO is expensive.

**Reference:** Pratt & Allnutt, Chapter 2. Pritchard, Chapter 3.

**Important Points to Remember:**
*   GEO is critical for applications requiring continuous, wide-area coverage without complex ground station tracking.
*   The altitude calculation is derived from matching the orbital period to Earth's rotation.

---

## 5. Launch Windows

Launching a satellite into its intended orbit is a complex process that requires precise timing.

**Key Concepts & Definitions:**

*   **Launch Window:** A specific period of time during which launch conditions are favorable for successfully placing a satellite into its desired orbit.
*   **Factors determining Launch Windows:**
    *   **Orbital Mechanics:** The desired orbital parameters (inclination, semi-major axis, etc.) must be achievable with the launch vehicle's capabilities and the current position of the target orbit.
    *   **Target Orbit:** The satellite needs to be placed into an orbit that aligns with the Earth's rotation at the launch site or provides the correct orbital elements.
    *   **Launch Site Location:** The latitude and longitude of the launch site influence the possible orbital inclinations. For example, launches from equatorial sites can easily achieve low-inclination orbits.
    *   **Celestial Mechanics:** The positions of other celestial bodies might be considered for certain advanced missions, though less critical for standard GEO or LEO launches.
    *   **Weather Conditions:** Favorable weather at the launch site and along the flight path is essential.
    *   **Range Safety:** Ensuring the launch trajectory is safe and does not pose a risk to populated areas or other spacecraft.
    *   **Range Availability:** The launch corridor must be clear of other activities.
    *   **Satellite/Payload Readiness:** The satellite must be fully tested and ready for launch.
    *   **Launch Vehicle Readiness:** The rocket must be prepared and fueled.

**How Launch Windows Work (Example for GEO):**

To place a satellite into a geostationary orbit, it must be launched at a specific time so that its orbit is aligned with the equator. This means the launch vehicle must lift off when the Earth's rotation carries the launch site directly into the desired orbital plane.

*   **Launch Site:** For a launch to a GEO equatorial orbit, launching from an equatorial launch site is ideal. If launching from a higher latitude, an additional maneuver (plane change) is often required, which consumes more fuel and is less efficient.
*   **Timing:** The launch must occur at a specific "time of day" when the launch site's longitude is positioned correctly relative to the target orbital slot. This timing repeats daily.
*   **Inclination:** If the launch vehicle injects the satellite into a transfer orbit, the initial inclination is determined by the latitude of the launch site. For a GEO, the initial inclination needs to be zero (equatorial). If launching from a non-equatorial site, the transfer orbit will have some inclination, and an inclination-changing maneuver will be needed in orbit.

**Example:**
Suppose a launch to a geostationary orbit is to occur from Kourou, French Guiana (near the equator). The launch window for a specific orbital slot might be a few minutes each day, determined by when the launch vehicle can achieve the correct orbital plane and altitude for geostationary transfer.

If a launch occurs slightly outside this window, the satellite might be placed into an orbit with a slight inclination, requiring the satellite's onboard propulsion system to perform an inclination correction burn to reach the final geostationary orbit. This consumes precious fuel, reducing the satellite's operational lifespan.

**Reference:** Pritchard, Chapter 4 (Launch Vehicles and Launch Operations).

**Important Points to Remember:**
*   Launch windows are critical for efficient satellite deployment.
*   They are determined by a combination of orbital mechanics, launch site, and operational constraints.
*   Missing a launch window often means waiting for the next opportunity, which could be hours, days, or even weeks later.

---

## Practice Questions and Answers

**Question 1:** A satellite is in a circular orbit around the Earth at an altitude of 500 km. What is its velocity?
(Given: Earth's mean radius $R_e = 6371$ km, Gravitational Parameter $\mu = 3.986 \times 10^{14} m^3/s^2$).

**Answer 1:**
1.  **Calculate orbital radius ($r$):**
    $r = R_e + \text{altitude} = 6371 \text{ km} + 500 \text{ km} = 6871 \text{ km} = 6.871 \times 10^6 m$.
2.  **Use the Vis-Viva equation for a circular orbit (where $r=a$):**
    $v = \sqrt{\frac{\mu}{r}} = \sqrt{\frac{3.986 \times 10^{14} m^3/s^2}{6.871 \times 10^6 m}}$
    $v = \sqrt{5.799 \times 10^7} \approx 7615.1 m/s$.

**Question 2:** A satellite has an elliptical orbit with a semi-major axis $a = 42,000$ km and perigee altitude of 200 km. Calculate its apogee altitude.
(Given: Earth's mean radius $R_e = 6371$ km).

**Answer 2:**
1.  **Calculate perigee distance ($r_p$):**
    $r_p = R_e + \text{perigee altitude} = 6371 \text{ km} + 200 \text{ km} = 6571 \text{ km}$.
2.  **Calculate semi-major axis in km:** $a = 42,000$ km.
3.  **Calculate eccentricity ($e$) using $r_p = a(1-e)$:**
    $e = 1 - \frac{r_p}{a} = 1 - \frac{6571}{42000} = 1 - 0.15645 = 0.84355$.
4.  **Calculate apogee distance ($r_a$) using $r_a = a(1+e)$:**
    $r_a = 42000 \text{ km} \times (1 + 0.84355) = 42000 \times 1.84355 = 77429.1$ km.
5.  **Calculate apogee altitude:**
    Apogee altitude = $r_a - R_e = 77429.1 \text{ km} - 6371 \text{ km} = 71058.1$ km.

**Question 3:** What is the orbital period of a satellite in a geostationary orbit?

**Answer 3:** The orbital period of a satellite in a geostationary orbit is equal to the Earth's sidereal rotation period, which is approximately 23 hours, 56 minutes, and 4 seconds (or 86164 seconds).

**Question 4:** Briefly explain why a satellite appears to be stationary from Earth when it is in a geostationary orbit.

**Answer 4:** A satellite in a geostationary orbit is in a circular orbit directly above the Earth's equator. Its orbital period is exactly the same as the Earth's rotational period (a sidereal day). Since it orbits in the same direction as the Earth spins (west to east), it maintains a fixed position relative to any point on the Earth's surface.

---

## Module Summary and Key Takeaways

*   **Kepler's Laws:** Ellipses, equal areas in equal times, and the relationship between period and semi-major axis are fundamental to satellite orbit.
*   **Elliptical Orbits:** Defined by semi-major axis ($a$) and eccentricity ($e$). Perigee and apogee are critical points.
*   **Orbital Equations:** The Vis-Viva equation allows calculation of velocity, and Kepler's Third Law ($T = 2\pi \sqrt{a^3/\mu}$) determines the orbital period.
*   **Geostationary Orbit (GEO):** A special circular, equatorial orbit at ~35,786 km altitude, providing a fixed apparent position for satellites, crucial for continuous communication and broadcasting.
*   **Launch Windows:** Precise timing windows required for successful satellite deployment, dictated by orbital mechanics, launch site, and operational constraints.

---

This concludes Module 1. The next module will build upon these orbital concepts to explore the parameters and design considerations for satellite communication links.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
