"use strict";
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form__input");
const submitButton = document.querySelector(".search-form__button");
const resultsGrid = document.querySelector(".search-result__grid");
const resultTitle = document.querySelector(".search-result__query");
const resultLength = document.querySelector(".search-result__count");
const searchResultMsg = document.querySelector(".search-result__message");
const genreSelect = document.querySelector("#genre");
const sortSelect = document.querySelector("#sort");
const searchSection = document.querySelector(".search-result");
const detailsSection = document.querySelector(".show-details");
const showDetailsBackButton = document.querySelector(".show-details__back");
const myList = document.querySelector(".my-list");
const navBar = document.querySelector(".navbar");
const myListGrid = document.querySelector(".my-list__grid");
const myListCount = document.querySelector(".my-list__count");
const navBarCount = document.querySelector(".navbar__count");
const detailsButton = document.querySelector(".show-details__button");
const browseButton = document.querySelector(".my-list__browse");

let searchResults = [];
let list = [];
let openSerialDetails = null;
let detailsReturnView = "discover";

const fetchSearchResults = async function (title) {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(title)}`,
  );

  if (!response.ok) {
    throw new Error(`Błąd pobierania: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

const renderResults = function (results) {
  resultsGrid.replaceChildren();

  results.forEach((result) => {
    const card = createShowCard(result.show);
    resultsGrid.append(card);
  });
};

const renderResultsDetails = function (title, results) {
  resultTitle.textContent = title;
  resultLength.textContent = `Liczba wyników: ${results.length}`;
};

const createShowCard = function (show) {
  const showCard = document.createElement("li");
  showCard.classList.add("search-result__item", "show-card");
  showCard.dataset.id = show.id;

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
        <button class="show-card__button show-card__button--details" type="button">
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

const renderGenreOptions = function (results) {
  const genres = results.flatMap((result) => result.show.genres);
  const uniqueGenres = [...new Set(genres)];

  genreSelect.replaceChildren();

  const option = document.createElement("option");
  option.value = "all";
  option.textContent = "Wszystkie";
  genreSelect.append(option);

  uniqueGenres.forEach((genre) => {
    const genreOption = document.createElement("option");
    genreOption.value = genre;
    genreOption.textContent = genre;

    genreSelect.append(genreOption);
  });
};

const filterResults = function (results, genre) {
  if (genre === "all") {
    return results;
  }

  const filteredResults = results.filter((result) =>
    result.show.genres.includes(genre),
  );

  return filteredResults;
};

const sortResult = function (results, sort) {
  const sortedResults = [...results];
  if (sort === "relevance") {
    return sortedResults;
  }

  if (sort === "rating-asc" || sort === "rating-desc") {
    sortedResults.sort((a, b) => {
      const ratingA = a.show.rating.average;
      const ratingB = b.show.rating.average;

      if (ratingA === null && ratingB === null) return 0;
      if (ratingA === null) return 1;
      if (ratingB === null) return -1;

      if (sort === "rating-asc") {
        return ratingA - ratingB;
      }

      return ratingB - ratingA;
    });
  }

  return sortedResults;
};

const updateSearchResults = function () {
  const selectedGenre = genreSelect.value;
  const selectedSort = sortSelect.value;

  const filteredResults = filterResults(searchResults, selectedGenre);
  const sortedResults = sortResult(filteredResults, selectedSort);

  renderResults(sortedResults);
  resultLength.textContent = `Liczba wyników: ${sortedResults.length}`;
};

const renderDetails = function (selectedResult) {
  const imgDtl = document.querySelector(".show-details__image");
  const titleDtl = document.querySelector(".show-details__title");
  const yearDtl = document.querySelector(".metadata__year");
  const typeDtl = document.querySelector(".metadata__type");
  const ratingDtl = document.querySelector(".show-details__rating");
  const descriptionDtl = document.querySelector(".show-details__description");
  openSerialDetails = selectedResult;

  const show = selectedResult.show;

  const detailsButton = document.querySelector(".show-details__button");
  detailsButton.dataset.id = show.id;

  const isSaved = list.some((result) => result.show.id === show.id);

  if (isSaved) {
    detailsButton.textContent = "- Usuń z mojej listy";
  } else {
    detailsButton.textContent = "+ Dodaj do mojej listy";
  }

  titleDtl.textContent = show.name;
  yearDtl.textContent = show.premiered?.slice(0, 4) ?? "Brak daty";

  typeDtl.textContent = show.genres.length
    ? show.genres.join(", ")
    : "Brak informacji o gatunku";

  ratingDtl.textContent = `★ ${show.rating?.average ?? "Brak oceny"}`;

  const imageUrl = show.image?.original ?? show.image?.medium;

  if (imageUrl) {
    imgDtl.src = imageUrl;
    imgDtl.alt = `Plakat serialu ${show.name}`;
  } else {
    imgDtl.removeAttribute("src");
    imgDtl.alt = `Brak plakatu serialu ${show.name}`;
  }

  if (show.summary) {
    const parser = new DOMParser();
    const parsedDescription = parser.parseFromString(show.summary, "text/html");

    parsedDescription.querySelectorAll("p").forEach((paragraph) => {
      paragraph.append(" ");
    });

    descriptionDtl.textContent =
      parsedDescription.body.textContent.trim() || "Brak opisu";
  } else {
    descriptionDtl.textContent = "Brak opisu";
  }
};

const renderMyList = function (list) {
  myListGrid.replaceChildren();

  const emptyMessage = document.querySelector(".my-list__empty");

  if (list.length === 0) {
    emptyMessage.hidden = false;
  } else {
    emptyMessage.hidden = true;
  }

  myListCount.textContent = navBarCount.textContent = list.length;
  console.log(myListCount);

  list.forEach((el) => {
    const savedShow = createShowCard(el.show);
    const deleteButton = savedShow.querySelector(
      ".show-card__button--secondary",
    );
    deleteButton.textContent = "- Usuń z listy";
    deleteButton.classList.add("show-card__button--remove");

    myListGrid.append(savedShow);
  });
};

searchForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const searchValue = searchInput.value.trim();
  if (!searchValue) return;

  updateNavigation("discover");

  myList.hidden = true;
  searchSection.hidden = false;
  detailsSection.hidden = true;

  searchResultMsg.textContent = "Szukam seriali…";
  submitButton.disabled = true;
  resultsGrid.replaceChildren();
  searchResults = [];
  resultLength.textContent = "Liczba wyników: 0";

  try {
    const results = await fetchSearchResults(searchValue);
    searchResults = results;

    renderGenreOptions(results);

    genreSelect.value = "all";
    sortSelect.value = "relevance";

    updateSearchResults();
    renderResultsDetails(searchValue, searchResults);

    searchResultMsg.textContent = results.length
      ? "Poniżej wyniki wyszukiwania"
      : "Nie znaleziono seriali";
  } catch (error) {
    console.error(error);
    searchResultMsg.textContent =
      "Nie udało się pobrać wyników. Spróbuj ponownie";
  } finally {
    submitButton.disabled = false;
  }
});

const updateNavigation = function (view) {
  const exploreButton = document.querySelector(".navbar__button--explore");
  const listButton = document.querySelector(".navbar__button--list");

  const isDiscover = view === "discover";

  exploreButton.classList.toggle("navbar__button--active", isDiscover);
  listButton.classList.toggle("navbar__button--active", !isDiscover);

  exploreButton.setAttribute("aria-pressed", String(isDiscover));
  listButton.setAttribute("aria-pressed", String(!isDiscover));
};

const saveMyList = function () {
  try {
    const savedData = JSON.stringify(list);
    localStorage.setItem("serial-shelf-list", savedData);
  } catch (error) {
    console.error("Nie udało się zapisać listy:", error);
  }
};

const loadMyList = function () {
  try {
    const savedData = localStorage.getItem("serial-shelf-list");

    if (savedData === null) return;

    const parsedData = JSON.parse(savedData);

    if (!Array.isArray(parsedData)) {
      throw new Error("Zapisane dane nie są tablicą");
    }

    const hasValidItems = parsedData.every(
      (item) => item?.show && typeof item.show.id === "number",
    );

    if (!hasValidItems) {
      throw new Error("Zapisana lista ma nieprawidłową strukturę");
    }

    list = parsedData;
  } catch (error) {
    console.error("Nie udało się odczytać listy:", error);
    list = [];
  }
};

browseButton.addEventListener("click", function () {
  myList.hidden = true;
  detailsSection.hidden = true;
  searchSection.hidden = false;

  updateNavigation("discover");
  searchInput.focus();
});

genreSelect.addEventListener("change", function () {
  updateSearchResults();
});

sortSelect.addEventListener("change", function () {
  updateSearchResults();
});

resultsGrid.addEventListener("click", function (e) {
  const card = e.target.closest(".show-card");
  if (card) {
    const id = Number(card.dataset.id);
    detailsReturnView = "discover";

    if (e.target.closest(".show-card__button--details")) {
      const selectedResult = searchResults.find(
        (result) => result.show.id === id,
      );
      if (selectedResult) {
        renderDetails(selectedResult);
        searchSection.hidden = true;
        detailsSection.hidden = false;
        myList.hidden = true;
      } else return;
    } else if (e.target.classList.contains("show-card__button")) {
      const movieTolist = searchResults.find((result) => result.show.id === id);
      if (list.some((el) => el.show.id === id)) {
        return;
      } else {
        if (movieTolist) {
          list.push(movieTolist);
          saveMyList();
        } else return;
      }
      renderMyList(list);
    }
  } else {
    return;
  }
});

showDetailsBackButton.addEventListener("click", function () {
  detailsSection.hidden = true;

  if (detailsReturnView === "my-list") {
    myList.hidden = false;
    searchSection.hidden = true;
  } else {
    searchSection.hidden = false;
    myList.hidden = true;
  }
});

navBar.addEventListener("click", function (e) {
  if (e.target.closest(".navbar__button--list")) {
    myList.hidden = false;
    searchSection.hidden = true;
    detailsSection.hidden = true;

    updateNavigation("my-list");
  } else if (e.target.closest(".navbar__button--explore")) {
    myList.hidden = true;
    searchSection.hidden = false;
    detailsSection.hidden = true;

    updateNavigation("discover");
  }
});

myListGrid.addEventListener("click", function (e) {
  const card = e.target.closest(".show-card");
  if (!card) return;

  const id = Number(card.dataset.id);

  if (e.target.closest(".show-card__button--remove")) {
    const movieToDelete = list.findIndex((result) => result.show.id === id);

    if (movieToDelete === -1) return;

    list.splice(movieToDelete, 1);
    saveMyList();
    renderMyList(list);
    return;
  }

  if (e.target.closest(".show-card__button--details")) {
    const selectedDetails = list.find((result) => result.show.id === id);

    if (!selectedDetails) return;

    renderDetails(selectedDetails);
    detailsReturnView = "my-list";

    searchSection.hidden = true;
    detailsSection.hidden = false;
    myList.hidden = true;
  }
});

detailsButton.addEventListener("click", function () {
  const id = Number(detailsButton.dataset.id);

  const savedIndex = list.findIndex((result) => result.show.id === id);

  if (savedIndex !== -1) {
    list.splice(savedIndex, 1);
    detailsButton.textContent = "+ Dodaj do mojej listy";
  } else {
    const selectedResult = openSerialDetails;

    if (!selectedResult) return;

    list.push(selectedResult);
    detailsButton.textContent = "- Usuń z mojej listy";
  }

  saveMyList();
  renderMyList(list);
});

loadMyList();
renderMyList(list);
