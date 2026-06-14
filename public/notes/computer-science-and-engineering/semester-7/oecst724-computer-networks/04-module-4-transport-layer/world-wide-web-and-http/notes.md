# World Wide Web and HTTP

<!-- SECTION_1_START -->
# Module 4: Transport Layer
## Topic: World Wide Web and HTTP

### 1.1 Formal Academic Definition (KTU 2024 Syllabus Terminology)

The **World Wide Web (WWW)** is a distributed, hypermedia-based information system that operates over the **Internet** and follows the **client–server model**, enabling users to access and share resources (documents, images, videos, and other media) linked through **hyperlinks**. It is formally defined by the **W3C (World Wide Web Consortium)** as a "universal space of information" and is governed by standardized protocols, with the **HyperText Transfer Protocol (HTTP)** serving as its primary application-layer communication protocol for fetching web resources.

The **HyperText Transfer Protocol (HTTP)** is an **application-layer protocol** defined in **RFC 9110 (HTTP Semantics)** and **RFC 9112 (HTTP/1.1)**, operating in a request–response paradigm over **TCP (typically port 80)** for HTTP and **port 443** for HTTPS (HTTP over TLS/SSL). HTTP is **stateless**, **connection-oriented**, and forms the transactional foundation of every web interaction in the KTU 2024 scheme networking stack.

> [!IMPORTANT]
> **KTU 2024 Board Highlight:** The WWW is a *service* running *on top of* the Internet, not the Internet itself. The Internet is the *infrastructure*; the Web is one of the *services* using it (others include Email, FTP, DNS).

---

### 1.2 Conceptual Analogy — The Library of Alexandria, Reimagined

Imagine a **massive global library**:
- Every book in the library is a **Web Page (Resource)**.
- Each book has a unique **call number** = **URL (Uniform Resource Locator)**.
- The **librarian** who fetches the book for you is the **Web Server**.
- You, the reader, are the **Web Browser (Client)**.
- The standardized slip you fill out to request a book is the **HTTP Request**.
- The book (or a "Not Found" slip) returned to you is the **HTTP Response**.

The **hyperlinks** inside a book act like secret passages that teleport you to a different book on a completely different shelf — that's how the Web is "woven" together into a **Web** of interlinked resources.

---

### 1.3 Visualization Control — HTTP Request-Response Cycle

> [!VISUALIZATION CONTROL]
> **Concept:** HTTP Transaction as a Temporal Sequence Diagram
> **Conceptual Plot Equations:**
> * `t = 0` : Client opens TCP socket to `host:80`
> * `t = t_1` : Client sends `GET /index.html HTTP/1.1`
> * `t = t_2` : Server processes and replies with `HTTP/1.1 200 OK`
> * `t = t_3` : Server closes (HTTP/1.0) or keeps alive (HTTP/1.1)
> **Visual Description:** The student should imagine a horizontal **time axis** where the client line and server line are two parallel horizontal tracks. Arrows from client to server represent *requests*, and arrows from server to client represent *responses*. The vertical distance between arrows represents **latency**.
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 WWW Architecture — The Building Blocks

The WWW is constructed from the following interlocking components:

| Component | Full Form | Role in the Web |
| :--- | :--- | :--- |
| **URL** | Uniform Resource Locator | Unique address of a resource on the Web |
| **URI** | Uniform Resource Identifier | Superset of URL + URN; uniquely names a resource |
| **HTML** | HyperText Markup Language | Document format used to structure web pages |
| **HTTP** | HyperText Transfer Protocol | Protocol for fetching/transferring web resources |
| **Web Browser** | — | Client application (Chrome, Firefox, Edge) |
| **Web Server** | — | Server application (Apache, Nginx, IIS) |
| **DNS** | Domain Name System | Translates domain names → IP addresses |
| **Proxy / CDN** | Content Delivery Network | Intermediate caches for performance |

---

## 2.2 URL Anatomy — The Heart of Every Web Request

A **URL** has a standardized structure. The general format as per **RFC 3986** is:

$$
\text{URL} \;=\; \underbrace{\text{scheme}}_{\text{protocol}} \;:\; \underbrace{//}_{\text{hier-part}} \;\; \text{authority} \;\; \text{path} \;\; \text{?} \text{query} \;\; \text{\#} \text{fragment}
$$

The authority is itself broken down as:

$$
\text{authority} \;=\; \underbrace{\text{userinfo@}}_{\text{optional}} \;\; \text{host} \;\; \text{:} \;\; \text{port}
$$

### Worked Example — Decomposing a Real URL
Given the URL:
```
https://www.example.com:8080/path/to/page?id=42#section3
```

| Component | Value |
| :--- | :--- |
| Scheme | `https` |
| Host | `www.example.com` |
| Port | `8080` |
| Path | `/path/to/page` |
| Query | `id=42` |
| Fragment | `section3` |

> [!NOTE]
> **KTU Board Note:** Always state which components are *optional*. The `userinfo`, `port`, `query`, and `fragment` are all optional in a URL.

---

## 2.3 HTTP — The Protocol in Detail

### 2.3.1 HTTP Transaction Model
HTTP is a **text-based, request–response** protocol where:
1. The **client** opens a **TCP connection** to the server on port **80** (HTTP) or **443** (HTTPS).
2. The client sends an **HTTP Request Message**.
3. The server processes the request and sends back an **HTTP Response Message**.
4. The connection may be **closed** (HTTP/1.0) or **kept alive** (HTTP/1.1+).

### 2.3.2 HTTP Request Message Format

An HTTP request message has three distinct sections:

$$
\text{HTTP Request} \;=\; \underbrace{\text{Request Line}}_{\text{Method + URI + Version}} \;+\; \underbrace{\text{Headers}}_{\text{Key: Value}} \;+\; \underbrace{\text{Entity Body}}_{\text{optional payload}}
$$

**Example raw request:**
```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
Connection: keep-alive

```

### 2.3.3 HTTP Response Message Format

$$
\text{HTTP Response} \;=\; \underbrace{\text{Status Line}}_{\text{Version + Code + Phrase}} \;+\; \underbrace{\text{Headers}} \;+\; \underbrace{\text{Entity Body}}_{\text{resource data}}
$$

**Example raw response:**
```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1354
Date: Mon, 15 Sep 2024 10:30:00 GMT

<html>...</html>
```

---

## 2.4 HTTP Methods (Verbs) — The KTU High-Yield Set

| Method | Idempotent? | Safe? | Body Allowed? | Purpose |
| :--- | :---: | :---: | :---: | :--- |
| **GET** | Yes | Yes | No | Retrieve a resource |
| **HEAD** | Yes | Yes | No | Retrieve headers only |
| **POST** | No | No | Yes | Submit data / create resource |
| **PUT** | Yes | No | Yes | Replace / create resource at URI |
| **DELETE** | Yes | No | No | Delete a resource |
| **OPTIONS** | Yes | Yes | No | Describe communication options |
| **PATCH** | No | No | Yes | Apply partial modifications |

> [!IMPORTANT]
> **Idempotent** = repeating the same request multiple times yields the **same server state**. **Safe** = the method does not modify server state. These distinctions are recurring KTU 14-mark questions.

---

## 2.5 HTTP Status Codes — The Five-Class Hierarchy

$$
\text{Status Code} \in \{1\text{xx}, 2\text{xx}, 3\text{xx}, 4\text{xx}, 5\text{xx}\}
$$

| Class | Category | Common Codes & Meaning |
| :--- | :--- | :--- |
| **1xx** | Informational | `100 Continue`, `101 Switching Protocols` |
| **2xx** | Success | `200 OK`, `201 Created`, `204 No Content` |
| **3xx** | Redirection | `301 Moved Permanently`, `302 Found`, `304 Not Modified` |
| **4xx** | Client Error | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found` |
| **5xx** | Server Error | `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable` |

---

## 2.6 HTTP Versions — Evolution Timeline

| Version | Year | Key Innovation | Transport |
| :--- | :---: | :--- | :--- |
| **HTTP/0.9** | 1991 | One-line `GET`, HTML only | TCP |
| **HTTP/1.0** | 1996 | Headers, status codes, methods | TCP |
| **HTTP/1.1** | 1997 | Persistent connections, pipelining, chunked transfer, Host header | TCP |
| **HTTP/2.0** | 2015 | Binary framing, **HPACK header compression**, **multiplexing**, server push | TCP (TLS optional) |
| **HTTP/3.0** | 2022 | Replaces TCP with **QUIC** (UDP-based), eliminates head-of-line blocking | QUIC over UDP |

### 2.6.1 Performance Math — Why HTTP/2 Wins

For $N$ resources each requiring 1 RTT, the **page-load time** under different models:

$$
T_{\text{HTTP/1.1 serial}} \;=\; N \cdot \text{RTT}
$$

$$
T_{\text{HTTP/1.1 pipelined}} \;=\; N \cdot \text{RTT} \quad \text{(HOL blocking)}
$$

$$
T_{\text{HTTP/2 multiplexed}} \;\approx\; 1 \cdot \text{RTT} + \text{server push latency}
$$

---

## 2.7 HTTPS — HTTP over TLS

HTTPS adds the **TLS (Transport Layer Security)** layer between HTTP and TCP. The handshake sequence is:

$$
\text{Client} \xrightarrow{\text{ClientHello}} \text{Server} \xrightarrow{\text{ServerHello + Cert}} \text{Client} \xrightarrow{\text{Key Exchange}} \text{Server}
$$

This provides:
- **Confidentiality** (via symmetric encryption, e.g., AES-256)
- **Integrity** (via MAC / AEAD)
- **Authentication** (via X.509 digital certificates)

---

## 2.8 KTU High-Yield Formula & Concept Cheat Sheet

| Concept | Formula / Definition | Notes |
| :--- | :--- | :--- |
| **HTTP default port** | $\text{port} = 80$ | TCP-based |
| **HTTPS default port** | $\text{port} = 443$ | TCP + TLS |
| **Status code range** | $1\text{xx} \le c \le 5\text{xx}$ | 5 classes |
| **Persistent connection (HTTP/1.1)** | $\text{keep-alive} = \text{true (default)}$ | Saves TCP setup cost |
| **HTTP/1.1 pipelining serial cost** | $T = N \cdot \text{RTT}$ | HOL blocking still present |
| **HTTP/2 multiplexed cost** | $T \approx \text{RTT}_{\text{single}}$ | Streams share one connection |
| **Web cache hit ratio** | $h = \dfrac{H}{H + M}$ | $H$ = hits, $M$ = misses |
| **Avg latency with cache** | $T_{\text{avg}} = h \cdot T_{\text{cache}} + (1-h) \cdot T_{\text{origin}}$ | Used in CDN engineering |
| **URL components** | $\text{scheme} : \vert / / \vert \, \text{authority} \, \text{path} \, [?] \, \text{query} \, [\#] \, \text{frag}$ | Optional parts in `[ ]` |
| **Idempotency** | $\text{State}(R^k) = \text{State}(R)$ for $k \ge 1$ | $R$ = request |

> [!NOTE]
> **Real-world utility:** This exact protocol model is the foundation of REST APIs used in production microservice architectures (e.g., Netflix, Amazon, Google). Engineers optimize for $T_{\text{avg}}$ by deploying **CDNs** at edge locations, and modern web frameworks (Express, Django, Spring Boot) generate HTTP/1.1 messages exactly in the format described above.

---

## 2.9 State Management — Cookies and Sessions

Because HTTP is **stateless**, the web needs a way to remember users across requests:

$$
\text{Cookie Workflow} \;=\; \text{Set-Cookie header} \rightarrow \text{Browser storage} \rightarrow \text{Cookie header on every subsequent request}
$$

A cookie is a name-value pair with attributes:
- `Domain`, `Path` (scope)
- `Expires` / `Max-Age` (lifetime)
- `HttpOnly`, `Secure`, `SameSite` (security flags)
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Symbolic Implementation

## 3.1 Derivation — Parsing a URL into Components

Given the RFC 3986 grammar, let us derive the **URL parser** algorithm.

**Input URL:**
```
http://user:pass@www.abc.com:8080/docs/file.html?q=hello#top
```

**Step 1: Split at `:` to extract the scheme.**
A scheme matches the regex `[a-zA-Z][a-zA-Z0-9+.-]*`.

$$
\text{scheme} \;=\; \text{URL} \cap [\text{letter, digits, +, -, .}] \;\;\text{upto the first ':'}
$$

**Step 2: After `://`, split the authority at the first `/`, `?`, or `#`.**

$$
\text{authority} \;=\; \text{URL} \big\vert_{\text{after "//" and before first "/", "?", or "#"}}
$$

**Step 3: Within authority, find the rightmost `:` (port boundary), the leftmost `@` (userinfo boundary).**

$$
\text{userinfo} \;=\; \text{authority}[0 \,:\, \text{indexOf('@')}]
$$

$$
\text{host:port} \;=\; \text{authority}[\text{indexOf('@')}+1 \,:\, \text{end}]
$$

**Step 4: Within `host:port`, find the rightmost `:` to extract port.**

$$
\text{port} \;=\; \text{host:port}[\text{lastIndexOf(':')}+1 \,:\, \text{end}]
$$

**Step 5: After authority, find `?` and `#` for query and fragment.**

$$
\text{path} \;=\; \text{URL} \big\vert_{\text{from first "/" to "?" or "#"}}
$$

$$
\text{query} \;=\; \text{URL} \big\vert_{\text{from "?"+1 to "#" or end}}
$$

$$
\text{fragment} \;=\; \text{URL} \big\vert_{\text{from "#"+1 to end}}
$$

Applying this to our example URL produces the table:

| Component | Parsed Value |
| :--- | :--- |
| scheme | `http` |
| userinfo | `user:pass` |
| host | `www.abc.com` |
| port | `8080` |
| path | `/docs/file.html` |
| query | `q=hello` |
| fragment | `top` |

> [!NOTE]
> This parser is the basis of *every* web framework's URL router (Django, Spring, Express).

---

## 3.2 Derivation — HTTP Page-Load Time (Theoretical Bound)

Consider a web page that embeds $N$ objects. The total page-load time over a single persistent connection is:

$$
T_{\text{total}} \;=\; T_{\text{base}} \;+\; \sum_{i=1}^{N} \left( T_{\text{request}_i} + T_{\text{transfer}_i} \right)
$$

**For HTTP/1.1 with one connection per object (no pipelining, default browser behavior):**

$$
T_{\text{1.1}} \;=\; T_{\text{DNS}} + T_{\text{TCP}} + T_{\text{Request}} + \sum_{i=1}^{N} \left( \text{RTT}_i + \frac{S_i}{B} \right)
$$

where $S_i$ is the size of the $i$-th object, $B$ is the bottleneck bandwidth, and $\text{RTT}_i$ is the round-trip time to that resource's server.

**For HTTP/2 (multiplexed over a single connection):**

$$
T_{\text{2.0}} \;\approx\; T_{\text{DNS}} + T_{\text{TCP}} + T_{\text{TLS}} + 1 \cdot \text{RTT} + \frac{\sum_{i=1}^{N} S_i}{B}
$$

The **speedup factor** is therefore:

$$
\text{Speedup} \;=\; \frac{T_{\text{1.1}}}{T_{\text{2.0}}} \;\approx\; \frac{N \cdot \text{RTT} + \sum S_i / B}{\text{RTT} + \sum S_i / B}
$$

For $N = 100$ objects and $\text{RTT} = 100\,\text{ms}$, the **theoretical speedup** is roughly **$\approx 50\times$** for small objects.

---

## 3.3 Full Python Implementation — A Raw HTTP/1.1 Client

The following code uses Python's `socket` module to send a **manual HTTP/1.1 request** without `urllib` or `requests`. This is exactly the message format described in Section 2.3.2.

```python
"""
File: raw_http_client.py
Description: Manual HTTP/1.1 GET request using raw sockets.
KTU Concept: Demonstrates the wire format of an HTTP request and response.
"""

import socket
import ssl
import sys
from typing import Tuple


def build_http_get_request(host: str, path: str) -> str:
    """
    Construct a well-formed HTTP/1.1 GET request.
    Per RFC 9112, the Host header is MANDATORY in HTTP/1.1.
    """
    if not path or not path.startswith("/"):
        path = "/" + path

    request_line = f"GET {path} HTTP/1.1\r\n"
    headers = [
        f"Host: {host}",
        "User-Agent: KTU-Premier-Engine/1.0",
        "Accept: text/html,application/xhtml+xml",
        "Accept-Language: en-US",
        "Connection: close",  # close after one response
    ]
    return request_line + "\r\n".join(headers) + "\r\n\r\n"


def parse_http_response(raw: bytes) -> Tuple[int, str, dict, str]:
    """
    Parse a raw HTTP response into (status_code, reason_phrase, headers, body).
    """
    try:
        head, _, body = raw.partition(b"\r\n\r\n")
        head_text = head.decode("iso-8859-1")
    except UnicodeDecodeError as exc:
        raise ValueError("Invalid HTTP response encoding") from exc

    lines = head_text.split("\r\n")
    if not lines:
        raise ValueError("Empty HTTP response")

    # Status line: HTTP/<version> <code> <reason>
    status_parts = lines[0].split(" ", 2)
    if len(status_parts) < 2 or not status_parts[0].startswith("HTTP/"):
        raise ValueError(f"Malformed status line: {lines[0]!r}")
    try:
        status_code = int(status_parts[1])
    except ValueError as exc:
        raise ValueError(f"Non-numeric status code: {status_parts[1]!r}") from exc
    reason_phrase = status_parts[2] if len(status_parts) > 2 else ""

    # Parse headers into a dict (last value wins for duplicates, per RFC 9110)
    headers: dict = {}
    for line in lines[1:]:
        if ":" not in line:
            continue
        key, _, value = line.partition(":")
        headers[key.strip().lower()] = value.strip()

    return status_code, reason_phrase, headers, body.decode("iso-8859-1", errors="replace")


def http_get(host: str, path: str = "/", port: int = 80, timeout: float = 5.0) -> None:
    """
    Open a TCP connection, send an HTTP/1.1 GET, print parsed response.
    """
    sock: socket.socket = socket.create_connection((host, port), timeout=timeout)
    try:
        request = build_http_get_request(host, path)
        sock.sendall(request.encode("iso-8859-1"))
        chunks: list = []
        while True:
            data = sock.recv(4096)
            if not data:
                break
            chunks.append(data)
    finally:
        sock.close()

    raw_response = b"".join(chunks)
    status_code, reason, headers, body = parse_http_response(raw_response)
    print(f"Status : {status_code} {reason}")
    print(f"Headers: {len(headers)} received")
    print(f"Body   : {body[:120]!r}{'...' if len(body) > 120 else ''}")


if __name__ == "__main__":
    target_host = sys.argv[1] if len(sys.argv) > 1 else "example.com"
    target_path = sys.argv[2] if len(sys.argv) > 2 else "/"
    http_get(target_host, target_path)
```

**Sample run:**
```bash
$ python raw_http_client.py example.com /
Status : 200 OK
Headers: 15 received
Body   : '<!doctype html>\n<html>\n<head>\n    <title>Example Domain</title>\n    <meta name="viewport" ...'
```

> [!IMPORTANT]
> **Why this matters at KTU:** This single program teaches you **three** exam-relevant ideas at once — TCP connection lifecycle, HTTP wire format, and response parsing. If your KTU paper asks you to "explain HTTP with an example request and response," this code is your gold-standard reference.

---

## 3.4 Full Python Implementation — A Simple HTTP Server

```python
"""
File: raw_http_server.py
Description: Minimal HTTP/1.1 server using Python's http.server.
KTU Concept: Shows the server-side response generation and Content-Length.
"""

from http.server import BaseHTTPRequestHandler, HTTPServer
from datetime import datetime
import json
from typing import Tuple


class KTUExamHandler(BaseHTTPRequestHandler):
    """Custom HTTP request handler for the KTU demo server."""

    server_version = "KTU-HTTP/1.0"

    def _set_common_headers(self, content_type: str, body_bytes: bytes) -> None:
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body_bytes)))
        self.send_header("Connection", "close")
        self.send_header("Date", datetime.utcnow().strftime("%a, %d %b %Y %H:%M:%S GMT"))
        self.end_headers()

    def do_GET(self) -> None:  # noqa: N802 (HTTP method casing convention)
        """Handle HTTP GET requests."""
        if self.path == "/":
            html = (
                "<!doctype html><html><head><title>KTU Server</title></head>"
                "<body><h1>Hello, KTU 2024!</h1>"
                "<p>This is a manual HTTP/1.1 response.</p></body></html>"
            )
            body = html.encode("utf-8")
            self.send_response(200, "OK")
            self._set_common_headers("text/html; charset=utf-8", body)
            self.wfile.write(body)
        elif self.path == "/api/time":
            payload: dict = {"server_time": datetime.utcnow().isoformat() + "Z"}
            body = json.dumps(payload).encode("utf-8")
            self.send_response(200, "OK")
            self._set_common_headers("application/json", body)
            self.wfile.write(body)
        else:
            not_found = b"<h1>404 Not Found</h1>"
            self.send_response(404, "Not Found")
            self._set_common_headers("text/html", not_found)
            self.wfile.write(not_found)

    def log_message(self, format: str, *args: Tuple) -> None:  # noqa: A002
        """Override to log to stdout in a compact format."""
        print(f"[{datetime.utcnow().isoformat()}Z] {format % args}")


def run_server(host: str = "127.0.0.1", port: int = 8000) -> None:
    server_address = (host, port)
    httpd = HTTPServer(server_address, KTUExamHandler)
    print(f"KTU HTTP server listening on http://{host}:{port}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down...")
        httpd.server_close()


if __name__ == "__main__":
    run_server()
```

> [!TIP]
> **KTU 14-Mark Tip:** The server code demonstrates the response structure (`Status Line → Headers → Blank Line → Body`) in real life. If a board question asks you to "write the response for `GET /api/time`," mimic the exact structure from this code.
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 End-to-End HTTP Transaction Flow (Mermaid Sequence Diagram)

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant B as Browser
    participant DNS as DNS Resolver
    participant S as Web Server
    participant FS as File System

    U->>B: Types URL: https://www.ktu.edu.in/
    B->>DNS: Resolve www.ktu.edu.in
    DNS-->>B: IP = 103.x.y.z
    B->>S: TCP SYN (port 443)
    S-->>B: TCP SYN-ACK
    B->>S: TCP ACK (connection established)
    B->>S: TLS ClientHello
    S-->>B: TLS ServerHello + Certificate
    B->>S: TLS Key Exchange + Finished
    Note over B,S: Encrypted channel ready
    B->>S: HTTP GET / HTTP/1.1
    Note right of S: Status: 200 OK<br/>Content-Type: text/html
    S->>FS: Read index.html
    FS-->>S: File bytes
    S-->>B: HTTP/1.1 200 OK (HTML body)
    B->>U: Render the page
    B->>S: TCP FIN (close)
    S-->>B: TCP FIN-ACK
```

---

## 4.2 Web Architecture Topology (Mermaid Block Diagram)

```mermaid
graph TB
    subgraph Client["Client Side"]
        CB["Web Browser<br/>(Chrome / Firefox)"]
        CA["Browser Cache<br/>(HTTP Cache)"]
        CC["Cookie Store"]
    end

    subgraph Network["Network Layer"]
        DNS["DNS Resolver<br/>UDP Port 53"]
        CDN["CDN / Reverse Proxy<br/>(Cloudflare, Akamai)"]
    end

    subgraph Server["Server Side"]
        WS["Web Server<br/>(Nginx / Apache)"]
        APP["Application Server<br/>(Node.js / Django)"]
        DB[("Database<br/>(PostgreSQL)")]
    end

    CB -- "1. URL Lookup" --> DNS
    CB -- "2. HTTP Request" --> CDN
    CB -- "3a. Cache Hit" --> CA
    CB -- "3b. Cache Miss" --> CDN
    CDN -- "4. Forwarded Request" --> WS
    WS -- "5. FastCGI / Reverse Proxy" --> APP
    APP -- "6. SQL Query" --> DB
    DB -- "7. Result Set" --> APP
    APP -- "8. HTML Response" --> WS
    WS -- "9. HTTP Response" --> CDN
    CDN -- "10. Cached Response" --> CB
    CB -- "11. Set-Cookie" --> CC
    CC -- "12. Cookie Header" --> CB
```

---

## 4.3 HTTP Request vs. Response Message Anatomy (Mermaid Block Diagram)

```mermaid
graph LR
    subgraph REQ["HTTP REQUEST MESSAGE"]
        R1["Request Line<br/>Method URI Version<br/>GET /index.html HTTP/1.1"]
        R2["Headers<br/>Host, User-Agent,<br/>Accept, Cookie, ..."]
        R3["Blank Line<br/>CRLF CRLF"]
        R4["Entity Body<br/>(optional, e.g., POST data)"]
    end

    subgraph RES["HTTP RESPONSE MESSAGE"]
        S1["Status Line<br/>HTTP/1.1 200 OK"]
        S2["Headers<br/>Content-Type,<br/>Content-Length, Set-Cookie, ..."]
        S3["Blank Line<br/>CRLF CRLF"]
        S4["Entity Body<br/>(HTML / JSON / binary)"]
    end

    REQ  -->  RES
```

---

## 4.4 HTTP Version Evolution — Decision Tree

```mermaid
graph TD
    A["HTTP Request Arrives"]
    A --> B{"Transport?"}
    B -- "TCP" --> C{"Multiplexing?"}
    C -- "No (text, one at a time)" --> D{"Persistent?"}
    D -- "No" --> E["HTTP/1.0<br/>New TCP per object"]
    D -- "Yes" --> F["HTTP/1.1<br/>Keep-Alive, Pipelining"]
    C -- "Yes (binary, HPACK)" --> G["HTTP/2.0<br/>Single TCP, many streams"]
    B -- "QUIC / UDP" --> H["HTTP/3.0<br/>No HOL Blocking"]
    F --> I["Used by ~30% of web"]
    G --> J["Used by ~50% of web"]
    H --> K["Used by ~20% of web<br/>(growing)"]
```
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank

> [!NOTE]
> All questions below are mapped to the **OECST724 — Computer Networks** course outcomes. Marks follow the KTU 2024 scheme: **Part A = 3 marks**, **Part B = 14 marks** with internal choice.

---

## Part A — Short Answer Questions (3 Marks Each)

### Question A1 `[KTU University Exam – July 2024]`
**Differentiate between HTTP and HTTPS. Mention the default port numbers for each.** (3 Marks) | **CO1** | **RBT Level: Understand**

**Model Answer:**
| Parameter | HTTP | HTTPS |
| :--- | :--- | :--- |
| Full form | HyperText Transfer Protocol | HTTP Secure |
| Default port | **80** | **443** |
| Encryption | None (plaintext) | TLS/SSL encryption |
| Certificate required? | No | Yes (X.509 digital certificate) |
| URL scheme | `http://` | `https://` |
| Speed | Faster (no crypto overhead) | Slightly slower (handshake + encryption) |
| Data integrity | No built-in integrity | Provides authentication + integrity + confidentiality |

**Valuation Key:** [Tabular comparison with 4+ rows: 2 Marks] [Default ports correctly stated: 1 Mark]

---

### Question A2 `[KTU University Exam – Dec 2023]`
**Explain the components of a URL with a suitable example.** (3 Marks) | **CO1** | **RBT Level: Remember**

**Model Answer:**
A **URL (Uniform Resource Locator)** is a reference to a web resource. The general format as per **RFC 3986** is:

$$
\text{scheme} : \vert \vert \text{authority} \text{path} [? \text{query}] [\# \text{fragment}]
$$

**Example:** `https://www.ktu.edu.in:443/exams/index.html?sem=7#syllabus`

| Component | Value |
| :--- | :--- |
| Scheme (Protocol) | `https` |
| Authority → Host | `www.ktu.edu.in` |
| Authority → Port | `443` |
| Path | `/exams/index.html` |
| Query | `sem=7` |
| Fragment | `syllabus` |

**Valuation Key:** [Correctly stating the generic format: 1 Mark] [Component table for the example: 2 Marks]

---

## Part B — Long Answer Questions (14 Marks Each)

> Each Part B question carries **14 marks** and is internally divided. Two alternative choices are provided — students answer **one**.

### **Question B1 (Option A)** `[KTU University Exam – Dec 2023]`

**(a)** Explain the **HTTP request and response message format** in detail. Illustrate with a suitable example for each. (7 Marks) | **CO2** | **RBT Level: Understand**

**(b)** Describe the **persistent vs non-persistent HTTP connections** with a timing diagram for retrieving a page containing 5 objects. Assume RTT = 100 ms and the HTML file itself requires 1 RTT. Compare the total time taken in both cases. (7 Marks) | **CO3** | **RBT Level: Apply**

---

#### Model Solution for (a) — 7 Marks

**HTTP Request Message Format:**
An HTTP request consists of four parts:

1. **Request Line:** `Method SP Request-URI SP HTTP-Version CRLF`
2. **Headers:** Zero or more `Header-Name: Header-Value CRLF`
3. **Blank Line:** A single `CRLF` separating headers from the body
4. **Entity Body:** Optional payload (e.g., for POST/PUT)

**Example Request:**
```
GET /hello.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
Connection: keep-alive

```

**HTTP Response Message Format:**
An HTTP response also has four parts:

1. **Status Line:** `HTTP-Version SP Status-Code SP Reason-Phrase CRLF`
2. **Headers:** Zero or more `Header-Name: Header-Value CRLF`
3. **Blank Line:** A single `CRLF`
4. **Entity Body:** The actual resource (HTML, JSON, image, etc.)

**Example Response:**
```
HTTP/1.1 200 OK
Date: Mon, 15 Sep 2024 10:30:00 GMT
Server: Apache/2.4
Content-Type: text/html
Content-Length: 1024
Connection: close

<html><body>Hello KTU!</body></html>
```

**Valuation Key:** [Drawing the 4-part request format correctly: 1.5 Marks] [Example request with all parts: 1 Mark] [Response 4-part format: 1.5 Marks] [Example response: 1 Mark] [Explanation of header semantics: 2 Marks]

---

#### Model Solution for (b) — 7 Marks

**Non-Persistent HTTP (HTTP/1.0 behaviour):**
For each of the 5 objects, a **separate TCP connection** is opened.

**Time required for one object:**
- 1 RTT to establish TCP connection
- 1 RTT for HTTP request and first byte of response
- **Total = 2 RTT per object**

For the base HTML + 5 referenced objects (total 6 files):
$$
T_{\text{non-persistent}} = 6 \times 2 \times \text{RTT} = 12 \times 100\,\text{ms} = 1200\,\text{ms}
$$

**Persistent HTTP (HTTP/1.1 with `Connection: keep-alive`):**
A **single TCP connection** is reused for all 6 files.

- 1 RTT for the initial TCP handshake (one-time)
- 1 RTT for the HTML request/response
- 1 RTT for each of the 5 subsequent objects (no handshake overhead)

$$
T_{\text{persistent}} = \underbrace{1 \times \text{RTT}}_{\text{TCP}} + \underbrace{6 \times 1 \times \text{RTT}}_{\text{request/response}} = 7 \times 100\,\text{ms} = 700\,\text{ms}
$$

**Comparison Table:**

| Metric | Non-Persistent (HTTP/1.0) | Persistent (HTTP/1.1) |
| :--- | :---: | :---: |
| TCP connections opened | 6 | 1 |
| Total time | 1200 ms | 700 ms |
| Speedup | 1× | **~1.71×** |

**Valuation Key:** [Stating the per-object timing formula: 1 Mark] [Non-persistent calculation: 2 Marks] [Persistent calculation: 2 Marks] [Comparison table: 1 Mark] [Final speedup: 1 Mark]

> [!WARNING]
> **KTU Examiner's Pitfall — Common Mark Losers:**
> 1. Many students forget the **initial TCP handshake RTT** in persistent mode. You must include **1 RTT for TCP setup** even with keep-alive.
> 2. Do **not** confuse HTTP request RTT with file transfer time. When the question says "1 RTT per file," treat the file transfer as instantaneous unless a transfer time is given.
> 3. Always **label the units (ms / s)** in your final answer.
> 4. If the question says *pipelined persistent*, you may answer $T = 1 \text{ TCP RTT} + 1 \text{ RTT}$ since multiple requests can be in-flight. **State your assumption explicitly**.

---

### **Question B1 (Option B)** `[KTU University Exam – July 2024]`

**(a)** Discuss the **architecture of the World Wide Web** with a neat diagram. Explain the role of the **web browser, web server, and HTTP** in this architecture. (7 Marks) | **CO1** | **RBT Level: Understand**

**(b)** Compare **HTTP/1.0, HTTP/1.1, HTTP/2.0, and HTTP/3.0** based on connection type, multiplexing, header compression, and transport protocol. Briefly explain the **HOL (Head-of-Line) blocking** problem and how it is resolved in HTTP/2 and HTTP/3. (7 Marks) | **CO2** | **RBT Level: Apply**

---

#### Model Solution for (a) — 7 Marks

**WWW Architecture — Three-Tier Model:**

The WWW operates on a **client–server** architecture over the **Internet** infrastructure. The main components are:

1. **Client (Web Browser):**
   - User-facing application (Chrome, Firefox, Edge, Safari)
   - Sends HTTP requests and renders HTTP responses
   - Maintains a cache, cookie store, and session state

2. **Network (Internet + DNS + Proxies):**
   - Routes HTTP requests from the client to the server
   - DNS resolves domain names to IP addresses
   - Proxies/CDNs cache and forward requests

3. **Server (Web Server + Application Server + Database):**
   - Receives HTTP requests and returns HTTP responses
   - Examples: Nginx, Apache, IIS
   - May delegate to an application server (Node.js, Django, Spring) and a database

**Roles:**
- **Web Browser:** Parses HTML, executes JavaScript, renders CSS, manages cookies and caches.
- **Web Server:** Serves static files, handles authentication, may pass dynamic requests to the application server.
- **HTTP:** The *common language* between browser and server. It is the **application-layer protocol** that defines request/response semantics.

**Reference Diagram:**
```
┌──────────┐        HTTP Request          ┌──────────────┐
│ Browser  │  ─────────────────────────►   │  Web Server  │
│ (Client) │  ◄─────────────────────────   │   (Server)   │
└──────────┘        HTTP Response          └──────────────┘
       │                                        │
       │ HTTPS / TLS encryption                 │ Application logic
       │                                        ▼
       │                                 ┌──────────────┐
       │                                 │ App + DB     │
       │                                 └──────────────┘
       ▼
┌──────────┐
│  Cache   │ (Browser cache, CDN, Proxy)
└──────────┘
```

**Valuation Key:** [Naming all 3 tiers of WWW: 1.5 Marks] [Browser role explained: 1.5 Marks] [Server role explained: 1.5 Marks] [HTTP role explained: 1.5 Marks] [Diagram drawn: 1 Mark]

---

#### Model Solution for (b) — 7 Marks

**Comparison Table:**

| Feature | HTTP/1.0 | HTTP/1.1 | HTTP/2.0 | HTTP/3.0 |
| :--- | :--- | :--- | :--- | :--- |
| Year | 1996 | 1997 | 2015 | 2022 |
| Connection | Non-persistent | Persistent (keep-alive) | Persistent, multiplexed | Persistent, multiplexed |
| Multiplexing | No | No (pipelining only) | **Yes (binary framing)** | **Yes (over QUIC)** |
| Header Compression | No | No | **Yes (HPACK)** | **Yes (QPACK)** |
| Transport | TCP | TCP | TCP (TLS optional) | **QUIC (UDP-based)** |
| HOL Blocking | Yes (TCP) | Yes (TCP) | Partial (TCP-level) | **Eliminated** |
| Status | Legacy | Widely used | Dominant | Growing |

**Head-of-Line (HOL) Blocking — The Problem:**
In a pipelined TCP connection, the receiver must process packets **in order**. If the 1st packet of a stream is lost, all subsequent packets (even of unrelated streams) must wait in the receive buffer until the lost packet is retransmitted. This stalls all parallel streams on that connection.

**How HTTP/2 Mitigates It:**
HTTP/2 introduces **multiplexing** at the application layer — many request/response pairs share a single TCP connection, and each is split into frames that can be interleaved. So if one stream's frame is delayed, frames from other streams can still be processed. However, TCP-level HOL blocking (loss recovery) still affects all streams.

**How HTTP/3 Resolves It Fully:**
HTTP/3 replaces TCP with **QUIC**, which runs over UDP. QUIC provides **independent streams** at the transport layer — loss in one stream does **not** block any other stream. This is the **true end of HOL blocking**.

**Valuation Key:** [Comparison table fully filled: 3 Marks] [HOL definition: 1 Mark] [HTTP/2 partial fix: 1.5 Marks] [HTTP/3 full fix with QUIC: 1.5 Marks]

> [!WARNING]
> **KTU Examiner's Pitfall:**
> 1. Do **not** claim that HTTP/2 *fully* eliminates HOL blocking. It eliminates **application-layer** HOL blocking but **not** the TCP transport-level HOL blocking. HTTP/3 is the first to address both.
> 2. Students often confuse **pipelining** (HTTP/1.1) with **multiplexing** (HTTP/2). Pipelining still suffers from HOL blocking; multiplexing does not.
> 3. Do not write "HTTP/3 uses TCP" — it explicitly uses **QUIC over UDP** to bypass TCP's limitations.

---

## Topic Recap & Important Things to Remember

- [x] The **WWW** is a service running on top of the **Internet**, accessible via the **client–server** model and governed by the **HTTP** protocol family.
- [x] A **URL** has the form `scheme://host[:port]/path[?query][#fragment]`. Only the **scheme** and **host** are mandatory.
- [x] **HTTP** is a **text-based, request–response, application-layer** protocol. **HTTPS = HTTP + TLS** for security.
- [x] Default ports: **HTTP → 80**, **HTTPS → 443**.
- [x] An HTTP **request** = *Request Line* + *Headers* + *Blank Line* + *Optional Body*. An HTTP **response** = *Status Line* + *Headers* + *Blank Line* + *Body*.
- [x] **HTTP methods:** `GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH`. **Idempotent** methods: GET, HEAD, PUT, DELETE.
- [x] **Status code classes:** 1xx Informational, 2xx Success, 3xx Redirection, 4xx Client Error, 5xx Server Error. Memorize **200, 301, 304, 400, 401, 403, 404, 500, 502, 503**.
- [x] **HTTP/1.0** = non-persistent; **HTTP/1.1** = persistent + pipelining; **HTTP/2** = binary framing + multiplexing + HPACK; **HTTP/3** = QUIC over UDP, eliminates HOL blocking.
- [x] For $N$ objects, non-persistent HTTP takes $N \times 2$ RTT (plus 1 RTT for the base HTML) ≈ $2N$ RTT; persistent HTTP takes roughly $1 + N$ RTT.
- [x] **HOL Blocking** = a stalled/head packet blocks all subsequent packets on the same connection. HTTP/2 mitigates at app layer; HTTP/3 fully resolves via QUIC.
- [x] **Statelessness** of HTTP is overcome using **Cookies** (`Set-Cookie` response header + `Cookie` request header) and **Sessions** (server-side state tied to a session ID).
- [x] **Caching** uses headers like `Cache-Control`, `ETag`, `Last-Modified`, and conditional requests with `If-None-Match` / `If-Modified-Since` yielding a **304 Not Modified**.
<!-- SECTION_5_END -->
