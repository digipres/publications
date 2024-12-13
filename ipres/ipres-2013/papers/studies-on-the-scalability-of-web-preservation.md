---
abstract: 'This paper describes a mechanism for improving the scalability of preservation
  actions on large linked archives, such as WARC and ARC files produced from the archiving
  of web sites.

  To enable accurate but efficient preservation actions, information on the files
  embedded within a container object, such as the file formats of the embedded files,
  are aggregated and recorded as properties of the container object. This occurs during
  the ingest of objects into the archiving system, specifically at the characterization
  stage when files are identified and validated. To ensure that the details of all
  embedded files are also recorded, nested archives are recursively unpacked and their
  contents characterized to identify all files in a package. Information about the
  embedded files is then stored as properties of the container object: this allows
  us to efficiently aggregate information about the contents of a container as queryable
  properties of the container.

  This storage of the embedded file type information on the container object reduces
  the number of objects and properties which have to be queried to perform a preservation
  action, such as migration to a more recent file type. The database can be queried
  for a specific file type, and all files of that type, and archives containing files
  of that type will be returned without needing to query each embedded object individually.

  Archives containing files in need of preservation are temporarily unpacked and the
  files in need of transformation identified and migrated. Following the preservation
  action, the internal links within the archive are updated to maintain the integrity
  of the archive and the modified objects are re-ingested back into the system.

  This approach results in minimal extra overhead at the ingest stage of preservation,
  but substantially reduces the number of entities which need to be queried to identify
  objects at risk when

  performing preservation actions. In the case of large web archives, this may be
  several orders of magnitude, producing a corresponding increase in performance and
  scalability.'
creators:
- Rory Blevins
- Ismail Patel
- Jack O'Sullivan
- Ashley Hunter
- Robert Sharpe
- Pauline Sinclair
date: null
document_url: https://services.phaidra.univie.ac.at/api/object/o:378060/download
grand_parent: iPRES
institutions: []
keywords:
- scalability
- web archiving
- characterization
- lisbon
landing_page_url: https://phaidra.univie.ac.at/o:378060
language: eng
layout: publication
license: CC BY-SA 2.0 AT
notes_url: null
parent: iPRES 2013
publication_type: paper
size: 447142
slides_url: null
source_name: iPRES
stream_url: null
title: Studies on the scalability of web preservation
year: 2013
---