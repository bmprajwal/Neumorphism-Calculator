let value = document.querySelector('#value')
let btn = document.querySelectorAll('span')
let buttons = document.querySelector('.buttons')
let toggleBtn = document.querySelector(".toggleBtn")
let body = document.querySelector('body')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        
        switch(this.innerHTML) {
            case "=":
                value.innerHTML = eval(value.innerHTML).toFixed(13).replace(/0+$/, '');
                break;
            case "Clear":
                value.innerHTML = "";
                break;
            case "Del":
                value.innerHTML = value.innerHTML.slice(0, -1)
                break;
            default:
                if (value.innerHTML.length > 14) {
                    btn.style.userSelect = none;
                }        
                value.innerHTML += this.innerHTML;

        }
    })
}

toggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark')
    })