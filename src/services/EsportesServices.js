import { db } from "../Firebase"
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const EsportesCollectionRef = collection(db, "esportes");
class EsportesServices {
    //Create
    addEsportes = (newEntr) => {
        return addDoc(EsportesCollectionRef, newEntr);
    };
    //Update
    updateEsportes = (id, updatedEsportes) => {
        const entrDoc = doc(db, "esportes", id);
        return updateDoc(entrDoc, updatedEsportes);
    };
    //Delete
    deleteEsportes = (id) => {
        const entrDoc = doc(db, "esportes", id);
        return deleteDoc(entrDoc);
    };
    //Read
    getAllEsportes = () => {
        return getDocs(EsportesCollectionRef);
    };

    getEsportes = (id) => {
        const entrDoc = doc(db, "esportes", id);
        return getDoc(entrDoc);
    };
}

export default new EsportesServices();