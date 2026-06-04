---
title: "Introduction, Foundation and history of AI Agents and Environments;"
subject: "ARTIFICIAL INTELLIGENCE"
module: "Module 1: Introduction to Artificial Intelligence:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b6da"
status: "completed"
scrapedAt: "2026-05-20T16:43:04.397Z"
---
# ARTIFICIAL INTELLIGENCE - Module 1: Introduction to Artificial Intelligence

## Topic: Introduction, Foundation and History of AI Agents and Environments

### Learning Outcomes:

*   Understand the fundamental concepts and definitions of Artificial Intelligence (AI).
*   Identify the core disciplines and foundational influences contributing to AI.
*   Trace the historical development of AI, including key milestones and breakthroughs.
*   Define AI agents and their characteristics.
*   Describe different types of AI environments and their properties.
*   Understand the relationship between agents and environments in the context of AI.

---

## 1. Introduction to Artificial Intelligence (AI)

*   **Definition:** AI is the theory and development of computer systems able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.  More broadly, it can be defined as the science and engineering of making intelligent machines, especially intelligent computer programs.
*   **Goal:** To create intelligent systems that can reason, learn, perceive, and solve problems like humans do.
*   **Scope:** AI encompasses a wide range of subfields, including machine learning, natural language processing, computer vision, robotics, expert systems, and knowledge representation.
*   **Two Broad Approaches:**
    *   **Strong AI (Artificial General Intelligence - AGI):** Aims to create machines that possess general intelligence comparable to humans, capable of understanding, learning, and performing any intellectual task that a human being can.  This is still largely theoretical.
    *   **Weak AI (Narrow AI):** Focuses on creating machines that are intelligent for specific tasks. This is the type of AI we see in use today. Examples include spam filters, voice assistants, and recommendation systems.

## 2. Foundations of Artificial Intelligence

AI is a multidisciplinary field drawing upon knowledge from various disciplines:

*   **Philosophy:** Explores fundamental questions about the nature of knowledge, reasoning, mind, and consciousness. Key philosophical influences include:
    *   **Rationalism:** The belief that knowledge can be acquired through reason and logic, not just experience (e.g., Descartes).
    *   **Empiricism:** The belief that knowledge is primarily derived from sensory experience (e.g., Locke, Hume).
    *   **Materialism:** The view that only physical matter exists (e.g., Hobbes).

*   **Mathematics:** Provides the formal tools and techniques necessary for modeling and reasoning with AI systems.
    *   **Logic:**  Propositional logic, predicate logic, used for representing knowledge and reasoning.
    *   **Calculus:** Used in optimization and machine learning algorithms.
    *   **Probability:** Used for reasoning under uncertainty and building probabilistic models.
    *   **Linear Algebra:** Used for representing and manipulating data in machine learning.

*   **Neuroscience:** Provides insights into how the brain works, inspiring the development of artificial neural networks and other brain-inspired AI techniques.
    *   Understanding how biological neurons process information and communicate with each other.

*   **Psychology:** Studies human behavior and cognitive processes, informing the design of AI systems that can interact with humans effectively and mimic human intelligence.
    *   Cognitive psychology focuses on how people perceive, learn, remember, and use knowledge.

*   **Computer Engineering:** Provides the hardware and software infrastructure for building and running AI systems.
    *   Development of high-performance computing systems, specialized hardware (e.g., GPUs), and efficient algorithms.

*   **Control Theory:** Deals with the design and analysis of systems that can control their behavior to achieve specific goals.  Relevant to robotics and autonomous systems.
    *   Focus on designing systems that can maintain stability and achieve desired states.

*   **Linguistics:** Studies the structure and meaning of language, enabling the development of natural language processing (NLP) systems that can understand and generate human language.

## 3. History of Artificial Intelligence

*   **1943: McCulloch and Pitts:** Proposed a model of artificial neurons, laying the groundwork for neural networks.
*   **1950: Alan Turing:** Published "Computing Machinery and Intelligence," proposing the Turing test as a measure of machine intelligence.
*   **1956: Dartmouth Workshop:** Considered the official birth of AI as a field. Organized by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon.
*   **1950s-1960s: Early AI Programs:** Development of programs like the Logic Theorist (Newell and Simon) and ELIZA (Weizenbaum) which demonstrated early AI capabilities. Focus was on symbolic reasoning and problem-solving.
*   **1970s: The AI Winter:** Funding for AI research declined due to unmet expectations and limitations of early AI techniques.  Problems included limited computational power and the difficulty of representing real-world knowledge.
*   **1980s: Expert Systems:** Rule-based systems designed to mimic the reasoning of human experts in specific domains (e.g., medicine, finance). The rise of expert systems led to a resurgence of interest and funding in AI.
*   **Late 1980s - Early 1990s: Another AI Winter:** Expert systems proved brittle and difficult to maintain. Funding dried up again.
*   **1990s - Present: Machine Learning Revolution:** Advances in machine learning, particularly statistical learning techniques and the availability of large datasets and increased computing power, led to a resurgence of AI.
*   **Deep Learning (2010s-Present):** Deep learning, a subfield of machine learning using artificial neural networks with multiple layers, achieved breakthroughs in areas such as image recognition, speech recognition, and natural language processing.
*   **Key Milestones:**
    *   **1997:** Deep Blue (IBM) defeated Garry Kasparov in chess.
    *   **2011:** Watson (IBM) won Jeopardy! against human champions.
    *   **2012:** Deep learning revolutionized image recognition with AlexNet.
    *   **2016:** AlphaGo (DeepMind) defeated Lee Sedol in Go.
    *   **Present:** Rapid advancements in areas like self-driving cars, natural language processing, and AI-powered healthcare.

## 4. AI Agents

*   **Definition:** An AI agent is anything that can perceive its environment through *sensors* and act upon that environment through *actuators*.  Agents can be human-like robots, software bots, or even simple thermostats.
*   **Key Components:**
    *   **Sensors:** Devices that perceive the environment (e.g., cameras, microphones, GPS).
    *   **Actuators:** Devices that act upon the environment (e.g., motors, displays, speakers).
    *   **Agent Function:** A mathematical function that maps percept sequences to actions:  *f: P* → *A* (where P is the percept history and A is the action space).  This function embodies the agent's intelligence.
    *   **Agent Program:**  An implementation of the agent function.  This is the actual code that the agent executes.

*   **Rationality:** A rational agent is one that acts so as to achieve the best outcome or, when there is uncertainty, the best *expected* outcome. Rationality depends on:
    *   The performance measure (what constitutes success for the agent).
    *   The agent's prior knowledge of the environment.
    *   The actions that the agent can take.
    *   The agent's percept sequence to date.
*   **Types of Agents (Based on Architecture):**
    *   **Simple Reflex Agents:**  Select actions based only on the current percept, ignoring percept history.  Simple and fast, but limited in complex environments. (e.g., a thermostat reacting to the current temperature).
    *   **Model-Based Reflex Agents:** Maintain an internal *model* of the world based on percept history.  Can handle partially observable environments.  (e.g., a robot that tracks the location of obstacles).
    *   **Goal-Based Agents:**  Select actions that will achieve specific goals. Requires a *goal* description and the ability to search for a sequence of actions that lead to the goal. (e.g., a navigation system finding the shortest route to a destination).
    *   **Utility-Based Agents:**  Select actions that maximize their *utility* or happiness. Utility is a measure of how desirable a state of the world is. More sophisticated than goal-based agents, as they can handle conflicting goals and uncertainty. (e.g., a self-driving car optimizing for safety, speed, and fuel efficiency).
    *   **Learning Agents:** Can improve their performance over time by learning from experience. They have a *learning element* that modifies the agent's internal knowledge and decision-making processes. (e.g., a spam filter that learns to identify new spam emails).

## 5. AI Environments

*   **Definition:** The environment is the world in which an agent operates. It provides the agent with percepts and receives the agent's actions.
*   **Properties of Environments:**

    *   **Fully Observable vs. Partially Observable:**
        *   **Fully Observable:** The agent can access the complete state of the environment at each point in time through its sensors. (e.g., a chess game where the agent can see the position of all the pieces).
        *   **Partially Observable:** The agent can only access a limited amount of information about the environment.  The agent must maintain an internal state to keep track of the world. (e.g., a robot navigating a maze with limited sensor range).

    *   **Deterministic vs. Stochastic:**
        *   **Deterministic:** The next state of the environment is completely determined by the current state and the agent's action. (e.g., a vacuum cleaner in a simple room where each action has a predictable outcome).
        *   **Stochastic:** The next state of the environment is not fully determined by the current state and the agent's action; there is some randomness involved. (e.g., a robot navigating in a crowded environment where other agents' movements are unpredictable).

    *   **Episodic vs. Sequential:**
        *   **Episodic:** The agent's experience is divided into independent *episodes*. The choice of action in one episode does not affect future episodes. (e.g., classifying images – each image can be classified independently).
        *   **Sequential:** The current decision affects all future decisions.  Long-term planning is required. (e.g., playing chess – each move affects the future game state).

    *   **Static vs. Dynamic:**
        *   **Static:** The environment does not change while the agent is deliberating or acting. (e.g., a crossword puzzle).
        *   **Dynamic:** The environment can change while the agent is deliberating or acting. Requires continuous monitoring and quick reactions. (e.g., a self-driving car navigating in traffic).

    *   **Discrete vs. Continuous:**
        *   **Discrete:** The environment has a finite number of distinct states and actions. (e.g., a chess game).
        *   **Continuous:** The environment has a continuous state space and action space. (e.g., driving a car, controlling the temperature of a room).

    *   **Single-Agent vs. Multi-Agent:**
        *   **Single-Agent:** The environment contains only one agent.
        *   **Multi-Agent:** The environment contains multiple agents that can interact with each other, possibly cooperatively or competitively. (e.g., a soccer game, a stock market).

## 6. Agent-Environment Relationship

*   The agent *perceives* the environment through its sensors.
*   The environment *receives* the agent's actions.
*   The agent's goal is to act in a way that achieves the best possible outcome according to its performance measure, considering the environment's properties and dynamics.  The agent must be able to adapt to the environment to succeed.

---

## Practice Questions/Exercises:

**1. Define Artificial Intelligence. Explain the difference between Strong AI and Weak AI.**
*   **Answer:** AI is the theory and development of computer systems able to perform tasks that normally require human intelligence. Strong AI (AGI) aims to create machines with general intelligence comparable to humans, while Weak AI (Narrow AI) focuses on creating machines intelligent for specific tasks.

**2. List three foundational disciplines of AI and explain how they contribute to the field.**
*   **Answer:**
    *   **Mathematics:** Provides the formal tools and techniques for modeling and reasoning.
    *   **Neuroscience:** Provides insights into how the brain works, inspiring AI techniques.
    *   **Psychology:** Studies human behavior and cognition, informing the design of human-like AI.

**3. Describe the Turing Test. What are its strengths and weaknesses?**
*   **Answer:** The Turing Test is a test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human. A human evaluator engages in natural language conversations with both a human and a machine, without knowing which is which. If the evaluator cannot reliably distinguish the machine from the human, the machine is said to have passed the test.
    *   **Strengths:** Provides a concrete goal for AI research; focuses on observable behavior.
    *   **Weaknesses:** Can be passed through trickery or mimicry without true understanding; may not be a good measure of intelligence.

**4. What is an AI agent? Give an example of an AI agent and describe its sensors and actuators.**
*   **Answer:** An AI agent is anything that can perceive its environment through sensors and act upon that environment through actuators.
    *   **Example:** A self-driving car.
    *   **Sensors:** Cameras, radar, lidar, GPS, inertial measurement unit (IMU).
    *   **Actuators:** Steering wheel, accelerator, brakes, turn signals.

**5. Classify the following environments according to their properties (fully/partially observable, deterministic/stochastic, episodic/sequential, static/dynamic, discrete/continuous, single/multi-agent):**
    *   **a) Playing Chess:** Fully Observable, Deterministic, Sequential, Static, Discrete, Multi-agent
    *   **b) Playing Poker:** Partially Observable, Stochastic, Sequential, Static, Multi-agent
    *   **c) Vacuum Cleaning Robot in a simple room:** Partially Observable (depending on sensor range), Deterministic (if no external factors), Sequential, Dynamic (if people or pets enter), Discrete, Single-agent
    *   **d) Image Classification:** Fully Observable, Deterministic, Episodic, Static, Discrete, Single-agent
    *   **e) Self-driving car driving in city:** Partially Observable, Stochastic, Sequential, Dynamic, Multi-agent

**6. Explain the difference between a goal-based agent and a utility-based agent.**
*   **Answer:** A goal-based agent selects actions that will achieve specific goals. A utility-based agent selects actions that maximize its utility or happiness, which is a measure of how desirable a state of the world is. Utility-based agents can handle conflicting goals and uncertainty, while goal-based agents typically have a single, well-defined goal.

---

## Important Points to Remember:

*   AI is a broad field with diverse applications.
*   The foundations of AI are multidisciplinary, drawing on knowledge from philosophy, mathematics, neuroscience, psychology, computer engineering, control theory, and linguistics.
*   The history of AI has been marked by periods of optimism and progress, followed by periods of disillusionment and funding cuts.
*   AI agents are entities that perceive their environment and act upon it.
*   Environments can be classified based on their properties, which influence the design of AI agents.
*   The relationship between agents and environments is crucial for understanding how AI systems work and how they can be improved.
