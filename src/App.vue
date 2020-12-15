<template>
  <div id="app" class="container">

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Rick and Morty</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <form class="d-flex">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link class="nav-item nav-link"
                               active-class="active"
                               exact to="/">Home</router-link>
                </li>

                <li class="nav-item">
                  <router-link     class="nav-item nav-link"
                                   active-class="active"
                                   exact  to="/opinion">Opiniones</router-link>
                </li>

                <li class="nav-item">
                  <router-link    class="nav-item nav-link"
                                  active-class="active"
                                  exact to="/favorito">Favoritos</router-link>
                </li>

                <li class="nav-item">
                  <router-link     class="nav-item nav-link"
                                   active-class="active"
                                   exact  to="/administracion">Administración</router-link>
                </li>

              </ul>

            </div>
        </form>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
