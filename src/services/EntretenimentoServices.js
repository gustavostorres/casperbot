import { db } from "../Firebase"
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const EntretenimentoCollectionRef = collection(db, "entretenimento");
class EntretenimentoServices {
    //Create
    addEntretenimento = (newEntr) => {
        return addDoc(EntretenimentoCollectionRef, newEntr);
    };
    //Update
    updateEntretenimento = (id, updatedEntretenimento) => {
        const entrDoc = doc(db, "entretenimento", id);
        return updateDoc(entrDoc, updatedEntretenimento);
    };
    //Delete
    deleteEntretenimento = (id) => {
        const entrDoc = doc(db, "entretenimento", id);
        return deleteDoc(entrDoc);
    };
    //Read
    getAllEntretenimento = () => {
        return getDocs(EntretenimentoCollectionRef);
    };
    
    getEntretenimento = (id) => {
        const entrDoc = doc(db, "entretenimento", id);
        return getDoc(entrDoc);
    };
}

export default new EntretenimentoServices();