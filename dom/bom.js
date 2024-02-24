/* BOM
 * alert()
 * confirm()
 * prompt()
 * open()
 * closed()
 * print()
 */

// resize, scroll, load, DOMContentLoaded

const properties = {
  resize: {
    page: {
      width: window.innerWidth,
      height: window.innerHeight,
    },

    window: {
      width: window.outerWidth,
      height: window.outerHeight,
    },
  },

  scroll: {
    x: window.scrollX,
    y: window.scrollY,
  },

  load: {
    x: window.screenX,
    y: window.screenY,
  },

  DOMContentLoaded: {
    x: window.screenX,
    y: window.screenY,
  },
};

// -------- Browser -------- //

const locationURL = {
  all: location,
  origin: location.origin,
  protocol: location.protocol,
  host: location.host,
  hostname: location.hostname,
  port: location.port,
  href: location.href,
  hash: location.hash,
  search: location.search,
  pathname: location.pathname,
};

const historyObj = {
  all: history,
  length: history.length,
};

const navigatorObj = {
  all: navigator,
  connection: navigator.connection,
  geolocation: navigator.geolocation,
  mediaDevices: navigator.mediaDevices,
  onLine: navigator.onLine,
  serviceWorker: navigator.serviceWorker,
  storage: navigator.storage,
  usb: navigator.usb,
  userAgent: navigator.userAgent,
};
