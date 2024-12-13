---
abstract: 'The National Digital Preservation Services (DPS) in Finland preserve digital
  cultural heritage and research data. To be able to guarantee that ingested contents
  can be usable, the DPS has together with the utilizing partner organizations decided
  on a set of supported file formats. The files have to be valid, and both file format
  identification and validation are performed when ingesting the content to the DPS.


  It is generally better to fix broken files as early as possible, as ingesting content
  to the DPS can occur at a later stage. To support partner organizations and foster
  digital content management expertise the DPS has published a public online file
  validator at: https://validation.digitalpreservation.fi/#/en


  The user can upload files to the validator, which performs file format identification,
  technical metadata extraction and validation on the file. The validator also reports
  file format support in our DPS. The user can download a detailed validation report,
  including all collected metadata, in a JSON format.


  The validator uses the same validation tools as our DPS ingest. The tool is a Python
  tool developed in-house called file-scraper: https://github.com/Digital-Preservation-Finland/file-scraper.
  File-scraper is a framework that uses several third-party and in-house tools, such
  as Open Preservation Foundation tools JHOVE, Fido, veraPDF and Jpylyzer, and various
  others, such as XmlLint, ExifTool, ImageMagick, FFmpeg, for identifying formats,
  collecting metadata, and validating. File-scraper detects the file-format and collects
  metadata based on a pre-set of tools called detectors. After, another set of tools
  is selected as validators based on the detected file format. Different file formats
  are thus validated using a different set of tools, and many formats are validated
  using several tools. For example, PDF/A is validated by JHOVE, veraPDF and Ghostscript,
  while WAVE is validated using JHOVE and FFmpeg. The metadata from all used tools,
  the well-formedness, and support in the DPS is harmonized into a JSON output.


  The validator has been helpful in fostering digital content management and helping
  organizations perform digital preservation actions early on in the life cycle of
  the contents. This validator is helpful in ensuring the preservation of digital
  content and lowering the threshold of the ingest process.'
creators:
- Johan Kylander
date: 2024-09-18 15:55:00+01:00
document_url: ''
grand_parent: iPRES
institutions: []
keywords:
- approaches to preservation
- start 2 preserve
landing_page_url: ''
language: eng
layout: publication
license: Creative Commons Attribution 4.0 (CC-BY-4.0)
notes_url: https://docs.google.com/document/d/1tm1sitP5zYVYM6s5NoVLPnb0qA0Zyc-Nx0HOj5APixU/edit#heading=h.aar4tupij1po
parent: iPRES 2024
publication_type: tool demo
size: null
slides_url: ''
source_name: iPRES
stream_url: https://www.archief.vlaanderen.be/archief/records/dossiers/5acb210228ce4315ae650812d056a482329eb83ed2dc42398a51505dc153be81/documents/4d45be085fff4ea5afe21bd5121530e941e01b90f3204f9cb130fb3682839751
title: Validate Your Content – the Online File Validator
year: 2024
---