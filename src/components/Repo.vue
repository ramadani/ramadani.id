<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        <a :href="repo.html_url" target="_blank" class="text-body">{{ repo.name }}</a>
      </h5>
      <p class="card-text text-muted"><small>{{ repo.description }}</small></p>
      <div class="d-flex">
        <div v-show="repo.language" class="mr-2">
          {{ repo.language }}
        </div>
        <div v-show="repo.stargazers_count">
          <i class="fas fa-star fa-fw text-secondary"></i> {{ repo.stargazers_count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repo: Object,
  }
}
</script>
