<template>
    <div>
        <v-app>
            <v-app-bar app color="primary">
                <v-app-bar-nav-icon @click="drawer = !drawer"/>
                <v-toolbar-title>Painel Administrativo</v-toolbar-title>
                <v-spacer/>
                <v-btn icon="mdi-exit-to-app" @click="logout"/>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer">
            <v-list>
                <v-list-item prepend-icon="mdi-home" to="/">Inicio</v-list-item>
                <v-list-item prepend-icon="mdi-note-edit" to="/about-me">Sobre o projeto</v-list-item>
                <v-list-item prepend-icon="mdi-archive" to="/categories">Categorias</v-list-item>
                <v-list-item prepend-icon="mdi-account-multiple" to="/users">Aprovar Usuários</v-list-item>
                <v-list-item prepend-icon="mdi-view-agenda" to="/contents">Aprovar Conteúdos</v-list-item>
            </v-list>
            </v-navigation-drawer>
            <v-main class="d-flex justify-center">
              <slot></slot>
            </v-main>
        </v-app>
    </div>
</template>

<script>
export default {
  data: () => ({
      drawer: true
  }),

  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
}
</script>

