---
abstract: 'Web resources are increasingly interactive, resulting in resources

  that are increasingly difficult to archive. The archival difficulty is based on
  the use of client-side technologies (e.g., JavaScript) to change the client-side
  state of a representation after it has initially loaded. We refer to these representations
  as deferred representations. We can better archive deferred representations using
  tools like headless browsing clients. We use 10,000 seed Universal Resource Identifiers
  (URIs) to explore the impact of including PhantomJS – a headless browsing tool –
  into the crawling process by comparing the performance of wget (the baseline), PhantomJS,
  and Heritrix. Heritrix crawled 2.065 URIs per second, 12.15 times faster than PhantomJS
  and 2.4 times faster than wget.  However, PhantomJS discovered 531,484 URIs, 1.75
  times more than Heritrix and 4.11 times more than wget. To take advantage of the
  performance benefits of Heritrix and the URI discovery of PhantomJS, we recommend
  a tiered crawling strategy in which a classifier predicts whether a representation
  will be deferred or not, and only resources with deferred representations are crawled
  with PhantomJS while resources without deferred representations are crawled with
  Heritrix. We show that this approach is 5.2 times faster than using only PhantomJS
  and creates a frontier (set of URIs to be crawled) 1.8 times larger than using only
  Heritrix.'
creators:
- Brunelle, Justin
- Weigle, Michele
- Nelson, Michael
date: null
document_url: https://services.phaidra.univie.ac.at/api/object/o:429536/download
grand_parent: iPRES
institutions: []
keywords:
- web architecture
- http
- web archiving
- memento
landing_page_url: https://phaidra.univie.ac.at/o:429536
language: eng
layout: publication
license: CC BY 4.0 International
notes_url: null
parent: iPRES 2015
presentation_url: null
publication_type: paper
size: 1381392
source_name: iPRES
title: Archiving Deferred Representations Using a Two-Tiered Crawling Approach
year: 2015
---