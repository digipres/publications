---
abstract: "Meemoo, the Flemish institute for archives, preserves over 6 million primarily
  audiovisual objects of more than 180 organizations across cultural heritage, media
  and government sectors. Metadata plays a key role across all of our processes, from
  preservation to enabling dissemination through search. Hence, improving the accessibility
  and management of metadata are crucial activities of our operations, in particular
  with the ever-growing scale in volume and heterogeneity. To this end, meemoo is
  currently evolving towards a Knowledge Graph-based infrastructure. In this poster,
  we present our new set of data models that support this endeavor.\n\nThe meemoo
  data models have a layered design, with a core model that is applicable across media
  objects from various types accompanied by a number of domain-specific models that
  cover different use cases. They were developed using an iterative methodology to
  design, implement, and evaluate data models with internal and external stakeholders.
  The core Objects model builds upon PREMIS (OWL) and is used to  model the main structure
  of the media objects, which identifies the preserved intellectual entity, its representations,
  its files, and the way they relate. The domain models complement the core model
  and include, among others, models to describe the media contents (Descriptive model),
  information about the partners that own the material (Organizations model), and
  digitization or provenance metadata (Events model). \n\nThe different data models
  are implemented using a combination of RDFS and SHACL to ensure a smooth integration
  in the Knowledge Graph infrastructure. The use of RDF-based standards adds greater
  flexibility and enhances the models’ semantic clarity. Each resource and relationship
  can be explicitly modeled, identified, defined and labeled, while promoting reuse
  through Linked Open Data. In addition, it also provides machine-readability to support
  automation, which enables us to automatically generate documentation or a GraphQL
  schema from the SHACL source files. \n\nOur poster illustrates the data models,
  the design methodology and how the data models are used across meemoo in various
  applications and with different purposes. Both documentation and sources are available
  on [our developer documentation website][1].\n\n\n  [1]: https://developer.meemoo.be/docs/metadata/knowledge-graph/"
creators:
- Lennert Van de Velde
- ' Miel Vander Sande'
- ' Milan Valadou'
date: 2024-09-19 13:30:00+01:00
document_url: https://doi.org/10.5281/zenodo.13683132
grand_parent: iPRES
institutions: []
keywords:
- metadata standards and implementation
- from document to data
landing_page_url: https://zenodo.org/records/13683132
language: eng
layout: publication
license: Creative Commons Attribution Share-Alike 4.0 (CC-BY-SA-4.0)
notes_url: ''
parent: iPRES 2024
publication_type: poster
size: null
slides_url: ''
source_name: iPRES
stream_url: ''
title: Enhancing Metadata Management through Linked Data Models
year: 2024
---