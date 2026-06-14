# Working with databases  - Databases and Web Development

<!-- SECTION_1_START -->

# Working with Databases — Databases and Web Development

## 1.1 Formal Definition (KTU 2024 Scheme Terminology)

In the context of **Web Programming** and **Single Page Applications (SPA)**, a **database** is a logically organized, persistent collection of structured (or semi-structured) data, managed by a **Database Management System (DBMS)**, that enables web clients to perform the four fundamental data operations — **Create, Read, Update, Delete (CRUD)** — through well-defined interfaces such as **REST APIs**, **GraphQL endpoints**, or direct driver calls.

For a SPA, the database layer sits *behind* a backend service. The browser never speaks to the database directly (except in special cases like **Firebase** or **IndexedDB**); instead, it issues **HTTP requests** to an API layer, which translates those requests into database queries.

> [!IMPORTANT]
> **KTU Syllabus Highlight (Module 4 — SPA Basics):**
> A SPA is decoupled, asynchronous, and data-driven. The database is the *source of truth* that the SPA hydrates from, mutates against, and synchronizes back to. Three access patterns are emphasised:
> 1. **Server-side relational databases** (MySQL, PostgreSQL) accessed via Node.js/PHP/Python APIs.
> 2. **Server-side document databases** (MongoDB) accessed via ODM libraries.
> 3. **Client-side embedded databases** (IndexedDB, WebSQL deprecated) for offline-first SPAs.

> [!NOTE]
> **Core Definition — CRUD**
> **C**reate, **R**ead, **U**pdate, **D**elete are the four persistent-state operations every web database interaction must support. They map directly to HTTP verbs: **POST**, **GET**, **PUT/PATCH**, and **DELETE**.

## 1.2 Conceptual Analogy — The Library System

Imagine a modern public library:

| Library Element | Web / Database Counterpart |
| :--- | :--- |
| The building and shelves | The **database server** (stores the actual data files) |
| The librarian at the desk | The **API layer** (e.g., Express, Django REST) |
| The card catalogue / computer system | The **DBMS** (MySQL, MongoDB) |
| A patron asking for a book | The **SPA frontend** issuing an HTTP request |
| The library's borrowing rules | The **schema**, **validations**, and **constraints** |
| The receipt handed back | The **JSON response** payload |

The patron (the browser) does **not** walk into the stacks themselves. They ask the librarian (the API), who fetches the book (the data row/document) and returns a copy (JSON). This indirection is what makes the system **secure**, **scalable**, and **maintainable** — exactly why SPAs use an API layer between the browser and the database.

## 1.3 Key Physical and Engineering Constants

> [!IMPORTANT]
> **Standard HTTP Status Codes (must be memorised for KTU exams):**
> - **200 OK** — Successful read.
> - **201 Created** — Successful insert (POST).
> - **204 No Content** — Successful delete.
> - **400 Bad Request** — Client validation failure.
> - **401 Unauthorized** — Missing/invalid auth token.
> - **404 Not Found** — Resource missing.
> - **409 Conflict** — Duplicate key / unique constraint violation.
> - **500 Internal Server Error** — Server / database fault.

The standard default port for **MySQL** is **3306**, for **PostgreSQL** is **5432**, and for **MongoDB** is **27017**.

> [!VISUALIZATION CONTROL]
> **Concept:** Three-tier SPA → API → Database data flow with status-code return path.
> **GeoGebra / Desmos Input Equations:** *(Not applicable — this is a topology diagram, best rendered as a flowchart in Mermaid; see Section 4.)*
> **Visual Description:** Imagine three stacked horizontal bars. The top bar is the **Browser/SPA** layer. The middle bar is the **API Server** (Node/Express). The bottom bar is the **Database** (cylinder icon). Arrows descend on the request path labelled *POST /users*, *GET /products*, etc., and ascend on the response path labelled *200 OK*, *201 Created*, etc.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Cheat Sheet

## 2.1 The Three-Tier Web Architecture (Why Databases Exist in Web Apps)

Modern web applications are built on a **three-tier architecture**:

1. **Presentation Tier** — The SPA running in the browser (React, Vue, Angular, vanilla JS).
2. **Application Tier** — A backend service exposing HTTP endpoints.
3. **Data Tier** — The database engine persisting state.

The **separation of concerns** between these tiers is what allows:
- Multiple frontends (mobile + web) to share one database.
- Horizontal scaling of the API layer without touching the DB.
- Schema migrations independent of UI releases.

## 2.2 SQL vs NoSQL — The Strategic Decision

| Property | SQL (Relational) | NoSQL (Document / Key-Value) |
| :--- | :--- | :--- |
| Data model | Tables with rigid schemas | JSON-like flexible documents |
| Schema | Fixed, defined via DDL | Schema-less or schema-on-read |
| Scaling | Vertical (scale up) | Horizontal (scale out via sharding) |
| Transactions | Full **ACID** | Eventual consistency (BASE) by default |
| Best for | Banking, ERP, inventory | Catalogs, IoT, social feeds, analytics |
| Examples | MySQL, PostgreSQL, SQLite | MongoDB, CouchDB, Firebase Realtime DB |
| Query language | **SQL** (Structured Query Language) | API-specific (MongoDB Query Language) |

> [!NOTE]
> **ACID** — Atomicity, Consistency, Isolation, Durability. The four guarantees a relational DB provides for every transaction.
> **BASE** — Basically Available, Soft state, Eventual consistency. The trade-off NoSQL systems make for horizontal scale.

## 2.3 CRUD → HTTP Mapping (The Most Tested Concept)

| CRUD Operation | HTTP Verb | Idempotent? | Typical URL Pattern | Success Code |
| :--- | :--- | :--- | :--- | :--- |
| Create | **POST** | No | `/api/resource` | **201** |
| Read (one) | **GET** | Yes | `/api/resource/\:id` | **200** |
| Read (all) | **GET** | Yes | `/api/resource` | **200** |
| Update (full) | **PUT** | Yes | `/api/resource/\:id` | **200** |
| Update (partial) | **PATCH** | No | `/api/resource/\:id` | **200** |
| Delete | **DELETE** | Yes | `/api/resource/\:id` | **204** |

> [!IMPORTANT]
> **Idempotence** means the operation produces the *same result* no matter how many times it is repeated. **GET**, **PUT**, and **DELETE** must be idempotent by HTTP spec; **POST** and **PATCH** are not guaranteed to be.

## 2.4 Client-Side Storage — The SPA's Local Database

Because SPAs are decoupled and may go offline, the browser offers three built-in storage layers:

| Storage | Capacity | API Style | Persistent? | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Cookies** | ~4 KB | Synchronous key-value | Yes | Auth tokens, small flags |
| **localStorage** | ~5–10 MB | Synchronous key-value | Yes | User preferences, theme |
| **sessionStorage** | ~5–10 MB | Synchronous key-value | Per tab | Wizard step data |
| **IndexedDB** | Up to **60%** of disk | Async, transactional, object-store based | Yes | Offline-first apps, large caches |

> [!NOTE]
> **IndexedDB** is the only true *database* in the browser. It supports indexes, cursors, transactions, and object stores. It is the foundation of **Progressive Web Apps (PWAs)**.

## 2.5 KTU Formula Sheet / Cheat Sheet

> [!IMPORTANT]
> The following table is the **consolidated reference** for any database question in Module 4.

| Concept | Symbol / Syntax | Definition | Unit / Value |
| :--- | :--- | :--- | :--- |
| CRUD mapping | $C \rightarrow POST$, $R \rightarrow GET$, $U \rightarrow PUT$, $D \rightarrow DELETE$ | HTTP verb for each persistence op | — |
| ACID | $A, C, I, D$ | Transaction guarantees | Qualitative |
| HTTP 2xx success | $200, 201, 204$ | OK, Created, No Content | — |
| HTTP 4xx client err | $400, 401, 403, 404, 409$ | Bad Req, Unauth, Forbidden, Not Found, Conflict | — |
| HTTP 5xx server err | $500, 502, 503$ | Server err, Bad gw, Unavailable | — |
| MySQL default port | $3306$ | TCP port | Integer |
| MongoDB default port | $27017$ | TCP port | Integer |
| PostgreSQL default port | $5432$ | TCP port | Integer |
| IndexedDB transaction mode | $readonly \mid readwrite$ | Transaction scope | Enum |
| Connection string (Mongo) | `mongodb://host:port/db` | DSN | String |
| Connection string (SQL) | `mysql://user\:pass\@host:3306/db` | DSN | String |
| ObjectId (Mongo) | 12-byte hex | Primary key | $24$ hex chars |
| Status return tuple | $(code, payload)$ | API response shape | JSON |

## 2.6 Real-World Engineering Utility

- **E-commerce sites** (Amazon, Flipkart) use **relational** DBs for orders/inventory and **NoSQL** (DynamoDB) for the product catalog and session carts.
- **Social feeds** (Twitter/X timelines) use **NoSQL wide-column stores** (Cassandra) for write-heavy fan-out.
- **Offline-first PWAs** (Notion, Google Docs) use **IndexedDB** as a local mirror of the server DB, syncing via background CRDTs or last-write-wins.
- **Banking apps** rely on **ACID** SQL transactions — a money transfer *must* debit one account and credit another atomically.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Implementation — Node.js + Express + MongoDB

> [!NOTE]
> The following is a **complete, runnable, production-quality** REST API that exposes CRUD operations on a `products` collection in MongoDB. Every line is explicit. The frontend SPA then consumes this API using the `fetch` API. Finally, an IndexedDB example is provided for offline caching.

## 3.1 Backend — `server.js`

```javascript
// server.js
// A complete Express + Mongoose REST API for a SPA's product catalog.
// Run: node server.js  (MongoDB must be running on localhost:27017)

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

// --- 1. Strict schema definition with validation -----------------------
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [120, "Name cannot exceed 120 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, "Stock cannot be negative"],
    },
    category: {
      type: String,
      enum: ["electronics", "books", "clothing", "food", "other"],
      default: "other",
    },
  },
  { timestamps: true } // adds createdAt and updatedAt automatically
);

const Product = mongoose.model("Product", productSchema);

// --- 2. Express application setup --------------------------------------
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = "mongodb://127.0.0.1:27017/spa_catalog";

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// --- 3. CREATE — POST /api/products ------------------------------------
app.post("/api/products", async (req, res, next) => {
  try {
    const created = await Product.create(req.body);
    return res.status(201).json({
      success: true,
      data: created,
    });
  } catch (err) {
    return next(err); // forwarded to the central error handler
  }
});

// --- 4. READ ALL — GET /api/products -----------------------------------
app.get("/api/products", async (req, res, next) => {
  try {
    const items = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (err) {
    return next(err);
  }
});

// --- 5. READ ONE — GET /api/products/:id -------------------------------
app.get("/api/products/:id", async (req, res, next) => {
  try {
    const item = await Product.findById(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }
    return res.status(200).json({ success: true, data: item });
  } catch (err) {
    return next(err);
  }
});

// --- 6. UPDATE — PUT /api/products/:id ---------------------------------
app.put("/api/products/:id", async (req, res, next) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true, context: "query" }
    );
    if (!updated) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }
    return res.status(200).json({ success: true, data: updated });
  } catch (err) {
    return next(err);
  }
});

// --- 7. DELETE — DELETE /api/products/:id ------------------------------
app.delete("/api/products/:id", async (req, res, next) => {
  try {
    const removed = await Product.findByIdAndDelete(req.params.id);
    if (!removed) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }
    return res.status(204).send();
  } catch (err) {
    return next(err);
  }
});

// --- 8. Centralised error-handling middleware --------------------------
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error("[SERVER ERROR]", err);
  // Duplicate-key (Mongo error code 11000)
  if (err && err.code === 11000) {
    return res.status(409).json({
      success: false,
      error: "Duplicate key violation",
    });
  }
  // Mongoose validation error
  if (err && err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
  // CastError — invalid ObjectId
  if (err && err.name === "CastError") {
    return res.status(400).json({
      success: false,
      error: `Invalid identifier: ${err.value}`,
    });
  }
  return res.status(500).json({
    success: false,
    error: "Internal server error",
  });
});

// --- 9. Database connection and server boot ----------------------------
async function bootstrap() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`[DB] Connected to MongoDB at ${MONGO_URI}`);
    app.listen(PORT, () => {
      console.log(`[API] Listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("[BOOT FAILURE]", err);
    process.exit(1);
  }
}

bootstrap();
```

**Line-by-line reasoning:**

- Lines 1–4 import the four dependencies: `express` (HTTP server), `mongoose` (MongoDB ODM), `cors` (cross-origin permission for the SPA), `morgan` (request logging).
- Lines 7–36 define a **strict schema**. The `required`, `min`, `max`, and `enum` validators reject bad input at the DB layer, so the API never has to second-guess.
- `{ timestamps: true }` automatically maintains `createdAt` and `updatedAt` — useful for sorting and auditing.
- Line 47 enables JSON body parsing so `req.body` is a real object.
- Lines 51–61 implement **CREATE**. `Product.create(req.body)` returns a Promise; on success we return **201 Created** with the new document.
- Lines 64–75 implement **READ ALL**, sorted newest-first.
- Lines 78–92 implement **READ ONE** with explicit **404** when the document does not exist.
- Lines 95–115 implement **UPDATE** with `{ new: true }` (return the post-update doc) and `runValidators: true` (re-validate on update).
- Lines 118–130 implement **DELETE**, returning **204 No Content** on success.
- Lines 133–161 implement a **centralised error handler** that maps MongoDB error codes (`11000` for duplicate, `CastError` for bad ObjectId, `ValidationError` for schema failure) to the correct HTTP status codes.
- Lines 164–174 connect to MongoDB and start the listener; on boot failure the process exits with code `1`.

## 3.2 Frontend SPA — `app.js` (Vanilla JS + `fetch`)

```javascript
// app.js  —  The SPA's data layer
// Talks to the Express API defined in server.js.

const API_BASE = "http://localhost:3000/api/products";

// --- Type definitions for clarity ---------------------------------------
/** @typedef {{ _id:string, name:string, price:number, stock:number, category:string }} Product */

/** Centralised error logger.
 *  @param {Error} err
 */
function logError(err) {
  console.error("[API CALL FAILED]", err);
  throw err;
}

// --- CREATE -------------------------------------------------------------
/** @param {Omit<Product, "_id">} payload @returns {Promise<Product>} */
export async function createProduct(payload) {
  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    return logError(err);
  }
}

// --- READ ALL -----------------------------------------------------------
/** @returns {Promise<Product[]>} */
export async function listProducts() {
  try {
    const res = await fetch(API_BASE, { method: "GET" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    return logError(err);
  }
}

// --- READ ONE ------------------------------------------------------------
/** @param {string} id @returns {Promise<Product>} */
export async function getProduct(id) {
  try {
    const res = await fetch(`${API_BASE}/${encodeURIComponent(id)}`, {
      method: "GET",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    return logError(err);
  }
}

// --- UPDATE --------------------------------------------------------------
/** @param {string} id @param {Partial<Product>} patch @returns {Promise<Product>} */
export async function updateProduct(id, patch) {
  try {
    const res = await fetch(`${API_BASE}/${encodeURIComponent(id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    return logError(err);
  }
}

// --- DELETE --------------------------------------------------------------
/** @param {string} id @returns {Promise<void>} */
export async function deleteProduct(id) {
  try {
    const res = await fetch(`${API_BASE}/${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return; // 204 — no body
  } catch (err) {
    return logError(err);
  }
}
```

**Reasoning for the SPA layer:**

- Every function returns a **Promise** so the UI layer can `await` and render after the data arrives.
- `encodeURIComponent` is used on the `id` segment so special characters in the ObjectId never break the URL.
- `if (!res.ok)` is the SPA's *defensive boundary check* — it throws on any non-2xx response so the caller can render an error toast.
- Errors are logged centrally via `logError` and re-thrown so the UI can decide whether to retry, show a banner, or roll back optimistic state.

## 3.3 Client-Side Database — IndexedDB Cache

```javascript
// idb-cache.js
// Wraps IndexedDB in a tiny Promise-based API for offline caching.

const DB_NAME = "spa-offline-cache";
const DB_VERSION = 1;
const STORE = "products";

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (ev) => {
      const db = ev.target.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: "_id" });
        store.createIndex("category", "category", { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

/** Save a list of products in one transaction.
 *  @param {Array<object>} products
 */
export async function cacheProducts(products) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    const store = tx.objectStore(STORE);
    products.forEach((p) => store.put(p));   // upsert
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/** @returns {Promise<object[]>} */
export async function readCachedProducts() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const store = tx.objectStore(STORE);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

/** @param {string} id */
export async function deleteCachedProduct(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
```

**Reasoning for IndexedDB usage:**

- The `onupgradeneeded` event runs **only** when the version increases; this is the *only* place schema changes may be applied.
- `keyPath: "_id"` makes the MongoDB ObjectId the primary key, so `put()` becomes an idempotent upsert.
- The read pattern is `readonly` to permit concurrent readers, and the write pattern is `readwrite` to commit a batch atomically.
- Wrapping the raw event-based API in Promises makes it consumable by `async/await` UI code.

## 3.4 Derivation: Why `fetch` over `XMLHttpRequest`?

> [!IMPORTANT]
> The browser `fetch` API is preferred in modern SPAs because:
> 1. It is **Promise-based** — natively composable with `async/await`.
> 2. It supports **streaming** request and response bodies.
> 3. It is part of the **Service Worker** spec, so it works in offline contexts.
> 4. It has a clean **Headers** and **Request** abstraction that mirrors the HTTP spec.

The trade-off is that `fetch` does **not** reject on HTTP 4xx/5xx — it only rejects on network failure. That is why the SPA layer above explicitly checks `res.ok` before parsing the body.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 Three-Tier SPA Architecture (Request + Response)

```mermaid
flowchart LR
    subgraph clientTier["Presentation Tier - Browser"]
        spa["SPA Frontend<br/>React or Vue or Vanilla JS"]
        cache["IndexedDB Cache<br/>Client-Side Database"]
    end

    subgraph apiTier["Application Tier - Node Server"]
        router["Express Router<br/>api slash products"]
        orm["Mongoose ODM<br/>Schema and Validators"]
    end

    subgraph dataTier["Data Tier - MongoDB"]
        coll["Collection products<br/>BSON Documents"]
    end

    spa -- "HTTP GET slash api slash products" --> router
    spa -. "fallback when offline" .-> cache
    router --> orm
    orm -- "find query" --> coll
    coll -- "BSON array" --> orm
    orm -- "JSON" --> router
    router -- "200 OK plus payload" --> spa
    spa -- "hydrate IndexedDB" --> cache
```

## 4.2 CRUD Operation Flow (Sequential Processing Topology)

```mermaid
flowchart TD
    subgraph createFlow["CREATE - POST"]
        c1["Client sends POST slash api slash products"]
        c2["Express parses JSON body"]
        c3["Mongoose validates schema"]
        c4["Insert document into collection"]
        c5["Return 201 Created plus document"]
        c1 --> c2 --> c3 --> c4 --> c5
    end

    subgraph readFlow["READ - GET"]
        r1["Client sends GET slash api slash products slash id"]
        r2["Mongoose findById query"]
        r3{"Document exists?"}
        r4["Return 200 plus document"]
        r5["Return 404 Not Found"]
        r1 --> r2 --> r3
        r3 -- yes --> r4
        r3 -- no  --> r5
    end

    subgraph updateFlow["UPDATE - PUT"]
        u1["Client sends PUT with patch"]
        u2["findByIdAndUpdate with validators"]
        u3{"Updated?"}
        u4["Return 200 plus updated doc"]
        u5["Return 404 or 400"]
        u1 --> u2 --> u3
        u3 -- yes --> u4
        u3 -- no  --> u5
    end

    subgraph deleteFlow["DELETE - DELETE"]
        d1["Client sends DELETE slash api slash products slash id"]
        d2["findByIdAndDelete"]
        d3{"Deleted?"}
        d4["Return 204 No Content"]
        d5["Return 404 Not Found"]
        d1 --> d2 --> d3
        d3 -- yes --> d4
        d3 -- no  --> d5
    end
```

## 4.3 Client-Side IndexedDB Transaction Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Opening: openDB call
    Opening --> SchemaUpgrade: versionchange event
    SchemaUpgrade --> Opening
    Opening --> Ready: onsuccess
    Ready --> ReadOnlyTX: getAll request
    Ready --> ReadWriteTX: put or delete request
    ReadOnlyTX --> Ready: oncomplete
    ReadWriteTX --> Committed: oncomplete
    ReadWriteTX --> Aborted: onerror
    Committed --> Ready
    Aborted --> Ready
    Ready --> Closed: db.close
    Closed --> [*]
```

## 4.4 SQL versus NoSQL Decision Matrix (Block Architecture)

```mermaid
flowchart TB
    subgraph relational["Relational Tier - SQL"]
        sql1["Rigid schema - DDL enforced"]
        sql2["Joins across normalised tables"]
        sql3["ACID transactions"]
        sql4["Vertical scaling"]
    end

    subgraph document["Document Tier - NoSQL"]
        nosql1["Flexible JSON documents"]
        nosql2["Embedded sub-documents or references"]
        nosql3["BASE - eventual consistency"]
        nosql4["Horizontal scaling via sharding"]
    end

    appReq["Application Requirement"] --> q1{"Structured data<br/>and joins required?"}
    q1 -- yes --> relational
    q1 -- no  --> q2{"Schema changes often?"}
    q2 -- yes --> document
    q2 -- no  --> relational
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank

## Part A — Short Answer Questions (3 Marks Each)

### Question 1 `[KTU University Exam - July 2024]` — CO1, Remember
**Explain the four CRUD operations and map each to its corresponding HTTP method.**

**Model Answer (3 Marks):**

- **Create** → **POST /api/resource** — Inserts a new resource. Returns **201 Created** on success. *(1 Mark)*
- **Read** → **GET /api/resource** or **GET /api/resource/:id** — Fetches one or many resources. Returns **200 OK**. Idempotent. *(1 Mark)*
- **Update** → **PUT /api/resource/:id** (full replace) or **PATCH /api/resource/:id** (partial). Returns **200 OK**. *(0.5 Mark)*
- **Delete** → **DELETE /api/resource/:id** — Removes a resource. Returns **204 No Content**. Idempotent. *(0.5 Mark)*

---

### Question 2 `[KTU University Exam - Dec 2023]` — CO1, Understand
**Differentiate between SQL and NoSQL databases. Give one example of each.**

**Model Answer (3 Marks):**

| Property | SQL | NoSQL |
| :--- | :--- | :--- |
| Data model | Tables with fixed schema | Documents, key-value, columnar, graph |
| Schema | Rigid (defined via DDL) | Dynamic / schema-less |
| Scaling | Vertical | Horizontal (sharding) |
| Transactions | ACID compliant | BASE (eventual consistency) |
| Query language | SQL | API-specific (e.g., MQL) |
| Example | **MySQL** *(0.5 Mark)* | **MongoDB** *(0.5 Mark)* |

Conceptual justification of why one is chosen over the other for a SPA product catalog: *(2 Marks)*

---

## Part B — Long Answer Questions (14 Marks, Internal Choice)

### Question A (14 Marks) `[KTU University Exam - July 2024]` — CO2, Apply

**(a)** Design a **REST API in Node.js + Express** to manage a `books` collection in MongoDB. Provide the full code for the `POST /api/books` and `GET /api/books/:id` endpoints with proper validation, error handling, and status codes. *(7 Marks)*

**(b)** Write the **client-side `fetch` function** in a SPA that calls the above endpoints. Show how the SPA handles the **201 Created**, **404 Not Found**, and **500 Internal Server Error** responses. *(7 Marks)*

---

#### (a) Model Solution — Backend (7 Marks)

```javascript
// books.js  —  Backend model and routes
import express from "express";
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is required"], trim: true },
  author: { type: String, required: [true, "Author is required"], trim: true },
  isbn: {
    type: String,
    required: [true, "ISBN is required"],
    unique: true,
    match: [/^\d{10}(\d{3})?$/, "ISBN must be 10 or 13 digits"],
  },
  price: { type: Number, required: true, min: [0, "Price cannot be negative"] },
  publishedYear: {
    type: Number,
    min: [1450, "Year must be after 1450"],
    max: [new Date().getFullYear(), "Year cannot be in the future"],
  },
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);
const router = express.Router();

// --- POST /api/books ---------------------------------------------------
router.post("/api/books", async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    return res.status(201).json({ success: true, data: book });
  } catch (err) {
    return next(err);
  }
});

// --- GET /api/books/:id ------------------------------------------------
router.get("/api/books/:id", async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ success: false, error: "Book not found" });
    }
    return res.status(200).json({ success: true, data: book });
  } catch (err) {
    return next(err);
  }
});

// --- Centralised error handler -----------------------------------------
router.use((err, req, res, next) => {
  if (err && err.code === 11000) {
    return res.status(409).json({ success: false, error: "Duplicate ISBN" });
  }
  if (err && err.name === "ValidationError") {
    return res.status(400).json({ success: false, error: err.message });
  }
  if (err && err.name === "CastError") {
    return res.status(400).json({ success: false, error: "Invalid book ID" });
  }
  return res.status(500).json({ success: false, error: "Internal server error" });
});

export default router;
```

**Valuation Key:**
- [Schema with `required`, `unique`, regex `match`, `min`, `max` validators: 2 Marks]
- [POST endpoint returning 201 with the created document: 1 Mark]
- [GET-by-ID endpoint with explicit 404 branch: 1 Mark]
- [Centralised error handler covering 11000, ValidationError, CastError, 500 fallback: 2 Marks]
- [Code quality, naming, and use of async/await: 1 Mark]

---

#### (b) Model Solution — SPA Client (7 Marks)

```javascript
// books-api.js  —  Client-side wrapper
const BASE = "http://localhost:3000/api/books";

/** @param {{ title:string, author:string, isbn:string, price:number, publishedYear:number }} payload */
export async function createBook(payload) {
  try {
    const res = await fetch(BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.status === 201) {
      const json = await res.json();
      console.log("Book created with id:", json.data._id);
      return json.data;
    }
    if (res.status === 400) {
      const json = await res.json();
      showToast(`Validation error: ${json.error}`);
      return null;
    }
    if (res.status === 409) {
      const json = await res.json();
      showToast(`Duplicate ISBN: ${json.error}`);
      return null;
    }
    if (res.status >= 500) {
      showToast("Server error — please try again later");
      return null;
    }
    throw new Error(`Unexpected status ${res.status}`);
  } catch (err) {
    showToast(`Network failure: ${err.message}`);
    return null;
  }
}

/** @param {string} id */
export async function getBook(id) {
  try {
    const res = await fetch(`${BASE}/${encodeURIComponent(id)}`);
    if (res.status === 200) {
      const json = await res.json();
      return json.data;
    }
    if (res.status === 404) {
      showToast("That book does not exist in the catalog");
      return null;
    }
    if (res.status >= 500) {
      showToast("Server error — please retry");
      return null;
    }
    throw new Error(`Unexpected status ${res.status}`);
  } catch (err) {
    showToast(`Network failure: ${err.message}`);
    return null;
  }
}

// Stub UI helper
function showToast(msg) {
  const el = document.getElementById("toast");
  if (el) el.textContent = msg;
}
```

**Valuation Key:**
- [Correct HTTP method, headers, JSON body for POST: 1 Mark]
- [Explicit handling of 201 success branch: 1 Mark]
- [Explicit handling of 400 / 409 / 5xx failure branches: 2 Marks]
- [Use of `encodeURIComponent` on the path id segment: 1 Mark]
- [try/catch wrapping the entire `fetch` for network failure: 1 Mark]
- [UI feedback via `showToast` helper: 1 Mark]

---

### Question B (14 Marks) `[KTU University Exam - Dec 2023]` — CO2, Apply (Alternative Choice)

**(a)** Explain the **three-tier web architecture**. Draw a labelled block diagram showing the **Presentation Tier**, **Application Tier**, and **Data Tier**, and describe the role of each tier with respect to a SPA. *(7 Marks)*

**(b)** Write a complete **IndexedDB program** in JavaScript that creates a database named `spa_notes`, an object store named `notes` with `id` as the key path, and implements `addNote`, `getAllNotes`, and `deleteNote` functions using Promise wrappers. *(7 Marks)*

---

#### (a) Model Solution — Three-Tier Architecture (7 Marks)

**Tier 1 — Presentation Tier (Browser / SPA):**
- Runs JavaScript code in the user's browser (React, Vue, Angular, or vanilla).
- Renders the user interface and captures user input.
- Communicates *only* with the Application Tier over HTTP/JSON.
- Holds client-side state in memory and may cache data in IndexedDB. *(1.5 Marks)*

**Tier 2 — Application Tier (Backend API):**
- A server (Node.js/Express, Django, Spring, etc.) exposing REST endpoints.
- Validates input, enforces business rules, handles authentication.
- Translates HTTP requests into database queries via an ORM/ODM.
- Returns JSON responses with proper status codes. *(1.5 Marks)*

**Tier 3 — Data Tier (Database):**
- The DBMS (MySQL, PostgreSQL, MongoDB, etc.) that persists data.
- Enforces schema constraints, indexes, and ACID/BASE guarantees.
- May be replicated and sharded for availability. *(1 Mark)*

**Labelled Block Diagram (render as figure in answer sheet):**

```
+-----------------------------------+
| PRESENTATION TIER (Browser)       |
| - SPA: React / Vue / Vanilla JS   |
| - IndexedDB cache                 |
+-----------------+-----------------+
                  |  HTTP / JSON
                  v
+-----------------+-----------------+
| APPLICATION TIER (Node Server)    |
| - Express Router                  |
| - Mongoose ODM / Business Logic   |
+-----------------+-----------------+
                  |  MongoDB Wire Protocol
                  v
+-----------------------------------+
| DATA TIER (MongoDB)               |
| - Collection: products            |
| - Documents: BSON                 |
+-----------------------------------+
```

*(Block diagram: 2 Marks, Tier descriptions: 5 Marks)*

**Valuation Key:**
- [Clear three-tier separation in diagram: 2 Marks]
- [Role of Presentation Tier: 1.5 Marks]
- [Role of Application Tier: 1.5 Marks]
- [Role of Data Tier: 1 Mark]
- [Naming of concrete technologies per tier: 1 Mark]

---

#### (b) Model Solution — IndexedDB Program (7 Marks)

```javascript
// idb-notes.js  —  Promise-wrapped IndexedDB for an offline notes cache
const DB_NAME = "spa_notes";
const DB_VERSION = 1;
const STORE = "notes";

function openNotesDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = (ev) => {
      const db = ev.target.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "id", autoIncrement: true });
      }
    };

    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

/** @param {{ title:string, body:string }} note @returns {Promise<number>} */
export async function addNote(note) {
  const db = await openNotesDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    const store = tx.objectStore(STORE);
    const req = store.add(note);
    req.onsuccess = () => resolve(req.result); // returns the new auto id
    req.onerror = () => reject(req.error);
  });
}

/** @returns {Promise<Array<{id:number, title:string, body:string}>>} */
export async function getAllNotes() {
  const db = await openNotesDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

/** @param {number} id @returns {Promise<void>} */
export async function deleteNote(id) {
  const db = await openNotesDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
```

**Valuation Key:**
- [`onupgradeneeded` correctly creates the object store with `keyPath: "id"`: 2 Marks]
- [`addNote` uses `readwrite` transaction and returns the new key: 1.5 Marks]
- [`getAllNotes` uses `readonly` transaction and `getAll()`: 1.5 Marks]
- [`deleteNote` uses `readwrite` and resolves on `oncomplete`: 1 Mark]
- [Error propagation and Promise wrapping: 1 Mark]

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls in Database Questions**
>
> 1. **Do not return 200 OK for a successful POST.** The HTTP spec mandates **201 Created** when a new resource is created. Returning 200 is a **2-mark penalty** in valuation.
> 2. **Do not skip writing the centralised error-handling middleware.** Many students stop at the route handler and forget to map MongoDB error codes (`11000`, `CastError`, `ValidationError`) to HTTP statuses. This loses **2–3 marks**.
> 3. **Do not write `mongoose.connect("mongodb://localhost:27017/db")` without `await`.** A connection that is not awaited will cause race conditions, and the examiner will deduct a mark for "missing async handling".
> 4. **Do not use synchronous `localStorage` and call it a "database".** `localStorage` is *key-value storage*; only **IndexedDB** qualifies as a true *database* in the browser. Misclassification loses a mark.
> 5. **Always quote the keys inside Mermaid node labels** if they contain spaces, colons, or slashes. Unquoted labels with `:` break the parser — the diagram will not render in the answer sheet, and the examiner cannot award the diagram mark.
> 6. **Always include `runValidators: true`** in `findByIdAndUpdate` — without it, schema rules are bypassed on updates, and you lose 1 mark.
> 7. **For IndexedDB questions, never forget `onupgradeneeded`.** It is the *only* place to create or alter object stores. Forgetting it makes the database unusable, costing up to **2 marks**.

---

## Topic Recap & Important Things to Remember

- **Database** in web development = persistent storage managed by a DBMS, accessed by an API.
- **Three-tier architecture** = Presentation (SPA) $\rightarrow$ Application (API) $\rightarrow$ Data (DB).
- **CRUD mapping**: Create $\rightarrow$ POST (201), Read $\rightarrow$ GET (200), Update $\rightarrow$ PUT/PATCH (200), Delete $\rightarrow$ DELETE (204).
- **ACID** = Atomicity, Consistency, Isolation, Durability — guaranteed by SQL DBs.
- **BASE** = Basically Available, Soft state, Eventual consistency — typical of NoSQL.
- **SQL examples**: MySQL (port **3306**), PostgreSQL (port **5432**), SQLite.
- **NoSQL examples**: MongoDB (port **27017**), CouchDB, Firebase Realtime DB.
- **Client-side storage hierarchy**: Cookies $\rightarrow$ localStorage / sessionStorage $\rightarrow$ IndexedDB.
- **IndexedDB** is the only true client-side *database* (object stores, indexes, transactions).
- **Idempotent** verbs: **GET, PUT, DELETE**. Non-idempotent: **POST, PATCH**.
- **HTTP 4xx** = client's fault; **HTTP 5xx** = server's fault; **HTTP 2xx** = success.
- **Mongoose schema validators**: `required`, `unique`, `min`, `max`, `enum`, `match`.
- **MongoDB error codes**: `11000` (duplicate key) $\rightarrow$ 409; `CastError` (bad ObjectId) $\rightarrow$ 400; `ValidationError` $\rightarrow$ 400.
- **`fetch` does not reject on 4xx/5xx** — the SPA must explicitly check `res.ok` or `res.status`.
- **`encodeURIComponent`** must wrap dynamic path segments like `/:id` to prevent URL injection.
- **Centralised error middleware** must be the *last* `app.use` in Express so it can catch errors from all preceding routes.
- **IndexedDB lifecycle**: `open` $\rightarrow$ `onupgradeneeded` (schema) $\rightarrow$ `onsuccess` (ready) $\rightarrow$ `transaction` $\rightarrow$ `oncomplete` / `onerror`.
- **Service Workers** can intercept `fetch` and serve IndexedDB-cached responses for offline-first SPAs.
- **ObjectId** in MongoDB is a 12-byte hex value (24 hex characters) acting as the default `_id` primary key.

<!-- SECTION_5_END -->
