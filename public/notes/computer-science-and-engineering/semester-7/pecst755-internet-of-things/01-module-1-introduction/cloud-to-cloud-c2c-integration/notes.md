# Cloud-to-Cloud (C2C) Integration

<!-- SECTION_1_START -->
# Cloud-to-Cloud (C2C) Integration — IoT Module 1

## 1.1 Formal Academic Definition

> [!IMPORTANT]
> **Cloud-to-Cloud (C2C) Integration** is a paradigm in distributed Internet of Things (IoT) architectures wherein two or more independent cloud platforms — often operated by different vendors or organizational domains — exchange data, trigger workflows, and synchronize state through standardized web-service protocols, event-driven messaging, or unified middleware gateways, without direct reliance on end-device routing.

In the **KTU 2024 Scheme (PECST755 — Internet of Things)** taxonomy, C2C Integration sits at the **uppermost layer (Application / Cloud Layer)** of the standard **5-layer IoT Reference Architecture**:

$$ \text{Perception Layer} \rightarrow \text{Network Layer} \rightarrow \text{Processing Layer} \rightarrow \text{Application Layer} \rightarrow \text{Business Layer} $$

The **integration endpoint** at the cloud layer typically exposes a **RESTful API**, **Webhook listener**, or **pub/sub topic** conforming to standards such as **OASIS MQTT v5.0**, **AMQP 1.0**, **W3C WebSub**, or **OpenAPI 3.1**.

---

## 1.2 Conceptual Analogy / Intuitive Overview

> [!NOTE]
> **Analogy — The Universal Postal System**
>
> Imagine two cities (Cloud A and Cloud B) that each maintain their own local postal service. Citizens in City A want to send a parcel to a friend in City B. Instead of building a personal road between every house, both cities agree to a **central exchange office** (the API Gateway) that follows a **universal addressing format** (a standardized protocol like HTTP/REST). The parcel (JSON payload) is dropped at the exchange, the exchange verifies the **address** (endpoint URL + authentication token), and the partner city accepts the delivery.
>
> In this analogy:
> - **Cloud A** = Sending city's mail system (e.g., AWS IoT Core)
> - **Cloud B** = Receiving city's mail system (e.g., Azure IoT Hub)
> - **API Gateway** = The exchange office (e.g., AWS API Gateway, Azure API Management)
> - **JSON payload** = The parcel contents
> - **OAuth 2.0 token** = The official courier's stamped authority letter
> - **Webhook** = A pre-registered "ring the doorbell when mail arrives" instruction

A **single IoT device rarely communicates cloud-to-cloud directly**. Instead, its data first lands in a *home cloud*, and that cloud subsequently *negotiates* with peer clouds. This is the essence of C2C.

---

## 1.3 Core Distinction: Where C2C Fits in IoT Integration Models

| Integration Type | Endpoint A | Endpoint B | Typical Protocol | Example |
|---|---|---|---|---|
| **D2D** (Device-to-Device) | Sensor MCU | Actuator MCU | BLE, Zigbee, Z-Wave | Smart bulb ↔ Motion sensor |
| **D2C** (Device-to-Cloud) | Sensor MCU | Cloud broker | MQTT, CoAP, HTTPS | ESP32 → AWS IoT Core |
| **C2D** (Cloud-to-Device) | Cloud broker | Actuator | MQTT (downlink), HTTPS | AWS → Smart valve (close) |
| **C2C** (Cloud-to-Cloud) | Cloud Platform A | Cloud Platform B | REST, Webhooks, AMQP, Kafka | AWS IoT ↔ Salesforce CRM |

> [!IMPORTANT]
> **KTU Board Tip:** Examiners frequently test whether a student can **classify** an integration correctly. C2C **NEVER** originates from a constrained end-device — it is strictly a **server-side / backend** interaction.

---

## 1.4 Geometric / Architectural Visualization

> [!VISUALIZATION CONTROL]
> **Concept:** C2C Data Flow Topology in a 3-Tier IoT Stack
> **Conceptual Mapping (treat as a logical block diagram, not a plotted curve):**
> - X-axis (logical left → right): `Device Edge → Fog → Cloud A → Integration Layer → Cloud B → Enterprise App`
> - Y-axis: *Latency tier* (low at edge, high at enterprise)
> **Visual Description:** Picture **two large rounded rectangles** representing Cloud A and Cloud B, connected by a **central diamond-shaped middleware** (the API Gateway / Message Broker). Arrows flow **bidirectionally** between the diamond and each cloud. The diamond should be labelled with the **active protocol** (e.g., `HTTPS/REST` or `AMQP 1.0`). A **dashed secondary arrow** can represent a *Webhook callback* path.

---

## 1.5 Physical & Logical Constants Frequently Used

- **OAuth 2.0 Access Token Lifetime (recommended):** **3600 seconds (1 hour)**
- **MQTT Default Keep-Alive Interval:** **60 seconds**
- **TLS 1.3 Handshake RTT (typical, intra-region):** **1 RTT** ≈ **20–80 ms**
- **Standard JSON payload size for telemetry:** **≤ 1 KB** for cost-optimized cellular
- **HTTP Status Class meanings (KTU-favourite):**
  - `2xx` → **Success**
  - `4xx` → **Client Error (caller's fault)**
  - `5xx` → **Server Error (callee's fault)**

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Why C2C Integration is Architecturally Necessary

A real-world IoT deployment almost never lives inside **one** cloud vendor. The reasons are practical and economic:

1. **Best-of-Breed Selection** — No single cloud offers the best service for *every* workload. Example: AWS for ingestion + analytics, Google BigQuery for warehousing, Twilio for notifications, Salesforce for CRM.
2. **M&A / Federation** — When companies merge, two previously independent IoT estates must interoperate.
3. **Geographic Compliance** — EU customer data must remain in EU regions (GDPR), forcing multi-cloud topologies.
4. **Vendor Lock-in Mitigation** — Strategic decoupling to preserve negotiating leverage.
5. **Partner Ecosystem Enablement** — A manufacturer must expose telemetry to *partners*, dealers, and *insurers* via their own cloud backends.

---

## 2.2 The Three Canonical C2C Integration Patterns

### Pattern A — **Request/Response (Synchronous, Pull-based)**

The most common pattern. Cloud A issues an **HTTP GET/POST** to a REST endpoint exposed by Cloud B and waits for a reply.

**Operational Sequence:**

1. Cloud A constructs an **HTTPS request** with method `POST`, URL `https://api.partner-cloud.com/v2/events`, and a JSON body.
2. Cloud A attaches an `Authorization: Bearer <JWT>` header obtained via **OAuth 2.0 Client Credentials Grant**.
3. Cloud B's **API Gateway** validates the token against its **Identity Provider (IdP)** — typically **Okta**, **Auth0**, or **AWS Cognito**.
4. The gateway forwards the request to a **Lambda / Cloud Function**, which persists the payload.
5. Cloud B returns an **HTTP 202 Accepted** response with a correlation ID.

### Pattern B — **Webhook (Asynchronous, Push-based, Event-driven)**

Cloud B registers a **callback URL** with Cloud A. When a specified event occurs, Cloud A *pushes* an HTTP POST to that URL.

**Operational Sequence:**

1. Cloud B admin configures a **subscriber URL** in Cloud A's developer console.
2. Cloud A's event bus (e.g., **AWS EventBridge**, **Google Eventarc**) detects a matching event rule.
3. Cloud A performs an `HTTPS POST` to the registered URL with a **signed payload** (HMAC-SHA256 header `X-Signature`).
4. Cloud B's endpoint verifies the signature against a **shared secret** to prevent spoofing.
5. Cloud B responds with `200 OK` within **< 5 seconds** (typical SLA); retries use **exponential backoff**.

### Pattern C — **Message Broker Mediation (Pub/Sub, Decoupled)**

Both clouds connect to a **shared message broker** (e.g., **Solace PubSub+**, **Confluent Kafka**, **RabbitMQ**, **Azure Service Bus**). Neither cloud knows the other's IP — they only know the topic namespace.

**Operational Sequence:**

1. Cloud A **publishes** a message to topic `iot.telemetry.factory3.plc01`.
2. The broker (often deployed in a *neutral* cloud or on-prem) routes by **topic subscription**.
3. Cloud B holds an **active subscription** and receives the message via **AMQP 1.0** or **MQTT 5.0**.
4. Cloud B **acknowledges** (ACK) the message; broker marks it delivered.
5. Failed messages are redirected to a **Dead-Letter Queue (DLQ)** after `N` retries (default `N = 5`).

---

## 2.3 KTU High-Yield Formula Sheet (C2C Domain)

> [!IMPORTANT]
> The following table is the **authoritative cheat-sheet** for solving C2C exam questions. All entries are aligned to **KTU 2024 Scheme PECST755 Module 1** learning outcomes.

| # | Concept | Formula / Rule | Unit / Notes |
|---|---|---|---|
| 1 | **RESTful CRUD Mapping** | `POST`=Create, `GET`=Read, `PUT/PATCH`=Update, `DELETE`=Delete | Stateless; HTTP/1.1 or HTTP/2 |
| 2 | **Idempotency Key** | Same `Idempotency-Key` header → identical server-side result | UUID v4 recommended |
| 3 | **JWT Structure** | `Base64Url(Header) . Base64Url(Payload) . HMACSHA256(Header.Payload, secret)` | Three dot-separated parts |
| 4 | **OAuth 2.0 Token Expiry** | `access_token` valid for $\Delta t$ seconds; refresh via `refresh_token` | Typical $\Delta t$ = **3600 s** |
| 5 | **HMAC Signature** | $\sigma = \text{HMAC}(K, M)$ where $K$ = shared secret, $M$ = payload | SHA-256 standard |
| 6 | **MQTT QoS Levels** | QoS 0 = at-most-once, QoS 1 = at-least-once, QoS 2 = exactly-once | C2C usually picks **QoS 1** |
| 7 | **Exponential Backoff** | $t_{n} = t_0 \cdot b^{n-1} + \text{jitter}$, $b$ = base (typically 2) | $n$ = retry attempt |
| 8 | **Throughput Estimation** | $R = \frac{N_{\text{msgs}}}{T_{\text{window}}} \cdot \bar{S}$ | $R$ in msg/s or KB/s |
| 9 | **End-to-End Latency** | $L_{e2e} = L_{\text{net}} + L_{\text{queue}} + L_{\text{proc}}$ | Sum of all hops |
| 10 | **Dead-Letter Retry Cap** | After $N$ failures, route to DLQ | Default $N = 5$ |
| 11 | **Webhook SLA Window** | Receiver must ACK in $\le 5\,\text{s}$ | Else source retries |
| 12 | **Pub/Sub Topic Naming** | Hierarchical: `org.env.service.entity.action` | Lowercase, dot-delimited |
| 13 | **TLS Cipher (modern)** | TLS_AES_256_GCM_SHA384 | TLS 1.3 mandatory for new builds |
| 14 | **Data Format Interop** | Cloud A (JSON) $\leftrightarrow$ Cloud B (Protobuf) via adapter | Avro / JSON / Protobuf |

> **Escape Note:** All vertical bars in formulas above (e.g., absolute value, conditional) are typeset using $\vert$ to preserve markdown table integrity.

---

## 2.4 Engineering Utility in Production Systems

- **Smart Manufacturing (Industry 4.0):** A factory's **Siemens MindSphere** cloud must exchange **OEE (Overall Equipment Effectiveness)** metrics with the parent company's **SAP S/4HANA** cloud. C2C integration via **REST + OData v4** is the standard recipe.
- **Connected Vehicles:** **Tesla Fleet Telemetry** cloud pushes vehicle health data to **insurance partner clouds** (e.g., **LexisNexis**) to enable usage-based insurance. MQTT-over-WebSockets is the typical C2C transport.
- **Smart Cities:** A city's **traffic management cloud** publishes congestion events to a **rideshare cloud** (Uber/Ola) and a **public transit cloud** simultaneously, using **Kafka topics** as the unifying backbone.
- **Healthcare IoT:** A **Philips HealthSuite** cloud federates with a hospital's on-prem **HL7 FHIR** server using a **middleware adapter** (e.g., **Mirth Connect**) that translates between **HL7 v2** and **JSON-over-HTTPS**.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Code & Symbolic Implementation

## 3.1 Mathematical Derivation — End-to-End C2C Latency Budget

Let us rigorously derive the **expected end-to-end latency** for a telemetry event flowing from Cloud A through an API Gateway into Cloud B and finally into a downstream analytics warehouse.

### Step 1 — Identify Latency Contributors

We define the total latency $L_{e2e}$ as the sum of four independent contributors:

$$ L_{e2e} \;=\; L_{\text{auth}} \;+\; L_{\text{net}} \;+\; L_{\text{gw}} \;+\; L_{\text{queue}} $$

where:
- $L_{\text{auth}}$ = OAuth 2.0 token validation time at the API Gateway.
- $L_{\text{net}} = \frac{D_{\text{mtu}}}{B_{\text{link}}} + 2 \cdot RTT_{\text{inter-region}}$ (transmission + propagation).
- $L_{\text{gw}}$ = Gateway processing (TLS termination, header inspection, rate-limit lookup).
- $L_{\text{queue}}$ = Time the message spends in the broker queue (Little's Law: $L_{q} = \frac{\rho^{2}}{1-\rho} \cdot \frac{1}{\mu}$).

### Step 2 — Apply Little's Law to the Queue

Given an arrival rate $\lambda$ (msg/s) and service rate $\mu$ (msg/s), the utilization is $\rho = \frac{\lambda}{\mu}$. The **average time in queue** is:

$$ L_{q} \;=\; \frac{\rho^{2}}{1 - \rho} \cdot \frac{1}{\mu} $$

### Step 3 — Substitute Numerical Values (Worked Example)

Suppose:
- $\lambda = 250\,\text{msg/s}$
- $\mu = 1000\,\text{msg/s}$

Therefore:

$$ \rho \;=\; \frac{250}{1000} \;=\; 0.25 $$

$$ L_{q} \;=\; \frac{(0.25)^{2}}{1 - 0.25} \cdot \frac{1}{1000} \;=\; \frac{0.0625}{0.75} \cdot 0.001 $$

$$ L_{q} \;=\; 0.0833 \cdot 0.001 \;\approx\; 8.33 \times 10^{-5}\,\text{s} \;\approx\; 83.3\,\mu\text{s} $$

### Step 4 — Network Latency Component

For an inter-region HTTPS payload of size $S = 4\,\text{KB} = 32\,000\,\text{bits}$ over a link of bandwidth $B = 1\,\text{Gbps}$:

$$ L_{\text{tx}} \;=\; \frac{S}{B} \;=\; \frac{32\,000}{10^{9}} \;=\; 3.2 \times 10^{-5}\,\text{s} \;=\; 32\,\mu\text{s} $$

Propagation: assume inter-region $RTT = 80\,\text{ms}$, so $L_{\text{prop}} = 40\,\text{ms}$ (one-way estimate).

$$ L_{\text{net}} \;=\; 32\,\mu\text{s} + 40\,\text{ms} \;\approx\; 40.032\,\text{ms} $$

> The **propagation** term dominates, not transmission — a critical insight.

### Step 5 — Final Aggregation

Assuming $L_{\text{auth}} = 5\,\text{ms}$ and $L_{\text{gw}} = 3\,\text{ms}$:

$$ L_{e2e} \;\approx\; 5\,\text{ms} + 40.032\,\text{ms} + 3\,\text{ms} + 0.083\,\text{ms} $$

$$ \boxed{\,L_{e2e} \;\approx\; 48.12\,\text{ms}\,} $$

---

## 3.2 Exhaustive Python Implementation — C2C REST Bridge

The following **fully operational** Python module implements a minimal C2C bridge. It includes **type hints**, **error handling**, **HMAC verification**, **exponential backoff**, and **structured logging**.

```python
"""
c2c_bridge.py
A production-grade C2C integration reference implementation.
Maps to KTU PECST755 Module 1 - Cloud-to-Cloud Integration.
"""

from __future__ import annotations

import hashlib
import hmac
import json
import logging
import os
import random
import time
import uuid
from dataclasses import dataclass, field
from typing import Any, Dict, Optional

import requests
from requests.exceptions import RequestException, Timeout

# ---------------------------------------------------------------------------
# Structured logging configuration
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
)
logger = logging.getLogger("C2CBridge")


# ---------------------------------------------------------------------------
# Configuration dataclass
# ---------------------------------------------------------------------------
@dataclass(frozen=True)
class C2CConfig:
    """Immutable C2C connection parameters."""

    partner_base_url: str
    client_id: str
    client_secret: str
    webhook_shared_secret: str
    oauth_token_url: str
    request_timeout_sec: int = 10
    max_retries: int = 5
    backoff_base_sec: float = 0.5


# ---------------------------------------------------------------------------
# OAuth 2.0 Token Manager
# ---------------------------------------------------------------------------
class OAuthTokenManager:
    """Caches and refreshes OAuth 2.0 access tokens using Client Credentials Grant."""

    def __init__(self, config: C2CConfig) -> None:
        self._config = config
        self._token: Optional[str] = None
        self._expires_at: float = 0.0

    def get_token(self) -> str:
        """Returns a valid bearer token, refreshing if within 60s of expiry."""
        if self._token and time.time() < self._expires_at - 60:
            return self._token

        logger.info("Requesting new OAuth 2.0 access token")
        try:
            response = requests.post(
                self._config.oauth_token_url,
                data={
                    "grant_type": "client_credentials",
                    "client_id": self._config.client_id,
                    "client_secret": self._config.client_secret,
                },
                timeout=self._config.request_timeout_sec,
            )
            response.raise_for_status()
        except RequestException as exc:
            logger.error("OAuth token request failed: %s", exc)
            raise

        payload = response.json()
        self._token = payload["access_token"]
        self._expires_at = time.time() + float(payload.get("expires_in", 3600))
        logger.info("Acquired token, expires in %ss", payload.get("expires_in", 3600))
        return self._token


# ---------------------------------------------------------------------------
# Webhook Signature Verifier
# ---------------------------------------------------------------------------
def verify_webhook_signature(
    payload_body: bytes, signature_header: str, shared_secret: str
) -> bool:
    """
    Verifies an HMAC-SHA256 signature attached to an incoming webhook.
    Constant-time comparison prevents timing attacks.
    """
    expected = hmac.new(
        key=shared_secret.encode("utf-8"),
        msg=payload_body,
        digestmod=hashlib.sha256,
    ).hexdigest()
    return hmac.compare_digest(expected, signature_header)


# ---------------------------------------------------------------------------
# C2C Bridge Core
# ---------------------------------------------------------------------------
@dataclass
class C2CBridge:
    """Encapsulates synchronous REST-based C2C communication with retries."""

    config: C2CConfig
    token_manager: OAuthTokenManager = field(init=False)

    def __post_init__(self) -> None:
        self.token_manager = OAuthTokenManager(self.config)

    def _sleep_with_backoff(self, attempt: int) -> None:
        """Exponential backoff with full jitter."""
        delay = self.config.backoff_base_sec * (2 ** (attempt - 1))
        delay = min(delay, 30.0)  # cap at 30s
        delay = random.uniform(0, delay)  # full jitter
        logger.warning("Backing off for %.2fs before retry %d", delay, attempt)
        time.sleep(delay)

    def post_event(self, event_type: str, event_body: Dict[str, Any]) -> int:
        """
        Sends a typed event to the partner cloud with idempotency and retries.
        Returns the final HTTP status code.
        """
        url = f"{self.config.partner_base_url.rstrip('/')}/v2/events"
        headers = {
            "Authorization": f"Bearer {self.token_manager.get_token()}",
            "Content-Type": "application/json",
            "Idempotency-Key": str(uuid.uuid4()),
            "X-Event-Type": event_type,
        }
        body = json.dumps(event_body).encode("utf-8")

        for attempt in range(1, self.config.max_retries + 1):
            try:
                response = requests.post(
                    url, headers=headers, data=body,
                    timeout=self.config.request_timeout_sec,
                )
            except (RequestException, Timeout) as exc:
                logger.error("Network error on attempt %d: %s", attempt, exc)
                if attempt == self.config.max_retries:
                    return 599  # custom "network failure" sentinel
                self._sleep_with_backoff(attempt)
                continue

            status = response.status_code
            if 200 <= status < 300:
                logger.info("Event accepted by partner (status=%d)", status)
                return status

            if 400 <= status < 500 and status != 408 and status != 429:
                logger.error("Permanent client error %d: %s", status, response.text)
                return status  # do NOT retry 4xx except 408/429

            logger.warning("Retryable status %d on attempt %d", status, attempt)
            if attempt == self.config.max_retries:
                return status
            self._sleep_with_backoff(attempt)

        return 599  # unreachable, for type-checker satisfaction


# ---------------------------------------------------------------------------
# Demonstration / Smoke Test
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    cfg = C2CConfig(
        partner_base_url=os.getenv("PARTNER_URL", "https://api.partner.example.com"),
        client_id=os.getenv("CLIENT_ID", "demo-client"),
        client_secret=os.getenv("CLIENT_SECRET", "demo-secret"),
        webhook_shared_secret=os.getenv("WEBHOOK_SECRET", "shared-key"),
        oauth_token_url=os.getenv("OAUTH_URL", "https://auth.partner.example.com/oauth/token"),
    )
    bridge = C2CBridge(config=cfg)
    status = bridge.post_event(
        event_type="telemetry.ingest",
        event_body={
            "deviceId": "PLC-01",
            "temperature": 72.4,
            "vibration": 0.013,
            "ts": int(time.time() * 1000),
        },
    )
    print(f"Final delivery status: {status}")
```

### Line-by-Line Operational Notes

- The `@dataclass(frozen=True)` decorator on `C2CConfig` enforces immutability, preventing accidental key rotation at runtime.
- `OAuthTokenManager` proactively refreshes **60 seconds** before expiry to eliminate race conditions during high-throughput bursts.
- `verify_webhook_signature` uses `hmac.compare_digest` — a **constant-time** comparison that defeats side-channel timing attacks.
- Exponential backoff with **full jitter** follows the **AWS Architecture Blog** recommendation to minimize thundering-herd retries.
- The `Idempotency-Key` header, generated via `uuid.uuid4()`, allows the receiver to deduplicate duplicate deliveries caused by network retries.

---

## 3.3 Mermaid Sequence Diagram — C2C REST Handshake

```mermaid
sequenceDiagram
    autonumber
    participant DevA as Cloud A Publisher
    participant IdP as OAuth IdP
    participant GW as Cloud B API Gateway
    participant Fn as Cloud B Worker Function
    participant DB as Cloud B Datastore

    DevA->>IdP: POST /oauth/token (client_credentials)
    IdP-->>DevA: 200 access_token (TTL=3600s)
    DevA->>GW: POST /v2/events (Bearer token, Idempotency-Key)
    GW->>GW: Validate JWT signature & expiry
    GW->>Fn: Forward event payload
    Fn->>DB: INSERT telemetry row
    DB-->>Fn: ack
    Fn-->>GW: 202 Accepted (correlation_id)
    GW-->>DevA: 202 Accepted
    Note over DevA,GW: On 5xx or 408/429, DevA retries<br/>with exponential backoff (jittered)
```

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Reference Architecture — Three-Cloud C2C Federation

```mermaid
flowchart LR
    subgraph EDGE["EDGE TIER"]
        sensor["Temperature Sensor"]
        gateway["Edge Gateway"]
    end

    subgraph CLOUDA["CLOUD A - AWS"]
        ing1["AWS IoT Core"]
        evb["EventBridge"]
        lam1["Lambda Function"]
    end

    subgraph MID["INTEGRATION LAYER"]
        apigw["API Gateway"]
        kafka["Kafka Topic Bus"]
        wh["Webhook Receiver"]
    end

    subgraph CLOUDB["CLOUD B - AZURE"]
        iothub["Azure IoT Hub"]
        fn2["Azure Function"]
        db2["Cosmos DB"]
    end

    subgraph CLOUDC["CLOUD C - GCP"]
        pubsub["Pub/Sub"]
        bq["BigQuery"]
    end

    sensor --> gateway
    gateway -->|MQTT| ing1
    ing1 --> evb
    evb -->|Rule match| lam1
    lam1 -->|REST POST| apigw
    lam1 -->|AMQP publish| kafka
    kafka -->|Subscribe| pubsub
    apigw -->|202 Accepted| wh
    wh --> iothub
    iothub --> fn2
    fn2 --> db2
    pubsub --> bq
```

> **Reading the diagram:** Sensor data flows *up* into AWS IoT Core, where two **parallel C2C paths** diverge — a **synchronous REST path** through the API Gateway and an **asynchronous pub/sub path** through Kafka. Each path terminates in a different partner cloud (Azure and GCP respectively), demonstrating the **fan-out** capability of mature C2C designs.

---

## 4.2 Decision Matrix — When to Choose Each C2C Pattern

```mermaid
flowchart TD
    start["Need C2C Integration?"] --> q1{"Is response needed<br/>synchronously?"}
    q1 -- Yes --> rest["Pattern A: REST Request-Response"]
    q1 -- No --> q2{"Are events<br/>discrete and infrequent?"}
    q2 -- Yes --> wh["Pattern B: Webhook Push"]
    q2 -- No --> q3{"Are events<br/>high-volume streaming?"}
    q3 -- Yes --> mq["Pattern C: Message Broker Pub/Sub"]
    q3 -- No --> rest

    rest --> note1["Use OAuth 2.0 + Idempotency Key<br/>SLA: 200 OK within 5s"]
    wh --> note2["Use HMAC-SHA256 signature<br/>Receiver exposes HTTPS endpoint"]
    mq --> note3["Use AMQP 1.0 or MQTT 5.0<br/>Topic naming convention required"]
```

---

## 4.3 Component Responsibility Matrix

| Component | Responsibility | Failure Mode | Mitigation |
|---|---|---|---|
| **API Gateway** | Auth, throttling, TLS termination | 5xx under load | Circuit breaker + WAF |
| **OAuth IdP** | Token issuance & validation | IdP outage | Cached token + secondary IdP |
| **Message Broker** | Durable, ordered, replayable delivery | Disk full, partition loss | Replication factor $\ge 3$ |
| **Webhook Receiver** | Idempotent event ingestion | Signature mismatch, slow ACK | HMAC verify + 5s timeout |
| **Adapter** | Format translation (JSON ↔ Protobuf) | Schema drift | Schema registry (Confluent SR) |
| **DLQ** | Capture poison messages | Unbounded growth | TTL-based retention (e.g., 14 days) |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A — Short Answer Questions (3 Marks each)

### Question 1 (Remember Level)

**[KTU University Exam — July 2024]**
**Q:** Define **Cloud-to-Cloud (C2C) Integration** in the context of IoT. List any **two** real-world scenarios where C2C is preferred over Device-to-Cloud (D2C) integration.

**Model Answer (3 Marks):**
- **Definition (2 Marks):** C2C Integration is the process of enabling data exchange, workflow orchestration, and state synchronization between **two or more independent cloud platforms** using standardized protocols (e.g., REST, AMQP, Webhooks), without involving the end IoT device in routing decisions.
- **Scenario 1 (0.5 Mark):** A manufacturing plant uses **Siemens MindSphere** for OEE analytics but must push work-orders to **SAP S/4HANA Cloud** — a C2C REST integration is mandatory because SAP is not reachable from PLCs.
- **Scenario 2 (0.5 Mark):** A connected-vehicle fleet cloud (e.g., **Tesla Fleet API**) must forward driver behaviour scores to **insurance partner clouds** for usage-based premium calculation — bandwidth and trust constraints forbid direct device egress.

---

### Question 2 (Understand Level)

**[KTU University Exam — Dec 2023]**
**Q:** Differentiate between **Webhooks** and **Message Broker-based Pub/Sub** as C2C integration patterns. Mention **one** advantage and **one** limitation of each.

**Model Answer (3 Marks):**
- **Webhook (1.5 Marks):** A push-based, **HTTP-callback** mechanism where the *receiver* registers a public URL with the *sender*. **Advantage:** Zero additional infrastructure (no broker). **Limitation:** Receiver must be publicly reachable, exposing a larger attack surface.
- **Pub/Sub (1.5 Marks):** A **broker-mediated** model where both parties connect to a shared topic namespace. **Advantage:** Loosely coupled, supports replay, scales to millions of subscribers. **Limitation:** Requires operating/maintaining the broker, increasing cost and complexity.

---

## Part B — Long Answer Questions (14 Marks each, Internal Choice)

### Question A (14 Marks)

**[KTU University Exam — July 2024 — Model Paper Adaptation]**

**(a)** Explain the **three canonical C2C integration patterns** with a neat block diagram. For each pattern, state the **transport protocol**, **typical use case**, and **failure recovery mechanism**. **(7 Marks)**

**(b)** A smart-city IoT deployment has **250 message-generating sensors** that publish telemetry to a **shared Kafka broker** at an average rate of $\lambda = 300\,\text{msg/s}$. The broker's service rate is $\mu = 1200\,\text{msg/s}$. Using **Little's Law**, compute:
   1. The **queue utilization** $\rho$.
   2. The **average time a message spends in the queue** $L_q$.
   3. The **average number of messages in the queue** $L$ at any instant. **(7 Marks)**

---

### Question A — Model Solution

#### Part (a) Solution (7 Marks)

> **[Three Patterns Stated: 3 Marks — 1 each]**

**Pattern 1 — REST Request/Response:**
- **Protocol:** HTTPS with JSON or Protobuf payload, OAuth 2.0.
- **Use Case:** Synchronous CRUD operations such as provisioning a device, fetching customer data, creating a CRM case.
- **Failure Recovery:** Client retries with **exponential backoff + jitter**; server uses **idempotency keys** to make retries safe.

**Pattern 2 — Webhook Push:**
- **Protocol:** HTTPS POST, HMAC-SHA256 signed.
- **Use Case:** Discrete, low-frequency events — e.g., "order shipped", "device firmware updated".
- **Failure Recovery:** Sender retries with **exponential backoff**; receiver acknowledges with `200 OK` within **5 seconds**; persistent failures route to **DLQ**.

**Pattern 3 — Pub/Sub via Message Broker:**
- **Protocol:** AMQP 1.0, MQTT 5.0, or Kafka binary protocol.
- **Use Case:** High-volume, streaming telemetry with **multiple consumers** (analytics, archival, alerting).
- **Failure Recovery:** **Acknowledgement (ACK)** semantics + **Dead-Letter Queue** for poison messages + consumer-group rebalance on consumer crash.

> **[Block Diagram: 2 Marks]** — Draw three boxes labelled REST/Webhook/PubSub connecting Cloud A to Cloud B, with arrows showing request/response, push, and topic-subscribe directions respectively.

> **[Protocols and Recovery Stated: 2 Marks]**

#### Part (b) Solution (7 Marks)

> **[Stating Given Values: 1 Mark]**
> Given: $\lambda = 300\,\text{msg/s}$, $\mu = 1200\,\text{msg/s}$.

**Step 1 — Compute Utilization $\rho$:**

$$ \rho \;=\; \frac{\lambda}{\mu} \;=\; \frac{300}{1200} \;=\; 0.25 \quad \text{[2 Marks]} $$

**Step 2 — Compute Average Time in Queue $L_q$:**

$$ L_{q} \;=\; \frac{\rho^{2}}{1 - \rho} \cdot \frac{1}{\mu} $$

$$ L_{q} \;=\; \frac{(0.25)^{2}}{1 - 0.25} \cdot \frac{1}{1200} \;=\; \frac{0.0625}{0.75} \cdot 8.33 \times 10^{-4} $$

$$ L_{q} \;=\; 0.0833 \cdot 8.33 \times 10^{-4} \;\approx\; 6.94 \times 10^{-5}\,\text{s} \;\approx\; 69.4\,\mu\text{s} \quad \text{[2 Marks]} $$

**Step 3 — Compute Average Number in Queue $L$ (Little's Law):**

$$ L \;=\; \lambda \cdot L_{q} \;=\; 300 \times 6.94 \times 10^{-5} $$

$$ L \;\approx\; 0.0208\,\text{messages} \quad \text{[1 Mark]} $$

> **[Final Boxed Answer with Units: 1 Mark]**

$$ \boxed{\,\rho = 0.25,\quad L_q \approx 69.4\,\mu\text{s},\quad L \approx 0.0208\,\text{msg}\,} $$

---

### Question B (14 Marks — Alternative Choice)

**(a)** Discuss the **security challenges** in C2C integration. Explain **OAuth 2.0 Client Credentials Grant** and **HMAC webhook signing** as two mitigation techniques, with a step-by-step message flow for each. **(7 Marks)**

**(b)** Write a **Python code snippet** (using any standard library) that performs an **HTTP POST** to a partner cloud's `/v2/events` endpoint, including:
   - Bearer token retrieval via Client Credentials Grant.
   - HMAC-SHA256 signature generation for the payload.
   - Retry logic with exponential backoff (max 3 retries).
   **(7 Marks)**

*(Full model code is provided in Section 3.2 above; for the exam, the student is expected to reproduce the core skeleton with `requests`, `hmac`, `hashlib`, `time`, and `uuid`.)*

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls**
> - **Mistake 1:** Writing "$L_q$ in seconds" without performing the unit-aware arithmetic. *Always show $1/\mu$ with units.*
> - **Mistake 2:** Confusing **D2C** with **C2C** in definitions. *C2C NEVER involves an end-device as the initiator.*
> - **Mistake 3:** Forgetting the **Idempotency-Key** header in REST patterns. Examiners award 1 mark specifically for naming it.
> - **Mistake 4:** Using `==` for HMAC comparison. *Always use `hmac.compare_digest`.*
> - **Mistake 5:** Stating "Pub/Sub is faster than REST" without qualifiers. *Pub/Sub has lower *caller* latency but adds *broker* hop latency.*

---

## Topic Recap & Important Things to Remember

- **C2C Definition:** Server-to-server cloud integration; the *device* is never the initiator.
- **Three Patterns:** (1) **REST** — synchronous, (2) **Webhook** — asynchronous push, (3) **Pub/Sub** — broker-mediated fan-out.
- **Most-used Protocol Family:** HTTPS + JSON for REST, AMQP 1.0 / MQTT 5.0 for brokered, HMAC-SHA256 for webhook integrity.
- **Authentication Standard:** **OAuth 2.0 Client Credentials Grant** for machine-to-machine C2C.
- **Idempotency Header:** Always include `Idempotency-Key: <uuid-v4>` in non-GET REST calls.
- **Retry Discipline:** Exponential backoff with **full jitter**, cap retries (default **5**).
- **Webhook SLA:** Receiver must ACK in **≤ 5 seconds**; signature verified via **HMAC-SHA256**.
- **Queue Math (Little's Law):** $\rho = \lambda / \mu$, $L_q = \frac{\rho^{2}}{1-\rho} \cdot \frac{1}{\mu}$, $L = \lambda L_q$.
- **Status Code Wisdom:** `2xx` success, `4xx` client-fault (don't retry), `5xx` server-fault (retry), `429` rate-limited (retry with backoff).
- **JWT Structure:** `header.payload.signature`, three Base64URL segments separated by dots.
- **Failure Safety Net:** Every C2C pipeline **must** have a **Dead-Letter Queue (DLQ)**.
- **Format Interop:** Use a **schema registry** (Confluent SR, Apicurio) to prevent schema drift between JSON/Protobuf/Avro representations.
- **Geographic Concern:** C2C integrations crossing national borders must respect **data residency** laws (GDPR, DPDP Act 2023).
- **Killer Use Cases:** Smart manufacturing, connected vehicles, smart cities, federated healthcare, supply-chain traceability.
- **Key Vendor Pairings to Memorize:** AWS IoT ↔ Salesforce (REST), Azure IoT Hub ↔ Power BI (AMQP/Stream Analytics), GCP Pub/Sub ↔ BigQuery (native).

<!-- SECTION_5_END -->
