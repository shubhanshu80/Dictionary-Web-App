const txtBox = document.querySelector(".txtBox");
const form = document.querySelector(".searchForm");
const searchWord = document.querySelector(".search-word");
const description = document.querySelector(".description");
const dictionaryJson = "https://raw.githubusercontent.com/adambom/dictionary/master/dictionary.json";

function searchDict(e) {
  e.preventDefault();
  fetch(dictionaryJson)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let word = txtBox.value.trim().toUpperCase();
      let found = false;
      Object.keys(data).forEach(function(key) {
        if (key === word) {
          searchWord.innerHTML = word;
          description.innerHTML = data[key];
          found = true;
        }
      });
      if (!found) {
        searchWord.innerHTML = word;
        description.innerHTML = "Sorry, word not found";
      }
    });
}

form.addEventListener("submit", searchDict);
