function details(event){
   
    function x(id){
        return document.getElementById(id).value;
    }
    let data={
        fname:x("fname"),
        lname:x("lname"),
        company:x("company"),
        street:x("street"),
        address_line:x("address_line"),
        pascode:x("pascode"),
        city:x("city"),
        country:x("country"),
        mobile:x("mobile"),
        shipping_method:x("exp"),
        packaging:"Myntra Packaging",
    }
    localStorage.setItem("delivery_data",JSON.stringify(data));
    
    
}