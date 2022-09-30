---
layout: note
title: Math Analysis II Note 01
backlink: /uni/mth2/mth2_index
backlinktitle: Mathematical Analysis II Main Page
---

# Laplace Transfroms #

<div class="note-block">
<strong>DEFINITION of Laplace Transfrom:</strong>

$$
\mathscr{L}\{x(t)\} = \int_{0}^{\infty}{x(t)e^{-st}dt} = \lim\limits_{M \to \infty} \int_{0}^{M}{x(t)e^{-st}dt}\\
$$
An integral is transformable with a Laplace transform only if the integral is **Convergent**
</div>

## Properties ##

## Function with exponential growth ##

<div class="note-block">
<strong>DEFINITION of a function with Exponential growth:</strong>

$$
x:\mathbb{R} \mapsto \mathbb{R}\\
t \mapsto x(t)\\
\text{If } \exists M > 0\\
\exists\gamma \in \mathbb{R} \text{ such that} \begin{vmatrix} x(t) \end{vmatrix}\le Me^{\gamma t}, \forall t \ge 0\\
$$
and we define the **Order of Growth**

</div>


<div class="note-block">
<strong>DEFINITION piecewise continuous functions:</strong>

$$
x: \mathbb{R} \mapsto \mathbb{R}$$ is piecewise **Continuous**\\
If in every closed and bounded interval it has **at most** a finite number of singularities of the following kinds:

* $1^{\text{st}}$ Kind (Jump)
* $3^{\text{rd}}$ Kind (Removable)
</div>

$\mathfrak{F} \to \mathscr{G}$

Written on 30th of sep
## Chapter 1 overview ##

1. Definitions and examples
1. Theorems

## Theorems ##

<div class="note-block">
<strong>Theorem:</strong>

Initial Value theorem
$$
x \in \mathcal{L}(0, +\infty) \implies \lim\limits_{t \to 0^{+}}X(t) = \lim\limits_{s \to +\infty}s X(s)  $$

Final Value Theorem
$$
x \in \mathcal{L}(0, +\infty) \implies \lim\limits_{t \to 0^{+}}X(t) = \lim\limits_{s \to +\infty}s X(s)  $$
</div>

