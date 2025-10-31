<template>
  <div id="about">
    <b-row class="h-100" align-v="center">
      <!-- <p class="mb-5">
            Hi, I'm Matt - a passionate Frontend Web Developer with a knack for creating dynamic, user-friendly
            applications. Here's a look at the technologies I work with.
          </p> -->
      <b-col cols="12" md="6" class="bio">
        <h1 class="title t0 mb-4">About Me</h1>
        <p style="font-size: 20px;">{{ bio }}</p>
      </b-col>
      <b-col cols="12" md="6">
        <b-row class="skillset">
          <b-col class="skill" cols="12" sm="3" v-for="skill in skills" :key="skill.name">
            <div class="skill-img">
              <img :src="skill.img" />
            </div>
            <div class="skill-text">
              {{ skill.name }}
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bio: "I specialize in frontend web development with a focus on building functional, high-performing applications using modern JavaScript frameworks. I thrive in fast-paced environments where initiative and problem-solving matter.",
      skills: [
        {
          name: "Javascript",
          img: require("../assets/skills/Javascript.png")
        },
        {
          name: "Vue.js",
          img: require("../assets/skills/Vue.js.png")
        },
        {
          name: "Nuxt",
          img: require("../assets/skills/Nuxt.png")
        },
        {
          name: "Typescript",
          img: require("../assets/skills/Typescript.png")
        },
        {
          name: "HTML",
          img: require("../assets/skills/HTML.png")
        },
        {
          name: "CSS",
          img: require("../assets/skills/CSS.png")
        },
        {
          name: "Pinia",
          img: require("../assets/skills/Pinia.png")
        },
        {
          name: "Vuetify",
          img: require("../assets/skills/Vuetify.png")
        },
        {
          name: "Sass",
          img: require("../assets/skills/Sass.png")
        },
        {
          name: "Bootstrap",
          img: require("../assets/skills/Bootstrap.png")
        },
        {
          name: "Git",
          img: require("../assets/skills/Git.png")
        },
        {
          name: "Figma",
          img: require("../assets/skills/Figma.png")
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skillset {
  //width: 80%;
  margin: auto;

  max-width: 30rem !important;

  //display: flex;
  //flex-wrap: wrap;
  //justify-content: center;
  //text-align: center;
  .row {
    justify-content: center;
    //margin: auto;
  }
}

.bio {
  text-align: left;
  padding-right: 100px;
  padding-left: 100px;
}

// .skill-text {
//   padding-left: 10px;
// }</style>