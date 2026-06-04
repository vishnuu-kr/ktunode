---
title: "Web Usage Mining- Preprocessing"
subject: "DATA MINING"
module: "Module 4: Association Rule Mining "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8bd"
status: "completed"
scrapedAt: "2026-05-20T16:45:20.238Z"
---
## Data Mining: Module 4 - Association Rule Mining - Web Usage Mining: Preprocessing

These notes cover the preprocessing steps involved in Web Usage Mining, a crucial part of Association Rule Mining when applied to web data.

**Learning Outcomes:**

*   Understand the concept of Web Usage Mining.
*   Identify the different data sources used in Web Usage Mining.
*   Explain the importance of preprocessing in Web Usage Mining.
*   Describe the various preprocessing techniques applied to web log data.
*   Apply these techniques to prepare data for further analysis.

**1. Introduction to Web Usage Mining (WUM)**

*   **Definition:** Web Usage Mining (WUM) is the application of data mining techniques to discover and extract interesting patterns from web log data. This helps understand and better serve the needs of web-based applications.

*   **Goal:** To understand user behavior patterns, improve website design, personalize user experience, and enhance web service functionalities.

*   **Applications:**
    *   Personalized recommendations (e.g., suggesting products based on browsing history)
    *   Targeted advertising
    *   Website improvement (e.g., identifying frequently accessed pages and optimizing navigation)
    *   Business intelligence (e.g., identifying popular products or services)
    *   Predicting user behavior (e.g., predicting which users are likely to abandon their shopping carts)

**2. Data Sources for Web Usage Mining**

*   **Web Server Logs:**
    *   These are the primary source of data for WUM.
    *   Stored automatically by the web server (e.g., Apache, Nginx, IIS).
    *   Each log entry typically contains:
        *   Client IP address
        *   Date and time of the request
        *   Requested URL (resource)
        *   HTTP status code
        *   Bytes transferred
        *   Referrer URL (URL of the page that linked to the requested page)
        *   User agent (browser and operating system information)

*   **Browser Data (Cookies):**
    *   Cookies are small text files stored on the user's computer by the website.
    *   Used to track user sessions, preferences, and shopping cart items.
    *   Can provide more detailed information about user behavior than server logs alone.
    *   Privacy concerns are associated with cookie usage.

*   **Application Data:**
    *   Data collected by web applications, such as user registration information, purchase history, search queries, and ratings.
    *   Provides a rich source of information about user interests and preferences.
    *   Requires careful handling to protect user privacy.

*   **Database Data:**
    *   Data stored in databases connected to the web application.
    *   Can include product information, user profiles, and transaction details.
    *   Can be used to enrich web log data and provide a more complete picture of user behavior.

*   **Metadata:**
    *   Information about the structure and content of the website.
    *   Examples: Website hierarchy, page categories, keywords associated with each page.
    *   Used to improve the accuracy and relevance of web usage mining results.

**3. The Importance of Preprocessing in Web Usage Mining**

*   **Data Quality:** Web log data is often noisy, incomplete, and inconsistent. Preprocessing helps improve the quality of the data.

*   **Data Transformation:** Raw log data is not directly suitable for data mining algorithms. Preprocessing transforms the data into a usable format.

*   **Pattern Accuracy:** Preprocessing improves the accuracy of the patterns discovered by data mining algorithms.

*   **Scalability:** Preprocessing can reduce the size of the dataset, improving the scalability of data mining algorithms.

*   **Key Reasons for Preprocessing:**
    *   **Reduces noise:** Weblogs contain entries from search engine crawlers, bots, and system administrators which need to be filtered.
    *   **Consolidates data:** Log files from different web servers may need to be merged.
    *   **Formats data:**  Logs need to be transformed into a format suitable for data mining algorithms.
    *   **Resolves missing values:**  Incomplete data is common in weblogs and needs to be addressed.
    *   **Ensures Privacy:** Personally identifiable information (PII) needs to be anonymized.

**4. Preprocessing Techniques in Web Usage Mining**

Preprocessing is a crucial step in WUM, and it typically involves the following steps:

*   **4.1 Data Cleaning:**
    *   **Purpose:**  Removes irrelevant or erroneous data entries from the web log.
    *   **Techniques:**
        *   **Removing irrelevant entries:**
            *   Entries with HTTP status codes other than 200 (OK) may indicate errors or incomplete requests.
            *   Entries for image files, CSS files, and JavaScript files may not be relevant for analyzing user navigation patterns.
            *   Entries from search engine bots and web crawlers should be removed.  Use bot identification databases or heuristics (e.g., unusually high request rates).
        *   **Handling missing values:**
            *   Missing values can occur in various fields, such as referrer URL or user agent.
            *   Missing values can be ignored or filled with default values (e.g., "unknown").
        *   **Error correction:**
            *   Correcting invalid or inconsistent data values.
            *   Example: Correcting incorrect dates or IP addresses.

*   **4.2 User Identification:**
    *   **Purpose:**  Identifying individual users based on web log data.  This is critical for understanding browsing behavior.
    *   **Challenges:**  Users can visit the website multiple times, and the same user may use different IP addresses or browsers.
    *   **Techniques:**
        *   **IP address and user agent:**
            *   Combining IP address and user agent information to identify users.
            *   Assumes that the same user will typically use the same browser and IP address.
        *   **Cookies:**
            *   Using cookies to track user sessions.
            *   More accurate than IP address and user agent, but relies on the user accepting cookies.
        *   **Registration information:**
            *   Using user registration information to identify users.
            *   Most accurate method, but only applies to users who have registered on the website.
        *   **Sessionization:**
            *   Splitting the log data into sessions, where each session represents a sequence of requests from the same user within a specific time period.

*   **4.3 Session Identification:**
    *   **Purpose:**  Dividing the web log data into sessions, where each session represents a sequence of requests from a single user during a single visit to the website.
    *   **Importance:**  Provides a context for analyzing user behavior.
    *   **Techniques:**
        *   **Time-based approach:**
            *   Assuming that all requests within a certain time period (e.g., 30 minutes) belong to the same session.
            *   Simple and efficient, but can be inaccurate if users are interrupted or take long breaks.
        *   **Navigation-based approach:**
            *   Analyzing the sequence of requests to identify session boundaries.
            *   Assumes that users will typically navigate the website in a logical and coherent manner.
        *   **Referrer-based approach:**
            *   Using the referrer URL to identify session boundaries.
            *   Assumes that users will typically arrive at the website from the same referring page.
        *   **Combination approaches:** Combining different techniques to improve accuracy.

*   **4.4 Path Completion:**
    *   **Purpose:**  Reconstructing the complete sequence of pages visited by a user during a session.
    *   **Motivation:** Some user actions may not be logged (e.g., cached pages, direct access).
    *   **Techniques:**
        *   **Using site topology:**
            *   Analyzing the structure of the website to infer missing page visits.
            *   Assumes that users will typically follow the website's navigation structure.
        *   **Using referrer information:**
            *   Using the referrer URL to identify the previous page visited by the user.
        *   **Using user navigation patterns:**
            *   Analyzing the user's past navigation patterns to predict missing page visits.

*   **4.5 Data Transformation & Formatting:**
    *   **Purpose:**  Converting the preprocessed data into a format suitable for data mining algorithms.
    *   **Techniques:**
        *   **Feature extraction:**
            *   Extracting relevant features from the web log data.
            *   Examples: Number of pages visited, time spent on each page, sequence of pages visited, product categories viewed.
        *   **Data aggregation:**
            *   Aggregating data at different levels of granularity.
            *   Examples: Aggregating data by user, session, or page.
        *   **Data discretization:**
            *   Converting continuous data into discrete categories.
            *   Example: Discretizing time spent on a page into "short," "medium," and "long" categories.
        *   **Data normalization:**
            *   Scaling data to a specific range (e.g., 0 to 1).
            *   Helps prevent features with large values from dominating the data mining process.
        *   **Encoding:**
            *   Converting categorical data into numerical format (e.g., one-hot encoding).
        *   **Transaction Data Preparation:**  Converting session data into a transaction format, where each session represents a transaction, and the pages visited represent items in the transaction. This format is suitable for Association Rule Mining algorithms.

**5. Example: Preprocessing Web Log Data**

Let's consider a sample web log entry:

`192.168.1.10 - - [01/Jan/2023:10:00:00 +0000] "GET /products/shoes HTTP/1.1" 200 1000 "http://www.example.com/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"`

Here's how we might preprocess this entry:

1.  **Data Cleaning:** Check the status code (200 is OK). Remove entries related to images or CSS if not needed for analysis.

2.  **User Identification:**  Identify the user based on IP address (192.168.1.10) and user agent.  If cookies are enabled, use the cookie ID for better accuracy.

3.  **Session Identification:**  Determine if this request belongs to an existing session for the identified user or if it's the start of a new session (based on inactivity timeout).

4.  **Path Completion:**  Check if this request completes a navigation path (e.g., if the user came from the homepage and then went to /products/shoes, we now have a partial path: homepage -> /products/shoes).

5.  **Data Transformation:**  Extract the URL (/products/shoes) and potentially categorize it (e.g., product category: shoes). Create a transaction record for association rule mining. For example, if this user also visited /products/shirts in the same session, the transaction would be:  `{shoes, shirts}`.

**6. Important Points to Remember:**

*   Preprocessing is crucial for the success of web usage mining.
*   The choice of preprocessing techniques depends on the specific application and the characteristics of the web log data.
*   Privacy concerns must be addressed when preprocessing web log data.
*   Iterative process: You might need to revisit and refine preprocessing steps as you gain a better understanding of your data and the patterns you're looking for.

**7. Practice Questions/Exercises:**

**Q1:**  Why is preprocessing important in Web Usage Mining?

**A1:** Preprocessing improves data quality by removing noise, handling missing values, and correcting errors. It transforms the data into a suitable format for data mining algorithms, leading to more accurate and scalable results.

**Q2:**  What are the main data sources for Web Usage Mining?

**A2:** The main data sources are Web Server Logs, Browser Data (Cookies), Application Data, Database Data, and Metadata.

**Q3:**  Describe the process of User Identification in Web Usage Mining. What are some of the challenges involved?

**A3:** User identification involves identifying individual users based on web log data. Common techniques include using IP address and user agent, cookies, and registration information. Challenges include users visiting the website multiple times, the same user using different IP addresses or browsers, and privacy concerns related to cookie usage.

**Q4:**  Explain the difference between Data Cleaning and Data Transformation in the context of web usage mining preprocessing.

**A4:** Data cleaning focuses on removing irrelevant or erroneous data (e.g., removing bot entries or correcting invalid dates). Data transformation, on the other hand, focuses on converting the cleaned data into a suitable format for analysis, which may involve feature extraction, aggregation, and discretization.

**Q5:** You have a weblog file with the following entries. Identify steps you would take to preprocess the data for finding frequent itemsets (i.e. visited pages) using association rule mining.

```
192.168.1.1 - - [01/Jan/2024:00:00:00 +0000] "GET /home.html HTTP/1.1" 200 1000 "-" "Mozilla/5.0"
192.168.1.1 - - [01/Jan/2024:00:01:00 +0000] "GET /products.html HTTP/1.1" 200 1200 "http://example.com/home.html" "Mozilla/5.0"
66.249.66.1 - - [01/Jan/2024:00:02:00 +0000] "GET /about.html HTTP/1.1" 200 800 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
192.168.1.1 - - [01/Jan/2024:00:03:00 +0000] "GET /contact.html HTTP/1.1" 200 900 "http://example.com/products.html" "Mozilla/5.0"
192.168.1.2 - - [01/Jan/2024:00:04:00 +0000] "GET /home.html HTTP/1.1" 200 1000 "-" "Mozilla/5.0"
192.168.1.2 - - [01/Jan/2024:00:05:00 +0000] "GET /products.html HTTP/1.1" 200 1200 "http://example.com/home.html" "Mozilla/5.0"
```

**A5:**

1. **Data Cleaning:**
    *   Remove the entry from Googlebot (user agent contains "Googlebot").
2.  **User Identification:**
    *   Identify users based on IP address. Here we have two users: 192.168.1.1 and 192.168.1.2.
3. **Session Identification:**
    * Assume a session timeout of 5 minutes.

    * User 192.168.1.1 has one session: /home.html, /products.html, /contact.html
    * User 192.168.1.2 has one session: /home.html, /products.html

4.  **Data Transformation and Transaction Formation:**
    *   Convert the page names into item names.

    *   Transform the session data into transaction format:
    *   Transaction 1:  {home.html, products.html, contact.html}  (User 192.168.1.1)
    *   Transaction 2: {home.html, products.html} (User 192.168.1.2)
    *   These transactions can then be used as input to an association rule mining algorithm (e.g., Apriori).
