---
title: "Map Projections: General principles of map projections – classification – cylindrical, conical, and zenithally projections – coordinate systems - UTM – choice of projections."
subject: "CARTOGRAPHY AND GIS"
module: "Module 1: Maps and Scale: Map "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810ab1"
status: "completed"
scrapedAt: "2026-05-20T18:43:11.577Z"
---
# CARTOGRAPHY AND GIS: Module 1 - Maps and Scale

## Topic: Map Projections

### 1. General Principles of Map Projections

**1.1. The Problem of Representing a Sphere on a Flat Surface:**

*   The Earth is an oblate spheroid (slightly flattened at the poles and bulging at the equator).
*   Maps are flat surfaces.
*   It's impossible to perfectly represent the curved surface of the Earth onto a flat plane without distortion.
*   **Map Projection:** A systematic method of transferring locations from the Earth's curved surface onto a flat map. This process inevitably introduces some form of **distortion**.

**1.2. Types of Distortion:**

Map projections aim to preserve certain properties while distorting others. The four main types of distortion are:

*   **Area (Equivalence):** Preserves the relative size of areas. If two areas on the Earth have the same size, they will have the same size on an equivalent projection.
    *   *Example:* Maps showing population density or land use.
*   **Shape (Conformality):** Preserves the shape of features, especially small ones. Angles and directions are preserved locally. Lines of latitude and longitude intersect at right angles on conformal maps, just as they do on the globe.
    *   *Example:* Navigational charts, topographic maps where precise shape and direction are critical.
*   **Distance (Equidistance):** Preserves distances from one or two central points to all other points on the map, or along specific lines.
    *   *Example:* Maps showing travel times from a capital city, or maps used for airline routes.
*   **Direction (Azimuthality):** Preserves true direction from a central point to all other points on the map.
    *   *Example:* Maps used for radio transmission planning or flight paths from a specific location.

**1.3. Projection Surfaces:**

The geometric surface used to "wrap" the Earth to create a projection influences the resulting distortion and the characteristics of the projection.

*   **Cylindrical:** Imagine wrapping a cylinder around the Earth.
*   **Conical:** Imagine placing a cone over the Earth.
*   **Zenithal (Azimuthal):** Imagine placing a flat plane tangent to the Earth at a single point.

**1.4. Tangent vs. Secant Lines:**

*   **Tangent Line:** The projection surface touches the Earth's surface at one point or along one line. There is minimal distortion along this line.
*   **Secant Line:** The projection surface intersects the Earth's surface along two lines. Distortion is minimized between these two lines.

**1.5. Classification of Map Projections:**

Map projections can be classified based on:

*   **The projection surface:** Cylindrical, Conical, Zenithal.
*   **The properties preserved:** Conformal, Equivalent, Equidistant, Azimuthal.
*   **The method of projection:** Orthographic, Stereographic, Gnomonic (geometric projections based on light source position).

### 2. Classification of Projections: Cylindrical, Conical, and Zenithal Projections

#### 2.1. Cylindrical Projections

*   **Principle:** A cylinder is conceptually wrapped around the Earth. The projection is formed by projecting the Earth's surface onto this cylinder. The cylinder is then "unrolled" into a flat map.
*   **Characteristics:**
    *   Lines of latitude are parallel and equally spaced.
    *   Lines of longitude are parallel and equally spaced.
    *   Often distort area and distance, especially near the poles.
    *   Good for displaying the entire world.
*   **Key Examples:**

    *   **Mercator Projection (Conformal Cylindrical):**
        *   **Principle:** Developed by Gerardus Mercator in 1569. It's a conformal projection where lines of constant compass bearing (rhumb lines) are straight lines. Meridians are equally spaced vertical lines, and parallels of latitude are horizontal lines, spaced further apart as you move from the equator towards the poles.
        *   **Distortion:** Preserves shape and direction, but severely distorts area, especially at high latitudes (e.g., Greenland appears larger than Africa).
        *   **Uses:** Historically used for navigation, now for web maps (Google Maps, OpenStreetMap) due to its directional accuracy.
        *   **Highlight:** Despite its area distortion, its conformality makes it ideal for navigation.

    *   **Equirectangular Projection (Cylindrical):**
        *   **Principle:** Also known as Plate Carrée. Meridians are equally spaced vertical lines, and parallels are equally spaced horizontal lines.
        *   **Distortion:** Preserves area along the equator but distorts shape and area significantly towards the poles. Distances are true only along the equator and the central meridian.
        *   **Uses:** Simple world maps, historical maps.
        *   **Highlight:** Easy to understand and construct, but high distortion.

    *   **Gall-Peters Projection (Cylindrical Equal-Area):**
        *   **Principle:** An equal-area cylindrical projection designed to address the area distortion of Mercator. It maintains the correct proportions of areas but distorts shapes and angles.
        *   **Distortion:** Preserves area but distorts shape and direction.
        *   **Uses:** Showing global distributions and spatial data where accurate area representation is crucial.
        *   **Highlight:** Aims to be more geographically accurate in terms of area representation compared to Mercator.

#### 2.2. Conical Projections

*   **Principle:** A cone is conceptually placed over the Earth, touching it along one or two lines of latitude (standard parallels). The projection is made by projecting the Earth's surface onto this cone. The cone is then cut along one side and flattened into a map.
*   **Characteristics:**
    *   Lines of latitude are curved (arcs of circles).
    *   Lines of longitude are straight lines converging at a point (the apex of the cone).
    *   Distortion is minimized along the standard parallels.
    *   Good for mid-latitude regions with an east-west extent.
*   **Key Examples:**

    *   **Albers Equal-Area Conic:**
        *   **Principle:** Uses two standard parallels. It preserves area.
        *   **Distortion:** Distorts shape and distance away from the standard parallels.
        *   **Uses:** Widely used for mapping countries or continents in mid-latitudes, especially in the United States, for statistical mapping.
        *   **Highlight:** Excellent for preserving area in mid-latitude regions.

    *   **Equidistant Conic:**
        *   **Principle:** Preserves distances along meridians and from the apex of the cone.
        *   **Distortion:** Distorts area and shape.
        *   **Uses:** Regional maps where accurate distance representation is important.

    *   **Lambert Conformal Conic:**
        *   **Principle:** Uses two standard parallels and preserves shape and angles locally.
        *   **Distortion:** Distorts area and distance away from the standard parallels.
        *   **Uses:** Very popular for sectional aeronautical charts, topographic maps, and regional maps in the mid-latitudes.
        *   **Highlight:** Good balance of shape and direction preservation for regional mapping.

#### 2.3. Zenithal (Azimuthal) Projections

*   **Principle:** A flat plane is conceptually placed tangent to the Earth at a single point (the point of tangency). The projection is made by projecting the Earth's surface onto this plane.
*   **Characteristics:**
    *   Preserves directions (azimuths) from the center point.
    *   Distortion of shape, area, and distance increases with distance from the center.
    *   Distortion is minimized at the point of tangency.
    *   Excellent for polar regions or specific central locations.
*   **Key Examples:**

    *   **Azimuthal Equidistant:**
        *   **Principle:** Preserves distances and directions from the center point.
        *   **Distortion:** Distorts area and shape significantly away from the center.
        *   **Uses:** Maps showing great circle routes from a central point, like airline routes from a hub, or maps of the Arctic or Antarctic.
        *   **Highlight:** Accurate distances and directions from a single point.

    *   **Stereographic (Conformal Azimuthal):**
        *   **Principle:** Preserves shape and angles locally. Projected from a point opposite the tangent point on the Earth's surface.
        *   **Distortion:** Distorts area and distance away from the center.
        *   **Uses:** Polar maps, aeronautical charts, and maps of continents where direction from a central point is important.
        *   **Highlight:** Maintains conformality, good for showing large areas around a central point.

    *   **Orthographic (Perspective Azimuthal):**
        *   **Principle:** Projects the Earth's surface as seen from a distant point in space, perpendicular to the plane.
        *   **Distortion:** Distorts area and shape significantly, especially towards the edges, giving a globe-like appearance.
        *   **Uses:** Pictorial representations of the Earth, showing hemispheres.
        *   **Highlight:** Gives a "view from space" perspective.

    *   **Gnomonic (Great Circle):**
        *   **Principle:** Projects the Earth's surface from the center of the Earth onto a tangent plane. All great circles (shortest distance between two points on a sphere) are projected as straight lines.
        *   **Distortion:** Distorts shape, area, and distance severely away from the tangent point.
        *   **Uses:** Mapping great circle routes, seismic plotting.
        *   **Highlight:** Straight lines on the map represent the shortest paths (great circles) on Earth.

### 3. Coordinate Systems

**3.1. Geographic Coordinate System (GCS):**

*   **Definition:** A system that uses latitude and longitude to define locations on the Earth's surface.
*   **Components:**
    *   **Latitude:** The angular distance, north or south of the equator. Measured in degrees, minutes, and seconds (0° at the equator to 90° at the poles). Lines of latitude are called **parallels**.
    *   **Longitude:** The angular distance, east or west of the prime meridian. Measured in degrees, minutes, and seconds (0° at the Prime Meridian to 180° east and west). Lines of longitude are called **meridians**.
    *   **Datum:** A reference system that defines the size and shape of the Earth and the origin and orientation of the coordinate system. Common datums include WGS84 (World Geodetic System 1984) and NAD83 (North American Datum 1983).
    *   **Prime Meridian:** The meridian designated as 0° longitude, which passes through Greenwich, London.
*   **Nature:** It's a spherical coordinate system, meaning locations are defined by angles.
*   **Use:** Used for global referencing but not ideal for precise distance or area calculations on a flat map due to the Earth's curvature.

**3.2. Projected Coordinate Systems (PCS):**

*   **Definition:** A system that transforms geographic coordinates (latitude and longitude) into planar (x, y) coordinates on a flat map. This transformation is achieved through a map projection.
*   **Components:**
    *   **Origin:** The intersection of the central meridian and the standard parallel.
    *   **False Easting & False Northing:** Values added to the x and y coordinates to ensure all coordinates are positive.
    *   **Units:** Typically meters or feet.
*   **Nature:** It's a Cartesian coordinate system (x, y) on a flat plane.
*   **Use:** Essential for accurate measurements of distance, area, and direction on maps. Different projections are used to create different PCS, each with specific distortion characteristics.

### 4. Universal Transverse Mercator (UTM)

*   **Definition:** A widely used projected coordinate system that divides the Earth into 60 zones, each 6 degrees of longitude wide.
*   **Principle:** It's based on the Transverse Mercator projection, which is a cylindrical projection that is rotated so the cylinder is tangent to the Earth along a meridian (the central meridian of a zone).
*   **Zones:**
    *   Zones are numbered 1 to 60 from east to west, starting from the International Date Line.
    *   Each zone has a **central meridian**.
*   **Coordinates within a Zone:**
    *   **Easting:** The distance in meters east of the central meridian. To avoid negative values, a "false easting" of 500,000 meters is added to the central meridian.
    *   **Northing:** The distance in meters north or south of the **equator**.
        *   **Northern Hemisphere:** Northing is measured from the equator (0 meters).
        *   **Southern Hemisphere:** Northing is measured from the equator, but a "false northing" of 10,000,000 meters is added to avoid negative values. This means the equator is at 0° N and 10,000,000 m S.
*   **Characteristics:**
    *   **Conformal:** Preserves shape and angles within each zone, making it excellent for navigation and precise measurements.
    *   **Minimized Distortion:** Distortion is minimal within each 6-degree zone, but it increases towards the zone boundaries.
*   **Uses:** Military, surveying, mapping, GIS applications, especially for areas that extend across several degrees of longitude.
*   **Highlight:** Highly accurate for local and regional mapping within its designated zones.

### 5. Choice of Projections

The selection of an appropriate map projection depends on several factors:

*   **Purpose of the Map:**
    *   **Navigation:** Conformal projections (e.g., Mercator).
    *   **Area Comparison/Statistical Mapping:** Equal-area projections (e.g., Albers Equal-Area Conic, Gall-Peters).
    *   **Distance Measurement:** Equidistant projections (e.g., Azimuthal Equidistant).
    *   **Directional Information:** Azimuthal projections (e.g., Azimuthal Equidistant).
    *   **General World Maps:** Projections that balance various distortions or are visually appealing (e.g., Robinson, Mollweide).

*   **Geographic Extent of the Area Being Mapped:**
    *   **Global:** Cylindrical projections (Mercator, Equirectangular).
    *   **Mid-latitudes (East-West Extent):** Conical projections (Lambert Conformal Conic, Albers Equal-Area Conic).
    *   **Polar Regions:** Zenithal projections (Azimuthal Equidistant, Stereographic).
    *   **Specific Point of Interest:** Zenithal projections centered on that point.

*   **Properties to Preserve:** Decide which property (area, shape, distance, direction) is most important for the map's intended use.

*   **Distortion Tolerance:** Understand that some distortion is unavoidable. The choice involves minimizing the most problematic distortion for the given purpose.

*   **Audience:** Consider what the map user needs and can understand.

**Key Considerations for Choice:**

*   **No single projection is perfect for all purposes.**
*   **Understand the trade-offs:** Preserving one property often leads to distortion in others.
*   **Standard parallels:** For conical projections, choosing standard parallels that bracket the area of interest minimizes distortion.
*   **Central meridian:** For cylindrical and UTM, selecting a central meridian that bisects the area of interest is crucial.

---

### Practice Questions & Exercises

**1. Multiple Choice:**

Which of the following is NOT a type of distortion inherent in map projections?
a) Area
b) Shape
c) Scale
d) Distance

**Answer:** c) Scale (While projections distort scale across the map, "scale" itself isn't a type of distortion in the same way as area, shape, distance, or direction.)

**2. Short Answer:**

Explain the fundamental problem that map projections attempt to solve.

**Answer:** The fundamental problem is representing the curved surface of the Earth (a sphere or spheroid) onto a flat surface (a map) without introducing distortion.

**3. Identification:**

If a map accurately represents the size of countries but distorts their shapes, what property is preserved, and what property is distorted?

**Answer:** Area is preserved, while shape is distorted.

**4. Scenario-Based:**

You are creating a map for sailors to navigate across the Atlantic Ocean. Which property would be most important to preserve on your map, and what type of projection might be suitable?

**Answer:** Direction (or conformality) is most important for navigation. The Mercator projection is a suitable choice as it preserves direction and makes rhumb lines appear as straight lines.

**5. UTM Question:**

A location in the Northern Hemisphere has a UTM Easting of 650,000 meters. What does this value tell you about its position relative to the central meridian of its UTM zone?

**Answer:** An Easting of 650,000 meters means the location is 150,000 meters east of the central meridian of its UTM zone (650,000 m - 500,000 m false easting = 150,000 m east).

**6. Projection Choice Rationale:**

Why would an Albers Equal-Area Conic projection be preferred over a Mercator projection for a choropleth map showing population density across the contiguous United States?

**Answer:** The Albers Equal-Area Conic projection preserves the relative sizes of states, which is crucial for accurately representing population density. The Mercator projection would significantly distort the area of states, especially those in the northern parts of the US, leading to a misrepresentation of population distribution.

---

### Important Points to Remember

*   **Distortion is unavoidable:** Every flat map of the Earth contains distortion in area, shape, distance, or direction.
*   **Map projections are compromises:** The goal is to minimize the most problematic distortion for the map's intended purpose.
*   **Understand the "family" of projections:** Cylindrical, Conical, and Zenithal projections have distinct characteristics due to the geometric surfaces used.
*   **GCS vs. PCS:** Geographic Coordinate Systems (lat/lon) are good for global referencing, while Projected Coordinate Systems (x,y) are necessary for accurate measurements on flat maps.
*   **UTM is a specific projected system:** It's zone-based and highly accurate within its zones, making it useful for regional mapping and precise measurements.
*   **Choosing the right projection is critical:** It directly impacts the accuracy and interpretation of spatial data. Always consider the map's purpose and the area being mapped.
