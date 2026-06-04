---
title: "Critical Path Calculation"
subject: "SOFTWARE PROJECT MANAGEMENT"
module: "Module 1: Project Overview and Feasibility Studies "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b680"
status: "completed"
scrapedAt: "2026-05-20T16:49:02.871Z"
---
# SOFTWARE PROJECT MANAGEMENT - Module 1: Project Overview and Feasibility Studies - Critical Path Calculation

## Topic: Critical Path Calculation

### Learning Outcomes:

*   Understand the importance of critical path calculation in project scheduling.
*   Define key terms related to critical path analysis (CPA).
*   Calculate the critical path using network diagrams (Activity-on-Node).
*   Determine the earliest start (ES), earliest finish (EF), latest start (LS), and latest finish (LF) times for each activity.
*   Calculate the total float (slack) for each activity and identify the critical path.
*   Understand the impact of changes on the critical path.

### 1. Importance of Critical Path Calculation in Project Scheduling

*   **Effective Project Planning:** Critical Path Analysis (CPA) allows project managers to plan projects more effectively by identifying the most crucial activities that impact the project completion date.
*   **Resource Allocation:**  Understanding the critical path helps in efficient resource allocation by prioritizing resources to activities on the critical path, minimizing delays.
*   **Risk Management:**  CPA helps identify activities that, if delayed, will directly impact the project completion date, allowing for proactive risk mitigation strategies.
*   **Progress Monitoring and Control:**  It provides a baseline for monitoring project progress and identifying potential delays early on.
*   **Decision Making:**  CPA supports informed decision-making by providing a clear understanding of the impact of changes (e.g., adding resources, adjusting timelines) on the overall project schedule.
*   **Optimized Scheduling:**  By identifying activities with float (slack), resources can be shifted from non-critical activities to critical activities, optimizing the schedule.

### 2. Key Concepts and Definitions

*   **Activity:** A distinct, definable piece of work required to complete the project.  (e.g., "Design Database," "Write Unit Tests")
*   **Event (Milestone):** A point in time marking the start or finish of one or more activities. (e.g., "Requirements Approved," "Code Complete")
*   **Dependency:** A relationship between activities where one activity cannot start until another is completed. (e.g., "Code Application" depends on "Design Application Architecture").  Dependencies can be:
    *   **Finish-to-Start (FS):**  Activity B cannot start until Activity A finishes. (Most common)
    *   **Start-to-Start (SS):**  Activity B cannot start until Activity A starts.
    *   **Finish-to-Finish (FF):**  Activity B cannot finish until Activity A finishes.
    *   **Start-to-Finish (SF):**  Activity B cannot finish until Activity A starts. (Least common, use with caution)
*   **Duration:** The estimated time required to complete an activity.
*   **Network Diagram:** A visual representation of the project schedule, showing activities, dependencies, and the sequence of work.  Two common types:
    *   **Activity-on-Node (AON):** Activities are represented by nodes (boxes), and dependencies are shown as arrows connecting the nodes. (This is the method we'll focus on).
    *   **Activity-on-Arrow (AOA):** Activities are represented by arrows, and nodes represent events (milestones). Less commonly used in modern software project management.
*   **Path:** A sequence of connected activities from the start to the end of the project.
*   **Critical Path:** The longest path through the network diagram, determining the shortest possible project completion time.  Activities on the critical path have zero total float.
*   **Earliest Start (ES):** The earliest possible time an activity can begin, assuming all its predecessors are completed as early as possible.
*   **Earliest Finish (EF):** The earliest possible time an activity can be completed.  EF = ES + Duration
*   **Latest Start (LS):** The latest possible time an activity can begin without delaying the overall project completion.
*   **Latest Finish (LF):** The latest possible time an activity can be completed without delaying the overall project completion.
*   **Total Float (Slack):** The amount of time an activity can be delayed without delaying the overall project completion.  Total Float = LS - ES  or  Total Float = LF - EF
*   **Free Float:** The amount of time an activity can be delayed without delaying the start of any successor activities.  Free Float = ES(successor) - EF(current activity)  (Often not calculated but can be useful)
*   **Interfering Float:** The difference between Total Float and Free Float. Represented by total float - free float.

### 3. Calculating the Critical Path Using Network Diagrams (Activity-on-Node)

**Steps:**

1.  **Create the Network Diagram (AON):**
    *   Represent each activity as a node (box).
    *   Draw arrows to represent dependencies between activities.
    *   Add Start and End nodes to represent the beginning and end of the project.
2.  **Forward Pass (Calculate ES and EF):**
    *   Start with the Start node.  ES = 0.  EF = ES + Duration.
    *   For each subsequent activity:
        *   ES = Maximum EF of all predecessor activities.
        *   EF = ES + Duration.
3.  **Backward Pass (Calculate LS and LF):**
    *   Start with the End node.  LF = EF (from the forward pass).  LS = LF - Duration.
    *   For each preceding activity:
        *   LF = Minimum LS of all successor activities.
        *   LS = LF - Duration.
4.  **Calculate Total Float (Slack):**
    *   For each activity:  Total Float = LS - ES  or  Total Float = LF - EF
5.  **Identify the Critical Path:**
    *   The critical path consists of activities with zero total float.  Connect these activities from start to end.

**Example:**

Let's consider a simplified software development project with the following activities and durations:

| Activity | Description                | Duration (Days) | Predecessor(s) |
| :------- | :------------------------- | :------------- | :------------- |
| A        | Requirements Gathering      | 5              | -             |
| B        | Design Architecture        | 7              | A             |
| C        | Develop Database           | 6              | B             |
| D        | Develop UI                 | 8              | B             |
| E        | Integrate Components       | 4              | C, D          |
| F        | Testing                    | 5              | E             |

**1. Network Diagram (AON):** (Imagine a diagram where boxes represent activities, and arrows show dependencies.  I can't draw it here, but you would draw an arrow from A to B, B to C and D, C and D to E, and E to F). You would also add start and end nodes to the diagram.

**2. Forward Pass:**

| Activity | Duration | Predecessor(s) | ES  | EF  |
| :------- | :------- | :------------- | :-: | :-: |
| A        | 5        | -             | 0   | 5   |
| B        | 7        | A             | 5   | 12  |
| C        | 6        | B             | 12  | 18  |
| D        | 8        | B             | 12  | 20  |
| E        | 4        | C, D          | 20  | 24  |
| F        | 5        | E             | 24  | 29  |
|End | 0 | F| 29|29|

**3. Backward Pass:**

| Activity | Duration | Predecessor(s) | ES  | EF  | LS  | LF  |
| :------- | :------- | :------------- | :-: | :-: | :-: | :-: |
| A        | 5        | -             | 0   | 5   | 0   | 5   |
| B        | 7        | A             | 5   | 12  | 5   | 12  |
| C        | 6        | B             | 12  | 18  | 14 | 20  |
| D        | 8        | B             | 12  | 20  | 12  | 20  |
| E        | 4        | C, D          | 20  | 24  | 20  | 24  |
| F        | 5        | E             | 24  | 29  | 24  | 29  |
|End | 0 | F| 29|29|29|29|

**4. Calculate Total Float:**

| Activity | Duration | Predecessor(s) | ES  | EF  | LS  | LF  | Total Float |
| :------- | :------- | :------------- | :-: | :-: | :-: | :-: | :----------: |
| A        | 5        | -             | 0   | 5   | 0   | 5   | 0            |
| B        | 7        | A             | 5   | 12  | 5   | 12  | 0            |
| C        | 6        | B             | 12  | 18  | 14 | 20  | 2        |
| D        | 8        | B             | 12  | 20  | 12  | 20  | 0            |
| E        | 4        | C, D          | 20  | 24  | 20  | 24  | 0            |
| F        | 5        | E             | 24  | 29  | 24  | 29  | 0            |
|End | 0 | F| 29|29|29|29|0|

**5. Identify Critical Path:**

The critical path is **A -> B -> D -> E -> F (and by definition, also Start -> A and F -> End)** because these activities have a total float of zero.

The project duration is **29 days**.

### 4. Impact of Changes on the Critical Path

*   **Increased Duration of a Critical Activity:**  Directly increases the project duration and may shift the critical path.
*   **Decreased Duration of a Critical Activity:**  May shorten the project duration and potentially shift the critical path if another path becomes longer.
*   **Increased Duration of a Non-Critical Activity:** If the increased duration exceeds the total float of the activity, it can become critical and shift the critical path.
*   **Adding a New Activity:** If the new activity is on the critical path (based on its dependencies), it will increase the project duration.
*   **Removing an Activity:**  Can shorten the project duration, but the critical path must be recalculated.
*   **Changing Dependencies:** Can significantly alter the critical path and project duration.

**Example:**

In the previous example, if Activity D (Develop UI) increased in duration from 8 days to 12 days, the critical path would still be A -> B -> D -> E -> F but the project completion time would change as well. The values for ES, EF, LS, LF, and Float would have to be recalculated and updated.

### 5. Practice Questions/Exercises

**Question 1:**

Consider the following project activities:

| Activity | Description | Duration (Days) | Predecessor(s) |
| :------- | :---------- | :------------- | :------------- |
| A        | Activity A  | 4              | -             |
| B        | Activity B  | 6              | A             |
| C        | Activity C  | 5              | A             |
| D        | Activity D  | 7              | B, C          |
| E        | Activity E  | 3              | D             |
| F        | Activity F  | 4              | B            |
| G        | Activity G  | 2              | F             |
| H        | Activity H | 3              | G             |

a) Draw the network diagram (AON).
b) Calculate ES, EF, LS, LF, and Total Float for each activity.
c) Identify the critical path and the project duration.

**Question 2:**

In Question 1, if Activity C's duration increased to 8 days, what impact would this have on:

a) The critical path?
b) The project completion time?

**Question 3:**

Why is critical path analysis important for project managers? Provide at least three reasons.

**Answers:**

**Question 1:**

a)  (Imagine the AON diagram)

b)

| Activity | Duration | ES  | EF  | LS  | LF  | Total Float |
| :------- | :------- | :-: | :-: | :-: | :-: | :----------: |
| A        | 4        | 0   | 4   | 0   | 4   | 0            |
| B        | 6        | 4   | 10  | 4   | 10  | 0            |
| C        | 5        | 4   | 9   | 5   | 10  | 1            |
| D        | 7        | 10  | 17  | 10  | 17  | 0            |
| E        | 3        | 17  | 20  | 17  | 20  | 0            |
| F        | 4        | 10  | 14 | 10  | 14  | 0 |
| G       | 2 | 14|16|14|16|0|
| H        | 3        | 16 |19|17|20|1|

c) The critical path is **A -> B -> D -> E**, **A -> B -> F -> G** Project duration = 20 days, 16 days.

**Question 2:**

a)  If Activity C's duration increased to 8 days:

| Activity | Duration | ES  | EF  | LS  | LF  | Total Float |
| :------- | :------- | :-: | :-: | :-: | :-: | :----------: |
| A        | 4        | 0   | 4   | 0   | 4   | 0            |
| B        | 6        | 4   | 10  | 4   | 10  | 0            |
| C        | 8        | 4   | 12   | 5   | 13  | 1            |
| D        | 7        | 12  | 19  | 12  | 19  | 0            |
| E        | 3        | 19  | 22  | 19  | 22  | 0            |
| F        | 4        | 10  | 14 | 10  | 14  | 0 |
| G       | 2 | 14|16|14|16|0|
| H        | 3        | 16 |19|17|20|1|

The critical path is **A -> B -> D -> E**, **A -> B -> F -> G**

b) The project completion time will extend to 22 days.

**Question 3:**

Reasons why critical path analysis is important:

*   **Effective Project Planning:**  Identifies the most crucial activities and their impact on the project schedule.
*   **Resource Allocation:**  Helps prioritize resource allocation to critical activities to minimize delays.
*   **Risk Management:**  Enables proactive risk mitigation by identifying activities that, if delayed, will directly impact the project completion date.

### 6. Important Points to Remember

*   The critical path is the *longest* path, not the shortest.
*   Activities on the critical path have zero total float, *but* activities with zero total float are not *always* on the critical path if multiple paths merge into one critical activity.
*   Changes to project scope, resources, or dependencies can significantly impact the critical path.
*   CPA is a valuable tool, but it relies on accurate activity duration estimates.
*   Software tools can automate critical path calculation, making it easier to manage complex projects.  Consider using tools like Microsoft Project, Jira, or Asana.
*   The critical path might shift during the course of the project, so it needs to be monitored and updated regularly.
