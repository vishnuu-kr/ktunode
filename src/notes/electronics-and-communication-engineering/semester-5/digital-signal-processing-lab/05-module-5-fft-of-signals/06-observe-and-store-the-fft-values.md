---
title: "Observe and store the FFT values."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 5: FFT of signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec4a"
status: "completed"
scrapedAt: "2026-05-23T17:56:09.147Z"
---
# DIGITAL SIGNAL PROCESSING LAB: Module 5 - FFT of Signals

## Topic: Observe and Store the FFT Values

### Introduction

The Fast Fourier Transform (FFT) is a highly efficient algorithm for computing the Discrete Fourier Transform (DFT). The DFT transforms a finite sequence of equally spaced samples of a signal into a finite sequence of equally spaced samples of its frequency spectrum. Understanding and working with FFT values is fundamental to analyzing the frequency content of digital signals. This module focuses on observing, manipulating, and storing these spectral components.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Observe the magnitude and phase of the FFT of various signals:** Understand how the FFT output represents the frequency components present in a signal.
*   **Interpret the FFT output:** Relate the peaks in the FFT spectrum to the frequencies present in the input signal.
*   **Store FFT values for further analysis or processing:** Learn methods to save computed FFT data for later use.
*   **Apply FFT to analyze synthesized signals:** Utilize FFT to verify theoretical frequency content of generated waveforms.
*   **Understand the relationship between time-domain and frequency-domain representations:** Reinforce the concepts learned from earlier modules about signal transformations.

### Key Concepts and Definitions

*   **Discrete Fourier Transform (DFT):** A mathematical transformation that converts a finite sequence of data points in the time domain into a finite sequence of data points in the frequency domain.
    *   For a sequence $x[n]$ of length $N$, the DFT is given by:
        $$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}, \quad k = 0, 1, \dots, N-1$$
    *   **Reference:** Proakis & Ingle, "Digital Signal Processing using MATLAB," Chapter 7 (DFT and its properties), emphasizes the mathematical definition of DFT.

*   **Fast Fourier Transform (FFT):** An efficient algorithm for computing the DFT. It significantly reduces the number of computations required compared to direct DFT calculation, making spectral analysis practical for real-time applications.
    *   The complexity of DFT is O($N^2$), while FFT algorithms reduce this to O($N \log N$).

*   **Frequency Domain:** The representation of a signal in terms of its constituent frequencies. The FFT output ($X[k]$) represents the frequency domain of the input signal $x[n]$.

*   **Magnitude Spectrum:** The absolute value of the complex DFT coefficients, $|X[k]|$. This indicates the amplitude of each frequency component.
    *   **Observation:** Typically plotted against frequency to visualize the strength of different frequencies.

*   **Phase Spectrum:** The angle of the complex DFT coefficients, $\angle X[k]$. This indicates the phase shift of each frequency component.
    *   **Observation:** Important for reconstructing the signal, but often less intuitive to interpret directly than the magnitude spectrum.

*   **Frequency Bins:** The discrete frequencies at which the DFT (and FFT) provides spectral information. For an $N$-point FFT, the frequencies are $k \cdot (F_s/N)$, where $F_s$ is the sampling frequency and $k$ is the frequency bin index.

*   **Sampling Frequency ($F_s$):** The rate at which the analog signal is sampled to create the digital signal. This determines the highest frequency that can be represented (Nyquist frequency, $F_s/2$).

*   **Nyquist Frequency:** Half the sampling frequency ($F_s/2$). Frequencies above this cannot be uniquely represented and lead to aliasing.

### Observing FFT Values

The FFT output ($X[k]$) is a sequence of complex numbers. Each complex number represents the amplitude and phase of a specific frequency component present in the input signal.

#### 1. Magnitude and Phase Calculation
Given the complex FFT output $X[k]$, we can compute its magnitude and phase:
*   **Magnitude:** $|X[k]| = \sqrt{\text{Re}(X[k])^2 + \text{Im}(X[k])^2}$
*   **Phase:** $\angle X[k] = \operatorname{atan2}(\text{Im}(X[k]), \text{Re}(X[k]))$ (using `atan2` for correct quadrant selection).

#### 2. Plotting the Spectrum
*   **Magnitude Spectrum Plot:** Plot $|X[k]|$ against the corresponding frequency. The frequencies are typically calculated as $f_k = k \cdot (F_s/N)$, for $k=0, 1, \dots, N-1$.
*   **Phase Spectrum Plot:** Plot $\angle X[k]$ against the corresponding frequency.

**Example:** Analyzing a pure sine wave.
*   **Input Signal:** A sine wave with frequency $f_0$ and sampling frequency $F_s$.
*   **Expected FFT:** The FFT should show a single peak at the frequency $f_0$ in the magnitude spectrum. The phase spectrum will show the phase of the sine wave at that frequency.
*   **Textbook Relevance:** Proakis & Ingle, Chapter 7, discusses the DFT of sinusoidal signals and spectral leakage, which are crucial for interpreting FFT plots.

#### 3. Understanding the FFT Output Structure
*   **DC Component:** $X[0]$ (for $k=0$) represents the DC component (average value) of the signal.
*   **Symmetric Nature (for real signals):** For a real input signal, the magnitude spectrum is symmetric around the Nyquist frequency ($F_s/2$). The negative frequencies are mirrored. The phase spectrum is anti-symmetric.
    *   Therefore, we typically plot the magnitude spectrum only from DC up to the Nyquist frequency ($0$ to $F_s/2$).
    *   The frequency bins correspond to: $0, F_s/N, 2F_s/N, \dots, (N-1)F_s/N$.
    *   For plotting from $0$ to $F_s/2$, we usually consider the first $N/2 + 1$ points of the FFT output (for even $N$).

#### 4. Aliasing in the Frequency Domain
If a signal contains frequencies above $F_s/2$, they will appear as lower frequencies in the FFT due to aliasing. This reinforces the importance of proper sampling.

### Storing FFT Values

Once the FFT is computed, the resulting frequency-domain data can be stored for various purposes:

#### 1. Storing as Numerical Arrays/Lists
*   **In MATLAB:**
    ```matlab
    % Assuming x is your time-domain signal and N is the FFT length
    X = fft(x, N); % Compute the N-point FFT
    magnitude_X = abs(X);
    phase_X = angle(X);

    % Store magnitudes in a file
    writematrix('magnitude_spectrum.csv', magnitude_X);
    % Store phases in a file
    writematrix('phase_spectrum.csv', phase_X);
    % Store complex FFT values
    writematrix('complex_fft.csv', X);
    ```
    **Textbook Link:** Ingle & Proakis provide examples of using MATLAB functions for FFT and data manipulation.

*   **In Python (using NumPy and SciPy):**
    ```python
    import numpy as np
    import scipy.fft as fft

    # Assuming x is your time-domain signal and N is the FFT length
    X = fft.fft(x, N)
    magnitude_X = np.abs(X)
    phase_X = np.angle(X)

    # Store magnitudes in a file
    np.savetxt('magnitude_spectrum.csv', magnitude_X, delimiter=',')
    # Store phases in a file
    np.savetxt('phase_spectrum.csv', phase_X, delimiter=',')
    # Store complex FFT values
    np.savetxt('complex_fft.csv', X, delimiter=',')
    ```
    **Textbook Link:** Downey's "Think DSP" emphasizes practical Python implementation for DSP tasks, including FFT usage and data handling.

#### 2. Storing as Complex Numbers
It's often best to store the complex FFT values ($X[k]$) themselves, as both magnitude and phase can be reconstructed from them. This avoids potential loss of precision.

#### 3. Storing as Real and Imaginary Parts
Alternatively, the real and imaginary parts of $X[k]$ can be stored separately.

#### 4. Storing Relevant Portions
For real signals, you might only need to store the first $N/2 + 1$ points of the FFT output (from DC to Nyquist) to represent the unique frequency content.

#### 5. File Formats
*   **CSV (Comma Separated Values):** A widely compatible format for tabular data.
*   **MAT (.mat files in MATLAB):** Native format for MATLAB, allowing storage of variables with their types and dimensions.
*   **NumPy Binary Files (.npy):** Efficient for storing NumPy arrays in Python.

### Practical Implementation Steps (General)

1.  **Generate or Load a Time-Domain Signal:** Create a synthetic signal (e.g., sum of sinusoids) or load one from a file.
2.  **Determine Sampling Frequency ($F_s$):** Crucial for correctly interpreting the frequency axis.
3.  **Choose FFT Length ($N$):** Often set equal to the signal length for a direct spectrum or padded with zeros for better frequency resolution or to match specific processing requirements.
4.  **Compute the FFT:** Use the `fft` function in your chosen software (MATLAB, Python).
5.  **Calculate Magnitude and Phase:** Compute `abs()` and `angle()` of the FFT output.
6.  **Create Frequency Axis:** Generate the corresponding frequency vector using $F_s$ and $N$.
7.  **Observe and Plot:** Visualize the magnitude and phase spectra. Identify dominant frequencies.
8.  **Store Data:** Save the computed FFT values (complex, magnitude, or phase) into a file.

### Relating to Course Outcomes

*   **CO1: Generate basic signal waveforms:** This topic directly uses generated waveforms (e.g., sinusoids) as input for FFT analysis, reinforcing the understanding of their spectral content.
*   **CO2: Verify the properties of DFT:** By observing the FFT of known signals (e.g., a single sinusoid), you can verify that the FFT output correctly represents the signal's frequency components. The symmetry of the spectrum for real signals is also a DFT property that can be observed.
*   **CO3: Familiarize with DSP hardware and interface with Computer:** While this topic is primarily software-based, the principles of signal acquisition (sampling frequency) and data storage are directly transferable to hardware contexts. Storing FFT values is essential for processing or transmitting spectral data, which is a common task in DSP hardware.
*   **CO4: Implement LTI systems:** The FFT is a cornerstone for analyzing and implementing LTI systems in the frequency domain. Understanding how to obtain and store the frequency response (related to FFT) is crucial.
*   **CO5: Design and Implement FIR low-pass filters:** The frequency response of a filter is its FFT. Understanding how to compute, observe, and store the FFT of filter coefficients (which represent the filter's frequency response) is fundamental to filter design.

### Examples and Exercises

**Exercise 1: Analyzing a Single Sine Wave**

1.  **Generate a signal:** Create a sine wave with a frequency of 100 Hz, a sampling frequency $F_s = 1000$ Hz, and a duration of 1 second.
    *   Number of samples $N = F_s \times \text{duration} = 1000 \times 1 = 1000$.
    *   Time vector $t = 0:1/F_s:1-1/F_s$.
    *   Signal $x[n] = \sin(2\pi \cdot 100 \cdot t)$.

2.  **Compute the FFT:** Calculate the $N$-point FFT of this signal.
3.  **Observe the Spectrum:**
    *   Calculate the magnitude spectrum.
    *   Create a frequency vector: $f = 0:F_s/N:F_s-F_s/N$.
    *   Plot the magnitude spectrum against frequency. Consider plotting only up to the Nyquist frequency ($F_s/2 = 500$ Hz).
4.  **Store the FFT Values:** Save the complex FFT values to a file named `sine_fft.csv`.

**Solution 1 (MATLAB):**

```matlab
% Parameters
Fs = 1000;        % Sampling frequency (Hz)
f = 100;          % Signal frequency (Hz)
duration = 1;     % Signal duration (seconds)
N = Fs * duration; % Number of samples

% Generate time vector
t = 0:(1/Fs):(duration - 1/Fs);

% Generate the sine wave signal
x = sin(2*pi*f*t);

% Compute the N-point FFT
X = fft(x, N);

% Calculate magnitude and create frequency vector
magnitude_X = abs(X);
frequency_vector = (0:(N-1)) * Fs/N;

% Plot the magnitude spectrum (up to Nyquist frequency)
figure;
plot(frequency_vector(1:N/2+1), magnitude_X(1:N/2+1));
title('Magnitude Spectrum of 100 Hz Sine Wave');
xlabel('Frequency (Hz)');
ylabel('Magnitude');
grid on;

% Store the complex FFT values
% For real signals, often the first N/2+1 points are sufficient for analysis
% but we store all N points here as requested.
writematrix('sine_fft.csv', X);

disp('FFT values stored in sine_fft.csv');
```

**Solution 1 (Python):**

```python
import numpy as np
import scipy.fft as fft
import matplotlib.pyplot as plt

# Parameters
Fs = 1000        # Sampling frequency (Hz)
f = 100          # Signal frequency (Hz)
duration = 1     # Signal duration (seconds)
N = Fs * duration  # Number of samples

# Generate time vector
t = np.arange(0, duration, 1/Fs)

# Generate the sine wave signal
x = np.sin(2 * np.pi * f * t)

# Compute the N-point FFT
X = fft.fft(x, N)

# Calculate magnitude and create frequency vector
magnitude_X = np.abs(X)
frequency_vector = fft.fftfreq(N, 1/Fs) # More robust way to get frequencies

# Plot the magnitude spectrum (up to Nyquist frequency)
plt.figure()
# Select points for the positive frequency side
positive_freq_indices = np.where(frequency_vector >= 0)
plt.plot(frequency_vector[positive_freq_indices], magnitude_X[positive_freq_indices])
plt.title('Magnitude Spectrum of 100 Hz Sine Wave')
plt.xlabel('Frequency (Hz)')
plt.ylabel('Magnitude')
plt.grid(True)
plt.show()

# Store the complex FFT values
np.savetxt('sine_fft.csv', X, delimiter=',')

print('FFT values stored in sine_fft.csv')
```

**Expected Output Observation:** You should see a single dominant peak at 100 Hz in the magnitude spectrum. The values for other frequencies should be very small (ideally zero, but numerical precision may result in tiny non-zero values).

**Exercise 2: Analyzing a Sum of Sine Waves**

1.  **Generate a signal:** Create a signal that is the sum of two sine waves: one at 100 Hz and another at 250 Hz. Use $F_s = 1000$ Hz and a duration of 1 second.
    *   Signal $x[n] = \sin(2\pi \cdot 100 \cdot t) + 0.5 \sin(2\pi \cdot 250 \cdot t)$.

2.  **Compute the FFT:** Calculate the $N$-point FFT of this signal.
3.  **Observe the Spectrum:** Plot the magnitude spectrum.
4.  **Store the FFT Values:** Save the complex FFT values to a file named `sum_sine_fft.csv`.

**Solution 2 (MATLAB):**

```matlab
% Parameters
Fs = 1000;        % Sampling frequency (Hz)
f1 = 100;         % First signal frequency (Hz)
f2 = 250;         % Second signal frequency (Hz)
amplitude2 = 0.5; % Amplitude of the second signal
duration = 1;     % Signal duration (seconds)
N = Fs * duration; % Number of samples

% Generate time vector
t = 0:(1/Fs):(duration - 1/Fs);

% Generate the sum of sine waves signal
x = sin(2*pi*f1*t) + amplitude2 * sin(2*pi*f2*t);

% Compute the N-point FFT
X = fft(x, N);

% Calculate magnitude and create frequency vector
magnitude_X = abs(X);
frequency_vector = (0:(N-1)) * Fs/N;

% Plot the magnitude spectrum (up to Nyquist frequency)
figure;
plot(frequency_vector(1:N/2+1), magnitude_X(1:N/2+1));
title('Magnitude Spectrum of Sum of Two Sine Waves');
xlabel('Frequency (Hz)');
ylabel('Magnitude');
grid on;

% Store the complex FFT values
writematrix('sum_sine_fft.csv', X);

disp('FFT values stored in sum_sine_fft.csv');
```

**Solution 2 (Python):**

```python
import numpy as np
import scipy.fft as fft
import matplotlib.pyplot as plt

# Parameters
Fs = 1000        # Sampling frequency (Hz)
f1 = 100         # First signal frequency (Hz)
f2 = 250         # Second signal frequency (Hz)
amplitude2 = 0.5 # Amplitude of the second signal
duration = 1     # Signal duration (seconds)
N = Fs * duration  # Number of samples

# Generate time vector
t = np.arange(0, duration, 1/Fs)

# Generate the sum of sine waves signal
x = np.sin(2 * np.pi * f1 * t) + amplitude2 * np.sin(2 * np.pi * f2 * t)

# Compute the N-point FFT
X = fft.fft(x, N)

# Calculate magnitude and create frequency vector
magnitude_X = np.abs(X)
frequency_vector = fft.fftfreq(N, 1/Fs)

# Plot the magnitude spectrum (up to Nyquist frequency)
plt.figure()
positive_freq_indices = np.where(frequency_vector >= 0)
plt.plot(frequency_vector[positive_freq_indices], magnitude_X[positive_freq_indices])
plt.title('Magnitude Spectrum of Sum of Two Sine Waves')
plt.xlabel('Frequency (Hz)')
plt.ylabel('Magnitude')
plt.grid(True)
plt.show()

# Store the complex FFT values
np.savetxt('sum_sine_fft.csv', X, delimiter=',')

print('FFT values stored in sum_sine_fft.csv')
```

**Expected Output Observation:** You should see two dominant peaks in the magnitude spectrum, one at 100 Hz and another at 250 Hz. The peak at 100 Hz should be taller (higher magnitude) than the peak at 250 Hz, reflecting the different amplitudes of the input sine waves.

### Important Points to Remember

*   **Sampling Frequency ($F_s$) is Crucial:** It dictates the frequency range ($0$ to $F_s/2$) that can be analyzed without aliasing.
*   **FFT Length ($N$):** Affects the frequency resolution. A longer FFT (zero-padding) can provide better frequency resolution but doesn't add new information about the signal itself.
*   **Real vs. Complex Signals:** For real signals, the FFT output exhibits symmetry, and usually, only the first half (DC to Nyquist) is plotted and considered.
*   **Magnitude and Phase:** Both are important. Magnitude shows the strength of frequencies, while phase provides information about the timing of these components.
*   **Storage Format:** Store complex FFT values for maximum fidelity. CSV is a universal format, while .mat (MATLAB) or .npy (Python) can be more efficient for native environments.
*   **Spectral Leakage:** When the signal frequencies do not fall exactly on the FFT bin frequencies, or when the signal is not periodic within the observation window, spectral leakage occurs, smearing the energy across nearby frequency bins. Windowing functions (covered in later modules) are used to mitigate this.

### Conclusion

Observing and storing FFT values is a fundamental skill in Digital Signal Processing. It allows us to understand the frequency composition of signals, verify theoretical expectations, and prepare data for further analysis or processing. By applying the concepts and techniques discussed, you can effectively work with the frequency domain representation of digital signals.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
