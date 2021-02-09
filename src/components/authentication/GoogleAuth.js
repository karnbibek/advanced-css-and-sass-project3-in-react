import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

const GoogleAuth = (props) => {
    useEffect(() => {
        window.gapi.load('client:auth2', async () => {
            await window.gapi.client.init({
                clientId: '598542817436-8crq7bvtv70gjke5v2tv2f0som7up2tb.apps.googleusercontent.com',
                scope: 'email'
            });
            const auth = window.gapi.auth2.getAuthInstance();
            onAuthChange(auth.isSignedIn.get(), auth.currentUser.get().getId());
            auth.isSignedIn.listen(onAuthChange);
        });
    });

    const onAuthChange = (isSignedIn, auth) => {
        if (isSignedIn) {
            props.signIn(auth);
        } else {
            props.signOut();
        }
    }

    const onSignInClick = () => {
        const auth = window.gapi.auth2.getAuthInstance();
        auth.signIn();
    }

    const onSignOutClick = () => {
        const auth = window.gapi.auth2.getAuthInstance();
        auth.signOut();
    }

    const authButton = () => {
        if (props.isSignedIn === null) {
            return null;
        }
        else if (props.isSignedIn) {
            return (
            <div className="navbar__right" onClick={onSignOutClick}>
                    <div className="navbar__right-logo-o">
                    <img className="navbar__right-logo-img" src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt="Google" />
                    </div>
                    <div className="navbar__right-signin">Sign Out</div>
                </div>
            );
        }
        else {
            return (
            <div className="navbar__right" onClick={onSignInClick}>
                    <div className="navbar__right-logo">
                        <img className="navbar__right-logo-img" alt="Google sign-in"
                            src="https://img.icons8.com/fluent/48/000000/google-logo.png" />
                    </div>
                    <div className="navbar__right-signin">Sign In With Google</div>
                </div>
            )
        }
    }

    return (
        <>

            {authButton()}
        </>
    );
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);