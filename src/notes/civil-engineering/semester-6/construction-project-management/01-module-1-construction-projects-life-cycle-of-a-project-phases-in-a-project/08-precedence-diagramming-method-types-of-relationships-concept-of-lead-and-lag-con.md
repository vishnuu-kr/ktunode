---
title: "Precedence Diagramming Method – types of relationships – concept of lead and lag. Concept only"
subject: "CONSTRUCTION PROJECT MANAGEMENT"
module: "Module 1: Construction projects, life cycle of a project – phases in a project."
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811241"
status: "completed"
scrapedAt: "2026-05-20T18:52:35.141Z"
---
# CONSTRUCTION PROJECT MANAGEMENT

## Module 1: Construction Projects, Life Cycle of a Project – Phases in a Project

### Topic: Precedence Diagramming Method (PDM) – Types of Relationships – Concept of Lead and Lag

This module introduces the fundamental concepts of construction projects and their life cycles. This specific topic delves into the **Precedence Diagramming Method (PDM)**, a crucial tool for scheduling and understanding the logical flow of activities within a project. We will explore the different types of relationships that connect these activities and the concepts of **lead time** and **lag time** that influence the project timeline.

---

### 1. Precedence Diagramming Method (PDM) - Concept

**What is PDM?**

The Precedence Diagramming Method (PDM) is a project scheduling technique used to visually represent the logical sequence of project activities. It is a network diagramming method where activities are represented by nodes (boxes or circles) and their dependencies are shown by arrows connecting these nodes. PDM is a successor to Arrow Diagramming Method (ADM) and offers more flexibility in representing relationships.

**Key Concepts:**

*   **Activities:** Individual tasks or work items that need to be completed within the project. Each activity has a duration.
*   **Nodes:** Represent individual activities in the diagram.
*   **Arrows:** Represent the logical dependencies or relationships between activities.
*   **Sequence:** The order in which activities must be performed.
*   **Network Diagram:** The visual representation of activities and their sequences.

**Why is PDM important?**

*   **Visualizes Project Flow:** Clearly illustrates how tasks relate to each other.
*   **Identifies Dependencies:** Highlights which activities must be completed before others can start.
*   **Facilitates Critical Path Identification:** Helps determine the sequence of activities that dictates the project's shortest possible duration.
*   **Supports Resource Allocation:** Understanding dependencies aids in planning resource assignments.
*   **Improves Communication:** Provides a clear and concise way to communicate the project schedule to stakeholders.

---

### 2. Types of Relationships in PDM

PDM defines four fundamental types of logical relationships that dictate the sequence of activities:

*   **Finish-to-Start (FS):**
    *   **Concept:** The most common type of relationship. An activity cannot start until its predecessor activity has finished.
    *   **Description:** Activity B cannot start until Activity A is finished.
    *   **Visual Representation:**
        ```
        A ----> B
        (Finish) (Start)
        ```
    *   **Example:**
        *   Activity A: Pouring Concrete (Foundation)
        *   Activity B: Curing Concrete (Foundation)
        *   *The foundation cannot be cured until the concrete has been poured.*

*   **Start-to-Start (SS):**
    *   **Concept:** An activity cannot start until its predecessor activity has also started.
    *   **Description:** Activity B cannot start until Activity A has started.
    *   **Visual Representation:**
        ```
        A ----> B
        (Start) (Start)
        ```
    *   **Example:**
        *   Activity A: Excavation for Foundation
        *   Activity B: Site Clearing
        *   *You can start clearing the site for the next section while excavation for the first section is still in progress.*

*   **Finish-to-Finish (FF):**
    *   **Concept:** An activity cannot finish until its predecessor activity has also finished.
    *   **Description:** Activity B cannot finish until Activity A has finished.
    *   **Visual Representation:**
        ```
        A ----> B
        (Finish) (Finish)
        ```
    *   **Example:**
        *   Activity A: Painting Walls (Room 1)
        *   Activity B: Cleaning Walls (Room 1)
        *   *You can't finish cleaning the walls of Room 1 until you've finished painting them.*

*   **Start-to-Finish (SF):**
    *   **Concept:** An activity cannot finish until its predecessor activity has started. This is the least common type of relationship.
    *   **Description:** Activity B cannot finish until Activity A has started.
    *   **Visual Representation:**
        ```
        A ----> B
        (Start) (Finish)
        ```
    *   **Example:**
        *   Activity A: System Testing (Phase 1)
        *   Activity B: Transition to Production (Phase 1)
        *   *The transition to production for Phase 1 cannot be completed until the system testing for Phase 1 has begun.* (This example might be more common in IT projects, but illustrates the concept). In construction, a more practical example might be:
        *   Activity A: Commissioning of Main Electrical Panel
        *   Activity B: Removal of Temporary Power Feed
        *   *The temporary power feed can only be removed once the main electrical panel is commissioned and operational.*

**Important Note:** While all four relationships exist, **Finish-to-Start (FS)** is by far the most prevalent in construction projects.

---

### 3. Concept of Lead and Lag Time

**What are Lead and Lag Times?**

Lead and lag times are adjustments to the logical relationships between activities that influence the earliest possible start or finish dates of successor activities.

*   **Lead Time:**
    *   **Concept:** A lead time allows a successor activity to begin *before* its predecessor activity is completed. It's essentially an overlap between activities.
    *   **Description:** A negative duration is applied to a relationship.
    *   **Visual Representation (FS with Lead):**
        ```
        A -------> B
        (Finish)   (Start)
         |---------|  <- Lead Time (e.g., 2 days)
        ```
    *   **Impact:** Accelerates the project schedule by allowing parallel work.
    *   **Example (FS with Lead):**
        *   Activity A: Installing Drywall in a Room
        *   Activity B: Priming the Drywall in the Same Room
        *   *You can start priming a section of drywall once it's installed, even if other sections are still being installed. A 2-day lead might mean you can start priming 2 days before the drywall installation for the entire room is finished.*

*   **Lag Time:**
    *   **Concept:** A lag time is a mandatory delay between the completion of a predecessor activity and the start of a successor activity.
    *   **Description:** A positive duration is added to a relationship.
    *   **Visual Representation (FS with Lag):**
        ```
        A ---------> B
        (Finish)    (Start)
                     |------| <- Lag Time (e.g., 3 days)
        ```
    *   **Impact:** Delays the start of the successor activity, potentially extending the project schedule.
    *   **Example (FS with Lag):**
        *   Activity A: Pouring Concrete for a Slab
        *   Activity B: Installing Rebar for the Next Lift
        *   *After pouring the concrete, you need to wait for it to cure to a certain strength before you can start installing rebar for the next level. A 3-day lag might be required for proper curing.*

**Relationship between Relationships and Lead/Lag:**

Lead and lag times can be applied to any of the four relationship types.

*   **FS + Lead:** B starts *before* A finishes.
*   **FS + Lag:** B starts *after* A finishes.
*   **SS + Lead:** B starts *before* A starts (this is unusual but possible, implying B can start even earlier than A).
*   **SS + Lag:** B starts *after* A starts.
*   **FF + Lead:** B finishes *before* A finishes.
*   **FF + Lag:** B finishes *after* A finishes.
*   **SF + Lead:** B finishes *before* A starts (this is highly unusual and often indicates a logic error).
*   **SF + Lag:** B finishes *after* A starts.

**Important Point to Remember:**

*   Lead time is a **negative duration**.
*   Lag time is a **positive duration**.
*   The sum of Lead/Lag and the durations of the preceding and succeeding activities determines the earliest start/finish dates of the successor activity.

---

### Learning Outcome Check:

*   **Understanding of PDM:** We've defined PDM and its importance in project scheduling.
*   **Types of Relationships:** All four types (FS, SS, FF, SF) have been explained with definitions and examples.
*   **Concept of Lead and Lag:** Lead time (overlap/acceleration) and lag time (mandatory delay) have been explained with their impact and how they modify relationships.

---

### Practice Questions & Exercises

**Question 1:**

Describe the Finish-to-Start (FS) relationship in PDM and provide a construction-related example.

**Answer 1:**
The Finish-to-Start (FS) relationship is the most common type where an activity cannot begin until its predecessor activity has been completed.
*   **Example:** Pouring concrete for a footing (predecessor) must be finished before backfilling can begin (successor).

**Question 2:**

What is the difference between a lead time and a lag time?

**Answer 2:**
*   **Lead Time:** Allows a successor activity to start *before* its predecessor finishes (an overlap). It is represented by a negative duration.
*   **Lag Time:** Is a mandatory delay required *after* a predecessor activity finishes before the successor activity can start. It is represented by a positive duration.

**Question 3:**

Identify the type of relationship in each of the following scenarios:

a) Installation of electrical wiring can start only after the framing of the walls is completed.
b) The inspection of a completed building can begin only after the final punch list items have been addressed.
c) The interior painting can start on the second floor as soon as the first floor's painting has begun.
d) The removal of temporary scaffolding can only be completed after the exterior cladding is fully installed.

**Answer 3:**

a) **Finish-to-Start (FS)**
b) **Finish-to-Finish (FF)** (Although "inspection" could be considered a single event, if it's a process, it can't finish until the punch list is done). A more accurate FF example might be: "Final cleaning of a room can finish after the furniture installation is finished." However, the given example fits FF reasonably well in the context of a finalization process.
c) **Start-to-Start (SS)**
d) **Finish-to-Finish (FF)**

**Question 4:**

Consider two activities: Activity P (Prepare Site) and Activity S (Start Excavation). If Activity S can begin 2 days *after* Activity P is completed, what type of relationship and what time adjustment is needed?

**Answer 4:**
*   **Relationship Type:** Finish-to-Start (FS)
*   **Time Adjustment:** Lag time of 2 days (FS + 2 days lag).

**Question 5:**

Consider two activities: Activity C (Pour Concrete) and Activity R (Install Rebar for next pour). If Activity R can start 3 days *before* Activity C is fully completed, what type of relationship and what time adjustment is needed?

**Answer 5:**
*   **Relationship Type:** Finish-to-Start (FS)
*   **Time Adjustment:** Lead time of 3 days (FS - 3 days lead).

---

### Important Points to Remember:

*   **PDM is a visual tool:** It helps to understand the logical flow of tasks.
*   **FS is the most common relationship:** In construction, most tasks have a predecessor that must finish before they can start.
*   **Lead time = Overlap/Acceleration:** Allows parallel work.
*   **Lag time = Delay:** A mandatory waiting period.
*   **Understanding these concepts is crucial for accurate project scheduling and critical path analysis.**

---
This concludes the notes for the Precedence Diagramming Method, its relationships, and the concepts of lead and lag times. These are foundational concepts for further study in construction project management.
