<template>
  <div>
    <div class="field">
      <label class="label">Latitude</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Latitude"
          v-model="latitude"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Longitude</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Longitude"
          v-model="longitude"
        />
      </div>
    </div>
     
    <div class="field">
      <label class="label">Nama Tempat</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Nama Tempat"
          v-model="nama_tambal_ban"
        />
      </div>
    </div>
     
    <div class="field">
      <label class="label">Deskripsi</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Deskripsi"
          v-model="deskripsi"
        />
      </div>
    </div>
     
    <div class="field">
      <label class="label">Jam Operasi</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Jam Operasi"
          v-model="jam_operasi"
        />
      </div>
    </div>
     
    <div class="field">
      <label class="label">Alamat</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Alamat"
          v-model="alamat"
        />
      </div>
    </div>
     
    <div class="field">
      <label class="label">Detail Harga</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Detail Harga"
          v-model="detail_harga"
        />
      </div>
    </div>
     
    <div class="field">
      <label class="label">Harga</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Harga"
          v-model="harga"
        />
      </div>
    </div>
     
    <div class="field">
      <label class="label">Nomor Telepon</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Nomor Telepon"
          v-model="no_telepon"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddProduct",
  data() {
    return {
      latitude: "",
      longitude: "",
      nama_tambal_ban: "",
      deskripsi: "",
      jam_operasi: "",
      alamat: "",
      detail_harga: "",
      harga: "",
      no_telepon: "",
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
            latitude: this.latitude,
            longitude: this.longitude,
            nama_tambal_ban: this.nama_tambal_ban,
            deskripsi: this.deskripsi,
            jam_operasi: this.jam_operasi,
            alamat: this.alamat,
            detail_harga: this.detail_harga,
            harga: this.harga,
            no_telepon: this.no_telepon,
        });
        this.latitude;
        this.longitude;
        this.nama_tambal_ban;
        this.deskripsi;
        this.jam_operasi;
        this.alamat;
        this.detail_harga;
        this.harga;
        this.no_telepon;
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>