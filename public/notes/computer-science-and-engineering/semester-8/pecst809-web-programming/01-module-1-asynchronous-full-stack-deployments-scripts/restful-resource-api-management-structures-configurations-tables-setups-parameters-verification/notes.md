# RESTful resource API management structures configurations tables setups parameters verification

<!-- SECTION_1_START -->
# RESTful Resource API Management: A Foundational Overview

## 1.1 Formal Academic Definition

In the context of **WEB PROGRAMMING (PECST809)** and modern full-stack engineering, **RESTful Resource API Management** refers to the architectural discipline of designing, configuring, exposing, and verifying stateless network endpoints that operate on identifiable digital **resources** (typically persisted in relational or document tables) using the conventions of **REpresentational State Transfer (REST)**. A resource is any addressable entity (e.g., a user, product, or sensor reading) that is uniquely identified by a **Uniform Resource Identifier (URI)** and manipulated through standardized **HTTP verbs** consumed asynchronously by a client.

> [!IMPORTANT]
> **KTU 2024 Syllabus Anchor (Module 1 - Asynchronous Full-Stack Deployments):** REST is not a protocol or a library — it is an *architectural style* defined by **Roy Fielding (2000)** that constrains how distributed hypermedia systems behave. The client and server communicate exclusively through a uniform contract of **resources, representations, and HTTP semantics**.

## 1.2 Conceptual Analogy — The Smart Library

Imagine a fully automated library where:

- Every book is given a unique catalog number (the **Resource URI**, e.g., `/api/books/42`).
- You never walk into the storage room. You fill out a request slip at the front desk (the **Client Application**), specifying *what* you want and *how* (the **HTTP Method**: GET, POST, PUT, DELETE).
- The librarian retrieves the book and hands you a **photocopy** with a status stamp (the **HTTP Response** with **Status Code** and **JSON Representation**).
- The librarian forgets your face the moment you leave — the next request must be self-contained (this is **Statelessness**).

> [!NOTE]
> The photocopy (JSON/XML) is the *representation* of the resource, not the resource itself. The actual book lives in the back room (the **Database Table**). If the book changes, your next photocopy will reflect the new state — the representation *transfers* the state, hence **REpresentational State Transfer**.

## 1.3 The Three Pillars of RESTful Resource Management

| Pillar | Meaning | KTU Exam Cue |
|---|---|---|
| **Resource** | A noun, not a verb. Anything that can be named. | "Identify the resource URI" |
| **Representation** | The snapshot format (JSON, XML) sent over the wire. | "Design the JSON schema" |
| **Uniform Interface** | Fixed, standardized verbs: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`. | "Map CRUD to HTTP verbs" |

> [!VISUALIZATION CONTROL]
> **Concept:** REST Resource Addressing
> **GeoGebra / Desmos Input Equations:**
> * `x = API_BASE_URL`  (origin constant)
> * `y_m = /api/{resource}/{id}?{query}`  (RESTful address line)
> **Visual Description:** Plot the origin $(0,0)$ as the *Base URL*, then draw rays labeled `/users`, `/users/42`, `/users/42/orders`. Each branch is a unique **endpoint**; each leaf is an **addressable resource**. Notice how the path grows *hierarchically*, mirroring the parent-child foreign-key relationships inside the database tables.

## 1.4 Why Asynchronous? — The Blocking Problem

Traditional (synchronous) `XMLHttpRequest` and form-submission code causes the browser tab to **freeze** while waiting for the server. Asynchronous deployments (using `fetch`, `async/await`, `Promise`) allow the JavaScript **Event Loop** to keep rendering the UI while the I/O request is in flight. This is the cornerstone of every modern Single Page Application (SPA) like React, Angular, or Vue.

> [!TIP]
> **Memorize this constant for KTU exams:** The default **Asynchronous** behavior of `fetch()` returns a `Promise` that resolves to a `Response` object — the body must be *explicitly* extracted using `.json()`, `.text()`, or `.blob()`.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Six REST Architectural Constraints

Fielding's dissertation mandates that a "RESTful" service must satisfy these six constraints. KTU examiners love to ask *"Is this service truly RESTful? Justify."* — you must answer using these.

1. **Client–Server Separation** — UI concerns are decoupled from data storage.
2. **Statelessness** — Every request carries *all* information needed; the server stores *no* session.
3. **Cacheability** — Responses must implicitly or explicitly label themselves as cacheable.
4. **Uniform Interface** — Resources are identified, manipulated via representations, self-descriptive messages, and **HATEOAS** (hypermedia as the engine of application state).
5. **Layered System** — Client cannot tell whether it is talking to the origin server or a proxy.
6. **Code-On-Demand (Optional)** — Server can temporarily extend client functionality by transferring executable code (e.g., JavaScript).

## 2.2 HTTP Verb → CRUD → Database Action Mapping

This is the **single most tested table** in any REST module. Memorize it verbatim.

| HTTP Verb | CRUD Action | SQL Equivalent | Safe? | Idempotent? | Typical URI |
|---|---|---|---|---|---|
| `GET` | **R**ead | `SELECT` | ✅ Yes | ✅ Yes | `/api/users` or `/api/users/1` |
| `POST` | **C**reate | `INSERT` | ❌ No | ❌ No | `/api/users` |
| `PUT` | **U**pdate (Full) | `UPDATE ... WHERE id` | ❌ No | ✅ Yes | `/api/users/1` |
| `PATCH` | **U**pdate (Partial) | `UPDATE col ... WHERE id` | ❌ No | ❌ No | `/api/users/1` |
| `DELETE` | **D**elete | `DELETE FROM ... WHERE id` | ❌ No | ✅ Yes | `/api/users/1` |

> [!IMPORTANT]
> **Idempotency Trap:** Sending the same `DELETE /api/users/1` five times produces the *same final state* (user is gone). Sending `POST /api/users` five times creates *five users*. This distinction is a 3-mark favorite in KTU valuation.

## 2.3 HTTP Status Code Categories — The Verification Language

A correct REST API **verifies** success or failure using standardized numeric codes. Never return HTTP `200` for a failed operation — it confuses every client framework.

| Range | Category | Meaning | Common Codes |
|---|---|---|---|
| **1xx** | Informational | Request received, continuing process. | `100 Continue` |
| **2xx** | Success | The action was successfully received, understood, and accepted. | `200 OK`, `201 Created`, `204 No Content` |
| **3xx** | Redirection | Further action needed to fulfill the request. | `301 Moved Permanently`, `304 Not Modified` |
| **4xx** | Client Error | The request contains bad syntax or cannot be fulfilled. | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `409 Conflict`, `422 Unprocessable Entity` |
| **5xx** | Server Error | The server failed to fulfill an apparently valid request. | `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable` |

## 2.4 Anatomy of an HTTP Request — Parameter Verification Checklist

A complete RESTful resource configuration requires verification of **four parameter surfaces**:

| Parameter Surface | Location | Purpose | KTU Example |
|---|---|---|---|
| **Path Parameter** | URI segment, e.g., `/users/{id}` | Identifies a *specific* resource. | `GET /api/users/42` |
| **Query Parameter** | After `?`, e.g., `?limit=10&page=2` | Filters, sorts, paginates a *collection*. | `GET /api/users?role=admin` |
| **Request Header** | `Authorization`, `Content-Type`, `Accept` | Metadata about the request. | `Authorization: Bearer eyJ...` |
| **Request Body** | JSON payload | Carries the *representation* of the new/updated resource. | `{ "name": "Alice", "email": "a@x.com" }` |

## 2.5 The Asynchronous JavaScript Model — Event Loop

The single-threaded JavaScript runtime uses an **Event Loop** with three components: the **Call Stack**, the **Web APIs / C++ Backend**, and the **Task Queue (Callback Queue)** plus the **Microtask Queue**.

- Synchronous code executes on the **Call Stack** line by line.
- Asynchronous I/O (like `fetch`, `setTimeout`, `db.query`) is offloaded to the Web API.
- When the I/O completes, its callback is queued.
- The **Microtask Queue** (Promises) is drained *before* the Task Queue (timers, I/O) on every loop tick.

> [!TIP]
> **KTU Mnemonic — "Micro Before Macro":** Promise `.then()` and `await` continuation callbacks run on the **microtask queue**, which has higher priority than `setTimeout` callbacks. This is why `await` feels instant.

## 2.6 KTU High-Yield Formula & Configuration Cheat Sheet

| Symbol / Concept | Definition / Configuration | Units / Default |
|---|---|---|
| $\mathcal{R}$ | A REST Resource (a noun). | URI string |
| $\mathcal{V}$ | An HTTP Verb (the method). | `GET`, `POST`, `PUT`, `PATCH`, `DELETE` |
| $\mathcal{S}$ | HTTP Status Code returned. | $2xx$–$5xx$ |
| $T_{\text{latency}}$ | Round-trip time, client → server → client. | **milliseconds (ms)** |
| $\lambda$ | Request rate the API can sustain. | **requests / second (RPS)** |
| `Content-Type` | MIME type of the request body. | `application/json` (default for modern APIs) |
| `Accept` | MIME types the client can parse. | `application/json` |
| `Idempotency-Key` | Optional header to make `POST` safe to retry. | UUID v4 string |
| `Cache-Control: max-age=n` | Time the response may be cached. | **seconds (s)** |
| CORS `Origin` | Allowed cross-origin domain. | `*` or specific hostname |
| `Content-Length` | Size of the body in bytes. | **bytes (B)** |
| `X-RateLimit-Remaining` | Quota tokens left for the client. | integer |

> [!NOTE]
> The vertical bars in mathematical expressions (e.g., $\vert x \vert$) are written using `\vert` to prevent breakage of the KTU-Premier-Engine markdown table parser. This is a grading-safety protocol.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Configurations & Code Implementation

## 3.1 Resource Modeling — Designing the Table Configuration

Before writing a single line of API code, the **resource schema** must be defined. We will model a `users` table as our reference resource.

### 3.1.1 Database Table Setup (SQL — `users`)

```sql
-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS ktu_rest_demo
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE ktu_rest_demo;

-- Step 2: Create the resource table
CREATE TABLE IF NOT EXISTS users (
  id           INT UNSIGNED      NOT NULL AUTO_INCREMENT,
  full_name    VARCHAR(120)      NOT NULL,
  email        VARCHAR(180)      NOT NULL UNIQUE,
  role         ENUM('admin','editor','viewer') NOT NULL DEFAULT 'viewer',
  is_active    TINYINT(1)        NOT NULL DEFAULT 1,
  created_at   TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP
                                  ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_email (email),
  INDEX idx_role_active (role, is_active)
) ENGINE=InnoDB;

-- Step 3: Seed verification data
INSERT INTO users (full_name, email, role) VALUES
  ('Aparna Menon',  'aparna@ktu.in',  'admin'),
  ('Rahul Pillai',  'rahul@ktu.in',   'editor'),
  ('Sneha Iyer',    'sneha@ktu.in',   'viewer');
```

> [!NOTE]
> **Valuation Insight (1 Mark):** Notice the `UNIQUE` constraint on `email` — this lets the database itself enforce business rules, preventing duplicate `POST` operations from silently corrupting data. The composite index `idx_role_active` speeds up filtered `GET` queries like `/api/users?role=admin&is_active=1`.

## 3.2 Server-Side REST Controller — Node.js + Express

```javascript
// server.js  —  A complete, production-shaped REST resource controller.
// Run with:   node server.js   (ensure npm i express mysql2 cors)
const express    = require('express');
const cors       = require('cors');
const mysql      = require('mysql2/promise');

const PORT       = process.env.PORT  || 3000;
const DB_CONFIG  = {
  host: 'localhost', port: 3306,
  user: 'root',     password: 'root',
  database: 'ktu_rest_demo', waitForConnections: true, connectionLimit: 10
};

const app  = express();
app.use(cors());                    // Enable CORS for the SPA client
app.use(express.json());            // Parse application/json bodies
app.use(express.urlencoded({ extended: true }));

// ----------------------------------------------------------------------
// Helper: Build a standardized verification envelope around every payload
// ----------------------------------------------------------------------
function envelope(status, data, message) {
  return {
    success : status >= 200 && status < 300,
    status  : status,
    message : message || (status < 300 ? 'OK' : 'Error'),
    payload : data
  };
}

// ----------------------------------------------------------------------
// CREATE  (POST /api/users)         —  Inserts a new user resource
// ----------------------------------------------------------------------
app.post('/api/users', async (req, res) => {
  try {
    const { full_name, email, role } = req.body;
    if (!full_name || !email) {
      return res.status(400).json(envelope(400, null, 'full_name and email are required'));
    }
    const conn = await mysql.createConnection(DB_CONFIG);
    const [r]  = await conn.execute(
      'INSERT INTO users (full_name, email, role) VALUES (?,?,?)',
      [full_name, email, role || 'viewer']
    );
    await conn.end();
    return res.status(201).json(envelope(201, { id: r.insertId }, 'User created'));
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json(envelope(409, null, 'Email already exists'));
    }
    return res.status(500).json(envelope(500, null, err.message));
  }
});

// ----------------------------------------------------------------------
// READ COLLECTION  (GET /api/users) — Lists users with query filters
// ----------------------------------------------------------------------
app.get('/api/users', async (req, res) => {
  try {
    const { role, is_active, page = 1, limit = 10 } = req.query;
    const where = [];
    const args  = [];
    if (role)      { where.push('role = ?');      args.push(role); }
    if (is_active !== undefined) { where.push('is_active = ?'); args.push(is_active ? 1 : 0); }

    const offset  = (Math.max(1, parseInt(page)) - 1) * parseInt(limit);
    const sql     = `SELECT id, full_name, email, role, is_active, created_at
                     FROM users
                     ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
                     ORDER BY id DESC
                     LIMIT ? OFFSET ?`;
    args.push(parseInt(limit), offset);

    const conn = await mysql.createConnection(DB_CONFIG);
    const [rows] = await conn.execute(sql, args);
    await conn.end();
    return res.status(200).json(envelope(200, { count: rows.length, rows }, 'Users fetched'));
  } catch (err) {
    return res.status(500).json(envelope(500, null, err.message));
  }
});

// ----------------------------------------------------------------------
// READ SINGLE  (GET /api/users/:id) — Path parameter verification
// ----------------------------------------------------------------------
app.get('/api/users/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json(envelope(400, null, 'Invalid id'));

    const conn = await mysql.createConnection(DB_CONFIG);
    const [rows] = await conn.execute('SELECT * FROM users WHERE id = ?', [id]);
    await conn.end();
    if (rows.length === 0) return res.status(404).json(envelope(404, null, 'User not found'));
    return res.status(200).json(envelope(200, rows[0], 'User fetched'));
  } catch (err) {
    return res.status(500).json(envelope(500, null, err.message));
  }
});

// ----------------------------------------------------------------------
// UPDATE FULL  (PUT /api/users/:id) — Idempotent full update
// ----------------------------------------------------------------------
app.put('/api/users/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { full_name, email, role } = req.body;
    if (!full_name || !email) return res.status(400).json(envelope(400, null, 'Missing fields'));

    const conn = await mysql.createConnection(DB_CONFIG);
    const [r]  = await conn.execute(
      'UPDATE users SET full_name=?, email=?, role=? WHERE id=?',
      [full_name, email, role || 'viewer', id]
    );
    await conn.end();
    if (r.affectedRows === 0) return res.status(404).json(envelope(404, null, 'User not found'));
    return res.status(200).json(envelope(200, { id }, 'User updated'));
  } catch (err) {
    return res.status(500).json(envelope(500, null, err.message));
  }
});

// ----------------------------------------------------------------------
// DELETE  (DELETE /api/users/:id) — Idempotent removal
// ----------------------------------------------------------------------
app.delete('/api/users/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const conn = await mysql.createConnection(DB_CONFIG);
    const [r]  = await conn.execute('DELETE FROM users WHERE id=?', [id]);
    await conn.end();
    if (r.affectedRows === 0) return res.status(404).json(envelope(404, null, 'User not found'));
    return res.status(204).send();             // 204 No Content is canonical
  } catch (err) {
    return res.status(500).json(envelope(500, null, err.message));
  }
});

// ----------------------------------------------------------------------
app.listen(PORT, () => console.log(`KTU REST API listening on :${PORT}`));
```

## 3.3 Client-Side Asynchronous Consumer — Vanilla JS with `fetch` + `async/await`

```javascript
// client.js  —  Browser-side asynchronous resource management

const API = 'http://localhost:3000/api/users';

// ----------------------------------------------------------------
// A reusable async helper that throws on non-2xx responses
// ----------------------------------------------------------------
async function callApi(url, options = {}) {
  const response = await fetch(url, {
    headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    ...options
  });
  if (!response.ok) {                       // <-- Verification step
    const errBody = await response.json().catch(() => ({}));
    throw new Error(`HTTP ${response.status} — ${errBody.message || 'Unknown error'}`);
  }
  // 204 No Content has no body
  if (response.status === 204) return null;
  return response.json();
}

// ----------------------------------------------------------------
// CREATE — POST  (Promise returned, awaited immediately)
// ----------------------------------------------------------------
async function createUser(payload) {
  return callApi(API, { method: 'POST', body: JSON.stringify(payload) });
}

// ----------------------------------------------------------------
// READ  — GET collection with query parameters
// ----------------------------------------------------------------
async function listUsers({ role, page = 1, limit = 5 } = {}) {
  const qs = new URLSearchParams({ role, page, limit });
  return callApi(`${API}?${qs}`);
}

// ----------------------------------------------------------------
// UPDATE — PUT (full)
// ----------------------------------------------------------------
async function updateUser(id, payload) {
  return callApi(`${API}/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}

// ----------------------------------------------------------------
// DELETE
// ----------------------------------------------------------------
async function deleteUser(id) {
  return callApi(`${API}/${id}`, { method: 'DELETE' });
}

// ----------------------------------------------------------------
// Demonstration driver — an IIFE so we can use top-level await logic
// ----------------------------------------------------------------
(async () => {
  try {
    // CREATE
    const created = await createUser({ full_name: 'Karthik R', email: 'karthik@ktu.in', role: 'editor' });
    console.log('CREATED:', created);

    // READ
    const list = await listUsers({ role: 'editor' });
    console.log('LIST   :', list);

    // UPDATE
    const updated = await updateUser(created.payload.id, {
      full_name: 'Karthik R Nair', email: 'karthik@ktu.in', role: 'admin'
    });
    console.log('UPDATED:', updated);

    // DELETE
    await deleteUser(created.payload.id);
    console.log('DELETED id', created.payload.id);
  } catch (err) {
    console.error('API verification failed:', err.message);
  }
})();
```

## 3.4 End-to-End Request/Response Walkthrough — Deriving the Verification Chain

Let us trace one full lifecycle to show the asynchronous choreography:

$$
\begin{aligned}
\text{Step 1 (Client initiates):} \quad & \text{JS calls } \texttt{fetch('/api/users/2')} \\
\text{Step 2 (Event Loop dispatch):} \quad & \text{Call is delegated to Web API, Call Stack continues.} \\
\text{Step 3 (Server routing):} \quad & \text{Express matches } \texttt{GET /api/users/:id} \to \texttt{id}=2. \\
\text{Step 4 (DB layer):} \quad & \text{conn.execute('SELECT * FROM users WHERE id=?', [2])} \\
\text{Step 5 (MySQL returns row):} \quad & \text{Row} = \{2, \text{'Rahul Pillai'}, \dots\}. \\
\text{Step 6 (Serialization):} \quad & \text{Object} \to \text{JSON string via } \texttt{JSON.stringify}. \\
\text{Step 7 (HTTP response):} \quad & \text{Status } 200, \ \text{Content-Type: application/json}. \\
\text{Step 8 (Client resumes):} \quad & \texttt{await} \text{ unblocks, microtask runs, } \texttt{response.json()} \text{ parses}. \\
\text{Step 9 (UI render):} \quad & \text{DOM updated without page reload.}
\end{aligned}
$$

> [!TIP]
> **Why `await` is non-blocking:** When the interpreter hits `await`, the current async function is **suspended** and a new microtask is scheduled. The browser is free to paint frames, process scroll events, and execute other code. Only when the network promise resolves does the microtask re-enter the call stack.

## 3.5 Verification Script — Automated cURL Test Suite

The following script constitutes the **acceptance test** a KTU lab viva panel would expect you to defend. Each request is timestamped and its response is logged to `verification.log`.

```bash
#!/usr/bin/env bash
# verify-api.sh
set -e
BASE="http://localhost:3000/api/users"
LOG="verification.log"
: > "$LOG"

log() { echo "[$(date +%T)] $1" | tee -a "$LOG"; }

log "1) CREATE user"
NEW_ID=$(curl -s -X POST "$BASE" \
  -H "Content-Type: application/json" \
  -d '{"full_name":"Test User","email":"test@ktu.in","role":"viewer"}' \
  | tee -a "$LOG" | python3 -c "import sys,json;print(json.load(sys.stdin)['payload']['id'])")
log "   -> got id=$NEW_ID"

log "2) READ collection filtered by role"
curl -s "$BASE?role=viewer&limit=3" -H "Accept: application/json" | tee -a "$LOG" >/dev/null

log "3) READ single user $NEW_ID"
curl -s "$BASE/$NEW_ID" | tee -a "$LOG" >/dev/null

log "4) UPDATE user $NEW_ID"
curl -s -X PUT "$BASE/$NEW_ID" \
  -H "Content-Type: application/json" \
  -d '{"full_name":"Test User Edited","email":"test@ktu.in","role":"admin"}' \
  | tee -a "$LOG" >/dev/null

log "5) DELETE user $NEW_ID (expect 204)"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X DELETE "$BASE/$NEW_ID")
log "   -> HTTP $HTTP_CODE"
[[ "$HTTP_CODE" == "204" ]] || { log "FAIL: expected 204"; exit 1; }

log "6) DELETE same id again (expect 404, confirms idempotency check)"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X DELETE "$BASE/$NEW_ID")
log "   -> HTTP $HTTP_CODE"
[[ "$HTTP_CODE" == "404" ]] || { log "FAIL: expected 404"; exit 1; }

log "ALL CHECKS PASSED ✅"
```

## 3.6 Comparative Configuration Matrix — Library / Framework Choices

| Concern | Vanilla `fetch` | Axios | jQuery `$.ajax` | Angular `HttpClient` |
|---|---|---|---|---|
| Browser support | Modern only | IE11+ | IE8+ | Modern only |
| Auto JSON parse | ❌ Manual `.json()` | ✅ Auto | ✅ Auto | ✅ Auto |
| Interceptors | ❌ Manual | ✅ Built-in | Plugin | ✅ Built-in |
| Abort controller | ✅ Native | ✅ Since v0.22 | ❌ | ✅ |
| TypeScript types | Community | ✅ Official | ❌ | ✅ First-class |
| Bundle size | 0 KB | ~14 KB min+gz | ~30 KB | Built-in |

> [!WARNING]
> **Common student mistake:** Using `$.ajax` in 2024-era code. KTU examiners deduct 1 mark for using deprecated stacks. Default to native `fetch` or `Axios`.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 RESTful Resource Address Topology (Hierarchical Block Architecture)

```mermaid
graph TD
    subgraph Origin
        BASE[Base URL https api ktu in]
    end

    subgraph CollectionLevel
        C1[GET POST api users]
        C2[GET POST api products]
        C3[GET POST api orders]
    end

    subgraph ItemLevel
        I1[GET PUT PATCH DELETE api users id]
        I2[GET PUT PATCH DELETE api products id]
        I3[GET PUT PATCH DELETE api orders id]
    end

    subgraph NestedSub
        N1[GET api users id orders]
        N2[GET api products id reviews]
    end

    BASE --> C1
    BASE --> C2
    BASE --> C3
    C1 --> I1
    C2 --> I2
    C3 --> I3
    I1 --> N1
    I2 --> N2
```

> [!NOTE]
> **Interpretation:** The topology mirrors foreign-key relationships in the database. `users → orders` is a `1:N` parent–child relation; the URI nesting `users/{id}/orders` reflects that cardinality.

## 4.2 Asynchronous Request/Response Lifecycle (Sequential Processing Topology)

```mermaid
sequenceDiagram
    participant U as User Browser
    participant J as JavaScript Engine
    participant F as fetch Promise
    participant N as Network TCP Layer
    participant S as Express Server
    participant D as MySQL Database

    U->>J: 1. User clicks "Load Users"
    J->>F: 2. fetch /api/users initiated
    F-->>J: 3. Returns Promise (pending)
    J->>U: 4. UI remains responsive
    F->>N: 5. HTTP GET request sent
    N->>S: 6. Server receives request
    S->>D: 7. SQL SELECT * FROM users
    D-->>S: 8. Returns rows
    S-->>N: 9. HTTP 200 + JSON body
    N-->>F: 10. Response arrives
    F-->>J: 11. await resumes
    J->>U: 12. DOM updated with rows
```

## 4.3 CRUD Operation Flowchart (Decision Topology)

```mermaid
flowchart LR
    A[Client HTTP Request] --> B{Verb}
    B -->|GET| C[Read]
    B -->|POST| D[Create]
    B -->|PUT| E[Update Full]
    B -->|PATCH| F[Update Partial]
    B -->|DELETE| G[Delete]
    C --> C1{Resource id given?}
    C1 -->|Yes| C2[Return single resource 200]
    C1 -->|No| C3[Return collection 200]
    D --> D1[Validate body 400]
    D1 -->|Invalid| D2[Return 400]
    D1 -->|Valid| D3[INSERT 201]
    E --> E1[Apply full representation]
    F --> F1[Apply delta fields only]
    G --> G1{Affected rows greater than 0?}
    G1 -->|Yes| G2[Return 204]
    G1 -->|No| G3[Return 404]
```

## 4.4 Event Loop Microtask vs Macrotask Decision Matrix

```mermaid
flowchart TD
    Start[Script begins] --> Stack[Execute Call Stack synchronously]
    Stack --> AsyncEncountered{Encountered await or Promise.then}
    AsyncEncountered -->|No| End[End of script]
    AsyncEncountered -->|Yes| Offload[Offload to Web API]
    Offload --> MicroQ[Schedule continuation on Microtask Queue]
    MicroQ --> LoopTick[Event Loop tick]
    LoopTick --> DrainMicro[Drain Microtask Queue first]
    DrainMicro --> Render[Browser paint frame]
    Render --> DrainMacro[Drain Macrotask Queue e.g. setTimeout]
    DrainMacro --> LoopTick
```

## 4.5 Resource Verification Block Diagram (Functional Architecture)

```mermaid
graph TB
    subgraph ClientSide
        UI[User Interface Layer]
        APIAdapter[API Adapter Module]
    end

    subgraph ServerSide
        Router[Express Router]
        Controller[User Controller]
        Validator[Schema Validator]
        DAL[Data Access Layer]
    end

    subgraph Persistence
        Table[users Table MySQL]
    end

    UI --> APIAdapter
    APIAdapter -->|HTTP Request JSON| Router
    Router --> Controller
    Controller --> Validator
    Validator -->|Valid| DAL
    Validator -->|Invalid| Controller
    DAL --> Table
    Table --> DAL
    DAL --> Controller
    Controller --> Router
    Router -->|HTTP Response JSON| APIAdapter
    APIAdapter --> UI
```

> [!TIP]
> **Exam Reading Tip:** When the question says *"Explain the layered architecture of a RESTful service"*, reproduce the **Client → Router → Controller → DAL → Table** chain. Naming each layer earns full marks.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question A1 (3 Marks)
> **[KTU University Exam — July 2024 | CO1 | Remember]**
> *Differentiate between REST and SOAP architectural styles. List any four contrasting features.*

**Model Answer (Valuation Key):**

| # | Feature | REST | SOAP |
|---|---|---|---|
| 1 | **Type** | Architectural style (constraints) | Protocol with strict spec |
| 2 | **Data format** | JSON, XML, YAML, plain text | XML only (envelope) |
| 3 | **Transport** | HTTP/HTTPS only | HTTP, SMTP, TCP, JMS |
| 4 | **State** | Stateless by mandate | Can be stateful (WS-*) |
| 5 | **Contract** | Implicit (OpenAPI optional) | WSDL mandatory |
| 6 | **Bandwidth** | Lightweight | Verbose envelope |
| 7 | **Error handling** | HTTP status codes | SOAP Fault element |
| 8 | **Security** | HTTPS, OAuth, JWT | WS-Security, SAML |

**[Award 1 mark for each correct contrasting pair, maximum 3 marks.]**

---

### Question A2 (3 Marks)
> **[KTU University Exam — Dec 2023 | CO1 | Understand]**
> *Explain the significance of HTTP status codes `201`, `204`, `404`, and `409` in a RESTful API with one example of each.*

**Model Answer:**

- **`201 Created`** — Returned after a successful `POST` that created a new resource. The `Location` header should contain the URI of the new resource. *Example: After `POST /api/users` the server responds with `201 Created` and body `{"id": 42}`. **[1 Mark]**
- **`204 No Content`** — Returned after a successful `DELETE` or a `PUT` where the client does not need the resource representation back. The response body is intentionally empty. *Example: `DELETE /api/users/42` returns `204 No Content` with no body.* **[1 Mark]**
- **`404 Not Found`** — Returned when the requested URI does not map to any existing resource. *Example: `GET /api/users/9999` when no user with that id exists.* **[1/2 Mark]**
- **`409 Conflict`** — Returned when the request collides with the current state of the resource (e.g., a uniqueness constraint). *Example: `POST /api/users` with an email that already exists in the `UNIQUE` column.* **[1/2 Mark]**

---

## 5.2 Part B — Full-Stack 14-Mark Questions (ESE Module Internal Choice)

### Question B-Option-A (14 Marks)
> **[KTU University Exam — July 2024 | CO2 / CO3 | Understand + Apply]**
> *(a) Design a RESTful API contract (URI, verbs, status codes, JSON schema) for a `books` resource in a library management system. (7 Marks)*
> *(b) Implement the `POST /api/books` and `GET /api/books/:id` endpoints in Node.js + Express, including input validation, asynchronous database access, and a standardized JSON response envelope. Demonstrate the end-to-end `fetch` call from the client. (7 Marks)*

---

#### (a) REST Contract Design (7 Marks) — Model Solution

**Resource Identification & URI Design** **[1 Mark]**

$$
\begin{aligned}
\text{Collection}  &\to \texttt{GET /api/books} \\
\text{Item}        &\to \texttt{GET /api/books/\{id\}} \\
\text{Create}      &\to \texttt{POST /api/books} \\
\text{Update Full} &\to \texttt{PUT /api/books/\{id\}} \\
\text{Delete}      &\to \texttt{DELETE /api/books/\{id\}}
\end{aligned}
$$

**JSON Schema (Resource Representation)** **[2 Marks]**

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Book",
  "type": "object",
  "required": ["title", "isbn", "author_id"],
  "properties": {
    "id"        : { "type": "integer", "readOnly": true },
    "title"     : { "type": "string",  "maxLength": 200 },
    "isbn"      : { "type": "string",  "pattern": "^[0-9\\-]{10,17}$" },
    "author_id" : { "type": "integer" },
    "published" : { "type": "integer", "minimum": 1450, "maximum": 2100 },
    "copies"    : { "type": "integer", "minimum": 0, "default": 1 }
  }
}
```

**Status Code Mapping** **[2 Marks]**

| Scenario | Status | Reason |
|---|---|---|
| Successful read | `200 OK` | Resource found and returned |
| Successful create | `201 Created` + `Location: /api/books/42` | New resource generated |
| Validation failure | `422 Unprocessable Entity` | Schema mismatch |
| Duplicate ISBN | `409 Conflict` | Uniqueness violation |
| Book missing | `404 Not Found` | No row with that `id` |

**Query Parameter Conventions** **[1 Mark]**

- `GET /api/books?author=5&available=true&page=2&limit=20` — filter by author, availability, paginate.
- `GET /api/books?sort=-published` — descending sort by publish year.

**Self-Descriptive Message Example** **[1 Mark]**

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/books/42
ETag: "a7c4f9b2"

{ "id": 42, "title": "Clean Code", "isbn": "978-0132350884", "author_id": 7, "copies": 3 }
```

---

#### (b) Implementation of `POST` and `GET /:id` (7 Marks) — Model Solution

**Step 1: Database table setup** **[1 Mark]**

```sql
CREATE TABLE books (
  id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title      VARCHAR(200) NOT NULL,
  isbn       VARCHAR(17)  NOT NULL UNIQUE,
  author_id  INT UNSIGNED NOT NULL,
  published  SMALLINT,
  copies     INT          NOT NULL DEFAULT 1,
  PRIMARY KEY (id),
  INDEX idx_author (author_id)
) ENGINE=InnoDB;
```

**Step 2: Express controller (server snippet)** **[3 Marks]**

```javascript
app.post('/api/books', async (req, res) => {
  try {
    const { title, isbn, author_id, published, copies } = req.body;
    if (!title || !isbn || !author_id) {
      return res.status(422).json({ success: false, status: 422, message: 'title, isbn, author_id required' });
    }
    const conn = await mysql.createConnection(DB_CONFIG);
    const [r]  = await conn.execute(
      'INSERT INTO books (title, isbn, author_id, published, copies) VALUES (?,?,?,?,?)',
      [title, isbn, author_id, published || null, copies || 1]
    );
    await conn.end();
    return res.status(201)
              .location(`/api/books/${r.insertId}`)
              .json({ success: true, status: 201, payload: { id: r.insertId } });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ success: false, status: 409, message: 'ISBN exists' });
    return res.status(500).json({ success: false, status: 500, message: err.message });
  }
});

app.get('/api/books/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ success: false, status: 400, message: 'Bad id' });
    const conn = await mysql.createConnection(DB_CONFIG);
    const [rows] = await conn.execute('SELECT * FROM books WHERE id=?', [id]);
    await conn.end();
    if (rows.length === 0) return res.status(404).json({ success: false, status: 404, message: 'Not found' });
    return res.status(200).json({ success: true, status: 200, payload: rows[0] });
  } catch (err) {
    return res.status(500).json({ success: false, status: 500, message: err.message });
  }
});
```

**Step 3: Client `fetch` consumer** **[2 Marks]**

```javascript
// Create a book
const created = await fetch('/api/books', {
  method : 'POST',
  headers: { 'Content-Type': 'application/json' },
  body   : JSON.stringify({ title: 'Clean Code', isbn: '978-0132350884', author_id: 7, copies: 3 })
});
console.log(created.status);            // 201

// Read the same book by id
const resp    = await fetch('/api/books/' + (await created.json()).payload.id);
const book    = await resp.json();
console.log(book.payload.title);       // 'Clean Code'
```

**Step 4: Verification (cURL smoke test)** **[1 Mark]**

```bash
curl -i -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title":"Refactoring","isbn":"978-0134757599","author_id":7,"copies":2}'
```

> [!WARNING]
> **Valuation Pitfalls — Where Students Lose Marks:**
> 1. **Forgetting the `.location()` header on 201** — Examiner deducts 0.5 mark. *Always emit `Location: /api/<resource>/<newId>` after a successful create.*
> 2. **Returning HTTP 200 for an error** — If the insert fails on a duplicate ISBN, *do not* return `200`. The proper code is `409 Conflict`.
> 3. **Synchronous-style `try/catch` confusion with `await`** — Writing `const r = await conn.execute(...).then(...)` is redundant; pick one pattern. `await` inside `try` is canonical.
> 4. **Failing to close the connection** — In production, use a connection pool. For the exam, calling `conn.end()` explicitly is acceptable and earns 0.5 mark.
> 5. **Skipping input validation** — A controller that blindly inserts `req.body` into SQL is vulnerable to injection; showing even minimal field checks earns the 1-mark validation sub-credit.

---

### Question B-Option-B (14 Marks)
> **[KTU University Exam — Dec 2023 | CO2 / CO4 | Understand + Apply]**
> *(a) With a neat diagram, explain the JavaScript Event Loop and the role of the Microtask Queue in handling asynchronous operations such as `fetch`. (7 Marks)*
> *(b) Implement an asynchronous client module that performs `GET`, `POST`, `PUT`, and `DELETE` operations against a `tasks` resource, demonstrating proper `try/catch` error handling, status-code verification, and Promise chaining. (7 Marks)*

---

#### (a) Event Loop & Microtask Queue Explanation (7 Marks) — Model Solution

**The Three Components** **[2 Marks]**

1. **Call Stack** — A LIFO (Last-In, First-Out) data structure that tracks the currently executing function. JavaScript is single-threaded, so only one stack frame runs at a time.
2. **Web APIs / C++ Backend (Node)** — Browser/Node-provided facilities (`fetch`, `setTimeout`, `DOM events`, `fs.readFile`) that execute *outside* the JS engine and notify it when finished.
3. **Queues** — Two waiting lines for callbacks: the **Microtask Queue** (Promises, `queueMicrotask`, `MutationObserver`) and the **Task / Macrotask Queue** (`setTimeout`, `setInterval`, I/O).

**The Loop Algorithm** **[3 Marks]**

```text
while (true) {
  1. Execute everything on the Call Stack until it is empty.
  2. Drain the entire Microtask Queue (process every queued microtask; new ones queued during draining are also processed).
  3. Render frame if needed (~16.7 ms cadence for 60 fps).
  4. Take the oldest task from the Macrotask Queue and push it onto the Stack.
  5. Goto 1.
}
```

**Application to `fetch`** **[2 Marks]**

When `fetch(url)` is called:

- The call returns a `Promise` immediately (synchronously) and the request is offloaded to the Web API.
- The JS engine continues executing subsequent synchronous code.
- When the HTTP response arrives, the Web API schedules a microtask that resolves the Promise.
- On the next Event Loop tick, the microtask runs, the `await` continuation is invoked, and the response is processed — *before* any `setTimeout` callbacks waiting in the macrotask queue.

**Diagram Reference:** See **Figure 4.4** in SECTION 4 for the visual representation of the microtask vs macrotask priority.

---

#### (b) Async CRUD Client Module (7 Marks) — Model Solution

**Step 1: Module skeleton with strict type annotations (JSDoc)** **[1 Mark]**

```javascript
/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} title
 * @property {boolean} done
 */

/** @type {string} */
const BASE = '/api/tasks';
```

**Step 2: Internal async helper with status verification** **[2 Marks]**

```javascript
async function http(method, path, body) {
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(BASE + path, opts);
  if (res.status === 204) return null;
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`HTTP ${res.status} — ${json.message || 'request failed'}`);
  return json;
}
```

**Step 3: CRUD wrappers** **[3 Marks]**

```javascript
export const Tasks = {
  list  : ()        => http('GET',    ''),
  get   : (id)      => http('GET',    `/${id}`),
  create: (payload) => http('POST',   '',     payload),
  update: (id, p)   => http('PUT',    `/${id}`, p),
  remove: (id)      => http('DELETE', `/${id}`)
};
```

**Step 4: Promise-chaining demonstration with `.then/.catch`** **[1 Mark]**

```javascript
Tasks.create({ title: 'Write report', done: false })
  .then(res => {
    console.log('Created task id =', res.payload.id);
    return Tasks.update(res.payload.id, { title: 'Write final report', done: true });
  })
  .then(res => console.log('Updated:', res))
  .catch(err  => console.error('Pipeline failed:', err.message));
```

> [!WARNING]
> **Valuation Pitfalls — Option B:**
> 1. **Mixing `await` and `.then` in the same chain without justification** — Pick one style per function. The `await` style is preferred in modern code, but the question explicitly demands Promise chaining for the 1-mark sub-credit.
> 2. **Forgetting the `204 No Content` check** — `res.json()` will throw on an empty body. Always guard with the early return.
> 3. **Not propagating the status code into the error message** — Examiners award 0.5 mark for messages that include the HTTP code.
> 4. **Confusing `Promise` with `Observable`** — A `fetch` returns a single value, not a stream. Do not write `subscribe` blocks.

---

## 5.3 Examiner's Cross-Cutting Warning

> [!WARNING]
> **Universal Pitfall Sheet for REST + Async Questions:**
> - Never use verbs in URIs (`/getUsers` ❌ → `/users` ✅).
> - Plural nouns for collections, singular for path segments.
> - Always specify `Content-Type: application/json` on `POST/PUT/PATCH`.
> - Use `async/await` *with* `try/catch` — naked `await` swallows errors silently and costs 1 mark.
> - Idempotency means **same final state**, not **same response body**. Two `DELETE` calls on a missing resource can return `204` then `404` and still be considered idempotent.
> - Statelessness means no server-side session — store the JWT in the client's `Authorization` header, not in a PHP `$_SESSION` or Node `req.session`.

---

## 5.4 Topic Recap & Important Things to Remember

- **REST** is an architectural style, not a protocol. Its six constraints (Client–Server, Stateless, Cacheable, Uniform Interface, Layered, Code-on-Demand) form the *definition* the examiner expects.
- A **Resource** is a noun identified by a URI. Representations (JSON/XML) are *transferred* between states — hence "REpresentational State Transfer."
- The **HTTP verb → CRUD mapping** is the single highest-yield table: `GET=Read`, `POST=Create`, `PUT=Update-Full`, `PATCH=Update-Partial`, `DELETE=Delete`.
- **Idempotency:** `GET`, `PUT`, `DELETE` are idempotent; `POST` and `PATCH` are not. Memorize this distinction.
- **HTTP Status Codes** are the verification language: `2xx=Success`, `4xx=Client Error`, `5xx=Server Error`. `201` for created, `204` for no-content, `404` for not-found, `409` for conflict, `422` for validation failure.
- **Four parameter surfaces** must be verified: **Path** (`/users/{id}`), **Query** (`?role=admin`), **Header** (`Authorization`), **Body** (JSON).
- **Asynchronous JavaScript** uses the **Event Loop** with a Call Stack, Web APIs, Microtask Queue (high priority), and Macrotask Queue (lower priority). `await` continuations run on the microtask queue.
- **`fetch()` returns a `Promise<Response>`** — the body must be extracted explicitly with `.json()`, `.text()`, or `.blob()`. Always check `response.ok` before parsing.
- **REST contract design** follows: (1) identify resources, (2) design URI hierarchy mirroring FK relationships, (3) map verbs to CRUD, (4) define JSON schema, (5) document status codes, (6) use `Location` header on `201`, (7) version the API via `/api/v1/...`.
- **CORS** must be enabled on the server when the SPA is hosted on a different origin. Use the `cors` middleware in Express.
- **Security baseline:** Validate inputs server-side, parameterize SQL (no string concatenation), use HTTPS in production, hash passwords with `bcrypt`, and authenticate via JWT in the `Authorization: Bearer` header.
- **Testing/verification** is done with cURL scripts, Postman collections, or automated suites (Jest, Supertest). Always assert both the **status code** and the **response payload shape**.
- **Connection management:** In production, use a **connection pool** (`mysql2.createPool`) instead of opening/closing a connection per request. The exam allows per-request `createConnection` but the pool is a 1-mark bonus point when mentioned.
- **Statelessness** means the server stores *no* client context between requests. Every request must carry its own authentication token and parameters.
- **HATEOAS** (Hypermedia as the Engine of Application State) is an advanced constraint where responses include links to related actions (e.g., `{"self":"/api/books/42", "author":"/api/authors/7"}`). Mentioning it in an essay-style question earns bonus credit.

> [!TIP]
> **Final KTU 2024 Strategy:** For any "design a REST API" question, *always* present the answer in five ordered sections — (1) URI table, (2) JSON schema, (3) Status code matrix, (4) Sample request/response, (5) Verification cURL commands. This five-part structure maps 1:1 to the 14-mark rubric and guarantees full marks if each section is correct.

<!-- SECTION_5_END -->
