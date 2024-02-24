"use strict";
const d = document;

// Event with attribute (onclick="" in html) //
function forAttributeEvents() {
  alert("Event with Attributes");
}

// Event with semantic handler //
function aFunction() {
  alert("Is a function");
}
const $semanticEvent = d.getElementById("semantic-event");
$semanticEvent.onclick = aFunction;
$semanticEvent.onclick = (e) => {
  alert("Arrow function in semantic handler");
};

//  Multiple events  //
const $multipleEvents = d.getElementById("multiple-events");
$multipleEvents.addEventListener("click", aFunction);
$multipleEvents.addEventListener("click", (e) => {
  alert("Arrow function in multiple events");
});

//  Event with parameter  //
function greet(name = "anonymous") {
  alert(`Hello ${name}`);
}
$multipleEvents.addEventListener("click", () => {
  greet();
  greet("Bryan");
});

// Remove event //
const $removeEvent = d.getElementById("remove-event");
const removeTheEvent = (e) => {
  alert(`Remove type event ${e.type}`);
  $removeEvent.removeEventListener("dblclick", removeTheEvent);
};
$removeEvent.addEventListener("dblclick", removeTheEvent);

// Event delegation //
function eventDelegation(e) {
  alert(`The origin of the click is ${e.target.className}`);
}

// we set the event to the document HTML
document.addEventListener("click", (e) => {
  if (e.target.matches(".event-delegation section")) {
    eventDelegation(e);
  }
  if (e.target.matches(".event-delegation a")) {
    alert("direct to another page");
    e.preventDefault();
  }
});
