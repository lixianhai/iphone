<template>
  <div id="app-wrap">
    <Header v-show="isHeader"></Header>
    <Search v-show="isSearch"></Search>
    <transition :name="direction">
      <router-view />
    </transition>
    <Nvabar v-show="isNavbar"></Nvabar>
  </div>
</template>

<script>
import Header from '@/components/header'
import Search from '@/components/search'
import Nvabar from '@/components/navBar'

export default {
  components: {
    Header,
    Search,
    Nvabar
  },
  data() {
    return {
      isHeader: true,
      isSearch: true,
      isNavbar: true,
      direction: ''
    }
  },
  watch: {
    $route(to, from) {
      this.isHeader = to.meta.showHeader
      this.isSearch = to.meta.showSearch
      this.isNavbar = to.meta.showNavbar
      
      if (to.meta.index > from.meta.index) {
        this.direction = 'slide-left'
      } else if (to.meta.index < from.meta.index) {
        this.direction = 'slide-right'
      } else if (to.meta.index === 'top') {
        this.direction = 'slide-top'
      } else if (to.meta.index === 'bottom') {
        this.direction = 'slide-bottom'
      }  else {
        this.direction = ''
      }
    }
  }
}
</script>
