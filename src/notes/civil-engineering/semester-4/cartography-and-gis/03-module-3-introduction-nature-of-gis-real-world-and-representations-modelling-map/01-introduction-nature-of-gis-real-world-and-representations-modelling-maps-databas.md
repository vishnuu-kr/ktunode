---
title: "Introduction: Nature of GIS – Real world and representations: Modelling, Maps, Databases and Spatial Databases - Geographic phenomena: fields, objects and boundaries - Data types: nominal, ordinal, interval and ratio - Attribute data."
subject: "CARTOGRAPHY AND GIS"
module: "Module 3: Introduction: Nature of GIS – Real world and representations: Modelling, Maps, Databases and Spatial Databases "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810ab6"
status: "completed"
scrapedAt: "2026-05-20T18:43:13.676Z"
---
# CARTOGRAPHY AND GIS: Module 3 - Introduction: Nature of GIS

## 3.1 Introduction: Nature of GIS – Real World and Representations

**Learning Outcome:** Understand the fundamental nature of Geographic Information Systems (GIS) and how they represent the real world.

### Key Concepts & Definitions

*   **Geographic Information System (GIS):** A system designed to capture, store, manipulate, analyze, manage, and present all types of geographically referenced data. It integrates hardware, software, data, people, and organizations to solve problems.
*   **Real World:** The complex, continuous, and dynamic environment we inhabit, filled with phenomena that have spatial extent and location.
*   **Representation:** The process of simplifying and abstracting the real world into a format that can be understood and processed by a computer. GIS uses various techniques to represent spatial information.
*   **Modeling:** The process of creating a simplified, abstract representation of a real-world phenomenon or process. In GIS, modeling involves structuring geographic data and relationships to answer specific questions or simulate scenarios.

### How GIS Represents the Real World

GIS bridges the gap between the continuous, complex real world and the discrete, structured data required for computation. This is achieved through several key components:

*   **Spatial Data:** Information that describes the location and shape of geographic features. This is the core of GIS.
*   **Attribute Data:** Descriptive information about geographic features, linked to their spatial location.
*   **Software and Hardware:** The tools that enable the capture, storage, analysis, and visualization of this data.
*   **People and Organizations:** The users and managers of GIS who define the problems and interpret the results.

## 3.2 Modelling, Maps, Databases and Spatial Databases

**Learning Outcome:** Understand the roles of modeling, maps, databases, and spatial databases in GIS.

### Key Concepts & Definitions

*   **Modelling (in GIS):**
    *   **Conceptual Model:** Abstract representation of geographic phenomena and their relationships.
    *   **Logical Model:** Defines how data is organized and structured within a database, independent of specific software.
    *   **Physical Model:** Specifies how the data is physically stored on storage devices, dependent on the database management system.
*   **Maps:**
    *   **Definition:** A symbolic representation of selected geographic features or attributes of the Earth's surface or of a portion of it.
    *   **Role in GIS:** Maps are the primary output of GIS, used for visualization, communication, and analysis. They are not just static images but often dynamic and interactive.
    *   **Types of Maps:** Thematic maps, topographic maps, choropleth maps, dot density maps, etc.
*   **Databases:**
    *   **Definition:** An organized collection of structured information, or of data, typically stored electronically in a computer system.
    *   **Role in GIS:** Databases provide the infrastructure for storing, retrieving, and managing both spatial and attribute data efficiently.
*   **Spatial Databases:**
    *   **Definition:** Databases specifically designed to store and query data that represents objects defined in a geometric space. They can handle spatial data types (points, lines, polygons) and perform spatial operations.
    *   **Key Features:** Support for spatial data types, spatial indexing (e.g., R-trees), and spatial query languages (e.g., SQL with spatial extensions).

### The Interplay Between Modelling, Maps, Databases, and Spatial Databases

*   **Modeling** informs how we structure data in **Databases** and **Spatial Databases**.
*   **Databases** and **Spatial Databases** store the structured representations of the real world.
*   **Maps** are generated from the data stored in these databases, allowing for visualization and communication of spatial information and analysis results.

## 3.3 Geographic Phenomena: Fields, Objects, and Boundaries

**Learning Outcome:** Differentiate between various ways geographic phenomena are conceptualized and represented in GIS.

### Key Concepts & Definitions

*   **Geographic Phenomenon:** Any feature or event that exists in space and time and can be observed or measured.
*   **Fields (Continuous Phenomena):**
    *   **Definition:** Phenomena that exist everywhere across a landscape, with a value at every location. The value changes gradually from one location to another.
    *   **Representation in GIS:** Often represented using raster data models (e.g., grids of cells) or continuous surfaces.
    *   **Examples:**
        *   **Elevation:** The height of the land surface above sea level.
        *   **Temperature:** The air temperature at different locations.
        *   **Precipitation:** The amount of rainfall or snowfall.
        *   **Pollution Levels:** The concentration of a pollutant in the air or water.
*   **Objects (Discrete Phenomena):**
    *   **Definition:** Phenomena that are distinct, with well-defined locations and boundaries. They are countable and identifiable as individual entities.
    *   **Representation in GIS:** Typically represented using vector data models (e.g., points, lines, polygons).
    *   **Examples:**
        *   **Buildings:** Individual structures with specific footprints.
        *   **Roads:** Linear features with defined paths.
        *   **Cities:** Points representing settlements.
        *   **Lakes:** Areas with distinct boundaries.
*   **Boundaries:**
    *   **Definition:** The lines or areas that separate one geographic entity from another. Boundaries can be sharp or fuzzy.
    *   **Role in GIS:** Critical for defining the extent of objects and distinguishing between different phenomena.
    *   **Examples:**
        *   **Political Boundaries:** Borders between countries or states.
        *   **Property Boundaries:** Lines defining land ownership.
        *   **Ecological Boundaries:** Zones where vegetation types change.
        *   **Fuzzy Boundaries:** The transition zone between two soil types, where it's not clear where one ends and the other begins.

### How Fields and Objects are Represented in GIS

| Phenomenon Type | GIS Representation      | Data Model      | Examples                                |
| :-------------- | :---------------------- | :-------------- | :-------------------------------------- |
| **Field**       | Continuous Surface      | Raster          | Elevation, Temperature, Rainfall        |
| **Object**      | Discrete Feature        | Vector (Point)  | City, Well, Tree                        |
| **Object**      | Discrete Feature        | Vector (Line)   | Road, River, Contour Line               |
| **Object**      | Discrete Feature        | Vector (Polygon)| Lake, Forest, Country                   |

**Important Point to Remember:** The choice of representation (raster vs. vector) depends on the nature of the geographic phenomenon and the purpose of the GIS analysis.

## 3.4 Data Types: Nominal, Ordinal, Interval, and Ratio

**Learning Outcome:** Understand different levels of measurement for attribute data and their implications for analysis.

### Key Concepts & Definitions

*   **Attribute Data:** Descriptive characteristics associated with geographic features. This data answers "what," "how many," "when," or "why" about a spatial feature.
*   **Levels of Measurement (Scales of Measurement):** Refer to the different types of measurement scales used to quantify or categorize data. The level of measurement determines the types of statistical analyses that can be performed.

### The Four Levels of Measurement

1.  **Nominal Data:**
    *   **Definition:** Data that can be categorized into distinct groups, but there is no inherent order or ranking among the categories.
    *   **Characteristics:** Categorical, qualitative.
    *   **Allowed Operations:** Counting, calculating frequencies, modes.
    *   **Examples:**
        *   **Land Cover Type:** Forest, Water, Urban, Agriculture.
        *   **Soil Type:** Clay, Sandy, Loam.
        *   **Road Type:** Highway, Local Road, Unpaved.
        *   **Country Names:** USA, Canada, Mexico.

2.  **Ordinal Data:**
    *   **Definition:** Data that can be categorized into groups, and these groups have a meaningful order or rank. However, the intervals between categories are not necessarily equal or known.
    *   **Characteristics:** Categorical, ordered.
    *   **Allowed Operations:** Counting, frequencies, modes, medians, ranking.
    *   **Examples:**
        *   **Population Density Category:** Low, Medium, High.
        *   **Stream Order:** 1st order, 2nd order, 3rd order (a stream of order 3 is "larger" than an order 2, but the difference isn't quantifiable in a consistent way).
        *   **Likert Scale Ratings:** Strongly Agree, Agree, Neutral, Disagree, Strongly Disagree.
        *   **Soil Fertility:** Poor, Fair, Good, Excellent.

3.  **Interval Data:**
    *   **Definition:** Data that has a meaningful order and equal intervals between values. However, there is no true zero point. A zero value does not indicate the absence of the measured quantity.
    *   **Characteristics:** Numerical, ordered, equal intervals.
    *   **Allowed Operations:** Counting, frequencies, modes, medians, means, addition, subtraction.
    *   **Examples:**
        *   **Temperature (Celsius or Fahrenheit):** 0°C does not mean there is no heat. The difference between 10°C and 20°C is the same as between 30°C and 40°C.
        *   **Year:** The year 0 AD doesn't mean the absence of time.
        *   **IQ Scores:** While they have equal intervals, a score of 0 doesn't mean no intelligence.

4.  **Ratio Data:**
    *   **Definition:** Data that has a meaningful order, equal intervals between values, and a true zero point. A zero value indicates the absence of the measured quantity.
    *   **Characteristics:** Numerical, ordered, equal intervals, true zero.
    *   **Allowed Operations:** All arithmetic operations (addition, subtraction, multiplication, division), including calculating ratios and proportions. This is the highest level of measurement.
    *   **Examples:**
        *   **Elevation:** 0 meters can represent sea level, and a height of 100 meters is twice the height of 50 meters.
        *   **Distance:** 0 kilometers means no distance, and 10 km is twice as far as 5 km.
        *   **Population Count:** 0 people means no population.
        *   **Area:** 0 square kilometers means no area.
        *   **Age:** 0 years means not born yet.

**Important Point to Remember:** Understanding the level of measurement is crucial for selecting appropriate GIS analysis techniques and statistical methods. For example, you cannot calculate a meaningful average of nominal data.

## 3.5 Attribute Data

**Learning Outcome:** Understand the nature and role of attribute data in GIS.

### Key Concepts & Definitions

*   **Attribute Data:** Descriptive information associated with spatial features. It provides the "what" and "why" of geographic entities.
*   **Relational Database Management System (RDBMS):** A common way to store and manage attribute data in GIS. Data is organized into tables with rows (records) and columns (attributes).
*   **Linking Spatial and Attribute Data:** The key power of GIS lies in the ability to link attribute data to spatial features. This is typically done through a common identifier or by storing the attribute data directly within the spatial data structure.

### Types of Attribute Data

Attribute data can be of any of the four data types discussed previously (nominal, ordinal, interval, ratio).

### Role of Attribute Data in GIS

*   **Description:** Provides details about geographic features (e.g., name, population, building material).
*   **Classification:** Allows for the grouping and categorization of features based on their attributes.
*   **Analysis:** Enables queries and analyses based on characteristics (e.g., finding all cities with a population over 1 million, or all roads with a certain speed limit).
*   **Visualization:** Drives the symbology and labeling of maps (e.g., coloring states by population density, labeling rivers with their names).
*   **Data Management:** Organizes and stores information about geographic features.

### Examples of Attribute Data in GIS

| Spatial Feature | Attribute 1 (Nominal) | Attribute 2 (Ordinal) | Attribute 3 (Interval) | Attribute 4 (Ratio) |
| :-------------- | :-------------------- | :-------------------- | :--------------------- | :------------------ |
| **City**        | Country Name          | Growth Rate Category  | Founding Year          | Population          |
| **Road**        | Pavement Type         | Surface Condition     | Speed Limit (mph)      | Length (km)         |
| **Lake**        | Water Source          | Water Quality Grade   | Average Depth (m)      | Surface Area (sq km)|

**Important Point to Remember:** The richer and more accurate the attribute data, the more powerful and insightful the GIS analysis can be.

---

## Practice Questions and Exercises

**Instructions:** Answer the following questions based on the material covered in this module.

**Question 1:**
Which of the following best describes a geographic phenomenon represented by a field in GIS?
a) A specific building with a unique address.
b) The political boundary between two countries.
c) The air temperature at different locations across a region.
d) A river with a defined path and banks.

**Question 2:**
You are working with a dataset of soil types in a region. The soil types are classified as "Sandy," "Clay," and "Loam." What type of data is this attribute data?
a) Ratio
b) Interval
c) Ordinal
d) Nominal

**Question 3:**
Which level of measurement has a true zero point, meaning the absence of the measured quantity?
a) Nominal
b) Ordinal
c) Interval
d) Ratio

**Question 4:**
Explain the difference between a GIS representation of a field and an object, providing one example of each and the typical data model used to represent them.

**Question 5:**
If you were analyzing a dataset of city populations and wanted to calculate the average population of cities in a state, what type of attribute data would the "population" be, and what operations would be valid for this data?

**Question 6:**
What is the primary role of a spatial database in a GIS?

---

## Answers to Practice Questions

**Answer 1:**
c) The air temperature at different locations across a region.
*   **Explanation:** Temperature is a continuous phenomenon that has a value at every location, changing gradually. Buildings, boundaries, and rivers are typically discrete objects.

**Answer 2:**
d) Nominal
*   **Explanation:** "Sandy," "Clay," and "Loam" are categories with no inherent order or ranking among them. They are simply different types.

**Answer 3:**
d) Ratio
*   **Explanation:** Ratio data is characterized by having a true zero point, unlike interval data.

**Answer 4:**
*   **Field:** A field represents a phenomenon that exists everywhere across a landscape with a value at every location, changing gradually. It is typically represented using a **raster** data model (e.g., a grid of cells).
    *   **Example:** **Elevation**. Each cell in a raster grid could store the elevation value for that specific location.
*   **Object:** An object is a discrete phenomenon with a well-defined location and boundary, countable as an individual entity. It is typically represented using a **vector** data model.
    *   **Example:** A **building**. A building would be represented as a polygon feature with defined vertices marking its footprint.

**Answer 5:**
*   The "population" attribute would be **Ratio** data.
*   **Valid Operations:** Since population is ratio data, all arithmetic operations are valid, including:
    *   Counting (number of cities).
    *   Calculating frequencies (number of cities within population ranges).
    *   Calculating the mean (average population).
    *   Calculating the median.
    *   Addition and subtraction (e.g., population growth).
    *   Division (e.g., population density if area is also known).

**Answer 6:**
The primary role of a spatial database in a GIS is to efficiently **store, manage, retrieve, and query data that represents geographic features with spatial and attribute information.** It provides the structured environment for handling complex spatial relationships and operations.

---

This concludes the study notes for Module 3. Remember to review these concepts and practice applying them to real-world scenarios.
