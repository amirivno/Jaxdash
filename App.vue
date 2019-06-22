<template>
  <v-app dark>

    <navbar/>

    
    <v-content>
    
      <keep-alive>
        <router-view exact></router-view>
      </keep-alive>
     
    </v-content>
    
 

  </v-app>
</template>

<script>
import Navbar from './components/Nav'

export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  components:{Navbar,}
}
</script>
