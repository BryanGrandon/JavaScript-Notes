const $fetchAsync = document.getElementById("fetch-async");
const $fragmentFetch = document.createDocumentFragment();

async function getData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users"),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.forEach((e) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${e.name} -- ${e.email} -- ${e.phone}`;
      $fragmentFetch.appendChild($li);
    });

    $fetchAsync.appendChild($fragmentFetch);
  } catch (error) {
    $fetchAsync.innerHTML = `Error ${error.status} : ${error.statusText}`;
  }
}
