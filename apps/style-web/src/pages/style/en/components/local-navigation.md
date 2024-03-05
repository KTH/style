---
layout: "@layouts/Page.astro"
title: Local navigation (submenu)
---

# Local navigation

<p class="lead">Navigate to different pages related to the current page</p>

## When to use

- In general inside the [sidebar] (TODO) component.

## When not to use

When the entire page is a "landing" and a local navigation only adds redudancy to the main content.

## How it works

### General structure

- The container must be a `<nav>` tag.
- Include a visible heading `<h2>` that works as navigation title
- Give a unique label to the navigation. Use `aria-labelledby` in `<nav>` pointing to the `<h2>` mentioned previously
- Use `aria-current="page"` attribute in the `<a>` tag that points to the current page.

### Menu structure

The entire menu should represent a tree of menus (URLs and text labels) like this one:

```
- 1 Lorem ipsum (http://example.com/1)
- 2 Dolor sit amet (http://example.com/2)
- 3 Tempus
  - 3.1 Consectetur adipiscing elit (http://example.com/3-1)
  - 3.2 Metus iaculis (http://example.com/3-2)
- 4 Pellentesque quis justo aliquam (http://example.com/4)
- 5 Suspendisse blandit
  - 5.1 Proin at bibendum ante
    - 5.1.1 Mauris (http://example.com/5-1-1)
    - 5.1.2 Cras eu quam (http://example.com/5-1-2)
  - 5.2 Aenean sed ante in leo
```

Note: headings like _3 Tempus_ don't have any URL.

Depending on which page the user visits, you should show a different menu.

- Show one level menu if the user visits a page in the "top level". For example http://example.com/1, http://example.com/2 or http://example/4.
- Show two levels if the user visits a page in a submenu. For example http://example.com/3-1, http://example.com/3-2
- Show three levels if the user visits a page in a sub-sub-menu. For example http://example.com/5-1-1

#### One level

If the user is visiting a page in the "top level" (for example http://example.com/1)

- Show all top-level menus
- Hide all submenus. Show only the title (for example _3 Tempus_) for them. Format the link using `.expandable` class
- Link for _3 Tempus_ goes to the first page in its submenu (http://example.com/3-1)
- Link for _5 Suspendisse blandit_ goes to the first URL available in the submenu (http://example.com/5-1-1)

<iframe src="/style/en/examples/local-navigation/one-level"></iframe>

#### Two levels

If the user is visiting a page in a submenu (for example http://example.com/3-1)

- Show all top-level menus
- Show the submenu that includes the visiting page. (everything under _3 Tempus_). Hide all other submenus
- Use a heading for the submenu title (_3 Tempus_) without any link

<iframe src="/style/en/examples/local-navigation/two-levels"></iframe>

#### Three levels

If the user is visiting a page in a sub-submenu.

- Show all top-level menus
- Show all menus in the submenu that includes the visiting page (everything under _5.1 Proin at bibendum ante_) and their parents (everything directly under _5 Suspendisse blandit_)

<iframe src="/style/en/examples/local-navigation/three-levels"></iframe>
