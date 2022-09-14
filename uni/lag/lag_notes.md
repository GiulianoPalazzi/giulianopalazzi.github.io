---
layout: basic
title: Linear Algebra & Geometry Notes
backlink: /uni/lag/lag_index
backlinktitle: Linear Algebra & Geometry Main Page
---
# Matrices #

## Determinant of a matrix ##

### 2$\times$2 matrices ###

If $A = \begin{bmatrix} a & b\\\ c & d \end{bmatrix} $

Then the determinant of the matrix is equal to $a \times b - c \times d$

$det A = \begin{vmatrix} A \end{vmatrix} = \begin{vmatrix} a & b\\\ c & d \end{vmatrix} = a \times b - c \times d$

### 3$\times$3 matrices ###

Laplace Expansion along any of the rows or columns

## How to invert a matrix ##

### 2$\times$2 matrices ###

$A = \begin{bmatrix} a & b\\\ c & d \end{bmatrix} $

Therefore the inverse is calculated with the following formula:\\
$A^{-1} = \frac{1}{\begin{vmatrix} det \end{vmatrix} } \begin{bmatrix} a & b\\\ c & d \end{bmatrix} $

### 3$\times$3 matrices ###

$A = \begin{bmatrix} a & b & c\\\ d & e & f\\\ g & h & i \end{bmatrix} $

Therefore the inverse is calculated with the following formula:\\
1. Calculate the matrix of co-factors

1. Get the adjugate matrix from the matrix of co-factors\\
$adj(A) = A^T$

1. Multiply by the signs corresponding to the $i, j$ positions\\
$-1^{i + j}$\\
$\begin{bmatrix} + & - & +\\\ - & + & -\\\ + & - & + \end{bmatrix} $

1. Lastly multiply by the reciprocal of the determinant\\
$A^{-1} = \frac{1}{\begin{vmatrix} det \end{vmatrix} } \begin{bmatrix} a & b & c\\\ d & e & f\\\ g & h & i \end{bmatrix} $
