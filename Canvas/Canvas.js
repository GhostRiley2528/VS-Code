const observer = new IntersectionObserver((enteries) => {
    enteries.ForEach ((entry) => {
        console.log(entery)
        if(entry.isIntersecting){
            entry.target.classlist.add("show");
        } else{
            entry.target.classlist.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.ForEach((el) => observer.observe(el));
