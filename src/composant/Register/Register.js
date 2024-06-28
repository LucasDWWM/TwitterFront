import React, { useState } from 'react';
import axios from 'axios';

// Composant d'inscription
const Register = () => {
    // États pour gérer les champs du formulaire
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState({});

    // Fonction de validation du formulaire
    const handleValidation = () => {
        let formIsValid = true;
        let errors = {};

        // Validation du nom d'utilisateur
        if (!username) {
            formIsValid = false;
            errors['username'] = 'Nom d\'utilisateur requis';
        }

        // Validation de l'email
        if (!email) {
            formIsValid = false;
            errors['email'] = 'Email requis';
        }

        // Validation du mot de passe
        if (!password) {
            formIsValid = false;
            errors['password'] = 'Mot de passe requis';
        }

        // Vérification de la correspondance des mots de passe
        if (password !== passwordConfirmation) {
            formIsValid = false;
            errors['passwordConfirmation'] = 'Les mots de passe ne correspondent pas';
        }

        // Mise à jour des erreurs d'état
        setErrors(errors);
        return formIsValid;
    };

    // Fonction de soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Si la validation réussit
        if (handleValidation()) {
            try {
                // Requête POST à l'API Laravel pour l'inscription
                const response = await axios.post('/api/register', {
                    username,
                    email,
                    password,
                    password_confirmation: passwordConfirmation
                });
                // Mise à jour du message de succès
                setMessage(response.data.message);
                // Réinitialisation des champs du formulaire
                setUsername('');
                setEmail('');
                setPassword('');
                setPasswordConfirmation('');
                setErrors({});
            } catch (error) {
                // Gestion des erreurs de réponse
                if (error.response) {
                    setErrors(error.response.data.errors);
                } else {
                    setErrors({ server: 'Erreur de serveur' });
                }
            }
        }
    };

    // Rendu du formulaire d'inscription
    return (
        <div className="register-container">
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                {/* Champ de nom d'utilisateur */}
                <div className="form-group">
                    <label>Nom d'utilisateur</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors['username'] && <span className="error">{errors['username']}</span>}
                </div>
                {/* Champ d'email */}
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors['email'] && <span className="error">{errors['email']}</span>}
                </div>
                {/* Champ de mot de passe */}
                <div className="form-group">
                    <label>Mot de passe</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors['password'] && <span className="error">{errors['password']}</span>}
                </div>
                {/* Champ de confirmation de mot de passe */}
                <div className="form-group">
                    <label>Confirmer le mot de passe</label>
                    <input
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    {errors['passwordConfirmation'] && <span className="error">{errors['passwordConfirmation']}</span>}
                </div>
                {/* Bouton de soumission */}
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default Register;
