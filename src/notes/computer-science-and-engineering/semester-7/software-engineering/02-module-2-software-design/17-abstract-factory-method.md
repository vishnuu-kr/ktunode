---
title: "Abstract Factory method"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c89c"
status: "completed"
scrapedAt: "2026-05-20T17:11:13.493Z"
---
# Software Engineering: Module 2 - Software Design
## Topic: Abstract Factory Method

---

### **1. Introduction to Abstract Factory Method**

**What is it?**
The Abstract Factory Method is a **creational design pattern**. It provides an interface for creating **families of related or dependent objects** without specifying their concrete classes.

**Core Idea:**
Instead of creating individual objects directly, you create an "Abstract Factory" that knows how to create a set of related objects. This factory can then be configured to produce different "families" of products.

**Analogy:**
Imagine you're ordering a meal. You don't ask for a specific "burger bun" and a specific "burger patty." You order a "Burger Meal" and the restaurant's kitchen (the factory) provides the complete meal, which might include a specific type of bun and a specific type of patty based on what kind of burger meal it is (e.g., a vegetarian burger meal might use a different bun and patty than a beef burger meal).

---

### **2. Key Concepts and Definitions**

*   **Abstract Factory:** An interface that declares a set of operations for creating abstract product objects.
*   **Concrete Factory:** Implements the operations of the Abstract Factory to create concrete product objects belonging to a specific "family."
*   **Abstract Product:** Declares an interface for a type of product object that the factory method creates.
*   **Concrete Product:** Defines a product object to be created by the corresponding concrete factory. Concrete products of the same type from different concrete factories must be compatible.
*   **Client:** Uses only interfaces declared by Abstract Factory and Abstract Product classes. It's decoupled from the concrete implementations.
*   **Product Family:** A set of related or dependent product objects that are designed to work together. For example, a UI toolkit might have families of buttons, checkboxes, and scrollbars for different operating systems (e.g., Windows, macOS).

---

### **3. Structure of the Abstract Factory Pattern**

The Abstract Factory pattern typically involves the following participants:

*   **AbstractFactory:**
    *   Declares an interface for operations that create abstract products.
    *   Example: `GUIFactory`
        ```
        interface GUIFactory {
            Button createButton();
            Checkbox createCheckbox();
        }
        ```

*   **ConcreteFactory:**
    *   Implements the operations to create concrete product objects.
    *   Each concrete factory produces products for a specific family.
    *   Example: `WindowsFactory`, `MacFactory`
        ```java
        class WindowsFactory implements GUIFactory {
            @Override
            public Button createButton() {
                return new WindowsButton();
            }
            @Override
            public Checkbox createCheckbox() {
                return new WindowsCheckbox();
            }
        }

        class MacFactory implements GUIFactory {
            @Override
            public Button createButton() {
                return new MacButton();
            }
            @Override
            public Checkbox createCheckbox() {
                return new MacCheckbox();
            }
        }
        ```

*   **AbstractProduct:**
    *   Declares an interface for a type of product object.
    *   Example: `Button`, `Checkbox`
        ```java
        interface Button {
            void paint();
        }
        interface Checkbox {
            void paint();
        }
        ```

*   **ConcreteProduct:**
    *   Defines a product object to be created by the corresponding concrete factory.
    *   Concrete products of the same product type must be compatible.
    *   Example: `WindowsButton`, `WindowsCheckbox`, `MacButton`, `MacCheckbox`
        ```java
        class WindowsButton implements Button {
            @Override
            public void paint() {
                System.out.println("Painting a Windows button.");
            }
        }
        class WindowsCheckbox implements Checkbox {
            @Override
            public void paint() {
                System.out.println("Painting a Windows checkbox.");
            }
        }
        class MacButton implements Button {
            @Override
            public void paint() {
                System.out.println("Painting a Mac button.");
            }
        }
        class MacCheckbox implements Checkbox {
            @Override
            public void paint() {
                System.out.println("Painting a Mac checkbox.");
            }
        }
        ```

*   **Client:**
    *   Uses the AbstractFactory and AbstractProduct interfaces.
    *   It doesn't know which concrete factory it's using or which concrete products it's creating.
    *   Example: `Application`
        ```java
        class Application {
            private Button button;
            private Checkbox checkbox;

            public Application(GUIFactory factory) {
                button = factory.createButton();
                checkbox = factory.createCheckbox();
            }

            public void paintUI() {
                button.paint();
                checkbox.paint();
            }
        }
        ```

---

### **4. How it Works (Execution Flow)**

1.  The client needs to create a set of related objects.
2.  The client decides which **ConcreteFactory** to instantiate (e.g., `WindowsFactory` or `MacFactory`). This is often determined by configuration or environment variables.
3.  The client passes this **ConcreteFactory** instance to the constructor or a method of its own class (like the `Application` class in the example).
4.  Inside the client's class, it calls the **AbstractFactory's** methods (e.g., `createButton()`, `createCheckbox()`) to get the required products.
5.  The **ConcreteFactory** then creates and returns the appropriate **ConcreteProducts** for its family.
6.  The client then uses these product objects, interacting with them through their abstract interfaces, without knowing their specific implementations.

---

### **5. When to Use the Abstract Factory Method**

*   **When a system should be independent of how its products are created, composed, and represented.** This pattern enforces this independence by using abstract interfaces for concrete families of products.
*   **When a system should be configurable with respect to the products it creates.** The client can choose which concrete factory to use, thereby changing the family of products created.
*   **When a family of related product objects is designed to be used together, and you need to enforce this constraint.** For example, a UI toolkit might need to ensure that buttons and scrollbars from the same family look and behave cohesively.
*   **When you want to provide a library of products without exposing implementation details.** A framework can expose its abstract factories, allowing clients to use any concrete factory from the library.

---

### **6. Advantages**

*   **Decoupling:** The client is decoupled from concrete factory and product classes. It only depends on abstract interfaces.
*   **Product Family Consistency:** Ensures that products from the same family are compatible and work well together.
*   **Easy to Introduce New Product Families:** You can add a new concrete factory to support a new family of products without modifying the existing client code (as long as the client code interacts through abstract interfaces).
*   **Abstraction of Product Creation:** Hides the complex creation logic of product families from the client.

---

### **7. Disadvantages**

*   **Difficult to Introduce New Product Types:** If you need to add a new type of product (e.g., a `Scrollbar` to our UI example), you'd have to modify all the existing Abstract Factory interfaces and all Concrete Factory implementations. This violates the Open/Closed Principle.
*   **Increased Complexity:** Can introduce a significant number of classes and interfaces, making the system more complex initially.

---

### **8. Example: Database Access**

Let's consider a system that needs to interact with different databases (e.g., SQL Server, MySQL). We can use Abstract Factory to create database-specific connection objects, command objects, and result sets.

**Product Families:**
*   SQL Server Family: `SqlServerConnection`, `SqlServerCommand`, `SqlServerResultSet`
*   MySQL Family: `MySqlConnection`, `MySqlCommand`, `MySqlResultSet`

**Abstract Factory:**
```java
// Abstract Products
interface Connection {
    void connect();
}
interface Command {
    void execute();
}
interface ResultSet {
    // ... methods for processing results
}

// Abstract Factory
interface DatabaseFactory {
    Connection createConnection();
    Command createCommand(String sql);
    ResultSet executeQuery(String sql); // Alternative: Factory creates command, client executes
}

// Concrete Products (SQL Server)
class SqlServerConnection implements Connection {
    @Override
    public void connect() {
        System.out.println("Connecting to SQL Server...");
    }
}
class SqlServerCommand implements Command {
    private String sql;
    public SqlServerCommand(String sql) { this.sql = sql; }
    @Override
    public void execute() {
        System.out.println("Executing SQL Server command: " + sql);
    }
}
// ... SqlServerResultSet

// Concrete Factory (SQL Server)
class SqlServerFactory implements DatabaseFactory {
    @Override
    public Connection createConnection() {
        return new SqlServerConnection();
    }
    @Override
    public Command createCommand(String sql) {
        return new SqlServerCommand(sql);
    }
    @Override
    public ResultSet executeQuery(String sql) {
        // For simplicity, let's assume this returns a placeholder
        System.out.println("Executing SQL Server query: " + sql);
        return null; // Placeholder
    }
}

// Concrete Products (MySQL)
class MySqlConnection implements Connection {
    @Override
    public void connect() {
        System.out.println("Connecting to MySQL...");
    }
}
class MySqlCommand implements Command {
    private String sql;
    public MySqlCommand(String sql) { this.sql = sql; }
    @Override
    public void execute() {
        System.out.println("Executing MySQL command: " + sql);
    }
}
// ... MySqlResultSet

// Concrete Factory (MySQL)
class MySQLFactory implements DatabaseFactory {
    @Override
    public Connection createConnection() {
        return new MySqlConnection();
    }
    @Override
    public Command createCommand(String sql) {
        return new MySqlCommand(sql);
    }
    @Override
    public ResultSet executeQuery(String sql) {
        System.out.println("Executing MySQL query: " + sql);
        return null; // Placeholder
    }
}

// Client Code
class DataAccessClient {
    private DatabaseFactory factory;
    private Connection connection;

    public DataAccessClient(DatabaseFactory factory) {
        this.factory = factory;
        this.connection = factory.createConnection();
    }

    public void performDatabaseOperation(String query) {
        connection.connect();
        Command command = factory.createCommand(query);
        command.execute();
        // Or using the executeQuery method on factory
        // factory.executeQuery(query);
    }

    public static void main(String[] args) {
        // Choose which factory to use (e.g., based on configuration)
        DatabaseFactory factory = new SqlServerFactory(); // Or new MySQLFactory();

        DataAccessClient client = new DataAccessClient(factory);
        client.performDatabaseOperation("SELECT * FROM Users");
    }
}
```

---

### **9. Relation to Other Design Patterns**

*   **Factory Method vs. Abstract Factory:**
    *   **Factory Method:** Deals with creating a **single** object. It defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    *   **Abstract Factory:** Deals with creating **families** of related objects. It provides an interface for creating families of related or dependent objects without specifying their concrete classes.
    *   An Abstract Factory often uses Factory Methods internally to create its products.

*   **Builder:** Similar in that it separates the construction of complex objects from their representation. However, Builder focuses on constructing an object step-by-step, while Abstract Factory focuses on creating families of related objects.

---

### **10. Practice Questions & Exercises**

**Question 1:**
What is the primary purpose of the Abstract Factory design pattern?
A. To create a single object.
B. To create families of related or dependent objects.
C. To define a new operation that can be added to an object structure.
D. To represent an operation to be performed on the elements of an object structure.

**Question 2:**
Which of the following are key participants in the Abstract Factory pattern?
A. Factory Method, Concrete Method, Product
B. Abstract Factory, Concrete Factory, Abstract Product, Concrete Product, Client
C. Factory, Product, Creator, Concrete Creator
D. Observer, Subject, Concrete Observer, Concrete Subject

**Question 3:**
Consider a system that needs to create different types of vehicles (Cars, Bikes) and for each type, different engines (Petrol, Electric). If you want to create a "Petrol Vehicle" family and an "Electric Vehicle" family, which pattern would be most suitable for managing the creation of these families?
A. Factory Method
B. Abstract Factory
C. Builder
D. Singleton

**Question 4:**
What is a significant disadvantage of the Abstract Factory pattern, particularly when it comes to adding new product types?
A. It makes the code harder to read.
B. It violates the Open/Closed Principle for adding new product types.
C. It requires the client to know about all concrete products.
D. It couples the client too tightly to concrete factories.

**Question 5:**
Imagine you are designing a game that supports different graphics renderers (e.g., OpenGL, DirectX). Each renderer needs to create specific textures, shaders, and models.
*   Define the abstract products (`Texture`, `Shader`, `Model`).
*   Define the abstract factory (`GraphicsFactory`) with methods to create these products.
*   Define concrete products for one renderer family (e.g., `OpenGLTexture`, `OpenGLShader`, `OpenGLModel`).
*   Define a concrete factory for that renderer family (`OpenGLFactory`).
*   Show how a client (e.g., `GameEngine`) would use the `OpenGLFactory` to create and use these graphics objects.

---

### **Answers to Practice Questions**

**Answer 1:**
B. To create families of related or dependent objects.

**Answer 2:**
B. Abstract Factory, Concrete Factory, Abstract Product, Concrete Product, Client

**Answer 3:**
B. Abstract Factory. This pattern is designed for creating families of related objects. Here, a "Petrol Vehicle" family and an "Electric Vehicle" family are distinct sets of related products.

**Answer 4:**
B. It violates the Open/Closed Principle for adding new product types. If you need to add a new type of product (e.g., a `Mesh` object), you would have to modify the `AbstractFactory` interface and all existing `ConcreteFactory` implementations, which is difficult to manage.

**Answer 5:**

**Abstract Products:**
```java
interface Texture {
    void load();
}
interface Shader {
    void compile();
}
interface Model {
    void render();
}
```

**Abstract Factory:**
```java
interface GraphicsFactory {
    Texture createTexture();
    Shader createShader();
    Model createModel();
}
```

**Concrete Products (OpenGL Family):**
```java
class OpenGLTexture implements Texture {
    @Override
    public void load() {
        System.out.println("Loading OpenGL Texture.");
    }
}

class OpenGLShader implements Shader {
    @Override
    public void compile() {
        System.out.println("Compiling OpenGL Shader.");
    }
}

class OpenGLModel implements Model {
    @Override
    public void render() {
        System.out.println("Rendering OpenGL Model.");
    }
}
```

**Concrete Factory (OpenGL Family):**
```java
class OpenGLFactory implements GraphicsFactory {
    @Override
    public Texture createTexture() {
        return new OpenGLTexture();
    }

    @Override
    public Shader createShader() {
        return new OpenGLShader();
    }

    @Override
    public Model createModel() {
        return new OpenGLModel();
    }
}
```

**Client (GameEngine):**
```java
class GameEngine {
    private GraphicsFactory factory;
    private Texture texture;
    private Shader shader;
    private Model model;

    public GameEngine(GraphicsFactory factory) {
        this.factory = factory;
        this.texture = factory.createTexture();
        this.shader = factory.createShader();
        this.model = factory.createModel();
    }

    public void initializeGraphics() {
        texture.load();
        shader.compile();
        model.render();
    }

    public static void main(String[] args) {
        // Choose the graphics factory
        GraphicsFactory graphicsFactory = new OpenGLFactory(); // Could be DirectXFactory() etc.

        GameEngine engine = new GameEngine(graphicsFactory);
        engine.initializeGraphics();
    }
}
```

---

### **Important Points to Remember**

*   Use Abstract Factory when you need to create a **set of related objects** and the specific implementations of these objects are unknown or should not be dictated by the client.
*   It enforces **consistency** among the products within a family.
*   The main challenge is adding **new types of products** across all families, as it requires modifying the abstract factory interface and all concrete factory implementations.
*   It's often used in conjunction with other creational patterns. For example, a concrete factory might use the Factory Method to create its products.

---
