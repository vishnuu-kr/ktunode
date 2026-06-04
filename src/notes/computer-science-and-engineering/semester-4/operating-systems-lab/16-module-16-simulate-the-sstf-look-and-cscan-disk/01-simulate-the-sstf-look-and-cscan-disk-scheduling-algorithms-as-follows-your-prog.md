---
title: "Simulate the SSTF, LOOK, and CSCAN disk-scheduling algorithms as follows: Your program will service a disk with 5,000 cylinders numbered 0 to 4,999. The program will generate a random series of 10 cylinder requests and service them according to each of the algorithms listed earlier. The program will be passed the initial position of the disk head (as a parameter on the command line) and will report the total number of head movements required by each algorithm."
subject: "OPERATING SYSTEMS LAB"
module: "Module 16: Simulate the SSTF, LOOK, and CSCAN disk"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4ad"
status: "completed"
scrapedAt: "2026-05-20T16:15:06.840Z"
---
## OPERATING SYSTEMS LAB - Module 16: Disk Scheduling Algorithms - SSTF, LOOK, and CSCAN

**Topic:** Simulate the SSTF, LOOK, and CSCAN disk-scheduling algorithms.

**Description:** This lab simulates three disk-scheduling algorithms (SSTF, LOOK, and CSCAN) for a disk with 5,000 cylinders (0 to 4,999). The program generates 10 random cylinder requests and services them according to each algorithm. The initial disk head position is passed as a command-line argument. The program reports the total head movements for each algorithm.

**Learning Outcomes:**

*   Understand the concepts of disk scheduling and its importance in OS performance.
*   Learn and implement the Shortest Seek Time First (SSTF) disk scheduling algorithm.
*   Learn and implement the LOOK disk scheduling algorithm.
*   Learn and implement the Circular SCAN (CSCAN) disk scheduling algorithm.
*   Analyze and compare the performance of SSTF, LOOK, and CSCAN algorithms based on total head movements.
*   Gain practical experience in simulating OS algorithms.

---

### 1. Introduction to Disk Scheduling

*   **What is Disk Scheduling?** Disk scheduling is the process of deciding the order in which disk I/O requests will be serviced. It is crucial for optimizing disk performance.
*   **Why is Disk Scheduling Important?**
    *   **Minimize Seek Time:** Reducing the time it takes for the disk head to move to the correct cylinder.
    *   **Improve Throughput:** Increasing the number of requests that can be serviced per unit of time.
    *   **Ensure Fairness:** Preventing starvation of any particular request.
*   **Key Concepts:**
    *   **Seek Time:** The time it takes for the disk arm to move the head to the cylinder containing the desired data.
    *   **Rotational Latency:** The time it takes for the desired sector to rotate under the head.
    *   **Transfer Time:** The time it takes to transfer data from the disk to memory.
    *   **Head Movement:** Refers to the number of cylinders the disk head traverses during the scheduling process. This is the primary metric we are minimizing in this lab.

---

### 2. Shortest Seek Time First (SSTF)

*   **Definition:** SSTF selects the request with the minimum seek time from the current head position.  It prioritizes requests closest to the current head position.
*   **Algorithm:**
    1.  Start at the initial head position.
    2.  Find the request in the queue that requires the shortest seek time from the current head position.
    3.  Service that request.
    4.  Update the current head position to the serviced cylinder.
    5.  Repeat steps 2-4 until all requests are serviced.
*   **Advantages:**
    *   Simple to implement.
    *   Increases throughput.
    *   Decreases average response time.
*   **Disadvantages:**
    *   Can cause starvation for requests that are far from the current head position.
    *   High variance in response time.
*   **Example:**

    *   Requests: 98, 183, 37, 122, 14, 124, 65, 67
    *   Initial Head Position: 53
    *   Cylinder Range: 0-199

    **SSTF Scheduling:**

    1.  **Start:** 53
    2.  **Nearest:** 65 (Distance: 12)
    3.  **Next:** 67 (Distance: 2)
    4.  **Next:** 37 (Distance: 30)
    5.  **Next:** 14 (Distance: 23)
    6.  **Next:** 98 (Distance: 84)
    7.  **Next:** 122 (Distance: 24)
    8.  **Next:** 124 (Distance: 2)
    9.  **Next:** 183 (Distance: 59)

    **Total Head Movement:** 12 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = **236**

---

### 3. LOOK

*   **Definition:** The LOOK algorithm is an improvement over SSTF that addresses starvation.  It scans the disk in one direction, servicing all requests in that direction until it reaches the farthest request in that direction. Then, it reverses direction and continues servicing requests in the opposite direction.  It only travels as far as the furthest request in each direction.
*   **Algorithm:**
    1.  Start at the initial head position.
    2.  Determine the direction of movement (e.g., towards higher cylinder numbers).
    3.  While there are requests in the current direction, service the nearest request in that direction.
    4.  If there are no more requests in the current direction, reverse direction.
    5.  Repeat steps 3-4 until all requests are serviced.
*   **Advantages:**
    *   Lower variance in response time compared to SSTF.
    *   Reduces the chances of starvation.
    *   More efficient than SCAN as it doesn't travel to the end of the disk unless there are requests there.
*   **Disadvantages:**
    *   Can still have some bias towards the middle cylinders.
    *   More complex to implement than SSTF.
*   **Example (Using the same requests and initial position as SSTF):**

    *   Requests: 98, 183, 37, 122, 14, 124, 65, 67
    *   Initial Head Position: 53
    *   Cylinder Range: 0-199
    *   **Initial Direction:** Increasing

    **LOOK Scheduling:**

    1.  **Start:** 53
    2.  **Next:** 65 (Distance: 12)
    3.  **Next:** 67 (Distance: 2)
    4.  **Next:** 98 (Distance: 31)
    5.  **Next:** 122 (Distance: 24)
    6.  **Next:** 124 (Distance: 2)
    7.  **Next:** 183 (Distance: 59)  - *Reaches farthest request in increasing direction*
    8.  **Reverse Direction**
    9.  **Next:** 37 (Distance: 146)
    10. **Next:** 14 (Distance: 23)

    **Total Head Movement:** 12 + 2 + 31 + 24 + 2 + 59 + 146 + 23 = **299**

---

### 4. Circular SCAN (CSCAN)

*   **Definition:** CSCAN is similar to SCAN but provides a more uniform wait time. The disk arm moves from one end of the disk to the other, servicing requests along the way. When it reaches the end, it immediately returns to the beginning of the disk *without servicing any requests on the return trip*.
*   **Algorithm:**
    1.  Start at the initial head position.
    2.  Move in one direction (e.g., towards higher cylinder numbers), servicing all requests in that direction.
    3.  When the end of the disk is reached, return to the beginning of the disk *without servicing any requests*.
    4.  Continue servicing requests from the beginning of the disk in the same direction until all requests are serviced.
*   **Advantages:**
    *   Provides more uniform wait time than SCAN.
    *   Reduces the chances of starvation.
*   **Disadvantages:**
    *   The head has to travel a longer distance even when there are no requests at the end of the disk.
    *   Can result in more head movement than other algorithms in some cases.
*   **Example (Using the same requests and initial position as SSTF and LOOK):**

    *   Requests: 98, 183, 37, 122, 14, 124, 65, 67
    *   Initial Head Position: 53
    *   Cylinder Range: 0-199
    *   **Initial Direction:** Increasing

    **CSCAN Scheduling:**

    1.  **Start:** 53
    2.  **Next:** 65 (Distance: 12)
    3.  **Next:** 67 (Distance: 2)
    4.  **Next:** 98 (Distance: 31)
    5.  **Next:** 122 (Distance: 24)
    6.  **Next:** 124 (Distance: 2)
    7.  **Next:** 183 (Distance: 59)  - *Reaches farthest request in increasing direction*
    8.  **Return to Beginning (0):** 183 (Distance)
    9.  **Next:** 14 (Distance: 14)
    10. **Next:** 37 (Distance: 23)

    **Total Head Movement:** 12 + 2 + 31 + 24 + 2 + 59 + 183 + 14 + 23 = **350**

---

### 5. Implementation Notes

*   **Language:** C/C++, Java, or Python can be used.
*   **Random Request Generation:** Use a random number generator to create 10 unique cylinder requests within the range of 0 to 4999.  Ensure there are no duplicate requests.
*   **Command-Line Argument:** Pass the initial head position as a command-line argument.  Validate the input to ensure it's within the allowed range (0-4999).
*   **Data Structures:** Use arrays or lists to store the cylinder requests.
*   **Functions:** Break down the code into functions for each algorithm (SSTF, LOOK, CSCAN) to improve readability and maintainability.  Include functions for request generation and head movement calculation.
*   **Output:** Print the total head movement for each algorithm clearly.

---

### 6. Code Structure (Example - Conceptual):

```c++
#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdlib>
#include <ctime>

using namespace std;

// Function to generate random cylinder requests
vector<int> generateRequests(int numRequests, int numCylinders);

// Function to simulate SSTF algorithm
int simulateSSTF(vector<int> requests, int initialPosition);

// Function to simulate LOOK algorithm
int simulateLOOK(vector<int> requests, int initialPosition);

// Function to simulate CSCAN algorithm
int simulateCSCAN(vector<int> requests, int initialPosition, int numCylinders);

int main(int argc, char* argv[]) {
    if (argc != 2) {
        cerr << "Usage: " << argv[0] << " <initial_head_position>" << endl;
        return 1;
    }

    int initialPosition = atoi(argv[1]);
    int numCylinders = 5000;
    int numRequests = 10;

    if (initialPosition < 0 || initialPosition >= numCylinders) {
        cerr << "Initial position must be between 0 and " << numCylinders - 1 << endl;
        return 1;
    }

    vector<int> requests = generateRequests(numRequests, numCylinders);

    cout << "Initial Head Position: " << initialPosition << endl;
    cout << "Requests: ";
    for (int request : requests) {
        cout << request << " ";
    }
    cout << endl;

    int sstfHeadMovement = simulateSSTF(requests, initialPosition);
    int lookHeadMovement = simulateLOOK(requests, initialPosition);
    int cscanHeadMovement = simulateCSCAN(requests, initialPosition, numCylinders);

    cout << "SSTF Head Movement: " << sstfHeadMovement << endl;
    cout << "LOOK Head Movement: " << lookHeadMovement << endl;
    cout << "CSCAN Head Movement: " << cscanHeadMovement << endl;

    return 0;
}

// Implementations of generateRequests, simulateSSTF, simulateLOOK, and simulateCSCAN go here.
//These will include the scheduling logic, sorting, and distance calculations.  Remember to remove serviced requests.
```

---

### 7. Practice Questions and Exercises

1.  **What are the advantages and disadvantages of SSTF?**
    *   *Answer:* Advantages: Simple, increases throughput. Disadvantages: Can cause starvation, high variance in response time.

2.  **Explain how LOOK avoids the "end of disk" issue of SCAN.**
    *   *Answer:* LOOK only travels to the farthest request in each direction, rather than always going to the end of the disk.

3.  **Why does CSCAN provide more uniform wait times than SCAN?**
    *   *Answer:* CSCAN returns to the beginning of the disk without servicing requests, ensuring that requests at the other end of the disk are not perpetually delayed.

4.  **Given the following requests: 20, 50, 100, 150, 180, and initial head position 80. Calculate the total head movement for SSTF.**
    *   *Answer:*
        *   Start: 80
        *   Next: 100 (Distance: 20)
        *   Next: 50 (Distance: 50)
        *   Next: 150 (Distance: 100)
        *   Next: 20 (Distance: 130)
        *   Next: 180 (Distance: 160)
        *   Total Head Movement: 20 + 50 + 100 + 130 + 160 = **460**

5.  **Implement the `generateRequests` function in C++ (or your chosen language) to generate 10 unique random cylinder requests between 0 and 4999.**  (Provide code).
```c++
vector<int> generateRequests(int numRequests, int numCylinders) {
    vector<int> requests;
    srand(time(0)); // Seed the random number generator

    while (requests.size() < numRequests) {
        int request = rand() % numCylinders;
        // Check for duplicates
        bool duplicate = false;
        for (int r : requests) {
            if (r == request) {
                duplicate = true;
                break;
            }
        }
        if (!duplicate) {
            requests.push_back(request);
        }
    }
    return requests;
}
```

6. **What would be the result of running the SSTF algorithm on a list of requests with identical cylinder numbers?**
*Answer:* SSTF would select any of the requests as the closest to the current head position.  After servicing the first one, all other identical cylinder numbers would now be at a seek time of zero, and the next request would be immediately serviced. The total head movement would be the distance to the first cylinder and then zero.

---

### 8. Important Points to Remember

*   Disk scheduling algorithms aim to optimize disk performance by minimizing seek time and improving throughput.
*   SSTF is simple but can lead to starvation.
*   LOOK improves upon SCAN by only traversing to the farthest request in each direction.
*   CSCAN provides more uniform wait times compared to SCAN but can result in longer head movements.
*   The performance of each algorithm can vary depending on the request pattern and initial head position.
*   The program should validate user input (initial head position) to prevent errors.
*   Think about edge cases when implementing the algorithms (e.g., empty request queue).

This comprehensive guide should help you understand and implement the SSTF, LOOK, and CSCAN disk scheduling algorithms in your Operating Systems Lab. Good luck!
