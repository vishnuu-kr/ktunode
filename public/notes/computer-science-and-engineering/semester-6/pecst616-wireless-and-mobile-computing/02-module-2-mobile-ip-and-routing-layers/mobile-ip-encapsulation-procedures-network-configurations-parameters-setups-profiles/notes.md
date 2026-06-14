# Mobile IP encapsulation procedures network configurations parameters setups profiles

<!-- SECTION_1_START -->

# Mobile IP Encapsulation Procedures, Network Configurations, Parameters, Setups & Profiles

## 1.1 Formal KTU 2024 Definition

> [!IMPORTANT]
> **Mobile IP (RFC 3344 / RFC 6275)** is a **network-layer protocol** standardized by the IETF that enables a **Mobile Node (MN)** to change its point of attachment to the Internet across different IP subnets while maintaining continuous connectivity using a **permanent Home Address (HoA)**. It accomplishes this through **tunneling (encapsulation)** mechanisms at the **Home Agent (HA)** and **de-capsulation** at the **Foreign Agent (FA)** or the MN itself.

In the **KTU 2024 Scheme (Module 2 – Mobile IP and Routing Layers)**, the syllabus explicitly focuses on:

1. The **encapsulation procedures** used to forward the original datagram from the **Correspondent Node (CN)** to the MN's current location.
2. The **network configuration parameters** required to register, bind, and tunnel.
3. The **setups and profiles** (Home Agent, Foreign Agent, Mobile Node profiles) used during agent discovery, registration, and tunnel establishment.

> [!NOTE]
> **Why Mobile IP exists:** The Internet was originally designed assuming a node's IP address uniquely identifies both its **identity** and its **location**. Mobile IP breaks this assumption by **decoupling identity (HoA) from location (Care-of Address)**.

---

## 1.2 Intuitive Analogy (Plain-English Explanation)

Imagine a **college student named Arun** (the Mobile Node) whose permanent home address in Kottayam is published in the university directory (the DNS / Home Address). When Arun goes on an internship to Bangalore, mail sent to his Kottayam address must still reach him. The **Post Office at Kottayam** (the **Home Agent**) opens all the mail, puts it inside a **new envelope** addressed to his **Bangalore address** (Care-of Address), and forwards it. The **Bangalore branch office** (the **Foreign Agent**) receives the new envelope, opens it, and hands the original mail to Arun.

> **The "new envelope" that the Home Agent wraps around the original packet is called ENCAPSULATION.**
> **The act of opening that envelope at the foreign network is called DECAPSULATION.**

This is exactly what Mobile IP does at Layer 3.

| Real-World Element | Mobile IP Counterpart |
|---|---|
| Arun (student) | Mobile Node (MN) |
| Permanent Kottayam address | Home Address (HoA) |
| Bangalore temporary address | Care-of Address (CoA) |
| Kottayam Post Office | Home Agent (HA) |
| Bangalore branch office | Foreign Agent (FA) |
| Friend writing the letter | Correspondent Node (CN) |
| New outer envelope | Outer IP Header (Tunnel Header) |
| Original letter inside | Inner IP Header + Payload |

---

## 1.3 Entities, Addresses & Key Constants

> [!IMPORTANT]
> **Permanent Identifiers (must remain unchanged for the entire lifetime of the MN):**
> - **Home Address (HoA):** The MN's permanent IP address assigned at the home network.
> - **Home Agent Address (HAA):** The IP address of the HA (typically a router interface on the home subnet).
>
> **Location-Dependent Identifiers (change as MN moves):**
> - **Care-of Address (CoA):** The MN's temporary IP address in the visited network. Two types exist:
>   * **Foreign Agent CoA (FA-CoA):** IP address of the FA's interface. MN uses FA's address.
>   * **Co-located CoA (CCoA):** A temporary IP address assigned directly to the MN itself (e.g., via DHCP).

> [!NOTE]
> **Standard default values (per RFC 3344) frequently tested in KTU exams:**
> - **Default Registration Lifetime:** **1800 seconds (30 minutes)** – minimum mandatory; HA may reduce it.
> - **Maximum Registration Lifetime:** **65535 seconds** (16-bit lifetime field).
> - **Recommended default tunnel encapsulation:** **IP-in-IP (Protocol Number 4)**.
> - **UDP Port for Mobility Agent Advertisements:** **Port 1985 (mip-mn)** in some implementations; agents also use **ICMP Router Advertisements** with the **Mobility Agent Advertisement Extension**.
> - **IP Protocol 55:** Minimal Encapsulation within IP.
> - **IP Protocol 47:** GRE (Generic Routing Encapsulation).

---

## 1.4 Conceptual Topology (Geometric Intuition)

> [!VISUALIZATION CONTROL]
> **Concept:** Mobile IP triangle – spatial layout of CN, HA, MN across two physical subnets.
> **GeoGebra / Desmos Input:**
> * Define three points: $C = (0, 2)$ representing CN, $H = (4, 2)$ representing HA, $F = (8, 0)$ representing FA, and $M = (8, -2)$ representing MN on visited subnet.
> * Plot segments: $C \to H$ (logical delivery), $H \to F$ (encapsulated tunnel), $F \to M$ (final delivery).
> **Visual Description:** Student should see a triangular forward path. The CN sends to the HoA (logical), the HA intercepts and re-addresses (tunnel segment), the FA decapsulates and forwards the inner datagram to MN.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Mobile IP Operational Pipeline

Mobile IP works in **three strict phases** (high-yield for KTU long-answer questions):

1. **Agent Discovery** – MN learns the presence of HA/FA using **ICMP Router Advertisement** extended with **Mobility Agent Advertisement Extension**, or by sending **Agent Solicitation**.
2. **Registration** – MN sends **Registration Request (RRQ)** to HA through the FA; HA replies with **Registration Reply (RRP)**. On success, a **binding** (HoA ↔ CoA) is created and a **tunnel** is established.
3. **Tunneling (Encapsulation / Decapsulation)** – Data packets from CN to HoA are intercepted by HA, **encapsulated** with a new outer header, sent through the tunnel, and **decapsulated** at the FA (or co-located MN).

> [!IMPORTANT]
> **Encapsulation = wrapping an entire IP datagram as the *payload* of a *new* outer IP datagram.** This is layer-3 tunneling. The original packet is preserved bit-for-bit inside the new packet.

---

## 2.2 Why Multiple Encapsulation Methods Exist (Engineering Trade-off)

Each encapsulation method balances **bandwidth overhead**, **processing complexity**, and **header-compression support**. The HA and MN negotiate the encapsulation type during registration using flags in the RRQ/RRP.

| Encapsulation Method | RFC | Outer Header Overhead | Header Compression? | KTU Exam Frequency |
|---|---|---|---|---|
| **IP-in-IP Encapsulation** | RFC 2003 | **20 bytes** (full new IP header) | No (raw) | **Very High** |
| **Minimal Encapsulation** | RFC 2004 | **8 bytes** (or 12 with S bit) | No (raw) | High |
| **Generic Routing Encapsulation (GRE)** | RFC 2784 / 1701 | **24 bytes** (20 IP + 4 GRE) | Yes (optional fields) | Medium |
| **IP Encapsulation within IP (variant)** | RFC 1853 | 20 bytes | No | Low |

---

## 2.3 KTU High-Yield Parameter & Formula Cheat Sheet

> [!IMPORTANT]
> The following table contains the **exact parameters, header fields, default values, units, and KTU-relevant formulas** that examiners expect you to reproduce. Memorize all columns.

| Parameter / Field | Where It Appears | Size / Value | Purpose | KTU Exam Tip |
|---|---|---|---|---|
| $L_{reg}$ – Registration Lifetime | RRQ & RRP | 16 bits, default = **1800 s** | Validity of binding | Use $L_{reg} = 1800$ if "default" asked |
| $H_{IP}$ – IP header length | Any IP header | 20 bytes (min), 60 bytes (max) | Used in overhead calc | $H_{IP\_min} = 20$ bytes |
| $H_{IPinIP}$ – IP-in-IP overhead | Tunnel packet | **20 bytes** | New outer header | $O_{IPinIP} = 20$ |
| $H_{MIN}$ – Minimal Encaps overhead | Tunnel packet | **8 bytes** (forwarding header) | Replaces fields in original hdr | $O_{MIN} = 8$ |
| $H_{GRE}$ – GRE overhead | Tunnel packet | **4 bytes** (base) + flags | Adds protocol field | $O_{GRE} = 4$ |
| $T_{end\--to\--end}$ – end-to-end delay | Datagram path | seconds | $T_{total} = T_{CN\to HA} + T_{HA\to FA} + T_{FA\to MN}$ | Sum of three hops |
| SPI – Security Parameter Index | Mobile-Foreign & Mobile-Home Authentication Extensions | 32 bits | Identifies shared secret | Same SPI + key on both sides |
| Authentication Data | Auth Extension | Variable (MD5 = 16 bytes) | HMAC-MD5 over the message | Cannot be verified without it |
| Total Tunneled Packet Size $P_{tunnel}$ | Resulting packet | bytes | $P_{tunnel} = P_{inner} + O_{encap}$ | Add overhead to inner |
| Maximum Tunnel MTU | Link layer | typically 1500 – overhead | Avoid fragmentation | $MTU_{tunnel} = MTU_{link} - O_{encap}$ |
| Flag F (Foreign Agent) | RRQ | 1 bit | 1 = FA relays; 0 = co-located | Indicates CoA type |
| Flag B (Broadcast) | RRQ | 1 bit | 1 = MN wants broadcast forwarded | Used in home network |
| Flag M (Minimal) | RRQ & RRP | 1 bit | 1 = Minimal Encapsulation accepted | Negotiation bit |
| Flag G (GRE) | RRQ & RRP | 1 bit | 1 = GRE accepted | Negotiation bit |
| Flag V (Van Jacobson) | RRQ & RRP | 1 bit | 1 = VJ header compression accepted | Low-bandwidth links |
| Flag T (Reverse Tunnel) | RRQ & RRP | 1 bit (RFC 3024) | 1 = Reverse tunneling required | Solves ingress filtering |
| Registration Reply Code | RRP | 8 bits | 0 = success; non-zero = failure | 1 = HA unreachable, etc. |
| UDP Port 434 | Registration msg | 16 bits | RRQ/RRP destination port | **Must be 434** |
| Identifier Field | RRQ & RRP | 64 bits | Matches request to reply | Random 64-bit nonce |
| Mobility Agent Advertisement Extension | ICMP Router Adv. | Variable | Identifies FA, CoA, lifetime | Type = 16 (RFC 1256 ext) |

---

## 2.4 Real-World Engineering Utility

| Domain | Why Mobile IP Encapsulation Is Used |
|---|---|
| **4G/5G EPC / PMIP** | Proxy Mobile IP (PMIP) uses GRE tunnels between Local Mobility Anchor (LMA) and MAG to provide IP mobility without MN involvement. |
| **Enterprise Wi-Fi Roaming** | Cisco's Mobile IP / CCKM uses IP-in-IP or GRE tunnels to maintain VoIP sessions across controller handoffs. |
| **Aeronautical / Maritime Networks** | Aircraft IP addresses (HoA) remain stable while physically crossing oceans – tunneled to satellite ground stations acting as FA. |
| **VoIP Handover** | Encapsulation over GRE with VJ header compression minimizes jitte
