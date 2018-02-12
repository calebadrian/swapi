function SwapiService() {

    var next = ''
    var prev = ''

    this.getData = function getData(cb, str) {
        if (typeof cb != 'function') {
            return console.log(cb, 'is not a cb')
        }
        $.get('https://swapi.co/api/' + str)
            .then(function (res) {
                prev = res.previous
                prev == null ? $('#prev-btn').prop("disabled", true) : $('#prev-btn').prop("disabled", false)
                next = res.next
                next == null ? $('#next-btn').prop("disabled", true) : $('#next-btn').prop("disabled", false)
                cb(res.results)
            })

    }

    this.getNext = function getNext(cb) {
        if (typeof cb != 'function') {
            return console.log(cb, 'is not a cb')
        }
        $.get(`${next}`)
            .then(function (res) {
                prev = res.previous
                prev == null ? $('#prev-btn').prop("disabled", true) : $('#prev-btn').prop("disabled", false)
                next = res.next
                next == null ? $('#next-btn').prop("disabled", true) : $('#next-btn').prop("disabled", false)
                cb(res.results)
            })
    }

    this.getPrev = function getPrev(cb) {
        if (typeof cb != 'function') {
            return console.log(cb, 'is not a cb')
        }
        $.get(`${prev}`)
            .then(function (res) {
                prev = res.previous
                prev == null ? $('#prev-btn').prop("disabled", true) : $('#prev-btn').prop("disabled", false)
                next = res.next
                next == null ? $('#next-btn').prop("disabled", true) : $('#next-btn').prop("disabled", false)
                cb(res.results)
            })
    }

    this.getPlanet = function getPlanet(homeworldUrl, cb, id) {
        if (typeof cb != 'function') {
            return console.log(cb, 'is not a cb')
        }
        $.get(homeworldUrl)
            .then(function (res) {
                cb(res.name, id)
            })
    }

   
}