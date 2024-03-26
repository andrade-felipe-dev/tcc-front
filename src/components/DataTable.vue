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

      <v-data-table-server
        class="data-table"
        fixed-header
        scroll-y
        fixed-footer
        width="100%"
        height="77vh"
        :headers="headers"
        v-model:items-per-page="options.itemsPerPage"
        :items="items"
        :loading="loading"
        :items-length="options.totalItems"
        @update:options="updateOptions"
      >
        <template v-for="header in headers" v-slot:[`item.${header.key}`]="{ item }">
          <slot :name="`item.${header.key}`" v-bind="{ item }">
            {{ item[header.key] }}
          </slot>
        </template>

        <template v-if="showActions" v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>

          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table-server>
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
      },

      showActions: {
        type: Boolean,
        default: false,
      },

      options: {
        required: true,
        type: Object
      },

      loading: {
        type: Boolean,
        default: false
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
      },

      updateOptions(newOptions) {
        this.$emit('update:options', newOptions);
      },
    },

    computed: {
      totalItems() {
        return this.options?.totalItems || this.items?.length;
      },
    },
  };
  </script>
