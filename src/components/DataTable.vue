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
        :search.sync="search" 
        fixed-footer
        scroll-y
        height="77vh"
        width="100%"
      >
        <template v-slot:item.action="{item}">
          <v-icon
            size="small"
            @click="checked(item)"
          >
              mdi-check
          </v-icon>
          <v-icon
            size="small"
            @click="reprove(item)"
          >
              mdi-close
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

      checked(item) {
        this.$emit('click:check', item)
      },

      reprove(item) {
        this.$emit('click:reprove', item)
      }
    }
  };
  </script>