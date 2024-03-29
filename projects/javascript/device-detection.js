const n = navigator;
const ua = n.userAgent;

/* The `isMobile` object is a collection of methods that check if the user agent string (`ua`) matches
specific patterns to determine if the device is a mobile device. */
const isMobile = {
  android: () => ua.match(/android/i),
  ios: () => ua.match(/iphone|ipad|ipod/i),
  windows: () => ua.match(/windows phone/i),
  any: function () {
    return this.android() || this.ios() || this.windows();
  },
};

/* The `isDesktop` object is a collection of methods that check if the user agent string (`ua`) matches
specific patterns to determine if the device is a desktop device. */
const isDesktop = {
  linux: () => ua.match(/linux/i),
  mac: () => ua.match(/mac os/i),
  windows: () => ua.match(/windows nt/i),
  any: function () {
    return this.linux() || this.mac() || this.windows();
  },
};

/* The `isBrowser` object is a collection of methods that check if the user agent string (`ua`) matches
specific patterns to determine if the browser being used is Chrome, Safari, Firefox, Opera, or Edge. */
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

const browser = isBrowser.any();
const platform = isMobile.any() ? isMobile.any() : isDesktop.any();

console.log(`Your Browser is: ${browser}, 
Your Platform is: ${platform}`);
