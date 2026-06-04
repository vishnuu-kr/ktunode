---
title: "Memory hierarchies"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 1: Modern processors"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c618"
status: "completed"
scrapedAt: "2026-05-20T17:07:00.251Z"
---
# HIGH PERFORMANCE COMPUTING
## Module 1: Modern Processors
### Topic: Memory Hierarchies

---

## Table of Contents

1.  [Introduction to Memory Hierarchies](#introduction-to-memory-hierarchies)
    *   [Why Memory Hierarchies?](#why-memory-hierarchies)
    *   [The Fundamental Trade-off](#the-fundamental-trade-off)
2.  [Levels of the Memory Hierarchy](#levels-of-the-memory-hierarchy)
    *   [Registers](#registers)
    *   [Caches](#caches)
        *   [L1 Cache](#l1-cache)
        *   [L2 Cache](#l2-cache)
        *   [L3 Cache (Last Level Cache - LLC)](#l3-cache-last-level-cache---llc)
    *   [Main Memory (RAM)](#main-memory-ram)
    *   [Secondary Storage (SSD/HDD)](#secondary-storage-ssd/hdd)
    *   [Tertiary Storage (Tape, Cloud Storage)](#tertiary-storage-tape-cloud-storage)
3.  [Key Concepts and Principles](#key-concepts-and-principles)
    *   [Locality of Reference](#locality-of-reference)
        *   [Temporal Locality](#temporal-locality)
        *   [Spatial Locality](#spatial-locality)
    *   [Hit](#hit)
    *   [Miss](#miss)
    *   [Hit Rate](#hit-rate)
    *   [Miss Rate](#miss-rate)
    *   [Hit Time](#hit-time)
    *   [Miss Penalty](#miss-penalty)
    *   [Average Memory Access Time (AMAT)](#average-memory-access-time-amat)
    *   [Cache Coherence](#cache-coherence)
    *   [Cache Consistency](#cache-consistency)
    *   [Cache Policies](#cache-policies)
        *   [Write Policies](#write-policies)
        *   [Replacement Policies](#replacement-policies)
        *   [Mapping Policies](#mapping-policies)
4.  [Performance Implications for HPC](#performance-implications-for-hpc)
    *   [Impact of Cache Misses](#impact-of-cache-misses)
    *   [Optimizing for Memory Hierarchies](#optimizing-for-memory-hierarchies)
        *   [Loop Tiling](#loop-tiling)
        *   [Data Structures](#data-structures)
        *   [Algorithm Design](#algorithm-design)
5.  [Practice Questions and Exercises](#practice-questions-and-exercises)
6.  [Important Points to Remember](#important-points-to-remember)

---

## 1. Introduction to Memory Hierarchies

### Why Memory Hierarchies?

*   **The Processor-Memory Speed Gap:** Modern CPUs operate at speeds significantly faster than main memory. This disparity can lead to the CPU waiting for data, creating a performance bottleneck.
*   **Cost and Capacity Trade-off:**
    *   **Fast memory (e.g., SRAM)** is expensive per bit and has lower capacity.
    *   **Slow memory (e.g., DRAM, SSD)** is cheaper per bit and has higher capacity.
*   **Bridging the Gap:** Memory hierarchies are designed to exploit this trade-off by using small, fast memory layers to hold frequently used data, providing a *perceived* fast access to a large amount of data.

### The Fundamental Trade-off

*   **Speed vs. Cost vs. Capacity**
    *   **Registers:** Fastest, smallest, most expensive.
    *   **Caches (SRAM):** Very fast, small to medium, expensive.
    *   **Main Memory (DRAM):** Moderately fast, large, moderately expensive.
    *   **Secondary Storage (SSD/HDD):** Slow, very large, inexpensive.

---

## 2. Levels of the Memory Hierarchy

The typical memory hierarchy in modern processors, from fastest/smallest to slowest/largest, is:

### Registers

*   **Description:** Smallest and fastest storage units directly within the CPU core. They hold data that the CPU is actively processing.
*   **Characteristics:**
    *   Extremely fast access (often within a single clock cycle).
    *   Limited in number (e.g., tens to a few hundred per core).
    *   Directly addressable by instructions.
*   **Example:** Holding operands for an addition operation, the program counter.

### Caches

*   **Description:** Small, high-speed memory located close to the CPU. They store copies of frequently accessed data from main memory. Caches operate on the principle of **locality**.
*   **Types:**
    *   **Instruction Cache:** Stores recently executed instructions.
    *   **Data Cache:** Stores recently accessed data.
*   **Hierarchy of Caches:** Modern CPUs often have multiple levels of caches.

#### L1 Cache

*   **Description:** The smallest, fastest, and closest cache to the CPU core. It's typically split into L1 instruction cache (L1I) and L1 data cache (L1D).
*   **Characteristics:**
    *   Access time: Few clock cycles (e.g., 1-4 cycles).
    *   Capacity: Very small (e.g., tens of KB per core).
    *   Private to each CPU core.

#### L2 Cache

*   **Description:** Larger and slightly slower than L1 cache. It can be private to each core or shared among a small group of cores.
*   **Characteristics:**
    *   Access time: More clock cycles than L1 (e.g., 10-20 cycles).
    *   Capacity: Larger than L1 (e.g., hundreds of KB to a few MB per core).
    *   Typically holds data that missed in L1.

#### L3 Cache (Last Level Cache - LLC)

*   **Description:** The largest and slowest of the on-chip caches. It's usually shared among all cores on a processor chip.
*   **Characteristics:**
    *   Access time: Even more clock cycles than L2 (e.g., 30-60 cycles).
    *   Capacity: Largest on-chip cache (e.g., tens of MB).
    *   Serves as a cache for L2 caches; data that misses in L2 typically goes to L3.

### Main Memory (RAM)

*   **Description:** Random Access Memory (RAM), typically Dynamic RAM (DRAM). It holds the currently running programs and their data.
*   **Characteristics:**
    *   Slower than caches but much faster than secondary storage.
    *   Access time: Hundreds of clock cycles (e.g., 100-300 cycles).
    *   Capacity: Gigabytes (GB).
    *   Volatile: Data is lost when power is removed.

### Secondary Storage (SSD/HDD)

*   **Description:** Non-volatile storage devices like Solid State Drives (SSDs) and Hard Disk Drives (HDDs). They store the operating system, applications, and user data.
*   **Characteristics:**
    *   Much slower access times than RAM.
    *   Access time: Milliseconds (thousands to millions of clock cycles).
    *   Capacity: Gigabytes to Terabytes (TB).
    *   Non-volatile: Data persists after power loss.
    *   SSDs are significantly faster than HDDs due to no mechanical parts.

### Tertiary Storage (Tape, Cloud Storage)

*   **Description:** Archival or backup storage, often tape drives or large-scale cloud storage solutions.
*   **Characteristics:**
    *   Very slow access times.
    *   Capacity: Petabytes (PB) or Exabytes (EB).
    *   Cost-effective for large amounts of data.
    *   Primarily used for long-term storage and backups.

---

## 3. Key Concepts and Principles
