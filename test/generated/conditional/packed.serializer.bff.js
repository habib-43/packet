module.exports = function (serializers) {
    serializers.bff.object = function (object) {
        return function ($buffer, $start, $end) {
            let $_

            if ($end - $start < 1) {
                return {
                    start: $start,
                    serialize: serializers.inc.object(object, 0, [])
                }
            }

            $_ =
                (object.header.flag << 6 & 0xc0)

            if (($ => $.header.flag == 0)(object)) {
                $_ |=
                    (object.header.value & 0x3f)
            } else if (($ => $.header.flag == 1)(object)) {
                $_ |=
                    (0xa << 2 & 0x3c) |
                    (object.header.value & 0x3)
            } else if (($ => $.header.flag == 2)(object)) {
                $_ |=
                    (object.header.value.two << 4 & 0x30) |
                    (object.header.value.four & 0xf)
            }

            $buffer[$start++] = $_ & 0xff

            return { start: $start, serialize: null }
        }
    }
}
