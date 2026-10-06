---
layout: default
title: xptycho
parent: Repositories
nav_order: 7
permalink: /repos/xptycho/
---

# xptycho
{: .no_toc }

Ptychographic reconstruction with PMACE in PyTorch.
{: .fs-6 .fw-300 }

[View on GitHub](https://github.com/cabouman/xptycho){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Full Documentation](https://xptycho.readthedocs.io/){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

xptycho: ptychographic reconstruction with projected multi-agent consensus equilibrium (PMACE) using [PyTorch](https://pytorch.org/).

--- 

### Key Features

* Reconstruction of the complex object image, magnitude and phase, from far-field diffraction frames.
* Estimation of the probe together with the object, with one or more probe modes.
* Refinement of the probe positions.
* Preprocessing of raw detector frames: dark subtraction, outlier removal, centering, and cropping.
* One HDF5 file format for scans, samples, and reconstructions.
* Demos on simulated data and on measured data, from raw file to image.
* Seamless operation on 1 or more GPUs, Mac MPS, or CPU.

---

## Installation

### Quick install on PyPI via 

```bash
pip install xptycho
```

---

## Quick Start

Reconstruct in a few lines:

```python
import xptycho as xpt
scan = xpt.Scan.load('scan.h5')
model = xpt.PtychoModel.from_scan(scan)
recon = model.recon(scan)
xpt.view_sample(recon)
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

xptycho implements the PMACE method of Qiuchen Zhai, Gregery T. Buzzard, Kevin Mertes, Brendt Wohlberg, and Charles A. Bouman. For the papers to cite, the source of the demo data, and the funding support, see [Credits](https://xptycho.readthedocs.io/en/latest/credits.html)

---

## License

BSD 3-Clause License — see [LICENSE](https://github.com/cabouman/mbirjax/blob/main/LICENSE) on GitHub.
