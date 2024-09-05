<template>
  <div>
    <br /><br />
    <h1 class="title t1" style="padding: 30px">
      {{ title }}
    </h1>

    <b-card id="b-card">
      <!-- <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
      >
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>
      </b-carousel> -->
      <div class="video-container">
        <video
          id="illustration-library"
          src="../assets/animation.mp4"
          loop
          autoplay
        ></video>
      </div>
      <b-card-text>
        <h2><b>NBA Illustration Library</b></h2>
        <p>
          For this project, I designed a rudimentary Illustration library where
          users can create and customise NBA player avatars to download them and
          make their own changes to the design or include them in their own work
          (website, presentation, etc)
        </p>
      </b-card-text>
    </b-card>
    <b-card id="b-card">
      <div class="video-container" style="height: 223px">
        <video
          id="infographic-vid"
          src="../assets/SleepInfographicVideo.mp4"
          loop
          autoplay
        ></video>
      </div>
      <b-card-text>
        <h2><b>Infographic Design</b></h2>
        <p>
          For this project, I designed a rudimentary Illustration library where
          users can create and customise NBA player avatars to download them and
          make their own changes to the design or include them in their own work
          (website, presentation, etc)
        </p>
      </b-card-text>
    </b-card>
    <b-card id="b-card">
      <!-- <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
      >
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>
      </b-carousel> -->
      <div class="video-container"></div>
      <b-card-text>
        <h2><b>Logo Design</b></h2>
        <p>
          I have created both 2d and 3d logos using image-editing software and
          other graphic design tools. I offer this service to small companys,
          startups or freelance businesses and design them specific to the
          branding of the customer.
        </p>
      </b-card-text>
    </b-card>
    <div id="img-holder">
      <img src="../assets/def_avatarMatt.svg" alt="me" id="img-me" />
    </div>
    <div id="about">
      <h1 class="title t0" style="text-align: center">About Me</h1>
      <p>
        After years of refining my skillset I can say that I am an experienced
        graphic designer that has worked on a wide variety of projects spreading
        across the different types of graphic design work. I have also
        collaborated with several clients to deliver to each of them a solution
        that is tailored to their specific needs. If you require my services or
        simply want to get in touch please feel free to contact me <router-link to="/contacts" id="router-link">here.</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Graphic Design Projects",
    };
  },
};
</script>

<style lang="scss" scoped>
.video-container {
  overflow: hidden;
  height: 180px;
  text-align: center;
}
#illustration-library {
  height: 250px;
  margin-top: -40px;
  margin-bottom: -120px;
}
#infographic-vid {
  height: 250px;
}
#b-card {
  text-align: left;
}
</style>