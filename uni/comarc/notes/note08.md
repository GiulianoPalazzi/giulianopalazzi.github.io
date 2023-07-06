---
layout: note
title: 8086 Assembly Language
---

# Summary of programming workflow

# Intro to 8086 Assembly Language

# 8086 Microprocessor Architecture

8086 is a 16-bit machine, which means that the *data bus* size is 16 bits; *registers* of the CPU have a size of 16 bits too. The *address bus* size is 20 bits.

| Introduced | 1978 |
| Clock speeds | 5MHz, 8MHz, 10 MHz |
| Bus width | 16 bits |
| Number fo transistors | 29,000 |
| Feature size | 3 mm |
| Addressable memory | 1 MB |

## Registers of the 8086 microprocessor:

***General register***

| AX | Accumulator |
| BX | Base |
| CX | Count |
| DX | Data |

***Pointers & index***

| SP | Stack pointer |
| BP | Base pointer |
| SI | Source index |
| DI | Destination index |

***Segment***

| CS | Code |
| DS | Data |
| SS | Stack |
| ES | Extract |

***Program status***

| IP | Instruction pointer |
|    | Flags |

# 8086 Memory Byte Ordering

8086's endianess is little endian

# 8086 Stack implementation

# Program Status Word Registers

When a flag is *set* it has a value of 1, *reset* value is 0.

The flag are in the **PSW** (Program Status Word) 16-bit registers

## Status Flags

* **Sign** (SF): Contains the sign bit of the result of the last arithmetic operation.
* **Zero** (ZF): Set when the result of the operation is 0.
* **Carry** (CF): Set if an operation resulted in a *carry* (addition) in or *borrow* (substraction) out of a higher order bit. Used for multiword arithmetic operations.
* **Auxiliary carry** (AF): set when some arithmetic operations generat carry after the lower half & sends it to the upper half.
* **Parity** (PF): Odd parity, so: set when result has even number of 1s; otherwise 0 for odd number of 1s.
* **Equal** : Set if a logical compare result is equality.
* **Overflow** (OF): Used to indicate arithmetic overflow.

## Control Flags

* **Interrupt Enable/Disable** (IF): Used to enable or disable interrupts
* **Supervisor** : Indicates whether the processor is executing in supervisor or user mode. Certain privileged instructions or areas of memory can be executed/accessed only in supervisor mode.

# Format of Assembly Instructions

# Type of Assembly Language Statements

# 8086 Addressing Modes

# 8086 Array Declaration

# Main Instructions

# Data Transfer Opcodes

# Flow Control Opcodes

## Branch (or jump) Instructions

# Arithmetic Opcodes

# Bit Manipulation Opcodes

## Boolean Logic Instructions

## Shift & Rotate Instructions

# Multiply by a generic constant

# Example

```x86asm
.text
main:
    mov AX 15h
```
