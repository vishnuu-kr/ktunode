---
title: "measurement of elasticity and its applications"
subject: "ECONOMICS FOR ENGINEERS"
module: "Module 1: Basic economic problems"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad9d"
status: "completed"
scrapedAt: "2026-05-20T16:24:39.929Z"
---
# ECONOMICS FOR ENGINEERS - Module 1: Basic Economic Problems - Measurement of Elasticity and its Applications

## Learning Outcomes:

*   Define and explain the concept of elasticity.
*   Calculate price elasticity of demand, income elasticity of demand, and cross-price elasticity of demand.
*   Interpret different elasticity values (elastic, inelastic, unit elastic).
*   Understand the factors influencing elasticity of demand.
*   Apply elasticity concepts to engineering decisions, such as pricing strategies and forecasting demand for engineering projects.
*   Discuss the importance of elasticity in government policy and resource allocation.

## 1. Introduction to Elasticity

*   **Definition:** Elasticity measures the responsiveness of one variable to a change in another variable.  In economics, it's commonly used to measure how much the quantity demanded or supplied of a good changes in response to a change in its price, income, or the price of related goods.
*   **Why is it important?** Elasticity provides valuable insights for:
    *   **Businesses:** Pricing decisions, revenue forecasting, production planning.
    *   **Governments:** Tax policy, understanding the impact of regulations.
    *   **Engineers:** Project feasibility studies, demand forecasting for infrastructure projects, resource allocation.

## 2. Price Elasticity of Demand (PED)

*   **Definition:** Measures the responsiveness of the quantity demanded of a good to a change in its own price.

*   **Formula:**

    ```
    PED = (% Change in Quantity Demanded) / (% Change in Price)

    PED = [(Q2 - Q1) / Q1] / [(P2 - P1) / P1]
    ```
    Where:
    *   Q1 = Initial Quantity Demanded
    *   Q2 = New Quantity Demanded
    *   P1 = Initial Price
    *   P2 = New Price

*   **Types of Price Elasticity of Demand:**

    *   **Elastic (PED > 1):**  A change in price leads to a proportionally larger change in quantity demanded.  Example: Luxury goods, goods with many substitutes.
    *   **Inelastic (PED < 1):** A change in price leads to a proportionally smaller change in quantity demanded. Example: Necessities, goods with few substitutes (e.g., gasoline in the short term, essential medicines).
    *   **Unit Elastic (PED = 1):**  A change in price leads to an equal proportional change in quantity demanded. Total revenue remains constant if price changes.
    *   **Perfectly Elastic (PED = ∞):**  Any increase in price will cause quantity demanded to fall to zero. Theoretical case, often found in perfectly competitive markets.
    *   **Perfectly Inelastic (PED = 0):**  Quantity demanded does not change regardless of the price. Example:  Life-saving medication.

*   **Example:**

    *   Suppose the price of a software package increases from $100 to $120, and the quantity demanded decreases from 1000 units to 800 units.
    *   % Change in Quantity Demanded = [(800 - 1000) / 1000] * 100 = -20%
    *   % Change in Price = [(120 - 100) / 100] * 100 = 20%
    *   PED = -20% / 20% = -1.  (We usually take the absolute value, so PED = 1)
    *   **Interpretation:** The demand is unit elastic.

*   **Midpoint Formula (Arc Elasticity):** A more accurate method for calculating elasticity when the change in price and quantity is significant.

    ```
    PED = [(Q2 - Q1) / ((Q1 + Q2) / 2)] / [(P2 - P1) / ((P1 + P2) / 2)]
    ```

*   **Factors Influencing Price Elasticity of Demand:**

    *   **Availability of Substitutes:** More substitutes, more elastic.
    *   **Necessity vs. Luxury:** Necessities are more inelastic.
    *   **Proportion of Income:**  Goods that take up a larger portion of income tend to be more elastic.
    *   **Time Horizon:** Demand tends to be more elastic in the long run because consumers have more time to adjust their behavior.
    *   **Definition of the Market:** A narrowly defined market (e.g., a specific brand of coffee) will be more elastic than a broadly defined market (e.g., coffee).

## 3. Income Elasticity of Demand (YED)

*   **Definition:** Measures the responsiveness of the quantity demanded of a good to a change in consumer income.

*   **Formula:**

    ```
    YED = (% Change in Quantity Demanded) / (% Change in Income)

    YED = [(Q2 - Q1) / Q1] / [(I2 - I1) / I1]
    ```
    Where:
    *   Q1 = Initial Quantity Demanded
    *   Q2 = New Quantity Demanded
    *   I1 = Initial Income
    *   I2 = New Income

*   **Types of Goods (based on YED):**

    *   **Normal Good (YED > 0):** Demand increases as income increases.
        *   **Necessity (0 < YED < 1):** Demand increases as income increases, but at a slower rate.
        *   **Luxury (YED > 1):** Demand increases more than proportionally as income increases.
    *   **Inferior Good (YED < 0):** Demand decreases as income increases. Examples: generic brands, instant noodles.

*   **Example:**

    *   Suppose a person's income increases from $50,000 to $60,000, and their demand for restaurant meals increases from 10 per month to 15 per month.
    *   % Change in Quantity Demanded = [(15 - 10) / 10] * 100 = 50%
    *   % Change in Income = [(60000 - 50000) / 50000] * 100 = 20%
    *   YED = 50% / 20% = 2.5
    *   **Interpretation:** Restaurant meals are a luxury good for this person.

## 4. Cross-Price Elasticity of Demand (CPED)

*   **Definition:** Measures the responsiveness of the quantity demanded of one good to a change in the price of another good.

*   **Formula:**

    ```
    CPED = (% Change in Quantity Demanded of Good A) / (% Change in Price of Good B)

    CPED = [(QA2 - QA1) / QA1] / [(PB2 - PB1) / PB1]
    ```
    Where:
    *   QA1 = Initial Quantity Demanded of Good A
    *   QA2 = New Quantity Demanded of Good A
    *   PB1 = Initial Price of Good B
    *   PB2 = New Price of Good B

*   **Types of Goods (based on CPED):**

    *   **Substitutes (CPED > 0):** An increase in the price of Good B leads to an increase in the demand for Good A. Examples: Coffee and tea, Coke and Pepsi.
    *   **Complements (CPED < 0):** An increase in the price of Good B leads to a decrease in the demand for Good A. Examples: Cars and gasoline, printers and ink cartridges.
    *   **Independent Goods (CPED = 0):**  A change in the price of Good B has no effect on the demand for Good A.

*   **Example:**

    *   Suppose the price of gasoline increases from $3.00 to $3.50 per gallon, and the demand for public transportation increases from 1000 riders to 1200 riders per day.
    *   % Change in Quantity Demanded (Public Transportation) = [(1200 - 1000) / 1000] * 100 = 20%
    *   % Change in Price (Gasoline) = [(3.50 - 3.00) / 3.00] * 100 = 16.67%
    *   CPED = 20% / 16.67% = 1.2
    *   **Interpretation:** Gasoline and public transportation are substitutes.

## 5. Applications of Elasticity in Engineering Decisions

*   **Demand Forecasting for Engineering Projects:**  Engineers use elasticity to estimate the demand for infrastructure projects (e.g., roads, bridges, water supply systems). Understanding the price elasticity of demand for these services helps in determining the appropriate scale and pricing strategies.

*   **Pricing Strategies:**
    *   **Elastic Demand:** If demand for a product or service is elastic, engineers and businesses can increase revenue by lowering prices. A small decrease in price will lead to a larger increase in quantity demanded.
    *   **Inelastic Demand:**  If demand is inelastic, revenue can be increased by raising prices. A price increase will have a relatively small impact on quantity demanded.
    *   **Example (Toll Road):**  Consider a toll road.  If demand is relatively inelastic (people need to use the road regardless of the toll), increasing the toll slightly will increase revenue.  However, if demand is elastic (people have alternative routes), raising the toll may decrease revenue as drivers choose other routes.

*   **Resource Allocation:** Elasticity concepts can help engineers allocate resources efficiently. For example, if the demand for electricity is highly inelastic during peak hours, engineers can justify investing in infrastructure upgrades to meet that demand.

*   **Project Feasibility Studies:**  Elasticity analysis helps in assessing the financial viability of engineering projects.  Accurate demand forecasting, based on elasticity estimates, is crucial for projecting revenues and determining the return on investment.

*   **Material Selection:** Understanding how material prices respond to changes in demand (supply elasticity) can inform material selection decisions. For example, if the price of a particular material is highly sensitive to changes in demand, engineers may consider using alternative materials.

## 6. Elasticity and Government Policy

*   **Tax Policy:** Governments use elasticity to predict the impact of taxes on consumer behavior and tax revenue.
    *   **Inelastic Goods (e.g., cigarettes):**  Taxes on inelastic goods generate significant revenue because demand is relatively unaffected by the price increase.
    *   **Elastic Goods:** Taxes on elastic goods may reduce consumption significantly, potentially leading to lower revenue and economic distortion.

*   **Regulation:**  Elasticity concepts are used to evaluate the impact of regulations on markets. For example, regulations that increase the cost of production may lead to higher prices and lower quantities demanded, depending on the elasticity of demand.

*   **Resource Allocation:** Governments use elasticity to make decisions about resource allocation. For example, if the demand for water is highly inelastic, governments may invest in water conservation programs and infrastructure improvements to ensure a reliable water supply.

## 7. Practice Questions/Exercises

**Question 1:**

A software company reduces the price of its flagship product from $200 to $180. As a result, sales increase from 5000 units to 6000 units.

a) Calculate the price elasticity of demand (PED) using the midpoint formula.
b) Is the demand elastic or inelastic?
c) What pricing strategy would you recommend to the company based on your findings?

**Answer:**

a)  PED = [((6000-5000)/((5000+6000)/2))] / [((180-200)/((200+180)/2))] = (1000/5500) / (-20/190) = 0.1818 / -0.1053 = -1.726
    Taking the absolute value, PED = 1.73 (approximately)

b)  Elastic (PED > 1)

c)  Since the demand is elastic, a further price reduction might lead to even greater increase in sales and overall revenue. However, the company should carefully consider the impact on its profit margin before making further price reductions.

**Question 2:**

A civil engineering firm is planning a new bridge project. They estimate that the demand for toll road usage will be 10,000 vehicles per day if the toll is $5.  They also estimate that for every $1 increase in the toll, the demand will decrease by 1,000 vehicles per day.

a) Calculate the price elasticity of demand at a toll of $5. (Use the arc elasticity/midpoint formula for the change from $5 to $6).
b) Is the demand elastic or inelastic at this point?
c) Should the firm consider increasing the toll to maximize revenue? Why or why not?

**Answer:**

a) At a toll of $6, the demand will be 9,000 vehicles.

   PED = [((9000-10000)/((10000+9000)/2))] / [((6-5)/((5+6)/2))] = (-1000/9500) / (1/5.5) = -0.1053 / 0.1818 = -0.579

   Taking the absolute value, PED = 0.58 (approximately)

b) Inelastic (PED < 1)

c) Yes, the firm should consider increasing the toll. Because demand is inelastic, a small increase in the toll will lead to a proportionally smaller decrease in the number of vehicles, resulting in an overall increase in revenue.

**Question 3:**

The price of gasoline increases by 15%, and the demand for hybrid cars increases by 25%. Calculate the cross-price elasticity of demand between gasoline and hybrid cars. Are these goods substitutes or complements?

**Answer:**

CPED = (25%) / (15%) = 1.67

Since CPED > 0, gasoline and hybrid cars are substitutes.

**Question 4:**

A person's income increases by 10%, and their demand for bus travel decreases by 5%.  Calculate the income elasticity of demand for bus travel.  Is bus travel a normal or inferior good for this person?

**Answer:**

YED = (-5%) / (10%) = -0.5

Since YED < 0, bus travel is an inferior good for this person.

## 8. Important Points to Remember

*   **Elasticity is unitless:** It's a ratio of percentage changes, so it doesn't have any units.
*   **Price Elasticity of Demand is typically negative:**  Due to the law of demand (as price increases, quantity demanded decreases), but we often take the absolute value for interpretation.
*   **The sign of elasticity matters:**  It tells us the direction of the relationship between the variables (positive for substitutes, negative for complements, etc.).
*   **Elasticity can vary along a demand curve:** Demand might be elastic at high prices and inelastic at low prices.
*   **Elasticity is a valuable tool:** For understanding consumer behavior, making informed business decisions, and developing effective government policies.
