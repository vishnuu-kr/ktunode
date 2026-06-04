---
title: "Equalization – Linear and non-linear equalization"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed43"
status: "completed"
scrapedAt: "2026-05-23T17:59:20.995Z"
---
# Advanced Communication Theory - Module 4: Path Loss and Shadowing

## Topic: Equalization – Linear and Non-Linear Equalization

### 1. Introduction to Equalization

#### 1.1 What is Equalization?

Equalization is a process used in communication systems to counteract the distortion introduced by the communication channel. In wireless communication, this distortion is primarily caused by **Intersymbol Interference (ISI)**.

#### 1.2 Causes of ISI in Wireless Channels

*   **Multipath Propagation:** Signals take multiple paths to reach the receiver, arriving at different times with different amplitudes and phases. This causes delayed versions of transmitted symbols to overlap with subsequent symbols. (Rappaport, 2022)
*   **Channel Non-Linearities:** Although less common in the physical channel itself, non-linear components in the transmitter or receiver can also contribute to distortion.
*   **Frequency Selective Fading:** When the channel's characteristics vary significantly across the bandwidth of the transmitted signal, different frequency components experience different fading, leading to ISI. (Goldsmith, 2005)

#### 1.3 Why is Equalization Necessary?

ISI can severely degrade the performance of a communication system, leading to:

*   Increased Bit Error Rate (BER).
*   Reduced data rates.
*   Inability of the receiver to correctly detect transmitted symbols.

Equalization aims to **"undo"** the distortion caused by the channel, restoring the transmitted signal to a form that can be accurately decoded by the receiver. (Haykin, 2020)

### 2. Channel Modeling for Equalization

To design an equalizer, we need to model the effect of the channel. A common model for a linear, time-invariant (LTI) channel is as a **Finite Impulse Response (FIR)** filter.

#### 2.1 FIR Channel Model

The received signal $y(t)$ can be represented as the convolution of the transmitted signal $x(t)$ with the channel's impulse response $h(t)$, plus noise $n(t)$:

$$y(t) = x(t) * h(t) + n(t)$$

If we consider discrete-time signals (after sampling and pulse shaping), the received signal $y[n]$ is given by:

$$y[n] = \sum_{k} x[n-k]h[k] + n[n]$$

where $h[k]$ represents the discrete-time impulse response of the channel. The ISI arises from the non-zero values of $h[k]$ for $k \neq 0$.

**Goal of Equalization:** To design an equalizer, typically another FIR filter with coefficients $w[n]$, such that the output of the equalizer $z[n]$ closely approximates a desired response. Ideally, the combined response of the channel and the equalizer ($h_{eq}[n] = h[n] * w[n]$) is an impulse, meaning $h_{eq}[0] = 1$ and $h_{eq}[k] = 0$ for $k \neq 0$. This is known as **Zero Forcing (ZF)**.

### 3. Linear Equalization

Linear equalizers operate by applying a linear transformation (typically FIR filtering) to the received signal to mitigate ISI.

#### 3.1 Zero-Forcing (ZF) Equalizer

*   **Objective:** To completely eliminate ISI at the sampling instants.
*   **Design:** The equalizer's impulse response $w_{ZF}[n]$ is designed such that the overall channel and equalizer impulse response $h_{eq}[n]$ has zeros at all sampling instants except the desired one.
    $$h_{eq}[n] = h[n] * w_{ZF}[n]$$
    We want $h_{eq}[n] = \delta[n-D]$ for some delay $D$.
*   **Implementation:** The coefficients of the ZF equalizer can be found by solving a system of linear equations derived from the desired impulse response. If the channel impulse response is $h[n]$ for $n = 0, 1, \dots, L-1$, and the equalizer has $M$ taps, the combined response will have $L+M-1$ taps. For ZF, we need $L+M-1$ equations.
    If we assume the desired response is $\delta[n]$ (with a suitable delay), the equations are:
    $$\sum_{k=0}^{L-1} h[k] w_{ZF}[n-k] = \delta[n]$$
    For a specific sampling time $n=0$, we want the output to be an impulse. If the channel has impulse response $(h_0, h_1, ..., h_{L-1})$, and the equalizer has weights $(w_0, w_1, ..., w_{M-1})$, the output at time $m$ is:
    $$z[m] = \sum_{j=0}^{M-1} w_j y[m-j] = \sum_{j=0}^{M-1} w_j \left( \sum_{k=0}^{L-1} h_k x[m-j-k] + n[m-j] \right)$$
    To achieve ZF at sampling instant $n=0$, we want the output $z[0]$ to be proportional to $x[0]$ and all other $z[n]$ for $n \neq 0$ to be zero. This leads to a matrix equation for the equalizer weights.
    Let the channel impulse response be represented by a vector $\mathbf{h} = [h_0, h_1, \dots, h_{L-1}]^T$. The equalizer weights are $\mathbf{w} = [w_0, w_1, \dots, w_{M-1}]^T$.
    The overall impulse response is $\mathbf{h}_{eq} = \mathbf{H} \mathbf{w}$, where $\mathbf{H}$ is a Toeplitz matrix formed by the channel impulse response. For ZF, $\mathbf{h}_{eq}$ should have a single '1' (normalized) and zeros elsewhere.
    A common method to find the ZF equalizer weights involves solving the matrix equation:
    $$\mathbf{C} \mathbf{w} = \mathbf{g}$$
    where $\mathbf{C}$ is the autocorrelation matrix of the channel response, and $\mathbf{g}$ is a vector related to the desired impulse response.
    Specifically, for ZF, if the channel impulse response is $(h_0, h_1, ..., h_{L-1})$ and we want to eliminate ISI at the output of the equalizer at time $n=0$, the equalizer output $z[n]$ is:
    $$z[n] = \sum_{k=0}^{M-1} w_k y[n-k]$$
    Substituting $y[n-k]$:
    $$z[n] = \sum_{k=0}^{M-1} w_k \left( \sum_{j=0}^{L-1} h_j x[n-k-j] + n[n-k] \right)$$
    To eliminate ISI at $n=0$, we require:
    $$z[0] = w_0 h_0 x[0]$$ (assuming transmitted symbols are impulses $x[n] = \delta[n]$ and channel has delay $0$)
    The condition for zero ISI at time $n=0$ is:
    $$\sum_{k=0}^{M-1} w_k h_{n-k} = \delta[n]$$
    This leads to a system of $L+M-1$ linear equations. For a common case where $M=L$, the system can be solved for $\mathbf{w}$.
*   **Advantages:**
    *   Guarantees zero ISI at the sampling instants if the channel is invertible (i.e., no zeros of the channel transfer function fall on the unit circle).
*   **Disadvantages:**
    *   **Noise Enhancement:** ZF equalizers can significantly amplify noise, especially when the channel has deep fades (zeros in its transfer function). This can lead to poor performance in the presence of significant noise. (Goldsmith, 2005)
    *   **Requires Channel Knowledge:** The equalizer coefficients depend on the channel impulse response, which needs to be known at the receiver (either through training sequences or channel estimation).
    *   **Complex to implement for highly dispersive channels.**

#### 3.2 Minimum Mean Squared Error (MMSE) Equalizer

*   **Objective:** To minimize the mean squared error (MSE) between the equalizer output and the desired transmitted symbol. This is a compromise between ISI reduction and noise amplification.
*   **Design:** The equalizer coefficients $w_{MMSE}[n]$ are chosen to minimize $E[(s[n] - z[n])^2]$, where $s[n]$ is the desired transmitted symbol (e.g., an impulse if the transmitted symbols are impulses at sampling times).
    $$MSE = E[(s[n] - \sum_{k=0}^{M-1} w_k y[n-k])^2]$$
*   **Implementation:** The MMSE equalizer coefficients are found by solving the Wiener-Hopf equations:
    $$\mathbf{R}_{yh} \mathbf{w} = \mathbf{r}_{sy}$$
    where:
    *   $\mathbf{w} = [w_0, w_1, \dots, w_{M-1}]^T$ is the vector of equalizer weights.
    *   $\mathbf{R}_{yh}$ is the correlation matrix of the received signal and the channel impulse response. If $s[n]$ is a wide-sense stationary random process and $n[n]$ is white noise, $\mathbf{R}_{yh}$ is related to the channel's autocorrelation.
    *   $\mathbf{r}_{sy}$ is the cross-correlation vector between the desired symbol $s[n]$ and the received signal $y[n]$.

    For a known channel $h[n]$ and white noise $n[n]$ with variance $\sigma_n^2$, and assuming the transmitted symbols are uncorrelated with mean zero and variance $\sigma_s^2$, the MMSE equalizer coefficients are given by:
    $$\mathbf{w}_{MMSE} = (\mathbf{R}_y + \sigma_n^2 \mathbf{I})^{-1} \mathbf{r}_{sy}$$
    where $\mathbf{R}_y$ is the autocorrelation matrix of the received signal $y[n]$, and $\mathbf{r}_{sy}$ is the cross-correlation between the desired symbol and the received signal.
    A more practical derivation uses the channel impulse response directly. The condition for minimum MSE is:
    $$E[(s[n] - z[n]) y[n-j]] = 0 \quad \text{for } j = 0, 1, \dots, M-1$$
    This leads to the equation:
    $$ \sum_{k=0}^{M-1} w_k E[y[n-k]y[n-j]] = E[s[n]y[n-j]]$$
    The terms $E[y[n-k]y[n-j]]$ form the autocorrelation matrix of the received signal, and $E[s[n]y[n-j]]$ is the cross-correlation.
*   **Advantages:**
    *   Provides a better trade-off between ISI reduction and noise enhancement compared to ZF.
    *   Often offers superior performance over ZF when noise is significant.
*   **Disadvantages:**
    *   Does not completely eliminate ISI, but minimizes the MSE.
    *   Requires knowledge of the channel impulse response and noise variance.
    *   Still susceptible to performance degradation with severe channel dispersion.

#### 3.3 Decision Feedback Equalizer (DFE) - (Mentioned as a comparison/extension)

While not strictly linear, DFE is often discussed alongside linear equalizers. It uses a feedforward filter (linear) to mitigate ISI and a feedback filter to remove ISI already decided upon from previous symbols. (Rappaport, 2022)

### 4. Adaptive Equalization

In wireless communication, channels are often time-varying. Therefore, the equalizer coefficients must adapt over time to track channel changes. Adaptive equalizers use algorithms to adjust their coefficients based on the received signal and a reference signal (either a training sequence or decisions made by the receiver).

#### 4.1 Least Mean Squares (LMS) Algorithm

*   **Principle:** The LMS algorithm is an iterative algorithm that adjusts the equalizer weights to minimize the MSE. It uses the instantaneous error signal as an estimate of the true MSE gradient.
*   **Update Rule:**
    $$w[n+1] = w[n] + \mu e[n] y^*[n]$$
    where:
    *   $w[n]$ is the vector of equalizer weights at time $n$.
    *   $\mu$ is the step size (learning rate), controlling convergence speed and stability.
    *   $e[n]$ is the error signal at time $n$: $e[n] = d[n] - z[n]$, where $d[n]$ is the desired signal and $z[n]$ is the equalizer output.
    *   $y[n]$ is the vector of received samples (inputs to the equalizer).
    *   $y^*$ denotes the conjugate transpose.
*   **Operation:**
    1.  Initialize equalizer weights.
    2.  At each symbol period, compute the equalizer output $z[n]$.
    3.  Compute the error $e[n]$ by comparing $z[n]$ with the desired symbol $d[n]$ (from training or detected symbols).
    4.  Update the equalizer weights using the LMS update rule.
*   **Advantages:**
    *   Simple to implement.
    *   Robust to variations in input signal statistics.
*   **Disadvantages:**
    *   Can have slow convergence.
    *   Convergence speed is limited by the input signal's power dynamic range.
    *   Requires careful selection of the step size $\mu$.

#### 4.2 Recursive Least Squares (RLS) Algorithm

*   **Principle:** RLS aims to minimize the weighted sum of squared errors over time, using a forgetting factor to give more weight to recent data. It directly estimates the inverse of the autocorrelation matrix, leading to faster convergence than LMS.
*   **Update Rule:** RLS involves a more complex set of update equations for the equalizer weights, gain vector, and inverse correlation matrix.
*   **Advantages:**
    *   Faster convergence compared to LMS.
    *   Less sensitive to the eigenvalue spread of the input signal's autocorrelation matrix.
*   **Disadvantages:**
    *   More computationally complex than LMS.
    *   Requires more memory to store intermediate values.

#### 4.3 Training Sequences

Adaptive equalizers often require a known sequence of symbols (training sequence or preamble) to be transmitted initially. The receiver compares the equalizer output for this sequence with the known transmitted sequence to compute the error and adjust the weights. After training, the equalizer can switch to using detected symbols for continuous adaptation.

### 5. Non-Linear Equalization

Non-linear equalization techniques are employed when the channel's distortion cannot be adequately compensated by linear filters, or when a significant performance gain can be achieved. These methods aim to directly estimate the transmitted symbols by modeling the combined channel and interference.

#### 5.1 Maximum Likelihood Sequence Estimation (MLSE)

*   **Principle:** MLSE finds the sequence of transmitted symbols that is most likely to have produced the received sequence, given the channel characteristics and noise. It makes decisions based on the *entire received sequence* rather than individual symbol samples.
*   **Viterbi Algorithm:** The Viterbi algorithm is a dynamic programming algorithm used to implement MLSE efficiently. It operates on a trellis diagram that represents the possible state transitions of the channel.
    *   **States:** The states in the trellis are defined by the last $D$ transmitted symbols (where $D$ is related to the channel's memory).
    *   **Transitions:** Each transition between states corresponds to the transmission of a new symbol.
    *   **Branch Metrics:** These measure the likelihood of a particular transition given the received signal segment.
    *   **Path Metrics:** The Viterbi algorithm keeps track of the most likely path to each state at each time instant, by accumulating branch metrics.
*   **Implementation:**
    1.  Define the channel's impulse response and the possible transmitted symbols to construct the trellis.
    2.  Initialize the path metrics.
    3.  For each time step, calculate the branch metrics for all possible transitions and update the path metrics for each state using the Viterbi recursion.
    4.  The surviving path at the end of the received sequence represents the most likely transmitted sequence.
*   **Advantages:**
    *   Provides the optimum performance in terms of minimizing the probability of sequence error (closest to the theoretical maximum likelihood).
    *   Can handle highly dispersive channels and non-linear distortion effectively.
*   **Disadvantages:**
    *   **High Computational Complexity:** The complexity grows exponentially with the channel memory and the number of possible symbols, making it impractical for very long channels or large constellations. (Goldsmith, 2005)
    *   **Requires Channel Knowledge:** The Viterbi algorithm requires an accurate knowledge of the channel impulse response.

#### 5.2 Other Non-Linear Techniques (Briefly Mentioned)

*   **Non-linear Filters:** While less common for ISI directly, non-linear filters can be used to remove specific types of noise or distortion that linear filters cannot handle.
*   **Machine Learning Based Equalizers:** With the advent of AI, neural networks are being explored for non-linear equalization, which can learn complex channel characteristics without explicit modeling.

### 6. Equalization in the Context of Path Loss and Shadowing (CO6 Relevance)

*   **Path Loss:** Path loss refers to the reduction in signal power as it propagates through the environment. While not directly addressed by equalization, it affects the received signal-to-noise ratio (SNR). Lower SNR makes ISI more detrimental and noise enhancement by equalizers more problematic.
*   **Shadowing:** Shadowing is the slow variation in received signal power due to large-scale obstacles (buildings, terrain). Like path loss, shadowing affects the SNR. Equalizers are still crucial for combating ISI in these shadowed regions, but the overall performance will be limited by the low SNR. (Schiller, 2008)
*   **Diversity Techniques:** Equalization is often used in conjunction with diversity techniques (e.g., frequency diversity, time diversity, space diversity) to combat fading and improve receiver performance. Diversity helps by providing independent faded versions of the signal, which can then be processed by an equalizer to extract the best possible data. This addresses CO6 directly: "Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance."

### 7. Key Concepts and Definitions

*   **Intersymbol Interference (ISI):** Distortion caused by the overlap of symbols transmitted consecutively.
*   **Channel Impulse Response:** The output of the channel when a short impulse is transmitted.
*   **Equalizer:** A filter designed to counteract channel distortion.
*   **Zero Forcing (ZF):** An equalizer that aims to completely eliminate ISI at the sampling instants.
*   **Minimum Mean Squared Error (MMSE):** An equalizer that minimizes the MSE between the desired symbol and the equalizer output.
*   **Adaptive Equalization:** Equalization where the equalizer coefficients change over time to track channel variations.
*   **LMS Algorithm:** A common adaptive algorithm for equalizers.
*   **RLS Algorithm:** Another adaptive algorithm offering faster convergence.
*   **Maximum Likelihood Sequence Estimation (MLSE):** An optimal non-linear equalization technique that finds the most likely transmitted sequence.
*   **Viterbi Algorithm:** An algorithm used to implement MLSE.
*   **Trellis Diagram:** A graphical representation of the states and transitions in MLSE.
*   **Branch Metric:** Measures the likelihood of a transition in the Viterbi algorithm.
*   **Path Metric:** The accumulated metric of a path in the Viterbi algorithm.

### 8. Important Points to Remember

*   Equalization is essential in wireless communication due to ISI caused by multipath propagation.
*   Linear equalizers (ZF, MMSE) attempt to linearize the channel's effect.
*   ZF equalizers eliminate ISI but can amplify noise.
*   MMSE equalizers offer a better trade-off between ISI and noise enhancement.
*   Adaptive equalization is necessary for time-varying wireless channels.
*   MLSE (using the Viterbi algorithm) is an optimal non-linear technique but is computationally intensive.
*   Equalization is often combined with diversity techniques for enhanced performance. (CO6)
*   The performance of equalizers depends on the channel's characteristics (delay spread, fading) and the SNR.

### 9. Practice Questions and Exercises

**Question 1 (K3 - CO6):**
A mobile communication system suffers from ISI due to multipath fading. Explain how both a Zero-Forcing equalizer and a Minimum Mean Squared Error equalizer would attempt to mitigate this ISI. What are the primary trade-offs between these two linear equalization techniques?

**Answer:**
*   **Zero-Forcing (ZF) Equalizer:** A ZF equalizer aims to completely eliminate ISI at the sampling instants. It designs its filter coefficients such that the combined impulse response of the channel and the equalizer has zeros at all sampling times except for the desired symbol's peak. This is achieved by inverting the channel's effect.
*   **Minimum Mean Squared Error (MMSE) Equalizer:** An MMSE equalizer aims to minimize the mean squared error between the equalizer's output and the intended transmitted symbol. It balances the reduction of ISI with the amplification of noise.
*   **Trade-offs:**
    *   **ISI Reduction:** ZF guarantees zero ISI (if the channel is invertible), while MMSE aims to minimize the remaining ISI by minimizing the MSE.
    *   **Noise Enhancement:** ZF equalizers are prone to amplifying noise, especially if the channel has deep fades (zeros in its transfer function). MMSE equalizers, by considering the noise level, are generally less susceptible to severe noise enhancement and offer better overall performance in noisy environments.

**Question 2 (K2 - CO4, CO5, CO6):**
Describe the fundamental principle behind Maximum Likelihood Sequence Estimation (MLSE) for equalizing a wireless channel. How does the Viterbi algorithm facilitate the implementation of MLSE, and what are the main limitations of this approach?

**Answer:**
*   **Fundamental Principle of MLSE:** MLSE is a non-linear equalization technique that seeks to find the most probable sequence of transmitted symbols that could have produced the received signal sequence, considering the channel's impulse response and the additive noise. It looks at the entire received sequence to make a decision, unlike linear equalizers that often make decisions symbol-by-symbol.
*   **Viterbi Algorithm:** The Viterbi algorithm implements MLSE efficiently by using dynamic programming. It operates on a trellis diagram representing the possible state transitions of the channel (based on past transmitted symbols). At each time step, it calculates "branch metrics" (likelihood of a transition) and "path metrics" (accumulated likelihood of a path to a state). It then prunes (survivors) paths that are less likely, ensuring that at each state, only the path with the highest accumulated metric is kept. The final surviving path at the end of the sequence is declared the most likely transmitted sequence.
*   **Limitations:**
    *   **High Computational Complexity:** The complexity of the Viterbi algorithm grows exponentially with the channel memory (number of significant taps in the impulse response) and the size of the transmitted alphabet. This can make it impractical for channels with long delay spreads or large constellations.
    *   **Requires Accurate Channel Knowledge:** The performance of MLSE is highly dependent on an accurate estimate of the channel's impulse response for constructing the trellis and calculating metrics.

**Question 3 (K3 - CO6):**
A communication system uses an adaptive equalizer based on the LMS algorithm. If the channel characteristics change abruptly, how would the LMS equalizer adapt to these changes, and what parameter critically influences its adaptation speed?

**Answer:**
*   **Adaptation Process:** When the channel characteristics change abruptly, the received signal will no longer match the equalizer's current optimal setting. This mismatch will lead to a larger error signal ($e[n]$) between the equalizer's output and the desired symbol. The LMS algorithm uses this error signal to update the equalizer's weights. The update rule is $w[n+1] = w[n] + \mu e[n] y^*[n]$. A larger error signal means a larger update step, causing the weights to shift towards a new configuration that better matches the new channel.
*   **Critical Parameter:** The step size parameter, $\mu$, critically influences the adaptation speed.
    *   A **larger $\mu$** leads to faster adaptation, as the weights are adjusted more aggressively with each error. However, it can also lead to increased noise in the output signal and potential instability if $\mu$ is too large.
    *   A **smaller $\mu$** results in slower adaptation but provides a more stable output and reduces noise enhancement.
    Therefore, $\mu$ must be carefully chosen to balance the need for rapid adaptation to channel changes with the desire for a low-error output signal.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. Textbooks and References Incorporated

*   **Goldsmith, A. (2005).** *Wireless Communications*. Cambridge University Press. (Key concepts on channel modeling, ISI, ZF vs. MMSE trade-offs, MLSE complexity).
*   **Rappaport, T. S. (2022).** *Wireless Communication: Principles and Practice*. Pearson Education. (Practical aspects of ISI, equalization techniques, DFE as an extension).
*   **Haykin, S. (2020).** *Communication Systems*. John Wiley and Sons Inc. (Foundational principles of ISI and equalization, signal processing aspects).
*   **Schiller, J. (2008).** *Mobile Communications*. Pearson. (Contextualization of equalization within mobile environments, path loss, shadowing).

This comprehensive set of notes covers the essential aspects of linear and non-linear equalization for advanced communication theory, aligning with the specified course outcomes and knowledge levels.