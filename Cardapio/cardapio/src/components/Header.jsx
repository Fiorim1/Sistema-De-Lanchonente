// Importando Estilo
import "../styles/Header.css"

// Ícones
import iconWhatsapp from "../assets/iconWhatsapp.png"
import iconInstagram from "../assets/iconInstagram.png"

// Imagens
import logo from "../assets/hamb-1.png"


function Header() {


  return (
    <div className="headerContainer">

      {/* logo Header */}
      <img src={logo} alt="Logo Dev Burger" className="logoHeader" />

      <h1>Lanchonete Dev Burger</h1>

      <div className="address">

        <p>Rua dos Devs, 123 - Tech City</p>

      </div>

      <div className="socialIcons">

        <button>

          {/* Ícone do Whatsapp */}
          <img src={iconWhatsapp} alt="Ícone do Whatsapp" />

          {/* Texto do Botão */}
          <span>Whatsapp</span>

        </button>

        <button>

          {/* Ícone do Whatsapp */}
          <img src={iconInstagram} alt="Ícone do Instagram" />

          {/* Texto do Botão */}
          <span>Instagram</span>

        </button>
      </div>

      <div className="date">
         <p> Seg - Dom - 18:00 - 23:00</p>
      </div>

    </div>
  )
}

export default Header
