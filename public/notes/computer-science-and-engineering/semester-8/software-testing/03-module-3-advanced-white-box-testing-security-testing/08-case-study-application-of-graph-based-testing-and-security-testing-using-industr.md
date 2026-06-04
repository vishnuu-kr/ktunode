---
title: "Case Study - Application of graph based testing and security testing using industry standard tools."
subject: "SOFTWARE TESTING"
module: "Module 3: Advanced White Box Testing & Security Testing:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ccca"
status: "completed"
scrapedAt: "2026-05-20T17:26:40.427Z"
---
# Software Testing - Module 3: Advanced White Box Testing & Security Testing

## Topic: Case Study - Application of Graph Based Testing and Security Testing Using Industry Standard Tools

This case study explores the practical application of advanced white box testing techniques, specifically graph-based testing, and security testing using industry-standard tools. We will delve into how these methodologies contribute to building robust and secure software.

---

### Learning Outcomes Covered:

*   **Understand the principles and techniques of graph-based testing, including control flow graphs and data flow graphs.**
*   **Explore the application of graph-based testing to derive test cases and measure test coverage.**
*   **Identify common software vulnerabilities and understand the principles of security testing.**
*   **Learn about industry-standard tools used for both graph-based testing and security testing.**
*   **Apply graph-based testing and security testing principles to a hypothetical software application through case study scenarios.**

---

### 1. Introduction to Graph-Based Testing

Graph-based testing is a white box testing technique that uses graphical representations of program logic to design and execute tests. It helps ensure thorough coverage of code paths and data flows.

#### 1.1. Key Concepts and Definitions

*   **Graph:** A collection of nodes (representing program constructs) and edges (representing transitions between constructs).
*   **Control Flow Graph (CFG):** A directed graph representing the execution paths of a program.
    *   **Nodes:** Represent basic blocks of code (sequences of statements executed without branching).
    *   **Edges:** Represent possible transfers of control between basic blocks.
*   **Data Flow Graph (DFG):** A graph that represents the flow of data within a program. It focuses on how variables are defined, used, and propagated.
    *   **Nodes:** Represent statements or operations that define or use variables.
    *   **Edges:** Represent the flow of data between these nodes.
*   **Test Coverage Criteria:** Metrics used to quantify the thoroughness of testing. For graph-based testing, common criteria include:
    *   **Statement Coverage:** Every statement in the program is executed at least once.
    *   **Decision Coverage (Branch Coverage):** Every decision point (e.g., `if`, `while`) has both its true and false outcomes executed.
    *   **Condition Coverage:** Every boolean sub-expression within a decision evaluates to both true and false.
    *   **Path Coverage:** Every possible path from the start node to the end node of the CFG is executed. This is often impractical due to the exponential number of paths.
    *   **Edge Coverage:** Every edge in the CFG is traversed at least once.
    *   **Node Coverage:** Every node in the CFG is visited at least once.
    *   **Data Flow Coverage:** Focuses on how data is used and defined. Common criteria include:
        *   **Define-Use (DU) Path Coverage:** For every definition of a variable and every use of that definition, the path from the definition to the use is executed.
        *   **All-Uses Coverage:** For every definition of a variable, all paths to its uses are executed.
        *   **All-Defs Coverage:** For every variable, all definitions are executed.

#### 1.2. Application of Graph-Based Testing

*   **Test Case Generation:** CFGs and DFGs help identify critical paths and potential dead code, guiding the creation of test cases to cover these elements.
*   **Coverage Measurement:** Graph-based metrics provide a quantifiable way to assess the completeness of testing.
*   **Identifying Redundant Code:** Analyzing CFGs can reveal unreachable code segments that can be removed.
*   **Understanding Program Logic:** Visualizing program flow aids in comprehending complex logic and identifying potential errors.

#### 1.3. Example: Control Flow Graph (CFG)

Consider a simple C function:

```c
int calculate_discount(int price, int quantity) {
    int total_price = price * quantity;
    int discount = 0;

    if (total_price > 1000) {
        discount = total_price * 0.10; // 10% discount
    } else if (total_price > 500) {
        discount = total_price * 0.05; // 5% discount
    }

    return total_price - discount;
}
```

**CFG Representation:**

*   **Node 1:** `int total_price = price * quantity;`
*   **Node 2:** `int discount = 0;`
*   **Node 3:** `if (total_price > 1000)`
*   **Node 4:** `discount = total_price * 0.10;`
*   **Node 5:** `else if (total_price > 500)`
*   **Node 6:** `discount = total_price * 0.05;`
*   **Node 7:** `return total_price - discount;`

**Edges:**

*   1 -> 2
*   2 -> 3
*   3 -> 4 (True for `total_price > 1000`)
*   3 -> 5 (False for `total_price > 1000`)
*   4 -> 7
*   5 -> 6 (True for `total_price > 500`)
*   5 -> 7 (False for `total_price > 500`)
*   6 -> 7

**Test Cases for Coverage:**

*   **Statement Coverage:**
    *   Test 1: `price = 50`, `quantity = 10` (total\_price = 500) - Covers Nodes 1, 2, 3, 5, 7.
    *   Test 2: `price = 100`, `quantity = 10` (total\_price = 1000) - Covers Nodes 1, 2, 3, 5, 7.
    *   Test 3: `price = 120`, `quantity = 10` (total\_price = 1200) - Covers Nodes 1, 2, 3, 4, 7.
    *   With these three tests, all statements are covered.

*   **Decision Coverage:**
    *   Need to cover:
        *   `total_price > 1000` (True)
        *   `total_price > 1000` (False)
        *   `total_price > 500` (True)
        *   `total_price > 500` (False)
    *   Test 1: `price = 50`, `quantity = 10` (total\_price = 500) - Covers (`total_price > 1000` is False) and (`total_price > 500` is False).
    *   Test 3: `price = 120`, `quantity = 10` (total\_price = 1200) - Covers (`total_price > 1000` is True).
    *   Test 2: `price = 100`, `quantity = 10` (total\_price = 1000) - Covers (`total_price > 1000` is False) and (`total_price > 500` is True).
    *   These three tests achieve decision coverage.

*   **Path Coverage:**
    *   Path 1: 1 -> 2 -> 3 -> 5 -> 7 (e.g., `price=50`, `quantity=10`)
    *   Path 2: 1 -> 2 -> 3 -> 5 -> 6 -> 7 (e.g., `price=60`, `quantity=10`)
    *   Path 3: 1 -> 2 -> 3 -> 4 -> 7 (e.g., `price=120`, `quantity=10`)
    *   Achieving path coverage requires executing each of these paths.

---

### 2. Introduction to Security Testing

Security testing is a type of software testing that aims to uncover vulnerabilities in a software application that could lead to unauthorized access, data breaches, or system compromise.

#### 2.1. Key Concepts and Definitions

*   **Vulnerability:** A weakness in a system or software that can be exploited by an attacker.
*   **Threat:** A potential danger that can exploit a vulnerability.
*   **Risk:** The likelihood of a threat exploiting a vulnerability and the potential impact of that exploitation.
*   **Attack Surface:** The sum of all points where an attacker can try to enter or extract data from a system.
*   **Common Vulnerabilities (OWASP Top 10):**
    *   **Injection:** Sending untrusted data to an interpreter as part of a command or query (e.g., SQL Injection, Command Injection).
    *   **Broken Authentication:** Functions related to user identity and session management are implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens.
    *   **Sensitive Data Exposure:** Failure to adequately protect sensitive data, both at rest and in transit.
    *   **XML External Entities (XXE):** Exploiting vulnerabilities in XML parsers that process external entity references.
    *   **Broken Access Control:** Restrictions on what authenticated users are allowed to do are not properly enforced.
    *   **Security Misconfiguration:** Security settings are not properly implemented or are left at their default values.
    *   **Cross-Site Scripting (XSS):** Injecting malicious scripts into web pages viewed by other users.
    *   **Insecure Deserialization:** Deserializing untrusted data can lead to remote code execution.
    *   **Using Components with Known Vulnerabilities:** Software components (e.g., libraries, frameworks) have a known vulnerability.
    *   **Insufficient Logging & Monitoring:** Lack of adequate logging and monitoring makes it difficult to detect and respond to attacks.
*   **Security Testing Techniques:**
    *   **Vulnerability Scanning:** Automated tools that scan for known vulnerabilities.
    *   **Penetration Testing (Pen Testing):** Simulating real-world attacks to identify vulnerabilities and their impact.
    *   **Security Auditing:** Reviewing code and configurations for security flaws.
    *   **Risk Assessment:** Identifying and prioritizing potential security risks.
    *   **Code Review:** Manual or automated inspection of source code for security weaknesses.
    *   **Ethical Hacking:** Employing hacking techniques in a controlled and authorized manner to identify vulnerabilities.
    *   **Fuzzing:** Providing invalid, unexpected, or random data as input to a program to uncover crashes or security loopholes.

#### 2.2. Importance of Security Testing

*   **Protecting Sensitive Data:** Safeguarding user credentials, financial information, and other confidential data.
*   **Preventing Financial Losses:** Avoiding costs associated with data breaches, downtime, and regulatory fines.
*   **Maintaining Customer Trust:** Building confidence by demonstrating a commitment to security.
*   **Ensuring Compliance:** Meeting regulatory requirements (e.g., GDPR, HIPAA).
*   **Preventing System Outages:** Avoiding attacks that can disrupt service availability.

---

### 3. Industry Standard Tools

This section highlights commonly used tools for both graph-based testing and security testing.

#### 3.1. Tools for Graph-Based Testing

*   **For Code Analysis and Coverage:**
    *   **JaCoCo (Java Code Coverage):** A popular open-source library that measures the coverage of Java code. It generates reports on line, branch, and method coverage.
    *   **gcov (GCC Coverage):** A command-line tool provided with the GNU Compiler Collection (GCC) that generates coverage data for C and C++ programs.
    *   **Cobertura:** Another open-source tool for Java code coverage, providing detailed reports on line and branch coverage.
    *   **BullseyeCoverage:** A commercial code coverage tool for C/C++ applications, known for its detailed analysis and integration capabilities.
    *   **SonarQube:** A platform for continuous inspection of code quality, including the detection of bugs, code smells, and security vulnerabilities. It integrates with coverage tools.
    *   **LLVM Coverage:** The coverage tools provided by the LLVM compiler infrastructure.

*   **For Graph Visualization and Analysis (often integrated with static analysis tools):**
    *   **Graphviz:** An open-source graph visualization software package that can be used to generate graphical representations of CFGs and DFGs from tool outputs.
    *   **Commercial Static Analysis Tools (e.g., Coverity, Klocwork):** Often include advanced features for visualizing control flow and data flow.

#### 3.2. Tools for Security Testing

*   **Vulnerability Scanners:**
    *   **Nessus:** A widely used commercial vulnerability scanner that identifies security weaknesses in systems and applications.
    *   **OpenVAS (Greenbone Vulnerability Management):** An open-source vulnerability scanner with a comprehensive database of vulnerabilities.
    *   **Qualys:** A cloud-based platform offering vulnerability management, compliance, and security assessments.

*   **Web Application Security Scanners:**
    *   **OWASP ZAP (Zed Attack Proxy):** A popular free and open-source web application security scanner. It acts as a proxy, intercepting and modifying traffic, and can automate scans for common web vulnerabilities.
    *   **Burp Suite:** A commercial integrated platform for performing security testing of web applications. It offers features like proxying, scanning, intruder, repeater, and more.
    *   **Acunetix:** A commercial web vulnerability scanner known for its speed and comprehensive scanning capabilities.
    *   **Nikto:** An open-source web server scanner that performs comprehensive tests against web servers for multiple items, including potentially dangerous files/CGIs, outdated server versions, and server configuration issues.

*   **Penetration Testing Frameworks:**
    *   **Metasploit Framework:** A powerful open-source penetration testing framework that provides a vast array of exploits, payloads, and tools for ethical hacking.
    *   **Kali Linux:** A Debian-based Linux distribution specifically designed for penetration testing and digital forensics. It comes pre-installed with numerous security tools.

*   **Static Application Security Testing (SAST) Tools:**
    *   **Checkmarx:** A commercial SAST tool that analyzes source code to identify security vulnerabilities.
    *   **Veracode:** A cloud-based application security platform offering SAST, DAST, and other security testing services.
    *   **Fortify (Micro Focus):** A suite of application security testing tools, including SAST.

*   **Dynamic Application Security Testing (DAST) Tools:**
    *   **Nmap:** A network scanner used for host discovery and service enumeration, often used in the initial stages of security assessments.
    *   **Wireshark:** A network protocol analyzer that captures and inspects network traffic, useful for understanding data flows and identifying potential security issues.

*   **Fuzzing Tools:**
    *   **AFL (American Fuzzy Lop):** A popular open-source coverage-guided fuzzer for finding bugs in software.
    *   **Peach Fuzzer:** A commercial fuzzing framework that supports various fuzzing techniques.

---

### 4. Case Study: Hypothetical Application - "SecureEHR"

Let's consider a hypothetical Electronic Health Records (EHR) system called "SecureEHR." This system allows healthcare professionals to manage patient data, appointments, and prescriptions.

**Scenario:** A critical module in SecureEHR handles prescription validation, ensuring that dosages and drug interactions are safe. We need to apply graph-based testing to ensure code coverage and security testing to prevent unauthorized access or data manipulation.

#### 4.1. Graph-Based Testing Application

**Module: Prescription Validation**

```java
public class PrescriptionValidator {

    public boolean validatePrescription(Patient patient, Drug drug, int dosage, int frequency) {
        int maxDosage = drug.getMaxDosage();
        int safeFrequency = drug.getSafeFrequency();
        boolean drugInteractionRisk = checkDrugInteractions(patient, drug);

        boolean isValid = true;

        if (dosage > maxDosage) {
            isValid = false; // Dosage too high
        }

        if (frequency > safeFrequency) {
            isValid = false; // Frequency too high
        }

        if (drugInteractionRisk) {
            isValid = false; // Potential drug interaction
        }

        return isValid;
    }

    private boolean checkDrugInteractions(Patient patient, Drug drug) {
        // Simplified logic for demonstration
        for (Prescription existingPrescription : patient.getPrescriptions()) {
            if (existingPrescription.getDrug().interactsWith(drug)) {
                return true;
            }
        }
        return false;
    }
}
```

**Applying Graph-Based Testing:**

1.  **Construct the CFG for `validatePrescription`:**
    *   **Node 1:** `int maxDosage = drug.getMaxDosage();`
    *   **Node 2:** `int safeFrequency = drug.getSafeFrequency();`
    *   **Node 3:** `boolean drugInteractionRisk = checkDrugInteractions(patient, drug);`
    *   **Node 4:** `boolean isValid = true;`
    *   **Node 5:** `if (dosage > maxDosage)`
    *   **Node 6:** `isValid = false;`
    *   **Node 7:** `if (frequency > safeFrequency)`
    *   **Node 8:** `isValid = false;`
    *   **Node 9:** `if (drugInteractionRisk)`
    *   **Node 10:** `isValid = false;`
    *   **Node 11:** `return isValid;`

    **Edges:**
    *   1 -> 2
    *   2 -> 3
    *   3 -> 4
    *   4 -> 5
    *   5 -> 6 (True for `dosage > maxDosage`)
    *   5 -> 7 (False for `dosage > maxDosage`)
    *   6 -> 7
    *   7 -> 8 (True for `frequency > safeFrequency`)
    *   7 -> 9 (False for `frequency > safeFrequency`)
    *   8 -> 9
    *   9 -> 10 (True for `drugInteractionRisk`)
    *   9 -> 11 (False for `drugInteractionRisk`)
    *   10 -> 11

2.  **Determine Test Cases for Coverage Criteria (e.g., Decision Coverage):**

    *   **Case 1: Valid Prescription (No issues)**
        *   `patient`, `drug`, `dosage`, `frequency` such that `dosage <= maxDosage`, `frequency <= safeFrequency`, and `drugInteractionRisk` is false.
        *   This path covers: `dosage > maxDosage` (False), `frequency > safeFrequency` (False), `drugInteractionRisk` (False).
        *   Path: 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 9 -> 11

    *   **Case 2: Dosage Too High**
        *   `patient`, `drug`, `dosage` such that `dosage > maxDosage`, `frequency <= safeFrequency`, and `drugInteractionRisk` is false.
        *   This path covers: `dosage > maxDosage` (True), `frequency > safeFrequency` (False), `drugInteractionRisk` (False).
        *   Path: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 9 -> 11

    *   **Case 3: Frequency Too High**
        *   `patient`, `drug`, `dosage` such that `dosage <= maxDosage`, `frequency > safeFrequency`, and `drugInteractionRisk` is false.
        *   This path covers: `dosage > maxDosage` (False), `frequency > safeFrequency` (True), `drugInteractionRisk` (False).
        *   Path: 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9 -> 11

    *   **Case 4: Drug Interaction Risk**
        *   `patient`, `drug`, `dosage`, `frequency` such that `dosage <= maxDosage`, `frequency <= safeFrequency`, and `drugInteractionRisk` is true.
        *   This path covers: `dosage > maxDosage` (False), `frequency > safeFrequency` (False), `drugInteractionRisk` (True).
        *   Path: 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 9 -> 10 -> 11

    *   **Case 5: Dosage Too High AND Frequency Too High** (demonstrating multiple conditions in sequence)
        *   `patient`, `drug`, `dosage`, `frequency` such that `dosage > maxDosage`, `frequency > safeFrequency`, and `drugInteractionRisk` is false.
        *   Path: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 11

    *   **Using Tools:**
        *   We would compile the Java code with JaCoCo or Cobertura enabled.
        *   Run these test cases.
        *   Generate a coverage report to see which branches/statements were executed.
        *   If any parts of the CFG are not covered, new test cases would be designed.

#### 4.2. Security Testing Application

**Module: Patient Data Access (assuming a web interface)**

**Potential Vulnerabilities:**

*   **Broken Authentication:** Weak password policies, predictable session IDs.
*   **Broken Access Control:** A nurse practitioner can access a specialist's restricted patient notes.
*   **SQL Injection:** An attacker manipulates input fields to extract unauthorized patient data from the database.
*   **Sensitive Data Exposure:** Patient health records transmitted over unencrypted channels.

**Applying Security Testing with Tools:**

1.  **Vulnerability Scanning (e.g., using OWASP ZAP or Nessus):**
    *   **Scenario:** Scan the SecureEHR web application.
    *   **Action:** Configure ZAP to spider the application and perform active scans.
    *   **Expected Outcome:** ZAP might identify common web vulnerabilities like:
        *   Missing security headers (e.g., `Content-Security-Policy`).
        *   Potential cross-site scripting (XSS) vulnerabilities in input fields.
        *   Outdated software components if the web server is not kept updated.
        *   Insecure direct object references (IDOR) if access control is weak.

2.  **Penetration Testing (Simulating an attack):**
    *   **Scenario:** An attacker attempts to access patient data they are not authorized for.
    *   **Action:**
        *   **Authentication Testing:** Use tools like Hydra (part of Kali Linux) to attempt brute-force attacks on login credentials. Test for weak password policies.
        *   **Access Control Testing:** Manually try to access URLs for patient records that the current user should not have access to. Use Burp Suite's Repeater to modify requests and test for privilege escalation.
        *   **SQL Injection Testing:** Use a tool like sqlmap with ZAP or Burp Suite to probe input fields (e.g., patient ID search) for SQL injection vulnerabilities.
        *   **Man-in-the-Middle (MITM) Attacks:** Use tools like Wireshark or Ettercap to intercept network traffic and check if sensitive data (like login credentials or patient records) is transmitted unencrypted (e.g., over HTTP instead of HTTPS).

3.  **Code Review (SAST):**
    *   **Scenario:** Analyze the `PrescriptionValidator` Java code for security flaws.
    *   **Action:** Feed the source code into a SAST tool like Checkmarx or SonarQube (with its security rules enabled).
    *   **Expected Outcome:**
        *   The tool might flag `checkDrugInteractions` if the logic for `existingPrescription.getDrug().interactsWith(drug)` is flawed or susceptible to manipulation.
        *   It could identify if `Patient` or `Drug` objects are being serialized/deserialized insecurely.
        *   It might highlight if any sensitive data (like patient IDs) is logged without proper sanitization.

#### 4.3. Practice Questions and Exercises

**Question 1: Graph-Based Testing**
Given the following Python function, draw its Control Flow Graph (CFG) and list the test cases required to achieve **edge coverage**.

```python
def process_data(value):
    if value > 10:
        print("Value is large")
        result = value * 2
    elif value > 5:
        print("Value is medium")
        result = value + 5
    else:
        print("Value is small")
        result = value - 1
    return result
```

**Answer 1:**

**CFG:**

*   **Node 1:** `value > 10` (start of conditional)
*   **Node 2:** `print("Value is large")`
*   **Node 3:** `result = value * 2`
*   **Node 4:** `value > 5` (start of elif)
*   **Node 5:** `print("Value is medium")`
*   **Node 6:** `result = value + 5`
*   **Node 7:** `print("Value is small")`
*   **Node 8:** `result = value - 1`
*   **Node 9:** `return result` (end of function)

**Edges:**

*   1 -> 2 (True for `value > 10`)
*   1 -> 4 (False for `value > 10`)
*   2 -> 3
*   3 -> 9
*   4 -> 5 (True for `value > 5`)
*   4 -> 7 (False for `value > 5`)
*   5 -> 6
*   6 -> 9
*   7 -> 8
*   8 -> 9

**Test Cases for Edge Coverage:**

To cover all edges, we need to ensure each transition is traversed.

*   **Test Case 1:** `value = 15`
    *   Covers: 1 -> 2 (True), 2 -> 3, 3 -> 9.
    *   Path: `start` -> 1 -> 2 -> 3 -> 9

*   **Test Case 2:** `value = 7`
    *   Covers: 1 -> 4 (False), 4 -> 5 (True), 5 -> 6, 6 -> 9.
    *   Path: `start` -> 1 -> 4 -> 5 -> 6 -> 9

*   **Test Case 3:** `value = 3`
    *   Covers: 1 -> 4 (False), 4 -> 7 (False), 7 -> 8, 8 -> 9.
    *   Path: `start` -> 1 -> 4 -> 7 -> 8 -> 9

This set of three test cases ensures all edges in the CFG are traversed.

**Question 2: Security Testing**
You are testing a login page for a web application. What security testing activities would you perform, and what tools might you use? List at least two common vulnerabilities you would look for.

**Answer 2:**

**Security Testing Activities and Tools:**

1.  **Vulnerability Scanning:**
    *   **Activity:** Use an automated scanner to identify known web vulnerabilities.
    *   **Tools:** OWASP ZAP, Burp Suite, Acunetix.

2.  **Manual Testing for Access Control and Injection:**
    *   **Activity:** Attempt to bypass authentication, escalate privileges, or inject malicious input into login fields.
    *   **Tools:** Burp Suite (Proxy, Repeater, Intruder), browser developer tools.

3.  **Authentication Strength Testing:**
    *   **Activity:** Test for weak password policies, lack of brute-force protection, and predictable session management.
    *   **Tools:** Hydra (for brute-forcing), manual inspection of session cookies.

**Common Vulnerabilities to Look For:**

1.  **SQL Injection:** An attacker could input malicious SQL code into the username or password field to manipulate the database query, potentially revealing all user credentials or other sensitive information.
2.  **Brute-Force Attacks:** If the login page does not implement rate limiting or account lockout mechanisms, an attacker could repeatedly try different username and password combinations until they gain unauthorized access.
3.  **Broken Authentication (Session Hijacking):** If session tokens are predictable or transmitted insecurely, an attacker might be able to steal a valid session token and impersonate a logged-in user.
4.  **Cross-Site Scripting (XSS):** While less common on a pure login form, if error messages or other feedback mechanisms display user input without proper sanitization, XSS could be a risk.

---

### 5. Important Points to Remember

*   **Graph-based testing is a white-box technique:** It requires access to the source code.
*   **Trade-off between coverage and effort:** Path coverage is ideal but often impractical. Choose coverage criteria that balance thoroughness with project constraints.
*   **CFGs and DFGs are complementary:** CFGs focus on control flow, while DFGs focus on data usage, both are important for comprehensive testing.
*   **Security is not an afterthought:** It should be integrated throughout the software development lifecycle.
*   **Layered Security Approach:** No single tool or technique guarantees complete security. A combination of manual and automated testing, code reviews, and secure coding practices is essential.
*   **Stay Updated:** The threat landscape and security best practices evolve rapidly. Continuous learning and tool updates are crucial.
*   **Tool Proficiency:** Understanding how to use and interpret the results from industry-standard tools is a valuable skill for software testers.
*   **Context Matters:** The specific tools and techniques used will depend on the type of application (web, mobile, desktop), the programming language, and the project's security requirements.

---

This concludes the study notes for Module 3, focusing on the application of graph-based testing and security testing with industry-standard tools through a case study. Remember to practice these concepts with real-world examples and explore the tools mentioned to gain practical expertise.
