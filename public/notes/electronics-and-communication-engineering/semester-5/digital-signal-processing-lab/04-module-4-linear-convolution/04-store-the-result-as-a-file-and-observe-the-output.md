---
title: "Store the result as a file and observe the output."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 4: Linear convolution"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec43"
status: "completed"
scrapedAt: "2026-05-23T17:56:04.892Z"
---
# DIGITAL SIGNAL PROCESSING LAB: Module 4 - Linear Convolution

## Topic: Store the Result as a File and Observe the Output

This module focuses on understanding and implementing linear convolution, a fundamental operation in Digital Signal Processing (DSP). Specifically, this topic delves into how to store the computed convolution results in a file and subsequently observe and analyze these results. This practical aspect is crucial for verifying theoretical understanding and for real-world applications where processed signals need to be saved for further analysis or use.

---

### **1. Learning Outcomes Covered**

This topic directly contributes to the following learning outcomes:

*   **Practical Implementation of Linear Convolution:** While not explicitly stated as a learning outcome for *this specific topic*, the ability to store and observe results is integral to implementing and verifying linear convolution, which is a core concept in DSP.
*   **Data Management and Analysis:** Understanding how to store and retrieve data is a fundamental skill in any practical computing domain, including DSP labs.

---

### **2. Key Concepts and Definitions**

#### **2.1. Linear Convolution**

*   **Definition:** Linear convolution is a mathematical operation that describes the effect of a Linear Time-Invariant (LTI) system on an input signal. For discrete-time signals, it is defined as:
    $y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$
    where:
    *   $y[n]$ is the output signal.
    *   $x[n]$ is the input signal.
    *   $h[n]$ is the impulse response of the LTI system.
    *   $*$ denotes the convolution operation.

*   **Purpose:** Convolution is used to determine the output of an LTI system given its impulse response and an input signal. It's fundamental to understanding system behavior, filtering, and signal synthesis.

#### **2.2. Impulse Response ($h[n]$)**

*   **Definition:** The impulse response of an LTI system is its output when the input is the unit impulse signal, $\delta[n]$.
    $\delta[n] = 1$ for $n=0$ and $0$ otherwise.
*   **Significance:** The impulse response completely characterizes an LTI system. Any output can be obtained by convolving the input signal with the system's impulse response.

#### **2.3. Storing Results as a File**

*   **Purpose:** Saving the computed output signal ($y[n]$) to a file allows for:
    *   **Offline Analysis:** Examining the results without having to re-run the computation.
    *   **Visualization:** Plotting the signal using external tools or plotting functions.
    *   **Data Exchange:** Sharing results with others or using them in other applications.
    *   **Verification:** Comparing computed results against expected outcomes or other processing methods.

*   **Common File Formats:**
    *   **Text Files (.txt, .csv):** Suitable for storing numerical data in a human-readable format. CSV (Comma Separated Values) is particularly common for tabular data.
    *   **Binary Files (.mat for MATLAB, .npy for NumPy/Python):** More efficient for storing numerical arrays, especially large ones. These formats are often proprietary to specific software but offer faster read/write speeds.

#### **2.4. Observing Output**

*   **Methods:**
    *   **Printing to Console:** Displaying the first few or last few samples of the output directly in the lab environment (e.g., MATLAB command window, Python interpreter).
    *   **Plotting:** Visualizing the signal as a graph of amplitude versus sample number. This is often the most intuitive way to "observe" the output.
    *   **Reading from File:** Loading the stored file back into the environment for analysis or plotting.

---

### **3. Practical Implementation and Examples**

The process typically involves:

1.  **Defining Input Signal ($x[n]$):** This could be a simple pulse, a sine wave, or a more complex signal.
2.  **Defining Impulse Response ($h[n]$):** This defines the LTI system being simulated.
3.  **Performing Convolution:** Using the appropriate function or implementing the convolution sum.
4.  **Storing the Output:** Using file I/O functions to save the result.
5.  **Observing the Output:** Plotting or inspecting the saved data.

**Example Scenario (using MATLAB syntax for illustration):**

Let's consider a simple LTI system with an impulse response $h[n] = [1, 2, 1]$ and an input signal $x[n] = [1, 2, 3]$.

**Steps:**

1.  **Define Signals:**
    ```matlab
    x = [1, 2, 3]; % Input signal
    h = [1, 2, 1]; % Impulse response
    ```

2.  **Perform Convolution:**
    ```matlab
    y = conv(x, h); % MATLAB's built-in convolution function
    ```
    *   **Result:** `y` will be `[1, 4, 7, 6, 3]`

3.  **Store the Result as a File (e.g., CSV):**
    ```matlab
    % Save to a CSV file named 'convolution_output.csv'
    % Each sample will be on a new line
    csvwrite('convolution_output.csv', y);
    ```
    *   The `csvwrite` function in MATLAB (or similar functions like `savetxt` in NumPy) writes an array to a text file, with values separated by commas (or other delimiters) and rows separated by newlines.

4.  **Observe the Output:**

    *   **a) Printing to Console:**
        ```matlab
        disp('Output signal y:');
        disp(y);
        ```
        This would display:
        ```
        Output signal y:
             1     4     7     6     3
        ```

    *   **b) Plotting the Output:**
        ```matlab
        figure; % Create a new figure window
        stem(y); % Create a stem plot for discrete-time signals
        title('Output Signal y[n] after Convolution');
        xlabel('Sample Number (n)');
        ylabel('Amplitude');
        grid on;
        ```
        This will generate a plot showing the amplitude of `y` at each sample index.

    *   **c) Reading from the Stored File and Plotting:**
        ```matlab
        % Read the data back from the CSV file
        read_y = csvread('convolution_output.csv');

        % Plot the data read from the file
        figure;
        stem(read_y);
        title('Output Signal from File');
        xlabel('Sample Number (n)');
        ylabel('Amplitude');
        grid on;
        ```
        This step confirms that the data was saved correctly and can be loaded back for analysis.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **4. Textbooks and References**

*   **Ingle & Proakis (Cengage Learning, 3rd Ed., 2011):** This textbook will provide a strong theoretical foundation for linear convolution, including its mathematical properties and applications. Look for chapters discussing LTI systems, impulse response, and convolution sum. The book might also offer MATLAB examples for implementing these concepts.
*   **Downey (Green Tea Press, 1st Ed. 2019):** "Think DSP" is known for its Python-centric approach. It will likely explain convolution conceptually and provide Python code snippets. For storing and observing output, expect to see Python's file handling capabilities (e.g., `open()`, `write()`) and plotting libraries like Matplotlib.
*   **Chassaing (Wiley & Sons, 2/e. 2008):** This book focuses on C and the TMS320C6x DSK. It will be invaluable for understanding how to implement convolution and manage data storage (e.g., to memory or file systems) on a DSP processor. Expect lower-level details about data types and memory access.
*   **Oppenheim & Schafer (Pearson Education, 4th Ed., 2018):** This is a classic and comprehensive reference. It will offer deep theoretical insights into convolution, including its relationship with the Z-transform and frequency-domain representations. The book will provide the fundamental mathematical rigor behind the operations.

---

### **5. Alignment with Course Outcomes (COs)**

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2)**
    *   **Relevance:** To perform convolution, you first need to generate input signals ($x[n]$). Storing and observing the output of these generated signals confirms their properties and the convolution process.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2)**
    *   **Relevance:** While this topic is about time-domain convolution, the convolution theorem states that convolution in the time domain is equivalent to multiplication in the frequency domain. Saving and observing the output of time-domain convolution allows for comparison with frequency-domain multiplication, thereby verifying DFT properties.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2)**
    *   **Relevance:** If using a DSP board (like the TMS320C6x mentioned in Chassaing's book), storing results to a file might involve writing to external storage or transferring data from the board to a computer. This directly relates to interfacing with hardware. Even without specific hardware, saving data is a fundamental step in moving results from a processing environment to a computer for further analysis.
*   **CO4: Implement LTI systems (Knowledge Level: K3)**
    *   **Relevance:** This is the most direct link. Storing and observing the output is the final step in *implementing* an LTI system. It's how you verify that your implementation correctly simulates the system's behavior. The impulse response $h[n]$ defines the LTI system, and its convolution with $x[n]$ produces $y[n]$. Saving $y[n]$ allows you to analyze the system's response.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3)**
    *   **Relevance:** FIR filters are LTI systems. The impulse response of an FIR filter is its coefficients. Convolving an input signal with these coefficients produces the filtered output. Saving and observing this filtered output is crucial for evaluating the filter's performance (e.g., how well it attenuates unwanted frequencies).

---

### **6. Important Points to Remember**

*   **Convolution Output Length:** If the input signal $x[n]$ has length $N_x$ and the impulse response $h[n]$ has length $N_h$, the output signal $y[n]$ will have a length of $N_x + N_h - 1$. This is crucial for setting up arrays and understanding the results.
*   **Indexing:** Be mindful of array indexing in your chosen programming language (e.g., MATLAB uses 1-based indexing, Python uses 0-based indexing). This can affect how you implement the convolution sum and interpret the results.
*   **File Permissions:** Ensure your program has the necessary permissions to write to the directory where you intend to save the output file.
*   **Data Types:** For large datasets or specific DSP applications, choose appropriate data types (e.g., floating-point) to maintain precision.
*   **Visualization is Key:** Always try to visualize your results. A well-crafted plot can reveal patterns and anomalies that might be missed by just looking at numerical data.
*   **File Handling Best Practices:** Use `try-catch` blocks (or equivalent error handling) when dealing with file operations to gracefully handle potential errors (e.g., file not found, disk full). Close files after writing to ensure data is flushed and resources are released.

---

### **7. Practice Questions and Exercises**

**Exercise 1: Basic Convolution and File Saving**

1.  **Task:** Implement a program in your chosen environment (MATLAB, Python) to perform linear convolution between two signals:
    *   Input signal $x[n] = [1, 0, -1, 0, 1]$
    *   Impulse response $h[n] = [0.5, 0.5]$
2.  **Task:** Store the resulting output signal $y[n]$ into a text file named `exercise1_output.txt`, with each sample on a new line.
3.  **Task:** Display the first 5 samples of the output signal to the console.
4.  **Task:** Plot the complete output signal using a stem plot.

**Solution Outline:**

*   **MATLAB:**
    ```matlab
    x = [1, 0, -1, 0, 1];
    h = [0.5, 0.5];
    y = conv(x, h);
    disp('Output signal y:');
    disp(y(1:5)); % Display first 5 samples
    
    % Save to file
    fid = fopen('exercise1_output.txt', 'w'); % Open file for writing
    fprintf(fid, '%f\n', y); % Write each sample followed by a newline
    fclose(fid); % Close the file
    
    % Plotting
    figure;
    stem(y);
    title('Exercise 1: Convolution Output');
    xlabel('n');
    ylabel('y[n]');
    grid on;
    ```
*   **Python (using NumPy and Matplotlib):**
    ```python
    import numpy as np
    import matplotlib.pyplot as plt

    x = np.array([1, 0, -1, 0, 1])
    h = np.array([0.5, 0.5])
    y = np.convolve(x, h)
    print('Output signal y:')
    print(y[:5]) # Display first 5 samples

    # Save to file
    np.savetxt('exercise1_output.txt', y)

    # Plotting
    plt.figure()
    plt.stem(y)
    plt.title('Exercise 1: Convolution Output')
    plt.xlabel('n')
    plt.ylabel('y[n]')
    plt.grid(True)
    plt.show()
    ```

**Exercise 2: Convolution with a Sine Wave**

1.  **Task:** Generate a discrete-time sine wave:
    *   Frequency $f = 10$ Hz
    *   Sampling frequency $Fs = 100$ Hz
    *   Number of samples $N = 100$
    *   Amplitude $A = 1$
    The signal is $x[n] = A \sin(2\pi f \frac{n}{Fs})$.
2.  **Task:** Use an impulse response representing a simple moving average filter: $h[n] = \frac{1}{3}[1, 1, 1]$.
3.  **Task:** Compute the convolution $y[n] = x[n] * h[n]$.
4.  **Task:** Store the output signal $y[n]$ in a file named `sine_convolution.csv`.
5.  **Task:** Load the data back from `sine_convolution.csv` into a new variable and verify that it matches the computed $y[n]$. Plot both the original sine wave and the filtered output.

**Solution Outline:**

*   **MATLAB:**
    ```matlab
    Fs = 100; % Sampling frequency
    f = 10;   % Frequency of sine wave
    N = 100;  % Number of samples
    t = (0:N-1)/Fs; % Time vector
    x = sin(2*pi*f*t); % Input sine wave
    
    h = (1/3)*ones(1, 3); % Moving average impulse response
    
    y = conv(x, h);
    
    % Store to CSV
    csvwrite('sine_convolution.csv', y);
    
    % Load back and verify
    read_y = csvread('sine_convolution.csv');
    if isequal(y, read_y)
        disp('Data loaded successfully and matches original.');
    else
        disp('Error: Loaded data does not match.');
    end
    
    % Plotting
    figure;
    subplot(2,1,1);
    stem(x);
    title('Original Sine Wave x[n]');
    ylabel('Amplitude');
    grid on;
    
    subplot(2,1,2);
    stem(y);
    title('Filtered Output y[n]');
    xlabel('Sample Number (n)');
    ylabel('Amplitude');
    grid on;
    ```

---

This comprehensive set of notes covers the theoretical underpinnings of storing and observing convolution results, practical implementation steps, and relevant coursework connections, drawing from the provided textbooks and references. Remember to adapt the code examples to your specific lab environment and programming language.