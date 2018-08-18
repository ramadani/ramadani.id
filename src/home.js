import Vue from 'vue';
import VueResource from 'vue-resource';

import Repo from './components/Repo';

Vue.use(VueResource);

new Vue({
  el: '#home',
  delimiters: ['${', '}'],

  components: {
    Repo,
  },

  data: {
    listOfRepo: [],
    repoLoaded: false,
    quote: {
      author: '',
      content: '',
    },
  },

  computed: {
    repos() {
      return this.listOfRepo.slice(0, 6);
    },
  },

  methods: {
    getRepos() {
      const params = {
        sort: 'pushed',
        direction: 'desc',
      };
      const headers = {
        'Accept': 'application/vnd.github.v3+json',
      };

      this.$http.get('https://api.github.com/users/ramadani/repos', { params, headers })
        .then(res => {
          this.listOfRepo = res.body;
          this.repoLoaded = true;
        });
    },

    getRandomQuote() {
      this.$http.get('http://quotes.stormconsultancy.co.uk/random.json').then(res => {
        this.quote = Object.assign(this.quote, {
          author: res.body.author,
          content: res.body.quote,
        });
        console.log(this.quote);
      });
    }
  },

  mounted() {
    this.getRepos();
    this.getRandomQuote();
  }
});
