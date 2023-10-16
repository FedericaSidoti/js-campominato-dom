Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

- creare in html la base della pagina con il contenitore grid e con il bottone 'gioca'
- creare il css con la classe bg-blue e bg-red (in previsione della logica di gioco)
- recuperare il bottone come domelement
- aggiungere un addEventListener al bottone
    - svuotare eventualmente la griglia
    - PER OGNI iterazione di un ciclo da 100 iterazioni
        - stampare in pagina una cella numerata
        - stampare nella cella il numero che contiene
        - aggiungere l' eventlistener alla casella stampata con parametri click, ONCLICKCELL
-creare una funzione ONCLICKCELL che aggiunga a THIS (il soggetto che la invoca = casella corrente nel ciclo) la classe bg-green
(ALLA FINE RIPROVARE CON FUNZIONI PER SVUOTARE E RIEMPIRE)





 
