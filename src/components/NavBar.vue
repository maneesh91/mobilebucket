<template>
    <div id="navigation-section">
        <nav class="navigation">
            <div class="nav-container">
                <ul class="navbar">
                    <li class="navlist"><a href="#mobile-section">Mobile</a></li> |
                    <li class="navlist"><a href="#laptop-section">Laptop</a></li> |
                    <li class="navlist"><a href="#mobile-section">Tablet</a></li> |
                    <li class="navlist"><a href="#mobile-section">Cameras</a></li> |
                    <li class="navlist"><a href="#mobile-section">Television</a></li> 
                </ul>
            </div>
            
        </nav>
    </div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style scoped>
.navigation{
    background-color: #FFF;
    
   
}
.nav-container{
    width: 1200px;
    margin: 0 auto;

}

.navbar{
    display: flex;
    list-style: none;
    justify-content: left;
    margin-left: 0px;
}


a{
    text-decoration: none;
    color: #000;
    font-size: 20px;
    padding: 4px
}
a:hover{
    color: #F00;
}

</style>