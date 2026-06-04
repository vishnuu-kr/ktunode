---
title: "Connect microphone to the analog port and read in real time speech."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 5: FFT of signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec49"
status: "completed"
scrapedAt: "2026-05-23T17:56:08.438Z"
---
# DIGITAL SIGNAL PROCESSING LAB - Module 5: FFT of Signals

## Topic: Connecting a Microphone to an Analog Port and Reading Real-Time Speech

### 1. Introduction

This lab topic focuses on acquiring real-time audio data from a microphone, which is a crucial step in many digital signal processing applications, especially those involving speech analysis and manipulation. We will explore how to interface a microphone with a suitable analog-to-digital converter (ADC) and then read the digital samples into a processing environment. This forms the basis for applying techniques like the Fast Fourier Transform (FFT) to analyze the frequency content of speech.

### 2. Learning Outcomes Covered

*   **Acquiring Real-Time Audio Data:** Understanding the process of capturing sound using a microphone and converting it into a digital format.
*   **Understanding Analog-to-Digital Conversion (ADC):** Grasping the fundamental principles of sampling and quantization.
*   **Microphone Interfacing:** Familiarizing with common microphone types and how they connect to audio input ports.
*   **Reading Digital Samples:** Learning how to access and process the stream of digital audio data.
*   **Fundamentals of Real-Time Processing:** Recognizing the challenges and considerations for processing data as it arrives.

### 3. Key Concepts and Definitions

#### 3.1 Microphones

*   **Definition:** A transducer that converts sound waves into electrical signals.
*   **Types:**
    *   **Condenser Microphones:** Require external power (phantom power or battery) and are generally more sensitive and produce a flatter frequency response. They work by a capacitor where sound waves change the distance between two plates, altering capacitance.
    *   **Dynamic Microphones:** Do not require external power. They work based on electromagnetic induction, where sound waves move a diaphragm attached to a coil within a magnetic field, generating an electrical current.
*   **Output Signal:** Microphones typically produce an analog voltage signal that is proportional to the sound pressure.

#### 3.2 Analog-to-Digital Conversion (ADC)

*   **Definition:** The process of converting a continuous analog signal into a discrete digital signal. This involves two main steps:
    *   **Sampling:** The continuous analog signal is measured at regular intervals in time.
        *   **Sampling Rate ($F_s$):** The number of samples taken per second. It's measured in Hertz (Hz). The Nyquist-Shannon sampling theorem states that to perfectly reconstruct a signal, the sampling rate must be at least twice the highest frequency component in the signal (Nyquist rate = $2F_{max}$).
        *   **Sampling Period ($T_s$):** The time interval between consecutive samples, $T_s = 1/F_s$.
    *   **Quantization:** The sampled analog values are rounded to the nearest value from a finite set of discrete levels.
        *   **Quantization Levels:** The number of discrete values the ADC can represent. This is determined by the **bit depth** of the ADC.
        *   **Bit Depth:** The number of bits used to represent each sample. A higher bit depth leads to finer resolution and less quantization error. For example, an 8-bit ADC has $2^8 = 256$ quantization levels, while a 16-bit ADC has $2^{16} = 65,536$ levels.
        *   **Quantization Error:** The difference between the actual analog sample value and its quantized digital representation.

#### 3.3 Audio Interfaces and Analog Ports

*   **Audio Interfaces:** Dedicated hardware devices that provide high-quality analog-to-digital and digital-to-analog conversion, along with microphone preamplifiers and connectivity options.
*   **Analog Ports:** The physical connection points on a computer or audio interface where microphones or other audio devices are plugged in. These are typically:
    *   **Microphone Input (Mic In):** Designed for low-level microphone signals, often with built-in preamplification and phantom power for condenser microphones.
    *   **Line Input (Line In):** Designed for higher-level signals from audio sources like synthesizers or audio interfaces.

#### 3.4 Real-Time Processing

*   **Definition:** Processing data as it is acquired, with minimal delay. This is in contrast to offline processing where the entire dataset is available before processing begins.
*   **Challenges:** Requires efficient algorithms, adequate processing power, and careful management of data buffers to avoid dropouts or latency.

### 4. Connecting a Microphone and Reading Real-Time Speech

This section outlines the practical steps and considerations. The specific implementation will depend on the hardware and software environment used in your lab.

#### 4.1 Hardware Setup

1.  **Microphone Selection:** Choose a microphone suitable for speech. Dynamic microphones are generally robust for general-purpose use, while condenser microphones might offer better fidelity if a clean signal is desired.
2.  **Connection:**
    *   **To a Computer's Built-in Sound Card:**
        *   Connect the microphone to the "Mic In" port, usually a 3.5mm jack (often pink).
        *   If using a condenser microphone, ensure your sound card provides phantom power (typically 48V) or use a battery-powered condenser mic.
    *   **To an External Audio Interface:**
        *   Connect the microphone to the appropriate input on the audio interface (e.g., XLR for professional microphones).
        *   Configure phantom power on the audio interface if using a condenser microphone.
        *   Connect the audio interface to your computer via USB, Thunderbolt, etc.
3.  **Audio Interface Configuration (if used):**
    *   Ensure the audio interface is recognized by your operating system and selected as the default input device.
    *   Adjust microphone gain (preamp level) to ensure a healthy signal without clipping (distortion due to overpowering the input).

#### 4.2 Software Setup and Data Acquisition

The process of reading real-time speech into a processing environment (e.g., MATLAB, Python with libraries like `sounddevice` or `PyAudio`) involves these general steps:

1.  **Selecting the Audio Input Device:** Specify which audio input device to use if multiple are available.
2.  **Configuring Audio Parameters:**
    *   **Sampling Rate ($F_s$):** Choose a suitable sampling rate. For speech, 8 kHz is often sufficient for intelligibility, while 16 kHz or 44.1 kHz (CD quality) provide higher fidelity.
    *   **Number of Channels:** Typically 1 for mono speech.
    *   **Data Format/Bit Depth:** Specify the format of the samples (e.g., 16-bit integers or floating-point numbers).
3.  **Creating an Audio Input Stream:** Set up a stream to continuously read audio data from the selected input device.
4.  **Reading Audio Buffers:** Audio data is typically read in small blocks or "buffers." The size of these buffers affects latency and processing overhead.
5.  **Processing the Buffer:** Once a buffer of audio data is read, it can be processed (e.g., for FFT analysis).
6.  **Looping:** Repeat the process of reading and processing buffers to capture continuous speech.

#### 4.3 Example in MATLAB (Conceptual)

*   **Reference:** This aligns with concepts in Ingle & Proakis, especially when discussing signal acquisition for analysis.

```matlab
% --- Configuration ---
Fs = 16000; % Sampling frequency (Hz) - adjust as needed for your microphone/system
duration = 5; % Duration of recording in seconds
numChannels = 1; % Mono recording
% --- Check available audio devices (optional) ---
% audioDevice = audiodevinfo; % Not a direct function, but concept applies

% --- Create an audio input object ---
% The exact syntax might vary slightly with MATLAB versions or specific hardware toolboxes.
% For simplicity, we assume a default audio input is configured.
try
    % Try to create an audio recorder object
    recorder = audiorecorder(Fs, 8, numChannels); % Fs, bits per sample, num channels

    % --- Record Audio ---
    disp('Speak into the microphone...');
    recordblocking(recorder, duration); % Record for the specified duration
    disp('Recording finished.');

    % --- Get the recorded audio data ---
    audioData = getaudiodata(recorder);

    % --- Now you have the audioData in a MATLAB array ---
    % You can process this data, e.g., plot it or compute its FFT.

    % Example: Plot the waveform
    figure;
    plot(audioData);
    title('Recorded Speech Waveform');
    xlabel('Sample Number');
    ylabel('Amplitude');
    grid on;

    % Example: Compute and plot the FFT (as per Module 5's focus)
    % This part directly links to subsequent FFT exercises.
    N = length(audioData); % Number of samples
    Y = fft(audioData);
    P2 = abs(Y/N);
    P1 = P2(1:N/2+1);
    P1(2:end-1) = 2*P1(2:end-1);
    f = Fs*(0:(N/2))/N;

    figure;
    plot(f, P1);
    title('Single-Sided Amplitude Spectrum of Speech');
    xlabel('Frequency (Hz)');
    ylabel('|P1(f)|');
    grid on;

catch ME
    fprintf('Error acquiring audio: %s\n', ME.message);
    fprintf('Please ensure your microphone is connected and configured correctly.\n');
    fprintf('You might need to install the Audio Toolbox or configure audio input devices in your system.\n');
end

% --- Important Notes on MATLAB Audio Acquisition ---
% - The `audiorecorder` object is used for recording. For continuous streams
%   in real-time processing, you might use `audioinput` or other
%   specialized functions/toolboxes depending on your setup and needs.
% - `recordblocking` is a simple way to record for a fixed duration. For
%   true real-time processing, you'd typically use a callback function
%   or a loop that reads smaller buffers.
% - Ensure you have the necessary MATLAB toolboxes (e.g., Audio Toolbox) installed.
% - System audio device configuration is crucial.
```

#### 4.4 Example in Python using `sounddevice` (Conceptual)

*   **Reference:** This aligns with concepts in Downey's "Think DSP," particularly in understanding how to get data into a Python environment for processing.

```python
import sounddevice as sd
import numpy as np
import matplotlib.pyplot as plt
import scipy.fft

# --- Configuration ---
samplerate = 16000  # Sampling frequency (Hz)
duration = 5       # Duration of recording in seconds
channels = 1       # Mono recording
dtype = 'int16'    # Data type (e.g., 16-bit integers)

print("Speak into the microphone...")

try:
    # --- Record Audio ---
    # 'sd.rec' records for a specified duration and returns the data
    audio_data = sd.rec(int(samplerate * duration), samplerate=samplerate, channels=channels, dtype=dtype)
    sd.wait()  # Wait until recording is finished

    print("Recording finished.")

    # --- Process the audio data ---

    # Example: Plot the waveform
    plt.figure(figsize=(10, 4))
    plt.plot(audio_data)
    plt.title('Recorded Speech Waveform')
    plt.xlabel('Sample Number')
    plt.ylabel('Amplitude')
    plt.grid(True)
    plt.show()

    # Example: Compute and plot the FFT
    N = len(audio_data)  # Number of samples
    # Compute FFT using SciPy
    yf = scipy.fft.fft(audio_data)
    # Compute the single-sided spectrum
    xf = scipy.fft.fftfreq(N, 1 / samplerate)[:N//2]
    P1 = 2.0/N * np.abs(yf[:N//2])

    plt.figure(figsize=(10, 4))
    plt.plot(xf, P1)
    plt.title('Single-Sided Amplitude Spectrum of Speech')
    plt.xlabel('Frequency (Hz)')
    plt.ylabel('|P1(f)|')
    plt.grid(True)
    plt.show()

except Exception as e:
    print(f"Error acquiring audio: {e}")
    print("Please ensure your microphone is connected and configured correctly.")
    print("You might need to install the 'sounddevice' and 'PyAudio' libraries (pip install sounddevice numpy matplotlib scipy).")

# --- Important Notes on Python Audio Acquisition ---
# - 'sounddevice' is a popular library for cross-platform audio I/O.
# - 'sd.rec()' records audio. For real-time processing, you would typically
#   use 'sd.InputStream' with a callback function that processes data in chunks.
# - Ensure you have the necessary libraries installed.
```

### 5. Relating to Course Outcomes

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2):** While this topic is about *acquiring* speech, understanding the sampled digital data is essential. The acquired speech waveform is a complex signal that we can later compare to generated basic waveforms (e.g., sine waves for testing).
*   **CO2: Verify the properties of DFT (Knowledge Level: K2):** Real-time speech data provides a practical signal to apply DFT (and FFT) to. We can observe how the frequency spectrum changes as someone speaks different phonemes or words, and potentially use this to demonstrate spectral analysis properties.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2):** This is a core outcome for this topic. Connecting a microphone, understanding its output, and interacting with the computer's audio input system directly addresses this.
*   **CO4: Implement LTI systems (Knowledge Level: K3):** Once speech is acquired, it can be passed through LTI systems (e.g., filters). This topic lays the groundwork by providing the input signal.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3):** Similar to CO4, having acquired speech data is a prerequisite for applying filters to it for tasks like noise reduction or speech enhancement.

### 6. Important Points to Remember

*   **Sampling Rate is Critical:** Choose an appropriate sampling rate based on the frequency content of speech (typically up to 4 kHz for intelligibility, so 8 kHz is a minimum, but higher rates like 16 kHz or 44.1 kHz are common for better quality).
*   **Microphone Gain:** Adjust microphone gain carefully to avoid clipping (distortion) or excessively low signal levels.
*   **Data Format:** Understand the data format (e.g., integer or floating-point, bit depth) of the acquired samples, as it affects precision and subsequent processing.
*   **Real-Time vs. Blocking:** For actual real-time analysis, you'll need to process data in small, continuous chunks rather than blocking the entire program until a long recording is finished. This involves using callbacks or iterative buffer reading.
*   **Hardware and Software Dependencies:** The specific code and setup will vary depending on your operating system, sound card drivers, audio interface, and the DSP software/libraries you are using (MATLAB, Python, etc.).
*   **Nyquist Theorem:** Always keep the Nyquist-Shannon sampling theorem in mind to avoid aliasing when sampling signals.

### 7. Practice Questions and Exercises

1.  **Question:** What is the minimum sampling rate required to accurately capture human speech, assuming the highest significant frequency component is 4 kHz?
    **Answer:** According to the Nyquist-Shannon sampling theorem, the sampling rate must be at least twice the highest frequency component. Therefore, the minimum sampling rate is $2 \times 4 \text{ kHz} = 8 \text{ kHz}$.

2.  **Question:** Explain the role of quantization in the ADC process and how bit depth affects it.
    **Answer:** Quantization is the process of mapping a continuous range of analog values to a finite set of discrete digital levels. The bit depth determines the number of these discrete levels. For example, an N-bit ADC has $2^N$ quantization levels. A higher bit depth (more bits) means more levels, leading to finer resolution and a smaller quantization error, resulting in a more accurate digital representation of the analog signal.

3.  **Exercise:** Using your chosen DSP software (MATLAB or Python), record 5 seconds of your voice speaking your name. Plot the waveform of the recorded speech.
    *   **Expected Outcome:** A plot showing the amplitude of the audio signal over time. You should see variations corresponding to your voice.

4.  **Exercise:** After recording your voice as in Exercise 3, compute and plot the single-sided amplitude spectrum of the recorded speech. Identify the dominant frequency components.
    *   **Expected Outcome:** A plot showing the amplitude of different frequencies present in your voice. For speech, you'll typically see energy concentrated in the lower frequencies (below 1 kHz) and some harmonics extending higher.

5.  **Question:** What is the primary difference between using `recordblocking` (MATLAB) and setting up an `InputStream` with a callback (Python `sounddevice`) for real-time audio processing?
    **Answer:** `recordblocking` is designed for recording a fixed duration, pausing execution until the recording is complete. For true real-time processing, where you want to analyze audio *as it arrives* without long delays, you need a mechanism like `InputStream` with a callback. The callback function is executed automatically whenever a new buffer of audio data is available, allowing for continuous processing without blocking the main program flow.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. Textbook and Reference Book Connections

*   **Ingle & Proakis (Digital Signal Processing using Matlab):** This textbook provides the foundational understanding of signals, sampling, and the DFT/FFT, which are directly applied when processing acquired audio. Chapters on sampling, analog-to-digital conversion, and the DFT will be highly relevant. The examples in the book will guide you on how to implement acquisition and processing in MATLAB.
*   **Downey (Think DSP: Digital Signal Processing using Python):** Downey's book excels at making DSP concepts accessible, often with practical Python examples. His approach to reading audio data, using libraries like `sounddevice` or `PyAudio`, and performing FFT analysis on that data directly supports this lab topic. Chapters on signal acquisition and spectrum analysis will be key.
*   **Chassaing (DSP applications using C and the TMS320C6x DSK):** While this book focuses on embedded DSP, the underlying principles of real-time data acquisition, ADC operation, and handling audio buffers are universal. Understanding how these concepts are implemented in a C environment on dedicated hardware can provide deeper insight into the low-level operations even when using higher-level tools.
*   **Oppenheim & Schafer (Discrete-Time Signal Processing):** This is a cornerstone reference for DSP theory. Chapters on sampling, quantization, and the spectral analysis of signals (including the DFT) provide the rigorous mathematical framework behind what you'll be doing practically in the lab.

This comprehensive set of notes should equip you with the necessary knowledge to successfully tackle the task of acquiring and processing real-time speech data in your DSP lab.