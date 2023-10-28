function go()
{
    var circle = document.querySelector('#circleProgress')
    var circle1 = document.querySelector('#circleProgress1')
    var circle2 = document.querySelector('#circleProgress2')
    var number = document.querySelector('#numberProgress').value;
    document.querySelector('.percentage').innerHTML = number + '%'
    document.querySelector('.percentage1').innerHTML = number + '%'
    document.querySelector('.percentage2').innerHTML = number + '%'
    circle.style.strokeDashoffset = 226 - (226 * number) / 100;
    circle1.style.strokeDashoffset = 226 - (226 * number) / 100;
    circle2.style.strokeDashoffset = 226 - (226 * number) / 100;
}