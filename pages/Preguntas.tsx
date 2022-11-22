/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useState} from 'react'
import style from '../styles/Preguntas.module.css'

export default function Preguntas() {
  const numero=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"]
  const preguntas=[
  "¿Qué tipo de examen realizas con mayor facilidad?",
  "Cuando tienes que aprender algo de memoria…",
  "Cuando estás en clase y el profesor explica algo que está escrito en la pizarra o en tu libro, te es más fácil seguir las explicaciones…",
  "Marca la frase con las que te identifiques más.",
  "¿Cuál de las siguientes actividades disfrutas más?",
  "¿De qué manera te resulta más fácil aprender algo?",
  "Cuando no encuentras las llaves en una bolsa, ¿qué haces para encontrarlas más rápidamente?",
  "Cuando te dan instrucciones…",
  "¿Cuál de estos ambientes te atrae más?",
  "Si te ofrecieran uno de los siguientes empleos, ¿cuál elegirías?",
  "¿A qué tipo de evento preferirías asistir?",
  "Si tuvieras mucho dinero ahora mismo, ¿qué harías?",
  "En clase lo que más te gusta para aprender es que…",
  "Principalmente, ¿cómo te consideras?",
  "Si tuvieras que quedarte en una isla desierta, ¿qué preferirías llevar contigo?",
  "¿Qué cosas te distraen más en clase?",
  "¿Qué programas de televisión prefieres ver?",
  "¿Qué prefieres hacer en tu tarde libre?",
  "¿De qué manera te formas una opinión de otras personas?",
  "¿Cómo prefieres pasar el tiempo con tu mejor amigo/a?",
  "¿Cómo definirías tu forma de vestir?",
  "Si pudieras elegir ¿qué preferirías ser?",
  "¿Qué es lo que más te gusta de una habitación?",
  "¿Qué es lo que más te gusta de viajar?"
  ]
  const opcion1= [
  "Examen escrito.",
  "Memorizo lo que veo y recuerdo la imagen (por ejemplo, la página del libro).",
  "Escuchando al profesor.",
  "Prefiero escuchar chistes que leer cómics.",
  "Ver películas.",
  "Repitiendo en voz alta.",
  "Sacudo la bolsa para oír el ruído.",
  "Me pongo en movimiento antes de que acaben de hablar y explicar lo que hay que hacer.",
  "Uno en el que se escuchen las olas del mar.",
  "Director de un club deportivo.",
  "A un concierto de música.",
  "Viajar y conocer el mundo.",
  "Se organicen actividades en que los alumnos tengan que hacer cosas y puedan moverse.",
  "Sociable.",
  "Un radio portátil.",
  "Noticias sobre el mundo y la actualidad",
  "El ruido.",
  "Ir al cine.",
  "Por la sinceridad en su voz.",
  "Viendo algo juntos.",
  "Con gusto y conjuntada.",
  "Un gran músico.",
  "Que sea confortable.",
  "Conocer lugares nuevos."
  ]
  const opcion2= [
  "Examen oral",
  "Memorizo mejor si repito lo estudiado rítmicamente y recuerdo paso a paso",
  "Me aburro y espero a que me den algo para hacer.",
  "Mis cuadernos y libretas están ordenados y bien presentados, me molestan los tachones y las correcciones.",
  "Escuchar música.",
  "Escribiéndolo varias veces.",
  "Las busco mirando.",
  "Recuerdo con facilidad las palabras exactas de lo que me han dicho.",
  "Uno con una hermosa vista al océano.",
  "Locutor de una emisora de radio.",
  "A una muestra gastronómica.",
  "Comprar una casa.",
  "Me den el material escrito y con fotos, diagramas.",
  "Atlético.",
  "Golosinas y comida enlatada.",
  "El movimiento.",
  "Programas de entretenimiento.",
  "Quedarme en casa.",
  "Por la forma de estrecharte la mano.",
  "Conversando.",
  "Discreta pero correcta.",
  "Un gran médico.",
  "Que sea silenciosa.",
  "Conocer personas y hacer nuevos amigos.",
  ]
  const opcion3= [
  "Examen de opción múltiple",
  "Memorizo a base de pasear y mirar, y recuerdo una idea general mejor que los detalles",
  "Leyendo el libro o la pizarra.",
  "Me gusta tocar las cosas y tiendo a acercarme mucho a la gente cuando hablo con alguien.",
  "Bailar.",
  "Relacionándolo con algo, a poder ser divertido.",
  "Las busco con la mano, pero sin mirar.",
  "Me cuesta recordar las instrucciones orales, pero no hay problema si me las dan por escrito.",
  "Uno en el que se sienta un clima agradable.",
  "Editor de una revista.",
  "A un espectáculo de magia.",
  "Adquirir un estudio de grabación.",
  "Se organicen debates y que haya diálogo.",
  "Intelectual.",
  "Algunos buenos libros.",
  "Las explicaciones demasiado largas.",
  "Reportajes de descubrimientos y lugares.",
  "Ir a un concierto.",
  "Por su aspecto.",
  "Paseando o haciendo deporte.",
  "Informal.",
  "Un gran pintor.",
  "Que esté limpia y ordenada.",
  "Aprender sobre otras costumbres."
  ]

  const [posicion,setPosicion] = useState(0)
  const [numeroD,setNumeroD] = useState("1")
  const [preguntaD,setPreguntaD] = useState("¿Qué tipo de examen realizas con mayor facilidad?")
  const [opcion1D,setOpcion1D] = useState("Examen escrito.")
  const [opcion2D,setOpcion2D] = useState("Examen oral")
  const [opcion3D,setOpcion3D] = useState("Examen de opción múltiple")



  function accion(e){
    
    if(posicion>24){
      e.preventDefault();
      asignar()
      setPosicion(posicion+1)
    }
    else{
      alert("Ya terminaste")
    }
  }
  function asignar(){
    setNumeroD(numero[posicion])
    setPreguntaD(preguntas[posicion])
    setOpcion1D(opcion1[posicion])
    setOpcion2D(opcion2[posicion])
    setOpcion3D(opcion3[posicion])
  }

  return (
    <div className={style.divContenedorCompleto}>
        <div className={style.divNumero}>{numeroD}</div>
        <label className={style.labelPregunta}>{preguntaD}</label>
        <form className={style.divFormulario} onSubmit={accion} method="post">
            <input className={style.radioButtons} type="radio" name="radio" id="1" required/>
            <label className={style.labelsRadioButton}>{opcion1D}</label><br />
            <input className={style.radioButtons} type="radio" name="radio" id="2" />
            <label className={style.labelsRadioButton}>{opcion2D}</label><br />
            <input className={style.radioButtons} type="radio" name="radio" id="3" />
            <label className={style.labelsRadioButton}>{opcion3D}</label>
            <button type='submit' className={style.botonSiguiente}>Siguiente</button>
        </form>
    </div>
    
  )
}

