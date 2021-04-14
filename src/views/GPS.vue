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

  </ion-content>
</template>

<script>
import {
  IonContent,
  IonToolbar,
  //IonCheckbox,
  //IonItem,
  //IonLabel,
  // IonTitle,
  IonHeader,
  //IonList,
  //IonListHeader,
  //IonButton,
  //IonRow,
  //IonCol,
  //IonRadio,
  // IonRadioGroup,
  IonBackButton,
  IonButtons,
  //IonSearchbar,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonToolbar,
    // IonCheckbox,
   // IonItem,
    //IonLabel,
    //  IonTitle,
    IonHeader,
   // IonList,
    //IonListHeader,
   // IonButton,
    //IonRow,
   // IonCol,
    //IonRadio,
    // IonRadioGroup,
    IonBackButton,
    IonButtons,
   // IonSearchbar,
    //IonIcon,
  },
  inheritAttrs: false,
});
</script>
