---
title: "Review of Analog Television: Scanning, Horizontal and Vertical Synchronization, Color information, Transmission methods. NTSC and PAL standards."
subject: "ENTERTAINMENT ELECTRONICS"
module: "Module 1: Review of Analog Television: Scanning, Horizontal and Vertical Synchronization, Color information, Transmission methods. NTSC and PAL standards."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff012"
status: "completed"
scrapedAt: "2026-05-23T18:00:51.474Z"
---
# Module 1: Review of Analog Television

## 1. Introduction to Analog Television

Analog television was the dominant form of television broadcasting for much of the 20th century. It transmits video and audio signals in an analog format, meaning the information is represented by continuous, varying waveforms. This contrasts with digital television, which uses discrete values.

### Key Concepts:
*   **Analog Signal:** A signal that varies continuously over time, representing information.
*   **Bandwidth:** The range of frequencies occupied by a signal.
*   **Modulation:** The process of encoding information onto a carrier wave.

### Importance for Entertainment Electronics:
Understanding analog television is crucial for appreciating the evolution of video technology and for comprehending the challenges and limitations that led to the development of digital television. Many older analog systems and components are still relevant in certain contexts.

## 2. Scanning Process

To display a video image on a screen, the electron beam in a Cathode Ray Tube (CRT) television must scan across the screen line by line.

### Key Concepts:
*   **Picture Element (Pixel):** The smallest unit of a digital image. In analog, this is analogous to a tiny spot of light on the screen.
*   **Horizontal Scan:** The movement of the electron beam from left to right across the screen.
*   **Vertical Scan:** The movement of the electron beam from the top to the bottom of the screen.
*   **Frame:** A complete image.
*   **Field:** Half of a frame, containing alternating lines.

### Interlaced Scanning:
To reduce flicker and save bandwidth, analog televisions typically used interlaced scanning.

*   **How it works:** The screen is divided into two fields. The first field displays all the odd-numbered lines, and the second field displays all the even-numbered lines. These two fields are then interleaved to form a complete frame.
*   **Advantages:**
    *   Reduces flicker by refreshing the screen twice per frame.
    *   Saves bandwidth by only transmitting half the lines at a time.
*   **Disadvantages:**
    *   Can cause motion artifacts (e.g., "combing" effect) when there is significant movement between fields.
*   **Scan Rate:** The number of lines scanned per frame and the number of frames displayed per second. For example, NTSC uses 525 lines and 30 frames per second (interlaced, resulting in 60 fields per second), while PAL uses 625 lines and 25 frames per second (interlaced, resulting in 50 fields per second).

**Reference:** *Newnes Guide to Television and Video Technology* by K F Ibrahim often details the mechanics of CRT scanning.

## 3. Horizontal and Vertical Synchronization

Synchronization signals are essential for the receiver's electron beam to correctly trace the image being transmitted.

### Key Concepts:
*   **Synchronization Pulses:** Short bursts of signal that tell the receiver's circuitry when to start a new line or a new frame.
*   **Horizontal Sync (H-sync):** A pulse that signals the end of a horizontal scan line and the beginning of the next.
*   **Vertical Sync (V-sync):** A pulse that signals the end of a field and the beginning of the next field.

### Synchronization in Scanning:
*   **Horizontal Blanking Interval (HBI):** A period after the horizontal scan line is completed, during which the electron beam is switched off and moved back to the left side of the screen to start the next line. The H-sync pulse is embedded within this interval.
*   **Vertical Blanking Interval (VBI):** A period after a field is completed, during which the electron beam is switched off and moved back to the top left of the screen to start the next field. The V-sync pulse is embedded within this interval, along with other data like closed captions and teletext.

**How it works:** The TV receiver's scanning circuits are designed to respond to these pulses. When a horizontal sync pulse is received, the receiver knows to start drawing the next line. When a vertical sync pulse is received, it knows to start drawing the next field.

## 4. Color Information

Transmitting color information alongside the black and white (luminance) signal presented a significant challenge.

### Key Concepts:
*   **Luminance (Y):** The brightness or black-and-white component of the image. This is derived from the original black-and-white signal.
*   **Chrominance (C):** The color information, consisting of hue and saturation.
*   **Subcarrier Frequency:** A high-frequency carrier used to transmit the chrominance information separately from the luminance. This allows the color signal to be more easily filtered out by black-and-white TVs.
*   **Color Modulator:** Circuits in the transmitter that combine hue and saturation information onto the subcarrier.
*   **Color Demodulator:** Circuits in the receiver that extract the color information from the subcarrier.

### How Color Information is Transmitted:
1.  **Color Difference Signals:** The human eye is more sensitive to luminance than to color. Therefore, color information is transmitted as color-difference signals (e.g., R-Y and B-Y, or I and Q in NTSC).
2.  **Modulation onto a Subcarrier:** These color-difference signals are modulated onto a subcarrier frequency. The modulation scheme used is typically quadrature amplitude modulation (QAM), where both the amplitude and phase of the subcarrier are used to represent color information.
3.  **Frequency Interleaving:** The color subcarrier frequency is chosen to be within the video bandwidth but positioned between the spectral sidebands of the luminance signal. This minimizes interference between the luminance and chrominance signals.

**Reference:** *Digital Video and HD Algorithms and Interfaces* by C. Poynton discusses luminance and chrominance relationships extensively.

## 5. Transmission Methods

Analog television signals were transmitted over various media.

### Key Concepts:
*   **Broadcast Transmission:** Using radio waves to transmit signals over the air.
*   **Cable Television:** Transmitting signals through coaxial cables.
*   **Satellite Television:** Transmitting signals via geostationary satellites.

### Analog Transmission Techniques:
*   **Amplitude Modulation (AM):** Used for the luminance signal. The amplitude of the carrier wave is varied in proportion to the luminance information.
*   **Frequency Modulation (FM):** Primarily used for the audio signal.
*   **Vestigial Sideband (VSB) Modulation:** A modified form of AM used for video transmission. One of the sidebands is largely removed to conserve bandwidth, while a vestige of the removed sideband is retained to facilitate easier demodulation at the receiver. This was a key method for terrestrial analog broadcasts.

**Reference:** *Digital Video and Audio Broadcasting Technology: A Practical Engineering Guide* by W. Fischer provides insights into modulation techniques, even when discussing the transition to digital.

## 6. NTSC and PAL Standards

NTSC and PAL are the two most prominent analog television standards used around the world. They differ in several key aspects, primarily related to picture resolution, frame rate, and color transmission.

### NTSC (National Television System Committee)

*   **Countries:** Primarily used in North America (USA, Canada, Mexico), parts of South America, and some Asian countries.
*   **Key Specifications:**
    *   **Lines per frame:** 525
    *   **Fields per second:** 59.94 (interlaced, often rounded to 60 Hz)
    *   **Frames per second:** 29.97 (interlaced, 30 frames / 1.001)
    *   **Aspect Ratio:** 4:3
    *   **Color Subcarrier Frequency:** 3.58 MHz
    *   **Bandwidth:** ~6 MHz per channel
*   **Color Transmission:** Uses a phase-alternating line (PAL) system, also known as "hue-controlled" or "automatic phase control" (APC). The phase of the color subcarrier is reversed on alternate lines. This helps to cancel out phase errors that can occur during transmission, improving color accuracy and reducing color distortion.
*   **Pros:** Higher frame rate (smoother motion perceived by some).
*   **Cons:** Prone to color shifts and hue errors if the phase control is not perfectly synchronized. Often referred to humorously as "Never The Same Color."

### PAL (Phase Alternating Line)

*   **Countries:** Widely used in Europe, Australia, Africa, and parts of Asia and South America.
*   **Key Specifications:**
    *   **Lines per frame:** 625
    *   **Fields per second:** 50 (interlaced, 50 Hz)
    *   **Frames per second:** 25 (interlaced)
    *   **Aspect Ratio:** 4:3
    *   **Color Subcarrier Frequency:** 4.43 MHz
    *   **Bandwidth:** ~8 MHz per channel
*   **Color Transmission:** Uses a system where the phase of the color subcarrier is reversed on alternate lines. This "alternating line" aspect is crucial.
*   **Pros:** Better color stability and accuracy compared to NTSC due to the alternating phase correction. Less prone to color shifts.
*   **Cons:** Lower frame rate, which can sometimes result in slightly less smooth motion compared to NTSC.

### Key Differences Summarized:

| Feature              | NTSC                               | PAL                                  |
| :------------------- | :--------------------------------- | :----------------------------------- |
| **Lines per Frame**  | 525                                | 625                                  |
| **Frame Rate**       | 29.97 fps (approx. 30 fps)         | 25 fps                               |
| **Field Rate**       | 59.94 Hz (approx. 60 Hz)           | 50 Hz                                |
| **Color Subcarrier** | 3.58 MHz                           | 4.43 MHz                             |
| **Color System**     | Hue controlled (APC), Phase reversal per line | Phase Alternating Line (PAL)         |
| **Bandwidth**        | ~6 MHz                             | ~8 MHz                               |
| **Color Stability**  | More prone to color shifts         | More stable                          |
| **Motion Smoothness**| Perceived as smoother              | Perceived as slightly less smooth    |

**Reference:** *Understanding Digital Television* by Lars-Ingemar Lundström, while focused on digital, often provides historical context for analog standards like NTSC and PAL.

## 7. Relevance to Course Outcomes

*   **CO1: Explain packetized streaming of digital media happens in the field of infotainment industry.** (Knowledge Level: K2)
    *   While this module focuses on analog, understanding the limitations of analog bandwidth and transmission efficiency provides context for why digital packetized streaming became necessary and advantageous. The need for efficient delivery of high-resolution video and audio pushed the industry towards digital.
*   **CO2: Realise the critical aspects of DVB and DAB standards used for media broadcasting** (Knowledge Level: K2)
    *   The analog standards (NTSC, PAL) established the fundamental concepts of video signal transmission, including scanning, synchronization, and bandwidth allocation. DVB (Digital Video Broadcasting) and DAB (Digital Audio Broadcasting) are digital evolutions that build upon these fundamental principles but utilize digital encoding, modulation, and error correction for greater efficiency and robustness.
*   **CO3: Apply video coding/compression algorithms are used to produce high-definition video in MPEG-4 standard** (Knowledge Level: K3)
    *   Analog television had limited bandwidth for its image quality. High-definition video, as delivered by digital standards like MPEG-4, requires significant compression to fit within available bandwidths. Understanding the bandwidth constraints of analog TV highlights the necessity and sophistication of modern digital video compression techniques.
*   **CO4: Describe modern display technologies for video reproduction** (Knowledge Level: K2)
    *   Analog television relied on CRT technology. The development of flat-panel displays (LCD, OLED, etc.) and their digital interfaces is a direct successor to the analog era, offering higher resolution, better energy efficiency, and new form factors. This review of analog provides a historical perspective on the display evolution.

## Practice Questions and Answers

**Question 1:** What is the primary advantage of interlaced scanning in analog television?
    a) Improved picture sharpness
    b) Reduced flicker and saved bandwidth
    c) Better color reproduction
    d) Faster scanning speed

**Answer:** b) Reduced flicker and saved bandwidth. Interlaced scanning refreshes the screen twice per frame (once for odd lines, once for even lines), making motion appear smoother and reducing perceived flicker. It also halves the amount of information to be transmitted per field, saving bandwidth.

**Question 2:** In analog television, what is the role of the horizontal sync pulse?
    a) To signal the end of a field and the start of a new one.
    b) To carry audio information.
    c) To signal the end of a scan line and the start of the next.
    d) To transmit color information.

**Answer:** c) To signal the end of a scan line and the start of the next. The horizontal sync pulse is embedded in the horizontal blanking interval and tells the receiver's electron beam to return to the left side of the screen to begin scanning the next line.

**Question 3:** Which analog television standard is known for its greater color stability and why?
    a) NTSC, due to its higher frame rate.
    b) PAL, due to its Phase Alternating Line (PAL) system.
    c) NTSC, due to its wider bandwidth.
    d) PAL, due to its higher resolution.

**Answer:** b) PAL, due to its Phase Alternating Line (PAL) system. The PAL system reverses the phase of the color subcarrier on alternate lines, which effectively cancels out phase errors, leading to more stable and accurate color reproduction.

**Question 4:** What type of modulation is typically used for the luminance signal in analog television broadcasting?
    a) Frequency Modulation (FM)
    b) Amplitude Modulation (AM)
    c) Pulse Code Modulation (PCM)
    d) Phase Modulation (PM)

**Answer:** b) Amplitude Modulation (AM). Specifically, Vestigial Sideband (VSB) modulation, which is a modified form of AM, was used to transmit the video signal efficiently.

**Question 5:** Briefly explain the difference between Luminance (Y) and Chrominance (C) in color television.

**Answer:** Luminance (Y) represents the brightness or black-and-white component of the image, which is what a black-and-white television would display. Chrominance (C) represents the color information, specifically the hue and saturation of the colors. This separation allows for compatibility with black-and-white televisions and more efficient use of bandwidth.

## Important Points to Remember

*   **Analog vs. Digital:** Analog signals are continuous waveforms, while digital signals are discrete values.
*   **Scanning:** The process of painting an image on the screen line by line using an electron beam. Interlaced scanning was key to analog TV.
*   **Synchronization:** Crucial for aligning the receiver's scanning with the transmitter's signal (H-sync and V-sync).
*   **Color Transmission:** Achieved by encoding color difference signals onto a subcarrier frequency, which is then modulated.
*   **NTSC vs. PAL:** Major analog standards differing in resolution, frame rate, color system, and bandwidth. PAL generally offers better color stability.
*   **Bandwidth Limitations:** A significant constraint of analog TV that drove the need for digital broadcasting.
*   **Historical Context:** Understanding analog TV provides the foundation for appreciating the advancements in digital television technologies.

This concludes the review of analog television for Module 1. This foundational knowledge is essential for understanding the subsequent modules on digital broadcasting and modern video technologies.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
