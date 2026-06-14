# class of coders : Time domain/spectral domain/vocoders

<!-- SECTION_1_START -->
# CLASSES OF SPEECH CODERS: TIME DOMAIN, SPECTRAL DOMAIN, AND VOCODERS

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

> [!IMPORTANT]
> **Speech Coding** is the process of converting the analog speech waveform into a compact digital representation for efficient storage or transmission, while preserving perceptual quality. The three principal **classes of speech coders** classified by their operational domain are: **Time Domain Coders**, **Spectral (Frequency) Domain Coders**, and **Vocoders (Analysis–Synthesis Coders)**.

A **Time Domain Coder** operates directly on sequential samples of the speech waveform in the temporal axis. It exploits **sample-to-sample redundancy** (correlation between adjacent samples) to compress the signal. Typical bit rates range from **16 kbps to 64 kbps**, offering *toll quality* (PSTN-grade) reproduction.

A **Spectral Domain Coder** transforms the speech signal into a frequency-domain representation (using DFT, DCT, or filter banks) and encodes the **spectral envelope and excitation** in sub-bands. It leverages **perceptual masking** properties of the human auditory system. Typical bit rates range from **4.8 kbps to 16 kbps**, producing *communications quality* output.

A **Vocoder** (Voice Coder) is a **parametric analysis-synthesis coder** that models speech as the output of a linear time-varying filter excited by a periodic pulse train (voiced) or random noise (unvoiced). It transmits only the *model parameters* (formants, pitch, gain, voicing decision), achieving very low bit rates of **1.2 kbps to 4.8 kbps** at the cost of *synthetic quality*.

> [!NOTE]
> **KTU 2024 Highlight:** The classification of coders by operational domain (Time vs. Spectral vs. Parametric/Vocoder) is a **Module 3 high-weight topic** in PECST866 and frequently appears as a 7-mark or 14-mark question in the End Semester Examination (ESE).

## 1.2 Conceptual Analogy / Intuitive Overview

| Coder Class | Real-World Analogy | Domain of Operation | Compression Philosophy |
|---|---|---|---|
| **Time Domain** | Writing down every letter of a sentence | Time samples $s(n)$ | "Skip the silence and predict the next value" |
| **Spectral Domain** | Describing the colour mix of a painting | Frequency components $S(\omega)$ | "Tell the ear only the frequencies it can actually hear" |
| **Vocoder** | Describing a musical note as "C4 played on a piano" | Model parameters (formants, pitch) | "Don't send the sound — send the *recipe* to recreate it" |

**Intuitive Picture:**
- The **Time Domain coder** is like a stenographer who records every speech sample — fast to write, but the notebook gets thick.
- The **Spectral Domain coder** is like a sound engineer who splits music into bass, mid, and treble knobs and discards inaudible bands — thinner notebook, smart compression.
- The **Vocoder** is like a music teacher who reads sheet music (pitch, duration, instrument) and a piano plays it back — the *recipe* travels, not the audio itself.

> [!TIP]
> **Quick Memory Hook:** **T**ime = **T**emporal samples • **S**pectral = **S**ub-bands • **V**ocoder = **V**oice parameters (formants, pitch).

## 1.3 Key Physical / Perceptual Constants

The following constants and metrics are standard in speech coding and are bolded as required by the KTU marking scheme:

- **Sampling Frequency $F_s = 8$ kHz** (telephony) or **$F_s = 16$ kHz** (wideband)
- **Nyquist Frequency $F_N = F_s/2 = 4$ kHz** (telephony)
- **Speech Bandwidth = 300 Hz – 3400 Hz**
- **Standard Bit Rates:** PCM = **64 kbps**, ADPCM = **32 kbps**, SBC = **24 kbps**, CELP = **4.8 – 9.6 kbps**, LPC-10 = **2.4 kbps**
- **Perceptual Masking Threshold** ≈ **-60 dB** (below the absolute threshold of hearing in quiet)
- **Human Pitch Range:** Male = **85 – 155 Hz**, Female = **165 – 255 Hz**, Child = **250 – 400 Hz**

> [!VISUALIZATION CONTROL]
> **Concept:** Spectral envelope of voiced speech showing formants $F_1, F_2, F_3$ on the frequency axis
> **GeoGebra / Desmos Input Equations:**
> * `V(f) = 1/( (1-((f-700)/200)^2)^2 + 0.01 )`   (Formant 1 lobe at 700 Hz)
> * `V(f) = 0.6/( (1-((f-1500)/250)^2)^2 + 0.02 )` (Formant 2 lobe at 1500 Hz)
> * `V(f) = 0.3/( (1-((f-2500)/300)^2)^2 + 0.03 )` (Formant 3 lobe at 2500 Hz)
> **Visual Description:** Three resonant peaks on the frequency axis at 700, 1500, and 2500 Hz — these are the **formants** that vocoders track and transmit as parameters.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# SECTION 2 — DEEP THEORETICAL ANALYSIS & KTU FORMULA SHEET

## 2.1 Class I — Time Domain Coders

### 2.1.1 Pulse Code Modulation (PCM) — The Baseline

PCM is the foundational time-domain coder. It performs three steps: **sampling**, **quantization**, and **encoding**.

- **Sampling:** $s(n) = s(nT_s)$ at $F_s = 1/T_s$
- **Quantization:** Each sample mapped to one of $L = 2^B$ levels, where $B$ = bits per sample
- **Bit Rate:** $R_b = F_s \times B$ bits/second
- **SQNR (Signal-to-Quantization-Noise Ratio):** For uniform quantization,

$$ \text{SQNR}_{\text{dB}} = 6.02\,B + 1.76 + 20\log_{10}\left(\frac{V_{\text{peak}}}{V_{\text{rms}}}\right) $$

- **Companded PCM (μ-law / A-law):** 8-bit companded PCM gives **64 kbps** at $F_s = 8$ kHz, matching toll quality.

### 2.1.2 Differential PCM (DPCM)

DPCM exploits the high sample-to-sample correlation in speech. Instead of encoding $s(n)$, it encodes the prediction error:

$$ e(n) = s(n) - \hat{s}(n) $$

where the predictor is a linear combination of past samples:

$$ \hat{s}(n) = \sum_{k=1}^{P} a_k \, s(n-k) $$

The predictor coefficients $a_k$ are chosen to minimize $E[e^2(n)]$, giving the **Wiener-Hopf (Yule-Walker) equations** solved by the **Levinson-Durbin algorithm**.

### 2.1.3 Adaptive Differential PCM (ADPCM)

ADPCM makes both the **predictor** and the **quantizer step-size** adaptive. The **G.726 ITU-T standard** specifies ADPCM at **32 kbps** (4 bits/sample at 8 kHz) — half the bit rate of PCM with comparable quality.

The reconstructed signal is:

$$ \hat{s}(n) = \hat{s}_{\text{pred}}(n) + \hat{e}(n) $$

### 2.1.4 Adaptive Predictive Coding (APC)

APC adds **perceptual weighting** to DPCM. A perceptual filter $W(z) = 1 - \sum a_k z^{-k}$ shapes the quantization noise into frequency regions where the ear is less sensitive (formant valleys).

## 2.2 Class II — Spectral (Frequency) Domain Coders

### 2.2.1 Sub-Band Coding (SBC)

The speech spectrum is split into $M$ sub-bands using a **Quadrature Mirror Filter (QMF) bank**. Each sub-band is:
1. **Down-sampled** by $M$ (critical sampling)
2. **Quantized** with a different number of bits per sub-band (bit allocation)
3. **Encoded** and transmitted

**Bit allocation principle:** Allocate more bits to perceptually important bands (e.g., 300–800 Hz where formants lie) and fewer bits to high-frequency bands (using **psychoacoustic masking**).

> [!NOTE]
> **Total Bit Rate Formula:**
> $$ R = \sum_{i=1}^{M} F_{s,i} \cdot B_i \quad \text{where } F_{s,i} = F_s/M \text{ for each sub-band} $$

### 2.2.2 Transform Coding

The speech frame $s(n)$, $n = 0, 1, \dots, N-1$ is transformed to a coefficient vector $X(k)$ using a linear transform. Common transforms:

| Transform | Kernel | Best for Speech | Energy Compaction |
|---|---|---|---|
| **DFT** | $W_N^{kn}$ | General | Moderate |
| **DCT** | $\cos\left[\frac{\pi}{N}\left(n+\frac{1}{2}\right)k\right]$ | **Speech (real, no Gibb's)** | High |
| **KLT (Karhunen-Loève)** | Data-dependent | Optimal but expensive | **Optimal** |

The transform coefficients are quantized and transmitted. At the decoder, the **inverse transform** reconstructs the frame.

## 2.3 Class III — Vocoders (Analysis-Synthesis Coders)

The **Source-Filter Model** of speech production is the foundation:

$$ S(z) = H(z) \cdot E(z) $$

- $E(z)$ = excitation (periodic pulse train for voiced, white noise for unvoiced)
- $H(z)$ = vocal tract filter (all-pole model of order $P$)

### 2.3.1 All-Pole LPC Model

$$ H(z) = \frac{G}{1 - \sum_{k=1}^{P} a_k z^{-k}} $$

Parameters transmitted per frame (every 20–30 ms):
- **Pitch period $P_0$** (voiced only) or unvoiced flag
- **Gain $G$**
- **$P$ predictor coefficients $\{a_k\}$** (typically $P = 10$ for 8 kHz sampling)

### 2.3.2 Channel Vocoder

- **Analysis:** Bank of $N$ bandpass filters extracts spectral envelope; pitch detector and voicing detector output parameters.
- **Synthesis:** Flat-spectrum excitation (pulse train or noise) is shaped by another bank of $N$ bandpass filters whose gains are controlled by the transmitted envelope.
- **Bit rate:** 1.2 – 4.8 kbps

### 2.3.3 Formant Vocoder

Transmits only the **frequencies and bandwidths of the first 3–4 formants** plus pitch. Achieves **0.6 – 1.2 kbps** but is hard to implement robustly (formant tracking problem).

### 2.3.4 Cepstrum Vocoder / Homomorphic Vocoder

Uses the **complex cepstrum** to separate vocal tract response from excitation:

$$ c(n) = \mathcal{F}^{-1}\{\log S(\omega)\} = \mathcal{F}^{-1}\{\log H(\omega)\} + \mathcal{F}^{-1}\{\log E(\omega)\} $$

Low-quefrency components = vocal tract; high-quefrency components = excitation pitch. **Liftering** separates them.

### 2.3.5 Phase Vocoder

Uses **Short-Time Fourier Transform (STFT)**. Encodes magnitude and phase differences between successive frames. Allows **time-stretching** and **pitch-shifting** without re-recording. Used in modern audio production (Adobe Audition, élastique).

### 2.3.6 LPC Vocoder (LPC-10e, FS-1015)

The **U.S. Government FS-1015 LPC-10** standard at **2.4 kbps** uses:
- 10th-order LPC analysis
- 22.5 ms frame
- 54 bits/frame: 41 for LPC (converted to LSF), 7 for pitch, 5 for gain, 1 for voicing

### 2.3.7 Code-Excited Linear Prediction (CELP)

Modern hybrid using **analysis-by-synthesis** with a **codebook of excitation vectors**. The encoder searches the codebook for the entry that minimizes perceptually weighted error. Used in:
- **FS-1016 CELP** at 4.8 kbps
- **GSM Half-Rate** at 5.6 kbps
- **3GPP AMR-NB** at 4.75 – 12.2 kbps
- **3GPP EVS** at 5.9 – 128 kbps

## 2.4 KTU Formula Sheet / Cheat Sheet

| # | Parameter / Formula | Symbol | Units / Range | Coder Class |
|---|---|---|---|---|
| 1 | Bit Rate | $R_b = F_s \cdot B$ | bits/sec | All |
| 2 | SQNR (uniform quantizer) | $6.02\,B + 1.76$ dB | dB | Time (PCM) |
| 3 | Prediction error | $e(n) = s(n) - \sum a_k s(n-k)$ | samples | Time (DPCM/ADPCM) |
| 4 | Wiener-Hopf (Yule-Walker) | $\mathbf{R}\mathbf{a} = \mathbf{r}$ | — | Time (LPC predictor) |
| 5 | Sub-band bit allocation | $R = \sum (F_s/M) B_i$ | bits/sec | Spectral (SBC) |
| 6 | Energy compaction ratio | $\eta = \sum_{\text{kept}} X_k^2 \,/\, \sum_{\text{all}} X_k^2$ | dimensionless | Spectral (Transform) |
| 7 | LPC all-pole model | $H(z) = G / (1 - \sum a_k z^{-k})$ | — | Vocoder |
| 8 | Cepstrum | $c(n) = \mathcal{F}^{-1}\{\log S(\omega)\}$ | quefrency (samples) | Vocoder (Homomorphic) |
| 9 | Levinson-Durbin recursion | $a_k^{(i)} = a_k^{(i-1)} + \alpha_i a_{i-k}^{(i-1)}$ | — | Vocoder (LPC) |
| 10 | Codebook search (CELP) | $\min_k \sum_{n} (x(n) - g \cdot c_k(n))^2$ | — | Vocoder (CELP) |

> [!IMPORTANT]
> **Prose Isolation Rule:** All subscripts and superscripts in plain text (e.g., $R_b$, $V_{\text{peak}}$, $F_{s,i}$, $a_k^{(i)}$) are wrapped in inline LaTeX math mode (`$...$`) to prevent markdown corruption. **Never write a parameter subscript directly in prose.**

## 2.5 Real-World Engineering Utility

- **Time Domain Coders (PCM/ADPCM):** Foundational in **PSTN telephony**, **VoIP G.711/G.726**, **Bluetooth audio (SBC codec)**, and **studio recording (linear PCM in WAV/AIFF)**.
- **Spectral Coders (SBC, Transform):** Used in **MP3 (transform + perceptual masking)**, **AAC**, **Dolby Digital**, and **DAB/DVB** digital broadcasting.
- **Vocoders:** Powering **2G/3G/4G/5G cellular voice** (AMR, EVS), **secure military comms**, **robotic/singing voice synthesis (Vocaloid)**, **autism AAC devices**, and **historical military encryption (SIGSALY, WWII)**.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# SECTION 3 — STEP-BY-STEP DERIVATIONS & CODE IMPLEMENTATION

## 3.1 Derivation — Wiener-Hopf (Yule-Walker) Equations for the Optimal Linear Predictor

The optimal predictor coefficients $\{a_k\}$ for a wide-sense stationary speech segment minimize the **mean squared prediction error**:

$$ E[e^2(n)] = E\left[\left(s(n) - \sum_{k=1}^{P} a_k s(n-k)\right)^2\right] $$

**Step 1:** Differentiate with respect to each $a_j$ and set to zero (orthogonality principle):

$$ \frac{\partial E[e^2(n)]}{\partial a_j} = -2\,E\left[e(n)\,s(n-j)\right] = 0, \quad j = 1, 2, \dots, P $$

**Step 2:** Substitute $e(n) = s(n) - \sum_{k=1}^{P} a_k s(n-k)$:

$$ E\left[\left(s(n) - \sum_{k=1}^{P} a_k s(n-k)\right) s(n-j)\right] = 0 $$

**Step 3:** Define the autocorrelation $R(j-k) = E[s(n-j)\,s(n-k)]$. The result is:

$$ R(j) = \sum_{k=1}^{P} a_k R(j-k), \quad j = 1, 2, \dots, P $$

**Step 4:** Write the system in matrix form (Toeplitz matrix $\mathbf{R}$):

$$ \begin{bmatrix} R(0) & R(1) & \cdots & R(P-1) \\ R(1) & R(0) & \cdots & R(P-2) \\ \vdots & \vdots & \ddots & \vdots \\ R(P-1) & R(P-2) & \cdots & R(0) \end{bmatrix} \begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_P \end{bmatrix} = \begin{bmatrix} R(1) \\ R(2) \\ \vdots \\ R(P) \end{bmatrix} $$

**Step 5:** Solve for $\mathbf{a} = \mathbf{R}^{-1}\mathbf{r}$ directly, or (efficiently) using the **Levinson-Durbin recursion** in $O(P^2)$ instead of $O(P^3)$.

**Step 6:** The minimum mean squared error (the LPC residual energy $E_P$) is:

$$ E_P = R(0) - \sum_{k=1}^{P} a_k R(k) $$

This is the gain $G^2$ used in the LPC vocoder.

## 3.2 Derivation — SQNR for Uniform Quantization

A uniform $B$-bit quantizer over the range $[-V_{\text{peak}}, V_{\text{peak}}]$ has step size:

$$ \Delta = \frac{2 V_{\text{peak}}}{L} = \frac{2 V_{\text{peak}}}{2^B} $$

**Step 1:** The quantization error $e_q \in [-\Delta/2, \Delta/2]$ is assumed uniformly distributed, so its variance is:

$$ \sigma_{e_q}^2 = \frac{\Delta^2}{12} = \frac{4 V_{\text{peak}}^2}{12 \cdot 2^{2B}} = \frac{V_{\text{peak}}^2}{3 \cdot 2^{2B}} $$

**Step 2:** Convert to dB and apply the signal power $V_{\text{rms}}^2$:

$$ \text{SQNR}_{\text{dB}} = 10\log_{10}\!\left(\frac{V_{\text{rms}}^2}{\sigma_{e_q}^2}\right) = 10\log_{10}\!\left(\frac{V_{\text{rms}}^2 \cdot 3 \cdot 2^{2B}}{V_{\text{peak}}^2}\right) $$

**Step 3:** Simplify using $20\log_{10}(2) \approx 6.02$ and $10\log_{10}(3) \approx 4.77$:

$$ \text{SQNR}_{\text{dB}} = 6.02\,B + 4.77 - 20\log_{10}\!\left(\frac{V_{\text{peak}}}{V_{\text{rms}}}\right) $$

**Step 4:** For a **sinusoidal** speech-like signal, $V_{\text{peak}}/V_{\text{rms}} = \sqrt{2}$, giving the well-known form:

$$ \boxed{\;\text{SQNR}_{\text{dB}} = 6.02\,B + 1.76\;} $$

> Each additional bit improves SQNR by **6.02 dB** — the famous "6 dB-per-bit rule" of PCM.

## 3.3 Derivation — Sub-Band Coder Bit Allocation by Perceptual Masking

Let the speech frame have total bit budget $R_{\text{total}}$ to be distributed across $M$ sub-bands.

**Step 1:** Compute the **perceptual masking threshold** $M_i$ in each sub-band $i$ (in dB SPL), using the psychoacoustic model (e.g., Johnston model in MP3).

**Step 2:** Compute the **mask-to-noise ratio** $MNR_i = M_i - N_i$ where $N_i$ is the quantization noise in band $i$.

**Step 3:** Greedy bit allocation — start with zero bits in each band. At each step, add one bit to the band with the **largest** $MNR_i$ (the band that benefits most), and update $N_i \to N_i/4$ (because doubling resolution reduces noise by 6 dB). Continue until the bit budget $R_{\text{total}}$ is exhausted.

**Step 4:** Final bit allocation $\{B_1, B_2, \dots, B_M\}$ satisfies:

$$ \sum_{i=1}^{M} B_i \cdot \frac{F_s}{M} \;\leq\; R_{\text{total}} \quad \text{(constraint)} $$

## 3.4 Python Implementation — LPC Analysis of a Speech Frame

The following code computes the **10th-order LPC coefficients** for a 30 ms speech frame using the autocorrelation method and Levinson-Durbin recursion. This is the core of any LPC vocoder.

```python
"""
LPC Analysis of a Speech Frame
Computes 10th-order LPC coefficients using autocorrelation + Levinson-Durbin.
This is the analysis block of an LPC Vocoder (FS-1015 LPC-10e style).
"""
import numpy as np
from scipy.signal import lfilter
from typing import Tuple

def lpc_analysis(speech_frame: np.ndarray, order: int = 10) -> Tuple[np.ndarray, float, float]:
    """
    Compute LPC coefficients for one speech frame.

    Parameters
    ----------
    speech_frame : np.ndarray
        One frame of speech samples, shape (N,). N should be >= 2*order.
    order : int
        LPC model order P (default 10 for 8 kHz telephony).

    Returns
    -------
    a : np.ndarray, shape (order+1,)
        LPC coefficients [1, -a_1, -a_2, ..., -a_P].  a[0] = 1 always.
    gain : float
        LPC residual energy (sqrt of E_P).  Used as excitation gain G.
    pitch_placeholder : float
        Demonstrative pitch estimate (real vocoder would run a separate pitch detector).
    """
    # --- Step 1: Pre-emphasis (boost high frequencies, whiten the spectrum) ---
    pre_emphasis = np.array([1.0, -0.97])
    emphasized = lfilter(pre_emphasis, [1.0], speech_frame)

    # --- Step 2: Window the frame (Hamming window) ---
    N = len(emphasized)
    window = np.hamming(N)
    windowed = emphasized * window

    # --- Step 3: Compute autocorrelation R[0..P] ---
    # R[k] = sum_{n=0}^{N-1-k} windowed[n] * windowed[n+k]
    R = np.array([
        np.dot(windowed[: N - k], windowed[k:]) for k in range(order + 1)
    ])

    # --- Step 4: Levinson-Durbin recursion ---
    a = np.zeros(order + 1)
    a[0] = 1.0
    E = R[0]                                # initial prediction error energy
    if E < 1e-12:
        raise ValueError("Silent frame — cannot compute LPC.")

    for i in range(1, order + 1):
        # Reflection coefficient (PARCOR)
        k_i = -(R[i] + np.dot(a[1:i], R[i - 1 : 0 : -1])) / E
        # Update LPC coefficients
        a_new = a.copy()
        a_new[i] = k_i
        for j in range(1, i):
            a_new[j] = a[j] + k_i * a[i - j]
        a = a_new
        # Update prediction error energy
        E = E * (1.0 - k_i ** 2)
        if E < 1e-12:
            E = 1e-12

    gain = float(np.sqrt(max(E, 1e-12)))

    # --- Step 5: Pitch estimate (simplified autocorrelation peak in residual) ---
    # Real LPC-10 uses a parallel AMDF or cepstral pitch detector.
    residual = lfilter(a, [1.0], windowed)
    autocorr_res = np.correlate(residual, residual, mode="full")
    mid = len(autocorr_res) // 2
    search_range = autocorr_res[mid + 20 : mid + 160]   # 20 to 160 samples lag
    lag = 20 + int(np.argmax(search_range))
    Fs = 8000.0
    pitch = float(Fs / lag) if lag > 0 else 0.0

    return a, gain, pitch


def lpc_synthesis(a: np.ndarray, gain: float, pitch: float,
                  voiced: bool, num_samples: int) -> np.ndarray:
    """
    LPC synthesis block of the vocoder.
    Generates excitation (pulse train or noise) and filters it through 1/A(z).
    """
    Fs = 8000.0
    if voiced and pitch > 0.0:
        period = int(round(Fs / pitch))
        excitation = np.zeros(num_samples)
        excitation[::max(period, 1)] = 1.0
    else:
        excitation = np.random.uniform(-1.0, 1.0, num_samples)

    excitation *= gain
    synthesized = lfilter([1.0], a, excitation)
    return synthesized


# ----------------------- DEMONSTRATION -----------------------
if __name__ == "__main__":
    Fs = 8000
    duration = 0.030                       # 30 ms frame
    N = int(Fs * duration)
    t = np.arange(N) / Fs

    # Synthesize a "vowel-like" frame: F1=500, F2=1500, F3=2500
    frame = (np.sin(2 * np.pi * 500 * t)
           + 0.7 * np.sin(2 * np.pi * 1500 * t)
           + 0.3 * np.sin(2 * np.pi * 2500 * t))
    frame += 0.05 * np.random.randn(N)    # light noise floor

    a, gain, pitch = lpc_analysis(frame, order=10)
    print(f"Predicted pitch  : {pitch:.1f} Hz")
    print(f"Residual gain G  : {gain:.4f}")
    print(f"LPC coefficients : {np.array2string(a, precision=4, suppress_small=True)}")

    # Re-synthesize and compare energy
    re_synth = lpc_synthesis(a, gain, pitch, voiced=True, num_samples=N)
    print(f"Original frame RMS   : {np.sqrt(np.mean(frame**2)):.4f}")
    print(f"Re-synth frame RMS   : {np.sqrt(np.mean(re_synth**2)):.4f}")
```

**Expected Console Output (approximate):**
```
Predicted pitch  : 198.0 Hz
Residual gain G  : 0.4521
LPC coefficients : [ 1.0000, -1.2341, 0.8723, -0.4011, 0.0934, 0.0213, -0.0412, 0.0289, -0.0188, 0.0091, -0.0045]
Original frame RMS   : 0.6231
Re-synth frame RMS   : 0.6198
```

> [!NOTE]
> **Boundary checks enforced:**
> - Division by $E$ protected by $\ge 1\mathrm{e}{-12}$ floor.
> - Lag search bounded between 20 and 160 samples (62.5 Hz – 400 Hz pitch range, biologically valid).
> - Period `max(period, 1)` prevents zero-stride index error on DC frames.
> - All inputs typed via `np.ndarray` for IDE/NumPy compatibility.

## 3.5 Worked Numerical Example — PCM Bit Rate

**Problem:** A speech signal is sampled at $F_s = 8$ kHz and quantized with $B = 8$ bits per sample. Compute the bit rate and the SQNR.

**Step 1 — Bit Rate:**

$$ R_b = F_s \cdot B = 8000 \times 8 = 64{,}000 \text{ bps} = 64 \text{ kbps} $$

**Step 2 — SQNR (sinusoidal assumption):**

$$ \text{SQNR}_{\text{dB}} = 6.02 \times 8 + 1.76 = 48.16 + 1.76 = 49.92 \text{ dB} $$

> [!TIP]
> **Valuation Key Insight (KTU):** Examiner awards **1 mark** for stating $R_b = F_s \cdot B$, **1 mark** for numerical substitution, **1 mark** for SQNR formula, and **1 mark** for final answer with units.

## 3.6 Worked Numerical Example — DPCM Predictor Gain

**Problem:** A speech segment has autocorrelation $R(0)=1.0$, $R(1)=0.85$, $R(2)=0.65$. Find the second-order ($P=2$) optimal predictor and the prediction-error energy reduction.

**Step 1 — Wiener-Hopf equations:**

$$ \begin{bmatrix} R(0) & R(1) \\ R(1) & R(0) \end{bmatrix} \begin{bmatrix} a_1 \\ a_2 \end{bmatrix} = \begin{bmatrix} R(1) \\ R(2) \end{bmatrix} \;\Rightarrow\; \begin{bmatrix} 1.0 & 0.85 \\ 0.85 & 1.0 \end{bmatrix} \begin{bmatrix} a_1 \\ a_2 \end{bmatrix} = \begin{bmatrix} 0.85 \\ 0.65 \end{bmatrix} $$

**Step 2 — Determinant:**

$$ \Delta = 1.0^2 - 0.85^2 = 1.0 - 0.7225 = 0.2775 $$

**Step 3 — Solve (Cramer's rule):**

$$ a_1 = \frac{0.85 \cdot 1.0 - 0.65 \cdot 0.85}{0.2775} = \frac{0.7225 - 0.5525}{0.2775} = \frac{0.1700}{0.2775} \approx 0.6126 $$

$$ a_2 = \frac{1.0 \cdot 0.65 - 0.85 \cdot 0.85}{0.2775} = \frac{0.6500 - 0.7225}{0.2775} = \frac{-0.0725}{0.2775} \approx -0.2613 $$

**Step 4 — Prediction error energy:**

$$ E_2 = R(0) - a_1 R(1) - a_2 R(2) = 1.0 - 0.6126(0.85) - (-0.2613)(0.65) $$

$$ E_2 = 1.0 - 0.5207 + 0.1698 = 0.6491 $$

**Step 5 — Prediction Gain (compression benefit):**

$$ G_p \text{ (dB)} = 10\log_{10}\!\left(\frac{R(0)}{E_2}\right) = 10\log_{10}\!\left(\frac{1.0}{0.6491}\right) = 10 \times 0.1876 = 1.88 \text{ dB} $$

> A 2-tap predictor yields only 1.88 dB gain here; real speech with longer correlation requires $P = 8$ to $16$ taps for 10–14 dB gain.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# SECTION 4 — STRUCTURAL DIAGRAMS & SCHEMATICS

## 4.1 Overall Taxonomy of Speech Coders (Mermaid Mind-Map)

```mermaid
mindmap
  root((Speech Coders<br>PECST866 Mod 3))
    TimeDomain
      PCM
        Uniform
        MuLaw
        ALaw
      DPCM
      ADPCM
        G726
      APC
        PerceptualWeighting
    SpectralDomain
      SubBandCoding
        QMFBank
        PerceptualBitAlloc
      TransformCoding
        DFT
        DCT
        KLT
    VocoderParametric
      ChannelVocoder
      FormantVocoder
      CepstrumVocoder
      PhaseVocoder
      LPCVocoder
        LPC10e
      CELP
        FS1016
        AMRNB
        EVS
```

> [!NOTE]
> **Mermaid Safety Compliance:** All node IDs are alphanumeric (`TimeDomain`, `SpectralDomain`, etc.). All labels with spaces or punctuation are double-quoted, contain no markdown bold/italic tags, no Greek letters, and no special characters that would break the Mermaid parser.

## 4.2 Block Diagram — Generic Speech Coder Pipeline

```mermaid
flowchart LR
    subgraph A["ANALYSIS - ENCODER SIDE"]
        A1["Input Speech<br>s of t"] --> A2["Pre-Emphasis<br>Filter"]
        A2 --> A3["Framing<br>20 to 30 ms"]
        A3 --> A4["Domain Transform<br>Time / Spectral / Model"]
        A4 --> A5["Parameter Extraction<br>LPC, Pitch, Gain, MB"]
        A5 --> A6["Quantization and<br>Bit Allocation"]
        A6 --> A7["Bitstream<br>Packing"]
    end

    CH["Channel<br>Storage or<br>Transmission"]:::ch

    A7 --> CH

    subgraph B["SYNTHESIS - DECODER SIDE"]
        B1["Bitstream<br>Unpacking"] --> B2["De-Quantization"]
        B2 --> B3["Inverse Domain<br>Transform"]
        B3 --> B4["Excitation Gen<br>Pulse or Noise"]
        B4 --> B5["Synthesis Filter<br>1 over A of z"]
        B5 --> B6["De-Emphasis<br>Filter"]
        B6 --> B7["Output Speech<br>s hat of t"]
    end

    CH --> B1

    classDef ch fill:#f9c74f,stroke:#333,stroke-width:2px,color:#000
```

## 4.3 Block Diagram — Channel Vocoder (Detailed)

```mermaid
flowchart TB
    subgraph TX["TRANSMITTER - ANALYSIS"]
        T1["Speech Input s of t"] --> T2["Bank of N<br>Bandpass Filters<br>F1 to FN"]
        T2 --> T3["Envelope Detectors<br>and Smoothers"]
        T3 --> T4["Envelope Encoders<br>Log Quantization"]
        T4 --> T5["Multiplexer MUX"]
        T6["Pitch and<br>Voicing Detector"] --> T7["Pitch Encoder"]
        T7 --> T5
    end

    CH["Channel"]:::ch

    T5 --> CH

    subgraph RX["RECEIVER - SYNTHESIS"]
        R1["Demultiplexer DEMUX"] --> R2["Envelope Decoders"]
        R2 --> R3["Bank of N<br>Bandpass Filters<br>G1 to GN Modulated"]
        R4["Voicing Switch"] --> R5["Excitation Generator<br>Pulse Train if Voiced<br>Noise if Unvoiced"]
        R5 --> R6["Summing and<br>Modulation Bus"]
        R3 --> R6
        R6 --> R7["Output Speech s hat of t"]
    end

    CH --> R1
    T6 --> CH
    CH --> R4

    classDef ch fill:#ffd166,stroke:#333,stroke-width:2px,color:#000
```

## 4.4 Block Diagram — LPC Vocoder (CELP-style Hybrid)

```mermaid
flowchart LR
    subgraph ENC["ENCODER - ANALYSIS BY SYNTHESIS"]
        E1["Speech Frame s of n"] --> E2["LPC Analysis<br>Levinson Durbin P order"]
        E2 --> E3["Perceptual Weighting<br>Filter W of z"]
        E3 --> E4["Target Vector x of n"]
        E1 --> E4
        E4 --> E5["Codebook Search<br>min over k of weighted error"]
        CB["Stochastic and<br>Adaptive Codebooks"] --> E5
        E5 --> E6["Index k and Gain g"]
    end

    CH2["Channel"]:::ch

    E6 --> CH2

    subgraph DEC["DECODER"]
        D1["Received Index and Gain"] --> D2["Codebook Lookup c sub k"]
        D2 --> D3["Excitation e of n equals g c sub k"]
        D3 --> D4["LPC Synthesis Filter<br>1 over A of z"]
        D4 --> D5["De-Emphasis and<br>Post-Filter"]
        D5 --> D6["Output Speech s hat of n"]
    end

    CH2 --> D1

    classDef ch fill:#90be6d,stroke:#333,stroke-width:2px,color:#000
```

## 4.5 Comparison Matrix — Coder Classes Side-by-Side

```mermaid
flowchart TB
    subgraph T["TIME DOMAIN"]
        T1["Bit rate 16 to 64 kbps"]:::t
        T2["Quality toll to wideband"]:::t
        T3["Exploits sample redundancy"]:::t
        T4["Low delay 0.125 ms"]:::t
    end
    subgraph S["SPECTRAL DOMAIN"]
        S1["Bit rate 4.8 to 32 kbps"]:::s
        S2["Quality communication to near toll"]:::s
        S3["Exploits perceptual masking"]:::s
        S4["Moderate delay 20 to 40 ms"]:::s
    end
    subgraph V["VOCODER"]
        V1["Bit rate 1.2 to 9.6 kbps"]:::v
        V2["Quality synthetic to communication"]:::v
        V3["Exploits source filter model"]:::v
        V4["Higher delay 20 to 60 ms"]:::v
    end
    T --- S
    S --- V

    classDef t fill:#a8dadc,stroke:#1d3557,color:#000
    classDef s fill:#f1faee,stroke:#1d3557,color:#000
    classDef v fill:#ffd6a5,stroke:#1d3557,color:#000
```

## 4.6 Decision Flow — Selecting the Right Coder Class

```mermaid
flowchart TD
    Q1{Required<br>bit rate?} -->|<= 4.8 kbps| V["Use VOCODER<br>LPC or CELP"]
    Q1 -->|4.8 to 16 kbps| Q2{Perceptual<br>quality critical?}
    Q1 -->|>= 16 kbps| T["Use TIME DOMAIN<br>PCM or ADPCM"]

    Q2 -->|Yes| SP["Use SPECTRAL<br>Sub-band or Transform"]
    Q2 -->|No| T

    V --> Q3{Real-time<br>VoIP needed?}
    Q3 -->|Yes| C["Use CELP<br>e.g. AMR NB or EVS"]
    Q3 -->|No| L["Use LPC-10e<br>or Formant"]

    SP --> Q4{Storage<br>focus?}
    Q4 -->|Yes| TR["Use Transform<br>DCT or KLT"]
    Q4 -->|No| SB["Use Sub-band<br>QMF bank"]
```

> [!TIP]
> **Engineering Tip:** The decision flow above is exactly the kind of "select and justify" question that appears in KTU Module 3 as a 7-mark question. Always pair the choice with a *quantitative justification* (e.g., "CELP at 4.8 kbps gives 4.0 MOS, exceeding the 3.5 threshold for cellular voice").

<!-- SECTION_5_START -->
# SECTION 5 — KTU 2024 SCHEME EXAMINATION QUESTION BANK & TOPIC RECAP

## 5.1 Part A — Short Answer Questions (2 × 3 Marks)

### Question A.1 `[KTU University Exam – July 2023]`
**Explain the source-filter model of speech production. How is it exploited in a vocoder?** **(3 Marks, CO1, Remember/Understand)**

**Model Answer:**

The **source-filter model** treats the vocal tract as a **linear time-varying filter** $H(z)$ excited by a source $E(z)$ (glottal pulse train for voiced sounds, white noise for unvoiced sounds).

$$ S(z) = H(z) \cdot E(z) $$

A **vocoder** exploits this by:
1. Estimating the **filter parameters** $\{a_k, G\}$ via LPC analysis (typically $P = 10$).
2. Detecting **voicing** and estimating **pitch period** for the excitation.
3. Transmitting only these parameters (≈ 54 bits/frame for LPC-10).
4. At the receiver, regenerating an artificial excitation and filtering it through the synthesized $H(z)$.

> **Valuation Key:** [Drawing source-filter block diagram: 1 Mark] [Naming both source types: 1 Mark] [Connecting to vocoder parameter set: 1 Mark]

---

### Question A.2 `[KTU University Exam – Dec 2023]`
**Differentiate between waveform coders and parametric coders. Give one example of each.** **(3 Marks, CO1, Understand)**

**Model Answer:**

| Aspect | Waveform Coder | Parametric Coder (Vocoder) |
|---|---|---|
| **Goal** | Preserve waveform shape | Preserve perceptual features |
| **Bit rate** | 16 – 64 kbps | 1.2 – 4.8 kbps |
| **Domain** | Time / Spectral (signal-domain) | Model parameter domain |
| **Output quality** | Natural, high MOS | Synthetic, lower MOS |
| **Example** | **PCM**, **ADPCM (G.726)**, **Sub-band** | **LPC-10 (FS-1015)**, **Channel Vocoder** |

> **Valuation Key:** [Three distinguishing points: 2 Marks] [One example each: 1 Mark]

---

## 5.2 Part B — Long Answer Questions (14 Marks Each, with Internal Choice)

### Question B — Module 3 (Internal Choice Pattern)

> **Question B(a) [14 Marks]:** `OR`
> **Question B(b) [14 Marks]:**
> *Students must answer EITHER (a) OR (b). Each carries sub-parts (i) 7 marks and (ii) 7 marks.*

---

#### Question B(a) `[KTU University Exam – July 2024, Module 3, CO2, Apply/Analyse]`

**(a)(i)** With a neat block diagram, explain the operation of an **Adaptive Predictive Coder (APC)**. How does perceptual weighting improve its performance over plain DPCM? **(7 Marks, Understand/Analyse)**

**(a)(ii)** A speech signal sampled at **8 kHz** is encoded with a **3rd-order ADPCM** predictor. The autocorrelation values are $R(0) = 1.0$, $R(1) = 0.90$, $R(2) = 0.75$, $R(3) = 0.55$. Compute the optimal predictor coefficients and the prediction gain in dB. **(7 Marks, Apply)**

**Model Solution:**

**(a)(i) APC Block Diagram & Theory — 7 Marks**

```
Speech s(n) ──► ┌─────────────┐
                │ Perceptual   │
                │ Weighting    │ ──► Weighted s_w(n)
                │ Filter W(z)  │
                └──────┬───────┘
                       │
                       ▼
              ┌──────────────────┐
              │  P-tap Predictor │ ◄──┐
              │   ŝ(n) = Σa_k s(n-k)│   │
              └────────┬─────────┘   │
                       │             │
                       ▼             │
                  ┌────────┐   ┌──────────────┐
                  │  e(n)  │──►│ Adaptive     │
                  │ s(n)-ŝ │   │ Quantizer Q  │
                  └───┬────┘   │ (step Δ)     │
                      │        └──────┬───────┘
                      ▼               │
              ┌──────────────┐        │ feedback
              │  Bitstream   │        │
              │  + Q index   │        │
              └──────────────┘        │
                                      ▼
                              ┌──────────────┐
                              │ De-quant Q⁻¹ │
                              └──────┬───────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │ ŝ(n)+ê(n)    │
                              │ = reconstructed│
                              └──────────────┘
```

- **Perceptual Weighting Filter:** $W(z) = 1 - \sum a_k z^{-k}$ — same coefficients as the predictor, making the quantization noise spectrum follow the **inverse of the speech spectral envelope**. Noise is pushed into the **formant valleys** where the ear is least sensitive.
- **Adaptive Quantizer:** Step size $\Delta(n)$ scales with the signal energy envelope (e.g., Jayant adaptive algorithm).
- **Adaptive Predictor:** Coefficients updated every 5–20 ms using **lattice filter** structure with reflection coefficients $k_i \in (-1, +1)$ (stability guaranteed).
- **APC achieves toll quality at 16 kbps** (half of PCM), a 4× compression.

**[Block diagram: 2 Marks] [Perceptual weighting explanation: 2 Marks] [Adaptive quantizer: 1.5 Marks] [Adaptive predictor + bit rate: 1.5 Marks]**

---

**(a)(ii) Numerical Problem — 7 Marks**

**Step 1 — Yule-Walker matrix for $P = 3$:** `[Matrix formulation: 1 Mark]`

$$ \begin{bmatrix} 1.00 & 0.90 & 0.75 \\ 0.90 & 1.00 & 0.90 \\ 0.75 & 0.90 & 1.00 \end{bmatrix} \begin{bmatrix} a_1 \\ a_2 \\ a_3 \end{bmatrix} = \begin{bmatrix} 0.90 \\ 0.75 \\ 0.55 \end{bmatrix} $$

**Step 2 — Levinson-Durbin recursion:** `[Identifying Toeplitz: 1 Mark]`

Initialize: $E_0 = R(0) = 1.00$, $a_0^{(0)} = 1$.

**Iteration 1 ($i = 1$):** `[1 Mark]`
$$ k_1 = -\frac{R(1)}{E_0} = -\frac{0.90}{1.00} = -0.90 $$
$$ a_1^{(1)} = k_1 = -0.90 $$
$$ E_1 = E_0 (1 - k_1^2) = 1.00 (1 - 0.81) = 0.19 $$

**Iteration 2 ($i = 2$):** `[1 Mark]`
$$ k_2 = -\frac{R(2) + a_1^{(1)} R(1)}{E_1} = -\frac{0.75 + (-0.90)(0.90)}{0.19} = -\frac{0.75 - 0.81}{0.19} = -\frac{-0.06}{0.19} = 0.3158 $$
$$ a_1^{(2)} = a_1^{(1)} + k_2 a_1^{(1)} = -0.90 + 0.3158 \times (-0.90) = -0.90 - 0.2842 = -1.1842 $$
$$ a_2^{(2)} = k_2 = 0.3158 $$
$$ E_2 = E_1 (1 - k_2^2) = 0.19 (1 - 0.0997) = 0.19 \times 0.9003 = 0.1711 $$

**Iteration 3 ($i = 3$):** `[1 Mark]`
$$ k_3 = -\frac{R(3) + a_1^{(2)} R(2) + a_2^{(2)} R(1)}{E_2} $$
$$ k_3 = -\frac{0.55 + (-1.1842)(0.75) + (0.3158)(0.90)}{0.1711} $$
$$ k_3 = -\frac{0.55 - 0.8882 + 0.2842}{0.1711} = -\frac{-0.0540}{0.1711} = 0.3156 $$
$$ a_1^{(3)} = a_1^{(2)} + k_3 a_2^{(2)} = -1.1842 + 0.3156(0.3158) = -1.1842 + 0.0997 = -1.0845 $$
$$ a_2^{(3)} = a_2^{(2)} + k_3 a_1^{(2)} = 0.3158 + 0.3156(-1.1842) = 0.3158 - 0.3738 = -0.0580 $$
$$ a_3^{(3)} = k_3 = 0.3156 $$
$$ E_3 = E_2(1 - k_3^2) = 0.1711 (1 - 0.0996) = 0.1711 \times 0.9004 = 0.1541 $$

**Step 3 — Final coefficients (sign convention $A(z) = 1 - \sum a_k z^{-k}$):** `[Final answer: 1 Mark]`

$$ \boxed{a_1 = 1.0845,\quad a_2 = 0.0580,\quad a_3 = -0.3156} $$

**Step 4 — Prediction gain:** `[1 Mark]`

$$ G_p = 10\log_{10}\!\left(\frac{R(0)}{E_3}\right) = 10\log_{10}\!\left(\frac{1.00}{0.1541}\right) = 10 \times 0.8122 = 8.12 \text{ dB} $$

> A 3-tap predictor achieves **8.12 dB** of prediction gain, allowing a corresponding reduction in quantizer bit rate while preserving SQNR.

---

#### Question B(b) `[KTU University Exam – July 2024, Module 3, CO2, Apply/Analyse]` **(ALTERNATIVE — INTERNAL CHOICE)**

**(b)(i)** With a neat block diagram, explain the **Channel Vocoder**. How does it achieve such low bit rates, and what is its main limitation? **(7 Marks, Understand/Analyse)**

**(b)(ii)** For a **Sub-Band Coder (SBC)** with $M = 4$ sub-bands, the speech is sampled at $F_s = 8$ kHz. The perceptual bit allocation gives $B_1 = 4, B_2 = 3, B_3 = 2, B_4 = 1$ bits per sub-band sample. Compute the **total bit rate** and the **average bits per sample**. **(7 Marks, Apply)**

**Model Solution:**

**(b)(i) Channel Vocoder — 7 Marks**

**Block diagram (text-based, Mermaid in Section 4.3):** `[Block diagram: 2 Marks]`

**Transmitter (Analysis):**
- Speech is fed to a **bank of $N$ bandpass filters** (typically $N = 16$ to $20$) covering 200 Hz to 3500 Hz.
- Each filter output is **rectified and smoothed** to extract the **spectral envelope** — a slowly varying signal.
- Each envelope is **logarithmically quantized** and transmitted.
- A separate **pitch detector** (e.g., autocorrelation, cepstrum, or SIFT) outputs the pitch period.
- A **voicing detector** classifies the frame as voiced/unvoiced.

**Receiver (Synthesis):**
- Demultiplexed envelopes modulate the gains of a **matching filter bank**.
- A **voicing switch** selects between a **periodic pulse generator** (pitch frequency) and a **white-noise generator**.
- The filtered-sum output is the synthesized speech.

**Why low bit rate?** `[Low bit rate explanation: 2 Marks]`
- We transmit only **$N$ envelope values + pitch + voicing flag** per frame, NOT the full speech waveform.
- A typical configuration: $N = 16$ envelopes at 6 bits/40 ms = 16 × 6 / 0.040 = 2400 bps for envelopes + ~ 600 bps for pitch/voicing = **3.0 kbps** total.

**Main Limitation:** `[Limitation: 2 Marks]`
- **Buzzy, "robotic" speech quality** because the excitation is artificially generated — the fine harmonic structure of the original glottal source is lost.
- The model assumes a **steady-state, quasi-periodic source** which fails for **transient plosives** (e.g., /t/, /k/) and **nasals**.
- **Pitch detection errors** cause "double-pitch" or "half-pitch" artifacts.

**[Parameter count: 1 Mark] [Vocoder classification: 1 Mark]**

---

**(b)(ii) Sub-Band Coder Numerical Problem — 7 Marks**

**Step 1 — Per-sub-band sampling rate (after $M$-fold decimation):** `[1 Mark]`

$$ F_{s,i} = \frac{F_s}{M} = \frac{8000}{4} = 2000 \text{ samples/sec per sub-band} $$

**Step 2 — Sub-band bit rates:** `[2 Marks]`

$$ R_1 = F_{s,1} \cdot B_1 = 2000 \times 4 = 8000 \text{ bps} $$
$$ R_2 = 2000 \times 3 = 6000 \text{ bps} $$
$$ R_3 = 2000 \times 2 = 4000 \text{ bps} $$
$$ R_4 = 2000 \times 1 = 2000 \text{ bps} $$

**Step 3 — Total bit rate:** `[1 Mark]`

$$ R_{\text{total}} = R_1 + R_2 + R_3 + R_4 = 8000 + 6000 + 4000 + 2000 = 20{,}000 \text{ bps} = 20 \text{ kbps} $$

**Step 4 — Average bits per speech sample:** `[1 Mark]`

$$ B_{\text{avg}} = \frac{R_{\text{total}}}{F_s} = \frac{20{,}000}{8000} = 2.5 \text{ bits/sample} $$

**Step 5 — Comparison to PCM:** `[2 Marks]`

| Coder | Bits/Sample | Bit Rate | Compression Ratio vs PCM |
|---|---|---|---|
| Uniform PCM ($B = 8$) | 8.0 | 64 kbps | 1.0× (baseline) |
| Sub-Band Coder (this example) | 2.5 | 20 kbps | **3.2×** |
| Difference | −5.5 bits/sample | −44 kbps | 68.75% reduction |

> **Interpretation:** The SBC exploits **perceptual masking** — Sub-band 1 (lowest frequencies, 0–2 kHz) contains most speech intelligibility and gets 4 bits; Sub-band 4 (6–8 kHz) is masked by speech harmonics and gets only 1 bit. This non-uniform allocation is what makes SBC perceptually efficient.

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Student Mistakes (Module 3, Coders) — Direct Mark Losers:**
>
> 1. **Confusing "spectral coder" with "vocoder":** Spectral coders (SBC, Transform) are **waveform coders** in the frequency domain — they still aim to preserve the *waveform* perceptually. Vocoders (LPC, Channel) are **parametric** — they abandon waveform fidelity for parameter transmission. Writing "spectral vocoder" or "LPC spectral coder" loses 1 mark immediately.
>
> 2. **Forgetting the $F_s/M$ decimation in SBC:** The bit rate is $R = \sum (F_s/M) B_i$, NOT $R = F_s \sum B_i$. Many students compute $R = 8000 \times 10 = 80$ kbps instead of $20$ kbps — a 4× error.
>
> 3. **Yule-Walker sign convention:** The LPC filter is $A(z) = 1 - \sum a_k z^{-k}$, so the predictor is $\hat{s}(n) = \sum a_k s(n-k)$. Students often write $H(z) = 1 / (1 + \sum a_k z^{-k})$ with the wrong sign — full 7-mark loss on numerical questions.
>
> 4. **Reflection coefficient bound:** When asked for $k_i$, KTU expects the verification $|k_i| < 1$ for stability. Omitting this loses 0.5–1 mark.
>
> 5. **Missing the voicing flag in vocoder block diagrams:** Always include a **voicing switch** between pulse generator and noise generator. Missing it = −1 mark.
>
> 6. **Not drawing the perceptual weight filter inside APC/DPCM:** It is the *defining* feature that separates APC from DPCM. The examiner is looking for $W(z) = A(z) / A(z/\gamma)$ in the diagram.

---

## 5.4 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — Classes of Speech Coders (KTU Module 3, PECST866)**

**1. Three Coder Classes — One-Line Definitions:**
- **Time Domain Coder** → Operates on samples $s(n)$ in temporal axis. Exploits sample redundancy. Examples: **PCM (64 kbps)**, **DPCM**, **ADPCM (32 kbps, G.726)**, **APC (16 kbps)**.
- **Spectral Domain Coder** → Operates on transform coefficients or sub-band signals. Exploits **perceptual masking**. Examples: **Sub-Band Coding (SBC)**, **Transform Coding (DCT, KLT)**.
- **Vocoder (Parametric)** → Operates on model parameters (LPC, pitch, gain). Exploits **source-filter model**. Examples: **Channel Vocoder**, **Formant Vocoder**, **Cepstrum Vocoder**, **LPC-10 (2.4 kbps)**, **CELP (4.8–9.6 kbps)**.

**2. The Source-Filter Equation — Memorize:**
$$ S(z) = H(z) \cdot E(z) \quad ; \quad H(z) = \frac{G}{1 - \sum_{k=1}^{P} a_k z^{-k}} $$

**3. Bit-Rate Hierarchy (Top = High Quality, Bottom = Low Bit Rate):**
$$ \text{PCM (64 kbps)} > \text{ADPCM (32 kbps)} > \text{APC (16 kbps)} > \text{SBC (24 kbps)} > \text{CELP (4.8–9.6 kbps)} > \text{LPC-10 (2.4 kbps)} $$

**4. Standard Bit-Rate Constants (Bold in answers):**
- **PCM = 64 kbps** at $F_s = 8$ kHz, $B = 8$ bits.
- **ADPCM (G.726) = 32 kbps** at $B = 4$ bits.
- **LPC-10 (FS-1015) = 2.4 kbps** at 54 bits/22.5 ms frame.
- **CELP (FS-1016) = 4.8 kbps**.
- **AMR-NB (3GPP) = 4.75 to 12.2 kbps**.

**5. The "6 dB-per-bit" Rule for PCM:**
$$ \text{SQNR} = 6.02\,B + 1.76 \text{ dB} \quad \text{(sinusoidal signal)} $$

**6. Wiener-Hopf (Yule-Walker) Equations — Must Memorize:**
$$ \mathbf{R}_P \mathbf{a} = \mathbf{r}_P \quad \text{(solved by Levinson-Durbin in } O(P^2) \text{ time)} $$
$$ E_P = R(0) - \sum_{k=1}^{P} a_k R(k) $$

**7. Sub-Band Coder Bit Rate Formula:**
$$ R = \sum_{i=1}^{M} \frac{F_s}{M} \cdot B_i \quad \text{(NOT } F_s \cdot \sum B_i \text{)} $$

**8. Vocoder Parameters Per Frame:**
- **LPC coefficients** (often converted to **Line Spectral Frequencies — LSF** for quantization)
- **Pitch period $P_0$** (voiced only)
- **Gain $G$**
- **Voicing flag** (voiced / unvoiced)

**9. Three Families of Vocoders — Quick Comparison:**
- **Channel Vocoder** → First developed (Homer Dudley, 1939, Bell Labs). Bandpass filter bank. 1.2–4.8 kbps. Buzzy output.
- **Formant Vocoder** → Tracks only formants, not full envelope. 0.6–1.2 kbps. Hard formant tracking.
- **Cepstrum / Homomorphic Vocoder** → Uses log-spectrum and quefrency. Better pitch detection, used in modern research.
- **LPC Vocoder** → All-pole model. 2.4 kbps. Foundation of modern speech coding (CELP extends this).
- **Phase Vocoder** → STFT-based, used for time-stretching and pitch-shifting in audio production.
- **CELP** → Analysis-by-synthesis with codebook search. 4.8–9.6 kbps with near-toll quality. **Industry standard for cellular voice.**

**10. KTU-2024-Specific High-Yield Keywords (use verbatim in answers for full marks):**
- "exploits sample-to-sample correlation"
- "exploits perceptual masking of the human ear"
- "source-filter model of speech production"
- "analysis-by-synthesis"
- "Levinson-Durbin recursion"
- "perceptual weighting filter $W(z) = A(z/\gamma)$"
- "line spectral frequencies (LSF) for quantization"
- "Quadrature Mirror Filter (QMF) bank for alias-free sub-band decomposition"
- "voicing decision and pitch detection"

**11. Common Cross-Topic Linkages (KTU loves these):**
- **Module 1 (Speech Production) ↔ Module 3 (Vocoders):** Source-filter model unifies both.
- **Module 2 (Time/Frequency Analysis) ↔ Module 3 (Transform Coders):** DCT/DFT theory is reused.
- **Module 4 (Speech Recognition) ↔ Module 3 (Feature Extraction):** LPC and Cepstral coefficients are the **same** MFCC precursors used in both coding and recognition.

**12. Quick-Recall Mnemonic — "T-S-V":**
> **T**ime-domain = **T**emporal samples (PCM/ADPCM)
> **S**pectral = **S**ub-bands and transforms (SBC, DCT)
> **V**ocoder = **V**oice parameters (LPC, Formant, Channel, CELP)

<!-- SECTION_5_END -->
