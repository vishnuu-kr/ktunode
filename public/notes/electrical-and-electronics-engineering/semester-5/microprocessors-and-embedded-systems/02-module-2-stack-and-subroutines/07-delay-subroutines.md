---
title: "Delay subroutines"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 2: Stack and Subroutines"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3621a"
status: "completed"
scrapedAt: "2026-05-23T16:22:45.393Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS - Module 2: Stack and Subroutines

## Topic: Delay Subroutines

---

### 1. Introduction to Delay Subroutines

*   **Definition:** A delay subroutine is a program routine that deliberately consumes time by executing a sequence of instructions. This is often used to control the timing of operations in embedded systems, such as blinking LEDs, controlling motor speeds, or synchronizing communication.
*   **Purpose:**
    *   **Timing Control:** To introduce specific time delays between actions.
    *   **Synchronization:** To align operations with external events or other hardware components.
    *   **User Interaction:** To provide a noticeable pause for users to observe or interact with a system.
*   **Relevance to Microprocessors:** Microprocessors execute instructions at very high speeds. To achieve specific timings, programmers need to create routines that consume a predictable amount of clock cycles.

---

### 2. Understanding Clock Cycles and Instruction Timing

*   **Clock Cycle:** The fundamental unit of time for a microprocessor. Each instruction takes a certain number of clock cycles to execute.
*   **Instruction Execution Time:** The total time taken to execute an instruction depends on the number of clock cycles it requires and the clock frequency of the microprocessor.
    *   *Time = (Number of Clock Cycles * Clock Period)*
    *   *Clock Period = 1 / Clock Frequency*
*   **Example (8085):** The `NOP` (No Operation) instruction in the 8085 microprocessor takes 4 clock cycles to execute. If the clock frequency is 3 MHz, then the time for one `NOP` is (4 cycles / 3,000,000 cycles/second) = 1.33 microseconds.
*   **Referencing Textbooks:**
    *   **Ram, B. (Fundamentals of Microprocessor and Micro controllers):** This book extensively covers the instruction sets and their machine cycles/T-states (clock cycles) for the 8085 microprocessor. Understanding these timings is crucial for accurate delay calculation.
    *   **Gaonkar, Ramesh. (Microprocessor, Architecture, Programming and Applications):** Gaonkar's text provides detailed explanations of the 8085 instruction timings, which are essential for constructing precise delay routines.

---

### 3. Types of Delay Subroutines

Delay subroutines can be broadly categorized based on their implementation:

#### 3.1. Simple Delay Subroutines (No Loops)

*   **Concept:** Executing a fixed number of instructions that take a specific amount of time.
*   **Limitations:** The delay is fixed and cannot be easily adjusted without modifying the code. This is only practical for very short, fixed delays.
*   **Example:**
    ```assembly
    ; Delay of approximately 12 clock cycles (assuming 4 cycles per instruction)
    NOP     ; 4 cycles
    NOP     ; 4 cycles
    NOP     ; 4 cycles
    RET     ; Returns from subroutine (typically 10-18 cycles depending on mode)
    ```
    *   **Note:** The `RET` instruction's cycle count needs to be accounted for.

#### 3.2. Loop-Based Delay Subroutines (Counters)

*   **Concept:** Using registers as counters and looping a set of instructions a specific number of times. This allows for adjustable delays.
*   **Core Components:**
    *   **Initialization:** Loading a counter register with a desired value.
    *   **Loop Body:** A set of instructions that take a fixed number of clock cycles.
    *   **Decrement and Check:** Decrementing the counter register and checking if it has reached zero.
    *   **Looping:** If the counter is not zero, jump back to the beginning of the loop.
*   **Nested Loops:** To achieve longer delays, multiple loops can be nested. An outer loop controls the number of iterations of an inner loop.

#### 3.3. Nested Loop Delay Subroutines

*   **Concept:** To create longer delays, a loop is placed inside another loop.
*   **Structure:**
    *   **Outer Loop Counter:** Controls the number of times the inner loop executes.
    *   **Inner Loop:** Contains instructions that perform a delay.
*   **Calculation:**
    *   *Total Delay = (Outer Loop Iterations) * (Inner Loop Delay Cycles) + Overhead Cycles*
    *   *Overhead Cycles:* Include instructions for initialization, decrementing, and conditional jumps for both loops, and the `RET` instruction.

#### 3.4. Delay Subroutines using the Stack (More Complex)

*   **Concept:** While not the primary mechanism for delays, the stack can be used in conjunction with delay routines, especially in more complex scenarios or when using subroutines that rely on stack manipulation. For simple delays, direct register looping is more common.
*   **Relevance to Module 2:** This topic directly ties into the "Stack and Subroutines" module. Understanding how subroutines use the stack (for return addresses and parameter passing) is crucial for writing and debugging them.

---

### 4. Designing and Implementing Delay Subroutines (8085 Example)

Let's design a delay subroutine for the 8085 microprocessor. Assume an 8085 clock frequency of 3.072 MHz.

*   **Clock Period:** 1 / 3.072 MHz = 0.3255 microseconds per clock cycle.
*   **Instruction Timings (Approximate for 8085):**
    *   `MVI r, data`: 7 cycles
    *   `DCR r`: 4 cycles
    *   `JNZ address`: 10 cycles (if jump is taken)
    *   `RET`: 10 cycles (minimum)

#### Example 1: A Simple Loop Delay

**Goal:** Create a delay of approximately 10 milliseconds.

*   **Inner Loop:** Let's create a loop that takes roughly `4 (DCR) + 10 (JNZ)` = 14 cycles per iteration. We need to execute this loop enough times to get close to our desired delay.
*   **Number of Inner Loop Iterations:**
    *   Target Delay: 10 ms = 10,000 µs
    *   Cycles per Iteration: 14 cycles
    *   Desired Cycles: 10,000 µs / 0.3255 µs/cycle ≈ 30700 cycles
    *   Number of Iterations: 30700 cycles / 14 cycles/iteration ≈ 2200 iterations.
    *   This is too large for a single 8-bit register (max 255). We'll need a 16-bit counter or nested loops.

#### Example 2: Nested Loop Delay (More Practical)

**Goal:** Create a delay of approximately 10 milliseconds.

Let's use two 8-bit registers for nested loops.

*   **Inner Loop:**
    *   Instructions: `DCR B`, `JNZ loop_inner`
    *   Cycles: 4 (DCR) + 10 (JNZ) = 14 cycles.
    *   Initialization: `MVI B, FFh` (255 iterations).
    *   Inner Loop Total Cycles: 255 iterations * 14 cycles/iteration = 3570 cycles.

*   **Outer Loop:**
    *   Instructions: `DCR C`, `JNZ loop_outer`
    *   Cycles: 4 (DCR) + 10 (JNZ) = 14 cycles.
    *   Initialization: `MVI C, XXh` (determines outer loop iterations).

*   **Total Delay Calculation:**
    *   Let `N_outer` be the value loaded into register `C`.
    *   Total cycles from loops = `N_outer * (Inner Loop Cycles + Outer Loop Overhead)`
    *   Outer loop overhead: `DCR C` (4 cycles) + `JNZ loop_outer` (10 cycles) = 14 cycles.
    *   Let's refine the inner loop to include the `JNZ` check.

**Revised Inner Loop:**
```assembly
; Inner loop: Executes N_inner times (loaded into register B)
; Each iteration takes 14 cycles (DCR B + JNZ)
LOOP_INNER:
    DCR B       ; 4 cycles
    JNZ LOOP_INNER ; 10 cycles (if jump taken)
```
This inner loop takes `N_inner * 14` cycles.

**Revised Outer Loop:**
```assembly
; Outer loop: Executes N_outer times (loaded into register C)
LOOP_OUTER:
    MVI B, FFh  ; 7 cycles (initialize inner counter)
INNER_LOOP_START:
    DCR B       ; 4 cycles
    JNZ INNER_LOOP_START ; 10 cycles (if jump taken)
    DCR C       ; 4 cycles
    JNZ LOOP_OUTER ; 10 cycles (if jump taken)
```
*   **Cycles per Outer Loop Iteration:**
    *   Initialize inner counter (`MVI B, FFh`): 7 cycles
    *   Inner loop execution (255 iterations): 255 * 14 = 3570 cycles
    *   Outer loop decrement and check (`DCR C`, `JNZ LOOP_OUTER`): 4 + 10 = 14 cycles
    *   Total per outer loop iteration = 7 + 3570 + 14 = 3591 cycles.

*   **Calculating `N_outer` for 10 ms (10,000 µs):**
    *   Target cycles: 10,000 µs / 0.3255 µs/cycle ≈ 30700 cycles
    *   We need to achieve roughly 30700 cycles.
    *   If `N_outer = 8`, total cycles ≈ 8 * 3591 ≈ 28728 cycles.
    *   This is a bit short. Let's increase `N_outer`.
    *   If `N_outer = 9`, total cycles ≈ 9 * 3591 ≈ 32319 cycles.
    *   This is closer. We can fine-tune by adjusting the inner loop count or adding NOPs.

**A More Refined Nested Loop Delay Subroutine:**

```assembly
; Delay subroutine for ~10ms at 3.072 MHz
; Takes N_outer value as input in register C

DELAY_MS:
    PUSH B          ; Save B register (4 cycles)
    MOV B, C        ; Load outer loop counter into B (7 cycles)
OUTER_LOOP:
    MVI C, FFh      ; Load inner loop counter (255 iterations) (7 cycles)
INNER_LOOP:
    DCR C           ; Decrement inner counter (4 cycles)
    JNZ INNER_LOOP  ; Jump if not zero (10 cycles) - 255 * 14 = 3570 cycles

    DCR B           ; Decrement outer counter (4 cycles)
    JNZ OUTER_LOOP  ; Jump if not zero (10 cycles) - N_outer * 14 = N_outer * 14 cycles

    POP B           ; Restore B register (6 cycles)
    RET             ; Return from subroutine (10 cycles)

; Total cycles = (MVI C, FFh + INNER_LOOP) * N_outer + DCR B + JNZ OUTER_LOOP + PUSH B + POP B + RET
; APPROXIMATE Total cycles = (7 + 3570) * N_outer + 4 + 10 + 4 + 6 + 10
; APPROXIMATE Total cycles = 3577 * N_outer + 34

; For N_outer = 9:
; Total cycles = 3577 * 9 + 34 = 32193 + 34 = 32227 cycles
; Delay = 32227 cycles * 0.3255 µs/cycle ≈ 10485 µs ≈ 10.48 ms

; Main program to call the delay
ORG 0000H
    MVI C, 09H      ; Load the desired number of outer loop iterations (9 for ~10ms)
    CALL DELAY_MS   ; Call the delay subroutine
    HLT             ; Halt processor
```

*   **Referencing Textbooks:**
    *   **Rafiquzzaman, M. (Microprocessor Theory and Application):** This book provides clear examples of loop structures and timing calculations for delay routines, reinforcing the concepts used above.
    *   **Margolis, M. (Arduino Cookbook):** While focused on Arduino, the fundamental concepts of introducing delays are similar. Arduino's `delay()` function is a high-level abstraction of these underlying principles.

---

### 5. Delay Functions in Embedded C (Arduino Context)

In embedded systems using higher-level languages like Embedded C with platforms like Arduino, pre-built functions simplify delay creation.

*   **`delay(milliseconds)`:**
    *   **Description:** Pauses the program execution for a specified number of milliseconds.
    *   **Example (Arduino IDE):**
        ```c++
        void setup() {
          pinMode(13, OUTPUT); // Initialize digital pin 13 as an output
        }

        void loop() {
          digitalWrite(13, HIGH); // Turn the LED on
          delay(1000);            // Wait for 1 second (1000 milliseconds)
          digitalWrite(13, LOW);  // Turn the LED off
          delay(1000);            // Wait for 1 second
        }
        ```
    *   **Underlying Implementation:** The `delay()` function in Arduino libraries is typically implemented using timer interrupts or busy-wait loops similar to the assembly examples, but abstracted away.

*   **`delayMicroseconds(microseconds)`:**
    *   **Description:** Pauses the program execution for a specified number of microseconds. This function is useful for shorter, more precise delays, often used in communication protocols.
    *   **Example (Arduino IDE):**
        ```c++
        void setup() {
          pinMode(13, OUTPUT);
        }

        void loop() {
          digitalWrite(13, HIGH);
          delayMicroseconds(500); // Wait for 500 microseconds
          digitalWrite(13, LOW);
          delayMicroseconds(500); // Wait for 500 microseconds
        }
        ```
    *   **Referencing Textbooks:**
        *   **Baichtal, J. (Arduino for beginners):** Introduces basic Arduino programming, including the use of `delay()`.
        *   **Pajankar, A. (Arduino Made Simple):** Provides practical examples of using delay functions for timing in Arduino projects.
        *   **Monk, S. (Programming Arduino Next Steps):** Explores more advanced uses of timing and delay in Arduino.

---

### 6. Considerations and Best Practices

*   **Accuracy:**
    *   **Instruction Timing:** Always use accurate instruction cycle counts from the microprocessor's datasheet.
    *   **Overhead:** Account for the cycles of all instructions within the delay routine, including initialization, loop control, and the `RET` instruction.
    *   **External Factors:** Clock drift or external interrupt service routines can affect the actual delay.
*   **Efficiency:**
    *   **Busy-Waiting:** Simple loop-based delays consume CPU resources. While they achieve precise timing, they prevent the processor from performing other tasks during the delay. This is known as busy-waiting.
    *   **Alternatives:** For longer delays or when multitasking is required, consider using hardware timers and interrupts. This allows the processor to handle other tasks while the timer counts down and signals the end of the delay.
*   **Flexibility:**
    *   **Parameterized Delays:** Design subroutines that accept delay parameters (e.g., via registers) to make them reusable for different delay durations.
*   **Context Switching:** Be mindful of how subroutine calls and returns (`CALL`, `RET`) affect the overall timing, as they involve stack operations and have their own cycle counts.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is a delay subroutine and why is it important in embedded systems? (CO2, K2)

**Answer:** A delay subroutine is a sequence of program instructions that deliberately consumes a specific amount of time. It is important in embedded systems for controlling the timing of operations, synchronizing with external events, and providing user feedback, ensuring that actions happen at the correct intervals.

**Question 2:**
Calculate the approximate delay generated by the following 8085 assembly code if the clock frequency is 2 MHz. Account for the `RET` instruction taking 10 cycles.

```assembly
DELAY_SUB:
    MVI B, 50H      ; Load 50h into register B
LOOP:
    DCR B           ; Decrement register B
    JNZ LOOP        ; Jump if B is not zero
    RET             ; Return from subroutine
```
(CO1, CO2, K2)

**Answer:**
*   Clock Frequency = 2 MHz
*   Clock Period = 1 / 2,000,000 seconds = 0.5 microseconds per cycle.
*   `MVI B, 50H`: 50h = 80 decimal.
    *   `MVI B, data`: 7 cycles
*   `DCR B`: 4 cycles
*   `JNZ LOOP`: 10 cycles (assuming jump is taken)
*   Total cycles per loop iteration = `DCR B` + `JNZ LOOP` = 4 + 10 = 14 cycles.
*   Number of loop iterations = 80 (from `50H`).
*   Cycles spent in the loop = 80 iterations * 14 cycles/iteration = 1120 cycles.
*   `RET` instruction cycles = 10 cycles.
*   Total cycles for `DELAY_SUB` = Cycles in loop + `RET` cycles = 1120 + 10 = 1130 cycles.
*   Approximate Delay = Total Cycles * Clock Period
*   Approximate Delay = 1130 cycles * 0.5 µs/cycle = 565 µs.

**Question 3:**
Explain the concept of busy-waiting in the context of delay subroutines. What are its advantages and disadvantages? (CO2, K2)

**Answer:**
Busy-waiting is a technique where a processor repeatedly executes instructions (typically a loop) to consume time, thereby creating a delay. During this period, the CPU is dedicated solely to the delay and cannot perform any other tasks.

*   **Advantages:**
    *   **Simplicity:** Easy to implement.
    *   **Precision:** Can achieve very precise delays if the instruction timings and clock frequency are known accurately.
*   **Disadvantages:**
    *   **Resource Intensive:** Wastes CPU cycles that could be used for other computations or tasks.
    *   **Inefficient:** Prevents multitasking or responsiveness to other events during the delay.

**Question 4:**
If you were programming an Arduino to blink an LED every 500 milliseconds, which Arduino function would you use and why? Provide a code snippet. (CO4, CO5, K2)

**Answer:**
You would use the `delay()` function. This function is designed to pause the program's execution for a specified duration in milliseconds, making it ideal for controlling the timing of events like blinking LEDs.

```c++
void setup() {
  pinMode(LED_BUILTIN, OUTPUT); // Use the built-in LED
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH); // Turn the LED on
  delay(500);                      // Wait for 500 milliseconds
  digitalWrite(LED_BUILTIN, LOW);  // Turn the LED off
  delay(500);                      // Wait for 500 milliseconds
}
```

---

### 8. Important Points to Remember

*   **Accurate Timing is Key:** Always refer to microprocessor datasheets for exact instruction cycle counts.
*   **Nested Loops for Longer Delays:** Use multiple loops to achieve delays longer than what a single loop can provide.
*   **Busy-Wait vs. Timers:** Understand that simple delay routines use busy-waiting, which can be inefficient. Hardware timers offer a more efficient alternative for longer delays or concurrent operations.
*   **Stack Usage in Subroutines:** Subroutines rely on the stack for return addresses. Any delay subroutine that is called as a subroutine will implicitly use the stack for its `CALL` and `RET` operations.
*   **Arduino Abstraction:** Functions like `delay()` and `delayMicroseconds()` in Arduino are high-level wrappers around the fundamental delay principles.

---

### 9. Alignment with Course Outcomes

*   **CO1 (8085 Architecture and Assembly):** Understanding instruction timings (`MVI`, `DCR`, `JNZ`) is directly related to the 8085 instruction set and architecture.
*   **CO2 (Interrupts, Subroutines, Timing):** This entire topic is about subroutines and timing diagrams (implied by cycle counts). The concept of busy-waiting versus potentially using timers (related to interrupts) is also covered.
*   **CO3 (Embedded Systems Basics):** Delay routines are fundamental building blocks for controlling hardware in embedded systems.
*   **CO4 (Arduino Uno Architecture and IDE):** The discussion of `delay()` and `delayMicroseconds()` directly relates to using the Arduino IDE and understanding basic Arduino programming.
*   **CO5 (Embedded C and Arduino UNO):** The Arduino C++ code examples demonstrate how to implement delays using Embedded C on an Arduino UNO.
*   **CO6 (RISC Architecture and ARM - Arduino DUE):** While the examples focus on 8085 and Arduino Uno (AVR), the underlying principles of timing and delay generation are transferable to RISC architectures like ARM. The need for precise timing remains crucial in embedded systems regardless of the processor.

---
