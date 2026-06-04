---
title: "Analyze metrics such as accuracy, precision, recall, and F1-score."
subject: "MACHINE LEARNING LAB"
module: "Module 6: Implement a logistic regression model to predict the likelihood of a disease using the Pima Indians Diabetes dataset. Compare the performance with and without feature scaling."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b955"
status: "completed"
scrapedAt: "2026-05-20T16:47:19.581Z"
---
## MACHINE LEARNING LAB - Module 6: Logistic Regression for Diabetes Prediction

**Topic:** Analyzing Performance Metrics (Accuracy, Precision, Recall, F1-score) and the Impact of Feature Scaling using Logistic Regression and the Pima Indians Diabetes Dataset.

**Description:** This module focuses on implementing logistic regression to predict diabetes using the Pima Indians Diabetes dataset. We will analyze the performance of the model with and without feature scaling by examining metrics like accuracy, precision, recall, and F1-score.

**Learning Outcomes:**

*   Implement logistic regression using Python and relevant libraries (e.g., scikit-learn).
*   Load, preprocess, and split the Pima Indians Diabetes dataset.
*   Apply logistic regression with and without feature scaling (e.g., StandardScaler, MinMaxScaler).
*   Evaluate model performance using accuracy, precision, recall, and F1-score.
*   Compare and contrast the performance of the model with and without feature scaling.
*   Interpret the results and draw conclusions about the impact of feature scaling on logistic regression performance.

---

### 1. Introduction to Logistic Regression

*   **Definition:** Logistic regression is a statistical method for analyzing a dataset in which there are one or more independent variables that determine an outcome.  The outcome is measured with a dichotomous variable (in which there are only two possible outcomes). In our case, the outcome is whether or not a person has diabetes (yes/no).

*   **Key Concepts:**
    *   **Sigmoid Function:**  Logistic regression uses the sigmoid function (also known as the logistic function) to map predicted values to probabilities between 0 and 1.  The sigmoid function is defined as: `σ(z) = 1 / (1 + exp(-z))` where `z` is the linear combination of input features.
    *   **Decision Boundary:** A threshold probability is set (usually 0.5) to classify instances into one of the two classes. If the predicted probability is greater than or equal to the threshold, the instance is classified as positive; otherwise, it is classified as negative.
    *   **Cost Function:** The goal of logistic regression is to find the optimal parameters that minimize the cost function.  A common cost function is the log loss (binary cross-entropy).

*   **Why Logistic Regression for Binary Classification?**  Logistic regression is well-suited for binary classification problems because it directly models the probability of belonging to a particular class.

### 2. The Pima Indians Diabetes Dataset

*   **Description:** This dataset contains information about Pima Indian women and whether they have diabetes.

*   **Features:**
    *   **Pregnancies:** Number of times pregnant
    *   **Glucose:** Plasma glucose concentration a 2 hours in an oral glucose tolerance test
    *   **BloodPressure:** Diastolic blood pressure (mm Hg)
    *   **SkinThickness:** Triceps skin fold thickness (mm)
    *   **Insulin:** 2-Hour serum insulin (mu U/ml)
    *   **BMI:** Body mass index (weight in kg / (height in m)^2)
    *   **DiabetesPedigreeFunction:** Diabetes pedigree function
    *   **Age:** Age (years)
    *   **Outcome:** Class variable (0 or 1) - 1 indicates diabetes, 0 indicates no diabetes.

*   **Loading the Dataset:** In Python using Pandas:

    ```python
    import pandas as pd

    # Load the dataset from a CSV file
    data = pd.read_csv("diabetes.csv")  # Replace "diabetes.csv" with the correct path

    # Display the first few rows of the dataset
    print(data.head())

    # Check for missing values
    print(data.isnull().sum())

    # Describe the dataset
    print(data.describe())
    ```

### 3. Data Preprocessing and Splitting

*   **Data Cleaning (Optional):** Handle missing values if any.  In the Pima dataset, a common practice is to replace 0 values in certain features (Glucose, BloodPressure, SkinThickness, Insulin, BMI) with the median value for that feature, as 0 is often a placeholder for missing data.
*   **Feature Selection (Optional):**  Select relevant features if necessary.  In this case, we'll use all features.
*   **Splitting the Dataset:** Divide the dataset into training and testing sets.  A typical split is 80% for training and 20% for testing.

    ```python
    from sklearn.model_selection import train_test_split

    # Separate features (X) and target variable (y)
    X = data.drop('Outcome', axis=1)
    y = data['Outcome']

    # Split the dataset into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) #random_state ensures reproducibility
    ```

### 4. Feature Scaling

*   **Why Feature Scaling?** Feature scaling is crucial for algorithms like logistic regression that are sensitive to the magnitude of input features. When features have different scales, features with larger values can dominate the model's learning process.

*   **Methods:**
    *   **StandardScaler:** Standardizes features by removing the mean and scaling to unit variance.  It transforms the data so that each feature has a mean of 0 and a standard deviation of 1.

        ```python
        from sklearn.preprocessing import StandardScaler

        scaler = StandardScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        X_test_scaled = scaler.transform(X_test) #Use the scaler fitted on the TRAINING data only to transform test data to avoid data leakage.
        ```

    *   **MinMaxScaler:** Scales features to a specified range, typically between 0 and 1.

        ```python
        from sklearn.preprocessing import MinMaxScaler

        scaler = MinMaxScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        X_test_scaled = scaler.transform(X_test)
        ```

### 5. Logistic Regression Model Implementation

*   **Without Feature Scaling:**

    ```python
    from sklearn.linear_model import LogisticRegression

    # Create a logistic regression model
    model = LogisticRegression(solver='liblinear', random_state=42) #solver is needed for convergence, random_state for reproducibility

    # Train the model on the training data
    model.fit(X_train, y_train)

    # Make predictions on the test data
    y_pred = model.predict(X_test)
    ```

*   **With Feature Scaling (using StandardScaler):**

    ```python
    from sklearn.linear_model import LogisticRegression
    from sklearn.preprocessing import StandardScaler

    # Scale the data
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # Create a logistic regression model
    model_scaled = LogisticRegression(solver='liblinear', random_state=42)

    # Train the model on the scaled training data
    model_scaled.fit(X_train_scaled, y_train)

    # Make predictions on the scaled test data
    y_pred_scaled = model_scaled.predict(X_test_scaled)
    ```

### 6. Evaluation Metrics

*   **Accuracy:** The proportion of correctly classified instances.  `Accuracy = (TP + TN) / (TP + TN + FP + FN)`
*   **Precision:** The proportion of correctly predicted positive instances out of all instances predicted as positive. `Precision = TP / (TP + FP)`
*   **Recall (Sensitivity):** The proportion of correctly predicted positive instances out of all actual positive instances. `Recall = TP / (TP + FN)`
*   **F1-Score:** The harmonic mean of precision and recall.  It provides a balanced measure of the model's performance.  `F1-score = 2 * (Precision * Recall) / (Precision + Recall)`

    *   **TP (True Positive):**  Correctly predicted positive instances.
    *   **TN (True Negative):** Correctly predicted negative instances.
    *   **FP (False Positive):** Incorrectly predicted positive instances (Type I error).
    *   **FN (False Negative):** Incorrectly predicted negative instances (Type II error).

*   **Calculation in Python (using scikit-learn):**

    ```python
    from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

    # Calculate metrics for the model without feature scaling
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred)
    recall = recall_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred)

    print("Model without Feature Scaling:")
    print("Accuracy:", accuracy)
    print("Precision:", precision)
    print("Recall:", recall)
    print("F1-score:", f1)

    # Calculate metrics for the model with feature scaling
    accuracy_scaled = accuracy_score(y_test, y_pred_scaled)
    precision_scaled = precision_score(y_test, y_pred_scaled)
    recall_scaled = recall_score(y_test, y_pred_scaled)
    f1_scaled = f1_score(y_test, y_pred_scaled)

    print("\nModel with Feature Scaling:")
    print("Accuracy:", accuracy_scaled)
    print("Precision:", precision_scaled)
    print("Recall:", recall_scaled)
    print("F1-score:", f1_scaled)
    ```

### 7. Comparing and Contrasting Performance

*   **Analysis:** Compare the accuracy, precision, recall, and F1-score of the model with and without feature scaling.  Typically, feature scaling improves the performance of logistic regression, especially when features have significantly different scales.
*   **Interpretation:**  Analyze *why* feature scaling might improve the results. This is often because features with larger ranges can dominate the cost function, leading to suboptimal solutions. Scaling ensures that all features contribute more equally to the learning process.
*   **Considerations:**  The extent of improvement from feature scaling can vary depending on the dataset and the algorithm used. In some cases, the difference might be marginal.

### 8. Practice Questions/Exercises

1.  **Question:** Why is feature scaling important for logistic regression? Explain with an example.
    *   **Answer:** Feature scaling is important because logistic regression uses gradient descent (or similar optimization algorithms) to find the optimal weights.  Features with larger values can dominate the learning process, leading to slower convergence or suboptimal solutions. Consider two features: "Age" (ranging from 20-80) and "BloodSugar" (ranging from 70-200). Without scaling, "BloodSugar" might have a disproportionate influence on the model compared to "Age" simply due to its larger scale.  Scaling ensures that all features contribute more equally.

2.  **Question:** What is the difference between StandardScaler and MinMaxScaler? When might you prefer one over the other?
    *   **Answer:** StandardScaler standardizes features by removing the mean and scaling to unit variance (mean = 0, standard deviation = 1). MinMaxScaler scales features to a specified range (typically 0-1).
        *   Use StandardScaler when you don't have specific range requirements and the data follows a normal distribution.  It is less sensitive to outliers than MinMaxScaler.
        *   Use MinMaxScaler when you need the features to be within a specific range (e.g., 0-1 for image processing). It's sensitive to outliers, as they can significantly affect the scaling.

3.  **Question:**  What do the following mean in the context of a diabetes prediction model?
    *   High Precision, Low Recall
    *   High Recall, Low Precision
    *   **Answer:**
        *   **High Precision, Low Recall:** The model is good at correctly identifying diabetic patients out of those it predicts as diabetic (few false positives), but it misses many actual diabetic patients (many false negatives).  This model is conservative in predicting diabetes.
        *   **High Recall, Low Precision:** The model identifies most of the actual diabetic patients correctly (few false negatives), but it also incorrectly predicts many non-diabetic patients as diabetic (many false positives).  This model is more likely to predict diabetes.

4.  **Exercise:**  Modify the code above to use `MinMaxScaler` instead of `StandardScaler`. Run the code and compare the results.  Does the performance change?

5.  **Exercise:** Investigate the impact of different `random_state` values used in `train_test_split` and `LogisticRegression`.  How does changing the `random_state` affect the resulting metrics? (Note: you might need to run the code several times to observe the fluctuations)

### 9. Important Points to Remember

*   **Feature scaling is often essential for logistic regression.**
*   **Understand the meaning and trade-offs between accuracy, precision, recall, and F1-score.**  Choose the right metric based on the specific problem and the relative costs of false positives and false negatives.
*   **Always split data into training and testing sets to evaluate model performance on unseen data.**
*   **Fit the scaler only on the training data and then transform both training and testing data using that fitted scaler.** This prevents data leakage.
*   **The choice of solver in LogisticRegression can affect performance and convergence.**  `liblinear` is suitable for small datasets, while others like `lbfgs` or `saga` might be better for larger datasets.
*   **Regularization (e.g., L1 or L2) can be added to the LogisticRegression model to prevent overfitting.**  This is controlled by the `penalty` and `C` parameters.
