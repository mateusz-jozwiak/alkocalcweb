<template>
  <div class="responsive-div">
        <v-card class="mx-2 my-2 card rounded-lg" max-width="auto">
          <v-card-title class="text-h5"> Mateusz Jozwiak </v-card-title>

          <v-card-subtitle>Alkocalc</v-card-subtitle>

          <v-card-actions>
            <v-btn
              text
              onclick="window.location.href='mailto:mateusz@jozwiak.info?subject=AlkoCalc'"
            >
              Napisz do mnie - mateusz@jozwiak.info
            </v-btn>
          </v-card-actions>
        </v-card>
        </div>
      </template>

<style scoped>

.responsive-div {
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
}
.center {
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
}

.card {
  max-width: 900pxpx;

  margin: 0 auto;
  border-radius: 8px;
  z-index: 1;
}

.tools {
  display: flex;
  align-items: center;
  padding: 9px;
}

.circle {
  padding: 0 4px;
}

.box {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}
</style>
