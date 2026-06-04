---
title: "Implement a logistic regression model to predict the likelihood of a disease using the Pima Indians Diabetes dataset. Compare the performance with and without feature scaling."
subject: "MACHINE LEARNING LAB"
module: "Module 6: Implement a logistic regression model to predict the likelihood of a disease using the Pima Indians Diabetes dataset. Compare the performance with and without feature scaling."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b950"
status: "completed"
scrapedAt: "2026-05-20T16:47:15.984Z"
---
## MACHINE LEARNING LAB: Module 6 - Logistic Regression with Pima Indians Diabetes Dataset

**Topic:** Implement a logistic regression model to predict the likelihood of a disease using the Pima Indians Diabetes dataset. Compare the performance with and without feature scaling.

**Description:** Building and evaluating a logistic regression model to predict diabetes based on the Pima Indians Diabetes dataset, and comparing the impact of feature scaling on model performance.

**Learning Outcomes:**

*   Understand the Pima Indians Diabetes dataset and its features.
*   Implement a logistic regression model using Python and relevant libraries (e.g., scikit-learn).
*   Apply feature scaling techniques (e.g., StandardScaler, MinMaxScaler) to the dataset.
*   Evaluate the performance of the logistic regression model with and without feature scaling using appropriate metrics (e.g., accuracy, precision, recall, F1-score, AUC-ROC).
*   Compare and interpret the results to determine the impact of feature scaling on model performance.
*   Explain the reasons why feature scaling can be beneficial for logistic regression.

---

### 1. Understanding the Pima Indians Diabetes Dataset

*   **Dataset Description:** The Pima Indians Diabetes dataset is a collection of medical diagnostic data from Pima Indian women in Arizona. It aims to predict whether a patient has diabetes based on various diagnostic measurements.

*   **Features (Independent Variables):**

    *   **Pregnancies:** Number of times pregnant.
    *   **Glucose:** Plasma glucose concentration a 2 hours in an oral glucose tolerance test.
    *   **BloodPressure:** Diastolic blood pressure (mm Hg).
    *   **SkinThickness:** Triceps skin fold thickness (mm).
    *   **Insulin:** 2-Hour serum insulin (mu U/ml).
    *   **BMI:** Body mass index (weight in kg/(height in m)^2).
    *   **DiabetesPedigreeFunction:** Diabetes pedigree function (a function which scores likelihood of diabetes based on family history).
    *   **Age:** Age (years).

*   **Target Variable (Dependent Variable):**

    *   **Outcome:**  Class variable (0 or 1).  0 indicates absence of diabetes, and 1 indicates presence of diabetes.

*   **Data Source:** Often available on Kaggle or within the scikit-learn library.  (You can load it directly via `sklearn.datasets.load_diabetes` if you're looking at the diabetes dataset generally, but for the *Pima Indians* dataset, you'll likely need to load from a CSV or other file).  A common source is the UCI Machine Learning Repository.

*   **Key Considerations:**

    *   The dataset contains missing or zero values for certain features.  These need to be handled (e.g., imputation) before training the model.
    *   The dataset may exhibit class imbalance (unequal distribution of positive and negative instances), which can affect model performance.
    *   Features have varying scales. This makes it suitable for demonstrating the impact of feature scaling.

### 2. Implementing Logistic Regression

*   **Logistic Regression Overview:** Logistic regression is a linear model for classification, despite its name. It uses a logistic function (sigmoid) to predict the probability of a binary outcome (0 or 1).

*   **Steps to Implement Logistic Regression:**

    1.  **Import Libraries:** Import necessary libraries like `pandas`, `numpy`, `sklearn` (for model, data splitting, preprocessing, and metrics).

    ```python
    import pandas as pd
    import numpy as np
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LogisticRegression
    from sklearn.preprocessing import StandardScaler, MinMaxScaler
    from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score, roc_curve
    import matplotlib.pyplot as plt  # for visualization
    import seaborn as sns # for visualization
    ```

    2.  **Load and Explore Data:** Load the Pima Indians Diabetes dataset from a CSV file (or other source) using `pandas`. Explore the data using `head()`, `describe()`, `info()`, and check for missing values using `isnull().sum()`.

    ```python
    # Assuming the data is in 'diabetes.csv'
    data = pd.read_csv('diabetes.csv')
    print(data.head())
    print(data.describe())
    print(data.info())
    print(data.isnull().sum())
    ```

    3.  **Handle Missing Values (If Any):** Impute missing values. Common methods include:

        *   **Mean/Median Imputation:** Replace missing values with the mean or median of the respective column.  This is simple but can distort the distribution.
        *   **Zero Imputation:** Replace with 0, which might be appropriate for some features like Insulin if the missing values truly represent a lack of measurement.  Be cautious.
        *   **K-Nearest Neighbors Imputation:**  Impute based on the values of similar instances. More sophisticated, but computationally intensive.

    ```python
    # Example: Replacing 0's with the median in Glucose, BloodPressure, SkinThickness, Insulin, and BMI columns
    columns_to_replace = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
    for column in columns_to_replace:
        data[column] = data[column].replace(0, data[column][data[column] != 0].median())  # Avoid median of 0 values

    print(data.describe()) #Verify no more zeros are present in the specified columns.
    ```

    4.  **Split Data into Training and Testing Sets:** Use `train_test_split` from `sklearn.model_selection` to split the data into training (e.g., 80%) and testing (e.g., 20%) sets.

    ```python
    X = data.drop('Outcome', axis=1) # Features
    y = data['Outcome'] # Target variable
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    ```

    5.  **Create and Train Logistic Regression Model (Without Scaling):** Create a `LogisticRegression` object and train it using the training data.

    ```python
    model_no_scaling = LogisticRegression(max_iter=1000, solver='liblinear') # Increase max_iter for convergence
    model_no_scaling.fit(X_train, y_train)
    ```

    6.  **Make Predictions (Without Scaling):** Use the trained model to predict the outcome on the testing set.

    ```python
    y_pred_no_scaling = model_no_scaling.predict(X_test)
    y_prob_no_scaling = model_no_scaling.predict_proba(X_test)[:, 1] # Probabilities for ROC-AUC
    ```

### 3. Applying Feature Scaling

*   **Feature Scaling Overview:** Feature scaling transforms numerical features to a similar scale. It is crucial for algorithms sensitive to feature magnitudes, like logistic regression (especially with gradient descent solvers).

*   **Common Feature Scaling Techniques:**

    *   **StandardScaler:** Standardizes features by removing the mean and scaling to unit variance.  (Z-score normalization)
        *   `x_scaled = (x - mean) / standard_deviation`
        *   Suitable when data follows a roughly normal distribution.
    *   **MinMaxScaler:** Scales features to a specific range (e.g., [0, 1]).
        *   `x_scaled = (x - min) / (max - min)`
        *   Useful when you want to constrain feature values within a specific range.

*   **Steps to Apply Feature Scaling:**

    1.  **Choose a Scaler:** Select either `StandardScaler` or `MinMaxScaler` based on the characteristics of your data and the requirements of your model. `StandardScaler` is often a good starting point.

    ```python
    scaler = StandardScaler() # Or MinMaxScaler()
    ```

    2.  **Fit and Transform Training Data:** Fit the scaler to the *training* data and then transform it.  This learns the scaling parameters from the training set.

    ```python
    X_train_scaled = scaler.fit_transform(X_train)
    ```

    3.  **Transform Testing Data:** Use the *same* scaler (fitted on the training data) to transform the testing data.  **Crucially, you don't fit the scaler to the test data!**  This prevents data leakage and ensures a fair evaluation.

    ```python
    X_test_scaled = scaler.transform(X_test)
    ```

    4.  **Create and Train Logistic Regression Model (With Scaling):** Create a new `LogisticRegression` object and train it using the scaled training data.

    ```python
    model_scaled = LogisticRegression(max_iter=1000, solver='liblinear') # Increase max_iter if needed
    model_scaled.fit(X_train_scaled, y_train)
    ```

    5.  **Make Predictions (With Scaling):** Use the trained model to predict the outcome on the scaled testing set.

    ```python
    y_pred_scaled = model_scaled.predict(X_test_scaled)
    y_prob_scaled = model_scaled.predict_proba(X_test_scaled)[:, 1] # Probabilities for ROC-AUC
    ```

### 4. Evaluating Model Performance

*   **Evaluation Metrics:**  Common classification metrics include:

    *   **Accuracy:** The proportion of correctly classified instances.
    *   **Precision:** The proportion of true positives among all instances predicted as positive. (TP / (TP + FP))
    *   **Recall (Sensitivity):** The proportion of true positives among all actual positive instances.  (TP / (TP + FN))
    *   **F1-Score:** The harmonic mean of precision and recall. (2 * (Precision * Recall) / (Precision + Recall))
    *   **AUC-ROC (Area Under the Receiver Operating Characteristic Curve):** A measure of the model's ability to distinguish between positive and negative instances across different threshold settings. Higher AUC indicates better performance.

*   **Code for Evaluation:**

    ```python
    def evaluate_model(y_true, y_pred, y_prob, model_name):
        accuracy = accuracy_score(y_true, y_pred)
        precision = precision_score(y_true, y_pred)
        recall = recall_score(y_true, y_pred)
        f1 = f1_score(y_true, y_pred)
        auc_roc = roc_auc_score(y_true, y_prob)

        print(f"--- {model_name} ---")
        print(f"Accuracy: {accuracy:.4f}")
        print(f"Precision: {precision:.4f}")
        print(f"Recall: {recall:.4f}")
        print(f"F1-Score: {f1:.4f}")
        print(f"AUC-ROC: {auc_roc:.4f}")

        # Plot ROC Curve
        fpr, tpr, thresholds = roc_curve(y_true, y_prob)
        plt.plot(fpr, tpr, label=f'{model_name} (AUC = {auc_roc:.2f})')
        plt.xlabel('False Positive Rate')
        plt.ylabel('True Positive Rate')
        plt.title('ROC Curve')
        plt.legend()


    # Evaluate models
    evaluate_model(y_test, y_pred_no_scaling, y_prob_no_scaling, "Logistic Regression (No Scaling)")
    evaluate_model(y_test, y_pred_scaled, y_prob_scaled, "Logistic Regression (With Scaling)")
    plt.show() #Display roc curve
    ```

### 5. Comparing and Interpreting Results

*   **Compare Metrics:** Compare the evaluation metrics (accuracy, precision, recall, F1-score, AUC-ROC) for the models with and without feature scaling.
*   **Analyze Differences:** Determine if feature scaling improved the model's performance.  Typically, you will see an improvement in at least some metrics.
*   **Interpret the Impact:**

    *   **Why Feature Scaling Matters:** Logistic Regression, when using gradient descent (or similar optimization algorithms), converges faster and more reliably when features are on a similar scale. Large differences in feature scales can lead to oscillations in the loss function and slower convergence or even failure to converge.
    *   **Coefficient Interpretation:** Be aware that feature scaling changes the scale of the coefficients in the logistic regression model.  Therefore, the coefficients themselves are no longer directly comparable across features.  You can only compare their *relative* magnitudes within a model.

*   **Expected Outcomes:**

    *   Feature scaling often leads to improved accuracy, precision, recall, F1-score, and AUC-ROC, especially when using solvers like 'liblinear' or 'lbfgs'.
    *   The extent of improvement depends on the specific dataset and the scaling technique used.

### 6. Practice Questions and Exercises

1.  **Data Loading and Exploration:**

    *   **Question:** How can you load the Pima Indians Diabetes dataset from a CSV file using pandas? What are some commands to explore the data's basic statistics and check for missing values?
    *   **Answer:**
        ```python
        import pandas as pd
        data = pd.read_csv('diabetes.csv')  # Assuming 'diabetes.csv' is the filename
        print(data.head())           # Show the first few rows
        print(data.describe())       # Get descriptive statistics
        print(data.info())           # Get data types and non-null counts
        print(data.isnull().sum())  # Check for missing values
        ```

2.  **Handling Missing Values:**

    *   **Question:** The Pima Indians Diabetes dataset has some zero values in the 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', and 'BMI' columns.  Why might simply replacing them with 0 be a bad idea? What is a better imputation method?
    *   **Answer:** Replacing zero values directly can distort the feature distributions, especially if the zeros represent missing data rather than actual zero values. Replacing with the median (calculated excluding zeros) is a better approach.

3.  **Feature Scaling:**

    *   **Question:** What is feature scaling, and why is it often necessary for logistic regression? Explain the difference between `StandardScaler` and `MinMaxScaler`.
    *   **Answer:** Feature scaling transforms numerical features to a similar scale, which helps logistic regression (and other gradient-based algorithms) converge faster and prevents features with larger magnitudes from dominating the model.
        *   `StandardScaler` standardizes features to have zero mean and unit variance.
        *   `MinMaxScaler` scales features to a specific range, typically [0, 1].

4.  **Code Implementation:**

    *   **Exercise:** Write the Python code to perform feature scaling using `StandardScaler` on the training and testing data after splitting the data.
    *   **Answer:**
        ```python
        from sklearn.model_selection import train_test_split
        from sklearn.preprocessing import StandardScaler

        X = data.drop('Outcome', axis=1)
        y = data['Outcome']
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        scaler = StandardScaler()
        X_train_scaled = scaler.fit_transform(X_train) #Fit and transform training data
        X_test_scaled = scaler.transform(X_test) #Only transform the test data
        ```

5.  **Model Evaluation:**

    *   **Question:** What are the common evaluation metrics used for classification models like logistic regression? Explain the meaning of accuracy, precision, recall, F1-score, and AUC-ROC.
    *   **Answer:**
        *   **Accuracy:** The overall correctness of the model.
        *   **Precision:** The proportion of correctly predicted positive instances out of all predicted positives.
        *   **Recall:** The proportion of correctly predicted positive instances out of all actual positives.
        *   **F1-Score:** The harmonic mean of precision and recall, balancing both metrics.
        *   **AUC-ROC:** A measure of the model's ability to distinguish between positive and negative classes across different threshold values.

6.  **Interpretation:**

    *   **Question:**  If the model's accuracy *decreases* after feature scaling, what might be some possible reasons?
    *   **Answer:**
        * **Overfitting:** The model might have been overfitting the original, unscaled data. Scaling can sometimes regularize the model and reduce overfitting. In rare cases, scaling can *increase* overfitting if the model wasn't overfitting before.
        * **Incorrect scaling**: Scaling should be done *after* the split, and the *test* set should be scaled using the scaling parameters derived from the training set.
        * **Algorithm Sensitivity**: Some algorithms are less sensitive to feature scaling.
        * **Dataset Characteristics**: The dataset may inherently be better suited to the unscaled data, although this is unusual.

### 7. Important Points to Remember

*   **Feature scaling is crucial when features have significantly different scales.** It helps prevent features with larger magnitudes from dominating the model and improves convergence.
*   **Apply the same scaling transformation to both training and testing data.** Fit the scaler only on the training data to avoid data leakage.
*   **Choose the appropriate scaling technique based on the characteristics of your data.** `StandardScaler` is often a good starting point.  `MinMaxScaler` is useful when a specific range is needed.
*   **Evaluate model performance using appropriate metrics.**  Consider accuracy, precision, recall, F1-score, and AUC-ROC.
*   **Interpret the results carefully and understand the impact of feature scaling on model performance.**  It can improve performance, but always verify and analyze the outcomes.
*   **Always handle missing values appropriately** before scaling and model training. Choose imputation methods that minimize bias and distortion of the data distribution.
