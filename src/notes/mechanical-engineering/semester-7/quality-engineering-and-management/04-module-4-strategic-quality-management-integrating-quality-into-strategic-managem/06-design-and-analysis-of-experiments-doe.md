---
title: "Design and Analysis of Experiments (DOE)"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 4: Strategic Quality Management : Integrating quality into strategic management"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464186"
status: "completed"
scrapedAt: "2026-05-20T18:16:56.175Z"
---
# Quality Engineering and Management - Module 4: Strategic Quality Management
## Topic: Design and Analysis of Experiments (DOE)

### Introduction

Design of Experiments (DOE) is a powerful statistical methodology used to systematically study the relationship between factors (variables) that influence a process or system and the outcomes (responses) of that process. In the context of Strategic Quality Management, DOE is crucial for optimizing processes, identifying root causes of variation, and improving product or service quality efficiently and effectively. It helps in moving beyond trial-and-error by providing a structured approach to experimentation, leading to more robust and reliable conclusions.

This topic will cover the fundamental principles of DOE, its applications in quality improvement, different experimental designs, and the analysis of experimental data.

---

### 1. Understanding the Need for DOE in Strategic Quality Management (CO5: K2)

*   **Limitations of Traditional "One-Factor-at-a-Time" (OFAT) Approach:**
    *   Inefficient: Requires a large number of trials.
    *   Misses Interactions: Fails to detect interactions between factors, where the effect of one factor depends on the level of another. This is a critical limitation for optimizing complex systems.
    *   Less Cost-Effective: Often involves more resources (time, materials, personnel) than necessary.

*   **Benefits of DOE:**
    *   **Efficiency:** Identifies the most influential factors and their optimal levels with fewer experiments.
    *   **Interaction Detection:** Uncovers how factors work together, crucial for understanding complex systems and achieving synergistic improvements.
    *   **Robustness:** Leads to processes that are less sensitive to variations in uncontrollable factors (noise factors).
    *   **Cost Reduction:** Optimizes resource utilization and minimizes waste.
    *   **Process Improvement:** Facilitates targeted improvements for enhanced quality, yield, and performance.
    *   **Knowledge Generation:** Provides a deeper understanding of process behavior.
    *   **Competitive Advantage:** Enables organizations to develop superior products and processes.

*   **Connection to Strategic Quality Management:**
    *   DOE aligns with the proactive and systematic approach of strategic quality management by enabling organizations to:
        *   **Identify critical success factors:** Understanding which process variables significantly impact desired outcomes.
        *   **Optimize processes for competitive advantage:** Developing robust processes that deliver higher quality at lower costs.
        *   **Drive continuous improvement:** Providing a data-driven framework for ongoing optimization.
        *   **Support fact-based decision-making:** Replacing guesswork with empirical evidence.

*   **Important Point to Remember:** DOE is not just about finding *what* causes an effect, but *how* different factors interact to produce an effect.

---

### 2. Key Concepts and Definitions in DOE

*   **Experiment:** A planned sequence of operations or tests carried out to discover, demonstrate, or confirm a fact or principle.
*   **Factors (Independent Variables):** The input variables that are systematically manipulated or changed by the experimenter to observe their effect on the response.
    *   *Example:* Temperature, pressure, concentration of a chemical, speed of a machine, operator skill level.
*   **Levels:** The specific settings or values of a factor that are included in the experiment.
    *   *Example:* For a temperature factor, levels could be 100°C, 120°C, 140°C.
*   **Response (Dependent Variable):** The output variable that is measured to assess the effect of the factors.
    *   *Example:* Product strength, defect rate, cycle time, customer satisfaction score.
*   **Treatment:** A specific combination of factor levels.
    *   *Example:* If we have two factors, Factor A at Level 1 and Factor B at Level 2, this combination (A1B2) is a treatment.
*   **Experimental Run/Trial:** A single observation or measurement taken for a specific treatment.
*   **Replication:** Repeating an experimental run under the same conditions.
    *   *Benefits:*
        *   Estimates experimental error (variability not due to factors).
        *   Increases the reliability of the results.
        *   Allows for detection of smaller effects.
*   **Randomization:** The process of assigning experimental units to treatments randomly.
    *   *Benefits:*
        *   Minimizes the bias introduced by lurking or uncontrolled variables.
        *   Ensures that any observed differences are due to the factors studied and not to confounding effects.
*   **Blocking:** A technique used to reduce variability within experimental units by grouping them into homogeneous blocks. Factors whose effects are to be studied are then tested within each block.
    *   *Example:* If an experiment is conducted over several days, and there's a concern that the day might affect the response, experiments can be blocked by day.
*   **Interaction:** The effect of one factor on the response depends on the level of another factor. This is a crucial concept in DOE.
    *   *Example:* The effect of increasing temperature on a chemical reaction rate might be large at a high concentration of a catalyst but small at a low concentration.

---

### 3. Types of Experimental Designs (CO3: K3)

The choice of experimental design depends on the objectives of the study, the number of factors, and the resources available.

#### 3.1. Screening Designs

*   **Purpose:** To identify the most significant factors from a larger set of potential factors that affect the response. These are often used in the early stages of process understanding.
*   **Characteristics:** Use few experimental runs, often with only two levels for each factor.
*   **Examples:**
    *   **Full Factorial Designs (with two levels):** Test all possible combinations of factor levels. For 'k' factors at 2 levels each, there are $2^k$ runs.
        *   *Example:* A $2^3$ design involves 3 factors (A, B, C) at 2 levels each (low/-, high/+), resulting in 8 runs (e.g., ---, +--, -+-, ++-, --+, +-+-, -++, +++).
    *   **Fractional Factorial Designs:** A carefully selected subset of the full factorial design. They are used when the number of factors is large, making a full factorial design impractical.
        *   *Benefits:* Significantly reduces the number of runs.
        *   *Drawbacks:* Some effects (main effects and interactions) are confounded or aliased with each other.
        *   *Example:* A $2^{k-p}$ design, where 'p' is the fraction. A $2^{5-1}$ design (a half-fraction of a $2^5$) reduces 32 runs to 16.
    *   **Plackett-Burman Designs:** Efficient designs for screening a large number of factors. They are highly efficient for estimating main effects but confound them with interactions.

*   **Reference:** Montgomery (6th Edition) provides extensive coverage of these designs.

#### 3.2. Optimization Designs (Response Surface Methodology - RSM)

*   **Purpose:** To optimize the response by finding the best combination of factor levels. These designs are used after key factors have been identified.
*   **Characteristics:** Typically use three or more levels for factors and are designed to fit a mathematical model (often quadratic) to the response surface.
*   **Examples:**
    *   **Central Composite Designs (CCD):**
        *   *Structure:* Consists of a full or fractional factorial design, axial points (star points) at levels beyond the factorial points, and center points.
        *   *Benefits:* Allows estimation of quadratic effects (curvature) and interactions, enabling the fitting of a second-order polynomial model.
        *   *Types:* Face-centered, Rotatable, Orthogonal.
    *   **Box-Behnken Designs (BBD):**
        *   *Structure:* A spherical design that does not include points at the extremes of the experimental region.
        *   *Benefits:* Requires fewer runs than a comparable CCD, and avoids extreme factor level combinations which might be unrealistic or lead to process failure.

*   **Reference:** Besterfield et al. (Fifth Edition) and Subburaj Ramasamy discuss optimizing processes using experimental techniques.

#### 3.3. Mixture Designs

*   **Purpose:** Used when the response depends on the proportions of components in a mixture, rather than the absolute amounts. The sum of the proportions of the components is constrained (e.g., to 100%).
*   **Examples:**
    *   **Simplex-Lattice Designs:**
    *   **Simplex-Centroid Designs:**
    *   **Screening Mixture Designs:**

*   **Reference:** Juran & Gryna (Third Edition) implicitly supports optimizing formulations through systematic analysis, which mixture designs facilitate.

---

### 4. Steps in Designing and Analyzing Experiments

This structured approach ensures that experiments are conducted efficiently and that the results are meaningful and actionable.

1.  **Define the Problem/Objective:**
    *   Clearly state what needs to be achieved (e.g., reduce defect rate, increase product strength, optimize a process parameter).
    *   Identify the response variables.
    *   *Example:* Objective: To maximize the yield of a chemical process. Response: Product yield (%).

2.  **Identify Factors and Their Levels:**
    *   Brainstorm all potential factors that might influence the response.
    *   Use knowledge of the process, brainstorming sessions, and literature review.
    *   Select key factors to study based on preliminary analysis or importance.
    *   Determine the relevant levels (usually low and high for screening designs) for each factor.
    *   *Example:* Factors: Temperature, Pressure, Catalyst Concentration. Levels: Low/High for each.

3.  **Choose the Experimental Design:**
    *   Select a design type appropriate for the objectives, number of factors, and desired outcomes (screening, optimization, etc.).
    *   Consider the trade-offs between design complexity, number of runs, and the ability to detect effects and interactions.
    *   *Example:* If 5 factors need screening, a $2^{5-1}$ fractional factorial design might be chosen. If optimizing a process with 2 key factors, a Central Composite Design could be used.

4.  **Perform the Experiment:**
    *   Execute the experimental runs according to the chosen design.
    *   **Crucially, employ randomization and replication.**
    *   Collect data accurately and consistently.
    *   *Example:* Run the 16 experiments from the $2^{5-1}$ design, randomly assigning the order of runs and repeating each run twice (replication).

5.  **Analyze the Data:**
    *   Use statistical techniques to analyze the collected data.
    *   **Key Analysis Techniques:**
        *   **ANOVA (Analysis of Variance):** To determine which factors and interactions have a statistically significant effect on the response.
        *   **Effect Plots (Main Effect Plots, Interaction Plots):** Visual tools to understand the magnitude and direction of factor effects and interactions.
        *   **Pareto Charts of Effects:** To prioritize significant effects.
        *   **Residual Analysis:** To check the validity of the model assumptions (normality, constant variance, independence of errors).
        *   **Regression Analysis:** To build a predictive model of the response based on the significant factors.
    *   *Example:* Use ANOVA to test the significance of temperature, pressure, and their interaction on the product yield.

6.  **Interpret the Results and Draw Conclusions:**
    *   Based on the statistical analysis, identify the most significant factors and their optimal levels.
    *   Determine if interactions are present and understand their implications.
    *   *Example:* Conclude that increasing temperature and catalyst concentration significantly increases yield, and there is a positive interaction between them.

7.  **Implement and Verify Findings:**
    *   Apply the optimized settings to the actual process.
    *   Conduct confirmation runs to verify the improvements achieved.
    *   Document the findings and use them for continuous improvement.
    *   *Example:* Implement the experiment's recommended optimal settings for temperature and catalyst concentration and measure the resulting yield.

*   **Reference:** Montgomery (6th Edition) extensively details these steps, and Besterfield et al. emphasize practical implementation in TQM.

---

### 5. Statistical Analysis of DOE Data

*   **Analysis of Variance (ANOVA):**
    *   ANOVA is a statistical method used to partition the total variation in the response into components attributable to different sources (factors, interactions, and error).
    *   It uses F-tests to determine if the variation due to a factor or interaction is statistically significant compared to the experimental error.
    *   *Key output:* ANOVA table showing sources of variation, degrees of freedom, sum of squares, mean square, F-statistic, and p-value.
    *   *Example:* A significant F-value for "Temperature" in the ANOVA table indicates that temperature has a significant effect on the response.

*   **Visual Tools:**
    *   **Main Effect Plots:** Show the average effect of a factor across its levels. A steep slope indicates a strong effect.
    *   **Interaction Plots:** Show how the effect of one factor changes at different levels of another factor. Non-parallel lines suggest an interaction.
    *   **Pareto Charts:** Display the magnitude of effects (main effects and interactions) in descending order, allowing for quick identification of the most important factors.
    *   **Normal Probability Plot of Residuals:** Assesses the normality assumption of the errors. Points should fall roughly on a straight line.
    *   **Residuals vs. Fitted Values Plot:** Checks for constant variance (homoscedasticity) and potential outliers or patterns.

*   **Model Fitting:**
    *   For optimization designs (RSM), regression analysis is used to fit a mathematical model (e.g., a quadratic equation) that describes the relationship between factors and the response.
    *   The model is then used for prediction and finding optimal settings.

*   **Important Point to Remember:** Statistical significance does not always mean practical significance. The magnitude of the effect and the business context are also crucial for decision-making.

---

### 6. Examples of DOE in Quality Improvement

*   **Manufacturing:**
    *   Optimizing machining parameters (speed, feed rate, depth of cut) to improve surface finish and reduce tool wear (Mitra, Second Edition).
    *   Identifying factors affecting the strength of welded joints.
    *   Reducing defects in plastic molding by optimizing injection pressure, temperature, and cooling time.
    *   *Example (Besterfield et al.):* A company wanted to reduce the time it took to cure a product. They used a $2^3$ factorial design with factors: Oven Temperature, Curing Time, and Catalyst Level. They found that increasing temperature and catalyst level significantly reduced curing time, with a notable interaction between them.

*   **Service Industry:**
    *   Optimizing the setup of a call center to minimize customer wait times by varying the number of operators and script complexity.
    *   Improving the efficiency of document processing by studying factors like scanner speed and operator training.
    *   *Example (Subburaj Ramasamy):* A bank wanted to improve customer satisfaction with their ATM services. They designed an experiment to study the effect of ATM availability, transaction speed, and availability of cash on customer satisfaction.

*   **Product Development:**
    *   Optimizing the formulation of a new material to achieve desired properties.
    *   Identifying factors that influence the performance and reliability of electronic components.

*   **Reference:** Crosby (1979) advocates for proactive quality improvement, which DOE enables by identifying and fixing issues before they become costly problems.

---

### 7. Integrating DOE into Strategic Quality Management Frameworks

*   **Deming's PDCA Cycle:** DOE fits seamlessly into the "Do" and "Study" phases. Experiments are designed (Plan), executed (Do), results analyzed (Study), and improvements implemented (Act).
*   **Six Sigma:** DOE is a core tool in the DMAIC (Define, Measure, Analyze, Improve, Control) methodology, particularly in the Analyze and Improve phases. It's used to identify and quantify the impact of key process variables (X's) on critical-to-quality characteristics (Y's).
*   **Lean Six Sigma:** Enhances the efficiency and effectiveness of Lean tools by using DOE to optimize processes identified as waste-prone.
*   **Quality Function Deployment (QFD):** Information from DOE can inform QFD matrices, helping to identify critical design parameters that need to be optimized.
*   **Total Quality Management (TQM):** DOE supports the TQM philosophy by empowering teams to make data-driven decisions, fostering a culture of continuous improvement, and focusing on customer satisfaction through better processes.

*   **Important Point to Remember:** DOE is not an isolated statistical technique; it's a strategic enabler for achieving organizational quality goals.

---

### Practice Questions & Exercises

**Question 1 (CO5: K2):**
Why is the "one-factor-at-a-time" approach often considered inferior to Design of Experiments (DOE) for process improvement?

**Answer:** The OFAT approach is inefficient, requires more trials, and crucially, fails to detect interactions between factors. Interactions can significantly alter the effect of one factor on the response, and ignoring them can lead to sub-optimal solutions or even incorrect conclusions about process behavior.

**Question 2 (CO3: K3):**
You are designing an experiment to reduce the breaking strength of a specific plastic composite. You have identified three potential factors: curing temperature, curing time, and the percentage of filler material.
a) How many experimental runs would be required for a full factorial design with two levels for each factor?
b) If a full factorial design requires too many runs, what type of design could you use to screen these factors and identify the most important ones with fewer runs?

**Answer:**
a) With 3 factors and 2 levels each, a full factorial design requires $2^3 = 8$ runs.
b) A fractional factorial design (e.g., a $2^{3-1}$ half-fractional factorial design, requiring 4 runs) or a Plackett-Burman design could be used for screening.

**Question 3 (CO3: K3):**
In an experiment studying the effect of temperature and pressure on product yield, you observe the following data:

| Run | Temperature (°C) | Pressure (psi) | Yield (%) |
| :-- | :--------------- | :----------- | :-------- |
| 1   | 100              | 50           | 85        |
| 2   | 120              | 50           | 92        |
| 3   | 100              | 70           | 88        |
| 4   | 120              | 70           | 98        |

An interaction plot shows that increasing pressure from 50 to 70 psi increases yield by 7% when temperature is 100°C (85 to 88), but increases yield by 6% when temperature is 120°C (92 to 98).
a) Interpret the interaction between temperature and pressure based on this information.
b) If you were to conduct further optimization experiments, what region would you explore based on these initial findings?

**Answer:**
a) The interaction is weak to moderate. Increasing pressure has a similar positive effect on yield regardless of whether the temperature is low (100°C) or high (120°C). A stronger interaction would be indicated if the increase in yield due to pressure was significantly different at the two temperature levels. For example, if pressure increased yield by 10% at 100°C and only 2% at 120°C, that would be a strong interaction.
b) Based on the data, both increasing temperature and increasing pressure seem to increase yield. To optimize, one would explore higher levels of both temperature and pressure, potentially within a Central Composite Design or similar optimization design, to confirm if further increases lead to even higher yields or if a plateau or optimum is reached.

**Question 4 (CO5: K2):**
How can DOE contribute to a company's strategic goals in terms of cost reduction and competitive advantage?

**Answer:** By systematically identifying the most influential factors and their optimal settings, DOE helps organizations:
*   **Reduce waste:** Optimize material usage, energy consumption, and process time.
*   **Improve efficiency:** Streamline operations and increase throughput.
*   **Enhance product/service quality:** Reduce defects and variations, leading to higher customer satisfaction.
*   **Develop superior products/processes:** Create innovative solutions that outperform competitors.
This ultimately leads to lower operating costs and a stronger market position, contributing directly to strategic objectives.

**Question 5 (CO3: K3):**
What is the purpose of randomization in an experiment, and why is it important for valid conclusions?

**Answer:** Randomization is the process of assigning experimental units to treatments in a random order. It is crucial for ensuring that any observed differences in the response are due to the factors being studied and not due to uncontrolled external factors (lurking variables or systematic biases). By randomly assigning treatments, the influence of these unknown factors is distributed randomly across all treatments, minimizing their impact on the specific comparisons being made. This helps to ensure that the results are unbiased and that the conclusions drawn are valid.

---

### Important Points to Remember (Summary)

*   **DOE is proactive:** It's about understanding and controlling processes, not just reacting to problems.
*   **Interactions are key:** They reveal how factors work together, crucial for optimization.
*   **Randomization and Replication are essential:** For unbiased results and accurate error estimation.
*   **Design choice matters:** Select designs based on objectives (screening vs. optimization).
*   **Visual tools are powerful:** Main effect plots, interaction plots, and Pareto charts aid interpretation.
*   **ANOVA is central to analysis:** It determines statistical significance of effects.
*   **DOE supports all quality frameworks:** PDCA, Six Sigma, TQM, etc.
*   **Focus on actionable insights:** Translate statistical results into practical process improvements.

---

This concludes the study notes for Design and Analysis of Experiments (DOE) within Module 4 of Quality Engineering and Management. Remember to refer to the listed textbooks for deeper dives into specific designs and statistical methods.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
