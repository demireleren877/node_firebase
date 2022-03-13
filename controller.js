const serviceAccount = require('./service-account-key.json');
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

function getDataFirestore(res) {
    console.log('getDataFirestore');

    try {

        //firestore get document
        const docRef = db.doc("dota/heroes");

        docRef.get().then((data) => {
            if (data && data.exists) {
                const responseData = data.data();
                res.send(responseData);
            }
        })
    } catch (error) {}
}

module.exports = getDataFirestore;