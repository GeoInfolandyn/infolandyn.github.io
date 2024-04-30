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
    var listA1 =['MODIS(MOD09A1) SPECTRUM','MODIS(MOD09Q1) SPECTRUM','MODIS(MOD13Q1) SPECTRUM','SENTINEL-2-SPECTRUM']
    var listA2 =['AR SPECTRAL INDEX(MOD09Q1)','AS2(MOD09Q1) 500m','NDVI Time Series 500m 8days(MOD09A1)','NDVI Time Series 250m 8days(MOD09Q1)','NDVI (MOD13Q1) 250m 16days','Time Series Secchi Disk','Sentinel-2 NDVI 10m Time Seriess','AVHRR-NDVI Time Series']
    var listA3 =['AR 500m filtered','AS2 500m filtered','MODIS NDVI 500m MOD09A1 filtered','MODIS NDVI 250m MOD09Q1 Time Series filtered','MODIS NDVI 250m MOD13Q1 Time Series filtered','SENTINEL-2 NDVI Time Series filtered']
    
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
    var listB1 =['AUTOCORRELATION FUNCTION (NDVI 250m MOD09Q1)', 'AUTOCORRELATION FUNCTION (NDVI 500m MOD09A1)', 'PERIODOGRAM (NDVI 500m MOD09A1)','MEAN ANUAL(MOD009A1)','ACF AT LAGS 8 DAYS 6MONTHS & 1, 2, 3 YEARS 250m (MOD09Q1)','ACF NDVI AT LAGS 10 YEARS (MOD09Q1)',
    'TRENDS OF MEAN NDVI (MOD13Q1)','ACF AT LAGS 5 DAYS, 6 MONTHS & 1, 2 AND 3 YEARS (S210m)','ACF AT LAGS 10 DAYS, 6 MONTHS & 1, 2 AND 3 YEARS (S210m)','PERIODOGRAM ORDINATES AT 4, 6 MONTHS & 1 YEAR','SUMMATORY OF ORDINATES FROM PERIODOGRAM (AVHRR)',
    'MEAN OF ORDINATES FROM PERIODOGRAM (AVHRR)','FISHER KAPPA TEST (AVHRR)']
    var listB2 =['LENGHT OF GROWING PERIOD (MOD09A1)','SPECIFIC AUTOCORRELATION COEFFICIENTS (NDVI 250m MOD09Q1)','PERIODOGRAM ORDINATES AT 4, 6 MONTHS 6 1 YEAR (MOD09A1)',
    'TRENDS OF MEAN ANUAL NDVI (MOD09A1)','TRENDS OF MEAN ANUAL NDVI (MOD13Q1)','MONTHLY MEAN ANNOMALIES (LST-5)','SPECIFIC PERIODOGRAM ORDINATES & FISHER´S KAPPA TEST (AVHRR-NDVI)']

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
    var listC =['FALLOW LANDS REGIME','SPATIO-TEMPORAL VARIATIONS OF WATER QUALITY','FOREST AS CARBON SINKERS OR CARBON EMITTERS','NUMBER OF SEASONAL CYCLES OF VEGETATION AT GLOBAL ESCALE AVHRR',
                'AMPLITUDE OF SEASONAL CYCLES OF VEGETATION AT GLOBAL SCALE','STABILITY OF SEASONAL CYCLES OF VEGETATION AT GLOBAL SCALE','PRESENCE OF PLURIANNUAL CYCLES','LAND-COVER AND PHYTOCLIMATIC-TYPE TRENDS',
                'AGRICULTURAL INTENSIFICATION OF MAIZE AND RICE AREAS','NUMBER OF GROWN CROPS PER YEAR','GRASSLANDS TRENDS','TREE COVER','WILDFIRE SEVERITY INDEX: DIFFERENCE BETWEEN PRE AND POST WILDFIRE BAI INDEX',
                'STATISTICAL ANALYSIS OF THE CLIMATOLOGY AND VEGETATION DYNAMICS IN A REGION ON THE BANKS OF THE DUERO']

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