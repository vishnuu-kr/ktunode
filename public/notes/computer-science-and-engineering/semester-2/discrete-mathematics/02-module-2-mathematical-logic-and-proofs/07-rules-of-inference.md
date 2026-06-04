---
title: "Rules of Inference"
subject: "DISCRETE MATHEMATICS"
module: "Module 2: Mathematical logic and proofs"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f9e"
status: "completed"
scrapedAt: "2026-05-20T16:33:00.660Z"
---
Alright everyone, settle in! Welcome back to our journey through **Discrete Mathematics**. Today, we're diving headfirst into a crucial topic that forms the bedrock of our logical reasoning: **Rules of Inference**. This is Module 2, and we're specifically focusing on how we move from premises to conclusions, how we *prove* things in mathematics.

You know, mathematics isn't just about numbers and formulas; it's about building solid arguments. And rules of inference are the essential tools in our argumentative toolkit. Think of them as the "rules of the game" for constructing valid logical deductions. They allow us to confidently say, "Because these things are true, this other thing *must* also be true." This directly ties into our **CO1: Check the validity of predicates in Propositional and Quantified Propositional Logic using truth tables, deductive reasoning and inference theory**. We're going to see how these rules help us perform that deductive reasoning.

Let's get started!

## Module 2: Mathematical Logic and Proofs - Topic: Rules of Inference

### The Heart of Deduction: What are Rules of Inference?

At its core, a **rule of inference** is a logical structure that allows us to deduce a conclusion from one or more premises. In simpler terms, it's a pattern of reasoning that, if the premises are true, guarantees the conclusion is also true. This is absolutely fundamental for demonstrating the validity of arguments.

Think about it like this: you're building a case in court. You have evidence (premises), and you need to use logical steps to arrive at a verdict (conclusion). Rules of inference are the established legal procedures that ensure your argument is sound and your conclusion is correctly reached. If you follow these rules, and your evidence is good, your verdict will be accepted.

We've already touched upon propositional logic. Now, we're going to see how we can use the logical relationships we've defined to *derive* new truths.

### Building Blocks: Premises and Conclusions

Before we look at specific rules, let's clarify the terminology:

*   **Premise:** A statement that is assumed to be true for the purpose of an argument. These are our starting points.
*   **Conclusion:** A statement that is derived from the premises using a rule of inference.

The entire process of using rules of inference to arrive at a conclusion from premises is called a **deduction** or a **proof**.

### The Master Key: Modus Ponens

Let's start with perhaps the most famous and fundamental rule of inference: **Modus Ponens**. You'll find this discussed extensively in Chapter 1 of Rosen and Krithivasan's "Discrete Mathematics and its Applications."

**Modus Ponens** (Latin for "method of affirming") is our go-to rule when we have a conditional statement and we know that its hypothesis is true.

Here's the structure:

If $p \rightarrow q$ is true, and $p$ is true, then $q$ must be true.

In symbolic notation, it looks like this:

$\frac{p \rightarrow q, \quad p}{q}$

Think of a simple everyday example:

*   **Premise 1:** If it is raining ($p$), then the ground is wet ($q$). ($p \rightarrow q$)
*   **Premise 2:** It is raining ($p$).
*   **Conclusion:** Therefore, the ground is wet ($q$).

This seems incredibly straightforward, right? But the power of Modus Ponens lies in its absolute certainty. If those two premises are true, there's no logical way the conclusion can be false.

**Why is this important for CO1?** Modus Ponens is a direct application of **deductive reasoning**. We are given a general rule ($p \rightarrow q$) and a specific instance ($p$), and we deduce a specific outcome ($q$). This is the essence of how we check validity using deduction.

**Exam Tip:** When you're asked to prove something, and you have a conditional statement like "If A, then B," and you also know that "A is true," your first thought should often be, "Can I use Modus Ponens here?"

### The Counterpart: Modus Tollens

Just as Modus Ponens allows us to affirm the consequent when the antecedent is true, **Modus Tollens** (Latin for "method of denying") allows us to deny the antecedent when the consequent is false. This is also a cornerstone of propositional logic and is covered in Rosen and Krithivasan.

**Modus Tollens** states:

If $p \rightarrow q$ is true, and $q$ is false (i.e., $\neg q$ is true), then $p$ must be false (i.e., $\neg p$ must be true).

In symbolic notation:

$\frac{p \rightarrow q, \quad \neg q}{\neg p}$

Let's use our rain example again, but this time in reverse:

*   **Premise 1:** If it is raining ($p$), then the ground is wet ($q$). ($p \rightarrow q$)
*   **Premise 2:** The ground is *not* wet ($\neg q$).
*   **Conclusion:** Therefore, it is *not* raining ($\neg p$).

This makes perfect sense. If the ground is dry, it can't be raining, because if it *were* raining, the ground *would* be wet.

**Connection to CO1:** Modus Tollens is another powerful example of deductive reasoning. It shows how we can use the negation of a consequence to infer the negation of the antecedent. This is crucial for proving what is *not* true.

**Common Pitfall:** Be careful not to confuse Modus Ponens with the fallacy of **affirming the consequent**. That would be:
If $p \rightarrow q$ is true, and $q$ is true, then $p$ is true. (This is **incorrect!**)
Example: "If it is raining, the ground is wet. The ground is wet. Therefore, it is raining." This is wrong! The ground could be wet because a sprinkler was on. Always remember, the truth of the consequent ($q$) does not guarantee the truth of the antecedent ($p$).

Similarly, avoid the fallacy of **denying the antecedent**:
If $p \rightarrow q$ is true, and $\neg p$ is true, then $\neg q$ is true. (This is also **incorrect!**)
Example: "If it is raining, the ground is wet. It is not raining. Therefore, the ground is not wet." Again, wrong! The ground could be wet from a sprinkler.

### Other Important Rules of Inference

While Modus Ponens and Modus Tollens are fundamental, discrete mathematics relies on a rich set of inference rules. Let's explore some more that are commonly used and found in our textbooks.

#### Hypothetical Syllogism

This rule is great for chaining conditional statements together. If we know "If A then B" and "If B then C," we can logically conclude "If A then C." This is like dominoes falling – one leading to the next.

If $p \rightarrow q$ is true, and $q \rightarrow r$ is true, then $p \rightarrow r$ is true.

Symbolically:

$\frac{p \rightarrow q, \quad q \rightarrow r}{p \rightarrow r}$

Consider this:

*   **Premise 1:** If you study hard ($p$), you will pass the exam ($q$). ($p \rightarrow q$)
*   **Premise 2:** If you pass the exam ($q$), you will get a good grade ($r$). ($q \rightarrow r$)
*   **Conclusion:** Therefore, if you study hard ($p$), you will get a good grade ($r$). ($p \rightarrow r$)

This rule is incredibly useful for building longer chains of reasoning, especially when proving complex conditional statements. It’s a direct example of how our propositional logic is structured for deductive arguments.

#### Disjunctive Syllogism

This rule comes into play when we have a disjunction (an "or" statement) and we know that one of the disjuncts is false.

If $p \lor q$ is true, and $\neg p$ is true, then $q$ must be true.
(And symmetrically, if $p \lor q$ is true, and $\neg q$ is true, then $p$ must be true.)

Symbolically:

$\frac{p \lor q, \quad \neg p}{q}$

Here's a relatable example:

*   **Premise 1:** I will either eat pizza ($p$) or pasta ($q$) for dinner. ($p \lor q$)
*   **Premise 2:** I will not eat pizza ($\neg p$).
*   **Conclusion:** Therefore, I will eat pasta ($q$).

This is a very common way we reason daily. If you have two options, and one is eliminated, the other must be the choice.

#### Addition (Disjunction Introduction)

This rule is simple but powerful: if we know a statement $p$ is true, then we can conclude that "$p$ or $q$" is true, regardless of whether $q$ is true or false.

If $p$ is true, then $p \lor q$ is true.

Symbolically:

$\frac{p}{p \lor q}$

Example:

*   **Premise 1:** The sun is shining ($p$).
*   **Conclusion:** Therefore, the sun is shining ($p$) or I'm a millionaire ($q$). ($p \lor q$)

The conclusion is true because the first part ($p$) is true, and in an "or" statement, only one part needs to be true for the whole statement to be true. This is also a fundamental way to introduce disjunctions into a proof.

#### Simplification

This rule is the opposite of Addition. If we have a conjunction (an "and" statement) that is true, then each individual part of that conjunction must also be true.

If $p \land q$ is true, then $p$ is true.
(And if $p \land q$ is true, then $q$ is true.)

Symbolically:

$\frac{p \land q}{p}$

Example:

*   **Premise 1:** I have a car ($p$) AND I have a driver's license ($q$). ($p \land q$)
*   **Conclusion:** Therefore, I have a car ($p$).

If both things are true, then each one individually must be true.

#### Conjunction

This is a straightforward rule that states if we have two true statements, we can combine them into a true conjunction.

If $p$ is true, and $q$ is true, then $p \land q$ is true.

Symbolically:

$\frac{p, \quad q}{p \land q}$

Example:

*   **Premise 1:** It is Tuesday ($p$).
*   **Premise 2:** The class is interesting ($q$).
*   **Conclusion:** Therefore, it is Tuesday ($p$) AND the class is interesting ($q$). ($p \land q$)

This rule allows us to combine derived facts to form a compound statement, which is often necessary in building up proofs.

#### Resolution

Resolution is a powerful inference rule that's particularly important in automated theorem proving and logic programming. It's based on the idea that if you have two disjunctions, and one of them contains a statement and its negation, you can combine them.

If $p \lor q$ is true, and $\neg p \lor r$ is true, then $q \lor r$ is true.

Symbolically:

$\frac{p \lor q, \quad \neg p \lor r}{q \lor r}$

Think about it: if either $p$ is true (making $p \lor q$ true) or $p$ is false (making $\neg p \lor r$ true), then the only way for *both* premises to hold is if we resolve the $p$ and $\neg p$. If $p$ is false, then $r$ *must* be true for the second premise to hold. If $p$ is true, then $q$ *must* be true for the first premise to hold. So, if $p$ is false, $r$ must be true; if $p$ is true, $q$ must be true. In either case, $q \lor r$ must be true.

This rule is crucial for understanding how logical systems can deduce new facts from existing ones. It's a more advanced rule, but it demonstrates the elegance of logical deduction.

### Rules of Inference for Quantified Statements

So far, we've been working with propositional logic (statements with $p, q, r$). But what about when our statements involve quantifiers like "for all" ($\forall$) and "there exists" ($\exists$)? These are crucial for building proofs about properties of entire sets, which directly relates to **CO1: Check the validity of predicates in Propositional and Quantified Propositional Logic**.

We need rules to handle these as well.

#### Universal Instantiation (UI)

This rule allows us to take a general statement that is true for all members of a set and apply it to a specific member of that set.

If $\forall x P(x)$ is true, then $P(c)$ is true for any arbitrary element $c$ in the domain.

Symbolically:

$\frac{\forall x P(x)}{P(c)}$

Example:

*   **Premise 1:** All dogs are mammals ($\forall x (\text{Dog}(x) \rightarrow \text{Mammal}(x))$).
*   **Premise 2:** Fido is a dog ($\text{Dog}(\text{Fido})$).
*   **Conclusion:** Therefore, Fido is a mammal ($\text{Mammal}(\text{Fido})$).

This is how we apply general rules to specific cases. We've used Modus Ponens here after Universal Instantiation.

#### Universal Generalization (UG)

This is the converse of Universal Instantiation. If we can prove that a property $P(x)$ holds for an *arbitrary* element $x$ in the domain, then we can conclude that the property holds for *all* elements in that domain.

If $P(c)$ is true for an arbitrary $c$, then $\forall x P(x)$ is true.

Symbolically:

$\frac{P(c) \text{ for an arbitrary } c}{\forall x P(x)}$

The key here is "arbitrary." If you can show that something is true for any element you pick, without making any special assumptions about that element other than it belonging to the set, then it's true for all of them.

#### Existential Instantiation (EI)

If we know that a property $P(x)$ is true for *some* element in the domain, then we can introduce a new name (a constant) for that element and assert that the property holds for it.

If $\exists x P(x)$ is true, then $P(c)$ is true for some element $c$.

Symbolically:

$\frac{\exists x P(x)}{P(c)}$

Here, $c$ is a *new* constant that has not been used previously in the argument.

Example:

*   **Premise 1:** There exists a student who got an A on the test ($\exists x (\text{Student}(x) \land \text{GotA}(x))$).
*   **Conclusion:** Let's call this student 'Alice'. Therefore, Alice is a student AND Alice got an A on the test ($\text{Student}(\text{Alice}) \land \text{GotA}(\text{Alice})$).

This is like saying, "I know *someone* is the culprit. I'll call this person 'X' for now."

#### Existential Generalization (EG)

This rule is simple: if we know a property $P(c)$ holds for a *specific* element $c$, then we can conclude that there exists *some* element in the domain for which $P(x)$ is true.

If $P(c)$ is true for some element $c$, then $\exists x P(x)$ is true.

Symbolically:

$\frac{P(c)}{\exists x P(x)}$

Example:

*   **Premise 1:** Bob is a student and Bob likes discrete math ($\text{Student}(\text{Bob}) \land \text{LikesDiscreteMath}(\text{Bob})$).
*   **Conclusion:** Therefore, there exists a student who likes discrete math ($\exists x (\text{Student}(x) \land \text{LikesDiscreteMath}(x))$).

This is how we go from a specific instance to a general existential statement.

### Putting It All Together: Constructing Proofs

These rules of inference are not just theoretical curiosities; they are the tools we use to construct formal proofs. A formal proof is a sequence of statements, where each statement is either a premise or is derived from previous statements using a rule of inference. The last statement in the sequence is the conclusion we want to prove.

**How does this relate to CO1?** This entire section is about **deductive reasoning** and **inference theory**. By understanding these rules, you gain the ability to construct valid arguments and verify the validity of existing ones. You can use truth tables for simpler propositional logic, but for more complex statements or statements involving quantifiers, these rules of inference are indispensable.

**Example of a Formal Proof:**

Let's prove that if $p \lor q$ and $\neg p \lor r$ and $\neg q$ are true, then $r$ must be true. This combines several rules.

1.  $p \lor q$ (Premise)
2.  $\neg p \lor r$ (Premise)
3.  $\neg q$ (Premise)
4.  $p$ (From 1 and 3 by Disjunctive Syllogism)
5.  $r$ (From 2 and 4 by Disjunctive Syllogism)

See? We started with our premises and used established rules to arrive at our conclusion. This is the essence of deductive proof.

**Exam Focus:** In exams, you might be asked to:
*   Identify which rule of inference is being used in a given step of a proof.
*   Complete a proof by providing the missing steps and the rules used.
*   Show that a conclusion can be derived from a set of premises.

**Key Takeaway for CO1:** Rules of inference are the engines of valid deduction. They transform true statements into new true statements, allowing us to build logically sound arguments and verify the truth of complex propositions. Understanding these rules is essential for mastering propositional and quantified logic.

### Beyond Propositional Logic: What About Other Course Outcomes?

While rules of inference primarily support **CO1**, the logical structures they establish are foundational for other outcomes.

*   **CO2 (Counting Problems):** When we formulate counting problems, we often use logical statements to describe the conditions for counting. The ability to deduce valid outcomes from these conditions relies on inference. For instance, if a problem states "If an item is red, it's in Set A, and if it's blue, it's in Set B," and we know an item is red, we use Modus Ponens to conclude it's in Set A.
*   **CO3 & CO4 (Relations, Posets, Lattices):** Properties of relations, partial orders, and lattices are often defined using logical statements and quantifiers. Proving that a given relation *is* a partial order, for example, requires demonstrating it satisfies reflexivity, antisymmetry, and transitivity. These demonstrations are built using rules of inference on quantified predicates. If we prove transitivity, we're essentially using a form of Hypothetical Syllogism on quantified variables.
*   **CO5 (Generating Functions, Recurrence Relations):** Solving recurrence relations often involves algebraic manipulation and logical deduction to derive closed-form solutions. The steps taken to simplify expressions or transform equations are guided by logical inference.
*   **CO6 (Algebraic Systems):** Properties of semigroups, monoids, and groups are defined by axioms, which are essentially logical statements. Proving that a set and operation form a group requires showing that all these axioms hold. This involves deductive reasoning using rules of inference on the elements and operations.

In essence, **rules of inference provide the logical backbone for much of discrete mathematics**. They are the tools that allow us to rigorously prove properties and solve problems across various domains of computer science.

### Summary and What to Remember

Let's recap the essence of rules of inference:

*   **They are valid argument forms.** If premises are true, conclusion is guaranteed true.
*   **Modus Ponens** ($p \rightarrow q, p \implies q$) and **Modus Tollens** ($p \rightarrow q, \neg q \implies \neg p$) are fundamental for conditional statements.
*   **Hypothetical Syllogism** chains conditionals ($p \rightarrow q, q \rightarrow r \implies p \rightarrow r$).
*   **Disjunctive Syllogism** works with "or" statements ($\boldsymbol{p} \lor \boldsymbol{q}, \neg \boldsymbol{p} \implies \boldsymbol{q}$).
*   **Addition, Simplification, Conjunction** are basic building blocks for introducing and manipulating logical connectives.
*   **Rules for quantifiers** (Universal Instantiation/Generalization, Existential Instantiation/Generalization) allow us to reason about statements involving "for all" and "there exists."

**Remember this:** Mastery of rules of inference is key to building confidence in your logical reasoning and your ability to construct proofs. They are the tools that let you move from what you know to what you can prove. When tackling a problem, ask yourself: "What are my premises? What logical rules can I apply to derive new information?"

### Sample Questions and Answers

Here are a few practice questions to solidify your understanding.

---

**Question 1 (Conceptual):**

Which rule of inference is used to derive the conclusion from the premises below?

Premises:
1.  If it is sunny, I will go to the park.
2.  It is sunny.

Conclusion:
I will go to the park.

**Answer:**

This scenario perfectly illustrates **Modus Ponens**.
Let $p$ be "It is sunny" and $q$ be "I will go to the park". The premises are $p \rightarrow q$ and $p$. The conclusion is $q$. This matches the structure of Modus Ponens:
$\frac{p \rightarrow q, \quad p}{q}$

---

**Question 2 (Application - Proof Step):**

Consider the following proof:

1.  $\forall x (P(x) \rightarrow Q(x))$ (Premise)
2.  $P(a)$ (Premise)
3.  $P(a) \rightarrow Q(a)$ (Step from 1)
4.  $Q(a)$ (Step from 2 and 3)

What rule of inference was used to get from step 1 to step 3?

**Answer:**

Step 3, $P(a) \rightarrow Q(a)$, is derived from step 1, $\forall x (P(x) \rightarrow Q(x))$, by applying the property to a specific element 'a'. This is the rule of **Universal Instantiation (UI)**. We are taking a general statement about all $x$ and making it specific for an element $a$.

---

**Question 3 (Identifying Fallacies):**

Identify the fallacy in the following argument:

Premises:
1.  If a student studies hard, they will pass the exam.
2.  John passed the exam.

Conclusion:
Therefore, John studied hard.

**Answer:**

This argument commits the fallacy of **Affirming the Consequent**.
Let $p$ be "A student studies hard" and $q$ be "They will pass the exam".
The premises are $p \rightarrow q$ and $q$. The conclusion is $p$.
The structure is:
$\frac{p \rightarrow q, \quad q}{\therefore p}$ (Invalid)

While studying hard might be a reason to pass, it's not the *only* reason. John could have passed due to prior knowledge, luck, or an easy exam, even if he didn't study hard. The truth of the consequent ($q$) does not guarantee the truth of the antecedent ($p$).

---

**Question 4 (Constructing a Proof):**

Using rules of inference, show that from the premises $\boldsymbol{p} \lor \boldsymbol{q}$, $\boldsymbol{q} \rightarrow \boldsymbol{r}$, and $\neg \boldsymbol{p}$, you can conclude $\boldsymbol{r}$.

**Answer:**

Here's a valid deductive proof:

1.  $p \lor q$ (Premise)
2.  $q \rightarrow r$ (Premise)
3.  $\neg p$ (Premise)
4.  $q$ (From 1 and 3 by **Disjunctive Syllogism**)
5.  $r$ (From 4 and 2 by **Modus Ponens**)

We successfully derived $r$ from the given premises using established rules of inference. This directly demonstrates our ability to perform deductive reasoning as outlined in **CO1**.

---

Keep practicing these, and you'll build a strong foundation in logical reasoning! Don't hesitate to ask questions as we move forward.
