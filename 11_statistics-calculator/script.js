//calculate mean logic
const getMean = (array) => array.reduce((acc,el)=>acc +el, 0)/array.length;

//calculate median logic
const getMedian = (array) => {
    const sorted = array.sort((a,b) => a - b);
    const median = array.length %2 === 0 ?
    getMean([sorted[array.length/ 2], sorted[array.length/ 2 -1]]) :
    sorted[Math.floor(array.length/2)];
    return median;
}

//get the number that appears most often in the list
const getMode = (array) => {
    const counts = {}
}

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    document.querySelector('#median').textContent = median;
    document.querySelector('#mean').textContent = mean;
}