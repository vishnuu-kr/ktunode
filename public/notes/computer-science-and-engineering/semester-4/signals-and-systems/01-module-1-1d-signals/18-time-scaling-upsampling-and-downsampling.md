---
title: "Time scaling - Upsampling and downsampling"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b13b"
status: "completed"
scrapedAt: "2026-05-20T16:15:28.110Z"
---
# SIGNALS AND SYSTEMS - Module 1: 1D Signals - Time Scaling: Upsampling and Downsampling

## Learning Outcomes:

*   Understand the concept of time scaling.
*   Define and differentiate between upsampling and downsampling.
*   Perform upsampling and downsampling operations mathematically and graphically.
*   Analyze the effects of upsampling and downsampling on the signal's frequency spectrum.
*   Understand the need for anti-aliasing filters in downsampling.
*   Apply upsampling and downsampling in practical signal processing applications.

## 1. Introduction to Time Scaling

*   **Definition:** Time scaling is a transformation applied to a signal that changes the time axis. It can either compress or expand the signal in time.
*   **General Form:**  For a continuous-time signal x(t), time scaling is represented as y(t) = x(at), where 'a' is the scaling factor.  For a discrete-time signal x[n], time scaling is conceptually y[n] = x[an]. Note that x[an] for a discrete-time signal does not always make sense and requires careful treatment. This is where upsampling and downsampling come into play.

*   **Compression:** If |a| > 1, the signal is compressed in time (faster).
*   **Expansion:** If |a| < 1, the signal is expanded in time (slower).

*   **Discrete-Time Time Scaling - Upsampling and Downsampling**
    *   Due to the discrete nature of x[n], directly implementing x[an] is generally not possible unless 'a' is an integer or the reciprocal of an integer. Upsampling and downsampling are specific techniques to achieve time scaling in discrete-time signals.

## 2. Downsampling (Decimation)

*   **Definition:** Downsampling reduces the sampling rate of a discrete-time signal.  It's also known as decimation.

*   **Mathematical Representation:**
    *   Let x[n] be a discrete-time signal.  Downsampling by a factor of *M* (where *M* is a positive integer) is defined as:

        ```
        y[n] = x[Mn]
        ```
    *   This means the output signal y[n] consists of every *M*th sample of the input signal x[n].

*   **Graphical Representation:**
    *   Imagine you have a signal x[n] with samples at n = 0, 1, 2, 3, 4, 5, 6, 7...
    *   Downsampling by M = 2 means you keep only the samples at n = 0, 2, 4, 6... resulting in a signal with fewer samples.

*   **Effect on Signal Length:** If x[n] has *N* samples, y[n] will have approximately *N/M* samples.

*   **Aliasing:** Downsampling can cause aliasing if the Nyquist sampling criterion is not met *after* downsampling.  This means the original signal must be bandlimited to a frequency less than Fs/(2M), where Fs is the original sampling frequency, to prevent aliasing.

*   **Anti-Aliasing Filter:**
    *   **Necessity:**  To prevent aliasing, a low-pass filter (anti-aliasing filter) is crucial *before* downsampling.
    *   **Purpose:** The anti-aliasing filter removes high-frequency components from the signal that would fold back into the lower frequencies after downsampling.
    *   **Cutoff Frequency:**  The cutoff frequency of the anti-aliasing filter should be less than or equal to Fs/(2M).

*   **Block Diagram of Downsampling:**

    ```
    x[n]  -->  Anti-Aliasing Filter (LPF with cutoff Fs/(2M)) --> Downsampler (by M) --> y[n]
    ```

*   **Example:**
    *   Let x[n] = {1, 2, 3, 4, 5, 6, 7, 8}
    *   Downsampling by M = 2: y[n] = {1, 3, 5, 7}
    *   Downsampling by M = 3: y[n] = {1, 4, 7}

## 3. Upsampling (Interpolation)

*   **Definition:** Upsampling increases the sampling rate of a discrete-time signal.  It's also known as interpolation.

*   **Mathematical Representation:**
    *   Let x[n] be a discrete-time signal.  Upsampling by a factor of *L* (where *L* is a positive integer) is defined as:

        ```
        y[n] =  x[n/L]     if n is a multiple of L
               0          otherwise
        ```
    *   In other words, we insert *L - 1* zeros between each sample of the original signal.

*   **Graphical Representation:**
    *   Imagine you have a signal x[n] with samples at n = 0, 1, 2, 3...
    *   Upsampling by L = 2 means you insert one zero between each sample: y[n] will have samples at n = 0, 0, 1, 0, 2, 0, 3, 0...

*   **Effect on Signal Length:** If x[n] has *N* samples, y[n] will have *L*N samples.

*   **Image Frequencies:** Upsampling introduces "image frequencies" – attenuated replicas of the original signal's spectrum at multiples of the original sampling frequency.

*   **Interpolation Filter:**
    *   **Necessity:** To remove these unwanted image frequencies, a low-pass filter (interpolation filter) is applied *after* upsampling.
    *   **Purpose:** The interpolation filter smooths the signal and removes the high-frequency image frequencies.
    *   **Cutoff Frequency:** The cutoff frequency of the interpolation filter should be less than or equal to Fs/2, where Fs is the *original* sampling frequency. Ideally, it's slightly less than  (Fs * L) / (2 * L) to remove the images.

*   **Block Diagram of Upsampling:**

    ```
    x[n]  -->  Upsampler (by L) --> Interpolation Filter (LPF with cutoff Fs/2) --> y[n]
    ```

*   **Example:**
    *   Let x[n] = {1, 2, 3, 4}
    *   Upsampling by L = 2:  Intermediate signal = {1, 0, 2, 0, 3, 0, 4, 0}
    *   After applying the interpolation filter, the zeros will be replaced with interpolated values, smoothing the signal.

## 4. Applications of Upsampling and Downsampling

*   **Multirate Signal Processing:** Efficiently processing signals sampled at different rates.
*   **Audio Processing:**
    *   Changing the playback speed of audio.
    *   Converting audio between different sampling rates (e.g., 44.1 kHz to 48 kHz).
*   **Image Processing:**
    *   Resizing images (enlarging or shrinking).
    *   Implementing zoom features.
*   **Speech Processing:**
    *   Changing the pitch and duration of speech signals.
*   **Digital Communication Systems:**
    *   Implementing efficient modulation and demodulation schemes.

## 5. Key Differences & Summary

| Feature        | Downsampling (Decimation) | Upsampling (Interpolation) |
|----------------|---------------------------|-----------------------------|
| Sampling Rate | Decreases                 | Increases                   |
| Time Scale    | Compression               | Expansion                  |
| Filter        | Anti-Aliasing (before)     | Interpolation (after)      |
| Aliasing       | Potential problem        | Image frequencies          |
| Samples        | x[Mn]                      | x[n/L] (with zero insertion)|
| Application    | Reduce data size          | Improve signal quality     |

## 6. Practice Questions/Exercises

1.  **Question:** A signal x[n] = {1, 2, 3, 4, 5, 6} is downsampled by a factor of M = 3. What is the resulting signal y[n]?
    *   **Answer:** y[n] = {1, 4}

2.  **Question:** A signal x[n] = {1, 2, 3} is upsampled by a factor of L = 2. What is the signal before applying the interpolation filter?
    *   **Answer:** {1, 0, 2, 0, 3, 0}

3.  **Question:** Why is an anti-aliasing filter required before downsampling?
    *   **Answer:** To prevent high-frequency components from folding back into the lower frequencies during downsampling, causing aliasing.

4.  **Question:** Why is an interpolation filter needed after upsampling?
    *   **Answer:** To remove image frequencies that are created due to the zero-insertion process during upsampling and smooth the signal.

5. **Question:**  You have a signal sampled at 8kHz and want to reduce the sampling rate to 2kHz.  What is the downsampling factor, and what is the cutoff frequency of the required anti-aliasing filter?
    * **Answer:** Downsampling factor M = 8kHz / 2kHz = 4.  Cutoff frequency of anti-aliasing filter:  Fs/(2M) = 8kHz / (2 * 4) = 1kHz.

## 7. Important Points to Remember

*   **Aliasing is a critical concern in downsampling.** Always consider the Nyquist rate and use an anti-aliasing filter.
*   **Upsampling introduces image frequencies.** An interpolation filter is essential to remove them.
*   The cutoff frequency of the anti-aliasing and interpolation filters depends on the downsampling/upsampling factor and the original sampling frequency.
*   Downsampling reduces the amount of data, while upsampling increases it.
*   Upsampling and downsampling are fundamental operations in multirate signal processing and are widely used in various applications.
