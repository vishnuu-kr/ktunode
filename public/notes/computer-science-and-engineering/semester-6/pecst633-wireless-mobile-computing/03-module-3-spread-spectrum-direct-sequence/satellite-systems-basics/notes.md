# Satellite Systems – Basics

<!-- SECTION_1_START -->
# Satellite Systems – Basics

## 1.1 Formal Academic Definition

> [!IMPORTANT]
> **Satellite Communication** is a specialized form of long-range radio communication in which an **artificial spacecraft stationed in a precisely defined orbit** acts as a **repeater or relay** between two or more earth stations, thereby enabling signal transmission across vast terrestrial distances, oceans, and inaccessible terrains.

In the KTU 2024 Scheme (Module 3, *Spread Spectrum & Satellite Systems*), a **satellite system** is defined as a *self-contained wireless infrastructure* comprising a **transponder-equipped spacecraft**, a network of **ground (earth) stations**, and an **orbital control subsystem**, all coordinated to provide **broadcasting, telephony, data, and navigation services** over the Earth's surface.

The bedrock principle can be summarized in one line:

> A satellite is essentially a **microwave repeater in the sky**, regenerating or bending uplink signals back to Earth at a different frequency to avoid self-interference.

## 1.2 Conceptual Analogy / Intuition

Imagine you are standing on the left bank of a wide river shouting toward your friend on the right bank. Your voice simply cannot reach them because the river is too wide. Now imagine placing a **person on a very tall pillar** directly above the middle of the river, who **hears your shout and shouts back** to your friend. That pillar-person is your *satellite*, and the **height of the pillar represents the orbit altitude**.

- A **low pillar** (Low Earth Orbit, LEO) → short shouting delay, but the pillar can see only a small patch of the river.
- A **medium pillar** (Medium Earth Orbit, MEO) → moderate delay and coverage.
- A **very tall pillar** at the **exact altitude of 35,786 km** (Geostationary Orbit, GEO) → the pillar moves perfectly with Earth's rotation, so it always hovers above the same spot and can see **almost a full hemisphere**.

> [!NOTE]
> **Key Insight:** A satellite does not generate new information — it is a *bent pipe* (transparent repeater) that simply translates frequency, amplifies, and rebroadcasts.

## 1.3 Orbit Classifications — The Three Pillars

| Orbit Type | Altitude Range | Orbital Period | Visibility per Pass | Typical Latency (RTT) |
| :--- | :--- | :--- | :--- | :--- |
| **LEO (Low Earth Orbit)** | 500 – 1,500 km | 90 – 120 min | 5 – 15 min | ~ 20 – 40 ms |
| **MEO (Medium Earth Orbit)** | 5,000 – 12,000 km | 5 – 12 hr | 2 – 8 hr | ~ 100 – 200 ms |
| **GEO (Geostationary Earth Orbit)** | **35,786 km** | **24 hr (sidereal)** | **Continuous (24/7)** | ~ **240 – 280 ms** |

> [!IMPORTANT]
> **Why 35,786 km?** At this exact altitude, the satellite's angular velocity equals Earth's rotational angular velocity ($\omega_s = \omega_e \approx 7.292 \times 10^{-5}$ rad/s). It therefore appears **stationary** to a ground observer — ideal for fixed antennas.

## 1.4 Frequency Bands Used in Satellite Systems

> [!NOTE]
> Microwave frequencies are preferred because they (a) penetrate the ionosphere with manageable loss, (b) allow high-bandwidth signals, and (c) use small, directional antennas.

| Band | Frequency Range | Wavelength | Primary Use |
| :--- | :--- | :--- | :--- |
| **L-band** | 1 – 2 GHz | 30 – 15 cm | GPS, Mobile Satellite (Inmarsat) |
| **S-band** | 2 – 4 GHz | 15 – 7.5 cm | Radar, Some broadcast |
| **C-band** | 4 – 8 GHz | 7.5 – 3.75 cm | TV distribution, VSAT uplink |
| **X-band** | 8 – 12 GHz | 3.75 – 2.5 cm | Military, Radar |
| **Ku-band** | 12 – 18 GHz | 2.5 – 1.67 cm | DTH TV (Direct-To-Home) |
| **Ka-band** | 26 – 40 GHz | 1.15 – 0.75 cm | Broadband (Starlink, ViaSat) |

> [!VISUALIZATION CONTROL]
> **Concept:** Satellite altitude vs. footprint coverage
> **GeoGebra / Desmos Input Equations:**
> * `f_LEO(h) = 2 * pi * (6371 + h)` for orbital circumference
> * `footprint_angle(h) = 2 * arccos(6371 / (6371 + h))` (in radians)
> **Visual Description:** Plot h on the x-axis (0 to 40,000 km) and footprint angle on the y-axis. Students will observe that **LEO covers only a tiny angular wedge**, while **GEO covers nearly a full hemisphere (~17.3° per side of horizon, total ~162°)**.
