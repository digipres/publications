---
abstract: "As more scholars code in the open, digital stewards need accessible methods
  to reliably archive this code and surrounding contextual information. We will be
  demo-ing a software and Web archive workflow using an interconnected ecosystem of
  open source tools: [OCCAM][1] with plugins for [Memento Tracer][2] and [Memento
  Damage][3]. We use these together to create a repeatable, human- and computer-readable
  workflow to preserve scholarly code on the Web with its discussion threads, documentation,
  and other contextual scholarly ephemera that you can’t get with a `git clone`. \n\nOCCAM
  is an open source software preservation and workflow execution system that allows
  users to visually create executable workflows. OCCAM instances can federate with
  each other, allowing for these to be shared. Memento Tracer is a browser extension
  that allows users to click on desired elements from  an exemplar webpage to create
  JSON ‘traces,’ which are then used to crawl and create Web archives. These traces
  can be used on websites that look similar to each other (e.g. code repositories
  on GitHub or GitLab) and can themselves be version controlled. Memento Damage is
  an open source tool that calculates how well a web page is archived by identifying
  the missing resources (images, multimedia, CSS, and JavaScript) and then measuring
  the importance of those missing resources.\n\nWe use OCCAM as the “driver,” where
  we visually build (via drag-and-drop) the processes together and run it together.
  So we use Git clone to grab the source code, as well as run a Memento trace to grab
  other elements of a repository page that we want to keep for history and debugging
  purposes -- issue threads, pull requests, project boards, online documentation,
  etc. We end up with a local copy of a Git repository (to preserve the commit history)
  and a WARC containing the Web-based contextual information. We then use Memento
  Damage to do some initial quality assurance and checking. We can then export this
  together with some metadata and it’s ready for a repository! [See an example of
  this workflow][4] in OCCAM.\n\n  [1]: https://archived.software\n  [2]: http://tracer.mementoweb.org/\n
  \ [3]: https://memento-damage.cs.odu.edu/faq/\n  [4]: https://drive.usercontent.google.com/download?id=1TXns1hOP78mxq83zzHGwMjmsS_Q6Q7c5&export=view&authuser=0"
creators:
- Vicky Rampin
- Talya Cooper
- Martin Klein
- David Wilkinson
- Lyudmila Balakireva
- Emily Escamilla
- David Calano
- Michael L. Nelson
- Michele C. Weigle
date: 2024-09-18 14:15:00+01:00
document_url: null
grand_parent: iPRES
institutions: []
keywords:
- approaches to preservation
- from document to data
landing_page_url: ''
language: eng
layout: publication
license: Creative Commons Attribution Share-Alike 4.0 (CC-BY-SA-4.0)
notes_url: https://docs.google.com/document/d/1oGwEZLx1UYUbtMQ5Y_bsh7skzl1XkOIDvzMjo2NBDSI/edit#heading=h.aar4tupij1po
parent: iPRES 2024
publication_type: tool demo
size: null
slides_url: ''
source_name: iPRES
stream_url: https://www.archief.vlaanderen.be/archief/records/dossiers/5acb210228ce4315ae650812d056a482329eb83ed2dc42398a51505dc153be81/documents/455bf375e860488394867726471cd880363eb1e08e0c430b93d4a756efde7bc3
title: Using the CoSAI ecosystem to archive scholarly code with docs and discussions
year: 2024
---