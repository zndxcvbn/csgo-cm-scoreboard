export default function CSAdaptiveFontSize(scoreboardHeight: number, fontSize: number) {
    const sizeZoom: object = {
        372: 0.44444,
        465: 0.55555,
        595: 0.71111,
        558: 0.66666,
        793: 0.94814,
        697: 0.83333,
        813: 0.97222,
    }
    sizeZoom[scoreboardHeight] ?? fontSize + 'px'
    return fontSize * sizeZoom[scoreboardHeight] + 'px'
}