// observer design pattern - pub/sub
/**
 * Host
 *  1. contains a list of handlers
 *  2. provides ability to subscribe and unsubscribe
 *  3. notifies the handlers when there is a event
 *
 * Observer
 *  1. subscribes and unsubscribes to events
 */

function Move() {
    // a list of observers
    this.handlers = [];

    // abiility to subscribe and unsubscribe
    this.subscribe = function (handler) {
        this.handlers.push(handler);
    };
    this.unsubscribe = function (handler) {
        // get the index of the handler/cb to be removed from the observers
        const index = this.handlers.indexOf(handler);
        if (index > -1) {
            // splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
            this.handlers.splice(index, 1);
        }
    };

    this.fire = function (eventObject, thisObj) {
        // get the scope
        const scope = thisObj || this;

        // notify all the observers for the event occured
        this.handlers.forEach((handler) =>
            handler.call(scope, eventObject)
        );
    };
}

function handler1(eventObj) {
    console.log(`handler1 called with eventObj ${eventObj}`);
}

function handler2(eventObj) {
    console.log(`handler2 called with eventObj ${eventObj}`);
}

const move = new Move();
move.subscribe(handler1);
move.fire('event1');

move.subscribe(handler2);
move.fire('event2');

// Implement subscribe, subscribeOnce, subscribeOnceAync, publish , publishALl

// subscribe - takes event name and callback. returns "remove" function that can be used to unsubscribe

function Events() {
    // subscriptions lists
    this.subscribeList = new Map();
    this.subscribeOnceList = new Map();
    this.subscribeOnceAsyncList = new Map();

    this.subscribe = function (eventName, callback) {
        // check if the event is already in the subscription list
        if (!this.subscribeList.has(eventName)) {
            // add to the list - add the callback in an array
            this.subscribeList.set(eventName, [callback]);
        } else {
            // if the event is already in the list, add the callback in the array
            const existingCallbacks =
                this.subscribeList.get(eventName);
            this.subscribeList.set(eventName, [
                ...existingCallbacks,
                callback,
            ]);
        }

        return {
            remove: () => {
                const existingCallbacks =
                    this.subscribeList.get(eventName);
                console.log(`${callback} removed`);
                const filteredCallbacks = existingCallbacks.filter(
                    (cb) => cb !== callback
                );
                this.subscribeList.set(eventName, filteredCallbacks);
            },
        };
    };

    // subscribeOnce - takes event name and callback. but the event is published only once

    this.subscribeOnce = function (eventName, callback) {
        // check if the event is already in the subscription list
        if (!this.subscribeOnceList.has(eventName)) {
            // add to the list - add the callback in an array
            this.subscribeOnceList.set(eventName, [callback]);
        } else {
            // if the event is already in the list, add the callback in the array
            const existingCallbacks =
                this.subscribeOnceList.get(eventName);
            this.subscribeOnceList.set(eventName, [
                ...existingCallbacks,
                callback,
            ]);
        }

        // we will not have the remove (optional) as we will reset the subscribeOnceList to [] after the event is published
    };

    // subscribeOnceAsync - takes event name and returns a promise that is settled / fullfilled once the event is published
    this.subscribeOnceAsync = function (eventName) {
        return new Promise((resolve, reject) => {
            // check if the event is already in the subscription list
            if (!this.subscribeOnceAsyncList.has(eventName)) {
                // add to the list - add the callback in an array
                this.subscribeOnceAsyncList.set(eventName, [resolve]);
            } else {
                // if the event is already in the list, add the callback in the array
                const existingCallbacks =
                    this.subscribeOnceAsyncList.get(eventName);
                this.subscribeOnceAsyncList.set(eventName, [
                    ...existingCallbacks,
                    resolve,
                ]);
            }
        });
    };

    // publish - takes event name and data. publishes all the events in the list. the events which are subscribed only ONCE are not invoked again
    this.publish = function (eventName, data) {
        // get the event name from different lists and publish them with the data passed
        const callbacksForSubscribe =
            this.subscribeList.get(eventName) || [];
        callbacksForSubscribe.forEach((cb) => cb(data));

        const callbacksForSubscribeOnce =
            this.subscribeOnceList.get(eventName) || [];
        callbacksForSubscribeOnce.forEach((cb) => cb(data));
        this.subscribeOnceList.set(eventName, []); // reset the list so that for this eventName we do not invoke again

        const callbacksForSubscribeOnceAsync =
            this.subscribeOnceAsyncList.get(eventName) || [];
        // the "cb" here are nothing but "resolve" that we are adding to the list
        callbacksForSubscribeOnceAsync.forEach((cb) => cb(data));
        this.subscribeOnceAsyncList.set(eventName, []); // reset the list so that for this eventName we do not invoke again
    };
    // publishAll - takes data. publishes all the events in the list with the data passed the events which are subscribed only ONCE are not invoked again
    this.publishAll = function (data) {
        const entires = this.subscribeList.entries(); // [key, value]
        for (const [key, value] of entires) {
            // value = [callback1, callback2, callback3.....]
            value.forEach((cb) => cb(data));
        }
    };
}

// TEST CASES
const events = new Events();
const user1Sub = events.subscribe('new-user', (data) => {
    console.log(`user1Sub called with ${data}`);
});
events.publish('event1', '77788');
const user2Sub = events.subscribe('new-user', (data) => {
    console.log(`user2Sub called with ${data}`);
});
events.publish('new-user', '98221');
user1Sub.remove();
events.publish('new-user', '11111');
events.subscribeOnce('new-user', (data) => {
    console.log(`subscribeOnce called with ${data}`);
});
events.publish('new-user', '88');
events.publish('new-user', '88');
events.publish('new-user', '88');
events.publish('new-user', '88');
events.subscribeOnceAsync('new-user').then((data) => {
    console.log(`subscribeOnceAsync resolved with ${data}`);
});
events.publish('new-user', '88');
events.publish('new-user', '88');
events.publish('new-user', '88');
