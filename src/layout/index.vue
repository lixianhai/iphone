<template>
  <div id="app-wrap">
    <Header v-show="isHeader"></Header>
    <Search v-show="isSearch"></Search>
    <transition :name="direction">
      <keep-alive>
         <router-view />
      </keep-alive>
    </transition>
    <Nvabar></Nvabar>
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
      transitionName: 'slide-right'
    }
  },
  watch: {
    $route(to) {
      this.isHeader = to.meta.showHeader
      this.isSearch = to.meta.showSearch
    }
  },
  computed: {
    direction() {
      return this.$store.state.ROUTER_DIRECTION
    }
  }
}
</script>
