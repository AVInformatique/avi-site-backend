const admin = require("firebase-admin");
const serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://avi-site-5e8fe.firebaseio.com"
});

const db = admin.firestore();

module.exports = {
    db
};
