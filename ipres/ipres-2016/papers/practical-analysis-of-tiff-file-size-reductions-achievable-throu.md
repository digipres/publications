---
abstract: This paper presents results of a practical analysis into the effects of
  three main lossless TIFF compression algorithms – LZW, ZIP and Group 4 – on the
  storage requirements for a small set of digitized materials. In particular we are
  interested in understanding which algorithm achieves a greater reduction in overall
  storage, and whether there is any variation based on the type of file (e.g. colour
  depth). We compress 503 files with two software utilities – ImageMagick and LibTiff
  – and record the resulting file size for comparison against the original uncompressed
  version. Overall we find that in order to effectively (although not necessarily
  optimally) reduce total storage, Group 4 compression is most appropriate for 1-bit/pixel
  images, and ZIP compression is suited to all others. We also find that ImageMagick
  – which uses the LibTiff library – typically out-performs LibTiff with respect to
  compressed file sizes, noting that this appears to be the result of setting the
  “Predictor” tag.
creators:
- May, Peter
- Davies, Kevin
date: null
document_url: https://services.phaidra.univie.ac.at/api/object/o:503166/download
grand_parent: iPRES
institutions: []
keywords: []
landing_page_url: https://phaidra.univie.ac.at/o:503166
language: eng
layout: publication
license: CC BY-NC-SA 3.0 AT
notes_url: null
parent: iPRES 2016
presentation_url: null
publication_type: paper
size: 480166
source_name: iPRES
title: Practical Analysis of TIFF File Size Reductions Achievable Through Compression
year: 2016
---