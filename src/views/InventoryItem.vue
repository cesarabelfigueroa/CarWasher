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
    <ion-loading cssClass="my-custom-class" message="Espere..."> </ion-loading>
    <ion-img class="image-login" src="./assets/images/package.png"></ion-img>
    <ion-list class="container-stretch">
      <ion-item>
        <ion-input
          @value="item.name"
          @input="item.name = $event.target.value"
          placeholder="Nombre"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-input
          type="number"
          @value="item.quantity"
          @input="item.quantity = $event.target.value"
          placeholder="Cantidad"
        ></ion-input>
      </ion-item>
    </ion-list>
    <section class="acept-btn">
      <ion-row>
        <ion-col>
          <ion-button
            class="ion-margin-vertical"
            @click="_auth"
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
import {
  IonContent,
  IonItem,
  // IonLabel,
  IonHeader,
  IonList,
  IonButton,
  IonRow,
  IonCol,
  //IonThumbnail,
  IonImg,
  IonInput,
  alertController,
  IonLoading,
  loadingController,
} from "@ionic/vue";
//import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { fb } from "../main";

//const _auth = (event) => {};
//console.log(firebase.auth); // Undefined
//console.log(firebase.default.auth); // Function

export default {
  components: {
    IonContent,
    IonItem,
    //  IonLabel,
    IonHeader,
    IonList,
    IonButton,
    IonRow,
    IonCol,
    // IonThumbnail,
    IonImg,
    IonInput,
    IonLoading,
  },
  methods: {
    async _auth() {
      const loading = await loadingController.create({
        message: "Please wait...",
      });

      await loading.present();

      const messages = {
        "The email address is badly formatted.":
          "Formato de Correo Electrónico no es válido.",
        "auth/wrong-password": "Contraseña Incorrecta",
        "auth/user-not-found": "Usuario no encontrado",
      };
      // const user = this.user;

      /* fb.auth()
        .signInWithEmailAndPassword(this.user.username, this.user.password)
        .then(async (userCredential) => {
          //user.username = "";
          //user.password = "";

          const alert = await alertController.create({
            cssClass: "alert-message",
            header: "Éxito",
            message: "Bienvenido",
            buttons: [
              {
                text: "Aceptar",
                handler: () => {
                  //let navTransition = alert.dismiss();
                  this.$router.push({ name: "Dashboard" });
                  this.$router.go({ name: "Dashboard" });
                },
              },
            ],
          });

          await loading.dismiss();
          await alert.present();
          console.log(userCredential);

          // ...
        })
        .catch(async (error) => {
          this.user.name = "";
          this.user.quantity = "";
          const errorCode = error.code;

          const alert = await alertController.create({
            cssClass: "alert-message",
            header: "Error",
            message:
              messages[error.message] ||
              messages[error.code] ||
              "Ocurrió un error.",
            buttons: ["Aceptar"],
          });

          await loading.dismiss();
          await alert.present();

          /*this.router.push({ path: "/dashboard" }).catch((failure) => {
            console.log(failure);
          });
         // nav.push('dashboard');
        });

        */
    },
  },
  props: {
    timeout: { type: Number, default: 1000 },
  },
  data() {
    return {
      item: {
        name: "",
        quantity: "",
      },
    };
  },
  inheritAttrs: false,
};
</script>
