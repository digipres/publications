---
layout: default
title: iPRES
has_children: true
has_toc: false
---

# iPRES Conferences

<table>
{% for item in site.pages reversed %}
{% if item.parent == "iPRES" %}
<tr>
  <td><a href="{{ item.url | relative_url }}">{{ item.title }}</a></td>
  <td>{{ item.date }}</td>
  <td>{{ item.location }}</td>
  <td>
    {% if item.website %}<a href="{{ item.website }}">[website]</a>{% endif %}
    {% if item.website_status == "gone" %}💀{% endif %}
    {% if item.website_status == "archived" %}📦{% endif %}
  </td>
</tr>
{% endif %}
{% endfor %}
</table>