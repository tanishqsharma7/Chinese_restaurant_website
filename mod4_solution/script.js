var array =["Yakoov","John","Jen","jason","paul","frank","larry","paula","laura","jim"]
for (var i=0;i<array.length;i++){
    if (array[i].charAt(0)==='j' || array[i].charAt(0)==='J'){
        console.log("GoodBye "+ array[i]);
    }
    else{
        console.log("Hello "+ array[i]);
    }
}
