<template>
    <NavigationDrawer>
        <DataTable
          :items="items"
          :headers="headers"
          :action-button="actionButton"
          :searchable="false"
        >
          <template v-slot:item.created_at="{ item }">
            {{ formatDate(item.created_at) }}
          </template>

          <template v-slot:item.updated_at="{ item }">
            {{ formatDate(item.updated_at) }}
          </template>

          <template v-slot:button>
            <v-dialog
              v-model="showModal"
              width="600"
            >
            <template v-slot:activator="{ props }">
              <v-btn
                flat
                class="mt-3 float-right bg-primary"
                :append-icon="actionButton.icon"
                @click="showModal = !showModal"
              >
                  {{ actionButton.text }}
              </v-btn>
            </template>

            <template v-slot:default="{ isActive}">
              <v-card>
                <v-toolbar
                  color="primary"
                  title="Cadastrar Categoria"
                />
                <v-card-text>
                  <v-container>
                    <v-text-field
                      label="Nome *"
                      variant="outlined"
                    />
                  </v-container>
                </v-card-text>

                <v-card-actions class="justify-end">
                  <v-btn
                    variant="text"
                    @click="showModal = !showModal"
                  >
                  Cancelar
                  </v-btn>
                  <v-btn
                    variant="outlined"
                    class="bg-primary"
                    flat
                    @click="store('salvo')"
                  >
                  Salvar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </template>
      </DataTable>

      <Alert ref="alert" />
    </NavigationDrawer>
</template>



<script>
import NavigationDrawer from '../../components/NavigationDrawer.vue'
import DataTable from '../../components/DataTable.vue';
import Alert from '../../components/Alert.vue';
import api from '../../api/api';
import { formatDate } from '../../utils/datehelper'

export default {
    components: [
        NavigationDrawer,
        DataTable
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
        }
    }),

    methods: {
      store(item) {
        window.alert(item)
      },

      async loadCategories() {
        try {
          const { data } = await api.get('categories')
          this.items = data.data
        } catch (error) {
          this.$refs.alert.show(message, 'error');
        }
      },

      formatDate(date) {

        return formatDate(date)
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
