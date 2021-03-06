module.exports = function (parsers) {
    parsers.all.object = function ($buffer, $start) {
        let $sip = []

        const object = {
            value: 0
        }

        $sip[0] = $buffer[$start++]

        if ((sip => sip < 251)($sip[0], object)) {
            object.value = (sip => sip)($sip[0])
        } else if ((sip => sip == 0xfc)($sip[0], object)) {
            object.value =
                $buffer[$start++] * 0x100 +
                $buffer[$start++]
        }

        return object
    }
}
