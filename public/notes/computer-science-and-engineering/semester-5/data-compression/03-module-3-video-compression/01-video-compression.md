---
title: "Video Compression :-"
subject: "DATA COMPRESSION"
module: "Module 3: Video Compression :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b795"
status: "completed"
scrapedAt: "2026-05-20T16:44:42.085Z"
---
## DATA COMPRESSION - MODULE 3: VIDEO COMPRESSION - VIDEO COMPRESSION

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=26QPDBe-qAE) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=dbwY2e4-e0k) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=ecCuyq-Wprc) |

### 1. Introduction: The Need for Video Compression

*   **Uncompressed Video is Huge:** Raw, uncompressed video data requires enormous storage space and bandwidth for transmission.  Consider a single frame of HD video (1920x1080 pixels) with 24 bits per pixel (8 bits for each of R, G, and B color components).  That's 1920 * 1080 * 24 = 49,766,400 bits or approximately 6.2 MB per frame.  At 30 frames per second, this becomes nearly 186 MB/s or 1.49 Gbps.
*   **Practical Limitations:** These requirements exceed the capacity of most storage devices, networks, and communication channels.  Streaming services, video conferencing, and even local video playback would be impossible without compression.
*   **Data Redundancy:** Video signals contain significant redundancy, both spatial (within a single frame) and temporal (between successive frames), that can be exploited to reduce the amount of data needed to represent the video.

### 2. Basic Principles of Video Compression

*   **Lossy vs. Lossless Compression:**
    *   **Lossless Compression:**  Reduces file size without losing any information.  The original video can be perfectly reconstructed.  Suitable for applications where quality is paramount and file size is secondary (e.g., archiving medical imaging).  Generally achieves lower compression ratios compared to lossy methods. Examples include lossless video codecs based on entropy encoding or prediction.
    *   **Lossy Compression:**  Reduces file size by discarding some information.  The reconstructed video is not identical to the original but should be perceptually similar.  Suitable for streaming, broadcasting, and other applications where bandwidth is limited.  Achieves significantly higher compression ratios. Most video compression standards are lossy.
*   **Key Techniques:**
    *   **Source Coding:** Remove redundancy from the original video signal (spatial and temporal).
    *   **Entropy Coding:** Further compress the source-coded signal by using variable-length codes based on the probability of occurrence of different symbols. (e.g., Huffman coding, Arithmetic coding).

### 3. Types of Redundancy in Video Signals

*   **Spatial Redundancy (Intra-frame):**
    *   **Definition:** Correlation between neighboring pixels within the same frame.  Adjacent pixels often have similar color and brightness values.
    *   **Exploitation:**  Techniques like Discrete Cosine Transform (DCT) used in JPEG and many video codecs exploit this spatial redundancy.  A block of pixels (e.g., 8x8) is transformed into a set of coefficients, many of which have small values and can be discarded or quantized with fewer bits.
    *   **Example:**  A smooth gradient in the sky will have a high degree of spatial redundancy.
*   **Temporal Redundancy (Inter-frame):**
    *   **Definition:** Correlation between successive frames in a video sequence.  Most scenes change gradually from frame to frame.
    *   **Exploitation:**  Motion estimation and motion compensation are used to predict a frame based on previous frames.  Instead of encoding the entire frame, only the differences (motion vectors and residual errors) are encoded. This is much more efficient.
    *   **Example:** In a news broadcast, the background is often static.  Only the news anchor's movements need to be encoded.
*   **Psycho-visual Redundancy:**
    *   **Definition:** The human visual system is not equally sensitive to all types of visual information.  We are less sensitive to high-frequency details and certain color variations.
    *   **Exploitation:**  Compression algorithms can selectively discard or reduce the precision of information that is less perceptible to the human eye.  This is a key aspect of lossy compression.
    *   **Example:**  High-frequency components in a noisy image might be suppressed without significantly affecting the perceived quality.
*   **Statistical Redundancy:**
    *   **Definition:** Some symbols or values occur more frequently than others in the encoded data.
    *   **Exploitation:** Entropy coding techniques (Huffman coding, arithmetic coding) assign shorter codes to more frequent symbols and longer codes to less frequent ones, resulting in overall compression.

### 4. Video Compression Standards

*   **MPEG (Moving Picture Experts Group):** A family of standards for video and audio compression.
    *   **MPEG-1:** Designed for compressing video and audio at relatively low bitrates (around 1.5 Mbit/s).  Used for Video CDs.
    *   **MPEG-2:** Used for DVD video, digital television, and other broadcast applications.  Offers higher quality than MPEG-1.  Supports interlaced video.
    *   **MPEG-4:** A more flexible standard than MPEG-2, supporting a wider range of codecs and applications. Used for streaming video and online video. (Includes Part 10/H.264 AVC)
*   **H.264/AVC (Advanced Video Coding):**
    *   **Overview:** A widely used video compression standard.  Offers significantly better compression efficiency than MPEG-2.
    *   **Key Features:**  Motion estimation with sub-pixel accuracy, variable block size motion compensation, in-loop deblocking filter.
    *   **Applications:**  Blu-ray discs, streaming video (YouTube, Netflix), video conferencing.
*   **H.265/HEVC (High Efficiency Video Coding):**
    *   **Overview:**  The successor to H.264/AVC.  Offers even higher compression efficiency (approximately twice that of H.264) for the same video quality.
    *   **Key Features:**  Larger coding units (CTUs), more sophisticated motion estimation and compensation, improved intra-prediction.
    *   **Applications:**  4K and 8K video streaming, UHD Blu-ray discs.
*   **VP9 (Video Processing 9):**
    *   An open and royalty-free video coding format developed by Google. Often used for web video.
*   **AV1 (AOMedia Video 1):**
    *   Another open and royalty-free video coding format developed by the Alliance for Open Media.  Aims to provide even better compression efficiency than HEVC.

### 5. Comparing Video Compression Techniques

| Feature             | MPEG-2          | H.264/AVC       | H.265/HEVC      |
|----------------------|-------------------|-------------------|-------------------|
| Compression Efficiency| Lower             | Higher            | Significantly Higher |
| Complexity          | Lower             | Higher            | Even Higher       |
| Block Size           | Fixed (8x8 DCT)   | Variable         | Larger Variable    |
| Motion Estimation   | Less sophisticated| More sophisticated| Most sophisticated |
| Primary Use          | DVD, Broadcast TV | Streaming, Blu-ray| 4K/8K Streaming  |

*   **Trade-offs:**
    *   **Compression Ratio:**  Higher compression ratios result in smaller file sizes but may lead to lower video quality.
    *   **Video Quality:**  Lossy compression techniques inevitably introduce some distortion.  The goal is to minimize this distortion while achieving a desired compression ratio.  Quality is often measured subjectively (visual inspection) or objectively (e.g., using PSNR, SSIM).
    *   **Computational Complexity:**  More complex compression algorithms require more processing power for encoding and decoding. This affects encoding time, playback performance, and power consumption.  H.265/HEVC offers high compression but at the cost of significantly higher computational complexity compared to H.264/AVC.

### 6. Practice Questions/Exercises

1.  **What is the primary reason for using video compression?**
    *   **Answer:** To reduce the storage space and bandwidth required for video data, making it practical for storage, transmission, and playback.

2.  **Explain the difference between lossy and lossless video compression.**
    *   **Answer:** Lossless compression retains all original data, allowing perfect reconstruction. Lossy compression discards some data to achieve higher compression, resulting in a slight quality loss.

3.  **Give an example of a video compression standard used for streaming services.**
    *   **Answer:** H.264/AVC and H.265/HEVC are widely used for streaming video services like YouTube and Netflix. VP9 and AV1 are also increasingly used.

4.  **Describe spatial redundancy and how it's exploited in video compression.**
    *   **Answer:** Spatial redundancy refers to the correlation between neighboring pixels in a frame. It's exploited by techniques like DCT, which transform the pixel data into coefficients, many of which can be discarded or quantized without significantly affecting perceived quality.

5.  **Describe temporal redundancy and how it's exploited in video compression.**
    *   **Answer:** Temporal redundancy refers to the correlation between successive frames in a video sequence. It's exploited using motion estimation and motion compensation, where only the differences between frames are encoded.

6.  **What are the trade-offs between compression ratio, video quality, and computational complexity in video compression?**
    *   **Answer:** Increasing the compression ratio generally reduces video quality. Achieving a high compression ratio and good video quality typically requires more complex compression algorithms, which demand more processing power.

7.  **True or False: H.265/HEVC offers better compression efficiency than H.264/AVC for the same video quality.**
    *   **Answer:** True

8.  **Explain psycho-visual redundancy.**
    *   **Answer:**  Psycho-visual redundancy is the redundancy in the video signal based on the limitations of the human visual system. We are less sensitive to certain frequencies, color variations and details. These redundancies are exploited to remove imperceptible information during the encoding process, resulting in smaller file sizes without significant perceived quality loss.

### 7. Important Points to Remember

*   Video compression is essential for practical video storage and transmission.
*   Lossy compression provides higher compression ratios but introduces some loss of quality.
*   Spatial and temporal redundancy are key characteristics of video signals that are exploited for compression.
*   Video compression standards like MPEG-2, H.264/AVC, and H.265/HEVC offer different levels of compression efficiency and complexity.
*   There are trade-offs between compression ratio, video quality, and computational complexity. The best approach depends on the specific application and requirements.
*   Emerging codecs like AV1 are promising greater efficiency than older codecs, and are open-source and royalty-free.