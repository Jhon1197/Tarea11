let monto =parseInt(prompt/("Digite por favor el monto de su compra"));
if(monto >100 ){

    let porcentaje = monto * 0.9;
    document.write("Su compra tiene un descuento del 10%", porcentaje, "<br>");
}else 
    document.write("Su compra no aplica para el descuento", monto, "<br>");

