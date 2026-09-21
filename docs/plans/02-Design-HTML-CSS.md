# Serial Shelf — design, HTML, CSS i dostępność

[Spis treści](00-START.md)

## 1. Kierunek wizualny

Jasny interfejs inspirowany magazynem filmowym:

- kremowe tło;
- ciemnozielone przyciski i nagłówki;
- pomarańczowy akcent;
- duże nagłówki szeryfowe;
- plakaty jako główne elementy wizualne;
- cienkie obramowania;
- niewiele cieni;
- czytelna typografia;
- dużo przestrzeni.

Wizualizacja z rozmowy jest punktem odniesienia.

Dane, oceny i plakaty na niej są ilustracyjne. W aplikacji wyświetlasz rzeczywistą odpowiedź API.

Dekoracyjny las w nagłówku jest opcjonalny. Najpierw odtwórz układ, typografię i kolory. Grafikę dodaj później, z odpowiednim źródłem i prawem do użycia.

Hamburger z wizualizacji nie jest potrzebny. Mamy dwa widoki — ich przyciski mogą pozostać widoczne również na telefonie.

## 2. Kolory

| Zastosowanie               | Kolor   |
| -------------------------- | ------- |
| Tło strony                 | #F7F3EA |
| Tło kart i formularzy      | #FFFDF8 |
| Główny zielony             | #203E35 |
| Zielony po najechaniu      | #152C25 |
| Akcent pomarańczowy        | #B94E2B |
| Główny tekst               | #242824 |
| Tekst drugorzędny          | #62685F |
| Jasne zielone tło          | #E4ECE5 |
| Delikatne obramowanie kart | #DAD3C7 |
| Obramowanie pól            | #7B8278 |
| Błąd                       | #A32D2D |

Zapisz kolory jako właściwości niestandardowe CSS w :root.

Jasne obramowanie kart jest dekoracyjne. Pola formularza powinny być wyraźniejsze.

Kontrast tekstu i stanów interaktywnych sprawdź na gotowej stronie.

## 3. Fonty

Nagłówki i logotyp:

- DM Serif Display;
- grubość 400;
- fallback: Georgia, serif.

Tekst, formularze i przyciski:

- DM Sans;
- grubości 400, 500 i 700;
- fallback: system-ui, sans-serif.

Źródła:

- https://fonts.google.com/specimen/DM+Serif+Display
- https://fonts.google.com/specimen/DM+Sans

Nie pobieraj wszystkich dostępnych grubości.

## 4. Rozmiary i odstępy

| Element                       | Propozycja                      |
| ----------------------------- | ------------------------------- |
| Maksymalna szerokość treści   | 1200 px                         |
| Marginesy boczne telefonu     | 16–20 px                        |
| Marginesy boczne desktopu     | 32 px                           |
| Główny nagłówek               | około 36–64 px                  |
| Nagłówek sekcji               | 26–32 px                        |
| Podstawowy tekst              | 16 px                           |
| Pomocniczy tekst              | 14 px                           |
| Minimalna wysokość przycisku  | 44 px                           |
| Zaokrąglenie pól i przycisków | 6–8 px                          |
| Zaokrąglenie karty            | 8–12 px                         |
| Odstępy                       | 4, 8, 12, 16, 24, 32, 48, 64 px |

Do płynnego skalowania nagłówków możesz wykorzystać clamp().

Nie ustawiaj sztywnej wysokości całych kart ani sekcji tekstowych.

## 5. HTML — wymagania

- [ ] Poprawny język dokumentu.
- [ ] Meta viewport.
- [ ] Sensowny tytuł i opis strony.
- [ ] header, main, footer.
- [ ] Jeden główny nagłówek h1.
- [ ] Logiczna hierarchia kolejnych nagłówków.
- [ ] Wyszukiwarka jako formularz.
- [ ] Pole z prawdziwym label.
- [ ] Określone typy przycisków.
- [ ] Lista wyników z powtarzalnymi kartami.
- [ ] Natywne selecty do filtrowania i sortowania.
- [ ] Natywny dialog szczegółów.
- [ ] Widoczne źródło danych.
- [ ] Informacja w noscript, że aplikacja wymaga JS.

Placeholder nie zastępuje etykiety.

Przycisk wykonuje akcję. Link prowadzi pod adres.

Dla przełączników widoków możesz użyć zwykłych przycisków z aktualizowanym aria-pressed.

Nie dodawaj ról ARIA tabów bez pełnej obsługi takiego komponentu.

## 6. Responsywność — mobile first

Zacznij od telefonu.

| Szerokość      | Układ                                       |
| -------------- | ------------------------------------------- |
| Poniżej 640 px | Jedna kolumna kart, formularz pionowo       |
| 640–959 px     | Dwie kolumny kart                           |
| Od 960 px      | Trzy lub cztery kolumny zależnie od miejsca |
| Duży ekran     | Treść ograniczona maksymalną szerokością    |

Breakpoint zmieniaj wtedy, gdy treść przestaje się mieścić.

Na telefonie karta może mieć mały plakat z lewej i informacje z prawej.

Jeśli przyciski robią się ciasne:

- przenieś je do kolejnego wiersza;
- albo zastosuj pionową kartę.

## 7. Co przećwiczyć w CSS?

- Grid do układu wyników.
- Flexbox do nagłówka i grup przycisków.
- gap do odstępów.
- max-width do szerokości treści.
- minmax() do elastycznych kolumn.
- aspect-ratio do plakatów.
- object-fit do wypełniania miejsca obrazem.
- clamp() do typografii.
- Media queries.
- :hover.
- :focus-visible.
- :disabled.
- prefers-reduced-motion.

## 8. Wymagania dla układu

- [ ] Brak poziomego przewijania przy 360 px.
- [ ] Długi tytuł nie rozpycha karty.
- [ ] Przyciski zawijają się poprawnie.
- [ ] Pola mają czytelny tekst.
- [ ] Plakat zachowuje proporcje.
- [ ] Brak plakatu nie psuje układu.
- [ ] Fokus jest widoczny.
- [ ] Telefon nie wymaga hover.
- [ ] Dialog mieści się w ekranie i przewija.
- [ ] Powiększenie strony do 200% nie blokuje obsługi.

Nie naprawiaj poziomego przewijania samym overflow-x: hidden.

Znajdź element, który wychodzi poza ekran.

## 9. Dostępność

- [ ] Wszystkie akcje działają z klawiatury.
- [ ] Kolejność Tab jest logiczna.
- [ ] Fokus nie znika po zamknięciu szczegółów.
- [ ] Dialog ma dostępną nazwę.
- [ ] Jest widoczny przycisk zamknięcia.
- [ ] Działa Escape.
- [ ] Stan zapisania nie opiera się tylko na kolorze.
- [ ] Przyciski z ikonami mają zrozumiałe nazwy.
- [ ] Informacja o wynikach może być ogłaszana przez aria-live="polite".
- [ ] Cała siatka kart nie jest stale odczytywanym komunikatem.
- [ ] Animacje są krótkie i nie są konieczne do obsługi.

Natywny dialog otwierany przez showModal() zapewnia część zachowań modalnych.

Nadal sprawdź:

- fokus;
- zamknięcie;
- powrót do elementu otwierającego;
- zachowanie na telefonie.

## 10. Dokumentacja

- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout

## Następny krok

Po formularzu i statycznej karcie przejdź do [architektury JS](03-JavaScript-architektura.md) oraz [API](04-API-i-wyszukiwarka.md).
