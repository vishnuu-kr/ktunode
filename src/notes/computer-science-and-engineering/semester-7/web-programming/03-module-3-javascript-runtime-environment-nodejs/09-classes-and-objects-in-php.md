---
title: "Classes and Objects in PHP"
subject: "WEB PROGRAMMING"
module: "Module 3: JavaScript runtime environment : Node.js "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0e1"
status: "completed"
scrapedAt: "2026-05-20T17:13:09.094Z"
---
It seems there might be a slight misunderstanding in the prompt. The topic requested is "Classes and Objects in PHP," but it's placed within a module titled "JavaScript runtime environment: Node.js" for a "WEB PROGRAMMING" subject.

**Classes and Objects in PHP are fundamental concepts of the PHP language itself, not directly related to the Node.js runtime environment.** Node.js is a JavaScript runtime, and while JavaScript also has classes and objects, they are distinct from PHP's implementation.

Therefore, these study notes will focus on **Classes and Objects in PHP**, as that is the explicit topic requested. I will address the concepts as they apply to PHP.

---

# WEB PROGRAMMING: Module 3: JavaScript runtime environment : Node.js

## Topic: Classes and Objects in PHP

**Note:** While this topic is listed under a Node.js module, the following notes pertain to **Classes and Objects as implemented in the PHP programming language.** Node.js is a JavaScript runtime and does not directly execute PHP code. Understanding object-oriented programming (OOP) in PHP is crucial for backend web development with PHP.

---

### **Learning Outcomes:**

By the end of this topic, you should be able to:

*   Understand the core concepts of Object-Oriented Programming (OOP).
*   Define classes and create objects from them in PHP.
*   Understand and apply the concepts of properties and methods within classes.
*   Utilize constructors and destructors for object initialization and cleanup.
*   Explain and use access modifiers (public, private, protected).
*   Understand and apply the concept of inheritance for code reusability.
*   Differentiate between static properties and methods and their usage.
*   Understand the concept of abstract classes and methods.
*   Understand the concept of interfaces and their implementation.
*   Differentiate between final classes and methods and their purpose.
*   Understand the concept of object cloning.
*   Understand the concept of type hinting for parameters and return values.
*   Understand the concept of namespaces for code organization.

---

## 1. Introduction to Object-Oriented Programming (OOP) in PHP

Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around **data**, or **objects**, rather than functions and logic. In OOP, objects are instances of classes.

**Key Concepts:**

*   **Class:** A blueprint or a template for creating objects. It defines the properties (data) and methods (behaviors) that all objects of that class will have.
*   **Object:** An instance of a class. It has its own unique state (values of its properties) and can perform actions (execute its methods).
*   **Encapsulation:** Bundling data (properties) and the methods that operate on that data within a single unit (the class). It helps in data hiding and controlling access.
*   **Abstraction:** Hiding complex implementation details and showing only the essential features of an object.
*   **Inheritance:** A mechanism that allows a new class (child class or subclass) to inherit properties and methods from an existing class (parent class or superclass). This promotes code reusability.
*   **Polymorphism:** The ability of an object to take on many forms. In PHP, this often refers to methods in different classes that have the same name but behave differently.

---

## 2. Defining Classes and Creating Objects in PHP

A class is defined using the `class` keyword, followed by the class name.

### 2.1. Defining a Class

```php
<?php

class Car {
    // Properties and methods will go here
}

?>
```

### 2.2. Properties (Member Variables)

Properties represent the data or attributes of an object. They are defined within the class using variable declarations.

```php
<?php

class Car {
    public $color; // public property
    public $model;
}

?>
```

### 2.3. Methods (Member Functions)

Methods represent the behavior or actions an object can perform. They are defined as functions within the class.

```php
<?php

class Car {
    public $color;
    public $model;

    // A method
    public function displayInfo() {
        echo "This is a " . $this->color . " " . $this->model . ".";
    }
}

?>
```

*   **`$this` keyword:** Inside a class method, `$this` refers to the current object instance. It's used to access the object's properties and methods.

### 2.4. Creating Objects (Instantiating a Class)

You create an object from a class using the `new` keyword.

```php
<?php

class Car {
    public $color;
    public $model;

    public function displayInfo() {
        echo "This is a " . $this->color . " " . $this->model . ".";
    }
}

// Create an object of the Car class
$myCar = new Car();

// Set properties
$myCar->color = "red";
$myCar->model = "Toyota Camry";

// Call a method
$myCar->displayInfo(); // Output: This is a red Toyota Camry.

?>
```

---

## 3. Constructors and Destructors

### 3.1. Constructors (`__construct()`)

A constructor is a special method that is automatically called when an object of a class is created. It's typically used to initialize the object's properties.

```php
<?php

class Car {
    public $color;
    public $model;

    // Constructor
    public function __construct($color, $model) {
        $this->color = $color;
        $this->model = $model;
        echo "A new car has been created!<br>";
    }

    public function displayInfo() {
        echo "This is a " . $this->color . " " . $this->model . ".<br>";
    }
}

// Create an object with constructor arguments
$myCar = new Car("blue", "Honda Civic"); // Output: A new car has been created!
$myCar->displayInfo(); // Output: This is a blue Honda Civic.

?>
```

### 3.2. Destructors (`__destruct()`)

A destructor is a special method that is automatically called when an object is about to be destroyed (e.g., when the script ends or the object goes out of scope). It's used for cleanup operations.

```php
<?php

class Car {
    public $model;

    public function __construct($model) {
        $this->model = $model;
        echo "Car {$this->model} is created.<br>";
    }

    // Destructor
    public function __destruct() {
        echo "Car {$this->model} is destroyed.<br>";
    }
}

$myCar = new Car("Ford Mustang"); // Output: Car Ford Mustang is created.
// $myCar will be destroyed when the script ends or goes out of scope.

?>
```
**Output when script ends:**
```
Car Ford Mustang is created.
Car Ford Mustang is destroyed.
```

---

## 4. Access Modifiers

Access modifiers control the visibility or accessibility of class properties and methods from outside the class.

*   **`public`:** Properties and methods declared as `public` are accessible from anywhere – inside the class, from subclasses, and from outside the class. This is the default if no modifier is specified.
*   **`private`:** Properties and methods declared as `private` are accessible only from within the class itself. They cannot be accessed from subclasses or from outside the class.
*   **`protected`:** Properties and methods declared as `protected` are accessible from within the class itself and from its subclasses. They cannot be accessed from outside the class.

```php
<?php

class Vehicle {
    public $brand = "Unknown"; // Public property
    private $engineSize = "1.5L"; // Private property
    protected $weight = "1000kg"; // Protected property

    public function startEngine() {
        echo "Starting the engine...<br>";
    }

    private function checkFuel() {
        echo "Checking fuel level...<br>";
    }

    protected function performMaintenance() {
        echo "Performing routine maintenance...<br>";
    }

    // Method to access private property
    public function getEngineSize() {
        return $this->engineSize;
    }
}

class Car extends Vehicle {
    public function drive() {
        echo "Driving the car...<br>";
        $this->startEngine(); // Accessible (public)
        echo "Engine Size: " . $this->getEngineSize() . "<br>"; // Accessible via public getter
        // echo $this->engineSize; // Error: Cannot access private property
        echo "Weight: " . $this->weight . "<br>"; // Accessible (protected)
        $this->performMaintenance(); // Accessible (protected)
    }
}

$myVehicle = new Vehicle();
echo "Brand: " . $myVehicle->brand . "<br>"; // Accessible (public)
// echo $myVehicle->engineSize; // Error: Cannot access private property
// echo $myVehicle->weight; // Error: Cannot access protected property
$myVehicle->startEngine(); // Accessible (public)
// $myVehicle->checkFuel(); // Error: Cannot access private method
// $myVehicle->performMaintenance(); // Error: Cannot access protected method

echo "<hr>";

$myCar = new Car();
$myCar->drive();
// Output:
// Brand: Unknown
// Starting the engine...
// ---
// Driving the car...
// Starting the engine...
// Engine Size: 1.5L
// Weight: 1000kg
// Performing routine maintenance...

?>
```

---

## 5. Inheritance

Inheritance allows you to define a new class based on an existing class, inheriting its properties and methods. This promotes the DRY (Don't Repeat Yourself) principle.

*   **`extends` keyword:** Used to inherit from a parent class.
*   **`parent::` keyword:** Used to call methods or access properties of the parent class from within the child class.

```php
<?php

class Animal {
    public $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function eat() {
        echo $this->name . " is eating.<br>";
    }

    public function makeSound() {
        echo "Some generic animal sound.<br>";
    }
}

// Dog class inherits from Animal class
class Dog extends Animal {
    public function makeSound() {
        // Override the parent's method
        echo $this->name . " barks: Woof! Woof!<br>";
    }

    public function fetch() {
        echo $this->name . " is fetching the ball.<br>";
    }

    public function displayDetails() {
        echo "Dog Name: " . $this->name . "<br>";
        $this->eat(); // Call parent's method
        $this->makeSound(); // Call overridden method
        $this->fetch();
    }
}

$dog = new Dog("Buddy");
$dog->displayDetails();
// Output:
// Dog Name: Buddy
// Buddy is eating.
// Buddy barks: Woof! Woof!
// Buddy is fetching the ball.

$genericAnimal = new Animal("Leo");
$genericAnimal->makeSound(); // Output: Some generic animal sound.

?>
```

---

## 6. Static Properties and Methods

Static properties and methods belong to the class itself, not to any specific object instance. They are accessed using the class name and the scope resolution operator (`::`).

*   **`static` keyword:** Used to declare static properties and methods.
*   **`self::` keyword:** Used to access static properties and methods from within the class.

```php
<?php

class Counter {
    // Static property to count the number of objects created
    public static $count = 0;

    public function __construct() {
        self::$count++; // Increment the static count
        echo "Counter created. Total objects: " . self::$count . "<br>";
    }

    // Static method
    public static function getCount() {
        return self::$count;
    }
}

$c1 = new Counter(); // Output: Counter created. Total objects: 1
$c2 = new Counter(); // Output: Counter created. Total objects: 2
$c3 = new Counter(); // Output: Counter created. Total objects: 3

// Access static property directly from the class
echo "Final object count: " . Counter::$count . "<br>"; // Output: Final object count: 3

// Call static method directly from the class
echo "Current object count: " . Counter::getCount() . "<br>"; // Output: Current object count: 3

// Cannot access static properties/methods using $this or object instance
// echo $this->count; // Error
// $c1->getCount(); // Error: Static method Counter::getCount() should not be called statically
?>
```

---

## 7. Abstract Classes and Methods

*   **Abstract Class:** A class that cannot be instantiated directly. It is intended to be a base class for other classes. It can contain both abstract methods and concrete methods.
*   **Abstract Method:** A method declared with the `abstract` keyword. It has no implementation (no body) and must be implemented by any concrete subclass.

```php
<?php

// Define an abstract class
abstract class Shape {
    protected $name;

    // Abstract method (must be implemented by subclasses)
    abstract public function calculateArea();

    // Concrete method
    public function displayInfo() {
        echo "This is a " . $this->name . ".<br>";
    }
}

// Concrete class inheriting from Shape
class Circle extends Shape {
    private $radius;

    public function __construct($radius) {
        $this->name = "Circle";
        $this->radius = $radius;
    }

    // Implement the abstract method
    public function calculateArea() {
        return M_PI * $this->radius * $this->radius;
    }
}

class Rectangle extends Shape {
    private $width;
    private $height;

    public function __construct($width, $height) {
        $this->name = "Rectangle";
        $this->width = $width;
        $this->height = $height;
    }

    // Implement the abstract method
    public function calculateArea() {
        return $this->width * $this->height;
    }
}

// Cannot instantiate an abstract class:
// $shape = new Shape(); // Error: Cannot instantiate abstract class Shape

$circle = new Circle(5);
$circle->displayInfo(); // Output: This is a Circle.
echo "Circle Area: " . $circle->calculateArea() . "<br>"; // Output: Circle Area: 78.539816339745

$rectangle = new Rectangle(4, 6);
$rectangle->displayInfo(); // Output: This is a Rectangle.
echo "Rectangle Area: " . $rectangle->calculateArea() . "<br>"; // Output: Rectangle Area: 24

?>
```

---

## 8. Interfaces

An interface is a contract that defines a set of methods that a class must implement. It's similar to an abstract class but can only contain method signatures (no properties or method bodies).

*   **`interface` keyword:** Used to define an interface.
*   **`implements` keyword:** Used by a class to implement an interface.

```php
<?php

// Define an interface
interface Logger {
    public function log($message);
}

// Class implementing the Logger interface
class FileLogger implements Logger {
    private $logFile;

    public function __construct($logFile) {
        $this->logFile = $logFile;
    }

    // Implement the log method
    public function log($message) {
        $timestamp = date('Y-m-d H:i:s');
        file_put_contents($this->logFile, "[$timestamp] $message\n", FILE_APPEND);
    }
}

// Another class implementing the Logger interface
class DatabaseLogger implements Logger {
    public function log($message) {
        echo "Logging to database: " . $message . "<br>";
        // In a real scenario, you would connect to a DB and insert the message
    }
}

function processData(Logger $logger, $data) {
    // ... process data ...
    $logger->log("Processed data: " . $data);
}

$fileLogger = new FileLogger('app.log');
processData($fileLogger, "User logged in"); // Writes to app.log

$dbLogger = new DatabaseLogger();
processData($dbLogger, "Data saved successfully");
// Output: Logging to database: Processed data: Data saved successfully

?>
```

**Important Point:** A class can implement multiple interfaces, but it can only extend one parent class.

---

## 9. Final Classes and Methods

*   **`final` class:** A class declared as `final` cannot be inherited from.
*   **`final` method:** A method declared as `final` cannot be overridden by subclasses.

```php
<?php

// Final class cannot be extended
final class Config {
    const DATABASE_HOST = 'localhost';
    const DATABASE_USER = 'root';
}

// Cannot inherit from Config:
// class AppConfig extends Config {} // Error

class BaseService {
    // This method can be overridden
    public function doSomething() {
        echo "Base service doing something.<br>";
    }

    // This method cannot be overridden
    final public function setup() {
        echo "Base service setup is complete.<br>";
    }
}

class ExtendedService extends BaseService {
    // Cannot override the final method
    // public function setup() { ... } // Error

    public function doSomething() {
        echo "Extended service doing something differently.<br>";
    }

    public function performExtendedAction() {
        $this->setup(); // Can call the parent's final method
        $this->doSomething(); // Calls its own doSomething
    }
}

$base = new BaseService();
$base->setup(); // Output: Base service setup is complete.
$base->doSomething(); // Output: Base service doing something.

$extended = new ExtendedService();
$extended->performExtendedAction();
// Output:
// Base service setup is complete.
// Extended service doing something differently.

?>
```

---

## 10. Object Cloning

Object cloning creates a new object that is a copy of an existing object.

*   **`clone` keyword:** Used to create a clone of an object.
*   **`__clone()` method:** A magic method that can be defined in a class to control how the object is cloned. It's called after the cloning process.

```php
<?php

class Prototype {
    public $name;
    public $settings = [];

    public function __clone() {
        // When cloning, we also want to ensure that the settings array
        // is a new copy, not just a reference to the original.
        $this->settings = $this->settings;
    }
}

$original = new Prototype();
$original->name = "Original Object";
$original->settings = ['theme' => 'dark', 'language' => 'en'];

// Clone the object
$cloned = clone $original;

// Modify the cloned object
$cloned->name = "Cloned Object";
$cloned->settings['theme'] = 'light';

echo "Original Name: " . $original->name . "<br>"; // Output: Original Name: Original Object
echo "Original Theme: " . $original->settings['theme'] . "<br>"; // Output: Original Theme: dark

echo "Cloned Name: " . $cloned->name . "<br>"; // Output: Cloned Name: Cloned Object
echo "Cloned Theme: " . $cloned->settings['theme'] . "<br>"; // Output: Cloned Theme: light

?>
```
**Important Note on Cloning:**
*   By default, cloning a PHP object creates a shallow copy. This means that for properties that are objects themselves, the cloned object will contain a reference to the *same* object as the original.
*   To create a deep copy (where nested objects are also copied), you need to implement the `__clone()` magic method and manually clone those nested objects.

---

## 11. Type Hinting

Type hinting allows you to specify the expected data type for function parameters and return values. This improves code readability and helps catch errors early.

*   **Parameter Type Hints:** Can be scalar types (string, int, float, bool), array, object, or a specific class name.
*   **Return Type Hints:** Specified after the parameter list using `: type`.

```php
<?php

// Parameter type hint for an integer
function add(int $a, int $b): int {
    return $a + $b;
}

// Parameter type hint for a string
function greet(string $name) {
    echo "Hello, " . $name . "!<br>";
}

// Parameter type hint for a specific class
class User {}
function processUser(User $user) {
    echo "Processing user object.<br>";
}

// Return type hint for a string
function getMessage(): string {
    return "This is a message.";
}

echo add(5, 3); // Output: 8
greet("Alice"); // Output: Hello, Alice!

$user = new User();
processUser($user); // Output: Processing user object.

echo getMessage(); // Output: This is a message.

// Type juggling or errors will occur if wrong types are passed
// echo add("5", 3); // PHP will try to convert "5" to int, resulting in 8
// greet(123); // PHP will try to convert 123 to string, resulting in "Hello, 123!"

?>
```

---

## 12. Namespaces

Namespaces provide a way to organize code and prevent naming conflicts, especially in larger projects or when using third-party libraries.

*   **`namespace` keyword:** Declares a namespace.
*   **`use` keyword:** Imports classes, functions, or constants from other namespaces.

```php
<?php

// Define a namespace for our classes
namespace App\Models;

class User {
    public function getName() {
        return "App User";
    }
}

namespace App\Controllers;

// Import the User class from the App\Models namespace
use App\Models\User;

class UserController {
    public function index() {
        $user = new User(); // Instantiate User from App\Models
        echo "Controller is showing user: " . $user->getName() . "<br>";
    }
}

// To run this, you'd typically have it in separate files and use autoloading.
// For demonstration, let's simulate it:

// Simulate the Model file
namespace App\Models;
class User {
    public function getName() {
        return "App User";
    }
}

// Simulate the Controller file
namespace App\Controllers;
use App\Models\User; // Import User from App\Models

$userController = new UserController();
$userController->index();
// Output: Controller is showing user: App User

// Another example:
namespace MyProject\Utils;
class Helper {
    public static function formatCurrency($amount) {
        return "$" . number_format($amount, 2);
    }
}

namespace MyProject\Billing;
use MyProject\Utils\Helper; // Import Helper

class Invoice {
    public function displayTotal($total) {
        echo "Invoice Total: " . Helper::formatCurrency($total) . "<br>";
    }
}

$invoice = new Invoice();
$invoice->displayTotal(150.75);
// Output: Invoice Total: $150.75

?>
```

---

## Practice Questions and Exercises

1.  **Concept Check:**
    *   What is the primary purpose of a class in PHP?
    *   What is the difference between a class and an object?
    *   Explain encapsulation in your own words.
    *   What does the `static` keyword do for properties and methods?
    *   When would you use an abstract class versus an interface?

2.  **Code Practice:**
    *   Create a class named `Book` with properties `title`, `author`, and `pages`.
    *   Add a constructor to the `Book` class that accepts these properties.
    *   Add a method `displayBookInfo()` that prints the book's title, author, and number of pages.
    *   Create an object of the `Book` class and call its `displayBookInfo()` method.

    *   Create a `Counter` class with a static property `count`.
    *   Increment `count` in the constructor.
    *   Create a static method `getCount()` to return the current value of `count`.
    *   Instantiate the `Counter` class three times and then display the total count using `Counter::getCount()`.

    *   Create a `Vehicle` class with a `public` method `start()` and a `private` method `checkEngine()`.
    *   Create a `Car` class that extends `Vehicle`.
    *   In `Car`, override `start()` to call `checkEngine()` and then print "Car started."
    *   Try to call `checkEngine()` directly from a `Car` object and explain the result.

3.  **Conceptual Application:**
    *   Imagine you are building a system for an online store. What are some classes you might create (e.g., `Product`, `Customer`, `Order`)?
    *   For the `Product` class, what properties and methods would you include?
    *   How could inheritance be useful in this online store system (e.g., `PhysicalProduct` vs. `DigitalProduct` inheriting from `Product`)?

---

## Answers to Practice Questions

1.  **Concept Check Answers:**
    *   **Purpose of a class:** A class serves as a blueprint or template for creating objects. It defines the structure (properties) and behavior (methods) that objects of that type will possess.
    *   **Class vs. Object:** A **class** is the definition or blueprint. An **object** is an instance created from that blueprint, with its own specific data.
    *   **Encapsulation:** Bundling data (properties) and the methods that operate on that data within a single unit (the class), often controlling access to the data using access modifiers to protect it from unintended modifications.
    *   **`static` keyword:** It makes properties and methods belong to the class itself, not to individual object instances. They can be accessed directly via the class name (`ClassName::propertyName` or `ClassName::methodName()`) without creating an object.
    *   **Abstract Class vs. Interface:**
        *   **Abstract Class:** Can have both abstract (no implementation) and concrete (with implementation) methods, and can also have properties. It's used when you want to share common method implementations or properties among a group of related classes. A class can extend only one abstract class.
        *   **Interface:** Defines a contract of methods that a class *must* implement. It cannot have properties or method bodies. It's used to enforce a certain structure and behavior across unrelated classes, allowing for polymorphism. A class can implement multiple interfaces.

2.  **Code Practice Answers:**

    **Book Class:**
    ```php
    <?php
    class Book {
        public $title;
        public $author;
        public $pages;

        public function __construct($title, $author, $pages) {
            $this->title = $title;
            $this->author = $author;
            $this->pages = $pages;
        }

        public function displayBookInfo() {
            echo "Title: " . $this->title . "<br>";
            echo "Author: " . $this->author . "<br>";
            echo "Pages: " . $this->pages . "<br>";
        }
    }

    $myBook = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178);
    $myBook->displayBookInfo();
    ?>
    ```

    **Counter Class:**
    ```php
    <?php
    class Counter {
        public static $count = 0;

        public function __construct() {
            self::$count++;
        }

        public static function getCount() {
            return self::$count;
        }
    }

    $c1 = new Counter();
    $c2 = new Counter();
    $c3 = new Counter();

    echo "Total count: " . Counter::getCount() . "<br>"; // Output: Total count: 3
    ?>
    ```

    **Vehicle and Car Class:**
    ```php
    <?php
    class Vehicle {
        public function start() {
            echo "Vehicle starting...<br>";
        }

        private function checkEngine() {
            echo "Checking vehicle engine.<br>";
        }

        // Public method to allow access to private method (optional, for demonstration)
        public function startVehicleWithCheck() {
            $this->checkEngine();
            $this->start();
        }
    }

    class Car extends Vehicle {
        public function start() {
            // Calling the private method from the parent is not directly possible here
            // We would need a public/protected method in Vehicle to expose checkEngine
            // For demonstration, let's assume we add a public method in Vehicle:
            $this->startVehicleWithCheck(); // Calls the public wrapper
            echo "Car started.<br>";
        }
    }

    $myCar = new Car();
    $myCar->start();
    /*
    Output:
    Checking vehicle engine.
    Vehicle starting...
    Car started.
    */

    // Attempting to call checkEngine directly from Car object:
    // $myCar->checkEngine(); // Fatal error: Uncaught Error: Call to private method Vehicle::checkEngine() from context 'Car'
    ?>
    ```

3.  **Conceptual Application Answers:**
    *   **Classes:** `Product`, `Customer`, `Order`, `ShoppingCart`, `Payment`, `Category`, `Review`.
    *   **`Product` Class Properties & Methods:**
        *   **Properties:** `id`, `name`, `description`, `price`, `stockQuantity`, `imageUrl`, `categoryId`.
        *   **Methods:** `getProductDetails()`, `updateStock(int $quantity)`, `getPrice()`, `isAvailable()`.
    *   **Inheritance:**
        *   `PhysicalProduct` could inherit from `Product` and add properties like `weight`, `dimensions`, `shippingCost`.
        *   `DigitalProduct` could inherit from `Product` and add properties like `downloadLink`, `fileSize`.
        *   This allows common properties and methods to be defined once in `Product`, and specialized properties and methods to be added in the subclasses, promoting code reuse and a clear hierarchy.

---

## Important Points to Remember:

*   **`$this` vs. `self::`:** Use `$this` to refer to the current object instance and `self::` to refer to static members (properties or methods) within the same class.
*   **Access Modifiers:** Understand the difference between `public`, `private`, and `protected` to manage data visibility and control how your classes are used.
*   **Constructors (`__construct`)** are essential for initializing objects when they are created.
*   **Destructors (`__destruct`)** are useful for cleanup tasks before an object is destroyed.
*   **Inheritance (`extends`)** is key for code reusability and building class hierarchies.
*   **`final`** prevents extension or overriding, useful for ensuring certain behaviors remain consistent.
*   **Abstract Classes and Interfaces** provide frameworks for code design, enforcing contracts and promoting polymorphism.
*   **Type Hinting** enhances code reliability and readability by specifying expected data types.
*   **Namespaces** are crucial for organizing large projects and preventing naming collisions.
*   **Shallow vs. Deep Copy:** Be aware of how `clone` works by default (shallow copy) and when you need `__clone()` for deep copying.
