---
layout: default
title: RP2040-PCB-CBCT Dataset
parent: Repositories
nav_order: 3
---

# RP2040-PCB-CBCT Dataset
{: .no_toc }

Cone-beam CT benchmark dataset for plastic-metal beam-hardening correction and metal artifact reduction.
{: .fs-6 .fw-300 }

[Download Data](https://www.datadepot.rcac.purdue.edu/bouman/data/elec_board/){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[MBIRJAX Documentation](https://mbirjax.readthedocs.io/en/latest/index.html){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

This dataset contains cone-beam CT scans of an **Adafruit RP2040 PCB** mounted in a snap-on plastic case, acquired on a North Star Imaging (NSI) 1420-DR cone-beam CT system. It is designed as a benchmark for:

- Plastic-metal beam-hardening correction
- Metal artifact reduction (MAR)
- Iterative reconstruction algorithm development and evaluation

The dataset includes scans at three view counts (600, 1200, 1800) in both horizontal and vertical orientations, along with CAD files and a preprocessing script for use with MBIRJAX.

---

## Acquisition Parameters

| Parameter | Value |
|---|---|
| Scan type | Cone-beam CT |
| CT system | NSI 1420-DR |
| Voltage | 190 kV |
| Current | 200 µA |
| X-ray filter | 1.2 mm Sn filter |
| Source-object distance | 173.38 mm |
| Source-detector distance | 400 mm |
| Magnification | 2.37× |
| Detector pixel pitch | 0.127 × 0.127 mm |
| Detector size | 1536 × 1920 pixels |
| Views per scan | 600, 1200, or 1800 |
| Rotation range | 360° |
| Exposure time | 266.67 ms (3.75 fps) |
| Voxel size | 53.48 µm |

---

## Downloads

| File | Description | Size |
|---|---|---|
| [CAD + License](https://www.datadepot.rcac.purdue.edu/bouman/data/elec_board/data/Elec_Board_CAD_and_License.tgz) | CAD files and license | — |
| [Horizontal 600 Views](https://www.datadepot.rcac.purdue.edu/bouman/data/elec_board/data/Horizontal_Elec_Board_600.tgz) | Horizontal scan, 600 views | 3.6 GB |
| [Horizontal 1200 Views](https://www.datadepot.rcac.purdue.edu/bouman/data/elec_board/data/Horizontal_Elec_Board_1200.tgz) | Horizontal scan, 1200 views | 6.6 GB |
| [Horizontal 1800 Views](https://www.datadepot.rcac.purdue.edu/bouman/data/elec_board/data/Horizontal_Elec_Board_1800.tgz) | Horizontal scan, 1800 views | 9.6 GB |
| [Vertical 600 Views](https://www.datadepot.rcac.purdue.edu/bouman/data/elec_board/data/Vertical_Elec_Board_600.tgz) | Vertical scan, 600 views | 3.6 GB |
| [Vertical 1200 Views](https://www.datadepot.rcac.purdue.edu/bouman/data/elec_board/data/Vertical_Elec_Board_1200.tgz) | Vertical scan, 1200 views | 6.6 GB |
| [Vertical 1800 Views](https://www.datadepot.rcac.purdue.edu/bouman/data/elec_board/data/Vertical_Elec_Board_1800.tgz) | Vertical scan, 1800 views | 9.6 GB |

---

## Preprocessing

An example MBIRJAX preprocessing script is provided to reconstruct the dataset:

[pcb-mbirjax-prep-code.py](https://www.datadepot.rcac.purdue.edu/bouman/data/elec_board/data/pcb-mbirjax-prep-code.py){: .btn .fs-5 .mb-4 .mb-md-0 }

This script is written for use with the [MBIRJAX](repos/mbirjax) software package. See the [MBIRJAX documentation](https://mbirjax.readthedocs.io/en/latest/index.html) for installation and usage instructions.

---

## Citation

If you use this dataset in your research, please cite:

{% raw %}
```bibtex
@misc{rp2040_pcb_cbct_dataset,
  author = {Li, Ziyun and Yang, Mingqi and Sharma, Vijay Kumar and
            Toaquiza, John D. and Eshraghi, Javad and
            Buzzard, Gregery T. and Bouman, Charles A.},
  title = {{RP2040-PCB-CBCT}: Cone-Beam CT Dataset for
           Plastic-Metal Beam-Hardening Correction},
  year = {2026},
  howpublished = {\url{https://www.datadepot.rcac.purdue.edu/bouman/elec_board}}
}
```
{% endraw %}
