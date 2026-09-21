# Serial Shelf — JavaScript i architektura

[Spis treści](00-START.md)

## 1. Stan aplikacji

Zanim napiszesz większą ilość kodu, rozpisz stan słowami.

| Informacja          | Zastosowanie                   | Zapis trwały |
| ------------------- | ------------------------------ | ------------ |
| Aktualny widok      | Odkrywaj lub moja lista        | Nie          |
| Wysłane zapytanie   | Nagłówek wyników i ponowienie  | Nie          |
| Wyniki źródłowe     | Filtrowanie i sortowanie       | Nie          |
| Stan wyszukiwania   | idle/loading/success/error     | Nie          |
| Komunikat błędu     | Wyjaśnienie problemu           | Nie          |
| Filtr gatunku       | Wybór widocznych wyników       | Nie          |
| Sortowanie wyników  | Kolejność kart                 | Nie          |
| Zapisane seriale    | Własna lista                   | Tak          |
| Filtr statusu listy | Obejrzane/do obejrzenia        | Nie          |
| Zapytanie lokalne   | Wyszukiwanie we własnej liście | Nie          |
| Wybrany serial      | Zawartość dialogu              | Nie          |

Nie zapisuj wszystkiego przy każdej zmianie interfejsu.

Zmiana filtra nie zmienia zapisanych seriali.

Dodanie serialu lub zmiana jego statusu — zmienia.

## 2. Dane i dane pochodne

Przechowuj wyniki źródłowe.

Widoczną listę obliczaj na podstawie:

1. źródła danych;
2. wyszukiwania lokalnego, jeśli dotyczy;
3. filtrów;
4. sortowania.

Nie musisz przechowywać kilku tablic z prawie identycznymi zestawami seriali.

Licznik wyników wyliczaj z widocznej listy.

## 3. Model zapisanego serialu

Nie zapisuj całej odpowiedzi API bez zastanowienia.

| Pole        | Znaczenie               |
| ----------- | ----------------------- |
| id          | Identyfikator z API     |
| name        | Tytuł                   |
| imageUrl    | Adres plakatu lub null  |
| genres      | Tablica gatunków        |
| rating      | Ocena lub null          |
| premiered   | Data premiery lub null  |
| summaryText | Opis jako zwykły tekst  |
| language    | Język                   |
| showStatus  | Status emisji           |
| sourceUrl   | Strona serialu w TVmaze |
| watchStatus | planned albo watched    |
| addedAt     | Data dodania            |

Własna lista może dzięki temu wyświetlić podstawową zawartość bez ponownego pobierania każdego serialu.

Obrazki nadal mogą wymagać połączenia z internetem.

## 4. Zasady dla danych

- Używaj identyfikatora z API.
- Nie generuj nowego UUID dla tego samego serialu.
- Zapobiegaj duplikatom.
- Przyjmij, że identyfikatory w stanie są liczbami.
- Pamiętaj, że wartości z dataset są tekstem.
- Statusy techniczne zapisuj po angielsku.
- Etykiety statusów pokazuj po polsku.

Proponowany klucz localStorage:

serialShelf.watchlist.v1

## 5. Struktura projektu

Na start:

- index.html
- css/styles.css
- js/app.js
- assets/
- README.md
- .gitignore

Po uruchomieniu pierwszego przepływu:

- js/api.js — komunikacja z API;
- js/storage.js — zapis i odczyt listy;
- js/ui.js — tworzenie i aktualizacja elementów;
- js/app.js — zdarzenia i koordynowanie działania.

Opcjonalnie później:

- js/utils.js — rzeczywiście wspólne funkcje;
- docs/screenshots/ — zrzuty do README;
- docs/learning-notes.md — Twoje notatki.

Nie twórz od razu dziesięciu pustych modułów.

## 6. Podział odpowiedzialności

- Funkcja pobierająca dane nie buduje kart.
- Funkcja tworząca kartę nie pobiera danych.
- Funkcja zapisująca listę nie zmienia filtrów.
- Funkcja filtrująca zwraca wynik bez zmieniania DOM.

Proponowane nazwy funkcji:

- searchShows
- normalizeShow
- getVisibleShows
- createShowCard
- renderResults
- toggleWatchlist
- loadWatchlist
- saveWatchlist

To propozycje odpowiedzialności, nie obowiązkowy szablon.

## 7. Moduły

Uruchamiaj projekt przez lokalny serwer HTTP, np. Live Server.

W HTML użyj skryptu modułowego.

Nie otwieraj projektu przez file://.

Dokumentacja:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

## 8. Mapa zagadnień JavaScript

| Zagadnienie                            | Zastosowanie                     |
| -------------------------------------- | -------------------------------- |
| Funkcje, argumenty i zwracane wartości | Podział odpowiedzialności        |
| Zakres zmiennych                       | Stan modułów i funkcji           |
| Obiekty i tablice                      | Seriale i własna lista           |
| Destrukturyzacja                       | Odczytywanie danych              |
| Spread i niemutujące operacje          | Kopiowanie danych                |
| map                                    | Normalizacja odpowiedzi          |
| filter                                 | Filtry i usuwanie                |
| find                                   | Odszukanie serialu               |
| some                                   | Sprawdzenie obecności na liście  |
| sort i localeCompare                   | Kolejność wyników                |
| Set                                    | Unikalne gatunki                 |
| reduce                                 | Opcjonalne podsumowanie statusów |
| Optional chaining                      | Brakujące dane                   |
| Nullish coalescing                     | Wartości zastępcze               |
| DOM i textContent                      | Renderowanie                     |
| Formularze i zdarzenia                 | Wyszukiwarka                     |
| Delegacja zdarzeń                      | Przyciski na kartach             |
| dataset i closest                      | Rozpoznawanie akcji              |
| Promise i async/await                  | API                              |
| try/catch/finally                      | Obsługa żądań                    |
| JSON                                   | API i localStorage               |
| import/export                          | Organizacja projektu             |
| Timery i domknięcia                    | Opcjonalny debounce              |
| AbortController                        | Anulowanie żądań                 |
| DevTools i breakpointy                 | Diagnozowanie problemów          |

Nie używaj metody tylko po to, żeby ją odhaczyć.

Jeśli wystarczy filter().length, nie musisz na siłę wybierać reduce().

Klasy i dziedziczenie nie są wymagane. Ten projekt pasuje do funkcjonalnego sposobu pisania.

## Następny krok

Przejdź do [API i wyszukiwarki](04-API-i-wyszukiwarka.md).

Pytania sprawdzające zrozumienie są w [pliku 07](07-Testy-dokumentacja-nauka.md).
