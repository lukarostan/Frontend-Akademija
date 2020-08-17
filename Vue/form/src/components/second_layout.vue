<script>
const app = new Vue({
  el: '#app',
  errors = [],
  form_sent = false,
  response_data: [], //srediti
  data: {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    educations: [
      {
        education: "",
        finished: null,
      },
  },
  mounted () {
    axios
      .post("https://factory.hr/api/test.php", this.data) {
        emulateJSON: true,
      }
      .then(response => (this.response_data = //dovršiti ));
  }
}

  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.firstname) {
        this.errors.push("Name required.");
      }
      if (!this.lastname) {
        this.errors.push("Last name required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }
      if (!this.phone) {
        this.errors.push("Phone required.");
      }
      if (!this.country) {
        this.errors.push("Country required.");
      }
      if (!this.errors.length) {
        return true;
      }
      if (!this.city) {
        this.errors.push("City required.");
      }
      if (!this.educations) {
        this.errors.push("Education required.");
      }
      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    save() {
      this.data.firstname = this.$refs[firstname].value;
      this.data.lastname = this.$refs[lastname].value;
      this.data.email = this.$refs[email].value;
      this.data.phone = this.$refs[phone].value;
      this.data.country = this.$refs[country].value;
      this.data.city = this.$refs[city].value;
      this.data.education = this.$refs[education].value;
      this.data.finished = this.$refs[finished].value;
      this.isEditing = !this.isEditing; //dodati edit button i =isEditing i arval
    }
  }
})
</script>

<style lang="sass" scoped>
</style>