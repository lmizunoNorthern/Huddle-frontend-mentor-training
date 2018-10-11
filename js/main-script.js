
function animateValue(id, start, end, textAfter) {


    let current = start;
    let increment = 0.001;

    let obj = document.getElementById(id);
    let innerText = '';

    let timer = setInterval(function() {
        current += increment;
        innerText = current.toFixed(3) + textAfter;
        obj.innerHTML = innerText;
        if (current >= end) {
            current = start;
        }
    }, 100);
}

animateValue('stats-header-1', 1.270, 1.400,'k+');
animateValue('stats-header-2', 2.500, 2.700,'m+');

