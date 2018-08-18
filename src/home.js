import Vue from 'vue';
import VueResource from 'vue-resource';

import Repo from './components/Repo';
import quotes from './quotes.json';

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
  },

  computed: {
    repos() {
      return this.listOfRepo.slice(0, 6);
    },

    quote() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
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
  },

  mounted() {
    this.getRepos();
  }
});
