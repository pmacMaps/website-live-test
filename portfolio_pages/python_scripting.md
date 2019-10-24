---
layout: page
title: Professional Portfolio - Python Scripting | Patrick N. McKinney
page: portfolio
description: Patrick N. McKinney is a cartographer (GIS) and developer interested in telling the stories of communities through maps and technology.  He has experience designing maps for print, interactive web maps, GIS python scripting, and website development.
permalink: /portfolio/python-scripting
---

<!-- Custom GIS -->
<section class="feat-portfolio">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2>Python SCripting</h2>                        
            </div>
        </div>
        <div class="row">
            {% for project in site.data.projects.pythonGIS %}
                {% include project-teaser.html title=project.title image=project.image alt=project.image-alt teaser=project.teaser url=project.url  %}
            {% endfor %}
        </div>
    </div>
</section>