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
</style>
<template>
  <ion-header translucent> </ion-header>
  <ion-content class="ion-padding-end">
    <ion-img class="image-login" src="./assets/images/login.png"></ion-img>
    <ion-list class="container-stretch">
      <ion-item>
        <ion-label position="floating" inputmode="email" type="email"
          >Usuario</ion-label
        >
        <ion-input></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating" type="password">Contraseña</ion-label>
        <ion-input></ion-input>
      </ion-item>
    </ion-list>
    <section class="acept-btn">
      <ion-row>
        <ion-col>
          <ion-button class="ion-margin-vertical" expand="full" shape="round"
            >Aceptar</ion-button
          >
        </ion-col>
      </ion-row>
    </section>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonItem,
  IonLabel,
  IonHeader,
  IonList,
  IonButton,
  IonRow,
  IonCol,
  //IonThumbnail,
  IonImg,
  IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonItem,
    IonLabel,
    IonHeader,
    IonList,
    IonButton,
    IonRow,
    IonCol,
    // IonThumbnail,
    IonImg,
    IonInput,
  },
  inheritAttrs: false,
});
</script>
