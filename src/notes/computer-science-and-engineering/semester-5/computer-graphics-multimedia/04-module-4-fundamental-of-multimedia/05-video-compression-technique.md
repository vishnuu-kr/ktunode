---
title: "Video Compression Technique."
subject: "COMPUTER GRAPHICS & MULTIMEDIA"
module: "Module 4: Fundamental of Multimedia "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b82d"
status: "completed"
scrapedAt: "2026-05-20T16:43:26.234Z"
---
# COMPUTER GRAPHICS & MULTIMEDIA - Module 4: Fundamental of Multimedia - Video Compression Technique

## Learning Outcomes:

Upon completion of this topic, students will be able to:

*   **LO1:** Understand the need for video compression and its impact on storage and transmission.
*   **LO2:** Explain the different types of video compression techniques (lossy and lossless).
*   **LO3:** Describe the principles of spatial and temporal redundancy in video.
*   **LO4:** Compare and contrast different video compression standards (e.g., MPEG, H.264, H.265).
*   **LO5:** Analyze the trade-offs between compression ratio and video quality.

## 1. Introduction to Video Compression

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=FR4QIeZaPeM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=3EJlovevfcA) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=0IAPZzGSbME) |

### 1.1 The Need for Video Compression (LO1)

*   **Key Concept:** Uncompressed video data requires enormous storage space and bandwidth for transmission.

*   **Explanation:** Video consists of a sequence of frames (images) displayed rapidly to create the illusion of motion. Each frame is composed of pixels, and each pixel contains color information (e.g., Red, Green, Blue - RGB). Without compression, storing and transmitting high-resolution, high-frame-rate video is impractical.

*   **Example:** A single minute of uncompressed 1080p video at 30 frames per second can easily consume several gigabytes of storage. Streaming such a video over the internet without compression would require an extremely high bandwidth connection.

*   **Impact on Storage:** Reduces the amount of storage space required to store video files.
*   **Impact on Transmission:** Reduces the bandwidth required to transmit video data, enabling streaming and efficient data transfer.
*   **Impact on Playback:** Improves the playback experience by reducing buffering and allowing for smoother streaming.

### 1.2 Key Concepts and Definitions (LO1)

*   **Bitrate:** The number of bits used per unit of time (usually seconds) to represent the video. Lower bitrate means higher compression and potentially lower quality.
*   **Codec (Coder-Decoder):** An algorithm used to compress (encode) and decompress (decode) video data. Examples include H.264, H.265, VP9, and AV1.
*   **Frame Rate (FPS):** The number of frames displayed per second. Higher frame rates result in smoother video but require more data.
*   **Resolution:** The number of pixels in each frame (e.g., 1920x1080 for 1080p). Higher resolution results in sharper video but requires more data.
*   **Container Format:** A file format that holds the encoded video and audio data, along with metadata. Examples include MP4, AVI, MOV, and MKV.

## 2. Types of Video Compression (LO2)

### 2.1 Lossless Compression

*   **Key Concept:** Preserves all the original data, so the decompressed video is identical to the original.

*   **Explanation:** Lossless compression techniques reduce file size by removing statistical redundancies without discarding any information.

*   **Advantages:** No loss of quality.
*   **Disadvantages:** Lower compression ratios compared to lossy methods.
*   **Examples:** Run-Length Encoding (RLE) and some variants of Huffman coding can be applied within a video frame to reduce redundancy.  However, true lossless video codecs are rare and not typically used in mainstream video due to their low compression ratios.  Examples: lossless H.264 and FFV1.

### 2.2 Lossy Compression

*   **Key Concept:** Achieves higher compression ratios by discarding some less important data from the video.

*   **Explanation:** Lossy compression techniques remove data that is considered perceptually less significant, such as subtle color variations or high-frequency details.

*   **Advantages:** Higher compression ratios, leading to smaller file sizes and lower bandwidth requirements.
*   **Disadvantages:** Loss of quality (some artifacts may be visible, especially at very high compression ratios).
*   **Examples:** MPEG, H.264, H.265, VP9, AV1. These standards employ techniques like Discrete Cosine Transform (DCT), quantization, and entropy coding to achieve significant compression.

### 2.3 Comparison Table

| Feature          | Lossless Compression | Lossy Compression |
|-----------------|----------------------|-------------------|
| Data Loss        | No                   | Yes                |
| Compression Ratio | Lower                | Higher             |
| Quality           | Original quality retained | Quality loss possible |
| Use Cases        | Archiving, Editing   | Streaming, Broadcasting |

## 3. Principles of Spatial and Temporal Redundancy (LO3)

### 3.1 Spatial Redundancy

*   **Key Concept:** Redundancy within a single frame of video.

*   **Explanation:** Adjacent pixels in a frame often have similar color and brightness values. Spatial redundancy exploits this similarity to reduce the amount of data needed to represent the frame.

*   **Techniques:**
    *   **Transform Coding (e.g., DCT):** Transforms pixel data into frequency coefficients, where high-frequency coefficients (representing fine details) can be discarded with minimal perceptual impact.
    *   **Quantization:** Reduces the precision of the transformed coefficients, further reducing the number of bits required to represent them.
    *   **Run-Length Encoding (RLE):**  Used to encode sequences of identical pixel values. (Though more common historically, modern codecs use more efficient entropy coding)

*   **Example:**  A smooth gradient in the sky will have many adjacent pixels with similar color values. DCT and quantization can effectively represent this gradient with a small number of coefficients.

### 3.2 Temporal Redundancy

*   **Key Concept:** Redundancy between successive frames in a video sequence.

*   **Explanation:** In many video sequences, consecutive frames are very similar, with only small changes due to motion. Temporal redundancy exploits this similarity to reduce the amount of data needed to represent the video.

*   **Techniques:**
    *   **Motion Estimation and Compensation:** Identifies moving objects in a frame and predicts their position in the next frame.  Only the difference between the predicted frame and the actual frame (the residual) needs to be encoded.
    *   **Inter-frame Coding:**  Uses information from previous or future frames to predict the current frame.

*   **Frame Types:**
    *   **I-frames (Intra-coded frames):**  Encoded independently, like a JPEG image.  They provide a starting point for decoding.
    *   **P-frames (Predictive-coded frames):** Encoded based on the previous I-frame or P-frame.  They contain motion vectors and residual data.
    *   **B-frames (Bi-predictive-coded frames):** Encoded based on both previous and future I-frames or P-frames.  They provide the highest compression but require more processing power.

*   **Example:**  In a video of a person walking, the background remains largely the same between frames. Motion estimation can identify the moving person, and only the changes in their position and appearance need to be encoded.

## 4. Video Compression Standards (LO4)

### 4.1 MPEG (Moving Picture Experts Group)

*   **Explanation:**  A family of standards for compressing audio and video data.

*   **Key Standards:**
    *   **MPEG-1:**  Designed for CD-ROM quality video (352x240 resolution).  Developed VCD.
    *   **MPEG-2:**  Used for DVD video and digital television broadcasting.  Supports higher resolutions and bitrates than MPEG-1.
    *   **MPEG-4:**  A versatile standard that supports a wide range of applications, including streaming video, mobile devices, and video conferencing.  Includes H.264/AVC as part 10.

### 4.2 H.264/AVC (Advanced Video Coding)

*   **Explanation:** A widely used video compression standard known for its high compression efficiency and good video quality.

*   **Key Features:**
    *   **Advanced motion estimation and compensation techniques.**
    *   **Variable block sizes for motion compensation.**
    *   **Context-adaptive variable-length coding (CAVLC) and context-adaptive binary arithmetic coding (CABAC) for entropy coding.**
    *   **Support for different profiles and levels to cater to various applications.**

*   **Use Cases:** Blu-ray discs, streaming video, broadcasting, video conferencing.

### 4.3 H.265/HEVC (High Efficiency Video Coding)

*   **Explanation:** The successor to H.264/AVC, offering significantly improved compression efficiency (typically 50% better) while maintaining similar video quality.

*   **Key Features:**
    *   **Larger block sizes for motion compensation.**
    *   **More advanced motion estimation and compensation techniques.**
    *   **Improved entropy coding (CABAC).**
    *   **Increased coding tree units (CTUs).**

*   **Use Cases:** Ultra HD (4K and 8K) video streaming, high-resolution video storage.

### 4.4 Other Standards

*   **VP9:**  An open and royalty-free video codec developed by Google. Commonly used for YouTube videos.
*   **AV1:** Another open and royalty-free video codec developed by the Alliance for Open Media (AOMedia).  Designed as a next-generation codec with even better compression efficiency than H.265/HEVC and VP9.  Backed by major tech companies.

### 4.5 Comparison Table

| Standard | Compression Efficiency | Complexity | Royalty-Free | Use Cases                                  |
| --------- | ----------------------- | ----------- | ------------- | -------------------------------------------- |
| MPEG-2    | Low                    | Low        | Yes           | DVD, Digital TV (legacy)                   |
| H.264/AVC | Medium                 | Medium      | Partially       | Blu-ray, Streaming, Broadcasting           |
| H.265/HEVC| High                   | High        | Partially       | Ultra HD Streaming, High-Resolution Storage |
| VP9       | High                   | High        | Yes           | YouTube, Streaming                           |
| AV1       | Very High              | Very High   | Yes           | Next-Gen Streaming, High-Resolution Storage |

*Note*: "Partially" for royalty-free means that while the codec itself might have some encumbrances, there are avenues to use it without paying royalties depending on the application. This is a constantly evolving landscape.

## 5. Trade-offs Between Compression Ratio and Video Quality (LO5)

### 5.1 Compression Ratio

*   **Definition:** The ratio of the original file size to the compressed file size.  A higher compression ratio means a smaller compressed file.
*   **Impact on Quality:**  Increasing the compression ratio generally leads to lower video quality, as more data is discarded.

### 5.2 Factors Affecting Compression Ratio

*   **Codec:** Different codecs have different compression efficiencies.
*   **Bitrate:** Lower bitrates result in higher compression ratios but lower quality.
*   **Resolution:** Higher resolutions require more data and result in larger file sizes (unless the bitrate is reduced, which would negatively impact quality).
*   **Frame Rate:** Higher frame rates require more data and result in larger file sizes (unless the bitrate is reduced).
*   **Content Complexity:** Video content with complex scenes and rapid motion is harder to compress without losing quality.

### 5.3 Visual Artifacts

*   **Blocking Artifacts:**  Square-shaped distortions that appear in highly compressed video due to the block-based nature of many compression algorithms.
*   **Ringing Artifacts:**  Halo-like distortions that appear around sharp edges in highly compressed video.
*   **Color Banding:**  Visible steps in color gradients, resulting from the quantization of color values.
*   **Motion Artifacts:**  Distortions around moving objects, caused by inaccurate motion estimation and compensation.

### 5.4 Strategies for Balancing Compression and Quality

*   **Choose the right codec:** Select a codec that offers a good balance between compression efficiency and quality for the specific application.  H.265 or AV1 are often preferred for high-resolution content, while H.264 might be sufficient for lower-resolution content.
*   **Adjust the bitrate:** Experiment with different bitrates to find a sweet spot that provides acceptable quality without excessively increasing the file size.
*   **Use variable bitrate (VBR) encoding:** VBR encoding allocates more bits to complex scenes and fewer bits to simple scenes, resulting in better overall quality compared to constant bitrate (CBR) encoding.
*   **Consider the target audience:**  If the video is intended for viewing on small screens, a lower resolution and bitrate may be acceptable. If it's for large screens, a higher resolution and bitrate are preferable.

## 6. Practice Questions/Exercises

1.  **(LO1)** Explain why video compression is essential for modern multimedia applications.
    *   **Answer:** Video compression reduces storage space requirements, lowers bandwidth needs for transmission, and improves playback experience by reducing buffering, making streaming feasible.

2.  **(LO2)** What is the main difference between lossy and lossless video compression techniques? Give an example of each.
    *   **Answer:** Lossless compression preserves all original data, while lossy compression discards some less important data. Example of lossless: FFV1. Example of Lossy: H.264.

3.  **(LO3)** Describe spatial and temporal redundancy in video and explain how they are exploited in video compression.
    *   **Answer:** Spatial redundancy refers to similarity within a single frame (e.g., adjacent pixels having similar color). Temporal redundancy refers to similarity between consecutive frames. Compression algorithms exploit these redundancies using techniques like DCT (spatial) and motion estimation (temporal).

4.  **(LO4)** Compare and contrast H.264 and H.265 video compression standards.
    *   **Answer:** H.265 offers significantly better compression efficiency than H.264, allowing for smaller file sizes and higher quality at the same bitrate. However, H.265 is computationally more complex, and licensing is complex.

5.  **(LO5)** What are some of the trade-offs between compression ratio and video quality?  What are some visual artifacts that can arise from high compression ratios?
    *   **Answer:** Increasing compression ratio generally degrades video quality. Visual artifacts include blocking, ringing, color banding, and motion artifacts.

## 7. Important Points to Remember

*   Video compression is essential for practical storage and transmission of video data.
*   Lossy compression provides higher compression ratios but sacrifices some video quality.
*   Spatial and temporal redundancy are key concepts in video compression.
*   Different video compression standards offer varying levels of compression efficiency and complexity.
*   Balancing compression ratio and video quality is crucial for achieving the desired viewing experience.
*   Consider the licensing implications when choosing a codec.

This comprehensive guide should provide a strong foundation in the principles of video compression techniques. Good luck with your studies!