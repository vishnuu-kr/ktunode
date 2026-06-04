---
title: "DNS"
subject: "COMPUTER NETWORKS"
module: "Module 4: Transport Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c942"
status: "completed"
scrapedAt: "2026-05-20T17:02:56.762Z"
---
# Computer Networks: Module 4 - Transport Layer: DNS

## Learning Outcomes:

By the end of this module, you will be able to:

*   **Understand the role and necessity of DNS in the internet.**
*   **Explain the hierarchical structure of the DNS.**
*   **Describe the different types of DNS queries.**
*   **Illustrate the process of a DNS resolution.**
*   **Identify the different types of DNS records and their purposes.**
*   **Discuss the concepts of caching and propagation in DNS.**
*   **Recognize the security implications and potential vulnerabilities of DNS.**
*   **Understand the functions of different DNS servers.**

---

## 1. The Role and Necessity of DNS

*   **What is DNS?**
    *   DNS stands for **Domain Name System**.
    *   It's a **hierarchical and distributed naming system** for computers, services, or any resource connected to the Internet or a private network.
    *   Think of it as the **"phonebook of the internet."**

*   **Why do we need DNS?**
    *   **Human-readable names:** We remember names like `www.google.com` much easier than IP addresses like `172.217.160.142`.
    *   **Abstraction and Simplicity:** Hides the complexity of IP addresses from end-users.
    *   **Flexibility:** Allows IP addresses of servers to be changed without affecting users' ability to access them, as long as the DNS records are updated.
    *   **Scalability:** Distributes the burden of maintaining a global naming system.

*   **Analogy:**
    *   Imagine trying to call someone by remembering their exact street address and house number for every single contact. DNS is like having a phonebook where you look up names to find phone numbers, making communication much simpler.

---

## 2. Hierarchical Structure of DNS

*   **Tree-like structure:** DNS is organized in a tree-like hierarchy.
*   **Root Directory:** The top of the hierarchy is the **root** (represented by a single dot ".").
*   **Top-Level Domains (TLDs):**
    *   Below the root are **TLDs**.
    *   These are general categories like `.com`, `.org`, `.net`, `.edu`, `.gov`, and country codes like `.uk`, `.in`, `.ca`.
*   **Second-Level Domains (SLDs):**
    *   Below TLDs are **SLDs**, which are the unique names you typically register (e.g., `google` in `www.google.com`, `wikipedia` in `en.wikipedia.org`).
*   **Subdomains:**
    *   Further divisions within SLDs are called **subdomains** (e.g., `www`, `mail`, `ftp` in `www.example.com`, `mail.example.com`).
*   **Labels:** Each part of a domain name (e.g., `www`, `google`, `com`) separated by dots is called a **label**.
*   **Fully Qualified Domain Name (FQDN):** The complete domain name from the root (e.g., `www.google.com.`).

### Visual Representation:

```
        . (Root)
        |
    -----------------
    |       |       |
   .com   .org    .net
    |       |
------------ ---------
|      |    |       |
google wikipedia example.com
|           |
www         en
```

---

## 3. Types of DNS Queries

DNS queries are how a DNS client (resolver) asks a DNS server for information.

*   **Recursive Query:**
    *   The resolver asks a DNS server (usually its configured recursive resolver) to provide the answer.
    *   The server is responsible for performing all the necessary lookups to find the answer.
    *   **Example:** Your computer asking its local DNS server to find the IP address for `www.google.com`. If the server doesn't have it cached, it will perform iterative queries to find it.

*   **Iterative Query:**
    *   The resolver asks a DNS server for the answer.
    *   If the server knows the answer, it provides it.
    *   If the server doesn't know the answer, it provides a **referral** to another DNS server that might have the information (e.g., a TLD server).
    *   The resolver then makes a new query to the referred server. This continues until the answer is found or the server has no further referrals.
    *   **Example:** A root server receiving a query for `www.google.com` might respond with the IP address of a `.com` TLD server.

*   **Inverse Query (Non-recursive, sometimes called Reverse Query):**
    *   This type of query is less common now.
    *   Instead of providing a domain name and asking for an IP address, you provide an IP address and ask for the corresponding domain name.
    *   **Example:** Instead of asking "What is the IP for `www.example.com`?", you ask "What domain name is associated with IP address `192.168.1.100`?".

---

## 4. The Process of DNS Resolution (Query Flow)

Let's trace how your browser finds the IP address for `www.google.com`.

1.  **User Request:** You type `www.google.com` into your browser.
2.  **Local DNS Resolver:** Your computer (or router acting as a DNS forwarder) checks its local DNS cache. If the IP is not found, it sends a **recursive query** to its configured DNS server (e.g., your ISP's DNS server or a public DNS server like Google DNS `8.8.8.8`).
3.  **Recursive DNS Server:**
    *   The recursive DNS server checks its own cache.
    *   If not found, it starts the process by querying the **Root Name Server**.
4.  **Root Name Server:**
    *   The root server doesn't know the IP for `www.google.com`.
    *   It responds with a **referral** to the **TLD Name Server** responsible for `.com` domains. (Iterative query from the recursive server).
5.  **TLD Name Server (.com):**
    *   The recursive server queries the `.com` TLD server.
    *   The TLD server doesn't know the IP for `www.google.com`.
    *   It responds with a **referral** to the **Authoritative Name Server** for `google.com`. (Iterative query from the recursive server).
6.  **Authoritative Name Server (for google.com):**
    *   The recursive server queries the authoritative name server for `google.com`.
    *   This server *knows* the IP address for `www.google.com` (from its DNS records).
    *   It responds with the IP address. (Iterative query from the recursive server).
7.  **Recursive DNS Server:**
    *   The recursive server receives the IP address.
    *   It caches this information for future use.
    *   It sends the IP address back to your computer.
8.  **Your Computer:**
    *   Your computer receives the IP address.
    *   It caches this information.
    *   Your browser now uses this IP address to establish a connection with the web server hosting `www.google.com`.

**Key Point:** The recursive DNS server does the heavy lifting of iterative queries on behalf of your computer.

---

## 5. Types of DNS Records

DNS servers store information about domain names in various types of records.

*   **A Record (Address Record):**
    *   Maps a hostname to an IPv4 address.
    *   **Example:** `www.example.com` -> `192.0.2.1`

*   **AAAA Record (IPv6 Address Record):**
    *   Maps a hostname to an IPv6 address.
    *   **Example:** `www.example.com` -> `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

*   **CNAME Record (Canonical Name Record):**
    *   Creates an alias from one domain name to another. Useful for pointing multiple hostnames to the same server.
    *   **Example:** `ftp.example.com` is a CNAME for `www.example.com`. If `www.example.com` resolves to `192.0.2.1`, then `ftp.example.com` will also resolve to `192.0.2.1`.

*   **MX Record (Mail Exchanger Record):**
    *   Specifies the mail servers responsible for receiving email for a domain.
    *   Includes a **priority** value (lower number means higher priority).
    *   **Example:** `example.com` MX preference 10 mail.example.com.
    *   **Example:** `example.com` MX preference 20 backupmail.example.com.
    *   If the primary mail server (`mail.example.com`) is unavailable, mail can be delivered to the secondary server (`backupmail.example.com`).

*   **NS Record (Name Server Record):**
    *   Delegates a DNS zone to use the given authoritative name servers. Used to indicate which servers are responsible for a domain.
    *   **Example:** `example.com` NS ns1.example.com.
    *   **Example:** `example.com` NS ns2.example.com.

*   **SOA Record (Start of Authority Record):**
    *   Provides authoritative information about a DNS zone, including the primary name server, administrator's email, zone serial number, refresh times, etc.
    *   Essential for zone transfers between DNS servers.

*   **PTR Record (Pointer Record):**
    *   Used for **reverse DNS lookups**. Maps an IP address back to a hostname.
    *   Often found in special `in-addr.arpa` (for IPv4) or `ip6.arpa` (for IPv6) domains.
    *   **Example:** `1.2.0.192.in-addr.arpa` -> `192.0.2.1` -> `www.example.com`

*   **TXT Record (Text Record):**
    *   Allows administrators to insert arbitrary text into a DNS record.
    *   Used for various purposes, including email authentication (SPF, DKIM, DMARC), domain ownership verification.
    *   **Example:** `example.com` TXT "v=spf1 include:_spf.google.com ~all"

---

## 6. Caching and Propagation in DNS

*   **Caching:**
    *   **Purpose:** To reduce the load on DNS servers and speed up resolution times.
    *   **How it works:** When a DNS server resolves a query, it stores the answer for a specific period defined by the **Time To Live (TTL)** value in the DNS record.
    *   **TTL:** A duration (in seconds) for which a DNS record can be cached. Lower TTLs mean changes propagate faster but can increase DNS server load. Higher TTLs reduce load but make changes take longer to become effective.
    *   **Levels of Caching:**
        *   **Client Cache:** Your operating system or browser might cache DNS entries.
        *   **Recursive Resolver Cache:** Your ISP's DNS server or public DNS servers cache entries.

*   **Propagation:**
    *   **Definition:** The process of updating DNS records across all DNS servers on the internet.
    *   **How it works:** When a DNS record is changed (e.g., the IP address of a website), the TTL of the old record will eventually expire. After expiration, DNS servers will have to perform new lookups, fetching the updated information.
    *   **Factors affecting propagation time:**
        *   **TTL values:** Lower TTLs mean faster propagation.
        *   **Server caching:** How long other servers have cached the old record.
        *   **DNS server replication:** The inherent delay in distributing changes across distributed systems.
    *   **Timeframe:** DNS propagation can take anywhere from a few minutes to 48 hours to fully propagate across the internet, depending on TTLs and caching.

**Important to Remember:** If you change the IP address of your website, don't expect everyone to see the new site immediately. It takes time for these changes to propagate.

---

## 7. Security Implications and Potential Vulnerabilities of DNS

DNS is a critical infrastructure component, making it a target for various attacks.

*   **DNS Spoofing/Cache Poisoning:**
    *   **Attack:** An attacker injects fake DNS records into a DNS resolver's cache.
    *   **Impact:** When users query for a legitimate domain (e.g., their bank's website), they are redirected to a malicious IP address controlled by the attacker, leading to phishing or malware.
    *   **Mitigation:** DNSSEC (DNS Security Extensions) is designed to authenticate DNS data.

*   **Denial of Service (DoS) / Distributed Denial of Service (DDoS) Attacks:**
    *   **Attack:** Overwhelming DNS servers with a flood of requests, making them unable to respond to legitimate queries.
    *   **Impact:** Disrupts access to websites and services that rely on DNS.
    *   **Mitigation:** Load balancing, rate limiting, using robust DNS server infrastructure, specialized DDoS mitigation services.

*   **DNS Hijacking:**
    *   **Attack:** Compromising DNS servers or routers to redirect DNS queries to attacker-controlled servers.
    *   **Impact:** Similar to DNS spoofing, it can redirect users to malicious sites.
    *   **Mitigation:** Securing DNS servers, using trusted DNS providers, monitoring DNS traffic.

*   **Ransomware and Malware:**
    *   Some malware can manipulate a user's local DNS settings or hijack DNS traffic to serve malicious content or steal credentials.

*   **DNSSEC (DNS Security Extensions):**
    *   **Purpose:** A suite of extensions to secure certain kinds of information provided by the DNS protocol.
    *   **How it works:** Uses digital signatures to verify the authenticity and integrity of DNS data. It ensures that the DNS response you receive is actually from the authoritative server and hasn't been tampered with.
    *   **Limitations:** It's complex to implement and requires support at all levels of the DNS hierarchy. It doesn't protect against DoS attacks.

---

## 8. Functions of Different DNS Servers

DNS relies on a distributed network of servers, each with specific roles.

*   **Recursive Resolver (or DNS Recursor):**
    *   **Function:** Acts on behalf of the client. It receives a query from a client, performs the necessary steps (including iterative queries to other servers if needed), and returns the final answer to the client.
    *   **Examples:** Your home router, your ISP's DNS server, public DNS servers like Google DNS (`8.8.8.8`) or Cloudflare DNS (`1.1.1.1`).

*   **Root Name Server:**
    *   **Function:** The top of the DNS hierarchy. Knows the IP addresses of the TLD Name Servers.
    *   **How it works:** When asked for a domain name, it directs the query to the appropriate TLD server.
    *   **Number:** There are 13 logical root server addresses, managed by 12 different organizations worldwide.

*   **Top-Level Domain (TLD) Name Server:**
    *   **Function:** Manages a specific TLD (e.g., `.com`, `.org`, `.uk`). Knows the IP addresses of the authoritative name servers for domains within its TLD.
    *   **How it works:** When asked for a domain like `google.com`, it directs the query to the authoritative name server for `google.com`.

*   **Authoritative Name Server:**
    *   **Function:** Holds the actual DNS records (A, AAAA, MX, CNAME, etc.) for a specific domain (zone).
    *   **How it works:** When queried for a domain it's authoritative for, it provides the answer directly from its zone files.
    *   **Redundancy:** Typically, domains have multiple authoritative name servers for fault tolerance.

---

## Practice Questions and Answers

**Question 1:**
What is the primary purpose of DNS?
a) To encrypt internet traffic.
b) To translate human-readable domain names into IP addresses.
c) To manage the routing of data packets.
d) To provide secure user authentication.

**Answer 1:**
b) To translate human-readable domain names into IP addresses.

---

**Question 2:**
Which type of DNS query asks a server to perform all the necessary lookups to find the answer and return it to the client?
a) Iterative Query
b) Recursive Query
c) Inverse Query
d) Reverse Query

**Answer 2:**
b) Recursive Query

---

**Question 3:**
If `mail.example.com` is a CNAME record pointing to `server1.example.com`, and `server1.example.com` has an A record mapping to `192.168.1.10`, what IP address will be returned when a client queries for `mail.example.com`?
a) The IP address of the TLD server for `.com`.
b) `192.168.1.10`.
c) The IP address of the authoritative server for `example.com`.
d) The IP address cannot be determined.

**Answer 3:**
b) `192.168.1.10`. (CNAME creates an alias, so the resolution follows the alias to the final A record).

---

**Question 4:**
A change made to a DNS record typically takes time to propagate across the internet. What factor primarily influences how quickly these changes are reflected globally?
a) The speed of the user's internet connection.
b) The number of root name servers.
c) The Time To Live (TTL) value of the DNS record.
d) The type of web browser used.

**Answer 4:**
c) The Time To Live (TTL) value of the DNS record.

---

**Question 5:**
Which DNS record type is used to specify mail servers responsible for receiving email for a domain?
a) A Record
b) CNAME Record
c) MX Record
d) NS Record

**Answer 5:**
c) MX Record

---

**Question 6:**
What is DNS spoofing/cache poisoning, and what is a common mitigation technique?

**Answer 6:**
DNS spoofing or cache poisoning is an attack where an attacker injects fake DNS records into a DNS resolver's cache. This can redirect users to malicious websites. A common mitigation technique is DNSSEC (DNS Security Extensions), which digitally signs DNS data to verify its authenticity and integrity.

---

**Question 7:**
Explain the difference between a root name server and an authoritative name server.

**Answer 7:**
*   **Root Name Server:** Sits at the top of the DNS hierarchy. It doesn't hold the IP addresses of specific websites but knows the IP addresses of the Top-Level Domain (TLD) name servers (e.g., `.com`, `.org`). When asked for a domain, it refers the query to the appropriate TLD server.
*   **Authoritative Name Server:** Holds the actual DNS records (like A, AAAA, MX, CNAME) for a specific domain or zone (e.g., `google.com`). When asked for a domain it is authoritative for, it provides the definitive answer.

---

## Important Points to Remember

*   **DNS is essential for internet usability.** Without it, we'd be constantly dealing with IP addresses.
*   The **hierarchical structure** makes DNS scalable and manageable.
*   **Recursive resolvers** simplify the DNS lookup process for end-users.
*   **Caching** significantly improves performance and reduces server load.
*   **DNSSEC** is crucial for securing DNS data against spoofing and tampering.
*   Be aware of **DNS propagation delays** when making changes to DNS records.
*   Understand the different **DNS record types** and their specific functions.
*   DNS is a **potential attack vector**, so security considerations are vital.
