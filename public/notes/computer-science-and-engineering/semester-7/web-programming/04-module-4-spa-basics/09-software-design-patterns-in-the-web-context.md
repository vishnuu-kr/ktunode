---
title: "Software Design Patterns in the Web Context"
subject: "WEB PROGRAMMING"
module: "Module 4: SPA – Basics"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0f2"
status: "completed"
scrapedAt: "2026-05-20T17:13:24.923Z"
---
# WEB PROGRAMMING: Module 4: SPA – Basics - Software Design Patterns in the Web Context

---

## 1. Introduction to Software Design Patterns in the Web Context

### 1.1. What are Software Design Patterns?

*   **Definition:** Reusable solutions to commonly occurring problems within a given context in software design. They are not actual code, but rather templates or descriptions of how to solve a problem.
*   **Purpose:**
    *   **Communication:** Provide a common vocabulary for developers to discuss solutions.
    *   **Reusability:** Offer proven, time-tested solutions, saving development time and effort.
    *   **Maintainability:** Lead to more organized, understandable, and maintainable code.
    *   **Extensibility:** Facilitate adding new features or modifying existing ones without breaking the system.
    *   **Best Practices:** Encode the collective wisdom and experience of many developers.

### 1.2. Why are Design Patterns Important in Web Programming?

*   **Complexity of Web Applications:** Web applications are inherently complex, involving front-end, back-end, databases, and user interfaces. Patterns help manage this complexity.
*   **Scalability:** Web applications need to handle increasing numbers of users and data. Patterns often support scalable architectures.
*   **Maintainability and Collaboration:** Web projects often involve multiple developers. Patterns promote consistent coding styles and easier collaboration.
*   **Performance:** Certain patterns are designed to improve performance and resource utilization.
*   **SPA Development:** Single Page Applications (SPAs) often have intricate UI states and data flows, making patterns particularly useful for managing them.

### 1.3. Key Characteristics of a Good Design Pattern

*   **Proven Solution:** Addresses a recurring problem with a well-understood and effective approach.
*   **General Applicability:** Can be applied in various contexts, not just a single specific scenario.
*   **Well-Documented:** Clear description of the problem, solution, consequences, and examples.
*   **Abstract:** Describes the intent and structure, not a concrete implementation.

---

## 2. Common Design Pattern Categories

Design patterns are often categorized into three main groups:

### 2.1. Creational Patterns

*   **Focus:** How objects are created. They abstract the instantiation process, allowing systems to be independent of how their objects are created, composed, and represented.

    *   **Singleton Pattern**
        *   **Intent:** Ensure a class has only one instance and provide a global point of access to it.
        *   **Problem:** Sometimes, it's crucial that only one instance of a class exists throughout the application's lifetime (e.g., database connection pool, configuration manager, logger).
        *   **Solution:**
            *   Make the constructor private.
            *   Create a static private instance of the class.
            *   Provide a public static method to access the single instance.
        *   **Web Context Example:**
            *   **Node.js:** A single instance of a database connection manager to avoid creating multiple connections for each request.
            *   **Browser JavaScript:** A single instance of a `State` object to manage the overall application state in an SPA.
        *   **JavaScript Example (Node.js):**
            ```javascript
            class DatabaseConnectionManager {
                constructor() {
                    if (!DatabaseConnectionManager.instance) {
                        this.connection = this.createConnection(); // Simulate connection creation
                        DatabaseConnectionManager.instance = this;
                    }
                    return DatabaseConnectionManager.instance;
                }

                createConnection() {
                    console.log("Creating database connection...");
                    return { id: Math.random(), status: 'connected' };
                }

                getConnection() {
                    return this.connection;
                }
            }

            DatabaseConnectionManager.instance = null; // Initialize the static instance

            const manager1 = new DatabaseConnectionManager();
            const manager2 = new DatabaseConnectionManager();

            console.log(manager1.getConnection().id === manager2.getConnection().id); // true
            ```
        *   **Important Point:** Be mindful of testing challenges with Singletons due to their global nature.

    *   **Factory Method Pattern**
        *   **Intent:** Define an interface for creating an object, but let subclasses decide which class to instantiate. The Factory Method lets a class defer instantiation to subclasses.
        *   **Problem:** You have a class that needs to create objects, but the specific type of object to create is determined at runtime or by subclasses.
        *   **Solution:** Define an abstract `create()` method in a base class. Subclasses override this method to return specific concrete object instances.
        *   **Web Context Example:**
            *   Creating different types of UI components (e.g., `Button`, `Input`, `Modal`) based on configuration or user preferences.
            *   Handling different API response formats (e.g., JSON, XML) by having factories for each.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Creator Class (Abstract)
            class ComponentFactory {
                createUIComponent(type) {
                    throw new Error("createUIComponent must be implemented by subclasses");
                }

                renderComponent(type) {
                    const component = this.createUIComponent(type);
                    return component.render();
                }
            }

            // Concrete Creators
            class WebComponentFactory extends ComponentFactory {
                createUIComponent(type) {
                    if (type === 'button') {
                        return new WebButton();
                    } else if (type === 'input') {
                        return new WebInput();
                    }
                    throw new Error(`Unknown component type: ${type}`);
                }
            }

            // Product Interface/Abstract Class
            class UIComponent {
                render() {
                    throw new Error("render must be implemented by subclasses");
                }
            }

            // Concrete Products
            class WebButton extends UIComponent {
                render() {
                    return "<button>Web Button</button>";
                }
            }

            class WebInput extends UIComponent {
                render() {
                    return "<input type='text' placeholder='Web Input'>";
                }
            }

            const factory = new WebComponentFactory();
            console.log(factory.renderComponent('button')); // <button>Web Button</button>
            console.log(factory.renderComponent('input'));  // <input type='text' placeholder='Web Input'>
            ```
        *   **Important Point:** Promotes loose coupling between the creator and the concrete products.

    *   **Abstract Factory Pattern**
        *   **Intent:** Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
        *   **Problem:** You need to create multiple objects that are designed to work together, and you want to ensure they are compatible.
        *   **Solution:** Define an abstract factory interface with methods for creating each type of product. Concrete factories implement this interface to create specific families of products.
        *   **Web Context Example:**
            *   Creating a set of UI components for different operating systems (e.g., Windows UI vs. macOS UI) or themes (e.g., dark mode vs. light mode).
            *   Handling different database drivers and their associated connection/query objects.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Abstract Factory
            class GUIFactory {
                createButton() { throw new Error("Not implemented"); }
                createWindow() { throw new Error("Not implemented"); }
            }

            // Concrete Factories
            class WindowsFactory extends GUIFactory {
                createButton() { return new WindowsButton(); }
                createWindow() { return new WindowsWindow(); }
            }

            class MacFactory extends GUIFactory {
                createButton() { return new MacButton(); }
                createWindow() { return new MacWindow(); }
            }

            // Product Interfaces
            class Button { render() { } }
            class Window { display() { } }

            // Concrete Products
            class WindowsButton extends Button { render() { return "[Windows Button]"; } }
            class WindowsWindow extends Window { display() { return "Windows Window"; } }
            class MacButton extends Button { render() { return "(Mac Button)"; } }
            class MacWindow extends Window { display() { return "Mac Window"; } }

            // Client Code
            function createApplication(factory) {
                const button = factory.createButton();
                const window = factory.createWindow();
                console.log(`App with: ${button.render()} and ${window.display()}`);
            }

            const windowsApp = new WindowsFactory();
            createApplication(windowsApp); // App with: [Windows Button] and Windows Window

            const macApp = new MacFactory();
            createApplication(macApp); // App with: (Mac Button) and Mac Window
            ```
        *   **Important Point:** Useful when you need to switch between product families.

    *   **Builder Pattern**
        *   **Intent:** Separate the construction of a complex object from its representation so that the same construction process can create different representations.
        *   **Problem:** A complex object has many optional parameters or a step-by-step construction process. Direct construction can lead to many overloaded constructors or complex conditional logic.
        *   **Solution:** A `Builder` object guides the construction of the complex object step-by-step, providing methods for each step. The final complex object is then assembled.
        *   **Web Context Example:**
            *   Constructing complex HTTP requests with various headers, parameters, and body content.
            *   Building sophisticated UI elements with many configuration options.
            *   Configuring database queries.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            class HttpRequest {
                constructor(builder) {
                    this.url = builder.url;
                    this.method = builder.method;
                    this.headers = builder.headers;
                    this.body = builder.body;
                }
            }

            class HttpRequestBuilder {
                constructor() {
                    this.url = '';
                    this.method = 'GET';
                    this.headers = {};
                    this.body = null;
                }

                setUrl(url) {
                    this.url = url;
                    return this; // For chaining
                }

                setMethod(method) {
                    this.method = method;
                    return this;
                }

                addHeader(name, value) {
                    this.headers[name] = value;
                    return this;
                }

                setBody(body) {
                    this.body = body;
                    return this;
                }

                build() {
                    // Validate required fields if necessary
                    if (!this.url) {
                        throw new Error("URL is required.");
                    }
                    return new HttpRequest(this);
                }
            }

            const requestBuilder = new HttpRequestBuilder();
            const httpRequest = requestBuilder
                .setUrl('/api/users')
                .setMethod('POST')
                .addHeader('Content-Type', 'application/json')
                .setBody({ name: 'Alice', job: 'Developer' })
                .build();

            console.log(httpRequest);
            /*
            HttpRequest {
              url: '/api/users',
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: { name: 'Alice', job: 'Developer' }
            }
            */
            ```
        *   **Important Point:** Improves readability and maintainability when dealing with objects with many optional parameters.

### 2.2. Structural Patterns

*   **Focus:** How classes and objects are composed to form larger structures. They are concerned with how components are connected and interact.

    *   **Adapter Pattern**
        *   **Intent:** Convert the interface of a class into another interface that clients expect. Adapter lets classes work together that otherwise could not because of incompatible interfaces.
        *   **Problem:** You have a class with a useful interface, but it's not compatible with the interface that your client code expects.
        *   **Solution:** An `Adapter` class wraps the incompatible `Adaptee` and conforms to the `Target` interface expected by the client.
        *   **Web Context Example:**
            *   Integrating a third-party API that has a different data format than your application expects.
            *   Using legacy code with a new modern framework.
            *   Adapting different data sources to a common data access interface.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Target Interface (What the client expects)
            class DataProcessor {
                process(data) {
                    throw new Error("Not implemented");
                }
            }

            // Adaptee (The class with the incompatible interface)
            class LegacyDataService {
                fetchOldFormat(id) {
                    console.log(`Fetching legacy data for ID: ${id}`);
                    return { recordId: id, value: 'old_data' };
                }
            }

            // Adapter
            class LegacyDataServiceAdapter extends DataProcessor {
                constructor(legacyService) {
                    super();
                    this.legacyService = legacyService;
                }

                process(id) { // Adapts to the Target interface
                    const oldData = this.legacyService.fetchOldFormat(id);
                    // Transform legacy data to the expected format
                    const newData = {
                        id: oldData.recordId,
                        data: oldData.value.toUpperCase()
                    };
                    console.log(`Processed new format: ${JSON.stringify(newData)}`);
                    return newData;
                }
            }

            // Client Code
            const legacyService = new LegacyDataService();
            const adapter = new LegacyDataServiceAdapter(legacyService);

            adapter.process(123);
            // Output:
            // Fetching legacy data for ID: 123
            // Processed new format: {"id":123,"data":"OLD_DATA"}
            ```
        *   **Important Point:** Allows existing code to be reused with new systems or libraries without modification.

    *   **Decorator Pattern**
        *   **Intent:** Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
        *   **Problem:** You want to add new functionalities to individual objects at runtime, without affecting other objects of the same class. Subclassing can lead to a combinatorial explosion of classes.
        *   **Solution:** Create `Decorator` classes that wrap the original `Component` object and add behavior before or after delegating to the wrapped object.
        *   **Web Context Example:**
            *   Adding logging, caching, or authentication to API endpoints.
            *   Enhancing UI elements with additional features like tooltips, borders, or validation.
            *   Adding dynamic styling to DOM elements.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Component Interface
            class Order {
                getPrice() {
                    throw new Error("Not implemented");
                }
                getDescription() {
                    throw new Error("Not implemented");
                }
            }

            // Concrete Component
            class BasicOrder extends Order {
                getPrice() {
                    return 10;
                }
                getDescription() {
                    return "Basic Order";
                }
            }

            // Decorator (Abstract)
            class OrderDecorator extends Order {
                constructor(order) {
                    super();
                    this.order = order;
                }

                getPrice() {
                    return this.order.getPrice();
                }

                getDescription() {
                    return this.order.getDescription();
                }
            }

            // Concrete Decorators
            class DiscountDecorator extends OrderDecorator {
                getPrice() {
                    return super.getPrice() * 0.9; // 10% discount
                }
                getDescription() {
                    return `${super.getDescription()}, with Discount`;
                }
            }

            class GiftWrapDecorator extends OrderDecorator {
                getPrice() {
                    return super.getPrice() + 5; // Additional cost for gift wrap
                }
                getDescription() {
                    return `${super.getDescription()}, Gift Wrapped`;
                }
            }

            // Client Code
            const basicOrder = new BasicOrder();
            console.log(`${basicOrder.getDescription()}: $${basicOrder.getPrice()}`); // Basic Order: $10

            const orderWithDiscount = new DiscountDecorator(basicOrder);
            console.log(`${orderWithDiscount.getDescription()}: $${orderWithDiscount.getPrice()}`); // Basic Order, with Discount: $9

            const discountedGiftOrder = new GiftWrapDecorator(orderWithDiscount);
            console.log(`${discountedGiftOrder.getDescription()}: $${discountedGiftOrder.getPrice()}`); // Basic Order, with Discount, Gift Wrapped: $14
            ```
        *   **Important Point:** Open/Closed Principle (open for extension, closed for modification).

    *   **Proxy Pattern**
        *   **Intent:** Provide a surrogate or placeholder for another object to control access to it.
        *   **Problem:** You want to control access to an object, possibly for performance optimization (lazy loading), security (access control), or logging.
        *   **Solution:** A `Proxy` object mirrors the interface of the `Subject` and controls access to the real `Subject` object.
        *   **Web Context Example:**
            *   **Remote Proxy:** Representing an object that exists in a different address space (e.g., calling a remote API).
            *   **Virtual Proxy:** Lazy loading of expensive objects (e.g., loading a large image only when it's about to be displayed).
            *   **Protection Proxy:** Enforcing access rights to an object.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Subject Interface
            class Image {
                display() {
                    throw new Error("Not implemented");
                }
            }

            // Real Subject
            class RealImage extends Image {
                constructor(filename) {
                    super();
                    this.filename = filename;
                    console.log(`Loading image: ${filename}`);
                    // Simulate loading time
                    this.data = `Image data for ${filename}`;
                }

                display() {
                    console.log(`Displaying: ${this.filename}`);
                }
            }

            // Proxy
            class ImageProxy extends Image {
                constructor(filename) {
                    super();
                    this.filename = filename;
                    this.realImage = null; // Initially null for virtual proxy
                }

                display() {
                    if (this.realImage === null) {
                        // Lazy loading: create real image only when needed
                        this.realImage = new RealImage(this.filename);
                    }
                    this.realImage.display();
                }
            }

            // Client Code
            const imageProxy = new ImageProxy("my_high_res_image.jpg");

            // Image is not loaded yet
            console.log("Calling display for the first time...");
            imageProxy.display();
            // Output:
            // Calling display for the first time...
            // Loading image: my_high_res_image.jpg
            // Displaying: my_high_res_image.jpg

            console.log("Calling display for the second time...");
            imageProxy.display();
            // Output:
            // Calling display for the second time...
            // Displaying: my_high_res_image.jpg
            // (No "Loading image" message, as it's already loaded)
            ```
        *   **Important Point:** Provides a layer of indirection to access an object, useful for controlling access or managing resources.

    *   **Facade Pattern**
        *   **Intent:** Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.
        *   **Problem:** A complex subsystem with many classes, interfaces, and dependencies. Clients have to interact with many of these components, leading to tight coupling and complexity.
        *   **Solution:** A `Facade` class provides a simplified, single point of entry to the subsystem, delegating client requests to appropriate components.
        *   **Web Context Example:**
            *   Simplifying interactions with a complex API client library (e.g., making a single call to an `ApiService` facade that handles multiple underlying HTTP requests).
            *   Abstracting away the complexity of DOM manipulation or event handling.
            *   Creating a user-friendly interface for a payment gateway integration.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Subsystem Components
            class InventoryService {
                checkStock(itemId) { console.log(`Checking stock for ${itemId}`); return true; }
            }

            class PaymentGateway {
                processPayment(amount, method) { console.log(`Processing payment of ${amount} via ${method}`); return true; }
            }

            class NotificationService {
                sendEmail(recipient, message) { console.log(`Sending email to ${recipient}: "${message}"`); }
            }

            // Facade
            class ECommerceFacade {
                constructor() {
                    this.inventoryService = new InventoryService();
                    this.paymentGateway = new PaymentGateway();
                    this.notificationService = new NotificationService();
                }

                placeOrder(itemId, amount, paymentMethod, email) {
                    console.log("--- Placing Order ---");
                    if (!this.inventoryService.checkStock(itemId)) {
                        console.error("Item out of stock!");
                        return false;
                    }

                    if (!this.paymentGateway.processPayment(amount, paymentMethod)) {
                        console.error("Payment failed!");
                        return false;
                    }

                    this.notificationService.sendEmail(email, `Your order for ${itemId} has been placed successfully.`);
                    console.log("--- Order Placed Successfully ---");
                    return true;
                }
            }

            // Client Code
            const ecommerceFacade = new ECommerceFacade();
            ecommerceFacade.placeOrder('BOOK-XYZ', 25.99, 'Credit Card', 'customer@example.com');
            /*
            Output:
            --- Placing Order ---
            Checking stock for BOOK-XYZ
            Processing payment of 25.99 via Credit Card
            Sending email to customer@example.com: "Your order for BOOK-XYZ has been placed successfully."
            --- Order Placed Successfully ---
            */
            ```
        *   **Important Point:** Reduces complexity by providing a simple interface to a complex subsystem.

    *   **Composite Pattern**
        *   **Intent:** Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.
        *   **Problem:** You need to treat individual objects and compositions of objects in the same way. For example, a file system where you have files (leaf nodes) and directories (composite nodes) that can contain other files or directories.
        *   **Solution:** Define an abstract `Component` class with operations. `Leaf` classes implement `Component` for individual objects. `Composite` classes implement `Component` and can contain other `Component` objects.
        *   **Web Context Example:**
            *   Representing UI component hierarchies (e.g., a `Panel` containing `Button`s and `Label`s).
            *   Navigational structures (menus, tree views).
            *   XML/HTML document structures.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Component Interface
            class UIElement {
                render() {
                    throw new Error("Not implemented");
                }
            }

            // Leaf Class
            class Text extends UIElement {
                constructor(content) {
                    super();
                    this.content = content;
                }

                render() {
                    return `<span>${this.content}</span>`;
                }
            }

            // Composite Class
            class Container extends UIElement {
                constructor(name) {
                    super();
                    this.name = name;
                    this.children = [];
                }

                addChild(element) {
                    this.children.push(element);
                }

                render() {
                    let html = `<div>${this.name}: [`;
                    this.children.forEach(child => {
                        html += child.render();
                    });
                    html += ']</div>';
                    return html;
                }
            }

            // Client Code
            const mainContainer = new Container("Main Layout");
            const header = new Container("Header");
            header.addChild(new Text("Welcome"));

            const content = new Container("Content");
            content.addChild(new Text("This is the main content."));

            const footer = new Container("Footer");
            footer.addChild(new Text("© 2023"));

            mainContainer.addChild(header);
            mainContainer.addChild(content);
            mainContainer.addChild(footer);

            console.log(mainContainer.render());
            /*
            Output:
            Main Layout: [Header: [<span>Welcome</span>]Content: [<span>This is the main content.</span>]Footer: [<span>© 2023</span>]]
            */
            ```
        *   **Important Point:** Enables treating a single object and a composition of objects uniformly.

    *   **Bridge Pattern**
        *   **Intent:** Decouple an abstraction from its implementation so that the two can vary independently.
        *   **Problem:** You have a class hierarchy that has multiple variations in both its functionality and its implementation details. Subclassing directly can lead to a class explosion.
        *   **Solution:** Separate the "what" (abstraction) from the "how" (implementation). The abstraction holds a reference to an implementation object and delegates the implementation-dependent work to it.
        *   **Web Context Example:**
            *   Abstracting different UI rendering engines (e.g., DOM manipulation, Canvas, SVG) or different data sources.
            *   Connecting to different WebSocket providers.
            *   Managing different CSS frameworks with a common API.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Implementor Interface
            class Renderer {
                renderCircle(radius) {
                    throw new Error("Not implemented");
                }
                renderSquare(side) {
                    throw new Error("Not implemented");
                }
            }

            // Concrete Implementors
            class SVGPrimitiveRenderer extends Renderer {
                renderCircle(radius) { return `<circle r="${radius}" />`; }
                renderSquare(side) { return `<rect width="${side}" height="${side}" />`; }
            }

            class HTMLShapeRenderer extends Renderer {
                renderCircle(radius) { return `<div class="circle" style="width: ${radius*2}px; height: ${radius*2}px; border-radius: 50%;"></div>`; }
                renderSquare(side) { return `<div class="square" style="width: ${side}px; height: ${side}px;"></div>`; }
            }

            // Abstraction
            class Shape {
                constructor(renderer) {
                    this.renderer = renderer;
                }

                // Operation defined in abstraction
                draw() {
                    throw new Error("Not implemented");
                }
            }

            // Refined Abstraction
            class Circle extends Shape {
                constructor(renderer, radius) {
                    super(renderer);
                    this.radius = radius;
                }

                draw() {
                    return this.renderer.renderCircle(this.radius);
                }
            }

            class Square extends Shape {
                constructor(renderer, side) {
                    super(renderer);
                    this.side = side;
                }

                draw() {
                    return this.renderer.renderSquare(this.side);
                }
            }

            // Client Code
            const svgRenderer = new SVGPrimitiveRenderer();
            const htmlRenderer = new HTMLShapeRenderer();

            const circleSVG = new Circle(svgRenderer, 50);
            console.log(circleSVG.draw()); // <circle r="50" />

            const squareHTML = new Square(htmlRenderer, 100);
            console.log(squareHTML.draw()); // <div class="square" style="width: 100px; height: 100px;"></div>

            // Switch implementations easily
            const circleHTML = new Circle(htmlRenderer, 75);
            console.log(circleHTML.draw()); // <div class="circle" style="width: 150px; height: 150px; border-radius: 50%;"></div>
            ```
        *   **Important Point:** Allows the abstraction and implementation to be extended independently.

### 2.3. Behavioral Patterns

*   **Focus:** Algorithms and the assignment of responsibilities between objects. They are concerned with how objects interact and communicate with each other.

    *   **Observer Pattern**
        *   **Intent:** Define a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically.
        *   **Problem:** You need to update multiple objects when the state of a single object changes, but you want to avoid tight coupling between them.
        *   **Solution:** The `Subject` maintains a list of its `Observer` objects and notifies them when its state changes. Each `Observer` subscribes to the `Subject`.
        *   **Web Context Example:**
            *   **SPAs:** The core pattern for managing state updates. When application state changes (e.g., user logs in, data is fetched), UI components that depend on that state are notified and re-render.
            *   Event listeners in JavaScript (`addEventListener` is a form of observer pattern).
            *   Real-time data updates in dashboards.
        *   **JavaScript Example (Conceptual - Observer pattern is very common in JS frameworks):**
            ```javascript
            // Subject
            class WeatherStation {
                constructor() {
                    this.observers = [];
                    this.temperature = 0;
                }

                addObserver(observer) {
                    this.observers.push(observer);
                }

                removeObserver(observer) {
                    this.observers = this.observers.filter(obs => obs !== observer);
                }

                setTemperature(temp) {
                    this.temperature = temp;
                    this.notifyObservers();
                }

                notifyObservers() {
                    this.observers.forEach(observer => observer.update(this.temperature));
                }
            }

            // Observer
            class WeatherDisplay {
                constructor(name) {
                    this.name = name;
                }

                update(temperature) {
                    console.log(`${this.name}: Current temperature is ${temperature}°C`);
                }
            }

            // Client Code
            const station = new WeatherStation();
            const display1 = new WeatherDisplay("Display 1");
            const display2 = new WeatherDisplay("Display 2");

            station.addObserver(display1);
            station.addObserver(display2);

            station.setTemperature(25);
            // Output:
            // Display 1: Current temperature is 25°C
            // Display 2: Current temperature is 25°C

            station.setTemperature(28);
            // Output:
            // Display 1: Current temperature is 28°C
            // Display 2: Current temperature is 28°C

            station.removeObserver(display1);
            station.setTemperature(30);
            // Output:
            // Display 2: Current temperature is 30°C
            // (Display 1 is no longer notified)
            ```
        *   **Important Point:** Enables loose coupling between objects.

    *   **Strategy Pattern**
        *   **Intent:** Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
        *   **Problem:** You have multiple algorithms that perform the same task, and you need to switch between them at runtime.
        *   **Solution:** Define an interface for the algorithm. Create concrete strategy classes that implement the interface. A `Context` object holds a reference to a strategy object and delegates the work to it.
        *   **Web Context Example:**
            *   Different sorting algorithms for data lists.
            *   Various payment processing methods (credit card, PayPal, etc.).
            *   Different data compression or encryption techniques.
            *   Different strategies for fetching data (e.g., from cache, from API).
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Strategy Interface
            class CompressionStrategy {
                compress(data) {
                    throw new Error("Not implemented");
                }
            }

            // Concrete Strategies
            class ZipCompression extends CompressionStrategy {
                compress(data) {
                    console.log(`Compressing using ZIP: ${data}`);
                    return `ZIP(${data})`;
                }
            }

            class RarCompression extends CompressionStrategy {
                compress(data) {
                    console.log(`Compressing using RAR: ${data}`);
                    return `RAR(${data})`;
                }
            }

            // Context
            class File {
                constructor(filename, data) {
                    this.filename = filename;
                    this.data = data;
                    this.compressionStrategy = null; // Strategy not set initially
                }

                setCompressionStrategy(strategy) {
                    this.compressionStrategy = strategy;
                }

                compress() {
                    if (this.compressionStrategy) {
                        return this.compressionStrategy.compress(this.data);
                    } else {
                        console.error("No compression strategy set.");
                        return this.data;
                    }
                }
            }

            // Client Code
            const file = new File("document.txt", "This is the file content.");

            const zipStrategy = new ZipCompression();
            file.setCompressionStrategy(zipStrategy);
            console.log(file.compress());
            // Output:
            // Compressing using ZIP: This is the file content.
            // ZIP(This is the file content.)

            const rarStrategy = new RarCompression();
            file.setCompressionStrategy(rarStrategy);
            console.log(file.compress());
            // Output:
            // Compressing using RAR: This is the file content.
            // RAR(This is the file content.)
            ```
        *   **Important Point:** Allows you to change the algorithm at runtime.

    *   **Template Method Pattern**
        *   **Intent:** Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.
        *   **Problem:** You have a common algorithm structure that is used in many places, but specific steps vary.
        *   **Solution:** A base class defines the `Template Method` which outlines the algorithm. It calls abstract "primitive" methods that subclasses must implement to provide the specific steps.
        *   **Web Context Example:**
            *   Processing data from different sources (e.g., fetching from API, reading from file).
            *   Building a generic report generation process that can be customized for different report types.
            *   Workflow orchestration where some steps are common, and others are specific to the task.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Abstract Class
            class DataImporter {
                // Template Method
                import(source) {
                    const rawData = this.fetchData(source);
                    const processedData = this.processData(rawData);
                    this.saveData(processedData);
                }

                // Abstract Methods (to be implemented by subclasses)
                fetchData(source) { throw new Error("fetchData must be implemented"); }
                processData(rawData) { throw new Error("processData must be implemented"); }

                // Concrete method with default implementation
                saveData(processedData) {
                    console.log("Saving data:", processedData);
                }
            }

            // Concrete Class
            class ApiDataImporter extends DataImporter {
                fetchData(source) {
                    console.log(`Fetching data from API: ${source}`);
                    return `API_RAW(${source})`;
                }

                processData(rawData) {
                    console.log("Processing API data...");
                    return rawData.toLowerCase();
                }
            }

            // Another Concrete Class
            class FileDataImporter extends DataImporter {
                fetchData(source) {
                    console.log(`Reading data from file: ${source}`);
                    return `FILE_RAW(${source})`;
                }

                processData(rawData) {
                    console.log("Processing file data...");
                    return rawData.toUpperCase();
                }
            }

            // Client Code
            const apiImporter = new ApiDataImporter();
            apiImporter.import("https://api.example.com/data");
            /*
            Output:
            Fetching data from API: https://api.example.com/data
            Processing API data...
            Saving data: api_raw(https://api.example.com/data)
            */

            const fileImporter = new FileDataImporter();
            fileImporter.import("data.csv");
            /*
            Output:
            Reading data from file: data.csv
            Processing file data...
            Saving data: FILE_RAW(DATA.CSV)
            */
            ```
        *   **Important Point:** Defines a common algorithm skeleton, allowing subclasses to fill in specific steps.

    *   **State Pattern**
        *   **Intent:** Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.
        *   **Problem:** An object exhibits different behavior based on its internal state. This can lead to large `if-else` or `switch` statements that are hard to manage.
        *   **Solution:** Create separate `State` objects that encapsulate the behavior for each state. The `Context` object delegates state-specific behavior to its current `State` object. When the state changes, the `Context` switches its `State` object.
        *   **Web Context Example:**
            *   Managing the state of a UI element (e.g., a button that can be `enabled`, `disabled`, `loading`, `error`).
            *   Order processing in an e-commerce application (e.g., `pending`, `processing`, `shipped`, `delivered`, `cancelled`).
            *   User authentication states.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // State Interface
            class TrafficLightState {
                change(context) {
                    throw new Error("Not implemented");
                }
                getColor() {
                    throw new Error("Not implemented");
                }
            }

            // Concrete States
            class RedLight extends TrafficLightState {
                change(context) {
                    context.setState(new GreenLight());
                }
                getColor() {
                    return "Red";
                }
            }

            class GreenLight extends TrafficLightState {
                change(context) {
                    context.setState(new YellowLight());
                }
                getColor() {
                    return "Green";
                }
            }

            class YellowLight extends TrafficLightState {
                change(context) {
                    context.setState(new RedLight());
                }
                getColor() {
                    return "Yellow";
                }
            }

            // Context
            class TrafficLight {
                constructor() {
                    this.currentState = new RedLight(); // Initial state
                }

                setState(state) {
                    this.currentState = state;
                    console.log(`Traffic light is now: ${this.currentState.getColor()}`);
                }

                pressButton() {
                    this.currentState.change(this);
                }
            }

            // Client Code
            const trafficLight = new TrafficLight(); // Traffic light is now: Red

            trafficLight.pressButton(); // Traffic light is now: Green
            trafficLight.pressButton(); // Traffic light is now: Yellow
            trafficLight.pressButton(); // Traffic light is now: Red
            ```
        *   **Important Point:** Separates state-specific behavior into different classes, making the code cleaner and easier to extend.

    *   **Command Pattern**
        *   **Intent:** Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
        *   **Problem:** You need to issue requests to an object but don't know anything about the operation being performed or the receiver of the request. You want to decouple the sender of a request from its receiver.
        *   **Solution:** Create a `Command` interface with an `execute()` method. `ConcreteCommand` classes implement this interface and hold a reference to the `Receiver` object and its action. A `Client` creates `ConcreteCommand` objects and passes them to an `Invoker` (e.g., a button, a menu item).
        *   **Web Context Example:**
            *   Implementing undo/redo functionality in a text editor or drawing application.
            *   Queuing operations for asynchronous execution.
            *   Handling user actions in a GUI application.
            *   Managing API calls with retry mechanisms.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Receiver
            class Light {
                turnOn() { console.log("Light is ON"); }
                turnOff() { console.log("Light is OFF"); }
            }

            // Command Interface
            class Command {
                execute() {
                    throw new Error("Not implemented");
                }
                undo() {
                    throw new Error("Not implemented");
                }
            }

            // Concrete Commands
            class TurnOnCommand extends Command {
                constructor(light) {
                    super();
                    this.light = light;
                }

                execute() {
                    this.light.turnOn();
                }

                undo() {
                    this.light.turnOff();
                }
            }

            class TurnOffCommand extends Command {
                constructor(light) {
                    super();
                    this.light = light;
                }

                execute() {
                    this.light.turnOff();
                }

                undo() {
                    this.light.turnOn();
                }
            }

            // Invoker
            class Button {
                constructor(command) {
                    this.command = command;
                }

                click() {
                    this.command.execute();
                }

                clickUndo() {
                    this.command.undo();
                }
            }

            // Client Code
            const livingRoomLight = new Light();

            const turnOn = new TurnOnCommand(livingRoomLight);
            const turnOff = new TurnOffCommand(livingRoomLight);

            const onButton = new Button(turnOn);
            const offButton = new Button(turnOff);

            onButton.click();   // Light is ON
            offButton.click();  // Light is OFF
            onButton.clickUndo(); // Light is OFF (undoing turnOn)
            offButton.clickUndo(); // Light is ON (undoing turnOff)
            ```
        *   **Important Point:** Decouples the sender of a request from the receiver, allowing for flexible command management.

    *   **Mediator Pattern**
        *   **Intent:** Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.
        *   **Problem:** When objects have complex interactions, they can become tightly coupled to each other. Changes in one object might require changes in many others.
        *   **Solution:** A `Mediator` object manages all interactions between `Colleague` objects. `Colleague` objects communicate with the `Mediator` instead of directly with each other.
        *   **Web Context Example:**
            *   **Chat applications:** A `ChatRoom` mediator to manage communication between `User` participants.
            *   **Form validation:** A `FormMediator` to coordinate validation logic between different form input fields.
            *   Managing interactions between multiple components in an SPA.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Mediator Interface
            class ChatRoomMediator {
                sendMessage(message, sender, recipient) {
                    throw new Error("Not implemented");
                }
                addUser(user) {
                    throw new Error("Not implemented");
                }
            }

            // Concrete Mediator
            class ConcreteChatRoom extends ChatRoomMediator {
                constructor() {
                    super();
                    this.users = [];
                }

                addUser(user) {
                    this.users.push(user);
                    user.setMediator(this);
                    console.log(`${user.name} joined the chat.`);
                }

                sendMessage(message, sender, recipient = null) {
                    if (recipient) {
                        const targetUser = this.users.find(user => user.name === recipient);
                        if (targetUser) {
                            console.log(`[${sender.name} to ${targetUser.name}]: ${message}`);
                            targetUser.receiveMessage(`[${sender.name}]: ${message}`);
                        }
                    } else {
                        // Broadcast to all users (except sender)
                        this.users.forEach(user => {
                            if (user !== sender) {
                                console.log(`[${sender.name} (to all)]: ${message}`);
                                user.receiveMessage(`[${sender.name}]: ${message}`);
                            }
                        });
                    }
                }
            }

            // Colleague
            class User {
                constructor(name) {
                    this.name = name;
                    this.mediator = null;
                }

                setMediator(mediator) {
                    this.mediator = mediator;
                }

                send(message, recipient = null) {
                    if (this.mediator) {
                        this.mediator.sendMessage(message, this, recipient);
                    }
                }

                receiveMessage(message) {
                    console.log(`<- ${this.name} received: ${message}`);
                }
            }

            // Client Code
            const chatRoom = new ConcreteChatRoom();

            const user1 = new User("Alice");
            const user2 = new User("Bob");
            const user3 = new User("Charlie");

            chatRoom.addUser(user1); // Alice joined the chat.
            chatRoom.addUser(user2); // Bob joined the chat.
            chatRoom.addUser(user3); // Charlie joined the chat.

            user1.send("Hello Bob!", "Bob");
            /*
            Output:
            [Alice to Bob]: Hello Bob!
            <- Bob received: [Alice]: Hello Bob!
            */

            user2.send("Hi Alice and Charlie!", "Alice");
            /*
            Output:
            [Bob (to all)]: Hi Alice and Charlie!
            <- Alice received: [Bob]: Hi Alice and Charlie!
            <- Charlie received: [Bob]: Hi Alice and Charlie!
            */
            ```
        *   **Important Point:** Reduces direct dependencies between objects, promoting modularity.

    *   **Iterator Pattern**
        *   **Intent:** Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
        *   **Problem:** You have an aggregate object (like a list, array, or tree) that holds a collection of elements, and you want to traverse these elements without exposing the internal structure of the aggregate.
        *   **Solution:** Define an `Iterator` interface with methods like `next()`, `hasNext()`, `current()`. The `Aggregate` object provides an `createIterator()` method that returns an iterator for its elements.
        *   **Web Context Example:**
            *   Iterating over collections of data fetched from an API.
            *   Traversing the DOM tree.
            *   Implementing pagination for large datasets.
        *   **JavaScript Example (Conceptual):**
            ```javascript
            // Aggregate Interface
            class ListAggregate {
                createIterator() {
                    throw new Error("Not implemented");
                }
            }

            // Concrete Aggregate
            class MyListIterator extends ListAggregate {
                constructor(items) {
                    super();
                    this.items = items;
                    this.currentIndex = 0;
                }

                createIterator() {
                    return new Iterator(this.items);
                }
            }

            // Iterator
            class Iterator {
                constructor(items) {
                    this.items = items;
                    this.index = 0;
                }

                hasNext() {
                    return this.index < this.items.length;
                }

                next() {
                    if (this.hasNext()) {
                        return this.items[this.index++];
                    }
                    return null;
                }

                current() {
                    return this.items[this.index];
                }
            }

            // Client Code
            const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
            const list = new MyListIterator(items);
            const iterator = list.createIterator();

            console.log("Iterating over items:");
            while (iterator.hasNext()) {
                console.log(`- ${iterator.next()}`);
            }
            /*
            Output:
            Iterating over items:
            - Item 1
            - Item 2
            - Item 3
            - Item 4
            */

            // Using 'current' to peek
            const nextItem = iterator.next(); // iterator.index is now 4
            console.log("Next item:", nextItem); // Next item: null
            // console.log("Current item:", iterator.current()); // This would error or be undefined because index is out of bounds.
            ```
        *   **Important Point:** Allows traversal of collections without exposing their internal structure.

---

## 3. Patterns in the Context of SPAs (Single Page Applications)

SPAs introduce unique challenges and opportunities for design patterns.

### 3.1. State Management

*   **Problem:** Managing complex application state across multiple components in a dynamic and reactive way.
*   **Patterns:**
    *   **Observer:** Fundamental for reactive updates. Components observe state changes and re-render accordingly.
    *   **Singleton:** Can be used for global state managers (e.g., Redux store, Vuex store).
    *   **State:** Useful for managing complex UI states within individual components or features.
    *   **Mediator:** Can help coordinate interactions between various state-holding components.

### 3.2. Component Architecture

*   **Problem:** Building modular, reusable, and maintainable UI components.
*   **Patterns:**
    *   **Composite:** Represents component hierarchies (e.g., a `Layout` component containing `Header`, `Sidebar`, `Content`).
    *   **Decorator:** Adding dynamic behavior or styling to components (e.g., a `TooltipDecorator` for any button).
    *   **Strategy:** Implementing different rendering strategies or variations for a component.
    *   **Factory Method / Abstract Factory:** Creating different types of components based on configuration or environment.

### 3.3. Data Fetching and API Interaction

*   **Problem:** Handling asynchronous data fetching, caching, and error management.
*   **Patterns:**
    *   **Proxy:** For caching API responses, request throttling, or handling remote data.
    *   **Facade:** To simplify interaction with a complex API service layer, providing a unified interface.
    *   **Command:** For managing asynchronous API requests, potentially with retry logic or queuing.
    *   **Observer:** To notify components when data has been fetched or updated.

### 3.4. Routing

*   **Problem:** Managing navigation and URL changes within a single page.
*   **Patterns:**
    *   **State:** Routing can be seen as managing the application's state (e.g., current page, parameters).
    *   **Observer:** Components might observe route changes to update their content.

---

## 4. How to Choose the Right Pattern

*   **Understand the Problem:** Clearly define the problem you're trying to solve.
*   **Consider the Context:** How does the pattern fit into your existing architecture and the specific requirements of your web application?
*   **Analyze the Trade-offs:** Every pattern has pros and cons. Consider complexity, performance, maintainability, and flexibility.
*   **Start Simple:** Don't over-engineer. Sometimes, a simpler approach is better.
*   **Learn from Others:** Look at how established frameworks and libraries use patterns.

---

## 5. Practice Questions & Exercises

**Question 1:**
You are building a web application where users can select different themes (e.g., 'dark', 'light', 'high-contrast'). Each theme involves changing the color scheme, font styles, and button appearances across many UI components. Which design pattern would be most suitable for managing the creation of these related theme-specific UI components?

a) Singleton
b) Observer
c) Abstract Factory
d) Decorator

**Answer 1:**
**c) Abstract Factory**

*   **Explanation:** The Abstract Factory pattern is ideal here because it provides an interface for creating families of related objects (UI components for a specific theme) without specifying their concrete classes. You can have a `DarkThemeFactory`, `LightThemeFactory`, etc., each producing buttons, text inputs, and other components consistent with their respective themes.

---

**Question 2:**
In your SPA, you have a complex data grid component that needs to display data fetched from an API. Loading the entire dataset at once can be slow and inefficient for large datasets. You want to implement a feature where only the visible rows are rendered and more data is fetched as the user scrolls down. Which pattern would help you manage this "lazy loading" behavior and control access to the data?

a) Facade
b) Proxy
c) Strategy
d) Mediator

**Answer 2:**
**b) Proxy**

*   **Explanation:** A Proxy pattern, specifically a Virtual Proxy, is suitable for lazy loading. The `DataGridProxy` can hold a reference to the actual data fetching mechanism. It would only trigger the data fetch when it's needed (e.g., when the user scrolls to a specific point), and it can manage the loading state.

---

**Question 3:**
You are developing a feature that allows users to perform an action, but you want to make this action undoable. For example, a user might apply a filter to a list, and then want to revert to the previous state. Which pattern allows you to encapsulate the action itself and potentially store it to support an undo operation?

a) Template Method
b) State
c) Command
d) Observer

**Answer 3:**
**c) Command**

*   **Explanation:** The Command pattern is designed precisely for this. You can encapsulate the filter application action into a `FilterCommand` object. This object would have an `execute()` method to apply the filter and an `undo()` method to revert it. These commands can be stored in a history list, enabling undo/redo functionality.

---

**Question 4:**
You have a chat application where users can send messages to each other. If each user directly managed communication with every other user, the system would become very complex and tightly coupled. Which pattern would help you centralize the communication logic, allowing users to send messages without knowing who the specific recipients are, only who they intend to message?

a) Decorator
b) Composite
c) Mediator
d) Adapter

**Answer 4:**
**c) Mediator**

*   **Explanation:** The Mediator pattern is perfect for managing complex inter-object communication. A `ChatRoom` (the Mediator) would handle messages between `User` objects (the Colleagues). Users would send messages to the `ChatRoom`, specifying a recipient, and the `ChatRoom` would then deliver the message to the intended user.

---

**Exercise 1:**
Implement a simplified version of the **Observer pattern** in JavaScript. Create a `Subject` class that can hold a list of observers. It should have methods to `subscribe` (add observer), `unsubscribe` (remove observer), and `notify` (call an `update` method on all subscribed observers). Then, create a simple `Observer` class with an `update` method. Test by creating a subject and subscribing a couple of observers to it, then calling `notify` to see the observers react.

**Exercise 1 Solution:**
```javascript
// Subject
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
        console.log("Observer subscribed.");
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
        console.log("Observer unsubscribed.");
    }

    notify(data) {
        console.log("Notifying observers with data:", data);
        this.observers.forEach(observer => observer.update(data));
    }
}

// Observer
class ConcreteObserver {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received update: ${data}`);
    }
}

// Test
const subject = new Subject();
const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello from Subject!");
// Output:
// Observer subscribed.
// Observer subscribed.
// Notifying observers with data: Hello from Subject!
// Observer 1 received update: Hello from Subject!
// Observer 2 received update: Hello from Subject!

subject.unsubscribe(observer1);
subject.notify("Another message!");
// Output:
// Observer unsubscribed.
// Notifying observers with data: Another message!
// Observer 2 received update: Another message!
```

---

## 6. Important Points to Remember

*   **Design Patterns are Guidelines, Not Rules:** They are flexible solutions that can be adapted.
*   **Know Your Problem:** The key to applying patterns effectively is understanding the problem you're solving.
*   **Avoid Overuse:** Applying patterns unnecessarily can increase complexity without providing significant benefits.
*   **Readability and Maintainability:** Prioritize clear, understandable code. Patterns help achieve this.
*   **Context is Key:** Consider the specific constraints and requirements of web development, especially SPAs, when choosing and implementing patterns.
*   **JavaScript's Dynamic Nature:** JavaScript's flexibility can sometimes make pattern implementations look simpler than in statically-typed languages, but the core principles remain the same.

---
