---
layout: default
title: CI Metrology Charts
parent: Repositories
nav_order: 2
---

# Computational Imaging Metrology Charts
{: .no_toc }

3D objects for benchmarking computational imaging systems such as CT and MRI — designed to measure frequency response and density linearity end-to-end.
{: .fs-6 .fw-300 }

[View on GitHub](https://github.com/serg696f/Computational-Imaging-Metrology){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

The Computational Imaging Metrology Charts are 3D objects designed to benchmark computational imaging systems end-to-end. When scanned and reconstructed, the objects allow the frequency response of the imaging system to be measured. The design produces a reconstructed image resembling a Siemens Star, enabling quantitative performance measurements.

Two charts are provided, each targeting a different measurement:

| Chart | Purpose | File format |
|---|---|---|
| CI Density Chart | Measures density linearity vs position | `.stl`, `.stp` |
| CI Frequency Chart | Measures spatial frequency response | `.stl`, `.stp` |

---

## CI Density Chart

The geometry of this chart is designed so that a reconstructed slice will have every point's relative density proportional to its distance from the centre:

- The chart height equals its radius, so finding the radius gives the density
- The centre is 0% density for odd slices and 100% density for even slices
- The edge is 100% density for odd slices and 0% density for even slices

{: .note }
The chart must be aligned parallel to the slicing plane for accurate measurements.

[View 3D Model](https://3dviewer.net/#model=https://github.com/serg696f/Computational-Imaging-Metrology/blob/main/CI-Sergio-chart-density.stl){: .btn .fs-5 .mb-4 .mb-md-0 }

**Download:**
- [CI-Sergio-chart-density.stl](https://github.com/serg696f/Computational-Imaging-Metrology/raw/main/CI-Sergio-chart-density.stl)
- [CI-Sergio-chart-density.stp](https://github.com/serg696f/Computational-Imaging-Metrology/raw/main/CI-Sergio-chart-density.stp)

---

## CI Frequency Chart

The geometry of this chart requires no precise alignment. After slices are computed, the slice with the largest circle diameter is selected for measurement — this is the reference slice used to characterise the system's spatial frequency response.

[View 3D Model](https://3dviewer.net/#model=https://github.com/serg696f/Computational-Imaging-Metrology/blob/main/CI-Sergio-chart-frequency.stl){: .btn .fs-5 .mb-4 .mb-md-0 }

**Download:**
- [CI-Sergio-chart-frequency.stl](https://github.com/serg696f/Computational-Imaging-Metrology/raw/main/CI-Sergio-chart-frequency.stl)
- [CI-Sergio-chart-frequency.stp](https://github.com/serg696f/Computational-Imaging-Metrology/raw/main/CI-Sergio-chart-frequency.stp)

---

## File Formats

| Format | Description | Use case |
|---|---|---|
| `.stl` | Stereolithography mesh | 3D printing, simulation |
| `.stp` | STEP CAD format | CAD software, manufacturing |

---

## License

MIT License — see [LICENSE](https://github.com/serg696f/Computational-Imaging-Metrology/blob/main/LICENSE) on GitHub.
