<template>
 <v-app class="grey darken-3">
   
    <v-tabs grow class="mt-5" hide-slider  icons-and-text  height="80">
      <v-tab solo-inverted  class="grey--text text--darken-3 " :active-class="tab.color" v-for="tab in tabs" :key="tab.title" >
              <v-icon large color="black" >
                {{tab.icon}}
              </v-icon>
              <span class="mt-3">
                {{tab.title}}
              </span>
      </v-tab>

      <v-tab-item class="font-weight-light subheading" v-for="tab in tabs" :key="tab.title">
         <v-divider></v-divider>
            
              <v-container  v-if="tab.title == 'code'" >

                <v-layout  row wrap justify-center>
                 
                    
                  <v-card flat tile hover light class=" red accent-3 pa-2 my-5">
                    <v-card flat tile hover  class=" red accent-3 pa-2">
                      <v-card flat tile hover light class=" red accent-3 pa-2">
                        
                            <v-card class="grey darken-4 grey--text">
                              <v-card-text>
                            <p><span class="red--text text--accent-3 font-weight-regular">Red</span> is the color of the <span class="red--text text--accent-3 font-weight-regular">Code</span>.
                            this reminds us to work harder and better.
                            this is where your journey begins. Courses, Classes, Links, Examples and all you need to be a great web developer, is here.
                            Step by step you'll learn everything.
                            your <span class="red--text text--accent-3 font-weight-regular">Patient</span> guarantee your <span class="red--text text--accent-3 font-weight-regular">Success</span>.
                            Lets start.</p>
                              </v-card-text>
                        </v-card>
                      </v-card>
                      </v-card>
                    </v-card>
                  
                   
                  

                  <v-flex v-for="card in cards" :key="card.title" xs12 sm12>
                  
                  <v-card hover falt :class="`pa-2 my-2 ${card.color}`">
                  
                    <v-card hover flat :class="`pa-2  ${card.color}`"  > 
                       
                       <v-container>
                         <v-layout row wrap justify-space-between>
                           
                           <v-flex  xs12 md4>
                            <img class="img" :src="card.icon"/>
                           </v-flex>
                          
                          <v-flex xs12 md4>
                          <v-card-text>
                            <h1>{{card.title}}</h1>
                            <p>{{card.text}}</p>
                          </v-card-text>
                          </v-flex>
                         </v-layout>
                      </v-container>
                    </v-card>
                  </v-card>
                  </v-flex>


                  <v-flex class="my-4" xs12 md12>  
                      <v-card flat class="grey darken-3 display-1 font-weight-thin pa-2" hover>
                        <v-card flat class="grey darken-3 display-1 font-weight-thin pa-2" hover>
                          <v-card flat light class="grey darken-3 display-1 font-weight-thin" hover>
                            <v-container>
                             <v-layout column align-center justify-space-around>
                               <v-flex xm12 md12>
                                <svg class="img" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
                               </v-flex>
                               <v-flex>
                                <v-card-text active-class="blue darken-2 white--text display-2">
                                  Add a New Step
                                </v-card-text>
                               </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card>
                        </v-card>
                      </v-card>
                        
                  </v-flex>
            
                  
                   
                  
                </v-layout>
                 
              </v-container>

              <v-container v-else-if="tab.title == 'market'"  grid-list-xs>

                  
                      <v-card tile flat hover light class=" yellow accent-3 pa-2 my-5">
                        <v-card tile flat hover  class=" yellow accent-3 pa-2">
                          <v-card tile flat hover light class=" yellow accent-3 pa-2">
                             <v-card tile flat class="grey darken-4 grey--text">
                              <v-card-text>
                                <p>In our opinion the <span class="yellow--text font-weight-regular">Market</span> is <span class="yellow--text font-weight-regular">Yellow</span>.
                                That's where we speak in business language. In here we discuss about Business, <span class="yellow--text font-weight-regular">Marketing</span>, entrepreneurship etc.
                                Are you ready to be a Business man? Lets dig into it. </p>
                              </v-card-text>
                             </v-card>
                            </v-card>
                           </v-card>
                          </v-card>
                        
                
                  <v-layout row  justify-center>

                  </v-layout>

              </v-container>

              <v-container v-else>

           
                  <v-card flat tile hover light class=" blue accent-3 pa-2 my-5">
                    <v-card flat tile hover  class=" blue accent-3 pa-2">
                      <v-card flat tile hover light class=" blue accent-3 pa-2">
                         

                            <v-card flat class="grey darken-4 grey--text">
                              <v-card-text>

                                <p>Pick the <span class="blue--text font-weight-regular">Blue</span> brush and paint the future. BrainStorming, solving complex problems, collabortion, <span class="blue--text font-weight-regular">team</span> work.
                                  Here we learn to empathize with people, consumers and ourselves.
                                  We learn how to design <span class="blue--text font-weight-regular">solutions</span>. So what you watting for, lets fire up a new world! </p>

                              </v-card-text>
                              </v-card>

                            
                           </v-card>
                          </v-card>
                        </v-card>
                  
                  
        
              </v-container>
       
      </v-tab-item>
  
    </v-tabs>
  <!-- <img src="../assets/Laravel.svg.png"/> -->
  <!-- <v-btn @click="$vuetify.goTo(target, options)" icon class="cyan end">
      <v-icon>
        expand_less
      </v-icon> -->
    </v-btn>
 </v-app>
</template>


<script>
  export default {
   name:'home',
   data(){
     return{
       tabs:[
         {icon:'code',title:'code',color:'red accent-3 black--text'},
         {icon:'store',title:'market',color:'yellow accent-3 black--text'},
         {icon:'wb_incandescent',title:'inspire',color:'blue accent-3 black--text'}
       ],
       cards:[
         {title:'HTML 5',icon:'/html5.png',color:'red ',text:'HTML5 is the latest version of Hypertext Markup Language, the code that describes web pages.Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript'},
         {title:'Css 3',icon:'/CSS3_logo_and_wordmark.svg.png',color:'blue ',text:'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'},
         {title:'JavaScript',icon:'/JavaScript_logo_2.svg.png',color:'yellow  grey--text text--darken-3',text:'JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data. This language Interact with User Behavior in a Web Page.'},
         {title:'Vue.js',icon:'/Vue.js_Logo_2.svg.png',color:'teal',text:'Vue is a Progressive JavaScript Framework. This Open-Source Framwork Use to Build Signle Page Appications.'},
         {title:'Vuetify',icon:'/vuetify.png',color:'white grey--text text--darken-3',text:'Vuetify is a Material Component Framework for Vue applications. Which means Vuetify is a semantic component framework for Vue. It aims to provide clean, semantic and reusable components that make building your application fast.'},
         {title:'PHP and MySQL',icon:'/mysql.png',color:'pink',text:'PHP is a server side scripting language. that is used to develop Static or Dynamic websites or Web applications. PHP stands for Hypertext Pre-processor, that earlier stood for Personal Home Pages.MySQL is a database management system. A database is a structured collection of data.<br> MySQL Use Beside the PHP.'},
         {title:'Laravel',icon:'/laravel-laravel.png',color:'white grey--text text--darken-3',text:'Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, and caching. Laravel aims to make the development process a pleasing one for the developer without sacrificing application functionality.'},
       ],
       toggle:true,
       swt:true,
     }
   },
  
  }
</script>


<style>
.img{
  
  width: 30vw;
  
}
</style>
