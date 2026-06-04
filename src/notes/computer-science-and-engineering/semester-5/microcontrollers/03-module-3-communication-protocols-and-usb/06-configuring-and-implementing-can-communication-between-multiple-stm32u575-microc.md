---
title: "Configuring and Implementing CAN Communication between Multiple STM32U575 Microcontrollers"
subject: "MICROCONTROLLERS"
module: "Module 3: Communication Protocols and USB:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b62b"
status: "completed"
scrapedAt: "2026-05-20T16:48:43.379Z"
---
# MICROCONTROLLERS - Module 3: Communication Protocols and USB - CAN Communication with STM32U575

## Topic: Configuring and Implementing CAN Communication between Multiple STM32U575 Microcontrollers

### Learning Outcomes:

*   Understand the principles of CAN (Controller Area Network) communication.
*   Configure the CAN peripheral in STM32U575 microcontrollers.
*   Implement CAN communication between multiple STM32U575 devices.
*   Troubleshoot common CAN communication issues.
*   Write CAN communication code in C for STM32U575.

---

## 1. Introduction to CAN (Controller Area Network)

*   **Definition:** CAN is a robust, message-based protocol designed for in-vehicle networks and other embedded applications. It allows microcontrollers and devices to communicate with each other without a host computer.

*   **Key Characteristics:**
    *   **Multi-Master:** Any node can initiate communication.
    *   **Message-Oriented:** Data is transmitted in messages, not addressed to specific nodes.
    *   **Priority-Based Arbitration:** Message priority determines which node gains access to the bus.
    *   **Error Detection and Handling:** Built-in mechanisms for detecting and recovering from errors.
    *   **Robustness:** Designed to operate reliably in harsh environments.

*   **Applications:**
    *   Automotive (Engine control, ABS, Body electronics)
    *   Industrial Automation (Robotics, PLCs)
    *   Medical Equipment
    *   Aerospace

*   **CAN Bus Physical Layer:**
    *   Differential signaling (CAN High and CAN Low lines) for noise immunity.
    *   Termination resistors (typically 120 ohms) at each end of the bus to minimize signal reflections.

*   **CAN Standards:**
    *   CAN 2.0A (Standard CAN): 11-bit identifier
    *   CAN 2.0B (Extended CAN): 29-bit identifier
    *   CAN FD (Flexible Data-Rate):  Allows higher data rates

## 2. CAN Protocol Overview

*   **Message Structure:** CAN messages consist of several fields:
    *   **Identifier:** Specifies the priority of the message. Lower identifier values indicate higher priority.
    *   **Data Length Code (DLC):** Indicates the number of data bytes in the message.
    *   **Data Field:** Contains the actual data being transmitted (up to 8 bytes in CAN 2.0, up to 64 bytes in CAN FD).
    *   **CRC Field:** Used for error detection.
    *   **ACK Field:** Used for acknowledging successful message reception.

*   **Bit Timing:** CAN communication relies on precise timing.
    *   **Bit Rate:** The speed at which bits are transmitted on the bus.
    *   **Time Quanta:**  The smallest unit of time in a CAN bit.
    *   **Synchronization:** Nodes synchronize with each other using the start bit of each message.
    *   **Sampling Point:**  The point within the bit time where the bus level is sampled.

*   **Arbitration:**  When multiple nodes attempt to transmit simultaneously, the node with the highest priority (lowest identifier value) wins arbitration.
    *   **Bitwise Arbitration:** Each node monitors the bus while transmitting. If a node transmits a '1' and detects a '0', it loses arbitration and stops transmitting.

*   **Error Handling:** CAN provides robust error detection and handling mechanisms:
    *   **CRC Errors:** Detected by recalculating the CRC and comparing it with the received CRC.
    *   **Bit Errors:**  Detected when a node transmits a bit and detects a different bit level on the bus.
    *   **Stuff Errors:** Occur when too many consecutive bits of the same polarity are transmitted.
    *   **Form Errors:**  Violation of CAN protocol format rules.
    *   **Acknowledgment Errors:**  Occur when a node does not receive an acknowledgment for its transmitted message.

## 3. CAN Peripheral Configuration in STM32U575

*   **Hardware Overview:** The STM32U575 microcontroller integrates one or more CAN controllers.  Refer to the STM32U575 reference manual for specific details on the CAN peripherals available.

*   **Initialization Steps:**
    1.  **Enable CAN Clock:** Enable the clock for the CAN peripheral and the associated GPIO pins.
    2.  **Configure GPIO Pins:** Configure the GPIO pins used for CAN TX and CAN RX as alternate function pins.  Consult the STM32U575 datasheet for the correct alternate function mapping.
    3.  **Configure CAN Bit Timing:** Set the bit rate, prescaler, and time segment values (TSEG1, TSEG2, SJW) to achieve the desired bit timing.  Use a CAN bit timing calculator to assist with these calculations (search online for "CAN bit timing calculator").
    4.  **Set Operating Mode:** Configure the CAN controller in normal mode, loopback mode (for testing), or silent mode.
    5.  **Configure Filters:**  Set up CAN filters to accept only specific messages based on their identifier. This reduces the processing load on the microcontroller.
    6.  **Enable Interrupts:** Enable interrupts for specific CAN events, such as message reception, transmit completion, or error occurrence.
    7.  **Enable CAN Peripheral:** Enable the CAN peripheral to start communication.

*   **Registers to Configure (Illustrative - Refer to STM32U575 Reference Manual):**
    *   **CANx_MCR (Master Control Register):**  Used to configure the operating mode, sleep mode, and other global settings.
    *   **CANx_BTR (Bit Timing Register):** Used to configure the bit timing parameters (BRP, TS1, TS2, SJW).
    *   **CANx_FMR (Filter Master Register):** Used to initialize the filter bank settings.
    *   **CANx_FM1R (Filter Mode Register):** Used to select the filter mode (identifier list or mask mode).
    *   **CANx_FS1R (Filter Scale Register):** Used to select the filter scale (16-bit or 32-bit).
    *   **CANx_FFA1R (Filter FIFO Assignment Register):** Assigns the filter bank to a specific FIFO (FIFO0 or FIFO1).
    *   **CANx_FxR1/CANx_FxR2 (Filter Register 1/2):** Used to define the filter identifier and mask values.
    *   **CANx_IER (Interrupt Enable Register):** Used to enable specific CAN interrupts.

*   **Example: Setting the Bit Rate to 125kbps (Illustrative - Bit timing values may vary):**

    ```c
    // Assumes system clock is 80MHz
    // Prescaler (BRP) = 8
    // Time Segment 1 (TS1) = 12 Tq
    // Time Segment 2 (TS2) = 3 Tq
    // Synchronization Jump Width (SJW) = 1 Tq

    // Bit Rate = System Clock / ((BRP + 1) * (TS1 + TS2 + 1))
    // 125000 = 80000000 / ((8 + 1) * (12 + 3 + 1))

    CAN1->BTR |= (7 << 0);      // BRP = 7 (Prescaler = 8)
    CAN1->BTR |= (11 << 16);    // TS1 = 11
    CAN1->BTR |= (2 << 20);     // TS2 = 2
    CAN1->BTR |= (0 << 22);     // SJW = 0 (SJW + 1 = 1)
    ```

## 4. Implementing CAN Communication

*   **Transmitting a Message:**
    1.  **Select a Transmit Mailbox:** Choose an empty transmit mailbox. The STM32U575 typically has multiple transmit mailboxes.
    2.  **Set Identifier:** Load the message identifier (ID) into the mailbox.
    3.  **Set DLC:** Set the Data Length Code (DLC) to indicate the number of data bytes.
    4.  **Load Data:** Load the data bytes into the mailbox's data field.
    5.  **Request Transmission:** Set the transmit request bit for the selected mailbox. The CAN controller will then attempt to transmit the message on the bus.
    6.  **Check Transmission Status:** Monitor the transmit status to ensure the message was successfully transmitted.

*   **Receiving a Message:**
    1.  **Enable Reception Interrupt:** Enable the interrupt for message reception.
    2.  **Handle Interrupt:** In the interrupt handler, check which FIFO (FIFO0 or FIFO1) contains the received message.
    3.  **Read Identifier:** Read the message identifier from the FIFO.
    4.  **Read DLC:** Read the Data Length Code (DLC) from the FIFO.
    5.  **Read Data:** Read the data bytes from the FIFO's data field.
    6.  **Release FIFO:** Release the FIFO to indicate that the message has been processed.

*   **Code Example (Illustrative - Requires STM32 HAL library and assumes CAN1 is initialized):**

    ```c
    // Transmit a CAN message
    void CAN_Transmit(uint32_t id, uint8_t data[], uint8_t len) {
        CAN_TxHeaderTypeDef TxHeader;
        uint32_t TxMailbox;

        TxHeader.StdId = id;             // Standard Identifier
        TxHeader.ExtId = 0;            // Extended Identifier (Not Used)
        TxHeader.IDE = CAN_ID_STD;        // Standard ID
        TxHeader.RTR = CAN_RTR_DATA;       // Data Frame
        TxHeader.DLC = len;              // Data Length Code
        TxHeader.TransmitGlobalTime = DISABLE;

        HAL_CAN_AddTxMessage(&hcan1, &TxHeader, data, &TxMailbox);

        // Optionally wait for transmission to complete (with timeout)
        // HAL_CAN_GetTxMailboxesFreeLevel(&hcan1); //Check Mailboxes Free
        // HAL_CAN_IsTxMessagePending(&hcan1, TxMailbox);
    }

    // Receive a CAN message (in the interrupt handler)
    void HAL_CAN_RxFifo0MsgPendingCallback(CAN_HandleTypeDef *hcan) {
        CAN_RxHeaderTypeDef RxHeader;
        uint8_t RxData[8];

        if (HAL_CAN_GetRxMessage(hcan, CAN_RX_FIFO0, &RxHeader, RxData) == HAL_OK) {
            // Process the received message
            uint32_t id = RxHeader.StdId;
            uint8_t len = RxHeader.DLC;

            // Do something with the ID and data
            // Example: Print the ID and data to UART
            printf("Received CAN message: ID = 0x%lX, Data = ", id);
            for (int i = 0; i < len; i++) {
                printf("0x%02X ", RxData[i]);
            }
            printf("\n");
        }
    }

    // Inside main(), enable CAN interrupt:
    HAL_CAN_Start(&hcan1);  // Start CAN peripheral
    HAL_CAN_ActivateNotification(&hcan1, CAN_IT_RX_FIFO0_MSG_PENDING);
    ```

*   **Filtering:** CAN filtering is crucial for managing bus traffic.  The STM32U575 provides flexible filtering options.
    *   **Identifier List Mode:**  Accepts only messages with specific identifiers.
    *   **Mask Mode:**  Accepts messages whose identifier matches a specific pattern (the "mask" allows don't care bits).
    *   **FIFO Assignment:** Filters can be assigned to either FIFO0 or FIFO1.

## 5. Troubleshooting CAN Communication Issues

*   **Common Problems:**
    *   **No Communication:** Check power supply, ground connections, and termination resistors.  Verify CAN clock is enabled and GPIO pins are correctly configured.
    *   **Incorrect Bit Timing:**  Use a CAN bit timing calculator and verify the calculated values against the actual values programmed into the CAN_BTR register.  Use an oscilloscope to check the CAN bus signals.
    *   **Message Collisions:**  Ensure identifiers are unique and properly prioritized.
    *   **Error Frames:** Indicate problems with the bus, such as noise, incorrect bit timing, or faulty nodes.  Use a CAN analyzer to diagnose the error source.
    *   **Missing Acknowledgments:**  Indicates that a message was not received correctly. Check wiring, termination resistors, and node configuration.
    *   **Filtering Issues:** Verify filter configuration to ensure desired messages are being received.

*   **Debugging Tools:**
    *   **Oscilloscope:** To view CAN bus signals and verify signal integrity.
    *   **CAN Analyzer:** A dedicated tool for capturing, analyzing, and simulating CAN traffic.  These tools can display message IDs, data, errors, and timing information.
    *   **Logic Analyzer:**  Useful for debugging digital signals, including CAN.
    *   **Debugging IDE (e.g., STM32CubeIDE):**  Use the debugger to step through the code, inspect registers, and monitor CAN variables.

*   **Error Handling in Code:** Implement error handling routines to detect and respond to CAN errors.  The `HAL_CAN_GetError()` function can be used to retrieve the CAN error code.

    ```c
    // Example of checking for CAN errors
    HAL_StatusTypeDef status = HAL_CAN_AddTxMessage(&hcan1, &TxHeader, data, &TxMailbox);

    if (status != HAL_OK) {
        uint32_t error = HAL_CAN_GetError(&hcan1);
        printf("CAN Error: 0x%lX\n", error);
        // Implement error recovery logic here (e.g., retry transmission, reset CAN controller)
    }
    ```

## 6. Connecting Multiple STM32U575 Devices

*   **Hardware Setup:**
    *   Connect the CAN High and CAN Low pins of all STM32U575 devices together to form the CAN bus.
    *   Place a 120-ohm termination resistor at each end of the CAN bus.
    *   Ensure that all devices share a common ground.

*   **Software Configuration:**
    *   Assign unique CAN identifiers to each device.
    *   Configure the CAN filters in each device to accept messages from other devices.
    *   Implement a communication protocol to manage data exchange between the devices.  This could involve sending periodic status updates or responding to specific requests.

*   **Communication Strategy:**
    *   **Master-Slave:** One device acts as the master and controls the communication. The other devices act as slaves and respond to requests from the master.
    *   **Peer-to-Peer:** All devices can communicate directly with each other. This requires a more complex communication protocol to avoid message collisions.
    *   **Event-Driven:** Devices transmit messages only when specific events occur.

## 7. Important Points to Remember

*   **Understand CAN Bit Timing:**  Accurate bit timing is crucial for reliable CAN communication.
*   **Choose Unique Identifiers:**  Avoid identifier conflicts to prevent message collisions.
*   **Implement Error Handling:**  Robust error handling is essential for ensuring reliable operation in harsh environments.
*   **Use CAN Filters:**  Use CAN filters to reduce the processing load on the microcontroller.
*   **Refer to the STM32U575 Reference Manual:**  The reference manual provides detailed information about the CAN peripheral and its registers.
*   **Test Thoroughly:**  Thoroughly test the CAN communication system to ensure it meets the requirements of the application.
*   **Termination Resistors are Essential:** Missing termination resistors will cause signal reflections and unreliable communication.
*   **Grounding is Critical:** Ensure a solid and consistent ground plane for all devices on the CAN bus to avoid ground loops.

## 8. Practice Questions and Exercises

**Q1:** What is the purpose of the CAN identifier?
**A1:** The CAN identifier determines the priority of the message. Lower identifier values indicate higher priority. It is also used to filter and identify message content.

**Q2:** What are the two physical wires used in CAN communication called?
**A2:** CAN High (CAN_H) and CAN Low (CAN_L).

**Q3:** What is the typical value of the termination resistors used in CAN communication?
**A3:** 120 ohms.

**Q4:** What are the key differences between CAN 2.0A and CAN 2.0B?
**A4:** CAN 2.0A uses an 11-bit identifier, while CAN 2.0B uses a 29-bit identifier.

**Q5:**  Explain the purpose of CAN filtering.
**A5:** CAN filtering allows a node to accept only messages with specific identifiers, reducing the processing load and improving efficiency.

**Q6:** Describe the process of CAN arbitration.
**A6:** When multiple nodes attempt to transmit simultaneously, each node monitors the bus while transmitting. If a node transmits a '1' and detects a '0', it loses arbitration and stops transmitting. The node with the highest priority (lowest identifier value) wins.

**Q7:** What are the steps required to transmit a CAN message using the STM32U575?
**A7:** 1. Select a transmit mailbox. 2. Set the identifier. 3. Set the Data Length Code (DLC). 4. Load the data bytes. 5. Request transmission. 6. Check transmission status.

**Exercise 1:** Write a C function to initialize the CAN1 peripheral on an STM32U575 microcontroller to a bit rate of 500 kbps. Assume a system clock of 80MHz.  Use the STM32 HAL library.

**(Partial Solution - Bit timing calculation may vary depending on desired sampling point):**

```c
void CAN_Init(void) {
    //Assumes CAN1 clock and GPIO already configured

    hcan1.Instance = CAN1;
    hcan1.Init.Prescaler = 4;  // Adjusted to 4 from 8.
    hcan1.Init.Mode = CAN_MODE_NORMAL;
    hcan1.Init.SyncJumpWidth = CAN_SJW_1TQ;
    hcan1.Init.TimeSeg1 = CAN_BS1_12TQ; // 12
    hcan1.Init.TimeSeg2 = CAN_BS2_3TQ;  //3
    hcan1.Init.TimeTriggeredMode = DISABLE;
    hcan1.Init.AutoBusOff = DISABLE;
    hcan1.Init.AutoWakeUp = DISABLE;
    hcan1.Init.AutoRetransmission = ENABLE;
    hcan1.Init.ReceiveFifoLocked = DISABLE;
    hcan1.Init.TransmitFifoPriority = CAN_TXFP_PRIORITY;
    if (HAL_CAN_Init(&hcan1) != HAL_OK) {
       Error_Handler(); //Your Error Handler Function
    }

    //Configure Filter (Example: Accept all messages)
    CAN_FilterTypeDef sFilterConfig;
    sFilterConfig.FilterBank = 0;
    sFilterConfig.FilterMode = CAN_FILTERMODE_IDMASK;
    sFilterConfig.FilterScale = CAN_FILTERSCALE_32BIT;
    sFilterConfig.FilterIdHigh = 0x0000;
    sFilterConfig.FilterIdLow = 0x0000;
    sFilterConfig.FilterMaskIdHigh = 0x0000;
    sFilterConfig.FilterMaskIdLow = 0x0000;
    sFilterConfig.FilterFIFOAssignment = CAN_RX_FIFO0;
    sFilterConfig.FilterActivation = ENABLE;
    sFilterConfig.SlaveStartFilterBank = 14; //This value can change

    if (HAL_CAN_ConfigFilter(&hcan1, &sFilterConfig) != HAL_OK)
    {
      Error_Handler(); //Your Error Handler Function
    }

    HAL_CAN_Start(&hcan1);
    HAL_CAN_ActivateNotification(&hcan1, CAN_IT_RX_FIFO0_MSG_PENDING);
}
```

**Exercise 2:**  You have two STM32U575 devices connected via CAN. Device A needs to periodically send its sensor data (8 bytes) to Device B with identifier 0x123. Write the code for Device A to transmit this data every 100ms.

**(Partial Solution):**

```c
#include "stm32u5xx_hal.h" // Include HAL header file
#include "stdio.h"

extern CAN_HandleTypeDef hcan1;  // Assuming hcan1 is defined and initialized elsewhere

void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim){
  if(htim->Instance == TIM2){ //Check the Timer number
    uint8_t sensorData[8] = {0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08}; // Example sensor data
    CAN_Transmit(0x123, sensorData, 8);
  }
}

void CAN_Transmit(uint32_t id, uint8_t data[], uint8_t len) {
    CAN_TxHeaderTypeDef TxHeader;
    uint32_t TxMailbox;

    TxHeader.StdId = id;             // Standard Identifier
    TxHeader.ExtId = 0;            // Extended Identifier (Not Used)
    TxHeader.IDE = CAN_ID_STD;        // Standard ID
    TxHeader.RTR = CAN_RTR_DATA;       // Data Frame
    TxHeader.DLC = len;              // Data Length Code
    TxHeader.TransmitGlobalTime = DISABLE;

    HAL_CAN_AddTxMessage(&hcan1, &TxHeader, data, &TxMailbox);
    // Optionally wait for transmission to complete
}

int main(void) {
  //Initialization code (clock config, GPIO, CAN, Timer) goes here
  HAL_Init();

  // Initialize system clock
  SystemClock_Config();

  // Initialize all configured peripherals
  MX_GPIO_Init();
  MX_CAN1_Init();
  MX_TIM2_Init();

  HAL_TIM_Base_Start_IT(&htim2); //Start Timer Interrupt


  while (1) {
    // Main loop
  }
}
```

Remember to adapt the examples and bit timing calculations to your specific hardware setup and requirements. Consult the STM32U575 reference manual for complete details. Good luck!
