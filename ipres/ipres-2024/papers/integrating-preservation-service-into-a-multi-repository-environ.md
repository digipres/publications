---
abstract: "In this lightning talk, we present the most challenging aspects of preserving
  the vastly diverse data of the European Organization for Nuclear Research (CERN),
  including scientific datasets, multimedia items, and minutes of internal meetings.
  The presentation will focus on the complexity of the workflow, the expandability,
  scalability, and the open issue of data monitoring.\n\nAs part of the Digital Memory
  project, a platform was built to enable information repositories to benefit from
  a centralized Preservation Service where system managers can initiate preservation
  pipelines and view the state of already archived records. After agreeing on a protocol,
  the platform can harvest data from the different repositories, transform them for
  long-term preservation, and store them on CERN Cloud storage (EOS). The preservation
  process includes different steps: validation of SIPs, normalization, and other micro-services
  (through Archivematica), storage on magnetic tapes, and publishing in a central
  registry.\n\nThe initial focal point of the project was to be able to harvest different
  sources of data; to achieve that, we designed an expandable architecture. Since
  then we have adapted to numerous repositories including InvenioRDM instances, CodiMD,
  GitLab, and Indico.\nAnother important aspect was scalability: depending on the
  collection the workload can be significant, therefore the platform mostly consists
  of async processes that can run in parallel. To help with resilience the records
  can be filtered based on the executed steps and status. Our Archivematica instance
  is deployed on OpenShift where the number of worker clients and available resources
  can be increased on demand.\n\nMonitoring and appraisal are still open issues we
  are working on. Monitoring of already harvested records means retriggering the preservation
  pipeline if the data change is significant enough to justify the reprocessing. So
  far, the platform and registry are designed to support multiple versions of an AIP,
  but we intend to optimize storage by minimizing the redundancy. \nFinally, to evaluate
  if submitted data is part of CERN's official preservation scope, we plan to include
  internal expert users in the process, who would be aided by a trained model.\n\n<img
  src=\"https://digital-memory-project.web.cern.ch/sites/default/files/inline-images/preserve_flow.jpeg\"
  width=\"700\" alt=\"CERN Preserve workflow\">"
creators:
- Jean-Yves Le Meur
- ' Panna Liptak'
date: 2024-09-19 11:15:00+01:00
document_url: https://zenodo.org/records/13646193/download/pdf
grand_parent: iPRES
institutions: []
keywords:
- information technology for dp
- scaling up
landing_page_url: https://zenodo.org/records/13646193
language: eng
layout: publication
license: Creative Commons Attribution Share-Alike 4.0 (CC-BY-SA-4.0)
notes_url: https://docs.google.com/document/d/1Hf-VavCLYwGskk3JdDbnPOALZtP2Yd4w2pe_5Evkxg8/edit#heading=h.aar4tupij1po
parent: iPRES 2024
publication_type: lightning talk
size: null
slides_url: https://zenodo.org/records/13646193
source_name: iPRES
stream_url: https://www.archief.vlaanderen.be/archief/records/dossiers/5acb210228ce4315ae650812d056a482329eb83ed2dc42398a51505dc153be81/documents/95ca2a083ac641f99b58185549d7c5407e49ac128c9e45efb96d32698a8f023a
title: Integrating Preservation Service into a multi-repository environment at CERN
year: 2024
---