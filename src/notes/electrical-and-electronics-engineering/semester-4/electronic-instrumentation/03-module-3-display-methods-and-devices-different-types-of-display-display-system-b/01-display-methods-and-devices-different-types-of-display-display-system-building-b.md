---
title: "Display methods and devices: Different types of display –display system building blocks."
subject: "ELECTRONIC INSTRUMENTATION"
module: "Module 3: Display methods and devices: Different types of display –display system building blocks."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e80"
status: "completed"
scrapedAt: "2026-05-23T16:16:18.298Z"
---
# Electronic Instrumentation: Module 3 - Display Methods and Devices

This module explores the various methods and devices used to display information acquired from electronic instruments. We will delve into different types of displays and understand the fundamental building blocks of a display system.

## Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   Understand the principles behind various display devices.
*   Differentiate between analog and digital display techniques.
*   Explain the operation of common display technologies like CRT, LED, LCD, and VFD.
*   Identify the key components and their functions in a display system.
*   Analyze the selection criteria for appropriate display devices based on application requirements.

## Module Objectives:

This module aims to provide a comprehensive understanding of:

*   The evolution and fundamental principles of display technologies.
*   The characteristics and applications of different display types.
*   The architecture and functional blocks of a typical display system.
*   The advantages and disadvantages of various display methods.

## 1. Introduction to Display Methods and Devices

In electronic instrumentation, the output of a measurement or control system needs to be presented to the user in a comprehensible format. Display devices serve this crucial purpose, converting electrical signals into visual information. The choice of display method depends heavily on the application, the type of data to be presented, required accuracy, environmental conditions, and cost.

**Key Concepts:**

*   **Display Device:** A transducer that converts electrical signals into a visible representation of the measured quantity.
*   **Indicator:** A device that shows the state or presence of a signal (e.g., ON/OFF, fault condition).
*   **Recorder:** A device that logs data over time, often with a visual trace.
*   **Display System:** A collection of electronic circuits and display devices that together present information to the user.

**Referenced Textbooks:**

*   *A course in Electrical and Electronic Measurements & Instrumentation* by A. K. Sawhney
*   *Electronic Instrumentation* by H. S. Kalsi

---

## 2. Different Types of Displays

Displays can be broadly categorized based on their operating principles and the format of information presented.

### 2.1. Analog Displays

Analog displays present information as a continuous, varying physical quantity, typically a deflection of a pointer on a calibrated scale.

**Characteristics:**

*   **Continuous representation:** Shows the magnitude of a quantity directly.
*   **Intuitive interpretation:** Easy to grasp trends and approximate values.
*   **Limitations:** Can be prone to parallax error, less precise for exact readings, and susceptible to mechanical wear.

**Types of Analog Displays:**

*   **Moving-Coil Galvanometer (D'Arsonval Movement):**
    *   **Principle:** Based on the magnetic force exerted on a current-carrying coil in a magnetic field. The coil deflects, moving a pointer.
    *   **Applications:** Used in analog voltmeters, ammeters, and ohmmeters.
    *   **Key Components:** Permanent magnet, pivoted coil, spring, pointer, scale.
    *   **Referenced Textbooks:** Sawhney (Chapter 4), Gupta (Chapter 3), Golding & Widdis (Chapter 5).

*   **Electrodynamometer Type Instruments:**
    *   **Principle:** Utilizes the interaction between magnetic fields produced by stationary and moving coils.
    *   **Applications:** Used for AC measurements of voltage, current, and power.
    *   **Key Features:** Can be used for both AC and DC measurements, higher accuracy than moving-coil.
    *   **Referenced Textbooks:** Sawhney (Chapter 6), Gupta (Chapter 5).

*   **Moving-Iron Instruments:**
    *   **Principle:** Based on the magnetic force exerted on a piece of ferromagnetic material (iron) placed in the magnetic field produced by a current-carrying coil. Can be attraction type or repulsion type.
    *   **Applications:** Used for AC and DC measurements of voltage and current.
    *   **Key Features:** Robust, suitable for high currents, but generally less accurate than moving-coil.
    *   **Referenced Textbooks:** Sawhney (Chapter 5), Gupta (Chapter 4).

*   **Analog Recorders:**
    *   **Strip Chart Recorders:** Pen moves across a moving paper strip to record a signal as a function of time.
    *   **Circular Chart Recorders:** Pen moves on a rotating circular chart.
    *   **Applications:** Monitoring process variables like temperature, pressure, flow over time.
    *   **Referenced Textbooks:** Kalsi (Chapter 10).

### 2.2. Digital Displays

Digital displays present information as discrete numerical values or symbols, typically using electronic components.

**Characteristics:**

*   **Direct numerical readout:** Provides precise readings, eliminating interpolation errors.
*   **Higher accuracy:** Generally more accurate than analog displays.
*   **Less susceptible to parallax:** The reading is independent of viewing angle (within limits).
*   **Integration with digital systems:** Easily interfaced with microprocessors and computers.

**Types of Digital Displays:**

*   **Seven-Segment Displays:**
    *   **Principle:** Consists of seven LEDs or LCD segments arranged in a figure-eight pattern. By illuminating specific segments, any numeral from 0 to 9 can be formed. Hexadecimal characters are also possible with additional segments.
    *   **Applications:** Common in digital voltmeters, calculators, clocks, and panel meters.
    *   **Key Components:** Light Emitting Diodes (LEDs) or Liquid Crystal Display (LCD) elements.
    *   **Referenced Textbooks:** Kalsi (Chapter 11), Sawhney (Chapter 18).

*   **Dot-Matrix Displays:**
    *   **Principle:** Composed of a matrix of dots (LEDs or other light-emitting elements). By activating specific dots, characters, symbols, and even graphics can be formed.
    *   **Types:**
        *   **LED Dot-Matrix Displays:** Individual LEDs arranged in a grid.
        *   **LCD Dot-Matrix Displays:** Similar to seven-segment LCDs but with a higher resolution grid.
    *   **Applications:** Alphanumeric displays, scrolling messages, graphical displays.
    *   **Referenced Textbooks:** Kalsi (Chapter 11).

*   **Cathode Ray Tube (CRT) Displays:**
    *   **Principle:** An electron beam is directed towards a phosphorescent screen. The intensity and position of the beam are controlled to create a visual image.
    *   **Applications:** Oscilloscopes, older computer monitors.
    *   **Key Components:** Electron gun, deflection system (electrostatic or magnetic), vacuum tube, phosphorescent screen.
    *   **Referenced Textbooks:** Sawhney (Chapter 17), Gupta (Chapter 13), Kalsi (Chapter 11).
    *   **Note:** CRT technology is largely superseded by flat-panel displays due to size, power consumption, and fragility.

*   **Light Emitting Diode (LED) Displays:**
    *   **Principle:** Semiconductor diodes that emit light when current flows through them. Can be discrete LEDs or arrays (like seven-segment or dot-matrix).
    *   **Applications:** Indicator lights, seven-segment displays, dot-matrix displays, large outdoor displays.
    *   **Advantages:** High brightness, long lifespan, low power consumption, fast response time.
    *   **Referenced Textbooks:** Kalsi (Chapter 11).

*   **Liquid Crystal Display (LCD) Displays:**
    *   **Principle:** Utilizes the light-modulating properties of liquid crystals. An electric field applied to the liquid crystal changes its orientation, affecting the passage or reflection of light.
    *   **Types:**
        *   **Passive Matrix LCDs:** Simpler, lower cost, slower response.
        *   **Active Matrix LCDs (TFT):** Use thin-film transistors (TFTs) for each pixel, offering better contrast, faster response, and higher resolution.
    *   **Applications:** Calculators, digital watches, smartphones, computer monitors, instrumentation displays.
    *   **Advantages:** Low power consumption, thin and lightweight, good contrast.
    *   **Referenced Textbooks:** Kalsi (Chapter 11).

*   **Vacuum Fluorescent Displays (VFD):**
    *   **Principle:** Similar to CRT but with a simpler structure. Electrons emitted from a filament strike fluorescent material on the anode segments, causing them to glow.
    *   **Applications:** Older VCRs, car dashboards, some industrial equipment.
    *   **Advantages:** Brightness, good contrast, wide operating temperature range.
    *   **Referenced Textbooks:** Kalsi (Chapter 11).

*   **Other Display Technologies:**
    *   **Plasma Displays:** Uses small cells containing plasma that emit light.
    *   **OLED (Organic Light Emitting Diode) Displays:** Emits light from organic compounds. Offers excellent contrast, wide viewing angles, and flexibility.
    *   **E-paper/E-ink Displays:** Mimics the appearance of ink on paper, very low power consumption for static images.

---

## 3. Display System Building Blocks

A display system is more than just the display device itself. It comprises several functional blocks that process the input signal and drive the display.

**General Block Diagram of a Digital Display System:**

```
+-----------------+     +-------------------+     +------------------+     +-------------------+     +-----------------+
| Input Signal    | --> | Signal Conditioning | --> | Data Conversion  | --> | Display Driver    | --> | Display Device  |
| (e.g., Voltage) |     | & Processing      |     | & Formatting   |     | & Control Circuit |     | (e.g., LED, LCD)|
+-----------------+     +-------------------+     +------------------+     +-------------------+     +-----------------+
```

**Key Building Blocks:**

1.  **Input Signal:** The raw electrical signal from the instrument or sensor that needs to be displayed. This could be voltage, current, frequency, etc.

2.  **Signal Conditioning & Processing:**
    *   **Purpose:** To prepare the input signal for conversion and display. This involves amplification, attenuation, filtering, integration, or other signal manipulation.
    *   **Examples:** Op-amps for amplification, voltage dividers for attenuation, active filters for noise reduction.
    *   **Referenced Textbooks:** Kalsi (Chapters 3, 4), Sawhney (Chapters 9-12).
    *   **Alignment with Course Outcomes:** CO2 (Design the signal conditioning circuits).

3.  **Data Conversion & Formatting:**
    *   **Analog-to-Digital Converter (ADC):** If the input signal is analog and the display is digital, an ADC is required to convert the analog value into a digital representation. Different types of ADCs exist (e.g., successive approximation, flash, delta-sigma).
    *   **Digital Signal Processing (DSP):** May involve calculations, scaling, linearization, or other digital operations on the converted data.
    *   **Data Formatting:** Arranging the digital data in a format suitable for the display driver (e.g., BCD code for seven-segment displays).
    *   **Referenced Textbooks:** Sawhney (Chapter 15), Gupta (Chapter 10), Kalsi (Chapter 9).
    *   **Alignment with Course Outcomes:** CO2 (Signal conditioning can include conversion), CO5 (Analysis of measurement systems can involve understanding data processing).

4.  **Display Driver & Control Circuit:**
    *   **Purpose:** To receive the processed and formatted data and control the operation of the display device. This involves decoding, multiplexing (for dot-matrix or multi-digit displays), and providing the necessary power signals.
    *   **Examples:** Decoders to convert BCD to seven-segment codes, microcontrollers to manage display sequences.
    *   **Referenced Textbooks:** Kalsi (Chapter 11), Sawhney (Chapter 18).

5.  **Display Device:**
    *   **Purpose:** The final element that converts the electrical control signals into a visible output.
    *   **Examples:** LED segments, LCD pixels, CRT electron beam.

**Example of a Digital Voltmeter (DVM) Display System:**

*   **Input Signal:** The voltage to be measured.
*   **Signal Conditioning:** Attenuation and amplification to bring the voltage within the range of the ADC.
*   **Data Conversion:** ADC converts the analog voltage to a digital code (e.g., binary or BCD).
*   **Data Formatting:** The digital code is processed and sent to a display controller.
*   **Display Driver:** The controller drives a seven-segment display driver IC.
*   **Display Device:** Seven-segment LED or LCD displays show the numerical value of the voltage.

---

## 4. Selection Criteria for Display Devices

Choosing the right display device involves considering several factors:

*   **Application:** What is being displayed? (e.g., simple status, numerical value, graphical trend).
*   **Accuracy Requirements:** How precise does the display need to be?
*   **Reading Speed and Clarity:** How quickly and easily should the user be able to read the display?
*   **Environmental Conditions:** Temperature, humidity, ambient light levels.
*   **Power Consumption:** Battery-powered devices may require low-power displays like LCDs.
*   **Cost:** Budget constraints play a significant role.
*   **Size and Form Factor:** Physical dimensions and mounting requirements.
*   **Lifespan and Reliability:** Expected operational life of the display.
*   **Interfacing Capability:** Compatibility with the rest of the instrumentation system.

**Referenced Textbooks:** Kalsi (Chapter 11), Sawhney (Chapter 17).

---

## 5. Practice Questions and Answers

**Question 1:**
Which type of analog display is generally preferred for DC measurements due to its linearity and sensitivity?
(a) Moving Iron
(b) Electrodynamometer
(c) Moving Coil
(d) Induction Type

**Answer:** (c) Moving Coil
**Explanation:** Moving coil instruments (D'Arsonval movement) are inherently linear and highly sensitive for DC measurements.

**Question 2:**
What is the primary advantage of a digital display over an analog display?
(a) Lower cost
(b) Higher accuracy and direct numerical readout
(c) Simpler circuitry
(d) Wider viewing angle

**Answer:** (b) Higher accuracy and direct numerical readout
**Explanation:** Digital displays eliminate interpolation errors and provide precise numerical values.

**Question 3:**
In a seven-segment display, how many segments are typically used to display the numeral '8'?
(a) 5
(b) 6
(c) 7
(d) 8

**Answer:** (c) 7
**Explanation:** All seven segments are illuminated to form the numeral '8'.

**Question 4:**
List the main building blocks of a typical digital display system.

**Answer:**
The main building blocks are:
1.  Input Signal
2.  Signal Conditioning & Processing
3.  Data Conversion & Formatting
4.  Display Driver & Control Circuit
5.  Display Device

**Question 5:**
What is the principle of operation of a Liquid Crystal Display (LCD)?

**Answer:**
LCDs utilize the property of liquid crystals to change their orientation when an electric field is applied. This change in orientation alters the polarization of light passing through them, controlling whether the pixel appears bright or dark.

**Question 6:**
Discuss the pros and cons of LED displays compared to LCD displays.

**Answer:**
**LED Displays:**
*   **Pros:** High brightness, excellent contrast, fast response time, long lifespan, suitable for wide temperature ranges.
*   **Cons:** Higher power consumption than LCDs, can be more expensive for large displays.

**LCD Displays:**
*   **Pros:** Very low power consumption, thin and lightweight, good for battery-powered devices, lower cost for large area displays.
*   **Cons:** Slower response time (especially older types), can have limited viewing angles, require a backlight (except reflective types).

---

## 6. Important Points to Remember

*   Analog displays provide a continuous, intuitive representation of trends, while digital displays offer precision and direct numerical values.
*   The Moving Coil movement is primarily used for DC measurements, while Moving Iron and Electrodynamometer instruments are suitable for both AC and DC (with different sensitivities).
*   Seven-segment displays are common for numerical readouts, while dot-matrix displays offer greater flexibility for alphanumeric and graphical information.
*   Each building block in a display system has a specific function, from preparing the input signal to controlling the final visual output.
*   The choice of display technology (LED, LCD, VFD, etc.) depends on a trade-off between performance, cost, power consumption, and environmental factors.
*   Understanding the underlying principles of each display type is crucial for selecting the most appropriate device for a given application.

---

## 7. Alignment with Course Outcomes

*   **CO1: Identify the sensors/transducers suitable for industrial applications.** (While not directly covered in this module, understanding display methods is the final step in presenting sensor output, making it a related concept.)
*   **CO2: Design the signal conditioning circuits for industrial instrumentation and automation.** This module heavily relies on signal conditioning and data processing as key building blocks of display systems.
*   **CO3: Understand the concepts of data transmission methods applicable to electronic instrumentation systems.** Display systems often receive data that has been transmitted from a sensor or controller.
*   **CO4: Develop the logic for the process control applications using PLC programming.** PLC outputs are frequently displayed using digital instruments with display systems.
*   **CO5: Analyze the performance of measurement systems using statistical methods.** Understanding display accuracy and error sources is part of performance analysis.
*   **CO6: Describe the fundamental concepts of DCS and SCADA systems.** These systems rely heavily on sophisticated display methods to visualize process data and control parameters.

This module provides the foundational knowledge of how information is visually communicated in electronic instrumentation, a critical aspect of any measurement or control system.
