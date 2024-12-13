---
abstract: 'In the absence yet of a digital archive compliant with the OAIS model requirements
  Stockholm University (SU) is nevertheless continually developing a "Harvest Combine"
  tool for transformation of metadata and data files from data repositories that are
  used by SU researchers such as Figshare, Datadryad and Zenodo. The metadata are
  collected from these repositories, enriched with metadata from other sources, and
  then transformed to accord with the Swedish National Archives recent implementation
  (aka FGS 2.0) of the European Common Specification for Information Packages (E-ARK
  CSIP) and Specification for Submission Information Packages (E-ARK SIP) versions
  2.1.0. The metadata records are then stored in the SU local (temporal) archive together
  with the associated data files harvested simultaneously. Part of the motivation
  for this preparatory digital preservation work are the perceived risks of trusting
  the digital preservation of research data files produced by SU reseachers to external
  repositories, that we do not fully control locally. The end product of this harvest
  and transformation processing are SIPs (Submission Information Packages), still
  awaiting future transformation to AIPs (Archival Information Packages) and eventually
  DIPs (Dissemination Information Packages). The associated data files are not transformed
  or converted in this first step towards long-term preservation and archiving, but
  we keep track of the file formats ingested partly by mapping file extensions to
  mimetypes in a special registry xml-file, used in the transformation processing
  and continuously updated whenever "new" file formats are encountered for the first
  time.


  The software scripts that were developed for this "harvester combine" are in BASH
  Unix Shell, XQuery and XSLT. The processing of metadata, data and scripts occurs
  locally using Git Bash (for Windows), BaseX and Oxygen XML editor, but is essentially
  software-tool agnostic. Metadata input sources are e.g. OAI-PMH feeds (Datacite
  or METS), repository specific APIs (to get necessary file metadata) or generic command
  line scripts (for checksums and file sizes in some cases). Only recently we have
  also created a cross-sectional Digital Preservation Group at Stockholm University
  Library, whose first task is to create an inventory of all (external or internal)
  source informations systems (e.g. data repositories), together with their local
  destination archival or storage systems. This inventory is then aimed to serve as
  a basis for a digital preservation plan for future long-term preservation.'
creators:
- Joakim Philipson
date: 2024-09-17 14:00:00+01:00
document_url: https://ipres2024.pubpub.org/pub/5t6x01mf/download/pdf
grand_parent: iPRES
institutions: []
keywords:
- approaches to preservation
- start 2 preserve
landing_page_url: https://ipres2024.pubpub.org/pub/5t6x01mf/
language: eng
layout: publication
license: Creative Commons Attribution 4.0 (CC-BY-4.0)
notes_url: https://docs.google.com/document/d/1b6uQj3CN_S_HmE4-L7B_CjWMX2WgcazRl2JAM-gTM_o/edit#heading=h.aar4tupij1po
parent: iPRES 2024
publication_type: paper
size: null
slides_url: https://zenodo.org/records/13743159
source_name: iPRES
stream_url: https://www.archief.vlaanderen.be/archief/records/dossiers/5acb210228ce4315ae650812d056a482329eb83ed2dc42398a51505dc153be81/documents/4ddf89491fa14b768053356fff184d51d5e1873012e04b299dadafeb331003eb
title: 'Prepare to Preserve: the Harvest Combine for Research Data at Stockholm University
  and the Systems Inventory'
year: 2024
---