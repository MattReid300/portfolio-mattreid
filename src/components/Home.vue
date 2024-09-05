<template>
  <div>
    <br />
    <div class="landing-page">
      <div class="landing-text">
        <h1 class="page-header">
          Hi, my name is
          <b style="color: #3467a9">Matthew Reid</b>
        </h1>
        <h4 style="color: #808080">
          I am a self-taught front-end web developer and graphic designer.
        </h4>
        <span id="span1">
          <a href="#dev-about"><b-icon icon="arrow-down"></b-icon>Skillset</a>
          <a href="#dev-projects"
            ><b-icon icon="arrow-down"></b-icon>Projects</a
          >
        </span>
      </div>
      <div class="landing-image">
        <img src="../assets/avatarMatt_updated.svg" alt="me" id="img-me" />
      </div>
    </div>
    <a id="dev-about"></a>
    <About></About>
    <a id="dev-projects"></a>
    <Projects></Projects>
  </div>
</template>

<script>
import Projects from "./Projects.vue";
import About from "./About.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      // title: "Skillset",
      localmode: 0,
    };
  },
  components: {
    Projects,
    About,
  },
  computed: mapState({
    mode: (state) => state.mode,
  }),
};
</script>
Projectsript>

<style lang="scss" scoped>
.landing-page {
  //width: 100%;
  height: 700px;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 110px;
  div {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.landing-text {
  color: rgb(0, 0, 0);
  font-size: 45px;
  text-align: left;
  //margin-top: 200px;
  //padding: 20px;
  padding-top: 90px;
  //margin-left: 150px;
  //width: 45rem;
}
#span1 {
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
  margin-bottom: 0px;
  font-size: 25px;
}

#nav-alert {
  position: relative;
  z-index: 999;
  // padding-top: 50px;
  margin: auto;
  margin-top: 50px !important;
  width: 40%;
}

#span1 a {
  color: #3467a9;
}

#img-me {
  width: 20rem;
  //margin: 100px;
}

@media screen and (max-width: 1000px) {
  .landing-page {
    flex-direction: column;
    padding-top: 50px;
    .landing-image {
      padding: 0;
    }
  }
}
</style>
