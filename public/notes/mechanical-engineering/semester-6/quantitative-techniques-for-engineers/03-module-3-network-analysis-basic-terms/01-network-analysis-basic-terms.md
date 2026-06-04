---
title: "Network analysis – Basic terms"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 3: Network analysis – Basic terms"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a75"
status: "completed"
scrapedAt: "2026-05-20T18:07:33.925Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 3: Network Analysis – Basic Terms

---

### Introduction to Network Analysis

Network analysis is a powerful set of quantitative techniques used for planning, scheduling, and controlling projects. It provides a visual representation of a project, showing the sequence of activities and their interdependencies. This module introduces the fundamental concepts and terminology used in network analysis, which is crucial for understanding more advanced techniques like PERT and CPM.

**Relevance to Course Outcomes:**

*   **CO3: To sequence and schedule jobs and projects (Knowledge Level: K3)** - This module directly addresses the foundational concepts needed to sequence and schedule project activities. Understanding basic network terms is the first step towards applying project scheduling methodologies.

---

### 1. Basic Concepts and Definitions

Network analysis, often referred to as project management or project planning, involves representing a project as a network diagram. The key elements of this network are activities and events.

#### 1.1 Project

A **project** is a temporary endeavor undertaken to create a unique product, service, or result. Projects have a defined beginning and end, and they involve a series of interdependent activities.

**Example:** Building a bridge, developing a new software application, organizing an event.

#### 1.2 Activity

An **activity** is a specific task or operation that must be performed as part of a project. Activities consume time and resources. They are the building blocks of a project network.

**Paneerselvam R. (2023), Chapter 12: Network Analysis:** Defines an activity as a task that consumes time and resources. It is the fundamental unit of work in a project network.

**Taha (2019), Chapter 14: Network-Flow Models:** While Taha's focus is broader, the concept of an activity can be seen as a step or process within a larger flow.

**Characteristics of Activities:**

*   **Start and End:** Each activity has a defined start and end.
*   **Duration:** Activities take a certain amount of time to complete.
*   **Resources:** Activities typically require resources (labor, materials, equipment).
*   **Predecessors and Successors:** Activities can depend on the completion of other activities (predecessors) and can enable the start of other activities (successors).

#### 1.3 Event (or Milestone)

An **event** is a point in time that signifies the completion of one or more activities and/or the beginning of new activities. Events do not consume time or resources; they are simply markers in the project timeline.

**Paneerselvam R. (2023), Chapter 12:** Defines an event as a significant point in time in the progress of a project, marking the start or completion of one or more activities.

**Taha (2019), Chapter 14:** In network flow, nodes often represent points where flow transitions, similar to events in project networks.

**Characteristics of Events:**

*   **Zero Duration:** Events occur instantaneously.
*   **Start Event:** The beginning of the project.
*   **End Event:** The completion of the project.
*   **Intermediate Events:** Mark the completion of intermediate activities.

#### 1.4 Network Diagram

A **network diagram** is a graphical representation of the project activities and their interdependencies. It visually depicts the flow of work from the start of the project to its completion.

**Two common types of network diagrams are:**

*   **Activity-on-Arrow (AOA) Diagram:** Activities are represented by arrows, and events are represented by nodes (circles or rectangles).
*   **Activity-on-Node (AON) Diagram (or Precedence Diagram):** Activities are represented by nodes, and arrows indicate the dependencies between them.

**Hillier & Lieberman (2017), Chapter 12: Network Analysis for Project Management:** Provides detailed explanations and examples of both AOA and AON diagrams, highlighting their advantages and disadvantages.

---

### 2. Activity-on-Arrow (AOA) Diagramming

In AOA diagrams, arrows represent activities, and nodes represent events.

#### 2.1 Key Elements of AOA Diagrams

*   **Arrows:** Represent activities. The tail of the arrow represents the start of the activity, and the head represents its completion. An arrow is labeled with the activity's name or code and its duration.
*   **Nodes (Circles/Rectangles):** Represent events. Each node signifies the completion of the activities leading into it and the start of activities leaving it. Nodes are typically numbered.
*   **Start Event:** A node from which only outgoing arrows originate.
*   **End Event:** A node into which only incoming arrows terminate.

#### 2.2 Rules for Constructing AOA Diagrams

1.  **Uniqueness of Events:** Each activity must be uniquely identified by its start and end events. Two activities cannot have the same start and end events.
2.  **Activity Representation:** An activity is represented by an arrow.
3.  **Event Representation:** An event is represented by a node. The start event is usually labeled '1'.
4.  **Dependency Representation:** An arrow connecting two events represents an activity.
5.  **No Cycles:** The network should not contain any cycles (a path that starts and ends at the same event).
6.  **Divergence and Convergence:** An event can have multiple outgoing arrows (representing multiple activities starting simultaneously) and multiple incoming arrows (representing multiple activities that must be completed before a new activity can start).

#### 2.3 Dummy Activities

A **dummy activity** is an artificial activity inserted into an AOA network to maintain the logical relationships between activities or to satisfy the uniqueness rule (rule 2). Dummy activities have zero duration and do not consume resources. They are typically represented by a dashed arrow.

**When are dummy activities needed?**

*   **To avoid ambiguity:** When two activities share the same predecessor event but have different successor events, a dummy activity might be needed.
*   **To maintain uniqueness:** If two activities have the same start and end events, a dummy activity is required to differentiate them.
*   **To represent dependencies where no work is done:** If activity C depends on the completion of activity A but not on activity B, and B also precedes C, a dummy activity might be used to show that C depends on A's completion.

**Example:**

Consider three activities: A, B, and C.
*   A precedes B.
*   A precedes C.

If we represent this in AOA:
*   Event 1 -> Activity A -> Event 2
*   Event 2 -> Activity B -> Event 3
*   Event 2 -> Activity C -> Event 4

This is fine. However, if:
*   A precedes B
*   A precedes C
*   B precedes C

In AOA, if we draw:
*   Event 1 -> Activity A -> Event 2
*   Event 2 -> Activity B -> Event 3
*   Event 2 -> Activity C -> Event 3  <-- **Problem:** Activities B and C share the same start (Event 2) and end (Event 3) events, violating uniqueness.

**Solution:** Introduce a dummy activity.
*   Event 1 -> Activity A -> Event 2
*   Event 2 -> Activity B -> Event 3
*   Event 2 -> Dummy Activity -> Event 4
*   Event 4 -> Activity C -> Event 5  <-- Now C uniquely depends on Event 4 (completion of Dummy).

This example illustrates how dummy activities are used to maintain logical flow and uniqueness.

**Paneerselvam R. (2023), Chapter 12:** Provides several illustrative examples of when and how to use dummy activities in AOA diagrams, particularly addressing the uniqueness rule.

**Hillier & Lieberman (2017), Chapter 12:** Also dedicates sections to the construction of AOA diagrams and the proper use of dummy activities.

---

### 3. Activity-on-Node (AON) Diagramming (Precedence Diagramming Method - PDM)

AON diagrams are more commonly used in modern project management software due to their simpler construction and representation of dependencies. In AON, activities are nodes, and arrows represent dependencies.

#### 3.1 Key Elements of AON Diagrams

*   **Nodes (Rectangles/Boxes):** Represent activities. Each node typically contains the activity name, duration, and potentially other information like start and finish dates.
*   **Arrows:** Represent the precedence relationships (dependencies) between activities. An arrow from Activity X to Activity Y means that Activity Y cannot start until Activity X is completed (or reaches a certain stage).

#### 3.2 Types of Precedence Relationships (Links)

PDM allows for more flexible relationships beyond simple finish-to-start.

*   **Finish-to-Start (FS):** Activity Y cannot start until Activity X finishes. This is the most common type of relationship.
    *   *Example:* Pouring concrete (Activity X) must finish before framing walls (Activity Y) can start.
*   **Start-to-Start (SS):** Activity Y cannot start until Activity X starts.
    *   *Example:* Writing report sections (Activity Y) can start only after the main report writing (Activity X) begins. Often there's a lag.
*   **Finish-to-Finish (FF):** Activity Y cannot finish until Activity X finishes.
    *   *Example:* Testing software modules (Activity Y) can finish only after the main code integration (Activity X) finishes.
*   **Start-to-Finish (SF):** Activity Y cannot finish until Activity X starts. This is the least common and often the most complex to manage.
    *   *Example:* A manager's presentation (Activity Y) cannot be finalized until the preliminary report is started by the team (Activity X).

**Paneerselvam R. (2023), Chapter 12:** Covers the PDM and its various link types with examples.

**Hillier & Lieberman (2017), Chapter 12:** Also discusses PDM and its various link types, providing a good comparative overview with AOA.

#### 3.3 Advantages of AON over AOA

*   **Simpler Construction:** Generally easier to draw and understand.
*   **No Dummy Activities:** Eliminates the need for dummy activities, simplifying the network.
*   **More Relationship Types:** Supports various dependency types (FS, SS, FF, SF), providing greater flexibility in modeling project logic.
*   **Better Software Compatibility:** Most project management software uses PDM as its underlying logic.

---

### 4. Key Terminology and Concepts for Network Analysis

Understanding these terms is crucial for working with PERT and CPM.

#### 4.1 Critical Path

The **critical path** is the longest sequence of activities in a project network that determines the shortest possible project completion time. Any delay in an activity on the critical path will directly delay the entire project.

**Paneerselvam R. (2023), Chapter 12:** Dedicates significant attention to identifying the critical path using forward and backward pass calculations.

**Taha (2019), Chapter 14:** While Taha's focus is on flows, the concept of a longest path in a network is related to finding bottlenecks and critical routes.

**Hillier & Lieberman (2017), Chapter 12:** Provides a thorough explanation of how to find the critical path using both AOA and AON diagrams.

#### 4.2 Slack (or Float)

**Slack (or Float)** is the amount of time an activity can be delayed without delaying the project's overall completion time. Activities on the critical path have zero slack.

**Types of Slack:**

*   **Total Slack:** The amount of time an activity can be delayed without delaying the project completion date.
*   **Free Slack:** The amount of time an activity can be delayed without delaying the start of any immediately following activity.

**Paneerselvam R. (2023), Chapter 12:** Explains slack calculation methods.

**Hillier & Lieberman (2017), Chapter 12:** Details the calculation of total and free slack for each activity.

#### 4.3 Earliest Start (ES), Earliest Finish (EF), Latest Start (LS), Latest Finish (LF)

These are calculated values used to determine the critical path and slack.

*   **Earliest Start (ES):** The earliest possible time an activity can begin.
*   **Earliest Finish (EF):** The earliest possible time an activity can be completed.
    *   `EF = ES + Duration`
*   **Latest Finish (LF):** The latest possible time an activity can be completed without delaying the project.
*   **Latest Start (LS):** The latest possible time an activity can begin without delaying the project.
    *   `LS = LF - Duration`

**Forward Pass:** Calculates ES and EF for all activities, starting from the project's beginning.
**Backward Pass:** Calculates LF and LS for all activities, starting from the project's end.

**Paneerselvam R. (2023), Chapter 12:** Provides step-by-step procedures for the forward and backward passes.

**Taha (2019), Chapter 14:** Network models often involve finding shortest or longest paths, which are conceptually related to the forward and backward pass logic in determining minimum and maximum times.

**Hillier & Lieberman (2017), Chapter 12:** Offers detailed examples of forward and backward passes for both AOA and AON networks.

#### 4.4 Project Duration

The **project duration** is the total time required to complete the project. In network analysis, this is typically the EF of the last activity in the project.

---

### 5. Applications of Network Analysis

Network analysis, as introduced by these basic terms, forms the foundation for project management techniques like PERT (Program Evaluation and Review Technique) and CPM (Critical Path Method). These techniques are invaluable for:

*   **Project Planning:** Defining activities, sequencing, and estimating durations.
*   **Scheduling:** Developing a timeline for project execution.
*   **Resource Allocation:** Assigning resources to activities.
*   **Progress Monitoring:** Tracking project status and identifying potential delays.
*   **Cost Control:** Estimating and managing project costs.

**Hillier & Lieberman (2017), Chapter 12:** Emphasizes the practical applications of network analysis in various engineering and management contexts.

**Banks, Carson, Nelson & Nicol (2013):** While their primary focus is discrete-event simulation, the underlying principles of modeling sequential and parallel processes are relevant. Network analysis provides the structured input for such simulations.

---

### 6. Important Points to Remember

*   **Network diagrams are visual tools:** They simplify complex projects by showing relationships.
*   **AOA vs. AON:** AON is generally preferred for its simplicity and flexibility.
*   **Dummy activities are crucial in AOA:** Use them carefully to maintain logic and uniqueness.
*   **Critical Path:** Identifying it is key to project management. Any delay here impacts the whole project.
*   **Slack:** Understanding slack allows for flexibility in scheduling non-critical activities.
*   **ES, EF, LS, LF:** These values are the building blocks for critical path and slack calculations.
*   **Forward Pass:** From start to end, calculate earliest times.
*   **Backward Pass:** From end to start, calculate latest times.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the fundamental difference between an activity and an event in network analysis?

**Answer:** An activity is a task that consumes time and resources, while an event is a point in time signifying the completion or start of an activity, consuming no time.

**Question 2:**
Explain the purpose of a dummy activity in an Activity-on-Arrow (AOA) diagram. Provide an example scenario where a dummy activity is necessary.

**Answer:** A dummy activity is an artificial activity with zero duration used to maintain the logical sequence of activities or to satisfy the uniqueness rule (two activities cannot share the same start and end events) in AOA diagrams.
**Example Scenario:** If Activity B depends on Activity A, and Activity C also depends on Activity A, but Activity C needs to be distinct from B for sequencing later tasks, a dummy activity might be inserted after A and before C (or B) to ensure unique path identification.

**Question 3:**
List and briefly describe the four types of precedence relationships in Activity-on-Node (AON) diagramming.

**Answer:**
*   **Finish-to-Start (FS):** Successor cannot start until Predecessor finishes.
*   **Start-to-Start (SS):** Successor cannot start until Predecessor starts.
*   **Finish-to-Finish (FF):** Successor cannot finish until Predecessor finishes.
*   **Start-to-Finish (SF):** Successor cannot finish until Predecessor starts.

**Question 4:**
Define the critical path and explain its significance in project management.

**Answer:** The critical path is the longest path in a project network. It represents the sequence of activities that determines the shortest possible project completion time. Any delay in an activity on the critical path will directly delay the entire project's completion.

**Question 5:**
What is slack (or float)? If an activity has a slack of 3 days, what does it mean for its scheduling?

**Answer:** Slack (or float) is the amount of time an activity can be delayed without affecting the project's overall completion date. If an activity has a slack of 3 days, it means that activity can be started up to 3 days later than its Earliest Start time, or completed up to 3 days later than its Earliest Finish time, without delaying the project.

---

### Conclusion

This module has laid the groundwork for understanding network analysis by introducing its fundamental terms and concepts. A firm grasp of these basics is essential for mastering project scheduling techniques like PERT and CPM in subsequent modules, enabling engineers to plan, execute, and control projects more effectively. The ability to represent project logic visually and identify critical tasks is a core skill for any engineer involved in project management.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
