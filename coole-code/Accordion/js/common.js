$(document).ready(function(){
	$('.accordion__category-link').on('click', function(){
		var $this = $(this),
			item = $this.closest('.accordion__category'),
			list = $this.closest('.menu'),
			items = list.find('.accordion__category'),
			content = item.find('.submenu'),
			otherContent = list.find('.submenu'),
			duration = 300;

		if(!item.hasClass('active')){
			items.removeClass('active');
			item.addClass('active');
			otherContent.stop(true,true).slideUp(duration);
			content.stop(true,true).slideDown(duration);
		}
		else{
			content.stop(true,true).slideUp(duration);
			item.removeClass('active');
		}
	});
});