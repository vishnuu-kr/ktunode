---
title: "Hyperparameter tuning - grid search, random search, Bayesian optimization"
subject: "ALGORITHMS FOR DATA SCIENCE"
module: "Module 3: Regression Algorithms "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c7a0"
status: "completed"
scrapedAt: "2026-05-20T17:00:35.854Z"
---
# ALGORITHMS FOR DATA SCIENCE - Module 3: Regression Algorithms

## Topic: Hyperparameter Tuning - Grid Search, Random Search, Bayesian Optimization

---

### 1. Introduction to Hyperparameter Tuning

*   **What are Hyperparameters?**
    *   Parameters of a machine learning algorithm that are *not* learned from the data.
    *   They control the learning process and the model's behavior.
    *   Set *before* the training process begins.
    *   Examples: learning rate in gradient descent, number of trees in a Random Forest, regularization strength (C) in SVM, `max_depth` in decision trees.

*   **Why is Hyperparameter Tuning Important?**
    *   Crucial for optimizing model performance.
    *   A poorly chosen set of hyperparameters can lead to:
        *   **Underfitting:** The model is too simple and cannot capture the underlying patterns in the data.
        *   **Overfitting:** The model learns the training data too well, including noise, and performs poorly on unseen data.
    *   Finding the "sweet spot" for hyperparameters can significantly improve accuracy, generalization, and other performance metrics.

*   **The Challenge:**
    *   The hyperparameter space can be vast and complex.
    *   Manually trying out different combinations is impractical and inefficient.
    *   Requires a systematic approach to explore this space effectively.

---

### 2. Grid Search

*   **Concept:**
    *   A brute-force method for hyperparameter tuning.
    *   Defines a grid of hyperparameter values to explore.
    *   Trains and evaluates the model for *every single combination* of these values.
    *   Selects the combination that yields the best performance on a validation set.

*   **How it Works:**
    1.  **Define the Hyperparameter Space:** Specify a list of possible values for each hyperparameter you want to tune.
    2.  **Create the Grid:** The search space is formed by the Cartesian product of all specified hyperparameter values.
    3.  **Cross-Validation:** For each combination in the grid:
        *   Train the model using the current hyperparameter values on the training data.
        *   Evaluate the model's performance using cross-validation on the training data (or a separate validation set).
    4.  **Select the Best:** Identify the hyperparameter combination that results in the best average performance across the validation folds.

*   **Example:**
    *   Tuning a `RandomForestRegressor`:
        *   `n_estimators`: [100, 200, 300]
        *   `max_depth`: [None, 10, 20]
        *   `min_samples_split`: [2, 5]

    *   Grid Search will try all 3 * 3 * 2 = 18 combinations.
    *   (100, None, 2), (100, None, 5), (100, 10, 2), (100, 10, 5), (100, 20, 2), (100, 20, 5),
    *   (200, None, 2), (200, None, 5), ..., (300, 20, 5)

*   **Pros:**
    *   **Guaranteed to find the best combination within the specified grid.**
    *   Simple to understand and implement.
    *   Exhaustive within its defined search space.

*   **Cons:**
    *   **Computationally expensive:** The number of combinations grows exponentially with the number of hyperparameters and the number of values for each.
    *   **Inefficient for large or continuous hyperparameter spaces:** Can miss optimal values between grid points.
    *   **Can be slow if the model training itself is slow.**

*   **Important Points to Remember:**
    *   The quality of the results depends heavily on the defined grid.
    *   Carefully select the range and number of values for each hyperparameter.
    *   Consider tuning only the most impactful hyperparameters first.

---

### 3. Random Search

*   **Concept:**
    *   An alternative to Grid Search that samples hyperparameter combinations *randomly* from a defined distribution.
    *   More efficient than Grid Search when the hyperparameter space is large or when some hyperparameters are more important than others.

*   **How it Works:**
    1.  **Define the Hyperparameter Space (as distributions):** For each hyperparameter, specify a distribution (e.g., uniform, log-uniform) and the range of values to sample from.
    2.  **Sample Combinations:** Randomly draw a fixed number of hyperparameter combinations from these distributions.
    3.  **Cross-Validation:** For each randomly sampled combination:
        *   Train the model and evaluate its performance using cross-validation (similar to Grid Search).
    4.  **Select the Best:** Identify the hyperparameter combination that yields the best average performance.

*   **Example:**
    *   Tuning a `RidgeRegressor`:
        *   `alpha` (regularization strength): sampled from a log-uniform distribution between 0.001 and 100. (e.g., `loguniform(1e-3, 1e2)`)
        *   `solver`: ["auto", "svd", "cholesky", "lsqr", "sparse_cg", "sag", "saga"] (chosen uniformly from the list)

    *   Instead of trying every combination, Random Search might try, say, 50 randomly sampled combinations.
    *   Example samples: (`alpha=0.5`, `solver="auto"`), (`alpha=15.2`, `solver="saga"`), (`alpha=0.01`, `solver="cholesky"`), etc.

*   **Pros:**
    *   **More efficient than Grid Search:** Explores the hyperparameter space more broadly with fewer trials.
    *   **Likely to find better hyperparameters than Grid Search** when some hyperparameters have little impact on performance, as it doesn't waste time on combinations that are unlikely to be optimal.
    *   **Handles continuous and large hyperparameter spaces better.**

*   **Cons:**
    *   **Does not guarantee finding the absolute best combination.**
    *   The quality of the results depends on the number of iterations and the quality of the sampled distributions.
    *   Can still be computationally intensive if the number of iterations is very large or model training is slow.

*   **Important Points to Remember:**
    *   **Choose appropriate distributions** for your hyperparameters. Log-uniform is often good for parameters like learning rates or regularization strengths.
    *   **Run for a sufficient number of iterations** to effectively explore the space.
    *   Often finds good solutions faster than Grid Search.

---

### 4. Bayesian Optimization

*   **Concept:**
    *   A more intelligent and efficient approach to hyperparameter tuning.
    *   Builds a probabilistic model (surrogate model) of the objective function (e.g., validation accuracy) and uses it to select the most promising hyperparameter combinations to evaluate.
    *   Aims to balance **exploration** (trying new, uncertain regions) and **exploitation** (focusing on regions known to perform well).

*   **How it Works:**
    1.  **Define the Hyperparameter Space:** Similar to Grid and Random Search.
    2.  **Build a Surrogate Model:**
        *   Starts by evaluating the objective function at a few initial random points.
        *   Uses these initial points to train a surrogate model (commonly a Gaussian Process) that approximates the relationship between hyperparameters and performance.
        *   The surrogate model provides an estimate of the mean performance and the uncertainty of that estimate for any given hyperparameter combination.
    3.  **Acquisition Function:**
        *   An acquisition function (e.g., Expected Improvement, Probability of Improvement) is used to determine the next hyperparameter combination to evaluate.
        *   This function uses the surrogate model's predictions (mean and uncertainty) to balance exploration and exploitation.
        *   It suggests points where the model is likely to improve or where the uncertainty is high.
    4.  **Evaluate and Update:**
        *   Evaluate the objective function (train and validate the model) at the hyperparameter combination suggested by the acquisition function.
        *   Add this new data point to the existing dataset.
        *   Retrain the surrogate model with the updated data.
    5.  **Repeat:** Steps 3 and 4 are repeated for a fixed number of iterations.
    6.  **Select the Best:** The hyperparameter combination that yielded the best performance across all evaluated points is selected.

*   **Example:**
    *   Tuning an `XGBoostRegressor`:
        *   `learning_rate`: continuous, [0.01, 0.3]
        *   `max_depth`: integer, [3, 10]
        *   `subsample`: continuous, [0.6, 1.0]

    *   Bayesian Optimization might:
        1.  Start with 5 random (learning\_rate, max\_depth, subsample) combinations.
        2.  Train a Gaussian Process to model these 5 results.
        3.  Use an acquisition function (e.g., Expected Improvement) to suggest the next best combination to try.
        4.  Evaluate that combination, get its score, update the GP, and repeat for a total of, say, 50 iterations.

*   **Pros:**
    *   **Most efficient:** Typically finds good solutions with significantly fewer evaluations than Grid or Random Search, especially for complex and expensive-to-evaluate objective functions.
    *   **Intelligent exploration:** Focuses the search on promising regions of the hyperparameter space.
    *   **Handles continuous and mixed hyperparameter spaces effectively.**

*   **Cons:**
    *   **More complex to understand and implement.**
    *   **Can be sensitive to the choice of surrogate model and acquisition function.**
    *   **May not find the absolute global optimum** but often gets very close.
    *   **Initial random sampling can still influence the early stages of the search.**

*   **Important Points to Remember:**
    *   **Requires a way to evaluate the objective function quickly and reliably.**
    *   **Libraries like `scikit-optimize` (skopt) or `Hyperopt` can be used for implementation.**
    *   **The number of initial points and total iterations are important parameters.**

---

### 5. Choosing the Right Method

*   **When to use Grid Search:**
    *   When the hyperparameter space is small and discrete.
    *   When you have plenty of computational resources and time.
    *   When you need to be absolutely sure you've explored every combination in a defined, small space.

*   **When to use Random Search:**
    *   When the hyperparameter space is large or continuous.
    *   When you have limited computational resources and want to find good hyperparameters quickly.
    *   When you suspect some hyperparameters are more important than others.

*   **When to use Bayesian Optimization:**
    *   When model training is computationally expensive or time-consuming.
    *   When you want the most efficient method and are willing to accept a slightly more complex implementation.
    *   When you need to explore a complex, high-dimensional hyperparameter space effectively.

---

### 6. Practical Considerations & Best Practices

*   **Data Splitting:** Always split your data into training, validation, and testing sets *before* hyperparameter tuning. The validation set is used during tuning, and the final test set is used for an unbiased evaluation of the best model found.
*   **Cross-Validation:** Use cross-validation on the training data to get more robust performance estimates for each hyperparameter combination.
*   **Hyperparameter Importance:** Understand which hyperparameters are most likely to impact your model's performance. Focus your tuning efforts on these first.
*   **Start Simple:** Begin with a simple model and a few key hyperparameters, then gradually increase complexity if needed.
*   **Logarithmic Scales:** For parameters that span many orders of magnitude (e.g., learning rate, regularization strength), consider searching on a logarithmic scale.
*   **Libraries:** Leverage libraries like Scikit-learn's `GridSearchCV` and `RandomizedSearchCV`, or more advanced libraries like `scikit-optimize` (skopt) or `Optuna` for Bayesian Optimization.

---

### 7. Practice Questions & Exercises

**Question 1:**
Which hyperparameter tuning method is guaranteed to find the best combination within a defined grid, but can be computationally expensive?
a) Random Search
b) Bayesian Optimization
c) Grid Search
d) Cross-Validation

**Question 2:**
If you are tuning a model and you have a very large, continuous hyperparameter space, which method would likely be the most efficient to explore this space?
a) Grid Search
b) Random Search
c) Exhaustive Search
d) Manual Tuning

**Question 3:**
Bayesian Optimization uses a ______ model to predict the performance of hyperparameter combinations and an ______ function to decide which combination to try next.
a) Linear Regression, objective
b) Surrogate, acquisition
c) Decision Tree, pruning
d) Logistic Regression, regularization

**Question 4:**
Consider tuning the `max_depth` of a Decision Tree. The possible values are [3, 5, 7, 10, 15, 20]. If you use Grid Search, how many combinations will be tested if you only tune `max_depth`?
a) 3
b) 5
c) 6
d) 10

**Question 5 (Practical Scenario):**
You are building a regression model for a complex task, and training each model takes 30 minutes. You have a budget of 10 hours for hyperparameter tuning.
*   Would Grid Search be suitable if you have 5 hyperparameters to tune, each with 10 possible values? Explain why or why not.
*   Which method would you recommend and why?

---

### Answers

**Answer 1:**
c) Grid Search

**Answer 2:**
b) Random Search

**Answer 3:**
b) Surrogate, acquisition

**Answer 4:**
c) 6 (The possible values are 3, 5, 7, 10, 15, 20, which is a list of 6 values.)

**Answer 5 (Practical Scenario):**
*   **Grid Search Suitability:** No, Grid Search would not be suitable. With 5 hyperparameters, each having 10 values, the total number of combinations is $10^5 = 100,000$. If each combination takes 30 minutes, the total time required would be $100,000 * 30 \text{ minutes} = 3,000,000 \text{ minutes} = 50,000 \text{ hours}$. This far exceeds the 10-hour budget.

*   **Recommended Method:** **Bayesian Optimization** or **Random Search** would be recommended.
    *   **Bayesian Optimization** is the most efficient choice because it intelligently explores the hyperparameter space, aiming to find good solutions with fewer evaluations, especially when each evaluation is costly. It would likely find a good set of hyperparameters within the 10-hour budget.
    *   **Random Search** is also a good option. It's more efficient than Grid Search and would explore the space more broadly. With a budget of 10 hours (600 minutes), you could run $600 \text{ minutes} / 30 \text{ minutes/evaluation} = 20$ evaluations. While 20 evaluations might not be enough to find the absolute best hyperparameters, it's a significant improvement over Grid Search and provides a reasonable exploration of the space. Bayesian Optimization would generally be preferred for its intelligence.

---
### Important Points to Remember

*   **Hyperparameters vs. Parameters:** Never confuse them! Hyperparameters are external settings, parameters are learned from data.
*   **Validation Set is Key:** Use a validation set (or cross-validation) for tuning; *never* tune on your test set.
*   **Trade-offs:** Grid Search (completeness but costly), Random Search (efficiency and breadth), Bayesian Optimization (intelligence and cost-efficiency).
*   **Distribution Matters:** For Random Search and Bayesian Optimization, the choice of hyperparameter distributions is crucial.
*   **Computational Budget:** Always consider how much time and computing power you have when selecting a tuning method.
*   **Iterative Process:** Hyperparameter tuning is often an iterative process. You might start with broad searches and then refine the ranges for promising hyperparameters.
