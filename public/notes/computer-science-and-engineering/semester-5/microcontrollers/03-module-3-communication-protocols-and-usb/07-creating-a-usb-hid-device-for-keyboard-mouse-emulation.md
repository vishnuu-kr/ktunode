---
title: "Creating a USB HID Device for Keyboard / Mouse Emulation"
subject: "MICROCONTROLLERS"
module: "Module 3: Communication Protocols and USB:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b62c"
status: "completed"
scrapedAt: "2026-05-20T16:48:44.131Z"
---
# MICROCONTROLLERS - Module 3: Communication Protocols and USB - USB HID Keyboard/Mouse Emulation

## Introduction

This module focuses on creating a USB Human Interface Device (HID) for keyboard and mouse emulation using a microcontroller. We will explore the key concepts of USB communication, HID protocol, and implementation strategies.

## Learning Outcomes

Upon completion of this module, you will be able to:

1.  Understand the USB communication architecture and HID class.
2.  Describe the HID report descriptor and its role in defining the device's functionality.
3.  Implement a microcontroller-based USB HID device that emulates keyboard input.
4.  Implement a microcontroller-based USB HID device that emulates mouse input.
5.  Debug and troubleshoot USB HID device communication issues.
6.  Customize HID reports to support advanced keyboard and mouse features.

## 1. USB Communication Architecture and HID Class

### 1.1 USB Overview

*   **What is USB?** Universal Serial Bus.  A serial communication standard for connecting peripherals to a host computer.
*   **Key features:**
    *   Hot-pluggable: Devices can be connected/disconnected without restarting the computer.
    *   High-speed data transfer (depending on the USB standard: 1.1, 2.0, 3.0, 3.1, 3.2, 4).
    *   Power supply to connected devices.
    *   Standardized connectors and protocols.
*   **USB Topology:** Hierarchical structure, consisting of a host controller, root hub, and devices connected to the host or hubs.

### 1.2 USB Components

*   **Host Controller:** Manages USB communication.  Present in the host computer (e.g., PC).
*   **USB Hub:**  Provides multiple USB ports from a single port, acting as a connection point.
*   **USB Device:**  The peripheral device being connected (e.g., keyboard, mouse, microcontroller).
*   **USB Cable:** Carries data and power.

### 1.3 USB Communication Model

*   **Endpoint:** A data source or sink within a USB device. Each endpoint has a unique address.
*   **Pipes:** Logical connection between the host and an endpoint.
*   **Transfers:** Basic unit of communication.
    *   **Control Transfers:** Used for device enumeration, configuration, and status requests (using Endpoint 0).
    *   **Interrupt Transfers:**  Low-latency, periodic transfers for time-critical data (e.g., keyboard presses, mouse movements).  Used by HID devices.
    *   **Bulk Transfers:**  Large data transfers with error checking, but lower priority (e.g., printer data).
    *   **Isochronous Transfers:** Real-time data transfer with guaranteed bandwidth, but no error correction (e.g., audio/video streaming).

### 1.4 USB Device Enumeration

*   Process by which the host identifies and configures a newly connected USB device.
*   **Steps:**
    1.  **Device Detection:**  Host detects voltage change on the USB data lines.
    2.  **Reset:** Host sends a reset signal to the device.
    3.  **Get Device Descriptor:**  Host requests the device descriptor, which contains basic device information (VID, PID, device class).
    4.  **Get Configuration Descriptor:** Host requests the configuration descriptor, which describes the device's capabilities and interface settings.
    5.  **Set Address:** Host assigns a unique address to the device.
    6.  **Get/Set Other Descriptors:**  Host may request additional descriptors such as string descriptors (manufacturer name, product name) and interface descriptors.
    7.  **Set Configuration:** Host activates a specific configuration.

### 1.5 USB HID Class

*   **HID (Human Interface Device):** A USB device class for devices that interact directly with humans, such as keyboards, mice, joysticks, and touchscreens.
*   **Key Features:**
    *   Standardized protocol for data exchange.
    *   Uses **report descriptors** to define the format of data reports.  This is critical.
    *   Uses **interrupt transfers** for timely data delivery.
    *   No custom drivers are usually required, as operating systems have built-in HID drivers.

*   **Why use HID for keyboard/mouse emulation?**  Operating systems natively support HID devices, simplifying development and eliminating the need for custom drivers.

## 2. HID Report Descriptor

### 2.1 What is a Report Descriptor?

*   A binary structure that describes the format and meaning of data sent between the HID device and the host.
*   It defines the layout of input reports (data sent from the device to the host) and output reports (data sent from the host to the device, though often not used in keyboard/mouse emulation).
*   Uses a set of standardized HID Usage Tables (defined by the USB Implementers Forum) to specify the meaning of each field in the report.  These tables cover various HID device types like keyboards, mice, and joysticks.

### 2.2 Key Elements of a Report Descriptor

*   **Usage Page:**  Specifies the category of devices (e.g., Generic Desktop, Keyboard/Keypad, Mouse).
*   **Usage:** Specifies a specific item within the usage page (e.g., Mouse, Keyboard, X, Y, Button).
*   **Collection:** Starts and ends a logical grouping of items.
    *   `Collection (Application)`: Top-level collection, describing the overall device.
    *   `Collection (Physical)`: Describes a physical part of the device (e.g., the mouse wheel).
    *   `Collection (Logical)`: Describes a logical grouping within a physical part.
*   **Input:** Defines an input item (data sent from the device to the host).
    *   `Report ID`: Identifies the report (if multiple report types exist).
    *   `Report Count`: Number of elements in the report.
    *   `Report Size`: Size (in bits) of each element.
    *   `Logical Minimum`: Minimum logical value of the item.
    *   `Logical Maximum`: Maximum logical value of the item.
    *   `Physical Minimum`: Minimum physical value of the item.
    *   `Physical Maximum`: Maximum physical value of the item.
    *   `Unit Exponent`: Scaling factor.
    *   `Unit`: Measurement unit (e.g., inches, millimeters).
    *   `Usage Minimum`: The minimum usage value for the item.  Used for arrays of bits.
    *   `Usage Maximum`: The maximum usage value for the item.  Used for arrays of bits.
    *   `Flags`: Properties of the item (e.g., absolute, relative, constant, variable).
*   **Output:** Defines an output item (data sent from the host to the device).  Less common in keyboard/mouse emulation.
*   **Feature:** Defines a feature item (used for configuring device settings). Less common in keyboard/mouse emulation.
*   **End Collection:** Marks the end of a collection.

### 2.3 Example: Keyboard Report Descriptor

```
0x05, 0x01,        // Usage Page (Generic Desktop)
0x09, 0x06,        // Usage (Keyboard)
0xA1, 0x01,        // Collection (Application)
0x05, 0x07,        //   Usage Page (Keyboard/Keypad)
0x19, 0xE0,        //   Usage Minimum (Left Control)
0x29, 0xE7,        //   Usage Maximum (Right GUI)
0x15, 0x00,        //   Logical Minimum (0)
0x25, 0x01,        //   Logical Maximum (1)
0x75, 0x01,        //   Report Size (1)
0x95, 0x08,        //   Report Count (8)
0x81, 0x02,        //   Input (Data,Var,Abs,No Wrap,Linear,Preferred State,No Null Position) - Modifier keys
0x95, 0x01,        //   Report Count (1)
0x75, 0x08,        //   Report Size (8)
0x81, 0x03,        //   Input (Const,Var,Abs,No Wrap,Linear,Preferred State,No Null Position) - Reserved byte
0x95, 0x06,        //   Report Count (6)
0x75, 0x08,        //   Report Size (8)
0x05, 0x07,        //   Usage Page (Keyboard/Keypad)
0x19, 0x00,        //   Usage Minimum (Reserved (no event indicated))
0x29, 0xFF,        //   Usage Maximum (Keypad Numeric 9)
0x81, 0x00,        //   Input (Data,Ary,Abs,No Wrap,Linear,Preferred State,No Null Position) - Keycodes
0xC0              // End Collection
```

*   **Explanation:**
    *   The descriptor defines a keyboard device.
    *   It includes 8 modifier keys (Ctrl, Shift, Alt, Win) represented by individual bits.
    *   A reserved byte (unused).
    *   An array of 6 bytes to represent keycodes.  Up to 6 keys can be pressed simultaneously.
    *   Each keycode byte represents a specific key on the keyboard. A value of 0x00 means no key is pressed in that position.

### 2.4 Example: Mouse Report Descriptor

```
0x05, 0x01,        // Usage Page (Generic Desktop)
0x09, 0x02,        // Usage (Mouse)
0xA1, 0x01,        // Collection (Application)
0x09, 0x01,        //   Usage (Pointer)
0xA1, 0x00,        //   Collection (Physical)
0x05, 0x09,        //     Usage Page (Buttons)
0x19, 0x01,        //     Usage Minimum (Button 1)
0x29, 0x03,        //     Usage Maximum (Button 3)
0x15, 0x00,        //     Logical Minimum (0)
0x25, 0x01,        //     Logical Maximum (1)
0x95, 0x03,        //     Report Count (3)
0x75, 0x01,        //     Report Size (1)
0x81, 0x02,        //     Input (Data,Var,Abs,No Wrap,Linear,Preferred State,No Null Position) - Mouse Buttons
0x95, 0x01,        //     Report Count (1)
0x75, 0x05,        //     Report Size (5)
0x81, 0x03,        //     Input (Const,Var,Abs,No Wrap,Linear,Preferred State,No Null Position) - Padding
0x05, 0x01,        //     Usage Page (Generic Desktop)
0x09, 0x30,        //     Usage (X)
0x09, 0x31,        //     Usage (Y)
0x15, 0x81,        //     Logical Minimum (-127)
0x25, 0x7F,        //     Logical Maximum (127)
0x75, 0x08,        //     Report Size (8)
0x95, 0x02,        //     Report Count (2)
0x81, 0x06,        //     Input (Data,Var,Rel,No Wrap,Linear,Preferred State,No Null Position) - X and Y movement
0xC0,              //   End Collection
0xC0              // End Collection
```

*   **Explanation:**
    *   The descriptor defines a mouse device.
    *   It includes 3 mouse buttons, each represented by a single bit.
    *   Padding bits.
    *   X and Y coordinates, each represented by a signed 8-bit value, indicating relative movement.

### 2.5 Important Points about Report Descriptors

*   The report descriptor must be correctly formatted and conform to the HID specification.
*   Incorrect report descriptors can lead to device enumeration failures or incorrect data interpretation.
*   Use online tools or HID descriptor generators to assist in creating report descriptors.
*   Test the device thoroughly on different operating systems.

## 3. Implementing a Keyboard HID Device

### 3.1 Hardware Requirements

*   Microcontroller with USB support (e.g., STM32, Arduino Leonardo/Micro, ESP32 with USB-OTG).
*   USB connector and associated circuitry.

### 3.2 Software Implementation

*   **USB Stack:** A library or framework that handles the low-level USB communication protocol. Examples include:
    *   **Arduino:** Uses the `Keyboard` library (for boards with native USB support).
    *   **STM32:** Utilizes the STM32 HAL library and a USB middleware stack (e.g., ST's USB Device Library, TinyUSB).
    *   **ESP32:** Emulates USB HID using TinyUSB.
*   **Report Descriptor Definition:** Define the report descriptor in your code as a `const` array.
*   **Endpoint Configuration:** Configure the interrupt endpoint for sending keyboard reports.
*   **Data Packaging:** Prepare the keyboard report data based on the report descriptor format.
    *   Modifier keys (Ctrl, Shift, Alt, Win).
    *   Keycodes (representing the pressed keys).
*   **Sending the Report:** Send the keyboard report data to the host using the USB interrupt endpoint.

### 3.3 Example: Arduino Keyboard Emulation (Snippet)

```cpp
#include <Keyboard.h>

void setup() {
  Keyboard.begin();
}

void loop() {
  Keyboard.press('a'); // Press the 'a' key
  delay(100);
  Keyboard.release('a'); // Release the 'a' key
  delay(1000);

  Keyboard.print("Hello"); // Type "Hello"
  delay(2000);
}
```

### 3.4 Detailed Keyboard Report Structure (Example)

Assuming a common keyboard report descriptor, the data sent to the host might look like this (8 bytes):

*   **Byte 0:** Modifier keys (Ctrl, Shift, Alt, GUI) – each bit represents a modifier key state (0=released, 1=pressed).
*   **Byte 1:** Reserved (always 0x00).
*   **Byte 2-7:**  Keycodes (up to 6 keys simultaneously pressed).  0x00 indicates no key is pressed. Keycodes are defined in the HID Usage Tables.

**Example: Pressing "Shift" and "A"**

*   Byte 0: `0x02` (Shift pressed)
*   Byte 1: `0x00`
*   Byte 2: `0x04` (A keycode)
*   Byte 3-7: `0x00`

### 3.5 Important Considerations for Keyboard Emulation

*   **Debouncing:** Handle mechanical switch bounce for physical key presses.  (Less relevant if you're emulating keystrokes purely in software).
*   **Keycodes:** Use the correct HID keycodes for the desired characters. Refer to the HID Usage Tables.
*   **Report Rate:** Determine an appropriate report rate (frequency of sending reports) to balance responsiveness and CPU usage.  Too fast can overwhelm the host; too slow makes the keyboard feel sluggish.
*   **Simultaneous Key Presses:**  Handle multiple key presses correctly based on the report descriptor design.

## 4. Implementing a Mouse HID Device

### 4.1 Hardware Requirements

*   Same as the keyboard HID device.

### 4.2 Software Implementation

*   **USB Stack:** Same as the keyboard HID device.
*   **Report Descriptor Definition:** Define the report descriptor for the mouse device.
*   **Endpoint Configuration:** Configure the interrupt endpoint.
*   **Data Packaging:** Prepare the mouse report data.
    *   Buttons: Represented by individual bits.
    *   X and Y Movement: Represented by signed values (usually 8-bit) indicating relative movement.
    *   Wheel Movement:  (If supported) Represented by a signed value indicating scroll direction and amount.
*   **Sending the Report:** Send the mouse report data to the host.

### 4.3 Example: Arduino Mouse Emulation (Snippet)

```cpp
#include <Mouse.h>

void setup() {
  Mouse.begin();
}

void loop() {
  Mouse.move(10, 0, 0); // Move mouse 10 pixels to the right
  delay(50);
  Mouse.move(-10, 0, 0); // Move mouse 10 pixels to the left
  delay(50);

  Mouse.click(MOUSE_LEFT); // Left mouse click
  delay(1000);
}
```

### 4.4 Detailed Mouse Report Structure (Example)

Assuming a common mouse report descriptor, the data sent to the host might look like this (3 bytes):

*   **Byte 0:** Buttons (Left, Right, Middle) - each bit represents a button state (0=released, 1=pressed).
*   **Byte 1:** X movement (signed 8-bit value).
*   **Byte 2:** Y movement (signed 8-bit value).

**Example: Moving Mouse 5 pixels right and performing a left click:**

*   Byte 0: `0x01` (Left button pressed)
*   Byte 1: `0x05`
*   Byte 2: `0x00`

### 4.5 Important Considerations for Mouse Emulation

*   **Relative vs. Absolute Movement:** Mice typically use relative movement (change in position). Implement absolute movement if required (e.g., for touchscreens).
*   **Scaling:** Scale the X and Y movement values appropriately to achieve the desired mouse cursor speed.
*   **Polling Rate:** Determine an appropriate polling rate for mouse movement data.
*   **Wheel Support:** If supporting a mouse wheel, ensure correct implementation of the wheel movement data.

## 5. Debugging and Troubleshooting

### 5.1 Common Issues

*   **Device not Enumerating:**
    *   Incorrect USB connections (check wiring).
    *   Incorrect power supply to the device.
    *   Faulty USB stack implementation.
    *   Incorrect report descriptor format.
    *   Missing or incorrect USB descriptors.
*   **Device Enumerates but Doesn't Function:**
    *   Incorrect report descriptor (double-check the layout and usages).
    *   Incorrect data packaging (sending the wrong data format).
    *   Incorrect endpoint configuration.
    *   Report rate too high or too low.
*   **Erratic Behavior:**
    *   Debouncing issues (for physical key presses).
    *   Scaling issues for mouse movement.
    *   Interrupt conflicts.

### 5.2 Debugging Techniques

*   **USB Analyzers:** Use a USB analyzer to monitor USB traffic and identify errors in the communication protocol.  This is the *most* effective method for advanced debugging. Examples include:
    *   Total Phase Beagle USB Analyzers
    *   Saleae Logic Analyzers (with USB decoding capabilities)
*   **Debugging LEDs:** Use LEDs to indicate device status and data transmission.
*   **Serial Communication:** Use serial communication to print debugging information from the microcontroller.
*   **HID Descriptor Validators:** Use online tools or software to validate the report descriptor.
*   **Operating System Debugging Tools:** Windows has tools like Device Manager, and Linux can use `lsusb` and `usbmon`.

## 6. Customizing HID Reports

### 6.1 Advanced Keyboard Features

*   **Multimedia Keys:** Implement support for multimedia keys (volume control, play/pause, etc.) by adding the appropriate usages to the keyboard report descriptor.
*   **Consumer Control Page:**  Use the Consumer Control Usage Page for multimedia keys.
*   **Special Keys:** Support special keys like power, sleep, and wake-up.

### 6.2 Advanced Mouse Features

*   **Additional Buttons:** Support more than 3 buttons.
*   **Horizontal Scrolling:** Implement horizontal scrolling using a dedicated usage.
*   **High-Resolution Scrolling:** Implement finer-grained scroll wheel control using higher resolution values.
*   **Absolute Positioning:** Implement absolute mouse coordinates, suitable for touchscreens and graphics tablets.

### 6.3 Considerations for Customization

*   **Compatibility:** Ensure that the customized HID device is compatible with different operating systems and applications.
*   **Complexity:**  Adding more features increases the complexity of the report descriptor and data packaging.
*   **Performance:**  Optimize the code to maintain good performance, especially for real-time applications.

## Practice Questions/Exercises

1.  **Question:** What is the purpose of the HID report descriptor?
    **Answer:** It describes the format and meaning of the data exchanged between the HID device and the host, allowing the OS to properly interpret the data.

2.  **Question:** Explain the difference between an interrupt transfer and a bulk transfer in USB communication.
    **Answer:** Interrupt transfers are low-latency, periodic transfers used for time-critical data (e.g., keyboard presses, mouse movements). Bulk transfers are used for large data transfers with error checking but lower priority (e.g., printer data).

3.  **Exercise:** Create a simplified keyboard report descriptor that only supports modifier keys (Ctrl, Shift, Alt) and one keycode.
    **Answer:** (Example - could vary slightly)
    ```
    0x05, 0x01,        // Usage Page (Generic Desktop)
    0x09, 0x06,        // Usage (Keyboard)
    0xA1, 0x01,        // Collection (Application)
    0x05, 0x07,        //   Usage Page (Keyboard/Keypad)
    0x19, 0xE0,        //   Usage Minimum (Left Control)
    0x29, 0xE2,        //   Usage Maximum (Left Alt)   (Modified to only include three modifier keys)
    0x15, 0x00,        //   Logical Minimum (0)
    0x25, 0x01,        //   Logical Maximum (1)
    0x75, 0x01,        //   Report Size (1)
    0x95, 0x03,        //   Report Count (3) (Modified to only include three modifier keys)
    0x81, 0x02,        //   Input (Data,Var,Abs,No Wrap,Linear,Preferred State,No Null Position) - Modifier keys
    0x95, 0x05,        //   Report Count (5)  (Padding)
    0x75, 0x01,        //   Report Size (1)  (Padding)
    0x81, 0x03,        //   Input (Const,Var,Abs,No Wrap,Linear,Preferred State,No Null Position) - Padding
    0x95, 0x01,        //   Report Count (1)
    0x75, 0x08,        //   Report Size (8)
    0x05, 0x07,        //   Usage Page (Keyboard/Keypad)
    0x19, 0x00,        //   Usage Minimum (Reserved (no event indicated))
    0x29, 0xFF,        //   Usage Maximum (Keypad Numeric 9)
    0x81, 0x00,        //   Input (Data,Ary,Abs,No Wrap,Linear,Preferred State,No Null Position) - Keycodes
    0xC0              // End Collection
    ```

4.  **Exercise:**  Write the code (in pseudocode or a specific language) to send a mouse report indicating a left button click and movement of 20 pixels to the right.  Assume the standard 3-byte mouse report described earlier.
    **Answer (Pseudocode):**
    ```
    // Assume 'report' is an array of 3 bytes

    report[0] = 0x01;  // Left button pressed
    report[1] = 20;    // X movement = 20
    report[2] = 0;     // Y movement = 0

    send_usb_report(report, 3); // Function to send the report
    ```

5. **Question:** What is the purpose of the `Usage Page` and `Usage` fields in a HID Report Descriptor?
    **Answer:** The `Usage Page` specifies the category of HID device or control (e.g., Generic Desktop, Keyboard/Keypad, Mouse, Consumer Control), while the `Usage` specifies a specific item within that category (e.g., Mouse, Keyboard, X, Y, Button 1, Volume Up).  Together, they define the semantic meaning of a particular data field.

## Important Points to Remember

*   The HID report descriptor is the **critical** element for defining the device's functionality.
*   USB analyzers are invaluable tools for debugging USB communication issues.
*   Refer to the official USB HID specifications and HID Usage Tables for detailed information on the HID protocol and available usages.
*   Thoroughly test your HID device on different operating systems and applications to ensure compatibility.
*   Pay attention to the report rate and data scaling to achieve the desired performance and responsiveness.
