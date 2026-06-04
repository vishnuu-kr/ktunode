---
title: "GPU Computing."
subject: "ADVANCED COMPUTING SYSTEMS"
module: "Module 1: Distributed System Models and Enabling Technologies:"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8baa6"
status: "completed"
scrapedAt: "2026-05-20T16:49:46.616Z"
---
## ADVANCED COMPUTING SYSTEMS - Module 1: Distributed System Models and Enabling Technologies - Topic: GPU Computing

**Learning Outcomes:**

*   Understand the architecture and functionality of GPUs.
*   Explain the differences between CPU and GPU architectures and their implications for parallel processing.
*   Describe the programming models used for GPU computing (e.g., CUDA, OpenCL).
*   Identify applications suitable for GPU acceleration.
*   Analyze the performance benefits and limitations of GPU computing.
*   Understand the role of GPUs in distributed computing environments.

---

### 1. Introduction to GPU Computing

*   **Definition:** GPU (Graphics Processing Unit) computing refers to using a GPU to perform general-purpose scientific and engineering computation.  Originally designed for accelerating graphics rendering, GPUs have evolved to become powerful parallel processors applicable to a wide range of computationally intensive tasks.
*   **Evolution:**  From fixed-function graphics pipelines to programmable shaders and now to general-purpose computing. Key milestones include:
    *   Programmable Shaders: Increased flexibility in graphics processing.
    *   CUDA (Compute Unified Device Architecture): NVIDIA's parallel computing platform and programming model.
    *   OpenCL (Open Computing Language): An open standard for parallel programming across heterogeneous platforms (CPUs, GPUs, DSPs).
*   **Key Concepts:**
    *   **Massively Parallel:** GPUs contain thousands of cores designed to execute the same instruction on multiple data points simultaneously (SIMD/SIMT).
    *   **Throughput-Oriented:** Optimized for maximizing the number of operations performed per unit time.
    *   **Data Parallelism:** A programming paradigm where the same operation is performed on multiple data elements concurrently.

### 2. GPU Architecture and Functionality

*   **Core Components:**
    *   **Streaming Multiprocessors (SMs):**  The basic building block of a GPU. Each SM contains multiple cores (CUDA Cores, Streaming Processors), shared memory, registers, and control logic.
    *   **CUDA Cores (NVIDIA) / Compute Units (AMD):** The individual processing units that perform arithmetic and logical operations.
    *   **Memory Hierarchy:**
        *   **Global Memory (DRAM):** Large but relatively slow off-chip memory.  Accessed by all SMs.
        *   **Shared Memory (on-chip):**  Fast, low-latency memory shared by threads within a single SM.  Used for inter-thread communication and caching data.
        *   **Registers (per-thread):** Fastest memory, private to each thread.
        *   **Cache (L1, L2):**  Hardware-managed caches to improve memory access performance.
        *   **Constant Memory:** Read-only memory optimized for frequently accessed constant values.
        *   **Texture Memory:** Optimized for accessing data with spatial locality.
    *   **Interconnect:** High-bandwidth interconnects (e.g., NVLink) enable fast communication between GPUs and CPUs or between multiple GPUs.
*   **Execution Model (SIMT - Single Instruction, Multiple Threads):**
    *   **Threads:** The basic unit of execution.
    *   **Blocks:**  A group of threads that can cooperate and share data through shared memory. Threads within a block are executed on the same SM.
    *   **Grids:** A collection of blocks. Blocks within a grid can be executed on different SMs.
    *   **Warps (NVIDIA):**  A group of 32 threads that execute the same instruction in lockstep.  Threads within a warp are scheduled and executed together on an SM. Divergence within a warp (i.e., different threads taking different branches) can lead to performance degradation.
*   **Functionality:**
    *   **Parallel Processing:** Executing multiple threads concurrently.
    *   **Memory Management:** Transferring data between CPU and GPU memory.
    *   **Synchronization:**  Ensuring proper execution order and data consistency across threads and blocks.

### 3. CPU vs. GPU Architectures

| Feature          | CPU                                   | GPU                                      |
|-------------------|----------------------------------------|-------------------------------------------|
| **Design Goals**   | Low latency, general-purpose computing | High throughput, data-parallel computing  |
| **Number of Cores** | Few (e.g., 4, 8, 16)                   | Many (e.g., 1000s)                        |
| **Core Complexity**| Complex, out-of-order execution      | Simpler, in-order execution               |
| **Cache Size**     | Large                                  | Smaller, more localized                    |
| **Memory Bandwidth**| Moderate                              | High                                      |
| **Workload**       | Serial, complex tasks                  | Data-parallel, computationally intensive tasks |

*   **Implications for Parallel Processing:**
    *   CPUs excel at serial tasks with complex control flow and low data parallelism.
    *   GPUs are better suited for data-parallel tasks with high arithmetic intensity (ratio of arithmetic operations to memory accesses).
    *   Amdahl's Law: Limits the speedup achievable by parallelizing a task.  If a significant portion of the task is inherently serial, GPU acceleration will have limited impact.

### 4. GPU Programming Models (CUDA, OpenCL)

*   **CUDA (Compute Unified Device Architecture):**
    *   NVIDIA's proprietary parallel computing platform and programming model.
    *   Uses C/C++ with extensions for GPU programming (e.g., `__global__`, `__device__`, `__shared__`).
    *   Mature ecosystem with extensive libraries and tools.
    *   **Example:**
        ```c++
        __global__ void vectorAdd(float *a, float *b, float *c, int n) {
          int i = blockIdx.x * blockDim.x + threadIdx.x;
          if (i < n) {
            c[i] = a[i] + b[i];
          }
        }

        int main() {
          // Allocate memory on host and device
          // Transfer data to device
          // Launch the kernel: vectorAdd<<<blocks, threads>>>(a_d, b_d, c_d, n);
          // Transfer results back to host
          // Free memory
          return 0;
        }
        ```
    *   **Kernel:**  A function that is executed on the GPU.  The `__global__` keyword indicates that the function is executed on the device (GPU) and called from the host (CPU).
    *   `blockIdx.x`: Index of the block within the grid.
    *   `blockDim.x`:  Number of threads per block.
    *   `threadIdx.x`:  Index of the thread within the block.

*   **OpenCL (Open Computing Language):**
    *   An open standard for parallel programming across heterogeneous platforms (CPUs, GPUs, FPGAs, etc.).
    *   Uses C-like language with extensions for parallel programming.
    *   Vendor-neutral, allowing code to be executed on different hardware.
    *   **Key Concepts:**
        *   **Platform:** Represents the underlying hardware.
        *   **Device:**  A specific processing unit (e.g., GPU, CPU) within a platform.
        *   **Context:**  Manages devices and command queues.
        *   **Command Queue:**  A queue of commands that are executed on a device.
        *   **Kernel:**  A function that is executed on the device.

*   **Other Programming Models:**
    *   **DirectX Compute:** Microsoft's API for GPU computing on Windows platforms.
    *   **Metal:** Apple's API for GPU computing on macOS and iOS platforms.

### 5. Applications Suitable for GPU Acceleration

*   **Deep Learning:** Training and inference of deep neural networks.  GPUs significantly accelerate matrix multiplications and other computationally intensive operations.
*   **Scientific Computing:**  Simulations, data analysis, and modeling in fields such as physics, chemistry, biology, and engineering.  Examples: computational fluid dynamics (CFD), molecular dynamics, climate modeling.
*   **Image and Video Processing:**  Image filtering, video encoding/decoding, object detection, image recognition.
*   **Financial Modeling:**  Risk analysis, option pricing, and other financial calculations.
*   **Cryptography:**  Password cracking, hash computation, and other cryptographic operations.
*   **Big Data Analytics:**  Data processing, machine learning, and other analytical tasks on large datasets.

### 6. Performance Benefits and Limitations

*   **Performance Benefits:**
    *   **Significant Speedup:**  GPUs can provide substantial speedups compared to CPUs for data-parallel tasks.
    *   **Energy Efficiency:**  GPUs can be more energy-efficient than CPUs for certain workloads.
    *   **Cost-Effectiveness:**  GPUs can provide a high performance-per-dollar ratio.
*   **Limitations:**
    *   **Data Transfer Overhead:** Transferring data between CPU and GPU memory can be a bottleneck.  Optimizing data transfer is crucial for achieving good performance.
    *   **Kernel Launch Overhead:** Launching a kernel on the GPU has some overhead. It's best to perform a significant amount of work per kernel launch.
    *   **Synchronization Overhead:**  Synchronization between threads can be expensive.  Minimize synchronization where possible.
    *   **Limited Memory:**  GPU memory is typically smaller than CPU memory.
    *   **Algorithm Suitability:** Not all algorithms are well-suited for GPU acceleration. Algorithms with low data parallelism or complex control flow may not benefit significantly.
    *   **Debugging Complexity:** Debugging GPU code can be more challenging than debugging CPU code.

### 7. GPU Computing in Distributed Computing Environments

*   **Heterogeneous Computing:**  Combining CPUs and GPUs to leverage the strengths of both architectures.  CPUs handle control logic and complex tasks, while GPUs accelerate data-parallel computations.
*   **Distributed GPU Computing:** Using multiple GPUs across multiple nodes in a cluster or cloud environment to solve large-scale problems.
*   **Frameworks for Distributed GPU Computing:**
    *   **Horovod:**  A distributed deep learning training framework that supports multiple GPUs and multiple nodes.
    *   **TensorFlow Distributed:** TensorFlow's built-in support for distributed training across multiple GPUs and multiple nodes.
    *   **PyTorch DistributedDataParallel (DDP):** PyTorch's library to enable multi-GPU training across multiple machines.
*   **Challenges:**
    *   **Data Distribution:** Efficiently distributing data across multiple GPUs.
    *   **Communication Overhead:** Minimizing communication between GPUs.
    *   **Synchronization:** Ensuring proper synchronization across multiple GPUs.
    *   **Load Balancing:** Distributing the workload evenly across multiple GPUs.

### Important Points to Remember:

*   **Data parallelism is key:**  GPUs excel at tasks where the same operation can be performed on many data elements concurrently.
*   **Minimize data transfers:**  Transferring data between CPU and GPU is a major performance bottleneck.
*   **Understand memory hierarchy:**  Utilize shared memory and other on-chip memories to reduce latency.
*   **Be aware of warp divergence:**  Avoid situations where threads within a warp take different execution paths.
*   **Profile and optimize:** Use profiling tools to identify performance bottlenecks and optimize your code.

---

### Practice Questions and Exercises:

**1. What are the key differences between CPU and GPU architectures, and how do these differences affect their suitability for different types of workloads?**

*   **Answer:** CPUs are designed for low latency and general-purpose computing, with a small number of complex cores and large caches. GPUs are designed for high throughput and data-parallel computing, with a large number of simpler cores and smaller, localized caches. CPUs excel at serial tasks, while GPUs are better suited for data-parallel tasks.

**2. Explain the SIMT execution model used in GPUs. How does warp divergence affect performance?**

*   **Answer:** SIMT (Single Instruction, Multiple Threads) is an execution model where threads within a warp (typically 32 threads) execute the same instruction in lockstep. Warp divergence occurs when threads within a warp take different execution paths (e.g., due to conditional branching). This can lead to performance degradation because the GPU must serialize the execution of the different branches, effectively reducing the number of threads that are actively executing.

**3. Write a simple CUDA kernel to add two vectors of integers. Include the kernel definition, host-side memory allocation, data transfer to the device, kernel launch, data transfer back to the host, and memory deallocation.**

```c++
#include <iostream>
#include <cuda_runtime.h>

__global__ void vectorAdd(int *a, int *b, int *c, int n) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;
    if (i < n) {
        c[i] = a[i] + b[i];
    }
}

int main() {
    int n = 1024;
    int *a, *b, *c;
    int *d_a, *d_b, *d_c;
    size_t size = n * sizeof(int);

    // Allocate host memory
    a = (int *)malloc(size);
    b = (int *)malloc(size);
    c = (int *)malloc(size);

    // Initialize host data
    for (int i = 0; i < n; i++) {
        a[i] = i;
        b[i] = n - i;
    }

    // Allocate device memory
    cudaMalloc(&d_a, size);
    cudaMalloc(&d_b, size);
    cudaMalloc(&d_c, size);

    // Transfer data from host to device
    cudaMemcpy(d_a, a, size, cudaMemcpyHostToDevice);
    cudaMemcpy(d_b, b, size, cudaMemcpyHostToDevice);

    // Define grid and block dimensions
    int blockSize = 256;
    int numBlocks = (n + blockSize - 1) / blockSize;

    // Launch kernel
    vectorAdd<<<numBlocks, blockSize>>>(d_a, d_b, d_c, n);

    // Transfer data from device to host
    cudaMemcpy(c, d_c, size, cudaMemcpyDeviceToHost);

    // Verify results (optional)
    for (int i = 0; i < n; i++) {
        if (c[i] != a[i] + b[i]) {
            std::cerr << "Error at index " << i << ": " << c[i] << " != " << a[i] + b[i] << std::endl;
            return 1;
        }
    }

    std::cout << "Vector addition successful!" << std::endl;


    // Free device memory
    cudaFree(d_a);
    cudaFree(d_b);
    cudaFree(d_c);

    // Free host memory
    free(a);
    free(b);
    free(c);

    return 0;
}
```

**4.  What are the performance benefits and limitations of GPU computing? Give examples of applications where GPUs are particularly well-suited.**

*   **Answer:** (See section 6 above for detailed answer).  GPUs offer significant speedups and energy efficiency for data-parallel tasks but are limited by data transfer overhead, kernel launch overhead, and algorithm suitability.  GPUs are well-suited for Deep Learning, Scientific Computing, Image/Video Processing, and other compute-intensive tasks.

**5. Explain the role of GPUs in distributed computing environments. What are some of the challenges involved in using GPUs in a distributed setting?**

*   **Answer:** (See section 7 above for detailed answer). GPUs can be used to accelerate individual nodes in a distributed system or can be used as accelerators in a distributed system.  Challenges include data distribution, communication overhead, synchronization, and load balancing.

---
