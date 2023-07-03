const wrapper=document.querySelector(".sliderWrapper")
console.log(wrapper)
const menuItems=document.querySelectorAll(".menuItem")
const products=[
    {id:1,
        title:"AIR FORCE",
        price:119,
    colors:[
        {code:"black",
        img:"./image/air.png"},
         {code:"dark-blue",
        img:"./image/air2.png"}
    ]},
    {id:2,
        title:"AIR JORDAN",
        price:149,
    colors:[
        {code:"light-gray",
        img:"./image/jordan.png"},
         {code:"green",
        img:"./image/jordan2.png"}
    ]},
    {id:3,
        title:"BLAZER",
        price:109,
    colors:[
        {code:"light-gray",
        img:"./image/blazer.png"},
         {code:"green",
        img:"./image/blazer2.png"}
    ]},
     {id:4,
        title:"CRATER",
        price:129,
    colors:[
        {code:"black",
        img:"./image/crater.png"},
         {code:"white",
        img:"./image/crater2.png"}
    ]},
    {id:5,
        title:"HIPPIE",
        price:99,
    colors:[
        {code:"gray",
        img:"./image/hippie.png"},
         {code:"black",
        img:"./image/hippie2.png"}
    ]}
]
let choosenProduct=products[0]
const currentProductImg=document.querySelector('.productImg')
const currentProductTitle=document.querySelector('.productTitle')
const currentProductPrice=document.querySelector('.productPrice')
const currentProductColor=document.querySelectorAll('.color')
const currentProductSizes=document.querySelectorAll('.size')

menuItems.forEach((item,index) => {
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform=`translate(${-100 *index}vw)`
        // change the current product
        choosenProduct=products[index]
        // change text of currentProduct
        currentProductTitle.textContent=choosenProduct.title
        currentProductPrice.textContent="$" + choosenProduct.price
        currentProductImg.src=choosenProduct.colors[0].img
        //assign colors 
        currentProductColor.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code
        })
    })
  
    
 });//end of menu items

 //change img on color click
 currentProductColor.forEach((color,index) => {
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img
    })
    //change background color for size
    currentProductSizes.forEach((size,index)=>{
        size.addEventListener("click",()=>{
            currentProductSizes.forEach((size)=>{
                size.style.backgroundColor='white'
                size.style.color='black'
            })
            size.style.backgroundColor='black'
            size.style.color='white'
        })
    })
});
function showPay(){
    document.querySelector(".payment").style.display="flex"
 }


function hidePay(){
    document.querySelector(".payment").style.display="none"
}