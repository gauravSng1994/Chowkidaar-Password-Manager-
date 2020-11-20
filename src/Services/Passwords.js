import fire from "../Config/Firebase";
const passwordRef = fire.database().ref('Password');

export const getPassword = async (id) => {
    return (await passwordRef.child(id).get()).val();
    // passwordRef = fire.database().ref(`Password/${id}`);
    // return (await passwordRef.get()).val();
}

export const listPasswords = async () => {
    const snapshot = await passwordRef.get();
    return snapshot.val();
}

export const createPassword = async (data) => {
    passwordRef.push(data);
}

export const deletePassword = async (id) => {
    return await passwordRef.child(id).remove();
}

export const updatePassword = async (id,data) => {
    return await passwordRef.child(id).update(data);
}

export default {
    getPassword,
    listPasswords,
    createPassword,
    deletePassword,
    updatePassword
}
