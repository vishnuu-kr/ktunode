---
title: "Checksum"
subject: "COMPUTER NETWORKS"
module: "Module 2: Data Link Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c928"
status: "completed"
scrapedAt: "2026-05-20T17:02:40.039Z"
---
# Computer Networks: Module 2 - Data Link Layer - Checksum

---

## 1. Introduction to Error Detection

**Learning Outcome:** Understand the fundamental need for error detection in data transmission.

*   **The Problem:** Data transmitted over physical networks is susceptible to errors due to various factors like noise, interference, and signal degradation. These errors can alter the original data, leading to incorrect interpretation at the receiver.
*   **The Goal:** Error detection mechanisms are employed at various layers of the network model, particularly at the Data Link Layer, to identify the presence of errors in the received data.
*   **Why Data Link Layer?** The Data Link Layer is responsible for reliable data transfer between adjacent nodes on the same physical link. It's crucial to detect errors at this level before the data is passed up to higher layers.
*   **Error Detection vs. Error Correction:**
    *   **Error Detection:** Aims to identify *if* an error has occurred. If an error is detected, the common practice is to discard the corrupted data and request retransmission.
    *   **Error Correction:** Aims to identify *if* an error has occurred and *where* it occurred, allowing the receiver to correct the error without retransmission. This is more complex and computationally intensive.

---

## 2. What is a Checksum?

**Learning Outcome:** Define checksum and explain its basic principle.

*   **Definition:** A checksum is a simple form of error detection that involves generating a short, fixed-size value (the checksum) based on a block of data. This checksum is then transmitted along with the data. The receiver recalculates the checksum of the received data and compares it with the transmitted checksum.
*   **Basic Principle:**
    1.  **Sender:** Divides the data into fixed-size segments (e.g., 16-bit words).
    2.  **Sender:** Treats these segments as binary numbers.
    3.  **Sender:** Sums up all these segments.
    4.  **Sender:** If there are any carries from the addition, they are "wrapped around" and added back to the sum.
    5.  **Sender:** The one's complement of this sum is calculated. This is the checksum.
    6.  **Sender:** Appends the checksum to the data and transmits the entire block.
    7.  **Receiver:** Divides the received data into the same fixed-size segments.
    8.  **Receiver:** Sums up these segments, including the received checksum.
    9.  **Receiver:** Wraps around any carries from the addition.
    10. **Receiver:** Calculates the one's complement of this final sum.
    11. **Receiver:** If the result is all zeros, the data is considered error-free. If it's non-zero, an error is detected.

**Example of Checksum Calculation (Conceptual - Binary Addition):**

Let's say we have data segments represented as 4-bit binary numbers: `1011`, `0101`, `1100`.

**Sender:**
1.  Sum:
    ```
      1011
      0101
    + 1100
    ------
     10000  (This is 16 in decimal)
    ```
2.  Wrap around the carry: `1000` (from the leftmost '1') + `0000` (the rest of the sum) = `1000`.
3.  Calculate one's complement of `1000`: `0111`.
4.  **Checksum = `0111`**

The sender would transmit the data `1011 0101 1100` along with the checksum `0111`.

**Receiver:**
1.  Received data segments: `1011`, `0101`, `1100`.
2.  Received checksum: `0111`.
3.  Sum (data + checksum):
    ```
      1011
      0101
      1100
    + 0111
    ------
     10101  (This is 21 in decimal)
    ```
4.  Wrap around the carry: `1010` + `0001` = `1011`.
5.  Calculate one's complement of `1011`: `0100`.

**Important Note:** The standard algorithm for checksum uses **one's complement arithmetic**. The example above demonstrates the *concept* of summing and wrapping carries, but for a true one's complement sum, the addition is performed in a way that carries are added to the least significant bit.

Let's re-do the example with a more accurate representation of one's complement addition (though still simplified for clarity):

**Sender Example (Corrected One's Complement):**
Data segments: `1011`, `0101`, `1100`

1.  Sum:
    ```
      1011
      0101
    + 1100
    ------
     10000  (16 in decimal)
    ```
2.  Carry-out `1` is added to the sum of the remaining bits: `0000 + 1 = 0001`
3.  Sum with wrap-around: `0000` (lower 4 bits of sum) + `0001` (carry) = `0001` (This is incorrect. The wrap-around needs to be more systematic).

**Let's use a proper one's complement addition illustration:**

Assume 4-bit words.
Data segments: `1011`, `0101`, `1100`.

1.  Sum:
    ```
      1011  (11)
      0101  (5)
    + 1100  (12)
    ------
     10000  (16)
    ```
2.  Carry-out from the most significant bit position is `1`.
3.  Add this carry to the remaining bits of the sum: `0000 + 1 = 0001`.
4.  The result of the one's complement sum is `0001`.
5.  Calculate the one's complement of the sum: `~0001` = `1110`.
6.  **Checksum = `1110`** (This is the most common way checksum is described as being calculated by the sender).

**Receiver:**
Received data segments: `1011`, `0101`, `1100`.
Received checksum: `1110`.

1.  Sum (data + checksum):
    ```
      1011
      0101
      1100
    + 1110
    ------
     10110  (22 in decimal)
    ```
2.  Carry-out from the most significant bit position is `1`.
3.  Add this carry to the remaining bits of the sum: `0110 + 1 = 0111`.
4.  The result of the one's complement sum is `0111`.
5.  Calculate the one's complement of the sum: `~0111` = `1000`.

**Since the final result is not all zeros (`1000`), an error is detected.**

**Key Takeaway:** The core idea is that if no errors occur, the sum of the data segments plus the checksum, when subjected to the same one's complement arithmetic, should result in all zeros.

---

## 3. How Checksum Works

**Learning Outcome:** Explain the step-by-step process of checksum calculation and verification.

The process is as described in section 2, with emphasis on the one's complement arithmetic.

**Detailed Steps:**

1.  **Segmentation:** The data is divided into fixed-size blocks (often 16-bit words).
2.  **Summation:** All these blocks are added together using one's complement arithmetic.
    *   **One's Complement Addition:** When adding two numbers, if there's a carry-out from the most significant bit (MSB), this carry is added back to the least significant bit (LSB) of the result. This process is repeated until no more carries are generated.
3.  **Checksum Generation (Sender):**
    *   After summing all data blocks, if there's a carry-out from the final sum, it's added back to the sum.
    *   The one's complement of this final sum is calculated. This value is the checksum.
4.  **Transmission:** The original data blocks are transmitted along with the calculated checksum.
5.  **Checksum Verification (Receiver):**
    *   The receiver divides the incoming data into the same fixed-size blocks.
    *   The receiver adds all these data blocks *and* the received checksum, again using one's complement arithmetic.
    *   If there's a carry-out from the final sum, it's added back.
    *   The one's complement of this final sum is calculated.
    *   **Verification Rule:** If the result of the one's complement is all zeros, the data is considered error-free. Otherwise, an error is detected.

---

## 4. Advantages and Disadvantages of Checksum

**Learning Outcome:** Discuss the pros and cons of using checksum for error detection.

### Advantages:

*   **Simplicity:** Relatively easy to implement in hardware and software.
*   **Low Overhead:** The checksum itself is a small, fixed-size value, adding minimal overhead to the transmitted data.
*   **Computational Efficiency:** The calculations are straightforward and fast, making it suitable for high-speed networks.
*   **Effective for Detecting Certain Errors:** Good at detecting single-bit errors and burst errors (multiple consecutive bit errors) if they don't cancel each other out in the summation.

### Disadvantages:

*   **Limited Error Detection Capability:**
    *   **Cannot detect all error patterns:** Checksums are not foolproof. Certain patterns of errors might result in the sum remaining unchanged, leading to undetected errors.
    *   **Common examples of undetectable errors:**
        *   **Two compensating errors:** If two bits are flipped, but their effect on the sum cancels out. For example, if `0001` becomes `0010` (a change of +1) and `0010` becomes `0001` (a change of -1), the sum might remain the same.
        *   **All-zero block error:** If the data transmitted is all zeros, the checksum will be zero. If the receiver gets all zeros, it might incorrectly assume the data is correct.
        *   **Multiple errors that sum to a multiple of the word size:** If errors cause changes that sum to a multiple of 2^n (where n is the word size), the wrap-around might not reveal the error.
*   **Not Suitable for Cryptographic Security:** Checksums are not designed for security purposes; they can be easily manipulated by an attacker without detection. For security, cryptographic hash functions (like SHA-256) are used.

---

## 5. Examples of Checksum Usage

**Learning Outcome:** Identify where checksums are commonly used in networking.

*   **Internet Protocol (IP):** The IP header includes a checksum field to detect errors in the IP header itself. However, it does not protect the IP payload.
*   **Transmission Control Protocol (TCP):** TCP uses a more robust checksum that covers the TCP header, TCP payload, and a pseudo-header derived from the IP header. This provides end-to-end error detection.
*   **User Datagram Protocol (UDP):** UDP also uses a checksum for error detection, covering the UDP header, UDP payload, and the pseudo-header.
*   **Network Interface Cards (NICs):** Many NICs perform cyclic redundancy checks (CRCs) for error detection on the physical link. While not strictly the simple checksum described, it's a related error detection technique.

---

## 6. Comparison with Cyclic Redundancy Check (CRC)

**Learning Outcome:** Understand that CRC is a more advanced error detection method than simple checksum.

While not the primary focus of this topic, it's important to note that **Cyclic Redundancy Check (CRC)** is a more powerful and commonly used error detection mechanism in modern networks, especially at the Data Link Layer.

*   **Checksum:** Treats data as binary numbers and uses arithmetic addition. Good for detecting single-bit and some burst errors.
*   **CRC:** Treats data as a polynomial and uses polynomial division over a finite field (GF(2)). This makes it significantly better at detecting burst errors, multiple errors, and a wider range of error patterns.

**Key Difference:** The mathematical basis. Checksum uses simple addition, while CRC uses polynomial division, which is mathematically more robust for error detection.

---

## 7. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of error detection mechanisms at the Data Link Layer?
a) To correct errors in the data.
b) To identify the presence of errors in the data.
c) To encrypt the data for security.
d) To compress the data for faster transmission.

**Question 2:**
Describe the basic principle of how a checksum is calculated by the sender.

**Question 3:**
If the receiver receives data and calculates the sum of data blocks and the checksum, and the final one's complement of this sum is `00000000` (for 8-bit checksum), what can the receiver conclude?

**Question 4:**
Give one example of an error pattern that a simple checksum might **not** detect.

**Question 5:**
Which of the following protocols uses a checksum?
a) HTTP
b) DNS
c) TCP
d) FTP

---

## 8. Answers to Practice Questions

**Answer 1:**
The primary purpose of error detection mechanisms at the Data Link Layer is to **b) To identify the presence of errors in the data.** While error correction is a related concept, detection is the first step.

**Answer 2:**
The sender divides the data into fixed-size blocks, sums these blocks using one's complement arithmetic (where carries are wrapped around and added back), and then calculates the one's complement of this final sum. This result is the checksum, which is appended to the data.

**Answer 3:**
If the final one's complement of the sum (data + checksum) is all zeros, the receiver can conclude that **the data is likely error-free**.

**Answer 4:**
One example of an error pattern that a simple checksum might not detect is **two compensating errors**. This occurs when multiple bits are flipped in a way that their effect on the sum cancels out, leaving the checksum unchanged. For instance, if one bit error causes the sum to increase by `k` and another bit error causes it to decrease by `k`, the total sum might remain the same.

**Answer 5:**
The correct answer is **c) TCP**. HTTP, DNS, and FTP are application layer protocols and typically rely on the underlying transport layer protocols (like TCP or UDP) for error detection.

---

## 9. Important Points to Remember

*   **Checksum is for Error Detection, Not Correction:** It signals the presence of errors, usually leading to retransmission.
*   **One's Complement Arithmetic:** The core mathematical operation involves summing blocks using one's complement addition.
*   **Wrap-around Carry:** Carries generated during summation are added back to the sum.
*   **Verification is Key:** The receiver performs the same calculation. A result of all zeros indicates no error detected.
*   **Limitations Exist:** Checksums are not perfect and can fail to detect certain error patterns.
*   **CRC is Superior:** For more robust error detection, especially for burst errors, CRC is preferred.
*   **Commonly Used in Protocols:** Found in IP, TCP, and UDP for header and payload integrity.

---
