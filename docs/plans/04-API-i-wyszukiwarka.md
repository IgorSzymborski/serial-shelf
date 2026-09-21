# Serial Shelf — API, wyszukiwarka i obsługa danych

[Spis treści](00-START.md)

## 1. TVmaze API

Dokumentacja:
https://www.tvmaze.com/api

Publiczne API zwraca JSON, umożliwia wyszukiwanie i udostępnia dane seriali.

Obsługuje CORS, więc można korzystać z niego w aplikacji przeglądarkowej.

| Cel               | Endpoint                                   |
| ----------------- | ------------------------------------------ |
| Wyszukiwanie      | https://api.tvmaze.com/search/shows?q=dark |
| Szczegóły         | https://api.tvmaze.com/shows/1             |
| Opcjonalna obsada | https://api.tvmaze.com/shows/1/cast        |

Wyniki wyszukiwania zawierają obiekty z score i show.

Dane serialu znajdują się w show.

Obraz może mieć wartość null. Aplikacja musi tolerować również inne brakujące wartości.

API może odpowiedzieć statusem 429 przy ograniczeniu liczby zapytań.

Dodaj wskazanie TVmaze jako źródła oraz odnośnik do serwisu.

Dokumentacja określa licencję danych jako CC BY-SA — uwzględnij jej warunki przy publikacji.

## 2. Pierwsze ćwiczenie

Zanim zaczniesz pobieranie:

- [ ] Otwórz przykład wyszukiwania w przeglądarce.
- [ ] Znajdź tytuł.
- [ ] Znajdź identyfikator.
- [ ] Znajdź ocenę.
- [ ] Sprawdź strukturę obrazka.
- [ ] Zobacz zapis opisu.
- [ ] Porównaj odpowiedź wyszukiwania i szczegółów.
- [ ] Zapisz potrzebne pola w notatkach.

Nie zakładaj struktury odpowiedzi na podstawie wyglądu interfejsu.

## 3. Wyszukiwarka formularzowa

1. Użytkownik wpisuje tytuł.
2. Naciska Enter lub „Szukaj”.
3. Aplikacja usuwa spacje z początku i końca.
4. Puste zapytanie nie wywołuje API.
5. Pojawia się ładowanie.
6. Po odpowiedzi pojawiają się wyniki albo komunikat.
7. Nagłówek wyników pokazuje wysłaną frazę.

Minimalna długość zapytania: 2 znaki.

To nasza decyzja interfejsu, nie wymaganie API.

Do parametrów użyj URLSearchParams lub poprawnego kodowania przez encodeURIComponent.

## 4. Wpisywana fraza a wysłane zapytanie

To nie zawsze jest ta sama wartość.

Przykład:

- wyszukałeś „dark”;
- wyniki dotyczą „dark”;
- zacząłeś wpisywać „friends”;
- jeszcze nie wysłałeś formularza.

Nagłówek nadal powinien informować, że pokazujesz wyniki dla „dark”.

## 5. Filtr gatunku — wersja 1.0

Filtr działa na otrzymanych wynikach, nie na całej bazie seriali.

Zmiana gatunku:

- nie wykonuje nowego zapytania;
- przelicza widoczną listę;
- aktualizuje licznik.

Opcje gatunków możesz wyprowadzić z wyników.

Do usunięcia powtórzeń wykorzystaj Set.

Nowe wyszukiwanie resetuje filtr gatunku.

## 6. Sortowanie

Opcje:

- trafność;
- tytuł A–Z;
- ocena malejąco.

Trafność:

- zachowaj pierwotną kolejność wyników.

Tytuł:

- wykorzystaj localeCompare().

Ocena:

- brak oceny umieszczaj na końcu;
- nie pokazuj braku oceny jako zera.

Sortuj kopię tablicy, aby nie niszczyć kolejności źródłowej.

## 7. Wyszukiwanie lokalne

W widoku „Moja lista” wyszukujesz w zapisanych serialach.

Nie wywołujesz wtedy API.

Przećwicz:

- przycinanie spacji;
- porównywanie bez rozróżniania wielkości liter;
- łączenie wyszukiwania z filtrem statusu;
- aktualizację licznika;
- komunikat braku dopasowań.

## 8. Rozszerzenie — wyszukiwanie podczas pisania

Dopiero po wersji formularzowej:

- odczekaj około 400 ms od ostatniego znaku;
- anuluj poprzedni timer;
- nie wysyłaj pustych i za krótkich zapytań;
- anuluj wcześniejsze żądanie;
- pilnuj, aby starsza odpowiedź nie nadpisała nowszej.

Przećwiczysz:

- setTimeout;
- clearTimeout;
- domknięcia;
- asynchroniczność.

## 9. Obsługa zapytania

Zaplanuj osobno:

- rozpoczęcie ładowania;
- poprawną odpowiedź;
- pustą tablicę;
- błąd HTTP;
- błąd połączenia;
- anulowanie;
- zakończenie ładowania.

fetch() nie zgłasza automatycznie wyjątku przy każdym błędnym statusie HTTP.

Sprawdź response.ok, zanim potraktujesz odpowiedź jako sukces.

Dokumentacja:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## 10. Komunikaty

| Sytuacja             | Komunikat                                                      |
| -------------------- | -------------------------------------------------------------- |
| Puste pole           | Wpisz tytuł serialu.                                           |
| Za krótka fraza      | Wpisz co najmniej 2 znaki.                                     |
| Ładowanie            | Szukamy seriali…                                               |
| Brak wyników         | Nie znaleziono seriali dla tej frazy.                          |
| Błąd                 | Nie udało się pobrać wyników. Spróbuj ponownie.                |
| Ograniczenie zapytań | Zbyt wiele zapytań. Spróbuj za chwilę.                         |
| Błąd zapisu          | Zmiana działa teraz, ale nie udało się jej zapisać na później. |

Nie używaj alert() jako podstawowego sposobu komunikowania stanu.

Ponowienie powinno korzystać z ostatniego wysłanego zapytania, a nie przypadkowej aktualnej zawartości pola.

## 11. Nakładające się żądania

Scenariusz:

1. Wysyłasz A.
2. Wysyłasz B.
3. B wraca szybciej.
4. A wraca później.

Na ekranie mają zostać wyniki B.

W wersji 0.1 możesz blokować ponowne wysłanie formularza podczas pobierania.

W wersji 1.0 przećwicz:

- anulowanie poprzedniego żądania;
- identyfikator aktualnego zapytania.

Pilnuj również catch i finally.

Stare żądanie nie powinno:

- usuwać aktualnego błędu;
- wyłączać ładowania nowszego żądania;
- nadpisywać wyników.

Przejście do „Mojej listy” podczas pobierania nie może zostać cofnięte przez późną odpowiedź.

Dokumentacja:
https://developer.mozilla.org/en-US/docs/Web/API/AbortController

## 12. Bezpieczne wyświetlanie tekstu

Tytuły, wpisaną frazę i komunikaty zawierające dane wstawiaj przez textContent.

Nie wstawiaj surowego opisu z API do innerHTML.

Opis może zawierać znaczniki. W tym projekcie wybieramy zwykły tekst:

1. Przeanalizuj opis w odłączonym dokumencie przez DOMParser.
2. Pobierz jego treść tekstową.
3. Wstaw ją przez textContent.
4. Nie przenoś węzłów otrzymanego HTML do strony.

Samo DOMParser nie jest sanitizacją HTML.

Bezpieczeństwo tego wariantu wynika z końcowego wyświetlenia tekstu.

## 13. localStorage

Model danych znajdziesz w pliku 03.

- [ ] Obsłuż brak zapisu.
- [ ] Obsłuż błędny JSON.
- [ ] Sprawdź kształt odczytanej wartości.
- [ ] Obsłuż wyjątek przy zapisie.
- [ ] Nie informuj o trwałym zapisaniu, jeśli zapis się nie udał.
- [ ] Nie czyść całego localStorage przeglądarki.

Uszkodzony zapis nie powinien wyłączyć aplikacji.

Nie zapisuj haseł ani sekretów. Nie dodajemy ich też do repozytorium.

Dokumentacja:
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

## Następny krok

Sprawdź [scenariusze testowe](07-Testy-dokumentacja-nauka.md) i zapisz zakończoną zmianę w [Git](05-Git-GitHub-publikacja.md).
