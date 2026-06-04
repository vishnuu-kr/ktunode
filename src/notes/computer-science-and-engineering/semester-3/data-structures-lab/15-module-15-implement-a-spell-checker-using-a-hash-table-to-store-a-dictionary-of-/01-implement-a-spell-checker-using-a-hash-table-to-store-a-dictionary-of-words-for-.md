---
title: "Implement a spell checker using a hash table to store a dictionary of words for fast lookup."
subject: "DATA STRUCTURES LAB"
module: "Module 15: Implement a spell checker using a hash table to store a dictionary of words for fast lookup."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae89"
status: "completed"
scrapedAt: "2026-05-20T16:23:32.219Z"
---
# DATA STRUCTURES LAB - Module 15: Spell Checker with Hash Table

## Topic: Implement a spell checker using a hash table to store a dictionary of words for fast lookup.

### Introduction

This module focuses on implementing a spell checker using a hash table data structure. Hash tables are highly efficient for searching, insertion, and deletion operations, making them ideal for storing and quickly retrieving dictionary words for spell checking. This module will explore the concepts, implementation, and testing aspects of such a system.

### Learning Outcomes

Upon completion of this module, you will be able to:

*   Understand the principles of hash tables and their suitability for spell checking.
*   Design and implement a hash function for words.
*   Implement collision resolution techniques (e.g., separate chaining, open addressing).
*   Build a dictionary using a hash table.
*   Implement a spell-checking algorithm using the built dictionary.
*   Evaluate the performance of the spell checker.
*   Understand and implement techniques to suggest corrections for misspelled words.

### 1. Key Concepts and Definitions

*   **Spell Checker:** A computer program that identifies misspelled words in a document or text and suggests possible corrections.

*   **Dictionary:** A collection of valid words used as a reference for spell checking.

*   **Hash Table:** A data structure that implements an associative array abstract data type, which can map keys to values. It uses a *hash function* to compute an index into an array of buckets or slots, from which the desired value can be found.

*   **Hash Function:** A function that converts a given key (in this case, a word) into an integer index that can be used to access an element in a hash table.  A good hash function aims to distribute keys evenly across the table to minimize collisions.

*   **Collision:**  Occurs when two different keys are mapped to the same index in the hash table by the hash function.

*   **Collision Resolution Techniques:** Methods used to handle collisions in a hash table. Common techniques include:

    *   **Separate Chaining (Open Hashing):** Each index in the hash table points to a linked list (or other data structure) that stores all the keys that hash to that index.
    *   **Open Addressing (Closed Hashing):** When a collision occurs, the algorithm probes (searches) for an empty slot in the hash table and places the key there.  Common probing techniques include linear probing, quadratic probing, and double hashing.

*   **Load Factor:** A measure of how full the hash table is. Defined as (number of elements) / (size of the hash table).  A high load factor increases the likelihood of collisions and can degrade performance.

*   **Suggest Corrections:**  The process of proposing possible correct spellings for misspelled words.  This typically involves techniques like finding words with small edit distances (Levenshtein distance) or using phonetic algorithms.

*   **Edit Distance (Levenshtein Distance):** The minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into the other.

### 2. Implementing a Hash Function

A good hash function should be:

*   **Efficient:**  Quick to compute.
*   **Deterministic:** Always produces the same hash value for the same key.
*   **Uniform:** Distributes keys evenly across the hash table to minimize collisions.

**Examples of Hash Functions for Strings (Words):**

*   **Simple Summation:** Sum the ASCII values of the characters in the word.

    ```python
    def hash_function_sum(word, table_size):
        hash_value = 0
        for char in word:
            hash_value += ord(char)
        return hash_value % table_size
    ```

    *   **Problem:**  Anagrams (e.g., "listen" and "silent") will have the same hash value, leading to many collisions.

*   **Polynomial Rolling Hash:**  A more sophisticated approach that treats the word as a base-N number (where N is the size of the alphabet) and computes a polynomial hash value.

    ```python
    def hash_function_polynomial(word, table_size):
        hash_value = 0
        prime = 31  # A common prime number to use
        for char in word:
            hash_value = (hash_value * prime + ord(char)) % table_size
        return hash_value
    ```

    *   **Benefit:** Reduces the likelihood of collisions compared to the simple summation method.

*   **Java's String.hashCode() (Conceptualization):**  Very similar to Polynomial Rolling Hash using a multiplier of 31.

**Choosing a Hash Function:**

The choice of hash function depends on the specific application and the characteristics of the data. For a spell checker, the Polynomial Rolling Hash is a good starting point.  Experimentation and analysis are often required to find the best hash function for a particular dataset.

### 3. Collision Resolution Techniques

#### 3.1 Separate Chaining (Open Hashing)

*   Each slot in the hash table points to a linked list (or another data structure).
*   When a collision occurs, the new key is added to the linked list at the corresponding index.

**Implementation (Python Example):**

```python
class HashTable:
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]  # List of lists (linked lists)

    def hash_function(self, key):
        # Example polynomial hash function
        hash_value = 0
        prime = 31
        for char in key:
            hash_value = (hash_value * prime + ord(char)) % self.size
        return hash_value

    def insert(self, key):
        index = self.hash_function(key)
        self.table[index].append(key)

    def search(self, key):
        index = self.hash_function(key)
        return key in self.table[index]

    def delete(self, key):
        index = self.hash_function(key)
        try:
            self.table[index].remove(key)
        except ValueError:
            # Key not found
            pass
```

**Advantages:**

*   Simple to implement.
*   Collisions are handled gracefully.
*   Deletion is easy.

**Disadvantages:**

*   Requires extra memory for the linked lists.
*   Search time can degrade to O(n) in the worst case (if all keys hash to the same index).

#### 3.2 Open Addressing (Closed Hashing)

*   All elements are stored directly in the hash table array.
*   When a collision occurs, the algorithm probes for an empty slot.

**Common Probing Techniques:**

*   **Linear Probing:**  If slot *i* is occupied, try *i+1*, *i+2*, *i+3*, etc., modulo the table size.

    ```python
    def insert_linear_probing(self, key):
        index = self.hash_function(key)
        original_index = index
        for i in range(self.size): #Prevent infinite looping if table full
            if self.table[index] is None:
                self.table[index] = key
                return
            index = (original_index + i + 1) % self.size  # Linear probing
        raise Exception("Hash table is full") # Or handle the overflow appropriately

    def search_linear_probing(self, key):
        index = self.hash_function(key)
        original_index = index
        for i in range(self.size):
            if self.table[index] == key:
                return True
            if self.table[index] is None: # Stop searching once we find empty slot
                return False
            index = (original_index + i + 1) % self.size
        return False # Full table with no value

    def delete_linear_probing(self, key): #Deletion in open addressing needs careful consideration
        index = self.hash_function(key)
        original_index = index

        for i in range(self.size):
            if self.table[index] == key:
                self.table[index] = None # Using None as a tombstone - see note below
                return
            if self.table[index] is None:
                return
            index = (original_index + i + 1) % self.size
    ```

    *   **Problem:** Can lead to *primary clustering* (long runs of occupied slots), which degrades performance.

*   **Quadratic Probing:**  If slot *i* is occupied, try *i + 1<sup>2</sup>*, *i + 2<sup>2</sup>*, *i + 3<sup>2</sup>*, etc., modulo the table size.

    ```python
    def insert_quadratic_probing(self, key):
        index = self.hash_function(key)
        original_index = index
        for i in range(self.size):
            new_index = (original_index + i**2) % self.size
            if self.table[new_index] is None:
                self.table[new_index] = key
                return
            index = new_index
        raise Exception("Hash table is full")

    def search_quadratic_probing(self, key):
        index = self.hash_function(key)
        original_index = index
        for i in range(self.size):
            new_index = (original_index + i**2) % self.size
            if self.table[new_index] == key:
                return True
            if self.table[new_index] is None:
                return False
        return False

    def delete_quadratic_probing(self, key):
        index = self.hash_function(key)
        original_index = index
        for i in range(self.size):
            new_index = (original_index + i**2) % self.size
            if self.table[new_index] == key:
                self.table[new_index] = None # Tombstone - See note below
                return
            if self.table[new_index] is None:
                return
        return
    ```
    *   **Benefit:** Reduces primary clustering compared to linear probing.
    *   **Problem:** Can lead to *secondary clustering* (keys that hash to the same initial location will follow the same probe sequence). Also requires table size to be prime to ensure full traversal.

*   **Double Hashing:** Uses a second hash function to determine the probe step. If slot *i* is occupied, try *i + h2(key)*, *i + 2*h2(key)*, *i + 3*h2(key)*, etc., modulo the table size, where *h2(key)* is the second hash function.

    ```python
    def hash_function2(self, key):
        return 7 - (ord(key[0]) % 7) # Example second hash function; ensure it returns a value != 0

    def insert_double_hashing(self, key):
        index = self.hash_function(key)
        h2 = self.hash_function2(key)
        original_index = index
        for i in range(self.size):
            new_index = (original_index + i * h2) % self.size
            if self.table[new_index] is None:
                self.table[new_index] = key
                return
            index = new_index
        raise Exception("Hash table is full")

    def search_double_hashing(self, key):
        index = self.hash_function(key)
        h2 = self.hash_function2(key)
        original_index = index
        for i in range(self.size):
            new_index = (original_index + i * h2) % self.size
            if self.table[new_index] == key:
                return True
            if self.table[new_index] is None:
                return False
            index = new_index
        return False

    def delete_double_hashing(self, key):
        index = self.hash_function(key)
        h2 = self.hash_function2(key)
        original_index = index
        for i in range(self.size):
            new_index = (original_index + i * h2) % self.size
            if self.table[new_index] == key:
                self.table[new_index] = None # Tombstone
                return
            if self.table[new_index] is None:
                return
            index = new_index
        return
    ```

    *   **Benefit:**  Generally provides the best distribution and avoids clustering issues.
    *   **Requirement:** The second hash function must never return 0 and should be relatively prime to the table size.

**Advantages:**

*   No extra memory overhead for linked lists.

**Disadvantages:**

*   More complex to implement than separate chaining.
*   Deletion is more complicated (requires marking deleted slots as "tombstones" to maintain search correctness, or rehashing).  Simply setting the slot to `None` after deleting can cause searches to fail.
*   Performance degrades rapidly as the table becomes full.

**Important Note about Deletion in Open Addressing:**  When using open addressing, deleting an element by simply setting its slot to `None` can break search chains. Imagine you insert elements A and B, which collide, resulting in B being placed in the next available slot. If you then delete A by setting its slot to `None`, a subsequent search for B will stop at the empty slot (formerly A) and incorrectly conclude that B is not in the table. To avoid this, you can use a "tombstone" value (a special value distinct from any valid key) to mark a deleted slot.  Search algorithms will then continue probing past tombstones. Alternatively, more complex rehashing techniques can be used.

### 4. Building a Dictionary

1.  **Read the dictionary file:** Load a list of words from a text file into memory.
2.  **Create a hash table:**  Choose a suitable size for the hash table.  A size that is a prime number is often preferred, especially with open addressing collision resolution.
3.  **Insert words into the hash table:**  For each word in the dictionary file:
    *   Calculate the hash value using the chosen hash function.
    *   Insert the word into the hash table, handling collisions using the chosen collision resolution technique.

```python
def build_dictionary(dictionary_file, table_size):
    """Builds a dictionary (hash table) from a file."""
    hash_table = HashTable(table_size)  # Using separate chaining
    try:
        with open(dictionary_file, 'r') as f:
            for line in f:
                word = line.strip().lower()  # Remove whitespace and convert to lowercase
                hash_table.insert(word)
    except FileNotFoundError:
        print(f"Error: Dictionary file '{dictionary_file}' not found.")
        return None
    return hash_table
```

### 5. Implementing a Spell-Checking Algorithm

1.  **Input:** The text to be spell-checked.
2.  **Tokenization:** Split the text into individual words (tokens).  Handle punctuation and whitespace.  Consider lowercasing the words for case-insensitive spell checking.
3.  **Lookup:** For each word in the text:
    *   Search for the word in the hash table dictionary.
    *   If the word is found, it is considered correctly spelled.
    *   If the word is not found, it is considered misspelled.
4.  **Report Misspelled Words:** Output the list of misspelled words.

```python
def spell_check(text, dictionary):
    """Spell-checks a text against a dictionary."""
    words = text.lower().split()  # Tokenize and lowercase
    misspelled_words = []

    for word in words:
        # Remove punctuation (simplified example)
        clean_word = ''.join(char for char in word if char.isalnum())
        if clean_word and not dictionary.search(clean_word):
            misspelled_words.append(clean_word)

    return misspelled_words
```

### 6. Evaluating Performance

*   **Time Complexity:** The ideal time complexity for searching in a hash table is O(1) on average, but it can degrade to O(n) in the worst case (when many collisions occur).  Separate chaining performance depends on the average length of the chains.  Open addressing performance degrades rapidly as the table fills.
*   **Load Factor:** Monitor the load factor of the hash table.  If the load factor becomes too high, consider resizing (rehashing) the table to maintain performance. A common threshold is a load factor of 0.75.
*   **Experimental Analysis:** Measure the time taken to load the dictionary, spell-check a large document, and perform individual word lookups.  Compare the performance of different hash functions and collision resolution techniques.

### 7. Suggesting Corrections

*   **Edit Distance (Levenshtein Distance):** Calculate the edit distance between the misspelled word and all words in the dictionary. Suggest words with the smallest edit distance.

    ```python
    def levenshtein_distance(s1, s2):
        """Calculates the Levenshtein distance between two strings."""
        if len(s1) < len(s2):
            return levenshtein_distance(s2, s1)

        if len(s2) == 0:
            return len(s1)

        previous_row = range(len(s2) + 1)
        for i, c1 in enumerate(s1):
            current_row = [i + 1]
            for j, c2 in enumerate(s2):
                insertions = previous_row[j + 1] + 1
                deletions = current_row[j] + 1
                substitutions = previous_row[j] + (c1 != c2)
                current_row.append(min(insertions, deletions, substitutions))
            previous_row = current_row

        return previous_row[-1]

    def suggest_corrections(word, dictionary, max_distance=2):
        """Suggests corrections for a word based on edit distance."""
        suggestions = []
        for dict_word in dictionary.table: #This is inefficient: iterates over hash table array
            if(type(dict_word)==list): #Iterate over chain, in separate chaining
                for w in dict_word:
                    distance = levenshtein_distance(word, w)
                    if distance <= max_distance:
                        suggestions.append((w, distance))
        suggestions.sort(key=lambda x: x[1])  # Sort by distance
        return [w for w, d in suggestions] #Return just the words
    ```

    **Optimization:** The `suggest_corrections` function as written iterates over the *entire* hash table, including empty slots. This is extremely inefficient.  For separate chaining, it should iterate only over the lists of words stored at each index.  For open addressing, it should only consider non-empty slots.

*   **Phonetic Algorithms (Soundex, Metaphone):**  Convert the misspelled word and the dictionary words to their phonetic representations. Suggest words with similar phonetic representations.

    ```python
    #Install the jellyfish library. pip install jellyfish
    import jellyfish

    def suggest_corrections_phonetic(word, dictionary):
      """Suggests corrections for a word based on phonetic similarity (Soundex)."""
      suggestions = []
      word_soundex = jellyfish.soundex(word)

      for dict_word in dictionary.table:
          if(type(dict_word)==list): #Iterate over chain
              for w in dict_word:
                  dict_word_soundex = jellyfish.soundex(w)
                  if dict_word_soundex == word_soundex:
                      suggestions.append(w)
      return suggestions
    ```

    *   **Benefit:** Can correct words that are spelled incorrectly but sound similar to the correct spelling.

*   **N-gram Analysis:**  Compare the frequency of n-grams (sequences of n characters) in the misspelled word with the frequency of n-grams in dictionary words.

*   **Combination:** You can combine these techniques to improve the accuracy of correction suggestions.

### Practice Questions/Exercises

1.  **Implement a hash table using separate chaining in your preferred programming language.**  Include insert, search, and delete operations.
    *   **Answer:** See example code in Section 3.1 above.

2.  **Implement a hash table using open addressing with linear probing.** Include insert, search, and delete operations (using tombstones or rehashing).
    *   **Answer:** See example code in Section 3.2 above.

3.  **Compare the performance of different hash functions (e.g., simple summation, polynomial rolling hash) by measuring the number of collisions that occur when inserting a large set of words into a hash table.**
    *   **Answer:**  Write a program that inserts a large list of words (e.g., from a dictionary file) into a hash table using different hash functions.  Keep track of the number of collisions that occur for each hash function.  The hash function with the fewest collisions is likely the best choice.

4.  **Implement a spell checker that uses a hash table to store the dictionary.** Test it with a sample text and evaluate its accuracy.
    *   **Answer:**  Combine the code examples from Sections 4 and 5.  You will need a dictionary file (e.g., a list of words).  Load the dictionary into a hash table, then use the spell-check function to identify misspelled words in a sample text.

5.  **Implement a function that suggests corrections for misspelled words using edit distance (Levenshtein distance).**
    *   **Answer:**  See example code in Section 7 above.  The crucial part is iterating efficiently over the dictionary only considering elements actually present in the hash table.

6.  **Explain the importance of choosing a good hash function and collision resolution technique for the performance of a spell checker.**
    *   **Answer:** A good hash function distributes keys evenly across the hash table, minimizing collisions. A poor hash function leads to many collisions, which degrades performance, causing search times to approach O(n) instead of O(1). The choice of collision resolution technique affects how collisions are handled. Separate chaining is simple but requires extra memory and can lead to longer search times if the chains are long. Open addressing avoids extra memory but can suffer from clustering if linear or quadratic probing are used. Double hashing is generally the best option for open addressing.

### Important Points to Remember

*   The choice of hash function and collision resolution technique significantly impacts the performance of the spell checker.
*   A prime number table size is generally recommended, especially for open addressing.
*   Monitor the load factor of the hash table and resize it if necessary to maintain performance.
*   Implement deletion carefully in open addressing to avoid breaking search chains. Consider using tombstones or rehashing.
*   Suggesting corrections is a complex task that may involve edit distance, phonetic algorithms, n-gram analysis, and other techniques.
*   Optimize the performance of suggestion algorithms by iterating over the dictionary elements only, avoiding unnecessary iteration through empty hash table slots.
