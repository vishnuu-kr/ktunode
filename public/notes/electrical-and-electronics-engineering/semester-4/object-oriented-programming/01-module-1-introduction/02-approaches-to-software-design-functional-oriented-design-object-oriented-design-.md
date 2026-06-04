---
title: "Approaches to Software Design - Functional Oriented Design, Object Oriented Design, Case Study of Automated Fire Alarm System."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36002"
status: "completed"
scrapedAt: "2026-05-23T16:17:26.823Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 1: Introduction

### Topic: Approaches to Software Design - Functional Oriented Design, Object Oriented Design, Case Study of Automated Fire Alarm System

This module introduces fundamental software design approaches, contrasting Functional Oriented Design (FOD) with Object Oriented Design (OOD). We will explore their core principles and then apply these concepts to a practical case study: an Automated Fire Alarm System.

---

### Learning Outcomes:

*   Understand the core principles of Functional Oriented Design (FOD) and Object Oriented Design (OOD).
*   Differentiate between FOD and OOD, highlighting their strengths and weaknesses.
*   Identify the key characteristics and benefits of OOD.
*   Analyze the requirements and design a solution for an Automated Fire Alarm System using both FOD and OOD paradigms.

---

### Key Concepts and Definitions:

#### 1. Software Design Approaches

Software design is the process of planning a software solution to a problem. It involves defining the architecture, components, interfaces, and data for a system. Two prominent approaches are:

*   **Functional Oriented Design (FOD)**
*   **Object Oriented Design (OOD)**

---

#### 2. Functional Oriented Design (FOD)

FOD, also known as **procedural programming**, focuses on **actions or functions** that operate on data. The program is seen as a sequence of steps or instructions that transform input data into output data.

*   **Core Idea:** Break down a problem into a set of procedures or functions, each performing a specific task. Data is typically global or passed between functions.
*   **Structure:** Programs are organized around functions. Data structures are often separate from the functions that operate on them.
*   **Key Elements:**
    *   **Functions/Procedures:** Self-contained blocks of code that perform a specific operation.
    *   **Data Structures:** Ways to organize and store data (e.g., arrays, structs).
    *   **Control Flow:** The order in which instructions are executed (e.g., sequential, conditional, loops).
*   **Strengths:**
    *   Simple to understand for smaller, straightforward problems.
    *   Efficient in terms of execution speed for certain tasks.
    *   Good for systems where the primary focus is on processing data in a sequential manner.
*   **Weaknesses:**
    *   **Data is exposed:** Can lead to unintended modifications of data by different functions.
    *   **Difficult to maintain and extend:** Changes in one function can have ripple effects on others.
    *   **Poor reusability:** Functions are often tightly coupled to specific data structures.
    *   **Doesn't map well to real-world problems:** Real-world entities and their behaviors are not easily represented by a collection of independent functions.
*   **Example:** A simple program to calculate the area of a rectangle might have a `calculateArea(length, width)` function.

**Reference:**
*   *Fundamentals of Software Engineering by Rajib Mall* discusses procedural programming as an earlier paradigm, emphasizing its step-by-step execution and function-centric approach.

---

#### 3. Object Oriented Design (OOD)

OOD is a programming paradigm based on the concept of **"objects"**. Objects are instances of **classes**, which are blueprints that combine data (attributes or properties) and behavior (methods or functions) into a single unit.

*   **Core Idea:** Model the problem domain as a collection of interacting objects. Each object encapsulates its own data and behavior.
*   **Structure:** Programs are organized around objects and their interactions.
*   **Key Principles of OOD:**
    *   **Encapsulation:** Bundling data (attributes) and methods (behaviors) that operate on that data within a single unit (class). It hides the internal state of an object and provides a public interface for interaction.
        *   **Example:** A `Car` object might encapsulate `speed`, `color` (data) and `accelerate()`, `brake()` (methods). The internal details of how acceleration works are hidden.
    *   **Abstraction:** Hiding complex implementation details and showing only the essential features of an object. It focuses on "what" an object does rather than "how" it does it.
        *   **Example:** When you drive a car, you interact with the steering wheel, accelerator, and brakes. You don't need to know the intricate mechanics of the engine.
    *   **Inheritance:** A mechanism where a new class (subclass or derived class) inherits properties and behaviors from an existing class (superclass or base class). This promotes code reuse and creates a hierarchy of classes.
        *   **Example:** A `SportsCar` class can inherit from a `Car` class. It will have all the properties of a `Car` (like `speed`, `color`) and can add its own specific attributes (like `spoilerType`) and behaviors (like `activateTurbo()`).
    *   **Polymorphism:** The ability of an object to take on many forms. It allows methods to perform different actions based on the object they are called on.
        *   **Example:** If you have a `Shape` class with a `draw()` method, and `Circle`, `Square`, `Triangle` classes inherit from `Shape` and override `draw()`, calling `draw()` on different shape objects will result in different drawing actions.

*   **Benefits of OOD:**
    *   **Modularity:** Programs are divided into independent objects, making them easier to develop, test, and debug.
    *   **Reusability:** Classes can be reused across different projects, saving development time. Inheritance further enhances reusability.
    *   **Maintainability:** Changes made to one object are less likely to affect other objects, making maintenance easier.
    *   **Extensibility:** New features can be added by creating new classes or extending existing ones without modifying the original code.
    *   **Real-world mapping:** OOD more naturally models real-world entities and their interactions.
    *   **Better for complex systems:** Manages complexity effectively.

**References:**
*   *Java: The Complete Reference* by Herbert Schildt extensively covers the principles of object-oriented programming, including encapsulation, inheritance, and polymorphism, with Java examples.
*   *Java How to Program* by Deitel & Deitel also provides a thorough introduction to OOP concepts and their implementation in Java.
*   *Programming JAVA a Primer* by Balagurusamy offers foundational knowledge on Java and its object-oriented features.
*   *Object Oriented Systems Development using the Unified Modeling Language* by Ali Bahrami and *Object Oriented Design with UML and Java* by Barclay K.J. Savage focus on the design aspects using UML, a common tool for visualizing OOD.

---

#### 4. Comparing FOD and OOD

| Feature         | Functional Oriented Design (FOD)                   | Object Oriented Design (OOD)                              |
| :-------------- | :------------------------------------------------- | :-------------------------------------------------------- |
| **Focus**       | Actions/Functions                                  | Objects (data + behavior)                                 |
| **Approach**    | Top-down decomposition into procedures             | Bottom-up composition of objects                          |
| **Data**        | Often global, exposed to many functions            | Encapsulated within objects, accessed via methods         |
| **Modularity**  | Functions                                          | Objects/Classes                                           |
| **Reusability** | Limited, often tied to specific data structures    | High, through classes and inheritance                     |
| **Maintainability** | Difficult, changes can have widespread impact      | Easier, changes localized within objects                  |
| **Complexity**  | Can become complex for large systems               | Manages complexity well, especially for large systems     |
| **Real-world mapping** | Less direct                                        | More direct, models real-world entities                   |

---

### Case Study: Automated Fire Alarm System

Let's consider the design of an automated fire alarm system. The system needs to detect fire, alert occupants, and potentially trigger other safety measures.

#### Requirements:

1.  **Fire Detection:** The system must be able to detect the presence of fire. This could involve various sensors (smoke sensors, heat sensors).
2.  **Alarm Activation:** When fire is detected, the system should activate an audible alarm (e.g., siren) and a visual alarm (e.g., flashing light).
3.  **Zone Identification:** The system should be able to identify the zone where the fire is detected.
4.  **Manual Override:** Users should be able to manually activate or deactivate the alarm.
5.  **System Status:** The system should report its operational status (e.g., normal, alarm triggered, sensor malfunction).
6.  **Scalability:** The system should be expandable to accommodate more sensors and zones.

#### 4.1. Functional Oriented Design (FOD) Approach

In FOD, we would focus on the functions required to perform these tasks.

**Potential Functions:**

*   `detectFire()`: Reads sensor data and determines if a fire is present.
*   `activateSiren()`: Turns on the siren.
*   `deactivateSiren()`: Turns off the siren.
*   `activateFlashingLight()`: Turns on the flashing light.
*   `deactivateFlashingLight()`: Turns off the flashing light.
*   `getSensorReading(sensorId)`: Reads the value from a specific sensor.
*   `identifyZone(sensorId)`: Determines the zone associated with a sensor.
*   `logEvent(message)`: Records system events.
*   `checkSystemStatus()`: Verifies the health of various components.

**Data Structures:**

*   Arrays or lists of sensor readings.
*   Variables to store the current status (e.g., `alarmState`, `fireDetected`).
*   Mapping of sensor IDs to zone information.

**Example Flow:**

```
// Simplified FOD pseudo-code
function mainSystemLoop() {
    while (true) {
        for each sensor {
            reading = getSensorReading(sensor.id);
            if (reading indicates fire) {
                zone = identifyZone(sensor.id);
                logEvent("Fire detected in zone " + zone);
                activateSiren();
                activateFlashingLight();
            } else {
                // Optionally deactivate if fire condition clears
            }
        }
        // Check for manual overrides or other events
        if (manualAlarmTriggered()) {
            activateSiren();
        }
        // ... more checks
    }
}
```

**Critique of FOD for this system:**

*   **Data Management:** Sensor readings and alarm states might be managed globally or passed around, making it prone to errors.
*   **Extensibility:** Adding new sensor types (e.g., gas sensors) or new alarm actions (e.g., unlocking doors) would require significant modifications to existing functions and data structures.
*   **Maintainability:** If the logic for detecting fire changes, multiple functions might need updates.

#### 4.2. Object Oriented Design (OOD) Approach

In OOD, we would model the system as a collection of interacting objects.

**Potential Classes:**

1.  **`Sensor` (Abstract Base Class/Interface):**
    *   **Attributes:** `sensorId`, `zone`, `status`
    *   **Methods:** `readData()`, `getStatus()`

2.  **`SmokeSensor` (Extends `Sensor`):**
    *   **Attributes:** `smokeLevel`
    *   **Methods:** `readData()` (specific logic for smoke detection), `getStatus()`

3.  **`HeatSensor` (Extends `Sensor`):**
    *   **Attributes:** `temperature`
    *   **Methods:** `readData()` (specific logic for heat detection), `getStatus()`

4.  **`Alarm` (Abstract Base Class/Interface):**
    *   **Attributes:** `isOn`
    *   **Methods:** `activate()`, `deactivate()`, `isOn()`

5.  **`Siren` (Extends `Alarm`):**
    *   **Methods:** `activate()` (make siren sound), `deactivate()`

6.  **`FlashingLight` (Extends `Alarm`):**
    *   **Methods:** `activate()` (start flashing), `deactivate()`

7.  **`FireAlarmSystem` (Core Class):**
    *   **Attributes:** `sensors` (list of `Sensor` objects), `alarms` (list of `Alarm` objects), `currentZoneInAlarm`
    *   **Methods:**
        *   `addSensor(Sensor sensor)`
        *   `addAlarm(Alarm alarm)`
        *   `detectFire()`: Iterates through sensors, calls `readData()`, checks for fire.
        *   `triggerAlarms()`: Activates all attached alarms.
        *   `handleManualTrigger()`
        *   `reportStatus()`

**Example Interactions (using OOD principles):**

*   The `FireAlarmSystem` object would manage a collection of `Sensor` objects.
*   When `detectFire()` is called, it iterates through its `sensors` list and calls `readData()` on each. Due to **polymorphism**, the correct `readData()` implementation (for `SmokeSensor` or `HeatSensor`) is executed.
*   If `readData()` detects fire, it returns a status indicating fire.
*   The `FireAlarmSystem` then calls `triggerAlarms()`. This method iterates through its `alarms` list and calls `activate()` on each `Alarm` object. Again, **polymorphism** ensures the correct activation logic for `Siren` and `FlashingLight` is executed.
*   **Encapsulation** is evident as each sensor hides its internal reading mechanism, and each alarm hides its activation/deactivation process.
*   **Inheritance** is used to define common properties for sensors and alarms, and then specialize them.

**Benefits of OOD for this system:**

*   **Modularity:** Each sensor and alarm is a self-contained unit. The `FireAlarmSystem` acts as a coordinator.
*   **Extensibility:** Adding a new `GasSensor` or a `DoorUnlocker` alarm is straightforward: create a new class inheriting from `Sensor` or `Alarm` and add it to the system. The existing `FireAlarmSystem` code needs minimal changes.
*   **Maintainability:** If the way a `SmokeSensor` detects smoke changes, only the `SmokeSensor` class needs modification, without affecting other parts of the system.
*   **Reusability:** Sensor and Alarm classes could potentially be reused in other systems.

---

### Important Points to Remember:

*   **FOD:** Focuses on *what to do* (procedures), data is often separate.
*   **OOD:** Focuses on *who does it* (objects), data and behavior are bundled together.
*   OOD is generally preferred for complex, large-scale, and evolving software systems due to its advantages in modularity, reusability, and maintainability.
*   The core principles of OOD (Encapsulation, Abstraction, Inheritance, Polymorphism) are fundamental to understanding how to design and build object-oriented software effectively.
*   Case studies help bridge theoretical concepts with practical application.

---

### Practice Questions & Exercises:

**Q1. Differentiate between Functional Oriented Design and Object Oriented Design, highlighting the key differences in their focus and structure.**

**Answer:**
*   **Focus:** FOD focuses on functions/procedures, while OOD focuses on objects (data and behavior).
*   **Structure:** FOD breaks down a problem into a sequence of steps and functions. OOD models the problem as a set of interacting objects, where each object encapsulates its data and methods.
*   **Data Handling:** In FOD, data is often global or passed between functions, making it more exposed. In OOD, data is encapsulated within objects and accessed through methods, providing better control and protection.
*   **Modularity:** FOD's modularity is based on functions. OOD's modularity is based on objects/classes.
*   **Reusability:** OOD generally offers higher reusability through classes and inheritance compared to FOD.

**Q2. Explain the four pillars of Object Oriented Design (Encapsulation, Abstraction, Inheritance, Polymorphism) with brief examples relevant to software development.**

**Answer:**
*   **Encapsulation:** Bundling data and methods within a class. Hides internal state.
    *   *Example:* A `BankAccount` class encapsulating `accountNumber`, `balance` (data) and `deposit()`, `withdraw()` (methods).
*   **Abstraction:** Hiding complex implementation details and exposing only essential features.
    *   *Example:* A `DatabaseConnection` class might have a `connect()` method. The user doesn't need to know the underlying network protocols or driver details.
*   **Inheritance:** Allowing a new class to inherit properties and behaviors from an existing class. Promotes code reuse.
    *   *Example:* `Dog` and `Cat` classes inheriting from an `Animal` class. Both inherit `eat()` and `sleep()` but have their own `makeSound()` implementation.
*   **Polymorphism:** The ability of an object to take on many forms. Allows for method overriding.
    *   *Example:* A list of `Shape` objects, where each `Shape` can be a `Circle` or `Square`. Calling `shape.calculateArea()` will execute the specific area calculation for either a circle or a square.

**Q3. Consider a simple library management system. List potential classes you might create if you were to design it using OOD.**

**Answer:**
*   `Book`: Represents a book with attributes like `title`, `author`, `ISBN`, `status` (available/borrowed). Methods could include `borrowBook()`, `returnBook()`.
*   `Member`: Represents a library member with attributes like `memberId`, `name`, `borrowedBooks` (a list of `Book` objects). Methods could include `borrowBook(Book book)`, `returnBook(Book book)`.
*   `Library`: Represents the library itself, managing collections of `Book` and `Member` objects. Methods could include `addBook()`, `removeBook()`, `addMember()`, `removeMember()`, `findBookByTitle()`, `findMemberById()`.
*   `Loan`: Could represent an active loan, linking a `Member` to a `Book` with `borrowDate`, `dueDate`, `returnDate`.

**Q4. How would a Functional Oriented Design approach handle the task of displaying a list of books in the library management system?**

**Answer:**
In an FOD approach, you might have a `displayBooks()` function. This function would likely take a data structure (e.g., an array or list of book records) as input. Inside the function, you would iterate through this data structure, and for each book record, you would print out its details (title, author, ISBN). The data itself (the list of books) would be managed separately, possibly in global variables or passed as an argument to other functions.

---

### Alignment with Course Outcomes:

*   **CO1: Write Java programs using the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. (Knowledge Level: K2)**
    *   This module lays the foundation for these concepts by explaining what they are and why they are important, preparing students to learn their implementation in Java. The OOD discussion, including the fire alarm system, implicitly suggests how these concepts are applied.
*   **CO2: Utilise datatypes, operators, control statements, object-oriented class, concepts, I/O basics in Java to develop programs. (Knowledge Level: K3)**
    *   Understanding OOD principles is crucial for effectively utilizing object-oriented class concepts as mentioned in this CO. The comparison with FOD helps highlight the advantages of OOD when developing programs.
*   **CO3: Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Multithreaded programming. (Knowledge Level: K3)**
    *   The emphasis on modularity and maintainability in OOD directly contributes to writing more robust programs, which is the overarching goal of CO3.
*   **CO4: Write Graphical User Interface based application programs by utilising Swing in Java and database connectivity. (Knowledge Level: K3)**
    *   OOD principles are fundamental to GUI development and database interaction in Java, as these often involve creating objects to represent UI elements, data entities, and their behaviors.

This module provides the essential conceptual groundwork for the practical Java programming skills covered in later modules.
