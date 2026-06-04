---
title: "Simulation of Signals"
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 1: Simulation of Signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec26"
status: "completed"
scrapedAt: "2026-05-23T17:55:46.345Z"
---
# DIGITAL SIGNAL PROCESSING LAB: Module 1 - Simulation of Signals

## Introduction to Digital Signal Processing (DSP)

Digital Signal Processing (DSP) is the manipulation of digital signals by means of a computer or other digital processor. This involves transforming a signal from one form to another or extracting useful information from a signal. The lab focuses on simulating these processes using computational tools, primarily MATLAB, and understanding the underlying principles.

## 1.1 Generating Basic Signal Waveforms (CO1: K2)

This section covers the fundamental building blocks of most digital signals: basic waveforms. We will explore their generation and properties.

### Key Concepts and Definitions:

*   **Signal:** A signal is a function that conveys information about the state or behavior of a physical system. In DSP, signals are typically represented as sequences of numbers.
*   **Digital Signal:** A signal that has been sampled at discrete points in time and quantized to discrete amplitude values.
*   **Sampling:** The process of converting a continuous-time signal into a discrete-time signal by taking measurements at regular intervals.
    *   **Sampling Period ($T_s$):** The time interval between consecutive samples.
    *   **Sampling Frequency ($f_s$):** The number of samples taken per second, $f_s = 1/T_s$.
*   **Quantization:** The process of mapping a continuous range of amplitude values to a finite set of discrete amplitude values.
*   **Discrete-Time Signal:** A signal that is defined only at discrete points in time. It can be represented as $x[n]$, where $n$ is the discrete-time index.
*   **Continuous-Time Signal:** A signal that is defined for all values of time. It can be represented as $x(t)$.
*   **Relationship between Continuous and Discrete Time:** If a continuous-time signal $x(t)$ is sampled with a sampling period $T_s$, the discrete-time signal is given by $x[n] = x(nT_s)$.

### Types of Basic Signal Waveforms:

#### 1.1.1 Unit Step Function

*   **Definition:** The unit step function, denoted by $u[n]$, is a signal that is zero for $n < 0$ and one for $n \ge 0$.
    *   $u[n] = \begin{cases} 1 & \text{if } n \ge 0 \\ 0 & \text{if } n < 0 \end{cases}$
*   **Simulation (MATLAB):**
    ```matlab
    n = -10:10; % Define time indices
    step_signal = n >= 0; % Logical indexing creates 0s and 1s
    stem(n, step_signal);
    title('Unit Step Function');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```
*   **Important Points to Remember:**
    *   The unit step is the fundamental building block for many other signals.
    *   Multiplying a signal $x[n]$ by $u[n]$ effectively truncates the signal to be non-zero only for $n \ge 0$.

#### 1.1.2 Unit Impulse Function (Kronecker Delta Function)

*   **Definition:** The unit impulse function, denoted by $\delta[n]$, is a signal that is one at $n=0$ and zero for all other integer values of $n$.
    *   $\delta[n] = \begin{cases} 1 & \text{if } n = 0 \\ 0 & \text{if } n \ne 0 \end{cases}$
*   **Simulation (MATLAB):**
    ```matlab
    n = -10:10;
    impulse_signal = (n == 0); % Logical indexing for n=0
    stem(n, impulse_signal);
    title('Unit Impulse Function');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```
*   **Important Points to Remember:**
    *   The unit impulse is crucial for characterizing Linear Time-Invariant (LTI) systems. The output of an LTI system to a unit impulse input is its impulse response.
    *   **Sifting Property:** For any signal $x[n]$, the following holds: $x[n] * \delta[n-n_0] = x[n-n_0]$, where $*$ denotes convolution. Specifically, $\sum_{n=-\infty}^{\infty} x[n]\delta[n-n_0] = x[n_0]$.

#### 1.1.3 Exponential Signals

*   **Definition:** Exponential signals are of the form $a^n$. They can be real or complex.
    *   **Real Exponential:** $x[n] = A \alpha^n$, where $A$ and $\alpha$ are real constants.
        *   If $|\alpha| < 1$, the signal decays as $n$ increases.
        *   If $|\alpha| > 1$, the signal grows in magnitude as $n$ increases.
        *   If $\alpha = 1$, it becomes a DC (constant) signal.
    *   **Complex Exponential:** $x[n] = A e^{j\omega_0 n} = A (\cos(\omega_0 n) + j\sin(\omega_0 n))$, where $\omega_0$ is the angular frequency in radians/sample.
*   **Simulation (MATLAB):**
    ```matlab
    % Real Exponential (decaying)
    n = 0:20;
    alpha_decay = 0.8;
    real_exp_decay = alpha_decay.^n;
    figure;
    stem(n, real_exp_decay);
    title('Real Exponential Signal (Decaying)');
    xlabel('n');
    ylabel('Amplitude');
    grid on;

    % Complex Exponential (sinusoidal)
    n = 0:50;
    fs = 100; % Sampling frequency
    f0 = 5;   % Signal frequency
    omega0 = 2 * pi * f0 / fs; % Angular frequency in radians/sample
    A = 1;
    complex_exp = A * exp(1j * omega0 * n);
    figure;
    plot(n, real(complex_exp)); % Plotting the real part
    hold on;
    plot(n, imag(complex_exp)); % Plotting the imaginary part
    title('Complex Exponential Signal');
    xlabel('n');
    ylabel('Amplitude');
    legend('Real Part', 'Imaginary Part');
    grid on;
    ```
*   **Reference (Ingle & Proakis):** Chapter 2 of "Digital Signal Processing using Matlab" provides detailed coverage of sinusoidal and complex exponential signals, including their properties and generation.
*   **Important Points to Remember:**
    *   Complex exponentials are fundamental in Fourier analysis. Any periodic signal can be represented as a sum of complex exponentials.
    *   The frequency $\omega_0$ is normalized by the sampling frequency.

#### 1.1.4 Sinusoidal Signals

*   **Definition:** Sinusoidal signals are characterized by their amplitude, frequency, phase, and sampling rate.
    *   Continuous-time sinusoid: $x(t) = A \cos(2\pi f_0 t + \phi)$
    *   Discrete-time sinusoid: $x[n] = A \cos(2\pi f_0 nT_s + \phi)$ or $x[n] = A \cos(\omega_0 n + \phi)$, where $\omega_0 = 2\pi f_0 T_s$ is the normalized angular frequency.
*   **Simulation (MATLAB):**
    ```matlab
    n = 0:50;
    fs = 100; % Sampling frequency in Hz
    f0 = 5;   % Signal frequency in Hz
    T = 1/fs; % Sampling period
    phi = pi/4; % Phase in radians
    A = 1;

    % Using normalized angular frequency
    omega0 = 2 * pi * f0 / fs;
    discrete_sinusoid_norm = A * cos(omega0 * n + phi);

    % Using time and sampling period
    continuous_time = n * T;
    discrete_sinusoid_time = A * cos(2 * pi * f0 * continuous_time + phi);

    figure;
    stem(n, discrete_sinusoid_norm);
    title('Discrete-Time Sinusoidal Signal');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```
*   **Reference (Downey):** Chapter 2 of "Think DSP" provides an excellent introduction to sinusoidal signals and their properties, using Python examples. The concepts are directly transferable to MATLAB.
*   **Important Points to Remember:**
    *   The sampling frequency ($f_s$) plays a critical role in determining the perceived frequency of a discrete-time sinusoid (Nyquist-Shannon Sampling Theorem).
    *   Aliasing occurs if $f_0 > f_s/2$.

#### 1.1.5 Sawtooth and Square Waves

*   **Definition:**
    *   **Sawtooth Wave:** A periodic signal that ramps up linearly from a minimum to a maximum value and then abruptly drops back to the minimum.
    *   **Square Wave:** A periodic signal that alternates between two fixed amplitude levels (e.g., +1 and -1) for equal durations.
*   **Simulation (MATLAB):**
    ```matlab
    % Sawtooth Wave
    n = 0:50;
    period = 10;
    sawtooth_wave = sawtooth(2*pi*n/period); % Using built-in sawtooth function
    figure;
    stem(n, sawtooth_wave);
    title('Sawtooth Wave');
    xlabel('n');
    ylabel('Amplitude');
    grid on;

    % Square Wave
    duty_cycle = 0.5; % 50% duty cycle
    square_wave = square(2*pi*n/period, duty_cycle*100); % Using built-in square function
    figure;
    stem(n, square_wave);
    title('Square Wave');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```
*   **Important Points to Remember:**
    *   These waveforms can be synthesized using combinations of sinusoids (Fourier series).
    *   The `sawtooth` and `square` functions in MATLAB are convenient for generating these signals.

### Practice Questions:

1.  Generate a discrete-time unit step signal of length 21, centered at n=0.
2.  Generate a discrete-time unit impulse signal of length 21, centered at n=0.
3.  Generate a decaying real exponential signal $x[n] = (0.7)^n$ for $n = 0, 1, ..., 20$.
4.  Generate a discrete-time sinusoidal signal with amplitude 2, frequency 10 Hz, and phase $\pi/2$. Assume a sampling frequency of 100 Hz. Plot the signal for $n = 0$ to $n=50$.
5.  How would you represent a discrete-time signal that is zero for $n < 5$ and is equal to 2 for $n \ge 5$?

### Answers:

1.  ```matlab
    n = -10:10;
    step_signal = n >= 0;
    stem(n, step_signal);
    title('Unit Step Function');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```
2.  ```matlab
    n = -10:10;
    impulse_signal = (n == 0);
    stem(n, impulse_signal);
    title('Unit Impulse Function');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```
3.  ```matlab
    n = 0:20;
    decaying_exp = 0.7.^n;
    stem(n, decaying_exp);
    title('Decaying Exponential Signal');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```
4.  ```matlab
    n = 0:50;
    fs = 100;
    f0 = 10;
    phi = pi/2;
    A = 2;
    omega0 = 2 * pi * f0 / fs;
    discrete_sinusoid = A * cos(omega0 * n + phi);
    stem(n, discrete_sinusoid);
    title('Discrete-Time Sinusoidal Signal');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```
5.  This can be represented as $2 * u[n-5]$, where $u[\cdot]$ is the unit step function. In MATLAB:
    ```matlab
    n = 0:20;
    shifted_step = 2 * (n >= 5);
    stem(n, shifted_step);
    title('Shifted Step Function');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```

## 1.2 Properties of the Discrete Fourier Transform (DFT) (CO2: K2)

The DFT is a fundamental tool for analyzing the frequency content of discrete-time signals. We will explore its properties through simulation.

### Key Concepts and Definitions:

*   **Discrete Fourier Transform (DFT):** For a finite-length sequence $x[n]$ of length $N$, its DFT is given by:
    $X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi k n}{N}}$, for $k = 0, 1, ..., N-1$.
*   **Inverse Discrete Fourier Transform (IDFT):** Converts the frequency-domain representation back to the time domain:
    $x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j \frac{2\pi k n}{N}}$, for $n = 0, 1, ..., N-1$.
*   **Frequency Bins:** The values $X[k]$ represent the signal's content at specific frequencies, often referred to as frequency bins.
*   **Periodicity of DFT:** The DFT is periodic with period $N$, i.e., $X[k+N] = X[k]$.

### Properties of the DFT:

#### 1.2.1 Linearity

*   **Statement:** If $y[n] = ax_1[n] + bx_2[n]$, then $Y[k] = aX_1[k] + bX_2[k]$.
*   **Simulation (MATLAB):**
    ```matlab
    N = 16; % Length of the DFT
    n = 0:N-1;

    % Signal 1
    x1 = cos(2*pi*2*n/N);
    X1 = fft(x1, N);

    % Signal 2
    x2 = sin(2*pi*5*n/N);
    X2 = fft(x2, N);

    % Linear combination
    a = 2;
    b = 1.5;
    y = a*x1 + b*x2;
    Y = fft(y, N);

    % Verify linearity
    Y_verified = a*X1 + b*X2;

    figure;
    subplot(2,1,1);
    plot(abs(Y));
    hold on;
    plot(abs(Y_verified), '--');
    title('DFT Magnitude: Linearity Verification');
    xlabel('k');
    ylabel('Magnitude');
    legend('Direct DFT', 'Verified');
    grid on;

    % Check if Y and Y_verified are close
    disp(['Are the DFTs close? ', num2str(max(abs(Y - Y_verified)))]); % Should be close to zero
    ```
*   **Reference (Ingle & Proakis):** Section 3.3 in "Digital Signal Processing using Matlab" discusses the linearity property of the DFT.
*   **Important Points to Remember:**
    *   This property simplifies the analysis of composite signals.

#### 1.2.2 Time Shifting

*   **Statement:** If $y[n] = x[n-n_0]$, then $Y[k] = X[k] e^{-j \frac{2\pi k n_0}{N}}$.
*   **Simulation (MATLAB):**
    ```matlab
    N = 16;
    n = 0:N-1;
    x = cos(2*pi*2*n/N);
    X = fft(x, N);

    n0 = 3; % Shift amount
    % Circular time shift for DFT
    y = circshift(x, -n0); % circshift(vec, k) shifts by k elements. Negative k is left shift.
    Y = fft(y, N);

    % Theoretical shifted DFT
    freq_indices = 0:N-1;
    Y_verified = X .* exp(-1j * 2 * pi * freq_indices * n0 / N);

    figure;
    subplot(2,1,1);
    plot(abs(Y));
    hold on;
    plot(abs(Y_verified), '--');
    title('DFT Magnitude: Time Shifting Verification');
    xlabel('k');
    ylabel('Magnitude');
    legend('DFT of Shifted Signal', 'Verified');
    grid on;

    disp(['Are the DFTs close? ', num2str(max(abs(Y - Y_verified)))]);
    ```
*   **Important Points to Remember:**
    *   The `circshift` function in MATLAB is used to perform circular shifting, which is consistent with the periodic nature of the DFT.
    *   Time shifting introduces a linear phase shift in the frequency domain.

#### 1.2.3 Frequency Shifting

*   **Statement:** If $y[n] = x[n] e^{j \frac{2\pi k_0 n}{N}}$, then $Y[k] = X[k-k_0]$ (where indices are modulo $N$).
*   **Simulation (MATLAB):**
    ```matlab
    N = 16;
    n = 0:N-1;
    x = cos(2*pi*2*n/N);
    X = fft(x, N);

    k0 = 3; % Frequency shift amount
    % Multiply by complex exponential
    y = x .* exp(1j * 2 * pi * k0 * n / N);
    Y = fft(y, N);

    % Theoretical shifted DFT
    Y_verified = circshift(X, k0); % Circular shift in frequency domain

    figure;
    subplot(2,1,1);
    plot(abs(Y));
    hold on;
    plot(abs(Y_verified), '--');
    title('DFT Magnitude: Frequency Shifting Verification');
    xlabel('k');
    ylabel('Magnitude');
    legend('DFT of Freq Shifted Signal', 'Verified');
    grid on;

    disp(['Are the DFTs close? ', num2str(max(abs(Y - Y_verified)))]);
    ```
*   **Important Points to Remember:**
    *   Multiplying a time-domain signal by a complex exponential is equivalent to shifting its spectrum in the frequency domain.
    *   This property is fundamental in modulation techniques.

#### 1.2.4 Convolution Property

*   **Statement:** If $y[n] = x_1[n] * x_2[n]$ (convolution), then $Y[k] = X_1[k] \cdot X_2[k]$ (multiplication).
*   **Simulation (MATLAB):**
    ```matlab
    N = 16;
    n = 0:N-1;

    % Signal 1
    x1 = cos(2*pi*2*n/N);
    X1 = fft(x1, N);

    % Signal 2
    x2 = sin(2*pi*5*n/N);
    X2 = fft(x2, N);

    % Convolution in time domain
    y_conv = conv(x1, x2);
    % For DFT, we need to consider the length. The result of convolution is N+M-1, where M is the length of x2.
    % To compare with frequency-domain multiplication, we should use circular convolution or zero-pad appropriately.
    % Let's use N-point circular convolution by taking the first N points of linear convolution.
    y_circular_conv = cconv(x1, x2, N); % MATLAB's circular convolution function
    Y_circular_conv_dft = fft(y_circular_conv, N);

    % Multiplication in frequency domain
    Y_freq_mult = X1 .* X2;

    figure;
    subplot(2,1,1);
    plot(abs(Y_circular_conv_dft));
    hold on;
    plot(abs(Y_freq_mult), '--');
    title('DFT Magnitude: Convolution Property Verification');
    xlabel('k');
    ylabel('Magnitude');
    legend('DFT of Circular Convolution', 'Frequency Domain Multiplication');
    grid on;

    disp(['Are the DFTs close? ', num2str(max(abs(Y_circular_conv_dft) - abs(Y_freq_mult)))]);
    ```
*   **Important Points to Remember:**
    *   Convolution in the time domain is equivalent to multiplication in the frequency domain. This is the basis for efficient filtering using the FFT.
    *   For linear convolution, the length of the result is $N_1 + N_2 - 1$. To obtain the same result as frequency-domain multiplication, circular convolution is used, or linear convolution results are padded to a suitable length before taking the DFT.

#### 1.2.5 Parseval's Theorem

*   **Statement:** The sum of the squared magnitudes of a sequence is equal to $1/N$ times the sum of the squared magnitudes of its DFT.
    $\sum_{n=0}^{N-1} |x[n]|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2$
*   **Simulation (MATLAB):**
    ```matlab
    N = 16;
    n = 0:N-1;
    x = randn(1, N); % Random signal
    X = fft(x, N);

    % Time-domain energy
    time_domain_energy = sum(abs(x).^2);

    % Frequency-domain energy
    freq_domain_energy = (1/N) * sum(abs(X).^2);

    figure;
    subplot(2,1,1);
    stem(n, abs(x).^2);
    title('Squared Magnitude of Time-Domain Signal');
    xlabel('n');
    ylabel('|x[n]|^2');
    grid on;

    subplot(2,1,2);
    stem(abs(X).^2); % Plotting |X[k]|^2
    title('Squared Magnitude of DFT Coefficients');
    xlabel('k');
    ylabel('|X[k]|^2');
    grid on;

    disp(['Time-domain energy: ', num2str(time_domain_energy)]);
    disp(['Frequency-domain energy: ', num2str(freq_domain_energy)]);
    disp(['Are energies equal? ', num2str(max(abs(time_domain_energy - freq_domain_energy)))]); % Should be close to zero
    ```
*   **Important Points to Remember:**
    *   Parseval's theorem relates the energy of a signal in the time domain to its energy in the frequency domain.
    *   It's a crucial property for understanding power distribution across different frequencies.

### Practice Questions:

1.  Generate a signal $x[n]$ as a sum of two sinusoids: $x[n] = \cos(2\pi \frac{3n}{16}) + 0.5 \sin(2\pi \frac{7n}{16})$ for $n=0, \dots, 15$. Compute its 16-point DFT, $X[k]$.
2.  Create a new signal $y[n]$ by circularly shifting $x[n]$ by 2 samples to the right. Compute its DFT, $Y[k]$. Verify the time-shifting property by comparing $Y[k]$ with $X[k]$ and the expected phase shift.
3.  Create a signal $z[n]$ by multiplying $x[n]$ with $e^{j \frac{2\pi 5n}{16}}$. Compute its DFT, $Z[k]$. Verify the frequency-shifting property by comparing $Z[k]$ with $X[k]$.
4.  Consider a signal $x[n] = [1, 2, 3, 4]$ for $n=0, 1, 2, 3$. Calculate its 4-point DFT, $X[k]$. Now, let $h[n] = [1, 0, -1, 0]$. Calculate its 4-point DFT, $H[k]$. Compute $Y[k] = X[k]H[k]$. Then compute the circular convolution $y[n] = x[n] \circledast h[n]$ and find its DFT, $Y_{conv}[k]$. Verify that $Y[k] = Y_{conv}[k]$.

### Answers:

1.  ```matlab
    N = 16;
    n = 0:N-1;
    x = cos(2*pi*3*n/N) + 0.5*sin(2*pi*7*n/N);
    X = fft(x, N);
    stem(abs(X));
    title('DFT of Composite Sinusoidal Signal');
    xlabel('k');
    ylabel('Magnitude');
    grid on;
    ```
2.  ```matlab
    n0 = 2; % Shift right by 2
    y = circshift(x, n0); % circshift(vec, k) shifts by k elements to the right
    Y = fft(y, N);
    freq_indices = 0:N-1;
    Y_verified = X .* exp(-1j * 2 * pi * freq_indices * n0 / N);
    disp(['Max difference between Y and Y_verified: ', num2str(max(abs(Y - Y_verified)))]);
    ```
3.  ```matlab
    k0 = 5;
    z = x .* exp(1j * 2 * pi * k0 * n / N);
    Z = fft(z, N);
    Z_verified = circshift(X, k0);
    disp(['Max difference between Z and Z_verified: ', num2str(max(abs(Z - Z_verified)))]);
    ```
4.  ```matlab
    N = 4;
    n = 0:N-1;
    x = [1, 2, 3, 4];
    h = [1, 0, -1, 0];

    X = fft(x, N);
    H = fft(h, N);
    Y = X .* H; % Frequency domain multiplication

    y_conv = cconv(x, h, N); % Circular convolution
    Y_conv = fft(y_conv, N);

    disp('Verification of Convolution Property:');
    disp(['Max difference between Y and Y_conv: ', num2str(max(abs(Y - Y_conv)))]);
    ```

## 1.3 Familiarization with DSP Hardware and Interface with Computer (CO3: K2)

This learning outcome is primarily about practical laboratory experience and understanding how software simulations relate to real-time hardware. While specific details depend on the hardware used in your lab, general concepts are provided.

### Key Concepts and Definitions:

*   **Digital Signal Processor (DSP):** A specialized microprocessor designed for high-speed, real-time processing of digital signals. They are optimized for operations like multiplication-accumulation (MAC) and addressing modes used in DSP algorithms.
*   **Hardware Interface:** The physical connection and communication protocols that allow a computer to control and interact with DSP hardware. This can involve:
    *   **Data Acquisition (DAQ) Devices:** Convert analog signals to digital and vice-versa.
    *   **Development Boards:** Such as TMS320C6x DSK (Digital Signal Station Kit), which contain a DSP chip, memory, peripherals, and input/output ports.
    *   **Communication Protocols:** USB, JTAG, serial ports, Ethernet, etc.
*   **Real-Time Processing:** Processing signals as they occur, without significant delay. This is crucial for applications like audio processing, telecommunications, and control systems.
*   **Embedded Systems:** DSPs are often found in embedded systems, where they perform dedicated signal processing tasks within a larger device.
*   **Cross-Compilation:** Compiling code on a host computer (e.g., your PC) for execution on a different target processor (e.g., the DSP chip on a development board).
*   **JTAG (Joint Test Action Group):** A standard for hardware debugging and testing, often used to load programs onto DSPs and monitor their execution.

### Practical Aspects:

*   **Setting up the Development Environment:** Installing necessary drivers, compilers (e.g., TI Code Composer Studio for TMS320C6x), and debugging tools.
*   **Loading Code onto the DSP:** Understanding how to transfer compiled code from the host PC to the DSP's memory using tools like JTAG emulators.
*   **Input/Output (I/O) Configuration:**
    *   **Analog-to-Digital Converters (ADCs):** Configuring sampling rate, input voltage range, and channel selection for analog input signals.
    *   **Digital-to-Analog Converters (DACs):** Configuring output voltage for analog output signals.
    *   **Peripherals:** Interfacing with timers, serial ports (e.g., McBSP - Multi-channel Buffered Serial Port), memory interfaces, etc.
*   **Debugging on Hardware:** Using debugger tools to set breakpoints, inspect memory, examine register values, and step through the code executing on the DSP.
*   **Real-time Data Visualization:** Using host software to display real-time data coming from the DSP (e.g., plotting sampled audio or processed signal values).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### Reference (Chassaing):

*   Chapter 1 of "DSP applications using C and the TMS320C6x DSK" provides an in-depth overview of the TMS320C6x architecture and how to interface it with a computer. It covers the development tools and basic programming concepts for this specific platform.

### Important Points to Remember:

*   The goal is to bridge the gap between theoretical simulations on a PC and practical implementation on dedicated hardware.
*   Understanding the limitations of hardware (e.g., finite precision, processing speed) is crucial for real-time DSP.
*   The performance of algorithms can vary significantly between software simulation and hardware execution.

## 1.4 Implementing Linear Time-Invariant (LTI) Systems (CO4: K3)

LTI systems are the backbone of signal processing. We will learn how to represent and simulate them.

### Key Concepts and Definitions:

*   **Linear Time-Invariant (LTI) System:** A system that exhibits linearity and time-invariance properties.
    *   **Linearity:** The system satisfies the superposition principle:
        *   Scaling: $System(ax[n]) = a \cdot System(x[n])$
        *   Additivity: $System(x_1[n] + x_2[n]) = System(x_1[n]) + System(x_2[n])$
    *   **Time-Invariance:** The time-shifting property:
        *   If $y[n] = System(x[n])$, then $System(x[n-n_0]) = y[n-n_0]$ for any delay $n_0$.
*   **Impulse Response ($h[n]$):** The output of an LTI system when the input is a unit impulse $\delta[n]$. The impulse response completely characterizes an LTI system.
*   **Convolution:** The output $y[n]$ of an LTI system with input $x[n]$ and impulse response $h[n]$ is given by the convolution sum:
    $y[n] = x[n] * h[n] = \sum_{m=-\infty}^{\infty} x[m] h[n-m]$
*   **Difference Equation:** LTI systems can also be described by linear constant-coefficient difference equations (LCCDEs):
    $a_0 y[n] + a_1 y[n-1] + \dots + a_M y[n-M] = b_0 x[n] + b_1 x[n-1] + \dots + b_N x[n-N]$
    This can be rearranged to express $y[n]$ in terms of past inputs and outputs, and the current input:
    $y[n] = -\sum_{i=1}^{M} \frac{a_i}{a_0} y[n-i] + \sum_{i=0}^{N} \frac{b_i}{a_0} x[n-i]$
*   **System Function ($H(z)$):** The Z-transform of the impulse response, $H(z) = Z\{h[n]\}$. It provides a compact representation of the LTI system in the z-domain. For systems described by LCCDEs, $H(z)$ is a rational function of $z$.

### Simulating LTI Systems:

#### 1.4.1 Using Convolution

*   **Simulation (MATLAB):**
    ```matlab
    N_input = 20; % Length of input signal
    n = 0:N_input-1;
    x = sin(2*pi*0.1*n); % Input signal (e.g., a sinusoid)

    % Impulse response of an LTI system (e.g., a simple RC circuit)
    % h[n] = a * alpha^n * u[n], where a=1, alpha=0.8
    alpha = 0.8;
    h = alpha.^n; % Assume impulse response is defined for n>=0 up to N_input-1

    % Ensure impulse response is long enough for convolution
    % If h is shorter than x, it will be padded with zeros by conv.
    % For accurate results, ensure h is long enough to capture system behavior.
    % Let's assume h has a sufficient length conceptually, or pad it if needed.
    % If h has length M, the output of linear convolution will have length N_input + M - 1.

    % Compute output using convolution
    y_conv = conv(x, h);

    % Plotting
    figure;
    subplot(3,1,1);
    stem(n, x);
    title('Input Signal x[n]');
    xlabel('n');
    ylabel('Amplitude');
    grid on;

    subplot(3,1,2);
    stem(0:length(h)-1, h);
    title('Impulse Response h[n]');
    xlabel('n');
    ylabel('Amplitude');
    grid on;

    subplot(3,1,3);
    stem(0:length(y_conv)-1, y_conv);
    title('Output Signal y[n] (via Convolution)');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```
*   **Reference (Ingle & Proakis):** Chapter 5 of "Digital Signal Processing using Matlab" extensively covers LTI systems, convolution, and their implementation.
*   **Important Points to Remember:**
    *   Convolution is computationally intensive, especially for long sequences. The FFT-based convolution (using the convolution property of DFT) is often more efficient for long signals.

#### 1.4.2 Using Difference Equations

*   **Simulation (MATLAB):**
    Consider a system described by: $y[n] = 0.8 y[n-1] + 0.2 x[n]$
    Here, $a_0=1, a_1=-0.8$, and $b_0=0.2$, $b_1=0$.
    ```matlab
    N_input = 20;
    n = 0:N_input-1;
    x = sin(2*pi*0.1*n); % Input signal

    % Initialize output and previous output
    y = zeros(1, N_input);
    y_prev = 0; % For the first sample, y[-1] is assumed 0

    % Simulate difference equation
    for i = 1:N_input
        y(i) = 0.8 * y_prev + 0.2 * x(i);
        y_prev = y(i); % Update previous output for the next iteration
    end

    % Plotting
    figure;
    subplot(2,1,1);
    stem(n, x);
    title('Input Signal x[n]');
    xlabel('n');
    ylabel('Amplitude');
    grid on;

    subplot(2,1,2);
    stem(n, y);
    title('Output Signal y[n] (via Difference Equation)');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```
*   **Important Points to Remember:**
    *   Difference equations directly describe the recursive nature of causal LTI systems.
    *   Initial conditions (e.g., $y[-1]$) are crucial for correct simulation.

#### 1.4.3 Using the `filter` Function in MATLAB

*   **Description:** MATLAB's `filter` function efficiently implements LCCDEs for both causal and non-causal systems.
    `y = filter(b, a, x)`
    where `b` is the vector of feedforward coefficients ($b_0, b_1, \dots, b_N$) and `a` is the vector of feedback coefficients ($a_0, a_1, \dots, a_M$).
*   **Simulation (MATLAB):**
    Using the same system: $y[n] = 0.8 y[n-1] + 0.2 x[n]$
    So, $b = [0.2]$ and $a = [1, -0.8]$.
    ```matlab
    N_input = 20;
    n = 0:N_input-1;
    x = sin(2*pi*0.1*n); % Input signal

    b = [0.2]; % Feedforward coefficients
    a = [1, -0.8]; % Feedback coefficients

    y_filter = filter(b, a, x);

    % Plotting
    figure;
    subplot(2,1,1);
    stem(n, x);
    title('Input Signal x[n]');
    xlabel('n');
    ylabel('Amplitude');
    grid on;

    subplot(2,1,2);
    stem(n, y_filter);
    title('Output Signal y[n] (via filter function)');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```
*   **Important Points to Remember:**
    *   The `filter` function is generally preferred for implementing LTI systems in MATLAB due to its efficiency and ease of use.
    *   It handles initial conditions correctly, assuming they are zero unless specified otherwise (using `filter(b, a, x, zi)` where `zi` are initial conditions).

### Practice Questions:

1.  Consider an LTI system with impulse response $h[n] = [1, -1, 0.5]$ for $n=0, 1, 2$. If the input is $x[n] = [1, 2, 3, 4]$ for $n=0, 1, 2, 3$, compute the output $y[n]$ using convolution.
2.  Represent the system $y[n] = 0.9 y[n-1] + x[n]$ using the `filter` function. Let the input be $x[n] = \cos(2\pi \frac{n}{8})$ for $n=0, \dots, 15$. Plot the input and output.
3.  How would you represent an LTI system with the difference equation $2y[n] + 3y[n-1] = 4x[n] - x[n-2]$ using the `filter` function? What are the `b` and `a` coefficients?

### Answers:

1.  The impulse response is $h[n] = [1, -1, 0.5]$. The input is $x[n] = [1, 2, 3, 4]$.
    Using convolution (e.g., `conv(x, h)` in MATLAB):
    ```matlab
    x = [1, 2, 3, 4];
    h = [1, -1, 0.5];
    y = conv(x, h);
    disp('Output y[n] using convolution:');
    disp(y);
    ```
    Output `y` will be `[1, 1, 1, 0.5, -1.5, 2]`.

2.  ```matlab
    N = 16;
    n = 0:N-1;
    x = cos(2*pi*n/8);

    b = [1];
    a = [1, -0.9]; % Corresponds to y[n] - 0.9*y[n-1] = x[n]

    y = filter(b, a, x);

    figure;
    subplot(2,1,1);
    stem(n, x);
    title('Input Signal x[n]');
    xlabel('n');
    ylabel('Amplitude');
    grid on;

    subplot(2,1,2);
    stem(n, y);
    title('Output Signal y[n]');
    xlabel('n');
    ylabel('Amplitude');
    grid on;
    ```

3.  The difference equation is $2y[n] + 3y[n-1] = 4x[n] - x[n-2]$.
    Rearranging for $y[n]$:
    $y[n] = -\frac{3}{2}y[n-1] + \frac{4}{2}x[n] - \frac{1}{2}x[n-2]$
    $y[n] = -1.5 y[n-1] + 2 x[n] - 0.5 x[n-2]$

    To use the `filter(b, a, x)` function, the equation must be in the form:
    $y[n] = \sum_{i=1}^{M} -a_i y[n-i] + \sum_{i=0}^{N} b_i x[n-i]$

    Comparing the rearranged equation with the standard form:
    *   Feedback coefficients ($a_i$): The term with $y[n-1]$ is $-1.5 y[n-1]$, so $a_1 = 1.5$ (when the coefficient of $y[n]$ is made 1). The denominator vector `a` will represent the coefficients of the $y$ terms after dividing by the coefficient of $y[n]$. So, if we divide the original equation by 2:
        $y[n] + 1.5 y[n-1] = 2 x[n] - 0.5 x[n-2]$
        Here, $a_0=1, a_1=1.5$. Thus, `a = [1, 1.5]`.

    *   Feedforward coefficients ($b_i$): The terms with $x[n]$ and $x[n-2]$ are $2x[n]$ and $-0.5x[n-2]$. Thus, $b_0=2$, $b_1=0$ (since there is no $x[n-1]$ term), $b_2=-0.5$. The numerator vector `b` will be `[2, 0, -0.5]`.

    Therefore, `b = [2, 0, -0.5]` and `a = [1, 1.5]`. The call would be `y = filter([2, 0, -0.5], [1, 1.5], x)`.

## 1.5 Designing and Implementing FIR Low-Pass Filters (CO5: K3)

Finite Impulse Response (FIR) filters are essential for signal filtering. We will focus on designing FIR low-pass filters.

### Key Concepts and Definitions:

*   **Finite Impulse Response (FIR) Filter:** An LTI system whose impulse response $h[n]$ is of finite duration (i.e., $h[n] = 0$ for $n < 0$ or $n \ge M$, where $M$ is the filter order + 1).
    *   **Advantages:** Always stable, can have linear phase (important for preserving waveform shape).
    *   **Disadvantages:** Can require a high order (more computations) to achieve sharp frequency transitions compared to Infinite Impulse Response (IIR) filters.
*   **Low-Pass Filter (LPF):** A filter that allows frequencies below a certain cutoff frequency to pass through while attenuating frequencies above it.
*   **Filter Order (M):** The number of coefficients minus one. A higher order generally leads to a sharper cutoff and better stopband attenuation.
*   **Cutoff Frequency ($f_c$):** The frequency at which the filter transitions from passing to attenuating signals. In digital filters, this is often specified as a normalized frequency $\omega_c = 2\pi f_c / f_s$.
*   **Passband:** The range of frequencies that are allowed to pass with minimal attenuation.
*   **Stopband:** The range of frequencies that are significantly attenuated.
*   **Transition Band:** The region between the passband and stopband where the filter's response changes.
*   **Windowing Method:** A common technique for designing FIR filters. It involves choosing an ideal frequency response and multiplying it by a finite-length window function to truncate the impulse response. Common windows include:
    *   Rectangular window (simple, but poor frequency resolution)
    *   Hanning window
    *   Hamming window
    *   Blackman window
    *   Kaiser window (offers a trade-off between transition band width and stopband attenuation)
*   **Design Steps (Window Method):**
    1.  Specify the desired filter characteristics (order, cutoff frequency, type of filter).
    2.  Determine the ideal impulse response $h_d[n]$ corresponding to the desired frequency response. For an LPF with cutoff frequency $\omega_c$:
        $h_d[n] = \frac{\omega_c}{\pi} \text{sinc}(\frac{\omega_c n}{\pi}) = \frac{\sin(\omega_c n)}{\pi n}$ for $n \ne 0$, and $h_d[0] = \frac{\omega_c}{\pi}$.
    3.  Multiply $h_d[n]$ by a window function $w[n]$ of finite length $M$ to obtain the FIR filter coefficients $h[n] = h_d[n] w[n]$.
    4.  The order of the filter is typically $M-1$.

### Designing FIR LPFs in MATLAB:

MATLAB provides functions like `fir1`, `firpm` (Parks-McClellan algorithm), and `fdesign` for designing FIR filters. We will focus on `fir1` as it's based on the window method.

*   **`fir1` function:** `b = fir1(N, Wn, type)` or `b = fir1(N, Wn)` for a low-pass filter.
    *   `N`: The order of the filter (number of coefficients is N+1).
    *   `Wn`: The normalized cutoff frequency (between 0 and 1, where 1 corresponds to the Nyquist frequency, $f_s/2$).
    *   `type`: Can be 'low', 'high', 'bandpass', 'stop'. If omitted, it defaults to 'low'.

#### 1.5.1 Example: Designing a 40th Order FIR Low-Pass Filter

Let's design an LPF with a cutoff frequency of 0.25 times the Nyquist frequency.

*   **Simulation (MATLAB):**
    ```matlab
    N = 40;         % Filter order
    Wn = 0.25;      % Normalized cutoff frequency (0.25 * Nyquist freq)

    % Design the FIR low-pass filter using fir1 (Hamming window is default)
    b = fir1(N, Wn);

    % Analyze the filter's frequency response
    [h, w] = freqz(b, 1, 1024); % Calculate frequency response

    % Plotting
    figure;
    subplot(2,1,1);
    plot(w/(2*pi), abs(h)); % Normalize frequency to be between 0 and 0.5
    hold on;
    plot([Wn, Wn], ylim, '--r'); % Mark the cutoff frequency
    title('Magnitude Response of FIR Low-Pass Filter');
    xlabel('Normalized Frequency (\times Nyquist)');
    ylabel('Magnitude');
    grid on;

    subplot(2,1,2);
    plot(w/(2*pi), unwrap(angle(h))/pi); % Plot phase response normalized by pi
    hold on;
    plot([Wn, Wn], ylim, '--r'); % Mark the cutoff frequency
    title('Phase Response of FIR Low-Pass Filter');
    xlabel('Normalized Frequency (\times Nyquist)');
    ylabel('Phase (radians/\pi)');
    grid on;

    % Apply the filter to a signal
    fs = 1000; % Sampling frequency (Hz)
    T = 1/fs;
    t = 0:T:1-T;
    f1 = 50;  % Frequency below cutoff
    f2 = 200; % Frequency above cutoff
    signal = cos(2*pi*f1*t) + 0.5*cos(2*pi*f2*t);

    filtered_signal = filter(b, 1, signal); % Apply the filter

    figure;
    subplot(2,1,1);
    plot(t, signal);
    title('Original Signal');
    xlabel('Time (s)');
    ylabel('Amplitude');
    grid on;

    subplot(2,1,2);
    plot(t, filtered_signal);
    title('Filtered Signal');
    xlabel('Time (s)');
    ylabel('Amplitude');
    grid on;
    ```
*   **Reference (Ingle & Proakis):** Chapter 6 of "Digital Signal Processing using Matlab" provides a comprehensive guide to FIR filter design techniques, including the window method and other design algorithms.
*   **Reference (Downey):** Chapter 10 of "Think DSP" covers digital filters and includes examples of low-pass filters using Python, which can be adapted.

### Practice Questions:

1.  Design a 3rd order FIR low-pass filter with a normalized cutoff frequency of 0.4.
    a.  What are the filter coefficients (`b` vector)?
    b.  Plot the magnitude response of the designed filter.
2.  Design a 50th order FIR low-pass filter with a cutoff frequency of 100 Hz, assuming a sampling frequency of 1000 Hz.
    a.  What is the normalized cutoff frequency (`Wn`)?
    b.  Apply this filter to a signal that is a sum of a 50 Hz sinusoid and a 300 Hz sinusoid. Plot the original and filtered signals.

### Answers:

1.  ```matlab
    N = 3;
    Wn = 0.4;
    b = fir1(N, Wn);
    disp('Filter coefficients (b):');
    disp(b);

    [h, w] = freqz(b, 1, 1024);
    figure;
    plot(w/(2*pi), abs(h));
    hold on;
    plot([Wn, Wn], ylim, '--r');
    title('Magnitude Response of 3rd Order FIR LPF');
    xlabel('Normalized Frequency (\times Nyquist)');
    ylabel('Magnitude');
    grid on;
    ```
    a. The coefficients `b` will be printed by the command. For $N=3$ and $Wn=0.4$, `b` will be approximately `[0.0579, 0.2421, 0.2421, 0.0579]`.
    b. The plot will show a low-pass characteristic, peaking around DC and rolling off, crossing the magnitude level of approximately 0.5 at the normalized cutoff frequency of 0.4.

2.  ```matlab
    fs = 1000; % Hz
    fc = 100;  % Hz
    Wn = fc / (fs/2); % Normalized cutoff frequency = fc / Nyquist frequency

    N = 50;
    b = fir1(N, Wn);

    T = 1/fs;
    t = 0:T:1-T;
    signal = cos(2*pi*50*t) + 0.5*cos(2*pi*300*t);
    filtered_signal = filter(b, 1, signal);

    figure;
    subplot(2,1,1);
    plot(t, signal);
    title('Original Signal');
    xlabel('Time (s)');
    ylabel('Amplitude');
    grid on;

    subplot(2,1,2);
    plot(t, filtered_signal);
    title('Filtered Signal');
    xlabel('Time (s)');
    ylabel('Amplitude');
    grid on;
    ```
    a. $Wn = 100 / (1000/2) = 100 / 500 = 0.2$.
    b. The filtered signal plot will show the 50 Hz component largely preserved, while the 300 Hz component will be significantly attenuated.

## Conclusion

Module 1 lays the groundwork for understanding digital signal processing by introducing fundamental signal types, the power of frequency analysis through the DFT, the practical considerations of hardware implementation, the simulation of LTI systems, and the design of basic filters. Mastering these concepts is essential for further exploration in DSP.