<template>
  <div>
    <b-jumbotron id="about">
      <br />
      <br />
      <h1 class="title t0" style="text-align: center">Tech Stack</h1>
      <br />
      <b-container>
        <div class="skillset">
          <b-row>
              <b-col class="skill" sm="auto" v-for="skill in skills" :key="skill">
                <div class="skill-img">
                  <img :src="require(`../assets/skills/${skill}.png`)" />
                </div>
                <div class="skill-text">
                  {{ skill }}
                </div>
              </b-col>
          </b-row>
        </div>

        <!-- <b-row class="skillset">
          <b-card class="skill" v-for="skill in skills" :key="skill">
            <b-row style="width: 100%" no-gutters>
              <b-col md="6" sm="12" style="height: 100%">
                <b-card-img
                  :src="require(`../assets/skills/${skill}.png`)"
                ></b-card-img>
              </b-col>
              <b-col md="5">
                <b-card-body id="card-body">
                  {{ skill }}
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-row> -->
      </b-container>
      <br />
      <br />
      <br />
      <br />
      <p>
        <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed dui
        vel arcu placerat congue ut vitae metus. Donec quis laoreet purus. Nulla
        eu est egestas, rutrum elit eget, facilisis dui. Donec dolor purus,
        interdum ac ante ac, dictum dictum dui. Aenean nibh leo, dignissim eu
        viverra id, volutpat sit amet tortor. Mauris lacinia, magna at
        consectetur elementum, sapien mauris volutpat est, vel egestas ante
        risus ac turpis. Pellentesque quis tellus sed massa auctor tempor. Ut
        egestas ipsum tortor, cursus tempor ex consequat sit amet. Vivamus ac
        erat in eros faucibus pharetra nec in orci. Morbi consectetur tincidunt
        mi at consectetur. Curabitur ante neque, feugiat cursus magna a,
        placerat tristique nibh. -->
        Despite these being currently being my technologies of choice, I am
        constantly learning new frameworks to further develop my skillset in all
        realms of front end web development.
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "Javascript",
        "Vue.js",
        "HTML",
        "CSS",
        "Sass",
        "Bootstrap",
        "Git",
        "Axios",
        "Figma",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skill {
  display: flex;
  flex-direction: row;
  line-height: 50px;
  height: 50px;
  //width: 250px !important;
  margin: 10px;
  font-size: 20px;
  transition: transform 0.2s;
  background-color: transparent;
  color: white;
  border: none;
  .skill-img {
    img {
      height: 50px;
    }
  }
}

.skill:hover {
  transform: scale(1.2);
}

.skillset {
  width: 80%;
  margin: auto;
  //display: flex;
  //flex-wrap: wrap;
  //justify-content: center;
  //text-align: center;
  .row {
    justify-content: center;
    //margin: auto;
  }
}
.skill-text {
  padding-left: 10px;
}
</style>