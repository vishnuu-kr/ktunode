---
title: "Visualization of Variables from Different Scales."
subject: "DATA ANALYTICS"
module: "Module 2: Association of Two Variables:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b711"
status: "completed"
scrapedAt: "2026-05-20T16:43:53.360Z"
---
# DATA ANALYTICS - Module 2: Association of Two Variables - Visualization of Variables from Different Scales

These notes cover the visualization of variables from different scales within the context of exploring the association between two variables in data analytics.

## Learning Outcomes:

*   Understand the different scales of measurement for variables (Nominal, Ordinal, Interval, Ratio).
*   Select appropriate visualization techniques for different combinations of variable scales.
*   Interpret visualizations to identify and describe relationships between variables of different scales.
*   Recognize the limitations of certain visualizations when dealing with specific variable scales.

## 1. Scales of Measurement

Before visualizing variables of different scales, it's crucial to understand what those scales are. This understanding will guide your choice of visualization techniques.

*   **Definition:** A scale of measurement describes the nature of the values assigned to a variable. Different scales provide different levels of information.

*   **Four Scales of Measurement:**

    *   **Nominal Scale:**
        *   **Definition:** Data is categorized into mutually exclusive, unordered categories.
        *   **Examples:** Colors (red, blue, green), Types of fruit (apple, banana, orange), Gender (male, female, non-binary), Country of origin.
        *   **Mathematical Operations:** Only equality (=) or inequality (!=) comparisons are meaningful. You can count the frequency of each category.
    *   **Ordinal Scale:**
        *   **Definition:** Data is categorized into mutually exclusive categories, but these categories have a meaningful order or ranking. The difference between categories is *not* necessarily equal.
        *   **Examples:** Education Level (high school, bachelor's, master's, doctorate), Customer satisfaction (very dissatisfied, dissatisfied, neutral, satisfied, very satisfied), Likert scales (Strongly Disagree, Disagree, Neutral, Agree, Strongly Agree).
        *   **Mathematical Operations:**  Greater than (>), less than (<), and equality (=) or inequality (!=) comparisons are meaningful.  Ranking and frequency counts are appropriate.  Arithmetic operations (addition, subtraction, etc.) are generally *not* meaningful because the intervals between categories aren't equal.
    *   **Interval Scale:**
        *   **Definition:** Data is measured on a scale where the intervals between values are equal.  There is *no* true zero point.
        *   **Examples:** Temperature in Celsius or Fahrenheit, Calendar dates.
        *   **Mathematical Operations:** Addition (+), subtraction (-), equality (=) or inequality (!=), greater than (>), and less than (<) comparisons are meaningful. Ratios are not meaningful because of the absence of a true zero.
    *   **Ratio Scale:**
        *   **Definition:** Data is measured on a scale where the intervals between values are equal, and there *is* a true zero point. This zero point represents the complete absence of the quantity being measured.
        *   **Examples:** Height, Weight, Age, Income, Temperature in Kelvin, Number of customers.
        *   **Mathematical Operations:** All arithmetic operations are meaningful (addition, subtraction, multiplication, division), including ratios.  You can say that someone is twice as tall as another person.

**Important Point:**  The higher the scale of measurement, the more statistical analyses and visualizations you can apply.

## 2. Visualization Techniques for Different Combinations of Variable Scales

This section outlines common visualization techniques for different combinations of variable scales. Remember that the "best" visualization depends on the specific data and the research question.

*   **Nominal vs. Nominal:**

    *   **Visualization:**
        *   **Bar Chart:**  Shows the frequency or percentage of each category for one variable, grouped by the categories of the other variable.  (Stacked bar charts can also be used.)
        *   **Mosaic Plot:** Represents the proportions of each combination of categories within a rectangular area. The area of each rectangle is proportional to the number of observations in that category.
        *   **Contingency Table (Heatmap):**  A table that shows the frequencies of combinations of categories. This can be visualized as a heatmap, where the color intensity corresponds to the frequency.

    *   **Example:** Analyzing the relationship between `Preferred Fruit (Nominal)` and `Gender (Nominal)`.  A bar chart could show the number of males and females who prefer each type of fruit.

*   **Nominal vs. Ordinal:**

    *   **Visualization:**
        *   **Bar Chart:** Similar to Nominal vs. Nominal.  Order the ordinal variable categories in a meaningful way.
        *   **Grouped/Stacked Bar Chart:** Useful for comparing the distributions of the nominal variable across different levels of the ordinal variable.
        *   **Box Plot:** While box plots are typically used for numerical data, they can sometimes be used with ordinal variables if the variable has enough distinct ordered categories. Each box represents the distribution of the nominal variable within each level of the ordinal variable.

    *   **Example:**  Analyzing the relationship between `Product Category (Nominal)` and `Customer Satisfaction (Ordinal)`. A bar chart could show the customer satisfaction ratings for each product category.

*   **Nominal vs. Interval/Ratio:**

    *   **Visualization:**
        *   **Bar Chart:** Shows the mean or median of the interval/ratio variable for each category of the nominal variable.
        *   **Box Plot:** Compares the distribution of the interval/ratio variable across different categories of the nominal variable.
        *   **Violin Plot:** Similar to a box plot, but shows the probability density of the data at different values.
        *   **Histograms:** Can be used, but should be presented side-by-side or in small multiples for comparison.

    *   **Example:** Analyzing the relationship between `City (Nominal)` and `Average Income (Ratio)`.  A bar chart could show the average income for each city. A box plot could show the distribution of income within each city.

*   **Ordinal vs. Ordinal:**

    *   **Visualization:**
        *   **Heatmap (Contingency Table):** Shows the frequency of each combination of ordinal categories.
        *   **Stacked Bar Chart:**  Each bar represents a category of one ordinal variable, and is divided into segments representing the categories of the other ordinal variable.
        *   **Bubble Chart:**  Positioned according to ordinal axes, with the size of bubbles representing the frequency of data at that combined level.

    *   **Example:** Analyzing the relationship between `Education Level (Ordinal)` and `Job Performance Rating (Ordinal)`.  A heatmap could show the number of people at each combination of education level and job performance rating.

*   **Ordinal vs. Interval/Ratio:**

    *   **Visualization:**
        *   **Box Plot:** Compares the distribution of the interval/ratio variable across different levels of the ordinal variable.
        *   **Violin Plot:** Similar to a box plot, but shows the probability density.
        *   **Bar Chart:** Shows the mean or median of the interval/ratio variable for each level of the ordinal variable.
        *   **Line Chart:** Can be used if the ordinal variable is treated as a continuous variable (use with caution).

    *   **Example:** Analyzing the relationship between `Customer Satisfaction (Ordinal)` and `Purchase Amount (Ratio)`.  A box plot could show the distribution of purchase amounts for each customer satisfaction level.

*   **Interval/Ratio vs. Interval/Ratio:**

    *   **Visualization:**
        *   **Scatter Plot:** Shows the relationship between two continuous variables.
        *   **Line Chart:** Shows the trend of one variable over the other (often used with time series data).
        *   **Hexbin Plot:** Similar to a scatter plot, but divides the space into hexagonal bins and colors them based on the density of points.  Useful for large datasets where scatter plots become cluttered.
        *   **Contour Plot:** Visualizes the joint distribution of two continuous variables by drawing contour lines that connect points of equal density.

    *   **Example:** Analyzing the relationship between `Advertising Spend (Ratio)` and `Sales Revenue (Ratio)`. A scatter plot would show the relationship between the two variables.

## 3. Interpreting Visualizations

*   **Looking for Patterns:** Identify trends, clusters, outliers, and other patterns in the data.
*   **Considering Context:** Interpret visualizations in the context of the research question and the data.
*   **Avoiding Misinterpretations:**  Be aware of the limitations of each visualization technique and avoid drawing conclusions that are not supported by the data.  Consider potential confounding variables.

**Important Point:** Always label your axes clearly and provide a descriptive title for your visualizations.

## 4. Limitations of Visualizations

*   **Scale Misrepresentation:**  Be careful when using visual elements (e.g., bar heights, areas) to represent quantities.  Misleading scales can distort the perception of differences.
*   **Overplotting:** In scatter plots with many points, points may overlap and obscure the underlying patterns. Use techniques like hexbin plots or transparency to address this.
*   **Causation vs. Correlation:**  Visualization can reveal associations between variables, but it does *not* imply causation.
*   **Simpson's Paradox:** A trend appears in several different groups of data but disappears or reverses when these groups are combined.  Always analyze data at different levels of aggregation.
*   **Data Aggregation Bias:** The level of data aggregation can influence the observed relationships.

## 5. Practice Questions/Exercises

1.  **Question:** You want to explore the relationship between `Product Category (Nominal)` and `Profit Margin (Ratio)`. Which visualization(s) would be most appropriate? Explain why.

    **Answer:** A bar chart showing the average profit margin for each product category would be a good choice. A box plot showing the distribution of profit margins for each product category would also be useful to identify variations within each category.

2.  **Question:** You have data on `Customer Age (Ratio)` and `Income Level (Ordinal: Low, Medium, High)`.  What visualization technique would you recommend to explore their association?  Why?

    **Answer:** Box plots or violin plots showing the distribution of Customer Age for each Income Level would be suitable. This allows you to compare the age distributions across different income groups. A bar chart showing the average age for each income level could also provide a summary view.

3.  **Question:** You are analyzing the relationship between two ordinal variables: `Customer Service Rating (Poor, Fair, Good, Excellent)` and `Product Quality Rating (Poor, Fair, Good, Excellent)`. What visualization would be most appropriate?

    **Answer:** A heatmap (contingency table) is a good choice. The rows and columns would represent the customer service and product quality ratings, respectively, and the cells would contain the frequency of each combination. This allows you to quickly see which combinations are most common.  A stacked bar chart could also be used.

4.  **Question:**  Describe a scenario where a scatter plot might be misleading and how you could improve the visualization.

    **Answer:** If you have a large dataset with many overlapping points in a scatter plot (overplotting), it can be difficult to see the underlying relationship. To improve the visualization, you could use a hexbin plot or adjust the transparency of the points.  You could also use a jitter plot.

5.  **Question:** You want to visualize the relationship between `City (Nominal)` and `Average Rainfall (Ratio)`. You create a bar chart but find that some cities have very high rainfall compared to others, making it difficult to see the differences among the lower-rainfall cities. How could you improve the visualization?

    **Answer:**
    *   **Logarithmic Scale:** Use a logarithmic scale on the y-axis (rainfall). This can compress the range of values and make it easier to see differences among the lower-rainfall cities.  Ensure you label the y-axis appropriately to reflect the logarithmic scale.
    *   **Zoom/Focus:**  Create a second bar chart that zooms in on the cities with lower rainfall, excluding the outliers.

## 6. Important Points to Remember

*   Choose visualizations appropriate for the scales of measurement of the variables involved.
*   Clearly label axes and titles for all visualizations.
*   Consider potential limitations and biases when interpreting visualizations.
*   Always investigate unexpected patterns or outliers further.
*   Don't assume causation from correlation.
*   Experiment with different visualization techniques to find the most effective way to communicate your findings.
*   Context is key: always interpret your visualizations in the context of the specific problem or question you are addressing.
