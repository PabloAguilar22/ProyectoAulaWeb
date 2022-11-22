import Link from "next/link";
import "../styles/Index.module.css"

export default function Menu() {
  return (
    <>
      <div className="contenedorMenuCompleto">
        <div className="contenedorMenu">
          <div className="btn-menu">
            <label className="labelMenuOdio" htmlFor="btn-menu">
              <div className="menuBoton"></div>
            </label>
          </div>
        </div>
        <input type="checkbox" id="btn-menu"></input>
        <div className="container-menu">
          <div className="cont-menu">
            <nav>
              <label htmlFor="btn-menu"><div className="menuBotonSalida"></div></label>
              <div className="palabraMaterias">Materias</div>
              <div className="palabraHerramientas">Herramientas</div>
              <div className="palabraExtras">Extras</div>
              <div className="palabraPerfil">Perfil</div>
              <div className="contenedorLinksMaterias">
                
                <Link href="./Quimica1" className="linksMenu">
                  Quimica 1
                </Link>
                <Link href="./Quimica2" className="linksMenu">
                  Quimica 2
                </Link>
              </div>
              <div className="contenedorLinksHerramientas">
                <Link href="./Balanceo" className="linksMenu">
                  Balanceo
                </Link>
                <Link href="./TablaPeriodica" className="linksMenu">
                  Tabla Periodica
                </Link>
                <Link href="./Calculadora" className="linksMenu">
                  Calculadora
                </Link>
              </div>
              <div className="contenedorLinksExtras">
                <Link href="./Biografias" className="linksMenu">
                  Biografías
                </Link>
                <Link href="./DatosCuriosos" className="linksMenu">
                  Datos Curiosos
                </Link>
              </div>
              <div className="contenedorLinksPerfil">
                <Link href="./Configuracion" className="linksMenu">
                  Configuración
                </Link>
                <Link href="/" className="linksMenu">
                  Cerrar Sesión
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
