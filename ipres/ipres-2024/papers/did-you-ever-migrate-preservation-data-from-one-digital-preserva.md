---
abstract: 'This abstract gives insights on the lessons learned concerning a secured
  and trustworthy migration of 4 Pb of long-term preservation data stored on a cold
  storage platform.

  The Belgian Science Policy Office (Belspo) has since 2015 long term digital preservation
  service for digital artifacts from the federal state. The technical architecture
  is based on a hyper secured ring network topology integrating all users and data
  centres. The two data centres are completely redundant and are equipped with an
  identical hardware infrastructure where cold storage is used as the main preservation
  methodology. Ingest, load balancing, authentication of users, integrity checks,
  file formats check, REST Api services, monitoring and retrieve workflows have been
  integrated in one middleware system. Belspo issued a tender procedure for the operationalisation
  of the hardware, software and service desk which was granted to a private partner.

  The contract ended in 2022 and Belspo decided not to prolong the contract but to
  develop a renewed hard- and software architecture in-house with the Belgian association
  Smals, within the same yearly budget. Belspo launched a co-creation activity with
  Smals to setup a migration path and planning for the 4 Petabyte of unique volume
  of digital cultural heritage, research data and metadata, duplicated in both data
  centres. The first experiments with Arcsys showed that a simple installation, programming,
  and configuration did not permit to read the objects on the LTO7 tapes. A new methodology
  had been put in place to transfer the data in a secured way, within budget.

  We stopped all new ingest in 2023, isolated the written LTO7 tapes, reconfigured
  one data centre and cold storage with Arcsys and began the one-by-one content migration
  via the Arcsys architecture with integrity and format check from one data centre
  to the other over secured network connectivity. Once finished the inverse operation
  started for guaranteeing a smooth duplication, while keeping offline the old tapes
  in case of lost or disaster which turned out to be an interesting decision. Two
  years later the operation is still going on, but with a 100% confidence not to have
  lost any bit.'
creators:
- chris de loof
date: 2024-09-19 11:05:00+01:00
document_url: https://zenodo.org/records/13778106
grand_parent: iPRES
institutions: []
keywords:
- governance, resourcing, and management for dp
- from document to data
landing_page_url: https://zenodo.org/records/13778106
language: eng
layout: publication
license: Creative Commons Attribution 4.0 (CC-BY-4.0)
notes_url: https://docs.google.com/document/d/1Hf-VavCLYwGskk3JdDbnPOALZtP2Yd4w2pe_5Evkxg8/edit#heading=h.aar4tupij1po
parent: iPRES 2024
publication_type: lightning talk
size: null
slides_url: https://zenodo.org/records/13778106
source_name: iPRES
stream_url: https://www.archief.vlaanderen.be/archief/records/dossiers/5acb210228ce4315ae650812d056a482329eb83ed2dc42398a51505dc153be81/documents/95ca2a083ac641f99b58185549d7c5407e49ac128c9e45efb96d32698a8f023a
title: Did you ever migrate preservation data from one digital preservation platform
  to another?
year: 2024
---