<template>
  <v-app>
    <router-view />
        <!----Navigational Drawer Begins---->
    <v-navigation-drawer 
      v-model="drawer" 
      absolute
      temporary
      app class="indigo">
      <p> MAIN MENU: </p>

          <v-btn class="mt-4" 
          block
          elevation="2"
          color="blue"
          >Sign In</v-btn>

          <v-btn class="mt-4" 
          block
          elevation="2"
          color="green"
          >Log In</v-btn>

          <v-btn class="mt-4" 
          block
          elevation="2"
          dark
          v-bind="attrs"
          v-on="on"
          color="indigo"
          @click="dialog = !dialog"
          >Terms of Use
          </v-btn>

           <div class="text-center">
          <v-dialog
         v-model="dialog"
         width="500">
         <v-card class @click="drawer = false">
         <v-card-title class="text-h5 grey lighten-2">
            Privacy Policy
         </v-card-title>
           <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
         <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
           <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
        </v-card-actions>
        
             </v-card>
          </v-dialog>
        </div>
          <v-btn class="mt-4" 
          block
          elevation="2"
          color="purple"
          >FAQ Site</v-btn>
      </v-navigation-drawer>
        <!----Navigational Drawer Ends---->
        <!----Tool Bar  Begins---->
    <v-toolbar app color=#e8eaff>
      <v-toolbar-side class @click="drawer= !drawer">
           <v-btn icon><v-icon>mdi-menu</v-icon></v-btn>
      </v-toolbar-side>
      <v-toolbar-title>2022 © The Best Tech Incorporated </v-toolbar-title>
     <spacer></spacer>
      <v-btn text rounded>FAQ</v-btn>
      <v-btn text rounded>About</v-btn>
      <v-btn text rounded>Terms of Use</v-btn>
      <v-btn text rounded>Contact Us</v-btn>
    </v-toolbar>
        <!----Tool Bar Ends---->

      <!----Main Page Begins---->
    <v-main class="pa-0">
      <v-parallax
        src="https://cdn.discordapp.com/attachments/996058723707523093/1028808607371903047/Untitled4111.jpg"
        class="pa-4"
        style="color: white"
      >
          <v-content class="pa-4">
          <v-card 
          width = "1300" 
          height = "200"
          class="mx-auto mt-10" 
          style="background-color: rgba(255, 255, 255, 0.8)">
         <v-card-title>Sign In Page</v-card-title>
          <v-card-text>

      <h1>Welcome to Homework Help Corner! 🎓</h1>
      <v-spacer></v-spacer>
      <v-divider vertical />
      <div>
        Welcome to your local high school solutions dealer street where everything's locally created for the best experience!
      </div>
      <div>
        Click "Sign In" to create an account, or "Log In" to enter your account. Only school gmail accounts are permitted (no strangers allowed!).
      </div>
      <v-btn class="mt-4" color="blue" @click="$router.push('signin')">Sign In</v-btn>
      
      <v-btn class="mt-4" color="green" @click="$router.push('login')">Log In</v-btn>
          </v-card-text>
          </v-card>
         </v-content>
    </v-parallax>
    </v-main>
    <!----Main Page Ends---->
    <!----Footer Begins---->
    <v-footer
    dark
    padless
    color="black"
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      color="black"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        
      </v-card-text>
      <v-card-text class="white--text pt-0">
        This was made by a highschool student that had absolutely zero experience in creating websites from bare scratch. Don't be afraid to try new things, you may find yourself a new hobby, future carrer interest, impress friends, have fun, etc! Don't give up folks, try it - nothing can go wrong. :)
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong> © The Best Tech Incorporated</strong>
      </v-card-text>
    </v-card>
  </v-footer>
      <!----Footer Ends---->
  </v-app>
</template>



<!-----Script----->
<script>
export default {
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
      }
    },
  data() {
    return {
      drawer: false
    }
  },
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style>
.mt-4 {
  margin-right: 20px
}
p {
  background-image: url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/prettiest-college-campuses-berry-college-1592777599.jpg');
}

pt-0 {
  display: grid;
  place-items: center;
}
</style>