# Layout and structure

## Template

KTH Style offers the following components that defines regions in a document:

- **A11y Nav**. Defines links for keyboard users (for example "Skip to main content")
- **KPM**. Defines the region for the three "entrances" and Personal menu
- **Main header**. Region with the logo, mega-menu and tools
- **Main content** Region between the header and footer
  - **Breadcrumbs**
  - **Sidebar**. Region usually for secondary navigation
- **Main footer**. Region for legal information, copyright and address.

## Page structure

The components above are expected to be placed like this:

```html
<body>
  <div class="kth-a11y-nav"></div>
  <div class="kth-kpm"></div>
  <header class="kth-main-header"></header>
  <div class="kth-main-content">
    <nav class="kth-breadcrumbs"></nav>
    <aside class="kth-sidebar"></aside>
    <main></main>
  </div>
  <footer class="kth-footer"></footer>
</body>
```
