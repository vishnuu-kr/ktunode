---
title: "Domain Name System (DNS)."
subject: "COMPUTER NETWORKS"
module: "Module 2: TCP/IP protocol suite: Introduction"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff045"
status: "completed"
scrapedAt: "2026-05-23T17:59:59.811Z"
---
# Computer Networks: Module 2 - TCP/IP Protocol Suite: Introduction

## Topic: Domain Name System (DNS)

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the need for DNS and its role in the Internet.
*   Describe the hierarchical structure of the DNS.
*   Explain the different types of DNS servers.
*   Illustrate the process of DNS resolution.
*   Identify common DNS record types and their purposes.
*   Discuss DNS security considerations.

---

### 1. Introduction to DNS: The Internet's Phonebook

**Key Concept:** The Internet relies on numerical IP addresses (e.g., `192.168.1.1`) for devices to communicate. However, humans find it easier to remember human-readable names, like `www.google.com`. The Domain Name System (DNS) acts as a distributed directory service that translates these human-friendly domain names into their corresponding IP addresses.

**Analogy:** Think of DNS as the phonebook of the internet. When you want to call someone, you look up their name in the phonebook to find their phone number. Similarly, when you want to access a website, your computer uses DNS to find the website's IP address.

**Importance of DNS:**

*   **User-friendliness:** Simplifies internet navigation for users.
*   **Scalability:** Allows for easy management and growth of the internet.
*   **Flexibility:** IP addresses can change without affecting the domain name, allowing for easier server management and migration.
*   **Abstraction:** Hides the underlying numerical IP addresses from end-users.

**Relevant Textbook Content:**

*   **Kurose & Ross:** Chapter 5, "DNS: The Domain Name System." They emphasize DNS as an application-layer protocol that is fundamental to the functioning of the internet.
*   **Forouzan:** Chapter 23, "Domain Name System." Forouzan details DNS as a hierarchical system that maps names to addresses, similar to a hierarchical database.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Summarize the principles and components of computer networks. DNS is a critical component that enables the translation between names and addresses, a fundamental principle of network operation.
*   **CO2 (K2):** Demonstrate protocols and the functions of different layers. DNS operates at the application layer and is a key protocol for name resolution.

---

### 2. The Hierarchical Structure of DNS

**Key Concept:** DNS is structured as a hierarchical, tree-like system. This hierarchy is organized into **domains**, which are groups of network resources.

**Structure:**

*   **Root Domain (.)**: The topmost level of the hierarchy. There is only one root.
*   **Top-Level Domains (TLDs)**: Domains directly under the root. Examples include:
    *   **gTLDs (Generic TLDs):** `.com`, `.org`, `.net`, `.edu`, `.gov`, `.mil`.
    *   **ccTLDs (Country Code TLDs):** `.us`, `.uk`, `.ca`, `.in`.
*   **Second-Level Domains (SLDs)**: Domains under TLDs, usually representing organizations or companies. For example, `google` in `www.google.com`.
*   **Subdomains**: Domains under SLDs, allowing for further organization. For example, `mail` in `mail.google.com`.

**Domain Name Syntax:**

*   Domain names are composed of labels separated by dots.
*   Labels are case-insensitive.
*   Labels can contain letters (a-z), numbers (0-9), and hyphens (-).
*   Hyphens cannot be at the beginning or end of a label.
*   The maximum length of a domain name is 253 characters.

**Example:** `www.mail.google.com`

*   `com`: TLD
*   `google`: SLD
*   `mail`: Subdomain
*   `www`: Subdomain

**Important Points to Remember:**

*   The hierarchy is crucial for distributed management and scalability.
*   Each domain can be managed by a specific organization.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Summarize the principles and components of computer networks. Understanding the hierarchical structure is a key principle of DNS, a vital network component.
*   **CO3 (K3):** Analyze the concept of routing and addressing protocols. DNS names are directly related to IP addresses, which are used for routing.

---

### 3. Types of DNS Servers

**Key Concept:** DNS is a distributed system, meaning that the information is not stored on a single server. Instead, it's spread across various types of DNS servers.

**Types of DNS Servers:**

*   **DNS Resolver (Recursive Resolver):**
    *   Also known as a DNS recursor.
    *   Typically operated by ISPs or public DNS providers (e.g., Google DNS, Cloudflare DNS).
    *   When a client requests a DNS lookup, the resolver initiates the queries to other DNS servers on behalf of the client.
    *   It performs recursive queries, meaning it will follow the chain of DNS servers until it gets the final IP address.
    *   **Example:** Your home router often acts as a DNS resolver, forwarding requests to your ISP's DNS servers.

*   **Root Name Servers:**
    *   There are 13 logical root server "addresses" globally, but they are physically implemented as many servers in different locations.
    *   They know the IP addresses of the Top-Level Domain (TLD) servers (e.g., the server responsible for `.com`).
    *   When a resolver doesn't know the IP address, it asks a root server.

*   **Top-Level Domain (TLD) Name Servers:**
    *   Responsible for specific TLDs (e.g., `.com`, `.org`, `.net`).
    *   They know the IP addresses of the authoritative name servers for domains within their TLD (e.g., the servers responsible for `google.com`).

*   **Authoritative Name Servers:**
    *   Hold the actual DNS records for a specific domain.
    *   They are the ultimate source of truth for a domain's IP address and other information.
    *   When a resolver gets to this point, it receives the definitive answer.

**Important Points to Remember:**

*   The distributed nature of DNS makes it resilient and scalable.
*   Recursive resolvers handle the burden of querying multiple servers.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Summarize the principles and components of computer networks. The different types of servers and their roles are key components of the DNS system.
*   **CO2 (K2):** Demonstrate protocols and the functions of different layers. DNS resolution involves communication between different servers, illustrating protocol interactions.

---

### 4. The Process of DNS Resolution

**Key Concept:** When you type a domain name into your browser, a series of queries are made across different DNS servers to find the corresponding IP address. This is known as DNS resolution.

**Steps in DNS Resolution (Iterative vs. Recursive):**

DNS resolution can occur in two main ways:

*   **Recursive Resolution:** The client asks the resolver to do all the work. The resolver queries other servers until it finds the answer and returns it to the client. This is the most common method for end-users.
*   **Iterative Resolution:** The client asks the resolver, and the resolver returns the "best" answer it has. If it doesn't have the answer, it directs the client to another server. The client then asks that server, and so on.

**Example of Recursive Resolution (Client-side):**

1.  **User enters `www.example.com` into browser.**
2.  **Client's OS checks its local cache.** If not found, it sends a DNS query to its configured DNS resolver (e.g., ISP's DNS server or a public DNS server).
3.  **DNS Resolver (Recursive) receives the query.**
    *   It checks its own cache. If the record is found and not expired, it returns the IP address to the client.
    *   If not found in cache, the resolver contacts a **Root Name Server**.
4.  **Root Name Server responds with the IP address of a TLD Name Server for `.com`**.
5.  **Resolver contacts the `.com` TLD Name Server.**
6.  **TLD Name Server responds with the IP address of an Authoritative Name Server for `example.com`**.
7.  **Resolver contacts the Authoritative Name Server for `example.com`**.
8.  **Authoritative Name Server responds with the IP address of `www.example.com`**.
9.  **Resolver caches the IP address and returns it to the client's OS.**
10. **Client's OS caches the IP address and passes it to the browser.**
11. **Browser uses the IP address to connect to the web server.**

**Caching:**

*   DNS resolvers and even client operating systems cache DNS records for a period specified by the **Time-To-Live (TTL)** value.
*   This significantly speeds up subsequent lookups for the same domain name and reduces the load on authoritative servers.

**Important Points to Remember:**

*   The process involves multiple steps and interactions between different DNS server types.
*   Caching is crucial for performance.

**Alignment with Course Outcomes:**

*   **CO2 (K2):** Demonstrate protocols and the functions of different layers. This illustrates how the application layer (DNS) interacts with the network to achieve its goal.
*   **CO3 (K3):** Analyze the concept of routing and addressing protocols. DNS resolution directly provides the IP address needed for routing.

---

### 5. Common DNS Record Types

**Key Concept:** DNS stores various types of information about a domain, not just IP addresses. These are stored in **resource records (RRs)**, each identified by a type.

**Common DNS Record Types:**

*   **A Record (Address Record):**
    *   Maps a hostname to an IPv4 address.
    *   **Example:** `www.example.com` -> `192.0.2.1`

*   **AAAA Record (IPv6 Address Record):**
    *   Maps a hostname to an IPv6 address.
    *   **Example:** `www.example.com` -> `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

*   **CNAME Record (Canonical Name Record):**
    *   Creates an alias for a hostname, mapping it to another hostname.
    *   Useful for pointing multiple hostnames to a single canonical name.
    *   **Example:** `mail.example.com` is a CNAME to `smtp.example.com`.

*   **MX Record (Mail Exchanger Record):**
    *   Specifies the mail servers responsible for receiving email for a domain.
    *   Includes a **priority** value (lower number means higher priority).
    *   **Example:** `example.com` MX `10 mail.example.com`

*   **NS Record (Name Server Record):**
    *   Specifies the authoritative name servers for a domain.
    *   **Example:** `example.com` NS `ns1.example.com`

*   **SOA Record (Start of Authority Record):**
    *   Provides authoritative information about a DNS zone, including the primary name server, administrator's email address, domain serial number, and refresh/retry/expire times.
    *   Every zone must have an SOA record.

*   **PTR Record (Pointer Record):**
    *   Maps an IP address to a hostname (reverse DNS lookup).
    *   Used for verifying IP addresses and for troubleshooting.
    *   Typically found in reverse lookup zones.
    *   **Example:** `1.2.0.192.in-addr.arpa` -> `www.example.com`

**Important Points to Remember:**

*   Each record type serves a specific purpose in DNS.
*   Understanding these types is essential for managing DNS.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Summarize the principles and components of computer networks. DNS records are fundamental components that store critical network information.
*   **CO2 (K2):** Demonstrate protocols and the functions of different layers. DNS record types are part of the DNS protocol's functionality.

---

### 6. DNS Security Considerations

**Key Concept:** While DNS is essential, it's also vulnerable to various attacks that can disrupt internet services and compromise security.

**Common DNS Security Threats:**

*   **DNS Spoofing/Cache Poisoning:**
    *   Attackers inject forged DNS records into a DNS resolver's cache.
    *   This can redirect users to malicious websites (e.g., phishing sites) instead of legitimate ones.
    *   **Example:** An attacker sends a forged reply to a DNS resolver, claiming that `www.yourbank.com` resolves to the attacker's IP address.

*   **Denial-of-Service (DoS) Attacks:**
    *   Overwhelming DNS servers with a flood of queries, making them unavailable to legitimate users.
    *   This can disrupt access to websites and online services.

*   **DNS Amplification Attacks:**
    *   A type of DoS attack where attackers send spoofed DNS queries to open DNS resolvers with a small query size but a large response size. The larger response is then sent to the victim's IP address, amplifying the attack traffic.

*   **Man-in-the-Middle (MitM) Attacks:**
    *   An attacker intercepts and potentially alters DNS queries and responses between a client and a DNS server.

**DNS Security Mechanisms:**

*   **DNSSEC (DNS Security Extensions):**
    *   A suite of extensions that adds security to DNS by providing **data origin authentication**, **data integrity**, and **authenticated denial of existence**.
    *   Uses digital signatures to verify that DNS responses come from legitimate sources and haven't been tampered with.
    *   Works by signing DNS records.

*   **DNS over TLS (DoT) and DNS over HTTPS (DoH):**
    *   These protocols encrypt DNS queries and responses between the client and the DNS resolver.
    *   This protects against eavesdropping and manipulation of DNS traffic.

*   **Restricting Recursion:**
    *   Configuring DNS servers to only accept recursive queries from authorized clients.

*   **Validating Responses:**
    *   DNS servers can be configured to validate the digital signatures of DNSSEC-signed responses.

**Important Points to Remember:**

*   DNS security is critical for maintaining trust and availability of online services.
*   DNSSEC, DoT, and DoH are key technologies for improving DNS security.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Summarize the principles and components of computer networks. Security is a fundamental principle of any network component, and understanding DNS vulnerabilities is crucial.
*   **CO2 (K2):** Demonstrate protocols and the functions of different layers. DNSSEC, DoT, and DoH are protocols that enhance the security of DNS, which operates at the application layer.

---

### 7. Practice Questions and Exercises

**Question 1:** What is the primary purpose of DNS in a computer network?
**Answer:** The primary purpose of DNS is to translate human-readable domain names (like `www.google.com`) into machine-readable IP addresses (like `172.217.160.142`).

**Question 2:** Describe the hierarchical structure of DNS.
**Answer:** DNS is structured hierarchically, starting with the root domain (`.`), followed by Top-Level Domains (TLDs) like `.com` or `.org`, then Second-Level Domains (SLDs) like `google`, and finally subdomains like `mail` or `www`. This structure allows for distributed management.

**Question 3:** Differentiate between a recursive DNS resolver and an authoritative DNS server.
**Answer:** A recursive DNS resolver (or recursor) performs the full lookup process on behalf of a client, querying other DNS servers until it gets the final IP address. An authoritative DNS server holds the actual DNS records for a specific domain and provides the definitive answer for that domain.

**Question 4:** If you wanted to point `blog.example.com` to `www.example.com`, which DNS record type would you use?
**Answer:** You would use a CNAME (Canonical Name) record. `blog.example.com` would be the alias pointing to the canonical name `www.example.com`.

**Question 5:** What is DNS cache poisoning, and how can DNSSEC help mitigate it?
**Answer:** DNS cache poisoning is an attack where forged DNS records are injected into a DNS resolver's cache, potentially redirecting users to malicious sites. DNSSEC helps mitigate this by digitally signing DNS records, allowing resolvers to verify the authenticity and integrity of the data, thus detecting forged responses.

**Exercise 1:**

Imagine you are setting up a new website for your small business, "myawesomebusiness.com".
1.  What kind of DNS record would you use to associate `myawesomebusiness.com` with its web server's IPv4 address?
2.  If you also wanted email to be delivered to `mail.myawesomebusiness.com`, what type of DNS record would you create for that, and what additional information might you include?

**Exercise 1 Answers:**

1.  You would use an **A Record** to associate `myawesomebusiness.com` with its web server's IPv4 address.
2.  You would use an **MX Record** to specify that email for `myawesomebusiness.com` should be delivered to `mail.myawesomebusiness.com`. You would also include a **priority** number for the MX record (e.g., 10). You would then create an **A Record** for `mail.myawesomebusiness.com` pointing to the mail server's IPv4 address.

---

### 8. Important Points to Remember

*   **DNS is the Internet's phonebook:** Translates names to IP addresses.
*   **Hierarchical structure:** Root, TLDs, SLDs, subdomains for distributed management.
*   **Key server types:** Resolvers, Root, TLD, Authoritative.
*   **Resolution process:** A series of queries (often recursive) to find IP addresses.
*   **Caching:** Speeds up lookups and reduces load.
*   **Record types:** A, AAAA, CNAME, MX, NS, SOA, PTR store different information.
*   **Security is vital:** DNSSEC, DoT, DoH protect against spoofing, DoS, etc.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References

*   **Computer Networking: A Top-Down Approach Featuring the Internet.** by James F. Kurose, Keith W. Ross, (Pearson, Sixth Edition, 2017) - **Chapter 5**
*   **Data Communications and Networking by Behrouz A Forouzan** (Tata McGraw-Hill, Fourth Edition , 2008) - **Chapter 23**
*   **Computer Networks – A Systems Approach,** by Larry L. Peterson, Bruce S. Davie, (Morgan Kauffman) - Refer to relevant chapters on Application Layer Protocols.
*   **Computer Networks by A. S. Tanenbaum, D. J. Wetherall** (Pearson) - Refer to relevant chapters on Application Layer Protocols and Name Resolution.

---