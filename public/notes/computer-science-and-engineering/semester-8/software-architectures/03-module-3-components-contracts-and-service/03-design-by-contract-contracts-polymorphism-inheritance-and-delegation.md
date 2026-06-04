---
title: "Design by Contract- Contracts, Polymorphism, Inheritance, and Delegation"
subject: "SOFTWARE ARCHITECTURES"
module: "Module 3: Components, Contracts, and Service"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9bd"
status: "completed"
scrapedAt: "2026-05-20T17:26:20.504Z"
---
# Software Architectures: Module 3 - Components, Contracts, and Service

## Topic: Design by Contract - Contracts, Polymorphism, Inheritance, and Delegation

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles of Design by Contract (DbC).
*   Define and explain the role of contracts in software development.
*   Describe different types of contract clauses (preconditions, postconditions, invariants).
*   Explain how polymorphism, inheritance, and delegation relate to and are supported by Design by Contract.
*   Analyze the benefits and drawbacks of using Design by Contract in software projects.
*   Apply DbC principles to design and implement robust software components.

---

### 2. Key Concepts and Definitions

#### 2.1. Design by Contract (DbC)

*   **Definition:** A software design approach that specifies the rights and responsibilities of software components through formal, mathematically precise agreements, known as **contracts**.
*   **Core Idea:** Promotes the development of reliable and robust software by establishing clear expectations between interacting components.
*   **Analogy:** Similar to a legal contract between two parties, where each party has obligations and entitlements.

#### 2.2. Contracts

*   **Definition:** A formal agreement between a **client** (caller) and a **supplier** (provider) of a service (e.g., a method, a class).
*   **Purpose:**
    *   **Clarify expectations:** Defines what the client must ensure before calling a method and what the supplier guarantees upon completion.
    *   **Improve reliability:** Helps prevent errors by ensuring components adhere to their specified behavior.
    *   **Facilitate debugging:** Pinpoints the source of errors by checking contract violations.
    *   **Enable modularity:** Allows components to be developed and tested independently.
*   **Key Components of a Contract:**

    *   **Preconditions:**
        *   **Definition:** Conditions that must be true *before* a client invokes a method or operation. The client is responsible for ensuring preconditions are met.
        *   **Purpose:** To define the valid state of the system or the inputs required for an operation to execute correctly.
        *   **Example:** For a `divide(numerator, denominator)` method, a precondition would be `denominator != 0`.

    *   **Postconditions:**
        *   **Definition:** Conditions that must be true *after* a method or operation has successfully completed. The supplier is responsible for ensuring postconditions are met.
        *   **Purpose:** To define the expected outcome or state change after an operation.
        *   **Example:** For a `sort(array)` method, a postcondition might be `array is sorted in ascending order`.

    *   **Invariants:**
        *   **Definition:** Conditions that must always be true for an object or component, except possibly during the execution of a method. They must hold before a method call (precondition) and after a method call (postcondition), and are checked before and after method execution.
        *   **Purpose:** To maintain the fundamental properties and integrity of an object throughout its lifecycle.
        *   **Example:** For a `Stack` class, an invariant might be `size >= 0` and `size <= capacity`.

#### 2.3. Polymorphism and DbC

*   **Polymorphism (Greek: "many forms"):** The ability of an object or method to take on many forms. In object-oriented programming, this often means that a method call can result in different behaviors depending on the actual type of the object.
*   **Relationship to DbC:**
    *   **Contract Specialization in Inheritance:** When a subclass overrides a method from a superclass, its contract can be *stricter* or *compatible* with the superclass's contract.
        *   **Preconditions:** Subclasses can **weaken** preconditions of inherited methods (e.g., accept a wider range of inputs). They cannot strengthen them, as this would violate the Liskov Substitution Principle.
        *   **Postconditions:** Subclasses can **strengthen** postconditions of inherited methods (e.g., provide a more specific guarantee). They cannot weaken them.
        *   **Invariants:** Subclasses must uphold the invariants of their superclasses.
    *   **Ensuring Correctness with Polymorphism:** DbC helps ensure that when a method is called through a superclass reference, the correct subclass method is invoked with its appropriate contract guarantees.

#### 2.4. Inheritance and DbC

*   **Inheritance:** A mechanism where a new class (subclass/derived class) inherits properties and behaviors from an existing class (superclass/base class).
*   **Relationship to DbC:**
    *   **Contract Propagation:** Contracts are inherited along with code.
    *   **Substitutability (Liskov Substitution Principle - LSP):** A subclass should be substitutable for its superclass without altering the correctness of the program. This principle is fundamental to how DbC interacts with inheritance.
    *   **Rule for Overriding Methods:**
        *   **Preconditions:** Subclass preconditions must be **weaker** than or equal to the superclass preconditions.
        *   **Postconditions:** Subclass postconditions must be **stronger** than or equal to the superclass postconditions.
        *   **Invariants:** Subclass invariants must be compatible with superclass invariants (i.e., include superclass invariants and potentially add more).
    *   **Example:**
        *   **Superclass `Shape` with `draw()`:**
            *   Precondition: `graphicsContext != null`
            *   Postcondition: `Shape is drawn on graphicsContext`
        *   **Subclass `Circle` with `draw()`:**
            *   Precondition: `graphicsContext != null` (compatible)
            *   Postcondition: `Circle is drawn as a circle on graphicsContext` (stronger, more specific)

#### 2.5. Delegation and DbC

*   **Delegation:** A design pattern where an object forwards a request to another object (the delegate) that performs the actual work. This is often used to achieve composition and code reuse.
*   **Relationship to DbC:**
    *   **Contract Enforcement:** When an object delegates a task, it must ensure that the delegate's contract is satisfied before delegating, and it must then uphold its *own* contract based on the delegate's behavior.
    *   **Client-Supplier Relationship:** The delegating object acts as a client to the delegate, and the delegate acts as a supplier. The contracts between them are crucial.
    *   **Example:**
        *   An `OrderProcessor` class might delegate the task of payment processing to a `PaymentGateway` object.
        *   `OrderProcessor.processPayment(amount)`:
            *   Precondition: `amount > 0` and `paymentGateway != null`
            *   Delegates to `paymentGateway.charge(amount)`
            *   Postcondition: `Order status is updated` (potentially after verifying `paymentGateway.charge()` succeeded)

---

### 3. Examples

#### 3.1. Basic Contract Example (Conceptual)

```java
// Conceptual Java-like syntax with DbC annotations
public class Calculator {

    /**
     * Adds two integers.
     * @param a The first integer.
     * @param b The second integer.
     * @return The sum of a and b.
     *
     * Preconditions: None for this simple example.
     * Postconditions: The result is equal to a + b.
     * Invariants: None for this simple class.
     */
    public int add(int a, int b) {
        // Implementation
        return a + b;
    }

    /**
     * Divides two integers.
     * @param numerator The dividend.
     * @param denominator The divisor.
     * @return The quotient of numerator divided by denominator.
     *
     * Preconditions: denominator != 0
     * Postconditions: result * denominator + remainder == numerator
     *                 (Assuming integer division with remainder)
     * Invariants: None for this simple class.
     */
    public int divide(int numerator, int denominator) {
        if (denominator == 0) {
            throw new IllegalArgumentException("Denominator cannot be zero.");
        }
        // Implementation
        return numerator / denominator;
    }
}
```

#### 3.2. Inheritance and Contract Specialization Example

```java
// Abstract Superclass
abstract class Animal {
    private int age;

    public Animal(int age) {
        this.age = age;
    }

    /**
     * Makes a sound.
     * @param volume The loudness of the sound.
     *
     * Preconditions: volume > 0
     * Postconditions: A sound is produced with the specified volume.
     * Invariants: this.age >= 0
     */
    public abstract void makeSound(int volume);

    public int getAge() {
        return age;
    }
}

// Concrete Subclass
class Dog extends Animal {
    public Dog(int age) {
        super(age);
    }

    /**
     * Makes a barking sound.
     * @param volume The loudness of the bark.
     *
     * Preconditions: volume > 5 // Stronger precondition than Animal's volume > 0
     * Postconditions: A "Woof!" is produced with the specified volume.
     * Invariants: Inherits age >= 0
     */
    @Override
    public void makeSound(int volume) {
        if (volume <= 5) {
            throw new IllegalArgumentException("Bark volume must be greater than 5 for a dog.");
        }
        System.out.println("Woof! (volume: " + volume + ")");
    }
}

// Another Concrete Subclass
class Cat extends Animal {
    public Cat(int age) {
        super(age);
    }

    /**
     * Makes a meowing sound.
     * @param volume The loudness of the meow.
     *
     * Preconditions: volume > 0 // Compatible with Animal's precondition
     * Postconditions: A "Meow!" is produced with the specified volume.
     * Invariants: Inherits age >= 0
     */
    @Override
    public void makeSound(int volume) {
        if (volume <= 0) {
            throw new IllegalArgumentException("Meow volume must be greater than 0.");
        }
        System.out.println("Meow! (volume: " + volume + ")");
    }
}
```

**Explanation:**

*   `Dog.makeSound` has a *stronger* precondition (`volume > 5`) than `Animal.makeSound` (`volume > 0`). This is valid because if `volume > 5` is met, then `volume > 0` is also met.
*   If we had a `Cat.makeSound` with a precondition `volume > 0`, it would be *compatible* with `Animal.makeSound`.

#### 3.3. Delegation Example

```java
// Delegate
class EmailService {
    /**
     * Sends an email.
     * @param recipient The email address of the recipient.
     * @param subject The subject of the email.
     * @param body The content of the email.
     *
     * Preconditions: recipient is a valid email address, subject is not empty.
     * Postconditions: Email is successfully sent to recipient.
     */
    public void sendEmail(String recipient, String subject, String body) {
        System.out.println("Sending email to: " + recipient);
        System.out.println("Subject: " + subject);
        System.out.println("Body: " + body);
        // Actual email sending logic...
    }
}

// Delegator
class NotificationManager {
    private EmailService emailService;

    public NotificationManager(EmailService emailService) {
        this.emailService = emailService;
    }

    /**
     * Sends a notification email.
     * @param userEmail The user's email address.
     * @param message The notification message.
     *
     * Preconditions: userEmail is a valid email address, message is not empty.
     * Postconditions: Notification email has been sent.
     */
    public void sendNotification(String userEmail, String message) {
        // Contract of NotificationManager
        if (userEmail == null || userEmail.isEmpty()) {
            throw new IllegalArgumentException("User email cannot be empty.");
        }
        if (message == null || message.isEmpty()) {
            throw new IllegalArgumentException("Message cannot be empty.");
        }

        // Contract of EmailService is assumed to be met by EmailService implementation
        // and our usage adheres to it.
        String subject = "System Notification";
        String body = "You have a new notification: " + message;

        // Delegate the actual sending
        emailService.sendEmail(userEmail, subject, body);

        // Postcondition of NotificationManager: Notification email has been sent.
        // This is implicitly achieved if emailService.sendEmail() executes without throwing an exception.
    }
}
```

**Explanation:**

*   `NotificationManager.sendNotification` acts as a client to `EmailService.sendEmail`.
*   `NotificationManager` defines its own preconditions (`userEmail` and `message` not empty).
*   When calling `emailService.sendEmail`, `NotificationManager` assumes `emailService` is a valid instance and that the provided `userEmail`, `subject`, and `body` satisfy the `EmailService`'s contract.

---

### 4. Practice Questions and Exercises

#### 4.1. Multiple Choice Questions

1.  Which of the following best describes a **precondition** in Design by Contract?
    a)  A condition that must be true after an operation completes.
    b)  A condition that must always be true for an object.
    c)  A condition that must be true before an operation is invoked.
    d)  A condition that guarantees the client is happy.

2.  According to DbC principles for inheritance, a subclass's postcondition for an overridden method must be:
    a)  Weaker than or equal to the superclass's postcondition.
    b)  Stronger than or equal to the superclass's postcondition.
    c)  Completely unrelated to the superclass's postcondition.
    d)  The exact same as the superclass's postcondition.

3.  If an object delegates a task to another object, the delegating object acts as a:
    a)  Supplier to the delegate.
    b)  Client to the delegate.
    c)  Peer to the delegate.
    d)  Manager of the delegate without responsibility.

#### 4.2. Short Answer Questions

1.  Define Design by Contract and state its primary goal.
2.  Explain the difference between preconditions, postconditions, and invariants.
3.  What is the Liskov Substitution Principle (LSP) and how does it relate to DbC and inheritance?
4.  Describe how delegation interacts with Design by Contract.

#### 4.3. Practical Exercise

Consider a `BankAccount` class with a `withdraw(amount)` method.

**BankAccount Class (Superclass):**

```java
public class BankAccount {
    protected double balance;

    public BankAccount(double initialBalance) {
        if (initialBalance < 0) {
            throw new IllegalArgumentException("Initial balance cannot be negative.");
        }
        this.balance = initialBalance;
    }

    /**
     * Withdraws a specified amount from the account.
     * @param amount The amount to withdraw.
     * @return The remaining balance after withdrawal.
     *
     * Preconditions: amount > 0
     * Postconditions: balance >= 0 AND balance_after = balance_before - amount
     * Invariants: balance >= 0
     */
    public double withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive.");
        }
        if (this.balance < amount) {
            throw new InsufficientFundsException("Insufficient funds for withdrawal.");
        }
        this.balance -= amount;
        return this.balance;
    }

    public double getBalance() {
        return balance;
    }
}

class InsufficientFundsException extends RuntimeException {
    public InsufficientFundsException(String message) {
        super(message);
    }
}
```

Now, consider creating a `SavingsAccount` class that inherits from `BankAccount`. A `SavingsAccount` has an additional rule: it cannot withdraw more than 80% of its current balance in a single transaction.

**Task:**

Implement the `SavingsAccount` class, overriding the `withdraw` method. Ensure your `SavingsAccount` class adheres to the DbC rules for inheritance. Clearly state the preconditions, postconditions, and invariants for `SavingsAccount.withdraw`.

---

### 5. Answers to Practice Questions

#### 5.1. Multiple Choice Answers

1.  **c) A condition that must be true before an operation is invoked.**
2.  **b) Stronger than or equal to the superclass's postcondition.**
3.  **b) Client to the delegate.**

#### 5.2. Short Answer Answers

1.  **Design by Contract (DbC)** is a software development approach that specifies the rights and responsibilities of software components through formal, mathematically precise agreements called **contracts**. Its primary goal is to improve software reliability and robustness by establishing clear expectations between interacting components.
2.  *   **Preconditions:** Conditions that must be met *before* an operation is called. The client is responsible for satisfying them.
    *   **Postconditions:** Conditions that must be met *after* an operation completes successfully. The supplier is responsible for satisfying them.
    *   **Invariants:** Conditions that must *always* be true for an object or component, except during the execution of an operation. They must hold before and after operation execution.
3.  The **Liskov Substitution Principle (LSP)** states that if `S` is a subtype of `T`, then objects of type `T` in a program may be replaced with objects of type `S` without altering any of the desirable properties of that program (correctness). In DbC, LSP dictates the rules for contract inheritance: preconditions can only be weakened (or stay the same), and postconditions can only be strengthened (or stay the same) in subtypes.
4.  When an object delegates a task, it acts as a **client** to the delegate, which acts as a **supplier**. The delegating object must ensure its own preconditions are met before delegating, and then it must ensure the delegate's contract is satisfied. Finally, the delegating object must satisfy its own postconditions based on the outcome of the delegated task. This creates a chain of contract adherence.

#### 5.3. Practical Exercise Answer

```java
public class SavingsAccount extends BankAccount {

    public SavingsAccount(double initialBalance) {
        super(initialBalance);
        // Invariants for SavingsAccount are inherited from BankAccount (balance >= 0)
        // and we can add more if needed.
    }

    /**
     * Withdraws a specified amount from the savings account, ensuring not to exceed 80% of the balance.
     * @param amount The amount to withdraw.
     * @return The remaining balance after withdrawal.
     *
     * Preconditions: amount > 0 AND amount <= 0.8 * balance_before
     * Postconditions: balance >= 0 AND balance_after = balance_before - amount AND balance_after >= 0.2 * balance_before
     * Invariants: balance >= 0 (inherited from BankAccount)
     */
    @Override
    public double withdraw(double amount) {
        // 1. Check Preconditions (for the subclass's contract)
        // We MUST include the superclass's precondition check implicitly or explicitly.
        // The BankAccount constructor and super.withdraw handle the 'amount > 0' check.
        // Here, we add the stricter precondition for SavingsAccount.

        double currentBalance = getBalance(); // Use getter to ensure invariant is respected

        if (amount > 0.8 * currentBalance) {
            throw new IllegalArgumentException("Withdrawal amount exceeds 80% of balance.");
        }

        // 2. Call the superclass method (which will re-check its own preconditions)
        // The superclass method already checks amount > 0 and sufficient funds.
        // If amount > currentBalance, InsufficientFundsException will be thrown.
        // If amount <= currentBalance, we proceed.
        double remainingBalance = super.withdraw(amount);

        // 3. Postconditions for SavingsAccount:
        // The super.withdraw() call guarantees balance_after = balance_before - amount
        // and balance_after >= 0 (as per BankAccount's postconditions and invariants).
        // We need to ensure our specific postcondition (balance_after >= 0.2 * balance_before) holds.
        // Since amount <= 0.8 * balance_before, then balance_before - amount >= balance_before - 0.8 * balance_before
        // which means balance_after >= 0.2 * balance_before. This is satisfied.

        return remainingBalance;
    }

    // If we had more invariants specific to SavingsAccount, we would add them here.
    // For example, if SavingsAccount had a minimum balance requirement.
}
```

**Explanation of `SavingsAccount.withdraw` contract:**

*   **Preconditions:**
    *   `amount > 0`: Inherited from `BankAccount.withdraw`.
    *   `amount <= 0.8 * balance_before`: This is a *stricter* precondition than `BankAccount`'s. It's valid because if the amount is within 80%, it's also guaranteed to be less than the entire balance (assuming `balance_before > 0`).
*   **Postconditions:**
    *   `balance >= 0`: Inherited from `BankAccount.withdraw`.
    *   `balance_after = balance_before - amount`: Inherited from `BankAccount.withdraw`.
    *   `balance_after >= 0.2 * balance_before`: This is a *stronger* postcondition. If the withdrawal is at most 80% of the balance, the remaining balance must be at least 20% of the original balance.
*   **Invariants:**
    *   `balance >= 0`: Inherited from `BankAccount`.

---

### 6. Important Points to Remember

*   **DbC is about clear communication:** It formalizes the expected interactions between software components.
*   **Contracts are enforceable:** Tools can be used to statically or dynamically check contract violations.
*   **Liskov Substitution Principle is key for inheritance:** It guides how contracts must be adapted in subclasses to maintain substitutability.
*   **Preconditions:** Client's responsibility.
*   **Postconditions:** Supplier's responsibility.
*   **Invariants:** Always true for an object, except during method execution.
*   **Delegation requires careful contract management:** The delegator must understand and respect the delegate's contract.
*   **Benefits:** Increased reliability, better documentation, easier debugging, improved maintainability.
*   **Drawbacks:** Can add complexity, requires discipline, potential performance overhead if not implemented efficiently (especially runtime checking).
