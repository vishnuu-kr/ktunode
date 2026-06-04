---
title: "Use the file of filter coefficients from the previous experiment."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 9: 9. Overlap Add Block Convolution"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec5f"
status: "completed"
scrapedAt: "2026-05-23T17:56:21.260Z"
---
# Digital Signal Processing Lab: Module 9 - Overlap-Add Block Convolution

## 1. Introduction to Block Convolution

Block convolution is a technique used to efficiently compute the convolution of a long input signal with a Finite Impulse Response (FIR) filter. It breaks down the long convolution into smaller, manageable convolution operations performed on blocks of the input signal. This is particularly useful for real-time processing and when dealing with very long signals.

### 1.1 Why Block Convolution?

*   **Computational Efficiency:** Performing convolution on smaller blocks is often faster than direct convolution, especially for long signals. This is because FFT-based convolution can be significantly faster than direct FIR filtering for longer filter lengths and block sizes.
*   **Real-time Processing:** Block convolution allows for a streaming approach where input data is processed in blocks, making it suitable for real-time applications.
*   **Memory Management:** Processing data in blocks can reduce the memory requirements compared to storing the entire long signal.

### 1.2 Types of Block Convolution

There are two primary methods for block convolution:

*   **Overlap-Save (or Overlap-Add):** In this method, segments of the output of each block's convolution are saved and then added to the output of the next block. This ensures the continuity of the convolution result.
*   **Overlap-Add (or Overlap-Save):** (Note: The common terminology is often interchanged or used loosely. For the purpose of this module, we'll focus on the principles as described in the textbooks.) The core idea is to manage the overlapping parts of the convolution results from different blocks.

**Key Concept:** The fundamental principle behind both methods is to leverage the convolution theorem, which states that convolution in the time domain is equivalent to multiplication in the frequency domain. This allows us to use the Fast Fourier Transform (FFT) for efficient computation.

## 2. The Overlap-Add Method

The Overlap-Add method is particularly well-suited for FIR filtering. The core idea is to break the input signal $x[n]$ into segments of length $L$ and convolve each segment with the filter $h[n]$ of length $M$. The output of each convolution will have a length of $L+M-1$. The key challenge is to combine these block outputs to reconstruct the full convolution.

### 2.1 Steps Involved in Overlap-Add

Let:
*   $x[n]$ be the input signal of length $N$.
*   $h[n]$ be the FIR filter of length $M$.
*   $L$ be the block length for the input signal.
*   $P$ be the length of the FFT used for convolution (typically $P \ge L+M-1$).

**1. Filter Preparation:**
    *   The filter $h[n]$ is augmented with zeros to have a length of $P$. This is necessary for the FFT-based convolution.
    *   Compute the FFT of the zero-padded filter, $H(k) = \text{FFT}(h[n] \text{ padded to length } P)$.

**2. Input Signal Segmentation:**
    *   Divide the input signal $x[n]$ into blocks of length $L$.
    *   $x_0[n] = x[n]$ for $0 \le n < L$
    *   $x_1[n] = x[n]$ for $L \le n < 2L$
    *   ...
    *   $x_i[n] = x[n]$ for $iL \le n < (i+1)L$

**3. Zero-Padding Input Blocks:**
    *   Each input block $x_i[n]$ is zero-padded to length $P$. Let's call these padded blocks $x'_i[n]$.
    *   $x'_i[n] = x_i[n]$ for $0 \le n < L$, and $x'_i[n] = 0$ for $L \le n < P$.

**4. Frequency Domain Convolution:**
    *   For each block $i$, compute the FFT: $X_i(k) = \text{FFT}(x'_i[n])$.
    *   Multiply in the frequency domain: $Y'_i(k) = X_i(k) \cdot H(k)$.

**5. Inverse FFT:**
    *   Compute the inverse FFT of the product: $y'_i[n] = \text{IFFT}(Y'_i(k))$.
    *   The length of $y'_i[n]$ will be $P$.

**6. Output Overlap and Addition:**
    *   The output block $y'_i[n]$ contains $M-1$ samples that are related to the convolution of the current input block with the filter.
    *   The first $L$ samples of $y'_i[n]$ are the useful output samples for the $i$-th block of the input signal.
    *   These $L$ samples are added to the corresponding $L$ samples of the output from the *previous* block.
    *   **Specifically, for the first block (i=0), the first $L$ samples of $y'_0[n]$ form the initial part of the output.**
    *   **For subsequent blocks ($i > 0$), the first $L$ samples of $y'_i[n]$ are added to the last $L$ samples of the previously computed block's useful output segment.**

**Illustration of Output Addition (Conceptual):**

Let $y_{out}[n]$ be the final output signal.

*   $y_{out}[n] = y'_0[n]$ for $0 \le n < L$
*   For $i=1$:
    *   The first $L$ samples of $y'_1[n]$ are added to the output $y_{out}[n]$ from $L$ to $2L-1$.
    *   $y_{out}[n] = y_{out}[n] + y'_1[n]$ for $L \le n < 2L$.
*   For $i=2$:
    *   The first $L$ samples of $y'_2[n]$ are added to the output $y_{out}[n]$ from $2L$ to $3L-1$.
    *   $y_{out}[n] = y_{out}[n] + y'_2[n]$ for $2L \le n < 3L$.
*   And so on.

**Crucial Point:** The overlap-add method relies on the fact that the convolution of a block of length $L$ with a filter of length $M$ results in an output of length $L+M-1$. By choosing $P \ge L+M-1$, the circular convolution performed by FFTs becomes equivalent to linear convolution. The first $L$ samples of the $i$-th block's linear convolution result are what we need to combine.

### 2.2 Choosing Block Length ($L$) and FFT Length ($P$)

*   **Block Length ($L$):**
    *   A larger $L$ generally leads to more efficient FFT computations (as FFT algorithms are faster for larger inputs).
    *   However, $L$ must be chosen such that $L \ge M-1$ to ensure that the output of the linear convolution of a block of length $L$ with a filter of length $M$ (which is $L+M-1$) can be accommodated by the FFT size.
    *   In the overlap-add method, we are interested in $L$ output samples from each block. So, choosing $L$ is a trade-off between FFT efficiency and how much output we process per block.

*   **FFT Length ($P$):**
    *   $P$ must be at least $L+M-1$ to perform circular convolution correctly and obtain the equivalent of linear convolution.
    *   For maximum FFT efficiency, $P$ is often chosen to be a power of 2.
    *   If $L+M-1$ is not a power of 2, we pad it to the next power of 2 for $P$.

**Textbook Reference:** Ingle and Proakis (2011) discuss block convolution techniques in their chapters on FIR filter implementation and FFT applications. They emphasize the importance of choosing appropriate block sizes for efficiency. Downey (2019) also covers convolution techniques in Python, likely discussing their implementation in libraries like SciPy, which utilize efficient FFT algorithms. Chassaing (2008) would provide insights into implementing these algorithms on DSP hardware like the TMS320C6x DSK.

## 3. Using Filter Coefficients from the Previous Experiment

This module assumes you have a set of FIR filter coefficients from a previous experiment (likely in a file). These coefficients represent the impulse response $h[n]$ of an FIR filter.

### 3.1 Loading Filter Coefficients

Typically, filter coefficients are stored in a text file (e.g., `.txt`, `.dat`) or a MATLAB `.mat` file. The process of loading them into your programming environment (e.g., Python, MATLAB) will involve file reading functions.

**Example (Conceptual Python):**

```python
import numpy as np

# Assuming filter coefficients are in a file named 'filter_coeffs.txt'
# with each coefficient on a new line.
try:
    with open('filter_coeffs.txt', 'r') as f:
        # Read all lines and convert them to float
        filter_coeffs_str = f.readlines()
        h = np.array([float(coeff.strip()) for coeff in filter_coeffs_str])
    print(f"Loaded filter coefficients of length: {len(h)}")
except FileNotFoundError:
    print("Error: 'filter_coeffs.txt' not found. Please ensure the file exists.")
    # Handle error or exit
    h = None

if h is not None:
    M = len(h) # Length of the filter
    print(f"Filter length M = {M}")
```

**Example (Conceptual MATLAB):**

```matlab
% Assuming filter coefficients are in a file named 'filter_coeffs.txt'
% or loaded as a variable from a .mat file.

% If from a text file:
try
    h = dlmread('filter_coeffs.txt'); % Reads text file assuming numbers separated by spaces or newlines
    % Or if one number per line:
    % h_str = fileread('filter_coeffs.txt');
    % h = str2num(h_str);
    fprintf('Loaded filter coefficients of length: %d\n', length(h));
catch
    fprintf('Error: Could not load filter coefficients. Ensure the file exists.\n');
    h = [];
end

if ~isempty(h)
    M = length(h); % Length of the filter
    fprintf('Filter length M = %d\n', M);
end
```

### 3.2 Preparing the Filter for Block Convolution

Once loaded, the filter coefficients $h[n]$ of length $M$ need to be prepared for FFT-based convolution.

1.  **Choose FFT Length ($P$):** Select a suitable power of 2 for $P$. It must satisfy $P \ge L+M-1$.
2.  **Zero-Padding:** Pad $h[n]$ with zeros to length $P$.
3.  **Compute FFT:** Calculate the FFT of the padded filter.

**Example (Conceptual Python):**

```python
if h is not None:
    # Assume input signal length N is known or will be provided
    # For demonstration, let's assume an input signal length
    N_input_signal = 1000
    L = 128 # Example block length
    
    # Ensure L is appropriate for the filter
    if L < M:
        print(f"Warning: Block length L ({L}) is less than filter length M ({M}). Adjusting L.")
        L = M # A common choice is L = M, or a power of 2 greater than M-1

    # Determine FFT length P
    P = 1 # Start with 1
    while P < L + M - 1:
        P *= 2 # Find the next power of 2
    print(f"Selected FFT length P = {P}")

    # Prepare the filter for FFT convolution
    h_padded = np.pad(h, (0, P - M), 'constant') # Pad with zeros to length P
    H = np.fft.fft(h_padded) # Compute FFT of the filter
```

**Example (Conceptual MATLAB):**

```matlab
if ~isempty(h)
    % Assume input signal length N is known or will be provided
    N_input_signal = 1000; % For demonstration
    L = 128; % Example block length
    
    % Ensure L is appropriate for the filter
    if L < M
        fprintf('Warning: Block length L (%d) is less than filter length M (%d). Adjusting L.\n', L, M);
        L = M; % Or a power of 2 >= M-1
    end

    % Determine FFT length P
    P = 2^nextpow2(L + M - 1); % Next power of 2 greater than or equal to L+M-1
    fprintf('Selected FFT length P = %d\n', P);

    % Prepare the filter for FFT convolution
    h_padded = [h; zeros(P - M, 1)]; % Pad with zeros to length P
    H = fft(h_padded); % Compute FFT of the filter
end
```

## 4. Implementing Overlap-Add Convolution

Now, let's put it all together. We'll need an input signal $x[n]$ to convolve with the filter $h[n]$. For demonstration purposes, we can generate a sample input signal.

### 4.1 Generating an Input Signal (Example)

**Example (Conceptual Python):**

```python
if h is not None:
    # Generate a sample input signal
    N_input_signal = 1000
    fs = 1000 # Sample rate (for context, not strictly needed for convolution logic)
    t = np.arange(N_input_signal) / fs
    
    # Example: a sum of sinusoids and noise
    x = 0.5 * np.sin(2 * np.pi * 50 * t) + 0.2 * np.sin(2 * np.pi * 120 * t) + 0.1 * np.random.randn(N_input_signal)
    
    print(f"Generated input signal of length: {len(x)}")
```

**Example (Conceptual MATLAB):**

```matlab
if ~isempty(h)
    % Generate a sample input signal
    N_input_signal = 1000;
    fs = 1000; % Sample rate
    t = (0:N_input_signal-1)/fs;
    
    % Example: a sum of sinusoids and noise
    x = 0.5 * sin(2 * pi * 50 * t) + 0.2 * sin(2 * pi * 120 * t) + 0.1 * randn(1, N_input_signal);
    
    fprintf('Generated input signal of length: %d\n', length(x));
end
```

### 4.2 The Overlap-Add Loop

This is the core of the implementation. We iterate through the input signal in blocks.

**Example (Conceptual Python):**

```python
if h is not None:
    num_blocks = (N_input_signal + L - 1) // L
    output_signal = np.zeros(N_input_signal + M - 1) # Initialize output to appropriate size
    overlap_buffer = np.zeros(P) # Buffer for overlap
    
    for i in range(num_blocks):
        # Extract the current input block
        start_index = i * L
        end_index = min(start_index + L, N_input_signal)
        current_input_block = x[start_index:end_index]
        
        # Zero-pad the current input block to length P
        x_prime = np.pad(current_input_block, (0, P - len(current_input_block)), 'constant')
        
        # Compute FFT of the input block
        X = np.fft.fft(x_prime)
        
        # Multiply in frequency domain
        Y_prime_freq = X * H
        
        # Compute Inverse FFT
        y_prime = np.fft.ifft(Y_prime_freq)
        
        # Overlap and Add the result
        # The useful output from this block is y_prime[:L]
        # We need to add these to the correct position in the final output.
        # In Overlap-Add, we add the current block's useful output to the next segment
        # of the output that would have been generated by the previous block.
        
        # Place the useful part of y_prime (first L samples) into the output buffer
        # starting at the correct position for this block.
        # The first L samples of y_prime are the convolution output for the
        # current input block of length L.
        
        # The output for block i starts at index i*L in the final output.
        # The useful part from y_prime is y_prime[:L].
        
        # To implement overlap-add correctly:
        # We need to manage where the output of each block is placed.
        # The i-th block's processing contributes to the output from sample i*L to i*L + L - 1.
        
        # The result of IFFT is y_prime. The first L samples of y_prime are what we add.
        # We need to add these L samples to the output buffer starting at index i * L.
        
        # Let's refine the output accumulation.
        # The y_prime has length P. The first L samples are what we want to "add".
        # These L samples correspond to the output of the convolution of the L input samples
        # with the filter h.
        
        # The output from the i-th block of input starts at index i * L in the final output.
        # We are adding the first L samples of y_prime to the output buffer.
        
        # A simpler way to think about overlap-add for accumulation:
        # The output of the i-th block's convolution is y'_i[n].
        # The first L useful samples from y'_i[n] are y'_i[0] to y'_i[L-1].
        # These samples contribute to the output starting from index i*L.
        
        # So, the output_signal[i*L : i*L + L] += y_prime[:L]
        
        # Correction: For overlap-add, the output segment from y_prime is placed at the current offset.
        # The total output length can be N + M - 1.
        # Each block's useful contribution is L samples.
        # The i-th block's useful contribution starts at index i*L in the output.
        
        # Let's reconsider the output accumulation strategy.
        # The output of the convolution of x_i[n] (length L) with h[n] (length M) is y_i[n] (length L+M-1).
        # In overlap-add, we want to sum the segments.
        # The output_signal is accumulating the results.
        # The useful part of y_prime is y_prime[0:L].
        # These samples need to be added to the output_signal starting at index i*L.
        
        # Initialize output_signal to zeros of size N_input_signal + M - 1
        
        # For block i:
        # current_output_contribution = y_prime[:L]
        # output_signal[i*L : i*L + L] += current_output_contribution
        
        # This assumes output_signal is large enough and initialized to zero.
        # The total length of the output signal is N + M - 1.
        # The loop structure needs to place the correct parts.
        
        # Let's manage the output buffer more precisely.
        # The `output_signal` should be of size `N_input_signal + M - 1`.
        # The `y_prime` has length `P`. We use the first `L` samples.
        
        # The samples from `y_prime` (first `L` of them) need to be placed at `output_signal[i*L : i*L + L]`.
        
        # If the input signal is not fully divisible by L, the last block will be shorter.
        # The `end_index` handles this. The padding also accounts for this.
        
        # The final output will be output_signal[:N_input_signal + M - 1]
        
        # Let's re-implement the accumulation more clearly:
        # The i-th block's useful output segment is y_prime[:L].
        # These L samples contribute to the final output starting at index i*L.
        
        # Ensure the output_signal is large enough to hold the entire convolution result.
        # The full output length is N_input_signal + M - 1.
        # Initialize `output_signal` to zeros of this size.
        
        # `y_prime` is of length `P`. We are interested in `y_prime[:L]`.
        # These `L` samples are added to `output_signal` starting at index `i * L`.
        
        # The range for addition is `i*L` to `i*L + L - 1`.
        # We need to make sure we don't go out of bounds of `output_signal`.
        
        # The correct index range for addition:
        add_start = i * L
        add_end = min(add_start + L, len(output_signal))
        
        # The segment to add from y_prime is also limited to the available length.
        copy_len = add_end - add_start
        
        output_signal[add_start : add_end] += y_prime[:copy_len].real # Use real part if signal is real
        
    # Trim the output signal to the correct length if needed, although it should naturally be N + M - 1.
    # The loop naturally fills it up to N_input_signal + M - 1 assuming correct logic.
    
    print(f"Overlap-Add Convolution completed. Output signal length: {len(output_signal)}")
    
    # Optional: Verify with direct convolution (for comparison)
    # direct_output = np.convolve(x, h)
    # print(f"Direct Convolution output length: {len(direct_output)}")
    # # np.allclose(output_signal[:N_input_signal], direct_output[:N_input_signal]) # Compare prefixes
    
    # For visualization or further processing:
    # import matplotlib.pyplot as plt
    # plt.figure()
    # plt.plot(x, label='Input Signal')
    # plt.plot(output_signal, label='Overlap-Add Output')
    # # plt.plot(direct_output, label='Direct Convolution Output', linestyle='--')
    # plt.legend()
    # plt.title('Overlap-Add Block Convolution')
    # plt.show()
```

**Example (Conceptual MATLAB):**

```matlab
if ~isempty(h)
    num_blocks = ceil(N_input_signal / L); % Number of blocks
    output_signal = zeros(1, N_input_signal + M - 1); % Initialize output
    
    for i = 1:num_blocks
        % Extract the current input block
        start_index = (i-1) * L + 1;
        end_index = min(start_index + L - 1, N_input_signal);
        current_input_block = x(start_index:end_index);
        
        % Zero-pad the current input block to length P
        x_prime = [current_input_block, zeros(1, P - length(current_input_block))];
        
        % Compute FFT of the input block
        X = fft(x_prime);
        
        % Multiply in frequency domain
        Y_prime_freq = X .* H;
        
        % Compute Inverse FFT
        y_prime = ifft(Y_prime_freq);
        
        % Overlap and Add the result
        % The useful output from this block is the first L samples of y_prime.
        % These L samples contribute to the output_signal starting at index (i-1)*L + 1.
        
        % The segment to add is y_prime(1:L)
        % It's added to output_signal starting at index (i-1)*L + 1.
        
        add_start_idx = (i-1) * L + 1;
        add_end_idx = min(add_start_idx + L - 1, length(output_signal));
        
        copy_len = add_end_idx - add_start_idx + 1;
        
        output_signal(add_start_idx : add_end_idx) = output_signal(add_start_idx : add_end_idx) + y_prime(1:copy_len);
        
    end
    
    % The output_signal is already sized to N_input_signal + M - 1.
    % Ensure to take the real part if the input and filter are real.
    output_signal = real(output_signal);
    
    fprintf('Overlap-Add Convolution completed. Output signal length: %d\n', length(output_signal));
    
    % Optional: Verify with direct convolution
    % direct_output = conv(x, h);
    % disp(['Direct Convolution output length: ', num2str(length(direct_output))]);
    % Compare:
    % max(abs(output_signal(1:N_input_signal) - direct_output(1:N_input_signal)))
    
    % Plotting
    % figure;
    % plot(x); title('Input Signal');
    % figure;
    % plot(output_signal); title('Overlap-Add Output');
    % figure;
    % plot(direct_output); title('Direct Convolution Output');
end
```

**Important Note on `y_prime`:** The output `y_prime` from the IFFT is of length $P$. In the overlap-add method, the first $L$ samples of `y_prime` are the ones that form the useful part of the output for the current block. These $L$ samples are then added to the corresponding positions in the overall output signal.

## 5. Overlap-Add vs. Direct Convolution

**Direct Convolution:**
*   Calculates the full convolution sum for every output sample: $y[n] = \sum_{m=0}^{M-1} h[m] x[n-m]$.
*   Can be computationally intensive for long signals and filters.
*   Complexity is $O(NM)$, where $N$ is input length and $M$ is filter length.

**Block Convolution (Overlap-Add):**
*   Uses FFTs for convolution within blocks. FFT complexity is $O(P \log P)$.
*   Total complexity is approximately $O(\frac{N}{L} \cdot P \log P)$.
*   If $P$ is chosen appropriately (e.g., a power of 2 greater than $L+M-1$), and $L$ is chosen to be large enough, block convolution can be significantly faster than direct convolution for long signals and filters.

**Textbook Comparison:** Ingle and Proakis (2011) provide detailed comparisons of computational complexity between direct convolution and FFT-based block convolution methods, illustrating the efficiency gains.

## 6. Connection to Course Outcomes

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2)**
    *   This is demonstrated in Section 4.1 where a sample input signal (sum of sinusoids and noise) is generated.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2)**
    *   The core of this module relies on the property that convolution in the time domain is multiplication in the frequency domain, which is enabled by the DFT/FFT. The process of taking FFTs, multiplying, and taking inverse FFTs implicitly uses DFT properties.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2)**
    *   While this module is primarily software-based, the principles of block processing and efficient computation are fundamental to DSP hardware implementation. Chassaing (2008) would detail how these concepts are mapped to specialized DSP processors for real-time performance.
*   **CO4: Implement LTI systems (Knowledge Level: K3)**
    *   FIR filters are LTI systems. Implementing convolution, whether direct or block-based, is the process of realizing an FIR filter's response. This module directly addresses implementing an LTI system using an efficient method.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3)**
    *   The filter coefficients loaded from the previous experiment likely represent an FIR low-pass filter designed in a prior module. This module focuses on the *implementation* of such a filter, demonstrating its application.

## 7. Key Points to Remember

*   **Overlap-Add** is an efficient method for computing the convolution of a long signal with an FIR filter using FFTs.
*   The method involves breaking the input signal into blocks, zero-padding, performing FFT-based convolution on each block, and then carefully adding (overlapping) the results to form the final output.
*   The **FFT length ($P$)** must be at least $L+M-1$ for correct linear convolution via circular convolution.
*   The **block length ($L$)** influences efficiency and should be chosen considering the FFT size and filter length.
*   The output of each block's FFT-based convolution ($y'_i[n]$) has length $P$. The first $L$ samples of $y'_i[n]$ are the useful output samples for that block.
*   These $L$ samples are **added** to the output signal starting at the block's corresponding position (i.e., `output_signal[i*L : i*L + L] += y_prime[:L]`).
*   This method is significantly faster than direct convolution for long signals and filters.

## 8. Practice Questions and Exercises

1.  **Question:** What is the primary advantage of using block convolution (like Overlap-Add) over direct convolution for FIR filtering?
    **Answer:** Computational efficiency, especially for long signals and filters, due to the use of FFTs.

2.  **Question:** In the Overlap-Add method, what is the minimum required length for the FFT ($P$) when convolving input blocks of length $L$ with a filter of length $M$?
    **Answer:** $P \ge L+M-1$.

3.  **Question:** When processing block $i$ in the Overlap-Add method, which part of the result from the inverse FFT ($y'_i[n]$) is considered the "useful" output for that block, and where is it added in the final output signal?
    **Answer:** The first $L$ samples of $y'_i[n]$ are useful. They are added to the final output signal starting at index $i \cdot L$.

4.  **Exercise:** Using your loaded filter coefficients ($h[n]$ from the previous experiment), choose an input signal (e.g., a random signal or a simple sinusoid). Implement the Overlap-Add convolution in your chosen environment (Python/MATLAB).
    *   **Task 1:** Select a block length $L$ and an FFT length $P$ and justify your choices.
    *   **Task 2:** Compare the output of your Overlap-Add implementation with the output obtained using the built-in direct convolution function (e.g., `np.convolve` in Python or `conv` in MATLAB). Analyze the differences (they should be minimal due to floating-point precision).
    *   **Task 3 (Optional):** Measure the execution time of both methods for a very long input signal and compare them.

5.  **Exercise:** Consider an input signal $x[n]$ and a filter $h[n]$ of length 3.
    *   $x[n] = [1, 2, 3, 4, 5, 6]$
    *   $h[n] = [0.5, 1, 0.5]$ ($M=3$)
    *   Let's choose $L=3$. What would be the required FFT length $P$?
    *   **Calculation:** $P \ge L+M-1 = 3+3-1 = 5$. The next power of 2 is 8. So, $P=8$.
    *   **Task:** Manually trace the Overlap-Add process for the first two blocks.
        *   **Block 0:** Input $x_0[n] = [1, 2, 3]$. Pad to length 8: $x'_0[n] = [1, 2, 3, 0, 0, 0, 0, 0]$.
        *   Calculate $H = \text{FFT}(h \text{ padded to 8})$.
        *   Calculate $X_0 = \text{FFT}(x'_0[n])$.
        *   Calculate $Y'_0(k) = X_0(k) \cdot H(k)$.
        *   Calculate $y'_0[n] = \text{IFFT}(Y'_0(k))$.
        *   The first $L=3$ samples of $y'_0[n]$ are added to `output_signal[0:3]`.
        *   **Block 1:** Input $x_1[n] = [4, 5, 6]$. Pad to length 8: $x'_1[n] = [4, 5, 6, 0, 0, 0, 0, 0]$.
        *   Calculate $X_1 = \text{FFT}(x'_1[n])$.
        *   Calculate $Y'_1(k) = X_1(k) \cdot H(k)$.
        *   Calculate $y'_1[n] = \text{IFFT}(Y'_1(k))$.
        *   The first $L=3$ samples of $y'_1[n]$ are added to `output_signal[3:6]`.

This detailed note provides a comprehensive understanding of the Overlap-Add block convolution method, its implementation, and its significance in digital signal processing, directly referencing the learning outcomes and textbooks provided.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
