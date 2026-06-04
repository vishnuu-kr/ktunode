---
title: "Simulate the FIFO, LRU, and optimal page-replacement algorithms as follows: First, generate a random page-reference string where page numbers range from 0 to 9. Apply the random page-reference string to each algorithm, and record the number of page faults incurred by each algorithm. Assume that demand paging is used. The length of the reference string and the number of page frames (varying from 1 to 7) are to be received as command line arguments."
subject: "OPERATING SYSTEMS LAB"
module: "Module 15: Simulate the FIFO, LRU, and optimal page"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4ab"
status: "completed"
scrapedAt: "2026-05-20T16:15:06.126Z"
---
## OPERATING SYSTEMS LAB - Module 15: Page Replacement Algorithms (FIFO, LRU, Optimal)

**Topic:** Simulate the FIFO, LRU, and Optimal page-replacement algorithms.

**Description:** This module focuses on understanding and implementing three fundamental page replacement algorithms (FIFO, LRU, and Optimal) to simulate their behavior and analyze their performance in terms of page faults. We will generate a random page-reference string, apply it to each algorithm, and record the number of page faults. We will explore the impact of varying the number of page frames.

**Learning Outcomes:**

*   Understand the concept of page replacement algorithms and their importance in virtual memory management.
*   Implement the FIFO (First-In, First-Out) page replacement algorithm.
*   Implement the LRU (Least Recently Used) page replacement algorithm.
*   Implement the Optimal page replacement algorithm.
*   Compare and contrast the performance of the FIFO, LRU, and Optimal algorithms based on page fault counts.
*   Analyze the impact of the number of page frames on the performance of these algorithms.

---

### 1. Key Concepts and Definitions

*   **Virtual Memory:** A memory management technique that allows processes to execute even if they are not entirely loaded into physical memory. This involves using secondary storage (e.g., hard disk) to extend the available RAM.
*   **Page:** A fixed-size block of memory used in virtual memory systems.
*   **Page Frame:** A fixed-size block of physical memory that can hold a page.
*   **Page Fault:** An event that occurs when a process tries to access a page that is not currently in physical memory.  The operating system must then retrieve the page from secondary storage and place it into a page frame. This is a costly operation.
*   **Page Replacement Algorithm:** A strategy used by the operating system to decide which page to remove from physical memory (page frame) when a new page needs to be loaded and no free frames are available. The goal is to minimize the number of page faults.
*   **Reference String:** A sequence of page numbers accessed by a process. This string is used to simulate the memory access patterns of a program.
*   **Demand Paging:**  A type of virtual memory where pages are only loaded into memory when they are referenced (on demand).

### 2. Page Replacement Algorithms

#### 2.1 FIFO (First-In, First-Out)

*   **Description:** The FIFO algorithm replaces the oldest page in memory, regardless of how recently it was used. It's simple to implement.
*   **Mechanism:** Keep track of the order in which pages were loaded into memory. When a page replacement is needed, remove the page that has been in memory the longest.
*   **Pros:** Easy to implement.
*   **Cons:**  Doesn't consider page usage. Can lead to *Belady's Anomaly*: Increasing the number of page frames can sometimes *increase* the number of page faults (rare but possible).
*   **Example:**

    Let's say we have 3 page frames and the reference string is: `1 2 3 4 1 2 5 1 2 3 4 5`

    | Reference String | Frame 1 | Frame 2 | Frame 3 | Page Fault? |
    |------------------|---------|---------|---------|-------------|
    | 1                | 1       |         |         | Yes         |
    | 2                | 1       | 2       |         | Yes         |
    | 3                | 1       | 2       | 3       | Yes         |
    | 4                | 4       | 2       | 3       | Yes         |
    | 1                | 4       | 1       | 3       | Yes         |
    | 2                | 4       | 1       | 2       | Yes         |
    | 5                | 5       | 1       | 2       | Yes         |
    | 1                | 5       | 1       | 2       | No          |
    | 2                | 5       | 1       | 2       | No          |
    | 3                | 5       | 3       | 2       | Yes         |
    | 4                | 4       | 3       | 2       | Yes         |
    | 5                | 4       | 3       | 5       | Yes         |

    Total Page Faults: 10

#### 2.2 LRU (Least Recently Used)

*   **Description:** The LRU algorithm replaces the page that has not been used for the longest period of time. This assumes that pages that have been recently used are more likely to be used again soon (locality of reference principle).
*   **Mechanism:** Keep track of when each page in memory was last accessed.  When a page replacement is needed, remove the page with the oldest access time.
*   **Pros:** Generally performs better than FIFO.
*   **Cons:**  More complex to implement than FIFO. Requires tracking usage history.  Can be expensive to implement perfectly in hardware (requires timestamps or a stack).
*   **Example:**

    Using the same reference string and 3 page frames: `1 2 3 4 1 2 5 1 2 3 4 5`

    | Reference String | Frame 1 | Frame 2 | Frame 3 | Page Fault? |
    |------------------|---------|---------|---------|-------------|
    | 1                | 1       |         |         | Yes         |
    | 2                | 1       | 2       |         | Yes         |
    | 3                | 1       | 2       | 3       | Yes         |
    | 4                | 4       | 2       | 3       | Yes         |
    | 1                | 4       | 1       | 3       | Yes         |
    | 2                | 4       | 1       | 2       | Yes         |
    | 5                | 5       | 1       | 2       | Yes         |
    | 1                | 5       | 1       | 2       | No          |
    | 2                | 5       | 1       | 2       | No          |
    | 3                | 5       | 3       | 2       | Yes         |
    | 4                | 5       | 3       | 4       | Yes         |
    | 5                | 5       | 3       | 4       | No          |

    Total Page Faults: 9

#### 2.3 Optimal (OPT)

*   **Description:** The Optimal algorithm replaces the page that will *not* be used for the longest period of time in the future.  It's the best possible algorithm in terms of minimizing page faults.
*   **Mechanism:** Requires knowing the entire reference string in advance. When a page replacement is needed, examine the future reference string and choose the page that will not be used for the longest time.
*   **Pros:**  Provides a lower bound on the number of page faults.  Useful for comparing the performance of other algorithms.
*   **Cons:**  Not practical to implement in real-time operating systems, as it requires knowing the future reference string.  It's primarily a theoretical benchmark.
*   **Example:**

    Using the same reference string and 3 page frames: `1 2 3 4 1 2 5 1 2 3 4 5`

    | Reference String | Frame 1 | Frame 2 | Frame 3 | Page Fault? |
    |------------------|---------|---------|---------|-------------|
    | 1                | 1       |         |         | Yes         |
    | 2                | 1       | 2       |         | Yes         |
    | 3                | 1       | 2       | 3       | Yes         |
    | 4                | 1       | 2       | 4       | Yes         |
    | 1                | 1       | 2       | 4       | No          |
    | 2                | 1       | 2       | 4       | No          |
    | 5                | 5       | 2       | 4       | Yes         |
    | 1                | 5       | 1       | 4       | Yes         |
    | 2                | 5       | 1       | 2       | Yes         |
    | 3                | 3       | 1       | 2       | Yes         |
    | 4                | 3       | 1       | 4       | Yes         |
    | 5                | 3       | 5       | 4       | Yes         |

    Total Page Faults: 9

### 3. Simulation Implementation

The simulation program should do the following:

1.  **Receive Command-Line Arguments:**
    *   Length of the reference string.
    *   Number of page frames (between 1 and 7).

2.  **Generate Random Reference String:**
    *   Create an array of integers representing the reference string.
    *   Fill the array with random page numbers between 0 and 9 (inclusive).

3.  **Implement Each Algorithm:**
    *   Create separate functions for FIFO, LRU, and Optimal.
    *   Each function should take the reference string and the number of page frames as input.
    *   Each function should simulate the algorithm and return the number of page faults.

4.  **Track Page Frames:**
    *   Use a data structure (e.g., an array, a list, or a queue) to represent the page frames in memory.
    *   For LRU, you'll need to track usage history (e.g., timestamps or a stack).

5.  **Output Results:**
    *   Print the reference string.
    *   Print the number of page faults for each algorithm.

**Example (Conceptual Python):**

```python
import random

def generate_reference_string(length):
  """Generates a random reference string of specified length."""
  return [random.randint(0, 9) for _ in range(length)]

def fifo(reference_string, num_frames):
  """Simulates FIFO page replacement."""
  frames = []  # List representing page frames
  page_faults = 0
  for page in reference_string:
    if page not in frames:
      page_faults += 1
      if len(frames) < num_frames:
        frames.append(page)
      else:
        frames.pop(0)  # Remove the oldest page
        frames.append(page)
  return page_faults


def lru(reference_string, num_frames):
  """Simulates LRU page replacement."""
  frames = []
  page_faults = 0
  for page in reference_string:
    if page not in frames:
      page_faults += 1
      if len(frames) < num_frames:
        frames.append(page)
      else:
        frames.pop(0) # LRU Implementation.  Simplistic - could track timestamps for true LRU
        frames.append(page)

    else:
      frames.remove(page) #move page to the end to represent recently used.
      frames.append(page)
  return page_faults


def optimal(reference_string, num_frames):
  """Simulates OPTIMAL page replacement (requires knowledge of the future)."""
  frames = []
  page_faults = 0

  def find_farthest(current_index, frame_pages):
      farthest = -1
      farthest_index = -1

      for page in frame_pages:
          try:
              index_in_future = reference_string[current_index:].index(page)
          except ValueError:
              # page isn't used in the future at all
              return page
          if index_in_future > farthest_index:
              farthest_index = index_in_future
              farthest = page
      return farthest

  for i, page in enumerate(reference_string):
      if page not in frames:
          page_faults += 1
          if len(frames) < num_frames:
              frames.append(page)
          else:
              # Page replacement needed
              victim_page = find_farthest(i, frames)

              if victim_page is not None:
                  frames.remove(victim_page)
                  frames.append(page)

  return page_faults

# Example Usage (replace with command-line argument parsing)
reference_string_length = 20
num_page_frames = 3

reference_string = generate_reference_string(reference_string_length)

fifo_faults = fifo(reference_string, num_page_frames)
lru_faults = lru(reference_string, num_page_frames)
optimal_faults = optimal(reference_string, num_page_frames)

print(f"Reference String: {reference_string}")
print(f"FIFO Page Faults: {fifo_faults}")
print(f"LRU Page Faults: {lru_faults}")
print(f"Optimal Page Faults: {optimal_faults}")
```

**Important Considerations for Implementation:**

*   **Data Structures:** Carefully choose the data structures to represent page frames and track usage history.  For LRU, consider using linked lists or stacks for efficient updates. For simplicity, the LRU and FIFO are implemented using lists with basic removal and addition.
*   **Efficiency:** Strive for efficient implementations, especially for LRU. Naive implementations can have high overhead.
*   **Debugging:** Thoroughly test your code with various reference strings and number of page frames.

### 4. Impact of Number of Page Frames

The number of page frames available to a process significantly affects the number of page faults.  Generally:

*   **More page frames:** Fewer page faults (up to a certain point). Having more space in memory means fewer pages need to be swapped in and out.
*   **Fewer page frames:** More page faults. Limited memory leads to more frequent page replacements.

However, as mentioned earlier, FIFO can exhibit Belady's Anomaly, where increasing the number of page frames *increases* page faults in some specific cases.  LRU and Optimal algorithms do *not* suffer from Belady's Anomaly.

### 5. Practice Questions / Exercises

1.  **Given a reference string `7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1` and 3 page frames, calculate the number of page faults for FIFO, LRU, and Optimal algorithms.**  (Hint: Work through the algorithms step-by-step, as shown in the examples above.)

    *   **FIFO:** 15
    *   **LRU:** 12
    *   **Optimal:** 9

2.  **Explain Belady's Anomaly and which of the three algorithms discussed is susceptible to it.**

    *   Belady's Anomaly is a phenomenon where increasing the number of page frames can lead to an increase in the number of page faults for certain page replacement algorithms.  FIFO is susceptible to Belady's Anomaly.

3.  **What is the primary disadvantage of the Optimal page replacement algorithm in a real-world operating system?**

    *   The Optimal algorithm requires knowing the future reference string, which is impossible in a real-time operating system.

4.  **How does LRU attempt to improve upon FIFO's performance?**

    *   LRU considers page usage history by replacing the least recently used page. This is based on the principle of locality of reference, which suggests that recently used pages are more likely to be used again soon. FIFO simply replaces the oldest page, regardless of its recent usage.

5.  **Write a function (in pseudocode or a programming language) that, given a list of pages in memory (page frames) and a new page to reference, updates the list according to the LRU policy.**

   ```python
   def update_lru(frames, page):
       """
       Updates the frames list according to the LRU policy.

       Args:
           frames: A list of pages currently in memory (page frames).
           page: The page that was just referenced.
       """
       if page in frames:
           frames.remove(page)  # Remove the page from its current position
       frames.append(page)    # Add it to the end (most recently used)
       return frames
   ```

### 6. Important Points to Remember

*   Page replacement algorithms are crucial for virtual memory management.
*   The goal of a page replacement algorithm is to minimize page faults.
*   FIFO is simple to implement but can suffer from Belady's Anomaly.
*   LRU generally performs better than FIFO but is more complex to implement.
*   Optimal is a theoretical benchmark that provides a lower bound on page faults.
*   The number of page frames affects the performance of page replacement algorithms.
*   The choice of page replacement algorithm depends on the specific system requirements and trade-offs between performance and complexity.
*   Understand the concept of locality of reference and how it relates to the effectiveness of LRU.
