---
title: "introduction to social choice setup"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 3: Introduction to mechanism design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5c8"
status: "completed"
scrapedAt: "2026-05-20T17:06:41.693Z"
---
# Module 3: Introduction to Mechanism Design

## Topic: Introduction to Social Choice Setup

---

### Learning Outcomes:

*   Understand the fundamental elements of the social choice setup.
*   Identify the key components: agents, alternatives, and preference relations.
*   Grasp the concept of a social welfare function and its role.
*   Recognize the challenges and limitations in aggregating individual preferences.
*   Familiarize with common preference orderings and their implications.

---

### 1. What is the Social Choice Setup?

The social choice setup is the foundational framework within mechanism design that deals with **aggregating individual preferences into a collective decision or outcome**. It's about how to translate what a group of individuals wants into a single choice that the group will collectively adopt.

**Key Idea:** We have multiple individuals (agents), each with their own opinions and desires about a set of possible outcomes (alternatives). The challenge is to combine these diverse individual preferences into a single, coherent group decision.

---

### 2. Key Components of the Social Choice Setup

#### 2.1. Agents (or Players)

*   **Definition:** The individuals or entities whose preferences we are considering.
*   **Notation:** Typically denoted by a set $N = \{1, 2, \dots, n\}$, where $n$ is the number of agents.
*   **Characteristics:**
    *   Each agent has their own set of preferences.
    *   They are assumed to be rational in their preferences (i.e., they can order alternatives consistently).

**Example:** In an election, the agents are the voters. In a committee deciding on a project, the agents are the committee members.

#### 2.2. Alternatives (or Outcomes)

*   **Definition:** The set of all possible outcomes or choices that the agents can choose from.
*   **Notation:** Typically denoted by a set $A = \{a_1, a_2, \dots, a_m\}$, where $m$ is the number of alternatives.
*   **Characteristics:**
    *   These are the options available for collective decision-making.
    *   The set of alternatives can be finite or infinite, but in most introductory settings, it's finite.

**Example:**
    *   In an election: The candidates running for office.
    *   In a committee: Different project proposals, different budget allocations, or different meeting times.
    *   In a public goods problem: Different levels of provision for a public good.
