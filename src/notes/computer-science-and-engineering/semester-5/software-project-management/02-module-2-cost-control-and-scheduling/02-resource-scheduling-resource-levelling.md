---
title: "Resource Scheduling & Resource Levelling"
subject: "SOFTWARE PROJECT MANAGEMENT"
module: "Module 2: Cost Control and Scheduling "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b687"
status: "completed"
scrapedAt: "2026-05-20T16:49:07.082Z"
---
## Software Project Management: Module 2 - Cost Control and Scheduling
## Topic: Resource Scheduling & Resource Levelling

**Module Learning Outcome:** Understand and apply techniques for cost control and schedule management in software projects.

**Topic Learning Outcome:** Understand and apply resource scheduling and resource leveling techniques to optimize project resource utilization and minimize project delays.

---

### 1. Introduction to Resource Scheduling and Resource Levelling

*   **Definition of Resource Scheduling:** The process of assigning resources (e.g., people, equipment, software licenses) to project activities based on their availability, skills, and the project schedule. It aims to ensure that the right resources are available at the right time to complete tasks efficiently.

*   **Definition of Resource Levelling:**  A technique used to adjust the project schedule to resolve resource overallocation or under-allocation.  It aims to smooth out resource demands over the project's duration, preventing bottlenecks and improving resource utilization.  It does *not* necessarily shorten the project duration.

*   **Importance of Resource Scheduling and Levelling:**

    *   **Prevents Resource Overallocation:** Avoids situations where the same resource is assigned to multiple tasks simultaneously.
    *   **Improves Resource Utilization:** Ensures resources are used efficiently throughout the project.
    *   **Reduces Project Delays:** Minimizes delays caused by resource conflicts or unavailability.
    *   **Controls Project Costs:** Optimizes resource usage, potentially reducing costs associated with hiring extra resources or paying overtime.
    *   **Increases Team Morale:**  Helps prevent burnout and stress by ensuring reasonable workloads.
    *   **Provides a realistic Project Schedule:** Accounts for resource constraints, creating a more achievable project timeline.

### 2. Key Concepts and Definitions

*   **Resource Pool:** The collection of all available resources for the project (e.g., all developers, testers, project managers).

*   **Resource Availability:** The amount of time a resource is available to work on the project (e.g., 40 hours per week, excluding vacation time).

*   **Resource Allocation:** The assignment of a specific resource to a specific task for a specific duration.

*   **Resource Overallocation:** Occurs when a resource is assigned to more work than they can handle within a given timeframe (e.g., assigned to 80 hours of work in a 40-hour week).

*   **Resource Under-allocation:** Occurs when a resource is not fully utilized or assigned fewer tasks than they are capable of handling.

*   **Critical Path:** The sequence of activities that determines the earliest possible completion date of the project. Delays in critical path activities will delay the entire project.

*   **Float (Slack):** The amount of time an activity can be delayed without delaying the project completion date. Activities on the critical path have zero float.

*   **Precedence Diagram (Network Diagram):** A visual representation of the project activities and their dependencies.  Used for scheduling and identifying the critical path.

*   **Gantt Chart:** A bar chart that visually displays the project schedule, showing the start and end dates of each activity.

*   **Resource Histogram:** A graph showing the demand for a particular resource over time.  Used to visualize resource allocation and identify overallocation.

### 3. Resource Scheduling Techniques

*   **Manual Scheduling:** Manually assigning resources to tasks, often using spreadsheets or project management software. This is suitable for small projects with few resources.

    *   **Advantages:** Simple, easy to understand.
    *   **Disadvantages:** Time-consuming, error-prone, difficult to manage resource conflicts in larger projects.

*   **Automated Scheduling:** Using project management software with built-in scheduling capabilities to automatically assign resources to tasks based on predefined criteria.

    *   **Advantages:** Faster, more accurate, handles resource conflicts more effectively, provides optimization algorithms.
    *   **Disadvantages:** Requires specialized software, can be complex to configure, may not always produce the optimal schedule.

*   **Heuristic-Based Scheduling:** Using rule-of-thumb approaches to prioritize resource allocation. Examples include:

    *   **Shortest Processing Time (SPT):** Allocate resources to tasks with the shortest estimated duration first.
    *   **Earliest Due Date (EDD):** Allocate resources to tasks with the earliest due date first.
    *   **Critical Path Method (CPM):** Focus on allocating resources to tasks on the critical path first.

    *   **Advantages:** Relatively simple, quick to implement.
    *   **Disadvantages:** May not always produce the optimal schedule, can lead to delays for longer tasks.

### 4. Resource Levelling Techniques

*   **Delaying Non-Critical Activities:**  Shifting activities with float to later in the schedule to reduce resource demand during peak periods. This is the most common technique.

*   **Splitting Activities:** Dividing a single activity into smaller parts, allowing resources to work on other tasks in between.  This can increase overall project duration.

*   **Resource Substitution:** Replacing a resource with another resource that has the same skills and availability. Requires careful consideration of skill levels and experience.

*   **Adding Resources:** Bringing in additional resources (e.g., hiring temporary staff, outsourcing) to increase capacity.  This increases project cost.

*   **Re-prioritizing Activities:** Changing the order in which activities are performed based on resource availability.

*   **Fast Tracking:** Overlapping activities that were originally planned to be performed sequentially. This increases risk of rework and may not be possible.

*   **Crashing:** Adding more resources to critical path activities to shorten their duration. Increases project cost and risk.

**Example of Resource Levelling:**

Consider a project with two developers, Alice and Bob. Both are needed for Task A and Task B. Task A is on the critical path and requires 10 days of effort, while Task B is not and requires 5 days of effort. Alice and Bob can only work on one task at a time.

*   **Before Levelling:** If both tasks were scheduled to start at the same time, Alice and Bob would be overallocated.

*   **After Levelling:** Task B, being non-critical, could be delayed until Task A is complete. This eliminates the overallocation and allows Alice and Bob to work efficiently.

### 5. Steps for Resource Scheduling and Resource Levelling

1.  **Identify Project Resources:** List all resources available for the project, including their skills, availability, and cost.
2.  **Estimate Resource Requirements:** Determine the resources needed for each activity.
3.  **Develop a Project Schedule:** Create a preliminary schedule based on activity dependencies and estimated durations.
4.  **Assign Resources to Activities:** Allocate resources to activities based on their skills and availability.
5.  **Analyze Resource Allocation:** Identify resource overallocation and under-allocation using resource histograms.
6.  **Apply Resource Levelling Techniques:** Adjust the schedule to resolve resource conflicts and optimize resource utilization.  Prioritize delaying non-critical tasks.
7.  **Update the Project Schedule:** Reflect the changes made during resource levelling in the project schedule.
8.  **Monitor Resource Utilization:** Track resource usage throughout the project and make adjustments as needed.

### 6. Tools and Techniques for Resource Scheduling and Resource Levelling

*   **Project Management Software:** (e.g., Microsoft Project, Jira, Asana, Primavera P6) – Provides features for resource allocation, scheduling, tracking, and reporting.
*   **Spreadsheets:** (e.g., Microsoft Excel, Google Sheets) – Can be used for basic resource scheduling and tracking, especially for smaller projects.
*   **Resource Histograms:** Visual representation of resource utilization over time.
*   **Network Diagrams:** Used to identify the critical path and activities with float.
*   **Gantt Charts:** Used to visualize the project schedule and resource assignments.

### 7. Common Challenges and Considerations

*   **Inaccurate Resource Estimates:** Overestimating or underestimating resource requirements can lead to scheduling problems.
*   **Resource Availability Changes:** Unexpected absences (e.g., illness, vacation) can disrupt the schedule.
*   **Scope Creep:** Adding new features or tasks without adjusting the schedule and resource allocation.
*   **Skill Gaps:** Lack of required skills among available resources.
*   **Communication Breakdown:** Poor communication between team members and project managers can lead to misunderstandings and resource conflicts.
*   **Changing Priorities:** Shifting priorities can necessitate schedule and resource adjustments.
*   **Multiple Projects:** When resources are shared across multiple projects, scheduling becomes more complex.

### 8.  Practice Questions & Exercises

1.  **Question:** What is the primary difference between resource scheduling and resource levelling?

    *   **Answer:** Resource scheduling is assigning resources to tasks, while resource levelling adjusts the schedule to smooth out resource demands.  Scheduling assigns, levelling optimizes by adjusting task timing, not necessarily project completion time.

2.  **Question:** Explain the concept of resource overallocation and provide an example.

    *   **Answer:** Resource overallocation occurs when a resource is assigned more work than they can handle in a given timeframe. For example, a developer is assigned to two tasks, each requiring 40 hours of work, in a single 40-hour week.

3.  **Question:** List three resource levelling techniques.

    *   **Answer:** Delaying non-critical activities, splitting activities, and resource substitution.

4.  **Question:** What is a resource histogram and how is it used in resource management?

    *   **Answer:** A resource histogram is a graph that shows the demand for a particular resource over time. It's used to visualize resource allocation, identify overallocation and under-allocation, and track resource utilization.

5.  **Exercise:** A project has the following activities and resource requirements:

    | Activity | Duration (Days) | Resource Required |
    |---|---|---|
    | A | 5 | Developer |
    | B | 7 | Tester |
    | C | 3 | Developer |
    | D | 4 | Tester |
    | E | 6 | Developer |

    Assume you have one developer and one tester available. Activities A and B can start concurrently. Activity C depends on A, Activity D depends on B, and Activity E depends on C.

    a) Create a Gantt chart showing the initial schedule without resource levelling.
    b) Identify any resource overallocation.
    c) Apply resource levelling techniques to resolve the overallocation and create a revised Gantt chart.

    *   **Answer (Example):**

        a) Initial Gantt Chart (without levelling):  Activities A and B will start at the same time, and resources will be used as per the initial allocation, resulting in overallocation as activities C, D and E will be delayed.

        b) Resource Overallocation: The developer is overallocated because Activity A and Activity C require the developer simultaneously.

        c) Revised Gantt Chart (after levelling): You would delay Activity C until Activity A is complete to resolve the developer overallocation. Activities D and E also get delayed.  You will see, that the duration of Activities A, C, D and E are now impacted, resulting in project delay as well.

### 9. Important Points to Remember

*   Resource scheduling and levelling are iterative processes. You may need to adjust the schedule multiple times as the project progresses.
*   Communication is key. Keep team members informed of schedule changes and resource assignments.
*   Use project management software to automate scheduling and tracking.
*   Consider the impact of resource levelling on the project's critical path. Delaying critical path activities will delay the entire project.
*   Focus on optimizing resource utilization to control costs and prevent delays.
*   Document all assumptions and decisions related to resource scheduling and levelling.
*   Continuously monitor resource utilization and make adjustments as needed.

These notes should provide a comprehensive overview of resource scheduling and resource levelling in software project management. Remember to practice these techniques using real-world examples to further enhance your understanding. Good luck!
