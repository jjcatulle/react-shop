import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBR-wQsWt-3MExQPoJSZCxCvZfLF9SMEkI",
    authDomain: "crwn-db-809b3.firebaseapp.com",
    databaseURL: "https://crwn-db-809b3.firebaseio.com",
    projectId: "crwn-db-809b3",
    storageBucket: "",
    messagingSenderId: "354042866099",
    appId: "1:354042866099:web:e9562c736f21f3539943c6",
    measurementId: "G-GX4CT4CMPV"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(`Error creating user: ${error}`);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        // make a new doc with a random generated id
        const newDocRef = collectionRef.doc();
        // add the values
        batch.set(newDocRef, obj);
    });

   return await batch.commit();

};

export const convertCollectionsSnapshotToMap=(collections)=>{
    const transformCollection=collections.docs.map(doc=>{
        const {title,items}=doc.data();

        return{
            routeName:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    });

    return transformCollection.reduce((acumulator,collection)=>{
        acumulator[collection.title.toLowerCase()]=collection;
        return acumulator;
    },{})
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;