<template>
  <div>
    <main>
      <h1>Hack the Box Employee Distribution from 2019 to 2022</h1>
      <Demo />
    </main>
    <footer>
      <p>HTB Dev Talks - May 2022</p>
    </footer>
  </div>
</template>

<script>
import { Demo6 as Demo } from "./components";

export default {
  name: "App",
  components: { Demo },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a4b1cd;
}

body {
  background-color: #121926;
  margin: 0 10vw;
}
h1 {
  color: white;
}
</style>
