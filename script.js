/* ==========================
   SBT Electric Work v2.0
========================== */

// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

navbar.classList.toggle("active");

});

// Close Menu After Click

document.querySelectorAll("#navbar a").forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

});

});

// Back To Top

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Sticky Header

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.padding="10px 8%";

header.style.background="rgba(13,110,253,.98)";

}else{

header.style.padding="15px 8%";

header.style.background="rgba(13,110,253,.95)";

}

});
/* ==========================
   Gallery Lightbox
========================== */

const galleryImages=document.querySelectorAll(".gallery-container img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

const closeLightbox=document.getElementById("closeLightbox");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});
/* ==========================
   Loading Screen
========================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{
loader.style.display="none";
},500);

});
const bookingForm=document.getElementById("bookingForm");

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const phone=document.getElementById("phone").value;

const service=document.getElementById("service").value;

const message=
`নাম: ${name}
মোবাইল: ${phone}
সার্ভিস: ${service}`;

window.open(
`https://wa.me/919932970070?text=${encodeURIComponent(message)}`,
"_blank"
);

});
/* ==========================
   FAQ Accordion
========================== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

question.addEventListener("click", () => {

const answer = question.nextElementSibling;

answer.classList.toggle("active");

});

});
