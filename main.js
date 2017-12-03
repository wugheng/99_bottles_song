module.exports=function main(){
   let song=joint();
   console.log(song);
}

function sentence_one(){
    let sentence='99 bottles of beer on the wall, 99 bottles of beer.\n';
    sentence+='Take one down and pass it around, 98 bottles of beer on the wall.\n'
    return sentence;
}

function divide_number(str){
    let arr = str.match(/\d+(.\d+)?/g);
    let arrstr=[];
    for(let i=0;i<str.length-1;i++){
        arrstr[i]=parseInt(arr[i]);
        arrstr[i]--;
        arr[i]=arrstr[i].toString();
    }
    let string=arr[0]+" bottles of beer on the wall, "+arr[1]+" bottles of beer.\n" +
        "Take one down and pass it around, "+arr[2]+" bottles of beer on the wall.\n"
    if(parseInt(arr[0])===1){
        string=string.replace(/1 bottles/,"1 bottle");
    }
    if(parseInt(arr[1])===1){
        string=string.replace(/1 bottles/,"1 bottle");
    }
    if(parseInt(arr[2])===1){
       string=string.replace(/1 bottles/,"1 bottle");
    }
    if(parseInt(arr[2])===0){
        string=string.replace("0","no more");
    }
    return string;
}

function joint(){
    let song=sentence_one();
    let strdiv=divide_number(song);
    for(let i=98;i>=1;i--){
        song=song.concat(strdiv);
        strdiv=divide_number(strdiv);
    }
    song+="No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall."
    return song;
}