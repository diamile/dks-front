<template>
  <div class="footer-dark">
    <div class="card mx-5">
        <div class="row mb-4 ">
            <div class="col-md-4 col-sm-11 col-xs-11">
                <div class="footer-text pull-left">
                    
                    <div class="d-flex">
                        <a href="#"><img  class="foot" src="../../assets/images/dks.jpg" alt="" /></a>
                    </div>
                    <div class="flex-column tag">
                        <h4 style="color:#16151a; background-color:#957bda;">L' essentiel de l'information</h4>
                        <span># SENEGAL </span>
                    </div> 
                    
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
                    <div class="col item social"> 
                      <a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" /></a>
                      <a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" /></a>
                      <a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }" /></a>
                      <a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" /></a>
                      </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Services</h5>
                <ul>
                    <li>IT Consulting -</li>
                    <li>Development</li>
                    <li>Cloud</li>
                    <li>DevOps & Support</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Industries</h5>
                <ul class="card-text">
                    <li>Finance</li>
                    <li>Public Sector</li>
                    <li>Smart Office</li>
                    <li>Retail</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Company</h5>
                <ul class="card-text">
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Join Us</li>
                </ul>
            </div>
        </div>
        <div class="divider mb-4"> </div>
        <div class="row" style="font-size:10px;">
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="pull-left">
                    <p><i class="fa fa-copyright"></i> 2020 thezpdesign</p>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="pull-right mr-4 d-flex policy">
                    <div>Terms of Use</div>
                    <div>Privacy Policy</div>
                    <div>Cookie Policy</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap');



.card {
    padding: 2% 7%;
    color: #646771;
    background-color: #16151a
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0
}

ul>li {
    padding: 4px
}

ul>li:hover {
    color: #957bda;
    cursor: pointer
}

hr {
    border-width: 3px
}

.social>i {
    padding: 1%;
    font-size: 15px
}

.social>i:hover {
    color: #957bda;
    cursor: pointer
}

.policy>div {
    padding: 4px
}

.heading {
    font-family: 'Titillium Web', sans-serif;
    color: white
}

.divider {
    border-top: 2px solid rgba(189, 196, 203, 0.5);
}
.foot{
  width:120px;
}

.footer-dark .item.social {
    width:300px;
}

@media (max-width:991px) {
    .footer-dark .item.social {
      display:none;
      margin-top: 20px
    }
}

.footer-dark .item.social>a {
    font-size: 20px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
    margin: 0 8px;
    color: #fff;
    opacity: 0.75
}

.footer-dark .item.social>a:hover {
    opacity: 0.9
}
.tag{
  width:180px;
  color:#ffffff;
}

</style>





























