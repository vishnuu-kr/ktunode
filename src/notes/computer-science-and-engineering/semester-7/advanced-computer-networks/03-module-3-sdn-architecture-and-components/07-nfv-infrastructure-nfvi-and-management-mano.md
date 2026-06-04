---
title: "NFV Infrastructure (NFVI) and Management (MANO)"
subject: "ADVANCED COMPUTER NETWORKS"
module: "Module 3: SDN Architecture and Components "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c446"
status: "completed"
scrapedAt: "2026-05-20T17:00:13.084Z"
---
# Advanced Computer Networks: Module 3 - SDN Architecture and Components

## Topic: NFV Infrastructure (NFVI) and Management (MANO)

---

## 1. Introduction to Network Functions Virtualization (NFV)

**Key Concept:** Network Functions Virtualization (NFV) is a network architecture concept that virtualizes entire classes of network functions so they can run on standard IT infrastructure. It decouples network functions (like firewalls, load balancers, routers) from dedicated hardware appliances, allowing them to be deployed as software on virtual machines (VMs) or containers.

**Why NFV?**

*   **Agility & Flexibility:** Rapid deployment and scaling of network services.
*   **Cost Reduction:** Leverage commodity hardware instead of expensive proprietary appliances.
*   **Innovation:** Faster introduction of new network services and features.
*   **Operational Efficiency:** Automation of network management and orchestration.

---

## 2. NFV Infrastructure (NFVI)

**Definition:** NFV Infrastructure (NFVI) is the **foundational layer** that provides the necessary compute, storage, and networking resources to host and run Virtualized Network Functions (VNFs). It's the physical and virtualized environment where VNFs reside.

**Key Components of NFVI:**

### 2.1 Hardware Resources

*   **Compute:** Standard servers, CPUs, memory, GPUs. These provide the processing power for VNFs.
*   **Storage:** Local storage (SSDs, HDDs), network-attached storage (NAS), storage area networks (SANs). VNFs require storage for their operating systems, applications, and data.
*   **Network:** High-speed Ethernet switches, routers, network interface cards (NICs). These provide the connectivity between VNFs and between VNFs and the external network.

**Example:** A data center filled with racks of standard x86 servers, connected by high-speed Ethernet switches.

### 2.2 Virtualization Layer (VIM - Virtualization Infrastructure Manager)

**Definition:** The VIM is responsible for managing the virtualized resources (VMs, containers, virtual networks) within the NFVI. It abstracts the underlying hardware and presents it as a pool of virtualized resources.

**Key Responsibilities of VIM:**

*   **Resource Allocation:** Creating, managing, and allocating virtual machines and containers.
*   **Virtual Network Management:** Creating and managing virtual networks (e.g., using Open vSwitch, SR-IOV).
*   **Lifecycle Management:** Starting, stopping, suspending, resuming, migrating VNFs.
*   **Monitoring:** Tracking resource utilization and performance of virtualized resources.

**Common VIM Examples:**

*   **OpenStack:** A popular open-source cloud computing platform widely used for NFVI. It provides components like Nova (compute), Neutron (networking), and Cinder (block storage).
*   **VMware vSphere:** A commercial virtualization platform.
*   **Kubernetes:** Increasingly used for containerized VNFs, managing container orchestration.

**Learning Outcome Covered:** Understanding the NFV Infrastructure (NFVI) and its components.

---

## 3. Management and Orchestration (MANO)

**Definition:** MANO is the **enabling framework** for managing and orchestrating VNFs and the NFVI. It's the "brain" of the NFV system, responsible for the end-to-end lifecycle management of network services.

**Key Goals of MANO:**

*   **Service Orchestration:** Automating the deployment, configuration, and scaling of end-to-end network services composed of multiple VNFs.
*   **VNF Lifecycle Management:** Managing the entire lifecycle of individual VNFs (instantiation, termination, scaling, healing, updating).
*   **Resource Orchestration:** Managing the underlying NFVI resources required by VNFs.

**ETSI NFV MANO Architectural Framework:**

The European Telecommunications Standards Institute (ETSI) has defined a widely adopted MANO framework. It consists of three main components:

### 3.1 Virtualized Network Function (VNF) Manager (VNFM)

**Definition:** The VNFM is responsible for managing the lifecycle of individual VNFs. It interacts with the VNF itself (via VNF Descriptors and lifecycle management interfaces) and the VIM.

**Key Responsibilities of VNFM:**

*   **VNF Instantiation:** Creating and starting a VNF instance.
*   **VNF Configuration:** Configuring VNF parameters.
*   **VNF Scaling:** Performing scaling operations (scale-out, scale-in, scale-up, scale-down) based on policies or performance metrics.
*   **VNF Healing:** Detecting VNF failures and initiating recovery actions (e.g., restarting a failed VNF instance).
*   **VNF Termination:** Stopping and removing a VNF instance.
*   **VNF Monitoring:** Collecting performance metrics from VNFs.

**Example:** A VNFM detecting that a virtualized load balancer is experiencing high CPU usage and initiating a scale-out operation by launching a new instance of the load balancer VNF.

### 3.2 NFV Orchestrator (NFVO)

**Definition:** The NFVO is the **highest-level component** in the MANO framework. It's responsible for orchestrating network services, which are composed of multiple VNFs. It also manages the VNFMs and the VIM.

**Key Responsibilities of NFVO:**

*   **Network Service Lifecycle Management:** Orchestrating the entire lifecycle of a network service, from its creation to its termination. This involves coordinating the actions of multiple VNFMs.
*   **Resource Orchestration:** Requesting and coordinating the allocation of NFVI resources (compute, storage, network) from the VIM for the network service.
*   **Policy Management:** Applying operational and business policies to network services.
*   **VNF Forwarding Graph (NFG) Management:** Defining and managing the connectivity between VNFs within a network service.
*   **VNF Catalog Management:** Maintaining a catalog of VNF descriptors.
*   **Network Service Catalog Management:** Maintaining a catalog of network service descriptors.

**Example:** An NFVO receives a request to deploy a "mobile core network service." It retrieves the Network Service Descriptor (NSD), identifies the required VNFs (e.g., UPF, SMF, AMF), requests VNFM to instantiate these VNFs, and instructs the VIM to allocate necessary resources and establish connectivity between them as defined in the NFG.

### 3.3 VNF Catalog, Network Service (NS) Catalog, and Serviceability

**Definition:** These are repositories of information that describe the capabilities and requirements of VNFs and network services.

*   **VNF Catalog:** Stores VNF Descriptors (VNFDs). A VNFD provides information about a VNF, including its hardware and software requirements, lifecycle management interfaces, configuration parameters, and resource needs.
*   **Network Service (NS) Catalog:** Stores Network Service Descriptors (NSDs). An NSD describes a network service, including the VNFs it comprises, their interconnections (VNF Forwarding Graph), and lifecycle management requirements.

**Serviceability:** The ability to define, deploy, and manage network services in an automated and agile manner.

**Example:**

*   **VNFD for a Firewall VNF:** Might specify a requirement for 2 vCPUs, 4GB RAM, and a specific network interface configuration.
*   **NSD for a Secure Web Proxy Service:** Might define a chain of VNFs: a load balancer, a firewall, and a web proxy, specifying the order and connectivity between them.

---

## 4. Interactions within the MANO Framework

**Key Point:** The components of MANO work together to achieve the NFV objectives.

*   The **NFVO** interacts with the **VNFMs** to manage VNF lifecycles.
*   The **VNFMs** interact with the **VIM** to manage virtual resources for VNFs.
*   The **NFVO** also directly interacts with the **VIM** for resource orchestration.
*   The **VNFM** interacts with the VNF itself to perform lifecycle operations.
*   The **Catalogs** provide the necessary descriptors (VNFDs, NSDs) to the NFVO and VNFM.

**Diagrammatic Representation (Conceptual):**

```
+-------------------+      +-------------------+      +-------------------+
|     NFVO          | <--> |      VNFM(s)      | <--> |        VIM        |
+-------------------+      +-------------------+      +-------------------+
       ^                                                     ^
       |                                                     |
+-------------------+                                 +-------------------+
|     NS Catalog    |                                 |     Hardware      |
+-------------------+                                 +-------------------+
       ^
       |
+-------------------+
|     VNF Catalog   |
+-------------------+
```

**Learning Outcome Covered:** Understanding the role of Management and Orchestration (MANO) and its constituent components.

---

## 5. Key Concepts and Definitions Summary

*   **NFV:** Virtualizing network functions onto standard IT infrastructure.
*   **NFVI:** The physical and virtualized infrastructure (compute, storage, network) for VNFs.
*   **VIM (Virtualization Infrastructure Manager):** Manages NFVI resources (e.g., OpenStack).
*   **MANO:** Management and Orchestration framework.
    *   **VNFM (VNF Manager):** Manages VNF lifecycles.
    *   **NFVO (NFV Orchestrator):** Orchestrates network services and VNFMs.
*   **VNFD (VNF Descriptor):** Describes a VNF's requirements and capabilities.
*   **NSD (Network Service Descriptor):** Describes a network service composed of VNFs and their interconnections.
*   **VNF Forwarding Graph (NFG):** Defines the path and connectivity between VNFs in a network service.

---

## 6. Practice Questions and Exercises

**Question 1:** What is the primary role of the NFV Infrastructure (NFVI)?
    a) To manage the lifecycle of individual VNFs.
    b) To provide the compute, storage, and networking resources for VNFs.
    c) To orchestrate end-to-end network services.
    d) To define the requirements for VNFs.

**Question 2:** Which component in the MANO framework is responsible for the lifecycle management of *individual* Virtualized Network Functions (VNFs)?
    a) NFV Orchestrator (NFVO)
    b) Virtualization Infrastructure Manager (VIM)
    c) VNF Manager (VNFM)
    d) VNF Catalog

**Question 3:** A telecom operator wants to deploy a new 5G core network service that consists of a User Plane Function (UPF), a Session Management Function (SMF), and an Access and Mobility Management Function (AMF). Which MANO component would be responsible for coordinating the instantiation and interconnection of these VNFs?

**Question 4:** What is the purpose of a VNF Descriptor (VNFD)?

**Question 5:** If a virtualized firewall VNF experiences a sudden spike in traffic and its CPU usage exceeds a predefined threshold, which MANO component is most likely to detect this and trigger a scaling action?

---

## 7. Answers to Practice Questions

**Answer 1:**
    b) To provide the compute, storage, and networking resources for VNFs.
    *   **Explanation:** NFVI is the foundation layer of hardware and virtualization.

**Answer 2:**
    c) VNF Manager (VNFM)
    *   **Explanation:** The VNFM's primary responsibility is managing individual VNFs.

**Answer 3:**
    The **NFV Orchestrator (NFVO)** would be responsible for this. It orchestrates the entire network service by coordinating the actions of the VNFMs for the UPF, SMF, and AMF VNFs, and requests resources from the VIM.

**Answer 4:**
    A VNF Descriptor (VNFD) describes the requirements (compute, memory, storage, network interfaces), capabilities, and lifecycle management aspects of a specific VNF. It's used by the VNFM and NFVO to deploy and manage the VNF.

**Answer 5:**
    The **VNF Manager (VNFM)** is most likely to detect this. VNFM's are responsible for VNF monitoring and can trigger scaling actions based on performance metrics defined in the VNFD or through policies managed by the NFVO.

---

## 8. Important Points to Remember

*   **NFVI is the foundation; MANO is the brain.** NFVI provides the resources, while MANO manages and orchestrates the services running on those resources.
*   **ETSI NFV MANO framework is crucial.** Understanding its components (NFVO, VNFM, VIM) and their interactions is key.
*   **VNFDs and NSDs are the "blueprints".** They define what VNFs and network services are and how they should be managed.
*   **Automation is a core benefit of NFV/MANO.** The goal is to automate the deployment, scaling, and management of network services.
*   **VIM is critical for resource abstraction.** It hides the complexity of the underlying hardware from the MANO components.
*   **Containers (e.g., via Kubernetes) are increasingly used for VNFs**, often managed by specific MANO extensions or orchestration platforms that integrate with Kubernetes.

---
