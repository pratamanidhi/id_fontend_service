<template>
  <div>
    <b-button variant="success" :to="{ name: 'Insert' }" class="button is-success mt-5"
      >Add New</b-button>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th class="has-text-centered"  colspan="3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id_tambal_ban">
          <td>{{item.id_tambal_ban}}</td>
          <td>{{ item.nama_tambal_ban }}</td>
          <td>{{ item.harga }}</td>
          <td class="has-text-centered">
            <b-button
              :to="{ name: 'Edit', params: { id: item.product_id } }"
              variant="primary">
              <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
              Edit
            </b-button>
          </td>
          <td class="has-text-centered">
            <div>
              
              <b-button variant="info" v-b-modal.my-modal>
                <b-icon icon="info-circle" aria-hidden="true"></b-icon>
                Show Modal
              </b-button>
            </div>
          </td>
          <td class="has-text-centered">
              <b-button variant="danger" @click="deleteProduct(item.id_tambal_ban)">
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                Delete
              </b-button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <b-modal id="my-modal">Hello From My Modal!</b-modal>
    
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ListOfClient",
  data : function() {
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
        const response = await axios.get("http://localhost:5000/products");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
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