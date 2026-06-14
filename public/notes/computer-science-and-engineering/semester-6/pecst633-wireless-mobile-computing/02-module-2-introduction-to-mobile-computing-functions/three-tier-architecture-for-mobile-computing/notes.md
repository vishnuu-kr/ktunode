# Three-tier architecture for Mobile Computing

<!-- SECTION_1_START -->
# Three-Tier Architecture for Mobile Computing

> [!NOTE]
> **KTU 2024 Scheme — Module 2: Introduction to Mobile Computing Functions**
> **Course Code:** PECST633 | **Topic:** Three-tier architecture for Mobile Computing
> **Course Outcome Mapped:** CO2 — Understand the functional architecture and middleware design of mobile computing systems.

---

## 1.1 Formal Academic Definition

In the context of **Mobile Computing**, the **Three-Tier Architecture** is a well-established **client–server software architecture pattern** that logically separates the entire mobile application system into **three distinct, independent, and interconnected layers** — the *Presentation Tier* (mobile client), the *Application Tier* (middleware/business logic), and the *Data Tier* (database/persistent storage). Each tier runs on a separate processing environment (mobile device, application server, and database server respectively) and communicates with the adjacent tier through **well-defined interfaces** (typically **HTTP/HTTPS REST APIs** or **SOAP web services** over a wireless network).

> [!IMPORTANT]
> **KTU 2024 Syllabus Terminology (Verbatim):**
> A *three-tier architecture* in mobile computing is a **distributed application architecture** in which the **functional process logic**, **data access**, **computer data storage**, and **user interface** are developed and maintained as **independent modules** on separate platforms. This decoupling is the architectural foundation that enables **mobility, scalability, and security** in modern mobile services such as m-Banking, m-Commerce, and m-Health.

---

## 1.2 Conceptual Analogy — The Restaurant Model 🍽️

Imagine you walk into a busy restaurant:

| Restaurant Component | Mobile Architecture Equivalent | Function |
|---------------------|--------------------------------|----------|
| **You (the customer)** sitting at a table with a menu | **Mobile Client App** (Android/iOS) | Places an order, sees the food, pays the bill |
| **The Waiter** taking your order, conveying to kitchen, returning the food | **Application Server / Middleware** (e.g., Node.js, Java Spring) | Validates the request, applies business rules (no out-of-stock items, discounts), forwards to kitchen |
| **The Kitchen** storing ingredients and preparing dishes | **Database Server** (MySQL, MongoDB) | Stores the actual data, retrieves records, ensures consistency |

> **Key Insight:** The waiter **never enters the kitchen to cook**, and the kitchen **never directly serves the customer**. The middle layer (waiter / application server) acts as a **translator, validator, and gatekeeper**. This is *exactly* what a three-tier mobile architecture does — the mobile app **never directly queries the database**; it always goes through a secure, scalable middle layer.

---

## 1.3 Why is the Three-Tier Architecture Critical for Mobile Computing?

Mobile devices operate under **strict constraints** — limited battery, intermittent wireless connectivity, variable bandwidth, and exposure to untrusted networks. The three-tier model directly addresses these:

> [!IMPORTANT]
> **Core Engineering Motivations:**
> 1. **Resource Offloading** — Heavy computation (e.g., recommendation algorithms, transaction validation) is moved from the power-constrained mobile device to the server.
> 2. **Centralized Security** — Authentication tokens, encryption, and access control are enforced on the server, *not* the vulnerable mobile device.
> 3. **Cross-Platform Reach** — The same application server can serve Android, iOS, and web clients simultaneously.
> 4. **Seamless Scalability** — Each tier can be scaled **independently** (e.g., add more app servers during Black Friday traffic without touching the database or the client).
> 5. **Data Consistency** — A single authoritative database ensures all mobile users see **the same version of the truth**.

---

## 1.4 Standard Metrics & Communication Protocols

The following **standard protocols and constants** are typically observed between the tiers in a mobile deployment:

> [!IMPORTANT]
> **Standard Cross-Tier Protocols in Production Mobile Systems:**
> - **Client ↔ App Server:** **HTTPS** (HTTP over TLS 1.3), **REST/JSON**, **GraphQL**, **gRPC** — port **443** is the de-facto standard.
> - **App Server ↔ Database:** **TCP** with **ODBC/JDBC** drivers, **connection pooling** of size **10–50** per server instance is industry standard.
> - **Wireless Bearer:** **4G LTE / 5G NR / Wi-Fi 6** at the physical layer.
> - **Serialization Format:** **JSON** (≈**65%** of mobile APIs in 2024) followed by **Protocol Buffers** (binary, ≈**20%**).

---

## 1.5 Visual Anchor — Architectural Topology

> [!VISUALIZATION CONTROL]
> **Concept:** Three vertical functional silos stacked over a wireless channel, with data flowing upward and requests flowing downward.
> **GeoGebra / Desmos Input Equations:** (Conceptual block placement on a 2D plane)
> * Layer 1 (top): Rectangle centred at $y=3$ labelled "Mobile Client"
> * Layer 2 (middle): Rectangle centred at $y=1.5$ labelled "App Server"
> * Layer 3 (bottom): Rectangle centred at $y=0$ labelled "Database"
> * Vertical arrows: $y=2.25 \rightarrow y=2.0$ (Request, down) and $y=2.0 \rightarrow y=2.25$ (Response, up)
> **Visual Description:** A pyramid-like three-layer stack where the **mobile client** sits at the top, the **application server** in the middle, and the **database** at the base — connected by bidirectional arrows representing **request/response cycles** over a wireless network.
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Tier-by-Tier Functional Decomposition

### 🟦 TIER 1 — The Presentation Tier (Mobile Client)

The **Presentation Tier** is the layer the end-user physically interacts with. In a mobile context, it resides entirely (or mostly) on the **user's handheld device**.

**Primary Functions:**
- **Rendering the Graphical User Interface (GUI)** using native (Swift, Kotlin) or cross-platform (React Native, Flutter) frameworks.
- **Capturing user input** (taps, swipes, voice, biometrics) and packaging it into a structured request.
- **Local caching** of frequently accessed data using **SQLite**, **Realm**, or **SharedPreferences/Keychain** to tolerate network disconnections.
- **Session management** — storing JWT/OAuth tokens securely in the device keystore.
- **Push notification handling** via **Firebase Cloud Messaging (FCM)** or **Apple Push Notification Service (APNs)**.

**Constraints of the Presentation Tier (mobile-specific):**
- **CPU clock:** typically **1.8 – 3.2 GHz** (multi-core ARM).
- **RAM:** **4 GB – 12 GB** (shared with OS).
- **Battery capacity:** **3000 – 5000 mAh** (energy is a first-class design constraint).
- **Network:** **intermittent**, with **handover delays** of **40 – 100 ms** in cellular networks.

> [!NOTE]
> **Why not put business logic on the mobile device?**
> Because a malicious user can reverse-engineer the APK/IPA in minutes. Sensitive logic **must** live in the server tier.

---

### 🟨 TIER 2 — The Application Tier (Business Logic / Middleware)

This is the **brain** of the mobile system. It is hosted on one or more **application servers** (often containerized using **Docker** and orchestrated by **Kubernetes**) inside a data centre or cloud (AWS, Azure, GCP).

**Primary Functions:**
- **Authentication & Authorization** — verifying JWT tokens, OAuth 2.0 flows, MFA challenges.
- **Business rule enforcement** — e.g., *"a user cannot transfer more than ₹50,000/day"*.
- **Request orchestration** — aggregating data from multiple micro-services (catalog, payment, inventory).
- **Statelessness** — modern app servers are designed **stateless** so that any instance can handle any request, enabling horizontal scaling.
- **Caching layer** — using **Redis** or **Memcached** to offload the database for hot keys (TTL typically **300 – 3600 s**).
- **Logging, monitoring, and analytics** — feeding metrics into **Prometheus/Grafana** or **ELK Stack**.

**Key Design Principle:** *The mobile client should never trust itself, and the database should never trust anyone.* The application tier is the **trust boundary**.

---

### 🟥 TIER 3 — The Data Tier (Persistent Storage)

The **Data Tier** is responsible for the **durable, consistent storage and retrieval** of all application data.

**Primary Functions:**
- **Schema enforcement** (for relational DBs) or document validation (for NoSQL).
- **ACID transaction guarantees** — **A**tomicity, **C**onsistency, **I**solation, **D**urability.
- **Indexing, partitioning, and sharding** for query performance.
- **Backup, replication, and disaster recovery** — typically **3-2-1 rule** (3 copies, 2 media, 1 offsite).
- **Data encryption at rest** using **AES-256**.

**Common Choices in 2024 Mobile Back-Ends:**

| Database Type | Examples | Use Case |
|---------------|----------|----------|
| **Relational (SQL)** | PostgreSQL, MySQL, Oracle | Transactions, m-Banking, ERP |
| **Document (NoSQL)** | MongoDB, Couchbase | Catalogs, user profiles, m-Commerce |
| **Key-Value** | Redis, DynamoDB | Sessions, leaderboards, caching |
| **Graph** | Neo4j | Social networks, recommendation engines |
| **Time-Series** | InfluxDB, TimescaleDB | IoT telemetry, fitness trackers |

---

## 2.2 Cross-Tier Communication — The Contract

The tiers communicate using **standardized contracts** that are independent of implementation language:

> [!IMPORTANT]
> **The REST Contract Example (JSON over HTTPS):**
> **Request (Mobile → App Server):**
> ```json
> POST /api/v1/transfer HTTP/1.1
> Host: api.bank.example.com
> Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
> Content-Type: application/json
> { "from_account": "1234", "to_account": "5678", "amount": 5000 }
> ```
> **Response (App Server → Mobile):**
> ```json
> HTTP/1.1 200 OK
> { "txn_id": "TXN98231", "status": "SUCCESS", "balance": 45000 }
> ```

---

## 2.3 KTU Formula Sheet / Concept Cheat Sheet

| Parameter / Concept | Definition / Formula / Unit | Tier | Engineering Significance |
|---------------------|----------------------------|------|--------------------------|
| **$T_{\text{response}}$** | End-to-end response time, $T_{\text{response}} = T_{\text{client}} + T_{\text{net}} + T_{\text{app}} + T_{\text{db}}$ (ms) | All | Mobile UX budget ≈ **300 ms** |
| **$T_{\text{net}}$** | Wireless network latency = $T_{\text{propagation}} + T_{\text{transmission}} + T_{\text{queue}}$ (ms) | 1 ↔ 2 | LTE typical **50 ms**, 5G typical **10 ms** |
| **Throughput $R$** | $R = \frac{\text{Payload size}}{\text{RTT}} \times (1 - \text{Packet Loss})$ (bps) | 1 ↔ 2 | Affected by **SNR** and **MCS index** |
| **Cache Hit Ratio $H$** | $H = \frac{\text{Cache hits}}{\text{Total requests}} \times 100\%$ | Tier 1 or 2 | Target **H > 80%** to reduce DB load |
| **ACID Properties** | Atomicity, Consistency, Isolation, Durability | Tier 3 | Mandatory for financial mobile apps |
| **JWT Lifetime $L_{\text{token}}$** | Validity window of an access token (s) | Tier 2 | Typical **L = 900 s** (15 min) |
| **DB Connection Pool Size $N_p$** | Number of concurrent DB connections per app server | Tier 2 ↔ 3 | Typical **N_p = 20 – 50** |
| **Statelessness** | No client session stored on server | Tier 2 | Enables horizontal scaling |
| **TLS Handshake RTTs** | Number of round-trips to establish HTTPS | 1 ↔ 2 | TLS 1.3 ≈ **1 RTT**, TLS 1.2 ≈ **2 RTT** |
| **3-2-1 Backup Rule** | 3 copies, 2 media, 1 offsite | Tier 3 | Disaster recovery baseline |

---

## 2.4 Real-World Engineering Utility

> [!IMPORTANT]
> **Where is the Three-Tier Mobile Architecture Used in Production?**
> - **FinTech:** Google Pay, PhonePe, Paytm — Tier 1 = Android/iOS app, Tier 2 = Spring Boot micro-services, Tier 3 = PostgreSQL + Redis.
> - **Ride-Hailing:** Uber, Ola — Tier 2 orchestrates driver matching, surge pricing, and ETA prediction.
> - **OTT Streaming:** Netflix, Hotstar — Tier 1 streams H.265/AV1 video, Tier 2 handles DRM, Tier 3 stores user profiles.
> - **IoT & Smart Cities:** Mobile dashboards controlling sensors — Tier 2 ingests MQTT, Tier 3 stores in time-series DBs.
> - **m-Health:** Telemedicine apps — Tier 2 enforces HIPAA/GDPR, Tier 3 stores encrypted patient records.

---

## 2.5 Comparative Analysis — 2-Tier vs. 3-Tier

| Feature | 2-Tier (Client–Server) | **3-Tier (Mobile Architecture)** |
|---------|------------------------|----------------------------------|
| Layers | Client + Database only | Client + App Server + Database |
| Business Logic Location | On the client | **Centrally on the server** |
| Security | Low — client holds SQL access | **High — DB never exposed** |
| Scalability | Limited | **Independent per-tier scaling** |
| Mobile Suitability | Poor (assumes fat client + LAN) | **Excellent (thin client + WAN)** |
| Maintenance | Hard — logic duplicated | **Easy — one server-side update** |
| Concurrency | Low | **High (stateless servers)** |
| Example | Desktop accounting software | **WhatsApp, Instagram, GPay** |
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Implementation, Case Study & Symbolic Walk-Through

## 3.1 End-to-End Walk-Through — A Mobile Fund Transfer

> [!NOTE]
> **Scenario:** A user, *Ananya*, opens her bank's mobile app (Android) and transfers **₹5,000** from her savings account to a friend.
> We will trace this single transaction through **all three tiers**, step by step.

### Step 1 — Presentation Tier (Android App)

The Android client captures the request:

```kotlin
// Android (Kotlin) — Presentation Tier
data class TransferRequest(
    val fromAccount: String,
    val toAccount: String,
    val amount: Double,
    val remarks: String
)

suspend fun initiateTransfer(req: TransferRequest): TransferResponse {
    val token = SecureKeyStore.getJwt()           // Retrieved from Android Keystore
    return RetrofitClient.api
        .transfer("Bearer $token", req)            // HTTPS POST to Tier 2
}
```

**Key actions in Tier 1:**
1. Validate input fields locally (amount > 0, account numbers 9–18 digits).
2. Show a progress dialog (UX feedback during network call).
3. Send the request over **HTTPS** to `https://api.bank.example.com/api/v1/transfer`.

---

### Step 2 — Application Tier (Node.js / Spring Boot Middleware)

The application server receives the request and applies **business logic**:

```python
# Python (Flask) — Application Tier
from flask import Flask, request, jsonify
import jwt
from decimal import Decimal

app = Flask(__name__)
DB_PROXY_URL = "postgres://db.internal:5432/bankdb"

@app.route("/api/v1/transfer", methods=["POST"])
def transfer():
    # --- Step 2.1: Authenticate the JWT token ---
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        return jsonify({"error": "Missing token"}), 401
    token = auth_header.split(" ")[1]
    try:
        claims = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Token expired"}), 401
    user_id = claims["sub"]

    # --- Step 2.2: Validate business rules ---
    body = request.get_json()
    amount = Decimal(str(body["amount"]))
    if amount <= 0:
        return jsonify({"error": "Amount must be positive"}), 400
    if amount > Decimal("50000"):
        return jsonify({"error": "Daily limit exceeded"}), 403

    # --- Step 2.3: Forward to the database tier ---
    txn_id = db_proxy.execute_transfer(
        user_id=user_id,
        from_acc=body["from_account"],
        to_acc=body["to_account"],
        amount=amount
    )
    return jsonify({"txn_id": txn_id, "status": "SUCCESS"}), 200
```

**Key actions in Tier 2:**
1. **Authenticate** the JWT (verify signature, expiry, issuer).
2. **Authorize** the user (can Ananya debit this account?).
3. **Validate** business rules (daily limit, KYC status, fraud score).
4. **Orchestrate** the call to the database tier using a connection pool.

---

### Step 3 — Data Tier (PostgreSQL)

The database executes an **ACID transaction**:

```sql
-- PostgreSQL — Data Tier
BEGIN;

-- Row-level lock on the sender's row to prevent double-spending
SELECT balance FROM accounts
 WHERE account_no = '1234' AND user_id = 'ananya_001'
 FOR UPDATE;

-- Check sufficient funds
-- (assumed balance = 50,000)

-- Debit sender
UPDATE accounts
   SET balance = balance - 5000
 WHERE account_no = '1234';

-- Credit receiver
UPDATE accounts
   SET balance = balance + 5000
 WHERE account_no = '5678';

-- Insert audit trail
INSERT INTO transactions (txn_id, from_acc, to_acc, amount, ts)
VALUES ('TXN98231', '1234', '5678', 5000, NOW());

COMMIT;
```

**Key actions in Tier 3:**
1. Open a transaction (`BEGIN`).
2. **Lock the sender's row** (`FOR UPDATE`) to prevent race conditions.
3. Verify balance ≥ amount.
4. **Debit** sender, **credit** receiver.
5. **Audit-log** the transaction for regulatory compliance.
6. `COMMIT` — durability guaranteed.

---

### Step 4 — Response Bubbles Back Up

$$
\begin{aligned}
\text{Tier 3 returns:} \quad & \text{txn\_id} = \text{"TXN98231"} \\
\text{Tier 2 returns:} \quad & \text{HTTP 200, } \{ \text{txn\_id}, \text{status} = \text{SUCCESS} \} \\
\text{Tier 1 displays:} \quad & \text{"₹5,000 sent successfully to Anjali."} \\
\text{Total end-to-end time:} \quad & T_{\text{response}} = T_{\text{client}} + T_{\text{net}} + T_{\text{app}} + T_{\text{db}}
\end{aligned}
$$

> [!IMPORTANT]
> **KTU Valuation Insight:** When asked *"Explain the flow of a request in a three-tier mobile architecture,"* examiners expect the answer to be **layered, sequential, and explicit** — always state *which tier is doing what, in what order, and what protocol/contract is used between tiers*.

---

## 3.2 Symbolic Time-Budget Analysis (KTU High-Yield)

For a mobile UX to feel **instant**, the total budget is **$T_{\text{response}} \leq 300$ ms** (Google RAIL model). Let us compute the **theoretical upper bound** for each tier:

$$
\begin{aligned}
T_{\text{client}} &\le 50 \text{ ms} \quad \text{(UI render, JSON parse)} \\
T_{\text{net}}     &\le 100 \text{ ms} \quad \text{(4G LTE RTT in good signal)} \\
T_{\text{app}}     &\le 80 \text{ ms}  \quad \text{(JWT verify + business rules)} \\
T_{\text{db}}      &\le 70 \text{ ms}  \quad \text{(indexed UPDATE + COMMIT)} \\
\hline
T_{\text{response}} &\le 50 + 100 + 80 + 70 = 300 \text{ ms} \quad \checkmark
\end{aligned}
$$

**Interpretation:** If the **wireless network alone** consumes **100 ms**, the other two server-side tiers have only **150 ms combined**. This is why **edge computing** (placing Tier 2 closer to the user via CDNs/5G MEC) is critical for next-gen mobile apps.

---

## 3.3 Hardware / Tooling Reference (For Lab Viva)

| Tier | Typical Hardware / Tool | Configuration | Safety / Monitoring |
|------|-------------------------|---------------|---------------------|
| **Tier 1 — Mobile** | Android Emulator / Physical Pixel device | Android 14, 8 GB RAM, ARMv9 | Use HTTPS-only, enable certificate pinning |
| **Tier 2 — App Server** | Docker container on AWS EC2 t3.medium | 2 vCPU, 4 GB RAM, Ubuntu 22.04 | Auto-scaling group min=2, max=10 |
| **Tier 2 — Cache** | Redis 7.x on ElastiCache | cache.t3.medium, TTL 600 s | Memory eviction policy = `allkeys-lru` |
| **Tier 3 — Database** | PostgreSQL 16 on RDS db.r5.large | 2 vCPU, 16 GB RAM, 100 GB SSD | Daily automated backup, 7-day retention |
| **Network** | Cloudflare WAF + API Gateway | TLS 1.3, rate limit 100 req/min/user | DDoS protection enabled |
| **Monitoring** | Prometheus + Grafana dashboards | 15 s scrape interval | PagerDuty alert if p99 latency > 500 ms |

---

## 3.4 Comparative Mapping — Engineering Case Studies to the Three-Tier Model

| Mobile App | Tier 1 (Client Tech) | Tier 2 (App Server Tech) | Tier 3 (Database) | Key Architectural Pattern |
|------------|----------------------|--------------------------|-------------------|--------------------------|
| **WhatsApp** | Erlang on mobile + Java/RN | Custom XMPP on FreeBSD | HBase + MySQL | Message queue, end-to-end encryption |
| **Swiggy** | Android (Kotlin) + iOS (Swift) | Node.js micro-services | Cassandra + PostgreSQL | Event-driven order pipeline |
| **Google Pay** | Android (Kotlin) | Java Spring Boot on GCP | Spanner (globally distributed SQL) | UPI switch integration |
| **Instagram** | React Native + native modules | Django (Python) on AWS | PostgreSQL + Redis | Feed fan-out on write |
| **Uber** | Swift + Kotlin | Go / Node.js micro-services | Schemaless (MySQL) + Redis | Real-time driver matching |
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 High-Level Three-Tier Architecture (Mermaid)

```mermaid
flowchart TB
    subgraph T1["TIER 1 - PRESENTATION - MOBILE CLIENT"]
        A1[Android App]
        A2[iOS App]
        A3[Web Client PWA]
        A1 -. HTTPS REST .-> A1
        A2 -. HTTPS REST .-> A2
    end

    subgraph T2["TIER 2 - APPLICATION - MIDDLEWARE"]
        B1[API Gateway]
        B2[Auth Service JWT]
        B3[Business Logic Server]
        B4[Cache Layer Redis]
        B5[Push Notification Service]
    end

    subgraph T3["TIER 3 - DATA - PERSISTENT STORAGE"]
        C1[Primary Database PostgreSQL]
        C2[Analytics Data Warehouse]
        C3[Backup Storage S3]
    end

    subgraph NW["WIRELESS NETWORK"]
        N1[4G LTE 5G WiFi 6]
    end

    A1 --> N1
    A2 --> N1
    A3 --> N1
    N1 --> B1
    B1 --> B2
    B2 --> B3
    B3 --> B4
    B3 --> B5
    B3 --> C1
    C1 --> C2
    C1 --> C3

    classDef t1Style fill:#4A90E2,stroke:#1B4F8C,color:#FFFFFF,stroke-width:2px
    classDef t2Style fill:#F5A623,stroke:#B07518,color:#000000,stroke-width:2px
    classDef t3Style fill:#D0021B,stroke:#7A0114,color:#FFFFFF,stroke-width:2px
    classDef nwStyle fill:#7ED321,stroke:#4A8714,color:#000000,stroke-width:2px

    class A1,A2,A3 t1Style
    class B1,B2,B3,B4,B5 t2Style
    class C1,C2,C3 t3Style
    class N1 nwStyle
```

**Diagram Interpretation:**
- **Blue cluster (Top):** All mobile clients live in Tier 1.
- **Orange cluster (Middle):** Tier 2 contains five functional services — *API Gateway* (entry point), *Auth*, *Business Logic*, *Cache*, *Push*.
- **Red cluster (Bottom):** Tier 3 contains the primary DB, the analytics warehouse, and cold backups.
- **Green node:** The wireless network is shown as the **transport medium** between Tier 1 and Tier 2.

---

## 4.2 Request–Response Sequence (Mermaid Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User
    participant M as Mobile App (Tier 1)
    participant G as API Gateway (Tier 2)
    participant A as Auth Service (Tier 2)
    participant L as Business Logic (Tier 2)
    participant C as Redis Cache (Tier 2)
    participant D as PostgreSQL (Tier 3)

    U->>M: Taps Transfer button
    M->>G: HTTPS POST /api/v1/transfer + JWT
    G->>A: Verify JWT signature
    A-->>G: Token valid, user_id = ananya
    G->>L: Forward validated request
    L->>C: Check account balance in cache
    alt Cache MISS
        C-->>L: Not found
        L->>D: SELECT balance FOR UPDATE
        D-->>L: balance = 50000
    else Cache HIT
        C-->>L: balance = 50000
    end
    L->>D: BEGIN, UPDATE accounts, INSERT txn, COMMIT
    D-->>L: txn_id = TXN98231
    L->>C: Invalidate balance cache
    L-->>G: HTTP 200 {txn_id, status: SUCCESS}
    G-->>M: JSON response
    M-->>U: Show success toast with txn_id
```

---

## 4.3 Functional Architecture Block Diagram (Mermaid)

```mermaid
flowchart LR
    subgraph PRES["PRESENTATION TIER"]
        P1[UI Layer Activities Fragments]
        P2[Local Cache SQLite]
        P3[Network Module Retrofit OkHttp]
        P4[Security Module Keystore Biometric]
    end

    subgraph APP["APPLICATION TIER"]
        Q1[Load Balancer Nginx]
        Q2[Auth Filter JWT OAuth2]
        Q3[Controller Layer REST Endpoints]
        Q4[Service Layer Business Rules]
        Q5[Repository Layer DAO]
        Q6[Logging Audit ELK]
    end

    subgraph DATA["DATA TIER"]
        R1[Primary DB PostgreSQL]
        R2[Read Replica 1]
        R3[Read Replica 2]
        R4[Object Storage S3 Backups]
    end

    P1 --> P3
    P3 -. HTTPS .-> Q1
    P4 --> Q2
    Q1 --> Q2
    Q2 --> Q3
    Q3 --> Q4
    Q4 --> Q5
    Q5 -. TCP JDBC .-> R1
    R1 --> R2
    R1 --> R3
    R1 --> R4
    Q4 --> Q6

    classDef pres fill:#4A90E2,stroke:#1B4F8C,color:#FFFFFF
    classDef app fill:#F5A623,stroke:#B07518,color:#000000
    classDef data fill:#D0021B,stroke:#7A0114,color:#FFFFFF
    class P1,P2,P3,P4 pres
    class Q1,Q2,Q3,Q4,Q5,Q6 app
    class R1,R2,R3,R4 data
```

---

## 4.4 Deployment Topology (Mermaid)

```mermaid
flowchart TB
    subgraph CLIENT["MOBILE DEVICES"]
        DEV1[Smartphone Android iOS]
        DEV2[Tablet]
    end

    subgraph EDGE["EDGE LAYER 5G MEC"]
        CDN[CDN Cloudflare]
        LB[Load Balancer HAProxy]
    end

    subgraph CLOUD["CLOUD DATA CENTRE"]
        APPSRV1[App Server Instance 1]
        APPSRV2[App Server Instance 2]
        APPSRV3[App Server Instance 3]
        REDIS[Redis Cluster]
        DBMASTER[(PostgreSQL Master)]
        DBSLAVE1[(PostgreSQL Standby 1)]
        DBSLAVE2[(PostgreSQL Standby 2)]
    end

    DEV1 -->|HTTPS over 5G| CDN
    DEV2 -->|HTTPS over WiFi| CDN
    CDN --> LB
    LB --> APPSRV1
    LB --> APPSRV2
    LB --> APPSRV3
    APPSRV1 --> REDIS
    APPSRV2 --> REDIS
    APPSRV3 --> REDIS
    APPSRV1 --> DBMASTER
    APPSRV2 --> DBMASTER
    APPSRV3 --> DBMASTER
    DBMASTER --> DBSLAVE1
    DBMASTER --> DBSLAVE2

    classDef clientStyle fill:#4A90E2,stroke:#1B4F8C,color:#FFFFFF
    classDef edgeStyle fill:#9013FE,stroke:#4A0679,color:#FFFFFF
    classDef cloudStyle fill:#F5A623,stroke:#B07518,color:#000000
    classDef dbStyle fill:#D0021B,stroke:#7A0114,color:#FFFFFF
    class DEV1,DEV2 clientStyle
    class CDN,LB edgeStyle
    class APPSRV1,APPSRV2,APPSRV3,REDIS cloudStyle
    class DBMASTER,DBSLAVE1,DBSLAVE2 dbStyle
```

> [!NOTE]
> **Reading Guide for the Diagrams:**
> - **Direction of arrows** = direction of *request*. Responses flow back along the same path.
> - **Dotted arrows** in the sequence diagram represent *cache lookups*.
> - **Subgraphs** are colour-coded: **blue** = presentation, **orange** = application, **red** = data, **purple** = edge/transport.
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## 5.1 Part A — Short Answer Questions (3 Marks Each)

> **Cognitive Levels:** Remember / Understand
> **Time:** 6 minutes per question | **Total:** 2 × 3 = 6 Marks

### Question 1 [KTU University Exam — July 2024]
**List and briefly explain the three tiers of mobile computing architecture.**

**Model Answer (3 Marks):**
The three-tier architecture of mobile computing consists of:
1. **Presentation Tier (1 Mark):** This is the mobile client tier (Android/iOS app) that provides the user interface, captures user input, and renders data. It runs on the user's handheld device.
2. **Application Tier (1 Mark):** This is the middle tier that hosts the business logic, authentication, validation, and orchestration. It runs on application servers in the cloud/data centre.
3. **Data Tier (1 Mark):** This is the back-end tier that stores and retrieves persistent data using RDBMS or NoSQL databases with ACID guarantees.

---

### Question 2 [KTU University Exam — Dec 2023]
**Differentiate between a 2-tier and a 3-tier architecture with one example of each.**

**Model Answer (3 Marks):**
| Aspect | 2-Tier | 3-Tier |
|--------|--------|--------|
| **Layers** | Client + Database | Client + App Server + Database |
| **Business logic** | On client (fat client) | Centrally on app server |
| **Example (1 Mark)** | Traditional desktop accounting software (e.g., Tally accessing local MySQL) | Modern mobile banking app (GPay: Android → Spring Boot → PostgreSQL) |
| **Mobile suitability** | Poor | Excellent |

> [!WARNING]
> **KTU Examiner's Pitfall Callout:** Students often *describe* 2-tier and 3-tier but forget to **state which tier hosts the business logic**. Examiners specifically award a mark for identifying that **business logic moves from the client (2-tier) to the server (3-tier)**.

---

## 5.2 Part B — Long Answer Questions (14 Marks Each) — Module Internal Choice

> **Total Marks:** 14 (Part a: 7 Marks + Part b: 7 Marks)
> **Time:** 25 – 30 minutes per question
> **Cognitive Levels:** Understand (part a) → Apply / Analyze (part b)

---

### 📘 Question A (Choice 1) [KTU University Exam — July 2024]

**(a) [7 Marks] Explain in detail the three-tier architecture of mobile computing with a neat diagram. Describe the functions of each tier and the communication protocols used between them.**

#### Model Solution:

**1. Introduction (1 Mark):**
The three-tier architecture is a distributed application model that separates the **presentation**, **application (business logic)**, and **data management** layers into three independent logical and physical tiers. In mobile computing, this separation is essential because the mobile device is resource-constrained and operates over unreliable wireless networks.

**2. Tier 1 — Presentation Tier (2 Marks):**
- Runs on the mobile device (Android/iOS).
- Functions: rendering UI, capturing input, local caching (SQLite), secure token storage.
- Technologies: **Kotlin, Swift, React Native, Flutter**.
- It **only** communicates with Tier 2, never directly with Tier 3.

**3. Tier 2 — Application Tier (2 Marks):**
- Runs on cloud servers (AWS EC2, Azure VMs) often as Docker containers.
- Functions: authentication (JWT, OAuth 2.0), authorization, business rule enforcement, request orchestration, caching (Redis), logging.
- Stateless design enables horizontal scaling.
- Technologies: **Node.js, Spring Boot, Django, .NET Core**.

**4. Tier 3 — Data Tier (1 Mark):**
- Runs on dedicated DB servers (RDS, self-hosted clusters).
- Functions: persistent storage, ACID transactions, indexing, replication, backup.
- Technologies: **PostgreSQL, MySQL, MongoDB, Cassandra**.

**5. Inter-Tier Communication Protocols (1 Mark):**
- Tier 1 ↔ Tier 2: **HTTPS / REST-JSON / GraphQL** over **4G/5G/Wi-Fi**.
- Tier 2 ↔ Tier 3: **TCP / ODBC / JDBC** with connection pooling.

**6. Diagram (Mandatory — sample mermaid if drawn on paper):**
```mermaid
flowchart TB
    P[Mobile Client Tier 1] -->|HTTPS JSON| A[Application Server Tier 2]
    A -->|SQL TCP| D[Database Server Tier 3]
```

> **[Valuation Key:]** Diagram with 3 labelled boxes and arrows: 1 Mark. Each tier's functions: 2 Marks. Protocols: 1 Mark. Introduction + conclusion: 1 Mark.

---

**(b) [7 Marks] Consider a mobile cab-booking application similar to Uber. Trace the complete flow of a "book a ride" request from the moment the user taps the button on the mobile app to the moment the driver is assigned, identifying which tier handles each step. Also discuss why this architecture is preferred over a 2-tier model for such an application.**

#### Model Solution:

**1. Request Flow (4 Marks):**

| Step | Tier | Action |
|------|------|--------|
| 1 | Tier 1 | User taps "Book Ride". Android app validates pickup/drop coordinates locally. |
| 2 | Tier 1 → Tier 2 | HTTPS POST to `/api/v1/ride/request` with JWT token, lat/long, ride type. |
| 3 | Tier 2 (Gateway) | API Gateway authenticates JWT, rate-limits, routes to Ride Service. |
| 4 | Tier 2 (Auth) | Verifies user session, KYC status, payment method validity. |
| 5 | Tier 2 (Business Logic) | Runs driver-matching algorithm (nearest available driver, ETA, surge pricing). |
| 6 | Tier 2 → Tier 3 | Writes `ride_request` row to PostgreSQL with status = `PENDING`. |
| 7 | Tier 3 | Driver allocation row inserted, geospatial index (PostGIS) queried. |
| 8 | Tier 2 → Push Service | FCM/APNs sends push notification to the matched driver. |
| 9 | Tier 1 (Driver app) | Driver accepts → Tier 2 → Tier 3 updates status to `ACCEPTED`. |
| 10 | Tier 1 (User app) | Polls/long-polls and displays "Driver arriving in 4 min". |

**2. Why 3-Tier > 2-Tier (3 Marks):**
- **Security:** Driver-matching algorithm and pricing logic must not reside on the (hackable) client. The 2-tier model would expose this.
- **Real-time data consistency:** All drivers and users must see the *same* available cab pool — a single authoritative Tier 3 DB ensures this. In a 2-tier model, each mobile client would need its own DB, leading to inconsistency.
- **Scalability:** On New Year's Eve, the App Server tier can auto-scale from 3 to 50 instances independently of the DB. A 2-tier system cannot scale this way.
- **Cross-platform support:** The same Tier 2 serves Android, iOS, and even a web portal.

> [!WARNING]
> **KTU Examiner's Pitfall Callout — Common Mark Losers:**
> 1. **Do NOT** write vague statements like *"the request goes to the server and then the database"*. You **must** name the **specific sub-services** (API Gateway, Auth Service, Business Logic, Database) and the **protocol** between them (HTTPS, JDBC).
> 2. **Do NOT** skip the **response path**. Examiners expect to see that Tier 3 returns data → Tier 2 enriches it → Tier 1 displays it.
> 3. **Do NOT** forget to justify *why* 3-tier is preferred — merely listing features is not enough; you must link features to **specific engineering constraints** of the cab-booking app (real-time, security, scale).

---

### 📗 Question B (Choice 2) [KTU University Exam — Dec 2023]

**(a) [7 Marks] With the help of a real-world mobile application example, explain how the three-tier architecture enables scalability, security, and maintainability. Include a neat block diagram in your answer.**

#### Model Solution:

**Example:** **WhatsApp messenger** (popular in KTU exam answer scripts).

**1. Scalability (2 Marks):**
- Tier 1 (mobile apps) is replicated to billions of devices automatically.
- Tier 2 (Erlang-based messaging servers) is **horizontally scaled** by adding more nodes behind a load balancer — no client update needed.
- Tier 3 (HBase + MySQL) uses **sharding** by user ID, so a billion-user system is partitioned across hundreds of DB nodes.
- Each tier scales **independently** — this is impossible in 2-tier.

**2. Security (2 Marks):**
- The **end-to-end encryption** keys never leave the device (Tier 1) — the server (Tier 2) only sees ciphertext.
- Tier 2 enforces phone-number verification, rate-limiting, and spam detection centrally.
- Tier 3 stores encrypted message backups; even DB admins cannot read messages.
- A 2-tier model would force the client to share encryption keys with the DB, breaking E2E security.

**3. Maintainability (2 Marks):**
- When WhatsApp introduced **multi-device support** (2021), only Tier 2 changed — the mobile app (Tier 1) and the DB schema (Tier 3) remained largely untouched.
- Bug fixes and feature rollouts happen **server-side** without forcing users to update their app, because the app is a thin client.
- A 2-tier model would require a simultaneous update of every installed app on every user's phone.

**4. Block Diagram (1 Mark):**
```mermaid
flowchart TB
    M1[Android App Tier 1] -->|E2EE HTTPS| API[API Gateway Tier 2]
    M2[iOS App Tier 1] -->|E2EE HTTPS| API
    API --> AUTH[Auth Service Tier 2]
    API --> MSG[Messaging Service Erlang Tier 2]
    AUTH --> DB1[(User DB MySQL Tier 3)]
    MSG --> DB2[(Message Store HBase Tier 3)]
    DB1 --> BK[S3 Backup Tier 3]
    DB2 --> BK
```

> **[Valuation Key:]** Real-world example with name: 1 Mark. Scalability discussion: 2 Marks. Security: 2 Marks. Maintainability: 2 Marks. Diagram: 1 Mark (deduct if unlabeled arrows).

---

**(b) [7 Marks] Compare the response time budgets of a mobile app that uses (i) a 2-tier architecture (direct client-to-DB connection over wireless) versus (ii) a 3-tier architecture (with an in-memory cache layer in the application tier). Compute the theoretical latency for a single read request in both cases and justify why the 3-tier model is faster in real production deployments despite the extra network hop.**

#### Model Solution:

**Assumptions (1 Mark):**
- Wireless network RTT: $T_{\text{net}} = 100$ ms
- Client processing: $T_{\text{client}} = 20$ ms
- Application server processing (no cache): $T_{\text{app}} = 30$ ms
- Application server processing (with Redis cache HIT): $T_{\text{app}} = 5$ ms
- Database query (indexed): $T_{\text{db}} = 40$ ms
- Cache lookup (Redis in-memory): $T_{\text{cache}} = 2$ ms

**Case (i): 2-Tier — Client → Database directly (3 Marks):**

$$
T_{2\text{-tier}} = T_{\text{client}} + T_{\text{net}} + T_{\text{db}} = 20 + 100 + 40 = 160 \text{ ms}
$$

This assumes the SQL driver is bundled in the mobile app (which is a known security anti-pattern but technically possible).

**Case (ii): 3-Tier — Client → App Server → Cache HIT → Response (3 Marks):**

$$
T_{3\text{-tier, hit}} = T_{\text{client}} + T_{\text{net}} + T_{\text{app}} + T_{\text{cache}} = 20 + 100 + 5 + 2 = 127 \text{ ms}
$$

For a **cache MISS** in 3-tier:
$$
T_{3\text{-tier, miss}} = T_{\text{client}} + T_{\text{net}} + T_{\text{app}} + T_{\text{db}} = 20 + 100 + 30 + 40 = 190 \text{ ms}
$$

**Combined expected latency with 80% cache hit ratio (1 Mark):**
$$
T_{3\text{-tier, avg}} = 0.8 \times 127 + 0.2 \times 190 = 101.6 + 38 = 139.6 \text{ ms}
$$

**Justification (2 Marks):**
- With an **80% cache hit ratio**, the 3-tier model is **faster on average (139.6 ms < 160 ms)** than the 2-tier model.
- Moreover, the 3-tier model **offloads the database** — a 2-tier model with 10,000 concurrent mobile clients would melt the DB with **10,000 direct connections**, while the 3-tier app server pool (say 50 connections) acts as a **multiplexer**.
- The 3-tier model also enables **edge caching**, **CDN integration**, and **horizontal scaling** that 2-tier cannot match.

> [!WARNING]
> **KTU Examiner's Pitfall Callout:**
> 1. Do **not** forget to convert hit-ratio into a weighted average — a common mistake is to compare only the cache-HIT scenario, which inflates the advantage unrealistically.
> 2. Do **not** use **|x|** in your answer table (use $\vert x \vert$ in LaTeX or write *"absolute value of x"* in prose) — markdown pipe characters break table rendering.
> 3. Always **state the assumptions** before plugging in numbers; otherwise, the examiner deducts 1 mark for "unsupported calculation."

---

## 5.3 Topic Recap & Important Things to Remember ✨

> [!IMPORTANT]
> **🚀 Rapid Revision Checklist — Three-Tier Mobile Architecture**

- ✅ **Three tiers = Presentation + Application + Data.** Memorize this triumvirate — it appears in **every** KTU question on this module.
- ✅ **Tier 1 (Presentation) = Mobile client** (Android/iOS app) — handles UI, input, local caching, secure storage.
- ✅ **Tier 2 (Application) = Middleware/App server** — handles auth, business logic, orchestration, caching. This is the **brain**.
- ✅ **Tier 3 (Data) = Database server** — handles persistence, ACID transactions, indexing, replication.
- ✅ **Communication Tier 1 ↔ Tier 2:** **HTTPS** with **REST/JSON** (or GraphQL, gRPC). Port **443**.
- ✅ **Communication Tier 2 ↔ Tier 3:** **TCP** with **JDBC/ODBC** drivers and **connection pooling** (size **20–50**).
- ✅ **Mobile UX budget:** total response time **$T_{\text{response}} \le 300$ ms** (Google RAIL model).
- ✅ **Stateless application tier** enables horizontal scaling — state lives in Tier 3 or in Redis.
- ✅ **Security rule:** mobile client **never** holds DB credentials; app server is the **trust boundary**.
- ✅ **3-tier advantages to memorize:** scalability, security, maintainability, cross-platform support, fault isolation.
- ✅ **3-tier disadvantage to mention if asked:** added latency, more components to monitor, higher infrastructure cost.
- ✅ **Cache hit ratio $H$** should target **$H > 80\%$** for production mobile apps.
- ✅ **JWT token lifetime $L \approx 900$ s (15 min)** is the industry-standard for mobile sessions.
- ✅ **ACID properties** (Atomicity, Consistency, Isolation, Durability) are mandatory for Tier 3 in **financial** mobile apps.
- ✅ **Real-world examples to quote:** Google Pay, WhatsApp, Uber, Swiggy, Instagram, Netflix.
- ✅ **2-tier vs 3-tier:** In 2-tier, business logic lives on the (fat) client; in 3-tier, it lives centrally on the server. This single fact is worth **3 marks** in most KTU questions.
- ✅ **Diagram must always include:** three labelled boxes (or subgraphs) + arrows showing **bidirectional** request/response + protocol labels (HTTPS, JDBC).
- ✅ **Common exam phrases that earn marks:** *"trust boundary"*, *"stateless tier"*, *"horizontal scaling"*, *"ACID transaction"*, *"3-2-1 backup rule"*, *"stateless JWT auth"*, *"connection pooling"*.
- ✅ **For numerical problems:** always show the formula $T_{\text{response}} = T_{\text{client}} + T_{\text{net}} + T_{\text{app}} + T_{\text{db}}$ and plug in **stated assumptions**.
- ✅ **Don't forget:** the **wireless network** is *itself* a tier-like component — mention it explicitly when asked about "end-to-end flow."

> **Final KTU Tip:** In a 14-mark question, the examiner allocates roughly **1 mark for the diagram**, **2 marks for introduction/definition**, **6 marks for tier-by-tier explanation with examples**, **2 marks for protocols**, **2 marks for advantages/comparison**, and **1 mark for neat presentation + conclusion**. Structure your answer to match this implicit rubric.
<!-- SECTION_5_END -->
