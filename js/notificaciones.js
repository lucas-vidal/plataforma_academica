
const API = 'http://localhost:3000';

var id_sale

//ID ACTUAL
function idActual() {

    const idActual = async () => {
        try {
            const respuesta = await fetch(API + '/id_sales/id');
            const id = await respuesta.json();
            const ids = []

            for (const [key, value] of Object.entries(id[0][0])) {
                ids.push(`${key}`, value);
            }

            id_sale = ids[1]
            cargarProductos(id_sale);
            sumarProductos(id_sale);
            botonesCancelarFinalizar(id_sale)
        } catch (error) {
            console.log(error)
        }
    }
    idActual();
    document.querySelector("#code").select()

}

//CARGA LOS BOTONES DE FINALIZAR Y CANCELAR
function botonesCancelarFinalizar(id_sale) {
    var countProd

    const cantProd = async () => {
        try {

            const respuesta = await fetch(API + '/sales/count/' + id_sale, {
                method: 'POST',
                headers: new Headers({ 'Content-type': 'application/json' }),
                mode: 'cors'
            });
            const counts = await respuesta.json();
            const count = []

            for (const [key, value] of Object.entries(counts[0][0])) {
                count.push(`${key}`, value);
            }

            countProd = count[1]

            if (countProd != 0) {
                const HTMLResponse = document.querySelector("#footer")
                HTMLResponse.insertAdjacentHTML("afterbegin",
                    '<div class="row"><div class="col-md-3 mb-3  input-group"><select name="select" class="form-control" id="dni_customer" placeholder="Cliente" value="" required><option></option></select></div><div class="text-rigth "><button onclick="cancelarVenta()" class="btn-wide btn btn-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i> CANCELAR</button><button onclick="finalizaVenta()" class="btn-wide btn btn-success"><i class="pe-7s-check btn-icon-wrapper"> </i>  FINALIZAR</button></div></div>');
                cargarClientesEnInput()
                //  <div class="row"><div class="col-md-3 mb-3  input-group"><select name="select" class="form-control" id="dni_customer" placeholder="Cliente" value="" required><option></option></select></div><div class="text-rigth "><button onclick="cancelarVenta()" class="btn-wide btn btn-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i> CANCELAR</button><button onclick="finalizaVenta()" class="btn-wide btn btn-success"><i class="pe-7s-check btn-icon-wrapper"> </i>  FINALIZAR</button></div></div>
            }
        } catch (error) {
            console.log(error)
        }
    }
    cantProd();


}

//BORRA EL CONTENIDO DE LOS INPUTS
function limpiarInputs(in1, in2, in3, in4, in5, in6, in7) {
    document.getElementById(in1).value = ""
    document.getElementById(in2).value = ""
    document.getElementById(in3).value = ""
    document.getElementById(in4).value = ""
    document.getElementById(in5).value = ""
    document.getElementById(in6).value = ""
    document.getElementById(in7).value = ""
}

//DETECTAR EL PRODUCTO POR EL CODIGO E INGRESARLO EN LOS INPUTS
const code = document.querySelector('#code')
code.addEventListener("change", () => {
    detectarProducto();
})

function detectarProducto() {
    var code = document.getElementById("code").value
    document.getElementById("quantity").value = ""
    document.getElementById("price").value = ""
    document.getElementById("unit").value = ""
    document.getElementById("brand").value = ""
    document.getElementById("description").value = ""

    const cargarUnProductoEnInputs = async () => {
        try {
            const respuesta = await fetch(API + '/products/' + code, {
                method: 'GET',
                headers: new Headers({ 'Content-type': 'application/json' }),
                mode: 'cors'
            });
            const products = await respuesta.json();

            document.getElementById("quantity").value = 1
            document.getElementById("price").value = products[0].price
            document.getElementById("unit").value = products[0].unit
            document.getElementById("brand").value = products[0].brand
            document.getElementById("description").value = products[0].description

        } catch (error) {
            console.log(error)
        }
    }
    cargarUnProductoEnInputs();
}

//MULTIPLICA LA CANTIDAD POR EL PRECIO Y MUESTRA EN INPUT CADA VEZ QUE CAMBIA LA CANTIDAD
const quantity = document.querySelector('#quantity')
quantity.addEventListener("change", () => {
    sumarPrecioEnProducto();
})

function sumarPrecioEnProducto() {
    var price
    var code = document.getElementById("code").value
    const consultarPrecioProducto = async () => {
        try {
            const respuesta = await fetch(API + '/products/' + code, {
                method: 'GET',
                headers: new Headers({ 'Content-type': 'application/json' }),
                mode: 'cors'
            });
            const products = await respuesta.json();

            price = products[0].price
            var quantity = parseInt(document.getElementById("quantity").value, 10);
            var total = price * quantity
            document.getElementById("price").value = total

        } catch (error) {
            console.log(error)
        }
    }
    consultarPrecioProducto();
}

//AGREGAR UN PRODUCTO A LA VENTA
function agregarProductoVenta() {
    var code = document.getElementById("code").value
    var price = document.getElementById("price").value
    var quantity = document.getElementById("quantity").value
    var unit = document.getElementById("unit").value
    var description = document.getElementById("description").value

    if (price == "" && unit == "" && description == "") {

        return window.alert("El producto no existe en la base de datos.")
    }

    const stockDeProducto = async () => {
        try {
            const respuesta = await fetch(API + '/products/' + code, {
                method: 'GET',
                headers: new Headers({ 'Content-type': 'application/json' }),
                mode: 'cors'
            });
            const products = await respuesta.json();
            var quantity_stk = products[0].quantity

            if(quantity_stk < quantity){
                return window.alert("El producto " + code + " no llega a la cantidad de " + quantity + ". Stock: " + quantity_stk)
            }
            if(quantity_stk <= 0){
                return window.alert("El producto no tiene stock. Stock: " + quantity_stk)
            }

            const agregarProductoVenta = async () => {
                try {
                    const respuesta = await fetch(API + '/sales/', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
        
                            {
                                "code": code,
                                "price": price,
                                "quantity": quantity
                            }
                        )
                    });
                } catch (error) {
                    console.log(error)
                }
            }
            agregarProductoVenta();
            location.reload();

        } catch (error) {
            console.log(error)
        }
    }
    stockDeProducto();
}


//CARGA LISTADO DE PRODUCTOS DE LA VENTA ACTUAL
function cargarProductos(id_sale) {
    const cargarProductos = async () => {
        try {

            const respuesta1 = await fetch(API + '/sales/' + id_sale);
            const products = await respuesta1.json();

            const HTMLResponse = document.querySelector("#venta")

            products.map((product) => cargarProductos1(product))

            function cargarProductos1(product) {

                var code = product.code
                var quantity = product.quantity
                var price = product.price

                const cargarProducto2 = async () => {
                    const respuesta2 = await fetch(API + '/products/' + code);
                    const product = await respuesta2.json();

                    var brand = product[0].brand
                    var description = product[0].description
                    var unit = product[0].unit

                    HTMLResponse.insertAdjacentHTML("afterbegin",
                        '<tr><td class="text-center">'
                        + code + '</td><td class="text-center">'
                        + brand + '</td><td class="text-left">'
                        + description + '</td><td class="text-center">'
                        + quantity + '</td><td class="text-center"> $ '
                        + price + ',0</td><td class="text-center">'
                        + unit + '</td><td class="text-center"> <button onclick="eliminarProducto('
                        + code + ')" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button> </td></tr>');
                }
                cargarProducto2()
            }
        } catch (error) {
            console.log(error)
        }
    }
    cargarProductos()
}

//BOTON ELIMINAR ITEM EN LISTADO DE PRDUCTOS
function eliminarProducto(code) {
    var id_sale
    const idActual = async () => {
        try {
            const respuesta = await fetch(API + '/id_sales/id');
            const id = await respuesta.json();
            const ids = []

            for (const [key, value] of Object.entries(id[0][0])) {
                ids.push(`${key}`, value);
            }

            id_sale = ids[1]

            var option = confirm("Desea eliminar este producto?");
            if (option == true) {
                const eliminarProducto = async () => {
                    try {
                        const respuesta = await fetch(API + '/sales/' + id_sale + '/' + code, {
                            method: 'DELETE',
                            headers: { 'Content-type': 'application/json' }
                        })
                    } catch (error) {
                        console.log(error)
                    };
                }
                eliminarProducto();
                location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }
    idActual();
}

//BOTON CANCELAR VENTA
function cancelarVenta() {

    var id_sale
    const idActual = async () => {
        try {
            const respuesta = await fetch(API + '/id_sales/id');
            const id = await respuesta.json();
            const ids = []

            for (const [key, value] of Object.entries(id[0][0])) {
                ids.push(`${key}`, value);
            }

            id_sale = ids[1]

            var option = confirm("Desea cancelar esta venta?");
            if (option == true) {
                const eliminarProductosDeVenta = async () => {
                    try {
                        console.log(id_sale)
                        const respuesta = await fetch(API + '/sales/' + id_sale, {
                            method: 'DELETE',
                            headers: { 'Content-type': 'application/json' }
                        })


                    } catch (error) {
                        console.log(error)
                    };
                }
                eliminarProductosDeVenta();
                location.reload();
            }
        } catch (error) {
            console.log(error)
        };

    }
    idActual();

}

//SUMA EL TOTAL DE LOS ITEMS 
function sumarProductos(id_sale) {
    var total = 0
    const cargarProductos = async () => {
        try {

            const respuesta1 = await fetch(API + '/sales/' + id_sale);
            const products = await respuesta1.json();


            const HTMLResponse = document.querySelector("#venta")

            products.map((product) => cargarProductos1(product))

            function cargarProductos1(product) {
                var price = product.price
                total = total + price;
                document.getElementById("total").innerHTML = "$ " + total + ",00";
            }

        } catch (error) {
            console.log(error)
        }
    }
    cargarProductos()

}


//CARGA LOS CLIENTE EN INPUT
function cargarClientesEnInput() {

    const cargarClientes = async () => {
        try {
            const respuesta = await fetch(API + '/customers');
            const customers = await respuesta.json();

            const HTMLResponse = document.querySelector("#dni_customer")
            customers[0].map((customer) => HTMLResponse.insertAdjacentHTML("afterbegin", '<option>' + customer.dni + '</option>'));
            // HTMLResponse.insertAdjacentHTML("afterbegin", '<option>' + customer.dni + ' - ' + customer.surname + ' ' + customer.name + '</option>')

        } catch (error) {
            console.log(error)
        }
    }
    cargarClientes()
}

//FINALIZA LA VENTA
function finalizaVenta() {
    var id_sale = 0
    function reload()
    {
        location.reload();
        // console.log(123)
    }

    const idActual = async () => {
        try {
            const respuesta = await fetch(API + '/id_sales/id');
            const id = await respuesta.json();
            const ids = []

            for (const [key, value] of Object.entries(id[0][0])) {
                ids.push(`${key}`, value);
            }
            id_sale = ids[1]
            var option = confirm("Finalizar la compra?");
            if (option == true) {
                const finalizaVenta = async () => {
                    try {
                        restarCantidades(id_sale)
                        function restarCantidades() {
                            const restarCantidades = async () => {
                                try {
                        
                                    const respuesta = await fetch(API + '/sales/' + id_sale);
                                    const products = await respuesta.json();
                            
                                    products.forEach(product => { mapearProductos(product)});
                        
                                    function mapearProductos(product) {
                        
                                        var code = product.code
                                        var quantity = product.quantity
                        
                                        const restarCantidadDeProducto = async () => {
                                            const respuesta2 = await fetch(API + '/products/' + code);
                                            const product = await respuesta2.json();
                        
                                            var quantity1 = product[0].quantity
                        
                                                    const respuesta1 = await fetch(API + '/products/quantity/' + code, {
                                                            method: 'PUT',
                                                            headers: new Headers({ 'Content-type': 'application/json'}),
                                                            mode: 'cors',
                                                            body: JSON.stringify(
                                                            {
                                                                "quantity": quantity1 - quantity
                                                        })
                                                        },
                                                        );

                                        }
                                        restarCantidadDeProducto()
                                    }
                                } catch (error) {
                                    console.log(error)
                                }
                            }
                            restarCantidades()
                        }

                        var dni_customer = document.getElementById("dni_customer").value

                        const respuesta = await fetch(API + '/id_sales/' + id_sale, {
                            method: 'PUT',
                            headers: new Headers({ 'Content-type': 'application/json' }),
                            mode: 'cors',
                            body: JSON.stringify(

                                {
                                    "dni_customer": dni_customer
                                })
                        });
                        const crearNuevoId = async () => {
                            try {
                                const respuesta = await fetch(API + '/id_sales/', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(

                                        {
                                            "dni_customer": ""
                                        }
                                    )
                                },
                                setTimeout(reload, 500)
                                );
                            } catch (error) {
                                console.log(error)
                            }
                        }
                        crearNuevoId();
                    } catch (error) {
                        console.log(error)
                    }
                }
                finalizaVenta();
            }
        } catch (error) {
            console.log(error)
        }
    }
    idActual();
}



















function aba1LoadGrafIndex() {

    setInterval(function (){
        $.getJSON("./server/aba1_server01.htm", function(result) {
      
            aba1_labels_dias[0] = result.D1_A_0;
            aba1_labels_dias[1] = result.D1_A_1;
            aba1_labels_dias[2] = result.D1_A_2;
            aba1_labels_dias[3] = result.D1_A_3;
            aba1_labels_dias[4] = result.D1_A_4;
            aba1_labels_dias[5] = result.D1_A_5;
            aba1_labels_dias[6] = result.D1_A_6;
            aba1_labels_dias[7] = result.D1_A_7;
            aba1_labels_dias[8] = result.D1_A_8;
            aba1_labels_dias[9] = result.D1_A_9;
            aba1_labels_dias[10] = result.D1_A_10;
            aba1_labels_dias[11] = result.D1_A_11;

            aba1_labels_dias[0] = aba1_labels_dias[0].slice(6, -6);
            aba1_labels_dias[1] = aba1_labels_dias[1].slice(6, -6);
            aba1_labels_dias[2] = aba1_labels_dias[2].slice(6, -6);
            aba1_labels_dias[3] = aba1_labels_dias[3].slice(6, -6);
            aba1_labels_dias[4] = aba1_labels_dias[4].slice(6, -6);
            aba1_labels_dias[5] = aba1_labels_dias[5].slice(6, -6);
            aba1_labels_dias[6] = aba1_labels_dias[6].slice(6, -6);
            aba1_labels_dias[7] = aba1_labels_dias[7].slice(6, -6);
            aba1_labels_dias[8] = aba1_labels_dias[8].slice(6, -6);
            aba1_labels_dias[9] = aba1_labels_dias[9].slice(6, -6);
            aba1_labels_dias[10] = aba1_labels_dias[10].slice(6, -6);
            aba1_labels_dias[11] = aba1_labels_dias[11].slice(6, -6);
            
            aba1_labels_meses[0] = result.M1_A_0;
            aba1_labels_meses[1] = result.M1_A_1;
            aba1_labels_meses[2] = result.M1_A_2;
            aba1_labels_meses[3] = result.M1_A_3;
            aba1_labels_meses[4] = result.M1_A_4;
            aba1_labels_meses[5] = result.M1_A_5;
            aba1_labels_meses[6] = result.M1_A_6;
            aba1_labels_meses[7] = result.M1_A_7;
            aba1_labels_meses[8] = result.M1_A_8;
            aba1_labels_meses[9] = result.M1_A_9;
            aba1_labels_meses[10] = result.M1_A_10;
            aba1_labels_meses[11] = result.M1_A_11;

            aba1_labels_meses[0] = aba1_labels_meses[0].slice(6, -6);
            aba1_labels_meses[1] = aba1_labels_meses[1].slice(6, -6);
            aba1_labels_meses[2] = aba1_labels_meses[2].slice(6, -6);
            aba1_labels_meses[3] = aba1_labels_meses[3].slice(6, -6);
            aba1_labels_meses[4] = aba1_labels_meses[4].slice(6, -6);
            aba1_labels_meses[5] = aba1_labels_meses[5].slice(6, -6);
            aba1_labels_meses[6] = aba1_labels_meses[6].slice(6, -6);
            aba1_labels_meses[7] = aba1_labels_meses[7].slice(6, -6);
            aba1_labels_meses[8] = aba1_labels_meses[8].slice(6, -6);
            aba1_labels_meses[9] = aba1_labels_meses[9].slice(6, -6);
            aba1_labels_meses[10] = aba1_labels_meses[10].slice(6, -6);
            aba1_labels_meses[11] = aba1_labels_meses[11].slice(6, -6);

      });
        }, 500);

    setInterval(function (){
        $.getJSON("./server/aba1_server01.htm", function(result) {
      
          aba1_Dis_Maq = parseInt(result.DM, 10);
          aba1_Lit_Env = parseInt(result.LE, 10);
          aba1_Maq_Prod = parseInt(result.MPr, 10);
          aba1_Maq_Par = parseInt(result.MPa, 10);
          aba1_Env_Prod = parseInt(result.EP, 10);

          aba1_Vel_Prod = parseFloat(result.VP).toFixed(1);
          aba1_Disp = parseFloat(result.Di).toFixed(1);
          aba1_Rend = parseFloat(result.Re).toFixed(1);
          aba1_Cali = parseFloat(result.Ca).toFixed(1);
          aba1_OEE = parseFloat(result.OEE).toFixed(1);

          aba1_Vel_Prod = parseFloat(aba1_Vel_Prod);
          aba1_Disp = parseFloat(aba1_Disp);
          aba1_Rend = parseFloat(aba1_Rend);
          aba1_Cali = parseFloat(aba1_Cali);
          aba1_OEE = parseFloat(aba1_OEE);
          
          data_aba1_GRF01_01[0] = parseInt(result.I1_A_0, 10);
          data_aba1_GRF01_01[1] = parseInt(result.I1_A_1, 10);
          data_aba1_GRF01_01[2] = parseInt(result.I1_A_2, 10);
          data_aba1_GRF01_01[3] = parseInt(result.I1_A_3, 10);
          data_aba1_GRF01_01[4] = parseInt(result.I1_A_4, 10);
          data_aba1_GRF01_01[5] = parseInt(result.I1_A_5, 10);
          data_aba1_GRF01_01[6] = parseInt(result.I1_A_6, 10);
          data_aba1_GRF01_01[7] = parseInt(result.I1_A_7, 10);
          data_aba1_GRF01_01[8] = parseInt(result.I1_A_8, 10);
          data_aba1_GRF01_01[9] = parseInt(result.I1_A_9, 10);
          data_aba1_GRF01_01[10] = parseInt(result.I1_A_10, 10);
          data_aba1_GRF01_01[11] = parseInt(result.I1_A_11, 10);

          data_aba1_GRF02_01[0] = parseInt(result.I2_A_0, 10);
          data_aba1_GRF02_01[1] = parseInt(result.I2_A_1, 10);
          data_aba1_GRF02_01[2] = parseInt(result.I2_A_2, 10);
          data_aba1_GRF02_01[3] = parseInt(result.I2_A_3, 10);
          data_aba1_GRF02_01[4] = parseInt(result.I2_A_4, 10);
          data_aba1_GRF02_01[5] = parseInt(result.I2_A_5, 10);
          data_aba1_GRF02_01[6] = parseInt(result.I2_A_6, 10);
          data_aba1_GRF02_01[7] = parseInt(result.I2_A_7, 10);
          data_aba1_GRF02_01[8] = parseInt(result.I2_A_8, 10);
          data_aba1_GRF02_01[9] = parseInt(result.I2_A_9, 10);
          data_aba1_GRF02_01[10] = parseInt(result.I2_A_10, 10);
          data_aba1_GRF02_01[11] = parseInt(result.I2_A_11, 10);
          data_aba1_GRF02_02[0] = parseInt(result.I2_B_0, 10);
          data_aba1_GRF02_02[1] = parseInt(result.I2_B_1, 10);
          data_aba1_GRF02_02[2] = parseInt(result.I2_B_2, 10);
          data_aba1_GRF02_02[3] = parseInt(result.I2_B_3, 10);
          data_aba1_GRF02_02[4] = parseInt(result.I2_B_4, 10);
          data_aba1_GRF02_02[5] = parseInt(result.I2_B_5, 10);
          data_aba1_GRF02_02[6] = parseInt(result.I2_B_6, 10);
          data_aba1_GRF02_02[7] = parseInt(result.I2_B_7, 10);
          data_aba1_GRF02_02[8] = parseInt(result.I2_B_8, 10);
          data_aba1_GRF02_02[9] = parseInt(result.I2_B_9, 10);
          data_aba1_GRF02_02[10] = parseInt(result.I2_B_10, 10);
          data_aba1_GRF02_02[11] = parseInt(result.I2_B_11, 10);

          data_aba1_GRF03_01[0] = parseFloat(result.I3_A_0).toFixed(1);
          data_aba1_GRF03_01[1] = parseFloat(result.I3_A_1).toFixed(1);
          data_aba1_GRF03_01[2] = parseFloat(result.I3_A_2).toFixed(1);
          data_aba1_GRF03_01[3] = parseFloat(result.I3_A_3).toFixed(1);
          data_aba1_GRF03_01[4] = parseFloat(result.I3_A_4).toFixed(1);
          data_aba1_GRF03_01[5] = parseFloat(result.I3_A_5).toFixed(1);
          data_aba1_GRF03_01[6] = parseFloat(result.I3_A_6).toFixed(1);
          data_aba1_GRF03_01[7] = parseFloat(result.I3_A_7).toFixed(1);
          data_aba1_GRF03_01[8] = parseFloat(result.I3_A_8).toFixed(1);
          data_aba1_GRF03_01[9] = parseFloat(result.I3_A_9).toFixed(1);
          data_aba1_GRF03_01[10] = parseFloat(result.I3_A_10).toFixed(1);
          data_aba1_GRF03_01[11] = parseFloat(result.I3_A_11).toFixed(1);
          
          data_aba1_GRF03_01[0] = parseFloat(data_aba1_GRF03_01[0]);
          data_aba1_GRF03_01[1] = parseFloat(data_aba1_GRF03_01[1]);
          data_aba1_GRF03_01[2] = parseFloat(data_aba1_GRF03_01[2]);
          data_aba1_GRF03_01[3] = parseFloat(data_aba1_GRF03_01[3]);
          data_aba1_GRF03_01[4] = parseFloat(data_aba1_GRF03_01[4]);
          data_aba1_GRF03_01[5] = parseFloat(data_aba1_GRF03_01[5]);
          data_aba1_GRF03_01[6] = parseFloat(data_aba1_GRF03_01[6]);
          data_aba1_GRF03_01[7] = parseFloat(data_aba1_GRF03_01[7]);
          data_aba1_GRF03_01[8] = parseFloat(data_aba1_GRF03_01[8]);
          data_aba1_GRF03_01[9] = parseFloat(data_aba1_GRF03_01[9]);
          data_aba1_GRF03_01[10] = parseFloat(data_aba1_GRF03_01[10]);
          data_aba1_GRF03_01[11] = parseFloat(data_aba1_GRF03_01[11]);


          document.getElementById("aba1_Dis_Maq").innerHTML = aba1_Dis_Maq;
          document.getElementById("aba1_Lit_Env").innerHTML = aba1_Lit_Env;
          document.getElementById("aba1_Maq_Prod").innerHTML = aba1_Maq_Prod;
          document.getElementById("aba1_Maq_Par").innerHTML = aba1_Maq_Par;
          document.getElementById("aba1_Env_Prod").innerHTML = aba1_Env_Prod;
          document.getElementById("aba1_Vel_Prod").innerHTML = aba1_Vel_Prod;
          document.getElementById("aba1_Disp").innerHTML = aba1_Disp;
          document.getElementById("aba1_Rend").innerHTML = aba1_Rend;
          document.getElementById("aba1_Cali").innerHTML = aba1_Cali;
          document.getElementById("aba1_OEE").innerHTML = aba1_OEE;

      });
        }, 500);

            var ctx = document.getElementById('aba1_GRF_INDEX01').getContext('2d');
            aba1_GRF_INDEX01 = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: aba1_labels_dias,
                datasets: [{
                    label: 'Litros Envasados',
                    data: data_aba1_GRF01_01,
                    backgroundColor: colorNaranja,
                    borderColor: colorNaranja,
                    borderWidth: 1,
                    hidden: false
                }]
            }, 
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            suggestedMin: 0
                        }
                    }]
                },
                legend: {
                    display: true
                },
    
            }
            });

            var ctx = document.getElementById('aba1_GRF_INDEX02').getContext('2d');
            aba1_GRF_INDEX02 = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: aba1_labels_dias,
                datasets: [{
                    label: 'Minutos Producción',
                    data: data_aba1_GRF02_01,
                    backgroundColor: colorVerde,
                    borderColor: colorVerde,
                    borderWidth: 1
                    },{
                    label: 'Minutos Parada',
                    data: data_aba1_GRF02_02,
                    backgroundColor: colorRojo,
                    borderColor: colorRojo,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            suggestedMin: 0
                        }
                    }]
                },
                legend: {
                    display: true
                },
            }
            });

            var ctx = document.getElementById('aba1_GRF_INDEX03').getContext('2d');
            aba1_GRF_INDEX03 = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: aba1_labels_dias,
                datasets: [{
                    label: 'OEE',
                    data: data_aba1_GRF03_01,
                    backgroundColor: colorAzul,
                    borderColor: colorAzul,
                    borderWidth: 1,
                    hidden: false
                }]
            }, 
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }]
                },
                legend: {
                    display: true
                },
            }
            });

    setInterval(function (){

            aba1_GRF_INDEX01.update();
            aba1_GRF_INDEX02.update();
            aba1_GRF_INDEX03.update();
            
        }, 5000);

}