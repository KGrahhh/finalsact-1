import { createRouter, createWebHistory } from "vue-router";
import StudentForm from "../components/StudentForm.vue";
import AdminForm from "../components/AdminForm.vue";

const routes = [
  { path: "/", component: StudentForm }, 
  { path: "/student", component: StudentForm },
  { path: "/admin", component: AdminForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
