const $axiosAsync = document.getElementById("axios-async");
const $fragmentAxios = document.createDocumentFragment();

async function getDataAxios() {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
      json = await res.data;

    json.forEach((e) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${e.name} -- ${e.email} -- ${e.phone}`;
      $fragmentAxios.appendChild($li);
    });

    $axiosAsync.appendChild($fragmentAxios);
  } catch (error) {
    $axiosAsync.innerHTML = `Error ${error.response.status} : ${error.response.statusText}`;
  }
}
