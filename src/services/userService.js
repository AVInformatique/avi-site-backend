const { db } = require('../config/firebaseConfig');

const collection = db.collection('users');

function getUsers() {
    return new Promise((resolve, reject) => {
        collection.get().then((snapshot) => {
            let users = [];
            snapshot.forEach((doc) => {
                users.push(doc.data());
            });
            resolve(users);
        })
            .catch((err) => {
                reject(err);
            });
    });
}

function addUser(user) {
    if (!user.name) {
        return new Promise((resolve, reject) => {
            reject('Name is required');
        });
    }
    return new Promise((resolve, reject) => {
        collection.add(user).then((doc) => {
            resolve(doc.id);
        }).catch((err) => {
            reject(err);
        });
    });
}

function getUserById(id) {
    return new Promise((resolve, reject) => {
        collection.doc(id).get().then((doc) => {
            if (!doc.exists) {
                reject('User not found');
            } else {
                resolve(doc.data());
            }
        }).catch((err) => {
            reject(err);
        });
    });
}

function updateUserById(id, user) {
    return new Promise((resolve, reject) => {
        collection.doc(id).update(user).then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
}

function deleteUserById(id) {
    return new Promise((resolve, reject) => {
        collection.doc(id).delete().then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
}

module.exports = {
    getUsers,
    addUser,
    getUserById,
    updateUserById,
    deleteUserById,
};

