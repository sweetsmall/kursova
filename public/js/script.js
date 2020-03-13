const blogList = document.querySelector('.blogs');
const blogAdd = document.querySelector('#blogAdd');
blogAdd.addEventListener('submit', (e) => {
    e.preventDefault();

    firestore.collection('blogs').doc(blogAdd.blog_name.value + '_' + email).set({
        Title: blogAdd.blog_name.value,
        Discription: blogAdd.blog_discr.value
    })
});

const setupGuides = (data) => {

    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const blogs = doc.data();
            const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${blogs.Title} </div>
          <div class="collapsible-body white"> ${blogs.Discription}</div>        
        </li>
      `
            ;
            html += li;
        });
        blogList.innerHTML = html;
    }
};

firestore.collection('blogs').onSnapshot(snapshot => {
    setupGuides(snapshot.docs);
}, err => console.log(err.message));