---
title: "Learning from Rewards, Passive Reinforcement Learning, Active Reinforcement Learning, Generalization in Reinforcement Learning, Policy Search, Apprenticeship and Inverse Reinforcement Learning, Applications of Reinforcement Learning"
subject: "ARTIFICIAL INTELLIGENCE"
module: "Module 4: Reinforcement Learning :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b6e9"
status: "completed"
scrapedAt: "2026-05-20T16:43:12.837Z"
---
# ARTIFICIAL INTELLIGENCE: Module 4 - Reinforcement Learning

## Introduction

This module dives into Reinforcement Learning (RL), a paradigm where an agent learns to make decisions in an environment to maximize a notion of cumulative reward.  We'll explore passive and active RL, generalization techniques, policy search methods, apprenticeship learning, and real-world applications.

## 1. Learning Outcomes

By the end of this module, you should be able to:

*   Understand the fundamental principles of reinforcement learning and the concept of rewards.
*   Distinguish between passive and active reinforcement learning.
*   Implement simple reinforcement learning algorithms.
*   Apply generalization techniques to improve the performance of reinforcement learning agents.
*   Describe and apply policy search methods.
*   Explain the concept of apprenticeship and inverse reinforcement learning.
*   Identify various applications of reinforcement learning in different domains.

## 2. Learning from Rewards

### 2.1. Key Concepts and Definitions

*   **Agent:** The entity that interacts with the environment and learns to make decisions.
*   **Environment:** The world the agent interacts with.
*   **State (s):** A description of the environment at a particular moment in time.
*   **Action (a):** A choice made by the agent that affects the environment.
*   **Reward (r):** A scalar feedback signal that the agent receives after taking an action in a state.  It indicates how desirable the outcome of that action was.
*   **Policy (π):** A function that maps states to actions. π(s) specifies the action to take in state s. Can be deterministic (always the same action) or stochastic (probability distribution over actions).
*   **Value Function (V(s)):** The expected cumulative reward an agent will receive starting from a given state s, following a particular policy.
*   **Q-Value Function (Q(s, a)):** The expected cumulative reward an agent will receive starting from state s, taking action a, and then following a particular policy.
*   **Episodic Tasks:** Tasks with a clear start and end (e.g., game playing).  Also called continuing tasks.
*   **Continuing Tasks:** Tasks without a clear end (e.g., process control).

### 2.2. How Rewards Work

*   Rewards shape the agent's behavior.  The agent learns to take actions that lead to higher rewards.
*   Rewards can be sparse or dense. Sparse rewards are challenging because the agent receives little feedback, making exploration difficult.
*   Rewards can be positive or negative (penalties).
*   Rewards are often delayed; the immediate reward may not reflect the long-term consequences of an action.

### 2.3. Markov Decision Process (MDP)

*   RL is often formulated as an MDP.
*   An MDP is defined by:
    *   A set of states *S*
    *   A set of actions *A*
    *   A transition model *P(s' | s, a)*, which specifies the probability of transitioning to state *s'* after taking action *a* in state *s*.
    *   A reward function *R(s, a, s')*, which specifies the reward received after transitioning to state *s'* from state *s* by taking action *a*.
    *   A discount factor *γ* (gamma), which determines how much the agent values future rewards (0 ≤ γ ≤ 1).

### 2.4. Discount Factor (γ)

*   The discount factor discounts future rewards.  A value of γ close to 0 makes the agent myopic, focusing on immediate rewards.  A value close to 1 makes the agent consider long-term rewards.
*   Used to prevent infinite returns in continuing tasks.
*   Mathematically: Cumulative discounted reward = r<sub>t</sub> + γr<sub>t+1</sub> + γ<sup>2</sup>r<sub>t+2</sub> + ...

### 2.5. Example: Grid World

Imagine a simple grid world where an agent can move up, down, left, or right.
*   **States:** Each cell in the grid is a state.
*   **Actions:** Up, Down, Left, Right.
*   **Reward:** +1 for reaching a goal state, -1 for hitting a wall, -0.1 for each move (to encourage faster paths).
*   **Policy:** A set of instructions telling the agent which way to move from each cell.

### 2.6. Important Points to Remember

*   The goal of RL is to find an optimal policy that maximizes cumulative reward.
*   The reward function is crucial for shaping the agent's behavior.  Designing a good reward function can be challenging.
*   The discount factor balances immediate and future rewards.

## 3. Passive Reinforcement Learning

### 3.1. Definition

In passive RL, the agent follows a fixed policy (π) and tries to learn the value function V(s) or Q(s, a) associated with that policy.  The agent does *not* control its actions. It's purely observational.

### 3.2. Methods for Passive RL

*   **Direct Utility Estimation (DUE):**  Simple method. Agent observes episodes and estimates the utility (cumulative discounted reward) for each state. Then, averages the observed utilities for each state to estimate V(s).

    *   **Problem:** Assumes the agent sees every state frequently.  Doesn't generalize well if some states are rarely visited. Also, ignores the Markov property.

*   **Adaptive Dynamic Programming (ADP):** Learns the transition model *P(s' | s, a)* and the reward function *R(s, a, s')*. Then, uses dynamic programming (e.g., value iteration) to compute the optimal value function V(s).

    *   **Advantage:** More efficient than DUE, especially in environments with many states.
    *   **Disadvantage:** Requires learning the transition model, which can be difficult or impossible in complex environments. Computationally expensive for large state spaces.

*   **Temporal Difference (TD) Learning:** Learns the value function by updating estimates based on the difference between predicted and actual rewards over time.  Doesn't require learning the transition model.

    *   **TD(0) Update Rule:** `V(s) = V(s) + α * (R(s, a, s') + γV(s') - V(s))`
        *   `α`: Learning rate (0 < α ≤ 1). Controls how much the estimate is updated.
        *   `R(s, a, s')`: Immediate reward received.
        *   `γ`: Discount factor.
        *   `V(s')`: Estimated value of the next state.
        *   `(R(s, a, s') + γV(s') - V(s))`: Temporal difference error.

    *   **Advantage:** Simple, efficient, and doesn't require learning the transition model. Can learn from incomplete episodes.
    *   **Disadvantage:** Can be slower to converge than ADP in some cases.

### 3.3. Example: Robot Navigation with a Fixed Policy

A robot is programmed to follow a specific path through a warehouse.  The robot's task is to learn the value of each location (state) in the warehouse, given its fixed navigation policy.  It receives a reward of +1 when it reaches the charging station and -0.1 for each step taken.

### 3.4. Practice Question

Suppose an agent is following a fixed policy and observes the following sequence of states and rewards:

`s1, r=0, s2, r=1, s3, r=0, s4`

Assume γ = 0.5 and α = 0.5.  Initially, V(s1) = V(s2) = V(s3) = V(s4) = 0.  Use TD(0) learning to update the value function for s1, s2, and s3.

**Answer:**

*   **Update V(s1):** `V(s1) = 0 + 0.5 * (0 + 0.5 * 0 - 0) = 0`
*   **Update V(s2):** `V(s2) = 0 + 0.5 * (1 + 0.5 * 0 - 0) = 0.5`
*   **Update V(s3):** `V(s3) = 0 + 0.5 * (0 + 0.5 * 0 - 0) = 0`

### 3.5. Important Points to Remember

*   Passive RL focuses on *evaluating* a given policy, not on *finding* the best policy.
*   TD learning is a popular and efficient method for passive RL.
*   The learning rate α controls the speed of convergence.

## 4. Active Reinforcement Learning

### 4.1. Definition

In active RL, the agent *chooses* its actions with the goal of learning an optimal policy.  The agent actively explores the environment to discover which actions lead to the highest rewards.

### 4.2. Methods for Active RL

*   **Q-Learning:** A popular off-policy TD control algorithm.  Learns the optimal Q-value function Q*(s, a), which gives the expected cumulative reward for taking action *a* in state *s* and then following the optimal policy thereafter, *regardless of the policy being followed while learning*.

    *   **Q-Learning Update Rule:** `Q(s, a) = Q(s, a) + α * (R(s, a, s') + γ * max<sub>a'</sub> Q(s', a') - Q(s, a))`
        *   `α`: Learning rate.
        *   `R(s, a, s')`: Immediate reward.
        *   `γ`: Discount factor.
        *   `max<sub>a'</sub> Q(s', a')`: Maximum Q-value for the next state *s'*, across all possible actions *a'*. This represents the best action that could be taken in the *next* state.

*   **SARSA (State-Action-Reward-State-Action):** An on-policy TD control algorithm. Learns the Q-value function Q(s, a) for the *policy being followed* during learning.

    *   **SARSA Update Rule:** `Q(s, a) = Q(s, a) + α * (R(s, a, s') + γ * Q(s', a') - Q(s, a))`
        *   `a'` is the action *actually* taken in state s'. This is determined by the *current* policy being followed.

*   **Exploration vs. Exploitation:** A key challenge in active RL is balancing exploration (trying new actions to discover better rewards) and exploitation (taking actions that are known to yield high rewards).

    *   **ε-Greedy Exploration:** With probability ε, choose a random action; otherwise, choose the action with the highest Q-value.
    *   **Softmax Action Selection (Boltzmann Exploration):**  Assigns probabilities to actions based on their Q-values.  Actions with higher Q-values are more likely to be chosen, but actions with lower Q-values still have a chance of being selected.  The temperature parameter controls the degree of exploration.

### 4.3. Example: Robot Navigation with Active Learning

A robot needs to learn to navigate a maze to reach a goal. It receives a reward of +1 for reaching the goal, -1 for hitting a wall, and -0.1 for each move. The robot uses Q-learning with ε-greedy exploration to learn the optimal policy.  Initially, the robot's Q-values for all state-action pairs are set to 0.

### 4.4. Practice Question

Consider a simple environment with two states (s1, s2) and two actions (a1, a2). The agent starts in s1. Assume the following:

*   Q(s1, a1) = 1, Q(s1, a2) = 0, Q(s2, a1) = 0, Q(s2, a2) = 2
*   α = 0.5, γ = 0.9
*   The agent takes action a1 in s1, receives a reward of 0, and transitions to s2.

Use Q-learning to update Q(s1, a1).

**Answer:**

`Q(s1, a1) = 1 + 0.5 * (0 + 0.9 * max(0, 2) - 1) = 1 + 0.5 * (1.8 - 1) = 1 + 0.5 * 0.8 = 1.4`

### 4.5. SARSA vs. Q-Learning

*   **SARSA:** On-policy.  Learns the Q-values for the policy it's *currently* following. More cautious, especially in environments with stochastic transitions.  Tends to learn a safer, but potentially sub-optimal, policy.
*   **Q-Learning:** Off-policy. Learns the optimal Q-values, regardless of the policy being followed. Can be more aggressive and explore riskier options. May learn the optimal policy more quickly, but could be more prone to getting stuck in suboptimal paths during learning.

### 4.6. Important Points to Remember

*   Active RL involves a trade-off between exploration and exploitation.
*   Q-learning and SARSA are popular algorithms for active RL.
*   The choice between SARSA and Q-learning depends on the specific environment and the desired level of safety.

## 5. Generalization in Reinforcement Learning

### 5.1. The Problem

In many real-world environments, the state space is too large to represent and learn a value or Q-value for each state individually.  Generalization techniques allow the agent to learn from a limited number of experiences and apply that knowledge to unseen states.

### 5.2. Methods for Generalization

*   **Function Approximation:**  Instead of storing values for each state in a table, use a function (e.g., linear function, neural network) to approximate the value function or Q-value function.

    *   **Linear Function Approximation:** V(s) ≈ w<sup>T</sup>f(s), where w is a vector of weights and f(s) is a vector of features representing the state s.
    *   **Neural Networks:** Use neural networks to learn a complex, non-linear mapping from states to values or Q-values.  Deep Q-Networks (DQNs) are a popular example.

*   **State Aggregation:** Group similar states together into a single state.  Learn the value or Q-value for each aggregated state.
*   **Tile Coding:** A type of state aggregation that uses multiple overlapping tilings of the state space.
*   **Kernel Methods:** Use kernel functions to measure the similarity between states.  Can be used to generalize value functions or Q-value functions.

### 5.3. Example: Robot Navigation with Function Approximation

The robot in the maze now uses a neural network to approximate the Q-value function. The input to the neural network is a vector of features representing the robot's current location and the surrounding obstacles. The output of the neural network is a Q-value for each possible action (up, down, left, right).  The neural network is trained using Q-learning updates.  This allows the robot to generalize its knowledge to new locations in the maze that it hasn't visited before.

### 5.4. Important Points to Remember

*   Generalization is essential for applying RL to complex, real-world environments.
*   Function approximation is a powerful technique for generalization.
*   Choosing the right function approximator (e.g., linear function, neural network) depends on the complexity of the environment.

## 6. Policy Search

### 6.1. Definition

Instead of learning a value function or Q-value function, policy search methods directly search for the optimal policy.  This is often done by parameterizing the policy and then optimizing the parameters to maximize the expected reward.

### 6.2. Methods for Policy Search

*   **Parameterized Policies:** Define a policy as a function of a set of parameters, θ. The goal is to find the optimal values for θ.
*   **Hill Climbing:**  Start with a random policy and iteratively improve it by making small changes to the parameters. Evaluate the policy after each change and keep the change if it improves performance.

    *   **Advantage:** Simple to implement.
    *   **Disadvantage:** Can get stuck in local optima.

*   **Policy Gradients:** Estimate the gradient of the expected reward with respect to the policy parameters.  Use gradient ascent to update the parameters in the direction of the gradient.

    *   **Advantage:** Can escape local optima more easily than hill climbing.
    *   **Disadvantage:** Can be computationally expensive to estimate the gradient. High variance.

*   **Evolutionary Algorithms:** Use evolutionary techniques (e.g., mutation, crossover, selection) to evolve a population of policies.

### 6.3. Example: Training a Robot to Walk

Use a policy gradient method to train a simulated robot to walk. The policy is parameterized by a set of neural network weights. The robot receives a reward for moving forward and a penalty for falling down. The policy gradient algorithm iteratively adjusts the neural network weights to maximize the robot's forward progress.

### 6.4. Important Points to Remember

*   Policy search methods directly optimize the policy, without relying on value functions.
*   Policy gradients are a powerful and widely used policy search technique.
*   Policy search can be more efficient than value-based methods in some cases, especially when the state space is very large or continuous.

## 7. Apprenticeship and Inverse Reinforcement Learning

### 7.1. Definition

In apprenticeship learning (AL) and inverse reinforcement learning (IRL), the goal is to learn a policy or a reward function from expert demonstrations.  Instead of specifying the reward function directly, the agent observes an expert performing a task and tries to infer the expert's reward function or policy.

### 7.2. Approaches

*   **Apprenticeship Learning:** Assumes the reward function is known, and aims to learn a policy that matches the expert's performance.  Often uses behavior cloning (imitating the expert's actions directly) or reinforcement learning with the expert's reward function.
*   **Inverse Reinforcement Learning:** The reward function is *unknown*.  The goal is to infer the reward function that explains the expert's behavior. Once the reward function is learned, standard RL techniques can be used to learn a policy that maximizes the learned reward function.

### 7.3. Methods for IRL

*   **Maximum Margin Planning:**  Finds a reward function that makes the expert's trajectory have a significantly higher value than any other trajectory.
*   **Generative Adversarial Imitation Learning (GAIL):** Uses a generative adversarial network (GAN) to learn a policy that mimics the expert's behavior. The discriminator tries to distinguish between the expert's actions and the agent's actions, while the generator (policy) tries to fool the discriminator.

### 7.4. Example: Teaching a Robot to Drive

Observe an expert driver navigating a car through a city.  Use IRL to infer the driver's reward function (e.g., maximizing speed, minimizing collisions, following traffic laws).  Then, use RL to train a robot to drive in a similar manner.

### 7.5. Important Points to Remember

*   IRL is useful when it's difficult or impossible to specify a reward function directly.
*   IRL can be used to learn from human experts or from existing datasets of expert behavior.
*   GAIL is a powerful and widely used IRL technique.

## 8. Applications of Reinforcement Learning

### 8.1. Game Playing

*   **AlphaGo:**  Google DeepMind's AlphaGo program used RL to defeat the world's best Go players.  It combined Monte Carlo Tree Search with deep neural networks to learn the value function and policy.
*   **Atari Games:**  RL agents have achieved superhuman performance on many Atari games using deep reinforcement learning techniques.

### 8.2. Robotics

*   **Robot Control:** RL is used to train robots to perform complex tasks such as walking, grasping objects, and navigating environments.
*   **Autonomous Driving:** RL is being used to develop self-driving cars that can navigate traffic and make decisions in real-time.

### 8.3. Healthcare

*   **Personalized Treatment:** RL can be used to develop personalized treatment plans for patients based on their individual characteristics and medical history.
*   **Drug Discovery:** RL can be used to design new drugs and therapies.

### 8.4. Finance

*   **Algorithmic Trading:** RL can be used to develop trading strategies that maximize profits and minimize risks.
*   **Portfolio Management:** RL can be used to optimize investment portfolios.

### 8.5. Other Applications

*   **Recommender Systems:**  RL can be used to personalize recommendations to users.
*   **Resource Management:** RL can be used to optimize the allocation of resources in various systems, such as data centers and power grids.

### 8.6. Important Points to Remember

*   RL has a wide range of applications in various domains.
*   RL is particularly well-suited for tasks that involve sequential decision-making and delayed rewards.
*   The field of RL is rapidly evolving, with new algorithms and applications being developed all the time.

## 9. Summary

This module provided a comprehensive overview of reinforcement learning, covering learning from rewards, passive and active RL, generalization techniques, policy search methods, apprenticeship learning, and real-world applications. By understanding these concepts, you can apply RL to solve a wide range of challenging problems.
