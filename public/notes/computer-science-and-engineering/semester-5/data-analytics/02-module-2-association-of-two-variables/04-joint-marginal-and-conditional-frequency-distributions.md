---
title: "Joint, Marginal, and Conditional Frequency Distributions"
subject: "DATA ANALYTICS"
module: "Module 2: Association of Two Variables:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b70d"
status: "completed"
scrapedAt: "2026-05-20T16:43:50.560Z"
---
# DATA ANALYTICS: Module 2 - Association of Two Variables
## Topic: Joint, Marginal, and Conditional Frequency Distributions

**Learning Outcomes:**

*   Understand the concepts of joint, marginal, and conditional frequency distributions.
*   Construct and interpret joint, marginal, and conditional frequency distributions from raw data.
*   Calculate probabilities using joint, marginal, and conditional probabilities.
*   Analyze the relationship between two categorical variables using these distributions.

---

### 1. Introduction

*   When analyzing data, we often want to understand the relationship between two variables.
*   **Frequency distributions** provide a way to summarize and visualize data, showing how often each value or category occurs.
*   When dealing with *two* variables, we use:
    *   **Joint Frequency Distribution:**  Shows the frequency of combinations of categories for two variables.
    *   **Marginal Frequency Distribution:**  Shows the frequency of each variable separately.
    *   **Conditional Frequency Distribution:** Shows the frequency of one variable *given* a specific value of the other variable.

### 2. Key Concepts and Definitions

*   **Categorical Variables:** Variables that take on a limited number of distinct categories. Examples: gender, color, opinion.
*   **Contingency Table (or Two-Way Table):** A table used to display the frequencies of two categorical variables.
*   **Joint Frequency:** The number of observations that fall into a specific combination of categories for two variables.
*   **Joint Frequency Distribution:** A table showing the joint frequencies for all combinations of categories.
*   **Marginal Frequency:** The sum of the joint frequencies for a specific category of one variable, across all categories of the other variable.  It represents the total frequency of that specific category.
*   **Marginal Frequency Distribution:** A table (or row/column in the contingency table) showing the marginal frequencies for each category of a single variable.
*   **Conditional Frequency:** The frequency of a particular category of one variable, *given* a specific category of the other variable.
*   **Conditional Frequency Distribution:** A table showing the conditional frequencies of one variable for each category of the other variable. This is often expressed as a percentage of the row or column total.
*   **Independence:** Two variables are considered independent if the conditional distribution of one variable is the same for all values of the other variable.  If the distributions are different, there's an association between the variables.

### 3. Constructing Joint, Marginal, and Conditional Frequency Distributions

**Example:**

Suppose we surveyed 100 students about their favorite subject (Math or English) and their gender (Male or Female). The raw data is summarized in the following table:

|         | Math | English |
| :------ | :--- | :------ |
| Male    | 25   | 20      |
| Female  | 15   | 40      |

**3.1. Joint Frequency Distribution**

*   The table above *is* the joint frequency distribution.  Each cell shows the joint frequency of the corresponding categories.

    *   Joint Frequency (Male, Math) = 25
    *   Joint Frequency (Male, English) = 20
    *   Joint Frequency (Female, Math) = 15
    *   Joint Frequency (Female, English) = 40

**3.2. Marginal Frequency Distribution**

*   To calculate the marginal frequencies, we sum the rows and columns:

|         | Math | English | Total |
| :------ | :--- | :------ | :---- |
| Male    | 25   | 20      | 45    |
| Female  | 15   | 40      | 55    |
| **Total** | **40** | **60**  | **100** |

*   **Marginal Frequency (Male) = 45** (Total number of males)
*   **Marginal Frequency (Female) = 55** (Total number of females)
*   **Marginal Frequency (Math) = 40** (Total number who like Math)
*   **Marginal Frequency (English) = 60** (Total number who like English)

**3.3. Conditional Frequency Distribution**

*   We can create conditional distributions based on either rows or columns:

    *   **Conditional Distribution of Subject Preference *Given* Gender (Row percentages):**  We divide each cell in a row by the row total.

        |         | Math      | English   | Total   |
        | :------ | :-------- | :-------- | :------ |
        | Male    | 25/45 = 55.6% | 20/45 = 44.4% | 100%  |
        | Female  | 15/55 = 27.3% | 40/55 = 72.7% | 100%  |

        *   Interpretation:  55.6% of males prefer Math, while 44.4% prefer English.  27.3% of females prefer Math, while 72.7% prefer English.

    *   **Conditional Distribution of Gender *Given* Subject Preference (Column percentages):**  We divide each cell in a column by the column total.

        |         | Math      | English   |
        | :------ | :-------- | :-------- |
        | Male    | 25/40 = 62.5% | 20/60 = 33.3% |
        | Female  | 15/40 = 37.5% | 40/60 = 66.7% |
        | **Total** | **100%** | **100%** |

        *   Interpretation: 62.5% of those who like Math are male, while 37.5% are female. 33.3% of those who like English are male, while 66.7% are female.

### 4. Calculating Probabilities

*   We can use the joint, marginal, and conditional frequency distributions to estimate probabilities.

*   **Joint Probability:** Probability of an observation falling into a specific combination of categories.  `P(A and B) = Joint Frequency / Total Number of Observations`

    *   Example: P(Male and Math) = 25/100 = 0.25 or 25%

*   **Marginal Probability:** Probability of an observation falling into a specific category of one variable. `P(A) = Marginal Frequency of A / Total Number of Observations`

    *   Example: P(Male) = 45/100 = 0.45 or 45%
    *   Example: P(English) = 60/100 = 0.60 or 60%

*   **Conditional Probability:** Probability of an observation falling into a specific category of one variable, *given* that it falls into a specific category of the other variable. `P(A|B) = Joint Frequency of A and B / Marginal Frequency of B`  (Read:  "Probability of A given B").  This is essentially what the conditional frequency distribution calculates.

    *   Example: P(Math | Male) = 25/45 = 0.556 or 55.6%  (Probability of liking Math given the student is male).
    *   Example: P(Female | English) = 40/60 = 0.667 or 66.7% (Probability of being female given the student likes English).

### 5. Analyzing the Relationship Between Two Variables

*   By examining the conditional distributions, we can assess whether there is an association between the variables.
*   **If the conditional distributions are very different, there is evidence of an association.**
*   **If the conditional distributions are very similar, there is little evidence of an association, suggesting the variables are independent.**

**Example (From previous data):**

*   The conditional distribution of subject preference given gender shows a substantial difference between males and females.  A higher proportion of males like Math compared to females, and a higher proportion of females like English compared to males.
*   This suggests there *is* an association between gender and subject preference.

**Testing for Independence:**

Two categorical variables, A and B, are independent if and only if:

*   `P(A and B) = P(A) * P(B)` for all combinations of categories of A and B.
*   `P(A | B) = P(A)` for all categories of B.
*   `P(B | A) = P(B)` for all categories of A.

Using our example:

*   P(Male and Math) = 0.25
*   P(Male) = 0.45
*   P(Math) = 0.40
*   P(Male) * P(Math) = 0.45 * 0.40 = 0.18

Since 0.25 != 0.18, the variables are NOT independent.

### 6. Important Points to Remember

*   Joint, marginal, and conditional frequency distributions are powerful tools for exploring relationships between categorical variables.
*   Conditional distributions allow us to examine how one variable is distributed differently across the categories of another variable.
*   Independence is a key concept: if two variables are independent, the conditional distribution of one variable will be the same regardless of the value of the other variable.
*   These concepts form the foundation for more advanced statistical techniques like the Chi-Square test for independence.

### 7. Practice Questions/Exercises

**Question 1:**

The following data shows the relationship between smoking status (Smoker, Non-Smoker) and having lung cancer (Yes, No) in a sample of 200 people.

|           | Lung Cancer (Yes) | Lung Cancer (No) |
| :-------- | :---------------- | :--------------- |
| Smoker    | 40                | 60               |
| Non-Smoker | 10                | 90               |

a) Create the joint frequency distribution.  (It's already given in this case).
b) Create the marginal frequency distribution.
c) Calculate the conditional distribution of lung cancer *given* smoking status (row percentages).
d) Calculate the conditional distribution of smoking status *given* lung cancer (column percentages).
e)  What is P(Smoker and Lung Cancer)?
f) What is P(Non-Smoker)?
g) What is P(Lung Cancer | Smoker)?
h) Based on the conditional distributions, is there an association between smoking and lung cancer?  Why or why not?

**Question 2:**

Consider the following joint probability distribution:

|       | A     | B     |
| :---- | :---- | :---- |
| X     | 0.1   | 0.2   |
| Y     | 0.3   | 0.4   |

a)  Find P(X)
b)  Find P(B)
c)  Find P(X|B)
d) Are X and B independent?  Justify your answer.

---

### 8. Answers to Practice Questions/Exercises

**Question 1:**

a) **Joint Frequency Distribution:** (Provided in the question)

|           | Lung Cancer (Yes) | Lung Cancer (No) |
| :-------- | :---------------- | :--------------- |
| Smoker    | 40                | 60               |
| Non-Smoker | 10                | 90               |

b) **Marginal Frequency Distribution:**

|           | Lung Cancer (Yes) | Lung Cancer (No) | Total |
| :-------- | :---------------- | :--------------- | :---- |
| Smoker    | 40                | 60               | 100   |
| Non-Smoker | 10                | 90               | 100   |
| **Total**   | **50**            | **150**          | **200** |

c) **Conditional Distribution of Lung Cancer *Given* Smoking Status (Row percentages):**

|           | Lung Cancer (Yes) | Lung Cancer (No) | Total |
| :-------- | :---------------- | :--------------- | :---- |
| Smoker    | 40%               | 60%              | 100%  |
| Non-Smoker | 10%               | 90%              | 100%  |

d) **Conditional Distribution of Smoking Status *Given* Lung Cancer (Column percentages):**

|           | Lung Cancer (Yes) | Lung Cancer (No) |
| :-------- | :---------------- | :--------------- |
| Smoker    | 80%               | 40%              |
| Non-Smoker | 20%               | 60%              |
| **Total**   | **100%**          | **100%**         |

e) P(Smoker and Lung Cancer) = 40/200 = 0.20 or 20%

f) P(Non-Smoker) = 100/200 = 0.5 or 50%

g) P(Lung Cancer | Smoker) = 40/100 = 0.40 or 40%

h) **Yes, there is an association.** The conditional distributions show a significant difference. 40% of smokers have lung cancer, while only 10% of non-smokers have lung cancer. Also, 80% of people with lung cancer are smokers, while only 40% of people without lung cancer are smokers. This strongly suggests smoking is associated with an increased risk of lung cancer.

**Question 2:**

a) P(X) = P(X and A) + P(X and B) = 0.1 + 0.2 = 0.3
b) P(B) = P(X and B) + P(Y and B) = 0.2 + 0.4 = 0.6
c) P(X|B) = P(X and B) / P(B) = 0.2 / 0.6 = 1/3 = 0.333
d) To check for independence, we can see if P(X|B) = P(X). P(X) = 0.3 and P(X|B) = 0.333.  Since these are not equal, X and B are NOT independent.  (You could also check if P(X and B) = P(X) * P(B).  0.2 != 0.3 * 0.6).
