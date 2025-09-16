<template>
    <div class="form-container">
      <h2>Admin Form</h2>
      <form @submit.prevent="submitForm">
        <label>Admin ID:</label>
        <input v-model="admin.adminID" type="text" required />
  
        <label>First Name:</label>
        <input v-model="admin.firstName" type="text" required />
  
        <label>Last Name:</label>
        <input v-model="admin.lastName" type="text" required />
  
        <label>Department:</label>
        <input v-model="admin.department" type="text" required />
  
        <button type="submit">Submit</button>
      </form>
  
      <button class="admin-btn" @click="goToStudentPage">Go to Student Page</button>
  
      <div v-if="response">
        <h3>Response from Backend:</h3>
        <pre>{{ response }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "AdminForm",
    data() {
      return {
        admin: {
          adminID: "",
          firstName: "",
          lastName: "",
          department: ""
        },
        response: null
      };
    },
    methods: {
      async submitForm() {
        try {
          const res = await axios.post("http://localhost:5001/api/getAdmin", this.admin);
          this.response = res.data; // show backend response
        } catch (err) {
          console.error("Error:", err);
          this.response = "Error submitting form";
        }
      },
      goToStudentPage() {
        this.$router.push("/student");
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #1e1e1e; 
  }
  
  h2 {
    text-align: center;
    margin-bottom: 15px;
    color: white;
  }
  
  label {
    display: block;
    margin-top: 12px;
    margin-bottom: 5px;
    font-weight: 500;
    color: white;
  }
  
  input {
    width: 100%;             
    padding: 10px;            
    margin-top: 2px;
    margin-bottom: 10px;      
    border: 1px solid #444;   
    border-radius: 5px;
    background: #2a2a2a;
    color: white;
    box-sizing: border-box;   
  }
  
  button {
    margin-top: 12px;
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
  
  button[type="submit"] {
    background: #111;
    color: white;
  }
  
  .admin-btn {
    background-color: greenyellow;
    color: black;
  }
  </style>
  