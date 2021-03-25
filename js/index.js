
  /**
   * Snack 1.
   * Il software deve chiedere per 5 volte all’utente di inserire un numero.
   * Il programma stampa la somma di tutti i numeri inseriti.
   * Esegui questo programma in due versioni, con il for e con il while
   **/
 

//  var richieste = 5;

//  var somma = 0;

//  //FOR VERSION
//   for (var i = 1; i <= richieste; i++) {
//   var num = parseInt(prompt('Inserisci numero '  + i + ' di ' + richieste));
//   console.log(num);

//   somma += num;
//   }

//   console.log('Totale ' + somma);

  //WHILE VERSION
//  var items = 1;
//  while (items < richieste) {
//      var num = parseInt(prompt('Inserisci numero ' + items + ' di ' + richieste));

//      somma+= num;

//      items++;
//  }
//  console.log('risultato',items);


//  var num = parseInt(prompt('Inserisci numero'));

//  if (num % 2 === 0) {
//      console.log(num);
//  }else {
//      console.log(num + 1);
//  }


  
//   /**
//    * Snack 3.
//    * Generatore di “nomi cognomi” casuali prendendo una lista di nomi e una lista di cognomi,
//    *  Gatsby vuole generare una falsa lista di 3 invitati.
//    * */
 

//MY VERSION
// //  var nomi = ['luca','paolo','mimmo','ciccio'];
// //  console.log(nomi);
// //  var cognomi = ['bianchi', 'neri' , 'rossi' , 'verdi'];
// //  console.log(cognomi);

// //  var randomItem = nomi[Math.floor(Math.random()nomi.length)] + ' ' + cognomi[Math.floor(Math.random()cognomi.length)];
// //  var randomItem2 = nomi[Math.floor(Math.random()nomi.length)] + ' ' + cognomi[Math.floor(Math.random()cognomi.length)];
// //  var randomItem3 = nomi[Math.floor(Math.random()nomi.length)] + ' ' + cognomi[Math.floor(Math.random()cognomi.length)];

// //  console.log(randomItem + ' ' + randomItem2 + ' ' + randomItem3);


//CORRECT VERSION
//  var nomi = ['luca','paolo','mimmo','ciccio'];
//  console.log(nomi);
//  var cognomi = ['bianchi', 'neri' , 'rossi' , 'verdi'];
//  console.log(cognomi);

//  var listaNomeCompleto = [];

//  for (var i = 0; i < 3; i++) {
//      //CREAZIONE NOMI RANDOM
//      var nomiRandom = Math.floor(Math.random() *nomi.length);
//      console.log(nomiRandom);
    
//     //CREAZIONE COGNOMI RANDOM
//      var cognomiRandom = Math.floor(Math.random() *cognomi.length);
//    console.log(cognomiRandom);

//   //CREAZIONE NOME COMPLETO
//     var nomeCompleto = nomi[nomiRandom] + " "  + cognomi[cognomiRandom];
    
//    // PUSH DENTRO ARRAY VUOTO
//       listaNomeCompleto.push(nomeCompleto);
//  }
//  console.log(listaNomeCompleto);



//   /**
//    * Snack 4.
//    * Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
//    * */
 

//  var numeri = [1,2,3,4,5,6,9,8,7,4,5,66,55,44,88,77,44,11,22];

//  var somma = 0;

//  var items = 0;

//  while (items < numeri.length) {
//      console.log(numeri[items]);
//      if (items % 2 !== 0) {
//          somma+=numeri[items];
//      }
//      items++;
//  }
//  console.log(somma);


 /**
  * Snack 5 - Bonus
  * Crea due array di numeri che hanno un numero di elementi diversi.
  * Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
  */
  
 

  var num1 = [1,2,3,4];
  var num2 = [5,6];

  console.log(num1);
  console.log(num2);

  var numRandom = Math.floor(Math.random()* 10);

  while(num1.length !== num2.length) {
      if (num1.length < num2.length) {
          num1.push(numRandom) ;
    
      } else if (num1.length > num2.length){
          num2.push(numRandom);
      }
  }
  if (num1.length == num2.length) {
      console.log('uguali');
  }

  console.log(num1);
  console.log(num2);