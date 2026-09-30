---
layout: default
title: MBIRTorch
parent: Repositories
nav_order: 6
---

# MBIRJAX
{: .no_toc }

MBIR reconstruction implemented in PyTorch.
{: .fs-6 .fw-300 }

[View on GitHub](https://github.com/cabouman/mbirtorch){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Full Documentation](https://mbirtorch.readthedocs.io){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

MBIRTorch: Model-Based Iterative Reconstruction (MBIR) for tomographic reconstruction using [PyTorch](https://pytorch.org/).

### Key Features

* Multiple geometries:  parallel beam, cone beam (including curved detector and helical), translation mode, and multi-axis parallel. 
* 4D reconstruction: a time sequence of volumes from a single continuous scan, using multi-agent consensus equilibrium (MACE).
* Preprocessing routines for NSI and Zeiss scanners, plus geometry calibration.
* Utilities for metal artifact reduction and stripe removal.  
* Interactive slice and geometry viewers.
* Informative demos and extensive documentation. 
* Seamless operation on 1 or more GPUs, Mac MPS, or CPU. 
* Compiled torch and Triton kernels for efficiency.

### Supported Applications

- Synchrotron and X-ray CT reconstruction
- Cone-beam CT (e.g. NorthStar Instrument data)
- TEM (Transmission Electron Microscopy) reconstruction
- 2D parallel and fan-beam CT

---

## Installation

### Quick install on PyPI via 

```bash
pip install mbirtorch
```

---

## Quick Start

Reconstruct in one line:

```python
import mbirtorch
recon, recon_dict = mbirtorch.recon_simple_parallel(sinogram, angles)
```

---

## Related Repositories

| Repo | Description |
|---|---|
| [mbirjax_applications](https://github.com/cabouman/mbirjax_applications) | CT application demos (NSI cone-beam, view selection) |
| [svmbir](https://github.com/cabouman/svmbir) | Parallel and fan-beam CT reconstruction (CPU-optimized) |
| [mbircone](https://github.com/cabouman/mbircone) | Cone-beam CT reconstruction |
| [OpenMBIR-Index](https://github.com/cabouman/OpenMBIR-Index) | Index of all OpenMBIR packages |

---

## Citation

Please use the following BibTeX citation when referencing this software.

```bibtex
@misc{mbirtorch,
  title = {{MBIRTorch}: {H}igh-performance tomographic reconstruction using {PyTorch}},
  author = {Gregery T. Buzzard and Charles A. Bouman and Jingsong Lin and Ziyun Li},
  howpublished = {Software library available from \url{https://github.com/cabouman/mbirtorch}},
  note = {Version 0.1.1},
  year = 2026
}
```

GitHub's "Cite this repository" button on the repository page generates this
citation from `CITATION.cff`.

mbirtorch is a PyTorch port of [MBIRJAX](https://github.com/cabouman/mbirjax);
please also cite it when referencing the underlying methods.

If you use MBIRJAX in your research, please cite the relevant publications listed in the [documentation](https://mbirjax.readthedocs.io).
