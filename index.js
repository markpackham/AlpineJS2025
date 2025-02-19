// Trigger as soon as Alphine loads from the html file
document.addEventListener("alpine:init", () => {
  Alpine.data("signupForm", () => ({
    username: "",
    password: "",
    passwordConfirm: "",
    belt: "",
    bio: "",
    newsletter: true,
    showPass: false,
    errors: {},
    beltChoices: ['black', 'white', 'red', 'orange', 'brown'],

    validateForm() {
      this.errors = {};

      if (this.username.length < 3) {
        this.errors.username = "Username must be at least 3 characters!";
      }

      if (this.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters.";
      }

      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = "Passwords do not match.";
      }

      if (!this.belt) {
        this.errors.belt = "Please select a belt color.";
      }

      if (this.bio.length < 10) {
        this.errors.bio = "Bio must be at least 10 characters.";
      }
    },

    // We need to get the event to later trigger a form reset
    // otherwise we'd have to change every single attribute one by one
    // eg this.username="" this.password=""
    submitForm($event) {
      this.validateForm();
      console.log(this.errors);

      // Get an array of keys from the error object
      if (Object.keys(this.errors).length === 0) {
        console.log(
          this.username,
          this.password,
          this.belt,
          this.bio,
          this.newsletter
        );

        // Use standard JavaScript reset to clear the form
        $event.target.reset()
      }
    },
  }));
});
