<template>
  <div class="projects">
    <br />
    <h1 class="t1 mb-4" style="padding: 30px">
      {{ title }} <b style="color: #1C4C89">Projects</b>
    </h1>
    <v-container id="cards">
      <b-row class="justify-content-center">
        <b-col cols="8" v-for="project in projects" :key="project.id" class="mb-4">
          <b-card class="w-100 text-left">
            <b-row no-gutters>
              <b-col cols="3">
                <b-card-img :src="project.img" alt="card image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col cols="9">
                <b-card-body class="h-100 d-flex flex-column justify-content-evenly pt-0">
                  <b-card-text>
                    <h4 class="font-weight-bold">{{ project.title }}</h4>
                    <p>{{ project.description }}</p>
                  </b-card-text>
                  <div class="b-card-actions">
                    <b-button variant="outline-accent" @click="goToSite(project.link)">
                    <span><b-icon icon="lightning-fill"></b-icon></span>
                    Click here to see the app
                  </b-button>
                  <b-button variant="accent" @click="goToSite(project.code)">
                    <span><b-icon icon="code"></b-icon></span>
                    Click here to see the code
                  </b-button>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>

          </b-card>
        </b-col>
      </b-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Here are my ",
      projects: [
        {
          id: 1,
          title: "Vue Newspaper App",
          description: "Digital newspaper app that uses Vue.js for the frontend and Firebase Realtime Database for the backend.",
          img: require("../assets/NewspaperApp.png"),
          link: "https://vue-newspaper-app.netlify.app/",
          code: "https://github.com/MattReid300/vue-newspaper-app",
        },
        {
          id: 2,
          title: "Axios Quiz app",
          description: "Quiz app built with Vue.js that fetches an open API database using Axios JavaScript library.",
          img: require("../assets/QuizzApp.png"),
          link: "https://vue-quizzle-app.netlify.app/",
          code: "https://github.com/MattReid300/vue-quizzle-app",
        },
        {
          id: 3,
          title: "JS Currency Converter",
          description: "Vanilla JavaScript app which fetches live currency exchange rates and converts money.",
          img: require("../assets/CurrencyApp.png"),
          link: "https://mattreid300.github.io/jscurrencyconverter/",
          code: "https://github.com/MattReid300/jscurrencyconverter",
        },
      ]
    };
  },
  methods: {
    goToSite(link) {
      window.location.href = link;
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  width: 250px;
  margin: 5px;
}

/*
.card {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: all 2s ease;
}
.reveal.active {
  transform: translateY(0px);
  opacity: 1;
}
*/
</style>
