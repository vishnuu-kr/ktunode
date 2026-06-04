---
title: "Heights and distances"
subject: "SURVEY LAB"
module: "Module 9: Total station survey"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810899"
status: "completed"
scrapedAt: "2026-05-20T18:42:00.035Z"
---
# Survey Lab: Module 9 - Total Station Survey: Heights and Distances

This module focuses on the practical application of total stations to determine heights and horizontal distances of inaccessible points.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the fundamental principles of trigonometric surveying for height and distance determination using a total station.
*   Identify and set up the necessary equipment for height and distance measurements.
*   Perform field measurements for calculating heights and distances.
*   Apply appropriate trigonometric formulas and calculations to determine heights and distances.
*   Analyze and interpret the results of height and distance measurements, considering potential sources of error.
*   Understand the concept of resection and its application in determining unknown coordinates, which indirectly assists in height and distance calculations.

---

## 1. Introduction to Heights and Distances Measurement with Total Stations

Total stations are versatile instruments that combine electronic distance measurement (EDM) with an electronic theodolite. This allows for precise measurement of horizontal angles, vertical angles, and slope distances. By utilizing these measurements, we can indirectly determine heights and horizontal distances to points that are difficult or impossible to access directly.

### 1.1 Key Concepts

*   **Trigonometric Surveying:** The branch of surveying that utilizes trigonometric principles (sine, cosine, tangent) to determine unknown distances and heights based on measured angles and known distances.
*   **Total Station:** A surveying instrument that integrates an electronic theodolite, an EDM, and a microprocessor. It can measure angles (horizontal and vertical) and distances, and then compute coordinates and other derived values.
*   **Prism:** A reflective device used in conjunction with the EDM to reflect the infrared beam back to the total station for distance measurement.
*   **Ranging Rod/Pole:** Used to hold prisms at the desired points for measurement.
*   **Tribrach:** A device used to mount the total station or prism, ensuring it is leveled and centered over a known point.
*   **Station Point (Instrument Station):** The location where the total station is set up and measurements are taken from.
*   **Target Point:** The point whose height or distance is to be determined.
*   **Horizontal Distance (HD):** The distance between two points projected onto a horizontal plane.
*   **Slope Distance (SD):** The direct distance measured by the EDM from the instrument to the prism, along the line of sight.
*   **Vertical Angle (VA) / Zenith Angle (ZA):** The angle measured from the horizontal plane (VA) or the vertical (ZA) to the line of sight.
*   **Height of Instrument (HI):** The vertical distance from the ground point to the optical center of the total station.
*   **Height of Prism (HT):** The vertical distance from the ground point to the center of the prism.

---

## 2. Principles of Height and Distance Measurement

The core principle behind determining heights and distances using a total station is **trigonometry**, specifically the relationships within right-angled triangles.

### 2.1 Calculating Horizontal Distance (HD)

When measuring to a target point, the total station measures the **Slope Distance (SD)** and the **Vertical Angle (VA)**.

*   **Using Vertical Angle (VA):**
    *   Imagine a right-angled triangle where the hypotenuse is the SD.
    *   The horizontal distance is the adjacent side to the VA.
    *   The vertical distance (difference in elevation) is the opposite side to the VA.

    The relationship is given by:
    $$ \cos(\text{VA}) = \frac{\text{Horizontal Distance (HD)}}{\text{Slope Distance (SD)}} $$

    Therefore:
    $$ \text{HD} = \text{SD} \times \cos(\text{VA}) $$

*   **Using Zenith Angle (ZA):**
    *   Zenith Angle is the angle from the zenith (directly overhead) to the line of sight.
    *   The relationship is:
        $$ \sin(\text{ZA}) = \frac{\text{Horizontal Distance (HD)}}{\text{Slope Distance (SD)}} $$

    Therefore:
    $$ \text{HD} = \text{SD} \times \sin(\text{ZA}) $$
    *(Note: VA + ZA = 90°)*

### 2.2 Calculating Vertical Difference (VD) / Elevation Difference

The vertical difference between the instrument station and the target point can be calculated using the SD and the VA.

*   **Using Vertical Angle (VA):**
    *   The vertical difference is the opposite side to the VA.

    The relationship is given by:
    $$ \sin(\text{VA}) = \frac{\text{Vertical Difference (VD)}}{\text{Slope Distance (SD)}} $$

    Therefore:
    $$ \text{VD} = \text{SD} \times \sin(\text{VA}) $$

    *   **Important Note:** The VD calculated here is the difference along the line of sight.
        *   If the VA is positive (upward), VD is the height of the target above the horizontal line of sight.
        *   If the VA is negative (downward), VD is the depth of the target below the horizontal line of sight.

*   **Using Zenith Angle (ZA):**
    *   The vertical difference is the adjacent side to the ZA.

    The relationship is:
    $$ \cos(\text{ZA}) = \frac{\text{Vertical Difference (VD)}}{\text{Slope Distance (SD)}} $$

    Therefore:
    $$ \text{VD} = \text{SD} \times \cos(\text{ZA}) $$

### 2.3 Calculating the Height of a Target Point

The height of a target point (e.g., the top of a building or a flag pole) is determined by:

$$ \text{Height of Target Point} = \text{Elevation of Instrument Station} + \text{HI} + \text{VD} - \text{HT} $$

Where:

*   **Elevation of Instrument Station:** The known ground elevation of the total station setup point.
*   **HI (Height of Instrument):** The measured vertical distance from the ground point to the optical center of the total station.
*   **VD (Vertical Difference):** The calculated vertical difference from the horizontal line of sight of the total station to the target point.
*   **HT (Height of Prism):** The measured vertical distance from the ground point to the center of the prism at the target point.

**Crucially, the sign of VD depends on the VA:**

*   If VA is positive (looking up): VD is added to HI.
*   If VA is negative (looking down): VD is subtracted from HI.

### 2.4 Calculating Distances to Inaccessible Points

This typically involves setting up the total station at two different known locations.

#### 2.4.1 Two-Station Method (Trigonometric Parallelogram)

This method is used to find the distance to a point that is not visible from any single known point.

**Scenario:** You want to find the distance from two known points (A and B) to an inaccessible point (P).

1.  **Setup at Point A:**
    *   Measure the horizontal distance (AB) between the two known points.
    *   Set up the total station at A.
    *   Measure the horizontal angle at A between AB and AP (angle ∠PAB).
    *   Measure the slope distance (AP) to point P (usually with a prism).
    *   The total station can directly calculate HD to P.

2.  **Setup at Point B (Optional but good for confirmation and triangulation):**
    *   Set up the total station at B.
    *   Measure the horizontal angle at B between BA and BP (angle ∠PBA).
    *   Measure the slope distance (BP) to point P.

**Calculation:**

Once you have the horizontal distance AB and two angles (∠PAB and ∠PBA), you can use the **Law of Sines** in triangle ABP to find the distances AP and BP.

$$ \frac{\text{AP}}{\sin(\angle PBA)} = \frac{\text{BP}}{\sin(\angle PAB)} = \frac{\text{AB}}{\sin(\angle APB)} $$

Where:
$$ \angle APB = 180^\circ - \angle PAB - \angle PBA $$

**Example:**
*   Known distance AB = 100.00 m
*   Measured ∠PAB = 45° 30' 00"
*   Measured ∠PBA = 60° 00' 00"

$$ \angle APB = 180^\circ - 45^\circ 30' 00" - 60^\circ 00' 00" = 74^\circ 30' 00" $$

Using the Law of Sines:
$$ \text{AP} = \frac{\text{AB} \times \sin(\angle PBA)}{\sin(\angle APB)} = \frac{100.00 \times \sin(60^\circ 00' 00")}{\sin(74^\circ 30' 00")} $$
$$ \text{AP} \approx \frac{100.00 \times 0.8660}{0.9636} \approx 89.87 \text{ m} $$

Similarly, you can calculate BP.

---

## 3. Field Procedures for Heights and Distances

### 3.1 Setting Up the Total Station

1.  **Centering:** Place the total station over the known station point using the tribrach and optical plummet (or laser plummet).
2.  **Levelling:** Level the instrument using the tribrach leveling screws and the circular/plate bubble.
3.  **Setting Height of Instrument (HI):** Measure the vertical distance from the ground point to the optical center of the total station. This is usually done from the top of the tribrach to the instrument's center.

### 3.2 Setting Up the Prism (Target)

1.  **Centering:** Place the prism on a ranging rod/pole and center it over the target point using the optical plummet (if available) or by careful visual alignment.
2.  **Levelling:** Ensure the prism itself is vertical. Most prisms have a circular bubble for this.
3.  **Setting Height of Prism (HT):** Measure the vertical distance from the ground point to the center of the prism (often marked on the prism assembly).

### 3.3 Performing Measurements

1.  **Orienting the Instrument (Optional but recommended):** If you have known coordinates for your station point and a known backsight point, orient the total station to establish the correct grid azimuth. This allows for direct coordinate calculations.
2.  **Measuring to the Target Point:**
    *   Aim the total station at the prism at the target point.
    *   Ensure the prism is precisely centered in the instrument's field of view.
    *   Select the appropriate measurement mode (e.g., prism mode, measurement settings).
    *   Trigger the measurement.
    *   The total station will display SD, HD, VD, and the vertical angle. Record these values.

### 3.4 Common Scenarios and Techniques

#### 3.4.1 Measuring Height of a Building/Object

1.  **Setup 1 (Base of Object):**
    *   Set up the total station at a convenient known point (e.g., Station A).
    *   Measure HI.
    *   Measure to the base of the object (target point 1) with a prism. Record SD1, HD1, VD1, VA1.
    *   Measure to the top of the object (target point 2) with a prism. Record SD2, HD2, VD2, VA2.

    **Calculation:**
    *   Horizontal distance to base = HD1
    *   Height of object = Elevation of A + HI + VD2 - HT2 (if VA2 is positive)
    *   Alternatively, the height of the object above the base is (HI + VD2 - HT2) - (HI + VD1 - HT1). If HT1 and HT2 are the same, and the base is at the same elevation as the instrument's horizontal plane, height = VD2. More accurately, it's the difference in elevation between the top and the base.
    *   **The most straightforward way is to consider the difference in elevation of the two points:**
        *   Elevation of Base = Elevation of A + HI + VD1 - HT1
        *   Elevation of Top = Elevation of A + HI + VD2 - HT2
        *   Height of Object = Elevation of Top - Elevation of Base

#### 3.4.2 Measuring Height of a Bridge/Overhang

Similar to the building, but the measurement to the underside of the bridge would involve a negative vertical angle.

#### 3.4.3 Measuring Distance to a Point on the Opposite Side of a River

This is where the two-station method or triangulation is essential.

---

## 4. Resection (Indirectly Relevant to Heights & Distances)

While not directly calculating heights and distances, understanding resection is crucial for establishing your position and orientation in the field, which is a prerequisite for accurate measurements.

*   **Definition:** Resection is a surveying technique used to determine the coordinates of an unknown station point (where the total station is set up) by measuring angles and distances to known points (control points) with known coordinates.
*   **How it Helps:** Once your station point's coordinates are known, and the total station is oriented (north orientation), the instrument can directly calculate the coordinates of any target point it measures to. From these coordinates, horizontal distance and elevation difference can be computed easily and precisely.

**Basic Principle of Resection:**
Similar to triangulation, it involves measuring angles from the unknown station to at least three known points. The intersection of lines of sight (or computed bearing/distance lines) from these known points reveals the location of the unknown station.

---

## 5. Sources of Error and Precautions

*   **Instrument Calibration:** Ensure the total station is properly calibrated and in good working order.
*   **Centering Errors:** Inaccurate centering of the total station and prism over the points.
    *   *Precaution:* Use optical/laser plummets carefully. Minimize centering errors by keeping HI and HT as small as possible.
*   **Levelling Errors:** Improper leveling of the instrument.
    *   *Precaution:* Use the circular bubble and the plate bubble. Auto-leveling functions are helpful.
*   **Prism Constant:** Ensure the correct prism constant is entered into the total station. Different prisms and mounting configurations have different constants.
*   **Reading Errors:**
    *   **Vertical Angle Errors:** Inaccurate pointing, atmospheric refraction (especially for long distances and large VA).
    *   **Slope Distance Errors:** EDM accuracy, atmospheric conditions (temperature, pressure affect light speed), target visibility.
*   **HI and HT Measurement Errors:** Inaccurate measurement of the height of the instrument and prism.
    *   *Precaution:* Use a measuring tape or folding rule accurately.
*   **Target Offset Errors:** If the prism is not exactly centered on the target point.
*   **Earth Curvature and Refraction:** For very long distances, these effects can become significant and need to be accounted for by the total station's internal software or in post-processing.
*   **Atmospheric Conditions:** Temperature and pressure affect the speed of light, hence EDM readings. Modern total stations have built-in compensators for this.

---

## 6. Practice Questions and Exercises

**Exercise 1: Height of a Pole**

You set up a total station at Point A.
*   Elevation of Point A = 150.00 m
*   Height of Instrument (HI) = 1.55 m

You measure to the base of a pole (Point B) and to the top of the pole (Point C).

| Measurement to | Slope Distance (SD) | Vertical Angle (VA) | Height of Prism (HT) |
| :------------- | :------------------ | :------------------ | :------------------- |
| Point B (Base) | 50.00 m             | +2° 15' 00"         | 1.50 m               |
| Point C (Top)  | 55.00 m             | +10° 30' 00"        | 1.50 m               |

**Questions:**

a)  Calculate the Horizontal Distance (HD) to Point B.
b)  Calculate the Vertical Difference (VD) for the measurement to Point B.
c)  Calculate the Elevation of Point B.
d)  Calculate the Vertical Difference (VD) for the measurement to Point C.
e)  Calculate the Elevation of Point C.
f)  Calculate the Height of the Pole (Elevation of C - Elevation of B).

**Answers:**

First, convert angles to decimal degrees:
*   2° 15' 00" = 2.25°
*   10° 30' 00" = 10.50°

a)  **HD to Point B:**
    HD = SD * cos(VA)
    HD = 50.00 m * cos(2.25°)
    HD = 50.00 m * 0.9973
    **HD = 49.87 m**

b)  **VD for Point B:**
    VD = SD * sin(VA)
    VD = 50.00 m * sin(2.25°)
    VD = 50.00 m * 0.0392
    **VD = 1.96 m** (Positive, so Point B is 1.96 m above the instrument's horizontal plane)

c)  **Elevation of Point B:**
    Elevation of B = Elevation of A + HI + VD - HT
    Elevation of B = 150.00 m + 1.55 m + 1.96 m - 1.50 m
    **Elevation of B = 152.01 m**

d)  **VD for Point C:**
    VD = SD * sin(VA)
    VD = 55.00 m * sin(10.50°)
    VD = 55.00 m * 0.1823
    **VD = 10.03 m** (Positive, so Point C is 10.03 m above the instrument's horizontal plane)

e)  **Elevation of Point C:**
    Elevation of C = Elevation of A + HI + VD - HT
    Elevation of C = 150.00 m + 1.55 m + 10.03 m - 1.50 m
    **Elevation of C = 160.08 m**

f)  **Height of the Pole:**
    Height of Pole = Elevation of C - Elevation of B
    Height of Pole = 160.08 m - 152.01 m
    **Height of Pole = 8.07 m**

---

**Exercise 2: Distance to an Inaccessible Point using Two-Station Method**

You want to find the distance from Point P to a point X on the other side of a river. You establish two observation points, A and B, on your side of the river.

*   Known distance AB = 120.00 m (measured by tape)

**Measurements from Point A:**
*   Set up total station at A.
*   Measure horizontal angle ∠PAB (the angle formed by lines AP and AB) = 50° 00' 00"
*   Measure slope distance AP = 95.50 m

**Measurements from Point B:**
*   Set up total station at B.
*   Measure horizontal angle ∠PBA (the angle formed by lines BP and BA) = 65° 00' 00"

**Question:**

Calculate the distance PX (which we are approximating as AP).

**Answer:**

We are looking for the distance AP, which we have directly measured as 95.50 m from Point A. The problem statement implies we need to *calculate* this distance using the two-station method as a verification or if the direct measurement was not possible. However, if we are given the direct slope distance (and assuming it's processed to horizontal distance if VA was measured), that is the most straightforward answer.

Let's assume the question implies we need to verify the distance AP using the data from both stations, and perhaps there's a typo and it should be asking for the distance BP as well, or a distance from a third point.

**Assuming the question *meant* to ask for the distance BP:**

We have triangle ABP.
*   AB = 120.00 m
*   ∠PAB = 50° 00' 00"
*   ∠PBA = 65° 00' 00"

1.  **Calculate ∠APB:**
    ∠APB = 180° - (∠PAB + ∠PBA)
    ∠APB = 180° - (50° 00' 00" + 65° 00' 00")
    ∠APB = 180° - 115° 00' 00"
    ∠APB = 65° 00' 00"

2.  **Calculate distance BP using the Law of Sines:**
    $$ \frac{\text{AP}}{\sin(\angle PBA)} = \frac{\text{BP}}{\sin(\angle PAB)} = \frac{\text{AB}}{\sin(\angle APB)} $$

    $$ \text{BP} = \frac{\text{AB} \times \sin(\angle PAB)}{\sin(\angle APB)} $$
    $$ \text{BP} = \frac{120.00 \times \sin(50° 00' 00")}{\sin(65° 00' 00")} $$
    $$ \text{BP} = \frac{120.00 \times 0.7660}{0.9063} $$
    **BP ≈ 101.58 m**

**If the question is strictly asking for the distance to PX (which is AP), and we are given AP = 95.50 m, then the answer is 95.50 m.** The two-station method's primary use is for points where direct measurement is impossible, or to establish a network of points.

---

## 7. Important Points to Remember

*   **Accurate Setup:** Precise centering and leveling are paramount for accurate results.
*   **Prism Constant:** Always verify and input the correct prism constant into the total station.
*   **HI and HT:** Measure HI and HT meticulously. Record them accurately.
*   **Vertical Angles:** Pay close attention to the sign of the vertical angle. A positive VA means the target is above the horizontal, a negative VA means it's below.
*   **Trigonometric Formulas:** Ensure you are using the correct trigonometric functions (sin, cos) based on whether you are using Vertical Angles or Zenith Angles.
*   **Units:** Be consistent with units (degrees/minutes/seconds vs. decimal degrees, meters).
*   **Atmospheric Corrections:** Modern total stations often handle atmospheric corrections automatically, but understand that temperature and pressure influence light speed.
*   **Double Centering:** For critical measurements, performing a double-centering (setting up, measuring, then turning the instrument 180°, measuring again) can help detect and mitigate some errors.
*   **Check Measurements:** Where possible, take redundant measurements or use alternative methods to verify results.

---
This concludes the study notes for Heights and Distances using a Total Station. Practice these concepts in the lab to build proficiency.
