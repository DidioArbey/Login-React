import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from "../../firebase/config";
import { addNewEMptyNote, savingNewNote, setActiveNote } from './'


export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());
        //obtener uid
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;
        //dispatch
        //insertar la nota
        dispatch(addNewEMptyNote(newNote));
        //activar la nota
        dispatch(setActiveNote(newNote));
    }
}

