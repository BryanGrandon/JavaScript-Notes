# Projects

The best way to learn something is to put it into practice through projects.

## _Table of content_

- [Navbar](#navbar)

## _Navbar_

The navigation bar is a section of a graphical user interface intended to help visitors access information.

```HTML
<header>
  <nav>
    <!-- Logo -->
    <!-- links to the website sections -->
    <button class="button">
      <!-- Hamburger menu icon -->
      <!-- Set functionality on click -->
    </button>
  </nav>
  <section class="dropdown-menu">
    <!-- links to the website sections when is responsive -->
  </section>
</header>
```

We will use JavaScript to add or remove a class from the navbar to make it display responsively.

```JS
const $button = document.querySelector(".button")
const $dropdownMenu = document.querySelector(".dropdown-menu")

// Set functionality on click
$button.addEventListener("click", () => {
    $dropdownMenu.classList.toggle("dropdown-menu--open")
})
```

We will use CSS in addition to styling the web page. It will have a functionality with certain classes.

### [Navbar 1](/projects/navbar/navbar-1/)

```CSS
.dropdown-menu{
  display: none;
  position: absolute;
  right: 2rem;
  top: 3rem;
  width: 18rem;
  height: 0;
}
.dropdown-menu--open {
  height: auto;
  padding: 1rem 0;
}
@media (max-width: 992px) {
.dropdown-menu{
    display: block;
  }
}
@media (max-width: 576px) {
  .dropdown_menu {
    left: 2rem;
    width: unset;
  }
}
```
