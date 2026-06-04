---
title: "control structures"
subject: "BLOCK CHAIN"
module: "Module 4: Ethereum – The Ethereum network."
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff713"
status: "completed"
scrapedAt: "2026-05-23T18:13:34.801Z"
---
# Module 4: Ethereum – The Ethereum Network

## Topic: Control Structures in Ethereum Smart Contracts

This module focuses on the Ethereum network and the fundamental building blocks of smart contract logic: control structures. Understanding these is crucial for developing secure and functional decentralized applications (DApps).

---

### **1. Introduction to Control Structures in Smart Contracts**

Control structures are programming constructs that allow developers to dictate the flow of execution within a smart contract. They enable conditional execution of code, repetition of tasks, and branching based on specific criteria. In Ethereum smart contracts, these structures are essential for implementing the logic that governs transactions and state changes on the blockchain.

*   **Why are Control Structures Important in Smart Contracts?**
    *   **Conditional Logic:** Execute specific code blocks only when certain conditions are met (e.g., checking if a user is an owner before allowing a withdrawal).
    *   **Repetitive Tasks:** Perform an action multiple times (e.g., iterating through a list of participants).
    *   **Dynamic Behavior:** Create contracts that can adapt their behavior based on external inputs or the contract's current state.
    *   **Security:** Implementing checks and balances to prevent unauthorized actions and ensure the integrity of the contract.

---

### **2. Conditional Statements (If-Else)**

Conditional statements allow for the execution of different code blocks based on whether a condition evaluates to true or false. Solidity, the primary language for Ethereum smart contracts, supports standard `if`, `else if`, and `else` statements.

#### **2.1 The `if` Statement**

Executes a block of code if a specified condition is true.

**Syntax:**

```solidity
if (condition) {
    // code to execute if condition is true
}
```

**Example:**

```solidity
contract FundManager {
    address public owner;
    uint256 public minimumWithdrawalAmount = 1 ether;

    constructor() {
        owner = msg.sender; // The deployer of the contract is the owner
    }

    function withdraw(uint256 _amount) public {
        // Check if the caller is the owner
        if (msg.sender == owner) {
            // Check if the withdrawal amount is valid
            if (_amount >= minimumWithdrawalAmount) {
                // Logic to perform the withdrawal (e.g., transfer ether)
                // For simplicity, we'll just log a message
                emit WithdrawalSuccessful(msg.sender, _amount);
            } else {
                emit WithdrawalFailed(msg.sender, _amount, "Amount too low");
            }
        } else {
            emit WithdrawalFailed(msg.sender, _amount, "Only owner can withdraw");
        }
    }

    event WithdrawalSuccessful(address indexed user, uint256 amount);
    event WithdrawalFailed(address indexed user, uint256 amount, string reason);
}
```

**Explanation:**
*   The `withdraw` function first checks if `msg.sender` (the address of the account initiating the transaction) is equal to the `owner`.
*   If the condition `msg.sender == owner` is true, it then proceeds to check if `_amount` is greater than or equal to `minimumWithdrawalAmount`.
*   Only if both conditions are met will the success event be emitted.

#### **2.2 The `if-else` Statement**

Executes one block of code if the condition is true and another block if the condition is false.

**Syntax:**

```solidity
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}
```

**Example (refer to the `withdraw` function above):**
The `withdraw` function demonstrates the `if-else` structure within the inner check:
*   `if (_amount >= minimumWithdrawalAmount)`: If true, proceed with withdrawal.
*   `else`: If false, emit `WithdrawalFailed` with the reason "Amount too low".

#### **2.3 The `if-else if-else` Statement**

Allows for checking multiple conditions in sequence.

**Syntax:**

```solidity
if (condition1) {
    // code to execute if condition1 is true
} else if (condition2) {
    // code to execute if condition1 is false and condition2 is true
} else {
    // code to execute if all preceding conditions are false
}
```

**Example:**

```solidity
contract StatusChecker {
    function checkStatus(uint256 _value) public pure returns (string memory) {
        if (_value > 100) {
            return "High";
        } else if (_value > 50) {
            return "Medium";
        } else {
            return "Low";
        }
    }
}
```

**Explanation:**
*   The `checkStatus` function takes a `uint256` value.
*   It first checks if `_value` is greater than 100. If so, it returns "High".
*   If not, it checks if `_value` is greater than 50. If so, it returns "Medium".
*   If neither of the above conditions is met, it returns "Low".

**Important Point:**
*   The order of `else if` conditions matters. The first condition that evaluates to true will have its corresponding code block executed, and the rest of the `else if` and `else` blocks will be skipped.

---

### **3. Loops**

Loops are used to execute a block of code repeatedly. Ethereum smart contracts support several types of loops, but it's crucial to use them carefully due to gas costs associated with repeated operations.

#### **3.1 `for` Loops**

The `for` loop is used when the number of iterations is known beforehand.

**Syntax:**

```solidity
for (initialization; condition; increment/decrement) {
    // code to execute in each iteration
}
```

**Example:**

```solidity
contract ArrayProcessor {
    uint256[] public numbers = [10, 20, 30, 40, 50];
    uint256 public sum = 0;

    function sumArrayElements() public {
        sum = 0; // Reset sum for each call
        for (uint256 i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
    }
}
```

**Explanation:**
*   The `sumArrayElements` function iterates through the `numbers` array.
*   The loop starts with `i = 0`, continues as long as `i` is less than the length of the `numbers` array, and increments `i` by 1 in each iteration.
*   In each iteration, the element `numbers[i]` is added to the `sum`.

**Gas Considerations for Loops:**
*   **Cost:** Each iteration of a loop consumes gas. Long-running loops or loops over large arrays can become prohibitively expensive.
*   **Block Gas Limit:** If a loop exceeds the block gas limit, the transaction will fail.
*   **Optimization:** Avoid loops that iterate over dynamic or potentially large arrays. Consider off-chain processing or batching operations if possible.

#### **3.2 `while` Loops**

The `while` loop executes a block of code as long as a specified condition is true.

**Syntax:**

```solidity
while (condition) {
    // code to execute while condition is true
}
```

**Example:**

```solidity
contract Countdown {
    function startCountdown(uint256 _startValue) public pure returns (string memory) {
        string memory result = "";
        uint256 currentValue = _startValue;

        while (currentValue > 0) {
            result = string(abi.encodePacked(result, "Counting down: ", Strings.toString(currentValue), "\n"));
            currentValue--; // Decrement the counter
        }
        result = string(abi.encodePacked(result, "Blast off!"));
        return result;
    }
}
```

**Explanation:**
*   The `startCountdown` function takes a starting value.
*   The `while` loop continues as long as `currentValue` is greater than 0.
*   Inside the loop, the current value is appended to the `result` string, and `currentValue` is decremented.

**Gas Considerations for `while` Loops:**
*   Similar to `for` loops, `while` loops can be gas-intensive. Ensure the condition eventually becomes false to avoid infinite loops.

#### **3.3 `do-while` Loops**

The `do-while` loop is similar to the `while` loop, but it guarantees that the code block is executed at least once before checking the condition.

**Syntax:**

```solidity
do {
    // code to execute
} while (condition);
```

**Example (Illustrative, as `do-while` is less common in Solidity than `for` and `while` due to gas reasons):**

```solidity
contract DoWhileExample {
    function processAtLeastOnce(uint256 _initialValue) public pure returns (uint256) {
        uint256 counter = _initialValue;
        do {
            counter++; // This will execute at least once
        } while (counter < 5); // Condition checked after the first execution
        return counter;
    }
}
```

**Explanation:**
*   The `processAtLeastOnce` function will increment `counter` at least once, even if `_initialValue` is already 5 or more. The loop then continues as long as `counter` is less than 5.

**Gas Considerations for `do-while` Loops:**
*   Same as `while` loops, manage the condition to avoid excessive gas consumption.

---

### **4. Other Control Flow Statements**

Solidity offers additional statements to control the flow of execution and manage contract behavior.

#### **4.1 `break` Statement**

The `break` statement is used to exit a loop prematurely.

**Example:**

```solidity
contract SearchArray {
    uint256[] public data = [5, 12, 8, 25, 3];

    function findFirstGreater(uint256 _threshold) public view returns (int256) {
        for (uint256 i = 0; i < data.length; i++) {
            if (data[i] > _threshold) {
                return int256(i); // Return the index of the first element greater than threshold
            }
        }
        return -1; // Indicate not found
    }
}
```

**Explanation:**
*   In `findFirstGreater`, when an element `data[i]` is found that is greater than `_threshold`, the function immediately returns the index `i`. This implicitly exits the `for` loop.

#### **4.2 `continue` Statement**

The `continue` statement skips the rest of the current iteration of a loop and proceeds to the next iteration.

**Example:**

```solidity
contract SumEvenNumbers {
    uint256[] public values = [1, 2, 3, 4, 5, 6];
    uint256 public evenSum = 0;

    function calculateSumOfEvens() public {
        evenSum = 0;
        for (uint256 i = 0; i < values.length; i++) {
            if (values[i] % 2 != 0) { // If the number is odd
                continue; // Skip to the next iteration
            }
            evenSum += values[i]; // Add only even numbers
        }
    }
}
```

**Explanation:**
*   In `calculateSumOfEvens`, if a number is odd (`values[i] % 2 != 0`), the `continue` statement is executed, skipping the `evenSum += values[i]` line and moving to the next element in the array. Only even numbers are added to `evenSum`.

#### **4.3 `return` Statement**

The `return` statement exits a function and can optionally return a value.

**Example (already shown in `findFirstGreater`):**
*   `return int256(i);` immediately exits the function and returns the index.

#### **4.4 `require`, `assert`, and `revert`**

These are built-in functions used for error handling and enforcing conditions, which effectively act as control structures by halting execution under specific circumstances.

*   **`require(condition, "Error message")`:**
    *   Used to validate inputs, conditions before state changes, and access control.
    *   If the `condition` is false, the transaction is reverted, and any state changes made in the current transaction are undone. The remaining gas is returned to the caller.
    *   **Reference:** Bashir, "Mastering Blockchain," mentions `require` for input validation and security checks (Chapter 8: Ethereum and Smart Contracts).
    *   **Example:** `require(msg.sender == owner, "Only owner can perform this action");`

*   **`assert(condition)`:**
    *   Used for checking internal invariants and detecting bugs.
    *   If the `condition` is false, the transaction is reverted, and all gas is consumed. This is typically used for conditions that should *never* be false in a correctly functioning contract.
    *   **Example:** `assert(balance >= amount, "Insufficient balance after internal calculation");`

*   **`revert()`:**
    *   Explicitly reverts the transaction without providing an error message.
    *   **Example:** `if (someBadCondition) { revert(); }`

**Key Difference:** `require` is for validating external inputs or conditions that might fail legitimately, while `assert` is for internal errors that indicate a bug. `revert()` is a more general way to stop execution.

---

### **5. Advanced Control Structures and Concepts**

#### **5.1 Fallback Functions and Receive Functions**

These special functions are triggered when a contract receives ether without any data or when a transaction calls a non-existent function. They can be considered control structures as they dictate what happens when ether is sent directly to the contract.

*   **`fallback()`:**
    *   Executed when a function call has no data (empty data field) or when the called function does not exist.
    *   Can receive `msg.value` (ether).
    *   Has gas limitations similar to regular functions.

*   **`receive()`:**
    *   A special function that is executed when plain ether is sent to the contract (i.e., `msg.data` is empty) and there is no `fallback` function.
    *   Cannot accept arguments and cannot return anything.
    *   Receives `msg.value`.

**Example:**

```solidity
contract EtherReceiver {
    event EtherReceived(address sender, uint256 amount);
    event FallbackCalled(address sender, uint256 amount, bytes data);

    // receive() function to handle plain ether transfers
    receive() external payable {
        emit EtherReceived(msg.sender, msg.value);
    }

    // fallback() function for calls with data or to non-existent functions
    fallback() external payable {
        emit FallbackCalled(msg.sender, msg.value, msg.data);
    }
}
```

**Reference:** Antonopoulos & Wood, "Mastering Ethereum," details these special functions and their roles in handling incoming ether (Chapter 5: Smart Contract Patterns).

#### **5.2 Modifiers**

Modifiers are a way to change the behavior of functions, for example by adding preconditions or postconditions. They are a powerful abstraction for reusing control logic.

**Syntax:**

```solidity
modifier modifierName(parameters) {
    // Pre-condition checks
    _; // This signifies where the original function's code will be inserted
    // Post-condition actions
}

function functionName() public modifierName {
    // Function body
}
```

**Example (using the `owner` check from earlier):**

```solidity
contract ModifierExample {
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function changeOwner(address _newOwner) public onlyOwner {
        owner = _newOwner;
    }

    function protectedAction() public onlyOwner {
        // This function can only be called by the owner
        // ...
    }
}
```

**Explanation:**
*   The `onlyOwner` modifier checks if the caller is the owner.
*   The `_;` placeholder indicates where the actual function body (`changeOwner` or `protectedAction`) will be executed.
*   If the modifier's condition (`require(msg.sender == owner, ...)`) fails, the function execution stops immediately.

**Benefits of Modifiers:**
*   **Code Reusability:** Encapsulate common checks and logic.
*   **Readability:** Make function signatures cleaner by abstracting checks.
*   **Security:** Enforce access control and preconditions reliably.

---

### **6. Best Practices and Gas Efficiency**

*   **Minimize Loop Iterations:** Avoid iterating over large datasets. If necessary, consider batching or off-chain processing.
*   **Prefer `require` over `assert` for Input Validation:** Use `require` for conditions that depend on external inputs or states that might legitimately fail. Use `assert` only for internal contract logic errors.
*   **Use `break` and `continue` Wisely:** These can help exit loops early or skip unnecessary computations, potentially saving gas.
*   **Leverage Modifiers:** They promote clean code and reduce repetition of common checks.
*   **Understand Gas Costs:** Every operation in a smart contract consumes gas. Loops and complex conditional logic can significantly increase gas usage.
*   **Be Mindful of Reentrancy:** While not directly a control structure, understanding how function execution flows is critical. Modifiers can help prevent reentrancy issues. (Refer to Bashir for reentrancy in Chapter 8).

---

### **7. Summary of Control Structures**

| Structure          | Description                                                                                                        | When to Use                                                                                                                                  | Gas Considerations                                                              |
| :----------------- | :----------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| `if`, `else if`, `else` | Execute code blocks based on boolean conditions.                                                                   | For decision-making, conditional logic, and implementing access control.                                                                     | Generally low gas cost per check.                                               |
| `for` loop         | Repeats a block of code a fixed number of times.                                                                   | When the number of iterations is known beforehand (e.g., iterating over a fixed-size array).                                               | Can be high cost if iterations are many. Be cautious with large dynamic arrays. |
| `while` loop       | Repeats a block of code as long as a condition is true.                                                            | When the number of iterations is not known beforehand and depends on a condition.                                                          | Similar to `for` loops. Risk of infinite loops if condition never becomes false. |
| `do-while` loop    | Repeats a block of code at least once, then continues as long as a condition is true.                              | Less common in Solidity due to gas, but useful when an action must occur at least once.                                                      | Similar to `while` loops.                                                       |
| `break`            | Exits the innermost enclosing loop or `switch` statement.                                                          | To terminate a loop early once a condition is met (e.g., found an item).                                                                     | Saves gas by avoiding unnecessary iterations.                                   |
| `continue`         | Skips the rest of the current loop iteration and proceeds to the next iteration.                                   | To skip processing for certain elements in a loop (e.g., only process even numbers).                                                         | Saves gas by skipping unnecessary computations within an iteration.             |
| `return`           | Exits a function and optionally returns a value.                                                                   | To end function execution, often after performing an action or when a specific condition is met.                                            | Low gas cost.                                                                   |
| `require`          | Checks a condition and reverts if false, returning remaining gas.                                                 | Validating user inputs, checking preconditions, enforcing access control (e.g., `msg.sender == owner`).                                   | Low gas cost per check.                                                         |
| `assert`           | Checks a condition and reverts if false, consuming all gas. Used for internal invariants.                          | Detecting internal errors and bugs that should never occur.                                                                                | Consumes all gas on failure.                                                    |
| `revert`           | Reverts the transaction without an error message.                                                                  | For explicit error handling when `require` or `assert` are not sufficiently specific or when a custom error logic is needed.               | Consumes all gas on failure.                                                    |
| `fallback`/`receive` | Special functions executed when ether is sent to the contract without a specific function call or to a non-existent function. | Handling direct ether transfers or calls to unknown functions.                                                                               | Subject to standard gas limits.                                                 |
| Modifiers          | Reusable code blocks for pre- or post-function execution logic (e.g., access control).                            | Applying common checks or logic to multiple functions, improving code organization and security.                                               | Adds overhead to function calls, but can prevent repeated checks, saving gas long-term. |

---

### **8. Alignment with Course Outcomes**

*   **CO1: Explain the fundamental concepts of blockchain technology.** (Knowledge Level: K2)
    *   This module contributes by showing how logic is implemented in Ethereum smart contracts, a core component of blockchain applications. Control structures are fundamental programming concepts applicable across various blockchain platforms.
*   **CO2: Summarize the classification of consensus algorithms.** (Knowledge Level: K2)
    *   While not directly about consensus, understanding smart contract logic is crucial for appreciating how DApps interact with the network's state, which is maintained by consensus.
*   **CO3: Explain the concepts of first decentralized cryptocurrency bitcoin.** (Knowledge Level: K2)
    *   This module focuses on Ethereum, which evolved from Bitcoin. The control structures learned here are more advanced than Bitcoin's scripting language, demonstrating the evolution of smart contract capabilities.
*   **CO4: Explain the use of smart contracts and its use cases.** (Knowledge Level: K2)
    *   This is directly addressed. Control structures are the building blocks of smart contract logic and are essential for implementing various use cases like token transfers, escrow services, and governance mechanisms.
*   **CO5: Develop simple applications using Solidity language on Ethereum platform.** (Knowledge Level: K2)
    *   This module provides the foundational knowledge of control structures needed to write any non-trivial Solidity smart contract.

---

### **9. Practice Questions**

1.  **Scenario:** You are building a simple voting smart contract where only registered voters can cast a vote. A voter can only vote once.
    *   **Question:** Which control structure would you use to check if a voter is registered and has already voted? Explain your choice.
    *   **Answer:** `require` statements are ideal here. You would use `require(isRegistered[voterAddress], "Voter not registered");` and `require(!hasVoted[voterAddress], "Voter already voted");`. These are essential pre-conditions to ensure the integrity of the voting process.

2.  **Scenario:** A smart contract needs to distribute a reward to 100 participants.
    *   **Question:** What loop would you consider using? What is a potential problem with this approach on the Ethereum network, and how might you mitigate it?
    *   **Answer:** A `for` loop would be the natural choice: `for (uint256 i = 0; i < 100; i++) { ... }`.
        *   **Problem:** Looping 100 times can consume a significant amount of gas, potentially exceeding the block gas limit, causing the transaction to fail.
        *   **Mitigation:**
            *   **Batching:** Allow participants to claim their rewards in batches.
            *   **Off-chain computation:** Calculate rewards off-chain and have a simpler on-chain function to claim pre-calculated rewards.
            *   **Event-driven distribution:** Emit an event for each distribution that an off-chain service can pick up and process.

3.  **Question:** What is the primary difference between `require` and `assert` in Solidity? When would you use each?
    *   **Answer:**
        *   **`require`:** Used to validate inputs and conditions that depend on external factors or user inputs. If the condition is false, the transaction reverts, and unused gas is returned. Use it for checking pre-conditions and access control.
        *   **`assert`:** Used to check for internal errors or invariants that should *never* be false in a correctly functioning contract. If the condition is false, the transaction reverts, and all gas is consumed. Use it for detecting bugs and asserting internal states.

4.  **Scenario:** You have a function that processes elements in an array, but you want to skip any zero values.
    *   **Question:** How would you implement this using a loop and a control statement?
    *   **Answer:** You would use a `for` loop and the `continue` statement:
        ```solidity
        for (uint256 i = 0; i < myArray.length; i++) {
            if (myArray[i] == 0) {
                continue; // Skip processing if the element is zero
            }
            // Process non-zero elements
            process(myArray[i]);
        }
        ```

---

### **8. Important Points to Remember**

*   **Gas Cost:** All control flow operations consume gas. Be mindful of the potential cost, especially with loops and complex conditions.
*   **Block Gas Limit:** Transactions exceeding the block gas limit will fail. This is a critical constraint when designing loops.
*   **Readability and Maintainability:** Use control structures logically to make your smart contracts easier to understand and debug.
*   **Security:** `require` is paramount for enforcing access control and validating inputs to prevent vulnerabilities.
*   **Modifiers:** A powerful tool for abstracting and reusing control logic, especially for security checks.
*   **Solidity Version:** Ensure you are using an up-to-date Solidity compiler version, as syntax and features can evolve.

---
This concludes the notes on control structures in Ethereum smart contracts. Mastering these concepts is fundamental to building robust and secure decentralized applications on the Ethereum network.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
