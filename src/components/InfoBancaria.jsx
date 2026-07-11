import { ArrowLeft, Copy, CreditCard, Smartphone, Building } from 'lucide-react'
import './InfoBancaria.css'

function copyTexto(texto) {
  navigator.clipboard.writeText(texto).catch(() => {})
}

function InfoBancaria({ onBack }) {
  return (
    <div className="bancaria-container">
      <button className="bancaria-back" onClick={onBack}>
        <ArrowLeft size={20} />
        <span>Volver</span>
      </button>

      <h2 className="bancaria-title">Información Bancaria</h2>

      <div className="bancaria-contenido">
      <div className="bancaria-card">
        <div className="bancaria-header">
          <Smartphone className="bancaria-header-icon" />
          <span className="bancaria-header-label">Pago Móvil</span>
        </div>
        <div className="bancaria-row">
          <span className="bancaria-key">Banco</span>
          <span className="bancaria-value">0102</span>
        </div>
        <div className="bancaria-row">
          <span className="bancaria-key">Cédula</span>
          <span className="bancaria-value">16.627.437</span>
        </div>
        <div className="bancaria-row">
          <span className="bancaria-key">Teléfono</span>
          <span className="bancaria-value">0416-0430859</span>
          <Copy className="bancaria-copy" size={16} onClick={() => copyTexto('0416-0430859')} />
        </div>
      </div>

      <div className="bancaria-card">
        <div className="bancaria-header">
          <Building className="bancaria-header-icon" />
          <span className="bancaria-header-label">Cuenta Bancaria</span>
        </div>
        <div className="bancaria-row">
          <span className="bancaria-key">N° de Cuenta</span>
          <span className="bancaria-value bancaria-cuenta">0102 0645 6000 0030 7978</span>
          <Copy className="bancaria-copy" size={16} onClick={() => copyTexto('0102 0645 6000 0030 7978')} />
        </div>
      </div>

      <div className="bancaria-card bancaria-nota">
        <CreditCard className="bancaria-header-icon" />
        <p className="bancaria-nota-texto">
          Ofrenda voluntaria para el sostenimiento de la obra del Señor. Dios bendice al dador alegre.
        </p>
      </div>
      </div>
    </div>
  )
}

export default InfoBancaria