import { CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import ScienceIcon  from '@mui/icons-material/Science';
import BiotechSharpIcon from '@mui/icons-material/BiotechSharp';
import FunctionsIcon from '@mui/icons-material/Functions';
import CalculateIcon from '@mui/icons-material/Calculate';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SchoolIcon from '@mui/icons-material/School';
import TablaPeriodica from "../pages/Blog";

export const navlink = [
  {
    url: "/",
    text: "INICIO",
  },
  {
    url: "/about",
    text: "SOBRE",
  },
  {
    url: "/services",
    text: "DISCIPLINAS",
  },
  {
    url: "/portfolio",
    text: "FIPAD",
  },
  {
    url: "/testimonials",
    text: "CAMPEONES",
  },
  {
    url: "/blog",
    text: "EVENTOS",
  },
  {
    url: "/contact",
    text: "CONTACTO",
  },
]
export const home = [
  {
    text: "HOLA SOY EL AMIGO Y MAESTRO",
    name: "",
    post: "FUNDADOR DEL CLUB DE CIENCIAS",
    design: "ME DEDIQUE A CULTIVAR TALENTOS POR MAS DE 30 AÑOS",
    desc: "SOY UN CONVECIDO DEL PODER DE  LA DOCENCIA PARA TRANSFORMAR LA VIDA DE LAS PERSONAS.",
  },
]
export const about = [
  {
    desc:"Como sabemos, la educación es un fenómeno muy complejo que involucra diferentes aspectos, como biológicos, psicológicos, familiares, económicos y sociales. Por lo tanto, quienes se dedican a desarrollar un proceso de enseñanza-aprendizaje en cualquier área del conocimiento deben contar con la experiencia, conocimiento de la personalidad de sus alumnos y algo muy importante: tener y desarrollar una metodología adecuada, eficaz y comprobada para enfrentar las diferentes situaciones que se presentan a diario dentro del aula o en el interior de los laboratorios. ",
    
    desc2: " ",

  },
]
export const services = [

  {
    id: 1,
    icon: <ScienceIcon />,
    title: "Quimica",
    desc: "",
  },
  {
    id: 2,
    icon: <CalculateIcon />,
    title: "Matematicas",
    desc: "",
  },
  {
    id: 3,
    icon: <CloudQueueIcon />,
    title: "Astronomia",
    desc: "",
  },
  {
    id: 4,
    icon: <FunctionsIcon />,
    title: "Fisica",
    desc: "",
  },
  {
    id: 5,
    icon: <BiotechSharpIcon />,
    title: "Biologia",
    desc: "",
  },
  {
    id: 6,
    icon: <SchoolIcon />,
    title: "Asesorias",
    desc: "",
  },
]
export const project = [
  {
    id: 1,
    icon: <ScienceIcon />,
    num: "57",
    title: "Medallero",
  },
  {
    id: 2,
    icon: <FunctionsIcon />,
    num: "231",
    title: "Reconocimientos",
  },
  {
    id: 3,
    icon: <SchoolIcon />,
    num: "580",
    title: "Ediciones del club",
  },
  {
    id: 4,
    icon: <SchoolIcon />,
    num: "146",
    title: "Miembros",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port3.JPG",
    name: "",
    category: "Fisica",
    title: "2014",
  },
  {
    id: 2,
    cover: "../images/port/port2.JPG",
    name: "",
    category: "Quimica",
    title: "2014",
  },
  {
    id: 3,
    cover: "../images/port/port1.JPG",
    name: "",
    category: "Astronomia",
    title: "2015",
  },
  {
    id: 4,
    cover: "../images/port/port4.JPG",
    name: "",
    category: "Matematicas",
    title: "2015",
  },

]
export const testimonials = [
  {
    id: 1,
    text: "Formo un gran grupo de jóvenes, unidos y motivados por triunfar en las ciencias.",
    image: "./images/testimonials/team1.jpg",
    name: "Carlos Mungia",
    post: "Ingeniero Quimico ",
  },
  {
    id: 2,
    text: "Nos dio las herramientas necesarias para cumplir todas nuestras metas ",
    image: "./images/testimonials/team2.JPG",
    name: "Angel Urit Sanchez Giorge",
    post: "Ingeniero en Mecatronica",
  },
  {
    id: 3,
    text: "El Club de Ciencias me preparo para perseguir retos nacionales e internacionales. ",
    image: "./images/testimonials/team3.JPG",
    name: "Brayan Ramirez camacho",
    post: "Cientifico de Datos",
  },
]

function PaginaPrincipal() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <TablaPeriodica />
    </div>
  );
}
export const blog = [
  {
    title: "Tabla periodica",
    desc:<TablaPeriodica />,
  },

]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "",
    text2: "",
  },
  {
    icon: <PhoneIphone />,
    text1: "",
    text2: "",
  },
  {
    icon: <EmailOutlined />,
    text1: "",
    text2: "",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
