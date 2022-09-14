---
layout: note
title: Linear Algebra & Geometry Notes
backlink: /uni/lag/lag_index
backlinktitle: Linear Algebra & Geometry Main Page
---
# Matrices #

## Determinant of a matrix ##

### 2$\times$2 matrices ###

If 
$$A = 
\begin{bmatrix}
a & b\\
c & d 
\end{bmatrix} 
$$

Then the determinant of the matrix is equal to $ab - cd$

$det(A) = \begin{vmatrix} A \end{vmatrix} = \begin{vmatrix} a & b\\\ c & d \end{vmatrix} = a \times b - c \times d$

### 3$\times$3 matrices ###

Laplace Expansion along any of the rows or columns

If $A = \begin{bmatrix} a & b & c\\\ d & e & f\\\ g & h & i \end{bmatrix} $

e.g.\\
$det(A) = \begin{vmatrix} a & b & c\\\ d & e & f\\\ g & h & i  \end{vmatrix} = a \begin{vmatrix} e & f\\\ h & i \end{vmatrix} + b \begin{vmatrix} d & f\\\ g & i \end{vmatrix} + c \begin{vmatrix} d & e\\\ g & h \end{vmatrix}  $\\
<div class="note-block">
<strong>Note:</strong>

This is just and example because as the Laplace exapansion can be done along any of the rows or the columns. It is generally better to do it along the row or column which has more zeros since that one will result in the easiest calculation
</div>

## How to invert a matrix ##

### 2$\times$2 matrices ###

$A = \begin{bmatrix} a & b\\\ c & d \end{bmatrix} $

The inverse is calculated with the following formula:\\
$$
A^{-1} = \frac{1}{\begin{vmatrix} det(A) \end{vmatrix} } \begin{bmatrix} d & -b\\\ -c & a \end{bmatrix}
$$

### 3$\times$3 matrices ###

$A = \begin{bmatrix} a & b & c\\\ d & e & f\\\ g & h & i \end{bmatrix} $

The inverse is calculated with the following formula:\\
1. Calculate the matrix of co-factors

1. Get the adjugate or adjoint matrix from the matrix of co-factors\\
$adj(A) = A^T$

1. Multiply by the signs corresponding to the $i, j$ positions\\
$-1^{i + j}$\\
$\begin{bmatrix} + & - & +\\\ - & + & -\\\ + & - & + \end{bmatrix} $

1. Lastly multiply by the reciprocal of the determinant\\
$A^{-1} = \frac{1}{\begin{vmatrix} det(A) \end{vmatrix} } \begin{bmatrix} a & b & c\\\ d & e & f\\\ g & h & i \end{bmatrix} $
