---
title: "Facsimile Compression."
subject: "DATA COMPRESSION"
module: "Module 1: Basic Compression Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b77c"
status: "completed"
scrapedAt: "2026-05-20T16:44:25.589Z"
---
# DATA COMPRESSION - MODULE 1: BASIC COMPRESSION TECHNIQUES - FACSIMILE COMPRESSION

## Introduction

This module explores basic compression techniques with a focus on Facsimile Compression.  Facsimile, or fax, refers to the process of transmitting documents electronically, which historically relied on specialized compression techniques.  These techniques are relevant beyond traditional fax machines and provide valuable insights into lossless data compression.

**Learning Outcomes:**

*   Understand the basics of facsimile transmission and its characteristics.
*   Explain the rationale behind using compression for facsimile data.
*   Describe and apply run-length encoding (RLE) and its variations, particularly used in facsimile compression (e.g., Modified Huffman Coding, Modified READ Coding).
*   Calculate compression ratios achieved by different facsimile compression methods.
*   Identify the limitations of facsimile compression techniques.

## 1. Basics of Facsimile Transmission and its Characteristics

*   **What is Facsimile?**  Facsimile (fax) is a technology used to transmit documents electronically over telephone lines or networks. It scans a document, converts it into an electrical signal, transmits the signal to a receiver, and then reconstructs a copy of the document at the receiving end.

*   **Key Components:**
    *   **Scanner:** Converts the document into an electrical signal (usually binary, representing black and white pixels).
    *   **Modem:** Modulates and demodulates the electrical signal for transmission over phone lines.
    *   **Transmission Medium:** Typically a telephone line or network.
    *   **Printer:** Reconstructs the received image on paper.

*   **Image Representation:** Fax machines typically scan documents line by line, representing each line as a sequence of black and white pixels. This is a *bitonal* or *binary image*.

*   **Standard Resolutions:**  Common fax resolutions are:
    *   **Standard Resolution:** 204 x 98 dots per inch (dpi)
    *   **Fine Resolution:** 204 x 196 dpi

*   **Data Redundancy:** Fax images often contain significant redundancy.  Documents frequently consist of large areas of white space, long runs of consecutive black or white pixels on a scan line, and similarities between adjacent scan lines. This redundancy makes compression highly effective.

## 2. Rationale Behind Using Compression for Facsimile Data

*   **Reduced Transmission Time:** Compression significantly reduces the amount of data that needs to be transmitted, leading to faster transmission times. This is crucial for efficient use of telephone lines and reduced communication costs (especially in the past when long-distance calls were expensive).

*   **Reduced Storage Requirements:**  Although less critical for fax machines themselves, compressed fax images require less storage space. This becomes important when archiving or storing received faxes electronically.

*   **Cost Savings:** Faster transmission times translate directly into cost savings on telephone bills.

*   **Improved Efficiency:**  Compression makes the entire facsimile process more efficient, allowing for faster turnaround times and better resource utilization.

## 3. Run-Length Encoding (RLE) and Its Variations

### 3.1 Run-Length Encoding (RLE) - General Principle

*   **Concept:** RLE is a simple and effective compression technique that exploits sequences of identical data values (runs). Instead of storing each individual value in the run, RLE stores the *value* and the *length* of the run.

*   **Example:**  Consider the following sequence of bits: `11111000000011100`.

    *   Using RLE, this could be represented as: `5,1,7,0,3,1,2,0` (representing five 1s, seven 0s, three 1s, and two 0s).
    *   Alternatively, if we know it's a bit stream we can infer that alternating runs represent opposite values: `5, 7, 3, 2`.

*   **Advantages:**
    *   Simple to implement.
    *   Efficient for data with long runs of identical values.

*   **Disadvantages:**
    *   Ineffective for data with little or no repetition.  Can even increase the data size in such cases.

### 3.2 RLE in Facsimile Compression

Facsimile compression techniques utilize RLE extensively, but they often incorporate additional complexities to improve compression performance.  These variations are specifically designed for the characteristics of scanned document images.

*   **Key Idea:**  Fax compression methods are typically *line-by-line*, meaning they compress each scan line independently.  They encode the *lengths* of consecutive runs of black and white pixels.

*   **End-of-Line (EOL) Codes:**  Special codes are used to mark the end of each scan line, allowing the receiver to properly reconstruct the image.

### 3.3 Modified Huffman Coding (MH) - Group 3 Fax

*   **Description:** MH is a one-dimensional coding scheme based on RLE combined with Huffman coding.  It's the primary compression method used in Group 3 fax machines (the most common type).

*   **Two Sets of Code Words:** MH uses two code tables:
    *   **Terminating Codes:**  Represent run lengths that end at the end of a code word. Run lengths 0-63.
    *   **Make-Up Codes:** Represent long run lengths that cannot be represented by a single terminating code. Run lengths in multiples of 64.

*   **Huffman Coding:** Huffman coding assigns shorter codes to more frequently occurring run lengths and longer codes to less frequently occurring ones, further improving compression.  The Huffman tables are fixed and standardized.

*   **Encoding a Scan Line:**
    1.  Divide the scan line into runs of consecutive black and white pixels.
    2.  Determine the length of each run.
    3.  Represent each run length using either a terminating code or a make-up code followed by a terminating code.  If a run length is greater than 63, use one or more make-up codes to represent multiples of 64, and then a terminating code to represent the remaining length.
    4.  Append the EOL code (000000000001) to the end of the encoded line.

*   **Example:**  Suppose we have the following run lengths for a single scan line: `white=5, black=2, white=10, black=3, white=1`. We would use the MH code tables (which are predefined standards) to look up the appropriate codes for each run length (5, 2, 10, 3, 1).  Then we concatenate these codes and add the EOL.

### 3.4 Modified READ Coding (MR) - Group 4 Fax

*   **Description:** MR is a two-dimensional coding scheme used in Group 4 fax machines. It exploits the correlation between adjacent scan lines.  It achieves higher compression ratios than MH by encoding the *differences* between a line and the previous line.

*   **Reference and Coding Line:** One line is designated as the *reference line*, and the next line is the *coding line*.  The first line is usually encoded using MH.

*   **Encoding Modes:** MR uses different coding modes to represent the relationship between the coding line and the reference line:
    *   **Pass Mode (P):**  Indicates that the coding line and the reference line have the same color (black or white) from the current position until after the next transition (color change) in the reference line.
    *   **Vertical Mode (V):** Indicates that the coding line's transition is vertically aligned with a transition in the reference line.  Variations include V(0) (exact vertical alignment), VL(1) (transition one pixel to the left), VR(1) (transition one pixel to the right), VL(2), VR(2), VL(3), VR(3).
    *   **Horizontal Mode (H):** Indicates that there is no significant correlation between the two lines near the current position. It encodes the next two runs in the coding line using MH coding.

*   **Advantages:**  Significantly higher compression ratios compared to MH, especially for documents with similar content across consecutive lines.

*   **Complexity:** MR is more complex to implement than MH.

## 4. Calculating Compression Ratios

*   **Compression Ratio:**  The ratio of the original (uncompressed) data size to the compressed data size.  A higher compression ratio indicates better compression performance.

    *   **Compression Ratio = Uncompressed Size / Compressed Size**

*   **Example:**
    *   Uncompressed Size: 1024 bytes
    *   Compressed Size: 256 bytes
    *   Compression Ratio = 1024 / 256 = 4:1 (or 4)

*   **Calculation for Fax Images:**
    1.  **Uncompressed Size:** Calculate the number of bits required to represent the image based on its resolution (e.g., 204 x 98 dpi) and size. Each pixel requires 1 bit (black or white).
    2.  **Compressed Size:** Measure the actual size of the compressed data in bits or bytes.
    3.  **Apply the Formula:** Compression Ratio = Uncompressed Size / Compressed Size

*   **Note:** The actual compression ratio achieved depends heavily on the content of the document. Documents with large areas of white space and high correlation between lines will achieve higher compression ratios than documents with complex text and graphics.

## 5. Limitations of Facsimile Compression Techniques

*   **Lossless Compression Only:** Facsimile compression techniques are *lossless*, meaning no information is lost during compression. This is essential for accurate document reproduction.  However, it also limits the maximum achievable compression ratio.  Lossy compression techniques, which could achieve higher compression, are generally not acceptable for fax transmission due to the potential for data loss.

*   **Bitonal Images Only:**  These techniques are designed for binary (black and white) images. They are not suitable for compressing color images or images with grayscale tones.  Fax transmission handles color by converting to grayscale and dithering into black and white, or by segmenting into layers and encoding each layer as bitonal.

*   **Sensitivity to Noise:**  Even a small amount of noise (e.g., specks of dust on the original document) can disrupt the RLE coding and reduce compression effectiveness.  Noise can introduce short runs where long runs would otherwise exist.

*   **Fixed Code Tables:** The fixed Huffman code tables used in MH may not be optimal for all types of documents. Adaptive Huffman coding could potentially achieve better compression, but it is more complex to implement.

*   **Performance Dependent on Content:**  As mentioned earlier, the compression ratio depends heavily on the content of the document.  Documents with little redundancy will not compress well.

## Practice Questions and Exercises

1.  **What is the purpose of the EOL code in MH compression?**
    *   **Answer:** The EOL code marks the end of a scan line, allowing the receiver to properly reconstruct the image.  It provides synchronization between the transmitter and receiver.

2.  **Explain the difference between Modified Huffman coding (MH) and Modified READ coding (MR).**
    *   **Answer:** MH is a one-dimensional coding scheme that compresses each scan line independently. MR is a two-dimensional coding scheme that exploits the correlation between adjacent scan lines, resulting in higher compression ratios.

3.  **Calculate the compression ratio for a fax image that has an uncompressed size of 4096 bytes and a compressed size of 512 bytes.**
    *   **Answer:** Compression Ratio = 4096 / 512 = 8:1

4.  **Give an example of a scenario where RLE would be very effective.**
    *   **Answer:**  Compressing a scan of a document with large areas of white space.  Or compressing a black and white image containing a single, long horizontal line.

5.  **What is a "make-up code" in MH coding, and why is it used?**
    *   **Answer:** A make-up code represents a run length that is a multiple of 64. It is used when the total run length is too long to be represented by a single terminating code (run lengths > 63).  It's followed by a terminating code.

6.  **Why is lossless compression necessary for facsimile transmission?**
    *   **Answer:**  Lossless compression is necessary to ensure that the received document is an exact replica of the original.  Any data loss would result in errors in the transmitted image.

## Important Points to Remember

*   Facsimile compression relies heavily on RLE.
*   MH is a one-dimensional coding scheme, while MR is a two-dimensional coding scheme.
*   EOL codes are essential for synchronizing the receiver.
*   Compression ratios depend heavily on the document's content.
*   Facsimile compression is lossless.
*   Understand the difference between Terminating Codes and Make-Up Codes.

These notes provide a comprehensive overview of Facsimile Compression within the context of basic compression techniques. Understanding these fundamentals is crucial for appreciating the principles behind data compression and its application in various communication technologies.
