---
title: "Look angle calculation"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 1: Satellite orbit and orbital equations"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff897"
status: "completed"
scrapedAt: "2026-05-23T18:57:07.726Z"
---
# Satellite and Radar Communication: Module 1 - Satellite Orbit and Orbital Equations

## Topic: Look Angle Calculation

### Learning Outcomes:

*   Understand the fundamental concepts of satellite orbits and their parameters.
*   Derive and apply orbital equations to determine satellite position.
*   Calculate look angles (elevation and azimuth) for ground station visibility.
*   Explain the importance of look angle calculations for satellite communication system design and operation.

### Course Outcomes Addressed:

*   **CO1 (K2): Illustrate the principles of satellite communication.** Understanding look angles is crucial for illustrating how ground stations communicate with satellites.
*   **CO2 (K3): Design and analysis of satellite link.** Accurate look angle calculations are fundamental for pointing antennas, determining link availability, and analyzing signal propagation.

### 1. Introduction to Look Angles

Look angles are the angles, relative to the local horizontal plane and local meridian, at which a ground station antenna must be pointed to establish and maintain communication with a satellite. They are essential for:

*   **Antenna Pointing:** Directing the ground station antenna towards the satellite.
*   **Link Budget Analysis:** Determining the path loss and availability of the communication link.
*   **Site Selection:** Identifying suitable locations for ground stations based on satellite visibility.
*   **Tracking:** For geostationary satellites, while the look angles are constant, for other orbits, continuous tracking is required.

### 2. Key Concepts and Definitions

*   **Satellite Position:** The location of the satellite in orbit at a specific time. This is usually expressed in Earth-Centered Inertial (ECI) coordinates or Earth-Centered, Earth-Fixed (ECEF) coordinates.
*   **Ground Station Position:** The location of the ground station on the Earth's surface, typically given in latitude ($\phi$), longitude ($\lambda$), and altitude ($h$).
*   **Local Horizontal Plane:** A plane tangential to the Earth's surface at the ground station's location.
*   **Local Meridian:** A line of constant longitude passing through the ground station's location.
*   **Elevation Angle (E):** The angle measured upward from the local horizontal plane to the line of sight to the satellite. A positive elevation angle means the satellite is above the horizon.
*   **Azimuth Angle (A):** The angle measured eastward from the local meridian to the point where the satellite's position projected onto the local horizontal plane intersects the horizon. The convention for the starting direction of azimuth can vary (e.g., North or South).
*   **Subsatellite Point:** The point on the Earth's surface directly beneath the satellite.
*   **Geostationary Orbit (GEO):** A circular orbit directly above the Earth's equator, with a period equal to the Earth's rotational period. Satellites in GEO appear stationary from a ground station.
*   **Inclination (i):** The angle between the orbital plane and the Earth's equatorial plane.
*   **Right Ascension of the Ascending Node (RAAN):** The angle measured eastward from the vernal equinox to the ascending node.
*   **Argument of Perigee:** The angle measured eastward from the ascending node to the perigee.
*   **True Anomaly:** The angle measured from perigee to the satellite's current position.

### 3. Determining Satellite Position

To calculate look angles, we first need to know the satellite's position. This involves understanding orbital mechanics and using orbital equations.

#### 3.1. Orbital Elements

The orbital elements are a set of parameters that uniquely define an orbit. For Keplerian orbits (elliptical paths under a central force, like Earth's gravity), these are:

1.  **Semi-major axis (a):** Average distance from the center of the Earth to the satellite.
2.  **Eccentricity (e):** A measure of how elliptical the orbit is (0 for a circle, <1 for an ellipse).
3.  **Inclination (i):** Angle between the orbital plane and the equatorial plane.
4.  **Right Ascension of the Ascending Node (RAAN, $\Omega$):** Angle eastward from the vernal equinox to the ascending node.
5.  **Argument of Perigee ($\omega$):** Angle eastward from the ascending node to the perigee.
6.  **True Anomaly ($\nu$):** Angle measured from perigee to the satellite's current position in its orbit. Alternatively, mean anomaly or eccentric anomaly can be used.

#### 3.2. Converting Orbital Elements to Position Vectors

Given the orbital elements and time, the satellite's position can be determined in an Earth-Centered Inertial (ECI) frame. This typically involves:

*   **Calculating the Mean Anomaly ($M$) or Eccentric Anomaly ($E$)**: Based on the orbital period and time.
*   **Solving Kepler's Equation ($M = E - e \sin E$)**: To find the Eccentric Anomaly ($E$). This usually requires an iterative numerical method.
*   **Calculating the True Anomaly ($\nu$)**: From $E$.
*   **Calculating the distance from the Earth's center ($r$)**: Using the formula $r = a(1 - e \cos E)$.
*   **Calculating the position in the orbital plane**: $x' = r \cos \nu$ and $y' = r \sin \nu$.
*   **Rotating into the Earth-Fixed (ECEF) frame**: This involves accounting for the Earth's rotation and the orbital plane's orientation using the RAAN, inclination, and argument of perigee.

**Refer to Pratt & Allnutt (3rd Ed., Chapter 2) for detailed derivations of converting orbital elements to position vectors in the ECI frame and then to the ECEF frame.**

### 4. Calculating Look Angles

Once the satellite's position ($ \mathbf{r}_s $) and the ground station's position ($ \mathbf{r}_g $) are known in the same coordinate frame (usually ECEF), the look angles can be calculated.

#### 4.1. Coordinate Transformations

We need to transform the satellite's position into a local coordinate system at the ground station.

*   **Ground Station Latitude ($\phi$), Longitude ($\lambda$), and Altitude ($h$)**:
    *   We can represent the ground station's position vector in ECEF coordinates. Assuming a spherical Earth for simplicity (or an oblate spheroid for higher accuracy), the coordinates are:
        *   $X_g = (R_e + h) \cos \phi \cos \lambda$
        *   $Y_g = (R_e + h) \cos \phi \sin \lambda$
        *   $Z_g = (R_e + h) \sin \phi$
        where $R_e$ is the Earth's radius and $\phi$ is latitude, $\lambda$ is longitude. Note that $\phi$ and $\lambda$ are often given in degrees and need to be converted to radians for trigonometric functions.

*   **Satellite Position in ECEF Frame ($ \mathbf{r}_s $)**:
    *   $X_s$, $Y_s$, $Z_s$.

*   **Vector from Ground Station to Satellite ($ \mathbf{d} $)**:
    *   $d_x = X_s - X_g$
    *   $d_y = Y_s - Y_g$
    *   $d_z = Z_s - Z_g$

#### 4.2. Calculating Elevation and Azimuth Angles

The look angles are determined from the components of the vector $ \mathbf{d} $ in a local coordinate system at the ground station.

*   **Local East-North-Up (ENU) Coordinate System:**
    *   The **Up** direction is along the radial vector from the Earth's center through the ground station.
    *   The **East** direction is perpendicular to the Up direction and along the tangent to the Earth's surface, pointing east.
    *   The **North** direction is perpendicular to both Up and East, and along the tangent to the Earth's surface, pointing north.

    The components of the vector $ \mathbf{d} $ in the ENU frame can be obtained by rotating the ECEF components. For a ground station at latitude $\phi$ and longitude $\lambda$:

    *   $d_{east} = -d_x \sin \lambda + d_y \cos \lambda$
    *   $d_{north} = -d_x \cos \phi \sin \lambda - d_y \sin \phi \cos \lambda + d_z \cos \phi$
    *   $d_{up} = d_x \sin \phi \cos \lambda + d_y \sin \phi \sin \lambda + d_z \cos \phi$

    **Note:** The sign conventions for longitude and latitude are important. Typically, East longitude is positive, West is negative. North latitude is positive, South is negative.

*   **Elevation Angle (E):**
    The elevation angle is the angle between the horizontal plane and the line of sight to the satellite. It can be calculated from the $d_{up}$ and the horizontal component of $ \mathbf{d} $.

    $ \tan E = \frac{d_{up}}{\sqrt{d_x^2 + d_y^2 + d_z^2 - d_{up}^2}} $

    Alternatively, using the ENU components:

    $ \tan E = \frac{d_{up}}{\sqrt{d_{east}^2 + d_{north}^2}} $

    Therefore,
    $ E = \arctan \left( \frac{d_{up}}{\sqrt{d_{east}^2 + d_{north}^2}} \right) $

    *   **Important:** If $d_{up}$ is negative, the satellite is below the horizon. For communication, $E$ must be positive. The ground station must be able to point at an angle $E$ above the horizon.

*   **Azimuth Angle (A):**
    The azimuth angle is measured eastward from the local meridian. It can be calculated from the $d_{east}$ and $d_{north}$ components.

    $ \tan A = \frac{d_{east}}{d_{north}} $

    Therefore,
    $ A = \arctan \left( \frac{d_{east}}{d_{north}} \right) $

    *   **Important:** The `arctan` function typically returns values in the range $(-90^\circ, +90^\circ)$. To get the correct azimuth angle, we need to consider the signs of $d_{east}$ and $d_{north}$ to place it in the correct quadrant (0 to 360 degrees).
        *   If $d_{north} > 0$ and $d_{east} > 0$: $A$ is in the 1st quadrant.
        *   If $d_{north} > 0$ and $d_{east} < 0$: $A$ is in the 4th quadrant.
        *   If $d_{north} < 0$ and $d_{east} > 0$: $A$ is in the 2nd quadrant.
        *   If $d_{north} < 0$ and $d_{east} < 0$: $A$ is in the 3rd quadrant.
        *   If $d_{north} = 0$ and $d_{east} > 0$: $A = 90^\circ$ (East).
        *   If $d_{north} = 0$ and $d_{east} < 0$: $A = 270^\circ$ (West).
        *   If $d_{east} = 0$ and $d_{north} > 0$: $A = 0^\circ$ (North).
        *   If $d_{east} = 0$ and $d_{north} < 0$: $A = 180^\circ$ (South).
        *   If $d_{east} = 0$ and $d_{north} = 0$: The satellite is directly overhead, and azimuth is undefined.

    **Refer to Pratt & Allnutt (3rd Ed., Chapter 2) for a detailed breakdown of these coordinate transformations and look angle calculations, including the use of a spherical Earth model.**

### 5. Special Case: Geostationary Satellites

For geostationary satellites, the orbital inclination is 0 degrees, and the orbit is circular and lies in the equatorial plane.

*   A geostationary satellite has a constant longitude and latitude (0 degrees).
*   Therefore, for a ground station, the look angles (elevation and azimuth) to a geostationary satellite are **constant** over time.
*   This simplifies antenna pointing considerably, as the antenna can be fixed in direction.

**Example:**
Consider a ground station located at latitude $30^\circ$ N and longitude $75^\circ$ E. A geostationary satellite is positioned at $100^\circ$ E longitude.

*   Ground Station $(\phi_g, \lambda_g) = (30^\circ, 75^\circ)$
*   Satellite Longitude $\lambda_s = 100^\circ$
*   Satellite Latitude $\phi_s = 0^\circ$

Let $R_e$ be the Earth's radius. We can approximate the calculation by assuming a spherical Earth and ignoring altitude for simplicity in this example.

*   Satellite position $(X_s, Y_s, Z_s)$ is:
    $X_s = R_e \cos(0^\circ) \cos(100^\circ)$
    $Y_s = R_e \cos(0^\circ) \sin(100^\circ)$
    $Z_s = R_e \sin(0^\circ) = 0$

*   Ground Station position $(X_g, Y_g, Z_g)$ is:
    $X_g = R_e \cos(30^\circ) \cos(75^\circ)$
    $Y_g = R_e \cos(30^\circ) \sin(75^\circ)$
    $Z_g = R_e \sin(30^\circ)$

Calculate the difference vector $ \mathbf{d} = \mathbf{r}_s - \mathbf{r}_g $:
$d_x = R_e (\cos(100^\circ) - \cos(30^\circ)\cos(75^\circ))$
$d_y = R_e (\sin(100^\circ) - \cos(30^\circ)\sin(75^\circ))$
$d_z = R_e (0 - \sin(30^\circ))$

Now convert to ENU coordinates for the ground station at $\phi_g = 30^\circ$ and $\lambda_g = 75^\circ$:

$d_{east} = -d_x \sin(75^\circ) + d_y \cos(75^\circ)$
$d_{north} = -d_x \cos(30^\circ) \sin(75^\circ) - d_y \sin(30^\circ) \cos(75^\circ) + d_z \cos(30^\circ)$
$d_{up} = d_x \sin(30^\circ) \cos(75^\circ) + d_y \sin(30^\circ) \sin(75^\circ) + d_z \cos(30^\circ)$

Finally, calculate $E$ and $A$:
$E = \arctan \left( \frac{d_{up}}{\sqrt{d_{east}^2 + d_{north}^2}} \right)$
$A = \arctan2(d_{east}, d_{north})$ (using a function that handles quadrants)

*(Detailed numerical calculation omitted for brevity, but the steps are outlined. This illustrates the process.)*

**Refer to Skolnik (2nd Ed.) for radar system context and potential parallels in coordinate transformations for target tracking, though the primary focus for look angles is satellite communication.**

### 6. Importance and Applications

*   **Antenna Design and Deployment:** Look angles dictate the required pointing accuracy and the physical constraints for antenna structures.
*   **Tracking Systems:** For non-geostationary satellites (e.g., MEO, LEO), continuous tracking is essential. Look angle calculations form the basis of these tracking algorithms.
*   **Network Management:** Understanding satellite visibility windows for different ground stations is crucial for network planning and handover between satellites.
*   **Interference Analysis:** Knowing the direction of the satellite helps in identifying potential terrestrial interference sources.
*   **Satellite Maneuvers:** If a satellite changes its orbital parameters, the look angles from ground stations will change, requiring recalibration of pointing.

### 7. Important Points to Remember

*   Look angles are **site-specific** and **time-specific**.
*   Accurate **orbital parameters** are essential for precise look angle calculations.
*   **Coordinate transformations** between ECI, ECEF, and local ENU frames are critical.
*   For geostationary satellites, look angles are **constant**. For others, they **vary with time**.
*   The elevation angle must be **positive** for the satellite to be visible above the horizon.
*   **Azimuth angle convention** (starting from North or South, direction of measurement) needs to be consistent.

### 8. Practice Questions and Exercises

**Question 1:**
A ground station is located at latitude $40^\circ$ N and longitude $80^\circ$ W. A satellite is at an elevation angle of $30^\circ$ and an azimuth angle of $120^\circ$ (measured clockwise from North). Determine the direction of the satellite in terms of East and North components relative to the ground station.

**Answer 1:**
Let the ground station be at $(\phi_g, \lambda_g) = (40^\circ, -80^\circ)$.
We are given $E = 30^\circ$ and $A = 120^\circ$.

We can work backward from look angles to find the relative position components in ENU.
$d_{up} = \sqrt{d_{east}^2 + d_{north}^2} \tan E$
$d_{east} = \sqrt{d_{east}^2 + d_{north}^2} \sin A$
$d_{north} = \sqrt{d_{east}^2 + d_{north}^2} \cos A$

Let $R_{horiz} = \sqrt{d_{east}^2 + d_{north}^2}$.
$d_{up} = R_{horiz} \tan(30^\circ) = R_{horiz} \times 0.577$
$d_{east} = R_{horiz} \sin(120^\circ) = R_{horiz} \times 0.866$
$d_{north} = R_{horiz} \cos(120^\circ) = R_{horiz} \times (-0.5)$

The direction is determined by the relative magnitudes and signs.
The satellite is $0.866 \times R_{horiz}$ East and $0.5 \times R_{horiz}$ North of the local horizontal plane.
The satellite is $0.577 \times R_{horiz}$ above the local horizontal plane.

Without knowing the distance to the satellite, we can only determine the direction.
The satellite is in the North-East quadrant (since azimuth is 120 degrees from North) and above the horizon.

**Question 2:**
Explain why accurate look angle calculations are essential for designing a satellite communication link for a Low Earth Orbit (LEO) satellite compared to a Geostationary Earth Orbit (GEO) satellite.

**Answer 2:**
For **GEO satellites**, they appear stationary from the ground. Therefore, the look angles (elevation and azimuth) are **constant**. Once the antenna is pointed correctly, it can remain fixed. This simplifies ground station antenna design and tracking requirements.

For **LEO satellites**, they move rapidly across the sky relative to a ground station. This means the look angles change continuously with time. For maintaining a communication link:
1.  **Antennas must track the satellite:** This requires dynamic control systems that constantly update the pointing direction based on calculated look angles.
2.  **Link availability is time-dependent:** A communication link with an LEO satellite is only possible when the satellite is above the horizon, and the elevation angle is sufficient for reliable communication. Look angle calculations determine the "pass windows" and the maximum elevation achievable.
3.  **Fast computation:** The look angle calculations need to be performed rapidly and continuously to keep the antenna pointed accurately.

Therefore, the dynamic nature of LEO satellite orbits necessitates much more complex and precise look angle calculations and tracking systems compared to the static pointing required for GEO satellites.

**Question 3:**
A ground station is at latitude $\phi = 45^\circ$ N and longitude $\lambda = 10^\circ$ E. A satellite is in an orbit such that at a particular instant, its position in the Earth-Centered Earth-Fixed (ECEF) Cartesian coordinate system is $(X_s, Y_s, Z_s) = (1000, 5000, 6000)$ km. Assume the Earth's radius $R_e = 6371$ km and the ground station is at sea level ($h=0$). Calculate the elevation and azimuth angles for this satellite.

**Solution 3:**
First, convert ground station latitude and longitude to radians:
$\phi_g = 45^\circ = \frac{\pi}{4}$ radians
$\lambda_g = 10^\circ = \frac{\pi}{18}$ radians

Calculate the ground station's ECEF coordinates (assuming spherical Earth, $R_e = 6371$ km):
$X_g = R_e \cos(\phi_g) \cos(\lambda_g) = 6371 \cos(\pi/4) \cos(\pi/18) \approx 6371 \times 0.7071 \times 0.9848 \approx 4434.9$ km
$Y_g = R_e \cos(\phi_g) \sin(\lambda_g) = 6371 \cos(\pi/4) \sin(\pi/18) \approx 6371 \times 0.7071 \times 0.1736 \approx 783.7$ km
$Z_g = R_e \sin(\phi_g) = 6371 \sin(\pi/4) \approx 6371 \times 0.7071 \approx 4505.1$ km

Satellite ECEF coordinates are given:
$X_s = 1000$ km
$Y_s = 5000$ km
$Z_s = 6000$ km

Calculate the vector from the ground station to the satellite in ECEF:
$d_x = X_s - X_g = 1000 - 4434.9 = -3434.9$ km
$d_y = Y_s - Y_g = 5000 - 783.7 = 4216.3$ km
$d_z = Z_s - Z_g = 6000 - 4505.1 = 1494.9$ km

Now, transform these components into the local East-North-Up (ENU) coordinate system at the ground station.
$d_{east} = -d_x \sin(\lambda_g) + d_y \cos(\lambda_g)$
$d_{east} = -(-3434.9) \sin(\pi/18) + (4216.3) \cos(\pi/18)$
$d_{east} \approx 3434.9 \times 0.1736 + 4216.3 \times 0.9848 \approx 596.5 + 4151.4 = 4747.9$ km

$d_{north} = -d_x \cos(\phi_g) \sin(\lambda_g) - d_y \sin(\phi_g) \cos(\lambda_g) + d_z \cos(\phi_g)$
$d_{north} = -(-3434.9) \cos(\pi/4) \sin(\pi/18) - (4216.3) \sin(\pi/4) \cos(\pi/18) + (1494.9) \cos(\pi/4)$
$d_{north} \approx 3434.9 \times 0.7071 \times 0.1736 - 4216.3 \times 0.7071 \times 0.9848 + 1494.9 \times 0.7071$
$d_{north} \approx 422.0 - 2930.6 + 1057.4 = -1451.2$ km

$d_{up} = d_x \sin(\phi_g) \cos(\lambda_g) + d_y \sin(\phi_g) \sin(\lambda_g) + d_z \cos(\phi_g)$
$d_{up} = (-3434.9) \sin(\pi/4) \cos(\pi/18) + (4216.3) \sin(\pi/4) \sin(\pi/18) + (1494.9) \cos(\pi/4)$
$d_{up} \approx -3434.9 \times 0.7071 \times 0.9848 + 4216.3 \times 0.7071 \times 0.1736 + 1494.9 \times 0.7071$
$d_{up} \approx -2382.3 + 518.4 + 1057.4 = -806.5$ km

Calculate Elevation Angle (E):
$E = \arctan \left( \frac{d_{up}}{\sqrt{d_{east}^2 + d_{north}^2}} \right)$
$E = \arctan \left( \frac{-806.5}{\sqrt{(4747.9)^2 + (-1451.2)^2}} \right)$
$E = \arctan \left( \frac{-806.5}{\sqrt{22542600 + 2106000}} \right)$
$E = \arctan \left( \frac{-806.5}{\sqrt{24648600}} \right)$
$E = \arctan \left( \frac{-806.5}{4964.7} \right) \approx \arctan(-0.1624)$
$E \approx -9.22^\circ$

Calculate Azimuth Angle (A):
$A = \arctan2(d_{east}, d_{north})$
$A = \arctan2(4747.9, -1451.2)$
Since $d_{east} > 0$ and $d_{north} < 0$, the angle is in the second quadrant.
$A = \arctan \left( \frac{4747.9}{-1451.2} \right)$ (using a calculator that handles quadrants or adjusting manually)
$A \approx \arctan(-3.271)$
$A \approx -72.85^\circ$

To adjust for quadrant: The direct arctan gives -72.85 degrees. For the second quadrant (East is positive, North is negative), the correct angle is $180^\circ + (-72.85^\circ) = 107.15^\circ$.

**Result:**
Elevation Angle ($E$) $\approx -9.22^\circ$
Azimuth Angle ($A$) $\approx 107.15^\circ$ (measured clockwise from North)

**Interpretation:** The negative elevation angle means the satellite is currently below the horizon for this ground station. The azimuth angle indicates the direction relative to North if it were above the horizon.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. References

*   **Satellite Communications by Timothy Pratt, Jeremy Allnutt (Wiley, 3rd Edition, 2021):** Primarily Chapters 1 and 2 for orbital mechanics, coordinate systems, and look angle calculations.
*   **Introduction to Radar Systems by Merrill I. Skolnik (Tata McGraw-Hill, 2nd Edition, 2017):** While focused on radar, the principles of tracking and coordinate transformations for target positioning have parallels. Skolnik's book can provide a broader systems perspective.
*   **Digital Satellite Communications by Tri, T.Ha (McGraw-Hill Education, 2nd Edition, 2017):** Offers additional insights into the practical aspects of satellite communication systems.
*   **Satellite Communications Systems Engineering by Pritchard (Pearson Education, 2nd Edition, 2006):** Provides engineering-level details relevant to system design, including antenna pointing.
*   **Radar: Principles, Technology, Applications by Byron Edde (Pearson, 1st Edition, 2004):** Similar to Skolnik, offers radar system context.
*   **Understanding Radar Systems by Simon Kinsley and Shaun Quegan (John Wiley & Sons, 1st Edition 1999):** Further reading on radar principles, which may indirectly inform understanding of tracking concepts.