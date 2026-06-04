---
title: "Software pattern -  Model View Controller, Creational Design Pattern types – Factory method, Abstract Factory method, Singleton method, Prototype method, Builder method."
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b086"
status: "completed"
scrapedAt: "2026-05-20T16:16:46.376Z"
---
## SOFTWARE ENGINEERING - Module 2: Software Design - Software Patterns

### Topic: Model View Controller (MVC) & Creational Design Patterns

**Learning Outcomes:**

*   Understand the Model-View-Controller (MVC) architectural pattern and its benefits.
*   Understand and apply the principles of creational design patterns.
*   Distinguish between different creational design patterns: Factory Method, Abstract Factory, Singleton, Prototype, and Builder.
*   Implement examples of each creational design pattern.
*   Recognize situations where specific creational patterns are most appropriate.

---

**1. Model-View-Controller (MVC) Pattern**

**1.1 Key Concepts and Definitions:**

*   **MVC:** An architectural pattern that separates an application into three interconnected parts: the Model, the View, and the Controller.  This separation aims to improve code organization, maintainability, and testability.

    *   **Model:** Represents the data and business logic of the application. It is responsible for managing data, enforcing business rules, and notifying observers (usually Views) of changes.  The model doesn't know about the View or Controller.

    *   **View:**  Presents the data to the user and allows them to interact with the application. It displays data retrieved from the Model.  It receives data updates from the Model.  The View shouldn't contain business logic or directly manipulate the Model.  It observes the model for changes.

    *   **Controller:** Acts as an intermediary between the View and the Model. It handles user input, updates the Model based on that input, and selects the appropriate View to display.  It receives input from the View, processes it, and instructs the Model to update or retrieve data.

**1.2 MVC Workflow:**

1.  **User Interaction:** The user interacts with the View.
2.  **Controller Action:** The View notifies the Controller of the user action.
3.  **Model Update:** The Controller updates the Model based on the user action.
4.  **Model Notification:** The Model notifies the View of the changes (often using an observer pattern).
5.  **View Update:** The View retrieves the updated data from the Model and updates the display.

**1.3 Benefits of MVC:**

*   **Separation of Concerns:**  Each component (Model, View, Controller) has a specific responsibility, making the code more organized and easier to understand.
*   **Improved Testability:**  Each component can be tested independently.
*   **Reusability:** Models and Views can be reused in different parts of the application or in different applications.
*   **Parallel Development:** Developers can work on the Model, View, and Controller simultaneously.
*   **Maintainability:** Changes to one component are less likely to affect other components.
*   **Flexibility:** Supports multiple views for the same data.

**1.4 Example (Conceptual):**

Imagine a simple online store application:

*   **Model:**  Represents products, shopping carts, and user data.  It handles adding products to the cart, calculating totals, and user authentication.
*   **View:** Displays a list of products, the user's shopping cart, and forms for user login/registration.
*   **Controller:** Handles user requests such as adding a product to the cart (updating the Model), displaying the shopping cart (retrieving data from the Model and passing it to the View), and processing user login (authenticating with the Model).

**1.5 Important Points to Remember:**

*   The View shouldn't directly modify the Model.
*   The Model shouldn't be aware of the View or Controller.
*   The Controller acts as the orchestrator, mediating between the View and the Model.

---

**2. Creational Design Patterns**

Creational design patterns deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. They provide flexibility and control over the instantiation process.

**2.1 Key Concepts and Definitions:**

*   **Creational Pattern:** A design pattern that deals with object creation mechanisms.  They abstract the instantiation process, allowing for more flexible and reusable code.

**2.2 Types of Creational Design Patterns:**

*   Factory Method
*   Abstract Factory
*   Singleton
*   Prototype
*   Builder

---

**3. Factory Method Pattern**

**3.1 Key Concepts and Definitions:**

*   **Factory Method:** Defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses. It promotes loose coupling by decoupling the client code from the concrete classes it uses.

**3.2 Structure:**

*   **Product:**  The interface or abstract class for the objects that the factory creates.
*   **ConcreteProduct:**  The concrete implementations of the Product interface.
*   **Creator:**  The abstract class or interface that declares the factory method.  It may also contain default implementations for object creation.
*   **ConcreteCreator:**  The concrete class that implements the factory method and returns a specific ConcreteProduct.

**3.3 Example (Java):**

```java
// Product interface
interface Animal {
    String makeSound();
}

// Concrete Products
class Dog implements Animal {
    @Override
    public String makeSound() {
        return "Woof!";
    }
}

class Cat implements Animal {
    @Override
    public String makeSound() {
        return "Meow!";
    }
}

// Creator interface
interface AnimalFactory {
    Animal createAnimal();
}

// Concrete Creators
class DogFactory implements AnimalFactory {
    @Override
    public Animal createAnimal() {
        return new Dog();
    }
}

class CatFactory implements AnimalFactory {
    @Override
    public Animal createAnimal() {
        return new Cat();
    }
}

// Client code
public class FactoryMethodExample {
    public static void main(String[] args) {
        AnimalFactory dogFactory = new DogFactory();
        Animal dog = dogFactory.createAnimal();
        System.out.println(dog.makeSound()); // Output: Woof!

        AnimalFactory catFactory = new CatFactory();
        Animal cat = catFactory.createAnimal();
        System.out.println(cat.makeSound()); // Output: Meow!
    }
}
```

**3.4 When to Use:**

*   When a class can't anticipate the class of objects it needs to create.
*   When a class wants its subclasses to specify the objects it creates.
*   When you want to localize knowledge of which concrete class gets instantiated.

**3.5 Important Points to Remember:**

*   The factory method is typically defined in an abstract class or interface.
*   Subclasses override the factory method to create specific types of objects.

---

**4. Abstract Factory Pattern**

**4.1 Key Concepts and Definitions:**

*   **Abstract Factory:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.  It allows you to create different "themes" or "styles" of objects by switching the factory used.

**4.2 Structure:**

*   **AbstractFactory:**  Declares an interface for operations that create abstract products.
*   **ConcreteFactory:**  Implements the operations to create concrete product objects.
*   **AbstractProduct:**  Declares an interface for a type of product object.
*   **ConcreteProduct:**  Defines a product object to be created by the corresponding concrete factory.
*   **Client:**  Uses the abstract factory and abstract products.

**4.3 Example (Conceptual):**

Imagine you need to create UI elements (buttons and text boxes) for different operating systems (Windows and macOS):

*   **AbstractFactory:** `GUIFactory` (defines methods like `createButton()` and `createTextBox()`)
*   **ConcreteFactory:** `WindowsFactory` and `MacOSFactory` (implement the `GUIFactory` interface, creating Windows-style and macOS-style buttons and text boxes respectively)
*   **AbstractProduct:** `Button` and `TextBox`
*   **ConcreteProduct:** `WindowsButton`, `MacOSButton`, `WindowsTextBox`, `MacOSTextBox`
*   **Client:** The application code that uses the `GUIFactory` to create the UI elements.

**4.4 When to Use:**

*   When a system needs to be independent of how its products are created, composed, and represented.
*   When a system needs to be configured with one of multiple families of products.
*   When a family of related product objects is designed to be used together, and you need to enforce this constraint.

**4.5 Important Points to Remember:**

*   Abstract Factory provides a level of abstraction above Factory Method.
*   It's useful for creating families of related objects.

---

**5. Singleton Pattern**

**5.1 Key Concepts and Definitions:**

*   **Singleton:**  Ensures that a class has only one instance and provides a global point of access to it. It restricts the instantiation of a class to one object.

**5.2 Implementation Techniques:**

*   **Eager Initialization:** The instance is created when the class is loaded.
*   **Lazy Initialization:** The instance is created only when it is first needed.
*   **Thread-Safe Singleton:**  Uses synchronization mechanisms to prevent multiple threads from creating multiple instances.

**5.3 Example (Java - Lazy Initialization, Thread-Safe):**

```java
public class Singleton {
    private static Singleton instance;

    private Singleton() {
        // Private constructor to prevent instantiation from outside
    }

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    // Other methods of the Singleton class
    public void doSomething() {
        System.out.println("Singleton is doing something!");
    }
}

// Client code
public class SingletonExample {
    public static void main(String[] args) {
        Singleton singleton = Singleton.getInstance();
        singleton.doSomething(); // Output: Singleton is doing something!
    }
}
```

**5.4 When to Use:**

*   When exactly one instance of a class is needed to control access to a shared resource.
*   When you need a global point of access to a single object.

**5.5 Important Points to Remember:**

*   The constructor should be private to prevent external instantiation.
*   A static method provides the global access point to the instance.
*   Thread safety is crucial in multi-threaded environments.  Double-checked locking is a common (but sometimes tricky) approach.  Using `enum` is a simpler, inherently thread-safe way to implement Singleton in Java.

---

**6. Prototype Pattern**

**6.1 Key Concepts and Definitions:**

*   **Prototype:** Specifies the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.  It avoids the need to know the exact class of the object to be created.

**6.2 Structure:**

*   **Prototype:**  Declares an interface for cloning itself.
*   **ConcretePrototype:**  Implements the interface to clone itself.  Each concrete prototype object contains a reference to another concrete prototype object that it uses to initialize the attributes of the new cloned object.
*   **Client:**  Creates new objects by cloning a prototype.

**6.3 Example (Java):**

```java
// Prototype interface
interface Shape extends Cloneable {
    Shape clone();
    void draw();
}

// Concrete Prototypes
class Circle implements Shape {
    private int radius;

    public Circle(int radius) {
        this.radius = radius;
    }

    @Override
    public Circle clone() {
        try {
            return (Circle) super.clone(); // Shallow copy
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }

    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius: " + radius);
    }
}

// Client code
public class PrototypeExample {
    public static void main(String[] args) {
        Circle circle1 = new Circle(10);
        Circle circle2 = circle1.clone(); // Create a copy

        circle1.draw(); // Output: Drawing a circle with radius: 10
        circle2.draw(); // Output: Drawing a circle with radius: 10

        // Modify circle2 (radius will still be 10, demonstrating cloning)
        // circle2.radius = 20; // Would require proper setter to modify the radius after cloning.

        // circle2.draw(); // Output: Drawing a circle with radius: 20 (if the setter was implemented)
    }
}
```

**6.4 When to Use:**

*   When the classes of objects to create are specified at run-time.
*   To avoid building a class hierarchy of factories that parallels the class hierarchy of products.
*   When instances of a class can have one of only a few different combinations of state.  It is often easier to install a number of prototypes and clone them rather than instantiating the class manually, each time with the appropriate state.

**6.5 Important Points to Remember:**

*   The `clone()` method creates a new object that is a copy of the original.  Be mindful of shallow vs. deep copies.
*   The Prototype pattern allows you to create new objects without knowing their concrete classes.
*   It is useful for creating objects with complex initialization.

---

**7. Builder Pattern**

**7.1 Key Concepts and Definitions:**

*   **Builder:** Separates the construction of a complex object from its representation so that the same construction process can create different representations.  It allows you to construct complex objects step by step.  It is useful when the object creation process involves many steps and parameters.

**7.2 Structure:**

*   **Builder:**  Specifies an abstract interface for creating parts of a Product object.
*   **ConcreteBuilder:**  Constructs and assembles parts of the product by implementing the Builder interface.  Defines and keeps track of the representation it creates.  Provides an interface for retrieving the product.
*   **Director:**  Constructs the object using the Builder interface. It controls the construction process and knows the order in which the steps should be performed.
*   **Product:**  Represents the complex object being constructed.

**7.3 Example (Java):**

```java
// Product class
class Computer {
    private String cpu;
    private String ram;
    private String storage;
    private String graphicsCard;

    // Private constructor to enforce building via the Builder
    private Computer(String cpu, String ram, String storage, String graphicsCard) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.graphicsCard = graphicsCard;
    }

    public String getCpu() {
        return cpu;
    }

    public String getRam() {
        return ram;
    }

    public String getStorage() {
        return storage;
    }

    public String getGraphicsCard() {
        return graphicsCard;
    }

    @Override
    public String toString() {
        return "Computer{" +
                "cpu='" + cpu + '\'' +
                ", ram='" + ram + '\'' +
                ", storage='" + storage + '\'' +
                ", graphicsCard='" + graphicsCard + '\'' +
                '}';
    }

    // Builder class
    public static class Builder {
        private String cpu;
        private String ram;
        private String storage;
        private String graphicsCard;

        public Builder cpu(String cpu) {
            this.cpu = cpu;
            return this;
        }

        public Builder ram(String ram) {
            this.ram = ram;
            return this;
        }

        public Builder storage(String storage) {
            this.storage = storage;
            return this;
        }

        public Builder graphicsCard(String graphicsCard) {
            this.graphicsCard = graphicsCard;
            return this;
        }

        public Computer build() {
            return new Computer(cpu, ram, storage, graphicsCard);
        }
    }
}

// Client Code
public class BuilderExample {
    public static void main(String[] args) {
        Computer computer = new Computer.Builder()
                .cpu("Intel i7")
                .ram("16GB")
                .storage("1TB SSD")
                .graphicsCard("Nvidia RTX 3080")
                .build();

        System.out.println(computer);
        // Output: Computer{cpu='Intel i7', ram='16GB', storage='1TB SSD', graphicsCard='Nvidia RTX 3080'}
    }
}
```

**7.4 When to Use:**

*   When the algorithm for creating a complex object should be independent of the parts that make up the object and how they are assembled.
*   When the construction process must allow different representations for the object that's constructed.
*   When you want to construct different representations for the object that's constructed.

**7.5 Important Points to Remember:**

*   The Builder pattern promotes immutability of the built object (by often having a private constructor in the Product).
*   It is useful for constructing complex objects with many optional parameters.
*   The Builder pattern separates the construction logic from the object's representation.

---

**Practice Questions/Exercises:**

1.  **Scenario:** You're building a game.  Players can choose different types of characters (Warrior, Mage, Archer). How would you use the Factory Method pattern to create these character objects?  Provide a simple code sketch (Java, Python, or similar) demonstrating the pattern.

    **Answer:**

    ```java
    interface Character {
        String getType();
    }

    class Warrior implements Character {
        @Override
        public String getType() { return "Warrior"; }
    }

    class Mage implements Character {
        @Override
        public String getType() { return "Mage"; }
    }

    interface CharacterFactory {
        Character createCharacter();
    }

    class WarriorFactory implements CharacterFactory {
        @Override
        public Character createCharacter() { return new Warrior(); }
    }

    class MageFactory implements CharacterFactory {
        @Override
        public Character createCharacter() { return new Mage(); }
    }

    public class Game {
        public static void main(String[] args) {
            CharacterFactory warriorFactory = new WarriorFactory();
            Character warrior = warriorFactory.createCharacter();
            System.out.println("Created character: " + warrior.getType()); // Output: Created character: Warrior
        }
    }
    ```

2.  **Explain the difference between the Factory Method and Abstract Factory patterns.  Give a scenario where you would use Abstract Factory instead of Factory Method.**

    **Answer:**

    *   **Factory Method:** Creates objects of *one* related type.  Subclasses decide which class to instantiate.
    *   **Abstract Factory:** Creates *families* of related objects.  It provides an interface for creating multiple related objects without specifying their concrete classes.

    **Scenario:**  You're creating a UI framework that supports multiple themes (e.g., light theme, dark theme).  Each theme requires different styles of buttons, text boxes, and other UI elements.  Abstract Factory is ideal because it allows you to create a `LightThemeFactory` and a `DarkThemeFactory`, each of which creates the correct "family" of UI elements for that theme.

3.  **Why is the constructor of a Singleton class typically made private?**

    **Answer:** To prevent external instantiation of the class, ensuring that only the Singleton class itself can create instances, thereby enforcing the single instance constraint.

4.  **What is the main benefit of using the Prototype pattern?**

    **Answer:**  Avoids the need to create objects from scratch, especially when creating complex objects with many properties, and it allows creating new objects without knowing the exact concrete class.

5.  **Describe a scenario where the Builder pattern would be more appropriate than directly creating an object with a long constructor.**

    **Answer:** When an object has many optional parameters, leading to a constructor with a very long parameter list. The Builder pattern provides a more readable and maintainable way to construct the object step by step, specifying only the necessary parameters.  It also promotes immutability.

---

These notes provide a comprehensive overview of the MVC pattern and creational design patterns (Factory Method, Abstract Factory, Singleton, Prototype, and Builder).  Understanding these patterns will help you write more flexible, maintainable, and reusable software. Remember to practice implementing these patterns to solidify your understanding. Good luck!
