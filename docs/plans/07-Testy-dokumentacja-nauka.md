# Serial Shelf — testy, dokumentacja i nauka

[Spis treści](00-START.md)

## 1. Jak korzystać z dokumentacji?

Nie czytaj wszystkiego przed rozpoczęciem.

1. Nazwij konkretny problem.
2. Otwórz odpowiednią dokumentację.
3. Przeczytaj opis i jeden przykład.
4. Zrób mały eksperyment.
5. Zamknij przykład.
6. Zastosuj rozwiązanie samodzielnie.
7. Wyjaśnij własnymi słowami, dlaczego działa.

## 2. Kolejność czytania

| Moment            | Dokumentacja       | Czego szukasz?               |
| ----------------- | ------------------ | ---------------------------- |
| Przed API         | TVmaze             | Endpoint i struktura danych  |
| Pierwsze pobranie | Using Fetch        | Response, JSON, błędy        |
| Podział plików    | JavaScript modules | Import i export              |
| Szczegóły         | dialog             | Otwieranie, zamykanie, fokus |
| Własna lista      | localStorage       | Odczyt i zapis               |
| Nowe wyszukiwanie | AbortController    | Anulowanie                   |
| Publikacja        | GitHub Pages       | Źródło publikacji            |

## 3. Linki

- TVmaze:
  https://www.tvmaze.com/api

- Fetch:
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

- Moduły:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

- Dialog:
  https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog

- localStorage:
  https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

- AbortController:
  https://developer.mozilla.org/en-US/docs/Web/API/AbortController

- Metody tablic:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

- CSS Grid:
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout

- Flexbox:
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout

- GitHub Pages:
  https://docs.github.com/en/pages/quickstart

Dobra notatka nie brzmi:
„Przeczytałem o fetch”.

Dobra notatka brzmi:
„Sprawdzam response.ok, ponieważ odpowiedź HTTP z błędem nie musi odrzucić Promise zwróconej przez fetch”.

## 4. Testy manualne

| Sprawdzenie                      | Oczekiwany rezultat                  |
| -------------------------------- | ------------------------------------ |
| Puste pole                       | Brak zapytania i czytelna informacja |
| Same spacje                      | Tak samo jak puste pole              |
| Spacje wokół tytułu              | Zapytanie działa po przycięciu       |
| Wyszukanie „dark”                | Pojawiają się wyniki                 |
| Losowa długa fraza               | Stan braku wyników                   |
| Brak plakatu                     | Zastępczy blok                       |
| Brak oceny                       | „Brak oceny”, bez błędu              |
| Długi tytuł                      | Poprawny układ                       |
| API niedostępne                  | Komunikat i ponowienie               |
| Wolne połączenie                 | Widoczne ładowanie                   |
| Dodanie drugi raz                | Brak duplikatu                       |
| Odświeżenie                      | Lista pozostaje                      |
| Usunięcie ostatniego serialu     | Stan pustej listy                    |
| Zmiana filtra                    | Brak nowego zapisu listy             |
| Sortowanie                       | Źródłowa kolejność nadal dostępna    |
| Dwa szybkie zapytania            | Aktualne wyniki wygrywają            |
| Zmiana widoku podczas pobierania | Widok nie przełącza się sam          |
| Otwarcie i zamknięcie dialogu    | Poprawny fokus                       |
| Szerokość 360 px                 | Brak poziomego przewijania           |
| Klawiatura                       | Wszystkie akcje dostępne             |
| Opublikowane demo                | Główne funkcje działają jak lokalnie |

Nietypowe dane sprawdzaj na małych lokalnych danych testowych.

Nie musisz szukać w API serialu, który przypadkiem nie ma plakatu.

Testy automatyczne są rozszerzeniem.

Największy sens miałyby dla:

- normalizacji;
- sortowania brakujących ocen;
- zapobiegania duplikatom.

## 5. Jak korzystać z pomocy mentora?

Przy większym etapie wyślij:

- co miało działać;
- co działa obecnie;
- fragment kodu;
- konkretny objaw problemu;
- co już sprawdziłeś.

Kolejność pomocy:

1. Wskazówka.
2. Pytanie naprowadzające.
3. Wyjaśnienie mechanizmu.
4. Mały przykład.
5. Gotowy fragment dopiero wtedy, kiedy go potrzebujesz.

Nie musisz walczyć przez dwie godziny z literówką.

Po około 20–30 minutach bez postępu zbierz informacje i zapytaj konkretnie.

## 6. Co sprawdzać przy błędzie?

- Console.
- Network.
- Argumenty funkcji.
- Aktualny stan.
- Czy zdarzenie się uruchamia.
- Typ identyfikatora.
- Kształt odpowiedzi API.

Zanim zmienisz kilka rzeczy naraz, postaw jedną hipotezę i ją sprawdź.

## 7. Pytania sprawdzające zrozumienie

Po zakończeniu powinieneś umieć wyjaśnić:

1. Co jest źródłem prawdy w aplikacji?
2. Co zapisujesz w localStorage i dlaczego?
3. Dlaczego filtr nie wywołuje ponownego pobrania?
4. Czym różni się wyszukiwanie API od lokalnego?
5. Dlaczego sortujesz kopię tablicy?
6. Dlaczego brak oceny nie oznacza zera?
7. Co robi await?
8. Dlaczego sprawdzasz response.ok?
9. Co się stanie, jeśli starsze zapytanie wróci później?
10. Dlaczego danych API nie wstawiamy bezpośrednio do innerHTML?
11. Dlaczego identyfikator z dataset może nie pasować do identyfikatora w stanie?
12. Co zmieniłbyś, przenosząc projekt do Reacta?

Nie potrzebujesz definicji podręcznikowych.

Wyjaśnij odpowiedź na własnym kodzie.

## 8. Warunki ukończenia

- [ ] Główny przepływ działa od wyszukania do zapisania.
- [ ] Własna lista działa po odświeżeniu.
- [ ] Filtry i sortowanie współpracują.
- [ ] Brak danych nie wyłącza strony.
- [ ] Błąd API ma własny stan.
- [ ] Starsza odpowiedź nie nadpisuje najnowszego zapytania.
- [ ] Interfejs działa na telefonie i komputerze.
- [ ] Można korzystać z klawiatury.
- [ ] Brak nieobsłużonych błędów w sprawdzonych scenariuszach.
- [ ] Repozytorium ma czytelną historię.
- [ ] README opisuje rzeczywistą wersję.
- [ ] Demo jest dostępne.
- [ ] Potrafisz wyjaśnić główne funkcje bez czytania linijka po linijce.

„Dopracowany” oznacza:

- spójny;
- czytelny;
- odporny na przewidywalne problemy.

Nie oznacza nieskończonego poprawiania marginesów.

## Następny krok

Zaznacz ukończone elementy w [zakresie projektu](01-Projekt-i-funkcje.md), uzupełnij [README](05-Git-GitHub-publikacja.md) i wybierz etap z [harmonogramu](06-Harmonogram.md).
