---
title: "Sampling techniques and sample size"
subject: "URBAN TRANSPORTATION PLANNING"
module: "Module 2: Transportation planning process "
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba81191c"
status: "completed"
scrapedAt: "2026-05-20T19:04:46.214Z"
---
# Urban Transportation Planning: Module 2 - Transportation Planning Process

## Topic: Sampling Techniques and Sample Size

---

### 1. Introduction to Sampling in Transportation Planning

*   **Why Sample?**
    *   In transportation planning, it's often impractical or impossible to collect data from every single individual or vehicle (a **census**).
    *   Sampling allows us to gather representative data from a smaller subset of the population to infer characteristics about the entire population.
    *   **Benefits:** Cost-effectiveness, time efficiency, reduced data management burden, improved accuracy (if done correctly, avoiding issues associated with large-scale data collection).

*   **Key Concepts:**
    *   **Population:** The entire group of individuals, households, vehicles, trips, etc., that we are interested in studying.
        *   *Example:* All commuters in City X, all vehicles registered in Region Y, all transit trips originating from Zone Z.
    *   **Sample:** A subset of the population selected for data collection.
    *   **Sampling Frame:** A list or map of all the units in the population from which the sample will be drawn. A good sampling frame is crucial for obtaining a representative sample.
        *   *Example:* A list of all registered vehicle owners, a map showing all households in a city, a list of all transit stops.
    *   **Sampling Unit:** The individual element or group of elements selected from the population.
        *   *Example:* A household, an individual, a vehicle, a specific trip.

---

### 2. Types of Sampling Techniques

Sampling techniques can be broadly categorized into **Probability Sampling** (where each unit has a known, non-zero chance of selection) and **Non-Probability Sampling** (where the selection is not random). Probability sampling is generally preferred for its ability to provide statistically valid inferences.

#### 2.1. Probability Sampling Techniques

*   **Simple Random Sampling (SRS)**
    *   **Definition:** Every unit in the population has an equal and independent chance of being selected.
    *   **How it works:** Assign a unique number to each unit in the sampling frame and use a random number generator to select units.
    *   **Advantages:** Conceptually simple, statistically unbiased.
    *   **Disadvantages:** Requires a complete and accurate sampling frame, can be inefficient if the population is geographically dispersed or if the characteristic of interest is rare.
    *   *Example:* Randomly selecting 100 household addresses from a city directory to conduct a travel diary survey.

*   **Systematic Sampling**
    *   **Definition:** Units are selected from the sampling frame at regular intervals.
    *   **How it works:**
        1.  Determine the sampling interval (k) = Population size (N) / Sample size (n).
        2.  Randomly select a starting point between 1 and k.
        3.  Select every k-th unit thereafter.
    *   **Advantages:** Easier to implement than SRS, often provides a good approximation of SRS, can be more efficient for geographically dispersed populations.
    *   **Disadvantages:** Can be biased if there is a hidden periodicity in the sampling frame that aligns with the sampling interval.
    *   *Example:* Selecting every 50th vehicle passing a particular traffic counting station to record its license plate and vehicle type.

*   **Stratified Sampling**
    *   **Definition:** The population is divided into mutually exclusive subgroups (strata) based on certain characteristics, and then SRS or systematic sampling is applied within each stratum.
    *   **How it works:**
        1.  Identify relevant strata (e.g., income levels, age groups, geographic zones, modes of transport).
        2.  Determine the sample size for each stratum (proportionately or disproportionately).
        3.  Apply SRS or systematic sampling within each stratum.
    *   **Advantages:** Ensures representation of key subgroups, can lead to more precise estimates if strata are homogeneous within and heterogeneous between.
    *   **Disadvantages:** Requires knowledge of strata characteristics, can be more complex to implement.
    *   *Example:* Stratifying a city by income level (low, medium, high) and then randomly sampling households within each income bracket to understand travel behavior differences.

*   **Cluster Sampling**
    *   **Definition:** The population is divided into clusters (groups of units, often geographically defined), and then a random sample of clusters is selected. All units within the selected clusters are then surveyed.
    *   **How it works:**
        1.  Divide the population into clusters (e.g., census tracts, neighborhoods, bus routes).
        2.  Randomly select a sample of clusters.
        3.  Collect data from all units (or a sample of units) within the selected clusters.
    *   **Advantages:** Can be more cost-effective and practical for geographically dispersed populations, especially when a sampling frame of individual units is unavailable or costly to obtain.
    *   **Disadvantages:** Can result in less precise estimates compared to SRS or stratified sampling due to the potential for high correlation between units within a cluster (intraclass correlation).
    *   *Example:* Selecting a random sample of 10 neighborhoods in a city and then surveying all households within those 10 neighborhoods to understand local accessibility issues.

*   **Multi-Stage Sampling**
    *   **Definition:** A combination of several sampling techniques applied in stages.
    *   **How it works:**
        1.  **Stage 1:** Select primary sampling units (e.g., random selection of cities within a state).
        2.  **Stage 2:** Within selected cities, select secondary sampling units (e.g., random selection of census tracts).
        3.  **Stage 3:** Within selected census tracts, select tertiary sampling units (e.g., random selection of households).
    *   **Advantages:** Highly flexible, can be adapted to complex populations and varying data collection resources.
    *   **Disadvantages:** Can be complex to design and analyze, potential for accumulating sampling errors at each stage.
    *   *Example:* A national travel survey might involve randomly selecting states, then randomly selecting counties within those states, then randomly selecting census blocks within those counties, and finally randomly selecting households within those census blocks.

#### 2.2. Non-Probability Sampling Techniques

*   **Convenience Sampling**
    *   **Definition:** Units are selected based on their easy availability and accessibility.
    *   **How it works:** Surveying people at a convenient location and time (e.g., at a shopping mall, on a particular bus route at a specific time).
    *   **Advantages:** Quick and inexpensive.
    *   **Disadvantages:** Highly prone to bias, results cannot be generalized to the broader population.
    *   *Example:* Asking people exiting a train station about their commute without any systematic selection.

*   **Quota Sampling**
    *   **Definition:** The researcher sets quotas for the number of units to be sampled from specific subgroups, similar to stratified sampling, but the selection within the subgroups is not random.
    *   **How it works:** Interviewers are instructed to obtain a certain number of interviews from individuals in specific demographic categories (e.g., 50 males, 50 females, with specific age and income distributions).
    *   **Advantages:** Ensures some representation of key subgroups.
    *   **Disadvantages:** Prone to selection bias by the interviewer, results are not statistically generalizable.
    *   *Example:* Interviewers are asked to survey 20 commuters in each of the following categories: male, 18-30; male, 31-50; female, 18-30; female, 31-50.

*   **Purposive (Judgmental) Sampling**
    *   **Definition:** The researcher uses their judgment to select units that they believe are most appropriate or representative for the study.
    *   **How it works:** Selecting experts in transportation planning or individuals known to have specific travel behaviors.
    *   **Advantages:** Useful for exploratory research or when targeting specific expertise.
    *   **Disadvantages:** Highly subjective and prone to researcher bias, not generalizable.
    *   *Example:* Interviewing a panel of urban planners to gather opinions on the effectiveness of a new transit policy.

*   **Snowball Sampling**
    *   **Definition:** Initial participants are asked to refer other potential participants who meet the study criteria.
    *   **How it works:** Useful for reaching hard-to-reach populations.
    *   **Advantages:** Effective for studying hidden or specialized populations.
    *   **Disadvantages:** Can be biased, as participants may refer people similar to themselves.
    *   *Example:* Identifying a few individuals who frequently use paratransit services and asking them to refer other paratransit users.

---

### 3. Determining Sample Size

The sample size is crucial for ensuring that the collected data is reliable and that the inferences drawn are statistically valid. Several factors influence the determination of an appropriate sample size.

*   **Key Factors Influencing Sample Size:**
    *   **Margin of Error (E):** The acceptable range of difference between the sample statistic and the true population parameter. Smaller margins of error require larger sample sizes.
        *   *Example:* If we want to be confident that our estimate of average commute time is within ±5 minutes of the true average, the margin of error is 5 minutes.
    *   **Confidence Level (1 - α):** The probability that the true population parameter falls within the confidence interval. Common confidence levels are 90%, 95%, and 99%. Higher confidence levels require larger sample sizes.
        *   *Example:* A 95% confidence level means that if we were to repeat the sampling process many times, 95% of the resulting confidence intervals would contain the true population parameter.
    *   **Population Variability (σ² or p):** The degree of dispersion or heterogeneity in the population. Higher variability requires larger sample sizes. This is often estimated from previous studies or pilot tests.
        *   For continuous variables (e.g., commute time), we use the population standard deviation (σ).
        *   For proportions (e.g., percentage of people using public transport), we use the population proportion (p). If p is unknown, we use p = 0.5, as this yields the largest possible sample size.
    *   **Population Size (N):** For very large populations, the population size has a diminishing effect on the required sample size. However, for smaller populations, a correction factor may be applied.
    *   **Statistical Power:** The probability of detecting a statistically significant effect if one truly exists. Higher power requires larger sample sizes.

*   **Formulas for Sample Size Determination:**

    *   **For Estimating a Mean (Continuous Variable):**
        $n = (Z^2 * σ^2) / E^2$
        Where:
        *   $n$ = required sample size
        *   $Z$ = Z-score corresponding to the desired confidence level (e.g., 1.96 for 95% confidence)
        *   $σ$ = estimated population standard deviation
        *   $E$ = desired margin of error

        **Correction for Finite Population (if n/N > 0.05):**
        $n_{adj} = n / (1 + (n-1)/N)$

    *   **For Estimating a Proportion:**
        $n = (Z^2 * p * (1-p)) / E^2$
        Where:
        *   $n$ = required sample size
        *   $Z$ = Z-score corresponding to the desired confidence level
        *   $p$ = estimated population proportion (or 0.5 if unknown)
        *   $E$ = desired margin of error

        **Correction for Finite Population (if n/N > 0.05):**
        $n_{adj} = n / (1 + (n-1)/N)$

*   **Practical Considerations:**
    *   **Non-response rate:** Anticipate a certain percentage of respondents not participating or providing incomplete data. The initial sample size should be adjusted upwards to account for this (e.g., if a 10% non-response rate is expected, increase the target sample size by 10%).
    *   **Data Analysis Plan:** The complexity of the planned statistical analysis can also influence sample size requirements (e.g., for sub-group analysis).
    *   **Budget and Time Constraints:** These are often the most limiting factors and may necessitate compromises on desired precision or confidence.

---

### 4. Importance of Representative Samples

*   **Generalizability:** A representative sample allows the findings from the sample to be generalized to the entire population with a known degree of confidence.
*   **Avoiding Bias:** Non-representative samples can lead to biased results, misinterpretations, and flawed policy decisions.
*   **Cost-Effectiveness:** While larger samples generally increase accuracy, an overly large or unrepresentative sample can be wasteful.

---

### 5. Practice Questions and Exercises

**Question 1:**
A transportation planner wants to estimate the average number of daily trips made by households in a city. They want to be 95% confident that their estimate is within 0.5 trips of the true average. Previous studies suggest the standard deviation of daily trips per household is approximately 3.0. What is the minimum sample size required for this study?

**Answer 1:**
*   Confidence Level = 95%, so Z = 1.96
*   Margin of Error (E) = 0.5 trips
*   Population Standard Deviation (σ) = 3.0 trips

Using the formula for estimating a mean:
$n = (Z^2 * σ^2) / E^2$
$n = (1.96^2 * 3.0^2) / 0.5^2$
$n = (3.8416 * 9) / 0.25$
$n = 34.5744 / 0.25$
$n = 138.2976$

Since we cannot have a fraction of a person, we round up.
**Required sample size (n) = 139 households.**

---

**Question 2:**
A survey aims to determine the proportion of public transport users on a specific bus route. The planner wants 90% confidence that the estimate is within ±3% of the true proportion. If the proportion of public transport users is unknown, what sample size is needed?

**Answer 2:**
*   Confidence Level = 90%, so Z = 1.645
*   Margin of Error (E) = 0.03 (3%)
*   Proportion (p) = 0.5 (since it's unknown, we use 0.5 for maximum sample size)

Using the formula for estimating a proportion:
$n = (Z^2 * p * (1-p)) / E^2$
$n = (1.645^2 * 0.5 * (1-0.5)) / 0.03^2$
$n = (2.706025 * 0.5 * 0.5) / 0.0009$
$n = (2.706025 * 0.25) / 0.0009$
$n = 0.67650625 / 0.0009$
$n = 751.6736$

Rounding up to the nearest whole number.
**Required sample size (n) = 752 bus passengers.**

---

**Question 3:**
Explain why stratified sampling might be a more efficient approach than simple random sampling when studying travel behavior across different income groups in a metropolitan area.

**Answer 3:**
Stratified sampling would be more efficient because:
1.  **Ensures Representation:** It guarantees that each income group (stratum) is represented in the sample, which is important because travel behavior often varies significantly by income.
2.  **Reduces Sampling Error:** If travel behavior is relatively similar *within* each income group but differs *between* income groups, stratification allows for more precise estimates for each group and for the overall population compared to SRS, which might over- or under-represent certain income groups by chance.
3.  **Targeted Analysis:** It facilitates comparisons of travel behavior between different income strata.

---

### 6. Important Points to Remember

*   **Sampling is a tool for inference:** The goal is to understand the population from a sample.
*   **Probability sampling methods are key for validity:** They allow for statistical analysis and generalization.
*   **A good sampling frame is essential:** It's the foundation for representative sampling.
*   **Sample size calculation is critical:** It balances accuracy, confidence, and resources.
*   **No single sampling technique is universally best:** The choice depends on the research objectives, population characteristics, and available resources.
*   **Always consider non-response:** Adjust your initial sample size to account for potential non-participants.
*   **Bias can creep in at multiple stages:** From frame construction to data collection and analysis. Careful planning is crucial to minimize bias.

---
