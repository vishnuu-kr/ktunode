---
title: "Boundary Scan."
subject: "EMBEDDED SYSTEMS"
module: "Module 4: Integration and Testing of Embedded Hardware and Firmware :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c261"
status: "completed"
scrapedAt: "2026-05-20T17:05:48.807Z"
---
# Embedded Systems: Module 4 - Integration and Testing of Embedded Hardware and Firmware

## Topic: Boundary Scan

---

### 1. Introduction to Boundary Scan

**Learning Outcome:** Understand the fundamental principles and purpose of boundary scan testing.

*   **What is Boundary Scan?**
    *   A standardized method for testing and debugging printed circuit boards (PCBs) and integrated circuits (ICs).
    *   It involves special circuitry embedded within the ICs that allows for internal testing of the IC itself and the connections between ICs on a PCB, without requiring physical access to the pins (like using a bed-of-nails tester).
    *   It's often referred to as **Integrated Circuit (IC) Embedded Test (ET)** or **Joint Test Action Group (JTAG)** testing, as JTAG is the most common standard governing boundary scan.

*   **Purpose of Boundary Scan:**
    *   **Interconnect Testing:** Verifies the integrity of the electrical connections between components on a PCB. This is crucial for catching manufacturing defects like shorts, opens, and misconnections.
    *   **Component Testing:** Allows for testing of the functionality of the boundary scan-capable ICs themselves.
    *   **In-System Programming (ISP):** Enables programming of on-board programmable devices (like FPGAs, CPLDs, microcontrollers) without needing special programming hardware attached to specific programming pins.
    *   **Debugging:** Facilitates hardware debugging by allowing access to internal signals and states of ICs.

*   **Why is it necessary?**
    *   **Increasing Component Density:** Modern PCBs are highly integrated, making traditional test methods (like bed-of-nails) difficult, expensive, or impossible due to limited access.
    *   **Complex Interconnections:** Fine-pitch components and dense routing create challenging scenarios for testing.
    *   **Reduced Test Access:** Components are getting smaller with fewer external pins and tighter spacing.
    *   **Improved Manufacturing Yield:** Early detection of manufacturing defects leads to higher product quality and reduced rework.

---

### 2. The JTAG (IEEE 1149.1) Standard

**Learning Outcome:** Explain the JTAG standard and its key components.

*   **JTAG (Joint Test Action Group):** The most prevalent standard for boundary scan, defined by IEEE 1149.1.
*   **Key Components of the JTAG Interface:**
    *   **Test Access Port (TAP):** A serial interface used to access the boundary scan logic.
    *   **TAP Controller:** A state machine that controls the operation of the boundary scan system based on the Test Clock (TCK) and Test Mode Select (TMS) signals.
    *   **Test Data Input (TDI):** Serial data input for shifting test instructions and data into the boundary scan chain.
    *   **Test Data Output (TDO):** Serial data output for shifting test instructions and data out of the boundary scan chain.
    *   **Test Clock (TCK):** A clock signal that synchronizes all boundary scan operations.
    *   **Test Mode Select (TMS):** A serial input signal that controls the TAP controller's state transitions.

*   **Boundary Scan Cells:**
    *   Special logic cells placed at the input/output (I/O) pins of a boundary scan-compliant IC.
    *   Each cell can:
        *   Pass normal operational data through to the IC's core logic.
        *   Capture the value of an output pin.
        *   Force a specific value onto an output pin.
        *   Be bypassed to create a shorter scan path.

*   **Scan Paths (Chains):**
    *   Boundary scan cells within an IC are connected in a serial chain.
    *   Multiple scan chains can exist within a single IC (e.g., a boundary scan chain, an instruction register chain, a data register chain).
    *   On a PCB, boundary scan-compliant ICs are connected in a serial chain via their TAP ports.

---

### 3. Boundary Scan Architecture and Operation

**Learning Outcome:** Describe the architecture of a boundary scan system and how it operates.

*   **Core Architecture:**
    *   **Boundary-Scan Register (BSR):** A shift register formed by connecting all the boundary scan cells in a serial chain. It's used to load test patterns and capture data.
    *   **Instruction Register (IR):** A register that holds instructions for the TAP controller and selects which data register to access.
    *   **Data Registers (DRs):** Various registers used for different test operations (e.g., bypass register, device identification register, user-defined data registers).

*   **TAP Controller State Machine:**
    *   A finite state machine with approximately 16 states, controlled by TMS and TCK.
    *   Key states include:
        *   **Test-Logic-Reset:** The default state, disabling boundary scan.
        *   **Run-Test/Idle:** The normal operating state, allowing normal chip function while tests can be initiated.
        *   **Select-DR-Scan:** Selects the data register to be scanned.
        *   **Capture-DR:** Captures data from the selected data register.
        *   **Shift-DR:** Shifts data in/out of the selected data register.
        *   **Exit1-DR / Exit2-DR:** Intermediate states during data shifting.
        *   **Pause-DR:** Pauses data shifting.
        *   **Select-IR-Scan:** Selects the instruction register to be scanned.
        *   **Capture-IR:** Captures data from the instruction register.
        *   **Shift-IR:** Shifts data in/out of the instruction register.
        *   **Exit1-IR / Exit2-IR:** Intermediate states during instruction shifting.
        *   **Pause-IR:** Pauses instruction shifting.

*   **Boundary Scan Operation Flow (Example: Interconnect Test):**
    1.  **Initialization:** The TAP controller is brought to the **Test-Logic-Reset** state.
    2.  **Instruction Selection:** The instruction **BYPASS** is loaded into the IR of all devices (except the first and last in the chain). For interconnect testing, a specific instruction (e.g., **EXTEST**) is loaded into the IR.
    3.  **Data Shifting (Pattern Loading):**
        *   A "1" pattern is shifted into the boundary scan chain, starting from TDI.
        *   The boundary scan cells at output pins are configured to output "1".
        *   The boundary scan cells at input pins are configured to capture the incoming data.
    4.  **Capture:** With the TAP controller in **Capture-DR**, the input pins capture the data shifted out from the previous device's output pins.
    5.  **Data Shifting (Data Readout):** The captured data is shifted out from TDO.
    6.  **Analysis:** The shifted-out data is compared against the expected pattern.
        *   If a connection is good, the output "1" from one device should be seen as "1" at the input of the next device.
        *   If there's an open, a "0" will be read.
        *   If there's a short, the read value might be unexpected (e.g., "0" if shorted to ground, or the same value if shorted to another output).
    7.  **Repeat:** The process is repeated with a "0" pattern to catch different types of faults.

---

### 4. Boundary Scan Instructions and Data Registers

**Learning Outcome:** Identify common boundary scan instructions and their associated data registers.

*   **Common Instructions (loaded into the IR):**
    *   **BYPASS:** Selects the Bypass Register, creating a short, low-impact scan path. Essential for serializing multiple devices.
    *   **EXTEST:** Enables boundary scan cells to be placed in the output or input mode, allowing for interconnect testing and external device testing.
    *   **SAMPLE/PRELOAD:** Allows capturing data from the boundary scan cells without affecting the normal operation of the IC, and preloads data for subsequent operations.
    *   **IDCODE:** Selects the Device Identification Register, which contains unique information about the IC (manufacturer, part number, version).
    *   **INTEST:** Allows testing of the IC's internal logic by disabling normal operation and controlling internal I/Os through the boundary scan cells. (Less common than EXTEST for interconnects).
    *   **USERCODE:** (Specific to some devices, e.g., Xilinx FPGAs) Selects a user-defined code register.

*   **Common Data Registers (selected by instructions):**
    *   **Bypass Register:** A 1-bit register that acts as a placeholder when a device is not being tested or is in BYPASS mode.
    *   **Instruction Register (IR):** Holds the current instruction being executed.
    *   **Device Identification Register (IDCODE):** A fixed-length register containing manufacturer ID, part number, and version information.
    *   **Boundary Scan Register (BSR):** The main register composed of boundary scan cells, used for capturing and controlling pin states. Its length varies per device.
    *   **Preload Register:** Often a copy of the BSR used for preloading data into the BSR.

---

### 5. Boundary Scan Testing Techniques

**Learning Outcome:** Discuss various boundary scan testing techniques and their applications.

*   **Interconnect Testing:**
    *   **Purpose:** Detects shorts, opens, and inversions between pins of different ICs.
    *   **Method:** Uses EXTEST instruction. Two types of patterns are typically used:
        *   **Single-Ended:** Tests individual connections.
        *   **Differential:** Tests pairs of connections (e.g., a pair of clock lines).
    *   **Example:** Driving one pin high and checking if the connected pin on another chip reads high.

*   **Cluster Testing:**
    *   **Purpose:** Tests groups of interconnected boundary scan components.
    *   **Method:** Configures boundary scan cells to drive and observe multiple nets simultaneously.

*   **In-System Programming (ISP):**
    *   **Purpose:** Programming flash memory, FPGAs, CPLDs, and microcontrollers directly on the PCB.
    *   **Method:** Uses specific instructions and data registers to load programming data serially into the target device's memory or configuration registers.
    *   **Benefits:** Eliminates the need for dedicated programming sockets or clips.

*   **Device Testing (Internal Logic):**
    *   **Purpose:** Tests the functionality of the IC itself, not just its connections.
    *   **Method:** Uses INTEST instruction to control internal signals and capture internal states. Requires the IC to have specific support for INTEST.

*   **Built-In Self-Test (BIST):**
    *   **Purpose:** ICs can contain their own BIST logic that can be activated and controlled via boundary scan.
    *   **Method:** The boundary scan interface acts as a control mechanism to start and monitor the BIST process.

---

### 6. Boundary Scan Chain Configuration and Tools

**Learning Outcome:** Understand how boundary scan chains are configured and the types of tools used for boundary scan testing.

*   **Chain Configuration:**
    *   **Serial Connection:** Boundary scan-compliant ICs are connected in series via their TAP ports (TDI, TDO, TCK, TMS).
    *   **Chain Description File:** A file (often in `.bdl` or `.scm` format) that describes the boundary scan chain:
        *   Order of devices in the chain.
        *   Length of the Instruction Register and Boundary Scan Register for each device.
        *   Device identification codes.
    *   **Back-annotation:** The process of using netlist information from CAD tools and IC-specific data (e.g., `.jed` files for CPLDs, `.bsd` files for some ICs) to build the chain description.

*   **Boundary Scan Test Tools:**
    *   **Hardware:**
        *   **JTAG Adapters/Interfacers:** Devices that connect a PC to the target system's TAP port (e.g., USB-to-JTAG adapters).
    *   **Software:**
        *   **Boundary Scan Test Software:** Applications that:
            *   Read chain description files.
            *   Generate test patterns.
            *   Execute tests on the target.
            *   Analyze test results.
            *   Facilitate in-system programming.
            *   Provide debugging interfaces.
        *   **Examples:** JTAG Technologies, XJTAG, ASSET InterTech, National Instruments.

---

### 7. Advantages and Limitations of Boundary Scan

**Learning Outcome:** Discuss the benefits and drawbacks of using boundary scan testing.

*   **Advantages:**
    *   **Improved Test Coverage:** Especially for interconnects and components with limited physical access.
    *   **Reduced Test Costs:** Eliminates the need for expensive bed-of-nails fixtures for many tests.
    *   **Faster Test Development:** Standardized nature simplifies test program creation.
    *   **In-System Programming Capability:** Streamlines manufacturing and field updates.
    *   **Enhanced Debugging Capabilities:** Provides access to internal device states.
    *   **Increased Manufacturing Yield:** Early detection of defects.

*   **Limitations:**
    *   **Requires Boundary Scan Compliant ICs:** Not all ICs support boundary scan.
    *   **Limited to Boundary Scan Infrastructure:** Cannot test logic that is not connected to boundary scan cells.
    *   **Speed Limitations:** Serial nature can be slower than parallel testing for certain operations.
    *   **Potential for Incorrect Chain Configuration:** Errors in the chain description file can lead to incorrect test results or failures to communicate.
    *   **Not a Replacement for All Tests:** Functional testing of the entire system is still often required.
    *   **Complex for Non-JTAG Devices:** Testing clusters of non-boundary scan devices connected to boundary scan devices can be challenging.

---

### 8. Practice Questions and Answers

**Question 1:** What is the primary purpose of the JTAG (IEEE 1149.1) standard in embedded systems?
    *   A) To provide a wireless communication interface.
    *   B) To enable testing and debugging of PCBs and ICs through a serial interface.
    *   C) To manage power distribution on the board.
    *   D) To control the boot process of the embedded system.

    **Answer:** B) To enable testing and debugging of PCBs and ICs through a serial interface.

**Question 2:** Which JTAG signal is used to serialize test data into and out of the boundary scan chain?
    *   A) TCK
    *   B) TMS
    *   C) TDI/TDO
    *   D) TRST (optional reset)

    **Answer:** C) TDI/TDO

**Question 3:** The EXTEST instruction is primarily used for what type of testing?
    *   A) In-system programming.
    *   B) Device identification.
    *   C) Interconnect testing and external pin access.
    *   D) Internal logic testing.

    **Answer:** C) Interconnect testing and external pin access.

**Question 4:** What is the role of the TAP Controller?
    *   A) To store device identification data.
    *   B) To control the state of boundary scan cells.
    *   C) To select which data register to access and manage the test sequence.
    *   D) To provide a bypass path for data.

    **Answer:** C) To select which data register to access and manage the test sequence.

**Question 5:** Briefly explain the concept of a "boundary scan chain" on a PCB.

    **Answer:** A boundary scan chain is a serial connection of boundary scan-capable ICs, linked by their Test Access Ports (TAPs). Data and instructions are shifted serially from the TDI of one device to the TDO of the next, forming a continuous path for testing and programming.

**Question 6:** What are two key advantages of using boundary scan testing?

    **Answer:** Two key advantages are:
    1.  **Improved test coverage:** Especially for interconnects on densely populated PCBs where traditional methods are difficult.
    2.  **Reduced test costs:** Eliminates the need for expensive physical test fixtures (like bed-of-nails testers).
    *(Other valid answers: In-system programming, faster test development, enhanced debugging).*

**Question 7:** What is the purpose of the IDCODE instruction and its associated register?

    **Answer:** The IDCODE instruction selects the Device Identification Register. This register contains information unique to each boundary scan-compliant IC, such as the manufacturer's ID, the part number, and the version. This is useful for verifying that the correct device is present on the board and in the correct position within the scan chain.

---

### 9. Important Points to Remember

*   **JTAG (IEEE 1149.1) is the standard for boundary scan.**
*   **Boundary scan is primarily for interconnect testing, in-system programming, and debugging.**
*   **The TAP Controller dictates the operation of the boundary scan system.**
*   **The TAP signals are TCK, TMS, TDI, and TDO.**
*   **Boundary scan cells are placed at the I/O pins of compliant ICs.**
*   **ICs are connected in a serial chain via their TAP ports.**
*   **The EXTEST instruction is key for interconnect testing.**
*   **Chain description files are crucial for configuring boundary scan tools.**
*   **Boundary scan complements, but doesn't entirely replace, functional testing.**
*   **Not all ICs support boundary scan.**

---
