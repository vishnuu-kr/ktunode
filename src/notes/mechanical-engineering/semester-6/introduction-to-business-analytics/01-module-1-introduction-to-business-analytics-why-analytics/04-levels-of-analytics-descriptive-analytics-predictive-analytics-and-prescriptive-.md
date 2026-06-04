---
title: "Levels of Analytics – Descriptive Analytics, Predictive Analytics and Prescriptive Analytics"
subject: "INTRODUCTION TO BUSINESS ANALYTICS"
module: "Module 1: Introduction to Business Analytics: Why Analytics"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044639fb"
status: "completed"
scrapedAt: "2026-05-20T18:05:19.284Z"
---
# INTRODUCTION TO BUSINESS ANALYTICS

## Module 1: Introduction to Business Analytics: Why Analytics

### Topic: Levels of Analytics – Descriptive Analytics, Predictive Analytics and Prescriptive Analytics

---

### 1. Understanding the Evolution and Necessity of Analytics (CO1, CO2)

**Key Concepts:**

*   **Business Analytics (BA):** The practice of iterative, methodical business process that uses analytical techniques and tools to transform business data into actionable insights for improved decision-making.
*   **Data-Driven Decision Making:** A process of making organizational decisions based on actual data rather than intuition or gut feeling.
*   **Competitive Strategy:** How an organization plans to achieve its business objectives and gain a competitive advantage in the market. Analytics plays a crucial role in formulating and executing effective strategies.

**Why is Analytics Becoming a Competitive Strategy?**

*   **Increased Data Volume:** Organizations are generating and collecting vast amounts of data from various sources (transactions, social media, sensors, etc.).
*   **Enhanced Decision Quality:** Analytics provides evidence-based insights, reducing reliance on guesswork and leading to more robust decisions.
*   **Improved Efficiency and Productivity:** Identifying bottlenecks, optimizing processes, and allocating resources effectively.
*   **Customer Understanding and Personalization:** Gaining deep insights into customer behavior, preferences, and needs to offer personalized experiences.
*   **Risk Management:** Identifying potential risks and developing strategies to mitigate them.
*   **Innovation:** Discovering new opportunities, product improvements, and market trends.

**Core Idea:** In today's dynamic business environment, organizations that effectively leverage data through analytics gain a significant advantage over those that do not. It's no longer a luxury but a necessity for survival and growth.

**Textbook/Reference Insights:**

*   **Kumar (2017):** Emphasizes analytics as the "science of data-driven decision-making," highlighting its role in transforming raw data into meaningful insights.
*   **Sharda, Delen, & Turban (2018):** Position business intelligence, analytics, and data science as crucial for managerial decision-making and achieving business objectives.

---

### 2. The Three Levels of Analytics (CO3, CO5, CO6)

Business analytics can be broadly categorized into three overlapping and increasingly sophisticated levels: Descriptive, Predictive, and Prescriptive Analytics.

#### 2.1. Descriptive Analytics: What Happened? (CO3)

**Definition:** Descriptive analytics is the most fundamental level of analytics. It focuses on summarizing historical data to understand what has happened in the past. It answers the "what" question.

**Key Concepts & Techniques:**

*   **Data Aggregation:** Combining data from multiple sources into a single, coherent view.
*   **Data Mining:** Discovering patterns and relationships in large datasets.
*   **Reporting:** Presenting summarized data in a digestible format.
*   **Key Performance Indicators (KPIs):** Measurable values that demonstrate how effectively a company is achieving key business objectives.
*   **Data Visualization:** Representing data graphically to make it easier to understand. (Relevant to CO4)

**Common Techniques/Tools:**

*   **Dashboards:** Visual displays of key metrics and KPIs.
*   **Reports:** Summaries of data, often presented in tables or charts.
*   **Statistical Summaries:** Mean, median, mode, standard deviation, frequency distributions.
*   **Charts and Graphs:** Bar charts, pie charts, line charts, scatter plots, histograms.

**Examples:**

*   **Sales Analysis:** "What were our total sales last quarter?" "Which product had the highest sales volume?"
*   **Customer Demographics:** "What is the average age of our customer base?" "Where are most of our customers located?"
*   **Website Traffic:** "How many unique visitors did our website have last month?" "Which pages were most frequently visited?"
*   **Financial Reporting:** "What was our profit margin for the last fiscal year?"

**Importance:** Descriptive analytics provides a foundational understanding of business performance. It helps identify trends, anomalies, and areas that require further investigation.

**Textbook/Reference Insights:**

*   **Prasad & Acharya (2016):** Highlight descriptive analytics as the initial step in the analytics process, focusing on summarizing past events.
*   **Evans (2019):** Discusses the role of reporting and dashboards in providing insights into historical performance.

**Practice Question (Descriptive Analytics):**

A retail store wants to understand its sales performance for the last month. They have data on product, quantity sold, price, and date.
**Question:** What are two descriptive analytics questions they could ask, and what type of visualization would be most appropriate for each?

**Answer:**

1.  **Question:** What was the total revenue generated by each product category?
    **Visualization:** A **bar chart** would be suitable to compare the revenue across different product categories.
2.  **Question:** How did daily sales trend throughout the month?
    **Visualization:** A **line chart** would be effective to show the fluctuation of sales over time.

---

#### 2.2. Predictive Analytics: What Might Happen? (CO5)

**Definition:** Predictive analytics uses historical data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes. It answers the "what might happen" question.

**Key Concepts & Techniques:**

*   **Forecasting:** Predicting future values based on past trends.
*   **Statistical Modeling:** Building mathematical models to represent relationships between variables.
*   **Machine Learning (ML):** Algorithms that allow computers to learn from data without being explicitly programmed.
*   **Regression Analysis:** Predicting a continuous output variable based on one or more input variables. (Key to CO5)
*   **Classification:** Predicting a categorical outcome.
*   **Time Series Analysis:** Analyzing time-ordered data to identify patterns and make forecasts.

**Common Techniques/Tools:**

*   **Linear Regression:** Predicting a dependent variable based on a linear relationship with independent variables.
*   **Logistic Regression:** Predicting the probability of a binary outcome.
*   **Decision Trees:** Tree-like structures that represent decisions and their possible consequences.
*   **Neural Networks:** Complex algorithms inspired by the structure of the human brain.
*   **Clustering:** Grouping similar data points together.

**Examples:**

*   **Sales Forecasting:** "What will our sales be next quarter?"
*   **Customer Churn Prediction:** "Which customers are most likely to stop using our service in the next three months?"
*   **Fraud Detection:** "Is this transaction likely to be fraudulent?"
*   **Demand Forecasting:** "How much of a particular product will be needed next week?"
*   **Credit Risk Assessment:** "What is the probability that a loan applicant will default?"

**Importance:** Predictive analytics allows businesses to anticipate future events, identify potential risks and opportunities, and make proactive decisions.

**Textbook/Reference Insights:**

*   **Kumar (2017):** Discusses various modeling techniques like regression and classification for prediction.
*   **Sharda, Delen, & Turban (2018):** Covers predictive modeling and its applications in areas like forecasting and risk management.
*   **Evans (2019):** Introduces predictive analytics as the next step after descriptive analytics, focusing on identifying future trends.

**Focus on CO5: Applying Simple Linear Regression**

*   **Simple Linear Regression:** A statistical method used to model the relationship between two continuous variables. It assumes a linear relationship where one variable (independent variable, X) influences another variable (dependent variable, Y).
*   **Formula:** $Y = \beta_0 + \beta_1X + \epsilon$
    *   $Y$: Dependent variable (what we want to predict)
    *   $X$: Independent variable (predictor)
    *   $\beta_0$: Intercept (the value of Y when X is 0)
    *   $\beta_1$: Slope (the change in Y for a one-unit change in X)
    *   $\epsilon$: Error term (the part of Y not explained by X)

**Example for CO5:**

A company wants to predict its monthly sales ($Y$) based on its advertising spend ($X$). They have the following data for the past 6 months:

| Month | Advertising Spend ($X$) | Sales ($Y$) |
| :---- | :---------------------- | :---------- |
| 1     | $2,000$                 | $50,000$    |
| 2     | $3,000$                 | $65,000$    |
| 3     | $2,500$                 | $58,000$    |
| 4     | $4,000$                 | $80,000$    |
| 5     | $3,500$                 | $72,000$    |
| 6     | $5,000$                 | $95,000$    |

Using statistical software or formulas, we can calculate the regression equation. Let's assume the simple linear regression analysis yields:

*   Estimated Intercept ($\beta_0$): $15,000$
*   Estimated Slope ($\beta_1$): $16$

Therefore, the regression equation is: **Sales = $15,000 + 16 \times$ Advertising Spend**

*   **Interpretation:** For every additional dollar spent on advertising, sales are predicted to increase by $16. When advertising spend is $0, sales are predicted to be $15,000.

*   **Prediction:** If the company plans to spend $6,000 on advertising next month, the predicted sales would be:
    Sales = $15,000 + 16 \times 6,000 = 15,000 + 96,000 = 111,000$

**Practice Question (Predictive Analytics - Linear Regression):**

A coffee shop owner wants to predict the number of customers ($Y$) on a given day based on the temperature outside ($X$, in Celsius). They collected data for 5 days:

| Day | Temperature ($X$) | Number of Customers ($Y$) |
| :-- | :---------------- | :------------------------ |
| 1   | 15                | 80                        |
| 2   | 20                | 100                       |
| 3   | 25                | 120                       |
| 4   | 18                | 95                        |
| 5   | 22                | 110                       |

Assume a simple linear regression analysis resulted in the equation: **Customers = $30 + 3.5 \times$ Temperature**.

**Question:**
a) Interpret the intercept and the slope of this regression equation.
b) Predict the number of customers if the temperature is 28 degrees Celsius.

**Answer:**

a)
*   **Intercept (30):** If the temperature were 0 degrees Celsius, the model predicts 30 customers. (Note: This interpretation might not be practically meaningful if temperatures below 0 are not considered).
*   **Slope (3.5):** For every one-degree increase in temperature, the number of customers is predicted to increase by 3.5.

b)
Predicted Customers = $30 + 3.5 \times 28$
Predicted Customers = $30 + 98$
Predicted Customers = $128$

---

#### 2.3. Prescriptive Analytics: What Should We Do? (CO6)

**Definition:** Prescriptive analytics goes beyond prediction to recommend specific actions to achieve desired outcomes. It answers the "what should we do" question by suggesting optimal courses of action.

**Key Concepts & Techniques:**

*   **Optimization:** Finding the best solution from a set of available alternatives to maximize or minimize an objective function (e.g., profit, cost).
*   **Simulation:** Modeling real-world processes to understand their behavior and test different scenarios.
*   **Decision Trees (for decision making):** Similar to predictive decision trees but used to identify the best sequence of actions.
*   **Rule-Based Systems:** Using "if-then" rules to guide decisions.
*   **Machine Learning (Reinforcement Learning):** Algorithms that learn by trial and error to make optimal decisions.

**Common Techniques/Tools:**

*   **Linear Programming:** Optimizing a linear objective function subject to linear constraints.
*   **Integer Programming:** Similar to linear programming, but variables must be integers.
*   **Constraint Programming:** Solving problems with complex constraints.
*   **Heuristics and Metaheuristics:** Algorithms that find good, but not necessarily optimal, solutions for complex problems.
*   **Advanced Simulation Software.**

**Examples:**

*   **Inventory Management:** "What is the optimal inventory level for each product to minimize costs while meeting demand?"
*   **Pricing Optimization:** "What price should we set for a product to maximize revenue?"
*   **Resource Allocation:** "How can we best allocate our marketing budget across different channels to maximize ROI?"
*   **Supply Chain Optimization:** "What is the most efficient route for our delivery trucks?"
*   **Personalized Recommendations:** "Based on a user's history, what product should we recommend next to increase purchase probability?"

**Importance:** Prescriptive analytics empowers businesses to make optimal decisions, automate decision-making processes, and achieve specific business goals.

**Textbook/Reference Insights:**

*   **Kumar (2017):** Introduces prescriptive analytics as the highest level, focusing on optimization and decision support.
*   **Sharda, Delen, & Turban (2018):** Discusses prescriptive analytics in the context of operations research and management science techniques.
*   **Laursen & Thorlund (2017):** Emphasize taking business intelligence "beyond reporting" to actionable insights and recommendations.

**Practice Question (Prescriptive Analytics):**

A manufacturing company produces two products, A and B, using two machines, Machine 1 and Machine 2.

*   **Product A:** Requires 2 hours on Machine 1 and 1 hour on Machine 2. Profit per unit is $5.
*   **Product B:** Requires 1 hour on Machine 1 and 3 hours on Machine 2. Profit per unit is $7.

**Constraints:**
*   Machine 1 has a maximum of 100 operating hours available per week.
*   Machine 2 has a maximum of 120 operating hours available per week.

**Question:** What prescriptive analytics approach could the company use to determine the optimal number of units of Product A and Product B to produce to maximize its total profit?

**Answer:**

The company can use **Linear Programming**. This involves:

*   **Objective Function:** Maximize Profit = $5A + 7B$ (where A is the number of units of Product A, and B is the number of units of Product B)
*   **Constraints:**
    *   Machine 1 constraint: $2A + 1B \le 100$
    *   Machine 2 constraint: $1A + 3B \le 120$
    *   Non-negativity constraints: $A \ge 0$, $B \ge 0$

By solving this linear programming problem (using software or algorithms), the company can find the optimal values for A and B that maximize profit while respecting machine capacity.

---

### 3. Relationship and Progression Between Levels (CO1, CO2)

*   **Descriptive Analytics** is the foundation. You need to know what happened before you can predict what might happen or recommend what to do.
*   **Predictive Analytics** builds upon descriptive analytics. It uses historical patterns to forecast future events.
*   **Prescriptive Analytics** relies on both descriptive and predictive insights to recommend optimal actions. It answers the "so what?" and "now what?" questions.

**Progression:**

```
What Happened? (Descriptive)
      |
      V
What Might Happen? (Predictive)
      |
      V
What Should We Do? (Prescriptive)
```

**Important Point:** These levels are not always mutually exclusive and often work in conjunction. A dashboard (descriptive) might highlight a declining trend, which then prompts a predictive analysis to forecast future sales, leading to prescriptive recommendations for marketing campaigns.

**Textbook/Reference Insights:**

*   **All textbooks** implicitly or explicitly discuss this progression. The journey from reporting (descriptive) to forecasting (predictive) and then to optimization/recommendation (prescriptive) is a core theme in business analytics.

---

### 4. Visualizing Data for Analytics (CO4)

While this topic is explicitly covered in CO4, it's crucial to note its role across all levels of analytics.

**Key Concepts:**

*   **Data Visualization:** The graphical representation of information and data.
*   **Purpose:** To make complex data more accessible, understandable, and actionable.

**Types of Visual Charts and their Applications:**

*   **Bar Charts:** Comparing discrete categories (e.g., sales by product category).
*   **Line Charts:** Showing trends over time (e.g., monthly sales).
*   **Pie Charts:** Showing parts of a whole (use with caution, best for few categories) (e.g., market share by company).
*   **Scatter Plots:** Showing the relationship between two numerical variables (e.g., advertising spend vs. sales).
*   **Histograms:** Showing the distribution of a single numerical variable (e.g., distribution of customer ages).
*   **Heatmaps:** Visualizing data where values are depicted by color intensity (e.g., website click-through rates on different page areas).
*   **Treemaps:** Displaying hierarchical data as nested rectangles (e.g., sales breakdown by region and then by city).

**Example:** A descriptive analytics report on customer demographics might use pie charts for gender distribution, bar charts for age group distribution, and geographic maps for customer locations. A predictive analytics report on customer churn might use a scatter plot to show the relationship between customer engagement time and churn probability.

**Textbook/Reference Insights:**

*   **Evans (2019)** and **Maheshwari (2017)** often dedicate sections to data visualization techniques and their importance in communicating insights.

---

### 5. Business Performance Management and Analytics (CO7)

**Key Concepts:**

*   **Business Performance Management (BPM):** A systematic approach to continuously improving business performance by setting objectives, measuring performance, and taking corrective actions.
*   **Analytics in BPM:** Analytics is the engine that drives effective BPM. It provides the data and insights needed to understand performance, identify gaps, and make informed decisions for improvement.

**Analytics in Business Support Functions:**

*   **Marketing:** Customer segmentation, campaign effectiveness, ROI analysis.
*   **Finance:** Financial forecasting, cost analysis, risk management.
*   **Operations:** Process optimization, supply chain efficiency, quality control.
*   **Human Resources:** Workforce analytics, talent management, employee retention.
*   **Sales:** Sales forecasting, performance tracking, lead scoring.

**How Analytics Supports BPM:**

1.  **Setting Performance Goals:** Using historical data (descriptive) to set realistic targets.
2.  **Monitoring Performance:** Tracking KPIs in real-time using dashboards (descriptive).
3.  **Diagnosing Performance Issues:** Analyzing deviations from targets to understand root causes.
4.  **Predicting Future Performance:** Forecasting outcomes based on current trends (predictive).
5.  **Recommending Actions:** Suggesting strategies to improve performance (prescriptive).

**Example:** A company uses descriptive analytics to track customer satisfaction scores. If scores decline, predictive analytics might forecast a drop in customer retention. Prescriptive analytics could then recommend specific service improvements or targeted customer outreach programs.

**Textbook/Reference Insights:**

*   **Sharda, Delen, & Turban (2018):** Directly links analytics to business intelligence and performance management.
*   **Laursen & Thorlund (2017):** Focuses on how analytics can move businesses beyond simple reporting to active performance enhancement.

---

### Important Points to Remember:

*   Analytics is a journey, not a destination. It's an iterative process of inquiry and discovery.
*   The three levels of analytics are hierarchical but interconnected. Each builds upon the previous one.
*   **Descriptive analytics** is about understanding the past.
*   **Predictive analytics** is about anticipating the future.
*   **Prescriptive analytics** is about influencing the future by recommending actions.
*   Data visualization is crucial for making analytics accessible and actionable at all levels.
*   Analytics is a key enabler of effective Business Performance Management.

---

### Practice Questions (Comprehensive)

1.  A marketing team is reviewing customer data. They want to know the average purchase value per customer segment. Which level of analytics are they using? What type of chart might they use to present this?
2.  A logistics company is trying to predict the arrival time of its delivery trucks based on traffic conditions, distance, and driver behavior. Which level of analytics is most relevant here?
3.  A bank wants to determine the optimal interest rate to offer for a new loan product to maximize profitability while considering market competition and customer default risk. Which level of analytics would be most appropriate for this decision?
4.  Explain the difference between descriptive and predictive analytics using a retail example.
5.  Consider the following scenario: A company notices a significant increase in website bounce rates on a particular product page.
    a) What level of analytics is being used to identify this issue?
    b) What could be the next step using predictive analytics?
    c) What might a prescriptive analytics solution involve?

---

### Answers to Comprehensive Practice Questions:

1.  **Level of Analytics:** Descriptive Analytics.
    **Chart Type:** A bar chart would be suitable to compare the average purchase value across different customer segments.
2.  **Level of Analytics:** Predictive Analytics. The company is trying to forecast a future outcome (arrival time) based on historical and current data.
3.  **Level of Analytics:** Prescriptive Analytics. The bank needs to not only understand potential outcomes (e.g., default rates) but also recommend a specific action (interest rate) to achieve an objective (maximize profitability).
4.  **Retail Example:**
    *   **Descriptive Analytics:** A retailer might use descriptive analytics to analyze last year's sales data to determine which products were the best sellers, the average transaction value, or the peak sales days. For example, "Our top-selling product last month was Product X, with 1,500 units sold."
    *   **Predictive Analytics:** To predict this year's sales for Product X based on historical trends, promotional activities, and economic indicators. For example, "Based on current trends, we predict sales of Product X to be around 1,700 units next month."
5.  Scenario: Increased website bounce rates.
    a) **Level of Analytics:** Descriptive Analytics. Identifying the increase in bounce rates on a specific page is a report on past website behavior.
    b) **Predictive Analytics Step:** Using predictive analytics, they could try to predict *which user characteristics* are most associated with high bounce rates on that page (e.g., users from specific referral sources, users on mobile devices, users new to the site). They might also try to predict if specific changes (e.g., page load time) will lead to a decrease in bounce rates.
    c) **Prescriptive Analytics Solution:** Based on the predictive insights, a prescriptive solution might recommend specific actions such as:
        *   Optimizing the page content or design for mobile users.
        *   Improving the page's load speed.
        *   Testing different call-to-action buttons to guide users further down the sales funnel.
        *   A/B testing different versions of the page to see which one reduces bounce rates the most.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
