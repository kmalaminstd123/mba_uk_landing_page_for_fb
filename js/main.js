
// added country list to the form
const countryUrl = "https://restcountries.com/v3.1/independent?status=true";

const getCountriesName = async () => {

    const countryOptions = document.querySelector('#fcountry')
    // console.log(countryOptions);
    


    try{

        const res = await fetch(countryUrl)
        const data = await res.json();
        

        data.forEach(country => {

            if(country.name.common !== 'Israel'){

                countryOptions.insertAdjacentHTML('beforeend', `<option value="${country.name.common}">${country.name.common}</option>`)

            }

            
        })

    }catch(err){
        console.log(err);
        
    }

}

getCountriesName()




// ==================== added course name list to the form

const courses = [
    "Master of Science in Environment, Health & Safety Management",
    "Master of Science in Project Management",
    "Master of Science in Disaster & Risk Management",
    "Master of Science in Supply Chain Management",
    "Master's in Strategy & Business Management",
    "Master of Science in Human Resource Management",
    "Master's in Leadership & People Management",
    "Master's in Education Management",
    "Master of Science in Public Health",
    "Master of Science in Finance & Accounting",
    "Master’s in Development Studies",
    "Master's of Science in IT & Data Science",
    "Master's of Social Science in Human Rights & Gender Studies",
    "Master of Science in International and Development Economics",
    "MBA in Finance & Accounting",
    "MBA in Human Resource Management",
    "MBA in Leadership & Strategic Management",
    "MBA in Entrepreneurship",
    "MBA in Marketing & Sales Management",
    "MBA in Operations Management",
    "MBA in Occupational Health & Safety",
    "MBA in Logistic & Supply Chain Management",
    "MBA in Project Management",
    "MBA in Organizational Development",
    "MBA in Business Management",
    "MBA in Public Administration & Management",
    "MBA in Primary Health Care Management",
    "MBA in Economics & Cost Management",
    "MBA in Information Management",
    "MBA in Disaster & Risk Management",
    "MBA in Warehouse & Distribution Management",
    "MBA in Education Management",
    "MBA in Digital Marketing & E-commerce",
    "MBA in Managing NGOs",
    "MBA in Brand Management",
    "MBA in Total Quality Management",
    "MBA in Procurement Management",
    "MBA in Production Management"
];



document.addEventListener('DOMContentLoaded', ()=>{

    // added course name list to the form option
    const courseOption = document.querySelector('#fcourse')

    // added course name to the swiper slider
    const coursename_swiper_wrapper = document.querySelector('.coursename_swiper .swiper-wrapper')

    courses.forEach(course => {
        courseOption.insertAdjacentHTML('beforeend', `<option value="${course}">${course}</option>`)

        coursename_swiper_wrapper.insertAdjacentHTML('beforeend', `<div class="swiper-slide d-flex flex-column align-items-center gap-3 justify-content-center"><h6 class="text-white text-center mb-3">${course}</h6> 
            <p class="text-center">Validated, Quality Assured And Degree Awarded By EIU-PARIS</p></div>`)
    })
    

    // coursename swiper slider
    const courseNameSwiperSlider = new Swiper('.coursename_swiper', {
        loop: true,
        // spaceBetween: 50,
        centeredSlides: true,
        autoplay: {
            delay: 3000
        },
        breakpoints:{

            640: {
              slidesPerView: 1,
            //   spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            }
        }
    })

})

// send email using email js