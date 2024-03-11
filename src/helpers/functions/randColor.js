
const RandomColor = () => {
    const randColor = Math.floor(Math.random() * (16777216 + 1));
    const colorToHex = randColor.toString(16)
    return colorToHex;
}

export default RandomColor
