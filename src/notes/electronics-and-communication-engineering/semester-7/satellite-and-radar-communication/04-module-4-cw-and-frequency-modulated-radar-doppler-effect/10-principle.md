---
title: "Principle"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff336"
status: "completed"
scrapedAt: "2026-05-23T18:11:03.134Z"
---
# Module 4: CW and Frequency Modulated Radar: Doppler Effect

## Topic: Principle

### 1. Introduction to Doppler Effect in Radar Systems

The Doppler effect is a fundamental principle that underpins the operation of many radar systems, particularly those that measure velocity. It describes the change in frequency of a wave in relation to an observer who is moving relative to the wave source. In radar, the transmitted electromagnetic wave reflects off a moving target, and the frequency of the reflected wave is shifted due to the target's motion. This frequency shift, known as the Doppler shift, is directly proportional to the target's radial velocity (velocity component along the line of sight between the radar and the target).

**Learning Outcomes Covered:**
*   LO1: Explain the Doppler effect and its significance in radar systems. (Connects to CO3)

**Key Concepts and Definitions:**

*   **Doppler Effect:** The apparent change in frequency of a wave as a result of relative motion between the source and the observer.
*   **Doppler Shift ($\Delta f$):** The magnitude of the frequency change caused by the Doppler effect.
*   **Radial Velocity ($v_r$):** The component of the target's velocity that is along the line of sight between the radar and the target.
*   **Transmitted Frequency ($f_t$):** The frequency of the electromagnetic wave transmitted by the radar.
*   **Received Frequency ($f_r$):** The frequency of the wave reflected from the target and received by the radar.
*   **Radar Wavelength ($\lambda$):** The spatial period of the transmitted wave.

**Underlying Principle (from Skolnik, Chapter 2 & 4):**

Consider a radar transmitting a continuous wave (CW) of frequency $f_t$. When this wave strikes a target moving with a radial velocity $v_r$, the wave crests are either compressed (if the target is moving towards the radar) or stretched (if the target is moving away from the radar) as they are reflected. This compression or stretching of the wave leads to a change in the frequency of the reflected wave.

The Doppler shift is given by the formula:

$\Delta f = f_r - f_t = \frac{2 v_r}{ \lambda }$

Where:
*   $\Delta f$ is the Doppler shift (in Hz)
*   $v_r$ is the radial velocity of the target (in m/s)
*   $\lambda$ is the wavelength of the transmitted radar signal (in meters)

The factor of 2 arises because the target experiences the Doppler shift twice: once when it moves towards the source of the wave (effectively increasing the frequency it encounters) and again when it moves away from the source of the reflected wave (effectively increasing the frequency of the reflected wave it transmits back).

**Important Points to Remember:**

*   The Doppler shift is **only** sensitive to the **radial component** of the target's velocity. It cannot detect tangential or cross-range velocity.
*   A stationary target ($v_r = 0$) will produce **no Doppler shift**.

**Example:**

A radar operating at a frequency of 10 GHz transmits a signal. A target is moving towards the radar with a radial velocity of 100 m/s. Calculate the Doppler shift.

*   Frequency $f_t = 10 \text{ GHz} = 10 \times 10^9 \text{ Hz}$
*   Wavelength $\lambda = \frac{c}{f_t}$, where $c$ is the speed of light ($3 \times 10^8 \text{ m/s}$)
    $\lambda = \frac{3 \times 10^8 \text{ m/s}}{10 \times 10^9 \text{ Hz}} = 0.03 \text{ m}$
*   Radial velocity $v_r = 100 \text{ m/s}$ (positive for motion towards the radar)

Doppler Shift $\Delta f = \frac{2 \times 100 \text{ m/s}}{0.03 \text{ m}} \approx 6667 \text{ Hz} = 6.667 \text{ kHz}$

The received frequency will be $f_r = f_t + \Delta f = 10 \text{ GHz} + 6.667 \text{ kHz}$.

---

### 2. Continuous Wave (CW) Radar

Continuous Wave (CW) radar transmits a continuous radio frequency signal. This simple design allows for a very low probability of intercept and a high degree of efficiency. However, a basic CW radar without modifications suffers from a significant problem: it cannot distinguish between stationary and moving targets. This is because a stationary target reflects the signal with no Doppler shift, and the transmitted signal leakage into the receiver can mask this.

**Learning Outcomes Covered:**
*   LO1: Explain the operation of a basic CW radar and its limitations. (Connects to CO3, CO4)

**Key Concepts and Definitions:**

*   **Continuous Wave (CW) Radar:** A radar system that transmits a signal continuously without interruption.
*   **Transmitter Leakage:** The direct coupling of the transmitted signal into the radar receiver.
*   **Doppler Radar:** A radar system that utilizes the Doppler effect to detect and measure the velocity of targets.

**Operation and Limitations (from Skolnik, Chapter 4 & 8, Edde, Chapter 2):**

A basic CW radar transmits a signal ($f_t$) and receives the reflected signal ($f_r$).

*   **Moving Target:** If the target is moving, $f_r = f_t + \Delta f$. The received signal will have a different frequency than the transmitted signal.
*   **Stationary Target:** If the target is stationary, $f_r = f_t$. The received signal has the same frequency as the transmitted signal.

**The Problem:** In a practical CW radar, the transmitted signal can leak directly into the receiver (e.g., through antenna side lobes or internal coupling). This leakage is at the transmitted frequency $f_t$. If a stationary target reflects the signal, the received signal is also at $f_t$. The receiver essentially sees a very strong signal at $f_t$ from the leakage and a weak signal at $f_t$ from the stationary target. These two signals will beat (mix) to produce a zero-frequency output, making it impossible to differentiate between the target and the leakage.

**Distinguishing Moving Targets:** To overcome this, CW radar systems often employ techniques that exploit the Doppler shift. By mixing the received signal with the transmitted signal, the receiver generates an intermediate frequency (IF) signal whose frequency is equal to the Doppler shift $\Delta f$. This IF signal's frequency is then measured to determine the target's radial velocity.

**Example:**

A simple CW radar transmits at 5 GHz. It receives a reflection from a target moving at 50 m/s towards it.

*   Transmitted frequency $f_t = 5 \text{ GHz}$
*   Wavelength $\lambda = c/f_t = (3 \times 10^8 \text{ m/s}) / (5 \times 10^9 \text{ Hz}) = 0.06 \text{ m}$
*   Radial velocity $v_r = 50 \text{ m/s}$
*   Doppler shift $\Delta f = \frac{2 \times 50 \text{ m/s}}{0.06 \text{ m}} \approx 1667 \text{ Hz}$

The receiver would ideally detect an IF signal at 1667 Hz. However, without a method to separate the transmitted leakage, this target would be indistinguishable from a stationary target or the leakage itself if the Doppler shift is zero.

**Important Points to Remember:**

*   Basic CW radar cannot detect stationary targets due to transmitter leakage.
*   The core advantage of CW radar is its ability to measure velocity directly via the Doppler shift.

---

### 3. Frequency Modulated (FM) Continuous Wave (FMCW) Radar

To address the limitations of basic CW radar and to also measure range, Frequency Modulated Continuous Wave (FMCW) radar was developed. FMCW radar transmits a signal whose frequency is varied (modulated) over time, typically in a linear ramp. By analyzing the frequency difference between the transmitted and received signals at any given moment, FMCW radar can simultaneously determine both the range and velocity of a target.

**Learning Outcomes Covered:**
*   LO1: Explain the principle of operation of FMCW radar for range and velocity measurement. (Connects to CO3, CO4)
*   LO2: Discuss the advantages of FMCW radar over basic CW radar. (Connects to CO4)

**Key Concepts and Definitions:**

*   **Frequency Modulated Continuous Wave (FMCW) Radar:** A radar that transmits a continuous wave whose frequency is intentionally varied over time.
*   **Frequency Sweep/Ramp:** The process of changing the transmitted frequency over a defined period.
*   **Chirp:** A signal whose frequency increases or decreases over time.
*   **Beat Frequency ($f_b$):** The frequency difference between the transmitted and received signals.
*   **Range-Doppler Coupling:** The phenomenon in FMCW radar where the beat frequency depends on both range and velocity.

**Principle of Operation (from Skolnik, Chapter 4 & 8, Edde, Chapter 2, Kinsley & Quegan, Chapter 3):**

FMCW radar transmits a signal whose frequency changes linearly with time, typically in a triangular or sawtooth pattern. Let's consider a simple sawtooth sweep:

1.  **Transmission Phase (Frequency Increasing):** The radar transmits a signal whose frequency increases linearly from $f_{start}$ to $f_{stop}$ over a period $T_{sweep}$. The rate of frequency change is the sweep rate, $S = (f_{stop} - f_{start}) / T_{sweep}$. The transmitted frequency at time $t$ can be represented as $f_t(t) = f_{start} + S t$.

2.  **Reflection:** The transmitted signal travels to a target at a range $R$. The time of flight is $\tau = 2R/c$. The signal reflected from the target arrives back at the radar at time $t + \tau$.

3.  **Reception and Mixing:** The radar mixes the currently transmitted signal with the received signal (which is a delayed version of the transmitted signal). This mixing process generates a beat frequency ($f_b$), which is the difference between the two frequencies.

    If the target is stationary ($v_r = 0$), the frequency of the received signal is the same as the transmitted frequency at the time of reception, but delayed by $\tau$. So, $f_{received}(t) = f_t(t - \tau) = f_{start} + S(t - \tau)$.

    The beat frequency generated is:
    $f_b = f_t(t) - f_{received}(t) = (f_{start} + S t) - (f_{start} + S(t - \tau))$
    $f_b = S \tau$

    Since $\tau = 2R/c$, the beat frequency for a stationary target is:
    $f_b = S \frac{2R}{c}$

    This equation shows that the beat frequency is directly proportional to the range $R$.

4.  **Moving Target - Range-Doppler Coupling:** If the target is also moving with a radial velocity $v_r$, the received signal's frequency is further shifted by the Doppler effect. The Doppler shift is $\Delta f = 2v_r/\lambda_t$, where $\lambda_t$ is the wavelength at the transmitted frequency. However, the transmitted frequency is not constant. The effective Doppler shift experienced by the target at the time of reflection is related to the transmitted frequency at that moment.

    A more accurate way to represent the received frequency, considering both delay and Doppler shift, is:
    $f_{received}(t) = (f_{start} + S(t - \tau)) \left(1 + \frac{2v_r}{c}\right)$

    When mixing $f_t(t)$ with $f_{received}(t)$, and considering the beat frequency, the situation becomes more complex due to the frequency sweep. During the sweep, the transmitted frequency is changing. The received signal is a delayed version of the transmitted signal. The Doppler shift adds to this frequency.

    **During the up-sweep (frequency increasing):**
    The beat frequency is approximately: $f_b_{up} \approx \frac{2R}{c}S + \frac{2v_r}{c} \frac{f_t}{f_{start}} S \times \text{something}$ (simplified: the Doppler shift's effect on the beat frequency during a sweep is a function of the instantaneous transmitted frequency).

    A more direct approach for FMCW is to consider the frequency difference. If we assume the Doppler shift is small compared to the sweep rate, the received frequency at time $t$ will be approximately $f_{start} + S(t - \tau) + \Delta f$.

    The beat frequency generated by mixing $f_t(t) = f_{start} + S t$ and $f_{received}(t) \approx f_{start} + S(t - \tau) + \Delta f$ is:
    $f_b \approx (f_{start} + S t) - (f_{start} + S(t - \tau) + \Delta f)$
    $f_b \approx S \tau - \Delta f$
    $f_b \approx \frac{2R}{c}S - \frac{2v_r}{c}$

    This shows that the beat frequency is dependent on both range and velocity. This is **range-Doppler coupling**. To resolve this, FMCW radar uses a technique called **frequency sweeping in both directions** (e.g., up-sweep and down-sweep, forming a triangular waveform).

5.  **Triangular Sweep for Range and Velocity Resolution:**
    *   **Up-sweep:** $f_b(up) \approx \frac{2R}{c}S - \frac{2v_r}{c}$
    *   **Down-sweep:** The frequency decreases linearly. The sweep rate $S_{down} = -(f_{stop} - f_{start}) / T_{sweep}$.
        The transmitted frequency during down-sweep is $f_t(t) = f_{stop} - S_{down} t$.
        The received signal is delayed and Doppler shifted. The beat frequency will be approximately:
        $f_b(down) \approx \frac{2R}{c}S - \frac{2v_r}{c}$ (if velocity is positive towards radar) or $f_b(down) \approx \frac{2R}{c}S + \frac{2v_r}{c}$ (if velocity is negative away from radar)
        Let's use the general form: $f_b(down) \approx \frac{2R}{c}S + \frac{2v_r}{c}$ (where $S$ is the magnitude of the sweep rate).

    By using two sweeps (up and down), we get two different beat frequencies for the same target:
    $f_{b1} = \frac{2R}{c}S - \frac{2v_r}{c}$
    $f_{b2} = \frac{2R}{c}S + \frac{2v_r}{c}$

    Now, we have two equations and two unknowns (R and $v_r$). We can solve them:
    *   **Range:** Summing the two beat frequencies: $f_{b1} + f_{b2} = 2 \frac{2R}{c}S \implies \frac{2R}{c}S = \frac{f_{b1} + f_{b2}}{2}$.
        This means the average beat frequency from the two sweeps is proportional to the range.
        $R = \frac{c}{2S} \left( \frac{f_{b1} + f_{b2}}{2} \right)$
    *   **Velocity:** Subtracting the two beat frequencies: $f_{b2} - f_{b1} = 2 \frac{2v_r}{c} \implies \frac{2v_r}{c} = \frac{f_{b2} - f_{b1}}{2}$.
        This means the difference between the beat frequencies from the two sweeps is proportional to the velocity.
        $v_r = \frac{c}{4} \left( \frac{f_{b2} - f_{b1}}{1} \right)$ (Correcting the factor, $\Delta f = \frac{2v_r}{\lambda_t}$, and relating it to beat frequency difference.)
        The difference in beat frequencies is $2 \Delta f$. So, $f_{b2} - f_{b1} = 2 \Delta f$.
        $\Delta f = \frac{f_{b2} - f_{b1}}{2}$
        $v_r = \frac{\lambda_t}{2} \Delta f = \frac{\lambda_t}{2} \left(\frac{f_{b2} - f_{b1}}{2}\right) = \frac{\lambda_t}{4} (f_{b2} - f_{b1})$

    *Note on $\lambda_t$: In FMCW, the transmitted frequency changes. For accurate velocity calculation, the wavelength corresponding to the average transmitted frequency during the sweep is typically used, or the Doppler shift is directly related to the frequency difference divided by the time delay. A more precise relationship for velocity derived from the beat frequency difference during up and down sweeps is: $v_r = \frac{c}{2F_{sweep}} \frac{(f_{b2}-f_{b1})}{2}$ if $F_{sweep}$ is the frequency sweep range, but usually it's simpler to use $v_r = \frac{c}{2} \frac{f_{b2}-f_{b1}}{F_{sweep} T_{sweep}}$, where $F_{sweep}$ is the total sweep frequency range.

    Let's re-derive for velocity more carefully. During the up-sweep, the frequency deviation due to Doppler is approximately $\Delta f$. The beat frequency is $f_b_{up} = R(2S/c) - \Delta f$. During the down-sweep, the frequency deviation due to Doppler is approximately $-\Delta f$ (for velocity towards the radar). The beat frequency is $f_b_{down} = R(2S/c) + \Delta f$.
    So, $f_{b2} - f_{b1} = (R(2S/c) + \Delta f) - (R(2S/c) - \Delta f) = 2 \Delta f$.
    Therefore, $\Delta f = (f_{b2} - f_{b1})/2$.
    And $v_r = (\lambda/2) \Delta f = (\lambda/2) (f_{b2} - f_{b1})/2 = \lambda (f_{b2} - f_{b1})/4$.
    The $\lambda$ here is the wavelength at the carrier frequency. If the carrier frequency is $f_c$, then $\lambda = c/f_c$.
    $v_r = (c/f_c) (f_{b2} - f_{b1})/4 = \frac{c}{4 f_c} (f_{b2} - f_{b1})$.

    *Corrected Velocity Formula:*
    $v_r = \frac{c}{4f_{carrier}} (f_{b2} - f_{b1})$ or $v_r = \frac{c}{2F_{sweep}} \frac{(f_{b2} - f_{b1})}{T_{sweep}}$.
    Let's stick to the simpler derivation form where beat frequency difference directly relates to Doppler:
    $v_r = \frac{c}{2 \times (\text{Frequency Sweep Rate})} \times \frac{\Delta f_{beat}}{T_{sweep}}$ -- this is getting complicated.

    **Let's use the standard approach directly:**
    Range $R$: The beat frequency for range alone (no Doppler) is $f_R = \frac{2R}{c}S$.
    For a moving target, the beat frequencies are $f_{b1} = f_R - \Delta f$ and $f_{b2} = f_R + \Delta f$.
    Sum: $f_{b1} + f_{b2} = 2f_R$. So, $f_R = (f_{b1} + f_{b2})/2$.
    $R = \frac{c}{2S} f_R = \frac{c}{2S} \frac{f_{b1} + f_{b2}}{2} = \frac{c}{4S}(f_{b1} + f_{b2})$.
    Velocity: $f_{b2} - f_{b1} = 2\Delta f$. So, $\Delta f = (f_{b2} - f_{b1})/2$.
    $v_r = \frac{\lambda}{2}\Delta f = \frac{\lambda}{2} \frac{f_{b2} - f_{b1}}{2} = \frac{\lambda}{4}(f_{b2} - f_{b1})$.
    Using $\lambda = c/f_c$:
    $v_r = \frac{c}{4f_c}(f_{b2} - f_{b1})$.

    **Simplified Example for understanding:**
    Suppose $S=100 \text{ MHz/µs} = 10^{11} \text{ Hz/s}$. $f_c = 10 \text{ GHz}$. $c=3 \times 10^8 \text{ m/s}$.
    Target at $R = 100 \text{ m}$, $v_r = 50 \text{ m/s}$ (towards radar).
    Frequency sweep range $F_{sweep} = 100 \text{ MHz}$. If $T_{sweep} = 10 \text{ µs}$, then $S = 10 \text{ MHz/µs} = 10^{13} \text{ Hz/s}$.
    Let's use $S = 10 \text{ MHz/µs}$.
    $f_R = \frac{2R}{c}S = \frac{2 \times 100 \text{ m}}{3 \times 10^8 \text{ m/s}} \times (10 \times 10^{12} \text{ Hz/s}) = 6.66 \times 10^{7} \text{ Hz} = 66.6 \text{ MHz}$.
    $\Delta f = \frac{2v_r}{\lambda} = \frac{2 \times 50 \text{ m/s}}{0.03 \text{ m}} \approx 3333 \text{ Hz} = 3.33 \text{ kHz}$.

    Up-sweep: $f_{b1} = f_R - \Delta f = 66.6 \text{ MHz} - 3.33 \text{ kHz} \approx 66.6 \text{ MHz}$ (Doppler is small compared to $f_R$).
    Down-sweep: $f_{b2} = f_R + \Delta f = 66.6 \text{ MHz} + 3.33 \text{ kHz} \approx 66.6 \text{ MHz}$.

    *Note:* The Doppler shift is typically very small compared to the beat frequency due to range. When analyzing, the beat frequencies are often separated into a "range frequency" component and a "Doppler frequency" component.

    Correct calculation for beat frequencies:
    During up-sweep, the frequency difference between transmitted and received signal is $\Delta f_{beat1} = f_{tx}(t) - f_{tx}(t-\tau)$.
    $f_{tx}(t) = f_0 + St$. $f_{tx}(t-\tau) = f_0 + S(t-\tau)$.
    $\Delta f_{beat1} = (f_0 + St) - (f_0 + S(t-\tau)) = S\tau = S(2R/c)$. This is the beat frequency if there was no Doppler.
    Now, with Doppler, the received signal has its own frequency shift.
    Effective transmitted frequency when signal reaches target: $f_{tx}(t - \tau)$.
    Received frequency by radar is $f_{rx}(t) = f_{tx}(t - \tau) (1 + 2v_r/c)$.
    Beat frequency: $f_b = f_{tx}(t) - f_{rx}(t) \approx f_{tx}(t) - f_{tx}(t - \tau)(1 + 2v_r/c)$.
    This is complicated. Let's use the simplified beat frequency equations derived earlier:
    $f_{b1} \approx \frac{2R}{c}S - \frac{2v_r}{c}$
    $f_{b2} \approx \frac{2R}{c}S + \frac{2v_r}{c}$

    Let's use example values: $R=100m, v_r = 50m/s, S=10 \text{ MHz/µs} = 10^{13} \text{ Hz/s}, f_c=10 \text{ GHz}, \lambda=0.03 \text{ m}$.
    $f_{b1} \approx \frac{2 \times 100}{3 \times 10^8} \times 10^{13} - \frac{2 \times 50}{0.03} = 6.66 \times 10^7 - 3333 \text{ Hz} = 66.6 \text{ MHz} - 3.33 \text{ kHz}$.
    $f_{b2} \approx \frac{2 \times 100}{3 \times 10^8} \times 10^{13} + \frac{2 \times 50}{0.03} = 6.66 \times 10^7 + 3333 \text{ Hz} = 66.6 \text{ MHz} + 3.33 \text{ kHz}$.

    Average beat frequency: $(f_{b1} + f_{b2})/2 = 66.6 \text{ MHz}$.
    $R = \frac{c}{4S}(f_{b1} + f_{b2}) = \frac{3 \times 10^8 \text{ m/s}}{4 \times 10^{13} \text{ Hz/s}} \times (2 \times 66.6 \text{ MHz}) = \frac{3 \times 10^8}{4 \times 10^{13}} \times 133.2 \times 10^6 \text{ Hz} = 100 \text{ m}$.

    Beat frequency difference: $f_{b2} - f_{b1} = 6.66 \text{ kHz}$.
    $v_r = \frac{\lambda}{4}(f_{b2} - f_{b1}) = \frac{0.03 \text{ m}}{4} \times 6.66 \times 10^3 \text{ Hz} = 49.95 \text{ m/s} \approx 50 \text{ m/s}$.

    This demonstrates how FMCW radar can resolve both range and velocity.

**Advantages of FMCW over basic CW Radar (from Edde, Chapter 2, Kinsley & Quegan, Chapter 3):**

*   **Range Measurement:** FMCW can measure range, whereas basic CW radar cannot.
*   **Stationary Target Detection:** FMCW can detect stationary targets by measuring their range. In basic CW, stationary targets are masked by transmitter leakage.
*   **Velocity Measurement:** Both can measure velocity, but FMCW uses the beat frequency derived from the sweep.

**Disadvantages of FMCW:**

*   **Range-Doppler Coupling:** Without proper sweep strategies (like triangular sweeps), velocity affects the range measurement and vice-versa.
*   **Complexity:** More complex than basic CW radar.
*   **Limited Range Resolution:** Range resolution is determined by the bandwidth of the sweep ($B = S \times T_{sweep}$).

**Important Points to Remember:**

*   FMCW uses frequency modulation to enable range measurement.
*   Triangular or sawtooth frequency sweeps are used.
*   A combination of up-sweeps and down-sweeps is necessary to decouple range and velocity.
*   The beat frequency is proportional to range, and the difference in beat frequencies from up/down sweeps is proportional to velocity.

**Practice Questions:**

1.  A radar transmits a signal at 1 GHz. A target is moving towards the radar at 20 m/s. What is the Doppler shift if the wavelength is 0.3 meters?
2.  Explain why a basic CW radar cannot detect stationary targets.
3.  In an FMCW radar, the beat frequency for a stationary target is 50 kHz. If the sweep rate is 20 MHz/µs, what is the range of the target? (Assume $c = 3 \times 10^8$ m/s)
4.  An FMCW radar uses a triangular sweep with a sweep bandwidth of 100 MHz and a sweep time of 20 µs. For a target moving towards the radar, the beat frequency during the up-sweep is 40 kHz, and during the down-sweep is 60 kHz. Calculate the range and radial velocity of the target. (Assume carrier frequency $f_c = 10$ GHz).

**Answers:**

1.  $\Delta f = \frac{2 v_r}{\lambda} = \frac{2 \times 20 \text{ m/s}}{0.3 \text{ m}} \approx 133.3 \text{ Hz}$.
2.  A basic CW radar cannot detect stationary targets because the reflected signal has no Doppler shift and is indistinguishable from the strong transmitted signal that leaks into the receiver. The mixing of these two signals results in a zero-frequency output, masking any stationary target return.
3.  Beat frequency $f_b = \frac{2R}{c}S$. We need to find the sweep rate $S$. The problem states the beat frequency is for a stationary target, so $f_b = f_R$.
    $f_R = 50 \text{ kHz} = 50 \times 10^3 \text{ Hz}$.
    We need the sweep rate. The problem statement is missing the sweep rate to solve for range. Let's assume a sweep rate was intended to be provided.
    *If the question meant that the beat frequency *generated* by a stationary target at a certain range was 50 kHz, and that this beat frequency is proportional to range, and we know the sweep rate $S$*:
    Let's assume a sweep rate of $S = 20 \text{ MHz/µs} = 20 \times 10^{12} \text{ Hz/s}$.
    $R = \frac{c \times f_b}{2S} = \frac{3 \times 10^8 \text{ m/s} \times 50 \times 10^3 \text{ Hz}}{2 \times (20 \times 10^{12} \text{ Hz/s})} = \frac{1.5 \times 10^{13}}{40 \times 10^{12}} \text{ m} = \frac{15}{40} \text{ m} = 0.375 \text{ m}$.
    *Correction:* The sweep rate needs to be used with the beat frequency. The beat frequency is given directly.

    Let's re-interpret question 3. It states the beat frequency for a stationary target is 50 kHz. This implies that $f_R = 50 \text{ kHz}$. To calculate range, we need the sweep rate. The question *provides* a sweep rate (20 MHz/µs) but doesn't explicitly link it to the 50 kHz beat frequency measurement. This is likely an error in the question's phrasing.

    *Assuming the question implies the radar system has a sweep rate $S = 20 \text{ MHz/µs} = 20 \times 10^{12} \text{ Hz/s}$ and a target produced a beat frequency of 50 kHz for its range:*
    $R = \frac{c \times f_b}{2S} = \frac{3 \times 10^8 \text{ m/s} \times 50 \times 10^3 \text{ Hz}}{2 \times (20 \times 10^{12} \text{ Hz/s})} = \frac{1.5 \times 10^{13}}{4 \times 10^{13}} \text{ m} = 0.375 \text{ m}$.

    *More likely interpretation:* The question intends to say: "In an FMCW radar with a sweep rate of 20 MHz/µs, a stationary target produces a beat frequency of 50 kHz. What is the range of the target?"
    $S = 20 \text{ MHz/µs} = 20 \times 10^{12} \text{ Hz/s}$.
    $f_b = 50 \text{ kHz} = 50 \times 10^3 \text{ Hz}$.
    $R = \frac{c \cdot f_b}{2S} = \frac{3 \times 10^8 \text{ m/s} \cdot 50 \times 10^3 \text{ Hz}}{2 \cdot (20 \times 10^{12} \text{ Hz/s})} = \frac{1.5 \times 10^{13}}{4 \times 10^{13}} \text{ m} = 0.375 \text{ m}$.

4.  Sweep bandwidth $B = 100$ MHz, sweep time $T_{sweep} = 20$ µs.
    Sweep rate $S = B / T_{sweep} = 100 \text{ MHz} / 20 \text{ µs} = 5 \text{ MHz/µs} = 5 \times 10^{12} \text{ Hz/s}$.
    Carrier frequency $f_c = 10$ GHz. Wavelength $\lambda = c/f_c = (3 \times 10^8 \text{ m/s}) / (10 \times 10^9 \text{ Hz}) = 0.03 \text{ m}$.
    Beat frequencies: $f_{b1} = 40$ kHz (up-sweep), $f_{b2} = 60$ kHz (down-sweep).

    *   **Range Calculation:**
        Average beat frequency $f_R = (f_{b1} + f_{b2})/2 = (40 \text{ kHz} + 60 \text{ kHz})/2 = 50 \text{ kHz}$.
        $R = \frac{c}{4S}(f_{b1} + f_{b2}) = \frac{3 \times 10^8 \text{ m/s}}{4 \times (5 \times 10^{12} \text{ Hz/s})} \times (40 \times 10^3 \text{ Hz} + 60 \times 10^3 \text{ Hz})$
        $R = \frac{3 \times 10^8}{20 \times 10^{12}} \times 100 \times 10^3 \text{ m} = \frac{300 \times 10^3}{20 \times 10^{12}} \text{ m} = 1.5 \times 10^4 \times 10^{-12} \text{ m} = 1.5 \times 10^{-8}$ Wait, this is wrong.

    Let's use the formula $R = \frac{c \cdot f_R}{2S}$ where $f_R$ is the average beat frequency related to range.
    $f_R = \frac{2R}{c}S$. So $R = \frac{c \cdot f_R}{2S}$.
    $f_R = 50 \text{ kHz} = 50 \times 10^3 \text{ Hz}$.
    $S = 5 \times 10^{12} \text{ Hz/s}$.
    $R = \frac{3 \times 10^8 \text{ m/s} \times 50 \times 10^3 \text{ Hz}}{2 \times (5 \times 10^{12} \text{ Hz/s})} = \frac{1.5 \times 10^{13}}{10 \times 10^{12}} \text{ m} = \frac{15}{10} \text{ m} = 1.5 \text{ m}$.

    *   **Velocity Calculation:**
        Difference in beat frequencies $\Delta f_{beat} = f_{b2} - f_{b1} = 60 \text{ kHz} - 40 \text{ kHz} = 20 \text{ kHz}$.
        $v_r = \frac{\lambda}{4}\Delta f_{beat} = \frac{0.03 \text{ m}}{4} \times (20 \times 10^3 \text{ Hz}) = 0.0075 \text{ m} \times 20000 \text{ Hz} = 150 \text{ m/s}$.
        The target is moving towards the radar because the beat frequency on down-sweep is higher (indicating a greater Doppler shift in the positive direction relative to the up-sweep).

---

### 4. Applications of Doppler Radar

The ability of Doppler radar to measure velocity has made it indispensable in a wide range of applications.

**Learning Outcomes Covered:**
*   LO3: Illustrate Radar Fundamentals like Radar Equation and Applications. (Connects to CO3)
*   LO4: Compare various types of Radars and tracking techniques (Knowledge Level: K2)

**Key Concepts and Definitions:**

*   **Moving Target Indication (MTI):** A radar technique that uses the Doppler shift to discriminate between moving targets and stationary clutter (e.g., ground, rain).
*   **Pulse Doppler Radar:** A radar that transmits pulses and uses the Doppler shift of the returned pulses to measure target velocity and filter out stationary clutter.
*   **Clutter:** Unwanted radar reflections from stationary objects in the environment.

**Applications (from Skolnik, Chapter 4 & 15, Edde, Chapter 2 & 9, Kinsley & Quegan, Chapter 1):**

*   **Weather Radar:**
    *   **Precipitation Velocity:** Measures the velocity of rain, snow, and hail. This helps in detecting storm movement, intensity, and identifying phenomena like tornado vortices (using Doppler velocity signatures).
    *   **Wind Measurement:** By observing the motion of precipitation or aerosols, Doppler weather radar can infer wind speed and direction within storms.

*   **Air Traffic Control (ATC) and Surveillance:**
    *   **Aircraft Velocity:** Tracks aircraft speed, which is crucial for maintaining safe separation and managing air traffic.
    *   **Ground Clutter Suppression:** MTI and Pulse Doppler techniques help filter out reflections from buildings, terrain, and other ground clutter, allowing for the clear detection of aircraft.

*   **Automotive Radar:**
    *   **Adaptive Cruise Control (ACC):** Measures the speed of vehicles ahead, enabling the car to automatically adjust its speed to maintain a set distance.
    *   **Collision Avoidance Systems:** Detects and measures the speed of other vehicles and obstacles to warn the driver or automatically brake.
    *   **Parking Assist:** Measures the speed of surrounding objects for safer parking maneuvers.

*   **Military Applications:**
    *   **Target Tracking:** Tracks the velocity of aircraft, missiles, and vehicles.
    *   **Ground Surveillance:** Detects moving vehicles and personnel on the ground while ignoring stationary terrain.
    *   **Missile Guidance:** Doppler information is vital for guiding missiles to their targets.

*   **Law Enforcement:**
    *   **Speed Guns:** Measure the speed of vehicles for traffic enforcement. The Doppler shift is directly related to the vehicle's speed.

*   **Industrial Applications:**
    *   **Flow Measurement:** Measuring the speed of fluid or granular material flow in pipes or processes.
    *   **Level Sensing:** Detecting the presence and movement of materials.

*   **Satellite Communication (Indirect Relevance):** While not directly Doppler radar, satellite communication systems can experience Doppler shifts due to the high relative velocities between satellites and ground stations. Understanding these shifts is crucial for maintaining signal lock and compensating for frequency drift. However, this module primarily focuses on radar applications of the Doppler effect.

**Comparison of Radar Types and Doppler:**

*   **Pulsed Radar:** Transmits pulses. Measures range by time-of-flight.
*   **CW Radar:** Transmits continuously. Measures velocity by Doppler shift. Cannot measure range and struggles with stationary targets without modifications.
*   **FMCW Radar:** Transmits a frequency-modulated continuous wave. Can measure both range and velocity.
*   **Pulse Doppler Radar:** A sophisticated pulsed radar that uses Doppler processing to extract velocity information and filter clutter. It combines the range-measuring capability of pulsed radar with the velocity-measuring capability of CW radar, offering superior performance against clutter.

**Important Points to Remember:**

*   Doppler radar is primarily used for velocity measurement.
*   Its ability to filter stationary clutter is a key advantage in many applications.
*   Weather radar, automotive radar, and speed guns are common examples.

---

### 5. Satellite Communication Relevance and Doppler Shift

While this module focuses on radar, it's important to acknowledge the relevance of the Doppler effect in satellite communications, particularly due to the high speeds of satellites.

**Learning Outcomes Covered:**
*   LO1: Explain the Doppler effect and its significance in radar systems. (Connects to CO1)

**Key Concepts and Definitions:**

*   **Satellite Velocity:** Satellites orbit the Earth at high speeds.
*   **Relative Velocity:** The relative velocity between a satellite and a ground station.
*   **Frequency Drift:** The change in the received signal frequency due to the Doppler effect.

**Relevance to Satellite Communication (from Pratt & Allnutt, Chapter 11):**

*   **Frequency Correction:** Satellites move at high speeds relative to ground stations. This relative motion causes a Doppler shift in the received radio signals. The magnitude of this shift depends on the satellite's velocity, the angle of elevation, and the operating frequency.
*   **Impact on Communication:** For narrow-band communication systems, this Doppler shift can be significant enough to move the signal out of the receiver's bandwidth, causing loss of lock or communication.
*   **Compensation Techniques:** Satellite communication systems employ techniques to compensate for this Doppler shift. This typically involves a tracking system that measures the incoming signal's frequency and adjusts the receiver's local oscillator (LO) or the transmitter's frequency to counteract the Doppler shift.
*   **Variable Doppler Shift:** As a satellite passes overhead, its radial velocity changes, meaning the Doppler shift is not constant but varies throughout the pass. This requires dynamic frequency correction.

**Example in Satellite Communication:**

Consider a geostationary satellite (relatively slow movement) vs. a low Earth orbit (LEO) satellite.
*   **Geostationary Satellites:** Their orbital speeds are such that the Doppler shifts are relatively small (e.g., a few kHz at S-band). These are often manageable with standard receiver tracking capabilities.
*   **LEO Satellites:** Orbit much faster, leading to larger Doppler shifts (e.g., tens or hundreds of kHz at S-band, and even MHz at higher frequencies like Ka-band). These require more sophisticated and rapid Doppler tracking and compensation systems.

**Important Points to Remember:**

*   The Doppler effect is a critical consideration in satellite communication due to satellite velocities.
*   It causes a shift in the received signal frequency, requiring compensation to maintain communication.
*   LEO satellites exhibit more significant Doppler shifts than geostationary satellites.

---

### Comprehensive Summary and Course Outcome Alignment

This module has explored the fundamental principle of the Doppler effect and its application in radar systems, specifically CW and FMCW radar.

*   **CO1 (Knowledge Level K2):** We've illustrated the Doppler effect and its significance in radar systems, as well as its relevance in satellite communication (though the primary focus is radar). The principle of how frequency shifts occur due to relative motion is covered.
*   **CO3 (Knowledge Level K2):** The module has illustrated radar fundamentals by explaining the core principle behind Doppler radar. While the Radar Equation itself isn't explicitly detailed in this specific topic "Principle," the Doppler shift is a crucial factor that influences the signal-to-noise ratio and detection capabilities discussed in the Radar Equation. Applications of Doppler radar are a significant part of this module.
*   **CO4 (Knowledge Level K2):** We have compared CW radar and FMCW radar, highlighting their operational principles, advantages, and disadvantages, which directly addresses the comparison of radar types. The underlying principles of how they measure velocity (and range for FMCW) are discussed.

---

### Practice Questions (Comprehensive)

1.  **Doppler Effect Principle:** A radar operating at 10 GHz detects a target with a radial velocity of 200 m/s away from the radar. Calculate the Doppler shift in Hz. If the transmitted frequency is $f_t$, what is the received frequency $f_r$? (Assume $c = 3 \times 10^8$ m/s).
2.  **CW Radar:** Describe the main limitation of a basic CW radar system and how it is overcome in practice.
3.  **FMCW Radar Range and Velocity:** An FMCW radar uses a sawtooth sweep of 100 MHz bandwidth over 50 µs. A target is at a range of 150 m and has a radial velocity of 75 m/s towards the radar.
    a.  Calculate the frequency sweep rate $S$.
    b.  Calculate the beat frequency for this target during the sweep (assume a simplified up-sweep scenario for this part).
    c.  If a triangular sweep is used, and the beat frequency during the up-sweep is $f_{b1}$ and during the down-sweep is $f_{b2}$, and the beat frequency related to range only is $f_R$, express $f_{b1}$ and $f_{b2}$ in terms of $f_R$ and the Doppler shift $\Delta f$.
4.  **Applications:** Name three distinct applications of Doppler radar and briefly explain how the Doppler principle is utilized in each.
5.  **Satellite Communication Doppler:** A LEO satellite is transmitting at 2 GHz. At a particular moment, its radial velocity relative to a ground station is 5 km/s. Calculate the approximate Doppler shift experienced by the ground station. (Assume the wavelength $\lambda$ corresponds to 2 GHz).

---

### Answers to Comprehensive Practice Questions

1.  **Doppler Effect Principle:**
    *   Wavelength $\lambda = c/f_t = (3 \times 10^8 \text{ m/s}) / (10 \times 10^9 \text{ Hz}) = 0.03 \text{ m}$.
    *   Doppler Shift $\Delta f = \frac{2 v_r}{\lambda} = \frac{2 \times 200 \text{ m/s}}{0.03 \text{ m}} \approx 13333 \text{ Hz} = 13.33 \text{ kHz}$.
    *   Since the target is moving away, the frequency is lower. $f_r = f_t - \Delta f$.

2.  **CW Radar:**
    *   **Limitation:** A basic CW radar cannot distinguish between stationary targets and the transmitted signal leakage into the receiver. Both result in a zero-frequency beat signal.
    *   **Overcoming the Limitation:** This is typically overcome by using techniques like the **Doppler filter** (which passes only signals with a specific Doppler frequency) or by using **FMCW radar** (which can differentiate targets based on their range, and hence their beat frequency). Pulse Doppler radar also uses pulse modulation to distinguish targets.

3.  **FMCW Radar Range and Velocity:**
    a.  Sweep rate $S = \text{Bandwidth} / \text{Time} = 100 \text{ MHz} / 50 \text{ µs} = (100 \times 10^6 \text{ Hz}) / (50 \times 10^{-6} \text{ s}) = 2 \times 10^{12} \text{ Hz/s}$.
    b.  For a simplified up-sweep, beat frequency $f_b \approx \frac{2R}{c}S - \Delta f$.
        *   Range-related beat frequency $f_R = \frac{2R}{c}S = \frac{2 \times 150 \text{ m}}{3 \times 10^8 \text{ m/s}} \times (2 \times 10^{12} \text{ Hz/s}) = 1000 \text{ Hz} = 1 \text{ kHz}$.
        *   Doppler shift $\Delta f = \frac{2v_r}{\lambda}$. We need $\lambda$. Assuming the sweep is centered around a carrier frequency, let's assume a typical microwave frequency for calculation. Let's assume carrier frequency $f_c = 10 \text{ GHz}$.
            $\lambda = c/f_c = (3 \times 10^8 \text{ m/s}) / (10 \times 10^9 \text{ Hz}) = 0.03 \text{ m}$.
            $\Delta f = \frac{2 \times 75 \text{ m/s}}{0.03 \text{ m}} \approx 5000 \text{ Hz} = 5 \text{ kHz}$.
        *   So, $f_b \approx f_R - \Delta f = 1 \text{ kHz} - 5 \text{ kHz} = -4 \text{ kHz}$. The beat frequency would be negative, indicating the velocity component is dominant and has shifted the frequency down in this context for the up-sweep. If the target is moving towards the radar, the beat frequency equation is typically $f_b = f_R - \Delta f$ for up-sweep and $f_b = f_R + \Delta f$ for down-sweep. A negative beat frequency implies the Doppler shift is larger than the range-induced beat frequency. For simplicity in answering, let's use magnitude: $f_b \approx |1 \text{ kHz} - 5 \text{ kHz}| = 4 \text{ kHz}$. (More precisely, the Doppler term is added or subtracted based on the direction relative to the sweep.)

    c.  Let $f_R$ be the beat frequency solely due to range and $\Delta f$ be the Doppler shift.
        *   During up-sweep (frequency increasing): $f_{b1} = f_R - \Delta f$ (assuming $\Delta f$ is positive for motion towards radar).
        *   During down-sweep (frequency decreasing): $f_{b2} = f_R + \Delta f$ (assuming $\Delta f$ is positive for motion towards radar).

4.  **Applications:**
    *   **Weather Radar:** Measures precipitation velocity to detect storm movement, wind direction within storms, and identify phenomena like tornado vortices.
    *   **Automotive Radar (ACC):** Measures the speed of vehicles ahead to control the car's speed for adaptive cruise control.
    *   **Law Enforcement Speed Guns:** Measures the speed of vehicles for traffic enforcement by detecting the Doppler shift of the reflected radio waves.

5.  **Satellite Communication Doppler:**
    *   Radial velocity $v_r = 5 \text{ km/s} = 5000 \text{ m/s}$.
    *   Frequency $f = 2 \text{ GHz} = 2 \times 10^9 \text{ Hz}$.
    *   Wavelength $\lambda = c/f = (3 \times 10^8 \text{ m/s}) / (2 \times 10^9 \text{ Hz}) = 0.15 \text{ m}$.
    *   Doppler Shift $\Delta f = \frac{2 v_r}{\lambda} = \frac{2 \times 5000 \text{ m/s}}{0.15 \text{ m}} \approx 66667 \text{ Hz} \approx 66.7 \text{ kHz}$.

---
---

**References:**

*   **Satellite Communications by Timothy Pratt, Jeremy Allnutt:** (Relevant for Satellite Communication Doppler section)
*   **Introduction to Radar Systems by Merrill I. Skolnik:** (Core reference for CW, FMCW, Doppler principle, and applications)
*   **Radar: Principles, Technology, Applications by Byron Edde:** (Provides good overview of CW, FMCW, and applications)
*   **Understanding Radar Systems by Simon Kinsley and Shaun Quegan:** (Excellent for detailed understanding of FMCW principles and signal processing)
*   **Digital Satellite Communications by Tri, T.Ha:** (Relevant for Satellite Communication Doppler section)
*   **Satellite Communications Systems Engineering by Pritchard:** (Relevant for Satellite Communication Doppler section)

**Important Note:** The exact formulas and derivations for FMCW can be complex. The provided explanations offer a simplified but conceptually accurate overview. For rigorous mathematical treatment, consulting Skolnik or Kinsley & Quegan is recommended. The relevance to Satellite Communication is primarily for understanding Doppler shifts due to relative motion, which is a shared principle but applied differently than in radar's direct measurement of target velocity.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
