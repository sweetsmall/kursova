var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        return true;
      },
      uiShown: function() {
        document.getElementById('loader').style.display = 'none';
      }
    },
    signInFlow: 'popup',
    'credentialHelper': firebaseui.auth.CredentialHelper.NONE,
    signInSuccessUrl: 'blog.html',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'blog.html'
  };

  ui.start('#firebaseui-auth-container', uiConfig);