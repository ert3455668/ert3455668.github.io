window.onload = function () {
    Setnavbar(".container-fluid");
}
let searchbtn = document.querySelector(".search-form-btn");
let hiddenbtn = document.querySelector(".header-box-nav-content-collapse");
let sidenavbar = document.querySelector(".header-box-nav-content");
let logo = document.querySelector(".logo");

//傳入內容區塊做畫面效果
function Setnavbar(content) {
    Addtoggle();//添加選單開關
    AddNavClick();//添加選單的click效果
    
    function Addtoggle() {
        const toggler = document.querySelector('.nav-toggler');
        const navbar = document.querySelector('.header-box');
        toggler.addEventListener("click", () => {
            navbar.classList.toggle("open");
            document.querySelector(content).classList.toggle("open");
            
        })
    }
    function AddNavClick() {
        const list = document.querySelectorAll('.header-box-nav-content-tours>li');
        function ActiveLink() {
            for (var item of list) {
                item.classList.remove("active");
                this.classList.add("active");
            }
        }
        for (var item of list) {
            item.addEventListener("click", ActiveLink);
        }
    }
    
    
}
// searchbtn.addEventListener('click',function(){
//     var searchboxtype = document.querySelector(".form-control").getAttribute("type")
//     if(searchboxtype=="hidden"){
//         const searchboxopen = document.querySelector(".form-control").setAttribute("type","search")
//     }
//     else{
//         const searchboxopen = document.querySelector(".form-control").setAttribute("type","hidden")
//     }
// });
searchbtn.addEventListener('click',function(){
    document.querySelector(".form-control").classList.toggle("form-control-open")
    if(screen.width<576){
        
        
    }
    logo.classList.toggle("logomove")
    
});
    
        
        


hiddenbtn.addEventListener('click',function(){
    sidenavbar.classList.toggle("closenav");
    hiddenbtn.classList.toggle("roate")

    
})


   
    
    

    
    


