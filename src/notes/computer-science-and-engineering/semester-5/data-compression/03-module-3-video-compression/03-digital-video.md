---
title: "Digital Video"
subject: "DATA COMPRESSION"
module: "Module 3: Video Compression :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b797"
status: "completed"
scrapedAt: "2026-05-20T16:44:43.487Z"
---
# DATA COMPRESSION - Module 3: Video Compression - Topic: Digital Video

## Learning Outcomes:

*   Understand the basic principles of digital video.
*   Describe the components of a digital video signal (luminance, chrominance).
*   Explain the concept of frame rate, resolution, and aspect ratio.
*   Differentiate between interlaced and progressive scanning.
*   Identify common video formats and standards.
*   Explain the concept of temporal redundancy and spatial redundancy in video.
*   Understand the need for video compression.

## 1. Introduction to Digital Video

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=IPvYjXofLQY) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=vBURTt97EkA) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=ecCuyq-Wprc) |

## 2. Components of a Digital Video Signal

*   **Luminance (Y):** Represents the brightness or intensity of the video signal. Also known as luma.  Carries the grayscale information.

*   **Chrominance (Cb, Cr or U, V):** Represents the color information in the video signal.
    *   **Cb (Blue-Difference):** Difference between the blue component and the luma (Y).
    *   **Cr (Red-Difference):** Difference between the red component and the luma (Y).

*   **Why use YCbCr instead of RGB?**  The human eye is more sensitive to changes in luminance than chrominance.  Therefore, chrominance data can be subsampled (reduced) without significant perceived loss in quality, leading to more efficient compression.

    *   **Example:**  YCbCr 4:2:0 subsampling reduces the amount of chrominance data by half horizontally and half vertically compared to luminance.

*   **Important Point:** Converting RGB to YCbCr allows for more efficient compression by prioritizing luminance data.

## 3. Frame Rate, Resolution, and Aspect Ratio

*   **Frame Rate:**
    *   **Definition:** The number of frames (still images) displayed per second (fps). Measured in Hertz (Hz).
    *   **Impact:** Higher frame rates result in smoother motion.
    *   **Common Frame Rates:** 24 fps (film), 25 fps (PAL standard), 30 fps (NTSC standard), 60 fps (High Frame Rate).

*   **Resolution:**
    *   **Definition:** The number of pixels in each frame, typically expressed as width x height (e.g., 1920x1080).
    *   **Impact:** Higher resolution results in sharper and more detailed images.
    *   **Common Resolutions:** SD (Standard Definition), HD (High Definition), Full HD (1920x1080), 4K (3840x2160).

*   **Aspect Ratio:**
    *   **Definition:** The ratio of the width to the height of the image (e.g., 4:3, 16:9).
    *   **Impact:** Determines the shape of the displayed image. Incorrect aspect ratio can lead to distortion (stretching or squeezing).
    *   **Common Aspect Ratios:** 4:3 (older TVs), 16:9 (widescreen TVs), 21:9 (ultrawide monitors).

*   **Example:** A video with a resolution of 1280x720 and a frame rate of 30 fps means that each frame contains 1280 pixels horizontally and 720 pixels vertically, and 30 such frames are displayed every second.

## 4. Interlaced vs. Progressive Scanning

*   **Interlaced Scanning:**
    *   **Mechanism:** Each frame is displayed in two passes: first the odd lines (field 1), then the even lines (field 2).  This is denoted with an 'i' after the resolution, such as 1080i.
    *   **Advantage:** Reduces bandwidth requirements compared to progressive scanning at the same frame rate.
    *   **Disadvantage:** Can produce motion artifacts (e.g., combing effect) due to temporal differences between fields.

*   **Progressive Scanning:**
    *   **Mechanism:** Each frame is displayed completely in one pass, displaying all lines sequentially. This is denoted with a 'p' after the resolution, such as 1080p.
    *   **Advantage:** Produces smoother and clearer images, especially for fast-moving content.
    *   **Disadvantage:** Requires more bandwidth than interlaced scanning.

*   **Example:** Television broadcasting originally used interlaced scanning to reduce bandwidth requirements.  Modern displays generally use progressive scanning for better image quality.

## 5. Common Video Formats and Standards

*   **Video Formats (Containers):** Specify how the video and audio data are stored and organized within a file.
    *   **Examples:** MP4 (.mp4), AVI (.avi), MOV (.mov), MKV (.mkv), WebM (.webm).  These are not the CODECs but rather the wrappers that contain the video/audio streams encoded by the codecs.

*   **Video Codecs (Encoders/Decoders):** Algorithms used to compress and decompress video data.
    *   **Examples:** H.264 (AVC), H.265 (HEVC), VP9, AV1, MPEG-2.

*   **Standards:**  Set of specifications for encoding, decoding, and transmitting video data. Examples include:
    *   **PAL, NTSC, SECAM:** Analog television standards.
    *   **ATSC, DVB:** Digital television standards.

*   **Important Point:** Choosing the appropriate video format and codec depends on factors such as desired compression ratio, compatibility with devices, and target application.

## 6. Temporal and Spatial Redundancy

*   **Temporal Redundancy:**
    *   **Definition:** Redundancy between successive frames in a video sequence.  Many areas in consecutive frames often remain unchanged or exhibit only small changes.
    *   **Example:** In a scene of a person sitting at a desk, the background remains relatively static across multiple frames.  Only the person's movements constitute changes.
    *   **Exploitation:**  Video compression algorithms exploit temporal redundancy by encoding only the changes between frames (inter-frame coding).

*   **Spatial Redundancy:**
    *   **Definition:** Redundancy within a single frame (image).  Adjacent pixels often have similar color and brightness values.
    *   **Example:** A large area of sky in a frame will have similar color values for nearby pixels.
    *   **Exploitation:**  Video compression algorithms exploit spatial redundancy using techniques like Discrete Cosine Transform (DCT) to group similar pixels together and reduce the amount of data needed to represent them (intra-frame coding).

*   **Key Point:**  Both temporal and spatial redundancy are fundamental to video compression.  Efficient compression algorithms minimize the amount of data required to represent a video sequence by removing these redundancies.

## 7. The Need for Video Compression

*   **Large File Sizes:** Uncompressed digital video files are extremely large, requiring significant storage space and bandwidth for transmission.

    *   **Example:** An uncompressed 1080p video at 30 fps can easily require several gigabytes of storage per minute.

*   **Bandwidth Limitations:**  Transmitting uncompressed video over networks is impractical due to bandwidth limitations.

*   **Storage Constraints:** Storing large volumes of uncompressed video data is expensive and inefficient.

*   **Purpose of Compression:** Video compression reduces the file size of video data while maintaining acceptable visual quality, enabling efficient storage, transmission, and playback.

## Practice Questions/Exercises:

1.  **What are the main components of a digital video signal and why is YCbCr preferred over RGB for compression?**
    *   *Answer:*  Luminance (Y) and Chrominance (Cb, Cr).  YCbCr is preferred because the human eye is more sensitive to luminance, so chrominance data can be subsampled to reduce file size without significantly impacting perceived visual quality.

2.  **Explain the difference between interlaced and progressive scanning and their advantages and disadvantages.**
    *   *Answer:* Interlaced scanning displays each frame in two fields (odd then even lines), reducing bandwidth but potentially causing motion artifacts. Progressive scanning displays each frame completely in one pass, resulting in smoother images but requiring more bandwidth.

3.  **What is the difference between a video format and a video codec? Provide examples of each.**
    *   *Answer:*  A video format (container) specifies how video and audio data are stored within a file (e.g., MP4, AVI). A video codec is an algorithm used to compress and decompress video data (e.g., H.264, H.265).

4.  **Define temporal and spatial redundancy in video. How are they exploited for video compression?**
    *   *Answer:* Temporal redundancy is the similarity between successive frames, while spatial redundancy is the similarity between adjacent pixels within a frame. Video compression algorithms exploit these redundancies by encoding only the changes between frames (temporal) and grouping similar pixels (spatial), reducing the overall data size.

5.  **Why is video compression necessary?**
    *   *Answer:* Video compression is essential to reduce the file size of video data, enabling efficient storage, transmission over networks with limited bandwidth, and playback on devices with limited resources. Uncompressed video files are too large for practical use in most scenarios.

## Important Points to Remember:

*   Digital video uses a sequence of digital data to represent moving images.
*   YCbCr color space allows for chrominance subsampling, improving compression.
*   Frame rate, resolution, and aspect ratio affect the quality and appearance of the video.
*   Interlaced and progressive scanning offer different trade-offs between bandwidth and image quality.
*   Video codecs and formats play a crucial role in compression and compatibility.
*   Temporal and spatial redundancy are key concepts in video compression techniques.
*   Video compression is essential for efficient storage and transmission of video data.