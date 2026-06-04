---
title: "Algebraic Types"
subject: "FUNCTIONAL PROGRAMMING"
module: "Module 4: Algebraic Types"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b0e4"
status: "completed"
scrapedAt: "2026-05-20T16:13:14.803Z"
---
# Functional Programming: Module 4 - Algebraic Types: Algebraic Types

## Introduction

This module delves into Algebraic Data Types (ADTs), a fundamental concept in functional programming. ADTs provide a powerful way to model data by combining simpler types in various ways. This leads to code that is safer, more expressive, and easier to reason about.

## Learning Outcomes

By the end of this topic, you should be able to:

*   **Define** what an Algebraic Data Type (ADT) is.
*   **Distinguish** between Product Types and Sum Types.
*   **Construct** ADTs using Product and Sum types.
*   **Understand** the concept of Recursive ADTs.
*   **Use** pattern matching to work with ADTs.
*   **Explain** the benefits of using ADTs in functional programming.

## 1. What are Algebraic Data Types (ADTs)?

*   **Definition:** An Algebraic Data Type (ADT) is a type formed by combining other types using algebraic operations.  These operations are typically sum (OR) and product (AND).  ADTs are a powerful way to represent complex data structures in a type-safe manner.
*   **Key Idea:**  Instead of relying on primitives or object-oriented inheritance, ADTs allow you to define custom data structures that precisely reflect the domain you're modeling.
*   **Benefits:**
    *   **Type Safety:** The compiler enforces the structure of your ADT, preventing invalid states.
    *   **Expressiveness:** ADTs allow you to represent complex data relationships in a clear and concise way.
    *   **Maintainability:** Changes to the data structure are easier to manage due to the well-defined type system.
    *   **Reasoning:** The structure of the data is explicitly defined, making it easier to reason about and debug code.
    *   **Pattern Matching:** ADTs work seamlessly with pattern matching, enabling elegant and efficient code for handling different data variants.

## 2. Product Types (AND Types)

*   **Definition:** A product type is a type formed by combining two or more types together. It represents a value that *has* all the constituent types. Think of it as a record, struct, or a tuple in other languages.
*   **Analogy:** Like the product of two numbers, a product type represents a combination of multiple things together.
*   **Example (Haskell):**

    ```haskell
    data Person = Person String Int  -- Name and Age

    -- Usage
    john :: Person
    john = Person "John Doe" 30
    ```

    In this example, `Person` is a product type. A `Person` *has* a `String` (name) *and* an `Int` (age).

*   **Example (Scala):**

    ```scala
    case class Person(name: String, age: Int)

    // Usage
    val john = Person("John Doe", 30)
    ```

    Similarly, `Person` in Scala is a product type thanks to the `case class`.
*   **Key characteristics:**
    *   Represented as tuples, structs, or records.
    *   Each field has a specific type.
    *   All fields are required to construct a value of the product type.

## 3. Sum Types (OR Types)

*   **Definition:** A sum type is a type that can be one of several possible types. It represents a value that is *either* one type *or* another. Think of it as a tagged union or an enumerated type.
*   **Analogy:**  Similar to the sum of two sets, a sum type represents the union of different types.
*   **Example (Haskell):**

    ```haskell
    data Shape = Circle Float  -- Radius
               | Rectangle Float Float -- Width and Height

    -- Usage
    circle :: Shape
    circle = Circle 5.0

    rectangle :: Shape
    rectangle = Rectangle 4.0 6.0
    ```

    Here, `Shape` is a sum type. A `Shape` is *either* a `Circle` (with a `Float` radius) *or* a `Rectangle` (with two `Float` dimensions).

*   **Example (Scala):**

    ```scala
    sealed trait Shape
    case class Circle(radius: Double) extends Shape
    case class Rectangle(width: Double, height: Double) extends Shape

    // Usage
    val circle = Circle(5.0)
    val rectangle = Rectangle(4.0, 6.0)
    ```

    In Scala, `sealed trait` and `case class` are commonly used to define sum types.
*   **Key Characteristics:**
    *   Represented as tagged unions or enumerated types.
    *   A value of a sum type can only be one of the defined variants.
    *   The compiler can often check that all variants are handled during pattern matching.

## 4. Constructing ADTs using Product and Sum Types

*   ADTs can be constructed using combinations of both product and sum types. This allows for highly flexible and expressive data modeling.

*   **Example (Haskell): Representing an Address Book**

    ```haskell
    data Address = Address String String String -- Street, City, Postcode

    data Contact = PersonAddress Address
                 | BusinessAddress Address String -- Company Name

    -- Usage
    homeAddress :: Address
    homeAddress = Address "123 Main St" "Anytown" "12345"

    personalContact :: Contact
    personalContact = PersonAddress homeAddress

    businessContact :: Contact
    businessContact = BusinessAddress homeAddress "Acme Corp"
    ```

    In this example:
    *   `Address` is a **product type** (street, city, postcode).
    *   `Contact` is a **sum type**. It can be either a `PersonAddress` (with just an address) or a `BusinessAddress` (with an address and a company name).  The `BusinessAddress` is, itself, a product type (Address *and* String).

*   **Example (Scala): Representing an Address Book**

    ```scala
    case class Address(street: String, city: String, postcode: String)

    sealed trait Contact
    case class PersonAddress(address: Address) extends Contact
    case class BusinessAddress(address: Address, companyName: String) extends Contact

    // Usage
    val homeAddress = Address("123 Main St", "Anytown", "12345")
    val personalContact = PersonAddress(homeAddress)
    val businessContact = BusinessAddress(homeAddress, "Acme Corp")
    ```

## 5. Recursive ADTs

*   **Definition:** A recursive ADT is an ADT that refers to itself in its own definition.  This allows representing data structures with a hierarchical or tree-like structure.
*   **Example (Haskell): Representing a Binary Tree**

    ```haskell
    data Tree a = Empty
                | Node a (Tree a) (Tree a)

    -- Usage
    emptyTree :: Tree Int
    emptyTree = Empty

    tree :: Tree Int
    tree = Node 10 (Node 5 Empty Empty) (Node 15 Empty Empty)
    ```

    In this example:
    *   `Tree a` is a recursive ADT.
    *   A `Tree` can be `Empty` (the base case) or a `Node` (containing a value of type `a` and two subtrees of type `Tree a`).

*   **Example (Scala): Representing a Binary Tree**

    ```scala
    sealed trait Tree[A]
    case object Empty extends Tree[A]
    case class Node[A](value: A, left: Tree[A], right: Tree[A]) extends Tree[A]

    // Usage
    val emptyTree: Tree[Int] = Empty
    val tree: Tree[Int] = Node(10, Node(5, Empty, Empty), Node(15, Empty, Empty))
    ```

*   **Key characteristics:**
    *   Contain a base case (e.g., `Empty` in the `Tree` example) to stop the recursion.
    *   Allow for the representation of nested or hierarchical data structures.

## 6. Pattern Matching with ADTs

*   **Definition:** Pattern matching is a powerful feature in functional programming that allows you to deconstruct ADTs based on their structure. It enables concise and expressive code for handling different variants of an ADT.

*   **Example (Haskell): Calculating the Area of a Shape**

    ```haskell
    data Shape = Circle Float
               | Rectangle Float Float

    area :: Shape -> Float
    area (Circle r) = pi * r * r
    area (Rectangle w h) = w * h

    -- Usage
    circleArea :: Float
    circleArea = area (Circle 5.0)

    rectangleArea :: Float
    rectangleArea = area (Rectangle 4.0 6.0)
    ```

    The `area` function uses pattern matching to distinguish between `Circle` and `Rectangle` shapes and calculate the area accordingly.

*   **Example (Scala): Calculating the Area of a Shape**

    ```scala
    sealed trait Shape
    case class Circle(radius: Double) extends Shape
    case class Rectangle(width: Double, height: Double) extends Shape

    def area(shape: Shape): Double = shape match {
      case Circle(r) => math.Pi * r * r
      case Rectangle(w, h) => w * h
    }

    // Usage
    val circleArea = area(Circle(5.0))
    val rectangleArea = area(Rectangle(4.0, 6.0))
    ```

    The `area` function uses pattern matching via the `match` keyword to analyze the `Shape` and calculate the area.

*   **Benefits of Pattern Matching:**
    *   **Readability:** Makes code more concise and easier to understand.
    *   **Exhaustiveness:** The compiler can often check that all possible cases are handled, preventing runtime errors.
    *   **Data Extraction:** Easily extracts data from the ADT's components.
    *   **Safety:** Avoids the need for explicit type casting and runtime checks.

## 7. Benefits of Using ADTs in Functional Programming

*   **Improved Type Safety:**  ADTs allow the compiler to enforce the structure of your data, preventing invalid states and reducing runtime errors.
*   **Enhanced Expressiveness:**  ADTs provide a powerful way to model complex data relationships in a clear and concise manner. This allows you to write code that is easier to understand and maintain.
*   **Simplified Reasoning:** The explicit and well-defined structure of ADTs makes it easier to reason about your code and prove its correctness.
*   **Facilitates Pattern Matching:** ADTs are designed to work seamlessly with pattern matching, enabling elegant and efficient code for handling different data variants. This improves code readability and reduces boilerplate.
*   **Modularity and Reusability:**  ADTs can be easily reused in different parts of your application, promoting modularity and reducing code duplication.
*   **Domain-Driven Design:**  ADTs encourage a domain-driven approach to software development by allowing you to directly represent the concepts and relationships in your problem domain.

## Practice Questions/Exercises

1.  **Define an ADT called `TrafficLight` that can be either `Red`, `Yellow`, or `Green`.**  Write a function that takes a `TrafficLight` and returns the next light in the sequence (Red -> Yellow -> Green -> Red).
    *   **Haskell Solution:**

        ```haskell
        data TrafficLight = Red | Yellow | Green

        nextLight :: TrafficLight -> TrafficLight
        nextLight Red    = Yellow
        nextLight Yellow = Green
        nextLight Green  = Red
        ```

    *   **Scala Solution:**

        ```scala
        sealed trait TrafficLight
        case object Red extends TrafficLight
        case object Yellow extends TrafficLight
        case object Green extends TrafficLight

        def nextLight(light: TrafficLight): TrafficLight = light match {
          case Red => Yellow
          case Yellow => Green
          case Green => Red
        }
        ```

2.  **Define an ADT called `Result` that can be either `Success` containing a value of type `a`, or `Failure` containing an error message (String).**  Write a function that takes a `Result` and returns either the success value or a default value if it's a failure.
    *   **Haskell Solution:**

        ```haskell
        data Result a = Success a | Failure String

        getValueOrDefault :: Result a -> a -> a
        getValueOrDefault (Success value) _ = value
        getValueOrDefault (Failure _) defaultValue = defaultValue

        --Example Usage
        example1 = getValueOrDefault (Success 5) 0 -- Returns 5
        example2 = getValueOrDefault (Failure "Something went wrong") 0 -- Returns 0
        ```

    *   **Scala Solution:**

        ```scala
        sealed trait Result[+A]
        case class Success[A](value: A) extends Result[A]
        case class Failure(errorMessage: String) extends Result[Nothing]

        def getValueOrDefault[A](result: Result[A], defaultValue: A): A = result match {
          case Success(value) => value
          case Failure(_) => defaultValue
        }

        //Example Usage
        val example1 = getValueOrDefault(Success(5), 0) // Returns 5
        val example2 = getValueOrDefault(Failure("Something went wrong"), 0) // Returns 0
        ```

3.  **Define a recursive ADT to represent a simple arithmetic expression.** The expression can be a number or an addition of two expressions.  Write a function to evaluate the expression.
    *   **Haskell Solution:**

        ```haskell
        data Expr = Num Int
                  | Add Expr Expr

        evaluate :: Expr -> Int
        evaluate (Num n) = n
        evaluate (Add e1 e2) = evaluate e1 + evaluate e2

        -- Usage
        expr :: Expr
        expr = Add (Num 5) (Add (Num 2) (Num 3))  -- 5 + (2 + 3)

        result :: Int
        result = evaluate expr -- Returns 10
        ```

    *   **Scala Solution:**

        ```scala
        sealed trait Expr
        case class Num(value: Int) extends Expr
        case class Add(left: Expr, right: Expr) extends Expr

        def evaluate(expr: Expr): Int = expr match {
          case Num(n) => n
          case Add(e1, e2) => evaluate(e1) + evaluate(e2)
        }

        // Usage
        val expr: Expr = Add(Num(5), Add(Num(2), Num(3))) // 5 + (2 + 3)
        val result: Int = evaluate(expr) // Returns 10
        ```

## Important Points to Remember

*   **Sum types define "OR" relationships, while product types define "AND" relationships.**
*   **ADTs, especially combined with pattern matching, allow for concise and type-safe data manipulation.**
*   **Recursive ADTs are essential for representing hierarchical data structures like trees and lists.**
*   **ADTs are a core concept in functional programming and help improve code quality, maintainability, and reasoning.**
*   **Use ADTs to model your domain accurately and avoid using primitive types directly when representing complex concepts.**
