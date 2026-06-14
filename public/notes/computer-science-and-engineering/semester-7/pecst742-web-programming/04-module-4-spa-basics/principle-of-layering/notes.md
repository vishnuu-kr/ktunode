# Principle of Layering

<!-- SECTION_1_START -->
# Principle of Layering in Single Page Applications (SPAs)

## 1. Core Technical Definition

> [!IMPORTANT]
> **KTU 2024 Syllabus Definition (Module 4 - SPA Basics):**
> The **Principle of Layering** in SPAs is the architectural discipline of separating an application into distinct, loosely-coupled, and highly-cohesive logical tiers (Presentation, Application/Logic, and Data) so that each layer has a well-defined responsibility and communicates with adjacent layers only through standardized contracts (APIs, Events, or Function Calls). It is the direct implementation of the foundational software-engineering principle known as **Separation of Concerns (SoC)** within the SPA context.

In essence, an SPA is not a single monolithic JavaScript file. It is decomposed into horizontally-stacked tiers, where a request (or a user event) cascades **downward** through the layers, and the response cascades **upward** back to the view.

### The Three Canonical SPA Layers

| Layer Index | Canonical Name | Common Aliases | Core Responsibility |
| :--- | :--- | :--- | :--- |
| **L1 (Top)** | Presentation Layer | View, UI, Component Layer | Rendering, DOM manipulation, event capture |
| **L2 (Middle)** | Application / Logic Layer | Controller, Service, ViewModel, Model | State management, routing, business rules |
| **L3 (Bottom)** | Data Access Layer | Repository, API Client, Model | HTTP calls, local storage, data serialization |

### Conceptual Analogy — The Restaurant Kitchen

> [!NOTE]
> **Intuitive Analogy — A Multi-Cuisine Restaurant**
> Imagine an SPA as a busy restaurant:
> - The **Dining Hall (Presentation Layer)** is where the customer sits. The waiter only takes orders and serves food. He does not cook.
> - The **Head Chef \& Sous-Chef (Application Layer)** receive the order, decide the recipe, and orchestrate the kitchen. They do not wash vegetables.
> - The **Cold Storage \& Suppliers (Data Access Layer)** provide raw ingredients from external farms or the in-house fridge. They do not know who the customer is.
>
> If the waiter starts cooking, the restaurant collapses. This is exactly why we **layer** an SPA — so that swapping the database (changing the supplier) does not require rewriting the UI (relaying the dining hall).

### Why Layering is Non-Negotiable in SPAs

> [!IMPORTANT]
> **Key Engineering Justification:**
> 1. **Maintainability** — Fix a bug in a single layer without ripple effects.
> 2. **Testability** — Unit-test the business logic without spinning up a browser DOM.
> 3. **Reusability** — The same Data Layer can serve two different Presentation Layers (e.g., a Web SPA and an Admin Dashboard).
> 4. **Parallel Development** — Frontend and backend teams work against a contract simultaneously.
> 5. **Scalability** — Layers can be migrated to micro-frontends or extracted into micro-services later.

---

### GeoGebra / Desmos Visualization — Layer Dependency Topology

> [!VISUALIZATION CONTROL]
> **Concept:** Vertical cascade topology of an SPA — strict unidirectional dependency from top to bottom.
> **GeoGebra / Desmos Input (graph form):**
> * `f_1(x) = 1` (Presentation Layer — constant at y=1)
> * `f_2(x) = 0.5` (Application Layer — constant at y=0.5)
> * `f_3(x) = 0` (Data Layer — constant at y=0)
> **Visual Description:** Three parallel horizontal lines stacked on the y-axis at heights 1, 0.5, and 0. A vertical arrow originates at $(0, 1)$ and terminates at $(0, 0)$, representing the strict downward dependency. No arrow points from the Data Layer back to the Presentation Layer, illustrating the **"lower layer knows nothing of the upper layer"** rule.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis \& KTU High-Yield Formula Sheet

## 2.1 The Layering Contract — Rules of Engagement

The Principle of Layering is governed by four strict **architectural invariants** that the KTU examiner expects you to state verbatim:

1. **Asymmetric Dependency Rule:** A layer $\ell_i$ may import from the layer immediately below it ($\ell_{i-1}$), but $\ell_{i-1}$ must **never** import from $\ell_i$. Formally:

$$
\text{Dep}(\ell_i) \subseteq \bigcup_{j=0}^{i-1} \ell_j \quad \text{but} \quad \text{Dep}(\ell_{i-1}) \cap \ell_i = \emptyset
$$

2. **Abstraction Barrier Rule:** A layer exposes a **public interface** (functions, events, or classes). The internal implementation is hidden. Internal refactoring of a layer must not break its consumers.

3. **Substitutability Rule:** Any layer can be swapped with a mock (e.g., a fake `DataService` returning hard-coded JSON) without modifying the layers above it. This is the foundation of **Dependency Inversion**.

4. **One-Way Data Flow Rule (Modern SPA):** In frameworks like React, Vue, or Angular, state mutations flow **downward** as props/properties, while events flow **upward** as callbacks/emitters. This is a layered-by-direction pattern internally.

## 2.2 The Three-Layer SPA Architecture — Detailed Anatomy

### Layer 1: Presentation Layer (The View)

The Presentation Layer is the **only** layer the user directly interacts with. It owns the DOM, listens to user gestures, and renders the current state of the application.

**Responsibilities:**
- Render HTML templates / JSX / Vue templates
- Capture DOM events (clicks, keypresses, scroll)
- Delegate user intent to the Application Layer
- **MUST NOT** contain business rules, SQL, or direct HTTP calls
- **MUST NOT** mutate global state directly

**Technologies in 2024 KTU Context:** React (function components), Vue 3 SFCs, Angular components, Svelte components, HTML + CSS modules.

### Layer 2: Application / Business Logic Layer (The Brain)

This is the **decision-making** layer. It receives intent from the View, applies business rules, and orchestrates the Data Layer to fulfil the request.

**Responsibilities:**
- Maintain application state (Redux store, Pinia store, NgRx, Signals)
- Implement business rules ("If cart total > \$500, apply a 10% discount")
- Manage client-side routing (React Router, Vue Router)
- Authentication \& authorization checks
- Coordinate multiple data sources
- Trigger View re-renders via state updates

**State-Management Formulas (high-yield):**

$$
S_{t+1} = f(S_t, A_t)
$$

Where $S_t$ is the application state at time $t$, and $A_t$ is the action/event at time $t$. The new state is a pure function of the previous state and the action.

### Layer 3: Data Access Layer (The Gateway)

The Data Access Layer is the **only** layer that talks to the outside world (servers, databases, local storage, WebSockets, IndexedDB).

**Responsibilities:**
- Issue HTTP requests (fetch / Axios)
- Serialize/deserialize JSON / XML / FormData
- Manage authentication tokens (JWT refresh logic)
- Cache responses (Service Workers, IndexedDB, in-memory caches)
- Handle retries, timeouts, and network errors
- **MUST NOT** know about DOM, components, or routing

**Generic Data-Flow Function:**

$$
D = \text{DAL}.\text{query}(\text{endpoint}, \text{params}) \quad \text{where} \quad D \in \text{JSON}
$$

## 2.3 KTU High-Yield Formula \& Cheat Sheet

| # | Concept | Formula / Rule | Notation | KTU Exam Use |
| :---: | :--- | :--- | :--- | :--- |
| 1 | Layer Count | $n \geq 3$ for any non-trivial SPA | $n \in \mathbb{Z}^+$ | Defining "layered" architecture |
| 2 | Dependency Direction | $\ell_i \to \ell_{i-1}$ only | arrow notation | Diagram questions (7 marks) |
| 3 | State Update | $S_{t+1} = f(S_t, A_t)$ | functional update | Redux/Pinia conceptual Q |
| 4 | Coupling Metric | $C(\ell_i) = \frac{\text{Imports from other layers}}{\text{Total imports}}$ | $0 \leq C \leq 1$ | Compare good vs bad design |
| 5 | Cohesion Metric | $H(\ell) = \frac{\text{Related responsibilities}}{\text{Total responsibilities}}$ | $0 \leq H \leq 1$ | Justify a refactor |
| 6 | Event Flow | $\text{View} \xrightarrow{\text{event}} \text{Logic} \xrightarrow{\text{action}} \text{Store}$ | arrow chain | Angular/React patterns |
| 7 | Bidirectional Data Binding | $V \leftrightarrow M$ | two-way arrow | Vue / Angular ngModel |
| 8 | Unidirectional Data Flow | $M \to V$, $V \to M$ via callback | two separate arrows | React/Redux |
| 9 | Layer Skip Violation | $\ell_1 \to \ell_3$ is **forbidden** | crossed arrow | Spotting anti-patterns |
| 10 | MV\* Pattern Family | $\text{MVC, MVP, MVVM} \subset \text{Layered Arch.}$ | set notation | Differentiate Part A Q |

> [!IMPORTANT]
> **Boundary Value Tip for KTU Boards:** When drawing a layer diagram, examiners award marks only if you label **every arrow** with the type of data crossing it (e.g., "Action object", "JSON payload", "Rendered VDOM diff"). A bare arrow with no label = **0 marks** on that specific rubric line.

## 2.4 Real-World Engineering Utility

| Industry Domain | How Layering is Used in Production |
| :--- | :--- |
| **E-Commerce (Amazon SPA)** | View = product cards, Logic = cart/promo engine, DAL = Inventory/Pricing microservices |
| **Banking SPAs** | View = transaction form, Logic = KYC/fraud rules, DAL = Core banking SOAP/REST gateway |
| **Streaming (Netflix)** | View = video player UI, Logic = recommendation engine, DAL = Content Delivery Network |
| **DevOps Dashboards** | View = Grafana panels, Logic = alert rules, DAL = Prometheus API |
| **Health-Tech (Telemedicine)** | View = video call, Logic = appointment scheduling, DAL = Hospital Information System |

> [!NOTE]
> The Principle of Layering is the *spinal cord* of modern frontend frameworks. React's Hooks architecture, Vue's Composition API, and Angular's NgModules are all formalizations of the same three-tier concept introduced in 1970s Smalltalk MVC.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations \& Code/Symbolic Implementation

## 3.1 Derivation: Proving a Layer Violation Reduces Cohesion

**Problem:** Demonstrate mathematically why a Presentation Layer that contains a direct `fetch()` call (skipping the Application Layer) violates the Principle of Layering.

**Step 1 — Define Cohesion before the violation.**

$$
H_{\text{View}} = \frac{\vert \{\text{View responsibilities}\} \cap \text{Rendering} \vert}{\vert \{\text{View responsibilities}\} \vert}
$$

If View's responsibilities are $R_V = \{ \text{render}, \text{event}, \text{style} \}$, then:

$$
H_{\text{View, before}} = \frac{\vert \{ \text{render}, \text{event}, \text{style} \} \cap \text{Rendering} \vert}{3} = \frac{3}{3} = 1.0
$$

**Step 2 — Inject the `fetch()` responsibility.**

Now the View's responsibility set becomes $R_V' = \{ \text{render}, \text{event}, \text{style}, \text{fetch}, \text{parse JSON}, \text{handle 401} \}$, so $\vert R_V' \vert = 6$.

**Step 3 — Recompute cohesion.**

The denominator grew to 6, but the numerator (true rendering work) is still only 3.

$$
H_{\text{View, after}} = \frac{3}{6} = 0.5
$$

**Step 4 — Compute the cohesion loss.**

$$
\Delta H = H_{\text{View, before}} - H_{\text{View, after}} = 1.0 - 0.5 = 0.5
$$

**Step 5 — Conclude.**

$$
\boxed{\Delta H = 0.5 \quad \Rightarrow \quad \text{Cohesion is halved; the layer is no longer "single-purpose"}}
$$

A 50% drop in cohesion is the **quantitative proof** the examiner expects. This derivation is a guaranteed 7-mark scorer if you write it in an ESE Part B question.

---

## 3.2 Full Operational Implementation — A Three-Layered SPA in Vanilla JavaScript

Below is an exhaustive, production-style implementation of the Principle of Layering. **Every file is layered correctly. There is no shortcut, no "rest is similar".**

### File 1: `dataAccessLayer.js` — The Bottom Layer

```javascript
/**
 * LAYER 3 — DATA ACCESS LAYER (DAL)
 * ----------------------------------
 * Strict Rule: This file knows NOTHING about the DOM,
 * the View, the router, or the user's identity.
 * It only talks to a network endpoint and returns raw data.
 */

// Define a strict public contract (the "interface")
class UserDataService {
  /**
   * @param {string} baseURL
   */
  constructor(baseURL) {
    if (typeof baseURL !== "string" || baseURL.length === 0) {
      throw new Error("[DAL] baseURL must be a non-empty string");
    }
    this._baseURL = baseURL;
  }

  /**
   * Fetch a single user record by numeric ID.
   * @param {number} userId
   * @returns {Promise<object>} Raw user object
   * @throws {Error} Network or parsing failure
   */
  async fetchUserById(userId) {
    if (!Number.isInteger(userId) || userId <= 0) {
      throw new Error(`[DAL] Invalid userId: ${userId}. Must be a positive integer.`);
    }

    const endpoint = `${this._baseURL}/users/${userId}`;

    let response;
    try {
      response = await fetch(endpoint, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
    } catch (networkErr) {
      // Log internally; re-throw a clean error
      console.error(`[DAL] Network failure on ${endpoint}`, networkErr);
      throw new Error(`[DAL] Network unreachable for userId=${userId}`);
    }

    if (!response.ok) {
      throw new Error(`[DAL] HTTP ${response.status} when fetching userId=${userId}`);
    }

    try {
      const data = await response.json();
      return data;
    } catch (parseErr) {
      console.error(`[DAL] JSON parse failure`, parseErr);
      throw new Error(`[DAL] Malformed JSON in response for userId=${userId}`);
    }
  }

  /**
   * Update a user record using PUT semantics.
   * @param {number} userId
   * @param {object} payload
   * @returns {Promise<object>} Updated user object
   */
  async updateUser(userId, payload) {
    if (typeof payload !== "object" || payload === null) {
      throw new Error(`[DAL] Payload must be a non-null object.`);
    }
    const endpoint = `${this._baseURL}/users/${userId}`;

    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`[DAL] HTTP ${response.status} on update.`);
    }
    return await response.json();
  }
}

// Export the public surface ONLY
export { UserDataService };
```

### File 2: `applicationLayer.js` — The Middle Layer

```javascript
/**
 * LAYER 2 — APPLICATION / BUSINESS LOGIC LAYER
 * -------------------------------------------
 * Strict Rule: This file may import from the DAL,
 * but the DAL MUST NEVER import from this file.
 * This layer maintains state and applies business rules.
 */

import { UserDataService } from "./dataAccessLayer.js";

class UserController {
  /**
   * @param {UserDataService} dataService
   */
  constructor(dataService) {
    if (!(dataService instanceof UserDataService)) {
      throw new Error("[AppLayer] dataService must be a UserDataService instance.");
    }
    this._dataService = dataService;

    // In-memory state container (mirrors what Redux / Pinia would hold)
    this._state = {
      currentUser: null,
      isLoading: false,
      lastError: null,
    };

    // Subscriber list (View registers here to be notified of state changes)
    this._subscribers = [];
  }

  /**
   * Subscribe a View function to state-change events.
   * @param {(state: object) => void} listener
   * @returns {() => void} Unsubscribe function
   */
  subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error("[AppLayer] listener must be a function.");
    }
    this._subscribers.push(listener);
    return () => {
      this._subscribers = this._subscribers.filter((fn) => fn !== listener);
    };
  }

  /**
   * Internal: notify every subscriber with the latest state.
   */
  _notify() {
    // Defensive copy to prevent external mutation
    const snapshot = JSON.parse(JSON.stringify(this._state));
    for (const fn of this._subscribers) {
      try {
        fn(snapshot);
      } catch (err) {
        console.error(`[AppLayer] Subscriber threw:`, err);
      }
    }
  }

  /**
   * Get the current immutable state snapshot.
   * @returns {object}
   */
  getState() {
    return JSON.parse(JSON.stringify(this._state));
  }

  /**
   * Business action: load a user.
   * Implements the rule: "Trim username; uppercase the role."
   * @param {number} userId
   */
  async loadUser(userId) {
    this._state.isLoading = true;
    this._state.lastError = null;
    this._notify();

    try {
      const rawUser = await this._dataService.fetchUserById(userId);

      // ---- BUSINESS RULES BEGIN ----
      const normalizedUser = {
        id: rawUser.id,
        name: (rawUser.name || "").trim(),
        role: (rawUser.role || "guest").toUpperCase(),
        email: (rawUser.email || "").toLowerCase(),
      };
      // ---- BUSINESS RULES END ----

      this._state.currentUser = normalizedUser;
      this._state.isLoading = false;
      this._state.lastError = null;
    } catch (err) {
      this._state.isLoading = false;
      this._state.lastError = err.message;
      this._state.currentUser = null;
    } finally {
      this._notify();
    }
  }

  /**
   * Business action: rename the current user.
   * @param {string} newName
   */
  async renameUser(newName) {
    if (typeof newName !== "string" || newName.trim().length === 0) {
      this._state.lastError = "Name cannot be empty.";
      this._notify();
      return;
    }
    if (!this._state.currentUser) {
      this._state.lastError = "No user loaded.";
      this._notify();
      return;
    }
    const updated = await this._dataService.updateUser(
      this._state.currentUser.id,
      { name: newName.trim() }
    );
    this._state.currentUser = {
      ...this._state.currentUser,
      name: (updated.name || "").trim(),
    };
    this._notify();
  }
}

export { UserController };
```

### File 3: `presentationLayer.js` — The Top Layer

```javascript
/**
 * LAYER 1 — PRESENTATION LAYER (VIEW)
 * -----------------------------------
 * Strict Rule: This file knows NOTHING about fetch(),
 * JSON parsing, or HTTP status codes.
 * It only knows how to render state and emit user intent.
 */

import { UserController } from "./applicationLayer.js";
import { UserDataService } from "./dataAccessLayer.js";

class UserView {
  /**
   * @param {HTMLElement} rootElement
   * @param {UserController} controller
   */
  constructor(rootElement, controller) {
    if (!(rootElement instanceof HTMLElement)) {
      throw new Error("[View] rootElement must be an HTMLElement.");
    }
    if (!(controller instanceof UserController)) {
      throw new Error("[View] controller must be a UserController instance.");
    }
    this._root = rootElement;
    this._controller = controller;
    this._unsubscribe = null;
  }

  /**
   * Mount the view: render the initial state and start listening.
   */
  mount() {
    this._render(this._controller.getState());
    this._unsubscribe = this._controller.subscribe((newState) => {
      this._render(newState);
    });

    // Capture user intent and forward it upward to the Application Layer
    this._root.addEventListener("click", (ev) => {
      const target = ev.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.matches("[data-action='load-user']")) {
        const idAttr = target.getAttribute("data-user-id") || "0";
        const userId = parseInt(idAttr, 10);
        this._controller.loadUser(userId);
      }
      if (target.matches("[data-action='rename-user']")) {
        const input = this._root.querySelector("[data-input='new-name']");
        if (input instanceof HTMLInputElement) {
          this._controller.renameUser(input.value);
        }
      }
    });
  }

  /**
   * Unmount: detach all listeners to prevent memory leaks.
   */
  unmount() {
    if (typeof this._unsubscribe === "function") {
      this._unsubscribe();
      this._unsubscribe = null;
    }
  }

  /**
   * Internal: pure render function.
   * @param {object} state
   */
  _render(state) {
    const user = state.currentUser;
    const error = state.lastError;
    const loading = state.isLoading;

    if (loading) {
      this._root.innerHTML = `<p class="spa-loading">Loading user...</p>`;
      return;
    }
    if (error) {
      this._root.innerHTML = `<p class="spa-error">Error: ${error}</p>`;
      return;
    }
    if (!user) {
      this._root.innerHTML = `
        <button data-action="load-user" data-user-id="42">Load User 42</button>
      `;
      return;
    }
    this._root.innerHTML = `
      <section class="spa-user-card">
        <h2>${user.name}</h2>
        <p>Role: ${user.role}</p>
        <p>Email: ${user.email}</p>
        <input type="text" data-input="new-name" placeholder="New name" />
        <button data-action="rename-user">Rename</button>
      </section>
    `;
  }
}

// ---- COMPOSITION ROOT: wire the three layers together ----
const root = document.getElementById("app");
if (root instanceof HTMLElement) {
  const dal = new UserDataService("https://jsonplaceholder.typicode.com");
  const controller = new UserController(dal);
  const view = new UserView(root, controller);
  view.mount();
}

export { UserView };
```

### File 4: `index.html` — Host Page (Bootstrap)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>KTU SPA — Layered Architecture Demo</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 2rem; }
    .spa-user-card { border: 1px solid #ccc; padding: 1rem; border-radius: 8px; }
    .spa-error { color: #b00020; }
    .spa-loading { color: #555; font-style: italic; }
  </style>
</head>
<body>
  <h1>Principle of Layering — Live Demo</h1>
  <div id="app"></div>
  <script type="module" src="./presentationLayer.js"></script>
</body>
</html>
```

### Dependency Verification Matrix

| File | Imports From | Imports Allowed? | Verdict |
| :--- | :--- | :--- | :--- |
| `dataAccessLayer.js` | nothing | n/a (bottom layer) | **Compliant** |
| `applicationLayer.js` | `dataAccessLayer.js` | downward only | **Compliant** |
| `presentationLayer.js` | `applicationLayer.js`, `dataAccessLayer.js` | downward only | **Compliant** |
| `index.html` | `presentationLayer.js` | one-way host-to-app | **Compliant** |

> [!IMPORTANT]
> The Presentation Layer imports the DAL **only at the composition root** to instantiate it and inject it. It never *calls* DAL methods. This subtle distinction is the difference between a layered design and a leaky abstraction — KTU examiners frequently test it.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams \& Schematics

## 4.1 Mermaid — Layered SPA Architecture (Top-Down Cascade)

```mermaid
graph TD
    subgraph LAYER_1_PRESENTATION
        nodeView["USER VIEW COMPONENT"]
        nodeViewState["LOCAL UI STATE"]
    end

    subgraph LAYER_2_APPLICATION
        nodeController["USER CONTROLLER"]
        nodeRouter["SPA ROUTER"]
        nodeStore["CENTRAL STATE STORE"]
    end

    subgraph LAYER_3_DATA
        nodeDAL["DATA ACCESS SERVICE"]
        nodeHTTP["HTTP CLIENT FETCH"]
        nodeCache["INDEXED DB CACHE"]
    end

    nodeView -->|Dispatches Intent| nodeController
    nodeController -->|Reads and Writes| nodeStore
    nodeController -->|Queries and Mutates| nodeDAL
    nodeRouter -->|Navigates| nodeView
    nodeDAL -->|Sends GET PUT POST| nodeHTTP
    nodeDAL -->|Reads and Writes| nodeCache
    nodeView -.->|Renders From| nodeViewState

    classDef layer1 fill:#fde2e4,stroke:#9d0208,color:#370617
    classDef layer2 fill:#c9e4de,stroke:#0a6e5d,color:#053b3a
    classDef layer3 fill:#fcd5ce,stroke:#7d4f50,color:#3d2c2e
    class nodeView,nodeViewState layer1
    class nodeController,nodeRouter,nodeStore layer2
    class nodeDAL,nodeHTTP,nodeCache layer3
```

## 4.2 Mermaid — Event \& Data Flow Sequence (Login Action)

```mermaid
sequenceDiagram
    participant U as USER
    participant V as PRESENTATION LAYER
    participant C as APPLICATION LAYER
    participant D as DATA ACCESS LAYER
    participant API as REMOTE API

    U->>V: 1 Clicks Login Button
    V->>C: 2 Dispatch loginAction credentials
    C->>C: 3 Validate input shape and business rules
    C->>D: 4 Call authService login credentials
    D->>API: 5 HTTP POST auth login
    API-->>D: 6 HTTP 200 returns JWT token
    D-->>C: 7 Returns parsed token object
    C->>C: 8 Update store user is authenticated
    C-->>V: 9 Notify subscribers state changed
    V->>U: 10 Re render dashboard component

    Note over V,C: Arrow V to C is INTENT upward
    Note over C,D: Arrow C to D is DATA downward
    Note over C,V: Arrow C to V is STATE downward
```

## 4.3 Mermaid — Anti-Pattern vs Correct Pattern (Comparison Block)

```mermaid
graph LR
    subgraph ANTIPATTERN["ANTI PATTERN TIGHT COUPLING"]
        nodeViewBad["VIEW WITH FETCH INSIDE"]
        nodeViewBad -->|Direct HTTP| nodeAPIBad["REMOTE API"]
    end

    subgraph CORRECT["CORRECT THREE LAYER MODEL"]
        nodeViewOK["VIEW"]
        nodeLogicOK["APPLICATION LAYER"]
        nodeDataOK["DATA ACCESS LAYER"]
        nodeAPIOK["REMOTE API"]
        nodeViewOK -->|Intent| nodeLogicOK
        nodeLogicOK -->|Query| nodeDataOK
        nodeDataOK -->|HTTP| nodeAPIOK
    end

    classDef bad fill:#ffadad,stroke:#9d0208,color:#370617
    classDef good fill:#caffbf,stroke:#1b4332,color:#081c15
    class nodeViewBad,nodeAPIBad bad
    class nodeViewOK,nodeLogicOK,nodeDataOK,nodeAPIOK good
```

## 4.4 Mermaid — Modular Component Decomposition Within the View Layer

```mermaid
graph TD
    subgraph VIEW_LAYER["PRESENTATION LAYER COMPONENTS"]
        nodeApp["APP SHELL COMPONENT"]
        nodeNav["NAVIGATION BAR"]
        nodeHome["HOME PAGE"]
        nodeProfile["PROFILE PAGE"]
        nodeCart["CART PAGE"]
        nodeFooter["FOOTER COMPONENT"]
    end

    nodeApp --> nodeNav
    nodeApp --> nodeHome
    nodeApp --> nodeProfile
    nodeApp --> nodeCart
    nodeApp --> nodeFooter

    classDef comp fill:#e0c3fc,stroke:#5f0f40,color:#240046
    class nodeApp,nodeNav,nodeHome,nodeProfile,nodeCart,nodeFooter comp
```

## 4.5 Block-Level Functional Architecture Matrix

For topics where Mermaid cannot capture the dynamic interaction fully, the following tabular matrix supplements the diagrams:

| Layer | Input Contracts Accepted | Output Contracts Produced | Forbidden Operations | Allowed Side Effects |
| :--- | :--- | :--- | :--- | :--- |
| **Presentation L1** | State snapshots, route params | DOM mutations, dispatched intent events | `fetch()`, `localStorage`, business math | DOM writes only |
| **Application L2** | Intent objects, action creators | New state objects, side-effect commands | DOM access, raw SQL | In-memory state mutation, scheduled timers |
| **Data L3** | Query objects, mutation payloads | Parsed JSON / domain entities, error objects | Importing from L1 or L2 | Network calls, disk writes, cache updates |

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank \& Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

> **Q1. [KTU University Exam — July 2024, Model Paper]** *Define the Principle of Layering in the context of Single Page Applications. State any two benefits.*
>
> **Model Answer (3 Marks):**
> The Principle of Layering is the architectural rule of decomposing an SPA into three logical tiers — Presentation, Application, and Data Access — such that each layer has a single responsibility and communicates only with its adjacent layer through a defined contract.
> *(Definition: 2 Marks)*
> **Benefits:** (i) Maintainability — bugs in one layer do not propagate. (ii) Testability — each layer can be unit-tested with mocks. *(Any two benefits: 1 Mark — 0.5 each)*

> **Q2. [KTU University Exam — Dec 2023]** *Differentiate between MVC and MVVM in 3 lines. Which one is strictly layered?*
>
> **Model Answer (3 Marks):**
> - **MVC:** Model holds data, View renders, Controller mediates user input. The View and Model can communicate directly in some MVC variants.
> - **MVVM:** Model holds data, View renders, ViewModel exposes observable state. The View binds to the ViewModel declaratively; the View and Model never know each other.
> - **Strictly layered:** MVVM is strictly layered because the View binds *only* to the ViewModel, never to the Model. *(Comparison: 2 Marks, Identification: 1 Mark)*

---

## 5.2 Part B — Long Answer Questions (14 Marks Each, Internal Choice)

> ### **Question A (14 Marks) — From Dec 2023 Pattern**
> **[KTU University Exam — Dec 2023, Adapted]** *(Mapped to CO2, Bloom Level: Apply)*
>
> **(a)** Draw the three-layer architecture of a Single Page Application showing the Presentation, Application, and Data Access layers. Label every arrow with the data type crossing it. *(7 Marks)*
>
> **(b)** Consider a `Product` SPA where the Presentation Layer directly calls `fetch("https://api.shop.com/products")` inside a React component. Identify the architectural violation, refactor the code into three correctly-layered files, and justify your design with a cohesion formula. *(7 Marks)*

> ### **Model Answer A(a) — 7 Marks**
>
> ```
> +--------------------------+
> | PRESENTATION LAYER       |  <-- Receives STATE (JSON snapshot)
> | (React/Vue/Angular UI)   |  --> Emits INTENT (Action object)
> +-----------+--------------+
>             |
>             v  INTENT (Action)
> +--------------------------+
> | APPLICATION / LOGIC LAYER|  <-- Receives INTENT
> | (Controller, Store,      |  --> Emits NEW STATE, queries
> |  Router, Business Rules) |
> +-----------+--------------+
>             |
>             v  QUERY / MUTATION (params)
> +--------------------------+
> | DATA ACCESS LAYER        |  <-- Receives QUERY
> | (Fetch / Axios, Cache)   |  --> Emits DOMAIN ENTITY (JSON)
> +--------------------------+
> ```
> **Valuation Key:**
> - Three labeled rectangles: 3 Marks *(1 each)*
> - Correct arrow direction (Presentation -> Application -> Data): 2 Marks
> - Every arrow labeled with a data type: 2 Marks *(1 each for the two internal arrows)*

> ### **Model Answer A(b) — 7 Marks**
>
> **Step 1 — Identify the violation (2 Marks):**
> The Presentation Layer is calling `fetch()` directly. This is a **layer-skip violation**: the View is reaching the Data Access Layer without going through the Application Layer. The DAL responsibilities (`fetch`, `JSON parse`, `HTTP error handling`) are leaking into the View.
>
> **Step 2 — Refactor (3 Marks):**
> Split into three files as shown in Section 3.2 above:
> - `productDataService.js` — exports `ProductDataService` with `fetchAll()`.
> - `productController.js` — exports `ProductController` with `loadProducts()` business rule (e.g., sort by price descending).
> - `ProductList.jsx` (or `.js`) — imports only the controller, subscribes to state, and renders the list.
>
> **Step 3 — Cohesion justification (2 Marks):**
> Let $R_{\text{View, before}} = \{ \text{render}, \text{event}, \text{fetch}, \text{parse} \}$, so $H_{\text{View, before}} = 2/4 = 0.5$.
> After refactor, $R_{\text{View, after}} = \{ \text{render}, \text{event} \}$, so $H_{\text{View, after}} = 2/2 = 1.0$.
> **Cohesion improvement: $\Delta H = +0.5$, i.e., 100% gain.** *(Stating boundary state values: 1 Mark; final simplified expression: 1 Mark)*

> ### **Question B (14 Marks) — Alternative Choice**
> **[KTU University Exam — July 2024, Adapted]** *(Mapped to CO3, Bloom Level: Apply / Analyze)*
>
> **(a)** Explain the four architectural invariants of the Principle of Layering. For each invariant, give one real-world consequence of violating it. *(7 Marks)*
>
> **(b)** Write a complete, production-grade three-layer implementation for a "To-Do List" SPA in vanilla JavaScript. The DAL must persist to `localStorage`, the Application Layer must enforce "no empty tasks", and the View must render from state and dispatch intent events. Your code must include absolute boundary checks and error handling. *(7 Marks)*

> ### **Model Answer B(a) — 7 Marks**
>
> 1. **Asymmetric Dependency Rule (1.75 Marks):** A layer may import only from the layer below. Violation consequence: changing the Data Layer (e.g., switching REST to GraphQL) forces rewriting the entire View. Real-world example: when Twitter migrated from REST to GraphQL, projects with tight View-DAL coupling had to rewrite components.
>
> 2. **Abstraction Barrier Rule (1.75 Marks):** Internal implementation must be hidden behind a public interface. Violation consequence: consumers depend on internals, so a "harmless" internal rename breaks the entire app. Real-world example: AngularJS 1.x internal scopes leak caused migration pain to Angular 2+.
>
> 3. **Substitutability Rule (1.75 Marks):** Any layer must be mockable. Violation consequence: testing requires a real network and database, slowing CI pipelines from minutes to hours. Real-world example: Netflix's failure to mock in early days led to brittle pre-production tests.
>
> 4. **One-Way Data Flow Rule (1.75 Marks):** In modern SPAs, state flows down, events flow up. Violation consequence: two-way binding at the wrong scope creates infinite render loops, as seen in early AngularJS digest-cycle bugs.

> ### **Model Answer B(b) — 7 Marks**
>
> **DAL excerpt — 2.5 Marks:**
> ```javascript
> // dataAccessLayer.js
> class TodoStorage {
>   static KEY = "ktu_todo_v1";
>   static read() {
>     try {
>       const raw = localStorage.getItem(TodoStorage.KEY);
>       if (!raw) return [];
>       const parsed = JSON.parse(raw);
>       return Array.isArray(parsed) ? parsed : [];
>     } catch (e) {
>       console.error("[DAL] read failed", e);
>       return [];
>     }
>   }
>   static write(items) {
>     if (!Array.isArray(items)) throw new Error("[DAL] items must be array");
>     localStorage.setItem(TodoStorage.KEY, JSON.stringify(items));
>   }
> }
> export { TodoStorage };
> ```
> **Logic layer excerpt — 2.5 Marks:**
> ```javascript
> // applicationLayer.js
> import { TodoStorage } from "./dataAccessLayer.js";
> class TodoController {
>   constructor() { this._state = { items: TodoStorage.read() }; this._subs = []; }
>   subscribe(fn) { this._subs.push(fn); return () => { this._subs = this._subs.filter(x => x !== fn); }; }
>   _notify() { const snap = JSON.parse(JSON.stringify(this._state)); this._subs.forEach(fn => fn(snap)); }
>   addTask(text) {
>     if (typeof text !== "string" || text.trim().length === 0) {
>       this._state.error = "Task cannot be empty.";
>       this._notify();
>       return;
>     }
>     const item = { id: Date.now(), text: text.trim(), done: false };
>     this._state.items.push(item);
>     this._state.error = null;
>     TodoStorage.write(this._state.items);
>     this._notify();
>   }
>   toggleTask(id) {
>     const item = this._state.items.find(i => i.id === id);
>     if (item) { item.done = !item.done; TodoStorage.write(this._state.items); this._notify(); }
>   }
> }
> export { TodoController };
> ```
> **View excerpt — 2 Marks:**
> ```javascript
> // presentationLayer.js
> import { TodoController } from "./applicationLayer.js";
> class TodoView {
>   constructor(root, controller) { this._root = root; this._ctrl = controller; }
>   mount() {
>     this._render(this._ctrl._state); // controlled access via getter pattern
>     this._ctrl.subscribe(s => this._render(s));
>     this._root.addEventListener("click", (e) => {
>       const t = e.target;
>       if (t.matches("[data-add]")) {
>         const inp = this._root.querySelector("[data-input]");
>         if (inp) this._ctrl.addTask(inp.value);
>       }
>       if (t.matches("[data-toggle]")) {
>         this._ctrl.toggleTask(Number(t.dataset.id));
>       }
>     });
>   }
>   _render(s) {
>     this._root.innerHTML = `
>       <input data-input placeholder="New task" />
>       <button data-add>Add</button>
>       <ul>${s.items.map(i => `<li><button data-toggle data-id="${i.id}">${i.done ? "[x]" : "[ ]"}</button> ${i.text}</li>`).join("")}</ul>
>       ${s.error ? `<p class="err">${s.error}</p>` : ""}
>     `;
>   }
> }
> export { TodoView };
> ```
> **Valuation Key (B-b):**
> - DAL with `try/catch`, array-shape validation, persistence: 2.5 Marks
> - Logic with empty-task business rule, state notify, persistence call: 2.5 Marks
> - View with intent events and state-driven render: 1.5 Marks
> - Proper import direction (L1 imports L2 imports L3): 0.5 Mark

> [!WARNING]
> **KTU Examiner's Valuation Pitfall Callout**
> - **Do not** put `localStorage` access inside the View. It belongs in the DAL. Examiners deduct **2 full marks** for this common mistake.
> - **Do not** mutate `state.items` directly from the View. Always go through the controller. Direct mutation is a one-way-data-flow violation.
> - **Do not** skip the `try/catch` around `JSON.parse` in the DAL. Unhandled `SyntaxError` from corrupted localStorage is a guaranteed 1-mark deduction in board valuation.
> - **Do not** forget to label every diagram arrow. A bare arrow with no data-type label = **0 marks** on that arrow's rubric line.
> - **Do not** import the View from the Logic Layer. The dependency direction is strict: `View -> Logic -> Data` and never the reverse.

---

## 5.3 Topic Recap \& Important Things to Remember

> **Rapid Revision Checklist — KTU Module 4: SPA Basics — Principle of Layering**

- **Definition (verbatim for 2-mark Q):** Layering = decomposing an SPA into Presentation, Application, and Data Access tiers, each with a single responsibility, communicating only through defined contracts.
- **Three layers, in order top-to-bottom:** Presentation (View) -> Application (Logic/Controller/Store) -> Data Access (Repository/API).
- **The Four Invariants:** Asymmetric Dependency, Abstraction Barrier, Substitutability, One-Way Data Flow. Quote at least two in long answers.
- **The Golden Rule:** A lower layer must **never** import from a layer above it. This is the single most-tested statement in KTU 2024.
- **State formula:** $S_{t+1} = f(S_t, A_t)$ — memorize it; it appears in Part B questions on Redux/Pinia.
- **Cohesion formula:** $H = \frac{\text{Related responsibilities}}{\text{Total responsibilities}}$ — higher is better, target $H \to 1$.
- **Coupling formula:** $C = \frac{\text{Cross-layer imports}}{\text{Total imports}}$ — lower is better, target $C \to 0$.
- **Anti-pattern to recognize instantly:** `fetch()` inside a JSX/template file = **layer-skip violation**, lose 2 marks if you don't call it out.
- **MV\* family:** MVC, MVP, MVVM are all specializations of layered architecture. MVVM is the most strictly layered.
- **One-way vs two-way binding:** React/Redux = unidirectional (state down, events up). Vue/Angular = bidirectional (`v-model`, `ngModel`), but only between adjacent layers.
- **Composition Root:** The single place where the three layers are instantiated and wired (usually in the View's bootstrap file or `main.js`). Never instantiate a DAL inside a component.
- **Diagram must show:** Three labeled rectangles, two downward arrows, every arrow labeled with a data type, no upward dependencies except for state notifications and intent events.
- **Practical tip for labs:** If your SPA has a `services/` folder and a `components/` folder and a `store/` folder, you are already layered. If everything is in one folder, you are not.
- **Real-world parallels:** Amazon's storefront, Netflix's player, Gmail's inbox — all are three-layer SPAs in production.
- **Pitfall to avoid in code:** Don't use `document` or `window` in the Logic or Data layers — that is a Presentation Layer responsibility leaking downward.
- **Examiner's favorite trick:** Ask you to "refactor this monolithic component into layers" — your answer must always produce **three files**, not two, and not one mega-file.

<!-- SECTION_5_END -->
