import { db } from "../Firebase"
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const FamososCollectionRef = collection(db, "famosos");
class FamososServices {
    //Create
    addFamosos = (newEntr) => {
        return addDoc(FamososCollectionRef, newEntr);
    };
    //Update
    updateFamosos = (id, updatedFamosos) => {
        const entrDoc = doc(db, "famosos", id);
        return updateDoc(entrDoc, updatedFamosos);
    };
    //Delete
    deleteFamosos = (id) => {
        const entrDoc = doc(db, "famosos", id);
        return deleteDoc(entrDoc);
    };
    //Read
    getAllFamosos = () => {
        return getDocs(FamososCollectionRef);
    };

    getFamosos = (id) => {
        const entrDoc = doc(db, "famosos", id);
        return getDoc(entrDoc);
    };
}

export default new FamososServices();