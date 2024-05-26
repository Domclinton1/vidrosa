@media screen and (min-width: 320px) and (max:width: 375px) {  
   main{
        width: 100%;
        min-width: 320px;
        max-width: 375px;
    }
    body {
        width: 100%;
        min-width: 320px;
        max-width: 375px;
    }
    .menu-toggle {
        display: flex;
    }
    
    nav {
        display: none;
        z-index: 1;
    }

    nav ul {
        flex-direction: column;
        gap: 10px;
    }

    nav.active {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #06121e;
        position: absolute;
        top: 86px;
        left: 0;
        right: 0;
        padding: 20px 0;
    }
    header {
        width: 100%;
        max-width: 375px;
        min-width: 320px;
    }

    nav ul {
        display: none;
        position: absolute;
        top: 60px; /* Adjust as needed */
        left: 0;
        width: 100%;
        background-color: #06121e;
        padding: 10px 0;
        flex-direction: column;
    }

    nav ul.active {
        display: flex;
    }

    nav ul li {
        width: 100%;
        text-align: center;
        padding: 10px 0;
    }
    
    .banner {
        width: 100%;
        min-width: 320px;
        max-width: 375px;
    }
    .banner img {
    width: 50%;
    margin-bottom: 220px ;
    
   }
   
   .hero h1 {
    font-size: 20px;
   }
   .hero p {
    font-size: 15px;
   }
   .texto {
    width: 80%;
   }
   .img-sobre{
    width: 100%;
    min-width: 250px;
    max-width: 300px;
   }
   
   .services{
    width: 100%;
    min-width: 320px;
    max-width: 375px;
    margin: auto;
   }
   .texto-services {
    width: 85%;
    margin: auto;
   }
   .service-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    
    
   }
   .jobs {
    width: 100%;
    max-width: 300px;
    min-width: 300px;
    margin: 0 auto;
   }
   .job-info {
    width: 100%;
   }
   .modal-content{
    width: 100%;
    margin: 0;
    
   }
   .modalText{
    width: 100%;
   }
   .modalList{
    width: 100%;
   }
   .modalslide img{
    width: 100%;
   }
   
   .coments {
    width: 100%;
    min-width: 320px;
    max-width: 375px;
    display: flex;
    gap: 1.8rem;
    
    
   }
   .coments div img {
    width: 40%;
    margin: 10px;
    
    
   }
   .coments li {
    font-size: 15px;
    margin: 10px;
    
    
   }   
   .fotos {
    width: 100%;
    min-width: 320px;
    max-width: 375px;
    margin: 0 auto;
   }
   .fotos img{
    width: 100%;
    max-width: 350px;
    min-width: 300px;
    margin: 0 auto;
   }
   .buttons {
    width: 100%;
    min-width: 320px;
    max-width: 375px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
   }
   .buttons button {
    width: 40%;
    margin: 10px auto;
    
   }
   .buttons button img {
    height: 40px;
    
   }
   .prevBtn{
    left: 0;
   }
   .nextBtn {
    right: 0;
   }
   .location{
    width: 100%;
    min-width: 320px;
    max-width: 375px;
    
   }
  
   .contato {
    width: 100%;
    min-width: 320px;
    max-width: 375px;
    
   }
   .contato h1 {
    font-size: 40px;
   }
   .contato p {
    font-size: 20px;
   }
   .contato ul {
    width: 80%;
    height: 50%;
    
   }
   
   footer {
    width: 100%;
    min-width: 320px;
    max-width: 375px;
    
   }
}