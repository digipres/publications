---
layout: default
title: iPRES
has_children: true
has_toc: false
---

# iPRES Conferences

<table>
<thead>
<tr><th>Name, Date & Location</th><th>Website</th></tr>
</thead>
<tbody>
{% assign sorted_pages = site.pages | sort:"title" | reverse %}
{% for item in sorted_pages %}
{% if item.parent == "iPRES" %}
<tr>
  <td><a href="{{ item.url | relative_url }}">{{ item.title }}</a><br/><i>{{ item.date }}</i><br/>{{ item.location }}</td>
  <td>
    {% if item.website != '' %}<a title="Original website" href="{{ item.website }}">[website]</a>{% endif %}
    {% if item.website_status == "gone" %}💀{% endif %}
    {% if item.website_status == "archived" %}📦{% endif %}
    {% if item.website_mirror_ipres != '' %}<br/><a title="Mirror of website hosted on ipres-conferences.org." href="{{ item.website_mirror_ipres }}">[mirror]</a>{% endif %}
  </td>
  <td>
    {% if item.proceedings_phaidra != '' %}<a href="{{ item.proceedings_phaidra }}">[phaidra]</a>{% endif %}
    {% if item.proceedings_osf != '' %}<a href="{{ item.proceedings_osf }}"><br/>[osf]</a>{% endif %}
    {% if item.proceedings_ideals != '' %}<a href="{{ item.proceedings_ideals }}"><br/>[ideal]</a>{% endif %}
    {% if item.proceedings_full != '' %}<a href="{{ item.proceedings_full }}"><br/>[all-in-one]</a>{% endif %}
    {% if item.session_recordings != '' %}<a href="{{ item.session_recordings }}"><br/>[recordings]</a>{% endif %}
  </td>
</tr>
{% endif %}
{% endfor %}
</tbody>
</table>

