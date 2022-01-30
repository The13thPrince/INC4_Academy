string_to_change = "https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/";

 function get_domen(str){
     a = str.indexOf("//"); //находим последний символ перед доменным именем
     str = str.slice(a + 2);
     b = str.indexOf("/"); // находим символ следующий после доменного имени
     str = str.slice(0,b);
    return str;
 }

 function get_name(str){
     str = str.slice(str.indexOf(domen) + domen.length + 1, str.length-1);  // вырезаем отрезок между символом(разделителем) после доменного имени и следующим разделителем   
     return str;
 }

 domen =  get_domen(string_to_change);
 article_name = get_name(string_to_change);
 while(article_name.indexOf("-" )!== -1){ // заменяет тире на пробелы
     article_name = article_name.replace("-"," ");
 }    

function capitalize(str){
    word = str.split(" ");
    for (var i = 0; i < word.length; i++){
        word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);
    }
    str = word;
    return str;
}



 article_name = capitalize(article_name);
 console.log(domen);
 console.log(article_name.join(" "));