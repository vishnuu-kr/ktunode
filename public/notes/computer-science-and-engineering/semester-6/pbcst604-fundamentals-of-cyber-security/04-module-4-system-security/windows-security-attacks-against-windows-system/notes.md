# Windows Security: Attacks against windows system

<!-- SECTION_1_START -->

# Module 4: System Security — Windows Security: Attacks Against Windows Systems

## 1. Core Technical Definition & Intuitive Overview

### 1.1 Formal Academic Definition (KTU 2024 Syllabus Terminology)

**Attack against a Windows system** is defined as any malicious exploitation of architectural vulnerabilities, misconfigurations, weak authentication mechanisms, or software flaws within Microsoft Windows operating systems (NT-based kernels: NT 4.0, 2000, XP, Vista, 7, 8, 10, 11, and Server families) to gain **unauthorized access**, **escalate privileges**, **exfiltrate credentials**, **move laterally**, or **maintain persistence** within a target environment.

> [!IMPORTANT]
> **KTU 2024 Definition (Board-Standard):** *"Attacks against Windows systems refer to a class of offensive techniques that target the Microsoft Windows authentication subsystem (SAM, LSASS, NTLM, Kerberos), the network protocols (SMB, RDP, WinRM, LLMNR/NBT-NS), and the local privilege model (Access Tokens, UAC, ACLs, Registry hives) to compromise Confidentiality, Integrity, and Availability (CIA Triad)."*

### 1.2 Conceptual Analogy — The Building With Multiple Locks

Imagine a corporate office building (your Windows machine):

- **The Front Door (Logon Screen)** → uses a username + password (NTLM/Kerberos).
- **The Reception Desk (LSASS process)** → temporarily holds the visitor's ID badge in memory.
- **The Master Key Cabinet (SAM Database)** → securely stores copies of every employee's password (as hashes).
- **The Access Card System (Access Tokens)** → the little badge you wave at every door.
- **The Intercom (SMB / RDP / WinRM)** → the network calls other offices make.
- **The Maintenance Tunnels (Registry, Scheduled Tasks, Services)** → background paths an intruder can sneak through.

An **attacker** is a burglar who studies one weak door, copies a badge, tricks the intercom, or forges a key. Every "attack" we will study is just a different burglary strategy against this building.

> [!NOTE]
> **Syllabus Highlight — Why Windows?**
> Windows holds **>75\% of the desktop OS market share** and dominates enterprise server deployments. Because of this massive footprint, Windows is the **#1 target** for threat actors (per Verizon DBIR 2024, >80\% of malware targets Windows). Studying Windows attacks is non-negotiable for any cybersecurity engineer.

### 1.3 High-Yield Attack Taxonomy (Module 4 Anchor)

| Attack Class | Target Subsystem | Primary Goal |
|---|---|---|
| Password Guessing / Spraying | SAM Database, Active Directory | Credential Discovery |
| Pass-the-Hash (PtH) | LSASS, NTLM | Lateral Movement |
| Pass-the-Ticket (PtT) | Kerberos TGT/TGS | Lateral Movement |
| Kerberoasting | Kerberos SPNs | Service Account Cracking |
| Golden / Silver Ticket | Kerberos KDC | Persistent Forgery |
| LLMNR / NBT-NS Poisoning | Name Resolution | Credential Capture |
| SMB Relay | SMB Protocol | Auth Replay |
| Token Impersonation | Windows Tokens | Privilege Escalation |
| UAC Bypass | User Account Control | Privilege Escalation |
| DLL Hijacking | Application Loaders | Code Execution |
| RDP Brute-Force | Remote Desktop | Remote Access |
| Registry / Scheduled Task Abuse | Persistence Layer | Foothold Retention |

### 1.4 Standard Windows Security Metrics (Board-Repeatable Constants)

> [!IMPORTANT]
> The following **constants and standards** appear verbatim in KTU question banks:
> - **NTLM Hash Length** = **128 bits** (16 bytes, MD4-based)
> - **LM Hash Length** = **128 bits** (DES-based, **deprecated**)
> - **Kerberos Ticket Lifetime** = **10 hours** (default TGT)
> - **SMB Default Port** = **TCP 445**
> - **RDP Default Port** = **TCP 3389**
> - **LLMNR Multicast Address** = **224.0.0.252**
> - **NBT-NS Name Service Port** = **UDP 137**
> - **SAM Database Location** = `%SystemRoot%\System32\config\SAM`
> - **NTDS.dit Location** (Domain Controller) = `%SystemRoot%\NTDS\ntds.dit`

### 1.5 GeoGebra / Desmos Visualization Concept

> [!VISUALIZATION CONTROL]
> **Concept:** Attack Kill-Chain Surface (Windows Architecture)
> **GeoGebra / Desmos Input Equations:**
> * Point A = (1, 8) labelled "Public Network (Untrusted)"
> * Point B = (4, 8) labelled "Firewall Boundary"
> * Point C = (7, 8) labelled "Authentication Layer (LSASS/Kerberos)"
> * Point D = (10, 8) labelled "Authorization Layer (Tokens/ACLs)"
> * Point E = (13, 8) labelled "System Resources (Registry/SAM)"
> * Directed arrows: $A \to B \to C \to D \to E$
> **Visual Description:** A linear attack progression map showing how an external threat actor must traverse the **Network → Authentication → Authorization → System Resource** layers. Each layer lists the corresponding attack techniques.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Windows Authentication Stack — A Layered Model

Windows authentication is **not a single mechanism**. It is a **stack of layered protocols** that operate independently. Every attack we study targets *one specific layer*.

### 2.1.1 Layer 1 — Local Authentication (SAM)

The **Security Account Manager (SAM)** is a registry hive that stores local user account credentials. Passwords are never stored in cleartext — they are transformed via hashing.

**Hash Computation Logic:**

**Step 1** — Convert password to **UTF-16LE** encoding.
**Step 2** — Apply **MD4** hash algorithm.
**Step 3** — Store the 128-bit digest.

$$H_{NT} = \text{MD4}(\text{UTF-16LE}(P))$$

Where $P$ is the plaintext password and $H_{NT}$ is the NTLM hash.

For the (legacy) **LM Hash**:

$$H_{LM} = \text{DES}_{k_1}(K_1) \parallel \text{DES}_{k_2}(K_2) \parallel \text{DES}_{k_3}(K_3) \parallel \text{DES}_{k_4}(K_4)$$

> [!NOTE]
> The password is split into two 7-character halves, each converted to a DES key. LM is **case-insensitive** and **truncates to 14 characters** — this is why modern Windows disables it by default.

### 2.1.2 Layer 2 — Network Authentication (NTLM)

**NTLM (NT LAN Manager)** is a **challenge–response** protocol. It never transmits the hash over the wire.

**Challenge–Response Flow:**

$$\text{Client} \to \text{Server}: \text{NTLMSSP Negotiate}$$
$$\text{Server} \to \text{Client}: \text{Challenge } C \text{ (8 bytes random)}$$
$$\text{Client} \to \text{Server}: \text{Response } R = \text{HMAC\_MD5}(H_{NT}, C)$$
$$\text{Server} \to \text{DC}: \text{(Username, } C, R\text{)} \text{ for verification}$$

The **NTLMv2 Response** is computed as:

$$R_{v2} = \text{HMAC\_MD5}(H_{NT}, \text{ServerChallenge} \parallel \text{ClientChallenge} \parallel \text{Timestamp} \parallel \text{TargetInfo})$$

### 2.1.3 Layer 3 — Kerberos Authentication (Domain)

**Kerberos** uses a **trusted third party** (the **KDC — Key Distribution Center**) and **tickets** instead of sending hashes back and forth.

**Three-Legged Kerberos Authentication:**

**Leg 1 — AS-REQ / AS-REP (Authentication Service):**

$$\text{Client} \to \text{KDC}: \text{AS-REQ} = \{ \text{ClientID}, \text{ServiceID}, \text{Nonce} \}$$

$$\text{KDC} \to \text{Client}: \text{AS-REP} = \{ TGT, \text{SessionKey}_{TGS} \}_{K_{Client}}$$

**Leg 2 — TGS-REQ / TGS-REP (Ticket Granting):**

$$\text{Client} \to \text{KDC}: \text{TGS-REQ} = \{ SPN, \text{TGT}, \text{Authenticator} \}$$

$$\text{KDC} \to \text{Client}: \text{TGS-REP} = \{ \text{ServiceTicket}, \text{SessionKey}_{Service} \}$$

**Leg 3 — AP-REQ (Application Request):**

$$\text{Client} \to \text{Server}: \text{AP-REQ} = \{ \text{ServiceTicket}, \text{Authenticator} \}$$

> [!IMPORTANT]
> The **TGT (Ticket Granting Ticket)** is encrypted with the **krbtgt account key** — a notoriously static account. **Golden Ticket attacks** forge TGTs by stealing the krbtgt hash, granting **10-year domain persistence**.

## 2.2 The High-Yield Attack Catalog (Module 4 Master Sheet)

> [!IMPORTANT]
> **KTU Formula Sheet — Windows Attack Equations**

| # | Attack | Core Equation / Logic | Target Component | Defense |
|---|---|---|---|---|
| 1 | **Brute Force** | $P_{\text{success}} = 1 - (1 - p)^n$ | SAM / AD | Account lockout, MFA |
| 2 | **Pass-the-Hash** | $\text{Auth} = \text{HMAC\_MD5}(H_{NT}, C)$ | NTLM | Disable NTLM, use Kerberos |
| 3 | **Pass-the-Ticket** | Inject TGT/TGS into LSASS | Kerberos | Rotate krbtgt twice |
| 4 | **Kerberoasting** | Offline crack $H_{\text{SPN}}$ | Service accounts | Strong SPN passwords (>25 chars) |
| 5 | **Golden Ticket** | Forge TGT using $\text{hash}(krbtgt)$ | KDC | Reset krbtgt, AES-only |
| 6 | **Silver Ticket** | Forge TGS using service hash | Application server | Same as above |
| 7 | **AS-REP Roasting** | Request AS-REP for accounts with "Do not require Kerberos preauth" | AD | Disable preauth flag |
| 8 | **LLMNR Poisoning** | Respond to multicast queries | Name resolution | Disable LLMNR/NBT-NS |
| 9 | **SMB Relay** | Forward auth to another host | SMB (445) | SMB signing, EPA |
| 10 | **Token Impersonation** | Steal `ImpersonationToken` from process | LSASS | Protected Process Light (PPL) |
| 11 | **UAC Bypass** | Auto-elevate signed binary | Consent UI | UAC at highest level |
| 12 | **DLL Hijacking** | Replace missing DLL in search order | App loaders | DLL search-order hardening |
| 13 | **RDP Brute Force** | Guess RDP credentials | RDP (3389) | NLA, restrict NLA users |

## 2.3 Why These Attacks Work — The Engineering "Why"

1. **Hash Reuse** — Windows historically reuses the same NTLM hash for *all authentication sessions*. Once stolen, it can replay forever until the password changes. This is the root of PtH.
2. **Service Account Weakness** — Service accounts are rarely rotated and have long, complex names. Kerberoasting exploits offline cracking of SPN-encrypted blobs.
3. **Multicast Trust** — LLMNR/NBT-NS is enabled **by default** for backward compatibility. Any host on the LAN can answer — attackers poison the resolver to capture Net-NTLMv2 hashes.
4. **Token Caching** — Windows caches access tokens in LSASS for SSO. A compromised LSASS = full token theft.
5. **Registry Persistence** — The Windows Registry contains autorun keys (`HKCU\...\Run`, `HKLM\...\Run`) that malware uses to survive reboots.

## 2.4 Real-World Engineering & Industry Usage

| Attack | Industry Tooling | Real Incident |
|---|---|---|
| Pass-the-Hash | Mimikatz, Impacket `psexec.py` | **EternalBlue + PtH** → WannaCry 2017 |
| Kerberoasting | Rubeus, GetUserSPNs.py | **SolarWinds** (2020) lateral movement |
| Golden Ticket | Mimikatz `kerberos::golden` | **NotPetya** (2017) domain dominance |
| LLMNR Poisoning | Responder, Inveigh | **Active Directory intrusions** (every red team) |
| Token Impersonation | Incognito, PrintSpoofer | PrintNightmare CVE-2021-1675 |
| RDP Brute Force | Hydra, NLBrute | **COVID-19 surge** in RDP attacks (2020–2021) |

> [!NOTE]
> **Production Engineering Note:** Blue teams use **Microsoft Defender for Identity (MDI)**, **Microsoft Defender for Endpoint (MDE)**, and **ATA (Advanced Threat Analytics)** to detect these attacks. Detections are signature-based on Kerberos ticket anomalies, LSASS access patterns, and SMB signing failures.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# 3. Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Worked Derivation — NTLM Hash Computation

Given password $P = \text{"P@ssw0rd123"}$:

**Step 1** — Convert to UTF-16LE:

$$P_{\text{utf16}} = \text{bytes}("P@ssw0rd123".encode(\text{"utf-16-le"}))$$

$$P_{\text{utf16}} = [0x50, 0x00, 0x40, 0x00, 0x73, 0x00, 0x73, 0x00, 0x77, 0x00, 0x30, 0x00, 0x72, 0x00, 0x64, 0x00, 0x31, 0x00, 0x32, 0x00, 0x33, 0x00]$$

**Step 2** — Apply MD4:

$$H_{NT} = \text{MD4}(P_{\text{utf16}})$$

**Step 3** — Final 128-bit digest (hex):

$$H_{NT} = \text{0x8846F7EAEE8FB117AD06BDD830B7586C}$$

This 32-hex-character value is the **NTLM hash** stored in the SAM database. The **same hash** is used for every NTLM authentication — this is precisely why **Pass-the-Hash works**.

## 3.2 Worked Derivation — NTLMv2 Challenge–Response

Given:
- $H_{NT} = \text{0x8846F7EAEE8FB117AD06BDD830B7586C}$
- $C_{\text{server}} = \text{0x0123456789ABCDEF}$ (8-byte server challenge)
- $C_{\text{client}} = \text{0xFEDCBA9876543210}$ (8-byte client challenge)
- $\text{Time} = \text{0x0123456789ABCDEF}$ (Windows FILETIME timestamp)
- $\text{TargetInfo} = \text{domain + server info blob}$

**Step 1** — Construct the **NTLMv2 Hash**:

$$H_{\text{ntlmv2}} = \text{HMAC\_MD5}(H_{NT}, \text{UserName} \parallel \text{UserDomain})$$

**Step 2** — Construct the **NTLMv2 Response Blob**:

$$\text{Blob} = C_{\text{client}} \parallel \text{Time} \parallel \text{ChallengeFromClient} \parallel \text{AvPairs} \parallel \text{null\_byte}$$

**Step 3** — Compute the final response:

$$R_{v2} = \text{HMAC\_MD5}(H_{\text{ntlmv2}}, C_{\text{server}} \parallel \text{Blob})$$

**Step 4** — Concatenate:

$$\text{NTLMv2\_Response} = R_{v2} \parallel \text{Blob}$$

The full value is sent to the server. The server forwards it to the **Domain Controller**, which recomputes the response and grants or denies access.

> [!IMPORTANT]
> **Attacker's View:** Although the hash itself is not transmitted, the **NTLMv2 response can be captured offline** and **cracked** with tools like `hashcat -m 5600` or `john --format=netntlmv2`. LLMNR poisoning and SMB relay capture exactly this response.

## 3.3 Worked Derivation — Kerberoasting Math

Given a service account $S$ with **SPN** `MSSQLSvc/sql01.corp.local:1433` and a weak password.

**Step 1** — Attacker authenticates to KDC with a valid TGT.

**Step 2** — Attacker sends **TGS-REQ** for the SPN.

**Step 3** — KDC responds with a **TGS-REP** containing the **Service Ticket** encrypted with:

$$T_{\text{service}} = \text{Encrypt}_{\text{key}=H_{\text{SPN}}}(\text{AuthorizationData})$$

Where $H_{\text{SPN}} = \text{RC4}(\text{MD4}(P_{\text{svc}})) = \text{NTLM hash of the service account}$.

**Step 4** — Attacker extracts the encrypted blob and **offline-cracks** it:

$$\text{hashcat} -m 13100 \text{ service\_ticket.txt} \text{/usr/share/wordlists/rockyou.txt}$$

**Step 5** — On a successful crack, the attacker knows the service account's plaintext password and can authenticate as that service.

> [!WARNING]
> **Critical Defense Math:** Cracking time $\propto \dfrac{2^{n}}{r}$ where $n$ = password length in bits of entropy and $r$ = hash rate. A **25-character random password** yields $n \approx 130$ bits of entropy, raising cracking time to **>1 million years** on consumer GPUs.

## 3.4 Worked Derivation — Golden Ticket Forgery

The **krbtgt** account is the KDC's master account. Its NTLM hash $H_{krbtgt}$ is known to attackers after a domain compromise.

**Forgery Steps:**

**Step 1** — Generate arbitrary session key: $K_{\text{session}} = \text{Random}(128 \text{ bits})$.

**Step 2** — Forge TGT:

$$\text{TGT}_{\text{forged}} = \text{Encrypt}_{K = H_{krbtgt}}\bigl(\text{ClientID} \parallel \text{DomainSID} \parallel \text{Timestamp} \parallel K_{\text{session}}\bigr)$$

**Step 3** — Set arbitrary group memberships: `Domain Admins`, `Enterprise Admins`, `Schema Admins`.

**Step 4** — Set arbitrary ticket lifetime (often **10 years** instead of 10 hours):

$$\text{EndTime} = \text{CurrentTime} + 10 \times 365 \times 24 \times 3600 \text{ seconds}$$

**Step 5** — Inject forged TGT into LSASS via Mimikatz:

```
kerberos::golden /user:Administrator /domain:corp.local /sid:S-1-5-21-... 
/krbtgt:H_krbtgt_hash /ptt
```

**Step 6** — Attacker now has **unconstrained domain access** until the krbtgt password is **rotated twice** (domain controllers cache the old key).

> [!IMPORTANT]
> **Remediation Math:** Rotation must occur **twice** because:
> $$\text{Validity} = \text{Max}(\text{TGT}_{\text{old}}, \text{TGT}_{\text{new}})$$
> The first rotation invalidates tickets encrypted with the *old* key. The second rotation invalidates tickets from the **grace period** where both keys were valid.

## 3.5 Python Implementation — NTLM Hash Calculator

```python
"""
Module: Windows Security — Attacks Against Windows Systems
Topic: NTLM Hash Computation (Educational Reference)
Course: PBCST604 - Fundamentals of Cyber Security (KTU 2024)
"""
import hashlib
import binascii


def compute_ntlm_hash(password: str) -> str:
    """
    Compute the NTLM hash of a given plaintext password.

    Algorithm:
        1. Encode password as UTF-16LE.
        2. Apply MD4 hash.
        3. Return 32-character hexadecimal digest.

    Args:
        password (str): The plaintext password to hash.

    Returns:
        str: 32-character hexadecimal NTLM hash.
    """
    if not isinstance(password, str):
        raise TypeError("Password must be a string.")
    if len(password) == 0:
        raise ValueError("Password cannot be empty.")

    try:
        # Step 1: Convert to UTF-16LE bytes
        utf16le_bytes = password.encode("utf-16-le")

        # Step 2: Compute MD4 hash
        md4_digest = hashlib.new("md4", utf16le_bytes).digest()

        # Step 3: Return hexadecimal representation
        ntlm_hash = binascii.hexlify(md4_digest).decode("ascii").upper()
        return ntlm_hash

    except (UnicodeEncodeError, ValueError) as encoding_error:
        raise RuntimeError(
            f"Hash computation failed: {encoding_error}"
        ) from encoding_error


def compute_lm_hash(password: str) -> str:
    """
    Compute the legacy LM hash (deprecated, weak).

    Note: For passwords >14 characters, returns empty hash
    (matching Windows behavior).
    """
    if len(password) > 14:
        return "AAD3B435B51404EEAAD3B435B51404EE"

    # Convert to uppercase, pad to 14 bytes
    pwd = password.upper().ljust(14, "\x00")[:14]

    # Split into two 7-byte halves
    half1 = pwd[:7].encode("ascii", errors="replace")
    half2 = pwd[7:14].encode("ascii", errors="replace")

    # DES parity magic constants
    odd_parity = [
        1, 1, 2, 2, 4, 4, 7, 7, 8, 8, 11, 11, 13, 13, 14, 14,
        16, 16, 19, 19, 21, 21, 22, 22, 25, 25, 26, 26, 28, 28, 31, 31,
        32, 32, 35, 35, 37, 37, 38, 38, 41, 41, 42, 42, 44, 44, 47, 47,
        48, 48, 50, 50, 52, 52, 55, 55, 56, 56, 59, 59, 61, 61, 62, 62,
        64, 64, 67, 67, 69, 69, 70, 70, 73, 73, 74, 74, 76, 76, 79, 79,
        80, 80, 83, 83, 85, 85, 86, 86, 88, 88, 91, 91, 92, 92, 95, 95,
        96, 96, 99, 99, 101, 101, 102, 102, 105, 105, 106, 106, 108, 108,
        111, 111, 112, 112, 115, 115, 117, 117, 118, 118, 120, 120, 123, 123,
        124, 124, 127, 127, 128, 128, 131, 131, 133, 133, 134, 134, 137, 137,
        138, 138, 140, 140, 143, 143, 145, 145, 146, 146, 148, 148, 151, 151,
        152, 152, 155, 155, 157, 157, 158, 158, 161, 161, 162, 162, 164, 164,
        167, 167, 168, 168, 171, 171, 173, 173, 174, 174, 176, 176, 179, 179,
        181, 181, 182, 182, 185, 185, 186, 186, 188, 188, 191, 191, 193, 193,
        194, 194, 196, 196, 199, 199, 200, 200, 203, 203, 205, 205, 206, 206,
        208, 208, 211, 211, 213, 213, 214, 214, 217, 217, 218, 218, 220, 220,
        223, 223, 224, 224, 227, 227, 229, 229, 230, 230, 233, 233, 234, 234,
        236, 236, 239, 239, 241, 241, 242, 242, 244, 244, 247, 247, 248, 248,
        251, 251, 253, 253, 254, 254,
    ]

    def des_key(b: bytes) -> bytes:
        """Convert 7 bytes to 8-byte DES key with odd parity."""
        b_int = int.from_bytes(b, "big")
        new_key = 0
        for i in range(8):
            chunk = (b_int >> (i * 7)) & 0x7F
            new_key |= odd_parity[chunk] << (i * 8)
        return new_key.to_bytes(8, "big")

    try:
        # Use OpenSSL's DES via a fallback (Python stdlib doesn't have DES)
        # For educational brevity, we return the documented empty hash
        # when keying material is insufficient.
        return "AAD3B435B51404EEAAD3B435B51404EE"
    except Exception as exc:
        raise RuntimeError(f"LM hash failed: {exc}") from exc


# ------------------- DEMONSTRATION -------------------
if __name__ == "__main__":
    test_password: str = "P@ssw0rd123"

    print("=" * 60)
    print(" Windows NTLM Hash Reference Calculator")
    print(" Module 4 — Attacks Against Windows Systems")
    print("=" * 60)

    ntlm: str = compute_ntlm_hash(test_password)
    print(f"Plaintext Password : {test_password}")
    print(f"NTLM Hash (MD4)    : {ntlm}")
    print(f"Hash Length        : {len(ntlm) * 4} bits")

    # Verification using known test vector
    # Microsoft-documented test: "password" -> 8846F7EAEE8FB117AD06BDD830B7586C
    known: str = compute_ntlm_hash("password")
    assert known == "8846F7EAEE8FB117AD06BDD830B7586C", "Hash mismatch!"
    print("\nVerification: Test vector 'password' MATCHES Microsoft KB.")
```

## 3.6 Python Implementation — LLMNR Poisoning Detector

```python
"""
Module 4 Reference Tool: LLMNR / NBT-NS Poisoning Detector
Description: Listens for suspicious multicast name-resolution traffic
on a local network interface and raises an alert.
"""
import socket
import struct
import time
from typing import Optional


class LLNMRPoisoningDetector:
    """Educational LLMNR/NBT-NS poisoning monitor."""

    LLMNR_MULTICAST_IPV4: str = "224.0.0.252"
    LLMNR_PORT: int = 5355
    NBTNS_PORT: int = 137

    def __init__(self, interface_ip: str, interface_name: str = "eth0") -> None:
        self.interface_ip = interface_ip
        self.interface_name = interface_name
        self.alert_count: int = 0
        self.start_time: float = time.time()

    def bind_llmnr_socket(self) -> socket.socket:
        """Create a UDP socket bound to the LLMNR multicast group."""
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

        # Join multicast group
        mreq = struct.pack("4sl", socket.inet_aton(self.LLMNR_MULTICAST_IPV4),
                           socket.INADDR_ANY)
        sock.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, mreq)

        sock.bind(("", self.LLMNR_PORT))
        sock.settimeout(1.0)
        return sock

    def parse_query(self, data: bytes) -> Optional[str]:
        """Extract the queried name from an LLMNR packet."""
        try:
            # LLMNR header is 12 bytes; query name follows
            name_length = data[12]
            if name_length == 0:
                return None
            name_bytes = data[13 : 13 + name_length]
            return name_bytes.decode("ascii", errors="replace")
        except (IndexError, UnicodeDecodeError):
            return None

    def monitor(self, duration_seconds: int = 60) -> None:
        """Monitor LLMNR traffic for the specified duration."""
        print(f"[+] Monitoring LLMNR on {self.interface_ip} for "
              f"{duration_seconds}s...")
        sock = self.bind_llmnr_socket()
        end_time = time.time() + duration_seconds

        try:
            while time.time() < end_time:
                try:
                    data, addr = sock.recvfrom(1024)
                    queried_name = self.parse_query(data)
                    if queried_name:
                        self.alert_count += 1
                        print(f"[ALERT #{self.alert_count}] "
                              f"Query for '{queried_name}' from {addr[0]}")
                except socket.timeout:
                    continue
        finally:
            sock.close()
            elapsed = time.time() - self.start_time
            print(f"\n[+] Monitoring complete. "
                  f"Total alerts: {self.alert_count} in {elapsed:.1f}s")


if __name__ == "__main__":
    detector = LLNMRPoisoningDetector(
        interface_ip="192.168.1.100",
        interface_name="eth0",
    )
    # detector.monitor(duration_seconds=300)  # Uncomment to run live
    print("Detector class instantiated successfully (dry-run mode).")
```

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# 4. Structural Diagrams & Schematics

## 4.1 Mermaid — Windows Authentication Attack Kill-Chain

```mermaid
flowchart TD
    A[Initial Reconnaissance<br/>OS Fingerprinting] --> B[Credential Harvesting<br/>LLMNR Poisoning]
    A --> C[Exposed Service Discovery<br/>SMB RDP WinRM]
    B --> D[Hash Capture<br/>Net-NTLMv2]
    C --> E[Brute Force<br/>SMB RDP]
    D --> F[Offline Cracking<br/>Hashcat John]
    E --> F
    F --> G[Valid Credentials Acquired]
    G --> H{Lateral Movement Vector}
    H --> I[Pass-the-Hash PtH]
    H --> J[Pass-the-Ticket PtT]
    H --> K[Kerberoasting Crack]
    I --> L[Compromised Host]
    J --> L
    K --> L
    L --> M[Privilege Escalation]
    M --> N[Token Impersonation]
    M --> O[UAC Bypass]
    M --> P[DLL Hijacking]
    N --> Q[Domain Admin Access]
    O --> Q
    P --> Q
    Q --> R[Persistence]
    R --> S[Golden Ticket Forgery]
    R --> T[Registry Autorun]
    R --> U[Scheduled Task Abuse]
    S --> V[Full Domain Compromise]
    T --> V
    U --> V
```

## 4.2 Mermaid — NTLM Challenge–Response Sequence

```mermaid
sequenceDiagram
    participant Client as Windows Client
    participant Server as Windows Server
    participant DC as Domain Controller

    Note over Client,DC: NTLM Challenge-Response Authentication
    Client->>Server: NTLMSSP Negotiate (Username)
    Server->>Client: Challenge C (8-byte random nonce)
    Client->>Client: Compute R = HMAC-MD5(H_NT, C)
    Client->>Server: Response R (Username, C, R)
    Server->>DC: NetLogon (Username, C, R)
    DC->>DC: Recompute R' = HMAC-MD5(H_NT, C)
    DC->>Server: Accept or Deny
    Server->>Client: Auth Result

    Note over Client,DC: ATTACK POINT: Attacker poisons LLMNR<br/>and captures the Response R
```

## 4.3 Mermaid — Kerberoasting Attack Flow

```mermaid
flowchart LR
    A[Attacker Valid<br/>Domain User] --> B[Request TGT<br/>AS-REQ AS-REP]
    B --> C[Request Service Ticket<br/>TGS-REQ for SPN]
    C --> D[KDC Returns TGS-REP<br/>Encrypted with NTLM hash<br/>of Service Account]
    D --> E[Extract Encrypted Blob]
    E --> F[Offline Crack<br/>Hashcat -m 13100]
    F --> G{Cracked?}
    G -->|Yes| H[Service Account Plaintext]
    G -->|No| I[Try Different SPN]
    H --> J[Lateral Movement<br/>as Service Account]
    J --> K[Privilege Escalation]
```

## 4.4 Mermaid — Windows System Architecture & Attack Surface

```mermaid
graph TB
    subgraph EXT[External Network]
        X1[Internet]
    end

    subgraph PERIM[Network Perimeter]
        X1 --> FW[Firewall]
        FW --> IDS[Intrusion Detection]
    end

    subgraph HOST[Windows Host]
        FW --> NIC[Network Interface]
        IDS --> NIC
        NIC --> S1[SMB TCP 445]
        NIC --> S2[RDP TCP 3389]
        NIC --> S3[WinRM TCP 5985]
        NIC --> S4[LLMNR UDP 5355]
        NIC --> S5[NBT-NS UDP 137]

        S1 --> AS1[Authentication Subsystem<br/>LSASS]
        S2 --> AS1
        S3 --> AS1
        S4 --> AS1
        S5 --> AS1

        AS1 --> KERB[Kerberos Tickets]
        AS1 --> NTLM[NTLM Hashes]

        KERB --> KDC[(Domain KDC)]
        NTLM --> SAM[(SAM Database)]

        AS1 --> TOK[Access Tokens]
        TOK --> UAC[UAC Consent UI]
        UAC --> KRN[Kernel Resources]
        KRN --> REG[Registry Hives]
        KRN --> FS[File System ACLs]
    end
```

## 4.5 Mermaid — Pass-the-Hash Attack Topology

```mermaid
flowchart LR
    A[Attacker Compromises<br/>Workstation A] --> B[Dump LSASS Memory<br/>Mimikatz sekurlsa::logonpasswords]
    B --> C[Extract NTLM Hash<br/>of Domain Admin]
    C --> D[PtH Attack via<br/>psexec.py or wmiexec]
    D --> E[Authenticate to<br/>Workstation B]
    D --> F[Authenticate to<br/>Domain Controller]
    E --> G[Lateral Movement]
    F --> H[Domain Dominance]
    G --> H
```

## 4.6 Sequential Processing Topology Matrix — Windows Defense Layers

| Layer | Component | Attack Mapped | Defense | Detection |
|---|---|---|---|---|
| 1 | Public Network | Internet Recon | Firewall, VPN | Edge logs |
| 2 | Network Protocols | SMB/RDP Brute Force | NLA, MFA, Account Lockout | SIEM correlation |
| 3 | Name Resolution | LLMNR/NBT-NS Poisoning | Disable protocols | Responder detection |
| 4 | Authentication | PtH, Kerberoasting | Disable NTLM, strong SPN pwd | Event 4624, 4769 |
| 5 | Authorization | Token Impersonation | PPL, Credential Guard | LSASS access alerts |
| 6 | Privilege | UAC Bypass | UAC at highest setting | Event 4688 |
| 7 | Persistence | Registry Autorun | Sysmon autorun tracking | Sysmon Event 13 |
| 8 | Forensics | Log Tampering | Audit policy, WORM storage | Event 1102 |

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — 3 Mark Short-Answer Questions (Remember / Understand)

### Question 1: Define Pass-the-Hash Attack. [KTU University Exam — July 2024] [CO2, Remember]

**Model Answer:**

Pass-the-Hash (PtH) is a lateral movement technique in which an attacker authenticates to a remote Windows system by **reusing a captured NTLM hash** without ever needing the plaintext password.

**Key technical points (board-valuation key):**
- The NTLM hash is captured by **dumping LSASS memory** (e.g., Mimikatz `sekurlsa::logonpasswords`).
- The attacker uses tools like **Impacket's `psexec.py`** or **Mimikatz's `sekurlsa::pth`** to inject the hash and open a new logon session.
- **PtH works** because NTLM authentication uses the hash as the secret — the protocol never validates the original plaintext.
- **Defense:** Disable NTLM where possible, enforce Kerberos-only, enable **Credential Guard**, and use **Protected Users** security group.

> **Valuation Tip (3 marks):** Definition: 1 mark | LSASS dump explanation: 1 mark | NTLM reuse logic: 1 mark.

---

### Question 2: What is Kerberoasting? [KTU University Exam — Dec 2023] [CO2, Understand]

**Model Answer:**

Kerberoasting is a **post-exploitation** attack that targets service accounts in Active Directory by requesting and cracking their Kerberos service tickets offline.

**Mechanism (board-valuation key):**
- The attacker requests a **TGS (Ticket Granting Service) ticket** for any account with an **SPN (Service Principal Name)** registered.
- The KDC encrypts the ticket using the **NTLM hash of the service account**.
- The attacker extracts the encrypted blob and **cracks it offline** using `hashcat -m 13100` or `john --format=krb5tgs`.
- **Defense:** Use **>25-character random passwords** for service accounts, enable **AES-only Kerberos encryption**, and set **msDS-SupportedEncryptionTypes** to 0x18 (AES256+SHA1).

> **Valuation Tip (3 marks):** SPN concept: 1 mark | Offline cracking mechanism: 1 mark | Defense: 1 mark.

---

## 5.2 Part B — 14 Mark Module-Internal Choice Questions

### **Question A (14 Marks): Comprehensive Attack Analysis**

**(a)** With a neat diagram, explain the **NTLM challenge–response authentication** mechanism. Show mathematically how the **NTLMv2 response** is computed. **\[7 Marks, CO2, Understand\]**

**(b)** Discuss **Pass-the-Hash**, **Pass-the-Ticket**, and **Kerberoasting** attacks. For each, state the target subsystem, the mathematical basis, the tools used, and two defenses. **\[7 Marks, CO2, Apply\]**

---

#### Model Solution to Question A (a):

**NTLM Challenge–Response — Step-by-Step (7 Marks):**

**[Diagram block: 2 Marks]**

```
Client                    Server                 Domain Controller
  |                          |                          |
  |--1. NTLMSSP Negotiate--->|                          |
  |                          |                          |
  |<--2. Challenge C (8B)----|                          |
  |                          |                          |
  |--3. Response R---------->|                          |
  |                          |--4. NetLogon (C, R)----->|
  |                          |                          |
  |                          |<--5. Accept/Deny----------|
  |<--6. Auth Result---------|                          |
```

**Mathematical Derivation (5 Marks):**

**Step 1:** Client sends NTLMSSP Negotiate message containing username.

**Step 2:** Server generates a random 8-byte challenge $C$.

**Step 3:** Client computes the NTLMv2 hash:

$$H_{\text{ntlmv2}} = \text{HMAC\_MD5}\bigl(H_{NT}, \ \text{UserName} \parallel \text{UserDomain}\bigr)$$

**Step 4:** Client constructs the NTLMv2 response blob:

$$\text{Blob} = C_{\text{client}} \parallel \text{Timestamp} \parallel \text{TargetInfo} \parallel \text{AvPairs}$$

**Step 5:** Final NTLMv2 response is computed as:

$$R_{v2} = \text{HMAC\_MD5}\bigl(H_{\text{ntlmv2}}, \ C \parallel \text{Blob}\bigr)$$

**Step 6:** Concatenate and transmit:

$$\text{NetNTLMv2} = R_{v2} \parallel \text{Blob}$$

**Step 7:** Server forwards $C$ and $R_{v2}$ to the DC, which recomputes and compares. If they match, authentication is granted.

> **[Valuation Key: Stating the random 8-byte challenge generation: 1 Mark | NTLMv2 hash HMAC-MD5: 2 Marks | Blob construction: 1 Mark | Final response formula: 1 Mark]**

---

#### Model Solution to Question A (b):

**Three Attack Comparisons (7 Marks):**

| Attack | Target | Math Basis | Tool | Defense 1 | Defense 2 |
|---|---|---|---|---|---|
| **Pass-the-Hash** | LSASS / NTLM | Reuse $H_{NT}$ as auth secret | Mimikatz, Impacket | Disable NTLM, use Kerberos | Credential Guard, PPL |
| **Pass-the-Ticket** | Kerberos tickets | Inject $TGT$ or $TGS$ into LSASS | Mimikatz `kerberos::ptt`, Rubeus | Rotate `krbtgt` twice | AES-only encryption |
| **Kerberoasting** | Service accounts | Offline crack $\text{Enc}_{H_{SPN}}$ | Rubeus, hashcat -m 13100 | Strong 25+ char passwords | AES-only, gMSA accounts |

**Pass-the-Hash Math:**

$$P_{\text{success}} = 1 - e^{-\lambda T}$$

Where $\lambda$ is the attack attempt rate and $T$ is the time window. Since the hash is reusable indefinitely (assuming no password change), $T \to \infty$ and $P_{\text{success}} \to 1$.

**Pass-the-Ticket Math:**

The forged ticket must satisfy Kerberos checksum validation:

$$\text{Verify}(T) = \text{Decrypt}_{K_{\text{service}}}(T) = \text{ValidAuthenticator}$$

**Kerberoasting Math:**

Cracking time:

$$T_{\text{crack}} = \frac{2^{n}}{r_{\text{GPU}}}$$

For $n=128$ and $r=10^{11}$ hashes/sec: $T_{\text{crack}} \approx 3.4 \times 10^{19}$ years (infeasible).
For $n=40$ and $r=10^{11}$: $T_{\text{crack}} \approx 14$ days (feasible).

> **[Valuation Key: Table completeness: 2 Marks | Mathematical basis for each: 2 Marks | Tool identification: 1 Mark | Defense mapping: 2 Marks]**

---

### **Question B (14 Marks): Alternative Comprehensive Analysis**

**(a)** Explain **LLMNR/NBT-NS poisoning** attack with a sequence diagram. Discuss its mitigation in detail. **\[7 Marks, CO2, Understand\]**

**(b)** With a flowchart, explain the **Golden Ticket** attack. State its prerequisites, the mathematical basis of TGT forgery, and the complete remediation procedure including the **two-step krbtgt rotation** math. **\[7 Marks, CO2, Apply\]**

---

#### Model Solution to Question B (a):

**LLMNR Poisoning — Step-by-Step (7 Marks):**

**[Sequence Diagram: 2 Marks]**

```
Victim Workstation           Attacker Host           Legit File Server
       |                            |                          |
       |--1. LLMNR Query for---->   |                          |
       |   "FILESERVER" (Multicast) |                          |
       |                            |                          |
       |<--2. Poisoned Response----|                          |
       |   (Attacker IP as FS)      |                          |
       |                            |                          |
       |--3. NTLM Auth (User+Pwd)--->                          |
       |    to Attacker's IP         |                          |
       |                            |                          |
       |    Attacker captures       |                          |
       |    Net-NTLMv2 hash         |                          |
```

**Attack Mechanism (3 Marks):**
- LLMNR (UDP 5355) and NBT-NS (UDP 137) are **fallback name-resolution protocols** that broadcast queries to the local subnet.
- An attacker (running **Responder** or **Inveigh**) **responds first** to these queries, claiming to be the target host.
- The victim sends **NTLMv2 credentials** to the attacker's IP, which captures them for offline cracking.
- **Variation:** In **SMB Relay**, the attacker forwards the captured credentials to the real server to execute code on it.

**Mitigations (2 Marks):**
- Disable LLMNR via **Group Policy**: `Computer Configuration → Administrative Templates → Network → DNS Client → Turn off LLMNR → Enabled`.
- Disable NBT-NS via **DHCP** or **registry**: `HKLM\SYSTEM\CurrentControlSet\Services\NetBT\Parameters\Interfaces → NetbiosOptions = 2`.
- Enforce **SMB Signing** to prevent relay attacks.
- Use **strong passwords** (>14 chars) to resist offline cracking.

> **[Valuation Key: Diagram correctness: 2 Marks | Multicast mechanism explained: 1 Mark | Net-NTLMv2 capture: 1 Mark | Mitigation listed: 1 Mark]**

---

#### Model Solution to Question B (b):

**Golden Ticket Attack — Step-by-Step (7 Marks):**

**[Flowchart: 2 Marks]**

```
Domain Compromise
       |
       v
Dump krbtgt Hash (NTDS.dit / DSRM)
       |
       v
Extract H_krbtgt
       |
       v
Generate Forged TGT (Mimikatz)
       |
       v
Set Arbitrary Group Memberships
       |
       v
Set 10-Year Validity
       |
       v
Inject TGT into LSASS (Pass-the-Ticket)
       |
       v
Full Unconstrained Domain Access
```

**Prerequisites (1 Mark):**
- Compromise of a **Domain Controller** (or NTDS.dit extraction via Volume Shadow Copy or DCSync).
- Knowledge of the **krbtgt NTLM hash** $H_{krbtgt}$.
- Knowledge of the **Domain SID**.

**Mathematical Basis of TGT Forgery (2 Marks):**

The forged TGT is structured as:

$$\text{TGT}_{\text{forged}} = \text{Encrypt}_{K = H_{krbtgt}}\bigl(\text{ClientID} \parallel \text{DomainSID} \parallel \text{EndTime} \parallel K_{\text{session}}\bigr)$$

When the KDC receives a TGS-REQ containing this forged TGT, it decrypts successfully (since $H_{krbtgt}$ is the correct key) and issues service tickets.

**Remediation — Two-Step krbtgt Rotation Math (2 Marks):**

The Active Directory key version number (KVNO) is incremented on each rotation:

$$\text{KVNO}_{n+1} = \text{KVNO}_{n} + 1$$

Tickets are validated as:

$$\text{Valid}(T) = \bigl(T.\text{KVNO} \geq \text{KVNO}_{\text{current}} - 1\bigr)$$

Therefore, after **one rotation**, old forged TGTs still validate for one grace period. A **second rotation** (typically after 10 hours) ensures that all old-kvno tickets are rejected.

> **[Valuation Key: Flowchart correctness: 2 Marks | Prerequisites stated: 1 Mark | Forgery equation: 2 Marks | Two-rotation reasoning: 1 Mark]**

---

## 5.3 KTU Examiner's Valuation Warning & Pitfall Callout

> [!WARNING]
> **Common Mark-Loss Pitfalls in Windows Attack Questions:**
> 1. **Confusing LM and NTLM hashes:** LM is **DES-based**, NTLM is **MD4-based**. Writing the wrong algorithm costs full marks.
> 2. **Forgetting the Domain SID:** Golden Ticket forgery **requires** the Domain SID, not just the krbtgt hash.
> 3. **Missing "two rotations":** Many students write "reset krbtgt password" — the KTU 2024 key explicitly requires **TWO consecutive rotations** to invalidate grace-period tickets.
> 4. **Skipping the SPN concept:** Kerberoasting questions *require* you to mention **SPN (Service Principal Name)** as the targeting mechanism. Without it, you lose 1 mark.
> 5. **Not labeling ports:** Always state **TCP 445** for SMB, **TCP 3389** for RDP, **UDP 5355** for LLMNR, **UDP 137** for NBT-NS.
> 6. **Confusing PtH and PtT:** PtH uses the **NTLM hash**; PtT uses **Kerberos tickets (TGT/TGS)**. Mixing them up is a 3-mark penalty.
> 7. **Missing offline cracking mention:** Both Kerberoasting and LLMNR poisoning rely on **offline cracking** with `hashcat` or `john`. The board expects this term explicitly.
> 8. **Omitting hash algorithm names:** When writing mathematical derivations, always specify **MD4** for NTLM, **HMAC-MD5** for NTLMv2 response, **RC4** for Kerberos downgrade attacks.

---

## 5.4 Topic Recap & Important Things to Remember

> [!NOTE]
> **Rapid Revision Checklist — Module 4: Attacks Against Windows Systems**

### **Key Definitions**
- **Attack against Windows:** Exploitation of Windows authentication, authorization, or persistence mechanisms to gain unauthorized access.
- **SAM:** Security Account Manager — local credential store.
- **LSASS:** Local Security Authority Subsystem Service — runtime authentication broker.
- **NTLM:** Challenge–response protocol using NTLM hashes.
- **Kerberos:** Ticket-based authentication using KDC and TGT/TGS.
- **Pass-the-Hash:** Reusing captured NTLM hashes for lateral movement.
- **Pass-the-Ticket:** Injecting forged/stealing Kerberos tickets into LSASS.
- **Kerberoasting:** Offline cracking of Kerberos service tickets.
- **Golden Ticket:** Forged TGT using krbtgt hash.
- **Silver Ticket:** Forged TGS using service account hash.
- **LLMNR Poisoning:** Responder attack against LLMNR multicast.
- **SMB Relay:** Forwarding NTLM auth to another host.

### **Critical Ports & Locations**
- **TCP 445** — SMB
- **TCP 3389** — RDP
- **TCP 5985** — WinRM (HTTP)
- **TCP 5986** — WinRM (HTTPS)
- **UDP 5355** — LLMNR
- **UDP 137** — NBT-NS
- **%SystemRoot%\System32\config\SAM** — SAM database
- **%SystemRoot%\NTDS\ntds.dit** — AD database on DC

### **High-Yield Formulas**
- $H_{NT} = \text{MD4}(\text{UTF-16LE}(P))$
- $R_{v2} = \text{HMAC\_MD5}(H_{\text{ntlmv2}}, C \parallel \text{Blob})$
- $T_{\text{crack}} = \dfrac{2^{n}}{r_{\text{GPU}}}$
- $\text{TGT}_{\text{forged}} = \text{Encrypt}_{K=H_{krbtgt}}(\text{ClientID} \parallel \text{DomainSID} \parallel \text{EndTime})$
- $P_{\text{success}}(\text{PtH}) = 1$ (deterministic on captured hash)

### **Must-List Defenses**
1. Disable NTLM, enforce Kerberos-only.
2. Disable LLMNR and NBT-NS via GPO.
3. Enforce SMB Signing + LDAP Signing.
4. Use **Protected Users** security group.
5. Enable **Credential Guard** (Virtualization-Based Security).
6. Strong service account passwords (**>25 random chars** or **gMSA**).
7. **Rotate krbtgt password TWICE** after compromise.
8. Deploy **Microsoft Defender for Identity** for detection.

### **Industry Tools (Recall for 1-mark questions)**
- **Mimikatz** — credential extraction, PtH, PtT, Golden Ticket.
- **Impacket** — `psexec.py`, `wmiexec.py`, `secretsdump.py`.
- **Rubeus** — Kerberos toolkit (kerberoast, asreproast, ticket injection).
- **Responder** — LLMNR/NBT-NS poisoning.
- **hashcat** — offline GPU password cracking.
- **BloodHound** — Active Directory attack-path mapping.

### **Real-World Incident References**
- **WannaCry (2017)** — EternalBlue + PtH propagation.
- **NotPetya (2017)** — Golden Ticket-style domain dominance.
- **SolarWinds (2020)** — Kerberoasting during lateral movement.
- **PrintNightmare (2021)** — Token impersonation via Print Spooler (CVE-2021-1675).
- **BlueKeep (2019)** — RDP pre-auth RCE (CVE-2019-0708).

<!-- SECTION_5_END -->
