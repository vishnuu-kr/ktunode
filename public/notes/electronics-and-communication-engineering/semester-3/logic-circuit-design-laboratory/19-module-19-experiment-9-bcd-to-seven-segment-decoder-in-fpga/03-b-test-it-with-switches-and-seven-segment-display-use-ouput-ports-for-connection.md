---
title: "(b) Test it with switches and seven segment display. Use ouput ports for connection to the display."
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 19: Experiment 9. BCD to Seven Segment Decoder in FPGA"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe475"
status: "completed"
scrapedAt: "2026-05-23T17:46:50.665Z"
---
# Logic Circuit Design Laboratory: Module 19 - Experiment 9: BCD to Seven Segment Decoder in FPGA

## Topic (b): Test with Switches and Seven Segment Display using Output Ports

### 1. Introduction

This experiment focuses on testing a previously designed BCD to Seven Segment Decoder circuit implemented on an FPGA. The BCD input will be provided using physical switches connected to the FPGA's input ports, and the seven-segment display output will be driven by the FPGA's output ports. This hands-on approach allows for direct verification of the decoder's functionality and demonstrates the practical application of FPGAs in interfacing with external hardware.

### 2. Learning Outcomes Covered

By the end of this experiment, you will be able to:

*   **Design and demonstrate the functioning of various combinational and sequential circuits using ICs (CO1, K3):** While this experiment primarily tests a combinational circuit (BCD to Seven Segment Decoder), the underlying principle of testing and verifying digital logic design is a core aspect of CO1.
*   **Apply an industry-compatible hardware description language to implement digital circuits (CO2, K3):** This experiment assumes a Verilog or VHDL implementation of the BCD to Seven Segment Decoder from a previous stage. The testing process reinforces the understanding of how HDL code translates to physical hardware.
*   **Implement digital circuits on FPGA boards and connect external hardware to the boards (CO3, K3):** This is the primary learning outcome addressed. You will gain practical experience in mapping HDL outputs to physical pins (output ports) on the FPGA for driving a seven-segment display and mapping physical switches (input ports) to your design's inputs.
*   **Function effectively as an individual and in a team to accomplish the given task (CO4, K2):** This experiment can be performed individually or in a team, fostering collaboration and problem-solving skills in debugging and testing.

### 3. Key Concepts and Definitions

*   **BCD (Binary Coded Decimal):** A binary encoding system where each decimal digit is represented by its 4-bit binary equivalent. For example, decimal 5 is represented as 0101 in BCD.
*   **Seven Segment Display:** A common electronic display device that can show alphanumeric characters. It consists of seven segments (labeled 'a' through 'g') arranged in a common anode or common cathode configuration. By activating specific segments, different digits and some letters can be formed.
*   **Decoder:** A combinational logic circuit that converts coded input into a coded output. In this case, it converts a 4-bit BCD input into a 7-bit output pattern to drive a seven-segment display.
*   **FPGA (Field-Programmable Gate Array):** A semiconductor device that can be reprogrammed after manufacturing. It contains configurable logic blocks and programmable interconnects that allow users to implement custom digital circuits.
*   **Input Ports:** Pins on the FPGA that receive external signals. In this experiment, these will be connected to switches to provide the BCD input.
*   **Output Ports:** Pins on the FPGA that transmit external signals. In this experiment, these will be connected to the seven-segment display driver circuitry.
*   **Switch Debouncing:** A phenomenon where mechanical switches produce multiple transitions (on/off) for a single physical press due to physical contact bouncing. This needs to be handled in hardware or software to ensure reliable input.
*   **Seven Segment Display Common Anode vs. Common Cathode:**
    *   **Common Anode:** All anode terminals of the LEDs are connected together. To turn on a segment, the corresponding cathode terminal needs to be pulled LOW (connected to ground).
    *   **Common Cathode:** All cathode terminals of the LEDs are connected together. To turn on a segment, the corresponding anode terminal needs to be pulled HIGH (connected to VCC).
    *   **Crucially, your BCD to Seven Segment Decoder's output logic must match the type of seven-segment display you are using.**

### 4. Practical Implementation Steps

**Assumptions:**

*   You have a functional Verilog or VHDL design for a BCD to Seven Segment Decoder from a previous experiment.
*   You have access to an FPGA development board with suitable input (switches) and output (provision for seven-segment display interface) capabilities.
*   You are familiar with the FPGA's development tools (e.g., Vivado, Quartus).

**Step 1: Hardware Setup and Pin Assignment**

1.  **Connect Switches to FPGA Input Ports:**
    *   Identify a set of 4 input pins on your FPGA board suitable for connecting to switches.
    *   Connect each of the 4 switches to these designated input pins. Ensure each switch is connected to a pull-up or pull-down resistor to provide a defined logic level when the switch is open. Many FPGA boards have onboard pull-up/pull-down resistors for switches.
    *   **Example:**
        *   Switch 0 -> FPGA_PIN_A (input)
        *   Switch 1 -> FPGA_PIN_B (input)
        *   Switch 2 -> FPGA_PIN_C (input)
        *   Switch 3 -> FPGA_PIN_D (input)

2.  **Connect Seven Segment Display to FPGA Output Ports:**
    *   Identify 7 output pins on your FPGA board for driving the seven segments ('a' through 'g') of the display.
    *   Identify which type of seven-segment display your board uses (common anode or common cathode). This is critical!
    *   **For Common Cathode display:** Connect the FPGA output pins directly (or through current-limiting resistors, which are often integrated into FPGA boards or seven-segment modules) to the anode terminals of the individual segments. The common cathode pin of the display will be connected to ground.
    *   **For Common Anode display:** Connect the FPGA output pins directly (or through current-limiting resistors) to the cathode terminals of the individual segments. The common anode pin of the display will be connected to VCC.
    *   **Crucially, ensure your HDL code's output logic aligns with the display type.** If the display is common anode, your decoder should output a '0' to turn on a segment (as the cathode is connected to ground). If it's common cathode, your decoder should output a '1' to turn on a segment (as the anode is connected to VCC).
    *   **Example (assuming common cathode display):**
        *   FPGA_PIN_SEG_A (output) -> SevenSegment_Segment_A
        *   FPGA_PIN_SEG_B (output) -> SevenSegment_Segment_B
        *   ...
        *   FPGA_PIN_SEG_G (output) -> SevenSegment_Segment_G
        *   (The common cathode pin of the display is connected to GND on the board.)

3.  **Create a Constraints File (XDC for Vivado, .qsf for Quartus):**
    *   This file maps your HDL's input and output port names to the physical pins of the FPGA.
    *   **Example XDC snippet (for Vivado):**
        ```xdc
        # Input switches
        set_property PACKAGE_PIN <switch_pin_number> [get_ports {bcd_in[0]}]
        set_property IOSTANDARD LVCMOS33 [get_ports {bcd_in[0]}]

        set_property PACKAGE_PIN <switch_pin_number> [get_ports {bcd_in[1]}]
        set_property IOSTANDARD LVCMOS33 [get_ports {bcd_in[1]}]

        # ... for bcd_in[2] and bcd_in[3]

        # Output segments (assuming common cathode display)
        set_property PACKAGE_PIN <seg_a_pin_number> [get_ports {seg_a}]
        set_property IOSTANDARD LVCMOS33 [get_ports {seg_a}]

        # ... for seg_b through seg_g
        ```
    *   **Replace `<switch_pin_number>` and `<seg_a_pin_number>` etc. with the actual pin numbers defined by your FPGA board.** Refer to your FPGA board's user manual.

**Step 2: Verilog/VHDL Code Modification (if necessary)**

Ensure your BCD to Seven Segment Decoder module has input ports for the 4-bit BCD and output ports for the 7 segments.

**Example Verilog Module:**

```verilog
module bcd_to_7seg_decoder (
    input [3:0] bcd_in,
    output reg [6:0] seg_out // a, b, c, d, e, f, g
);

    always @(*) begin
        case (bcd_in)
            4'b0000: seg_out = 7'b1000000; // 0 (gfedcba) -> a,b,c,d,e,f ON
            4'b0001: seg_out = 7'b1111001; // 1 -> b,c ON
            4'b0010: seg_out = 7'b0100100; // 2 -> a,b,g,e,d ON
            4'b0011: seg_out = 7'b0110000; // 3 -> a,b,g,c,d ON
            4'b0100: seg_out = 7'b0011001; // 4 -> f,g,b,c ON
            4'b0101: seg_out = 7'b0010010; // 5 -> a,f,g,c,d ON
            4'b0110: seg_out = 7'b0000010; // 6 -> a,f,g,e,c,d ON
            4'b0111: seg_out = 7'b1111000; // 7 -> a,b,c ON
            4'b1000: seg_out = 7'b0000000; // 8 -> All ON
            4'b1001: seg_out = 7'b0010000; // 9 -> a,b,c,d,f,g ON
            default: seg_out = 7'b1111111; // Blank for invalid BCD inputs (or segment off)
        endcase
    end

endmodule
```

**Important Note on Seven Segment Output Mapping:**
In the Verilog example above, `seg_out = 7'b1000000;` for digit '0' means:
*   `seg_out[6]` (segment 'g') = 1 (OFF)
*   `seg_out[5]` (segment 'f') = 0 (ON)
*   `seg_out[4]` (segment 'e') = 0 (ON)
*   `seg_out[3]` (segment 'd') = 0 (ON)
*   `seg_out[2]` (segment 'c') = 0 (ON)
*   `seg_out[1]` (segment 'b') = 0 (ON)
*   `seg_out[0]` (segment 'a') = 0 (ON)

This assumes **common cathode** display where a '0' turns ON a segment. If you have a **common anode** display, you need to invert the logic. For example, for digit '0' with common anode: `seg_out = 7'b0111111;` (a '1' turns ON a segment). **Double-check your HDL implementation against your hardware.**

**Step 3: Synthesis, Implementation, and Bitstream Generation**

1.  **Add Source Files:** Add your Verilog/VHDL decoder module and the constraints file to your FPGA project.
2.  **Synthesize:** Run the synthesis process using your FPGA tools. This translates your HDL into a netlist of logic gates.
3.  **Implement:** Run the implementation process, which includes place and route. This maps the logic gates to the physical resources on the FPGA and routes the connections.
4.  **Generate Bitstream:** Create the configuration file (bitstream) that will be loaded onto the FPGA.

**Step 4: FPGA Programming and Testing**

1.  **Program FPGA:** Connect your FPGA board to your computer and use the FPGA tools to load the generated bitstream onto the FPGA.
2.  **Test with Switches:**
    *   Set the switches to represent different BCD values (0 through 9).
    *   Observe the seven-segment display. It should correctly show the corresponding decimal digit.
    *   **Table of Expected Outputs:**
        | BCD Input (Binary) | BCD Input (Decimal) | Seven Segment Display |
        | :----------------- | :------------------ | :-------------------- |
        | 0000               | 0                   | '0'                   |
        | 0001               | 1                   | '1'                   |
        | 0010               | 2                   | '2'                   |
        | 0011               | 3                   | '3'                   |
        | 0100               | 4                   | '4'                   |
        | 0101               | 5                   | '5'                   |
        | 0110               | 6                   | '6'                   |
        | 0111               | 7                   | '7'                   |
        | 1000               | 8                   | '8'                   |
        | 1001               | 9                   | '9'                   |

**Step 5: Debugging (if necessary)**

*   **Incorrect Display:**
    *   **Pin Assignments:** Double-check your constraints file for correct pin assignments.
    *   **HDL Logic:** Verify the `case` statements or logic expressions in your HDL code are correct for each BCD input and the corresponding seven-segment patterns. Crucially, ensure the output logic matches your display type (common anode/cathode).
    *   **Wiring:** If using external displays, ensure connections are secure and correct.
    *   **Switch Wiring:** Verify that switches are providing stable HIGH/LOW signals.
*   **No Display:**
    *   **FPGA Programming:** Ensure the bitstream was successfully loaded onto the FPGA.
    *   **Power:** Check if the FPGA board and the display module are powered correctly.
    *   **Segment Enable:** Some seven-segment displays have a common enable pin. Ensure it's activated if applicable.
    *   **Output Port Drive Strength:** In rare cases, the output drive strength of the FPGA pins might be insufficient if not properly configured or if external loads are too high.

### 5. Important Points to Remember

*   **Common Anode vs. Common Cathode is CRITICAL:** Always know which type of seven-segment display you are using and adjust your decoder logic accordingly. This is a common pitfall.
*   **Pin Constraints:** The constraints file is essential for mapping your logical design to physical hardware. Errors here will lead to incorrect operation.
*   **Switch Debouncing:** For this specific experiment, if your switches are very "bouncy," you might see flickering digits or incorrect BCD values. While often handled in software for microcontrollers, in pure FPGA logic, you might need to implement a debouncing circuit if this becomes an issue. However, many FPGA boards have switches that are already debounced or sufficiently stable for basic testing.
*   **Current Limiting Resistors:** While many FPGA boards or seven-segment display modules have built-in current limiting, if you are wiring custom components, always include current-limiting resistors to protect the LEDs and the FPGA output pins. A typical value for LEDs might be 220-330 Ohms.
*   **FPGA Board Documentation:** Always refer to your specific FPGA board's user manual for pinouts, switch connections, and display interface details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 6. Textbooks and Reference Incorporation

*   **Verilog HDL Synthesis: A Practical Primer by J. Bhasker:** This book provides a strong foundation in Verilog syntax and synthesis principles, essential for writing the decoder module and understanding how it's translated into hardware. Chapter X (on combinational logic and HDL coding styles) and Chapter Y (on FPGA implementation flow) would be particularly relevant.
*   **Fundamentals of Logic Design by Roth C.H:** This book offers classic principles of digital logic design, including the design of decoders. Understanding the truth tables and Karnaugh maps for the BCD to Seven Segment decoder from this book is foundational. It also covers the basic building blocks used in the decoder.
*   **Verilog HDL: A Guide to Digital Design and Synthesis by Palnitkar S.:** This reference is excellent for more advanced Verilog constructs and practical design patterns. It would be helpful for understanding how to efficiently code the `case` statement or other logic for the decoder and for best practices in HDL design for synthesis.

### 7. Practice Questions and Exercises

**Question 1:**
A student is testing their BCD to Seven Segment Decoder on an FPGA board. They have connected 4 switches to `bcd_in[0]` through `bcd_in[3]` and 7 output pins `seg_a` through `seg_g` to a seven-segment display. The HDL code implements the standard BCD to Seven Segment logic. When they set the switches to `0101` (BCD for 5), the seven-segment display shows a pattern that looks like a 'C' (segments 'a', 'f', 'g', 'e', 'd' are lit). What is the most likely reason for this incorrect output?

**Answer 1:**
The most likely reason is that the student is using a **common anode** seven-segment display, but their Verilog/VHDL code is written for a **common cathode** display (or vice-versa). If their code outputs a logic HIGH to turn on segments 'a', 'f', 'g', 'e', 'd' for BCD '5', and they have a common anode display, these segments will indeed turn ON. The pattern 'a', 'f', 'g', 'e', 'd' lit corresponds to the digit '5' for a common cathode display, but the code might be producing an output pattern that when interpreted by the common anode display results in a 'C'-like shape. Specifically, the HDL code for '5' should be `seg_out = 7'b0110000` for common cathode (segments a,f,g,c,d on) if the example in section 4 is followed. If the display is common anode, the code should be `seg_out = 7'b1001111` (segments a,f,g,c,d on, inverted logic). The described output 'C' implies segments a,f,g,e,d are on, which is not the correct pattern for '5' in either configuration. This strongly suggests a mismatch between the expected output logic of the HDL and the actual behavior of the connected display.

**Question 2:**
You are designing a top-level module in Verilog that instantiates your `bcd_to_7seg_decoder`. You need to connect the BCD input to the FPGA's switches. Which of the following is **NOT** a critical step in ensuring the switches are correctly interpreted by the FPGA?

a) Assigning FPGA physical pins to the BCD input ports in the constraints file.
b) Ensuring the switch is connected to a valid input port on the FPGA.
c) Writing a debouncing logic in the Verilog module for the switches.
d) Verifying the logic of the BCD to Seven Segment Decoder itself.

**Answer 2:**
The correct answer is **c) Writing a debouncing logic in the Verilog module for the switches.**

*   **Explanation:**
    *   a) **Correct:** Pin assignment is crucial for connecting the switches to the physical pins.
    *   b) **Correct:** The switches must be connected to input ports that are recognized by the FPGA.
    *   d) **Correct:** The functionality of the decoder is what you are testing, so verifying its logic is essential.
    *   c) **Incorrect:** While debouncing can be important for reliable switch input, it's not always a *critical* step for basic testing on all FPGA boards. Many modern FPGA development boards have switches with built-in debouncing or are of a quality that they don't cause significant issues for simple input scenarios. If the switches are functioning reliably enough for the test, debouncing might not be immediately necessary. The primary focus for testing is getting the correct BCD to segment mapping, which depends on pin assignments and decoder logic. If switch bouncing *is* observed, *then* debouncing becomes a critical step.

**Question 3:**
Describe the process of creating a constraints file for your FPGA project and explain the importance of the `set_property PACKAGE_PIN` and `set_property IOSTANDARD` commands.

**Answer 3:**
The process of creating a constraints file (e.g., XDC for Xilinx/Vivado, .qsf for Intel/Quartus) involves:

1.  **Identifying Pin Names:** Determine the logical names of the input and output ports in your Verilog/VHDL design (e.g., `bcd_in[0]`, `seg_a`).
2.  **Consulting Board Manual:** Obtain the FPGA board's user manual or schematic to find the physical package pin numbers or ball names corresponding to the switches and the seven-segment display interface pins.
3.  **Writing the Constraints:** Create a text file with specific syntax for your FPGA toolchain.
    *   **`set_property PACKAGE_PIN <pin_name_or_number> [get_ports {<port_name>}]`**: This command maps a specific physical pin on the FPGA package (`<pin_name_or_number>`) to a logical port in your design (`<port_name>`). Without this, the FPGA tool has no idea which physical pin to use for a given input or output signal.
    *   **`set_property IOSTANDARD <standard> [get_ports {<port_name>}]`**: This command specifies the input/output electrical standard (e.g., `LVCMOS33`, `LVTTL`) for the assigned pin. This is crucial for the FPGA to correctly interpret voltage levels and drive signals, ensuring compatibility with the connected switches and display.

**Importance:** The constraints file acts as the bridge between your abstract hardware description and the physical reality of the FPGA chip and its surrounding circuitry. Incorrect or missing constraints will lead to the FPGA not being configured as intended, resulting in malfunctions or failure to program.

---