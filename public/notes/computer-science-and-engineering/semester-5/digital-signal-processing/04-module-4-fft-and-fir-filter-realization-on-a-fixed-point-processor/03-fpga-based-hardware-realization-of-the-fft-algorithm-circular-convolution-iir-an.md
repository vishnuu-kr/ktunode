---
title: "FPGA based hardware realization of the FFT algorithm, circular convolution,  IIR and FIR filter structures using iVerilog"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 4: FFT and FIR Filter realization on a fixed point processor "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7f2"
status: "completed"
scrapedAt: "2026-05-20T16:46:18.641Z"
---
# Digital Signal Processing: Module 4 - FPGA Based Hardware Realization with iVerilog

## Topic: FPGA Based Hardware Realization of FFT, Circular Convolution, IIR and FIR Filters

**Learning Outcomes:** Upon completion of this module, you will be able to:

*   Understand the principles of FPGA based hardware realization for digital signal processing algorithms.
*   Implement the FFT algorithm on an FPGA using iVerilog.
*   Implement circular convolution on an FPGA using iVerilog.
*   Realize different IIR and FIR filter structures on an FPGA using iVerilog.
*   Analyze the trade-offs involved in different hardware implementations.

---

### 1. Introduction to FPGA Based Hardware Realization for DSP

*   **What is an FPGA?** A Field-Programmable Gate Array (FPGA) is a semiconductor device containing configurable logic blocks (CLBs) connected by programmable interconnects.  This allows designers to implement custom digital circuits after manufacturing.

*   **Why use FPGAs for DSP?**
    *   **Parallel Processing:** FPGAs enable massive parallel processing, making them suitable for computationally intensive DSP tasks.
    *   **Real-time Performance:** The dedicated hardware allows for real-time or near-real-time processing, crucial for applications like radar, image processing, and communication systems.
    *   **Flexibility:** Designs can be modified and reconfigured after deployment, offering adaptability to changing requirements.
    *   **Customization:**  You can tailor the hardware architecture to the specific DSP algorithm, optimizing for speed, power consumption, and resource utilization.

*   **Key Components of an FPGA:**
    *   **Configurable Logic Blocks (CLBs):** Contain combinational logic and registers for implementing logic functions.
    *   **Programmable Interconnects:** Connect the CLBs to form a desired circuit.
    *   **Input/Output Blocks (IOBs):** Provide the interface between the FPGA and external devices.
    *   **Memory Blocks:**  On-chip memory resources for storing data and coefficients.
    *   **DSP Slices:** Dedicated hardware blocks optimized for DSP operations such as multiplication and accumulation.  (Often found in modern FPGAs).

*   **FPGA Design Flow:**
    1.  **Specification:** Define the algorithm's requirements and performance goals.
    2.  **Design:**  Create the hardware architecture, often using a Hardware Description Language (HDL) like Verilog or VHDL.
    3.  **Synthesis:**  Translate the HDL code into a gate-level representation.
    4.  **Implementation:** Place and route the design on the FPGA, assigning logic functions to CLBs and connecting them with interconnects.
    5.  **Verification:**  Simulate and test the design to ensure it meets the specifications.
    6.  **Programming:**  Download the configuration file to the FPGA.

*   **iVerilog:** An open-source Verilog simulator and synthesis tool.  It allows you to simulate your Verilog designs and generate gate-level netlists. While iVerilog is excellent for simulation and basic synthesis, for full FPGA implementation, you will typically use the vendor-provided tools (e.g., Xilinx Vivado, Intel Quartus Prime).  iVerilog provides a solid platform for understanding the logic and verifying functionality before moving to more complex tools.

---

### 2. FPGA Based Hardware Realization of the FFT Algorithm

*   **FFT Algorithm Overview:** The Fast Fourier Transform (FFT) is an efficient algorithm for computing the Discrete Fourier Transform (DFT).  It exploits symmetries in the DFT computation to reduce the number of operations from O(N^2) to O(N log N), where N is the number of data points.

*   **Radix-2 Decimation-in-Time (DIT) FFT:**  A common FFT algorithm suitable for hardware implementation.

    *   **Butterfly Structure:** The core computational element in the Radix-2 FFT. It takes two complex inputs, *a* and *b*, and produces two complex outputs: *a + b* *W<sub>N</sub><sup>k</sup>* and *a - b* *W<sub>N</sub><sup>k</sup>*, where *W<sub>N</sub><sup>k</sup>* is the twiddle factor.

    *   **Twiddle Factors:** Complex constants (roots of unity) that rotate the input data at each stage of the FFT.  *W<sub>N</sub><sup>k</sup> = e<sup>-j2πk/N</sup>*

    *   **Bit Reversal:**  The DIT FFT requires the input data to be in bit-reversed order.

*   **FPGA Implementation Considerations:**

    *   **Parallelism:** Exploit the parallel nature of the FFT algorithm. Multiple butterfly units can operate simultaneously to speed up the computation.
    *   **Memory Architecture:**  Efficient memory access is crucial. Use dual-port RAMs to allow simultaneous read and write operations.
    *   **Fixed-Point Arithmetic:** FPGAs often use fixed-point arithmetic, which requires careful consideration of quantization effects and scaling to prevent overflow and underflow.
    *   **Pipelining:** Pipeline the butterfly units to increase throughput.
    *   **Resource Utilization:** Optimize the design to minimize the number of logic resources (CLBs, DSP slices) used.

*   **iVerilog Implementation Example (Simplified Butterfly Unit):**

    ```verilog
    module butterfly (
        input clk,
        input rst,
        input signed [7:0] a_re,  // Real part of input a
        input signed [7:0] a_im,  // Imaginary part of input a
        input signed [7:0] b_re,  // Real part of input b
        input signed [7:0] b_im,  // Imaginary part of input b
        input signed [7:0] w_re,  // Real part of twiddle factor
        input signed [7:0] w_im,  // Imaginary part of twiddle factor
        output reg signed [15:0] out1_re, // Real part of output a + b*W
        output reg signed [15:0] out1_im, // Imaginary part of output a + b*W
        output reg signed [15:0] out2_re, // Real part of output a - b*W
        output reg signed [15:0] out2_im  // Imaginary part of output a - b*W
    );

    reg signed [15:0] mult_re, mult_im;

    always @(posedge clk) begin
        if (rst) begin
            out1_re <= 0;
            out1_im <= 0;
            out2_re <= 0;
            out2_im <= 0;
        end else begin
            // Complex multiplication: (b_re + j*b_im) * (w_re + j*w_im) = (b_re*w_re - b_im*w_im) + j(b_re*w_im + b_im*w_re)
            mult_re <= (b_re * w_re) - (b_im * w_im);
            mult_im <= (b_re * w_im) + (b_im * w_re);

            // Addition and subtraction
            out1_re <= a_re + mult_re;
            out1_im <= a_im + mult_im;
            out2_re <= a_re - mult_re;
            out2_im <= a_im - mult_im;
        end
    end

    endmodule
    ```

    *   **Explanation:** This Verilog module implements a single butterfly unit. It takes two complex inputs (*a*, *b*) and a complex twiddle factor (*W*) as inputs and produces two complex outputs (*a + b* *W*, *a - b* *W*).  The `signed [7:0]` declares 8-bit signed fixed-point numbers. The output is 16-bits to avoid overflow after multiplication. A full FFT implementation would involve cascading multiple butterfly units in stages, with appropriate memory for storing intermediate results and twiddle factors. Reset functionality is included for proper initialization.

*   **Scaling and Overflow Prevention:**  To prevent overflow in fixed-point arithmetic, scale the inputs at each stage by a factor of 0.5 (right shift by 1 bit). This reduces the signal magnitude and prevents overflow.

*   **Practice Question:** Design a 4-point Radix-2 DIT FFT using the butterfly unit described above.  Show the interconnections between the butterfly units and memory elements.

*   **Answer:** This would involve two stages of butterfly units.  The first stage operates on adjacent pairs of input data. The second stage operates on pairs of data separated by two elements.  Memory would be needed to store the bit-reversed input data and the intermediate results between stages.  Twiddle factors for each stage would also be needed.

---

### 3. FPGA Based Hardware Realization of Circular Convolution

*   **Circular Convolution Overview:** Circular convolution is a convolution operation performed periodically.  Instead of assuming that the signals are zero outside of their defined ranges, they are treated as periodic.

*   **Relationship to Linear Convolution:** The circular convolution of two sequences is equal to their linear convolution if the sequences are zero-padded to a length of *N + M - 1*, where *N* and *M* are the lengths of the original sequences.

*   **FFT-based Circular Convolution:** Circular convolution can be efficiently computed using the FFT algorithm:

    1.  Compute the FFT of both input sequences.
    2.  Multiply the resulting frequency-domain representations point-by-point.
    3.  Compute the inverse FFT (IFFT) of the product.

*   **FPGA Implementation:**  The FPGA implementation of circular convolution leverages the already implemented FFT blocks.

    1.  **FFT Blocks:** Use the FFT module discussed earlier.
    2.  **Multiplier:** Implement a complex multiplier to multiply the FFT outputs.
    3.  **IFFT Block:** Implement an inverse FFT module. This is very similar to the FFT block, but with conjugated twiddle factors and a scaling factor of 1/N.
    4.  **Memory:**  Allocate memory for storing the FFT and IFFT outputs.

*   **iVerilog Implementation (Complex Multiplier):**

    ```verilog
    module complex_multiplier (
        input clk,
        input rst,
        input signed [7:0] a_re,
        input signed [7:0] a_im,
        input signed [7:0] b_re,
        input signed [7:0] b_im,
        output reg signed [15:0] out_re,
        output reg signed [15:0] out_im
    );

    always @(posedge clk) begin
        if (rst) begin
            out_re <= 0;
            out_im <= 0;
        end else begin
            // (a_re + j*a_im) * (b_re + j*b_im) = (a_re*b_re - a_im*b_im) + j(a_re*b_im + a_im*b_re)
            out_re <= (a_re * b_re) - (a_im * b_im);
            out_im <= (a_re * b_im) + (a_im * b_re);
        end
    end

    endmodule
    ```

    *   **Explanation:** This Verilog module implements a complex multiplier. It takes two complex inputs *a* and *b* as inputs and outputs their complex product.  `signed [7:0]` declares 8-bit signed fixed-point numbers. The output is 16-bits to avoid overflow after multiplication.

*   **Memory Management for FFT-based Convolution:**  Careful memory management is needed to store the FFT outputs of both sequences, multiply them, and store the result before performing the IFFT.  Consider using block RAMs within the FPGA.

*   **Practice Question:** Draw a block diagram showing the data flow for implementing circular convolution using FFTs on an FPGA. Label each block and indicate the data widths and types.

*   **Answer:** The block diagram would include:
    *   Two FFT modules (Input Sequence 1, Input Sequence 2)
    *   A complex multiplier module
    *   An IFFT module
    *   Memory blocks for storing intermediate results (FFT outputs, product, IFFT output)
    *   Labels should indicate data widths (e.g., 8-bit complex, 16-bit complex) and data types (fixed-point).

---

### 4. FPGA Based Hardware Realization of IIR Filter Structures

*   **IIR Filter Overview:** Infinite Impulse Response (IIR) filters are recursive filters that use feedback to achieve sharp filter characteristics.  They are defined by their transfer function, which has both poles and zeros.

*   **Common IIR Filter Structures:**

    *   **Direct Form I:** A straightforward implementation of the difference equation. Can be susceptible to quantization noise.
    *   **Direct Form II:** An equivalent form of Direct Form I with a transposed structure. Generally preferred over Direct Form I due to better numerical stability.  Often referred to as *Canonical* form.
    *   **Cascade Form:** Implements the filter as a cascade of second-order sections (biquads). Offers better control over quantization noise compared to direct forms.
    *   **Parallel Form:** Decomposes the filter into a sum of parallel second-order sections. Also provides good control over quantization noise.

*   **FPGA Implementation Considerations:**

    *   **Multipliers and Adders:** IIR filters require multipliers and adders for implementing the filter coefficients and feedback loops.
    *   **Delay Elements:**  Flip-flops or registers are used as delay elements to store past input and output samples.
    *   **Quantization Effects:**  Coefficient quantization and signal quantization can significantly affect the filter's performance.  Careful selection of the word length is crucial.
    *   **Stability:**  IIR filters must be designed to be stable. In fixed-point implementations, the poles must remain within the unit circle to avoid instability due to quantization.

*   **iVerilog Implementation (Direct Form II Biquad Section):**

    ```verilog
    module iir_biquad (
        input clk,
        input rst,
        input signed [7:0] x,  // Input sample
        input signed [7:0] b0,  // Filter coefficients
        input signed [7:0] b1,
        input signed [7:0] b2,
        input signed [7:0] a1,
        input signed [7:0] a2,
        output reg signed [15:0] y   // Output sample
    );

    reg signed [15:0] w, w_d1, w_d2; // Internal registers

    always @(posedge clk) begin
        if (rst) begin
            w <= 0;
            w_d1 <= 0;
            w_d2 <= 0;
            y <= 0;
        end else begin
            // Direct Form II Equations:
            // w[n] = x[n] - a1*w[n-1] - a2*w[n-2]
            // y[n] = b0*w[n] + b1*w[n-1] + b2*w[n-2]

            w <= x - ((a1 * w_d1) >>> 7) - ((a2 * w_d2) >>> 7); // Right shift for scaling
            y <= ((b0 * w) >>> 7) + ((b1 * w_d1) >>> 7) + ((b2 * w_d2) >>> 7);  // Right shift for scaling

            w_d2 <= w_d1;
            w_d1 <= w;
        end
    end

    endmodule
    ```

    *   **Explanation:** This Verilog module implements a Direct Form II biquad section. The `>>> 7` performs a right shift by 7 bits which acts as a division by 128 (2^7) and helps to keep the intermediate signal `w` from overflowing.  Careful selection of scaling factors is crucial for fixed-point IIR filter implementations. The filter coefficients (`b0`, `b1`, `b2`, `a1`, `a2`) are inputs to the module. The `w`, `w_d1`, and `w_d2` registers store the intermediate values.  The code performs the necessary multiplications and additions to implement the filter. Reset functionality is included.

*   **Scaling to Prevent Overflow:** Scaling intermediate signals is essential to prevent overflow in fixed-point IIR filters. Techniques include:
    *   **Coefficient Scaling:** Scale the filter coefficients so that the frequency response of the filter is less than or equal to 1.
    *   **Node Scaling:** Scale intermediate signals at various nodes in the filter structure to prevent overflow.

*   **Practice Question:** Explain the trade-offs between Direct Form I and Direct Form II IIR filter structures in terms of hardware implementation and numerical stability.

*   **Answer:**
    *   **Hardware Implementation:** Direct Form I is simpler to implement because it directly follows the difference equation. Direct Form II requires an extra register for the intermediate signal.
    *   **Numerical Stability:** Direct Form II generally has better numerical stability than Direct Form I because it minimizes the number of delay elements, which reduces the accumulation of quantization errors.

---

### 5. FPGA Based Hardware Realization of FIR Filter Structures

*   **FIR Filter Overview:** Finite Impulse Response (FIR) filters are non-recursive filters that have a finite-length impulse response. They are always stable and can be designed to have linear phase.

*   **Common FIR Filter Structures:**

    *   **Direct Form:** The most straightforward implementation, directly implementing the convolution sum.
    *   **Transposed Form:** An equivalent form of the direct form with a transposed structure. Often preferred for FPGAs due to its efficient pipelining capabilities.
    *   **Symmetric FIR Filters:** For linear-phase FIR filters, the coefficients are symmetric, which can be exploited to reduce the number of multiplications required.
    *   **Frequency Sampling:** Realizes the FIR filter based on its frequency samples. Useful when the desired frequency response is known.

*   **FPGA Implementation Considerations:**

    *   **Multipliers and Adders:** FIR filters require multipliers and adders for implementing the convolution sum.
    *   **Delay Elements:**  Flip-flops or registers are used as delay elements to store past input samples.
    *   **Resource Utilization:**  The number of multipliers and adders required increases linearly with the filter order.
    *   **Pipelining:** Pipelining can be used to increase the throughput of the FIR filter.
    *   **Distributed Arithmetic:**  A technique that replaces multipliers with look-up tables (LUTs) and adders, potentially reducing the hardware resources required.

*   **iVerilog Implementation (Direct Form FIR Filter):**

    ```verilog
    module fir_filter (
        input clk,
        input rst,
        input signed [7:0] x, // Input sample
        input signed [7:0] h[0:3], // Filter coefficients (4 taps)
        output reg signed [15:0] y // Output sample
    );

    reg signed [7:0] delay_line [0:3]; // Delay line

    always @(posedge clk) begin
        if (rst) begin
            y <= 0;
            delay_line[0] <= 0;
            delay_line[1] <= 0;
            delay_line[2] <= 0;
            delay_line[3] <= 0;

        end else begin
            // Update delay line
            delay_line[0] <= x;
            delay_line[1] <= delay_line[0];
            delay_line[2] <= delay_line[1];
            delay_line[3] <= delay_line[2];

            // Calculate output (convolution sum)
            y <= (h[0] * delay_line[0]) + (h[1] * delay_line[1]) + (h[2] * delay_line[2]) + (h[3] * delay_line[3]);
        end
    end

    endmodule
    ```

    *   **Explanation:** This Verilog module implements a direct form FIR filter with 4 taps. `x` is the input signal, and `h[0:3]` is an array representing the filter coefficients.  `delay_line` is an array of registers representing the delay line. The `always @(posedge clk)` block updates the delay line with each clock cycle and calculates the output by summing the products of the coefficients and the delayed input samples.  Reset functionality included.

*   **Optimization using Symmetry:** For symmetric FIR filters (linear-phase filters), exploit the symmetry in the coefficients to reduce the number of multipliers.  For example, if h[0] == h[3] and h[1] == h[2], the number of multiplications can be almost halved.

*   **Practice Question:** Modify the `fir_filter` module above to implement a linear-phase FIR filter with coefficients h[0] = 1, h[1] = 2, h[2] = 2, and h[3] = 1, taking advantage of the symmetry.

*   **Answer:**

    ```verilog
    module fir_filter_symmetric (
        input clk,
        input rst,
        input signed [7:0] x,
        input signed [7:0] h0,  // h[0] and h[3]
        input signed [7:0] h1,  // h[1] and h[2]
        output reg signed [15:0] y
    );

    reg signed [7:0] delay_line [0:3];

    always @(posedge clk) begin
        if (rst) begin
            y <= 0;
            delay_line[0] <= 0;
            delay_line[1] <= 0;
            delay_line[2] <= 0;
            delay_line[3] <= 0;
        end else begin
            // Update delay line
            delay_line[0] <= x;
            delay_line[1] <= delay_line[0];
            delay_line[2] <= delay_line[1];
            delay_line[3] <= delay_line[2];

            // Calculate output using symmetry
            y <= (h0 * (delay_line[0] + delay_line[3])) + (h1 * (delay_line[1] + delay_line[2]));
        end
    end

    endmodule
    ```

    *   **Explanation:** This modified module uses only two multipliers instead of four by exploiting the symmetry of the coefficients.  It computes `delay_line[0] + delay_line[3]` and `delay_line[1] + delay_line[2]` first and then multiplies the results by `h0` and `h1`, respectively.

---

### 6. Important Points to Remember

*   **Fixed-Point Arithmetic:** Be mindful of quantization errors, scaling, and overflow in fixed-point implementations.
*   **Resource Optimization:** Strive to minimize the number of CLBs, DSP slices, and memory resources used.
*   **Pipelining:** Use pipelining to improve the throughput of your designs.
*   **Modular Design:** Break down complex algorithms into smaller, manageable modules.
*   **Testing and Verification:** Thoroughly test your designs using simulation and hardware validation.
*   **iVerilog is a simulator and synthesiser, not a full FPGA implementation tool.**  You'll need vendor-specific tools (Xilinx Vivado, Intel Quartus Prime) for generating bitstreams for FPGAs.

---

These notes provide a comprehensive overview of FPGA-based hardware realization of FFT, circular convolution, IIR, and FIR filters using iVerilog.  Remember to practice with these concepts and experiment with different implementations to gain a deeper understanding. Good luck!
