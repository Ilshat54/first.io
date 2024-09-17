
document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    const items = document.querySelectorAll(".item");
    const arrows = document.querySelectorAll(".arrow");
    const dots = document.querySelectorAll(".dot");
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    let currentIndex = 0;

    // Функция для отображения нужного слайда
    function showSlide(index) {
        // Скрыть все слайды
        items.forEach(item => {
            item.style.display = "none";
        });
        // Показать текущий слайд
        items[index].style.display = "block";

        // Убрать класс active у всех точек
        dots.forEach(dot => {
            dot.classList.remove("active");
        });
        // Добавить класс active к текущей точке
        dots[index].classList.add("active");
    }

    // Функция для обработки нажатия на стрелки
    function handleArrowClick(direction) {
        if (direction === "next") {
            currentIndex = (currentIndex + 1) % items.length;
        } else {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
        }
        showSlide(currentIndex);
    }

    
    // Обработчики для точек
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Обработчики для кнопок next и prev
    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length-1]);
    });

    
});
