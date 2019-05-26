// Css Classes
$('input').focus(function() {
    $('.wrapper').addClass('active')
})

$('input').blur(function() {
    $('.wrapper').removeClass('active')
})

// Events

$('button').click(() => {
    $('.text').html('')
    requestData()
    $('input').val('')
})

$('input').keydown((e) => {
    if (e.which === 13) {
        $('.text').html('')
        requestData()
        $('.wrapper').removeClass('active')
        $('input').val('')
    }
})

// AJAX )

function requestData() {
    let itemsNum = parseInt($('input').val()) || 1

    const proxy = 'https://cors-anywhere.herokuapp.com/'
    $.getJSON(`${proxy}http://www.filltext.com/?rows=${itemsNum}&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true`, (data, b , c ) => {

        console.log(c)
        console.log('//////////////')
        console.log(b)
        console.log('//////////////')
        console.log(data)

        data.forEach((item, index) => {
            $('.text').append('<p>' + '<span class="name">' + item.fname + '</span>' + ' lives at ' + item.address + ' ' + '<span class="zip">' + item.zip + '</span>' + '</p>')

            if (index % 2 !== 0) {
                $($('p')[index]).css('background-color', 'rgba(134, 70, 236, 0.18)')
            }
        })
    })
}