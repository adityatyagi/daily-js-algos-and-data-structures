/**
 * Design a Todo list web application using Vanilla JavaScript. 

The application should allow users to:
Requirements:
- Functionality: Adding, editing, and deleting tasks.
- User Interface: Intuitive and easy to use.
- Error Handling: Errors should me handled effectively.
- Code Quality: Well-structured, readable, and organized.
 */

function init() {
    // get all the items
    const form = document.querySelector('.todo-form');
    const input = document.querySelector('.todo-input');
    const list = document.querySelector('.todo-list');
    const submit = document.querySelector('.todo-submit');

    // tracking the edit
    let editMode = false;
    let editItem = null;

    // get the input value when the user submits the form
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // get the input value
        const valueInput = input.value.trim();

        // check for edge cases - trim the value for leading or trailing spaces
        if (valueInput !== '') {
            if (editMode) {
                // update the value of the editItem with the current input value
                editItem.firstChild.innerText = valueInput; // <span>'s value
                editMode = false;
                editItem = null;
                submit.value = 'Add';
            } else {
                // modulear code
                addTodoItem(valueInput);
            }

            // clear the input after adding
            input.value = '';
            input.focus();
        } else {
            alert('empty string not allowed');
        }
    });

    // add a new list item in the todo list with a delete and edit button
    function addTodoItem(value) {
        // create li, edit and remove buttons
        const li = document.createElement('li');
        const editButton = document.createElement('button');
        const removeButton = document.createElement('button');

        // construct li, editButton and removeButton
        li.innerHTML = `<span>${value}</span>`;
        editButton.innerText = 'Edit';
        removeButton.innerText = 'Remove';

        // append the button to the list item
        li.append(editButton);
        li.append(removeButton);

        // append to the list
        list.append(li);
    }

    // add eventListener to listen to the click event on the list but only react acc. to the buttons
    list.addEventListener('click', (e) => {
        const target = e.target;
        const listItemInContext = target.parentNode; // <li>

        // check if the target is a button and act accordingly
        if (e.target.innerText === 'Remove') {
            // remove
            listItemInContext.remove();
        } else if (e.target.innerText === 'Edit') {
            editMode = true;
            // update the editItem
            editItem = listItemInContext; // <li>

            // the input should have the value of the current list item
            input.value = listItemInContext.firstChild.innerText;

            // the submit button's text should change
            // changing the value as its a input of type="submit"
            submit.value = 'Edit';

            // the focus should return to the input
            input.focus();
        }
    });
}

// The DOMContentLoaded event fires when the HTML document has been completely parsed, and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.

// DOMContentLoaded does not wait for stylesheets to load, however deferred scripts do wait for stylesheets, and the DOMContentLoaded event is queued after deferred scripts. Also, scripts which aren't deferred or async (e.g. <script>) will wait for already-parsed stylesheets to load.

/**
DIFFERENT TYPES OF SCRIPTS ATTRIBUTES/STYLES OF LOADING
Synchronous: Blocks parsing/rendering until script is downloaded and executed.

Async: Allows parsing/rendering to continue while script downloads; executes as soon as it's available, potentially interrupting rendering.

Defer: Allows parsing/rendering to continue while script downloads; executes after HTML parsing is complete but before DOMContentLoaded, preserving execution order.

Async Defer: Redundant combination; behaves as async.
 */

document.addEventListener('DOMContentLoaded', init);
