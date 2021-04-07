<template>
  <div>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Nama Tambal Ban</th>
          <th>Nama User</th>
          <th>Jenis Kendaraan</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id_booking">
          <td>{{item.tanggal_booking}}</td>
          <td>{{ item.nama_tambal_ban }}</td>
          <td>{{ item.namauser }}</td>
          <td>{{ item.jenis_kendaraan }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.product_id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteProduct(item.id_tambal_ban)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ListOfClient",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getProducts();
  },
 
  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/all_booking");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/booking/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>