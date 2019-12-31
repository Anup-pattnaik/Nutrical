"use strict";

const foodbtn = document.getElementById("foodbtn");
const foodtext = document.getElementById("inpu");
const outpu = document.getElementById("outpu");
const search = document.getElementById("search");
const matchList = document.getElementById("match-list");
let da = null;

foodbtn.addEventListener("click", () => {
  fetch(
    "https://api.edamam.com/api/food-database/parser?app_id=da3f183d&app_key=207263b90f7d10579ca6626a0bf21a8a&ingr=" +
      foodtext.value
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      da = data;

      var inHTML = `<table class="table table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Kalorie</th>
        <th>Carbs</>
        <th>Protien</th>
        <th>Fat</th>
        <th>Fiber</th>
      </tr>
    </thead>
    <tbody>`;
      for (var i = 0; i < data.parsed.length; i++) {
        const dat = da.parsed[i].food;
        const nutrients = dat.nutrients;
        var lab = dat.label.split(" ");
        inHTML += `<tr>
        <td>${lab[0]}</td>
        <td>${nutrients.ENERC_KCAL || "-/-"}</td>
        <td>${nutrients.CHOCDF || "-/-"}</td>
        <td>${nutrients.PROCNT || "-/-"}</td>
        <td>${nutrients.FAT || "-/-"}</td>
        <td>${nutrients.FIBTG || "-/-"}</td>
      </tr>`;
      }
      inHTML += `</tbody>
  </table>`;
      outpu.innerHTML = inHTML;
    });
});

const searchfood = async searchText => {
  const res = await fetch();
  const foods = await res.json();
};
