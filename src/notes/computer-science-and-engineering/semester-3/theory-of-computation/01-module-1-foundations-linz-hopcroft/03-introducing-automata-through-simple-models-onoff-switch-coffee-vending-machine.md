---
title: "Introducing automata through simple models - On/Off switch, coffee vending machine."
subject: "THEORY OF COMPUTATION"
module: "Module 1: Foundations (Linz, Hopcroft)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab96"
status: "completed"
scrapedAt: "2026-05-20T16:29:40.590Z"
---
# THEORY OF COMPUTATION - Module 1: Foundations - Introducing Automata through Simple Models

**Topic:** On/Off Switch, Coffee Vending Machine

**References:** Linz, Hopcroft

**Learning Outcomes:**

*   Understand the basic concept of an automaton as a computational model.
*   Apply finite state machine concepts to real-world scenarios.
*   Design simple automata to represent the behavior of basic systems like an On/Off switch and a coffee vending machine.
*   Differentiate between states, inputs, and transitions in an automaton.
*   Recognize the limitations of simple automata models.

## 1. Introduction to Automata

*   **What is an Automaton?** An automaton (plural: automata) is an abstract model of a computing device. It's a mathematical representation of a system that receives input, undergoes state transitions based on that input, and possibly produces output. Think of it as a machine with a finite number of states and a set of rules dictating how it changes states.

*   **Why Study Automata?**
    *   **Fundamental Building Block:**  Automata are foundational to computer science.  They help us understand computation, languages, and the limits of what computers can do.
    *   **Modeling Real-World Systems:**  They provide a way to model and analyze simple computational devices and systems.
    *   **Compiler Design:**  Automata theory is critical in designing compilers, which translate human-readable code into machine-executable code.
    *   **Pattern Recognition:**  Used in pattern recognition algorithms (e.g., spam filters, DNA sequencing).

*   **Key Components of an Automaton:**
    *   **States:** Represents different conditions or situations the automaton can be in.
    *   **Input:** Represents external stimuli the automaton receives.
    *   **Transitions:** Rules that define how the automaton moves from one state to another based on the input.
    *   **Initial State:** The state the automaton starts in.
    *   **Accepting (or Final) States (Optional):**  States that indicate a successful computation or a desired outcome.  Not all automata have accepting states (e.g., the On/Off switch).

## 2. The On/Off Switch Automaton

*   **Purpose:** Models a simple switch that can be in either an "On" or "Off" state and changes states when a "Flip" input is received.

*   **States:**
    *   `On`: The switch is on.
    *   `Off`: The switch is off.

*   **Input Alphabet:**  Σ = {Flip}  (The only possible input is the "Flip" command)

*   **Transitions:**
    *   If in state `Off` and receive input `Flip`, transition to state `On`.
    *   If in state `On` and receive input `Flip`, transition to state `Off`.

*   **Initial State:** Usually `Off` (can be defined differently depending on the context).

*   **Diagram Representation (State Diagram):**

    ```
    +-------+    Flip    +-------+
    |  Off  |----------->|  On   |
    +-------+    <---------+-------+
                  Flip
    ```

*   **Transition Table Representation:**

    | Current State | Input (Flip) | Next State |
    |----------------|--------------|------------|
    | Off            | Flip         | On         |
    | On             | Flip         | Off        |

*   **Important Considerations:**
    *   This is a *deterministic* automaton (each input from a state leads to exactly one next state).
    *   It has no accepting states, as its purpose is not to "accept" any particular sequence of flips, but rather to model the switch's behavior.

## 3. The Coffee Vending Machine Automaton

*   **Purpose:** Models a simplified coffee vending machine that accepts specific denominations of coins and dispenses coffee when enough money is inserted.

*   **Simplifications:**  We will significantly simplify the machine for illustrative purposes.  We will assume it accepts only $0.25 coins and dispenses coffee when $0.50 (2 quarters) is inserted.

*   **States:** Represents the amount of money inserted so far.
    *   `S0`: $0.00 (Initial state)
    *   `S25`: $0.25
    *   `S50`: $0.50 (Coffee dispensed)

*   **Input Alphabet:**  Σ = {Quarter} (Represents inserting a $0.25 coin)

*   **Transitions:**
    *   If in state `S0` and receive input `Quarter`, transition to state `S25`.
    *   If in state `S25` and receive input `Quarter`, transition to state `S50`.
    *   If in state `S50` and receive input `Quarter`, remain in state `S50` (or, in a more realistic model, potentially return change, which would require more states and inputs).  For simplicity, we'll assume it just stays in S50.

*   **Initial State:** `S0`

*   **Accepting State:** `S50` (Represents the state where coffee is dispensed)

*   **Diagram Representation (State Diagram):**

    ```
    +-------+    Quarter   +-------+    Quarter   +-------+
    |  S0   |------------>|  S25  |------------>|  S50  |
    +-------+              +-------+              +-------+
                                                    ^
                                                    | Quarter
                                                    |
                                                    +-------+
                                                    |  S50  |
                                                    +-------+
    ```

*   **Transition Table Representation:**

    | Current State | Input (Quarter) | Next State |
    |----------------|-----------------|------------|
    | S0             | Quarter         | S25        |
    | S25            | Quarter         | S50        |
    | S50            | Quarter         | S50        |

*   **Important Considerations:**
    *   This is a highly simplified model.  A real vending machine would need to handle:
        *   Different coin denominations
        *   Returning change
        *   Multiple product selections
        *   Running out of product
        *   Error conditions (e.g., invalid coins)
    *   The acceptance condition (reaching state `S50`) indicates that the machine has received sufficient payment for coffee.

## 4. Extending the Coffee Vending Machine

Let's improve the Coffee Vending Machine model slightly to include a "dispense" output.

*   **Inputs:** Σ = {Quarter, Dispense}
*   **Outputs:** {Coffee, No Coffee} - Implicit.  The coffee is "dispensed" upon reaching S50. If we want to make this explicit, the automata would need to be a Moore or Mealy machine, which are more advanced. For this simplified example, the output is implicitly tied to a state.

*   **States:**
    *   `S0`: $0.00
    *   `S25`: $0.25
    *   `S50`: $0.50

*   **Transitions:**
    *   If in state `S0` and receive input `Quarter`, transition to state `S25`.
    *   If in state `S25` and receive input `Quarter`, transition to state `S50`.
    *   If in state `S50` and receive input `Dispense`, transition back to `S0` (indicating the coffee has been dispensed and the machine is ready for the next transaction).  If input is `Quarter`, remain in S50.
    *   If in states S0, S25 and input is `Dispense`, remains in the same state (does nothing).

*   **Diagram Representation (State Diagram):**

    ```
    +-------+    Quarter   +-------+    Quarter   +-------+
    |  S0   |------------>|  S25  |------------>|  S50  |
    +-------+ Dispense ^  +-------+    Dispense   +-------+
          |              |      |                  |  Quarter
          |              |      +----------------->|
          +--------------+                         |
                                                   |
                                Dispense           |
                                +------------------+
    ```

*   **Transition Table Representation:**

    | Current State | Input (Quarter) | Input (Dispense) | Next State |
    |----------------|-----------------|------------------|------------|
    | S0             | Quarter         | Dispense          | S25        | S0
    | S25            | Quarter         | Dispense          | S50        | S25
    | S50            | Quarter         | Dispense          | S50        | S0

## 5. Limitations of Simple Automata Models

*   **Finite Memory:**  The number of states is finite, limiting the amount of information the automaton can "remember" about past inputs.  This is a fundamental constraint.
*   **No Variables or Counters:**  Simple automata cannot store variable values or perform arithmetic operations.
*   **Inability to Handle Complex Logic:**  They are not suitable for modeling complex algorithms or systems that require significant computational power.

## 6. Practice Questions and Exercises

**Question 1:**

Design an automaton (state diagram and transition table) that models a simple traffic light. The light cycles through the following sequence: Green -> Yellow -> Red -> Green. Assume the input is always a "Tick" signal from a timer.

**Answer:**

*   **States:**
    *   `Green`
    *   `Yellow`
    *   `Red`

*   **Input Alphabet:** Σ = {Tick}

*   **Transitions:**
    *   `Green` + `Tick` -> `Yellow`
    *   `Yellow` + `Tick` -> `Red`
    *   `Red` + `Tick` -> `Green`

*   **Initial State:** `Green`

*   **Diagram Representation (State Diagram):**

    ```
    +-------+   Tick  +--------+   Tick  +-------+
    | Green |-------->| Yellow |-------->| Red   |
    +-------+   <-------+--------+   <-------+-------+
          ^                     ^
          |                     | Tick
          +---------------------+
    ```

*   **Transition Table Representation:**

    | Current State | Input (Tick) | Next State |
    |----------------|--------------|------------|
    | Green          | Tick         | Yellow      |
    | Yellow         | Tick         | Red         |
    | Red            | Tick         | Green      |

**Question 2:**

Explain in your own words the difference between a state and a transition in an automaton.

**Answer:**

A *state* represents a specific condition or situation the automaton is in at a particular moment. It's like a snapshot of the machine's configuration. A *transition* is a rule that dictates how the automaton moves from one state to another based on the input it receives. It's the action that causes the change from one state to the next.

**Question 3:**

Consider a vending machine that requires exactly $1.00 to dispense a drink. The machine accepts quarters only. Draw a state diagram for this automaton. What are the states, alphabet and transition function?

**Answer:**

*   **States:** S0 (0.00), S25 (0.25), S50 (0.50), S75 (0.75), S100 (1.00 - dispensed)
*   **Alphabet:** {Quarter}
*   **Transitions:**
    * S0 + Quarter -> S25
    * S25 + Quarter -> S50
    * S50 + Quarter -> S75
    * S75 + Quarter -> S100
    * S100 + Quarter -> S100 (remains after dispensing for simplicity)

```
    +-------+    Quarter   +-------+    Quarter   +-------+    Quarter  +-------+    Quarter  +-------+
    |  S0   |------------>|  S25  |------------>|  S50  |------------>|  S75  |------------>| S100 |
    +-------+              +-------+              +-------+              +-------+              +-------+
                                                                                                    ^
                                                                                                    |
                                                                                               Quarter |
                                                                                                    |
                                                                                                +-------+
                                                                                                | S100 |
                                                                                                +-------+
```

## 7. Important Points to Remember

*   Automata are abstract models of computation.
*   They are characterized by states, inputs, and transitions.
*   Simple automata have finite memory and limited computational power.
*   State diagrams and transition tables are two common ways to represent automata.
*   Understanding automata is crucial for comprehending more complex computational models and systems.
