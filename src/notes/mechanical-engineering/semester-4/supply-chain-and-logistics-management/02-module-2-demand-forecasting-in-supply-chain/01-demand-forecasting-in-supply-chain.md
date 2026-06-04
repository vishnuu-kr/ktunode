---
title: "Demand forecasting in supply chain"
subject: "SUPPLY CHAIN AND LOGISTICS MANAGEMENT"
module: "Module 2: Demand forecasting in supply chain"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf480446321e"
status: "completed"
scrapedAt: "2026-05-20T17:56:17.584Z"
---
# SUPPLY CHAIN AND LOGISTICS MANAGEMENT

## Module 2: Demand Forecasting in Supply Chain

---

### **Topic: Demand Forecasting in Supply Chain**

**Description:** This module delves into the critical role of demand forecasting in the efficient management of supply chains. Accurate demand forecasts are fundamental to all supply chain planning and execution activities, impacting inventory levels, production schedules, transportation, and ultimately customer satisfaction and profitability.

---

### **Learning Outcomes:**

By the end of this module, you will be able to:

*   Understand the importance of demand forecasting in supply chain management.
*   Identify different types of demand patterns.
*   Apply various qualitative and quantitative forecasting methods.
*   Evaluate the accuracy of demand forecasts.
*   Discuss factors influencing demand and their impact on forecasting.
*   Recognize the role of technology and collaboration in demand forecasting.

---

### **Course Outcomes Alignment:**

This module directly contributes to:

*   **CO2: To solve demand forecasting problems in the supply chain and enhance coordination in the network.** (Knowledge Level: K4) - This module provides the theoretical foundation and practical methodologies for solving demand forecasting problems, which is essential for effective supply chain coordination.
*   **CO3: To plan and manage inventories in the supply chain.** (Knowledge Level: K4) - Accurate demand forecasts are a prerequisite for effective inventory planning and management.
*   **CO1: To analyse supply chains and design the supply chain network.** (Knowledge Level: K4) - Understanding demand patterns is crucial for designing responsive and efficient supply chain networks.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **Textbook References:**

*   **Chopra, S., & Kalra, D. V. (2019). *Supply Chain Management: Strategy, Planning & Operation* (7th ed.). Pearson.**
    *   *Key Chapters/Sections likely to be relevant:* Chapters related to demand planning, forecasting, and Sales and Operations Planning (S&OP).
*   **Simchi-Levi, D., & Simchi-Levi, E. (2022). *Designing and Managing the Supply Chain: Concepts, Strategies, and Case Studies* (4th ed.). McGraw Hill.**
    *   *Key Chapters/Sections likely to be relevant:* Chapters on demand management, forecasting, and inventory control.

---

## 1. Importance of Demand Forecasting in Supply Chains

Accurate demand forecasting is the cornerstone of effective supply chain management. It influences critical decisions across the entire chain, from sourcing raw materials to delivering finished goods to customers.

*   **Impact on Key Supply Chain Decisions:**
    *   **Inventory Management:** Determines optimal inventory levels to meet demand without incurring excessive holding costs or stockouts.
    *   **Production Planning:** Guides production scheduling, capacity planning, and resource allocation.
    *   **Procurement:** Informs raw material and component purchasing decisions.
    *   **Transportation and Logistics:** Influences decisions on shipping modes, routes, and carrier selection.
    *   **Financial Planning:** Impacts budgeting, sales forecasts, and profitability projections.
    *   **New Product Introduction:** Helps anticipate initial demand and ramp-up production.
    *   **Customer Service:** Enables meeting customer demand reliably and reducing lead times.

*   **Consequences of Inaccurate Forecasting:**
    *   **Over-forecasting:**
        *   Excessive inventory (high holding costs, obsolescence, spoilage).
        *   Increased warehousing and storage costs.
        *   Potential for markdowns and write-offs.
        *   Inefficient use of resources (production, transportation).
    *   **Under-forecasting:**
        *   Stockouts and lost sales.
        *   Customer dissatisfaction and loss of goodwill.
        *   Rush orders and expedited shipping costs.
        *   Idle production capacity.
        *   Missed revenue opportunities.

*   **Chopra & Kalra (2019) Perspective:** Emphasize that demand forecasting is a critical driver of **supply chain profitability**. The goal is to match supply with demand as closely as possible to minimize costs and maximize service levels. They highlight the trade-off between the cost of holding inventory and the cost of stockouts.

*   **Simchi-Levi & Simchi-Levi (2022) Perspective:** Stress the importance of **demand management** which includes forecasting, as a key strategic lever for improving supply chain performance. They advocate for a proactive approach to understanding and influencing demand, beyond just predicting it.

---

## 2. Types of Demand Patterns

Understanding the historical patterns of demand is crucial for selecting appropriate forecasting methods.

*   **Stable Demand:** Demand fluctuates slightly around a stable average.
    *   *Example:* Staple consumer goods like salt or sugar.
    *   *Forecasting Methods:* Simple moving averages, exponential smoothing.

*   **Seasonal Demand:** Demand exhibits a predictable pattern over specific periods (e.g., weekly, monthly, yearly).
    *   *Example:* Ice cream sales peak in summer, retail sales surge before holidays.
    *   *Forecasting Methods:* Seasonal indices, decomposition methods, time series with seasonality.

*   **Trended Demand:** Demand generally increases or decreases over time.
    *   *Example:* Growth of a new technology product, decline of an older product.
    *   *Forecasting Methods:* Linear regression, exponential smoothing with trend, moving averages with trend.

*   **Cyclical Demand:** Demand patterns that repeat over longer periods, often influenced by economic factors or business cycles.
    *   *Example:* Demand for luxury goods during economic booms, housing market fluctuations.
    *   *Forecasting Methods:* Regression analysis with economic indicators, advanced time series models.

*   **Erratic/Random Demand:** Demand that is highly unpredictable and shows no clear pattern.
    *   *Example:* Demand for spare parts for rare equipment failures, sudden spikes due to unforeseen events.
    *   *Forecasting Methods:* Often challenging; may require safety stock or focus on aggregate forecasts.

*   **Chopra & Kalra (2019):** Discuss these patterns extensively, linking them to inventory policies. They often categorize demand as *lumpy* (infrequent, large demand) or *erratic* versus *smooth* or *seasonal*, which directly impacts the choice of forecasting technique.

*   **Simchi-Levi & Simchi-Levi (2022):** Similarly, their discussions on demand management would cover understanding these underlying patterns to tailor forecasting and inventory strategies.

---

## 3. Demand Forecasting Methods

Forecasting methods can be broadly categorized into qualitative and quantitative approaches.

### 3.1. Qualitative Forecasting Methods

These methods rely on subjective opinions, expert judgment, and intuition. They are often used when historical data is scarce or unreliable, or for new products.

*   **Market Research:** Gathering data on customer preferences, purchasing intentions, and market trends.
    *   *Techniques:* Surveys, focus groups, interviews.
    *   *Example:* A new smartphone manufacturer using surveys to gauge consumer interest and desired features before launch.

*   **Delphi Method:** A structured process of eliciting and aggregating judgments from a panel of experts. It is iterative and aims to reach a consensus.
    *   *Process:* Experts anonymously provide forecasts, then receive aggregated feedback and revise their forecasts.
    *   *Example:* Forecasting the adoption rate of a new energy technology involving experts from industry, academia, and government.

*   **Salesforce Composite:** Aggregating forecasts from individual salespeople who are closest to the customer.
    *   *Pros:* Leverages frontline knowledge.
    *   *Cons:* Can be biased (optimism/pessimism), salespeople may not be trained forecasters.

*   **Executive Opinion:** Gathering opinions from senior management and experienced executives.
    *   *Pros:* Quick, can incorporate high-level strategic insights.
    *   *Cons:* Prone to groupthink or individual biases.

*   **Chopra & Kalra (2019):** Acknowledge the role of qualitative methods, especially for **new product forecasting** or when significant market shifts are expected. They emphasize the need to structure these processes to minimize bias.

---

### 3.2. Quantitative Forecasting Methods

These methods use historical data to identify patterns and project future demand.

#### 3.2.1. Time Series Methods

These methods assume that future demand is a function of past demand.

*   **Naive Forecast:** The forecast for the next period is simply the demand from the current period.
    *   *Formula:* $\hat{Y}_t = Y_{t-1}$
    *   *Example:* If 100 units were sold last week, the forecast for this week is 100 units.
    *   *Best for:* Stable demand with no trend or seasonality.

*   **Moving Average (MA):** Calculates the average demand over a specified number of past periods.
    *   *Formula (Simple Moving Average - SMA):* $\hat{Y}_t = \frac{Y_{t-1} + Y_{t-2} + ... + Y_{t-n}}{n}$ (where $n$ is the number of periods)
    *   *Example:* A 3-month moving average for sales: (Jan sales + Feb sales + Mar sales) / 3 = Apr forecast.
    *   *Pros:* Simple to implement, smooths out random fluctuations.
    *   *Cons:* Lags behind trends, does not account for seasonality.

*   **Weighted Moving Average (WMA):** Assigns different weights to past periods, giving more importance to recent data.
    *   *Formula:* $\hat{Y}_t = w_1 Y_{t-1} + w_2 Y_{t-2} + ... + w_n Y_{t-n}$ (where $\sum w_i = 1$)
    *   *Example:* A 3-month WMA with weights 0.5, 0.3, 0.2 for the last 3 months.
    *   *Pros:* More responsive to recent changes than SMA.
    *   *Cons:* Still lags trends, requires careful weight selection.

*   **Exponential Smoothing (ES):** A type of WMA where the weight for the most recent observation is $\alpha$, and the weights for older observations decrease exponentially.
    *   *Formula (Simple Exponential Smoothing - SES):* $\hat{Y}_t = \alpha Y_{t-1} + (1-\alpha) \hat{Y}_{t-1}$ (where $0 \le \alpha \le 1$)
    *   *Example:* If sales last period were 120 and the previous forecast was 100, with $\alpha = 0.3$: Forecast for this period = 0.3 * 120 + 0.7 * 100 = 36 + 70 = 106.
    *   *Pros:* Simple, efficient, requires minimal data storage.
    *   *Cons:* Sensitive to $\alpha$ selection, not ideal for strong trends or seasonality alone.

*   **Exponential Smoothing with Trend (Holt's Method):** Extends SES to include a trend component.
    *   *Equations:*
        *   Level: $L_t = \alpha Y_t + (1-\alpha)(L_{t-1} + T_{t-1})$
        *   Trend: $T_t = \beta(L_t - L_{t-1}) + (1-\beta)T_{t-1}$
        *   Forecast: $\hat{Y}_{t+k} = L_t + k T_t$
    *   *Requires:* Smoothing parameters $\alpha$ (for level) and $\beta$ (for trend).
    *   *Example:* Used for products with a consistent upward or downward sales trajectory.

*   **Exponential Smoothing with Trend and Seasonality (Winter's Method):** Further extends Holt's method to account for seasonal patterns.
    *   *Equations:* Includes separate smoothing for level, trend, and seasonal factors.
    *   *Requires:* Smoothing parameters $\alpha$, $\beta$, and $\gamma$ (for seasonality).
    *   *Example:* Forecasting quarterly sales for a business that experiences regular peaks and troughs each year.

*   **Chopra & Kalra (2019):** Provide a thorough overview of exponential smoothing methods, explaining the impact of $\alpha$, $\beta$, and $\gamma$ values on forecast responsiveness and stability. They often present these methods in the context of inventory management and service level targets.

*   **Simchi-Levi & Simchi-Levi (2022):** Discuss time series methods as a foundational element of demand forecasting, highlighting their suitability for stable and predictable demand patterns.

#### 3.2.2. Causal Forecasting Methods (Regression Analysis)

These methods assume that demand is influenced by one or more independent variables (factors).

*   **Simple Linear Regression:** Models the relationship between demand (dependent variable) and a single independent variable.
    *   *Formula:* $Y = \beta_0 + \beta_1 X + \epsilon$
        *   $Y$: Demand (dependent variable)
        *   $X$: Independent variable (e.g., advertising spend, price, competitor activity)
        *   $\beta_0$: Intercept
        *   $\beta_1$: Slope (coefficient)
        *   $\epsilon$: Error term
    *   *Example:* Forecasting sales based on advertising expenditure. If advertising spend increases by $1000, sales increase by 50 units.

*   **Multiple Linear Regression:** Models the relationship between demand and multiple independent variables.
    *   *Formula:* $Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + ... + \beta_k X_k + \epsilon$
    *   *Example:* Forecasting sales based on advertising spend, price, and competitor pricing.

*   **Pros:** Can identify drivers of demand, potentially more accurate for dynamic markets.
*   **Cons:* Requires identification of relevant independent variables, data collection for these variables, and assumes the historical relationships will hold. Can be complex to build and maintain.

*   **Chopra & Kalra (2019):** May cover regression as a more advanced technique for understanding demand drivers, particularly when analyzing the impact of promotions or pricing changes.

---

## 4. Evaluating Forecast Accuracy

Measuring forecast accuracy is crucial to understand the reliability of the forecasts and to select the best forecasting method.

*   **Common Accuracy Metrics:**
    *   **Mean Absolute Deviation (MAD):** The average of the absolute differences between actual demand and forecasted demand.
        *   *Formula:* $MAD = \frac{1}{n} \sum_{t=1}^{n} |A_t - F_t|$
        *   *Interpretation:* Lower MAD is better. Units are the same as the demand.

    *   **Mean Squared Error (MSE):** The average of the squared differences between actual demand and forecasted demand.
        *   *Formula:* $MSE = \frac{1}{n} \sum_{t=1}^{n} (A_t - F_t)^2$
        *   *Interpretation:* Penalizes larger errors more heavily. Units are squared.

    *   **Root Mean Squared Error (RMSE):** The square root of MSE.
        *   *Formula:* $RMSE = \sqrt{MSE}$
        *   *Interpretation:* Back in the original units of demand, making it easier to interpret than MSE.

    *   **Mean Absolute Percentage Error (MAPE):** The average of the absolute percentage errors.
        *   *Formula:* $MAPE = \frac{1}{n} \sum_{t=1}^{n} |\frac{A_t - F_t}{A_t}| \times 100\%$
        *   *Interpretation:* Useful for comparing forecast accuracy across products with different demand levels. However, it can be misleading for low-demand items (large percentage errors) or when actual demand is zero.

    *   **Tracking Signal (TS):** Measures whether the forecast is consistently over or under forecasting.
        *   *Formula:* $TS = \frac{\sum (A_t - F_t)}{\text{Average MAD}}$ (Cumulative Sum of Forecast Errors / MAD)
        *   *Interpretation:* A TS outside a predefined range (e.g., $\pm 4$ or $\pm 5$) suggests a biased forecast and a need to review the forecasting method.

*   **Choosing the Right Metric:**
    *   MAD is simple and interpretable.
    *   RMSE is preferred when large errors are particularly undesirable.
    *   MAPE is good for comparing across different scales but has limitations.
    *   Tracking Signal is vital for identifying systematic forecast bias.

*   **Chopra & Kalra (2019):** Dedicate sections to forecast accuracy measurement, stressing that it's essential for **monitoring and adjusting forecasting models**. They often link forecast accuracy to the **safety stock** required to achieve a desired service level.

*   **Simchi-Levi & Simchi-Levi (2022):** Reinforce the importance of accuracy metrics for performance evaluation and continuous improvement of demand forecasting processes.

---

## 5. Factors Influencing Demand

Beyond historical patterns, several external and internal factors can significantly impact demand and must be considered in forecasting.

*   **Promotions and Discounts:** Marketing campaigns, price reductions, and sales events often lead to temporary spikes in demand.
    *   *Forecasting Consideration:* May require special adjustments to models or separate forecasting for promotional periods.

*   **Competitor Actions:** Pricing, product launches, and marketing efforts by competitors can affect a company's sales.
    *   *Forecasting Consideration:* Ideally incorporated into causal models.

*   **Economic Conditions:** Inflation, recession, interest rates, and consumer confidence influence overall purchasing power and demand for certain products.
    *   *Forecasting Consideration:* Macroeconomic indicators can be used in regression models.

*   **Seasonality and Calendar Effects:** Holidays, school schedules, and weather patterns create predictable demand shifts.
    *   *Forecasting Consideration:* Addressed by seasonal time series models or specific event adjustments.

*   **New Product Introductions:** Demand for new products is difficult to forecast due to lack of historical data.
    *   *Forecasting Consideration:* Relies heavily on qualitative methods, market research, and analogies to similar products.

*   **Product Life Cycle:** Demand changes as a product moves through introduction, growth, maturity, and decline stages.
    *   *Forecasting Consideration:* Requires different forecasting approaches at different life cycle stages.

*   **Customer Behavior Changes:** Shifting preferences, lifestyle changes, and technological adoption can alter demand patterns.
    *   *Forecasting Consideration:* Requires ongoing market analysis and potentially qualitative input.

*   **Chopra & Kalra (2019):** Emphasize the need for **integrated planning**, where sales, marketing, and operations collaborate to understand and account for these factors. They refer to this integration process as part of Sales and Operations Planning (S&OP).

*   **Simchi-Levi & Simchi-Levi (2022):** Highlight the importance of **market intelligence** and **collaboration** to capture information about these influencing factors, enabling more robust forecasts.

---

## 6. Technology and Collaboration in Demand Forecasting

Leveraging technology and fostering collaboration are essential for improving demand forecasting accuracy and agility.

*   **Enterprise Resource Planning (ERP) Systems:** Provide integrated data on sales, inventory, and production, which are inputs for forecasting.

*   **Advanced Planning and Scheduling (APS) Systems:** Offer sophisticated forecasting modules, often incorporating advanced statistical techniques and simulation capabilities.

*   **Business Intelligence (BI) and Analytics Tools:** Help in analyzing large datasets, identifying trends, and visualizing demand patterns.

*   **Machine Learning (ML) and Artificial Intelligence (AI):**
    *   Can identify complex, non-linear relationships in data.
    *   Can automate forecasting model selection and parameter tuning.
    *   Can process unstructured data (e.g., social media sentiment) to infer demand.
    *   *Example:* Using ML to predict demand for fashion items based on social media trends and influencer activity.

*   **Collaborative Planning, Forecasting, and Replenishment (CPFR):** A business practice that aims to improve supply chain efficiency through joint forecasting and planning between trading partners (e.g., manufacturers and retailers).
    *   *Benefits:* Reduced bullwhip effect, improved inventory levels, better customer service.
    *   *Example:* A CPG manufacturer sharing sales data and forecasts with a retailer to jointly plan promotional activities and inventory levels.

*   **Chopra & Kalra (2019):** Advocate for robust IT systems and highlight the strategic importance of **CPFR** for enhancing supply chain visibility and coordination, directly impacting forecasting accuracy and reducing the bullwhip effect.

*   **Simchi-Levi & Simchi-Levi (2022):** Emphasize the role of **information technology** as an enabler for effective demand forecasting and management. They also discuss the strategic advantage gained through **partnerships and collaboration** within the supply chain.

---

## 7. Sales and Operations Planning (S&OP) and Integrated Business Planning (IBP)

S&OP and IBP are critical processes that integrate demand forecasts with supply capabilities and financial plans.

*   **Sales and Operations Planning (S&OP):** A monthly process that reconciles demand forecasts with supply capabilities to create a single, integrated plan for the business. It aligns sales, marketing, operations, and finance.
    *   *Key Output:* A unified demand plan, production plan, and inventory plan.
    *   *Goal:* To balance demand and supply, ensuring customer service levels are met while optimizing costs.

*   **Integrated Business Planning (IBP):** An evolution of S&OP that extends the planning horizon and incorporates financial planning more deeply. It also emphasizes scenario planning and strategic decision-making.
    *   *Key Difference from S&OP:* More strategic, longer time horizon, greater financial integration.

*   **Role of Demand Forecasting in S&OP/IBP:**
    *   The demand forecast is the primary input to the S&OP/IBP process.
    *   The process allows for the refinement of forecasts based on sales and marketing intelligence and operational constraints.
    *   It helps to identify potential imbalances between demand and supply early on.

*   **Chopra & Kalra (2019):** Dedicate significant coverage to S&OP as a crucial process for **linking tactical and strategic decisions**. They explain how it transforms the demand forecast into an actionable plan.

*   **Simchi-Levi & Simchi-Levi (2022):** Would likely discuss these processes as vital for **strategic supply chain management**, ensuring that forecasting efforts are aligned with overall business objectives and capabilities.

---

## Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain why accurate demand forecasting is considered a critical driver of supply chain profitability. Discuss the potential consequences of both over-forecasting and under-forecasting.

**Answer:**
Accurate demand forecasting is critical for profitability because it directly impacts inventory levels, production schedules, and resource allocation.
*   **Over-forecasting** leads to excessive inventory, resulting in higher holding costs (storage, insurance, obsolescence), increased risk of markdowns, and inefficient utilization of capital and resources.
*   **Under-forecasting** leads to stockouts, lost sales, customer dissatisfaction, increased expedited shipping costs, and potential loss of market share. By accurately predicting demand, a company can optimize inventory levels, streamline production, reduce costs, and improve customer service, all of which contribute directly to higher profits.

**Question 2 (Quantitative - Time Series):**
The following are the actual sales for the past five weeks: 100, 120, 110, 130, 125.
a) Calculate the forecast for week 6 using a 3-week Simple Moving Average (SMA).
b) Calculate the forecast for week 6 using Exponential Smoothing with $\alpha = 0.3$, assuming the forecast for week 1 was 100.
c) Calculate the Mean Absolute Deviation (MAD) for the 3-week SMA forecast after week 5.

**Answer:**

a) **3-Week Simple Moving Average (SMA) for Week 6:**
SMA = (Week 3 Sales + Week 4 Sales + Week 5 Sales) / 3
SMA = (110 + 130 + 125) / 3
SMA = 365 / 3
**SMA Forecast for Week 6 = 121.67**

b) **Exponential Smoothing ($\alpha = 0.3$) for Week 6:**
*   Forecast for Week 2 ($\hat{Y}_2$) = $\alpha Y_1 + (1-\alpha) \hat{Y}_1 = 0.3 * 100 + (1-0.3) * 100 = 30 + 70 = 100$
*   Forecast for Week 3 ($\hat{Y}_3$) = $\alpha Y_2 + (1-\alpha) \hat{Y}_2 = 0.3 * 120 + 0.7 * 100 = 36 + 70 = 106$
*   Forecast for Week 4 ($\hat{Y}_4$) = $\alpha Y_3 + (1-\alpha) \hat{Y}_3 = 0.3 * 110 + 0.7 * 106 = 33 + 74.2 = 107.2$
*   Forecast for Week 5 ($\hat{Y}_5$) = $\alpha Y_4 + (1-\alpha) \hat{Y}_4 = 0.3 * 130 + 0.7 * 107.2 = 39 + 75.04 = 114.04$
*   Forecast for Week 6 ($\hat{Y}_6$) = $\alpha Y_5 + (1-\alpha) \hat{Y}_5 = 0.3 * 125 + 0.7 * 114.04 = 37.5 + 79.828 = 117.33$
**Exponential Smoothing Forecast for Week 6 = 117.33**

c) **MAD for 3-Week SMA:**
We need the forecasts generated by the 3-week SMA for weeks 4 and 5 to calculate MAD up to week 5.
*   SMA Forecast for Week 4 = (Week 1 Sales + Week 2 Sales + Week 3 Sales) / 3 = (100 + 120 + 110) / 3 = 330 / 3 = 110
    *   Error for Week 4 = $|A_4 - F_4| = |130 - 110| = 20$
*   SMA Forecast for Week 5 = (Week 2 Sales + Week 3 Sales + Week 4 Sales) / 3 = (120 + 110 + 130) / 3 = 360 / 3 = 120
    *   Error for Week 5 = $|A_5 - F_5| = |125 - 120| = 5$
*   MAD = (Error Week 4 + Error Week 5) / 2 = (20 + 5) / 2 = 25 / 2
**MAD for 3-Week SMA up to Week 5 = 12.5**

**Question 3 (Application):**
A company is considering using demand forecasting for its new product. They conducted market research and have gathered expert opinions. What type of forecasting method would be most appropriate, and why?

**Answer:**
For a new product with no historical sales data, **qualitative forecasting methods** are most appropriate. Specifically:
*   **Market Research** (surveys, focus groups) can help understand customer purchase intentions and identify key demand drivers.
*   The **Delphi Method** can be used to gather and refine forecasts from a panel of experts (e.g., industry analysts, experienced managers) who can estimate potential market size, adoption rates, and competitive responses.
*   **Salesforce Composite** might be used later as sales representatives start interacting with potential customers, but initially, it's less relevant.

These methods leverage human judgment and external information, which are essential when historical quantitative data is unavailable.

---

## Important Points to Remember:

*   **No single forecasting method is perfect.** The best method depends on the demand pattern, data availability, and the required forecast horizon.
*   **Forecast accuracy decreases as the forecast horizon increases.** Longer-term forecasts are generally less accurate than shorter-term ones.
*   **Forecasts are always wrong.** The goal is to minimize the error, not to achieve perfect accuracy.
*   **Understand your demand patterns.** This is the first step to selecting an appropriate forecasting method.
*   **Collaborate!** Sharing information and forecasts with internal departments (sales, marketing) and external partners (suppliers, customers) significantly improves accuracy.
*   **Monitor and adjust.** Continuously evaluate forecast accuracy and update forecasting models as needed.
*   **Demand forecasting is a process, not just a calculation.** It involves data collection, analysis, model selection, execution, and continuous improvement.
*   **CPFR and S&OP/IBP are key processes** that elevate demand forecasting from a purely statistical exercise to an integrated business planning activity.

---