---
title: "Reco-ng"
subject: "FUNDAMENTALS OF CYBER SECURITY"
module: "Module 1: Information Security Introduction"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be28"
status: "completed"
scrapedAt: "2026-05-20T16:54:21.656Z"
---
# FUNDAMENTALS OF CYBER SECURITY: Module 1 - Information Security Introduction: Reco-ng

## Learning Outcomes:

*   Understand the purpose and capabilities of Recon-ng.
*   Learn how to install and configure Recon-ng.
*   Master the basic usage of Recon-ng for information gathering.
*   Explore different Recon-ng modules for specific reconnaissance tasks.
*   Analyze the output and findings from Recon-ng scans.
*   Understand the ethical considerations surrounding the use of reconnaissance tools like Recon-ng.

## 1. Introduction to Recon-ng

*   **Definition:** Recon-ng is a powerful, open-source, web reconnaissance framework written in Python. It aims to automate the process of information gathering, particularly during the early stages of a penetration test or security assessment.

*   **Purpose:**
    *   **Information Gathering:** Automates the process of collecting information about target organizations and individuals.
    *   **Footprinting:**  Helps in building a profile of the target before launching more targeted attacks.
    *   **Vulnerability Assessment Support:** Provides information that can be used to identify potential vulnerabilities.
    *   **OSINT (Open Source Intelligence) Gathering:** Utilizes publicly available data to gather intelligence.

*   **Key Features:**
    *   **Modular Design:**  Consists of modules that perform specific tasks (e.g., searching search engines, scraping websites, resolving IPs).
    *   **Database Integration:** Stores collected data in a database (SQLite by default) for easy analysis and reporting.
    *   **Command-Line Interface (CLI):**  Operates through a user-friendly command-line interface.
    *   **Reporting Capabilities:** Provides ways to generate reports based on gathered information.
    *   **API Key Support:** Integrates with various APIs (e.g., Shodan, Hunter.io, VirusTotal) to enhance information gathering.

*   **Benefits of using Recon-ng:**
    *   **Automation:** Automates repetitive reconnaissance tasks, saving time and effort.
    *   **Organization:**  Organizes gathered information in a structured manner.
    *   **Efficiency:**  Speeds up the reconnaissance process.
    *   **Customization:** Allows for customization through modules and API integration.
    *   **Extensibility:**  New modules can be easily developed and added to the framework.

## 2. Installation and Configuration

*   **Prerequisites:**
    *   Python 3.6 or higher
    *   `pip` package installer

*   **Installation Steps (Linux):**
    1.  **Clone the Recon-ng Repository:**
        ```bash
        git clone https://github.com/lanmaster53/recon-ng.git
        ```
    2.  **Navigate to the Recon-ng Directory:**
        ```bash
        cd recon-ng
        ```
    3.  **Install Dependencies:**
        ```bash
        pip3 install -r requirements.txt
        ```
    4.  **Run Recon-ng:**
        ```bash
        ./recon-ng
        ```

*   **Alternative Installation (using Docker):**  This provides a containerized environment.
    ```bash
    docker pull lanmaster53/recon-ng
    docker run -it lanmaster53/recon-ng
    ```

*   **Configuration:**
    *   **API Keys:**  Many Recon-ng modules require API keys to access external services (e.g., Shodan, VirusTotal).  You need to obtain these keys from the respective service providers and configure them within Recon-ng.

        *   **Example:** To set a Shodan API key:
            ```recon-ng
            keys add shodan_api <your_shodan_api_key>
            ```

    *   **Proxy Configuration:**  If you need to use a proxy server, you can configure it within Recon-ng.
        ```recon-ng
        spus proxy <proxy_server_address>:<proxy_port>
        ```

    *   **Database Management:**  Recon-ng uses an SQLite database by default.  You can create or switch databases as needed.
        ```recon-ng
        db create <database_name>
        db connect <database_name>
        ```

## 3. Basic Usage of Recon-ng

*   **Launching Recon-ng:**
    ```bash
    ./recon-ng
    ```

*   **Command-Line Interface (CLI):**
    *   `help`: Displays a list of available commands.
    *   `show modules`: Lists all available modules.
    *   `load <module_name>`: Loads a specific module.
    *   `info`: Displays information about the current module.
    *   `options list`: Lists configurable options for the current module.
    *   `set <option_name> <value>`: Sets the value of a specific option.
    *   `run`: Executes the currently loaded module.
    *   `back`: Returns to the main menu.
    *   `exit`: Exits Recon-ng.

*   **Workflow Example: Finding Subdomains for a Target Domain (example.com)**

    1.  **Launch Recon-ng:**
        ```bash
        ./recon-ng
        ```

    2.  **Load `recon/domains-hosts/brute_force` module:** This module performs brute-force subdomain discovery.
        ```recon-ng
        use recon/domains-hosts/brute_force
        ```

    3.  **Set the `SOURCE` option to the target domain:**
        ```recon-ng
        set SOURCE example.com
        ```

    4.  **Run the module:**
        ```recon-ng
        run
        ```

    5.  **View the results:**
        ```recon-ng
        show hosts
        ```

*   **Workflow Example: Finding Email Addresses Associated with a Target Domain (example.com)**

    1. **Launch Recon-ng**
        ```bash
        ./recon-ng
        ```

    2. **Load `recon/domains-contacts/google_site_web` module:** This module searches Google for email addresses on the target domain's website.
        ```recon-ng
        use recon/domains-contacts/google_site_web
        ```

    3.  **Set the `SOURCE` option to the target domain:**
        ```recon-ng
        set SOURCE example.com
        ```

    4. **Run the module:**
        ```recon-ng
        run
        ```

    5. **View the results:**
        ```recon-ng
        show contacts
        ```

## 4. Recon-ng Modules

Recon-ng has a wide array of modules categorized based on the type of information they gather.  Here are some key categories and examples:

*   **Discovery Modules (recon/discover):** Used for discovering hosts and networks.
    *   `recon/discover/reverse_whois`:  Performs reverse WHOIS lookups.

*   **Domains Modules (recon/domains):** Used for gathering information about domains.
    *   `recon/domains-hosts/brute_force`: Brute-forces subdomains.
    *   `recon/domains-hosts/google_site_web`:  Searches Google for subdomains related to a domain.
    *   `recon/domains-contacts/google_site_web`: Searches Google for email addresses associated with a domain.
    *   `recon/domains-contacts/pgp_search`: Searches for PGP keys associated with email addresses found for the target domain.

*   **Credentials Modules (recon/credentials):** Used for searching for leaked credentials.

*   **Exploitation Modules (exploit):**  Although primarily a reconnaissance tool, some modules can be used for basic exploitation or vulnerability scanning.

*   **Reports Modules (reporting):** Used to generate reports from the gathered data.
    *   `reporting/html`: Generates an HTML report.

*   **Marketplace Modules (marketplace):** Allows you to install third-party modules.

*   **Important Modules to Remember:**
    *   `recon/companies-domains/whois_orgs`: Get domains associated with an organization through WHOIS lookups.
    *   `recon/netblocks-companies/cidr_whois`:  Find netblocks associated with a company.
    *   `recon/locations-contacts/ipinfodb`: Geolocation of IP addresses.

*   **Using the Marketplace:**
    *   `marketplace search <keyword>`: Search for modules in the marketplace.
    *   `marketplace install <module_name>`: Install a module from the marketplace.
    *   `marketplace update`: Update installed marketplace modules.

## 5. Analyzing Output and Findings

*   **Database Management:** Recon-ng stores all gathered information in a database.  You can query the database using the `show` command followed by the name of the table (e.g., `show hosts`, `show contacts`, `show vulnerabilities`).

*   **Interpreting Results:**
    *   **Hosts:**  Provides a list of discovered hosts and their associated IP addresses.
    *   **Contacts:**  Lists email addresses and associated names found during reconnaissance.
    *   **Vulnerabilities:** If exploitation modules are used, it may identify potential vulnerabilities.
    *   **Netblocks:**  Lists IP address ranges owned by the target organization.

*   **Reporting:** Generate reports using the `reporting` modules to consolidate findings in a readable format (e.g., HTML, CSV).  This simplifies the process of sharing the results with clients or team members.

*   **Data Export:** You can also export data from the database for further analysis in other tools.

## 6. Ethical Considerations

*   **Legal Compliance:** Ensure that you have the necessary permissions to perform reconnaissance activities on a target. Unauthorized reconnaissance can be illegal and unethical.

*   **Scope of Engagement:** Adhere strictly to the agreed-upon scope of engagement. Avoid gathering information outside of the authorized boundaries.

*   **Data Handling:** Protect the privacy of individuals and organizations. Handle sensitive data responsibly and in accordance with relevant privacy regulations (e.g., GDPR, CCPA).

*   **Disclosure:** Be transparent about the purpose of your reconnaissance activities. Disclose your findings to the target organization responsibly.

*   **Impact:** Minimize the impact of your activities on the target's systems. Avoid actions that could disrupt services or cause damage.

*   **Best Practices:**
    *   Obtain written consent before conducting reconnaissance activities.
    *   Clearly define the scope of the engagement.
    *   Implement appropriate security measures to protect sensitive data.
    *   Follow ethical hacking guidelines.

## Practice Questions and Exercises

1.  **How do you install Recon-ng on a Linux system?**
    *   **Answer:** Clone the repository, navigate to the directory, and install dependencies using `pip3 install -r requirements.txt`.

2.  **How do you set an API key for Shodan in Recon-ng?**
    *   **Answer:** Use the command `keys add shodan_api <your_shodan_api_key>`.

3.  **What Recon-ng module can be used to brute-force subdomains?**
    *   **Answer:** `recon/domains-hosts/brute_force`.

4.  **How do you list available modules in Recon-ng?**
    *   **Answer:** Use the command `show modules`.

5.  **How do you create an HTML report of your Recon-ng findings?**
    *   **Answer:** Load the `reporting/html` module, configure the options (e.g., `FILENAME`), and run the module.

6.  **Scenario:** You need to find email addresses associated with the domain `example.org`. Outline the steps you would take using Recon-ng.
    *   **Answer:**
        1.  Launch Recon-ng.
        2.  Load the `recon/domains-contacts/google_site_web` module.
        3.  Set the `SOURCE` option to `example.org`.
        4.  Run the module.
        5.  View the results using `show contacts`.

7.  **Explain the ethical considerations surrounding the use of Recon-ng.**
    *   **Answer:** Legal compliance (obtaining permissions), scope of engagement (staying within boundaries), data handling (protecting privacy), disclosure (being transparent), and minimizing impact (avoiding disruption).

8.  **You have discovered several subdomains using Recon-ng. How can you store and view these results within the tool?**
    *   **Answer:** Recon-ng automatically stores the results in the database. You can view the list of discovered hosts (subdomains) using the command `show hosts`.

9.  **What is the purpose of the Recon-ng marketplace?**
    *   **Answer:** The marketplace allows users to install and update third-party modules that extend the functionality of Recon-ng.

## Important Points to Remember

*   Recon-ng is a powerful reconnaissance framework but requires ethical use and proper authorization.
*   API keys are often necessary to leverage the full capabilities of many Recon-ng modules.
*   Understanding the available modules and their options is crucial for effective information gathering.
*   Always analyze and interpret the output of Recon-ng scans to draw meaningful conclusions.
*   Stay updated with the latest modules and techniques to maximize the effectiveness of Recon-ng.
*   Regularly review and update your API keys and configurations to ensure they are valid and secure.
*   Document your reconnaissance process and findings for future reference and reporting.
