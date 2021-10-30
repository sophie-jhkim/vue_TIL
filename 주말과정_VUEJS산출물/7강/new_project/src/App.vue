<template>
  <div id="app">
    <Header/>
    <Input/>
    <List/>
    <Footer/>
  
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Input from './components/Input.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  data(){
    return {

  }
  },
  components: {
    Header,
    Input,
    List,
    Footer
  }
}
</script>

<style>
#app {

}
</style>
