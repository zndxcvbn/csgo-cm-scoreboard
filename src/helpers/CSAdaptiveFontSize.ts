export default function CSAdaptiveFontSize(scoreboardHeight: number, fontSize: number) {
    switch(scoreboardHeight) {
        case 372:
            return fontSize * 0.44444 + 'px'

        case 465:
            return fontSize * 0.55555 + 'px'

        case 595:
            return fontSize * 0.71111 + 'px'

        case 558:
            return fontSize * 0.66666 + 'px'

        case 793:
            return fontSize * 0.94814 + 'px'

        case 697:
            return fontSize * 0.83333 + 'px'

        case 813:
            return fontSize * 0.97222 + 'px'

        default:
            return fontSize + 'px'
    }
}