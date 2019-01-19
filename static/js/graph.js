queue()
    .defer(d3.csv, "data/StudentsPerformance.csv")
    .await(makeGraphs);

function makeGraphs(error, studentData) {
    var ndx = crossfilter(studentData);


    show_ethnicity_selector(ndx);   
    show_gender_balance(ndx);
    
    dc.renderAll();


}

function show_ethnicity_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('ethnicity'));
    var group = dim.group();
    
    dc.selectMenu("#ethnicity-selector")
        .dimension(dim)
        .group(group);
}



function show_gender_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('gender'));
    var group = dim.group();

    dc.barChart("#gender-balance")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Gender")
        .yAxisLabel("Number of People")
        .yAxis().ticks(20);
}

