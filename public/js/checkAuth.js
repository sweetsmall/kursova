var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified, formCheck;

firebase.auth().onAuthStateChanged(function (user) {

if (user){

    uid = user.uid;
    email = user.email;
    name = user.displayName;
    photoUrl = user.photoURL;

    user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
        console.log("  Email verified: " + user.emailVerified);
    });
}

if (uid == undefined) {
    window.location.replace('index.html');
}

});

function logOut() {
    firebase.auth().signOut();
    window.location.reload();
}