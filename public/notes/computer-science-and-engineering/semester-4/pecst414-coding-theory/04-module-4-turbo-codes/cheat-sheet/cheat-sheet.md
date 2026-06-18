# MODULE CHEAT SHEET: TURBO CODES & ADVANCED CODING APPLICATIONS

## 1. Core Concept Matrix

| Topic | Core Definition | Cognitive Level | Primary Utility |
|---|---|---|---|
| Turbo Decoding | Iterative soft-decision decoding using two SISO decoders exchanging extrinsic information | Apply / Analyze | Near Shannon-limit performance at low SNR |
| SISO Decoding (BCJR/MAP) | Algorithm computing a posteriori probability (APP) of each info bit given received sequence | Apply | Provides soft outputs for iteration |
| Log-Likelihood Ratio (LLR) | $\Lambda(u_k) = \ln \frac{P(u_k=+1 \vert \mathbf{y})}{P(u_k=-1 \vert \mathbf{y})}$ | Understand | Carrier of soft information between decoders |
| Extrinsic Information | Information about $u_k$ derived from the *other* received symbols (parity + constraints) — not from prior or systematic | Analyze | Prevents using the same information twice (avoids correlation) |
| Turbo Code Construction | Parallel Concatenation of two RSC encoders separated by an interleaver $\pi$ | Remember / Apply | Generates long, random-like codewords with simple components |
| Recursive Systematic Convolutional (RSC) Encoder | Systematic convolutional encoder with feedback (recursive) — generator has form $G(D)=\frac{g_1(D)}{g_0(D)}$ | Apply | Ensures infinite impulse response → low-weight termination issue solved by tail-biting |
| Distance Properties | Distribution of Hamming weights of codewords; characterized by IOWEF $A(W,Z)$ | Analyze | Predicts BER floor and asymptotic performance |
| Free Distance $d_{free}$ | Minimum Hamming weight of any non-zero codeword | Remember | Dominates high-SNR error performance |
| Effective Free Distance $d_{eff,2}$ | Minimum weight codeword with weight-2 input (most probable error event) | Analyze | Dominates performance at moderate-to-high SNR for turbo codes |
| Convergence of Turbo Codes | Evolution of mutual information between extrinsic LLR and transmitted bits across iterations | Analyze | Predicts decoding threshold via EXIT analysis |
| EXIT Chart | Plot of $I_E$ (output MI) vs $I_A$ (input MI) for each SISO decoder | Apply | Visualizes iterative decoding trajectory |
| ARQ Schemes | Retransmission protocols for error control over noisy channels | Apply | Combines FEC + retransmission for reliability |
| Hybrid ARQ (HARQ) | Adaptive combination of FEC and ARQ using retransmission requests | Analyze | Optimizes throughput vs reliability tradeoff (used in 4G/5G) |
| Applications of Linear Codes | Deployment of block/convolutional/turbo/LDPC codes in real systems | Remember | Maps theory to industry practice |

---

## 2. The Master Formula Sheet

### 2.1 Turbo Encoder Structure

| Element | Formula / Expression | Parameters & Units |
|---|---|---|
| Turbo Code Rate | $R_t = \dfrac{R_1 R_2}{R_1 + R_2 - 1}$ | $R_1, R_2$ = component RSC rates (e.g., $1/2$) |
| PCCC (Parallel Concatenated) | $1/3$ rate standard: systematic $\mathbf{u}$ + two parities $\mathbf{p}^{(1)}, \mathbf{p}^{(2)}$ | $\mathbf{p}^{(2)}$ computed on interleaved $\tilde{\mathbf{u}}=\pi(\mathbf{u})$ |
| Interleaver Length | $N$ bits permuted via $\pi$ | Random interleaver maximizes weight distribution |
| Puncturing | $R_t = 1/2$ achievable by alternately puncturing parity bits | $R_1, R_2$ become effective $2/3$ each |
| SCCC (Serial) | Outer $\to$ Interleaver $\to$ Inner | Inner output is outer input |
| RSC Transfer Function | $G(D) = \left[\,1,\ \dfrac{g_2(D)}{g_1(D)}\right]$ | $g_1$ = feedforward, $g_1(D)$ = feedback polynomial |

### 2.2 MAP / BCJR Algorithm (SISO Decoder)

| Quantity | Formula | Description |
|---|---|---|
| Branch Metric $\gamma_k(s',s)$ | $P(s_k=s' \vert s_{k-1}=s) \cdot p(y_k \vert s',s)$ | Transition probability at time $k$ |
| Forward Metric $\alpha_k(s)$ | $\displaystyle\sum_{s'} \alpha_{k-1}(s') \cdot \gamma_k(s',s)$ | Recursion forward in trellis |
| Backward Metric $\beta_k(s)$ | $\displaystyle\sum_{s'} \beta_{k+1}(s') \cdot \gamma_{k+1}(s,s')$ | Recursion backward in trellis |
| A Posteriori LLR | $\Lambda(u_k) = \ln \dfrac{\sum_{(s',s): u_k=+1} \alpha_{k-1}(s')\gamma_k(s',s)\beta_k(s)}{\sum_{(s',s): u_k=-1} \alpha_{k-1}(s')\gamma_k(s',s)\beta_k(s)}$ | Hard + soft decision combined |
| LLR Decomposition | $\Lambda(u_k) = \underbrace{\ln\dfrac{P(u_k=+1)}{P(u_k=-1)}}_{\Lambda_a(u_k)\ \text{(a priori)}} + \underbrace{\ln\dfrac{p(\mathbf{y} \vert u_k=+1)}{p(\mathbf{y} \vert u_k=-1)}}_{\Lambda_{ch}(u_k)\ \text{(channel)}} + \underbrace{\Lambda_e(u_k)}_{\text{(extrinsic)}}$ | Three independent information sources |
| Log-MAP Approximation | $\ln(e^x + e^y) = \max(x,y) + \ln(1 + e^{-\vert x-y \vert})$ | Max-Log-MAP drops $\ln(\cdot)$ correction |

### 2.3 Iterative (Turbo) Decoding

| Step | Operation |
|---|---|
| 1. Initialization | $\Lambda_a^{(1)}(u_k)=0$ for decoder 1; receive $\mathbf{y}^{s}, \mathbf{y}^{1p}$ |
| 2. Decoder 1 SISO | Computes $\Lambda^{(1)}(u_k) = \Lambda_a^{(1)} + \Lambda_{ch}^{(1)} + \Lambda_e^{(1)}$ |
| 3. De-interleave | $\pi^{-1}$ applied to $\Lambda_e^{(1)} \to \tilde{\Lambda}_e^{(1)}$ |
| 4. Decoder 2 A-priori | Set $\Lambda_a^{(2)}(u_k) = \tilde{\Lambda}_e^{(1)}(u_k)$ |
| 5. Decoder 2 SISO | Uses $\mathbf{y}^{s}, \mathbf{y}^{2p}$ to compute $\Lambda_e^{(2)}$ |
| 6. Interleave | $\pi$ applied to $\Lambda_e^{(2)} \to \tilde{\Lambda}_e^{(2)}$ |
| 7. Iterate | Return to Step 2 with $\Lambda_a^{(1)} = \tilde{\Lambda}_e^{(2)}$ |
| Stop | Hard decision $\hat{u}_k = \text{sign}(\Lambda^{(2)}(u_k))$ after $I$ iterations |

### 2.4 Distance Properties

| Quantity | Formula | Notes |
|---|---|---|
| Weight Enumerator (Block) | $A_w = \#\{\mathbf{c} \in \mathcal{C} : w_H(\mathbf{c})=w\}$ | Block code |
| IOWEF (Turbo) | $A(W,Z) = \displaystyle\sum_{w,z} A_{w,z} W^{w} Z^{z}$ | $w$ = input weight, $z$ = output weight |
| Conditional WEF | $A_w(Z) = \displaystyle\sum_{z} A_{w,z} Z^{z}$ | Given input weight $w$ |
| Free Distance | $d_{free} = \min_{\mathbf{c}\ne \mathbf{0}} w_H(\mathbf{c})$ | Dominates high-SNR |
| Effective Free Distance | $d_{eff} = 2 + 2d_{2,min}$ (parallel concat.) | $d_{2,min}$ = min output weight for weight-2 input |
| Union Bound (Turbo) | $P_b \le \displaystyle\sum_{w} \frac{w}{N} A_{w,2w} Q\!\left(\sqrt{2wR_t E_b/N_0}\right)$ | Asymptotic BER |
| Asymptotic Slope | $-10\log_{10}(e) \cdot R_t \cdot d_{free}$ dB/decade | "Waterfall" slope in log-log plot |

### 2.5 EXIT Chart & Convergence

| Quantity | Formula / Definition | Notes |
|---|---|---|
| Mutual Information (Input) | $I_A = \tfrac{1}{2}\sum_{u=\pm 1}\int p(\Lambda \vert u)\log_2\!\dfrac{2p(\Lambda \vert u)}{p(\Lambda \vert +1)+p(\Lambda \vert -1)}d\Lambda$ | $I_A \in [0,1]$ bit |
| Mutual Information (Output) | $I_E$ = same formula applied to extrinsic LLR $\Lambda_e$ |  |
| EXIT Characteristic | Curve $I_E = T(I_A)$ for a given SISO decoder at SNR $E_b/N_0$ | One curve per component decoder |
| Decoding Trajectory | Vertical jump (decode) → horizontal transfer (interleave) → vertical jump → ... | Staircase plot |
| Tunnel Condition | $T_2^{-1}(I_A) < T_1(I_A)\ \forall I_A \in [0,1)$ | EXIT curves must *not* cross |
| Benedetto Area Property | $A(C_1) + A(C_2) > 1$ for convergence | $A(C_i) = \int_0^1 T_i(I_A)\, dI_A$ |
| Threshold $E_b/N_0^*$ | SNR at which EXIT curves just touch | Below this: decoding stalls |

### 2.6 ARQ Schemes

| Scheme | Throughput $\eta$ (for $P$ packet error prob.) | Buffer | Sender Window |
|---|---|---|---|
| Stop-and-Wait (SW-ARQ) | $\eta = \dfrac{1-P}{1+2a}$ | 1 packet | 1 |
| Go-Back-N (GBN-ARQ) | $\eta = \dfrac{1-P}{1+2aP}$ | 1 packet | $N$ (sliding) |
| Selective Repeat (SR-ARQ) | $\eta = 1-P$ | $N$ packets | $N$ |
| Parameter $a$ | $a = \dfrac{T_p}{T_f}$ | $T_p$ = propagation, $T_f$ = frame time |
| HARQ Type I (Chase) | Combine multiple copies of same packet (max-ratio) | NAK triggers retransmit |
| HARQ Type II (IR) | Send *new* parity bits each retransmission (incremental redundancy) | Most efficient |
| HARQ Type III | Packets self-decodable; coded bits grouped | Like Type II but with self-decodable increments |

### 2.7 Application Summary

| Application | Code Used | Purpose |
|---|---|---|
| Deep-space (Voyager, Mars) | Convolutional $(2,1,7)$ RS outer | Power-limited link |
| GSM cellular | Convolutional $r=1/2$, $K=5$ | Voice |
| 3G (UMTS/CDMA) | Turbo codes (3GPP) | Data |
| 4G LTE | Turbo + IR-HARQ | Throughput |
| 5G NR | LDPC (data) + Polar (control) | Replace turbo in data |
| CDs / DVDs | Reed-Solomon + CIRC | Burst errors |
| QR codes | Reed-Solomon | 2D barcode |
| Flash SSD/HDD | BCH / LDPC | BER correction in storage |
| DVB-S2 / DVB-T2 | LDPC + BCH | Broadcasting |
| Satellite TV | Turbo (DVB-RCS) | Two-way |

---

## 3. High-Yield Exam Checkpoints

- **Turbo Principle:** Two *short* codes with iterative decoding achieve performance of *one long* random-like code (Berrou–Glavieux–Thitimajshima, 1993).
- **Why RSC, not NSC?** Systematic output preserves information; feedback gives infinite memory, eliminating low-weight codewords.
- **LLR Decomposition Identity:** Always write $\Lambda(u_k) = \Lambda_a + \Lambda_{ch} + \Lambda_e$; the **extrinsic** $\Lambda_e$ is the only quantity exchanged between decoders.
- **Extrinsic Information:** Computed from $\mathbf{y}^{1p}$ (decoder 1) and $\mathbf{y}^{2p}$ (decoder 2) — it does *not* use $\Lambda_a$ or the systematic $\mathbf{y}^s$ again (avoids positive feedback).
- **BCJR Complexity:** $\mathcal{O}(2^K N)$ per decoder per iteration — same as Viterbi but gives APPs.
- **Distance Spectrum Behavior:** Turbo codes have *low* $d_{free}$ but very *sparse* low-weight codewords → **error floor** at high SNR; *waterfall* at low SNR.
- **Interleaver Role:** (i) Decorrelates decoders' inputs, (ii) spreads low-weight input patterns across the block to break up low-weight parity paths.
- **EXIT Chart Trick:** A successful trajectory = staircase that climbs from $(0,0)$ to $(1,1)$ without intersecting the "swap" curve $T_2^{-1}$.
- **Area Property:** $A_1 + A_2 > 1$ is **necessary and sufficient** (for binary antipodal, equal-rate components).
- **ARQ Ranking:** SR-ARQ has best throughput, but requires the largest buffer; SW-ARQ has the worst for high $a$ (long propagation).
- **HARQ Type II vs III:** Type III increments are *self-decodable*; Type II is not (initial packet cannot be decoded alone).
- **Convergence vs Distance:** EXIT analysis predicts **threshold** (where waterfall starts); $d_{free}$ predicts **error floor** (where waterfall ends).
- **Tail-biting:** Closing the trellis on itself (initial state = final state) removes rate loss from termination.

---

## 4. Examiner's Warning Guide (Valuation Insights)

| Pitfall | Why You Lose Marks | Correct Practice |
|---|---|---|
| Confusing extrinsic $\Lambda_e$ with a posteriori $\Lambda(u_k)$ | $\Lambda_e$ is fed to the next decoder; $\Lambda(u_k)$ is the *full* output (for hard decision) | Show all three terms in the LLR expansion explicitly |
| Writing extrinsic LLR as the systematic term | Examiner will deduct for ignoring the "no double-counting" rule | State explicitly: $\Lambda_e^{(1)}$ depends only on $\mathbf{y}^{1p}$ (parity from encoder 1) |
| Forgetting interleaver in the diagram | Turbo without $\pi$ = *two encoders of same input*; no benefit | Always draw: $\mathbf{u}\to[RSC_1]\to \mathbf{p}^{(1)}$ and $\pi(\mathbf{u})\to[RSC_2]\to \mathbf{p}^{(2)}$ |
| Calling $A(W,Z)$ a codeword weight enumerator | That's for block codes; turbo codes need **conditional** IOWEF | Write $A(W,Z)$ with input-weight $W$ and output-weight $Z$ separately |
| Using $d_{free}$ alone for turbo code analysis | For PCCC at moderate SNR, $d_{free}$ is irrelevant — $d_{eff,2}$ dominates | Mention both $d_{free}$ and $d_{eff,2}$; explain that $w=2$ input events dominate |
| Quoting union bound as $P_b \le Q(\sqrt{2d_{free}R E_b/N_0})$ | This is for *block* / convolutional codes; for turbo, the **multiplicity** $A_{w,z}$ matters | Include the sum $\sum_w \frac{w}{N} A_{w,2w} Q(\ldots)$ |
| Mixing ARQ schemes' throughput formulas | Easy to confuse: SW and GBN both have $(1+2aP)$ in denominator? No — only GBN does | Memorize all three separately: $\eta_{SW}=\frac{1-P}{1+2a}$, $\eta_{GBN}=\frac{1-P}{1+2aP}$, $\eta_{SR}=1-P$ |
| Omitting the propagation delay factor $a=T_p/T_f$ in ARQ derivations | Marking scheme always tests understanding of "long-pipe" effect | Define $a$ explicitly in the solution |
| Drawing EXIT chart with axes unlabeled | The axes are *mutual information*, not LLR | Label: x-axis $I_A$ (a priori MI), y-axis $I_E$ (extrinsic MI), both $\in [0,1]$ |
| Saying EXIT curve goes *above* the diagonal | It doesn't — $I_E \le I_A$ for any practical SISO | The curve lies *below* $I_E=I_A$ and approaches 1 only at $I_A=1$ |
| Conflating turbo and LDPC roles in 5G | 5G NR uses **LDPC** (data) and **Polar** (control) — turbo is 3G/4G | State transition: 3G turbo $\to$ 4G turbo $\to$ 5G LDPC (data) + Polar (control) |
| Writing "RS codes are linear block codes" without specifying *symbol*-oriented RS | RS operates over $GF(2^m)$ with $m$-bit symbols, not bits | Always say "RS is a non-binary BCH code over $GF(2^m)$" |
| In HARQ Type II, claiming retransmission is identical | Type II = *new* redundancy each time (incremental) | Type II sends **different** parity bits; Type I (Chase) sends **same** bits |
| Forgetting to mention *randomness* of interleaver in turbo | Deterministic interleavers degrade distance spectrum | Use a *pseudo-random* interleaver, or S-random interleaver for $S<\sqrt{N/2}$ |
| Skipping the iteration count $I$ in the answer | After ~5–10 iterations, performance saturates | Always state "for typical $I=8$ iterations" |

---

## 5. Quick-Revision Diagram (Mermaid)

```mermaid
mindmap
  root((MODULE 4<br/>Turbo Codes &amp; ARQ))
    Turbo Decoding
      "Two SISO decoders in parallel"
      "BCJR / MAP algorithm"
      "Log-MAP and Max-Log-MAP"
      "LLR = a-priori + channel + extrinsic"
      "Extrinsic exchanged via interleaver"
      "Iterate 5-10 times"
      "Soft-input Soft-output (SISO)"
    Turbo Encoder
      "PCCC: two RSC + interleaver"
      "RSC = feedback + systematic"
      "SCCC: outer-inner + interleaver"
      "Puncturing for rate 1/2"
      "Tail-biting termination"
    Distance Properties
      "d_free = min codeword weight"
      "d_eff_2 dominates PCCC at high SNR"
      "IOWEF A(W,Z)"
      "Interleaver breaks low-weight paths"
      "Error floor at high SNR"
      "Waterfall at low SNR"
    Convergence
      "EXIT chart: I_E vs I_A"
      "Tunnel condition for success"
      "Benedetto: A1 + A2 > 1"
      "Threshold SNR E_b/N_0*"
      "Staircase trajectory"
      "Mutual information 0 to 1 bits"
    ARQ Schemes
      "Stop-and-Wait"
      "Go-Back-N"
      "Selective Repeat"
      "Throughput eta vs packet error P"
      "Parameter a = T_p / T_f"
    HARQ
      "Type I: Chase combining"
      "Type II: Incremental redundancy"
      "Type III: Self-decodable"
      "Used in 4G LTE and 5G NR"
    Applications of Linear Codes
      "Convolutional: deep space, GSM"
      "Turbo: 3G UMTS, 4G LTE"
      "LDPC: 5G NR data, DVB-S2"
      "Polar: 5G NR control"
      "Reed-Solomon: CDs, DVDs, QR"
      "BCH: Flash memory, satellite"
```

---

> **Last-minute recap (read aloud once):** Turbo = *parallel concat of two RSC + pseudo-random interleaver*; decoded by *iterating two SISO (BCJR) decoders exchanging extrinsic LLRs*. Performance: excellent waterfall (EXIT-guided threshold) but error floor (governed by $d_{eff,2}$). ARQ = *retransmit on NAK*; SR beats GBN beats SW in throughput, costs buffer. HARQ = *best of both worlds* — used everywhere in mobile broadband. **Remember the LLR triple decomposition — it's worth 5 marks by itself.**
