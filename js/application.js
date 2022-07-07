"use strict";

let  numberOfFilms 

 const personalMovieDB ={
    count:  "",
    movies: {},
    actors: {},
    geners: [],
    privat: true,
    start () {
        numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < -1) {
        numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
        personalMovieDB.count = numberOfFilms
        } ;
    },
    rememberMyFilms(){
        for (let i = 0; i < 1; i++){
        const a = prompt("որ ֆիլմ էք վերջերս դիտել","")
        const b = prompt("ինչքան կգնահատեիք այդ ֆիլմը ","")
        
        if(!isNaN(b) && isNaN(a) && a.trim() != "" && b.trim() != "" && a != null && b != null && a != "" && b != "" && a.length < 30 && typeof(a) !=="number"){
         
            personalMovieDB.movies[a] = b;
            console.log('done');
            
        }else{
            console.log('error')
            i--
        }
        
      }
     
    },
    detectPersonalLevel(){
        if(personalMovieDB.count < 5){
            console.log("Բավականին քիչ ֆիլմեր էք դիտել")
        }else if(personalMovieDB.count > 5 && personalMovieDB.count < 15){
       console.log("Դուք բավականին շատ ֆիլմեր էք դիտել")
        }else if(personalMovieDB.count > 15){
        console.log("դուք կինոմեն եք")
        }else{
            console.log("տեղի է ունեցել սխալ")
        }
    },
    writeYourGenres(){
        for(let i = 1; i <= 2; i++){
            const geners = prompt(`ձեր սիրած Ժանրը${i}`);
            if (geners != null && geners.trim() != "" && geners.length <= 20 && isNaN(geners)) {
                personalMovieDB.geners[i-1] = geners
            } else {
                i--;
            }
        }
        personalMovieDB.geners.forEach( function(item,index) {
            console.log(`Ձեր սիրելի ժանրը ${index + 1}  ${item } ն է`)
        });
    },
    showMyDB (){
        if(personalMovieDB.privat === true){
            console.log(personalMovieDB); 
        }else{
            console.log("Մեր տվյալների բազան փակ է")
        }
        
    },
    isVisibleMyDB(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false
        }else{
            personalMovieDB.privat = true
        }
    }
    
    
     
 }
   
 
const {rememberMyFilms,detectPersonalLevel,writeYourGenres,showMyDB,start, isVisibleMyDB} = personalMovieDB
start ();
rememberMyFilms();
detectPersonalLevel();  
writeYourGenres()
isVisibleMyDB()
showMyDB ()



  
  