---
title: "Load and preprocess the Online Retail dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 9: Implement a Decision Tree classifier using the ID3 algorithm to segment customers based on their purchasing behavior using the Online Retail dataset. Analyze the tree structure and discuss the feature importance."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b967"
status: "completed"
scrapedAt: "2026-05-20T16:47:30.443Z"
---
# MACHINE LEARNING LAB - Module 9: Decision Tree (ID3) with Online Retail Data

## Topic: Load and Preprocess the Online Retail Dataset

**Description:** This module focuses on implementing a Decision Tree classifier using the ID3 algorithm to segment customers based on their purchasing behavior using the Online Retail dataset. This topic covers loading and preprocessing the dataset, which is a crucial first step.

**Learning Outcomes:**

*   Understand the structure and characteristics of the Online Retail dataset.
*   Learn how to load the Online Retail dataset into a suitable data structure (e.g., Pandas DataFrame).
*   Identify and handle missing values in the dataset.
*   Perform data cleaning and transformation to prepare the data for the ID3 algorithm.
*   Select relevant features for customer segmentation.

---

### 1. Understanding the Online Retail Dataset

*   **Definition:** The Online Retail dataset is a transactional dataset containing data about online retail transactions occurring between 2010 and 2011. It is often used for data mining and machine learning projects.

*   **Key Columns:**

    *   **InvoiceNo:** Invoice number. A 6-digit integral number uniquely assigned to each transaction. If this code starts with letter 'c', it indicates a cancellation.
    *   **StockCode:** Product (item) code. A 5-digit integral number uniquely assigned to each distinct product.
    *   **Description:** Product (item) name.
    *   **Quantity:** The quantities of each product (item) per transaction.
    *   **InvoiceDate:** Invocation Date and time.  The date and time when each transaction was generated.
    *   **UnitPrice:** Unit price. Product price per unit in sterling.
    *   **CustomerID:** Customer number. A 5-digit integral number uniquely assigned to each customer.
    *   **Country:** Country name. The country where each customer resides.

*   **Dataset Characteristics:**

    *   Mixed data types (numerical, categorical).
    *   Presence of missing values (especially in `CustomerID` and `Description`).
    *   Potential for outliers (e.g., very large quantities or unit prices).
    *   Requires significant preprocessing for machine learning algorithms.

### 2. Loading the Online Retail Dataset

*   **Tool:**  Python with the Pandas library is the standard choice.

*   **Steps:**

    1.  **Import Pandas:**
        ```python
        import pandas as pd
        ```

    2.  **Load the Dataset:**  Assuming the dataset is in a CSV file named `OnlineRetail.csv`.
        ```python
        df = pd.read_csv('OnlineRetail.csv', encoding='ISO-8859-1')
        ```
        *   **Note:** The `encoding='ISO-8859-1'` is often necessary to handle special characters in the `Description` column.  Try `encoding='utf-8'` first, and if it doesn't work, use `'ISO-8859-1'`.  You might also need to specify `encoding='unicode_escape'` if you're still encountering encoding errors.

    3.  **Inspect the Data:**
        ```python
        print(df.head())  # Display the first few rows
        print(df.info())  # Get data types and non-null counts
        print(df.describe()) #Get descriptive statistics for numerical data
        ```

*   **Example:**

    ```python
    import pandas as pd

    try:
        df = pd.read_csv('OnlineRetail.csv', encoding='utf-8')  # Try utf-8 first
    except UnicodeDecodeError:
        try:
            df = pd.read_csv('OnlineRetail.csv', encoding='ISO-8859-1') # Try ISO-8859-1 if utf-8 fails
        except UnicodeDecodeError:
            df = pd.read_csv('OnlineRetail.csv', encoding='unicode_escape') # Try unicode_escape as a last resort

    print(df.head())
    print(df.info())
    ```

### 3. Handling Missing Values

*   **Identification:** Use `df.isnull().sum()` to count missing values in each column.

*   **Strategies:**

    *   **Deletion:**  Remove rows with missing values.  Use `df.dropna(inplace=True)` to modify the DataFrame directly.  Use `df.dropna(subset=['CustomerID'], inplace=True)` to only drop rows with missing CustomerIDs, as this is crucial for customer segmentation.
        *   **Caution:**  Deleting too many rows can lead to data loss.  Consider the percentage of missing values before deleting.
    *   **Imputation:**  Fill missing values with a suitable replacement.
        *   **Numerical columns:**  Use mean, median, or a constant value.  `df['UnitPrice'].fillna(df['UnitPrice'].mean(), inplace=True)`
        *   **Categorical columns:**  Use the mode (most frequent value). `df['Description'].fillna(df['Description'].mode()[0], inplace=True)` or a placeholder like "Unknown".

*   **Example:**

    ```python
    import pandas as pd

    try:
        df = pd.read_csv('OnlineRetail.csv', encoding='utf-8')  # Try utf-8 first
    except UnicodeDecodeError:
        try:
            df = pd.read_csv('OnlineRetail.csv', encoding='ISO-8859-1') # Try ISO-8859-1 if utf-8 fails
        except UnicodeDecodeError:
            df = pd.read_csv('OnlineRetail.csv', encoding='unicode_escape') # Try unicode_escape as a last resort


    # Check for missing values
    print(df.isnull().sum())

    # Drop rows with missing CustomerID
    df.dropna(subset=['CustomerID'], inplace=True)

    # Verify that missing CustomerIDs are gone
    print(df.isnull().sum())
    ```

### 4. Data Cleaning and Transformation

*   **Data Cleaning:**

    *   **Remove Duplicate Rows:** `df.drop_duplicates(inplace=True)`
    *   **Handle Cancellations:** Filter out rows where `Quantity` or `UnitPrice` are negative (indicating returns or adjustments).  However, be cautious and understand the business context before simply removing negative values.  Often, you'll want to analyze the cancelled orders separately. A simple way is to filter using `df = df[df['Quantity'] > 0]`
    *   **Remove Outliers:**  Identify and remove outliers based on domain knowledge or statistical methods (e.g., IQR rule). Be very careful when removing outliers. Understand what they mean first and the impact of removing them.
    *   **Data Type Conversion:** Ensure appropriate data types.  Convert `InvoiceDate` to datetime objects: `df['InvoiceDate'] = pd.to_datetime(df['InvoiceDate'])`.

*   **Data Transformation:**

    *   **Feature Engineering:** Create new features that might be useful for segmentation.  Examples:
        *   **Total Price:** `df['TotalPrice'] = df['Quantity'] * df['UnitPrice']`
        *   **Recency:** Calculate how recently a customer made a purchase.  This requires determining a 'snapshot date' (e.g., the last date in the dataset) and calculating the difference between the snapshot date and each customer's last purchase date.
        *   **Frequency:** Calculate how often a customer makes purchases (e.g., number of invoices).
        *   **Monetary Value:** Calculate the total amount spent by a customer.
        *   **Time of Day:** Extract hour, minute, and day of week from the InvoiceDate
    *   **Aggregation:** Aggregate data at the customer level to create features for segmentation. Use `groupby('CustomerID')`

*   **Example:**

    ```python
    import pandas as pd

    try:
        df = pd.read_csv('OnlineRetail.csv', encoding='utf-8')  # Try utf-8 first
    except UnicodeDecodeError:
        try:
            df = pd.read_csv('OnlineRetail.csv', encoding='ISO-8859-1') # Try ISO-8859-1 if utf-8 fails
        except UnicodeDecodeError:
            df = pd.read_csv('OnlineRetail.csv', encoding='unicode_escape') # Try unicode_escape as a last resort

    df.dropna(subset=['CustomerID'], inplace=True)
    df.drop_duplicates(inplace=True)

    # Remove rows with negative quantities
    df = df[df['Quantity'] > 0]

    # Calculate TotalPrice
    df['TotalPrice'] = df['Quantity'] * df['UnitPrice']

    # Convert InvoiceDate to datetime
    df['InvoiceDate'] = pd.to_datetime(df['InvoiceDate'])

    # Create RFM (Recency, Frequency, Monetary Value) features
    import datetime as dt
    snapshot_date = df['InvoiceDate'].max() + dt.timedelta(days=1)  # Use the last date in the dataset plus one day

    rfm = df.groupby('CustomerID').agg({
        'InvoiceDate': lambda x: (snapshot_date - x.max()).days,  # Recency
        'InvoiceNo': 'count', # Frequency
        'TotalPrice': 'sum' # Monetary Value
    })

    # Rename columns
    rfm.rename(columns={
        'InvoiceDate': 'Recency',
        'InvoiceNo': 'Frequency',
        'TotalPrice': 'MonetaryValue'
    }, inplace=True)

    print(rfm.head())
    ```

### 5. Feature Selection

*   **Relevance:** Select features that are most relevant to customer segmentation.
*   **Domain Knowledge:**  Use your understanding of the business to choose features that are likely to differentiate customer segments.
*   **Feature Importance:**  After building the Decision Tree (in later modules), you can analyze feature importance to validate your selection.  However, starting with well-chosen features is crucial.
*   **Example Features for Customer Segmentation:**

    *   Recency
    *   Frequency
    *   Monetary Value
    *   Average Order Value (MonetaryValue / Frequency)
    *   Number of unique products purchased

*   **Example:** In the previous example, we already extracted 'Recency', 'Frequency', and 'MonetaryValue'. These are good features to use as input to the decision tree.

### Important Points to Remember:

*   **Data Quality is Crucial:**  The accuracy and reliability of the Decision Tree depend heavily on the quality of the input data.
*   **Preprocessing is Time-Consuming:**  Data loading and preprocessing are often the most time-consuming steps in a machine learning project.
*   **Understand Your Data:**  Thorough exploration and understanding of the dataset are essential for effective preprocessing.
*   **Documentation:**  Document all preprocessing steps to ensure reproducibility.
*   **Error Handling:** Use `try-except` blocks to gracefully handle potential errors, especially during file loading and data type conversion.

---

### Practice Questions/Exercises:

1.  **Load the Online Retail dataset and print the shape of the DataFrame.**

    ```python
    import pandas as pd

    try:
        df = pd.read_csv('OnlineRetail.csv', encoding='utf-8')  # Try utf-8 first
    except UnicodeDecodeError:
        try:
            df = pd.read_csv('OnlineRetail.csv', encoding='ISO-8859-1') # Try ISO-8859-1 if utf-8 fails
        except UnicodeDecodeError:
            df = pd.read_csv('OnlineRetail.csv', encoding='unicode_escape') # Try unicode_escape as a last resort


    print(df.shape)
    ```

2.  **Calculate and print the percentage of missing values in each column of the Online Retail dataset.**

    ```python
    import pandas as pd

    try:
        df = pd.read_csv('OnlineRetail.csv', encoding='utf-8')  # Try utf-8 first
    except UnicodeDecodeError:
        try:
            df = pd.read_csv('OnlineRetail.csv', encoding='ISO-8859-1') # Try ISO-8859-1 if utf-8 fails
        except UnicodeDecodeError:
            df = pd.read_csv('OnlineRetail.csv', encoding='unicode_escape') # Try unicode_escape as a last resort

    missing_percentages = df.isnull().sum() / len(df) * 100
    print(missing_percentages)
    ```

3.  **Remove rows with missing `CustomerID` and then calculate and print the number of remaining rows.**

    ```python
    import pandas as pd

    try:
        df = pd.read_csv('OnlineRetail.csv', encoding='utf-8')  # Try utf-8 first
    except UnicodeDecodeError:
        try:
            df = pd.read_csv('OnlineRetail.csv', encoding='ISO-8859-1') # Try ISO-8859-1 if utf-8 fails
        except UnicodeDecodeError:
            df = pd.read_csv('OnlineRetail.csv', encoding='unicode_escape') # Try unicode_escape as a last resort


    df.dropna(subset=['CustomerID'], inplace=True)
    print(len(df))
    ```

4.  **Calculate and print the total revenue generated by each customer.**

    ```python
    import pandas as pd

    try:
        df = pd.read_csv('OnlineRetail.csv', encoding='utf-8')  # Try utf-8 first
    except UnicodeDecodeError:
        try:
            df = pd.read_csv('OnlineRetail.csv', encoding='ISO-8859-1') # Try ISO-8859-1 if utf-8 fails
        except UnicodeDecodeError:
            df = pd.read_csv('OnlineRetail.csv', encoding='unicode_escape') # Try unicode_escape as a last resort


    df.dropna(subset=['CustomerID'], inplace=True)
    df = df[df['Quantity'] > 0]  # Remove cancelled orders

    df['TotalPrice'] = df['Quantity'] * df['UnitPrice']
    customer_revenue = df.groupby('CustomerID')['TotalPrice'].sum()
    print(customer_revenue)
    ```

5.  **Convert `InvoiceDate` to datetime objects and extract the month from each date, storing it in a new column called `InvoiceMonth`.**

    ```python
    import pandas as pd

    try:
        df = pd.read_csv('OnlineRetail.csv', encoding='utf-8')  # Try utf-8 first
    except UnicodeDecodeError:
        try:
            df = pd.read_csv('OnlineRetail.csv', encoding='ISO-8859-1') # Try ISO-8859-1 if utf-8 fails
        except UnicodeDecodeError:
            df = pd.read_csv('OnlineRetail.csv', encoding='unicode_escape') # Try unicode_escape as a last resort


    df['InvoiceDate'] = pd.to_datetime(df['InvoiceDate'])
    df['InvoiceMonth'] = df['InvoiceDate'].dt.month
    print(df.head())
    ```

---
This comprehensive set of notes covers all aspects of loading and preprocessing the Online Retail dataset in preparation for building a Decision Tree classifier using the ID3 algorithm. The examples provided are readily executable, and the practice questions reinforce the key concepts. Good luck!
