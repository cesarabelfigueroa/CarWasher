<style scoped>
.content-list {
  height: 60%;
}

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
    <ion-content fullscreen>
      <section class="header-search">
        <ion-toolbar>
          <ion-searchbar></ion-searchbar>
        </ion-toolbar>
      </section>
      <section class="content-list">
        <ion-loading cssClass="my-custom-class" message="Espere...">
        </ion-loading>
        <ion-list>
          <ion-item v-for="value in items" :key="value">
            <ion-label>
              <h3>{{ value.title }}</h3>
              <p>{{ value.subtitle }}</p>
            </ion-label>
            <ion-button>
              <ion-label>Editar</ion-label>
            </ion-button>
            <ion-button>
              <ion-label>Eliminar</ion-label>
            </ion-button>
          </ion-item>
        </ion-list>
      </section>
      <section class="content-action">
        <ion-row>
          <ion-col>
            <ion-button class="ion-margin-vertical" expand="full" shape="round"
              >Agregar</ion-button
            >
          </ion-col>
        </ion-row>
      </section>
    </ion-content>
</template>

<script>
import {
  IonContent,
  IonToolbar,
  IonLoading,
  //IonCheckbox,
  IonItem,
  IonLabel,
  // IonTitle,
  IonHeader,
  IonList,
  //IonListHeader,
  IonButton,
  IonRow,
  IonCol,
  //IonRadio,
  // IonRadioGroup,
  IonBackButton,
  IonButtons,
  IonSearchbar,
  // IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { db } from "../main";

export default defineComponent({
  components: {
    IonContent,
    IonToolbar,
    IonLoading,

    // IonCheckbox,
    IonItem,
    IonLabel,
    //  IonTitle,
    IonHeader,
    IonList,
    //IonListHeader,
    IonButton,
    IonRow,
    IonCol,
    //IonRadio,
    // IonRadioGroup,
    IonBackButton,
    IonButtons,
    IonSearchbar,

    //  IonIcon,
  },
  data() {
    const page = "inventory";
    const collection = db.collection("cities");

    let items = [];
    if (page == "inventory") {
      items = [
        {
          title: "Av Los Próceres",
          subtitle: "13/06/2021 - 16:41",
        },
      ];
    } else {
      //const snapshot = await collection.where().get();
      //console.log(snapshot);

      items = [
        {
          name: "Esponja",
          subtitle: "35",
        },
      ];
    }

    return {
      items,
    };
  },
  inheritAttrs: false,
});
</script>
