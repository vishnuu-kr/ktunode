---
title: "Approximate Methods of Analysis of Multi-storeyed Frames: Analysis for vertical loads-substitute frames-loading condition for maximum hogging and sagging moments in beams and maximum bending moment in columns."
subject: "STRUCTURAL ANALYSIS - II"
module: "Module 2: Approximate Methods of Analysis of Multi"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81099b"
status: "completed"
scrapedAt: "2026-05-20T18:47:08.947Z"
---
# Structural Analysis - II: Approximate Methods for Multi-storeyed Frames (Vertical Loads)

## Module 2: Approximate Methods of Analysis of Multi-storeyed Frames

### Topic: Analysis for Vertical Loads - Substitute Frames

**Learning Outcomes:**

*   Understand the need for approximate methods for analyzing multi-storeyed frames under vertical loads.
*   Explain the concept of the "substitute frame" method.
*   Determine the appropriate loading conditions for obtaining maximum hogging and sagging moments in beams.
*   Determine the appropriate loading conditions for obtaining maximum bending moments in columns.
*   Analyze a simple multi-storeyed frame for vertical loads using the substitute frame method.

---

### 1. Introduction to Multi-storeyed Frames and the Need for Approximate Methods

**Key Concepts:**

*   **Multi-storeyed Frames:** Structural systems consisting of interconnected beams and columns arranged in multiple levels. These are common in buildings and other structures.
*   **Vertical Loads:** Loads acting primarily downwards due to gravity, such as dead loads (self-weight of structural elements) and live loads (occupancy loads).
*   **Indeterminate Structure:** Multi-storeyed frames are typically statically indeterminate, meaning the number of unknown reactions and internal forces exceeds the number of available equilibrium equations.
*   **Complexity of Exact Analysis:** Analyzing multi-storeyed frames exactly (e.g., using flexibility or stiffness methods) can be computationally intensive and time-consuming, especially for larger and more complex structures. This involves solving a large number of simultaneous equations.

**Why Approximate Methods?**

Approximate methods provide a simplified approach to analyze these complex structures under vertical loads, offering a reasonable estimation of internal forces (moments, shears, axial forces) and deflections. These methods are particularly useful for:

*   **Preliminary Design:** Quickly evaluating different structural configurations and member sizes.
*   **Understanding Behavior:** Gaining insight into the load distribution and internal force patterns.
*   **Reducing Computational Effort:** Avoiding the need for complex software or extensive manual calculations in the initial stages.

---

### 2. The Substitute Frame Method

**Key Concept:**

The **Substitute Frame Method** is an approximate method used to analyze multi-storeyed frames under vertical loads. It simplifies the complex 3D or 2D frame by considering a representative **"substitute frame"** that captures the essential behavior of a specific storey or a portion of the structure.

**Principles:**

The core idea is to isolate a single storey or a panel and assume that the behavior of the beams and columns in that storey can be approximated by analyzing a simplified frame. This simplification is achieved by:

*   **Column Analogy:** Treating the columns as being fixed at the ends of the storey being analyzed (or partially fixed, depending on the specific variation).
*   **Beam-Column Interaction:** Recognizing that beams and columns interact in transferring loads.

**Variations of the Substitute Frame Method:**

There are several common approaches within the substitute frame method, each with slightly different assumptions:

*   **Portal Frame Method (for Lateral Loads):** While primarily for lateral loads, it's worth noting as a concept of simplifying frames.
*   **Cantilever Method (for Lateral Loads):** Also for lateral loads.
*   **Approximate Vertical Load Analysis:** This is the focus of our current topic. The key here is how we idealize the supports of the beams and columns within the substitute frame to account for continuity and fixity.

**Focus on Vertical Loads:**

For vertical loads, the substitute frame method aims to capture the load distribution from the floor slabs through the beams and columns. The key is to make assumptions about the support conditions of the beams and columns to facilitate analysis.

---

### 3. Analysis for Vertical Loads using Substitute Frames

**The General Approach:**

1.  **Idealization:** Select a storey or a group of storeys to analyze.
2.  **Substitute Frame Construction:**
    *   **Beams:** Consider the beams spanning between columns in the selected storey.
    *   **Columns:** Consider the columns supporting these beams and the columns above and below (or their idealized fixity).
3.  **Loading Application:** Apply the relevant vertical loads to the substitute frame.
4.  **Analysis:** Analyze the substitute frame using principles of structural mechanics (e.g., method of consistent deformations, slope-deflection method, or even simpler approximate methods if the substitute frame is further simplified).

**Important Considerations for Vertical Loads:**

*   **Load Distribution:** Vertical loads are primarily transferred from floor slabs to beams, and then from beams to columns.
*   **Continuity:** The continuity of beams and columns across different storeys influences the distribution of moments.

---

### 4. Loading Conditions for Maximum Hogging and Sagging Moments in Beams

**Key Concept:**

The distribution of loads on a continuous beam (which is what a beam in a multi-storey frame effectively is) determines the magnitude and location of hogging (negative) and sagging (positive) moments. To find the *maximum* values, specific loading patterns need to be considered.

**General Principle:**

To maximize a bending moment at a specific section, loads should be placed in a way that induces the largest possible curvature at that section.

**Specific Loading Conditions:**

Consider a typical beam in a multi-storey frame, spanning between two columns. This beam is part of a continuous structure.

*   **Maximum Sagging Moment:**
    *   **Condition:** To induce the maximum sagging moment in a beam span, the beam itself should be **fully loaded**, and the adjacent spans (if any, in the continuous frame) should be **alternately loaded** with the maximum load. This pushes the beam downwards at the center, creating a hogging moment at the supports.
    *   **Application in Substitute Frame:** For a beam in a substitute frame, this translates to applying the full floor load to that beam. If the substitute frame models multiple bays, then adjacent beams should be loaded with the maximum floor load.
    *   **Example:** For a continuous beam over three supports (A-B-C), to find the maximum sagging moment in span AB, load span AB fully and span BC with the maximum load.

*   **Maximum Hogging Moment:**
    *   **Condition:** To induce the maximum hogging moment in a beam, the spans **adjacent** to the beam under consideration should be **fully loaded**. This causes the adjacent spans to sag, pulling down the supports of the beam in question, thus creating a hogging moment in the beam. The beam itself can be unloaded or lightly loaded.
    *   **Application in Substitute Frame:** For a beam in a substitute frame, this means loading the beams in the adjacent bays/storeys with the maximum floor load and potentially leaving the beam in question unloaded or with only dead load.
    *   **Example:** For a continuous beam over three supports (A-B-C), to find the maximum hogging moment at support B, load span AB and span BC with the maximum load.

**Important Note:** The exact pattern for maximum moments in continuous beams often follows the principles of **"load and not load"** to maximize the influence at the section of interest.

---

### 5. Loading Conditions for Maximum Bending Moment in Columns

**Key Concept:**

Columns in multi-storey frames are subjected to axial loads and bending moments due to the transfer of forces from beams and slabs, as well as the continuity of the frame. The maximum bending moment in a column occurs due to the distribution of moments in the beams connected to it.

**General Principle:**

A column's bending moment is influenced by the differential moments in the beams framing into its top and bottom ends. To maximize the moment in a column, the moments in the beams on either side of the column should be maximized in a way that creates the largest shear force difference across the column.

**Loading Conditions:**

Consider a column connecting two storeys. The bending moment in this column is largely determined by the moments in the beams framing into it.

*   **Maximum Bending Moment in a Column:**
    *   **Condition:** To induce the maximum bending moment in a column, the adjacent beams should be loaded to produce the **maximum possible moments at the column face**. This typically involves loading the beams to induce maximum hogging and sagging moments in adjacent spans.
    *   **Loading Pattern:**
        *   Consider a column between floor 1 and floor 2.
        *   To get maximum moment in this column, load the beams on **floor 1** to produce maximum sagging moments (i.e., load these beams fully).
        *   Simultaneously, load the beams on **floor 2** to produce maximum hogging moments at the column face (i.e., load adjacent spans to the floor 2 beams fully).
    *   **Simplified Explanation:** Load the floor above the column to cause maximum sagging in its beams, and load the floor below the column to cause maximum hogging in its beams. This creates a large shear force variation in the column.

**Example:**

Imagine a column connecting a typical floor to the floor above. To find the maximum moment in this column:

1.  **Load the floor beams *below* the column:** Apply full load to these beams to induce maximum sagging moments in them. This will transfer hogging moments to the top of the column.
2.  **Load the floor beams *above* the column:** Apply full load to the beams on this floor to induce maximum hogging moments at the column face (by loading adjacent spans). This will transfer sagging moments to the bottom of the column.

The combination of these induced moments at the ends of the column will result in the maximum bending moment within that column.

**Important Note:** For continuous frames, the "load and not load" principle is crucial. Load a span to maximize its moment, and adjacent spans to maximize moments at the common support.

---

### 6. Practical Application: A Simple Substitute Frame Example

Let's consider a simple two-storey, two-bay frame. We'll analyze it for vertical loads using the substitute frame concept.

**Scenario:** A frame with columns C1, C2, C3 and beams B12, B23 spanning between them at Ground Floor (GF) and First Floor (FF).

**Assumptions for Substitute Frame (Simplified):**

We can simplify the analysis by considering "story columns" and "story beams." The key is how we model the continuity and fixity. A common approach is to consider the "middle column" of a multi-bay frame and its continuous beams.

Let's focus on a single bay (columns C1, C2 and beams B12 at GF and FF).

**Step 1: Identify the Substitute Frame**

Consider the columns C1 and C2 and the beams connecting them at the ground and first floor. For vertical loads, we can consider the frame as a series of continuous beams supported by columns.

**Step 2: Loading for Maximum Beam Moments**

*   **Beam at First Floor (B12-FF):**
    *   **Max Sagging Moment:** Load B12-FF fully.
    *   **Max Hogging Moment:** Load the beam on the ground floor (B12-GF) fully, and potentially load adjacent spans on the first floor to induce hogging at the ends of B12-FF.

*   **Beam at Ground Floor (B12-GF):**
    *   **Max Sagging Moment:** Load B12-GF fully.
    *   **Max Hogging Moment:** Load B12-FF fully, and potentially load adjacent spans on the ground floor.

**Step 3: Loading for Maximum Column Moments**

Consider column C1 between GF and FF.

*   **To maximize moment in C1:**
    *   Load B12-GF to induce maximum sagging at its center, which transfers hogging moments to the top of C1.
    *   Load B12-FF to induce maximum hogging moments at the face of C1 (by loading adjacent spans on the first floor).

**Step 4: Analysis of the Substitute Frame**

A common simplification for vertical load analysis is to use the **"equivalent load"** or **"modified load"** on the beams and columns. For instance, we can assume that 50% of the load on a beam is transferred to the columns at its ends.

*   **Simplified Analysis (e.g., using Shear Force and Moment Diagrams):**
    *   Assume a simply supported beam for calculating initial moments.
    *   Then, apply continuity corrections using approximate methods.

**A More Refined Substitute Frame Approach:**

Consider a single bay (columns C1, C2 and beams B12-GF, B12-FF). Assume the columns are fixed at their base (ground level) and at the top of the highest floor.

*   **Loading for Max Sagging in B12-FF:** Load B12-FF with uniform load (w). Assume B12-GF is also loaded to achieve the desired effect on C1.
*   **Loading for Max Hogging in B12-FF:** Load B12-GF fully (w) and adjacent spans on FF.

**Using a Specific Approximate Method (e.g., Iterative Methods):**

More advanced substitute frame methods often involve distributing moments iteratively. However, for basic understanding of loading conditions, the principles outlined above are fundamental.

**Example Calculation Concept (Simplified):**

Let's consider a single span beam AB of length L, loaded with a uniform load 'w'.

*   **Simply supported moment:** $M_{AB(ss)} = wl^2/8$ (sagging)
*   **Continuous beam moments (approximate):** In a continuous beam, hogging moments occur at supports. For a uniformly loaded continuous beam over several spans, the approximate hogging moment at interior supports is often around $wl^2/12$, and the sagging moment in the center of spans is $wl^2/24$.

**To get the maximum sagging moment in a span:** Load that span and alternate spans.
**To get the maximum hogging moment at a support:** Load the adjacent spans.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain why approximate methods are necessary for the analysis of multi-storeyed frames under vertical loads.

**Question 2:**
Describe the basic principle of the substitute frame method for analyzing multi-storey frames for vertical loads.

**Question 3:**
For a continuous beam in a multi-storey frame, what loading condition will produce the maximum sagging moment in the mid-span of that beam?
    *   a) Load only that span.
    *   b) Load that span and alternate spans.
    *   c) Load the adjacent spans.
    *   d) Load all spans.

**Question 4:**
For a continuous beam in a multi-storey frame, what loading condition will produce the maximum hogging moment at a support?
    *   a) Load only that span.
    *   b) Load that span and alternate spans.
    *   c) Load the adjacent spans.
    *   d) Load all spans.

**Question 5:**
Consider a column connecting two floors in a multi-storey frame. What loading on the adjacent beams would lead to the maximum bending moment in that column?

**Question 6:**
Illustrate with a sketch the loading pattern for maximum sagging moment in the middle span of a three-span continuous beam.

**Question 7:**
Illustrate with a sketch the loading pattern for maximum hogging moment at the middle support of a three-span continuous beam.

---

### Answers to Practice Questions

**Answer 1:**
Approximate methods are necessary because multi-storeyed frames are typically complex, indeterminate structures. Exact analysis requires significant computational effort and time, especially for large structures. Approximate methods simplify the analysis to provide reasonable estimates of internal forces and deflections, which are crucial for preliminary design and understanding structural behavior.

**Answer 2:**
The substitute frame method simplifies a complex multi-storey frame into a series of idealized "substitute frames," often representing a single storey or a bay. This simplification allows for easier analysis by making assumptions about the fixity of columns and by focusing on the load transfer mechanisms within a storey. The goal is to capture the essential load distribution and moment transfer characteristics.

**Answer 3:**
**b) Load that span and alternate spans.**
This loading pattern maximizes the downward deflection in the span of interest, leading to the largest positive (sagging) moment.

**Answer 4:**
**c) Load the adjacent spans.**
Loading the spans adjacent to a support causes them to sag, pulling down the support of the beam in question, thereby inducing a negative (hogging) moment in that beam at the support.

**Answer 5:**
To induce the maximum bending moment in a column, the adjacent beams should be loaded to produce maximum moments at the column face. This generally involves:
*   Loading the beams on the floor *below* the column to create maximum sagging moments in them (transferring hogging moments to the top of the column).
*   Loading the beams on the floor *above* the column to create maximum hogging moments at the column face (by loading adjacent spans), which transfers sagging moments to the bottom of the column.

**Answer 6:**
*(Sketch would show a three-span beam, say A-B-C-D. Span B-C is loaded, while spans A-B and C-D are unloaded or lightly loaded.)*

```
    A-------B-------C-------D
    |~~~~~~~|       |~~~~~~~|  <-- Loaded Spans
    |       |       |       |
```

**Answer 7:**
*(Sketch would show a three-span beam, say A-B-C-D. Spans A-B and C-D are loaded, while span B-C is unloaded or lightly loaded. This causes hogging at support B and C.)*

```
    A-------B-------C-------D
    |~~~~~~~|       |~~~~~~~|  <-- Loaded Spans
    |       |       |       |
```

---

### 8. Important Points to Remember

*   **Continuity is Key:** Approximate methods for vertical loads heavily rely on the concept of beam and column continuity across different levels.
*   **Load and Not Load:** The principle of strategically loading and not loading spans is fundamental for achieving maximum hogging and sagging moments in beams and moments in columns.
*   **Substitute Frame is an Idealization:** The accuracy of the results depends on the validity of the assumptions made in creating the substitute frame.
*   **Focus on Load Paths:** Understand how vertical loads are transferred from slabs to beams and then to columns.
*   **Maximum Values:** The goal is to identify loading patterns that maximize specific internal forces at critical locations.
*   **Column Moment Origin:** Column moments in multi-storey frames under vertical loads are primarily due to the transfer of beam end moments.

---
