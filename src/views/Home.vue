<style scoped>
.content-action {
  width: 89%;
  margin: auto;
}
</style>

<template>
  <ion-header translucent>
    <ion-toolbar>
      <ion-buttons>
        <ion-back-button defaultHref="./dashboard"></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding-end">
    <section class="content-list">
      <ion-list>
        <ion-list-header>Servicio</ion-list-header>
        <ion-item>
          <ion-checkbox
            color="secondary"
            slot="start"
            @update:modelValue="data.external = $event"
            :modelValue="data.external"
            >></ion-checkbox
          >
          <ion-label>Lavado Exterior</ion-label>
        </ion-item>

        <ion-item>
          <ion-checkbox
            color="secondary"
            slot="start"
            @update:modelValue="data.internal = $event"
            :modelValue="data.internal"
          ></ion-checkbox>
          <ion-label>Lavado Interior</ion-label>
        </ion-item>
      </ion-list>

      <ion-list>
        <ion-list-header>Tipo de Vehículo</ion-list-header>
        <ion-radio-group
          @update:modelValue="data.type = $event"
          :modelValue="data.type"
        >
          <ion-item>
            <ion-label>Van</ion-label>
            <ion-radio value="van"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Camioneta</ion-label>
            <ion-radio value="camioneta"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Automóvil</ion-label>
            <ion-radio value="automovil"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>
      <ion-list>
        <ion-list-header>Condiciones</ion-list-header>
        <ion-item>
          <ion-checkbox
            color="secondary"
            slot="start"
            @update:modelValue="data.scratches = $event"
            :modelValue="data.scratches"
          ></ion-checkbox>
          <ion-label>Rayaduras</ion-label>
        </ion-item>

        <ion-item>
          <ion-checkbox
            color="secondary"
            slot="start"
            @update:modelValue="data.hits = $event"
            :modelValue="data.hits"
          ></ion-checkbox>
          <ion-label>Golpes</ion-label>
        </ion-item>
        <ion-item>
          <ion-checkbox
            color="secondary"
            slot="start"
            @update:modelValue="data.replacements = $event"
            :modelValue="data.replacements"
          ></ion-checkbox>
          <ion-label>Llanta de Repuesto</ion-label>
        </ion-item>
      </ion-list>
    </section>
    <section class="content-action">
      <ion-row>
        <ion-col>
          <ion-button
            class="ion-margin-vertical"
            @click="accept"
            expand="full"
            shape="round"
            >Aceptar</ion-button
          >
        </ion-col>
      </ion-row>
    </section>
  </ion-content>
</template>

<script>
import { Plugins } from "@capacitor/core";

const { Geolocation } = Plugins;

import {
  IonContent,
  IonToolbar,
  IonCheckbox,
  IonItem,
  IonLabel,
  // IonTitle,
  IonHeader,
  IonList,
  IonListHeader,
  IonButton,
  IonRow,
  IonCol,
  IonRadio,
  IonRadioGroup,
  IonBackButton,
  IonButtons,
  alertController,
} from "@ionic/vue";

import { fb, db } from "../main";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonToolbar,
    IonCheckbox,
    IonItem,
    IonLabel,
    //  IonTitle,
    IonHeader,
    IonList,
    IonListHeader,
    IonButton,
    IonRow,
    IonCol,
    IonRadio,
    IonRadioGroup,
    IonBackButton,
    IonButtons,
  },
  inheritAttrs: false,
  methods: {
    async accept() {
      const metadata = this.data;
      const location = {} || (await this.getCurrentPosition());
      const date = new Date().toISOString();
      metadata.location = location;
      metadata.date = date;

      if (!metadata.external && !metadata.internal) {
        const alert = await alertController.create({
          cssClass: "alert-message",
          header: "Error",
          message: "Debe seleccionar un al menos un tipo de Lavado.",
          buttons: ["Aceptar"],
        });

        //  await loading.dismiss();
        await alert.present();
      } else if (!metadata.type) {
        const alert = await alertController.create({
          cssClass: "alert-message",
          header: "Error",
          message: "Debe seleccionar un tipo de Vehículo.",
          buttons: ["Aceptar"],
        });

        //await loading.dismiss();
        await alert.present();
      } else {
        const user = fb.auth().currentUser;
        const element = {
          data: metadata,
        };
        if (user) {
          db.collection("orders")
            .doc(user.uid)
            .collection(date)
            .doc()
            .set(element)
            .then(async () => {
              const alert = await alertController.create({
                cssClass: "alert-message",
                header: "Éxito",
                message: "Bienvenido",
                buttons: ["Aceptar"],
              });

              await alert.present();
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        }     
      }
    },
    async getCurrentPosition() {
      const coordinates = await Geolocation.getCurrentPosition();
      return coordinates;
    },
  },
  setup() {
    const data = {};

    return { data };
  },
});
</script>
