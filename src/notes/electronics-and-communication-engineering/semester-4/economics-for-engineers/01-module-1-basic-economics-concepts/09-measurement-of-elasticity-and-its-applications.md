---
title: "measurement of elasticity and its applications"
subject: "ECONOMICS FOR ENGINEERS"
module: "Module 1: Basic Economics Concepts"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe7a9"
status: "completed"
scrapedAt: "2026-05-23T17:48:36.099Z"
---
This is a comprehensive set of study notes for the topic "Measurement of Elasticity and its Applications" within the context of "Economics for Engineers." These notes are designed to cover the learning outcomes, incorporate content from specified textbooks, and align with the course outcomes.

---

# ECONOMICS FOR ENGINEERS

## Module 1: Basic Economic Concepts

### Topic: Measurement of Elasticity and its Applications

**Learning Outcomes:**

*   Understand the concept of elasticity and its different types.
*   Learn how to measure elasticity using various methods.
*   Explore the practical applications of elasticity in engineering and business decision-making.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Describe the fundamentals of various economic issues using laws and learn the concepts of demand, supply, elasticity and production function. (This topic directly addresses the "elasticity" component of CO1).
*   **CO2 (K3):** Develop decision making capability by applying concepts relating to costs and revenue, and acquire knowledge regarding the functioning of firms in different market situations. (Understanding elasticity is crucial for revenue analysis and market strategies).
*   **CO3 (K2):** Outline the macroeconomic principles of monetary and fiscal systems, national income and stock market. (While not directly macroeconomics, elasticity concepts can influence microeconomic decisions that have macro implications).
*   **CO4 (K3):** Make use of the possibilities of value analysis and engineering, and solve simple business problems using break even analysis, cost benefit analysis and capital budgeting techniques. (Elasticity is a key factor in cost-benefit analysis and understanding pricing strategies).

---

## 1. Introduction to Elasticity

**Definition:** Elasticity is a measure of the responsiveness of one variable to a change in another variable. In economics, it typically refers to the responsiveness of quantity demanded or supplied to changes in price, income, or the price of related goods.

**Why is Elasticity Important for Engineers?**

Engineers, particularly those in managerial or product development roles, need to understand elasticity to:

*   **Price Products Effectively:** Determine optimal pricing strategies to maximize revenue and profit.
*   **Forecast Demand:** Predict how changes in economic conditions or product features will affect demand.
*   **Analyze Market Behavior:** Understand how competitors' pricing or market shifts will impact their own products.
*   **Make Investment Decisions:** Evaluate the potential impact of price changes on the profitability of projects.
*   **Conduct Cost-Benefit Analysis:** Accurately assess the benefits of projects that involve price-sensitive products.

---

## 2. Types of Elasticity

There are three primary types of elasticity in economics:

### 2.1. Price Elasticity of Demand (PED)

**Definition:** Price Elasticity of Demand measures the responsiveness of the quantity demanded of a good or service to a change in its price, holding all other factors constant.

**Formula:**

*   **Point Elasticity:** Used when the change in price is very small.
    $E_d = \frac{\% \Delta Q_d}{\% \Delta P}$
    Where:
    *   $E_d$ = Price Elasticity of Demand
    *   $\% \Delta Q_d$ = Percentage change in quantity demanded
    *   $\% \Delta P$ = Percentage change in price

*   **Arc Elasticity:** Used when the change in price is significant. It calculates elasticity over a range of prices.
    $E_d = \frac{(Q_2 - Q_1) / ((Q_2 + Q_1)/2)}{(P_2 - P_1) / ((P_2 + P_1)/2)}$
    Where:
    *   $Q_1$, $P_1$ = Initial quantity and price
    *   $Q_2$, $P_2$ = New quantity and price

**Interpretation of PED Values:**

*   **$|E_d| > 1$ (Elastic Demand):** A small percentage change in price leads to a larger percentage change in quantity demanded. Consumers are very responsive to price changes.
*   **$|E_d| < 1$ (Inelastic Demand):** A percentage change in price leads to a smaller percentage change in quantity demanded. Consumers are not very responsive to price changes.
*   **$|E_d| = 1$ (Unit Elastic Demand):** A percentage change in price leads to an equal percentage change in quantity demanded.
*   **$|E_d| = 0$ (Perfectly Inelastic Demand):** Quantity demanded does not change at all, regardless of price changes. This is rare.
*   **$|E_d| = \infty$ (Perfectly Elastic Demand):** Any increase in price will cause quantity demanded to drop to zero, and any decrease in price will cause demand to be infinitely large. This is also rare.

**Determinants of PED:**

*   **Availability of Substitutes:** More substitutes lead to higher elasticity (e.g., if the price of one brand of soda increases, consumers can easily switch to another).
*   **Necessity vs. Luxury:** Necessities tend to have inelastic demand (e.g., life-saving medication), while luxuries have elastic demand (e.g., a sports car).
*   **Proportion of Income Spent:** Goods that consume a larger portion of income tend to have higher elasticity (e.g., rent).
*   **Time Horizon:** Demand tends to be more elastic in the long run than in the short run, as consumers have more time to adjust (e.g., finding alternatives to gasoline if prices rise).
*   **Definition of the Market:** A broadly defined market (e.g., food) is less elastic than a narrowly defined market (e.g., a specific brand of organic apples).

**Relevance for Engineers:** Understanding PED helps in making pricing decisions for products. If a product has elastic demand, increasing its price may lead to a significant drop in sales and revenue. If it has inelastic demand, increasing price might increase revenue.

---

### 2.2. Income Elasticity of Demand (IED)

**Definition:** Income Elasticity of Demand measures the responsiveness of the quantity demanded of a good or service to a change in consumers' income, holding all other factors constant.

**Formula:**

$E_i = \frac{\% \Delta Q_d}{\% \Delta I}$
Where:
*   $E_i$ = Income Elasticity of Demand
*   $\% \Delta Q_d$ = Percentage change in quantity demanded
*   $\% \Delta I$ = Percentage change in income

**Interpretation of IED Values:**

*   **$E_i > 0$ (Normal Good):** As income increases, demand for the good increases.
    *   **$0 < E_i < 1$ (Necessity):** Demand increases with income, but at a slower rate than income (e.g., staple foods).
    *   **$E_i > 1$ (Luxury Good):** Demand increases with income at a faster rate than income (e.g., luxury cars, high-end electronics).
*   **$E_i < 0$ (Inferior Good):** As income increases, demand for the good decreases (e.g., public transport, cheaper generic brands). Consumers switch to better alternatives.
*   **$E_i = 0$ (Income Neutral Good):** Demand does not change with income.

**Relevance for Engineers:** Understanding IED helps in forecasting demand for products based on economic growth and consumer income trends. For example, if a company produces luxury goods, it can expect higher growth during periods of rising incomes. Conversely, if it produces inferior goods, it might see declining sales as the economy improves.

---

### 2.3. Cross-Price Elasticity of Demand (CPED)

**Definition:** Cross-Price Elasticity of Demand measures the responsiveness of the quantity demanded of one good to a change in the price of another good, holding all other factors constant.

**Formula:**

$E_{xy} = \frac{\% \Delta Q_{dx}}{\% \Delta P_y}$
Where:
*   $E_{xy}$ = Cross-price Elasticity of Demand of good X with respect to the price of good Y.
*   $\% \Delta Q_{dx}$ = Percentage change in quantity demanded of good X
*   $\% \Delta P_y$ = Percentage change in price of good Y

**Interpretation of CPED Values:**

*   **$E_{xy} > 0$ (Substitute Goods):** If the price of good Y increases, the demand for good X increases. Consumers switch from the more expensive good Y to good X (e.g., Coke and Pepsi).
*   **$E_{xy} < 0$ (Complementary Goods):** If the price of good Y increases, the demand for good X decreases. The goods are often used together, so an increase in the price of one makes the other less attractive (e.g., printers and ink cartridges).
*   **$E_{xy} = 0$ (Unrelated Goods):** Changes in the price of good Y have no effect on the demand for good X (e.g., cars and bread).

**Relevance for Engineers:** This is crucial for understanding competitive markets and the impact of pricing decisions of related products (whether they are substitutes or complements). For example, if a company manufactures printers, it needs to consider how a price change in competing printers will affect its own sales.

---

### 2.4. Price Elasticity of Supply (PES)

**Definition:** Price Elasticity of Supply measures the responsiveness of the quantity supplied of a good or service to a change in its price, holding all other factors constant.

**Formula:**

$E_s = \frac{\% \Delta Q_s}{\% \Delta P}$
Where:
*   $E_s$ = Price Elasticity of Supply
*   $\% \Delta Q_s$ = Percentage change in quantity supplied
*   $\% \Delta P$ = Percentage change in price

**Interpretation of PES Values:**

*   **$E_s > 1$ (Elastic Supply):** A percentage change in price leads to a larger percentage change in quantity supplied. Producers can easily increase production in response to price increases.
*   **$E_s < 1$ (Inelastic Supply):** A percentage change in price leads to a smaller percentage change in quantity supplied. Producers find it difficult to increase production quickly in response to price increases.
*   **$E_s = 1$ (Unit Elastic Supply):** A percentage change in price leads to an equal percentage change in quantity supplied.
*   **$E_s = 0$ (Perfectly Inelastic Supply):** Quantity supplied does not change regardless of price. This is typical for goods with fixed supply (e.g., land).
*   **$E_s = \infty$ (Perfectly Elastic Supply):** Producers are willing to supply any quantity at a specific price, but nothing above or below it. This is rare.

**Determinants of PES:**

*   **Availability of Inputs:** If inputs are readily available and easy to acquire, supply is more elastic.
*   **Time Horizon:** Supply is generally more elastic in the long run than in the short run, as producers have more time to adjust production levels.
*   **Mobility of Factors of Production:** If factors of production (labor, capital) can easily shift between industries, supply is more elastic.
*   **Capacity of Production:** Firms with excess capacity can respond to price increases more readily than those operating at full capacity.

**Relevance for Engineers:** Understanding PES helps in analyzing the production capacity and flexibility of a manufacturing process. If supply is inelastic, price fluctuations can significantly impact the availability of the product. This can inform decisions about inventory management and production scaling.

---

## 3. Applications of Elasticity in Engineering and Business

Elasticity is a fundamental concept with wide-ranging applications in engineering and business decision-making, as highlighted by our course outcomes.

### 3.1. Pricing Strategies and Revenue Management (CO2)

*   **Setting Optimal Prices:** Businesses use PED to determine prices that maximize revenue.
    *   **Elastic Demand ($|E_d| > 1$):** Lowering prices can increase total revenue because the percentage increase in quantity demanded is greater than the percentage decrease in price.
    *   **Inelastic Demand ($|E_d| < 1$):** Raising prices can increase total revenue because the percentage decrease in quantity demanded is smaller than the percentage increase in price.
    *   **Unit Elastic Demand ($|E_d| = 1$):** Total revenue remains unchanged with price changes.
*   **Promotional Pricing:** Understanding PED is crucial for evaluating the effectiveness of discounts and sales. A deep discount on an elastic product can significantly boost sales and revenue.
*   **Price Discrimination:** Companies can charge different prices to different customer segments if they have different elasticities of demand. For example, airlines charge business travelers (less elastic demand) more than leisure travelers (more elastic demand).

**Example:** A company manufacturing specialized electronic components for the automotive industry finds that the demand for its product is relatively inelastic ($|E_d| = 0.5$) because these components are critical and have few substitutes in certain car models. This knowledge allows them to increase prices by 10% without a significant drop in sales, thus increasing total revenue.

*(Referenced in: Managerial Economics by Geetika et al., Chapters on Demand and Pricing).*

### 3.2. Market Analysis and Forecasting (CO1, CO2)

*   **Predicting Sales Volume:** By understanding PED, companies can forecast how changes in their product's price, or the prices of competitors' products (using CPED), will affect sales volume.
*   **Economic Forecasting:** IED helps predict how changes in national income or economic growth will affect demand for different types of products (necessities, luxuries, inferior goods). This is vital for long-term strategic planning and investment.
*   **New Product Development:** Understanding how consumers will react to price changes and how demand might be affected by income levels is crucial when introducing new products.

**Example:** An engineering firm specializing in renewable energy infrastructure observes that demand for solar panel installation is becoming more elastic as more suppliers enter the market and technology improves, offering more substitutes. They also note that demand is highly income-elastic, indicating it's a luxury good for many homeowners. This informs their strategy to focus on cost-efficiency and target higher-income demographics or government subsidies during economic downturns.

*(Referenced in: Managerial Economics by Geetika et al., Chapters on Demand Forecasting).*

### 3.3. Cost-Benefit Analysis and Investment Decisions (CO4)

*   **Evaluating Project Viability:** When projects involve revenue streams from products, understanding the price elasticity of those products is critical for accurate cost-benefit analysis. If a project's revenue depends on selling a product with elastic demand, potential price drops can significantly alter the project's profitability.
*   **Capital Budgeting:** Decisions about investing in new production capacity or technology should consider the potential impact of price changes on demand and revenue. If a new technology allows for lower production costs but the product has inelastic demand, the company might be able to retain higher prices and achieve greater profitability.

**Example:** A civil engineering firm is proposing a new toll road. They must estimate the elasticity of demand for using the toll road with respect to the toll price. If demand is elastic, a higher toll might deter users, reducing revenue and potentially making the project less financially attractive. If demand is inelastic, a higher toll could significantly boost revenue, improving the project's NPV.

*(Referenced in: Engineering Economy by Thuesen & Fabrycky, Chapters on Economy Studies; Engineering Economics by Paneerselvam, Chapters on Investment Analysis).*

### 3.4. Supply Chain Management and Production Planning (CO1)

*   **Inventory Management:** If a product has inelastic supply, disruptions in production or input availability can lead to significant price volatility. This knowledge informs inventory policies to ensure supply continuity.
*   **Production Capacity Decisions:** Understanding PES helps engineers and managers decide on appropriate production capacities. If supply is elastic, investing in flexible manufacturing systems that can quickly adjust output might be beneficial.

**Example:** An aerospace manufacturer produces critical components. The supply of specialized alloys for these components is found to be quite inelastic due to limited suppliers and long lead times for production. This means that even small increases in demand for aircraft can lead to significant price hikes for these alloys. The engineering team must factor this into their production planning and consider alternative materials or building longer-term supplier relationships.

*(Referenced in: Engineering Economics and analysis by Newman & Lavelle, Chapters on Production and Costs).*

### 3.5. Policy Implications (CO3 - Macroeconomic Link)

While primarily microeconomic, elasticity has macro implications:

*   **Taxation:** Governments consider the elasticity of demand for goods when imposing taxes. Taxes on goods with inelastic demand (e.g., cigarettes, gasoline) generate more stable tax revenue because consumption doesn't fall much.
*   **Subsidies:** Subsidies can be more effective in stimulating demand for goods with elastic demand.

**Example:** A government considering a tax on imported luxury vehicles needs to assess the price elasticity of demand for these vehicles. If demand is highly elastic, the tax might significantly reduce imports, affecting employment in related sectors and potentially leading to less tax revenue than anticipated.

*(Referenced in: Managerial Economics by Geetika et al., Chapters on Market Structures and Pricing Policies).*

---

## 4. Measurement Methods

### 4.1. Calculating Percentage Changes

This is the most common and straightforward method.

**Steps:**

1.  Identify the initial quantity ($Q_1$) and price ($P_1$).
2.  Identify the new quantity ($Q_2$) and price ($P_2$).
3.  Calculate the percentage change in quantity demanded: $\% \Delta Q_d = \frac{Q_2 - Q_1}{Q_1} \times 100$
4.  Calculate the percentage change in price: $\% \Delta P = \frac{P_2 - P_1}{P_1} \times 100$
5.  Calculate the elasticity: $E_d = \frac{\% \Delta Q_d}{\% \Delta P}$

**Example:**
Suppose the price of a high-precision sensor unit drops from $100 to $90. As a result, the quantity demanded increases from 1,000 units to 1,200 units.

*   $\% \Delta Q_d = \frac{1200 - 1000}{1000} \times 100 = \frac{200}{1000} \times 100 = 20\%$
*   $\% \Delta P = \frac{90 - 100}{100} \times 100 = \frac{-10}{100} \times 100 = -10\%$
*   $E_d = \frac{20\%}{-10\%} = -2$

**Interpretation:** The demand for this sensor unit is elastic ($|-2| > 1$). A 10% price reduction led to a 20% increase in quantity demanded.

### 4.2. Using Calculus for Point Elasticity

For continuous demand curves, the point elasticity can be calculated using derivatives.

**Formula:**

$E_d = \frac{dQ_d}{dP} \times \frac{P}{Q_d}$
Where:
*   $\frac{dQ_d}{dP}$ is the derivative of the demand function with respect to price.

**Example:**
Consider a linear demand function: $Q_d = 200 - 2P$.
Let's find the elasticity at $P = \$50$.

1.  First, find the quantity demanded at $P = \$50$:
    $Q_d = 200 - 2(50) = 200 - 100 = 100$ units.
2.  Next, find the derivative of the demand function with respect to price:
    $\frac{dQ_d}{dP} = \frac{d(200 - 2P)}{dP} = -2$
3.  Now, calculate the elasticity:
    $E_d = (-2) \times \frac{50}{100} = -2 \times 0.5 = -1$

**Interpretation:** At a price of $50, the demand is unit elastic.

*(Referenced in: Managerial Economics by Geetika et al., Chapter on Elasticity).*

### 4.3. Using Midpoint Formula (Arc Elasticity)

As mentioned earlier, the midpoint formula (arc elasticity) is used for larger price changes, as it provides a more stable measure by averaging the initial and final quantities and prices.

**Formula:**
$E_d = \frac{(Q_2 - Q_1) / ((Q_1 + Q_2)/2)}{(P_2 - P_1) / ((P_1 + P_2)/2)}$

**Example:**
Using the previous sensor unit example: $P_1 = \$100, Q_1 = 1000$ and $P_2 = \$90, Q_2 = 1200$.

*   Midpoint of Quantities: $(1000 + 1200) / 2 = 2200 / 2 = 1100$
*   Midpoint of Prices: $(100 + 90) / 2 = 190 / 2 = 95$
*   Change in Quantity: $1200 - 1000 = 200$
*   Change in Price: $90 - 100 = -10$

$E_d = \frac{200 / 1100}{-10 / 95} = \frac{0.1818}{-0.1053} \approx -1.73$

**Interpretation:** Using the arc elasticity, the demand is still elastic, but the value is different from the point elasticity calculation. This highlights the importance of using the appropriate method.

---

## 5. Key Concepts and Definitions Summary

*   **Elasticity:** Responsiveness of one variable to a change in another.
*   **Price Elasticity of Demand (PED):** Responsiveness of quantity demanded to price changes.
    *   **Elastic ($|E_d| > 1$):** Sensitive to price.
    *   **Inelastic ($|E_d| < 1$):** Insensitive to price.
    *   **Unit Elastic ($|E_d| = 1$):** Proportional response.
*   **Income Elasticity of Demand (IED):** Responsiveness of quantity demanded to income changes.
    *   **Normal Good ($E_i > 0$):** Demand rises with income.
    *   **Inferior Good ($E_i < 0$):** Demand falls with income.
*   **Cross-Price Elasticity of Demand (CPED):** Responsiveness of demand for one good to price change of another.
    *   **Substitutes ($E_{xy} > 0$):** Price of one rises, demand for other rises.
    *   **Complements ($E_{xy} < 0$):** Price of one rises, demand for other falls.
*   **Price Elasticity of Supply (PES):** Responsiveness of quantity supplied to price changes.
    *   **Elastic ($E_s > 1$):** Producers can easily adjust supply.
    *   **Inelastic ($E_s < 1$):** Producers find it hard to adjust supply.

---

## 6. Important Points to Remember

*   **Sign Convention:** PED is usually negative due to the law of demand, but economists often refer to its absolute value. IED and CPED can be positive or negative, indicating the nature of the goods.
*   **Context is Key:** The elasticity of a product can change over time, with different market conditions, and depending on the specific definition of the good or market.
*   **Engineering Application Focus:** Engineers must translate these economic concepts into practical decisions regarding pricing, forecasting, investment, and production.
*   **Data Requirements:** Accurate measurement of elasticity requires reliable data on prices and quantities traded over time or across different markets.

---

## 7. Practice Questions and Exercises

**Question 1:**
A firm is considering raising the price of its specialized manufacturing equipment by 5%. If the price elasticity of demand for this equipment is -0.4, what will be the expected percentage change in the quantity of equipment demanded?

**Question 2:**
A new high-speed rail line is being introduced. If the income elasticity of demand for rail travel is 1.5, and the economy is expected to grow by 3% next year, what is the expected percentage change in the demand for rail travel? What type of good is this rail travel?

**Question 3:**
The price of gasoline increases by 10%. If the cross-price elasticity of demand between gasoline and electric vehicles is +0.8, what is the expected percentage change in the demand for electric vehicles? Are gasoline and electric vehicles substitutes or complements?

**Question 4:**
A construction company finds that the price elasticity of supply for ready-mix concrete is 0.6. If the demand for concrete increases by 15% due to a surge in construction projects, what is the expected percentage change in the quantity of concrete supplied? What does the elasticity value tell you about the company's ability to meet increased demand?

---

## 8. Answers to Practice Questions

**Answer 1:**
Using the PED formula: $E_d = \frac{\% \Delta Q_d}{\% \Delta P}$
We have $E_d = -0.4$ and $\% \Delta P = 5\%$.
Rearranging the formula to find $\% \Delta Q_d$:
$\% \Delta Q_d = E_d \times \% \Delta P$
$\% \Delta Q_d = -0.4 \times 5\% = -2\%$
The expected percentage change in the quantity of equipment demanded is **-2%**.

**Answer 2:**
Using the IED formula: $E_i = \frac{\% \Delta Q_d}{\% \Delta I}$
We have $E_i = 1.5$ and $\% \Delta I = 3\%$.
Rearranging the formula to find $\% \Delta Q_d$:
$\% \Delta Q_d = E_i \times \% \Delta I$
$\% \Delta Q_d = 1.5 \times 3\% = 4.5\%$
The expected percentage change in demand for rail travel is **4.5%**.
Since the income elasticity of demand is positive ($1.5 > 0$), high-speed rail travel is a **normal good**. Specifically, because $E_i > 1$, it's considered a **luxury good**.

**Answer 3:**
Using the CPED formula: $E_{xy} = \frac{\% \Delta Q_{dx}}{\% \Delta P_y}$
We have $E_{xy} = +0.8$ (where X is electric vehicles and Y is gasoline) and $\% \Delta P_y = 10\%$.
Rearranging the formula to find $\% \Delta Q_{dx}$:
$\% \Delta Q_{dx} = E_{xy} \times \% \Delta P_y$
$\% \Delta Q_{dx} = 0.8 \times 10\% = 8\%$
The expected percentage change in the demand for electric vehicles is **+8%**.
Since the cross-price elasticity is positive ($0.8 > 0$), gasoline and electric vehicles are **substitute goods**.

**Answer 4:**
Using the PES formula: $E_s = \frac{\% \Delta Q_s}{\% \Delta P}$
We have $E_s = 0.6$. The question states the *demand* increases by 15%, implying a shift in the demand curve, which would lead to a higher equilibrium price and thus a higher quantity supplied. We need to find the percentage change in quantity supplied based on the supply elasticity.
Let's assume the price increase caused by the demand shift is such that quantity supplied changes. The question, however, might be interpreted as asking for the *responsiveness of supply* to a price change. If we assume the 15% demand increase leads to a price increase, we need to know the percentage price increase to find the percentage supply increase.

**Revised Interpretation of Question 4:** The question is likely testing the understanding of how supply elasticity relates to responding to market changes. If we assume that the market "clears" and the price adjusts to meet the new demand, we can infer a potential price change. However, without a given price change, let's reframe to understand what the elasticity implies.
The elasticity of supply being 0.6 means that for every 1% increase in price, the quantity supplied will increase by 0.6%. If the *demand* increases by 15%, the price will likely rise. If, for instance, the price rose by 10% due to the demand increase, the quantity supplied would increase by $0.6 \times 10\% = 6\%$.
**However, a more direct interpretation of the question might be a misunderstanding of how supply elasticity is used.** The question implies a scenario where the supply itself is being tested.

Let's rephrase the question slightly for clarity to demonstrate the PES application:
**Question 4 (Revised):** The price of ready-mix concrete increases by 10%. If the price elasticity of supply for ready-mix concrete is 0.6, what is the expected percentage change in the quantity of concrete supplied?

**Answer 4 (Revised):**
Using the PES formula: $E_s = \frac{\% \Delta Q_s}{\% \Delta P}$
We have $E_s = 0.6$ and $\% \Delta P = 10\%$.
Rearranging the formula to find $\% \Delta Q_s$:
$\% \Delta Q_s = E_s \times \% \Delta P$
$\% \Delta Q_s = 0.6 \times 10\% = 6\%$
The expected percentage change in the quantity of concrete supplied is **6%**.
The elasticity value of 0.6 indicates that the supply of concrete is **inelastic**. This means that the company has some capacity to increase production in response to a price increase, but it is not highly responsive. This could be due to factors like limited availability of raw materials or existing production capacity constraints.

---

This comprehensive set of notes should provide a solid foundation for understanding the measurement of elasticity and its crucial applications in the field of Economics for Engineers.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
