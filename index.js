
const search = document.querySelector(".search");
const headersearch = document.querySelector(".header-search");
const maindiv = document.querySelector(".header-search-content");
const menu = document.querySelector(".menu");
const menucontent = document.querySelector(".menu-content");
const headerLanguage = document.querySelector(".header-language");
const headerLanguageList = document.querySelector(".header-language-list");
const headerLanguageOptinos = document.querySelectorAll(".header-language-list p");
const mainHead = document.querySelector(".body h2");
const mainParagraph = document.querySelector(".body p");
const placehold =  document.querySelector(".search").placeholder;


console.log(maindiv);
console.log(headersearch);
console.log(placehold);


console.log(search);
search.addEventListener("click" ,() => {
maindiv.classList.toggle("show");
 });


menu.addEventListener("click" ,() => {
menucontent.classList.toggle("show");
 });


    headerLanguage.addEventListener("click" ,() => {
    headerLanguageList.classList.toggle("show");
 });


       headerLanguageOptinos.forEach((e)=>{
        e.addEventListener("click" , (ele)=> {
        console.log(ele.currentTarget);
        console.log(ele.currentTarget.textContent === "Arabic");
        
        if (ele.currentTarget.textContent === "English") {
            mainHead.textContent = "welcome to my website ";
            mainParagraph.textContent = "i am engineer mostafa i am a web developer react ";
            document.querySelector(".header-search i").style.cssText = "right:5px ";
            menucontent.style.left ="0";

            document.querySelector(".main-par").textContent = "English";
            document.body.style.direction = "ltr";
            document.querySelector(".header-search i").style.cssText = "left:5px ";
            document.querySelector(".header-search i").style.right = 'auto';

            document.querySelector(".header-signin p").textContent = "hello sign in";
            document.querySelector(".header-details a p").textContent = "Are you a pro? get $15 off" ;
            document.querySelector(".bottom-header-app a").textContent = "  Our moblile app";
            document.querySelector(".bottom-header-great-deals a").textContent = "  great deals ";
            document.querySelector(".menu p").textContent = "   menu";
            document.querySelector(".list-1").textContent = "Ideas & advice";
            document.querySelector(".list-2").textContent = " Garden and outdoor";
            document.querySelector(".list-3").textContent = "Heating and plumbing";
            document.querySelector(".list-4").textContent = " Home and Living";
            document.querySelector(".list-5").textContent = " Tools";
            document.querySelector(".list-6").textContent = " Electrical & Smart home";
            document.querySelector(".list-7").textContent = "Bathroom ";
            document.querySelector(".list-8").textContent = "Electrical appliances";
            document.querySelector(".search-1").textContent = " popular search";
            document.querySelector(".search-2").textContent = "tv stands";
            document.querySelector(".search-3").textContent = " bedside table";
            document.querySelector(".search-4").textContent = "central heating towel rails";
            document.querySelector(".search-5").textContent = " shower trays";
            document.querySelector(".search-6").textContent = " coffee tables";
            document.querySelector(".search-7").textContent = "  Featured categories";
            document.querySelector(".search-8").textContent = "  Central heating radiators";
            document.querySelector(".search-9").textContent = "Chairs, benches and stools";
            document.querySelector(".search-10").textContent = "Shower doors and screens";
            document.querySelector(".search-11").textContent = " Featured brands";
            document.querySelector(".search-12").textContent = "elegant";
            document.querySelector(".search-13").textContent = "Home discount";
            document.querySelector(".search-14").textContent = "Dewalt";
            document.querySelector(".search-15").textContent = "  Livingandhome";
            document.querySelector(".search").placeholder = "look for a product, brand or some device";
       
        }
        else {


            mainHead.textContent = "مرحبا في موقعي";
            mainParagraph.textContent = "انا مهندس مصطفي مطور واجهات باستخدام الريأكت";
            document.querySelector(".main-par").textContent = "عربي";
            document.body.style.direction = "rtl";
            document.querySelector(".header-signin p").textContent = "اهلا سجل الدخول";
            document.querySelector(".header-details a p").textContent = "هل انت ذات خاصيه برو ؟ احصل علي تخفيض %15";
            document.querySelector(".bottom-header-app a").textContent = "تطبيقنا علي الجوال";
            document.querySelector(".bottom-header-great-deals a").textContent = "  اتفاقات مهمه";
            document.querySelector(".menu p").textContent = "   القائمة";
            document.querySelector(".list-1").textContent = "أفكار ونصائح ";
            document.querySelector(".list-2").textContent = " الحديقة";
            document.querySelector(".list-3").textContent = "التدفئة والسباكة ";
            document.querySelector(".list-4").textContent = " المنزل والمعيشة";
            document.querySelector(".list-5").textContent = " الادوات";
            document.querySelector(".list-6").textContent = " المنازل الذكية والكهربية";
            document.querySelector(".list-7").textContent = "الحمام ";
            document.querySelector(".list-8").textContent = "الاجهزة الكهربائية ";
            menucontent.style.left ="auto";
            menucontent.style.right ="0";
            document.querySelector(".header-search i").style.cssText = "left:5px; ";
            document.querySelector(".header-search i").style.right = 'auto';
            document.querySelector(".search").placeholder = "ابحث عن منتج او براند او اي جهاز ";
            document.querySelector(".search-1").textContent = " البحث الاكثر انتشارا";
            document.querySelector(".search-2").textContent = "حامل التلفزيون";
            document.querySelector(".search-3").textContent = "طاولة بجانب السرير";
            document.querySelector(".search-4").textContent = "قضبان المناشف للتدفئة المركزية";
            document.querySelector(".search-5").textContent = "صواني الدش";
            document.querySelector(".search-6").textContent = "طاولات قهوة";
            document.querySelector(".search-7").textContent = " الفئات المميزة";
            document.querySelector(".search-8").textContent = "مشعات التدفئة المركزية";
            document.querySelector(".search-9").textContent = "الكراسي والمقاعد";
            document.querySelector(".search-10").textContent = "ابواب وشاشات الحمام";
            document.querySelector(".search-11").textContent = "العلامات التجارية المميزة";
            document.querySelector(".search-12").textContent = "اليجانت";
            document.querySelector(".search-13").textContent = "هوم ديسكاونت";
            document.querySelector(".search-14").textContent = "ديوالت";
            document.querySelector(".search-15").textContent = "ليفينج اند هوم";
        }
        

    })
    
 })
