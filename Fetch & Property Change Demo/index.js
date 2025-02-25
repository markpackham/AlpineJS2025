document.addEventListener("alpine:init", () => {
  Alpine.data("demo", () => ({
    posts: [],
    bg: "",

    // function automatically fires from Alpine.js if page has a "demo" component
    init() {
      // console.log('init')

      // fetch data
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((response) => response.json())
        .then((data) => (this.posts = data));
    },
  }));
});
