---
layout: note
title: Circuit Theory Notes
backlink: /uni/ct/ct_index
backlinktitle: Circuit Theory Main Page
---
# Kirchhoff Current Law (KCL) #

All the current entering a node is equal to the current exiting the node

Where n is the number of nodes. You can write n - 1 independent KCL equations

# Kirchhoff Voltage Law (KVL) #

The Voltages in any closed loop of a circuit is equal to zero

Where n is the number of nodes and b is the number of branches (components). You can write b - n + 1 independent KVL equations

# Power #

$$
\begin{align*}
Power &= Current &&+ Voltage\\
P &= I &&+ V
.\end{align*}
$$

## Passive sign convention ##

## Conservation of Power or Tellgen's theorem ##

The sum of the power delivered to all the elements of the circuit is equal
to zero at all times

<div class="note-block">
<strong>DEFINITION:</strong>

$\sum\limits_{all elements} p_k = \sum\limits_{all elements} v_k i_k = 0$
</div>

---

# Basic Circuit Elements #

# Two-terminal circuit elements #
## Characteristic ##

An equation describing how the Voltage and the current are related

e.g.

## Independent Voltage source ##

The characteristic equation of this component **constrains the voltage**
as a function of time(t)

$f(v,i) = v - 3 = 0$\\
Rearanged gives $v = 3$\\
In other words this means that no matter what the current flowing into it is
the output voltage will always be 3V

### Short Cicuit ###

Characteristic of Short Circuit of a Independent Voltage source $v_s(t) = 0$\\
No matter the current the independent voltage source is not outputting a
voltage (it is acting like a wire)

## Independent Current source ##

The characteristic equation of this component **constrains the current**
as a function of time(t)

$f(v,i,t) = i(t) = 3A$

## Power of Voltage & Current Sources ##

For absorbing $p(t) = v(t)i(t) \ge 0$

# Ideal Resistor #

A resistor has a value called resistance which is links to the voltage and the
current passing through it by Ohm's Law Resistance is measured in Ohm's
($\Omega$)

## Special Cases ##

If the voltage is zero or the current is zero the resistor behave like a short
circuit\\
ideal resistor with a resistance of $0\Omega$ it behaves like a short circuit\\
Ideal resistor wiht a resistance of $\infty\Omega$ it behaves like an open
circuit

# Ohm's Law #

$v(t) = Ri(t)$ : where R is the resistance of the component

---

# Second lecture (Lecture 4 in reality) #

For sources the passive sign convention should be used only when attempting to calculate the power consumed by the source.\\

## Single-loop circuit without current sources ##

$$I = \sum_{i} \dfrac{v_i}{R_i}$$

## Single node-pair cirucit ##

$$V = \dfrac{\sum(\text{Current sources *pushing* in the direction of }+V)}{\sum(\text{Conductances})}$$

Conductance $= 1/R_k$
