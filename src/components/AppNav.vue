<template>
    <div id="navi">
      <ul>
          <li><router-link to="/counter">カウンター</router-link></li>
          <li><router-link to="/qiita">Qiita</router-link></li>
          <li><router-link to="/graph">グラフ</router-link></li>
      </ul>
    </div>
</template>

<style scoped>
  #navi {
    text-align: center;
    font-size: 30px;
  }

  #navi li {
      display: inline-block;
      margin: 0 1em 0 1em;
  }
</style>
