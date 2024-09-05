<template>
  <div id="contacts" style="height: 100vh">
    <br />
    <h1 class="title t3" style="padding: 30px">
      {{ title }}
    </h1>
    <b-container>
      <p>
        Feel free to get in touch with me through any of the following platforms
      </p>
      <div class="jumbotron jumbo" id="content">
        <h5>
          <b>Email:</b>
          <a id="info" href="mailto:matt.reid300@gmail.com"
            >matt.reid300@gmail.com</a
          >
        </h5>
        <h5>
          <b>Github:</b>
          <a id="info" href="https://github.com/MattReid300">MattReid300</a>
        </h5>
        <h5>
          <b>Linkedin:</b>
          <a
            id="info"
            href="https://www.linkedin.com/in/matthew-reid-960080317/"
            >Matthew Reid</a
          >
        </h5>
      </div>
      
      <a href="MatthewReid_CV.pdf" download="MatthewReid_CV.pdf">
        <button id="cv">Matthew Reid CV</button>
      </a>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Contact me here",
    };
  },
};
</script>

<style lang="css" scoped>
#info {
  padding: 20px;
}
#content {
  margin: auto;
  width: 600px;
}
@media screen and (max-width: 800px) {
  #content {
    width: auto;
  }
}
</style>
