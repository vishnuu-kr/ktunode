---
title: "Parametric modeling of standard parts such as nuts, bolts, rivets, washers etc (Minimum 3 Nos)."
subject: "COMPUTER AIDED MACHINE DRAWING & 
MODELLING"
module: "Module 2: Creating 3D machine components (Minimum 4 Nos)."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e61"
status: "completed"
scrapedAt: "2026-05-20T17:48:03.512Z"
---
# COMPUTER AIDED MACHINE DRAWING & MODELLING

## Module 2: Creating 3D Machine Components

### Topic: Parametric Modeling of Standard Parts (Nuts, Bolts, Washers)

---

### **1. Introduction to Parametric Modeling**

**Key Concepts:**

*   **Parametric Modeling:** A CAD technique where design features are controlled by parameters (dimensions, relationships, constraints). Changing a parameter automatically updates the model.
*   **Intelligence in CAD:** Parametric models are "intelligent" because they contain information about how they were created and how their features relate to each other.
*   **Benefits:**
    *   **Ease of Modification:** Quickly update designs by changing parameters.
    *   **Design Iteration:** Explore different design variations efficiently.
    *   **Standardization:** Create families of parts with variations based on parameters.
    *   **Reduced Design Time:** Automate repetitive modeling tasks.

**Alignment with Course Outcomes:**

*   **CO4 (Apply parameterisation for the quick modeling of standard parts - K3):** This topic directly addresses the application of parameterization for efficient modeling of common components.
*   **CO1 (Apply the knowledge of engineering drawings to interpret 2D drawings and model them using software - K3):** Understanding the 2D drawings of standard parts is crucial before creating parametric 3D models.
*   **CO2 (Prepare standard assembly models and drawings of machine components using part drawings - K1):** Parametric modeling enables the creation of adaptable part models that can be easily assembled.

**Reference:**

*   **CAD, 3D Modeling, Engineering Analysis, and Prototype Experimentation by Jeremy Zhang Li:** This textbook provides foundational knowledge on CAD modeling techniques, including parametric approaches.

---

### **2. Understanding Standard Machine Parts**

Before modeling, it's essential to understand the characteristics and design principles of standard components.

#### **2.1 Nuts**

**Definition:** A fastener used with a bolt or screw to fasten parts together.

**Key Features:**

*   **Hexagonal Head:** The most common shape for ease of gripping with a wrench.
*   **Internal Threads:** Designed to mate with external threads of a bolt or screw.
*   **Chamfer:** Typically present on the leading edge of the nut for easier engagement with threads.
*   **Washer Face (Optional):** A raised, unthreaded surface that distributes load over a larger area.

**Standardization:** Nuts conform to various international (ISO) and national (ANSI/ASME, DIN) standards, specifying dimensions like thread size, head height, and wrench clearance.

**Learning Outcome Alignment:**

*   **CO1 (K3):** Interpreting 2D drawings of nuts (showing thread details, head dimensions, tolerances) is a prerequisite for modeling.

---

#### **2.2 Bolts**

**Definition:** A threaded fastener designed to be used with a nut.

**Key Features:**

*   **Head:** Various shapes (hexagonal, square, cap, etc.) for driving the bolt.
*   **Shank:** The unthreaded portion of the bolt (may or may not be present).
*   **Threads:** External threads that mate with the internal threads of a nut or tapped hole.
*   **Chamfer/Radii:** At the end for easier insertion.

**Standardization:** Bolts also follow international and national standards, defining thread types (e.g., UNC, UNF, metric), diameters, lengths, head sizes, and material properties.

**Learning Outcome Alignment:**

*   **CO1 (K3):** Understanding the 2D representations of bolts, including thread forms and dimensions, is vital for accurate 3D modeling.

---

#### **2.3 Washers**

**Definition:** Flat discs, usually with a hole in the center, used to distribute the load of a fastener or to prevent loosening.

**Key Types:**

*   **Flat Washers:** Provide a smooth bearing surface.
*   **Lock Washers:** Used to prevent loosening (e.g., split washers, tooth washers).

**Key Features:**

*   **Outer Diameter (OD):** Influences load distribution.
*   **Inner Diameter (ID):** Designed to fit around the bolt or screw shank.
*   **Thickness:** Affects compliance and load distribution.

**Standardization:** Washers are also standardized for dimensions and performance.

**Learning Outcome Alignment:**

*   **CO1 (K3):** Interpreting 2D washer drawings to capture OD, ID, and thickness.

---

### **3. Parametric Modeling Workflow for Standard Parts**

The core of this module is creating these standard parts using parametric techniques.

**General Workflow:**

1.  **Understand the Standard:** Refer to the relevant standard (e.g., ISO 4017 for Hex Head Bolts) to gather dimensions and tolerances.
2.  **Define Parameters:** Identify the key variables that define the part (e.g., nominal diameter, thread pitch, thread length).
3.  **Sketching:** Create 2D sketches of the basic profile (e.g., hexagonal profile for a nut, bolt head, or circular profile for a washer).
4.  **Feature Creation:** Use 3D features (Extrude, Revolve, Sweep, Fillet, Chamfer) to build the solid model.
5.  **Thread Creation:** Utilize specialized thread features or manual techniques.
6.  **Parameterization:** Link the dimensions in the sketch and feature creation to the defined parameters.
7.  **Configurations/Families of Parts:** Create different sizes of the same part by modifying the parameters.
8.  **Apply GD&T (Optional but Recommended):** Incorporate Geometric Dimensioning and Tolerancing for manufacturing accuracy.

**Alignment with Course Outcomes:**

*   **CO4 (K3):** This workflow directly demonstrates the application of parameterization.
*   **CO1 (K3):** Requires interpreting 2D standards to define parameters for 3D modeling.
*   **CO3 (K2):** Practicing GD&T can be integrated into the modeling process.

---

### **4. Parametric Modeling Examples (Minimum 3 Nos)**

We will focus on Hexagonal Nuts, Hexagonal Bolts, and Flat Washers as common examples.

#### **4.1 Parametric Hexagonal Nut Modeling**

**Learning Outcome Focus:** CO1 (K3), CO4 (K3)

**Underlying Standard (Example):** ISO 4032 (Hexagon Nuts with Metric Fine Pitch Thread) or ISO 4032 (Hexagon Nuts with Metric Coarse Pitch Thread).

**Key Parameters:**

*   `Nominal_Diameter` (e.g., M10, M12)
*   `Thread_Pitch` (depends on nominal diameter, e.g., 1.5mm for M10 coarse)
*   `Across_Flats` (distance between parallel faces of the hexagon, typically 1.5 * Nominal_Diameter + offset)
*   `Height` (typically 0.8 * Nominal_Diameter)
*   `Chamfer_Angle` (e.g., 45 degrees)
*   `Chamfer_Distance` (e.g., 0.5 * Thread_Pitch)

**Modeling Steps (Illustrative - specific commands vary by CAD software):**

1.  **Define Parameters:** In your CAD software's parameter manager, create variables for `Nominal_Diameter`, `Thread_Pitch`, `Across_Flats`, `Height`, `Chamfer_Angle`, `Chamfer_Distance`.
    *   *Example:* If `Nominal_Diameter` = 12mm, then `Thread_Pitch` could be 1.75mm, `Across_Flats` = 19mm, `Height` = 9.6mm.

2.  **Sketch 1 (Hexagon):**
    *   Create a new sketch on a plane (e.g., XY plane).
    *   Draw a hexagon centered at the origin.
    *   Use constraints to make it a regular hexagon.
    *   Add a dimension from the center to a vertex and relate it to `Across_Flats` (e.g., `Across_Flats` / 2). Alternatively, dimension between two parallel sides.
    *   Add a geometric constraint for horizontal/vertical alignment of a side or vertex to define orientation.

3.  **Feature 1 (Extrude):**
    *   Extrude the hexagon sketch to a depth defined by the `Height` parameter.

4.  **Feature 2 (Revolve or Cut for Threads):**
    *   **Method A (Thread Feature):** Most CAD software has a dedicated "Thread" feature.
        *   Select the inner cylindrical face.
        *   Specify the `Nominal_Diameter` and `Thread_Pitch` as parameters.
        *   Choose the thread type (e.g., Metric Die).
        *   Specify the thread depth or length (e.g., up to the chamfer).
    *   **Method B (Manual Cut - for understanding):**
        *   Create a sketch on the end face of the extruded hexagon.
        *   Draw a helix with the `Thread_Pitch` and `Nominal_Diameter`.
        *   Draw a thread profile (e.g., ISO metric thread profile) as a separate sketch.
        *   Use a "Swept Cut" feature, sweeping the thread profile along the helix. This is more complex but offers more control.

5.  **Feature 3 (Chamfer):**
    *   Apply a chamfer to the top edge of the nut.
    *   Set the chamfer angle to `Chamfer_Angle` and the distance to `Chamfer_Distance` (or define based on standard).

6.  **Feature 4 (Optional - Washer Face):**
    *   If the standard requires a washer face, create another sketch on the end face.
    *   Draw a larger circle with an offset dimension from the thread diameter.
    *   Extrude this annulus (ring) feature by a small distance (e.g., 0.5mm).

7.  **Review and Test:**
    *   Check the model against the standard drawing.
    *   Change the `Nominal_Diameter` parameter and observe how other dimensions update. For example, if you change M10 to M12, `Across_Flats`, `Height`, and `Thread_Pitch` should automatically adjust if properly linked.

**Important Points to Remember:**

*   **Parameter Naming:** Use clear and descriptive names for parameters.
*   **Relationships:** Ensure dimensions and features are correctly linked to parameters.
*   **Standard Compliance:** Always refer to the specific ISO/ANSI standard for accurate dimensions.

---

#### **4.2 Parametric Hexagonal Bolt Modeling**

**Learning Outcome Focus:** CO1 (K3), CO4 (K3)

**Underlying Standard (Example):** ISO 4017 (Hexagon Head Bolts with Metric Coarse Pitch Thread).

**Key Parameters:**

*   `Nominal_Diameter` (e.g., M10, M12)
*   `Thread_Pitch` (e.g., 1.5mm for M10 coarse)
*   `Underhead_Length` (L, distance from underside of head to start of thread)
*   `Threaded_Length` (B, length of the threaded portion)
*   `Head_Height` (k, height of the hexagon head)
*   `Across_Flats` (distance between parallel faces of the hexagon)
*   `Chamfer_Angle` (e.g., 30-45 degrees)
*   `Chamfer_Distance` (small value, e.g., 1mm for M10)
*   `Thread_Runout` (extra length at the end of threads)

**Modeling Steps (Illustrative):**

1.  **Define Parameters:** Create parameters like `Nominal_Diameter`, `Thread_Pitch`, `Across_Flats`, `Head_Height`, `Underhead_Length`, `Threaded_Length`, `Bolt_Length` (total length L+B), `Chamfer_Angle`, `Chamfer_Distance`.
    *   *Example:* For M12 bolt, `Nominal_Diameter` = 12mm. `Across_Flats` ≈ 19mm, `Head_Height` ≈ 7.5mm. `Underhead_Length` and `Threaded_Length` vary based on the overall bolt length.

2.  **Sketch 1 (Bolt Head Profile):**
    *   Create a sketch on a plane.
    *   Draw a hexagon centered at the origin.
    *   Dimension it using `Across_Flats`.
    *   Add a "Fit Point Spline" or similar arc feature on one of the bottom vertices to represent the fillet under the head.

3.  **Feature 1 (Extrude Head):**
    *   Extrude the hexagon profile to a depth defined by `Head_Height`.

4.  **Feature 2 (Shank):**
    *   Create a new sketch on the top face of the extruded head.
    *   Draw a circle with diameter equal to `Nominal_Diameter`.
    *   Extrude this circle downwards to a length defined by `Underhead_Length`. This forms the shank.

5.  **Feature 3 (Threads):**
    *   Most CAD software has a "Thread" feature.
    *   Select the cylindrical shank face.
    *   Input `Nominal_Diameter` and `Thread_Pitch`.
    *   Specify the thread length as `Threaded_Length` (or calculate based on total length).
    *   Choose thread type (e.g., Metric Die).

6.  **Feature 4 (End of Bolt):**
    *   Create a sketch on the end face of the bolt (after the threaded portion).
    *   Draw a circle with a slightly larger diameter than `Nominal_Diameter` to represent thread runout or a small chamfer.
    *   Extrude this to cut a small length. Alternatively, apply a chamfer.

7.  **Feature 5 (Chamfer on Head):**
    *   Apply a chamfer to the sharp edges of the hexagon head for aesthetics and safety.

8.  **Review and Test:**
    *   Check the model.
    *   Modify `Nominal_Diameter` and observe updates.
    *   Modify `Bolt_Length` (and ensure `Underhead_Length` and `Threaded_Length` are correctly related to it, perhaps using equations). For example, a common relationship is `Threaded_Length` = `Bolt_Length` - `Underhead_Length`.

**Important Points to Remember:**

*   **Bolt Length Definitions:** Be clear about which length parameter you are controlling (e.g., total length, underhead length).
*   **Thread Runout:** Standard threads often have a runout at the end. Model this for realism.
*   **Fillet Under Head:** Add a fillet to the junction between the head and the shank as per standards for strength.

---

#### **4.3 Parametric Flat Washer Modeling**

**Learning Outcome Focus:** CO1 (K3), CO4 (K3)

**Underlying Standard (Example):** ISO 7089 (Plain Washers for Metric Bolts and Screws - Normal Series).

**Key Parameters:**

*   `Nominal_Diameter` (e.g., M10, M12 - refers to the bolt size it fits)
*   `Inner_Diameter` (ID, slightly larger than `Nominal_Diameter` for clearance)
*   `Outer_Diameter` (OD, determined by standard based on `Nominal_Diameter`)
*   `Thickness` (t, determined by standard based on `Nominal_Diameter`)

**Modeling Steps (Illustrative):**

1.  **Define Parameters:** Create parameters for `Nominal_Diameter`, `Inner_Diameter`, `Outer_Diameter`, `Thickness`.
    *   *Example:* For an M10 washer, `Nominal_Diameter` = 10mm. Standard might specify `Inner_Diameter` ≈ 10.5mm, `Outer_Diameter` ≈ 20mm, `Thickness` ≈ 1.6mm.

2.  **Sketch 1 (Two Circles):**
    *   Create a new sketch on a plane (e.g., XY plane).
    *   Draw two concentric circles centered at the origin.
    *   Dimension the inner circle using `Inner_Diameter`.
    *   Dimension the outer circle using `Outer_Diameter`.

3.  **Feature 1 (Extrude):**
    *   Extrude the annular (ring) feature created by the two circles.
    *   The extrusion depth is defined by the `Thickness` parameter.

4.  **Feature 2 (Optional - Chamfer):**
    *   Some washers have slightly chamfered edges. If so, apply a small chamfer to the top and bottom edges.

5.  **Review and Test:**
    *   Check the model dimensions.
    *   Change the `Nominal_Diameter` parameter and observe how `Inner_Diameter`, `Outer_Diameter`, and `Thickness` update.

**Important Points to Remember:**

*   **Diameter Relationships:** The OD and ID are typically functions of the nominal diameter.
*   **Tolerance on Thickness:** Thickness can be critical for load distribution.

---

### **5. Geometric Dimensioning and Tolerancing (GD&T) in Parametric Models**

**Learning Outcome Focus:** CO3 (K2)

**Key Concepts:**

*   **GD&T:** A symbolic language used on engineering drawings to communicate geometric and dimensional tolerances precisely. It controls form, orientation, location, and runout.
*   **Purpose:** To ensure interchangeability of parts, reduce inspection costs, and improve product quality.
*   **Integration:** GD&T can be applied directly to 3D models in many CAD systems. This creates a "Model-Based Definition" (MBD) or "3D Annotation."

**How GD&T applies to Standard Parts:**

*   **Nuts & Bolts:**
    *   **Form Tolerances:** Flatness of the washer face, straightness of the shank, roundness of threads.
    *   **Profile Tolerances:** Controlling the shape of the thread profile, the chamfer, or the fillet under the bolt head.
    *   **Position Tolerances:** Ensuring the threads are centered within the nut or bolt head.
    *   **Runout Tolerances:** Controlling concentricity of the head and thread for precise alignment.
*   **Washers:**
    *   **Flatness:** Critical for load distribution.
    *   **Perpendicularity:** Controlling the relationship between the washer face and the inner bore.
    *   **Concentricity:** Ensuring the inner and outer diameters are concentric.

**Textbook Reference:**

*   **Geometric Dimensioning and Tolerancing by James D. Meadows:** This is the primary reference for understanding GD&T principles and applications.
*   **Fundamentals of Geometric Dimensioning and Tolerancing by Alex Krulikowski:** Provides practical guidance and examples for applying GD&T.

**Example (Applying GD&T to a Bolt Model):**

1.  **Select GD&T Tools:** Use the GD&T annotation tools within your CAD software.
2.  **Apply Datum Features:** Define datum features (e.g., datum A on the bolt head face, datum B on the shank cylinder) if needed for complex tolerancing.
3.  **Add Geometric Tolerances:**
    *   Select the shank cylinder and apply a "Straightness" tolerance (e.g., 0.05mm) to datum A. This ensures the shank is straight relative to the bolt head.
    *   Select the threaded section and apply a "Profile of a Rib" tolerance or a specific thread tolerance feature as defined by the standard.
    *   Apply a "Concentricity" tolerance to the threaded cylinder with respect to the bolt head's axis.

**Alignment with Course Outcomes:**

*   **CO3 (K2):** This section directly addresses the practice of GD&T in models.

---

### **6. Practice Questions and Exercises**

**Instructions:** Assume you have access to a CAD software with parametric modeling capabilities.

**Exercise 1: Parametric M16 Hexagonal Nut**

1.  **Objective:** Model a parametric M16 hexagonal nut according to ISO 4032 (metric coarse thread).
2.  **Parameters to Define:**
    *   `Nominal_Diameter` = 16mm
    *   `Thread_Pitch` = 2.0mm (standard for M16 coarse)
    *   `Across_Flats` = 24mm (standard for M16)
    *   `Height` = 12.8mm (standard for M16)
    *   `Chamfer_Angle` = 45 degrees
    *   `Chamfer_Distance` = 1.0mm
3.  **Task:** Create the parametric model using the steps outlined in Section 4.1. Test by changing `Nominal_Diameter` to M12 and verifying the key dimensions update correctly (refer to ISO 4032 for M12 dimensions).

**Exercise 2: Parametric M10 x 1.25 x 60mm Bolt**

1.  **Objective:** Model a parametric M10 hexagonal head bolt with a thread pitch of 1.25mm and an underhead length of 60mm, according to ISO 4017.
2.  **Parameters to Define:**
    *   `Nominal_Diameter` = 10mm
    *   `Thread_Pitch` = 1.25mm
    *   `Underhead_Length` = 60mm
    *   `Head_Height` = 6.4mm (standard for M10)
    *   `Across_Flats` = 16mm (standard for M10)
    *   `Chamfer_Angle` = 45 degrees
    *   `Chamfer_Distance` = 0.8mm
    *   *Calculate:* `Bolt_Length` = `Underhead_Length` + `Threaded_Length`. Assume a `Threaded_Length` of 45mm for this specific bolt (This implies the 60mm underhead length has 15mm of shank before threading starts - adjust sketch accordingly or make `Threaded_Length` another parameter). For simplicity, you can model `Bolt_Length` and derive `Threaded_Length` and `Underhead_Length` from it, ensuring `Underhead_Length` is greater than `Threaded_Length`. A more standard approach is to define `Bolt_Length` and `Underhead_Length`, deriving `Threaded_Length` as `Bolt_Length` - `Underhead_Length`.
3.  **Task:** Create the parametric model. Test by changing `Nominal_Diameter` to M12 and `Bolt_Length` to 70mm.

**Exercise 3: Parametric M12 Flat Washer**

1.  **Objective:** Model a parametric flat washer for an M12 bolt according to ISO 7089 (Normal Series).
2.  **Parameters to Define:**
    *   `Nominal_Diameter` = 12mm
    *   `Inner_Diameter` = 12.5mm (standard for M12)
    *   `Outer_Diameter` = 24mm (standard for M12)
    *   `Thickness` = 2.0mm (standard for M12)
3.  **Task:** Create the parametric model. Test by changing `Nominal_Diameter` to M10 and verifying the other dimensions.

---

### **7. Answers to Practice Questions**

*(Note: The exact values for parameters like `Across_Flats`, `Head_Height`, `Inner_Diameter`, `Outer_Diameter`, and `Thickness` can vary slightly between different standards and CAD software implementations. Always refer to the specific standard for precise values.)*

**Answer to Exercise 1 (M16 Nut):**

*   **Parameters:** `Nominal_Diameter`=16, `Thread_Pitch`=2.0, `Across_Flats`=24, `Height`=12.8, `Chamfer_Angle`=45, `Chamfer_Distance`=1.0.
*   **Verification:** When `Nominal_Diameter` is changed to 12mm:
    *   Expected `Thread_Pitch` = 1.75mm
    *   Expected `Across_Flats` = 19mm
    *   Expected `Height` = 9.6mm
    *   The model should automatically update to these dimensions.

**Answer to Exercise 2 (M10 Bolt):**

*   **Parameters:** `Nominal_Diameter`=10, `Thread_Pitch`=1.25, `Underhead_Length`=60.
*   **Derived Parameters:**
    *   `Bolt_Length` = 60 (initial for M10 x 60mm) + 45 (example `Threaded_Length`) = 105mm.
    *   `Threaded_Length` = 45mm.
    *   `Head_Height` = 6.4mm (standard for M10).
    *   `Across_Flats` = 16mm (standard for M10).
    *   `Chamfer_Angle` = 45, `Chamfer_Distance` = 0.8.
*   **Verification:** When `Nominal_Diameter` changes to 12mm:
    *   Expected `Thread_Pitch` = 1.75mm
    *   Expected `Head_Height` = 7.5mm
    *   Expected `Across_Flats` = 19mm
    *   When `Bolt_Length` changes to 70mm (keeping `Underhead_Length` fixed): The total length of the bolt should reflect 70mm, and the threaded portion will adjust accordingly.

**Answer to Exercise 3 (M12 Washer):**

*   **Parameters:** `Nominal_Diameter`=12, `Inner_Diameter`=12.5, `Outer_Diameter`=24, `Thickness`=2.0.
*   **Verification:** When `Nominal_Diameter` is changed to 10mm:
    *   Expected `Inner_Diameter` = 10.5mm
    *   Expected `Outer_Diameter` = 20mm
    *   Expected `Thickness` = 1.6mm
    *   The model should automatically update.

---

### **8. Key Takeaways and Important Points**

*   **Parameterization is Key:** Leverage parameters to create flexible and easily modifiable models of standard parts.
*   **Standards are Your Guide:** Always refer to relevant ISO, ANSI, or DIN standards for accurate dimensions and features of standard components.
*   **Start Simple, Build Complexity:** Begin with basic features and add details like chamfers, fillets, and threads.
*   **Test Your Parameters:** Regularly check how changes in one parameter affect others to ensure your model behaves as expected.
*   **GD&T for Real-World Application:** Incorporating GD&T enhances the manufacturability and functionality of your models.
*   **Families of Parts:** Parametric models allow you to create a "family" of similar parts (e.g., all M-series nuts) from a single intelligent model by changing parameters.

---

This concludes the study notes for the parametric modeling of standard parts. Remember to practice these techniques in your chosen CAD software to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
