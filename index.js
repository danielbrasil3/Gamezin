function go()
{
    var circle = document.querySelector('#circleProgress')
    var circle1 = document.querySelector('#circleProgress1')
    var circle2 = document.querySelector('#circleProgress2')
    var porcento = document.querySelector('#porcento').value
    var setasvg = document.querySelector('#seta')
    var number = document.querySelector('#numberProgress').value;
    document.querySelector('.percentage').innerHTML = number + '%'
    document.querySelector('.percentage1').innerHTML = number + '%'
    document.querySelector('.percentage2').innerHTML = number + '%'
    circle.style.strokeDashoffset = 226 - (226 * number) / 100;
    circle1.style.strokeDashoffset = 226 - (226 * number) / 100;
    circle2.style.strokeDashoffset = 226 - (226 * number) / 100;
    if (porcento <= 0) {
        setasvg.style.stroke = '#FF0000'
    } else {
        setasvg.style.stroke = '#4CE13F'
    }
}

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.periodo}</td>
        <td>${order.margemdelucro}</td>
        <td>${order.receita}</td>
        <td>${order.lucro}</td>
        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});