---
title: "Distributed computing frameworks - Hadoop, Spark"
subject: "ALGORITHMS FOR DATA SCIENCE"
module: "Module 4: Introduction to Big Data Algorithms "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c7a3"
status: "completed"
scrapedAt: "2026-05-20T17:00:37.273Z"
---
# ALGORITHMS FOR DATA SCIENCE

## Module 4: Introduction to Big Data Algorithms

### Topic: Distributed Computing Frameworks - Hadoop, Spark

---

### **Learning Outcomes Covered:**

*   **Understand the need for distributed computing frameworks in handling large datasets.**
*   **Explain the core concepts and architecture of Apache Hadoop.**
*   **Describe the functionality and advantages of Hadoop Distributed File System (HDFS).**
*   **Illustrate the role of MapReduce in processing data in a distributed environment.**
*   **Introduce Apache Spark as an alternative and advanced distributed computing framework.**
*   **Compare and contrast Hadoop MapReduce and Spark, highlighting Spark's advantages.**

---

### **1. The Need for Distributed Computing Frameworks**

#### **1.1 The Challenge of Big Data**

*   **Volume:** Datasets are growing exponentially, exceeding the storage and processing capabilities of single machines.
*   **Velocity:** Data is generated at high speeds, requiring real-time or near-real-time processing.
*   **Variety:** Data comes in various formats (structured, semi-structured, unstructured), making traditional processing difficult.
*   **Veracity:** Data quality can be inconsistent, requiring robust processing and cleansing.

#### **1.2 Why Distributed Computing?**

*   **Scalability:** Distribute data and processing across multiple machines (a cluster) to handle massive datasets.
*   **Fault Tolerance:** If one machine fails, others can continue processing, ensuring data availability and job completion.
*   **Parallelism:** Break down complex tasks into smaller pieces that can be executed simultaneously on different machines, significantly reducing processing time.
*   **Cost-Effectiveness:** Leverage commodity hardware instead of expensive, high-performance single machines.

---

### **2. Apache Hadoop: A Foundational Distributed Computing Framework**

Apache Hadoop is an open-source framework that enables distributed processing of large datasets across clusters of computers using simple programming models.

#### **2.1 Core Concepts of Hadoop**

*   **Distributed:** Data and processing are spread across multiple machines.
*   **Fault-Tolerant:** Designed to withstand hardware failures.
*   **Scalable:** Can scale horizontally by adding more machines.
*   **Open-Source:** Free to use and widely supported by a community.

#### **2.2 Hadoop Architecture**

Hadoop has two main components:

*   **Hadoop Distributed File System (HDFS):** A distributed file system designed to store very large files across multiple machines.
*   **Yet Another Resource Negotiator (YARN):** A resource management layer that schedules and allocates cluster resources to applications.
*   **MapReduce:** A programming model for processing large datasets in parallel. (Historically a core processing engine, now often superseded by YARN for application management).

#### **2.3 Hadoop Distributed File System (HDFS)**

*   **Purpose:** To store large files reliably across a cluster of machines.
*   **Architecture:**
    *   **NameNode:** The master server that manages the file system namespace and regulates access to files by clients. It stores metadata (file names, permissions, locations).
        *   It's a single point of failure (though High Availability configurations exist).
    *   **DataNodes:** Worker nodes that store the actual data blocks. They store and retrieve data based on client requests and NameNode instructions.
*   **Key Features:**
    *   **Block Storage:** Files are split into blocks (default 128MB or 256MB) and distributed across DataNodes.
    *   **Replication:** Each data block is replicated on multiple DataNodes (default 3 times) for fault tolerance. If a DataNode fails, the NameNode can retrieve data from another replica.
    *   **Write-Once, Read-Many (WORM):** HDFS is optimized for writing data once and reading it multiple times. It's not ideal for frequent random writes or updates.
    *   **High Throughput:** Designed for high throughput of large datasets, not low latency access.

**Example:**
Imagine a 1GB text file. HDFS will split it into 8 x 128MB blocks. Each block will be replicated 3 times on different DataNodes. If one DataNode containing a block fails, the NameNode knows there are other copies of that block available on other DataNodes.

#### **2.4 MapReduce Programming Model**

*   **Purpose:** A paradigm for processing massive datasets in parallel across a distributed cluster.
*   **Core Operations:**
    *   **Map:** Processes input data to produce intermediate key-value pairs.
    *   **Shuffle and Sort:** Intermediate key-value pairs are sorted and grouped by key.
    *   **Reduce:** Processes the grouped intermediate key-value pairs to produce the final output.

*   **Phases:**
    1.  **Map Phase:**
        *   Input data is split into smaller chunks.
        *   Each chunk is processed by a Mapper task.
        *   Mappers emit key-value pairs (e.g., `(word, 1)` for word count).
    2.  **Shuffle and Sort Phase:**
        *   The framework collects and sorts the intermediate key-value pairs.
        *   Pairs with the same key are grouped together and sent to a single Reducer.
    3.  **Reduce Phase:**
        *   Each Reducer task receives a key and a list of values associated with that key.
        *   Reducers process these values to produce the final output (e.g., summing up the counts for each word).

**Example: Word Count**

*   **Input:** A collection of text documents.
*   **Map Function:**
    *   Takes a line of text as input.
    *   Splits the line into words.
    *   For each word, emits `(word, 1)`.
*   **Shuffle & Sort:** Groups all instances of "the" together, all instances of "a" together, etc.
*   **Reduce Function:**
    *   Takes a word and a list of '1's as input (e.g., `("the", [1, 1, 1, ...])`).
    *   Sums the '1's to get the total count of the word.
    *   Outputs `(word, total_count)`.

#### **2.5 YARN (Yet Another Resource Negotiator)**

*   **Role:** Manages cluster resources (CPU, memory) and schedules applications for execution.
*   **Components:**
    *   **ResourceManager:** The master service that allocates resources to various distributed applications.
    *   **NodeManager:** The per-machine agent responsible for managing resources on a single node and reporting to the ResourceManager.
    *   **ApplicationMaster:** A framework-specific object that manages the execution of an application's tasks.

*   **Significance:** YARN decouples resource management from processing engines, allowing different processing frameworks (like Spark, Flink, MapReduce) to run on the same Hadoop cluster.

---

### **3. Apache Spark: An Advanced Distributed Computing Framework**

Apache Spark is a fast and general-purpose cluster computing system. It provides an optimized engine that supports general execution graphs, making it faster than MapReduce for many applications.

#### **3.1 Key Concepts of Spark**

*   **In-Memory Processing:** Spark can cache data in memory across operations, significantly speeding up iterative algorithms and interactive data analysis compared to disk-based MapReduce.
*   **Directed Acyclic Graph (DAG) Execution Engine:** Spark builds a DAG of transformations for a given job. This allows it to optimize execution by pipelining operations and avoiding unnecessary data shuffling.
*   **Resilient Distributed Datasets (RDDs):** The fundamental data structure in Spark. RDDs are immutable, fault-tolerant collections of elements that can be operated on in parallel.
*   **Spark Core:** Provides the basic functionality of Spark, including asynchronous execution, scheduling, RDDs, and memory management.
*   **Spark SQL:** For working with structured data using SQL queries.
*   **Spark Streaming:** For processing real-time streaming data.
*   **MLlib:** Spark's machine learning library.
*   **GraphX:** Spark's graph processing library.

#### **3.2 Spark Architecture**

*   **Driver Program:** The process where your `main` function runs. It creates a `SparkContext` (or `SparkSession` in newer versions), which is the entry point to Spark functionality. The Driver coordinates the execution of the Spark application.
*   **Cluster Manager:** Manages resources across the cluster (e.g., YARN, Mesos, Kubernetes, or Spark's Standalone scheduler).
*   **Worker Nodes:** Machines that execute tasks on behalf of the Driver.
    *   **Executor:** A process running on a worker node that is responsible for running tasks. Executors are launched by the Cluster Manager.

#### **3.3 How Spark Works (Simplified)**

1.  **Driver Program:** Submits jobs to the Cluster Manager.
2.  **Cluster Manager:** Allocates resources (executors) on worker nodes.
3.  **Driver Program:** Breaks the job into stages (based on the DAG). Each stage consists of tasks.
4.  **Executors:** Execute tasks on partitions of the data.
5.  **Data Shuffling:** If a transformation requires data from different partitions (e.g., `groupByKey`), Spark performs data shuffling across the cluster.
6.  **Caching:** Intermediate results can be cached in memory to speed up subsequent operations.

**Example: Word Count in Spark (using RDDs)**

```python
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("WordCountSpark").getOrCreate()

# Load data into an RDD
lines = spark.read.text("input.txt").rdd.map(lambda r: r[0])

# Transformations
counts = lines.flatMap(lambda line: line.split(" ")) \
              .map(lambda word: (word, 1)) \
              .reduceByKey(lambda a, b: a + b)

# Action
for word, count in counts.collect():
    print(f"{word}: {count}")

spark.stop()
```

*   `flatMap`: Splits each line into words.
*   `map`: Creates `(word, 1)` pairs.
*   `reduceByKey`: Aggregates counts for each word.
*   `collect()`: Gathers the results from all executors back to the driver.

---

### **4. Comparing Hadoop MapReduce and Spark**

| Feature           | Hadoop MapReduce                                      | Apache Spark                                           |
| :---------------- | :---------------------------------------------------- | :----------------------------------------------------- |
| **Processing Model** | Disk-based, sequential processing of Map and Reduce stages. | In-memory processing with DAG execution.               |
| **Speed**         | Slower, due to frequent disk I/O.                     | Significantly faster (up to 100x for iterative, 10x for batch). |
| **Data Structure**| Key-value pairs.                                      | RDDs, DataFrames, Datasets.                            |
| **Iterative Algorithms** | Inefficient. Requires writing intermediate results to disk after each iteration. | Highly efficient. Caches intermediate results in memory. |
| **Fault Tolerance**| Achieved through HDFS replication and task re-execution. | Achieved through RDD lineage and recomputation.        |
| **Ease of Use**   | More verbose and complex to write jobs.               | More expressive APIs (Scala, Python, Java, R), easier to write complex logic. |
| **Supported Operations** | Primarily Map and Reduce.                             | Rich set of transformations and actions (filter, map, join, groupBy, etc.). |
| **Real-time Processing** | Not natively designed for real-time.              | Supports Spark Streaming for near real-time processing. |
| **Resource Management** | Traditionally tied to Hadoop, now managed by YARN. | Can run on YARN, Mesos, Kubernetes, or standalone.     |

#### **4.1 Spark's Advantages**

*   **Speed:** Significantly faster due to in-memory computation and optimized execution.
*   **Versatility:** Supports a wide range of workloads including batch processing, interactive queries, machine learning, and graph processing.
*   **Ease of Use:** Richer APIs and support for multiple languages make development easier.
*   **Iterative Processing:** Excellent for machine learning algorithms that involve multiple passes over data.

---

### **5. Practice Questions and Exercises**

**Question 1:**
Explain the main reasons why distributed computing frameworks are essential for modern data science tasks.

**Answer:**
Distributed computing frameworks are essential for modern data science due to the challenges posed by Big Data:
*   **Volume:** Traditional single machines cannot store or process the sheer size of modern datasets.
*   **Velocity:** High-speed data generation requires parallel processing to keep up.
*   **Variety:** Distributed systems can handle diverse data formats more effectively.
*   **Scalability:** They allow systems to scale horizontally by adding more machines as data grows.
*   **Fault Tolerance:** They ensure data availability and job completion even if individual machines fail.
*   **Cost-Effectiveness:** Utilizing commodity hardware reduces infrastructure costs.

---

**Question 2:**
Describe the roles of the NameNode and DataNodes in HDFS. What is the purpose of replication in HDFS?

**Answer:**
*   **NameNode:** The master server that manages the HDFS file system namespace. It tracks file metadata, directory structure, and the location of data blocks across the cluster. It acts as the index for all data.
*   **DataNodes:** The worker nodes that store the actual data blocks. They serve read and write requests from clients and report their status to the NameNode.

**Purpose of Replication:** Replication in HDFS ensures **fault tolerance**. Each data block is copied multiple times (default 3) and stored on different DataNodes. If a DataNode fails, the NameNode can direct clients to access replicas of the data on other healthy nodes, ensuring data availability and preventing data loss.

---

**Question 3:**
Outline the basic steps of a MapReduce job. Provide a simple example scenario where MapReduce would be suitable.

**Answer:**
The basic steps of a MapReduce job are:
1.  **Map:** Input data is read, processed by a mapper function, and output as intermediate key-value pairs.
2.  **Shuffle and Sort:** Intermediate key-value pairs are sorted and grouped by key.
3.  **Reduce:** The grouped intermediate data is processed by a reducer function to produce the final output.

**Example Scenario:**
Calculating the total sales for each product from a large dataset of sales transactions.
*   **Mapper:** Reads each transaction, outputs `(product_id, sale_amount)`.
*   **Shuffle & Sort:** Groups all sales amounts for each `product_id`.
*   **Reducer:** Sums up the `sale_amount` for each `product_id` to get the total sales per product.

---

**Question 4:**
What is the primary advantage of Apache Spark over Hadoop MapReduce, especially for iterative computations?

**Answer:**
The primary advantage of Apache Spark over Hadoop MapReduce is its **in-memory processing capability**. Spark can cache intermediate results in RAM across operations. This significantly speeds up **iterative computations** (like machine learning algorithms that repeatedly process data) because it avoids the performance penalty of writing intermediate results to disk after each step, which is characteristic of MapReduce. Spark's DAG execution engine further optimizes these workflows.

---

**Question 5:**
What is an RDD in Spark?

**Answer:**
An **RDD (Resilient Distributed Dataset)** is the fundamental data structure in Apache Spark. It is an immutable, fault-tolerant collection of elements that can be operated on in parallel. RDDs are distributed across the nodes of a Spark cluster and are designed to be resilient to node failures through "lineage" (the sequence of transformations used to create them), allowing Spark to recompute lost partitions.

---

### **Important Points to Remember**

*   **Big Data needs distributed solutions** for scalability, fault tolerance, and parallel processing.
*   **Hadoop** provides a foundational ecosystem with HDFS for storage and MapReduce for batch processing.
*   **HDFS** is optimized for large files, high throughput, and fault tolerance through replication, but not for low-latency or frequent writes.
*   **MapReduce** is a paradigm for parallel data processing based on a Map and Reduce phase, but it can be slow due to disk I/O.
*   **YARN** decouples resource management from processing engines, allowing multiple frameworks on a cluster.
*   **Spark** is a faster, more general-purpose engine that excels in **in-memory processing** and **iterative algorithms**.
*   **RDDs** are Spark's core data structure, offering fault tolerance and immutability.
*   Spark's **DAG scheduler** and **in-memory caching** are key to its performance advantage over MapReduce.
*   When choosing between MapReduce and Spark, consider the **performance requirements**, the **nature of the computation** (iterative vs. batch), and **ease of development**. Spark is generally preferred for most modern big data processing tasks.

---
