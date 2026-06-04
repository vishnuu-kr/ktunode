---
title: "Affine maximizers"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 4: Introduction to VCG mechanism"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5d7"
status: "completed"
scrapedAt: "2026-05-20T17:06:51.180Z"
---
# Game Theory and Mechanism Design: Module 4 - Introduction to VCG Mechanism

## Topic: Affine Maximizers

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the concept of affine maximizers** in the context of mechanism design.
*   **Identify the properties of affine maximizers** relevant to VCG mechanisms.
*   **Recognize how affine maximizers relate to welfare maximization.**
*   **Appreciate the role of affine maximizers in ensuring desirable outcomes** in VCG mechanisms.
*   **Solve problems involving affine maximizers** in simple mechanism design settings.

---

### 1. Introduction to Affine Maximizers

In mechanism design, particularly when dealing with VCG (Vickrey-Clarke-Groves) mechanisms, we often aim to allocate resources or make decisions in a way that maximizes social welfare. Social welfare is typically defined as the sum of the utilities of all agents. However, agents don't always directly report their true utilities. They might have incentives to misreport to gain an advantage.

An **affine maximizer** is a type of agent whose utility function has a specific linear structure. Understanding this structure is crucial because it allows us to design mechanisms that can elicit truthful preferences even when agents have these specific utility forms.

---

### 2. Key Concepts and Definitions

#### 2.1. Utility Functions

*   **Utility Function ($u_i$):** A function that assigns a numerical value to each possible outcome for agent $i$. Higher values indicate more preferred outcomes.
*   **Outcome ($x$):** A specific allocation of resources or a decision made by the mechanism.

#### 2.2. Social Welfare

*   **Social Welfare (W):** The sum of the utilities of all agents for a given outcome.
    $W(x) = \sum_{i \in N} u_i(x)$
    where $N$ is the set of agents.

#### 2.3. Affine Utility Function

An agent $i$ has an **affine utility function** if their utility for an outcome $x$ can be expressed in the following form:

$u_i(x) = a_i \cdot v_i(x) + b_i$

where:
*   $a_i$ is a **positive scalar** (usually $a_i > 0$). This scalar represents a scaling factor for the agent's underlying valuation.
*   $v_i(x)$ is the agent's **underlying valuation** or "base" utility for outcome $x$. This captures the intrinsic desirability of the outcome for agent $i$.
*   $b_i$ is a **constant scalar** (often representing a baseline utility or an externality).

**Important Note:** For the purpose of analyzing optimality and truthfulness in VCG mechanisms, the constant $b_i$ can often be ignored because it doesn't affect which outcome is preferred. The *differences* in utility matter for ranking outcomes. The positive scalar $a_i$ is more significant as it scales the impact of the outcome on the agent's utility.

#### 2.4. Affine Maximizer

An agent $i$ is an **affine maximizer** if their reported utility function $u_i^{rep}(x)$ is of the affine form:

$u_i^{rep}(x) = a_i \cdot v_i^{rep}(x) + b_i$

where $v_i^{rep}(x)$ is the agent'
