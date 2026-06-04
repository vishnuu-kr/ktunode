---
title: "Image Compression: Image compression model"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 2: 2D Image transforms: DFT, Properties"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef67"
status: "completed"
scrapedAt: "2026-05-23T18:01:17.143Z"
---
# Image Processing Applications: Module 2 - 2D Image Transforms: DFT, Properties

## Topic: Image Compression: Image Compression Model

This module delves into the fundamental concepts of image compression, focusing on the underlying principles and a generalized model for achieving it. Understanding these principles is crucial for analyzing various compression schemes, as highlighted in Course Outcome CO2.

---

### **1. Introduction to Image Compression**

Image compression is the process of reducing the amount of data required to represent a digital image while minimizing the loss of visual quality. This is essential for efficient storage, transmission, and processing of digital images, especially in applications like digital photography, medical imaging, and multimedia communication.

**Key Concepts:**

*   **Redundancy:** Digital images often contain redundant information that can be removed or represented more efficiently. This redundancy can be:
    *   **Interpixel Redundancy:** Spatial correlation between neighboring pixels. For example, in a smooth region of an image, neighboring pixels often have similar intensity values.
    *   **Psychovisual Redundancy:** Information that is not perceptible to the human visual system. The human eye is less sensitive to certain details or color variations.
    *   **Interframe Redundancy (for video):** Similarities between consecutive frames in a video sequence. (While this topic focuses on 2D images, it's worth noting its relevance in video compression).
*   **Compression Ratio:** The ratio of the original image size to the compressed image size. A higher compression ratio indicates more efficient compression.
*   **Distortion/Loss:** The difference between the original image and the decompressed image. Compression can be either:
    *   **Lossless Compression:** The decompressed image is identical to the original image. No information is lost.
    *   **Lossy Compression:** Some information is discarded during compression, resulting in a decompressed image that is an approximation of the original. This is often acceptable if the loss is imperceptible or within acceptable limits.

**Textbook References:**

*   **Gonzalez & Rafel C (2009):** Chapter 8, "Image Compression" provides a thorough introduction to the concepts of redundancy and the types of compression.
*   **Jayaraman, Esakkirajan, Veerakumar (2015):** Chapter 10, "Image Compression" also covers the fundamentals of redundancy and the goals of compression.

---

### **2. The Generalized Image Compression Model**

The process of image compression can be conceptually broken down into a two-stage process: **Encoding** and **Decoding**. This model is a general framework that applies to various compression techniques.

**2.1. Encoder**

The encoder takes the original image as input and transforms it into a compressed representation. It typically involves the following steps:

*   **Source Coding:** This stage aims to remove redundancy from the image data.
    *   **Transformation:** Often, the image data is transformed into a different domain where redundancy is more easily exploited. The **Discrete Fourier Transform (DFT)**, which we studied in Module 2, is a prime example. By transforming the image into the frequency domain, we can represent the image using coefficients that capture different spatial frequencies. High-frequency coefficients often contain less significant information or are more prone to quantization errors.
        *   **Example:** The DFT can concentrate most of the image's energy into a few low-frequency coefficients.
    *   **Quantization:** This is the core step for achieving lossy compression. It reduces the precision of the transformed coefficients, effectively discarding less significant information.
        *   **Scalar Quantization:** Each coefficient is independently quantized.
        *   **Vector Quantization:** Groups of coefficients are quantized together.
    *   **Coding (Entropy Coding):** The quantized coefficients are then further compressed using entropy coding techniques. This step removes statistical redundancy.
        *   **Huffman Coding:** Assigns shorter codewords to more frequent symbols.
        *   **Arithmetic Coding:** Represents the entire message as a single fraction within a unit interval.

*   **Channel Coding (Optional):** This stage adds redundancy to the compressed data to detect and correct errors that may occur during transmission or storage. This is not strictly part of compression but is often coupled with it for reliable data delivery.

**2.2. Decoder**

The decoder takes the compressed data as input and reconstructs the image. It mirrors the encoder's steps in reverse.

*   **Channel Decoding (if applicable):** Corrects errors introduced during transmission.
*   **Decoding (Entropy Decoding):** Reverses the entropy coding process to recover the quantized coefficients.
*   **Inverse Transformation:** Reconstructs the image by applying the inverse of the transformation used in the encoder. For example, if the DFT was used, the Inverse DFT (IDFT) is applied.
*   **Reconstruction:** This stage might involve inverse quantization and other steps to produce the final decompressed image.

**Diagram of the Generalized Image Compression Model:**

```
                                            Compressed Data
                                               (Bitstream)
                                                    |
                                                    V
Original Image --> Encoder --> [Transformation] --> [Quantization] --> [Entropy Coding]
                                     ^                                      |
                                     |                                      V
                                     |                                  Decompressed Image
                                     |                                      ^
                                     |                                      |
Decompressed Data --> Decoder --> [Entropy Decoding] <-- [Dequantization] <-- [Inverse Transformation]
```

**Textbook References:**

*   **Gonzalez & Rafel C (2009):** Chapter 8, Section 8.1, "Image Compression Models" provides a detailed explanation and diagram of the encoder-decoder framework.
*   **Jayaraman, Esakkirajan, Veerakumar (2015):** Chapter 10, Section 10.1, "Image Compression Models" also presents a similar conceptual model.
*   **Castleman (2003):** Chapter 2, "Image Compression Fundamentals" discusses the basic principles of source coding and the general compression process.

**Course Outcome Alignment:**

*   **CO2: Analyse the various concepts and mathematical transforms and compression schemes necessary for image processing (Knowledge Level: K4)**
    *   This section directly addresses CO2 by breaking down the compression process into its core components (transformation, quantization, entropy coding) and explaining their roles. Understanding this model is foundational for analyzing different compression algorithms.

---

### **3. Role of 2D DFT in Image Compression**

The Discrete Fourier Transform (DFT) plays a significant role in image compression by facilitating the exploitation of interpixel redundancy.

**How DFT aids compression:**

1.  **Energy Compaction:** The DFT transforms an image from the spatial domain to the frequency domain. In most natural images, the energy (or magnitude of coefficients) tends to be concentrated in the low-frequency components. High-frequency components often represent fine details, edges, and noise, which contribute less to the overall perceptual quality of the image.
    *   **Example:** Imagine a smooth gradient in an image. In the spatial domain, this would be represented by many pixels with similar values. In the frequency domain, this smooth variation would correspond to a few dominant low-frequency coefficients.

2.  **Decorrelation:** The DFT decorrelates the image pixels, meaning the relationship between adjacent pixel values is reduced in the frequency domain. This makes it easier to apply statistical compression techniques.

3.  **Basis for Quantization:** By transforming the image into the frequency domain, we can selectively quantize the DFT coefficients. Less significant coefficients (e.g., high-frequency coefficients with small magnitudes) can be quantized more coarsely or even set to zero, leading to data reduction.

**Lossy Compression Strategy using DFT:**

A common lossy compression strategy using DFT involves these steps:

1.  **Compute the 2D DFT:** Apply the 2D DFT to blocks of the image (or the entire image).
2.  **Quantize Coefficients:** Quantize the DFT coefficients. A common approach is to use a quantization table, where coefficients corresponding to higher frequencies are quantized more aggressively (larger step sizes).
    *   **Example:** For JPEG compression (which uses DCT, a related transform), a quantization table is used to scale the DCT coefficients.
3.  **Entropy Code:** The quantized coefficients are then entropy coded.
4.  **Decompression:** The decoder performs inverse quantization and the inverse DFT (IDFT) to reconstruct the image.

**Important Note:** While DFT is a powerful tool for compression, the **Discrete Cosine Transform (DCT)** is more commonly used in practical image compression standards like JPEG due to its better energy compaction properties and its real-valued output. However, understanding the DFT's role provides a solid foundation for appreciating other frequency-domain transforms.

**Textbook References:**

*   **Gonzalez & Rafel C (2009):** Chapter 8, Section 8.2, "Lossless Compression" and Section 8.3, "Lossy Compression" discuss the role of transforms like DFT in reducing redundancy.
*   **Jayaraman, Esakkirajan, Veerakumar (2015):** Chapter 10, Section 10.3, "Image Compression Standards" (which often utilize transforms) and Section 10.2, "Image Compression Techniques" will indirectly touch upon transform-based compression.
*   **Jain (1988):** Chapter 7, "Transform Coding" provides a theoretical basis for using transforms in compression.

**Course Outcome Alignment:**

*   **CO2: Analyse the various concepts and mathematical transforms and compression schemes necessary for image processing (Knowledge Level: K4)**
    *   This section directly supports CO2 by explaining how the DFT, a key transform discussed in Module 2, contributes to image compression by exploiting energy compaction and decorrelation.

---

### **4. Key Concepts and Definitions Summary**

*   **Image Compression:** Reducing the data size of an image.
*   **Redundancy:** Unnecessary information in an image (interpixel, psychovisual).
*   **Compression Ratio:** Original size / Compressed size.
*   **Lossless Compression:** No data loss; perfect reconstruction.
*   **Lossy Compression:** Some data loss; approximate reconstruction.
*   **Encoder:** The part of the compression system that reduces data size.
*   **Decoder:** The part of the compression system that reconstructs the original data.
*   **Transformation:** Converting image data to a different domain (e.g., frequency domain via DFT) to exploit redundancy.
*   **Quantization:** Reducing the precision of transformed coefficients (lossy step).
*   **Entropy Coding:** Statistical coding (e.g., Huffman, Arithmetic) to remove statistical redundancy.

---

### **5. Important Points to Remember**

*   Image compression is driven by the desire to reduce storage space and transmission bandwidth.
*   The generalized compression model involves an encoder and a decoder.
*   Redundancy (interpixel, psychovisual) is the primary target for removal.
*   DFT is a valuable tool for image compression due to its energy compaction and decorrelation properties, which facilitate quantization.
*   Lossy compression is achieved by discarding or coarsely representing less significant information, often through quantization of transformed coefficients.
*   While DFT is conceptually important, DCT is more prevalent in practical compression standards like JPEG.

---

### **6. Practice Questions and Exercises**

**Question 1:**
Explain the two main types of redundancy found in digital images that can be exploited for compression.

**Answer:**
The two main types of redundancy are:
1.  **Interpixel Redundancy:** This refers to the spatial correlation between neighboring pixels. In most images, adjacent pixels tend to have similar intensity values. This means that the information contained in one pixel can often be predicted from its neighbors.
2.  **Psychovisual Redundancy:** This relates to information that is not perceptible to the human visual system. The human eye has limitations in perceiving certain types of detail, color variations, or fine textures. Compression techniques can selectively discard this information without a significant perceived loss in image quality.

**Question 2:**
Describe the key stages of the generalized image compression model.

**Answer:**
The generalized image compression model consists of two main parts: the Encoder and the Decoder.

*   **Encoder:**
    1.  **Transformation:** The original image is transformed into a different domain (e.g., frequency domain using DFT) to exploit redundancy and achieve energy compaction.
    2.  **Quantization:** The transformed coefficients are quantized to reduce their precision, discarding less significant information (this is the primary lossy step).
    3.  **Entropy Coding:** The quantized coefficients are further compressed using statistical coding techniques like Huffman coding or Arithmetic coding to remove statistical redundancy.

*   **Decoder:**
    1.  **Entropy Decoding:** Reverses the entropy coding to recover the quantized coefficients.
    2.  **Dequantization:** Reverses the quantization process (an approximation).
    3.  **Inverse Transformation:** Applies the inverse transform (e.g., IDFT) to reconstruct the image from the dequantized coefficients.

**Question 3:**
How does the Discrete Fourier Transform (DFT) contribute to image compression?

**Answer:**
The DFT contributes to image compression in the following ways:
*   **Energy Compaction:** The DFT transforms an image into the frequency domain, where most of the image's energy is typically concentrated in a few low-frequency coefficients. This allows for efficient representation by focusing on these important coefficients.
*   **Decorrelation:** The DFT decorrelates pixels, reducing the spatial dependency between adjacent pixels. This makes it easier to apply statistical compression methods effectively.
*   **Basis for Quantization:** By having the image represented in the frequency domain, less significant coefficients (often high-frequency ones) can be quantized more coarsely or discarded entirely, leading to data reduction in lossy compression.

**Question 4:**
What is the difference between lossless and lossy compression? Provide an example of an application where each is preferred.

**Answer:**
*   **Lossless Compression:** In lossless compression, the decompressed image is an exact replica of the original image. No information is lost during the compression and decompression cycle. This is achieved by efficiently encoding the existing data without discarding any.
    *   **Preferred Application:** Medical imaging (e.g., X-rays, MRIs), where absolute accuracy is critical and any loss of detail could lead to misdiagnosis. Archival purposes where preserving the original fidelity is paramount.

*   **Lossy Compression:** In lossy compression, some information is intentionally discarded during the compression process to achieve higher compression ratios. The decompressed image is an approximation of the original and will contain some level of distortion.
    *   **Preferred Application:** Digital photography (e.g., JPEGs), streaming video, and online image sharing. In these applications, a slight loss of quality is often acceptable in exchange for significantly smaller file sizes, making storage and transmission more efficient.

**Exercise 1:**
Consider a simple 2x2 image with pixel values:
```
[ 10  12 ]
[ 14  16 ]
```
Imagine you are applying a simplified compression technique that uses a transform. If the transform output were, for example, a set of coefficients `[C1, C2, C3, C4]`, how might you quantize these coefficients to reduce data? What would be the trade-off?

**Solution:**
*   **Transform Output (Hypothetical):** Let's assume a transform (like DFT or DCT) results in coefficients representing different aspects of the image. For instance, one coefficient might represent the average intensity, others might represent gradients in different directions.
*   **Quantization Strategy:** A common strategy is to quantize coefficients representing less important information more coarsely. For example, if C1 represents the average intensity and is large, and C2, C3, C4 represent finer details or edges and are smaller, we might:
    *   Quantize C1 with a small step size (e.g., quantize to the nearest multiple of 1).
    *   Quantize C2, C3, C4 with larger step sizes (e.g., quantize to the nearest multiple of 3 or 5).
*   **Trade-off:**
    *   **Data Reduction:** By using larger step sizes for some coefficients, we reduce the number of bits needed to represent them.
    *   **Loss of Information/Quality:** The larger quantization step means that the original coefficient values are approximated, and the precise details they represent are lost. This can lead to a blurrier image or loss of fine textures upon decompression. The success depends on which coefficients are deemed "less important" and how well they can be approximated without significant visual impact.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **7. References and Further Reading**

*   **Gonzalez, R. C., & Woods, R. E. (2009). *Digital Image Processing* (3rd ed.). Pearson Education.** (Chapter 8: Image Compression)
*   **Jayaraman, S., Esakkirajan, S., & Veerakumar, T. (2015). *Digital Image Processing*. Tata McGraw Hill.** (Chapter 10: Image Compression)
*   **Castleman, K. R. (2003). *Digital Image Processing* (2nd ed.). Pearson Education.** (Chapter 2: Image Compression Fundamentals)
*   **Jain, A. K. (1988). *Fundamentals of Digital Image Processing*. Prentice Hall.** (Chapter 7: Transform Coding)
*   **Pratt, W. K. (2007). *Digital Image Processing* (4th ed.). John Wiley.** (Relevant chapters on transforms and compression)

---

This concludes the notes for the Image Compression Model. Remember that understanding this general model is key to appreciating how specific compression algorithms leverage transforms like DFT (and its relatives) to achieve efficient data representation.