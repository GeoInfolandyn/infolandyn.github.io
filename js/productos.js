function filtroProducto(){
    var op2 = document.getElementById("OP2");
   
    productoSeleccionado = op2.value
    // console.log(productoSeleccionado)
    cards = document.getElementsByClassName('tab') 
    for(card of cards){
        // console.log(card.getElementsByTagName('h3')[0].innerHTML)
        if(productoSeleccionado == 'Select a product'){
            card.style.display = 'grid';
            card.getElementsByTagName('input')[0].checked = false
        }else if(card.getElementsByTagName('h3')[0].innerHTML != productoSeleccionado){
            card.style.display = 'none';   
            
        }else{
            card.style.display = 'grid';
        //    hacer que las tarjetas se abran cuando selecciones con el filtro
            card.getElementsByTagName('input')[0].checked = true
        }
    }
}
function mod09Q1(){
    var site = "https://lpdaac.usgs.gov/products/mod09q1v061/"
    return site
}

function filtroA(){
    var op1 = document.getElementById("OP1");
    var op2 = document.getElementById("OP2");
// listas de los elementos por clase
    var listA1 =['MODIS(MOD09A1) SPECTRUM','MODIS(MOD09Q1) SPECTRUM','MODIS(MOD17A2H) SPECTRUM']
    var listA2 =['MOD09Q1 NDVI 250m 8 Days Time Series','MOD09A1 NDVI 500m Ecuador Time Series','AVHRR NDVI Time Series']
    var listA3 =['MOD09Q1 NDVI 250m Time Series filtered','MOD09A1 NDVI 500m Time Series Filtered','MOD09A1 NDVI 500m ECUADOR Time Series Filtered']
    
    cards = document.getElementsByClassName('tab') 
    for(card of cards){
        card.style.display = 'grid';   
    }

    switch(op1.value){
        case 'A1':
            for(i = op2.options.length; i > 0 ; i--){
                op2.remove(i)
            }
// habilitar el segundo filtro si seleccionas una opcion en el primero
            op2.disabled = false
//añadir los elementos al segundo filtro
            for(i in listA1){
                child = document.createElement('option')
                child.id = i
                child.value = listA1[i]
                child.innerHTML = listA1[i]
                op2.appendChild(child)
            }
            document.getElementById('sA2').style.display = 'none'
            document.getElementById('sA3').style.display = 'none'
            document.getElementById('sA1').style.display = 'grid'
            break;
        case 'A2':
            for(i = op2.options.length; i > 0 ; i--){
                op2.remove(i)
            }
            // habilitar el segundo filtro si seleccionas una opcion en el primero
            op2.disabled = false
            //añadir los elementos al segundo filtro
            for(i in listA2){
                child = document.createElement('option')
                child.id = i
                child.value = listA2[i]
                child.innerHTML = listA2[i]
                op2.appendChild(child)
            }
            document.getElementById('sA1').style.display = 'none'
            document.getElementById('sA3').style.display = 'none'
            document.getElementById('sA2').style.display = 'grid'
            break;
        case 'A3':
            for(i = op2.options.length; i > 0 ; i--){
                op2.remove(i)
            }
               // habilitar el segundo filtro si seleccionas una opcion en el primero
               op2.disabled = false
               //añadir los elementos al segundo filtro
            for(i in listA3){
                child = document.createElement('option')
                child.id = i
                child.value = listA3[i]
                child.innerHTML = listA3[i]
                op2.appendChild(child)
            }
            document.getElementById('sA2').style.display = 'none'
            document.getElementById('sA1').style.display = 'none'
            document.getElementById('sA3').style.display = 'grid'
            break;
        default:
            document.getElementById('sA1').style.display = 'grid'
            document.getElementById('sA2').style.display = 'grid'
            document.getElementById('sA3').style.display = 'grid'
            op2.disabled = true
            for(i = op2.options.length; i > 0 ; i--){
                op2.remove(i)
            }
            
        break
    }
}

function filtroB(){
    var op1 = document.getElementById("OP1");
    var op2 = document.getElementById("OP2");
// listas de los elementos por clase
    var listB1 =['AUTOCORRELATION FUNCTION (NDVI 250m MOD09Q1)', 'AUTOCORRELATION FUNCTION (NDVI 500m MOD09A1)', 'PERIODOGRAM AVHRR-NDVI']
    var listB2 =['SPECIFIC AUTOCORRELATION COEFFICIENTS (NDVI 250m MOD09Q1)','PERIODOGRAM ECUADOR (MOD09A1-NDVI)']

    cards = document.getElementsByClassName('tab')
    for(card of cards){
        card.style.display = 'grid';   
    }

    switch(op1.value){
        case 'B1':
            for(i = op2.options.length; i > 0 ; i--){
                op2.remove(i)
            }
// habilitar el segundo filtro si seleccionas una opcion en el primero
            op2.disabled = false
//añadir los elementos al segundo filtro
            for(i in listB1){
                child = document.createElement('option')
                child.id = i
                child.value = listB1[i]
                child.innerHTML = listB1[i]
                op2.appendChild(child)
            }
            document.getElementById('sB2').style.display = 'none'
            document.getElementById('sB1').style.display = 'grid'
            break;
        case 'B2':
            for(i = op2.options.length; i > 0 ; i--){
                op2.remove(i)
            }
            op2.disabled = false

            for(i in listB2){
                child = document.createElement('option')
                child.id = i
                child.value = listB2[i]
                child.innerHTML = listB2[i]
                op2.appendChild(child)
            }
            document.getElementById('sB1').style.display = 'none'
            document.getElementById('sB2').style.display = 'grid'
            break;
        default:
            document.getElementById('sB1').style.display = 'grid'
            document.getElementById('sB2').style.display = 'grid'
            op2.disabled = true
            for(i = op2.options.length; i > 0 ; i--){
                op2.remove(i)
            }
            break
        }
    }
    
function filtroC(){
    var op2 = document.getElementById("OP2");
    var listC =['FALLOW LANDS REGIME','STATISTICAL ANALYSIS OF THE CLIMATOLOGY AND VEGETATION DYNAMICS IN A REGION ON THE BANKS OF THE DUERO','NUMBER OF SEASONAL CYCLES OF VEGETATION AT GLOBAL ESCALE AVHRR',
                'AMPLITUDE OF SEASONAL CYCLES OF VEGETATION AT GLOBAL SCALE','STABILITY OF SEASONAL CYCLES OF VEGETATION AT GLOBAL SCALE','PRESENCE OF PLURIANNUAL CYCLES','MAPPING CROPLAND INTENSIFICATION 4 SUBPERIOD CLASIFICATION IN ECUADOR',
                'MAPPING CROPLAND CLASIFICATION IN ECUADOR','MAPPING CROPLAND INTENSIFICATION IN ECUADOR','ANALYSIS AND MODELING OF RAINFED CROPS DYNAMICS IN SORIA']
    for(i in listC){
        child = document.createElement('option')
        child.id = i
        child.value = listC[i]
        child.innerHTML = listC[i]
        op2.appendChild(child)
    }
      
 }



// En tu código común
document.addEventListener('DOMContentLoaded', function() {
    /**el  filtro de C va a estar cargado siempre en cualquier página, para que cuando entre en productosC cargue el filtro de productos, pero que, 
    si entramos en productos A o B se sobrescriba en cuanto se active el onchange de cada página*/
    filtroC() 
    var selectedItem = sessionStorage.getItem('selectedItem');
    if (selectedItem) {
        // Limpiar el nombre almacenado en sessionStorage
        sessionStorage.removeItem('selectedItem');
        
        // Ejecutar la lógica con el nombre recuperado
        var cards = document.getElementsByClassName('tab');
        for (var card of cards) {
            console.log(card.getElementsByTagName('h3')[0].innerHTML);
            
            // Lógica de filtrado
            if (card.getElementsByTagName('h3')[0].innerHTML !== selectedItem) {
                card.style.display = 'none';
            } else {
                card.style.display = 'grid';
                // Hacer que las tarjetas se abran cuando se selecciona con el filtro
                card.getElementsByTagName('input')[0].checked = true;
            }
        }
    }
});

function linkToItem(nombre, nivel) {
    // Almacenar el nombre en sessionStorage
    sessionStorage.setItem('selectedItem', nombre);
    switch (nivel) {
        case 'A':
            document.location.href = 'sateliteImagery.html';
            break;
        case 'B':
            document.location.href = 'statisticsProducts.html';
            break;
    }
    
}


// function linkToItem(nombre){
//     document.location.href='sateliteImagery.html';
//     cards = document.getElementsByClassName('tab') 
//     for(card of cards){
//         // console.log(card.getElementsByTagName('h3')[0].innerHTML)
//         console.log(card.getElementsByTagName('h3')[0].innerHTML)
//         if(card.getElementsByTagName('h3')[0].innerHTML != nombre){
//             card.style.display = 'none';   
            
//         }else{
//             card.style.display = 'grid';
//         //    hacer que las tarjetas se abran cuando selecciones con el filtro
//             card.getElementsByTagName('input')[0].checked = true
//         }
//     }
// }

// 