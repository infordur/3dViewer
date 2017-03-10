$(document).ready(function() {
  
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $('#image').reel({
        images:      './img/drone/#####.png|1..36|1',
        cw:          true,
        frame:       32,
        steppable: false,
        //speed:       -0.2,
        //velocity:    3,
        //duration:    6,
        //brake:       0.2,
        annotations: {
            "point": {
                start: 27,
                end: 31,
                x: [250,225,205,185,165], 
                y: 200,
                node: $('#1'),
            },
            "point2": {
                start: 12,
                end: 21,
                x: [305,305,297,288,278,271,258,245,232,220], 
                y: [152,148,150,150,151,151,151,151,151,151],
                node: $('#2'),
            },
        }
    });


});

