---
title: "Histogram"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 3: Tools and Techniques in TQM : Affinity diagram"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464176"
status: "completed"
scrapedAt: "2026-05-20T18:16:45.672Z"
---
# QUALITY ENGINEERING AND MANAGEMENT - Module 3: Tools and Techniques in TQM - Histogram

---

## 1. Introduction to Histograms

A histogram is a graphical representation of the distribution of numerical data. It is a type of bar graph in which the bars represent the frequency of data falling within specified intervals or "bins." Histograms are fundamental tools in Total Quality Management (TQM) for understanding the variation present in a process or dataset.

**Key Concepts & Definitions:**

*   **Data Distribution:** The pattern of frequencies of different values in a dataset.
*   **Frequency:** The number of times a particular value or range of values occurs in a dataset.
*   **Intervals (Bins):** Ranges of values into which the data is divided for plotting on a histogram. The width of these intervals is crucial for the clarity of the histogram.
*   **Class Boundaries:** The upper and lower limits of each interval.
*   **Midpoint:** The average of the upper and lower class boundaries for an interval.

**Learning Outcomes Addressed:**

*   Understand the purpose and application of histograms in TQM.
*   Construct and interpret histograms.
*   Identify potential process issues based on histogram shapes.

**Relevant Course Outcomes:**

*   **CO3: Implement different tools and techniques in TQM (Knowledge Level: K3)** - Histograms are a direct application of this outcome.
*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3)** - Histograms are a foundational statistical tool.

---

## 2. Purpose and Applications of Histograms in TQM

Histograms are invaluable in TQM for:

*   **Understanding Process Variation:** Visualizing the spread and central tendency of data, revealing how much a process varies.
*   **Identifying the Shape of Distribution:** Determining if the process is centered, skewed, has multiple peaks (multimodal), or is exhibiting unusual patterns.
*   **Spotting Potential Problems:** Deviations from an expected distribution can indicate issues like machine wear, operator inconsistency, or material variations.
*   **Assessing Process Capability:** By comparing the histogram to specifications, one can assess if the process is capable of meeting requirements.
*   **Monitoring Process Changes:** Tracking histograms over time can reveal the impact of process improvements or deteriorations.
*   **Communicating Data:** Providing a clear and easily understandable visual summary of a dataset.

**Examples:**

*   **Manufacturing:** Analyzing the diameter of manufactured parts to understand the variation and ensure it stays within tolerance.
*   **Service Industry:** Tracking customer waiting times to identify peak periods or bottlenecks.
*   **Healthcare:** Monitoring patient recovery times to assess the effectiveness of treatment protocols.

**Referenced from Textbooks:**

*   **Montgomery (Introduction to Statistical Quality Control):** Emphasizes histograms as a primary tool for visualizing data distribution and identifying patterns of variation. Montgomery (2001) highlights their role in exploratory data analysis.
*   **Besterfield et al. (Total Quality Management):** Describes histograms as a "Problem-Solving Tool" that helps in identifying the cause of defects by revealing the pattern of data.

---

## 3. Constructing a Histogram

The process of constructing a histogram involves several steps:

### Step 1: Collect and Organize Data

Gather the raw data related to the process being analyzed.

### Step 2: Determine the Range

Calculate the difference between the highest and lowest values in the dataset.
*   **Range = Maximum Value - Minimum Value**

### Step 3: Determine the Number of Intervals (Bins)

There are several methods to estimate the number of bins:

*   **Sturges' Rule:** $k = 1 + 3.322 \times \log_{10}(n)$, where $k$ is the number of intervals and $n$ is the number of data points.
*   **Square Root Rule:** $k \approx \sqrt{n}$
*   **Heuristic Approach:** Start with a reasonable number of bins (e.g., 5-15) and adjust based on clarity.

**Important Point:** The number of bins significantly affects the appearance of the histogram. Too few bins can obscure important details, while too many can make the histogram noisy and difficult to interpret.

### Step 4: Determine the Interval Width

Once the number of intervals ($k$) and the range are known, calculate the approximate width of each interval.
*   **Interval Width $\approx \frac{\text{Range}}{\text{Number of Intervals}}$**

Round the interval width to a convenient value (e.g., to one decimal place more than the data).

### Step 5: Define the Intervals (Bins)

Starting from a value slightly below the minimum data point, create contiguous intervals of the calculated width. Ensure that each data point falls into exactly one interval.

*   **Example:** If the minimum value is 10.2 and the interval width is 0.5, the first interval might start at 10.0 and go up to 10.5 (exclusive of 10.5). The next interval would be 10.5 to 11.0, and so on.

### Step 6: Tally the Data

Go through the collected data and count how many data points fall into each interval. This is the frequency for each bin.

### Step 7: Draw the Histogram

*   **X-axis:** Represents the intervals (bins) of the data. Label these with the interval boundaries or midpoints.
*   **Y-axis:** Represents the frequency (count) of data points within each interval. Label it "Frequency" or "Count."
*   **Bars:** Draw bars for each interval. The height of each bar corresponds to its frequency. The bars should be adjacent to each other, with no gaps, to represent continuous data.

**Referenced from Textbooks:**

*   **Mitra (Fundamentals of Quality Control and Improvement):** Provides a step-by-step guide to constructing histograms and discusses the importance of choosing appropriate interval sizes. Mitra (1998) also touches upon how histograms serve as a precursor to more advanced statistical analysis.
*   **Ramasamy (Total Quality Management):** Explains the process of histogram creation, emphasizing its role in problem identification and analysis.

---

## 4. Interpreting Histograms

The shape of a histogram provides valuable insights into the process. Common shapes and their interpretations include:

*   **Bell-Shaped (Normal Distribution):**
    *   **Shape:** Symmetric, unimodal (one peak).
    *   **Interpretation:** The process is likely stable, centered, and operating under statistical control with random variation.
    *   **Example:** Diameter of precision machined parts produced by a well-calibrated machine.

*   **Skewed Distribution:**
    *   **Shape:** Asymmetric, with a longer tail on one side.
        *   **Right-Skewed (Positive Skew):** Tail extends to the right. Most data is concentrated on the left.
            *   **Interpretation:** Potential cause could be a lower limit or a process that is approaching a natural or artificial boundary.
            *   **Example:** Income distribution, or defect rates (since you can't have negative defects).
        *   **Left-Skewed (Negative Skew):** Tail extends to the left. Most data is concentrated on the right.
            *   **Interpretation:** Potential cause could be an upper limit or a process that has been optimized to a point where further improvement is difficult.
            *   **Example:** Test scores where most students scored very high.

*   **Bimodal Distribution:**
    *   **Shape:** Two distinct peaks.
    *   **Interpretation:** Suggests the data comes from two different populations or processes. This could indicate:
        *   Two different machines producing parts.
        *   Two different shifts with different operating conditions.
        *   Mixture of good and defective parts.
    *   **Example:** Measuring the height of both men and women in a single sample.

*   **Uniform Distribution:**
    *   **Shape:** All intervals have roughly the same frequency.
    *   **Interpretation:** Suggests that the process output is random within a given range, with no discernible pattern or tendency. This is often desirable for certain types of sampling or testing.
    *   **Example:** Random number generator output.

*   **Outliers:**
    *   **Shape:** Isolated bars far from the main body of the data.
    *   **Interpretation:** Indicate unusual data points that may be due to errors in measurement, data entry, or unique process events. These should be investigated.

**Referenced from Textbooks:**

*   **Juran & Gryna (Quality Planning and Analysis):** Discusses how histograms help in diagnosing process problems by visually representing data patterns. They highlight the importance of recognizing deviations from expected distributions.
*   **Crosby (Quality is Free):** While Crosby's focus is more on management commitment and prevention, the tools he advocates for (like data analysis) would certainly benefit from visual aids like histograms to understand where quality issues lie.

**Learning Outcomes Addressed:**

*   Interpret the shape of a histogram to understand process behavior.
*   Identify potential causes of variation based on histogram patterns.

**Relevant Course Outcomes:**

*   **CO3: Implement different tools and techniques in TQM (Knowledge Level: K3)** - Interpretation is a key part of implementation.
*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3)** - Understanding distribution shapes is crucial for applying statistical process control.

---

## 5. Histograms vs. Other Graphical Tools (e.g., Affinity Diagram)

It's important to distinguish the histogram from other TQM tools.

*   **Histogram:** Used for visualizing the distribution of **numerical data**. It answers "What is the frequency of occurrence for different values of this measurable characteristic?"
*   **Affinity Diagram:** Used for organizing and grouping **qualitative or idea-based data** (e.g., brainstormed ideas, reasons for a problem). It answers "What are the key themes or categories emerging from this collection of ideas?"

**Key Difference:** Histograms deal with **quantitative (measurable) data** and its distribution, while affinity diagrams deal with **qualitative (categorical) data** and its relationships.

**Learning Outcomes Addressed:**

*   Differentiate the application of histograms from other TQM tools.

**Relevant Course Outcomes:**

*   **CO3: Implement different tools and techniques in TQM (Knowledge Level: K3)** - Understanding tool applicability is vital for implementation.

---

## 6. Practice Questions and Exercises

**Question 1:**
A quality engineer collected the following data on the length of a manufactured component (in cm):
10.2, 10.5, 10.1, 10.3, 10.6, 10.4, 10.2, 10.5, 10.7, 10.3, 10.4, 10.1, 10.5, 10.6, 10.3, 10.2, 10.8, 10.4, 10.5, 10.1

a) Calculate the range of the data.
b) Estimate the number of intervals using the square root rule.
c) Determine an appropriate interval width.
d) Construct a histogram for this data.

**Answer 1:**

a) **Range:**
   Maximum Value = 10.8 cm
   Minimum Value = 10.1 cm
   Range = 10.8 - 10.1 = 0.7 cm

b) **Number of Intervals (Square Root Rule):**
   Number of data points (n) = 20
   Number of intervals (k) $\approx \sqrt{20} \approx 4.47$
   Let's choose 5 intervals.

c) **Interval Width:**
   Interval Width $\approx \frac{\text{Range}}{\text{Number of Intervals}} = \frac{0.7}{5} = 0.14$ cm
   Let's round up to 0.2 cm for easier binning, or use 0.15 cm. Let's use 0.15 cm for better distribution.

d) **Histogram Construction (using 5 intervals, starting from 10.0, width 0.15):**

   *   **Intervals:**
      *   10.00 - 10.15 (exclusive of 10.15)
      *   10.15 - 10.30 (exclusive of 10.30)
      *   10.30 - 10.45 (exclusive of 10.45)
      *   10.45 - 10.60 (exclusive of 10.60)
      *   10.60 - 10.75 (exclusive of 10.75)
      *   10.75 - 10.90 (inclusive of 10.90 if it were the max)

   *   **Tallying:**
      *   10.0 - 10.15: 10.02, 10.1 (Frequency = 2)
      *   10.15 - 10.30: 10.2, 10.1, 10.2, 10.2 (Frequency = 4)
      *   10.30 - 10.45: 10.3, 10.4, 10.3, 10.4, 10.3, 10.4 (Frequency = 6)
      *   10.45 - 10.60: 10.5, 10.5, 10.5, 10.4 (Frequency = 4)  *Correction: 10.45 - 10.60 should include 10.5, 10.5, 10.5. And 10.4 was already in the previous bin. Let's re-evaluate the bins and tally carefully.*

   *   **Revised approach for clarity and accurate binning:**
      Let's use a simpler approach with intervals that clearly define boundaries.
      Range = 0.7. Number of data points = 20.
      Let's try 6 intervals to have a better spread.
      Interval Width $\approx 0.7 / 6 \approx 0.116$. Let's use 0.15.
      Starting point: 10.0

      Bins:
      1. 10.00 - 10.15 (exclusive of 10.15)
      2. 10.15 - 10.30 (exclusive of 10.30)
      3. 10.30 - 10.45 (exclusive of 10.45)
      4. 10.45 - 10.60 (exclusive of 10.60)
      5. 10.60 - 10.75 (exclusive of 10.75)
      6. 10.75 - 10.90 (inclusive of 10.90)

      Data: 10.2, 10.5, 10.1, 10.3, 10.6, 10.4, 10.2, 10.5, 10.7, 10.3, 10.4, 10.1, 10.5, 10.6, 10.3, 10.2, 10.8, 10.4, 10.5, 10.1

      Tally:
      1. 10.00 - 10.15: 10.1, 10.1, 10.1 (Freq = 3)
      2. 10.15 - 10.30: 10.2, 10.2, 10.2 (Freq = 3)
      3. 10.30 - 10.45: 10.3, 10.3, 10.3, 10.4, 10.4, 10.4 (Freq = 6)
      4. 10.45 - 10.60: 10.5, 10.5, 10.5, 10.5 (Freq = 4)
      5. 10.60 - 10.75: 10.6, 10.6, 10.7 (Freq = 3)
      6. 10.75 - 10.90: 10.8 (Freq = 1)

      **Histogram Sketch:**
      (X-axis: Intervals 10.00, 10.15, 10.30, 10.45, 10.60, 10.75, 10.90)
      (Y-axis: Frequency 0, 1, 2, 3, 4, 5, 6)

      Bar heights:
      10.00-10.15: 3
      10.15-10.30: 3
      10.30-10.45: 6
      10.45-10.60: 4
      10.60-10.75: 3
      10.75-10.90: 1

      **Interpretation:** The histogram appears roughly bell-shaped but slightly skewed to the right, with the highest frequency in the 10.30-10.45 range. The presence of a bar at 10.75-10.90 (specifically 10.8) suggests a potential outlier or a tendency for some components to be slightly longer.

**Question 2:**
What kind of process issue might a bimodal histogram suggest?

**Answer 2:**
A bimodal histogram typically suggests that the data comes from two distinct populations or processes that are being measured together. This could indicate issues such as:
*   The use of two different machines to produce the parts, each with its own average output.
*   Two different operators producing the parts with varying levels of skill or method.
*   A mixture of conforming and non-conforming products being measured together.
*   A change in process conditions partway through data collection.

**Question 3:**
Which TQM tool is best suited for organizing brainstormed ideas about improving customer satisfaction?

**Answer 3:**
An **Affinity Diagram** is best suited for organizing brainstormed ideas about improving customer satisfaction. It helps to group the qualitative ideas into logical categories. A histogram would be used if you were collecting numerical data, such as customer wait times or satisfaction scores.

---

## 7. Important Points to Remember

*   Histograms are for **numerical data** and show **distribution**.
*   The **choice of interval width** and **number of intervals** is critical for accurate interpretation.
*   The **shape of the histogram** provides clues about the underlying process behavior and potential problems.
*   Histograms help in **visualizing variation**, which is a core concept in TQM.
*   They serve as a basis for **process capability analysis** and **statistical process control (SPC)**.
*   Histograms are distinct from affinity diagrams, which are for qualitative data.

---

## 8. Alignment with Course Outcomes

*   **CO1: Develop knowledge of quality management and contributions of quality gurus.** (K2) - Histograms are foundational tools in quality management, understood through the lens of TQM principles.
*   **CO2: Identify various human dimensions of TQM.** (K2) - While not directly about human dimensions, understanding process variation (revealed by histograms) is influenced by human factors (operator consistency, training), making it indirectly relevant.
*   **CO3: Implement different tools and techniques in TQM.** (K3) - This module directly addresses the implementation of histograms as a TQM tool.
*   **CO4: Implement different statistical quality control techniques.** (K3) - Histograms are a primary tool for statistical quality control, aiding in the identification of process states and variations.
*   **CO5: Demonstrate knowledge of the underlying principles of strategic quality management.** (K2) - Understanding process variation and capability (through histograms) is a key principle in managing quality strategically.

---

This concludes the study notes for Histograms in Module 3. Remember to refer to the provided textbooks for more in-depth coverage and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
