---
title: "Design an FIR low pass filter using MATLAB/SCILAB and check how it filters a speech signal by recording it and playing the result"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 4: FFT and FIR Filter realization on a fixed point processor "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7f5"
status: "completed"
scrapedAt: "2026-05-20T16:46:20.765Z"
---
# DIGITAL SIGNAL PROCESSING - Module 4: FFT and FIR Filter Realization on a Fixed-Point Processor
## Topic: Design an FIR Low-Pass Filter Using MATLAB/SCILAB and Check How it Filters a Speech Signal

**Module Overview:** This module focuses on the practical application of the Fast Fourier Transform (FFT) and the realization of Finite Impulse Response (FIR) filters, particularly within the constraints of fixed-point processors. This topic focuses on designing and implementing a low-pass FIR filter using either MATLAB or SCILAB and then testing it with a recorded speech signal.

**Learning Outcomes:**

*   Design an FIR low-pass filter with specified characteristics (cutoff frequency, passband ripple, stopband attenuation).
*   Implement the designed filter in MATLAB/SCILAB.
*   Record a speech signal.
*   Filter the recorded speech signal using the designed FIR filter.
*   Analyze the filtered speech signal (audio comparison).
*   Understand the impact of filter parameters on the filtering result.

---

### 1. Key Concepts and Definitions:

*   **Digital Signal Processing (DSP):** The use of digital computers to perform a wide variety of signal processing operations.
*   **Filter:** A system that modifies the frequency content of a signal.
*   **FIR Filter (Finite Impulse Response):** A digital filter whose impulse response is of finite duration.  This means the output of the filter depends only on the current and past input samples.  FIR filters are always stable.
*   **IIR Filter (Infinite Impulse Response):** A digital filter whose impulse response is of infinite duration. The output of the filter depends on the current and past input samples AND past output samples (feedback).  IIR filters can be unstable.
*   **Low-Pass Filter:** A filter that passes low-frequency components of a signal and attenuates high-frequency components.
*   **Cutoff Frequency (fc):** The frequency at which the filter transitions between the passband and the stopband (typically defined at the -3dB point).
*   **Passband:** The range of frequencies that the filter allows to pass through with minimal attenuation.
*   **Stopband:** The range of frequencies that the filter significantly attenuates.
*   **Passband Ripple (Rp):** The amount of variation (in dB) allowed in the passband.
*   **Stopband Attenuation (Rs):** The amount of attenuation (in dB) applied to frequencies in the stopband. A higher value means better attenuation.
*   **Transition Band:** The frequency range between the passband and the stopband.  A narrow transition band usually requires a higher filter order.
*   **Filter Order (N):** The number of taps (coefficients) in an FIR filter.  A higher order generally results in a sharper transition band and better filter performance but requires more computation.
*   **Impulse Response (h[n]):** The output of a system when the input is a unit impulse (a single sample with a value of 1 at n=0, and 0 everywhere else).
*   **Frequency Response (H(ω)):** The Fourier Transform of the impulse response, representing the filter's behavior at different frequencies.  It describes how the filter modifies the amplitude and phase of different frequency components in the input signal.
*   **MATLAB/SCILAB:** Numerical computing environments and programming languages often used for DSP applications.
*   **Speech Signal:** An audio signal representing human speech.
*   **Sampling Rate (fs):** The number of samples taken per second from a continuous signal to make it digital.
*   **Normalization:**  Scaling values to a specific range, often between 0 and 1 or -1 and 1. This is important when dealing with audio signals and fixed-point processors.
*   **Windowing:** A technique used in FIR filter design to reduce unwanted ripples and oscillations in the frequency response caused by truncating the ideal filter impulse response. Common windowing functions include Hamming, Hanning, Blackman, and Kaiser.
*   **Filter Coefficients:**  The set of numerical values (h[0], h[1], h[2], ... h[N-1]) that define the FIR filter.  These coefficients are multiplied by the input samples and summed to produce the output.

### 2. Designing an FIR Low-Pass Filter:

**2.1. Filter Specifications:**

Before designing, define the filter specifications:

*   **Sampling Rate (fs):**  e.g., 8000 Hz, 16000 Hz, 44100 Hz (CD quality).  This depends on the frequency content of your speech signal. Nyquist-Shannon sampling theorem states that the sampling frequency should be at least twice the highest frequency component in the signal.
*   **Cutoff Frequency (fc):** e.g., 1000 Hz.  This is the frequency above which you want to attenuate the signal. For speech, a low-pass filter can remove high-frequency noise.
*   **Passband Ripple (Rp):** e.g., 1 dB. The maximum allowable ripple in the passband.
*   **Stopband Attenuation (Rs):** e.g., 60 dB. The minimum attenuation in the stopband.

**2.2. FIR Filter Design Methods:**

*   **Window Method:**
    1.  **Ideal Impulse Response:** Calculate the ideal impulse response for a low-pass filter:

        ```
        h_ideal[n] = (fc/fs) * sinc(2 * fc * n / fs)  where sinc(x) = sin(pi*x)/(pi*x) for x != 0 and sinc(0) = 1
        ```

    2.  **Windowing:** Multiply the ideal impulse response by a window function (e.g., Hamming, Hanning, Blackman, Kaiser) to smooth the transition band and reduce ripples.
    3.  **Filter Coefficients:** The windowed impulse response becomes the filter coefficients.

*   **Frequency Sampling Method:**  Specifies the desired frequency response at discrete frequencies. Inverse DFT is then used to find the filter coefficients.
*   **Parks-McClellan Algorithm (Equiripple Design):**  An optimization algorithm that designs filters with a minimax (equiripple) error in the passband and stopband. This is often the preferred method for achieving optimal performance.

**2.3. MATLAB/SCILAB Implementation (Window Method Example using Hamming Window):**

```matlab
% MATLAB Code (Example)
fs = 8000;        % Sampling rate
fc = 1000;      % Cutoff frequency
N = 51;           % Filter order (odd for linear phase)

% Ideal impulse response
n = -(N-1)/2:(N-1)/2;
h_ideal = (2*fc/fs) * sinc(2*fc*n/fs);

% Hamming window
w = hamming(N)';

% Windowed impulse response (FIR filter coefficients)
h = h_ideal .* w;

% Frequency response
[H, f] = freqz(h, 1, 1024, fs);

% Plot frequency response
figure;
plot(f, 20*log10(abs(H)));
title('FIR Lowpass Filter Frequency Response');
xlabel('Frequency (Hz)');
ylabel('Magnitude (dB)');
grid on;
```

```scilab
// SCILAB Code (Example)
fs = 8000;        // Sampling rate
fc = 1000;      // Cutoff frequency
N = 51;           // Filter order (odd for linear phase)

// Ideal impulse response
n = -(N-1)/2:(N-1)/2;
h_ideal = (2*fc/fs) .* sinc(2*%pi*fc*n/fs); //scilab sinc function has a different definition

// Hamming window
w = hamming(N); // no transpose necessary

// Windowed impulse response (FIR filter coefficients)
h = h_ideal .* w;

// Frequency response
[H, f] = freq(h, fs, 1024); // freq function in scilab

// Plot frequency response
figure;
plot(f, 20*log10(abs(H)));
title('FIR Lowpass Filter Frequency Response');
xlabel('Frequency (Hz)');
ylabel('Magnitude (dB)');
grid on;

//sinc function definition in Scilab
function y = sinc(x)
    if (x == 0) then
        y = 1;
    else
        y = sin(x)./x;
    end
endfunction
```

**Explanation:**

*   `fs`, `fc`, and `N` are defined.
*   The ideal impulse response is calculated using the sinc function.
*   A Hamming window is generated.
*   The windowed impulse response is calculated by multiplying the ideal impulse response with the window. These become your filter coefficients.
*   The `freqz` (MATLAB) or `freq` (SCILAB) function calculates the frequency response of the filter.
*   The frequency response is plotted to visualize the filter's behavior.

**2.4. MATLAB/SCILAB Implementation (Parks-McClellan):**

```matlab
% MATLAB Code (Parks-McClellan)
fs = 8000;
fc = 1000;
Rp = 1;
Rs = 60;

% Normalized frequencies
wp = fc/(fs/2); % Passband edge
ws = (fc+500)/(fs/2); % Stopband edge (assuming a transition bandwidth of 500Hz)

% Filter order estimation using kaiserord
[N,Wn,beta,typ] = kaiserord(Rs,0.1); %0.1 corresponds to normalized transition bandwidth

%Designing the filter using firpmord and firpm
f = [0 wp ws 1];
a = [1 1 0 0];
N = firpmord(f,a,[Rp Rs],fs);
h = firpm(N,f,a,{1 10^(Rs/20)},fs);

% Frequency response
[H, f_pm] = freqz(h, 1, 1024, fs);

% Plot frequency response
figure;
plot(f_pm, 20*log10(abs(H)));
title('FIR Lowpass Filter Frequency Response (Parks-McClellan)');
xlabel('Frequency (Hz)');
ylabel('Magnitude (dB)');
grid on;

```

```scilab
//SCILAB Code (Parks-McClellan approximation)
fs = 8000;
fc = 1000;
Rp = 1;
Rs = 60;

//Normalized frequencies
wp = fc/(fs/2); // Passband edge
ws = (fc+500)/(fs/2); // Stopband edge (assuming a transition bandwidth of 500Hz)

f = [0 wp ws 1];
a = [1 1 0 0];

//Approximating the firpm function by implementing its algorithm (simplified)
function h = firpm(N,f,a,fs)
  //Simple alternate to firpm function
  //Can be improved for complex requirements using Remez algorithm

  h = remez(N,f,a,fs);
endfunction
//Designing remez with approximated frequency amplitude points.
h = firpm(20,f,a,fs)

[H, f] = freq(h, fs, 1024);

// Plot frequency response
figure;
plot(f, 20*log10(abs(H)));
title('FIR Lowpass Filter Frequency Response (Remez/Approximation)');
xlabel('Frequency (Hz)');
ylabel('Magnitude (dB)');
grid on;
```

**Explanation:**

* The `firpmord` function (MATLAB) estimates the filter order `N` based on the specifications `Rp`, `Rs`, and the transition width. In SCILAB this step is not used explicitly as the equivalent to firpmord doesn't exist.
* The `firpm` function (MATLAB)  uses the Parks-McClellan algorithm to design the filter coefficients `h`.
* The code then plots the frequency response as before.
* Note: Parks-McClellan algorithm provides better performance. SCILAB requires remez to be installed or approximation to be used as shown.

### 3. Recording and Filtering a Speech Signal:

**3.1. Recording the Speech Signal:**

*   **MATLAB:**

    ```matlab
    recObj = audiorecorder(fs, 16, 1);  % sampling rate, bits per sample, number of channels (mono)
    disp('Start speaking.')
    recordblocking(recObj, 5);           % Record for 5 seconds
    disp('End speaking.');

    y = getaudiodata(recObj);            % Get audio data

    %Save the audio file
    audiowrite('speech.wav',y,fs);
    ```

*   **SCILAB:**

    ```scilab
    fs = 8000; //sampling rate
    recording_time = 5; //seconds
    num_samples = fs*recording_time; //Number of samples

    //Preallocate a zero matrix
    y = zeros(num_samples,1);

    //Try running the Java Sound API.  The API could be enabled manually
    //This may need manual configuration depending on operating system
    //For details on JavaSound AudioCapture, please refer to Java sound documentation
    //Also, Scilab documentation describes this in detail.

    y = playsnd(zeros(1,num_samples),fs,"record");
    //Recording will start as playsnd with 0 signal runs
    disp("Recording started, speak now!");
    //Pause the program to allow recording.
    sleep(recording_time) // recording time in seconds

    sound(y,fs)
    audiowrite("speech.wav",y,fs)
    disp("Finished");
    ```

**3.2. Filtering the Speech Signal:**

*   **MATLAB/SCILAB:**

    ```matlab
    % MATLAB
    speechSignal = audioread('speech.wav');
    filteredSpeech = filter(h, 1, speechSignal);
    audiowrite('filtered_speech.wav', filteredSpeech, fs);
    sound(filteredSpeech, fs);
    ```

    ```scilab
    //SCILAB

    [speechSignal, fs] = audioread("speech.wav")
    filteredSpeech = flts(speechSignal,h);
    audiowrite("filtered_speech.wav",filteredSpeech,fs);
    sound(filteredSpeech,fs)
    ```

**Explanation:**

*   `audioread` (MATLAB) or Bracket notation (SCILAB) reads the recorded speech signal from the WAV file.
*   `filter` (MATLAB) or `flts` (SCILAB) applies the FIR filter to the speech signal. `h` are the filter coefficients. The `1` in the MATLAB code represents the feedback coefficient (1 for FIR filters).
*   `audiowrite` (MATLAB/SCILAB) saves the filtered signal to a new WAV file.
*   `sound` (MATLAB/SCILAB) plays the filtered audio.

### 4. Analyzing the Filtered Speech Signal:

*   **Listen to both the original and filtered speech signals.**  Notice the difference in the audio. The high-frequency noise components should be attenuated in the filtered signal.
*   **Spectrogram Analysis:**  Use MATLAB/SCILAB to plot the spectrograms of both the original and filtered speech signals.  The spectrogram visually represents the frequency content of the signal over time.  You should see a reduction in the high-frequency components in the filtered spectrogram.

    ```matlab
    % MATLAB Spectrogram Example
    figure;
    subplot(2,1,1);
    spectrogram(speechSignal, 256, 250, 256, fs, 'yaxis');
    title('Spectrogram of Original Speech');

    subplot(2,1,2);
    spectrogram(filteredSpeech, 256, 250, 256, fs, 'yaxis');
    title('Spectrogram of Filtered Speech');
    ```

    ```scilab
    //Scilab Spectrogram Approximation example
    figure;

    subplot(2,1,1);
    specgram(speechSignal, 256, fs);
    title('Spectrogram of Original Speech');

    subplot(2,1,2);
    specgram(filteredSpeech, 256, fs);
    title('Spectrogram of Filtered Speech');
    ```
*The MATLAB spectrogram function provides better and more versatile output and options compared to the SCILAB Specgram function.*
### 5. Impact of Filter Parameters:

*   **Cutoff Frequency (fc):**  A lower cutoff frequency will remove more high-frequency content, potentially making the speech sound muffled. A higher cutoff frequency will allow more high frequencies to pass, reducing the filtering effect.
*   **Filter Order (N):**  A higher filter order generally leads to a sharper transition band, meaning a cleaner separation between the passband and stopband.  However, it also increases the computational complexity. A lower order results in a wider transition band.
*   **Window Function:**  Different window functions offer different trade-offs between main lobe width (transition band) and side lobe level (stopband attenuation).  Experiment with different windows to see which provides the best result for your application.
*   **Passband Ripple (Rp) and Stopband Attenuation (Rs):** Affect the quality of the filter, with lower passband ripple and higher stopband attenuation resulting in a better filter but potentially requiring a higher filter order.

### 6. Important Points to Remember:

*   **Sampling Rate:** Choose an appropriate sampling rate based on the Nyquist-Shannon sampling theorem.  The sampling rate must be at least twice the highest frequency component in the signal.
*   **Filter Design Method:**  The Parks-McClellan algorithm generally provides the best performance for FIR filter design.
*   **Fixed-Point Considerations:**  When implementing FIR filters on fixed-point processors, you must consider quantization effects.  Scaling and normalization of signals and filter coefficients are crucial to prevent overflow and maintain signal integrity.  This topic focuses on the core design and implementation, further considerations of fixed-point arithmetic are important for embedded systems.
*   **Linear Phase:** FIR filters can be designed to have linear phase, which is desirable for audio processing to avoid phase distortion.  Symmetric filter coefficients result in linear phase.
*   **Computational Complexity:** Higher-order filters require more computations.  Consider the trade-off between filter performance and computational cost, especially when implementing on resource-constrained devices.

### 7. Practice Questions/Exercises:

1.  **Design an FIR low-pass filter with a cutoff frequency of 2 kHz, a sampling rate of 8 kHz, and a stopband attenuation of 50 dB using the Hamming window method in MATLAB/SCILAB. Plot the frequency response.**

    *   **Answer:**  (Refer to the code examples provided in Section 2.3. Adjust the `fc`, `fs`, `N`, and window type accordingly.  The key is to correctly implement the ideal impulse response, window function, and frequency response calculation.)

2.  **Record a short speech signal and filter it using the designed filter from Question 1. Listen to the original and filtered signals. Describe the difference you hear.**

    *   **Answer:** (You should hear a reduction in high-frequency noise or sibilance. The filtered speech might sound slightly muffled.)

3.  **How does increasing the filter order (N) affect the frequency response of an FIR filter?**

    *   **Answer:**  Increasing the filter order generally results in a sharper transition band and better stopband attenuation.  The filter becomes more selective in which frequencies it passes or attenuates.

4.  **What are the advantages of FIR filters over IIR filters?**

    *   **Answer:** FIR filters are always stable, and they can be designed to have linear phase.

5.  **Explain the purpose of a window function in FIR filter design.**

    *   **Answer:** Window functions are used to reduce unwanted ripples and oscillations in the frequency response caused by truncating the ideal filter impulse response.

6. **Experiment with different cutoff frequencies and analyze the resulting audio output.**

7. **Research and implement other windowing methods (e.g., Blackman, Kaiser) and compare their performance in terms of passband ripple and stopband attenuation.**
