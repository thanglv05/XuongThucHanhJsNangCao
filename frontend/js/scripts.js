/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const getProduct = async (content)=>{
    try{
        const res = await fetch('http://localhost:3000/products')
        const products = await res.json()
        console.log(products);
        // content.innerHTML = 'Ngoc'
        // duyệt mảng product
        products.forEach(product=>{
            const div = document.createElement('div')
            div.classList.add('col')
            div.classList.add('mb-5')
            div.innerHTML = `
              <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${product.image}" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${product.name}</h5>
                                    <!-- Product price-->
                                    ${product.price}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="detail.html?id={${products.id}}">Chi tiết</a></div>
                            </div>
                        </div>
        
            `
            content.append(div)

        })
        

    }catch(error){

    }
}
