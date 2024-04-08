---
abstract: '"Computing checksums to prevent bit rot is accepted wisdom in the digital
  preservation community. Yet in other domains, this wisdom is approached quite differently.
  New hashing algorithms continue to be developed in the cryptography community, typically
  with very different use cases in mind, focusing on encryption and security over
  integrity or identification. Checksumming is also a key feature of modern filesystems.
  The implementers of these filesystems concern themselves with block-level integrity,
  rather than focus on ‘files’ or objects in the way digital preservation systems
  do. Cloud-based object storage systems also compute checksums, providing integrity
  guarantees as part of the service. And there is the blockchain - distributed peer
  to peer systems where hashing is fundamental.

  How do we reconcile these different approaches to bit-level preservation using checksums?
  Can we compare the costs, in terms of compute resources or time, of the different
  approaches? Is there a way to verify the accepted wisdom of the digital preservation
  community and reconcile this with the diverse and expanding approaches to checksum
  validation?

  This paper describes how checksumming functionality is understood and implemented
  in modern filesystems. A cost analysis is presented, comparing different approaches
  to data integrity, including pure CPU checksumming with tools such as md5sum, the
  block-level metadata used by filesystems such as ZFS, and the contrast with data
  integrity done by cloud service providers’ object storage services. From this analysis
  we describe the benefits of developing a new standard for mapping the block-level
  metadata produced by filesystem checksum reporting tools to the file-centered checksum
  reporting and validation required for adherence to current expectations of accepted
  digital preservation best practices. By better understanding different approaches
  to data integrity, it is possible to make better use of the computer hardware dedicated
  to digital preservation, taking advantage of the increased computational efficiency
  of filesystem-level checksumming techniques. This work closes a gap between current
  best practices in digital preservation and in high-performance computing. Sample
  code paths for working with and validating block checksums are also demonstrated."'
creators:
- Garnett, Alex
- Simpson, Justin
- Winter, Mike
date: null
document_url: https://services.phaidra.univie.ac.at/api/object/o:923643/download
grand_parent: iPRES
institutions: []
keywords:
- boston
landing_page_url: https://phaidra.univie.ac.at/o:923643
language: eng
layout: publication
license: CC BY 4.0 International
notes_url: null
parent: iPRES 2018
presentation_url: null
publication_type: paper
size: 168082
source_name: iPRES
title: 'Checksums on Modern Filesystems, or: On the virtuous consumption of CPU cycles'
year: 2018
---