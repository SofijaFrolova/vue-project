<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">My Vue App</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(page, index) in pages" :key="index" class="nav-item">
            <a class="nav-link"
               href="#"
               v-bind:class="{ active: index === activePage }"
               @click="setActivePage(index)"
            >{{ page.link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true
    },
    activePage: {
      type: Number,
      required: true
    }
  },
  methods: {
    setActivePage(index) {
      this.$emit('update:activePage', index);
    }
  }
}
</script>

<style scoped>
</style>
