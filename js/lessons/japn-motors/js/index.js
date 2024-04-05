import { data } from './avto_list.js';

const body = document.querySelector('body');
 const toggle = document.querySelector('#toggle');
    toggle.onclick = function(){
        toggle.classList.toggle('active');
        body.classList.toggle('active')
    }

const lightBtn = document.querySelector('#light');


const bottons = document.querySelectorAll('.avto-list');
const corusel_avto = document.querySelector('.corusel-avto');
const coruselAvtoBlock = document.querySelector('.atvo-list-corusel');
let currentModelAvtoBlock = null;
bottons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (coruselAvtoBlock !== null) {
            coruselAvtoBlock.remove();
        }

        // Удаляем предыдущий блок, если он существует
        if (currentModelAvtoBlock !== null) {
            currentModelAvtoBlock.remove();
        }
       
        const modelAvtoBlock = document.createElement('div');
        modelAvtoBlock.className = 'model-avto';

        currentModelAvtoBlock = modelAvtoBlock;
        
        corusel_avto.appendChild(modelAvtoBlock);
        renderProducts(data, modelAvtoBlock, button.id)
    })
})

function renderProducts(productsArray, modelAvtoBlock, category) {
    let productHtml = '';
    let filteredArr = productsArray.filter(val => val.brand === category.toUpperCase())
    filteredArr.forEach(item => {
        productHtml += `
            <div class="photo-avto">
                <img src="${item.imgSrc}" alt="">
            </div>
            <div class="characteristic-list">
                <ul>
                    <li>бренд: ${item.brand}</li>
                    <li>модель: ${item.model}</li>
                    <li>объем: ${item.volume}</li>
                    <li>Мощность: ${item.power}</li>
                    <li>Коробка: ${item.box}</li>
                    <li>Тип двигателя: ${item.engines_type}</li>
                    <li>Топливо: ${item.fuel}</li>
                    <li>Привод: ${item.drive_unit}</li>
                    <li>Расход: ${item.consumption}</li>
                    <li>Страна марки: ${item.brand_country}</li>
                    <li>Класс автомобиля: ${item.car_class}</li>
                    <li>Количество мест: ${item.number_of_seats}</li>
                    <li>Расположение руля: ${item.steering_wheel_position}</li>
                    <li>Количество дверей: ${item.number_of_doors}</li>
                </ul>
            </div>`;
    });

    modelAvtoBlock.innerHTML = productHtml;
}
