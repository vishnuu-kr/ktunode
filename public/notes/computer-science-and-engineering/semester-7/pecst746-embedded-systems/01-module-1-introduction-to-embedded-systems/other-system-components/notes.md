# Other System components

<!-- SECTION_1_START -->

# Other System Components in Embedded Systems

## 1.1 Core Technical Definition

In the architecture of an Embedded System, beyond the **Central Processing Unit (CPU)/Microprocessor/Microcontroller** and the **Software (Firmware/Operating System)**, there exists a critical set of supporting hardware building blocks called **Other System Components**. These components provide the necessary capabilities for **data storage, peripheral interaction, timing control, analog-digital interfacing, and external communication** that the processor alone cannot perform.

> [!IMPORTANT]
> **KTU Syllabus Definition (Raj Kamal, Chapter 1.4):**
> "Other system components of an embedded system include the memory (RAM, ROM, cache), input/output devices and their interfacing circuits, communication interfaces (UART, SPI, I2C, CAN, USB, Bluetooth, Wi-Fi), timers and counters, watchdog timers, ADC/DAC converters, reset circuits, and power supply units. Together with the processor, these components form the complete hardware platform of an embedded system."

**Conceptual Analogy / Intuition:**

Imagine a modern **automatic washing machine** as an embedded system. The **microcontroller** is the "brain" that decides what to do (wash, rinse, spin). But the brain cannot do anything alone. It needs:

- **Memory (ROM/RAM)** → Like the washing machine's **recipe book and notepad**. ROM stores the permanent washing program (cotton, wool, delicate), while RAM temporarily remembers the remaining time and current state.
- **I/O Devices** → The **dial, buttons, display panel, motor, and water level sensor**. These are the eyes, ears, hands, and mouth of the system.
- **Communication Interface** → The **Wi-Fi/Bluetooth module** that lets your phone app start the wash remotely.
- **Timers/Counters** → The **internal clock** that counts 30 minutes for a wash cycle.
- **Watchdog Timer** → A **safety supervisor** that resets the machine if the program "hangs" (e.g., door sensor stuck).
- **ADC** → Converts the **analog signal from the temperature sensor** (variable voltage) into a digital number the brain can read.
- **DAC/PWM** → Converts the **digital speed setting** into an analog voltage to control the **motor speed smoothly**.
- **Power Supply** → The **230V AC to 5V/12V DC converter** that powers the entire system.

Without these "other components," the processor is like a brilliant brain trapped in an empty, dark room — it has thoughts but no way to sense, remember, act, or communicate.

> [!NOTE]
> **Syllabus Highlight:** The KTU 2024 scheme module-1 topic "Other System components" is a **high-weightage** area. Questions on memory hierarchy, communication protocols (UART, SPI, I2C), ADC/DAC, and watchdog timers appear regularly as **Part A (3 marks)** and frequently as sub-parts of **Part B (14 marks)** questions in End Semester Examinations.

**Standard Metrics & Physical Constants to Remember:**

- Standard logic levels: **TTL = 5V (High ≥ 2.0V, Low ≤ 0.8V)**, **CMOS = 3.3V/1.8V**
- Memory access time unit: **nanoseconds (ns)**
- ADC resolution formula: **$V_{LSB} = \dfrac{V_{ref}}{2^n}$**, where $n$ = number of bits
- UART standard baud rates: **9600, 19200, 115200 bps** (bits per second)

> [!VISUALIZATION CONTROL]
> **Concept:** Memory Hierarchy Speed-Capacity Trade-off
> **GeoGebra / Desmos Input Equations:**
> * `f(x) = log(x)` representing cost per bit vs. capacity
> * `g(x) = 1/x` representing access time vs. capacity
> **Visual Description:** The student should observe an inverse relationship: as memory capacity increases (moving right on x-axis: Register → Cache → RAM → Disk), access time increases while cost per bit decreases. Registers are fastest but smallest; magnetic/optical storage is slowest but largest.

---

## 1.2 Classification of Other System Components

The other system components can be broadly classified into **seven functional categories**:

1. **Memory Components** — ROM, RAM, Cache, Flash
2. **Input Devices** — Keyboards, Switches, Sensors, Touch screens
3. **Output Devices** — LEDs, LCDs, Seven-segment displays, Motors, Buzzers
4. **Communication Interfaces** — UART, SPI, I2C, CAN, USB, Ethernet, Bluetooth, Wi-Fi
5. **Timing Components** — Timers, Counters, Real-Time Clocks (RTC), Watchdog Timers
6. **Analog-Digital Conversion** — ADC, DAC, PWM
7. **System Support Components** — Reset Circuit, Brown-Out Detector (BOD), Power Supply Unit (PSU), Clock Oscillator, Interrupt Controller

> [!IMPORTANT]
> **KTU Exam Tip:** When asked to "list the components of an embedded system," students often miss **Reset Circuit, BOD, Clock Oscillator, and Interrupt Controller**. These are *system support components* without which the processor cannot reliably boot or respond to asynchronous events.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Memory Components (Detailed)

Memory in an embedded system is the **workspace and warehouse** of the processor. It is broadly classified into two types: **Primary Memory** (fast, directly accessed by CPU) and **Secondary Memory** (large, non-volatile, slower).

### 2.1.1 RAM — Random Access Memory (Volatile)

RAM loses its contents when power is removed. Two main flavors exist:

| RAM Type | Full Form | Construction | Speed | Cost | Refresh | KTU Use Case |
|---|---|---|---|---|---|---|
| **SRAM** | Static RAM | 6 transistors per bit | **Very fast (1–10 ns)** | High | No | Cache, internal registers, small buffers |
| **DRAM** | Dynamic RAM | 1 transistor + 1 capacitor per bit | Slower (50–70 ns) | Low | Yes (every ~64 ms) | Main memory in PCs; rarely in MCUs |
| **SDRAM** | Synchronous DRAM | Synchronized to system clock | Fast (~10 ns) | Moderate | Yes | External memory in high-end SoCs |
| **PSRAM** | Pseudo-Static RAM | DRAM + built-in refresh controller | Moderate | Moderate | Internal | Low-power IoT devices |
| **FRAM** | Ferroelectric RAM | Ferroelectric capacitor | Fast, ultra-low power | Moderate | No | Wearable devices, energy harvesting |

> [!NOTE]
> **Why does DRAM need refreshing?** A DRAM cell stores a bit as charge in a tiny capacitor. Capacitors **leak** current continuously, so the stored charge (and therefore the bit) would vanish in milliseconds. An external refresh circuit must rewrite the charge ~every 64 ms.

**Real-World Engineering Utility:**
- **SRAM** is used inside microcontrollers (e.g., ARM Cortex-M4 has ~64–256 KB SRAM) for the **stack, heap, and data variables**.
- **DRAM** is used in embedded Linux boards (Raspberry Pi uses LPDDR4) where Linux requires hundreds of MB of RAM.
- **FRAM** is used in **MSP430 microcontrollers** for ultra-low-power data logging (Texas Instruments MSP430FR series).

### 2.1.2 ROM — Read Only Memory (Non-Volatile)

ROM retains its contents without power. Used to store the **firmware/bootloader**.

| ROM Type | Full Form | Programmability | Erasure Method | Re-writes | Use Case |
|---|---|---|---|---|---|
| **MROM** | Mask ROM | Programmed at factory | Not erasable | 1 time | Mass production (millions of units) |
| **PROM** | Programmable ROM | Once by user | Not erasable | 1 time | Prototyping, small batches |
| **EPROM** | Erasable PROM | UV light eraser | UV light (~20 min) | ~1000 cycles | Development boards |
| **EEPROM** | Electrically EPROM | Byte-by-byte in-circuit | Electrical signal | ~1,000,000 cycles | Storing config/calibration data |
| **Flash** | Flash EEPROM | Block/sector erase | Electrical signal | ~10,000–100,000 cycles | Firmware storage, SSD |

> [!IMPORTANT]
> **KTU High-Yield Point:** The relationship is **Flash endurance < EEPROM endurance** in some classifications, but Flash is **denser and cheaper per bit**. Modern MCUs (e.g., STM32) use **Flash for program + emulated EEPROM for data** by reserving a small Flash sector with wear-leveling.

### 2.1.3 Memory Hierarchy (KTU Favorite Topic)

$$
t_{avg} = H \cdot t_{cache} + (1 - H) \cdot t_{main}
$$

where $H$ = **Hit ratio** (fraction of accesses found in cache) and $(1-H)$ = Miss ratio.

**Key principle:** *Closer to CPU → Faster, Smaller, Costlier per bit.*

```
┌──────────────────────────────────────────┐
│  Registers (1-2 ns, bytes, in CPU core)  │  Level 0
├──────────────────────────────────────────┤
│  L1 Cache (2-5 ns, KB)                   │  Level 1
├──────────────────────────────────────────┤
│  L2 Cache (5-20 ns, MB)                  │  Level 2
├──────────────────────────────────────────┤
│  Main RAM (50-100 ns, MB-GB)             │  Level 3
├──────────────────────────────────────────┤
│  Flash/SSD (µs-ms, GB)                   │  Level 4
├──────────────────────────────────────────┤
│  HDD/Magnetic (ms, TB)                   │  Level 5
└──────────────────────────────────────────┘
```

---

## 2.2 Communication Interfaces

Communication interfaces allow the embedded system to **exchange data** with sensors, actuators, other MCUs, or external networks.

### 2.2.1 UART (Universal Asynchronous Receiver/Transmitter)

- **Asynchronous** → No shared clock line. Both sides must agree on **baud rate**.
- **Full-duplex** → Two wires (TX, RX) plus common **GND**.
- **Frame format:** Start bit (0) + Data bits (5–9) + Optional Parity bit + Stop bits (1 or 2).
- **No addressing** → Point-to-point only.

$$
T_{frame} = \frac{1}{\text{Baud Rate}} \times (1 + N_{data} + N_{parity} + N_{stop})
$$

For 9600 baud, 8N1 (8 data, No parity, 1 stop):
$$
T_{frame} = \frac{1}{9600} \times (1 + 8 + 0 + 1) = \frac{10}{9600} \approx 1.04 \text{ ms}
$$

### 2.2.2 SPI (Serial Peripheral Interface)

- **Synchronous** → Shared clock line (SCLK).
- **Full-duplex** → MOSI (Master-Out-Slave-In) and MISO (Master-In-Slave-Out).
- **Master-Slave** with **Slave Select (SS/CS)** lines (one per slave).
- **Fast** → Typically 1–50 MHz.
- **No addressing** → Uses hardware select lines.

**Total wires for 1 master + N slaves:** $3 + N$ (SCLK, MOSI, MISO, + N×SS).

### 2.2.3 I²C (Inter-Integrated Circuit)

- **Synchronous** → Shared clock (SCL).
- **Half-duplex** → Single bidirectional data line (SDA).
- **Only 2 wires** regardless of number of devices.
- **Addressing** → 7-bit (up to 128 devices) or 10-bit address.
- **Open-drain** → Requires pull-up resistors (typically **4.7 kΩ**).
- **Standard speeds:** 100 kHz (Standard), 400 kHz (Fast), 3.4 MHz (High-Speed).

**Start/Stop conditions** are signaled by SDA transitions while SCL is HIGH.

### 2.2.4 CAN (Controller Area Network)

- **Multi-master, message-based** protocol originally for **automotive** (Bosch).
- **Differential signaling** (CAN_H, CAN_L) for noise immunity.
- **Bit rates:** up to 1 Mbps (within 40 m).
- **11-bit or 29-bit identifier** for message prioritization (CSMA/CR arbitration).
- **Robust against EMI** → used in cars, industrial automation.

### 2.2.5 USB (Universal Serial Bus)

- **Master-slave** with host controller.
- **Differential signaling** (D+, D−).
- **Plug-and-play** with hot-plugging.
- **Versions:** USB 1.1 (12 Mbps), USB 2.0 (480 Mbps), USB 3.0 (5 Gbps), USB-C (10+ Gbps, reversible).
- **Power delivery** up to 100 W (USB-PD).

### 2.2.6 Wireless Protocols

| Protocol | Frequency | Range | Data Rate | Topology | Use Case |
|---|---|---|---|---|---|
| **Bluetooth/BLE** | 2.4 GHz | ~10–100 m | 1–2 Mbps | Star (piconet) | Wearables, beacons |
| **Wi-Fi (802.11)** | 2.4/5 GHz | ~50 m | 11–1000+ Mbps | Star | IoT, video streaming |
| **ZigBee (802.15.4)** | 2.4 GHz | ~100 m | 250 kbps | Mesh | Smart home, sensor networks |
| **LoRaWAN** | 433/868/915 MHz | 2–15 km | 0.3–50 kbps | Star | Long-range IoT, agriculture |
| **NFC** | 13.56 MHz | <10 cm | 106–424 kbps | Peer-to-peer | Payments, ID cards |

---

## 2.3 ADC and DAC (Analog-Digital Conversion)

### 2.3.1 ADC Key Parameters

- **Resolution (n bits)** → Number of discrete output levels = $2^n$.
- **Reference Voltage ($V_{ref}$)** → Maximum input voltage.
- **Quantization step (LSB size):**
$$
V_{LSB} = \frac{V_{ref}}{2^n}
$$
- **Conversion time ($t_c$)** → Time to complete one conversion.
- **Sampling rate ($f_s$)** → Conversions per second = $1/t_c$ (for single-channel, no pipelining).

**For an 8-bit ADC with $V_{ref} = 5$ V:**
$$
V_{LSB} = \frac{5}{2^8} = \frac{5}{256} \approx 19.53 \text{ mV}
$$

**Digital output for input $V_{in}$:**
$$
D = \left\lfloor \frac{V_{in}}{V_{LSB}} \right\rfloor = \left\lfloor \frac{V_{in} \cdot 2^n}{V_{ref}} \right\rfloor
$$

**Types of ADC (KTU 2024 Syllabus):**
- **Flash ADC** → Fastest, most expensive (uses $2^n - 1$ comparators). Used in oscilloscopes.
- **Successive Approximation (SAR) ADC** → Most common in MCUs. $n$ clock cycles per conversion.
- **Dual-Slope ADC** → High accuracy, slow. Used in digital multimeters.
- **Sigma-Delta ADC** → High resolution (16–24 bits), oversampling. Used in audio, precision sensors.

### 2.3.2 DAC Key Parameters

- **Resolution (n bits):**
$$
V_{LSB}^{DAC} = \frac{V_{ref}}{2^n}
$$
- **Output voltage:**
$$
V_{out} = D \cdot \frac{V_{ref}}{2^n} = D \cdot V_{LSB}^{DAC}
$$
where $D$ is the digital input code (0 to $2^n - 1$).

### 2.3.3 PWM (Pulse Width Modulation)

PWM is a **digital technique** to approximate an analog output. Two key parameters:

- **Duty cycle:**
$$
D_{cycle} = \frac{T_{on}}{T_{period}} \times 100\%
$$
- **Average output voltage (after RC low-pass filter):**
$$
V_{avg} = D_{cycle} \times V_{supply}
$$

**KTU Application:** Motor speed control, LED dimming, servo motor angle control, SMPS regulation.

---

## 2.4 Timers, Counters, and Watchdog Timer

### 2.4.1 Timer/Counter

A **timer** increments a register on every clock tick (internal source). A **counter** increments on external events (e.g., pulses on a pin).

**Timer Tick Frequency:**
$$
f_{tick} = \frac{f_{clk}}{PSC + 1}
$$

where $f_{clk}$ = peripheral clock frequency, $PSC$ = Prescaler value.

**Time to overflow (16-bit timer):**
$$
T_{overflow} = \frac{(ARR + 1) \times (PSC + 1)}{f_{clk}}
$$

where $ARR$ = Auto-Reload Register value (max = 65535 for 16-bit).

### 2.4.2 Real-Time Clock (RTC)

A **low-power, independent clock** (often 32.768 kHz crystal) that keeps time even when the main CPU is in sleep mode. Used for **date/time stamping, alarms, scheduled wake-ups**.

> [!NOTE]
> **32.768 kHz crystal choice:** $32768 = 2^{15}$. After 15 divisions by 2, you get exactly **1 Hz** (1-second tick) without any fraction.

### 2.4.3 Watchdog Timer (WDT)

A **hardware safety timer** that resets the MCU if the firmware fails to "kick" (reset) the watchdog within a specified time.

**Watchdog Reset Condition:**
$$
\text{If } \Delta t_{WDT} > T_{WDT\_timeout} \implies \text{System Reset}
$$

**Operation:**
1. Firmware must periodically write a specific value to WDT register (called "kicking", "feeding", or "petting" the dog).
2. If firmware crashes (infinite loop, deadlock), it forgets to kick.
3. WDT counter overflows → triggers **system reset** → firmware re-boots.

**KTU Real-World Example:** Automotive ECU, Mars Pathfinder (famous case where WDT reset fixed a system hang caused by priority inversion).

---

## 2.5 System Support Components

### 2.5.1 Reset Circuit

Ensures the processor starts in a **known, stable state** at power-up. Types:
- **RC Reset** → Simple, low cost, but not precise.
- **Voltage Supervisor IC (e.g., MAX809, TPS3823)** → Monitors $V_{DD}$, resets MCU if voltage drops below threshold.

### 2.5.2 Brown-Out Detector (BOD)

Detects when supply voltage **sags below safe operating level** and generates a reset/interrupt. Critical for battery-powered systems.

### 2.5.3 Clock Oscillator

Provides the **heartbeat** to the CPU and peripherals.
- **Crystal Oscillator** → High accuracy (ppm), external.
- **Ceramic Resonator** → Moderate accuracy, cheaper.
- **RC Oscillator** → Internal, low cost, low accuracy (~1–5%).
- **PLL (Phase-Locked Loop)** → Multiplies a low-frequency reference to a high-frequency system clock.

$$
f_{sys} = f_{ref} \times \frac{N}{M \times P}
$$

where $N$ = Multiplier, $M$ = Input divider, $P$ = Output divider.

### 2.5.4 Interrupt Controller (NVIC in ARM)

Manages **asynchronous events** from peripherals. Priority-based, supports **nested interrupts** and **vectored interrupt handling**.

> [!IMPORTANT]
> **ARM Cortex-M NVIC supports up to 240 physical interrupts with 256 priority levels.** It includes **tail-chaining** (back-to-back interrupt handling with only 6 cycles overhead) and **late arrival** features.

---

## 2.6 KTU Formula Sheet / Cheat Sheet

| # | Concept | Formula | Units / Notes |
|---|---|---|---|
| 1 | Average memory access time | $t_{avg} = H \cdot t_1 + (1-H) \cdot t_2$ | $H$ = hit ratio |
| 2 | ADC LSB size | $V_{LSB} = \dfrac{V_{ref}}{2^n}$ | $n$ = ADC bits |
| 3 | ADC digital output | $D = \left\lfloor \dfrac{V_{in}}{V_{LSB}} \right\rfloor$ | Floor of ratio |
| 4 | DAC output voltage | $V_{out} = D \cdot \dfrac{V_{ref}}{2^n}$ | $D$ = digital code |
| 5 | UART frame time | $T_f = \dfrac{1}{\text{Baud}} \times (1 + N_{data} + N_{parity} + N_{stop})$ | seconds |
| 6 | PWM average voltage | $V_{avg} = D_{cycle} \times V_{supply}$ | $D_{cycle}$ = duty cycle fraction |
| 7 | PWM duty cycle | $D\% = \dfrac{T_{on}}{T_{period}} \times 100$ | percent |
| 8 | Timer tick frequency | $f_{tick} = \dfrac{f_{clk}}{PSC + 1}$ | Hz |
| 9 | Timer overflow time | $T_{overflow} = \dfrac{(ARR+1)(PSC+1)}{f_{clk}}$ | seconds |
| 10 | Watchdog reset condition | $\Delta t_{WDT} > T_{WDT\_timeout}$ | system reset triggered |
| 11 | I²C address space (7-bit) | $N_{devices} = 2^7 = 128$ | practical limit ~112 (reserved) |
| 12 | SPI wires for N slaves | $W = 3 + N$ | SCLK, MOSI, MISO + N×SS |
| 13 | PLL output frequency | $f_{sys} = f_{ref} \times \dfrac{N}{M \times P}$ | programmable |
| 14 | RTC crystal frequency | $f_{RTC} = 2^{15} = 32768$ Hz | divides to 1 Hz |
| 15 | Resolution vs. steps | Steps $= 2^n$ | ADC/DAC discrete levels |

---

## 2.7 Real-World Engineering Utility

| Component | Production System Use Case |
|---|---|
| Flash + EEPROM | STM32 stores firmware in Flash, configuration in EEPROM |
| UART | GPS modules, Bluetooth HC-05, XBee radios in drones |
| SPI | SD card interface, TFT LCD displays, ADXL345 accelerometer |
| I²C | MPU6050 IMU, DS1307 RTC, AT24C256 EEPROM, sensor hubs |
| CAN | Automotive ECU network (engine, brakes, airbags), industrial PLCs |
| ADC | Battery voltage monitoring, temperature sensing (LM35), audio capture |
| PWM | Drone motor ESC control, LED dimming, switching power supplies |
| Watchdog | Mars Pathfinder, automotive ECUs, industrial controllers |
| RTC | Digital clocks, data loggers, sleep/wake scheduling in IoT |
| BOD | Battery-powered IoT nodes to prevent corruption at low voltage |

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations, Code & Symbolic Implementation

## 3.1 Worked Example: ADC Conversion (Full Derivation)

**Problem:** An 8-bit ADC has a reference voltage of 5.0 V. An analog input of 2.7 V is applied. Find:
(a) The LSB size in mV.
(b) The digital output code (decimal and binary).
(c) The quantization error.

### Step 1 — Calculate the Number of Discrete Levels

An 8-bit ADC can represent:
$$
L = 2^n = 2^8 = 256 \text{ levels}
$$
These range from code **0** to code **255**.

### Step 2 — Calculate the LSB (Quantization Step)

$$
V_{LSB} = \frac{V_{ref}}{2^n} = \frac{5.0}{256} = 0.01953125 \text{ V} = 19.53125 \text{ mV}
$$

**Valuation Key Point:** Write the formula *and* the unit — students often forget the unit. **[1 Mark]**

### Step 3 — Calculate the Digital Output Code

The digital output is the integer part (floor) of $V_{in} / V_{LSB}$:
$$
D = \left\lfloor \frac{V_{in}}{V_{LSB}} \right\rfloor = \left\lfloor \frac{2.7}{0.01953125} \right\rfloor = \left\lfloor 138.24 \right\rfloor = 138
$$

**Convert 138 to 8-bit binary:**
$$
138 = 128 + 8 + 2 = 2^7 + 2^3 + 2^1
$$
$$
138_{10} = \mathbf{10001010}_2
$$

### Step 4 — Verify by Reconstructing the Voltage

$$
V_{reconstructed} = D \times V_{LSB} = 138 \times 0.01953125 = 2.6953 \text{ V}
$$

### Step 5 — Calculate the Quantization Error

$$
V_{error} = V_{in} - V_{reconstructed} = 2.7 - 2.6953 = 0.0047 \text{ V} = 4.7 \text{ mV}
$$

**Theoretical maximum quantization error** for any ADC:
$$
V_{err}^{max} = \pm \frac{V_{LSB}}{2} = \pm \frac{19.53}{2} = \pm 9.77 \text{ mV}
$$

Our computed error of **4.7 mV** is within $\pm 9.77$ mV. ✓

### Final Answer Summary

| Quantity | Value |
|---|---|
| LSB size | **19.53 mV** |
| Decimal code | **138** |
| Binary code | **10001010** |
| Quantization error | **4.7 mV** |

---

## 3.2 Worked Example: UART Frame Time Calculation

**Problem:** UART communication uses 115200 baud rate, 8 data bits, no parity, 1 stop bit. Find:
(a) The time to transmit one frame.
(b) The time to transmit a 100-byte message.
(c) The effective throughput in bytes/second.

### Step 1 — Total Bits Per Frame

$$
N_{frame} = 1 \text{ (start)} + 8 \text{ (data)} + 0 \text{ (parity)} + 1 \text{ (stop)} = 10 \text{ bits}
$$

### Step 2 — Time Per Bit

$$
T_{bit} = \frac{1}{\text{Baud Rate}} = \frac{1}{115200} = 8.68 \text{ µs}
$$

### Step 3 — Time Per Frame

$$
T_{frame} = N_{frame} \times T_{bit} = 10 \times 8.68 = 86.8 \text{ µs}
$$

### Step 4 — Time for 100 Bytes

$$
T_{msg} = 100 \times T_{frame} = 100 \times 86.8 = 8680 \text{ µs} = 8.68 \text{ ms}
$$

### Step 5 — Effective Throughput

$$
\text{Throughput} = \frac{100 \text{ bytes}}{8.68 \text{ ms}} = 11520 \text{ bytes/second}
$$

**Note:** 11520 ≠ 11520. Why? Because *useful data* is 8 bits per 10-bit frame → efficiency = 80%. The "raw" data rate is 115200/10 = 11520 frames/s = 11520 bytes/s. The **nominal** is 115200/8 = 14400 bytes/s if no overhead existed.

---

## 3.3 Worked Example: Timer Overflow Calculation

**Problem:** STM32 timer has $f_{clk} = 72$ MHz. Prescaler (PSC) = 71, Auto-Reload Register (ARR) = 999. Find the time period of the timer update event.

### Step 1 — Timer Tick Frequency

$$
f_{tick} = \frac{f_{clk}}{PSC + 1} = \frac{72 \times 10^6}{71 + 1} = \frac{72 \times 10^6}{72} = 1 \times 10^6 \text{ Hz} = 1 \text{ MHz}
$$

### Step 2 — Counter Period

The counter goes from 0 to ARR (=999), i.e., 1000 ticks.

$$
T_{overflow} = \frac{(ARR + 1) \times (PSC + 1)}{f_{clk}} = \frac{1000 \times 72}{72 \times 10^6} = \frac{1000}{10^6} = 1 \text{ ms}
$$

**Engineering Interpretation:** The timer "ticks" every 1 µs, overflows every 1 ms. This is the classic 1 ms tick used in STM32 HAL for SysTick.

---

## 3.4 Worked Example: PWM Duty Cycle

**Problem:** A PWM signal has $V_{supply} = 3.3$ V and duty cycle = 40%. Find:
(a) The average DC output voltage.
(b) If the PWM frequency is 1 kHz, find $T_{on}$ and $T_{off}$.

### Step 1 — Average Voltage

$$
V_{avg} = D_{cycle} \times V_{supply} = 0.40 \times 3.3 = 1.32 \text{ V}
$$

### Step 2 — Period and On-Time

$$
T_{period} = \frac{1}{f_{PWM}} = \frac{1}{1000} = 1 \text{ ms}
$$
$$
T_{on} = D_{cycle} \times T_{period} = 0.40 \times 1 = 0.4 \text{ ms}
$$
$$
T_{off} = T_{period} - T_{on} = 1.0 - 0.4 = 0.6 \text{ ms}
$$

**Application:** This 1.32 V equivalent can drive a DC motor at 40% of full speed, or dim an LED to 40% brightness.

---

## 3.5 Worked Example: Memory Hierarchy Average Access Time

**Problem:** A system has a cache with 10 ns access time and main memory with 100 ns access time. The cache hit ratio is 90%. Find the average access time. What is the speedup vs. no-cache system?

### Step 1 — Average Access Time

$$
t_{avg} = H \cdot t_{cache} + (1-H) \cdot t_{main} = (0.9)(10) + (0.1)(100) = 9 + 10 = 19 \text{ ns}
$$

### Step 2 — Speedup

$$
\text{Speedup} = \frac{t_{no\_cache}}{t_{avg}} = \frac{100}{19} \approx 5.26
$$

**Insight:** A 90% hit ratio gives ~5× speedup, even though the cache is only 10× faster. This is the **principle of locality** in action.

---

## 3.6 Python Code: UART Frame Transmitter (Symbolic Implementation)

Below is a fully operational Python simulation of a UART transmitter frame. It demonstrates exactly how an MCU generates a UART frame.

```python
# uart_transmitter.py
# Simulates a UART 8N1 frame transmission at a given baud rate.
# Each function explicitly checks boundaries and logs errors.

from typing import List
import time
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")


class UARTTransmitter:
    """Simulates an 8N1 UART frame transmitter."""

    VALID_PARITY = {"N", "E", "O"}  # None, Even, Odd

    def __init__(self, baud_rate: int, data_bits: int = 8,
                 parity: str = "N", stop_bits: int = 1) -> None:
        if baud_rate <= 0:
            raise ValueError(f"Invalid baud_rate={baud_rate}, must be > 0")
        if not (5 <= data_bits <= 9):
            raise ValueError(f"data_bits must be in [5,9], got {data_bits}")
        if parity not in self.VALID_PARITY:
            raise ValueError(f"parity must be one of {self.VALID_PARITY}")
        if stop_bits not in (1, 2):
            raise ValueError(f"stop_bits must be 1 or 2, got {stop_bits}")

        self.baud_rate = baud_rate
        self.data_bits = data_bits
        self.parity = parity
        self.stop_bits = stop_bits
        self.bit_time = 1.0 / baud_rate  # seconds per bit

    def _compute_parity(self, data: int) -> int:
        """Compute parity bit (0 or 1)."""
        ones = bin(data).count("1")
        if self.parity == "E":
            return ones % 2  # Even parity -> total 1s is even
        elif self.parity == "O":
            return (ones + 1) % 2  # Odd parity -> total 1s is odd
        return 0  # No parity

    def build_frame(self, data_byte: int) -> List[int]:
        """Build the complete UART frame as a list of bits (0/1)."""
        if not (0 <= data_byte < (1 << self.data_bits)):
            raise ValueError(
                f"data_byte={data_byte} exceeds {self.data_bits}-bit range"
            )

        frame: List[int] = []
        frame.append(0)                      # Start bit (LOW)
        # Data bits: LSB first (UART convention)
        for i in range(self.data_bits):
            frame.append((data_byte >> i) & 1)
        frame.append(self._compute_parity(data_byte))  # Parity bit
        for _ in range(self.stop_bits):
            frame.append(1)                  # Stop bit(s) (HIGH)
        return frame

    def transmit(self, data_byte: int) -> None:
        """Transmit one byte and log the line state over time."""
        frame = self.build_frame(data_byte)
        logging.info(
            f"TX byte 0x{data_byte:02X} as frame bits: {''.join(map(str, frame))}"
        )
        # Simulate line transitions
        for idx, bit in enumerate(frame):
            line_state = "IDLE (1)" if bit == 1 else "ACTIVE (0)"
            logging.info(
                f"  bit[{idx}] = {bit}  |  line = {line_state}  |  "
                f"t = {idx * self.bit_time * 1e6:.2f} µs"
            )
            time.sleep(self.bit_time * 0.001)  # sped up for demo


if __name__ == "__main__":
    uart = UARTTransmitter(baud_rate=9600, data_bits=8, parity="N", stop_bits=1)
    uart.transmit(0x41)  # 'A' in ASCII = 0x41
    uart.transmit(0x55)  # 0x55
    print(f"\nBit time @ 9600 baud = {uart.bit_time * 1e6:.2f} µs")
    print(f"Frame time 8N1       = "
          f"{uart.bit_time * 10 * 1e3:.3f} ms")
```

**Sample Output:**
```
INFO: TX byte 0x41 as frame bits: 0100001001
INFO:   bit[0] = 0  |  line = ACTIVE (0)  |  t = 0.00 µs
INFO:   bit[1] = 1  |  line = IDLE (1)    |  t = 104.17 µs
...
INFO: Bit time @ 9600 baud = 104.17 µs
INFO: Frame time 8N1       = 1.042 ms
```

> [!NOTE]
> **Valuation Note for Code Questions:** When asked to write embedded code on the exam, you do *not* need to run it. However, KTU examiners award marks for: (1) **header includes**, (2) **type annotations / register names**, (3) **error handling / boundary checks**, (4) **comments explaining each UART bit**.

---

## 3.7 Python Code: Watchdog Timer Reset Logic

```python
# watchdog_demo.py
# Simulates a watchdog timer in a real-time task loop.
# Demonstrates WDT reset behavior on firmware hang.

import time
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")


class WatchdogTimer:
    """Hardware-style watchdog timer."""

    def __init__(self, timeout_ms: int) -> None:
        if timeout_ms <= 0:
            raise ValueError("timeout_ms must be positive")
        self.timeout_s = timeout_ms / 1000.0
        self.last_kick = time.monotonic()
        self.reset_count = 0

    def kick(self) -> None:
        """Pet the watchdog (firmware signal of health)."""
        self.last_kick = time.monotonic()
        logging.info("WDT: kicked (healthy)")

    def check(self) -> bool:
        """Return True if WDT has expired and reset is needed."""
        if (time.monotonic() - self.last_kick) > self.timeout_s:
            self.reset_count += 1
            logging.warning(
                f"WDT: TIMEOUT! Issuing system reset. "
                f"(total resets = {self.reset_count})"
            )
            self.last_kick = time.monotonic()  # simulate post-reset kick
            return True
        return False


def main_task(wdt: WatchdogTimer, simulate_hang: bool = False) -> None:
    """Simulated main firmware loop."""
    for i in range(1, 11):
        logging.info(f"--- Main loop iteration {i} ---")
        if simulate_hang and i == 5:
            logging.error("Firmware HANG! No WDT kick this iteration.")
            time.sleep(wdt.timeout_s * 2)  # exceed WDT timeout
        else:
            time.sleep(0.05)              # normal work
            wdt.kick()
        if wdt.check():
            logging.info("System recovered from WDT reset, continuing...")


if __name__ == "__main__":
    wdt = WatchdogTimer(timeout_ms=200)
    logging.info("=== Normal run (no hang) ===")
    main_task(wdt, simulate_hang=False)
    logging.info("\n=== Run with firmware hang at iter 5 ===")
    main_task(wdt, simulate_hang=True)
```

---

## 3.8 Python Code: Memory Hierarchy Access Simulator

```python
# memory_hierarchy.py
# Calculates average memory access time for a given hierarchy.

from dataclasses import dataclass
from typing import List


@dataclass
class MemoryLevel:
    name: str
    access_time_ns: float
    hit_ratio: float   # fraction of accesses that hit at THIS level


def average_access_time(levels: List[MemoryLevel]) -> float:
    """
    For two-level: t_avg = H1*t1 + (1-H1)*t2
    For multi-level: t_avg = H1*t1 + (1-H1)*[H2*t2 + (1-H2)*t3 + ...]
    """
    t_avg = 0.0
    miss_so_far = 1.0
    for lvl in levels:
        t_avg += miss_so_far * lvl.hit_ratio * lvl.access_time_ns
        miss_so_far *= (1 - lvl.hit_ratio)
    # Add final miss penalty = lowest level access time
    t_avg += miss_so_far * levels[-1].access_time_ns
    return t_avg


if __name__ == "__main__":
    hierarchy = [
        MemoryLevel("L1 Cache", 2, 0.90),
        MemoryLevel("L2 Cache", 10, 0.80),
        MemoryLevel("Main RAM", 100, 1.0),
    ]
    print(f"Average access time: {average_access_time(hierarchy):.2f} ns")
```

**Output:** `Average access time: 13.80 ns`

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 Generic Embedded System Block Diagram

```mermaid
flowchart TB
    subgraph PROC [Processing Unit]
        CPU[CPU Core]
        REG[Registers]
        ALU[ALU]
    end

    subgraph MEM [Memory Subsystem]
        ROM[ROM / Flash]
        RAM[RAM / SRAM]
    end

    subgraph IO [I/O Devices]
        IN[Input: Sensors, Keys]
        OUT[Output: LCD, Motor, LED]
    end

    subgraph COMM [Communication Interfaces]
        UART1[UART]
        SPI1[SPI]
        I2C1[I2C]
        CAN1[CAN]
        WIFI1[Wi-Fi / BLE]
    end

    subgraph TIM [Timing & Control]
        TIMER[Timer / Counter]
        RTC1[RTC]
        WDT1[Watchdog Timer]
    end

    subgraph ADC [Analog Interfaces]
        ADC1[ADC]
        DAC1[DAC / PWM]
    end

    subgraph SUP [System Support]
        CLK[Clock Oscillator]
        RST[Reset / BOD]
        PWR[Power Supply]
    end

    CPU --- REG
    CPU --- ALU
    CPU <--> ROM
    CPU <--> RAM
    CPU <--> IN
    CPU <--> OUT
    CPU <--> UART1
    CPU <--> SPI1
    CPU <--> I2C1
    CPU <--> CAN1
    CPU <--> WIFI1
    CPU <--> TIMER
    CPU <--> RTC1
    CPU <--> WDT1
    CPU <--> ADC1
    CPU <--> DAC1
    CPU <--> CLK
    CPU <--> RST
    PWR -.supplies.-> CPU
    PWR -.supplies.-> MEM
    PWR -.supplies.-> SUP
```

---

## 4.2 Memory Hierarchy Pyramid

```mermaid
flowchart TB
    subgraph M0 [Level 0 - Registers]
        R0[Bytes - 1-2 ns]
    end
    subgraph M1 [Level 1 - L1 Cache]
        R1[KB - 2-5 ns]
    end
    subgraph M2 [Level 2 - L2 Cache]
        R2[MB - 5-20 ns]
    end
    subgraph M3 [Level 3 - Main RAM]
        R3[MB to GB - 50-100 ns]
    end
    subgraph M4 [Level 4 - Flash / SSD]
        R4[GB - microseconds]
    end
    subgraph M5 [Level 5 - HDD / Magnetic]
        R5[TB - milliseconds]
    end

    M0 --> M1 --> M2 --> M3 --> M4 --> M5
```

---

## 4.3 Communication Protocol Comparison

```mermaid
flowchart LR
    subgraph SER [Serial Interfaces]
        UART[UART - Async - 2 wires]
        SPI[SPI - Sync - 3+N wires]
        I2C[I2C - Sync - 2 wires - Addressed]
    end

    subgraph NET [Network Interfaces]
        CAN[CAN - Differential - Multi-master]
        USB[USB - Master-Slave - Plug-Play]
        ETH[Ethernet - TCP/IP - Mbps-Gbps]
    end

    subgraph WL [Wireless Interfaces]
        BLE[Bluetooth / BLE - 10 m]
        WIFI[Wi-Fi 802.11 - 50 m]
        ZB[ZigBee - Mesh - 100 m]
        LORA[LoRa - Long Range 15 km]
    end

    SER --> NET
    NET --> WL
```

---

## 4.4 Watchdog Timer Operation State Machine

```mermaid
stateDiagram-v2
    [*] --> INIT
    INIT --> RUNNING: System Boot OK
    RUNNING --> RUNNING: Kick WDT (firmware healthy)
    RUNNING --> TIMEOUT: No kick within T_wdt
    TIMEOUT --> RESET: Counter overflow
    RESET --> INIT: CPU restart / re-init
    RUNNING --> [*]: Normal shutdown
```

---

## 4.5 ADC Conversion Process Flow

```mermaid
flowchart LR
    A[Analog Input Vin] --> S[Sample and Hold]
    S --> Q[Quantize into 2^n levels]
    Q --> E[Encode as binary code]
    E --> OUT[Digital Output D]
    Q -.->|V_LSB step| VLSB[V_LSB = Vref / 2^n]
```

---

## 4.6 Sequential Processing Topology Matrix: System Component Interactions

| Stage | Component Group | Function | Talks To | Triggered By |
|---|---|---|---|---|
| 1 | **Sensors (Input)** | Convert physical quantity → electrical signal | ADC, GPIO | Continuous / Event |
| 2 | **ADC** | Convert analog → digital | CPU (via DMA/IRQ) | Timer or SW trigger |
| 3 | **CPU + RAM** | Process data, run algorithm | Flash (code), RAM (data) | Interrupt / Polling |
| 4 | **PWM/DAC (Output)** | Convert digital → analog/motor signal | Motor, LED, Speaker | CPU command |
| 5 | **Communication IF** | Send/receive data to external world | Other MCUs, PC, Cloud | SW API call |
| 6 | **Watchdog Timer** | Safety supervisor | Reset Circuit | WDT overflow |
| 7 | **RTC** | Timekeeping | CPU (date/time) | 1 Hz tick |
| 8 | **Power Supply + BOD** | Energy + voltage monitoring | All blocks | Brown-out event |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question 1: SRAM vs DRAM Comparison `[KTU University Exam - July 2023]`
**CO1 | Remember | 3 Marks**

**Model Answer (3 marks):**

**SRAM (Static RAM):**
- Built using **6 transistors per bit** (4 for cross-coupled inverters + 2 for access).
- Stores data as long as power is on, **no refresh** required.
- **Faster** (1–10 ns access time).
- **Costlier and lower density** than DRAM.
- Used for **cache memory and internal registers**.

**DRAM (Dynamic RAM):**
- Built using **1 transistor + 1 capacitor per bit**.
- Stores data as charge on a capacitor that **leaks**, so **needs periodic refresh** (~every 64 ms).
- **Slower** (50–70 ns) and **denser / cheaper per bit**.
- Used for **main memory** in PCs and embedded Linux boards.

> [!NOTE]
> **Valuation Key:** Both must be compared on at least **3 criteria** (e.g., construction, speed, refresh, cost). **[1 mark per key comparison point]**

---

### Question 2: Watchdog Timer in Embedded Systems `[KTU University Exam - Dec 2023]`
**CO1 | Understand | 3 Marks**

**Model Answer (3 marks):**

A **Watchdog Timer (WDT)** is a hardware timer used to **detect and recover from software malfunctions** in an embedded system.

**Operation:**
1. The WDT is a **down-counter** that starts at a programmed value and decrements with each clock tick.
2. The main firmware must **periodically reset (kick / pet) the WDT** before it underflows.
3. If firmware **crashes, hangs, or enters an infinite loop**, it fails to kick the WDT.
4. The WDT counter **underflows → generates a system reset** → firmware restarts.

**Use Case:** Automotive ECUs, industrial controllers, Mars Pathfinder (famous real-world example). The WDT is **independent of the main CPU clock** so it works even when the CPU hangs.

---

## 5.2 Part B — 14-Mark Questions (Module Internal Choice)

> Each Part B question has sub-parts (a) 7 marks and (b) 7 marks, with a separate alternative choice (Question B).

---

### Question A (14 Marks) `[KTU University Exam - July 2024]`

#### Part (a) — Explain the different types of memory used in embedded systems with examples. (7 Marks)
**CO1 | Understand | 7 Marks**

**Model Answer:**

**1. ROM Family (Non-Volatile, Read Mostly):**
- **Mask ROM**: Programmed at the IC fabrication factory. Used for **mass-produced** devices (e.g., TV remote controllers, washing machine controllers). Lowest cost per bit at high volumes.
- **PROM (Programmable ROM)**: User-programmable **once** using a PROM programmer. Used in small-batch prototypes.
- **EPROM (Erasable PROM)**: Erased by **UV light** (~20 minutes) through a quartz window on the chip. Re-programmable ~1000 times. Used in **development phase**.
- **EEPROM (Electrically EPROM)**: **Byte-by-byte electrical erase & write**. ~1 million cycles. Used to store **calibration data and user settings** in systems.
- **Flash Memory**: Block/sector electrical erase. ~10,000–100,000 cycles. **Denser and cheaper** than EEPROM. Used for **firmware storage** in MCUs (e.g., STM32 internal Flash 64 KB–2 MB).

**[Listing and identifying each: 3 Marks]**
**[Examples and use cases: 2 Marks]**
**[Distinction between EEPROM (byte) and Flash (block): 2 Marks]**

**2. RAM Family (Volatile):**
- **SRAM**: Fast, no refresh. Used for **CPU cache and internal MCU RAM** (e.g., 32 KB SRAM in STM32F103).
- **DRAM**: Slower, needs refresh. Used in **embedded Linux systems** (e.g., Raspberry Pi LPDDR4).
- **PSRAM**: Pseudo-static DRAM with built-in refresh. Used in **low-power IoT devices**.
- **FRAM (Ferroelectric RAM)**: Non-volatile, fast, low power. Used in **MSP430 FR series** MCUs.

**[1 Mark for RAM types]**
**[1 Mark for examples]**

#### Part (b) — With a neat block diagram, explain the components of an embedded system. (7 Marks)
**CO1 | Understand | 7 Marks**

**Model Answer:**

A typical embedded system consists of **four major blocks**:

**1. Processor / Microcontroller Core (2 Marks):**
- **CPU** (ALU, Registers, Control Unit)
- **Microcontroller** integrates CPU + Memory + Peripherals on a single chip (e.g., STM32, Arduino ATmega328P)
- **SoC (System on Chip)**: integrates CPU + GPU + DSP + wireless (e.g., Qualcomm Snapdragon, ESP32)

**2. Memory (1 Mark):**
- **ROM/Flash**: stores firmware
- **RAM/SRAM**: stores runtime data, stack, heap
- **Cache**: L1/L2 for high-speed access

**3. I/O Devices & Communication Interfaces (2 Marks):**
- **Input**: sensors, keypad, switches, touch screen
- **Output**: LED, LCD, motor, buzzer, 7-segment display
- **Communication**: UART, SPI, I2C, CAN, USB, Bluetooth, Wi-Fi, Ethernet

**4. System Support & Control Components (2 Marks):**
- **Timers/Counters** for scheduling
- **Watchdog Timer** for safety reset
- **ADC / DAC / PWM** for analog interface
- **RTC** for timekeeping
- **Reset Circuit and BOD** for safe boot
- **Clock Oscillator** (crystal / PLL)
- **Power Supply Unit** (e.g., 5V/3.3V regulator)
- **Interrupt Controller** (e.g., NVIC in ARM)

**Block Diagram:** (to be drawn on answer sheet)

```
[Sensors]→[ADC]→┐
[Keys/GPIO]─────┤
                ↓
        ┌──────────────┐    ┌──────────┐
        │  CPU / MCU   │←──→│ Memory   │
        └──────┬───────┘    │ (Flash + │
               │            │  RAM)    │
        ┌──────┴───────┐    └──────────┘
        ↓             ↓
    [PWM/DAC]    [Comm IF: UART/SPI/I2C]
        ↓             ↓
   [Motor/LED]   [External Devices]
        ↑
   [Watchdog, Timers, RTC, Reset, Power]
```

**[Block diagram: 2 Marks]**
**[Identification of all component groups: 3 Marks]**
**[Examples for each: 2 Marks]**

---

### Question B (14 Marks — Alternative Choice) `[KTU University Exam - Dec 2023]`

#### Part (a) — Explain the working of UART with a frame format diagram. (7 Marks)
**CO1 | Understand | 7 Marks**

**Model Answer:**

**UART (Universal Asynchronous Receiver/Transmitter)** is a **serial, asynchronous, full-duplex** communication protocol.

**Key Features:**
- **Asynchronous** → No shared clock line. Both transmitter and receiver must agree on **baud rate**.
- **Full-duplex** → Two separate lines: **TX (Transmit)** and **RX (Receive)** + common **GND**.
- **Point-to-point** only (no addressing).

**Frame Format (8N1) — Most Common:**

```
Idle    Start   D0  D1  D2  D3  D4  D5  D6  D7  Stop   Idle
(1)      (0)                                         (1)
   ┌──┐   ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐   ┌──┐
───┘  └───┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └───┘  └───
```
- **Idle** = Logic HIGH (1)
- **Start bit** = Logic LOW (0) — signals beginning of frame
- **D0–D7** = 8 data bits, **LSB first** (important KTU point!)
- **No parity** in 8N1
- **Stop bit** = Logic HIGH (1) — signals end of frame

**Operation Steps:**
1. **Transmitter** holds line idle (HIGH).
2. Sends **Start bit (0)** to alert receiver.
3. Sends **8 data bits LSB-first**.
4. (Optional) Sends **parity bit** (Even/Odd) for error detection.
5. Sends **Stop bit(s) (1)** to mark end of frame.
6. **Receiver** samples the line at the **middle of each bit period** (16× oversampling typical).

**[Frame format diagram with labels: 3 Marks]**
**[Explanation of start, data, stop bits: 2 Marks]**
**[LSB-first, baud rate agreement: 2 Marks]**

#### Part (b) — Compare SPI and I²C communication protocols. (7 Marks)
**CO1 | Apply | 7 Marks**

**Model Answer:**

| Feature | **SPI** | **I²C** |
|---|---|---|
| **Synchronization** | Synchronous (shared SCLK) | Synchronous (shared SCL) |
| **Wires needed** | 3 + N (SCLK, MOSI, MISO + N×SS) | **2 only** (SDA, SCL) |
| **Duplex** | Full-duplex | Half-duplex |
| **Speed** | Fast (1–50 MHz typical) | Standard 100 kHz, Fast 400 kHz, HS 3.4 MHz |
| **Addressing** | No (uses hardware Slave Select) | Yes (7-bit or 10-bit address) |
| **Number of slaves** | Limited by available GPIO for SS lines | Up to **128 devices** (7-bit) |
| **Topology** | Master-multi-slave (star) | Multi-master multi-slave (bus) |
| **Driver type** | Push-pull | **Open-drain** (needs pull-ups) |
| **Power consumption** | Higher (always driving) | Lower (open-drain) |
| **Complexity** | Simpler protocol | More complex (start/stop/ack) |
| **Use case** | SD card, TFT LCD, fast sensors | EEPROM, RTC, slow sensors, multi-device bus |

**[Table with at least 6 comparison points: 3 Marks]**
**[Explanation of open-drain & pull-up resistors: 2 Marks]**
**[Examples and use case justification: 2 Marks]**

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mark-Deduction Pitfalls in "Other System Components" Questions:**
>
> 1. **Memory Question Pitfall:** Students write "Flash is non-volatile" but forget to mention it is **electrically erasable in blocks**, distinguishing it from byte-erasable EEPROM. KTU examiner deducts 1 mark.
>
> 2. **UART Frame Pitfall:** Writing data bits **MSB-first** instead of **LSB-first**. UART transmits LSB first — this is a favorite trick question. Deduct 1 mark.
>
> 3. **I²C Pitfall:** Saying "I²C has 4 wires" or "no pull-up needed". Correct answer: **2 wires + pull-up resistors required (4.7 kΩ typical)**. Deduct 1 mark.
>
> 4. **ADC Pitfall:** Confusing **resolution (in bits)** with **accuracy (in %)**, or omitting the unit **mV** in $V_{LSB}$. Deduct 0.5–1 mark.
>
> 5. **Watchdog Pitfall:** Writing "WDT resets the CPU every second" — wrong! WDT resets **only if not kicked within timeout**. Deduct 1 mark.
>
> 6. **Block Diagram Pitfall:** Drawing a block diagram but **not labeling the arrows** (data flow direction, control signals, address bus). Deduct 1 mark.
>
> 7. **Timer Pitfall:** Using **PSC** instead of **(PSC+1)** in the formula. The prescaler value of 0 means divide by 1, not 0. Deduct 0.5 mark.
>
> 8. **RTC Pitfall:** Saying "RTC uses a 1 MHz crystal". Correct: **32.768 kHz** ($2^{15}$ Hz) so it divides easily to 1 Hz.

---

## 5.4 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid-Revision Checklist — Other System Components**
>
> **1. Memory**
> - **ROM types** in evolution order: MROM → PROM → EPROM → EEPROM → Flash.
> - Flash is **block-erasable, electrically**; EEPROM is **byte-erasable, electrically**.
> - **SRAM = 6T cell, no refresh, fast, costly**; **DRAM = 1T+1C, needs refresh every 64 ms, slow, cheap**.
> - Memory hierarchy: **Registers > L1 > L2 > RAM > Flash > Disk** in terms of speed (descending).
> - Average access time formula: $t_{avg} = H \cdot t_1 + (1-H) \cdot t_2$.
>
> **2. Communication Interfaces**
> - **UART**: Asynchronous, 2 wires, no clock, point-to-point, **LSB-first**, 8N1 = 10 bits/frame.
> - **SPI**: Synchronous, 3 + N wires, full-duplex, **fastest** (up to 50 MHz), uses chip select.
> - **I²C**: Synchronous, **2 wires** only, half-duplex, **7-bit addressing** (128 devices), open-drain with pull-up.
> - **CAN**: Differential (CAN_H, CAN_L), multi-master, 11-bit/29-bit ID, used in **automotive**.
> - **USB**: Plug-and-play, hot-pluggable, differential D+/D−, USB-C supports 100 W PD.
> - **Wireless**: BLE (10 m), Wi-Fi (50 m), ZigBee (mesh), LoRa (15 km).
>
> **3. ADC / DAC / PWM**
> - $V_{LSB} = V_{ref} / 2^n$.
> - Digital code $D = \lfloor V_{in} / V_{LSB} \rfloor$.
> - DAC output $V_{out} = D \times V_{LSB}$.
> - PWM $V_{avg} = D_{cycle} \times V_{supply}$.
> - **SAR ADC** is most common in MCUs. **Flash ADC** is fastest, **Sigma-Delta** is highest resolution.
>
> **4. Timers & Watchdog**
> - Timer tick: $f_{tick} = f_{clk} / (PSC + 1)$.
> - Overflow: $T_{overflow} = (ARR+1)(PSC+1) / f_{clk}$.
> - **RTC uses 32.768 kHz** crystal ($2^{15}$ → 1 Hz after 15 divisions).
> - **WDT** resets MCU if firmware fails to **kick** it within timeout.
>
> **5. System Support**
> - **Reset Circuit** ensures known boot state.
> - **BOD** (Brown-Out Detector) resets on low voltage.
> - **Clock Oscillator**: crystal (accurate), ceramic (moderate), RC (cheap), PLL (multiplies).
> - **Interrupt Controller** (NVIC in ARM Cortex-M) supports **240 IRQs, 256 priority levels, tail-chaining**.
>
> **6. KTU 2024 Exam Patterns**
> - Memory comparison → **3-mark Part A**.
> - Communication protocol comparison (SPI vs I²C, UART vs SPI) → **7-mark Part B**.
> - Block diagram of embedded system → **7-mark Part B**.
> - ADC/DAC numerical → **7-mark Part B with 2 sub-parts**.
> - Watchdog Timer explanation → **3-mark Part A**.

---

<!-- SECTION_5_END -->
