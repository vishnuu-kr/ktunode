---
title: "Ada Packages"
subject: "PROGRAMMING LANGUAGES"
module: "Module 4: Abstract Data Types and Modules"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c6a7"
status: "completed"
scrapedAt: "2026-05-20T17:09:49.037Z"
---
# Programming Languages: Module 4 - Abstract Data Types and Modules

## Topic: Ada Packages

---

### Introduction to Ada Packages

Ada packages are a fundamental concept for structuring programs, managing complexity, and enabling modularity and reusability. They are a powerful mechanism for implementing Abstract Data Types (ADTs) and encapsulating related subprograms, types, and variables.

**Key Concepts:**

*   **Modularity:** Packages allow you to group related code (data types, variables, subprograms) into a single, manageable unit.
*   **Encapsulation:** Packages hide the internal implementation details, exposing only a well-defined interface. This promotes information hiding and prevents unauthorized access to internal data.
*   **Abstraction:** Packages are the primary way to implement Abstract Data Types (ADTs) in Ada. They define a set of operations on a data type without revealing how the data is stored or manipulated internally.
*   **Reusability:** Well-designed packages can be reused across different parts of a project or even in entirely different projects.

---

### Learning Outcomes Covered

This module will cover the following learning outcomes related to Ada Packages:

1.  **Explain the purpose and structure of Ada packages.**
2.  **Differentiate between the specification and the body of an Ada package.**
3.  **Understand and utilize package instantiation and visibility rules.**
4.  **Implement Abstract Data Types (ADTs) using Ada packages.**
5.  **Explore the use of generic packages for creating reusable components.**

---

### 1. Purpose and Structure of Ada Packages

**Purpose:**

*   **Organization:** Group related entities (types, variables, subprograms, exceptions) into logical units.
*   **Information Hiding:** Control access to data and operations, separating interface from implementation.
*   **Abstraction:** Define ADTs by specifying the interface (what can be done) and hiding the implementation (how it's done).
*   **Reusability:** Create self-contained units that can be easily incorporated into other programs.
*   **Visibility Control:** Manage which parts of a program can access specific entities.

**Structure:**

An Ada package consists of two parts:

*   **Package Specification:** Declares the public interface of the package. It lists the types, subprograms, variables, and exceptions that are visible to users of the package.
    *   It defines *what* the package provides.
    *   It does not contain the actual executable code for subprograms.
*   **Package Body:** Contains the implementation details of the package. It provides the executable code for the subprograms declared in the specification and can also include private types, private variables, and initialization code.
    *   It defines *how* the package works.
    *   Entities declared in the body (and not in the spec) are private to the package.

**Syntax:**

```ada
-- Package Specification
package Package_Name is
    -- Public declarations: types, variables, subprograms, exceptions

    -- Example: A public type
    type My_Type is ...;

    -- Example: A public procedure
    procedure Public_Procedure (Param : in out My_Type);

    -- Example: A public function
    function Public_Function (Param : My_Type) return Integer;

    -- Example: A public constant
    Public_Constant : constant Integer := 10;

    -- Example: A public exception
    Public_Exception : exception;

end Package_Name;

-- Package Body
package body Package_Name is
    -- Private declarations (optional): types, variables, subprograms

    -- Example: A private type
    type Private_Type is record
        Data_Field : Integer;
    end record;

    -- Example: A private variable
    Private_Variable : Private_Type;

    -- Implementation of public subprograms
    procedure Public_Procedure (Param : in out My_Type) is
    begin
        -- Implementation details
        Param := ...;
        -- Can access Private_Variable here
    end Public_Procedure;

    function Public_Function (Param : My_Type) return Integer is
    begin
        -- Implementation details
        return Param.Some_Field + 1;
        -- Can access Private_Variable here
    end Public_Function;

    -- Private subprograms (optional)
    procedure Private_Helper is
    begin
        -- Helper code, not visible outside
    end Private_Helper;

begin -- Optional Initialization Block
    -- Initialization code for the package body
    -- Can initialize Private_Variable
    Private_Variable.Data_Field := 0;
    -- Call private procedures
    Private_Helper;
end Package_Name;
```

---

### 2. Differentiate between Package Specification and Package Body

| Feature               | Package Specification                                | Package Body                                                               |
| :-------------------- | :--------------------------------------------------- | :------------------------------------------------------------------------- |
| **Purpose**           | Declares the public interface.                       | Implements the functionality.                                              |
| **Content**           | Declarations of visible types, subprograms, variables, constants, exceptions. | Implementations of subprograms, private types, private variables, initialization. |
| **Visibility**        | Defines what is accessible from outside the package. | Contains both public (if declared in spec) and private entities.           |
| **Information Hiding** | Exposes the interface.                               | Hides implementation details.                                              |
| **Compilation**       | Compiled first, creating an "interface" to the package. | Compiled after the specification. Can be compiled independently if no body is present. |
| **Executable Code**   | Does not contain executable code for subprograms.    | Contains the actual executable code for subprograms.                       |

**Example:**

```ada
-- Specification: Stack_ADT.ads
package Stack_ADT is
    -- Public Type (abstract)
    type Stack is private;

    -- Public Operations
    procedure Push (S : in out Stack; Item : Integer);
    procedure Pop (S : in out Stack; Item : out Integer);
    function Is_Empty (S : Stack) return Boolean;
    procedure Clear (S : in out Stack);

    -- An exception specific to the ADT
    Empty_Stack_Error : exception;

private -- Private part of the specification
    -- This part is visible to users of the package,
    -- but it's often better to keep the details in the body.
    -- In this case, we might declare the concrete type here.
    -- For true ADT, the concrete type definition is usually in the body.
    -- If 'Stack' was declared 'limited private', its structure would *only* be in the body.
end Stack_ADT;

-- Body: Stack_ADT.adb
package body Stack_ADT is
    -- Concrete implementation of the Stack ADT
    -- This is the hidden implementation detail.
    type Stack is -- Definition of Stack is here, not in the spec
        record
            Elements : array (1 .. 100) of Integer; -- Example: fixed-size array
            Top      : Integer range 0 .. 100 := 0;
        end record;

    -- Private variables (specific to the package body)
    My_Private_Variable : Integer := 5;

    -- Implementation of public operations
    procedure Push (S : in out Stack; Item : Integer) is
    begin
        if S.Top = 100 then
            -- Handle stack overflow if needed, perhaps with another exception
            null; -- For simplicity, not handling overflow here
        else
            S.Top := S.Top + 1;
            S.Elements(S.Top) := Item;
        end if;
    end Push;

    procedure Pop (S : in out Stack; Item : out Integer) is
    begin
        if Is_Empty(S) then
            raise Empty_Stack_Error;
        else
            Item := S.Elements(S.Top);
            S.Top := S.Top - 1;
        end if;
    end Pop;

    function Is_Empty (S : Stack) return Boolean is
    begin
        return S.Top = 0;
    end Is_Empty;

    procedure Clear (S : in out Stack) is
    begin
        S.Top := 0;
    end Clear;

    -- Example of a private helper procedure
    procedure Internal_Check is
    begin
        -- Perform some internal checks or operations
        null;
    end Internal_Check;

begin -- Optional Initialization Block
    -- Initialize My_Private_Variable
    My_Private_Variable := 10;
    -- Call internal helper
    Internal_Check;
end Stack_ADT;
```

---

### 3. Package Instantiation and Visibility Rules

**Package Instantiation:**

Ada does not require explicit "instantiation" in the same way as some other languages for non-generic packages. When a package specification is declared and its body is provided, it becomes available for use. The entities declared in the specification are then "visible" within the scope where the package is used, provided an `use` clause or explicit qualification is employed.

For **generic packages**, instantiation is explicit. You create a "concrete" package from a generic template.

**Visibility Rules:**

*   **`is` Clause:** Entities declared in the package specification are generally visible outside the package.
*   **`use` Clause:**
    *   A `use Package_Name;` clause makes all directly visible (exported) entities from `Package_Name` directly visible in the current scope. This means you can refer to `Public_Procedure` instead of `Package_Name.Public_Procedure`.
    *   A `use type Package_Element_Type;` clause makes operations defined for that type directly visible.
    *   **Overloading:** Be cautious with `use` clauses, as they can lead to ambiguity if multiple packages export entities with the same name. In such cases, you must qualify the call (e.g., `Package_A.Procedure_Name`).
*   **Explicit Qualification:** You can always access an entity `Entity_Name` from a package `Package_Name` by qualifying it: `Package_Name.Entity_Name`. This is the safest way to avoid ambiguity.
*   **Private Declarations:**
    *   Entities declared in the package *body* (and not in the specification) are completely hidden and not visible outside the package.
    *   **`private` Part of Specification:** Entities declared in the `private` part of a package specification are visible to other packages that use the specification, but their *internal structure* is hidden. This is crucial for defining ADTs. A type declared as `type My_Type is private;` in the specification means that users can declare variables of `My_Type` and call operations on it, but they cannot directly access its fields or components unless those are also exported. The actual definition of `My_Type` must reside in the `private` section of the specification or, more commonly and beneficially for ADTs, within the package body's private section.

**Example of Visibility:**

```ada
-- Main Program File: main.adb

-- Assuming Stack_ADT.ads and Stack_ADT.adb are compiled
-- and available.

with Stack_ADT;         -- Makes Stack_ADT's specification visible
-- use Stack_ADT;       -- uncommenting this would allow direct use of Stack_ADT entities

procedure Main is
    My_Stack : Stack_ADT.Stack; -- Explicit Qualification
    An_Item  : Integer;
begin
    -- Initialize My_Stack (implicitly done by its declaration)
    -- If Stack_ADT had an initialization procedure, we'd call it.

    -- Push items onto the stack using explicit qualification
    Stack_ADT.Push (My_Stack, 10);
    Stack_ADT.Push (My_Stack, 20);

    -- Check if empty
    if not Stack_ADT.Is_Empty(My_Stack) then
        -- Pop an item
        Stack_ADT.Pop (My_Stack, An_Item);
        -- An_Item now holds 20
    end if;

    -- Accessing private data from the body (e.g. My_Private_Variable) is NOT allowed:
    -- Declare_Error : Integer := Stack_ADT.My_Private_Variable; -- This would be a compile-time error

    -- To use 'use':
    -- use Stack_ADT;
    -- Push(My_Stack, 30); -- Now possible without qualification
    -- if not Is_Empty(My_Stack) then ...

end Main;
```

---

### 4. Implementing Abstract Data Types (ADTs) using Ada Packages

Packages are the primary mechanism for implementing ADTs in Ada. An ADT is characterized by:

*   **Data Type:** A set of data values.
*   **Operations:** A set of procedures and functions that operate on the data.
*   **Encapsulation:** Hiding the internal representation of the data and restricting access to it only through the defined operations.

**How Packages Achieve ADT Implementation:**

1.  **`private` Types in Specification:** Declare the type in the package specification as `is private;` (or `is limited private;` if assignment and equality are also to be hidden).
2.  **Operations in Specification:** Declare all the operations (procedures and functions) that can be performed on the ADT in the package specification.
3.  **Actual Data Representation in Body:** Define the concrete data structure for the ADT within the package body. This representation is hidden from users of the package.
4.  **Implementation in Body:** Implement the operations declared in the specification within the package body, using the hidden data representation.

**Benefits of Using Packages for ADTs:**

*   **Data Hiding:** The internal representation of the data is inaccessible from outside the package, ensuring data integrity.
*   **Abstraction:** Users only interact with the ADT through its defined operations, making the code cleaner and easier to understand.
*   **Maintainability:** Changes to the internal representation of the ADT (in the package body) do not affect the code that uses the package, as long as the specification (the interface) remains unchanged.
*   **Type Safety:** Ada's strong typing ensures that operations are applied correctly to the ADT.

**Example: A Date ADT**

```ada
-- Specification: Date_ADT.ads
package Date_ADT is
    -- The 'Date' type is abstract (private).
    -- Users cannot directly access Year, Month, Day fields.
    type Date is private;

    -- Operations:
    procedure Create_Date (D       : out Date;
                           Year    : Integer;
                           Month   : Integer;
                           Day     : Integer);

    procedure Increment_Day (D       : in out Date);

    function Get_Year (D : Date) return Integer;
    function Get_Month (D : Date) return Integer;
    function Get_Day (D : Date) return Integer;

    function Is_Valid_Date (Year, Month, Day : Integer) return Boolean;

    -- Exceptions
    Invalid_Date_Error : exception;
    Invalid_Operation_Error : exception;

private
    -- The actual representation of the Date type is hidden.
    -- It's typically defined in the package body for better encapsulation.
    -- If we put the record definition here, it would be 'limited private'
    -- for full control, or just 'private' allowing assignment.
    -- For better ADT practice, keep the record definition in the body's private section.
    type Date is limited private; -- More strict encapsulation

end Date_ADT;

-- Body: Date_ADT.adb
package body Date_ADT is

    -- Actual definition of the Date type (hidden)
    type Date is
        record
            Year  : Integer;
            Month : Integer;
            Day   : Integer;
        end record;

    -- Helper function (private to the package body)
    function Is_Leap_Year (Year : Integer) return Boolean is
    begin
        return (Year mod 4 = 0 and Year mod 100 /= 0) or (Year mod 400 = 0);
    end Is_Leap_Year;

    -- Helper function (private to the package body)
    function Days_In_Month (Year : Integer; Month : Integer) return Integer is
    begin
        case Month is
            when 1 | 3 | 5 | 7 | 8 | 10 | 12 => return 31;
            when 4 | 6 | 9 | 11             => return 30;
            when 2                         => if Is_Leap_Year(Year) then return 29; else return 28; end if;
            when others                    => return 0; -- Should not happen with validation
        end case;
    end Days_In_Month;


    -- Implementation of public operations
    procedure Create_Date (D       : out Date;
                           Year    : Integer;
                           Month   : Integer;
                           Day     : Integer) is
    begin
        if not Is_Valid_Date(Year, Month, Day) then
            raise Invalid_Date_Error;
        end if;
        D.Year := Year;
        D.Month := Month;
        D.Day := Day;
    end Create_Date;

    procedure Increment_Day (D : in out Date) is
        Max_Days : Integer;
    begin
        if D.Month = 12 and D.Day = 31 then
            D.Year := D.Year + 1;
            D.Month := 1;
            D.Day := 1;
        else
            Max_Days := Days_In_Month(D.Year, D.Month);
            if D.Day = Max_Days then
                D.Month := D.Month + 1;
                D.Day := 1;
            else
                D.Day := D.Day + 1;
            end if;
        end if;
    end Increment_Day;

    function Get_Year (D : Date) return Integer is
    begin
        return D.Year;
    end Get_Year;

    function Get_Month (D : Date) return Integer is
    begin
        return D.Month;
    end Get_Month;

    function Get_Day (D : Date) return Integer is
    begin
        return D.Day;
    end Get_Day;

    function Is_Valid_Date (Year, Month, Day : Integer) return Boolean is
    begin
        if Year < 1 or Month < 1 or Month > 12 or Day < 1 then
            return False;
        end if;
        return Day <= Days_In_Month(Year, Month);
    end Is_Valid_Date;

begin -- Initialization Block (optional)
    -- Could initialize some internal state if needed
    null;
end Date_ADT;

-- Main Program File: main_date.adb
with Date_ADT;

procedure Main_Date is
    My_Birthday : Date_ADT.Date;
begin
    -- Create a date (raises Invalid_Date_Error if invalid)
    Date_ADT.Create_Date(My_Birthday, 1990, 7, 15);

    -- Get components
    Put_Line("Year: " & Integer'Image(Date_ADT.Get_Year(My_Birthday)));
    Put_Line("Month: " & Integer'Image(Date_ADT.Get_Month(My_Birthday)));
    Put_Line("Day: " & Integer'Image(Date_ADT.Get_Day(My_Birthday)));

    -- Increment the day
    Date_ADT.Increment_Day(My_Birthday);
    Put_Line("After increment:");
    Put_Line("Day: " & Integer'Image(Date_ADT.Get_Day(My_Birthday)));

    -- Example of invalid date creation
    -- begin
    --     Date_ADT.Create_Date(My_Birthday, 2023, 2, 30); -- This will raise Invalid_Date_Error
    -- exception
    --     when Date_ADT.Invalid_Date_Error =>
    --         Put_Line("Caught Invalid Date Error!");
    -- end;

    -- Accessing internal fields directly is not allowed:
    -- Declare_Error : Integer := My_Birthday.Year; -- Compile-time Error

end Main_Date;
```

---

### 5. Generic Packages for Creating Reusable Components

Generic packages allow you to create parameterized packages that can work with different types or values. This is Ada's way of achieving generic programming, similar to templates in C++ or generics in Java.

**Purpose of Generic Packages:**

*   **Reusability:** Write a single package definition that can be used for various data types.
*   **Type Independence:** Create algorithms or data structures that are not tied to a specific type.
*   **Efficiency:** Avoid writing repetitive code for different types.

**Structure of a Generic Package:**

A generic package has a `generic` clause followed by parameters. These parameters can be:

*   **Types:** `type My_Param_Type is private;` (or `is limited private`, `is range <>;`, `is (<>);`, etc.)
*   **Objects:** `Obj_Param : Integer;`
*   **Subprograms:** `with function "=" (A, B : Param_Type) return Boolean;`

**Instantiating a Generic Package:**

You create a specific, non-generic package from a generic one using the `new` keyword.

**Syntax:**

```ada
-- Generic Package Specification: Container_ADT.ads
generic
    -- Generic Type Parameter: The type of elements the container will hold
    type Element_Type is private;
    -- Generic Object Parameter: A default value for elements
    with function Default_Value return Element_Type;
    -- Generic Subprogram Parameter: An equality comparison for elements
    with function Are_Equal (A, B : Element_Type) return Boolean is <>; -- '<>' means use default if provided

package Container_ADT is
    type Container is private;

    procedure Insert (C : in out Container; Item : Element_Type);
    function Retrieve (C : Container; Index : Integer) return Element_Type;
    function Is_Empty (C : Container) return Boolean;
    function Size (C : Container) return Integer;

    Container_Full_Error : exception;
    Invalid_Index_Error  : exception;

private
    type Container is limited private; -- Assume we don't want assignment of containers

end Container_ADT;

-- Generic Package Body: Container_ADT.adb
package body Container_ADT is
    -- Assume a simple array-based container for demonstration
    type Container is record
        Items : array (1 .. 100) of Element_Type; -- Fixed size for simplicity
        Count : Integer range 0 .. 100 := 0;
    end record;

    function Default_Value_Impl return Element_Type is
    begin
        return Default_Value; -- Uses the generic parameter
    end Default_Value_Impl;

    function Are_Equal_Impl (A, B : Element_Type) return Boolean is
    begin
        return Are_Equal(A, B); -- Uses the generic parameter
    end Are_Equal_Impl;

    procedure Insert (C : in out Container; Item : Element_Type) is
    begin
        if C.Count = 100 then
            raise Container_Full_Error;
        else
            C.Count := C.Count + 1;
            C.Items(C.Count) := Item;
        end if;
    end Insert;

    function Retrieve (C : Container; Index : Integer) return Element_Type is
    begin
        if Index < 1 or Index > C.Count then
            raise Invalid_Index_Error;
        end if;
        return C.Items(Index);
    end Retrieve;

    function Is_Empty (C : Container) return Boolean is
    begin
        return C.Count = 0;
    end Is_Empty;

    function Size (C : Container) return Integer is
    begin
        return C.Count;
    end Size;

end Container_ADT;

-- Main Program File: main_generic.adb

with Container_ADT;
with Ada.Text_IO; use Ada.Text_IO;
with Ada.Integer_Text_IO; use Ada.Integer_Text_IO;

procedure Main_Generic is

    -- Instance 1: A container for integers
    -- The generic parameters are inferred for Integer
    package Int_Container is new Container_ADT (<>, Default_Value => 0, Are_Equal => "=");
    -- '<>' for Element_Type means infer from other parameters or context
    -- More explicit: package Int_Container is new Container_ADT (Element_Type => Integer, Default_Value => 0, Are_Equal => "=");

    My_Int_Container : Int_Container.Container;

    -- Instance 2: A container for strings
    package String_Pkg is new Ada.Strings.Fixed.Bounded.Bounded_Vectors; -- Assuming a string type
    -- Let's assume a simple string type for demonstration
    type My_String is String(1 .. 20);
    function Default_String return My_String is begin return (others => ' '); end Default_String;
    function Compare_Strings (S1, S2 : My_String) return Boolean is begin return S1 = S2; end Compare_Strings;

    package String_Container is new Container_ADT (Element_Type => My_String,
                                                 Default_Value => Default_String,
                                                 Are_Equal => Compare_Strings);

    My_String_Container : String_Container.Container;

begin
    -- Using the integer container
    Int_Container.Insert(My_Int_Container, 10);
    Int_Container.Insert(My_Int_Container, 25);

    Put_Line("Integer Container Size: " & Integer'Image(Int_Container.Size(My_Int_Container)));
    Put_Line("Element at index 1: " & Integer'Image(Int_Container.Retrieve(My_Int_Container, 1)));

    -- Using the string container
    Int_Container.Insert(My_Int_Container, 50); -- Oops, type mismatch if not careful with instantiations

    Put_Line("--- String Container ---");
    declare
        Hello_Str : My_String := "Hello";
        World_Str : My_String := "World";
    begin
        String_Container.Insert(My_String_Container, Hello_Str);
        String_Container.Insert(My_String_Container, World_Str);
        Put_Line("String Container Size: " & Integer'Image(String_Container.Size(My_String_Container)));
        Put_Line("Element at index 2: " & String_Container.Retrieve(My_String_Container, 2));
    end;

end Main_Generic;
```

---

### Important Points to Remember

*   **Package Specification is the Contract:** It defines what the package offers to the outside world.
*   **Package Body is the Implementation:** It provides the details of *how* the package works.
*   **Information Hiding:** Use `private` types in the specification and keep implementation details (concrete types, private variables, helper subprograms) in the package body to achieve abstraction and encapsulation.
*   **`use` Clauses for Convenience, Qualification for Safety:** Prefer explicit qualification (`Package_Name.Entity_Name`) to avoid naming conflicts and ensure clarity, especially in larger projects.
*   **Generic Packages for Reusability:** Leverage generics to create flexible and reusable components for various data types.
*   **`limited private`:** Use `limited private` for types when you want to disallow assignment and equality operations, providing stronger encapsulation for your ADTs.
*   **Compilation Order:** The package specification must be compiled before any other unit that uses it. The package body can be compiled after the specification.

---

### Practice Questions and Exercises

**Question 1: Package Specification vs. Body**
Describe the primary purpose of an Ada package specification and an Ada package body. What is the relationship between them?

**Question 2: Information Hiding**
Consider a `Counter` package that maintains an integer count.
*   Write the package specification for `Counter`. It should include procedures `Increment` and `Reset`, and a function `Get_Value`.
*   Write the package body for `Counter`, implementing these operations. How is the internal counter variable hidden?

**Question 3: Visibility and Qualification**
Imagine you have two packages, `Math_Ops` and `String_Ops`, both exporting a procedure named `Process`.
*   How would you call `Process` from `Math_Ops` in a program that `use`s both packages?
*   What would happen if you tried to call `Process` without qualification in a program that `use`s both packages? How would you resolve this ambiguity?

**Question 4: Implementing an ADT (Queue)**
Implement a simple `Queue` ADT using an Ada package. The queue should support:
*   `type Queue is private;`
*   `procedure Enqueue (Q : in out Queue; Item : String);`
*   `procedure Dequeue (Q : in out Queue; Item : out String);`
*   `function Is_Empty (Q : Queue) return Boolean;`
*   `Queue_Empty_Error : exception;`

The internal representation of the queue can be a fixed-size array.

**Question 5: Generic Package (Stack)**
Create a generic Ada package for a `Stack` that can hold any `Element_Type`. It should also accept a generic `Max_Size` parameter.
*   Write the generic package specification for `Stack`.
*   Write the generic package body for `Stack`.
*   Show how to instantiate this generic `Stack` package to create a `Stack` of `Integer`s with a maximum size of 50.

---

### Answers to Practice Questions

**Answer 1: Package Specification vs. Body**

*   **Package Specification:** Declares the public interface of the package. It defines *what* the package provides (types, subprograms, exceptions, constants). It acts as a contract between the package implementer and its users.
*   **Package Body:** Provides the implementation details of the package. It contains the executable code for subprograms, private types, private variables, and initialization logic. It defines *how* the package's functionality is achieved.
*   **Relationship:** The specification defines the interface, and the body implements that interface. The body is dependent on the specification; the specification is not dependent on the body.

**Answer 2: Information Hiding (Counter Package)**

```ada
-- Specification: Counter_Pkg.ads
package Counter_Pkg is
    procedure Increment (C : in out Integer); -- Note: Modifying signature to show an Integer is passed
    procedure Reset;
    function Get_Value return Integer;
end Counter_Pkg;

-- Body: Counter_Pkg.adb
package body Counter_Pkg is
    -- The internal counter variable is hidden here.
    -- Users cannot access or modify it directly.
    Internal_Count : Integer := 0;

    procedure Increment (C : in out Integer) is -- Re-declare with correct signature
    begin
        -- This procedure is misleading if it doesn't increment internal_count
        -- Let's redefine to increment the internal count directly.
        null; -- Placeholder, will redefine below for clarity.
    end Increment;

    procedure Increment is -- A better signature for an ADT-like behavior
    begin
        Internal_Count := Internal_Count + 1;
    end Increment;

    procedure Reset is
    begin
        Internal_Count := 0;
    end Reset;

    function Get_Value return Integer is
    begin
        return Internal_Count;
    end Get_Value;

begin -- Initialization block
    -- Initialize Internal_Count if needed, though it's already initialized above
    Internal_Count := 0;
end Counter_Pkg;

-- Usage example:
-- with Counter_Pkg;
-- procedure Main is
-- begin
--     Counter_Pkg.Increment;
--     Counter_Pkg.Increment;
--     Put_Line(Integer'Image(Counter_Pkg.Get_Value)); -- Outputs 2
--     Counter_Pkg.Reset;
--     Put_Line(Integer'Image(Counter_Pkg.Get_Value)); -- Outputs 0
--     -- Internal_Count := 10; -- This would be a compile-time error.
-- end Main;
```
*(Self-correction: The initial `Increment` signature was problematic for a typical ADT style. The redefined `Increment` procedure that operates on `Internal_Count` directly is a better example of an ADT-like operation encapsulated within the package.)*

**Answer 3: Visibility and Qualification**

Let's assume:
`package Math_Ops is procedure Process; end Math_Ops;`
`package String_Ops is procedure Process; end String_Ops;`
`package body Math_Ops is ... end Math_Ops;`
`package body String_Ops is ... end String_Ops;`

In a program:
```ada
with Math_Ops;
with String_Ops;
use Math_Ops;
use String_Ops;

procedure Main is
begin
    -- Process; -- This would cause a compile-time error due to ambiguity.
    -- ...
end Main;
```

*   **Ambiguity:** If you `use` both packages, and they both export a `Process` procedure, calling `Process;` directly would lead to an ambiguous call, as the compiler wouldn't know which `Process` to invoke.

*   **Resolution:** To resolve the ambiguity, you must **qualify** the call:
    *   To call `Process` from `Math_Ops`: `Math_Ops.Process;`
    *   To call `Process` from `String_Ops`: `String_Ops.Process;`

**Answer 4: Implementing an ADT (Queue)**

```ada
-- Specification: Queue_ADT.ads
package Queue_ADT is
    type Queue is private;

    procedure Enqueue (Q : in out Queue; Item : String);
    procedure Dequeue (Q : in out Queue; Item : out String);
    function Is_Empty (Q : Queue) return Boolean;

    Queue_Empty_Error : exception;
    Queue_Full_Error  : exception; -- Added for completeness

private
    -- Max size for the queue
    Max_Size : constant := 10;
    type Queue is limited private; -- Use limited private for stronger encapsulation

end Queue_ADT;

-- Body: Queue_ADT.adb
package body Queue_ADT is
    type Queue is record
        Items : array (1 .. Max_Size) of String (1 .. 80); -- Example string length
        Front : Integer range 0 .. Max_Size := 0;
        Rear  : Integer range 0 .. Max_Size := 0;
        Count : Integer range 0 .. Max_Size := 0;
    end record;

    procedure Enqueue (Q : in out Queue; Item : String) is
    begin
        if Q.Count = Max_Size then
            raise Queue_Full_Error;
        end if;
        -- Handle wrap-around for circular queue if implemented.
        -- For simple linear:
        Q.Rear := Q.Rear + 1;
        Q.Items(Q.Rear) := Item;
        Q.Count := Q.Count + 1;
    end Enqueue;

    procedure Dequeue (Q : in out Queue; Item : out String) is
    begin
        if Is_Empty(Q) then
            raise Queue_Empty_Error;
        end if;
        -- Handle wrap-around for circular queue if implemented.
        -- For simple linear:
        Item := Q.Items(Q.Front + 1);
        Q.Front := Q.Front + 1;
        Q.Count := Q.Count - 1;
    end Dequeue;

    function Is_Empty (Q : Queue) return Boolean is
    begin
        return Q.Count = 0;
    end Is_Empty;

begin -- Initialization
    -- No specific initialization needed for this simple queue
    null;
end Queue_ADT;

-- Usage example:
-- with Queue_ADT;
-- with Ada.Text_IO; use Ada.Text_IO;
-- procedure Main_Queue is
--     My_Queue : Queue_ADT.Queue;
--     Dequeued_Item : String(1 .. 80);
-- begin
--     Queue_ADT.Enqueue(My_Queue, "First");
--     Queue_ADT.Enqueue(My_Queue, "Second");

--     if not Queue_ADT.Is_Empty(My_Queue) then
--         Queue_ADT.Dequeue(My_Queue, Dequeued_Item);
--         Put_Line("Dequeued: " & Dequeued_Item); -- Outputs "Dequeued: First"
--     end if;
-- end Main_Queue;
```

**Answer 5: Generic Package (Stack)**

```ada
-- Specification: Generic_Stack.ads
generic
    -- Generic Type Parameter
    type Element_Type is private;
    -- Generic Object Parameter for maximum size
    Max_Size : Positive;
begin
    -- Generic parameter validation can be done here, but usually handled by instantiation context.
end Generic_Stack;

generic
    -- Generic Type Parameter
    type Element_Type is private;
    -- Generic Object Parameter for maximum size
    Max_Size : Positive;
    -- Generic Subprogram Parameter (optional, for equality if needed)
    -- with function Are_Equal (A, B : Element_Type) return Boolean is <>;
package Generic_Stack is
    type Stack is limited private; -- Using limited private for better encapsulation

    procedure Push (S : in out Stack; Item : Element_Type);
    procedure Pop (S : in out Stack; Item : out Element_Type);
    function Is_Empty (S : Stack) return Boolean;
    function Is_Full (S : Stack) return Boolean;
    function Top_Element (S : Stack) return Element_Type; -- Optional: peek

    Stack_Empty_Error : exception;
    Stack_Full_Error  : exception;

private
    type Stack is record
        Items : array (1 .. Max_Size) of Element_Type;
        Top   : Integer range 0 .. Max_Size := 0;
    end record;

end Generic_Stack;

-- Body: Generic_Stack.adb
package body Generic_Stack is

    procedure Push (S : in out Stack; Item : Element_Type) is
    begin
        if S.Top = Max_Size then
            raise Stack_Full_Error;
        end if;
        S.Top := S.Top + 1;
        S.Items(S.Top) := Item;
    end Push;

    procedure Pop (S : in out Stack; Item : out Element_Type) is
    begin
        if Is_Empty(S) then
            raise Stack_Empty_Error;
        end if;
        Item := S.Items(S.Top);
        S.Top := S.Top - 1;
    end Pop;

    function Is_Empty (S : Stack) return Boolean is
    begin
        return S.Top = 0;
    end Is_Empty;

    function Is_Full (S : Stack) return Boolean is
    begin
        return S.Top = Max_Size;
    end Is_Full;

    function Top_Element (S : Stack) return Element_Type is
    begin
        if Is_Empty(S) then
            raise Stack_Empty_Error;
        end if;
        return S.Items(S.Top);
    end Top_Element;

end Generic_Stack;

-- Instantiation Example:
-- Main_Generic_Stack.adb
with Generic_Stack;
with Ada.Text_IO; use Ada.Text_IO;
with Ada.Integer_Text_IO; use Ada.Integer_Text_IO;

procedure Main_Generic_Stack is

    -- Instantiate the generic stack for Integers with a max size of 50
    package Int_Stack is new Generic_Stack (Element_Type => Integer, Max_Size => 50);

    My_Int_Stack : Int_Stack.Stack;

begin
    Int_Stack.Push(My_Int_Stack, 100);
    Int_Stack.Push(My_Int_Stack, 200);

    Put_Line("Is stack empty? " & Boolean'Image(Int_Stack.Is_Empty(My_Int_Stack)));
    Put_Line("Top element: " & Integer'Image(Int_Stack.Top_Element(My_Int_Stack)));

    declare
        Popped_Item : Integer;
    begin
        Int_Stack.Pop(My_Int_Stack, Popped_Item);
        Put_Line("Popped: " & Integer'Image(Popped_Item)); -- Outputs 200
        Put_Line("Top element after pop: " & Integer'Image(Int_Stack.Top_Element(My_Int_Stack))); -- Outputs 100
    end;

end Main_Generic_Stack;
