---
title: "HTTPlib & URLLib"
subject: "INTERNET OF THINGS"
module: "Module 3: Developing IoT "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd18"
status: "completed"
scrapedAt: "2026-05-20T17:24:58.171Z"
---
# INTERNET OF THINGS - Module 3: Developing IoT

## Topic: HTTPlib & URLLib

### 1. Introduction to HTTPLib and URLLib

**What are they?**

*   **HTTPLib:** A **low-level, client-side HTTP library** in Python. It provides classes for making HTTP requests and handling HTTP responses. It's the foundation upon which higher-level libraries like `urllib.request` are built.
*   **URLLib:** A **collection of modules** in Python for working with URLs. It provides tools for opening and reading URLs, parsing URLs, and making HTTP requests. `urllib` is a more comprehensive and user-friendly way to interact with web resources compared to raw `httplib`.

**Why are they important in IoT?**

In IoT, devices often need to:

*   **Communicate with cloud platforms:** Sending sensor data, receiving commands, or updating firmware.
*   **Access web APIs:** Interacting with third-party services for data or functionality.
*   **Fetch configuration files:** Retrieving settings for operation.

`httplib` and `urllib` are fundamental tools for enabling these network communications from IoT devices.

---

### 2. Understanding URLLib

`urllib` is a package that bundles several modules for URL manipulation. The most commonly used are:

#### 2.1 `urllib.request`

This module is used to open URLs and read their contents.

**Key Concepts:**

*   **Opening a URL:** The `urlopen()` function is used to open a URL. It returns a file-like object that can be read to get the response from the server.
*   **HTTP Requests:** Supports various HTTP methods (GET, POST, PUT, DELETE, etc.).
*   **Request Objects:** Allows for more control over requests, including headers, data, and authentication.
*   **Response Objects:** Provides access to response data, status codes, and headers.

**Commonly Used Functions/Classes:**

*   **`urllib.request.urlopen(url, data=None, timeout=socket._GLOBAL_DEFAULT_TIMEOUT, *, cafile=None, capath=None, cadefault=False, context=None)`:**
    *   Opens a URL and returns a file-like object.
    *   `url`: The URL to open.
    *   `data`: Data to send in the request body (typically for POST requests).
    *   `timeout`: Timeout in seconds for the request.
*   **`urllib.request.Request(url, data=None, headers={}, origin_req_host=None, unverifiable=False, method=None)`:**
    *   A class to construct a request.
    *   Useful for specifying headers, HTTP methods, etc.
*   **`urllib.request.build_opener(*handlers)`:**
    *   Builds an opener object with specified handlers. Handlers can customize how URLs are opened (e.g., adding authentication, redirect handling).
*   **`urllib.request.install_opener(opener)`:**
    *   Installs an opener object as the default opener for `urlopen()`.

**Examples:**

**a) Basic GET Request:**

```python
import urllib.request

try:
    url = "https://jsonplaceholder.typicode.com/todos/1"
    with urllib.request.urlopen(url) as response:
        html = response.read()
        print("Status:", response.getcode())
        print("Headers:", response.info())
        print("Data:", html.decode('utf-8')) # Decode bytes to string
except urllib.error.URLError as e:
    print(f"Error fetching URL: {e.reason}")
```

**b) POST Request with Data:**

```python
import urllib.request
import urllib.parse
import json

url = "https://jsonplaceholder.typicode.com/posts"
data = {
    "title": "foo",
    "body": "bar",
    "userId": 1
}

# Encode the data for the POST request
post_data = urllib.parse.urlencode(data).encode('ascii') # Must be bytes

try:
    req = urllib.request.Request(url, data=post_data, method='POST')
    req.add_header('Content-Type', 'application/x-www-form-urlencoded') # Or 'application/json' if sending JSON

    with urllib.request.urlopen(req) as response:
        response_data = response.read()
        print("Status:", response.getcode())
        print("Response:", json.loads(response_data.decode('utf-8'))) # Assuming JSON response
except urllib.error.URLError as e:
    print(f"Error sending POST request: {e.reason}")
```

**c) Using `Request` object for headers:**

```python
import urllib.request

url = "https://httpbin.org/headers"
req = urllib.request.Request(url)
req.add_header("User-Agent", "MyIoTDevice/1.0")
req.add_header("X-Custom-Header", "IoTData")

try:
    with urllib.request.urlopen(req) as response:
        print("Status:", response.getcode())
        print("Response Headers:", response.read().decode('utf-8'))
except urllib.error.URLError as e:
    print(f"Error: {e.reason}")
```

#### 2.2 `urllib.parse`

This module is used to parse URLs into their components and to manipulate URL strings.

**Key Concepts:**

*   **Parsing URLs:** Breaking down a URL string into its constituent parts (scheme, netloc, path, params, query, fragment).
*   **Building URLs:** Constructing URL strings from components.
*   **Encoding/Decoding:** Properly formatting data for URLs (e.g., query parameters).

**Commonly Used Functions:**

*   **`urllib.parse.urlparse(urlstring, scheme='', allow_fragments=True)`:**
    *   Parses a URL string into a `ParseResult` object.
*   **`urllib.parse.urlunparse(parts)`:**
    *   Reconstructs a URL string from a sequence of parts.
*   **`urllib.parse.urlencode(query, doseq=False, safe='', encoding=None, errors=None, quote_via=quote_plus)`:**
    *   Encodes a dictionary or sequence of two-element tuples into a URL-encoded string.
*   **`urllib.parse.quote(string, safe='/')`:**
    *   Replaces special characters in `string` with `%xx` escapes.
*   **`urllib.parse.quote_plus(string, safe='', encoding=None, errors=None)`:**
    *   Similar to `quote`, but also replaces spaces with `+` signs.

**Examples:**

**a) Parsing a URL:**

```python
from urllib.parse import urlparse

url_string = "https://www.example.com/path/to/resource?param1=value1&param2=value2#section"
parsed_url = urlparse(url_string)

print("Scheme:", parsed_url.scheme)
print("Netloc:", parsed_url.netloc)
print("Path:", parsed_url.path)
print("Params:", parsed_url.params)
print("Query:", parsed_url.query)
print("Fragment:", parsed_url.fragment)
```

**b) Encoding data for query parameters:**

```python
from urllib.parse import urlencode

query_params = {
    "sensor_id": "temp_001",
    "value": 25.5,
    "location": "room 201"
}

encoded_params = urlencode(query_params)
print("Encoded Query Parameters:", encoded_params)

# Constructing a full URL
base_url = "http://iot.example.com/data"
full_url = f"{base_url}?{encoded_params}"
print("Full URL:", full_url)
```

#### 2.3 `urllib.error`

This module defines exceptions raised by `urllib.request`.

**Key Concepts:**

*   **Error Handling:** Capturing and handling network-related errors gracefully.

**Commonly Raised Exceptions:**

*   **`urllib.error.URLError`:** Base class for errors raised by `urllib.request`.
    *   `reason`: The exception raised by the underlying module.
*   **`urllib.error.HTTPError`:** A subclass of `URLError`, raised for HTTP error status codes (e.g., 404, 500).
    *   `code`: The HTTP status code.
    *   `reason`: The reason phrase.
    *   `headers`: The response headers.

**Example:**

```python
import urllib.request
import urllib.error

url_404 = "https://httpbin.org/status/404"
url_valid = "https://httpbin.org/get"

try:
    with urllib.request.urlopen(url_404) as response:
        print("Status:", response.getcode())
except urllib.error.HTTPError as e:
    print(f"HTTP Error: {e.code} - {e.reason}")
    # You can also inspect e.headers if needed
except urllib.error.URLError as e:
    print(f"URL Error: {e.reason}")

try:
    with urllib.request.urlopen(url_valid) as response:
        print("Valid URL Status:", response.getcode())
except (urllib.error.HTTPError, urllib.error.URLError) as e:
    print(f"Error with valid URL: {e}")
```

---

### 3. Understanding HTTPLib

`httplib` (or `http.client` in Python 3) is a lower-level library for making HTTP requests. While `urllib.request` is generally preferred for its ease of use, understanding `httplib` is beneficial for:

*   **Gaining deeper insight:** Understanding the underlying mechanics of HTTP communication.
*   **Advanced control:** When you need very fine-grained control over the HTTP request and response process.
*   **Legacy code:** Working with older Python codebases.

**Key Concepts:**

*   **Connection:** Establishing a TCP connection to the server.
*   **Request Sending:** Sending HTTP request headers and optional body.
*   **Response Receiving:** Reading HTTP response headers and body.
*   **Connection Management:** Keeping connections open for multiple requests (Keep-Alive).

**Key Classes/Functions (Python 3 - `http.client`):**

*   **`http.client.HTTPConnection(host, port=None, timeout=_GLOBAL_DEFAULT_TIMEOUT, *, source_address=None, blockable=False, conntype=None)`:**
    *   Establishes a connection to an HTTP server.
*   **`http.client.HTTPSConnection(host, port=None, timeout=_GLOBAL_DEFAULT_TIMEOUT, *, ssl_version=None, key_file=None, cert_file=None, ssl_context=None, cert_reqs=None, ca_certs=None, server_hostname=None, context=None)`:**
    *   Establishes a secure (HTTPS) connection.
*   **`conn.request(method, url, body=None, headers={}, *, params=None)`:**
    *   Sends an HTTP request.
    *   `method`: 'GET', 'POST', etc.
    *   `url`: The path and query string of the URL.
*   **`conn.getresponse()`:**
    *   Waits for the server to send a response and returns a `HTTPResponse` object.
*   **`response.read()`:**
    *   Reads the response body.
*   **`response.getheaders()`:**
    *   Returns a list of (header, value) tuples.
*   **`response.status`:**
    *   The HTTP status code.
*   **`response.reason`:**
    *   The HTTP reason phrase.
*   **`conn.close()`:**
    *   Closes the connection.

**Examples:**

**a) Basic GET Request using `HTTPConnection`:**

```python
import http.client

host = "jsonplaceholder.typicode.com"
url_path = "/todos/1"

try:
    # For HTTP
    conn = http.client.HTTPConnection(host)
    conn.request("GET", url_path)
    response = conn.getresponse()

    print("Status:", response.status)
    print("Reason:", response.reason)
    print("Headers:", response.getheaders())
    data = response.read()
    print("Data:", data.decode('utf-8'))

    conn.close()

except Exception as e:
    print(f"An error occurred: {e}")
```

**b) Basic GET Request using `HTTPSConnection`:**

```python
import http.client
from urllib.parse import urlparse # To extract host and path

url_string = "https://jsonplaceholder.typicode.com/todos/1"
parsed_url = urlparse(url_string)

host = parsed_url.netloc
url_path = parsed_url.path

try:
    # For HTTPS
    conn = http.client.HTTPSConnection(host)
    conn.request("GET", url_path)
    response = conn.getresponse()

    print("Status:", response.status)
    print("Reason:", response.reason)
    # print("Headers:", response.getheaders()) # Can be verbose
    data = response.read()
    print("Data:", data.decode('utf-8'))

    conn.close()

except Exception as e:
    print(f"An error occurred: {e}")
```

**c) POST Request using `HTTPConnection`:**

```python
import http.client
import urllib.parse
import json

host = "jsonplaceholder.typicode.com"
url_path = "/posts"
data = {
    "title": "foo",
    "body": "bar",
    "userId": 1
}

post_data = urllib.parse.urlencode(data).encode('ascii')

try:
    conn = http.client.HTTPConnection(host)
    headers = {'Content-type': 'application/x-www-form-urlencoded'}
    conn.request("POST", url_path, body=post_data, headers=headers)
    response = conn.getresponse()

    print("Status:", response.status)
    response_data = response.read()
    print("Response:", json.loads(response_data.decode('utf-8')))

    conn.close()
except Exception as e:
    print(f"An error occurred: {e}")
```

---

### 4. Choosing Between URLLib and HTTPLib

| Feature          | URLLib (`urllib.request`)                                   | HTTPLib (`http.client`)                                    | Recommendation for IoT                                                                                                                            |
| :--------------- | :---------------------------------------------------------- | :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Abstraction**  | Higher-level, more user-friendly                          | Lower-level, more verbose                                  | **URLLib** is generally preferred for IoT development due to its ease of use and built-in conveniences.                                          |
| **Functionality** | Handles redirects, authentication, proxies automatically. | Requires manual handling of redirects, proxies, etc.       | URLLib simplifies common tasks, crucial for resource-constrained IoT devices.                                                                     |
| **Control**      | Less granular control over the request/response process.  | More fine-grained control over connection and request details. | If you need to implement custom HTTP protocol features or manage connections very precisely, HTTPLib might be necessary. Otherwise, URLLib is sufficient. |
| **Ease of Use**  | Simpler API, often requires less code.                      | More complex API, can be more verbose.                     | **URLLib** reduces development time and potential for errors.                                                                                       |
| **Use Cases**    | Fetching web pages, interacting with REST APIs.             | Custom HTTP clients, low-level network debugging.          | **URLLib** is ideal for most IoT communication tasks.                                                                                             |

**When to use HTTPLib directly:**

*   When you need to implement a custom HTTP client with specific behaviors not covered by `urllib`.
*   When you need to meticulously control connection pooling or reuse.
*   When working with very old Python codebases that rely on `httplib`.

**When to use URLLib:**

*   **Almost always** for typical IoT data transmission, API interaction, and cloud communication.
*   When you want to quickly fetch data from a URL.
*   When you need to send POST data or customize request headers.

---

### 5. Important Points to Remember

*   **Data Encoding:** When sending data (especially in POST requests), ensure it's encoded correctly (e.g., `utf-8` for text, `ascii` for `urlencode` data that will be sent). The `encode()` method on strings is crucial.
*   **Decoding Responses:** HTTP responses are typically received as bytes. You **must** decode them into strings to work with them as text, usually using `response.read().decode('utf-8')`.
*   **Error Handling:** Always wrap your network requests in `try...except` blocks to catch `urllib.error.URLError` and `urllib.error.HTTPError` for robust applications.
*   **HTTPS vs. HTTP:** Use `urllib.request.urlopen()` for both. For `http.client`, use `HTTPConnection` for HTTP and `HTTPSConnection` for HTTPS.
*   **URLs:** Pay attention to whether your URL requires `http://` or `https://`. `urllib.parse.urlparse` can help extract components.
*   **Headers:** Custom headers (like `User-Agent`, `Content-Type`, API keys) are often essential for proper API interaction. Use `req.add_header()` with `urllib.request.Request` or the `headers` argument in `http.client.request`.
*   **Timeouts:** For IoT devices, especially those on unreliable networks, setting appropriate timeouts for requests is vital to prevent the device from hanging indefinitely. `urlopen(url, timeout=5)` or `HTTPConnection(host, timeout=5)`.
*   **Resource Constraints:** On microcontrollers or low-power IoT devices, the overhead of complex libraries might be a concern. However, `urllib` is generally considered a reasonable choice for Python-based IoT development.

---

### 6. Practice Questions & Exercises

**Questions:**

1.  What is the primary difference in abstraction level between `httplib` and `urllib`?
2.  Which module in `urllib` is used for opening and reading URLs?
3.  Name two common exceptions raised by `urllib.request`.
4.  What is the purpose of `urllib.parse.urlencode()`?
5.  When would you choose to use `http.client` directly over `urllib.request`?
6.  What steps are necessary after receiving a response from a web server to display it as human-readable text?
7.  How do you send data in a POST request using `urllib.request`?
8.  What is the difference between `HTTPConnection` and `HTTPSConnection` in `http.client`?

**Exercises:**

1.  **Fetch and Display Device Status:** Write a Python script that fetches the status of a simulated IoT device from a public API endpoint (e.g., `https://jsonplaceholder.typicode.com/users/1`). Display the device's name and email.
    *   **Expected Output (example):**
        ```
        Device Name: Leanne Graham
        Device Email: Sincere@april.biz
        ```
2.  **Send Sensor Data:** Simulate sending sensor data (temperature and humidity) to a web server. Use a POST request to `https://httpbin.org/post`. The data should be in JSON format. Print the response from the server.
    *   **Data to send:**
        ```json
        {
            "sensor_id": "DHT22_001",
            "temperature": 22.5,
            "humidity": 55.2
        }
        ```
    *   **Hint:** You'll need to encode your Python dictionary into JSON, then encode that JSON string into bytes for the POST request body. Set the `Content-Type` header to `application/json`.
3.  **Parse a URL:** Take the URL `http://myiotdevice.local:8080/api/v1/sensor/data?type=temperature&location=living_room#reading123` and use `urllib.parse` to extract and print the hostname, port, path, query parameters, and fragment.
4.  **(Advanced) Using `http.client`:** Rewrite Exercise 1 using `http.client` (or `HTTPSConnection` if the endpoint uses HTTPS) to achieve the same result. This will require manually constructing the request and handling the response.

---

### Answers to Practice Questions

1.  `httplib` is a lower-level client-side HTTP library, while `urllib` is a higher-level collection of modules for working with URLs, including making HTTP requests.
2.  `urllib.request`.
3.  `urllib.error.URLError` and `urllib.error.HTTPError`.
4.  `urllib.parse.urlencode()` converts a dictionary or sequence of key-value pairs into a URL-encoded string suitable for query parameters.
5.  You would choose to use `http.client` directly when you need more fine-grained control over the HTTP request/response process, such as implementing custom redirect handling, managing connection pooling explicitly, or for very low-level network debugging.
6.  You need to decode the response body from bytes to a string, typically using `response.read().decode('utf-8')`.
7.  You create a `urllib.request.Request` object, specify the `data` argument with the encoded data, and then use `urllib.request.urlopen()` with this request object.
8.  `HTTPConnection` establishes a standard TCP connection for HTTP (port 80 by default), while `HTTPSConnection` establishes a secure connection using SSL/TLS for HTTPS (port 443 by default).

---

### Answers to Exercises

**Exercise 1: Fetch and Display Device Status**

```python
import urllib.request
import urllib.error
import json

url = "https://jsonplaceholder.typicode.com/users/1"

try:
    with urllib.request.urlopen(url) as response:
        if response.getcode() == 200:
            data_bytes = response.read()
            data_str = data_bytes.decode('utf-8')
            user_data = json.loads(data_str)

            print(f"Device Name: {user_data['name']}")
            print(f"Device Email: {user_data['email']}")
        else:
            print(f"Error: Received status code {response.getcode()}")

except urllib.error.HTTPError as e:
    print(f"HTTP Error: {e.code} - {e.reason}")
except urllib.error.URLError as e:
    print(f"URL Error: {e.reason}")
except json.JSONDecodeError:
    print("Error decoding JSON response.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
```

**Exercise 2: Send Sensor Data**

```python
import urllib.request
import urllib.parse
import json
import ssl # For ignoring SSL certificate errors if needed, but try without first

url = "https://httpbin.org/post"
sensor_data = {
    "sensor_id": "DHT22_001",
    "temperature": 22.5,
    "humidity": 55.2
}

# Encode the dictionary to a JSON string, then encode the string to bytes
json_data_str = json.dumps(sensor_data)
post_data_bytes = json_data_str.encode('utf-8')

try:
    # Create a Request object to specify headers
    req = urllib.request.Request(url, data=post_data_bytes, method='POST')
    req.add_header('Content-Type', 'application/json')
    req.add_header('Accept', 'application/json') # Good practice to specify what you accept

    # Optional: Forcing HTTPS to ignore certificate errors (use with caution!)
    # context = ssl._create_unverified_context()
    # with urllib.request.urlopen(req, context=context) as response:

    with urllib.request.urlopen(req) as response:
        print(f"Status: {response.getcode()}")
        response_data_bytes = response.read()
        response_data_str = response_data_bytes.decode('utf-8')
        response_json = json.loads(response_data_str)
        print("Response from server:")
        print(json.dumps(response_json, indent=2)) # Pretty print the response

except urllib.error.HTTPError as e:
    print(f"HTTP Error: {e.code} - {e.reason}")
    if e.headers:
        print("Response Headers:", e.headers)
except urllib.error.URLError as e:
    print(f"URL Error: {e.reason}")
except json.JSONDecodeError:
    print("Error decoding JSON response.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")

```

**Exercise 3: Parse a URL**

```python
from urllib.parse import urlparse

url_string = "http://myiotdevice.local:8080/api/v1/sensor/data?type=temperature&location=living_room#reading123"
parsed_url = urlparse(url_string)

print(f"Original URL: {url_string}")
print(f"Scheme: {parsed_url.scheme}")
print(f"Hostname: {parsed_url.hostname}") # More specific than netloc if only host is needed
print(f"Port: {parsed_url.port}")
print(f"Path: {parsed_url.path}")
print(f"Query String: {parsed_url.query}")
print(f"Fragment: {parsed_url.fragment}")

# To get query parameters as a dictionary:
from urllib.parse import parse_qs
query_params_dict = parse_qs(parsed_url.query)
print(f"Query Parameters (dict): {query_params_dict}")
```

**Exercise 4: Using `http.client` (Rewriting Exercise 1)**

```python
import http.client
from urllib.parse import urlparse
import json

url_string = "https://jsonplaceholder.typicode.com/users/1"
parsed_url = urlparse(url_string)

host = parsed_url.hostname
port = parsed_url.port
path = parsed_url.path

# Determine if it's HTTPS and use the appropriate connection class
if parsed_url.scheme == "https":
    ConnectionClass = http.client.HTTPSConnection
else:
    ConnectionClass = http.client.HTTPConnection

try:
    # Establish connection
    conn = ConnectionClass(host, port) # If port is None, it uses default (80 for HTTP, 443 for HTTPS)

    # Send the request
    conn.request("GET", path)

    # Get the response
    response = conn.getresponse()

    print(f"Status: {response.status}")
    print(f"Reason: {response.reason}")

    if response.status == 200:
        # Read and decode the response body
        data_bytes = response.read()
        data_str = data_bytes.decode('utf-8')

        # Parse the JSON data
        user_data = json.loads(data_str)

        print(f"Device Name: {user_data['name']}")
        print(f"Device Email: {user_data['email']}")
    else:
        print(f"Error: Received status code {response.status}")

    # Close the connection
    conn.close()

except Exception as e:
    print(f"An error occurred: {e}")
