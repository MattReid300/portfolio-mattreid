<template>
  <div id="contacts">
    <br />
    <h1 class="title t3" style="padding-bottom: 30px">
      {{ title }}
    </h1>
    <b-container>
      <b-row class="text-left mb-5">
        <b-col cols="12" sm="6" class="mb-2">
          <p class="label">Name:</p>
          <b-form-input style="height: 50px;" v-model="form.name" placeholder="John Doe"></b-form-input>
        </b-col>
        <b-col cols="12" sm="6" class="mb-3">
          <p class="label">Email:</p>
          <b-form-input style="height: 50px;" v-model="form.email" placeholder="johndoe@example.com"></b-form-input>
        </b-col>
        <b-col cols="12" class="mb-3">
          <p class="label">Subject:</p>
          <b-form-input style="height: 50px;" v-model="form.title" placeholder="Insert Subject Here..."></b-form-input>
        </b-col>
        <b-col cols="12">
          <p class="label">Message</p>
          <b-textarea style="height: 100px;" v-model="form.message" placeholder="Input Message Here..."></b-textarea>
        </b-col>
      </b-row>
      <b-row align-h="end">
        <b-col cols="12" lg="3" sm="6">
          <b-button type="submit" variant="primary" class="w-100" @click="sendEmail">Submit</b-button>
        </b-col>
      </b-row>
    </b-container>
    <p style="color: grey;">Or feel free to contact me directly at <span style="text-decoration: underline;">matt.reid300@gmail.com</span></p>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      title: "Contact me here",
      form: {
        email: "",
        title: "",
        name: "",
        message: "",
      }
    };
  },
  methods: {
    sendEmail() {
      const serviceID = 'service_tnc7zsp'
      const templateID = 'template_9wc43cz'
      const publicKey = 'Ug0ea0rz1NVDlhgYD'

      emailjs.send(serviceID, templateID, this.form, publicKey)
        .then(() => {
          this.$bvToast.toast('Email sent successfully!', {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.form.name = ''
          this.form.email = ''
          this.form.title = ''
          this.form.message = ''
        })
        .catch(error => {
          console.error(error)
          this.$bvToast.toast('Failed to send email.', {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    }
  }
};
</script>

<style lang="css">
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

.label {
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
