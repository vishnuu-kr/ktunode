---
title: "Precedence Relationship"
subject: "SOFTWARE PROJECT MANAGEMENT"
module: "Module 1: Project Overview and Feasibility Studies "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b681"
status: "completed"
scrapedAt: "2026-05-20T16:49:03.573Z"
---
# SOFTWARE PROJECT MANAGEMENT: Module 1 - Precedence Relationships

## Introduction

This document provides comprehensive study notes on Precedence Relationships, a crucial topic within the "Project Overview and Feasibility Studies" module of Software Project Management. Understanding precedence relationships is fundamental for effective project planning, scheduling, and resource allocation.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Define precedence relationships in the context of software projects.
*   Identify and differentiate between different types of precedence relationships.
*   Represent precedence relationships using network diagrams (Activity-on-Node and Activity-on-Arrow).
*   Determine the critical path of a project based on precedence relationships.
*   Understand the impact of precedence relationships on project scheduling and resource allocation.

## 1. Key Concepts and Definitions

*   **Activity:** A distinct, definable unit of work within a project.  Examples: "Requirement Gathering", "Database Design", "Coding Module A", "Testing User Interface".

*   **Precedence Relationship:** The logical dependency between project activities, specifying the order in which activities must be performed. It determines which activities must be completed before others can begin.  Essentially, it defines "what must happen before what else can happen".

*   **Predecessor Activity:** An activity that must be completed before another activity can start.

*   **Successor Activity:** An activity that cannot start until its predecessor activity is completed.

*   **Network Diagram:** A graphical representation of project activities and their precedence relationships. Two common types are Activity-on-Node (AON) and Activity-on-Arrow (AOA).

*   **Critical Path:** The longest path through the project network diagram. It represents the minimum time required to complete the project. Activities on the critical path have zero slack or float. Delaying any activity on the critical path will delay the entire project.

*   **Slack (or Float):** The amount of time an activity can be delayed without delaying the project completion date. Critical path activities have zero slack.

## 2. Types of Precedence Relationships

There are four primary types of precedence relationships:

*   **Finish-to-Start (FS):**  Activity B *cannot start* until Activity A *finishes*.  This is the most common type. Example: "Coding Module A" (Activity A) must finish before "Testing Module A" (Activity B) can start.

*   **Start-to-Start (SS):** Activity B *cannot start* until Activity A *starts*. Example:  "Training Team on New Software" (Activity A) must start before "Using New Software for Development" (Activity B) can start.  They can run in parallel, but B's start is contingent on A's start.

*   **Finish-to-Finish (FF):** Activity B *cannot finish* until Activity A *finishes*. Example: "Writing User Manual" (Activity A) must finish before "Publishing Software Release" (Activity B) can finish. They can run in parallel, but B's finish is contingent on A's finish.

*   **Start-to-Finish (SF):** Activity B *cannot finish* until Activity A *starts*. This is the least common and often the most confusing. Example: "Providing Support for Old System" (Activity A) must start before "Shutting Down Old System" (Activity B) can finish.  This is often used when there's a handover or support period.

## 3. Representing Precedence Relationships: Network Diagrams

There are two primary ways to represent precedence relationships graphically:

*   **Activity-on-Node (AON):** Activities are represented by nodes (typically boxes), and arrows represent the precedence relationships.  This is the most commonly used method in practice due to its simplicity.

    *   **Example:**  Imagine activities A (Design Database), B (Code Database), and C (Test Database).  If B depends on A (FS) and C depends on B (FS), the AON diagram would show:

        ```
        [A]  ----->  [B] ------> [C]
        ```

*   **Activity-on-Arrow (AOA):** Activities are represented by arrows, and nodes represent events or milestones.  This method often requires the use of "dummy" activities to correctly represent precedence relationships, making it more complex than AON.

    *   **Example:** Using the same activities A (Design Database), B (Code Database), and C (Test Database), the AOA diagram would show:

        ```
        Start ----> A ----> Milestone 1 ----> B ----> Milestone 2 ----> C ----> End
        ```
        *Dummy Activities:* If two activities share the same starting and ending nodes but are different, you must use a dummy activity (zero duration) to distinguish them.

## 4. Determining the Critical Path

The critical path is determined by identifying the longest sequence of activities through the network diagram. It is crucial because it represents the minimum project completion time.

**Steps to determine the critical path:**

1.  **Create the Network Diagram:**  Represent all activities and their precedence relationships (using either AON or AOA).
2.  **Forward Pass:** Calculate the *Earliest Start (ES)* and *Earliest Finish (EF)* times for each activity.
    *   Start with the first activity (or activities).  ES = 0.  EF = ES + Duration.
    *   For each subsequent activity, ES = the largest EF of all its predecessors.  EF = ES + Duration.
3.  **Backward Pass:** Calculate the *Latest Start (LS)* and *Latest Finish (LF)* times for each activity.
    *   Start with the last activity (or activities). LF = EF (typically project deadline). LS = LF - Duration.
    *   For each preceding activity, LF = the smallest LS of all its successors. LS = LF - Duration.
4.  **Calculate Slack (or Float):** Slack = LS - ES  *or*  Slack = LF - EF.
5.  **Identify Critical Path:** The critical path consists of all activities with zero slack.

**Example:**

Consider the following project activities and durations:

| Activity | Description         | Duration (Days) | Predecessors |
|----------|----------------------|-----------------|--------------|
| A        | Requirements          | 5               | None         |
| B        | Design              | 7               | A            |
| C        | Code                | 10              | B            |
| D        | Test                | 8               | C            |
| E        | Documentation         | 6               | B            |
| F        | Deployment          | 4               | D, E         |

1. **Create the AON Network Diagram:** (Visual representation - imagine boxes and arrows)

2. **Forward Pass:**

    | Activity | Duration | ES | EF |
    |----------|----------|----|----|
    | A        | 5        | 0  | 5  |
    | B        | 7        | 5  | 12 |
    | C        | 10       | 12 | 22 |
    | D        | 8        | 22 | 30 |
    | E        | 6        | 12 | 18 |
    | F        | 4        | 30 | 34 | (Because D finishes at 30, and E finishes at 18, F can only start at 30)

3. **Backward Pass:** (Assuming the project must be completed by day 34)

    | Activity | Duration | LS | LF |
    |----------|----------|----|----|
    | A        | 5        | 0  | 5  |
    | B        | 7        | 5  | 12 |
    | C        | 10       | 12 | 22 |
    | D        | 8        | 22 | 30 |
    | E        | 6        | 24 | 30 | (Since F must start by day 30, E cannot finish later than day 30)
    | F        | 4        | 30 | 34 |

4. **Calculate Slack:**

    | Activity | Slack (LS-ES) |
    |----------|---------------|
    | A        | 0             |
    | B        | 0             |
    | C        | 0             |
    | D        | 0             |
    | E        | 12            |
    | F        | 0             |

5. **Identify Critical Path:**  Activities with zero slack: A -> B -> C -> D -> F.  The critical path is Requirements -> Design -> Code -> Test -> Deployment.  The minimum project completion time is 34 days.

## 5. Impact on Project Scheduling and Resource Allocation

*   **Scheduling:** Precedence relationships directly dictate the project schedule. Any changes to these relationships or delays in activities on the critical path can significantly impact the project timeline.  The schedule becomes unrealistic if precedence relationships are not correctly defined.

*   **Resource Allocation:**  Precedence relationships influence how resources (personnel, equipment, budget) are allocated to different activities. Understanding dependencies helps in optimizing resource utilization and avoiding resource conflicts. If activity B cannot start until activity A is complete, resources allocated to activity B cannot be used until activity A is done.

*   **Risk Management:** Recognizing precedence relationships allows for better risk assessment.  Identifying dependencies helps understand the potential impact of delays or disruptions in one activity on subsequent activities. For example, if "Database Design" (Activity A) is delayed, "Coding Database" (Activity B) will also be delayed, and potentially impact "Testing" (Activity C).

## 6. Important Points to Remember

*   Accurately defining precedence relationships is crucial for realistic project planning.
*   The critical path determines the minimum project completion time.
*   Activities on the critical path require careful monitoring and management.
*   Slack or float provides flexibility in scheduling non-critical activities.
*   Network diagrams are powerful tools for visualizing project dependencies and identifying the critical path.
*   Using software project management tools can simplify the process of creating network diagrams and calculating the critical path.
*   Always revisit and update precedence relationships as the project progresses and new information becomes available.
*   SF relationships are rare and require careful thought and documentation. They can be easily misinterpreted.

## 7. Practice Questions/Exercises

**Question 1:** Define precedence relationship in the context of software project management.

**Answer:** A precedence relationship defines the logical dependency between project activities, specifying the order in which they must be performed. It determines which activities must be completed before others can begin.

**Question 2:** List the four types of precedence relationships and provide a brief explanation of each.

**Answer:**

*   **Finish-to-Start (FS):** Activity B cannot start until Activity A finishes.
*   **Start-to-Start (SS):** Activity B cannot start until Activity A starts.
*   **Finish-to-Finish (FF):** Activity B cannot finish until Activity A finishes.
*   **Start-to-Finish (SF):** Activity B cannot finish until Activity A starts.

**Question 3:** What is the critical path, and why is it important?

**Answer:** The critical path is the longest sequence of activities through the project network diagram. It is important because it represents the minimum time required to complete the project.  Any delay to an activity on the critical path will delay the whole project.

**Question 4:** Describe the difference between Activity-on-Node (AON) and Activity-on-Arrow (AOA) network diagrams. Which is more commonly used?

**Answer:** In AON, activities are represented by nodes (boxes), and arrows represent precedence relationships. In AOA, activities are represented by arrows, and nodes represent events/milestones. AON is more commonly used because it is simpler and easier to understand.

**Question 5:**  A software project has the following activities:

| Activity | Description         | Duration (Days) | Predecessors |
|----------|----------------------|-----------------|--------------|
| P        | Plan                | 3               | None         |
| Q        | Design              | 5               | P            |
| R        | Code                | 8               | Q            |
| S        | Test                | 4               | R            |

Determine the critical path and the minimum project completion time.

**Answer:**

*   The critical path is P -> Q -> R -> S.
*   The minimum project completion time is 3 + 5 + 8 + 4 = 20 days.

**Question 6:**  Why is it important to understand precedence relationships when allocating resources to project activities?

**Answer:** Understanding precedence relationships helps ensure that resources are allocated efficiently.  Resources allocated to a successor activity (e.g., testing) cannot be utilized until the predecessor activity (e.g., coding) is completed.  Ignoring precedence can lead to resource conflicts, underutilization, and delays.

**Question 7:** Explain the concept of Slack. How does slack affect project scheduling?

**Answer:** Slack (or Float) is the amount of time an activity can be delayed without delaying the overall project completion date. Activities on the critical path have zero slack. Activities with slack can be scheduled with more flexibility; they do not directly impact the project completion date unless their delay exceeds their slack. Activities with high slack can be candidates for resource leveling.

**Question 8:** You are managing a project and one of the activities on the critical path is delayed by two days. What is the impact on the overall project?

**Answer:** Because the activity is on the critical path, delaying it by two days will likely delay the entire project by two days, unless action is taken to accelerate remaining activities on the critical path.

## Conclusion

Understanding precedence relationships is a foundational skill for successful software project management. By mastering these concepts and applying them diligently, you can create realistic project plans, effectively manage resources, and minimize the risk of project delays. Always strive to document and visualize these relationships clearly for all stakeholders involved.
