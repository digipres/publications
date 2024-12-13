---
abstract: 'Among many different media types, the Internet Archive also preserves television
  news from various international TV channels in many different languages. The GDELT
  project leverages some Google Cloud services to transcribe and translate these archived
  TV news collections and makes them more accessible. However, the amount of transcribed
  and translated text produced daily can be overwhelming for human consumption in
  its raw form. In this work we leverage Large Language Models (LLMs) to summarize
  daily news and facilitate semantic search and question answering against the longitudinal
  index of the TV news archive.


  The end-to-end pipeline of this process includes tasks of TV stream archiving, audio
  extraction, transcription, translation, chunking, vectorization, clustering, sampling,
  summarization, and representation. Translated transcripts are split into smaller
  chunks of about 30 seconds (a tunable parameter) with the assumption that this duration
  is neither too large to accommodate multiple concepts nor too small to fit only
  a partial concept discussed on TV. These chunks are treated as independent documents
  for which vector representations (or document embeddings) are created. These vectors
  are clustered using algorithms like KNN or DBSCAN to identify pieces of transcripts
  throughout the day that are repetitions of similar concepts. The centroid of each
  cluster is selected as the representative sample for their topics. GPT models are
  leveraged to summarize each sample. We have crafted a prompt that instructs the
  GPT model to synthesize the most prominent headlines, their descriptions, various
  types of classifications, and keywords/entities from provided transcripts.


  We classify clusters to identify whether they represent ads or local-news that might
  not be of the interest of the international audience. After excluding unnecessary
  clusters, the interactive summary of each headline is rendered in a web application.
  We also maintain metadata of each chunk (video IDs and timestamps) that we use in
  the representation to embed a corresponding small part of the archived video for
  reference.


  Furthermore, valuable chunks of transcripts and associated metadata are stored in
  a vector database to facilitate semantic search and LLM-powered Retrieval-Augmented
  Generation (RAG).


  We have deployed a test instance of our experiment and open-sourced our implementation
  (https://github.com/internetarchive/newsum).'
creators:
- Sawood Alam
date: 2024-09-18 11:15:00+01:00
document_url: https://doi.org/10.5281/zenodo.13742797
grand_parent: iPRES
institutions: []
keywords:
- information technology for dp
- from document to data
landing_page_url: https://zenodo.org/records/13742797
language: eng
layout: publication
license: Creative Commons Attribution Share-Alike 4.0 (CC-BY-SA-4.0)
notes_url: https://docs.google.com/document/d/1b42Bd_pn9__lo1qwjKqh3fB46M9Dt_1hjO4ATMggwvg/edit#heading=h.3motvki8sysj
parent: iPRES 2024
publication_type: lightning talk
size: null
slides_url: https://zenodo.org/records/13742797
source_name: iPRES
stream_url: https://www.archief.vlaanderen.be/archief/records/dossiers/5acb210228ce4315ae650812d056a482329eb83ed2dc42398a51505dc153be81/documents/c4ff0ba130054fff8dfd6d0fb3f33463d66167c2df83459e89304b6b9778c302
title: Utilizing Large Language Models for Semantic Search and Summarization of International
  Television News Archives
year: 2024
---