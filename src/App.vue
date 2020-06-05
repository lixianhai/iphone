<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: top;
}
#app {
  width: 100%;
}
.app {
  width: 100%;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
body {
  background: #ededed;
  padding-bottom: 1.6rem;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active,
.slide-top-enter-active,
.slide-top-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
 
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
 
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
 
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
 
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}



.slide-bottom-enter {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
 
.slide-bottom-leave-active {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
 
.slide-top-enter {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
 
.slide-top-leave-active {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
</style>
