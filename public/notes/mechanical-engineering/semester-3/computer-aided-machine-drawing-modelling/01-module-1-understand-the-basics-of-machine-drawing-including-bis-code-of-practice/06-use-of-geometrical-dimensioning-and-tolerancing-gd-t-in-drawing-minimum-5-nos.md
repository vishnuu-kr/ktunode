---
title: "Use of geometrical dimensioning and tolerancing (GD & T) in drawing. (Minimum 5 Nos.)"
subject: "COMPUTER AIDED MACHINE DRAWING & 
MODELLING"
module: "Module 1: Understand the basics of machine drawing, including BIS code of practice, types of lines, dimensioning, scales of drawing, sectional views, geometric tolerances, and the importance of GD&T."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e5c"
status: "completed"
scrapedAt: "2026-05-20T17:48:00.503Z"
---
# COMPUTER AIDED MACHINE DRAWING & MODELLING
## Module 1: Understand the Basics of Machine Drawing
### Topic: Use of Geometric Dimensioning and Tolerancing (GD&T) in Drawing

---

### 1. Introduction to GD&T

Geometric Dimensioning and Tolerancing (GD&T) is a symbolic language used on engineering drawings to communicate design intent regarding form, orientation, location, and profile of features. It goes beyond simple linear and angular dimensions by defining the allowable variation for a feature based on its function and relationship to other features.

**Why GD&T?**

*   **Clear Communication:** Eliminates ambiguity and ensures everyone involved in the design, manufacturing, and inspection process understands the exact requirements.
*   **Functional Design:** Allows for larger tolerances where they don't affect functionality, leading to reduced manufacturing costs and improved interchangeability.
*   **Reduced Rejection:** Precise tolerancing leads to fewer scrapped parts and less rework.
*   **Improved Quality:** Ensures that parts function correctly and fit together as intended, even with variations within the specified tolerances.
*   **Cost Savings:** By allowing for greater manufacturing flexibility where possible, GD&T can significantly reduce manufacturing costs.

**Relationship to Course Outcomes:**

*   **CO1: Apply the knowledge of engineering drawings to interpret 2D drawings and model them using software.** (Knowledge Level: K3) GD&T is a critical component of interpreting 2D drawings accurately, which is essential for effective 2D to 3D modeling.
*   **CO3: Practice GD & T in models as well as drawings.** (Knowledge Level: K2) This topic directly addresses the practical application of GD&T in both CAD models and traditional drawings.

**Reference:** *Fundamentals of Geometric Dimensioning and Tolerancing* by Alex Krulikowski extensively covers the foundational principles and applications of GD&T.

---

### 2. GD&T Symbols and Basic Concepts

GD&T uses a system of symbols within a feature control frame to define tolerances.

**Feature Control Frame:**

A feature control frame is a rectangular box divided into compartments. The first compartment contains the geometric characteristic symbol and, if applicable, a tolerance modifier and the material condition symbol. Subsequent compartments contain the tolerance value and datum references (if any).

```
+-----------------+-----------------+-----------------+
| Geometric Char. | Tolerance Value | Datum Reference |
| (and Modifier)  |                 | (e.g., A, B, C) |
+-----------------+-----------------+-----------------+
```

**Key GD&T Concepts:**

*   **Feature:** A physical portion of a part, such as a surface, hole, slot, etc.
*   **Datum:** A theoretically exact point, axis, line, plane, or combination thereof used as a reference for location or orientation of features. Datums are established by datum features (physical features on the part) and datum targets.
*   **Datum Feature:** A physical feature of an object used to establish a datum.
*   **Datum Reference Frame (DRF):** A coordinate system established by three mutually perpendicular datum planes. This ensures consistent and repeatable part orientation during inspection.
*   **Material Condition Modifiers:** Symbols indicating how material conditions (e.g., maximum material condition, least material condition) affect the tolerance.

---

### 3. Common GD&T Symbols and Their Use

This section will cover at least five essential GD&T symbols and their applications, directly addressing the topic's requirement.

#### 3.1. Straightness

**Symbol:**  $\rightarrow$

**Definition:** Controls the straightness of a feature's surface or axis. The feature must lie within a specified tolerance zone.

**Application:** Used to control the straightness of a shaft, a flat surface, or the axis of a cylindrical feature.

**Example:**

A shaft dimensioned with a straightness tolerance of 0.05. The surface of the shaft must lie within two parallel lines (or planes) that are 0.05 apart.

```
+---+-------+
| → | 0.05  |
+---+-------+
```

**When to Use:** Essential for parts where bending or deviation from a straight line would cause functional problems, such as shafts in bearing supports.

**Textbook Reference:** *Geometric Dimensioning and Tolerancing* by James D. Medows provides detailed explanations and illustrations of straightness control.

#### 3.2. Flatness

**Symbol:** $\leftarrow$

**Definition:** Controls the flatness of a surface. The surface must lie within a specified tolerance zone between two parallel planes.

**Application:** Used to control the flatness of machined surfaces like bases, sealing surfaces, or mating surfaces.

**Example:**

A base plate specified with a flatness tolerance of 0.03. The entire surface of the base plate must be contained between two parallel planes separated by 0.03.

```
+---+-------+
| ← | 0.03  |
+---+-------+
```

**When to Use:** Crucial for surfaces that require precise mating or sealing, where even slight warpage can lead to leakage or improper assembly.

#### 3.3. Circularity (Roundness)

**Symbol:** $\odot$

**Definition:** Controls the roundness of a cylindrical or conical feature. The feature must lie within a specified tolerance zone between two concentric circles.

**Application:** Used to control the roundness of holes, shafts, and bearing surfaces.

**Example:**

A bore for a bearing specified with a circularity tolerance of 0.02. The bore must be perfectly round within a tolerance zone of 0.02.

```
+---+-------+
| ⊙ | 0.02  |
+---+-------+
```

**When to Use:** Important for features that rotate or require uniform contact, such as shafts and bearing bores, to ensure smooth operation and prevent vibration.

#### 3.4. Position

**Symbol:** $\oplus$

**Definition:** Controls the allowable variation in the location of one or more features (e.g., holes, slots) relative to datums. It defines a zone within which the center of the feature must lie.

**Application:** Commonly used for controlling the location of holes for fasteners, pins, or mating components. It ensures interchangeability of parts.

**Example:**

A hole specified with a position tolerance of Ø0.15 from datum A and datum B. The center of the hole must lie within a Ø0.15 diameter circle (if both datums are considered).

```
+---+-------+---+---+
| ⊕ | Ø0.15 | A | B |
+---+-------+---+---+
```

**When to Use:** Essential for ensuring that parts with multiple features will assemble correctly, especially when dealing with fasteners or pins. It allows for a "bonus tolerance" when the feature is produced at a size other than its Maximum Material Condition (MMC) or Least Material Condition (LMC).

**Material Condition Modifier (MMC):** When the MMC symbol (M) is used with a position tolerance (e.g., Ø0.15(M)), it indicates that a larger tolerance zone is allowed if the hole is produced larger than its specified MMC. This is known as "bonus tolerance."

*   **Example with MMC:** `+---+-------+---+---+---+`
    `| ⊕ | Ø0.15(M)| A | B |   |`
    `+---+-------+---+---+---+`
    If the hole is drilled larger than its nominal size (but still within the MMC limit), the allowable position tolerance zone increases.

**Textbook Reference:** *CAD, 3D Modeling, Engineering Analysis, and Prototype Experimentation* by Jeremy Zhang Li discusses how GD&T, including position, is integrated into CAD modeling workflows.

#### 3.5. Profile of a Line

**Symbol:** $\boxtop$

**Definition:** Controls the variation in form and size of a single straight or curved line element of a feature. The feature's line element must lie within a specified tolerance zone.

**Application:** Used to control the shape of features like cams, airfoils, or any complex curved surface where a precise line shape is critical.

**Example:**

A cam profile specified with a profile of a line tolerance of 0.05 along its curved edge.

```
+------+-------+---+---+
| □    | 0.05  | A | B |  (A and B are datums defining the orientation and location of the profile)
+------+-------+---+---+
```

**When to Use:** Necessary for features where the specific contour or shape of a line is critical for function, such as for smooth movement or aerodynamic performance.

#### 3.6. Profile of a Surface

**Symbol:** $\boxtop$ (with an additional horizontal line below)

**Definition:** Controls the variation in form and size of an entire surface. The surface must lie within a specified tolerance zone. It can be used with datum references to control location and orientation.

**Application:** Used to control the overall shape and location of complex surfaces, mating surfaces, or features that interact with other components.

**Example:**

A housing surface specified with a profile of a surface tolerance of 0.1 from datums A, B, and C.

```
+------+-------+---+---+---+
| □    | 0.1   | A | B | C |
+------+-------+---+---+---+
```

**When to Use:** For controlling complex surfaces that need to fit or function within a larger assembly. It's a powerful tolerance that can control multiple aspects of a surface simultaneously.

---

### 4. GD&T in CAD Modeling and Drawings (CO1, CO3)

Applying GD&T in a CAD environment is crucial for modern engineering.

*   **3D Annotations:** Modern CAD software allows for the direct application of GD&T symbols within the 3D model itself. This creates a "model-based definition" (MBD) where the drawing becomes redundant for many purposes.
*   **2D Drawings from 3D:** When generating 2D drawings from 3D models, GD&T annotations are typically transferred or created on the 2D views to provide explicit tolerancing information.
*   **Feature Recognition:** Some CAD software can automatically recognize features and suggest appropriate GD&T controls based on common practices, aiding in the application of GD&T.

**CO1 Alignment:** Understanding GD&T symbols and their application in drawings is fundamental to interpreting and creating CAD models that accurately reflect design intent.
**CO3 Alignment:** This section directly addresses the "practice GD&T in models" aspect of the course outcome.

**Reference:** *Geometric Dimensioning and Tolerancing* by James D. Medows and *CAD, 3D Modeling, Engineering Analysis, and Prototype Experimentation* by Jeremy Zhang Li are excellent resources for understanding the integration of GD&T in CAD.

---

### 5. Importance of GD&T in Machine Drawing (CO1, CO2, CO3)

GD&T is not just about drawing; it's about ensuring the function and manufacturability of machine components.

*   **Interchangeability:** GD&T ensures that parts manufactured by different machines, or even different manufacturers, will fit and function correctly in an assembly.
*   **Functionality:** By controlling form, orientation, and location, GD&T ensures that parts perform their intended function without interference or excessive play.
*   **Cost-Effectiveness:** By allowing for the largest possible tolerances that still satisfy functional requirements, GD&T reduces manufacturing costs.
*   **Reduced Inspection Time:** Clearly defined GD&T reduces the complexity and time required for inspection.

**CO1 Alignment:** Understanding GD&T is essential for interpreting the functional requirements of a machine part from its drawing.
**CO2 Alignment:** GD&T is critical for preparing part drawings that lead to standard assembly models, ensuring proper fit and function.
**CO3 Alignment:** This reinforces the practical importance of applying GD&T correctly in drawings and models.

---

### 6. Practice Questions and Answers

**Question 1:** What is the primary purpose of Geometric Dimensioning and Tolerancing (GD&T) in engineering drawings?
**Answer:** The primary purpose of GD&T is to clearly and unambiguously communicate the design intent regarding the allowable variations in form, orientation, location, and profile of part features, ensuring interchangeability and proper function.

**Question 2:** Explain the difference between straightness and flatness. Provide an example of a feature that would be controlled by each.
**Answer:**
*   **Straightness:** Controls the variation of a feature along a single axis or line. Example: The axis of a shaft or the edge of a keyway.
*   **Flatness:** Controls the variation of an entire surface between two parallel planes. Example: The mating surface of a mounting bracket or a sealing face.

**Question 3:** If a hole is specified with a position tolerance of Ø0.10(M) and the hole is manufactured at Ø6.5mm (where the MMC is Ø6.0mm), how much additional tolerance is gained for the position?
**Answer:**
The bonus tolerance is calculated as the difference between the actual hole size and the MMC size.
Bonus Tolerance = Actual Hole Size - MMC Size = 6.5mm - 6.0mm = 0.5mm.
The total allowable position tolerance zone is the specified tolerance plus the bonus tolerance: Ø0.10 + 0.5mm = Ø0.60mm.

**Question 4:** A critical sealing surface on a component requires a high degree of planarity. Which GD&T symbol would be most appropriate to control this?
**Answer:** Flatness ($\leftarrow$) would be the most appropriate symbol to control the planarity of a critical sealing surface.

**Question 5:** A feature control frame reads:
```
+---+-------+---+---+
| ⊕ | 0.10  | A | B |
+---+-------+---+---+
```
What does this tolerance control, and what are the datum references?
**Answer:** This tolerance controls the **position** of a feature (likely the center of a hole or slot). The datum references are Datum A and Datum B, which define the coordinate system for locating the feature.

---

### 7. Key Points to Remember

*   **GD&T is a language:** Learn the symbols and their meanings.
*   **Function drives tolerance:** GD&T should be applied based on how the part functions in an assembly.
*   **Datums are crucial:** Proper datum selection and referencing are essential for controlling features.
*   **Material condition modifiers (M) and (L) significantly impact tolerance zones:** Understand their application to gain "bonus tolerance."
*   **GD&T in 3D CAD:** Modern design practices heavily rely on incorporating GD&T directly into 3D models.
*   **Ambiguity reduction:** The core benefit of GD&T is eliminating guesswork in manufacturing and inspection.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 8. Further Reading and Exploration

*   **ASME Y14.5:** The American Society of Mechanical Engineers (ASME) standard for Dimensioning and Tolerancing. While this module might follow BIS codes, understanding ASME Y14.5 provides a broader perspective on GD&T principles.
*   **GD&T Training Courses:** Consider taking specialized courses to deepen your understanding and practical skills.
*   **Practice with real drawings:** Analyze existing engineering drawings that utilize GD&T to see how it's applied in industry.

---