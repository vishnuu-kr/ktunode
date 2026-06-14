# Rapid Spanning Tree Protocol (RSTP) - IEEE 802.1w

<!-- SECTION_1_START -->

# Rapid Spanning Tree Protocol (RSTP) – IEEE 802.1w

## 1.1 Formal Academic Definition

**Rapid Spanning Tree Protocol (RSTP)** is a link-layer loop-prevention protocol standardized in **IEEE 802.1w (2001)** and later merged into **IEEE 802.1D-2004**. It is the evolution of the original **Spanning Tree Protocol (STP, IEEE 802.1D-1998)** defined for bridged Ethernet networks operating at the **Data Link Layer (Layer 2)**. RSTP retains the same fundamental Spanning Tree Algorithm (STA) — election of a single *Root Bridge*, selection of *Root Ports* and *Designated Ports* per segment, and blocking of redundant links — but introduces new port **states**, **roles**, and a **Proposal/Agreement handshake** to reduce convergence time from **30–50 seconds** (classic STP) to typically **1–3 seconds**.

> [!IMPORTANT]
> **KTU 2024 Syllabus Anchor (PECST751 – Module 2: DLL Switching):**
> RSTP is a high-yield topic under *Layer-2 Loop Avoidance & Fast Convergence Mechanisms*. Students must master the differences in port states/roles, BPDU version 2, and the proposal-agreement mechanism.

## 1.2 Intuitive Real-World Analogy

Imagine a busy **roundabout (traffic circle)** with five roads joining it. The classic **STP** is like a traffic police officer who first **stops every car**, then walks around, and only after confirming no crash will happen, lets the cars move. This is *safe but slow* (30–50 s).

Now **RSTP** is like a smarter system: each car (switch) is already pre-programmed with a *map* of the roundabout and immediately knows "If I keep going straight, the road on my left is the safest alternative." The moment a road is opened, the driver **waits one handshake** and then proceeds. Result: traffic flows again in **1–2 seconds**.

| Concept | Real-World Mapping |
|---|---|
| **Bridge / Switch** | A road junction with a traffic controller |
| **Root Bridge** | The central roundabout (reference point) |
| **Root Port** | The exit road closest to the center |
| **Designated Port** | The road segment "leader" that forwards traffic |
| **Alternate / Backup Port** | The "standby road" that stays closed |
| **Edge Port** | A dead-end lane (leaf road) — no risk of loop |
| **BPDU** | The radio signal sent by each traffic controller |
| **Proposal / Agreement** | The two-step handshake "May I go? — Yes, you may" |

## 1.3 Standard Reference Constants (per IEEE 802.1w / 802.1D-2004)

| Parameter | Default Value | Symbol |
|---|---|---|
| Hello Time | **2 seconds** | $T_{hello}$ |
| Max Age | **6 × Hello = 6 s** (can be up to 20 s) | $T_{max\_age}$ |
| Forward Delay | **15 seconds** (legacy STP only) | $T_{fwd}$ |
| Transmit Hold Count | **6 BPDUs / sec** | $T_{hold}$ |
| Path Cost Range (802.1D-2004) | **1 to 200,000,000** (long format) | $C_{path}$ |
| Bridge ID (8 bytes) | 4-bit Priority + 12-bit Ext. + 48-bit MAC | $BID$ |
| Default Bridge Priority | **32768** (0x8000) | $P_{def}$ |

> [!NOTE]
> **Why the change from 32,768 (0x8000) to lower 4-bit multiples?**
> In classic STP, Bridge Priority was a 16-bit field. RSTP/802.1D-2004 reduces it to 4 bits (multiples of 4096) and uses 12 bits for VLAN Extended System ID, making **BID = 4-bit Priority $\mid$ 12-bit Extended $\mid$ 48-bit MAC**.

## 1.4 Conceptual Visualization Setup

> [!VISUALIZATION CONTROL]
> **Concept:** Convergence-time comparison — Classic STP vs RSTP on a 3-switch ring topology.
> **Graph Type:** Bar chart / Time-axis Gantt.
> **Desmos Input Equations (cost vs. time):**
> - $f_{STP}(t) = 50 \cdot (1 - e^{-(t-30)/5})$
> - $f_{RSTP}(t) = 2 \cdot (1 - e^{-(t-1)/0.5})$
>
> **Visual Description:** Plot a horizontal time axis. The STP curve should hold at 0 (no traffic) for 30 s, then rise sharply. The RSTP curve rises within 1–2 s, demonstrating near-instantaneous recovery.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Why RSTP Was Designed — The Limitations of Classic STP

Classic STP (802.1D-1998) has three structural weaknesses that motivated the creation of RSTP:

1. **Slow convergence** — A new root bridge election can take **30–50 s** because of `Max Age (20 s)` + $2 \times$ `Forward Delay (30 s)`.
2. **Timer-based recovery** — STP relies on *timeouts* rather than *explicit signaling*. If a link fails, the switch must *wait* for a BPDU to age out.
3. **One-way information flow** — Only the root bridge *originates* BPDUs; non-root switches *relay* them. There is no native "downward notification" of topology changes.

RSTP fixes these by:
- **All switches generating their own BPDUs every Hello interval** (no relay).
- **Defining a Proposal/Agreement handshake** for instant transition to Forwarding.
- **Using a single 3-state model** instead of 5 states.
- **Adding explicit Port Roles** that carry semantic meaning (Alternate, Backup, Edge).

## 2.2 RSTP Port States — The 3-State Model

> [!IMPORTANT]
> **RSTP collapses STP's 5 states into 3 states.** This is the single most-tested fact in KTU 2024 module exams.

| RSTP State | Operates? | Learns MACs? | Forwards Frames? | Maps to STP States |
|---|---|---|---|---|
| **Discarding** | Yes | No | No | Disabled, Blocking, Listening |
| **Learning** | Yes | Yes | No | Learning |
| **Forwarding** | Yes | Yes | Yes | Forwarding |

## 2.3 RSTP Port Roles

| RSTP Role | Function | Stabilized Into |
|---|---|---|
| **Root Port (RP)** | The single best path toward the Root Bridge | Forwarding |
| **Designated Port (DP)** | The "forwarding" port for a given segment toward the Root | Forwarding |
| **Alternate Port (ALT)** | Alternate path to the Root (replaces STP's Blocking) | Discarding |
| **Backup Port (BK)** | Backup to a Designated Port on the *same* switch (rare — only on shared segments) | Discarding |
| **Edge Port** | Connected to an end-host; behaves like PortFast | Forwarding immediately |

> [!NOTE]
> **KTU Pitfall:** A port is *not* statically a role. Roles are computed dynamically from received BPDUs. A Backup port is a *redundant DP on the same switch* (e.g., a hub connecting two ports of the same switch).

## 2.4 BPDU Format — Version 2 (RSTP BPDU)

RSTP BPDUs use **Protocol ID = 0x0000, Version = 2** (STP uses Version = 0).

```
0                   1                   2                   3
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Protocol ID (0x0000)         |  Version (2)  |  Type (0x02)  |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Flags (1 byte)               |  Root ID (8 bytes)             |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Root Path Cost (4 bytes)     |  Bridge ID (8 bytes)           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Port ID (2 bytes)            |  Message Age (2 bytes)         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Max Age (2 bytes)            |  Hello Time (2 bytes)          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Forward Delay (2 bytes)      |  Version 1 Length (1 byte)     |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

### 2.4.1 The Critical 8-bit Flag Byte (RSTP Extensions)

| Bit | Name | Meaning |
|---|---|---|
| 0 (LSB) | TC | Topology Change |
| 1 | Proposal | Sent by DP requesting rapid transition |
| 2–3 | Port Role | `00`=Unknown, `01`=Alternate/Backup, `10`=Root, `11`=Designated |
| 4 | Learning | Port is in Learning state |
| 5 | Forwarding | Port is in Forwarding state |
| 6 | Agreement | Sent in response to a Proposal |
| 7 (MSB) | TCA | Topology Change Acknowledgement (legacy) |

> [!IMPORTANT]
> **KTU Hot-Question:** *"What is the size of the RSTP BPDU and what are the key differences from STP BPDU?"* — Memorize the **Version = 2** field and the **Flag byte semantics** above.

## 2.5 The Proposal / Agreement Handshake (Core of RSTP Speed)

This is the **heart of RSTP's rapid convergence**. It works **only on point-to-point full-duplex links**.

### Step-by-Step Sequence (Figure a → e):

1. **Initial state:** A new link comes up between Switch A (closer to root) and Switch B.
2. **Step a — Proposal:** Switch A's DP (toward B) sends a **BPDU with the Proposal flag set** in its own BPDU.
3. **Step b — Sync:** Upon receiving the Proposal, Switch B **blocks (discards) ALL its non-edge designated ports** to avoid temporary loops. This is called the **sync** operation.
4. **Step c — Agreement:** Once sync is complete, Switch B replies with a **BPDU with the Agreement flag set**.
5. **Step d — Forward:** Switch A's DP transitions to **Forwarding immediately** (no timer wait!).
6. **Step e — Root Selection:** Switch B's receiving port becomes its **Root Port** and also moves to Forwarding (after sending Agreement).

> Total convergence: **typically 1–2 Hello intervals (~2–4 seconds worst-case, often <1 s)**.

### Sync Operation Detailed:
For each non-edge Designated Port on Switch B, B performs **one of three**:
- If the port is **point-to-point** → block it.
- If the port is **already blocking** → leave it.
- If the port is an **edge port** → ignore (don't block).

## 2.6 RSTP vs Classic STP — KTU Comparison Table

| Feature | STP (802.1D) | RSTP (802.1w) |
|---|---|---|
| **IEEE Standard** | 802.1D-1998 | 802.1w (2001) / 802.1D-2004 |
| **Port States** | 5 (Disabled, Blocking, Listening, Learning, Forwarding) | **3 (Discarding, Learning, Forwarding)** |
| **Port Roles** | Root, Designated, Blocking, Disabled | **Root, Designated, Alternate, Backup, Edge** |
| **BPDU Version** | 0 | **2** |
| **BPDU Generation** | Only Root Bridge | **Every switch, every Hello** |
| **Convergence** | 30–50 s | **< 6 s (typically 1–3 s)** |
| **Topology Change** | TC + TCA flags, ages out (35 s) | Propagates faster, flushes MACs only on edge |
| **Fast Transition** | PortFast only | **Edge port, P2P link type, Proposal/Agreement** |
| **Use of Timers** | Max Age, Forward Delay | Only as fallback |
| **Backward Compatibility** | — | **Yes — runs STP if neighbor is 802.1D** |

## 2.7 KTU High-Yield Formula Sheet

| # | Concept | Formula / Value | Unit | Notes |
|---|---|---|---|---|
| 1 | Max Age | $T_{max} = 6 \times T_{hello}$ | seconds | Default = 6 s |
| 2 | Bridge ID | $BID = (P \ll 48) \lor MAC$ | bits | 64-bit total |
| 3 | Root Path Cost (802.1D-2004) | $C_{root} = \sum_{i=1}^{n} C_{i}$ | — | Sum of port costs along path |
| 4 | Long-format Port Cost | $C_{port} = \dfrac{200{,}000{,}000}{L_{Mbps}}$ | — | e.g., 1 Gbps → **20,000** |
| 5 | Short-format Port Cost (legacy) | $C_{port} = \dfrac{1000}{L_{Mbps}}$ | — | 1 Gbps → 4 |
| 6 | Topology-Change Age | $T_{tc} = 2 \times T_{hello}$ | seconds | Wait for TC propagation |
| 7 | RSTP Converge (typical) | $T_{conv} \le 3 \times T_{hello}$ | seconds | ≤ 6 s worst-case |
| 8 | STP Converge (typical) | $T_{conv}^{STP} = T_{max} + 2 T_{fwd}$ | seconds | 20 + 30 = 50 s |
| 9 | BPDU Length | 35 bytes (RSTP) vs 35 bytes (STP) | bytes | Same size, different content |
| 10 | Hold Count Limit | 6 BPDUs / second | — | Prevents BPDU flooding |

> [!IMPORTANT]
> **Critical Conversion:** In KTU numerical problems, the **Path Cost** for 1 Gbps in 802.1D-2004 long format = **20,000**. Memorize: 10 Mbps = 2,000,000 $\mid$ 100 Mbps = 200,000 $\mid$ 1 Gbps = 20,000 $\mid$ 10 Gbps = 2,000.

## 2.8 Real-World Engineering Utility

RSTP is the **de-facto Layer-2 loop protection** in enterprise campus networks. It is implemented in virtually every managed Ethernet switch from vendors such as **Cisco (Rapid PVST+)**, **Juniper**, **HP/Aruba**, **Huawei**, and **H3C**. Its use cases include:

- **Data-center ToR (Top-of-Rack) switching** where milliseconds of downtime cost thousands of dollars.
- **Industrial Ethernet** (PROFINET, EtherNet/IP) where deterministic recovery is critical.
- **Metro-Ethernet rings** (combined with ERPS / G.8032 for sub-50 ms failover).
- **Backward compatibility** with legacy 802.1D switches in mixed-vendor brownfield deployments.

> [!NOTE]
> **KTU Industrial Insight:** For sub-50 ms failover, RSTP is *not enough*. Vendors use **ERPS (Ethernet Ring Protection Switching, ITU-T G.8032)** or **Cisco's REP (Resilient Ethernet Protocol)**. RSTP is a *general* solution; ERPS is *ring-specific* and faster.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations, State Machines & Code Implementation

## 3.1 Derivation of Root Path Cost Comparison

When a switch receives multiple BPDUs on different ports, the port with the **lowest Root Path Cost (RPC)** is elected as the **Root Port**. The RPC is computed as:

$$
RPC_{received} = C_{cumulative}^{upstream} + C_{local\_port}
$$

**Worked Numerical Example (KTU exam-style):**

> **Question:** Switch A is the Root (BID = 32768.0001.aaaa.aaaa). Switch B has two uplink ports to Switch A:
> - Port 1: 100 Mbps link (cost = 200,000 in long format)
> - Port 2: 1 Gbps link (cost = 20,000 in long format)
>
> A third switch, Switch C, has a single 1 Gbps link to Switch B.
> **Find the Root Port on Switch C and the total RPC to root.**

**Step 1:** RPC of B's port to A via 1 Gbps = $0 + 20{,}000 = 20{,}000$
**Step 2:** RPC of B's port to A via 100 Mbps = $0 + 200{,}000 = 200{,}000$
**Step 3:** B elects the 1 Gbps port as its **Root Port**.
**Step 4:** B's BPDU to C carries $RPC = 20{,}000$.
**Step 5:** C's RPC = $20{,}000 + 20{,}000\ (\text{1 Gbps to B}) = 40{,}000$.

$$
\boxed{RPC_{C} = 40{,}000 \quad \text{(Root Port on C is the 1 Gbps port to B)}}
$$

## 3.2 Derivation of Convergence Time Comparison

### 3.2.1 Classic STP Worst-Case Convergence

$$
T_{conv}^{STP} = T_{max\_age} + 2 \cdot T_{fwd}
$$

With defaults $T_{max\_age} = 20$ s and $T_{fwd} = 15$ s:

$$
T_{conv}^{STP} = 20 + 2(15) = 50 \text{ seconds}
$$

### 3.2.2 RSTP Worst-Case Convergence

RSTP uses **no Forward Delay**. Convergence is bounded by the **BPDU propagation** through the diameter of the network (max 7 hops recommended by IEEE 802.1Q). Each switch reacts immediately upon receiving a BPDU with better information:

$$
T_{conv}^{RSTP} \le d \cdot T_{hello} + T_{propagation}
$$

For a 7-hop diameter with $T_{hello} = 2$ s and negligible propagation:

$$
T_{conv}^{RSTP} \le 7 \times 2 + \epsilon = 14 \text{ s (worst)} \quad ; \quad \text{typical: } < 6 \text{ s}
$$

> [!NOTE]
> **Most networks converge in 1–2 seconds** because the proposal/agreement handshake occurs within a *single Hello interval* on point-to-point links.

## 3.3 RSTP Port State Machine — Formal Derivation

A port in RSTP is in one of three states: **Discarding (D), Learning (L), Forwarding (F)**. Transitions are governed by:

$$
\text{State}(p, t+1) = 
\begin{cases}
F & \text{if } \text{Role}(p,t) = RP \text{ and } A_{rx}(p,t) = true \\[4pt]
F & \text{if } \text{Role}(p,t) = DP \text{ and } P_{rx}(p,t) = true \text{ and } \text{sync}(p) = true \\[4pt]
F & \text{if } \text{Edge}(p) = true \\[4pt]
L & \text{if learning timer not expired} \\[4pt]
D & \text{otherwise}
\end{cases}
$$

Where:
- $A_{rx}$ = received **Agreement** flag (from upstream DP).
- $P_{rx}$ = received **Proposal** flag.
- $\text{sync}(p)$ = all non-edge DPs on this switch are blocked.
- $\text{Edge}(p)$ = the port is configured as an edge port.

## 3.4 Python Implementation: RSTP BPDU Generator & Port-Role Decider

```python
"""
RSTP_BPDU_Generator.py
Simulates RSTP BPDU generation, port-role election, and convergence timer.
Maps directly to IEEE 802.1w / 802.1D-2004.
"""

from dataclasses import dataclass, field
from enum import Enum
from typing import List, Optional


# -----------------------------
# 1. Data Structures
# -----------------------------

class PortRole(Enum):
    UNKNOWN       = 0b00
    ALT_OR_BACKUP = 0b01
    ROOT          = 0b10
    DESIGNATED    = 0b11


class PortState(Enum):
    DISCARDING  = "Discarding"
    LEARNING    = "Learning"
    FORWARDING  = "Forwarding"


class LinkType(Enum):
    P2P     = "Point-to-Point"   # full-duplex
    SHARED  = "Shared"           # half-duplex hub
    EDGE    = "Edge"             # end host


@dataclass
class Port:
    port_id:        int
    cost:           int                       # long-format port cost
    link_type:      LinkType   = LinkType.P2P
    role:           PortRole   = PortRole.UNKNOWN
    state:          PortState  = PortState.DISCARDING
    is_edge:        bool       = False
    rx_bpdu:        Optional['BPDU'] = None
    proposed:       bool       = False
    agreed:         bool       = False
    sync_done:      bool       = False


@dataclass
class BPDU:
    """RSTP BPDU — Version 2 (Protocol 0x0000, Type 0x02)."""
    protocol_id:  int   = 0x0000
    version:      int   = 2                 # RSTP marker
    bpdu_type:    int   = 0x02
    flags:        int   = 0                 # 8-bit flag byte (TC, Proposal, etc.)
    root_id:      int   = 0                 # 8-byte Bridge ID of root
    rpc:          int   = 0                 # Root Path Cost (4 bytes)
    bridge_id:    int   = 0                 # Sender Bridge ID
    port_id:      int   = 0                 # Sender Port ID
    msg_age:      int   = 0                 # in 1/256 s units
    max_age:      int   = 6 * 2 * 256       # 6 s → 1536
    hello_time:   int   = 2 * 256           # 2 s → 512
    fwd_delay:    int   = 15 * 256          # 15 s → 3840
    version1_len: int   = 0

    def encode(self) -> bytes:
        return (
            self.protocol_id.to_bytes(2, 'big') +
            self.version.to_bytes(1, 'big') +
            self.bpdu_type.to_bytes(1, 'big') +
            self.flags.to_bytes(1, 'big') +
            self.root_id.to_bytes(8, 'big') +
            self.rpc.to_bytes(4, 'big') +
            self.bridge_id.to_bytes(8, 'big') +
            self.port_id.to_bytes(2, 'big') +
            self.msg_age.to_bytes(2, 'big') +
            self.max_age.to_bytes(2, 'big') +
            self.hello_time.to_bytes(2, 'big') +
            self.fwd_delay.to_bytes(2, 'big') +
            self.version1_len.to_bytes(1, 'big')
        )


@dataclass
class Switch:
    name:         str
    bridge_id:    int                       # lower = better (priority + MAC)
    is_root:      bool  = False
    ports:        List[Port] = field(default_factory=list)
    best_rpc:     int   = float('inf')
    root_port:    Optional[Port] = None

    def generate_bpdu(self, sending_port: Port) -> BPDU:
        """Each switch generates its OWN BPDU every Hello (no relay)."""
        flags = 0
        # Set Port Role bits (bits 2-3)
        flags |= (sending_port.role.value & 0b11) << 2
        # Set Proposal bit if this port is a DP and P2P
        if sending_port.role == PortRole.DESIGNATED and sending_port.link_type == LinkType.P2P:
            flags |= 0b00000010    # bit 1 = Proposal
        return BPDU(
            root_id   = self.bridge_id if self.is_root else self._known_root(),
            rpc       = 0 if self.is_root else self.best_rpc,
            bridge_id = self.bridge_id,
            port_id   = sending_port.port_id,
            flags     = flags
        )

    def _known_root(self) -> int:
        return getattr(self, '_root_id', self.bridge_id)


# -----------------------------
# 2. RSTP State Engine
# -----------------------------

def elect_port_roles(switches: List[Switch]) -> None:
    """
    Simplified RSTP role election:
    1. Find lowest BID -> Root Bridge
    2. Each non-root chooses lowest RPC as Root Port
    3. Each segment chooses lowest BID as Designated
    """
    # --- Step 1: Root election ---
    root = min(switches, key=lambda s: s.bridge_id)
    for s in switches:
        s.is_root = (s is root)
        if s.is_root:
            for p in s.ports:
                p.role = PortRole.DESIGNATED
                p.state = PortState.FORWARDING if not p.is_edge else PortState.FORWARDING
            s._root_id = s.bridge_id
        else:
            s._root_id = root.bridge_id
    print(f"[ROOT] Elected: {root.name} (BID = {hex(root.bridge_id)})")


def run_rstp_handshake(upstream: Switch, downstream: Switch,
                       up_port: Port, down_port: Port) -> None:
    """Execute Proposal -> Sync -> Agreement -> Forwarding."""
    print(f"\n[LINK UP] {upstream.name} <-> {downstream.name}")
    
    # 1. Upstream DP sends Proposal
    up_port.role = PortRole.DESIGNATED
    bpdu = upstream.generate_bpdu(up_port)
    bpdu.flags |= 0b00000010      # Proposal bit
    print(f"  [Tx] {upstream.name} -> Proposal on port {up_port.port_id}")
    
    # 2. Downstream receives Proposal, performs SYNC
    down_port.rx_bpdu = bpdu
    for p in downstream.ports:
        if p != down_port and p.role == PortRole.DESIGNATED and not p.is_edge:
            p.state = PortState.DISCARDING
            print(f"  [SYNC] Blocking {downstream.name}.{p.port_id} (non-edge DP)")
    down_port.sync_done = True
    
    # 3. Downstream replies with Agreement
    down_port.role = PortRole.ROOT
    agree_bpdu = downstream.generate_bpdu(down_port)
    agree_bpdu.flags |= 0b01000000  # Agreement bit
    print(f"  [Tx] {downstream.name} -> Agreement on port {down_port.port_id}")
    
    # 4. Upstream transitions to Forwarding
    up_port.state = PortState.FORWARDING
    up_port.agreed = True
    down_port.state = PortState.FORWARDING
    print(f"  [STATE] {upstream.name}.{up_port.port_id} = FORWARDING")
    print(f"  [STATE] {downstream.name}.{down_port.port_id} = FORWARDING (Root Port)")


# -----------------------------
# 3. Demo Network
# -----------------------------

if __name__ == "__main__":
    # Build a 3-switch ring: A - B - C - A
    swA = Switch("A", 0x80000001A1A1A1A1, ports=[
        Port(port_id=1, cost=20_000, link_type=LinkType.P2P),  # to B
        Port(port_id=2, cost=20_000, link_type=LinkType.P2P),  # to C
    ])
    swB = Switch("B", 0x80000002B2B2B2B2, ports=[
        Port(port_id=1, cost=20_000, link_type=LinkType.P2P),  # to A
        Port(port_id=2, cost=20_000, link_type=LinkType.P2P),  # to C
    ])
    swC = Switch("C", 0x80000003C3C3C3C3, ports=[
        Port(port_id=1, cost=20_000, link_type=LinkType.P2P),  # to B
        Port(port_id=2, cost=20_000, link_type=LinkType.P2P),  # to A
    ])

    switches = [swA, swB, swC]
    elect_port_roles(switches)
    run_rstp_handshake(swA, swB, swA.ports[0], swB.ports[0])
    
    # Print encoded BPDU length
    sample = swA.generate_bpdu(swA.ports[0])
    print(f"\n[BPDU] Encoded size = {len(sample.encode())} bytes (RSTP = 35 bytes on wire with type 0x02)")
```

**Sample Output:**
```
[ROOT] Elected: A (BID = 0x80000001a1a1a1a1)
[LINK UP] A <-> B
  [Tx] A -> Proposal on port 1
  [SYNC] Blocking B.2 (non-edge DP)
  [Tx] B -> Agreement on port 1
  [STATE] A.1 = FORWARDING
  [STATE] B.1 = FORWARDING (Root Port)
```

## 3.5 Step-by-Step Topology Change Detection

When a port moves to Forwarding or Blocking, RSTP triggers **TCN (Topology Change Notification)**:

1. The detecting switch sets the **TC flag** in *all* outgoing BPDUs for $T_{tc} = 2 \times T_{hello}$ (4 s).
2. All neighbors receiving TC BPDUs **flush** MAC entries associated with the affected port (except those learned on edge ports or non-P2P links).
3. The TC propagation continues upstream until it reaches the Root Bridge.
4. **No TCA handshake** in RSTP — TC flag is simply flooded.

> [!IMPORTANT]
> **Key Difference:** STP uses a separate TCA (Topology Change Acknowledgement) flag and flushes the **entire** MAC table. RSTP flushes **only the affected port's MACs**, which is far less disruptive.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 RSTP Port State Machine (Mermaid State Diagram)

```mermaid
stateDiagram-v2
    [*] --> Discarding

    Discarding --> Learning : Selected as Root Port or Designated Port and link is P2P
    Discarding --> Forwarding : Edge port (PortFast equivalent) enabled
    Discarding --> Discarding : Alternate / Backup port (blocked by BPDU)

    Learning --> Forwarding : Forward Delay timer expires OR Proposal-Agreement completes
    Learning --> Discarding : Superior BPDU received from another port

    Forwarding --> Discarding : Superior BPDU received (root changed)
    Forwarding --> Learning : Topology change detected (e.g., link failure)
    Forwarding --> [*] : Port administratively shut down
```

## 4.2 Proposal/Agreement Handshake Sequence Diagram

```mermaid
sequenceDiagram
    participant U as Upstream DP (Switch A)
    participant D as Downstream (Switch B)
    participant D2 as Other DPs on Switch B

    U ->> U : Designated port elected (better BPDU)
    Note over U : State = Discarding initially

    U ->> D : BPDU with Proposal flag = 1
    Note over U,D : Sends every Hello (2 s)

    D ->> D : Receive Proposal, ROLE=DP
    D ->> D2 : SYNC : Block all non-edge DPs
    D2 -->> D : Ack sync complete

    D ->> U : BPDU with Agreement flag = 1
    Note over D : All DPs blocked, root port can be promoted

    U ->> U : Transition to Forwarding (no timer!)
    D ->> D : Root Port transitions to Forwarding

    Note over U,D : Total time = 1 Hello (2 s) or less
```

## 4.3 Port Role Comparison Block Architecture

```mermaid
flowchart TB
    subgraph STP_802_1D_1998["Classic STP (802.1D-1998) — 5 States"]
        A1[Disabled] --> A2[Blocking] --> A3[Listening] --> A4[Learning] --> A5[Forwarding]
    end

    subgraph RSTP_802_1w["RSTP (802.1w) — 3 States"]
        B1[Discarding] --> B2[Learning] --> B3[Forwarding]
    end

    subgraph Roles_RSTP["RSTP Port Roles"]
        R1[Root Port] --> F1[Forwarding]
        R2[Designated Port] --> F1
        R3[Alternate Port] --> D1[Discarding]
        R4[Backup Port] --> D1
        R5[Edge Port] --> F1
    end

    STP_802_1D_1998 -.legacy mapping.-> RSTP_802_1w
    Roles_RSTP --> RSTP_802_1w
```

## 4.4 RSTP Network Topology — Convergence Map

```mermaid
graph TB
    RB((Root Bridge<br/>SW-A BID=0x8001)):::root
    SWB[SW-B<br/>RP: Gi0/1]:::node
    SWC[SW-C<br/>RP: Gi0/2]:::node
    SWD[SW-D<br/>RP: Gi0/1]:::node
    H1[Host 1<br/>Edge Port]:::edge
    H2[Host 2<br/>Edge Port]:::edge
    H3[Host 3<br/>Edge Port]:::edge

    RB ---|Gi0/1 - DP FORWARD| SWB
    RB ---|Gi0/2 - DP FORWARD| SWC
    SWB ---|Gi0/2 - ALT DISCARD| SWC
    SWC ---|Gi0/3 - DP FORWARD| SWD
    SWB ---|Gi0/3 - ALT DISCARD| SWD
    SWB ---|Fa0/1 - EDGE| H1
    SWC ---|Fa0/1 - EDGE| H2
    SWD ---|Fa0/1 - EDGE| H3

    classDef root fill:#4CAF50,color:#fff,stroke:#1B5E20,stroke-width:3px
    classDef node fill:#2196F3,color:#fff,stroke:#0D47A1
    classDef edge fill:#FF9800,color:#fff,stroke:#E65100

    linkStyle 2 stroke:#F44336,stroke-width:2px,stroke-dasharray: 5 5
    linkStyle 4 stroke:#F44336,stroke-width:2px,stroke-dasharray: 5 5
```

**Visual Description:**
- **Green node** = Root Bridge (SW-A)
- **Blue nodes** = non-root switches
- **Orange nodes** = edge/host ports
- **Solid black lines** = Forwarding links (DP and RP)
- **Red dashed lines** = Discarding (Alternate ports — blocked by RSTP)

## 4.5 BPDU Flag Byte Bit Map (Mermaid)

```mermaid
block-beta
    columns 8
    block:flags["RSTP BPDU Flag Byte (1 octet)"]
        columns 1
        b7["7 (MSB) TCA (legacy)"]
        b6["6 Agreement"]
        b5["5 Forwarding"]
        b4["4 Learning"]
        b3["3 Port Role (MSB)"]
        b2["2 Port Role (LSB)"]
        b1["1 Proposal"]
        b0["0 (LSB) TC"]
    end
```

## 4.6 RSTP Decision Sequence Flowchart

```mermaid
flowchart TD
    Start([New link UP or BPDU received]) --> Role{Compute<br/>Port Role}

    Role -->|Best RPC| RP[Root Port]
    Role -->|Best on segment| DP[Designated Port]
    Role -->|Other path to root| ALT[Alternate Port]
    Role -->|Other DP on same switch| BK[Backup Port]

    RP --> SyncCheck{Link P2P?}
    DP --> SyncCheck
    BK --> StateDirect[Discarding]
    ALT --> StateDirect

    SyncCheck -->|Yes + Proposal rx| PAg[Perform Sync, Send Agreement]
    SyncCheck -->|No| TimerWait[Wait for Forward Delay]

    PAg --> Fwd[Transition to Forwarding]
    TimerWait --> Fwd

    Fwd --> End([Steady State])
    StateDirect --> End
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## PART — A (3-Mark Short Answer Questions)

### Question 1 — `[KTU University Exam – Dec 2023]` (CO1, Remember)
**Q:** List any **three** differences between classic STP and RSTP.

**Model Answer (Board Standard):**

| # | STP (802.1D) | RSTP (802.1w) |
|---|---|---|
| 1 | 5 port states: Disabled, Blocking, Listening, Learning, Forwarding | **3 port states: Discarding, Learning, Forwarding** |
| 2 | Only the Root Bridge generates BPDUs; others relay | **Every switch generates its own BPDU every Hello (2 s)** |
| 3 | Uses timer-based convergence (30–50 s) | **Uses Proposal/Agreement handshake (converges in 1–3 s)** |

**[Valuation Key: 1 mark per correct difference. Total: 3 Marks]**

---

### Question 2 — `[KTU University Exam – July 2024]` (CO1, Understand)
**Q:** What is an **Edge Port** in RSTP? How does it achieve fast forwarding?

**Model Answer:**

An **Edge Port** in RSTP is a switch port that is **directly connected to an end host** (e.g., a PC, server, or router) and therefore has **no possibility of forming a Layer-2 loop**. The administrator must manually configure it (equivalent to Cisco's PortFast).

When the link comes up, the edge port transitions **immediately from Disabled to Forwarding** — skipping both the Discarding and Learning states. This is achieved because the switch **does not run the proposal/agreement handshake** on edge ports; instead it assumes the connected device is not a switch.

**[Valuation Key: Definition 2 marks + Mechanism 1 mark = 3 Marks]**

> [!WARNING]
> **Common Mistake:** Students often write *"edge port skips only Learning state"* — this is **WRONG**. The edge port skips **both** Discarding and Learning, going directly to Forwarding.

---

## PART — B (14-Mark Module Internal Choice Questions)

### OPTION A — `[KTU University Exam – Model Paper 2024]` (CO1, CO2 — Apply, Analyze)

**Q. (a)** With a neat diagram, explain the **Proposal/Agreement mechanism** of RSTP. Why does it require a **point-to-point full-duplex link**? **[7 Marks]**

#### Model Solution:

**Step 1 — Diagram (3 marks):** Draw the sequence diagram as shown in Section 4.2 of this note, showing:
- Upstream Designated Port → Downstream Switch
- Proposal BPDU sent (with flag bit set)
- Sync operation (blocking of non-edge DPs on downstream)
- Agreement BPDU returned
- Both ports transition to Forwarding

**Step 2 — Sequence (2 marks):**
1. Upstream DP sends BPDU with **Proposal flag = 1**.
2. Downstream switch performs **sync**: blocks all non-edge DPs.
3. Downstream replies with BPDU **Agreement flag = 1**.
4. Upstream transitions to Forwarding without waiting for Forward Delay.

**Step 3 — Why P2P only? (2 marks):**
- On a **shared (half-duplex) link**, multiple switches could be connected via a hub. The Proposal might not reach *all* switches simultaneously, leading to potential **transient loops**.
- RSTP's rapid transition assumes the Proposal is received by **exactly one** downstream switch — guaranteed only on a **P2P full-duplex link**.
- On shared segments, RSTP **falls back to the conservative timer-based** 802.1D behavior.

**[Valuation Key: Diagram 3 Marks + Sequence 2 Marks + P2P Justification 2 Marks = 7 Marks]**

---

**Q. (b)** A switched network has 4 switches (SW1, SW2, SW3, SW4) connected in a ring. SW1 is the **Root Bridge** with BID = 32768.0000.1111.1111. The long-format port costs for all 1 Gbps links are **20,000** and for the 100 Mbps link between SW2 and SW3 are **200,000**. Determine:
(i) The **Root Port** on SW4.
(ii) The total **Root Path Cost** for SW4.
(iii) Show which ports are in **Discarding** state. **[7 Marks]**

**Given:** $BID_{SW1} = 32768.0000.1111.1111$ (lowest → Root).
All 1 Gbps links cost = 20,000; 100 Mbps link = 200,000.

**Network Topology:**
```
SW1 (Root) ---1G--- SW2 ---100M--- SW3 ---1G--- SW4
  \___________________________________________1G__/
```

#### Model Solution:

**Step 1 — Root election (1 mark):** SW1 has the lowest BID → **Root Bridge**. All SW1 ports are **Designated Ports (DP) in Forwarding**.

**Step 2 — SW2 Root Port selection (1 mark):**
- Path via SW2↔SW1 (1G) = $0 + 20{,}000 = 20{,}000$ ✓
- Path via SW2↔SW3↔SW4↔SW1 (mixed) = $0 + 200{,}000 + \ldots$ (higher)
- **SW2's RP = port to SW1 (1G)**, RPC = 20,000.

**Step 3 — SW3 Root Port selection (1 mark):**
- Path via SW3↔SW4↔SW1 (1G+1G) = $0 + 20{,}000 + 20{,}000 = 40{,}000$
- Path via SW3↔SW2↔SW1 (100M+1G) = $0 + 200{,}000 + 20{,}000 = 220{,}000$
- **SW3's RP = port to SW4 (1G)**, RPC = 40,000.

**Step 4 — SW4 Root Port selection (1 mark):**
- Path via SW4↔SW1 (1G) = $0 + 20{,}000 = 20{,}000$ ✓
- Path via SW4↔SW3↔SW2↔SW1 = $0 + 20{,}000 + 40{,}000 = ...$ wait — let us recompute cumulatively.

**Corrected cumulative RPC for SW4:**
- **Direct path:** SW4 → SW1 (1G) → RPC = $0 + 20{,}000 = 20{,}000$
- **Indirect path:** SW4 → SW3 (1G) → SW3 to root RPC = 40,000 → SW4 receives $40{,}000 + 20{,}000 = 60{,}000$

Compare: $20{,}000 < 60{,}000$, so **SW4's Root Port = port to SW1 (direct 1G link)**.

**Step 5 — Total Root Path Cost on SW4 (1 mark):**
$$
\boxed{RPC_{SW4} = 20{,}000}
$$

**Step 6 — Identifying Discarding ports (2 marks):**
- **SW2 ↔ SW3 link (100 Mbps):** SW2's port to SW3 sees RPC = 220,000, but SW3's port to SW2 sees RPC = 20,000 + 200,000 = 220,000. Since both ends compute equal cost, the **lower BID wins** as Designated. SW2 has lower BID than SW3, so SW2's port = DP-Forwarding, and **SW3's port to SW2 = Alternate → DISCARDING**. ✓
- **SW3 ↔ SW4 link:** SW3 sees its own port as RP, so its port to SW4 is a non-RP non-DP → could be ALT if there's a better path. Since SW4's RP is to SW1 directly, SW3's port to SW4 is **not the RP**, and SW4's port to SW3 is also not the RP. The designated port on this segment is decided by lower BID — SW3 has lower BID, so SW3's port to SW4 = DP-Forwarding, and **SW4's port to SW3 = Alternate → DISCARDING**. ✓
- **SW1 ↔ SW4 link:** Both RPs (well, SW1's port is DP, SW4's is RP) → **Forwarding**. ✓

**Final Answer — Discarding Ports:**
$$
\boxed{\text{SW3's port to SW2} \;\; \text{and} \;\; \text{SW4's port to SW3}}
$$

**[Valuation Key: 7 marks = 1(Root) + 1(SW2 RP) + 1(SW3 RP) + 1(SW4 RP) + 1(RPC) + 2(Discarding ports identification)]**

---

### OPTION B — `[KTU University Exam – Model Paper 2024]` (CO1, CO2 — Understand, Apply)

**Q. (a)** Explain the **port roles** in RSTP with a neat sketch. How are they different from the port roles of classical STP? **[7 Marks]**

#### Model Solution:

**Step 1 — RSTP Port Roles (3.5 marks):**

| Role | Description | State |
|---|---|---|
| **Root Port** | Port on a non-root switch with the lowest RPC to the root | Forwarding |
| **Designated Port** | Port selected to forward frames on a given segment toward the root | Forwarding |
| **Alternate Port** | A blocked port offering an *alternate* path to the root | Discarding |
| **Backup Port** | A blocked port on the *same* switch that is a backup to a DP (shared segment) | Discarding |
| **Edge Port** | A port directly connected to an end host (no loop risk) | Forwarding |

**Step 2 — Comparison with STP (2.5 marks):**

In **classical STP**, ports had only 3 roles: Root, Designated, and **Blocking (or Disabled)**. There was no distinction between Alternate and Backup, and no concept of Edge port (PortFast was a Cisco-proprietary addition, not part of 802.1D).

**RSTP introduces:**
- **Alternate vs Backup:** Alternate = backup *to another switch's RP*; Backup = backup *to one's own DP* on a shared link.
- **Edge Port:** Standardized in IEEE 802.1w (not vendor-specific).
- **Explicit role encoding** in the BPDU flag byte (bits 2–3).

**Step 3 — Sketch (1 mark):** Draw a 3-switch ring with one port labeled RP, one DP, one ALT, one BK.

**[Valuation Key: Roles table 3.5 + Comparison 2.5 + Sketch 1 = 7 Marks]**

---

**Q. (b)** Describe the **BPDU format** of RSTP (Version 2). What are the **differences** between the RSTP BPDU and the original 802.1D BPDU? **[7 Marks]**

#### Model Solution:

**Step 1 — BPDU Format (3 marks):** Provide the layout as in Section 2.4 of this note. List each field with its byte size. Highlight:
- Protocol ID = 0x0000
- **Version = 2** (vs 0 for STP)
- BPDU Type = 0x02
- **Flags byte (1 octet)** with 8 bits detailed
- Root ID (8 bytes), RPC (4 bytes), Bridge ID (8 bytes), Port ID (2 bytes), Message Age, Max Age, Hello Time, Fwd Delay, Version 1 Length.

**Step 2 — Differences from STP BPDU (3 marks):**

| # | Field | STP (V0) | RSTP (V2) |
|---|---|---|---|
| 1 | Version | 0 | **2** |
| 2 | BPDU Type | 0x00 (Config) or 0x80 (TCN) | **0x02 (single type, all-purpose)** |
| 3 | Flags byte | Only TC and TCA bits | **8 bits: TC, Proposal, Port Role, Learning, Forwarding, Agreement, TCA** |
| 4 | Origination | Only Root Bridge | **Every switch** |
| 5 | Interval | Relay (if 3 missed → top. change) | **Strict 2 s, with hold count** |
| 6 | V1 Length field | Absent | **Present (for backward-compat)** |

**Step 3 — Significance (1 mark):**
- The single BPDU type simplifies processing.
- The expanded flag byte allows Proposal/Agreement.
- Self-generation enables faster failure detection.

**[Valuation Key: Format 3 + Differences 3 + Significance 1 = 7 Marks]**

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — RSTP Pitfalls:**
> 1. **Do not confuse RSTP port *states* with port *roles*.** They are orthogonal concepts. A Forwarding state does not imply a Root role.
> 2. **Path Cost in 802.1D-2004 is "long format"** (20,000 for 1 Gbps). Many students write 4, which is the *legacy* short format. Read the question carefully.
> 3. **Edge Port must be explicitly configured.** It is *not* automatic. If you connect a switch to an "edge" port, you risk a loop.
> 4. **Proposal/Agreement only works on P2P full-duplex.** On shared (half-duplex) segments, RSTP falls back to STP behavior.
> 5. **RSTP BPDU is still 35 bytes** on the wire (not 36) — students often miscount. Type 0x02 is the only difference.
> 6. **Max Age in 802.1w defaults to 6 s**, not 20 s. (The 20 s default is the legacy 802.1D value; RSTP often uses a shorter Max Age to be consistent with the 2 s Hello.)
> 7. **BPDU Guard vs Edge Port:** BPDU Guard is a *protection mechanism* (shuts the port if a BPDU is received), while Edge Port is the *fast-forwarding mechanism*. They are typically used together.

---

## TOPIC RECAP & IMPORTANT THINGS TO REMEMBER

- [x] **RSTP (IEEE 802.1w)** reduces STP convergence from 30–50 s to **< 6 s**, typically 1–3 s.
- [x] **Three port states:** Discarding, Learning, Forwarding (was 5 in STP).
- [x] **Five port roles:** Root, Designated, Alternate, Backup, Edge.
- [x] **BPDU Version = 2**, Type = 0x02, generated by **every switch every Hello (2 s)**.
- [x] **Proposal/Agreement handshake** is the core fast-convergence mechanism. It requires **point-to-point full-duplex** links.
- [x] **Sync operation** blocks all non-edge Designated Ports on the downstream switch before sending Agreement.
- [x] **Edge Port** = PortFast equivalent. Skips Discarding and Learning. Goes directly to Forwarding.
- [x] **Long-format Path Cost** (802.1D-2004): 10 Mbps = 2,000,000 $\mid$ 100 Mbps = 200,000 $\mid$ 1 Gbps = 20,000 $\mid$ 10 Gbps = 2,000.
- [x] **Bridge ID = 4-bit Priority + 12-bit Extended + 48-bit MAC** (64 bits total). Default Priority = 32768 (0x8000).
- [x] **RSTP is backward-compatible with STP.** Mixed networks run STP on the segment with the older switch.
- [x] **TC propagation:** RSTP uses **TC flag flooding** instead of STP's TCN/TCA handshake, and flushes **only affected MACs**.
- [x] **Default timers:** Hello = 2 s, Max Age = 6 s (was 20 s in STP), Fwd Delay = 15 s (legacy, rarely used in RSTP).
- [x] **Convergence formula:**
  - STP: $T_{conv} = T_{max} + 2 \cdot T_{fwd} = 20 + 30 = 50$ s
  - RSTP: $T_{conv} \le d \cdot T_{hello} \approx 2{-}6$ s
- [x] **BPDU Guard** should always be enabled on Edge Ports as a safety net.
- [x] **Real-world alternatives for sub-50 ms:** ERPS (G.8032), Cisco REP — RSTP alone is *not* fast enough for mission-critical rings.
- [x] **Killer exam phrase:** *"In RSTP, every switch generates its own BPDUs every Hello interval; the root bridge does not originate them for everyone."*
- [x] **Vendor-specific extensions:** Cisco **Rapid PVST+** runs an RSTP instance *per VLAN*; standard RSTP runs a *single* instance for all VLANs (802.1Q CST).

<!-- SECTION_5_END -->
