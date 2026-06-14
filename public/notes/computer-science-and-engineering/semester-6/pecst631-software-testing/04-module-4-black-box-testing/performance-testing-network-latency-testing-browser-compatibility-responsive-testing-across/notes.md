# Performance Testing - Network latency testing, browser compatibility, responsive testing across multiple devices (e.g., BrowserStack, LambdaTest)

<!-- SECTION_1_START -->
# Performance Testing in Black-Box Engineering

## 1.1 Formal KTU 2024 Definition

> [!IMPORTANT]
> **Performance Testing (KTU 2024 - PECST631 / Module 4):** A non-functional black-box testing technique used to determine the system's responsiveness, stability, scalability, and speed under a particular workload. It is **not** about finding bugs, but about measuring critical quality attributes such as **latency**, **throughput**, **browser interoperability**, and **device responsiveness** to satisfy Service Level Agreements (SLAs).

Performance testing in the KTU syllabus explicitly encompasses three primary sub-domains under black-box methodology:

1. **Network Latency Testing** — Measuring end-to-end Round Trip Time (RTT) and Time to First Byte (TTFB) under varying packet loss, jitter, and bandwidth constraints.
2. **Browser Compatibility Testing** — Validating identical functional and visual behavior across heterogeneous browser engines (Blink, Gecko, WebKit) and their versions.
3. **Responsive Testing Across Multiple Devices** — Verifying adaptive layout correctness, breakpoint transitions, and UX parity across a matrix of physical device profiles using cloud platforms like **BrowserStack** and **LambdaTest**.

## 1.2 Conceptual Analogy — "The Restaurant Kitchen"

Imagine a popular restaurant kitchen:

- **Network Latency** is the time between a customer placing an order (HTTP GET) and the waiter delivering the first slice of bread (first byte). If the waiter is slow (high latency), even the best chef is wasted.
- **Browser Compatibility** is testing the same dish with different palates — some customers prefer spicy (Chrome/Blink), some sweet (Firefox/Gecko), some sour (Safari/WebKit). The dish must taste correct to *every* palate.
- **Responsive Testing** is serving the same meal on a large banquet plate, a regular dinner plate, and a small appetizer plate. The portion, garnish, and presentation must remain elegant on *all* three — never cut off at the plate's edge.

> [!NOTE]
> **Real-World Constant:** A widely cited industry benchmark is the **Google RAIL Model**, which defines acceptable response thresholds. For example, any user input feedback (e.g., button click reaction) must occur within **100 ms** to feel instantaneous. A page must become interactive within **5 seconds** on a slow 3G connection.

## 1.3 Visualizing Latency vs. Throughput

> [!VISUALIZATION CONTROL]
> **Concept:** Latency-Time relationship under network throttling
> **GeoGebra / Desmos Input Equations:**
> * `f(x) = 50 + 0.5*x` (Line: Latency = 50 + 0.5 × Bandwidth Throttle %)
> * `g(x) = 1000 / (1 + x/100)` (Curve: Effective Throughput)
> **Visual Description:** A student should observe that as the network throttling percentage `x` increases (simulating poor network), the latency line climbs steadily, while the throughput curve drops non-linearly — illustrating why bandwidth alone is insufficient; latency is the hidden killer.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Cheat Sheet

## 2.1 Network Latency Testing — The Core Mechanics

Network latency is governed by four interacting variables. Black-box testers measure these from the **client's** perspective (outside-in testing), without instrumenting server code.

### 2.1.1 The Four Pillars of Network Latency

- **Round Trip Time (RTT):** The total time for a packet to travel from client → server → client. Measured in **milliseconds (ms)**.
- **Time to First Byte (TTFB):** Time from the request being sent to the first byte of the response being received. Indicates server-side processing + network propagation.
- **Jitter:** Variation in packet arrival time. Critical for real-time applications (VoIP, video streaming). Formula:

$$
J = \frac{1}{N} \sum_{i=1}^{N} \left| D_i - \bar{D} \right|
$$

  Where $D_i$ is the delay of packet $i$ and $\bar{D}$ is the mean delay.

- **Packet Loss Percentage:** Number of dropped packets divided by total packets sent. A **1%** loss on a 4G connection can degrade TCP throughput by up to **50%** due to retransmission overhead.

### 2.1.2 Three-Tier Testing Strategy

| Tier | Tool Category | Example Tools | What is Measured |
|---|---|---|---|
| Tier 1 | Browser DevTools | Chrome DevTools Network Tab | TTFB, DOMContentLoaded, Load events |
| Tier 2 | Synthetic Monitoring | WebPageTest, GTmetrix, Pingdom | RTT, Waterfall charts, CDN performance |
| Tier 3 | Real User Monitoring (RUM) | New Relic, Datadog, Sentry | Actual user-perceived latency at scale |

> [!IMPORTANT]
> **KTU High-Yield Point:** Examiners frequently ask about the **waterfall chart** structure in WebPageTest — students must remember the sequence: **DNS Lookup → TCP Connect → SSL Negotiation → TTFB → Content Download**.

## 2.2 Browser Compatibility Testing

### 2.2.1 The Rendering Engine Matrix

Modern web applications must render identically across at least three major browser engine families:

| Engine | Maintained By | Used By | Market Share (approx) |
|---|---|---|---|
| **Blink** | Google | Chrome, Edge, Opera, Brave | **~65%** |
| **Gecko** | Mozilla | Firefox | **~3%** |
| **WebKit** | Apple | Safari (macOS + iOS) | **~19%** |
| **Trident (Legacy)** | Microsoft | Internet Explorer 11 | < 0.5% |

> [!WARNING]
> **KTU Pitfall:** WebKit is the *only* engine allowed on iOS — Apple mandates this. Therefore, testing Safari on macOS is **not** equivalent to testing Safari on iOS. Always test on real iOS devices or accurate emulators.

### 2.2.2 The Compatibility Defect Categories

1. **CSS Rendering Defects** — Flexbox/Grid interpretation differences, especially `gap` property in older Safari.
2. **JavaScript Engine Differences** — ES6+ feature support (e.g., optional chaining `?.` not supported in IE11).
3. **Font Rendering** — Sub-pixel anti-aliasing differences between Windows ClearType and macOS rendering.
4. **Form Element Native Styling** — `<select>`, `<input type="date">`, scrollbar appearance varies.
5. **API Support** — WebRTC, Service Workers, IndexedDB availability matrix.

## 2.3 Responsive Testing Across Multiple Devices

### 2.3.1 Breakpoint-Based vs. Fluid Responsive Design

> [!NOTE]
> **Definition (KTU Syllabus):** Responsive web design (RWD) is an approach where design and development respond to the user's behavior and environment based on screen size, platform, and orientation. It is implemented through **fluid grids**, **flexible images**, and **CSS media queries**.

Common Bootstrap 5 breakpoints used as industry reference:

| Breakpoint | Min Width | Target Devices |
|---|---|---|
| `xs` | < 576 px | Portrait phones |
| `sm` | $\geq$ 576 px | Landscape phones |
| `md` | $\geq$ 768 px | Tablets |
| `lg` | $\geq$ 992 px | Desktops |
| `xl` | $\geq$ 1200 px | Large desktops |
| `xxl` | $\geq$ 1400 px | Ultra-wide displays |

### 2.3.2 Cloud-Based Cross-Browser Platforms

**BrowserStack** and **LambdaTest** dominate the market. Their architecture allows testing on **3000+ real device-browser-OS combinations** without maintaining a local device lab.

## 2.4 KTU High-Yield Formula Sheet

| Concept | Formula / Threshold | Unit | KTU Exam Relevance |
|---|---|---|---|
| Round Trip Time | $RTT = 2 \times T_{prop} + T_{proc}$ | ms | Very High |
| Throughput | $\text{Throughput} = \frac{\text{Data Transferred}}{\text{Time Elapsed}}$ | Mbps or req/s | Very High |
| Packet Loss % | $P_{loss} = \frac{P_{dropped}}{P_{sent}} \times 100$ | % | High |
| Jitter | $J = \frac{1}{N}\sum \vert D_i - \bar{D} \vert$ | ms | Medium |
| Apdex Score | $\text{Apdex} = \frac{S + T/2}{S + T + F}$ | 0.0 to 1.0 | High |
| Error Budget | $E_{budget} = 1 - \text{SLA}_{\%}$ | % of requests | High |
| Page Load Good | $\leq 2.5$ seconds (Google) | seconds | Very High |
| TTFB Good | $\leq 800$ ms | ms | High |

> [!NOTE]
> **Apdex (Application Performance Index)** is a KTU-favorite formula. **S** = Satisfied (response $\leq$ T), **T** = Tolerating (response between T and 4T), **F** = Frustrated (response > 4T). A score of **0.85** is considered industry-acceptable.

## 2.5 Real-World Production Utility

In production engineering, these three testing pillars feed directly into:

- **CI/CD Quality Gates** — Jenkins/GitHub Actions block deployment if Lighthouse Performance Score < 90.
- **SLA Penalty Clauses** — Amazon AWS, Google Cloud commit to **99.9%** monthly uptime; latency violations trigger financial credits.
- **SEO Rankings** — Google's Core Web Vitals (LCP, FID, CLS) directly influence search result ranking since 2021.
- **Conversion Rate Optimization** — Walmart famously discovered that every **1-second** improvement in page load yields a **2%** increase in conversions.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Code Implementation & Laboratory Procedures

## 3.1 Derivation: Apdex Score Calculation (Worked Example)

> [!IMPORTANT]
> This is a KTU-favorite 14-mark derivation. Master this step-by-step.

**Problem Statement:** A web application has 1000 total user responses in a 1-minute window. The Apdex threshold $T$ is set to **2 seconds**. The responses are categorized as:
- 700 responses completed in $\leq 2$ seconds → **Satisfied (S)**
- 200 responses completed between 2 and 8 seconds → **Tolerating (T)**
- 100 responses took $> 8$ seconds → **Frustrated (F)**

**Derivation:**

**Step 1 — Verify total count closure:**

$$
S + T + F = 700 + 200 + 100 = 1000
$$

This matches the total response count. Closure is satisfied.

**Step 2 — Apply the Apdex formula:**

$$
\text{Apdex} = \frac{S + \frac{T}{2}}{S + T + F}
$$

**Step 3 — Substitute numerical values:**

$$
\text{Apdex} = \frac{700 + \frac{200}{2}}{700 + 200 + 100}
$$

$$
\text{Apdex} = \frac{700 + 100}{1000} = \frac{800}{1000}
$$

**Step 4 — Compute final value:**

$$
\text{Apdex} = 0.80
$$

**Step 5 — Interpret the result using the Apdex satisfaction scale:**

| Apdex Range | Interpretation |
|---|---|
| 0.94 – 1.00 | Excellent |
| 0.85 – 0.93 | Good |
| 0.70 – 0.84 | Fair |
| 0.50 – 0.69 | Poor |
| < 0.50 | Unacceptable |

Since the computed Apdex is **0.80**, the application performance is **Fair** — it satisfies the industry minimum threshold of 0.85 but requires optimization. A remediation plan would target the 100 frustrated responses by investigating backend query latency and CDN cache miss rates.

## 3.2 Derivation: Effective Throughput Under Packet Loss

**Problem:** A TCP connection experiences **2% packet loss**. Given the Mathis formula approximation, derive the effective throughput.

**Step 1 — State the Mathis Model:**

$$
B \approx \frac{MSS}{RTT \times \sqrt{p}}
$$

Where $MSS$ = Maximum Segment Size (typically 1460 bytes), $RTT$ = Round Trip Time, and $p$ = packet loss probability.

**Step 2 — Assume nominal conditions:** $MSS = 1460$ bytes, $RTT = 100$ ms = 0.1 s, $p = 0.02$.

**Step 3 — Substitute:**

$$
B \approx \frac{1460 \times 8 \text{ bits}}{0.1 \times \sqrt{0.02}}
$$

**Step 4 — Compute denominator:**

$$
\sqrt{0.02} \approx 0.1414
$$

$$
0.1 \times 0.1414 = 0.01414
$$

**Step 5 — Compute final throughput:**

$$
B \approx \frac{11680}{0.01414} \approx 826{,}167 \text{ bps} \approx 0.83 \text{ Mbps}
$$

**Step 6 — Contrast with zero-loss case:**

$$
B_{0\%} \approx \frac{11680}{0.1 \times \sqrt{0.0001}} = \frac{11680}{0.001} = 11.68 \text{ Mbps}
$$

**Conclusion:** A mere **2% packet loss** reduces effective throughput from 11.68 Mbps to 0.83 Mbps — a **93% degradation**. This is why black-box network latency testing must include packet loss simulation.

## 3.3 Python Implementation: Network Latency Tester

The following Python script is a production-grade black-box latency tester suitable for KTU lab examinations.

```python
"""
Filename: network_latency_tester.py
Module: PECST631 - Module 4 - Black-Box Performance Testing
Purpose: Measure RTT, TTFB, Jitter, and Packet Loss without server instrumentation.
"""

import socket
import time
import statistics
import ssl
import urllib.request
import logging
from dataclasses import dataclass, field
from typing import List, Optional, Tuple

# Configure strict error logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)
logger = logging.getLogger("LatencyTester")


@dataclass
class LatencyReport:
    """Structured container for the full latency report."""
    target_host: str
    target_port: int
    samples: int
    rtts_ms: List[float] = field(default_factory=list)
    ttfbs_ms: List[float] = field(default_factory=list)
    packet_loss_count: int = 0
    min_rtt: float = 0.0
    max_rtt: float = 0.0
    mean_rtt: float = 0.0
    jitter_ms: float = 0.0
    packet_loss_pct: float = 0.0

    def compute_statistics(self) -> None:
        """Derive aggregate metrics from raw samples with absolute safety checks."""
        if not self.rtts_ms:
            logger.error("No successful RTT samples collected. Cannot compute statistics.")
            return
        self.min_rtt = min(self.rtts_ms)
        self.max_rtt = max(self.rtts_ms)
        self.mean_rtt = statistics.mean(self.rtts_ms)
        if len(self.rtts_ms) >= 2:
            self.jitter_ms = statistics.stdev(self.rtts_ms)
        self.packet_loss_pct = (self.packet_loss_count / self.samples) * 100
        logger.info(
            f"Stats computed | Mean RTT: {self.mean_rtt:.2f} ms | "
            f"Jitter: {self.jitter_ms:.2f} ms | "
            f"Loss: {self.packet_loss_pct:.2f}%"
        )


def measure_tcp_rtt(host: str, port: int, timeout: float = 2.0) -> Optional[float]:
    """
    Measure raw TCP three-way handshake RTT in milliseconds.
    Returns None if connection fails (counts as packet loss).
    """
    sock: Optional[socket.socket] = None
    try:
        start_ns = time.perf_counter_ns()
        sock = socket.create_connection((host, port), timeout=timeout)
        end_ns = time.perf_counter_ns()
        return (end_ns - start_ns) / 1_000_000.0  # ns to ms
    except (socket.timeout, socket.gaierror, ConnectionRefusedError, OSError) as err:
        logger.warning(f"TCP connection failure to {host}:{port} -> {err}")
        return None
    finally:
        if sock is not None:
            sock.close()


def measure_ttfb(url: str, timeout: float = 5.0) -> Optional[float]:
    """
    Measure Time to First Byte for an HTTPS GET request.
    Uses urllib to avoid external dependencies.
    """
    ctx = ssl.create_default_context()
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "KTU-LatencyTester/1.0"})
        start_ns = time.perf_counter_ns()
        with urllib.request.urlopen(req, timeout=timeout, context=ctx) as response:
            # Read just one byte to mark TTFB
            response.read(1)
        end_ns = time.perf_counter_ns()
        return (end_ns - start_ns) / 1_000_000.0
    except Exception as err:
        logger.error(f"TTFB measurement failed for {url} -> {err}")
        return None


def run_latency_test(
    host: str,
    port: int = 443,
    samples: int = 10,
    interval_sec: float = 1.0
) -> LatencyReport:
    """
    Execute the full black-box latency testing loop.
    """
    report = LatencyReport(target_host=host, target_port=port, samples=samples)
    logger.info(f"Initiating latency test: {host}:{port} with {samples} samples")

    for i in range(1, samples + 1):
        rtt = measure_tcp_rtt(host, port)
        if rtt is not None:
            report.rtts_ms.append(rtt)
            logger.info(f"Sample {i:02d}/{samples} | RTT: {rtt:.2f} ms")
        else:
            report.packet_loss_count += 1
            logger.info(f"Sample {i:02d}/{samples} | PACKET LOST")
        time.sleep(interval_sec)

    # Optional: measure TTFB for HTTPS targets
    if port == 443:
        url = f"https://{host}"
        ttfb = measure_ttfb(url)
        if ttfb is not None:
            report.ttfbs_ms.append(ttfb)
            logger.info(f"TTFB measurement: {ttfb:.2f} ms")

    report.compute_statistics()
    return report


def print_report(report: LatencyReport) -> None:
    """Display the final report in a clean KTU-friendly table format."""
    print("\n" + "=" * 60)
    print(f"  KTU NETWORK LATENCY TEST REPORT")
    print("=" * 60)
    print(f"  Target            : {report.target_host}:{report.target_port}")
    print(f"  Total Samples     : {report.samples}")
    print(f"  Successful Pings  : {len(report.rtts_ms)}")
    print(f"  Packet Loss       : {report.packet_loss_pct:.2f} %")
    print(f"  Min RTT           : {report.min_rtt:.2f} ms")
    print(f"  Max RTT           : {report.max_rtt:.2f} ms")
    print(f"  Mean RTT          : {report.mean_rtt:.2f} ms")
    print(f"  Jitter (Std Dev)  : {report.jitter_ms:.2f} ms")
    if report.ttfbs_ms:
        print(f"  TTFB              : {report.ttfbs_ms[0]:.2f} ms")
    print("=" * 60)


if __name__ == "__main__":
    # Standard KTU lab demonstration target
    test_report = run_latency_test("www.google.com", port=443, samples=5, interval_sec=1.0)
    print_report(test_report)
```

## 3.4 JavaScript Implementation: Responsive Breakpoint Detector

The following client-side script is used in real BrowserStack/LambdaTest sessions to log current viewport and assert breakpoint behavior.

```javascript
/**
 * Filename: responsive_breakpoint_validator.js
 * Purpose: Detect active CSS breakpoint and validate responsive design rules.
 * Used in automated BrowserStack and LambdaTest sessions.
 */

const BREAKPOINTS = [
  { name: "xs", minWidth: 0,    maxWidth: 575   },
  { name: "sm", minWidth: 576,  maxWidth: 767   },
  { name: "md", minWidth: 768,  maxWidth: 991   },
  { name: "lg", minWidth: 992,  maxWidth: 1199  },
  { name: "xl", minWidth: 1200, maxWidth: 1399  },
  { name: "xxl", minWidth: 1400, maxWidth: 9999 }
];

function getActiveBreakpoint() {
  const width = window.innerWidth;
  const match = BREAKPOINTS.find(
    bp => width >= bp.minWidth && width <= bp.maxWidth
  );
  if (!match) {
    console.error(`No breakpoint matched for width: ${width}px`);
    return null;
  }
  return match.name;
}

function validateResponsiveElements() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const orientation = viewportWidth > viewportHeight ? "landscape" : "portrait";
  const breakpoint = getActiveBreakpoint();

  // Detect horizontal overflow which indicates a broken responsive layout
  const bodyScrollWidth = document.body.scrollWidth;
  const hasHorizontalOverflow = bodyScrollWidth > viewportWidth;

  // Detect tiny text on mobile (less than 12px is generally unacceptable)
  const allTextElements = document.querySelectorAll("p, span, li, td, a, button");
  const tinyTextElements = Array.from(allTextElements).filter(el => {
    const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
    return fontSize < 12;
  });

  const report = {
    viewport: { width: viewportWidth, height: viewportHeight },
    orientation: orientation,
    activeBreakpoint: breakpoint,
    horizontalOverflowDetected: hasHorizontalOverflow,
    bodyScrollWidth: bodyScrollWidth,
    tinyTextCount: tinyTextElements.length,
    timestamp: new Date().toISOString()
  };

  console.log("[KTU-RESPONSIVE-REPORT]", JSON.stringify(report, null, 2));

  if (hasHorizontalOverflow) {
    console.warn(
      `RESPONSIVE DEFECT: Horizontal scroll detected. ` +
      `Body width ${bodyScrollWidth}px exceeds viewport ${viewportWidth}px.`
    );
  }
  if (tinyTextElements.length > 0) {
    console.warn(
      `RESPONSIVE DEFECT: ${tinyTextElements.length} text elements ` +
      `have font-size below 12px.`
    );
  }
  return report;
}

// Re-validate whenever the window is resized (simulates device rotation)
window.addEventListener("resize", () => {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(validateResponsiveElements, 250);
});

// Initial validation on script load
document.addEventListener("DOMContentLoaded", validateResponsiveElements);
```

## 3.5 Selenium + BrowserStack Cloud Test Script (Python)

This script demonstrates the integration pattern used in production cross-browser testing labs.

```python
"""
Filename: browserstack_cross_browser.py
Purpose: Execute a single black-box test across multiple browser
         configurations on BrowserStack's cloud device farm.
"""

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# BrowserStack credentials (substitute with environment variables in production)
BS_USER = "your_username_here"
BS_KEY = "your_access_key_here"

# Matrix of browsers/OS to test - the KTU cross-browser test plan
BROWSER_MATRIX = [
    {"browserName": "Chrome",  "browserVersion": "latest", "os": "Windows",  "osVersion": "11"},
    {"browserName": "Firefox", "browserVersion": "latest", "os": "Windows",  "osVersion": "11"},
    {"browserName": "Safari",  "browserVersion": "latest", "os": "OS X",     "osVersion": "Sonoma"},
    {"browserName": "Edge",    "browserVersion": "latest", "os": "Windows",  "osVersion": "11"},
]


def build_bstack_options(capability: dict) -> dict:
    """Translate our test matrix into BrowserStack capability format."""
    return {
        "browserName": capability["browserName"],
        "browserVersion": capability["browserVersion"],
        "bstack:options": {
            "os": capability["os"],
            "osVersion": capability["osVersion"],
            "buildName": "KTU-PECST631-Module4",
            "sessionName": f"Black-Box {capability['browserName']} on {capability['os']}",
            "consoleLogs": "info",
            "networkLogs": True,
        },
    }


def execute_cross_browser_test(target_url: str, capability: dict) -> dict:
    """Run a black-box login flow test on one browser configuration."""
    options = build_bstack_options(capability)
    hub_url = f"https://{BS_USER}:{BS_KEY}@hub-cloud.browserstack.com/wd/hub"

    driver = webdriver.Remote(command_executor=hub_url, options=options)
    start_time = time.time()
    result = {
        "browser": capability["browserName"],
        "os": capability["os"],
        "status": "FAIL",
        "load_time_ms": 0,
        "error": None
    }

    try:
        driver.set_page_load_timeout(30)
        driver.get(target_url)
        load_time = (time.time() - start_time) * 1000
        result["load_time_ms"] = load_time

        # Black-box assertion: title contains expected substring
        WebDriverWait(driver, 10).until(
            EC.title_contains("Login")
        )
        # Validate that a known element renders
        WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, "username"))
        )
        result["status"] = "PASS"
    except Exception as err:
        result["error"] = str(err)
        # Mark session as failed in BrowserStack dashboard
        try:
            driver.execute_script(
                'browserstack_executor: {"action": "setSessionStatus", '
                '"arguments": {"status": "failed", "reason": "' + str(err) + '"}}'
            )
        except Exception:
            pass
    finally:
        driver.quit()
    return result


def run_matrix_tests(target_url: str) -> None:
    """Execute the full cross-browser matrix and produce a summary report."""
    print(f"{'Browser':<12} {'OS':<10} {'Status':<8} {'Load Time (ms)':<15}")
    print("-" * 50)
    for capability in BROWSER_MATRIX:
        outcome = execute_cross_browser_test(target_url, capability)
        print(
            f"{outcome['browser']:<12} "
            f"{outcome['os']:<10} "
            f"{outcome['status']:<8} "
            f"{outcome['load_time_ms']:<15.1f}"
        )
    print("-" * 50)


if __name__ == "__main__":
    run_matrix_tests("https://example-ktu-app.com/login")
```

## 3.6 Laboratory Component & Tooling Matrix (KTU Lab Viva Reference)

| Component / Tool | Profile / Configuration | Purpose in Performance Test | Safety / Procedural Note |
|---|---|---|---|
| Chrome DevTools | Network Tab → Throttling: Slow 3G | Simulate constrained network | Always clear cache between runs |
| Lighthouse | Audit mode: Mobile, 4G, 4x CPU throttle | Measure LCP, FID, CLS scores | Run in incognito to avoid extension noise |
| BrowserStack Live | Real device cloud (iPhone 15, Pixel 8) | Visual + functional parity | Disable ad-blockers during test |
| LambdaTest | Cross-browser automation hub | Parallel Selenium execution | Quota limits: check plan before run |
| WebPageTest | Multi-location waterfall analysis | RTT, TTFB, CDN analysis | Use private instance for sensitive apps |
| Charles Proxy / Fiddler | Bandwidth throttling, latency injection | Simulate 500 ms RTT, 1 Mbps | Disable SSL pinning before interception |
| Apache JMeter | Load generator | Simulate 1000 concurrent users | Always ramp-up gradually to avoid spike |
| Wireshark | Packet capture at NIC | Deep packet-level loss analysis | Requires admin privileges to capture |

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Mermaid: Three-Tier Performance Testing Architecture

```mermaid
graph TD
    subgraph clientLayer["CLIENT LAYER (Browser / Mobile App)"]
        nodeA["User Input Event"]
        nodeB["Chrome DevTools Throttling"]
        nodeC["BrowserStack Real Device"]
    end

    subgraph networkLayer["NETWORK LAYER"]
        nodeD["DNS Resolution"]
        nodeE["TCP Three-Way Handshake"]
        nodeF["SSL/TLS Negotiation"]
        nodeG["CDN Edge Node"]
    end

    subgraph serverLayer["SERVER LAYER (Application)"]
        nodeH["Load Balancer"]
        nodeI["Application Server"]
        nodeJ["Database Cluster"]
        nodeK["Cache Layer (Redis)"]
    end

    subgraph observabilityLayer["OBSERVABILITY LAYER"]
        nodeL["Apdex Calculator"]
        nodeM["SLA Compliance Checker"]
        nodeN["Alerting / PagerDuty"]
    end

    nodeA --> nodeB
    nodeB --> nodeD
    nodeD --> nodeE
    nodeE --> nodeF
    nodeF --> nodeG
    nodeG --> nodeH
    nodeH --> nodeI
    nodeI --> nodeK
    nodeI --> nodeJ
    nodeI --> nodeL
    nodeL --> nodeM
    nodeM --> nodeN

    nodeC -.Alternative Entry.-> nodeD

    style clientLayer fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    style networkLayer fill:#fff3e0,stroke:#f57c00,stroke-width:2px
    style serverLayer fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    style observabilityLayer fill:#e8f5e9,stroke:#388e3c,stroke-width:2px
```

## 4.2 Mermaid: Cross-Browser Testing Workflow

```mermaid
flowchart TD
    start([Start: Test Plan Initiated]) --> identify["Identify Target Browser Matrix"]
    identify --> selectTool{"Choose Platform"}

    selectTool -->|"Local Lab"| localLab["Manual + Selenium on Local VMs"]
    selectTool -->|"Cloud Farm"| cloud["BrowserStack / LambdaTest"]

    localLab --> execute1["Execute Test Cases per Browser"]
    cloud --> execute1

    execute1 --> capture["Capture Screenshot + Console Log + Network HAR"]
    capture --> compare["Visual Diff against Baseline"]

    compare --> verdict{"Identical Rendering?"}

    verdict -->|"Yes"| pass([PASS: Mark Build Green])
    verdict -->|"No"| logDefect["Log Defect: Browser, OS, Screenshot URL"]
    logDefect --> triage["Assign to Frontend Team"]
    triage --> fix["Apply CSS / JS Polyfill"]
    fix --> reTest["Re-execute on Same Configuration"]
    reTest --> compare

    pass --> summary([Generate Cross-Browser Compatibility Report])

    style start fill:#bbdefb
    style pass fill:#c8e6c9
    style summary fill:#c8e6c9
    style verdict fill:#fff9c4
    style selectTool fill:#fff9c4
    style logDefect fill:#ffcdd2
    style triage fill:#ffcdd2
    style fix fill:#ffcdd2
```

## 4.3 Mermaid: Responsive Testing Breakpoint State Machine

```mermaid
stateDiagram-v2
    [*] --> XS : width < 576
    XS --> SM : 576 <= width < 768
    SM --> MD : 768 <= width < 992
    MD --> LG : 992 <= width < 1200
    LG --> XL : 1200 <= width < 1400
    XL --> XXL : width >= 1400

    SM --> XS : width drops below 576
    MD --> SM : width drops below 768
    LG --> MD : width drops below 992
    XL --> LG : width drops below 1200
    XXL --> XL : width drops below 1400

    state XS {
        [*] : Single Column Layout
        [*] : Hamburger Menu Active
        [*] : Touch Targets 44x44 px Min
    }

    state MD {
        [*] : Two Column Layout
        [*] : Sidebar Visible
        [*] : 16px Base Font
    }

    state XXL {
        [*] : Four Column Grid
        [*] : Full Navigation Bar
        [*] : 18px Base Font
    }

    note right of LG
        LG is the most common
        laptop viewport and
        is used as the
        "design baseline" by
        most KTU projects.
    end note
```

## 4.4 Mermaid: Network Latency Waterfall Component Map

```mermaid
graph LR
    subgraph waterfallTimeline["WEBPAGETEST WATERFALL TIMELINE (Left to Right)"]
        A[DNS Lookup] --> B[Initial Connection]
        B --> C[SSL Negotiation]
        C --> D[Time to First Byte]
        D --> E[Content Download]
        E --> F[DOMContentLoaded]
        F --> G[Window Load Event]
    end

    A -.Slow > 100 ms.-> A1[Investigate DNS Provider]
    B -.Slow > 200 ms.-> B1[Use CDN Edge or HTTP/2]
    C -.Slow > 300 ms.-> C1[Enable TLS 1.3 + Session Resumption]
    D -.Slow > 800 ms.-> D1[Optimize Backend + DB Queries]
    E -.Slow > 1.5 s.-> E1[Enable Gzip / Brotli Compression]

    style A fill:#bbdefb
    style B fill:#c5cae9
    style C fill:#d1c4e9
    style D fill:#ffe0b2
    style E fill:#ffccbc
    style F fill:#c8e6c9
    style G fill:#a5d6a7
    style waterfallTimeline fill:#fafafa,stroke:#424242,stroke-width:2px
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank

## 5.1 Part A Questions (3 Marks Each)

### Question 1 [KTU University Exam - July 2024] — CO4, Remember
**Define network latency. List the four primary metrics used to characterize it during black-box performance testing.**

**Model Answer (Valuation Key):**

> [!NOTE]
> **Mark Allocation:** Definition [1.5 Marks] + Listing four metrics with one-line explanation [1.5 Marks]

**Definition:** Network latency is the time delay observed by a client between initiating a network request and receiving the corresponding response. It is measured in milliseconds and is a critical non-functional attribute evaluated during black-box performance testing.

**Four Primary Metrics:**

1. **Round Trip Time (RTT)** — Total time for a packet to travel from client to server and back.
2. **Time to First Byte (TTFB)** — Time elapsed between request dispatch and reception of the first response byte.
3. **Jitter** — Variation in inter-packet arrival time; critical for real-time streaming.
4. **Packet Loss Percentage** — Ratio of dropped packets to total packets transmitted, expressed as a percentage.

---

### Question 2 [KTU University Exam - Dec 2023] — CO4, Understand
**What is the Apdex score? Explain the three satisfaction categories used in its computation with an example.**

**Model Answer (Valuation Key):**

> [!NOTE]
> **Mark Allocation:** Apdex definition [1 Mark] + Three categories with thresholds [1 Mark] + Example [1 Mark]

The **Apdex (Application Performance Index)** score is an open standard for measuring user satisfaction with application response times, ranging from **0.0** (worst) to **1.0** (best).

**Three Categories** — relative to a threshold $T$ (e.g., 2 seconds):

- **Satisfied (S)** — Response time $\leq T$. Counted as 1.0 in the score.
- **Tolerating (T)** — Response time between $T$ and $4T$. Counted as 0.5 in the score.
- **Frustrated (F)** — Response time $> 4T$. Counted as 0.0 in the score.

**Example:** If $T = 2$ seconds and we observe 700 satisfied, 200 tolerating, 100 frustrated out of 1000 responses:

$$
\text{Apdex} = \frac{700 + 0.5 \times 200}{1000} = 0.80 \text{ (Fair)}
$$

---

## 5.2 Part B Questions (14 Marks Each — Module Internal Choice)

> [!IMPORTANT]
> **KTU Pattern:** Each Part B question offers a choice between **Question A** and **Question B** on the same module. Both must be fully solved below. The exam is 14 marks total per question, typically split as **Part (a) 7 marks** (Understand / Apply) and **Part (b) 7 marks** (Apply / Analyze).

---

### Part B — Option A (14 Marks)

**[KTU University Exam - July 2024] — CO4, Apply & Analyze**

**Question A: (a)** With a neat block diagram, explain the three-tier architecture of network latency testing. Describe the role of synthetic monitoring and Real User Monitoring (RUM) in performance engineering. **[7 Marks]**

**(b)** A web application's load test produced the following results in 60 seconds: 4500 satisfied responses, 3000 tolerating responses, 1500 frustrated responses. Threshold $T$ is 1.5 seconds. Calculate the Apdex score and interpret the application's user satisfaction level. Suggest two remediation strategies if the score is below 0.85. **[7 Marks]**

#### Model Solution — Part (a)

**Step 1 — State the architectural concept [2 Marks]:**
The three-tier architecture of network latency testing is structured as: **Client Layer → Network Layer → Server Layer**, with the **Observability Layer** as a transverse concern.

**Step 2 — Elaborate each tier [3 Marks]:**

- **Client Layer:** The user's browser or mobile application where the experience originates. Black-box tests begin here using Chrome DevTools, Lighthouse audits, and BrowserStack real devices.
- **Network Layer:** The transit medium encompassing DNS resolution, TCP handshake, SSL/TLS negotiation, and CDN edge nodes. RTT, jitter, and packet loss are observed here.
- **Server Layer:** The application stack — load balancer, app server, database, and cache. From the black-box perspective, this is a black box; we measure its behavior indirectly via response metrics.

**Step 3 — Synthetic vs. RUM comparison [2 Marks]:**

| Aspect | Synthetic Monitoring | Real User Monitoring (RUM) |
|---|---|---|
| Trigger | Scheduled, controlled | Actual user sessions |
| Environment | Lab-isolated | Production with real network diversity |
| Use Case | SLA validation, regression detection | Field health, geographic performance |
| Tools | WebPageTest, Pingdom | New Relic, Datadog, Sentry |

**Conclusion:** Synthetic monitoring answers "Can the system perform?" while RUM answers "Is the system performing for real users?" A mature performance engineering practice uses both. [Closing remark — implied mark]

#### Model Solution — Part (b)

**Step 1 — Verify closure [1 Mark]:**
Total responses = $4500 + 3000 + 1500 = 9000$ (matches the test description, closure holds).

**Step 2 — State the Apdex formula [1 Mark]:**

$$
\text{Apdex} = \frac{S + \frac{T}{2}}{S + T + F}
$$

**Step 3 — Substitute values [2 Marks]:**

$$
\text{Apdex} = \frac{4500 + \frac{3000}{2}}{4500 + 3000 + 1500}
$$

**Step 4 — Compute numerator and denominator [1 Mark]:**
Numerator = $4500 + 1500 = 6000$
Denominator = $9000$

**Step 5 — Final computation [1 Mark]:**

$$
\text{Apdex} = \frac{6000}{9000} = 0.667
$$

**Step 6 — Interpretation [0.5 Mark]:**
Score of **0.667** falls in the **Poor** range (0.50 – 0.69). User satisfaction is below the industry-acceptable threshold of **0.85**.

**Step 7 — Two remediation strategies [0.5 Mark]:**

1. **Backend Optimization** — Profile slow database queries using APM tools; introduce proper indexing and connection pooling. Move hot data to Redis cache.
2. **Frontend Optimization** — Enable Brotli compression, defer non-critical JavaScript, implement code splitting, and leverage a CDN to reduce TTFB.

---

### Part B — Option B (14 Marks)

**[KTU University Exam - Dec 2023] — CO4, Understand & Apply**

**Question B: (a)** Compare browser compatibility testing and responsive testing. List the major categories of compatibility defects that a tester should report. **[7 Marks]**

**(b)** With a suitable Python code snippet, demonstrate how a tester can perform black-box network latency testing measuring RTT and packet loss. Explain the significance of capturing the standard deviation (jitter) of RTT values. **[7 Marks]**

#### Model Solution — Part (a)

**Step 1 — Tabular comparison [4 Marks]:**

| Aspect | Browser Compatibility Testing | Responsive Testing |
|---|---|---|
| Primary Concern | Functional + visual parity across browser engines | Layout adaptation across viewport sizes |
| Variables | Browser, version, OS, rendering engine | Screen width, height, DPR, orientation |
| Typical Defect | CSS Flexbox behavior differs in Safari | Horizontal scroll appears on mobile |
| Common Tools | BrowserStack, LambdaTest, Sauce Labs | Chrome DevTools, BrowserStack Responsive |
| KTU Sub-domain | Functional non-functional | Visual non-functional |

**Step 2 — Five defect categories [3 Marks — 0.6 each]:**

1. **CSS Rendering Defects** — `gap` property unsupported in Safari 13, Grid template issues.
2. **JavaScript Engine Differences** — Optional chaining `?.` fails in legacy browsers.
3. **Font Rendering Variations** — Sub-pixel anti-aliasing differences between Windows and macOS.
4. **Native Form Element Styling** — Date picker appearance varies wildly across browsers.
5. **API Availability Gaps** — Service Workers absent in older Safari versions.

---

#### Model Solution — Part (b)

**Step 1 — Code snippet [3 Marks]:**

```python
import socket, time, statistics

def measure_rtt(host, port=443, count=5):
    rtts = []
    lost = 0
    for i in range(count):
        start = time.perf_counter_ns()
        try:
            s = socket.create_connection((host, port), timeout=2)
            rtts.append((time.perf_counter_ns() - start) / 1e6)
            s.close()
        except Exception:
            lost += 1
        time.sleep(1)
    return rtts, lost

samples, lost_packets = measure_rtt("example.com", 443, 10)
mean_rtt = statistics.mean(samples) if samples else 0
jitter = statistics.stdev(samples) if len(samples) >= 2 else 0
loss_pct = (lost_packets / 10) * 100
print(f"Mean RTT: {mean_rtt:.2f} ms | Jitter: {jitter:.2f} ms | Loss: {loss_pct:.1f}%")
```

**Step 2 — Explanation of each metric [2 Marks]:**
The `measure_rtt` function performs an active TCP three-way handshake to the target host. Successful connections append RTT to the `samples` list. Failures are tallied as `lost_packets`. After completion, mean RTT, jitter, and packet loss percentage are computed.

**Step 3 — Significance of jitter [2 Marks]:**

- **Jitter = standard deviation of RTT** indicates network *consistency*, not just speed.
- A connection with mean RTT of 50 ms and jitter of 40 ms is **worse** for video calls than a connection with mean RTT of 100 ms and jitter of 5 ms.
- High jitter causes **buffering, voice glitches, and dropped frames** in real-time applications.
- Black-box testers report jitter because end-users perceive it as **unpredictability** — a critical UX failure mode.

**Valuation Key Summary:**

| Step | Marks |
|---|---|
| Correct function signature with error handling | 1 |
| TCP connection logic and RTT measurement | 1 |
| Statistical aggregation code | 1 |
| Explanation of mean RTT + packet loss | 1 |
| Explanation of jitter significance | 2 |
| Conclusion on production relevance | 1 |

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mark-Deduction Pitfalls in PECST631 Performance Testing Questions:**
>
> 1. **Confusing TTFB with Page Load Time.** TTFB is server-side, Page Load includes client-side rendering. Examiners deduct **1 mark** for interchanging them.
> 2. **Forgetting the Apdex closure check.** Always state $S + T + F = \text{Total Responses}$ before computing the score. Skipping this loses **1 mark**.
> 3. **Mixing up WebKit and Safari on iOS.** Apple mandates all iOS browsers use WebKit. Testing Safari on macOS is not equivalent. Examiners explicitly test this awareness.
> 4. **Omitting units in formula substitution.** Writing RTT = 0.1 instead of RTT = 0.1 seconds (or 100 ms) causes silent unit errors. Always annotate units.
> 5. **Writing "we test for bugs" in performance testing.** Performance testing is about *measuring metrics*, not finding defects. Using this phrase costs **1 mark** in definition questions.
> 6. **Skipping the boundary state values** in waterfall chart questions. Always explicitly state: "DNS Lookup is the first stage" etc.
> 7. **Using `print` for output in lab questions without type hints.** Python code without `def`, type hints, or error handling is considered incomplete; expect **1-2 mark deduction**.

---

## 5.4 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Rapid Revision Checklist for KTU Module 4 — Performance Testing**

- **Performance Testing** is non-functional; it *measures* quality attributes, it does not find functional bugs.
- The three KTU sub-domains are **Network Latency**, **Browser Compatibility**, and **Responsive Testing**.
- **RTT** = client → server → client time. **TTFB** = request → first byte received. Both are critical black-box metrics.
- **Apdex formula:** $\text{Apdex} = \frac{S + T/2}{S + T + F}$, where $T$ is the satisfaction threshold. Industry target is **$\geq 0.85$**.
- **Jitter** = standard deviation of RTT samples; high jitter ruins real-time UX even with low mean RTT.
- **Packet loss of 2%** can degrade TCP throughput by up to **93%** (Mathis model).
- **Three major browser engines:** Blink (Chrome, Edge, Opera), Gecko (Firefox), WebKit (Safari). Apple mandates WebKit on all iOS browsers.
- **Bootstrap 5 breakpoints:** xs < 576, sm ≥ 576, md ≥ 768, lg ≥ 992, xl ≥ 1200, xxl ≥ 1400.
- **BrowserStack and LambdaTest** are cloud-based cross-browser platforms providing **3000+** real device-OS-browser combinations.
- **Waterfall chart order:** DNS → TCP Connect → SSL → TTFB → Content Download → DOMContentLoaded → Load.
- **Google RAIL thresholds:** input response $\leq$ **100 ms**, animation $\leq$ **16.7 ms** (60 fps), page interactive $\leq$ **5 s** on slow 3G.
- **Synthetic monitoring** = scheduled lab tests; **RUM** = real production user data. Both are required for mature performance engineering.
- **CSS defect types to remember:** Flexbox/Grid gaps, ES6+ syntax in legacy engines, font anti-aliasing, form element styling, missing APIs.
- **Responsive defect signals:** horizontal scrollbar appearing, text below 12px on mobile, broken touch targets, images overflowing containers.
- **Production tools for performance testing:** Chrome DevTools, Lighthouse, WebPageTest, GTmetrix, BrowserStack, LambdaTest, JMeter, Charles Proxy, Wireshark, New Relic, Datadog.
- **Python implementation must include:** type hints, `try/except` error handling, and explicit unit conversions (ns → ms).
- **Selenium + BrowserStack pattern:** Use the `bstack:options` capability format with `consoleLogs` and `networkLogs` enabled for observability.
- **Valuation key tactic:** Always state assumptions, units, and formula before substituting numbers — this is what examiners look for to award partial credit.

<!-- SECTION_5_END -->
