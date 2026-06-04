---
title: "Elasticity"
subject: "ECONOMICS FOR ENGINEERS"
module: "Module 1: Basic economic problems"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b3ac"
status: "completed"
scrapedAt: "2026-05-20T16:12:23.091Z"
---
## Economics for Engineers: Module 1 - Basic Economic Problems: Elasticity

**Learning Outcomes:**

*   Define and explain the concept of elasticity.
*   Identify and differentiate between various types of elasticity (price elasticity of demand, income elasticity of demand, cross-price elasticity of demand, price elasticity of supply).
*   Calculate the elasticity coefficient for each type.
*   Interpret the elasticity coefficient and understand its implications for decision-making.
*   Identify the factors that affect elasticity.
*   Apply the concept of elasticity in engineering and business contexts.
*   Understand the relationship between elasticity and total revenue.

---

### 1. Introduction to Elasticity

*   **Definition:** Elasticity measures the responsiveness of one economic variable to a change in another. It quantifies how much the quantity demanded or supplied of a good or service changes when its price, income, or the price of a related good changes.

*   **Importance:** Understanding elasticity is crucial for:
    *   Pricing decisions (for businesses)
    *   Forecasting demand changes
    *   Analyzing the impact of taxes and subsidies
    *   Understanding market behavior
    *   Making informed engineering design choices that consider market factors

### 2. Types of Elasticity

*   **2.1 Price Elasticity of Demand (PED)**

    *   **Definition:** Measures the responsiveness of the quantity demanded of a good or service to a change in its own price.

    *   **Formula:**

        ```
        PED = (% Change in Quantity Demanded) / (% Change in Price)
        PED = [(Q2 - Q1) / ((Q1 + Q2)/2)] / [(P2 - P1) / ((P1 + P2)/2)]
        ```

        Where:
        *   Q1 = Initial Quantity Demanded
        *   Q2 = New Quantity Demanded
        *   P1 = Initial Price
        *   P2 = New Price
        *   We use the midpoint formula to calculate percentage changes, ensuring consistent elasticity calculation regardless of the direction of price change.

    *   **Types of PED:**

        *   **Elastic Demand (PED > 1):** A change in price leads to a proportionally larger change in quantity demanded.  Consumers are highly sensitive to price changes.  E.g., luxury goods.
        *   **Inelastic Demand (PED < 1):** A change in price leads to a proportionally smaller change in quantity demanded.  Consumers are not very sensitive to price changes. E.g., essential goods like medicine or gasoline in the short run.
        *   **Unit Elastic Demand (PED = 1):** A change in price leads to an equal proportional change in quantity demanded.  Total revenue remains constant when price changes.
        *   **Perfectly Elastic Demand (PED = ∞):** Consumers are willing to buy any quantity at a specific price, but none at a price above that. The demand curve is horizontal. E.g., a commodity that has perfect substitutes.
        *   **Perfectly Inelastic Demand (PED = 0):** Quantity demanded remains constant regardless of price changes. The demand curve is vertical. E.g., life-saving medication.

    *   **Example:**  If the price of a smartphone increases by 10% and the quantity demanded decreases by 15%, then PED = -1.5 (Elastic Demand).  The negative sign is often dropped and the absolute value is considered.

*   **2.2 Income Elasticity of Demand (YED)**

    *   **Definition:** Measures the responsiveness of the quantity demanded of a good or service to a change in consumer income.

    *   **Formula:**

        ```
        YED = (% Change in Quantity Demanded) / (% Change in Income)
        YED = [(Q2 - Q1) / ((Q1 + Q2)/2)] / [(I2 - I1) / ((I1 + I2)/2)]
        ```

        Where:
        *   Q1 = Initial Quantity Demanded
        *   Q2 = New Quantity Demanded
        *   I1 = Initial Income
        *   I2 = New Income

    *   **Types of YED:**

        *   **Normal Goods (YED > 0):** As income increases, the quantity demanded increases.
            *   **Necessity (0 < YED < 1):**  Demand increases as income increases, but at a slower rate. E.g., food, clothing.
            *   **Luxury (YED > 1):** Demand increases as income increases, but at a faster rate. E.g., expensive cars, designer clothes.
        *   **Inferior Goods (YED < 0):** As income increases, the quantity demanded decreases. E.g., generic brands, cheaper transportation options.

    *   **Example:** If a person's income increases by 5% and their consumption of organic vegetables increases by 8%, then YED = 1.6 (Luxury Good).  If their consumption of instant noodles decreases by 2%, then YED = -0.4 (Inferior Good).

*   **2.3 Cross-Price Elasticity of Demand (CPED)**

    *   **Definition:** Measures the responsiveness of the quantity demanded of one good to a change in the price of another good.

    *   **Formula:**

        ```
        CPED = (% Change in Quantity Demanded of Good A) / (% Change in Price of Good B)
        CPED = [(QA2 - QA1) / ((QA1 + QA2)/2)] / [(PB2 - PB1) / ((PB1 + PB2)/2)]
        ```

        Where:
        *   QA1 = Initial Quantity Demanded of Good A
        *   QA2 = New Quantity Demanded of Good A
        *   PB1 = Initial Price of Good B
        *   PB2 = New Price of Good B

    *   **Types of CPED:**

        *   **Substitutes (CPED > 0):** An increase in the price of Good B leads to an increase in the quantity demanded of Good A.  E.g., Coffee and Tea.
        *   **Complements (CPED < 0):** An increase in the price of Good B leads to a decrease in the quantity demanded of Good A.  E.g., Cars and Gasoline.
        *   **Independent Goods (CPED = 0):** A change in the price of Good B has no effect on the quantity demanded of Good A. E.g., Bread and Tires.

    *   **Example:** If the price of coffee increases by 10% and the demand for tea increases by 5%, then CPED = 0.5 (Substitutes).  If the price of gasoline increases by 10% and the demand for cars decreases by 8%, then CPED = -0.8 (Complements).

*   **2.4 Price Elasticity of Supply (PES)**

    *   **Definition:** Measures the responsiveness of the quantity supplied of a good or service to a change in its own price.

    *   **Formula:**

        ```
        PES = (% Change in Quantity Supplied) / (% Change in Price)
        PES = [(QS2 - QS1) / ((QS1 + QS2)/2)] / [(P2 - P1) / ((P1 + P2)/2)]
        ```

        Where:
        *   QS1 = Initial Quantity Supplied
        *   QS2 = New Quantity Supplied
        *   P1 = Initial Price
        *   P2 = New Price

    *   **Types of PES:**

        *   **Elastic Supply (PES > 1):** A change in price leads to a proportionally larger change in quantity supplied.  Producers can easily adjust production.
        *   **Inelastic Supply (PES < 1):** A change in price leads to a proportionally smaller change in quantity supplied.  Producers have difficulty adjusting production quickly.
        *   **Unit Elastic Supply (PES = 1):** A change in price leads to an equal proportional change in quantity supplied.
        *   **Perfectly Elastic Supply (PES = ∞):** Producers are willing to supply any quantity at a specific price, but none at a price below that.  The supply curve is horizontal.
        *   **Perfectly Inelastic Supply (PES = 0):** Quantity supplied remains constant regardless of price changes. The supply curve is vertical.  E.g., a fixed quantity of a limited edition collectible.

    *   **Example:** If the price of wheat increases by 5% and the quantity supplied increases by 8%, then PES = 1.6 (Elastic Supply).

### 3. Factors Affecting Elasticity

*   **3.1 Price Elasticity of Demand (PED):**

    *   **Availability of Substitutes:** More substitutes mean higher PED (more elastic).
    *   **Necessity vs. Luxury:** Necessities tend to have lower PED (more inelastic).
    *   **Proportion of Income Spent on the Good:** Larger proportion of income means higher PED (more elastic).
    *   **Time Horizon:** Demand tends to be more elastic in the long run than in the short run because consumers have more time to adjust their consumption habits.
    *   **Definition of the Market:**  A narrowly defined market (e.g., a specific brand of ice cream) will have a higher PED than a broadly defined market (e.g., ice cream in general).

*   **3.2 Income Elasticity of Demand (YED):**

    *   **Nature of the Good:**  Whether the good is a necessity, a luxury, or an inferior good.
    *   **Level of Income:**  A good that is a luxury at low-income levels may become a necessity at higher income levels.

*   **3.3 Cross-Price Elasticity of Demand (CPED):**

    *   **Degree of Substitutability or Complementarity:**  The closer the goods are as substitutes or complements, the higher the CPED (in absolute value).

*   **3.4 Price Elasticity of Supply (PES):**

    *   **Availability of Resources:**  If resources are readily available, supply will be more elastic.
    *   **Production Capacity:**  If producers have spare capacity, they can increase supply more easily.
    *   **Time Horizon:** Supply tends to be more elastic in the long run than in the short run because producers have more time to adjust their production levels.
    *   **Storability of the Product:** Products that can be easily stored tend to have a more elastic supply as producers can adjust supply by releasing or withholding stock.
    *   **Mobility of Factors of Production:** If factors of production can be easily moved from one industry to another, supply will be more elastic.

### 4. Elasticity and Total Revenue

*   **Total Revenue (TR):**  TR = Price (P) * Quantity (Q)

*   **Relationship between PED and TR:**

    *   **Elastic Demand (PED > 1):**
        *   Price Increase → TR Decreases
        *   Price Decrease → TR Increases
    *   **Inelastic Demand (PED < 1):**
        *   Price Increase → TR Increases
        *   Price Decrease → TR Decreases
    *   **Unit Elastic Demand (PED = 1):**
        *   Price Change → TR Remains Constant

*   **Example:**  A movie theater considers increasing ticket prices.  If demand is elastic (e.g., many alternative entertainment options), increasing prices will likely lead to a decrease in total revenue as fewer people attend.  If demand is inelastic (e.g., a new blockbuster movie with limited showings), increasing prices may increase total revenue.

### 5. Application of Elasticity in Engineering and Business Contexts

*   **Demand Forecasting:** Engineers can use elasticity to predict the impact of price changes on the demand for products and services related to their projects. For example, predicting demand for electricity based on price changes and income levels.
*   **Pricing Strategies:** Understanding price elasticity of demand allows engineers involved in business or product development to make informed pricing decisions. They can optimize prices to maximize revenue and profitability.
*   **Infrastructure Planning:** Elasticity concepts can be used in planning infrastructure projects.  For example, understanding the price elasticity of demand for toll roads can help in setting optimal toll rates and estimating revenue.  The income elasticity of demand for transportation services can help in forecasting future demand based on economic growth.
*   **Supply Chain Management:** Engineers can use price elasticity of supply to analyze the responsiveness of suppliers to price changes. This helps in making informed sourcing decisions and managing supply chain risks.
*   **Materials Selection:** If the price of a particular material rises sharply, understanding the cross-price elasticity of demand with potential substitute materials is critical to making informed engineering decisions.
*   **Cost-Benefit Analysis:** Elasticity considerations can improve the accuracy of cost-benefit analyses for engineering projects.

### 6. Practice Questions and Exercises

1.  **Question:** The price of gasoline increases by 20%, and the quantity demanded decreases by 5%. Calculate the price elasticity of demand. Is demand elastic or inelastic? What should be done about the price in order to raise more revenue?

    **Answer:** PED = (-5%) / (20%) = -0.25 (Inelastic Demand). Since demand is inelastic, increasing the price will increase total revenue.

2.  **Question:** A company sells software. After an increase in consumer income by 15%, the demand for their software increases by 25%. Calculate the income elasticity of demand. Is the software a normal good, inferior good, or luxury good?

    **Answer:** YED = (25%) / (15%) = 1.67 (Luxury Good).

3.  **Question:** The price of coffee increases by 12%, and the quantity demanded of tea increases by 8%. Calculate the cross-price elasticity of demand. Are coffee and tea substitutes or complements?

    **Answer:** CPED = (8%) / (12%) = 0.67 (Substitutes).

4.  **Question:** The price of a new type of solar panel increases by 5%, and the quantity supplied increases by 3%.  What is the price elasticity of supply? Is the supply elastic or inelastic?

     **Answer:** PES = (3%) / (5%) = 0.6 (Inelastic Supply).

5.  **Question:** Explain how an engineer designing a new public transportation system might use the concept of income elasticity of demand.

    **Answer:** The engineer can use YED to forecast the future demand for the transportation system.  If the YED is positive, demand will increase as incomes rise. If the YED is negative (unlikely for a transportation system), the demand will decrease as incomes rise, indicating that the system might not be viable in the long run.  Knowing the magnitude of the YED will allow the engineer to better plan for the system's capacity and financing needs.

### 7. Important Points to Remember

*   Elasticity is a unit-free measure, making it comparable across different goods and services.
*   The sign of the elasticity coefficient is important for interpreting the relationship between the variables.
*   Elasticity is not constant along a linear demand or supply curve.
*   Understanding the factors that affect elasticity is crucial for making accurate predictions.
*   Elasticity is a valuable tool for decision-making in engineering and business contexts.

---
