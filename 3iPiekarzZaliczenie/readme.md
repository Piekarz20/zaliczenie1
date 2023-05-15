> [!TIP]
>
> ### _Odtwórz filmy dołączone do zadana - przedstawiają funkcjonalność aplikacji w wersji rozszerzonej!!!_

# Wersja podstawowa:

1. Zmień tytuł dokumentu na "Zadanie zaliczeniowe", w stopce dokumentu zmień dane na Twoje imię, nazwisko, klasę i rok szkolny

## Pierwszy formularz:

1. Wyszukaj w drzewie DOM wszystkie elementy potrzebne do realizacji zadania
1. Po kliknięciu na przycisk "zatwierdź" lub na zdarzenie wysłania pierwszego formularza uruchom pierwszą część skryptu
1. Sprawdź czy wypełnione zostało pole z imieniem użytkownika, jeśli nie - w odpowiednim miejscu wyświetl stosowną informację.
1. Jeśli zostało wprowadzone imię wyświetl losowe powitania z tablicy greetings z pliku **_data.js_** - tyle ile jest liter we wprowadzonym imieniu. Powitania powinny być utworzone w postaci nowego elementu p zawierającym wylosowane z tablicy powitanie i imię wprowadzone przez użytkownika.
1. Sprawdź, które pole radio zostało wybrane przez użytkownika i wyświetl stosowny komunnikat (np.: _"Ja też lubię psy, Ja też lubię koty"_)

## Drugi formularz:

1. Sprawdź czy została wprowadzona w polu _num1_ poprawna wartość, możliwa do zamiany na liczbę, jeśli nie wyświetl w polach displaySum i displayDivide stosowną inormację.
1. Sprawdź czy wartość w polu _num2_ jest równa 0 - jeśi tak wyświetl w odpowidnim miejscu (_displayDivide_) stosowną informację
1. Jeśli wprowadzone zostały prawidłowe dane wyświetl wyniki działań w polach _displaySum_ i _displayDivide_ (np.: _"suma liczb 4 i 0 wynosi: 4", "iloraz liczb 4 i 3 wynosi: 1.33"_). Wyniki możesz wpisać wykorzystująć odpowiednią właściwość elementu

---

# Wersja rozszerzona:

## Pierwszy formularz:

1. Dodaj dynamiczną zmianę koloru komunikatów, błedy w kolorze <span style="color: #F00"> czerwonym</span>, _powitanie_ w kolorze <span style="color: #0F0"> zielonym</span> (utwórz odpowiedni element **span** i podłącz go do elemenntu **p** tworzącego komunikat, możesz dynamicznie dodać przygotowaną klasę w arkuszu CSS lub dynamicznie zmienić styl elementu)
1. Sprawdź czy imię ma co namniej 3 znaki - jeśli nie, wyświetl stosowny komunikat o błędzie (_"imię jest za krótkie"_)
1. Sprawdź czy imię zawiera cyfrę - przerwij wyszukiwanie po pierszym wystąpieniu cyfry w imieniu. Jeśli tak wyświetl stosowny komunikat o błędzie (np.: _"to dziwne - Twoje imię zawiera cyfrę: 4"_)
1. Sprawdź czy imię jest żeńskie czy męskie (jeśli kończy się na "a" prawdopodobnie imię żeńskie) - wyświetl stosowny komunikat w postaci utworzonego elemenu **h4** z tekstem (np.: _"Wszsytko wskazuje na to, że masz żeńskie imię"_)
1. Dodatkowo wyklucz specyficzne imiona (Nel, Kuba) - wykorzystaj do tego przygotowaną w pliku **_data.js_** tablicę **_exceptionalNames_** z obiektami zawierającymi tablice imion.
1. Sprawdź czy imię znajduje sie w tablicy distinguishedNames w pliku data.js - jeśli tak utwórz element h3, dodaj do niego odpowiedni tekst (np.: _"Marian, Twoje imię jest na liście imion wyjątkowych"_), nie dbaj o odmianę imienia ;) i dołączgo do elementu o identyfikatorze _displayAddingItems_

## Drugi formularz:

1. Komunikaty błędów wypisz w kolorze <span style="color: #F00"> czerwonym</span>, prawidłowe wyniki w kolorze <span style="color: #0F0"> zielonym</span> (zmień w JS dynamicznie styl lub dynamicznie dodaj/usuń klasę z elementu)
1. Dodaj do pola num1 obiekt nasłuchujący na zdarzenie "_input_", w którym na bierząco, po każdej zmianie wartości w tym polu, będziesz kontrolował czy możliwa jest zamiana tej wartości na liczbę.

---

### Niezbędnik

document.querySelector()

document.querySelectorAll('[name="someElementName"]')

document.querySelector('[name="someElementName"]:checked')

document.createElement('elementName')

element.appendChild('anotherElement')

element.append('anotherElement')

preventDefault()

element.addEventListener('input', function(){})

array.forEach(elem => {})

array.includes('something') - sprawdza czy tablica zawiera element 'something'

element.classList.add('jakasKlasa')

element.classList.remove('jakasKlasa')

element.classList.toggle('jakasKlasa')

element.style.fonSize = '1rem'

element.style.cssText=\`font-size: 1rem; display: flex;\`

\`Jakiś tekst ${expressionJS}\`

someNumber.toFixed()

array[Math.floor(Math.random() * array.length)] - losowy element tablicy

isNaN(parseInt(num1.value))

warunek ? "co jeśli prawda" : "co jeśli fałsz"
