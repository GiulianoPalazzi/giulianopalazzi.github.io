---
layout: note
title: Linear Algebra & Geometry Notes
backlink: /uni/lag/lag_index
backlinktitle: Linear Algebra & Geometry Main Page
---

# Determinant of a matrix #

## 2$\times$2 matrices ##

If 
$$A = 
\begin{bmatrix}
a & b\\
c & d 
\end{bmatrix} 
$$

Then the determinant of the matrix is equal to $ad - bc$

$det(A) = \begin{vmatrix} A \end{vmatrix} = \begin{vmatrix} a & b\\\ c & d \end{vmatrix} = a \times d - b \times c$

## 3$\times$3 matrices ##

Laplace Expansion along any of the rows or columns

If $A = \begin{bmatrix} a & b & c\\\ d & e & f\\\ g & h & i \end{bmatrix} $

e.g.\\
$det(A) = \begin{vmatrix} a & b & c\\\ d & e & f\\\ g & h & i  \end{vmatrix} = a \begin{vmatrix} e & f\\\ h & i \end{vmatrix} + b \begin{vmatrix} d & f\\\ g & i \end{vmatrix} + c \begin{vmatrix} d & e\\\ g & h \end{vmatrix}  $

<div class="note-block">
<strong>Note:</strong>

This is just an example where the Laplace expansion was done alone the first
row. But, the Laplace exapansion can be done along any of the rows or the
columns. It is generally better to do it along the row or column which has the
most zeros, since that will yield the easiest calculation
</div>

# How to invert a matrix #

## 2$\times$2 matrices ##

$A = \begin{bmatrix} a & b\\\ c & d \end{bmatrix} $

The inverse is calculated with the following formula:

$ A^{-1} = \dfrac{1}{\begin{vmatrix} det(A) \end{vmatrix} } \begin{bmatrix} d & -b\\\ -c & a \end{bmatrix} $

## 3$\times$3 matrices ##

$A = \begin{bmatrix} a & b & c\\\ d & e & f\\\ g & h & i \end{bmatrix} $

The inverse is calculated with the following formula:

1. Calculate the matrix of co-factors\\
\\
Matrix of co-factors 
$$ = \begin{bmatrix} 
\begin{vmatrix} e & f\\\ h & i \end{vmatrix} & \begin{vmatrix} d & f\\\ g & i \end{vmatrix} & \begin{vmatrix} d & e\\\ g & h \end{vmatrix}\\
\\
\begin{vmatrix} b & c\\\ h & i \end{vmatrix} & \begin{vmatrix} a & c\\\ g & i \end{vmatrix} & \begin{vmatrix} a & b\\\ g & h \end{vmatrix}\\
\\
\begin{vmatrix} b & c\\\ e & f \end{vmatrix} & \begin{vmatrix} a & c\\\ d & f \end{vmatrix} & \begin{vmatrix} a & b\\\ d & e \end{vmatrix}\\
\end{bmatrix} $$

1. Get the adjugate or adjoint matrix from the matrix of co-factors\\
$adj(A) = A^T$

1. Multiply it by the signs corresponding to the $i, j$ positions\\
$a_{i,j} = -1^{i + j}$

$$
\begin{align*}
\therefore \text{sign matrix}
&= \begin{bmatrix} + & - & +\\\ - & + & -\\\ + & - & + \end{bmatrix}\\
\text{or}
&= \begin{bmatrix} 1 & -1 & 1\\\ -1 & 1 & -1\\\ 1 & -1 & 1 \end{bmatrix}\\
\end{align*}
$$

1. Lastly multiply by the reciprocal of the determinant\\
$A^{-1} = \dfrac{1}{\begin{vmatrix} det(A) \end{vmatrix} } \begin{bmatrix} a & b & c\\\ d & e & f\\\ g & h & i \end{bmatrix} $

# Dot product #
[Wikipedia](https://en.wikipedia.org/wiki/Dot_product){:target="_blank"}

# Cross product #
[Wikipedia](https://en.wikipedia.org/wiki/Cross_product){:target="_blank"}
Lovely tedious calculations that *abuses* standard math notation

# Box/Mixed product #
[Wikipedia](https://en.wikipedia.org/wiki/Triple_product){:target="_blank"}
Half of Box prod will give the area of the tetahedron made by joining the three point. Basically half the area of the parallelopiped.

# Cauchy-Schawartz inequelity #

$\begin{Vmatrix} \vec{x} . \vec{y} \end{Vmatrix} \le \begin{Vmatrix} \vec{x} \end{Vmatrix} + \begin{Vmatrix} \vec{y} \end{Vmatrix}  $

The double pipes stand for the magnitude of the vectors which is calculated with pythagoras' theorem in $\R^3$\\
note: The double pipes should not be confused with the single pipes of a matrix which stands for the determinant of a matrix\\
This is kindof like a triangle inequation and it is rearranged and used to calculate angles

[Wikipedia](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality){:target="_blank"}

# Ortholinear projection #

# Solivng for intersections #

## Find line from two planes ##

Steps:

1. Find the normals to the two planes\\
   For this you just have to take a look at the coefficients of the cartesian equations of the planes\\
   **e.g.**:\\
   Plane:$ \pi_1 = x + 2y - 3z = 1,$ the corresponding normal vector is $ \begin{bmatrix} 1 \\\ 2 \\\ -3 \end{bmatrix} $\\
   The normal vector is usual denoted by a **$\vec{n}$**

1. After you have both normal vectors you have to cross product them to get the vector of the line\\
   This works because the vector of the line is perpendicular to the normals of both planes

1. Lastly you have to find a point which lies in the intersection of both
   planes (same as saying on the line), so that you can anchor the line vector
   to a point in 3d space.

1. Now you have everything to compose the equation of the line. Just convert
   the point on the line to a vector coming from the origin and make the line
   vector parametric to give you result like the following:\\
   Line: $l = \vec{x_0} + t \vec{x}$

[Youtube video](https://www.youtube.com/watch?v=O6O_64zIEYI&ab_channel=RadfordMathematics){:target="_blank"} going through the steps

# Eigen Values #

[3Blue1Brown video](https://www.youtube.com/watch?v=e50Bj7jn9IQ&ab_channel=3Blue1Brown){:target="_blank"}

It shows a trick to solve for eigen values
