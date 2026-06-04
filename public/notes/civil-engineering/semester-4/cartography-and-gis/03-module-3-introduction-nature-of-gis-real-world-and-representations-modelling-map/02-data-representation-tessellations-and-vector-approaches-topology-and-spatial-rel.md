---
title: "Data Representation: Tessellations and vector approaches - Topology and spatial relationships - Scale and resolution - Representations of geographic fields and objects - Temporal dimension."
subject: "CARTOGRAPHY AND GIS"
module: "Module 3: Introduction: Nature of GIS – Real world and representations: Modelling, Maps, Databases and Spatial Databases "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810ab7"
status: "completed"
scrapedAt: "2026-05-20T18:43:14.371Z"
---
# CARTOGRAPHY AND GIS: Module 3 - Introduction: Nature of GIS – Real World and Representations

## Topic: Data Representation

### Learning Outcomes:

Upon successful completion of this topic, students will be able to:

*   Differentiate between tessellation (raster) and vector approaches to representing geographic data.
*   Explain the concept of topology and its importance in GIS.
*   Describe various spatial relationships and how they are managed in GIS.
*   Understand the concepts of scale and resolution in the context of geographic data.
*   Explain how geographic fields and objects are represented in GIS.
*   Discuss the incorporation and representation of the temporal dimension in GIS.

---

### 1. Tessellations and Vector Approaches

Geographic data can be broadly categorized into two fundamental representation approaches: **tessellations (raster)** and **vector**.

#### 1.1. Tessellation (Raster) Approach

*   **Concept:** The real world is divided into a grid of equally sized cells or pixels. Each cell represents a specific geographic area and stores a single value representing a characteristic within that area.
*   **Analogy:** Think of a digital photograph or a scanned map.
*   **Key Components:**
    *   **Grid/Matrix:** A structured arrangement of cells.
    *   **Cells/Pixels:** The basic unit of representation, each having a unique row and column location.
    *   **Value:** The attribute stored within each cell (e.g., elevation, temperature, land cover type, pixel color).
*   **Types of Raster Data:**
    *   **Discrete Raster:** Represents data with distinct boundaries or categories (e.g., land cover maps, political boundaries). Each cell holds a categorical value.
    *   **Continuous Raster:** Represents phenomena that vary smoothly across space (e.g., elevation, temperature, rainfall). Cell values represent measurements at specific points, with interpolation used to fill the grid.
*   **Advantages:**
    *   **Simplicity:** Easy to understand and implement.
    *   **Efficient for Continuous Data:** Well-suited for representing phenomena that change gradually across space.
    *   **Overlay Operations:** Raster overlays are computationally efficient.
    *   **Image Processing:** Excellent for handling satellite imagery and aerial photographs.
*   **Disadvantages:**
    *   **Large File Sizes:** Can consume significant storage space, especially at high resolutions.
    *   **Blocky Appearance:** Smooth lines and boundaries can appear jagged or pixelated.
    *   **Less Precise for Linear Features:** Representing thin linear features (like roads) can be challenging and require thick cells.
    *   **Limited Attribute Storage:** Each cell typically stores only one value.
*   **Examples:**
    *   Digital Elevation Models (DEMs)
    *   Satellite imagery (Landsat, Sentinel)
    *   Temperature maps
    *   Land cover classification maps

#### 1.2. Vector Approach

*   **Concept:** The real world is represented using geometric primitives: points, lines, and polygons. These primitives are defined by their precise coordinate locations.
*   **Analogy:** Think of a drawing made with lines and shapes, or a blueprint.
*   **Key Components:**
    *   **Points:** Represent locations with zero dimension (e.g., wells, cities, benchmarks). Defined by X, Y (and optionally Z) coordinates.
    *   **Lines (or Arcs):** Represent one-dimensional features with length but no width (e.g., roads, rivers, streams). Defined by a sequence of connected points (vertices).
    *   **Polygons:** Represent two-dimensional features with area and perimeter (e.g., lakes, buildings, land parcels, administrative boundaries). Defined by a closed sequence of connected lines, where the start and end points are the same.
*   **Advantages:**
    *   **Precision and Accuracy:** Represents features with high positional accuracy.
    *   **Compact File Sizes:** Generally more efficient in terms of storage compared to raster for similar detail.
    *   **Realistic Representation:** Better at representing discrete features with clear boundaries.
    *   **Attribute Richness:** Each feature can store multiple attributes in a related database.
    *   **Network Analysis:** Ideal for analyzing connectivity and flow (e.g., road networks, utility lines).
*   **Disadvantages:**
    *   **Complex for Continuous Data:** Representing continuous phenomena requires complex interpolation and may not be as straightforward as raster.
    *   **Overlay Operations Can Be Computationally Intensive:** Especially with complex polygons.
    *   **Less Efficient for Imagery:** Not suitable for representing photographic or continuous surface data.
*   **Examples:**
    *   Road networks
    *   River systems
    *   Building footprints
    *   Administrative boundaries (states, countries)
    *   Cadastral maps

---

### 2. Topology and Spatial Relationships

**Topology** refers to the spatial relationships between connected or adjacent geometric features. It describes how features are connected, in what order, and how they share boundaries or nodes, independent of their exact geographic coordinates.

#### 2.1. Topology

*   **Concept:** Focuses on the connectivity and adjacency of features. It's about "what is next to what" or "what is connected to what."
*   **Importance in GIS:**
    *   **Data Integrity:** Ensures the logical consistency and accuracy of spatial data.
    *   **Network Analysis:** Crucial for tracing routes, analyzing flow, and finding shortest paths.
    *   **Area Calculations:** Helps ensure polygons are closed and do not overlap incorrectly.
    *   **Editing and Validation:** Aids in identifying and correcting errors like sliver polygons or dangling nodes.
*   **Key Topological Concepts/Relationships:**
    *   **Adjacency:** Which polygons share a common boundary.
    *   **Connectivity:** Which lines or routes are connected at nodes.
    *   **Containment:** Which points are inside which polygons.
    *   **Contiguity:** The extent to which features are adjacent or connected.
    *   **Proximity:** How close features are to each other.
*   **How Topology is Stored (Commonly in Vector Data):**
    *   **Topological Data Structure:** Stores relationships explicitly, often in separate tables or link lists that define nodes, edges (arcs), and faces (polygons).
    *   **Rules:** GIS software can enforce topological rules (e.g., no overlapping polygons in a land use layer, no gaps between polygons in a land parcel layer).
*   **Example:** In a road network, topology defines that roads are connected at intersections (nodes). Without explicit topology, a GIS would just see lines, making it difficult to determine if a vehicle can travel from one road to another.

#### 2.2. Spatial Relationships

These are the fundamental ways in which geographic features interact with each other in space.

*   **Types of Spatial Relationships:**
    *   **Identity:** Do features occupy the same space? (e.g., Is a city located within a specific state?)
    *   **Containment:** Is one feature entirely within another? (e.g., Is a lake within a national park?)
    *   **Overlap:** Do features share any common area? (e.g., Do two land parcels overlap?)
    *   **Proximity:** How close are features to each other? (e.g., What is the distance between two cities?)
    *   **Adjacency:** Do features share a common boundary or edge? (e.g., Which counties share a border?)
    *   **Connectivity:** Are features linked through a network? (e.g., Are two roads connected at an intersection?)
    *   **Centroid/Point-in-Polygon:** Is a point located within a polygon? (e.g., Which district is a specific landmark in?)
*   **GIS Operations for Spatial Relationships:**
    *   **Spatial Queries:** Asking questions about spatial relationships (e.g., "Find all rivers that flow through this forest polygon").
    *   **Buffer Analysis:** Creating zones of a specified distance around features.
    *   **Overlay Analysis:** Combining attributes and geometries of overlapping features.
    *   **Proximity Analysis:** Measuring distances and finding nearest features.
*   **Example:** A spatial query might ask: "Which schools are within 1 kilometer of a park?" This involves the spatial relationship of proximity.

---

### 3. Scale and Resolution

**Scale** and **resolution** are critical concepts that define the level of detail and geographic extent of the data represented in a GIS. They are closely related but distinct.

#### 3.1. Scale

*   **Definition:** The ratio between a distance on a map and the corresponding distance on the ground. It determines the level of detail that can be shown.
*   **Types of Scale Representation:**
    *   **Representative Fraction (RF):** A ratio (e.g., 1:10,000), meaning 1 unit on the map represents 10,000 units on the ground.
    *   **Verbal Scale:** A statement (e.g., "1 inch equals 1 mile").
    *   **Graphic Scale (Bar Scale):** A visual representation of distance, allowing for accurate measurement on the map even if the map is enlarged or reduced.
*   **Relationship with Detail:**
    *   **Large Scale Maps:** Show a *small* area of the Earth's surface in *great* detail (e.g., 1:1,000). Examples: City maps, property maps.
    *   **Small Scale Maps:** Show a *large* area of the Earth's surface with *less* detail (e.g., 1:1,000,000). Examples: World maps, continent maps.
*   **Importance in GIS:**
    *   **Data Selection:** Determines which features are relevant and can be displayed at a given scale.
    *   **Generalization:** As you zoom out (move to a smaller scale), features may need to be generalized or simplified to avoid clutter.
    *   **Map Production:** Essential for creating accurate and informative maps.
*   **Example:** A map of a neighborhood (large scale) will show individual houses and streets, while a map of a country (small scale) will only show major cities and highways.

#### 3.2. Resolution

*   **Definition:** The smallest unit of space or the smallest size of an object that can be distinguished or represented in a dataset.
*   **In Raster Data:**
    *   **Cell Size:** The physical dimensions of a single pixel on the ground (e.g., 30 meters x 30 meters).
    *   **Higher Resolution (Smaller Cell Size):** More detail, larger file sizes, more accurate representation of features.
    *   **Lower Resolution (Larger Cell Size):** Less detail, smaller file sizes, features appear more blocky.
*   **In Vector Data:**
    *   **Precision of Coordinates:** The accuracy with which the coordinates of points, lines, and polygons are stored.
    *   **Minimum Mapping Unit (MMU):** The smallest polygon or feature size that is mapped or retained in a dataset. Features smaller than the MMU are often generalized or omitted.
*   **Importance in GIS:**
    *   **Data Suitability:** Determines if data is appropriate for a specific analysis or application.
    *   **Accuracy of Analysis:** Higher resolution data generally leads to more accurate spatial analysis results.
    *   **Data Storage and Processing:** Directly impacts file size and the computational resources required.
*   **Example:**
    *   **Raster:** A satellite image with 1-meter resolution can distinguish objects as small as 1 meter. An image with 30-meter resolution can only distinguish objects 30 meters or larger.
    *   **Vector:** A cadastral map with precise coordinates for property boundaries has higher resolution than a map of state boundaries where features are simplified to represent larger regions.

---

### 4. Representations of Geographic Fields and Objects

Geographic phenomena can be broadly classified as either **fields** or **objects**. GIS uses different approaches to represent each.

#### 4.1. Geographic Fields (Continuous Phenomena)

*   **Concept:** Phenomena that have a value at every point in space. They vary smoothly across the landscape.
*   **Representation:**
    *   **Raster Data:** The most common and natural representation for fields. Each cell holds a value representing the field's characteristic at that location.
    *   **Contour Lines (Vector):** Lines connecting points of equal value (e.g., elevation contours on a topographic map). Used to visualize continuous phenomena in vector formats.
    *   **TIN (Triangulated Irregular Network):** A vector data structure representing a surface as a network of triangles. The vertices of the triangles hold elevation values, and the surface is interpolated across the faces.
    *   **Isolines/Isarithms:** Lines connecting points of equal value for various phenomena (e.g., isotherms for temperature, isobars for pressure).
*   **Examples:** Elevation, temperature, rainfall, soil moisture, magnetic field strength.
*   **Representation in GIS:**
    *   **DEM (Digital Elevation Model):** Raster representation of elevation.
    *   **IDW (Inverse Distance Weighting) / Kriging:** Interpolation techniques used to create continuous raster surfaces from sampled points.
    *   **Topographic Maps:** Often use contour lines (vector) to represent elevation.

#### 4.2. Geographic Objects (Discrete Phenomena)

*   **Concept:** Phenomena that are distinct, have well-defined boundaries, and are discrete in space. They are countable entities.
*   **Representation:**
    *   **Vector Data:** The primary and most appropriate representation for objects. Points, lines, and polygons are used to define their shape and location.
    *   **Attributes:** Objects are typically associated with a rich set of attributes stored in a related database, describing their characteristics.
*   **Examples:** Buildings, roads, lakes, trees, cities, parcels, wells.
*   **Representation in GIS:**
    *   **Points:** Represent cities, individual trees, wells.
    *   **Lines:** Represent roads, rivers, pipelines.
    *   **Polygons:** Represent lakes, buildings, land parcels, administrative boundaries.
*   **Relationship with Attributes:** The vector data structure allows for storing numerous attributes for each object. For instance, a road object (line) might have attributes like name, type, surface material, speed limit, number of lanes. A building object (polygon) might have attributes like address, height, usage, year built.

---

### 5. Temporal Dimension

The **temporal dimension** refers to how geographic phenomena change over time. Incorporating time into GIS allows for the analysis of dynamic processes and trends.

*   **Concept:** Geographic features and their attributes can change through time. This change can be discrete events or continuous processes.
*   **Importance in GIS:**
    *   **Dynamic Analysis:** Understanding how landscapes evolve, how populations change, or how environmental processes unfold.
    *   **Historical Analysis:** Studying past events and their spatial impact.
    *   **Forecasting and Prediction:** Using temporal data to predict future states.
    *   **Tracking and Monitoring:** Observing changes in real-time or over specific periods.
*   **Methods of Incorporating Temporal Data in GIS:**
    *   **Time-Stamped Attributes:** Adding a date or time field to attribute tables for discrete events or changes.
        *   *Example:* Recording the date a building was constructed or a road was repaired.
    *   **Time Series Data:** Storing multiple versions of the same dataset over time.
        *   *Example:* A series of land cover maps for the same region from different years.
    *   **Animation:** Displaying a sequence of maps or layers over time to visualize changes.
        *   *Example:* Animating the spread of a wildfire or the movement of a hurricane.
    *   **Spatiotemporal Data Models:** Specialized data structures designed to efficiently store and query data that has both spatial and temporal components.
        *   **Event-Based Models:** Store discrete events with their location and time.
        *   **State-Based Models:** Store the state of a geographic entity at specific points in time.
    *   **Raster Time Series:** Sequences of raster datasets capturing changes over time.
        *   *Example:* Monthly precipitation rasters to analyze seasonal patterns.
    *   **Vector Time Series:** Sequences of vector datasets capturing changes in discrete features.
        *   *Example:* Tracking the expansion of urban areas using polygon datasets from different years.
*   **Challenges:**
    *   **Data Volume:** Temporal data can be very large.
    *   **Data Complexity:** Managing and analyzing complex spatiotemporal relationships.
    *   **Data Integration:** Combining data from different time periods or sources with varying temporal resolutions.
*   **Examples:**
    *   Tracking deforestation over decades.
    *   Analyzing the growth of a city.
    *   Monitoring the spread of a disease over time.
    *   Simulating flood inundation based on rainfall events.

---

### Practice Questions and Answers

**Question 1:**
What is the fundamental difference between the raster and vector approaches to data representation in GIS?

**Answer:**
The fundamental difference lies in how they discretize space. Raster divides the world into a grid of cells, each holding a value, while vector uses geometric primitives (points, lines, polygons) defined by precise coordinates. Raster is good for continuous phenomena and imagery, while vector is best for discrete features with clear boundaries.

---

**Question 2:**
Explain the concept of topology and provide one example of its importance in GIS.

**Answer:**
Topology refers to the spatial relationships between connected features, such as adjacency and connectivity, independent of their exact coordinates. It's crucial for ensuring data integrity and enabling network analysis. For example, topology defines how roads connect at intersections, allowing a GIS to calculate the shortest route between two points.

---

**Question 3:**
If a map has a scale of 1:50,000, does it represent a large area or a small area of the Earth's surface, and why?

**Answer:**
A map with a scale of 1:50,000 represents a *small* area of the Earth's surface with *more* detail compared to a map with a scale of 1:1,000,000. This is because the larger the denominator in the representative fraction, the smaller the scale, meaning less area is covered, but with greater detail.

---

**Question 4:**
How does the resolution of a raster dataset affect its representation of geographic phenomena? Give an example.

**Answer:**
Resolution in raster data is determined by cell size. A smaller cell size (higher resolution) allows for a more detailed and accurate representation of features, capturing smaller objects and finer variations. For instance, a satellite image with 1-meter resolution can clearly distinguish individual cars, whereas an image with 100-meter resolution would only show larger features like buildings or large fields.

---

**Question 5:**
Differentiate between geographic fields and objects, and describe the typical GIS data models used for each.

**Answer:**
Geographic fields are continuous phenomena with values at every point in space (e.g., elevation, temperature), typically represented by **raster data** or vector representations like contour lines or TINs. Geographic objects are discrete entities with well-defined boundaries (e.g., buildings, roads), usually represented by **vector data** (points, lines, polygons) with associated attributes.

---

**Question 6:**
Provide two ways the temporal dimension can be incorporated into a GIS and an example for each.

**Answer:**
1.  **Time-Stamped Attributes:** Adding a date field to attributes. *Example:* A database of historical earthquake events, where each entry includes the date and time of the earthquake.
2.  **Time Series Data:** Storing multiple versions of a dataset over time. *Example:* A series of land use maps for a city, collected every 5 years, to track urban development patterns.

---

### Important Points to Remember:

*   **Raster vs. Vector:** Understand the trade-offs and suitability of each for different types of geographic data and analysis.
*   **Topology is Key:** Topology is not just about geometry; it's about the relationships that enable meaningful spatial analysis.
*   **Scale and Resolution Impact:** These concepts dictate the detail, accuracy, and suitability of data for specific applications.
*   **Fields vs. Objects:** Recognize how different phenomena are conceptually and practically represented in GIS.
*   **Time is Dynamic:** The temporal dimension is crucial for understanding change and evolution of geographic phenomena.
*   **No single "best" representation:** The choice of data representation depends heavily on the phenomenon being studied and the analytical goals.
