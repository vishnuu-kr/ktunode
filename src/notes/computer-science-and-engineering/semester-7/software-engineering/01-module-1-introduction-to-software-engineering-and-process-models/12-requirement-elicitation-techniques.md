---
title: "Requirement elicitation techniques"
subject: "SOFTWARE ENGINEERING"
module: "Module 1: Introduction to Software Engineering and Process Models "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c886"
status: "completed"
scrapedAt: "2026-05-20T17:10:56.743Z"
---
# Software Engineering: Module 1 - Introduction to Software Engineering and Process Models

## Topic: Requirement Elicitation Techniques

---

### Learning Outcomes Covered:

*   **Understanding the importance of requirement elicitation in the software development lifecycle.**
*   **Identifying and describing common requirement elicitation techniques.**
*   **Explaining the strengths and weaknesses of different requirement elicitation techniques.**
*   **Selecting appropriate requirement elicitation techniques based on project context.**

---

### 1. Introduction to Requirement Elicitation

#### 1.1 What are Requirements?

*   **Definition:** Requirements are statements of what the system should do (functional requirements) and the qualities or constraints it must adhere to (non-functional requirements). They define the needs and expectations of stakeholders for a software product.

#### 1.2 The Importance of Requirement Elicitation

*   **Foundation of Software Development:** Requirements form the bedrock of the entire software development process. Incorrect or incomplete requirements lead to costly rework, project delays, and ultimately, a product that fails to meet user needs.
*   **Stakeholder Satisfaction:** Effective elicitation ensures that the needs and expectations of all relevant stakeholders (users, clients, developers, etc.) are captured and understood.
*   **Reducing Rework and Costs:** Identifying and clarifying requirements early in the lifecycle significantly reduces the cost and effort associated with fixing errors later on.
*   **Project Success:** Well-defined requirements are a key predictor of project success.

#### 1.3 Challenges in Requirement Elicitation

*   **Incomplete or Ambiguous Information:** Stakeholders may not fully understand what they need or may express their needs in vague terms.
*   **Conflicting Requirements:** Different stakeholders may have competing needs or priorities.
*   **Unspoken Needs:** Some requirements may be implicit and not explicitly stated by stakeholders.
*   **Changing Requirements:** Requirements can evolve over time due to market changes, user feedback, or new insights.
*   **Communication Barriers:** Differences in technical understanding, language, or culture can hinder effective communication.
*   **Difficulty in Visualizing the Future System:** Stakeholders might struggle to imagine and articulate the functionalities of a system they have never seen before.

---

### 2. Common Requirement Elicitation Techniques

This section details various methods used to gather requirements from stakeholders.

#### 2.1 Interviews

*   **Description:** A direct conversation between a requirement engineer and a stakeholder to gather information. Can be structured (predefined questions) or unstructured (open-ended discussion).
*   **Key Concepts:**
    *   **Open-ended questions:** Encourage detailed responses (e.g., "Describe your typical workflow for processing an order?").
    *   **Closed-ended questions:** Elicit specific, often yes/no answers (e.g., "Does the system need to generate reports?").
    *   **Probing questions:** Follow-up questions to clarify or elicit more detail (e.g., "Can you elaborate on what you mean by 'user-friendly'?").
*   **Strengths:**
    *   Allows for in-depth understanding of user needs and context.
    *   Builds rapport with stakeholders.
    *   Can uncover unspoken needs through careful observation and probing.
*   **Weaknesses:**
    *   Can be time-consuming and expensive, especially for large projects.
    *   Relies heavily on the interviewer's skill in asking questions and interpreting answers.
    *   May lead to biased or incomplete information if stakeholders are not forthcoming.
    *   Difficult to capture complex system interactions.
*   **Example:** A software engineer interviewing a sales representative about their current customer relationship management (CRM) process to understand features needed in a new CRM system.

#### 2.2 Questionnaires/Surveys

*   **Description:** A set of written questions distributed to a large number of stakeholders.
*   **Key Concepts:**
    *   **Structured questionnaires:** Primarily use closed-ended questions with predefined answer choices.
    *   **Unstructured questionnaires:** May include open-ended questions to allow for free-form responses.
*   **Strengths:**
    *   Efficient for gathering information from a large, geographically dispersed group.
    *   Cost-effective.
    *   Provides a structured way to collect data.
*   **Weaknesses:**
    *   Limited ability to probe for deeper understanding or clarify ambiguities.
    *   Low response rates can be an issue.
    *   May not capture the nuances of user needs.
    *   Questions need to be very carefully phrased to avoid misinterpretation.
*   **Example:** A university sending out a survey to students to gather feedback on the usability of a new online learning portal.

#### 2.3 Workshops/Focus Groups

*   **Description:** Facilitated meetings where a group of stakeholders collaborate to discuss, define, and prioritize requirements.
*   **Key Concepts:**
    *   **Facilitator:** Guides the discussion and ensures objectives are met.
    *   **Brainstorming:** Generating a wide range of ideas.
    *   **Group consensus:** Aiming for agreement among participants.
*   **Strengths:**
    *   Facilitates collaboration and idea generation.
    *   Can resolve conflicting requirements through discussion and negotiation.
    *   Faster than individual interviews for gathering input from multiple people.
    *   Encourages active participation.
*   **Weaknesses:**
    *   Requires careful planning and facilitation to be effective.
    *   Dominant personalities can overshadow others.
    *   Logistical challenges in scheduling and coordinating.
    *   Potential for groupthink or premature consensus.
*   **Example:** Conducting a workshop with representatives from different departments (e.g., marketing, finance, customer support) to define the requirements for a new company website.

#### 2.4 Document Analysis

*   **Description:** Reviewing existing documents, such as user manuals, business process descriptions, existing system specifications, and competitor analysis, to identify requirements.
*   **Key Concepts:**
    *   **Requirements tracing:** Linking new requirements to existing documents.
    *   **Gap analysis:** Identifying missing information or outdated requirements.
*   **Strengths:**
    *   Provides context and existing information about the domain.
    *   Can identify implicit requirements that stakeholders might overlook.
    *   Cost-effective if documents are readily available.
*   **Weaknesses:**
    *   Documents may be outdated, incomplete, or inaccurate.
    *   Requires skill in interpreting technical or business jargon.
    *   May not reflect current user needs or future system goals.
*   **Example:** Analyzing the user manual of a legacy system to understand its functionalities before developing a replacement system.

#### 2.5 Prototyping

*   **Description:** Creating a preliminary version or model of the software that allows stakeholders to interact with and provide feedback on.
*   **Key Concepts:**
    *   **Throwaway prototyping:** Prototype is discarded after requirements are clarified.
    *   **Evolutionary prototyping:** Prototype evolves into the final system.
    *   **UI mockups/wireframes:** Visual representations of the user interface.
    *   **Interactive prototypes:** Functional, albeit limited, versions of the system.
*   **Strengths:**
    *   Provides concrete examples that stakeholders can understand and react to.
    *   Helps to clarify user interface and interaction design.
    *   Reduces ambiguity and misunderstanding.
    *   Early identification of usability issues.
*   **Weaknesses:**
    *   Stakeholders may focus too much on the prototype's appearance rather than core functionality.
    *   Can lead to scope creep if not managed carefully.
    *   Developing a prototype can be time-consuming and costly.
    *   May create unrealistic expectations if the prototype is too sophisticated.
*   **Example:** Creating a clickable mockup of a mobile application's login screen and user dashboard for potential users to test and provide feedback on the navigation and layout.

#### 2.6 Observation (Ethnography)

*   **Description:** Directly observing users performing their tasks in their natural work environment to understand their workflow, pain points, and implicit needs.
*   **Key Concepts:**
    *   **Contextual inquiry:** Observing users while asking questions about their actions.
    *   **Participant observation:** The observer actively participates in the user's activities.
*   **Strengths:**
    *   Excellent for uncovering implicit requirements and workarounds that users don't articulate.
    *   Provides a realistic understanding of how users actually work.
    *   Captures valuable insights into the user's environment and context.
*   **Weaknesses:**
    *   Can be very time-consuming and resource-intensive.
    *   The presence of the observer might alter user behavior (Hawthorne effect).
    *   Requires skilled observers to interpret subtle cues.
    *   May not be feasible for all types of systems or user groups.
*   **Example:** A software engineer spending a day shadowing a customer service agent to understand the challenges they face when using the current ticketing system.

#### 2.7 Scenarios and Use Cases

*   **Description:** Describing how users will interact with the system to achieve specific goals.
    *   **Scenarios:** Informal, narrative descriptions of a user's interaction with the system.
    *   **Use Cases:** More formal, structured descriptions of system functionality from an external actor's perspective.
*   **Key Concepts:**
    *   **Actor:** An entity (human or external system) that interacts with the system.
    *   **Preconditions:** Conditions that must be true before a use case can begin.
    *   **Postconditions:** Conditions that must be true after a use case completes successfully.
    *   **Basic Flow (Happy Path):** The typical sequence of steps.
    *   **Alternative Flows:** Variations or exceptions to the basic flow.
*   **Strengths:**
    *   Focuses on user goals and how the system will support them.
    *   Helps in understanding system behavior and interactions.
    *   Provides a basis for test case generation.
    *   Good for communicating functional requirements to stakeholders.
*   **Weaknesses:**
    *   Can be challenging to capture all possible scenarios or edge cases.
    *   May require training for stakeholders to understand and contribute to them.
    *   Primarily focuses on functional requirements, less on non-functional ones.
*   **Example:**
    *   **Scenario:** "Sarah, a student, needs to find a book in the library. She logs into the library's website, searches for 'Introduction to Algorithms,' and finds that it's available at the main branch."
    *   **Use Case (simplified):**
        *   **Use Case Name:** Search for Book
        *   **Actor:** Student
        *   **Precondition:** Student is logged in.
        *   **Basic Flow:**
            1.  Student enters book title in search bar.
            2.  System displays search results.
            3.  Student selects a book from the results.
        *   **Postcondition:** Student sees details of the selected book.

#### 2.8 Brainstorming

*   **Description:** A group creativity technique used to generate a large number of ideas in a short period, without initial criticism.
*   **Key Concepts:**
    *   **No criticism:** All ideas are welcome initially.
    *   **Quantity over quality:** Aim for as many ideas as possible.
    *   **Encourage wild ideas:** Out-of-the-box thinking.
    *   **Build on others' ideas:** Synergy.
*   **Strengths:**
    *   Generates a wide range of potential requirements and solutions.
    *   Encourages participation from all team members.
    *   Can uncover innovative ideas.
*   **Weaknesses:**
    *   Needs good facilitation to stay focused and productive.
    *   Raw ideas need further refinement and analysis.
    *   Can become chaotic without structure.
*   **Example:** A team brainstorming features for a new e-commerce platform, generating ideas like "wishlist functionality," "product comparison tool," "personalized recommendations," "gift wrapping options."

---

### 3. Selecting Appropriate Elicitation Techniques

The choice of techniques depends on several factors:

*   **Project Size and Complexity:** Large, complex projects may require a combination of techniques.
*   **Stakeholder Availability and Location:** Geographically dispersed stakeholders might favor surveys or remote workshops.
*   **Type of Requirements:** User interface requirements are well-suited for prototyping, while business process requirements might benefit from interviews and document analysis.
*   **Project Budget and Timeline:** Some techniques are more resource-intensive than others.
*   **Team Expertise:** The skill set of the requirements engineering team.
*   **Organizational Culture:** The preferred communication and collaboration methods within the organization.

**General Strategy:** Often, a combination of techniques is most effective. For example, conducting interviews to understand high-level needs, followed by workshops to refine and prioritize, and then prototyping to validate UI designs.

---

### 4. Practice Questions and Exercises

**Question 1:**
A software project aims to develop a new online banking system for a large national bank. The bank has thousands of customers and multiple internal departments (e.g., customer service, fraud detection, marketing) that will use the system. Which requirement elicitation technique would be most suitable for gathering initial requirements from a broad range of customers, and why?

**Answer 1:**
A **Questionnaire/Survey** would be most suitable for gathering initial requirements from a broad range of customers.
*   **Reasoning:** Due to the large number of customers and their geographical dispersion, conducting individual interviews would be impractical and costly. Surveys allow for efficient data collection from a large audience. While they have limitations in probing deeply, they are excellent for understanding general preferences, common needs, and identifying key areas for further investigation. Follow-up techniques like focus groups or targeted interviews could then be used for deeper dives.

**Question 2:**
You are developing a system for air traffic controllers. The system needs to display radar information, flight plans, and communication logs. The users are highly trained professionals, and the consequences of errors are severe. Which elicitation technique would be crucial for understanding the critical workflows and potential failure points, and why?

**Answer 2:**
**Observation (Ethnography) and Document Analysis** would be crucial.
*   **Reasoning:**
    *   **Observation:** Directly observing air traffic controllers in their operational environment is essential. Their work is highly complex, involves real-time decision-making, and has implicit knowledge that they might not articulate easily. Observation can reveal critical workflows, stress factors, and workarounds that are vital for system design.
    *   **Document Analysis:** Existing operational procedures, safety manuals, and protocols used by air traffic controllers will provide a foundational understanding of the domain and established safety requirements. This ensures that the new system adheres to existing standards and best practices. Interviews would also be important, but observation provides the context that interviews might miss.

**Question 3:**
Describe a scenario where using **Prototyping** as a requirement elicitation technique would be highly beneficial.

**Answer 3:**
Prototyping would be highly beneficial when developing a new user interface for a mobile application. For instance, if the goal is to create an intuitive and engaging interface for a recipe app, a clickable prototype of the recipe browsing, searching, and cooking modes can be shown to potential users. This allows them to:
*   Experience the navigation flow.
*   Provide feedback on the layout and button placement.
*   Suggest improvements to how recipes are displayed or ingredients are managed.
*   Identify any usability issues before significant development effort is invested, ensuring the final product is user-friendly and meets user expectations for interaction.

---

### 5. Important Points to Remember

*   **No single technique is universally best.** A combination is often most effective.
*   **Understand your stakeholders.** Their expertise, availability, and location influence technique selection.
*   **Be aware of the limitations of each technique.** Always consider how to mitigate them.
*   **Requirement elicitation is an iterative process.** You'll likely revisit techniques as your understanding evolves.
*   **Documentation is key.** Thoroughly document all gathered requirements and the process used to elicit them.
*   **Active listening and effective communication are paramount.**
*   **Focus on understanding the "why" behind a request**, not just the "what."

---
This concludes the notes for Requirement Elicitation Techniques. Remember to review and practice applying these concepts.
