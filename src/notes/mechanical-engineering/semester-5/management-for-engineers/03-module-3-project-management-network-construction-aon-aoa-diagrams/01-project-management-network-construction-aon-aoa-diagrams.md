---
title: "Project Management: Network construction, AON, AOA diagrams"
subject: "MANAGEMENT FOR ENGINEERS"
module: "Module 3: Project Management: Network construction, AON, AOA diagrams"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633e0"
status: "completed"
scrapedAt: "2026-05-20T18:01:06.845Z"
---
# Management for Engineers - Module 3: Project Management: Network Construction, AON, AOA Diagrams

## Introduction to Project Management

Project management is the application of knowledge, skills, tools, and techniques to project activities to meet project requirements. For engineers, understanding project management is crucial for successful planning, execution, and completion of complex technical endeavors. This module focuses on a fundamental aspect of project management: network construction, specifically using Activity-on-Node (AON) and Activity-on-Arrow (AOA) diagrams. These diagrams help visualize project schedules, identify critical paths, and manage resources effectively.

**Key Concept:** A **project** is a temporary endeavor undertaken to create a unique product, service, or result. It has a defined beginning and end.

## 1. Network Construction: Visualizing Project Schedules

Network construction involves graphically representing the sequence of activities that comprise a project. This allows for a clear understanding of dependencies between tasks, potential bottlenecks, and the overall project timeline.

### 1.1 Why Network Diagrams?

*   **Visual Representation:** Provides a clear, visual overview of the entire project.
*   **Activity Sequencing:** Shows the order in which activities must be performed.
*   **Dependency Identification:** Highlights relationships between activities (e.g., "Activity B can only start after Activity A is completed").
*   **Critical Path Identification:** Helps determine the sequence of activities that dictates the shortest possible project duration.
*   **Resource Allocation:** Aids in planning and allocating resources to different activities.
*   **Progress Monitoring:** Facilitates tracking of project progress and identification of delays.

### 1.2 Types of Network Diagrams

Two primary methods are used for constructing project network diagrams:

1.  **Activity-on-Arrow (AOA) Diagrams:** Also known as Arrow Diagrams or Arrowhead Diagrams.
2.  **Activity-on-Node (AON) Diagrams:** Also known as Node Diagrams or Precedence Diagramming Method (PDM).

**(Referenced from Koontz, Weihrich, & Cannice, 11th Edition, Chapter 14 on Planning and Control)**

## 2. Activity-on-Arrow (AOA) Diagrams

In AOA diagrams, **activities** are represented by **arrows**, and **events** (milestones or completion of activities) are represented by **nodes** (usually circles or ovals).

### 2.1 Key Components of AOA Diagrams

*   **Activities:** Represented by arrows. The arrow itself signifies the activity and its direction indicates the flow of work. The activity is typically labeled with its name and duration.
*   **Events:** Represented by nodes. An event marks the completion of one or more activities and the beginning of others. Events have zero duration.
    *   **Start Event:** The beginning of the project.
    *   **End Event:** The completion of the project.
*   **Dummies:** Special arrows used to represent logical dependencies between activities without representing an actual task. They have zero duration and are often depicted as dashed lines. Dummies are necessary to:
    *   Avoid multiple activities sharing the same start and end nodes.
    *   Accurately represent complex dependencies.

### 2.2 Rules for Constructing AOA Diagrams

1.  **Two Nodes Per Activity:** Each activity must be represented by an arrow connecting two events (nodes).
2.  **Unique Node Pairs:** No two activities can connect the same pair of start and end nodes.
3.  **Logical Sequencing:** The sequence of arrows must reflect the logical dependencies between activities. An activity can only begin after all preceding activities have been completed.
4.  **Single Start and End:** The entire project should have a single starting event and a single ending event.
5.  **Dummies for Clarity:** Use dummies to maintain unique node pairs and to correctly depict dependencies where multiple activities share the same predecessor or successor.

### 2.3 Example: Simple AOA Diagram Construction

Let's consider a project with the following activities and their dependencies:

| Activity | Description        | Predecessor(s) | Duration (days) |
| :------- | :----------------- | :------------- | :-------------- |
| A        | Design           | -              | 5               |
| B        | Procurement        | A              | 10              |
| C        | Fabrication        | B              | 8               |
| D        | Installation       | C              | 7               |
| E        | Testing            | D              | 4               |

**AOA Diagram Construction:**

1.  **Start Event:** Draw a starting node (e.g., Node 1).
2.  **Activity A:** Draw an arrow from Node 1 to Node 2, labeled "A (5)". Node 2 represents the completion of A.
3.  **Activity B:** B depends on A. Draw an arrow from Node 2 to Node 3, labeled "B (10)". Node 3 represents the completion of B.
4.  **Activity C:** C depends on B. Draw an arrow from Node 3 to Node 4, labeled "C (8)". Node 4 represents the completion of C.
5.  **Activity D:** D depends on C. Draw an arrow from Node 4 to Node 5, labeled "D (7)". Node 5 represents the completion of D.
6.  **Activity E:** E depends on D. Draw an arrow from Node 5 to Node 6, labeled "E (4)". Node 6 represents the completion of E and is the End Event.

```
       (1) --A(5)--> (2) --B(10)--> (3) --C(8)--> (4) --D(7)--> (5) --E(4)--> (6)
       Start                                                                 End
```

**Scenario requiring a Dummy:**

Let's add Activity F, which depends on A, and Activity G, which depends on both B and C.

| Activity | Description    | Predecessor(s) | Duration (days) |
| :------- | :------------- | :------------- | :-------------- |
| A        | Design         | -              | 5               |
| B        | Procurement    | A              | 10              |
| C        | Fabrication    | B              | 8               |
| D        | Installation   | C              | 7               |
| E        | Testing        | D              | 4               |
| F        | Documentation  | A              | 3               |
| G        | Quality Check  | B, C           | 2               |

**AOA Diagram Construction (with Dummy):**

*   We have activities B and F both depending on A. If we draw B from Node 2 to Node 3 and F from Node 2 to Node 4, and then try to draw C from Node 3 and G from Node 3 and Node 4, we might run into issues.
*   A common problem: If Activity C depends only on B, and Activity G depends on both B and C.
    *   Draw A from (1) to (2).
    *   Draw B from (2) to (3).
    *   Draw C from (3) to (4).
    *   Now, if G depends on B and C, we need arrows from (3) and (4) to its start node.
    *   If another activity, say H, depends only on C, we would draw H from (4) to (5).
    *   Consider if we had an activity X that depends on B, and Y depends on C. If we draw B->(3) and C->(4), and then X from (3) and Y from (4), and then need an activity Z that depends on X and Y. This gets tricky.
*   **Crucial rule violation:** If we have two activities, say X depending on A, and Y depending on A, and also X and Y have a common successor Z.
    *   A -> X
    *   A -> Y
    *   X -> Z
    *   Y -> Z
    *   If we try to draw this, both X and Y would emanate from the same node (completion of A), and Z would emanate from the completion nodes of both X and Y. This means X and Y share the same start and end nodes, which is prohibited without a dummy.

*   **Example to illustrate dummy necessity:**
    | Activity | Predecessor(s) |
    | :------- | :------------- |
    | A        | -              |
    | B        | A              |
    | C        | A              |
    | D        | B, C           |

    *   A: (1) --A--> (2)
    *   B: (2) --B--> (3)
    *   C: (2) --C--> (4)
    *   D: Depends on B (from 3) and C (from 4). So, arrows from (3) and (4) must lead to the start of D. Let's say D is from (5) to (6). We need to connect (3) to (5) and (4) to (5). This is fine.
    *   **However, what if:**
        | Activity | Predecessor(s) |
        | :------- | :------------- |
        | A        | -              |
        | B        | A              |
        | C        | A              |
        | D        | B              |
        | E        | C              |
        | F        | D, E           |

        *   A: (1) --A--> (2)
        *   B: (2) --B--> (3)
        *   C: (2) --C--> (4)
        *   D: (3) --D--> (5)
        *   E: (4) --E--> (6)
        *   F: Depends on D (from 5) and E (from 6). So, arrows from (5) and (6) must lead to the start of F. Let's say F is from (7) to (8). Connect (5) to (7) and (6) to (7). This is valid.

        *   **The problem arises when two activities share the same start and end nodes.** Example:
            | Activity | Predecessor(s) |
            | :------- | :------------- |
            | A        | -              |
            | B        | A              |
            | C        | A              |
            | D        | B              |
            | E        | C              |
            | F        | B              |
            | G        | D, F           |

            *   A: (1) --A--> (2)
            *   B: (2) --B--> (3)
            *   C: (2) --C--> (4)
            *   D: (3) --D--> (5)
            *   F: (3) --F--> (4) - **PROBLEM:** Both B and C end at node 4. F starts at node 3 and ends at node 4. Now, if D also ended at node 4, then B and D would share the same start (2) and end (4) nodes.

            *   **To fix this, use a dummy:**
                *   A: (1) --A--> (2)
                *   B: (2) --B--> (3)
                *   C: (2) --[Dummy]--> (4)  *(This dummy signifies that C starts after A, but doesn't consume time or resources and is just a logical link)*
                *   D: (3) --D--> (4)       *(D starts after B and ends at node 4)*
                *   E: (4) --E--> (5)       *(E starts after C (represented by the dummy ending at 4) and also after D)*
                *   F: (3) --F--> (5)       *(F starts after B and ends at node 5)*

            This is a common pitfall. The key is to ensure no two arrows share identical start and end nodes. Dummies are the solution.

### 2.4 Calculations with AOA Diagrams

Once the AOA diagram is constructed, we can perform critical path analysis:

*   **Forward Pass:** Calculates the Earliest Start (ES) and Earliest Finish (EF) times for each activity.
    *   ES of the first activity is 0.
    *   EF = ES + Duration
    *   ES of a subsequent activity is the maximum EF of all its immediate predecessors.
*   **Backward Pass:** Calculates the Latest Finish (LF) and Latest Start (LS) times for each activity.
    *   LF of the last activity is its EF.
    *   LS = LF - Duration
    *   LF of a preceding activity is the minimum LS of all its immediate successors.
*   **Total Float (Slack):** The amount of time an activity can be delayed without delaying the project completion date.
    *   Float = LF - EF (or LS - ES)
*   **Critical Path:** The sequence of activities with zero float. Any delay in these activities will delay the entire project. These activities have ES = LS and EF = LF.

**(Referenced from Mahadevan, 3rd Edition, Chapter 9 on Project Management)**

## 3. Activity-on-Node (AON) Diagrams

In AON diagrams, **activities** are represented by **nodes** (usually rectangles or boxes), and **dependencies** between activities are represented by **arrows**. This is the more commonly used method today due to its simplicity and flexibility.

### 3.1 Key Components of AON Diagrams

*   **Nodes:** Represent activities. Each node typically contains:
    *   Activity Name/ID
    *   Activity Duration
    *   Earliest Start (ES)
    *   Earliest Finish (EF)
    *   Latest Start (LS)
    *   Latest Finish (LF)
    *   Total Float (Slack)
*   **Arrows:** Represent the logical dependencies between activities. An arrow from Activity X to Activity Y means Y cannot start until X is completed.

### 3.2 Types of Dependencies (Precedence Relationships) in AON

AON diagrams explicitly define the type of relationship between activities, offering more flexibility than AOA's implied "finish-to-start."

*   **Finish-to-Start (FS):** The most common type. Activity Y cannot start until Activity X finishes.
    *   *Example:* Laying foundation (X) must finish before framing walls (Y) can begin.
*   **Start-to-Start (SS):** Activity Y cannot start until Activity X starts.
    *   *Example:* Writing first draft (X) must start before editing first draft (Y) can start. They can proceed in parallel, but editing can't begin until writing begins.
*   **Finish-to-Finish (FF):** Activity Y cannot finish until Activity X finishes.
    *   *Example:* Testing component A (X) must finish before testing component B (Y) can finish.
*   **Start-to-Finish (SF):** Activity Y cannot finish until Activity X starts. This is the least common type.
    *   *Example:* System testing (Y) cannot finish until system launch preparation (X) starts.

### 3.3 Rules for Constructing AON Diagrams

1.  **One Node Per Activity:** Each activity is represented by a single node.
2.  **Arrow Direction:** Arrows indicate the direction of the flow of work, showing dependencies.
3.  **No Cycles:** The diagram must not contain any cyclical dependencies (e.g., A depends on B, and B depends on A).
4.  **Single Start and End:** Typically, a project will have one overall start node (often called "Start" or "Begin") and one end node (often called "End" or "Finish").

### 3.4 Example: Simple AON Diagram Construction

Using the same first example data:

| Activity | Description   | Predecessor(s) | Duration (days) |
| :------- | :------------ | :------------- | :-------------- |
| A        | Design        | -              | 5               |
| B        | Procurement   | A              | 10              |
| C        | Fabrication   | B              | 8               |
| D        | Installation  | C              | 7               |
| E        | Testing       | D              | 4               |

**AON Diagram Construction:**

1.  **Start Node:** Create a "Start" node.
2.  **Activity A:** Create a node for Activity A (duration 5). Draw an arrow from "Start" to A.
3.  **Activity B:** Create a node for Activity B (duration 10). Draw an arrow from A to B (FS dependency).
4.  **Activity C:** Create a node for Activity C (duration 8). Draw an arrow from B to C (FS dependency).
5.  **Activity D:** Create a node for Activity D (duration 7). Draw an arrow from C to D (FS dependency).
6.  **Activity E:** Create a node for Activity E (duration 4). Draw an arrow from D to E (FS dependency).
7.  **End Node:** Create an "End" node. Draw an arrow from E to "End".

```
   +-------+       +-------+       +-------+       +-------+       +-------+       +-------+
   | Start | ----> |   A   | ----> |   B   | ----> |   C   | ----> |   D   | ----> |   E   | ----> | End   |
   |       |       | (5)   |       | (10)  |       | (8)   |       | (7)   |       | (4)   |       |       |
   +-------+       +-------+       +-------+       +-------+       +-------+       +-------+
```

**Example with Multiple Dependencies and Different Relationship Types:**

| Activity | Description          | Predecessor(s) | Duration (days) | Relationship Type |
| :------- | :------------------- | :------------- | :-------------- | :---------------- |
| A        | Planning             | -              | 3               | FS                |
| B        | Design               | A              | 5               | FS                |
| C        | Material Procurement | A              | 7               | FS                |
| D        | Fabrication          | B, C           | 10              | FS                |
| E        | Assembly             | D              | 8               | FS                |
| F        | Quality Inspection   | E              | 2               | FS                |
| G        | Documentation        | E              | 4               | FS                |
| H        | Final Review         | F, G           | 3               | FS                |

**AON Diagram Construction:**

```
   +-------+       +-------+       +-------+
   | Start | ----> |   A   | ----> |   B   | ----> +-------+
   |       |       | (3)   |       | (5)   |       |   D   |
   +-------+       +-------+       +-------+ ----> | (10)  |
                       |                         |       |
                       | +-------+       +-------+       +-------+
                       +->|   C   | ----> |   E   | ----> |   F   | ----> +-------+
                           | (7)   |       | (8)   |       | (2)   |       |   H   |
                           +-------+       +-------+ ----> | (3)   |
                               |                               |       |
                               | +-------+                     +-------+
                               +->|   G   | ------------------->
                                   | (4)   |
                                   +-------+
```
*Note: The above diagram is a simplified visual representation. In a proper AON diagram, arrows originate from the center/edge of the predecessor node and point to the center/edge of the successor node.*

### 3.5 Calculations with AON Diagrams (Critical Path Method - CPM)

The process is similar to AOA, but calculations are often performed within the nodes themselves.

*   **Forward Pass (ES, EF):**
    *   ES of the first activity is 0.
    *   EF = ES + Duration
    *   For FS: ES of successor = EF of predecessor.
    *   For SS: ES of successor = ES of predecessor.
    *   For FF: LF of successor = LF of predecessor.
    *   For SF: LS of successor = LS of predecessor.
    *   If an activity has multiple predecessors, its ES is the **maximum** of the EF (or relevant value based on dependency) of its predecessors.
*   **Backward Pass (LF, LS):**
    *   LF of the last activity is its EF (project duration).
    *   LS = LF - Duration
    *   For FS: LF of predecessor = LS of successor.
    *   For SS: LS of predecessor = ES of successor.
    *   For FF: EF of predecessor = LF of successor.
    *   For SF: EF of predecessor = LS of successor.
    *   If an activity has multiple successors, its LF is the **minimum** of the LS (or relevant value based on dependency) of its successors.
*   **Total Float:** Float = LF - EF (or LS - ES)
*   **Critical Path:** Path with zero float.

**(Referenced from Tripathi & Reddy, 6th Edition, Chapter 12 on Project Management)**

## 4. Critical Path Method (CPM) and Program Evaluation and Review Technique (PERT)

While not explicitly asked for in the diagram construction, understanding CPM and PERT is crucial for utilizing these diagrams.

*   **CPM:** Assumes activity durations are deterministic (known with certainty). It focuses on finding the critical path and calculating float.
*   **PERT:** Assumes activity durations are probabilistic (estimated using optimistic, most likely, and pessimistic times). It uses a weighted average to estimate duration and considers the variability.

**(Referenced from Koontz, Weihrich, & Cannice, 11th Edition, Chapter 14)**

## 5. Network Construction Practice Questions

**Question 1:**
Construct an AOA diagram for the following project activities:

| Activity | Description    | Predecessor(s) | Duration (days) |
| :------- | :------------- | :------------- | :-------------- |
| P        | Requirements   | -              | 4               |
| Q        | Design         | P              | 6               |
| R        | Development    | Q              | 8               |
| S        | Testing        | R              | 5               |
| T        | Deployment     | S              | 3               |
| U        | Documentation  | Q              | 4               |
| V        | Review         | R, U           | 2               |

**Answer 1:**

1.  **Start:** (1)
2.  **P:** (1) --P(4)--> (2)
3.  **Q:** (2) --Q(6)--> (3)
4.  **R:** (3) --R(8)--> (4)
5.  **S:** (4) --S(5)--> (5)
6.  **T:** (5) --T(3)--> (6) - End
7.  **U:** (3) --U(4)--> (7) - *Problem: Q ends at 3, U starts after Q.*
8.  **V:** Depends on R (from 4) and U (from 7). V must start after both complete. Let V be from (8) to (9).
    *   Connect (4) to (8) for R -> V.
    *   Connect (7) to (8) for U -> V.
    *   Now, if S also depended on U, we would need a dummy. Let's adjust the dependencies slightly to demonstrate a dummy:

**Revised Question 1 with Dummy Example:**

| Activity | Description    | Predecessor(s) | Duration (days) |
| :------- | :------------- | :------------- | :-------------- |
| P        | Requirements   | -              | 4               |
| Q        | Design         | P              | 6               |
| R        | Development    | Q              | 8               |
| S        | Testing        | R              | 5               |
| T        | Deployment     | S              | 3               |
| U        | Documentation  | Q              | 4               |
| V        | Integration    | R              | 3               |
| W        | Final Check    | S, V           | 2               |

**Revised Answer 1 (AOA):**

*   (1) --P(4)--> (2)
*   (2) --Q(6)--> (3)
*   (3) --R(8)--> (4)
*   (3) --U(4)--> (5)  *(Now Q (node 3) is predecessor for R and U)*
*   (4) --S(5)--> (6)
*   (4) --V(3)--> (5)  **PROBLEM:** Both U and V emanate from node 3 and end at node 5. U and V share the same start (3) and end (5) nodes.
    *   To fix this:
        *   (1) --P(4)--> (2)
        *   (2) --Q(6)--> (3)
        *   (3) --R(8)--> (4)
        *   (3) --[Dummy]--(5) *(To separate U's path)*
        *   (5) --U(4)--> (6)
        *   (4) --V(3)--> (6) *(Now V connects from R's completion (4) to U's completion (6))*
        *   **Now, consider W depends on S and V.** S is from (4) to (6). V is from (4) to (6). This is **still a problem** if S and V share the same start and end nodes. Let's retrace.

**Let's retry the AOA structure carefully:**

| Activity | Description    | Predecessor(s) | Duration (days) |
| :------- | :------------- | :------------- | :-------------- |
| A        | Design         | -              | 5               |
| B        | Procurement    | A              | 10              |
| C        | Fabrication    | B              | 8               |
| D        | Installation   | C              | 7               |
| E        | Testing        | D              | 4               |
| F        | Documentation  | A              | 3               |
| G        | Final Assembly | D, F           | 6               |

*   (1) --A(5)--> (2)
*   (2) --B(10)--> (3)
*   (3) --C(8)--> (4)
*   (4) --D(7)--> (5)
*   (5) --E(4)--> (6) (End)
*   (2) --F(3)--> (7) *(F also depends on A)*
*   G depends on D (from 5) and F (from 7). Let G be from (8) to (9).
    *   Connect (5) to (8) for D -> G.
    *   Connect (7) to (8) for F -> G.
    *   This structure is valid as D and F have different end nodes (5 and 7).

**Question 2:**
Construct an AON diagram for the same activities as in Question 1 (Revised). Calculate ES, EF, LS, LF, and Total Float for each activity. Identify the critical path.

| Activity | Description    | Predecessor(s) | Duration (days) |
| :------- | :------------- | :------------- | :-------------- |
| P        | Requirements   | -              | 4               |
| Q        | Design         | P              | 6               |
| R        | Development    | Q              | 8               |
| S        | Testing        | R              | 5               |
| T        | Deployment     | S              | 3               |
| U        | Documentation  | Q              | 4               |
| V        | Integration    | R              | 3               |
| W        | Final Check    | S, V           | 2               |

**Answer 2 (AON with Calculations):**

**Network Diagram Sketch:**

```
    +---+       +---+       +---+       +---+
    | P | ----> | Q | ----> | R | ----> | S | ----> +---+
    |(4)|       |(6)|       |(8)|       |(5)|       | T |
    +---+       +---+       +---+ ----> | V | ----> |(3)|
                            |       |(3)|       +---+
                            |       +---+ ----> +---+
                            |             |       | W |
                            | +---+       +---+   |(2)|
                            +->| U | ----> |       +---+
                               |(4)|
                               +---+
```
*(Note: W depends on both S and V. Arrows from S and V lead to W)*

**Calculations:**

**Forward Pass (ES, EF):**
*   **P:** ES=0, EF=0+4=4
*   **Q:** ES=EF(P)=4, EF=4+6=10
*   **R:** ES=EF(Q)=10, EF=10+8=18
*   **U:** ES=EF(Q)=10, EF=10+4=14
*   **V:** ES=EF(R)=18, EF=18+3=21
*   **S:** ES=EF(R)=18, EF=18+5=23
*   **T:** ES=EF(S)=23, EF=23+3=26
*   **W:** ES = max(EF(S), EF(V)) = max(23, 21) = 23, EF=23+2=25

*Project Duration = max(EF of last activities) = max(EF(T), EF(W)) = max(26, 25) = 26 days.*

**Backward Pass (LF, LS):**
*   **T:** LF=26, LS=26-3=23
*   **W:** LF=26, LS=26-2=24
*   **S:** LF=min(LS(T), LS(W)) = min(23, 23) = 23, LS=23-5=18
*   **V:** LF=LS(W)=24, LS=24-3=21
*   **R:** LF=min(LS(S), LS(V)) = min(18, 21) = 18, LS=18-8=10
*   **Q:** LF=min(LS(R), LS(U)) = min(10, 12) = 10, LS=10-6=4
*   **U:** LF=LS(W)=24, LS=24-4=20 *(Error in manual calculation: W depends on S & V. Let's correct.*
    *   **W:** LF=26, LS=26-2=24.
    *   **S:** LF=min(LS(T), LS(W)) = min(23, 23) = 23, LS=23-5=18
    *   **V:** LF=LS(W)=24, LS=24-3=21
    *   **R:** LF=min(LS(S), LS(V)) = min(18, 21) = 18, LS=18-8=10
    *   **U:** LF=LS(W)=24, LS=24-4=20. *(This is correct if W depends on U and V, but W depends on S and V)*

Let's redo the backward pass assuming W depends on S and V:

*   **T:** LF=26, LS=26-3=23
*   **W:** LF=26, LS=26-2=24
*   **S:** LF=min(LS(T), LS(W)) = min(23, 23) = 23, LS=23-5=18
*   **V:** LF=LS(W)=24, LS=24-3=21
*   **R:** LF=min(LS(S), LS(V)) = min(18, 21) = 18, LS=18-8=10
*   **Q:** LF=min(LS(R), LS(U)) = min(10, ??), U depends on Q.
    *   Let's list dependencies again for clarity:
        *   P -> Q
        *   Q -> R
        *   Q -> U
        *   R -> S
        *   R -> V
        *   S -> T
        *   S -> W
        *   V -> W
        *   U -> ? (Let's assume U doesn't directly precede anything essential for the main path, but its float is calculated based on W if it were a predecessor, or its own path completion)

    *   **Recalculating Backward Pass:**
        *   T: LF=26, LS=23
        *   W: LF=26, LS=24
        *   S: LF=min(LS(T), LS(W)) = min(23, 23) = 23, LS=18
        *   V: LF=LS(W)=24, LS=21
        *   R: LF=min(LS(S), LS(V)) = min(18, 21) = 18, LS=10
        *   U: LF=LS(W) - NO, U does not precede W. Let's assume U has its own "end" after its duration, or perhaps it's a prerequisite for something else not listed. For now, we calculate its float based on its own path completion if it was the end. Let's assume it contributes to a final review, but W is the immediate predecessor to project end. We need a successor for U. If U doesn't feed into the critical path or project end, we can still calculate its float. Let's assume U's float is calculated relative to its earliest finish.

    *   **Let's assume a different dependency for W to make it more illustrative:** W depends on T and V.

    | Activity | Description    | Predecessor(s) | Duration (days) |
    | :------- | :------------- | :------------- | :-------------- |
    | P        | Requirements   | -              | 4               |
    | Q        | Design         | P              | 6               |
    | R        | Development    | Q              | 8               |
    | S        | Testing        | R              | 5               |
    | T        | Deployment     | S              | 3               |
    | U        | Documentation  | Q              | 4               |
    | V        | Integration    | R              | 3               |
    | W        | Final Check    | T, V           | 2               |

    **Recalculated Forward Pass:**
    *   P: ES=0, EF=4
    *   Q: ES=4, EF=10
    *   R: ES=10, EF=18
    *   U: ES=10, EF=14
    *   S: ES=18, EF=23
    *   V: ES=18, EF=21
    *   T: ES=23, EF=26
    *   W: ES=max(EF(T), EF(V)) = max(26, 21) = 26, EF=26+2=28.
    *   Project Duration = 28 days.

    **Recalculated Backward Pass:**
    *   W: LF=28, LS=26
    *   T: LF=LS(W)=26, LS=23
    *   V: LF=LS(W)=26, LS=23
    *   S: LF=LS(T)=23, LS=18
    *   R: LF=min(LS(S), LS(V)) = min(18, 23) = 18, LS=10
    *   Q: LF=min(LS(R), LS(U)) = min(10, ??). We need to calculate U's LF/LS. Let's assume U is an end activity for its path, so LF(U)=EF(U)=14. LS(U)=14-4=10.
    *   Q: LF=min(LS(R), LS(U)) = min(10, 10) = 10, LS=4
    *   P: LF=LS(Q)=4, LS=0

**Summary Table:**

| Activity | Duration | ES | EF | LS | LF | Total Float (LF-EF) | Critical? |
| :------- | :------- | :- | :- | :- | :- | :------------------ | :-------- |
| P        | 4        | 0  | 4  | 0  | 4  | 0                   | Yes       |
| Q        | 6        | 4  | 10 | 4  | 10 | 0                   | Yes       |
| R        | 8        | 10 | 18 | 10 | 18 | 0                   | Yes       |
| S        | 5        | 18 | 23 | 18 | 23 | 0                   | Yes       |
| T        | 3        | 23 | 26 | 23 | 26 | 0                   | Yes       |
| U        | 4        | 10 | 14 | 10 | 14 | 0                   | Yes       |
| V        | 3        | 18 | 21 | 23 | 26 | 5                   | No        |
| W        | 2        | 26 | 28 | 26 | 28 | 0                   | Yes       |

**Critical Path:** P -> Q -> R -> S -> T -> W (Total duration = 28 days)
*(Note: U also has zero float in this specific calculation, making P-Q-U a path of duration 14. However, the project ends with W which depends on T and V. The longest path dictates the project duration. If U had a successor that also fed into W, its float might change. In this case, U has 0 float, meaning P-Q-U is also a critical path segment contributing to the overall project timeline, but W being dependent on T (which itself is longer) makes the T path the critical one to W.)*

**Important Correction:** If U does not lead to W, its float calculation needs a successor. If it's just an activity that completes, its LF would be its EF. The critical path is the sequence of activities that MUST be completed on time to avoid delaying the project. Activity U having 0 float means it MUST be completed by day 14.

**Let's consider W depending on S and U instead of T and V.**

| Activity | Description    | Predecessor(s) | Duration (days) |
| :------- | :------------- | :------------- | :-------------- |
| P        | Requirements   | -              | 4               |
| Q        | Design         | P              | 6               |
| R        | Development    | Q              | 8               |
| S        | Testing        | R              | 5               |
| T        | Deployment     | S              | 3               |
| U        | Documentation  | Q              | 4               |
| V        | Integration    | R              | 3               |
| W        | Final Check    | S, U           | 2               |

**Forward Pass:**
*   P: ES=0, EF=4
*   Q: ES=4, EF=10
*   R: ES=10, EF=18
*   U: ES=10, EF=14
*   S: ES=18, EF=23
*   V: ES=18, EF=21
*   W: ES=max(EF(S), EF(U)) = max(23, 14) = 23, EF=23+2=25
*   T: ES=EF(S)=23, EF=23+3=26 (If T is the last activity, Project Duration = 26)

**Backward Pass:**
*   T: LF=26, LS=23
*   W: LF=26, LS=24
*   S: LF=min(LS(T), LS(W)) = min(23, 24) = 23, LS=18
*   U: LF=LS(W)=24, LS=20
*   R: LF=min(LS(S), LS(V)) = min(18, ??). V needs a successor. Let's assume V is also last. LF(V)=EF(V)=21, LS(V)=18.
*   R: LF=min(LS(S), LS(V)) = min(18, 18) = 18, LS=10
*   Q: LF=min(LS(R), LS(U)) = min(10, 20) = 10, LS=4
*   P: LF=LS(Q)=4, LS=0

**Summary Table (Second Scenario):**

| Activity | Duration | ES | EF | LS | LF | Total Float (LF-EF) | Critical? |
| :------- | :------- | :- | :- | :- | :- | :------------------ | :-------- |
| P        | 4        | 0  | 4  | 0  | 4  | 0                   | Yes       |
| Q        | 6        | 4  | 10 | 4  | 10 | 0                   | Yes       |
| R        | 8        | 10 | 18 | 10 | 18 | 0                   | Yes       |
| S        | 5        | 18 | 23 | 18 | 23 | 0                   | Yes       |
| T        | 3        | 23 | 26 | 23 | 26 | 0                   | Yes       |
| U        | 4        | 10 | 14 | 20 | 24 | 10                  | No        |
| V        | 3        | 18 | 21 | 18 | 21 | 0                   | Yes       |
| W        | 2        | 23 | 25 | 24 | 26 | 1                   | No        |

**Critical Path:** P -> Q -> R -> S -> T (Duration 26 days) and P -> Q -> R -> V (Duration 25 days).
The critical path is the longest path: **P -> Q -> R -> S -> T**.

## 6. Alignment with Course Outcomes

*   **CO1 (K4 - Analyze):** Understanding the nuances of AON vs. AOA, the necessity of dummies in AOA, and performing CPM calculations allows for critical analysis of project schedules and potential issues.
*   **CO2 (K2 - Examine Functions):** Network diagrams are tools for the planning and controlling functions of management.
*   **CO3 (K3 - Decision Making):** Identifying the critical path and float helps in making informed decisions about resource allocation, prioritizing tasks, and managing risks.
*   **CO4 (K3 - Apply Techniques):** This entire module is about applying project management techniques (network construction, CPM).
*   **CO5 (K2 - Understand Functional Areas):** Project management is a core functional area within overall management.
*   **CO6 (K2 - Market Concepts):** While not directly market-related, efficient project management is essential for delivering products/services to market on time and within budget, impacting marketing success.

## 7. Important Points to Remember

*   **AOA vs. AON:** AOA uses arrows for activities, nodes for events. AON uses nodes for activities, arrows for dependencies. AON is generally preferred for its clarity and flexibility.
*   **Dummies in AOA:** Crucial for avoiding ambiguity and ensuring logical representation where activities share start/end nodes.
*   **Critical Path:** The longest path through the network, determining the minimum project duration. Activities on the critical path have zero float.
*   **Float (Slack):** The amount of time an activity can be delayed without affecting the project end date.
*   **Forward Pass:** Determines the earliest possible start and finish times.
*   **Backward Pass:** Determines the latest possible start and finish times without delaying the project.
*   **Dependencies:** Understanding Finish-to-Start, Start-to-Start, Finish-to-Finish, and Start-to-Finish relationships is key for AON diagrams.

This module provides the foundational tools for visualizing and analyzing project timelines, enabling engineers to manage projects more effectively.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
