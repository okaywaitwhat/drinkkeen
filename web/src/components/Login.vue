<template>
    <section :style="{'background-image': `url(${require('../assets/media/login.jpg')})`}"> 
      <div class="container">   
        <form>
          <div class="form-group">
            <label for="validationDefaultUsername">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
              </div>
              <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
            </div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-light">Sing in</button>
        </form> 
      </div> 
    </section>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      
    }
  }
}

</script>

<style scoped lang="scss">

section {
  height: 90%;
  width: 100%;
  min-height: 90%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  float: center;
  background-size: cover;
  text-align: center;
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #f8f9fa;
}

.container {
  width: 300px;
}

</style>
