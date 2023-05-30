<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis físico químico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='alt').img28-tm2

      .col-lg-6
        .tarjeta.tarjeta-gris.p-3
          p.mb-0 El análisis físico químico permite determinar características para conocer si el agua es potable o no, así como información sobre la operación adecuada de las PTAP. En el proceso de supervisión de sistemas de agua, la fase más importante es garantizar que estos funcionen correctamente, la manera más fiable para verificar es la toma y procesamiento de muestras en diferentes puntos para analizar si se cumple con la eficiencia requerida y con las particularidades del sistema de agua objeto de seguimiento. 


    separador
    #t_3_1.titulo-segundo.color-acento-botones
       h2 3.1 Características físico químicas del agua

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-azul.p-4
        .row.justify-content-center.align-items-center
          .col-4.col-lg-2
            figure.mb-3
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='alt').img12-tm2
          
          .col-lg-10
            p.mb-0 El agua contiene diversas substancias químicas y biológicas disueltas o suspendidas en ella. Desde el momento que se condensa en forma de lluvia, el agua disuelve los componentes químicos de sus alrededores, corre sobre la superficie del suelo y se filtra a través del mismo. Además, el agua contiene organismos vivos que reaccionan con sus elementos físicos y químicos.  Por esta razón es necesario conocer una de sus características principales como la turbiedad.

    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="flip-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .row.bg2-tema3.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Color

    .row.mb-5
      p Relacionado con la presencia de materia orgánica principalmente de restos vegetales, así como taninos, algas y minerales (Deloya, A, 2006, p. 33) debido a esto cuando el límite máximo permisible se supera en el efluente de la PTAP se debe hacer la misma inspección que se mencionó en la turbidez a través de las diferentes etapas del tratamiento.

    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-adicional-2.mb-4
        h5 Figura 5.
        br
        span #[i Color aparente en muestra derivado de partículas en suspensión.]

      .col-10.col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img3.svg', alt='alt')

      .col-lg-8
        p Para fuentes de agua superficial, ya sea en suspensión, disuelta o en estado coloidal; lo cual le confiere a la muestra de agua condiciones que organolépticamente (estéticas) pueden ser rechazadas por el consumidor final. Existen dos definiciones importantes relacionadas: color verdadero o real entendido como el obtenido posterior a un proceso de filtración (0.45 unidades de longitud (µm)) en una solución de la muestra de agua (disueltas) mientras que el color aparente es derivado de muestras sin filtrar debido a las partículas en suspensión (Figura 5).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8

      .col-lg-4
        .titulo-sexto.color-adicional-2.mb-3
          h5 Figura 6.
          br
          span #[i Equipo para la determinación de color.]

      .col-lg-8
        p La medición del color (Figura 6) se hace a través del método #[b platino-cobalto] establecido en el en método 2120C (APHA, AWWA & WEF, 2012) el principio de este método es que el color del agua se compara con una serie de patrones de color que produce 1 ppm de platino (en forma de cloroplatinato) con determinada cantidad de cobalto añadida. Los resultados se expresan como Unidades Platino Cobalto (UPC) actualmente para mayor precisión de los resultados estos son determinados a partir de longitudes de onda (Martínez, M y Osorio A, 2018).

        p En términos del marco normativo la resolución 2115 (2007) establece como máximo aceptable 15 UPC (color aparente).

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img4.svg', alt='alt')

    .row.bg2-tema3.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Temperatura

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Es un factor que afecta la velocidad de algunas reacciones como la solubilidad de gases (ejemplo O2 y el CO2) y también el comportamiento de algunas sustancias químicas utilizadas en los procesos de tratamiento tales como la coagulación y la cloración.

      .col-lg-8
        .cajon.color-acento-botones.p-4
          p.mb-0 Por ejemplo, el sulfato de aluminio (Al2 (SO4)3) también conocido como alumbre, utilizado para coagulación a una temperatura de 25 °C, resulta alcanzar una mayor efectividad (OPS y Cepis, 2002, p. 678) La solubilidad de las sales también está determinada por efectos de la temperatura y esto representará cambios en las condiciones de conductividad de un cuerpo de agua (Solís, Y., Zúñiga, L y Mora, D., 2018 pp. 36 -37)

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema3/img5.png', alt='alt')
      
      .col-lg-11
        .tarjeta.bgtarjeta.p-4
          p Es importante controlar la temperatura a la cual ingresa el agua al sistema debido a que hay componentes sensibles que se pueden dilatar y generar inconvenientes en su operación, tales como transmisores, controladores y otros equipos electrónicos, así como las altas o bajas temperaturas pueden afectar a los agentes biológicos que realizan el trabajo en las etapas secundarias.

    .row.mb-5
      p Para controlar la temperatura se suelen utilizar canaletas que permiten que el agua haga un recorrido antes de ingresar a la PTAP hasta que alcance la temperatura ambiente. Cuando el agua requiere ser aireada, las torres y las caídas para que haya golpe hidráulico permiten regular la temperatura antes de ser tratada en la PTAP.

    .row.bg2-tema3.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Conductividad

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img6.svg', alt='alt')      

      .col-lg-8
        p Está asociada con la capacidad de conducir corriente eléctrica y esto está determinado en mayor proporción, por la presencia de partículas inorgánicas (iones) en sólidos disueltos (Ideam, 2006).  Las unidades de medida son microsiemens por centímetro (μS/cm) en el Sistema internacional de Unidades, y bajo el marco normativo para calidad de agua en su artículo 3 la Resolución 2115 (2007) especifica que no debe sobrepasar 1000 μS/cm.

        p Al ser una propiedad que depende de la presencia de sólidos disueltos en el agua la supervisión y control se debe hacer igual que la turbiedad.

    .row.bg2-tema3.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Olor y sabor

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p La presencia de sustancias químicas volátiles, así como materia orgánica puede generar olor y sabor en el agua. (Orellana, 2005, p. 2) De acuerdo con el marco normativo en la Resolución 2115 (2007), en su capítulo II, artículo 2, las condiciones de olor y sabor deben ser aceptables. 

        p En caso de persistir olor o sabor después de realizar un tratamiento en la PTAP se debe realizar la supervisión y control como se especifica en la turbidez.

        p Por otra parte, las características químicas del agua se citan a continuación.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img7.svg', alt='alt')       

    .row.bg2-tema3.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 pH

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema3/img8.png', alt='alt')
      
      .col-lg-11
        .tarjeta.bgtarjeta.p-4
          p El pH determina la medida de acidez o alcalinidad de una solución o sustancia a través de una escala numérica que va de 0 a 14 y su medición se realiza a través del pH metro (Figura 7) preferiblemente in situ. Un pH inferior a 7 es considerado ácido, mayor a 7 alcalino y neutros en la medida en que se acerque a 7.

    .row.mb-5
      p De acuerdo con la resolución 2115 (2007) en el artículo 4 para el consumo de agua potable el potencial de hidrógeno (pH) debe estar en un rango de 6.5 a 9, es decir cercano a la neutralidad. Las condiciones de pH en cierta medida favorecen la formación del floc (producto líquido de alto peso molecular con efecto coagulante y floculante de sólidos en suspensión) en el agua para los procesos de tratamiento posteriores. En caso de que sea necesario, se pueden adelantar acciones que permitan la corrección del pH, con algunos auxiliares de coagulación.  

    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-adicional-2.mb-4
        h5 Figura 7.
        br
        span #[i Determinación de pH en planta de tratamiento.]

      .col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img9.svg', alt='alt')

      .col-lg-8
        p Cuando el pH no está dentro del límite máximo permisible luego de tener un tratamiento se debe hacer una revisión del tanque de igualación para ajustar bien sea con sustancias ácidas o con sustancias básicas de acuerdo con el pH inicial. 

        .cajon.color-acento-botones.p-4
          p.mb-0 En algunos casos cuando se hacen procesos de coagulación es necesario hacer dos ajustes de pH, uno antes para alcanzar las condiciones óptimas de coagulación para después alcanzar los niveles de pH establecidos en la resolución 2115 (2007).

    .row.bg2-tema3.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Alcalinidad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Está relacionada con la presencia de carbonatos, bicarbonatos e hidróxidos (OH-) en el agua. Algunos compuestos que la producen son carbonato de potasio (K2CO3) o bicarbonato de potasio (KHCO3) o bicarbonato de sodio (NaHCO3) o carbonato de sodio (Na2CO3) (Orellana, 2005, p. 2). Las condiciones de alcalinidad se controlan en la planta de tratamiento debido a que tiene efectos tanto en la efectividad del proceso de coagulación, como el deterioro del sistema por corrosión (OPS y Cepis, 2002, p. 681).

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img10.svg', alt='alt')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .titulo-sexto.color-adicional-2.mb-4
          h5 Tabla 2.
          br
          span #[i Clasificación de la dureza por CaCO3 en el agua, según OMS.]      
        .tabla-a.color-adicional-2
          table
            thead
              tr.texto-blanco.color-tabla
                th(style="width:40%") Concentración de CaCO3/mg/L
                th Tipo
                th Codificación
            tbody
              tr
                td.text-center 0 - 60
                td.text-center Blanda
                td.text-center Azul
              tr
                td.text-center 61 - 120
                td.text-center Moderadamente dura
                td.text-center Verde
              tr
                td.text-center 121 - 180
                td.text-center Dura
                td.text-center Amarillo
              tr
                td.text-center > 180
                td.text-center muy dura
                td.text-center Rojo


    .row.bg2-tema3.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Acidez    


    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img11.svg')})`}"
        )
        .bloque-texto-g1__texto.p-4
          p.mb-0 Derivado de la presencia de sustancias ácidas como el ácido sulfúrico (H2SO4) sulfato ferroso (FeSO4) sulfato de aluminio (Al2 (SO4)2) (Orellana, 2005, p. 3) las cuales traen efectos corrosivos en el sistema de tuberías. 


    .row.bg2-tema3.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Dureza 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p La dureza total hace referencia a la presencia de calcio y magnesio (suma de concentraciones) determinada en miligramo por litro de carbonato de calcio (CaCO3).

        p La dureza en el agua está relacionada con la presencia de aniones como HCO3, SO4, Cl, NO, SiO3 y cationes como Ca, Mg, Sr, Fe y Mn. Como consecuencia se generan problemas de lavado, debido a la dificultad para crear espuma en el momento de usar jabones (Ideam, 2007, p.2) De acuerdo con el marco normativo la dureza total no puede sobrepasar los 300 mg/L de CaCO3.

        .cajon.color-acento-botones.p-4.mb-3
          p.mb-0 Controlar el parámetro de dureza es importante para la operación de las PTAP, si esta empieza a exceder los límites permisibles no solo se tendrá como resultado un agua no apta para el consumo humano, sino que la tubería empezará a tener obstrucciones lo que hará una sobrecarga de presión en el sistema y la posible ruptura de equipos y accesorios, así como el incremento en la demanda energética que realizan las bombas.

        p La dureza se controla principalmente en un equipo conocido como ablandador, cuando se cuenta con este equipo y sin embargo la concentración supera a la máxima permisible se debe hacer una desorción ya que lo más probable es que haya sobresaturación en las membranas internas.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img12.svg', alt='alt')        

    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Hierro y manganeso

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema3/img13.png', alt='alt')
      
      .col-lg-11
        .tarjeta.bgtarjeta.p-4
          p El agua cuya fuente de captación sea de tipo subterránea tiene características muy diferentes a las de condiciones superficiales. Una de ellas es la presencia de hierro y manganeso que le otorgan al agua características rojizas (hierro) o rojizas oscuras (manganeso) En cuanto al suministro de agua con estas características, podrían ocasionar condiciones indeseables como el manchado de ropa y otros artículos (McFarland, M. Y Dozier, M, s.f.).


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4
          p.mb-0 Cuando el agua afluente tiene concentración por encima del límite máximo permisible de hierro y manganeso se suele utilizar filtros de arena para disminuir dichos parámetros.

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-azul.p-4
        .row.justify-content-center.align-items-center
          .col-4.col-lg-2
            figure.mb-3
              img(src='@/assets/curso/temas/tema3/img14.svg', alt='alt').img12-tm2
          
          .col-lg-10
            p.mb-0 Los filtros de arena suelen tener fallas cuando la presión del agua es alta, por lo que se debe revisar que no existan fugas ni de arena, ni de agua, así mismo la presencia de hierro y manganeso en el agua efluente puede significar la saturación de arena o la creación de canales que permiten el paso del agua sin que tenga contacto con la misma.

    .row.mb-5
      p Cuando se presente esto se debe secar el filtro de arena, organizar de nuevo las capas y hacer la medición, si la concentración no disminuye se debe desorber la arena o cambiarse.

    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Oxígeno disuelto

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img15.svg', alt='alt')

      .col-lg-8
        p Puede considerarse como un indicador del grado de contaminación de una fuente de agua, dado a que una carga orgánica alta actúa como agente reductor de la cantidad de oxígeno disponible, afectando de esta manera las condiciones de vida aerobias del cuerpo hídrico. La presencia de oxígeno soluble también está determinada por la solubilidad del gas, la presión parcial del gas en la atmósfera y/o la temperatura (Ideam, 2004).


    .row.mb-5
      p Cuando el parámetro de oxígeno es bajo se suelen utilizar dos métodos:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        figure.mb-4
          img(src='@/assets/curso/temas/tema3/img16.svg', alt='alt')      
      
        .cajon.color-acento-botones.p-4
          p.mb-0  En cualquiera de los casos se utiliza el golpe del agua con una superficie para disolver oxígeno presente en la atmósfera y aumentar el valor del parámetro. 

    .row.bg3-tema3.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Demanda Bioquímica de Oxígeno (DBO)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Hace referencia al contenido de materia orgánica que puede ser degradada por los microorganismos presentes en la muestra de agua en un lapso de 5 días con una incubación a 20°C de temperatura, periodo en el cual habrá una variación en el contenido de oxígeno disuelto, por lo que el resultado final se expresa en mgO2/L (Comisión Estatal del Agua de Jalisco (CEA , 2013). 

        p Cuando la DBO5 no disminuye a pesar de los tratamientos en la PTAP se deben revisar los procesos microbiológicos que esta pueda tener, lodos activados, humedales artificiales, biodiscos o cualquier otro. Inicialmente se debe revisar que los tiempos de retención se cumplan, en caso de que se cumplan los tiempos, pero la DBO no disminuya. Se debe revisar que los agentes biológicos se encuentren en las concentraciones óptimas para los procesos de degradación de materia orgánica. 

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img17.svg', alt='alt')      

    .row.bg3-tema3.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Demanda Química de Oxígeno (DQO)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img18.svg', alt='alt')       

      .col-lg-8
        p La estimación del grado de contaminación en el agua al igual que la DBO5, también puede determinarse a través de la DQO donde se establece el contenido de materia orgánica que puede ser oxidada por un compuesto químico #[i (Reutelshöfer, T., 2015)].

        p Hacer supervisión de la DQO es una de las labores más exhaustivas dentro de la PTAP debido a que cualquiera de los parámetros puede modificarla, por ejemplo, en dado caso que haya presencia de grasas la DQO aumenta, si hay sólidos en el agua la DQO aumenta, si hay presencia de otras sustancias como tensoactivos o metales también aumenta, esto conlleva a que se debe hacer una revisión general de toda la PTAP cuando se excede el valor del límite máximo permisible.


    .row.mb-5
      p A continuación, se pueden ver diferentes tipos de solidos que intervienen en las características físico químicas del agua.


    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img19.svg', alt='alt')

      .col-lg-8
        TabsA.color-acento-contenido
          .tarjeta.tarjeta--gris.p-4(titulo="Sólidos totales")
            p Los sólidos son las partículas responsables de las alteraciones en olor, color, sabor y turbiedad en el agua. Su naturaleza es tanto de tipo orgánico como inorgánico. Los sólidos totales persisten posterior a un proceso de secado a un rango de temperatura entre 103 a 105 °C. En los sólidos totales están presentes los sólidos suspendidos retenidos en un filtro de y los sólidos disueltos (CEA Jalisco, 2013. p.9)

          .tarjeta.tarjeta--gris.p-4(titulo="Sólidos sedimentables")
            p Son partículas sólidas responsables de la turbidez en el agua, las cuales se sedimentan en condiciones estáticas bajo un periodo de tiempo en recipientes, como el cono imhoff, para su determinación volumétrica. 

          .tarjeta.tarjeta--gris.p-4(titulo="Sólidos suspendidos")
            p Se consideran sólidos suspendidos a aquellos que quedan retenidos en un filtro, y cuyas características son principalmente de tipo orgánico. De acuerdo con el protocolo para la determinación de sólidos suspendidos totales en agua secados a 103-105 °C del Ideam (2007, p.2) dependiendo su tamaño pueden ser sedimentables (mayor a 0.01 mm) o no (menor a 0.01 mm)

          .tarjeta.tarjeta--gris.p-4(titulo="Sólidos disueltos")
            p Los sólidos disueltos son aquellos con naturaleza orgánica o inorgánica los cuales atraviesan el filtro con una porosidad cercana a 2µm o menos, debido a su tamaño (Comisión Estatal del Agua de Jalisco - CEA Jalisco, 2013. p.10) De acuerdo con el protocolo para la determinación de sólidos suspendidos totales en agua secados a 103-105 °C del Ideam (2007, p.2) son responsables del olor, sabor y color. 

          .tarjeta.tarjeta--gris.p-4(titulo="Sólidos volátiles")
            p La determinación de sólidos volátiles permite tener una aproximación al contenido de materia orgánica y se lleva a cabo por la diferencia de peso en sólidos totales, sólidos suspendidos o sólidos disueltos sometidos a temperaturas de secado y calcinación de 550°C en mufla. El remanente determinará el contenido de sólidos fijos, de naturaleza principalmente de tipo mineral (Valdez, E y Vázquez, A, 2003, p.28).

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img-descarga.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-3.texto-blanco Determinación de solidos totales, volatiles y fijos
                  p.texto-blanco.mb-4 Para conocer más, le invitamos a consultar el documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/anexos/DETERMINACIÓN_DE_SOLIDOS_TOTALES_VOLATILES_Y_FIJOS.pdf')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Nitritos y nitratos


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img20.svg', alt='alt')      

      .col-lg-5
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img21.svg', alt='alt')

    .row.mb-5
      p a materia orgánica con contenido proteico presente en los cuerpos de agua es degradada por los microorganismos en compuestos más sencillos como los nitritos y nitratos (Valdez, E y Vázquez, A. 2003. p.46). En el ciclo biogeoquímico el amoniaco se transforma a partir de las bacterias nitrificantes en nitritos (NO2) y nitratos (NO3) para ser asimilados por el sistema radicular de las plantas, así que es de gran importancia como nutriente especial de este tipo organismos fotosintéticos (Comisión Estatal del Agua de Jalisco. 2013. P.13) como algas y plantas acuáticas como la elodea (Egeria densa) buchón de agua (Eichornia crassipes) o lenteja de agua (Lemna minor) los cuales pueden estimular procesos de eutrofización (Figura 8) De acuerdo con la norma para calidad de agua potable la resolución 2115 (2007) el valor máximo aceptables es de 0.1 mg/L para nitritos (NO2) y 10 mg/L nitratos (NO3).

    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-adicional-2.mb-4
        h5 Figura 8.
        br
        span #[i Eutrofización por lenteja de agua..]

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img22.svg', alt='alt')

      .col-lg-8
        p Cuando se presenta exceso de nitritos y nitratos en el efluente del agua de la PTAP se debe hacer una revisión de las unidades de oxidación química, normalmente se utiliza ozono por la facilidad de aplicación, en ese caso se debe revisar que se esté produciendo la cantidad adecuada de reactivo. 

        p Cuando no se realiza la eliminación de nitritos y nitratos con ozono se utilizan otras técnicas tales como #[b adición de peróxido] para lo cual se debe verificar la concentración del reactivo y la cantidad agregada o en el caso que se realice fotocatálisis se debe realizar la supervisión general del sistema para evidenciar su correcto funcionamiento.  

    .row.mb-5
      p A continuación, se presenta un ejemplo de ensayo de determinación de nitritos y nitratos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img-descarga.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-3.texto-blanco Determinación de nitritos
                  p.texto-blanco.mb-4 Para conocer más, le invitamos a consultar el documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/anexos/DETERMINACIÓN_DE_NITRITOS.pdf')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

        .tarjeta.bgDescarga.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img-descarga.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-3.texto-blanco Guía de laboratorio nitratos
                  p.texto-blanco.mb-4 Para conocer más, le invitamos a consultar el documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/anexos/GUIA_DE_LABORATORIO_NITRATOS.pdf')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro


    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Fosfatos


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img23.svg', alt='alt')      

      .col-lg-5
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img24.svg', alt='alt')

    .row.mb-5
      p El fósforo se encuentra como fosfatos y al ser también un nutriente esencial para organismos fotosintéticos, puede estimular el crecimiento desmedido de este tipo de organismos generando condiciones de eutrofización en los cuerpos de agua (Comisión Estatal del Agua de Jalisco. 2013. P.13). De acuerdo con la norma para calidad de agua potable la resolución 2115 (2007) el valor máximo es 0.5 mg/L.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4
          p.mb-0 Los fosfatos normalmente se eliminan mediante el proceso de coagulación siempre y cuando el coagulante que se utiliza contenga aluminio, en esos casos se suele utilizar policloruro de aluminio, sulfato de aluminio, cloruro de aluminio, entre otros.

    
    .row.mb-5
      p De este modo, cuando hay presencia de fosfatos en el agua efluente de la PTAP se debe hacer test de jarra para validar la dosis óptima de coagulante hasta que los fosfatos obtengan una concentración inferior a la máxima permitida.

    .row.bg1-tema2.align-items-center.mb-5.mb-lg-0(data-aos="fade-right")
      h4.text-white.mt-2 Cloruros

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Son iones (Cl-) de carácter inorgánico tipo sal presentes en el agua y que en alto contenido pueden generar procesos de corrosión en las tuberías. Está asociada a características organolépticas que le confieren un sabor salado al agua por la presencia de cloruro de sodio (NaCl) (Comisión Estatal del Agua de Jalisco. 2013. p.21) De acuerdo con la norma para calidad de agua potable la resolución 2115 (2007) el valor máximo es 250 mg/L.

        .cajon.color-acento-botones.p-4.mb-3
          p.mb-0 Cuando el agua a la salida de la PTAP supera el límite máximo permisible de cloruros se debe hacer una revisión a los equipos de intercambio iónico, ósmosis inversa o ablandamiento que son las etapas con las que se suele tratar este parámetro.

      .col-10.col-lg-4.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img25.svg', alt='alt')

      p A continuación, se presenta un ejemplo de ensayo de determinación de cloruros en agua:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img-descarga.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-3.texto-blanco Determinación de cloruros en agua
                  p.texto-blanco.mb-4 Para conocer más, le invitamos a consultar el documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/anexos/DETERMINACIÓN_DE_CLORUROS_EN_AGUA.pdf')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Sulfatos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img26.svg', alt='alt')      


    .row.justify-content-center.align-items-center.mb-5
      p Pueden estar presentes en los cuerpos de agua por procesos de mineralización. Algunos compuestos son sulfato de magnesio (MgSO4) sulfato de sodio (Na2SO4) y sulfato de calcio (CaSO4) El exceso de este tipo de sulfatos puede generar problemas de corrosión en las tuberías y si sobrepasa los valores máximos admisibles según la norma para calidad de agua potable que en Colombia está en 250 mg/L según la resolución 2115 (2007) puede generar un sabor amargo. Por encima de 400 mg/L podría afectar la salud de la población con síntomas como la diarrea y deshidratación (CEA, 2013).

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-azul.p-4
        .row.justify-content-center.align-items-center
          .col-4.col-lg-2
            figure.mb-3
              img(src='@/assets/curso/temas/tema3/img27.svg', alt='alt').img12-tm2
          
          .col-lg-10
            p.mb-0 La eliminación de sulfatos se realiza a través de las etapas de intercambio iónico, ósmosis inversa o ablandamiento si el agua efluente de la PTAP supera el límite máximo permisible de este parámetro se debe hacer la revisión a las etapas anteriormente mencionadas. 

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.align-items-center
          .col-5.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema3/img28.svg', alt='alt').img12-tm2
          
          .col-lg-10
            b Sulfatos en agua por el método nefelométrico
            p.mb-0 Para estudiar un ejemplo de ensayo de determinación de sulfatos en agua, visite en el material dando click en el botón.


    separador
    #t_3_2.titulo-segundo.color-acento-botones
       h2 3.2 Ensayo de jarras


    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img29.svg')})`}"
        )
        .bloque-texto-g1__texto.p-4
          p.mb-0 El ensayo de jarras define las condiciones de tratabilidad y la dosis óptima de coagulante que se debe utilizar en un tratamiento de aguas. A continuación, se presenta un video que nos introduce a los procedimientos en el ensayo de jarras o ensayo de tratabilidad. 


    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="flip-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    separador
    #t_3_3.titulo-segundo.color-acento-botones
       h2 3.3 Métodos estandarizados para parámetros físicos, químicos y microbiológicos

    .row.justify-content-center.align-items-center.mb-5
      p De acuerdo con el procedimiento para la estandarización de métodos analíticos en el laboratorio en relación con parámetros fisicoquímicos y microbiológicos, el Ideam (2006) en su documento estandarización de métodos analíticos define algunos valores que permiten criterios de confianza como exactitud, precisión, linealidad, límite de detección, sensibilidad, y porcentaje de recuperación. A continuación, se hace referencia a cada uno de ellos:

    .row.justify-content-center.align-items-center.mb-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row.p-4(titulo="1. Exactitud:")
          .col-md-7.mb-4.mb-md-0
            p proximidad entre el valor medio obtenido de un conjunto de resultados y el valor de referencia aceptado.
        
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/img30.svg', alt='alt')

        .row.p-4(titulo="2. Precisión:")
          .col-md-7.mb-4.mb-md-0
            p indica el grado de concordancia entre los resultados obtenidos para réplicas de una misma muestra, aplicando igual procedimiento experimental bajo condiciones prefijadas.
        
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/img31.svg', alt='alt')

        .row.p-4(titulo="3. Linealidad:")
          .col-md-7.mb-4.mb-md-0
            p se refiere a la proporcionalidad entre la concentración y la señal producida por el instrumento. Se debe verificar si en el laboratorio se cumple el intervalo y tipo de linealidad que reporta la literatura del método.
        
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/img32.svg', alt='alt')

        .row.p-4(titulo="4. Límite de detección:")
          .col-md-7.mb-4.mb-md-0
            p concentración mínima que puede ser medida con una exactitud y una precisión aceptables.
        
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/img33.svg', alt='alt')

        .row.p-4(titulo="5. Sensibilidad:")
          .col-md-7.mb-4.mb-md-0
            p es una medida del factor de respuesta del instrumento como una función de la concentración. Normalmente se mide como la pendiente de la curva de calibración.
        
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/img34.svg', alt='alt')

        .row.p-4(titulo="6. Porcentaje de recuperación:")
          .col-md-7.mb-4.mb-md-0
            p es la capacidad que tiene un procedimiento analítico para determinar cuantitativamente una especie química que ha sido adicionada a una muestra.
        
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/img35.svg', alt='alt')


    .row.mb-5
      p La estandarización de un método analítico de acuerdo con el Ideam (2006) permite demostrar que una serie de procedimientos para análisis químico, físico o microbiológico son adecuados. Las etapas para poder determinarlo son:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li
            i.fas.fa-check-circle
            | Documentación y montaje de la metodología. 
          li
            i.fas.fa-check-circle
            | Revalidación experimental.
          li
            i.fas.fa-check-circle
            | Validación experimental.

      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img36.svg', alt='alt')


    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img-descarga.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-3.texto-blanco Estandarización métodos analíticos del IDEAM
                  p.texto-blanco.mb-4 Para conocer más, le invitamos a consultar el documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/anexos/Estandarizacion_metodos_analaticos.pdf')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

    separador
    #t_3_4.titulo-segundo.color-acento-botones
       h2 3.4 Preparación de muestras, procedimientos y mediciones

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img37.svg', alt='alt')
      
      .col-lg-7
        p Las muestras una vez llegan al laboratorio debidamente etiquetadas (rotuladas) con información de referencia como: localización, fuente, fecha, hora, nombre del responsable de la recolección de la muestra, entre otros aspectos importantes a señalar (OPS y Cepis. 2002. p.666) son procesadas bajo los protocolos y métodos estandarizados de parámetros fisicoquímicos y microbiológicos a analizar. 

        p De acuerdo con el manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio del INS (2011) la temperatura apropiada de preservación es 4 °C por lo que es necesario mantenerlas refrigeradas durante su recolección y transporte, así como en su llegada al laboratorio encargado de realizar dicho análisis, con el fin de evitar algún tipo de alteración. 

        .cajon.color-acento-botones.p-4.mb-3
          p.mb-0 También se recomienda no exceder el tiempo de espera para el análisis desde su llegada, el cual se prefiere sea inmediato o máximo 2 horas después de su recepción (INS, 2011)

        p Una vez obtenidas las muestras en campo, estas son procesadas en el laboratorio o con los equipos de campo, bajo unos métodos estandarizados. 


    separador
    #t_3_5.titulo-segundo.color-acento-botones
       h2 3.5 Curva de calibración

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Cuando se quiere realizar una medición normalmente se utilizan equipos que hacen una comparación entre la muestra que se desea analizar con unos patrones establecidos para cada parámetro. Por ejemplo, cuando se quiere medir la #[b concentración de metales] se puede utilizar un equipo conocido como 
          spam.texto-azul #[b espectrofotómetro]  
          |  el cual mide la #[b absorbancia] de las muestras que se analicen en él.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img38.svg', alt='alt')

    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-adicional-2.mb-4
        h5 Tabla 3.
        br
        span #[i Concentración de acuerdo con la absorbancia.]

      .col-lg-4
        .tabla-a.color-adicional-2.mb-3
          table
            thead
              tr.texto-blanco.color-tabla
                th(style="width:20%") Concentración (mg/L)
                th(style="width:20%") Absorbancia
            tbody
              tr
                td.text-center 0,1
                td.text-center 0,04
              <tr style="background-color: #F6F6F6">
                td.text-center 0,2
                td.text-center 0,08
              </tr>
                
              tr
                td.text-center 0,3
                td.text-center 0,12
              <tr style="background-color: #F6F6F6">
                td.text-center 0,4
                td.text-center 0,16
              </tr>
                
              tr
                td.text-center 0,5
                td.text-center 0,2
              <tr style="background-color: #F6F6F6">
                td.text-center 0,6
                td.text-center 0,
              </tr>
                
              tr
                td.text-center 0,7
                td.text-center 0,28
              <tr style="background-color: #F6F6F6">
                td.text-center 0,8
                td.text-center 0,32
              </tr>
                
              tr
                td.text-center 0,9
                td.text-center 0,36
              <tr style="background-color: #F6F6F6">
                td.text-center 1
                td.text-center 0,4
              </tr>
                


      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema3/img39.svg', alt='alt')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11.mb-3
        .tarjeta-avatar-b.mb-0
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img40.svg' alt='AvatarTop')
          .tarjeta.tarjeta-azul1
            .row 
              .col-lg-10
                .p-4
                  p Se debe establecer la ecuación de esa línea que se forma y el coeficiente de correlación lineal (R2) que preferiblemente debe ser superior a 0,99, para este caso la ecuación es:

                  .tarjeta-amarilla2.p-2
                    i.mb-0 Concentracion = 0,4 x Absorbancia

        .tarjeta-avatar-b.mb-0
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img40.svg' alt='AvatarTop')
          .tarjeta.tarjeta-azul2
            .row
              .col-lg-10
                .p-4
                  p Una vez se conoce el coeficiente de correlación y la ecuación de la curva de calibración se pone la muestra problema en el equipo, a esta muestra no se le conoce la concentración de metal, se mide la absorbancia:

                  .tarjeta-amarilla2.p-2
                    i.mb-0 Absorbancia = 0,18

        .tarjeta-avatar-b.mb-0
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img40.svg' alt='AvatarTop')
          .tarjeta.tarjeta-azul1
            .row
              .col-lg-10
                .p-4
                  p Entonces se reemplaza este valor en la ecuación:

                  .tarjeta-amarilla2.p-2
                    i.mb-0 Concentracion = 0,4 x Absorbancia
                    i.mb-0 Concentracion = 0,4 x 0,18 
                    i.mb-0 Concentracion = 0,072 𝑚𝑔/L


      .col-6.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema3/img41.svg', alt='alt').img41-tm3

    .row.mb-5
      p Algunos métodos de medición se describen a continuación, para conocer las propiedades que se miden a partir de una curva de calibración.

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--azul.p-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              h4 Conductividad
              p La capacidad para #[b conducir corriente eléctrica] se debe a la presencia de iones en una solución y su determinación es la 
                spam.texto-azul conductancia 
                | equivalente a la resistencia. El patrón de referencia es una solución estándar de KCl al 0.0100 M para conductividad en el agua y se expresa como microsiemens/cm. Se recomienda la lectura #[i in situ], y es aplicable a fuentes superficiales, agua residual, agua subterránea y mediciones de agua para consumo humano (INS, 2011. pp. 45 - 46)

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img42.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              h4 Turbiedad
              p La determinación de la turbiedad en las muestras se realiza a partir del método #[b nefelométrico] basado en la #[b dispersión de luz] por comparación con el polímero de formazina utilizado como referencia. La presencia de burbujas de aire, así como una celda deteriorada pueden afectar la veracidad de los resultados arrojados. Dentro de los procedimientos para el análisis de estos parámetros en muestras de agua, se recomienda una preservación a 4 °C y medición máximo 48 horas después de su recolección. La verificación y calibración del equipo previo a la medición del parámetro en la muestra debe realizarse conforme a las especificaciones dadas por el fabricante (INS, 2011. pp. 50 - 52)

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img43.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              h4 pH
              p El principio es #[b electrométrico] y consiste en determinar a través de medidas potencio métricas por medio de un #[b electrodo] la actividad de los #[b iones de hidrógeno] con otro electrodo de referencia. Se recomienda realizar la lectura en el lugar del muestreo #[i (in situ)] y también verificar la curva de calibración cada 3 meses para el mantenimiento del electrodo de acuerdo con las especificaciones técnicas otorgadas por el fabricante, así como la determinación del parámetro para la muestra recolectada una vez se haya realizado la determinación para las soluciones de referencia o estándar de pH 4, pH 7 y pH 10 respectivamente (INS, 2011. pp.40 - 43)

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img44.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.align-items-center
          .col-5.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema3/img28.svg', alt='alt').img12-tm2
          
          .col-lg-10
            b Turbiedad por nefelometría en el equipo turbiquant 3000T
            p.mb-0 Para un ejemplo de una práctica estandarizada, visite en el material dando click en el botón.

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.align-items-center
          .col-5.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema3/img28.svg', alt='alt').img12-tm2
          
          .col-lg-10
            b Conductividad eléctrica por el método electrométrico en aguas
            p.mb-0 Para analizar un ejemplo de ensayo en conductividad que podría ser usado como práctica, visite en el material dando click en el botón.

    .row.mb-5
      p A continuación, se presenta un ejemplo de ensayo en potenciometría que podría ser usado como práctica:


    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img-descarga.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-3.texto-blanco Determinación de potenciometria
                  p.texto-blanco.mb-4 Para conocer más, le invitamos a consultar el documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/anexos/DETERMINACIÓN_DE_POTENCIOMETRIA.pdf')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Color aparente

    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img45.svg')})`}"
        )
        .bloque-texto-g1__texto.p-4
          p.mb-0 El color aparente está relacionado con las partículas en suspensión de una muestra sin filtración o centrifugación. El método de determinación es 
          spam.texto-azul platino-cobalto, 
          | el cual toma como unidad de color la producida por un miligramo de platino en un litro de agua como ion #[b cloro platinato.] Se aconseja una determinación de este parámetro in situ, de lo contrario, se debe recolectar la muestra en un #[b envase ámbar y refrigerado a 4 °C] (INS, 2011. pp. 69-71).

    .row.mb-5
      p Las muestras también son procesadas y analizadas a partir de un análisis colorimétrico. Existen celdas de cuarzo, poliméricas o de vidrio, las cuales no pueden usarse de manera indistinta. El buen estado de estas permite una lectura correcta (INS, 2011. p. 30) por lo cual se recomienda descartar si están rayadas.








</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
