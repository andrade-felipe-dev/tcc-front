<template>
  <NavigationDrawer>
    <DataTable
      show-actions
      :options="options"
      :items="items"
      :headers="headers"
      :action-button="actionButton"
      :searchable="false"
      :total-items="options.totalItems"
      :loading="loading"
      @click:edit="editItem"
      @click:delete="deleteItem"
      @update:options="loadCategories"
    >
      <template v-slot:item.created_at="{ item }">
        {{ formatDate(item.created_at) }}
      </template>

      <template v-slot:item.updated_at="{ item }">
        {{ formatDate(item.updated_at) }}
      </template>

      <template v-slot:button>
        <v-btn
          flat
          class="mt-3 float-right bg-primary"
          :append-icon="actionButton.icon"
          @click="openDialog"
        >
          {{ actionButton.text }}
        </v-btn>
      </template>
    </DataTable>

    <Alert ref="alert" />

    <Dialog
      :show-modal="showModal"
      :title="category.id !== null ? 'Editar Categoria' : 'Cadastrar Categoria'"
      @save="saveCategory"
      @cancel="closeDialog"
    >
      <v-card-text>
        <v-container>
          <v-text-field label="Nome *" variant="outlined" v-model="category.name" />
        </v-container>
      </v-card-text>
    </Dialog>
  </NavigationDrawer>
</template>



<script>
import NavigationDrawer from '../../components/NavigationDrawer.vue'
import DataTable from '../../components/DataTable.vue';
import Alert from '../../components/Alert.vue';
import api from '../../api/api';
import { formatDate } from '../../utils/datehelper'
import Dialog from '../../components/Dialog.vue';

export default {
    components: [
        NavigationDrawer,
        DataTable,
        Dialog,
    ],

    data: () => ({
        showModal: false,
        actionButton: {
          icon: 'mdi-plus',
          text: 'Cadastrar'
        },
        headers: [
          { key: 'name', title: 'Categoria' },
          { key: 'created_at', title: 'Criado em' },
          { key: 'updated_at', title: 'Atualizado em'},
          { key: 'actions', title: 'Ações' }
        ],
        items: [],
        options: {
          page: 1,
          itemsPerPage: 10,
          totalItems: 0,
        },
        category: {
          id: null,
          name: ''
        },
        loading: false
    }),

    methods: {
      store(item) {
        window.alert(item)
      },

      async loadCategories(item) {
        try {
          this.loading = true
          if(item) {
            this.options.itemsPerPage = item.itemsPerPage
            this.options.page = item.page
          }

          const { data } = await api.get('/categories', {
            params: {
              page: this.options.page,
              perPage: this.options.itemsPerPage
            }
          })

          if (data.total != this.options.totalItems) {
            this.options.totalItems = data.total
          }

          this.items = data.data
        } catch (error) {
          this.$refs.alert.show(message, 'error');
        } finally {
          this.loading = false
        }
      },

      formatDate(date) {
        return formatDate(date)
      },

      async editItem(item) {
        try {
          const { data } = await api.get(`/categories/${item.id}`)

          this.category = { ...data.data }
        } catch (error) {
          this.$refs.alert.show('Erro ao buscar a categoria.', 'error')
        }
        this.openDialog()
      },

      cleanCategory() {
        this.category = {
          id: null,
          name: ''
        }
      },

      async deleteItem(item) {
        try {
          await api.delete(`/categories/${item.id}`)
        } catch (error) {
          this.$refs.alert.show('Erro ao deletar a categoria', 'error')
        } finally {
          this.loadCategories()
        }
      },

      async saveCategory() {
        try {
          if (this.category.id !== null) {
          await api.put(`/categories/${this.category.id}`, this.category)
          } else {
            await api.post('/categories', this.category)
          }

          this.$refs.alert.show('Categoria salva com sucesso', 'success')
        } catch (error) {
          this.$refs.alert.show('Erro ao salvar a categoria', 'error')
        } finally {
          this.loadCategories()
          this.closeDialog()
        }
      },

      openDialog() {
        this.showModal = true
      },

      closeDialog() {
        this.showModal = false
        this.cleanCategory()
      }
    },


    components: {
      DataTable,
      Alert
    },

    created() {
      this.loadCategories()
    }
}
</script>
