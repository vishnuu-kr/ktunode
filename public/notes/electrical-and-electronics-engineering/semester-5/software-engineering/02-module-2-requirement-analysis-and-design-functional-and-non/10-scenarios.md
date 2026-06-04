---
title: "Scenarios"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36342"
status: "completed"
scrapedAt: "2026-05-23T16:24:17.567Z"
---
## Software Engineering: Module 2 - Requirement Analysis and Design: Scenarios

This module delves into the crucial early stages of software development: understanding what the software needs to do (requirements analysis) and how it will be built (design). We will focus specifically on the role and techniques of using **scenarios** in this process.

### 1. Introduction to Requirements and Design

*   **What are Requirements?**
    *   Statements that describe the services a system should provide and the constraints under which it must operate.
    *   **Functional Requirements:** Describe *what* the system should do. They define the behavior of the system.
    *   **Non-functional Requirements:** Describe *how* the system should perform. They define constraints on services or on the development process. (Pressman, 2014)
*   **What is Design?**
    *   The process of defining the architecture, components, interfaces, and other characteristics of a system or component. (Sommerville, 2015)
    *   It translates the "what" of requirements into the "how" of implementation.

### 2. The Role of Scenarios in Requirement Analysis

Scenarios are instrumental in understanding and communicating user needs, bridging the gap between abstract requirements and concrete system behavior.

*   **Definition:** A scenario is a narrative description of a sequence of events that occurs when a user interacts with a system to achieve a specific goal. (Sommerville, 2020)
*   **Purpose of Scenarios:**
    *   **Elicit Functional Requirements:** By walking through user interactions, hidden or implied requirements can be uncovered.
    *   **Clarify User Needs:** Scenarios provide concrete examples that make abstract requirements understandable to both stakeholders and developers.
    *   **Validate Requirements:** Stakeholders can review scenarios to confirm that the system will meet their needs.
    *   **Guide Design:** Scenarios illustrate how system components will interact to fulfill user goals.
    *   **Support Testing:** Scenarios form the basis for creating test cases to verify system functionality.
*   **Key Benefits of Using Scenarios:**
    *   **User-centric:** Focuses on how users will actually use the system.
    *   **Concrete:** Provides tangible examples, avoiding ambiguity.
    *   **Collaborative:** Facilitates communication between stakeholders and the development team.
    *   **Iterative:** Can be refined and expanded as understanding grows.

### 3. Types of Scenarios

Scenarios can be categorized based on their focus and purpose:

*   **Happy Path Scenarios (Primary Scenarios):**
    *   Describe the most common, successful, and direct way a user achieves a goal.
    *   Assume ideal conditions and no errors.
    *   **Example:** A user successfully logs into an online banking system by entering their correct username and password. (CO3)
*   **Alternative Path Scenarios (Secondary Scenarios):**
    *   Describe less common but still valid ways to achieve a goal.
    *   May involve slightly different sequences of actions or optional steps.
    *   **Example:** A user logs into the online banking system using their fingerprint authentication. (CO3)
*   **Exception Path Scenarios (Error Scenarios):**
    *   Describe what happens when something goes wrong, an error occurs, or an unexpected event happens.
    *   Focus on error handling, recovery, and user feedback.
    *   **Example:** A user enters an incorrect password multiple times and the system locks their account. (CO3)

### 4. Creating Effective Scenarios

The process of creating scenarios involves understanding the user, their goals, and the system's interactions.

*   **Identify Users/Actors:** Who will interact with the system? (e.g., customer, administrator, guest).
*   **Define User Goals:** What do these actors want to achieve using the system?
*   **Determine Use Cases (Optional but Recommended):** A use case is a broader description of a system function from an actor's perspective. Scenarios are specific instances of use cases.
*   **Structure a Scenario:** A typical scenario includes:
    *   **Scenario Name/Title:** A concise description of the goal.
    *   **Actor:** The user or system entity initiating the interaction.
    *   **Preconditions:** Conditions that must be true before the scenario begins.
    *   **Main Success Scenario (Happy Path):** Step-by-step description of the successful interaction.
    *   **Alternative Flows:** Other valid ways the goal can be achieved.
    *   **Exception Flows:** Steps describing error conditions and their handling.
    *   **Postconditions:** Conditions that must be true after the scenario is completed (successful or not).
*   **Writing Style:**
    *   Use clear, unambiguous language.
    *   Focus on observable actions and system responses.
    *   Be consistent in terminology.
    *   Avoid technical jargon where possible, especially when communicating with non-technical stakeholders.
*   **Example Scenario: Online Book Order**

    *   **Scenario Name:** Purchase a Book
    *   **Actor:** Customer
    *   **Preconditions:**
        *   The customer has an account and is logged in.
        *   The desired book is in stock.
        *   The customer has a valid payment method added to their account.
    *   **Main Success Scenario:**
        1.  Customer browses the book catalog and finds "The Pragmatic Programmer".
        2.  Customer clicks "Add to Cart" for "The Pragmatic Programmer".
        3.  The system displays the shopping cart with the book added.
        4.  Customer clicks "Checkout".
        5.  The system displays the order summary page, showing the book, quantity, price, and selected shipping address.
        6.  Customer clicks "Place Order".
        7.  The system processes the payment using the customer's default payment method.
        8.  The system confirms the order and displays an order number.
        9.  The system sends an order confirmation email to the customer.
    *   **Alternative Flow:** Customer chooses a different shipping address. (This would be a step inserted before "Place Order" to select or confirm the address.)
    *   **Exception Flow:** The desired book is out of stock.
        1.  Customer attempts to add "The Pragmatic Programmer" to the cart.
        2.  The system displays a message: "Sorry, 'The Pragmatic Programmer' is currently out of stock."
        3.  The customer cannot add the book to the cart.
    *   **Postconditions:**
        *   The order is successfully placed, or the customer is informed about the out-of-stock item.
        *   If the order is placed, the book is removed from available stock.
        *   The customer's account reflects the placed order.

### 5. Scenarios in Different Requirement Styles

*   **Use Case Driven Development:** Scenarios are the core artifacts. Each use case is elaborated with one or more scenarios. (Pressman, 2014)
*   **User Story Driven Development (Agile):** User stories (e.g., "As a [type of user], I want to [perform some task] so that [I can achieve some goal]") are often accompanied by acceptance criteria that are essentially mini-scenarios describing how the story's functionality should be tested. (Anderson, 2003, Poppendieck, 2006)
    *   **Example User Story:** "As a registered user, I want to reset my password so that I can regain access to my account if I forget it."
    *   **Acceptance Criteria (Scenarios):**
        1.  **Happy Path:** User enters their registered email, receives a reset link, clicks it, enters a new password twice, and successfully logs in with the new password.
        2.  **Invalid Email:** User enters an email not registered with an account, and receives an error message.
        3.  **Expired Link:** User clicks on an expired password reset link, and receives a message indicating the link is no longer valid.

### 6. Scenarios and Course Outcomes Alignment

*   **CO1: Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery.**
    *   Scenarios help understand user interactions, guiding the incremental development of features and providing a basis for validating prototypes.
*   **CO2: Describe agile methods, including the Agile Manifesto and agile project management practices.**
    *   In agile, user stories and their associated scenarios are fundamental for defining and delivering value iteratively. Collaboration and responding to change are facilitated by clear, scenario-based understanding.
*   **CO3: Prepare Software Requirement Specification and Software Design for a given problem.**
    *   Scenarios are direct inputs for writing functional requirements and can be used to illustrate design choices and expected behavior.
*   **CO4: Interpret object-oriented design principles, design patterns, software testing methods (including unit testing, integration testing, and test automation), and open-source licensing models (such as GPL, LGPL, and BSD).**
    *   Scenarios inform the design of objects and their interactions. They are crucial for creating integration and system test cases, and for verifying that the system behaves as expected.
*   **CO5: Describe software review techniques, DevOps practices and code management principles, and software evolution processes and maintenance strategies.**
    *   Scenarios can be used in peer reviews of requirements and design. They help in understanding the impact of changes during evolution and maintenance.
*   **CO6: Make use of software project management concepts while planning, estimation, scheduling, tracking and change management of a project, with proper application of SCRUM, Kanban and Lean frameworks.**
    *   Scenarios (often as user stories) are the "work items" that are planned, estimated, and tracked in agile frameworks like Scrum and Kanban. They provide clarity for team members.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. Scenarios in Practice (Textbook References)

*   **Sommerville (2015, 2020):** Emphasizes scenarios as a way to capture functional requirements and as a basis for usability engineering. The "Use Case Driven Approach" is a key concept where scenarios are central.
*   **Pressman (2014):** Discusses scenarios within the context of use cases and modeling. He highlights how scenarios help to identify requirements and serve as a foundation for test case development.
*   **Agile References (Anderson, Poppendieck):** While not explicitly using the term "scenario" as a standalone artifact, the concept is embedded within User Stories and Acceptance Criteria, which serve the same purpose of describing intended behavior from a user's perspective.

### 8. Important Points to Remember

*   **Scenarios are stories of interaction.** They are not just lists of requirements, but narratives.
*   **Happy paths, alternative paths, and exception paths are crucial.** All three types are needed for a comprehensive understanding.
*   **Clarity and consistency are key.** Vague or conflicting scenarios lead to misinterpretations.
*   **Scenarios are living documents.** They should be reviewed and updated as the project progresses.
*   **Scenarios connect requirements to design and testing.** They are a vital link in the software development lifecycle.
*   **In Agile, scenarios are often expressed as User Stories with Acceptance Criteria.**

### 9. Practice Questions and Exercises

**Question 1:**
What is the primary difference between a functional requirement and a non-functional requirement? Provide an example of each.

**Answer 1:**
A functional requirement describes what the system *should do* (its behavior), while a non-functional requirement describes *how* the system should perform or constraints on its operation.
*   **Functional Example:** The system shall allow users to search for products by name.
*   **Non-functional Example:** The search results page shall load within 2 seconds.

**Question 2:**
Describe the "happy path" scenario for logging into a website.

**Answer 2:**
Happy Path Scenario: Login
1.  User navigates to the login page.
2.  User enters their correct username in the username field.
3.  User enters their correct password in the password field.
4.  User clicks the "Login" button.
5.  The system authenticates the user.
6.  The system redirects the user to their personalized dashboard.

**Question 3:**
Why are exception path scenarios important in requirement analysis?

**Answer 3:**
Exception path scenarios are important because they help to identify and plan for potential errors or unexpected situations. This leads to more robust software that can handle failures gracefully, provide clear error messages to users, and potentially recover from errors, thus improving the overall user experience and system reliability.

**Question 4:**
How do scenarios relate to User Stories in agile development?

**Answer 4:**
In agile development, User Stories capture a user's need from their perspective ("As a [user type], I want to [action] so that [benefit]"). Scenarios, or more precisely, the step-by-step descriptions within acceptance criteria, detail *how* that user story should be fulfilled and how its success will be verified. They provide the concrete examples needed to understand and implement the User Story.

**Question 5 (Scenario Writing Exercise):**
Write a scenario (including happy and one exception path) for a user depositing money into an ATM.

**Answer 5 (Example Solution):**

**Scenario Name:** Deposit Cash
**Actor:** Bank Customer
**Preconditions:**
*   Customer has a valid ATM card.
*   Customer knows their PIN.
*   ATM has sufficient capacity for cash deposits.

**Main Success Scenario:**
1.  Customer inserts their ATM card into the card reader.
2.  The ATM prompts the customer to enter their PIN.
3.  Customer enters their correct PIN.
4.  The ATM displays a menu of options (e.g., Withdraw, Deposit, Balance Inquiry).
5.  Customer selects "Deposit".
6.  The ATM prompts the customer to select the type of deposit (e.g., Cash, Cheque).
7.  Customer selects "Cash".
8.  The ATM prompts the customer to insert the cash into the deposit slot.
9.  Customer inserts the cash into the deposit slot.
10. The ATM scans and counts the cash, displaying the amount.
11. The ATM asks the customer to confirm the amount.
12. Customer confirms the amount.
13. The ATM processes the deposit and dispenses a receipt.
14. The ATM prompts the customer to remove their card.
15. Customer removes their card.

**Exception Flow:** Insufficient Funds in ATM to process deposit (Hypothetical scenario, more common for withdrawals, but for demonstration, let's consider a limit) OR ATM machine error during counting.

**Exception Flow: ATM Error During Counting**
1.  ... (Steps 1-10 as above) ...
9.  Customer inserts the cash into the deposit slot.
10. The ATM attempts to scan and count the cash but encounters a mechanical error.
11. The ATM displays an error message: "Deposit cannot be processed due to a machine error. Please retrieve your cash and try again later or visit a branch."
12. The ATM returns the cash to the customer via the cash return slot.
13. The ATM prompts the customer to remove their card.
14. Customer removes their card.

This concludes the notes on Scenarios for Module 2. Remember to refer to your textbooks for deeper insights and additional examples.