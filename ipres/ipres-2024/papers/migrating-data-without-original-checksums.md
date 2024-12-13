---
abstract: "The National Library (NLN) has been using SAM-FS (Oracle HSM) as a bit-repository
  since 2007. SAM-FS is soon reaching \"EOL\". The NLN has recently developed a front-end
  software solution called DPS (Digital Preservation Services). DPS uses HPSS from
  IBM as underlying bit-repository. DPS/HPSS is intended to replace SAM-FS as the
  preservation solution for digital objects. DPS requires that all objects must be
  delivered with associated checksums. \n\nIn the old SAM-FS bit-repository, many
  objects lack checksums, especially material from the first years of its use. All
  objects in SAM-FS are stored in 3 instances. If differences were to be uncovered
  between the 3 instances, there are no checksums to verify which instance is correct.
  The total amount of data to be migrated from SAM-FS to DPS is approximately 14 Petabytes.
  It is estimated that about 1/3 of these data lacks checksums. \n\n**Challenge**:
  How could we ensure that objects migrated from SAM-FS to DPS are the same as those
  originally archived in SAM-FS when original checksums do not exist? \n\n**How we
  solved it:** Based on access to multiple instances of the preserved objects, stored
  on different media in SAM-FS, we created a workflow that migrated objects from SAM-FS
  to DPS using checksums pre-generated from the tape instance to verify the disk instance.
  This ensured that the migrated data was considered \"authentic\" relative to the
  time it was submitted to the SAM-FS bit-repository. \n\n**Result**: So far, we have
  re-archived 3 Petabyte. Generating checksums has prevented data loss in the migration
  process in one specific case. We experienced that a number of files we read from
  the disk copy in SAM-FS had incorrect checksums. It turned out that one of the archive
  disk systems had a corrupt file system after an unexpected shutdown. The way we
  had created and stored checksums before starting the migration allowed us to quickly
  discover that there was something wrong with many files to be migrated. If we hadn't
  had these pre-generated checksums and just relied on reading the disk copy from
  SAM-FS, generating checksums, and then sending the object to DPS, data would have
  been lost."
creators:
- Thomas Edvardsen
- ' Trond Teigen'
date: 2024-09-19 13:35:00+01:00
document_url: https://doi.org/10.5281/zenodo.13681583
grand_parent: iPRES
institutions: []
keywords:
- information technology for dp
- start 2 preserve
landing_page_url: https://zenodo.org/records/13681583
language: eng
layout: publication
license: Creative Commons Attribution 4.0 (CC-BY-4.0)
notes_url: https://docs.google.com/document/d/1lDWYct0heJztUyK5nOaDaLFRBO-Yx4PXT5URfiK3xZo/edit#heading=h.aar4tupij1po
parent: iPRES 2024
publication_type: lightning talk
size: null
slides_url: https://zenodo.org/records/13681583
source_name: iPRES
stream_url: https://www.archief.vlaanderen.be/archief/records/dossiers/5acb210228ce4315ae650812d056a482329eb83ed2dc42398a51505dc153be81/documents/fac102093df84a8c93031824fad34cd95d7f83fd04574b0884545e07bee9e47f
title: Migrating data without original checksums
year: 2024
---