---
title: "Case Study - Application of graph based testing and security testing using industry standard tools"
subject: "SOFTWARE TESTING"
module: "Module 3: Graph Coverage Criteria "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bafe"
status: "completed"
scrapedAt: "2026-05-20T16:57:27.409Z"
---
# SOFTWARE TESTING - Module 3: Graph Coverage Criteria - Case Study: Graph-Based Testing and Security Testing

## Introduction

This module focuses on applying graph-based testing and security testing techniques using industry-standard tools. We'll explore how to leverage graph coverage criteria for structural testing and how to use security testing tools to identify vulnerabilities in software applications.

## Learning Outcomes

By the end of this module, you will be able to:

*   Understand the application of graph-based testing for structural testing.
*   Apply graph coverage criteria (Node, Edge, Edge-Pair, Path coverage) to test software.
*   Use industry-standard tools for graph-based testing.
*   Understand the principles of security testing.
*   Utilize security testing tools to identify vulnerabilities.
*   Analyze and interpret results from security testing tools.

## 1. Application of Graph-Based Testing for Structural Testing

### 1.1 Key Concepts and Definitions

*   **Graph-Based Testing:** A structural testing technique where the control flow or data flow of a program is represented as a graph. Testing focuses on covering specific elements of this graph (nodes, edges, paths).
*   **Control Flow Graph (CFG):** A directed graph representing the execution paths within a program. Nodes represent basic blocks (sequential code without branches), and edges represent the possible flow of control between these blocks.
*   **Data Flow Graph (DFG):**  A graph that represents the flow of data in a program. Nodes can represent variables and operations, and edges represent the data dependencies between them.
*   **Node Coverage (Statement Coverage):** Every node in the graph must be visited at least once. In terms of code, every statement must be executed at least once.
*   **Edge Coverage (Branch Coverage):** Every edge in the graph must be traversed at least once.  In terms of code, every branch (e.g., true and false branches of an if statement) must be executed at least once.
*   **Edge-Pair Coverage:** Every sequence of two edges in the graph must be traversed at least once. This covers sequences of branching decisions.
*   **Path Coverage:** Every possible path through the graph must be traversed at least once. This is often impractical for complex programs due to the potentially infinite number of paths.  A more realistic variant is "basis path testing" which seeks to cover a linearly independent set of paths.

### 1.2 Graph Coverage Criteria Examples

Consider the following simple code snippet:

```java
public int calculate(int a, int b) {
    int result = 0;
    if (a > 0) {
        result = a + b;
    } else {
        result = a - b;
    }
    return result;
}
```

**1.  Control Flow Graph (CFG):**

    *   Node 1: `int result = 0;`
    *   Node 2: `if (a > 0)`
    *   Node 3: `result = a + b;` (Then branch)
    *   Node 4: `result = a - b;` (Else branch)
    *   Node 5: `return result;`

    Edges:
    *   1 -> 2
    *   2 -> 3 (if a > 0 is true)
    *   2 -> 4 (if a > 0 is false)
    *   3 -> 5
    *   4 -> 5

**2.  Test Cases based on Coverage Criteria:**

*   **Node Coverage:**
    *   Test Case 1: `a = 1, b = 2` (Visits Nodes 1, 2, 3, 5)
    *   Test Case 2: `a = -1, b = 2` (Visits Nodes 1, 2, 4, 5)
*   **Edge Coverage:**  The same test cases as Node Coverage suffice to achieve Edge Coverage in this simple example.
*   **Edge-Pair Coverage:**
    *   1->2->3, 1->2->4, 2->3->5, 2->4->5.  The test cases above are still sufficient.
*   **Path Coverage:**  All possible paths are:
    *   1->2->3->5
    *   1->2->4->5
    The test cases above are still sufficient.  However, more complex code can create exponentially more paths.

**3. Data Flow Graph (Example illustrating Definition-Use pairs):**

*   Nodes:
    *   Node 1: `a` (input)
    *   Node 2: `b` (input)
    *   Node 3: `result = 0;` (definition of result)
    *   Node 4: `a > 0` (use of a)
    *   Node 5: `result = a + b;` (definition of result, use of a and b)
    *   Node 6: `result = a - b;` (definition of result, use of a and b)
    *   Node 7: `return result;` (use of result)

*   Edges (Definition-Use Pairs):
    *   Node 1 -> Node 4 (a is used in the condition)
    *   Node 1 -> Node 5 (a is used to define result)
    *   Node 1 -> Node 6 (a is used to define result)
    *   Node 2 -> Node 5 (b is used to define result)
    *   Node 2 -> Node 6 (b is used to define result)
    *   Node 3 -> Node 7 (result is used to return)
    *   Node 5 -> Node 7 (result is used to return)
    *   Node 6 -> Node 7 (result is used to return)

### 1.3 Industry-Standard Tools for Graph-Based Testing

*   **JUnit (with coverage plugins like EclEmma or JaCoCo):**  JUnit is a popular Java testing framework. Coverage plugins provide reports on the node and edge coverage achieved by the test suite.
*   **Cobertura:** Another popular code coverage tool for Java.
*   **IntelliJ IDEA, Eclipse:** IDEs with built-in code coverage analysis tools.
*   **VectorCAST:** A commercial tool that supports various coverage criteria for different programming languages.
*   **Parasoft Insure++:** A static analysis tool that can generate control flow graphs and perform path analysis.

### 1.4 Example Using JUnit and JaCoCo

1.  **Write JUnit tests:** Create JUnit test cases that exercise the `calculate` method with different inputs.

    ```java
    import org.junit.jupiter.api.Test;
    import static org.junit.jupiter.api.Assertions.*;

    class CalculatorTest {

        @Test
        void calculatePositive() {
            Calculator calculator = new Calculator();
            assertEquals(3, calculator.calculate(1, 2));
        }

        @Test
        void calculateNegative() {
            Calculator calculator = new Calculator();
            assertEquals(-3, calculator.calculate(-1, 2));
        }
    }
    ```

2.  **Run tests with JaCoCo:** Run the JUnit tests using a JaCoCo plugin (configured in your IDE or build tool like Maven or Gradle).

3.  **Analyze coverage report:** JaCoCo generates a report showing the line coverage (which directly correlates to node coverage).  The report will indicate which lines of code were executed by the tests. If both test cases are executed, the report should show 100% line coverage.

## 2. Principles of Security Testing

### 2.1 Key Concepts and Definitions

*   **Security Testing:** The process of verifying that a software system protects data and maintains functionality as intended.  It uncovers vulnerabilities, threats, risks, and weaknesses in software.
*   **Vulnerability:** A weakness in a system that can be exploited to cause harm.
*   **Threat:** A potential event that could exploit a vulnerability.
*   **Risk:** The potential for loss or damage when a threat exploits a vulnerability.
*   **Attack Surface:** The sum of all the different points (surfaces) where an unauthorized user can try to enter data to or extract data from an environment.
*   **Authentication:** Verifying the identity of a user.
*   **Authorization:** Granting access to resources based on the verified identity.
*   **Confidentiality:** Ensuring that data is only accessible to authorized users.
*   **Integrity:** Ensuring that data is accurate and complete.
*   **Availability:** Ensuring that the system is accessible when needed.

### 2.2 Types of Security Testing

*   **Vulnerability Scanning:** Automated scans to identify known vulnerabilities using databases of common weaknesses (e.g., OWASP).
*   **Penetration Testing (Pen Testing):** Simulating real-world attacks to find vulnerabilities that automated scans may miss. Performed by ethical hackers.
*   **Security Auditing:**  Reviewing the system's security policies, procedures, and configurations.
*   **Risk Assessment:**  Identifying and analyzing potential security risks.
*   **Fuzzing:** Providing invalid, unexpected, or random data as input to a program to find vulnerabilities (e.g., buffer overflows, crashes).
*   **Static Code Analysis:** Analyzing source code to identify potential security vulnerabilities without executing the code.
*   **Dynamic Code Analysis:** Analyzing a running program to identify security vulnerabilities.
*   **Web Application Security Testing:** Testing specific to web applications for vulnerabilities like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).

### 2.3 Common Security Vulnerabilities (OWASP Top 10)

The OWASP (Open Web Application Security Project) Top 10 is a list of the most critical web application security risks:

1.  **Injection:** SQL injection, command injection, etc.
2.  **Broken Authentication:** Weak passwords, session management issues.
3.  **Sensitive Data Exposure:** Data breaches, insecure storage of sensitive information.
4.  **XML External Entities (XXE):** Exploiting XML processors to access internal files.
5.  **Broken Access Control:** Unauthorized access to resources.
6.  **Security Misconfiguration:** Improperly configured servers or applications.
7.  **Cross-Site Scripting (XSS):** Injecting malicious scripts into websites.
8.  **Insecure Deserialization:** Exploiting vulnerabilities in deserialization processes.
9.  **Using Components with Known Vulnerabilities:** Using outdated libraries or frameworks with known flaws.
10. **Insufficient Logging & Monitoring:** Lack of adequate logging and monitoring to detect and respond to attacks.

## 3. Security Testing Tools

### 3.1 Types of Security Testing Tools

*   **Vulnerability Scanners:**
    *   **Nessus:**  A popular commercial vulnerability scanner.
    *   **OpenVAS:** An open-source vulnerability scanner.
    *   **Nikto:** A web server scanner that identifies various vulnerabilities.
*   **Web Application Scanners:**
    *   **OWASP ZAP (Zed Attack Proxy):** A free, open-source web application security scanner.
    *   **Burp Suite:** A commercial web application penetration testing tool.
    *   **Acunetix:** A commercial web vulnerability scanner.
*   **Static Code Analysis Tools:**
    *   **SonarQube:** An open-source platform for continuous inspection of code quality and security.
    *   **Fortify Static Code Analyzer:** A commercial static code analysis tool.
    *   **Checkmarx:** A commercial static code analysis tool.
*   **Dynamic Code Analysis Tools:**
    *   **Valgrind:**  A suite of debugging and profiling tools, including memory leak detection.
    *   **AddressSanitizer (ASan):**  A memory error detector.
*   **Fuzzing Tools:**
    *   **AFL (American Fuzzy Lop):**  A widely used fuzzing tool.
    *   **Peach Fuzzer:**  A commercial fuzzing framework.

### 3.2 Case Study: Using OWASP ZAP for Web Application Security Testing

**Scenario:** Test a simple web application for common vulnerabilities using OWASP ZAP.

**Steps:**

1.  **Set up OWASP ZAP:** Download and install OWASP ZAP.
2.  **Configure ZAP as a Proxy:** Configure your web browser to use ZAP as a proxy (typically localhost:8080).  This allows ZAP to intercept all traffic between your browser and the web application.
3.  **Explore the Web Application:**  Browse the web application through your browser. ZAP will record all requests and build a site map.
4.  **Run Automated Scan:**  Right-click on the target web application in ZAP's site map and select "Attack" -> "Active Scan" or "Passive Scan".

    *   **Passive Scan:** Analyzes requests and responses without sending potentially malicious traffic. Useful for identifying issues like missing security headers.
    *   **Active Scan:** Sends malicious requests to the web application to identify vulnerabilities. Requires careful consideration as it could potentially disrupt the application.

5.  **Analyze Results:**  ZAP will identify potential vulnerabilities and report them in the "Alerts" tab.  Each alert will include a description of the vulnerability, the affected URL, and recommendations for remediation.  Examples of alerts that might be raised include:

    *   **SQL Injection:** If the application uses unsanitized user input in SQL queries.
    *   **Cross-Site Scripting (XSS):** If the application allows users to inject malicious scripts.
    *   **Missing Security Headers:**  If the application lacks important security headers like `X-Frame-Options` or `Content-Security-Policy`.

6.  **Investigate Vulnerabilities:**  Review each alert carefully and investigate the vulnerability in the web application code.  Use ZAP to craft specific requests to exploit the vulnerability and confirm the finding.
7.  **Remediate Vulnerabilities:** Fix the vulnerabilities by implementing appropriate security measures, such as input validation, output encoding, and secure coding practices.
8.  **Retest:**  Re-run the scan after fixing the vulnerabilities to verify that the issues have been resolved.

### 3.3 Analyzing and Interpreting Results from Security Testing Tools

*   **Prioritize vulnerabilities:** Not all vulnerabilities are created equal.  Prioritize remediation based on the severity of the vulnerability, the likelihood of exploitation, and the potential impact on the business.
*   **False Positives:** Security testing tools may generate false positives (incorrectly identifying a vulnerability). It's crucial to manually verify each reported vulnerability before taking action.
*   **Context is Key:**  The significance of a vulnerability depends on the context of the application and the environment in which it operates.  Consider the sensitivity of the data handled by the application, the potential impact of a breach, and the cost of remediation.
*   **Remediation Guidance:**  Security testing tools often provide guidance on how to remediate identified vulnerabilities.  Follow these recommendations and consult with security experts if needed.
*   **Continuous Testing:** Security testing should be an ongoing process, not a one-time event.  Regularly scan your applications for vulnerabilities and stay up-to-date on the latest security threats.

## 4. Practice Questions and Exercises

**Question 1:**  Explain the difference between node coverage and edge coverage in graph-based testing.

**Answer:** Node coverage requires every node in the control flow graph to be executed at least once. Edge coverage requires every edge (transition between nodes) in the graph to be executed at least once.  Edge coverage subsumes node coverage.

**Question 2:**  What is the purpose of security testing?

**Answer:** The purpose of security testing is to identify vulnerabilities, threats, risks, and weaknesses in software applications that could compromise data confidentiality, integrity, or availability.

**Question 3:** Give examples of three web application security vulnerabilities that OWASP ZAP can help detect.

**Answer:** SQL Injection, Cross-Site Scripting (XSS), Missing Security Headers

**Question 4:** Why is it important to prioritize vulnerabilities identified by security testing tools?

**Answer:**  Not all vulnerabilities pose the same risk. Prioritization allows you to focus on the most critical vulnerabilities that are most likely to be exploited and have the greatest potential impact. Resource constraints often require prioritization of remediation efforts.

**Exercise 1:** Draw a control flow graph for the following code:

```java
public int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

**Exercise 2:** Use OWASP ZAP to scan a publicly available vulnerable web application (e.g., OWASP Juice Shop or Damn Vulnerable Web Application). Identify at least three vulnerabilities. Document your findings and suggest remediation steps.

## 5. Important Points to Remember

*   Graph-based testing is a powerful technique for structural testing, helping to ensure code coverage and identify potential errors.
*   Security testing is crucial for protecting software applications from attacks and ensuring data security.
*   Industry-standard tools like JUnit, JaCoCo, and OWASP ZAP can greatly assist in performing graph-based testing and security testing.
*   Understanding the principles of security testing, common vulnerabilities, and how to analyze the results of security testing tools is essential for building secure software.
*   Security testing should be an ongoing process throughout the software development lifecycle.
