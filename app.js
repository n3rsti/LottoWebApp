window.onload = function(){
    document.querySelector(".random").addEventListener("click", numbersData)
};
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log("Service worker registered", reg))
        .catch((err) => console.log('Service worker not registered', err));
};
/* fetch("https://app.lotto.pl/wyniki/?type=dl")
    .then(resp => {
        console.log(resp);
    }) */
function compareNumbers(a, b) {
    return a - b
}
function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}
function randomNum(){
    let numbers = [];
    let i = 0;
    while(i < 6){
        let num = Math.floor(Math.random() * 49) + 1;
        if(numbers.includes(num)){}
        else {
            numbers.push(num);
            i++;
        }
    }
    return numbers;
};
function numbersData(){
    let numbers = randomNum()
    let sortNumbers = numbers.sort(compareNumbers)
    for(let i = 1; i < 7; i++){
        document.querySelector(parse('.result%s', i)).innerText = sortNumbers[i - 1]
        
    }
}

