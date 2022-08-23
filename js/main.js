const form = document.querySelector("form");
const inputTitle = document.querySelector("#inputTitle");
const inputSubtitle = document.querySelector("#inputSubtitle");
const inputImg = document.querySelector("#inputImg");
const inputDate = document.querySelector("#inputDate");
const inputArray = document.querySelector("#inputArray");
let ulLi = document.querySelector(".list-groups");




function showtime(times) {
  let year = new Date(times).getFullYear();
  let month = new Date(times).getMonth();
  let day = new Date(times).getDate();
  return `${day}.${month}.${year}`;
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let arrayInput = inputArray.value.split(" ");
  console.log(arrayInput)
  const obj = {
    title: inputTitle.value,
    poster: inputImg.value,
    overview: inputSubtitle.value,
    release_date: Number(inputDate.value),
    genres: arrayInput,
  };
  films.unshift(obj);
  function addItems(array) {
    ulLi.innerHTML = "";
    array.forEach((element) => {
      let elLi = document.createElement("li");
      let newUli = document.createElement("ul");
      newUli.setAttribute("class","list-group")
      console.log(element)
      element.genres.forEach((number) =>{
        let newLi = document.createElement("li");
        newLi.setAttribute("class","list-group-item")
        newLi.innerHTML = number;
        newUli.appendChild(newLi);
      })
      elLi.setAttribute("class", "card");
      elLi.innerHTML = `<img src = "${element.poster}" class = "card-img-top">
        <h5 class = "card-title">${element.title}</h5>
        <p class = "card-text">${element.overview}</p>
        <h5 class = "card-text">${showtime(element.release_date)}</h5>
        `;
      ulLi.appendChild(elLi);
      elLi.appendChild(newUli);
    });
  }
  addItems(films);
});


function addItems(array) {
  array.forEach((element) => {
    let elLi = document.createElement("li");
    let newUli = document.createElement("ul");
    newUli.setAttribute("class","list-group")
    element.genres.forEach((number) =>{
      let newLi = document.createElement("li");
      newLi.setAttribute("class","list-group-item")
      newLi.innerHTML = number;
      newUli.appendChild(newLi);
    })
    elLi.setAttribute("class", "card");
    elLi.innerHTML = `<img src = "${element.poster}" class = "card-img-top">
      <h5 class = "card-title">${element.title}</h5>
      <p class = "card-text">${element.overview}</p>
      <h5 class = "card-text">${showtime(element.release_date)}</h5>
      `;
      ulLi.appendChild(elLi);
      elLi.appendChild(newUli);
  });
}
addItems(films);

