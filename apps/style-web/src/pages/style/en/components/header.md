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

Under development. This method to download HTML markup from a Cortina block will be available later.

## How to make your own header

To make your own header you need to take into account:

1. Variants. KTH Style offers three differnt color variants of header
2. Parts. KTH Style offers some components for the different parts that you might want in your header

### Variants

The header comes in three variants:

- **Intranet** for pages and services in intranet
- **Student web** for pages and services in student web
- **External**, for everything else

<iframe src="/style/en/examples/header/variants"></iframe>

<details>
<summary>Code</summary>

```html
<header class="kth-header external"></header>
<header class="kth-header student-web"></header>
<header class="kth-header intranet"></header>
```

</details>

### Parts

KTH Style offers the following components for making the header

- [Logotype](./logotype)
- [Mega-menu](./mega-menu)
- [Tools](./header__tools)
- [Menu item](./menu-item)

You can see here a full example of header with all three parts

<iframe src="/style/en/examples/header/full-example"></iframe>

<details>
<summary>Code</summary>

```html
<header class="kth-header external">
  <div class="kth-header__container">
    <a href="/" class="kth-logotype">
      <figure>
        <img
          srcset="
            /style/assets/kth-logotype-white.webp,
            /style/assets/kth-logotype-white@2x.webp 2x,
            /style/assets/kth-logotype-white@3x.webp 3x
          "
          src="/style/assets/kth-logotype-white.png"
        />
      </figure>
    </a>
    <nav class="kth-mega-menu">
      <ul>
        <li>
          <a href="#" class="kth-menu-item">
            <span>Item in mega-menu for desktop</span>
          </a>
        </li>
      </ul>
    </nav>
    <ul class="kth-header__tools">
      <li>
        <a href="" class="kth-menu-item language">
          <span>English</span>
        </a>
      </li>
      <li>
        <nav class="kth-mega-menu--collapsable">
          <button class="kth-menu-item">
            <span>Menu in mobile</span>
          </button>
        </nav>
      </li>
    </ul>
  </div>
</header>
```

</details>
