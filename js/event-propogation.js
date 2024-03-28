/**
 * Events that do not bubble during event propagation in the DOM include:

focus
blur
mouseenter
mouseleave
load
unload
 */

const divElement = document.querySelector('.outerDiv');
const formElement = document.querySelector('.form');
const buttonElement = document.querySelector('.innerButton');

// divElement.addEventListener('click', clickHandler);
// formElement.addEventListener('click', clickHandler);
// buttonElement.addEventListener('click', clickHandler);

// event.target v/s this.target v/s event.currentTarget
/**
 * event.target = event origin
 * event.currentTarget = the current event (can come up because of the bubbling)
 * this.target = will target on which the event handler is called
 */

function clickHandler(event) {
    alert(
        '🚀 currentTarget: ' +
            event.currentTarget.tagName +
            ' target: ' +
            event.target.tagName +
            ' this: ' +
            this.tagName
    );
}

// event caputring / event trickling: events top-bottom
// event bubbling: events bottom - to - top
divElement.addEventListener(
    'click',
    function (e) {
        alert('div');
    },
    {
        capture: true,
    }
);
formElement.addEventListener(
    'click',
    function () {
        alert('form');
    },
    {
        capture: true,
    }
);

buttonElement.addEventListener(
    'click',
    function (e) {
        alert('button');
    },
    {
        capture: true,
    }
);

divElement.addEventListener('click', function (e) {
    alert('div');
});
formElement.addEventListener('click', function (e) {
    alert('form');
});

buttonElement.addEventListener('click', function (e) {
    e.stopPropagation(); // stops the event bubbling. can also tackle event trickling the same way
    alert('button');
});

// event delegation - instead of adding the event listner to the child/element, we add it to the parent
const products = document.querySelector('.products');
products.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN' || e.target.closest('SPAN')) {
        window.location.href += '/' + e.target.className;
    }
});

// change the order of the function exections
// form -> button -> div
// event trickling [form -> button] -> event bubbling [ button -> div]

// divElement.addEventListener('click', function (e) {
//     alert('div');
// });
// formElement.addEventListener(
//     'click',
//     function () {
//         alert('form');
//     },
//     // ANS: adding capture to the form only
//     {
//         capture: true,
//     }
// );

// buttonElement.addEventListener('click', function (e) {
//     alert('button');
// });

// create a modal that closes when clicked on negative space
const modalOpenBtn = document.querySelector('.openModalBtn');
const modalContainer = document.querySelector('.modalContainer');
const modal = document.querySelector('.modal');

modalOpenBtn.addEventListener('click', function () {
    toggle(true);
});

modalContainer.addEventListener('click', function (e) {
    if (e.target.className === 'modalContainer') toggle(false);
});

function toggle(open) {
    modalContainer.style.display = open ? 'flex' : 'none';
}
