/*=========================================
            GYMFIT - SCRIPT.JS
=========================================*/

// ============================
// Scroll suave del menú
// ============================

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ============================
// Crear Modal de Reserva
// ============================

const modalReserva = document.createElement("div");

modalReserva.className = "modal";

modalReserva.innerHTML = `

<div class="modal-content">

<span class="cerrar">&times;</span>

<h2>Reservar Clase</h2>

<form id="formReserva">

<input type="text" id="nombre" placeholder="Nombre completo" required>

<input type="email" id="correo" placeholder="Correo electrónico" required>

<select id="clase">

<option>CrossFit</option>

<option>Spinning</option>

<option>Yoga</option>

<option>Funcional</option>

</select>

<button type="submit" class="btn-verde">

Confirmar Reserva

</button>

</form>

</div>

`;

document.body.appendChild(modalReserva);

// ============================
// Crear Modal Login
// ============================

const modalLogin = document.createElement("div");

modalLogin.className = "modal";

modalLogin.innerHTML = `

<div class="modal-content">

<span class="cerrar">&times;</span>

<h2>Iniciar Sesión</h2>

<form id="formLogin">

<input type="email" placeholder="Correo electrónico" required>

<input type="password" placeholder="Contraseña" required>

<button type="submit" class="btn-azul">

Ingresar

</button>

</form>

</div>

`;

document.body.appendChild(modalLogin);

// ============================
// Botones
// ============================

const btnReserva = document.getElementById("btnReserva");
const btnLogin = document.getElementById("btnLogin");

if(btnReserva){

    btnReserva.addEventListener("click", ()=>{

        modalReserva.style.display="flex";

    });

}

if(btnLogin){

    btnLogin.addEventListener("click", ()=>{

        modalLogin.style.display="flex";

    });

}

// ============================
// Cerrar Modales
// ============================

document.querySelectorAll(".cerrar").forEach(btn=>{

    btn.onclick=()=>{

        modalReserva.style.display="none";
        modalLogin.style.display="none";

    }

});

window.onclick=(e)=>{

    if(e.target==modalReserva){

        modalReserva.style.display="none";

    }

    if(e.target==modalLogin){

        modalLogin.style.display="none";

    }

};

// ============================
// Reserva
// ============================

const reserva=document.getElementById("formReserva");

if(reserva){

    reserva.addEventListener("submit",function(e){

        e.preventDefault();

        const nombre=document.getElementById("nombre").value;

        const clase=document.getElementById("clase").value;

        alert("✅ Gracias "+nombre+"\\n\\nTu reserva para "+clase+" fue registrada correctamente.");

        this.reset();

        modalReserva.style.display="none";

    });

}

// ============================
// Login
// ============================

const login=document.getElementById("formLogin");

if(login){

    login.addEventListener("submit",function(e){

        e.preventDefault();

        alert("Bienvenido a GymFit 💪");

        this.reset();

        modalLogin.style.display="none";

    });

}

// ============================
// Formulario Contacto
// ============================

const contacto=document.getElementById("formContacto");

if(contacto){

    contacto.addEventListener("submit",function(e){

        e.preventDefault();

        alert("📩 Tu mensaje fue enviado correctamente.");

        this.reset();

    });

}

// ============================
// Navbar cambia de color
// ============================

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>50){

        navbar.style.background="#020617";

    }else{

        navbar.style.background="#111827";

    }

});

// ============================
// Botones Elegir Plan
// ============================

document.querySelectorAll(".plan-card button").forEach(boton=>{

    boton.addEventListener("click",()=>{

        alert("Has seleccionado un plan. Muy pronto podrás realizar el pago.");

    });

});

// ============================
// Animación de aparición
// ============================

const elementos=document.querySelectorAll(".card,.plan-card");

const mostrar=()=>{

    elementos.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            el.style.opacity="1";

            el.style.transform="translateY(0)";

        }

    });

};

elementos.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".7s";

});

window.addEventListener("scroll",mostrar);

mostrar();