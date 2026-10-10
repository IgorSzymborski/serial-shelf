"use strict";
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form__input");
const submitButton = document.querySelector(".search-form__button");
const resultsGrid = document.querySelector(".search-result__grid");

const fetchSearchResults = async function (title) {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${title}`,
  );

  if (!response.ok) {
    throw new Error(`Błąd pobierania: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

const init = async function () {
  const results = await fetchSearchResults();
  console.log(results);
  createShowCard;
  renderResults(results);
};

const renderResults = function (results) {
  resultsGrid.replaceChildren();

  results.forEach((result) => {
    const card = createShowCard(result.show);
    resultsGrid.append(card);
  });
};

const createShowCard = function (show) {
  const showCard = document.createElement("li");
  showCard.classList.add("search-result__item", "show-card");

  const html = `
    <div class="show-card__poster">
      <img
        src="assets/7814585_2.3.jpg"
        alt="Plakat serialu Dark"
        class="show-card__image"
      />
    </div>

    <div class="show-card__content">
      <h3 class="show-card__title">Dark</h3>
      <p class="show-card__genres">Sci-fi, Thriller</p>

      <div class="show-card__metadata">
        <p class="show-card__year">2017</p>
        <p class="show-card__rating">
          <span class="rating--accent">★</span> 8.7
        </p>
      </div>

      <div class="show-card__actions">
        <button class="show-card__button" type="button">
          Szczegóły
        </button>
        <button
          class="show-card__button show-card__button--secondary"
          type="button"
        >
          + Do listy
        </button>
      </div>
    </div>
  `;

  showCard.innerHTML = html;

  const image = showCard.querySelector(".show-card__image");
  const title = showCard.querySelector(".show-card__title");
  const genres = showCard.querySelector(".show-card__genres");
  const year = showCard.querySelector(".show-card__year");
  const rating = showCard.querySelector(".show-card__rating");
  const star = rating.querySelector(".rating--accent");

  title.textContent = show.name;
  genres.textContent = show.genres.length
    ? show.genres.join(", ")
    : "Brak informacji o gatunku";
  year.textContent = show.premiered?.slice(0, 4) ?? "Brak daty";

  rating.replaceChildren(
    star,
    document.createTextNode(` ${show.rating?.average ?? "Brak oceny"}`),
  );

  if (show.image?.medium) {
    image.src = show.image.medium;
    image.alt = `Plakat serialu ${show.name}`;
  } else {
    image.removeAttribute("src");
    image.alt = `Brak plakatu serialu ${show.name}`;
  }

  return showCard;
};

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchVaule = searchInput.value.trim();
  fetchSearchResults(searchVaule);
  init();
});
