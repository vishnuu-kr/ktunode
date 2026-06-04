---
title: "Basic Semantics- Attributes, Binding, and Semantic Functions"
subject: "PROGRAMMING LANGUAGES"
module: "Module 2: Basic Semantics"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c67f"
status: "completed"
scrapedAt: "2026-05-20T17:09:21.581Z"
---
# Programming Languages: Module 2: Basic Semantics

## Topic: Attributes, Binding, and Semantic Functions

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the concept of attributes in programming languages.
*   Explain different types of attributes and their roles.
*   Define and differentiate between various binding times.
*   Describe the process and importance of binding.
*   Explain the role of semantic functions in analyzing and processing program elements.
*   Apply semantic functions to attribute grammar definitions.

---

### 1. Attributes

Attributes are properties or characteristics associated with language constructs. They carry information that is crucial for understanding and processing a program. Think of them as descriptive labels that provide context and meaning to different parts of the code.

#### Key Concepts and Definitions:

*   **Attribute:** A property of a programming language construct (e.g., variable, function, expression, statement).
*   **Semantic Information:** Attributes hold semantic information, which is about the meaning of the code, as opposed to syntactic information (structure).

#### Types of Attributes:

Attributes can be broadly categorized based on the information they represent and how they are computed.

*   **Synthesized Attributes:**
    *   **Definition:** Attributes whose values are computed from the attributes of their children in the parse tree.
    *   **Purpose:** Used to pass information *upwards* from sub-expressions or sub-structures to their parent.
    *   **Analogy:** Like the result of an arithmetic calculation being passed to the expression that contains it.
    *   **Example:** The *type* of an expression `a + b` depends on the types of `a` and `b`. The *value* of a numerical expression is computed from its operands.

*   **Inherited Attributes:**
    *   **Definition:** Attributes whose values are computed from the attributes of their parent and/or siblings in the parse tree.
    *   **Purpose:** Used to pass information *downwards* or *sideways* to sub-expressions or sub-structures.
    *   **Analogy:** Like passing down a symbol table or a scope declaration to nested blocks of code.
    *   **Example:** The *scope* of a variable declaration is inherited by all its uses within that scope. The *type* of a function call might depend on the type of the function identifier itself.

*   **Annotations:**
    *   **Definition:** Attributes that are directly attached to a parse tree node without necessarily following the synthesized/inherited dependency. They can be computed independently or through more complex relationships.
    *   **Purpose:** Often used for storing supplementary information or for intermediate results during semantic analysis.
    *   **Example:** The *line number* of a statement, the *memory address* assigned to a variable.

#### Examples of Attributes:

| Language Construct | Potential Attributes                                     | Attribute Type (Typical) |
| :----------------- | :------------------------------------------------------- | :----------------------- |
| **Variable**       | Type, Scope, Storage Location, Lifetime                  | Synthesized (Type, Location), Inherited (Scope) |
| **Expression**     | Type, Value (if constant), Register Allocation           | Synthesized              |
| **Statement**      | Control Flow Information, Target Labels                  | Synthesized, Inherited   |
| **Function**       | Return Type, Parameter Types, Scope                      | Synthesized (Return Type), Inherited (Scope) |
| **Identifier**     | Pointer to Symbol Table Entry, Type                      | Synthesized              |

---

### 2. Binding

Binding is the association of an attribute to a specific entity or value. It's the process of assigning meaning or characteristic to a language construct. The "when" of this association is crucial and defines different binding times.

#### Key Concepts and Definitions:

*   **Binding:** The process of associating an attribute with an entity (e.g., an identifier with a memory location, an operator with an operation).
*   **Entity:** A language construct like an identifier, operator, expression, statement, or data object.

#### Binding Times:

The time at which a binding occurs significantly impacts how a program behaves and how it can be optimized.

*   **Language Design Time:**
    *   **Description:** Bindings made when the programming language itself is designed.
    *   **Examples:** The syntax of keywords (e.g., `if`, `while`), the meaning of operators (e.g., `+` for addition), the number of bits used to represent integers.
    *   **Importance:** Defines the fundamental characteristics of the language.

*   **Language Implementation Time:**
    *   **Description:** Bindings made by the compiler or interpreter when implementing the language.
    *   **Examples:** The specific algorithm used for sorting, the choice of data structures for symbol tables, the precision of floating-point numbers.
    *   **Importance:** Influences the performance and efficiency of the language implementation.

*   **Compile Time (Static Binding):**
    *   **Description:** Bindings that can be determined *before* the program is executed, typically by the compiler.
    *   **Examples:** The type of a variable declared as `int x;`, the memory address of a global variable, the size of a statically allocated array.
    *   **Importance:** Allows for early error detection and optimizations.

*   **Load Time:**
    *   **Description:** Bindings that occur when a program is loaded into memory for execution.
    *   **Examples:** Dynamic linking of shared libraries, allocation of memory for global variables.
    *   **Importance:** Handles dependencies and memory management before execution begins.

*   **Execution Time (Dynamic Binding):**
    *   **Description:** Bindings that are made *during* the program's execution. These bindings can change from one execution to another or even multiple times within a single execution.
    *   **Examples:**
        *   **Variable to Memory Address:** In languages with dynamic memory allocation (e.g., `malloc` in C), a variable's address is bound when `malloc` is called.
        *   **Variable to Value:** The value of a variable changes as assignments are made.
        *   **Method Binding (Polymorphism):** In object-oriented programming, which method to call for a given object can be determined at runtime based on the object's actual type (e.g., virtual functions in C++, method dispatch in Java).
        *   **Type Binding:** In dynamically typed languages (e.g., Python, JavaScript), the type of a variable is not fixed at compile time and can change during execution.
    *   **Importance:** Provides flexibility and dynamism but can incur runtime overhead.

#### Important Points to Remember about Binding:

*   **Early Binding (Static Binding):** Generally preferred for efficiency and error checking as it occurs before execution.
*   **Late Binding (Dynamic Binding):** Offers flexibility and expressiveness but can lead to performance penalties and runtime errors.
*   **Identifier Binding:** A crucial aspect of binding is associating an identifier (a name) with a specific attribute like its type, memory location, or scope.

---

### 3. Semantic Functions

Semantic functions are the rules or operations that define how attribute values are computed. They are typically associated with the grammar rules of a programming language and are used to describe the meaning of language constructs.

#### Key Concepts and Definitions:

*   **Semantic Function:** A function that computes the value of an attribute based on the attribute values of other nodes in the parse tree (typically children for synthesized, parent/siblings for inherited).
*   **Attribute Grammar:** A formalism that extends context-free grammars by associating attributes and semantic functions with grammar rules. It provides a structured way to define and compute the meaning of programs.

#### How Semantic Functions Work:

Semantic functions are usually defined in conjunction with grammar production rules. For a production $A \rightarrow \alpha$, semantic functions can compute attributes of $A$ from attributes of the symbols in $\alpha$, or attributes of symbols in $\alpha$ from attributes of $A$ or other symbols in $\alpha$.

*   **For Synthesized Attributes:** If $X.a$ is a synthesized attribute of $X$, and $A \rightarrow Y_1 Y_2 ... Y_n$ is a production, then a semantic function would be defined for $X.a$ in terms of attributes of $Y_1, Y_2, ..., Y_n$.
    *   $X.a := f(Y_1.b, Y_2.c, ..., Y_n.d)$

*   **For Inherited Attributes:** If $Y_i.a$ is an inherited attribute of $Y_i$ in the production $A \rightarrow Y_1 Y_2 ... Y_n$, then a semantic function would be defined for $Y_i.a$ in terms of attributes of $A$ or its siblings $Y_j$.
    *   $Y_i.a := f(A.b, Y_{i-1}.c, Y_{i+1}.d)$

#### Examples using Attribute Grammars:

Let's consider a simple grammar for arithmetic expressions and define some semantic functions.

**Grammar:**
$E \rightarrow E + T \quad | \quad T$
$T \rightarrow T * F \quad | \quad F$
$F \rightarrow (E) \quad | \quad \text{num}$

**Attributes:**
*   `val`: The semantic value of an expression (synthesized).
*   `type`: The type of an expression (synthesized).

**Semantic Functions (for `val` attribute):**

For the production $E \rightarrow E_1 + T$:
*   $E.val := E_1.val + T.val$  (The value of the expression is the sum of the values of its sub-expressions)

For the production $E \rightarrow T$:
*   $E.val := T.val$ (The value of the expression is the value of the term)

For the production $T \rightarrow T_1 * F$:
*   $T.val := T_1.val * F.val$ (The value of the term is the product of the values of its sub-terms)

For the production $T \rightarrow F$:
*   $T.val := F.val$ (The value of the term is the value of the factor)

For the production $F \rightarrow (E)$:
*   $F.val := E.val$ (The value of the factor is the value of the expression within parentheses)

For the production $F \rightarrow \text{num}$:
*   $F.val := \text{num.lexval}$ (The value of the factor is the lexical value of the number token)

**Semantic Functions (for `type` attribute - assuming `int` and `float` types):**

For the production $E \rightarrow E_1 + T$:
*   $E.type := \text{type\_comb}(E_1.type, T.type, '+') $  (Type combination function for addition, which might promote types)

For the production $E \rightarrow T$:
*   $E.type := T.type$

For the production $T \rightarrow T_1 * F$:
*   $T.type := \text{type\_comb}(T_1.type, F.type, '*') $ (Type combination function for multiplication)

For the production $T \rightarrow F$:
*   $T.type := F.type$

For the production $F \rightarrow (E)$:
*   $F.type := E.type$

For the production $F \rightarrow \text{num}$:
*   $F.type := \text{type\_of}(\text{num.lexval})$ (Type of the number literal)

**Example of Execution (Parse Tree and Attribute Calculation):**

Consider the expression `(3 + 4) * 5`.

**Parse Tree (simplified):**

```
        E
        |
        T
        |
        F
       /|\
      / | \
     (  E  )
        |
        E_1
       /|\
      / | \
     E_2 + T_1
     |    |
     T_2  F_1
     |    |
     F_2  num(4)
     |
     num(3)
```

**Attribute Calculation (Bottom-up for synthesized attributes):**

1.  `num(3)`: `val = 3`, `type = int`
2.  `F_2`: `val = 3`, `type = int`
3.  `T_2`: `val = 3`, `type = int`
4.  `E_2`: `val = 3`, `type = int`
5.  `num(4)`: `val = 4`, `type = int`
6.  `F_1`: `val = 4`, `type = int`
7.  `T_1`: `val = 4`, `type = int`
8.  `E_1`: Production $E_1 \rightarrow E_2 + T_1$.
    *   $E_1.val = E_2.val + T_1.val = 3 + 4 = 7$
    *   $E_1.type = \text{type\_comb}(E_2.type, T_1.type, '+') = \text{type\_comb}(\text{int}, \text{int}, '+') = \text{int}$
9.  `(`: No attributes to compute here in this context.
10. `)`: No attributes to compute here in this context.
11. `E`: Production $F \rightarrow (E_1)$.
    *   $F.val = E_1.val = 7$
    *   $F.type = E_1.type = \text{int}$
12. `num(5)`: `val = 5`, `type = int`
13. `F_3`: `val = 5`, `type = int`
14. `T`: Production $T \rightarrow F_3$.
    *   $T.val = F_3.val = 5$
    *   $T.type = F_3.type = \text{int}$
15. `E`: Production $E \rightarrow T$. This is not the outermost production for this expression. Let's reconsider the overall structure. The expression `(3 + 4) * 5` has a structure like `Term * Factor` or `Expression + Term`.

Let's assume the parse tree structure for `(3 + 4) * 5` is:

```
          E
          |
          T
         /|\
        / | \
       T_1 * F_1
       |     |
       F_2   num(5)
      /|\
     / | \
    (  E_1 )
       |
       E_2
      /|\
     / | \
    E_3 + T_2
    |     |
    T_3   F_3
    |     |
    F_4   num(4)
    |
    num(3)
```

**Attribute Calculation for `(3 + 4) * 5`:**

1.  `num(3)`: `val=3`, `type=int`
2.  `F_4`: `val=3`, `type=int`
3.  `T_3`: `val=3`, `type=int`
4.  `E_3`: `val=3`, `type=int`
5.  `num(4)`: `val=4`, `type=int`
6.  `F_3`: `val=4`, `type=int`
7.  `T_2`: `val=4`, `type=int`
8.  `E_2`: Production $E_2 \rightarrow E_3 + T_2$.
    *   $E_2.val = E_3.val + T_2.val = 3 + 4 = 7$
    *   $E_2.type = \text{type\_comb}(E_3.type, T_2.type, '+') = \text{int}$
9.  `(`: Not a terminal in this context for attribute calculation.
10. `E_1`: Production $F_2 \rightarrow (E_2)$.
    *   $F_2.val = E_2.val = 7$
    *   $F_2.type = E_2.type = \text{int}$
11. `num(5)`: `val=5`, `type=int`
12. `F_1`: `val=5`, `type=int`
13. `T_1`: Production $T_1 \rightarrow F_2$. (This is where it gets tricky with the grammar, let's refine the parse for `*`)

Corrected Parse for `(3 + 4) * 5`:

```
        E
        |
        T
       /|\
      / | \
     T_1 * F_1
     |     |
     F_2   num(5)
    /|\
   / | \
  (  E_1 )
     |
     T_2
    /|\
   / | \
  T_3 + F_2
  |     |
  F_4   num(4)
  |
  num(3)
```

Let's re-trace with the correct structure and our grammar rules:

$E \rightarrow T$
$T \rightarrow T + F$ (This is incorrect, the original grammar was $E \rightarrow E + T$)

Let's use the original grammar correctly:
$E \rightarrow E + T \quad | \quad T$
$T \rightarrow T * F \quad | \quad F$
$F \rightarrow (E) \quad | \quad \text{num}$

Parse for `(3 + 4) * 5`:
The topmost rule applied must be one of the $E$ rules. Since it's a multiplication, it will eventually boil down to a $T$ which then boils down to an $F$ which is the term being multiplied.

```
           E
           |
           T
          /|\
         / | \
        T_1 * F_1
        |     |
        F_2   num(5)
       /|\
      / | \
     (  E_1 )
        |
        E_2
       /|\
      / | \
     E_3 + T_2
     |     |
     T_3   F_3
     |     |
     F_4   num(4)
     |
     num(3)
```
This still seems to apply $T \rightarrow T*F$ as the top level, but $E \rightarrow T$ should be the rule. The structure of the parse tree depends on the specific derivation. For `(3 + 4) * 5`, the most natural derivation path is:

$E \rightarrow T$
$T \rightarrow T * F$
$T \rightarrow F$ (for `(3 + 4)`)
$F \rightarrow (E)$
$E \rightarrow E + T$
$E \rightarrow T$ (for `3`)
$T \rightarrow F$
$F \rightarrow \text{num}$
And for `+ T`:
$T \rightarrow F$
$F \rightarrow \text{num}$

Let's trace the attribute calculation on a more suitable parse tree structure for `(3 + 4) * 5`:

```
            E
            |
            T
           /|\
          / | \
         T_1 * F_1
         |     |
         F_2   num(5)
        /|\
       / | \
      (  E_1 )
         |
         E_2
        /|\
       / | \
      E_3 + T_2
      |     |
      T_4   F_3
      |     |
      F_5   num(4)
      |
      num(3)
```

1.  `num(3)`: `val=3`, `type=int`
2.  `F_5`: `val=3`, `type=int`
3.  `T_4`: `val=3`, `type=int`
4.  `E_3`: `val=3`, `type=int`
5.  `num(4)`: `val=4`, `type=int`
6.  `F_3`: `val=4`, `type=int`
7.  `T_2`: `val=4`, `type=int`
8.  `E_2`: Production $E_2 \rightarrow E_3 + T_2$.
    *   $E_2.val = E_3.val + T_2.val = 3 + 4 = 7$
    *   $E_2.type = \text{type\_comb}(E_3.type, T_2.type, '+') = \text{int}$
9.  `F_2`: Production $F \rightarrow (E)$.
    *   $F_2.val = E_2.val = 7$
    *   $F_2.type = E_2.type = \text{int}$
10. `E_1`: Production $E \rightarrow T$. (This is where the outer structure is determined)
    *   $E_1.val = F_2.val = 7$
    *   $E_1.type = F_2.type = \text{int}$
11. `num(5)`: `val=5`, `type=int`
12. `F_1`: `val=5`, `type=int`
13. `T_1`: Production $T \rightarrow F_1$.
    *   $T_1.val = F_1.val = 5$
    *   $T_1.type = F_1.type = \text{int}$
14. `T`: Production $T \rightarrow T_1 * F_1$. (This seems incorrect. The `*` is between `(3+4)` and `5`)

Let's reconsider the structure for `(3 + 4) * 5` and the grammar. The `*` operator has higher precedence than `+`.

Correct Parse Tree for `(3 + 4) * 5`:

```
              E
              |
              T
             /|\
            / | \
           T_1 * F_1
           |     |
           F_2   num(5)
          /|\
         / | \
        (  E_1 )
           |
           T_2
          /|\
         / | \
        T_3 + F_2
        |     |
        F_4   num(4)
        |
        num(3)
```
Wait, this implies `+` has higher precedence than `*` because `*` is applied at a higher level. Our grammar definition does not enforce precedence rules correctly without more production rules or semantic actions.

Let's assume a grammar that handles precedence:
$E \rightarrow T \{ + T \}$
$T \rightarrow F \{ * F \}$
$F \rightarrow (E) | \text{id} | \text{num}$
(Where $\{ \dots \}$ means zero or more occurrences and `{ op }` implies associating the operation). This is more of an operational description.

A more standard attribute grammar way to handle precedence is with different non-terminals for different precedence levels:

$E \rightarrow E + T \quad | \quad T$  (Handles addition)
$T \rightarrow T * F \quad | \quad F$  (Handles multiplication)
$F \rightarrow (E) \quad | \quad \text{num} \quad | \quad \text{id}$ (Handles factors, parentheses, identifiers, numbers)

For `(3 + 4) * 5`:
The outermost operator is `*`. So, the structure will be `T * F`.
The `T` part is `(3 + 4)`.
The `F` part is `5`.

Parse Tree Structure for `(3 + 4) * 5`:

```
              E
              |
              T
             /|\
            / | \
           T_1 * F_1
           |     |
           F_2   num(5)
          /|\
         / | \
        (  E_1 )
           |
           E_2
          /|\
         / | \
        E_3 + T_2
        |     |
        T_4   F_3
        |     |
        F_5   num(4)
        |
        num(3)
```

**Attribute Calculation for `(3 + 4) * 5` with the standard grammar:**

1.  `num(3)`: `val=3`, `type=int`
2.  `F_5`: `val=3`, `type=int`
3.  `T_4`: `val=3`, `type=int`
4.  `E_3`: `val=3`, `type=int`
5.  `num(4)`: `val=4`, `type=int`
6.  `F_3`: `val=4`, `type=int`
7.  `T_2`: `val=4`, `type=int`
8.  `E_2`: Production $E_2 \rightarrow E_3 + T_2$.
    *   $E_2.val = E_3.val + T_2.val = 3 + 4 = 7$
    *   $E_2.type = \text{type\_comb}(E_3.type, T_2.type, '+') = \text{int}$
9.  `F_2`: Production $F \rightarrow (E_2)$.
    *   $F_2.val = E_2.val = 7$
    *   $F_2.type = E_2.type = \text{int}$
10. `E_1`: Production $E \rightarrow T$.
    *   $E_1.val = F_2.val = 7$
    *   $E_1.type = F_2.type = \text{int}$
11. `num(5)`: `val=5`, `type=int`
12. `F_1`: `val=5`, `type=int`
13. `T`: Production $T \rightarrow T_1 * F_1$. This implies $T_1$ is the left operand. The grammar $T \rightarrow T * F$ allows left associativity.
    *   So, $T_1$ must be derived from $F_2$.
    *   $T_1$ is `(3+4)`. So $T_1$ is derived from $F_2$.
    *   Let's fix the parse tree representation to be accurate:

Corrected Parse Tree for `(3 + 4) * 5` based on grammar and precedence:

```
              E
              |
              T
             /|\
            / | \
           T_1 * F_1
           |     |
           F_2   num(5)
          /|\
         / | \
        (  E_1 )
           |
           E_2
          /|\
         / | \
        E_3 + T_2
        |     |
        T_4   F_3
        |     |
        F_5   num(4)
        |
        num(3)
```

Let's re-trace attribute calculations carefully.

1.  `num(3)`: `val=3`, `type=int`
2.  `F_5`: `val=3`, `type=int`
3.  `T_4`: `val=3`, `type=int`
4.  `E_3`: `val=3`, `type=int`
5.  `num(4)`: `val=4`, `type=int`
6.  `F_3`: `val=4`, `type=int`
7.  `T_2`: `val=4`, `type=int`
8.  `E_2`: Production $E_2 \rightarrow E_3 + T_2$.
    *   $E_2.val = E_3.val + T_2.val = 3 + 4 = 7$
    *   $E_2.type = \text{type\_comb}(E_3.type, T_2.type, '+') = \text{int}$
9.  `F_2`: Production $F \rightarrow (E_2)$.
    *   $F_2.val = E_2.val = 7$
    *   $F_2.type = E_2.type = \text{int}$
10. `E_1`: Production $E \rightarrow T$. This is the rule for the entire expression `(3+4)`.
    *   $E_1.val = F_2.val = 7$
    *   $E_1.type = F_2.type = \text{int}$
11. `num(5)`: `val=5`, `type=int`
12. `F_1`: `val=5`, `type=int`
13. `T_1`: Production $T \rightarrow F_2$. (Here $T_1$ is derived from $F_2$, which represents `(3+4)`)
    *   $T_1.val = F_2.val = 7$
    *   $T_1.type = F_2.type = \text{int}$
14. `T`: Production $T \rightarrow T_1 * F_1$.
    *   $T.val = T_1.val * F_1.val = 7 * 5 = 35$
    *   $T.type = \text{type\_comb}(T_1.type, F_1.type, '*') = \text{int}$
15. `E`: Production $E \rightarrow T$.
    *   $E.val = T.val = 35$
    *   $E.type = T.type = \text{int}$

**Important Note:** The exact structure of the parse tree and the order of attribute evaluation depend on the specific grammar and the chosen evaluation strategy (e.g., bottom-up, top-down, or dependency graph-based).

#### Types of Semantic Functions:

*   **Data Type Computation:** Determining the type of expressions and variables.
*   **Address Calculation:** Computing memory locations for variables.
*   **Symbol Table Management:** Storing and retrieving information about identifiers.
*   **Control Flow Analysis:** Analyzing the sequence of execution.
*   **Optimization:** Generating intermediate code or optimizing the code.

---

### Practice Questions and Exercises

1.  **Attribute Classification:** For each of the following attributes, identify whether it is typically synthesized or inherited, and explain why:
    *   The type of an array declaration.
    *   The loop counter variable in a `for` loop.
    *   The base address of an array.
    *   The return type of a function.
    *   The current scope identifier.

2.  **Binding Times:** Identify the binding time for each of the following:
    *   The operation performed by the `+` operator.
    *   The memory location of a global variable.
    *   The dynamic type of an object in a polymorphic call.
    *   The data type of a variable declared with a fixed type (e.g., `int x;`).
    *   The algorithm used by a sorting function.

3.  **Attribute Grammar Application:** Consider the following simple grammar for assignment statements and the attribute `loc` (memory location) and `type` for expressions.
    $S \rightarrow id := E$
    $E \rightarrow id \quad | \quad num$

    Define semantic functions to compute:
    *   The `loc` attribute for the `id` on the left-hand side of the assignment.
    *   The `type` attribute for the expression `E`. Assume `id` has a `type` attribute and `num` has a type `integer`.

4.  **Synthesized vs. Inherited Example:** Explain a scenario where an inherited attribute is necessary to correctly determine a synthesized attribute.

---

### Answers to Practice Questions

1.  **Attribute Classification:**
    *   **Type of an array declaration:** Typically **synthesized**. The type of the array depends on the type of its elements and its dimensions.
    *   **Loop counter variable in a `for` loop:** Can be **inherited** by the loop body to know which variable to increment/check, and **synthesized** to hold the final value of the counter after the loop. In the context of its declaration and usage within the loop, it might be more seen as an identifier with its properties (type, scope) which are inherited by uses.
    *   **Base address of an array:** Typically **synthesized**. The base address is calculated from the memory allocation of the array.
    *   **Return type of a function:** Typically **synthesized**. It's determined by the function's definition and its return statements.
    *   **Current scope identifier:** Typically **inherited**. The current scope needs to be passed down to nested blocks and nested declarations to ensure correct name resolution.

2.  **Binding Times:**
    *   **Operation of `+` operator:** **Language Design Time**.
    *   **Memory location of a global variable:** **Compile Time** (or **Load Time** for dynamically linked libraries).
    *   **Dynamic type of an object in a polymorphic call:** **Execution Time**.
    *   **Data type of `int x;`:** **Compile Time**.
    *   **Algorithm for a sorting function:** **Language Implementation Time** (or could be **Execution Time** if the user selects the algorithm dynamically).

3.  **Attribute Grammar Application:**
    Assume the grammar:
    $S \rightarrow id := E$
    $E \rightarrow id_1 \quad | \quad num$

    Attributes:
    *   `loc(id)`: Memory location of the identifier.
    *   `type(E)`: Type of the expression.
    *   `type(id)`: Type of the identifier (pre-defined).
    *   `type(num)`: Type of the number literal (pre-defined as `integer`).

    Semantic Functions:

    *   For the `loc` attribute of the `id` on the left-hand side of the assignment:
        Production: $S \rightarrow id := E$
        Semantic Function: $id.loc := \text{lookup}(id.name)$
        (Where `lookup` finds the memory location of the identifier `id.name` in the symbol table). This is assuming the `id` on the LHS is the target of the assignment, and its location is already known. If we're generating the location, it might be assigned differently. Let's assume `id.loc` is an attribute of the *identifier node* in the parse tree.

    *   For the `type` attribute of the expression `E`:
        Production: $E \rightarrow id_1$
        Semantic Function: $E.type := id_1.type$

        Production: $E \rightarrow num$
        Semantic Function: $E.type := \text{integer}$ (Assuming `num` is always an integer literal)

    *   *Implicit requirement*: The assignment statement itself implies type checking. A more complete semantic rule would be to check if `E.type` is compatible with `id.type` (the type of the `id` on the LHS). If so, no further type attribute is needed for the statement itself, but a check must occur.

    Let's refine the semantic function for `id.loc`. If we are building a symbol table and assigning locations during semantic analysis, a suitable function could be:

    Production: $S \rightarrow id := E$
    Semantic Function for the `id` node: $id.loc := \text{allocate\_memory}(id.type)$
    (This would be called once the `id` is declared and its type is known).

    Or, if `id.loc` is an inherited attribute that comes from a declaration:

    Let's assume `id` is declared with `type` and `loc` attributes.

    Grammar with declaration:
    $D \rightarrow id : T$
    $T \rightarrow int \quad | \quad float$

    For production $D \rightarrow id : T$:
    Semantic function for `id`:
    *   $id.type := T.type$
    *   $id.loc := \text{allocate\_memory}(id.type)$

    Then for $S \rightarrow id := E$:
    *   Check if $E.type$ is assignment-compatible with $id.type$.
    *   $S.type := \text{void}$ (or irrelevant)

4.  **Synthesized vs. Inherited Example:**
    Consider a nested block structure in a programming language.
    ```
    { // Outer block scope = "global"
        int x;
        { // Inner block scope = "inner1"
            int y;
            x = 5; // Use of 'x' from outer scope
            y = 10; // Use of 'y' from inner scope
        }
        // 'y' is no longer accessible here
    }
    ```
    To correctly resolve the usage of `x` in the inner block, the **scope identifier** ("global") needs to be passed down from the outer block to the inner block. This is an **inherited attribute** for the inner block.

    Now, consider the *type* of a variable `x`. When `x` is declared in the outer block, its type (e.g., `int`) is determined. This type information needs to be associated with the identifier `x` *wherever it is used*, including in the inner block. The type of `x` in the statement `x = 5;` is a **synthesized attribute** of the expression `x` within that statement, but its value is *derived* from the inherited type information passed down from its declaration.

    More precisely, the `scope` is inherited by the inner block's parse tree nodes. The `type` of `x` might be a synthesized attribute of its declaration node, and this type information is then passed (potentially as an inherited attribute or via a symbol table lookup) to the usage of `x` in the inner block.

---

### Important Points to Remember:

*   **Attributes provide the meaning:** While syntax defines the structure, attributes define the semantic properties of language constructs.
*   **Binding is association:** It's about linking an attribute to a specific entity.
*   **Binding time matters:** Static bindings are generally more efficient and safer; dynamic bindings offer flexibility.
*   **Synthesized vs. Inherited:** This distinction is crucial for understanding how information flows in semantic analysis. Synthesized attributes pass information up, while inherited attributes pass information down or sideways.
*   **Semantic functions are the rules:** They define how attributes are computed, forming the basis of attribute grammars.
*   **Attribute grammars are powerful:** They can describe a wide range of semantic properties, including type checking, memory allocation, and code generation.
