<template>
  <div class="main-container">
    <div class="login-container">
      <div class="login-card">
        <form @submit.prevent="submitForm" class="login-form">
          <h2>Login</h2>
          <div class="input-group">
            <label for="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                v-model="formData"
                required
            >
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import {useAuthStore} from "../stores/authStore.js";
import {useRouter} from "vue-router";
import {ref} from 'vue';
import {useToast} from 'vue-toast-notification'
import {kirillRegex, LOGIN_INPUT_MAX_LENGTH, numberRegex, symbolRegex} from "../config/default-config.js";


export default {
  name: 'Login',
  setup() {
    const formData = ref("");
    const authStore = useAuthStore();
    const router = useRouter();
    const toast = useToast();

    const submitForm = () => {
      if (formData.value.length !== LOGIN_INPUT_MAX_LENGTH) {
        return toast.error(`The entered value does not contain  ${LOGIN_INPUT_MAX_LENGTH} characters!`, {position: "top-right"});
      }

      if (kirillRegex.test(formData.value) || symbolRegex.test(formData.value) || numberRegex.test(formData.value)) {
        return toast.error('The entered data contains Cyrillic alphabet or numbers or special characters!', {position: "top-right"});
      }

      setTimeout(() => {
        authStore.setUser(formData.value);
        router.push({path: '/'});
        toast.success('Success!', {position: "top-right"});
      }, 3000);

      toast.info('Please wait...', {position: "top-right"});
    };

    return {
      formData,
      submitForm,
    };
  }
}
</script>

<style scoped>

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}

.login-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: var(--searchContentShadow);
}

.login-card h2 {
  text-align: center;
  margin: 0 0 20px 0;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 280px;
  padding: 10px;
  border: 1px solid var(--skeletonBorderColor);
  border-radius: 5px;
}

button {
  width: 300px;
  margin: 0;
  padding: 10px;
  background-color: var(--primaryColor);
  border: none;
  border-radius: 5px;
  color: var(--white-color);
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color:  var(--primaryColor);
}

@media (max-width: 586px) {
  button {
    width: 100%;
  }
  .login-form{
    width: 100%;
  }

  .input-group input {
    width: 91%;
  }
}
</style>