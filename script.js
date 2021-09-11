$('.page-scroll').on('click', function() {
	let tujuan = $(this).attr('href');
	let elTujuan = $(tujuan);

	$('body').scrollTop(elTujuan.offset().top);

});