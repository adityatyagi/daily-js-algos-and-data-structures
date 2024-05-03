function init() {
    // create a data source with all the info of tabs with which we will dynamically create tabs with a [data-id] attribute
    const tabs = [
        {
            id: 1,
            displayText: 'Tab 1',
            contentTitle: 'Sample Title 1',
            content: 'This is content for Tab 1',
        },
        {
            id: 2,
            displayText: 'Tab 2',
            contentTitle: 'Sample Title 2',
            content: 'This is content for Tab 2',
        },
        {
            id: 3,
            displayText: 'Tab 3',
            contentTitle: 'Sample Title 3',
            content: 'This is content for Tab 3',
        },
        {
            id: 4,
            displayText: 'Tab 4',
            contentTitle: 'Sample Title 4',
            content: 'This is content for Tab 4',
        },
    ];

    // the first tab should be active by default
    let activeTabId = tabs[0].id;
    function renderTabs() {
        // get the containers
        const tabsContainer =
            document.querySelector('.tab-container');
        const tabsContentContainer = document.querySelector(
            '.tab-content-container'
        );

        // create tabs ui
        tabs.forEach((item) => {
            // every tab is a button
            const tabButton = document.createElement('button');
            tabButton.className = 'tabLinks'; // to identify the button
            tabButton.textContent = item.displayText;
            tabButton.setAttribute('data-tab', item.id);
            tabsContainer.append(tabButton);

            // content
            const tabContent = document.createElement('div');
            tabContent.id = item.id; // to get the content by id and add "active" class
            tabContent.className = 'tabContent';
            tabContent.innerHTML = `<h3>${item.contentTitle}</h3><p>${item.content}</p>`;
            tabsContentContainer.append(tabContent);
        });

        tabsContainer.addEventListener('click', (e) => {
            // checking if the target is a BUTTON by matching the class
            if (e.target.matches('.tabLinks')) {
                // get the id of the clicked button
                const nextActiveId =
                    e.target.getAttribute('data-tab');
                if (nextActiveId !== activeTabId) {
                    // load the content corresponding to the nextActiveId
                    openTab(nextActiveId);

                    // update the active tab
                    activeTabId = nextActiveId;
                }
            }
        });
    }

    function openTab(id) {
        // add "active" class to all elements where the id matches

        // get all tabs
        const allTabs = document.querySelectorAll('.tabLinks');
        // get all content

        const allTabContent =
            document.querySelectorAll('.tabContent');
        // for all, remove active class
        allTabs.forEach((item) => item.classList.remove('active'));
        allTabContent.forEach((item) =>
            item.classList.remove('active')
        );

        document.getElementById(id).classList.add('active');
        document
            .querySelector(`button[data-tab="${id}"]`)
            .classList.add('active');
    }

    renderTabs();

    // default set
    // tab
    document
        .querySelector(`button[data-tab="${activeTabId}"]`)
        .classList.add('active');
    // content
    document.getElementById(activeTabId).classList.add('active');
}
document.addEventListener('DOMContentLoaded', init);
