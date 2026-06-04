---
title: "Performance management system"
subject: "INTRODUCTION TO BUSINESS ANALYTICS"
module: "Module 4: Prescriptive Analytics : Introduction"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463a23"
status: "completed"
scrapedAt: "2026-05-20T18:05:45.086Z"
---
## Module 4: Prescriptive Analytics - Introduction: Performance Management System

This module introduces the crucial concept of Performance Management Systems (PMS) within the broader context of prescriptive analytics. We will explore how PMS leverages data and analytics to drive improved organizational performance and achieve strategic objectives.

---

### 1. Understanding Business Analytics and Competitive Strategy (CO1)

*   **Definition of Business Analytics:** Business analytics is the process of using data, statistical analysis, and analytical technologies to describe, predict, and recommend business actions. It transforms raw data into actionable insights.
    *   *(Sharda, Delen & Turban, 2018):* "Business analytics is the use of data, information technology, knowledge, statistical analysis, and mathematical and computational sciences to drive business decisions."
*   **Business Analytics as a Competitive Strategy:** In today's data-rich environment, organizations that effectively employ business analytics gain a significant competitive advantage by:
    *   **Making better decisions:** Data-driven decisions are more objective and less prone to bias.
    *   **Improving operational efficiency:** Identifying bottlenecks and optimizing processes.
    *   **Understanding customer behavior:** Personalizing offers and improving customer satisfaction.
    *   **Identifying new opportunities:** Spotting market trends and emerging demands.
    *   **Mitigating risks:** Proactively identifying and addressing potential threats.
    *   *(U Dinesh Kumar, 2017):* Emphasizes how analytics can transform a business from a reactive to a proactive and strategic entity.

---

### 2. Importance of Analytics in Decision Making and Problem Solving (CO2)

*   **Data-Driven Decision Making:**
    *   Moves away from gut feelings and intuition to evidence-based choices.
    *   Increases confidence in decisions and reduces uncertainty.
    *   Facilitates a more objective approach to problem-solving.
*   **Analytics for Problem Solving:**
    *   **Identifying Root Causes:** Analytics can uncover the underlying reasons for problems, not just the symptoms.
    *   **Quantifying Impact:** Measuring the cost or impact of a problem to prioritize solutions.
    *   **Evaluating Alternatives:** Testing different solutions analytically before implementation.
    *   **Monitoring Progress:** Tracking the effectiveness of implemented solutions.
    *   *(Prasad & Acharya, 2016):* Highlight that analytics provides the tools and methodologies to dissect complex business problems and derive optimal solutions.

---

### 3. Application of Descriptive Analytics in Decision Making (CO3)

*   **Descriptive Analytics:** This is the most fundamental level of analytics, focused on understanding what *has happened*. It involves summarizing historical data to gain insights.
    *   *(Sharda, Delen & Turban, 2018):* "Descriptive analytics answer the question: What happened?"
*   **Key Techniques:**
    *   **Reporting:** Summarizing data in tables, charts, and dashboards.
    *   **Data Visualization:** Presenting data graphically to identify patterns and trends.
    *   **Data Mining:** Discovering hidden patterns and relationships in large datasets.
    *   **Statistical Summaries:** Mean, median, mode, standard deviation, etc.
*   **Examples in Decision Making:**
    *   **Sales Performance:** Analyzing past sales figures to understand which products are selling well, in which regions, and during which periods. This informs inventory management and marketing strategies.
    *   **Customer Demographics:** Understanding the age, location, and purchasing habits of your customer base to tailor marketing campaigns.
    *   **Website Traffic Analysis:** Identifying popular pages and user navigation paths to improve website design and user experience.
    *   *(U Dinesh Kumar, 2017):* Provides numerous examples of how descriptive analytics can reveal trends in customer behavior, operational inefficiencies, and market dynamics.

---

### 4. Data Visualization and Various Types of Visual Charts (CO4)

*   **Data Visualization:** The graphical representation of data to help users understand the significance of the data. It makes complex information accessible and digestible.
    *   *(Laursen & Thorlund, 2017):* "Visualization is the bridge between raw data and human understanding."
*   **Why Visualize?**
    *   **Easier to understand complex data.**
    *   **Faster identification of trends, patterns, and outliers.**
    *   **Improved communication of insights.**
    *   **More engaging and memorable.**
*   **Key Types of Visual Charts:**
    *   **Bar Charts:** Used for comparing discrete categories.
        *   *Example:* Comparing sales performance across different product lines.
    *   **Line Charts:** Used to show trends over time.
        *   *Example:* Tracking monthly website visitors over a year.
    *   **Pie Charts:** Used to show proportions of a whole. Best for a limited number of categories.
        *   *Example:* Showing the market share of different companies in an industry.
    *   **Scatter Plots:** Used to show the relationship between two numerical variables.
        *   *Example:* Plotting advertising spend against sales revenue to see if there's a correlation.
    *   **Histograms:** Used to show the distribution of a single numerical variable.
        *   *Example:* Displaying the distribution of customer ages.
    *   **Heatmaps:** Used to visualize data in a matrix format, with colors representing values.
        *   *Example:* Showing website user activity on different parts of a page.
    *   *(Maheshwari, 2017):* Discusses the importance of choosing the right visualization for the data and the intended message.

---

### 5. Applying Simple Linear Regression Model in Predictive Analytics Problems (CO5)

*   **Predictive Analytics:** This level of analytics focuses on forecasting what *is likely to happen* in the future based on historical data.
    *   *(Sharda, Delen & Turban, 2018):* "Predictive analytics answer the question: What is likely to happen?"
*   **Simple Linear Regression:** A statistical technique used to model the linear relationship between two numerical variables: an independent variable (predictor) and a dependent variable (outcome).
    *   **Model:** $Y = \beta_0 + \beta_1 X + \epsilon$
        *   $Y$: Dependent variable (what you want to predict)
        *   $X$: Independent variable (what you use to predict Y)
        *   $\beta_0$: Y-intercept (the value of Y when X is 0)
        *   $\beta_1$: Slope (the change in Y for a one-unit change in X)
        *   $\epsilon$: Error term (the unexplained variation in Y)
*   **Application Example:**
    *   **Predicting Sales Based on Advertising Spend:**
        *   **Independent Variable (X):** Monthly advertising expenditure ($).
        *   **Dependent Variable (Y):** Monthly sales revenue ($).
        *   If a regression analysis reveals a relationship like $Sales = 5000 + 1.5 \times AdvertisingSpend$, then for an advertising spend of $10,000, we could predict sales of $5000 + 1.5 \times 10000 = $20,000$.
    *   *(U Dinesh Kumar, 2017):* Dedicates significant sections to regression techniques and their practical application in business forecasting.
*   **Key Considerations:**
    *   **Correlation vs. Causation:** Regression shows correlation, not necessarily causation.
    *   **Assumptions:** Linear regression has assumptions (e.g., linearity, independence of errors) that should be checked.
    *   **Model Fit:** Metrics like R-squared are used to assess how well the model fits the data.

---

### 6. Understanding the Basic Concepts in Prescriptive Analytics (CO6)

*   **Prescriptive Analytics:** This is the most advanced level of analytics, focused on recommending *what action should be taken* to achieve a desired outcome.
    *   *(Sharda, Delen & Turban, 2018):* "Prescriptive analytics answer the question: What should be done?"
*   **Key Characteristics:**
    *   **Action-Oriented:** Provides specific recommendations.
    *   **Optimization:** Aims to find the best possible solution given constraints.
    *   **Simulation:** Models different scenarios to predict outcomes of various actions.
    *   **Leverages Predictive Insights:** Builds upon descriptive and predictive analytics.
*   **Key Techniques:**
    *   **Optimization:**
        *   **Linear Programming:** Used to find the best outcome in a mathematical model whose requirements are represented by linear relationships. (e.g., maximizing profit under resource constraints).
        *   **Integer Programming:** Similar to linear programming but variables must be integers (e.g., deciding whether to build a factory or not).
    *   **Simulation:**
        *   **Monte Carlo Simulation:** Uses random sampling to obtain numerical results, often used to model the probability of different outcomes in a process that cannot easily be predicted due to the intervention of random variables. (e.g., forecasting financial outcomes with uncertainty).
    *   **Decision Analysis:**
        *   **Decision Trees:** Visual representation of decisions and their possible consequences, including chance event outcomes, resource costs, and utility.
    *   **Rule-Based Systems:** If-then logic to guide decision-making.
*   *(Prasad & Acharya, 2016):* Explains that prescriptive analytics is about making intelligent recommendations to improve future outcomes, often involving mathematical modeling and algorithms.
*   *(U Dinesh Kumar, 2017):* Discusses how optimization and simulation are core components of prescriptive analytics, enabling businesses to make optimal choices.

---

### 7. Understanding the Essence of Business Performance Management and Analytics in Business Support Functions (CO7)

*   **Business Performance Management (BPM):** A continuous process that links strategic objectives with day-to-day operations to improve organizational performance. It involves defining goals, measuring progress, and taking corrective action.
    *   *(Sharda, Delen & Turban, 2018):* BPM is a framework for improving business results through a combination of strategic planning, performance measurement, and process management.
    *   **Key Components of BPM:**
        *   **Strategy Formulation:** Defining goals and objectives.
        *   **Performance Measurement:** Tracking key performance indicators (KPIs).
        *   **Performance Monitoring:** Analyzing progress against targets.
        *   **Performance Improvement:** Taking actions to achieve better results.
*   **Analytics in Business Support Functions:** Business support functions, traditionally seen as cost centers, can leverage analytics to become strategic partners and drive efficiency and effectiveness.
    *   **Human Resources (HR):**
        *   **Predictive Staffing:** Forecasting workforce needs.
        *   **Employee Retention Analysis:** Identifying factors that lead to employee turnover.
        *   **Performance Management:** Analyzing employee performance data to identify training needs and high potentials.
    *   **Finance:**
        *   **Budgeting and Forecasting:** More accurate financial predictions.
        *   **Risk Management:** Identifying financial risks and developing mitigation strategies.
        *   **Fraud Detection:** Analyzing financial transactions for suspicious patterns.
    *   **Marketing:**
        *   **Customer Segmentation:** Identifying profitable customer groups.
        *   **Campaign Effectiveness:** Measuring ROI of marketing campaigns.
        *   **Customer Lifetime Value (CLV) Prediction:** Forecasting the total value a customer will bring.
    *   **Operations:**
        *   **Supply Chain Optimization:** Reducing costs and improving delivery times.
        *   **Quality Control:** Identifying factors affecting product quality.
        *   **Inventory Management:** Optimizing stock levels to meet demand and minimize costs.
    *   *(U Dinesh Kumar, 2017):* Provides examples of how analytics enhances decision-making across various business functions, leading to improved overall performance.
    *   *(Laursen & Thorlund, 2017):* Emphasize that by integrating analytics, support functions can proactively contribute to strategic goals and demonstrate their value.

---

### **Important Points to Remember:**

*   **Analytics is a journey:** It progresses from understanding what happened (descriptive) to predicting what might happen (predictive) and finally recommending what should be done (prescriptive).
*   **Performance Management is key:** A well-defined PMS provides the framework for applying analytics to drive business improvements.
*   **Data visualization is crucial:** It translates complex data into actionable insights for better decision-making.
*   **Prescriptive analytics aims for optimization:** It uses mathematical models and algorithms to find the best solutions.
*   **Support functions can be strategic:** By embracing analytics, HR, Finance, Marketing, and Operations can significantly enhance business performance.

---

### **Practice Questions:**

1.  **CO1, CO2:** Explain how business analytics can be used as a competitive strategy. Provide an example of a company that effectively uses analytics for competitive advantage.
2.  **CO3:** A retail store wants to understand its customer base better. What types of descriptive analytics could they use, and what insights might they gain?
3.  **CO4:** You are given data on monthly website traffic and the number of online sales. What type of chart would be most suitable to visualize the relationship between these two variables? Explain your choice.
4.  **CO5:** A company wants to predict its electricity consumption based on the average daily temperature. If they perform a simple linear regression and get the equation $Consumption = 150 + 3 \times Temperature$, what is the predicted consumption if the average temperature is 25 degrees Celsius? What does the slope of 3 represent?
5.  **CO6:** Differentiate between predictive and prescriptive analytics. Provide an example of a problem where prescriptive analytics would be applied.
6.  **CO7:** How can the Human Resources department use analytics to improve employee retention?
7.  **CO1, CO7:** Discuss the role of Business Performance Management in driving organizational success, and how analytics supports this process, particularly in business support functions.

---

### **Answers to Practice Questions:**

1.  **CO1, CO2:** Business analytics provides a competitive advantage by enabling organizations to make better, data-driven decisions, understand customer behavior, optimize operations, and identify new opportunities. For example, **Amazon** uses extensive analytics to personalize recommendations, optimize its supply chain, and predict customer demand, giving it a significant edge over competitors.
2.  **CO3:** Descriptive analytics could include:
    *   **Customer Demographics Analysis:** Analyzing age, gender, location, purchase history to understand who the customers are.
    *   **Sales Trend Analysis:** Identifying best-selling products, peak sales periods (e.g., day of week, time of day), and regional sales performance.
    *   **Basket Analysis:** Understanding which products are frequently bought together to inform product placement and bundling strategies.
    *   **Loyalty Program Analysis:** Identifying patterns among loyal customers to encourage repeat business.
3.  **CO4:** A **scatter plot** would be most suitable to visualize the relationship between monthly website traffic and the number of online sales. This is because both variables are numerical, and a scatter plot effectively shows if there is a correlation or pattern between them.
4.  **CO5:**
    *   The predicted consumption is $150 + 3 \times 25 = 150 + 75 = 225$ units.
    *   The slope of 3 represents that for every one-degree Celsius increase in the average daily temperature, the electricity consumption is predicted to increase by 3 units.
5.  **CO6:**
    *   **Predictive analytics** focuses on forecasting future events (e.g., "What is likely to happen?").
    *   **Prescriptive analytics** focuses on recommending actions to achieve desired outcomes (e.g., "What should be done?").
    *   **Example Problem for Prescriptive Analytics:** A logistics company wants to determine the optimal routes for its delivery trucks to minimize fuel costs and delivery times, considering traffic conditions, delivery windows, and vehicle capacity. Prescriptive analytics (using optimization techniques like routing algorithms) would recommend the best sequence of stops and routes.
6.  **CO7:** The HR department can use analytics to:
    *   **Analyze exit interview data:** Identify common reasons for employees leaving.
    *   **Predict employee churn:** Use machine learning models to identify employees at high risk of leaving based on factors like tenure, performance reviews, engagement survey scores, and compensation.
    *   **Optimize recruitment processes:** Analyze the effectiveness of different sourcing channels and identify traits of successful hires.
    *   **Personalize employee development:** Use performance data to recommend specific training or career paths.
7.  **CO1, CO7:** Business Performance Management (BPM) is crucial for organizational success because it aligns strategic objectives with operational execution, ensuring that efforts are focused on achieving desired outcomes. Analytics is the engine that drives BPM.
    *   **In support functions:**
        *   **HR:** Analytics helps in workforce planning, talent acquisition effectiveness, and understanding employee satisfaction, all of which impact overall organizational productivity and culture.
        *   **Finance:** Accurate forecasting, risk assessment, and cost optimization through analytics directly contribute to profitability and financial stability.
        *   **Marketing:** Data-driven customer insights and campaign measurement ensure that marketing efforts are efficient and contribute to revenue growth.
        *   **Operations:** Optimizing supply chains, improving quality, and managing inventory efficiently directly impact cost, delivery, and customer satisfaction, thereby boosting the company's performance.
    By leveraging analytics, support functions move from being administrative to strategic, proactively contributing to the achievement of business goals.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
