<template>
    <div class="header-section">
        <div  class="header-container">
            <div class="logo">
                <h3>Mobile Bucket</h3>
            </div>
            <div class="search-div">
                <input type="text" class="inputsearch" placeholder="Search item"/>
                <font-awesome-icon icon ="search" class="searchicon"/>
            </div>
            <div class="account">
                <label class="login"><a>LogIn/SignUp</a></label>
            </div>
        </div>
        
        <NavBar></NavBar>
    </div>
</template>
<script>
import NavBar from './NavBar.vue';

export default {
    name: 'Headerbar',
    components:{
        NavBar
    }
}
</script>

<style scoped>
.header-section{
    width: 100%;
    height: 80px;
    background-color: #FFF;
    border-bottom: 1px solid #888888;
    position: fixed;
    top:0;
    box-shadow: 0 0.5px 5px #888888;
}
.header-container{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    
}
.logo{
    padding: 10px;
    display: block;
}
.search-div{
    margin: 10px 0 10px -300px;
    position: relative;
    display: block;

}

.inputsearch{
    width: 500px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 5px;;
    padding: 1px;
}
.searchicon{
    position: absolute;
    bottom:5px;
    right:5px;
    width:20px;
    height:20px;
    cursor: pointer;
}
.account{
    text-align: center;
    
}
.login{
    padding: 15px;
    top: 100;
    display: block;
    cursor: pointer;

}
</style>