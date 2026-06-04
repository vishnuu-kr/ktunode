---
title: "Preparation of CAD drawing of plan, section and elevation of single storied residential building (Experiment 7)."
subject: "CIVIL ENGINEERING DRAFTING LAB"
module: "Module 11: Preparation of CAD drawing of plan, section and elevation of single storied residential building (Experiment 7)."
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f39"
status: "completed"
scrapedAt: "2026-05-20T18:33:28.890Z"
---
# CIVIL ENGINEERING DRAFTING LAB

## Module 11: Preparation of CAD Drawing of Plan, Section, and Elevation of a Single-Storied Residential Building (Experiment 7)

Welcome, everyone, to our practical session on Computer-Aided Design (CAD) for building drawing! Today, in Experiment 7 of Module 11, we're going to bring together all those fundamental principles we've learned and apply them to create a comprehensive set of drawings for a typical single-storied residential building. This isn't just about clicking buttons; it's about understanding how to represent a building effectively in two dimensions so that anyone can visualize and construct it.

### 1. Introduction: Why Draw Plans, Sections, and Elevations?

Think about building a house. You can't just start laying bricks based on a vague idea, right? You need a blueprint. In civil engineering drafting, these blueprints are our plans, sections, and elevations. They serve different, but equally important, purposes.

*   **The Plan:** This is like looking down at your house from directly above, after slicing it horizontally at about sill level (or window sill level, typically). It shows us the layout: where the rooms are, how they connect, the thickness of walls, the position of doors and windows, and even things like built-in furniture or staircases (though not in this single-storied example). It's all about the **horizontal relationships** between different building elements. Remember, a well-organized plan is key to a functional and livable space. This directly relates to **CO1: Illustrate ability to organize civil engineering drawings systematically and professionally.** A good plan shows that you understand how a building functions internally.

*   **The Elevation:** When you look at a building from the outside, you see its elevation. Imagine standing in front of the house and looking straight at it. The front elevation shows the external appearance – the facade, the arrangement of windows and doors on the exterior, the roof line, and any decorative features. We'll also be looking at side and rear elevations, depending on the building’s orientation. Elevations are all about the **vertical aspects** and the **aesthetic appearance** of the building. This helps us visualize how the building looks from the outside, which is crucial for design and client satisfaction. This ties into **CO4: Draft the plan elevation and sectional views of the residential buildings, industrial buildings, and framed structures using software.** We are specifically applying this to residential buildings here.

*   **The Section:** Now, what if we want to know what's happening *inside* the walls, or how different floors are stacked, or how the roof is constructed? That’s where a section comes in. We conceptually slice the building vertically, usually through a key area like a doorway or a window, and then look at the sliced face. A sectional elevation shows us the internal construction, the relationship between the floor, walls, and ceiling, the type of foundation, and how structural elements are connected. It reveals the **hidden details** of the building's structure. This is critical for understanding how the building stands up and how it's put together. **CO3: Develop the sketch of plan, front elevation and sectional elevation from line diagram** is about creating these views, and today we're doing it in CAD, which is what **CO4** emphasizes. Understanding sections also directly relates to **CO2: Illustrate the detailing of building components like doors, windows, roof trusses etc.** as sections often reveal these details clearly.

### 2. Understanding the Building Components

Before we start drawing, let's quickly recap the key components of a typical single-storied residential building, as found in our textbooks like "Building Drawing and Detailing" by Dr. Balagopal T.S. Prabhu and "Building Planning and Drawing" by M.V. Chitawadagi & S.S. Bhavikatti.

*   **Foundation:** The base that supports the entire structure. For a simple residential building, this might be an isolated footing or a strip footing. The section will show us its depth and width.
*   **Walls:** These enclose spaces and support the roof. We'll draw them in plan showing their thickness (e.g., brick walls, block walls) and in section showing their construction material and any openings.
*   **Doors and Windows:** Essential for access, ventilation, and light. In the plan, they’ll be shown as openings in the walls, often with a symbol indicating the direction of swing for doors. In elevations and sections, we’ll see their frames, shutters, and dimensions. **CO2** is all about detailing these, and your CAD drawings should reflect this precision.
*   **Roof:** The overhead covering. For a single-storied building, this could be a sloping roof (pitched roof) with trusses or a flat roof. The plan will show the outline of the roof and how it’s supported, while the section will reveal its construction (e.g., roofing material, supporting beams, ceiling).
*   **Flooring:** The finished surface of the rooms. In plan, we might indicate different flooring materials. In section, we'll see its thickness and construction layers.

### 3. CAD Workflow: From Concept to Drawing

Now, how do we translate these concepts into a CAD drawing? Our reference materials, especially IS 962:1989 (Reaffirmed 2022) – Indian Standard Code of practice for architectural and building drawings, give us the conventions and standards to follow.

The process typically involves several stages:

#### 3.1. Setting Up Your Drawing Environment

This is the foundation of good CAD practice.

*   **Units:** Always start by setting your drawing units. For building drawings, **Millimeters (mm)** or **Meters (m)** are standard. Let’s stick to millimeters for detailed work, as it allows for precise representation of wall thicknesses and component sizes.
*   **Layers:** This is crucial for organization. Think of layers as transparent sheets stacked on top of each other. You can assign different types of entities to different layers. For instance:
    *   A layer for Walls (e.g., "WALLS")
    *   A layer for Doors and Windows (e.g., "DOORS_WINDOWS")
    *   A layer for Furniture and Fixtures (e.g., "FURNITURE")
    *   A layer for Dimensions (e.g., "DIMENSIONS")
    *   A layer for Text and Annotations (e.g., "ANNOTATION")
    *   A layer for Hatching (e.g., "HATCH")
    *   A layer for Hidden Lines (e.g., "HIDDEN") – though in plan, we often show all visible lines.
    Using layers helps you control the visibility, color, and line weight of different elements. If you need to quickly hide all dimensions, you just turn off the "DIMENSIONS" layer. This directly supports **CO1** by ensuring systematic organization.

#### 3.2. Drawing the Plan (Experiment 7 Focus)

Let's start with the plan, as it's the foundation for all other views.

1.  **Outline of Walls:** Using the `LINE` command, you’ll draw the external and internal walls based on provided dimensions or a given layout sketch. Remember to draw these with their correct thickness. For example, if you have a 230mm thick brick wall, you would draw two parallel lines 230mm apart using offset. You can use the `OFFSET` command extensively here.
2.  **Doors and Windows:**
    *   **Doors:** In plan, a door opening is typically shown with a gap in the wall. A curved line, called an arc, indicates the direction of swing. The swing direction is important for functional layout. We show the door frame and the door leaf’s position when open.
    *   **Windows:** Windows are shown as openings within the wall line. The glass panes and frame are represented with specific line types.
    You’ll use commands like `RECTANGLE`, `CIRCLE`, `ARC`, and `TRIM`/`ERASE` to create these openings. This is where **CO2** comes into play – detailing the components.
3.  **Room Labels and Area:** Label each room (e.g., Living Room, Bedroom, Kitchen, Toilet) and, if required, indicate the area. Use the `TEXT` command.
4.  **Dimensions:** Add overall dimensions and room dimensions using the `DIMLINEAR`, `DIMALIGNED`, `DIMCONTINUE` commands. Proper dimensioning is crucial for clarity and is a core aspect of **CO1**.
5.  **Hatching:** Hatching is used to represent materials in section and sometimes to differentiate areas in a plan. For walls, you'd typically use a hatching pattern representing brick or blockwork, or simply a solid fill for plastered walls. Use the `HATCH` command.
6.  **Furniture (Optional but good practice):** Placing basic furniture symbols (beds, tables, sofas) can help visualize the space's usability.

*Relatable Example:* Imagine you're drawing your own bedroom. The plan shows the rectangle of the room, then the line indicating the wall thickness. You’d then draw a gap for the door and an arc showing how it swings into the room. You’d also mark where the window is in the wall. This is exactly what we do in CAD, but with precision and standardized symbols.

#### 3.3. Drawing the Front Elevation

Now, let’s project upwards from the plan to create the front elevation.

1.  **Project Lines:** From key points on your plan (e.g., corners of walls, bottoms and tops of doors/windows), project vertical lines upwards. You can use the `XLINE` (construction line) command for this, setting it to vertical.
2.  **Ground Level and Floor Level:** Establish a ground line. Then, project the floor level of the building.
3.  **Wall Heights:** Draw the external walls up to the sill level of the windows, then to the lintel level, and finally to the parapet or eaves level. The heights are determined by building codes and design. For instance, a typical sill height might be 900mm from the floor, and a lintel height 2100mm from the floor.
4.  **Doors and Windows:** Draw the doors and windows on their projected lines, showing their frames, shutters, and any detailing like grills or panes. Use different line weights to differentiate elements. For example, the outer frame might be thicker than the window panes. This is where you really show your understanding for **CO2**.
5.  **Roof Line:** Draw the outline of the roof as seen from the front. If it’s a pitched roof, you’ll see the slope.
6.  **Ground Line and Other Features:** Add any ground features like steps or landscaping visible from the front.
7.  **Dimensions and Labels:** Add key vertical dimensions (sill height, lintel height, overall height) and labels.

*Relatable Example:* Think of your house from the street. The front elevation is what the visitor sees. It shows the main entrance door, the windows on that side of the house, and the shape of the roof. It’s the building’s public face.

#### 3.4. Drawing the Sectional Elevation (e.g., Section A-A)

This view is crucial for understanding construction. Let’s assume we’re cutting a section through the living room and a bedroom, passing through a door.

1.  **Establish the Section Line:** In the plan view, you would have drawn a line (typically a thick dashed line with arrows at the ends) indicating where the building is being "sliced." This line is labelled, e.g., "SECTION A-A".
2.  **Project Cutting Plane Lines:** From the points where the cutting plane line intersects the plan (wall lines, door openings, window openings), project vertical lines upwards.
3.  **Show Cut Elements:**
    *   **Walls:** Where the cutting plane passes *through* a wall, you draw its full thickness and apply hatching to represent the material (e.g., brickwork, concrete blockwork). This is a primary demonstration of **CO3** and **CO4**.
    *   **Doors/Windows:** If the cut passes through a door or window opening, you'll show the door frame and shutter (if cut through) or the window frame and sill/lintel.
    *   **Hidden Lines:** Elements that are *behind* the cutting plane but would be visible if you looked from the side are shown using dashed lines (hidden lines). For example, a wall behind the plane of section might be shown as a hidden line.
4.  **Show Vertical Structure:** Clearly depict the floor slab, wall construction (layers like plaster, brick, air gap), and the roof structure (beams, rafters, ceiling boards, roofing material). This is where the detailing for **CO2** becomes vital. You might show the foundation depth and type too.
5.  **Differentiate Materials:** Use appropriate hatching patterns to clearly show different materials like concrete, brick, timber, steel, etc. This is a core skill in structural representation.
6.  **Dimensions and Labels:** Add critical vertical dimensions like floor height, sill height, lintel height, thickness of slabs, foundation depth. Label different structural components.

*Relatable Example:* Imagine you’re a chef slicing a cake to see all the layers – the sponge, the cream, the frosting. A sectional elevation is similar; it slices through the building to reveal its internal construction – the layers of the floor, the wall's makeup, and the roof's structure. It answers questions like "How thick is this wall?" or "What is the roof made of?"

### 4. Adhering to Standards and Codes

Our drafting is not arbitrary. We must follow standards for clarity and consistency.

*   **National Building Code of India (NBC):** This is our primary guide for various aspects of building design and construction, including drawing conventions, minimum room sizes, ventilation requirements, and safety measures.
*   **Kerala Panchayat Building Rules / Kerala Municipality Building Rules:** These are local regulations that dictate building setbacks, floor area ratios, height restrictions, etc., specific to the region. While we might not be applying these rules *in detail* for this drawing exercise, understanding their existence is important.
*   **IS 962:1989 (Reaffirmed 2022):** This Indian Standard is specifically about architectural and building drawings. It defines line types, line weights, hatching symbols, dimensioning practices, and the representation of various building components. For example, it specifies how to draw a door swing or the hatching for brickwork. Following these standards is what makes a drawing universally understandable and professional, directly impacting **CO1**.

### 5. Key CAD Commands and Concepts Recap

As you work through Experiment 7, you’ll be using many CAD commands. Let’s reinforce the most important ones for this task:

*   **Drawing:** `LINE`, `POLYLINE`, `CIRCLE`, `ARC`, `RECTANGLE`, `PLINE`.
*   **Modification:** `OFFSET` (your best friend for wall thickness!), `TRIM`, `EXTEND`, `MOVE`, `COPY`, `ERASE`, `MIRROR`, `ROTATE`, `FILLET`, `CHAMFER`.
*   **Organization:** `LAYER` command for managing drawing elements.
*   **Annotation:** `TEXT` (for single-line and multi-line text), `DIMLINEAR`, `DIMALIGNED`, `DIMCONTINUE`, `DIMBASELINE`, `DIMANGULAR` (for dimensions), `MTEXT`.
*   **Hatching:** `HATCH` command for filling areas with patterns.
*   **Utilities:** `GRID`, `SNAP`, `ORTHO` (essential for drawing straight lines), `ZOOM`, `PAN`.
*   **Blocks:** You can create reusable components like doors and windows as "Blocks" to insert them efficiently.

### 6. Exam Focus: What to Expect

In exams related to this topic, you might be:

*   **Given a line diagram or a description** and asked to produce a plan, elevation, and section in CAD.
*   **Asked to identify specific components** or details from a given drawing.
*   **Tested on your understanding of conventions** (e.g., what a specific line type or hatching pattern signifies).
*   **Evaluated on the clarity, accuracy, and adherence to standards** of your CAD drawings.

**Common Pitfalls:**

*   **Incorrectly drawn door swings:** Always double-check the swing direction.
*   **Inconsistent line weights:** Use different line weights for outlines, hidden lines, and dimensions.
*   **Missing dimensions or incorrect dimensioning:** Ensure all necessary dimensions are present and clearly shown.
*   **Hatching materials incorrectly:** Use the correct hatching for the specified materials.
*   **Poor layer management:** Leading to a cluttered and unmanageable drawing.

**Quick Recall Tip:** Always think:
*   **Plan:** Horizontal slice, layout.
*   **Elevation:** External view, aesthetics.
*   **Section:** Vertical slice, internal construction.

This experiment is a cornerstone in developing your drafting skills, bridging the gap between theoretical knowledge and practical application using powerful CAD tools. By meticulously preparing these drawings, you're not just completing an exercise; you're learning to communicate architectural and structural information effectively, which is fundamental to your role as a civil engineer.

---

## Sample Questions and Answers

Here are a few questions that might appear in your exams, along with explanations.

**Q1: What is the primary purpose of a sectional elevation in building drawings?**
**Answer:** The primary purpose of a sectional elevation is to reveal the internal construction and structural details of a building that are not visible in plan or elevation views. It shows how different building elements (walls, floors, roofs) are constructed, their materials, and how they are joined together. This understanding is crucial for construction and analysis. For example, it clearly shows wall thickness, foundation depth, and roof framing, directly addressing **CO2** (detailing of building components) and **CO3** (developing sectional elevation).

**Q2: Explain the concept of 'layers' in CAD and why they are important for drawing a residential building.**
**Answer:** Layers in CAD are like transparent sheets that you can stack and assign different types of drawing objects to. For a residential building drawing, layers are crucial for **CO1: Illustrate ability to organize civil engineering drawings systematically and professionally.**
*   **Organization:** You can assign walls to a "WALLS" layer, doors/windows to a "DOORS\_WINDOWS" layer, dimensions to a "DIMENSIONS" layer, etc.
*   **Control:** This allows you to easily turn layers on or off to view specific elements (e.g., hide dimensions while working on walls) or change properties (color, line weight) for an entire category of objects simultaneously.
*   **Clarity:** It prevents drawing clutter and makes the drawing easier to understand and edit. Imagine trying to draw a complex building without layers – it would be a chaotic mess of lines.

**Q3: In a plan drawing, what is indicated by the curved arc associated with a door opening?**
**Answer:** The curved arc associated with a door opening in a plan drawing indicates the **direction of the door's swing**. It shows the path the door leaf will follow as it opens. This is a critical detail for functional space planning, ensuring that the door opens into an area where it won't obstruct circulation or other building elements. This is a key detail for **CO2** (detailing of building components) and is a standard convention as per IS 962.

**Q4: You are drawing the front elevation of a single-storied house. A window is placed at a sill height of 900mm and a lintel height of 2100mm from the finished floor level. How would you represent these heights in your CAD drawing and what is the significance?**
**Answer:** In the CAD front elevation, you would:
1.  Establish a horizontal line representing the finished floor level.
2.  From this floor level line, project a vertical line upwards by 900mm and draw a horizontal line to represent the **sill level**.
3.  From the finished floor level line, project another vertical line upwards by 2100mm and draw a horizontal line to represent the **lintel level**.
4.  The window would then be drawn between these sill and lintel lines, within the wall opening.

The significance is that these dimensions dictate the clear opening for the window and the structural support (lintel) above it. They are crucial for light and ventilation calculations, as well as structural integrity, and are standard representations learned for **CO3** and **CO4**.

**Q5: Why is it important to follow standards like IS 962:1989 for architectural and building drawings?**
**Answer:** It is important to follow standards like IS 962:1989 for several reasons, all contributing to the professionalism and clarity of the drawings, which aligns with **CO1**:
*   **Uniformity and Standardization:** Ensures that drawings are consistent and follow established conventions, making them understandable to anyone familiar with these standards, regardless of who drafted them.
*   **Clarity and Precision:** Standards dictate specific line types, line weights, hatching symbols, and dimensioning practices, which enhance the clarity and reduce ambiguity in the drawing.
*   **Communication:** Facilitates effective communication between architects, engineers, contractors, and clients, as everyone understands the language of the drawings.
*   **Legal and Contractual Basis:** In many cases, drawings are part of contracts. Adherence to standards ensures that the drawings can serve as a legally sound basis for construction.
*   **Interoperability:** For digital drawings, adherence to standards helps with data exchange and compatibility between different software and users.
