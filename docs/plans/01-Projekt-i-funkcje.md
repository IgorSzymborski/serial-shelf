# Serial Shelf — projekt i funkcje

[Spis treści](00-START.md)

## 1. Co budujemy?

Serial Shelf to aplikacja, w której użytkownik:

1. Wyszukuje serial po tytule.
2. Przegląda wyniki.
3. Filtruje i sortuje otrzymane seriale.
4. Otwiera szczegóły.
5. Dodaje serial do swojej listy.
6. Oznacza zapisany serial jako obejrzany.
7. Wraca do listy po odświeżeniu strony.

Interfejs jest po polsku. Tytuły i opisy pozostają w języku otrzymanym z API.

Aplikacja nie odtwarza seriali i nie potwierdza ich aktualnej dostępności na platformach streamingowych w Polsce.

## 2. Dlaczego ten projekt?

Tracker nauczył Cię pracy ze stanem, formularzami, tablicami i localStorage.

Tutaj dołożysz:

- dane z zewnętrznego źródła;
- oczekiwanie na odpowiedź;
- błędy sieci i brak wyników;
- wyszukiwanie;
- moduły;
- zależności między elementami interfejsu;
- pełniejszą responsywność;
- historię pracy na GitHubie.

Nie musisz użyć każdej funkcji JavaScriptu. Celem jest zrozumienie mechanizmów potrzebnych przy tworzeniu aplikacji i późniejszej nauce Reacta.

## 3. Wersja 0.1 

- [ ] Repozytorium na GitHubie od początku.
- [ ] Responsywny szkielet strony.
- [ ] Wyszukiwanie po wysłaniu formularza.
- [ ] Pobieranie i wyświetlanie wyników API.
- [ ] Stan początkowy.
- [ ] Stan ładowania.
- [ ] Brak wyników.
- [ ] Obsługa błędu.
- [ ] Karta serialu.
- [ ] Szczegóły w oknie dialogowym.
- [ ] Dodawanie i usuwanie z własnej listy.
- [ ] Zapisywanie listy w localStorage.
- [ ] Widok „Moja lista”.
- [ ] Podstawowe README.
- [ ] Działające demo online.

To ambitny cel na około 12–16 godzin skupionej pracy. Jeśli nauka API lub CSS zajmie więcej czasu, dokończenie przechodzi na kolejny wieczór.

## 4. Wersja 1.0 

- [ ] Filtrowanie wyników według gatunku.
- [ ] Sortowanie wyników.
- [ ] Status „Do obejrzenia” / „Obejrzane”.
- [ ] Wyszukiwanie we własnej liście.
- [ ] Filtrowanie własnej listy według statusu.
- [ ] Poprawne zachowanie przy nakładających się zapytaniach.
- [ ] Odporność na brakujące dane.
- [ ] Obsługa problemu z zapisem.
- [ ] Uporządkowane moduły.
- [ ] Sprawdzenie obsługi klawiaturą.
- [ ] Sprawdzenie na prawdziwym telefonie.
- [ ] Pełne README ze zrzutami ekranu.

## 5. Rozszerzenia po wersji 1.0

Wybierz maksymalnie dwa:

- wyszukiwanie po przerwie w pisaniu;
- cache wyników w pamięci;
- zapamiętywanie zapytania w adresie URL;
- własna ocena lub krótka notatka;
- pobieranie obsady;
- testy funkcji przetwarzających dane.

Na start nie dodajemy:

- kont użytkowników;
- backendu;
- śledzenia odcinków;
- kalendarza premier;
- systemu rekomendacji.

## 6. Widok „Odkrywaj”

Zawiera:

- logotyp;
- przełączanie widoków;
- nagłówek „Dobry serial. Dobry wieczór.”;
- krótkie wprowadzenie;
- formularz wyszukiwania;
- komunikat aktualnego stanu;
- wyniki;
- filtrowanie i sortowanie;
- stopkę ze źródłem danych.

Przy pierwszym uruchomieniu pokaż:

> Jaki serial masz na myśli? Wpisz tytuł, aby rozpocząć.

Nie musisz pobierać przypadkowych seriali na start.

## 7. Karta serialu

Karta zawiera:

- plakat albo blok „Brak plakatu”;
- tytuł;
- rok premiery albo „Brak daty”;
- gatunki;
- ocenę albo „Brak oceny”;
- przycisk „Szczegóły”;
- przycisk dodania do listy.

Po zapisaniu:

- przycisk zmienia stan;
- aktualizuje się licznik zapisanych seriali;
- ten sam serial nie może zostać dodany drugi raz.

W pierwszej wersji przycisk może działać jako przełącznik dodaj/usuń.

Nazwa przycisku powinna jasno opisywać aktualną akcję. Gdy widoczny tekst brzmi „Na liście”, dostępna nazwa może brzmieć „Usuń Dark z listy”.

Nie rób całej karty przyciskiem zawierającym kolejne przyciski.

## 8. Szczegóły serialu

Otwierane w natywnym elemencie dialog.

Zawartość:

- tytuł;
- plakat;
- opis;
- gatunki;
- język;
- data premiery;
- ocena;
- status emisji;
- dodanie lub usunięcie z listy;
- odnośnik do strony serialu w TVmaze;
- przycisk zamknięcia.

Status emisji i Twój status oglądania to różne informacje.

Desktop:

- plakat z lewej;
- treść z prawej.

Telefon:

- jedna kolumna;
- przewijana zawartość.

W wersji 0.1 możesz użyć danych z wyników wyszukiwania. Osobne pobieranie szczegółów dołóż wtedy, gdy jest potrzebne.

## 9. Widok „Moja lista”

Podstawowa wersja:

- zapisane seriale;
- licznik;
- usuwanie;
- otwieranie szczegółów.

W wersji 1.0:

- lokalne wyszukiwanie po tytule;
- filtr „Wszystkie / Do obejrzenia / Obejrzane”;
- zmiana statusu;
- sortowanie po dacie dodania.

Pusta lista:

> Twoja lista czeka na pierwszy serial.

Dodaj przycisk przejścia do wyszukiwania.

Lista zawiera seriale, ale aktualny filtr niczego nie pokazuje:

> Brak seriali pasujących do tych ustawień.

To dwa różne stany.

## Następny krok

Zobacz [harmonogram](06-Harmonogram.md), przygotuj [repozytorium](05-Git-GitHub-publikacja.md) i zacznij [interfejs](02-Design-HTML-CSS.md).