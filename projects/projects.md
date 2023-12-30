# Projects

The best way to learn something is to put it into practice through projects.

## _Table of content_

- [Navbar](#navbar)
- [Network status](#network-status)
- [Device detection](#device-detection)

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
```

## _[Network status](/projects/network-status/)_

Network status allows us to visually show the user that they have lost their connection to the network or when the connection is restored to the network

We will use JavaScript to create the section that will be displayed in the HTML to indicate the connection status.

```JS
const isOnline = () => {
  const $section = document.createElement("section");
  $section.classList.add("status");

  if (navigator.onLine) {
    $section.textContent = `Connection restored`;
    $section.classList.remove("offline");
    $section.classList.add("online");
  } else {
    $section.textContent = `Lost connection`;
    $section.classList.remove("online");
    $section.classList.add("offline");
  }
  document.body.insertAdjacentElement("afterbegin", $section);

  setTimeout(() => document.body.removeChild($section), 1000);
};
window.addEventListener("online", (e) => isOnline());
window.addEventListener("offline", (e) => isOnline());
```

## _[Device detection](/projects/device-detection/)_

Device detection allows us to display unique content or redirect depending on your device or browser.

We will use JavaScript to define the different types of devices or most common browsers.

```JS
const ua = navigator.userAgent;

const isMobile = {
  android: () => ua.match(/android/i),
  ios: () => ua.match(/iphone|ipad|ipod/i),
  windows: () => ua.match(/windows phone/i),
  any: function () {
    return this.android() || this.ios() || this.windows();
  },
};
const isDesktop = {
  linux: () => ua.match(/linux/i),
  mac: () => ua.match(/mac os/i),
  windows: () => ua.match(/windows nt/i),
  any: function () {
    return this.linux() || this.mac() || this.windows();
  },
};
const isBrowser = {
  chrome: () => ua.match(/chrome/i),
  safari: () => ua.match(/safari/i),
  firefox: () => ua.match(/firefox/i),
  opera: () => ua.match(/opera|opera mini|OPR/i),
  edge: () => ua.match(/edge/i),
  any: function () {
    return (
      this.chrome() ||
      this.safari() ||
      this.firefox() ||
      this.opera() ||
      this.edge()
    );
  },
};
```
