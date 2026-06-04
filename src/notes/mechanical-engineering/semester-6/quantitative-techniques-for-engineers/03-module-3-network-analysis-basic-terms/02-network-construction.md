---
title: "Network construction"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 3: Network analysis – Basic terms"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a76"
status: "completed"
scrapedAt: "2026-05-20T18:07:34.640Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 3: Network Analysis – Basic Terms

### Topic: Network Construction

**Description:** This topic focuses on the fundamental process of constructing networks from problem descriptions. Network analysis is a powerful tool for modeling and solving various problems, especially in project management and logistics. Understanding how to accurately represent a problem as a network is the crucial first step.

**Learning Outcomes:**

*   **Understand the basic terminology used in network analysis.** (This will be covered throughout the module, but specific definitions will be introduced as we build networks.)
*   **Identify the components of a network and their relationships.**
*   **Construct activity-on-node (AON) and activity-on-arrow (AOA) network diagrams from project descriptions.**
*   **Differentiate between the types of relationships between activities (e.g., finish-to-start).**
*   **Understand the role of dummy activities in AOA networks.**

---

### 1. Introduction to Network Analysis

Network analysis, often referred to as Project Management Techniques or Operations Research techniques for project scheduling, is used to plan, schedule, and control projects. Projects are defined as a collection of interrelated activities that must be performed in a certain sequence to achieve a specific objective.

**Key Concepts:**

*   **Project:** A temporary endeavor undertaken to create a unique product, service, or result.
*   **Activity:** A distinct task or operation that must be performed as part of a project. Activities consume time and resources.
*   **Event (or Node):** A point in time that marks the start or completion of one or more activities. Events do not consume time.

**Relevance to Course Outcomes:**

*   **CO3: To sequence and schedule jobs and projects (Knowledge Level: K3):** Network construction is the foundational step for sequencing and scheduling project activities, directly addressing this outcome.

**Textbook References:**

*   **Paneerselvam R. (2023) - Operations Research:** Likely discusses project management techniques and network diagrams in detail.
*   **Taha (2019) - Operations Research:** Also a comprehensive resource for project management methodologies, including network construction.

---

### 2. Types of Network Diagrams

There are two primary ways to represent project activities and their dependencies in a network diagram:

#### 2.1. Activity-on-Node (AON) Diagram (also known as Precedence Diagramming Method - PDM)

In an AON diagram, **nodes represent activities**, and **arrows indicate the dependencies** between activities.

**Key Characteristics:**

*   **Nodes:** Rectangles or circles representing activities.
*   **Arrows:** Show the flow of work and the precedence relationships between activities.
*   **Simplicity:** Generally considered easier to construct and understand for most projects.
*   **Types of Dependencies:** AON diagrams can represent four basic types of dependencies (Paneerselvam, 2023):
    *   **Finish-to-Start (FS):** Activity B cannot start until Activity A finishes. This is the most common type of dependency.
        *   *Example:* Painting a wall (Activity B) cannot start until the primer coat dries (Activity A).
    *   **Start-to-Start (SS):** Activity B cannot start until Activity A starts.
        *   *Example:* Assembling a product (Activity B) cannot start until the initial component placement (Activity A) begins.
    *   **Finish-to-Finish (FF):** Activity B cannot finish until Activity A finishes.
        *   *Example:* Testing a software module (Activity B) cannot finish until the code review (Activity A) is completed.
    *   **Start-to-Finish (SF):** Activity B cannot finish until Activity A starts. (This is the least common type.)
        *   *Example:* A backup generator (Activity B) cannot finish its testing until the main power supply (Activity A) is switched on.

**Example Construction (AON):**

Consider a simple project with the following activities and their predecessors:

| Activity | Description        | Predecessors |
| :------- | :----------------- | :----------- |
| A        | Design             | -            |
| B        | Procure Materials  | A            |
| C        | Fabricate Parts    | B            |
| D        | Assemble Product   | C            |
| E        | Test Product       | D            |
| F        | Deliver Product    | E            |

**AON Diagram:**

```
       +-------+
       |   A   |
       +-------+
           |
           v
       +-------+
       |   B   |
       +-------+
           |
           v
       +-------+
       |   C   |
       +-------+
           |
           v
       +-------+
       |   D   |
       +-------+
           |
           v
       +-------+
       |   E   |
       +-------+
           |
           v
       +-------+
       |   F   |
       +-------+
```

In this diagram, arrows represent the Finish-to-Start (FS) dependency by default.

#### 2.2. Activity-on-Arrow (AOA) Diagram (also known as Arrow Diagramming Method - ADM)

In an AOA diagram, **arrows represent activities**, and **nodes represent events** (start or completion points of activities).

**Key Characteristics:**

*   **Arrows:** Represent activities and their durations.
*   **Nodes:** Circles representing events (milestones).
*   **Sequence:** The sequence of activities is shown by the order of arrows.
*   **Limitations:**
    *   Cannot easily represent all four types of dependencies directly. Primarily used for Finish-to-Start relationships.
    *   Requires **dummy activities** to maintain logical sequencing and avoid ambiguity.

**Dummy Activities:**

A dummy activity is a conceptual activity that has zero duration and zero resource usage. It is used in AOA diagrams to:

*   **Clarify precedence relationships:** To show that one activity cannot start until another finishes, even if they don't share the same start/end events.
*   **Resolve ambiguity:** To ensure that no two activities have the same start and end event.
*   **Maintain network structure:** To connect disconnected parts of the network or to represent complex dependencies.

**Rules for Dummy Activities:**

1.  A dummy activity has zero duration.
2.  A dummy activity does not consume resources.
3.  A dummy activity should never be used if it can be avoided by drawing the network differently.
4.  Two dummy activities should never connect the same two events.
5.  Dummy activities are usually represented by dashed arrows.

**Example Construction (AOA):**

Consider the same project as above. We'll need to assign event numbers.

| Activity | Description        | Predecessors | Duration |
| :------- | :----------------- | :----------- | :------- |
| A        | Design             | -            | 5        |
| B        | Procure Materials  | A            | 7        |
| C        | Fabricate Parts    | B            | 10       |
| D        | Assemble Product   | C            | 6        |
| E        | Test Product       | D            | 4        |
| F        | Deliver Product    | E            | 2        |

**AOA Diagram Construction Steps:**

1.  **Identify the first activity(ies):** Activity A has no predecessors, so it's the starting activity.
2.  **Draw the first activity:** Draw an arrow for Activity A, originating from a start event (Event 1).
3.  **Identify subsequent activities:** Activity B depends on A. Draw an arrow for B originating from the end event of A (Event 2).
4.  **Continue mapping dependencies:** Activity C depends on B. Draw an arrow for C from the end event of B (Event 3).
5.  **Handling multiple predecessors/successors:** This is where dummy activities become important.

Let's consider a slightly more complex example to illustrate dummy activities:

| Activity | Description        | Predecessors | Duration |
| :------- | :----------------- | :----------- | :------- |
| A        | Design             | -            | 5        |
| B        | Procure Materials  | A            | 7        |
| C        | Fabricate Parts    | A            | 8        |
| D        | Assemble Product   | B, C         | 6        |
| E        | Test Product       | D            | 4        |

**AOA Diagram Construction:**

*   **Activity A:** Starts at Event 1, ends at Event 2.
*   **Activity B:** Depends on A. Starts at Event 2, ends at Event 3.
*   **Activity C:** Depends on A. Starts at Event 2. Now, if C also ends at a new event (say, Event 4), it's straightforward.
*   **Activity D:** Depends on B and C. This means D can only start after *both* B and C are completed.

    *   If B ends at Event 3 and C ends at Event 4, then D must originate from *both* Event 3 and Event 4. This is not allowed in AOA.
    *   **Solution:** To ensure D starts only after both B and C are complete, we need a dummy activity.

**Revised AOA Diagram Construction with Dummy Activities:**

1.  **Event 1:** Start of Project.
2.  **Activity A:** Arrow from Event 1 to Event 2 (Duration 5).
3.  **Activity B:** Arrow from Event 2 to Event 3 (Duration 7). (Depends on A)
4.  **Activity C:** Arrow from Event 2 to Event 4 (Duration 8). (Depends on A)
5.  **Activity D:** Depends on B and C. It must originate from the completion of both. Since B ends at Event 3 and C ends at Event 4, we need to connect these to D. To avoid ambiguity (two activities starting from Event 2 and ending at different events), and to make D start only after both B and C are finished, we can use a dummy.

    *   Draw an arrow for Activity D starting from a common point representing the completion of both B and C. This common point is where we use the dummy.
    *   To link B's completion (Event 3) and C's completion (Event 4) to D's start:
        *   If D depends on B, it means D can start after Event 3.
        *   If D depends on C, it means D can start after Event 4.
    *   **Crucial point:** D needs to start *only after both* are done.
    *   Let's re-evaluate the structure. A common practice is to have all activities dependent on a predecessor end at the same event if they share a common successor.

    **Corrected AOA Diagram for the example with B and C predecessors for D:**

    *   Event 1: Start
    *   Activity A: 1 --(5)--> 2
    *   Activity B: 2 --(7)--> 3 (Depends on A)
    *   Activity C: 2 --(8)--> 4 (Depends on A)
    *   **Problem:** Now, if D depends on B and C, how do we connect? If we draw D from 3 to 5 and C from 4 to 5, this implies D depends on the completion of B (ending at 3) and some implicit event at 4. But C is not completed at 4.
    *   **Correct approach using dummy:**
        *   Event 1: Start
        *   Activity A: 1 --(5)--> 2
        *   Activity B: 2 --(7)--> 3 (Depends on A)
        *   Activity C: 2 --(8)--> 4 (Depends on A)
        *   Activity D: Depends on B (Event 3) and C (Event 4).
            *   To make D start only after both, we need to ensure that the arrow for D originates from a point that signifies the completion of both paths.
            *   Draw a **dummy activity** from Event 3 to a new Event 5. This dummy doesn't represent a real task but helps structure the network.
            *   Draw Activity D starting from Event 4 and ending at Event 6.
            *   Draw a **dummy activity** from Event 4 to Event 6. This signifies that D cannot finish until C finishes. This is not the primary use.

    **Let's focus on the common dependency issue:**

    Consider this scenario:
    | Activity | Description        | Predecessors | Duration |
    | :------- | :----------------- | :----------- | :------- |
    | A        | Excavation         | -            | 5        |
    | B        | Foundation         | A            | 7        |
    | C        | Framing            | A            | 8        |
    | D        | Electrical Rough-in| B, C         | 6        |

    *   Event 1: Start
    *   Activity A: 1 --(5)--> 2
    *   Activity B: 2 --(7)--> 3 (Depends on A)
    *   Activity C: 2 --(8)--> 4 (Depends on A)
    *   Activity D: Depends on B (Event 3) and C (Event 4).
        *   To represent D starting only after both B and C are complete, we need a single point from which D can start, representing the completion of both.
        *   Draw a **dummy activity** from Event 3 to Event 4. This dummy has zero duration. It doesn't mean anything happened between B and C's completion. It's a conceptual link.
        *   Now, Activity D can start from Event 4 and proceed to a new event, say Event 5.
        *   Activity D: 4 --(6)--> 5 (Depends on B and C, via the dummy from 3 to 4).

    **The crucial rule for dummy activities to avoid ambiguity (no two activities with the same start and end event):**
    If you have activities B and C that both depend on A, and D depends on both B and C, you should **not** draw B and C ending at the same event if they are distinct activities.

    **Revised AOA for the example with B and C predecessors for D:**

    *   Event 1: Start of project.
    *   Activity A: Arrow from Event 1 to Event 2 (Duration 5).
    *   Activity B: Arrow from Event 2 to Event 3 (Duration 7).
    *   Activity C: Arrow from Event 2 to Event 4 (Duration 8).
    *   **Crucial step for D depending on B and C:**
        *   To ensure D starts only after *both* B and C are finished, we need to connect the end of B (Event 3) and the end of C (Event 4) to the start of D.
        *   Draw a **dummy activity** (dashed arrow) from Event 3 to Event 4. This dummy has zero duration.
        *   Draw Activity D as an arrow from Event 4 to a new Event 5 (Duration 6).
        *   **Why this works:** D starts at Event 4. For the network to be valid, all incoming arrows to Event 4 must be completed. These are the arrow for C and the dummy activity from Event 3. The dummy activity from Event 3 only "completes" when Event 3 is reached (meaning B is finished). Therefore, Activity D can only begin at Event 4 if both C has finished (to reach Event 4 directly) AND B has finished (to allow the dummy activity from Event 3 to Event 4 to be completed).

    *   **Consider if D also depended on A:** If D depended on A and B and C, then D would start from Event 4 and also need a connection from Event 2. This would require another dummy.

    **AOA Diagram Sketch:**

    ```
        (1) --A(5)--> (2)
             / \
            /   \
           /     \
          B(7)   C(8)
         /         \
        /           \
       (3) --[DUMMY]--> (4)
        \             /
         \           /
          \---------D(6)--------> (5)
    ```
    *   In this sketch:
        *   (1), (2), (3), (4), (5) are events (nodes).
        *   A, B, C, D are activities (arrows).
        *   The dashed arrow represents the dummy activity.
        *   This network correctly represents that D depends on both B and C.

**Textbook References:**

*   **Paneerselvam R. (2023):** Will likely have detailed sections on AOA and AON diagrams, including the rules and use of dummy activities.
*   **Taha (2019):** Will also provide comprehensive coverage of network construction for project management, including ADM and PDM.
*   **Hillier & Lieberman (2017):** A classic text that covers network models extensively, including their construction and analysis.

---

### 3. Step-by-Step Network Construction Process

The process of constructing a network diagram involves translating a project description into a visual representation.

**General Steps:**

1.  **Identify all activities:** List every task required to complete the project. This is often done by breaking down the project into smaller, manageable tasks.
2.  **Determine the order of activities (precedence relationships):** For each activity, identify which other activities must be completed before it can begin. This is the most critical step.
3.  **Estimate the duration of each activity:** Determine how long each activity is expected to take. This is often based on historical data, expert judgment, or resource availability.
4.  **Choose the diagramming method (AON or AOA):**
    *   AON is generally preferred for its simplicity and flexibility in representing dependencies.
    *   AOA might be used if the problem specifically requires it or if working with older software/methodologies.
5.  **Construct the diagram:**
    *   **For AON:** Draw nodes for each activity. Connect activities with arrows according to their precedence relationships (defaulting to FS if not specified). Label nodes with activity names and potentially durations.
    *   **For AOA:** Draw events (nodes) and activities (arrows). Assign numbers to events sequentially. Carefully place dummy activities where needed to satisfy logical constraints and the rule against duplicate event pairs for activities. Label arrows with activity names and durations.
6.  **Review and validate the network:** Check for:
    *   **Logical correctness:** Does the network accurately reflect the project's dependencies?
    *   **Completeness:** Are all activities included?
    *   **Clarity:** Is the diagram easy to understand?
    *   **AOA specific:** Are dummy activities used correctly? Are there any violations of the dummy activity rules?

**Important Point:** The accuracy of the network construction directly impacts the validity of subsequent analysis (like critical path calculation).

**Reference:**

*   **Banks, Carson, Nelson, & Nicol (2013) - Discrete Event System Simulation:** While focused on simulation, this book often starts with constructing system models, which have parallels to network construction in representing the flow and dependencies of events and activities.

---

### 4. Practice Questions and Exercises

**Question 1 (AON Construction):**

Construct an Activity-on-Node (AON) diagram for a project with the following activities and their predecessors:

| Activity | Description       | Predecessors |
| :------- | :---------------- | :----------- |
| P        | Design            | -            |
| Q        | Material Requisition| P            |
| R        | Component Casting | Q            |
| S        | Machining         | Q            |
| T        | Assembly          | R, S         |
| U        | Painting          | T            |
| V        | Testing           | U            |

**Answer 1:**

```
       +---+
       | P |
       +---+
        |
        v
       +---+
       | Q |
       +---+
      /   \
     v     v
   +---+ +---+
   | R | | S |
   +---+ +---+
      \   /
       v
     +---+
     | T |
     +---+
      |
      v
     +---+
     | U |
     +---+
      |
      v
     +---+
     | V |
     +---+
```

---

**Question 2 (AOA Construction with Dummy Activity):**

Construct an Activity-on-Arrow (AOA) diagram for the following project activities, including any necessary dummy activities. Assign event numbers sequentially.

| Activity | Description       | Predecessors | Duration |
| :------- | :---------------- | :----------- | :------- |
| A        | Planning          | -            | 4        |
| B        | Survey            | A            | 5        |
| C        | Design            | A            | 6        |
| D        | Construction      | B, C         | 10       |
| E        | Inspection        | D            | 3        |

**Answer 2:**

*   **Event 1:** Start of Project
*   **Activity A:** 1 --(4)--> 2 (Planning)
*   **Activity B:** 2 --(5)--> 3 (Survey, depends on A)
*   **Activity C:** 2 --(6)--> 4 (Design, depends on A)
*   **Activity D:** Depends on B (Event 3) and C (Event 4).
    *   To ensure D starts only after both B and C are complete, we need a dummy activity.
    *   Draw a dummy activity from Event 3 to Event 4.
    *   Draw Activity D from Event 4 to Event 5 (Construction, depends on B and C).
*   **Activity E:** 5 --(3)--> 6 (Inspection, depends on D)

**AOA Diagram Sketch:**

```
        (1) --A(4)--> (2)
             / \
            /   \
           /     \
          B(5)   C(6)
         /         \
        /           \
       (3) --[DUMMY]--> (4)
        \             /
         \           /
          \---------D(10)--------> (5)
                                     |
                                     v
                                    (6) --E(3)--> (7)
```

---

### 5. Key Points to Remember

*   **Nodes vs. Arrows:** Understand the fundamental difference between AON (nodes are activities) and AOA (arrows are activities).
*   **Precedence Relationships:** Accurately identifying which activity must follow another is paramount.
*   **Types of Dependencies (AON):** Be familiar with FS, SS, FF, and SF relationships. FS is the most common.
*   **Dummy Activities (AOA):** Their purpose is crucial for maintaining logical flow and uniqueness in AOA diagrams. They have zero duration and represent precedence, not work.
*   **Rules for Dummy Activities:** Always ensure no two activities share the same start and end events, and that dummy activities are only used when necessary.
*   **Project Scope:** Network construction is the first step in project management techniques and lays the groundwork for scheduling, cost estimation, and resource allocation.
*   **AON vs. AOA Choice:** AON is generally more intuitive and flexible for modern project management. AOA is still relevant and important to understand for its historical significance and specific applications.

---

### 6. Connections to Course Outcomes

*   **CO3: To sequence and schedule jobs and projects (Knowledge Level: K3):** This entire topic is the foundation for CO3. Without correct network construction, subsequent sequencing and scheduling (like critical path analysis) will be flawed. Understanding the order of tasks and their dependencies is directly sequencing.

---

This concludes the notes for Network Construction. The next steps in network analysis typically involve calculating activity durations, determining early and late start/finish times, and identifying the critical path.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
