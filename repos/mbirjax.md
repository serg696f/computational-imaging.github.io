---
layout: default
title: MBIRJAX
parent: Repositories
nav_order: 1
---

# MBIRJAX
{: .no_toc }

Model-Based Iterative Reconstruction for tomographic imaging, built on JAX.
{: .fs-6 .fw-300 }

[View on GitHub](https://github.com/cabouman/mbirjax){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Full Documentation](https://mbirjax.readthedocs.io){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

MBIRJAX is a Python package for **Model-Based Iterative Reconstruction (MBIR)** of images from tomographic data. It leverages the [JAX](https://github.com/google/jax) library for high-performance execution on both CPUs and GPUs.

### Key Features

- **Vectorized Coordinate Descent (VCD)** algorithm for fast, robust convergence
- **Automatic parameter selection** with intuitive meta-parameters for fine-tuning
- **Plug-and-Play prior models** for dramatically improved image quality
- **Modular, object-oriented** Python interface — easy to extend with new geometries
- **CPU and GPU support** via JAX — portable across hardware platforms
- **Parallel and cone-beam geometry** fully supported

### Supported Applications

- Synchrotron and X-ray CT reconstruction
- Cone-beam CT (e.g. NorthStar Instrument data)
- TEM (Transmission Electron Microscopy) reconstruction
- 2D parallel and fan-beam CT

---

## Installation

### Quick install (CPU only)

```bash
pip install mbirjax
```

### With CUDA 12 GPU support

```bash
pip install --upgrade mbirjax[cuda12]
```

### Full conda environment install

**Option 1 — Automated (recommended):**

```bash
git clone git@github.com:cabouman/mbirjax.git
cd mbirjax/dev_scripts
source clean_install_all.sh
```

**Option 2 — Manual:**

```bash
git clone git@github.com:cabouman/mbirjax.git
cd mbirjax
conda create --name mbirjax python=3.10
conda activate mbirjax
pip install -r requirements.txt
pip install .
```

---

## Quick Start

Reconstructions can be performed in just a few lines of Python:

```python
import mbirjax

# Create a CT model (parallel beam example)
ct_model = mbirjax.ParallelBeamModel(sinogram_shape, angles)

# Run MBIR reconstruction
recon = ct_model.recon(sinogram)
```

See the [demo scripts](https://github.com/cabouman/mbirjax/tree/main/demo) for full working examples, including the Shepp-Logan phantom demo.

---

## Performance

On an 80 GB A100 GPU, MBIRJAX can perform **2k × 2k × 1k reconstructions** in approximately 2.5 hours with ~200 GB CPU main memory — considered state-of-the-art in both speed and quality for iterative reconstruction.

{: .note }
Select a GPU runtime for best performance (e.g. in Google Colab or a CUDA-enabled cluster).

---

## Related Repositories

| Repo | Description |
|---|---|
| [mbirjax_applications](https://github.com/cabouman/mbirjax_applications) | CT application demos (NSI cone-beam, view selection) |
| [svmbir](https://github.com/cabouman/svmbir) | Parallel and fan-beam CT reconstruction (CPU-optimized) |
| [mbircone](https://github.com/cabouman/mbircone) | Cone-beam CT reconstruction |
| [OpenMBIR-Index](https://github.com/cabouman/OpenMBIR-Index) | Index of all OpenMBIR packages |

---

## License

BSD 3-Clause License — see [LICENSE](https://github.com/cabouman/mbirjax/blob/main/LICENSE) on GitHub.

## Citation

If you use MBIRJAX in your research, please cite the relevant publications listed in the [documentation](https://mbirjax.readthedocs.io).
