import Vue from 'vue';
import VueResource from 'vue-resource';

import Repo from './components/Repo';

Vue.use(VueResource);

new Vue({
  el: '#home',

  components: {
    Repo,
  },

  data: {
    listOfRepo: [],
    repoLoaded: false,
  },

  computed: {
    repos() {
      return this.listOfRepo.slice(0, 9);
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
        }, res => {

        });
    }
  },

  mounted() {
    this.getRepos();
  }
});
