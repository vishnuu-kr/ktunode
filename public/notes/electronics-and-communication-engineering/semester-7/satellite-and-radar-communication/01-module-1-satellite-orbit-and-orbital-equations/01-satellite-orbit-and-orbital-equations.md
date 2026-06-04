---
title: "Satellite orbit and orbital equations"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff309"
status: "completed"
scrapedAt: "2026-05-23T18:10:28.149Z"
---
# Module 1: Satellite Orbit and Orbital Equations - Study Notes

## Subject: SATELLITE AND RADAR COMMUNICATION

---

### **Topic: Satellite Orbit and Orbital Equations**

This module introduces the fundamental concepts of satellite orbits, the laws governing them, and the mathematical equations used to describe their motion. Understanding these principles is crucial for designing and operating satellite communication systems.

---

### **1.1 Kepler's Laws of Planetary Motion**

These empirical laws, formulated by Johannes Kepler, describe the motion of planets around the Sun. They are directly applicable to the motion of artificial satellites around the Earth.

*   **Kepler's First Law (Law of Ellipses):**
    *   **Concept:** The orbit of every planet is an ellipse with the Sun at one of the two foci.
    *   **Application to Satellites:** The orbit of every satellite is an ellipse with the Earth's center at one of the two foci.
    *   **Key Terms:**
        *   **Ellipse:** A closed curve defined by two focal points, where the sum of the distances from any point on the curve to the two foci is constant.
        *   **Foci (singular: focus):** The two fixed points within an ellipse used in its definition.
        *   **Semi-major Axis (a):** Half the longest diameter of an ellipse. It determines the size of the orbit and is a key parameter in orbital calculations.
        *   **Eccentricity (e):** A measure of how much an ellipse deviates from being a perfect circle.
            *   `e = 0`: Perfect circle.
            *   `0 < e < 1`: Ellipse.
            *   `e = 1`: Parabola.
            *   `e > 1`: Hyperbola.
    *   **Important Point:** Most artificial satellite orbits are nearly circular, meaning their eccentricity is very small.

*   **Kepler's Second Law (Law of Areas):**
    *   **Concept:** A line joining a planet and the Sun sweeps out equal areas during equal intervals of time.
    *   **Application to Satellites:** A line joining a satellite and the Earth's center sweeps out equal areas during equal intervals of time.
    *   **Implication:** The satellite moves faster when it is closer to the Earth (perigee) and slower when it is farther away (apogee).
    *   **Key Terms:**
        *   **Perigee:** The point in an orbit closest to the Earth.
        *   **Apogee:** The point in an orbit farthest from the Earth.
        *   **Periapsis:** General term for the point closest to the central body in an orbit.
        *   **Apoapsis:** General term for the point farthest from the central body in an orbit.
    *   **Important Point:** This law implies conservation of angular momentum.

*   **Kepler's Third Law (Law of Harmonies):**
    *   **Concept:** The square of the orbital period of a planet is directly proportional to the cube of the semi-major axis of its orbit.
    *   **Application to Satellites:** For a satellite orbiting the Earth, the square of its orbital period (`T`) is proportional to the cube of its semi-major axis (`a`).
    *   **Mathematical Formulation:**
        $$ T^2 \propto a^3 $$
    *   **Precise Equation (derived from Newton's Law of Gravitation):**
        $$ T = 2\pi \sqrt{\frac{a^3}{\mu}} $$
        where:
        *   `T` is the orbital period (seconds).
        *   `a` is the semi-major axis (meters).
        *   `μ` is the standard gravitational parameter of the central body (Earth). For Earth, `μ = GM ≈ 3.986 × 10^14 m³/s²`, where `G` is the gravitational constant and `M` is the Earth's mass.
    *   **Importance:** This law is crucial for determining the orbital period of a satellite based on its altitude and, conversely, determining the required altitude for a satellite to have a specific orbital period (e.g., geostationary orbit).

---

### **1.2 Orbital Parameters (Orbital Elements)**

These are a set of parameters that uniquely define the size, shape, and orientation of an orbit at a given time. They are essential for predicting a satellite's position and trajectory.

*   **Semi-major Axis (`a`):**
    *   **Definition:** Half the longest diameter of the elliptical orbit.
    *   **Significance:** Determines the size of the orbit and, consequently, the orbital period (via Kepler's Third Law).
    *   **Relationship to Altitude:** For a near-circular orbit, `a = Re + h`, where `Re` is the Earth's radius and `h` is the satellite's altitude.

*   **Eccentricity (`e`):**
    *   **Definition:** A measure of how elliptical the orbit is.
    *   **Significance:** Determines the shape of the orbit. `e=0` for a circle, `0 < e < 1` for an ellipse.

*   **Inclination (`i`):**
    *   **Definition:** The angle between the orbital plane and the Earth's equatorial plane.
    *   **Range:** `0° ≤ i ≤ 180°`.
    *   **Significance:** Determines the region of the Earth over which the satellite's ground track will pass.
        *   `i = 0°`: Equatorial orbit.
        *   `0° < i < 90°`: Prograde orbit (satellite moves in the same direction as Earth's rotation).
        *   `i = 90°`: Polar orbit.
        *   `90° < i < 180°`: Retrograde orbit (satellite moves opposite to Earth's rotation).
        *   `i = 180°`: Equatorial retrograde orbit.

*   **Right Ascension of the Ascending Node (RAAN or Ω):**
    *   **Definition:** The angle, measured eastward in the equatorial plane, from the vernal equinox (a fixed astronomical reference point) to the ascending node.
    *   **Ascending Node:** The point where the satellite crosses the equatorial plane from the Southern Hemisphere to the Northern Hemisphere.
    *   **Significance:** Determines the orientation of the orbital plane in space.

*   **Argument of Perigee (ω):**
    *   **Definition:** The angle, measured in the orbital plane, from the ascending node to the perigee.
    *   **Significance:** Determines the orientation of the ellipse within the orbital plane.

*   **True Anomaly (`ν` or `θ`):**
    *   **Definition:** The angle, measured in the orbital plane, from the perigee to the satellite's current position.
    *   **Significance:** Specifies the satellite's position along its orbit at a given instant.

**(Refer to Pratt & Allnutt, Chapter 2: Orbital Mechanics for detailed explanations and derivations.)**

---

### **1.3 Types of Satellite Orbits**

Different orbits are chosen based on the specific application requirements.

*   **Geostationary Orbit (GEO):**
    *   **Characteristics:**
        *   Circular orbit.
        *   Altitude: Approximately 35,786 km above the Earth's equator.
        *   Inclination: `0°`.
        *   Orbital Period: Exactly equal to Earth's sidereal rotation period (approx. 23 hours, 56 minutes, 4 seconds).
    *   **Application:** Provides a fixed position relative to a point on Earth. Ideal for broadcasting, weather satellites, and communication satellites that need continuous coverage of a specific region without complex tracking.
    *   **Implications:** A satellite in GEO appears stationary in the sky.
    *   **Derivation of Altitude:**
        *   From Kepler's Third Law: $T = 2\pi \sqrt{\frac{a^3}{\mu}}$
        *   For GEO, $T = \text{Earth's sidereal period} ≈ 23 \text{h } 56 \text{min } 4 \text{s} ≈ 86164 \text{ s}$.
        *   $a^3 = \frac{\mu T^2}{4\pi^2}$
        *   $a = \left(\frac{\mu T^2}{4\pi^2}\right)^{1/3}$
        *   Substituting values: $a \approx 42,164 \text{ km}$ (from Earth's center).
        *   Altitude $h = a - R_e = 42164 \text{ km} - 6378 \text{ km} \approx 35786 \text{ km}$.

*   **Geosynchronous Orbit (GSO):**
    *   **Characteristics:**
        *   Any orbit with an orbital period equal to Earth's sidereal rotation period.
        *   Can be elliptical and/or inclined.
    *   **Application:** The satellite reappears over the same part of the Earth at the same time each day. An inclined GSO will appear to trace a figure-eight path in the sky.

*   **Low Earth Orbit (LEO):**
    *   **Characteristics:**
        *   Altitude: Typically 160 km to 2000 km above the Earth's surface.
        *   Orbital Period: Around 90 to 120 minutes.
        *   Often polar or near-polar orbits (`i ≈ 90°`).
    *   **Application:** Satellite constellations for global internet (e.g., Starlink), Earth observation, some communication systems.
    *   **Advantages:** Lower launch costs, less signal delay (latency), simpler ground station antennas.
    *   **Disadvantages:** Requires large constellations for continuous coverage, limited view of Earth from a single satellite, higher atmospheric drag at lower altitudes.

*   **Medium Earth Orbit (MEO):**
    *   **Characteristics:**
        *   Altitude: Between LEO and GEO, typically 2,000 km to 35,786 km.
        *   Orbital Period: Several hours.
    *   **Application:** Global Positioning System (GPS), GLONASS, Galileo satellite navigation systems.
    *   **Advantages:** Wider coverage than LEO, lower latency than GEO.
    *   **Disadvantages:** Requires fewer satellites than LEO for global coverage but more than GEO, larger ground station antennas and more complex tracking than GEO.

*   **Highly Elliptical Orbit (HEO):**
    *   **Characteristics:**
        *   Highly eccentric orbits (`e > 0.5`).
        *   Long apogee dwell times over specific regions.
    *   **Application:** Communications in high-latitude regions (e.g., Molniya orbit), scientific missions.
    *   **Molniya Orbit:** A specific type of HEO with an inclination of approximately 63.4 degrees. It provides long periods of visibility over high-latitude regions of Russia and North America.

**(Refer to Pratt & Allnutt, Chapter 2: Orbital Mechanics for detailed discussion on orbit types.)**

---

### **1.4 Satellite Orbital Motion Equations**

These equations are derived from Newton's Law of Universal Gravitation and are used to calculate a satellite's position and velocity.

*   **Newton's Law of Universal Gravitation:**
    *   **Concept:** The force of attraction between two bodies is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.
    *   **Formula:**
        $$ F = G \frac{m_1 m_2}{r^2} $$
        where:
        *   `F` is the gravitational force.
        *   `G` is the gravitational constant.
        *   `m_1` and `m_2` are the masses of the two bodies.
        *   `r` is the distance between the centers of the two bodies.

*   **Centripetal Force for Orbital Motion:**
    *   **Concept:** For a satellite to maintain a circular orbit, the gravitational force must provide the necessary centripetal force.
    *   **Formula:**
        $$ F_{\text{centripetal}} = m \frac{v^2}{r} $$
        where:
        *   `m` is the mass of the satellite.
        *   `v` is the orbital velocity.
        *   `r` is the orbital radius (distance from the Earth's center).
    *   **Equating Forces for Circular Orbit:**
        $$ G \frac{M m}{r^2} = m \frac{v^2}{r} $$
        where `M` is the Earth's mass.
    *   **Deriving Orbital Velocity (`v`) for a Circular Orbit:**
        $$ v^2 = \frac{GM}{r} $$
        $$ v = \sqrt{\frac{GM}{r}} $$
        Since $GM = \mu$,
        $$ v = \sqrt{\frac{\mu}{r}} $$
    *   **Important Point:** For a circular orbit, the velocity is constant.

*   **Orbital Period (`T`) for a Circular Orbit:**
    *   **Concept:** The time it takes for a satellite to complete one orbit.
    *   **Formula:**
        $$ T = \frac{\text{Circumference}}{\text{Velocity}} = \frac{2\pi r}{v} $$
        Substituting the expression for `v`:
        $$ T = \frac{2\pi r}{\sqrt{\frac{\mu}{r}}} = 2\pi r \sqrt{\frac{r}{\mu}} = 2\pi \sqrt{\frac{r^3}{\mu}} $$
        This confirms Kepler's Third Law for circular orbits where `r` is the semi-major axis `a`.

*   **Velocity in an Elliptical Orbit (Vis-viva Equation):**
    *   **Concept:** The speed of a satellite in an elliptical orbit varies. The vis-viva equation relates the velocity at any point in the orbit to the distance from the central body and the size of the orbit.
    *   **Formula:**
        $$ v^2 = \mu \left( \frac{2}{r} - \frac{1}{a} \right) $$
        where:
        *   `v` is the orbital velocity at distance `r`.
        *   `μ` is the standard gravitational parameter.
        *   `r` is the distance from the center of the Earth to the satellite at the current position.
        *   `a` is the semi-major axis of the orbit.
    *   **At Perigee (`r = rp = a(1-e)`):**
        $$ v_p^2 = \mu \left( \frac{2}{a(1-e)} - \frac{1}{a} \right) = \mu \left( \frac{2 - (1-e)}{a(1-e)} \right) = \mu \frac{1+e}{a(1-e)} $$
        $$ v_p = \sqrt{\mu \frac{1+e}{a(1-e)}} $$
    *   **At Apogee (`r = ra = a(1+e)`):**
        $$ v_a^2 = \mu \left( \frac{2}{a(1+e)} - \frac{1}{a} \right) = \mu \left( \frac{2 - (1+e)}{a(1+e)} \right) = \mu \frac{1-e}{a(1+e)} $$
        $$ v_a = \sqrt{\mu \frac{1-e}{a(1+e)}} $$
    *   **Important Point:** At perigee, `v_p` is maximum. At apogee, `v_a` is minimum.

**(Refer to Pratt & Allnutt, Chapter 2: Orbital Mechanics for derivations and examples of the vis-viva equation.)**

---

### **1.5 Orbital Perturbations**

The idealized Keplerian orbits are affected by various forces, causing deviations from the perfect elliptical path. These are called orbital perturbations.

*   **Primary Perturbing Forces:**
    *   **Earth's Oblateness (J2 effect):** The Earth is not a perfect sphere; it bulges at the equator. This gravitational anomaly causes the orbital plane to precess (rotate) and the perigee to move. The RAAN and argument of perigee change over time.
    *   **Gravitational Forces of the Sun and Moon:** These celestial bodies exert gravitational forces on the satellite, especially significant for satellites in higher orbits or with long mission durations.
    *   **Atmospheric Drag:** For satellites in LEO, atmospheric drag causes a loss of altitude and orbital energy, leading to orbital decay. This effect is dependent on the satellite's altitude, shape, and the density of the upper atmosphere, which varies with solar activity.
    *   **Solar Radiation Pressure:** Photons from the sun exert a small but continuous force on the satellite's surface. This force is more significant for satellites with large surface areas and low mass, and it tends to increase the eccentricity of the orbit.

*   **Impact on Satellite Operations:**
    *   **Station Keeping:** Satellites, especially those in GEO, require periodic maneuvers (station-keeping burns) to counteract these perturbations and maintain their intended orbital position.
    *   **Orbit Prediction:** Accurate prediction of satellite trajectories requires sophisticated models that account for these perturbations.

**(Refer to Pratt & Allnutt, Chapter 2: Orbital Mechanics for detailed discussion on perturbations.)**

---

### **Learning Outcomes Addressed:**

*   **CO1: Illustrate the principles of satellite communication (Knowledge Level: K2)**
    *   Understanding orbital mechanics is foundational to satellite communication. Knowledge of different orbit types (GEO, LEO, MEO) and their characteristics explains why certain orbits are suitable for specific communication applications (e.g., broadcasting from GEO, global coverage from LEO constellations). Kepler's laws and orbital parameters explain how satellites move and where they can be positioned.

---

### **Important Points to Remember:**

*   **Kepler's Laws:** Ellipses, Equal Areas, Period-Semi-major Axis relationship.
*   **Orbital Parameters:** `a`, `e`, `i`, Ω, ω, ν define an orbit precisely.
*   **GEO:** Fixed position, 35,786 km altitude, 0° inclination, 24-hour period.
*   **LEO:** Low altitude (160-2000 km), short period (90-120 min), often polar.
*   **Vis-viva Equation:** Key for calculating velocity in elliptical orbits.
*   **Perturbations:** Earth's oblateness, Sun/Moon gravity, drag, and solar pressure cause deviations from ideal orbits.

---

### **Practice Questions:**

1.  **Question:** A satellite is in a circular orbit around the Earth at an altitude of 500 km. Calculate its orbital period.
    *   **Given:**
        *   Altitude ($h$) = 500 km = 500,000 m
        *   Earth's Radius ($R_e$) ≈ 6378 km = 6,378,000 m
        *   Standard Gravitational Parameter for Earth ($\mu$) ≈ 3.986 × 10¹⁴ m³/s²
    *   **Solution:**
        *   First, calculate the orbital radius (distance from Earth's center):
            $r = R_e + h = 6,378,000 \text{ m} + 500,000 \text{ m} = 6,878,000 \text{ m}$
        *   Use Kepler's Third Law for circular orbits:
            $T = 2\pi \sqrt{\frac{r^3}{\mu}}$
        *   $T = 2\pi \sqrt{\frac{(6,878,000 \text{ m})^3}{3.986 \times 10^{14} \text{ m}^3/\text{s}^2}}$
        *   $T = 2\pi \sqrt{\frac{3.256 \times 10^{20} \text{ m}^3}{3.986 \times 10^{14} \text{ m}^3/\text{s}^2}}$
        *   $T = 2\pi \sqrt{8.168 \times 10^5 \text{ s}^2}$
        *   $T = 2\pi \times 903.77 \text{ s}$
        *   $T \approx 5678 \text{ seconds}$
        *   Convert to minutes: $5678 \text{ s} / 60 \text{ s/min} \approx 94.6 \text{ minutes}$.
    *   **Answer:** The orbital period is approximately 5678 seconds or 94.6 minutes.

2.  **Question:** What is the key difference between a geostationary orbit (GEO) and a geosynchronous orbit (GSO)? (CO1, K2)
    *   **Answer:** A geosynchronous orbit (GSO) is any orbit with an orbital period that matches Earth's sidereal rotation period. A geostationary orbit (GEO) is a specific type of GSO that is circular, lies in the Earth's equatorial plane (0° inclination), and is at a specific altitude (approximately 35,786 km). This makes a GEO satellite appear to be fixed in the sky relative to an observer on Earth. A GSO that is not circular or not equatorial will appear to drift north-south and/or east-west in the sky.

3.  **Question:** For a satellite in an elliptical orbit, where is its velocity highest and lowest? Explain why. (CO1, K2)
    *   **Answer:** The satellite's velocity is highest at **perigee** (the point closest to Earth) and lowest at **apogee** (the point farthest from Earth). This is a consequence of Kepler's Second Law (Law of Areas) and the conservation of angular momentum. To sweep out equal areas in equal times, the satellite must move faster when it is closer to the Earth and slower when it is farther away. Mathematically, this is also explained by the vis-viva equation, where velocity is inversely related to distance for a fixed semi-major axis.

4.  **Question:** Define the orbital element "Inclination" and explain its significance in terms of the ground track of a satellite. (CO1, K2)
    *   **Answer:** Inclination (`i`) is the angle between the satellite's orbital plane and the Earth's equatorial plane. It is measured in degrees, ranging from 0° to 180°.
        *   **Significance:** The inclination dictates the range of latitudes over which the satellite's ground track (the path traced by the satellite on the Earth's surface) will extend.
            *   An inclination of 0° means the satellite orbits directly above the equator.
            *   An inclination of 90° means the satellite orbits over the poles, covering all longitudes at least once per day (a polar orbit).
            *   An inclination between 0° and 90° results in a prograde orbit, covering latitudes from the equator up to the inclination value.
            *   An inclination between 90° and 180° results in a retrograde orbit, covering latitudes from the equator down to the negative inclination value.

5.  **Question:** A satellite has a semi-major axis of 42,164 km. Is it likely to be in a geostationary orbit? Justify your answer. (CO1, K2)
    *   **Answer:** Yes, it is likely to be in a geostationary orbit. The semi-major axis for a geostationary orbit is approximately 42,164 km (measured from the Earth's center). This value is derived from Kepler's Third Law to match the Earth's sidereal rotation period, resulting in the satellite appearing stationary in the sky.

---
This concludes Module 1 notes. Ensure you review these concepts and equations as they form the basis for understanding satellite communication systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
