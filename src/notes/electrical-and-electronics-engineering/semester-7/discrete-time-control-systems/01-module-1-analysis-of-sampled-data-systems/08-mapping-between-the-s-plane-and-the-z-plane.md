---
title: "Mapping between the s-plane and the z-plane."
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 1: Analysis of Sampled Data Systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368c8"
status: "completed"
scrapedAt: "2026-05-23T16:35:59.650Z"
---
## DISCRETE TIME CONTROL SYSTEMS - Module 1: Analysis of Sampled Data Systems

### Topic: Mapping between the s-plane and the z-plane

**Learning Outcomes:**

*   Understand the fundamental relationship between the continuous-time domain (s-plane) and the discrete-time domain (z-plane).
*   Analyze the impact of sampling on system stability and performance by correlating pole and zero locations in both domains.
*   Identify how the frequency response of a continuous-time system is represented in the discrete-time domain.
*   Utilize the mapping to predict the behavior of a sampled-data system based on its continuous-time equivalent.

**Course Outcomes Alignment:**

*   **CO1:** Model and analyse discrete-time system using pulse transfer function approach. (Knowledge Level: K3)
    *   This topic directly supports CO1 by establishing the foundation for translating continuous-time system characteristics (represented in the s-plane) into their discrete-time counterparts (represented in the z-plane), which is crucial for understanding and modeling sampled data systems using pulse transfer functions.

---

### 1. Introduction to Sampled Data Systems and the Need for Mapping

A sampled-data system is a control system that processes information from the physical world (continuous-time) by sampling it at discrete time instants. This conversion from continuous to discrete-time introduces complexities and necessitates understanding the relationship between these two domains.

*   **Continuous-Time Systems:** Described by differential equations and analyzed in the **s-plane** (Laplace domain). System characteristics like stability and transient response are determined by the location of poles and zeros in the s-plane.
*   **Discrete-Time Systems:** Described by difference equations and analyzed in the **z-plane** (z-transform domain). System characteristics are determined by the location of poles and zeros in the z-plane.

The **mapping between the s-plane and the z-plane** is fundamental for:

*   Analyzing the stability of sampled-data systems.
*   Understanding how the frequency response of a continuous-time system is represented in the discrete-time domain.
*   Designing digital controllers based on the analysis of continuous-time plant models.

---

### 2. The z-Transform and its Relation to the s-Transform

The z-transform is the discrete-time equivalent of the Laplace transform. For a continuous-time signal $x(t)$, its sampled version at intervals of $T$ (sampling period) is $x^*(t) = \sum_{n=0}^{\infty} x(nT)\delta(t-nT)$.

The z-transform of $x^*(t)$ is defined as:

$X(z) = \mathcal{Z}\{x^*(t)\} = \sum_{n=0}^{\infty} x(nT)z^{-n}$

The relationship between the Laplace transform $X(s)$ and the z-transform $X(z)$ of a sampled signal is established through the **impulse invariance property**. For a continuous-time signal $x(t)$ with Laplace transform $X(s)$, the impulse-invariant transformation states that if $y(t) = x(t)x^*(t)$ and $y^*(t) = \sum_{n=0}^{\infty} x(nT)\delta(t-nT)$, then the z-transform of $y^*(t)$ is given by:

$Y(z) = \sum_{n=0}^{\infty} x(nT)z^{-n}$

This leads to the crucial mapping relation:

$X(z) = \sum_{n=0}^{\infty} [\mathcal{L}^{-1}\{X(s)\}]_{t=nT} z^{-n}$

While a direct analytical closed-form expression for $X(z)$ from $X(s)$ is not always available, a fundamental connection can be derived using the property:

$\mathcal{Z}\{x(t-nT)\} = z^{-n}X(z)$

Consider a continuous-time impulse response $h(t)$. Its sampled version is $h^*(t) = \sum_{n=0}^{\infty} h(nT)\delta(t-nT)$. The corresponding discrete-time impulse response, denoted by $h(n)$, is $h(n) = h(nT)$.

The pulse transfer function $H(z)$ is the z-transform of the discrete-time impulse response $h(n)$:

$H(z) = \mathcal{Z}\{h(n)\} = \mathcal{Z}\{h(nT)\}$

The relationship between $H(z)$ and the continuous-time transfer function $H(s)$ is established via the **zero-order hold (ZOH)**, which is a common method for reconstructing a continuous-time signal from its samples. The transfer function of a system with a ZOH is given by:

$H(z) = (1-z^{-1})\mathcal{Z}\left\{\frac{H(s)}{s}\right\}$

This relationship is often expressed using the exponential mapping:

$z = e^{sT}$

This is the core equation for mapping the s-plane to the z-plane.

---

### 3. Mapping of the s-Plane to the z-Plane

The mapping $z = e^{sT}$ establishes a direct relationship between the locations of poles and zeros in the s-plane and their corresponding locations in the z-plane. Let $s = \sigma + j\omega$.

$z = e^{(\sigma + j\omega)T} = e^{\sigma T}e^{j\omega T}$

This equation reveals how different regions and lines in the s-plane are transformed into regions and curves in the z-plane.

#### 3.1. Mapping of Key Regions in the s-Plane

| s-Plane Region         | z-Plane Region

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
