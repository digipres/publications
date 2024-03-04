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
    {% if item.website %}<a href="{{ item.website }}">[website]</a>{% endif %}
    {% if item.website_status == "gone" %}💀{% endif %}
    {% if item.website_status == "archived" %}📦{% endif %}
  </td>
</tr>
{% endif %}
{% endfor %}
</tbody>
</table>