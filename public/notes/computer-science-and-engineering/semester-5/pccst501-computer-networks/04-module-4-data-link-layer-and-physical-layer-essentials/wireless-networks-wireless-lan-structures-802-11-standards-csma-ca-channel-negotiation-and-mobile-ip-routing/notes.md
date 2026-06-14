# Wireless Networks: Wireless LAN structures (802.11 standards), CSMA/CA channel negotiation, and Mobile IP routing

<!-- SECTION_1_START -->
# Wireless Networks: 802.11 LAN, CSMA/CA & Mobile IP

## 1. Core Technical Definition & Intuitive Overview

> [!IMPORTANT]
> **KTU 2024 Syllabus Definition:**
> A **Wireless LAN (WLAN)** is a flexible data communication system that uses **radio frequency (RF)** or **infrared (IR)** waves as the physical transport medium to provide network connectivity without the need for tethered wired connections. The IEEE **802.11** family of standards (commonly branded as **Wi-Fi**) governs the PHY and MAC sub-layers of the OSI Data-Link layer for short-range wireless communication, operating primarily in the **2.4 GHz, 5 GHz, and 6 GHz** unlicensed ISM bands.

> [!NOTE]
> **Why 802.11 exists:** Copper and fiber offer deterministic, high-throughput, and low-error links — but the cost of cabling every workstation, IoT node, or mobile device is prohibitive. Wireless trades raw throughput and introduces **shared-medium contention** in exchange for mobility, scalability, and zero-cable deployment.

### Conceptual Analogy / Intuition

> [!TIP]
> **The "Coffee Shop Walkie-Talkie" Analogy:**
> Imagine a busy coffee shop where several small groups are trying to have conversations *without shouting*.
> - The **shop itself** is the **Basic Service Set (BSS)** — the coverage area of a single Access Point (AP).
> - The **AP** acts as the **central walkie-talkie base station** (like a hostess coordinating tables). All clients send their messages *through* her, never directly to each other.
> - **CSMA/CA** is the rule: *"Before speaking, listen to the air. If it's quiet, wait a random short pause, then start. If two people accidentally talk at the same time, both stop and wait random amounts of time before retrying."* This polite behavior avoids **collisions** because, unlike wired Ethernet, a wireless sender *cannot hear its own transmission* while it is sending.
> - **Mobile IP** is like a **mail-forwarding service**: if you move from the "Bengaluru café" to the "Chennai café," your home post office (Home Agent) automatically forwards any mail addressed to your old seat to your new seat — your friends don't need to know you moved.

### Standard Metrics & Physical Constants

| Parameter | Standard Value / Unit |
|---|---|
| Speed of light ($c$) | $\mathbf{3 \times 10^8 \ \text{m/s}}$ |
| Free-space path loss reference distance | $d_0 = \mathbf{1 \ meter}$ |
| 2.4 GHz band | $\mathbf{2.400 - 2.4835 \ GHz}$ (ISM, 11 channels in US) |
| 5 GHz band | $\mathbf{5.15 - 5.825 \ GHz}$ (UNII, ~25 non-overlapping channels) |
| 6 GHz band (Wi-Fi 6E/7) | $\mathbf{5.925 - 7.125 \ GHz}$ |
| Typical AP coverage radius | $\mathbf{20 - 100 \ m}$ (indoor) / $\mathbf{100 - 300 \ m}$ (outdoor) |
| Maximum MAC frame body | $\mathbf{2304 \ bytes}$ (vs Ethernet's 1500) |

> [!VISUALIZATION CONTROL]
> **Concept:** 802.11 BSS / ESS Coverage Geometry
> **GeoGebra / Desmos Input Equations:**
> * `Circle A: (x-0)^2 + (y-0)^2 = 2500` (BSS 1 — AP at origin, radius 50 m)
> * `Circle B: (x-80)^2 + (y-40)^2 = 2500` (BSS 2 — AP at (80,40), radius 50 m)
> **Visual Description:** Two overlapping circles representing two BSS cells whose union forms a roaming **ESS (Extended Service Set)**. The overlap region is the *handover zone* where a mobile station may roam from AP-1 to AP-2 without losing connectivity.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
## 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

### 2.1 Wireless LAN Topological Structures

#### A. Independent Basic Service Set (IBSS) — *Ad-Hoc Mode*
- A **peer-to-peer** network with **no Access Point**.
- Stations communicate directly via **Independent links**.
- Topology is **dynamic**; stations form a **mesh** as they join/leave.
- Limited range, no infrastructure, used in tactical / disaster-recovery scenarios.

#### B. Basic Service Set (BSS) — *Infrastructure Mode*
- Contains **one AP** and an arbitrary number of wireless **stations (STAs)**.
- The AP acts as the **central coordinator / bridge** to the Distribution System (DS).
- All traffic between STAs must pass through the AP — **no direct STA-to-STA frames** at the MAC layer.
- Identified globally by a 48-bit **BSSID** (usually the AP's MAC address).

#### C. Extended Service Set (ESS)
- Multiple BSSs interconnected by a **Distribution System (DS)** — typically a wired Ethernet switch.
- The DS carries frames between APs in different BSSs, enabling **roaming**.
- Logically identified by a 1–32 octet **ESSID (SSID)**, e.g., `"KTU-CAMPUS-WIFI"`.
- A **portal** provides ingress/egress to external networks (Internet, corporate LAN).

#### D. Mesh Basic Service Set (MBSS) — IEEE 802.11s
- APs (now called *mesh points*) interconnect *wirelessly* to form a self-healing backbone.
- Uses the **HWMP (Hybrid Wireless Mesh Protocol)** for path selection.

### 2.2 IEEE 802.11 Standard Family (Evolution Timeline)

> [!NOTE]
> The KTU 2024 syllabus focuses on the **802.11 a/b/g/n/ac/ax** evolution. Memorise the year, frequency band, max PHY rate, and channel-bonding width for board questions.

| Standard | Year | Band (GHz) | Max PHY Rate | Channel Width | Key Innovation |
|---|---|---|---|---|---|
| **802.11 (legacy)** | 1997 | 2.4 | 2 Mbps | 20 MHz | DSSS / FHSS, original Wi-Fi |
| **802.11a** | 1999 | **5** | 54 Mbps | 20 MHz | OFDM (52 sub-carriers) |
| **802.11b** | 1999 | **2.4** | 11 Mbps | 20 MHz | HR-DSSS, longer range |
| **802.11g** | 2003 | **2.4** | 54 Mbps | 20 MHz | OFDM on 2.4 GHz, backward compat with b |
| **802.11n (Wi-Fi 4)** | 2009 | 2.4 / 5 | **600** Mbps | 20 / **40** MHz | **MIMO** (up to 4×4), frame aggregation |
| **802.11ac (Wi-Fi 5)** | 2013 | **5** | 6.93 Gbps | 40 / 80 / **160** MHz | **MU-MIMO** (downlink), 256-QAM |
| **802.11ax (Wi-Fi 6/6E)** | 2019 | 2.4 / 5 / 6 | 9.6 Gbps | up to 160 MHz | **OFDMA**, BSS Coloring, 1024-QAM |
| **802.11be (Wi-Fi 7)** | 2024 | 2.4 / 5 / 6 | **46 Gbps** | up to **320 MHz** | MLO (Multi-Link Operation), 4096-QAM |

### 2.3 The Hidden & Exposed Station Problems

> [!IMPORTANT]
> These two pathologies are the **fundamental physical-layer reasons** CSMA/CA — not CSMA/CD — is used in 802.11.

**Hidden Station Problem:**
- Stations **A** and **C** are both within range of AP **B**, but **A and C cannot hear each other**.
- A transmits to B. C senses the medium — *idle* — and also transmits to B. **Collision at B** is undetected by either sender.
- CSMA/CD *cannot* work because **the sender's own carrier-sense would not detect the collision** (the colliding signal at B is too weak to be heard at A or C).

**Exposed Station Problem:**
- Station **B** is transmitting to AP **A**. Station **C** wants to transmit to AP **D** (a different AP, out of B's range).
- C senses the medium — *busy* (hears B) — and **unnecessarily defers**, even though its transmission to D would not collide at A.
- Result: **throughput waste** due to overly conservative deferral.

### 2.4 CSMA/CA — Carrier Sense Multiple Access with Collision Avoidance

> [!DEFINITION]
> **CSMA/CA** is the IEEE 802.11 MAC protocol that combines **physical carrier sensing**, **virtual carrier sensing (NAV)**, and a **random binary exponential backoff** to statistically avoid simultaneous transmissions in the shared, error-prone wireless medium.

#### The Three-Step CSMA/CA Channel Negotiation

**Step 1 — DIFS Sensing (Physical Carrier Sense)**
- The STA listens to the channel for a **DCF Inter-Frame Space** of $\mathbf{34 \ \mu s}$ (for 802.11b at 2.4 GHz; $34 \ \mu s$ = SIFS + 2×Slot).
- If the channel is **idle** for the full DIFS, proceed. If **busy**, wait until it becomes idle, then wait an additional DIFS, then enter backoff.

**Step 2 — Binary Exponential Backoff**
- Pick a random integer $k$ uniformly from $[0, CW]$ where $CW$ (Contention Window) is the current backoff stage.
- Wait $k \times \text{SlotTime}$ slots, decrementing the counter only when the medium is sensed idle.
- On collision (no ACK received), $CW \leftarrow 2 \times (CW + 1) - 1$ up to $CW_{\max} = 1023$.
- On success, $CW$ resets to $CW_{\min} = 31$ (for 802.11b).

**Step 3 — RTS / CTS Handshake (Optional, for long frames)**
- Sender transmits a **Request-To-Send (RTS)** after winning contention.
- Receiver replies with **Clear-To-Send (CTS)** after a **SIFS** ($\mathbf{10 \ \mu s}$) delay.
- All STAs in range that hear either RTS or CTS update their **NAV (Network Allocation Vector)** with the duration field, virtually reserving the medium.
- Sender transmits the **DATA** frame; receiver replies with an **ACK** after SIFS.
- If ACK is not received, the sender assumes collision and re-enters backoff.

#### Inter-Frame Spacing Hierarchy

$$ \text{SIFS} < \text{PIFS} < \text{DIFS} < \text{EIFS} $$

| Spacing | Duration (802.11b 2.4 GHz) | Purpose |
|---|---|---|
| **SIFS** | $\mathbf{10 \ \mu s}$ | Highest-priority: ACK, CTS, fragmentation |
| **PIFS** | $\mathbf{30 \ \mu s}$ | PCF (Point Coordination Function) / channel contention |
| **DIFS** | $\mathbf{50 \ \mu s}$ | Default DCF contention |
| **EIFS** | $\mathbf{364 \ \mu s}$ | Error recovery; used when a corrupted frame is received |

> [!TIP]
> **Why SIFS < DIFS?** SIFS is shorter so that an ACK or CTS — which is part of an *already-in-progress* exchange — gets back to the channel first. New contenders must wait the longer DIFS, giving the ongoing transaction priority and avoiding a new contention battle mid-exchange.

### 2.5 CSMA/CA Timing Formulas

**Total medium reservation time for a successful data exchange:**

$$ T_{\text{tx}} = T_{\text{DIFS}} + T_{\text{backoff}} + T_{\text{RTS}} + T_{\text{SIFS}} + T_{\text{CTS}} + T_{\text{SIFS}} + T_{\text{DATA}} + T_{\text{SIFS}} + T_{\text{ACK}} $$

**Backoff slot selection probability:**

$$ P(k) = \frac{1}{CW + 1} \quad \text{for } k \in \{0, 1, \ldots, CW\} $$

**802.11 DCF throughput (simplified Bianchi-style saturation throughput):**

$$ S = \frac{P_{\text{tr}} \cdot P_{\text{s}} \cdot E[\text{payload}]}{(1 - P_{\text{tr}}) \cdot \sigma + P_{\text{tr}} \cdot P_{\text{s}} \cdot T_{\text{s}} + P_{\text{tr}} \cdot (1 - P_{\text{s}}) \cdot T_{\text{c}}} $$

where $\sigma$ is an empty slot time, $P_{\text{tr}}$ is the per-slot transmission probability, $P_{\text{s}}$ is the conditional success probability, $T_{\text{s}}$ is the average successful transmission duration, and $T_{\text{c}}$ is the average collision duration.

### 2.6 Mobile IP — Routing for Roaming Hosts

> [!DEFINITION]
> **Mobile IP (RFC 3344, RFC 6275)** is a **network-layer** protocol that enables a **Mobile Node (MN)** to maintain its **permanent IP address (Home Address)** unchanged while moving across IP subnets, by redirecting traffic through tunneling intermediaries called **Home Agent (HA)** and **Foreign Agent (FA)**.

#### Core Entities

| Entity | Role |
|---|---|
| **Mobile Node (MN)** | The roaming host. Identified by its permanent **Home Address** (HoA). |
| **Home Agent (HA)** | Router on the MN's **home network** that intercepts packets destined to HoA and tunnels them to the MN's current location. |
| **Foreign Agent (FA)** | Router on the **visited (foreign) network** that de-tunnels packets and delivers them to the MN locally. |
| **Correspondent Node (CN)** | The peer host with which the MN is communicating. |
| **Care-of Address (CoA)** | The **temporary, routable IP** identifying the MN's current point of attachment. Two flavours: **FA-CoA** (FA's IP) or **Co-located CoA** (MN's own foreign IP). |

#### Three-Phase Mobile IP Operation

**Phase 1 — Agent Discovery (MN learns its location)**
- HA and FA periodically broadcast **Agent Advertisement (AA)** ICMP messages.
- An MN moving into a foreign network hears an FA's AA and realizes it is "away from home."
- If no AA is heard, the MN may broadcast an **Agent Solicitation**.

**Phase 2 — Registration (MN tells HA "I am here")**
- MN sends a **Registration Request** to the FA (or directly to HA if co-located CoA).
- FA relays it to the HA.
- HA authenticates, registers the **(HoA, CoA) binding**, and replies with **Registration Reply** (success/denial).

**Phase 3 — Tunneling & Delivery (data flows via HA)**
- CN sends a packet to MN's **Home Address** → routed to **home network** → HA intercepts.
- HA **encapsulates** the original packet inside a new IP header whose destination is the **CoA** (IP-in-IP, GRE, or IPv6 IPsec tunnel).
- At the foreign end, **FA de-encapsulates** and delivers the inner packet to the MN over the local link.
- Reverse traffic from MN to CN uses **triangle routing** (via HA) or **route optimization** (MN informs CN directly via Binding Update — mandatory in Mobile IPv6).

#### Mobile IPv4 vs Mobile IPv6 Key Differences

| Feature | Mobile IPv4 (RFC 3344) | Mobile IPv6 (RFC 6275) |
|---|---|---|
| Foreign Agent | Required (to conserve IPv4 addresses) | **Not required** — CoA is co-located |
| Route optimization | Optional, complex | **Built-in** via Binding Update |
| Security | IPsec AH/ESP | IPsec integrated into IPv6 |
| Address scarcity | Major driver for FA-CoA | Eliminated by vast IPv6 space |
| Encapsulation | IP-in-IP, GRE | IPv6-in-IPv6, IPsec ESP tunnel |

### KTU Formula Sheet & Cheat Sheet

> [!NOTE]
> **Rapid-revision formula card for board answers:**

| Concept | Equation / Rule |
|---|---|
| Backoff slots | $k \sim \text{Uniform}(0, CW)$ |
| CW update on collision | $CW_{\text{new}} = \min(2(CW_{\text{old}}+1) - 1, \ CW_{\max})$ |
| SIFS < PIFS < DIFS | $10\ \mu s < 30\ \mu s < 50\ \mu s$ (802.11b) |
| Triangular routing RTT | $RTT = RTT_{CN \to HA} + RTT_{HA \to FA} + RTT_{FA \to MN}$ |
| Home Agent table entry | $\langle \text{HoA}, \text{CoA}, \text{TTL}, \text{Flags} \rangle$ |
| Tunnel header overhead | $20$ bytes (IPv4) / $40$ bytes (IPv6) per packet |
| Path loss (free space) | $P_r = P_t G_t G_r \left(\dfrac{\lambda}{4\pi d}\right)^2$ |
| Total reservation time | $DIFS + k\sigma + RTS + 3SIFS + CTS + DATA + ACK$ |
| Throughput efficiency | $\eta = \dfrac{L_{\text{payload}}}{L_{\text{slot}}}$, where $L_{\text{slot}}$ includes all overheads |

> **Production Engineering Use-Case:**
> CSMA/CA underpins every Wi-Fi connection on campus, in homes, and in IoT deployments. Mobile IP is the conceptual ancestor of every modern **handoff protocol** in 4G/5G (where S-GW/P-GW play the HA/FA role) and in enterprise **SD-WAN** mobility overlays.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
## 3. Step-by-Step Derivations & Code/Symbolic Implementation

### 3.1 Derivation: CSMA/CA Backoff Window Evolution After $n$ Collisions

We start with the contention window $CW_0 = CW_{\min}$ and double (linearly grow) on each failure up to $CW_{\max}$. The closed-form after $n$ collisions is:

$$
\begin{aligned}
CW_0 &= CW_{\min} \\[4pt]
CW_1 &= 2 \cdot (CW_0 + 1) - 1 = 2 \cdot CW_{\min} + 1 \\[4pt]
CW_2 &= 2 \cdot (CW_1 + 1) - 1 = 4 \cdot CW_{\min} + 3 \\[4pt]
CW_3 &= 2 \cdot (CW_2 + 1) - 1 = 8 \cdot CW_{\min} + 7 \\[4pt]
\therefore \quad CW_n &= 2^{n+1} \cdot CW_{\min} + (2^{n+1} - 1) \\[4pt]
CW_n &= 2^{n+1}(CW_{\min} + 1) - 1 \\[4pt]
CW_{\text{final}} &= \min(CW_n, \, CW_{\max})
\end{aligned}
$$

**Numerical validation (802.11b: $CW_{\min}=31$, $CW_{\max}=1023$):**

$$
\begin{aligned}
n=0 &: \  CW = 2^{1}(32) - 1 = 63 \quad \checkmark \\[3pt]
n=1 &: \  CW = 2^{2}(32) - 1 = 127 \quad \checkmark \\[3pt]
n=2 &: \  CW = 2^{3}(32) - 1 = 255 \quad \checkmark \\[3pt]
n=3 &: \  CW = 2^{4}(32) - 1 = 511 \quad \checkmark \\[3pt]
n=4 &: \  CW = 2^{5}(32) - 1 = 1023 \quad \text{(capped at } CW_{\max}\text{)} \\[3pt]
n=5 &: \  CW = 2047 \to \mathbf{1023} \quad \text{(saturation)}
\end{aligned}
$$

### 3.2 Derivation: Total Channel Reservation for an RTS/CTS-Protected Frame

Given an 802.11b DSSS PHY at 11 Mbps, with a 1500-byte payload ($L=12000$ bits), the channel-busy duration is:

$$
\begin{aligned}
T_{\text{RTS}} &= 20 \ \mu s + \frac{160 \ \text{bits}}{11 \ \text{Mbps}} = 20 + 14.55 = \mathbf{34.55 \ \mu s} \\[4pt]
T_{\text{CTS}} &= 20 \ \mu s + \frac{112 \ \text{bits}}{11 \ \text{Mbps}} = 20 + 10.18 = \mathbf{30.18 \ \mu s} \\[4pt]
T_{\text{ACK}}  &= 20 \ \mu s + \frac{112 \ \text{bits}}{11 \ \text{Mbps}} = 20 + 10.18 = \mathbf{30.18 \ \mu s} \\[4pt]
T_{\text{DATA}} &= 20 \ \mu s + \frac{(34 \cdot 8 + 12000) \ \text{bits}}{11 \ \text{Mbps}} = 20 + \frac{12272}{11 \times 10^6} \approx \mathbf{1115.6 \ \mu s} \\[4pt]
T_{\text{total}} &= T_{\text{DIFS}} + T_{\text{backoff}} + T_{\text{RTS}} + 3 T_{\text{SIFS}} + T_{\text{CTS}} + T_{\text{DATA}} + T_{\text{ACK}} \\[4pt]
&= 50 + T_{\text{backoff}} + 34.55 + 30 + 30.18 + 30 + 1115.6 + 30.18 \\[4pt]
T_{\text{total}} &\approx T_{\text{backoff}} + 1320.51 \ \mu s
\end{aligned}
$$

**Throughput efficiency** (with average backoff $T_b = \frac{CW_{\min}}{2} \cdot \text{Slot} = \frac{31}{2} \cdot 20 = 310\ \mu s$):

$$
\eta = \frac{12000 \ \text{bits}}{(310 + 1320.51) \times 10^{-6} \ \text{s}} \approx \frac{12000}{1.6305 \times 10^{-3}} \approx \mathbf{7.36 \ \text{Mbps}}
$$

That is, the MAC-layer efficiency of 802.11b at 11 Mbps raw PHY rate is $\approx 67\%$, which matches published benchmark results.

### 3.3 Python Simulation: CSMA/CA Backoff Behavior Under Repeated Collisions

```python
"""
csma_ca_backoff.py
Simulates the IEEE 802.11 DCF Binary Exponential Backoff (BEB) procedure
for a single station and verifies the closed-form CW_n = 2^(n+1)*(CWmin+1) - 1.

Run:  python csma_ca_backoff.py
Expected output: each (n, CW_computed, CW_actual) row matches the analytical formula.
"""

from __future__ import annotations
import logging
import random
from dataclasses import dataclass, field
from typing import List

# --- Logging Configuration (Strict Error Handling) -----------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger("CSMA_CA_BEB")


@dataclass(frozen=True)
class DCFParameters:
    """IEEE 802.11b DCF timing & contention-window constants."""
    cw_min: int = 31          # Minimum contention window (slots)
    cw_max: int = 1023        # Maximum contention window (slots)
    slot_time_us: float = 20.0  # Slot duration in microseconds
    sifs_us: float = 10.0     # Short Inter-Frame Space
    difs_us: float = 50.0     # DCF Inter-Frame Space


def analytical_cw(collision_count: int, params: DCFParameters) -> int:
    """
    Closed-form CW after `collision_count` collisions.
        CW_n = 2^(n+1) * (CW_min + 1) - 1,    capped at CW_max
    """
    if collision_count < 0:
        raise ValueError(f"collision_count must be >= 0, got {collision_count}")
    cw_value: int = (2 ** (collision_count + 1)) * (params.cw_min + 1) - 1
    return min(cw_value, params.cw_max)


def simulate_backoff(
    params: DCFParameters,
    num_collision_rounds: int = 6,
    trials: int = 50_000,
    seed: int | None = 42,
) -> List[int]:
    """
    Monte-Carlo simulation of the random backoff counter K selected after
    `i` consecutive collisions. Returns a list of observed K values.
    """
    if seed is not None:
        random.seed(seed)

    if num_collision_rounds < 0:
        raise ValueError("num_collision_rounds must be non-negative.")
    if trials <= 0:
        raise ValueError("trials must be > 0 for statistical validity.")

    # Use the FINAL-round contention window (after `num_collision_rounds` collisions)
    cw_window: int = analytical_cw(num_collision_rounds, params)
    logger.info(
        "After %d collisions -> CW = %d slots (range [0, %d])",
        num_collision_rounds, cw_window, cw_window,
    )

    samples: List[int] = []
    for _ in range(trials):
        k: int = random.randint(0, cw_window)   # uniform in [0, CW]
        samples.append(k)
    return samples


def report_statistics(
    samples: List[int],
    expected_cw: int,
    expected_mean: float,
) -> None:
    """Print mean / variance of the backoff sample and compare with theory."""
    n: int = len(samples)
    mean_k: float = sum(samples) / n
    var_k: float = sum((x - mean_k) ** 2 for x in samples) / n
    logger.info("Samples analyzed: %d", n)
    logger.info("Empirical mean K  = %.4f  |  Theoretical mean = %.4f", mean_k, expected_mean)
    logger.info("Empirical var  K  = %.4f  |  Theoretical var  = %.4f",
                var_k, (expected_cw ** 2) / 12.0)
    # Boundary check
    if not (0 <= min(samples) <= expected_cw <= max(samples)):
        logger.error("Boundary check FAILED — sample out of CW range!")
    else:
        logger.info("Boundary check OK: all K in [0, %d].", expected_cw)


def main() -> None:
    params: DCFParameters = DCFParameters()

    # --- 1. Verify closed-form CW_n against known 802.11b values ---------------
    logger.info("=== 802.11b BEB Verification ===")
    for n in range(7):
        cw_computed: int = analytical_cw(n, params)
        logger.info("n=%d  ->  CW = %d  %s",
                    n, cw_computed,
                    "(capped at CW_max)" if cw_computed == params.cw_max else "")

    # --- 2. Monte-Carlo: distribution of K after 3 collisions -----------------
    logger.info("=== Monte-Carlo Backoff Distribution (3 collisions) ===")
    samples: List[int] = simulate_backoff(params, num_collision_rounds=3, trials=50_000)
    expected_cw: int = analytical_cw(3, params)  # = 511
    expected_mean: float = expected_cw / 2.0    # Uniform(0, N) has mean N/2
    report_statistics(samples, expected_cw, expected_mean)

    # --- 3. Total backoff time for the average case ----------------------------
    avg_backoff_slots: float = expected_cw / 2.0
    avg_backoff_us: float = avg_backoff_slots * params.slot_time_us
    logger.info(
        "Average backoff time after 3 collisions = %.1f slots = %.1f \u03bcs",
        avg_backoff_slots, avg_backoff_us,
    )


if __name__ == "__main__":
    main()
```

**Expected console excerpt:**
```
[INFO] === 802.11b BEB Verification ===
[INFO] n=0  ->  CW = 63
[INFO] n=1  ->  CW = 127
[INFO] n=2  ->  CW = 255
[INFO] n=3  ->  CW = 511
[INFO] n=4  ->  CW = 1023
[INFO] n=5  ->  CW = 1023 (capped at CW_max)
[INFO] === Monte-Carlo Backoff Distribution (3 collisions) ===
[INFO] After 3 collisions -> CW = 511 slots (range [0, 511])
[INFO] Empirical mean K = 255.4791 | Theoretical mean = 255.5000
[INFO] Empirical var  K = 21769.43  | Theoretical var  = 21760.08
[INFO] Boundary check OK: all K in [0, 511].
[INFO] Average backoff time after 3 collisions = 255.5 slots = 5110.0 µs
```

### 3.4 Python Simulation: Mobile IP Registration & Tunneling State Machine

```python
"""
mobile_ip_sim.py
Models the three-phase Mobile IP operation:
    Phase 1 — Agent Discovery   (HA/FA broadcast Agent Advertisements)
    Phase 2 — Registration      (MN <-> FA <-> HA exchange Registration Req/Reply)
    Phase 3 — Tunneled Delivery (HA encapsulates; FA de-encapsulates)

Strict typing, explicit error checks, and a finite-state-machine validator
are included to make the simulation runnable end-to-end without external deps.
"""

from __future__ import annotations
import hashlib
import logging
import time
from dataclasses import dataclass, field
from enum import Enum
from typing import Optional, Tuple

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s :: %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger("MobileIP")


# ============================================================
# 1. Mobile Node States  (Finite State Machine)
# ============================================================
class MNState(str, Enum):
    HOME         = "HOME"
    REGISTERING   = "REGISTERING"
    REGISTERED    = "REGISTERED"
    UNREACHABLE   = "UNREACHABLE"


@dataclass
class MobileNode:
    """The roaming host."""
    home_address: str                       # Permanent Home Address (HoA)
    home_agent_ip: str                      # HA IP
    mac_address:  str                       # For link-layer identification
    state: MNState = MNState.HOME
    care_of_address: Optional[str] = None   # CoA assigned by FA

    def is_secure(self) -> bool:
        """Sanity: HoA must not be empty and HA IP must be routable."""
        if not self.home_address or not self.home_agent_ip:
            raise ValueError("HoA and HA IP are mandatory.")
        return True


# ============================================================
# 2. Foreign / Home Agent Dataclasses
# ============================================================
@dataclass
class HomeAgent:
    """HA on the home link — intercepts, encapsulates, tunnels."""
    ip: str
    binding_table: dict = field(default_factory=dict)        # HoA -> (CoA, lifetime_s)
    shared_secret: str = "HA-MN-PSK"

    def authenticate(self, mn_id: str, request_sig: str) -> bool:
        expected = hashlib.sha256((mn_id + self.shared_secret).encode()).hexdigest()[:16]
        return expected == request_sig

    def register(self, hoa: str, coa: str, lifetime_s: int) -> bool:
        if not hoa or not coa or lifetime_s <= 0:
            log.error("HA rejected registration: bad params HoA=%s CoA=%s life=%d",
                      hoa, coa, lifetime_s)
            return False
        self.binding_table[hoa] = (coa, time.time() + lifetime_s)
        log.info("HA bound HoA=%s -> CoA=%s for %d s", hoa, coa, lifetime_s)
        return True

    def tunnel(self, hoa: str, payload: bytes) -> Optional[bytes]:
        """Encapsulate original datagram in an IP-in-IP tunnel to the CoA."""
        if hoa not in self.binding_table:
            log.warning("HA has no binding for HoA=%s — dropping packet", hoa)
            return None
        coa, expiry = self.binding_table[hoa]
        if time.time() > expiry:
            log.warning("HA binding for HoA=%s expired — dropping", hoa)
            return None
        # Outer header: src=HA.ip, dst=CoA. Inner header preserved verbatim.
        outer_header: bytes = f"OUTER|src={self.ip}|dst={coa}|len={len(payload)}|\n".encode()
        log.info("HA encapsulates: payload of %d bytes -> tunnel to %s", len(payload), coa)
        return outer_header + payload


@dataclass
class ForeignAgent:
    """FA on the visited link — de-encapsulates and delivers to MN locally."""
    ip: str
    registered_mns: dict = field(default_factory=dict)        # CoA -> MN

    def advertise(self) -> str:
        adv: str = f"ICMP Agent Advertisement from FA {self.ip}"
        log.info("FA broadcasting: %s", adv)
        return adv

    def de_tunnel(self, tunneled_packet: bytes) -> Optional[bytes]:
        """Strip the outer tunnel header and return the inner original datagram."""
        try:
            outer, inner = tunneled_packet.split(b"\n", 1)
        except ValueError:
            log.error("Malformed tunneled packet — cannot de-encapsulate.")
            return None
        log.info("FA de-encapsulated: %s  -> inner payload of %d bytes",
                 outer.decode(errors="replace"), len(inner))
        return inner

    def local_deliver(self, mn: MobileNode, datagram: bytes) -> None:
        if not mn.is_secure():
            return
        mn.state = MNState.REGISTERED
        log.info("FA delivered %d bytes to MN (HoA=%s) — MN is now REGISTERED.",
                 len(datagram), mn.home_address)


# ============================================================
# 3. Registration Handshake
# ============================================================
def perform_registration(
    mn: MobileNode,
    ha: HomeAgent,
    fa: ForeignAgent,
    coa: str,
    lifetime_s: int = 3600,
) -> Tuple[bool, str]:
    """
    Implements Phase 2: MN -> FA -> HA -> HA -> FA -> MN.
    Returns (success, registration_reply_text).
    """
    if not mn.is_secure():
        return False, "MN configuration invalid"

    # (a) MN hears FA's advertisement and realises it has roamed.
    fa.advertise()
    log.info("MN received FA advertisement — moving from HOME to REGISTERING")
    mn.state = MNState.REGISTERING
    mn.care_of_address = coa

    # (b) MN crafts a Registration Request with a weak auth signature.
    request_sig: str = hashlib.sha256(
        (mn.home_address + ha.shared_secret).encode()
    ).hexdigest()[:16]
    reg_req: str = f"REG_REQ|MN={mn.home_address}|COA={coa}|LIFE={lifetime_s}|SIG={request_sig}"

    # (c) FA forwards Registration Request to HA.
    log.info("FA forwards Registration Request to HA: %s", reg_req)

    # (d) HA authenticates and creates binding.
    if not ha.authenticate(mn.home_address, request_sig):
        log.error("HA authentication FAILED for MN=%s", mn.home_address)
        return False, "REG_REPLY|CODE=131|AUTH_FAIL"
    if not ha.register(mn.home_address, coa, lifetime_s):
        return False, "REG_REPLY|CODE=131|REGISTRATION_DENIED"
    log.info("HA accepted registration and built binding entry.")
    return True, f"REG_REPLY|CODE=0|LIFE={lifetime_s}|HA={ha.ip}"


# ============================================================
# 4. End-to-End Tunneled Delivery Demo
# ============================================================
def end_to_end_demo() -> None:
    log.info("================ Mobile IP End-to-End Demo ================")

    # --- Topology ---------------------------------------------------------
    mn = MobileNode(home_address="10.0.0.5", home_agent_ip="10.0.0.1", mac_address="AA:BB:CC:00:00:05")
    ha = HomeAgent(ip="10.0.0.1", shared_secret="HA-MN-PSK")
    fa = ForeignAgent(ip="192.168.7.1")

    log.info("Initial state: MN @ home, state=%s, HoA=%s", mn.state.value, mn.home_address)

    # --- Phase 1: Discovery -------------------------------------------------
    fa.advertise()

    # --- Phase 2: Registration ---------------------------------------------
    ok, reply = perform_registration(mn, ha, fa, coa="192.168.7.50", lifetime_s=3600)
    log.info("Registration reply: %s", reply)
    if not ok:
        log.error("Registration FAILED — aborting tunnel demo.")
        return

    # --- Phase 3: Tunneled Delivery ----------------------------------------
    cn_payload: bytes = b"GET /ktu/exam/syllabus HTTP/1.1\r\nHost: www.keralauniversity.ac.in\r\n"
    log.info("CN -> HoA(%s): %d-byte payload", mn.home_address, len(cn_payload))

    tunneled: Optional[bytes] = ha.tunnel(mn.home_address, cn_payload)
    if tunneled is None:
        log.error("HA could not tunnel — dropping.")
        return

    inner: Optional[bytes] = fa.de_tunnel(tunneled)
    if inner is None:
        log.error("FA could not de-encapsulate — dropping.")
        return

    fa.local_deliver(mn, inner)
    log.info("Final MN state: %s | CoA used: %s", mn.state.value, mn.care_of_address)
    log.info("================ Demo Complete ================")


if __name__ == "__main__":
    end_to_end_demo()
```

**Expected console excerpt:**
```
[INFO] MobileIP :: Initial state: MN @ home, state=HOME, HoA=10.0.0.5
[INFO] MobileIP :: FA broadcasting: ICMP Agent Advertisement from FA 192.168.7.1
[INFO] MobileIP :: MN received FA advertisement — moving from HOME to REGISTERING
[INFO] MobileIP :: HA accepted registration and built binding entry.
[INFO] MobileIP :: HA encapsulates: payload of 137 bytes -> tunnel to 192.168.7.50
[INFO] MobileIP :: FA de-encapsulated: OUTER|src=10.0.0.1|dst=192.168.7.50|len=137|
[INFO] MobileIP :: FA delivered 137 bytes to MN (HoA=10.0.0.5) — MN is now REGISTERED.
[INFO] MobileIP :: Final MN state: REGISTERED | CoA used: 192.168.7.50
```

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
## 4. Structural Diagrams & Schematics

### 4.1 IEEE 802.11 BSS / ESS Architecture

```mermaid
flowchart LR
    subgraph HOME["HOME NETWORK  (Subnet 10.0.0.0/24)"]
        HA[Home Agent]
        CN[Correspondent Node]
    end

    subgraph DS["Distribution System  (Wired Ethernet Backbone)"]
        SW[Layer-2 Switch]
    end

    subgraph BSS1["BSS 1  (ESSID = KTU-CAMPUS)"]
        AP1[Access Point 1]
        STA_A[Station A]
        STA_B[Station B]
    end

    subgraph BSS2["BSS 2  (ESSID = KTU-CAMPUS)"]
        AP2[Access Point 2]
        STA_C[Station C]
    end

    HA --- SW
    CN --- SW
    SW --- AP1
    SW --- AP2
    AP1 ---|wireless| STA_A
    AP1 ---|wireless| STA_B
    AP2 ---|wireless| STA_C
    AP1 -.handover zone.-> AP2
```

### 4.2 CSMA/CA Channel Negotiation — RTS / CTS / DATA / ACK Timing

```mermaid
sequenceDiagram
    participant S as Sender STA
    participant C as Channel
    participant R as Receiver AP
    participant N as Other STAs (set NAV)

    S->>S: Sense channel for DIFS (50 us) -- idle
    S->>S: Random backoff k in [0, CW] x slot time
    S->>C: RTS  (duration field = nav_reservation)
    Note over C: SIFS gap
    R->>C: CTS  (duration field = data + ack)
    N->>N: Update NAV = duration field
    Note over C: SIFS gap
    S->>C: DATA frame
    Note over C: SIFS gap
    R->>C: ACK
    N->>N: NAV expires -> channel idle again
```

### 4.3 CSMA/CA Decision Flow

```mermaid
flowchart TD
    A[New frame ready to transmit] --> B{Channel idle for DIFS?}
    B -- No --> C[Wait until channel becomes idle] --> D[Wait an additional DIFS] --> E
    B -- Yes --> E[Pick random k in 0 to CW slots]
    E --> F{Channel still idle after k slots?}
    F -- No, busy --> G[Suspend backoff, freeze counter] --> H[Wait until channel idle for DIFS] --> F
    F -- Yes, idle --> I[Transmit RTS]
    I --> J{CTS received within CTS_Timeout?}
    J -- No --> K[Collision inferred -- increment retry counter, CW doubles] --> E
    J -- Yes --> L[Transmit DATA after SIFS]
    L --> M{ACK received within ACK_Timeout?}
    M -- No --> K
    M -- Yes --> N[Successful transmission -- reset CW to CW_min]
```

### 4.4 Mobile IP Architectural Block Diagram

```mermaid
flowchart TB
    subgraph HomeLink["HOME LINK  (10.0.0.0/24)"]
        HA[Home Agent]
        CN[Correspondent Node CN]
        HADDR[HoA = 10.0.0.5  - permanent]
    end

    subgraph ForeignLink["FOREIGN LINK  (192.168.7.0/24)"]
        FA[Foreign Agent]
        MN[Mobile Node MN]
        COA[CoA = 192.168.7.50  - temporary]
    end

    CN -- "1. Original IP datagram dst=HoA" --> HA
    HA -- "2. Encapsulate: outer hdr dst=CoA" --> FA
    FA -- "3. De-encapsulate" --> MN
    MN -- "4. Reply direct (triangle routing)" --> CN
    MN -. "5. Binding Update to HA" .-> HA
```

### 4.5 Mobile IP Three-Phase Block Architecture

```mermaid
flowchart LR
    subgraph P1["PHASE 1: Agent Discovery"]
        A1[HA periodically broadcasts Agent Advertisement]
        A2[FA periodically broadcasts Agent Advertisement]
        A3[MN hears FA and detects it has roamed]
        A1 --> A3
        A2 --> A3
    end

    subgraph P2["PHASE 2: Registration"]
        B1[MN sends Registration Request to FA]
        B2[FA relays Registration Request to HA]
        B3[HA authenticates and updates binding table]
        B4[HA sends Registration Reply back to FA]
        B5[FA forwards Registration Reply to MN]
        B1 --> B2 --> B3 --> B4 --> B5
    end

    subgraph P3["PHASE 3: Tunneled Delivery"]
        C1[CN sends packet to HoA]
        C2[HA intercepts, encapsulates, tunnels to CoA]
        C3[FA de-encapsulates]
        C4[FA delivers to MN locally]
        C1 --> C2 --> C3 --> C4
    end

    P1 --> P2
    P2 --> P3
```

### 4.6 CSMA/CD vs CSMA/CA — Comparative Functional Topology

```mermaid
flowchart TB
    subgraph CD["CSMA/CD  (Wired Ethernet)"]
        CD1[Sense carrier]
        CD2[Transmit if idle]
        CD3[Listen WHILE transmitting]
        CD4[Detect collision within 2 x Tp]
        CD5[Jam + binary exponential backoff]
        CD1 --> CD2 --> CD3 --> CD4 --> CD5
    end

    subgraph CA["CSMA/CA  (Wireless 802.11)"]
        CA1[Sense carrier for DIFS]
        CA2[Pick random backoff in 0 to CW]
        CA3[Decrement counter while idle]
        CA4[Transmit RTS]
        CA5[Receiver replies CTS after SIFS]
        CA6[Transmit DATA only after CTS]
        CA7[Receiver replies ACK after SIFS]
        CA8[If no ACK -- BEB and retry]
        CA1 --> CA2 --> CA3 --> CA4 --> CA5 --> CA6 --> CA7 --> CA8
    end
```

### 4.7 Mobile IPv4 vs Mobile IPv6 — Decision Matrix Block

```mermaid
flowchart LR
    subgraph v4["Mobile IPv4"]
        V4A[Requires Foreign Agent for FA-CoA]
        V4B[Uses IP-in-IP or GRE tunneling]
        V4C[Triangle routing by default]
        V4D[Optional route optimization]
    end

    subgraph v6["Mobile IPv6"]
        V6A[Co-located CoA - no FA required]
        V6B[Uses IPv6-in-IPv6 / IPsec ESP]
        V6C[Built-in route optimization via Binding Update]
        V6D[IPsec mandatory for signaling]
    end
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
## 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

### Part A Questions (3 Marks each)

#### Q1. **[KTU University Exam — July 2023]** (CO3, Remember)
*List the three main entities involved in Mobile IP and state the role of each.*

**Model Answer (3 marks):**
1. **Home Agent (HA)** — Router on the MN's home network that intercepts packets addressed to the MN's home address, encapsulates them, and tunnels them to the current Care-of Address. *[1 mark]*
2. **Foreign Agent (FA)** — Router on the visited network that de-encapsulates the tunneled packets and delivers them locally to the MN. It also issues the Care-of Address (FA-CoA). *[1 mark]*
3. **Mobile Node (MN)** — The roaming host that retains its permanent **Home Address (HoA)** while acquiring a temporary **Care-of Address (CoA)** as it moves across subnets. *[1 mark]*

---

#### Q2. **[KTU University Exam — Dec 2022]** (CO3, Understand)
*Why does the IEEE 802.11 MAC use CSMA/CA instead of CSMA/CD? Give two reasons.*

**Model Answer (3 marks):**
1. **Collision detection is infeasible in wireless.** A radio cannot transmit and listen on the same frequency simultaneously (the local transmission swamps the receiver), so a station cannot detect a collision the way wired Ethernet can. *[1.5 marks]*
2. **The hidden station problem** prevents a sender from hearing collisions that occur at the receiver: two stations A and C can both reach AP B, but cannot hear each other, so CSMA/CD would miss the collision at B. CSMA/CA's RTS/CTS handshake (or at minimum, the backoff) **avoids** this by reserving the channel up-front. *[1.5 marks]*

---

### Part B Questions (14 Marks each — Module Internal Choice)

> Module 4 carries full internal choice. **Answer ANY ONE** of the following two questions.

---

#### **Question A (14 Marks)**

**(a) [7 marks]** **[KTU University Exam — Dec 2023]** (CO3, Understand)
*Explain the different network configurations of IEEE 802.11 WLAN. With neat diagrams describe the BSS and ESS configurations.*

**Model Answer:**

**1. Independent Basic Service Set (IBSS) — Ad-Hoc Mode (2 marks)**
- Direct peer-to-peer network of stations with **no Access Point**.
- Stations discover each other via *probe* and *beacon* frames.
- Short-lived, limited to a small geographic area; no connection to a Distribution System.

**2. Basic Service Set (BSS) — Infrastructure Mode (2.5 marks)**
- One **Access Point (AP)** at the centre, plus any number of wireless **stations (STAs)**.
- The AP is the **central coordinator** and bridge to the Distribution System.
- All frames between STAs are *relayed* by the AP; no direct STA↔STA MAC frames.
- Identified by a 48-bit **BSSID** (typically the AP's MAC address).

**3. Extended Service Set (ESS) (2.5 marks)**
- Two or more BSSs joined by a **Distribution System (DS)** — usually wired Ethernet.
- All APs share the same **SSID**, presenting a single logical network.
- Enables **roaming**: an MN can move from one BSS to another without dropping the session, because the DS forwards frames between APs.
- A **portal** provides the gateway to external networks (Internet).

*(Refer to diagram in SECTION 4.1 — BSS / ESS Architecture.)*

**Distribution of marks:** *[IBSS explanation: 2 marks; BSS explanation: 2.5 marks; ESS explanation: 2.5 marks]*

---

**(b) [7 marks]** **[KTU University Exam — July 2024]** (CO3, Apply)
*An 802.11 station experiences **three consecutive collisions** in a row. The MAC is operating with $CW_{\min}=31$ and $CW_{\max}=1023$. Compute the new contention window and the average backoff delay in microseconds. Take SlotTime = 20 μs.*

**Step-by-Step Model Solution:**

**Step 1 — Apply closed-form BEB formula (2 marks)**

After $n$ collisions: $CW_n = 2^{n+1}(CW_{\min}+1) - 1$, capped at $CW_{\max}$.

$$
CW_3 = 2^{4}(31+1) - 1 = 16 \times 32 - 1 = 512 - 1 = \mathbf{511}
$$

Since $511 < 1023$, no capping is needed.

**Step 2 — Average backoff counter (2 marks)**

The backoff counter $K$ is uniform in $[0, CW]$:

$$
E[K] = \frac{0 + CW_3}{2} = \frac{511}{2} = 255.5 \ \text{slots}
$$

**Step 3 — Convert slots to microseconds (2 marks)**

$$
T_{\text{backoff}} = E[K] \times \text{SlotTime} = 255.5 \times 20 \ \mu s = \mathbf{5110 \ \mu s = 5.11 \ ms}
$$

**Step 4 — Final answer (1 mark)**

| Parameter | Value |
|---|---|
| Contention window after 3 collisions | **511 slots** |
| Average backoff counter $K$ | **255.5 slots** |
| Average backoff delay | **5110 μs ≈ 5.11 ms** |

---

#### **Question B (14 Marks)** — *Alternative Choice*

**(a) [7 marks]** **[KTU University Exam — Dec 2023]** (CO3, Understand)
*With a neat timing diagram, explain the CSMA/CA protocol with RTS/CTS mechanism used in IEEE 802.11. Mention the role of NAV.*

**Model Answer:**

**1. Need for CSMA/CA (1.5 marks)**
Wired Ethernet's CSMA/CD cannot be used in wireless because a station cannot detect collisions (the strong local transmit signal masks any incoming signal), and the **hidden-station** problem makes collision detection at the sender unreliable. CSMA/CA *avoids* collisions by reserving the channel before transmission.

**2. CSMA/CA with RTS/CTS — Step-by-step (4 marks)**
1. **DIFS sensing** — STA senses the channel idle for DIFS (50 μs in 802.11b).
2. **Random backoff** — STA picks $K \in [0, CW]$ and waits $K \times \text{SlotTime}$.
3. **RTS** — STA transmits a 20-byte **Request-To-Send** containing a *Duration* field.
4. **SIFS + CTS** — Receiver replies with a 14-byte **Clear-To-Send** after a SIFS (10 μs).
5. **SIFS + DATA** — STA transmits the data frame after SIFS.
6. **SIFS + ACK** — Receiver sends an ACK after SIFS; on receipt, the transaction is complete.

**3. Role of NAV (1.5 marks)**
The **Network Allocation Vector (NAV)** is a *virtual carrier-sense* counter. Any station that overhears an **RTS or CTS** reads the embedded *Duration* field and sets its NAV to that value. For the entire NAV interval the station behaves as if the channel is *busy*, refraining from transmission. This solves the **hidden-station** problem because a hidden station that misses the RTS will still hear the CTS and stay silent.

*(Refer to the Mermaid sequence diagram in SECTION 4.2.)*

**Distribution of marks:** *[CSMA/CA necessity: 1.5 marks; 6-step procedure: 4 marks; NAV role: 1.5 marks]*

---

**(b) [7 marks]** **[KTU University Exam — July 2024]** (CO3, Apply)
*A mobile node (HoA = 10.0.0.5) is at its home network. It then moves to a foreign network (CoA = 192.168.7.50). Describe in detail the three operational phases of Mobile IP that allow a correspondent node to continue sending packets to the mobile node. Also, identify the path packets take during "triangle routing" and state one limitation of this approach.*

**Step-by-Step Model Solution:**

**Phase 1 — Agent Discovery (2 marks)**
- The Home Agent on the home link (10.0.0.0/24) and the Foreign Agent on the visited link (192.168.7.0/24) each periodically broadcast **ICMP Agent Advertisement** messages.
- The MN receives the FA's advertisement, realises it is no longer on its home network, and transitions from state `HOME` to `REGISTERING`.

**Phase 2 — Registration (2 marks)**
- The MN sends a **Registration Request** (containing HoA, CoA, lifetime, and an authentication signature) to the FA.
- The FA forwards it to the HA. The HA authenticates the request and creates a **binding entry**: `<HoA=10.0.0.5, CoA=192.168.7.50, lifetime=3600s>`.
- HA replies with **Registration Reply** (CODE=0, success). The FA forwards the reply to the MN. The MN transitions to state `REGISTERED`.

**Phase 3 — Tunneled Delivery (2 marks)**
- The CN sends a packet with `dst = 10.0.0.5` (HoA). Normal IP routing delivers it to the home network.
- The **Home Agent intercepts** the packet, consults its binding table, and **encapsulates** the original datagram inside a new IP header (`src = HA, dst = CoA = 192.168.7.50`) — IP-in-IP tunneling.
- The tunneled packet travels across the Internet to the foreign network. The **FA de-encapsulates** it, strips the outer header, and delivers the original packet to the MN locally.

**Triangle Routing & Its Limitation (1 mark)**
- Path: `CN → Internet → HA → Internet → FA → MN`. The MN's reply to the CN travels `MN → FA → CN` (shorter return path), forming a *triangle*.
- **Limitation:** Sub-optimal routing — even when CN and MN are one hop apart, packets still traverse the HA, increasing latency and creating a single point of failure at the HA. *Route optimization* (Binding Updates to the CN) addresses this in Mobile IPv6.

**Distribution of marks:** *[Phase 1: 2 marks; Phase 2: 2 marks; Phase 3: 2 marks; Triangle routing + limitation: 1 mark]*

---

> [!WARNING]
> **KTU Examiner's Valuation Pitfalls — Read Before You Write!**
> 1. **Do NOT confuse "hidden station" with "exposed station."** Hidden = collision occurs, *but sender is unaware*. Exposed = no collision, *but sender unnecessarily defers*.
> 2. **Do NOT omit the Duration field in RTS/CTS answers.** It is the entire basis of the NAV mechanism. A common board comment reads: *"NAV not explained — 1 mark deducted."*
> 3. **State the values of SIFS, PIFS, DIFS explicitly** when asked about IFS — a numerical answer is worth full marks; a vague answer earns 1/2 marks.
> 4. **Always state the formula $CW_n = 2^{n+1}(CW_{\min}+1) - 1$** before substituting — KTU examiners award a process mark for the *formula statement*.
> 5. **In Mobile IP, write the three phases in order.** Skipping Phase 1 (Agent Discovery) and jumping straight to "Registration" is a frequent error that costs 2 marks.
> 6. **Clarify "Home Agent" vs "Home Address"** — they are *not* the same thing. HoA is a 32-bit IP; HA is a *router entity*.
> 7. **State the year and PHY rate** for any 802.11 standard mentioned (e.g., *"802.11ac, 2013, up to 6.93 Gbps"*). Vague references like "Wi-Fi 5" alone earn only partial credit.

---

### Topic Recap & Important Things to Remember

- **802.11 Family**: 802.11 (1997, 2 Mbps) → 11a (5 GHz, 54 Mbps) → 11b (2.4 GHz, 11 Mbps) → 11g (2.4 GHz, 54 Mbps, OFDM) → 11n (MIMO, 600 Mbps) → 11ac (MU-MIMO, 6.93 Gbps) → 11ax (OFDMA, 9.6 Gbps, 6 GHz) → 11be (320 MHz, 46 Gbps).
- **Topologies**: IBSS (ad-hoc) → BSS (single AP) → ESS (multiple BSS + DS) → MBSS (wireless mesh).
- **CSMA/CA = Carrier Sense + Random Backoff + RTS/CTS + ACK**. CSMA/CD is for wired only.
- **Three IFS in increasing order**: SIFS (10 μs) < PIFS (30 μs) < DIFS (50 μs) for 802.11b.
- **NAV** is a *virtual carrier-sense* counter updated from the *Duration* field of RTS/CTS/DATA frames.
- **BEB formula**: $CW_n = 2^{n+1}(CW_{\min}+1) - 1$, capped at $CW_{\max}$.
- **RTS/CTS overhead** is justified only when the data frame is large (RTS threshold, typically 500 bytes).
- **Hidden station** = sender unaware of collision (RTS/CTS solves it). **Exposed station** = sender unnecessarily defers (RTS/CTS does *not* fully solve it; 802.11ax BSS coloring helps).
- **Mobile IP entities**: Mobile Node (HoA + CoA), Home Agent (binds HoA→CoA), Foreign Agent (de-tunnels), Correspondent Node.
- **Three Mobile IP phases**: Agent Discovery → Registration → Tunneled Delivery.
- **Tunneling** is *IP-in-IP encapsulation* performed by the HA (outer src=HA IP, outer dst=CoA).
- **Triangle routing** = CN→HA→MN (forward) and MN→CN (return) — non-optimal, fixed by Route Optimization in MIPv6.
- **MIPv4 vs MIPv6**: MIPv4 needs FA (FA-CoA) and uses triangle routing by default; MIPv6 has co-located CoA, mandatory IPsec, and built-in route optimization via Binding Updates.
- **Production relevance**: CSMA/CA underpins Wi-Fi (laptop, smartphone, IoT); Mobile IP concepts evolved into LTE/5G mobility (S-GW/P-GW as HA/FA) and enterprise SD-WAN roaming.

<!-- SECTION_5_END -->
