# Layout and structure

## Page structure

Ideally, a page body should have this structure and semantics:

Body:

- `A11y nav`. Quick navigation for keyboard users. Including links like "Skip to main content"
- `kpm`. Container. No semantic. This will be included on KTH sites and injected externally (in Canvas)
  - `entrances`. Semantically `<nav>`. Include links to kth.se, student web and intranet
  - `personal-menu`. Semantically `<nav>`. Include todays personal menu. Collection of links that are relevant for the logged in user.
- `header`. Semantically `<header>` as defined in [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role)
  - `logotype`
  - `mega-menu`. Semantically `<nav>`. Main navigation for the entire site.
  - `tools`. Container. No semantic. Includes search, link to change language and other utilities.
  - `mega-menu (mobile)`. Same as `mega-menu`
- `main area`. Container. No semantic. Includes everything between the header and the footer.
  - `breadcrumbs`. Semantically `<nav>`. Breadcrumbs
  - `sidebar`. Semantically `<aside>`. Includes typically the local navigation
    - `local navigation`. Semantically `<nav>`
  - `main content`. Semantically `<main>`. Includes the main content of the page
- `footer`. Semantically `<footer>`. Includes quicklinks, legal information and KTH contact (address)

```
<body>
  <A11yNav />
  <KPM> (div?)
    <Entrances />      role: nav(label: "KTH Sites")
    <PersonalMenu />   role: nav  (label: "Personal menu")
  </KPM>
  <MainHeader>         role: header
    <Logotype />
    <MegaMenu />       role: nav(label: "Main navigation")
    <Tools />(search, English)
    <MegaMenuMobile /> role: nav(label: "Main navigation")
  </MainHeader>
  <MainArea>  (div)
    <Breadcrumbs />    role: nav(label: "Breadcrumbs")
    <Sidemenu />       role: aside
    <MainContent>      role: main
  </MainArea>
  <MainFooter />       role: footer
</body>
```

```
body
- A11ynav.
```
