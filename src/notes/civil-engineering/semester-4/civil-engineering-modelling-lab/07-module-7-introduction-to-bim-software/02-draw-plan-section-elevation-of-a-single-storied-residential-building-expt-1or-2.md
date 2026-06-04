---
title: "Draw plan, section & elevation of a single storied residential building (Expt 1or 2 )"
subject: "CIVIL ENGINEERING MODELLING LAB"
module: "Module 7: Introduction to BIM Software:"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cd56b5e963ba810d55"
status: "completed"
scrapedAt: "2026-05-20T18:43:22.686Z"
---
# CIVIL ENGINEERING MODELLING LAB: Module 7 - Introduction to BIM Software

## Topic: Drawing Plan, Section & Elevation of a Single-Storeyed Residential Building (Experiment 1 or 2)

---

### 1. Learning Outcomes

This module aims to equip you with the fundamental skills to utilize Building Information Modelling (BIM) software for architectural design. Upon successful completion, you will be able to:

*   **Understand the fundamental principles of BIM and its application in architectural design.**
*   **Navigate and utilize the interface of a chosen BIM software (e.g., Revit, ArchiCAD).**
*   **Create a 2D architectural plan for a single-storey residential building.**
*   **Generate corresponding sections and elevations from the 2D plan.**
*   **Associate building components (walls, doors, windows, slabs) with their respective representations in plan, section, and elevation.**
*   **Understand the importance of consistency and coordination between different views in BIM.**

---

### 2. Key Concepts and Definitions

*   **Building Information Modelling (BIM):** A process that involves creating and managing information on a construction project throughout its entire lifecycle. It's not just software, but a methodology that uses intelligent, 3D models as the basis for design, construction, and operations.
    *   **Key Benefit:** Creates a digital representation of the physical and functional characteristics of a facility, allowing for better decision-making and coordination.

*   **Architectural Plan:** A 2D drawing that shows the layout of a building from a top-down view, as if sliced horizontally a few feet above the floor.
    *   **Key Elements:** Walls, doors, windows, rooms, dimensions, labels, symbols for fixtures and furniture.

*   **Architectural Section:** A 2D drawing that shows a vertical slice through a building, revealing internal structures and details.
    *   **Key Elements:** Foundation, floor slabs, walls, roof structure, stairs (if any), heights, material indications.

*   **Architectural Elevation:** A 2D drawing that shows the exterior or interior of a building from a specific viewpoint, without cutting through it.
    *   **Key Elements:** Facade features, window and door placement and design, roof lines, heights, materials, shading.

*   **BIM Software Interface:** The graphical user environment of a BIM application. This typically includes:
    *   **Project Browser/Navigator:** Organizes all views, schedules, sheets, and other project elements.
    *   **Properties Palette:** Displays and allows modification of the parameters of selected elements.
    *   **Drawing Area/Model View:** The primary space where you create and manipulate your building model.
    *   **Toolbars/Ribbon:** Contains commands and tools for creating and editing elements.
    *   **View Control Bar:** Allows manipulation of view properties like scale, detail level, and visual style.

*   **Elements in BIM:**
    *   **Walls:** Represent vertical building enclosures. In BIM, they are intelligent objects with properties like material, thickness, height, and structural behaviour.
    *   **Doors:** Openings in walls that allow passage. They are intelligent objects with properties like size, material, swing direction, and hardware.
    *   **Windows:** Openings in walls that allow light and ventilation. They are intelligent objects with properties like size, type, material, and glazing.
    *   **Slabs/Floors:** Horizontal building elements that define floor levels. They are intelligent objects with properties like thickness, material, and structural properties.

*   **Coordination and Consistency:** In BIM, changes made to an element in one view (e.g., moving a wall in plan) are automatically reflected in all other associated views (section, elevation). This ensures consistency and reduces errors.

---

### 3. Drawing Plan, Section & Elevation of a Single-Storeyed Residential Building

This section outlines the general workflow and key steps involved in creating these drawings using BIM software. We will use a hypothetical example of a simple two-room residential building.

**Hypothetical Building Layout:**

*   **External Dimensions:** 10m x 6m
*   **Internal Walls:** One dividing wall in the middle.
*   **Openings:** One main door on the front, one window on each of the side walls, and one window on the back wall.
*   **Foundation:** Simple strip footing.
*   **Roof:** Pitched roof.

---

#### 3.1. Setting Up the Project in BIM Software (e.g., Revit)

1.  **Start a New Project:** Open the BIM software and select "New Project." Choose an appropriate architectural template.
2.  **Define Levels:** Create "Level 1" for the ground floor and potentially "Roof Level" or "Ceiling Level." Set appropriate elevations for these levels.
    *   *Example:* Level 1 at 0mm, Level 2 (e.g., top of wall) at 3000mm.
3.  **Set Units and Project Information:** Configure project units (e.g., millimeters, meters) and fill in basic project details.

#### 3.2. Drawing the Architectural Plan (Ground Floor)

1.  **Create Exterior Walls:**
    *   Select the "Wall" tool.
    *   Choose an appropriate wall type (e.g., brick wall with plaster).
    *   Draw the perimeter of the building, snapping to grid lines or specifying dimensions. Ensure walls are constrained to Level 1.
    *   *Key Concept:* Walls in BIM are 3D objects that are represented in 2D plans.

2.  **Add Interior Walls:**
    *   Use the "Wall" tool again to draw the dividing wall based on your plan.
    *   *Example:* Draw a 150mm thick internal wall to divide the 10m length into two roughly equal rooms.

3.  **Place Doors:**
    *   Select the "Door" tool.
    *   Choose a suitable door type and size from the library.
    *   Place the doors on the walls where required. The software will automatically create the opening in the wall.
    *   *Key Concept:* Doors are intelligent components that interact with walls.

4.  **Place Windows:**
    *   Select the "Window" tool.
    *   Choose suitable window types and sizes.
    *   Place the windows on the walls. Similar to doors, they create openings.
    *   *Example:* Place a window on the front wall, and one on each side.

5.  **Add Floor Slab:**
    *   Select the "Floor" tool.
    *   Choose a "Slab" type.
    *   Draw the boundary of the floor, usually aligned with the exterior walls.
    *   *Key Concept:* The floor element defines the ground level.

6.  **Add Annotation:**
    *   Use the "Dimension" tools to add overall and individual room dimensions.
    *   Use the "Text" tool to label rooms (e.g., "Living Room," "Bedroom").
    *   Use "Tag" tools to automatically tag doors and windows with their types and numbers.

#### 3.3. Generating Sections

1.  **Create a Section View:**
    *   Locate the "Section" tool (usually in the "View" tab or ribbon).
    *   Draw a cutting plane line across your plan where you want to view the building vertically. The direction of the arrow on the section line indicates the viewing direction.
    *   *Key Concept:* The section line on the plan defines the location and orientation of the section view.

2.  **View the Section:**
    *   Double-click on the section head in the plan view or navigate to the section view in the Project Browser.
    *   The BIM software will automatically generate a 2D section based on the model's geometry.

3.  **Detailing the Section:**
    *   **Foundation:** You will see the foundation walls and slab. You might need to add a footing below the foundation wall.
    *   **Walls:** The section will show the layers of the walls (e.g., brick, insulation, plaster).
    *   **Floors:** The floor slab will be visible.
    *   **Roof:** The roof structure will be cut. For a pitched roof, you'll see the rafters, purlins, and roof covering.
    *   **Annotations:** Add dimensions for floor heights, wall thicknesses, and roof heights. Add material descriptions.

#### 3.4. Generating Elevations

1.  **Create Elevation Views:**
    *   Locate the "Elevation" tool.
    *   Place elevation markers around your building in the plan view. These markers define the viewpoints for the elevations (e.g., North Elevation, South Elevation, East Elevation, West Elevation).
    *   *Key Concept:* Elevation markers act as cameras capturing the exterior appearance of the building.

2.  **View the Elevations:**
    *   Navigate to each elevation view in the Project Browser or by double-clicking the elevation markers.
    *   Each view will show the exterior façade corresponding to its direction.

3.  **Detailing the Elevations:**
    *   **Walls:** The external walls will be visible.
    *   **Doors and Windows:** The placement and appearance of doors and windows will be accurately shown.
    *   **Roof:** The roof profile will be visible.
    *   **Annotations:** Add overall building dimensions, heights of windows and doors from the ground, and floor levels.

#### 3.5. Ensuring Coordination and Consistency

*   **Automatic Updates:** As you add or modify elements (e.g., change the size of a window, move a wall), the changes will propagate across all related views (plan, section, and elevations).
*   **Detail Level:** Adjust the detail level of your views (Coarse, Medium, Fine) to control the amount of geometric detail displayed.
*   **Visibility/Graphics Overrides:** Use this setting to control the visibility of different categories of elements and their graphical representation (line weights, colours, patterns) in each view.

---

### 4. Examples

**Example Scenario:** Drawing a simple single-storey house with a living room and a bedroom.

*   **Plan:**
    *   Outer dimensions: 8m x 5m.
    *   Internal wall separating living room (8m x 3m) and bedroom (8m x 2m).
    *   Main door on the 8m side.
    *   One window on the 5m side of the living room.
    *   One window on the 5m side of the bedroom.
    *   Wall thickness: 230mm (external), 150mm (internal).
    *   Floor height: 3m.

*   **Section (Cutting through the width):**
    *   Will show the 5m external walls, the internal 150mm wall, the floor slab, and the roof structure.
    *   The doors and windows will be shown as openings at their respective heights.

*   **Elevation (Front view):**
    *   Will show the main door and the window on the living room side.
    *   Will show the overall dimensions and height of the building facade.

---

### 5. Practice Questions and Exercises

**Exercise 1: Basic Plan Creation**

1.  Using your BIM software, create a rectangular room with external dimensions of 5m x 4m.
2.  Set the wall thickness to 200mm.
3.  Place a door of 900mm width on one of the longer walls.
4.  Place a window of 1200mm width on one of the shorter walls.
5.  Add dimensions to show the external size of the room.
6.  Label the room as "Study."

**Answer to Exercise 1:**
You would use the Wall tool to draw the rectangle, then the Door and Window tools to place the openings. The Dimension and Text tools would be used for annotation. The key is to correctly place the elements and ensure they are associated with the correct level.

**Exercise 2: Generating Views**

1.  Using the plan created in Exercise 1, create a section that cuts through the door and the window.
2.  Create an elevation view that shows the facade with the door and the window.
3.  In the section view, add a dimension from the bottom of the foundation to the top of the wall.
4.  In the elevation view, add a dimension from the ground level to the sill of the window.

**Answer to Exercise 2:**
You would use the Section tool to draw a cutting line across the plan. Then, you would use the Elevation tool to place elevation markers. The software will automatically generate these views. Dimensions would be added using the annotation tools within each view.

**Exercise 3: Conceptual Design**

1.  Design a simple two-room house (e.g., living room and bedroom) with basic external dimensions.
2.  Add an internal wall to divide the space.
3.  Place at least one door and one window in each room.
4.  Generate plan, section, and elevation views for your design.
5.  Ensure all views are coordinated and show consistent information.

**Answer to Exercise 3:**
This exercise requires you to apply all the concepts learned in this module. The process involves planning the layout, creating the elements (walls, doors, windows), and then generating the required views. The crucial part is observing how changes in one view affect others, demonstrating the power of BIM.

---

### 6. Important Points to Remember

*   **Start with a Clear Plan:** Before you even open the software, have a clear idea of the building's layout, dimensions, and openings.
*   **Use Templates Wisely:** Architectural templates in BIM software provide pre-configured settings for common tasks.
*   **Understand Levels:** Levels are fundamental to BIM. Ensure they are correctly defined for accurate vertical representation.
*   **Walls are Intelligent Objects:** Don't just draw lines for walls. Use the wall tools to create actual wall elements with defined properties.
*   **Doors and Windows Create Openings:** When you place doors and windows, they automatically cut openings in the walls they are placed within.
*   **Sections and Elevations are Live Views:** They update automatically as your model changes.
*   **Annotation is Crucial:** Dimensions, labels, and tags are essential for conveying information clearly in 2D drawings.
*   **Practice Regularly:** Proficiency in BIM software comes with consistent practice and exploration of its features.
*   **Explore the Software's Features:** Familiarize yourself with the Project Browser, Properties Palette, and various tools for creating and modifying elements.
*   **Consistency is Key:** Always check that your plan, sections, and elevations are consistent and accurately represent the building.

---
This concludes the study notes for Module 7, focusing on drawing plan, section, and elevation of a single-storey residential building using BIM software. Remember to actively engage with the software and practice these steps to build your skills.
