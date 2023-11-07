function filtroProducto(){
    var op2 = document.getElementById("OP2");
   
    productoSeleccionado = op2.value
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


function filtroA(){
    var op1 = document.getElementById("OP1");
    var op2 = document.getElementById("OP2");
// listas de los elementos por clase
    var listA1 =['MODIS(MOD09A1) SPECTRUM','MODIS(MOD09Q1) SPECTRUM','MODIS(MOD13Q1) SPECTRUM','SENTINEL-2-SPECTRUM']
    var listA2 =['AR SPECTRAL INDEX(MOD09Q1)','AS2(MOD09Q1) 500m','NDVI Time Series 500m 8days(MOD09A1)','NDVI Time Series 250m 8days(MOD09Q1)','NDVI (MOD13Q1) 250m 16days','Time Series Secchi Disk','Sentinel-2 NDVI 10m Time Seriess','AVHRR NDVI Time Series']
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
    var listA1 =['MODIS(MOD09A1) SPECTRUM','MODIS(MOD09Q1) SPECTRUM','MODIS(MOD13Q1) SPECTRUM','SENTINEL-2-SPECTRUM']
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
                child.value = i
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
            document.getElementById('sA1').style.display = 'none'
            document.getElementById('sA3').style.display = 'none'
            document.getElementById('sA2').style.display = 'grid'
            break;
        case 'A3':
            for(i = op2.options.length; i > 0 ; i--){
                op2.remove(i)
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
function filtroC(){
    document.getElementById("OP1").value
}
