<template>
    <div id="footer-section">
       <div class="footer-container">
           <div class="contact-section">
               <div class="contact-head">
                   <label>Get In Touch</label>
               </div>
               <div class="contact-info">
                   
                   <p><font-awesome-icon icon ="envelope" /> maneeshkumarmitwa@gmail.com</p>
                   <p><font-awesome-icon icon ="phone" /> 8979524419</p>
               </div>
               <div class="social-info">
                   <ul>
                       <li><a href="https://www.facebook.com/MANEESH91" target="_blank"><font-awesome-icon :icon ="['fab', 'facebook']" /></a></li>
                       <li><a  href="https://www.linkedin.com/in/maneesh-kumar-3a446091/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
                       <li><a  href="https://twitter.com/" target="_blank"><font-awesome-icon :icon ="['fab', 'twitter']" /></a></li>
                   </ul>

               </div>
           </div>
           <div class="disclaimer">
               <p>Mobile bucket is developed and marketed by maneesh kumar</p>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name: 'FooterBar'
}
</script>
<style scoped>
#footer-section{
    width: 100%;
    background-color: rgb(128, 126, 126);
    color: #FFF;
    
   
}
.footer-container{
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
}
.social-info ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    padding: 10px;
}

ul li a{
    
    text-decoration: none;
    color: #000;
    font-size: 20px;
    padding: 5px

}
.contact-head{
    font-size: 20px;
    font-family: cursive
}
.contact-info{
    font-size: 18px;
    font-family: cursive;
}
</style>