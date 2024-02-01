import { menuArray } from "./data.js"


document.addEventListener('click', e => 
e.target.dataset.button && addToOrder(e.target.dataset.button))

let ordersArr = []

function addToOrder(itemId){
    ordersArr.push(menuArray.filter(order => order.id === Number(itemId)))
}

function getFeed(){
    
    return menuArray.map(item => 
        `<div class="dishes" id="${item.id}">
            <span>${item.emoji}</span>
           
                <li>
                    <ul>${item.name}</ul> 
                    <ul>${item.ingredients}</ul> 
                    <ul>${item.price}</ul>
                </li>

                <button data-button=${item.id}></button>
           
        </div>`)
}       

document.getElementById('menu').innerHTML = getFeed().join(' ')