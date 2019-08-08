$( function() {
    $( ".piece" ).draggable( { snap: ".cell" } );
    $( ".wpawn" ).draggable( { axis: "y" } );
    $( ".bpawn" ).draggable( { axis: "y" } );
} );

