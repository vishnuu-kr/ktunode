---
title: "Introduction to machine learning algorithms - supervised vs. unsupervised learning"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 2: Introduction to machine learning algorithms "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3642b"
status: "completed"
scrapedAt: "2026-05-23T16:22:19.443Z"
---
# Introduction to Machine Learning

## Module 2: Introduction to Machine Learning Algorithms

### Topic: Supervised vs. Unsupervised Learning

This module introduces the fundamental concepts of machine learning algorithms, with a particular focus on differentiating between supervised and unsupervised learning paradigms. Understanding this distinction is crucial for selecting and applying the appropriate algorithms to solve various real-world problems.

---

### Learning Outcomes:

*   **LO1:** Differentiate between supervised and unsupervised learning.
*   **LO2:** Identify key characteristics of supervised learning tasks, including regression and classification.
*   **LO3:** Identify key characteristics of unsupervised learning tasks, including clustering and dimensionality reduction.
*   **LO4:** Understand the role of labeled and unlabeled data in supervised and unsupervised learning, respectively.
*   **LO5:** Recognize common algorithms associated with each learning paradigm.

---

### Course Outcomes Addressed:

*   **CO1:** (Indirectly) Understanding data types and relationships is foundational for applying ML algorithms effectively.
*   **CO2:** This topic directly addresses the application of different supervised (regression, classification) and unsupervised (clustering, dimensionality reduction) machine learning algorithms. (Knowledge Level: K3)
*   **CO3:** While this topic focuses on algorithms, the data preprocessing steps (discussed in other modules) are essential for preparing data for these algorithms.
*   **CO4:** This topic lays the groundwork for understanding the algorithms that will be implemented later.

---

### 1. What is Machine Learning? (Brief Recap)

Machine learning (ML) is a subfield of artificial intelligence that enables systems to learn from data without being explicitly programmed. Instead of writing specific instructions for every task, ML algorithms identify patterns and make predictions or decisions based on the data they are trained on.

---

### 2. The Two Main Pillars: Supervised vs. Unsupervised Learning

The core of machine learning algorithms can be broadly categorized into two main approaches based on the type of data used for training and the nature of the learning task.

---

### 3. Supervised Learning

#### 3.1. Definition

**Supervised learning** is a type of machine learning where an algorithm learns from a labeled dataset. A labeled dataset consists of input features (independent variables) and corresponding output labels (dependent variables or targets). The algorithm's goal is to learn a mapping function from the input features to the output label, so that it can predict the output for new, unseen data.

*   **Key Idea:** Learning from examples with known answers.
*   **Analogy:** Like a student learning with a teacher providing correct answers.

#### 3.2. Characteristics

*   **Labeled Data:** Requires a dataset where each data point has a corresponding correct output.
*   **Goal:** To predict an output variable based on input variables.
*   **Types of Problems:**
    *   **Regression:** Predicting a continuous numerical output.
    *   **Classification:** Predicting a discrete categorical output.

#### 3.3. Key Concepts

*   **Features (Input Variables):** The independent variables used to make predictions.
*   **Labels/Targets (Output Variable):** The dependent variable that the model aims to predict.
*   **Training Data:** The labeled dataset used to train the model.
*   **Test Data:** Unseen data used to evaluate the model's performance.
*   **Model:** The learned mapping function.
*   **Prediction/Inference:** The process of using the trained model to predict outputs for new data.

#### 3.4. Common Supervised Learning Tasks

**a) Regression**

*   **Description:** The task of predicting a continuous numerical value. The output variable is a real number.
*   **Examples:**
    *   Predicting house prices based on features like size, location, and number of bedrooms. (e.g., predicting \$350,000)
    *   Predicting the temperature tomorrow based on historical weather data. (e.g., predicting 25.5°C)
    *   Predicting a student's score on a test based on study hours. (e.g., predicting 85%)
*   **Key Algorithms:**
    *   Linear Regression
    *   Polynomial Regression
    *   Ridge Regression
    *   Lasso Regression
    *   Support Vector Regression (SVR)
    *   Decision Tree Regression
    *   Random Forest Regression

**b) Classification**

*   **Description:** The task of assigning a data point to one of several predefined categories or classes. The output variable is discrete and categorical.
*   **Examples:**
    *   Classifying emails as "spam" or "not spam."
    *   Diagnosing a disease as "positive" or "negative" based on patient symptoms.
    *   Recognizing handwritten digits (0-9).
    *   Predicting customer churn (e.g., "will churn" or "will not churn").
*   **Key Algorithms:**
    *   Logistic Regression
    *   K-Nearest Neighbors (KNN)
    *   Support Vector Machines (SVM)
    *   Decision Trees
    *   Random Forests
    *   Naive Bayes
    *   Gradient Boosting Classifiers (e.g., XGBoost, LightGBM)
