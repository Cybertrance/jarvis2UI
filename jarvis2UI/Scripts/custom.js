/**
 * Resize function without multiple trigger
 *
 * Usage:
 * $(window).smartresize(function(){
 *     // code here
 * });
 */
(function ($, sr) {
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this, args = arguments;
            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    // smartresize
    jQuery.fn[sr] = function (fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
})(jQuery, 'smartresize');
/**
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
    $BODY = $('body'),
    $MENU_TOGGLE = $('#menu_toggle'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $SIDEBAR_FOOTER = $('.sidebar-footer'),
    $LEFT_COL = $('.left_col'),
    $RIGHT_COL = $('.right_col'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');

// Add Tickets Modal
$(document).ready(function () {
    $('#addTicketBtn').on('click', function () {
        $('#addTicketModal').click()
    });
});

// Sidebar
function init_sidebar() {
    // TODO: This is some kind of easy fix, maybe we can improve this
    var setContentHeight = function () {
        // reset height
        $RIGHT_COL.css('min-height', $(window).height());

        var bodyHeight = $BODY.outerHeight(),
            footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
            leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
            contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

        // normalize content
        contentHeight -= $NAV_MENU.height() + footerHeight;

        $RIGHT_COL.css('min-height', contentHeight);
    };

    $SIDEBAR_MENU.find('a').on('click', function (ev) {
        console.log('clicked - sidebar_menu');
        var $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function () {
                setContentHeight();
            });
        } else {
            // prevent closing menu if we are on child menu
            if (!$li.parent().is('.child_menu')) {
                $SIDEBAR_MENU.find('li').removeClass('active active-sm');
                $SIDEBAR_MENU.find('li ul').slideUp();
            } else {
                if ($BODY.is(".nav-sm")) {
                    $li.parent().find("li").removeClass("active active-sm");
                    $li.parent().find("li ul").slideUp();
                }
            }
            $li.addClass('active');

            $('ul:first', $li).slideDown(function () {
                setContentHeight();
            });
        }
    });

    // toggle small or large menu
    $MENU_TOGGLE.on('click', function () {
        console.log('clicked - menu toggle');

        if ($BODY.hasClass('nav-md')) {
            $SIDEBAR_MENU.find('li.active ul').hide();
            $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
        } else {
            $SIDEBAR_MENU.find('li.active-sm ul').show();
            $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
        }

        $BODY.toggleClass('nav-md nav-sm');

        setContentHeight();

        $('.dataTable').each(function () { $(this).dataTable().fnDraw(); });
    });

    // check active menu
    $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

    $SIDEBAR_MENU.find('a').filter(function () {
        return this.href == CURRENT_URL;
    }).parent('li').addClass('current-page').parents('ul').slideDown(function () {
        setContentHeight();
    }).parent().addClass('active');

    // recompute content when resizing
    $(window).smartresize(function () {
        setContentHeight();
    });

    setContentHeight();

    // fixed sidebar
    if ($.fn.mCustomScrollbar) {
        $('.menu_fixed').mCustomScrollbar({
            autoHideScrollbar: true,
            theme: 'minimal',
            mouseWheel: { preventDefault: true }
        });
    }
};
// /Sidebar

var randNum = function () {
    return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
};

// Panel toolbox
$(document).ready(function () {
    $('.collapse-link').on('click', function () {
        var $BOX_PANEL = $(this).closest('.x_panel'),
            $ICON = $(this).find('i'),
            $BOX_CONTENT = $BOX_PANEL.find('.x_content');

        // fix for some div with hardcoded fix class
        if ($BOX_PANEL.attr('style')) {
            $BOX_CONTENT.slideToggle(200, function () {
                $BOX_PANEL.removeAttr('style');
            });
        } else {
            $BOX_CONTENT.slideToggle(200);
            $BOX_PANEL.css('height', 'auto');
        }

        $ICON.toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('.close-link').click(function () {
        var $BOX_PANEL = $(this).closest('.x_panel');

        $BOX_PANEL.remove();
    });
});
// /Panel toolbox

// Progressbar
if ($(".progress .progress-bar")[0]) {
    $('.progress .progress-bar').progressbar();
}
// /Progressbar

// Switchery
$(document).ready(function () {
    if ($(".js-switch")[0]) {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        elems.forEach(function (html) {
            var switchery = new Switchery(html, {
                color: '#26B99A'
            });
        });
    }
});
// /Switchery

// iCheck
$(document).ready(function () {
    if ($("input.flat")[0]) {
        $(document).ready(function () {
            $('input.flat').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });
        });
    }
});
// /iCheck

// Table
$('table input').on('ifChecked', function () {
    checkState = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('table input').on('ifUnchecked', function () {
    checkState = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});

var checkState = '';

$('.bulk_action input').on('ifChecked', function () {
    checkState = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('.bulk_action input').on('ifUnchecked', function () {
    checkState = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});
$('.bulk_action input#check-all').on('ifChecked', function () {
    checkState = 'all';
    countChecked();
});
$('.bulk_action input#check-all').on('ifUnchecked', function () {
    checkState = 'none';
    countChecked();
});

function countChecked() {
    if (checkState === 'all') {
        $(".bulk_action input[name='table_records']").iCheck('check');
    }
    if (checkState === 'none') {
        $(".bulk_action input[name='table_records']").iCheck('uncheck');
    }

    var checkCount = $(".bulk_action input[name='table_records']:checked").length;

    if (checkCount) {
        $('.column-title').hide();
        $('.bulk-actions').show();
        $('.action-cnt').html(checkCount + ' Records Selected');
    } else {
        $('.column-title').show();
        $('.bulk-actions').hide();
    }
}

// Accordion
$(document).ready(function () {
    $(".expand").on("click", function () {
        $(this).next().slideToggle(200);
        $expand = $(this).find(">:first-child");

        if ($expand.text() == "+") {
            $expand.text("-");
        } else {
            $expand.text("+");
        }
    });
});

// NProgress
if (typeof NProgress != 'undefined') {
    $(document).ready(function () {
        NProgress.start();
    });

    $(window).load(function () {
        NProgress.done();
    });
}

function gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
}

function init_flot_chart() {
    if (typeof ($.plot) === 'undefined') { return; }

    console.log('init_flot_chart');

    if ($("#chart_plot_01").length) {
        new PNotify({
            title: 'Please Wait',
            text: 'Processing data for ticket volume prediction',

            styling: 'bootstrap3',
            delay: 2000
        });
    }

    $.ajax({
        //url: "http://127.0.0.1:9898/Jarvis_2_0/v1.0/getPredictions/volume",
        //url: "http://0.0.0.0:9898/Jarvis_2_0/v1.0/getPredictions/volume",
        url: "http://ec2-52-207-240-53.compute-1.amazonaws.com:9898/Jarvis_2_0/v1.0/getPredictions/volume",
        type: 'GET',
        contentType: "application/json",
        success: function (dataObj) {
            var arr_data2 = [];

            var stringObj = JSON.stringify(dataObj);
            stringObj.replace('*', '');
            var parsedDataObj = JSON.parse(stringObj);

            for (i = 0; i < parsedDataObj.length; i++) {
                arr_data2.push([new Date(parsedDataObj[i]["Date"]).getTime(), parsedDataObj[i]["Volume"]]);
            }

            // Hardcoded data
            var arr_data1 = [
                [gd(2017, 6, 17), 269],
                [gd(2017, 7, 17), 286],
                [gd(2017, 8, 17), 314],
                [gd(2017, 9, 17), 282],
                [gd(2017, 10, 17), 298],
                [gd(2017, 11, 17), 268],
                [gd(2017, 12, 17), 206],
                [gd(2018, 1, 17), 275],
                [gd(2018, 2, 17), 270],
                [gd(2018, 3, 17), 238],
                [gd(2018, 4, 17), 241],
                [gd(2018, 5, 17), 245],
                [gd(2018, 6, 17), 240],
                [gd(2018, 7, 31), 201]
                //[gd(2018, 7, 31), 195]

            ];

            var chart_plot_01_settings = {
                series: {
                    lines: {
                        show: false,
                        fill: true
                    },
                    splines: {
                        show: true,
                        tension: 0.4,
                        lineWidth: 1,
                        fill: 0.4
                    },
                    points: {
                        radius: 0,
                        show: true
                    },
                    shadowSize: 2
                },
                grid: {
                    verticalLines: true,
                    hoverable: true,
                    clickable: true,
                    tickColor: "#d5d5d5",
                    borderWidth: 1,
                    color: '#fff'
                },
                colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
                xaxis: {
                    tickColor: "rgba(51, 51, 51, 0.06)",
                    mode: "time",
                    ticks: 12,
                    tickSize: [1, "month"],
                    tickLength: 1,
                    axisLabel: "Month",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 10
                },
                yaxis: {
                    ticks: 8,
                    tickColor: "rgba(51, 51, 51, 0.06)",
                },
                tooltip: false
            }

            if ($("#chart_plot_01").length) {
                console.log('Plot1');

                $.plot($("#chart_plot_01"), [arr_data1, arr_data2], chart_plot_01_settings);

                new PNotify({
                    title: 'Ticket Volume Forecast Available!',

                    type: 'success',
                    styling: 'bootstrap3',
                    delay: 2000
                });
            }
        }
        //error: OnFail
    });
}

function init_chart_doughnut() {
    if (typeof (Chart) === 'undefined') { return; }

    console.log('init_chart_doughnut');

    if ($('.canvasDoughnut').length) {
        var chart_doughnut_settings = {
            type: 'doughnut',
            tooltipFillColor: "rgba(51, 51, 51, 0.55)",
            data: {
                labels: [
                    "Symbian",
                    "Blackberry",
                    "Other",
                    "Android",
                    "IOS"
                ],
                datasets: [{
                    data: [15, 20, 30, 10, 30],
                    backgroundColor: [
                        "#BDC3C7",
                        "#9B59B6",
                        "#E74C3C",
                        "#26B99A",
                        "#3498DB"
                    ],
                    hoverBackgroundColor: [
                        "#CFD4D8",
                        "#B370CF",
                        "#E95E4F",
                        "#36CAAB",
                        "#49A9EA"
                    ]
                }]
            },
            options: {
                legend: false,
                responsive: false
            }
        }

        $('.canvasDoughnut').each(function () {
            var chart_element = $(this);
            var chart_doughnut = new Chart(chart_element, chart_doughnut_settings);
        });
    }
}

/* AUTOSIZE */

function init_autosize() {
    if (typeof $.fn.autosize !== 'undefined') {
        autosize($('.resizable_textarea'));
    }
};

/* PARSLEY */

function init_parsley() {
    if (typeof (parsley) === 'undefined') { return; }
    console.log('init_parsley');

    $/*.listen*/('parsley:field:validate', function () {
        validateFront();
    });
    $('#demo-form .btn').on('click', function () {
        $('#demo-form').parsley().validate();
        validateFront();
    });
    var validateFront = function () {
        if (true === $('#demo-form').parsley().isValid()) {
            $('.bs-callout-info').removeClass('hidden');
            $('.bs-callout-warning').addClass('hidden');
        } else {
            $('.bs-callout-info').addClass('hidden');
            $('.bs-callout-warning').removeClass('hidden');
        }
    };

    $/*.listen*/('parsley:field:validate', function () {
        validateFront();
    });
    $('#demo-form2 .btn').on('click', function () {
        $('#demo-form2').parsley().validate();
        validateFront();
    });
    var validateFront = function () {
        if (true === $('#demo-form2').parsley().isValid()) {
            $('.bs-callout-info').removeClass('hidden');
            $('.bs-callout-warning').addClass('hidden');
        } else {
            $('.bs-callout-info').addClass('hidden');
            $('.bs-callout-warning').removeClass('hidden');
        }
    };

    try {
        hljs.initHighlightingOnLoad();
    } catch (err) { }
};

/* INPUTS */

function onAddTag(tag) {
    alert("Added a tag: " + tag);
}

function onRemoveTag(tag) {
    alert("Removed a tag: " + tag);
}

function onChangeTag(input, tag) {
    alert("Changed a tag: " + tag);
}

//tags input
function init_TagsInput() {
    if (typeof $.fn.tagsInput !== 'undefined') {
        $('#tags_1').tagsInput({
            width: 'auto'
        });
    }
};

/* INPUT MASK */

function init_InputMask() {
    if (typeof ($.fn.inputmask) === 'undefined') { return; }
    console.log('init_InputMask');

    $(":input").inputmask();
};

/* DATERANGEPICKER */

function init_daterangepicker() {
    if (typeof ($.fn.daterangepicker) === 'undefined') { return; }
    console.log('init_daterangepicker');

    var cb = function (start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    };

    var optionSet1 = {
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        minDate: '01/01/2012',
        maxDate: '12/31/2015',
        dateLimit: {
            days: 60
        },
        showDropdowns: true,
        showWeekNumbers: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        opens: 'left',
        buttonClasses: ['btn btn-default'],
        applyClass: 'btn-small btn-primary',
        cancelClass: 'btn-small',
        format: 'MM/DD/YYYY',
        separator: ' to ',
        locale: {
            applyLabel: 'Submit',
            cancelLabel: 'Clear',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
        }
    };

    $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    $('#reportrange').daterangepicker(optionSet1, cb);
    $('#reportrange').on('show.daterangepicker', function () {
        console.log("show event fired");
    });
    $('#reportrange').on('hide.daterangepicker', function () {
        console.log("hide event fired");
    });
    $('#reportrange').on('apply.daterangepicker', function (ev, picker) {
        console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
    });
    $('#reportrange').on('cancel.daterangepicker', function (ev, picker) {
        console.log("cancel event fired");
    });
    $('#options1').click(function () {
        $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
    });
    $('#options2').click(function () {
        $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
    });
    $('#destroy').click(function () {
        $('#reportrange').data('daterangepicker').remove();
    });
}

function init_daterangepicker_right() {
    if (typeof ($.fn.daterangepicker) === 'undefined') { return; }
    console.log('init_daterangepicker_right');

    var cb = function (start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
        $('#reportrange_right span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    };

    var optionSet1 = {
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        minDate: '01/01/2012',
        maxDate: '12/31/2020',
        dateLimit: {
            days: 60
        },
        showDropdowns: true,
        showWeekNumbers: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        opens: 'right',
        buttonClasses: ['btn btn-default'],
        applyClass: 'btn-small btn-primary',
        cancelClass: 'btn-small',
        format: 'MM/DD/YYYY',
        separator: ' to ',
        locale: {
            applyLabel: 'Submit',
            cancelLabel: 'Clear',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
        }
    };

    $('#reportrange_right span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

    $('#reportrange_right').daterangepicker(optionSet1, cb);

    $('#reportrange_right').on('show.daterangepicker', function () {
        console.log("show event fired");
    });
    $('#reportrange_right').on('hide.daterangepicker', function () {
        console.log("hide event fired");
    });
    $('#reportrange_right').on('apply.daterangepicker', function (ev, picker) {
        console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
    });
    $('#reportrange_right').on('cancel.daterangepicker', function (ev, picker) {
        console.log("cancel event fired");
    });

    $('#options1').click(function () {
        $('#reportrange_right').data('daterangepicker').setOptions(optionSet1, cb);
    });

    $('#options2').click(function () {
        $('#reportrange_right').data('daterangepicker').setOptions(optionSet2, cb);
    });

    $('#destroy').click(function () {
        $('#reportrange_right').data('daterangepicker').remove();
    });
}

function init_daterangepicker_single_call() {
    if (typeof ($.fn.daterangepicker) === 'undefined') { return; }
    console.log('init_daterangepicker_single_call');

    $('#single_cal1').daterangepicker({
        singleDatePicker: true,
        singleClasses: "picker_1"
    }, function (start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });
    $('#single_cal2').daterangepicker({
        singleDatePicker: true,
        singleClasses: "picker_2"
    }, function (start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });
    $('#single_cal3').daterangepicker({
        singleDatePicker: true,
        singleClasses: "picker_3"
    }, function (start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });
    $('#single_cal4').daterangepicker({
        singleDatePicker: true,
        singleClasses: "picker_4"
    }, function (start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });
}

function init_daterangepicker_reservation() {
    if (typeof ($.fn.daterangepicker) === 'undefined') { return; }
    console.log('init_daterangepicker_reservation');

    $('#reservation').daterangepicker(null, function (start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });

    $('#reservation-time').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        locale: {
            format: 'MM/DD/YYYY h:mm A'
        }
    });
}

/* PNotify */

function init_PNotify() {
    if (typeof (PNotify) === 'undefined') { return; }
    console.log('init_PNotify');
};

/* CUSTOM NOTIFICATION */

function init_CustomNotification() {
    console.log('run_customtabs');

    if (typeof (CustomTabs) === 'undefined') { return; }
    console.log('init_CustomTabs');

    var cnt = 10;

    TabbedNotification = function (options) {
        var message = "<div id='ntf" + cnt + "' class='text alert-" + options.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + options.title +
            "</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + options.text + "</p></div>";

        if (!document.getElementById('custom_notifications')) {
            alert('doesnt exists');
        } else {
            $('#custom_notifications ul.notifications').append("<li><a id='ntlink" + cnt + "' class='alert-" + options.type + "' href='#ntf" + cnt + "'><i class='fa fa-bell animated shake'></i></a></li>");
            $('#custom_notifications #notif-group').append(message);
            cnt++;
            CustomTabs(options);
        }
    };

    CustomTabs = function (options) {
        $('.tabbed_notifications > div').hide();
        $('.tabbed_notifications > div:first-of-type').show();
        $('#custom_notifications').removeClass('dsp_none');
        $('.notifications a').click(function (e) {
            e.preventDefault();
            var $this = $(this),
                tabbed_notifications = '#' + $this.parents('.notifications').data('tabbed_notifications'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabbed_notifications).children('div').hide();
            $(target).show();
        });
    };

    CustomTabs();

    var tabid = idname = '';

    $(document).on('click', '.notification_close', function (e) {
        idname = $(this).parent().parent().attr("id");
        tabid = idname.substr(-2);
        $('#ntf' + tabid).remove();
        $('#ntlink' + tabid).parent().remove();
        $('.notifications a').first().addClass('active');
        $('#notif-group div').first().css('display', 'block');
    });
};

/* COMPOSE */

function init_compose() {
    if (typeof ($.fn.slideToggle) === 'undefined') { return; }
    console.log('init_compose');

    $('#compose, .compose-close').click(function () {
        $('.compose').slideToggle();
    });
};

/* CALENDAR */

function init_calendar() {
    if (typeof ($.fn.fullCalendar) === 'undefined') { return; }
    console.log('init_calendar');

    var calendar = $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
        },
        selectable: false,
        defaultDate: $.fullCalendar.moment("2018-10-01"),
        selectHelper: false,
        eventClick: function (calEvent, jsEvent, view) {
            $('#rosterModal').click();
            $('#rosterModalLabelTitle').text("Roster Details for " + calEvent.title);
            $('#rosterModalLabel').text(calEvent.title);

            $.ajax({
                url: "updateRosterDetailsModal.ashx",
                contentType: "application/json",
                data: { 'weekNumber': $.fullCalendar.moment(calEvent.start).week(), 'shiftName': calEvent.title },
                success: function (data) {
                    var dataObj = JSON.parse(data);

                    $("#roster-modal-status1").removeClass('green red');
                    $("#roster-modal-status2").removeClass('green red');
                    $("#roster-modal-status3").removeClass('green red');
                    $("#roster-modal-status4").removeClass('green red');

                    var agent1 = dataObj[0].split("/");
                    var agent2 = dataObj[1].split("/");
                    var agent3 = dataObj[2].split("/");
                    var agent4 = dataObj[3].split("/");

                    $("#roster-modal-name1").html(agent1[0]);
                    if (IsLeavePredicted($.fullCalendar.moment(calEvent.start).week(), calEvent.title, agent1[1])) {
                        $("#roster-modal-status1").removeClass('green');
                        $("#roster-modal-status1").addClass('red');
                    }
                    else {
                        $("#roster-modal-status1").removeClass('red');
                        $("#roster-modal-status1").addClass('green');
                    }

                    $("#roster-modal-name2").html(agent2[0]);
                    if (IsLeavePredicted($.fullCalendar.moment(calEvent.start).week(), calEvent.title, agent2[1])) {
                        $("#roster-modal-status2").removeClass('green');
                        $("#roster-modal-status2").addClass('red');
                    }
                    else {
                        $("#roster-modal-status2").removeClass('red');
                        $("#roster-modal-status2").addClass('green');
                    }

                    $("#roster-modal-name3").html(agent3[0]);
                    if (IsLeavePredicted($.fullCalendar.moment(calEvent.start).week(), calEvent.title, agent3[1])) {
                        $("#roster-modal-status3").removeClass('green');
                        $("#roster-modal-status3").addClass('red');
                    }
                    else {
                        $("#roster-modal-status3").removeClass('red');
                        $("#roster-modal-status3").addClass('green');
                    }

                    $("#roster-modal-name4").html(agent4[0]);
                    if (IsLeavePredicted($.fullCalendar.moment(calEvent.start).week(), calEvent.title, agent4[1])) {
                        $("#roster-modal-status4").removeClass('green');
                        $("#roster-modal-status4").addClass('red');
                    }
                    else {
                        $("#roster-modal-status4").removeClass('red');
                        $("#roster-modal-status4").addClass('green');
                    }
                }
                //error: OnFail
            });

            calendar.fullCalendar('unselect');
        },
        editable: false,
        dayRender: function (date, cell) {
        },
        eventTextColor: "rgb(38,38,38)",
        events: function (start, end, timezone, callback) {
            var startMoment = $.fullCalendar.moment(start);
            var endMoment = $.fullCalendar.moment(end);
            var sept = $.fullCalendar.moment("2018-09-29T05:55:03+05:30");

            var events = [];

            while (startMoment.isAfter(sept, 'day') && (startMoment.isBefore(endMoment, 'day') || startMoment.isSame(endMoment, 'day'))) {
                // Create 3 events everyday for the 3 shifts.
                events.push(
                    {
                        // Shift 1 Event.
                        title: "India Shift 1",
                        start: startMoment.format(),
                        backgroundColor: "rgb(198,224,180)",
                        className: "roster-event"
                    },
                    {
                        // Shift 2 Event.
                        title: "India Shift 2",
                        start: startMoment.format(),
                        backgroundColor: "rgb(248,203,173)",
                        className: "roster-event"
                    },
                    {
                        // Shift 3 Event.
                        title: "USA Shift",
                        start: startMoment.format(),
                        backgroundColor: "rgb(255,230,153)",
                        className: "roster-event"
                    }
                );
                startMoment.add(1, 'days');
            }
            if (callback) callback(events);
        }
    });
};

function IsLeavePredicted(weekNo, shiftName, empId) {
    var isPredicted = false;

    for (i = 0; i < PREDICTEDLEAVE_STORE.length; i++) {
        if (PREDICTEDLEAVE_STORE[i].shiftName == shiftName && PREDICTEDLEAVE_STORE[i].weekNo == weekNo && PREDICTEDLEAVE_STORE[i].empId == empId) {
            isPredicted = true;
            break;
        }
    }

    return isPredicted;
}

/* DATA TABLES */

function init_DataTables() {
    console.log('run_datatables');

    if (typeof ($.fn.DataTable) === 'undefined') { return; }
    console.log('init_DataTables');

    var handleDataTableButtons = function () {
        if ($("#datatable-buttons").length) {
            $("#datatable-buttons").DataTable({
                dom: "Blfrtip",
                buttons: [
                    {
                        extend: "copy",
                        className: "btn-sm"
                    },
                    {
                        extend: "csv",
                        className: "btn-sm"
                    },
                    {
                        extend: "excel",
                        className: "btn-sm"
                    },
                    {
                        extend: "pdfHtml5",
                        className: "btn-sm"
                    },
                    {
                        extend: "print",
                        className: "btn-sm"
                    },
                ],
                responsive: true
            });
        }
    };

    TableManageButtons = function () {
        "use strict";
        return {
            init: function () {
                handleDataTableButtons();
            }
        };
    }();

    $('#datatable').dataTable();

    $('#datatable-keytable').DataTable({
        keys: true
    });

    $('#datatable-scroller').DataTable({
        ajax: "js/datatables/json/scroller-demo.json",
        deferRender: true,
        scrollY: 380,
        scrollCollapse: true,
        scroller: true
    });

    $('#datatable-fixed-header').DataTable({
        fixedHeader: true
    });

    var $datatable = $('#datatable-checkbox');

    $datatable.dataTable({
        'order': [[1, 'asc']],
        'columnDefs': [
            { orderable: false, targets: [0] }
        ]
    });
    $datatable.on('draw.dt', function () {
        $('checkbox input').iCheck({
            checkboxClass: 'icheckbox_flat-green'
        });
    });

    TableManageButtons.init();
};

/* CHART - MORRIS  */

function init_morris_charts() {
    if (typeof (Morris) === 'undefined') { return; }
    console.log('init_morris_charts');

    if ($('#graph_bar').length) {
        Morris.Bar({
            element: 'graph_bar',
            data: [
                { device: 'iPhone 4', geekbench: 380 },
                { device: 'iPhone 4S', geekbench: 655 },
                { device: 'iPhone 3GS', geekbench: 275 },
                { device: 'iPhone 5', geekbench: 1571 },
                { device: 'iPhone 5S', geekbench: 655 },
                { device: 'iPhone 6', geekbench: 2154 },
                { device: 'iPhone 6 Plus', geekbench: 1144 },
                { device: 'iPhone 6S', geekbench: 2371 },
                { device: 'iPhone 6S Plus', geekbench: 1471 },
                { device: 'Other', geekbench: 1371 }
            ],
            xkey: 'device',
            ykeys: ['geekbench'],
            labels: ['Geekbench'],
            barRatio: 0.4,
            barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
            xLabelAngle: 35,
            hideHover: 'auto',
            resize: true
        });
    }

    if ($('#graph_bar_group').length) {
        Morris.Bar({
            element: 'graph_bar_group',
            data: [
                { "period": "2016-10-01", "licensed": 807, "sorned": 660 },
                { "period": "2016-09-30", "licensed": 1251, "sorned": 729 },
                { "period": "2016-09-29", "licensed": 1769, "sorned": 1018 },
                { "period": "2016-09-20", "licensed": 2246, "sorned": 1461 },
                { "period": "2016-09-19", "licensed": 2657, "sorned": 1967 },
                { "period": "2016-09-18", "licensed": 3148, "sorned": 2627 },
                { "period": "2016-09-17", "licensed": 3471, "sorned": 3740 },
                { "period": "2016-09-16", "licensed": 2871, "sorned": 2216 },
                { "period": "2016-09-15", "licensed": 2401, "sorned": 1656 },
                { "period": "2016-09-10", "licensed": 2115, "sorned": 1022 }
            ],
            xkey: 'period',
            barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
            ykeys: ['licensed', 'sorned'],
            labels: ['Licensed', 'SORN'],
            hideHover: 'auto',
            xLabelAngle: 60,
            resize: true
        });
    }

    if ($('#graphx').length) {
        Morris.Bar({
            element: 'graphx',
            data: [
                { x: '2015 Q1', y: 2, z: 3, a: 4 },
                { x: '2015 Q2', y: 3, z: 5, a: 6 },
                { x: '2015 Q3', y: 4, z: 3, a: 2 },
                { x: '2015 Q4', y: 2, z: 4, a: 5 }
            ],
            xkey: 'x',
            ykeys: ['y', 'z', 'a'],
            barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
            hideHover: 'auto',
            labels: ['Y', 'Z', 'A'],
            resize: true
        }).on('click', function (i, row) {
            console.log(i, row);
        });
    }

    if ($('#graph_area').length) {
        Morris.Area({
            element: 'graph_area',
            data: [
                { period: '2014 Q1', iphone: 2666, ipad: null, itouch: 2647 },
                { period: '2014 Q2', iphone: 2778, ipad: 2294, itouch: 2441 },
                { period: '2014 Q3', iphone: 4912, ipad: 1969, itouch: 2501 },
                { period: '2014 Q4', iphone: 3767, ipad: 3597, itouch: 5689 },
                { period: '2015 Q1', iphone: 6810, ipad: 1914, itouch: 2293 },
                { period: '2015 Q2', iphone: 5670, ipad: 4293, itouch: 1881 },
                { period: '2015 Q3', iphone: 4820, ipad: 3795, itouch: 1588 },
                { period: '2015 Q4', iphone: 15073, ipad: 5967, itouch: 5175 },
                { period: '2016 Q1', iphone: 10687, ipad: 4460, itouch: 2028 },
                { period: '2016 Q2', iphone: 8432, ipad: 5713, itouch: 1791 }
            ],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
            labels: ['iPhone', 'iPad', 'iPod Touch'],
            pointSize: 2,
            hideHover: 'auto',
            resize: true
        });
    }

    if ($('#graph_donut').length) {
        Morris.Donut({
            element: 'graph_donut',
            data: [
                { label: 'Jam', value: 25 },
                { label: 'Frosted', value: 40 },
                { label: 'Custard', value: 25 },
                { label: 'Sugar', value: 10 }
            ],
            colors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
            formatter: function (y) {
                return y + "%";
            },
            resize: true
        });
    }

    if ($('#graph_line').length) {
        Morris.Line({
            element: 'graph_line',
            xkey: 'year',
            ykeys: ['value'],
            labels: ['Value'],
            hideHover: 'auto',
            lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
            data: [
                { year: '2012', value: 20 },
                { year: '2013', value: 10 },
                { year: '2014', value: 5 },
                { year: '2015', value: 5 },
                { year: '2016', value: 20 }
            ],
            resize: true
        });

        $MENU_TOGGLE.on('click', function () {
            $(window).resize();
        });
    }
};

function init_profileTable() {
    $('#profilemanager-datatable').DataTable();
}

$(document).ready(function () {
    $(".ticket-open").on('click', function () {
        $.ajax({
            url: "updateTicketDetailsPane.ashx",
            contentType: "application/json",
            data: { 'ticketId': $(this).closest("tr").attr('id') },
            success: function (data) {
                var issueData = JSON.parse(data);

                $("#ticket-panel-title").html(issueData.Name);
                $("#ticket-panel-desc").text(issueData.Description);
                $("#ticket-panel-raisedby").text(issueData.RaisedBy);
                $("#ticket-panel-raisedvia").text(issueData.RaisedVia);
                $("#ticket-panel-assignedto").text(issueData.AssignedName);
            },
            //error: OnFail
        });
    });

    $("#ticket-submit").on('click', function () {
        var issueNumber;

        $.ajax({
            url: "addTicketDetails.ashx",
            contentType: "application/json",
            data: { 'title': $('#title').val(), 'desc': $('#desc').val() },
            success: function (issueId) {
                issueNumber = issueId;

                new PNotify({
                    title: 'Ticket Created!',
                    text: 'Please wait while the system assigns this ticket.',
                    type: 'success',
                    styling: 'bootstrap3',
                    delay: 2000
                });

                $.ajax({
                    //url: "http://127.0.0.1:9898/Jarvis_2_0/v1.0/getPredictions/defectCategory",
                    //url: "http://0.0.0.0:9898/Jarvis_2_0/v1.0/getPredictions/defectCategory",
                    url: "http://ec2-52-207-240-53.compute-1.amazonaws.com:9898/Jarvis_2_0/v1.0/getPredictions/defectCategory",
                    type: 'GET',
                    contentType: "application/json",
                    success: function (dataObj) {
                        $.ajax({
                            url: "AddTicketAssignee.ashx",
                            contentType: "application/json",
                            data: { 'issueNumber': issueNumber, 'team': dataObj[0]["Predicted Module"] },
                            success: function () {
                                new PNotify({
                                    title: 'Ticket Assigned!',
                                    text: 'Ticket#' + issueNumber + ' assigned to a member of team ' + dataObj[0]["Predicted Module"],
                                    type: 'success',
                                    styling: 'bootstrap3',
                                    delay: 2000
                                });

                                setTimeout(function () { location.reload(true) }, 5000);
                            }
                            //error: OnFail
                        });
                    },
                    error: function (jqxhr, exception) {
                        new PNotify({
                            title: 'Error!',
                            text: 'Could not contact the Ticket Assignment Service!',
                            type: 'error',
                            styling: 'bootstrap3',
                            delay: 2000
                        });

                        setTimeout(function () { location.reload(true) }, 5000);
                    }
                });
            }
            //error: OnFail
        });
    });
});

//Roster Script
var PREDICTEDLEAVE_STORE = [];

$(document).ready(function () {
    if ($('#calendar').length) {
        $.ajax({
            //url: "http://127.0.0.1:9898/Jarvis_2_0/v1.0/getPredictions/leaves",
            //url: "http://0.0.0.0:9898/Jarvis_2_0/v1.0/getPredictions/leaves",
            url: "http://ec2-52-207-240-53.compute-1.amazonaws.com:9898/Jarvis_2_0/v1.0/getPredictions/leaves",
            type: 'GET',
            contentType: "application/json",
            success: function (dataObj) {
                dataObj.forEach(function (dataElement) {
                    if (dataElement.predicted == '1') {
                        //var weekNo = dataElement.week;

                        $.ajax({
                            url: "getShiftDetails.ashx",
                            contentType: "application/json",
                            data: { 'empId': dataElement["Employee ID"], 'weekNo': dataElement.week },
                            success: function (shiftName) {
                                var eventsToRed = $('#calendar').fullCalendar('clientEvents', function (evt) {
                                    return evt.title == shiftName && $.fullCalendar.moment(evt.start).week() == dataElement.week;
                                });

                                for (i = 0; i < eventsToRed.length; i++) {
                                    eventsToRed[i].className = 'roster-event-red-border';
                                    $('#calendar').fullCalendar('updateEvent', eventsToRed[i]);
                                }

                                PREDICTEDLEAVE_STORE.push({ 'shiftName': shiftName, 'weekNo': dataElement.week, 'empId': dataElement["Employee ID"] });
                            }
                            //error: OnFail
                        });
                    }
                });

                $('#calendar').fullCalendar('rerenderEvents');
                new PNotify({
                    title: 'Unplanned Leave Predicted!',
                    text: 'Please check highlighted shifts for details',
                    styling: 'bootstrap3',
                    delay: 1500
                });
            },
            error: function () {
                new PNotify({
                    title: 'Error!',
                    text: 'Could not contact the Unplanned Leave Prediction Service!',
                    type: 'error',
                    styling: 'bootstrap3',
                    delay: 2000
                });
            }
        });
    }
});

$(document).ready(function () {
    Dropzone.options.analysisDropzone = {
        paramName: "file", // The name that will be used to transfer the file
        uploadMultiple: true,
        autoProcessQueue: false,
        maxFiles: 2,
        init: function () {
            this.on("successmultiple", onFileUploadSuccess);
            this.on("addedfile", function () {
                $('#btnAnalyseFiles').show();
            });
            var submitButton = document.querySelector("#btnAnalyseFiles")
            analysisDropzone = this; // closure

            submitButton.addEventListener("click", function () {
                analysisDropzone.processQueue(); // Tell Dropzone to process all queued files.
            });
        },
    };
});

function onFileUploadSuccess(files, response) {
    clearAnalysisFeilds();

    var intent = 'drive_failure';

    if (files.length > 1) {
        for (var i = 0; i < files.length; i++) {
            if (files[i].type.match("image/jpg") || files[i].type.match("image/jpeg") || files[i].type.match("image/gif") || files[i].type.match("image/png") || files[i].type.match("image/bmp") || files[i].type.match("video/mp4") || files[i].type.match("video/flv") || files[i].type.match("video/wmv") || files[i].type.match("video/mkv")) {
                if (files[i].type.match("video/mp4") || files[i].type.match("video/flv") || files[i].type.match("video/wmv") || files[i].type.match("video/mkv")) {
                    intent = 'video';
                }

                var sessionid = "guestsessionid";
                var username = "guest";

                var formData = new FormData();
                formData.append("file", files[i]);

                //var xhr = new XMLHttpRequest();

                //xhr.open("POST", 'http://10.207.142.34:5002/api/imageprocessor/receiveFile?sessionId=' + sessionid + "-" + username + '&intent=' + intent, true);
                //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                //xhr.setRequestHeader("crossDomain", "true");
                //xhr.setRequestHeader("dataType", "jsonp");
                //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                //xhr.onreadystatechange = function () {
                //    if ((xhr.readyState == 4 && xhr.status == 200) || (xhr.readyState == 32 && xhr.status == 00)) {
                //        var imageresponse = JSON.parse(xhr.responseText);

                //        alert(imageresponse);
                //    }
                //    else {
                //        alert(xhr.responseText);
                //    }
                //};

                //xhr.send(formData);

                $.ajax({
                    url: 'https://10.207.142.34:5003/api/imageprocessor/receiveFile?sessionId=' + sessionid + "-" + username + '&intent=' + intent,
                    //url: 'ProcessImageProcessingRequest.ashx?intent=' + intent,
                    data: formData,
                    type: 'POST',
                    contentType: false,
                    processData: false,
                    beforeSend: function (request) {
                        request.setRequestHeader("Access-Control-Allow-Origin", "*");
                        request.setRequestHeader("crossDomain", "true");
                        request.setRequestHeader("dataType", "jsonp");
                        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                        new PNotify({
                            title: 'Info',
                            type: 'info',
                            text: "Performing Image analysis. Please wait.",
                            styling: 'bootstrap3',
                            delay: 3000
                        });
                    },

                    success: function (response) {
                        var responseObj = JSON.parse(response);

                        //$('#processedtext').value = responseObj.response_text;
                        $("#imgprocessedimage").attr("src", "https://10.207.142.34:5003/api/imageprocessor/getImage?fileName=" + responseObj.response_image + "&sessionId=" + sessionid + "-" + username);
                        $("#imgprocessedimageheader").show();
                        $("#imgprocessedimage").show();

                        new PNotify({
                            title: 'Info',
                            type: 'info',
                            text: "Image Analysis complete, refer to the 'Recommendation Image' section ",
                            styling: 'bootstrap3',
                            delay: 3000
                        });

                        $('#headingTwo1')[0].click();

                        for (var j = 0; j < files.length; j++) {
                            if (files[j].type.match("text/plain")) {
                                var sessionid = "guestsessionid";
                                var username = "guest";
                                var drivelist = '0_0_0,0_0_1,0_0_12';
                                var producttype = "Unity";

                                if (responseObj.response_text != "") {
                                    drivelist = responseObj.response_text
                                }

                                $.ajax({
                                    url: 'https://10.207.142.32:5002' + '/upload?intent=' + intent + '&sessionId=' + sessionid + '-' + username + "&driveList=" + drivelist,
                                    data: formData,
                                    type: 'POST',
                                    contentType: false,
                                    processData: false,
                                    beforeSend: function (request) {
                                        request.setRequestHeader("Access-Control-Allow-Origin", "*");
                                        request.setRequestHeader("crossDomain", "true");
                                        request.setRequestHeader("dataType", "jsonp");
                                        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                                        new PNotify({
                                            title: 'Info',
                                            type: 'info',
                                            text: "Performing Log Analysis. Please wait.",
                                            styling: 'bootstrap3',
                                            delay: 50000
                                        });
                                    },
                                    success: function (response) {
                                        var logresponse = JSON.parse(response);
                                        PNotify.removeAll();                                        

                                        if ((logresponse.result.toString().search("Miniport_Slowness issue") >= 0 || logresponse.result.toString().search("failed due to") >= 0) && producttype != "") {
                                            $('#processedtext').show();
                                            $('#processedtextheader').show();
                                            $('#processedtext').val(logresponse.response_text);

                                            $('#txtanalysisTicketTitle').val("Log Analysis/Image Processing issue");
                                            $('#txtanalysisTicketDesc').val(logresponse.result.toString());

                                            new PNotify({
                                                title: 'Info',
                                                text: "Log analysis succesful, please review the recommendations.",
                                                type: 'success',
                                                styling: 'bootstrap3',
                                                delay: 2000
                                            });
                                            $("#headingTwo1")[0].click();
                                        }
                                        else if (logresponse.result.toString().search("Unable to root cause") >= 0 || logresponse.result.toString().search("create service request") >= 0) {
                                            new PNotify({
                                                title: 'Info',
                                                text: logresponse.result.toString(),
                                                styling: 'bootstrap3',
                                                delay: 3000
                                            });
                                            $('#txtanalysisTicketTitle').val("Log Analysis/Image Processing issue: 'Drive Failure'");
                                            $('#txtanalysisTicketDesc').val("Drive failure with drives: " + responseObj.response_text);
                                            $('#headingTwo2')[0].click();
                                        }
                                    },
                                    error: function () {
                                        new PNotify({
                                            title: 'Error!',
                                            text: 'Could not contact log analysis',
                                            type: 'error',
                                            styling: 'bootstrap3',
                                            delay: 2000
                                        });
                                    }
                                });
                            }
                        }
                    },
                    error: function () {
                        new PNotify({
                            title: 'Error!',
                            text: 'Could not retrieve image from Image processor',
                            type: 'error',
                            styling: 'bootstrap3',
                            delay: 2000
                        });
                    }
                });
            }
        }
    }
    else if (files.length == 1) {
        if (files[0].type.match("text/plain")) {
            var sessionid = "guestsessionid";
            var username = "guest";
            intent = "log_analytics";

            var drivelist = '0_0_0,0_0_1,0_0_12';

            var producttype = "Unity";

            $.ajax({
                url: 'http://10.207.142.32:5000' + '/upload?intent=' + intent + '&sessionId=' + sessionid + '-' + username + "&driveList=" + drivelist,
                data: formData,
                type: 'POST',
                contentType: false,
                processData: false,
                beforeSend: function (request) {
                    request.setRequestHeader("Access-Control-Allow-Origin", "*");
                    request.setRequestHeader("crossDomain", "true");
                    request.setRequestHeader("dataType", "jsonp");
                    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                    new PNotify({
                        title: 'Info',
                        type: 'info',
                        text: "Performing Log Analysis. Please wait.",
                        styling: 'bootstrap3',
                        delay: 50000
                    });
                },
                success: function (response) {
                    var logresponse = JSON.parse(response);
                    PNotify.removeAll();
                    new PNotify({
                        title: 'Info',
                        text: "Log analysis succesful, please review the recommendations.",
                        type: 'success',
                        styling: 'bootstrap3',
                        delay: 2000
                    });
                    $("#headingTwo1")[0].click();

                    $('#processedtext').value = logresponse.response_text;

                    if ((logresponse.result.toString().search("Miniport_Slowness issue") >= 0 || logresponse.result.toString().search("failed due to") >= 0) && producttype != "") {
                        $('#txtanalysisTicketTitle').val("Log Analysis/Image Processing issue");
                        $('#txtanalysisTicketDesc').val(logresponse.result.toString());

                        new PNotify({
                            title: 'Info',
                            text: "Log analysis succesful, please review the recommendations.",
                            type: 'success',
                            styling: 'bootstrap3',
                            delay: 2000
                        });
                        $("#headingTwo1")[0].click();
                    }
                    else if (logresponse.result.toString().search("Unable to root cause") >= 0 || logresponse.result.toString().search("create service request") >= 0) {
                        new PNotify({
                            title: 'Info',
                            text: logresponse.result.toString(),
                            styling: 'bootstrap3',
                            delay: 2000
                        });
                        $('#txtanalysisTicketTitle').val("Log Analysis/Image Processing issue: 'Drive Failure'");
                        $('#txtanalysisTicketDesc').val("Drive failure with drives: " + responseObj.response_text);
                        $('#headingTwo2')[0].click();
                    }
                },
                error: function () {
                    new PNotify({
                        title: 'Error!',
                        text: 'Could not contact log analysis',
                        type: 'error',
                        styling: 'bootstrap3',
                        delay: 2000
                    });
                }
            });
        }
    }
};

$(document).ready(function () {
    $("#btnanalysisSubmitTicket").on('click', function () {
        var issueNumber;
       
        $.ajax({
            url: "addTicketDetails.ashx",
            contentType: "application/json",
            data: { 'title': $('#txtanalysisTicketTitle').val(), 'desc': $('#txtanalysisTicketDesc').val() },
            success: function (issueId) {
                issueNumber = issueId;

                new PNotify({
                    title: 'Ticket Created!',
                    text: 'Please wait while the system assigns this ticket.',
                    type: 'success',
                    styling: 'bootstrap3',
                    delay: 2000
                });

                $.ajax({
                    //url: "http://127.0.0.1:9898/Jarvis_2_0/v1.0/getPredictions/defectCategory",
                    //url: "http://0.0.0.0:9898/Jarvis_2_0/v1.0/getPredictions/defectCategory",
                    url: "http://ec2-52-207-240-53.compute-1.amazonaws.com:9898/Jarvis_2_0/v1.0/getPredictions/defectCategory",
                    type: 'GET',
                    contentType: "application/json",
                    success: function (dataObj) {
                        $.ajax({
                            url: "AddTicketAssignee.ashx",
                            contentType: "application/json",
                            data: { 'issueNumber': issueNumber, 'team': dataObj[0]["Predicted Module"] },
                            success: function () {
                                new PNotify({
                                    title: 'Ticket Assigned!',
                                    text: 'Ticket#' + issueNumber + ' assigned to a member of team ' + dataObj[0]["Predicted Module"],
                                    type: 'success',
                                    styling: 'bootstrap3',
                                    delay: 2000
                                });
                            }
                            //error: OnFail
                        });
                    },
                    error: function (jqxhr, exception) {
                        new PNotify({
                            title: 'Error!',
                            text: 'Could not contact the Ticket Assignment Service!',
                            type: 'error',
                            styling: 'bootstrap3',
                            delay: 2000
                        });
                    }
                });
            }
            //error: OnFail
        });
    });

    clearAnalysisFeilds();
});

function clearAnalysisFeilds() {
    $('#processedtext').value = "";
    $("#imgprocessedimage").attr("src", "");
    $('#txtanalysisTicketTitle').text = "";
    $('#txtanalysisTicketDesc').value = "";
}

$(document).ready(function () {
    init_flot_chart();
    init_sidebar();
    init_InputMask();
    init_TagsInput();
    init_parsley();
    init_daterangepicker();
    init_daterangepicker_right();
    init_daterangepicker_single_call();
    init_daterangepicker_reservation();
    init_DataTables();
    init_chart_doughnut();
    init_PNotify();
    init_calendar();
    init_compose();
    init_CustomNotification();
    init_autosize();
    init_profileTable();
});