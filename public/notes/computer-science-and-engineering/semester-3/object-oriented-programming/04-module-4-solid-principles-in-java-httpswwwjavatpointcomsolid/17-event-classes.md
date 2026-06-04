---
title: "Event Classes"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: SOLID Principles in Java ( https://www.javatpoint.com/solid"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acd8"
status: "completed"
scrapedAt: "2026-05-20T16:29:23.389Z"
---
## Module 4: SOLID Principles in Java - Topic: Event Classes

**Description:** This module explores Event Classes within the context of SOLID principles in Java. We will examine how Event Classes can be structured to adhere to SOLID principles and promote maintainable, flexible, and robust object-oriented designs.

**Learning Outcomes:**

*   Understand the concept of Event Classes and their role in object-oriented programming.
*   Learn how to design Event Classes that adhere to SOLID principles.
*   Understand the benefits of using Event Classes in building loosely coupled systems.
*   Apply the concept of Event Classes in real-world Java applications.

### 1. Introduction to Event Classes

*   **Definition:** Event classes represent significant occurrences within a system. These events are typically triggered by user actions, system processes, or external factors.  They encapsulate information related to that occurrence.
*   **Role in OOP:**  Event classes play a crucial role in decoupling components of a system.  Instead of direct method calls between objects, events are emitted by one object (the *publisher* or *source*) and handled by another object (the *subscriber* or *listener*). This paradigm is commonly known as the Observer pattern.
*   **Key Components:**
    *   **Event Source (Publisher):** The object that triggers or raises the event.
    *   **Event Object:** An instance of an event class. It carries information about the event that occurred.
    *   **Event Listener (Subscriber):** The object(s) that receive and handle the event.
    *   **Event Handling Mechanism:** The mechanism (usually an interface and associated code) that allows listeners to register their interest in specific events from a source.

### 2. Event Classes and SOLID Principles

Let's examine how designing event classes can be influenced by SOLID principles:

*   **2.1 Single Responsibility Principle (SRP):**
    *   **Definition:** A class should have only one reason to change.
    *   **Application to Event Classes:** An event class should represent *one specific* event. Don't overload a single event class to represent multiple, unrelated events.
    *   **Example:** Instead of a generic `DataChangeEvent` with a flag indicating whether data was created, updated, or deleted, create separate event classes like `DataCreatedEvent`, `DataUpdatedEvent`, and `DataDeletedEvent`.
    *   **Benefits:** Easier to understand, modify, and maintain each event type independently.
*   **2.2 Open/Closed Principle (OCP):**
    *   **Definition:** Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
    *   **Application to Event Classes:**  When adding new event types, you shouldn't have to modify existing event handler logic. This is often achieved by using polymorphism and interfaces.
    *   **Example:**  Create an `EventListener` interface. New event handlers can implement this interface to respond to new event types without modifying existing handlers. The publisher should work with the `EventListener` interface.
    *   **Benefits:** Reduces the risk of introducing bugs when adding new features.  Enhances maintainability.
*   **2.3 Liskov Substitution Principle (LSP):**
    *   **Definition:** Subtypes must be substitutable for their base types without altering the correctness of the program.
    *   **Application to Event Classes:**  Subclasses of event classes should behave as expected by code that handles the base event class. If an event handler is designed to handle `BaseEvent`, it should also correctly handle `DerivedEvent` without unexpected behavior.
    *   **Example:** If you have a `DatabaseEvent` and a `UserEvent` that extends `DatabaseEvent`, any code that handles `DatabaseEvent` should be able to handle `UserEvent` without breaking. Don't introduce specific type checking on the concrete event type within the event handler logic, as that violates LSP.
    *   **Benefits:** Ensures that inheritance is used correctly and promotes code reusability.
*   **2.4 Interface Segregation Principle (ISP):**
    *   **Definition:** Clients should not be forced to depend on methods they do not use.
    *   **Application to Event Handling:** Avoid creating a large, monolithic `EventListener` interface that forces listeners to implement methods for events they are not interested in. Create smaller, more specific interfaces based on event types.
    *   **Example:** Instead of a single `EventListener` with methods for all possible events (e.g., `onUserCreated`, `onOrderPlaced`, `onProductDeleted`), create separate interfaces like `UserEventListener` (with `onUserCreated`), `OrderEventListener` (with `onOrderPlaced`), and `ProductEventListener` (with `onProductDeleted`).  A class only implements the interfaces it needs.
    *   **Benefits:** Reduces unnecessary dependencies and improves code cohesion. Promotes smaller, more focused interfaces.
*   **2.5 Dependency Inversion Principle (DIP):**
    *   **Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
    *   **Application to Event Classes:**  The event source (publisher) and the event listeners (subscribers) should depend on abstractions (interfaces or abstract classes) rather than concrete implementations. This reduces tight coupling.
    *   **Example:** Both the event source and the event listeners should interact via an `EventListener` interface or an abstract base class for events. The event source publishes events using the interface, and the listeners register and handle events using the same interface. This prevents the publisher from knowing the specifics of the listener implementations and vice versa.
    *   **Benefits:** Promotes loose coupling, making the system more flexible, maintainable, and testable. Allows for easy swapping of components without affecting other parts of the system.

### 3. Example: Designing an Order Processing System with Event Classes

Consider an order processing system where several events occur during the lifecycle of an order.

```java
// Example showcasing SRP and DIP

// Abstraction for Event Handling
interface OrderEventListener {
    void onOrderCreated(OrderCreatedEvent event);
    void onOrderProcessed(OrderProcessedEvent event);
    void onOrderShipped(OrderShippedEvent event);
}

// Concrete Event Classes (SRP)
class OrderCreatedEvent {
    private final Order order;

    public OrderCreatedEvent(Order order) {
        this.order = order;
    }

    public Order getOrder() {
        return order;
    }
}

class OrderProcessedEvent {
    private final Order order;

    public OrderProcessedEvent(Order order) {
        this.order = order;
    }

     public Order getOrder() {
        return order;
    }
}

class OrderShippedEvent {
    private final Order order;
    private final String trackingNumber;

    public OrderShippedEvent(Order order, String trackingNumber) {
        this.order = order;
        this.trackingNumber = trackingNumber;
    }

     public Order getOrder() {
        return order;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }
}


// Event Source (Publisher) - depends on the abstraction OrderEventListener
class OrderService {
    private final List<OrderEventListener> listeners = new ArrayList<>();

    public void addListener(OrderEventListener listener) {
        listeners.add(listener);
    }

    public void createOrder(Order order) {
        // Create the order in the database...
        System.out.println("Order created: " + order.getOrderId());
        publishOrderCreatedEvent(order);
    }

     public void processOrder(Order order) {
        // Process the order
        System.out.println("Order processed: " + order.getOrderId());
        publishOrderProcessedEvent(order);
    }


    public void shipOrder(Order order, String trackingNumber) {
        // Ship the order
        System.out.println("Order shipped: " + order.getOrderId() + " with tracking number: " + trackingNumber);
        publishOrderShippedEvent(order, trackingNumber);
    }

    private void publishOrderCreatedEvent(Order order) {
        OrderCreatedEvent event = new OrderCreatedEvent(order);
        for (OrderEventListener listener : listeners) {
            listener.onOrderCreated(event);
        }
    }

    private void publishOrderProcessedEvent(Order order) {
        OrderProcessedEvent event = new OrderProcessedEvent(order);
        for (OrderEventListener listener : listeners) {
            listener.onOrderProcessed(event);
        }
    }

      private void publishOrderShippedEvent(Order order, String trackingNumber) {
        OrderShippedEvent event = new OrderShippedEvent(order, trackingNumber);
        for (OrderEventListener listener : listeners) {
            listener.onOrderShipped(event);
        }
    }
}


// Event Listener (Subscriber) - depends on the abstraction OrderEventListener
class InventoryService implements OrderEventListener {

    @Override
    public void onOrderCreated(OrderCreatedEvent event) {
        // Update inventory based on the order details
        Order order = event.getOrder();
        System.out.println("Inventory updated for order: " + order.getOrderId());
    }

    @Override
    public void onOrderProcessed(OrderProcessedEvent event) {
       // No action required for this event
    }

     @Override
    public void onOrderShipped(OrderShippedEvent event) {
       // No action required for this event
    }
}

//Another Listener (Subscriber)
class NotificationService implements OrderEventListener {
    @Override
    public void onOrderCreated(OrderCreatedEvent event) {
        Order order = event.getOrder();
        System.out.println("Sending notification for order creation: " + order.getOrderId());
    }

    @Override
    public void onOrderProcessed(OrderProcessedEvent event) {
        Order order = event.getOrder();
         System.out.println("Sending notification for order processing: " + order.getOrderId());
    }

      @Override
    public void onOrderShipped(OrderShippedEvent event) {
        Order order = event.getOrder();
        String trackingNumber = event.getTrackingNumber();
        System.out.println("Sending notification for order shipped: " + order.getOrderId() + " with tracking number: " + trackingNumber);
    }
}


// Dummy Order class
class Order {
    private final String orderId;

    public Order(String orderId) {
        this.orderId = orderId;
    }

    public String getOrderId() {
        return orderId;
    }
}

// Main class to demonstrate the event-driven system
public class Main {
    public static void main(String[] args) {
        OrderService orderService = new OrderService();
        InventoryService inventoryService = new InventoryService();
        NotificationService notificationService = new NotificationService();

        orderService.addListener(inventoryService);
        orderService.addListener(notificationService);

        Order order1 = new Order("ORD-001");
        orderService.createOrder(order1);
        orderService.processOrder(order1);
        orderService.shipOrder(order1, "TRACK-123");
    }
}
```

**Explanation:**

*   **SRP:** Each event class (`OrderCreatedEvent`, `OrderProcessedEvent`, `OrderShippedEvent`) represents a single specific event.
*   **OCP:**  You can add new event listeners by implementing the `OrderEventListener` interface without modifying the `OrderService`.
*   **DIP:** `OrderService` and the listeners depend on the `OrderEventListener` interface, not on concrete implementations.  This enables loose coupling.
*   **ISP:** The `OrderEventListener` interface could be further refined if certain listeners only care about specific event types. For example, we could break it down into `OrderCreatedListener`, `OrderProcessedListener`, and `OrderShippedListener`.

### 4. Benefits of Using Event Classes

*   **Loose Coupling:**  Reduces dependencies between components, making the system more flexible and easier to maintain.
*   **Extensibility:**  Allows adding new features or functionality without modifying existing code.
*   **Reusability:**  Event listeners can be reused across multiple event sources.
*   **Testability:**  Components can be tested in isolation by simulating events.
*   **Asynchronous Processing:** Events can be handled asynchronously, improving system performance.
*   **Auditing and Logging:** Events provide a natural mechanism for auditing and logging system activity.

### 5. Important Points to Remember

*   **Immutability of Event Objects:** Consider making event objects immutable to prevent unintended side effects.  Once an event is created, its data should not be changed.
*   **Error Handling:**  Implement robust error handling mechanisms in event listeners to prevent exceptions from crashing the entire system.
*   **Thread Safety:**  Ensure thread safety when handling events in a multithreaded environment.
*   **Careful Design:**  Carefully design the event classes and listener interfaces to ensure they are clear, concise, and easy to use.
*   **Balance:** Don't overuse events.  Direct method calls are sometimes simpler and more efficient.

### 6. Practice Questions and Exercises

**Question 1:**

Explain the Single Responsibility Principle (SRP) in the context of event classes. Give an example of how violating SRP can negatively impact the design.

**Answer:**

SRP states that a class should have only one reason to change. In the context of event classes, this means that each event class should represent one specific event. Violating SRP by overloading a single event class to represent multiple, unrelated events (e.g., a single `DataChangeEvent` for create, update, and delete operations) makes the event class harder to understand, modify, and maintain. Any change related to one type of data change will require modifying the same class, potentially introducing bugs in unrelated event handling. It also forces listeners to handle events that they are not interested in.

**Question 2:**

How does the Dependency Inversion Principle (DIP) help in designing a loosely coupled event-driven system?

**Answer:**

DIP states that high-level modules should not depend on low-level modules; both should depend on abstractions. In an event-driven system, DIP is applied by having both the event source (publisher) and the event listeners (subscribers) depend on abstractions (interfaces). For example, `OrderService` (the event source) publishes events using the `OrderEventListener` interface, and listeners register and handle events using the same interface. This prevents `OrderService` from knowing the specifics of the listener implementations and vice versa, achieving loose coupling.

**Question 3:**

Consider a scenario where you have an `EmailService` that sends emails upon various events (e.g., User registration, Password reset). Design the interfaces and classes using the Interface Segregation Principle (ISP).

**Answer:**

```java
// Interfaces for specific email-related events

interface UserRegistrationEmailListener {
    void onUserRegistered(UserRegisteredEvent event);
}

interface PasswordResetEmailListener {
    void onPasswordReset(PasswordResetEvent event);
}

//Concrete Event Classes
class UserRegisteredEvent {
    private final String userEmail;

    public UserRegisteredEvent(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserEmail() {
        return userEmail;
    }
}

class PasswordResetEvent {
    private final String userEmail;

    public PasswordResetEvent(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserEmail() {
        return userEmail;
    }
}


// Email Service implementing specific listener interfaces
class EmailService implements UserRegistrationEmailListener, PasswordResetEmailListener {

    @Override
    public void onUserRegistered(UserRegisteredEvent event) {
        String userEmail = event.getUserEmail();
        System.out.println("Sending registration email to: " + userEmail);
        // Actual email sending logic here
    }

    @Override
    public void onPasswordReset(PasswordResetEvent event) {
         String userEmail = event.getUserEmail();
        System.out.println("Sending password reset email to: " + userEmail);
        // Actual password reset email sending logic here
    }
}


//Hypothetical service that publishes the events
class UserService {

    private List<UserRegistrationEmailListener> registrationListeners = new ArrayList<>();
    private List<PasswordResetEmailListener> passwordResetListeners = new ArrayList<>();

    public void addRegistrationListener(UserRegistrationEmailListener listener) {
        registrationListeners.add(listener);
    }

     public void addPasswordResetListener(PasswordResetEmailListener listener) {
        passwordResetListeners.add(listener);
    }

    public void registerUser(String email) {
        //User registration logic
        System.out.println("Registering User: " + email);
        UserRegisteredEvent event = new UserRegisteredEvent(email);
        for (UserRegistrationEmailListener listener : registrationListeners) {
             listener.onUserRegistered(event);
        }
    }


    public void resetPassword(String email) {
        //Password reset logic
         System.out.println("Resetting password for User: " + email);
         PasswordResetEvent event = new PasswordResetEvent(email);
        for (PasswordResetEmailListener listener : passwordResetListeners) {
             listener.onPasswordReset(event);
        }

    }
}


public class Main2 {
        public static void main(String[] args) {
            UserService userService = new UserService();
            EmailService emailService = new EmailService();

            userService.addRegistrationListener(emailService);
            userService.addPasswordResetListener(emailService);

            userService.registerUser("test@example.com");
            userService.resetPassword("test@example.com");
        }
}
```

**Explanation:**

We've created separate interfaces for user registration and password reset emails. `EmailService` implements only the interfaces it needs, avoiding dependencies on unrelated events.

**Question 4:**

Explain Liskov Substitution Principle (LSP) and give an example of a violation with event classes.

**Answer:**

LSP states that subtypes must be substitutable for their base types without altering the correctness of the program. In the context of event classes, this means that a subclass of an event class should behave as expected by code that handles the base event class.

**Violation Example:**

Let's say we have a `PaymentEvent` and a `CreditCardPaymentEvent` that extends `PaymentEvent`. If the handler for `PaymentEvent` expects a positive payment amount, but `CreditCardPaymentEvent` can sometimes represent a refund with a *negative* payment amount, this violates LSP. The handler for `PaymentEvent` would produce incorrect results when handling a `CreditCardPaymentEvent`.  Similarly, if the base class contains a `getAmount()` method and the derived class throws an `UnsupportedOperationException` when this method is called, then LSP is violated because the derived class is not substitutable for the base class.

**Question 5:**

Explain how event classes can promote asynchronous processing in a Java application.

**Answer:**

Event classes facilitate asynchronous processing by decoupling the event source and the event listener. The event source can raise an event and continue its processing without waiting for the listener to handle the event.  This can be achieved by using a message queue or a separate thread to handle the event.

For example:

1.  The event source places the event object into a message queue.
2.  A separate thread (or a pool of threads) monitors the message queue.
3.  When an event is available, the thread retrieves the event from the queue and dispatches it to the appropriate listeners.

This approach allows the event source to continue its work without being blocked by the event handling process, improving overall system performance.

These notes provide a comprehensive overview of Event Classes in the context of SOLID principles. Understanding these principles is essential for designing maintainable, flexible, and robust object-oriented applications. Remember to practice applying these principles in your own Java projects to solidify your understanding.
