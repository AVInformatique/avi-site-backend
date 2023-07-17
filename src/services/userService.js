const { db } = require('../firebaseConfig');

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

module.exports = {
    getUsers
};

