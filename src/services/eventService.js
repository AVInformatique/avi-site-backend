const { db } = require('../firebaseConfig');

const collection = db.collection('events');

function getEvents() {
    return new Promise((resolve, reject) => {
        collection.get().then((snapshot) => {
            let events = [];
            snapshot.forEach((doc) => {
                events.push(doc.data());
            });
            resolve(events);
        })
            .catch((err) => {
                reject(err);
            });
    });
}

function addEvent(event) {
    if (!event.name || !event.date) {
        return new Promise((resolve, reject) => {
            reject('Name and date are required');
        });
    }
    return new Promise((resolve, reject) => {
        collection.add(event).then((doc) => {
            resolve(doc.id);
        }).catch((err) => {
            reject(err);
        });
    });
}

function getEventById(id) {
    return new Promise((resolve, reject) => {
        collection.doc(id).get().then((doc) => {
            if (!doc.exists) {
                reject('Event not found');
            } else {
                resolve(doc.data());
            }
        }).catch((err) => {
            reject(err);
        });
    });
}

function updateEventById(id, event) {
    return new Promise((resolve, reject) => {
        collection.doc(id).update(event).then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
}

function deleteEventById(id) {
    return new Promise((resolve, reject) => {
        collection.doc(id).delete().then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
}

function getEventsByTime(month = "", year = "") {
    return new Promise((resolve, reject) => {
        collection.get().then((snapshot) => {
            let events = [];
            snapshot.forEach((doc) => {
                let eventData = doc.data();
                if (eventData.date.includes(month +'/', 3) && eventData.date.includes('/'+ year )) {
                    events.push(doc.data());
                }
            });
            resolve(events);
        })
            .catch((err) => {
                reject(err);
            });
    });
}

function getEventsByKeywords(keywords) {
    const keywordsArr = keywords.split(" ");
    return new Promise((resolve, reject) => {
        collection.get().then((snapshot) => {
            let events = [];
            snapshot.forEach((doc) => {
                let eventData = doc.data();
                if ( keywordsArr.every( (keyword) => {
                                        let name = eventData.name.toLowerCase();
                                        return name.includes( keyword.toLowerCase() )} )) {
                    events.push(doc.data());
                }
            });
            resolve(events);
        })
            .catch((err) => {
                reject(err);
            });
    });
}

module.exports = {
    getEvents,
    addEvent,
    getEventById,
    updateEventById,
    deleteEventById,
    getEventsByTime,
    getEventsByKeywords,
};

