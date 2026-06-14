# extending interface(s)

<!-- SECTION_1_START -->
# Extending Interface(s) in Java

## 1. Core Technical Definition

> [!IMPORTANT]
> **KTU 2024 Syllabus Definition:**
> In Java, **interface inheritance** is achieved using the `extends` keyword (not `implements`). An interface can extend one or more parent interfaces, inheriting their abstract methods, default methods, and static constants. A class that implements the child interface **must provide implementations for ALL inherited abstract methods** — both directly declared and transitively inherited from parent interfaces.

### Formal Syntax

```java
// Single Interface Extension
interface ChildInterface extends ParentInterface {
    // additional abstract methods
}

// Multiple Interface Extension
interface ChildInterface extends InterfaceA, InterfaceB, InterfaceC {
    // additional abstract methods
}
```

### Conceptual Analogy / Intuition

> [!NOTE]
> **The "Genetic Traits" Analogy:**
> Think of interfaces like a **family tree of contracts**.
> - A **parent interface** (like `Vehicle`) declares broad behaviors: `start()`, `stop()`.
> - A **child interface** (like `ElectricVehicle extends Vehicle`) **inherits ALL family traits automatically** AND can add its own unique traits: `chargeBattery()`.
> - Any class that signs the child contract (`implements ElectricVehicle`) **must fulfill the WHOLE contract** — both the inherited duties from `Vehicle` AND its own specific duties.
> - It's like a son automatically inheriting his father's legal obligations, plus adding his own new commitments.

> [!NOTE]
> **The "Restaurant Menu Hierarchy" Analogy:**
> Consider a restaurant's menu system. The `Menu` interface declares `getItems()`. The `VeganMenu extends Menu` interface **automatically inherits** the `getItems()` requirement and adds a new requirement `getVeganCertification()`. A class implementing `VeganMenu` must implement both — because a vegan menu IS-A menu, but with stricter rules.

### Key Technical Facts (KTU Board Standard)

> [!IMPORTANT]
> **Critical Distinctions for Board Exams:**
> - Interfaces use **`extends`** to inherit other interfaces (NOT `implements`).
> - Classes use **`implements`** to inherit from interfaces.
> - An interface can extend **multiple** interfaces (Java supports **multiple inheritance of type** through interfaces).
> - A class can implement **multiple** interfaces simultaneously.
> - Interfaces **cannot extend classes** — only other interfaces.
> - Members inherited are always **public** (visibility cannot be reduced).

### Visualization Control

> [!VISUALIZATION CONTROL]
> **Concept:** Interface Inheritance Tree (Hierarchical View)
> **Geometric Description:** Visualize a tree structure where:
> - **Root level (Y-axis top):** A single parent interface node at coordinates (0, 3)
> - **Middle level (Y=1.5):** Two child interfaces branching from parent at (-2, 1.5) and (2, 1.5)
> - **Leaf level (Y=0):** Implementing classes hanging below each child at (-2, 0) and (2, 0)
> - **Edge types:** Solid arrows for `extends` (interface-to-interface), dashed arrows for `implements` (class-to-interface)
> - **Color coding:** Blue nodes for interfaces, green nodes for classes

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2. Theoretical Framework

### 2.1 Rules of Interface Inheritance (KTU High-Yield Points)

> [!NOTE]
> **Rule 1: The `extends` Keyword**
> Only the `extends` keyword is valid between interfaces. Using `implements` between two interfaces is a **compilation error**.

> [!NOTE]
> **Rule 2: Multiple Inheritance Allowed**
> Java permits an interface to extend any number of parent interfaces. This resolves the **Diamond Problem** safely because interfaces only declare *contracts* (no state/instantiated fields).

> [!NOTE]
> **Rule 3: Transitive Contract Obligation**
> If `C extends B` and `B extends A`, then any class implementing `C` MUST implement ALL methods from both `A` AND `B` AND `C` (transitive closure).

> [!NOTE]
> **Rule 4: Default Method Inheritance**
> If a parent interface has a `default` method and the child interface does **not** override it, the child interface **inherits** that default behavior as-is.

> [!NOTE]
> **Rule 5: Static Method Hiding**
> Static methods in interfaces are **NOT inherited**. They must be accessed using the interface name where they are originally defined.

> [!NOTE]
> **Rule 6: Constant Inheritance**
> All variables in interfaces are implicitly `public static final`. They are inherited and accessible through the child interface name.

### 2.2 Types of Interface Extension

| Extension Type | Syntax Pattern | Use Case |
|---|---|---|
| **Single Extension** | `interface I2 extends I1` | Specialized version of a generic contract |
| **Multiple Extension** | `interface I3 extends I1, I2` | Combining multiple capability contracts |
| **Hierarchical (Multilevel)** | `I3 extends I2 extends I1` | Deep specialization chains |
| **Diamond Pattern** | `I3 extends I1, I2` where I1, I2 share a common ancestor | Resolved by Java's default method rules |

### 2.3 KTU Formula Sheet / Cheat Sheet

| Concept | Syntax / Rule | Exam Memory Aid |
|---|---|---|
| Interface extends Interface | `interface B extends A` | Use `extends`, never `implements` |
| Multiple Extension | `interface C extends A, B` | Comma-separated, no limit on count |
| Class implements Child Interface | `class X implements C` | Must implement ALL methods from entire chain |
| Inherited Constants | `A.VAR` accessible via child | Inherited as `public static final` |
| Inherited Default Methods | Automatically available | Can be overridden in child |
| Static Methods | NOT inherited | Call via original interface name |
| Access Modifier | Always `public` | Cannot be downgraded |
| Class Extends Interface | **NOT ALLOWED** | Compile-time error |

### 2.4 Real-World Engineering Utility

> [!IMPORTANT]
> **Where This Pattern Is Used in Production Systems:**

- **Java Collections Framework:** `List` extends `Collection`, `ArrayList implements List` — leveraging the entire hierarchy.
- **JDBC API:** `Connection`, `Statement`, `ResultSet` form an inheritance chain enabling database abstraction.
- **Spring Framework:** `ApplicationContext` extends `ListableBeanFactory` extends `BeanFactory` — layered service contracts.
- **Android SDK:** `View` hierarchy and `OnClickListener` chains use interface extension extensively.
- **Microservices:** Contract-driven design where service interfaces extend common base interfaces for `start()`, `stop()`, `healthCheck()`.

### 2.5 Diamond Problem Resolution in Interface Extension

> [!NOTE]
> **Scenario:** Interface `D` extends both `B` and `C`, and both `B` and `C` extend a common parent `A` with a `default` method.
> 
> **Java's Resolution Rule:**
> 1. **Class wins over interface** — if the implementing class provides the method, it overrides everything.
> 2. **Most specific interface wins** — if `B` overrides `A`'s default method, `B`'s version is used by classes implementing `D`.
> 3. **Compile-time error** — if ambiguity persists (two equally specific paths), the implementing class **MUST** override the method.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code Implementation

## 3. Complete Code Walkthroughs

### 3.1 Example 1: Single Interface Extension (Foundation Level)

> [!NOTE]
> **Scenario:** A `BankAccount` interface declares basic operations. `SavingsAccount` extends it to add interest-specific behavior.

```java
// Parent Interface
interface BankAccount {
    void deposit(double amount);
    void withdraw(double amount);
    double getBalance();
}

// Child Interface extending parent
interface SavingsAccount extends BankAccount {
    void addInterest();
    double calculateInterest(double rate);
}

// Implementing class MUST implement ALL 5 methods
class SBISavings implements SavingsAccount {
    private double balance;
    private final String accountHolder;
    
    public SBISavings(String accountHolder, double initialBalance) {
        if (initialBalance < 0) {
            throw new IllegalArgumentException("Initial balance cannot be negative");
        }
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    
    @Override
    public void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Deposit amount must be positive.");
            return;
        }
        balance += amount;
        System.out.printf("Deposited: %.2f | New Balance: %.2f%n", amount, balance);
    }
    
    @Override
    public void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("Withdrawal amount must be positive.");
            return;
        }
        if (amount > balance) {
            System.out.println("Insufficient funds. Withdrawal denied.");
            return;
        }
        balance -= amount;
        System.out.printf("Withdrawn: %.2f | New Balance: %.2f%n", amount, balance);
    }
    
    @Override
    public double getBalance() {
        return balance;
    }
    
    @Override
    public void addInterest() {
        double interest = calculateInterest(4.5);
        balance += interest;
        System.out.printf("Interest added: %.2f | New Balance: %.2f%n", interest, balance);
    }
    
    @Override
    public double calculateInterest(double rate) {
        return (balance * rate) / 100.0;
    }
}

public class BankDemo {
    public static void main(String[] args) {
        SBISavings account = new SBISavings("Arjun Menon", 10000.00);
        account.deposit(5000.00);
        account.withdraw(2000.00);
        account.addInterest();
        System.out.printf("Final Balance: %.2f%n", account.getBalance());
    }
}
```

**Output Trace:**
```
Deposited: 5000.00 | New Balance: 15000.00
Withdrawn: 2000.00 | New Balance: 13000.00
Interest added: 585.00 | New Balance: 13585.00
Final Balance: 13585.00
```

---

### 3.2 Example 2: Multiple Interface Extension (Diamond Pattern)

> [!NOTE]
> **Scenario:** Demonstrating the diamond pattern with default method resolution — a classic KTU exam topic.

```java
// Top-level grandparent interface
interface SmartDevice {
    default void powerOn() {
        System.out.println("SmartDevice: Generic power-on sequence initiated.");
    }
    
    void connect();
}

// First parent
interface SmartTV extends SmartDevice {
    @Override
    default void powerOn() {
        System.out.println("SmartTV: Booting display panel and HDMI handshake.");
    }
    
    void changeChannel(int channel);
}

// Second parent
interface SmartSpeaker extends SmartDevice {
    @Override
    default void powerOn() {
        System.out.println("SmartSpeaker: Initializing audio drivers and microphone array.");
    }
    
    void playMusic(String track);
}

// Diamond: extends BOTH parents
interface SmartTVWithSpeaker extends SmartTV, SmartSpeaker {
    // No override of powerOn() here — let's see what happens
    void voiceControl(String command);
}

// Implementing class MUST resolve the ambiguity
class LivingRoomHub implements SmartTVWithSpeaker {
    
    @Override
    public void connect() {
        System.out.println("Connected to Wi-Fi network: HomeNet_5G");
    }
    
    @Override
    public void changeChannel(int channel) {
        System.out.println("Channel changed to: " + channel);
    }
    
    @Override
    public void playMusic(String track) {
        System.out.println("Now playing: " + track);
    }
    
    @Override
    public void voiceControl(String command) {
        System.out.println("Voice command received: " + command);
    }
    
    // Resolving diamond ambiguity — MUST override powerOn()
    @Override
    public void powerOn() {
        System.out.println("LivingRoomHub: Coordinated startup sequence begin.");
        SmartTV.super.powerOn();      // Explicitly call SmartTV's version
        SmartSpeaker.super.powerOn(); // Explicitly call SmartSpeaker's version
        System.out.println("LivingRoomHub: All subsystems online.");
    }
}

public class DiamondDemo {
    public static void main(String[] args) {
        LivingRoomHub hub = new LivingRoomHub();
        hub.powerOn();
        hub.connect();
        hub.changeChannel(7);
        hub.playMusic("Kerala Folk Fusion");
        hub.voiceControl("Dim lights to 30%");
    }
}
```

**Output Trace:**
```
LivingRoomHub: Coordinated startup sequence begin.
SmartTV: Booting display panel and HDMI handshake.
SmartSpeaker: Initializing audio drivers and microphone array.
LivingRoomHub: All subsystems online.
Connected to Wi-Fi network: HomeNet_5G
Channel changed to: 7
Now playing: Kerala Folk Fusion
Voice command received: Dim lights to 30%
```

> [!WARNING]
> **Common Student Mistake:** If you remove the `powerOn()` override in `LivingRoomHub`, the compiler throws: *"Inherited default methods powerOn from SmartTV and SmartSpeaker conflict."* You MUST override it OR the child interface (`SmartTVWithSpeaker`) must override it to resolve the conflict.

---

### 3.3 Example 3: Multilevel Interface Extension Chain

```java
// Level 1: Most generic
interface Entity {
    String getId();
    void validate();
}

// Level 2: Mid-level specialization
interface AuditableEntity extends Entity {
    void logAction(String action);
    java.time.LocalDateTime getCreatedAt();
}

// Level 3: Most specific
interface AuditableUser extends AuditableEntity {
    String getUsername();
    boolean checkPassword(String input);
}

// Final implementation — must implement ALL methods from ALL three levels
class SystemUser implements AuditableUser {
    private final String id;
    private final String username;
    private final String passwordHash;
    private final java.time.LocalDateTime createdAt;
    
    public SystemUser(String id, String username, String passwordHash) {
        if (id == null || id.isEmpty()) {
            throw new IllegalArgumentException("ID cannot be null or empty");
        }
        this.id = id;
        this.username = username;
        this.passwordHash = passwordHash;
        this.createdAt = java.time.LocalDateTime.now();
    }
    
    @Override
    public String getId() {
        return id;
    }
    
    @Override
    public void validate() {
        if (id == null || username == null) {
            throw new IllegalStateException("Entity validation failed");
        }
        System.out.println("Entity validation passed for ID: " + id);
    }
    
    @Override
    public void logAction(String action) {
        System.out.printf("[AUDIT %s] User: %s | Action: %s%n", 
            createdAt, username, action);
    }
    
    @Override
    public java.time.LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    @Override
    public String getUsername() {
        return username;
    }
    
    @Override
    public boolean checkPassword(String input) {
        return this.passwordHash.equals(Integer.toString(input.hashCode()));
    }
}

public class ChainDemo {
    public static void main(String[] args) {
        SystemUser user = new SystemUser("U001", "admin_ktu", "hashed_secret");
        user.validate();
        user.logAction("LOGIN_ATTEMPT");
        System.out.println("Username: " + user.getUsername());
        System.out.println("Created: " + user.getCreatedAt());
    }
}
```

---

### 3.4 Example 4: Constants and Static Methods in Extended Interfaces

```java
interface PaymentGateway {
    String CURRENCY = "INR";        // implicitly public static final
    static String getVersion() {    // static method (NOT inherited)
        return "PaymentGateway-v1.0";
    }
    void processPayment(double amount);
}

interface RefundableGateway extends PaymentGateway {
    String REFUND_POLICY = "7_DAY";  // child can add its own constants
    void processRefund(String transactionId);
}

class PayService implements RefundableGateway {
    @Override
    public void processPayment(double amount) {
        System.out.printf("Processing payment: %.2f %s%n", amount, CURRENCY);
    }
    
    @Override
    public void processRefund(String transactionId) {
        System.out.println("Refund initiated for TxnID: " + transactionId 
            + " (Policy: " + REFUND_POLICY + ")");
    }
}

public class StaticDemo {
    public static void main(String[] args) {
        System.out.println("Gateway Version: " + PaymentGateway.getVersion());
        System.out.println("Currency constant via child: " + RefundableGateway.CURRENCY);
        System.out.println("Refund Policy: " + RefundableGateway.REFUND_POLICY);
        
        PayService service = new PayService();
        service.processPayment(2500.00);
        service.processRefund("TXN2024001");
    }
}
```

**Output Trace:**
```
Gateway Version: PaymentGateway-v1.0
Currency constant via child: INR
Refund Policy: 7_DAY
Processing payment: 2500.00 INR
Refund initiated for TxnID: TXN2024001 (Policy: 7_DAY)
```

> [!IMPORTANT]
> **Key Observation:** `PaymentGateway.getVersion()` works because static methods are called by their **defining** interface name. They are NOT inherited even by child interfaces. Constants ARE inherited.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Single Interface Extension Flow

```mermaid
graph TD
    A["BankAccount (Parent Interface)"]:::iface
    B["SavingsAccount (Child Interface)"]:::iface
    C["SBISavings (Concrete Class)"]:::class
    
    A1["deposit()"]:::method
    A2["withdraw()"]:::method
    A3["getBalance()"]:::method
    
    B1["addInterest()"]:::method
    B2["calculateInterest()"]:::method
    
    C1["Implements all 5 methods"]:::impl
    
    A --- A1
    A --- A2
    A --- A3
    B --- B1
    B --- B2
    A -->|extends| B
    B -.->|implements| C
    C --- C1
    
    classDef iface fill:#4A90E2,stroke:#1B4F8C,color:#FFFFFF,stroke-width:2px
    classDef class fill:#50C878,stroke:#2E7D4F,color:#FFFFFF,stroke-width:2px
    classDef method fill:#FFF4D6,stroke:#B8860B,color:#333333,stroke-width:1px
    classDef impl fill:#FFD6D6,stroke:#A02020,color:#333333,stroke-width:1px,stroke-dasharray: 5 5
```

## 4.2 Multiple Interface Extension (Diamond Pattern Resolution)

```mermaid
graph TD
    subgraph LEVEL0["Level 0: Grandparent"]
        SD["SmartDevice"]:::iface
    end
    
    subgraph LEVEL1["Level 1: Parents"]
        STV["SmartTV"]:::iface
        SSK["SmartSpeaker"]:::iface
    end
    
    subgraph LEVEL2["Level 2: Diamond Child"]
        STVS["SmartTVWithSpeaker"]:::iface
    end
    
    subgraph LEVEL3["Level 3: Implementation"]
        LRH["LivingRoomHub"]:::class
    end
    
    SD -->|extends| STV
    SD -->|extends| SSK
    STV -->|extends| STVS
    SSK -->|extends| STVS
    STVS -.->|implements| LRH
    
    SD_M["powerOn() default"]:::method
    STV_M["powerOn() default OVERRIDDEN"]:::method
    SSK_M["powerOn() default OVERRIDDEN"]:::method
    LRH_M["powerOn() EXPLICITLY RESOLVED"]:::impl
    
    SD --- SD_M
    STV --- STV_M
    SSK --- SSK_M
    LRH --- LRH_M
    
    classDef iface fill:#4A90E2,stroke:#1B4F8C,color:#FFFFFF,stroke-width:2px
    classDef class fill:#50C878,stroke:#2E7D4F,color:#FFFFFF,stroke-width:2px
    classDef method fill:#FFF4D6,stroke:#B8860B,color:#333333,stroke-width:1px
    classDef impl fill:#FFD6D6,stroke:#A02020,color:#333333,stroke-width:1px,stroke-dasharray: 5 5
```

## 4.3 Multilevel Interface Extension Chain

```mermaid
graph TD
    E1["Entity"]:::iface
    E2["AuditableEntity"]:::iface
    E3["AuditableUser"]:::iface
    E4["SystemUser"]:::class
    
    E1 -->|extends| E2
    E2 -->|extends| E3
    E3 -.->|implements| E4
    
    M1["Methods: getId(), validate()"]:::method
    M2["Methods: logAction(), getCreatedAt()"]:::method
    M3["Methods: getUsername(), checkPassword()"]:::method
    M4["Implements ALL 6 methods from entire chain"]:::impl
    
    E1 --- M1
    E2 --- M2
    E3 --- M3
    E4 --- M4
    
    classDef iface fill:#4A90E2,stroke:#1B4F8C,color:#FFFFFF,stroke-width:2px
    classDef class fill:#50C878,stroke:#2E7D4F,color:#FFFFFF,stroke-width:2px
    classDef method fill:#FFF4D6,stroke:#B8860B,color:#333333,stroke-width:1px
    classDef impl fill:#FFD6D6,stroke:#A02020,color:#333333,stroke-width:1px,stroke-dasharray: 5 5
```

## 4.4 Functional Architecture Flow: Interface Extension Contract System

```mermaid
graph LR
    subgraph CONTRACTS["Contract Definition Layer"]
        IP["Parent Interface Contracts"]:::iface
        IC["Child Interface Contracts"]:::iface
    end
    
    subgraph RESOLUTION["Resolution Layer"]
        DR["Diamond Resolver Engine"]:::resolver
        CC["Constant Cascade Registry"]:::resolver
        SI["Static Method Isolator"]:::resolver
    end
    
    subgraph IMPLEMENTATION["Implementation Layer"]
        CLS["Concrete Classes"]:::class
        OBJ["Runtime Objects"]:::class
    end
    
    subgraph VERIFICATION["Verification Layer"]
        CMP["Compiler Contract Checker"]:::verifier
        TST["JUnit Test Suite"]:::verifier
    end
    
    IP -->|extends| IC
    IC -->|implements| CLS
    CLS --> OBJ
    
    DR -.->|resolves| IC
    CC -.->|propagates| IC
    SI -.->|isolates| IP
    
    CMP -.->|validates| CLS
    TST -.->|verifies| OBJ
    
    classDef iface fill:#4A90E2,stroke:#1B4F8C,color:#FFFFFF,stroke-width:2px
    classDef class fill:#50C878,stroke:#2E7D4F,color:#FFFFFF,stroke-width:2px
    classDef resolver fill:#FFB347,stroke:#8B5A00,color:#333333,stroke-width:2px
    classDef verifier fill:#DDA0DD,stroke:#6A0DAD,color:#FFFFFF,stroke-width:2px
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank

## 5.1 Part A Questions (3 Marks Each)

### Question 1
**[KTU University Exam - July 2024]** — *CO2, Remember*

**Q: Differentiate between a class extending another class and an interface extending another interface. List any two key differences.**

**Model Answer (Valuation Key):**

| Aspect | Class Extension | Interface Extension |
|---|---|---|
| Keyword | `extends` | `extends` |
| Multiple Inheritance | NOT allowed (Java classes) | **Allowed** (comma-separated) |
| Inherited Members | State (instance vars) + Methods | **Only contracts** (abstract methods) + constants |
| Constructor Inheritance | Yes (via super) | **No** — interfaces have no constructors |
| `implements` usage | NOT allowed | NOT allowed between two interfaces |

**[Mentioning keyword distinction: 1 Mark] [Multiple inheritance difference: 1 Mark] [State vs contract distinction: 1 Mark]**

---

### Question 2
**[KTU University Exam - Dec 2023]** — *CO2, Understand*

**Q: What happens if an interface extends two parent interfaces, and both parents declare the same default method? Explain the resolution rule.**

**Model Answer:**

When a child interface inherits two default methods with identical signatures from multiple parents, a **diamond conflict** occurs. Java's resolution priority is:

1. **Method declared in class** wins over all interface defaults.
2. **Most specific sub-interface's** default method wins over less specific ones.
3. If the conflict is **unresolvable** (both paths equally specific), the implementing class **must override** the method, or a **compile-time error** is raised.

**[Stating the conflict: 1 Mark] [Listing at least 2 resolution rules: 2 Marks]**

---

## 5.2 Part B Questions (14 Marks Each — Module Internal Choice)

### Question A — *Option 1*

**[KTU University Exam - July 2024]** — *CO2, CO3 | Apply / Analyze*

**Q: (a) [7 Marks] Explain the concept of interface inheritance in Java with a suitable example demonstrating how one interface extends another. State clearly what obligations a class implementing the child interface must fulfill.**

**(b) [7 Marks] Write a Java program to demonstrate the diamond problem scenario where interface `D` extends both `B` and `C`, and both `B` and `C` extend a common interface `A` having a default method. Show how the conflict is resolved.**

---

#### Solution to Part (a) — 7 Marks

**Conceptual Explanation (4 Marks):**

Interface inheritance allows one interface to acquire the abstract method declarations of one or more parent interfaces using the `extends` keyword. The child interface **transitively inherits all abstract method contracts** from its parents. When a concrete class `implements` the child interface, it is contractually obligated to provide **concrete implementations for the ENTIRE chain** of abstract methods — those declared in the child itself, plus those inherited from every ancestor in the hierarchy.

Unlike class inheritance, Java permits an interface to extend **multiple** parent interfaces simultaneously, providing a clean solution to enable **multiple inheritance of type** without the state-management complications that plague multiple class inheritance.

**Code Example (3 Marks):**

```java
// Parent Interface
interface Shape {
    double calculateArea();
    double calculatePerimeter();
}

// Child Interface extending Shape
interface ColoredShape extends Shape {
    String getColor();
    void setColor(String color);
}

// Implementing class — must implement ALL 4 methods
class ColoredCircle implements ColoredShape {
    private double radius;
    private String color;
    
    public ColoredCircle(double radius, String color) {
        this.radius = radius;
        this.color = color;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
    
    @Override
    public String getColor() {
        return color;
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
    }
}
```

**Valuation Key:**
- [Defining parent and child interface: 2 Marks]
- [Showing `extends` keyword usage: 1 Mark]
- [Implementing class fulfilling ALL inherited methods: 2 Marks]
- [Correct explanation of obligations: 2 Marks]

---

#### Solution to Part (b) — 7 Marks

```java
// Level 0: Common ancestor with default method
interface Printer {
    default void connect() {
        System.out.println("Printer: Default USB connection established.");
    }
    void print(String document);
}

// Level 1: Two parents extending Printer
interface WirelessPrinter extends Printer {
    @Override
    default void connect() {
        System.out.println("WirelessPrinter: Connecting via Wi-Fi Direct.");
    }
    void scan();
}

interface BluetoothPrinter extends Printer {
    @Override
    default void connect() {
        System.out.println("BluetoothPrinter: Pairing via Bluetooth protocol.");
    }
    void sendStatus();
}

// Level 2: Diamond child
interface HybridPrinter extends WirelessPrinter, BluetoothPrinter {
    // Conflict exists — HybridPrinter inherits two 'connect()' defaults
    @Override
    default void connect() {
        System.out.println("HybridPrinter: Initiating dual-mode connection.");
        WirelessPrinter.super.connect();
        BluetoothPrinter.super.connect();
    }
}

// Implementation resolves any residual ambiguity
class OfficePrinter implements HybridPrinter {
    
    @Override
    public void print(String document) {
        System.out.println("Printing document: " + document);
    }
    
    @Override
    public void scan() {
        System.out.println("Scanning to local memory buffer.");
    }
    
    @Override
    public void sendStatus() {
        System.out.println("Status: Online | Ink: 78% | Paper: Loaded");
    }
}

public class DiamondResolutionDemo {
    public static void main(String[] args) {
        OfficePrinter printer = new OfficePrinter();
        printer.connect();
        printer.print("KTU_Exam_Paper_2024.pdf");
        printer.scan();
        printer.sendStatus();
    }
}
```

**Output:**
```
HybridPrinter: Initiating dual-mode connection.
WirelessPrinter: Connecting via Wi-Fi Direct.
BluetoothPrinter: Pairing via Bluetooth protocol.
Printing document: KTU_Exam_Paper_2024.pdf
Scanning to local memory buffer.
Status: Online | Ink: 78% | Paper: Loaded
```

**Valuation Key:**
- [Defining three-level interface hierarchy: 2 Marks]
- [Showing conflicting default methods: 2 Marks]
- [Correct resolution via `InterfaceName.super.method()` syntax: 2 Marks]
- [Working implementation with output: 1 Mark]

---

### Question B — *Option 2*

**[KTU University Exam - Dec 2023]** — *CO3, CO4 | Apply / Create*

**Q: (a) [7 Marks] Design and implement a multilevel interface inheritance hierarchy for a University Course Management System. The hierarchy should have at least three levels (e.g., `Course` → `GradedCourse` → `ElectiveGradedCourse`), with each level adding specific functionalities. Demonstrate with a complete Java program.**

**(b) [7 Marks] Explain the rules regarding constant inheritance and static method behavior when an interface extends another interface. Provide an illustrative code snippet.**

---

#### Solution to Part (a) — 7 Marks

```java
import java.time.LocalDateTime;

// Level 1: Base Course Interface
interface Course {
    String getCourseCode();
    String getCourseName();
    int getCredits();
    void displaySyllabus();
}

// Level 2: Graded Course Interface extending Course
interface GradedCourse extends Course {
    void assignGrade(String studentId, char grade);
    char getGrade(String studentId);
    double calculateGPA();
}

// Level 3: Elective Graded Course Interface extending GradedCourse
interface ElectiveGradedCourse extends GradedCourse {
    void enrollStudent(String studentId);
    boolean isElectiveOpen();
    String getDepartment();
    int getMaxSeats();
}

// Concrete implementation
class KTU2024SchemeCourse implements ElectiveGradedCourse {
    private final String courseCode;
    private final String courseName;
    private final int credits;
    private final String department;
    private final int maxSeats;
    private final java.util.Map<String, Character> grades = new java.util.HashMap<>();
    private final java.util.Set<String> enrolled = new java.util.HashSet<>();
    
    public KTU2024SchemeCourse(String courseCode, String courseName, 
                                int credits, String department, int maxSeats) {
        this.courseCode = courseCode;
        this.courseName = courseName;
        this.credits = credits;
        this.department = department;
        this.maxSeats = maxSeats;
    }
    
    // From Course (Level 1)
    @Override
    public String getCourseCode() { return courseCode; }
    
    @Override
    public String getCourseName() { return courseName; }
    
    @Override
    public int getCredits() { return credits; }
    
    @Override
    public void displaySyllabus() {
        System.out.println("=== Syllabus for " + courseCode + " ===");
        System.out.println("Module 1: OOP Fundamentals");
        System.out.println("Module 2: Inheritance & Polymorphism");
        System.out.println("Module 3: Packages and Interfaces");
    }
    
    // From GradedCourse (Level 2)
    @Override
    public void assignGrade(String studentId, char grade) {
        if (grade < 'A' || grade > 'F') {
            throw new IllegalArgumentException("Invalid grade");
        }
        grades.put(studentId, grade);
        System.out.println("Grade " + grade + " assigned to student " + studentId);
    }
    
    @Override
    public char getGrade(String studentId) {
        return grades.getOrDefault(studentId, 'N');
    }
    
    @Override
    public double calculateGPA() {
        if (grades.isEmpty()) return 0.0;
        double total = 0;
        for (char g : grades.values()) {
            total += (g == 'A') ? 4.0 : (g == 'B') ? 3.0 : (g == 'C') ? 2.0 : 0.0;
        }
        return total / grades.size();
    }
    
    // From ElectiveGradedCourse (Level 3)
    @Override
    public void enrollStudent(String studentId) {
        if (enrolled.size() >= maxSeats) {
            System.out.println("Enrollment full. Seat denied for " + studentId);
            return;
        }
        enrolled.add(studentId);
        System.out.println("Student " + studentId + " enrolled successfully.");
    }
    
    @Override
    public boolean isElectiveOpen() {
        return enrolled.size() < maxSeats;
    }
    
    @Override
    public String getDepartment() { return department; }
    
    @Override
    public int getMaxSeats() { return maxSeats; }
}

public class UniversityDemo {
    public static void main(String[] args) {
        KTU2024SchemeCourse course = new KTU2024SchemeCourse(
            "PBCST304", "Object Oriented Programming", 4, "CSE", 60);
        
        course.displaySyllabus();
        course.enrollStudent("KTU2021-001");
        course.enrollStudent("KTU2021-002");
        System.out.println("Seats open: " + course.isElectiveOpen());
        
        course.assignGrade("KTU2021-001", 'A');
        course.assignGrade("KTU2021-002", 'B');
        System.out.printf("Course GPA: %.2f%n", course.calculateGPA());
    }
}
```

**Valuation Key:**
- [Three-level hierarchy correctly designed: 2 Marks]
- [Each level adds new methods: 2 Marks]
- [Complete implementation of all inherited methods: 2 Marks]
- [Output and working program: 1 Mark]

---

#### Solution to Part (b) — 7 Marks

**Conceptual Explanation (3 Marks):**

When an interface extends another interface:

1. **Constants (`public static final` variables) ARE inherited** transitively. A child interface can access parent constants directly by name, and external code can access them via either the parent or child interface name.

2. **Static methods are NOT inherited.** Unlike constants, static methods belong to the interface in which they are originally defined. They must be invoked using the **defining interface's** name as a qualifier.

3. **Abstract methods ARE inherited** as abstract contracts, which the child may override or pass down to implementing classes.

**Code Illustration (4 Marks):**

```java
interface BaseConfig {
    int MAX_CONNECTIONS = 100;              // constant — INHERITED
    String PROTOCOL = "HTTPS";             // constant — INHERITED
    
    static String getEnvironment() {        // static method — NOT inherited
        return "PRODUCTION";
    }
    
    void initialize();
}

interface SecureConfig extends BaseConfig {
    int ENCRYPTION_BITS = 256;              // child can add its own constants
    void applySecurityPolicy();
}

class WebAppConfig implements SecureConfig {
    @Override
    public void initialize() {
        System.out.println("Initializing with " + MAX_CONNECTIONS + " max connections");
        System.out.println("Using protocol: " + PROTOCOL);
    }
    
    @Override
    public void applySecurityPolicy() {
        System.out.println("Applying " + ENCRYPTION_BITS + "-bit encryption");
    }
}

public class StaticInheritanceDemo {
    public static void main(String[] args) {
        // Accessing inherited constants via CHILD interface name
        System.out.println("Max connections (via child): " + SecureConfig.MAX_CONNECTIONS);
        System.out.println("Protocol (via child): " + SecureConfig.PROTOCOL);
        System.out.println("Encryption bits: " + SecureConfig.ENCRYPTION_BITS);
        
        // Static method MUST be called via the DEFINING interface
        System.out.println("Environment: " + BaseConfig.getEnvironment());
        // The following would COMPILE-ERROR:
        // SecureConfig.getEnvironment();  // static methods are NOT inherited
        
        WebAppConfig app = new WebAppConfig();
        app.initialize();
        app.applySecurityPolicy();
    }
}
```

**Output:**
```
Max connections (via child): 100
Protocol (via child): HTTPS
Encryption bits: 256
Environment: PRODUCTION
Initializing with 100 max connections
Using protocol: HTTPS
Applying 256-bit encryption
```

**Valuation Key:**
- [Stating inheritance of constants: 1 Mark]
- [Stating NON-inheritance of static methods: 1 Mark]
- [Illustrative code with constants accessed via child: 2 Marks]
- [Demonstrating static method accessed via parent only: 2 Marks]
- [Final output verification: 1 Mark]

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Where Students Typically Lose Marks in 'Extending Interfaces' Questions:**
> 
> 1. **Keyword Confusion (-2 Marks):** Writing `implements` between two interfaces. The compiler will reject this. Always use `extends` between interfaces.
> 
> 2. **Forgetting Transitive Obligations (-3 Marks):** When asked what methods a class must implement, students often list only the child interface's methods, forgetting the parent interface's abstract methods. **Trace the ENTIRE inheritance chain.**
> 
> 3. **Static Method Misconception (-2 Marks):** Claiming static methods are inherited like default methods. They are NOT — must be qualified by the defining interface.
> 
> 4. **Diamond Problem Default (-2 Marks):** Not specifying that when two defaults conflict, the implementing class must override, OR the child interface must disambiguate using `ParentName.super.methodName()`.
> 
> 5. **No Box Diagram for Hierarchy (-1 Mark):** KTU board examiners expect a visual hierarchy diagram in 14-mark questions. **Always draw a class/interface hierarchy diagram** before writing code.
> 
> 6. **Missing `@Override` Annotations (-1 Mark):** While not a compilation error, KTU valuation keys award marks for explicit `@Override` annotations showing intent.

---

## 5.4 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — Extending Interface(s)**

- **Core Syntax:** `interface Child extends Parent` — uses `extends`, never `implements`.
- **Multiple Extension:** `interface C extends A, B` — comma-separated, unlimited parents.
- **Multilevel Chains:** Interface → Interface → Interface → Class — fully supported.
- **Transitive Contract:** A class implementing a child must implement ALL abstract methods from the **entire ancestor chain**.
- **Constants Inherited:** `public static final` variables in parent interfaces are accessible via child interface name.
- **Static Methods NOT Inherited:** Must be called using the defining interface's name (e.g., `BaseConfig.getEnvironment()`).
- **Default Methods Inherited:** If not overridden in child, the parent's default behavior carries forward.
- **Diamond Problem:** When two parent interfaces provide conflicting defaults, the child interface OR implementing class must override the method to resolve.
- **Resolution Syntax:** `ParentInterfaceName.super.defaultMethod()` explicitly calls a specific parent's version.
- **Visibility:** All interface members are `public`; visibility cannot be downgraded in child interfaces.
- **Class Cannot Extend Interface:** Only interfaces can extend interfaces. Classes use `implements`.
- **No State Carried:** Interface inheritance inherits contracts only, no instance fields or constructors.
- **Real-World Use:** Java Collections (`List extends Collection`), JDBC, Spring Framework, Android SDK extensively use this pattern.
- **Compile-Time Safety:** All interface contract violations are caught at compile time, not runtime.
- **Polymorphism:** Child interface references can be assigned to parent interface type variables (Liskov substitution principle applies).
- **Marker Interfaces:** Child interfaces can be empty (no new methods), used as semantic markers or tags.

<!-- SECTION_5_END -->
