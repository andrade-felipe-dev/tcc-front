<template>
    <v-container fluid>
      <v-text-field
        v-if="searchable"
        v-model="search"
        dense
        label="Pesquisar"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="outlined"
        hide-details
      />

      <slot name="button"></slot>

      <v-data-table
        class="data-table"
        fixed-header
        :headers="headers"
        :items="items"
        v-model:search="search"
        fixed-footer
        scroll-y
        height="77vh"
        width="100%"
      >
        <template v-for="header in headers" v-slot:[`item.${header.key}`]="{ item }">
          <slot :name="`item.${header.key}`" v-bind="{ item }">
            {{ item[header.key] }}
          </slot>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon size="small" class="mr-2">
            mdi-pencil
          </v-icon>
        </template>
      </v-data-table>
    </v-container>
  </template>

  <script>
  export default {
    data: () => ({
      search: ''
    }),

    props: {
      items: {
        type: Array,
        required: true,
      },

      searchable: {
        type: Boolean,
        default: true
      },

      headers: {
        type: Array,
        required: true
      },

      actionButton: {
        type: Object,
        default: null
      }
    },

    methods: {
      handleActionButton() {
        this.$emit('click:action')
      },

      editItem(item) {
        this.$emit('click:edit', item)
      },

      deleteItem(item) {
        this.$emit('click:delete', item)
      }
    }
  };
  </script>
