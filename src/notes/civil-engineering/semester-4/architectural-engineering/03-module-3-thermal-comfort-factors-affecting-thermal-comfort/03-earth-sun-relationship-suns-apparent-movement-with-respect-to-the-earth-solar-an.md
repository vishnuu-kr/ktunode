---
title: "Earth-Sun relationship: Sun’s apparent movement with respect to the earth. Solar angles"
subject: "ARCHITECTURAL ENGINEERING"
module: "Module 3: Thermal comfort: Factors affecting thermal comfort"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810bc7"
status: "completed"
scrapedAt: "2026-05-20T18:43:01.938Z"
---
# ARCHITECTURAL ENGINEERING: Module 3 - Thermal Comfort

## Topic: Earth-Sun Relationship: Sun's Apparent Movement and Solar Angles

This module focuses on understanding the fundamental relationship between the Earth and the Sun, and how this governs the Sun's apparent movement across the sky. This knowledge is crucial for architectural design to optimize passive solar heating, minimize unwanted solar heat gain, and achieve comfortable indoor environments.

---

### 1. Learning Outcomes

Upon successful completion of this topic, you should be able to:

*   **Understand the Earth's axial tilt and its role in seasonal variations and the Sun's apparent path.**
*   **Define and explain the key solar angles: altitude, azimuth, hour angle, and declination.**
*   **Calculate or estimate the Sun's position in the sky at any given time and location.**
*   **Relate the Sun's position to solar radiation intensity and building orientation.**
*   **Appreciate how understanding the Earth-Sun relationship informs passive solar design strategies.**

---

### 2. Key Concepts and Definitions

#### 2.1 The Earth-Sun Relationship

The apparent movement of the Sun across the sky is a result of two primary motions of the Earth:

*   **Earth's Rotation:** The Earth spins on its axis once every 24 hours. This rotation causes the daily cycle of sunrise, solar noon, and sunset, making the Sun appear to rise in the east and set in the west.
*   **Earth's Revolution around the Sun:** The Earth orbits the Sun once every year. This revolution, combined with the Earth's axial tilt, is responsible for the seasons and variations in the Sun's altitude and path throughout the year.

#### 2.2 Earth's Axial Tilt

*   **Definition:** The Earth's rotational axis is tilted at approximately **23.5 degrees** relative to its orbital plane around the Sun (the ecliptic plane).
*   **Significance:** This tilt is the primary reason for the existence of seasons.
    *   **Summer Solstice (around June 20/21 in the Northern Hemisphere):** The Northern Hemisphere is tilted towards the Sun, resulting in longer days and higher solar altitudes.
    *   **Winter Solstice (around December 21/22 in the Northern Hemisphere):** The Northern Hemisphere is tilted away from the Sun, resulting in shorter days and lower solar altitudes.
    *   **Equinoxes (around March 20/21 and September 22/23):** The Earth's axis is neither tilted towards nor away from the Sun, resulting in roughly equal day and night lengths and intermediate solar altitudes.

#### 2.3 Apparent Movement of the Sun

*   **Daily Movement:** The Sun appears to move in an arc across the sky from east to west. The height and path of this arc vary with the season and latitude.
*   **Seasonal Movement:** The Sun's highest point in the sky (solar noon altitude) changes throughout the year. It is highest in summer and lowest in winter. The position of sunrise and sunset also shifts:
    *   **Summer:** Sun rises north of east and sets north of west.
    *   **Winter:** Sun rises south of east and sets south of west.
    *   **Equinoxes:** Sun rises due east and sets due west.

#### 2.4 Solar Angles

These angles are fundamental for calculating the intensity and direction of solar radiation incident on a surface.

**Important Note:** For consistency, we'll consider angles relative to the observer's location on Earth.

##### 2.4.1 Declination Angle ($\delta$)

*   **Definition:** The angle between the Sun's rays and the plane of the Earth's equator. It represents the Sun's position north or south of the equator.
*   **Range:** Varies from approximately **+23.5° on the Summer Solstice** (Northern Hemisphere) to **-23.5° on the Winter Solstice**. It is 0° at the equinoxes.
*   **Significance:** Crucial for determining the Sun's height in the sky and its position relative to the east-west line at different times of the year.
*   **Approximate Calculation:** A simplified approximation for the declination angle on a given day of the year (n) is:
    $\delta \approx 23.45^\circ \sin\left(\frac{360^\circ}{365}(n - 81)\right)$
    *   *n* is the day number of the year (January 1st = 1).

##### 2.4.2 Altitude Angle ($\alpha$ or $A$)

*   **Definition:** The angle between the Sun's rays and the horizontal plane (the horizon). It represents how high the Sun is in the sky.
*   **Range:** From 0° (at sunrise/sunset) to 90° (directly overhead).
*   **Significance:** Determines the intensity of solar radiation on a horizontal surface; higher altitude means more direct and intense radiation.
*   **Factors Affecting:** Latitude, time of day, and time of year.

##### 2.4.3 Azimuth Angle ($\gamma$ or $Az$)

*   **Definition:** The angle between the Sun's rays projected onto the horizontal plane and the true south direction. Conventionally, south is 0°, east is positive, and west is negative.
*   **Range:** Approximately $\pm$ 90° at sunrise and sunset, and 0° at solar noon.
*   **Significance:** Indicates the direction of the Sun in the horizontal plane. Essential for understanding solar exposure on vertical surfaces.
*   **Convention Note:** Some sources use North as 0° and East as positive. Always check the convention used! In architectural engineering, **South = 0°, East = +90°, West = -90°** is common for the Northern Hemisphere.

##### 2.4.4 Hour Angle ($\omega$ or $H$)

*   **Definition:** The angle through which the Earth has rotated since solar noon. It measures the time of day relative to solar noon.
*   **Value:** 0° at solar noon, increases by 15° for every hour before or after solar noon (since the Earth rotates 360° in 24 hours, or 15° per hour).
*   **Range:** Approximately $\pm$ 180° from sunrise to sunset.
*   **Significance:** Directly related to the time of day and influences both altitude and azimuth angles.
    *   **Negative Hour Angle:** Before solar noon (morning).
    *   **Positive Hour Angle:** After solar noon (afternoon).

##### 2.4.5 Zenith Angle ($\theta_z$)

*   **Definition:** The angle between the Sun's rays and the vertical (zenith). It is the complement of the altitude angle.
*   **Relationship:** $\theta_z = 90^\circ - \alpha$
*   **Significance:** Directly relates to the angle of incidence of solar radiation on a surface. When $\theta_z = 0$, the Sun is directly overhead.

##### 2.4.6 Angle of Incidence ($\theta$)

*   **Definition:** The angle between the Sun's rays and the normal (perpendicular) to a surface. This is the most crucial angle for calculating solar heat gain on any surface.
*   **Significance:** Solar radiation intensity incident on a surface is proportional to the cosine of the angle of incidence. When $\theta = 0$, the radiation is perpendicular to the surface, and intensity is maximum. When $\theta = 90^\circ$, no direct radiation hits the surface.
*   **Calculation:** Requires knowing the orientation (tilt and azimuth) of the surface and the Sun's position (altitude and azimuth).

---

### 3. Calculating Solar Position (Simplified Approach)

The precise calculation of solar angles involves complex spherical trigonometry. However, understanding the concepts and using simplified formulas or online tools is sufficient for many architectural applications.

#### 3.1 Solar Noon

*   **Definition:** The time when the Sun is at its highest point in the sky for the day at a specific location. This is when the Sun is exactly due south (in the Northern Hemisphere).
*   **Local Apparent Solar Time:** True solar time, not clock time. Clock time can differ due to time zones and the Equation of Time (a correction factor for the Earth's orbital eccentricity and axial tilt).
*   **Importance:** Solar noon is the reference point (Hour Angle = 0°) for calculating other solar angles throughout the day.

#### 3.2 Solar Altitude ($\alpha$) and Azimuth ($\gamma$)

These angles can be calculated using the latitude ($\phi$), declination ($\delta$), and hour angle ($\omega$). The formulas are:

**Solar Altitude ($\alpha$):**
$\sin(\alpha) = \sin(\phi)\sin(\delta) + \cos(\phi)\cos(\delta)\cos(\omega)$

**Solar Azimuth ($\gamma$):**
$\cos(\gamma) = \frac{\sin(\omega)\cos(\delta)}{\cos(\alpha)}$
*(Note: This formula gives the cosine. Determining the correct quadrant for the azimuth angle requires considering the sign of $\sin(\omega)$ and the position of the Sun relative to south.)*

A more robust calculation for azimuth is often:
$\sin(\gamma) = \frac{\cos(\delta)\sin(\omega)}{\cos(\alpha)}$

**Key for Azimuth Sign Convention (Northern Hemisphere, South=0°, East=+90°, West=-90°):**
*   If $\omega < 0$ (morning), $\gamma$ is measured from South towards East (positive).
*   If $\omega > 0$ (afternoon), $\gamma$ is measured from South towards West (negative).

---

### 4. Examples

**Example 1: Sun's Position at Solar Noon on the Summer Solstice**

*   **Location:** New York City (Latitude $\phi \approx 40.7^\circ$ N)
*   **Date:** Summer Solstice (Declination $\delta \approx +23.5^\circ$)
*   **Time:** Solar Noon ($\omega = 0^\circ$)

**Calculation:**

*   **Solar Altitude ($\alpha$):**
    $\sin(\alpha) = \sin(40.7^\circ)\sin(23.5^\circ) + \cos(40.7^\circ)\cos(23.5^\circ)\cos(0^\circ)$
    $\sin(\alpha) = (0.652)(0.399) + (0.758)(0.917)(1)$
    $\sin(\alpha) = 0.260 + 0.695 = 0.955$
    $\alpha = \arcsin(0.955) \approx 72.7^\circ$

*   **Solar Azimuth ($\gamma$):**
    At solar noon ($\omega = 0^\circ$), $\cos(\omega) = 1$. The Sun is directly south.
    Therefore, $\gamma = 0^\circ$.

**Interpretation:** On the Summer Solstice in New York City, the Sun at solar noon is about 72.7° above the horizon, directly south. This is the highest the Sun will reach all year.

**Example 2: Sun's Position at 3 PM on the Autumnal Equinox**

*   **Location:** New York City (Latitude $\phi \approx 40.7^\circ$ N)
*   **Date:** Autumnal Equinox (Declination $\delta \approx 0^\circ$)
*   **Time:** 3 PM (Assume solar noon is at 12 PM for simplicity; 3 PM is 3 hours after noon. Hour angle $\omega = 3 \times 15^\circ = 45^\circ$)

**Calculation:**

*   **Solar Altitude ($\alpha$):**
    $\sin(\alpha) = \sin(40.7^\circ)\sin(0^\circ) + \cos(40.7^\circ)\cos(0^\circ)\cos(45^\circ)$
    $\sin(\alpha) = (0.652)(0) + (0.758)(1)(0.707)$
    $\sin(\alpha) = 0 + 0.536 = 0.536$
    $\alpha = \arcsin(0.536) \approx 32.4^\circ$

*   **Solar Azimuth ($\gamma$):**
    $\cos(\gamma) = \frac{\sin(45^\circ)\cos(0^\circ)}{\cos(32.4^\circ)}$
    $\cos(\gamma) = \frac{(0.707)(1)}{0.844} = 0.838$
    $\gamma = \arccos(0.838) \approx 33.1^\circ$

    *To determine the sign:* Since it's 3 PM (afternoon), the Sun is west of South. So, the azimuth is negative.
    $\gamma \approx -33.1^\circ$ (meaning 33.1° West of South).

**Interpretation:** At 3 PM on the Autumnal Equinox in New York City, the Sun is about 32.4° above the horizon and is located approximately 33.1° west of south.

---

### 5. Relationship to Passive Solar Design

Understanding these solar angles is fundamental for:

*   **Orientation of Buildings:** Aligning buildings with their long axis east-west maximizes south-facing wall area for passive solar heating in winter and allows for shading strategies in summer.
*   **Window Placement and Sizing:** South-facing windows are ideal for winter heat gain, while east and west-facing windows need careful consideration for overheating.
*   **Shading Devices:** Designing overhangs, fins, and louvers that effectively block high-angle summer sun while allowing low-angle winter sun to penetrate.
*   **Collector Orientation:** For active solar systems (solar water heaters, PV panels), knowing the Sun's path is crucial for optimal placement and tilt.
*   **Thermal Mass:** Positioning thermal mass to absorb solar radiation when the Sun is high and release heat when needed.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary reason for the existence of seasons on Earth?
a) Earth's rotation on its axis.
b) Earth's revolution around the Sun.
c) The Earth's axial tilt of 23.5 degrees.
d) The varying distance between the Earth and the Sun.

**Question 2:**
Define the solar altitude angle and explain its significance for solar radiation intensity on a horizontal surface.

**Question 3:**
If the Sun's declination angle is +23.5°, what season is it in the Northern Hemisphere, and what does this angle represent?

**Question 4:**
Calculate the Sun's altitude angle at solar noon in your city (or a hypothetical city, e.g., London, latitude $\phi \approx 51.5^\circ$ N) on the Winter Solstice ($\delta \approx -23.5^\circ$).

**Question 5:**
At solar noon on the equinox ($\delta = 0^\circ$), what is the solar altitude angle at the equator ($\phi = 0^\circ$)?

---

### 7. Answers to Practice Questions

**Answer 1:**
c) The Earth's axial tilt of 23.5 degrees.
*Explanation:* While revolution is necessary for the cycle, the *tilt* causes different hemispheres to receive more direct sunlight at different times of the year.

**Answer 2:**
The solar altitude angle is the angle between the Sun's rays and the horizontal plane. Its significance is that as the altitude angle increases (Sun gets higher in the sky), the solar radiation becomes more direct and intense on a horizontal surface, as less of it is diffused by the atmosphere and the angle of incidence is closer to 0°.

**Answer 3:**
If the Sun's declination angle is +23.5°, it is **Summer** in the Northern Hemisphere. This angle represents the Sun's position at its northernmost point relative to the celestial equator.

**Answer 4:**
*   Location: London (Latitude $\phi \approx 51.5^\circ$ N)
*   Date: Winter Solstice ($\delta \approx -23.5^\circ$)
*   Time: Solar Noon ($\omega = 0^\circ$)

*   **Solar Altitude ($\alpha$):**
    $\sin(\alpha) = \sin(51.5^\circ)\sin(-23.5^\circ) + \cos(51.5^\circ)\cos(-23.5^\circ)\cos(0^\circ)$
    $\sin(\alpha) = (0.783)(-0.399) + (0.622)(0.917)(1)$
    $\sin(\alpha) = -0.313 + 0.570 = 0.257$
    $\alpha = \arcsin(0.257) \approx 14.9^\circ$

    **Answer:** The Sun's altitude angle is approximately 14.9°.

**Answer 5:**
*   Location: Equator ($\phi = 0^\circ$)
*   Date: Equinox ($\delta = 0^\circ$)
*   Time: Solar Noon ($\omega = 0^\circ$)

*   **Solar Altitude ($\alpha$):**
    $\sin(\alpha) = \sin(0^\circ)\sin(0^\circ) + \cos(0^\circ)\cos(0^\circ)\cos(0^\circ)$
    $\sin(\alpha) = (0)(0) + (1)(1)(1)$
    $\sin(\alpha) = 1$
    $\alpha = \arcsin(1) = 90^\circ$

    **Answer:** At solar noon on the equinox, the Sun is directly overhead (90° altitude) at the equator.

---

### 8. Important Points to Remember

*   **Earth's Axial Tilt is Key:** The 23.5° tilt is the primary driver of seasons and variations in the Sun's path.
*   **Solar Noon is the Reference:** It's the highest point of the Sun and the zero point for the hour angle.
*   **Latitude and Declination Matter:** The Sun's altitude and azimuth depend on your location (latitude) and the time of year (declination).
*   **Hour Angle Dictates Time:** The hour angle directly relates to how far from solar noon you are.
*   **Altitude = Sun's Height:** High altitude means intense, direct sun.
*   **Azimuth = Sun's Direction:** Crucial for understanding exposure on walls.
*   **Angle of Incidence is King for Heat Gain:** Always aim to minimize this angle for unwanted heat and maximize it for desired solar heating.
*   **Passive Solar Design relies on this knowledge:** Use it to your advantage for comfortable and energy-efficient buildings.
*   **Tools are Available:** Online calculators and software can help determine precise solar positions for specific dates and locations.

---
This concludes the study notes for the Earth-Sun Relationship and Solar Angles. Mastering these concepts is a critical step in understanding and achieving effective thermal comfort in architectural design.
