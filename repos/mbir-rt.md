---
layout: default
title: MBIR-RT
parent: Repositories
nav_order: 4
---

# MBIR-RT
{: .no_toc }

Real-Time implementation for Model Based Iterative Reconstruction (MBIR) of images from tomographic data.
{: .fs-6 .fw-300 }

[View on GitHub](https://github.com/serg696f/MBIR-RT){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Documentation](https://MBIR-RT.readthedocs.io){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Real-Time implementation for Model Based Iterative Reconstruction (MBIR) of images from tomographic data - based on the python implementation developed by Charles A. Bouman, Gregery T. Buzzard.

MBIR-RT holds a stand-alone clean C implementation for verification purpose and a Verilog implementation for FPGA - both are derived from MBIRJAX.

MBIR python code can be found here: https://github.com/cabouman/mbirjax The original documentation can be found at: https://mbirjax.readthedocs.io/

### Key Features

- C-code is self contained - no external dependacies.
- RTL-code follows the C-Code and is designed for Xilinx FPGAs.
- a test-bench is provides to verify the RTL against the C-code reference.

---

## Installation

tbd

---

## Quick Start / Documentation

- For C-code  - see https://github.com/serg696f/MBIR-RT/blob/main/Verification/readme.md
- For Verilog - see https://github.com/serg696f/MBIR-RT/blob/main/RTL/readme.md

# Example usage here

tbd

---

## License

MIT

License name — see [LICENSE](https://github.com/username/reponame/blob/main/LICENSE).
