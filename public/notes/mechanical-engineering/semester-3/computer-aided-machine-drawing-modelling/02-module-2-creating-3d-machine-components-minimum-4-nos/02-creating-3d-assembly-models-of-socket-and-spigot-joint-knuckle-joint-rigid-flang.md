---
title: "Creating 3D assembly models of Socket and spigot joint, Knuckle Joint, Rigid flange couplings, Bushed Pin flexible coupling, Plummer block, Screw jack etc."
subject: "COMPUTER AIDED MACHINE DRAWING & 
MODELLING"
module: "Module 2: Creating 3D machine components (Minimum 4 Nos)."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e5f"
status: "completed"
scrapedAt: "2026-05-20T17:48:01.995Z"
---
# COMPUTER AIDED MACHINE DRAWING & MODELLING

## Module 2: Creating 3D Machine Components & Assemblies

### Topic: Creating 3D Assembly Models of Common Machine Joints and Devices

This module focuses on the practical application of Computer-Aided Design (CAD) software to create 3D models of various machine components and then assemble them into functional units. We will explore the process of modeling individual parts and then bringing them together to form assemblies, emphasizing the importance of mating conditions and design intent.

---

### Learning Outcomes Covered:

*   **LO1: Interpret 2D Drawings and Model Them in 3D:** Understand how to translate 2D orthographic projections into accurate 3D models. (Aligns with CO1)
*   **LO2: Prepare Standard Assembly Models:** Learn to assemble pre-defined 3D parts into functional units. (Aligns with CO2)
*   **LO3: Practice GD&T in Models and Drawings:** Incorporate Geometric Dimensioning and Tolerancing principles into the 3D models and their corresponding 2D drawings. (Aligns with CO3)
*   **LO4: Apply Parameterization for Quick Modeling:** Utilize parametric modeling techniques to efficiently create and modify standard parts. (Aligns with CO4)
*   **LO5: Model External Surfaces of Common Objects:** Develop skills in creating realistic and functional external surfaces of machine components. (Aligns with CO5)

---

### Key Concepts and Definitions:

*   **3D Modeling:** The process of creating a digital representation of an object in three dimensions, defining its shape, size, and spatial relationships.
*   **Parametric Modeling:** A CAD modeling approach where design features are controlled by parameters (dimensions, constraints). Changes to parameters automatically update the model. This is crucial for LO4.
*   **Assembly:** A collection of individual 3D part models that are brought together and constrained to represent a complete machine or mechanism.
*   **Mating Conditions (Assembly Constraints):** Rules that define how components in an assembly are positioned and related to each other. Common mates include:
    *   **Concentric:** Aligns the axes of cylindrical or circular faces.
    *   **Coincident:** Makes faces, edges, or points occupy the same space.
    *   **Parallel:** Ensures faces or edges are parallel.
    *   **Perpendicular:** Ensures faces or edges are at a 90-degree angle.
    *   **Distance:** Specifies the distance between faces, edges, or points.
    *   **Angle:** Specifies the angle between faces or edges.
*   **Component Libraries:** Collections of pre-defined and often standardized 3D part models that can be easily inserted into assemblies.
*   **Geometric Dimensioning and Tolerancing (GD&T):** A symbolic language used on engineering drawings to define the allowable variations in the form, orientation, location, and profile of features. This is critical for LO3.
    *   **Features:** Basic geometric elements like planes, cylinders, spheres, cones, and surfaces.
    *   **Datums:** Theoretically perfect geometric reference points, lines, or planes used to establish a coordinate system for tolerancing.
    *   **Tolerances:** The permissible variation in the size, form, orientation, or location of a feature.
*   **External Surfaces:** The visible and functional exterior of a machine component. This relates to LO5.

---

### Case Studies: Creating 3D Assembly Models

We will explore the creation of 3D assembly models for the following common machine joints and devices. For each, we will focus on the individual part modeling and then the assembly process.

#### 1. Socket and Spigot Joint

**Description:** A simple joint used to connect two pipes or shafts, where one end (spigot) fits into the other (socket). Often used for alignment and load transfer.

**Individual Part Modeling Considerations:**
*   **Socket:** Typically a hollow cylinder with a slightly larger internal diameter and wall thickness. May include features for sealing or locking.
*   **Spigot:** A solid cylinder with an external diameter that mates with the socket's internal diameter. May have a chamfer or radius at the end for easier insertion.

**Assembly Process:**
1.  **Insert Components:** Insert the spigot and socket part models into the assembly environment.
2.  **Apply Mating Conditions:**
    *   Use a **concentric mate** to align the axes of the spigot and socket.
    *   Use a **coincident mate** between the end face of the spigot and the internal face of the socket to define their axial position.
    *   Add any necessary mates for locking mechanisms or seals if they are part of the design.

**GD&T Application (LO3):**
*   **Concentricity:** Apply to the mating cylindrical surfaces to ensure proper alignment. (e.g., the internal bore of the socket and the external diameter of the spigot).
*   **Flatness:** On the end faces if a tight seal is required.
*   **Straightness:** For the cylindrical bodies to ensure proper insertion.

**Parametric Modeling (LO4):**
*   Define the diameters and lengths of both socket and spigot as parameters. This allows for easy modification of joint size.
*   Make the wall thickness of the socket a parameter.

---

#### 2. Knuckle Joint

**Description:** A hinged joint used to connect two rods or links, allowing for angular movement. It typically consists of a fork end and a jaw end connected by a pin.

**Individual Part Modeling Considerations:**
*   **Fork End:** Features a U-shaped opening (two prongs) with holes through the prongs.
*   **Jaw End:** Features a central jaw with a hole, designed to fit between the prongs of the fork.
*   **Strainer Pin:** A cylindrical pin that passes through the holes of the fork and jaw to connect them.

**Assembly Process:**
1.  **Insert Components:** Insert the fork end, jaw end, and pin models.
2.  **Apply Mating Conditions:**
    *   **Concentric mate:** Between the pin and the holes in the fork prongs and the jaw.
    *   **Coincident mate:** Between the head of the pin and one of the outer faces (e.g., the outer face of a fork prong) to prevent the pin from sliding out.
    *   **Possible Angular Mate:** If the relative angle between the fork and jaw is critical, an angular mate could be used, although typically the joint is free to rotate.

**GD&T Application (LO3):**
*   **Concentricity:** Between the pin and the mating holes for smooth rotation.
*   **Perpendicularity:** Between the mating faces of the fork and jaw if they are intended to remain in a specific relative orientation when not under load.
*   **Position:** If the hole locations relative to other features on the fork or jaw are critical for subsequent operations or alignments.

**Parametric Modeling (LO4):**
*   Parameters for the diameter and length of the pin.
*   Parameters for the thickness of the fork prongs and the jaw, and the width of the gap between the fork prongs.
*   Hole diameters as parameters.

---

#### 3. Rigid Flange Coupling

**Description:** A coupling used to connect two shafts permanently and transmit torque. It consists of two flanges, one keyed to each shaft, bolted together.

**Individual Part Modeling Considerations:**
*   **Flange (each):** A cylindrical body with a central bore (for the shaft), a keyway, and a flange face with bolt holes.
*   **Bolt and Nut:** Standard fasteners used to connect the flanges.

**Assembly Process:**
1.  **Insert Components:** Insert the two flanges, bolts, and nuts.
2.  **Apply Mating Conditions:**
    *   **Concentric mate:** Between the shaft bore of each flange and the shaft (if modeled).
    *   **Coincident mate:** On the faces of the flanges that will be bolted together.
    *   **Concentric mate:** Between the bolt shank and the bolt holes in the flanges.
    *   **Coincident mate:** Between the bolt head and one flange face, and the nut face and the other flange face.
    *   **Threaded mates (if supported by CAD software):** To simulate the engagement of the bolt and nut.

**GD&T Application (LO3):**
*   **Concentricity:** Between the shaft bore and the bolt circle of holes.
*   **Flatness:** On the mating flange faces for even pressure distribution.
*   **Perpendicularity:** Of the bolt holes to the flange face.
*   **Profile of a line/surface:** On the keyway to ensure proper fit with the key.

**Parametric Modeling (LO4):**
*   Parameters for shaft diameter, flange diameter, flange thickness, bore diameter, keyway dimensions, and number/diameter of bolt holes.
*   Bolt size as a parameter.

---

#### 4. Bushed Pin Flexible Coupling

**Description:** A flexible coupling that uses a pin with a rubber or synthetic bush to connect two flanges. The bush absorbs shock and vibration.

**Individual Part Modeling Considerations:**
*   **Half-Coupling (each):** Typically a disc with a bore for the shaft and a projecting boss. The boss has holes for the pins.
*   **Pins:** Cylindrical pins that pass through the bosses and bushes.
*   **Bushes:** Cylindrical elements, often made of resilient material, that fit around the pins.

**Assembly Process:**
1.  **Insert Components:** Insert the two half-couplings, pins, and bushes.
2.  **Apply Mating Conditions:**
    *   **Concentric mate:** Between the shaft bore of each half-coupling and the shaft.
    *   **Coincident mate:** On the faces of the half-couplings that mate.
    *   **Concentric mate:** Between the pin and the holes in the half-coupling bosses.
    *   **Coincident mate:** Between the pin head and one of the half-coupling faces.
    *   **Concentric mate:** Between the pin (or the outer surface of the bush) and the inner surface of the bush.
    *   **Coincident mate:** Between the ends of the bushes and the coupling faces.

**GD&T Application (LO3):**
*   **Concentricity:** Between the shaft bore and the pin holes in the bosses.
*   **Concentricity:** Between the pin and the bush.
*   **Profile Tolerance:** On the bush material to control its deformation characteristics.
*   **Runout:** On the outer diameter of the bush relative to the coupling bore.

**Parametric Modeling (LO4):**
*   Parameters for shaft diameter, coupling diameter, number of pins, pin diameter, bush diameter, and bush length.
*   Material properties of the bush can be linked to parameters if simulating flexibility.

---

#### 5. Plummer Block

**Description:** A support for rotating shafts, typically used in conveyor systems and machinery. It houses a bearing and is mounted on a base.

**Individual Part Modeling Considerations:**
*   **Plummer Block Housing:** The main body with a bore to accommodate the bearing and mounting holes for the base.
*   **Bearing:** Standardized ball or roller bearing (often inserted as a single assembly or treated as a component).
*   **Cap:** A removable lid that secures the bearing in the housing.
*   **Bolts:** For securing the cap to the housing.
*   **Base Plate/Mounting Surface:** The surface to which the Plummer block is attached.

**Assembly Process:**
1.  **Insert Components:** Insert the housing, bearing, cap, and bolts.
2.  **Apply Mating Conditions:**
    *   **Concentric mate:** Between the bearing bore and the shaft.
    *   **Coincident mate:** Between the outer surface of the bearing and the bore in the housing.
    *   **Coincident mate:** Between the mating faces of the housing and the cap.
    *   **Concentric mate:** Between the bolt shank and the bolt holes.
    *   **Coincident mate:** Between the bolt heads and the cap, and the nuts (if used) and the housing.

**GD&T Application (LO3):**
*   **Concentricity:** Between the bearing bore and the housing bore.
*   **Flatness:** On the mounting surfaces of the housing and the cap.
*   **Perpendicularity:** Of the mounting holes to the base.
*   **Position:** Of the bearing bore relative to the mounting holes.

**Parametric Modeling (LO4):**
*   Parameters for shaft diameter, housing dimensions, bearing size (as a reference), number and size of mounting bolts.
*   Bolt sizes as parameters.

---

#### 6. Screw Jack

**Description:** A mechanical device used to lift heavy loads, typically by rotating a lead screw.

**Individual Part Modeling Considerations:**
*   **Base:** The stationary part that rests on the ground.
*   **Screw (Lead Screw):** A threaded rod that rotates.
*   **Nut (or Sleeve):** The threaded component that moves axially along the screw, carrying the load.
*   **Handle:** Used to rotate the screw.
*   **Load-Lifting Head:** The part that contacts the load.
*   **Optional:** Supporting elements, locking mechanisms.

**Assembly Process:**
1.  **Insert Components:** Insert the base, screw, nut, handle.
2.  **Apply Mating Conditions:**
    *   **Concentric mate:** Between the screw and the nut.
    *   **Coincident mate:** Between the end face of the nut and the load-lifting head.
    *   **Coincident mate:** Between the base and the bottom of the screw (or a bearing supporting it).
    *   **Coincident mate:** Between the handle and the end of the screw.
    *   **Limit Mates/Distance Mates:** To control the travel of the nut along the screw.
    *   **Rotational Mates (if applicable):** To define how the handle rotation translates to screw rotation.

**GD&T Application (LO3):**
*   **Concentricity:** Between the screw and the nut threads for smooth operation.
*   **Perpendicularity:** Of the screw axis to the base.
*   **Straightness:** Of the screw shaft.
*   **Thread Tolerances:** Critical for the screw and nut meshing. (e.g., Pitch, Major Diameter, Minor Diameter tolerances). This is a key application of GD&T from the textbooks.

**Parametric Modeling (LO4):**
*   Parameters for screw diameter, thread pitch, screw length, nut height, handle length.
*   The ability to change the number of threads engaged (by adjusting the distance mate limits) is a powerful parametric application.

---

### Modeling External Surfaces (LO5):

*   **Surface Modeling Techniques:** For complex or aesthetically driven components, surface modeling techniques can be used to create smooth, flowing external surfaces. This might involve:
    *   **Lofting:** Creating a surface by blending between two or more cross-sections.
    *   **Sweeping:** Creating a surface by moving a profile along a path.
    *   **Boundary Surfaces:** Creating surfaces by defining boundary curves.
*   **Fillets and Rounds:** Essential for softening sharp edges, improving aesthetics, and reducing stress concentrations. These are applied after primary feature creation.
*   **Chamfers:** Used for deburring or to facilitate assembly.
*   **Shelling:** Creating hollow components from solid models.

**Example:** For a screw jack handle, a swept surface with a rounded profile can create a comfortable grip. For a Plummer block housing, fillets on the corners improve strength and appearance.

---

### Incorporating GD&T (LO3) - Referencing Textbooks:

*   **Meadows & Krulikowski:** These textbooks are excellent resources for understanding the fundamental principles of GD&T.
    *   **Datums:** Learn how to establish datum features (planes, axes, points) from your 3D model to reference for tolerancing. For example, the bore of a shaft could be a datum feature.
    *   **Feature Control Frames:** Understand how to create and apply feature control frames to dimensions in your 3D model or on a 2D drawing derived from it. This includes selecting the correct geometric characteristic symbol and tolerance value.
    *   **Rule #1 (Perfect Form at MMC):** Meadows emphasizes this rule, which states that if a feature is at its Maximum Material Condition (MMC), it must have perfect form. This is crucial for interchangeability of parts.
    *   **Material Condition Modifiers:** Understand symbols like M (MMC), L (Least Material Condition), and R (Regardless of Feature Size).

*   **Zhang Li:** This textbook provides insights into how CAD software can be used to integrate and visualize GD&T within the modeling process, potentially allowing for design validation.

**Practical Application:** When modeling the parts for a Knuckle Joint, apply a positional tolerance to the holes in the fork and jaw to ensure they align precisely when the pin is inserted, facilitating smooth articulation.

---

### Parametric Modeling for Quick Modeling (LO4):

*   **Example: Standard Bolt:** Create a single 3D model for a standard bolt (e.g., Hex Head Bolt) where the diameter, length, thread pitch, head size, and shank length are all parameters.
*   **Leveraging Libraries:** Many CAD software packages have built-in libraries of standard hardware (bolts, nuts, bearings). Understanding how to insert and configure these parameterized components significantly speeds up assembly creation.
*   **Design Intent:** Ensure your parameters reflect the critical design intent. For instance, in a rigid flange coupling, the bolt circle diameter should likely be linked to the flange diameter or bore diameter to maintain proportionality.

---

### Important Points to Remember:

*   **Start with 2D Drawings:** Always begin by understanding the provided 2D drawings. Convert these into clear, feature-based 3D models. (CO1)
*   **Model Individual Parts Accurately:** Before assembling, ensure each component model is dimensionally correct and includes all necessary features.
*   **Choose Appropriate Mates:** Select the correct mating conditions to accurately represent the kinematic and geometric relationships between components. (CO2)
*   **GD&T is Crucial for Functionality:** Don't just model the shape; consider how tolerances affect the assembly and function of the parts. (CO3)
*   **Think Parametrically:** Design with parameters in mind from the outset for flexibility and reusability. (CO4)
*   **Visualize the Assembly:** Imagine how the parts will fit and move together to select the most effective mating conditions.
*   **File Management:** Keep your part files and assembly files organized.
*   **Check for Interference:** Most CAD software allows you to check for interferences between components in an assembly, which is vital for validating your design.

---

### Practice Questions:

**Question 1 (CO1, CO2):**
You are given the 2D orthographic views of a simple Coupling Pin.
*   Model the Coupling Pin in 3D.
*   Imagine a "Hole Feature" component that this pin mates with. Describe the mating conditions you would use to assemble the pin into the hole feature in a CAD assembly.

**Answer:**
*   **3D Model:** The Coupling Pin would be modeled as a cylinder with specific diameter and length, potentially with a head feature.
*   **Mating Conditions:**
    *   **Concentric Mate:** To align the axis of the pin with the axis of the hole.
    *   **Coincident Mate:** Between the head of the pin and one face of the hole feature, or between the end of the pin and the opposite face of the hole feature, to define its axial position.

**Question 2 (CO3, CO5):**
Consider the Socket and Spigot joint. What GD&T symbols would be most important to apply to the mating cylindrical surfaces of the spigot and the internal bore of the socket? Explain why.

**Answer:**
The most important GD&T symbol for the mating cylindrical surfaces would be **Concentricity**.
*   **Why:** Concentricity ensures that the axes of the two cylindrical features are aligned within a specified tolerance. In a Socket and Spigot joint, proper alignment is critical for smooth insertion, sealing (if applicable), and efficient load transfer. If the axes are not concentric, the spigot might bind within the socket, or a seal might not engage properly, compromising the joint's function.

**Question 3 (CO4):**
Describe how you would use parametric modeling to create a flexible model for the screw of a Screw Jack. What key dimensions would you define as parameters?

**Answer:**
To create a flexible Screw Jack screw model using parametric modeling:
*   **Parameters:**
    *   **Major Diameter:** The overall diameter of the screw.
    *   **Minor Diameter:** The diameter at the root of the threads.
    *   **Pitch:** The distance between consecutive threads.
    *   **Lead:** The axial distance the screw advances in one revolution (for single-start threads, lead = pitch).
    *   **Length:** The overall length of the screw.
    *   **Thread Form Angle:** (e.g., 60 degrees for metric threads).
    *   **Number of Starts:** (if not a single-start screw).
*   **Modeling Approach:** The thread itself would be generated using a helix and a thread profile, driven by these parameters. The length parameter would control the extent of the threading and the overall screw length. Changing the pitch would alter the thread density.

**Question 4 (CO2, CO5):**
You need to model a Plummer Block. What are the main external surfaces you would focus on modeling, and what CAD techniques might be useful for creating them?

**Answer:**
The main external surfaces of a Plummer Block to focus on modeling would include:
*   **Housing Body:**
    *   **Cylindrical bore:** For the bearing (often a simple extruded hole).
    *   **Mounting surfaces:** Typically flat surfaces with bolt holes (extruded bosses or cutouts).
    *   **External casing:** Often a curved or contoured shape for structural integrity and aesthetics.
*   **Cap:**
    *   **Flat mating surface:** To interface with the housing.
    *   **Bolt holes:** To pass through the housing.
    *   **External shape:** Often similar to the housing's top profile.

*   **Useful CAD Techniques:**
    *   **Extrusion:** For basic shapes like the base, bosses, and bolt holes.
    *   **Revolve:** For creating cylindrical or conical features, or the bearing bore.
    *   **Fillets and Rounds:** To smooth edges on the housing and cap for strength and aesthetics.
    *   **Shell:** If the housing is intended to be hollow with a specific wall thickness (though often modeled as solid for simplicity in this context).
    *   **Patterning (Linear/Circular):** For creating arrays of bolt holes.

---

This comprehensive study material covers the essential aspects of creating 3D assembly models for common machine components. By understanding these principles and practicing with CAD software, you will effectively achieve the learning outcomes of this module and contribute to your overall understanding of Computer-Aided Machine Drawing & Modelling.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
