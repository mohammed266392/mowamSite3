import { FirebaseError } from "firebase/app";

export const getFireBaseErrorMessage = ({code, name} : FirebaseError) : string => {
    let message;
    console.log("name ", name)
    console.log("code ", code)

    switch (code){
        case 'auth/wrong-password':
            message = 'mot de pass incorrect';
            break;
        case 'auth/user-not-found':
            message = 'utilisateur non trouvé';
            break;
        case 'auth/email-already-in-use':
            message = 'Utilisateur déjà inscrit';
            break;
        case 'auth/operation-not-allowed':
            message = 'Arreur avec l\'authentification Google ';
            break;
            
        default :
            message = 'Erreur avec le nom d\'utilisateur ou mot de passe'
    }
    return message;
}