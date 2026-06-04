---
title: "By participating in an event, you can claim for activity points as stipulated by KTU."
subject: "DATA STRUCTURES LAB"
module: "Module 17: The CSE dept is organizing a tech fest with so many exciting events."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae8f"
status: "completed"
scrapedAt: "2026-05-20T16:23:35.095Z"
---
# DATA STRUCTURES LAB - Module 17: Tech Fest Activity Point Allocation

**Topic:** By participating in an event, you can claim for activity points as stipulated by KTU.

**Description:** The CSE dept is organizing a tech fest with exciting events. Implement a data structure to manage participants, events, and allocate activity points according to KTU guidelines.

**Learning Outcomes:**

*   Understand the problem statement and translate it into a data structure design.
*   Choose appropriate data structures (e.g., arrays, linked lists, dictionaries/hash tables) to represent participants, events, and activity points.
*   Implement data structures to efficiently store and retrieve participant and event information.
*   Develop algorithms to allocate activity points based on event participation.
*   Practice fundamental data structure operations such as insertion, deletion, searching, and updating.
*   Understand the importance of data structure selection based on the specific problem.
*   Apply learned data structures and algorithms to solve a real-world problem.

## 1. Understanding the Problem and Data Structure Design

*   **Problem Statement Breakdown:** The core problem is to manage participant enrollment in tech fest events and subsequently allocate activity points as per KTU rules. This involves:
    *   Storing information about participants (e.g., roll number, name, department).
    *   Storing information about events (e.g., event name, maximum activity points, event type).
    *   Recording participant participation in specific events.
    *   Calculating and allocating activity points based on participation.

*   **Data Structure Considerations:**
    *   **Participants:** A `Participant` class/struct to hold participant information (roll number, name, department, points earned). A list or array-based structure (ArrayList/Vector in Java, list in Python, array in C/C++) or a Dictionary/HashTable mapping Roll Number to Participant objects.
    *   **Events:** An `Event` class/struct to hold event information (event name, max points, event type).  A list/array or Dictionary/HashTable mapping Event Name to Event objects.
    *   **Participation:** A separate structure to track which participants attended which events. This can be implemented using a matrix (Participant x Event) or a more efficient data structure like a Dictionary/HashTable where the key is the participant and the value is a list of events they participated in.  A simpler approach could be associating a list of participants with each Event object.
    *   **Activity Points:**  Each participant will have an associated `activity_points` attribute (within the `Participant` class/struct) which is updated when they participate in events.

## 2. Choosing Appropriate Data Structures

*   **Arrays/Lists:**
    *   **Advantages:** Simple to implement, fast access using index.
    *   **Disadvantages:** Fixed size (arrays), potential for slow insertion/deletion in the middle of the list.
    *   **Use Cases:** Good for a small, fixed set of participants or events if frequent insertions/deletions are not expected.

*   **Linked Lists:**
    *   **Advantages:** Dynamic size, easy insertion/deletion.
    *   **Disadvantages:** Slower access (linear search), requires more memory (pointers).
    *   **Use Cases:** If the number of participants/events is unknown or changes frequently.

*   **Dictionaries/Hash Tables (HashMap in Java, dict in Python, unordered_map in C++):**
    *   **Advantages:** Fast search, insertion, and deletion (average O(1) time complexity).
    *   **Disadvantages:** Requires more memory, collision handling required.
    *   **Use Cases:** Ideal for storing participants and events where quick access based on Roll Number or Event Name is required.  Essential for the participation tracking data structure.

*   **Decision Rationale:**  Given the need for quick lookup and modification of participant and event details, a **Dictionary/HashTable** is generally the best choice for `Participants` and `Events`.  A dictionary mapping Participant ID to a List of Event objects is a good choice for managing event participation.

## 3. Implementing Data Structures

Here's a conceptual example using Python (other languages follow similar logic):

```python
class Participant:
    def __init__(self, roll_number, name, department):
        self.roll_number = roll_number
        self.name = name
        self.department = department
        self.activity_points = 0

    def __repr__(self):  # For easy printing
        return f"Participant(Roll: {self.roll_number}, Name: {self.name}, Points: {self.activity_points})"


class Event:
    def __init__(self, event_name, max_points, event_type):
        self.event_name = event_name
        self.max_points = max_points
        self.event_type = event_type
        self.participants = []  # List of participants attending

    def __repr__(self):  # For easy printing
        return f"Event(Name: {self.event_name}, Points: {self.max_points})"


# Data Structures
participants = {}  # Dictionary: Roll Number -> Participant object
events = {}  # Dictionary: Event Name -> Event object


# Example usage:

# Adding a participant
p1 = Participant("RA123", "Alice", "CSE")
participants[p1.roll_number] = p1

# Adding an event
e1 = Event("Coding Competition", 50, "Technical")
events[e1.event_name] = e1

print(participants)
print(events)
```

## 4. Algorithms for Activity Point Allocation

*   **Core Algorithm:**
    1.  Identify the participant and the event.
    2.  Check if the participant is already participating in the event (Optional). This may depend on the KTU rules.
    3.  Retrieve the maximum activity points for the event.
    4.  Add the event to the participant's event list (or vice versa).
    5.  Update the participant's `activity_points` by adding the event's `max_points`.

*   **Implementation (Python):**

```python
def allocate_points(roll_number, event_name):
    if roll_number in participants and event_name in events:
        participant = participants[roll_number]
        event = events[event_name]

        # Add participant to the event's participant list (if not already there)
        if participant not in event.participants:
             event.participants.append(participant)

        participant.activity_points += event.max_points
        print(f"Allocated {event.max_points} points to {participant.name} for {event.event_name}")
    else:
        print("Invalid Roll Number or Event Name.")


# Example: Allocate points to Alice for the Coding Competition
allocate_points("RA123", "Coding Competition")
print(participants)  # Check Alice's updated points
print(events['Coding Competition'].participants) # Check participants of coding competition
```

## 5. Fundamental Data Structure Operations

*   **Insertion:** Adding a new participant or event to the respective dictionaries. Example shown above in the implementation.
*   **Deletion:** Removing a participant or event.  Involves removing the entry from the dictionary.
    ```python
    del participants["RA123"]  # Deletes Alice
    ```
*   **Searching:** Finding a participant or event based on Roll Number or Event Name.  Dictionaries provide O(1) (average) lookup.
    ```python
    if "RA123" in participants:
        print(participants["RA123"])
    ```
*   **Updating:** Modifying participant or event details.  Directly modify the attributes of the object after retrieving it from the dictionary.
    ```python
    participants["RA123"].name = "Alicia" # Update Alice's name.
    ```

## 6. Importance of Data Structure Selection

*   The choice of data structure significantly impacts the performance and efficiency of the system.  Using a Dictionary/HashTable provides fast lookups, crucial for managing a large number of participants and events.
*   Considerations:
    *   **Frequency of operations:** How often will you be adding, deleting, searching, or updating data?
    *   **Size of data:** How many participants and events will the system need to handle?
    *   **Memory constraints:** How much memory is available?
*   For a large tech fest, the O(1) average-case lookup provided by HashTables is invaluable.  Linear search through a list would be far too slow.

## 7. Real-World Application

This activity point allocation system is a simplified model of many real-world applications:

*   **Event Management Systems:** Tracking participant attendance, managing event schedules, and assigning points for participation.
*   **Student Information Systems:** Tracking student activity points, managing course registrations, and generating reports.
*   **Loyalty Programs:** Rewarding customers for their purchases or participation in activities.

## Practice Questions/Exercises

1.  **Modify the code to handle event types (Technical, Cultural, Sports) and assign different maximum points based on the event type.** (Hint:  Add an `event_type` attribute to the `Event` class and use `if/else` to determine points.)
2.  **Implement a function to calculate the total activity points for a specific department.** (Hint: Iterate through the `participants` dictionary and check if the participant belongs to the given department. Sum their points.)
3.  **Add a feature to prevent a participant from registering for the same event multiple times.** (Hint: Check if the participant is already in the event's participant list before adding them.)
4.  **Implement a function to display the top N participants with the highest activity points.** (Hint: Use sorting to find the top N participants.)
5.  **How would you handle a scenario where the KTU rules change and activity point allocations need to be updated retroactively?** (Hint: Consider storing a history of activity point allocations or implementing a system to re-calculate points based on the new rules.)

**Answers:** (Conceptual)

1.  Add `event_type` to `Event` class. In `allocate_points()`, use `if event.event_type == "Technical": points = ... else if event.event_type == "Cultural": ...`
2.  Iterate through `participants.values()`, check `participant.department`, accumulate `participant.activity_points`.
3.  In `allocate_points()`, add `if participant in event.participants: return "Already registered"` *before* allocating points.
4.  Use Python's `sorted(participants.values(), key=lambda x: x.activity_points, reverse=True)` to get a sorted list, then take the first N elements.
5.  *   Store a history of activity points along with the associated KTU rules version for each point assignment.
    *   Alternatively, implement the rules within a function and rerun the allocation process based on the new rules, potentially tracking the changes made.  This can be computationally expensive.

## Important Points to Remember

*   **Choose data structures wisely based on the problem's requirements.**
*   **Understand the time and space complexity of different operations.**
*   **Implement error handling to ensure the system's robustness.**
*   **Consider future scalability and maintainability when designing the system.**
*   **Use meaningful variable names and comments to improve code readability.**
*   **Test your code thoroughly to ensure it functions correctly.**
