---
title: "Computation of solar radiation on different surfaces-solar path diagram-shadow-throw concept and design of shading devices"
subject: "ARCHITECTURAL ENGINEERING"
module: "Module 3: Thermal comfort: Factors affecting thermal comfort"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810bc8"
status: "completed"
scrapedAt: "2026-05-20T18:43:02.632Z"
---
# ARCHITECTURAL ENGINEERING

## Module 3: Thermal Comfort - Factors Affecting Thermal Comfort

### Topic: Computation of Solar Radiation on Different Surfaces - Solar Path Diagram - Shadow-Throw Concept and Design of Shading Devices

---

### 1. Computation of Solar Radiation on Different Surfaces

**Key Concepts:**

*   **Solar Radiation:** The energy radiated from the sun, primarily in the form of electromagnetic waves. It's a crucial factor in the thermal performance of buildings, contributing to heating and cooling loads.
*   **Insolation:** The amount of solar radiation received per unit area on a surface.
*   **Incident Solar Radiation:** The solar radiation that strikes a surface. This can be direct, diffuse, or reflected.
*   **Surface Orientation:** The angle and direction a surface (wall, roof, window) faces relative to the sun's path. This significantly influences the amount of solar radiation it receives.
*   **Time of Day and Year:** The sun's position in the sky changes continuously throughout the day and year due to Earth's rotation and revolution.

**Factors Affecting Solar Radiation on Surfaces:**

*   **Latitude:** Determines the general angle of the sun in the sky and the length of daylight hours.
*   **Time of Day:** Affects the altitude (angle above the horizon) and azimuth (horizontal angle from north) of the sun.
*   **Time of Year (Season):** Influences the sun's altitude and azimuth due to the tilt of the Earth's axis.
*   **Surface Orientation:**
    *   **Azimuth Angle:** The horizontal angle between the surface's normal vector and the sun's azimuth.
    *   **Altitude Angle:** The angle between the surface's normal vector and the sun's altitude.
*   **Atmospheric Conditions:** Clouds, haze, and dust can reduce the amount of solar radiation reaching the surface.
*   **Reflected Radiation:** Solar radiation reflected from surrounding surfaces (ground, adjacent buildings, vegetation).

**Methods for Computation (Conceptual):**

While detailed computational methods can be complex and often involve specialized software, understanding the principles is key:

*   **Direct Solar Radiation:** Calculated based on the solar altitude and azimuth, and the surface's orientation relative to these angles. The amount of direct radiation is proportional to the cosine of the angle between the sun's rays and the surface's normal vector.
    *   *Formulaic Representation (Conceptual):* $I_{direct} \propto \cos(\theta)$, where $\theta$ is the angle of incidence.
*   **Diffuse Solar Radiation:** Radiation scattered by the atmosphere. It's generally more uniform and less dependent on surface orientation, though it can be affected by surrounding obstructions.
*   **Reflected Solar Radiation:** Depends on the albedo (reflectivity) of surrounding surfaces and their geometry relative to the surface in question.

**Example:**

*   A south-facing wall in the Northern Hemisphere will receive more direct solar radiation during winter (when the sun is lower) than a north-facing wall. In summer, east and west-facing walls will receive significant direct radiation in the morning and afternoon, respectively, leading to potential overheating.

---

### 2. Solar Path Diagram (Solar Chart)

**Key Concepts:**

*   **Solar Path Diagram:** A graphical representation of the sun's movement across the sky for a specific location and date. It's a crucial tool for visualizing solar angles and predicting sun exposure.
*   **Location Specific:** Each solar path diagram is specific to a particular latitude.
*   **Date Specific:** Diagrams can be generated for specific dates or for average conditions across seasons.

**Components of a Solar Path Diagram:**

*   **Horizon Circle:** Represents the observer's horizon.
*   **Zenith:** The point directly overhead.
*   **Altitude Angle (Solar Altitude, $\alpha$):** The angle of the sun above the horizon. Represented by concentric arcs on the diagram, ranging from 0° at the horizon to 90° at the zenith.
*   **Azimuth Angle (Solar Azimuth, $\gamma$):** The horizontal angle of the sun, measured from true north (0°), clockwise through east (90°), south (180°), west (270°), and back to north (360°). Represented by radial lines from the center.
*   **Sun's Path:** A curve on the diagram showing the sun's position at different times of the day for a specific date.
*   **Noon Line:** The line pointing towards true south (in the Northern Hemisphere).
*   **Equinox Paths:** Paths for spring and autumn equinoxes (typically around March 21st and September 23rd), where the sun rises due east and sets due west.
*   **Solstice Paths:** Paths for summer solstice (longest day) and winter solstice (shortest day).

**How to Use a Solar Path Diagram:**

1.  **Identify Location:** Select the appropriate diagram for the building's latitude.
2.  **Determine Date and Time:** Locate the sun's position on the diagram for the desired date and time.
3.  **Determine Surface Orientation:** Draw a line from the center of the diagram perpendicular to the direction of the surface being analyzed (e.g., a line pointing east for an east-facing window).
4.  **Calculate Angle of Incidence:** The angle between the sun's position and the surface's normal vector can be determined, which helps in calculating incident solar radiation.
5.  **Visualize Sun Exposure:** Understand when and how much direct sunlight a particular surface will receive.

**Example:**

*   On a summer day in the Northern Hemisphere, the sun's path will be high in the sky (high altitude) and will arc from the northeast, through the south, to the northwest. On a winter day, the sun's path will be lower in the sky (lower altitude) and will arc from the southeast, through the south, to the southwest.

---

### 3. Shadow-Throw Concept

**Key Concepts:**

*   **Shadow:** An area where direct sunlight is blocked by an object.
*   **Shadow-Throw:** The projection of a shadow cast by an object onto a surface. Understanding shadow-throw is crucial for designing shading devices and predicting when and where shadows will occur.
*   **Object:** The element casting the shadow (e.g., a building, a wall, a shading device).
*   **Surface:** The surface onto which the shadow is projected (e.g., ground, another wall, a window).
*   **Solar Position:** The sun's altitude and azimuth are the primary determinants of shadow length and direction.
*   **Object Height and Geometry:** The dimensions and shape of the object casting the shadow influence the size and shape of the shadow.

**Factors Affecting Shadow-Throw:**

*   **Sun's Altitude:** Higher sun angles result in shorter shadows; lower sun angles result in longer shadows.
*   **Sun's Azimuth:** The direction of the shadow is opposite to the sun's azimuth.
*   **Height of the Obstruction:** Taller objects cast longer shadows.
*   **Distance from the Object:** The distance between the object and the surface receiving the shadow.
*   **Surface Inclination:** The angle of the surface receiving the shadow can affect the perceived length and shape of the shadow.

**Methods for Analysis:**

*   **Graphical Methods (using Solar Path Diagrams):**
    *   For a specific sun position (altitude and azimuth), project lines from the top of the object to the surface.
    *   The intersection of these lines with the surface defines the shadow edge.
*   **Mathematical Calculations:** Using trigonometry and the sun's coordinates, the coordinates of the shadow can be calculated.
*   **Software Tools:** Building Information Modeling (BIM) software and specialized solar analysis tools can accurately simulate shadow patterns throughout the year.

**Example:**

*   A vertical pole will cast a shadow whose length is related to the tangent of the sun's altitude angle. The direction of the shadow will be opposite to the sun's direction. In the afternoon (sun in the west), the shadow will be cast towards the east.

---

### 4. Design of Shading Devices

**Key Concepts:**

*   **Shading Device:** An architectural element designed to selectively block direct solar radiation while potentially allowing diffuse light and views.
*   **Purpose of Shading:** To reduce solar heat gain, prevent glare, improve visual comfort, and manage daylighting.
*   **Types of Shading Devices:**
    *   **External Shading:** Devices located outside the building envelope (most effective).
        *   **Overhangs/Canopies:** Horizontal projections above windows. Effective for blocking high-angle summer sun while allowing low-angle winter sun.
        *   **Fins/Vertical Louvers:** Vertical elements alongside windows. Effective for blocking low-altitude morning and afternoon sun.
        *   **Brise-soleil:** An architectural feature, often a series of horizontal or vertical slats, used to reduce heat gain by deflecting sunlight.
        *   **Pergolas:** Open roof structures with cross rafters, often supporting climbing plants, providing dappled shade.
        *   **Awnings:** Fabric or metal structures extending from the building above windows or doors.
        *   **Screens/Trellises:** Open frameworks that can support vegetation or act as a decorative element providing partial shade.
    *   **Internal Shading:** Devices located inside the building envelope. Less effective as heat has already entered the building.
        *   **Blinds (Venetian, Roller):** Adjustable slats or fabric rolls to control light and heat.
        *   **Curtains/Drapes:** Fabric coverings that can be opened or closed.
        *   **Shutters:** Hinged panels that can cover windows.
*   **Design Considerations:**
    *   **Climate:** Shading needs vary significantly with climate. Tropical climates require more extensive shading than temperate or cold climates.
    *   **Window Orientation:** Different orientations require different shading strategies.
    *   **Sun Path:** The device must be designed to block sun when it's undesirable (high summer sun) and allow it when it's beneficial (low winter sun for passive heating).
    *   **Occupant Needs:** Balancing solar gain and daylighting with glare control and views.
    *   **Aesthetics:** Shading devices are integral architectural elements and must be visually appealing.
    *   **Materiality:** Durability, reflectivity, and maintenance.
    *   **Cost-Effectiveness:** Balancing performance with budget.

**Designing an Effective Shading Device (Example: Overhang for a South-Facing Window in a Temperate Climate):**

1.  **Determine the critical sun angles:**
    *   **Summer Sun (High Altitude):** You want to block this to prevent overheating.
    *   **Winter Sun (Low Altitude):** You want to allow this for passive heating.
2.  **Use the Solar Path Diagram:**
    *   Identify the sun's position during the summer when it's highest in the sky.
    *   Identify the sun's position during the winter when it's lowest in the sky.
3.  **Calculate Overhang Depth:**
    *   The overhang depth should be calculated such that when the sun is at its critical summer altitude, the overhang's edge blocks the direct sunlight from entering the window.
    *   Consider the sun's azimuth at these times to ensure it blocks the sun effectively throughout the summer day.
    *   The overhang should be designed to allow the lower winter sun to penetrate the window.
    *   *Simplified Calculation Concept:* The required overhang depth can be related to the window height and the critical solar altitude angle using trigonometry.
        *   $\text{Overhang Depth} \approx \text{Window Height} \times \cot(\alpha_{summer})$ (where $\alpha_{summer}$ is the critical summer solar altitude)
4.  **Consider Window Width:** For wider windows, horizontal fins or fins at intervals might be more effective than a single large overhang.
5.  **Evaluate Glare and Views:** Ensure the shading device doesn't cause excessive glare or obstruct desirable views.

**Important Points to Remember:**

*   **External shading is generally more effective than internal shading.**
*   **Overhangs are best for south-facing windows (Northern Hemisphere) to block high summer sun.**
*   **Vertical fins are best for east and west-facing windows to block low-angle morning and afternoon sun.**
*   **A well-designed shading strategy considers the entire year, not just peak summer conditions.**
*   **Shading devices can be integral to the building's aesthetic.**
*   **The goal is to control direct solar gain, not necessarily all solar radiation.**

---

### Practice Questions and Exercises

**Question 1:**

What are the three main components of solar radiation that can strike a building surface?

**Answer:** Direct solar radiation, diffuse solar radiation, and reflected solar radiation.

**Question 2:**

Explain why a south-facing wall (in the Northern Hemisphere) receives more solar radiation in winter than in summer, even though the sun is higher in the sky in summer.

**Answer:** In winter, the sun's path is lower in the sky, and its rays strike a south-facing wall at a more perpendicular angle, resulting in longer exposure and more incident radiation over the day. In summer, the sun is higher, and its rays hit the south-facing wall at a more oblique angle, leading to shorter exposure periods and reduced direct solar gain on that specific vertical surface. Horizontal surfaces like roofs will receive more intense solar radiation in summer.

**Question 3:**

Describe the purpose of a solar path diagram in architectural design.

**Answer:** A solar path diagram is a graphical tool that visualizes the sun's movement across the sky for a specific location. It helps architects understand when and at what angles sunlight will strike different surfaces of a building, which is crucial for designing effective shading devices, optimizing window placement, and managing solar heat gain and daylighting.

**Question 4:**

Differentiate between external and internal shading devices and explain which is generally more effective. Provide one example of each.

**Answer:**
*   **External shading devices** are located outside the building envelope and block solar radiation before it reaches the window or wall. They are generally **more effective** because they prevent the heat from entering the building in the first place.
    *   *Example:* An overhang above a window.
*   **Internal shading devices** are located inside the building envelope and absorb or reflect solar radiation after it has entered the building through the glazing. They are less effective as heat has already penetrated.
    *   *Example:* Venetian blinds.

**Question 5 (Exercise):**

Imagine you are designing an overhang for a west-facing window in a city with a hot climate.
a) What time of day and year would be most critical for this shading?
b) What principle of solar path diagram analysis would you use to determine the overhang's depth?
c) What would be the general direction of the sun when it's most critical for west-facing shading in the afternoon?

**Answer:**
a) The most critical time would be the **late afternoon** in the **summer months** when the sun is low in the west and can cause significant overheating.
b) You would use the solar path diagram to identify the **solar altitude and azimuth** during the critical late afternoon summer period. The overhang's depth would be calculated to block the sun at these specific angles, ensuring that the lower sun rays are deflected away from the window while allowing for sufficient daylight and views when the sun is not at its peak intensity.
c) The sun's direction would be from the **west**, generally between southwest and northwest depending on the exact time of day and season.

---

### Important Points to Remember (Summary)

*   **Solar radiation is a primary driver of building heat gain and loss.**
*   **Surface orientation, time of day, and time of year are critical factors in determining solar radiation.**
*   **Solar path diagrams are essential for visualizing sun movement and designing effective shading.**
*   **Shadow-throw analysis helps predict where and when shadows will occur.**
*   **External shading devices are significantly more effective than internal ones.**
*   **Shading strategies must be tailored to the specific climate and building orientation.**
*   **The goal of shading is to control direct solar gain and manage glare, not necessarily to eliminate all light.**
*   **Consider the balance between solar gain, daylighting, and views when designing shading devices.**
