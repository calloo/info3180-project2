const home = Vue.component('home', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `
  <div>
    <img src="https://pre00.deviantart.net/0d6f/th/pre/f/2012/120/a/6/water_under_the_bridge_by_denehy-d4y4t00.jpg" id="home-img">
    <div id="optionForm">
      <h3 class="text-center"><i class="material-icons">photo_camera</i> Photogram</h3><hr>
      <p>Share photos of your favourite moments with friends, family and the world</p>
      <div class="text-center">
        <router-link to="/register"><button class="btn btn-inline btn-success">Register</button></router-link>
        <router-link to="/login"><button class="btn btn-inline btn-primary"> Login</button></router-link>
      </div>
    
    </div>
  </div>
  
  `,
  methods: {
    reg: function(e){
      
    }
  }
});

const register = Vue.component('register', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `
    <div>
      <div id="registerForm">
        <h2 style="margin-left:1em;">Register</h2>
        <div id="regContent">
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" id="usr">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" id="password">
            </div>
            <div class="form-group">
              <label>Firstname</label>
              <input type="text" class="form-control" id="firstname">
            </div>
            <div class="form-group">
              <label>Lastname</label>
              <input type="text" class="form-control" id="lastname">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
              <label>Location</label>
              <input type="text" class="form-control" id="location">
            </div>
            <div class="form-group">
              <label>Biography</label>
              <input type="text" class="form-control" id="bio">
            </div>
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" id="usr">
            </div>
            <div class="form-group">
              <label>Photo</label>
              <input type="file" class="form-control-file" id="photo">
            </div>
            <router-link to="/register"><button class="btn btn-inline btn-success btn-block">Register</button></router-link>
        </div>
        
      </div>
    
    </div>
  
  
  `
});

const login= Vue.component('login', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `
  <div>
      <div id="loginForm">
        <h2 style="margin-left:1em;">Login</h2>
        <div id="loginContent">
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" id="usr">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" id="password">
            </div>
            <router-link to="/login"><button class="btn btn-inline btn-success btn-block">Login</button></router-link>
        </div>
        
      </div>
    
    </div>
  
  
  `
});


const profile = Vue.component('dashboard', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `
  <div>
    <div id="profile-details">
      <div id="profile-img" class="float-left">
        <i class="fa fa-user-secret"></i>
      </div>
      <div id="profile-info">
        <h5>Rosa Diaz</h5>
        <p>Address</p>
        <p>member since</p>
        <p id="profile-bio">short bio</p>
      </div>
      <div id="profile-additional" class="float-right">
        <div>
          <div class="profile-snip float-left">
            <h3>6</h3>
            <p>Posts</p>
          </div>
          <div class="profile-snip float-right">
            <h3>6</h3>
            <p>Followers</p>
          </div>
        </div>
        <button class="btn btn-block btn-primary">Follow</button>
      </div>
    </div>
    
    <div id="profile-uploads">
      <img src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg">
      <img src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg">
      <img src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg">
      <img src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg">
      <img src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg">
      <img src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg">
      <img src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg">
      <img src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg">
      <img src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg">
      <img src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg">
      <img src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg">
    </div>
  
  
  
  </div>
  
  
  `
});

const explore = Vue.component('explore', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `
    <div id="exp">
      <div id="explorerView">
        <div class="card" style="width: 40em;">
          <h5 class="card-title"><i class="material-icons">person</i> Person Name</h5>
          <img class="card-img-top" src="https://www.telegraph.co.uk/content/dam/Travel/2018/January/sydney-best-GETTY.jpg?imwidth=450" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div>
              <span><i class="fa fa-heart"></i>10 Likes</span>
              <span class="float-right">Date</span>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/new_post"><button class="btn btn-primary" id="mk_post">New Post</button></router-link>
    
    </div>
  
  `
});

// Define a new component called button-counter
const newPost = Vue.component('newPost', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `
  <div>
      <div id="newPostForm">
        <h2 style="margin-left:1em;">New Post</h2>
        <div id="postContent">
            <div class="form-group">
              <label>Photo</label>
              <input type="file" class="form-control-file" id="photo">
            </div>
            <div class="form-group">
              <label>Caption</label>
              <textarea class="form-control" id="caption" rows="2" placeholder="Write a caption"></textarea>
            </div>
            <router-link to="/login"><button class="btn btn-inline btn-success btn-block">Submit</button></router-link>
        </div>
        
      </div>
    
    </div>
  `
});


const routes = [
  { path: '/register', component: register },
  { path: '/', component: home },
  { path: '/login', component: login },
  // { path: '/logout', component: logout },
  { path: '/explore', component: explore },
  { path: '/new_post', component: newPost },
  { path: '/profile', component: profile },
  
  ];

const router = new VueRouter({
  routes // short for `routes: routes`
});

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  router
});
