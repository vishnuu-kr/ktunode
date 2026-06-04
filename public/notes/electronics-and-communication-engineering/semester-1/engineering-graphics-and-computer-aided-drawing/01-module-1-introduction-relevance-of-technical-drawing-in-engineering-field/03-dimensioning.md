---
title: "Dimensioning"
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 1: Introduction:  Relevance of technical drawing in engineering field."
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0a1"
status: "completed"
scrapedAt: "2026-05-23T17:33:47.526Z"
---
# ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING

## Module 1: Introduction: Relevance of Technical Drawing in Engineering Field

### Topic: Dimensioning

Welcome, everyone! Today, we're diving into a fundamental aspect of technical drawing – **Dimensioning**. Think about it: a drawing is a language, and dimensioning is the grammar that makes that language perfectly clear. Without precise dimensions, even the most beautifully drawn part is just a picture, not a set of instructions.

**Why is Dimensioning So Crucial? (Connecting to Course Outcomes)**

You might be wondering, "How does dimensioning relate to what we're learning in this course?" Well, it's absolutely central.

*   **CO1: Projection of Points and Lines:** While we're not directly projecting points and lines here, understanding how to dimension a 3D object inherently relies on how those lines and surfaces are represented in 2D orthographic views. The lengths and distances we dimension are the very properties that are projected.
*   **CO2: Multiview Orthographic Projections:** This is where dimensioning truly shines! When you create orthographic views (front, top, side), you're essentially showing the object from different perspectives. Dimensioning tells us *exactly* the size and location of every feature in each of those views. Imagine trying to manufacture a part based on a front view that shows a hole, but without any dimension telling you how big that hole is or where it's placed. Impossible, right?
*   **CO3: Sectional Views and Development of Surfaces:** When you cut an object to reveal internal features (sectional views), you need to dimension those internal dimensions. Similarly, when you unfold a complex shape (development of surfaces), you need to know the original dimensions to make the unfolded pattern accurate.
*   **CO4: Pictorial Drawings (Isometric):** Even in pictorial views, dimensions are often shown to give a quick understanding of size, though orthographic views are typically the primary source for manufacturing dimensions.
*   **CO5: Sketching with CAD Tools:** CAD software is all about precision. Dimensioning in CAD is not just adding text; it's about defining the exact geometric constraints of your design. Understanding manual dimensioning principles is key to using CAD effectively for creating accurate, manufacturable designs.

In essence, dimensioning transforms a visual representation into a precise, actionable blueprint. It's what allows engineers, manufacturers, and technicians to build the world around us.

---

### What is Dimensioning? The Core Idea

**Dimensioning** is the process of explicitly stating the size, location, and orientation of features on a technical drawing. It's how we communicate the exact requirements of a manufactured part. It's not just about adding numbers; it's about adding information that leaves no room for ambiguity.

Think of it like this: If you ask a friend to draw a square, they might draw something that *looks* like a square. But if you say, "Draw a square with sides 50 millimeters long," then you've given them precise instructions. Dimensioning is that level of precision for engineered parts.

As Bhatt N.D. emphasizes in his widely respected text, "Engineering Drawing," proper dimensioning is one of the most critical skills for a draughtsman. It ensures that a part can be manufactured to the required specifications, every single time.

---

### The Language of Dimensions: Elements of Dimensioning

To dimension effectively, we need to understand the different parts that make up a dimension. Let's break down these components:

*   **Dimension Line:** This is the line that carries the dimension value. It's typically a thin, continuous line, often with arrowheads at each end. It runs parallel to the feature being dimensioned. The dimension value is usually placed centrally above this line. *Think of this as the ruler itself, showing the extent of the measurement.*
*   **Extension Lines:** These are thin, continuous lines that extend outwards from the feature or object, indicating the limits of the dimension. They start from the object and run outwards, stopping where the dimension line meets them. They are usually perpendicular to the dimension line. *These lines act as the "stops" or "markers" for where the measurement begins and ends.*
*   **Arrowheads (or Leaders):** These are placed at the ends of the dimension line, touching the extension lines. They indicate the extent of the dimension. While arrowheads are common, other symbols like dots or slashes can also be used, especially in certain contexts or when space is limited. *These are the visual cues that tell you, "Measure from here to here."*
*   **Dimension Value (or Text):** This is the numerical value of the dimension, usually expressed in the units of length (e.g., mm, inches). It's placed above the dimension line, usually centered. *This is the actual "measurement" you need to know.*
*   **Leader Line:** This is a single line extending from a note or dimension to the feature it refers to. It typically ends with an arrowhead or a dot on the feature. Leaders are used for notes, specific dimensions that don't fit neatly, or when referring to a specific point or area. *This is like a pointer, drawing attention to a specific detail.*

Let's visualize this. Imagine dimensioning the length of a rectangular block. You'd have the two vertical sides of the block. From the ends of the block, thin extension lines would go upwards. A dimension line would connect these extension lines, with arrowheads at each end touching the extension lines. In the middle of that dimension line, you'd write the length, say "100 mm." This is how we communicate that the block is 100 mm long.

---

### Principles and Practices for Good Dimensioning

Just knowing the parts isn't enough; we need to dimension correctly. Good dimensioning is clear, unambiguous, and provides all necessary information without redundancy.

**Key Principles (as discussed in texts like Varghese P.I. and Benjamin J.):**

1.  **Clarity and Readability:** Dimensions should be easy to read. Avoid clutter. Ensure sufficient space between dimensions and between dimensions and the object.
2.  **Completeness:** Every feature that requires a dimension for manufacturing or identification must be dimensioned. Don't leave anything to guesswork.
3.  **Non-redundancy:** A feature should be dimensioned only once. Avoid giving the same dimension multiple times, as this can lead to errors if changes are made.
4.  **Placement:** Dimensions should be placed outside the object whenever possible. If placed inside, ensure they don't obscure important lines or features. Dimension lines should be parallel to the direction of the dimension.
5.  **Units:** Units of measurement (e.g., mm) are usually stated once at the beginning of the drawing or in the title block. They are not typically repeated for every dimension. However, in some international standards or specific contexts, units might be included.
6.  **Symmetry:** For symmetrical features, you can dimension the overall length and then indicate symmetry with a centerline and a notation like "SYM."
7.  **Avoid Crossing Lines:** Dimension lines and extension lines should not cross other dimension lines or extension lines if it can be avoided. If unavoidable, the crossing line should pass through the center of the dimension line (not through the arrowhead).
8.  **Location vs. Size:** It's important to distinguish between dimensions that define the *size* of a feature (e.g., diameter of a hole, length of a side) and dimensions that define the *location* of a feature (e.g., distance of a hole from an edge).

**Let's use an analogy:** Imagine you're giving directions to a new place. You wouldn't just say "Go straight." You'd say, "Go straight for 2 miles." And then, "Turn left at the third traffic light." The "2 miles" is the *size* (distance), and "third traffic light" is the *location*. Both are crucial for reaching your destination accurately.

---

### Types of Dimensioning

We can broadly categorize dimensioning based on how we apply it:

*   **Size Dimensioning:** This tells us the physical size of a feature, such as the length, width, diameter, radius, or thickness. For example, dimensioning the diameter of a hole as "Ø10" or the length of a rectangle as "50."
*   **Location Dimensioning:** This tells us the position of a feature relative to another feature or a datum. For example, the distance from the center of a hole to an edge of the part.

Now, how do we apply these in practice? There are a few common methods:

#### 1. Chain Dimensioning

In chain dimensioning, dimensions are arranged in a line, end-to-end, like links in a chain. The overall dimension is often also shown.

*   **How it works:** You dimension from one feature to the next, and then the total dimension.
*   **Example:** For a 100mm long bar, you might show 20mm, then 30mm, then 50mm in a line, and also a total of 100mm.
*   **Pros:** Clearly shows the breakdown of segments.
*   **Cons:** If the overall dimension changes, all intermediate dimensions might need recalculation, leading to potential errors. This is a common pitfall. If one segment is changed, the overall dimension might not add up correctly.

**Remember this:** While chain dimensioning shows detail, be mindful of the potential for cumulative error and redundancy if not managed carefully. Many engineers prefer a combination of methods.

#### 2. Baseline Dimensioning (or Datum Dimensioning)

In baseline dimensioning, all dimensions are referenced from a common datum or baseline. This is extremely useful for parts with many features that need to be located accurately relative to a single reference point.

*   **How it works:** You pick a starting point (a datum) on the object and dimension all features from that single point.
*   **Example:** Imagine a plate with several holes. You'd establish a baseline (say, the bottom edge), and then dimension each hole's position from that bottom edge and possibly a side edge.
*   **Pros:** Minimizes cumulative error. All features are located with respect to one common reference, making manufacturing very precise and reducing the chances of misalignment. This is highly recommended by standards bodies for critical applications.
*   **Cons:** Can sometimes make the drawing look a bit cluttered if there are many features to dimension from the same baseline.

This method is excellent for CO2 (Orthographic Projections) and CO5 (CAD sketching) because it directly translates to precise coordinate-based manufacturing or digital modeling.

#### 3. Coordinate Dimensioning

This is a specific form of baseline dimensioning where features are located using X, Y, and sometimes Z coordinates, typically referencing a defined origin (0,0). This is very common in Computer-Aided Manufacturing (CAM) and CNC machining.

*   **How it works:** Features are defined by their coordinate positions.
*   **Example:** A hole might be located at X=50, Y=25 from the part's origin.
*   **Pros:** Directly transferable to automated manufacturing processes. Highly precise.
*   **Cons:** Can be less intuitive for manual interpretation than other methods if not presented clearly.

#### 4. Tabular Dimensioning

Used for a series of similar features, often in mechanical assemblies or when many similar parts need to be dimensioned. The dimensions are listed in a table associated with the drawing.

*   **How it works:** The drawing shows a pattern or a set of features, and a table specifies variations (e.g., different diameters, lengths, or locations) for each instance.
*   **Pros:** Efficient for designs with many repeating or parameterized features.
*   **Cons:** Requires careful cross-referencing between the drawing and the table.

---

### Dimensioning Specific Features

Let's touch upon how we dimension common geometric features:

*   **Diameters and Radii:**
    *   Diameters of circles are usually indicated by the symbol "Ø" followed by the dimension value (e.g., Ø20). The dimension line for a diameter passes through the center of the circle.
    *   Radii are indicated by the symbol "R" followed by the dimension value (e.g., R10). The dimension line for a radius extends from the center of the arc to the circumference, and the arrowhead touches the circumference. It's crucial to show the center of the arc or circle when dimensioning radii.
    *   **Key Tip:** Avoid dimensioning both the radius and diameter of the same circle or arc, as this is redundant.

*   **Holes:**
    *   Holes are typically dimensioned by their diameter and depth (if it's a blind hole) or by indicating they pass through the entire object.
    *   A common notation for a through hole is "Ø20 THRU."
    *   For a counterbore or countersink, you'd specify the diameter and depth of the counterbore/countersink feature, along with the through-hole diameter. For example: "Ø10 X 5 DEEP" for a simple drilled hole, or "Ø20 CBORE Ø10 THRU" for a counterbored hole.

*   **Angles:** Angles are dimensioned by showing the arc of the angle and placing the dimension value, usually in degrees, along the arc. Extension lines are used to clearly define the angle's boundaries.

*   **Chamfers and Fillets:**
    *   **Chamfers:** These are beveled edges. They are usually dimensioned with a 45-degree symbol (if it's a standard 45-degree chamfer) and the distance along the edge, or by showing the distance along each leg. A common notation is "CHAMFER 2 X 45°" or simply "CH 2" where the 45° is implied.
    *   **Fillets:** These are rounded internal corners. They are dimensioned by placing "R" followed by the radius value on the fillet.

---

### Dimensioning in CAD vs. Manual Drawing

This is a vital point for us in this course, especially with CO5.

*   **Manual Drawing:** You painstakingly draw extension lines, dimension lines, arrowheads, and place the dimension text. The accuracy of your drawing *is* the accuracy of the dimensions. It requires a good hand and an understanding of proportion.
*   **CAD (Computer-Aided Drawing):** CAD software automates much of this. You select dimensioning tools, choose features, and the software draws the lines and places the text. However, the *principles* remain the same. You still need to decide *what* to dimension, *how* to dimension it (chain, baseline, etc.), and *where* to place dimensions for clarity.
    *   In CAD, dimensions can be "associative," meaning if you change the geometry of the object, the dimensions can update automatically. This is a powerful advantage but requires understanding the underlying constraints and relationships.
    *   CAD allows for different styles of dimensioning (text height, arrowhead size, extension line gaps) which can be customized to meet industry standards.

Think of it this way: Manual drawing teaches you the "why" and the "how" of dimensioning from first principles. CAD gives you the tools to execute those principles efficiently and precisely, but without understanding the principles, you'll be lost.

---

### Common Mistakes and How to Avoid Them

*   **Over-dimensioning:** Giving too many dimensions, leading to redundancy and potential conflicts. *Solution: Stick to the "dimension once" rule. Ask yourself, "Is this dimension absolutely necessary for manufacturing?"*
*   **Under-dimensioning:** Missing critical dimensions, leaving the manufacturer guessing. *Solution: Review your drawing from the perspective of someone who has never seen the part before. Can they make it precisely without asking questions?*
*   **Illegible dimensions:** Dimensions too small, too cramped, or poorly placed. *Solution: Ensure adequate spacing. Use appropriate text heights and line weights as per standards (like ISO or ANSI).*
*   **Crossing dimension lines:** Makes the drawing messy and hard to read. *Solution: Plan your dimensioning layout. Sometimes, changing the view or using a leader line can help.*
*   **Dimensioning to hidden lines:** This is generally avoided. Dimensions should ideally refer to visible features or clearly defined centerlines. *Solution: Whenever possible, dimension to visible outlines. If you need to dimension a feature indicated by a hidden line, try to show that feature in another view where it is visible.*

---

### Summary and Key Takeaways

Dimensioning is the backbone of technical drawings. It's the language that bridges design intent and physical realization.

*   Understand all the **elements of dimensioning**: dimension line, extension line, arrowheads, dimension value, and leader line.
*   Adhere to the fundamental **principles**: clarity, completeness, non-redundancy, and proper placement.
*   Choose the appropriate **dimensioning method**: Chain, Baseline, or Coordinate dimensioning, depending on the context and the need for precision. Baseline dimensioning is often preferred for its accuracy.
*   Learn how to dimension **specific features** like circles, holes, angles, chamfers, and fillets correctly using standard symbols and notations.
*   While CAD tools automate the drawing process, the **understanding of dimensioning principles is paramount** for creating effective and manufacturable designs.

Mastering dimensioning is not just about passing an exam; it's about becoming a proficient engineer who can communicate designs accurately and efficiently.

---

### Sample Questions with Answers

**Q1. Explain the importance of dimensioning in engineering drawings and its relation to orthographic projections.**

**Answer:**
Dimensioning is crucial in engineering drawings because it provides the necessary information about the size, shape, and location of all features of an object. It translates the visual representation into precise instructions for manufacturing, inspection, and assembly. Without proper dimensioning, a drawing is merely a sketch and cannot be used to create a functional part.

Its relation to orthographic projections (CO2) is direct: orthographic views show the object from different principal directions. Dimensioning applies the measurements to these 2D views, specifying the actual dimensions (length, width, height, diameters, locations of features) that are then "projected" onto these planes. For example, the front view shows the height and width, and dimensions are added to these projected lines to specify those exact values. The location of a hole in the front view is dimensioned by its distance from a reference edge, which is also represented in the projection.

**Q2. Differentiate between Chain Dimensioning and Baseline Dimensioning. Which method is generally preferred for achieving higher manufacturing accuracy and why?**

**Answer:**
*   **Chain Dimensioning:** Dimensions are placed in a line, end-to-end, often with the overall dimension also shown. For example, dimensions of 10mm, 20mm, 30mm are placed consecutively, and then the total 60mm is also shown.
*   **Baseline Dimensioning (Datum Dimensioning):** All dimensions are referenced from a single common datum or baseline. For example, if a part has three holes, their positions might be dimensioned as 25mm, 50mm, and 75mm from the same edge of the part.

**Preference for Accuracy:** **Baseline Dimensioning** is generally preferred for achieving higher manufacturing accuracy. This is because in chain dimensioning, there's a possibility of cumulative error. If there are slight inaccuracies in each intermediate dimension, they add up, and the final overall dimension might not be precise. Also, if one segment needs to be altered, all subsequent dimensions and the overall dimension might require recalibration. In baseline dimensioning, each feature's location is independently defined from a single reference point, minimizing the impact of individual measurement errors and making it easier to manage changes.

**Q3. What are the main elements of a dimension in a technical drawing? Briefly describe each.**

**Answer:**
The main elements of a dimension are:
*   **Dimension Line:** A thin, continuous line with arrowheads at each end, indicating the extent of the dimension. The dimension value is typically placed above this line.
*   **Extension Lines:** Thin, continuous lines extending from the object's outline to show the limits of where the dimension applies. They are perpendicular to the dimension line.
*   **Arrowheads (or Leader Symbols):** Placed at the ends of the dimension line, where they touch the extension lines. They clearly indicate the extent of the measurement.
*   **Dimension Value (or Text):** The numerical value representing the size or location of the feature.
*   **Leader Line:** A line extending from a note or dimension to the feature it refers to, often ending with an arrowhead or dot. Used for clarity when direct placement is difficult.

**Q4. How would you dimension a through hole with a diameter of 15mm in an orthographic view, assuming you are using CAD software? (Consider CO5)**

**Answer:**
In CAD, to dimension a through hole with a diameter of 15mm, you would typically:
1.  Select the "Diameter" dimensioning tool.
2.  Click on the circumference of the hole.
3.  The software will automatically detect the circle and its diameter. You would then place the dimension line and text.
4.  To indicate it's a through hole, you would usually add text like "THRU" or use a standard note. A common notation might be "Ø15 THRU". If the hole's location needs to be specified, you would use linear dimensioning tools to dimension from the center of the hole to a datum edge. The CAD software can then associate these dimensions with the geometry, allowing for updates if the geometry changes.

**Q5. Explain why dimensioning to hidden lines is generally avoided in technical drawings.**

**Answer:**
Dimensioning to hidden lines is generally avoided because it can lead to confusion and ambiguity. Hidden lines represent features that are not directly visible from the current viewing direction. Dimensioning to a hidden line implies a measurement to a feature that is obscured. It's much clearer and less error-prone to dimension to visible lines or to reference clearly defined centerlines. If a feature needs to be dimensioned, it's best practice to show that feature in a different view where it is visible, or to use a leader line to point to the hidden line feature and provide the dimension. This ensures that the drawing is as clear and easy to interpret as possible, aligning with the principle of clarity in dimensioning.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
