---
title: "Load and preprocess the 20 Newsgroups dataset."
subject: "MACHINE LEARNING LAB"
module: "Module 7: Implement a Naïve Bayes classifier to categorize text documents into topics using the 20 Newsgroups dataset. Compare the performance of Multinomial Naïve Bayes with Bernoulli Naïve Bayes."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b959"
status: "completed"
scrapedAt: "2026-05-20T16:47:21.723Z"
---
## MACHINE LEARNING LAB - Module 7: Loading and Preprocessing the 20 Newsgroups Dataset

**Objective:** Implement a Naïve Bayes classifier to categorize text documents into topics using the 20 Newsgroups dataset. Compare the performance of Multinomial Naïve Bayes with Bernoulli Naïve Bayes.  This section focuses specifically on loading and preprocessing the dataset.

**Topic:** Load and preprocess the 20 Newsgroups dataset.

**Learning Outcomes:**

*   Understand the 20 Newsgroups dataset and its structure.
*   Load the 20 Newsgroups dataset using scikit-learn.
*   Clean and preprocess the text data, including:
    *   Removing stop words.
    *   Lowercasing.
    *   Removing punctuation.
    *   Stemming or Lemmatization.
*   Convert text data into a numerical representation suitable for Naïve Bayes using techniques like:
    *   Bag of Words (CountVectorizer).
    *   TF-IDF (TfidfVectorizer).
*   Split the dataset into training and testing sets.

---

### 1. Understanding the 20 Newsgroups Dataset

*   **What is it?** The 20 Newsgroups dataset is a collection of approximately 20,000 newsgroup documents, partitioned nearly evenly across 20 different newsgroups.

*   **Structure:** The dataset is organized into 20 different directories, each corresponding to a different newsgroup topic.  Each directory contains multiple text files, each representing a single newsgroup post.

*   **Topics (Newsgroups):** The 20 topics cover a diverse range of subjects, including:
    *   `alt.atheism`
    *   `comp.graphics`
    *   `comp.os.ms-windows.misc`
    *   `comp.sys.ibm.pc.hardware`
    *   `comp.sys.mac.hardware`
    *   `comp.windows.x`
    *   `misc.forsale`
    *   `rec.autos`
    *   `rec.motorcycles`
    *   `rec.sport.baseball`
    *   `rec.sport.hockey`
    *   `sci.crypt`
    *   `sci.electronics`
    *   `sci.med`
    *   `sci.space`
    *   `soc.religion.christian`
    *   `talk.politics.guns`
    *   `talk.politics.mideast`
    *   `talk.politics.misc`
    *   `talk.religion.misc`

*   **Use Cases:** It is a popular dataset for text classification, information retrieval, and topic modeling.

### 2. Loading the 20 Newsgroups Dataset using Scikit-learn

Scikit-learn provides a convenient function to load the 20 Newsgroups dataset directly: `sklearn.datasets.fetch_20newsgroups`.

*   **Code Example:**

    ```python
    from sklearn.datasets import fetch_20newsgroups

    # Load all categories
    newsgroups_train = fetch_20newsgroups(subset='train', shuffle=True, random_state=42)
    newsgroups_test = fetch_20newsgroups(subset='test', shuffle=True, random_state=42)


    # Exploring the loaded data
    print(newsgroups_train.target_names) # List of category names
    print(len(newsgroups_train.data))      # Number of training documents
    print(len(newsgroups_test.data))       # Number of test documents
    print(newsgroups_train.data[0])        # Print the first document (raw text)
    print(newsgroups_train.target[0])      # Print the category index of the first document
    print(newsgroups_train.target_names[newsgroups_train.target[0]]) # Print the category name of the first document
    ```

*   **`subset` parameter:**
    *   `'train'`: Loads the training set.
    *   `'test'`: Loads the test set.
    *   `'all'`: Loads the entire dataset (both training and testing).

*   **`shuffle` parameter:** Shuffles the order of the documents.  Set to `True` to ensure randomness.

*   **`random_state` parameter:**  Sets the random seed for shuffling, ensuring reproducibility.

*   **`categories` parameter:** You can specify a list of categories to load a subset of the dataset. For example:

    ```python
    categories = ['alt.atheism', 'soc.religion.christian', 'talk.politics.guns']
    newsgroups_subset = fetch_20newsgroups(subset='train', categories=categories, shuffle=True, random_state=42)
    ```

*   **Data Structure:**  The `fetch_20newsgroups` function returns a `Bunch` object, which is similar to a dictionary. It contains the following keys:
    *   `data`:  A list of strings, where each string is the raw text of a document.
    *   `target`: A NumPy array of integers, where each integer represents the index of the category to which the corresponding document belongs.
    *   `target_names`: A list of strings, where each string is the name of a category. The index of a category name in this list corresponds to the integer value in the `target` array.
    *   `DESCR`: A string containing a description of the dataset.
    *   `filenames`: A list of the original filenames of the documents (if applicable).

### 3. Cleaning and Preprocessing the Text Data

Raw text data usually contains noise and irrelevant information that can negatively impact the performance of machine learning models. Preprocessing aims to clean and prepare the text data for analysis.

*   **Lowercasing:** Convert all text to lowercase. This helps to treat "The" and "the" as the same word.

    ```python
    text = "This is a Sample Text."
    text_lower = text.lower()
    print(text_lower)  # Output: this is a sample text.
    ```

*   **Removing Punctuation:** Remove punctuation marks as they usually don't contribute to the meaning of the text.

    ```python
    import string
    text = "This is text, with punctuation!"
    text_no_punct = text.translate(str.maketrans('', '', string.punctuation))
    print(text_no_punct) # Output: This is text with punctuation
    ```

*   **Removing Stop Words:**  Stop words are common words (e.g., "the", "a", "is", "are") that are often removed because they do not carry significant meaning.

    ```python
    from nltk.corpus import stopwords
    import nltk
    nltk.download('stopwords') # Download stopwords if you haven't already
    stop_words = set(stopwords.words('english'))
    text = "This is an example sentence with some stop words."
    words = text.split()
    filtered_words = [word for word in words if word.lower() not in stop_words] #Remove stop words by checking against all lower-cased versions of each word
    filtered_text = " ".join(filtered_words)
    print(filtered_text) # Output: example sentence stop words.
    ```

*   **Stemming:** Reduces words to their root form by removing suffixes (e.g., "running" -> "run").  Stemming can sometimes produce non-words.

    ```python
    from nltk.stem import PorterStemmer
    import nltk
    nltk.download('punkt')
    stemmer = PorterStemmer()
    text = "running quickly through the fields"
    words = nltk.word_tokenize(text) #split the sentence into a list of words
    stemmed_words = [stemmer.stem(word) for word in words]
    stemmed_text = " ".join(stemmed_words)
    print(stemmed_text) # Output: run quickli through the field
    ```

*   **Lemmatization:**  Reduces words to their base or dictionary form (lemma).  Lemmatization produces valid words.

    ```python
    from nltk.stem import WordNetLemmatizer
    import nltk
    nltk.download('wordnet')
    nltk.download('omw-1.4')

    lemmatizer = WordNetLemmatizer()
    text = "running quickly through the fields"
    words = nltk.word_tokenize(text)
    lemmatized_words = [lemmatizer.lemmatize(word) for word in words]
    lemmatized_text = " ".join(lemmatized_words)
    print(lemmatized_text) # Output: running quickly through the field
    ```

*   **Choosing between Stemming and Lemmatization:**  Lemmatization is generally preferred as it produces meaningful words. However, stemming is faster and can be sufficient for some applications.

*   **Combining Preprocessing Steps:**  You can combine all these steps into a single function:

    ```python
    import nltk
    import string
    from nltk.corpus import stopwords
    from nltk.stem import WordNetLemmatizer

    nltk.download('stopwords')
    nltk.download('wordnet')
    nltk.download('omw-1.4')
    nltk.download('punkt')


    def preprocess_text(text):
        text = text.lower()
        text = text.translate(str.maketrans('', '', string.punctuation))
        words = nltk.word_tokenize(text)
        stop_words = set(stopwords.words('english'))
        words = [word for word in words if word not in stop_words]
        lemmatizer = WordNetLemmatizer()
        words = [lemmatizer.lemmatize(word) for word in words]
        text = " ".join(words)
        return text

    # Example usage:
    example_text = "This is an example sentence with Stop Words and Punctuation!"
    preprocessed_text = preprocess_text(example_text)
    print(preprocessed_text) # Output: example sentence stop word punctuation
    ```

### 4. Converting Text Data to Numerical Representation

Machine learning algorithms require numerical input.  We need to convert the preprocessed text data into a numerical format.  Two common techniques are:

*   **Bag of Words (CountVectorizer):**

    *   Creates a vocabulary of all unique words in the corpus (collection of documents).
    *   Represents each document as a vector where each element represents the frequency of a word from the vocabulary in that document.

    ```python
    from sklearn.feature_extraction.text import CountVectorizer

    # Sample documents
    documents = ["This is the first document.", "This is the second document.", "And this is the third one.", "Is this the first document?"]

    # Create a CountVectorizer object
    vectorizer = CountVectorizer()

    # Fit the vectorizer to the documents (learn the vocabulary)
    vectorizer.fit(documents)

    # Transform the documents into a bag-of-words representation
    vector = vectorizer.transform(documents)

    # Print the vocabulary
    print(vectorizer.vocabulary_)

    # Print the bag-of-words representation (sparse matrix)
    print(vector.toarray())  # Convert to a dense array for easier viewing

    # Print feature names (words in the vocabulary)
    print(vectorizer.get_feature_names_out())
    ```

    *   **`max_features` parameter:**  Limits the vocabulary size to the top `n` most frequent words. This can improve performance and reduce memory usage.
    *   **`ngram_range` parameter:** Specifies the range of n-grams to consider (e.g., `(1, 1)` for unigrams, `(1, 2)` for unigrams and bigrams).
    *   **`stop_words` parameter:** While you can remove stopwords previously, `CountVectorizer` can also handle this directly.

*   **TF-IDF (TfidfVectorizer):**

    *   TF-IDF (Term Frequency-Inverse Document Frequency) measures the importance of a term in a document relative to the entire corpus.
    *   It assigns a higher weight to terms that appear frequently in a specific document but rarely in the overall corpus.
    *   TF-IDF helps to down-weight common words and highlight words that are more specific to a particular document.

    ```python
    from sklearn.feature_extraction.text import TfidfVectorizer

    # Sample documents
    documents = ["This is the first document.", "This is the second document.", "And this is the third one.", "Is this the first document?"]

    # Create a TfidfVectorizer object
    vectorizer = TfidfVectorizer()

    # Fit the vectorizer to the documents (learn the vocabulary and IDF)
    vectorizer.fit(documents)

    # Transform the documents into a TF-IDF representation
    vector = vectorizer.transform(documents)

    # Print the TF-IDF representation (sparse matrix)
    print(vector.toarray())

    # Print feature names
    print(vectorizer.get_feature_names_out())
    ```

    *   `TfidfVectorizer` inherits parameters from `CountVectorizer`, such as `max_features`, `ngram_range`, and `stop_words`.  It also has its own parameters like `norm` (to normalize TF-IDF vectors) and `use_idf` (to enable/disable IDF reweighting).

*   **Choosing between Bag of Words and TF-IDF:** TF-IDF often performs better than Bag of Words, especially for larger datasets, because it considers the importance of words relative to the entire corpus.

### 5. Splitting the Dataset into Training and Testing Sets

Divide the dataset into training and testing sets. The training set is used to train the Naïve Bayes classifier, and the testing set is used to evaluate its performance.

*   **Using scikit-learn's `train_test_split`:**

    ```python
    from sklearn.model_selection import train_test_split
    from sklearn.datasets import fetch_20newsgroups
    from sklearn.feature_extraction.text import TfidfVectorizer

    # Load the dataset
    newsgroups = fetch_20newsgroups(subset='all', shuffle=True, random_state=42)

    # Preprocess the text data (you can use the preprocess_text function defined earlier)
    processed_data = [preprocess_text(doc) for doc in newsgroups.data]

    # Create a TF-IDF vectorizer
    vectorizer = TfidfVectorizer(max_features=1000)  # Limit vocabulary for demonstration

    # Fit and transform the data
    X = vectorizer.fit_transform(processed_data)
    y = newsgroups.target

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    print("Training set size:", X_train.shape)
    print("Testing set size:", X_test.shape)
    ```

*   **`test_size` parameter:** Specifies the proportion of the dataset to include in the test split (e.g., `0.2` for 20% testing data, 80% training).

*   **`random_state` parameter:**  Sets the random seed for splitting, ensuring reproducibility.

### Complete Example Combining All Steps:

```python
from sklearn.datasets import fetch_20newsgroups
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
import nltk
import string
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('omw-1.4')
nltk.download('punkt')

def preprocess_text(text):
    text = text.lower()
    text = text.translate(str.maketrans('', '', string.punctuation))
    words = nltk.word_tokenize(text)
    stop_words = set(stopwords.words('english'))
    words = [word for word in words if word not in stop_words]
    lemmatizer = WordNetLemmatizer()
    words = [lemmatizer.lemmatize(word) for word in words]
    text = " ".join(words)
    return text


# 1. Load the dataset
newsgroups_train = fetch_20newsgroups(subset='train', shuffle=True, random_state=42)
newsgroups_test = fetch_20newsgroups(subset='test', shuffle=True, random_state=42)

# 2. Preprocess the text data
train_data_processed = [preprocess_text(doc) for doc in newsgroups_train.data]
test_data_processed = [preprocess_text(doc) for doc in newsgroups_test.data]


# 3. Convert text data to numerical representation (TF-IDF)
vectorizer = TfidfVectorizer() #You can experiment with max_features, ngram_range etc. here
X_train = vectorizer.fit_transform(train_data_processed)
X_test = vectorizer.transform(test_data_processed)
y_train = newsgroups_train.target
y_test = newsgroups_test.target

#No need for train_test_split because we load the train and test sets separately
#The next steps would be to train a Naive Bayes classifier and evaluate it

print("X_train shape:", X_train.shape)
print("X_test shape:", X_test.shape)
print("y_train shape:", y_train.shape)
print("y_test shape:", y_test.shape)
```

---

### Practice Questions/Exercises

1.  **Load only the 'sci.space' and 'rec.sport.baseball' categories from the 20 Newsgroups training set. How many documents are in this subset?**

    *   **Answer:**

        ```python
        from sklearn.datasets import fetch_20newsgroups

        categories = ['sci.space', 'rec.sport.baseball']
        newsgroups_subset = fetch_20newsgroups(subset='train', categories=categories, shuffle=True, random_state=42)

        print("Number of documents:", len(newsgroups_subset.data))
        #Output: Number of documents: 1187
        ```

2.  **Write a function that removes HTML tags from a given text string.** (Hint: Use regular expressions.)

    *   **Answer:**

        ```python
        import re

        def remove_html_tags(text):
            clean = re.compile('<.*?>')
            return re.sub(clean, '', text)

        html_text = "<p>This is a <b>sample</b> text with <i>HTML</i> tags.</p>"
        clean_text = remove_html_tags(html_text)
        print(clean_text) #Output: This is a sample text with HTML tags.
        ```

3.  **Experiment with different values for `max_features` in `TfidfVectorizer`.  How does it affect the size of the vocabulary and the performance of a Naïve Bayes classifier (which you will implement later)?** (This exercise will require running the full Naive Bayes implementation after this preprocessing stage is complete)

    *   **Answer:**  (This is an open-ended question. The answer will depend on the specific classifier and dataset. Experimentation is key).  In general:

        *   A larger `max_features` value will lead to a larger vocabulary, potentially capturing more information but also increasing the dimensionality of the data, leading to higher computational cost. It can also increase the risk of overfitting on the training data if the vocabulary is too specific.

        *   A smaller `max_features` value will lead to a smaller vocabulary, reducing dimensionality and potentially improving generalization, but it may also discard important information. This could lead to underfitting, especially if relevant words are excluded.

        *   The optimal value for `max_features` is typically determined by cross-validation.

4.  **Why is shuffling the dataset important before splitting it into training and testing sets?**

    *   **Answer:** Shuffling is important to ensure that the training and testing sets are representative of the overall data distribution. If the data is not shuffled, it is possible that the training set will only contain data from a specific subset of the population, and the testing set will only contain data from a different subset. This can lead to biased results and poor generalization performance.

---

### Important Points to Remember

*   Text preprocessing is a crucial step in text classification. The quality of the preprocessed data directly impacts the performance of the classifier.
*   Experiment with different preprocessing techniques and vectorization methods to find the optimal configuration for your specific dataset and task.
*   Always split the data into training and testing sets to evaluate the generalization performance of your classifier.
*   Be aware of the limitations of each preprocessing technique (e.g., stemming can produce non-words, removing stop words can sometimes remove important context).
*   Document your preprocessing steps and choices for reproducibility.
