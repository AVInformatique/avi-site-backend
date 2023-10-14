const { db } = require('../config/firebaseConfig');

const collection = db.collection('alumnis');

function getAlumnis() {
    return new Promise((resolve, reject) => {
        collection.get().then((snapshot) => {
            let alumnis = [];
            snapshot.forEach((doc) => {
                alumnis.push(doc.data());
            });
            resolve(alumnis);
        })
            .catch((err) => {
                reject(err);
            });
    });
}

function addAlumni(alumni) {
    if (!alumni.name) {
        return new Promise((resolve, reject) => {
            reject('Name is required');
        });
    }
    return new Promise((resolve, reject) => {
        collection.add(alumni).then((doc) => {
            resolve(doc.id);
        }).catch((err) => {
            reject(err);
        });
    });
}

function getAlumniById(id) {
    return new Promise((resolve, reject) => {
        collection.doc(id).get().then((doc) => {
            if (!doc.exists) {
                reject('Alumni not found');
            } else {
                resolve(doc.data());
            }
        }).catch((err) => {
            reject(err);
        });
    });
}

function updateAlumniById(id, alumni) {
    return new Promise((resolve, reject) => {
        collection.doc(id).update(alumni).then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
}

function deleteAlumniById(id) {
    return new Promise((resolve, reject) => {
        collection.doc(id).delete().then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
}

module.exports = {
    getAlumnis,
    addAlumni,
    getAlumniById,
    updateAlumniById,
    deleteAlumniById,
};

