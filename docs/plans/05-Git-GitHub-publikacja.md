# Serial Shelf — Git, GitHub i publikacja

[Spis treści](00-START.md)

## 1. Pierwsza konfiguracja

Utwórz katalog projektu oraz pierwsze pliki.

W terminalu, w katalogu projektu:

```bash
git init
git branch -M main
git add index.html css js README.md .gitignore
git commit -m "chore: initialize Serial Shelf"
```

Polecenie git add zakłada, że wymienione pliki i foldery istnieją.

Git nie zapisuje pustych folderów. Katalogi css i js powinny zawierać pierwsze pliki.

Na GitHubie utwórz puste repozytorium serial-shelf.

Jeśli README tworzysz lokalnie, nie dodawaj drugiego automatycznie na GitHubie.

Skopiuj adres repozytorium:

```bash
git remote add origin TWOJ_ADRES_REPOZYTORIUM
git push -u origin main
```

Zastąp TWOJ_ADRES_REPOZYTORIUM rzeczywistym adresem.

## 2. Rozpoczęcie nowej funkcji

```bash
git status
git switch main
git pull --ff-only
git switch -c feature/search
```

Jeśli kontynuujesz istniejący branch:

```bash
git switch feature/search
```

Nie twórz go ponownie przez -c.

Przed zmianą brancha sprawdzaj git status.

Niezacommitowana praca nie znika automatycznie ani nie należy magicznie do konkretnego brancha.

## 3. Zapis zmiany

```bash
git diff
git add js/app.js
git diff --staged
git commit -m "feat: add show search"
git push -u origin feature/search
```

Dobieraj pliki do rzeczywistej zmiany.

Po ustawieniu powiązania brancha zwykle wystarczy:

```bash
git push
```

## 4. Pull request

1. Wypchnij branch.
2. Otwórz pull request do main.
3. Opisz zmianę.
4. Napisz, jak ją sprawdziłeś.
5. Przejrzyj „Files changed”.
6. Scal przez GitHub.
7. Lokalnie przejdź na main.
8. Pobierz zmiany.
9. Utwórz kolejny branch.

W tym projekcie możesz wybierać „Create a merge commit”, aby historia branchy była łatwa do prześledzenia.

## 5. Proponowane branche

- feature/layout
- feature/search
- feature/details
- feature/watchlist
- feature/filters
- fix/responsive-layout
- docs/readme

Nie potrzebujesz brancha dla każdej drobnej zmiany koloru.

## 6. Przykłady commitów

- feat: render search results
- feat: persist watchlist
- fix: handle missing posters
- fix: keep latest search results
- style: improve mobile cards
- docs: add setup instructions

Commit opisuje konkretny krok.

Nie musi oznaczać zakończenia całego modułu.

## 7. .gitignore

Jeżeli używasz takich elementów, ignoruj:

- node_modules/
- .env
- .DS_Store
- Thumbs.db

Nie dodawaj reguł, których znaczenia nie rozumiesz.

## 8. Publikacja przez GitHub Pages

Projekt korzysta ze zwykłych plików HTML/CSS/JS, bez procesu budowania.

Po wypchnięciu działającej wersji:

1. Otwórz ustawienia repozytorium.
2. Przejdź do Pages.
3. Wybierz publikację z brancha.
4. Wskaż main i katalog główny.
5. Poczekaj na zakończenie publikacji.
6. Otwórz otrzymany adres.
7. Sprawdź aplikację.

Dokumentacja:
https://docs.github.com/en/pages/quickstart

## 9. Pułapki publikacji

- Używaj ścieżek względnych, np. ./css/styles.css.
- Sprawdź wielkość liter w nazwach plików.
- Nie odwołuj się do plików z dysku komputera.
- API i obrazki powinny korzystać z HTTPS.
- Sprawdź Network i Console na opublikowanej stronie.
- Otwórz demo na prawdziwym telefonie.

Adres demo dodaj do opisu repozytorium i README.

## 10. README

Powinno zawierać:

1. Nazwę i krótkie wyjaśnienie projektu.
2. Link do działającego demo.
3. Zrzut desktopu i telefonu.
4. Listę działających funkcji.
5. Technologie.
6. Instrukcję uruchomienia lokalnie.
7. Źródło danych i atrybucję.
8. Ograniczenia.
9. Najważniejsze rzeczy, których się nauczyłeś.
10. Planowane rozszerzenia, oddzielone od gotowych funkcji.

Przykładowe ograniczenia:

- lista zapisuje się w danej przeglądarce;
- nie ma kont ani synchronizacji;
- opisy nie są automatycznie tłumaczone;
- wyszukiwanie wymaga dostępu do API;
- aplikacja nie potwierdza dostępności na platformach streamingowych.

Nie wpisuj „fully responsive” na podstawie jednego widoku w DevTools.

## Następny krok

Po pierwszym pushu wróć do [harmonogramu](06-Harmonogram.md).

Przed publikacją przejdź [checklistę testów](07-Testy-dokumentacja-nauka.md).
