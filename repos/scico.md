---
layout: default
title: Scientific Computational Imaging COde
parent: Repositories
nav_order: 5
permalink: /repos/scico/
---

# Scientific Computational Imaging COde
{: .no_toc }

Python package for solving the inverse problems that arise in scientific imaging applications.
{: .fs-6 .fw-300 }

[View on GitHub](https://github.com/lanl/scico){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Documentation](https://scico.readthedocs.io/en/stable/){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Scientific Computational Imaging Code (SCICO) is a Python package for solving the inverse problems that arise in scientific imaging applications. Its primary focus is providing methods for solving ill-posed inverse problems by using an appropriate prior model of the reconstruction space. SCICO includes a growing suite of operators, cost functionals, regularizers, and optimization algorithms that may be combined to solve a wide range of problems, and is designed so that it is easy to add new building blocks. When solving a problem, these components are combined in a way that makes code for optimization routines look like the pseudocode in scientific papers. SCICO is built on top of JAX rather than NumPy, enabling GPU/TPU acceleration, just-in-time compilation, and automatic gradient functionality, which is used to automatically compute the adjoints of linear operators. 

### Key Features

- The vast majority of scientific computing packages in Python are based on NumPy and SciPy. SCICO, in contrast, is based on JAX, which provides most of the same features, but with the addition of automatic differentiation, GPU support, and just-in-time (JIT) compilation. (The availability of these features in SCICO is subject to some caveats.) SCICO users and developers are advised to become familiar with the differences between JAX and NumPy.
- While recent advances in automatic differentiation have primarily been driven by its important role in deep learning, it is also invaluable in a functional minimization framework such as SCICO. The most obvious advantage is allowing the use of gradient-based minimization methods without the need for tedious mathematical derivation of an expression for the gradient. Equally valuable, though, is the ability to automatically compute the adjoint operator of a linear operator, the manual derivation of which is often time-consuming.
- GPU support and JIT compilation both offer the potential for significant code acceleration, with the speed gains that can be obtained depending on the algorithm/function to be executed. In many cases, a speed improvement by an order of magnitude or more can be obtained by running the same code on a GPU rather than a CPU, and similar speed gains can sometimes also be obtained via JIT compilation.

---

## Installation

The online documentation includes detailed [installation instructions.](https://scico.readthedocs.io/en/latest/install.html)

---

## Quick Start

TBD

---

# Example usage here

[Usage Examples.](https://scico.readthedocs.io/en/stable/examples.html)

---

## License

SCICO is distributed as open-source software under a [BSD 3-Clause License] (https://opensource.org/license/BSD-3-clause). See the LICENSE file for details.

LANL open source approval reference C20091.

(c) 2020-2026. Triad National Security, LLC. All rights reserved. This program was produced under U.S. Government contract 89233218CNA000001 for Los Alamos National Laboratory (LANL), which is operated by Triad National Security, LLC for the U.S. Department of Energy/National Nuclear Security Administration. All rights in the program are reserved by Triad National Security, LLC, and the U.S. Department of Energy/National Nuclear Security Administration. The Government has granted for itself and others acting on its behalf a nonexclusive, paid-up, irrevocable worldwide license in this material to reproduce, prepare derivative works, distribute copies to the public, perform publicly and display publicly, and to permit others to do so.

