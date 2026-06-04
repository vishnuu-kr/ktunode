---
title: "continuous assignment with logical operators"
subject: "DIGITAL LAB"
module: "Module 3: Model a 4:1 MUX, 1:4 DEMUX, 4 to 2 encoder, and 2 to 4 decoder and a 7"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aeeb"
status: "completed"
scrapedAt: "2026-05-20T16:24:30.836Z"
---
## DIGITAL LAB - Module 3: Continuous Assignment with Logical Operators

**Topic:** Modeling Combinational Circuits (4:1 MUX, 1:4 DEMUX, 4 to 2 Encoder, 2 to 4 Decoder, and 7-Segment Decoder) using Continuous Assignment with Logical Operators

**Description:** This module focuses on using the continuous assignment statement (`assign`) in conjunction with logical operators (AND, OR, NOT) to model combinational logic circuits such as Multiplexers (MUX), Demultiplexers (DEMUX), Encoders, Decoders, and 7-Segment Decoders.

**Learning Outcomes:**

*   Understand the concept of continuous assignment in hardware description languages (HDLs).
*   Utilize logical operators (AND, OR, NOT) effectively in continuous assignment statements.
*   Model a 4:1 Multiplexer using continuous assignment and logical operators.
*   Model a 1:4 Demultiplexer using continuous assignment and logical operators.
*   Model a 4 to 2 Encoder using continuous assignment and logical operators.
*   Model a 2 to 4 Decoder using continuous assignment and logical operators.
*   Model a 7-Segment Decoder using continuous assignment and logical operators.
*   Comprehend the advantages and disadvantages of using continuous assignment for modeling combinational circuits.

---

**1. Key Concepts and Definitions**

*   **Continuous Assignment (`assign`):**  A statement in HDL (like Verilog) that continuously drives a wire or output with the value of an expression. Any change in the inputs of the expression immediately propagates to the output. It's ideal for modeling combinational logic.
*   **Combinational Logic:** A type of digital logic circuit where the output at any given time depends only on the current inputs. No memory or storage elements are involved.
*   **Logical Operators:** Operators used to perform logical operations (AND, OR, NOT) on binary values.
    *   `&` (AND): Returns 1 if both operands are 1, otherwise 0.
    *   `|` (OR):  Returns 1 if at least one operand is 1, otherwise 0.
    *   `~` (NOT): Inverts the operand (1 becomes 0, 0 becomes 1).
*   **Multiplexer (MUX):** A circuit that selects one of several input signals and forwards it to a single output. The selection is controlled by select input(s).
*   **Demultiplexer (DEMUX):** A circuit that takes a single input signal and routes it to one of several outputs. The routing is controlled by select input(s).
*   **Encoder:** A circuit that converts a set of mutually exclusive inputs into a binary code representing which input is active.
*   **Decoder:** A circuit that converts a binary code into a set of mutually exclusive outputs, where only one output is active based on the input code.
*   **7-Segment Decoder:** A circuit that converts a binary code into signals to drive a 7-segment display, showing a decimal digit.

**2. Continuous Assignment in Detail**

*   **Syntax:** `assign output = expression;`
*   **Functionality:** The `output` wire is continuously updated with the result of the `expression`.  If any input within the `expression` changes, the `output` is immediately recalculated.
*   **Use Cases:** Primarily used for modeling combinational logic where the output is a direct function of the inputs.
*   **Limitations:** Not suitable for modeling sequential logic (circuits with memory) because it cannot represent state.

**3. Modeling Combinational Circuits with Continuous Assignment and Logical Operators**

**3.1. 4:1 Multiplexer (MUX)**

*   **Functionality:** Selects one of four inputs (I0, I1, I2, I3) based on two select lines (S1, S0) and routes it to the output (Y).
*   **Truth Table:**

    | S1 | S0 | Y   |
    |----|----|-----|
    | 0  | 0  | I0  |
    | 0  | 1  | I1  |
    | 1  | 0  | I2  |
    | 1  | 1  | I3  |

*   **Verilog Code (using continuous assignment):**

    ```verilog
    module mux4_1(input I0, I1, I2, I3,
                  input S1, S0,
                  output Y);

      assign Y = (~S1 & ~S0 & I0) |  // If S1=0 and S0=0, output I0
                   (~S1 &  S0 & I1) |  // If S1=0 and S0=1, output I1
                   ( S1 & ~S0 & I2) |  // If S1=1 and S0=0, output I2
                   ( S1 &  S0 & I3);  // If S1=1 and S0=1, output I3

    endmodule
    ```

**3.2. 1:4 Demultiplexer (DEMUX)**

*   **Functionality:** Routes a single input (IN) to one of four outputs (O0, O1, O2, O3) based on two select lines (S1, S0).
*   **Truth Table:**

    | S1 | S0 | O0 | O1 | O2 | O3 |
    |----|----|----|----|----|----|
    | 0  | 0  | IN | 0  | 0  | 0  |
    | 0  | 1  | 0  | IN | 0  | 0  |
    | 1  | 0  | 0  | 0  | IN | 0  |
    | 1  | 1  | 0  | 0  | 0  | IN |

*   **Verilog Code (using continuous assignment):**

    ```verilog
    module demux1_4(input IN,
                    input S1, S0,
                    output O0, O1, O2, O3);

      assign O0 = (~S1 & ~S0 & IN);
      assign O1 = (~S1 &  S0 & IN);
      assign O2 = ( S1 & ~S0 & IN);
      assign O3 = ( S1 &  S0 & IN);

    endmodule
    ```

**3.3. 4 to 2 Encoder**

*   **Functionality:** Converts four inputs (I0, I1, I2, I3) to a 2-bit output (Q1, Q0) representing the index of the active input.  Only one input can be active at a time. I3 has highest priority.
*   **Truth Table:**

    | I0 | I1 | I2 | I3 | Q1 | Q0 |
    |----|----|----|----|----|----|
    | 1  | 0  | 0  | 0  | 0  | 0  |
    | 0  | 1  | 0  | 0  | 0  | 1  |
    | 0  | 0  | 1  | 0  | 1  | 0  |
    | 0  | 0  | 0  | 1  | 1  | 1  |

*   **Verilog Code (using continuous assignment):**

    ```verilog
    module encoder4_2(input I0, I1, I2, I3,
                      output Q1, Q0);

      assign Q0 = (I1 & ~I2 & ~I3) | (~I1 & ~I2 & I3);
      assign Q1 = (I2 & ~I3) | I3;

    endmodule
    ```

**3.4. 2 to 4 Decoder**

*   **Functionality:** Converts a 2-bit input (A1, A0) to activate one of four outputs (O0, O1, O2, O3).
*   **Truth Table:**

    | A1 | A0 | O0 | O1 | O2 | O3 |
    |----|----|----|----|----|----|
    | 0  | 0  | 1  | 0  | 0  | 0  |
    | 0  | 1  | 0  | 1  | 0  | 0  |
    | 1  | 0  | 0  | 0  | 1  | 0  |
    | 1  | 1  | 0  | 0  | 0  | 1  |

*   **Verilog Code (using continuous assignment):**

    ```verilog
    module decoder2_4(input A1, A0,
                      output O0, O1, O2, O3);

      assign O0 = (~A1 & ~A0);
      assign O1 = (~A1 &  A0);
      assign O2 = ( A1 & ~A0);
      assign O3 = ( A1 &  A0);

    endmodule
    ```

**3.5. 7-Segment Decoder**

*   **Functionality:** Converts a 4-bit BCD (Binary Coded Decimal) input to control the segments of a 7-segment display to show decimal digits from 0 to 9 (and sometimes hexadecimal digits A to F).  We will show example implementation for only 0-3.

*   **7-Segment Display Segment Mapping:**

    ```
        --a--
       |     |
       f     b
       |     |
        --g--
       |     |
       e     c
       |     |
        --d--
    ```

*   **Simplified Example (Displaying 0-3):** Assume input is a 2-bit value [B1, B0].  We want to display 0, 1, 2, and 3 on the 7-segment display.  We'll drive segments a, b, c, d, e, f, g.

*   **Truth Table (for 0-3):**

    | B1 | B0 | a | b | c | d | e | f | g | Displayed Number |
    |----|----|---|---|---|---|---|---|---|------------------|
    | 0  | 0  | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0                |
    | 0  | 1  | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 1                |
    | 1  | 0  | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 2                |
    | 1  | 1  | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 3                |

*   **Verilog Code (using continuous assignment, simplified for 0-3):**

    ```verilog
    module seven_segment_decoder(input B1, B0,
                                 output a, b, c, d, e, f, g);

      assign a = (~B1 & ~B0) | (~B1 & B0) | (B1 & ~B0) | (B1 & B0); //always on, displaying either 0,1,2, or 3
      assign b = (~B1 & ~B0) | (~B1 & B0) | (B1 & ~B0) | (B1 & B0); // always on
      assign c = (~B1 & ~B0) | (~B1 & B0) | (B1 & B0);   // ~B1 & ~B0 displays 0, other values turn the light on
      assign d = (~B1 & ~B0) | (B1 & ~B0) | (B1 & B0);
      assign e = (~B1 & ~B0) | (B1 & ~B0);
      assign f = (~B1 & ~B0);
      assign g = (B1 & ~B0) | (B1 & B0);

    endmodule
    ```

**4. Advantages and Disadvantages of Using Continuous Assignment**

*   **Advantages:**
    *   **Simplicity:** Easy to write and understand for basic combinational logic.
    *   **Conciseness:**  Allows compact representation of logic functions.
    *   **Readability:**  Directly translates truth tables into HDL code.

*   **Disadvantages:**
    *   **Limited Scope:**  Not suitable for modeling complex sequential logic or circuits with memory elements.
    *   **Maintainability:** Can become difficult to manage for very large or complex expressions.
    *   **Performance:**  In some cases, other modeling styles (like `always` blocks) might offer better performance in synthesis.

**5. Important Points to Remember**

*   Continuous assignments model *wires*, not registers or memory elements.
*   The `assign` statement is declarative; it describes *what* the output should be, not *how* to compute it.
*   Changes in inputs immediately propagate to the output.
*   For complex designs, consider using `always` blocks with sensitivity lists or other modeling techniques.

**6. Practice Questions/Exercises**

1.  **Exercise 1:**  Write Verilog code using continuous assignment and logical operators to implement a 2:1 Multiplexer. Include a truth table.

    **Truth Table:**

    | S | I0 | I1 | Y   |
    |---|----|----|-----|
    | 0 | I0 | X  | I0  |
    | 1 | X  | I1 | I1  |

    **Solution:**

    ```verilog
    module mux2_1(input I0, I1,
                  input S,
                  output Y);

      assign Y = (~S & I0) | (S & I1);

    endmodule
    ```

2.  **Exercise 2:**  Write Verilog code using continuous assignment and logical operators to implement a 3 to 8 decoder.

    **Solution:**

    ```verilog
    module decoder3_8(input A2, A1, A0,
                      output O0, O1, O2, O3, O4, O5, O6, O7);

      assign O0 = (~A2 & ~A1 & ~A0);
      assign O1 = (~A2 & ~A1 &  A0);
      assign O2 = (~A2 &  A1 & ~A0);
      assign O3 = (~A2 &  A1 &  A0);
      assign O4 = ( A2 & ~A1 & ~A0);
      assign O5 = ( A2 & ~A1 &  A0);
      assign O6 = ( A2 &  A1 & ~A0);
      assign O7 = ( A2 &  A1 &  A0);

    endmodule
    ```

3. **Exercise 3:** Model a 4 to 2 encoder with priority.  If more than one input is active, the output represents the highest priority input (I3 > I2 > I1 > I0).

   **Solution:**

    ```verilog
    module encoder4_2_priority(input I0, I1, I2, I3,
                      output Q1, Q0);

      assign Q0 = (~I3 & ~I2 & I1 & ~I0) | (~I3 & I2 & ~I1 & ~I0) |  I3 ;
      assign Q1 = (~I3 & I2 ) | I3;
    endmodule

    ```

**7. Conclusion**

This module provided an overview of using continuous assignment with logical operators to model fundamental combinational circuits.  Understanding these concepts is essential for digital design using HDLs.  While powerful for simple circuits, remember to consider the limitations and explore alternative modeling styles for more complex designs.
