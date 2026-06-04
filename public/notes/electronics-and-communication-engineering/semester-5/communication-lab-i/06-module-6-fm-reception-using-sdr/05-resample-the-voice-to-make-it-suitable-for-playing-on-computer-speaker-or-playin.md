---
title: "Resample the voice to make it suitable for playing on computer speaker. or playing on compute"
subject: "COMMUNICATION LAB I"
module: "Module 6: FM reception using SDR"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecc0"
status: "completed"
scrapedAt: "2026-05-23T17:54:29.681Z"
---
# COMMUNICATION LAB I: Module 6: FM Reception using SDR

## Topic: Resample the Voice to Make it Suitable for Playing on Computer Speakers

This topic focuses on the crucial step of preparing the received FM audio signal for playback on standard computer speakers. This involves understanding and implementing **resampling**, a process that adjusts the sampling rate of a digital signal to match the requirements of the output device.

### Learning Outcomes:

*   **Understand the concept of sampling rate and its importance in digital audio.**
*   **Identify the standard sampling rates used for audio playback on computers.**
*   **Explain the process of resampling and its underlying principles.**
*   **Implement resampling techniques using Python and relevant libraries.**
*   **Evaluate the quality of the resampled audio signal.**

### Key Concepts and Definitions:

*   **Sampling:** The process of converting a continuous-time analog signal into a discrete-time digital signal by taking measurements (samples) at regular intervals.
*   **Sampling Rate (or Sampling Frequency):** The number of samples taken per second, measured in Hertz (Hz) or Kilohertz (kHz). A higher sampling rate captures more detail from the original analog signal.
*   **Nyquist-Shannon Sampling Theorem:** States that to perfectly reconstruct an analog signal from its samples, the sampling rate ($f_s$) must be at least twice the highest frequency component ($f_{max}$) present in the signal. That is, $f_s \geq 2f_{max}$. This minimum sampling rate is called the Nyquist rate.
*   **Aliasing:** An artifact that occurs when the sampling rate is too low. Higher frequencies in the analog signal are incorrectly represented as lower frequencies in the digital signal, distorting the audio.
*   **Resampling:** The process of changing the sampling rate of a digital signal. This is necessary when a signal captured at one sampling rate needs to be played back or processed at a different sampling rate.
*   **Interpolation:** The process of estimating unknown values between known data points. In resampling, interpolation is used to generate new sample points at the desired target sampling rate.
*   **Decimation:** The process of reducing the sampling rate by discarding samples.
*   **Upsampling:** Increasing the sampling rate by inserting zeros between existing samples and then interpolating.
*   **Downsampling:** Reducing the sampling rate by decimating and then interpolating to smooth out the signal.
*   **Bit Depth:** The number of bits used to represent each sample. Higher bit depth allows for a wider dynamic range and finer detail in the audio. (While not directly resampling, it's related to audio quality).
*   **Audio Codec:** Software or hardware that compresses and decompresses digital audio data. Different codecs have different sampling rate requirements.

### Why Resample Voice for Computer Playback?

When we receive FM audio using an SDR, the sampled audio signal will likely have a sampling rate determined by the FM demodulation process or the SDR's hardware. Common sampling rates for FM reception might be the intermediate frequency (IF) bandwidth or the baseband audio bandwidth, which can vary.

However, standard computer audio playback systems (sound cards, operating systems) are designed to work with specific, commonly accepted sampling rates. These include:

*   **8 kHz:** Often used for telephone audio (low quality).
*   **16 kHz:** Sometimes used for voice conferencing.
*   **44.1 kHz:** The standard for Compact Discs (CDs) and is widely supported.
*   **48 kHz:** Common in professional audio and video production.

If the received FM audio is not sampled at one of these compatible rates, it needs to be resampled to ensure proper playback without distortion or performance issues.

**Reference:**
*   **The Hobbyist's Guide to the RTL-SDR:** While this book focuses on SDR hardware and reception, it implicitly highlights the need to process the received digital signal for useful output. The digital samples need to be converted to a format playable by standard audio devices.
*   **Principles of Communication Systems Simulation with Wireless Applications:** This textbook provides foundational knowledge in digital signal processing, which is crucial for understanding resampling algorithms. The concepts of sampling, quantization, and digital filtering are discussed, all relevant to preparing signals for playback.
*   **Digital Modulations using Python:** This book is highly relevant as it will likely contain practical examples and code snippets for implementing DSP operations, including resampling, using Python libraries like `scipy.signal` and `numpy`.

### The Process of Resampling:

Resampling involves two main steps, often combined in a single operation:

1.  **Upsampling (Interpolation):**
    *   The original signal's sampling rate is increased by a factor $L$.
    *   This is achieved by inserting $L-1$ zeros between each original sample.
    *   A **low-pass filter (LPF)** is then applied to the upsampled signal. This filter removes unwanted high-frequency images created by the zero-insertion, which would otherwise cause aliasing if the signal were later downsampled.
    *   The cutoff frequency of the LPF is crucial and depends on the original and target sampling rates.

2.  **Downsampling (Decimation):**
    *   The upsampled signal's sampling rate is then reduced by a factor $M$.
    *   This is done by discarding $M-1$ samples for every $M$ samples.
    *   The upsampling and filtering step ensures that discarding samples doesn't lead to aliasing.

**Overall Resampling Factor:**
To change the sampling rate from $f_{original}$ to $f_{target}$, we can use an integer upsampling factor $L$ and an integer downsampling factor $M$. The resampling is performed by:

*   Upsampling by $L$.
*   Downsampling by $M$.

The effective resampling factor is $L/M$.
Therefore, $f_{target} = f_{original} \times (L/M)$.

We often choose $L$ and $M$ such that $L/M$ is the simplest rational representation of the ratio $f_{target} / f_{original}$.

**Example:**
Suppose we have audio sampled at $f_{original} = 22050$ Hz and want to resample it to $f_{target} = 44100$ Hz.
The ratio is $44100 / 22050 = 2$.
We can achieve this by:
*   Upsampling by $L=2$ (inserting one zero between each sample).
*   Downsampling by $M=1$ (discarding no samples).

If we have audio sampled at $f_{original} = 48000$ Hz and want to resample it to $f_{target} = 44100$ Hz.
The ratio is $44100 / 48000 = 441/480 = 147/160$.
We would choose $L=147$ and $M=160$. This is a more complex operation involving a high-order interpolation filter.

### Implementation in Python:

Python's `scipy.signal` module provides powerful functions for resampling. The most common and efficient function is `resample` and `resample_poly`.

**Using `scipy.signal.resample`:**

This function resamples a signal from one sample rate to another using the Fast Fourier Transform (FFT).

```python
import numpy as np
from scipy import signal
import soundfile as sf # For reading/writing audio files

# Load your received FM audio data (assuming it's a NumPy array)
# For demonstration, let's create a dummy signal
original_fs = 22050 # Hz (e.g., your SDR output rate)
duration = 5 # seconds
t = np.linspace(0, duration, int(original_fs * duration), endpoint=False)
# Create a dummy voice-like signal (e.g., a few sine waves with varying amplitude)
audio_signal = 0.5 * np.sin(2 * np.pi * 440 * t) + 0.2 * np.sin(2 * np.pi * 880 * t) + 0.1 * np.sin(2 * np.pi * 1760 * t)

target_fs = 44100 # Hz (standard computer playback rate)

# Calculate the number of samples in the resampled signal
num_samples_resampled = int(len(audio_signal) * target_fs / original_fs)

# Resample the signal
# The 'lowpass_x' argument can be used to control the cutoff frequency of the antialiasing filter.
# A common choice is min(original_fs, target_fs) / 2.
# However, scipy.signal.resample implicitly handles this with its FFT-based approach.
# You can specify the number of output samples directly.
resampled_audio = signal.resample(audio_signal, num_samples_resampled)

print(f"Original signal length: {len(audio_signal)} samples")
print(f"Resampled signal length: {len(resampled_audio)} samples")
print(f"Original sampling rate: {original_fs} Hz")
print(f"Target sampling rate: {target_fs} Hz")

# To play this sound, you would typically save it to a WAV file
# and then use an audio player, or use a library like sounddevice.

# Example of saving to a WAV file:
output_filename = "resampled_audio.wav"
sf.write(output_filename, resampled_audio, target_fs)
print(f"Resampled audio saved to {output_filename}")
```

**Using `scipy.signal.resample_poly`:**

This function resamples using polyphase filtering, which is generally more efficient and offers better control over the interpolation filter.

```python
import numpy as np
from scipy import signal
import soundfile as sf

# Assume audio_signal and original_fs are loaded as before
original_fs = 22050
# ... (create dummy audio_signal as above) ...
audio_signal = 0.5 * np.sin(2 * np.pi * 440 * t) + 0.2 * np.sin(2 * np.pi * 880 * t) + 0.1 * np.sin(2 * np.pi * 1760 * t)

target_fs = 44100

# Determine the upsampling (L) and downsampling (M) factors
# We need to find L and M such that target_fs / original_fs = L / M
# A common way is to use the greatest common divisor (GCD) to simplify the ratio.
from math import gcd

common_divisor = gcd(original_fs, target_fs)
L = target_fs // common_divisor
M = original_fs // common_divisor

# Resample the signal
# The 'pad' argument controls zero-padding to improve filter performance at the edges.
# 'filter' can specify a particular FIR filter, but defaults to a reasonable windowed sinc filter.
resampled_audio_poly = signal.resample_poly(audio_signal, up=L, down=M)

print(f"\nUsing resample_poly:")
print(f"Upsampling factor (L): {L}")
print(f"Downsampling factor (M): {M}")
print(f"Resampled signal length: {len(resampled_audio_poly)} samples")

# Save to WAV
output_filename_poly = "resampled_audio_poly.wav"
sf.write(output_filename_poly, resampled_audio_poly, target_fs)
print(f"Resampled audio (poly) saved to {output_filename_poly}")
```

**Important Note on `resample_poly` Factors:**
When using `resample_poly(x, up, down)`, the output sampling rate is `original_fs * up / down`. This means:
*   If `target_fs > original_fs`, you need `up > down`.
*   If `target_fs < original_fs`, you need `up < down`.

So, if `target_fs = 44100` and `original_fs = 48000`, then `target_fs / original_fs = 44100/48000 = 147/160`.
Therefore, `up = 147` and `down = 160`.

### Adjusting for Playing on Computer Speakers:

After resampling the audio to a standard rate like 44.1 kHz or 48 kHz, it's also important to consider:

*   **Audio Format:** Most audio players expect audio data in a specific format (e.g., floating-point numbers between -1.0 and 1.0, or signed 16-bit integers). The `soundfile` library handles this conversion when writing WAV files.
*   **Number of Channels:** FM audio is typically mono. If your SDR setup outputs stereo, you might need to select one channel or average them.
*   **Bit Depth:** While resampling changes the sampling rate, the bit depth (resolution of each sample) of the original signal is usually preserved unless explicitly changed during processing. Standard playback often uses 16-bit or 24-bit depth.
*   **Volume Control:** The amplified audio signal from the SDR might need to be normalized or attenuated before playing to avoid clipping or to match comfortable listening levels.

**Reference:**
*   **Digital Modulations using Python:** This book is invaluable for understanding how to implement these DSP tasks. It will likely guide you through the use of `numpy` for array manipulation and `scipy.signal` for filtering and resampling.

### Aligning with Course Outcomes:

*   **CO1: Setup simple prototype circuits for waveform coding and digital modulation techniques working in a team.**
    *   While this topic is primarily software-based, understanding the SDR's role in digitizing and providing the raw FM signal is an indirect connection. The raw audio stream is what needs to be processed.
*   **CO2: Simulate the error performance of a digital communication system using standard binary and M-ary modulation schemes.**
    *   This topic doesn't directly involve error performance simulation but builds upon the foundation of signal processing that is essential for such simulations. Understanding sampling rates and their impact is crucial for accurate simulation.
*   **CO3: Develop hands-on skills to emulate a communication system with software-design-radio working in a team.**
    *   **Direct Alignment:** This is the most direct alignment. Resampling is a critical step in the SDR signal processing chain to make received audio usable. By implementing resampling, you are gaining hands-on experience in emulating the "reception" part of an SDR communication system, preparing the signal for the "output" (speaker).

### Important Points to Remember:

*   **Sampling Rate is King:** Always know the sampling rate of your incoming signal and the target sampling rate for your output.
*   **Aliasing is the Enemy:** Insufficient sampling rates lead to aliasing, which distorts the audio. Proper antialiasing filters (often implicit in resampling functions) are essential.
*   **Choose the Right Tool:** `scipy.signal.resample` (FFT-based) and `scipy.signal.resample_poly` (polyphase) are your go-to functions in Python. `resample_poly` is often preferred for its filter control and efficiency.
*   **Determine L and M Correctly:** For `resample_poly`, accurately calculating the upsampling ($L$) and downsampling ($M$) factors based on the ratio of target to original sampling rates is key.
*   **Audio Quality:** While resampling enables playback, the quality of the original received signal (affected by SNR, filtering, demodulation) will ultimately determine the quality of the played-back audio.
*   **Libraries are Your Friends:** Leverage libraries like `numpy` for numerical operations and `scipy.signal` for advanced signal processing. `soundfile` is excellent for handling audio file I/O.

### Practice Questions:

1.  **Question:** What is the minimum sampling rate required to accurately capture an audio signal with a maximum frequency component of 15 kHz?
    **Answer:** According to the Nyquist-Shannon Sampling Theorem, the sampling rate must be at least twice the maximum frequency. So, $f_s \geq 2 \times 15 \text{ kHz} = 30 \text{ kHz}$.

2.  **Question:** You have an FM audio signal sampled at 11.025 kHz. You need to play it back on a computer that expects audio at 44.1 kHz.
    a) What is the resampling ratio required?
    b) If using `scipy.signal.resample_poly`, what values would you use for `up` and `down`?
    c) Briefly explain why resampling is necessary in this scenario.
    **Answer:**
    a) The resampling ratio is $44.1 \text{ kHz} / 11.025 \text{ kHz} = 4$.
    b) To achieve a ratio of 4, you can use `up=4` and `down=1`. (Alternatively, you could use `up=2, down=0.5` which is not directly possible with integers but conceptually represents the same increase, or `up=8, down=2` etc. The simplest integer ratio is usually preferred).
    c) Resampling is necessary because the original sampling rate (11.025 kHz) is not a standard rate that most computer audio playback systems are optimized to handle. Resampling to 44.1 kHz ensures compatibility and proper playback without potential issues or distortions.

3.  **Question:** What is aliasing, and how can it be prevented during resampling?
    **Answer:** Aliasing is an artifact where high-frequency components in an analog signal are incorrectly represented as lower frequencies when sampled at a rate below the Nyquist rate. It can be prevented during resampling by using appropriate interpolation filters (low-pass filters) before downsampling or as part of the resampling process, ensuring that frequencies above half the target sampling rate are removed.

4.  **Question:** You have received FM audio using an SDR that sampled it at 24 kHz. You want to play it back at the common CD quality sampling rate of 44.1 kHz. You decide to use `scipy.signal.resample_poly`.
    a) Calculate the simplest integer values for `up` and `down` for `resample_poly`.
    b) What function would you use to save the processed audio into a WAV file?
    **Answer:**
    a) The ratio is $44.1 \text{ kHz} / 24 \text{ kHz} = 44100 / 24000 = 441 / 240 = 147 / 80$.
       So, `up = 147` and `down = 80`.
    b) You would use the `sf.write()` function from the `soundfile` library.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### Further Exploration (Textbook References):

*   **The Hobbyist's Guide to the RTL-SDR:** Chapter 3 on "Digital Signal Processing" might touch upon the underlying concepts of sampling and digital audio, even if not explicitly detailing resampling for playback.
*   **Principles of Communication Systems Simulation with Wireless Applications:** Chapters related to digital signal processing, sampling, and interpolation will provide a deeper theoretical understanding of the algorithms used in resampling. Look for sections on Digital Filters and Sampling Rate Conversion.
*   **Digital Modulations using Python:** This book will be your practical guide. Look for chapters on Audio Signal Processing or DSP Techniques where resampling examples using `scipy` are likely demonstrated.

This comprehensive set of notes should provide a solid foundation for understanding and implementing voice resampling for computer playback in your Communication Lab I course.