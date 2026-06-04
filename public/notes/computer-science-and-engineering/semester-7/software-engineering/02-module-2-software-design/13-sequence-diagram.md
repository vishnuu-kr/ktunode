---
title: "Sequence diagram"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c898"
status: "completed"
scrapedAt: "2026-05-20T17:11:10.249Z"
---
# Software Engineering: Module 2 - Software Design

## Topic: Sequence Diagrams

---

### 1. Introduction to Sequence Diagrams

#### 1.1 What are Sequence Diagrams?

*   **Definition:** Sequence diagrams are a type of **interaction diagram** in the Unified Modeling Language (UML) that shows how objects interact with each other over time.
*   **Purpose:** They visualize the **order of messages exchanged** between objects, illustrating the dynamic behavior of a system.
*   **Focus:** They emphasize the **temporal relationships** between objects.

#### 1.2 Key Components of a Sequence Diagram

*   **Objects/Lifelines:**
    *   Represent instances of classes or components participating in the interaction.
    *   Displayed as rectangles at the top of the diagram.
    *   A dashed line (lifeline) extends vertically downwards from each object, representing the object's existence over time.
    *   Can be named as `objectName:ClassName` (e.g., `customer:Customer`) or just `ClassName` if there's only one instance of that class involved.
*   **Messages:**
    *   Represent communication between objects.
    *   Shown as horizontal arrows connecting lifelines.
    *   **Types of Messages:**
        *   **Synchronous Message:** The sender waits for the receiver to complete its operation and return before continuing. Represented by a solid arrow with a solid arrowhead.
        *   **Asynchronous Message:** The sender sends the message and immediately continues its own execution without waiting for a response. Represented by a solid arrow with an open arrowhead.
        *   **Return Message:** Indicates that a synchronous operation has completed and returned a value. Usually an optional dashed arrow with an open arrowhead.
        *   **Self-Message:** A message sent from an object to itself.
        *   **Found Message:** A message that originates from outside the depicted system.
        *   **Lost Message:** A message that is sent but not received.
*   **Activation Bars (Execution Specifications):**
    *   Rectangular bars drawn on a lifeline to indicate the period during which an object is performing an action or waiting for a response.
    *   Show the duration of an operation.
*   **Time:**
    *   Time progresses downwards along the lifelines.
    *   The vertical position of messages indicates the order in which they are sent.

#### 1.3 Why Use Sequence Diagrams?

*   **Understanding System Behavior:** Visualize how different parts of a system collaborate to fulfill a specific use case or scenario.
*   **Identifying Potential Issues:** Reveal bottlenecks, inefficient communication patterns, or missing interactions.
*   **Documenting System Design:** Provide a clear and concise way to document the dynamic behavior of software.
*   **Communication:** Facilitate communication between developers, designers, and stakeholders.
*   **Refactoring:** Aid in identifying areas of the system that can be refactored for better organization or performance.

---

### 2. Creating Sequence Diagrams

#### 2.1 Steps to Create a Sequence Diagram

1.  **Identify the Scenario:** Define the specific use case or scenario you want to model (e.g., "User logs in," "Add item to cart").
2.  **Identify Participating Objects:** Determine the objects (instances of classes) that are involved in the scenario.
3.  **Draw Lifelines:** Place lifelines for each identified object at the top of the diagram.
4.  **Add Messages:**
    *   Start with the first message in the interaction.
    *   Draw messages as arrows between the lifelines of the sender and receiver.
    *   Use the correct arrow type (synchronous, asynchronous).
    *   Label messages with the operation name and any parameters.
5.  **Add Activation Bars:** Draw activation bars on lifelines to show when an object is active.
6.  **Add Return Messages (Optional):** If synchronous messages are used, add return messages to show the flow of control back.
7.  **Iterate and Refine:** Review the diagram for clarity, accuracy, and completeness.

#### 2.2 Common Notation and Examples

**Example Scenario: User Places an Order**

Let's consider a simple e-commerce scenario where a user places an order.

*   **Objects:** `customer:Customer`, `product:Product`, `shoppingCart:ShoppingCart`, `orderService:OrderService`, `paymentGateway:PaymentGateway`

**Sequence Diagram Sketch:**

```
+-------------------+       +-------------------+       +-----------------+       +-------------------+       +--------------------+
| customer:Customer |------>| shoppingCart:Cart |------>| productService:Product |------>| orderService:Service |------>| paymentGateway:Gateway |
+-------------------+       +-------------------+       +-----------------+       +-------------------+       +--------------------+
       |                        |                       |                       |                        |
       | 1. addItem(product)     |                       |                       |                        |
       |----------------------->|                       |                       |                        |
       |                        | 2. add(item)          |                       |                        |
       |                        |---------------------->|                       |                        |
       |                        |                       | 3. getPrice()         |                        |
       |                        |                       |---------------------->|                        |
       |                        |                       |                       | 4. processPayment(amount) |
       |                        |                       |                       |------------------------>|
       |                        |                       |                       |                        |
       |                        |                       |                       | 5. paymentConfirmed()  |
       |                        |                       |                       |<-----------------------|
       |                        |                       |                       |                        |
       |                        |                       | 6. priceRetrieved()   |                        |
       |                        |                       |<----------------------|                        |
       |                        |                       |                       |                        |
       |                        | 7. itemAdded()        |                       |                        |
       |                        |<----------------------|                       |                        |
       |                        |                       |                       |                        |
       | 8. orderPlaced()       |                       |                       |                        |
       |<-----------------------|                       |                       |                        |
       |                        |                       |                       |                        |
```

**Explanation of the Example:**

1.  `customer` sends an `addItem(product)` message to `shoppingCart`.
2.  `shoppingCart` adds the `item` to itself.
3.  `shoppingCart` asks `product` for its `price()`.
4.  `product` returns its `price()`.
5.  `shoppingCart` calculates the total and sends a `processPayment(amount)` message to `orderService`.
6.  `orderService` interacts with the `paymentGateway` to `processPayment(amount)`.
7.  `paymentGateway` confirms the payment with `paymentConfirmed()`.
8.  `orderService` returns a confirmation to `shoppingCart`.
9.  `shoppingCart` confirms `itemAdded()` to `customer`.
10. `customer` receives the `orderPlaced()` confirmation (this could be implicit or explicit depending on the design).

---

### 3. Advanced Concepts and Extensions

#### 3.1 Interaction Fragments

Interaction fragments are used to combine multiple interactions into a single diagram, allowing for more complex scenarios.

*   **`alt` (Alternative):**
    *   Represents conditional logic (if-else).
    *   Divides the interaction into partitions, with guards indicating which partition is executed.
    *   Example: Login success vs. login failure.

    ```
    +---------+       +---------+
    | User    |------>| Auth    |
    +---------+       +---------+
      |                 |
      | login(user,pwd) |
      |---------------->|
      |                 | alt [login successful]
      |                 |----------------------->
      |                 |                       |
      |                 | loginSuccess()        |
      |                 |<----------------------|
      |                 |                       |
      |                 | else [login failed]   |
      |                 |----------------------->
      |                 |                       |
      |                 | loginFailed()         |
      |                 |<----------------------|
      |                 |                       |
    ```

*   **`opt` (Optional):**
    *   Represents an optional interaction that may or may not occur.
    *   Has a single partition with a guard condition.
    *   Example: Apply discount only if available.

    ```
    +---------+       +---------+
    | User    |------>| Order   |
    +---------+       +---------+
      |                 |
      | checkout()      |
      |---------------->|
      |                 | opt [discount available]
      |                 |----------------------->
      |                 |                       |
      |                 | applyDiscount()       |
      |                 |<----------------------|
      |                 |                       |
    ```

*   **`loop` (Loop):**
    *   Represents an interaction that occurs multiple times.
    *   Has a single partition with a guard condition specifying the loop criteria.
    *   Example: Processing multiple items in a cart.

    ```
    +---------+       +---------+
    | Cart    |------>| Item    |
    +---------+       +---------+
      |                 |
      | processItems()  |
      |---------------->|
      |                 | loop [for each item]
      |                 |----------------------->
      |                 |                       |
      |                 | processItem(item)     |
      |                 |<----------------------|
      |                 |                       |
    ```

*   **`par` (Parallel):**
    *   Represents interactions that happen concurrently.
    *   Divides the interaction into multiple partitions, each executing in parallel.
    *   Example: Sending notifications to email and SMS simultaneously.

    ```
    +---------+       +---------+       +---------+
    | System  |------>| Email   |       | SMS     |
    +---------+       +---------+       +---------+
      |                 |                 |
      | notify(msg)     |                 |
      |---------------->|                 |
      |                 | par             |
      |                 |---------------->|
      |                 |                 |
      |                 | sendEmail()     |
      |                 |<----------------|
      |                 |                 |
      |                 |                 | sendSMS()
      |                 |                 |<----------------|
      |                 |                 |
    ```

*   **`ref` (Reference):**
    *   Allows you to reference another sequence diagram, promoting modularity and reusability.
    *   Useful for breaking down complex interactions into smaller, manageable diagrams.

*   **`sd` (Sequence Diagram):**
    *   The outermost frame of a sequence diagram, enclosing all its elements.
    *   Often implicitly used when creating a diagram.

#### 3.2 Combined Fragments

Combined fragments can be nested within each other to create complex control flows.

---

### 4. Learning Outcomes Covered

This topic covers the following learning outcomes:

*   **Understand the purpose and application of sequence diagrams in software design.**
    *   Covered in Section 1 (Introduction) and Section 1.3 (Why Use Sequence Diagrams).
*   **Identify and explain the key components of a sequence diagram (objects, lifelines, messages, activation bars).**
    *   Covered in Section 1.2 (Key Components).
*   **Differentiate between synchronous and asynchronous messages.**
    *   Covered in Section 1.2 (Types of Messages).
*   **Create basic sequence diagrams for simple scenarios.**
    *   Covered in Section 2.1 (Steps to Create) and Section 2.2 (Examples).
*   **Recognize and explain advanced concepts like interaction fragments (`alt`, `opt`, `loop`, `par`, `ref`).**
    *   Covered in Section 3.1 (Interaction Fragments).
*   **Apply sequence diagrams to model dynamic behavior and interactions within a software system.**
    *   Throughout the entire document, emphasizing practical application.

---

### 5. Practice Questions & Exercises

**Question 1:**
What is the primary purpose of a sequence diagram in software engineering?
a) To describe the static structure of a system.
b) To show the relationships between classes.
c) To illustrate the temporal order of messages exchanged between objects.
d) To define the user interface of an application.

**Question 2:**
Which type of message represents an interaction where the sender waits for a response before continuing?
a) Asynchronous Message
b) Synchronous Message
c) Return Message
d) Found Message

**Question 3:**
Draw a sequence diagram for the following scenario: A user requests to view their account balance from a banking system. The `customer` object interacts with a `bankAccount` object, which in turn queries a `database` object to retrieve the balance. The `database` returns the balance to `bankAccount`, which then returns it to the `customer`. Use synchronous messages.

**Question 4:**
What is the purpose of the `loop` interaction fragment in a sequence diagram?

**Question 5:**
Identify the missing component in a sequence diagram that represents the time an object is actively performing an operation.

---

### 6. Answers to Practice Questions

**Answer 1:**
The primary purpose of a sequence diagram is to illustrate the temporal order of messages exchanged between objects.
**Correct Answer: c)**

**Answer 2:**
A synchronous message represents an interaction where the sender waits for a response before continuing.
**Correct Answer: b)**

**Answer 3: Sequence Diagram for Account Balance View**

```
+-------------------+       +-------------------+       +-------------------+
| customer:Customer |------>| bankAccount:Account |------>| database:Database |
+-------------------+       +-------------------+       +-------------------+
       |                        |                       |
       | 1. viewBalance()       |                       |
       |----------------------->|                       |
       |                        | 2. getBalance()       |
       |                        |---------------------->|
       |                        |                       | 3. queryBalance()
       |                        |                       |---------------------->|
       |                        |                       |                       |
       |                        |                       | 4. balanceData      |
       |                        |                       |<----------------------|
       |                        |                       |                        |
       |                        | 5. balance          |                        |
       |                        |<----------------------|                        |
       |                        |                       |                        |
       | 6. balance displayed   |                       |                        |
       |<-----------------------|                       |                        |
       |                        |                       |                        |
```

**Answer 4:**
The `loop` interaction fragment is used to represent an interaction that occurs multiple times, based on a specified condition.

**Answer 5:**
The missing component is the **Activation Bar** (or Execution Specification).

---

### 7. Important Points to Remember

*   **Focus on Time:** Sequence diagrams are all about the *order* of interactions.
*   **Object Instances:** Diagrams represent specific instances of objects, not just classes.
*   **Clarity over Complexity:** Strive for clear, easy-to-understand diagrams. Break down complex scenarios into multiple diagrams if necessary.
*   **Use Lifelines Consistently:** Lifelines extend for the entire duration of the interaction depicted.
*   **Message Naming:** Label messages with meaningful operation names and include parameters.
*   **Interaction Fragments for Control Flow:** Master the use of `alt`, `opt`, `loop`, and `par` to model conditional logic and repetition.
*   **Reference Other Diagrams:** Use `ref` fragments to maintain modularity in complex systems.
*   **Synchronous vs. Asynchronous:** Understand when to use each type of message based on the system's behavior.
*   **Activation Bars Show Work:** Activation bars indicate when an object is actively processing a message or waiting for a response.

---
