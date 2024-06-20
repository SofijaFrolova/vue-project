<template>
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand">Tic-Tac-Toe</a>
      <div class="navbar-collapse">
        <ul class="navbar-nav">
          <li v-for="(page, index) in pages" :key="index" class="nav-item">
            <a class="nav-link"
               href="#"
               :class="{ active: index === activePage }"
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
.navbar {
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
}

.navbar-collapse {
  display: flex;
  align-items: center;
}

.navbar-nav {
  list-style: none;
  display: flex;
  padding-left: 0;
  margin: 0;
}

.nav-item {
  margin-right: 15px;
}

.nav-link {
  color: #000;
  text-decoration: none;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #e9ecef;
}

.nav-link.active {
  background-color: #00C4FFB0;
  color: #fff;
}
</style>
