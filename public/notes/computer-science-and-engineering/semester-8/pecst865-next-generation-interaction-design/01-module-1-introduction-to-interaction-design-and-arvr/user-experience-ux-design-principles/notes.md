# User experience (UX) design principles

<!-- SECTION_1_START -->
# User Experience (UX) Design Principles

> [!IMPORTANT]
> **KTU 2024 Scheme | PECST865 — Next Generation Interaction Design | Module 1**
> *Mapped Course Outcomes: CO1 — Understand the fundamental principles, processes, and lifecycle of modern interaction design with emphasis on User Experience (UX) for AR/VR systems.*

---

## 1.1 Formal Academic Definition

**User Experience (UX) Design** is a multidisciplinary, human-centered design discipline focused on creating products, systems, and services that provide meaningful, relevant, and satisfying experiences to users. According to the **ISO 9241-210 (Ergonomics of human-system interaction)**, UX encompasses *"a person's perceptions and responses that result from the use or anticipated use of a product, system or service."*

In the context of **KTU 2024 Scheme (PECST865)**, UX Design is positioned as the foundation of all next-generation interaction paradigms — including **Augmented Reality (AR)**, **Virtual Reality (VR)**, **Mixed Reality (MR)**, **Voice User Interfaces (VUI)**, and **Spatial Computing environments**.

The seminal definition by **Don Norman** (co-founder of the Nielsen Norman Group, former Apple VP) describes UX as encompassing *"all aspects of the end-user's interaction with the company, its services, and its products."*

> [!NOTE]
> **KTU Syllabus Highlight — Definition Pearl**
> The **5 Components of UX** (as defined by Jesse James Garrett in *The Elements of User Experience Design*):
> 1. **Strategy Plane** — User needs + Business objectives
> 2. **Scope Plane** — Functional & Content requirements
> 3. **Structure Plane** — Interaction Design + Information Architecture
> 4. **Skeleton Plane** — Interface, Navigation, Information Design
> 5. **Surface Plane** — Visual / Sensory Design

---

## 1.2 Intuitive Real-World Analogy

Imagine you are entering a **modern airport terminal** for the first time. The UX is good if:
- The **check-in counter** is intuitively located (affordance)
- The **signboards** point you clearly to your gate (signifier)
- The **flight display board** updates in real-time (feedback)
- The **security process** feels fast, fair, and predictable (mapping)
- The **gate seating** is comfortable and the boarding call is audible (emotional design)

Now imagine an **old, badly-designed bus stand** — confusing signs, broken displays, no announcements, hidden ticket counter. That is **bad UX**.

> [!TIP]
> **UX = The entire journey of a user's interaction with a system — from first contact to last impression.**

### UX vs. UI vs. Usability vs. Accessibility

| Term | Scope | Focus | Example |
|---|---|---|---|
| **UX (User Experience)** | Entire journey | Feelings, efficiency, value | Why & how a user enjoys using an AR headset |
| **UI (User Interface)** | Visual/Interaction layer | Look, feel, layout | Buttons, sliders, color palette in a VR menu |
| **Usability** | Task-completion efficiency | Ease of use | Can a user complete checkout in ≤ 3 clicks? |
| **Accessibility (a11y)** | Inclusive design | Users with disabilities | Voice control, captions, high-contrast mode |

> [!IMPORTANT]
> In KTU valuation: A student who **only** describes UI will be marked down. Always frame answers around the **broader UX** perspective.

---

## 1.3 The Three Pillars of UX (KTU High-Yield)

According to Peter Morville's **UX Honeycomb**, a successful UX product must satisfy:

1. **Useful** — Does it solve a real user problem?
2. **Usable** — Can users accomplish goals easily?
3. **Desirable** — Is the experience emotionally engaging?
4. **Findable** — Can users locate features/ content?
5. **Accessible** — Can users with disabilities use it?
6. **Credible** — Does the user trust the system?
7. **Valuable** — Does it deliver business value?

> [!VISUALIZATION CONTROL]
> **Concept:** Peter Morville's UX Honeycomb (Heptagonal Value Model)
> **Geometric Construction:** A regular heptagon (7 sides) with each vertex representing one UX attribute. The center represents the **Ideal UX** state where all 7 attributes are simultaneously maximized.
> **Visual Description:** Picture a honeycomb-shaped diagram with 7 interconnected cells. The closer all 7 cells are to the center, the higher the UX quality. A diagram with one missing cell (e.g., "Inaccessible") represents a **broken UX** regardless of how beautiful the other 6 cells are.
> **Desmos Input (Heptagon Vertices on unit circle):**
> * `P1 = (cos(0°), sin(0°))`
> * `P2 = (cos(51.43°), sin(51.43°))`
> * `P3 = (cos(102.86°), sin(102.86°))`
> * `P4 = (cos(154.29°), sin(154.29°))`
> * `P5 = (cos(205.71°), sin(205.71°))`
> * `P6 = (cos(257.14°), sin(257.14°))`
> * `P7 = (cos(308.57°), sin(308.57°))`
> Connect adjacent points to form the UX Honeycomb.

---

## 1.4 Why UX Matters in AR/VR (Module 1 Context)

AR/VR systems introduce **unique UX challenges** that traditional 2D interfaces do not face:

| Challenge | UX Implication |
|---|---|
| **Motion sickness (cybersickness)** | Latency must be ≤ **20 ms** to prevent nausea |
| **Spatial disorientation** | Need clear affordances, virtual hand controllers |
| **Eye strain & vergence-accommodation conflict** | Comfortable IPD (interpupillary distance) settings |
| **Cognitive overload in immersive 3D** | Progressive disclosure, focus guidance |
| **Embodiment & presence** | Avatar design, haptic feedback |
| **Social acceptability in AR** | Subtle visual cues, privacy in public spaces |

> [!NOTE]
> The KTU 2024 syllabus for **PECST865** specifically highlights that AR/VR interaction designers must extend classical UX principles (Nielsen Heuristics, Gestalt Laws, Fitts's Law) into **3D spatial contexts**.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU Formula Sheet

## 2.1 Don Norman's Six Principles of Design (Foundational for KTU)

Don Norman, in *The Design of Everyday Things*, defines **six fundamental design principles** that form the bedrock of UX theory. These are **high-yield for KTU 14-mark questions**.

### Principle 1: **Affordance**
An **affordance** is a property of an object that suggests how it can be used. Affordances exist whether perceived or not.

*Example:* A door handle **affords** pulling. A flat plate **affords** pushing. A physical button on a VR controller **affords** pressing.

> *Real Affordance vs. Perceived Affordance:*
> - **Real Affordance:** "This button CAN be pressed."
> - **Perceived Affordance / Signifier:** "This button LOOKS pressable."

In AR/VR, affordances are crucial because **users have no physical world reference**. Spatial cues (depth, lighting, animation) become the primary affordance carriers.

### Principle 2: **Signifier**
A **signifier** is a perceivable indicator that communicates where the action should take place. It is the *signal* of an affordance.

*Example:*
- An underlined blue word on a webpage = signifier for "clickable link"
- A glowing controller button in VR = signifier for "press to select"
- A subtle arrow icon on a door = signifier for "push here"

> [!IMPORTANT]
> **KTU Trap:** Students often confuse **affordance** (the action possibility) with **signifier** (the indicator of the action). In valuation, you must distinguish them clearly.

### Principle 3: **Mapping**
**Mapping** refers to the relationship between a control and its effect. **Natural mapping** uses spatial analogies and cultural standards so that the relationship is obvious.

*Example:*
- A stove's burner knobs are arranged in the **same layout** as the burners (excellent natural mapping).
- A TV remote with arbitrary button arrangement (poor mapping).
- In a VR driving sim, tilting the steering wheel left = car turns left (excellent natural mapping).

### Principle 4: **Feedback**
**Feedback** is the communication of the result of an action back to the user. It must be:
- **Immediate** (≤ 100 ms for tactile, ≤ 1 s for visual confirmation)
- **Informative** (tells what happened, not just that something happened)
- **Appropriate** (modality matches the action)

*Example:* Pressing a VR menu button should produce a **click sound, haptic vibration, and visual highlight** simultaneously — multi-modal feedback.

### Principle 5: **Constraints**
**Constraints** limit the possible actions a user can take, preventing errors.

Types of constraints (Norman's classification):
1. **Physical constraints** — e.g., a USB-C plug fits only one way
2. **Semantic/cultural constraints** — red = stop, green = go
3. **Logical constraints** — derived from the situation (e.g., cursor can only move in valid areas)
4. **Cultural constraints** — learned conventions (e.g., OK gesture means approve)

In AR/VR, **gaze-based constraints** (you can only interact with objects you're looking at) reduce accidental selections.

### Principle 6: **Conceptual Model**
A **conceptual model** is the user's mental model of how a system works. Designers must communicate a clear, consistent model through:
- Documentation
- Onboarding
- Visible cues
- Metaphors (e.g., the **desktop metaphor** for GUIs, the **room metaphor** for VR home environments)

---

## 2.2 Jakob Nielsen's 10 Usability Heuristics (Mandatory for KTU)

Jakob Nielsen's **10 Heuristics for User Interface Design** (1994) are the **gold standard for usability evaluation** in industry and are extensively tested in KTU examinations.

| # | Heuristic | KTU-Friendly Explanation |
|---|---|---|
| **H1** | **Visibility of System Status** | The system should always inform users about what is going on, through appropriate feedback within reasonable time. |
| **H2** | **Match Between System and the Real World** | Speak the users' language, with words, phrases, and concepts familiar to the user, rather than system-oriented terms. |
| **H3** | **User Control and Freedom** | Users often perform actions by mistake. They need a clearly marked "emergency exit" — undo/redo. |
| **H4** | **Consistency and Standards** | Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions. |
| **H5** | **Error Prevention** | Even better than good error messages is a careful design that prevents a problem from occurring in the first place. |
| **H6** | **Recognition rather than Recall** | Minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information. |
| **H7** | **Flexibility and Efficiency of Use** | Accelerators (unseen by the novice) can often speed up the interaction for the expert user. |
| **H8** | **Aesthetic and Minimalist Design** | Interfaces should not contain information that is irrelevant or rarely needed. |
| **H9** | **Help Users Recognize, Diagnose, and Recover from Errors** | Error messages should be expressed in plain language, precisely indicate the problem, and constructively suggest a solution. |
| **H10** | **Help and Documentation** | Provide easy-to-search, task-focused help. |

> [!TIP]
> **KTU 14-Mark Strategy:** When asked to *"Evaluate the UX of a given app using Nielsen's Heuristics,"* structure your answer as a **scoring matrix** — list each heuristic, mark **Severity (0–4)**, and justify with examples from the app. This format is examiner-friendly.

---

## 2.3 KTU High-Yield UX Formulas & Mathematical Laws

Although UX is qualitative, several **quantitative laws** are examinable in KTU. These are the **must-know formulas**:

### **Formula 1: Fitts's Law** (Movement Time Prediction)

$$ MT = a + b \cdot \log_2 \left( \frac{D}{W} + 1 \right) $$

Where:
- $MT$ = **Movement Time** (seconds)
- $a$ = Start/stop time constant
- $b$ = Slope (device-dependent)
- $D$ = **Distance** from target to cursor
- $W$ = **Width** of the target in the direction of motion
- $ID = \log_2\left(\frac{D}{W} + 1\right)$ = **Index of Difficulty** (in bits)

> **UX Implication:** Make targets **larger** and **closer** to reduce selection time. In VR, the **ray-cast cursor** length and **target size** must follow Fitts's Law.

### **Formula 2: Hick's Law** (Decision Time)

$$ T = b \cdot \log_2(n + 1) $$

Where:
- $T$ = **Decision time** (seconds)
- $b$ = Empirical constant (≈ 0.155 s for novice users)
- $n$ = Number of equally probable choices

> **UX Implication:** **Reduce choices** to speed up decisions. Apple famously limits menu items to ≤ 7 visible options (Miller's Law alignment).

### **Formula 3: Miller's Law (Working Memory Limit)**

$$ \text{Capacity} \approx 7 \pm 2 \text{ chunks} $$

> **UX Implication:** Group information into **chunks** (e.g., phone numbers as 3-3-4, not 10 digits).

### **Formula 4: Jakob Nielsen's 5-User Test Formula (Discount Usability)**

$$ N = \text{Percentage of usability issues} \times 5 \text{ (approx.)} $$

The 5-user test (with iterative cycles) reveals approximately **85% of usability issues**. The curve is **diminishing returns**:

| Number of Test Users | Approx. % of Issues Found |
|---|---|
| 3 users | ~ 65% |
| 5 users | ~ 85% |
| 10 users | ~ 95% |
| 15 users | ~ 97% |

### **Formula 5: Latency Constraints in VR (AR/VR Specific)**

| Metric | Threshold | User Impact |
|---|---|---|
| **Motion-to-Photon Latency** | ≤ **20 ms** | Above 20 ms → motion sickness |
| **Frame Rate** | ≥ **90 Hz** (ideally 120 Hz) | Below 90 → judder, nausea |
| **Tracking Jitter** | ≤ **1 mm** | Above → loss of presence |
| **Refresh Rate (Persistence)** | ≤ **2 ms** pixel persistence | Above → smearing |

---

## 2.4 Gestalt Principles of Visual Perception (Mandatory for KTU)

The **Gestalt Laws** explain how users perceive visual elements as organized patterns rather than isolated parts. These are critical for **layout, grouping, and visual hierarchy** in UX.

| Gestalt Principle | Definition | UX Application |
|---|---|---|
| **Proximity** | Elements close together are perceived as a group | Form fields, related buttons |
| **Similarity** | Elements with similar visual properties are grouped | Same color = same function |
| **Closure** | Mind fills in gaps to perceive complete shapes | Logos, icon design |
| **Continuity** | Eye follows smooth, continuous lines | Navigation paths, breadcrumb trails |
| **Common Region** | Elements within the same bounded area are grouped | Cards, modals, pop-ups |
| **Figure-Ground** | Distinguishes object (figure) from background | Modal dialogs, AR overlays |
| **Symmetry & Order** | Symmetrical elements are perceived as a unified group | Layout grids, balanced composition |
| **Past Experience** | Previous exposure influences perception | Icons (trash, home, gear) |

> [!IMPORTANT]
> **KTU Pitfall:** Do NOT list only 2–3 Gestalt laws and stop. Examiners expect **all 8** with at least one UX example each.

---

## 2.5 The UX Design Lifecycle (Double Diamond Model)

The **Double Diamond** (UK Design Council, 2005) is the **industry-standard UX lifecycle** and a guaranteed KTU topic.

**Four Phases:**
1. **Discover** (Divergent) — Research the problem space, user needs
2. **Define** (Convergent) — Synthesize insights, define the core problem
3. **Develop** (Divergent) — Generate many possible solutions (sketches, prototypes)
4. **Deliver** (Convergent) — Finalize, test, iterate, ship

**Activities per phase:**

| Phase | Activities | Deliverables |
|---|---|---|
| **Discover** | User interviews, surveys, competitive analysis, field studies | Research report, personas, empathy maps |
| **Define** | Affinity mapping, user journey maps, problem statements | Point-of-View (POV) statement, How-Might-We questions |
| **Develop** | Sketching, wireframing, prototyping, design studio | Low-fidelity → High-fidelity prototypes |
| **Deliver** | Usability testing, iteration, handoff to dev | Final design spec, design system |

---

## 2.6 Real-World Engineering Utility

UX principles are deployed across:

| Industry | UX Application |
|---|---|
| **Healthcare (Surgical VR)** | Hand-tracking affordances, latency reduction for training simulators |
| **Automotive (AR HUDs)** | Fitts's Law for in-air gestures; Hick's Law for menu hierarchies |
| **Aviation (Cockpit UX)** | Don Norman's mapping principles for instrument layouts |
| **E-Commerce** | Gestalt grouping for product cards, Hick's Law for checkout steps |
| **Gaming (VR/AR)** | Presence, embodiment, cybersickness mitigation |
| **Assistive Tech** | WCAG 2.2 accessibility, voice-first interfaces |

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Frameworks & Implementation

## 3.1 Exhaustive UX Design Process (Module 1 — Exam-Ready Framework)

The following is a **production-grade, end-to-end UX process** that can be cited in any 14-mark KTU answer. Each phase contains:
- **Goal**
- **Methods**
- **Deliverables**
- **Tools**

### **Phase 1: Empathize (User Research)**

**Goal:** Understand user behaviors, needs, motivations, and pain points.

**Methods:**
1. **User Interviews** — One-on-one, semi-structured, 30–60 min sessions
2. **Surveys/Questionnaires** — Quantitative data, large sample (N ≥ 30)
3. **Contextual Inquiry** — Observation in real environment
4. **Field Studies / Ethnography** — Long-term immersion
5. **Diary Studies** — User logs experiences over days/weeks
6. **Competitive Analysis** — Benchmark against 3–5 competitors

**Tools:** Otter.ai (transcription), Typeform (surveys), Miro (affinity boards), Dovetail (research repository)

**Deliverables:**
- Research report
- User personas
- Empathy maps

### **Phase 2: Define (Problem Synthesis)**

**Goal:** Convert raw research into a clear, actionable problem statement.

**Methods:**
1. **Affinity Mapping** — Cluster insights into themes
2. **Persona Development** — Archetypal user representation
3. **Empathy Map Canvas** — Says / Thinks / Does / Feels
4. **User Journey Mapping** — Touchpoint-by-touchpoint experience
5. **Point-of-View (POV) Statement** — `[User] needs [need] because [insight]`
6. **How-Might-We (HMW) Questions** — Frame opportunities

**POV Statement Template:**
> *"[User persona] needs [need/want] because [surprising insight from research]."*

**Example:**
> *"Sarah, a 28-year-old architect, needs to visualize 3D building models in real-world scale because her clients struggle to interpret 2D blueprints during on-site walkthroughs."*

### **Phase 3: Ideate (Solution Generation)**

**Methods:**
1. **Brainstorming** (with rules: defer judgment, quantity over quality, build on ideas)
2. **SCAMPER** (Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse)
3. **Crazy 8s** (8 ideas in 8 minutes)
4. **Storyboarding** (6-panel narrative)
5. **Sketching** (low-fidelity, paper-based)

### **Phase 4: Prototype (Build to Think)**

**Fidelity Levels:**

| Level | Type | Tools | When |
|---|---|---|---|
| **Low-Fi** | Paper sketches, wireframes | Pen + paper, Balsamiq | Early ideation |
| **Mid-Fi** | Clickable wireframes | Figma, Adobe XD | After concept approval |
| **High-Fi** | Pixel-perfect, interactive | Figma, Sketch + InVision | Pre-development validation |
| **Functional** | Coded, real data | React, Unity, WebXR | Final testing |

### **Phase 5: Test (Usability Validation)**

**Methods:**
1. **Moderated Usability Testing** — 1-on-1, think-aloud protocol
2. **Unmoderated Remote Testing** — UserTesting.com, Maze.co
3. **A/B Testing** — Compare two variants statistically
4. **Heuristic Evaluation** — Expert review using Nielsen's 10 heuristics
5. **Accessibility Audit** — WCAG 2.2 AA/AAA compliance

**Sample Test Plan Table (examinable):**

| Parameter | Specification |
|---|---|
| Sample size | 5 users (Nielsen) or 30+ for statistical A/B |
| Task | "Find a product and add to cart" |
| Success metric | Task completion rate, time-on-task, error count |
| Severity scale | 0 (cosmetic) → 4 (catastrophic) |
| Tool | Morae, Lookback, Maze |

---

## 3.2 Implementation: UX Heuristic Evaluation Scoring System (Code)

A **fully operational Python implementation** of Nielsen's 10-heuristic scoring engine — ready for KTU lab/practical exams.

```python
"""
heuristic_evaluator.py
KTU PECST865 — Heuristic Evaluation Engine
Implements Jakob Nielsen's 10 Usability Heuristics with severity scoring.
"""

from dataclasses import dataclass, field
from typing import List, Dict
from datetime import datetime
import json
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)
logger = logging.getLogger("UX_Evaluator")


@dataclass
class UsabilityFinding:
    """A single usability finding from heuristic evaluation."""
    heuristic_id: int
    heuristic_name: str
    description: str
    severity: int          # 0 (cosmetic) → 4 (catastrophic)
    frequency: int         # 1 (rare) → 4 (very common)
    screenshot_ref: str = ""
    location: str = ""

    def priority_score(self) -> float:
        """Calculate priority score using Nielsen's formula."""
        return self.severity * self.frequency


@dataclass
class HeuristicReport:
    """Aggregated report for a UX evaluation session."""
    product_name: str
    evaluator: str
    findings: List[UsabilityFinding] = field(default_factory=list)
    timestamp: str = field(default_factory=lambda: datetime.now().isoformat())

    def add_finding(self, finding: UsabilityFinding) -> None:
        if not 0 <= finding.severity <= 4:
            raise ValueError("Severity must be in range 0-4")
        if not 1 <= finding.frequency <= 4:
            raise ValueError("Frequency must be in range 1-4")
        self.findings.append(finding)
        logger.info("Finding added: %s | Severity=%d", finding.heuristic_name, finding.severity)

    def severity_index(self) -> float:
        """Compute average severity index (lower is better)."""
        if not self.findings:
            return 0.0
        total = sum(f.priority_score() for f in self.findings)
        return round(total / len(self.findings), 2)

    def by_heuristic(self) -> Dict[int, List[UsabilityFinding]]:
        grouped: Dict[int, List[UsabilityFinding]] = {}
        for f in self.findings:
            grouped.setdefault(f.heuristic_id, []).append(f)
        return grouped

    def export(self) -> str:
        return json.dumps(
            {
                "product": self.product_name,
                "evaluator": self.evaluator,
                "timestamp": self.timestamp,
                "severity_index": self.severity_index(),
                "findings": [f.__dict__ for f in self.findings],
            },
            indent=2,
        )


# Nielsen's 10 Heuristics
NIELSEN_HEURISTICS: Dict[int, str] = {
    1: "Visibility of System Status",
    2: "Match Between System and the Real World",
    3: "User Control and Freedom",
    4: "Consistency and Standards",
    5: "Error Prevention",
    6: "Recognition rather than Recall",
    7: "Flexibility and Efficiency of Use",
    8: "Aesthetic and Minimalist Design",
    9: "Help Users Recognize, Diagnose, and Recover from Errors",
    10: "Help and Documentation",
}


def evaluate_mobile_app(app_name: str, evaluator: str) -> HeuristicReport:
    """Run a sample heuristic evaluation on a mobile AR app."""
    report = HeuristicReport(product_name=app_name, evaluator=evaluator)

    sample_findings: List[UsabilityFinding] = [
        UsabilityFinding(
            heuristic_id=1,
            heuristic_name=NIELSEN_HEURISTICS[1],
            description="Loading spinner does not appear when AR model is fetching.",
            severity=3,
            frequency=4,
            location="AR Scan Screen",
        ),
        UsabilityFinding(
            heuristic_id=4,
            heuristic_name=NIELSEN_HEURISTICS[4],
            description="'Save' button is blue on the home screen but green in the settings menu.",
            severity=2,
            frequency=3,
            location="Settings → Profile",
        ),
        UsabilityFinding(
            heuristic_id=6,
            heuristic_name=NIELSEN_HEURISTICS[6],
            description="Users must remember the 4-digit gesture code for advanced actions.",
            severity=3,
            frequency=2,
            location="Gesture Settings",
        ),
        UsabilityFinding(
            heuristic_id=9,
            heuristic_name=NIELSEN_HEURISTICS[9],
            description="Error message 'Code 0x4A' is shown without explanation.",
            severity=4,
            frequency=2,
            location="Login Failure",
        ),
    ]

    for finding in sample_findings:
        report.add_finding(finding)

    return report


if __name__ == "__main__":
    print("\n===== KTU Heuristic Evaluation Demo =====\n")
    report = evaluate_mobile_app("AR-Walk Kerala Tourism App", "Dr. Anjali Menon")

    print(f"Product        : {report.product_name}")
    print(f"Evaluator      : {report.evaluator}")
    print(f"Total Findings : {len(report.findings)}")
    print(f"Severity Index : {report.severity_index()}")
    print("\nFindings by Heuristic:")
    for h_id, findings in report.by_heuristic().items():
        print(f"  H{h_id}: {NIELSEN_HEURISTICS[h_id]} → {len(findings)} issue(s)")

    print("\n--- Exported JSON Report ---")
    print(report.export())
```

**Expected Output Snippet:**
```
===== KTU Heuristic Evaluation Demo =====

Product        : AR-Walk Kerala Tourism App
Evaluator      : Dr. Anjali Menon
Total Findings : 4
Severity Index : 8.5

Findings by Heuristic:
  H1: Visibility of System Status → 1 issue(s)
  H4: Consistency and Standards → 1 issue(s)
  H6: Recognition rather than Recall → 1 issue(s)
  H9: Help Users Recognize, Diagnose, and Recover from Errors → 1 issue(s)
```

---

## 3.3 Worked-Out Numerical: Fitts's Law Application

**Problem (KTU-style, 7 marks):**
A VR developer places a target button at a distance $D = 40$ cm from the user's controller. The button has a circular width $W = 2$ cm. The device constants are $a = 0.05$ s and $b = 0.10$ s/bit. Calculate:
1. The **Index of Difficulty (ID)**
2. The **predicted Movement Time (MT)**

**Step 1: State the Formula**

$$ MT = a + b \cdot \log_2 \left( \frac{D}{W} + 1 \right) $$

**Step 2: Compute the Ratio**

$$ \frac{D}{W} = \frac{40 \text{ cm}}{2 \text{ cm}} = 20 $$

**Step 3: Compute the Argument of $\log_2$**

$$ \frac{D}{W} + 1 = 20 + 1 = 21 $$

**Step 4: Compute the Index of Difficulty**

$$ ID = \log_2(21) $$

$$ \log_2(21) = \frac{\ln(21)}{\ln(2)} = \frac{3.0445}{0.6931} \approx 4.392 \text{ bits} $$

**Step 5: Compute the Movement Time**

$$ MT = 0.05 + 0.10 \cdot 4.392 $$

$$ MT = 0.05 + 0.4392 $$

$$ MT = 0.4892 \text{ s} \approx 489 \text{ ms} $$

**Step 6: Interpret**

> A movement time of **489 ms** for a 40 cm target is acceptable in VR (< 500 ms), but if the target is small (W = 1 cm), the time will **exceed 600 ms**, causing user fatigue.

**Optimization Insight (Valuation Tip — +1 mark):**
If the developer increases the target width to $W = 4$ cm, recomputing:

$$ \frac{D}{W} = \frac{40}{4} = 10 \Rightarrow ID = \log_2(11) \approx 3.459 \text{ bits} $$

$$ MT = 0.05 + 0.10 \cdot 3.459 = 0.396 \text{ s} = 396 \text{ ms} $$

> **Result:** Doubling target width reduced movement time by ~93 ms — validating Fitts's Law UX heuristic: *"Larger targets = faster, more accurate selection."*

---

## 3.4 Worked-Out Numerical: Hick's Law in Menu Design

**Problem (KTU-style, 7 marks):**
An AR app has a navigation menu with $n = 16$ items arranged in a single dropdown. If $b = 0.155$ s (a typical Hick's Law constant), calculate the decision time. The designer is considering breaking this into two cascading menus of $n_1 = 4$ and $n_2 = 4$ items. Recompute and justify the design choice.

**Step 1: Decision Time with $n = 16$**

$$ T_{\text{single}} = 0.155 \cdot \log_2(16 + 1) = 0.155 \cdot \log_2(17) $$

$$ \log_2(17) = \frac{\ln(17)}{\ln(2)} = \frac{2.833}{0.693} \approx 4.087 $$

$$ T_{\text{single}} = 0.155 \cdot 4.087 \approx 0.633 \text{ s} $$

**Step 2: Decision Time with Hierarchical Menus ($n_1 = 4, n_2 = 4$)**

The user makes **two sequential decisions**:

$$ T_{\text{cascade}} = 0.155 \cdot \log_2(4 + 1) + 0.155 \cdot \log_2(4 + 1) $$

$$ T_{\text{cascade}} = 0.155 \cdot \log_2(5) + 0.155 \cdot \log_2(5) $$

$$ \log_2(5) = \frac{\ln(5)}{\ln(2)} = \frac{1.609}{0.693} \approx 2.322 $$

$$ T_{\text{cascade}} = 2 \cdot (0.155 \cdot 2.322) = 2 \cdot 0.360 = 0.720 \text{ s} $$

**Step 3: Counter-Intuitive Insight (Valuation Gold!)**

Wait — the cascade is **slower** (0.720 s vs 0.633 s)?

> **This is a classic UX teaching point:** Hick's Law says more choices = slower, BUT each *additional level* adds a decision. If the alternative is **search/scroll**, then hierarchical may still be preferred for **discoverability** and **cognitive chunking** (Miller's Law).

**Step 4: Optimal Design Recommendation**

| Approach | Time (s) | Discoverability | Cognitive Load |
|---|---|---|---|
| 16 items flat | 0.633 | Poor (overwhelming) | High |
| 2 × 4 cascade | 0.720 | Excellent | Low |
| **Grouped (5 chunks of ~3)** | ≈ 0.500 | Excellent | Lowest |

> **Final Answer:** Group items into **3–5 semantic categories** to balance Hick's Law with Miller's Law. This is the **MECE Principle** (Mutually Exclusive, Collectively Exhaustive).

---

## 3.5 UX Research: Persona Development Table (Exam-Ready)

A **Persona** is a fictional, research-based archetype of a target user.

| Attribute | Detail |
|---|---|
| **Name** | Priya Krishnan |
| **Photo** | [Stock image, smiling Kerala saree] |
| **Demographics** | 32, B.Tech, software engineer, Kochi |
| **Goals** | Learn AR development for career switch |
| **Pain Points** | No time for long courses; intimidated by 3D math |
| **Behaviors** | Watches YouTube tutorials; learns in 15-min sprints |
| **Tech Savviness** | High (developer), Low (3D/AR) |
| **Quote** | *"I wish AR had a friendlier onboarding, like a 5-minute first project."* |
| **Primary Device** | Meta Quest 3 (at home), iPhone (on the go) |

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 UX Design Double Diamond Lifecycle (Mermaid)

```mermaid
flowchart LR
    subgraph Diamond1["DIAMOND 1 - Problem Space"]
        direction LR
        D1A["Discover\n(User Research)\n- Interviews\n- Surveys\n- Field Studies"]:::diamond
        D1B["Define\n(Problem Synthesis)\n- Personas\n- Empathy Maps\n- POV Statement"]:::converge
    end

    subgraph Diamond2["DIAMOND 2 - Solution Space"]
        direction LR
        D2A["Develop\n(Ideation + Prototyping)\n- Sketching\n- Wireframes\n- Hi-Fi Mockups"]:::diamond
        D2B["Deliver\n(Testing + Iteration)\n- Usability Tests\n- Heuristic Eval\n- Final Handoff"]:::converge
    end

    D1A -- divergent research --> D1B
    D1B -- refined problem --> D2A
    D2A -- divergent solutions --> D2B
    D2B -- feedback loop --> D1A

    classDef diamond fill:#FFD700,stroke:#333,stroke-width:2px,color:#000
    classDef converge fill:#87CEEB,stroke:#333,stroke-width:2px,color:#000
```

**Reading the Diagram:**
- The two diamonds represent **divergent-then-convergent** thinking.
- **Diamond 1** = "What is the right problem?"
- **Diamond 2** = "What is the right solution?"
- The arrow from D2B back to D1A is the **Iterative Feedback Loop** — central to KTU 2024 outcomes.

---

## 4.2 Norman's Six Principles — Cause-Effect Interaction Model

```mermaid
flowchart TB
    subgraph UserLayer["USER"]
        U1["Goal: Open Settings in VR"]:::user
        U2["Forms Intention"]:::user
        U3["Specifies Action Sequence"]:::user
        U4["Executes Action"]:::user
        U5["Perceives System State"]:::user
        U6["Interprets Feedback"]:::user
        U7["Compares with Goal"]:::user
    end

    subgraph SystemLayer["SYSTEM (VR App)"]
        S1["Affordance: Gear icon glows"]:::system
        S2["Signifier: Floating label 'Settings'"]:::system
        S3["Mapping: Controller trigger = select"]:::system
        S4["Feedback: Haptic + sound + highlight"]:::system
        S5["Constraint: Only gaze-tracked objects are interactive"]:::system
        S6["Conceptual Model: Familiar OS-style menu"]:::system
    end

    U1 --> U2 --> U3 --> U4
    U4 --> S1
    S1 --> S2 --> S3 --> S4
    S4 --> S5 --> S6
    S6 --> U5 --> U6 --> U7
    U7 -- "goal achieved?" --> U1

    classDef user fill:#FFB6C1,stroke:#333,stroke-width:2px,color:#000
    classDef system fill:#98FB98,stroke:#333,stroke-width:2px,color:#000
```

**Mapping to Norman's 7 Stages of Action:**
1. Goal formation
2. Intention formation
3. Action specification
4. Execution
5. Perception
6. Interpretation
7. Evaluation

This **Gulf of Execution** and **Gulf of Evaluation** model is **guaranteed KTU** content.

---

## 4.3 Nielsen's 10 Heuristics — Mind Map Topology

```mermaid
mindmap
  root((Nielsen 10\nHeuristics))
    H1 Visibility
      Loading indicators
      Status messages
      Progress bars
    H2 Real World Match
      User language
      Familiar metaphors
      Logical flow
    H3 User Freedom
      Undo and Redo
      Cancel actions
      Exit paths
    H4 Consistency
      Same icons same meaning
      Platform conventions
      Color coding
    H5 Error Prevention
      Confirm destructive actions
      Constrained inputs
      Smart defaults
    H6 Recognition Recall
      Visible options
      Tooltips
      Recently used
    H7 Flexibility
      Keyboard shortcuts
      Customization
      Power user paths
    H8 Minimalism
      Remove clutter
      Progressive disclosure
      Whitespace
    H9 Error Recovery
      Plain language errors
      Suggested solutions
      Highlight issue
    H10 Help Docs
      Searchable
      Task focused
      Contextual
```

---

## 4.4 UX Design Process — Sequential Processing Topology

```mermaid
sequenceDiagram
    autonumber
    participant PM as Product Manager
    participant UXR as UX Researcher
    participant UXD as UX Designer
    participant UID as UI Designer
    participant DEV as Developer
    participant QA as QA / Usability Tester
    participant USR as End User

    PM->>UXR: Define business goals and KPIs
    UXR->>USR: Conduct user interviews and surveys
    UXR->>UXR: Synthesize affinity map and personas
    UXR->>UXD: Deliver research insights and POV
    UXD->>UXD: Sketch and ideate (Crazy 8s)
    UXD->>UXD: Create low-fidelity wireframes
    UXD->>UID: Hand off approved wireframes
    UID->>UID: Build high-fidelity mockups
    UID->>DEV: Export assets, design system, specs
    DEV->>QA: Build functional prototype
    QA->>USR: Conduct moderated usability tests
    USR-->>QA: Tasks, errors, feedback
    QA->>UXD: Report usability findings (severity)
    UXD->>UXD: Iterate designs
    UXD->>DEV: Final handoff
    DEV->>USR: Production release
    USR-->>UXR: Post-launch analytics and NPS
    UXR-->>PM: Continuous discovery loop
```

---

## 4.5 AR/VR-Specific UX Architecture Block Diagram

```mermaid
flowchart TB
    subgraph InputLayer["INPUT LAYER"]
        A1["Head Tracking\n6DoF IMU"]:::input
        A2["Eye Tracking\nFoveated Rendering"]:::input
        A3["Hand Tracking\nLeap Motion / Controller"]:::input
        A4["Voice / Speech\nNLP Intent"]:::input
    end

    subgraph ProcessingLayer["PROCESSING LAYER"]
        B1["UX Engine\nFitts + Hick Laws"]:::process
        B2["Spatial Mapper\nSLAM, Anchors"]:::process
        B3["Latency Optimizer\n20 ms target"]:::process
        B4["Accessibility Module\nWCAG, Subtitles"]:::process
    end

    subgraph OutputLayer["OUTPUT LAYER"]
        C1["Stereoscopic Display\n90-120 Hz"]:::output
        C2["Spatial Audio\nHRTF"]:::output
        C3["Haptic Feedback\nVest / Gloves"]:::output
        C4["UI / HUD\nFoveated"]:::output
    end

    subgraph FeedbackLayer["FEEDBACK LOOP"]
        D1["User Behavior\nAnalytics"]:::feedback
        D2["Cybersickness\nMonitor"]:::feedback
    end

    A1 --> B2
    A2 --> B2
    A3 --> B1
    A4 --> B1
    B1 --> B3
    B2 --> B3
    B3 --> C1
    B1 --> C4
    B2 --> C2
    A3 --> C3
    C1 --> D1
    C2 --> D1
    C3 --> D1
    C4 --> D2
    D1 --> B1
    D2 --> B4

    classDef input fill:#FFA07A,stroke:#333,color:#000
    classDef process fill:#87CEFA,stroke:#333,color:#000
    classDef output fill:#90EE90,stroke:#333,color:#000
    classDef feedback fill:#DDA0DD,stroke:#333,color:#000
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## **Part A — Short Answer Questions (3 Marks Each)**

### **Q1. [KTU University Exam — July 2024]**
**Define User Experience (UX) Design. List any four components of UX with one-line explanations.** *(CO1, Remember)*

**Model Answer (3 marks):**

**Definition (1 mark):** User Experience (UX) Design is a human-centered design discipline that focuses on creating products, systems, and services that provide **meaningful, relevant, and satisfying experiences** to users (ISO 9241-210).

**Four components (½ mark each):**
1. **Usability** — Ease of use and task efficiency
2. **Usefulness** — Solves a real user problem
3. **Desirability** — Emotionally engaging
4. **Accessibility** — Inclusive for users with disabilities

---

### **Q2. [KTU University Exam — Dec 2023]**
**Distinguish between Affordance and Signifier with a suitable UX example.** *(CO1, Understand)*

**Model Answer (3 marks):**

| Aspect | Affordance | Signifier |
|---|---|---|
| **Definition** | The property of an object that suggests how it can be used | A perceivable indicator of an affordance |
| **Nature** | Real (action possibility) | Perceived (visible cue) |
| **Example** | A door handle **can be pulled** | A sign on the handle says *"Pull"* |

(½ mark for each distinction, ½ mark for example, 1 mark for clear conceptual difference)

---

## **Part B — 14-Mark Long Answer Questions (Internal Choice Pattern)**

### **Question A (14 Marks) — Option Set 1**
*`[KTU University Exam — Dec 2024]`*

#### **(a) Explain Don Norman's six principles of design with a real-world example for each. (7 marks)** *(CO1, Understand)*

**Model Answer:**

**Introduction (1 mark):**
Donald Norman, in *The Design of Everyday Things* (1988, revised 2013), proposed six fundamental design principles that govern how users interact with objects. These are foundational to UX practice.

**Principle 1: Affordance (1 mark)**
- **Definition:** A property of an object that suggests how it can be used.
- **Example:** A door handle affords pulling; a flat plate affords pushing. In a VR app, a glowing orb on a virtual desk affords "grabbing" because the visual cue invites the gesture.

**Principle 2: Signifier (1 mark)**
- **Definition:** A perceivable indicator that communicates where the action should take place.
- **Example:** A "PULL" label on a door is a signifier of the pulling affordance. In a smartwatch UI, the "swipe up" indicator signifies that more content is available below.

**Principle 3: Mapping (1 mark)**
- **Definition:** The relationship between a control and its effect.
- **Example:** Stove burner knobs arranged in the same layout as the burners — excellent natural mapping. In VR, tilting the steering wheel left rotates the car left.

**Principle 4: Feedback (1 mark)**
- **Definition:** Communication of the result of an action.
- **Example:** A button "presses down" with a click sound and changes color — multi-modal feedback. In a VR game, firing a gun produces recoil, sound, muzzle flash, and haptic vibration simultaneously.

**Principle 5: Constraints (1 mark)**
- **Definition:** Limits that prevent errors.
- **Example:** A USB-C plug fits only one way (physical constraint). In a form, the date field only accepts valid date formats (logical constraint).

**Principle 6: Conceptual Model (1 mark)**
- **Definition:** The user's mental model of how a system works.
- **Example:** The "Desktop Metaphor" — files in folders, recycle bin, etc. — leverages the user's pre-existing mental model of a physical office.

**Conclusion (1 mark):**
These six principles are interdependent. A design that violates any one of them creates user friction, especially critical in immersive AR/VR where users have no physical world reference.

---

#### **(b) With a neat diagram, describe the Double Diamond model of UX design. List the activities in each phase. (7 marks)** *(CO1, Apply)*

**Model Answer:**

**Introduction (1 mark):**
The Double Diamond model, developed by the **UK Design Council in 2005**, is the industry-standard framework for UX design. It comprises two diamonds representing the **Problem Space** and the **Solution Space**, each with a divergent and convergent phase.

**Diagram (2 marks — examiner allocates 2 marks for the diagram):**

```
   Problem Space                    Solution Space
   ┌────────────────┐               ┌────────────────┐
   │   DISCOVER     │               │    DEVELOP     │
   │  (Divergent)   │               │  (Divergent)   │
   │   /        \   │               │   /        \   │
   │  /          \  │               │  /          \  │
   │ /            \ │               │ /            \ │
   │/              \│               │/              \│
   │\              /│               │\              /│
   │ \            / │               │ \            / │
   │  \          /  │               │  \          /  │
   │   \        /   │               │   \        /   │
   │    DEFINE      │               │    DELIVER     │
   │ (Convergent)   │               │  (Convergent)  │
   └────────────────┘               └────────────────┘
```

**Activities per phase (2.5 marks):**

**Phase 1: Discover (Divergent)**
- User interviews
- Surveys & questionnaires
- Contextual inquiry
- Competitive analysis
- Field studies

**Phase 2: Define (Convergent)**
- Affinity mapping
- Persona creation
- Empathy maps
- POV statements
- How-Might-We questions

**Phase 3: Develop (Divergent)**
- Brainstorming
- Sketching & storyboarding
- Wireframing
- Prototyping (low-fi to high-fi)

**Phase 4: Deliver (Convergent)**
- Usability testing
- Heuristic evaluation
- Iteration
- Design system handoff

**Iterative Nature (1 mark):**
The feedback loop from Deliver back to Discover ensures continuous improvement — a **core principle of modern UX practice** and a key KTU 2024 outcome.

---

### **Question B (14 Marks) — Option Set 2 (Alternative Choice)**
*`[KTU University Exam — July 2024]`*

#### **(a) State and explain Jakob Nielsen's 10 usability heuristics. How are they applied to evaluate a mobile AR application? (7 marks)** *(CO1, Understand + Apply)*

**Model Answer:**

**Introduction (½ mark):**
Jakob Nielsen's 10 Usability Heuristics (1994) are the **industry-standard, expert-review evaluation method** for identifying UX issues. They are particularly useful for **discount usability engineering** when formal user testing is not feasible.

**The 10 Heuristics (½ mark each = 5 marks):**

1. **Visibility of System Status** — Always inform users about what is going on (e.g., loading spinners).
2. **Match Between System and the Real World** — Speak the user's language.
3. **User Control and Freedom** — Provide undo/redo and emergency exits.
4. **Consistency and Standards** — Same words/situations/actions should mean the same thing.
5. **Error Prevention** — Design to prevent problems before they occur.
6. **Recognition rather than Recall** — Minimize memory load by making options visible.
7. **Flexibility and Efficiency of Use** — Provide accelerators for expert users.
8. **Aesthetic and Minimalist Design** — Avoid irrelevant information.
9. **Help Users Recognize, Diagnose, and Recover from Errors** — Plain-language error messages.
10. **Help and Documentation** — Provide easy-to-search, task-focused help.

**Application to Mobile AR App (1.5 marks):**

| Heuristic | AR App Violation | Severity (0–4) |
|---|---|---|
| H1 (Visibility) | No loading indicator when scanning QR code | 3 |
| H4 (Consistency) | Back button location differs between AR mode and menu | 2 |
| H5 (Error Prevention) | Accidental pinch-to-zoom exits AR mode | 4 |
| H6 (Recognition) | Gesture controls are hidden in a 4-level deep menu | 3 |
| H9 (Error Recovery) | "Code 0x4A" shown without explanation | 4 |

> **Severity Index = $\frac{\sum (\text{severity} \times \text{frequency})}{N}$**

**Conclusion (½ mark):**
Nielsen's heuristics provide a **fast, low-cost** evaluation method. For a mobile AR app, they should be combined with **user testing** for triangulation.

---

#### **(b) Explain Fitts's Law and Hick's Law with their mathematical formulations. Show how each law is applied in VR/AR interface design. (7 marks)** *(CO1, Apply + Analyze)*

**Model Answer:**

**Fitts's Law (3.5 marks):**

**Statement (½ mark):** Fitts's Law (1954) predicts the **time required to move to a target** as a function of distance to and size of the target.

**Formula (1 mark):**

$$ MT = a + b \cdot \log_2 \left( \frac{D}{W} + 1 \right) $$

Where $MT$ = movement time, $D$ = distance, $W$ = target width, $a$ and $b$ = device constants, and the term $\log_2(D/W + 1)$ is the **Index of Difficulty (ID)** in bits.

**VR/AR Application (1.5 marks):**
- Make interactive elements **large and close** to the user's gaze or hand position.
- Use **larger hit-areas** than visual size (e.g., 50% larger invisible hit-zone).
- **Gaze-based selection** reduces $D$ to near zero, making the target trivially selectable.
- Edge-of-screen UI (e.g., toolbars) leverages **infinite width** for very fast selection (edge of screen = $W \to \infty$, so $ID \to 0$).

**Worked Example (½ mark):**
For $D = 40$ cm, $W = 4$ cm, $a = 0.05$ s, $b = 0.10$ s:

$$ ID = \log_2(40/4 + 1) = \log_2(11) \approx 3.46 \text{ bits} $$

$$ MT = 0.05 + 0.10 \cdot 3.46 = 0.396 \text{ s} $$

---

**Hick's Law (3 marks):**

**Statement (½ mark):** Hick's Law (1952) states that the **time to make a decision** is a logarithmic function of the number of available choices.

**Formula (1 mark):**

$$ T = b \cdot \log_2(n + 1) $$

Where $T$ = decision time, $n$ = number of choices, $b$ = empirical constant.

**VR/AR Application (1 mark):**
- **Limit menu items** to 4–7 per level.
- Use **progressive disclosure** — show only essential choices first.
- **Group items** into semantic categories.
- In VR, **radial menus** with ≤ 8 items outperform larger ones.

**Worked Example (½ mark):**
For $n = 8$, $b = 0.155$ s:

$$ T = 0.155 \cdot \log_2(9) = 0.155 \cdot 3.17 = 0.491 \text{ s} $$

If reduced to $n = 4$:

$$ T = 0.155 \cdot \log_2(5) = 0.155 \cdot 2.32 = 0.360 \text{ s} $$

> **Reduction: 131 ms faster.**

**Conclusion (½ mark):**
Both laws must be balanced in immersive design: **large, few targets** (Fitts + Hick) yield optimal UX. This is the **Cornerstone Principle** of AR/VR interface ergonomics.

---

## **KTU Examiner's Valuation Warning / Pitfall Callout**

> [!WARNING]
> **Common Mark Deductions in UX Design Questions**
> 1. **Conflating UI with UX** — UI is a *component* of UX, not the whole. Always frame answers holistically.
> 2. **Listing without explaining** — Naming Nielsen's heuristics without giving a UX example loses **2–3 marks**.
> 3. **Missing diagrams** — A Double Diamond or Norman Action Cycle diagram carries **2–3 marks** as a separate allocation.
> 4. **Confusing Affordance and Signifier** — Examiners **specifically test** this distinction; use a side-by-side comparison.
> 5. **Forgetting AR/VR Context (PECST865 specific)** — Generic UX answers lose marks. Always tie back to **immersive / spatial computing**.
> 6. **Skipping the formula derivation** — For Fitts's Law, **show every substitution step**; the calculation itself is worth 2–3 marks.
> 7. **Not writing units** — Movement time in **seconds (s)**, ID in **bits** — units are mandatory for full marks.

---

## **Topic Recap & Important Things to Remember**

> [!NOTE]
> **Rapid-Revision Checklist — Module 1: UX Design Principles**

### **Core Definitions**
- **UX (ISO 9241-210):** *"A person's perceptions and responses that result from the use or anticipated use of a product, system or service."*
- **UI:** Visual and interactive layer (subset of UX).
- **Usability:** Ease of completing tasks (measurable).
- **Accessibility (a11y):** Inclusive design for users with disabilities.

### **Don Norman's 6 Principles** *(must remember in order)*
1. **Affordance** — Action possibility
2. **Signifier** — Perceivable cue
3. **Mapping** — Control-to-effect relationship
4. **Feedback** — Result communication
5. **Constraints** — Action limitations
6. **Conceptual Model** — User's mental model

### **Nielsen's 10 Heuristics** *(V1–V10 mnemonic: "Vague, Mismatch, Control, Consistency, Error, Recall, Flex, Minimal, Diagnose, Docs")*

### **Gestalt Laws** *(8 mandatory)*
Proximity · Similarity · Closure · Continuity · Common Region · Figure-Ground · Symmetry · Past Experience

### **Mathematical Laws** *(with units)*
- **Fitts's Law:** $MT = a + b \log_2(D/W + 1)$ — units: **seconds**
- **Hick's Law:** $T = b \log_2(n + 1)$ — units: **seconds**
- **Miller's Law:** $7 \pm 2$ chunks
- **VR Latency Threshold:** $\leq 20$ ms
- **VR Frame Rate:** $\geq 90$ Hz

### **UX Design Process (Double Diamond)**
- **Discover → Define → Develop → Deliver**
- Always include the **iterative feedback loop** in diagrams.

### **UX Honeycomb (Morville)**
7 attributes: Useful, Usable, Desirable, Findable, Accessible, Credible, Valuable.

### **5 Planes of UX (Garrett)**
Strategy → Scope → Structure → Skeleton → Surface.

### **Norman’s 7 Stages of Action** *(exam favorite)*
Goal → Intention → Action Spec → Execution → Perception → Interpretation → Evaluation
- **Gulf of Execution:** Gap between user intention and system actions
- **Gulf of Evaluation:** Gap between system state and user understanding

### **AR/VR-Specific UX Constraints (PECST865)**
- Motion-to-photon latency $\leq 20$ ms
- Frame rate $\geq 90$ Hz
- Eye-tracking IPD adjustment for comfort
- Spatial anchors for affordance signaling
- Haptic + audio + visual multi-modal feedback
- WCAG 2.2 AA compliance for accessibility

### **Tools to Mention in Answers**
- **Wireframing:** Figma, Adobe XD, Balsamiq
- **Prototyping:** InVision, Marvel, ProtoPie, Unity (for VR)
- **User Research:** UserTesting, Maze, Lookback, Otter.ai
- **Analytics:** Hotjar, Google Analytics, Mixpanel
- **Heuristic Evaluation:** Custom scoring matrix (refer to Section 3.2)

> [!TIP]
> **Top 5 High-Yield Sentences for KTU Answers:**
> 1. *"UX is a multidisciplinary, human-centered approach focusing on the entire user journey, not just the interface."*
> 2. *"Norman's six principles — Affordance, Signifier, Mapping, Feedback, Constraints, and Conceptual Model — form the theoretical foundation of interaction design."*
> 3. *"Nielsen's 10 heuristics provide a discount usability evaluation method applicable to AR/VR systems with severity scoring."*
> 4. *"Fitts's Law states that movement time increases logarithmically with distance and decreases with target size — guiding large, close target placement in VR."*
> 5. *"The Double Diamond model, comprising Discover–Define–Develop–Deliver, is the industry-standard UX lifecycle with iterative feedback."*

<!-- SECTION_5_END -->
