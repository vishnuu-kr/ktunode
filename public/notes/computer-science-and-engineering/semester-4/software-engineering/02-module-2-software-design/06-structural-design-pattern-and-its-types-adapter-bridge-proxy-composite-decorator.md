---
title: "Structural Design Pattern and its types – Adapter, Bridge, Proxy, Composite, Decorator, Façade, Flyweight."
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b087"
status: "completed"
scrapedAt: "2026-05-20T16:16:47.142Z"
---
# SOFTWARE ENGINEERING - Module 2: Software Design - Structural Design Patterns

## Introduction to Structural Design Patterns

**Definition:** Structural design patterns deal with how classes and objects are composed to form larger structures. They focus on relationships between entities, simplifying designs by identifying a way to realize relationships between entities. These patterns help in building flexible, efficient, and maintainable software systems.

**Learning Outcomes:**

*   Understand the concept of structural design patterns.
*   Describe the purpose and application of each structural design pattern: Adapter, Bridge, Proxy, Composite, Decorator, Façade, Flyweight.
*   Identify scenarios where each pattern is most appropriate.
*   Implement basic examples of each pattern.
*   Evaluate the advantages and disadvantages of using each pattern.

## Key Concepts and Definitions

*   **Structural Design Patterns:** Concerned with how classes and objects are composed to form larger structures.
*   **Composition:** Combining objects into larger structures.
*   **Interface:**  A point of interaction between a component and its environment.
*   **Abstraction:** Hiding complex implementation details and exposing only necessary information.
*   **Decoupling:** Reducing dependencies between components.

## Structural Design Pattern Types

### 1. Adapter Pattern

*   **Purpose:** Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.  It acts as a translator between two incompatible interfaces.

*   **Key Concepts:**
    *   **Adaptee:** The class with the incompatible interface.
    *   **Target:** The interface that the client expects.
    *   **Adapter:**  The class that adapts the Adaptee to the Target interface.

*   **Implementation:**
    *   The Adapter class implements the Target interface.
    *   The Adapter class contains an instance of the Adaptee class.
    *   The Adapter's methods call the Adaptee's methods to perform the actual work, translating the calls to fit the Target interface.

*   **Example:** Imagine you have a `LegacyPrinter` class that prints using a specific format. You want to use it with a `ModernPrintService` that requires a different format.  An Adapter can convert the `LegacyPrinter` output to the format expected by `ModernPrintService`.

*   **Code Example (Python):**

    ```python
    # Target Interface
    class Target:
        def request(self):
            pass

    # Adaptee (Incompatible Interface)
    class Adaptee:
        def specific_request(self):
            return ".eetpadA eht morf tseuqeR"  # Backward string

    # Adapter
    class Adapter(Target):
        def __init__(self, adaptee):
            self.adaptee = adaptee

        def request(self):
            return self.adaptee.specific_request()[::-1] # Reverse the string


    # Client Code
    adaptee = Adaptee()
    adapter = Adapter(adaptee)
    print(adapter.request())  # Output: Request from the Adapter
    ```

*   **When to Use:**
    *   You want to use an existing class, but its interface is not compatible with the one you need.
    *   You want to create a reusable class that can cooperate with classes that don't have compatible interfaces.
    *   You need to use several existing subclasses, but it's impractical to adapt their interfaces by subclassing every one. An object adapter can adapt the interface of its parent class.

*   **Advantages:**
    *   Allows classes with incompatible interfaces to work together.
    *   Increases reusability of existing classes.

*   **Disadvantages:**
    *   The code is complicated when you need to adapt a lot of adapter classes.

### 2. Bridge Pattern

*   **Purpose:** Decouple an abstraction from its implementation so that the two can vary independently.  Allows you to change the implementation without affecting the client code.

*   **Key Concepts:**
    *   **Abstraction:** Defines the high-level control logic.
    *   **Implementor:** Defines the interface for the concrete implementation classes.
    *   **Refined Abstraction:** Extends the Abstraction and uses the Implementor.
    *   **Concrete Implementor:** Implements the Implementor interface.

*   **Implementation:**
    *   The Abstraction class holds a reference to an Implementor object.
    *   The Abstraction delegates implementation details to the Implementor.
    *   Client code interacts with the Abstraction, which in turn uses the Implementor.

*   **Example:** Consider a GUI system where you have different Shapes (Abstraction) like Circle and Square, and different Drawing APIs (Implementor) like Raster and Vector. The Bridge pattern allows you to combine any Shape with any Drawing API without creating a large class hierarchy.

*   **Code Example (Python):**

    ```python
    # Implementor Interface
    class DrawingAPI:
        def draw_circle(self, x, y, radius):
            pass

    # Concrete Implementor 1
    class DrawingAPI1(DrawingAPI):
        def draw_circle(self, x, y, radius):
            print(f"API1.circle at: {x}:{y} radius {radius}")

    # Concrete Implementor 2
    class DrawingAPI2(DrawingAPI):
        def draw_circle(self, x, y, radius):
            print(f"API2.circle at: {x}:{y} radius {radius}")


    # Abstraction
    class Shape:
        def __init__(self, drawing_api):
            self.drawing_api = drawing_api

        def draw(self):
            pass

        def resize(self, radius):
            pass

    # Refined Abstraction
    class Circle(Shape):
        def __init__(self, x, y, radius, drawing_api):
            super().__init__(drawing_api)
            self.x = x
            self.y = y
            self.radius = radius

        def draw(self):
            self.drawing_api.draw_circle(self.x, self.y, self.radius)

        def resize(self, radius):
            self.radius = radius

    # Client Code
    api1 = DrawingAPI1()
    api2 = DrawingAPI2()

    circle1 = Circle(1, 2, 3, api1)
    circle2 = Circle(5, 7, 11, api2)

    circle1.draw()  # Output: API1.circle at: 1:2 radius 3
    circle2.draw()  # Output: API2.circle at: 5:7 radius 11
    ```

*   **When to Use:**
    *   You want to avoid permanent binding between an abstraction and its implementation.
    *   Both the abstraction and the implementation should be extensible by sub-classing.
    *   Changes in the implementation of an abstraction should have no impact on clients.

*   **Advantages:**
    *   Decouples abstraction and implementation.
    *   Allows independent variation of abstraction and implementation.
    *   Improves extensibility.

*   **Disadvantages:**
    *   Increases complexity of the code due to additional layers of abstraction.

### 3. Proxy Pattern

*   **Purpose:** Provide a surrogate or placeholder for another object to control access to it. Controls access to the real object, allowing you to perform tasks before or after the request gets to the original object.

*   **Key Concepts:**
    *   **Subject:** Defines the common interface for both RealSubject and Proxy.
    *   **RealSubject:** The actual object that the proxy represents.
    *   **Proxy:**  Maintains a reference to the RealSubject and controls access to it.  Can add functionality before or after the request to the RealSubject.

*   **Implementation:**
    *   The Proxy class implements the same interface as the RealSubject.
    *   The Proxy class contains a reference to the RealSubject.
    *   When a client calls a method on the Proxy, the Proxy may perform some additional actions (e.g., security checks, lazy initialization) before or after forwarding the call to the RealSubject.

*   **Example:**  Imagine a system where you want to load a large image. You can use a Proxy to load the image only when it's actually needed (Lazy Loading).

*   **Code Example (Python):**

    ```python
    # Subject Interface
    class Image:
        def display(self):
            pass

    # Real Subject
    class RealImage(Image):
        def __init__(self, filename):
            self.filename = filename
            self.load_from_disk()

        def load_from_disk(self):
            print(f"Loading {self.filename}")

        def display(self):
            print(f"Displaying {self.filename}")

    # Proxy
    class ProxyImage(Image):
        def __init__(self, filename):
            self.filename = filename
            self.real_image = None

        def display(self):
            if self.real_image is None:
                self.real_image = RealImage(self.filename)
            self.real_image.display()

    # Client Code
    image1 = ProxyImage("image1.jpg")

    # Image is not loaded until display is called
    image1.display() # Output: Loading image1.jpg \n Displaying image1.jpg

    # Image is already loaded, so it's displayed directly
    image1.display() # Output: Displaying image1.jpg
    ```

*   **When to Use:**
    *   Lazy initialization: The real object is expensive to create and should only be created when needed.
    *   Access control:  You want to control access to the real object based on certain conditions.
    *   Remote access: You need to represent an object located in a different address space (e.g., a remote server).
    *   Logging requests: Log every request made to the real object.

*   **Advantages:**
    *   Controls access to the real object.
    *   Provides additional functionality before or after the request to the real object.
    *   Improves performance by delaying initialization.

*   **Disadvantages:**
    *   Increases complexity of the code due to the introduction of the proxy object.

### 4. Composite Pattern

*   **Purpose:** Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly. Treats individual objects and compositions of objects the same way.

*   **Key Concepts:**
    *   **Component:**  Declares the interface for all objects in the composition (both Leaf and Composite).
    *   **Leaf:** Represents individual objects.
    *   **Composite:** Represents a container that holds other Components (Leaf or Composite).  Implements the Component interface and provides methods for managing child components.

*   **Implementation:**
    *   The Component defines the common interface for all objects in the structure.
    *   The Leaf represents individual objects and implements the Component interface directly.
    *   The Composite stores a collection of child components and implements the Component interface by delegating calls to its children.

*   **Example:**  Consider a file system where you have files and directories. A directory can contain files and other directories. The Composite pattern allows you to treat files and directories uniformly.

*   **Code Example (Python):**

    ```python
    # Component Interface
    class Component:
        def __init__(self, name):
            self.name = name

        def display(self, indent=0):
            pass

    # Leaf
    class Leaf(Component):
        def display(self, indent=0):
            print("  " * indent + self.name)

    # Composite
    class Composite(Component):
        def __init__(self, name):
            super().__init__(name)
            self.children = []

        def add(self, component):
            self.children.append(component)

        def remove(self, component):
            self.children.remove(component)

        def display(self, indent=0):
            print("  " * indent + self.name)
            for child in self.children:
                child.display(indent + 1)

    # Client Code
    root = Composite("Root")
    leaf1 = Leaf("Leaf 1")
    leaf2 = Leaf("Leaf 2")
    comp1 = Composite("Composite 1")
    leaf3 = Leaf("Leaf 3")

    root.add(leaf1)
    root.add(comp1)
    root.add(leaf2)
    comp1.add(leaf3)

    root.display()
    # Output:
    # Root
    #   Leaf 1
    #   Composite 1
    #     Leaf 3
    #   Leaf 2
    ```

*   **When to Use:**
    *   You want to represent part-whole hierarchies of objects.
    *   You want clients to be able to ignore the difference between compositions of objects and individual objects.

*   **Advantages:**
    *   Defines class hierarchies that contain primitive objects and composite objects.
    *   Simplifies client code by treating individual objects and compositions uniformly.
    *   Makes it easier to add new types of components to the structure.

*   **Disadvantages:**
    *   Can make the design overly general, making it difficult to restrict the types of components that can be added to a composite.

### 5. Decorator Pattern

*   **Purpose:** Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.  Allows you to add responsibilities to objects dynamically without affecting other objects.

*   **Key Concepts:**
    *   **Component:** Defines the interface for objects that can have responsibilities added to them dynamically.
    *   **Concrete Component:** Defines the object to which responsibilities can be added.
    *   **Decorator:**  Maintains a reference to a Component object and defines an interface that conforms to the Component's interface.
    *   **Concrete Decorator:**  Adds responsibilities to the Component.

*   **Implementation:**
    *   The Component defines the interface for all objects.
    *   The Concrete Component implements the Component interface.
    *   The Decorator implements the Component interface and holds a reference to a Component object.
    *   The Concrete Decorator extends the Decorator class and adds its own functionality before or after calling the decorated Component's methods.

*   **Example:** Consider a `Coffee` object. You can add different "decorators" to it, such as `Milk`, `Sugar`, or `Chocolate`, each adding a specific cost and description to the coffee.

*   **Code Example (Python):**

    ```python
    # Component Interface
    class Coffee:
        def get_cost(self):
            pass

        def get_description(self):
            pass

    # Concrete Component
    class SimpleCoffee(Coffee):
        def get_cost(self):
            return 1.0

        def get_description(self):
            return "Simple coffee"

    # Decorator
    class CoffeeDecorator(Coffee):
        def __init__(self, coffee):
            self.coffee = coffee

        def get_cost(self):
            return self.coffee.get_cost()

        def get_description(self):
            return self.coffee.get_description()

    # Concrete Decorators
    class Milk(CoffeeDecorator):
        def get_cost(self):
            return self.coffee.get_cost() + 0.5

        def get_description(self):
            return self.coffee.get_description() + ", with milk"

    class Sugar(CoffeeDecorator):
        def get_cost(self):
            return self.coffee.get_cost() + 0.2

        def get_description(self):
            return self.coffee.get_description() + ", with sugar"

    # Client Code
    coffee = SimpleCoffee()
    print(f"{coffee.get_description()} costs ${coffee.get_cost()}") # Output: Simple coffee costs $1.0

    coffee = Milk(coffee)
    print(f"{coffee.get_description()} costs ${coffee.get_cost()}") # Output: Simple coffee, with milk costs $1.5

    coffee = Sugar(coffee)
    print(f"{coffee.get_description()} costs ${coffee.get_cost()}") # Output: Simple coffee, with milk, with sugar costs $1.7
    ```

*   **When to Use:**
    *   You want to add responsibilities to individual objects dynamically and transparently, that is, without affecting other objects.
    *   Responsibilities can be added and removed at runtime.
    *   When subclassing is impractical because of the number of possible combinations of responsibilities.

*   **Advantages:**
    *   Allows adding responsibilities dynamically.
    *   Avoids code duplication by reusing decorators.
    *   Supports the Open/Closed Principle (open for extension, closed for modification).

*   **Disadvantages:**
    *   Can result in many small classes (decorators).
    *   Can make debugging more difficult due to the layers of decoration.
    *   Decorators can become complex.

### 6. Façade Pattern

*   **Purpose:** Provide a unified interface to a set of interfaces in a subsystem. Façade defines a higher-level interface that makes the subsystem easier to use. Simplifies the interface of a complex system.

*   **Key Concepts:**
    *   **Façade:** Provides a simplified interface to the subsystem.
    *   **Subsystem Classes:** The classes that make up the subsystem.

*   **Implementation:**
    *   The Façade class contains references to the subsystem classes.
    *   The Façade provides simplified methods that delegate to the subsystem classes.
    *   The client interacts with the Façade instead of directly with the subsystem classes.

*   **Example:** Consider a video converter. It might involve many complex steps like reading the video, decoding, encoding, and writing the output. A Façade can simplify this process by providing a simple `convertVideo(filename, format)` method.

*   **Code Example (Python):**

    ```python
    # Subsystem Classes
    class Codec:
        pass

    class MPEG4Codec(Codec):
        pass

    class OggCodec(Codec):
        pass

    class VideoFile:
        def __init__(self, name):
            self.name = name

    class BitrateReader:
        def read(self, filename, codec):
            print(f"BitrateReader: Reading {filename} using {codec.__class__.__name__}")
            return VideoFile(filename)

    class VideoConverter:
        def convert(self, filename, format):
            print(f"VideoConverter: Converting {filename} to {format}")
            return "converted_video." + format

    # Facade
    class VideoConversionFacade:
        def convert_video(self, filename, format):
            print("VideoConversionFacade: Conversion started.")
            file = VideoFile(filename)
            codec = MPEG4Codec() if format == "mp4" else OggCodec()
            bitrate_reader = BitrateReader()
            video = bitrate_reader.read(filename, codec)
            converter = VideoConverter()
            result = converter.convert(filename, format)
            print("VideoConversionFacade: Conversion completed.")
            return result

    # Client Code
    facade = VideoConversionFacade()
    converted_file = facade.convert_video("my_video.avi", "mp4")
    print(f"Converted file: {converted_file}")
    # Output:
    # VideoConversionFacade: Conversion started.
    # BitrateReader: Reading my_video.avi using MPEG4Codec
    # VideoConverter: Converting my_video.avi to mp4
    # VideoConversionFacade: Conversion completed.
    # Converted file: converted_video.mp4
    ```

*   **When to Use:**
    *   You want to provide a simple interface to a complex subsystem.
    *   You want to reduce dependencies between clients and the subsystem.
    *   You want to layer your subsystems.

*   **Advantages:**
    *   Simplifies the interface to a complex system.
    *   Reduces dependencies between clients and the subsystem.
    *   Promotes loose coupling.

*   **Disadvantages:**
    *   The Facade class can become a "god object" if it handles too many responsibilities.

### 7. Flyweight Pattern

*   **Purpose:** Use sharing to support large numbers of fine-grained objects efficiently. Reduces memory usage and improves performance by sharing objects.

*   **Key Concepts:**
    *   **Flyweight:** Describes an interface through which clients can supply extraneous state that the Flyweight needs to act.
    *   **Concrete Flyweight:** Implements the Flyweight interface and stores intrinsic state.
    *   **Unshared Concrete Flyweight:**  Not all Flyweight objects need to be shared. The Flyweight interface enables sharing; it doesn't enforce it.
    *   **Flyweight Factory:**  Creates and manages Flyweight objects. It ensures that Flyweight objects are shared properly. When a client requests a Flyweight, the Flyweight Factory supplies an existing instance or creates one, if none exists.
    *   **Intrinsic State:** State that is shared among all Flyweight objects of the same type. It's stored in the Flyweight object.
    *   **Extrinsic State:** State that is specific to each client and is passed to the Flyweight object as a parameter. It's not stored in the Flyweight object.

*   **Implementation:**
    *   Separate intrinsic (shared) and extrinsic (client-specific) state.
    *   Create a Flyweight Factory to manage Flyweight objects.
    *   When a client needs a Flyweight object, the Flyweight Factory either returns an existing instance or creates a new one.
    *   The client provides the extrinsic state when calling methods on the Flyweight object.

*   **Example:**  Consider a text editor. Each character in the text can be represented by a Flyweight object. The intrinsic state is the character itself (e.g., 'A', 'B', 'C'). The extrinsic state is the font, size, and color, which can be different for each character in the document.

*   **Code Example (Python):**

    ```python
    # Flyweight Interface
    class Character:
        def __init__(self, character):
            self.character = character

        def display(self, font, size, color):
            print(f"Character: {self.character}, Font: {font}, Size: {size}, Color: {color}")

    # Flyweight Factory
    class CharacterFactory:
        _characters = {}

        @classmethod
        def get_character(cls, char):
            if char not in cls._characters:
                cls._characters[char] = Character(char)
            return cls._characters[char]

    # Client Code
    factory = CharacterFactory()

    char_a = factory.get_character("A")
    char_b = factory.get_character("B")
    char_a2 = factory.get_character("A") # Returns existing instance

    char_a.display("Arial", 12, "Black")   # Output: Character: A, Font: Arial, Size: 12, Color: Black
    char_b.display("Times New Roman", 14, "Red") # Output: Character: B, Font: Times New Roman, Size: 14, Color: Red
    char_a2.display("Courier New", 10, "Blue")   # Output: Character: A, Font: Courier New, Size: 10, Color: Blue

    print(f"Number of character objects: {len(CharacterFactory._characters)}") # Output: Number of character objects: 2
    ```

*   **When to Use:**
    *   An application uses a large number of objects.
    *   Storage costs are high because of the sheer quantity of objects.
    *   Most object state can be made extrinsic.
    *   Many "virtual" objects share intrinsic state.
    *   Object identity is not important. That is, two flyweight objects are considered equivalent if their intrinsic state is the same, regardless of their extrinsic state.

*   **Advantages:**
    *   Reduces memory usage by sharing objects.
    *   Improves performance by reducing the number of objects created and managed.

*   **Disadvantages:**
    *   Increases complexity due to the separation of intrinsic and extrinsic state.
    *   Requires careful management of shared objects to avoid unintended side effects.

## Practice Questions/Exercises

1.  **Scenario:**  You have a class `XMLData` that retrieves data from an XML file. You need to use this data with a class `JSONProcessor` that only accepts data in JSON format. Which structural pattern would be most suitable and why?
    *   **Answer:** Adapter. The `XMLData` class is the Adaptee, `JSONProcessor` expects a Target format (JSON), and the Adapter would convert the XML data to JSON.

2.  **Scenario:** You have a game engine that supports different rendering APIs (OpenGL, DirectX). You want to allow the game to switch between these rendering APIs without changing the game logic. Which structural pattern would be most suitable and why?
    *   **Answer:** Bridge.  The game logic is the Abstraction, and the rendering APIs are the Implementors.  The Bridge decouples the game logic from the specific rendering API, allowing them to vary independently.

3.  **Scenario:** You want to implement a system where users can only access certain parts of a database based on their roles. Which structural pattern would be most suitable and why?
    *   **Answer:** Proxy. The Proxy can control access to the database, checking the user's role before allowing access to specific data.

4.  **Scenario:** You are designing a UI library. You want to allow users to combine different UI elements (buttons, text fields, panels) into complex layouts. Which structural pattern would be most suitable and why?
    *   **Answer:** Composite.  The UI elements are the Components (Leaf or Composite), and the Composite pattern allows you to treat them uniformly, creating tree-like structures.

5.  **Scenario:** You have a `TextView` class. You want to add features like scrolling or border support to the `TextView` dynamically without creating many subclasses. Which structural pattern would be most suitable and why?
    *   **Answer:** Decorator.  You can use Decorators to add scrolling and border functionality to the `TextView` without modifying its core functionality or creating numerous subclasses for each combination of features.

6.  **Scenario:**  You are building a complex e-commerce system with many interacting subsystems (product catalog, shopping cart, payment gateway). You want to provide a simple interface for clients to interact with the system. Which structural pattern would be most suitable and why?
    *   **Answer:** Façade.  The Façade provides a simplified interface to the complex e-commerce system, hiding the underlying complexity from the clients.

7.  **Scenario:** You are developing a game with a large number of trees. You want to reduce memory usage by sharing the tree models (intrinsic state) and only storing the position and orientation for each tree instance (extrinsic state). Which structural pattern would be most suitable and why?
    *   **Answer:** Flyweight.  The tree model (shape, texture) is the intrinsic state, and the position and orientation are the extrinsic state. The Flyweight pattern allows you to share the tree model among many instances, reducing memory usage.

## Important Points to Remember

*   Structural design patterns focus on object composition and relationships.
*   Each pattern addresses a specific problem related to building flexible and maintainable structures.
*   Choosing the right pattern depends on the specific requirements of your application.
*   Understanding the key concepts and trade-offs of each pattern is crucial for effective design.
*   Structural design patterns help in decoupling and abstracting the relationships between objects, which results in more manageable and reusable code.
