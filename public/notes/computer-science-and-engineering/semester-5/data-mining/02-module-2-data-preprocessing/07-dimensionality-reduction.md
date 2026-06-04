---
title: "Dimensionality reduction"
subject: "DATA MINING"
module: "Module 2: Data Preprocessing "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8a2"
status: "completed"
scrapedAt: "2026-05-20T16:45:02.344Z"
---
# Data Mining: Module 2 - Data Preprocessing: Dimensionality Reduction

## Learning Outcomes:

*   Understand the concept of dimensionality reduction and its necessity in data mining.
*   Distinguish between feature selection and feature extraction techniques.
*   Apply and evaluate different feature selection methods:
    *   Filter Methods (e.g., Variance Threshold, Correlation-based Feature Selection)
    *   Wrapper Methods (e.g., Forward Selection, Backward Elimination)
    *   Embedded Methods (e.g., Regularization techniques like L1 regularization)
*   Apply and evaluate different feature extraction methods:
    *   Principal Component Analysis (PCA)
    *   Linear Discriminant Analysis (LDA)
*   Assess the impact of dimensionality reduction on model performance.
*   Choose the appropriate dimensionality reduction technique for a given dataset and problem.

## 1. Introduction to Dimensionality Reduction

*   **Definition:** Dimensionality reduction is the process of reducing the number of features (variables, attributes, columns) in a dataset while retaining important information.

*   **Necessity in Data Mining:**

    *   **Curse of Dimensionality:**  As the number of features increases, the amount of data required to generalize accurately grows exponentially. This leads to:
        *   Increased computational cost and storage requirements.
        *   Overfitting: Models become too complex and learn the noise in the data, leading to poor performance on unseen data.
        *   Decreased model interpretability.
        *   Sparsity:  Data becomes sparse in high-dimensional space, making it difficult to find meaningful patterns.
    *   **Improved Model Performance:** Removing irrelevant or redundant features can improve the accuracy and efficiency of machine learning models.
    *   **Data Visualization:** Reducing the dimensionality to 2 or 3 dimensions allows for easy visualization and understanding of the data.
    *   **Noise Reduction:** Removing noise-related features can improve the signal-to-noise ratio in the data.
    *   **Feature Interpretability:**  Simplifying the feature space can make it easier to understand the underlying relationships in the data.

## 2. Feature Selection vs. Feature Extraction

*   **Feature Selection:**

    *   **Definition:** Selecting a subset of the original features without transforming them.
    *   **Goal:**  Identify the most relevant features and discard the rest.
    *   **Advantages:**
        *   Preserves the original meaning of the features.
        *   Easier to interpret the selected features.
        *   Often computationally less expensive than feature extraction.
    *   **Disadvantages:**
        *   May not be optimal if the original features are highly correlated.
        *   Can be sensitive to noise and outliers.

*   **Feature Extraction:**

    *   **Definition:** Transforming the original features into a new set of features, often with lower dimensionality.
    *   **Goal:** Create new features that capture the most important information from the original features.
    *   **Advantages:**
        *   Can handle highly correlated features effectively.
        *   Can improve model performance by creating more informative features.
    *   **Disadvantages:**
        *   The new features may be difficult to interpret.
        *   Can be computationally expensive.
        *   Information Loss is possible

## 3. Feature Selection Methods

### 3.1 Filter Methods

*   **Definition:**  Feature selection based on statistical measures or scores, independently of any machine learning algorithm.  Features are ranked based on their relevance and a threshold is used to select the top-ranked features.

*   **Advantages:**
    *   Simple and fast.
    *   Computationally inexpensive.
    *   Independent of the learning algorithm.
*   **Disadvantages:**
    *   May not select the best features for a specific learning algorithm.
    *   Considers features individually, ignoring feature dependencies.

*   **Examples:**

    *   **Variance Threshold:**
        *   **Concept:** Removes features with low variance (close to zero).  Features with low variance are considered less informative because they don't change much across different samples.
        *   **Implementation:** Set a variance threshold.  Features with variance below the threshold are removed.
        *   **Example:** In Python (using scikit-learn):
            ```python
            from sklearn.feature_selection import VarianceThreshold
            import numpy as np

            X = np.array([[0, 0, 1], [0, 1, 0], [0, 1, 1], [0, 1, 0], [0, 1, 1], [0, 0, 1]])
            sel = VarianceThreshold(threshold=(.8 * (1 - .8)))  # remove features with less than 80% variance
            sel.fit(X)
            print(sel.get_support())  # Output: [False  True False] - Only the second feature is selected
            print(X[:, sel.get_support()]) # Output: Selected feature values [[0] [1] [1] [1] [1] [0]]
            ```
    *   **Correlation-based Feature Selection:**
        *   **Concept:** Removes features that are highly correlated with each other.  Redundant features can be removed without losing much information.
        *   **Implementation:** Calculate the correlation matrix.  Select one feature from each pair of highly correlated features based on domain knowledge or other criteria (e.g., correlation with the target variable).
        *   **Example:**
            ```python
            import pandas as pd
            import numpy as np

            # Create sample data
            data = {'feature1': [1, 2, 3, 4, 5],
                    'feature2': [2, 4, 6, 8, 10], # highly correlated with feature1
                    'feature3': [5, 4, 5, 6, 7]}

            df = pd.DataFrame(data)

            # Calculate the correlation matrix
            corr_matrix = df.corr()
            print(corr_matrix)

            # Example: Drop feature2 (highly correlated with feature1)
            df = df.drop('feature2', axis=1) #Remove feature2
            print(df)
            ```
    *   **Information Gain / Chi-squared Test:**
        *   **Concept:** Measures the information gain provided by each feature with respect to the target variable (for classification problems) or uses a Chi-squared test to determine the dependency between a feature and the target.
        *   **Implementation:** Calculate the information gain or Chi-squared statistic for each feature. Select the top-ranked features based on these values.
        *   **When to use Chi2:** Use with non-negative features such as term frequencies.
        *   **Example (Chi2):**
            ```python
            from sklearn.feature_selection import SelectKBest, chi2
            import numpy as np
            X = np.array([[5, 5, 6, 7, 5],
                          [6, 6, 7, 8, 7],
                          [7, 7, 8, 9, 9],
                          [8, 8, 9, 10, 8],
                          [9, 9, 10, 11, 9]]) # Features
            y = np.array([0, 1, 0, 1, 0]) # Target
            chi2_selector = SelectKBest(chi2, k=2)
            chi2_selector.fit(X, y)

            selected_features = chi2_selector.get_support()
            print(selected_features) # Boolean array of selected features
            ```

### 3.2 Wrapper Methods

*   **Definition:** Feature selection based on the performance of a specific machine learning algorithm. Evaluates subsets of features by training and testing a model on those subsets.

*   **Advantages:**
    *   Can select the best features for a specific learning algorithm.
    *   Considers feature dependencies.
*   **Disadvantages:**
    *   Computationally expensive.
    *   Can be prone to overfitting if not used carefully.

*   **Examples:**

    *   **Forward Selection:**
        *   **Concept:** Starts with an empty set of features.  Iteratively adds the feature that most improves the model's performance until a stopping criterion is met (e.g., no further improvement or a maximum number of features is reached).
        *   **Algorithm:**
            1.  Start with an empty set of features.
            2.  For each feature not yet in the set:
                *   Add the feature to the set.
                *   Train and evaluate the model using the current set of features.
                *   Remove the feature.
            3.  Select the feature that resulted in the best model performance and add it to the set.
            4.  Repeat steps 2-3 until a stopping criterion is met.
    *   **Backward Elimination:**
        *   **Concept:** Starts with the full set of features.  Iteratively removes the feature that least affects the model's performance until a stopping criterion is met.
        *   **Algorithm:**
            1.  Start with the full set of features.
            2.  For each feature in the set:
                *   Remove the feature from the set.
                *   Train and evaluate the model using the current set of features.
                *   Add the feature back.
            3.  Remove the feature that resulted in the least decrease in model performance.
            4.  Repeat steps 2-3 until a stopping criterion is met.
    *   **Recursive Feature Elimination (RFE):**
        *   **Concept:**  Recursively removes features and builds a model on the remaining features.  Uses the model's feature importance or coefficients to rank features and eliminates the least important features in each iteration.
        *   **Algorithm:**
            1.  Train the model on the initial set of features and obtain the feature importance scores (e.g., coefficients in a linear model).
            2.  Remove the least important feature(s).
            3.  Retrain the model on the remaining features.
            4.  Repeat steps 2-3 until the desired number of features is reached.
        *   **Example (RFE):**
            ```python
            from sklearn.feature_selection import RFE
            from sklearn.linear_model import LogisticRegression
            from sklearn.datasets import make_classification

            # Generate sample data
            X, y = make_classification(n_samples=100, n_features=5, random_state=42)

            # Create a logistic regression model
            model = LogisticRegression(solver='liblinear')

            # Create RFE object, selecting 3 features
            rfe = RFE(model, n_features_to_select=3)

            # Fit RFE to the data
            rfe.fit(X, y)

            # Print selected features
            print("Selected Features:", rfe.support_)

            # Print feature ranking
            print("Feature Ranking:", rfe.ranking_)
            ```

### 3.3 Embedded Methods

*   **Definition:** Feature selection is performed as part of the model training process.

*   **Advantages:**
    *   Efficient.
    *   Considers feature dependencies.
    *   Often provides good model performance.
*   **Disadvantages:**
    *   Tied to the specific learning algorithm.

*   **Examples:**

    *   **Regularization Techniques (L1 Regularization / Lasso):**
        *   **Concept:** Adds a penalty term to the model's loss function that discourages large coefficients. L1 regularization (Lasso) can drive the coefficients of irrelevant features to zero, effectively performing feature selection.  L2 Regularization (Ridge) shrinks coefficients but does not typically set them to zero.
        *   **Implementation:**  Use a model with L1 regularization (e.g., Lasso regression).  The model will automatically select the most important features by assigning non-zero coefficients to them.
        *   **Example (Lasso):**
            ```python
            from sklearn.linear_model import Lasso
            from sklearn.datasets import make_regression
            import numpy as np

            # Generate sample data
            X, y = make_regression(n_samples=100, n_features=5, random_state=42)

            # Create Lasso regression model with alpha=0.1 (L1 regularization strength)
            lasso = Lasso(alpha=0.1)

            # Fit the model
            lasso.fit(X, y)

            # Print feature coefficients
            print("Feature Coefficients:", lasso.coef_)
            # Features with coefficients close to zero are effectively deselected
            ```
    *   **Tree-Based Models (Decision Trees, Random Forests, Gradient Boosting):**
        *   **Concept:** Tree-based models can calculate feature importance scores based on how often each feature is used in splitting the data.  Features with higher importance scores are considered more relevant.
        *   **Implementation:** Train a tree-based model and use its `feature_importances_` attribute to rank features. Select the top-ranked features.
        *   **Example (Random Forest):**
            ```python
            from sklearn.ensemble import RandomForestClassifier
            from sklearn.datasets import make_classification

            # Generate sample data
            X, y = make_classification(n_samples=100, n_features=5, random_state=42)

            # Create a Random Forest classifier
            rf = RandomForestClassifier(random_state=42)

            # Fit the model
            rf.fit(X, y)

            # Print feature importances
            print("Feature Importances:", rf.feature_importances_)
            ```

## 4. Feature Extraction Methods

### 4.1 Principal Component Analysis (PCA)

*   **Definition:** A linear dimensionality reduction technique that transforms the original features into a new set of uncorrelated features called principal components. The principal components are ordered by the amount of variance they explain in the data.

*   **Concept:**
    *   Finds the directions (principal components) that capture the most variance in the data.
    *   Projects the data onto these principal components, effectively reducing the dimensionality.

*   **Advantages:**
    *   Simple and efficient.
    *   Can significantly reduce dimensionality.
*   **Disadvantages:**
    *   The new features (principal components) are often difficult to interpret.
    *   Assumes linear relationships between features.
    *   Sensitive to scaling - features should be standardized before applying PCA.

*   **Algorithm:**
    1.  **Standardize the data:**  Scale the features to have zero mean and unit variance.
    2.  **Calculate the covariance matrix:**  Measures the pairwise relationships between the features.
    3.  **Calculate the eigenvectors and eigenvalues of the covariance matrix:**  Eigenvectors represent the principal components, and eigenvalues represent the amount of variance explained by each principal component.
    4.  **Sort the eigenvectors by their corresponding eigenvalues in descending order:**  Select the top *k* eigenvectors, where *k* is the desired number of dimensions.
    5.  **Project the data onto the selected eigenvectors:**  This creates the new set of features.

*   **Example (PCA):**
    ```python
    from sklearn.decomposition import PCA
    from sklearn.preprocessing import StandardScaler
    from sklearn.datasets import load_iris
    import pandas as pd

    # Load the Iris dataset
    iris = load_iris()
    X = iris.data
    y = iris.target
    df = pd.DataFrame(X, columns=iris.feature_names)

    # Standardize the data
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # Create a PCA object, reducing to 2 components
    pca = PCA(n_components=2)

    # Fit PCA to the scaled data
    pca.fit(X_scaled)

    # Transform the data
    X_pca = pca.transform(X_scaled)

    # Explained variance ratio
    print("Explained Variance Ratio:", pca.explained_variance_ratio_)
    print("Original shape:   ", X.shape)
    print("Transformed shape:", X_pca.shape)
    ```

### 4.2 Linear Discriminant Analysis (LDA)

*   **Definition:** A dimensionality reduction technique that finds the linear combination of features that best separates different classes (for classification problems).

*   **Concept:**
    *   Maximizes the between-class variance.
    *   Minimizes the within-class variance.
    *   Creates new features (discriminants) that are optimized for classification.

*   **Advantages:**
    *   Effective for classification problems.
    *   Can improve model performance by creating more discriminative features.
*   **Disadvantages:**
    *   Only applicable for classification problems.
    *   Assumes normally distributed data and equal covariance matrices for each class.

*   **Algorithm:**
    1.  **Calculate the between-class scatter matrix (Sb):**  Measures the variance between the means of different classes.
    2.  **Calculate the within-class scatter matrix (Sw):**  Measures the variance within each class.
    3.  **Calculate the eigenvectors and eigenvalues of Sw<sup>-1</sup>Sb:**  Eigenvectors represent the discriminants, and eigenvalues represent the discriminative power of each discriminant.
    4.  **Sort the eigenvectors by their corresponding eigenvalues in descending order:**  Select the top *k* eigenvectors, where *k* is the desired number of dimensions (k < number of classes - 1).
    5.  **Project the data onto the selected eigenvectors:**  This creates the new set of features.

*   **Example (LDA):**
    ```python
    from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
    from sklearn.preprocessing import StandardScaler
    from sklearn.datasets import load_iris
    import pandas as pd

    # Load the Iris dataset
    iris = load_iris()
    X = iris.data
    y = iris.target
    df = pd.DataFrame(X, columns=iris.feature_names)

    # Standardize the data
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # Create an LDA object, reducing to 2 components
    lda = LinearDiscriminantAnalysis(n_components=2)

    # Fit LDA to the scaled data
    lda.fit(X_scaled, y)

    # Transform the data
    X_lda = lda.transform(X_scaled)

    print("Original shape:   ", X.shape)
    print("Transformed shape:", X_lda.shape)
    ```

## 5. Assessing the Impact of Dimensionality Reduction on Model Performance

*   **Metrics:** Evaluate the performance of the model before and after dimensionality reduction using appropriate metrics (e.g., accuracy, precision, recall, F1-score, AUC for classification; RMSE, MAE for regression).

*   **Cross-Validation:** Use cross-validation to obtain reliable estimates of model performance.

*   **Comparison:** Compare the performance of the model with and without dimensionality reduction.  Consider the trade-off between model accuracy and computational cost.

*   **Overfitting:**  Pay attention to overfitting. Dimensionality reduction can help to mitigate overfitting, but it is important to use regularization techniques and cross-validation to ensure that the model generalizes well to unseen data.

## 6. Choosing the Appropriate Dimensionality Reduction Technique

*   **Problem Type:**  Classification or Regression?
    *   LDA is specifically designed for classification. PCA can be used for both classification and regression.
*   **Data Characteristics:**
    *   **Linearity:** If the relationships between features are linear, PCA and LDA are good choices.  If the relationships are non-linear, consider non-linear dimensionality reduction techniques (e.g., t-SNE, UMAP).
    *   **Correlated Features:** If features are highly correlated, feature extraction techniques (e.g., PCA) can be more effective than feature selection techniques.
    *   **Feature Interpretability:**  If feature interpretability is important, feature selection techniques are preferred.
*   **Computational Cost:**
    *   Filter methods are generally the fastest. Wrapper methods are the most computationally expensive.
*   **Model Performance:**  The ultimate goal is to improve model performance. Experiment with different dimensionality reduction techniques and evaluate their impact on model performance using appropriate metrics and cross-validation.
*   **Domain Knowledge:**  Incorporate domain knowledge to guide the selection of features and dimensionality reduction techniques.

## 7. Important Points to Remember

*   Dimensionality reduction is a crucial step in data preprocessing.
*   Understand the trade-offs between feature selection and feature extraction.
*   Choose the appropriate dimensionality reduction technique based on the problem type, data characteristics, and desired level of interpretability.
*   Evaluate the impact of dimensionality reduction on model performance using appropriate metrics and cross-validation.
*   Always standardize your data before applying PCA or LDA.
*   Be aware of the potential for overfitting.
*   Don't blindly apply dimensionality reduction without understanding the underlying data and problem.

## 8. Practice Questions and Exercises

**Question 1:** Explain the curse of dimensionality and how dimensionality reduction helps to address it.

**Answer:**  The curse of dimensionality refers to the phenomenon where the performance of machine learning models degrades as the number of features (dimensions) increases. This is because the data becomes sparse in high-dimensional space, leading to increased computational cost, overfitting, and difficulty in finding meaningful patterns. Dimensionality reduction helps to address this by reducing the number of features while retaining important information, thereby mitigating these issues.

**Question 2:** What is the difference between feature selection and feature extraction? Give an example of each.

**Answer:**  Feature selection selects a subset of the original features without transforming them (e.g., selecting the top 5 most relevant features from a set of 10). Feature extraction transforms the original features into a new set of features, often with lower dimensionality (e.g., using PCA to create 2 principal components from 10 original features).

**Question 3:**  Describe three filter methods for feature selection.

**Answer:**
    *   **Variance Threshold:** Removes features with low variance.
    *   **Correlation-based Feature Selection:** Removes features that are highly correlated with each other.
    *   **Information Gain / Chi-squared Test:** Selects features that provide the most information gain or are most dependent on the target variable.

**Question 4:**  Explain the concept of forward selection.

**Answer:**  Forward selection starts with an empty set of features and iteratively adds the feature that most improves the model's performance until a stopping criterion is met.

**Question 5:**  Explain the concept of L1 regularization (Lasso) and how it performs feature selection.

**Answer:** L1 regularization adds a penalty term to the model's loss function that is proportional to the absolute value of the coefficients. This penalty encourages the model to shrink the coefficients of irrelevant features towards zero, effectively performing feature selection.

**Question 6:** Explain Principal Component Analysis (PCA).

**Answer:**  PCA is a dimensionality reduction technique that transforms the original features into a new set of uncorrelated features called principal components. The principal components are ordered by the amount of variance they explain in the data.  It attempts to find the directions in the data which maximize the variance and then projects the data along those directions.

**Question 7:** What is Linear Discriminant Analysis (LDA) used for?

**Answer:** LDA is a dimensionality reduction technique specifically designed for classification problems. It finds the linear combination of features that best separates different classes.

**Question 8:** You have a dataset with 100 features and want to reduce the dimensionality. You suspect that the features are highly correlated. Which dimensionality reduction technique would you consider first and why?

**Answer:** I would consider Principal Component Analysis (PCA) first.  Because the features are highly correlated, PCA can effectively transform them into a smaller set of uncorrelated principal components that capture most of the variance in the data.  Also, Feature Selection techniques, like correlation based feature selection could be used before PCA.

**Exercise:**

1.  Download the Iris dataset from scikit-learn (`from sklearn.datasets import load_iris`).
2.  Apply PCA to reduce the dimensionality to 2 components.
3.  Apply LDA to reduce the dimensionality to 2 components.
4.  Train a logistic regression model on the original data, the PCA-transformed data, and the LDA-transformed data.
5.  Evaluate the performance of each model using accuracy as the metric.
6.  Compare the results and discuss the impact of PCA and LDA on model performance.

This comprehensive set of notes should provide a strong foundation for understanding dimensionality reduction in data mining. Remember to practice applying these techniques to real-world datasets to solidify your understanding. Good luck!
