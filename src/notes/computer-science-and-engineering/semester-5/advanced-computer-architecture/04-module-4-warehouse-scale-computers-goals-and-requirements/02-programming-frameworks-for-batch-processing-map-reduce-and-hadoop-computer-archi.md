---
title: "Programming frameworks for Batch processing – Map reduce and Hadoop Computer Architecture of Warehouse-scale computers Moore’s Law"
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 4: Warehouse Scale Computers – Goals and requirements."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b866"
status: "completed"
scrapedAt: "2026-05-20T16:42:43.994Z"
---
## ADVANCED COMPUTER ARCHITECTURE - Module 4: Warehouse Scale Computers

**Topic:** Programming frameworks for Batch processing – Map reduce and Hadoop, Computer Architecture of Warehouse-scale computers, Moore's Law

**Learning Outcomes:**

*   Understand the goals and requirements of Warehouse-Scale Computers (WSCs).
*   Explain the MapReduce programming model and its application in batch processing.
*   Describe the Hadoop ecosystem and its components.
*   Analyze the computer architecture of WSCs, including hardware and networking aspects.
*   Understand the impact of Moore's Law on WSC development and performance.

---

### 1. Goals and Requirements of Warehouse-Scale Computers (WSCs)

*   **Definition:** Warehouse-Scale Computers (WSCs), also known as data centers, are large-scale computing infrastructures containing thousands to hundreds of thousands of servers interconnected by a high-speed network. They are designed to provide massive computing and storage resources for internet-scale services.
*   **Goals:**
    *   **High Throughput and Scalability:**  Handle massive amounts of data and user requests concurrently. Scale linearly with increasing workload.
    *   **Low Latency:** Respond quickly to user requests, delivering timely results.
    *   **High Availability:**  Provide continuous service even in the presence of hardware or software failures.  Implemented through redundancy and fault tolerance.
    *   **Cost Efficiency:** Minimize operational expenses (OPEX) such as power, cooling, and maintenance.
    *   **Energy Efficiency:** Reduce energy consumption to minimize environmental impact and operational costs.
    *   **Resource Utilization:** Maximize the utilization of available resources to improve efficiency and reduce costs.
    *   **Security:** Protecting data and infrastructure from unauthorized access and cyber threats.
*   **Requirements:**
    *   **Massive Parallelism:**  Distribute workloads across a large number of servers.
    *   **Fault Tolerance:**  Handle failures gracefully and automatically without disrupting service.  Data replication and distributed consensus mechanisms are critical.
    *   **Data Locality:**  Process data where it is stored to minimize network traffic.
    *   **Efficient Resource Management:**  Allocate resources dynamically to meet changing demands.  Use schedulers like YARN.
    *   **Low-Latency Networking:**  Use high-bandwidth, low-latency networks to enable fast communication between servers.
    *   **Power Efficiency:**  Design energy-efficient hardware and cooling systems.
    *   **Scalable Storage:**  Use distributed file systems like HDFS to store large volumes of data.
    *   **Software Infrastructure:**  Use frameworks like MapReduce and Hadoop to simplify distributed programming.

---

### 2. Programming Frameworks for Batch Processing: MapReduce

*   **Definition:** MapReduce is a programming model and software framework for processing large datasets in parallel on a distributed computing infrastructure.  It's well-suited for batch processing, where large volumes of data are processed without strict latency requirements.
*   **Key Concepts:**
    *   **Map Function:**  Takes input data (key-value pairs) and transforms it into intermediate key-value pairs.  Applied in parallel to different subsets of the input data.
    *   **Reduce Function:**  Takes intermediate key-value pairs with the same key and aggregates or summarizes them into a final output. Applied in parallel to each key.
    *   **Shuffle and Sort:**  The framework automatically shuffles and sorts the intermediate key-value pairs produced by the map function, grouping all values with the same key together. This is a crucial step for the reduce function.
*   **Workflow:**
    1.  **Input Splitting:** The input data is divided into smaller chunks called splits.
    2.  **Map Phase:**  The map function is applied to each split in parallel on different worker nodes.
    3.  **Shuffle Phase:** The intermediate key-value pairs are shuffled and sorted based on the keys.
    4.  **Reduce Phase:**  The reduce function is applied to each key and its associated values in parallel on different worker nodes.
    5.  **Output Generation:**  The final output is generated from the results of the reduce function.
*   **Advantages:**
    *   **Simple Programming Model:**  Easy to write parallel programs.
    *   **Fault Tolerance:**  Handles failures automatically by re-executing failed tasks.
    *   **Scalability:**  Scales to handle very large datasets by adding more machines.
*   **Disadvantages:**
    *   **Batch Processing:**  Not suitable for real-time or interactive applications due to the latency involved in the shuffle and sort phase.
    *   **Limited Expressiveness:**  Only supports a limited set of operations (map and reduce).
*   **Example:** Word Count
    *   **Input:** A collection of text documents.
    *   **Map Function:**  For each word in a document, emit a key-value pair: `(word, 1)`.
    *   **Reduce Function:**  For each word, sum the values (counts) from all the map outputs.
    *   **Output:**  A list of words and their corresponding counts.

---

### 3. Hadoop Ecosystem

*   **Definition:** Hadoop is an open-source framework that implements the MapReduce programming model and provides a distributed storage system.  It is a core component of many WSCs.
*   **Key Components:**
    *   **Hadoop Distributed File System (HDFS):**  A distributed, fault-tolerant file system designed to store large files across multiple machines.
        *   **NameNode:**  Manages the file system namespace and metadata.
        *   **DataNodes:** Store the actual data blocks.  Data is replicated across multiple DataNodes for fault tolerance.
    *   **Yet Another Resource Negotiator (YARN):** A resource management and job scheduling framework for Hadoop.
        *   **ResourceManager:**  Manages the cluster resources and schedules applications.
        *   **NodeManager:**  Manages the resources on each node and executes tasks.
    *   **MapReduce Engine:**  The implementation of the MapReduce programming model.
*   **Other Hadoop Ecosystem Components:**
    *   **Hive:**  A data warehouse system that provides an SQL-like interface for querying data stored in HDFS.
    *   **Pig:**  A high-level data flow language and execution framework for processing large datasets.
    *   **Spark:**  A fast and general-purpose cluster computing system that supports in-memory processing, making it suitable for iterative algorithms and real-time analytics.  Often used as a replacement for MapReduce.
    *   **HBase:**  A NoSQL database built on top of HDFS that provides random, real-time read/write access to large datasets.
    *   **ZooKeeper:**  A centralized service for maintaining configuration information, naming, providing distributed synchronization, and group services.

---

### 4. Computer Architecture of Warehouse-Scale Computers

*   **Hardware:**
    *   **Commodity Servers:** WSCs typically use commodity servers with x86-based processors, large amounts of RAM, and high-capacity hard drives or SSDs.
    *   **Storage:**  Distributed storage systems like HDFS are used to store large volumes of data.
    *   **Networking:**  High-speed, low-latency networks are essential for communication between servers.
        *   **Clos Networks:**  A multi-stage network topology that provides high bandwidth and scalability.
        *   **Software-Defined Networking (SDN):** Allows for dynamic configuration and management of the network.
    *   **Power and Cooling:**  WSCs require significant power and cooling infrastructure.
        *   **Power Usage Effectiveness (PUE):**  A metric used to measure the energy efficiency of a data center (Total Facility Energy / IT Equipment Energy). Lower PUE is better.
*   **Software:**
    *   **Operating System:** Linux is the most common operating system used in WSCs.
    *   **Virtualization:** Virtualization technologies like Docker and Kubernetes are used to improve resource utilization and simplify deployment.
    *   **Management Tools:**  Tools for monitoring, managing, and automating the operation of the WSC.
*   **Key Architectural Considerations:**
    *   **Scale-Out Architecture:**  WSCs are designed to scale horizontally by adding more servers.
    *   **Fault Tolerance:**  Redundancy and fault tolerance are built into the hardware and software.
    *   **Energy Efficiency:**  Energy efficiency is a critical design consideration.
    *   **Data Locality:**  Data is processed where it is stored to minimize network traffic.
    *   **Security:**  Security is a top priority, with measures to protect data and infrastructure.
*   **Network Topology:**  The network topology of a WSC is crucial for performance and scalability. Common topologies include:
    *   **Fat Tree:**  A hierarchical network topology with multiple paths between any two nodes, providing high bandwidth and fault tolerance.
    *   **Clos Network:** Similar to Fat Tree but often implemented with commodity switches for cost-effectiveness.

---

### 5. Moore's Law

*   **Definition:** Moore's Law states that the number of transistors on a microchip doubles approximately every two years, while the cost of computers is halved.
*   **Impact on WSCs:**
    *   **Increased Computing Power:**  Moore's Law has led to a dramatic increase in the processing power of servers used in WSCs. This allows for more complex algorithms and larger datasets to be processed.
    *   **Increased Memory Capacity:**  Moore's Law has also led to an increase in the amount of memory available in servers.  This allows for larger datasets to be held in memory, improving performance.
    *   **Decreased Cost:**  The decreasing cost of computing and storage has made it possible to build and operate large-scale WSCs.
    *   **Increased Energy Efficiency:**  While the overall power consumption of processors has increased, the energy efficiency (performance per watt) has also improved, allowing for more powerful WSCs with less energy consumption.
*   **Limitations:**
    *   **End of Dennard Scaling:** Dennard scaling, which stated that power density remained constant as transistors shrank, broke down.  This means that shrinking transistors now leads to increased power density and heat generation, limiting the clock speed of processors.
    *   **Physical Limits:**  As transistors approach the atomic level, it becomes increasingly difficult and expensive to shrink them further.
    *   **Alternative Architectures:**  Due to the limitations of Moore's Law, research is focused on alternative architectures, such as specialized hardware (e.g., GPUs, FPGAs), 3D stacking, and neuromorphic computing.
*   **Relevance to WSCs:**  While Moore's Law faces challenges, its historical impact has been transformative for WSCs.  However, WSC design is increasingly driven by:
    *   **Specialized Hardware:**  Utilizing hardware accelerators like GPUs and FPGAs for specific tasks (e.g., machine learning).
    *   **Distributed Systems Innovations:**  Improving distributed algorithms, data management techniques, and networking to maximize performance across large clusters.
    *   **Power Efficiency Optimizations:** Designing for power efficiency becomes paramount in the face of scaling challenges.

---

### Practice Questions and Exercises

1.  **Question:** Explain the difference between the Map and Reduce phases in the MapReduce programming model. Provide a simple example.
    *   **Answer:** The Map phase transforms input data into intermediate key-value pairs. The Reduce phase aggregates or summarizes these intermediate pairs with the same key to produce a final output.  Example: Word Count – Map emits (word, 1), Reduce sums the 1s for each word.

2.  **Question:** What are the main components of the Hadoop ecosystem, and what are their functions?
    *   **Answer:** HDFS (distributed storage), YARN (resource management), MapReduce engine (parallel processing), and other components like Hive, Pig, Spark, and HBase that provide higher-level functionalities.

3.  **Question:** Describe the architecture of a Warehouse-Scale Computer (WSC).  What are the key considerations for building an efficient WSC?
    *   **Answer:**  WSCs consist of thousands of commodity servers interconnected by a high-speed network. Key considerations include scalability, fault tolerance, data locality, energy efficiency, and security.

4.  **Question:** What is Moore's Law, and how has it impacted the development of WSCs?  What are its limitations?
    *   **Answer:** Moore's Law states that the number of transistors on a microchip doubles approximately every two years. It has led to increased computing power, memory capacity, and decreased cost of WSCs.  Limitations include the end of Dennard scaling and physical limits to transistor size.

5. **Exercise:** Design a MapReduce job to calculate the average temperature for each city from a dataset of temperature readings. Assume the input data is in the format (city, date, temperature).  Outline the Map and Reduce functions.
    * **Answer:**
        * **Map Function:**
            * Input: (city, date, temperature)
            * Output: (city, (temperature, 1))  // Emit the temperature and a count of 1
        * **Reduce Function:**
            * Input: city, list of (temperature, 1)
            * Calculate the sum of temperatures and the total count.
            * Output: (city, average_temperature) where average_temperature = sum of temperatures / total count

---

### Important Points to Remember

*   WSCs are large-scale computing infrastructures designed for internet-scale services.
*   MapReduce is a programming model for processing large datasets in parallel.
*   Hadoop is an open-source framework that implements the MapReduce model and provides a distributed storage system.
*   The architecture of a WSC is characterized by commodity servers, high-speed networks, and distributed storage.
*   Moore's Law has driven the development of WSCs, but its limitations are leading to alternative architectures and approaches.
*   Fault tolerance, scalability, data locality, and energy efficiency are crucial considerations in WSC design.
