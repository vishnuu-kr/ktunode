# The Symbol Table

<!-- SECTION_1_START -->
# The Symbol Table — Core Definition & Intuitive Overview

> [!IMPORTANT]
> **KTU 2024 Scheme — Module 2: Basic Semantics**
> **Course:** Programming Languages (PECST758)
> **Topic of Study:** The Symbol Table
> **Bloom's Target:** Understand → Apply → Analyze

---

## 1.1 Formal Academic Definition

A **Symbol Table** is a *compiler-managed*, *associative data structure* (most commonly a **hash table**, **binary search tree**, or **balanced search tree**) that maps every user-defined and compiler-introduced **identifier** appearing in a source program to a collection of **attributes** describing that identifier's declaration, type, scope, memory layout, and runtime behavior.

Formally, it is a function:

$$ ST : \Sigma \rightarrow A $$

where $\Sigma$ is the set of all valid identifier strings (lexemes) in the program, and $A$ is the set of all *attribute records* associated with those identifiers. The function is **not strictly bijective** because the same lexeme can map to multiple attribute records when **scope nesting** introduces shadowing.

In KTU 2024 syllabus terminology, the symbol table is the *central repository* that supports the phases of **lexical analysis**, **syntax analysis**, **semantic analysis**, **intermediate code generation**, **code optimization**, and **target code generation** — every phase queries or mutates it.

---

## 1.2 Conceptual Analogy — The Hospital Patient Registry

Imagine a large multi-floor hospital:

| Hospital Concept | Symbol Table Equivalent |
|---|---|
| Every patient admitted | Every **identifier** declared in the program |
| Patient's unique ID card | The **lexeme / token** (identifier name) |
| Patient's medical file (blood group, allergies, ward) | The **attribute record** (type, scope, offset, etc.) |
| Different wards for ICU, General, Maternity | **Nested scopes** (global, function, block) |
| Front-desk registry system | The **symbol table data structure** itself |
| Transfer of a patient between wards | **Scope resolution / shadowing** |

When a doctor (compiler phase) needs to know a patient's blood group (an attribute), they do not scan the entire hospital — they query the registry (symbol table) using the patient ID (identifier) and get the required information in $O(1)$ time (assuming a hash-based implementation). When a patient moves from one ward to another, the registry must **update** the entry; if a duplicate ID is detected, a **redeclaration error** is raised.

> [!NOTE]
> **Why is it called a "Table" and not a "List" or "Stack"?**
> Although a *stack of tables* is the implementation strategy for handling scope (one table per scope level), each individual scope-level entry behaves like a *key-value lookup table* — hence the name **Symbol Table**.

---

## 1.3 The Standard Metrics and Engineering Constants

| Metric / Constant | Standard Value / Convention |
|---|---|
| Average lookup time (hash table) | **$O(1)$** expected, **$O(n)$** worst-case |
| Average lookup time (balanced BST) | **$O(\log n)$** |
| Insertion time | **$O(1)$** (hash) or **$O(\log n)$** (BST) |
| Scope stack depth | Bounded by maximum nesting depth in source code |
| Identifier length limit | Implementation-defined (commonly **31** or **63** chars) |
| Hash function family (typical) | **FNV-1a**, **MurmurHash**, **DJB2** |

---

## 1.4 Geometric / Structural Visualization

The symbol table, when conceptualized geometrically, can be visualized as a **vertical stack of horizontal planes** where each plane represents one scope level:

> [!VISUALIZATION CONTROL]
> **Concept:** Scope Stack as Layered Planes (Symbol Table at each scope)
> **GeoGebra / Desmos Input Equations:**
> * `Level 0: ST_0 = {(x:int, addr:0x100), (y:float, addr:0x104)}`
> * `Level 1: ST_1 = {(x:float, addr:0x208)}`  ← shadows Level 0's `x`
> * `Level 2: ST_2 = {(z:char, addr:0x30C)}`
> **Visual Description:** Picture three horizontal slabs stacked vertically. The bottom slab is the *global* scope, the middle slab is a *function* scope, and the top slab is a *block* scope. Identifiers visible at any point follow a *downward search rule* — lookup starts at the topmost slab and proceeds downward until a match is found.

---

## 1.5 Why a Programming Language *Must* Have a Symbol Table

1. **Type checking** — the semantic analyzer must know the type of every expression node.
2. **Scope enforcement** — to validate that an identifier is used only where it is visible.
3. **Memory allocation** — to assign offsets/locations for declared variables.
4. **Code generation** — to resolve references to actual addresses or registers.
5. **Error reporting** — to emit meaningful diagnostics like *“undeclared identifier `count`”*.

> [!TIP]
> **KTU 2024 Exam Hint:** Any question on *“explain the role of the symbol table in different phases of compilation”* is a high-frequency 7-mark question. Always tie each phase to a *specific operation* (insert, lookup, update, delete) on the table.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# The Symbol Table — Deep Theoretical Analysis & KTU High-Yield Formula Sheet

---

## 2.1 Information Stored Per Identifier (The Attribute Record)

Each entry in the symbol table is not just a name — it is a **record (struct)** of attributes. The exact field set depends on the language, but a canonical KTU-style attribute record looks like this:

| Attribute Field | Description | Example Value |
|---|---|---|
| `name` (lexeme) | The textual identifier | `counter` |
| `kind` | What *kind* of name it is | `variable`, `function`, `type`, `constant`, `label`, `parameter` |
| `type` | The data type | `int`, `float[10]`, `struct node*` |
| `scope` | Pointer / index to enclosing scope | Pointer to `Scope 2` |
| `memory_location` | Address / offset / register | `0x7FFF_FFE0` or `%rbp - 8` |
| `size` | Size in bytes | `4 bytes` for `int` |
| `line_number` | Declaration line | `42` |
| `return_type` | Only for functions | `float` |
| `parameter_list` | Only for functions | `(int, float)` |
| `is_initialized` | For variables | `true / false` |
| `access_modifier` | For OOP languages | `public`, `private`, `protected` |
| `binding` | Static / dynamic | `static` |

---

## 2.2 The Core Operations on a Symbol Table

A symbol table must support at least four operations. These are the operations that examiners test under "Apply" and "Analyze" Bloom levels.

### 2.2.1 `insert(name, attributes) → status`

Adds a new entry. **Failure** is a *redeclaration error* in the *current* scope.

### 2.2.2 `lookup(name) → record | null`

Searches the **scope stack** from *top to bottom* (innermost to outermost) and returns the first matching record. Returns `null` if not found (resulting in *undeclared identifier* error).

### 2.2.3 `lookup_in_current_scope(name) → record | null`

Searches **only the topmost scope**. Used to detect redeclarations within a single block.

### 2.2.4 `enter_scope() / exit_scope()`

Pushes a new empty scope onto the stack / pops the topmost scope, discarding all its entries.

---

## 2.3 Scope Stack and the Shadowing Rule

The classic data structure for handling block-structured languages (Algol, C, Java, Python) is the **stack of symbol tables**:

$$ \text{FullLookup}(x) = \text{first} \mid x \in ST_{top},\, ST_{top-1},\, \ldots,\, ST_{0} $$

This *innermost-first* search gives rise to **shadowing**: an inner declaration of the same name *hides* the outer one without destroying it. When the inner scope exits, the outer becomes visible again automatically.

> [!IMPORTANT]
> **Shadowing vs. Hiding vs. Overloading — KTU Distinction**
> * **Shadowing** — a variable in an inner scope has the same name as one in an outer scope (same kind, different bindings).
> * **Hiding** — used in OOP for inherited members (e.g., Java's field hiding).
> * **Overloading** — same name, *different signatures* (parameter list), coexisting in the *same* scope.

---

## 2.4 Implementation Strategies — Trade-Off Analysis

| Strategy | Lookup (avg) | Insert (avg) | Memory Overhead | Best For |
|---|---|---|---|---|
| Unordered linear list | $O(n)$ | $O(1)$ | Lowest | Tiny compilers, teaching |
| Ordered linear list (sorted) | $O(\log n)$ via binary search | $O(n)$ (shift) | Low | Small programs |
| **Hash table (chaining)** | $O(1)$ expected | $O(1)$ expected | Moderate (buckets) | Production compilers (GCC, Clang) |
| **Balanced BST (Red-Black, AVL)** | $O(\log n)$ | $O(\log n)$ | Higher (pointers) | When ordered traversal is needed |
| **Self-organizing list (move-to-front)** | $O(1)$ amortized for hot keys | $O(1)$ | Lowest | Tiny embedded symbol tables |
| **Trie / DAWG** | $O(L)$ where $L$ = name length | $O(L)$ | Higher | Autocomplete, IDEs |

The *expected* lookup cost for a hash table is derived from the **load factor** $\alpha = n / m$ (where $n$ = entries, $m$ = buckets):

$$ E[\text{chain length}] = \alpha = \frac{n}{m} $$

Successful lookup:

$$ T_{\text{success}} = \Theta(1 + \alpha) $$

Unsuccessful lookup:

$$ T_{\text{fail}} = \Theta(1 + \alpha) $$

For $m \propto n$, both become $\Theta(1)$.

---

## 2.5 KTU High-Yield Formula & Fact Sheet

> [!NOTE]
> **Master this table for any KTU Part-A or Part-B question on symbol tables.**

| Concept | Key Formula / Rule | Engineering Use |
|---|---|---|
| Symbol Table as a function | $ST : \Sigma \rightarrow A$ | Formal definition |
| Average hash lookup | $T = \Theta(1 + \alpha)$ | Performance bound |
| Load factor | $\alpha = n / m$ | Hash table resizing trigger |
| Scope stack lookup order | Innermost $\rightarrow$ Outermost | Shadowing resolution |
| Static depth | Number of enclosing lexical blocks | Scope identification |
| Dynamic depth | Call-stack depth at runtime | With dynamic scoping |
| Memory per entry | $\text{sizeof}(\text{name}) + \text{sizeof}(\text{record}) + \text{overhead}$ | Compiler memory budgeting |
| Identifier storage | Typically interned into a **string table** | Deduplication of long names |
| Error: undeclared | `lookup` returns `null` | Semantic error |
| Error: redeclared | `lookup_in_current_scope` returns non-null | Semantic error |

---

## 2.6 Real-World Engineering Utility

* **GCC / Clang / LLVM** — Use a chained hash table (`gcc/ggc-common.c`, LLVM's `StringMap`). Each identifier is interned; the attribute record contains a `tree` node (GCC) or a `Value*` (LLVM).
* **Java Virtual Machine (JVM)** — The *Constant Pool* plays a dual role; the **Local Variable Table** and **Field Table** are per-method symbol tables stored in the `.class` file.
* **Python (CPython)** — `symtable.symtable` module walks the AST and produces a `SymbolTable` object exposing `get_type()`, `get_name()`, `is_local()`, `is_global()`, `is_free()`.
* **JavaScript V8** — Maintains per-scope `ScopeInfo` objects for `let`, `const`, `class`, and `var` (hoisted).
* **Database engines (PostgreSQL parser)** — Uses a *list-based* symbol table (`parse_agg.c`) for tables, columns, and aliases during query planning.
* **IDEs (IntelliJ, VSCode)** — Use *persistent* symbol tables indexed by file hashes to support "Go to Definition" and "Find References" in milliseconds across millions of lines.

> [!TIP]
> **Production Insight:** The most expensive operation in real-world symbol tables is **not lookup** but **interning long strings**. Production compilers use a **string table** (deduplication pool) so the bytes `"myVeryLongVariableName"` are stored exactly once and referred to by pointer.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# The Symbol Table — Step-by-Step Derivations, Hand-Simulation, and Code Implementation

---

## 3.1 Hand-Simulation: Constructing the Symbol Table for a C-like Program

Consider this C-style snippet — we will hand-simulate the symbol table state at every line.

```c
int x;                // Line 1: global
float y;              // Line 2: global

void foo(int a) {     // Line 4
    int x;            // Line 5: shadows global x
    {
        char x;       // Line 7: shadows foo's x
        y = 3.14;     // Line 8
    }
    x = 10;           // Line 10: refers to foo's x
}

int main() {          // Line 13
    int z;            // Line 14
    foo(5);           // Line 15
}
```

### State Trace

| Line | Action | Scope Stack (top → bottom) | Notes |
|---|---|---|---|
| 1 | `insert("x", {kind:var, type:int, scope:GLOBAL})` | `[ GLOBAL: {x:int} ]` | Global scope opened |
| 2 | `insert("y", {kind:var, type:float, scope:GLOBAL})` | `[ GLOBAL: {x:int, y:float} ]` | |
| 4 | `enter_scope(FUNC)`, `insert("foo", {...})`, `insert("a", {...})` | `[ FUNC_foo: {a:int, foo:fn}, GLOBAL: {...} ]` | `foo` itself is in `GLOBAL` |
| 5 | `insert("x", {kind:var, type:int, scope:FUNC_foo})` | `[ FUNC_foo: {x:int, a:int, foo:fn}, GLOBAL: {x:int, y:float} ]` | **Shadows** global `x` |
| 7 | `enter_scope(BLOCK)`, `insert("x", {kind:var, type:char, scope:BLOCK})` | `[ BLOCK: {x:char}, FUNC_foo: {x:int,...}, GLOBAL: {...} ]` | **Shadows** again |
| 8 | `lookup("y")` → finds in GLOBAL | (no mutation) | Resolves to global `y` |
| (after 8) | `exit_scope()` | `[ FUNC_foo: {x:int, a:int, foo:fn}, GLOBAL: {...} ]` | `x:char` destroyed |
| 10 | `lookup("x")` → finds `x:int` in FUNC_foo | (no mutation) | Refers to foo's `x` |
| (after 10) | `exit_scope()` | `[ GLOBAL: {x:int, y:float} ]` | |
| 13 | `enter_scope(FUNC_main)`, `insert("main",...)` | `[ FUNC_main: {main:fn}, GLOBAL: {...} ]` | |
| 14 | `insert("z", {...})` | `[ FUNC_main: {z:int, main:fn}, GLOBAL: {...} ]` | |
| 15 | `lookup("foo")` → found in GLOBAL | | Function call resolved |

---

## 3.2 Complete Python Implementation of a Stack-of-Symbol-Tables

The following is **production-quality** code with exhaustive type hints, docstrings, and error logging — a faithful model of what KTU examiners expect under "Apply" / "Analyze" cognitive levels.

```python
"""
symbol_table.py
A faithful implementation of a stack-of-symbol-tables with:
    - Hash-based per-scope lookup
    - Scope stack with enter_scope / exit_scope
    - Shadowing detection
    - Redeclaration and undeclared-identifier errors
    - Exhaustive type hints and logging
"""

from __future__ import annotations
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Dict, List, Optional
import logging

# Configure a module-level logger for the compiler
logging.basicConfig(level=logging.INFO,
                    format="%(levelname)s [%(name)s] %(message)s")
log = logging.getLogger("SymbolTable")


class SymbolKind(Enum):
    VARIABLE = "variable"
    FUNCTION = "function"
    PARAMETER = "parameter"
    TYPE = "type"
    CONSTANT = "constant"


class ScopeKind(Enum):
    GLOBAL = "global"
    FUNCTION = "function"
    BLOCK = "block"
    CLASS = "class"


@dataclass
class SymbolInfo:
    """Attribute record for a single identifier entry."""
    name: str
    kind: SymbolKind
    type_repr: str
    scope_name: str
    line_no: int
    memory_offset: int = -1
    size_bytes: int = -1
    is_initialized: bool = False
    extra: Dict[str, Any] = field(default_factory=dict)

    def __repr__(self) -> str:
        return (f"SymbolInfo({self.name}: {self.kind.value} "
                f"of type {self.type_repr} in {self.scope_name} "
                f"@ line {self.line_no}, offset={self.memory_offset})")


@dataclass
class Scope:
    """A single lexical scope — one hash table per scope level."""
    name: str
    kind: ScopeKind
    parent: Optional["Scope"] = None
    table: Dict[str, SymbolInfo] = field(default_factory=dict)

    def insert(self, info: SymbolInfo) -> None:
        if info.name in self.table:
            raise RedeclarationError(
                f"Redeclaration of '{info.name}' in scope "
                f"'{self.name}' at line {info.line_no}. "
                f"Previous declaration: {self.table[info.name]}"
            )
        self.table[info.name] = info
        log.info(f"INSERT {info}")

    def lookup_local(self, name: str) -> Optional[SymbolInfo]:
        return self.table.get(name)

    def __repr__(self) -> str:
        return f"Scope({self.name}, {self.kind.value}, entries={list(self.table)})"


class RedeclarationError(Exception):
    """Raised when an identifier is declared twice in the same scope."""


class UndeclaredIdentifierError(Exception):
    """Raised when an identifier is used but not in any visible scope."""


class SymbolTableStack:
    """The full stack-of-symbol-tables used by the compiler."""

    def __init__(self) -> None:
        self._stack: List[Scope] = []
        self._offset_counter: int = 0
        log.info("Initialized empty symbol-table stack")

    # ---------- Scope management ----------
    def enter_scope(self, name: str, kind: ScopeKind) -> Scope:
        parent = self._stack[-1] if self._stack else None
        scope = Scope(name=name, kind=kind, parent=parent)
        self._stack.append(scope)
        log.info(f"ENTER SCOPE -> {scope}")
        return scope

    def exit_scope(self) -> Scope:
        if not self._stack:
            raise RuntimeError("Cannot exit scope: stack is empty")
        popped = self._stack.pop()
        log.info(f"EXIT SCOPE  -> {popped}")
        return popped

    @property
    def current(self) -> Scope:
        if not self._stack:
            raise RuntimeError("No active scope on the stack")
        return self._stack[-1]

    @property
    def depth(self) -> int:
        return len(self._stack)

    # ---------- Symbol operations ----------
    def insert(self, name: str, kind: SymbolKind, type_repr: str,
               line_no: int, **kwargs: Any) -> SymbolInfo:
        info = SymbolInfo(
            name=name,
            kind=kind,
            type_repr=type_repr,
            scope_name=self.current.name,
            line_no=line_no,
            memory_offset=self._offset_counter,
            **kwargs,
        )
        self._offset_counter += self._size_of(type_repr)
        self.current.insert(info)
        return info

    def lookup(self, name: str) -> SymbolInfo:
        for scope in reversed(self._stack):  # innermost first
            found = scope.lookup_local(name)
            if found is not None:
                log.info(f"LOOKUP '{name}' -> resolved in {scope.name}")
                return found
        raise UndeclaredIdentifierError(
            f"Undeclared identifier '{name}' (no scope contains it)"
        )

    def lookup_in_current_scope(self, name: str) -> Optional[SymbolInfo]:
        return self.current.lookup_local(name)

    # ---------- Debug helpers ----------
    def dump(self) -> str:
        lines = ["SYMBOL TABLE STACK DUMP",
                 "=" * 60]
        for i, scope in enumerate(self._stack, start=1):
            lines.append(f"Level {i}: {scope}")
            for sym in scope.table.values():
                lines.append(f"   - {sym}")
        return "\n".join(lines)

    @staticmethod
    def _size_of(type_repr: str) -> int:
        primitive_sizes = {
            "int": 4, "float": 4, "double": 8, "char": 1,
            "short": 2, "long": 8, "void": 0,
        }
        return primitive_sizes.get(type_repr, 8)


# ===================== DEMO / DRIVER =====================
if __name__ == "__main__":
    st = SymbolTableStack()

    # Global scope
    st.enter_scope("global", ScopeKind.GLOBAL)
    st.insert("x", SymbolKind.VARIABLE, "int",    line_no=1)
    st.insert("y", SymbolKind.VARIABLE, "float",  line_no=2)

    # Function foo
    st.enter_scope("foo", ScopeKind.FUNCTION)
    st.insert("foo", SymbolKind.FUNCTION, "void", line_no=4)
    st.insert("a",   SymbolKind.PARAMETER, "int",  line_no=4)
    st.insert("x",   SymbolKind.VARIABLE,  "int",  line_no=5)  # shadows global x

    # Block inside foo
    st.enter_scope("block", ScopeKind.BLOCK)
    st.insert("x", SymbolKind.VARIABLE, "char", line_no=7)  # shadows foo's x

    print("\n--- Inside innermost block ---")
    print(st.lookup("x"))     # char in block
    print(st.lookup("y"))     # float in global
    print(st.lookup("a"))     # int in foo
    print(st.lookup("foo"))   # function in foo

    st.exit_scope()           # leave block
    print("\n--- After leaving block ---")
    print(st.lookup("x"))     # int in foo (shadowing lifted)

    st.exit_scope()           # leave foo
    st.exit_scope()           # leave global

    print("\n" + st.dump())
```

**Expected output excerpt (block level):**

```
LOOKUP 'x' -> resolved in block
SymbolInfo(x: variable of type char in block @ line 7, offset=12)
LOOKUP 'y' -> resolved in global
SymbolInfo(y: variable of type float in global @ line 2, offset=4)
```

---

## 3.3 Worked Numerical Example — Hash Bucket Placement

Let $m = 8$ buckets, hash function $h(k) = (\text{sum of ASCII codes of } k) \mod 8$.

Identifiers to insert in a fresh scope: `i`, `n`, `t`, `x`, `y`, `pi`, `sum`.

Step-by-step:

| Identifier | ASCII sum | $h(k) = \text{sum} \mod 8$ | Bucket |
|---|---|---|---|
| `i` | 105 | 1 | 1 |
| `n` | 110 | 6 | 6 |
| `t` | 116 | 4 | 4 |
| `x` | 120 | 0 | 0 |
| `y` | 121 | 1 | 1 (chains after `i`) |
| `pi` | 112 + 105 = 217 | 1 | 1 (chains after `y`) |
| `sum` | 115 + 117 + 109 = 341 | 5 | 5 |

Load factor after all inserts:

$$ \alpha = \frac{n}{m} = \frac{7}{8} = 0.875 $$

Average successful lookup:

$$ T_{\text{succ}} = \frac{1}{\alpha} \sum_{i=0}^{\alpha-1} (1 + i) \approx 1 + \frac{\alpha - 1}{2} = 1 + 0.4375 \approx 1.44 $$

Average unsuccessful lookup:

$$ T_{\text{fail}} = 1 + \alpha = 1.875 $$

Since $\alpha$ is below 1.0, performance is excellent; a typical engineering guideline is to **resize** (rehash with $m' = 2m$) once $\alpha \geq 0.75$.

---

## 3.4 Algorithmic Walkthrough — `lookup` Pseudocode

```text
function LOOKUP(name):
    for scope in STACK from TOP to BOTTOM:
        record = scope.table.HASH_GET(name)
        if record != NIL:
            return (record, scope)
    error "Undeclared identifier 'name'"
    return NIL
```

```text
function INSERT(name, attributes):
    if CURRENT_SCOPE.table.HASH_GET(name) != NIL:
        error "Redeclaration of 'name' in current scope"
    record = NEW SymbolInfo(name, attributes)
    CURRENT_SCOPE.table.HASH_PUT(name, record)
    log "Inserted record into current scope"
```

```text
function EXIT_SCOPE():
    if STACK is empty:
        error "Cannot exit: no active scope"
    discarded = STACK.POP()
    log "Discarded scope 'discarded.name' with N entries"
    return discarded
```

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# The Symbol Table — Structural Diagrams & Schematics

---

## 4.1 Master Flowchart — Symbol Table Lifecycle

```mermaid
flowchart TD
    A[Source Program Tokens] --> B[Lexical Analyzer]
    B --> C{Identifier Encountered?}
    C -- No --> Z[Skip]
    C -- Yes --> D{Declaration Site?}
    D -- Yes --> E[INSERT into CURRENT scope]
    D -- No Use Site --> F[LOOKUP in scope stack]
    E --> G[Compiler Phase Continues]
    F --> H{Found in any scope?}
    H -- Yes --> I[Bind Use to Attribute Record]
    H -- No --> J[Report Undeclared Identifier Error]
    I --> G
    J --> K[Error Recovery or Halt]
    G --> L{Entering New Block?}
    L -- Yes --> M[PUSH New Scope on Stack]
    L -- No --> N{Leaving Current Block?}
    M --> G
    N -- Yes --> O[POP Top Scope and Discard Entries]
    O --> G
    N -- No --> G
```

---

## 4.2 Block Architecture — Stack of Symbol Tables

```mermaid
flowchart TB
    subgraph scopeBlock[BLOCK SCOPE - innermost]
        B1[Identifier z: int]
        B2[Identifier w: float]
    end
    subgraph scopeFunc[FUNCTION SCOPE - middle]
        F1[Identifier a: int param]
        F2[Identifier x: int shadows global]
    end
    subgraph scopeGlobal[GLOBAL SCOPE - outermost]
        G1[Identifier x: int]
        G2[Identifier y: float]
        G3[Identifier main: function]
    end
    scopeBlock --> scopeFunc
    scopeFunc --> scopeGlobal
```

> **Reading rule:** Lookup begins at the top of the stack and proceeds downward. A name is resolved at the first scope where it appears.

---

## 4.3 Data-Flow Topology — Compiler Phases vs. Symbol Table Operations

```mermaid
flowchart LR
    LEX[Lexical Analyzer] -->|insert lexeme| ST[Symbol Table Stack]
    SYN[Syntax Analyzer] -->|lookup for semantic checks| ST
    SEM[Semantic Analyzer] -->|insert with type / update type| ST
    ICG[Intermediate Code Generator] -->|lookup for addr binding| ST
    OPT[Optimizer] -->|lookup and update| ST
    TCG[Target Code Generator] -->|lookup for reg alloc| ST
    ST -->|attributes| LEX
    ST -->|attributes| SYN
    ST -->|attributes| SEM
    ST -->|attributes| ICG
    ST -->|attributes| OPT
    ST -->|attributes| TCG
```

---

## 4.4 Hash-Table Internal Layout (Bucket Diagram)

```mermaid
flowchart LR
    subgraph bucket0[Bucket 0]
        N00[head pointer]
        E00["x: int offset 0"]
    end
    subgraph bucket1[Bucket 1]
        N01[head pointer]
        E01["i: int offset 8"]
        E02["y: float offset 12"]
        E03["pi: double offset 16"]
    end
    subgraph bucket4[Bucket 4]
        N04[head pointer]
        E04["t: int offset 32"]
    end
    subgraph bucket5[Bucket 5]
        N05[head pointer]
        E05["sum: int offset 40"]
    end
    subgraph bucket6[Bucket 6]
        N06[head pointer]
        E06["n: int offset 48"]
    end
    E01 --> E02 --> E03
```

This mirrors the hand-computed bucket placements in §3.3.

---

## 4.5 Error-Handling Sequence — Redeclaration vs. Undeclared

```mermaid
flowchart TD
    S[Encounter identifier 'foo'] --> T{Declaration or use?}
    T -- Declaration --> R[lookup_in_current_scope]
    R --> Q{Already present?}
    Q -- Yes --> X[ERROR: Redeclaration]
    Q -- No --> Y[INSERT new entry]
    T -- Use --> L[Full lookup in scope stack]
    L --> P{Found anywhere?}
    P -- Yes --> U[Bind reference]
    P -- No --> V[ERROR: Undeclared identifier]
```

---

## 4.6 Hierarchical State Diagram — Scope Transitions

```mermaid
stateDiagram-v2
    [*] --> GlobalScope
    GlobalScope --> FunctionScope : enter_scope function
    FunctionScope --> BlockScope : enter_scope block
    BlockScope --> FunctionScope : exit_scope block
    FunctionScope --> GlobalScope : exit_scope function
    GlobalScope --> [*] : end of program
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# The Symbol Table — KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## 5.1 Part A — Short-Answer Questions (3 Marks Each)

### Q1. `[KTU University Exam – July 2024]`
**Define a symbol table. List any four attributes typically stored in a symbol-table entry.** *(CO1, Remember)*

**Model Answer:**

A **symbol table** is a compiler data structure that maps identifiers used in a source program to their declarations and attributes, enabling semantic analysis and code generation.

Four typical attributes:

1. **Name (lexeme)** — the textual identifier.
2. **Type** — e.g., `int`, `float`, user-defined `struct`.
3. **Scope** — the scope level where the identifier is visible.
4. **Memory location / offset** — runtime address or stack frame offset.

*(Additional acceptable answers: `kind` (variable/function/type), `line number` of declaration, `size` in bytes, `return type` for functions.)*

**[Valuation Key: 1 Mark definition + 0.5 Marks × 4 attributes = 3 Marks]**

---

### Q2. `[KTU University Exam – Dec 2023]`
**Differentiate between static and dynamic scoping. How does the symbol table participate in static scoping?** *(CO2, Understand)*

**Model Answer:**

| Aspect | Static (Lexical) Scoping | Dynamic Scoping |
|---|---|---|
| **Decision time** | At compile time, based on textual nesting | At run time, based on call stack |
| **Data structure** | Stack of symbol tables (one per lexical block) | Single runtime environment / activation record |
| **Visibility rule** | Innermost lexical block first | Most recent function call on call stack |
| **Predictability** | Highly predictable | Depends on execution path |
| **Languages** | C, Java, Python, Pascal | Older Lisp dialects, some shells |

**Symbol table in static scoping:** The compiler maintains a *stack of symbol tables* — one per block, function, or class. Lookup proceeds innermost-first, so a name in an inner block shadows outer declarations. Insertions and lookups are pure compile-time operations; no runtime traversal is needed.

**[Valuation Key: 1.5 Marks difference + 1.5 Marks symbol-table role = 3 Marks]**

---

## 5.2 Part B — Full 14-Mark Questions (Module Internal Choice)

### Question A `[KTU University Exam – June 2024]`
**(a)** Explain the organization of a symbol table using a *stack of symbol tables*. Illustrate with a sample program containing nested scopes. *(7 Marks — CO2, Understand)*

**(b)** Compare hash-table and balanced-binary-search-tree implementations of a symbol table. Under what conditions would you prefer one over the other? *(7 Marks — CO3, Apply)*

---

#### Model Solution for (a)

**Organization:**
The compiler maintains a **stack of symbol tables**, one per active lexical scope. On entering a block, function, or class, a new empty scope is **pushed** onto the stack. On exit, it is **popped** and discarded. Lookups traverse the stack from *top to bottom* (innermost to outermost) and return the first match. **Insertion** is always into the *current* (topmost) scope.

**Illustration with code:**

```c
int total;                    // GLOBAL scope
void compute(int limit) {     // push FUNCTION scope
    int total;                // shadows GLOBAL total
    if (limit > 0) {          // push BLOCK scope
        char total;           // shadows function's total
        total = 'A';
    }                         // pop BLOCK scope
    total = limit * 2;        // function's total
}                             // pop FUNCTION scope
```

**Symbol-table trace:**

| Program Point | Stack (top → bottom) | `total` Resolves To |
|---|---|---|
| After GLOBAL decl | `[ GLOBAL: {total:int, compute:fn} ]` | GLOBAL `int` |
| Inside `compute`, before `if` | `[ FUNC: {limit:int, total:int}, GLOBAL: {...} ]` | FUNCTION `int` |
| Inside `if`-block | `[ BLOCK: {total:char}, FUNC: {...}, GLOBAL: {...} ]` | BLOCK `char` |
| After `if`-block | `[ FUNC: {...}, GLOBAL: {...} ]` | FUNCTION `int` |
| After `compute` | `[ GLOBAL: {...} ]` | GLOBAL `int` |

**[Valuation Key for (a):]**
* [Organization description with push/pop: 2 Marks]
* [Lookup rule (innermost-first): 1 Mark]
* [Sample program with at least 2 nested scopes: 1 Mark]
* [Stack-state diagram or trace table: 2 Marks]
* [Conclusion: 1 Mark]
**Total = 7 Marks**

---

#### Model Solution for (b)

**Comparative Analysis:**

| Criterion | Hash Table | Balanced BST (e.g., Red-Black) |
|---|---|---|
| **Average lookup** | $\Theta(1)$ | $\Theta(\log n)$ |
| **Worst-case lookup** | $O(n)$ (poor hash) | $\Theta(\log n)$ |
| **Insertion cost** | $\Theta(1)$ amortized | $\Theta(\log n)$ |
| **Ordered traversal** | Not supported natively | Supported (in-order) |
| **Memory overhead** | Buckets + chain pointers | Node pointers + balance metadata |
| **Resizing** | Required when $\alpha$ grows | No resizing |
| **Determinism** | Probabilistic | Deterministic |

**When to prefer hash table:**
* Identifier count is large ($n > 1000$).
* Order of identifiers is *not* required (most compilers).
* Constant-time average lookup is critical (e.g., JIT compilers).

**When to prefer balanced BST:**
* Worst-case guarantees are required (real-time / safety-critical systems).
* Ordered output is needed (e.g., generating sorted `.sym` files for debuggers).
* Hash function quality is uncertain or attackers can craft collisions (DoS hardening).

**Numerical intuition:** For $n = 1{,}000{,}000$ identifiers, hash lookup is ~20 comparisons, while BST lookup is $\log_2 n \approx 20$ — comparable. But the constant factor for hash is much smaller, so hash is usually faster in practice.

**[Valuation Key for (b):]**
* [Comparison table with at least 5 rows: 3 Marks]
* [Numerical analysis of lookup costs: 2 Marks]
* [Engineering conditions for choice: 2 Marks]
**Total = 7 Marks**

---

### Question B `[KTU University Exam – Dec 2023]` *(Alternative Choice)*

**(a)** Describe the typical *information* stored in a symbol-table entry. Use an example entry to illustrate. *(7 Marks — CO2, Understand)*

**(b)** Write a *pseudo-code* (or Python-style code) for the operations `insert`, `lookup`, `enter_scope`, and `exit_scope` of a stack-of-symbol-tables. Show how shadowing is handled. *(7 Marks — CO3, Apply)*

---

#### Model Solution for (a)

**Information stored per entry:**

```
+----------------------------------------+
| SymbolInfo Record                       |
+----------------------------------------+
| name           : counter                |
| kind           : VARIABLE               |
| type_repr      : int                    |
| scope_name     : loop_body              |
| line_no        : 42                     |
| memory_offset  : 24                     |
| size_bytes     : 4                      |
| is_initialized : true                   |
| extra          : { array_dim: 1 }       |
+----------------------------------------+
```

**Field-by-field justification:**

1. **name** — the textual identifier; required for matching.
2. **kind** — variable / function / parameter / type / constant; guides how the identifier participates in code generation.
3. **type_repr** — used by the semantic analyzer for type compatibility checks.
4. **scope_name** — needed for debugging output and for `exit_scope` cleanup.
5. **line_no** — for error messages like *“undeclared identifier `counter` referenced at line 78”*.
6. **memory_offset** — used by the code generator to emit `LOAD` / `STORE` instructions.
7. **size_bytes** — used to compute next free offset and for array indexing.
8. **is_initialized** — used for warnings (e.g., Java's *“variable might not have been initialized”*).
9. **extra** — extensible field for language-specific metadata (e.g., `array_dim`, `const_value`, `vtable_index`).

**[Valuation Key for (a):]**
* [Naming 5+ attributes: 2 Marks]
* [Example record: 2 Marks]
* [Justification for each attribute: 3 Marks]
**Total = 7 Marks**

---

#### Model Solution for (b)

**Pseudo-code:**

```text
STRUCT Scope {
    name: STRING
    table: HASH_MAP<STRING, SymbolInfo>
    parent: POINTER<Scope>
}

DATA STRUCTURE ST = empty stack of Scope

PROCEDURE enter_scope(name):
    parent = ST.top IF ST not empty ELSE null
    new_scope = NEW Scope(name = name, parent = parent)
    PUSH new_scope ONTO ST
    LOG "Entered scope", name

PROCEDURE exit_scope():
    IF ST is empty:
        ERROR "No active scope to exit"
    popped = POP FROM ST
    LOG "Exited scope", popped.name, "with", popped.table.size, "entries"

PROCEDURE insert(name, kind, type_repr, line_no):
    cur = ST.top
    IF cur.table.contains(name):
        ERROR "Redeclaration of 'name' in scope", cur.name
    info = NEW SymbolInfo(name, kind, type_repr, line_no, scope = cur.name)
    cur.table.put(name, info)
    LOG "Inserted", info, "into scope", cur.name

PROCEDURE lookup(name) -> SymbolInfo:
    FOR scope IN REVERSED(ST):              // innermost first
        info = scope.table.get(name)
        IF info != null:
            LOG "Resolved 'name' in scope", scope.name
            RETURN info
    ERROR "Undeclared identifier 'name'"
```

**Shadowing demonstration:**

```text
enter_scope("global")
insert("x", int)                  // GLOBAL: {x:int}

enter_scope("foo")
insert("x", float)                // FUNC_foo: {x:float}, GLOBAL: {x:int}
                                 //   <-- x now resolves to float (shadowed)
lookup("x")  ->  x:float  (from FUNC_foo)  // global x is hidden

exit_scope()                      // back to GLOBAL
lookup("x")  ->  x:int  (from GLOBAL)       // shadowing lifted
```

The shadowing is **handled implicitly** by the innermost-first traversal — no special-case logic is needed in `lookup`.

**[Valuation Key for (b):]**
* [`enter_scope` and `exit_scope` with stack ops: 2 Marks]
* [`insert` with redeclaration check: 2 Marks]
* [`lookup` with innermost-first traversal: 2 Marks]
* [Shadowing demonstration: 1 Mark]
**Total = 7 Marks**

---

> [!WARNING]
> **KTU Examiner's Valuation Pitfall Callout — Symbol Table Questions**
>
> 1. **Forgetting to mention "stack of tables"** — A single global hash table is *not* the answer. KTU expects the *stack of symbol tables* model for block-structured languages.
> 2. **Confusing shadowing with redeclaration** — Shadowing across scopes is *legal*; redeclaration *within the same scope* is an error. The `insert` function must check only the *current* scope, not the entire stack.
> 3. **Ignoring `lookup_in_current_scope`** — When validating a new declaration, you must search *only* the topmost scope; otherwise legitimate shadowing will be falsely rejected.
> 4. **Skipping the trace table** — A 7-mark question on scope handling expects a *state trace table*; describing operations in prose alone loses 2–3 marks.
> 5. **Mixing up static and dynamic depth** — Static depth = lexical nesting; dynamic depth = call-stack nesting. The symbol table operates on the *static* depth.
> 6. **Omitting string interning** — For 14-mark questions, mention that long names are *interned* in a string pool to save memory; this is a frequent *“analyze”*-level mark-grabber.

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — The Symbol Table (KTU 2024 Module 2)**

- **Definition:** A *compiler data structure* mapping identifiers to attribute records; central to all phases of compilation.
- **Mathematical view:** A (partial) function $ST : \Sigma \rightarrow A$; not necessarily bijective because of shadowing.
- **Key operations (4):** `insert`, `lookup`, `enter_scope`, `exit_scope`. Always check *only the current scope* for redeclaration.
- **Data structure of choice:** **Stack of hash tables** — one per scope. Production compilers like GCC and Clang use this model.
- **Lookup order:** **Innermost scope first**, then outward — this is what implements **shadowing** naturally.
- **Hash performance:** Expected $O(1)$, controlled by **load factor** $\alpha = n/m$. Resize when $\alpha \geq 0.75$.
- **BST performance:** Worst-case $O(\log n)$; used when ordered output or worst-case guarantees are needed.
- **Scope kinds:** *GLOBAL* → *FUNCTION* → *BLOCK* (or *CLASS*). Stack depth = lexical nesting depth.
- **Error types:** (1) *Undeclared identifier* — `lookup` fails across all scopes; (2) *Redeclaration* — same name inserted in the same scope.
- **Attribute record fields (must know):** `name`, `kind`, `type`, `scope`, `line_no`, `offset`, `size`, `is_initialized`, optional `extra`.
- **Scope terminology:**
    * **Static depth** = number of enclosing *lexical* blocks.
    * **Dynamic depth** = number of *active* function calls at runtime.
    * **Shadowing** = inner scope hides outer same-named binding.
    * **Hiding** = OOP-specific (inherited member overshadowed by subclass).
    * **Overloading** = same name, *different* signature in the *same* scope.
- **Production insights:**
    * String interning dedupes long names.
    * Resizing the hash table on $\alpha \geq 0.75$ keeps $E[T] < 1.5$.
    * LLVM's `StringMap` and GCC's `ggc-common.c` are real-world references.
- **Exam tip:** Always draw a **scope stack trace table** for any nested-scope question — it is the single most effective way to secure full marks on 7-mark scope questions.
- **Code tip:** Use the provided Python `SymbolTableStack` class as the *reference implementation* — it is fully type-hinted, error-checked, and matches the canonical KTU description.

<!-- SECTION_5_END -->
