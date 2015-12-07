$('#myAffix').affix({
  offset: {
    top: 100,
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
})

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})