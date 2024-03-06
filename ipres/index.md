---
layout: default
title: iPRES
has_children: true
has_toc: false
---

# iPRES Conferences

Also available to download as [JSON](./ipres.json) or [CSV](./ipres.csv).

<table>
<thead>
<tr><th>Name, Date & Location</th><th>Website</th><th>Proceedings</th></tr>
</thead>
<tbody>
{% assign sorted_pages = site.pages | sort:"title" | reverse %}
{% for item in sorted_pages %}
{% if item.parent == "iPRES" %}
<tr>
  <td><a href="{{ item.url | relative_url }}">{{ item.title }}</a><br/><i>{{ item.date }}</i><br/>{{ item.location }}</td>
  <td>
    {% if item.website != '' %}<a title="Original website" href="{{ item.website }}">[website]</a>
      {% if item.website_status == "gone" %}💀{% endif %}
      {% if item.website_status == "archived" %}📦{% endif %}
      <br/>
    {% endif %}
    {% if item.website_mirror_ipres != '' %}<a title="Mirror of website hosted on ipres-conferences.org." href="{{ item.website_mirror_ipres }}">[mirror]</a>{% endif %}
  </td>
  <td>
    {% if item.proceedings_phaidra != '' %}<a href="{{ item.proceedings_phaidra }}">[phaidra]</a><br/>{% endif %}
    {% if item.proceedings_osf != '' %}<a href="{{ item.proceedings_osf }}">[osf]</a><br/>{% endif %}
    {% if item.proceedings_ideals != '' %}<a href="{{ item.proceedings_ideals }}">[ideal]</a><br/>{% endif %}
    {% if item.proceedings_full != '' %}<a href="{{ item.proceedings_full }}">[all-in-one]</a><br/>{% endif %}
    {% if item.session_recordings != '' %}<a href="{{ item.session_recordings }}">[recordings]</a><br/>{% endif %}
  </td>
</tr>
{% endif %}
{% endfor %}
</tbody>
</table>

