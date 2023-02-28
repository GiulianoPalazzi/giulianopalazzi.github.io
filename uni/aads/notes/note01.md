---
layout: note
title: Algorithm & Data Structures
---

# Void pointers #

It isn't associated to any specific data type

It is a generic pointer and can be converted to any type

## Pointer Arithmetic ##

pointer++ doesn't increment it by one but by the size taken up by the data
type the pointer is pointing to.

## Pointer in structure ##

```c
pointer_to_structure->property
(*pointer_to_structure).property
```

the first line is the one that is widely used by C programmers

# Dynamic memory allocation #

Telling the compiler to reserve memory to be allocated at runtime
Most commonly used with arrays
