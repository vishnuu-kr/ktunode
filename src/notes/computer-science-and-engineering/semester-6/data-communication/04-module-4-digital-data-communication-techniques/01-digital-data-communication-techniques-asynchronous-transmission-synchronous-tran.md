---
title: "Digital data communication techniques - Asynchronous transmission, Synchronous transmission."
subject: "DATA COMMUNICATION"
module: "Module 4: Digital data communication techniques "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8beeb"
status: "completed"
scrapedAt: "2026-05-20T16:51:44.651Z"
---
# Data Communication: Module 4 - Digital Data Communication Techniques

This module delves into the fundamental techniques used for transmitting digital data, focusing on the differences and applications of asynchronous and synchronous transmission.

## 1. Introduction to Digital Data Transmission

Digital data, consisting of discrete binary values (0s and 1s), needs to be transmitted reliably from a sender to a receiver. The way this transmission is organized and synchronized is crucial for accurate data interpretation. This module explores two primary methods: asynchronous and synchronous transmission.

## 2. Asynchronous Transmission

Asynchronous transmission is a method of sending data one character (or a small block of data) at a time, with no strict timing relationship between the transmission of individual characters. It relies on special control bits added to each character to indicate its start and end.

### 2.1 Key Concepts and Definitions

*   **Start Bit:** A single bit (typically a '0') transmitted before each character to signal the beginning of a character to the receiver.
*   **Data Bits:** The actual bits that represent the character being transmitted (usually 5 to 8 bits).
*   **Parity Bit (Optional):** A bit used for error detection. It can be set to make the total number of '1' bits in the character even (even parity) or odd (odd parity).
*   **Stop Bit(s):** One or more bits (typically a '1') transmitted after the data bits to signal the end of the character and allow the receiver to re-synchronize for the next character.
*   **Idle State:** The line is considered idle when no data is being transmitted. In asynchronous transmission, the idle state is represented by the stop bit (usually a '1').
*   **Synchronization:** Synchronization in asynchronous transmission happens at the character level. The start bit alerts the receiver to the beginning of a new character, and it then samples the data bits at a pre-defined rate.

### 2.2 How it Works

1.  **Idle State:** The transmitter and receiver's internal clocks are not necessarily synchronized. The line is in an idle state, typically represented by a continuous stream of stop bits (logic '1').
2.  **Start Bit Transmission:** When the sender wants to transmit a character, it first sends a start bit (logic '0'). This transition from idle (1) to start (0) alerts the receiver that a character is about to arrive.
3.  **Data Bit Transmission:** Upon detecting the start bit, the receiver assumes that the next bits arriving are data bits. It samples these bits at a predetermined rate (baud rate/bit rate) to reconstruct the character. The receiver's clock is synchronized to the sender's clock for the duration of this character transmission.
4.  **Parity Bit Transmission (if used):** If parity is enabled, the parity bit is transmitted after the data bits.
5.  **Stop Bit Transmission:** After the data bits (and parity bit), one or more stop bits are transmitted. These are typically logic '1' and signal the end of the character, returning the line to the idle state. The receiver uses the stop bit to re-synchronize its timing for the next start bit.

### 2.3 Advantages of Asynchronous Transmission

*   **Simpler Implementation:** Less complex circuitry and timing mechanisms are required compared to synchronous transmission.
*   **Cost-Effective:** Generally cheaper to implement due to its simplicity.
*   **Good for Intermittent Data:** Suitable for sending data that arrives at irregular intervals, as the start bit handles the synchronization for each individual character.
*   **Error Detection (with Parity):** The parity bit provides a basic level of error detection.

### 2.4 Disadvantages of Asynchronous Transmission

*   **Lower Efficiency:** The overhead of start, stop, and parity bits adds to the transmitted data, making it less efficient for large volumes of data. For every 7 data bits, you might transmit 1 start bit, 1 stop bit, and 1 parity bit (total 10 bits for 7 data bits).
*   **Slower Speed:** The synchronization overhead and the need to resynchronize for each character can limit the overall transmission speed.
*   **Limited Error Correction:** Parity bit only detects some errors, it doesn't correct them.

### 2.5 Examples of Asynchronous Transmission

*   **Modems:** Traditional modems used for dial-up internet access often employed asynchronous transmission.
*   **Keyboards:** When you type on a keyboard, each character press is typically transmitted asynchronously.
*   **Serial Ports (RS-232):** Commonly used for connecting peripherals like mice, printers, and industrial equipment.

## 3. Synchronous Transmission

Synchronous transmission is a method of sending data in a continuous stream of bits. It requires precise timing synchronization between the sender and receiver, allowing data to be transmitted in larger blocks without individual start and stop bits for each character.

### 3.1 Key Concepts and Definitions

*   **Synchronization:** Maintaining a precise timing relationship between the sender and receiver clocks is paramount. This is achieved through various synchronization methods.
*   **Frames/Blocks:** Data is transmitted in organized blocks called frames. Each frame contains a preamble, data, and a postamble.
*   **Preamble (SYN characters):** A sequence of synchronization characters (SYN) sent at the beginning of a frame to establish timing and alert the receiver.
*   **Data Field:** The actual payload of data being transmitted within the frame.
*   **Postamble (Check Sequence/CRC):** A sequence of bits at the end of the frame used for error detection and correction (e.g., Cyclic Redundancy Check - CRC).
*   **Bit-Oriented vs. Byte-Oriented:** Synchronous transmission can be either bit-oriented (e.g., SDLC, HDLC) where data is treated as a continuous stream of bits, or byte-oriented (e.g., BISYNC) where data is organized into bytes with special control characters.

### 3.2 How it Works

1.  **Establish Synchronization:** The sender and receiver establish synchronization. This often involves sending a series of SYN characters. The receiver looks for this specific pattern to lock onto the sender's timing.
2.  **Data Transmission:** Once synchronized, the sender transmits data in a continuous stream, organized into frames. There are no start/stop bits for individual characters.
3.  **Frame Structure:** A typical synchronous frame includes:
    *   **Flag/Start Delimiter:** A unique bit pattern (e.g., `01111110`) that marks the beginning of a frame. This is different from the SYN characters.
    *   **Address Field (optional):** Identifies the sender or receiver.
    *   **Control Field:** Contains commands and status information.
    *   **Data Field:** The actual message.
    *   **Error Detection Field:** CRC or other checksum for error checking.
    *   **Flag/End Delimiter:** The same unique bit pattern marking the end of the frame.
4.  **Bit Stuffing (for bit-oriented protocols):** To ensure that the flag sequence doesn't accidentally appear within the data, a technique called bit stuffing is used. If five consecutive '1's appear in the data, the sender inserts a '0' after them. The receiver removes this '0' upon detection.
5.  **Synchronization Maintenance:** The receiver continuously monitors the incoming bit stream. The SYN characters and the structure of the frame help maintain synchronization.

### 3.3 Advantages of Synchronous Transmission

*   **Higher Efficiency:** Minimal overhead as it doesn't require start/stop bits for every character. This leads to much higher data throughput.
*   **Faster Speeds:** The continuous stream and efficient synchronization allow for higher transmission speeds.
*   **Better Error Detection/Correction:** More sophisticated error detection mechanisms like CRC can be implemented, offering better reliability.
*   **Suitable for Large Data Volumes:** Ideal for transmitting large blocks of data, such as files or multimedia content.

### 3.4 Disadvantages of Synchronous Transmission

*   **Complex Implementation:** Requires more sophisticated hardware and software for timing and synchronization.
*   **Higher Cost:** The complexity leads to higher implementation costs.
*   **Requires Constant Data Flow:** If there are long gaps between data transmission, synchronization needs to be re-established, which can be inefficient.
*   **Less Tolerant to Timing Variations:** Any significant drift in the sender's or receiver's clocks can disrupt the synchronization.

### 3.5 Examples of Synchronous Transmission

*   **High-Speed Networks:** Ethernet, Fiber Optic networks, cellular communication (LTE, 5G).
*   **Synchronous Optical Networking (SONET) / Synchronous Digital Hierarchy (SDH):** Used in telecommunications backbone networks.
*   **IBM's BISYNC and SDLC protocols:** Older but historically significant examples.

## 4. Comparison: Asynchronous vs. Synchronous Transmission

| Feature            | Asynchronous Transmission                               | Synchronous Transmission                                 |
| :----------------- | :------------------------------------------------------ | :------------------------------------------------------- |
| **Synchronization** | Character-level (start/stop bits)                       | Bit-level (preamble, SYN characters)                     |
| **Data Unit**      | Character (or small byte)                               | Frame (block of data)                                    |
| **Overhead**       | High (start, stop, parity bits per character)           | Low (preamble, postamble per frame)                      |
| **Efficiency**     | Lower                                                   | Higher                                                   |
| **Speed**          | Slower                                                  | Faster                                                   |
| **Complexity**     | Simpler                                                 | More complex                                             |
| **Cost**           | Lower                                                   | Higher                                                   |
| **Error Detection**| Basic (parity)                                          | Advanced (CRC, checksums)                                |
| **Use Cases**      | Keyboards, mice, serial ports, intermittent data        | High-speed networks, file transfers, continuous data flow|
| **Line State**     | Idle state between characters (stop bit)                | Continuous stream of data                                |

## 5. Practice Questions and Exercises

**Question 1:**
What is the primary function of a start bit in asynchronous transmission?
a) To signal the end of a character.
b) To detect errors in the data bits.
c) To alert the receiver to the beginning of a character.
d) To indicate the idle state of the communication line.

**Question 2:**
Which type of transmission is more efficient for sending large files?
a) Asynchronous transmission
b) Synchronous transmission
c) Both are equally efficient
d) Neither is efficient

**Question 3:**
In synchronous transmission, how is synchronization typically achieved?
a) By using start and stop bits for each character.
b) By transmitting a continuous stream of idle bits.
c) By using preamble characters (SYN) and framing mechanisms.
d) By relying on the receiver's clock to guess the data timing.

**Question 4:**
List two advantages of asynchronous transmission.

**Question 5:**
Explain the concept of bit stuffing in synchronous transmission and why it's necessary.

**Question 6:**
A sender transmits data using asynchronous transmission with the following configuration: 8 data bits, 1 stop bit, and no parity bit. If the sender transmits 5 characters, how many bits are transmitted in total?

---

### Answers to Practice Questions

**Answer 1:**
c) To alert the receiver to the beginning of a character.

**Answer 2:**
b) Synchronous transmission. Synchronous transmission has much lower overhead per bit, making it significantly more efficient for large data transfers.

**Answer 3:**
c) By using preamble characters (SYN) and framing mechanisms.

**Answer 4:**
Two advantages of asynchronous transmission:
*   **Simpler Implementation:** Easier and cheaper to implement.
*   **Good for Intermittent Data:** Suitable for data that arrives at irregular intervals.

**Answer 5:**
Bit stuffing is a technique used in bit-oriented synchronous protocols (like HDLC) to ensure that the special flag sequence used to delimit frames does not accidentally appear within the actual data. If five consecutive '1's are encountered in the data stream, the sender inserts a '0' after them. The receiver, upon detecting five consecutive '1's, checks the next bit. If it's a '0', it removes it, thereby restoring the original data. This prevents the receiver from misinterpreting the data as a frame delimiter.

**Answer 6:**
Each character transmitted asynchronously consists of:
*   1 start bit
*   8 data bits
*   1 stop bit
Total bits per character = 1 (start) + 8 (data) + 1 (stop) = 10 bits.

For 5 characters, the total bits transmitted are:
Total bits = 5 characters * 10 bits/character = 50 bits.

## 6. Important Points to Remember

*   **Synchronization is key:** The fundamental difference between asynchronous and synchronous transmission lies in how synchronization is achieved.
*   **Overhead impacts efficiency:** The more overhead bits per data bit, the less efficient the transmission.
*   **Asynchronous is character-centric:** Focuses on synchronizing for each character.
*   **Synchronous is frame-centric:** Focuses on synchronizing for larger blocks of data.
*   **Choice depends on application:** The best method depends on the data rate, data volume, cost, and reliability requirements.
*   **Bit stuffing is vital for bit-oriented synchronous protocols:** Prevents misinterpretation of data as control sequences.
