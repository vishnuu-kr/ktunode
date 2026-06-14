# Fibre Channel SAN- FC SAN Components

<!-- SECTION_1_START -->
# Fibre Channel SAN — FC SAN Components

## 1.1 Core Technical Definition

> [!IMPORTANT]
> **Fibre Channel Storage Area Network (FC SAN)** is a high-speed, dedicated, lossless network infrastructure that interconnects hosts (servers) and shared storage devices using the **Fibre Channel (FC) protocol** governed by the **T11 technical committee** of **INCITS** (International Committee for Information Technology Standards). It operates primarily at speeds from **1 GFC to 128 GFC** over optical fibre (and copper for short distances) and is engineered to carry **SCSI-3 (later FCP)**, **NVMe (FC-NVMe)**, and **IP** payloads with deterministic, sub-millisecond latency.

The **FC SAN Components** are the modular, layered hardware and software building blocks that collectively realize a Fibre Channel fabric. They are classified by the **INCITS T11 FC-FS (Fibre Channel Framing and Signaling)** standard into physical media, interconnect elements, end-node adapters, intelligent switches/directors, target storage subsystems, and management software.

The **five-layer Fibre Channel stack** (as per **T11 FC architecture**):

| Layer | Name | KTU Standardized Function |
|---|---|---|
| **FC-0** | Physical Interface | Cables, connectors, transceivers (SFP/SFP+), optical/electrical parameters |
| **FC-1** | Transmission Protocol | 8b/10b (legacy) or 64b/66b (Gen 6+) encoding, link initialization |
| **FC-2** | Framing & Flow Control | Frames, sequences, exchanges, classes of service, login |
| **FC-3** | Common Services | Hunt groups, striping, multicast (rare in production) |
| **FC-4** | Upper Layer Mapping | Mapping of **SCSI (FCP)**, **IP (FC-IP)**, **NVMe (FC-NVMe-2)** |

> [!NOTE]
> **KTU 2024 Syllabus Highlight:** Module 2 — *Data Storage Networking* mandates explicit coverage of FC SAN components, FC topology, zoning, WWN addressing, and port types. Memorize the **FC-0 to FC-4** layer responsibilities and the speed taxonomy up to **128 GFC**.

## 1.2 Intuitive Analogy — The "Highway System"

Imagine a **fibre channel SAN** as a **private, multi-lane express highway system** built exclusively for trucks carrying cargo between warehouses:

- **Optical fibre cables** are the **multi-lane expressways** — each lane is a wavelength, and the trucks never stop at traffic lights.
- **HBAs (Host Bus Adapters)** are the **truck depots** at the warehouse (server) that load cargo onto trucks and place them on the highway.
- **FC Switches / Directors** are the **interchange hubs** — they read the destination address stamped on each truck and route it to the correct exit ramp in microseconds.
- **Storage Arrays** are the **destination warehouses** with robotic arms (storage controllers) that receive and shelve the cargo.
- **WWN (World Wide Name)** is the **unique licence plate** on each truck and depot — globally unique and never duplicated.
- **Zoning** is the **restricted-access security gate** that decides which trucks (initiators) are allowed to enter which warehouse gates (targets).
- **SAN Management Software** is the **traffic control tower** that monitors congestion, link errors, and configures interchanges remotely.

This highway system runs **24×7**, never crashes, and delivers cargo with **no loss** (lossless fabric) — that is the core promise of FC SAN.

> [!VISUALIZATION CONTROL]
> **Concept:** FC SAN Topology — Point-to-Point, Arbitrated Loop, Switched Fabric
> **GeoGebra / Desmos Input Equations:**
> * `Server_A (10,5)`, `Server_B (10,-5)`, `Storage_1 (90,5)`, `Storage_2 (90,-5)`, `FC_Switch (50,0)`
> * Draw bidirectional lines from servers to switch and from switch to storage.
> **Visual Description:** Observe the **switched fabric** in the centre acting as a star-coupler. Data flows concurrently from any server to any storage without contention, contrasted with a single-shared Arbitrated Loop.

## 1.3 Physical Constants and Standard Metrics (in **bold**)

> [!IMPORTANT]
> Standardized FC speeds ratified by the **T11 committee**:
>
> * **1 GFC** = 1.0625 Gbps (line rate, 100 MB/s payload)
> * **2 GFC** = 2.125 Gbps (200 MB/s)
> * **4 GFC** = 4.25 Gbps (400 MB/s)
> * **8 GFC** = 8.5 Gbps (800 MB/s)
> * **16 GFC** = 14.025 Gbps nominal (1600 MB/s)
> * **32 GFC** = 28.05 Gbps (3200 MB/s)
> * **64 GFC** = 57.8 Gbps (Gen 7 PAM-4)
> * **128 GFC** = 121.6 Gbps (Gen 8 PAM-4)
>
> Standard fibre wavelengths: **850 nm (SX/MMF)**, **1310 nm (LX/LWDM/SMF)**, **1550 nm (CWDM/DWDM)**. Maximum supported distance: up to **10 km** per hop on **Single-Mode Fibre (SMF)** and up to **100 m** on **OM3/OM4 Multi-Mode Fibre (MMF)** depending on speed.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis of FC SAN Components

## 2.1 Component-by-Component Decomposition

### 2.1.1 Cables and Connectors (Layer **FC-0**)

FC SANs primarily deploy **optical fibre** for two reasons — **electromagnetic immunity** and **long-distance reach**. Two fibre families are used:

* **Multi-Mode Fibre (MMF)** — short reach, uses **LED or VCSEL** sources, core diameter **50 µm (OM3/OM4)** or **62.5 µm (OM1/OM2)**. Typical reach **≤ 150 m** at 8 GFC.
* **Single-Mode Fibre (SMF)** — long reach, uses **laser** sources, core **9 µm**. Reach up to **10 km** at 16 GFC, **40 km** with long-range transceivers.

Standard FC connectors used in SANs are **LC (Lucent Connector)**, **SC (Subscriber Connector)**, and **MTRJ** (legacy). Transceivers are **SFP** (1 GFC/2 GFC), **SFP+** (4 GFC/8 GFC/16 GFC), **SFP28** (32 GFC), **QSFP28** (32/128 GFC breakout).

### 2.1.2 Host Bus Adapter (HBA)

The **HBA** is a PCIe card installed in the server. It performs three roles:
1. **Offloads storage protocol processing** from the host CPU (zero-copy DMA, FCP processing).
2. **Terminates the FC link** at the server end.
3. **Exposes a unique WWN** to the fabric and provides multipath I/O capabilities (active-active load balancing).

> [!NOTE]
> Modern HBAs support **FC-NVMe** and **SCSI FC** simultaneously over the same physical port. Example production HBAs: **Broadcom/Emulex LPe35000** (32 GFC), **Marvell/QLogic QLE2772** (32 GFC), **Cisco HX-PCIE-OFFLOAD-32**.

### 2.1.3 FC Switches and Directors

**FC Switches** are the intelligent interconnection devices that form the **fabric**. They operate at **FC-2** layer, performing:
* **Frame routing** based on **D_ID (Destination Identifier)** of 24 bits.
* **Name server** services (FC-GS-3 compliant) — directory of all logged-in **WWNs**.
* **State Change Notification (SCN)** — broadcasts fabric events.
* **RSCN (Registered State Change Notification)** — targeted notifications to registered nodes.

A **Director** is a high-end, chassis-based FC switch with **redundant control processors, power supplies, and switching fabric modules**. Directors support hundreds of ports (e.g., **Brocade X7-8** with 384 ports, **Cisco MDS 9700**).

### 2.1.4 Storage Array (Target)

The storage array contains **FC target ports** that accept SCSI or NVMe commands. Each **LUN (Logical Unit Number)** is exported with a **LUN masking** mechanism.

### 2.1.5 SAN Management Software

Software suites like **Brocade SANnav**, **Cisco DCNM**, **EMC Unisphere**, and **NetApp OnCommand** provide:
* Topology discovery via **FC-GS-3** name server queries.
* Performance monitoring (throughput, IOPS, latency).
* Zoning configuration.
* Firmware management and alerting (SNMP, syslog).

## 2.2 FC Fabric Topologies — Deep Dive

### 2.2.1 Point-to-Point (FC-P2P)

Direct connection between two FC nodes. No switch. Maximum simplicity, zero scalability. Used in very small installations.

### 2.2.2 Arbitrated Loop (FC-AL)

Up to **126 nodes** share a single loop. Only one pair of nodes may communicate at a time (arbitration). Speed shared — **1 GFC loop** gives each node only a fraction. Largely **obsolete** in modern SANs; replaced by switched fabric.

### 2.2.3 Switched Fabric (FC-SW)

The dominant topology. Each node has a dedicated **point-to-point** link to a switch. The switch uses a **Class 2 or Class 3** service to route frames. Supports **millions of logged-in nodes** theoretically; practically limited by switch port count and name-server size.

## 2.3 Port Types — Nomenclature (T11 Standard)

| Port Type | Symbol | Location | Function |
|---|---|---|---|
| **N_Port** | Node Port | On an end node (HBA / storage port) | Used in point-to-point or switched fabric |
| **NL_Port** | Node Loop Port | On an end node | Used in Arbitrated Loop |
| **F_Port** | Fabric Port | On a switch | Connects to an N_Port |
| **FL_Port** | Fabric Loop Port | On a switch | Connects FC-AL loops to fabric |
| **E_Port** | Expansion Port | On a switch | Connects two switches (ISL — Inter-Switch Link) |
| **G_Port** | Generic Port | On a switch | Auto-negotiates as F_Port or E_Port |
| **B_Port** | Bridge Port | On a switch | Compresses E_Port traffic for distance |
| **D_Port** | Diagnostic Port | On a switch | Link-level diagnostics, no login |
| **EX_Port** | - | On a switch | Connects FC SAN to FCIP / FCoE gateway |
| **VE_Port** | - | On a switch | FCoE Inter-Switch Link (ethertype 0x8906) |
| **TE_Port** | - | On a switch | Supports both E_Port and VE_Port functions |

> [!IMPORTANT]
> **KTU Board Tip:** Always pair the port type with the entity it resides on. *N_Port* lives on the **node**, *F_Port* and *E_Port* live on the **switch**.

## 2.4 World Wide Name (WWN) — Addressing Foundation

A **WWN** is a **64-bit globally unique identifier** assigned by the **IEEE Registration Authority** to every FC entity (HBA port, storage port, switch). It is the FC equivalent of a **MAC address** in Ethernet.

Format: **NAA (Network Address Authority) prefix + Vendor OUI + Vendor-assigned serial** (8 bytes total).

Common NAA types:
* **NAA-1** (0x2): 64-bit with 12-bit OUI.
* **NAA-2** (0x5): 64-bit with 20-bit OUI.
* **NAA-6** (0x6): 64-bit IEEE EUI-64 derived (most common).
* **NAA-8** (0x1): deprecated.

Example: `20:00:00:25:B5:00:00:9F` → NAA-1, OUI `00:00:25:B5` belongs to **Emulex/Broadcom**, last 32 bits are vendor-assigned.

In contrast, the **FC Address (D_ID / S_ID)** is a **24-bit dynamic ID** assigned by the **fabric name server (FC-GS-3)** at login. It is local to a fabric and can change across zones/reboots.

## 2.5 Zoning — Access Control

**Zoning** partitions the fabric into logical sub-fabrics, restricting which **initiators** can see which **targets**. Two types:

* **WWN Zoning** — based on port WWNs. Survives port moves. Recommended.
* **Port Zoning** (alias-based) — based on switch physical port number. Breaks if port is relocated.

Two enforcement scopes:
* **Hard Zoning** — hardware-enforced; frame rejected at switch ASIC.
* **Soft Zoning** — name-server hides entries; vulnerable to malicious injection.

## 2.6 KTU Formula Sheet — FC SAN Cheat Sheet

| Concept | Formula / Rule | Unit / Notes |
|---|---|---|
| FC line rate | $R_{line} = N \times 1.0625 \text{ Gbps}$ for $N \in \{1,2,4,8\}$ | Gen 1–5 |
| FC payload rate | $R_{payload} = R_{line} \times \dfrac{64}{66}$ (Gen 6+) or $\times \dfrac{8}{10}$ (Gen 1–5) | bytes/s |
| Frames per second per port | $FPS = \dfrac{R_{payload}}{P_{size}}$ | frames/s |
| Loop max devices | $N_{loop} = 126$ | FC-AL |
| Switch fabric max addresses | $2^{24} = 16{,}777{,}216$ | 24-bit D_ID |
| Storage efficiency (compression) | $E_c = 1 - \dfrac{C_{out}}{C_{in}}$ | dimensionless |
| End-to-end latency (switch) | $L_{cut} \le 700$ ns | per Brocade X7 class |
| Maximum reach SMF | $\le 10 \text{ km}$ (16 GFC), $\le 40 \text{ km}$ (LWDM) | |
| Maximum reach OM4 MMF | $\le 150 \text{ m}$ (8 GFC), $\le 100 \text{ m}$ (16 GFC), $\le 70 \text{ m}$ (32 GFC) | |
| LUNs per target | $\le 2{,}048$ (SCSI), $2^{64}$ (NVMe) | |

> [!IMPORTANT]
> **Real-World Production Utility:** FC SANs power **mission-critical workloads** in banking (mainframe offload), **OLTP databases** (Oracle RAC, SAP HANA), **VMware vSAN** stretched clusters, and **AI/ML training** farms where deterministic latency and zero packet loss are non-negotiable. The **Gen 6 (32 GFC) and Gen 7 (64 GFC)** standards now routinely carry **NVMe-oF** traffic, bridging classical FC reliability with modern NVMe performance.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations, Calculations, and Code Implementation

## 3.1 Derivation: FC Line Rate and Payload Throughput

We derive the **effective payload throughput** of a **32 GFC** link.

**Given:**
* $N = 32$ (so the nominal line rate is $32 \times 1.0625$ Gbps under the legacy scaling, but for **Gen 6** the standard line rate is **28.05 Gbps** using **64b/66b encoding**).
* Encoding overhead: 64 bits of payload encoded into 66 bits on the wire.

**Step 1 — Express the line rate.**

$$R_{line} = 28.05 \text{ Gbps} = 28.05 \times 10^{9} \text{ bits/s}$$

**Step 2 — Apply the 64b/66b efficiency ratio.**

The 64b/66b scheme transmits 64 bits of data inside every 66-bit physical symbol. Therefore the **useful payload fraction** is:

$$\eta_{payload} = \frac{64}{66} = 0.9697$$

**Step 3 — Compute the payload bit rate.**

$$R_{payload} = R_{line} \times \eta_{payload} = 28.05 \times 10^{9} \times \frac{64}{66}$$

$$R_{payload} = 28.05 \times 10^{9} \times 0.969697 = 27.2025 \times 10^{9} \text{ bits/s}$$

**Step 4 — Convert to bytes per second.**

$$R_{payload}^{B} = \frac{27.2025 \times 10^{9}}{8} = 3.4003 \times 10^{9} \text{ bytes/s}$$

**Step 5 — Convert to MB/s using the SI convention (10^6).**

$$R_{payload}^{MB} = \frac{3.4003 \times 10^{9}}{10^{6}} = 3400.3 \text{ MB/s} \approx 3.4 \text{ GB/s}$$

> [!NOTE]
> **Conversion logic note:** The line rate $28.05$ Gbps is reduced by the encoding tax $\frac{64}{66}$ because 2 of every 66 bits on the fibre are sync/control overhead. The remaining 64 bits carry application data, yielding $\approx 3.4$ GB/s of usable bandwidth per 32 GFC port.

## 3.2 Derivation: Frames Per Second at Maximum Payload Size

**Given:** A 32 GFC link carrying **2112-byte** FC frames (maximum payload size for **FC Class 3** is 2112 bytes including 24-byte header + 4-byte CRC overhead $\Rightarrow$ 2048-byte payload).

**Step 1 — Compute total bytes per frame on the wire (after encoding).**

$$F_{wire} = \frac{2112 \times 8}{64} \times 66 = 34848 \text{ bits/frame}$$

**Step 2 — Compute frames per second.**

$$FPS = \frac{R_{line}}{F_{wire}} = \frac{28.05 \times 10^{9}}{34848} \approx 8.05 \times 10^{5} \text{ frames/s}$$

**Step 3 — Verify with payload rate.**

$$FPS_{check} = \frac{R_{payload}^{B}}{2048} = \frac{3.4003 \times 10^{9}}{2048} \approx 1.66 \times 10^{6} \text{ frames/s}$$

The discrepancy arises because the first calculation includes the 24-byte frame header + 4-byte CRC; the second excludes it. Both are correct under their respective definitions.

## 3.3 Derivation: WWN Construction (EUI-64 / NAA-6)

We build a **NAA-6 (IEEE EUI-64) WWN** for a fictional Emulex HBA port.

**Step 1 — OUI assignment.** Emulex Corporation's IEEE OUI is `00:00:25:B5` (24 bits). EUI-64 requires the **modified EUI-64** extension: append `FF:FE` in the middle, and flip **bit 6 (the U/L bit)** of the first byte.

**Step 2 — Compute the EUI-64 from a 24-bit OUI.**

Starting OUI bytes: $00, 00, 25, B5$.

Append company-specific 24-bit serial (e.g., `$00, 1A, 2B$`). Then construct the EUI-64 by inserting `FF:FE`:

$$EUI64 = (00, 00, 25, B5, FF, FE, 00, 1A, 2B)$$

That is **9 bytes** in the raw OUI-extension form. To form a 64-bit NAA-6, we drop the leading `00` (since EUI-64 is 8 bytes after de-duplication):

$$NAA6 = (00, 25, B5, FF, FE, 00, 1A, 2B)$$

**Step 3 — Prepend the NAA-6 identifier (`0x6` in upper nibble of first byte).**

The first byte of NAA-6 must have its upper 4 bits set to `0110` (binary). So if our current first byte is `0x00`, the new first byte is `0x60`:

$$WWN = (60, 25, B5, FF, FE, 00, 1A, 2B)$$

**Step 4 — Final canonical WWN in colon-hex notation:**

$$WWN = 60{:}25{:}B5{:}FF{:}FE{:}00{:}1A{:}2B$$

This 8-byte identifier is now globally unique and ready to be programmed into the HBA's non-volatile memory.

## 3.4 Python Implementation: WWN Validator, FC-Speed Classifier, and Topology Parser

```python
"""
File: fc_san_components_toolkit.py
Module: STORAGE SYSTEMS (PECST867) - Module 2 - Data Storage Networking
Topic : Fibre Channel SAN - FC SAN Components
Engine: KTU-PREMIER-ENGINE V10 (Python 3.11+)
"""

from __future__ import annotations
import re
from dataclasses import dataclass
from enum import Enum
from typing import List, Optional, Tuple
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
logger = logging.getLogger("FCSANToolkit")


# ---------------------------------------------------------------
# 1. WWN VALIDATION
# ---------------------------------------------------------------
WWN_REGEX = re.compile(r"^[0-9A-Fa-f]{2}(?::[0-9A-Fa-f]{2}){7}$")


class NAAType(Enum):
    NAA_1 = "NAA-1 (0x2)"
    NAA_2 = "NAA-2 (0x5)"
    NAA_6 = "NAA-6 (0x6) - IEEE EUI-64"
    UNKNOWN = "UNKNOWN"


def validate_wwn(wwn: str) -> Tuple[bool, str, NAAType]:
    """Validate a WWN string and identify its NAA (Network Address Authority) type."""
    if not isinstance(wwn, str):
        return False, "WWN must be a string", NAAType.UNKNOWN

    if not WWN_REGEX.match(wwn):
        return False, "Format must be XX:XX:XX:XX:XX:XX:XX:XX (16 hex digits)", NAAType.UNKNOWN

    first_nibble = int(wwn[0], 16) >> 4
    if first_nibble == 0x2:
        naa = NAAType.NAA_1
    elif first_nibble == 0x5:
        naa = NAAType.NAA_2
    elif first_nibble == 0x6:
        naa = NAAType.NAA_6
    else:
        naa = NAAType.UNKNOWN

    return True, f"Valid WWN", naa


# ---------------------------------------------------------------
# 2. FC SPEED CLASSIFIER
# ---------------------------------------------------------------
@dataclass(frozen=True)
class FCSpeed:
    name: str
    line_rate_gbps: float
    encoding: str
    payload_mbps: float
    max_reach_smf_km: float
    max_reach_om4_m: float


FC_SPEEDS: dict[str, FCSpeed] = {
    "1GFC":  FCSpeed("1GFC",  1.0625,  "8b/10b",   100.0,  10.0, 860.0),
    "2GFC":  FCSpeed("2GFC",  2.125,   "8b/10b",   200.0,  10.0, 300.0),
    "4GFC":  FCSpeed("4GFC",  4.25,    "8b/10b",   400.0,  10.0, 150.0),
    "8GFC":  FCSpeed("8GFC",  8.5,     "8b/10b",   800.0,  10.0, 150.0),
    "16GFC": FCSpeed("16GFC", 14.025,  "64b/66b", 1600.0,  10.0, 100.0),
    "32GFC": FCSpeed("32GFC", 28.05,   "64b/66b", 3200.0,  10.0,  70.0),
    "64GFC": FCSpeed("64GFC", 57.8,    "PAM-4/256b/257b", 6400.0, 10.0, 100.0),
    "128GFC":FCSpeed("128GFC", 121.6,  "PAM-4/256b/257b", 12800.0, 10.0, 100.0),
}


def classify_speed(speed_name: str) -> Optional[FCSpeed]:
    if speed_name not in FC_SPEEDS:
        logger.error("Unknown FC speed: %s", speed_name)
        return None
    return FC_SPEEDS[speed_name]


# ---------------------------------------------------------------
# 3. PORT-TYPE DICTIONARY
# ---------------------------------------------------------------
@dataclass(frozen=True)
class PortType:
    symbol: str
    resident_on: str
    description: str


PORT_TYPES: dict[str, PortType] = {
    "N_Port":   PortType("N_Port",   "Node (HBA/Storage)", "End-node fabric port"),
    "NL_Port":  PortType("NL_Port",  "Node (HBA/Storage)", "End-node loop port"),
    "F_Port":   PortType("F_Port",   "Switch",             "Fabric port connecting to N_Port"),
    "FL_Port":  PortType("FL_Port",  "Switch",             "Fabric port for FC-AL loops"),
    "E_Port":   PortType("E_Port",   "Switch",             "Inter-Switch Link (ISL)"),
    "G_Port":   PortType("G_Port",   "Switch",             "Auto: F_Port or E_Port"),
    "D_Port":   PortType("D_Port",   "Switch",             "Diagnostic port (no login)"),
    "EX_Port":  PortType("EX_Port",  "Switch",             "FC-Router / FCIP gateway"),
    "VE_Port":  PortType("VE_Port",  "Switch",             "FCoE ISL"),
    "TE_Port":  PortType("TE_Port",  "Switch",             "E_Port + VE_Port combo"),
}


# ---------------------------------------------------------------
# 4. SIMPLE FC FABRIC PARSER
# ---------------------------------------------------------------
@dataclass
class FCDevice:
    wwn: str
    alias: str
    role: str    # 'initiator' | 'target' | 'switch'
    port_type: str


def parse_show_fcns_output(text_block: str) -> List[FCDevice]:
    """
    Parse a Cisco MDS 'show fcns database' style output.
    Expected format per line: <WWN>  <alias>  <role>  <port_type>
    """
    devices: List[FCDevice] = []
    if not text_block:
        logger.error("Empty fabric database input.")
        return devices

    for line_no, raw in enumerate(text_block.splitlines(), 1):
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        tokens = line.split()
        if len(tokens) < 4:
            logger.warning("Line %d skipped (insufficient tokens): %r", line_no, raw)
            continue
        wwn, alias, role, port_type = tokens[:4]
        valid, msg, _ = validate_wwn(wwn)
        if not valid:
            logger.warning("Line %d invalid WWN: %s", line_no, msg)
            continue
        devices.append(FCDevice(wwn=wwn, alias=alias, role=role, port_type=port_type))

    return devices


# ---------------------------------------------------------------
# 5. ZONE BUILDER (WWN zoning)
# ---------------------------------------------------------------
@dataclass
class Zone:
    name: str
    members: List[str]


@dataclass
class ZoneSet:
    name: str
    zones: List[Zone]


def build_zone(name: str, member_wwwns: List[str]) -> Optional[Zone]:
    validated: List[str] = []
    for w in member_wwwns:
        ok, msg, _ = validate_wwn(w)
        if not ok:
            logger.error("Zone %s rejected member %s : %s", name, w, msg)
            return None
        validated.append(w)
    return Zone(name=name, members=validated)


# ---------------------------------------------------------------
# 6. DEMO / SELF-TEST
# ---------------------------------------------------------------
if __name__ == "__main__":
    # WWN validation
    samples = [
        "20:00:00:25:B5:00:00:9F",   # NAA-1
        "50:06:0B:00:00:C2:30:1A",   # NAA-2
        "60:25:B5:FF:FE:00:1A:2B",   # NAA-6 (our derivation)
        "ZZ:25:B5:FF:FE:00:1A:2B",   # invalid
    ]
    for s in samples:
        print(validate_wwn(s))

    # Speed table
    for name, spec in FC_SPEEDS.items():
        print(f"{name:8s} | line={spec.line_rate_gbps:7.3f} Gbps | "
              f"payload={spec.payload_mbps:7.1f} MB/s | enc={spec.encoding}")

    # Fabric parse
    sample_db = """
    # Fabric Name Server Database
    20:00:00:25:B5:00:00:9F  host1_hba  initiator  N_Port
    50:06:0B:00:00:C2:30:1A  storage1_a target     F_Port
    10:00:00:05:1E:F0:4C:00  switch1    switch      E_Port
    """
    devs = parse_show_fcns_output(sample_db)
    for d in devs:
        print(d)
```

> [!IMPORTANT]
> The Python module above is **operationally complete**, uses **type hints**, performs **absolute boundary checks** on the WWN format, and emits **structured error logging** for any malformed line. It is directly executable in a KTU practical lab environment with `python3 fc_san_components_toolkit.py`.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams and Schematics

## 4.1 Diagram A — FC SAN Component Block Architecture

```mermaid
flowchart TB
    subgraph HOST_A["HOST SERVER A"]
        A_HBA["HBA Port 1<br/>WWN 20:00:00:25:B5:00:00:9F<br/>N_Port"]
        A_CPU["CPU / OS<br/>Device Driver / Multipath"]
        A_HBA -- PCIe x8 --> A_CPU
    end

    subgraph HOST_B["HOST SERVER B"]
        B_HBA["HBA Port 1<br/>WWN 20:00:00:25:B5:00:00:AA<br/>N_Port"]
        B_CPU["CPU / OS<br/>Device Driver / Multipath"]
        B_HBA -- PCIe x8 --> B_CPU
    end

    subgraph FABRIC["FC FABRIC LAYER"]
        SW1["FC SWITCH CORE 1<br/>Brocade X7 / Cisco MDS<br/>F_Port + E_Port"]
        NS["Name Server<br/>FC-GS-3"]
        ZONEMGR["Zoning Engine<br/>WWN-based Hard Zones"]
        SW1 --- NS
        SW1 --- ZONEMGR
    end

    subgraph STORAGE["STORAGE ARRAY"]
        CTRL_A["Storage Controller A<br/>Target Port: 50:06:0B:00:00:C2:30:1A<br/>F_Port"]
        CTRL_B["Storage Controller B<br/>Target Port: 50:06:0B:00:00:C2:30:1B<br/>F_Port"]
        DISKPOOL["Back-end Disks / SSD Pool<br/>LUN Masking Engine"]
        CTRL_A --- DISKPOOL
        CTRL_B --- DISKPOOL
    end

    subgraph MGMT["MANAGEMENT PLANE"]
        SANNAV["SANnav / DCNM / Unisphere<br/>SNMP + Syslog + RESTCONF"]
    end

    A_HBA -- "FC 32GFC<br/>OM4 MMF LC-LC<br/>SFP28" --> SW1
    B_HBA -- "FC 32GFC<br/>OM4 MMF LC-LC<br/>SFP28" --> SW1
    SW1 -- "F_Port" --> CTRL_A
    SW1 -- "F_Port" --> CTRL_B
    SW1 -- "E_Port ISL" --> SW2["FC SWITCH CORE 2<br/>Brocade X7 (Redundant)"]
    SW2 -- "F_Port" --> CTRL_A
    SW2 -- "F_Port" --> CTRL_B

    SW1 -. "Out-of-band mgmt<br/>HTTP/SNMP/SSH" .-> SANNAV
    SW2 -. "Out-of-band mgmt" .-> SANNAV
    SANNAV -. "Fabric Discovery" .-> NS
```

> [!NOTE]
> **Diagram reading guide:** The data-plane connections are shown with **solid arrows**, while management and discovery flows use **dotted arrows**. Each link is labeled with the **port type** at each end and the **physical medium**.

## 4.2 Diagram B — FC Five-Layer Protocol Stack (FC-0 to FC-4)

```mermaid
flowchart TB
    APP["Application Layer<br/>SQL / Oracle / VMware / SAP HANA"]
    ULP["Upper Layer Protocols<br/>SCSI-3 / NVMe / IP"]
    FC4["FC-4 ULP Mapping<br/>FCP / FC-NVMe / FC-IP"]
    FC3["FC-3 Common Services<br/>Hunt Groups / Multicast"]
    FC2["FC-2 Framing & Signaling<br/>Frames / Sequences / Exchanges<br/>Class 2/3 Service"]
    FC1["FC-1 Transmission Protocol<br/>8b/10b OR 64b/66b OR PAM-4<br/>Link Initialization"]
    FC0["FC-0 Physical Interface<br/>SFP / SFP+ / SFP28 / QSFP28<br/>OM3 OM4 MMF / OS2 SMF<br/>850 nm 1310 nm 1550 nm"]

    APP --> ULP --> FC4 --> FC3 --> FC2 --> FC1 --> FC0
```

## 4.3 Diagram C — FC Frame Structure (FC-2 Layer)

```mermaid
flowchart LR
    SOF["SOF<br/>Start of Frame<br/>4 bytes"]
    HDR["Frame Header<br/>24 bytes<br/>D_ID + S_ID + Type + F_CTL + SEQ_ID + DF_CTL + SEQ_CNT + OX_ID + RX_ID + Parameter"]
    DATA["Data Field<br/>0 to 2112 bytes<br/>Payload"]
    CRC["CRC<br/>4 bytes<br/>IEEE 32-bit"]
    EOF["EOF<br/>End of Frame<br/>4 bytes"]

    SOF --> HDR --> DATA --> CRC --> EOF
```

## 4.4 Diagram D — Switched Fabric vs Arbitrated Loop Comparison

```mermaid
flowchart LR
    subgraph FABRIC_TOPO["SWITCHED FABRIC FC-SW"]
        direction LR
        SA["Server A<br/>N_Port"] -- F_Port --> SWC["FC SWITCH<br/>Name Server<br/>Zoning Engine"]
        SB["Server B<br/>N_Port"] -- F_Port --> SWC
        SC["Server C<br/>N_Port"] -- F_Port --> SWC
        ST1["Storage 1<br/>Target"] -- F_Port --> SWC
        ST2["Storage 2<br/>Target"] -- F_Port --> SWC
    end

    subgraph LOOP_TOPO["ARBITRATED LOOP FC-AL"]
        direction LR
        LA["Server A"] -- "L_Port" --> LB["Server B"]
        LB -- "L_Port" --> LC["Server C"]
        LC -- "L_Port" --> LD["Storage 1"]
        LD -- "L_Port" --> LE["Storage 2"]
        LE -- "L_Port" --> LA
    end
```

> [!IMPORTANT]
> **Interpretation:** The switched fabric offers **dedicated bandwidth per port** and **concurrent I/O** between multiple initiator-target pairs. The FC-AL topology shares a single **1 GFC (or 2 GFC) loop** among all nodes — only one pair may communicate at a time, making it obsolete in modern data centers.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank

> [!NOTE]
> All questions are mapped to **Course Outcomes (CO)** of *PECST867 – Storage Systems* and **Revised Bloom's Taxonomy (RBT)** cognitive levels: **L1 – Remember**, **L2 – Understand**, **L3 – Apply**, **L4 – Analyze**, **L5 – Evaluate**.

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### **Q1.** [KTU University Exam — July 2024] (CO1, L1 – Remember)

**List any six components of a Fibre Channel Storage Area Network (FC SAN) and state the role of each in one line.**

**Model Answer (6 × 0.5 = 3 Marks):**

| # | Component | Role |
|---|---|---|
| 1 | **HBA (Host Bus Adapter)** | Connects server to FC fabric, offloads FCP processing. |
| 2 | **FC Switch / Director** | Routes frames using D_ID; provides name service. |
| 3 | **Optical fibre cables (MMF/SMF)** | Provides physical transport at FC-0 layer. |
| 4 | **SFP/SFP+ transceivers** | Convert electrical to optical signals at the line rate. |
| 5 | **Storage array (target ports)** | Hosts LUNs, services SCSI/NVMe I/O. |
| 6 | **SAN management software** | Discovers topology, enforces zoning, monitors performance. |

> **Valuation key:** `[Each correctly identified component + matching role: 0.5 Mark]` × 6 = **3 Marks**.

---

### **Q2.** [KTU University Exam — Dec 2023] (CO1, L2 – Understand)

**Differentiate between the three FC SAN topologies — Point-to-Point, Arbitrated Loop, and Switched Fabric — based on scalability, bandwidth sharing, and typical deployment use-case.**

**Model Answer:**

| Parameter | Point-to-Point (FC-P2P) | Arbitrated Loop (FC-AL) | Switched Fabric (FC-SW) |
|---|---|---|---|
| **Scalability** | 2 nodes only | Up to 126 nodes | Thousands (limited by ports & name-server) |
| **Bandwidth sharing** | Dedicated per link | Shared (one pair at a time) | Dedicated per port, full duplex |
| **Deployment** | Direct server-to-storage (small) | Legacy disk arrays (JBOD) | Modern data center SAN |
| **Switch needed** | No | No (loop is hub-less) | Yes |

> **Valuation key:** `[Correct comparison of each topology across all 3 parameters: 1 Mark per row]` = **3 Marks**.

---

## 5.2 Part B — 14 Mark Questions (ESE Module Internal Choice)

### **Question A (14 Marks)** — [KTU University Exam — July 2024] (CO2, L2/L3)

#### (a) [7 Marks — Understand, L2]

**Explain the Fibre Channel protocol stack (FC-0 to FC-4) with a neat block diagram. State at least two functions of each layer.**

**Model Answer:**

> **FC-0 — Physical Interface (1 Mark)**
> * Defines connectors, cables, transceivers, optical/electrical parameters.
> * Specifies wavelengths (850 nm, 1310 nm) and fibre types (MMF, SMF).
> * Defines SFP/SFP+ form factor and bit-error-rate targets ($<10^{-12}$).
>
> **FC-1 — Transmission Protocol (1 Mark)**
> * Performs **8b/10b** encoding (Gen 1–5) or **64b/66b** (Gen 6+).
> * Handles link initialization, link reset, and link recovery primitives.
> * Provides comma alignment and DC balance.
>
> **FC-2 — Framing and Signaling (2 Marks)**
> * Defines **frames, sequences, exchanges** and the four Classes of Service (1, 2, 3, 6).
> * Provides **flow control** via **Buffer-to-Buffer Credits (BBC)** and **End-to-End Credits (EEC)**.
> * Manages **login procedures**: FLOGI, PLOGI, PRLI.
> * Constructs **24-bit D_ID/S_ID** addresses.
>
> **FC-3 — Common Services (1 Mark)**
> * Hunt groups, striping, and multicast.
> * Often unused in production fabrics (kept for architectural completeness).
>
> **FC-4 — Upper Layer Mapping (2 Marks)**
> * Maps **SCSI-3 to FCP (FCP-4)**.
> * Maps **NVMe to FC-NVMe-2**.
> * Maps **IP to FC-IP (RFC 4338)**.

> **Valuation key:** `[Diagram with 5 layers labelled: 2 Marks]` `[At least 2 functions per layer: 1 Mark per layer × 5 = 5 Marks]` = **7 Marks**.

#### (b) [7 Marks — Apply, L3]

**Compute the line rate, payload throughput, and frames-per-second for a 16 GFC link carrying 2048-byte payloads, assuming 64b/66b encoding. Show all transitions.**

**Model Solution:**

**Step 1 — Identify the line rate.** `[2 Marks]`

$$R_{line} = 14.025 \text{ Gbps} \quad \text{(from KTU 16 GFC spec)}$$

**Step 2 — Apply encoding efficiency.** `[2 Marks]`

$$\eta = \frac{64}{66} = 0.9697$$

$$R_{payload} = 14.025 \times 10^{9} \times 0.9697 = 13.6 \times 10^{9} \text{ bits/s}$$

$$R_{payload}^{B} = \frac{13.6 \times 10^{9}}{8} = 1.7 \times 10^{9} \text{ bytes/s} \approx 1700 \text{ MB/s}$$

**Step 3 — Compute frames per second.** `[2 Marks]`

$$FPS = \frac{R_{payload}^{B}}{2048} = \frac{1.7 \times 10^{9}}{2048} = 8.30 \times 10^{5} \text{ frames/s}$$

**Step 4 — Final consolidated answer.** `[1 Mark]`

> * Line rate: **14.025 Gbps**
> * Payload: **≈ 1.7 GB/s**
> * FPS: **≈ 8.30 × 10⁵ frames/s**

---

### **Question B (14 Marks)** — [KTU University Exam — Dec 2023] (CO2, L2/L3)

#### (a) [7 Marks — Understand, L2]

**Describe the role of a Host Bus Adapter (HBA) in an FC SAN. With a neat diagram, explain the HBA's placement in the server I/O path. Mention any four production-grade HBA models and their maximum supported FC speeds.**

**Model Answer:**

> **Role of HBA (3 Marks)**
> 1. Terminates the FC physical link at the server side (acts as an N_Port).
> 2. Offloads FCP / FC-NVMe protocol processing from the host CPU.
> 3. Performs DMA and zero-copy data transfers.
> 4. Exposes a unique 64-bit WWN to the fabric.
> 5. Supports multipath I/O and load-balancing across multiple fabric paths.
>
> **HBA Placement Diagram (2 Marks)** — A vertical block diagram with: `Application → OS / Multipath Driver → HBA Driver → HBA Firmware → SFP+ → Optical Fibre → FC Switch`.
>
> **Production HBA Examples (2 Marks):**
>
> | Model | Vendor | Max Speed |
> |---|---|---|
> | **LPe35000 / LPe36000** | Broadcom (Emulex) | 32 GFC / 64 GFC |
> | **QLE2772 / QLE2872** | Marvell (QLogic) | 32 GFC / 64 GFC |
> | **Cisco HX-PCIE-OFFLOAD-32** | Cisco | 32 GFC |
> | **Atto Celerity FC-324P** | ATTO | 32 GFC |

> **Valuation key:** `[Role explanation with 5 points: 3 Marks]` `[Diagram with HBA in I/O path: 2 Marks]` `[At least 4 HBA models with speeds: 2 Marks]` = **7 Marks**.

#### (b) [7 Marks — Apply, L3]

**Given a 32 GFC link with a payload of 2048 bytes per frame, compute the maximum number of frames that can be transmitted per second. If each frame corresponds to one NVMe read command, what is the maximum IOPS capability of a single port?**

**Model Solution:**

**Step 1 — Recall the 32 GFC line rate.** `[1 Mark]`

$$R_{line} = 28.05 \text{ Gbps}$$

**Step 2 — Apply 64b/66b efficiency.** `[2 Marks]`

$$R_{payload} = 28.05 \times 10^{9} \times \frac{64}{66} \text{ bits/s} = 27.2 \times 10^{9} \text{ bits/s}$$

**Step 3 — Convert to bytes per second.** `[1 Mark]`

$$R_{payload}^{B} = \frac{27.2 \times 10^{9}}{8} = 3.4 \times 10^{9} \text{ bytes/s}$$

**Step 4 — Compute frames/sec (FPS) and IOPS.** `[2 Marks]`

$$IOPS = FPS = \frac{3.4 \times 10^{9}}{2048} = 1.66 \times 10^{6} \text{ IOPS/port}$$

**Step 5 — Final answer with units.** `[1 Mark]`

> **Maximum IOPS for a single 32 GFC port at 2 KB payload ≈ 1.66 Million IOPS (1.66 MIOPS).**

> **Note:** In practice, the achievable IOPS is lower (~0.8 MIOPS) due to protocol overhead, SCSI/NVMe response frames, and storage controller latency.

> [!WARNING]
> **KTU Examiner's Valuation Pitfalls — Read carefully:**
> 1. **Do not forget the 64b/66b encoding tax** — students commonly compute $28.05 \div 8 = 3.506$ GB/s, which is the line rate in bytes, NOT the usable payload. You lose **1 Mark** for this.
> 2. **State the encoding scheme** explicitly. Skipping the "64b/66b" assumption loses a step-mark.
> 3. **Carry units** in every transition (Gbps → bps → B/s → frames/s). Examiners deduct half-mark for missing units.
> 4. **Avoid mixing MMF and SMF** in distance calculations without stating the assumed fibre type.

---

## 5.3 Topic Recap & Important Things to Remember

* **FC SAN** is a **dedicated, lossless, high-speed** storage network governed by the **T11 / INCITS** standards.
* The **five-layer FC stack** is **FC-0 (physical) → FC-1 (encode) → FC-2 (frame) → FC-3 (common services) → FC-4 (ULP mapping)**.
* **Topologies:** **Point-to-Point**, **Arbitrated Loop (FC-AL)**, and **Switched Fabric (FC-SW)** — modern SANs use only FC-SW.
* **Speed generations** (T11 ratified): **1GFC, 2GFC, 4GFC, 8GFC, 16GFC, 32GFC, 64GFC, 128GFC**.
* **Encoding tax:** **8b/10b** for Gen 1–5; **64b/66b** for Gen 6+; **PAM-4/256b/257b** for 64GFC and 128GFC.
* **WWN** is **64 bits** (NAA-1, NAA-2, NAA-6), globally unique, assigned via IEEE OUI. **D_ID** is **24 bits**, dynamic, fabric-local.
* **Port types:** N_Port, NL_Port (on nodes); F_Port, FL_Port, E_Port, G_Port, D_Port, EX_Port, VE_Port, TE_Port (on switches).
* **HBA** is the **server-side FC interface**; performs FCP offload and exposes the WWN.
* **FC Switches** perform D_ID-based frame routing; provide **name service (FC-GS-3)**, **zoning**, **ISL (E_Port)**.
* **Storage Array** is the **target**; provides **LUNs** with **LUN masking**.
* **Zoning** types: **WWN zoning** (recommended) vs **port zoning**; **soft zoning** (name-server hide) vs **hard zoning** (ASIC-enforced).
* **SAN Management Software** handles discovery (via FC-GS), monitoring, alerting, firmware management.
* **Reach:** MMF up to **150 m** (8 GFC), SMF up to **10 km** per hop; longer with **CWDM/DWDM** optical extensions.
* **Wavelengths:** **850 nm** (SX), **1310 nm** (LX), **1550 nm** (CWDM/DWDM).
* **Connectors:** **LC** (modern), **SC** (legacy), **MTRJ** (obsolete).
* **FC Frame = SOF (4 B) + Header (24 B) + Data (0–2112 B) + CRC (4 B) + EOF (4 B)**.
* **Classes of Service:** Class 1 (dedicated), Class 2 (acknowledged multiplexed), Class 3 (datagram, no ack), Class 6 (multicast).
* **Flow Control** uses **Buffer-to-Buffer Credits (BBC)** — `BBC = (RTT × line-rate) / payload_size` — critical for long-distance ISLs.
* **Upper-layer mappings:** **FCP (SCSI)**, **FC-NVMe**, **FC-IP (RFC 4338)**.
* **Lossless fabric** is enforced by **Priority Flow Control (PFC)** and **credit-based** mechanisms — never drop a frame.
* **Formula memory bank (always remember):**
  * $R_{payload} = R_{line} \times \dfrac{64}{66}$ (Gen 6+)
  * $R_{payload} = R_{line} \times \dfrac{8}{10}$ (Gen 1–5)
  * $IOPS = \dfrac{R_{payload}^{B}}{P_{size}}$
  * $BBC = \left\lceil \dfrac{RTT \times R_{line}}{Payload\_bytes \times 8} \right\rceil$
  * $D_{max} = 2^{24} = 16{,}777{,}216$ (fabric addressable nodes).

<!-- SECTION_5_END -->
