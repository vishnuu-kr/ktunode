---
title: "Text Processing :-"
subject: "DATA ANALYTICS"
module: "Module 4: Text Processing :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b72b"
status: "completed"
scrapedAt: "2026-05-20T16:44:10.222Z"
---
# DATA ANALYTICS - Module 4: Text Processing - Text Processing

## Learning Outcomes:

*   Understand the importance of text processing in data analytics.
*   Apply common text preprocessing techniques, including tokenization, stemming, lemmatization, and stop word removal.
*   Implement techniques for text representation such as Bag of Words (BoW), TF-IDF, and Word Embeddings (e.g., Word2Vec, GloVe).
*   Analyze text data using sentiment analysis techniques.
*   Utilize regular expressions for pattern matching and text manipulation.

## 1. Introduction to Text Processing in Data Analytics

### 1.1 Importance of Text Processing

*   **Unstructured Data:** Text is a primary form of unstructured data, prevalent in social media, customer reviews, documents, and web content.
*   **Insights Extraction:**  Text processing enables extracting valuable insights, patterns, and trends from unstructured text data.
*   **Applications:**  Used in various fields like:
    *   **Sentiment Analysis:**  Understanding customer opinions from reviews.
    *   **Topic Modeling:**  Identifying key themes in large document collections.
    *   **Information Retrieval:**  Improving search engine results.
    *   **Text Classification:** Categorizing documents automatically.
    *   **Chatbots & NLP Applications:** Building conversational AI agents.
*   **Challenges:** Text data presents challenges like:
    *   **Variety of Language:**  Different writing styles, slang, and abbreviations.
    *   **Ambiguity:** Words can have multiple meanings.
    *   **Data Volume:** Handling massive amounts of text data.

### 1.2 Key Concepts and Definitions

*   **Corpus:** A collection of text documents.
*   **Document:** A single unit of text (e.g., a tweet, a review, an article).
*   **Token:**  An individual unit of text, typically a word or a punctuation mark.
*   **Vocabulary:** The set of unique tokens in a corpus.
*   **N-gram:** A contiguous sequence of n items (tokens) from a given sample of text.
*   **Stop Words:** Common words (e.g., "the," "a," "is") that are often removed from text.

## 2. Text Preprocessing Techniques

### 2.1 Tokenization

*   **Definition:**  The process of breaking down a text into individual tokens (words, punctuation).
*   **Methods:**
    *   **Whitespace Tokenization:** Splits the text based on whitespace.  Simple but can be problematic with punctuation.
    *   **Punctuation-Based Tokenization:** Separates punctuation as tokens.
    *   **Subword Tokenization:** (e.g., Byte-Pair Encoding (BPE)) Splits words into smaller units.  Useful for dealing with out-of-vocabulary words.
*   **Example (Python using NLTK):**

    ```python
    import nltk
    nltk.download('punkt') # Download required resource (only run once)
    from nltk.tokenize import word_tokenize

    text = "This is a sample sentence. It includes punctuation!"
    tokens = word_tokenize(text)
    print(tokens)
    # Output: ['This', 'is', 'a', 'sample', 'sentence', '.', 'It', 'includes', 'punctuation', '!']
    ```

### 2.2 Stemming

*   **Definition:** Reducing words to their root or stem form by removing suffixes (e.g., "running" -> "run").
*   **Algorithms:**
    *   **Porter Stemmer:**  A popular and widely used algorithm. Over-aggressive at times.
    *   **Snowball Stemmer (Porter2):**  An improved version of the Porter Stemmer.
    *   **Lancaster Stemmer:**  More aggressive than Porter and Snowball.
*   **Example (Python using NLTK):**

    ```python
    from nltk.stem import PorterStemmer

    stemmer = PorterStemmer()
    words = ["running", "flies", "easily", "jumps"]
    stemmed_words = [stemmer.stem(word) for word in words]
    print(stemmed_words)
    # Output: ['run', 'fli', 'easili', 'jump']
    ```
*   **Note:** Stemming can sometimes produce non-words.

### 2.3 Lemmatization

*   **Definition:**  Reducing words to their base or dictionary form (lemma) using vocabulary and morphological analysis (e.g., "better" -> "good").
*   **Requires Part-of-Speech (POS) tagging:**  To understand the context of the word.
*   **Example (Python using NLTK):**

    ```python
    import nltk
    nltk.download('wordnet')
    nltk.download('averaged_perceptron_tagger')
    from nltk.stem import WordNetLemmatizer

    lemmatizer = WordNetLemmatizer()
    words = ["better", "flies", "running"]
    pos_tags = nltk.pos_tag(words)  # Get POS tags
    lemmatized_words = [lemmatizer.lemmatize(word, pos='v' if tag.startswith('V') else 'n') for word, tag in pos_tags] # Lemmatize based on POS
    print(lemmatized_words)
    # Output: ['good', 'fly', 'run']

    ```
*   **Key Difference from Stemming:** Lemmatization produces valid words, while stemming might not.  Lemmatization is generally preferred when word meaning is important.

### 2.4 Stop Word Removal

*   **Definition:** Removing common words (stop words) that don't contribute significantly to the meaning of the text.
*   **List of Stop Words:**  Predefined lists of stop words are available in libraries like NLTK and spaCy.
*   **Customization:** Stop word lists can be customized based on the specific application.
*   **Example (Python using NLTK):**

    ```python
    import nltk
    nltk.download('stopwords')
    from nltk.corpus import stopwords

    stop_words = set(stopwords.words('english')) #Get English stopwords
    text = "This is a sample sentence with some common words."
    tokens = word_tokenize(text)
    filtered_tokens = [w for w in tokens if not w in stop_words]
    print(filtered_tokens)
    # Output: ['This', 'sample', 'sentence', 'common', 'words', '.']
    ```

### 2.5 Other Preprocessing Steps

*   **Lowercasing:** Converting text to lowercase to treat "The" and "the" as the same word.
*   **Punctuation Removal:** Removing punctuation marks.
*   **Number Removal:** Removing numbers.
*   **Whitespace Removal:** Removing extra whitespace.
*   **HTML Tag Removal:** Removing HTML tags (if processing web content).
*   **Special Character Removal:** Removing special characters (e.g., emojis).

## 3. Text Representation Techniques

### 3.1 Bag of Words (BoW)

*   **Definition:** A simple text representation technique where a document is represented as the bag (multiset) of its words, disregarding grammar and word order but keeping the frequency of each word.
*   **Process:**
    1.  **Create Vocabulary:**  Build a vocabulary of all unique words in the corpus.
    2.  **Create Document Vectors:**  Represent each document as a vector where each element corresponds to a word in the vocabulary, and the value is the frequency of that word in the document.
*   **Example:**

    **Documents:**
    *   Document 1: "This is the first document."
    *   Document 2: "This is the second document."

    **Vocabulary:** ["This", "is", "the", "first", "document", "second"]

    **BoW Representation:**
    *   Document 1: \[1, 1, 1, 1, 1, 0]
    *   Document 2: \[1, 1, 1, 0, 1, 1]
*   **Limitations:**
    *   Ignores word order and context.
    *   Treats all words equally (doesn't account for word importance).
    *   Can lead to high-dimensional vectors, especially with large vocabularies.

*   **Python Example (using scikit-learn):**

    ```python
    from sklearn.feature_extraction.text import CountVectorizer

    documents = ["This is the first document.", "This is the second document."]
    vectorizer = CountVectorizer()
    vectorizer.fit(documents)  # Learn vocabulary
    vector = vectorizer.transform(documents) # Create document vectors
    print(vectorizer.vocabulary_) #print the learned vocabulary
    print(vector.toarray())
    # Output: {'this': 4, 'is': 1, 'the': 3, 'first': 0, 'document': 5, 'second': 2}
    # Output: [[1 1 1 1 1 0]
    #          [1 1 1 0 1 1]]
    ```

### 3.2 TF-IDF (Term Frequency-Inverse Document Frequency)

*   **Definition:** A text representation technique that assigns weights to words based on their frequency in a document (TF) and their rarity across the entire corpus (IDF).
*   **TF (Term Frequency):** Measures how frequently a word appears in a document.
    *   `TF(t,d) = (Number of times term t appears in a document d) / (Total number of terms in document d)`
*   **IDF (Inverse Document Frequency):** Measures the importance of a word across the corpus.  Rare words have higher IDF scores.
    *   `IDF(t,D) = log(Total number of documents in corpus D / Number of documents containing term t)`
*   **TF-IDF Score:** `TF-IDF(t,d,D) = TF(t,d) * IDF(t,D)`
*   **Advantages:**
    *   Addresses the limitations of BoW by assigning higher weights to more important words.
    *   Reduces the impact of common words that appear frequently across all documents.
*   **Python Example (using scikit-learn):**

    ```python
    from sklearn.feature_extraction.text import TfidfVectorizer

    documents = ["This is the first document.", "This is the second document."]
    vectorizer = TfidfVectorizer()
    vectorizer.fit(documents)
    vector = vectorizer.transform(documents)
    print(vectorizer.vocabulary_)
    print(vector.toarray())
    ```

### 3.3 Word Embeddings (Word2Vec, GloVe)

*   **Definition:**  Distributed representations of words in a vector space, where words with similar meanings are located closer to each other.  Capture semantic relationships between words.
*   **Word2Vec:**  A neural network-based technique that learns word embeddings by predicting the context of a word (CBOW) or predicting the word given its context (Skip-gram).
*   **GloVe (Global Vectors for Word Representation):** An unsupervised learning algorithm that learns word embeddings based on global word-word co-occurrence statistics.
*   **Advantages:**
    *   Capture semantic relationships between words.
    *   Lower dimensionality compared to BoW and TF-IDF.
    *   Can be pre-trained on large corpora and used for transfer learning.
*   **Example (using Gensim with pre-trained Word2Vec):**

    ```python
    import gensim.downloader as api
    from gensim.models import Word2Vec

    # Download pre-trained Word2Vec model (small version)
    try:
        word2vec_model = api.load("word2vec-google-news-300")
    except ValueError as e:
        print("Model not found; downloading...")
        # Manually download the model if api.load fails. For example:
        # !wget -c "https://s3.amazonaws.com/dl4j-distribution/GoogleNews-vectors-negative300.bin.gz"
        # !gunzip GoogleNews-vectors-negative300.bin.gz
        # word2vec_model = gensim.models.KeyedVectors.load_word2vec_format('GoogleNews-vectors-negative300.bin', binary=True)


    # Access vector for a word
    if 'king' in word2vec_model.key_to_index: # Check if the word exists in the model's vocabulary
        vector = word2vec_model['king']
        print(vector.shape)  # Output: (300,)

    # Find similar words
        similar_words = word2vec_model.most_similar('king', topn=5)
        print(similar_words)
    else:
        print("'king' not in vocabulary.")
    ```

## 4. Sentiment Analysis

*   **Definition:** The process of determining the emotional tone or attitude expressed in a piece of text.
*   **Approaches:**
    *   **Lexicon-Based Approach:** Uses a sentiment lexicon (a list of words and their associated sentiment scores) to calculate the overall sentiment of a text.  VADER (Valence Aware Dictionary and sEntiment Reasoner) is a popular lexicon-based tool.
    *   **Machine Learning Approach:** Trains a classifier (e.g., Naive Bayes, SVM, Logistic Regression) on labeled data (text with sentiment labels).
    *   **Deep Learning Approach:** Uses deep neural networks (e.g., Recurrent Neural Networks, Transformers) to learn complex patterns in text and predict sentiment.
*   **Example (Python using VADER):**

    ```python
    import nltk
    nltk.download('vader_lexicon')
    from nltk.sentiment.vader import SentimentIntensityAnalyzer

    analyzer = SentimentIntensityAnalyzer()
    text = "This is an amazing product! I love it."
    scores = analyzer.polarity_scores(text)
    print(scores)
    # Output: {'neg': 0.0, 'neu': 0.437, 'pos': 0.563, 'compound': 0.8216}

    #Interpretation: The 'compound' score represents the overall sentiment (positive, negative, or neutral).  A compound score of 0.8216 indicates a strongly positive sentiment.
    ```

## 5. Regular Expressions (Regex)

*   **Definition:** A sequence of characters that define a search pattern. Used for pattern matching and text manipulation.
*   **Key Concepts:**
    *   **Characters:**  `a`, `b`, `1`, `2` (literal characters)
    *   **Metacharacters:** Special characters with specific meanings:
        *   `.` (dot): Matches any single character except a newline.
        *   `*` (asterisk): Matches zero or more occurrences of the preceding character.
        *   `+` (plus): Matches one or more occurrences of the preceding character.
        *   `?` (question mark): Matches zero or one occurrence of the preceding character.
        *   `[]` (square brackets):  Defines a character class (e.g., `[abc]` matches `a`, `b`, or `c`).
        *   `()` (parentheses):  Groups characters or expressions.
        *   `^` (caret): Matches the beginning of a string.  Inside `[]`, negates the character class.
        *   `$` (dollar sign): Matches the end of a string.
        *   `\` (backslash): Escapes special characters (e.g., `\.` matches a literal dot).
    *   **Quantifiers:** Control the number of repetitions of a pattern:
        *   `{n}`: Matches exactly n occurrences.
        *   `{n,}`: Matches n or more occurrences.
        *   `{n,m}`: Matches between n and m occurrences.
    *   **Special Sequences:**
        *   `\d`: Matches any digit (0-9).
        *   `\w`: Matches any word character (alphanumeric and underscore).
        *   `\s`: Matches any whitespace character (space, tab, newline).
*   **Python Example (using `re` module):**

    ```python
    import re

    text = "My phone number is 123-456-7890 and my email is test@example.com."

    # Find phone number
    phone_number = re.search(r'\d{3}-\d{3}-\d{4}', text)
    if phone_number:
        print("Phone Number:", phone_number.group()) # Output: Phone Number: 123-456-7890

    # Find email address
    email = re.search(r'\w+@\w+\.\w+', text) #Simplified regex for email
    if email:
        print("Email:", email.group()) # Output: Email: test@example.com

    # Replace all digits with 'X'
    modified_text = re.sub(r'\d', 'X', text)
    print(modified_text)
    # Output: My phone number is XXX-XXX-XXXX and my email is test@example.com.
    ```

## Important Points to Remember:

*   **Preprocessing is crucial:** The quality of text preprocessing directly impacts the performance of downstream analysis.
*   **Choose the right techniques:** Select appropriate preprocessing and representation techniques based on the specific task and data.
*   **Understand the limitations:** Be aware of the limitations of each technique and consider using combinations to improve performance.
*   **Experiment and evaluate:**  Try different combinations of techniques and evaluate their impact on your results.
*   **Regular expressions are powerful but complex:**  Learn the basics of regex and use online resources for more complex patterns.
*   **Be mindful of bias:**  Text data can contain biases that can affect the results of sentiment analysis and other tasks.

## Practice Questions/Exercises:

1.  **Text Preprocessing:** Given the sentence "The quick brown fox jumps over the lazy Dog!  It's running quickly.", perform the following steps:
    *   Tokenize the sentence.
    *   Convert the tokens to lowercase.
    *   Remove stop words.
    *   Stem the remaining words using the Porter Stemmer.

    **Answer:**

    ```python
    import nltk
    from nltk.tokenize import word_tokenize
    from nltk.corpus import stopwords
    from nltk.stem import PorterStemmer

    text = "The quick brown fox jumps over the lazy Dog! It's running quickly."
    tokens = word_tokenize(text)
    tokens = [token.lower() for token in tokens]
    stop_words = set(stopwords.words('english'))
    filtered_tokens = [token for token in tokens if token not in stop_words]
    stemmer = PorterStemmer()
    stemmed_tokens = [stemmer.stem(token) for token in filtered_tokens]
    print(stemmed_tokens)
    # Expected Output: ['quick', 'brown', 'fox', 'jump', 'lazi', 'dog', 'run', 'quickli', '.']
    ```

2.  **Text Representation:** Create a TF-IDF matrix for the following documents:
    *   "This is a document about dogs."
    *   "This is a second document about cats."
    *   "Dogs and cats are animals."

    **Answer:** You can use scikit-learn to generate the TF-IDF matrix.  The exact numerical values will vary slightly depending on the TF-IDF calculation method, but the relative weights of the words should be similar to what `TfidfVectorizer` provides.

    ```python
    from sklearn.feature_extraction.text import TfidfVectorizer

    documents = [
        "This is a document about dogs.",
        "This is a second document about cats.",
        "Dogs and cats are animals."
    ]

    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(documents)

    print(vectorizer.vocabulary_)  # Vocabulary
    print(tfidf_matrix.toarray())  # TF-IDF Matrix

    # Example Output (may vary slightly)
    # {'this': 7, 'is': 2, 'document': 1, 'about': 0, 'dogs': 4, 'second': 6, 'cats': 3, 'and': 5, 'are': 8, 'animals': 9}
    # [[0.408  0.512  0.408  0.     0.408  0.     0.     0.408  0.     0.   ]
    #  [0.     0.512  0.408  0.408  0.     0.     0.512  0.408  0.     0.   ]
    #  [0.     0.     0.     0.577  0.577  0.577  0.     0.     0.     0.   ]]
    ```

3.  **Sentiment Analysis:** Analyze the sentiment of the following sentences using VADER:
    *   "This movie was terrible!"
    *   "I absolutely loved this book."
    *   "The weather is okay today."

    **Answer:**

    ```python
    import nltk
    from nltk.sentiment.vader import SentimentIntensityAnalyzer

    sentences = [
        "This movie was terrible!",
        "I absolutely loved this book.",
        "The weather is okay today."
    ]

    analyzer = SentimentIntensityAnalyzer()
    for sentence in sentences:
        scores = analyzer.polarity_scores(sentence)
        print(f"Sentence: {sentence}")
        print(f"Scores: {scores}")
        print("---")

    # Expected Output (approximate):
    # Sentence: This movie was terrible!
    # Scores: {'neg': 0.549, 'neu': 0.451, 'pos': 0.0, 'compound': -0.5269}
    # ---
    # Sentence: I absolutely loved this book.
    # Scores: {'neg': 0.0, 'neu': 0.325, 'pos': 0.675, 'compound': 0.8439}
    # ---
    # Sentence: The weather is okay today.
    # Scores: {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}
    # ---
    ```

4.  **Regular Expressions:** Write a regular expression to extract all email addresses from the following text: "Contact us at support@example.com or sales@another-example.co.uk.  You can also reach John at john.doe123@domain.net."

    **Answer:**

    ```python
    import re

    text = "Contact us at support@example.com or sales@another-example.co.uk. You can also reach John at john.doe123@domain.net."
    emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', text)
    print(emails)
    # Expected Output: ['support@example.com', 'sales@another-example.co.uk', 'john.doe123@domain.net']
