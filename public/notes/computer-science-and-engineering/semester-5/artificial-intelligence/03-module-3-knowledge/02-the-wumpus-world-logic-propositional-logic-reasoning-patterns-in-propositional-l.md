---
title: "The Wumpus World, Logic, Propositional Logic, Reasoning Patterns in Propositional Logic, First order logic, Inference in first order logic, propositional vs. first order inference, unification & lifts forward chaining, Backward chaining."
subject: "ARTIFICIAL INTELLIGENCE"
module: "Module 3: Knowledge"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b6e6"
status: "completed"
scrapedAt: "2026-05-20T16:43:11.387Z"
---
# ARTIFICIAL INTELLIGENCE - Module 3: Knowledge - Wumpus World & Logic

## Learning Outcomes:

*   Understand the Wumpus World environment and its challenges for AI agents.
*   Define and differentiate between logic, propositional logic, and first-order logic.
*   Apply reasoning patterns in propositional logic (modus ponens, etc.) to derive conclusions.
*   Translate English sentences into first-order logic and vice versa.
*   Explain inference in first-order logic and differentiate it from propositional inference.
*   Understand the concept of unification and its role in first-order logic inference.
*   Describe and compare forward and backward chaining inference algorithms.

## 1. The Wumpus World

*   **Definition:** A classic AI environment used to illustrate knowledge representation, reasoning, and planning under uncertainty.

*   **Description:**  An agent navigates a cave (grid of rooms) with the goal of finding gold and escaping without being killed by the Wumpus or falling into a pit.

*   **Elements of the Wumpus World:**
    *   **Cave:** A grid of rooms.
    *   **Agent:**  The AI tasked with finding gold.
    *   **Gold:** The agent's objective.
    *   **Wumpus:** A creature that kills the agent if it enters the same room.
    *   **Pits:**  Rooms with bottomless pits, also lethal to the agent.
    *   **Breeze:**  A breeze can be felt in rooms adjacent to pits.
    *   **Stench:** A stench can be smelled in rooms adjacent to the Wumpus.

*   **Percepts:** The agent receives percepts at each time step.  These include:
    *   Stench
    *   Breeze
    *   Glitter (indicates gold is in the current room)
    *   Bump (indicates the agent tried to move into a wall)
    *   Scream (indicates the Wumpus was killed)

*   **Actions:** The agent can perform the following actions:
    *   Move Forward
    *   Turn Left
    *   Turn Right
    *   Grab (gold)
    *   Shoot (arrow to kill the Wumpus)
    *   Climb (out of the cave)

*   **Challenges:**
    *   **Uncertainty:**  The agent doesn't know the exact locations of the Wumpus and pits.  It must reason with incomplete and uncertain information.
    *   **Reasoning:**  The agent needs to deduce the locations of dangers and use that information to plan a safe path.
    *   **Exploration vs. Exploitation:** Balancing exploring new areas to find gold with avoiding dangerous situations.

*   **Example:**  If the agent perceives a breeze, it knows that a pit is adjacent to the current room, but doesn't know which adjacent room contains the pit.

## 2. Logic

*   **Definition:**  A formal system for representing knowledge and drawing conclusions based on that knowledge.

*   **Key Concepts:**
    *   **Syntax:** Defines the rules for constructing well-formed sentences.
    *   **Semantics:** Defines the meaning of sentences, i.e., their truth values in different possible worlds or models.
    *   **Entailment:**  A sentence α entails another sentence β (α ⊨ β) if and only if in every model in which α is true, β is also true.
    *   **Inference:**  The process of deriving new sentences from existing sentences using logical rules.
    *   **Knowledge Base (KB):** A set of sentences representing the agent's knowledge about the world.

*   **Types of Logic:**
    *   **Propositional Logic:** Deals with simple, declarative propositions (statements) that are either true or false.
    *   **First-Order Logic (Predicate Logic):** Deals with objects, relations between objects, and quantification (e.g., "for all," "there exists").  More expressive than propositional logic.

## 3. Propositional Logic

*   **Definition:** A logic where the basic elements are propositions, which are statements that can be either true or false.

*   **Syntax:**
    *   **Atomic Propositions:**  Represented by symbols (e.g., P, Q, R, WumpusAlive, PitAt1_1).
    *   **Logical Connectives:**
        *   ¬ (Negation): "not"
        *   ∧ (Conjunction): "and"
        *   ∨ (Disjunction): "or"
        *   ⇒ (Implication): "implies"
        *   ⇔ (Biconditional): "if and only if"
    *   **Well-formed sentences:**
        *   Atomic propositions are sentences.
        *   If α is a sentence, then ¬α is a sentence.
        *   If α and β are sentences, then (α ∧ β), (α ∨ β), (α ⇒ β), and (α ⇔ β) are sentences.

*   **Semantics:**
    *   A **model** assigns a truth value (True or False) to each atomic proposition.
    *   The truth value of a complex sentence is determined by the truth values of its components and the meaning of the logical connectives.  Use truth tables to evaluate.

    | P | Q | ¬P | P ∧ Q | P ∨ Q | P ⇒ Q | P ⇔ Q |
    |---|---|----|-------|-------|-------|-------|
    | T | T | F  | T     | T     | T     | T     |
    | T | F | F  | F     | T     | F     | F     |
    | F | T | T  | F     | T     | T     | F     |
    | F | F | T  | F     | F     | T     | T     |

*   **Examples in the Wumpus World:**
    *   `B1_1`:  There is a breeze in square [1,1].
    *   `P1_2`:  There is a pit in square [1,2].
    *   Knowledge base could include: `B1_1 ⇒ (P1_2 ∨ P2_1)` (If there's a breeze in [1,1], then there's a pit in [1,2] or [2,1]).

## 4. Reasoning Patterns in Propositional Logic

*   **Inference Rules:**  Logical rules used to derive new sentences from existing ones.

*   **Common Inference Rules:**
    *   **Modus Ponens:** If α ⇒ β and α, then β.  (If it rains, then the ground is wet. It rains. Therefore, the ground is wet.)
    *   **Modus Tollens:** If α ⇒ β and ¬β, then ¬α. (If it rains, then the ground is wet. The ground is not wet. Therefore, it is not raining.)
    *   **And-Elimination:** If α ∧ β, then α. (It is raining and windy. Therefore, it is raining.)
    *   **And-Introduction:** If α and β, then α ∧ β. (It is raining. It is windy. Therefore, it is raining and windy.)
    *   **Or-Introduction:** If α, then α ∨ β. (It is raining. Therefore, it is raining or the sun is shining.)
    *   **Unit Resolution:** If α ∨ β and ¬β, then α. (It is raining or the sun is shining. It is not raining. Therefore, the sun is shining.)
    *   **Resolution:** If α ∨ β and ¬β ∨ γ, then α ∨ γ.  (If it's raining or the game is on, and if it's not raining or I have to work, then the game is on or I have to work.)

*   **Inference Algorithms:**
    *   **Truth Table Enumeration:**  Systematically check every possible model to see if the knowledge base entails the query. Complete but inefficient (exponential in the number of propositional symbols).
    *   **Resolution:** Convert sentences to Conjunctive Normal Form (CNF) and apply the resolution rule repeatedly until either the query is derived or no new clauses can be generated. Complete and sound refutation procedure.

*   **Example:**

    *   KB:
        *   `P ⇒ Q`
        *   `P`
    *   Query: `Q`
    *   Inference using Modus Ponens:
        *   From `P ⇒ Q` and `P`, we can infer `Q`.

## 5. First-Order Logic (Predicate Logic)

*   **Definition:** A more expressive logic than propositional logic that allows reasoning about objects, properties of objects, and relations between objects.

*   **Syntax:**
    *   **Objects:** Represent entities in the world (e.g., John, Room12, Gold).
    *   **Predicates:** Represent properties of objects or relations between objects (e.g., `Red(Ball)`, `Adjacent(Room12, Room13)`).  Predicates are either True or False.
    *   **Functions:**  Map objects to other objects (e.g., `FatherOf(John)`).
    *   **Variables:** Represent unspecified objects (e.g., x, y).
    *   **Quantifiers:**
        *   **Universal Quantifier (∀):** "For all" (e.g., `∀x. Cat(x) ⇒ Mammal(x)`: All cats are mammals).
        *   **Existential Quantifier (∃):** "There exists" (e.g., `∃x. Gold(x) ∧ In(x, Room12)`: There exists gold in Room 12).
    *   **Logical Connectives:** ¬, ∧, ∨, ⇒, ⇔ (same as propositional logic).

*   **Semantics:**
    *   An **interpretation** specifies:
        *   The domain of objects.
        *   The object to which each constant symbol refers.
        *   The function to which each function symbol refers.
        *   The relation to which each predicate symbol refers.
    *   A sentence is **true** in an interpretation if it holds according to the interpretation.

*   **Examples in the Wumpus World:**
    *   `Pit(x, y)`: There is a pit at location [x, y].
    *   `Wumpus(x, y)`: There is a Wumpus at location [x, y].
    *   `Breeze(x, y)`: There is a breeze at location [x, y].
    *   `Stench(x, y)`: There is a stench at location [x, y].
    *   `∀x, y. Breeze(x, y) ⇒ (Pit(x+1, y) ∨ Pit(x-1, y) ∨ Pit(x, y+1) ∨ Pit(x, y-1))`: If there's a breeze at [x,y], then there's a pit in at least one adjacent square.
    *   `∃x. Gold(x) ∧ At(Agent, x)`: There exists gold and the Agent is at the same location as the gold.

*   **Converting English Sentences to First-Order Logic:**

    *   **"All humans are mortal."**:  `∀x. Human(x) ⇒ Mortal(x)`
    *   **"Some cats are black."**: `∃x. Cat(x) ∧ Black(x)`
    *   **"Every room has a gold."**: `∀x. Room(x) ⇒ ∃y. Gold(y) ∧ In(y, x)`
    *   **"There is a pit in every room."**:  `∀x. Room(x) ⇒ ∃y. Pit(y) ∧ In(y,x)`

## 6. Inference in First-Order Logic

*   **Key Idea:**  Reduce first-order inference to propositional inference using *grounding*.

*   **Grounding:**  Substituting variables with constants to create propositional sentences.

*   **Generalized Modus Ponens (GMP):** A generalization of Modus Ponens that applies to first-order logic.
    *   If we have:
        *   `∀x1, ..., xn. P(x1, ..., xn) ⇒ Q(x1, ..., xn)`
        *   `P(a1, ..., an)` (where a1, ..., an are constants)
    *   Then we can infer: `Q(a1, ..., an)`

*   **Forward Chaining:** Starts with the known facts and applies inference rules to derive new facts until the query is found or no new facts can be derived.
*   **Backward Chaining:** Starts with the query and works backward, trying to find facts that support the query.

*   **Example:**
    *   KB:
        *   `∀x. King(x) ∧ Greedy(x) ⇒ Evil(x)`
        *   `King(John)`
        *   `Greedy(John)`
    *   Query: `Evil(John)`
    *   Using GMP:
        *   Substitute `John` for `x` in the first rule: `King(John) ∧ Greedy(John) ⇒ Evil(John)`
        *   We have `King(John)` and `Greedy(John)`.
        *   Therefore, we can infer `Evil(John)`.

## 7. Propositional vs. First-Order Inference

| Feature         | Propositional Logic                                | First-Order Logic                                      |
|-----------------|----------------------------------------------------|------------------------------------------------------|
| Expressiveness  | Limited; represents simple facts.                  | More expressive; represents objects, relations, and quantification. |
| Inference       | Simpler inference rules (e.g., Modus Ponens).        | More complex inference rules (e.g., Generalized Modus Ponens). |
| Completeness    | Complete; can determine truth for all sentences. | Semi-decidable; if a sentence is entailed, the algorithm will find it, but may not terminate if it's not. |
| Decidability    | Decidable; can determine if a sentence is valid. | Undecidable; cannot always determine if a sentence is valid. |
| Grounding       | Not applicable.                                   | Necessary to reduce to propositional logic for certain inference methods.|

## 8. Unification & Lifted Forward Chaining

*   **Unification:**  The process of finding a substitution that makes two expressions identical.  Essential for applying inference rules in first-order logic.

    *   **Substitution:** A mapping from variables to terms (constants, variables, or function applications).  Represented as `{x/a, y/b}` (x is replaced by a, y is replaced by b).

    *   **Unify(P, Q):** Returns a substitution that makes P and Q identical, or `fail` if no such substitution exists.

    *   **Example:**
        *   `P(x, y)` and `P(John, z)`
        *   `Unify(P(x, y), P(John, z)) = {x/John, y/z}` (or `{x/John, z/y}`)
        *   Applying the substitution, we get `P(John, z)` and `P(John, z)`

*   **Lifted Forward Chaining:** A forward chaining algorithm for first-order logic that uses unification to find suitable substitutions and efficiently derive new facts.  "Lifted" means it operates directly on first-order logic sentences, rather than grounding them.

    *   **Algorithm:**
        1.  Start with a knowledge base of facts (ground atomic sentences).
        2.  Repeat:
            *   For each rule in the knowledge base:
                *   Unify the antecedent of the rule with known facts.
                *   If successful, apply the resulting substitution to the consequent of the rule to derive a new fact.
                *   Add the new fact to the knowledge base (if it's not already present).
        3.  Until no new facts can be derived.

    *   **Advantages:**  More efficient than grounding the entire KB first.

## 9. Backward Chaining

*   **Definition:** A goal-directed inference method that starts with a query (goal) and works backward, trying to find evidence to support it.

*   **Algorithm:**
    1.  Start with the query (goal).
    2.  Repeat:
        *   Find a rule whose consequent unifies with the goal.
        *   If found:
            *   Substitute the unifying substitution into the rule.
            *   Replace the goal with the antecedent of the rule (which becomes the new subgoals).
        *   Else:
            *   If the goal matches a known fact, the goal is solved.
        *   Else:
            *   Fail (the goal cannot be proven).
    3.  Until all goals are solved or a failure occurs.

*   **Example (Simplified):**

    *   KB:
        *   `Grandparent(x, z) :- Parent(x, y), Parent(y, z).` (If x is a parent of y and y is a parent of z, then x is a grandparent of z)
        *   `Parent(John, Mary).`
        *   `Parent(Mary, David).`
    *   Query: `Grandparent(John, David)`

    *   Backward Chaining Steps:
        1.  Goal: `Grandparent(John, David)`
        2.  Unify with the rule `Grandparent(x, z) :- Parent(x, y), Parent(y, z).`  Substitution: `{x/John, z/David}`
        3.  New Subgoals: `Parent(John, y), Parent(y, David)`
        4.  Solve `Parent(John, y)`: Unify with `Parent(John, Mary)`. Substitution: `{y/Mary}`. Goal solved.
        5.  Solve `Parent(Mary, David)`: Unify with `Parent(Mary, David)`. Goal solved.
        6.  All goals solved.  Therefore, `Grandparent(John, David)` is proven.

*   **Advantages of Backward Chaining:**  Focuses on relevant information, making it more efficient for answering specific queries.

*   **Disadvantages of Backward Chaining:** Can be less efficient if many possible rules can lead to the same goal.  May require backtracking if a path leads to a dead end.

## Practice Questions & Exercises

1.  **Wumpus World Scenario:**  The agent is in room [1,1] and perceives a breeze. Write a propositional logic sentence representing the possible locations of pits.
    *   **Answer:** `B1_1 ⇒ (P1_2 ∨ P2_1)`

2.  **Propositional Logic Inference:** Given the KB: `A ⇒ B`, `B ⇒ C`, and `A`.  Use Modus Ponens to prove `C`.
    *   **Answer:**
        1.  From `A ⇒ B` and `A`, infer `B` (Modus Ponens).
        2.  From `B ⇒ C` and `B`, infer `C` (Modus Ponens).

3.  **First-Order Logic Translation:** Translate the following English sentence into first-order logic: "Every person loves some animal."
    *   **Answer:** `∀x. Person(x) ⇒ ∃y. Animal(y) ∧ Loves(x, y)`

4.  **Unification:**  Find the most general unifier for `P(x, f(y), B)` and `P(A, f(B), z)`.
    *   **Answer:** `{x/A, y/B, z/B}`

5.  **Forward Chaining:** Given the following KB:
    *   `R1: Man(x)  ⇒ Mortal(x)`
    *   `R2: JohnLikesBeer(x) ∧ Responsible(x)  ⇒ GoodCitizen(x)`
    *   `R3: JohnLikesBeer(John)`
    *   `R4: Man(John)`
    *   `R5: Responsible(John)`

    Show the steps of forward chaining to derive `Mortal(John)` and `GoodCitizen(John)`.

    *   **Answer:**
        1.  Initial KB: `Man(John), JohnLikesBeer(John), Responsible(John)`
        2.  Apply R1: `Man(John) => Mortal(John)`.  Infer `Mortal(John)`
        3.  Apply R2: `JohnLikesBeer(John) ∧ Responsible(John) => GoodCitizen(John)`. Infer `GoodCitizen(John)`

6.  **Backward Chaining:** Given the following rules:
    *   `A :- B, C.`
    *   `B :- D.`
    *   `C :- E.`
    *   `D.`
    *   `E.`

    Use backward chaining to prove goal `A`.

    *   **Answer:**
        1.  Goal: A
        2.  Unify A with A :- B, C.   Subgoals: B, C
        3.  Unify B with B :- D.  Subgoal: D
        4.  D is a fact. Goal solved.
        5.  Unify C with C :- E. Subgoal: E
        6.  E is a fact. Goal solved.
        7.  B and C solved. Therefore A is true.

## Important Points to Remember

*   **Knowledge Representation is Crucial:** Choosing the right logic (propositional or first-order) depends on the complexity of the domain.
*   **Inference is Key:**  AI agents need to be able to reason and draw conclusions from their knowledge.
*   **Trade-offs Exist:** Propositional logic is simpler but less expressive. First-order logic is more expressive but more complex to reason with.
*   **Unification enables Generalization:** Unification is essential for generalizing inference rules in first-order logic.
*   **Forward and Backward Chaining have Complementary Strengths:** Forward chaining is useful for deriving all possible consequences of known facts. Backward chaining is useful for answering specific queries.
*   **The Wumpus World:** A valuable tool for understanding and experimenting with knowledge representation and reasoning.
