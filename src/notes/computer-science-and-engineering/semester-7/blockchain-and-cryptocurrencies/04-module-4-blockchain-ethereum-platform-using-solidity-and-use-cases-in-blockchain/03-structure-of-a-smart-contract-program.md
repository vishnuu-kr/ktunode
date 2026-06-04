---
title: "Structure of a Smart Contract Program"
subject: "BLOCKCHAIN AND CRYPTOCURRENCIES"
module: "Module 4: Blockchain Ethereum Platform using Solidity and Use Cases in Blockchain :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c2bf"
status: "completed"
scrapedAt: "2026-05-20T17:02:01.478Z"
---
# BLOCKCHAIN AND CRYPTOCURRENCIES

## Module 4: Blockchain Ethereum Platform using Solidity and Use Cases in Blockchain

### Topic: Structure of a Smart Contract Program

---

### 1. Introduction to Smart Contracts on Ethereum

Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on a blockchain, most notably Ethereum, making them transparent, immutable, and tamper-proof.

**Key Concepts:**

*   **Smart Contract:** A program stored on a blockchain that runs when predetermined conditions are met. It automates the execution of an agreement between parties without the need for intermediaries.
*   **Ethereum:** A decentralized, open-source blockchain system that features smart contract functionality. It is the most popular platform for deploying and executing smart contracts.
*   **Solidity:** The primary programming language used for writing smart contracts on Ethereum. It is a statically-typed, high-level language designed to be easy to learn and use.
*   **Decentralization:** The absence of a central authority. Smart contracts on Ethereum run on a distributed network, ensuring no single entity controls them.
*   **Immutability:** Once a smart contract is deployed on the blockchain, its code cannot be altered or deleted. This ensures the integrity of the agreement.
*   **Transparency:** The code of a smart contract and its execution history are publicly visible on the blockchain.

---

### 2. Basic Structure of a Solidity Smart Contract

A typical Solidity smart contract follows a specific structure. Understanding this structure is crucial for writing functional and secure contracts.

**Key Components:**

*   **Pragma Directive:**
    *   Specifies the version of the Solidity compiler that should be used to compile the contract. This is important because the language evolves, and different compiler versions might have slight variations in behavior.
    *   **Example:** `pragma solidity ^0.8.0;`
        *   `^0.8.0` means "compatible with version 0.8.0 and any later versions up to, but not including, 0.9.0."

*   **Contract Definition:**
    *   The core of the smart contract. It defines the contract's name and its functionalities.
    *   Contracts encapsulate state variables, functions, and other code structures.
    *   **Example:** `contract MyFirstContract { ... }`

*   **State Variables:**
    *   Variables whose values are stored permanently on the blockchain storage. They represent the state of the contract.
    *   These are like the "memory" of the smart contract.
    *   Can be declared with various data types (e.g., `uint`, `int`, `bool`, `address`, `string`, `bytes`).
    *   Can have visibility specifiers (`public`, `private`, `internal`, `default`).
    *   **Example:**
        ```solidity
        contract SimpleStorage {
            uint256 public storedData; // A public state variable to store an unsigned integer

            function set(uint256 x) public {
                storedData = x;
            }

            function get() public view returns (uint256) {
                return storedData;
            }
        }
        ```

*   **Constructor:**
    *   A special function that is executed only once when the contract is deployed.
    *   Used for initializing state variables or setting up the contract's initial state.
    *   It is **not** called when a contract is interacted with after deployment.
    *   **Example:**
        ```solidity
        contract Greeter {
            string private greeting;

            constructor(string memory _greeting) {
                greeting = _greeting;
            }

            function greet() public view returns (string memory) {
                return greeting;
            }
        }
        ```
        *   When deploying `Greeter`, you would provide an initial greeting, e.g., "Hello World!".

*   **Functions:**
    *   Blocks of code that perform specific operations. They are the actions that can be performed on the smart contract.
    *   Functions can read from or write to the contract's state variables.
    *   They have parameters, return values, and visibility specifiers.
    *   **Visibility Specifiers:**
        *   `public`: Accessible from anywhere (other contracts and external calls).
        *   `private`: Accessible only within the defining contract.
        *   `internal`: Accessible within the defining contract and contracts inheriting from it.
        *   `external`: Accessible only from external accounts and other contracts. (Note: `public` functions are also `external` if called from outside the contract).

    *   **State Mutability Specifiers:**
        *   `pure`: The function does not read from or modify the contract's state. It only operates on its inputs.
        *   `view`: The function can read from the contract's state but cannot modify it.
        *   (Default/No Specifier): The function can read from and modify the contract's state.

    *   **Example (Building on `SimpleStorage`):**
        ```solidity
        contract SimpleStorage {
            uint256 public storedData; // public state variable

            // Constructor: Initializes storedData on deployment
            constructor(uint256 initialValue) {
                storedData = initialValue;
            }

            // Function to modify the state
            function set(uint256 x) public {
                storedData = x;
            }

            // Function to read the state (view function)
            function get() public view returns (uint256) {
                return storedData;
            }

            // A pure function that just returns a fixed value
            function getFixedValue() public pure returns (uint256) {
                return 42;
            }
        }
        ```

*   **Events:**
    *   A mechanism for smart contracts to communicate with the outside world (e.g., frontend applications).
    *   When an event is "emitted," it creates a log entry on the blockchain that can be listened for.
    *   Useful for notifying users about important state changes or actions taken by the contract.
    *   **Example:**
        ```solidity
        contract EventExample {
            event LogMessage(address indexed sender, string message); // Declare an event

            function sendMessage(string memory _message) public {
                emit LogMessage(msg.sender, _message); // Emit the event
            }
        }
        ```
        *   `msg.sender` is a global variable in Solidity that holds the address of the account that called the current function.
        *   `indexed` parameters allow for more efficient filtering of events by the client.

*   **Modifiers:**
    *   Reusable pieces of code that can be used to check conditions before executing a function.
    *   They are often used for access control or validating input.
    *   A modifier is declared using the `modifier` keyword and then invoked within a function definition using its name followed by `()`.
    *   The `_;` placeholder indicates where the decorated function's code should be inserted.
    *   **Example:**
        ```solidity
        contract ModifierExample {
            address public owner;

            modifier onlyOwner() {
                require(msg.sender == owner, "Only the owner can call this function");
                _; // This is where the function code will be inserted
            }

            constructor() {
                owner = msg.sender; // Set the deployer as the owner
            }

            function changeOwner(address newOwner) public onlyOwner {
                owner = newOwner;
            }
        }
        ```
        *   In `changeOwner`, the `onlyOwner` modifier is called. If `msg.sender` is not the `owner`, the `require` statement will fail, reverting the transaction and raising an error.

---

### 3. Putting It All Together: A Comprehensive Example

Let's combine these elements into a more complete example of a simple token contract.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20; // Specify compiler version

// Import OpenZeppelin's ERC20 standard implementation
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MyCustomToken
 * @dev A simple ERC20 token with ownership.
 */
contract MyCustomToken is ERC20, Ownable { // Inherit from ERC20 and Ownable
    // State Variables are handled by ERC20 and Ownable contracts

    // Event for minting tokens
    event Minted(address indexed to, uint256 amount);

    // Constructor: Initializes the token and sets the owner
    constructor(uint256 initialSupply, string memory name, string memory symbol)
        ERC20(name, symbol) // Call the ERC20 constructor to set name and symbol
        Ownable(msg.sender) // Call Ownable constructor to set the initial owner
    {
        // Mint initial supply to the deployer
        _mint(msg.sender, initialSupply);
        emit Minted(msg.sender, initialSupply);
    }

    // Modifier to restrict minting to the owner
    modifier onlyOwnerOrAdmin() {
        // You could extend this to allow other addresses (admins) to mint
        // For now, we'll just use Ownable's built-in onlyOwner
        require(msg.sender == owner(), "Caller is not the owner");
        _;
    }

    /**
     * @dev Mints new tokens.
     * @param account The address to mint tokens to.
     * @param amount The amount of tokens to mint.
     */
    function mint(address account, uint256 amount) public onlyOwner { // Function to mint tokens
        _mint(account, amount); // Use internal _mint function from ERC20
        emit Minted(account, amount);
    }

    /**
     * @dev A simple function to get the total supply.
     * This is already provided by ERC20, but shown here for illustration.
     * @return The total supply of tokens.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return super.totalSupply(); // Call the parent ERC20 contract's totalSupply
    }

    // You can add more functions here for token-specific logic
}
```

**Explanation of the Example:**

*   **SPDX License Identifier:** `// SPDX-License-Identifier: MIT` is a good practice to specify the license of your code.
*   **Pragma:** `pragma solidity ^0.8.20;` specifies the compiler version.
*   **Imports:** We import `ERC20.sol` and `Ownable.sol` from OpenZeppelin. OpenZeppelin provides battle-tested, standard implementations of common smart contract patterns, which is highly recommended.
*   **Contract Definition:** `contract MyCustomToken is ERC20, Ownable { ... }` defines our contract and indicates it inherits functionality from `ERC20` and `Ownable`.
*   **Constructor:** Takes `initialSupply`, `name`, and `symbol` as arguments. It calls the parent constructors (`ERC20` and `Ownable`) and then uses `_mint` to create the initial supply for the deployer.
*   **Events:** `event Minted(...)` is declared to signal when tokens have been minted.
*   **Functions:**
    *   `mint(address account, uint256 amount) public onlyOwner`: Allows the owner to create more tokens. The `onlyOwner` modifier (provided by `Ownable`) ensures only the owner can call this.
    *   `totalSupply()`: Demonstrates overriding a parent function and calling the parent's implementation using `super.totalSupply()`.

---

### 4. Learning Outcomes Covered

*   **Understanding the role of smart contracts on Ethereum:** Covered in Section 1.
*   **Identifying the key components of a Solidity smart contract:** Covered in Section 2.
*   **Explaining the purpose of pragma, contract definition, state variables, constructors, functions, events, and modifiers:** Detailed explanations and examples provided for each in Section 2.
*   **Demonstrating how these components interact to form a functional program:** Illustrated through the `SimpleStorage`, `Greeter`, `EventExample`, `ModifierExample`, and `MyCustomToken` examples.
*   **Recognizing best practices like using established libraries (e.g., OpenZeppelin):** Highlighted in the `MyCustomToken` example.

---

### 5. Practice Questions and Exercises

**Question 1:**

What is the primary purpose of the `pragma solidity ^0.8.0;` directive?

**Answer 1:**
It specifies the version of the Solidity compiler that should be used to compile the contract, ensuring compatibility and preventing unexpected behavior due to language changes.

---

**Question 2:**

Differentiate between `pure` and `view` functions in Solidity. Provide a small code snippet for each.

**Answer 2:**
*   **`pure` functions:** Do not read from or modify the contract's state. They only operate on their inputs or return constant values.
    ```solidity
    function getFixedNumber() public pure returns (uint256) {
        return 10;
    }
    ```
*   **`view` functions:** Can read from the contract's state but cannot modify it.
    ```solidity
    uint256 public myValue;
    function getValue() public view returns (uint256) {
        return myValue; // Reads from state
    }
    ```

---

**Question 3:**

Explain the role of the `constructor` in a Solidity smart contract and why it's called only once.

**Answer 3:**
The `constructor` is a special function executed only during the contract's deployment. Its purpose is to initialize the contract's state variables or set up its initial configuration. It's called only once because once the contract is deployed, its code is immutable, and the constructor logic cannot be executed again.

---

**Question 4:**

What is an `event` in Solidity, and how is it used?

**Answer 4:**
An `event` is a way for smart contracts to communicate with the outside world (e.g., front-end applications). When an event is emitted, it creates a log on the blockchain. This log can be listened to by external applications, allowing them to react to specific actions or state changes within the contract without constantly polling the blockchain.

---

**Question 5:**

Write a simple Solidity smart contract that stores a number and allows an owner to update it. Use a modifier to ensure only the owner can update the number.

**Exercise 5:**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OwnerControlledStorage {
    uint256 public storedNumber;
    address public owner;

    // Modifier to check if the caller is the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner.");
        _;
    }

    // Constructor: Set the initial owner and the initial number
    constructor(uint256 initialNumber) {
        owner = msg.sender; // The deployer is the owner
        storedNumber = initialNumber;
    }

    // Function to set the number, restricted to the owner
    function setNumber(uint256 newNumber) public onlyOwner {
        storedNumber = newNumber;
    }

    // Function to get the number (read-only)
    function getNumber() public view returns (uint256) {
        return storedNumber;
    }
}
```

---

### 6. Important Points to Remember

*   **Solidity Versions Matter:** Always specify the pragma directive for compiler compatibility.
*   **Immutability is Key:** Once deployed, smart contract code cannot be changed. This means thorough testing and auditing are critical.
*   **Gas Costs:** Every operation on the Ethereum blockchain costs "gas." Writing efficient code, especially for state-changing functions, is important to minimize costs. `view` and `pure` functions generally do not cost gas when called externally (though they do if called internally by a state-changing function).
*   **Security is Paramount:** Smart contracts handle value and logic, making them prime targets for exploits. Understanding common vulnerabilities and using established libraries like OpenZeppelin is crucial.
*   **Visibility:** Carefully choose the visibility (`public`, `private`, `internal`, `external`) for your state variables and functions.
*   **Events for Communication:** Use events to inform external applications about contract activities.
*   **Modifiers for Logic Reuse:** Modifiers are excellent for enforcing conditions across multiple functions.

---
