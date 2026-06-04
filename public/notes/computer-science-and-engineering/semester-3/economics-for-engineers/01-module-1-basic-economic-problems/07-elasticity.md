---
title: "Elasticity"
subject: "ECONOMICS FOR ENGINEERS"
module: "Module 1: Basic economic problems"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad9c"
status: "completed"
scrapedAt: "2026-05-20T16:24:39.225Z"
---
## ECONOMICS FOR ENGINEERS: Module 1 - Basic Economic Problems: Topic - Elasticity

**Module:** Module 1: Basic Economic Problems
**Topic:** Elasticity

**Learning Outcomes:** By the end of this topic, you should be able to:

*   Define elasticity and its different types.
*   Calculate different types of elasticity (price elasticity of demand, income elasticity of demand, cross-price elasticity of demand, price elasticity of supply).
*   Interpret the results of elasticity calculations and understand their implications.
*   Identify factors affecting elasticity.
*   Apply elasticity concepts to engineering decision-making.

---

**1. Introduction to Elasticity**

*   **Definition:** Elasticity is a measure of responsiveness of one variable to a change in another variable. In economics, it typically refers to the responsiveness of quantity demanded or quantity supplied to changes in price, income, or related goods' prices.

*   **Why is Elasticity Important?**  Understanding elasticity helps engineers make informed decisions in various scenarios, such as:
    *   **Pricing Strategies:**  Predicting how changes in price affect demand for a product or service.
    *   **Demand Forecasting:**  Estimating future demand based on income changes or changes in related product prices.
    *   **Supply Chain Management:**  Understanding how changes in input costs affect the supply of goods.
    *   **Project Feasibility:** Assessing the viability of a project based on expected demand and price sensitivity.

---

**2. Types of Elasticity**

*   **2.1 Price Elasticity of Demand (PED)**

    *   **Definition:** Measures the responsiveness of quantity demanded to a change in price.

    *   **Formula:**

        ```
        PED = (% Change in Quantity Demanded) / (% Change in Price)
        PED = [(Q2 - Q1) / Q1] / [(P2 - P1) / P1]
        ```

        Where:
        *   Q1 = Initial Quantity
        *   Q2 = New Quantity
        *   P1 = Initial Price
        *   P2 = New Price

    *   **Interpretation:**

        *   **|PED| > 1: Elastic Demand:**  Quantity demanded is highly responsive to price changes. A small change in price leads to a larger change in quantity demanded. (e.g., luxury goods).
        *   **|PED| < 1: Inelastic Demand:**  Quantity demanded is not very responsive to price changes.  A change in price leads to a smaller change in quantity demanded. (e.g., essential goods like medicine).
        *   **|PED| = 1: Unit Elastic Demand:**  Percentage change in quantity demanded is equal to the percentage change in price.
        *   **|PED| = 0: Perfectly Inelastic Demand:**  Quantity demanded does not change regardless of the price. (e.g., life-saving medication, in the short term).
        *   **|PED| = ∞: Perfectly Elastic Demand:**  Any price increase will cause the quantity demanded to drop to zero.  (Highly competitive markets).

    *   **Midpoint Formula (Arc Elasticity):**  Used when the price change is significant, to get a more accurate measure.

        ```
        PED = [(Q2 - Q1) / ((Q1 + Q2)/2)] / [(P2 - P1) / ((P1 + P2)/2)]
        ```

    *   **Example:**  Suppose the price of a new engineering software increases from $500 to $600, and the quantity demanded decreases from 100 licenses to 80 licenses.

        *   Using the basic formula: PED = [(80-100)/100] / [(600-500)/500] = (-0.2) / (0.2) = -1
        *   Interpretation:  The demand is unit elastic. A 1% increase in price leads to a 1% decrease in demand.

        *   Using the midpoint formula: PED = [(80-100)/((100+80)/2)] / [(600-500)/((500+600)/2)] = (-0.222) / (0.0909) = -2.44

        *   Interpretation: The demand is elastic. A 1% increase in price leads to a 2.44% decrease in demand. Notice the difference when using the midpoint formula for larger price changes.

*   **2.2 Income Elasticity of Demand (YED)**

    *   **Definition:** Measures the responsiveness of quantity demanded to a change in consumer income.

    *   **Formula:**

        ```
        YED = (% Change in Quantity Demanded) / (% Change in Income)
        ```

    *   **Interpretation:**

        *   **YED > 0: Normal Goods:**  As income increases, demand increases.
            *   **YED > 1: Luxury Goods:** Demand increases more than proportionally to income.
            *   **0 < YED < 1: Necessity Goods:** Demand increases less than proportionally to income.
        *   **YED < 0: Inferior Goods:**  As income increases, demand decreases.  (e.g., generic brands)

    *   **Example:**  With a 10% increase in average income in a city, the demand for high-end CAD workstations increases by 15%.

        *   YED = 15% / 10% = 1.5
        *   Interpretation: CAD workstations are luxury goods in this context, as demand increases more than proportionally to income.

*   **2.3 Cross-Price Elasticity of Demand (CPED)**

    *   **Definition:** Measures the responsiveness of quantity demanded of one good to a change in the price of another good.

    *   **Formula:**

        ```
        CPED = (% Change in Quantity Demanded of Good A) / (% Change in Price of Good B)
        ```

    *   **Interpretation:**

        *   **CPED > 0: Substitute Goods:** As the price of Good B increases, demand for Good A increases. (e.g., different brands of steel).
        *   **CPED < 0: Complementary Goods:** As the price of Good B increases, demand for Good A decreases. (e.g., software and related hardware).
        *   **CPED = 0: Unrelated Goods:**  Changes in the price of Good B have no effect on the demand for Good A.

    *   **Example:** The price of a popular engineering design software (Good B) increases by 5%. As a result, the demand for a competing software (Good A) increases by 8%.

        *   CPED = 8% / 5% = 1.6
        *   Interpretation: The two software programs are substitutes, and the demand for Good A is quite responsive to changes in the price of Good B.

*   **2.4 Price Elasticity of Supply (PES)**

    *   **Definition:** Measures the responsiveness of quantity supplied to a change in price.

    *   **Formula:**

        ```
        PES = (% Change in Quantity Supplied) / (% Change in Price)
        ```

    *   **Interpretation:**

        *   **PES > 1: Elastic Supply:**  Quantity supplied is highly responsive to price changes.
        *   **PES < 1: Inelastic Supply:**  Quantity supplied is not very responsive to price changes.
        *   **PES = 1: Unit Elastic Supply:** Percentage change in quantity supplied is equal to the percentage change in price.
        *   **PES = 0: Perfectly Inelastic Supply:** Quantity supplied does not change regardless of price (e.g., a fixed amount of land).
        *   **PES = ∞: Perfectly Elastic Supply:** Suppliers are willing to supply any quantity at a given price.

    *   **Example:**  The price of a specific type of specialized alloy increases by 10%, and as a result, the quantity supplied increases by 15%.

        *   PES = 15% / 10% = 1.5
        *   Interpretation: The supply of this alloy is elastic.

---

**3. Factors Affecting Elasticity**

*   **3.1 Price Elasticity of Demand (PED):**

    *   **Availability of Substitutes:** More substitutes = more elastic demand.
    *   **Necessity vs. Luxury:** Necessities tend to be inelastic; luxuries tend to be elastic.
    *   **Proportion of Income Spent:** Larger proportion = more elastic demand.
    *   **Time Horizon:** Demand tends to be more elastic in the long run.
    *   **Brand Loyalty:**  Strong brand loyalty leads to less elastic demand.

*   **3.2 Income Elasticity of Demand (YED):**

    *   **Nature of the Good:** Necessity vs. Luxury.
    *   **Consumer Preferences:**

*   **3.3 Cross-Price Elasticity of Demand (CPED):**

    *   **Degree of Substitutability:** Closer substitutes = higher CPED.
    *   **Degree of Complementarity:** Stronger complements = more negative CPED.

*   **3.4 Price Elasticity of Supply (PES):**

    *   **Availability of Resources:** More readily available resources = more elastic supply.
    *   **Production Capacity:**  Spare capacity = more elastic supply.
    *   **Time Horizon:** Supply tends to be more elastic in the long run.
    *   **Storage Costs:** Low storage costs = more elastic supply.

---

**4. Application of Elasticity Concepts in Engineering Decision-Making**

*   **Project Feasibility Studies:** Estimating demand for engineering projects (e.g., toll roads, infrastructure) based on price and income elasticity.
*   **Cost-Benefit Analysis:**  Assessing the impact of price changes on the benefits of a project.
*   **Infrastructure Planning:**  Predicting how changes in transportation costs (e.g., fuel prices) affect demand for transportation services.
*   **Resource Allocation:**  Optimizing the allocation of resources based on the elasticity of supply and demand.
*   **Pricing Strategies for Engineering Services:**  Adjusting pricing based on the price elasticity of demand for engineering consulting.
*   **Material Selection:** Analyzing the cost and availability of different materials and their impact on project costs, considering their supply elasticity.

---

**5. Practice Questions/Exercises**

1.  **Question:**  The price of steel increases by 8%, and the quantity demanded decreases by 4%. What is the price elasticity of demand for steel? Is demand elastic or inelastic?

    **Answer:**
    *   PED = (-4%) / (8%) = -0.5
    *   Since |PED| = 0.5 < 1, the demand for steel is **inelastic**.

2.  **Question:**  Average income in a region increases by 5%. As a result, the demand for public transportation decreases by 2%. What is the income elasticity of demand for public transportation? Is public transportation a normal or inferior good?

    **Answer:**
    *   YED = (-2%) / (5%) = -0.4
    *   Since YED < 0, public transportation is an **inferior good** in this context.

3.  **Question:**  The price of concrete increases by 12%.  As a result, the demand for bricks increases by 6%. What is the cross-price elasticity of demand between concrete and bricks? Are they substitutes or complements?

    **Answer:**
    *   CPED = (6%) / (12%) = 0.5
    *   Since CPED > 0, concrete and bricks are **substitutes**.

4.  **Question:** The price of specialized sensors increases by 5%, and the quantity supplied increases by 2%. Calculate the price elasticity of supply. Is supply elastic or inelastic?

    **Answer:**
    * PES = (2%)/(5%) = 0.4
    * Since PES < 1, the supply is inelastic.

---

**6. Important Points to Remember**

*   Elasticity is a **ratio** of percentage changes.
*   Price Elasticity of Demand (PED) is usually **negative** (due to the inverse relationship between price and quantity demanded), but we often consider its absolute value.
*   The **midpoint formula** provides a more accurate measure of elasticity when the price change is significant.
*   Elasticity is influenced by various factors and can change over time.
*   Understanding elasticity is crucial for making informed economic decisions in engineering projects and businesses.
*   Elasticity values provide important information for forecasting, pricing, and resource allocation.
