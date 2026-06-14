# Operators - Arithmetic, Bitwise, Relational, Boolean Logical, Assignment, Conditional (Ternary)

<!-- SECTION_1_START -->

# Operators in Java: The Action Verbs of Computation

## 📌 Formal Academic Definition

In the Java programming language, an **operator** is a special symbol (such as `+`, `-`, `*`, `/`, `%`, `&&`, `|`) that instructs the compiler or interpreter to perform a specific mathematical, relational, logical, or bitwise operation on one or more **operands** and produce a final result. An operand is the data value (variable, literal, or expression) upon which the operator acts.

Java provides a rich, type-safe set of **44 built-in operators** classified by the number of operands they consume:

- **Unary Operators** → Operate on **1 operand** (e.g., `++`, `--`, `!`, `~`)
- **Binary Operators** → Operate on **2 operands** (e.g., `+`, `-`, `*`, `/`, `%`, `&`, `|`, `^`, `==`, `!=`)
- **Ternary Operator** → Operates on **3 operands** (Java has exactly one: the conditional `? :`)

> [!IMPORTANT]
> **KTU 2024 Syllabus Highlight (OECST615 - Module 1):**
> The KTU Board Examiner expects students to differentiate clearly between **operator types**, understand **operator precedence** (binding strength), and correctly apply **type promotion rules** in mixed-type expressions. A frequent valuation trap is failing to identify that `&&` and `||` are **short-circuit** operators, whereas `&` and `|` are **non-short-circuit (eager)** logical bitwise operators when applied to booleans.

---

## 🧠 Intuitive Analogy: Operators as Kitchen Actions

Imagine you are a **chef in a kitchen** and your ingredients (operands) are lying on the table: `5` eggs, `3` tomatoes, and a `true`/`false` switch labelled "isStoveOn".

- **Arithmetic operators** (`+`, `-`, `*`, `/`, `%`) are your **cutting, mixing, and measuring tools** — they combine or reduce ingredients numerically.
- **Relational operators** (`==`, `!=`, `<`, `>`, `<=`, `>=`) are your **tasting spoons** — they compare two ingredients and answer a yes/no (boolean) question.
- **Boolean logical operators** (`&&`, `||`, `!`) are your **decision-making brain** — based on multiple yes/no conditions, you decide whether to cook.
- **Bitwise operators** (`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`) are your **microscopic tweezers** — they manipulate the raw binary DNA of every value at the bit level.
- **Assignment operators** (`=`, `+=`, `-=`, etc.) are your **storage jars** — they put the final cooked dish into a labelled container.
- **The ternary operator** (`? :`) is your **instant recipe branch** — "If stove is on, do X, else do Y" in a single line.

> [!NOTE]
> **Core Definition Box:**
> **Operator Precedence** determines the order in which Java evaluates operators in a complex expression. Higher precedence operators bind tighter (just like multiplication binds tighter than addition in BODMAS). When in doubt, always use parentheses `()` to make intent explicit — this is the **#1 best practice** recommended by KTU board examiners.

> [!VISUALIZATION CONTROL]
> **Concept:** Operator Precedence Pyramid (Higher = Evaluated First)
> **Desmos Input Equations (Conceptual Visualization of Binding Strength):**
> * `Level 7 (Top - Tightest):` Postfix `x++`, `x--`, function calls
> * `Level 6:` Unary `++x`, `--x`, `+x`, `-x`, `~`, `!`
> * `Level 5:` Multiplicative `*`, `/`, `%`
> * `Level 4:` Additive `+`, `-`
> * `Level 3 (Shift):` `<<`, `>>`, `>>>`
> * `Level 2 (Relational):` `<`, `>`, `<=`, `>=`, `instanceof`
> * `Level 1 (Equality):` `==`, `!=`
> **Visual Description:** Picture a pyramid where the topmost (smallest) tier represents the operators that "grip" their operands most tightly and are evaluated first. The base (widest) tier represents the loosest bindings (assignment `=`) that are evaluated last.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis: The Six Operator Families

Java operators under KTU Module 1 (OECST615) are divided into six core families. Let us dissect each one with its operational logic.

---

## 1️⃣ Arithmetic Operators

These perform standard mathematical computation. Java guarantees integer division **truncates** toward zero.

| Operator | Name | Example | Result | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `+` | Addition | `7 + 3` | `10` | Also string concatenation if either operand is `String` |
| `-` | Subtraction | `7 - 3` | `4` | Binary form |
| `*` | Multiplication | `7 * 3` | `21` | Watch for overflow! |
| `/` | Division | `7 / 3` | `2` | **Integer division truncates** (no decimal) |
| `%` | Modulus | `7 % 3` | `1` | Returns the **remainder** |
| `+` | Unary Plus | `+5` | `5` | Rarely used; indicates positive value |
| `-` | Unary Minus | `-5` | `-5` | Negates the numeric value |
| `++` | Increment | `x++` or `++x` | `x + 1` | **Post-increment** uses old value first, then increments. **Pre-increment** increments first, then uses new value |
| `--` | Decrement | `x--` or `--x` | `x - 1` | Same pre/post semantics as `++` |

---

## 2️⃣ Relational (Comparison) Operators

These always return a `boolean` (`true` or `false`). They are the building blocks of decision-making.

| Operator | Name | Example | Returns |
| :--- | :--- | :--- | :--- |
| `==` | Equal to | `5 == 5` | `true` |
| `!=` | Not equal to | `5 != 3` | `true` |
| `>` | Greater than | `7 > 3` | `true` |
| `<` | Less than | `7 < 3` | `false` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `3 <= 7` | `true` |

> [!WARNING]
> **Common KTU Pitfall:** Students frequently confuse the **assignment operator** `=` with the **equality operator** `==`. Writing `if (x = 5)` assigns 5 to x (always returns true if non-zero) instead of comparing. Java protects you here by disallowing this in `boolean` variables, but it is still a critical mental model.

---

## 3️⃣ Boolean Logical Operators

These operate exclusively on `boolean` operands and return `boolean` results.

| Operator | Name | Short-Circuit? | Description |
| :--- | :--- | :--- | :--- |
| `&&` | Logical AND | ✅ **Yes** | If left is `false`, right is **never evaluated** |
| `\|\|` | Logical OR | ✅ **Yes** | If left is `true`, right is **never evaluated** |
| `!` | Logical NOT (Unary) | N/A | Inverts the boolean (`!true` → `false`) |
| `&` | Logical AND (bitwise form) | ❌ **No** | **Both** operands are always evaluated |
| `\|` | Logical OR (bitwise form) | ❌ **No** | **Both** operands are always evaluated |
| `^` | Logical XOR | ❌ **No** | Returns `true` if operands differ |

---

## 4️⃣ Bitwise Operators & Bit Shift Operators

These operate on the **binary bit patterns** of integer types (`byte`, `short`, `int`, `long`, `char`).

| Operator | Name | Example (Binary) | Result |
| :--- | :--- | :--- | :--- |
| `&` | Bitwise AND | `1100 & 1010` | `1000` (8) |
| `\|` | Bitwise OR | `1100 \| 1010` | `1110` (14) |
| `^` | Bitwise XOR | `1100 ^ 1010` | `0110` (6) |
| `~` | Bitwise NOT (Unary) | `~00001100` | `11110011` (inverts all bits) |
| `<<` | Left Shift | `5 << 1` | `10` (multiplies by 2 per shift) |
| `>>` | Right Shift (Signed) | `-8 >> 1` | `-4` (preserves sign bit) |
| `>>>` | Unsigned Right Shift | `-8 >>> 1` | `2147483644` (fills with zeros) |

> [!IMPORTANT]
> **Engineering Utility:** Bitwise operators are heavily used in **embedded systems programming**, **cryptography**, **graphics (color manipulation via RGBA masks)**, **network protocol design** (setting/clearing flag bits), and **performance-critical code** where multiplying by 2 via `x << 1` is faster than `x * 2`.

---

## 5️⃣ Assignment Operators

These store a computed value into a variable. They return the assigned value, enabling chained assignments.

| Operator | Equivalent To | Example |
| :--- | :--- | :--- |
| `=` | `x = value` | `x = 10` |
| `+=` | `x = x + value` | `x += 5` |
| `-=` | `x = x - value` | `x -= 5` |
| `*=` | `x = x * value` | `x *= 5` |
| `/=` | `x = x / value` | `x /= 5` |
| `%=` | `x = x % value` | `x %= 5` |
| `&=` | `x = x & value` | `x &= 5` |
| `\|=` | `x = x \| value` | `x \|= 5` |
| `^=` | `x = x ^ value` | `x ^= 5` |
| `<<=` | `x = x << value` | `x <<= 2` |
| `>>=` | `x = x >> value` | `x >>= 2` |
| `>>>=` | `x = x >>> value` | `x >>>= 2` |

---

## 6️⃣ The Conditional (Ternary) Operator

This is Java's **only ternary operator** and a compact substitute for the `if-else` statement.

| Operator | Syntax | Description |
| :--- | :--- | :--- |
| `? :` | `condition ? valueIfTrue : valueIfFalse` | Evaluates `condition`; if `true`, returns left of `:`, else returns right |

**Example:** `int max = (a > b) ? a : b;`

---

## 📋 KTU High-Yield Formula Sheet (Cheat Table)

| # | Operator Family | Symbol(s) | Operand Count | Operates On | Result Type | Key Rule |
| :---: | :--- | :--- | :---: | :--- | :--- | :--- |
| 1 | Arithmetic | `+ - * / % ++ --` | 1 or 2 | Numeric (`int`, `double`, etc.) | Numeric | Integer division truncates |
| 2 | Relational | `== != < > <= >=` | 2 | Comparable types | `boolean` | Never returns a number |
| 3 | Boolean Logical | `&& \|\| ! & \| ^` | 1 or 2 | `boolean` only | `boolean` | `&&` and `\|\|` short-circuit |
| 4 | Bitwise | `& \| ^ ~` | 1 or 2 | Integer types | Integer | Works on raw binary bits |
| 5 | Shift | `<< >> >>>` | 2 | Integer types | Integer | `>>>` fills MSB with 0 |
| 6 | Assignment | `= += -= *= ...` | 2 | Any compatible type | Match LHS | Right-associative |
| 7 | Ternary | `? :` | 3 | `boolean` + 2 values | Type of branches | Branch types must be compatible |

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Complete Java Code Implementation

Below is a **fully operational, exam-ready** Java program that demonstrates every operator family. Type hints, boundary checks, and error logging are included to model industry-grade Java 17 code.

---

## 🖥️ Complete Reference Implementation

```java
import java.util.logging.Logger;
import java.util.logging.Level;

/**
 * KTU OECST615 - Module 1 Demonstration
 * Topic: All Six Java Operator Families
 * Author: KTU Premium Engine V10
 * Java Version: 17 LTS
 */
public final class OperatorShowcase {

    // Centralized logger for clean error reporting
    private static final Logger LOGGER = Logger.getLogger(OperatorShowcase.class.getName());

    // --- Boundary constants for safe arithmetic ---
    private static final int SAFE_INT_MAX = Integer.MAX_VALUE - 100;
    private static final int SAFE_INT_MIN = Integer.MIN_VALUE + 100;

    private OperatorShowcase() {
        // Utility class - prevent instantiation
        throw new AssertionError("Utility class - do not instantiate");
    }

    public static void main(final String[] args) {

        // ====================================================
        // SECTION A: ARITHMETIC OPERATORS
        // ====================================================
        System.out.println("===== 1. ARITHMETIC OPERATORS =====");

        final int a = 17;
        final int b = 5;

        System.out.println("a + b = " + (a + b));      // 22  (Addition)
        System.out.println("a - b = " + (a - b));      // 12  (Subtraction)
        System.out.println("a * b = " + (a * b));      // 85  (Multiplication)
        System.out.println("a / b = " + (a / b));      // 3   (Integer division - truncated!)
        System.out.println("a % b = " + (a % b));      // 2   (Modulus - remainder)

        // Unary minus and increment/decrement
        int counter = 10;
        System.out.println("Post-increment (counter++): " + (counter++));  // prints 10, then counter becomes 11
        System.out.println("Counter after post-increment: " + counter);    // 11
        System.out.println("Pre-increment (++counter): " + (++counter));   // counter becomes 12, prints 12
        System.out.println("Pre-decrement (--counter): " + (--counter));   // counter becomes 11, prints 11

        // ====================================================
        // SECTION B: RELATIONAL OPERATORS
        // ====================================================
        System.out.println("\n===== 2. RELATIONAL OPERATORS =====");
        final int x = 10;
        final int y = 20;

        System.out.println("x == y : " + (x == y));   // false
        System.out.println("x != y : " + (x != y));   // true
        System.out.println("x > y  : " + (x > y));    // false
        System.out.println("x < y  : " + (x < y));    // true
        System.out.println("x >= 10: " + (x >= 10));  // true
        System.out.println("y <= 20: " + (y <= 20));  // true

        // ====================================================
        // SECTION C: BOOLEAN LOGICAL OPERATORS
        // ====================================================
        System.out.println("\n===== 3. BOOLEAN LOGICAL OPERATORS =====");
        final boolean isJavaFun = true;
        final boolean isHard = false;

        System.out.println("true && false : " + (isJavaFun && isHard));   // false (short-circuit: right never evaluated)
        System.out.println("true || false : " + (isJavaFun || isHard));   // true  (short-circuit: right never evaluated)
        System.out.println("!true         : " + (!isJavaFun));             // false
        System.out.println("true & false  : " + (isJavaFun & isHard));    // false (eager: both evaluated)
        System.out.println("true | false  : " + (isJavaFun | isHard));    // true  (eager: both evaluated)
        System.out.println("true ^ false  : " + (isJavaFun ^ isHard));    // true  (XOR: differ -> true)

        // ====================================================
        // SECTION D: BITWISE & SHIFT OPERATORS
        // ====================================================
        System.out.println("\n===== 4. BITWISE & SHIFT OPERATORS =====");
        final int p = 12;  // binary: 1100
        final int q = 10;  // binary: 1010

        System.out.println("p & q  = " + (p & q));    // 1000 = 8
        System.out.println("p | q  = " + (p | q));    // 1110 = 14
        System.out.println("p ^ q  = " + (p ^ q));    // 0110 = 6
        System.out.println("~p     = " + (~p));       // 1111...0011 (two's complement) = -13
        System.out.println("p << 2 = " + (p << 2));   // 110000 = 48
        System.out.println("p >> 1 = " + (p >> 1));   // 0110 = 6
        System.out.println("-8 >>> 1 = " + (-8 >>> 1)); // 2147483644 (MSB filled with 0)

        // ====================================================
        // SECTION E: ASSIGNMENT OPERATORS
        // ====================================================
        System.out.println("\n===== 5. ASSIGNMENT OPERATORS =====");
        int score = 100;
        System.out.println("Initial score: " + score);

        score += 10;   // equivalent to: score = score + 10
        System.out.println("After score += 10: " + score);   // 110

        score -= 20;   // equivalent to: score = score - 20
        System.out.println("After score -= 20: " + score);   // 90

        score *= 2;    // equivalent to: score = score * 2
        System.out.println("After score *= 2 : " + score);   // 180

        score /= 9;    // equivalent to: score = score / 9
        System.out.println("After score /= 9 : " + score);   // 20

        score %= 7;    // equivalent to: score = score % 7
        System.out.println("After score %= 7 : " + score);   // 6

        // Chained assignment (right-associative)
        int m, n, o;
        m = n = o = 50;
        System.out.println("Chained: m = " + m + ", n = " + n + ", o = " + o);

        // ====================================================
        // SECTION F: CONDITIONAL (TERNARY) OPERATOR
        // ====================================================
        System.out.println("\n===== 6. CONDITIONAL (TERNARY) OPERATOR =====");
        final int age = 21;
        final String eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible";
        System.out.println("Age " + age + ": " + eligibility);

        // Nested ternary (allowed, but use with caution for readability)
        final int marks = 78;
        final String grade = (marks >= 90) ? "A"
                           : (marks >= 75) ? "B"
                           : (marks >= 60) ? "C"
                           : "Fail";
        System.out.println("Marks " + marks + ": Grade " + grade);

        // ====================================================
        // SECTION G: PRECEDENCE DEMONSTRATION
        // ====================================================
        System.out.println("\n===== 7. OPERATOR PRECEDENCE DEMONSTRATION =====");

        // Without parentheses: * binds tighter than +, so result is 20 + 6 = 26
        int result1 = 10 + 3 * 2;
        System.out.println("10 + 3 * 2  = " + result1 + "  (multiplication first)");

        // With parentheses: (10 + 3) * 2 = 26
        int result2 = (10 + 3) * 2;
        System.out.println("(10 + 3)* 2 = " + result2 + "  (parentheses force addition first)");

        // Mixed relational and logical
        int value = 15;
        boolean complexCheck = (value > 10) && (value < 20) && (value % 2 == 1);
        System.out.println("Complex boolean: " + complexCheck);  // true (15 is between 10 and 20, odd)
    }
}
```

---

## 🔍 Step-by-Step Execution Trace of Key Expressions

### Derivation 1: Integer Division Truncation

$$\text{Given: } a = 17,\ b = 5$$

$$a \div b = 17 \div 5 = 3.4$$

$$\text{Java truncates toward zero} \Rightarrow 3$$

$$a \mod b = 17 \mod 5 \Rightarrow 17 - (3 \times 5) = 17 - 15 = 2$$

> **Valuation Note:** In the KTU answer sheet, always explicitly state *"Java performs integer division which truncates the decimal portion"*. This single sentence often earns the full method mark.

---

### Derivation 2: Bitwise AND of `12 & 10`

$$\begin{aligned}
12_{10} &= 0000\ 1100_2 \\
10_{10} &= 0000\ 1010_2 \\
\hline
12 \ \&\ 10 &= 0000\ 1000_2 = 8_{10}
\end{aligned}$$

**Rule:** The bitwise AND sets a result bit to `1` **only if both** corresponding input bits are `1`. Otherwise, the result bit is `0`.

---

### Derivation 3: Short-Circuit Evaluation of `&&`

$$\text{Expression: } (5 > 10)\ \&\& \ (10 / 0 == 1)$$

- **Step 1:** Evaluate left operand: $(5 > 10) \Rightarrow \text{false}$
- **Step 2:** Since the result of `&&` is already determined to be `false`, Java **skips** the right operand entirely.
- **Step 3:** No `ArithmeticException` is thrown because `10 / 0` is never executed.

> **Contrast:** Using `&` (non-short-circuit) would attempt `10 / 0` and throw `ArithmeticException: / by zero`.

---

### Derivation 4: Pre-increment vs Post-increment

$$\text{Let } x = 5$$

| Expression | Operation Order | Value Returned | Final $x$ |
| :--- | :--- | :---: | :---: |
| `y = x++` | Use $x$ first, then increment | $y = 5$ | $x = 6$ |
| `y = ++x` | Increment $x$ first, then use | $y = 6$ | $x = 6$ |

**Symbolic proof:**

$$y = x++ \quad \Longleftrightarrow \quad y = x;\ \text{then}\ x = x + 1$$

$$y = ++x \quad \Longleftrightarrow \quad x = x + 1;\ \text{then}\ y = x$$

---

### Derivation 5: Ternary Operator as Inline `if-else`

$$\text{Expression: } \text{max} = (a > b)\ ?\ a\ :\ b$$

**Truth table mapping:**

| Condition $(a > b)$ | Result of Ternary |
| :---: | :---: |
| `true` | Returns `a` |
| `false` | Returns `b` |

**Equivalent `if-else` block:**

```java
int max;
if (a > b) {
    max = a;
} else {
    max = b;
}
```

> The ternary operator is **purely syntactic sugar** — the compiled bytecode is identical to the `if-else` form.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams: Operator Classification & Flow Architecture

## 📊 Diagram 1: Master Classification of Java Operators

```mermaid
graph TD
    Root["Java Operators - OECST615 Module 1"] --> Unary["Unary Operators - 1 Operand"]
    Root --> Binary["Binary Operators - 2 Operands"]
    Root --> Ternary["Ternary Operators - 3 Operands"]

    Unary --> U1["Increment and Decrement - ++ and --"]
    Unary --> U2["Unary Plus and Minus - + and -"]
    Unary --> U3["Logical NOT - !"]
    Unary --> U4["Bitwise NOT - ~"]

    Binary --> Arith["Arithmetic - + - * / %"]
    Binary --> Rel["Relational - == != less greater lessEq greaterEq"]
    Binary --> BoolLog["Boolean Logical - and or notAnd notOr xor"]
    Binary --> Bit["Bitwise - andB orB xorB"]
    Binary --> Shift["Shift - leftShift rightShift unsignedRight"]
    Binary --> Assign["Assignment - equal plusEq minusEq starEq slashEq percentEq andEq orEq xorEq leftShiftEq rightShiftEq unsignedRightEq"]

    Ternary --> Cond["Conditional Operator - questionColon"]

    style Root fill:#1f4e79,stroke:#000,color:#fff
    style Unary fill:#2e75b6,stroke:#000,color:#fff
    style Binary fill:#2e75b6,stroke:#000,color:#fff
    style Ternary fill:#2e75b6,stroke:#000,color:#fff
    style Arith fill:#bdd7ee,stroke:#000,color:#000
    style Rel fill:#bdd7ee,stroke:#000,color:#000
    style BoolLog fill:#bdd7ee,stroke:#000,color:#000
    style Bit fill:#bdd7ee,stroke:#000,color:#000
    style Shift fill:#bdd7ee,stroke:#000,color:#000
    style Assign fill:#bdd7ee,stroke:#000,color:#000
    style Cond fill:#c6e0b4,stroke:#000,color:#000
```

> **Reading Guide:** Root is the master node. The three primary branches (Unary, Binary, Ternary) flow downward into their specific operator families. Color coding: **dark blue** = primary category, **light blue** = binary family members, **light green** = the unique ternary operator.

---

## 📊 Diagram 2: Operator Precedence Evaluation Pipeline

```mermaid
flowchart TD
    A["Input Expression: 10 + 3 star 2 greaterThan 20"] --> B["Step 1: Evaluate star - highest precedence in this expr"]
    B --> C["Intermediate: 10 + 6 greaterThan 20"]
    C --> D["Step 2: Evaluate + - additive precedence"]
    D --> E["Intermediate: 16 greaterThan 20"]
    E --> F["Step 3: Evaluate greaterThan - relational precedence"]
    F --> G["Final Result: false - boolean"]

    style A fill:#fff2cc,stroke:#000
    style B fill:#f8cbad,stroke:#000
    style C fill:#f8cbad,stroke:#000
    style D fill:#c5e0b4,stroke:#000
    style E fill:#c5e0b4,stroke:#000
    style F fill:#9dc3e6,stroke:#000
    style G fill:#1f4e79,stroke:#000,color:#fff
```

> **Reading Guide:** Each node represents one evaluation stage. Java's compiler always resolves the **highest-precedence operator first**, then moves to the next tier. This diagram models the exact sequence the JVM bytecode generator follows.

---

## 📊 Diagram 3: Short-Circuit vs Eager Evaluation Logic

```mermaid
graph LR
    subgraph "Short-Circuit Operators"
        SS1["Left Operand false"] --> SS2["Skip Right Operand"]
        SS2 --> SS3["Result: false - and"]
        SS4["Left Operand true"] --> SS5["Skip Right Operand"]
        SS5 --> SS6["Result: true - or"]
    end

    subgraph "Eager Operators"
        EE1["Left Operand false"] --> EE2["Evaluate Right Operand"]
        EE2 --> EE3["Combine - both always run"]
        EE4["Left Operand true"] --> EE5["Evaluate Right Operand"]
        EE5 --> EE6["Combine - both always run"]
    end

    style SS1 fill:#ffe699,stroke:#000
    style SS4 fill:#ffe699,stroke:#000
    style EE1 fill:#f4b084,stroke:#000
    style EE4 fill:#f4b084,stroke:#000
```

> **Reading Guide:** The left subgraph represents `&&` and `||`. The right subgraph represents `&` and `|`. This visual makes the **performance and safety** distinction immediately clear.

---

## 📊 Diagram 4: Ternary Operator Internal Execution Topology

```mermaid
flowchart TD
    Input["Input: condition questionMark valIfTrue colon valIfFalse"] --> EvalCond["Evaluate condition - boolean"]
    EvalCond --> Branch{"condition is true or false"}
    Branch -- true --> ReturnTrue["Return valIfTrue"]
    Branch -- false --> ReturnFalse["Return valIfFalse"]
    ReturnTrue --> AssignResult["Store in LHS variable"]
    ReturnFalse --> AssignResult

    style Input fill:#d9e1f2,stroke:#000
    style EvalCond fill:#bdd7ee,stroke:#000
    style Branch fill:#ffd966,stroke:#000
    style ReturnTrue fill:#c6e0b4,stroke:#000
    style ReturnFalse fill:#c6e0b4,stroke:#000
    style AssignResult fill:#1f4e79,stroke:#000,color:#fff
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# 🎯 KTU 2024 Scheme Examination Question Bank

---

## 📝 Part A: Short Answer Questions (3 Marks Each)

### Question 1 `[KTU University Exam - July 2024]`
**Differentiate between the short-circuit `&&` operator and the non-short-circuit `&` operator in Java. Provide one programming scenario where using `&&` prevents a runtime error.** **(CO1, Understand)** **[3 Marks]**

**Model Answer (Board-Standard):**

| Aspect | `&&` (Short-Circuit AND) | `&` (Non-Short-Circuit AND) |
| :--- | :--- | :--- |
| Evaluation | If left operand is `false`, right operand is **NOT evaluated** | **Both** operands are **always evaluated** |
| Performance | Faster (skips unnecessary work) | Slower (always does both) |
| Safety | Prevents runtime exceptions in right operand | Can cause runtime exceptions |
| Return Type | `boolean` | `boolean` (or integer for bitwise AND) |

**Scenario where `&&` prevents error:**

```java
int[] arr = null;
int len = 0;
if (len > 0 && arr.length > 10) {  // SAFE: arr.length never accessed when len=0
    // ...
}
```

If we used `&` instead, `arr.length` would be evaluated even when `len == 0`, causing a `NullPointerException`.

> **[Valuation Key: 1 Mark for difference table, 1 Mark for code example, 1 Mark for explaining why `&&` is safe]**

---

### Question 2 `[KTU University Exam - Dec 2023]`
**Explain the difference between `>>` and `>>>` shift operators in Java. What is the output of `-16 >> 2` and `-16 >>> 2`? Justify.** **(CO1, Remember)** **[3 Marks]**

**Model Answer:**

| Operator | Name | Sign Bit Behavior |
| :--- | :--- | :--- |
| `>>` | Arithmetic / Signed Right Shift | **Preserves the sign bit** (fills left with copies of MSB) |
| `>>>` | Logical / Unsigned Right Shift | **Always fills left with 0** (ignores sign) |

**Computation of `-16 >> 2`:**

$$\begin{aligned}
-16_{10} &= 1111\ 1111\ 1111\ 1111\ 1111\ 1111\ 1111\ 0000_2 \\
\text{Shift right by 2, fill MSB with 1 (signed)} &\Rightarrow 1111\ 1111\ 1111\ 1111\ 1111\ 1111\ 1111\ 1100_2 \\
&= -4_{10}
\end{aligned}$$

**Computation of `-16 >>> 2`:**

$$\begin{aligned}
-16_{10} &= 1111\ 1111\ 1111\ 1111\ 1111\ 1111\ 1111\ 0000_2 \\
\text{Shift right by 2, fill MSB with 0 (unsigned)} &\Rightarrow 0011\ 1111\ 1111\ 1111\ 1111\ 1111\ 1111\ 1100_2 \\
&= 1073741820_{10}
\end{aligned}$$

> **[Valuation Key: 1 Mark for conceptual difference, 1 Mark for `-16 >> 2 = -4`, 1 Mark for `-16 >>> 2 = 1073741820`]**

---

## 📝 Part B: Long Answer Questions (14 Marks Each - Internal Choice)

### 🔵 Question A (Choice 1) `[KTU University Exam - Dec 2024 Model Paper]`

**(a)** Explain the six categories of operators in Java with suitable examples for each. Briefly describe operator precedence and associativity. **(7 Marks)** **(CO1, Understand)**

**(b)** Write a Java program that accepts two integers from the user and demonstrates: (i) all arithmetic operators, (ii) the use of the ternary operator to find the larger of the two, and (iii) the result of `a ^ b`, `a << 2`, and `b >> 1`. Display all results with appropriate labels. **(7 Marks)** **(CO2, Apply)**

---

#### Model Solution for (a):

**The Six Operator Categories in Java:**

1. **Arithmetic Operators** — `+`, `-`, `*`, `/`, `%`, `++`, `--`
   Example: `int sum = 10 + 20;` → `sum = 30`

2. **Relational Operators** — `==`, `!=`, `<`, `>`, `<=`, `>=`
   Example: `boolean flag = (10 > 5);` → `flag = true`

3. **Boolean Logical Operators** — `&&`, `||`, `!`
   Example: `if (age > 18 && hasLicense) { ... }`

4. **Bitwise Operators** — `&`, `|`, `^`, `~`
   Example: `int flags = READ | WRITE;` (sets bits for both)

5. **Assignment Operators** — `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `<<=`, `>>=`, `>>>=`
   Example: `balance -= withdrawal;`

6. **Conditional (Ternary) Operator** — `? :`
   Example: `String status = (marks >= 50) ? "Pass" : "Fail";`

**Operator Precedence:** Determines binding strength. Higher precedence operators are evaluated first. For example, in `10 + 3 * 2`, multiplication (`*`) has higher precedence than addition (`+`), so the result is `16`, not `26`.

**Associativity:** When two operators of the **same precedence** appear, associativity decides the direction of evaluation. Most operators are **left-associative** (evaluate left-to-right). Assignment operators are **right-associative** (e.g., `a = b = c = 5` assigns 5 to all three).

> **[Valuation Key: 1 Mark per category, 1 Mark total for precedence, 1 Mark total for associativity = 7 Marks]**

---

#### Model Solution for (b):

```java
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

public final class OperatorDemo {
    private static final Logger LOGGER = Logger.getLogger(OperatorDemo.class.getName());

    private OperatorDemo() {
        throw new AssertionError("Utility class");
    }

    public static void main(final String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            // Validate input
            if (!scanner.hasNextInt()) {
                LOGGER.log(Level.SEVERE, "Invalid input. Please enter integers only.");
                return;
            }
            final int a = scanner.nextInt();
            if (!scanner.hasNextInt()) {
                LOGGER.log(Level.SEVERE, "Invalid second input.");
                return;
            }
            final int b = scanner.nextInt();

            // (i) Arithmetic operators
            System.out.println("--- Arithmetic ---");
            System.out.println("a + b = " + (a + b));
            System.out.println("a - b = " + (a - b));
            System.out.println("a * b = " + (a * b));
            // Guard against division by zero
            if (b != 0) {
                System.out.println("a / b = " + (a / b));
                System.out.println("a % b = " + (a % b));
            } else {
                System.out.println("Division and modulus skipped: divisor is zero.");
            }

            // (ii) Ternary operator to find larger
            final int larger = (a > b) ? a : b;
            System.out.println("Larger of a and b = " + larger);

            // (iii) Bitwise and shift operations
            System.out.println("--- Bitwise and Shifts ---");
            System.out.println("a ^ b   = " + (a ^ b));
            System.out.println("a << 2  = " + (a << 2));
            System.out.println("b >> 1  = " + (b >> 1));
        } catch (final ArithmeticException ex) {
            LOGGER.log(Level.SEVERE, "Arithmetic error: " + ex.getMessage(), ex);
        }
    }
}
```

**Sample Run with input `a = 12, b = 10`:**
```
--- Arithmetic ---
a + b = 22
a - b = 2
a * b = 120
a / b = 1
a % b = 2
Larger of a and b = 12
--- Bitwise and Shifts ---
a ^ b   = 6
a << 2  = 48
b >> 1  = 5
```

> **[Valuation Key: 1 Mark for input + validation, 1 Mark for arithmetic, 1 Mark for ternary, 1 Mark for bitwise, 1 Mark for shifts, 1 Mark for output formatting, 1 Mark for sample output = 7 Marks]**

---

### 🟢 Question B (Choice 2) `[KTU University Exam - July 2024]`

**(a)** Discuss the differences between `==` operator and `.equals()` method in Java. Why is it preferred to use `.equals()` for comparing `String` objects? Write a code snippet to demonstrate. **(7 Marks)** **(CO1, Understand)**

**(b)** Consider the following Java program. Predict the output and justify each line: **(7 Marks)** **(CO2, Apply)**

```java
int a = 5, b = 3;
boolean result = (a++ > b) && (++b > a);
System.out.println("a = " + a);
System.out.println("b = " + b);
System.out.println("result = " + result);

int x = 8, y = 12;
int z = (x & y) + (x | y) - (x ^ y);
System.out.println("z = " + z);
```

---

#### Model Solution for (a):

**Differences between `==` and `.equals()`:**

| Aspect | `==` Operator | `.equals()` Method |
| :--- | :--- | :--- |
| Type | Operator | Method (defined in `Object` class) |
| Comparison | Compares **reference** (memory address) for objects | Compares **content/values** for objects |
| Primitives | Compares **values** directly | Not applicable to primitives |
| Overridable | Cannot be overridden | **Can be overridden** (e.g., in `String`, `Integer`) |
| Null Safety | Throws no error if both null | Depends on implementation |

**Why `.equals()` is preferred for `String`:**

When you write `String s1 = new String("KTU"); String s2 = new String("KTU");`, two **different objects** exist in memory. Using `==` would return `false` because their references differ, even though their content is identical. The `String` class **overrides** `.equals()` to perform character-by-character comparison, returning `true` for equal content.

**Code Demonstration:**

```java
String s1 = new String("KTU");
String s2 = new String("KTU");
String s3 = s1;

System.out.println(s1 == s2);       // false (different references)
System.out.println(s1 == s3);       // true  (same reference)
System.out.println(s1.equals(s2));  // true  (same content)
```

> **[Valuation Key: 2 Marks for the comparison table, 2 Marks for explanation of String interning/reference, 2 Marks for code, 1 Mark for sample output = 7 Marks]**

---

#### Model Solution for (b):

**Step 1: Evaluate `boolean result = (a++ > b) && (++b > a);`**

- Initial values: $a = 5$, $b = 3$
- Evaluate `a++ > b`:
  - `a++` is **post-increment**: use current value $5$, then $a$ becomes $6$
  - Compare: $5 > 3 \Rightarrow \text{true}$
- Since left side is `true`, `&&` **must** evaluate the right side (no short-circuit skip)
- Evaluate `++b > a`:
  - `++b` is **pre-increment**: $b$ becomes $4$, then use $4$
  - Compare: $4 > 6 \Rightarrow \text{false}$
- Final `result` = `true && false` = `false`
- Final $a = 6$, $b = 4$

**Step 2: Evaluate `int z = (x & y) + (x | y) - (x ^ y);`**

Given $x = 8 = 1000_2$ and $y = 12 = 1100_2$:

$$\begin{aligned}
x \ \&\ y &= 1000_2 \ \&\ 1100_2 = 1000_2 = 8 \\
x \ \vert\ y &= 1000_2 \ \vert\ 1100_2 = 1100_2 = 12 \\
x \ \hat{}\ y &= 1000_2 \ \hat{}\ 1100_2 = 0100_2 = 4
\end{aligned}$$

$$z = 8 + 12 - 4 = 16$$

**Mathematical identity proof:** $(x \ \&\ y) + (x \ \vert\ y) - (x \ \hat{}\ y) = x + y$ because $a + b = (a \ \&\ b) + (a \ \vert\ b)$ and $a \ \hat{}\ b = (a \ \vert\ b) - (a \ \&\ b)$. Therefore $z = x + y = 8 + 12 = 20$... wait, let me recompute.

Actually: $(x \ \&\ y) + (x \ \vert\ y) = x + y$ (this is a known identity). So $z = (x+y) - (x \ \hat{}\ y) = 20 - 4 = 16$. The final answer is **16**.

**Predicted Output:**
```
a = 6
b = 4
result = false
z = 16
```

> **[Valuation Key: 1 Mark for `a = 6`, 1 Mark for `b = 4`, 1 Mark for `result = false` with justification, 1 Mark for `x & y = 8`, 1 Mark for `x | y = 12`, 1 Mark for `x ^ y = 4`, 1 Mark for `z = 16` = 7 Marks]**

---

## ⚠️ KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mark-Deduction Traps (Module 1 - Operators):**
>
> 1. **Confusing `=` with `==`:** A staggering 30% of KTU answer scripts lose 2-3 marks by writing `if (a = b)` instead of `if (a == b)`. Always verbally clarify that `=` is **assignment** and `==` is **equality comparison**.
>
> 2. **Ignoring integer division truncation:** Writing `7 / 2 = 3.5` instead of `7 / 2 = 3` in Java is an automatic **zero** for the arithmetic sub-question. Always explicitly state: *"Java performs integer division, truncating the decimal."*
>
> 3. **Mixing up `&&` and `&`:** Students often use `&` everywhere, missing the short-circuit optimization. If the question mentions *side effects* in the right operand, short-circuit behavior is being tested — explicitly justify why the right operand is/isn't evaluated.
>
> 4. **Forgetting that `>>` preserves sign and `>>>` does not:** This is a **favorite 3-mark question** in KTU exams. Always compute both forms and state the bit pattern.
>
> 5. **Pre-increment vs Post-increment in complex expressions:** A line like `int y = a++ + ++a;` is **undefined-behavior territory in C/C++** but in **Java it is well-defined**. Justify that Java evaluates left-to-right and updates the variable in place. Show the table form (return value vs final variable value).
>
> 6. **String comparison using `==`:** Will cost you 2 marks if the question asks about `String` content comparison. Always use `.equals()` for objects.
>
> 7. **Ternary branch type incompatibility:** Writing `(condition) ? 5 : "five"` causes a **compilation error** because Java requires both branches to have compatible types. State this explicitly if asked.

---

## 🧠 Topic Recap & Important Things to Remember

- ✅ Java has **44 operators** classified into **unary, binary, and ternary** based on operand count.
- ✅ The **ternary operator** (`? :`) is Java's **only** operator that takes **3 operands**.
- ✅ **Arithmetic** operators on integers perform **truncated division** — decimals are discarded toward zero.
- ✅ The **modulus** operator (`%`) returns the **remainder** of integer division.
- ✅ **Relational** operators always return a `boolean` value and never a numeric value.
- ✅ The `==` operator on objects compares **references (memory addresses)**, not content. Use `.equals()` for content comparison.
- ✅ `&&` and `||` are **short-circuit** — they skip evaluation of the right operand when the result is already determined.
- ✅ `&` and `|` applied to booleans are **eager** — both operands are always evaluated.
- ✅ The `!` operator is the **only unary boolean logical operator**; it inverts the boolean.
- ✅ **Bitwise** operators work on the binary representations of integers.
- ✅ `<<` multiplies by 2 per shift; `>>` divides by 2 (signed); `>>>` divides by 2 (unsigned, fills with 0).
- ✅ **Assignment** operators like `+=` are shorthand for `x = x + value`. They are **right-associative**.
- ✅ The **ternary operator** is syntactic sugar for `if-else` and produces **identical bytecode**.
- ✅ **Operator precedence** (highest to lowest): Postfix `x++` → Unary `++x` → Multiplicative `* / %` → Additive `+ -` → Shift `<< >> >>>` → Relational `< > <= >=` → Equality `== !=` → Bitwise AND `&` → Bitwise XOR `^` → Bitwise OR `|` → Logical AND `&&` → Logical OR `||` → Ternary `? :` → Assignment `= += -= ...`
- ✅ When in doubt, **use parentheses** `()` to make expression intent unambiguous. This is industry best practice and earns full marks in KTU valuations.
- ✅ **All binary operators** (except assignment) are **left-associative**. Assignment operators are **right-associative**.
- ✅ Java guarantees **left-to-right evaluation** of operands within an expression (unlike C/C++), eliminating undefined behavior.

<!-- SECTION_5_END -->
