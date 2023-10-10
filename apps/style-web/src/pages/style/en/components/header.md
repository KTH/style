---
layout: "@layouts/Page.astro"
title: "Header"
---

# Header

<p class="lead">Indicates to users they are inside a KTH page or service</p>

## When to use

- Use it in all KTH pages or services

## When not to use

- If the page or service is embedded in an `<iframe>` or similar
- If the page or service is not part of KTH

## How to use

You can get the header in two ways:

1. (Recommended) Download the HTML markup from Cortina
2. Make the HTML markup yourself

We recommend that you use the first option except:

- You are making an app where users should not leave in any intermediate step. For example: account activation
- You are making the HTML markup in Cortina

### Download the HTML markup from Cortina

TODO

## Header variants

> [!Note] This step is relevant only if you are making the HTML markup yourself

The header comes in three variants:

- **Intranet** for pages and services in intranet
- **Student web** for pages and services in student web
- **Inverse**, for everything else

### Inverse variant

(TODO)

### Intranet variant

(TODO)

### Student web variant

(TODO)

## Header parts

> [!Note] This step is relevant only if you are making the HTML markup yourself

Inside header, you can include the following components. Read the guidelines for each of them.

- [Logotype](./header__logotype)
- [Mega-menu](./header__mega-menu)
- [Tools](./header__tools)
