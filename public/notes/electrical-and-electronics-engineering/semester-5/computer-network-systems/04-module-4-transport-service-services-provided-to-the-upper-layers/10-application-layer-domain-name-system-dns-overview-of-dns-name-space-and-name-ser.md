---
title: "Application Layer –Domain Name System (DNS) – overview of DNS name space and Name servers"
subject: "COMPUTER NETWORK SYSTEMS"
module: "Module 4: Transport service – Services provided to the upper layers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3649b"
status: "completed"
scrapedAt: "2026-05-23T16:20:28.694Z"
---
# COMPUTER NETWORK SYSTEMS - Module 4: Transport Service - Services Provided to Upper Layers

## Topic: Application Layer – Domain Name System (DNS) – Overview of DNS Name Space and Name Servers

This module delves into the crucial services provided by the Transport Layer and the Application Layer, with a specific focus on the Domain Name System (DNS). DNS is a fundamental component of the internet, translating human-readable domain names into machine-readable IP addresses.

### Alignment with Course Outcomes:

*   **CO4: Explain the services provided by the transport layer and application layer. (Knowledge Level: K2)**
    *   This topic directly addresses the explanation of a key application layer service – DNS. We will understand *what* DNS does and *how* it provides its service.

### Learning Outcomes:

*   Understand the hierarchical structure of the DNS name space.
*   Differentiate between top-level domains (TLDs), second-level domains (SLDs), and host names.
*   Explain the concept of DNS zones and how they are managed.
*   Describe the different types of DNS name servers (Root, TLD, Authoritative, Caching/Recursive).
*   Explain the role and function of each type of DNS server in the resolution process.
*   Understand how DNS facilitates the mapping of domain names to IP addresses.

---

### 1. Introduction to the Domain Name System (DNS)

The internet is a vast network of computers, each uniquely identified by an IP address (e.g., `192.168.1.1`). However, humans find it difficult to remember these numerical addresses. The **Domain Name System (DNS)** acts as a distributed directory service that translates human-readable domain names (e.g., `www.google.com`) into their corresponding IP addresses.

*   **Key Concept:** DNS is a hierarchical, distributed naming system for computers, services, or any resource connected to the Internet or a private network.
*   **Analogy:** Think of DNS as the "phonebook" of the internet. You look up a person's name (domain name) to find their phone number (IP address).

#### 1.1 Why DNS is Necessary (CO4)

*   **Usability:** Makes the internet easier to use and navigate by allowing users to remember names instead of numbers.
*   **Flexibility:** Allows for changes in IP addresses without requiring users to update their records, as the DNS mapping is updated.
*   **Scalability:** Manages a massive and constantly growing number of internet resources.

#### 1.2 DNS and the Application Layer (CO4)

DNS operates at the **Application Layer** of the TCP/IP model. It relies on the Transport Layer (typically UDP for speed, but sometimes TCP) to carry its messages between clients and servers.

*   **Textbook Reference:** Tanenbaum, "Computer Networks," Chapter 8: The Application Layer, discusses DNS as a fundamental application layer protocol. Forouzan, "Data Communication and Networking," Chapter 14: Application Layer, also covers DNS in detail.

---

### 2. The DNS Name Space

The DNS name space is organized hierarchically, resembling an inverted tree structure.

#### 2.1 Hierarchical Structure (Learning Outcome 1)

*   **Root:** The top of the hierarchy. Represented by a dot (`.`) or an empty string.
*   **Domains:** Branches of the tree. Each node in the tree is a domain name.
*   **Subdomains:** Domains that are part of a larger domain.

#### 2.2 Domain Name Components (Learning Outcome 1)

Domain names are composed of labels separated by dots. Each label represents a node in the tree.

*   **Labels:**
    *   Can contain alphanumeric characters (a-z, A-Z, 0-9) and hyphens (`-`).
    *   Cannot start or end with a hyphen.
    *   Case-insensitive (though typically written in lowercase).
    *   Maximum length of 63 characters.
*   **Fully Qualified Domain Name (FQDN):** A complete domain name that specifies the exact location of a host in the DNS hierarchy. It ends with a trailing dot (e.g., `www.google.com.`). The trailing dot signifies the root domain.

#### 2.3 Types of Domains (Learning Outcome 1)

*   **Top-Level Domains (TLDs):**
    *   The highest level in the hierarchy, directly under the root.
    *   Represent categories of organizations or countries.
    *   **Examples:**
        *   **Generic TLDs (gTLDs):** `.com` (commercial), `.org` (organization), `.net` (network), `.edu` (education), `.gov` (government), `.mil` (military), `.int` (international organizations).
        *   **Country Code TLDs (ccTLDs):** Two-letter codes representing countries (e.g., `.us` for United States, `.uk` for United Kingdom, `.in` for India).
*   **Second-Level Domains (SLDs):**
    *   Domains registered by individuals or organizations under a TLD.
    *   **Example:** In `www.google.com`, `google` is the SLD under the `.com` TLD.
*   **Host Names (or Third-Level Domains):**
    *   Specific machines or services within a domain.
    *   **Example:** In `www.google.com`, `www` is a host name. Other examples could be `mail`, `ftp`, `vpn`.

#### 2.4 DNS Zones (Learning Outcome 2)

*   **Definition:** A zone is a portion of the DNS name space that is managed by a specific administrative entity. It contains a set of DNS records for a particular domain and its subdomains.
*   **Zone File:** A file that contains the DNS records for a zone.
*   **Delegation:** A zone can delegate responsibility for a portion of its name space to another zone. For example, the `.com` zone delegates responsibility for `google.com` to the `google.com` zone.

**Example:**
Consider the domain `example.com`.
*   The zone for `example.com` would contain records for `example.com` itself, and potentially subdomains like `www.example.com`, `mail.example.com`, etc.
*   The administrator of `example.com` manages this zone.

---

### 3. DNS Name Servers

DNS is a distributed system, meaning the responsibility for managing the name space is spread across many servers.

#### 3.1 Types of DNS Name Servers (Learning Outcomes 3 & 4)

1.  **Root Name Servers:**
    *   **Function:** Hold information about the top-level domains (TLDs). They know the IP addresses of the authoritative name servers for all TLDs.
    *   **Hierarchy:** There are 13 logical root server clusters, operated by various organizations worldwide.
    *   **Resolution Process:** When a DNS resolver needs to find the IP address for `www.example.com.`, it first queries a root server. The root server doesn't know the IP address for `www.example.com` but knows which name server is authoritative for the `.com` TLD. It returns the IP address of a `.com` TLD server.

2.  **Top-Level Domain (TLD) Name Servers:**
    *   **Function:** Hold information about domains directly under their TLD. For example, the `.com` TLD servers know the IP addresses of the authoritative name servers for `google.com`, `microsoft.com`, etc.
    *   **Resolution Process:** After querying a root server, the resolver then queries a TLD server (e.g., for `.com`). The `.com` TLD server doesn't know the IP address for `www.example.com` but knows which name server is authoritative for the `example.com` domain. It returns the IP address of the `example.com` authoritative name server.

3.  **Authoritative Name Servers:**
    *   **Function:** Provide the definitive answers (IP addresses) for host names within their specific zones. They hold the actual DNS records for the domains they manage.
    *   **Resolution Process:** Finally, the resolver queries the authoritative name server for `example.com`. This server has the record for `www.example.com` and returns its IP address to the resolver.
    *   **Redundancy:** Typically, multiple authoritative name servers exist for a domain to provide fault tolerance.

4.  **Caching Name Servers (or Recursive/Resolving Name Servers):**
    *   **Function:** These are the servers that most end-users' devices (clients) communicate with. Their primary role is to receive DNS queries from clients, perform the necessary lookups by contacting other DNS servers (root, TLD, authoritative), and then cache the results for a period (defined by the Time-To-Live or TTL value).
    *   **Recursive Query:** When a client asks a caching server for an IP address, it makes a *recursive query*. The caching server is responsible for finding the answer, even if it means querying multiple other servers.
    *   **Caching:** By storing recent responses, caching servers significantly speed up future lookups for the same domain names and reduce the load on other DNS servers.
    *   **Forwarders:** Caching servers can also be configured to forward queries to other DNS servers if they cannot resolve them locally or if they have specific routing policies.

#### 3.2 How DNS Resolution Works: An Example (Learning Outcome 4)

Let's trace the path of a DNS query for `www.example.com`:

1.  **Client Query:** A user's browser tries to access `www.example.com`. The user's operating system (acting as a DNS client) sends a DNS query to its configured DNS resolver (a caching name server). The query is typically for the IP address (A record) of `www.example.com`.

2.  **Caching Server Check:** The caching name server checks its local cache. If it has a recent record for `www.example.com`, it returns the IP address directly to the client.

3.  **Root Server Query:** If the record is not in the cache, the caching server starts the resolution process. It sends a query to one of the **root name servers**: "Where can I find information about `.com`?"
    *   The root server replies with the IP addresses of the **TLD name servers** responsible for `.com`.

4.  **TLD Server Query:** The caching server then sends a query to one of the `.com` TLD name servers: "Where can I find information about `example.com`?"
    *   The `.com` TLD server replies with the IP addresses of the **authoritative name servers** for `example.com`.

5.  **Authoritative Server Query:** The caching server sends a query to one of the `example.com` authoritative name servers: "What is the IP address for `www.example.com`?"
    *   The authoritative name server looks up the `A` record for `www.example.com` and returns the IP address (e.g., `93.184.216.34`) to the caching server.

6.  **Caching and Response:** The caching server receives the IP address.
    *   It stores this record in its cache with an associated TTL.
    *   It then returns the IP address (`93.184.216.34`) to the user's client.

7.  **Browser Connection:** The browser can now use this IP address to establish a connection with the web server at `www.example.com`.

#### 3.3 DNS Records

DNS servers store information in the form of **resource records (RRs)**. Each RR has a type, name, value, and TTL.

*   **Common RR Types:**
    *   **A (Address):** Maps a hostname to an IPv4 address.
        *   *Example:* `www.example.com.  IN  A  93.184.216.34`
    *   **AAAA (IPv6 Address):** Maps a hostname to an IPv6 address.
        *   *Example:* `www.example.com.  IN  AAAA  2606:2800:220:1:248:1893:25c8:1946`
    *   **CNAME (Canonical Name):** Creates an alias for a hostname. Used to point one domain name to another.
        *   *Example:* `ftp.example.com.  IN  CNAME  www.example.com.` (If `ftp` should resolve to the same IP as `www`)
    *   **MX (Mail Exchanger):** Specifies the mail servers responsible for receiving email for a domain.
        *   *Example:* `example.com.  IN  MX  10  mail.example.com.` (The `10` is a preference value, lower is preferred)
    *   **NS (Name Server):** Specifies the authoritative name servers for a zone.
        *   *Example:* `example.com.  IN  NS  ns1.example.com.`
    *   **SOA (Start of Authority):** Provides authoritative information about a DNS zone, including the primary name server, email of the domain administrator, domain serial number, and various timers.
        *   *Example:* `example.com.  IN  SOA  ns1.example.com. admin.example.com. ( 2023102701 7200 3600 1209600 3600 )`

*   **Textbook Reference:** Forouzan, "Data Communication and Networking," Chapter 14 discusses various DNS record types.

---

### 4. Important Points to Remember

*   **Hierarchical Structure:** DNS is a tree-like structure with the root at the top.
*   **Distributed Nature:** The management of the DNS name space is spread across many servers worldwide.
*   **Name to IP Resolution:** The primary function of DNS is to translate human-readable domain names into machine-readable IP addresses.
*   **Caching:** Caching name servers are crucial for performance and reducing load by storing recent DNS responses.
*   **TTL (Time-To-Live):** DNS records have a TTL, which determines how long a resolver can cache a record before it needs to re-query the authoritative server.
*   **UDP vs. TCP:** DNS queries typically use UDP for speed, but TCP is used for zone transfers or when UDP packets are too large.

---

### 5. Practice Questions and Exercises

**Multiple Choice Questions (MCQs):**

1.  Which layer of the TCP/IP model does DNS primarily operate on?
    a) Transport Layer
    b) Network Layer
    c) Application Layer
    d) Data Link Layer

2.  In the domain name `www.example.com.`, which part represents the Top-Level Domain (TLD)?
    a) `www`
    b) `example`
    c) `com`
    d) The trailing dot (`.`)

3.  What is the primary role of a root name server?
    a) To provide IP addresses for all hostnames.
    b) To provide IP addresses of authoritative name servers for TLDs.
    c) To resolve hostnames for specific domains.
    d) To cache DNS records for faster lookups.

4.  Which type of DNS query is made by a client to its local caching server, expecting the server to find the answer?
    a) Iterative Query
    b) Recursive Query
    c) Inverse Query
    d) Forwarding Query

5.  A `CNAME` record is used to:
    a) Map a hostname to an IPv4 address.
    b) Specify mail servers for a domain.
    c) Create an alias for a hostname.
    d) Provide authoritative information about a DNS zone.

**Short Answer Questions:**

6.  Explain the difference between a recursive and an iterative DNS query.
7.  Describe the role of a caching name server in the DNS resolution process.
8.  What is a DNS zone, and how is it related to domain delegation?
9.  List at least three common types of DNS resource records and their purpose.

---

### Answers to Practice Questions

**MCQs:**

1.  **c) Application Layer**
2.  **c) `com`**
3.  **b) To provide IP addresses of authoritative name servers for TLDs.**
4.  **b) Recursive Query**
5.  **c) Create an alias for a hostname.**

**Short Answer Questions:**

6.  **Recursive Query:** The client asks the server to provide the answer, and the server is responsible for performing all necessary queries to other servers to find the answer. The server returns either the answer or an error.
    **Iterative Query:** The server provides the "best" answer it can, which might be the IP address of another server that is expected to have the answer. The client then makes subsequent queries to those servers until it finds the answer or exhausts its options.

7.  A caching name server (also known as a recursive resolver) is the server that a client typically queries. It receives queries from clients and, if the answer isn't in its cache, it iteratively queries root servers, TLD servers, and authoritative servers to find the IP address. Once it gets the answer, it caches it for a specified TTL and returns it to the client. This caching speeds up future lookups and reduces the load on other DNS servers.

8.  A DNS zone is a portion of the DNS name space that is administered by a specific organization or individual. It contains a set of DNS records for a particular domain and its subdomains. Domain delegation is the process by which a parent zone (e.g., `.com`) delegates responsibility for a subdomain (e.g., `example.com`) to a different set of name servers, effectively creating a new zone for that subdomain.

9.  *   **A (Address):** Maps a hostname to an IPv4 address.
    *   **AAAA (IPv6 Address):** Maps a hostname to an IPv6 address.
    *   **CNAME (Canonical Name):** Creates an alias for a hostname, pointing it to another domain name.
    *   **MX (Mail Exchanger):** Specifies the mail servers responsible for receiving email for a domain, along with their preference order.
    *   **NS (Name Server):** Identifies the authoritative name servers for a given DNS zone.
    *   **SOA (Start of Authority):** Provides primary authoritative information about a DNS zone.

---
This concludes the study notes for the Domain Name System (DNS) overview, focusing on its name space and name servers, aligning with the learning outcomes and course objectives.
