---
title: "Familiarisation of rheostats, measurement of potential across resistance elements and introducing the concept of relative potential using a DC circuit."
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 7: Familiarisation of rheostats, measurement of potential across resistance elements and introducing the concept of relative potential using a DC circuit."
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f9393"
status: "completed"
scrapedAt: "2026-05-23T16:00:44.021Z"
---
# Module 7: Familiarisation of Rheostats, Potential Measurement, and Relative Potential in DC Circuits

Welcome, everyone! In this module, we're going to get our hands dirty with some fundamental electrical components and concepts that are absolutely crucial for understanding how electrical circuits behave. We'll be diving into rheostats, learning how to measure the "push" or "pull" of electricity across different parts of a circuit (that's potential difference, or voltage!), and importantly, we'll introduce the idea of *relative* potential. This last concept is key to understanding how we make sense of voltage measurements in real-world circuits.

This module directly helps us achieve several of our Course Outcomes:

*   **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes.** Today, we're focusing specifically on rheostats.
*   **CO5: Operate various measuring instruments.** We'll be using multimeters to measure potential, so this is a direct link.
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits.** Understanding how to connect these components and measure their behavior is a step towards designing and building circuits.

So, let's start with our first key player: the rheostat.

## 1. Familiarisation with Rheostats

### What is a Rheostat?

Imagine you have a garden hose, and you want to control how much water flows. You could partly squeeze the hose to restrict the flow, right? A rheostat works on a similar principle, but instead of water, it controls the flow of *electric current*.

A rheostat is essentially a **variable resistor**. It's a component whose resistance can be changed by physically moving a contact along a resistive element. Think of it as a "tuner" for resistance.

### Types of Rheostats

While there are a few variations, the most common type you'll encounter in the workshop is the **wire-wound rheostat**.

*   **Wire-Wound Rheostat:** This is typically constructed by winding a length of resistive wire (like Nichrome) around a ceramic core. A movable contact, often called a "wiper" or "slider," slides along this winding. As you move the wiper, you change the length of the resistive wire that the current has to travel through. The longer the path, the higher the resistance.

    *   **Analogy:** Think of a long, winding road. If you want to travel the whole road, you experience the full resistance of the road's surface. If you only travel a short section of it, you experience less resistance. The wiper is like choosing your stopping point on that road.

### How Rheostats are Used

Rheostats are used in situations where you need to continuously adjust resistance. Some common applications include:

*   **Dimming lights:** Older dimmer switches often used rheostats to control the brightness of incandescent bulbs.
*   **Motor speed control:** In some applications, rheostats can be used to control the speed of DC motors.
*   **Laboratory experiments:** They are invaluable for setting specific current or voltage levels in experiments.

### Connecting a Rheostat

When you look at a rheostat, you'll usually see three terminals.

1.  **One end terminal of the resistive element.**
2.  **The other end terminal of the resistive element.**
3.  **The movable contact (wiper/slider).**

To use it as a variable resistor, you connect your circuit to **one end terminal and the wiper**. The resistance between these two points will vary as you move the wiper.

*   **Important Point:** If you connect to both end terminals, you get the *total* resistance of the rheostat, which is fixed. That's not what we're after when we want to *vary* the resistance. So, remember: for variable resistance, it's always **one end terminal + wiper**.

This is directly related to **CO3** – understanding how to connect components to form a functional circuit.

## 2. Measuring Potential Across Resistance Elements

Now that we understand resistance and how to vary it with a rheostat, let's talk about measuring the "potential."

### What is Potential Difference (Voltage)?

Think of electrical potential as the "pressure" or "energy" that drives electric charges (electrons) to move. A **potential difference**, or **voltage**, is the difference in this electrical "pressure" between two points. It's what causes current to flow.

*   **Analogy:** Imagine two water tanks at different heights. Water flows from the higher tank to the lower tank because there's a difference in water level (potential). This difference in level is analogous to voltage. The higher the difference, the more readily water flows (assuming the pipe isn't blocked!).

The standard unit for potential difference is the **Volt (V)**.

### Measuring Voltage: The Voltmeter

To measure this "electrical pressure," we use a device called a **voltmeter**. Most modern multimeters have a built-in voltmeter function.

*   **Key Rule for Connecting a Voltmeter:** To measure the potential difference *across* a component (like a resistor or a rheostat's resistive element), you must connect the voltmeter **in parallel** with that component.

    *   **What does "in parallel" mean?** It means you connect the voltmeter's terminals to the *same two points* in the circuit that the component is connected to. You're essentially "tapping into" the circuit at those two points without significantly altering the current flow.

    *   **Why parallel?** A voltmeter is designed to have a very high internal resistance. This ensures that when connected in parallel, it draws only a tiny amount of current from the circuit. If you connected it in series, it would act like an open circuit (a break), stopping the current flow and giving you a meaningless reading.

### Practical Steps for Measurement

Let's say you have a simple circuit: a battery, a fixed resistor, and you want to measure the voltage across the resistor.

1.  **Set up your circuit:** Connect the battery and the resistor in series.
2.  **Prepare your multimeter:** Select the DC voltage setting (usually marked with 'V' and a straight line or 'DC'). Choose a range that is higher than the expected voltage you'll be measuring.
3.  **Connect the voltmeter:** Identify the two points in the circuit where the resistor is connected. Connect the black lead of your multimeter to one of these points and the red lead to the other.
4.  **Read the display:** The multimeter will display the voltage difference between the two points.

*   **Remember this:** The red probe is typically connected to the point of higher potential (positive side) and the black probe to the point of lower potential (negative side). If you get a negative reading, it just means you've reversed the probes; the magnitude of the voltage is correct.

This directly addresses **CO5** – operating measuring instruments correctly.

## 3. Introducing the Concept of Relative Potential Using a DC Circuit

So far, we've measured the "push" across components. But what does "potential" itself mean? And why do we talk about *relative* potential?

### The Concept of Potential

Electrical potential is a property of a point in an electric field. It represents the amount of electric potential energy per unit charge at that point. However, absolute potential is difficult to define and measure in practice. What we are always interested in is the **difference** in potential between two points.

### Why "Relative" Potential?

Think about altitude. We talk about the height of a mountain relative to sea level. Sea level is our reference point (zero altitude). But you could also measure the height of a table relative to the floor, or the floor relative to the basement. The actual height of the table doesn't change, but the value you assign to it depends on what you choose as your zero reference.

In electrical circuits, it's the same. We need a **reference point** or **common point** to define potentials. We often call this point **ground** or **earth**.

*   **Ground (0 Volts):** In many circuits, one point is designated as having zero potential. This is our reference. All other potentials in the circuit are then measured *relative* to this ground point.

    *   **Analogy:** Imagine a drainage system for a house. All the drains lead to a common point, and the water flows "downhill" towards that point. That common point is like our ground reference. Water at different points in the pipes has a potential (height) relative to that common drain.

### Setting up a Simple DC Circuit to Demonstrate Relative Potential

Let's build a circuit to see this in action. We'll use a battery, a rheostat, and a fixed resistor.

**Circuit Diagram Idea:**

```
      +------------[ Rheostat ]------------[ Fixed Resistor ]------------+
      |                                                                |
      |                                                                |
   Battery (+)                                                      Battery (-)
      |                                                                |
      +----------------------------------------------------------------+
```

Now, let's choose a reference point. The negative terminal of the battery is a very common and convenient reference point, and we'll assign it 0 Volts.

Let's say:
*   Battery voltage = 12V
*   Rheostat is set to 500 Ohms.
*   Fixed Resistor = 1000 Ohms.

We have two main points of interest where we might want to measure potential:

1.  **Across the Rheostat:** Measure the voltage from the wiper terminal to the negative terminal of the battery.
2.  **Across the Fixed Resistor:** Measure the voltage from the other end of the fixed resistor to the negative terminal of the battery.

### Calculations and Measurements

First, let's calculate the total resistance in the circuit:
Total Resistance (R_total) = Resistance of Rheostat (R_rheo) + Resistance of Fixed Resistor (R_fixed)
R_total = 500 Ω + 1000 Ω = 1500 Ω

Now, using Ohm's Law (V = I * R), we can find the total current flowing in the circuit:
Current (I) = Battery Voltage (V_battery) / Total Resistance (R_total)
I = 12 V / 1500 Ω = 0.008 A = 8 mA

Now, let's find the potential drop across each component:

*   **Potential drop across the Rheostat (V_rheo):**
    V_rheo = I * R_rheo
    V_rheo = 0.008 A * 500 Ω = 4 V

*   **Potential drop across the Fixed Resistor (V_fixed):**
    V_fixed = I * R_fixed
    V_fixed = 0.008 A * 1000 Ω = 8 V

Notice that V_rheo + V_fixed = 4V + 8V = 12V, which is the total battery voltage. This is Kirchhoff's Voltage Law in action – the sum of voltage drops around a closed loop equals the total voltage supplied.

### Measuring Relative Potentials

Now, let's connect our multimeter to measure the *potential at different points relative to the negative terminal of the battery (our 0V reference)*.

1.  **Measure the potential at the positive terminal of the battery:** Connect the black probe to the negative battery terminal and the red probe to the positive battery terminal. You should measure approximately +12V. This is the potential of the positive terminal *relative to* the negative terminal.

2.  **Measure the potential at the wiper of the rheostat:** Connect the black probe to the negative battery terminal (0V) and the red probe to the wiper of the rheostat.
    *   **Expected measurement:** This point is at the junction between the rheostat and the fixed resistor. The potential drop across the fixed resistor is 8V. Since the negative terminal is our 0V reference, the potential at this junction, measured from the negative terminal, will be the battery voltage minus the drop across the fixed resistor, OR simply the drop across the rheostat itself.
    *   Potential at wiper = V_battery - V_fixed = 12V - 8V = 4V
    *   Alternatively, Potential at wiper = V_rheo = 4V
    *   So, your multimeter should read approximately +4V.

3.  **Measure the potential at the other end of the fixed resistor (which is connected to the negative terminal):** Connect the black probe to the negative battery terminal and the red probe to this point.
    *   **Expected measurement:** This point is directly connected to the negative terminal of the battery. Therefore, the potential difference between this point and the negative terminal is zero. Your multimeter should read 0V.

### Key Takeaways on Relative Potential

*   **Reference Point is Crucial:** The value of a potential measurement depends entirely on the reference point chosen.
*   **We Measure Differences:** We are always measuring the potential *difference* between two points. By choosing one point as our reference (0V), we can determine the absolute potential of other points in the circuit relative to that reference.
*   **Kirchhoff's Voltage Law (KVL):** This concept of relative potential is the foundation for KVL, which states that the algebraic sum of all potentials around any closed loop in a circuit is zero.

This is incredibly important for understanding how signals behave in more complex electronic circuits, relating to **CO3** again, as it underpins circuit analysis and design.

## Summary and Exam Tips

*   **Rheostat:** A variable resistor, typically wire-wound, used to control resistance. Connect one end terminal and the wiper for variable resistance.
*   **Voltmeter:** Measures potential difference (voltage). Always connect in parallel. High internal resistance is key.
*   **Relative Potential:** Potential measured with respect to a chosen reference point (often ground or 0V).
*   **KVL:** The sum of voltage drops in a closed loop equals the supply voltage, directly illustrating the concept of relative potentials summing up.

**Exam Question Pitfalls to Avoid:**

*   **Connecting a voltmeter in series:** This is a common mistake that will break your circuit. Always parallel!
*   **Confusing potential difference with absolute potential:** In workshop settings, we are always dealing with potential differences. The "relative" aspect helps us make sense of these measurements by establishing a reference.
*   **Incorrectly identifying rheostat terminals:** Remember, for variable resistance, it's one end terminal plus the wiper.

This module provides the practical skills to use essential components and measurement tools, laying the groundwork for more advanced circuit analysis and construction.

---

## Sample Questions and Answers

**1. Conceptual Question:** Explain why a voltmeter is always connected in parallel with a component when measuring voltage.

**Answer:** A voltmeter measures the potential difference between two points. To accurately measure this difference without significantly altering the circuit's behavior, it needs to draw minimal current. This is achieved by having a very high internal resistance. When connected in parallel with a component, the high resistance of the voltmeter ensures that most of the circuit current bypasses the voltmeter, flowing through the component as it normally would. If connected in series, the voltmeter's high resistance would effectively act as an open circuit, blocking the current flow and preventing any meaningful measurement.

**2. Practical/Exam-Oriented Question:** You are given a DC circuit with a battery, a rheostat, and a fixed resistor connected in series. You need to measure the voltage drop across the rheostat. Describe the steps you would take, including how you would connect your multimeter.

**Answer:**
1.  **Identify Components:** Locate the battery, rheostat, and fixed resistor in the circuit.
2.  **Set Multimeter:** Turn on your multimeter and select the DC voltage measurement mode (V with a straight line). Choose a voltage range that is higher than the expected voltage drop across the rheostat (e.g., if you have a 12V battery, choose a range like 20V).
3.  **Locate Rheostat Terminals:** Identify the two end terminals of the rheostat's resistive element and the movable wiper terminal.
4.  **Connect Voltmeter:**
    *   Connect the **black probe** of the multimeter to **one of the end terminals** of the rheostat's resistive element.
    *   Connect the **red probe** of the multimeter to the **wiper (slider) terminal** of the rheostat. (Alternatively, you could connect the red probe to the other end terminal and the black probe to the wiper; the reading might be negative, but the magnitude is correct). The key is to connect across the part of the resistive element that is actively being used.
5.  **Read Measurement:** Observe the reading on the multimeter's display. This will be the voltage drop across the rheostat.

**3. Conceptual Question:** In a simple series circuit consisting of a battery and a resistor, if you connect the negative terminal of your multimeter to the negative terminal of the battery (assigning it 0V), what will be the reading when you connect the positive terminal of your multimeter to the positive terminal of the battery? What does this reading represent in terms of relative potential?

**Answer:** The multimeter will read the battery's voltage (e.g., 12V). This reading represents the **potential of the positive terminal of the battery relative to the negative terminal of the battery**, which we have designated as our 0V reference point. It signifies the total electrical "pressure" or potential energy available to drive current in the circuit.
