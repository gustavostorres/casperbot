import { db } from "../Firebase"
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const PoliticaCollectionRef = collection(db, "politica");
class PoliticaServices {
    //Create
    addPolitica = (newEntr) => {
        return addDoc(PoliticaCollectionRef, newEntr);
    };
    //Update
    updatePolitica = (id, updatedPolitica) => {
        const entrDoc = doc(db, "politica", id);
        return updateDoc(entrDoc, updatedPolitica);
    };
    //Delete
    deletePolitica = (id) => {
        const entrDoc = doc(db, "politica", id);
        return deleteDoc(entrDoc);
    };
    //Read
    getAllPolitica = () => {
        return getDocs(PoliticaCollectionRef);
    };

    getPolitica = (id) => {
        const entrDoc = doc(db, "politica", id);
        return getDoc(entrDoc);
    };
}

export default new PoliticaServices();