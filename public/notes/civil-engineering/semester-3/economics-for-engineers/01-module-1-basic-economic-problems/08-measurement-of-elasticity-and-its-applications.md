---
title: "measurement of elasticity and its applications"
subject: "ECONOMICS FOR ENGINEERS"
module: "Module 1: Basic economic problems"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8107bc"
status: "completed"
scrapedAt: "2026-05-20T18:38:59.322Z"
---
# ECONOMICS FOR ENGINEERS: Module 1: Basic Economic Problems

## Topic: Measurement of Elasticity and its Applications

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   **Define elasticity** and its different types.
*   **Measure elasticity** using various methods.
*   **Interpret the meaning** of different elasticity values.
*   **Apply the concept of elasticity** to various engineering and business contexts.
*   **Analyze the impact of elasticity** on decision-making for engineers.

---

### 1. Introduction to Elasticity

**What is Elasticity?**

Elasticity, in economics, is a measure of the **responsiveness of one economic variable to a change in another economic variable**. It quantifies how much one factor changes when another related factor changes.

**Why is Elasticity Important for Engineers?**

As engineers, you'll often be involved in decisions concerning:

*   **Pricing of products and services:** Understanding how demand changes with price.
*   **Resource allocation:** Knowing how the demand for inputs responds to their prices.
*   **Investment decisions:** Assessing the sensitivity of sales or revenue to changes in marketing or production.
*   **Forecasting:** Predicting the impact of economic changes on demand for your projects.
*   **Policy analysis:** Evaluating the effectiveness of government regulations or incentives.

---

### 2. Price Elasticity of Demand (PED)

**Definition:**

Price Elasticity of Demand (PED) measures the **percentage change in the quantity demanded of a good or service in response to a percentage change in its price**, holding all other factors constant.

**Formula:**

$$
\text{PED} = \frac{\% \text{ Change in Quantity Demanded}}{\% \text{ Change in Price}}
$$

**Calculation:**

$$
\text{PED} = \frac{\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2}}{\frac{P_2 - P_1}{(P_1 + P_2)/2}}
$$

*   $Q_1$: Initial quantity demanded
*   $Q_2$: New quantity demanded
*   $P_1$: Initial price
*   $P_2$: New price

**Midpoint Formula (preferred for its symmetry):** This formula calculates the percentage change using the average of the initial and final values, which helps avoid the "initial value bias" that can occur when calculating elasticity with different starting points.

**Interpretation of PED Values:**

| PED Value        | Interpretation        | Meaning                                                                                                                                                                                                                             |
| :--------------- | :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PED < -1**     | **Elastic Demand**    | A 1% change in price leads to a greater than 1% change in quantity demanded. Demand is very responsive to price changes. Consumers will significantly reduce purchases if the price increases.                                       |
| **PED = -1**     | **Unit Elastic Demand** | A 1% change in price leads to an exactly 1% change in quantity demanded. The quantity demanded changes proportionally to the price change. Total revenue remains constant regardless of price changes.                                     |
| **-1 < PED < 0** | **Inelastic Demand**  | A 1% change in price leads to a less than 1% change in quantity demanded. Demand is not very responsive to price changes. Consumers will purchase almost the same amount even if the price increases.                                    |
| **PED = 0**      | **Perfectly Inelastic** | A change in price leads to **no change** in quantity demanded. This is theoretical and rarely observed in reality. The demand curve is vertical.                                                                                      |
| **PED = ∞**      | **Perfectly Elastic** | Any increase in price leads to **zero** quantity demanded, and any decrease in price leads to an infinite quantity demanded. This is also theoretical, representing a situation with perfect substitutes. The demand curve is horizontal. |

**Important Note:** PED is almost always negative because of the law of demand (as price increases, quantity demanded decreases). Economists often refer to PED in absolute terms (e.g., an elasticity of -2 is often stated as "an elasticity of 2").

**Factors Affecting PED:**

*   **Availability of Substitutes:** More substitutes mean higher elasticity (e.g., if the price of one brand of cola increases, consumers can easily switch to another).
*   **Necessity vs. Luxury:** Necessities tend to have inelastic demand (e.g., essential medicines), while luxuries have elastic demand (e.g., designer handbags).
*   **Proportion of Income Spent:** Goods that consume a large portion of income tend to have more elastic demand (e.g., rent, car payments).
*   **Time Horizon:** Demand tends to be more elastic in the long run than in the short run, as consumers have more time to adjust their behavior (e.g., finding substitutes for gasoline).
*   **Definition of the Market:** A narrowly defined market (e.g., a specific brand of coffee) will have more elastic demand than a broadly defined market (e.g., all beverages).

**Application Example:**

*   **Scenario:** A company selling a unique engineering software package finds that at \$1000 per license, they sell 500 licenses per month. They are considering raising the price to \$1200 per license. Based on market research, they estimate that at \$1200, they will sell 400 licenses per month.

*   **Calculation:**
    *   $Q_1 = 500$, $Q_2 = 400$
    *   $P_1 = \$1000$, $P_2 = \$1200$

    *   Change in Quantity Demanded = $400 - 500 = -100$
    *   Average Quantity = $(500 + 400) / 2 = 450$
    *   % Change in Quantity Demanded = $(-100 / 450) * 100\% \approx -22.22\%$

    *   Change in Price = $1200 - 1000 = \$200$
    *   Average Price = $(1000 + 1200) / 2 = \$1100$
    *   % Change in Price = $(200 / 1100) * 100\% \approx 18.18\%$

    *   PED = $-22.22\% / 18.18\% \approx -1.22$

*   **Interpretation:** The PED is approximately -1.22. This means the demand for the software is **elastic**. A 1% increase in price would lead to a 1.22% decrease in the quantity demanded.

*   **Decision:** If the company raises the price, total revenue will likely **decrease**.
    *   Initial Revenue = $500 * \$1000 = \$500,000$
    *   New Revenue = $400 * \$1200 = \$480,000$

    This suggests that raising the price might not be a good strategy for this software.

---

### 3. Income Elasticity of Demand (YED)

**Definition:**

Income Elasticity of Demand (YED) measures the **percentage change in the quantity demanded of a good or service in response to a percentage change in consumers' income**, holding all other factors constant.

**Formula:**

$$
\text{YED} = \frac{\% \text{ Change in Quantity Demanded}}{\% \text{ Change in Income}}
$$

**Calculation (using midpoint formula):**

$$
\text{YED} = \frac{\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2}}{\frac{Y_2 - Y_1}{(Y_1 + Y_2)/2}}
$$

*   $Y_1$: Initial income
*   $Y_2$: New income

**Interpretation of YED Values:**

| YED Value        | Classification of Good | Meaning                                                                                                                                                                                                                                       |
| :--------------- | :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **YED > 0**      | **Normal Good**          | As income increases, the quantity demanded increases. Consumers buy more of these goods as they become wealthier.                                                                                                                               |
| **YED > 1**      | **Luxury Good**          | Demand increases more than proportionally to income. Consumers tend to buy significantly more of these goods when their income rises.                                                                                                            |
| **0 < YED < 1**  | **Necessity Good**       | Demand increases less than proportionally to income. Consumers buy more of these goods as income rises, but the increase is smaller than the income increase.                                                                                    |
| **YED < 0**      | **Inferior Good**        | As income increases, the quantity demanded decreases. Consumers tend to switch to better alternatives as they become wealthier (e.g., switching from instant noodles to restaurant meals).                                                    |
| **YED = 0**      | **Necessity with no change** | Demand does not change regardless of income changes. This is rare, as most goods show some income sensitivity.                                                                                                                                |

**Application Example:**

*   **Scenario:** A company manufactures basic engineering components. In a period of low economic growth, average household income was \$40,000, and the company sold 10,000 units. In a period of high economic growth, average household income rose to \$50,000, and the company sold 11,000 units.

*   **Calculation:**
    *   $Q_1 = 10,000$, $Q_2 = 11,000$
    *   $Y_1 = \$40,000$, $Y_2 = \$50,000$

    *   Change in Quantity Demanded = $11,000 - 10,000 = 1,000$
    *   Average Quantity = $(10,000 + 11,000) / 2 = 10,500$
    *   % Change in Quantity Demanded = $(1,000 / 10,500) * 100\% \approx 9.52\%$

    *   Change in Income = $50,000 - 40,000 = \$10,000$
    *   Average Income = $(40,000 + 50,000) / 2 = \$45,000$
    *   % Change in Income = $(10,000 / 45,000) * 100\% \approx 22.22\%$

    *   YED = $9.52\% / 22.22\% \approx 0.43$

*   **Interpretation:** The YED is approximately 0.43. This means the engineering components are **normal goods**, and specifically, they are **necessities**. As income rises, demand for these components increases, but at a slower rate than the income increase.

*   **Decision:** The company can anticipate increased sales of its components during periods of economic growth. However, the growth in demand might not be as rapid as the growth in overall income.

---

### 4. Cross-Price Elasticity of Demand (CPED)

**Definition:**

Cross-Price Elasticity of Demand (CPED) measures the **percentage change in the quantity demanded of one good (Good A) in response to a percentage change in the price of another good (Good B)**, holding all other factors constant.

**Formula:**

$$
\text{CPED} = \frac{\% \text{ Change in Quantity Demanded of Good A}}{\% \text{ Change in Price of Good B}}
$$

**Calculation (using midpoint formula):**

$$
\text{CPED} = \frac{\frac{Q_{A2} - Q_{A1}}{(Q_{A1} + Q_{A2})/2}}{\frac{P_{B2} - P_{B1}}{(P_{B1} + P_{B2})/2}}
$$

*   $Q_{A1}$: Initial quantity demanded of Good A
*   $Q_{A2}$: New quantity demanded of Good A
*   $P_{B1}$: Initial price of Good B
*   $P_{B2}$: New price of Good B

**Interpretation of CPED Values:**

| CPED Value     | Relationship Between Goods | Meaning                                                                                                                                                                                                                                                                                                                                    |
| :------------- | :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CPED > 0**   | **Substitutes**            | When the price of Good B increases, the quantity demanded of Good A increases. Consumers switch from the relatively more expensive Good B to Good A. Examples: Coca-Cola and Pepsi, butter and margarine.                                                                                                                                     |
| **CPED < 0**   | **Complements**            | When the price of Good B increases, the quantity demanded of Good A decreases. The goods are consumed together. If the price of one goes up, people buy less of both. Examples: Printers and ink cartridges, cars and gasoline.                                                                                                                      |
| **CPED = 0**   | **Unrelated Goods**        | Changes in the price of Good B have no effect on the quantity demanded of Good A. The goods are independent of each other. Examples: Books and bananas.                                                                                                                                                                                           |

**Application Example:**

*   **Scenario:** A company produces high-efficiency solar panels. They observe that when the price of natural gas (a substitute energy source) increases by 10%, the demand for their solar panels increases by 5%.

*   **Calculation:**
    *   % Change in Price of Natural Gas (Good B) = +10%
    *   % Change in Quantity Demanded of Solar Panels (Good A) = +5%

    *   CPED = $+5\% / +10\% = +0.5$

*   **Interpretation:** The CPED is +0.5. This indicates that solar panels and natural gas are **substitutes**. When the price of natural gas rises, consumers are more likely to switch to solar panels, increasing demand for them.

*   **Decision:** The company should monitor the price trends of natural gas. If natural gas prices are expected to rise, it could signal an increased demand for their solar panels, potentially informing production and marketing strategies.

---

### 5. Price Elasticity of Supply (PES)

**Definition:**

Price Elasticity of Supply (PES) measures the **percentage change in the quantity supplied of a good or service in response to a percentage change in its price**, holding all other factors constant.

**Formula:**

$$
\text{PES} = \frac{\% \text{ Change in Quantity Supplied}}{\% \text{ Change in Price}}
$$

**Calculation (using midpoint formula):**

$$
\text{PES} = \frac{\frac{Q_{S2} - Q_{S1}}{(Q_{S1} + Q_{S2})/2}}{\frac{P_2 - P_1}{(P_1 + P_2)/2}}
$$

*   $Q_{S1}$: Initial quantity supplied
*   $Q_{S2}$: New quantity supplied

**Interpretation of PES Values:**

| PES Value        | Interpretation           | Meaning                                                                                                                                                                                                 |
| :--------------- | :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **PES > 1**      | **Elastic Supply**       | A 1% change in price leads to a greater than 1% change in quantity supplied. Suppliers can easily and quickly increase production in response to price increases.                                        |
| **PES = 1**      | **Unit Elastic Supply**  | A 1% change in price leads to an exactly 1% change in quantity supplied. The quantity supplied changes proportionally to the price change.                                                                  |
| **0 < PES < 1**  | **Inelastic Supply**     | A 1% change in price leads to a less than 1% change in quantity supplied. Suppliers find it difficult to adjust production levels quickly in response to price changes.                                       |
| **PES = 0**      | **Perfectly Inelastic**  | A change in price leads to **no change** in quantity supplied. This is usually true in the very short run or for goods with fixed supply (e.g., land, unique artworks). The supply curve is vertical. |
| **PES = ∞**      | **Perfectly Elastic**    | Any increase in price leads to **infinite** quantity supplied, and any decrease in price leads to **zero** quantity supplied. This is theoretical and represents a situation where suppliers can produce unlimited quantities at a certain price. The supply curve is horizontal. |

**Factors Affecting PES:**

*   **Availability of Inputs:** If inputs are readily available and easy to acquire, supply will be more elastic.
*   **Time Horizon:** Supply is generally more elastic in the long run than in the short run, as producers have more time to adjust production capacity.
*   **Mobility of Factors of Production:** If resources can easily switch between producing different goods, supply will be more elastic.
*   **Ease of Storage:** Goods that can be easily stored can have more elastic supply as producers can adjust current sales based on past production.
*   **Production Capacity:** Firms with excess capacity can respond more quickly to price changes, leading to more elastic supply.

**Application Example:**

*   **Scenario:** A factory produces specialized machine parts. When the price of these parts increases by 5%, the factory can ramp up production and increase the quantity supplied by 15% due to having spare capacity and readily available raw materials.

*   **Calculation:**
    *   % Change in Price = +5%
    *   % Change in Quantity Supplied = +15%

    *   PES = $+15\% / +5\% = +3$

*   **Interpretation:** The PES is +3. This means the supply of these specialized machine parts is **elastic**. The factory is very responsive to price changes.

*   **Decision:** The factory can capitalize on price increases effectively by boosting production. Conversely, if prices fall, they might consider reducing production quickly to avoid losses, assuming they can easily shift resources.

---

### 6. Applications of Elasticity in Engineering

*   **Demand Forecasting:** Understanding PED helps engineers forecast sales volumes and revenue for new products or modifications based on expected pricing.
*   **Cost-Benefit Analysis:** Elasticity values are crucial for accurately assessing the benefits of projects by understanding how demand (and thus revenue) will respond to changes in product features, quality, or price.
*   **Production Planning:** PES informs production schedules. If supply is elastic, engineers can plan for rapid increases in output when prices rise. If inelastic, they need to invest more in capacity for significant changes.
*   **Inventory Management:** Understanding the elasticity of demand for goods with long lead times helps engineers manage inventory levels more effectively.
*   **Market Analysis:** YED helps engineers understand how economic cycles (changes in income) will affect the demand for their products, especially for consumer goods or infrastructure projects.
*   **Strategic Pricing:** For engineers involved in product development or management, PED is vital for setting optimal prices that maximize revenue or profit.
*   **Resource Procurement:** Understanding the elasticity of supply for raw materials or components helps engineers in negotiating contracts and managing supply chain risks.
*   **Environmental Engineering:** Elasticity can be applied to understanding the demand for energy or the supply of waste disposal services, influencing policy recommendations or system design. For example, the PED of gasoline influences the effectiveness of gasoline taxes in reducing consumption.

---

### 7. Important Points to Remember

*   **Elasticity is about responsiveness.** The higher the absolute value of elasticity, the more responsive the quantity is to changes in the other variable.
*   **PED is typically negative.** Always interpret the sign, but often discuss its magnitude.
*   **The midpoint formula is the standard** for calculating elasticity to avoid initial value bias.
*   **Factors influencing elasticity are key.** Understanding these helps predict how elasticity might change in different situations.
*   **Elasticity impacts total revenue.** For PED, elastic demand means price increases decrease revenue, and inelastic demand means price increases increase revenue.
*   **YED classifies goods.** Normal, luxury, and inferior goods have distinct YED values.
*   **CPED reveals relationships.** Substitutes have positive CPED, complements have negative CPED, and unrelated goods have zero CPED.
*   **PES reflects supplier flexibility.** Elastic supply means suppliers can easily change output; inelastic supply means they cannot.
*   **Engineers use elasticity for informed decision-making** in pricing, forecasting, planning, and investment.

---

### Practice Questions and Exercises

**Question 1:**

A firm manufactures specialized sensors. They currently sell 20,000 units at \$50 per unit. They are considering increasing the price to \$60, and market research suggests that at this new price, they will sell 15,000 units.

a) Calculate the Price Elasticity of Demand (PED) for these sensors using the midpoint formula.
b) Is the demand for these sensors elastic, inelastic, or unit elastic?
c) How will the firm's total revenue change if they increase the price?

**Question 2:**

During an economic boom, average household incomes rise by 15%. A company that produces luxury electric vehicles sees a 25% increase in the demand for its vehicles.

a) Calculate the Income Elasticity of Demand (YED) for these luxury vehicles.
b) What type of good are these luxury vehicles?

**Question 3:**

The price of a popular brand of high-speed internet service increases by 8%. As a result, the demand for a competing brand of fiber optic internet service increases by 12%.

a) Calculate the Cross-Price Elasticity of Demand (CPED) between these two internet services.
b) What is the relationship between the two brands of internet service?

**Question 4:**

A manufacturer of steel beams finds that when the market price for steel beams increases by 5%, they can increase the quantity of steel beams supplied by 4% in the short run.

a) Calculate the Price Elasticity of Supply (PES) for steel beams.
b) Is the supply of steel beams elastic, inelastic, or unit elastic in the short run?

---

### Answers to Practice Questions

**Answer 1:**

a) **PED Calculation:**
    *   $Q_1 = 20,000$, $Q_2 = 15,000$
    *   $P_1 = \$50$, $P_2 = \$60$
    *   Change in Quantity Demanded = $15,000 - 20,000 = -5,000$
    *   Average Quantity = $(20,000 + 15,000) / 2 = 17,500$
    *   % Change in Quantity Demanded = $(-5,000 / 17,500) * 100\% \approx -28.57\%$
    *   Change in Price = $\$60 - \$50 = \$10$
    *   Average Price = $(\$50 + \$60) / 2 = \$55$
    *   % Change in Price = $(\$10 / \$55) * 100\% \approx 18.18\%$
    *   PED = $-28.57\% / 18.18\% \approx -1.57$

b) **Interpretation:** The PED is approximately -1.57. Since the absolute value of PED (1.57) is greater than 1, the demand is **elastic**.

c) **Total Revenue Change:**
    *   Initial Revenue = $20,000 \text{ units} * \$50/\text{unit} = \$1,000,000$
    *   New Revenue = $15,000 \text{ units} * \$60/\text{unit} = \$900,000$
    *   The firm's total revenue will **decrease** by \$100,000 if they increase the price.

**Answer 2:**

a) **YED Calculation:**
    *   % Change in Quantity Demanded = +25%
    *   % Change in Income = +15%
    *   YED = $+25\% / +15\% \approx +1.67$

b) **Interpretation:** The YED is approximately +1.67. Since YED > 1, these luxury electric vehicles are **luxury goods**.

**Answer 3:**

a) **CPED Calculation:**
    *   % Change in Price of Brand X = +8%
    *   % Change in Quantity Demanded of Brand Y = +12%
    *   CPED = $+12\% / +8\% = +1.5$

b) **Relationship:** The CPED is +1.5. Since CPED > 0, the two brands of internet service are **substitutes**.

**Answer 4:**

a) **PES Calculation:**
    *   % Change in Price = +5%
    *   % Change in Quantity Supplied = +4%
    *   PES = $+4\% / +5\% = +0.8$

b) **Interpretation:** The PES is +0.8. Since the value of PES is between 0 and 1 (0 < PES < 1), the supply of steel beams is **inelastic** in the short run.
