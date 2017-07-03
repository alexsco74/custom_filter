(function ($) {

    Drupal.behaviors.customFilter = {
        attach: function (context, settings) {

            // popup content
            $('.custom-filter-processed-popup').once('custom-filter-processed-popup', function () {
                    var thisElement = $(this);
                    var thisContentId = thisElement.attr('data-popup-id');
                    var thisContentTitle = thisElement.attr('data-popup-title');
                    var thisWidth = 'auto';
                    var posMy = 'center';
                    var posAt = 'center';

                    if (thisElement.attr('data-popup-width') != undefined) {
                        thisWidth = thisElement.attr('data-popup-width');
                    }
                    if (thisElement.attr('data-popup-my') != undefined) {
                        posMy = thisElement.attr('data-popup-my');
                    }
                    if (thisElement.attr('data-popup-at') != undefined) {
                        posAt = thisElement.attr('data-popup-at');
                    }
                    if ($('#' + thisContentId) != undefined) {
                        //var dialogWr = $('<div title="' + thisContentTitle + '" class="custom-filter-dialog-wr">');
                        var dialogWr = $('#' + thisContentId);
                        dialogWr.addClass('custom-filter-dialog-wr').attr('title', thisContentTitle);
                        dialogWr.dialog({
                            'autoOpen': false,
                            'modal': true,
                            'width': thisWidth,
                            'draggable': false,
                            'resizable': false,
                            'dialogClass': 'custom-filter-ui-dialog',
                            'closeText': 'Закрыть',
                            'position': {my: posMy, at: posAt, of: window}
                        });

                        $(document).on('click', '.ui-widget-overlay', function () {
                            if (dialogWr.dialog('isOpen')) {
                                dialogWr.dialog('close');
                            }
                        });
                        $(document).on('click', '.custom-filter-close-button-link', function () {
                            if (dialogWr.dialog('isOpen')) {
                                dialogWr.dialog('close');
                            }
                        });
                        $(window).resize(function () {
                            if (dialogWr.dialog('isOpen')) {
                                dialogWr.dialog('close').dialog('open');
                            }
                        });

                        thisElement.bind('click', function (e) {
                            if ($('#' + thisContentId) != undefined) {
                                e.preventDefault();
                                //  dialogWr.html($('#' + thisContentId).html());
                                dialogWr.dialog('open');
                            }
                        });
                    }
                }
            );
        }
    };
})(jQuery);