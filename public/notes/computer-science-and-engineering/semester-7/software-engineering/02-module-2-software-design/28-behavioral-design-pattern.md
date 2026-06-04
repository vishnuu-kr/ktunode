---
title: "Behavioral Design Pattern"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c8a7"
status: "completed"
scrapedAt: "2026-05-20T17:11:22.395Z"
---
# Software Engineering: Module 2 - Software Design

## Topic: Behavioral Design Patterns

---

### Learning Outcomes:

Upon successful completion of this topic, you should be able to:

*   **Understand the purpose and importance of behavioral design patterns in software development.**
*   **Identify and classify different types of behavioral design patterns.**
*   **Explain the intent, structure, and consequences of commonly used behavioral design patterns.**
*   **Apply behavioral design patterns to solve specific design problems in object-oriented software.**
*   **Analyze the trade-offs and benefits of using behavioral design patterns.**

---

### 1. Introduction to Behavioral Design Patterns

#### What are Behavioral Design Patterns?

*   **Definition:** Behavioral design patterns are concerned with **algorithms and the assignment of responsibilities between objects**. They focus on how objects interact and communicate with each other to achieve a common goal, without coupling them too tightly.
*   **Purpose:** To decouple the sender of a request from its receiver, allowing for more flexible and maintainable systems. They help manage complex interactions and collaborations between objects.
*   **Key Idea:** They deal with the **communication and distribution of intelligence** among objects.

#### Why are they Important?

*   **Flexibility & Extensibility:** Allow new behaviors to be added easily without modifying existing code.
*   **Reusability:** Provide proven solutions that can be reused across different projects.
*   **Maintainability:** Make code easier to understand, debug, and modify by organizing complex interactions.
*   **Decoupling:** Reduce dependencies between objects, leading to more modular and less fragile systems.
*   **Problem Solving:** Offer established solutions to common object interaction problems.

---

### 2. Classification of Behavioral Design Patterns

Behavioral design patterns can be broadly categorized based on their approach to managing object interactions:

*   **Encapsulating a Request:** Patterns that encapsulate a request as an object.
*   **Managing Object States:** Patterns that help objects manage their internal state or how they change their behavior when their state changes.
*   **Facilitating Communication:** Patterns that define how objects communicate and distribute responsibilities.
*   **Iterating over Collections:** Patterns that allow traversal of collections without exposing their underlying representation.

---

### 3. Common Behavioral Design Patterns

Here we will explore some of the most frequently used behavioral design patterns.

#### 3.1. Observer Pattern

*   **Intent:** Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
*   **Analogy:** A newspaper subscription. Subscribers (observers) get notified when a new newspaper (subject) is published.
*   **Participants:**
    *   **Subject (Observable):** Knows its observers. Provides an interface for attaching and detaching observers.
    *   **Observer:** Defines an updating interface for objects that should be notified of changes in a subject.
    *   **ConcreteSubject:** Stores state of interest to ConcreteObservers. Sends a notification to its observers when its state changes.
    *   **ConcreteObserver:** Maintains a reference to a ConcreteSubject object. Stores state that should conform to the subject's state. Implements the Observer's updating interface to keep its state consistent with the subject's.
*   **Structure:**
    ```mermaid
    classDiagram
        class Subject {
            +attach(Observer)
            +detach(Observer)
            +notify()
        }
        class Observer {
            +update()
        }
        class ConcreteSubject {
            -state
        }
        class ConcreteObserver {
            -observerState
        }

        Subject <|-- ConcreteSubject
        Observer <|-- ConcreteObserver
        Subject "1" --> "*" Observer : notifies
    ```
*   **Consequences:**
    *   **Loose Coupling:** The Subject doesn't know the concrete classes of its observers. Observers only know about the Subject.
    *   **Notification Overhead:** If there are many observers, notifying them can be time-consuming.
    *   **Unexpected Updates:** Observers might update themselves unnecessarily if they don't check the subject's state after being notified.
*   **Example:**
    *   **Stock Market Ticker:** A stock price changes (Subject). Multiple applications (like a trading platform, a news website, a personal finance app - Observers) are notified and update their display.
    *   **UI Event Handling:** A button click (Subject) triggers updates in various UI elements (Observers) that depend on that click.

#### 3.2. Strategy Pattern

*   **Intent:** Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
*   **Analogy:** Choosing a mode of transport. You can choose to travel by car, train, or plane (different strategies) depending on your needs.
*   **Participants:**
    *   **Context:** Configured with a ConcreteStrategy object. Maintains a reference to a Strategy object. Can be asked to perform an operation by passing the responsibility to its Strategy object.
    *   **Strategy:** Declares an interface common to all supported algorithms.
    *   **ConcreteStrategy:** Implements the algorithm using the Strategy interface.
*   **Structure:**
    ```mermaid
    classDiagram
        class Context {
            -strategy: Strategy
            +setStrategy(Strategy)
            +executeStrategy()
        }
        class Strategy {
            +execute()
        }
        class ConcreteStrategyA {
            +execute()
        }
        class ConcreteStrategyB {
            +execute()
        }

        Strategy <|-- ConcreteStrategyA
        Strategy <|-- ConcreteStrategyB
        Context "1" --> "1" Strategy : uses
    ```
*   **Consequences:**
    *   **Eliminates Conditional Statements:** Replaces large `if-else` or `switch` statements used for selecting algorithms.
    *   **Encapsulates Algorithm Logic:** Each strategy is self-contained, making it easier to manage and test.
    *   **Open/Closed Principle:** New strategies can be added without modifying the Context.
    *   **Increased Number of Classes:** May lead to a larger number of small classes.
*   **Example:**
    *   **Sorting Algorithms:** A `List` class might use different sorting strategies (e.g., `BubbleSort`, `QuickSort`, `MergeSort`). The client can choose which sorting algorithm to apply.
    *   **Payment Processing:** An `Order` class can use different payment strategies (e.g., `CreditCardPayment`, `PayPalPayment`, `BankTransferPayment`).

#### 3.3. Template Method Pattern

*   **Intent:** Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.
*   **Analogy:** A recipe for baking a cake. The overall steps (mix ingredients, bake, decorate) are fixed, but the specific ingredients or decorating techniques can vary by recipe (subclass).
*   **Participants:**
    *   **AbstractClass:** Defines the abstract template method, which outlines the skeleton of an algorithm. It also declares abstract primitive operations that subclasses must implement. It may also implement concrete methods that are common to all subclasses.
    *   **ConcreteClass:** Implements the primitive operations to carry out the specific steps of the algorithm.
*   **Structure:**
    ```mermaid
    classDiagram
        class AbstractClass {
            +templateMethod()
            #primitiveOperation1()
            #primitiveOperation2()
            +hookOperation()
        }
        class ConcreteClassA {
            +primitiveOperation1()
            +primitiveOperation2()
        }
        class ConcreteClassB {
            +primitiveOperation1()
            +primitiveOperation2()
        }

        AbstractClass <|-- ConcreteClassA
        AbstractClass <|-- ConcreteClassB
        AbstractClass : +templateMethod() { // Example of how templateMethod might work
          // do something
          primitiveOperation1()
          // do something else
          primitiveOperation2()
          // potentially call hookOperation()
        }
    ```
*   **Consequences:**
    *   **Code Reusability:** Common steps are implemented once in the abstract class.
    *   **Control of Algorithm Structure:** The abstract class dictates the order of operations.
    *   **Open/Closed Principle:** New variations of the algorithm can be added by creating new concrete subclasses without modifying the abstract class or existing subclasses.
    *   **Inversion of Control:** The abstract class calls the methods of its subclasses.
*   **Example:**
    *   **Data Processing Pipeline:** An abstract `DataProcessor` class defines a `process()` method. Concrete subclasses like `CsvProcessor` or `JsonProcessor` implement specific steps like `readData()`, `parseData()`, and `writeData()`.
    *   **Game Level Loading:** An abstract `GameLoader` class defines the order of loading resources. Subclasses for different game levels implement specific resource loading sequences.

#### 3.4. Iterator Pattern

*   **Intent:** Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
*   **Analogy:** Navigating through a book. You can move from page to page (iterate) without needing to know how the pages are bound or stored.
*   **Participants:**
    *   **Iterator:** Defines an interface for accessing and traversing elements.
    *   **ConcreteIterator:** Implements the Iterator interface. Keeps track of the current position in the traversal of the aggregate.
    *   **Aggregate:** Defines an interface for creating an Iterator object.
    *   **ConcreteAggregate:** Implements the Aggregate interface to return an instance of the ConcreteIterator.
*   **Structure:**
    ```mermaid
    classDiagram
        class Iterator {
            +first()
            +next()
            +isDone()
            +currentItem()
        }
        class ConcreteIterator {
            -aggregate: Aggregate
            -current: int
        }
        class Aggregate {
            +createIterator() Iterator
        }
        class ConcreteAggregate {
            -items: List
        }

        Iterator <|-- ConcreteIterator
        Aggregate <|-- ConcreteAggregate
        Aggregate "1" --> "1" Iterator : creates
        ConcreteIterator "1" --> "1" ConcreteAggregate : traverses
    ```
*   **Consequences:**
    *   **Single Responsibility Principle:** Separates the traversal logic from the data structure.
    *   **Open/Closed Principle:** New ways to traverse the aggregate can be added by creating new iterators without modifying the aggregate.
    *   **Multiple Traversal Methods:** Can support multiple traversals simultaneously.
    *   **Hides Complexity:** The client doesn't need to know about the internal structure of the aggregate.
*   **Example:**
    *   **Iterating through a Custom Collection:** A `PersonCollection` class can provide an iterator to loop through `Person` objects without revealing if it's stored in an array, linked list, or other structure.
    *   **Traversing a File System:** An iterator could be used to walk through directories and files.

#### 3.5. State Pattern

*   **Intent:** Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.
*   **Analogy:** A traffic light. It has different states (Red, Yellow, Green), and its behavior (changing to the next light) depends on its current state.
*   **Participants:**
    *   **Context:** Maintains an instance of a ConcreteState subclass that defines the current state. Transitions to another state by delegating to the current state object.
    *   **State:** Defines an interface for encapsulating the behavior associated with a particular state of the Context.
    *   **ConcreteState:** Implements the behavior associated with a particular state of the Context.
*   **Structure:**
    ```mermaid
    classDiagram
        class Context {
            -state: State
            +setState(State)
            +request1()
            +request2()
        }
        class State {
            +handle1(Context)
            +handle2(Context)
        }
        class ConcreteStateA {
            +handle1(Context)
            +handle2(Context)
        }
        class ConcreteStateB {
            +handle1(Context)
            +handle2(Context)
        }

        State <|-- ConcreteStateA
        State <|-- ConcreteStateB
        Context "1" --> "1" State : has
    ```
*   **Consequences:**
    *   **Encapsulates State-Specific Behavior:** Makes it clear which behavior belongs to which state.
    *   **State Transitions Explicit:** State transitions are clearly defined within the state objects.
    *   **Open/Closed Principle:** New states can be added without modifying existing state objects or the Context.
    *   **Can lead to a large number of classes:** If there are many states, it can result in many small state classes.
*   **Example:**
    *   **Vending Machine:** States like `NoCoinState`, `HasCoinState`, `DispensingState`. The behavior of inserting a coin or dispensing an item changes based on the current state.
    *   **Audio Player:** States like `PlayingState`, `PausedState`, `StoppedState`. Actions like `play()`, `pause()` will have different outcomes depending on the current state.

#### 3.6. Command Pattern

*   **Intent:** Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
*   **Analogy:** A remote control. Each button (command) triggers a specific action on a device. You can also think of it as ordering food from a menu.
*   **Participants:**
    *   **Command:** Declares an interface for executing an operation.
    *   **ConcreteCommand:** Implements the Command interface and defines the binding between a Receiver and an action.
    *   **Invoker:** Asks the command to carry out the request.
    *   **Receiver:** Knows how to perform operations associated with carrying out a request. Any concrete class may serve as a receiver.
    *   **Client:** Creates a ConcreteCommand object and sets its receiver.
*   **Structure:**
    ```mermaid
    classDiagram
        class Command {
            +execute()
        }
        class ConcreteCommand {
            -receiver: Receiver
            +execute()
        }
        class Invoker {
            -command: Command
            +setCommand(Command)
            +executeCommand()
        }
        class Receiver {
            +action()
        }
        class Client {
            +main()
        }

        Command <|-- ConcreteCommand
        Invoker "1" --> "1" Command : uses
        ConcreteCommand "1" --> "1" Receiver : performs action on
        Client --> ConcreteCommand
        Client --> Receiver
        Client --> Invoker
    ```
*   **Consequences:**
    *   **Decouples sender and receiver:** The invoker doesn't know anything about the receiver.
    *   **Supports Undo/Redo:** Commands can be stored and replayed.
    *   **Supports Command Queues/Logging:** Requests can be managed in queues or logged.
    *   **Can lead to many command classes:** For every action, a command class might be needed.
*   **Example:**
    *   **GUI Buttons:** Each button in a GUI can be an Invoker, and the action it performs (e.g., "Save", "Cut", "Paste") can be encapsulated in a ConcreteCommand.
    *   **Macro Recording:** A sequence of commands can be recorded and executed later.

#### 3.7. Chain of Responsibility Pattern

*   **Intent:** Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.
*   **Analogy:** An employee expense report approval process. A request goes through a series of managers (chain of responsibility) until it's approved or rejected.
*   **Participants:**
    *   **Handler:** Declares an interface for handling requests. May be an abstract class that provides a default implementation.
    *   **ConcreteHandler:** Handles requests it is responsible for. If it cannot handle the request, it passes it to its successor.
    *   **Client:** Initiates the request to a ConcreteHandler.
*   **Structure:**
    ```mermaid
    classDiagram
        class Handler {
            +setNext(Handler)
            +handleRequest(Request)
        }
        class ConcreteHandlerA {
            +handleRequest(Request)
        }
        class ConcreteHandlerB {
            +handleRequest(Request)
        }
        class Request {
            // data
        }

        Handler <|-- ConcreteHandlerA
        Handler <|-- ConcreteHandlerB
        Handler "1" --> "*" Handler : successor
        ConcreteHandlerA --> Request
        ConcreteHandlerB --> Request
    ```
*   **Consequences:**
    *   **Decouples Sender and Receiver:** The sender only knows about the first handler in the chain.
    *   **Flexibility:** Handlers can be added or removed from the chain dynamically.
    *   **No Guarantee of Handling:** A request might not be handled if no handler in the chain can manage it.
    *   **Complexity in Chain Setup:** Can be complex to manage the order of handlers.
*   **Example:**
    *   **Logging Systems:** A request to log a message might go through different handlers: one for console output, one for file output, one for database logging.
    *   **Authentication/Authorization:** A request might pass through several authentication or authorization checks before reaching its target.

#### 3.8. Mediator Pattern

*   **Intent:** Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.
*   **Analogy:** An air traffic controller. They coordinate planes (colleagues) taking off and landing, preventing collisions without the planes directly communicating with each other.
*   **Participants:**
    *   **Mediator:** Defines an interface for communicating with Colleague objects.
    *   **ConcreteMediator:** Implements the communication between Colleague objects.
    *   **Colleague:** Each Colleague knows about and communicates with the Mediator. They don't communicate directly with other Colleagues.
*   **Structure:**
    ```mermaid
    classDiagram
        class Mediator {
            +notify(Sender, Event)
        }
        class ConcreteMediator {
            -colleague1: Colleague
            -colleague2: Colleague
            +notify(Sender, Event)
        }
        class Colleague {
            +setMediator(Mediator)
        }
        class ConcreteColleague1 {
            +onEvent(Event)
        }
        class ConcreteColleague2 {
            +onEvent(Event)
        }

        Mediator <|-- ConcreteMediator
        Colleague <|-- ConcreteColleague1
        Colleague <|-- ConcreteColleague2
        Mediator "1" --> "*" Colleague : manages
        ConcreteColleague1 "1" --> "1" ConcreteMediator : communicates with
        ConcreteColleague2 "1" --> "1" ConcreteMediator : communicates with
    ```
*   **Consequences:**
    *   **Reduces Inter-Object Dependencies:** Colleagues interact only with the Mediator.
    *   **Simplifies Object Interactions:** Centralizes control over interactions.
    *   **Can become a "God Object":** If the Mediator becomes too complex, it can be hard to maintain.
    *   **Easier to introduce new interactions:** Changes to interactions are made in the Mediator, not in every Colleague.
*   **Example:**
    *   **Chat Room:** A `ChatRoom` Mediator manages communication between `User` (Colleague) objects. Users send messages to the chat room, and the chat room broadcasts them to other users.
    *   **GUI Components:** A `Dialog` Mediator can manage interactions between various UI elements (buttons, text fields, checkboxes) within a dialog box.

---

### 4. Important Points to Remember

*   **Purpose:** Behavioral patterns focus on **how objects interact and collaborate**. They are about communication, responsibility delegation, and managing dynamic behavior.
*   **Decoupling:** A common goal across many behavioral patterns is to **reduce dependencies** between objects, making systems more flexible and maintainable.
*   **Open/Closed Principle:** Many behavioral patterns help adhere to the Open/Closed Principle, allowing you to **extend functionality without modifying existing code**.
*   **When to Use:** Consider behavioral patterns when you need to:
    *   Decouple senders from receivers.
    *   Manage complex object relationships.
    *   Allow algorithms to vary independently.
    *   Provide different ways to traverse collections.
    *   Handle state-dependent behavior.
*   **Trade-offs:** While powerful, behavioral patterns can sometimes introduce **additional complexity** (e.g., more classes) or **performance overhead**. Always consider if the benefits outweigh the costs for your specific problem.
*   **Context is Key:** Understanding the specific problem you're trying to solve is crucial for selecting the appropriate behavioral pattern.

---

### 5. Practice Questions and Exercises

**Question 1: Observer Pattern**

Imagine you are building a notification system where users can subscribe to receive updates from articles. If an article's content is updated, all subscribed users should be notified.

*   **Identify the Subject and Observers in this scenario.**
*   **Briefly describe how the Observer pattern would be applied to implement this.**

**Answer:**
*   **Subject:** The `Article` object.
*   **Observers:** The `User` objects who have subscribed to the article.
*   **Application:** The `Article` would maintain a list of subscribed `User` objects. When the article's content changes, it would iterate through its list of `User` objects and call an `update()` method on each one. Each `User` object would implement the `update()` method to display or process the new article content.

---

**Question 2: Strategy Pattern**

You are developing a payment processing system for an e-commerce application. Users can choose to pay using credit cards, PayPal, or bank transfers.

*   **Which behavioral design pattern is most suitable for handling these different payment methods?**
*   **Explain why this pattern is appropriate and name the key components involved.**

**Answer:**
*   **Pattern:** The **Strategy Pattern** is most suitable.
*   **Reasoning:** This pattern allows us to define a family of algorithms (payment methods), encapsulate each one (e.g., `CreditCardPayment`, `PayPalPayment`, `BankTransferPayment`), and make them interchangeable. The main `Order` or `PaymentProcessor` class (the Context) can then use different payment strategies without being tightly coupled to their implementation.
*   **Key Components:**
    *   **Context:** The `Order` or `PaymentProcessor` class that holds a reference to a `PaymentStrategy`.
    *   **Strategy:** An interface (e.g., `PaymentStrategy`) with a method like `pay(amount)`.
    *   **Concrete Strategies:** Classes like `CreditCardPayment`, `PayPalPayment`, and `BankTransferPayment` that implement the `PaymentStrategy` interface.

---

**Question 3: Template Method Pattern vs. Strategy Pattern**

Consider a scenario where you have a document processing application that can export documents to different formats (PDF, Word, HTML).

*   **Could you use the Template Method pattern or the Strategy pattern for this? Explain your reasoning and the trade-offs.**

**Answer:**
Both patterns can be used, but they solve the problem from different perspectives:

*   **Template Method Pattern:**
    *   **How:** The abstract `DocumentExporter` class could define the `export(document)` method as the template method. This method would outline a common structure for exporting (e.g., "prepare output stream," "write document header," "write document content," "write document footer"). Concrete subclasses like `PdfExporter`, `WordExporter`, and `HtmlExporter` would override the primitive operations to handle format-specific details.
    *   **Focus:** Encapsulating the **algorithm's structure** and letting subclasses vary specific steps.
    *   **Trade-off:** The `DocumentExporter` itself dictates the overall export process. Adding a new format requires a new subclass.

*   **Strategy Pattern:**
    *   **How:** The `Document` object (or a separate `Exporter` object) could hold a reference to a `ExportStrategy`. The `export(document)` method would delegate the call to the current `ExportStrategy`. Concrete strategies like `PdfExportStrategy`, `WordExportStrategy`, and `HtmlExportStrategy` would implement the actual export logic.
    *   **Focus:** Encapsulating the **algorithm itself** and making it interchangeable.
    *   **Trade-off:** The client (or the `Document` object) has more flexibility in choosing which strategy to use at runtime. This might be more flexible if the choice of export format can change frequently.

**Which to choose?** If the *overall process* of exporting is relatively fixed, but *specific steps* differ, Template Method is a good fit. If the *entire export logic* needs to be pluggable and interchangeable, Strategy is often preferred. In this case, Strategy might be slightly more flexible as you can swap export formats on the fly without changing the core `Document` structure.

---

**Question 4: Chain of Responsibility Pattern**

In a customer support system, support requests are handled by different levels of agents: Level 1 (general queries), Level 2 (technical issues), and Level 3 (escalated issues). A request starts with Level 1 and moves to the next level if it cannot be handled.

*   **Describe how the Chain of Responsibility pattern can be applied here.**
*   **What are the benefits of this approach compared to having a single large handler with many `if-else` conditions?**

**Answer:**
*   **Application:**
    *   A `SupportHandler` abstract class (or interface) would define a method like `handleRequest(request)` and a `setNextHandler(handler)` method.
    *   Concrete handler classes (`Level1Handler`, `Level2Handler`, `Level3Handler`) would implement `handleRequest`. Each handler would check if it can process the `request`. If it can, it handles it. If not, it calls `handleRequest` on its `nextHandler`.
    *   The client would initiate the request by passing it to the first handler in the chain (e.g., `Level1Handler`).
*   **Benefits:**
    *   **Decoupling:** The client doesn't need to know which handler will eventually process the request. It only needs to know the first handler. Each handler only knows about its successor.
    *   **Flexibility:** You can easily add, remove, or reorder handlers in the chain without modifying existing handlers or the client. For instance, you could introduce a new "Senior Support" level.
    *   **Single Responsibility:** Each handler class is responsible for a specific type of request, making the code cleaner and easier to understand than a single handler with many conditional branches.
    *   **Maintainability:** If the logic for handling a specific level of support changes, you only need to modify that particular handler class.

---
