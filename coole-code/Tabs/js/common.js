$(document).ready(function(){
	$('.tabs__control-link').on('click', function(){
		var item = $(this).closest('.tabs__controls-item'),
		contentItem = $('.tabs__list-item'),	
		itemPosition = item.index();
		contentItem.eq(itemPosition)
		.addClass('active')
		.siblings()
		.removeClass('active');
	});
});