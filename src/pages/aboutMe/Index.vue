<template>

  <NavigationDrawer>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12">
          <v-textarea v-model="aboutme" label="Digite o texto que irá aparecer no início do aplicativo" rows="33"></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-card flat>
            <v-card-actions class="justify-end">
              <v-btn :loading="loading" class="bg-primary" @click="saveAboutMeText()">
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </NavigationDrawer>
</template>

<script>
import NavigationDrawer from '../../components/NavigationDrawer.vue'
import axios from 'axios'

export default {
  data: () => ({
    aboutme: '',
    loading: false
  }),

  methods: {
    async loadAboutMeData() {
      try {
        this.loading = true
        const response = await axios.get('http://127.0.0.1:8000/api/about-me')
        this.aboutme = response.data.data.description
      } catch (error) {
        console.error('Erro ao buscar dados sobre mim:', error)
      } finally {
        this.loading = false
      }
    },

    async saveAboutMeText() {
      try {
        await axios.put('http://127.0.0.1:8000/api/about-me', { description: this.aboutme })
        window.alert('Texto sobre mim salvo com sucesso!')
      } catch (error) {
        console.error('Erro ao salvar texto sobre mim:', error)
      } finally {
        this.loading = false
      }
    }
  },

  async created() {
    await this.loadAboutMeData()
  }
}
</script>



<style scoped>

</style>
