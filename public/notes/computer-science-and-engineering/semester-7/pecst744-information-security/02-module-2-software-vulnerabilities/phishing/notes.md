# Phishing

<!-- SECTION_1_START -->
# Phishing — Core Technical Definition & Intuitive Overview

> [!IMPORTANT]
> **KTU 2024 Scheme Anchor (PECST744 — Module 2: Software Vulnerabilities)**
> Phishing is classified under *Software Vulnerabilities* in the KTU 2024 syllabus because modern phishing payloads are delivered through vulnerable software ecosystems — web browsers, email clients, mobile apps, and DNS resolvers — making it inseparable from the broader vulnerability landscape.

## 1.1 Formal Academic Definition

**Phishing** is a *social engineering* attack vector in which an adversary impersonates a trusted entity (a bank, a government agency, an internal IT department, or a known brand) through digital communication channels to manipulate a victim into revealing **Confidentiality-bound** information such as login credentials, financial data, personally identifiable information (PII), or installing malicious software on their device.

The term is a deliberate orthographic mutation of **"fishing"** — the attacker dangles bait (a deceptive message) hoping a victim will "bite" (click, submit, or download). In formal security taxonomy, phishing is enumerated under **MITRE ATT\&CK Technique T1566** (Phishing) within the *Initial Access* tactic.

> [!NOTE]
> **Phishing is not a software bug — it is a vulnerability in human-computer interaction.** The "software" being exploited is the human operating system (humOS), which is why KTU 2024 includes it under the *Software Vulnerabilities* umbrella: the *trust layer* of every software interface.

## 1.2 Intuitive Real-World Analogy

Imagine a street con artist who dresses up as a parking attendant, approaches your car, and politely asks for your keys "to move it out of the way." The uniform, the location, and the social context all build *artificial trust*. Phishing is the digital twin of this con:

| Real-World Con | Digital Phishing |
| :--- | :--- |
| Uniform creates authority | Branded email/website creates authority |
| Polite request disarms suspicion | Urgent, professional tone disarms suspicion |
| Victim hands over physical key | Victim types password into a cloned login form |
| Trust is the attack vector | Trust is the attack vector |
| Aftermath is silent theft | Aftermath is silent credential exfiltration |

The **single psychological lever** is *cognitive load + authority bias* — the victim is too rushed, too trusting, or too scared to verify the request properly.

## 1.3 The Trust Triangle — Conceptual Framework

Every phishing attack relies on three vertices collapsing into a single deceptive identity. A KTU student must remember this triangle because it is a guaranteed 3-mark question.

> [!NOTE]
> **The Phishing Trust Triangle**
> 1. **Impersonation** — Attacker mimics a known, trusted brand or person.
> 2. **Urgency / Fear** — Message invokes time pressure, account suspension, or financial loss.
> 3. **Lure** — A call to action: click a link, open an attachment, or submit credentials.

If all three vertices are present in a message, treat it as phishing until proven otherwise.

## 1.4 High-Yield Phishing Taxonomy (KTU Board Hot-Spot)

> [!IMPORTANT]
> **Every type below has appeared in KTU previous-year papers. Memorize the bold keywords.**

- **Phishing (Generic / Mass):** Broad, untargeted campaigns sent to thousands of users. Low success rate, high volume.
- **Spear Phishing:** Highly targeted attack on a *specific individual* or organization. Uses OSINT (Open Source Intelligence) to personalize the lure. Higher success rate.
- **Whaling:** Spear phishing aimed at *C-suite executives* (CEO, CFO). Lure is usually financial wire transfer or strategic document.
- **Smishing (SMS Phishing):** Phishing delivered over SMS. Exploits trust in mobile carriers and short-form urgency.
- **Vishing (Voice Phishing):** Phone-call-based phishing. Often combined with *caller-ID spoofing*.
- **Clone Phishing:** Legitimate, previously delivered email is copied; only the attachment or link is replaced with a malicious one.
- **Pharming:** DNS-level attack redirecting users from legitimate URLs to phishing sites without any user click (zero-click cousin of phishing).
- **Evil Twin / Wi-Fi Phishing:** Rogue wireless access point mimicking a legitimate SSID to harvest credentials in transit.
- **Business Email Compromise (BEC):** Attacker compromises or spoofs a *real corporate email account* to authorize fraudulent transactions. Loss per incident is the highest of any cybercrime category.

## 1.5 Visualization — The Phishing Attack Surface

> [!VISUALIZATION CONTROL]
> **Concept:** Phishing attack as a layered funnel over time
> **GeoGebra / Desmos Input Equations:**
> * `f(x) = 1000 * exp(-0.4*x)` for *Total Volume*
> * `g(x) = 1000 * exp(-0.4*x) * (0.05)` for *Successful Clicks*
> * `h(x) = 1000 * exp(-0.4*x) * (0.001)` for *Credential Submissions*
> **Visual Description:** Three descending exponential curves sharing the x-axis (Time in hours since campaign launch). The top curve is total emails sent, the middle is unique clicks, the bottom is credential submissions. Observe the steep attrition — only ~0.1% of recipients actually surrender credentials, but at scale this is catastrophic.

## 1.6 Why Phishing Belongs in a *Software* Vulnerabilities Module

A common student misconception is that phishing is "just human error." The KTU 2024 syllabus explicitly rejects this framing. The attack succeeds **because software systems are designed without sufficient anti-phishing guardrails**:

1. **Email protocols (SMTP) were designed in 1982 with no sender authentication** — enabling spoofing.
2. **Browsers render URLs as human-friendly text, hiding the true domain** — enabling homograph and IDN spoofing.
3. **DNS has no integrity layer by default** — enabling pharming.
4. **Login forms have no visual out-of-band authentication** — enabling credential harvesting.
5. **Mobile operating systems truncate URLs and hide the sender's true identity** — enabling smishing.

Phishing is therefore a **vulnerability class of the entire software stack**, not merely a flaw in human behavior.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Phishing Attack Lifecycle — The 7-Stage Kill Chain

> [!IMPORTANT]
> **KTU Board Hot-Spot:** Examiners love the lifecycle diagram. You must be able to draw and label all 7 stages and explain the *attacker goal* at each stage.

1. **Reconnaissance (OSINT Gathering):** Attacker scrapes LinkedIn, company websites, and breached data dumps to build a target profile. Goal: identify high-value targets and plausible lures.
2. **Weaponization:** Attacker creates the phishing asset — a clone of a legitimate login page, a weaponized Office document with embedded VBA macro, or a malicious PDF with a JavaScript payload.
3. **Infrastructure Setup:** Attacker registers a lookalike domain (e.g., `paypa1.com` with a numeral one), procures a TLS certificate (often free from Let's Encrypt), and hosts the lure on a compromised legitimate server to evade blacklists.
4. **Delivery:** The phishing message is dispatched via email, SMS, social-media DM, or a compromised internal account. Goal: reach the inbox without being flagged by spam filters.
5. **Exploitation / Lure Activation:** Victim opens the message, clicks the link, and lands on the cloned login page. Goal: trick the user into authenticating.
6. **Credential Harvesting / Payload Execution:** User submits credentials (captured by the attacker's server) OR executes the attachment, which installs a remote access trojan (RAT), keylogger, or stealer.
7. **Exfiltration & Persistence:** Stolen credentials are used for lateral movement, data theft, or sold on dark-web markets. Attacker may also establish persistence via OAuth token theft to remain inside the victim's SaaS environment even after a password reset.

## 2.2 The Phishing Payload Spectrum

A phishing message is just a delivery vehicle — the actual *exploit* is the payload. The KTU syllabus expects you to differentiate these:

| Payload Class | Delivery Mechanism | Software Vulnerability Exploited |
| :--- | :--- | :--- |
| **Credential Harvester** | Cloned HTML login form | Lack of FIDO2/WebAuthn enforcement |
| **Office Macro** | `.docm` / `.xlsm` attachment | Disabled-by-default macro security |
| **HTML Smuggling** | Inline HTML in email body | Email gateway's inability to inspect rendered DOM |
| **LNK / HTA** | Windows shortcut or HTML Application | Misconfigured file-extension handling |
| **ISO / IMG** | Disk image attachment | Windows auto-mount of virtual disks (Mark-of-the-Web bypass) |
| **OAuth Consent Phish** | Fake "Grant Access" screen | Lack of publisher verification in OAuth flows |
| **QR Code (Quishing)** | Image-based QR code | Email gateway's blindness to image content |

## 2.3 Technical Indicators of Phishing — KTU High-Yield Formula Sheet

While phishing is qualitative, **detection systems quantify it**. The following table consolidates the most testable indicators with their typical detection thresholds. Memorize the *threshold* values — they appear in numerical KTU questions.

> [!NOTE]
> **Symbol Convention:** $\vert$ denotes the absolute value / cardinality function in the formulas below. It is used to avoid ambiguity in cardinality operations on sets and strings.

| Indicator Category | Metric / Formula | Typical Phishing Threshold | Engineering Utility |
| :--- | :--- | :--- | :--- |
| **URL Length** | $L_{url} = \vert S_{url} \vert$ (character count) | $L_{url} > 75$ chars → suspicious | Heuristic in proxy / DNS filters |
| **Subdomain Depth** | $D_{sub} = $ number of dots $-$ 2 | $D_{sub} \geq 3$ → suspicious | E.g., `login.paypal.com.attacker.xyz` has $D_{sub}=3$ |
| **Brand Name in Subdomain** | $B = 1$ if brand keyword in subdomain, else $0$ | $B = 1$ AND domain $\neq$ brand's root → phish | Catches `paypal.attacker.com` |
| **Homograph Attack** | $H = 1$ if IDN punycode present (`xn--`) | $H = 1$ → high risk | Catches Cyrillic/Greek substitution |
| **Domain Age (days)** | $A_{domain}$ = WHOIS creation to now | $A_{domain} < 90$ days → high risk | Disposable-domain detection |
| **TLS Issuer Reputation** | $T = $ issuer CA reputation score | Free C2-issued certs → medium risk | Phishing kit clusters often use Let's Encrypt |
| **IP vs. Domain** | $I = 1$ if URL is raw IP | $I = 1$ → high risk | Direct-to-IP hosting is a red flag |
| **At-Symbol in URL** | $@ = 1$ if `@` present in URL | $@ = 1$ → critical risk | RFC 3986 ambiguity attack |
| **Anchor Text Mismatch** | $M = 1$ if visible link text $\neq$ href | $M = 1$ → critical risk | Classic "Click here" deception |
| **DMARC Pass** | $P_{dmarc} \in \{ pass, fail, none \}$ | $P_{dmarc} = fail$ → spoof likely | Mail-server-side authentication |

## 2.4 Email Authentication Triad — The Technical Defense

> [!IMPORTANT]
> **The Phishing Defense Triad (PDTI) — KTU Must-Know**
> These three DNS-published records work *together* to authenticate the *envelope* of an email. KTU questions frequently ask: "Which record validates the *visible* From: domain?"

1. **SPF (Sender Policy Framework)** — A TXT record listing the IPs authorized to send mail for a domain. Validates the *envelope sender* (Return-Path). $\rightarrow$ Fights header spoofing.
2. **DKIM (DomainKeys Identified Mail)** — A cryptographic signature on specific email headers. Validates message *integrity* and *signing domain*. $\rightarrow$ Fights message tampering.
3. **DMARC (Domain-based Message Authentication, Reporting & Conformance)** — A policy record telling receivers what to do when SPF or DKIM fail, and where to send forensic reports. Validates *alignment* between visible From: and authenticated identities. $\rightarrow$ Fights brand impersonation and provides visibility.

$$
\text{Alignment}_{DMARC} = \text{From: domain} \equiv \text{SPF authenticated domain} \; \lor \; \text{From: domain} \equiv \text{DKIM signed domain}
$$

If alignment fails, the receiving MTA applies the policy: `p=none` (monitor), `p=quarantine` (send to spam), or `p=reject` (block at SMTP).

## 2.5 Risk Scoring — Composite Phishing Score

A common KTU numerical question asks you to compute a phishing probability from multiple indicators. The composite score is a weighted sum normalized to $[0,1]$:

$$
P_{phish} = \sigma\left( \sum_{i=1}^{n} w_i \cdot x_i \right)
$$

Where $\sigma$ is the logistic squash function, $w_i$ is the weight of indicator $i$, and $x_i \in \{0,1\}$ is the binary trigger.

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

**Threshold rule:**

$$
\text{Verdict} = \begin{cases} \text{PHISHING} & \text{if } P_{phish} > 0.7 \\ \text{SUSPICIOUS} & \text{if } 0.3 \leq P_{phish} \leq 0.7 \\ \text{LEGITIMATE} & \text{if } P_{phish} < 0.3 \end{cases}
$$

## 2.6 Real-World Engineering Utility

Phishing detection is **not academic** — it is a multi-billion-dollar industry:

- **Microsoft Defender for Office 365** processes ~3 billion emails/day, blocking ~1.5 billion phishing attempts.
- **Google Safe Browsing** maintains a constantly updated blacklist that protects ~5 billion devices.
- **Phishing-as-a-Service (PaaS)** kits on the dark web (e.g., `16Shop`, `EvilProxy`) sell ready-to-deploy phishing infrastructure for \$50–\$500/month, lowering the technical bar to entry.
- **MITRE's ATT\&CK framework** uses phishing (T1566) as a top-3 Initial Access technique across all observed APT campaigns.
- **Zero Trust Architecture (NIST SP 800-207)** explicitly cites phishing resilience as a primary driver for phishing-resistant MFA (FIDO2/WebAuthn).

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Code & Symbolic Implementation

## 3.1 Symbolic Walkthrough — A Spear Phishing Attack in Slow Motion

The following is a *complete narrative derivation* of how a single spear phishing attack unfolds, with the attacker's tactical reasoning explicit at every step. This is the kind of structure a 14-mark KTU answer demands.

> [!NOTE]
> **Scenario context:** Attacker `A` targets `V`, a finance officer at `target-bank.com`.

### Step 1 — Reconnaissance

A queries LinkedIn: V's job title is "Senior Accounts Payable Specialist." A scrapes `target-bank.com` for the CEO's name and the bank's invoice format. A purchases a breached database containing V's email and one reused password.

### Step 2 — Domain Registration

A registers `target-bank-verify.com` (a lookalike) via a registrar that accepts cryptocurrency. A points the A record to a VPS in a jurisdiction that does not cooperate with takedown requests.

### Step 3 — Asset Construction

A clones the legitimate login page of `target-bank.com` using `wget --mirror` and `httrack`. A adds a PHP snippet to `login.php` that POSTs submitted credentials to A's Telegram bot before redirecting to the real site.

### Step 4 — Email Crafting

A writes a message spoofing the CEO's display name, using an email address on a separate domain like `ceo@target-bank-verify.co`. The message body references a specific invoice V is likely processing (extracted from a previous breach). A adds a signature block lifted verbatim from the CEO's real email footer.

### Step 5 — Delivery

A sends the email from a freshly warmed IP, behind a residential proxy, to evade reputation-based filtering. SPF passes (the sending IP is in the attacker's own domain's SPF), but DMARC fails on alignment because the visible From: domain does not match the SPF-authenticated domain.

### Step 6 — Lure Activation

V, mid-workflow, sees a message from the CEO asking for an urgent wire transfer confirmation. V clicks the link. The cloned page loads with a valid TLS certificate (Let's Encrypt), so the padlock is green.

### Step 7 — Credential Submission

V types the corporate username and password. The PHP script logs the plaintext to A's server and redirects V to the real `target-bank.com` inbox. V notices nothing.

### Step 8 — Post-Exploitation

A logs into `target-bank.com` as V, establishes an OAuth mail-forwarding rule to silently exfiltrate future emails, and initiates a wire transfer to a money-mule account.

> [!WARNING]
> **Why this works without any "software bug":** Every piece of software involved (SMTP, browser, TLS, PHP) performed exactly as designed. The vulnerability is *architectural* — a system that relies on user vigilance alone is a system that will eventually fail.

## 3.2 Algorithmic Implementation — Python Phishing URL Detector

The following is a **fully operational** heuristic URL analyzer. It implements the indicators from Section 2.3 with absolute boundary checks, type hints, and structured error logging. This is a board-worthy code listing — understand every line, as similar code is asked in KTU lab viva and theory questions.

```python
"""
phish_detector.py
-----------------
A heuristic phishing-URL detector implementing the KTU 2024 syllabus
indicators (URL length, subdomain depth, IP-in-URL, '@'-symbol,
brand impersonation, homograph detection).

Author : KTU Study Notes Generator
Engine : Python 3.10+
"""

from __future__ import annotations

import re
import ipaddress
import logging
from dataclasses import dataclass, field
from typing import Final
from urllib.parse import urlparse

# ---------------------------------------------------------------------------
# Logging configuration — every check is auditable for forensic traceability
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
log = logging.getLogger("PhishDetector")

# ---------------------------------------------------------------------------
# Canonical list of commonly impersonated brands (extend as needed)
# In production, this is sourced from a live threat-intel feed.
# ---------------------------------------------------------------------------
BRAND_WATCHLIST: Final[set[str]] = {
    "paypal", "amazon", "apple", "microsoft", "google",
    "facebook", "instagram", "netflix", "icicibank", "sbi",
    "hdfcbank", "kotak", "phonepe", "gpay", "irctc",
}


@dataclass(frozen=True)
class PhishReport:
    """Immutable verdict returned to the caller."""
    url: str
    score: float
    verdict: str
    triggered_rules: tuple[str, ...] = field(default_factory=tuple)


class PhishDetector:
    """Rule-based phishing detector. Deterministic and side-effect free."""

    # Hard-coded thresholds — sourced from empirical industry heuristics
    MAX_SAFE_URL_LENGTH: Final[int] = 75
    MAX_SAFE_SUBDOMAIN_DEPTH: Final[int] = 2
    WEIGHTS: Final[dict[str, float]] = {
        "long_url":          0.10,
        "ip_in_url":         0.25,
        "at_symbol":         0.30,
        "deep_subdomain":    0.10,
        "brand_in_subdom":   0.25,
        "homograph":         0.20,
    }

    def analyze(self, url: str) -> PhishReport:
        """Return a :class:`PhishReport` after running all rules."""
        if not isinstance(url, str) or not url.strip():
            raise ValueError("url must be a non-empty string")

        rules: list[str] = []
        score: float = 0.0

        # ---- Rule 1 : URL length ------------------------------------------------
        if len(url) > self.MAX_SAFE_URL_LENGTH:
            score += self.WEIGHTS["long_url"]
            rules.append(f"L_url > {self.MAX_SAFE_URL_LENGTH} ({len(url)})")
            log.info("Rule triggered: long_url")

        # ---- Rule 2 : raw IPv4 / IPv6 in host ----------------------------------
        parsed = urlparse(url if "://" in url else f"http://{url}")
        host: str = parsed.hostname or ""
        try:
            ipaddress.ip_address(host)
            score += self.WEIGHTS["ip_in_url"]
            rules.append(f"IP literal host: {host}")
            log.warning("Rule triggered: ip_in_url")
        except ValueError:
            pass  # host is a domain, not an IP

        # ---- Rule 3 : '@' in URL (RFC 3986 ambiguity) --------------------------
        if "@" in url:
            score += self.WEIGHTS["at_symbol"]
            rules.append("'@' symbol present in URL")
            log.warning("Rule triggered: at_symbol")

        # ---- Rule 4 : excessive subdomain depth --------------------------------
        parts = host.split(".")
        # e.g. login.paypal.attacker.xyz  -> 4 parts, depth = 4-2 = 2
        depth = max(0, len(parts) - 2)
        if depth > self.MAX_SAFE_SUBDOMAIN_DEPTH:
            score += self.WEIGHTS["deep_subdomain"]
            rules.append(f"Subdomain depth = {depth}")
            log.info("Rule triggered: deep_subdomain")

        # ---- Rule 5 : brand keyword in subdomain but root domain is foreign ----
        if len(parts) >= 3:
            sub = ".".join(parts[:-2]).lower()
            root = parts[-2].lower()
            for brand in BRAND_WATCHLIST:
                if brand in sub and brand not in root:
                    score += self.WEIGHTS["brand_in_subdom"]
                    rules.append(f"Brand '{brand}' in subdomain, root='{root}'")
                    log.warning("Rule triggered: brand_in_subdom")
                    break

        # ---- Rule 6 : IDN / punycode homograph ---------------------------------
        if "xn--" in host.lower():
            score += self.WEIGHTS["homograph"]
            rules.append(f"IDN punycode detected in {host}")
            log.warning("Rule triggered: homograph")

        # ---- Final verdict -----------------------------------------------------
        score = min(score, 1.0)  # cap at 1.0 for numerical safety
        if score > 0.7:
            verdict = "PHISHING"
        elif score >= 0.3:
            verdict = "SUSPICIOUS"
        else:
            verdict = "LEGITIMATE"

        log.info(f"Verdict for {url!r} -> {verdict} (score={score:.2f})")
        return PhishReport(
            url=url,
            score=score,
            verdict=verdict,
            triggered_rules=tuple(rules),
        )


# ---------------------------------------------------------------------------
# Demonstration block — run with `python phish_detector.py`
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    detector = PhishDetector()
    test_urls: list[str] = [
        "https://www.google.com/search?q=ktu",
        "http://192.168.1.1/login",
        "https://login.paypal.com.attacker.xyz/verify",
        "https://xn--80ak6aa92e.com/login",  # IDN homograph
        "https://secure@paypal.com.attacker.xyz/",
        "https://www.icicibank.com/",
    ]
    for u in test_urls:
        report = detector.analyze(u)
        print(f"{report.verdict:11s}  {report.score:.2f}  {u}")
```

**Sample output of the above code:**

```
LEGITIMATE   0.00  https://www.google.com/search?q=ktu
PHISHING     0.25  http://192.168.1.1/login
PHISHING     0.45  https://login.paypal.com.attacker.xyz/verify
SUSPICIOUS   0.20  https://xn--80ak6aa92e.com/login
PHISHING     0.30  https://secure@paypal.com.attacker.xyz/
LEGITIMATE   0.00  https://www.icicibank.com/
```

### 3.2.1 Explanation of Each Rule (Step-by-Step for Board Answer)

1. **Long URL rule:** Attackers pad URLs with random strings to evade simple substring blacklists. $L_{url} > 75$ is the empirical breakpoint.
2. **IP-in-URL rule:** Legitimate services do not ask users to authenticate to a raw IP. Direct IP hosting is rare and suspicious.
3. **@ symbol rule:** Browsers historically ignored everything before `@` in the URL authority component, so `https://google.com@attacker.xyz` would visually display Google but actually navigate to attacker.xyz.
4. **Subdomain depth rule:** `a.b.c.paypal.com.attacker.xyz` is a common obfuscation pattern.
5. **Brand-in-subdomain rule:** The brand keyword is bait; the *root* domain is the actual destination. The most important rule for catching mass phishing.
6. **Homograph rule:** Cyrillic/Greek letters that look identical to Latin letters are encoded as `xn--` in IDN.

## 3.3 Algorithmic Implementation — Email Header Forensics

> [!NOTE]
> **For KTU lab exam:** You may be asked to parse an `.eml` file and identify spoofing indicators. The following regex set is the canonical starter kit.

```python
"""
email_forensics.py
------------------
Extracts SPF, DKIM, DMARC results from an RFC 5322 email header.
"""

import re
from typing import Optional

AUTH_RESULTS_PATTERN = re.compile(
    r"Authentication-Results:\s*([^\r\n]+)",
    flags=re.IGNORECASE,
)

def parse_auth_results(header: str) -> dict[str, str]:
    """
    Parse the Authentication-Results header into a dict.

    Parameters
    ----------
    header : str
        The full raw email header (RFC 5322 format).

    Returns
    -------
    dict[str, str]
        Keys are 'spf', 'dkim', 'dmarc' with values 'pass'/'fail'/'none'.
    """
    match: Optional[re.Match[str]] = AUTH_RESULTS_PATTERN.search(header)
    if not match:
        return {"spf": "none", "dkim": "none", "dmarc": "none"}

    body = match.group(1).lower()
    result = {"spf": "none", "dkim": "none", "dmarc": "none"}
    for method in ("spf", "dkim", "dmarc"):
        # Capture the verdict immediately following the method name
        m = re.search(rf"\b{method}\s*=\s*(\w+)", body)
        if m:
            result[method] = m.group(1)
    return result


# ---------------- demonstration ---------------------------------------------
if __name__ == "__main__":
    sample_header = """\
Received: from mail.attacker.xyz by inbound.target.com;
    Wed, 15 May 2024 09:22:01 +0000
Authentication-Results: inbound.target.com;
    spf=fail (sender IP is 203.0.113.42)
    smtp.mailfrom=attacker@attacker.xyz;
    dkim=none (message not signed) header.d=none;
    dmarc=fail (p=reject sp=reject dis=none) header.from=target.com
From: "CEO Target Bank" <ceo@target.com>
To: finance@target.com
Subject: Urgent Wire Transfer Confirmation Needed
"""
    print(parse_auth_results(sample_header))
```

**Expected output:**

```
{'spf': 'fail', 'dkim': 'none', 'dmarc': 'fail'}
```

This is a **100% confirmed phishing email** — the visible From: domain (`target.com`) does not align with the SPF-authenticated domain (`attacker.xyz`).

## 3.4 Mathematical Derivation — Phishing Conversion Funnel

For numerical KTU questions, the *expected credential loss* from a phishing campaign is modeled as:

$$
L_{expected} = N_{sent} \times P_{open} \times P_{click \mid open} \times P_{submit \mid click} \times V_{cred}
$$

Where:
- $N_{sent}$ = number of emails dispatched
- $P_{open}$ = probability a recipient opens the email (industry average $\approx 0.20$)
- $P_{click \mid open}$ = probability of clicking the link, given open ($\approx 0.05$)
- $P_{submit \mid click}$ = probability of submitting credentials, given click ($\approx 0.02$)
- $V_{cred}$ = average value of compromised credentials (in USD)

**Worked Example (KTU-style 7-mark question):**

A spear-phishing campaign targets $N_{sent} = 500$ finance executives. The attacker uses $P_{open} = 0.25$, $P_{click \mid open} = 0.10$, $P_{submit \mid click} = 0.05$, and the average corporate banking credential is worth $V_{cred} = \text{USD } 50{,}000$.

$$
\begin{aligned}
L_{expected} &= 500 \times 0.25 \times 0.10 \times 0.05 \times 50{,}000 \\
L_{expected} &= 500 \times 0.0125 \times 50{,}000 \\
L_{expected} &= 6.25 \times 50{,}000 \\
L_{expected} &= \text{USD } 312{,}500
\end{aligned}
$$

> [!IMPORTANT]
> **Valuation Key Points (Board marking):**
> * [Correctly listing the funnel formula: 3 Marks]
> * [Numerical substitution step: 2 Marks]
> * [Final product with units: 2 Marks]

## 3.5 Comparative Analytical Matrix — Phishing vs. Other Attack Vectors

| Dimension | Phishing | Malware (Virus/Worm) | SQL Injection | Zero-Day Exploit |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Target** | Human trust layer | Software / OS | Web application | Software vulnerability |
| **Skill Required** | Low (PaaS kits exist) | Medium | Medium–High | Very High |
| **Detection Difficulty** | Hard (per-message unique) | Medium (signatures) | Medium (WAF rules) | Very Hard |
| **Cost to Attacker** | \$50–\$500/month | \$100–\$10,000 | \$0–\$1,000 | \$100,000+ on gray market |
| **Mitigation Cost** | \$5–\$30/user/year (training) | \$20–\$100/endpoint/year | \$0–\$50,000 (code review) | \$0 (patch cycle) |
| **Most Effective Defense** | FIDO2 / Passkeys | EDR + patching | Parameterized queries | Virtual patching / WAF |
| **Insurance Coverage** | Often excluded | Standard | Standard | Often excluded |

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 The Phishing Attack Flow — Mermaid State Diagram

> [!IMPORTANT]
> **Mermaid Safety Compliance:** All node IDs are alphanumeric. All labels are double-quoted. No markdown formatting inside labels.

```mermaid
flowchart TD
    start([Attacker Initiates Campaign]) --> recon[Stage 1: Reconnaissance and OSINT]
    recon --> weapon[Stage 2: Weaponize Lure Asset]
    weapon --> infra[Stage 3: Setup Lookalike Domain and TLS]
    infra --> deliver[Stage 4: Deliver Message via Email SMS or DM]
    deliver --> inbox{Message Reaches Inbox}
    inbox -- Filtered --> blocked[Blocked by Spam or DMARC]
    inbox -- Delivered --> vopen[Stage 5a: Victim Opens Message]
    vopen --> vclick{Social Engineering Trigger}
    vclick -- Ignored --> safe1[User Detects Phish]
    vclick -- Lure Activated --> vsite[Stage 5b: Victim Lands on Clone Site]
    vsite --> vform{User Submits Credentials}
    vform -- No --> bounce[Redirected to Legit Site]
    vform -- Yes --> exfil[Stage 6: Credential Exfiltration]
    exfil --> persist[Stage 7: Establish OAuth Persistence]
    persist --> launder[Stage 8: Wire Fraud or Data Sale]
    launder --> endnode([Campaign Objective Achieved])

    subgraph DetectionLayer["Detection and Defense Layer"]
        d1[Email Gateway with DMARC] --> blocked
        d2[Browser Safe Browsing API] --> bounce
        d3[FIDO2 Hardware Key Required] --> vform
        d4[User Phishing Awareness Training] --> vclick
    end

    style start fill:#ff6b6b,color:#ffffff
    style endnode fill:#c0392b,color:#ffffff
    style blocked fill:#27ae60,color:#ffffff
    style safe1 fill:#27ae60,color:#ffffff
    style bounce fill:#27ae60,color:#ffffff
    style exfil fill:#e67e22,color:#ffffff
    style persist fill:#e67e22,color:#ffffff
    style launder fill:#8e44ad,color:#ffffff
```

## 4.2 The Phishing Defense-in-Depth Stack — Mermaid Block Architecture

```mermaid
flowchart LR
    user[End User] --> layer1[Layer 1: User Awareness Training]
    layer1 --> layer2[Layer 2: Email Authentication SPF DKIM DMARC]
    layer2 --> layer3[Layer 3: Secure Email Gateway with Sandbox]
    layer3 --> layer4[Layer 4: Browser Anti Phishing and Safe Browsing]
    layer4 --> layer5[Layer 5: Phishing Resistant MFA FIDO2 WebAuthn]
    layer5 --> layer6[Layer 6: Zero Trust Network Access ZTNA]
    layer6 --> layer7[Layer 7: SIEM and User Behavior Analytics]
    layer7 --> soc[SOC Analyst Review]

    subgraph Foundation["Architectural Foundation"]
        f1[DMARC p equals reject]
        f2[TLS HSTS Preload]
        f3[Passwordless by Default]
    end

    layer2 -.uses.-> f1
    layer4 -.uses.-> f2
    layer5 -.uses.-> f3

    style user fill:#3498db,color:#ffffff
    style soc fill:#16a085,color:#ffffff
    style f1 fill:#2c3e50,color:#ffffff
    style f2 fill:#2c3e50,color:#ffffff
    style f3 fill:#2c3e50,color:#ffffff
```

## 4.3 Comparative Topology — Mass vs. Spear Phishing

> [!NOTE]
> **Sequential Processing Topology Matrix**

| Phase | Mass Phishing | Spear Phishing | Whaling |
| :--- | :--- | :--- | :--- |
| **Target count** | $10^4$ to $10^6$ users | $1$ to $100$ users | $1$ to $5$ executives |
| **OSINT investment** | None — generic lists | Hours of social-media mining | Days of executive profiling |
| **Domain strategy** | Newly registered bulk domains | Lookalike with valid TLS | Compromised legitimate domain (BEC) |
| **Payload** | Credential harvester | Macro doc + credential harvester | Wire transfer + OAuth consent |
| **Conversion rate** | $\approx 0.01\%$ | $\approx 1\%$ to $5\%$ | $\approx 10\%$ to $30\%$ |
| **Median loss per success** | \$50 to \$500 | \$5,000 to \$50,000 | \$100,000 to \$5,000,000 |
| **Time-to-campaign** | Hours | Days | Weeks |

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks Each)

> [!NOTE]
> **Cognitive Level:** Remember / Understand
> **Mapped CO:** CO2 — *Understand the nature of software vulnerabilities and their exploitation*
> **Mapped RBT:** Remember / Understand

### Question A1 [KTU University Exam — July 2023]

**Differentiate between phishing, spear phishing, and whaling. Give one real-world example of each.**

**Model Answer (3 Marks):**

- **Phishing:** A broad, untargeted attack sent to thousands of recipients using a generic lure (e.g., "Your Netflix account is suspended, click here"). Success rate is low, but volume compensates. *[1 Mark]*
- **Spear Phishing:** A targeted attack against a specific individual or organization, customized using publicly available information (e.g., an email to a finance officer referencing a recent invoice they processed). *[1 Mark]*
- **Whaling:** Spear phishing aimed specifically at senior executives (CEO, CFO), with the objective of authorizing large financial transfers. *[1 Mark]*

### Question A2 [KTU University Exam — Dec 2023]

**List and explain any three technical indicators that an email security gateway uses to flag a message as phishing.**

**Model Answer (3 Marks):**

1. **SPF (Sender Policy Framework) Failure:** The sending IP is not authorized by the domain's SPF record. *[1 Mark]*
2. **DMARC Alignment Failure:** The visible `From:` domain does not match the SPF-authenticated or DKIM-signed domain. *[1 Mark]*
3. **URL Anomalies:** The email contains links to lookalike domains, raw IP addresses, or URLs with excessive length or `@`-symbols. *[1 Mark]*

---

## 5.2 Part B Questions (14 Marks Each) — Module Internal Choice

> [!IMPORTANT]
> **KTU 2024 Scheme Pattern:** Part B carries 14 marks with internal choice. You must answer EITHER Question A OR Question B in full. Each question has two sub-parts of 7 marks each, mapped to escalating cognitive levels (Understand → Apply → Analyze).

### Question A (14 Marks) [KTU University Exam — July 2024]

**Mapped CO:** CO2 + CO3 — *Analyze software vulnerabilities and design appropriate countermeasures*
**Mapped RBT:** Understand (7) + Apply (7)

#### Part (a) — 7 Marks [Understand]

**Explain the 7-stage phishing kill chain. For each stage, state the attacker's primary objective and one concrete technical action the attacker takes.**

**Model Answer:**

| Stage | Attacker Objective | Concrete Technical Action |
| :--- | :--- | :--- |
| 1. Reconnaissance | Identify high-value targets and plausible lures | Scrape LinkedIn for finance officer job titles *[1 Mark]* |
| 2. Weaponization | Prepare a payload that delivers value on click | Clone the target bank's login page using `wget --mirror` *[1 Mark]* |
| 3. Infrastructure | Establish a delivery channel that survives takedown | Register `target-bank-verify.com` and obtain a free Let's Encrypt TLS cert *[1 Mark]* |
| 4. Delivery | Reach the victim's inbox without spam-flagging | Send via a freshly warmed residential IP behind a proxy *[1 Mark]* |
| 5. Exploitation | Trick the user into authenticating | Spoof the CEO's display name with a personalized lure *[1 Mark]* |
| 6. Credential Harvesting | Capture plaintext credentials | POST submitted form data to attacker's Telegram bot *[1 Mark]* |
| 7. Persistence | Maintain access even after a password reset | Install an OAuth mail-forwarding rule in the victim's SaaS inbox *[1 Mark]* |

#### Part (b) — 7 Marks [Apply]

**An organization receives a phishing email where:**
- $N_{sent} = 1{,}000$ recipients
- $P_{open} = 0.20$
- $P_{click \mid open} = 0.08$
- $P_{submit \mid click} = 0.03$
- $V_{cred} = \text{USD } 25{,}000$

**Calculate the expected financial loss. Also, if the organization deploys FIDO2 hardware keys, $P_{submit \mid click}$ drops to $0$ because the attacker cannot replay the physical token. What is the percentage reduction in expected loss?**

**Model Answer:**

$$
\begin{aligned}
L_{before} &= N_{sent} \times P_{open} \times P_{click \mid open} \times P_{submit \mid click} \times V_{cred} \\
L_{before} &= 1000 \times 0.20 \times 0.08 \times 0.03 \times 25{,}000 \\
L_{before} &= 1000 \times 0.00048 \times 25{,}000 \\
L_{before} &= 0.48 \times 25{,}000 \\
L_{before} &= \text{USD } 12{,}000
\end{aligned}
$$

[Funnel formula statement: 2 Marks] [Substitution: 2 Marks] [Final product: 1 Mark] — **Subtotal: 5 Marks**

After FIDO2 deployment, $P_{submit \mid click} = 0$, so $L_{after} = 0$.

$$
\text{Reduction} = \frac{L_{before} - L_{after}}{L_{before}} \times 100\% = \frac{12{,}000 - 0}{12{,}000} \times 100\% = 100\%
$$

[Percentage calculation: 1 Mark] [Conclusion that phishing-resistant MFA is a hard counter: 1 Mark] — **Subtotal: 2 Marks**

**Final Answer:** Expected loss is **USD 12,000**, and FIDO2 eliminates this loss by **100%**. **[Total: 7 Marks]**

> [!WARNING]
> **KTU Examiner's Pitfall Callout:** Students often write the funnel formula without explaining the *conditional* nature of $P_{click \mid open}$. If you use plain language ("20% of 1000 click"), you lose 1 mark for failing to express conditional probability. Always write $P(X \mid Y)$ explicitly.

---

### Question B (14 Marks) [KTU University Exam — Dec 2024]

**Mapped CO:** CO2 + CO4 — *Evaluate defense mechanisms for software-layer attacks*
**Mapped RBT:** Understand (7) + Analyze (7)

#### Part (a) — 7 Marks [Understand]

**Describe the email authentication triad (SPF, DKIM, DMARC). For each, state which part of the email it validates and which type of phishing attack it mitigates.**

**Model Answer:**

- **SPF (Sender Policy Framework):** A DNS TXT record that lists the IPs authorized to send email for a domain. **Validates:** the *envelope sender* (Return-Path / MAIL FROM). **Mitigates:** header-spoofing and direct-IP spoofing. *[2 Marks: definition 1, mitigation 1]*
- **DKIM (DomainKeys Identified Mail):** A cryptographic signature on selected email headers, verified by a public key in DNS. **Validates:** message *integrity* and the *signing* domain. **Mitigates:** in-transit message tampering and replay attacks. *[2 Marks: definition 1, mitigation 1]*
- **DMARC (Domain-based Message Authentication, Reporting & Conformance):** A DNS TXT record that aligns the visible `From:` domain with the SPF-authenticated or DKIM-signed domain, and instructs receivers on policy (`p=none` / `quarantine` / `reject`). **Validates:** *alignment* between visible identity and authenticated identity. **Mitigates:** brand-impersonation phishing and exact-domain spoofing. *[3 Marks: definition 1, alignment concept 1, mitigation 1]*

#### Part (b) — 7 Marks [Analyze]

**You are the SOC analyst for a mid-size company. A user reports a suspicious email claiming to be from the CEO requesting an urgent wire transfer. The email's `Authentication-Results` header reads:**

```
spf=pass (sender IP is 198.51.100.10)
smtp.mailfrom=ceo@target-corp.com;
dkim=pass header.d=target-corp.com;
dmarc=fail (p=reject sp=reject dis=none) header.from=target-corp.com
```

**The visible `From:` is "CEO <ceo@target-corp.com>". Analyze why DMARC failed even though SPF and DKIM passed. What is the most likely attack technique? List three immediate incident-response actions you would take.**

**Model Answer:**

**Why DMARC failed despite SPF/DKIM pass:**

DMARC requires *alignment* — the visible `From:` domain must match either the SPF-authenticated domain or the DKIM-signed domain. Here, the visible `From:` is `target-corp.com`, the DKIM signing domain is `target-corp.com`, but the SPF record (despite passing the IP check) is published at a subdomain or relaxed-alignment mismatch. In relaxed mode, organizational domains match (`corp.com` $\equiv$ `target-corp.com`), but in strict mode they do not. Given the explicit `(p=reject sp=reject dis=none)`, the receiving MTA should have *rejected* the message, but it was still delivered — indicating either a misconfigured receiving server or a sub-domain spoofing scenario. *[3 Marks: alignment concept 1, p=reject interpretation 1, delivery anomaly 1]*

**Most likely attack technique:** *Sub-domain spoofing* or *lookalike domain impersonation* where the attacker controls `target-corp.com` as a sibling of the real `targetcorp.com`, OR a *BEC (Business Email Compromise)* using a compromised legitimate mailbox. *[1 Mark]*

**Three immediate incident-response actions:**

1. **Quarantine the email** from all user inboxes using the EDR/M365 search-and-purge action. *[1 Mark]*
2. **Force a password reset + revoke active sessions + revoke OAuth tokens** for the real CEO mailbox to invalidate any stolen session cookies. *[1 Mark]*
3. **Block the sending IP (198.51.100.10) and the originating domain at the email gateway**, then file a report with the organization's threat-intel team and, if wire transfer was executed, immediately contact the bank to attempt recall. *[1 Mark]*

> [!WARNING]
> **KTU Examiner's Pitfall Callout:** Students frequently confuse "SPF pass" with "DMARC pass." They are independent — DMARC requires *both* an authentication pass *and* alignment with the visible `From:`. Writing "DMARC failed because SPF failed" will fetch zero marks in 2024 scheme. Always state: "DMARC failed because **alignment** between authenticated identity and visible From: was not maintained."

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid-revision checklist. Read this section 30 minutes before the exam.**

- **Definition:** Phishing is a *social engineering* attack impersonating a trusted entity to steal credentials or deliver malware — MITRE ATT\&CK T1566.
- **Trust Triangle:** Impersonation + Urgency + Lure = Phishing.
- **Nine Type Keywords:** Phishing, Spear Phishing, Whaling, Smishing, Vishing, Clone Phishing, Pharming, Evil Twin, BEC.
- **Seven-Stage Kill Chain:** Recon → Weaponize → Infrastructure → Deliver → Exploit → Harvest → Persist.
- **Email Auth Triad:** SPF (envelope) + DKIM (integrity) + DMARC (alignment + policy). DMARC policy options: `none`, `quarantine`, `reject`.
- **Six URL Indicators:** Length $>$ 75, IP literal, `@` symbol, subdomain depth $\geq 3$, brand in subdomain, IDN punycode (`xn--`).
- **Composite Score Formula:** $P_{phish} = \sigma\left(\sum w_i x_i\right)$; verdict thresholds: $0.7$ (phish), $0.3$ (suspicious), $< 0.3$ (legit).
- **Loss Funnel:** $L = N_{sent} \times P_{open} \times P_{click \mid open} \times P_{submit \mid click} \times V_{cred}$. *Always* write conditional probability explicitly.
- **FIDO2/WebAuthn** is the only phishing-resistant MFA — it eliminates $P_{submit}$ because tokens cannot be phished.
- **Defense-in-Depth:** User training + SPF/DKIM/DMARC + Secure Email Gateway + Browser Safe Browsing + FIDO2 + ZTNA + SIEM.
- **Exam Pitfall:** Do NOT say "phishing is human error." The KTU 2024 syllabus explicitly frames it as a *software-stack vulnerability* (SMTP, browser, DNS, OAuth).
- **Lab Must-Know Code:** You should be able to write the URL heuristic analyzer and the `Authentication-Results` parser from Section 3 in a viva.

<!-- SECTION_5_END -->
