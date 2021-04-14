<style>
:root {
  --ion-safe-area-top: 20px;
  --ion-safe-area-bottom: 22px;
}

.container-stretch {
  padding-left: 30px;
  padding-right: 30px;
}

.image-login {
  width: 50%;
  margin: auto;
  margin-top: 20%;
}

.acept-btn {
  margin-top: 20%;
  padding-left: 8%;
  padding-right: 8%;
  margin: auto;
  margin-top: 20%;
}

.dashboard-panel {
  margin-top: 50%;
  margin-top: 50%;
  margin-left: 12%;
}

ion-thumbnail {
  --size: 100px;
}

ion-thumbnail {
  --border-radius: 100%;
}
</style>
<template>
  <ion-header translucent> </ion-header>

  <ion-content fullscreen>
    <ion-grid class="dashboard-panel">
      <ion-row>
        <ion-col
          class="image-dashboard"
          v-for="value in imagesInit"
          :key="value"
        >
          <ion-thumbnail>
            <router-link :to="{ name: value.location, params: { location: value.location }}"></router-link>

            <div class="image-content">
              <ion-img :src="value.src" size="30px"></ion-img>
            </div>
          </ion-thumbnail>
          <ion-label>{{ value.text }}</ion-label>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col
          class="image-dashboard"
          v-for="value in imagesEnd"
          :key="value"
        >
          <ion-thumbnail>
            <div class="image-content">
              <ion-img :src="value.src" size="30px"></ion-img>
            </div>
          </ion-thumbnail>
          <ion-label>{{ value.text }}</ion-label>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import {
  IonContent,
  //IonItem,
  IonLabel,
  IonHeader,
  //IonList,
  //IonButton,
  IonRow,
  IonCol,
  IonThumbnail,
  IonImg,
  IonGrid,
  //IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    // IonItem,
    IonLabel,
    IonHeader,
    // IonList,
    //IonButton,
    IonRow,
    IonCol,
    IonThumbnail,
    IonImg,
    IonGrid,
    // IonInput,
  },
  data() {
    return {
      imagesInit: [
        {
          src: "./assets/images/report.png",
          text: "Rondas",
          location: "DashboardList",
          data: {
            name: "inventory"
          }
        },
        {
          src: "./assets/images/inventory.png",
          text: "Inventario",
          data: {
            name: "inventory"
          }
        },
      ],
      imagesEnd: [
        {
          src: "./assets/images/gps.png",
          text: "GPS",
        },
        {
          src: "./assets/images/logout.png",
          text: "Cerrar Sesión",
        },
      ],
    };
  },
  inheritAttrs: false,
});
</script>
