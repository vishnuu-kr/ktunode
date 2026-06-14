# Database APIs

<!-- SECTION_1_START -->
# Database APIs in Single Page Applications (SPA)

## 1.1 Formal KTU 2024 Syllabus Definition

> [!IMPORTANT]
> **Database API (Application Programming Interface)** in the context of SPAs refers to a structured communication contract between the **client-side JavaScript application** (running entirely in the browser) and a **remote data source** (relational DB, NoSQL store, or third-party service) exposed over **HTTP/HTTPS** using standardized data formats such as **JSON (JavaScript Object Notation)** or **XML**. In the KTU 2024 Web Programming (OECST832) syllabus, Database APIs constitute the *data access layer* of an SPA, abstracting persistence operations (Create, Read, Update, Delete) into reusable network endpoints.

The **SPA architecture** loads a single HTML shell once, and subsequent view changes happen via **DOM manipulation** driven by asynchronous API calls — eliminating full-page reloads. Database APIs are therefore the *lifeline* of an SPA.

### Key Terminology Snapshot

| Term | Meaning |
|---|---|
| **REST** | Representational State Transfer — stateless, resource-oriented architecture |
| **GraphQL** | Query language allowing clients to request *exactly* the data they need |
| **Endpoint** | A unique URL (e.g., `/api/users/42`) exposing a specific resource |
| **Payload** | The body of an HTTP request/response carrying data (usually JSON) |
| **CORS** | Cross-Origin Resource Sharing — browser security policy |
| **JWT** | JSON Web Token — compact, signed token for stateless authentication |

---

## 1.2 Intuitive Real-World Analogy

> [!NOTE]
> **The Restaurant Analogy 🍽️**
> Imagine an SPA as a **customer sitting at a dining table** (the browser viewport). The **kitchen** is the database server, hidden from view. The **waiter (API)** is the only channel of communication. The customer never enters the kitchen — instead they:
> 1. **Read the menu** → `GET /api/menu` (fetch available dishes)
> 2. **Place an order** → `POST /api/orders` (create new order)
> 3. **Modify the order** → `PUT /api/orders/7` (update existing order)
> 4. **Cancel the order** → `DELETE /api/orders/7` (remove order)
>
> Just as a waiter translates between customer and kitchen, the **Database API translates** JavaScript method calls into HTTP requests the server understands. The **JSON payload** is the *order slip* — structured, precise, and machine-readable.

### Standard HTTP Methods Reference (Bold for KTU High-Yield)

- **GET** — Retrieve a resource (idempotent, cacheable, no body)
- **POST** — Create a new resource (non-idempotent, carries body)
- **PUT** — Replace a resource entirely (idempotent)
- **PATCH** — Apply partial modification to a resource
- **DELETE** — Remove a resource (idempotent)

> [!TIP]
> **Idempotency** means executing the same operation multiple times produces the **same result** as executing it once. This is a critical REST principle tested in KTU exams.

---

## 1.3 Visualization of the SPA ↔ API Data Flow

> [!VISUALIZATION CONTROL]
> **Concept:** HTTP Request–Response Cycle with State Change Visualization
> **GeoGebra / Desmos Input Equations (Conceptual Mapping):**
> * Point A `(0, 5)` → SPA Component (User Interface)
> * Point B `(5, 5)` → Fetch / Axios Layer
> * Point C `(10, 5)` → Network Boundary (CORS Check)
> * Point D `(15, 5)` → REST API Endpoint
> * Point E `(20, 5)` → Database Server
> * Curve `f(x) = 5 - 0.1*(x-10)^2` → Response Payload returning data
>
> **Visual Description:** A horizontal pipeline showing how a user action in the SPA at Point A flows rightward through the network to the database at Point E, and the JSON response returns along a parabolic curve back to update the DOM. Students should observe that the pipeline is **bidirectional** but data only flows back as **structured JSON**, not HTML.

---

## 1.4 Why Database APIs Matter in SPAs

> [!IMPORTANT]
> **KTU 2024 Highlight:** Module 4 explicitly trains students to integrate asynchronous data retrieval into client-side applications. Without Database APIs, an SPA is a static shell — APIs *transform* it into a dynamic, data-driven application such as Gmail, Twitter, or Notion.

The **decoupling principle** is foundational: the frontend (React/Vue/Angular) and backend (Node/Express/Django) communicate *only* through a well-defined API contract. This enables:
- Independent deployment cycles
- Multiple clients (web, mobile, IoT) consuming the same API
- Scalability through load-balanced stateless servers
- Easier testing via API mocking (e.g., **MSW — Mock Service Worker**)
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis — KTU High-Yield Formula Sheet

## 2.1 The REST Architectural Constraints (Fielding's Rules)

A truly **RESTful API** must satisfy these six constraints as defined by **Roy Fielding (2000)**:

1. **Client–Server separation** — UI and data storage concerns are independent
2. **Statelessness** — Each request contains *all* information needed; server stores **no client session**
3. **Cacheability** — Responses must declare themselves cacheable or non-cacheable
4. **Uniform Interface** — Standardized resource identification (URIs), representations (JSON), and self-descriptive messages
5. **Layered System** — Client cannot tell if it's talking to the end server or an intermediary (proxy, load balancer)
6. **Code-on-Demand (optional)** — Server can send executable code (e.g., JavaScript) to the client

> [!NOTE]
> **KTU Exam Tip:** If asked *"Is REST stateless?"* — answer with: *"Yes. The server does not retain client context between requests. Every HTTP request is self-contained and carries authentication tokens, parameters, and payload."*

---

## 2.2 The CRUD-to-HTTP Mapping Table (Cheat Sheet)

> [!IMPORTANT]
> **Memorize this table.** KTU frequently tests CRUD-to-HTTP-method mapping in both Part A (3-mark) and Part B (14-mark) questions.

| CRUD Operation | SQL Equivalent | HTTP Method | URI Example | Request Body | Response Code |
|---|---|---|---|---|---|
| **Create** | `INSERT` | **POST** | `/api/students` | New student JSON | **201 Created** |
| **Read (single)** | `SELECT … WHERE id=?` | **GET** | `/api/students/42` | None | **200 OK** |
| **Read (all)** | `SELECT *` | **GET** | `/api/students` | None | **200 OK** |
| **Update (full)** | `UPDATE … SET all` | **PUT** | `/api/students/42` | Complete student JSON | **200 OK** |
| **Update (partial)** | `UPDATE … SET col` | **PATCH** | `/api/students/42` | Partial JSON | **200 OK** |
| **Delete** | `DELETE` | **DELETE** | `/api/students/42` | None | **204 No Content** |

---

## 2.3 HTTP Status Code Classification (High-Yield)

| Class | Range | Meaning | Common Codes |
|---|---|---|---|
| **1xx Informational** | 100–199 | Request received, continuing process | 100 Continue |
| **2xx Success** | 200–299 | Request successfully received/understood/accepted | **200 OK**, **201 Created**, **204 No Content** |
| **3xx Redirection** | 300–399 | Further action needed | 301 Moved Permanently, 304 Not Modified |
| **4xx Client Error** | 400–499 | Request contains bad syntax / cannot be fulfilled | **400 Bad Request**, **401 Unauthorized**, **403 Forbidden**, **404 Not Found**, **409 Conflict** |
| **5xx Server Error** | 500–599 | Server failed to fulfill a valid request | **500 Internal Server Error**, **503 Service Unavailable** |

> [!WARNING]
> **Common Pitfall:** Using **404** for validation errors. The correct status for *"email already exists"* is **409 Conflict**, not 404.

---

## 2.4 The Fetch API Request Lifecycle

The modern browser-native **Fetch API** follows a **two-stage Promise chain**:

**Stage 1 — Network Resolution:** The Promise resolves with a `Response` object as soon as the HTTP headers arrive (the body may still be streaming).

**Stage 2 — Body Parsing:** The body must be explicitly read using a method like `response.json()`, `response.text()`, or `response.blob()`. Each of these returns a *second* Promise.

Mathematically, the Fetch pipeline can be represented as a composition of asynchronous transformations:

$$
\text{Request} \xrightarrow{\text{network}} \text{Response} \xrightarrow{\text{body parser}} \text{ParsedData}
$$

> [!NOTE]
> **Engineering Utility:** Production systems (Netflix, Airbnb) wrap `fetch` in a **client SDK** that adds authentication headers, retry logic, telemetry, and error normalization — turning raw HTTP into a domain-specific interface.

---

## 2.5 Authentication Pattern: JWT (JSON Web Token)

A JWT is a compact, URL-safe token consisting of three Base64-encoded parts separated by dots:

$$
\text{JWT} = \underbrace{\text{Header}}_{\text{algorithm \& type}} . \underbrace{\text{Payload}}_{\text{claims}} . \underbrace{\text{Signature}}_{\text{HMAC/SHA256 verification}}
$$

**Structure Example (Decoded):**
- **Header:** `{"alg": "HS256", "typ": "JWT"}`
- **Payload:** `{"sub": "user_123", "role": "admin", "exp": 1719859200}`
- **Signature:** `HMACSHA256(base64(header) + "." + base64(payload), secret_key)`

> [!IMPORTANT]
> **Stateless Auth:** Once the server issues a JWT, it does **not** store it. Every subsequent request carries the token in the `Authorization: Bearer <token>` header. This is why REST APIs are *truly stateless*.

---

## 2.6 CORS — The Browser's Security Gate

By default, browsers enforce the **Same-Origin Policy**: a page at `https://myapp.com` cannot make XHR/fetch requests to `https://api.otherdomain.com` *unless* the server explicitly allows it via CORS headers:

$$
\text{Access-Control-Allow-Origin: https://myapp.com}
$$

$$
\text{Access-Control-Allow-Methods: GET, POST, PUT, DELETE}
$$

$$
\text{Access-Control-Allow-Headers: Content-Type, Authorization}
$$

> [!WARNING]
> **Security Note:** Never use `Access-Control-Allow-Origin: *` (wildcard) on APIs that accept cookies or authorization headers — this is a serious security vulnerability.

---

## 2.7 GraphQL vs REST — Comparative Formula

| Dimension | REST | GraphQL |
|---|---|---|
| **Endpoint count** | Multiple (one per resource) | Single (`/graphql`) |
| **Data shape** | Fixed by server | Client-defined via query |
| **Over-fetching** | Common | Eliminated |
| **Under-fetching** | Common (N+1 problem) | Eliminated |
| **Caching** | HTTP-cache friendly | Requires persisted queries |
| **Learning curve** | Low | Moderate |

$$
\text{Data Transferred}_{\text{GraphQL}} \le \text{Data Transferred}_{\text{REST}}
$$
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Full Code Implementation

## 3.1 The Fetch API — Exhaustive Walkthrough

Below is a **production-grade** Fetch implementation with exhaustive error handling, type hints, and logging — suitable for direct inclusion in a KTU lab record or exam answer.

```python
# Note: JavaScript code below — Python syntax highlighting used for visual distinction in the lab record.
# Filename: apiClient.js

/**
 * Generic async API client wrapping the native Fetch API.
 * Provides automatic JSON parsing, timeout, retry, and structured error logging.
 */

const DEFAULT_TIMEOUT_MS = 8000;
const MAX_RETRIES = 2;

/**
 * Core request dispatcher.
 * @param {string} url - The full API endpoint.
 * @param {object} options - Fetch configuration object.
 * @param {number} retryCount - Internal retry counter.
 * @returns {Promise<any>} Parsed JSON response.
 */
async function apiRequest(url, options = {}, retryCount = 0) {
    // --- Step 1: Validate URL is non-empty string ---
    if (typeof url !== "string" || url.trim() === "") {
        throw new TypeError("API URL must be a non-empty string");
    }

    // --- Step 2: Set default headers if not provided ---
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...(options.headers || {})
    };

    // --- Step 3: Attach JWT from localStorage if present ---
    const token = localStorage.getItem("auth_token");
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    // --- Step 4: Construct final fetch configuration ---
    const config = {
        method: options.method || "GET",
        headers: headers,
        body: options.body ? JSON.stringify(options.body) : undefined,
        credentials: "include",        // send cookies if backend supports it
        mode: "cors",                  // explicit CORS request
        cache: options.cache || "no-cache"
    };

    // --- Step 5: Implement AbortController-based timeout ---
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);
    config.signal = controller.signal;

    try {
        // --- Step 6: Dispatch the actual network request ---
        const response = await fetch(url, config);
        clearTimeout(timeoutId);   // success: cancel the timeout

        // --- Step 7: Handle HTTP error status codes ---
        if (!response.ok) {
            // Attempt to parse error JSON body for diagnostics
            let errorBody;
            try {
                errorBody = await response.json();
            } catch (parseError) {
                errorBody = { message: response.statusText };
            }

            // Construct a structured error object
            const apiError = new Error(
                `API Error [${response.status}] ${errorBody.message || "Unknown"}`
            );
            apiError.status = response.status;
            apiError.body = errorBody;
            throw apiError;
        }

        // --- Step 8: Handle 204 No Content (no body to parse) ---
        if (response.status === 204) {
            return null;
        }

        // --- Step 9: Parse JSON body as the second Promise stage ---
        const data = await response.json();
        return data;

    } catch (networkError) {
        clearTimeout(timeoutId);

        // --- Step 10: Differentiate timeout vs network failure ---
        if (networkError.name === "AbortError") {
            console.error(`[apiClient] Request to ${url} timed out after ${DEFAULT_TIMEOUT_MS}ms`);
            throw new Error("Request timed out. Please check your connection.");
        }

        // --- Step 11: Implement exponential-backoff retry for transient errors ---
        if (retryCount < MAX_RETRIES && networkError.status >= 500) {
            const backoffMs = Math.pow(2, retryCount) * 1000;  // 1s, 2s, 4s
            console.warn(`[apiClient] Retrying ${url} in ${backoffMs}ms (attempt ${retryCount + 1})`);
            await new Promise(resolve => setTimeout(resolve, backoffMs));
            return apiRequest(url, options, retryCount + 1);
        }

        // --- Step 12: Final failure — re-throw with context ---
        console.error(`[apiClient] Final failure for ${url}:`, networkError);
        throw networkError;
    }
}
```

### Why this code is KTU-grade:

1. **Exhaustive error handling** — distinguishes timeouts, network errors, and HTTP errors.
2. **Type safety** — uses JSDoc to declare types in JavaScript.
3. **Retry logic** — uses exponential backoff ($2^n \times 1000$ ms) for transient 5xx errors.
4. **Authentication** — automatically attaches JWT from `localStorage`.
5. **Timeout** — uses `AbortController` (the modern standard, not deprecated `timeout` option).
6. **No truncation** — every logical step is explicitly coded.

---

## 3.2 CRUD Wrapper Functions Using the Client

```python
# Filename: studentService.js
# Wraps apiRequest() to provide a clean CRUD interface for the Student resource.

const API_BASE = "https://api.myuniversity.edu/v1";

/** CREATE: POST /students */
async function createStudent(studentData) {
    // Boundary validation
    if (!studentData.name || !studentData.email) {
        throw new ValidationError("name and email are required fields");
    }
    return await apiRequest(`${API_BASE}/students`, {
        method: "POST",
        body: studentData
    });
}

/** READ (single): GET /students/:id */
async function getStudentById(studentId) {
    if (!Number.isInteger(studentId) || studentId <= 0) {
        throw new ValidationError("studentId must be a positive integer");
    }
    return await apiRequest(`${API_BASE}/students/${studentId}`, {
        method: "GET"
    });
}

/** READ (all): GET /students with optional pagination */
async function listStudents(page = 1, limit = 20) {
    const queryString = new URLSearchParams({ page, limit }).toString();
    return await apiRequest(`${API_BASE}/students?${queryString}`, {
        method: "GET"
    });
}

/** UPDATE (full): PUT /students/:id */
async function replaceStudent(studentId, fullStudentData) {
    return await apiRequest(`${API_BASE}/students/${studentId}`, {
        method: "PUT",
        body: fullStudentData
    });
}

/** UPDATE (partial): PATCH /students/:id */
async function updateStudentPartial(studentId, partialFields) {
    return await apiRequest(`${API_BASE}/students/${studentId}`, {
        method: "PATCH",
        body: partialFields
    });
}

/** DELETE: DELETE /students/:id */
async function deleteStudent(studentId) {
    return await apiRequest(`${API_BASE}/students/${studentId}`, {
        method: "DELETE"
    });
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
        this.status = 400;
    }
}
```

> [!NOTE]
> **Engineering Insight:** The `URLSearchParams` constructor automatically URL-encodes query parameters, preventing injection attacks and encoding errors. This is *exactly* the pattern used in production React/Vue codebases.

---

## 3.3 React SPA Integration — The `useEffect` + State Pattern

```python
# Filename: StudentList.jsx
# A React component demonstrating proper API consumption in an SPA.

import React, { useState, useEffect } from "react";
import { listStudents, deleteStudent } from "./studentService";

function StudentList() {
    // --- State hooks ---
    const [students, setStudents] = useState([]);
    const [loading, setLoading]   = useState(true);
    const [error, setError]       = useState(null);

    // --- Lifecycle: fetch on mount ---
    useEffect(() => {
        let isMounted = true;  // guard against state updates after unmount

        async function fetchStudents() {
            try {
                const data = await listStudents(1, 50);
                if (isMounted) {
                    setStudents(data.items || []);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchStudents();

        // --- Cleanup function: prevent memory leaks ---
        return () => {
            isMounted = false;
        };
    }, []);  // empty dependency array = run once on mount

    // --- Event handler: delete with optimistic UI update ---
    const handleDelete = async (studentId) => {
        // Optimistic removal from UI before server confirms
        const originalList = [...students];
        setStudents(students.filter(s => s.id !== studentId));

        try {
            await deleteStudent(studentId);
        } catch (err) {
            // Roll back on failure
            setStudents(originalList);
            setError(`Delete failed: ${err.message}`);
        }
    };

    // --- Render branches ---
    if (loading) return <div className="spinner">Loading students...</div>;
    if (error)   return <div className="error">{error}</div>;

    return (
        <ul className="student-list">
            {students.map(student => (
                <li key={student.id}>
                    {student.name} — {student.email}
                    <button onClick={() => handleDelete(student.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default StudentList;
```

### Key SPA Concepts Demonstrated

- **Declarative state management** — UI is a *function of state*; we never manually mutate the DOM.
- **Async lifecycle** — `useEffect` runs after first render, fetches data, and triggers a re-render.
- **Cleanup on unmount** — the `isMounted` flag prevents "setState on unmounted component" warnings.
- **Optimistic UI** — update the UI *immediately*, then sync with the server; roll back on failure.
- **Loading / Error / Success states** — three explicit render branches.

---

## 3.4 Derivation: Why `async/await` Is Preferred Over `.then()`

Consider the same operation written two ways:

**Promise chain (callback-style):**
```python
fetch("/api/users/1")
    .then(res => res.json())
    .then(user => fetch(`/api/posts/${user.id}`))
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(err => console.error(err));
```

**Async/await (linear-style):**
```python
async function showUserPosts() {
    try {
        const userRes  = await fetch("/api/users/1");
        const user     = await userRes.json();
        const postsRes = await fetch(`/api/posts/${user.id}`);
        const posts    = await postsRes.json();
        console.log(posts);
    } catch (err) {
        console.error(err);
    }
}
```

> [!IMPORTANT]
> **KTU Exam Answer Formula:** *"`async/await` is syntactic sugar over Promises that makes asynchronous code read like synchronous code, improving readability, simplifying error handling via try/catch, and reducing callback nesting (the 'pyramid of doom')."*

---

## 3.5 Parallel API Calls with `Promise.all`

When independent API calls exist, sequential awaiting is wasteful. Use `Promise.all` to dispatch them in parallel:

```python
async function loadDashboard() {
    try {
        const [user, notifications, stats] = await Promise.all([
            apiRequest("/api/me"),
            apiRequest("/api/notifications"),
            apiRequest("/api/stats")
        ]);
        return { user, notifications, stats };
    } catch (err) {
        // If ANY promise rejects, Promise.all rejects with that error
        console.error("Dashboard load failed:", err);
    }
}
```

The wall-clock time is dominated by the **slowest** call, not the sum:

$$
T_{\text{parallel}} = \max(T_1, T_2, \ldots, T_n) \quad \text{vs.} \quad T_{\text{sequential}} = \sum_{i=1}^{n} T_i
$$

> [!TIP]
> Use `Promise.allSettled` if you want *all* results regardless of individual failures (returns `{status, value/reason}` objects).
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 SPA Architecture — Layered Block Diagram

```mermaid
graph TB
    subgraph CLIENT["CLIENT SIDE BROWSER"]
        UI["Presentation Layer<br/>React / Vue / Angular Components"]
        STATE["State Management<br/>Redux / Pinia / Signals"]
        APIC["API Client Wrapper<br/>apiRequest function"]
        FETCH["Fetch / Axios Engine<br/>Native HTTP Layer"]
        UI --> STATE
        STATE --> APIC
        APIC --> FETCH
    end

    subgraph NETWORK["NETWORK BOUNDARY"]
        CORS["CORS Gateway<br/>Browser Security Check"]
        TLS["TLS 1.3<br/>Encryption Layer"]
        FETCH --> CORS
        CORS --> TLS
    end

    subgraph SERVER["SERVER SIDE"]
        LB["Load Balancer<br/>Nginx / HAProxy"]
        API1["API Instance 1<br/>Node.js / Express"]
        API2["API Instance 2<br/>Node.js / Express"]
        ORM["ORM / Query Layer<br/>Sequelize / Prisma / Mongoose"]
        DB["Database<br/>PostgreSQL / MongoDB"]
        CACHE["Redis Cache<br/>Session and Query Cache"]
        TLS --> LB
        LB --> API1
        LB --> API2
        API1 --> ORM
        API2 --> ORM
        ORM --> DB
        API1 -.-> CACHE
        API2 -.-> CACHE
    end

    style CLIENT fill:#e3f2fd,stroke:#1976d2
    style NETWORK fill:#fff3e0,stroke:#f57c00
    style SERVER fill:#e8f5e9,stroke:#388e3c
```

> [!NOTE]
> **Visual Description:** The diagram shows three vertically stacked layers — the **blue Client zone** (browser), the **orange Network zone** (CORS + TLS), and the **green Server zone** (load balancer, multiple stateless API instances, ORM, database, and Redis cache). Solid arrows are synchronous request flow; dashed arrows are optional cache reads.

---

## 4.2 Request–Response Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant V as Vue/React View
    participant S as State Store
    participant A as API Client
    participant N as Network
    participant API as REST API Server
    participant DB as Database

    U->>V: Click "Load Profile" button
    V->>S: dispatch(loadProfileAction)
    S->>A: call apiRequest(GET /users/42)
    A->>N: HTTP GET request with JWT header
    N->>API: Forward request after CORS check
    API->>DB: SELECT * FROM users WHERE id=42
    DB-->>API: user row data
    API-->>N: 200 OK + JSON payload
    N-->>A: Response object
    A->>A: response.json() parse
    A-->>S: Promise resolves with user object
    S->>V: State updated, triggers re-render
    V-->>U: Profile card displays in DOM

    Note over A,API: If status >= 400, A throws structured error
    Note over S,V: V shows error toast on rejection
```

> [!TIP]
> **KTU Exam Strategy:** Drawing a **sequence diagram** with `autonumber` and `participant` declarations in Mermaid earns full marks in design questions. Always label arrows with HTTP method and resource path.

---

## 4.3 CRUD Operation State Machine

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Loading: User triggers action
    Loading --> Success: API returns 2xx
    Loading --> Error: API returns 4xx/5xx
    Loading --> Timeout: AbortController fires
    Success --> Idle: Update UI, reset state
    Error --> Idle: Display error message
    Error --> Loading: User clicks Retry
    Timeout --> Loading: User clicks Retry
    Timeout --> Idle: Cancel button pressed
    Idle --> [*]: Component unmounts

    note right of Loading
        Disable buttons
        Show spinner
        Set isLoading=true
    end note

    note right of Error
        Log to telemetry
        Show user-friendly message
        Offer retry option
    end note
```

> [!IMPORTANT]
> **Pattern Name:** This is the canonical **Three-State Async Pattern** (Idle / Loading / Success-or-Error). Every SPA component that consumes an API should implement this state machine — KTU examiners actively look for it.

---

## 4.4 Database API Endpoint Map (REST Resource Graph)

```mermaid
graph LR
    ROOT["/api/v1"] --> USERS["/users"]
    ROOT --> POSTS["/posts"]
    ROOT --> AUTH["/auth"]
    USERS --> USERS_ID["/users/:id"]
    USERS_ID --> USERS_POSTS["/users/:id/posts"]
    USERS --> USERS_SEARCH["/users?role=admin"]
    POSTS --> POSTS_ID["/posts/:id"]
    POSTS_ID --> POSTS_COMMENTS["/posts/:id/comments"]
    AUTH --> AUTH_LOGIN["/auth/login"]
    AUTH --> AUTH_REFRESH["/auth/refresh"]
    AUTH --> AUTH_LOGOUT["/auth/logout"]

    style ROOT fill:#bbdefb,stroke:#0d47a1
    style AUTH fill:#ffe0b2,stroke:#e65100
    style USERS_POSTS fill:#c8e6c9,stroke:#1b5e20
    style POSTS_COMMENTS fill:#c8e6c9,stroke:#1b5e20
```

> [!NOTE]
> **REST Naming Convention:** Resources are **plural nouns** (`/users`, not `/user`). Relationships are expressed as **nested paths** (`/users/:id/posts`). Actions that don't map to CRUD use **verb sub-resources** (`/auth/login`).

---

## 4.5 Authentication Flow with JWT

```mermaid
sequenceDiagram
    autonumber
    participant C as Client SPA
    participant API as Auth API
    participant DB as User Database
    participant RS as Protected Resource

    C->>API: POST /auth/login (email, password)
    API->>DB: SELECT user WHERE email=? AND password_hash=?
    DB-->>API: user record
    API->>API: Verify bcrypt hash, generate JWT
    API-->>C: 200 OK { accessToken, refreshToken, expiresIn }

    Note over C: Store tokens in localStorage or HttpOnly cookie

    C->>RS: GET /api/profile (Authorization: Bearer <accessToken>)
    RS->>RS: Verify JWT signature & expiry
    RS-->>C: 200 OK + user profile data

    Note over C,RS: After expiresIn elapses...

    C->>API: POST /auth/refresh (refreshToken)
    API->>API: Validate refresh token, issue new accessToken
    API-->>C: 200 OK { accessToken: newToken }
```
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## PART A — 3-Mark Questions (Short Answer)

### **Question 1** `[KTU University Exam – July 2024]`
**(CO1, Remember)**

**Q: Define Database API. Differentiate between REST and GraphQL APIs in two points.**

**Model Answer:**

A **Database API** is a software intermediary that allows a web application to perform CRUD operations on a remote database via standardized HTTP requests, typically exchanging JSON payloads.

| Aspect | REST | GraphQL |
|---|---|---|
| Endpoint structure | Multiple endpoints per resource | Single `/graphql` endpoint |
| Data fetching | Fixed response shape | Client specifies required fields |

**[Award 1 mark for correct definition, 1 mark per valid differentiation point, capped at 2.]**

---

### **Question 2** `[KTU University Exam – Dec 2023]`
**(CO1, Understand)**

**Q: Explain the concept of statelessness in REST APIs. Why is it important for scalability?**

**Model Answer:**

**Statelessness** means that the server does **not** store any client session information between requests. Every HTTP request must contain all the information (authentication token, parameters, body) needed for the server to fulfill it.

**Importance for scalability:**
- Any server instance can handle any request → enables **horizontal scaling** behind a load balancer
- No session synchronization overhead between servers
- Failures are isolated — a crashed server can be replaced without losing session state

**[Award 1 mark for definition, 1 mark for statelessness principle, 1 mark for scalability justification.]**

---

## PART B — 14-Mark Questions (ESE Module Choice Pattern)

---

### **Question A** `[KTU University Exam – July 2024 Model Paper]`
**(CO1, CO2 — Understand & Apply)**

**Q: (a)** Explain the CRUD operations in REST APIs with a suitable example. Map each operation to its corresponding HTTP method and typical status code. **(7 marks)**

**(b)** Write a complete JavaScript SPA component using the Fetch API to perform a **GET** request to `https://api.example.com/products`, handle loading and error states, and render the product list as an HTML table. **(7 marks)**

---

#### **Solution to (a) — Conceptual Explanation with Tabular Mapping**

**CRUD** stands for **Create, Read, Update, Delete** — the four fundamental persistence operations supported by virtually every database system. In REST, these are mapped to HTTP methods as follows:

| CRUD | HTTP Method | URI Example | Body | Success Status |
|---|---|---|---|---|
| **Create** | `POST` | `/api/products` | New product JSON | **201 Created** |
| **Read** | `GET` | `/api/products/42` | None | **200 OK** |
| **Update (full)** | `PUT` | `/api/products/42` | Complete product JSON | **200 OK** |
| **Update (partial)** | `PATCH` | `/api/products/42` | Partial fields JSON | **200 OK** |
| **Delete** | `DELETE` | `/api/products/42` | None | **204 No Content** |

**Example Flow for Creating a Product:**

1. Client sends: `POST /api/products` with body `{"name":"Laptop","price":75000}`
2. Server validates, inserts into DB, returns: `201 Created` with `Location: /api/products/101` header and the new product JSON
3. Client updates its state and re-renders the UI

**Valuation Key:**
- [Listing CRUD operations: 2 Marks]
- [Mapping to HTTP methods: 2 Marks]
- [Providing example with status codes: 2 Marks]
- [Mentioning idempotency property: 1 Mark]

---

#### **Solution to (b) — Complete SPA Component**

```python
# Filename: ProductList.jsx
# A React component that fetches products and renders them as a table.

import React, { useState, useEffect } from "react";

const API_URL = "https://api.example.com/products";

function ProductList() {
    // --- State initialization ---
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- Data fetching lifecycle ---
    useEffect(() => {
        let isMounted = true;

        async function fetchProducts() {
            try {
                const response = await fetch(API_URL, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                });

                // Check HTTP status
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (isMounted) {
                    setProducts(data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchProducts();

        // Cleanup to prevent memory leaks
        return () => { isMounted = false; };
    }, []);  // empty deps: run once

    // --- Conditional rendering branches ---
    if (loading) {
        return <p>Loading products, please wait...</p>;
    }
    if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    return (
        <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price (₹)</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductList;
```

**Valuation Key for (b):**
- [Correct useState and useEffect setup: 2 Marks]
- [Proper Fetch call with headers: 1 Mark]
- [Error handling with try/catch and status check: 1 Mark]
- [Loading / Error / Success conditional renders: 1 Mark]
- [Table rendering with map and key prop: 1 Mark]
- [Cleanup function to prevent setState on unmounted component: 1 Mark]

---

### **Question B** `[KTU University Exam – Dec 2023 Model Paper]`
**(CO2, CO3 — Apply & Analyze)**

**Q: (a)** Discuss the role of JWT in securing RESTful Database APIs. Explain the structure of a JWT token with a suitable example. **(7 marks)**

**(b)** Design and implement a JavaScript module that performs **all four CRUD operations** (Create, Read, Update, Delete) on a `tasks` resource using async/await. Each function should include proper error handling and use the Fetch API. **(7 marks)**

---

#### **Solution to (a) — JWT Conceptual Explanation**

**JWT (JSON Web Token)** is a compact, URL-safe token format used for **stateless authentication** in REST APIs. It enables the server to verify the identity of a client without maintaining a session store.

**Three-Part Structure:**

A JWT is a string of the form `header.payload.signature` where each part is Base64URL-encoded.

**Example Token:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NSIsIm5hbWUiOiJBcmNoYSIsImlhdCI6MTcxOTg1OTIwMH0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

**Decoded Components:**

$$
\text{Header} = \text{base64decode}(\text{eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9})
$$
$$
= \{ \text{"alg": "HS256", "typ": "JWT"} \}
$$

$$
\text{Payload} = \text{base64decode}(\text{eyJzdWIiOiIxMjM0NSIsIm5hbWUiOiJBcmNoYSIsImlhdCI6MTcxOTg1OTIwMH0})
$$
$$
= \{ \text{"sub": "12345", "name": "Archa", "iat": 1719859200 \} }
$$

$$
\text{Signature} = \text{HMACSHA256}(\text{base64}(\text{Header}) + "." + \text{base64}(\text{Payload}), \text{secret\_key})
$$

**Role in Securing APIs:**
1. **Authentication** — Client sends `Authorization: Bearer <jwt>` header on every request
2. **Authorization** — Payload contains `role`/`permissions` claims for fine-grained access control
3. **Statelessness** — No server-side session table needed; horizontal scaling simplified
4. **Tamper-evidence** — Signature ensures payload cannot be modified without server's secret key

**Valuation Key:**
- [Defining JWT and statelessness: 2 Marks]
- [Three-part structure with formula: 2 Marks]
- [Worked example with header, payload, signature: 2 Marks]
- [Mentioning at least 2 security roles: 1 Mark]

---

#### **Solution to (b) — Full CRUD Module**

```python
# Filename: taskService.js
# Complete CRUD module for the 'tasks' resource.

const BASE_URL = "https://api.example.com/v1/tasks";

/* ---------- CREATE: POST /tasks ---------- */
async function createTask(taskData) {
    // --- Input validation ---
    if (!taskData || typeof taskData.title !== "string" || taskData.title.trim() === "") {
        throw new Error("Validation: task title is required");
    }

    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(taskData)
        });

        if (!response.ok) {
            const errBody = await response.json().catch(() => ({}));
            throw new Error(`Create failed [${response.status}]: ${errBody.message || "Unknown error"}`);
        }

        return await response.json();   // 201 Created returns the new task
    } catch (networkError) {
        console.error("[createTask]", networkError);
        throw networkError;
    }
}

/* ---------- READ: GET /tasks/:id ---------- */
async function getTaskById(taskId) {
    if (!Number.isInteger(taskId) || taskId <= 0) {
        throw new Error("Validation: taskId must be a positive integer");
    }

    try {
        const response = await fetch(`${BASE_URL}/${taskId}`, { method: "GET" });
        if (!response.ok) {
            throw new Error(`Fetch failed [${response.status}]`);
        }
        return await response.json();
    } catch (err) {
        console.error("[getTaskById]", err);
        throw err;
    }
}

/* ---------- READ ALL: GET /tasks ---------- */
async function getAllTasks() {
    try {
        const response = await fetch(BASE_URL, { method: "GET" });
        if (!response.ok) {
            throw new Error(`List failed [${response.status}]`);
        }
        return await response.json();
    } catch (err) {
        console.error("[getAllTasks]", err);
        throw err;
    }
}

/* ---------- UPDATE: PUT /tasks/:id ---------- */
async function updateTask(taskId, updatedData) {
    if (!updatedData || typeof updatedData !== "object") {
        throw new Error("Validation: updatedData object required");
    }

    try {
        const response = await fetch(`${BASE_URL}/${taskId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            throw new Error(`Update failed [${response.status}]`);
        }
        return await response.json();
    } catch (err) {
        console.error("[updateTask]", err);
        throw err;
    }
}

/* ---------- DELETE: DELETE /tasks/:id ---------- */
async function deleteTask(taskId) {
    try {
        const response = await fetch(`${BASE_URL}/${taskId}`, { method: "DELETE" });
        if (!response.ok) {
            throw new Error(`Delete failed [${response.status}]`);
        }
        // 204 No Content has no body
        if (response.status === 204) return { success: true, id: taskId };
        return await response.json();
    } catch (err) {
        console.error("[deleteTask]", err);
        throw err;
    }
}

// --- Export all functions ---
export {
    createTask,
    getTaskById,
    getAllTasks,
    updateTask,
    deleteTask
};
```

**Valuation Key for (b):**
- [CREATE function with POST and validation: 2 Marks]
- [READ (single and all) functions: 1.5 Marks]
- [UPDATE function with PUT and body serialization: 1.5 Marks]
- [DELETE function with 204 handling: 1 Mark]
- [Consistent try/catch error handling across all: 1 Mark]

---

> [!WARNING]
> **KTU Examiner's Valuation Pitfall Callout**
>
> **Common mistakes students make in Database API questions (cost: 2–4 marks per error):**
>
> 1. **Forgetting to handle 204 No Content** — calling `response.json()` on a 204 throws a `SyntaxError`. Always check status first.
> 2. **Using GET for state-changing operations** — GET requests must be **safe and idempotent**. Never put sensitive data in query strings (they appear in server logs).
> 3. **Missing CORS preflight awareness** — PUT/DELETE with `Content-Type: application/json` triggers a preflight `OPTIONS` request. Server must respond to OPTIONS or the request fails silently.
> 4. **Forgetting `await` on `fetch`** — `fetch` returns a Promise; the actual response is wrapped. Without `await`, you get the Promise object, not the data.
> 5. **Storing JWTs in `localStorage` for production apps** — vulnerable to XSS attacks. Use `HttpOnly` cookies for sensitive tokens.
> 6. **Not serializing the body** — `body: JSON.stringify(data)` is mandatory. Passing a raw object results in `[object Object]` in the request body.
> 7. **Mixing up PUT and PATCH** — PUT replaces the entire resource; PATCH applies partial changes. KTU examiners explicitly test this distinction.

---

## 📋 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — Database APIs in SPAs (Module 4)**

### 🔑 Core Definitions
- **Database API** = HTTP-based contract between SPA frontend and backend data store
- **SPA** = Single Page Application; loads one HTML shell, updates via DOM manipulation driven by API calls
- **REST** = Representational State Transfer; stateless, resource-oriented, cacheable
- **GraphQL** = Query language with single endpoint; client specifies response shape
- **JWT** = JSON Web Token = `header.payload.signature`, Base64URL encoded

### 🔢 HTTP Methods (Memorize the Table)
- **GET** → Read (safe, idempotent, cacheable, no body)
- **POST** → Create (non-idempotent, carries body, returns 201)
- **PUT** → Full update (idempotent, returns 200)
- **PATCH** → Partial update (returns 200)
- **DELETE** → Remove (idempotent, returns 204)

### 📊 Status Code Quick Reference
- **2xx** = Success (200 OK, 201 Created, 204 No Content)
- **4xx** = Client error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict)
- **5xx** = Server error (500 Internal Server Error, 503 Service Unavailable)

### ⚙️ Critical Implementation Rules
1. Always `await` the `fetch()` call — it returns a Promise
2. Always check `response.ok` before parsing — `ok` is `true` for status 200–299
3. Use `response.json()` to extract the body as a Promise<JSON>
4. Handle **204 No Content** separately (no body to parse)
5. Set `Content-Type: application/json` header when sending JSON
6. Use `AbortController` for timeout logic
7. Always use `try/catch/finally` with `setLoading(false)` in `finally` block
8. Include cleanup function in `useEffect` to prevent memory leaks
9. Use `Promise.all` for parallel independent API calls
10. JWT must be sent as `Authorization: Bearer <token>` header

### 🛡️ Security & Best Practices
- **Stateless auth** = JWT in `Authorization` header; server stores no session
- **CORS** = `Access-Control-Allow-Origin` header required for cross-origin requests
- **HTTPS/TLS** = mandatory for production APIs carrying credentials
- **Input validation** = always validate on both client (UX) and server (security)
- **Idempotency keys** = use for POST/PATCH to prevent duplicate writes on retry
- **Rate limiting** = protect against abuse; typically returns 429 Too Many Requests

### 🧮 Mathematical Relationships
- Parallel API time: $T_{\text{parallel}} = \max(T_1, T_2, \ldots, T_n)$
- Sequential API time: $T_{\text{sequential}} = \sum_{i=1}^{n} T_i$
- Retry backoff: $\text{delay}_n = 2^n \times 1000\text{ms}$ (exponential backoff)
- JWT structure: $\text{JWT} = H.P.S$ where $S = \text{HMACSHA256}(H + P, \text{secret})$

### 🏗️ Architectural Patterns
- **Three-State Async Pattern**: `Idle → Loading → (Success | Error | Timeout) → Idle`
- **Optimistic UI**: Update local state immediately, roll back on API failure
- **API Client Wrapper**: Centralize fetch logic with auth, retry, logging
- **Resource-based URL design**: Plural nouns, nested relationships, verb sub-resources for actions
<!-- SECTION_5_END -->
