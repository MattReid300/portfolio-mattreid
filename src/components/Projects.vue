<template>
  <div>
    <br />
    <h1 class="title t1" style="padding: 30px">
      {{ title }}
    </h1>
    <div id="cards">
      <b-card
        title="Vue Newspaper Site"
        id="b-card1"
        img-alt="Card image"
        img-height="200px"
        img-left
      >
        <b-card-text>
          <p>
            One of my more advanced projects which uses the Vue.js framework for the front end and Firebase Realtime Database for the backend.
          </p>
          <b-button
            variant="outline-dark"
            onclick="location.href='https://vue-newspaper-app.netlify.app/'"
          >
            <span><b-icon icon="lightning-fill"></b-icon></span>
            Click here to see the app
          </b-button>
          <b-button
            variant="dark"
            onclick="location.href='https://github.com/MattReid300/vue-newspaper-app'"
          >
            <span><b-icon icon="code"></b-icon></span>
            Click here to see the code
          </b-button>
        </b-card-text>
      </b-card>
      <b-card
        title="Axios Quiz app"
        id="b-card4"
        img-alt="Card image"
        img-height="200px"
        img-left
      >
        <b-card-text>
          <p>
            Quiz app built with Vue Js that fetches an open API database using
            Axios JavaScript library. 
          </p>
          <b-button
            variant="outline-dark"
            onclick="location.href='https://vue-quizzle-app.netlify.app/'"
          >
            <span><b-icon icon="lightning-fill"></b-icon></span>
            Click here to see the app
          </b-button>
          <b-button
            variant="dark"
            onclick="location.href='https://github.com/MattReid300/vue-quizzle-app'"
          >
            <span><b-icon icon="code"></b-icon></span>
            Click here to see the code
          </b-button>
        </b-card-text>
      </b-card>
      <b-card
        title="JavaScript Tetris"
        id="b-card2"
        img-alt="Card image"
        img-height="200px"
        img-right
      >
        <b-card-text>
          <p>
            Tetris minigame built with vanilla JavaScript and HTML. I learnt a lot
            of new concepts and deepened my knowledge of the JavaScript language.
          </p>
          <b-button
            variant="outline-dark"
            onclick="location.href='https://mattreid300.github.io/tetris-game/'"
          >
            <span><b-icon icon="lightning-fill"></b-icon></span>
            Click here to see the app
          </b-button>
          <b-button
            variant="dark"
            onclick="location.href='https://github.com/MattReid300/tetris-game'"
          >
            <span><b-icon icon="code"></b-icon></span>
            Click here to see the code
          </b-button>
        </b-card-text>
      </b-card>
      <b-card
        title="HTML-JS Currency Converter"
        id="b-card3"
        img-alt="Card image"
        img-height="200px"
        img-left
      >
        <b-card-text>
          <p>
            JavaScript app which fetches live currency exchange
            rates and converts any amount of money from one to another.
          </p>
          <b-button
            variant="outline-dark"
            onclick="location.href='https://mattreid300.github.io/jscurrencyconverter/'"
          >
            <span><b-icon icon="lightning-fill"></b-icon></span>
            Click here to see the app
          </b-button>
          <b-button
            variant="dark"
            onclick="location.href='https://github.com/MattReid300/jscurrencyconverter'"
          >
            <span><b-icon icon="code"></b-icon></span>
            Click here to see the code
          </b-button>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Web Development Projects",
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  #b-card {
    width: 100%;
  }
}
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
