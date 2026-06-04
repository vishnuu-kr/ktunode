---
title: "Network representation – Activity on Arrow (AoA) or Activity on Node (AoN) Diagram."
subject: "CONSTRUCTION PROJECT MANAGEMENT"
module: "Module 1: Construction projects, life cycle of a project – phases in a project."
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba81123f"
status: "completed"
scrapedAt: "2026-05-20T18:52:33.414Z"
---
# Construction Project Management: Module 1 - Network Representation

## Topic: Network Representation – Activity on Arrow (AoA) or Activity on Node (AoN) Diagram

---

### **1. Introduction to Network Representation**

Network representation is a crucial tool in construction project management for visualizing and analyzing the sequence of activities required to complete a project. It helps in understanding project dependencies, identifying critical paths, and managing project timelines.

**Key Concepts:**

*   **Activities:** Specific tasks or operations that must be performed to complete the project.
*   **Dependencies:** The relationships between activities, indicating that one activity must be completed before another can begin.
*   **Milestone:** A significant point or event in the project timeline, often signifying the completion of a major phase or deliverable.
*   **Network Diagram:** A graphical representation of project activities and their interdependencies.

---

### **2. Purpose and Importance of Network Diagrams**

Network diagrams serve several vital purposes in construction project management:

*   **Activity Sequencing:** Clearly illustrates the order in which activities should be performed.
*   **Identifying Dependencies:** Highlights the relationships between tasks, showing which activities rely on the completion of others.
*   **Critical Path Identification:** Helps in determining the longest sequence of activities, which dictates the shortest possible project duration. Any delay in a critical path activity will delay the entire project.
*   **Resource Allocation:** Assists in planning and allocating resources (labor, equipment, materials) by understanding when specific activities require them.
*   **Progress Monitoring:** Provides a baseline for tracking project progress and identifying deviations from the planned schedule.
*   **Communication Tool:** Facilitates clear communication among project team members, stakeholders, and clients regarding the project's scope and timeline.
*   **Risk Assessment:** Helps in identifying potential bottlenecks and risks associated with activity sequencing and durations.

---

### **3. Types of Network Diagrams**

There are two primary types of network diagrams used in project management:

#### **3.1. Activity on Arrow (AoA) Diagram**

In an AoA diagram, **activities are represented by arrows**, and **nodes (circles or events) represent the start or completion of activities**.

**Key Features of AoA:**

*   **Arrows represent activities:** The length and direction of the arrow signify the activity and its progression.
*   **Nodes represent events:** Nodes signify the completion of one or more activities and the start of subsequent activities.
*   **Dummies:** Used to represent logical dependencies without consuming time or resources. They are typically represented by dashed arrows.

**Advantages of AoA:**

*   Intuitive for understanding the flow of work.
*   Historically, it was the first method developed.

**Disadvantages of AoA:**

*   Can become complex and difficult to draw for large projects with many interdependencies.
*   The use of dummies can sometimes be confusing.
*   Difficult to update or modify if the project scope changes.
*   Cannot easily represent parallel activities starting and ending at the same node.

**Example of AoA:**

Consider a simple house construction project:

*   **Activity A: Foundation Laying**
*   **Activity B: Wall Construction**
*   **Activity C: Roof Installation**
*   **Activity D: Interior Finishing**

In an AoA diagram:

*   An arrow labeled "Foundation Laying" starts from an initial node (Project Start).
*   The end node of "Foundation Laying" connects to the start node of an arrow labeled "Wall Construction."
*   The end node of "Wall Construction" connects to the start node of an arrow labeled "Roof Installation."
*   The end node of "Roof Installation" connects to the start node of an arrow labeled "Interior Finishing."
*   The end node of "Interior Finishing" connects to a final node (Project End).

```
[START] --(A: Foundation Laying)--> [Event 1] --(B: Wall Construction)--> [Event 2] --(C: Roof Installation)--> [Event 3] --(D: Interior Finishing)--> [END]
```

#### **3.2. Activity on Node (AoN) Diagram (Also known as Precedence Diagramming Method - PDM)**

In an AoN diagram, **activities are represented by nodes (boxes or circles)**, and **arrows (or connecting lines) represent the dependencies or relationships between activities**.

**Key Features of AoN:**

*   **Nodes represent activities:** Each node contains the activity name, duration, and possibly other information.
*   **Arrows represent dependencies:** Arrows show the logical connections and the type of relationship (e.g., Finish-to-Start, Start-to-Start).

**Types of Precedence Relationships in AoN:**

*   **Finish-to-Start (FS):** The most common type. Activity B cannot start until Activity A is finished.
    *   *Example:* Wall construction cannot start until foundation laying is complete.
*   **Start-to-Start (SS):** Activity B cannot start until Activity A has started.
    *   *Example:* Interior painting can start when drywall installation begins.
*   **Finish-to-Finish (FF):** Activity B cannot finish until Activity A has finished.
    *   *Example:* The final inspection cannot finish until all punch list items are completed.
*   **Start-to-Finish (SF):** Activity B cannot finish until Activity A has started. This is the least common and often impractical.
    *   *Example:* A new system cannot be put into operation until the old system has been shut down.

**Advantages of AoN:**

*   More intuitive and easier to understand, especially for complex projects.
*   Can represent all four types of precedence relationships, offering greater flexibility.
*   Easier to create and update using project management software.
*   Better at representing parallel activities.

**Disadvantages of AoN:**

*   Can sometimes obscure the overall flow of the project compared to AoA if not well-drawn.

**Example of AoN:**

Using the same house construction example:

*   **Activity A: Foundation Laying**
*   **Activity B: Wall Construction**
*   **Activity C: Roof Installation**
*   **Activity D: Interior Finishing**

In an AoN diagram:

*   A node labeled "Foundation Laying" exists.
*   An arrow from "Foundation Laying" to "Wall Construction" indicates a Finish-to-Start relationship (Wall Construction starts after Foundation Laying finishes).
*   An arrow from "Wall Construction" to "Roof Installation" indicates a Finish-to-Start relationship.
*   An arrow from "Roof Installation" to "Interior Finishing" indicates a Finish-to-Start relationship.

```
+----------------------+     +----------------------+     +----------------------+     +----------------------+
| A: Foundation Laying | --> | B: Wall Construction | --> | C: Roof Installation | --> | D: Interior Finishing|
+----------------------+     +----------------------+     +----------------------+     +----------------------+
          (FS)                       (FS)                       (FS)
```

---

### **4. Key Concepts and Terminology**

*   **Event:** A point in time signifying the completion of one or more activities and the start of others. In AoA, events are nodes; in AoN, they are implicit at the start/end of activities.
*   **Duration:** The estimated time required to complete an activity.
*   **Successor Activity:** An activity that can only begin after a predecessor activity is completed.
*   **Predecessor Activity:** An activity that must be completed before a successor activity can begin.
*   **Network Logic:** The defined sequence and dependencies between activities.
*   **Critical Path Method (CPM):** A project management technique used to identify the sequence of scheduled activities that determine the project's shortest possible duration.
*   **Early Start (ES):** The earliest possible time an activity can begin.
*   **Early Finish (EF):** The earliest possible time an activity can be completed (ES + Duration).
*   **Late Start (LS):** The latest possible time an activity can begin without delaying the project's completion.
*   **Late Finish (LF):** The latest possible time an activity can be completed without delaying the project's completion (LS + Duration).
*   **Float (or Slack):** The amount of time an activity can be delayed without affecting the project's overall completion date.
    *   **Total Float:** The amount of time an activity can be delayed without affecting the project's completion date. (LF - EF or LS - ES)
    *   **Free Float:** The amount of time an activity can be delayed without affecting the early start of its immediate successor.

---

### **5. Creating Network Diagrams**

The process of creating network diagrams generally involves these steps:

1.  **Define Activities:** Break down the project into manageable activities.
2.  **Sequence Activities:** Determine the logical order and dependencies between activities.
3.  **Estimate Durations:** Assign an estimated time to complete each activity.
4.  **Draw the Diagram:** Create the visual representation using either AoA or AoN conventions.
5.  **Calculate Times (Forward and Backward Pass):**
    *   **Forward Pass:** Calculates the Early Start (ES) and Early Finish (EF) for each activity.
    *   **Backward Pass:** Calculates the Late Finish (LF) and Late Start (LS) for each activity.
6.  **Identify the Critical Path:** Activities with zero float (LS = ES or LF = EF) lie on the critical path.

---

### **6. Practice Questions and Exercises**

**Question 1:**

Which type of network diagram represents activities as arrows and events as nodes?

**Answer:** Activity on Arrow (AoA)

**Question 2:**

List the four types of precedence relationships used in Activity on Node (AoN) diagrams.

**Answer:**
*   Finish-to-Start (FS)
*   Start-to-Start (SS)
*   Finish-to-Finish (FF)
*   Start-to-Finish (SF)

**Question 3:**

Consider the following activities and their dependencies:

| Activity | Description          | Predecessors | Duration (Days) |
| :------- | :------------------- | :----------- | :-------------- |
| A        | Site Preparation     | -            | 5               |
| B        | Foundation Pouring   | A            | 7               |
| C        | Framing              | B            | 10              |
| D        | Roofing              | C            | 6               |
| E        | Electrical Rough-in  | C            | 8               |
| F        | Plumbing Rough-in    | C            | 7               |
| G        | Drywall Installation | D, E, F      | 5               |

**(a) Draw an Activity on Node (AoN) diagram for this project, assuming all dependencies are Finish-to-Start (FS).**

**(b) Identify the critical path and the total project duration.**

**Answer:**

**(a) AoN Diagram (Conceptual Representation):**

```
+-------------------+     +--------------------+     +-------------------+     +-------------------+     +---------------------+     +---------------------+     +-----------------------+
| A: Site Prep (5)  | --> | B: Foundation (7)  | --> | C: Framing (10)   | --> | D: Roofing (6)    | --> | G: Drywall (5)      | <-- | E: Elec (8)         | <-- | G: Drywall (5)      | <-- | F: Plumbing (7)     | <-- | G: Drywall (5)      |
+-------------------+     +--------------------+     +-------------------+     +-------------------+     +-----------------------+     +-----------------------+     +-----------------------+
                                                                                                                ^                                                         ^
                                                                                                                |---------------------------------------------------------|
```
*Note: This is a textual representation. A proper diagram would show nodes for each activity and arrows indicating FS relationships.*

**(b) Critical Path and Project Duration Calculation:**

We need to perform a forward pass to calculate early start (ES) and early finish (EF) for each activity. Assume Project Start is Day 0.

*   **Activity A:**
    *   ES = 0
    *   EF = 0 + 5 = 5
*   **Activity B:**
    *   Predecessor: A (EF=5)
    *   ES = 5
    *   EF = 5 + 7 = 12
*   **Activity C:**
    *   Predecessor: B (EF=12)
    *   ES = 12
    *   EF = 12 + 10 = 22
*   **Activity D:**
    *   Predecessor: C (EF=22)
    *   ES = 22
    *   EF = 22 + 6 = 28
*   **Activity E:**
    *   Predecessor: C (EF=22)
    *   ES = 22
    *   EF = 22 + 8 = 30
*   **Activity F:**
    *   Predecessor: C (EF=22)
    *   ES = 22
    *   EF = 22 + 7 = 29
*   **Activity G:**
    *   Predecessors: D (EF=28), E (EF=30), F (EF=29). The latest EF determines the start.
    *   ES = Max(28, 30, 29) = 30
    *   EF = 30 + 5 = 35

**Total Project Duration = 35 Days**

To find the critical path, we'd typically perform a backward pass to calculate late start (LS) and late finish (LF) and then identify activities with zero float. However, for this simple example, we can observe the paths:

*   A -> B -> C -> D -> G: 5 + 7 + 10 + 6 + 5 = 33 days
*   A -> B -> C -> E -> G: 5 + 7 + 10 + 8 + 5 = 35 days
*   A -> B -> C -> F -> G: 5 + 7 + 10 + 7 + 5 = 34 days

The longest path is A -> B -> C -> E -> G.

**Critical Path: A -> B -> C -> E -> G**
**Total Project Duration: 35 Days**

---

### **7. Important Points to Remember**

*   **AoN is generally preferred** for its flexibility and ease of use in modern project management software.
*   **Accurate activity definition and dependency identification** are critical for the effectiveness of network diagrams.
*   **The critical path determines the minimum project duration.** Any delay on the critical path directly impacts the project end date.
*   **Float (slack) provides flexibility** for managing non-critical activities.
*   Network diagrams are **dynamic tools** and should be updated as project conditions change.
*   Understanding **different precedence relationships** in AoN allows for more precise scheduling.

---
This concludes the study notes for Network Representation in Construction Project Management. Remember to practice drawing these diagrams and calculating critical paths to solidify your understanding.
