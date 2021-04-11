<template>
  <ion-header translucent>
    <ion-toolbar>
      <ion-title>Orden de Servicio</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding-end">
    <ion-list>
       <ion-list-header>Servicio</ion-list-header>
        <ion-item>
          <ion-checkbox color="secondary" slot="start"></ion-checkbox>
          <ion-label>Lavado Exterior</ion-label>
        </ion-item>
        <ion-item>
          <ion-checkbox color="secondary" slot="start"></ion-checkbox>
          <ion-label>Encerado</ion-label>
      </ion-item>
    </ion-list>

    <ion-list>
      <ion-list-header>Tipo de Vehículo</ion-list-header>
      <ion-radio-group>
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
        <ion-checkbox color="secondary" slot="start"></ion-checkbox>
        <ion-label>Rayaduras</ion-label>
      </ion-item>
   
      <ion-item>
        <ion-checkbox color="secondary" slot="start"></ion-checkbox>
        <ion-label>Golpes</ion-label>
      </ion-item>
      <ion-item>
        <ion-checkbox color="secondary" slot="start"></ion-checkbox>
        <ion-label>Llanta de Repuesto</ion-label>
      </ion-item>
    </ion-list>

    <section>
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
  IonToolbar,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonTitle,
  IonHeader,
  IonList,
  IonListHeader,
  IonButton,
  IonRow,
  IonCol,
  IonRadio,
  IonRadioGroup,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonToolbar,
    IonCheckbox,
    IonItem,
    IonLabel,
    IonTitle,
    IonHeader,
    IonList,
    IonListHeader,
    IonButton,
    IonRow,
    IonCol,
    IonRadio,
    IonRadioGroup,
  },
  inheritAttrs: false,
});
</script>
