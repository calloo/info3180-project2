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


const dashboard = Vue.component('dashboard', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

const explore = Vue.component('explore', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `
  
  
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
