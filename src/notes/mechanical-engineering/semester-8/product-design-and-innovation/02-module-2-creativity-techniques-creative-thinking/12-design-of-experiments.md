---
title: "Design of experiments"
subject: "PRODUCT DESIGN AND INNOVATION"
module: "Module 2: Creativity Techniques: Creative thinking"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1a51d0cf48044647b5"
status: "completed"
scrapedAt: "2026-05-20T18:23:54.045Z"
---
# Product Design and Innovation: Module 2 - Creativity Techniques: Creative Thinking

## Topic: Design of Experiments (DOE)

This topic explores how systematically designed experiments can be a powerful tool for creative problem-solving and innovation within product design. It bridges the gap between generating ideas and rigorously testing them to identify optimal solutions.

---

### 1. Introduction to Design of Experiments (DOE)

**Key Concept:** Design of Experiments (DOE) is a systematic method for determining the relationship between the factors affecting a process and the output of that process. It is a structured approach to experimentation that allows for efficient and effective learning about how to improve a product or process.

**Definition:** DOE involves planning, conducting, analyzing, and interpreting controlled tests to evaluate the effects of multiple input variables (factors) on an output variable (response).

**Relevance to Product Design and Innovation:**
*   **Identifying Key Factors:** Helps pinpoint which design parameters or manufacturing processes have the most significant impact on product performance, cost, or quality.
*   **Optimizing Performance:** Enables systematic exploration of the design space to find the optimal settings for various factors that lead to desired product attributes.
*   **Reducing Uncertainty:** Provides statistically sound evidence to support design decisions, reducing reliance on intuition or guesswork.
*   **Accelerating Innovation:** By efficiently testing multiple hypotheses, DOE can speed up the iteration cycle and lead to faster breakthroughs.
*   **Understanding Interactions:** Reveals how different factors influence each other, which is crucial for complex design challenges.

---

### 2. Core Principles of DOE

**2.1. Factors and Levels:**
*   **Factors:** These are the independent variables or input parameters that can be changed or manipulated in an experiment.
    *   *Example:* In designing a bicycle frame, factors could be tube diameter, tube material, and weld type.
*   **Levels:** These are the specific values or settings of a factor.
    *   *Example:* For tube diameter, levels could be 25mm, 30mm, and 35mm.

**2.2. Responses:**
*   **Responses:** These are the dependent variables or output measurements that are affected by the factors.
    *   *Example:* For the bicycle frame, responses could be frame stiffness, weight, and cost.

**2.3. Experimental Design:**
*   **Purpose:** To efficiently collect data that allows for the isolation of the effects of each factor and their interactions on the response(s).
*   **Types of Designs:**
    *   **One-Factor-at-a-Time (OFAT):** Changing only one factor while holding others constant.
        *   **Limitation:** Inefficient for identifying interactions and can miss optimal solutions if factors interact.
    *   **Full Factorial Design:** Testing all possible combinations of factor levels.
        *   **Advantage:** Provides complete information about main effects and all interactions.
        *   **Disadvantage:** Becomes very large and complex with many factors or levels.
    *   **Fractional Factorial Design:** Testing a carefully selected subset of all possible combinations in a full factorial design.
        *   **Advantage:** Reduces the number of experimental runs while still providing valuable information about key factors and interactions.
        *   **Disadvantage:** Some higher-order interactions may be confounded with main effects, requiring careful planning and interpretation.
    *   **Response Surface Methodology (RSM):** Used to optimize a response when the relationship between factors and the response is complex and non-linear. Often follows initial screening with factorial designs.

**2.4. Replication:**
*   **Definition:** Repeating an experiment under the same conditions.
*   **Purpose:** To estimate experimental error and increase the reliability of the results.

**2.5. Randomization:**
*   **Definition:** Assigning experimental runs and the order in which they are performed randomly.
*   **Purpose:** To minimize the impact of uncontrolled variables or systematic biases.

---

### 3. Steps in Designing and Conducting an Experiment

*(Aligned with CO1: Determine the life cycle of a product and product development process – DOE is a crucial tool within the testing and validation phases)*

1.  **Define the Objective:** Clearly state what you want to achieve with the experiment (e.g., improve stiffness, reduce weight).
2.  **Identify Factors and Levels:** Determine which variables are likely to influence the objective and the range of values to test.
3.  **Select the Response(s):** Define how the success or failure of the experiment will be measured.
4.  **Choose the Experimental Design:** Select the appropriate DOE structure (e.g., full factorial, fractional factorial) based on the number of factors, desired information, and resource constraints.
5.  **Conduct the Experiment:** Execute the planned experimental runs, carefully controlling variables and recording responses.
6.  **Analyze the Data:** Use statistical methods to interpret the results, identify significant factors and interactions, and assess their impact on the response.
7.  **Draw Conclusions and Make Recommendations:** Based on the analysis, determine the optimal settings and propose design modifications or process changes.
8.  **Verify Results:** Conduct further experiments to confirm the findings and validate the proposed solutions.

---

### 4. Benefits of Using DOE in Product Design and Innovation

*(Aligned with CO2: Develop knowledge of robust design and conceptual design – DOE is vital for achieving robust designs and refining concepts)*

*   **Efficiency:** DOE allows for the efficient investigation of multiple factors simultaneously, saving time and resources compared to OFAT.
*   **Identification of Interactions:** Crucial for understanding complex product behaviors where the effect of one factor depends on the level of another.
*   **Optimization:** Enables systematic search for optimal operating or design conditions to maximize performance or minimize undesirable outcomes.
*   **Robustness:** Helps identify design parameters that are less sensitive to variations in manufacturing processes or environmental conditions, leading to more robust products. (Connects to CO2)
*   **Cost Reduction:** By identifying critical factors and optimizing processes, DOE can lead to reduced material usage, fewer defects, and lower manufacturing costs.
*   **Improved Quality:** Leads to products that meet performance specifications more consistently.
*   **Faster Time-to-Market:** Efficient experimentation accelerates the learning and iteration process.

---

### 5. Examples in Product Design

**Example 1: Optimizing the Shore Hardness of a Silicone Seal**
*   **Objective:** To find the optimal shore hardness of a silicone seal for a water bottle to prevent leaks while ensuring easy opening.
*   **Factors:**
    *   Shore hardness (Levels: 40A, 50A, 60A)
    *   Seal thickness (Levels: 1mm, 1.5mm, 2mm)
*   **Response:** Leakage pressure (measured in psi) and ease of opening (subjective rating or torque measurement).
*   **Design:** A full factorial design with 3 levels for each of the 2 factors would require 3 x 3 = 9 experimental runs. This would allow researchers to see how hardness and thickness individually affect sealing and opening, as well as how they interact. For instance, a softer seal might require more thickness to achieve the same sealing pressure.

**Example 2: Improving the Strength of a Composite Material**
*   **Objective:** To maximize the tensile strength of a new composite material for an aerospace component.
*   **Factors:**
    *   Fiber volume fraction (Levels: 30%, 40%, 50%)
    *   Curing temperature (Levels: 150°C, 180°C, 200°C)
    *   Curing time (Levels: 30 mins, 60 mins, 90 mins)
*   **Response:** Tensile strength (measured in MPa).
*   **Design:** A full factorial design with 3 factors at 3 levels each would require 3 x 3 x 3 = 27 experimental runs. A fractional factorial design could be used to reduce this number significantly, perhaps to 9 or 18 runs, if some higher-order interactions are deemed less critical. This would help identify the most influential curing parameters and their optimal combinations for maximum strength.

---

### 6. Connecting DOE to Other Course Outcomes

*   **CO1 (Product Life Cycle & Development Process):** DOE is primarily used during the **testing and validation** phase, but insights from DOE can also inform **conceptual design** and **prototyping**. For example, initial DOE might reveal critical design parameters that need further exploration in the concept phase.
*   **CO2 (Robust Design & Conceptual Design):** DOE is a cornerstone of **robust design**. By identifying factors that significantly impact performance and their interactions, designers can select levels that minimize sensitivity to noise factors (uncontrolled variables), leading to more robust and reliable products. In **conceptual design**, DOE can be used to quickly evaluate the potential of different conceptual approaches by testing key performance drivers.
*   **CO3 (Design for Manufacturing and Assembly - DFMA):** DOE can be used to optimize manufacturing process parameters (e.g., molding pressure, assembly force, welding speed) to ensure consistent product quality and reduce manufacturing defects, which is a direct application of DFMA principles.
*   **CO4 (Value Engineering):** By optimizing performance and reducing costs through DOE, the value (Function/Cost) of a product can be significantly improved, aligning directly with the goals of value engineering.
*   **CO5 (Ergonomics & Rapid Prototyping):** DOE can be used to optimize ergonomic design parameters (e.g., handle shape, button placement) by testing user comfort and efficiency. Rapid prototyping is an excellent tool for creating the physical samples needed for DOE, enabling faster and more iterative testing of design variations.

---

### 7. Key Points to Remember

*   **Systematic Approach:** DOE is not random testing; it's a structured and planned approach.
*   **Efficiency:** The power of DOE lies in its ability to gain maximum information with minimum experimental effort.
*   **Interactions Matter:** Don't overlook the importance of interactions between factors, as they can significantly influence outcomes.
*   **Statistical Foundation:** DOE relies on statistical analysis for valid conclusions. Understanding basic statistics is beneficial.
*   **Iterative Process:** DOE can be an iterative process. Initial experiments might lead to new hypotheses and further rounds of experimentation.
*   **Garbage In, Garbage Out:** The quality of the experimental design and execution directly impacts the reliability of the results.

---

### 8. Practice Questions and Exercises

**Question 1:**
A product designer is working on a new headphone design and wants to optimize the headband clamping force for user comfort and sound isolation. They have identified two factors:
*   **Factor A:** Headband material (Levels: Steel, Plastic)
*   **Factor B:** Padding thickness (Levels: 5mm, 10mm)

They are considering the following experimental approaches:

    a)  **Approach 1 (OFAT):**
        1.  Test Steel headband with 5mm padding.
        2.  Test Steel headband with 10mm padding.
        3.  Test Plastic headband with 5mm padding.
        4.  Test Plastic headband with 10mm padding.

    b)  **Approach 2 (Full Factorial):**
        1.  Test Steel headband with 5mm padding.
        2.  Test Steel headband with 10mm padding.
        3.  Test Plastic headband with 5mm padding.
        4.  Test Plastic headband with 10mm padding.

    Which approach is a proper full factorial design for this experiment? Explain why the other approach is not considered a full factorial design and what its limitations might be.

**Question 2:**
Imagine you are designing a more fuel-efficient car engine. You hypothesize that engine temperature and fuel injection timing are critical. You decide to run DOE.
*   **Factors:**
    *   Engine Temperature (Levels: 80°C, 90°C, 100°C)
    *   Fuel Injection Timing (Levels: 10° BTDC, 15° BTDC, 20° BTDC)
*   **Response:** Fuel efficiency (MPG)

    a) How many experimental runs would be required for a full factorial design?
    b) If you had limited resources and decided to use a fractional factorial design that sacrifices some higher-order interactions to reduce runs, what might be a common fraction you would choose? (Hint: Think about dividing the full factorial by 2).

**Question 3:**
A product development team is using DOE to improve the durability of a plastic enclosure for a portable electronic device. They are testing:
*   **Factor A:** Polymer type (Levels: ABS, Polycarbonate)
*   **Factor B:** Wall thickness (Levels: 2mm, 3mm)
*   **Factor C:** Rib height (Levels: 5mm, 8mm)

They perform a full factorial design (2x2x2 = 8 runs) and get the following hypothetical results for impact resistance (measured in Joules):

| Run | Polymer | Thickness (mm) | Rib Height (mm) | Impact Resistance (J) |
| :-- | :------ | :------------- | :-------------- | :-------------------- |
| 1   | ABS     | 2              | 5               | 10                    |
| 2   | ABS     | 2              | 8               | 15                    |
| 3   | ABS     | 3              | 5               | 12                    |
| 4   | ABS     | 3              | 8               | 20                    |
| 5   | Polycarb| 2              | 5               | 18                    |
| 6   | Polycarb| 2              | 8               | 25                    |
| 7   | Polycarb| 3              | 5               | 22                    |
| 8   | Polycarb| 3              | 8               | 30                    |

Based on these results:

    a) Which factor seems to have the most significant **main effect** on impact resistance?
    b) Is there evidence of an **interaction** between Polymer type and Wall thickness? (Consider comparing the difference in impact resistance between 2mm and 3mm thickness for each polymer type).

---

### 9. Answers to Practice Questions

**Answer 1:**
a) **Approach 1 (OFAT):** This approach systematically tests combinations, but it does not isolate the effect of changing one factor while holding all others constant in a structured way that is ideal for DOE. The order presented is essentially a full factorial if you interpret it as testing all combinations, but the description of OFAT implies a different methodology where only one factor is changed at a time.
b) **Approach 2 (Full Factorial):** This is a proper full factorial design because it explicitly tests all possible combinations of the levels of the two factors. There are 2 levels for Factor A (Steel, Plastic) and 2 levels for Factor B (5mm, 10mm), resulting in 2 x 2 = 4 experimental runs.

**Limitations of OFAT (if Approach 1 was strictly OFAT):**
If Approach 1 meant changing one factor at a time in sequence, it would be inefficient. For example, it might test Steel/5mm, then Steel/10mm (changes padding), then Plastic/10mm (changes polymer and padding if not careful), then Plastic/5mm (changes polymer and padding again). This could lead to confounding effects and missed interactions. The key issue with OFAT is that it doesn't efficiently reveal how changes in one factor affect the outcome *when another factor is also changed*. For instance, the optimal padding thickness might be different for steel versus plastic, and OFAT might miss this interaction.

**Answer 2:**
a) For a full factorial design with 2 factors, each at 3 levels, the number of experimental runs is calculated by multiplying the number of levels for each factor:
Number of runs = (Levels of Factor 1) x (Levels of Factor 2) = 3 x 3 = **9 experimental runs**.

b) A common fractional factorial design is a half fraction, which would run half the number of experiments. In this case, 9 / 2 = 4.5. Since you can't have half an experiment, the closest practical half fraction would involve **9 runs, possibly a 2<sup>(k-p)</sup> design**, but for 3 levels, it's more complex. A common approach for 3 levels would be to use a **3<sup>2</sup> design** and consider a **3<sup>(2-1)</sup> fractional factorial design**, which would require 3 runs. However, this would confound main effects with interactions.

    *More practically for 3 levels, if resources are limited, one might opt for a **$3^2$ full factorial (9 runs)**, or if trying to reduce significantly, a **Design of Experiments tool might suggest a specific fractional factorial design to minimize confounding.** For a 2<sup>k</sup> system, a half fraction is 2<sup>(k-1)</sup>. For 3 levels, the fractional design becomes more complex, but the principle of reducing runs by sacrificing some interaction information still applies.*
    *A more concrete answer in a typical DOE context for 3 levels, if we were to approximate a "half fraction" idea, would be to aim for around 5-6 runs, perhaps by using specific Latin Square designs or Orthogonal Arrays if available for 3 levels.* However, for a 3x3 design, a half-fraction would ideally aim for 4-5 runs, but specific designs are needed. A more direct interpretation of a fractional factorial is by reducing the "resolution" of the design.

    **Let's re-frame for clarity:** If we had 2 factors at 2 levels each (2x2), a full factorial is 4 runs. A half fraction would be 2 runs (2^(2-1)). For 3 levels (3x3), a full factorial is 9 runs. A "half fraction" would aim for around 4-5 runs. Software like Minitab or JMP would suggest specific designs. A common fractional design might be a **$3^{2-1}$ design**, which would require 3 runs, but main effects would be confounded.

**Answer 3:**
To analyze the main effects and interactions, we'll look at how the response changes when each factor is changed from its low level to its high level.

a)  **Main Effects:**
    *   **Polymer Type (A):**
        *   ABS Average: (10+15+12+20)/4 = 13.25
        *   Polycarbonate Average: (18+25+22+30)/4 = 23.75
        *   Difference (Polycarb - ABS): 23.75 - 13.25 = **10.5** (Large positive effect)
    *   **Wall Thickness (B):**
        *   2mm Average: (10+15+18+25)/4 = 16.5
        *   3mm Average: (12+20+22+30)/4 = 20.5
        *   Difference (3mm - 2mm): 20.5 - 16.5 = **4.0** (Moderate positive effect)
    *   **Rib Height (C):**
        *   5mm Average: (10+12+18+22)/4 = 16.0
        *   8mm Average: (15+20+25+30)/4 = 22.5
        *   Difference (8mm - 5mm): 22.5 - 16.0 = **6.5** (Moderate to large positive effect)

    **Conclusion for (a):** Based on the magnitude of the differences, **Polymer Type (ABS vs. Polycarbonate)** appears to have the most significant main effect on impact resistance, with Polycarbonate yielding much higher resistance.

b)  **Interaction between Polymer Type (A) and Wall Thickness (B):**
    To check for interaction, we see if the effect of wall thickness is the same for both polymer types.

    *   **For ABS:**
        *   Impact resistance at 3mm thickness (average of runs 3 & 4) = (12 + 20) / 2 = 16
        *   Impact resistance at 2mm thickness (average of runs 1 & 2) = (10 + 15) / 2 = 12.5
        *   Difference for ABS = 16 - 12.5 = **3.5**

    *   **For Polycarbonate:**
        *   Impact resistance at 3mm thickness (average of runs 7 & 8) = (22 + 30) / 2 = 26
        *   Impact resistance at 2mm thickness (average of runs 5 & 6) = (18 + 25) / 2 = 21.5
        *   Difference for Polycarbonate = 26 - 21.5 = **4.5**

    **Conclusion for (b):** The difference in impact resistance between 2mm and 3mm thickness is 3.5 for ABS and 4.5 for Polycarbonate. While these differences are not identical, they are relatively close. A more formal statistical analysis (like ANOVA) would be needed to confirm if this difference is statistically significant. However, based on this preliminary look, the interaction **might be present but not extremely strong**, meaning the benefit of increasing thickness is somewhat similar for both polymers. If the differences were drastically different (e.g., 1.0 for ABS and 8.0 for Polycarbonate), then a strong interaction would be evident.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 10. References

*   **Ulrich, K. T., & Eppinger, S. D. (2003). *Product Design & Development*. Tata McGraw Hill.**
    *   This textbook provides a strong foundation in the product development process and often discusses early-stage testing and concept validation, where DOE principles can be applied to assess critical design parameters. (Relevant to CO1, CO2).
*   **Otto, K., & Wood, K. (2000). *Product Design: Techniques in Reverse Engineering and New Product Development*. Pearson Education New Delhi.**
    *   This reference book likely delves into specific techniques for analyzing existing products (reverse engineering) and developing new ones. DOE is a key technique for understanding how design variables affect performance, which is crucial in both reverse engineering analysis and new product development. (Relevant to CO2, CO4).

---