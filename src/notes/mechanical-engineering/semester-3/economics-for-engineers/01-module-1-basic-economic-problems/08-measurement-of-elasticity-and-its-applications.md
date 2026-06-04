---
title: "measurement of elasticity and its applications"
subject: "ECONOMICS FOR ENGINEERS"
module: "Module 1: Basic economic problems"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462dd9"
status: "completed"
scrapedAt: "2026-05-20T17:48:10.100Z"
---
# ECONOMICS FOR ENGINEERS - Module 1: Basic Economic Problems

## Topic: Measurement of Elasticity and Its Applications

### 1. Introduction to Elasticity

Elasticity is a fundamental concept in economics that measures the responsiveness of one economic variable to a change in another. In the context of engineering economics, understanding elasticity is crucial for making informed decisions regarding pricing, production, and market strategy. It helps engineers understand how changes in factors like price, income, or the price of related goods will impact the demand or supply of a product or service.

**Key Concept:** Elasticity quantifies the *percentage change* in one variable in response to a *percentage change* in another. This percentage-based approach ensures that the measurement is independent of the units of the variables involved.

**Learning Outcome Alignment:**
*   **CO1 (K2):** Understanding the concept of elasticity is directly addressed here.
*   **CO2 (K3):** Applying elasticity concepts to costs and revenue will be covered in the applications section.

---

### 2. Types of Elasticity

There are several key types of elasticity relevant to engineering economics:

#### 2.1. Price Elasticity of Demand (PED)

**Definition:** The responsiveness of the quantity demanded of a good or service to a change in its price. It measures how much the quantity demanded changes when the price changes, assuming all other factors remain constant.

**Formula:**

$E_d = \frac{\text{\% Change in Quantity Demanded}}{\text{\% Change in Price}}$

**Calculation:**

$E_d = \frac{\frac{\Delta Q_d}{Q_d}}{\frac{\Delta P}{P}}$

Where:
*   $\Delta Q_d$ = Change in Quantity Demanded
*   $Q_d$ = Original Quantity Demanded
*   $\Delta P$ = Change in Price
*   $P$ = Original Price

**Interpretation of PED Values:**

*   **Elastic Demand ($|E_d| > 1$):** A small change in price leads to a proportionally larger change in quantity demanded. Consumers are highly responsive to price changes.
    *   *Example:* If a 10% price increase leads to a 20% decrease in demand, the demand is elastic.
*   **Inelastic Demand ($|E_d| < 1$):** A change in price leads to a proportionally smaller change in quantity demanded. Consumers are not very responsive to price changes.
    *   *Example:* If a 10% price increase leads to only a 5% decrease in demand, the demand is inelastic.
*   **Unit Elastic Demand ($|E_d| = 1$):** The percentage change in quantity demanded is exactly equal to the percentage change in price.
    *   *Example:* If a 10% price increase leads to a 10% decrease in demand, the demand is unit elastic.
*   **Perfectly Inelastic Demand ($E_d = 0$):** The quantity demanded does not change regardless of the price. This is theoretical.
    *   *Example:* Essential life-saving medication where consumers will buy the same amount regardless of price.
*   **Perfectly Elastic Demand ($|E_d| = \infty$):** Consumers will buy an infinite amount at a specific price but nothing at a higher price. This is also theoretical, often associated with perfectly competitive markets.

**Important Note on Sign:** Price elasticity of demand is typically expressed as a negative value due to the law of demand (price and quantity demanded move in opposite directions). However, for convenience in interpretation, we often refer to the absolute value.

**Factors Affecting PED:**

*   **Availability of Substitutes:** More substitutes lead to higher elasticity (e.g., different brands of the same product).
*   **Necessity vs. Luxury:** Necessities tend to be inelastic, while luxuries are elastic.
*   **Proportion of Income:** Goods that consume a larger portion of income tend to be more elastic.
*   **Time Horizon:** Demand becomes more elastic over longer periods as consumers have more time to adjust.

**Textbook Reference:**
*   **Geetika, Piyali Ghosh & Chodhury (2015), Managerial Economics:** This textbook provides a detailed explanation of PED, its calculation, interpretation, and the factors influencing it. It likely uses examples relevant to business decisions.
*   **Thuesen, Fabrycky (1966), Engineering Economy:** While older, this book might touch upon demand principles as they relate to product lifecycle and market acceptance, indirectly relevant to PED.

#### 2.2. Income Elasticity of Demand (IED)

**Definition:** The responsiveness of the quantity demanded of a good or service to a change in consumers' income, assuming all other factors remain constant.

**Formula:**

$E_i = \frac{\text{\% Change in Quantity Demanded}}{\text{\% Change in Income}}$

**Calculation:**

$E_i = \frac{\frac{\Delta Q_d}{Q_d}}{\frac{\Delta I}{I}}$

Where:
*   $\Delta Q_d$ = Change in Quantity Demanded
*   $Q_d$ = Original Quantity Demanded
*   $\Delta I$ = Change in Income
*   $I$ = Original Income

**Interpretation of IED Values:**

*   **Normal Goods ($E_i > 0$):** As income rises, the quantity demanded increases.
    *   **Income Elastic ($E_i > 1$):** Demand increases more than proportionally to income. These are often considered luxuries or superior goods.
        *   *Example:* Luxury cars, high-end electronics.
    *   **Income Inelastic ($0 < E_i < 1$):** Demand increases less than proportionally to income. These are often necessities.
        *   *Example:* Food, basic clothing.
*   **Inferior Goods ($E_i < 0$):** As income rises, the quantity demanded decreases. Consumers switch to better alternatives.
    *   *Example:* Generic brand products, public transportation (as income rises, people might buy cars).

**Learning Outcome Alignment:**
*   **CO1 (K2):** Understanding how income affects demand.
*   **CO2 (K3):** Informing product development and marketing strategies based on income elasticity.

**Textbook Reference:**
*   **Geetika, Piyali Ghosh & Chodhury (2015), Managerial Economics:** Likely covers IED extensively, explaining its implications for product classification and market targeting.

#### 2.3. Cross-Price Elasticity of Demand (CPED)

**Definition:** The responsiveness of the quantity demanded of one good (Good A) to a change in the price of another good (Good B), assuming all other factors remain constant.

**Formula:**

$E_{xy} = \frac{\text{\% Change in Quantity Demanded of Good A}}{\text{\% Change in Price of Good B}}$

**Calculation:**

$E_{xy} = \frac{\frac{\Delta Q_{dA}}{Q_{dA}}}{\frac{\Delta P_B}{P_B}}$

Where:
*   $\Delta Q_{dA}$ = Change in Quantity Demanded of Good A
*   $Q_{dA}$ = Original Quantity Demanded of Good A
*   $\Delta P_B$ = Change in Price of Good B
*   $P_B$ = Original Price of Good B

**Interpretation of CPED Values:**

*   **Substitute Goods ($E_{xy} > 0$):** An increase in the price of Good B leads to an increase in the demand for Good A. Consumers switch to the relatively cheaper substitute.
    *   *Example:* If the price of coffee increases, the demand for tea might increase (substitutes).
*   **Complementary Goods ($E_{xy} < 0$):** An increase in the price of Good B leads to a decrease in the demand for Good A. The goods are consumed together.
    *   *Example:* If the price of printers increases, the demand for printer ink cartridges might decrease (complements).
*   **Unrelated Goods ($E_{xy} \approx 0$):** A change in the price of Good B has no significant effect on the demand for Good A.
    *   *Example:* The price of gasoline and the demand for shoes are likely unrelated.

**Learning Outcome Alignment:**
*   **CO1 (K2):** Understanding relationships between different goods.
*   **CO2 (K3):** Informing pricing strategies for products that have substitutes or complements.

**Textbook Reference:**
*   **Geetika, Piyali Ghosh & Chodhury (2015), Managerial Economics:** Will provide detailed insights into CPED and its strategic importance for firms.

#### 2.4. Price Elasticity of Supply (PES)

**Definition:** The responsiveness of the quantity supplied of a good or service to a change in its price, assuming all other factors remain constant.

**Formula:**

$E_s = \frac{\text{\% Change in Quantity Supplied}}{\text{\% Change in Price}}$

**Calculation:**

$E_s = \frac{\frac{\Delta Q_s}{Q_s}}{\frac{\Delta P}{P}}$

Where:
*   $\Delta Q_s$ = Change in Quantity Supplied
*   $Q_s$ = Original Quantity Supplied
*   $\Delta P$ = Change in Price
*   $P$ = Original Price

**Interpretation of PES Values:**

*   **Elastic Supply ($E_s > 1$):** A small change in price leads to a proportionally larger change in quantity supplied. Producers can easily increase production.
*   **Inelastic Supply ($E_s < 1$):** A change in price leads to a proportionally smaller change in quantity supplied. Producers find it difficult to increase production.
*   **Unit Elastic Supply ($E_s = 1$):** The percentage change in quantity supplied is exactly equal to the percentage change in price.
*   **Perfectly Inelastic Supply ($E_s = 0$):** The quantity supplied is fixed, regardless of price. (e.g., land in a fixed location).
*   **Perfectly Elastic Supply ($E_s = \infty$):** Producers will supply an infinite amount at a specific price but nothing below it. (e.g., in a perfectly competitive market).

**Factors Affecting PES:**

*   **Availability of Inputs:** Easier access to inputs leads to higher elasticity.
*   **Time Horizon:** Supply becomes more elastic over longer periods as firms can adjust production capacity.
*   **Mobility of Factors of Production:** How easily resources can be shifted to produce a good.
*   **Excess Capacity:** Firms with idle capacity can respond more quickly to price changes.
*   **Storage Capacity:** The ability to store goods can influence supply responsiveness.

**Learning Outcome Alignment:**
*   **CO1 (K2):** Understanding supply behavior.
*   **CO2 (K3):** Understanding how firms respond to market price changes.

**Textbook Reference:**
*   **Geetika, Piyali Ghosh & Chodhury (2015), Managerial Economics:** Will cover PES and its determinants.

---

### 3. Applications of Elasticity in Engineering Economics

Understanding elasticity is not just theoretical; it has direct practical applications for engineers in decision-making:

#### 3.1. Pricing Decisions and Revenue Management

*   **PED and Total Revenue:** The relationship between PED and total revenue (TR) is crucial for pricing.
    *   If demand is **elastic** ($|E_d| > 1$), **lowering** the price will **increase** total revenue, and **raising** the price will **decrease** total revenue.
        *   *Engineering Application:* A company launching a new product might use penetration pricing (low initial price) if demand is expected to be elastic, aiming to gain market share and boost revenue through volume.
    *   If demand is **inelastic** ($|E_d| < 1$), **raising** the price will **increase** total revenue, and **lowering** the price will **decrease** total revenue.
        *   *Engineering Application:* A utility company providing an essential service (like water or electricity) might find demand is inelastic and can strategically adjust tariffs to increase revenue.
    *   If demand is **unit elastic** ($|E_d| = 1$), changing the price will not affect total revenue.
*   **CPED and Product Bundling:** Knowing if products are substitutes or complements helps in product bundling and promotional strategies.
    *   *Engineering Application:* If two products are complements (e.g., a software and its add-on), bundling them might increase overall sales and revenue. If they are substitutes, a firm might price them competitively or offer discounts on one to drive sales of the other.

#### 3.2. Forecasting and Market Analysis

*   **IED and Market Forecasting:** Understanding how demand for a product changes with income is vital for forecasting future sales, especially in economies experiencing growth or recession.
    *   *Engineering Application:* An engineer designing new housing projects would consider IED. In an expanding economy with rising incomes, demand for higher-end housing (income elastic) will likely increase significantly. In a downturn, demand for inferior goods might increase.
*   **PED for Demand Forecasting:** Estimating PED allows engineers to forecast the impact of potential price changes on sales volume.
    *   *Engineering Application:* Before releasing a new model of a machine tool, an engineering firm can estimate its PED to predict sales at different price points.

#### 3.3. Government Policy and Taxation

*   **PED and Tax Incidence:** Understanding PED helps governments predict who will bear the burden of a tax.
    *   If demand is **inelastic**, consumers will bear a larger portion of the tax burden, as they will continue to buy the good even if prices rise.
        *   *Engineering Application:* Governments might tax goods with inelastic demand (like cigarettes or gasoline) to generate stable revenue. Engineers involved in projects related to these industries need to be aware of potential tax impacts.
    *   If demand is **elastic**, producers will bear a larger portion of the tax burden, as consumers will switch to alternatives if prices rise significantly.

#### 3.4. Production Planning and Resource Allocation

*   **PES and Production Decisions:** The elasticity of supply influences how quickly a firm can respond to market signals.
    *   *Engineering Application:* If a firm's product has elastic supply (easy to increase production), it can ramp up production to meet unexpected demand surges. If supply is inelastic (difficult to increase production), the firm might need to invest in capacity expansion or manage demand more carefully. This impacts decisions on capital investment in machinery and facilities.

#### 3.5. Cost-Benefit Analysis and Project Evaluation

*   **Elasticity in Estimating Benefits:** In projects where demand for the output is affected by price, understanding PED is crucial for accurately estimating the benefits that accrue from the project.
    *   *Engineering Application:* For a transportation infrastructure project (e.g., a new toll road), understanding the PED of toll charges is critical for forecasting revenue and thus for evaluating the project's economic viability.

**Learning Outcome Alignment:**
*   **CO2 (K3):** Directly applies elasticity to decision-making regarding costs and revenue.
*   **CO3 (K2):** Indirectly relevant as economic policies (taxes) are influenced by elasticity.
*   **CO4 (K3):** Useful in break-even and cost-benefit analyses when demand elasticity is a factor.

**Textbook References:**
*   **Geetika, Piyali Ghosh & Chodhury (2015), Managerial Economics:** This is the primary source for understanding the business applications of elasticity in pricing, revenue, and market strategy.
*   **Thuesen, Fabrycky (1966), Engineering Economy:** While not focused on elasticity as a core concept, it likely discusses demand and revenue as they relate to project feasibility and economic analysis, which are influenced by elasticity.
*   **Paneerselvam (2012), Engineering Economics:** This text will likely bridge economic concepts with engineering decision-making, thus providing practical contexts for elasticity.
*   **Blank, Tarquin (7th Ed.), Engineering Economy:** Similar to Thuesen and Fabrycky, this reference will provide broader context for economic decision-making where elasticity plays a role in revenue and demand estimation.
*   **Park (2001), Contemporary Engineering Economics:** This book will likely offer modern perspectives on how economic principles, including elasticity, are applied in contemporary engineering projects.

---

### 4. Measurement Challenges and Practical Considerations

*   **Data Collection:** Accurately collecting data for quantity demanded/supplied and prices over a period, while holding other factors constant, is challenging.
*   **Estimating Other Factors:** Isolating the impact of price on demand/supply from other influences (income, advertising, competitor actions) requires sophisticated statistical techniques (e.g., regression analysis).
*   **Dynamic Nature:** Elasticities are not static; they can change over time due to evolving market conditions, technology, and consumer preferences.
*   **Specifics of Engineering Products:** For highly specialized engineering products or services, market data might be scarce, making elasticity estimation difficult. Engineers might rely on market research, surveys, and expert opinions.

**Textbook Reference:**
*   **Geetika, Piyali Ghosh & Chodhury (2015), Managerial Economics:** Likely discusses empirical methods for estimating elasticities and the challenges involved.

---

### 5. Practice Questions

**Question 1:**
A company sells a specialized industrial component. Currently, they sell 1,000 units per month at $50 per unit. They are considering a price increase to $55 per unit and estimate that this will reduce sales to 900 units per month. Calculate the Price Elasticity of Demand (PED) for this component. Based on your calculation, what will be the impact of this price increase on the company's total revenue?

**Question 2:**
Consider two products: Product X (a necessity like basic medical supplies) and Product Y (a luxury item like advanced diagnostic equipment). Which product is likely to have a higher Price Elasticity of Demand? Explain why.

**Question 3:**
If the price of electric cars decreases by 10%, and the demand for gasoline-powered cars decreases by 5%, what is the Cross-Price Elasticity of Demand (CPED) between electric cars and gasoline-powered cars? What does this value tell you about the relationship between these two types of vehicles?

**Question 4:**
Explain how the Price Elasticity of Supply (PES) for a newly developed, complex machinery might differ from that of a mass-produced commodity. How would this difference affect production decisions in response to a sudden surge in demand?

---

### 6. Answers to Practice Questions

**Answer 1:**
*   **Calculation of PED:**
    *   Original Price ($P$) = $50
    *   New Price ($P'$) = $55
    *   Change in Price ($\Delta P$) = $55 - $50 = $5
    *   Original Quantity ($Q_d$) = 1,000
    *   New Quantity ($Q_d'$) = 900
    *   Change in Quantity ($\Delta Q_d$) = 900 - 1,000 = -100

    *   Percentage Change in Quantity Demanded = $(\frac{-100}{1000}) \times 100\% = -10\%$
    *   Percentage Change in Price = $(\frac{5}{50}) \times 100\% = 10\%$

    *   $E_d = \frac{\text{\% Change in Quantity Demanded}}{\text{\% Change in Price}} = \frac{-10\%}{10\%} = -1$

    *   The Price Elasticity of Demand is -1. This means the demand is **unit elastic**.

*   **Impact on Total Revenue:**
    *   Original Total Revenue = Price × Quantity = $50 \times 1000 = $50,000$
    *   New Total Revenue = New Price × New Quantity = $55 \times 900 = $49,500$

    *   Since the demand is unit elastic, a price increase leads to a very slight decrease in total revenue. In a perfectly unit elastic scenario ($E_d = -1$), total revenue would remain unchanged. The slight decrease here indicates demand is very close to unit elastic.

**Answer 2:**
Product Y (luxury item like advanced diagnostic equipment) is likely to have a higher Price Elasticity of Demand than Product X (a necessity like basic medical supplies).
*   **Explanation:**
    *   **Necessities (Product X):** Consumers need basic medical supplies and have few readily available substitutes. Therefore, even if the price increases, they will still likely purchase roughly the same quantity, making demand inelastic.
    *   **Luxuries (Product Y):** Advanced diagnostic equipment, while valuable, is not essential for survival. If the price increases, organizations or individuals may postpone purchases, seek out cheaper alternatives, or reduce their spending on it, making demand elastic.

**Answer 3:**
*   **Calculation of CPED:**
    *   Percentage Change in Quantity Demanded of Gasoline Cars = -5%
    *   Percentage Change in Price of Electric Cars = -10%

    *   $E_{xy} = \frac{\text{\% Change in Quantity Demanded of Gasoline Cars}}{\text{\% Change in Price of Electric Cars}} = \frac{-5\%}{-10\%} = 0.5$

*   **Interpretation:** The CPED is +0.5. A positive CPED indicates that the two goods are **substitutes**. When the price of electric cars falls, consumers switch from gasoline-powered cars to electric cars, leading to a decrease in the demand for gasoline cars.

**Answer 4:**
*   **PES for Newly Developed Machinery:** The Price Elasticity of Supply (PES) for newly developed, complex machinery is likely to be **inelastic** in the short run.
    *   **Reasons:** Production of complex machinery often requires specialized components, highly skilled labor, and significant lead times for manufacturing and assembly. It is difficult for manufacturers to quickly ramp up production in response to a price change.
*   **PES for Mass-Produced Commodity:** The PES for a mass-produced commodity is likely to be **elastic** in the short to medium run.
    *   **Reasons:** Manufacturers have established production lines, readily available raw materials, and can often increase output relatively quickly by utilizing existing capacity or operating overtime.

*   **Impact on Production Decisions:**
    *   **Inelastic Supply (Complex Machinery):** A sudden surge in demand would lead to significant price increases and potentially long waiting times for delivery. Manufacturers might be hesitant to make rapid production adjustments due to high costs or technical constraints. The focus might be on securing inputs and managing customer expectations.
    *   **Elastic Supply (Commodity):** A surge in demand would likely lead to a modest price increase as production can be scaled up more readily. Producers would be motivated to increase output to meet the higher demand and capture more revenue.

---

### 7. Important Points to Remember

*   **Elasticity is a measure of responsiveness**, expressed in percentage terms.
*   **PED** is crucial for pricing decisions and revenue forecasting.
    *   $|E_d| > 1$: Elastic (Price up, TR down)
    *   $|E_d| < 1$: Inelastic (Price up, TR up)
    *   $|E_d| = 1$: Unit Elastic (Price up, TR unchanged)
*   **IED** classifies goods and helps forecast demand based on income changes.
    *   $E_i > 0$: Normal Good (Income up, Demand up)
    *   $E_i < 0$: Inferior Good (Income up, Demand down)
*   **CPED** reveals relationships between goods.
    *   $E_{xy} > 0$: Substitutes
    *   $E_{xy} < 0$: Complements
*   **PES** impacts a firm's ability to respond to market changes.
    *   $E_s > 1$: Elastic (Supply responsive to price)
    *   $E_s < 1$: Inelastic (Supply not very responsive to price)
*   **Factors like availability of substitutes, necessity vs. luxury, time period, and production capacity** significantly influence elasticities.
*   **Accurate estimation of elasticities is challenging** due to data collection and isolating variable effects.

---

### 8. Alignment with Course Outcomes

*   **CO1 (K2):** This entire topic directly contributes to understanding the concepts of demand, supply, and elasticity, a core requirement of CO1.
*   **CO2 (K3):** The applications of elasticity in pricing and revenue management directly enable engineers to develop decision-making capabilities regarding costs and revenue, as stated in CO2.
*   **CO3 (K2):** While not directly about monetary/fiscal policy, understanding how consumers respond to price and income changes (driven by elasticity) provides foundational knowledge for understanding how economic policies might impact markets.
*   **CO4 (K3):** Elasticity can be a factor in cost-benefit analysis (e.g., estimating project revenues based on demand elasticity) and break-even analysis (understanding sales volume at different prices), supporting the application of these techniques as outlined in CO4.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
