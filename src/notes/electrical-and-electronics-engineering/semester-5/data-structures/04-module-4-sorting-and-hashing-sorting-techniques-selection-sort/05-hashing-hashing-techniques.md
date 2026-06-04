---
title: "Hashing- Hashing Techniques"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing: Sorting Techniques – Selection Sort"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363f7"
status: "completed"
scrapedAt: "2026-05-23T16:20:52.842Z"
---
# Data Structures: Module 4 - Sorting and Hashing: Hashing Techniques

## Module Overview

This module delves into two fundamental aspects of data management: sorting and hashing. While sorting techniques arrange data in a specific order, hashing provides efficient methods for storing and retrieving data. This section focuses specifically on **Hashing Techniques**.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the fundamental concepts of hashing.
*   Identify and explain various hashing techniques.
*   Discuss collision resolution strategies.
*   Analyze the performance of hashing techniques.
*   Apply hashing to solve practical problems.

## Course Outcomes Addressed

This module directly contributes to:

*   **CO5: Apply appropriate hash function to store and access a given dataset (Knowledge Level: K3)** - This is the primary focus of this section.
*   **CO1: Compare performance of algorithms using asymptotic notations (Knowledge Level: K2)** - We will analyze the time complexity of hashing operations.
*   **CO4: Apply and compare various techniques for searching and sorting (Knowledge Level: K3)** - While not directly about sorting, hashing is a powerful search technique.

---

## 1. Introduction to Hashing

Hashing is a technique used to store and retrieve data efficiently, typically in a hash table. The core idea is to map keys to indices in an array, allowing for near-constant time (O(1) on average) insertion, deletion, and search operations.

### Key Concepts:

*   **Hash Table (or Hash Map):** An array-like data structure that stores key-value pairs.
*   **Key:** A unique identifier used to access a value.
*   **Value:** The data associated with a key.
*   **Hash Function:** A function that takes a key as input and returns an index (or "hash code") within the bounds of the hash table.
*   **Hash Code (or Hash Value):** The integer output of a hash function.
*   **Collision:** Occurs when two different keys map to the same index in the hash table.

### Why Hashing?

*   **Efficiency:** Provides average O(1) time complexity for fundamental operations, significantly outperforming linear or binary search (O(n) and O(log n) respectively) in many scenarios.
*   **Direct Access:** Unlike searching in sorted arrays or linked lists, hashing offers a more direct way to locate data.
