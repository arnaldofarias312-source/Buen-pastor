import { ArrowLeft, BookOpen, User, Star, ScrollText } from 'lucide-react'
import './ReformaProtestante.css'

const solas = [
  {
    numero: 'I',
    titulo: 'Sola Scriptura — Solo la Escritura',
    texto: 'La Biblia es la única autoridad infalible para la fe y la conducta del creyente. Rechazamos toda tradición humana o dogma eclesiástico que contradiga la Palabra de Dios. La Escritura se interpreta a sí misma y es suficiente para guiarnos a la salvación y a una vida de piedad.',
    cita: '2 Timoteo 3:16-17',
  },
  {
    numero: 'II',
    titulo: 'Sola Fide — Solo por Fe',
    texto: 'Somos declarados justos delante de Dios únicamente mediante la fe en Jesucristo, no por nuestras obras o méritos. La fe es un don de Dios, y por ella recibimos la justicia de Cristo. Las buenas obras son el fruto de la fe, nunca la causa de la salvación.',
    cita: 'Romanos 3:28',
  },
  {
    numero: 'III',
    titulo: 'Sola Gratia — Solo por Gracia',
    texto: 'La salvación es un regalo inmerecido de Dios. El hombre, muerto en sus delitos y pecados, no puede contribuir en nada a su propia redención. Es Dios quien, por su amor soberano, nos da vida junto con Cristo. No hay mérito humano alguno, solo la misericordia divina.',
    cita: 'Efesios 2:8-9',
  },
  {
    numero: 'IV',
    titulo: 'Solus Christus — Solo Cristo',
    texto: 'Jesucristo es el único mediador entre Dios y los hombres. No hay salvación en ningún otro. Su obra en la cruz es perfecta y suficiente para la redención de todos los que creen. Rechazamos cualquier enseñanza que añada mediadores humanos, santos o la Iglesia misma como necesaria para la salvación.',
    cita: 'Hechos 4:12',
  },
  {
    numero: 'V',
    titulo: 'Soli Deo Gloria — Solo a Dios la Gloria',
    texto: 'Toda la gloria, honra y alabanza pertenece exclusivamente a Dios. No debemos gloriarnos en hombres, instituciones, ni en nosotros mismos. La creación, la redención y cada aspecto de nuestra vida deben ser para la gloria de Dios. Él es el principio y el fin de todas las cosas.',
    cita: '1 Corintios 10:31',
  },
]

function ReformaProtestante({ onBack }) {
  return (
    <div className="rp-container">
      <button className="rp-back" onClick={onBack}>
        <ArrowLeft size={20} />
        <span>Volver</span>
      </button>

      <h2 className="rp-title">Reforma Protestante</h2>

      <section className="rp-section">
        <h3 className="rp-section-title">
          <BookOpen className="rp-section-icon" />
          ¿Qué fue la Reforma Protestante?
        </h3>
        <p className="rp-text">
          La Reforma Protestante fue un movimiento de restauración bíblica que surgió en el
          siglo XVI, cuando Dios levantó hombres como Martín Lutero, Juan Calvino y Ulrico
          Zwinglio para llamar a su Iglesia de vuelta a las Escrituras. La Iglesia de Roma
          había añadido doctrinas y prácticas que contradecían la Palabra de Dios: la venta
          de indulgencias, la justificación por obras, la autoridad del Papa por sobre la
          Biblia, la adoración de imágenes, la intercesión de santos y la negación del
          sacerdocio de todos los creyentes.
        </p>
        <p className="rp-text rp-spacer">
          La Reforma no fue un cisma, sino un regreso a las fuentes: a Cristo como único
          Salvador, a la gracia como único medio, a la fe como único instrumento, y a la
          Escritura como única autoridad. Los reformadores no buscaban fundar una nueva
          iglesia, sino restaurar la verdad del evangelio que había sido oscurecida por
          siglos de tradición humana. Por eso los protestantes afirmamos que la verdadera
          iglesia es aquella donde la Palabra de Dios es predicada fielmente y los
          sacramentos son administrados según la institución de Cristo.
        </p>
        <p className="rp-text rp-spacer">
          El 31 de octubre de 1517, Lutero clavó sus 95 Tesis en la puerta de la iglesia
          de Wittenberg, un acto que desató una crisis que llevó a millones de personas a
          leer la Biblia por sí mismas, a descubrir el evangelio de la gracia y a
          rechazar toda autoridad que se elevara por encima de Cristo y su Palabra. La
          Reforma no terminó en el siglo XVI: sigue viva cada vez que un creyente abre su
          Biblia y dice: "Sola Scriptura".
        </p>
      </section>

      <section className="rp-section">
        <h3 className="rp-section-title">
          <User className="rp-section-icon" />
          Martín Lutero (1483-1546)
        </h3>
        <p className="rp-text">
          Martín Lutero fue un monje agustino y doctor en teología. A pesar de su celo
          religioso, vivía atormentado por el miedo a la ira de Dios y la imposibilidad
          de alcanzar la salvación por sus propios esfuerzos. Se confesaba diariamente,
          ayunaba y se mortificaba, pero nunca encontraba paz en su conciencia.
        </p>
        <p className="rp-text rp-spacer">
          Fue mientras estudiaba el libro de Romanos, particularmente Romanos 1:17 —
          <em>"El justo por la fe vivirá"</em>— que el Espíritu Santo abrió sus ojos.
          Lutero comprendió que la justicia de Dios no es una justicia que Él exige, sino
          una justicia que Él regala gratuitamente a través de la fe en Jesucristo. Esta
          revelación transformó su vida y encendió la Reforma. Más tarde diría: "Allí
          sentí que había nacido de nuevo y que las puertas del paraíso se me habían
          abierto".
        </p>
        <p className="rp-text rp-spacer">
          Lutero no buscaba dividir la iglesia, sino corregir errores doctrinales graves.
          Sus 95 Tesis eran puntos de debate académico, pero la respuesta del papado fue
          excomulgarlo y condenar sus enseñanzas. Cuando le exigieron retractarse, Lutero
          respondió en la Dieta de Worms (1521): "A menos que sea convencido por la
          Escritura y la razón evidente —no acepto la autoridad de los papas y concilios,
          porque ellos se han contradicho— mi conciencia está cautiva a la Palabra de
          Dios. No puedo ni quiero retractarme de nada, porque ir contra la conciencia no
          es seguro ni saludable. ¡Que Dios me ayude! Amén".
        </p>
        <p className="rp-text rp-spacer">
          Tradujo la Biblia al alemán para que el pueblo pudiera leerla, escribió himnos
          que congregaban a la iglesia cantando la verdad, defendió el sacerdocio de
          todos los creyentes y proclamó con valentía que Cristo es suficiente. Su legado
          no es la perfección —fue un hombre pecador como todos— sino la firmeza de
          poner la Palabra de Dios por encima de toda autoridad humana.
        </p>
      </section>

      <section className="rp-section">
        <h3 className="rp-section-title">
          <Star className="rp-section-icon" />
          Las 5 Solas
        </h3>
        <p className="rp-text rp-sub">
          Estos cinco principios resumen las convicciones fundamentales de la Reforma
          Protestante y siguen siendo el corazón del evangelio bíblico:
        </p>
        {solas.map((s) => (
          <div key={s.numero} className="rp-sola-card">
            <span className="rp-sola-numero">{s.numero}</span>
            <div className="rp-sola-body">
              <strong className="rp-sola-titulo">{s.titulo}</strong>
              <p className="rp-sola-texto">{s.texto}</p>
              <p className="rp-sola-cita">{s.cita}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="rp-section">
        <h3 className="rp-section-title">
          <ScrollText className="rp-section-icon" />
          Otros Reformadores
        </h3>
        <p className="rp-text">
          La Reforma no fue obra de un solo hombre. <strong>Juan Calvino</strong> (1509-1564)
          sistematizó la doctrina reformada en sus <em>Instituciones de la Religión
          Cristiana</em>, destacando la soberanía de Dios en la salvación. <strong>Ulrico
          Zwinglio</strong> (1484-1531) lideró la Reforma en Suiza, predicando
          expositivamente libro por libro de la Biblia. En Escocia, <strong>John Knox</strong>
          (1514-1572) estableció la iglesia presbiteriana. En Inglaterra, figuras como
          <strong>William Tyndale</strong> dieron su vida para traducir la Biblia al
          idioma del pueblo. Todos ellos compartían una misma convicción: que la Iglesia
          debe ser reformada constantemente por la Palabra de Dios —<em>Ecclesia
          Reformata, Semper Reformanda</em>.
        </p>
      </section>
    </div>
  )
}

export default ReformaProtestante