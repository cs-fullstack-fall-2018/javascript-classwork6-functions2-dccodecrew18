function main() {
    var favNum = parseInt(prompt("Enter a favorite number"));
    alert(favNum)
    above0rbelow()
}
function above0rbelow(newfav){
    if (newfav > 100){
        alert("Greater than 100")
    }
    else if ( newfav< 100){
        alert("Its less than ")
    }
    else{
        alert("Its equal")
    }
}

main();