# Blackjack Game

¡Bienvenido a nuestro juego de Blackjack! Este README proporciona una visión general del proyecto, instrucciones para la instalación y el uso, así como detalles sobre las reglas del juego.

## Descripción

Este proyecto es una implementación del clásico juego de cartas Blackjack, también conocido como 21, utilizando JavaScript. El objetivo del juego es vencer al crupier consiguiendo una mano con un valor total lo más cercano posible a 21, sin pasarse.

## Características

- Interfaz web interactiva y fácil de usar.
- Lógica del juego completamente implementada, incluyendo las reglas del crupier.
- Soporte para múltiples partidas consecutivas.
- Indicadores visuales de victoria, derrota y empate.

## Requisitos del Sistema

- Navegador web moderno (Chrome, Firefox, Edge, Safari)

## Instalación

1. Clona este repositorio en tu máquina local:
    ```sh
    git clone https://github.com/pabloivan08/blackJack.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd blackjack
    ```

3. Abre el archivo `index.html` en tu navegador web preferido.

## Uso

Para jugar al Blackjack, simplemente abre el archivo `index.html` en tu navegador. Algunas de las acciones que puedes realizar durante el juego incluyen:

- **Hit**: Pedir una carta adicional.
- **Stand**: Mantener tu mano actual y finalizar tu turno.
- **Reset**: Reiniciar el juego para comenzar una nueva partida.

## Reglas del Juego

1. **Objetivo**: Lograr una mano cuyo valor sea lo más cercano posible a 21 sin pasarse.
2. **Valores de las Cartas**:
    - Las cartas numéricas (2-10) valen su valor nominal.
    - Las cartas con figuras (J, Q, K) valen 10.
    - El As puede valer 1 o 11, dependiendo de cuál valor beneficie más a la mano.
3. **Jugabilidad**:
    - El jugador comienza con dos cartas visibles.
    - El crupier también recibe dos cartas, pero solo una es visible.
    - El jugador puede optar por `hit` para recibir cartas adicionales o `stand` para mantener su mano actual.
    - Si el jugador supera 21, pierde automáticamente (bust).
    - Después de que el jugador termine su turno, el crupier juega su mano. El crupier debe seguir ciertas reglas: `hit` hasta que su mano sea de al menos 17.
4. **Resultados**:
    - Si el jugador consigue 21 con sus dos primeras cartas (Blackjack) y el crupier no, el jugador gana automáticamente.
    - Si el jugador se pasa de 21, pierde.
    - Si el crupier se pasa de 21, el jugador gana.
    - Si ni el jugador ni el crupier se pasan, la mano con el valor más cercano a 21 gana.
    - Si el jugador y el crupier tienen el mismo valor de mano, es un empate (push).

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con una descripción clara de tu característica o corrección de errores (`git checkout -b mi-rama-de-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva característica'`).
4. Envía un push a la rama (`git push origin mi-rama-de-caracteristica`).
5. Crea un nuevo Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

## Contacto

Para cualquier pregunta o comentario, por favor contacta a [tu-email@dominio.com](mailto:tu-email@dominio.com).

---

¡Gracias por jugar a nuestro Blackjack! ¡Que tengas suerte y disfrutes del juego!