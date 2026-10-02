---
title: Why I am moving my personal site away from AWS Lightsail
date: 2026-10-02
summary: A practical experiment in reducing idle hosting cost while keeping my personal technology site simple and maintainable.
permalink: /blog/lightsail-to-cloudflare/index.html
---
<div class="article">

My personal website started as a way to learn AWS hands-on while documenting experiments and lessons from real-world technology challenges.

Over time, I realised that a WordPress server running continuously was more infrastructure than the site actually needed.

## What I am testing

The new model is deliberately simple:

**GitHub → Cloudflare Pages → Static website**

This removes the always-on server and database while keeping the website fast and easy to publish.

## The learning

For a personal thought-leadership site, the architecture should match the workload. A site that changes occasionally does not necessarily need a continuously running application server.

</div>
