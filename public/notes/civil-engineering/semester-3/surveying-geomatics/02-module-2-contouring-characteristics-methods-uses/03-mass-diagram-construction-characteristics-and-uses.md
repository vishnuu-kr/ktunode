---
title: "Mass diagram  : Construction, Characteristics and uses"
subject: "SURVEYING & GEOMATICS"
module: "Module 2: Contouring  : Characteristics, methods, uses."
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810777"
status: "completed"
scrapedAt: "2026-05-20T18:42:18.033Z"
---
# Surveying & Geomatics - Module 2: Contouring

## Topic: Mass Diagram

### 1. Introduction to Mass Diagrams

**Definition:** A mass diagram, also known as a cumulative volume diagram or earthwork diagram, is a graphical representation of the cumulative volumes of earthwork (cut and fill) required to construct a linear project, such as a road, railway, canal, or dam. It plots the cumulative volume of cut or fill against the distance along the project centerline.

**Purpose:**
*   To determine the balance points where the amount of material to be excavated equals the amount of material to be used for filling.
*   To optimize the distribution of excavated material, minimizing the cost of transportation.
*   To visualize the overall earthwork requirements of a project.

### 2. Construction of a Mass Diagram

The construction of a mass diagram involves several steps:

#### 2.1. Calculating Quantities of Cut and Fill

This is the fundamental first step. For a linear project, the ground profile and the proposed design profile are used to calculate the volume of cut and fill between successive cross-sections.

*   **Cross-Sectional Areas:** Calculate the area of cut and fill at each cross-section along the centerline using the difference between the ground and proposed grades.
*   **Volume Calculation:** Use methods like the **Prismoidal Formula** or the **Average End Area Method** to calculate the volume of cut and fill between consecutive cross-sections.

    *   **Average End Area Method:**
        $V = \frac{(A_1 + A_2)}{2} \times L$
        Where:
        *   $V$ = Volume between two cross-sections
        *   $A_1$ = Area of cut/fill at the first cross-section
        *   $A_2$ = Area of cut/fill at the second cross-section
        *   $L$ = Distance between the two cross-sections

#### 2.2. Calculating Cumulative Volumes

Once individual cut and fill volumes are calculated, they are accumulated along the project centerline.

*   **Reference Point:** Typically, the cumulative volume starts at zero at the beginning of the project (station 0+00).
*   **Accumulation:**
    *   If the next section involves **cut**, the cumulative volume is increased by the amount of cut.
    *   If the next section involves **fill**, the cumulative volume is decreased by the amount of fill.
    *   **Important Convention:** Many surveyors adopt a convention where **cut is plotted as positive** and **fill is plotted as negative** on the y-axis. Therefore:
        *   Cumulative Cut Volume = Previous Cumulative Cut Volume + Current Cut Volume
        *   Cumulative Fill Volume = Previous Cumulative Fill Volume - Current Fill Volume (or Previous Cumulative Fill Volume + Current Fill Volume if fill is represented as a positive value for plotting, and the curve goes downwards)

    **Let's assume the convention of plotting cumulative cut as positive and cumulative fill as negative on the y-axis for clarity in explanation.**

#### 2.3. Plotting the Mass Diagram

The mass diagram is plotted on a graph with:

*   **X-axis:** Stationing (distance along the project centerline, e.g., 0+00, 0+50, 1+00).
*   **Y-axis:** Cumulative volume (in cubic meters or cubic yards).
    *   Cumulative cut is plotted upwards (positive).
    *   Cumulative fill is plotted downwards (negative).

#### 2.4. Establishing the Free Haul Limit and Overhaul

*   **Free Haul Limit:** This is the maximum distance that material can be moved without incurring additional costs for transportation. It's a project-specific parameter.
*   **Overhaul:** The distance beyond the free haul limit for which material is transported. The cost of overhaul is usually calculated by multiplying the volume of material by the overhaul distance.

### 3. Characteristics of a Mass Diagram

Understanding the features of a mass diagram is crucial for its interpretation.

*   **Rising Portions of the Curve:** Indicate sections where there is a net **cut**. The steeper the rise, the greater the volume of cut.
*   **Falling Portions of the Curve:** Indicate sections where there is a net **fill**. The steeper the fall, the greater the volume of fill.
*   **Horizontal Portions of the Curve:** Indicate sections where there is no net cut or fill, or where cut balances fill exactly at that station.
*   **Peaks (High Points) of the Curve:** Represent points of **maximum cumulative cut**. The net change in volume from this point to a subsequent trough is the total volume of fill required to balance the preceding cut.
*   **Troughs (Low Points) of the Curve:** Represent points of **maximum cumulative fill**. The net change in volume from this point to a subsequent peak is the total volume of cut required to balance the preceding fill.
*   **Balance Points:**
    *   **Definition:** Points along the project centerline where the cumulative volume of cut equals the cumulative volume of fill. Graphically, these are points where the mass curve intersects the horizontal axis (if plotting net cumulative volume) or where a horizontal line (representing the balance quantity) intersects the curve at two points.
    *   **Identification:**
        1.  **By horizontal line:** Draw a horizontal line from a peak to a subsequent trough. Any points where this line intersects the mass curve represent balance points.
        2.  **By projecting on the x-axis:** If the cumulative cut and fill volumes are plotted separately and then the net cumulative volume is derived, the points where the net cumulative volume is zero are balance points. However, the standard method involves finding the horizontal line.

*   **Balancing the Diagram:** The goal is to find a horizontal line that intersects the mass diagram at two points. These intersection points mark the beginning and end of a section where the total excavation in one part is used to fill the other part, minimizing haulage.

### 4. Uses of a Mass Diagram

Mass diagrams have several practical applications in civil engineering and surveying.

*   **Determining Balance Points:** As discussed above, it helps identify where cut equals fill.
*   **Economical Distribution of Earthwork:**
    *   **Free Haul:** Material excavated within the free haul limit of a section can be used for filling within that same section or a nearby section without additional haulage cost. The mass diagram helps identify these areas.
    *   **Overhaul Calculation:** The area between the mass curve and a horizontal line connecting two balance points represents the volume-distance product (mass haul) for material moved between those balance points. This is used to calculate overhaul costs.
        *   **Area of Overhaul = Volume x Distance**
        *   The total overhaul is the sum of these areas for all unbalanced material moved.
*   **Central Mixing Plant Location:** It can aid in determining the optimal location for a central concrete mixing plant or borrow pit by analyzing the distribution of cut and fill.
*   **Borrow Pits and Spoil Banks:**
    *   **Borrow Pit:** A location from which fill material is obtained. The mass diagram helps determine where borrow material is needed and in what quantities.
    *   **Spoil Bank:** A place where excavated material (excess cut) is deposited. The mass diagram helps determine the locations and quantities for spoil banks.
*   **Estimating Earthwork Costs:** By calculating overhaul, the mass diagram provides a basis for estimating the transportation costs of earthwork.
*   **Project Planning and Management:** It offers a visual overview of the earthwork quantities and their distribution, aiding in project scheduling and resource allocation.

### 5. Practical Considerations and Examples

**Example Scenario:**

Consider a road project where you have calculated the following cut and fill volumes between successive stations:

| Station | Distance (m) | Cut Volume (m³) | Fill Volume (m³) | Cumulative Cut (m³) | Cumulative Fill (m³) | Net Cumulative Volume (Cut - Fill) (m³) |
| :------ | :----------- | :-------------- | :--------------- | :------------------ | :------------------- | :-------------------------------------- |
| 0+00    | 0            | 0               | 0                | 0                   | 0                    | 0                                       |
| 0+50    | 50           | 100             | 0                | 100                 | 0                    | 100                                     |
| 1+00    | 50           | 200             | 50               | 300                 | 50                   | 250                                     |
| 1+50    | 50           | 150             | 300              | 450                 | 350                  | 100                                     |
| 2+00    | 50           | 0               | 250              | 450                 | 600                  | -150                                    |
| 2+50    | 50           | 0               | 200              | 450                 | 800                  | -350                                    |
| 3+00    | 50           | 50              | 100              | 500                 | 900                  | -400                                    |
| 3+50    | 50           | 200             | 50               | 700                 | 950                  | -250                                    |
| 4+00    | 50           | 300             | 0                | 1000                | 950                  | 50                                      |

**Note on Net Cumulative Volume Calculation:** This is often calculated as **(Cumulative Cut) - (Cumulative Fill)**. If the cumulative volume for plotting (y-axis) is used, where cut is positive and fill is negative, the values will align with this net calculation if you correctly add/subtract at each step.

**Plotting the Mass Diagram (Conceptual):**

*   Plot points (Station, Net Cumulative Volume).
*   (0+00, 0)
*   (0+50, 100)
*   (1+00, 250)
*   (1+50, 100)
*   (2+00, -150)
*   (2+50, -350)
*   (3+00, -400)
*   (3+50, -250)
*   (4+00, 50)

**Interpreting the Diagram:**

*   The curve rises from 0+00 to 1+00 (cumulative cut).
*   It peaks at 1+00 with a cumulative net cut of 250 m³.
*   The curve falls from 1+00 to 2+50 (cumulative fill dominates).
*   It troughs at 2+50 with a cumulative net fill of 350 m³.
*   The curve rises again from 2+50 to 4+00 (cumulative cut).
*   There's a final point at 4+00 with a net cumulative cut of 50 m³.

**Finding Balance Points:**

To balance the diagram, we need to find a horizontal line that intersects the curve at two points.

1.  **Consider the segment from the peak at 1+00 (250 m³) to the trough at 2+50 (-350 m³).**
    *   The total volume difference is 250 - (-350) = 600 m³.
    *   If we draw a horizontal line such that it balances the cut from 0+00 to the first intersection point with the fill from that first intersection point to the second intersection point, and then balance that second intersection point with the remaining fill.

    **Simplified Approach for Balance Points:**
    *   Identify a peak and a subsequent trough. Let's consider the peak at station 1+00 (cumulative net cut = 250 m³) and the trough at station 2+50 (cumulative net fill = -350 m³).
    *   We need to find a horizontal line that "cuts off" a portion of the preceding cut to balance a portion of the succeeding fill.
    *   Draw a horizontal line from a peak to a subsequent trough. Let's try balancing the net cut up to station 1+00 (250 m³) against the net fill from station 1+00 to station 2+50 (-350 m³).
    *   We are looking for a horizontal line. Let's say we draw a horizontal line at a level `h`.
    *   If we balance the segment from 1+00 to 2+50, we can draw a horizontal line from the peak at 1+00. The total fill needed from 1+00 to 2+50 is 350 m³. We can use 250 m³ of the cut from before 1+00. This leaves 100 m³ of cut to be filled from somewhere else.

    **A more systematic way:**
    Consider the cumulative volumes. We are looking for a horizontal line $y = C$ such that it intersects the curve at two points $(x_1, y_1)$ and $(x_2, y_2)$. This implies that the cumulative volume at $x_1$ is $y_1$ and at $x_2$ is $y_2$, and the area between the curve and the line $y=C$ represents balanced earthwork.

    **Let's find the balance points by drawing a horizontal line.**
    *   Consider the peak at 1+00 (250 m³).
    *   Consider the trough at 2+50 (-350 m³).
    *   The total fill required between 1+00 and 2+50 is 350 m³.
    *   We have 250 m³ of available cut at 1+00.
    *   If we move the balance point from 1+00 to a later station, say $x$, where the cumulative net volume is $V(x)$, and this forms a balance with a later section.

    **A Common Method:** Draw a horizontal line from a peak to a subsequent trough.
    *   Consider the peak at 1+00 (cumulative net = 250).
    *   Consider the trough at 2+50 (cumulative net = -350).
    *   Draw a horizontal line from the peak (at y=250) to intersect the curve where the cumulative volume is also 250. This occurs at station 4+00.
    *   So, balance point 1 is at 1+00.
    *   Now, consider the trough at 2+50 (cumulative net = -350).
    *   We need to find a horizontal line that balances the fill up to 2+50.

    **The Law of the Economy of Haul:** This law states that the most economical haul occurs when the center of mass of the excavated material is moved the shortest possible distance. Mass diagrams help visualize this.

    **Let's simplify the balancing process:**
    Look at the data:
    *   Peak: 1+00 (250 m³).
    *   Trough: 2+50 (-350 m³).
    *   Another peak: 4+00 (50 m³).

    To balance the cut from 0+00 to 1+00 (total cut = 300 m³ up to 1+00), we need to fill it. The fill available is from 1+00 onwards.
    *   From 1+00 to 2+50, net fill is 350 m³.
    *   If we choose balance point 1 at 1+00 (250 m³ cumulative net cut), we need to find a point where the cumulative net volume is also 250 m³. This happens at 4+00 (50 m³). This is not a true balance point.

    **Let's use a horizontal line method:**
    Draw a horizontal line from the peak at station 1+00 (y=250) downwards.
    *   It intersects the curve at station 1+00.
    *   The net fill needed to balance the cut up to station 1+00 (300 m³ total cut) is 300 m³.
    *   From station 1+00, the cumulative net volume goes down to -350 m³ at 2+50.
    *   Draw a horizontal line from the peak at 1+00 (250 m³). To find the next balance point, we need to find where the cumulative volume is also 250 m³. This doesn't directly work by just picking a horizontal line across.

    **The proper graphical method for balancing:**
    1.  Identify a peak (e.g., 1+00, cumulative net 250).
    2.  Identify a subsequent trough (e.g., 2+50, cumulative net -350).
    3.  Draw a horizontal line from the peak (250) down to the trough level (-350). The vertical distance is 250 - (-350) = 600.
    4.  We want to find a horizontal line $y=C$ that intersects the curve at two points.
    5.  **To balance the cut from 0+00 to 1+00 (total cut is 300 m³):** We need 300 m³ of fill. From 1+00 to 2+50, we have a net fill of 350 m³. We can use 300 m³ of this fill to balance the cut from 0+00 to 1+00.
        *   The balance point 1 will be at station 1+00.
        *   The cumulative net fill required to balance this cut is 300 m³. We are at -350 m³ at 2+50. We need to find a station where the cumulative net fill is 300 m³ (from the peak at 1+00, 250 m³ cut, meaning we need 250 m³ fill).

    Let's reconsider the calculation of Net Cumulative Volume:
    Assume cumulative cut increases the y-value, and cumulative fill decreases the y-value.

    | Station | Dist (m) | Cut (m³) | Fill (m³) | Cumulative Net (y-value) |
    | :------ | :------- | :------- | :-------- | :----------------------- |
    | 0+00    | 0        | 0        | 0         | 0                        |
    | 0+50    | 50       | 100      | 0         | +100                     |
    | 1+00    | 50       | 200      | 50        | +100 + 200 - 50 = +250   |
    | 1+50    | 50       | 150      | 300       | +250 + 150 - 300 = +50   |
    | 2+00    | 50       | 0        | 250       | +50 + 0 - 250 = -200     |
    | 2+50    | 50       | 0        | 200       | -200 + 0 - 200 = -400    |
    | 3+00    | 50       | 50       | 100       | -400 + 50 - 100 = -450   |
    | 3+50    | 50       | 200      | 50        | -450 + 200 - 50 = -300   |
    | 4+00    | 50       | 300      | 0         | -300 + 300 - 0 = 0       |

    **Now the data looks like this for plotting:**
    *   (0+00, 0)
    *   (0+50, 100)
    *   (1+00, 250) - Peak
    *   (1+50, 50)
    *   (2+00, -200)
    *   (2+50, -400) - Trough
    *   (3+00, -450) - Deeper Trough
    *   (3+50, -300)
    *   (4+00, 0) - Balance Point

    **Identifying Balance Points:**
    *   **Balance Point 1:** The curve starts at 0 and ends at 0 at 4+00. So, 0+00 and 4+00 are balance points for the entire project if there are no "carry-over" materials.
    *   **Balancing Segments:** We look for sections where we can balance cut with fill.
        *   Consider the peak at 1+00 (250). The project ends at 0 at 4+00.
        *   We can draw a horizontal line from the peak at 1+00 (y=250) to find a later point where the cumulative volume is also 250. This doesn't happen.
        *   **However, if we draw a horizontal line from the trough at 3+00 (-450) upwards, it will intersect the curve at earlier points.**
        *   Let's try balancing the cut from 0+00 to 1+00 (peak at 250). We need 250 m³ of fill. From 1+00 to 2+50, we have a cumulative net fill of -400 m³ (from the peak at 1+00).
        *   The total fill required to balance the initial 250 m³ cut is 250 m³.
        *   We can take this fill from the section between stations 1+00 and 2+00, where the net fill is from 250 down to -200.

    **A clearer example for balancing:**
    Suppose the mass diagram had these key points:
    *   Station A: Peak, cumulative net cut = 500 m³
    *   Station B: Trough, cumulative net fill = -700 m³
    *   Station C: Later Peak, cumulative net cut = 200 m³
    *   Station D: Later Trough, cumulative net fill = -300 m³

    To balance the earthwork between A and B: Draw a horizontal line from A (500) to intersect the curve at a later point (say, Station X) where the cumulative net volume is also 500. This would mean A and X are balance points. The material between A and X that is cut is used to fill between A and X.

    **Consider the example data again:**
    *   Peak: 1+00 (250). Trough: 3+00 (-450).
    *   Draw a horizontal line from the peak at 1+00 (250).
    *   We want to find a horizontal line such that the area of cut above it balances the area of fill below it.

    **The rule is: Draw a horizontal line from a peak to intersect the curve at a subsequent trough.** The intersection points are balance points.
    *   Peak at 1+00 (250). Trough at 3+00 (-450).
    *   Draw a horizontal line from (1+00, 250). To find balance points, we need to identify sections that balance.
    *   **Balance Point 1:** Let's consider the peak at 1+00 (250). We can draw a horizontal line from this point and it will intersect the curve where the cumulative volume is also 250. This happens at station 1+50 (50) and then again at 1+50 it's lower.
    *   **The simplest way is to draw a horizontal line that "balances" the area.**

    Let's assume we draw a horizontal line from the peak at 1+00 (250).
    We are looking for a horizontal line at a level 'h'.
    The area of cut above this line balances the area of fill below this line.

    **If we balance the cut from 0+00 to 1+00 (peak at 250), we need 250 m³ of fill.**
    From 1+00 to 3+00, the cumulative volume goes from 250 down to -450. This section contains ample fill.
    We can take 250 m³ of fill from this section. The fill starts accumulating from 1+00.
    At 1+50, cumulative net = 50. Fill used = 200.
    At 2+00, cumulative net = -200. Fill used = 450.
    At 2+50, cumulative net = -400. Fill used = 650.

    **Correct approach:**
    1.  Identify a peak (e.g., 1+00, cumulative net 250).
    2.  Draw a horizontal line from this peak.
    3.  Find the subsequent point where the mass curve intersects this horizontal line. This point is a balance point.
    4.  In our example, the line at y=250 only intersects at 1+00. This means the balancing has to be done in segments.

    **Consider the net cumulative volumes again:**
    *   0+00: 0
    *   1+00: 250 (Peak)
    *   3+00: -450 (Trough)
    *   4+00: 0

    We can balance the cut from 0+00 to 1+00 (250 m³ of net cut) by using fill from the section between 1+00 and 3+00.
    *   Draw a horizontal line from the peak at 1+00 (250).
    *   Find where the curve reaches 250 *again*. This doesn't occur.

    **The balance points are where the horizontal line intersects the curve.**
    If we draw a horizontal line from the peak at 1+00 (250 m³) to the trough at 3+00 (-450 m³), the range of fill available is from 250 down to -450.
    We want to find a horizontal line $y=C$.
    Let's say we draw a horizontal line from (1+00, 250) to intersect the curve at station $X$ where its cumulative volume is 250. This means $X$ is also a balance point.

    **The process is to find two points on the curve that are at the same y-level (cumulative volume).**
    *   Look at the data:
        *   Cumulative Net Volume = 250 at 1+00.
        *   Cumulative Net Volume = 50 at 1+50.
        *   Cumulative Net Volume = -200 at 2+00.
        *   Cumulative Net Volume = -400 at 3+00.
        *   Cumulative Net Volume = -300 at 3+50.
        *   Cumulative Net Volume = 0 at 4+00.

    **If we draw a horizontal line at y=50, it intersects at 1+50.**
    **If we draw a horizontal line at y=0, it intersects at 0+00 and 4+00.** These are balance points for the entire project.

    **To find intermediate balance points:**
    Consider the peak at 1+00 (250). We need to find a horizontal line that balances this.
    Draw a horizontal line from the peak at 1+00. The amount of cut to be moved is the cumulative cut from 0 to 1+00.
    **The area under the mass curve between two points represents the mass haul.**

    **Revised Example for Clarity on Balance Points:**
    Let's say the cumulative volumes are:
    *   Station 0+00: 0
    *   Station 0+50: 100 (Cut)
    *   Station 1+00: 300 (Cut) - Peak
    *   Station 1+50: 150 (Fill)
    *   Station 2+00: -100 (Fill) - Trough
    *   Station 2+50: -250 (Fill)
    *   Station 3+00: -50 (Fill)
    *   Station 3+50: 200 (Cut)

    **Plotting these points:**
    *   (0+00, 0)
    *   (0+50, 100)
    *   (1+00, 300) - Peak
    *   (1+50, 150)
    *   (2+00, -100) - Trough
    *   (2+50, -250)
    *   (3+00, -50)
    *   (3+50, 200)

    **To find balance points:**
    1.  Draw a horizontal line from the peak at 1+00 (y=300).
    2.  Look for a later point where the cumulative volume is also 300. This doesn't happen.
    3.  Draw a horizontal line from the trough at 2+00 (y=-100).
    4.  Look for an earlier point where the cumulative volume is also -100. This doesn't happen.

    **The balancing is done by drawing a horizontal line from a peak to the nearest subsequent trough.**
    Draw a horizontal line from the peak at 1+00 (300) downwards. It will intersect the curve at some point between 1+00 and 2+00.
    Let's try balancing the cut from 0+00 to 1+00 (total cut 300). We need 300 m³ of fill.
    From 1+00 to 2+00, the net fill is 300 (peak) down to -100 (trough).
    We can use 300 m³ of fill from this section to balance the 300 m³ of cut from 0+00 to 1+00.
    The fill starts from 1+00.
    *   At 1+00, cumulative net = 300.
    *   At 1+50, cumulative net = 150. (Used 150 of the 300 required fill)
    *   At 2+00, cumulative net = -100. (Used 400 of the 300 required fill - this is wrong)

    **The crucial idea is to draw a horizontal line that represents a "level of balance".**
    **Balance Point Identification (Key Method):**
    1.  Identify a peak.
    2.  Draw a horizontal line from this peak.
    3.  The points where this horizontal line intersects the mass curve are balance points.
    4.  In the revised example, if we draw a horizontal line at y=150, it intersects at 1+50. It also intersects at some point before 1+50.

    **Let's focus on the law of economy of haul:**
    The area between the mass curve and the horizontal balance line represents the volume-distance product.
    *   If free haul limit is 50m: material moved within 50m is free.
    *   Overhaul = (Volume) x (Distance moved beyond free haul limit).

    **To find overhaul cost:**
    1.  Draw balance lines on the mass diagram.
    2.  For each section between balance points, calculate the area between the mass curve and the balance line (this is the mass haul).
    3.  Divide the mass haul by the free haul limit to get the total overhaul.
    4.  Multiply total overhaul by the unit cost of overhaul.

### 6. Practice Questions and Exercises

**Question 1:**
Define a mass diagram and explain its primary purpose in earthwork calculations.

**Answer:**
A mass diagram is a graphical plot of the cumulative volume of earthwork (cut or fill) against the distance along the project centerline. Its primary purpose is to visualize the distribution of cut and fill, identify balance points where excavation equals filling, and facilitate the economical distribution of materials, thereby minimizing transportation costs.

**Question 2:**
What do rising and falling portions of a mass diagram represent?

**Answer:**
Rising portions of a mass diagram represent sections where there is a net accumulation of **cut**. The steeper the rise, the greater the volume of cut. Falling portions represent sections where there is a net accumulation of **fill**. The steeper the fall, the greater the volume of fill.

**Question 3:**
Explain the concept of "balance points" on a mass diagram and how they are identified.

**Answer:**
Balance points are stations along the project centerline where the cumulative volume of material to be excavated (cut) is equal to the cumulative volume of material to be used for filling. They are graphically identified by drawing a horizontal line from a peak (maximum cumulative cut) to a subsequent trough (maximum cumulative fill) or by finding two points on the mass curve that lie on the same horizontal line. These points define sections where earthwork can be balanced without external material movement.

**Question 4:**
If a mass diagram has a peak at station 2+00 with a cumulative net cut of 500 m³ and a subsequent trough at station 3+50 with a cumulative net fill of -800 m³, how would you visually balance this section?

**Answer:**
To balance this section, you would draw a horizontal line from the peak at station 2+00 (at a cumulative volume of 500 m³). This line would be extended downwards to intersect the mass curve at a later station where the cumulative volume is also 500 m³. However, the trough is at -800 m³. A more common approach to balance the cut up to the peak (500 m³ net cut) is to find where the cumulative fill is sufficient. A horizontal line drawn from the peak at 2+00 and extended to intersect the curve at a later point where the cumulative volume is also 500 m³ would mark the balance points. If the curve doesn't reach 500 m³ again, then the balancing must involve segments. A horizontal line from the peak (500) to the trough (-800) visually shows the total cut to be balanced by the fill. A horizontal line drawn from the peak at 2+00 (500) that intersects the curve at a point where the cumulative volume is also 500 m³ would represent the balance points. If such a point doesn't exist, the balancing would be done by drawing a horizontal line that balances the total cut from a peak with the total fill available in a subsequent section, often by drawing a line from the peak to a later point at the same cumulative level.

**Question 5:**
What is overhaul, and how is it calculated using a mass diagram?

**Answer:**
Overhaul is the distance that excavated material is transported beyond the free haul limit. It is calculated by first determining the balance points on the mass diagram. Then, for each segment between balance points, the area between the mass curve and the horizontal balance line represents the mass haul (volume-distance product). This mass haul is then divided by the free haul limit to get the total overhaul. The cost of overhaul is the total overhaul multiplied by the unit cost of overhaul.

**Exercise:**

Construct a table of cumulative net volumes from the following data and describe the general shape of the mass diagram:

| Station | Distance (m) | Cut Volume (m³) | Fill Volume (m³) |
| :------ | :----------- | :-------------- | :--------------- |
| 0+00    | 0            | 0               | 0                |
| 0+50    | 50           | 150             | 20               |
| 1+00    | 50           | 200             | 80               |
| 1+50    | 50           | 100             | 250              |
| 2+00    | 50           | 30              | 150              |
| 2+50    | 50           | 0               | 100              |
| 3+00    | 50           | 50              | 40               |
| 3+50    | 50           | 180             | 0                |

**Solution to Exercise:**

| Station | Dist (m) | Cut (m³) | Fill (m³) | Cumulative Net (y-value) | Notes         |
| :------ | :------- | :------- | :-------- | :----------------------- | :------------ |
| 0+00    | 0        | 0        | 0         | 0                        | Start         |
| 0+50    | 50       | 150      | 20        | 0 + 150 - 20 = 130       | Rising (Cut)  |
| 1+00    | 50       | 200      | 80        | 130 + 200 - 80 = 250     | Rising (Cut)  |
| 1+50    | 50       | 100      | 250       | 250 + 100 - 250 = 100    | Falling (Fill)|
| 2+00    | 50       | 30       | 150       | 100 + 30 - 150 = -20     | Falling (Fill)|
| 2+50    | 50       | 0        | 100       | -20 + 0 - 100 = -120     | Falling (Fill)|
| 3+00    | 50       | 50       | 40        | -120 + 50 - 40 = -110    | Falling (Fill)|
| 3+50    | 50       | 180      | 0         | -110 + 180 - 0 = 70      | Rising (Cut)  |

**Description of the Mass Diagram Shape:**
The mass diagram would start at 0, rise to a peak of 250 m³ at station 1+00, then fall to a trough of -120 m³ at station 2+50, and finally rise to 70 m³ at station 3+50. The shape is characteristic of a project that starts with net cut, transitions to net fill, and ends with net cut.

### 7. Important Points to Remember

*   **Convention:** Consistently use the convention for plotting cut (positive) and fill (negative) on the y-axis.
*   **Accuracy:** The accuracy of the mass diagram depends entirely on the accuracy of the initial cross-sectional area and volume calculations.
*   **Balance Points are Key:** Correctly identifying balance points is crucial for economical material distribution and overhaul calculations.
*   **Area under the curve:** The area between the mass curve and a horizontal balance line represents the mass haul (volume-distance product).
*   **Free Haul Limit:** This is a critical parameter for determining overhaul costs and is project-specific.
*   **Visual Tool:** Always remember that the mass diagram is a powerful visual aid for understanding earthwork requirements.

---
