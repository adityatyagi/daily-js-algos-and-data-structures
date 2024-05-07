function init() {
    // accordian content
    const CONTENT = [
        {
            id: 1,
            title: 'Title 1',
            content: 'This is content 1',
        },
        {
            id: 2,
            title: 'Title 2',
            content: 'This is content 2',
        },
        {
            id: 3,
            title: 'Title 3',
            content: 'This is content 3',
        },
        {
            id: 4,
            title: 'Title 4',
            content: 'This is content 4',
        },
    ];

    // keeping a track of active accordian
    let activeAccId = CONTENT[0].id;

    // create the labels of the accordian
    function renderAccordianItems() {
        // fetch accordian container
        const accWrapper = document.querySelector(
            '.accordian-wrapper'
        );

        // create the accordian buttons from the data
        CONTENT.forEach((item) => {
            const accItem = document.createElement('div');
            accItem.id = `acc-${item.id}`;
            const accBtn = document.createElement('button');
            accBtn.classList.add('accLink');
            accBtn.textContent = item.title;
            accBtn.setAttribute('data-acc', item.id); // to get the id fo the clicked button

            // content
            const accContent = document.createElement('div');
            accContent.id = item.id;
            accContent.classList.add('content');
            accContent.innerHTML = `<p>${item.content}</p>`;

            accItem.append(accBtn);
            accItem.append(accContent);

            // finally append all the items to the main wrapper
            accWrapper.append(accItem);
        });

        // adding event listener on the accordian wrapper, and then checking if the event was triggerd on the button
        accWrapper.addEventListener('click', (e) => {
            // targeting the accBtn
            if (e.target.matches('.accLink')) {
                // get the id of the button clicked as newID from data attribute
                const newActiveAccBtn = e.target;
                const newId =
                    newActiveAccBtn.getAttribute('data-acc');

                // check if the activeAccId is different than the newId
                if (newId !== activeAccId) {
                    // get all the accordian buttons
                    const allAccBtns =
                        document.querySelectorAll('.accLink');
                    // get all the content
                    const allAccContent =
                        document.querySelectorAll('.content');

                    // remove the active class on all the accordian buttons
                    allAccBtns.forEach((item) =>
                        item.classList.remove('active')
                    );
                    // remove the active calss on all the accordian content
                    allAccContent.forEach((item) =>
                        item.classList.remove('active')
                    );

                    // add active class on the button with the new ID
                    newActiveAccBtn.classList.add('active');

                    // add active class on the content with the new ID
                    document
                        .getElementById(newId)
                        .classList.add('active');

                    // set the activeAccId as the newId
                    activeAccId = newId;
                }
            }
        });
    }

    renderAccordianItems();
}
document.addEventListener('DOMContentLoaded', init);
