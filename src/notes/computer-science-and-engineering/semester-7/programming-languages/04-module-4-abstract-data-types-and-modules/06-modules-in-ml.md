---
title: "Modules in ML"
subject: "PROGRAMMING LANGUAGES"
module: "Module 4: Abstract Data Types and Modules"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c6a8"
status: "completed"
scrapedAt: "2026-05-20T17:09:49.773Z"
---
# Programming Languages: Module 4 - Abstract Data Types and Modules

## Topic: Modules in ML

This module explores the powerful concept of **modules** in the Standard ML (SML) programming language. Modules provide a mechanism for organizing code into reusable, encapsulated units, promoting abstraction, modularity, and maintainability.

---

### Learning Outcomes

By the end of this topic, you will be able to:

1.  **Understand the purpose and benefits of modules in programming.**
2.  **Differentiate between structures and signatures in SML.**
3.  **Create and use basic structures in SML.**
4.  **Define and use signatures to specify interfaces for structures.**
5.  **Implement abstract data types (ADTs) using modules.**
6.  **Understand the concept of module functors and their applications.**
7.  **Apply module mechanisms for code organization and reuse.**

---

### 1. Purpose and Benefits of Modules

Modules are a fundamental feature for building robust and scalable software. They offer several key advantages:

*   **Encapsulation:** Hides internal implementation details, exposing only a well-defined interface. This prevents accidental modification of internal state and allows for independent evolution of implementations.
*   **Abstraction:** Focuses on *what* a module does rather than *how* it does it. Users of a module only need to understand its interface.
*   **Modularity:** Breaks down complex programs into smaller, manageable, and independent units. This improves readability, testability, and maintainability.
*   **Reusability:** Encapsulated modules can be easily reused across different parts of a project or even in entirely different projects.
*   **Information Hiding:** Protects data and functionality from unauthorized access.
*   **Namespace Management:** Prevents naming conflicts by providing a dedicated namespace for each module.

---

### 2. Structures and Signatures in SML

SML's module system is built around two core components: **structures** and **signatures**.

#### 2.1 Structures

*   **Definition:** A structure is a collection of bindings (values, types, exceptions, and other structures). It represents a concrete implementation of a set of functionalities.
*   **Purpose:** To group related code and provide a concrete realization of a particular abstraction.
*   **Syntax:**
    ```sml
    structure <structure_name> = struct
        (* Bindings: values, types, exceptions, nested structures *)
        <binding1>
        <binding2>
        ...
    end;
    ```
*   **Example:** A simple structure for basic arithmetic operations.

    ```sml
    structure BasicMath =
    struct
        val add = fn (x, y) => x + y
        val subtract = fn (x, y) => x - y
        val multiply = fn (x, y) => x * y
        val divide = fn (x, y) => x div y  (* Integer division *)
    end;
    ```

*   **Accessing Bindings:** Use the dot notation (`.`) to access elements within a structure.

    ```sml
    val sum = BasicMath.add(5, 3); (* sum will be 8 *)
    val difference = BasicMath.subtract(10, 4); (* difference will be 6 *)
    ```

#### 2.2 Signatures

*   **Definition:** A signature is a specification or contract that describes the *interface* of a structure. It lists the components that a structure *must* provide, along with their types, without revealing their implementations.
*   **Purpose:** To define the abstract properties of a module, allowing users to interact with a structure without knowing its internal details. Signatures enforce abstraction and enable polymorphism in modules.
*   **Syntax:**
    ```sml
    signature <signature_name> = sig
        (* Component specifications: type, val, exception, structure *)
        type <type_name>;
        val <value_name> : <type_expression>;
        exception <exception_name> of <type_expression>;
        structure <nested_structure_name> : <nested_signature_name>;
        ...
    end;
    ```
*   **Example:** A signature for the `BasicMath` structure.

    ```sml
    signature MATH_OPS = sig
        val add : int * int -> int
        val subtract : int * int -> int
        val multiply : int * int -> int
        val divide : int * int -> int
    end;
    ```

*   **Matching:** A structure *matches* a signature if it provides all the components specified in the signature with compatible types.

---

### 3. Creating and Using Basic Structures

As shown in the `BasicMath` example, creating a structure involves defining bindings within the `struct ... end` block. Using a structure involves accessing its components via the dot notation.

---

### 4. Defining and Using Signatures to Specify Interfaces

Signatures act as the "blueprints" for structures.

*   **Declaring a Signature:** Use the `signature` keyword.
*   **Using a Signature with a Structure:** Use the `: <signature_name>` clause when defining a structure. This ensures that the structure conforms to the specified interface.

    ```sml
    structure MyMath : MATH_OPS =
    struct
        val add = fn (x, y) => x + y
        val subtract = fn (x, y) => x - y
        val multiply = fn (x, y) => x * y
        val divide = fn (x, y) => x div y
    end;
    ```
    If `MyMath` had a different type for `add` (e.g., `real * real -> real`), it would be a type error because it wouldn't match `MATH_OPS`.

*   **Partial Specification:** Signatures can also specify only a subset of a structure's components, thereby hiding certain internal details. This is crucial for abstraction.

    ```sml
    (* Signature that only exposes addition and multiplication *)
    signature BASIC_ARITHMETIC = sig
        val add : int * int -> int
        val multiply : int * int -> int
    end;

    structure PartialMath : BASIC_ARITHMETIC =
    struct
        val add = fn (x, y) => x + y
        val subtract = fn (x, y) => x - y  (* This binding is hidden *)
        val multiply = fn (x, y) => x * y
        val divide = fn (x, y) => x div y  (* This binding is hidden *)
    end;

    (* Now, PartialMath.subtract and PartialMath.divide are not accessible *)
    val res = PartialMath.add(2, 3); (* OK *)
    (* val res2 = PartialMath.subtract(5, 2); *) (* Error: unbound variable *)
    ```

---

### 5. Implementing Abstract Data Types (ADTs) using Modules

Modules are the primary way to implement ADTs in SML. An ADT is defined by its operations (interface) rather than its concrete representation.

#### 5.1 Implementing an Abstract Stack ADT

Let's define a stack ADT.

*   **Signature for the Stack:**

    ```sml
    signature STACK = sig
        type 'a stack
        val empty : 'a stack
        val isEmpty : 'a stack -> bool
        val push : 'a * 'a stack -> 'a stack
        val pop : 'a stack -> 'a stack
        val top : 'a stack -> 'a
    end;
    ```
    *   `type 'a stack`: Declares an abstract type constructor `stack` that is parameterized by `'a`. The `'a` signifies that the stack can hold elements of any type. The fact that it's declared in the signature without a definition means it's abstract.
    *   `val empty : 'a stack`: The `empty` value creates an empty stack.
    *   `val isEmpty : 'a stack -> bool`: Checks if the stack is empty.
    *   `val push : 'a * 'a stack -> 'a stack`: Adds an element to the top of the stack.
    *   `val pop : 'a stack -> 'a stack`: Removes the top element from the stack.
    *   `val top : 'a stack -> 'a`: Returns the top element without removing it.

*   **Structure implementing the Stack (using a list):**

    ```sml
    structure ListStack : STACK =
    struct
        type 'a stack = 'a list (* Concrete representation: a list *)

        val empty : 'a stack = []
        val isEmpty : 'a stack -> bool = null
        val push : 'a * 'a stack -> 'a stack = fn (x, xs) => x :: xs
        val pop : 'a stack -> 'a stack = fn xs => tl xs (* Assumes non-empty *)
        val top : 'a stack -> 'a = fn xs => hd xs (* Assumes non-empty *)
    end;
    ```
    *   `type 'a stack = 'a list`: Here, we provide the concrete representation of the stack as a list. This type binding *is* provided, making `'a stack` concrete within this structure.
    *   The functions `empty`, `isEmpty`, `push`, `pop`, and `top` are implemented using list operations.

*   **Using the Stack ADT:**

    ```sml
    val myStack = ListStack.push(1, ListStack.push(2, ListStack.empty));
    val topElement = ListStack.top(myStack); (* topElement will be 1 *)
    val poppedStack = ListStack.pop(myStack); (* poppedStack will be [2] *)
    val isMyStackEmpty = ListStack.isEmpty(poppedStack); (* isMyStackEmpty will be false *)
    ```

#### 5.2 Benefits of ADTs with Modules

*   **Data Hiding:** The internal representation (`'a list` in `ListStack`) is hidden from users of the `STACK` signature. They only interact with the abstract operations.
*   **Changeability:** The implementation of the stack can be changed (e.g., using a different data structure) without affecting the code that uses the `STACK` signature, as long as the new implementation still matches the `STACK` signature.

---

### 6. Module Functors

*   **Definition:** A functor is a function from modules to modules. It takes one or more structures as arguments and returns a new structure.
*   **Purpose:** To abstract over structures, allowing for parameterized module generation and code reuse across different data structures or configurations.
*   **Syntax:**
    ```sml
    functor <functor_name>(<arg_structure_name> : <arg_signature_name>) : <result_signature_name> = struct
        (* Structure definition, using components from arg_structure_name *)
        ...
    end;
    ```
*   **Example: A Generic Set Module:**
    Let's create a generic set module that can work with any ordered type. We'll need an `ORDERED_TYPE` signature first.

    ```sml
    (* Signature for a type that can be ordered *)
    signature ORDERED_TYPE = sig
        type t
        val cmp : t * t -> order (* order is a built-in type: LESS, EQUAL, GREATER *)
    end;

    (* Signature for a Set ADT *)
    signature SET = sig
        type element
        type set
        val empty : set
        val isEmpty : set -> bool
        val insert : element -> set -> set
        val member : element -> set -> bool
    end;

    (* Functor that creates a Set structure from an ORDERED_TYPE *)
    functor MakeSet(Elem : ORDERED_TYPE) : SET =
    struct
        type element = Elem.t
        type set = element list (* Representing the set as a list, ensuring no duplicates *)

        val empty = []
        val isEmpty = null

        (* Helper for insertion, assumes no duplicates *)
        fun insertHelper x [] = [x]
          | insertHelper x (y::ys) =
              case Elem.cmp(x, y) of
                EQUAL => y::ys (* x is already in the set *)
              | LESS => x :: y :: ys (* insert x before y *)
              | GREATER => y :: insertHelper x ys (* continue searching *)

        val insert = fn (x, s) => insertHelper x s

        (* Helper for membership check *)
        fun memberHelper x [] = false
          | memberHelper x (y::ys) =
              case Elem.cmp(x, y) of
                EQUAL => true
              | LESS => false (* x would have been before y if it existed *)
              | GREATER => memberHelper x ys

        val member = fn (x, s) => memberHelper x s
    end;
    ```

*   **Using the Functor:**

    First, define a structure that matches `ORDERED_TYPE` for integers.

    ```sml
    structure IntOrd : ORDERED_TYPE =
    struct
        type t = int
        val cmp = fn (x, y) => if x < y then LESS else if x > y then GREATER else EQUAL
    end;
    ```

    Now, instantiate the `MakeSet` functor to create an integer set module.

    ```sml
    structure IntSet = MakeSet(IntOrd);

    (* Now use IntSet like any other structure *)
    val myIntSet = IntSet.insert(5, IntSet.insert(10, IntSet.empty));
    val is10Member = IntSet.member(10, myIntSet); (* is10Member will be true *)
    val is7Member = IntSet.member(7, myIntSet); (* is7Member will be false *)
    ```

    We could also create a set for strings by defining a `StringOrd` structure and instantiating `MakeSet` with it.

---

### 7. Applying Module Mechanisms for Code Organization and Reuse

*   **Breaking Down Large Programs:** Divide your program into logical, independent modules. For instance, a "DatabaseAccess" module, a "UserInterface" module, a "Logging" module.
*   **Creating Libraries:** Define reusable structures and signatures that can be shared across projects.
*   **Parameterizing Code:** Use functors to create generic components that can be adapted to different data types or configurations. For example, a `MakeListSort` functor that takes an ordering signature and returns a sorting structure.
*   **Testing:** Modules facilitate testing by allowing you to mock or stub dependencies. You can create test structures that implement a required signature but perform specific actions for testing purposes.

---

### Key Points to Remember

*   **Structures** provide the *implementation*, while **Signatures** define the *interface*.
*   A structure must *match* its declared signature.
*   Modules enable **encapsulation**, **abstraction**, and **information hiding**.
*   **Abstract Data Types (ADTs)** are naturally implemented using modules by defining a signature for the ADT's operations and a structure that provides a concrete implementation.
*   **Functors** are functions from modules to modules, allowing for parameterization and code reuse at the module level.
*   The dot notation (`.`) is used to access components within a structure.

---

### Practice Questions and Exercises

1.  **Basic Structure and Signature:**
    *   Define a signature `POINT` that describes a 2D point with `x` and `y` integer coordinates.
    *   Define a structure `Point2D` that implements `POINT` and includes a function `distance` to calculate the Euclidean distance between two points.
    *   How would you restrict `Point2D` to only expose the coordinates and not the `distance` function?

2.  **ADT Implementation (Counter):**
    *   Define a signature `COUNTER` with operations: `empty` (a counter starting at 0), `increment` (adds 1), `decrement` (subtracts 1), and `getValue` (returns the current value).
    *   Implement a structure `SimpleCounter` that uses an integer as the underlying representation for the counter.
    *   Implement a structure `SafeCounter` that raises an exception `Overflow` if the counter exceeds a certain limit (e.g., 100). This structure should also match the `COUNTER` signature.

3.  **Functor Application:**
    *   Consider a signature `COMPARATOR` with a single function `compare : 'a * 'a -> int` which returns -1, 0, or 1 for less than, equal, or greater than respectively.
    *   Define a functor `MakeSorter` that takes a structure matching `COMPARATOR` and a `LIST` signature (assume `LIST` has `type 'a list` and `val empty : 'a list`, `val cons : 'a * 'a list -> 'a list`, `val hd : 'a list -> 'a`, `val tl : 'a list -> 'a list`). The functor should return a structure with a `sort` function.
    *   Show how you would use `MakeSorter` to sort a list of strings, assuming you have a `StringComparator` structure that matches `COMPARATOR`.

---

### Answers to Practice Questions

**1. Basic Structure and Signature:**

```sml
(* Signature for POINT *)
signature POINT = sig
    type point
    val makePoint : int * int -> point
    val getX : point -> int
    val getY : point -> int
    val distance : point * point -> real (* Using real for distance *)
end;

(* Structure implementing POINT *)
structure Point2D : POINT =
struct
    type point = { x : int, y : int }

    val makePoint = fn (x, y) => { x = x, y = y }
    val getX = fn p => #x p
    val getY = fn p => #y p

    val distance = fn (p1, p2) =>
        let
            val dx = Real.fromInt(#x p1 - #x p2)
            val dy = Real.fromInt(#y p1 - #y p2)
        in
            Math.sqrt(dx*dx + dy*dy)
        end
end;

(* To restrict Point2D to only expose coordinates: *)
signature POINT_COORDS = sig
    type point
    val makePoint : int * int -> point
    val getX : point -> int
    val getY : point -> int
end;

structure Point2DLimited : POINT_COORDS = Point2D;
(* Now, Point2DLimited.distance is not accessible *)
```

**2. ADT Implementation (Counter):**

```sml
(* Signature for COUNTER *)
signature COUNTER = sig
    type counter
    val empty : counter
    val increment : counter -> counter
    val decrement : counter -> counter
    val getValue : counter -> int
end;

(* Structure SimpleCounter *)
structure SimpleCounter : COUNTER =
struct
    type counter = int

    val empty = 0
    val increment = fn c => c + 1
    val decrement = fn c => c - 1
    val getValue = fn c => c
end;

(* Structure SafeCounter *)
exception Overflow;

structure SafeCounter : COUNTER =
struct
    type counter = int

    val empty = 0
    val MAX_VAL = 100

    val increment = fn c =>
        if c >= MAX_VAL then
            raise Overflow
        else
            c + 1

    val decrement = fn c => c - 1 (* Assuming no underflow for this example *)

    val getValue = fn c => c
end;

(* Example usage of SafeCounter *)
val s_counter = SafeCounter.empty;
val s_counter_inc = SafeCounter.increment s_counter;
(* If we called increment 101 times, it would raise Overflow *)
```

**3. Functor Application:**

```sml
(* Assume a LIST signature is available or defined like this *)
signature LIST = sig
    type 'a list
    val empty : 'a list
    val cons : 'a * 'a list -> 'a list
    val hd : 'a list -> 'a
    val tl : 'a list -> 'a list
end;

(* Signature for COMPARATOR *)
signature COMPARATOR = sig
    type t
    val compare : t * t -> int
end;

(* Functor MakeSorter *)
functor MakeSorter(Data : COMPARATOR) : LIST =
struct
    type element = Data.t
    type list = element list (* Using Data.t here to match the element type *)

    (* Bubble Sort implementation (for simplicity) *)
    fun swap(x, y) = (y, x);

    fun bubblePass [] = []
    | bubblePass [x] = [x]
    | bubblePass (x::y::rest) =
        if Data.compare(x, y) > 0 then
            y :: bubblePass (x :: rest)
        else
            x :: bubblePass (y :: rest);

    fun bubbleSort list =
        let
            val numElements = List.length list (* Assuming List.length is available or implemented *)
        in
            List.foldl (fn (_, lst) => bubblePass lst) list [1 .. numElements]
        end;

    val sort = bubbleSort

    (* For the LIST signature to work, we need to provide LIST components. *)
    (* This is a slight mismatch in the question's framing, as the functor *produces* a sorted list, *)
    (* but the signature it matches is LIST. A more typical setup would be a 'SORTING' signature. *)
    (* Let's assume the functor returns a structure with a 'sort' function that operates on lists. *)
    (* A better signature for the functor result might be: *)
    (* signature SORT_FUNCTOR_RESULT = sig *)
    (*     val sort : element list -> element list *)
    (* end; *)
    (* And the functor signature would be: *)
    (* functor MakeSorter(Data : COMPARATOR) : SORT_FUNCTOR_RESULT = ... *)
    (* For now, let's adjust to what the question asked, assuming the structure *is* the list operations *)
    (* and also has a sort function. This is a common pattern in ML for libraries. *)

    (* Let's redefine the functor to provide a sorting structure *)
end;

(* Redefining the functor to return a sorting structure *)
signature SORT_STRUCTURE = sig
    type element
    val sort : element list -> element list
end;

functor MakeSorter(Data : COMPARATOR) : SORT_STRUCTURE =
struct
    type element = Data.t

    fun bubblePass [] = []
    | bubblePass [x] = [x]
    | bubblePass (x::y::rest) =
        if Data.compare(x, y) > 0 then
            y :: bubblePass (x :: rest)
        else
            x :: bubblePass (y :: rest);

    fun bubbleSort list =
        let
            fun countLen [] acc = acc
              | countLen (_::xs) acc = countLen xs (acc + 1)
            val numElements = countLen list 0
        in
            List.foldl (fn (_, lst) => bubblePass lst) list [1 .. numElements]
        end;

    val sort = bubbleSort
end;


(* String comparison structure *)
structure StringComparator : COMPARATOR =
struct
    type t = string
    val compare = String.compare (* String.compare returns LESS, EQUAL, GREATER *)
end;

(* Instantiate the functor *)
structure StringSorter = MakeSorter(StringComparator);

(* Example usage *)
val unsortedStrings = ["banana", "apple", "cherry", "date"];
val sortedStrings = StringSorter.sort(unsortedStrings);
(* sortedStrings will be ["apple", "banana", "cherry", "date"] *)
