queue()
    .defer(d3.csv, "data/StudentsPerformance.csv")
    .await(makeGraphs);

function makeGraphs(error, studentData) {
    var ndx = crossfilter(studentData);

    /*Each Chart Function*/
    show_gender_balance(ndx);
    show_test_scores_by_gender(ndx);


    dc.renderAll();


}


/*Gender Balance Chart*/

function show_gender_balance(ndx) {
    var genderColors = d3.scale.ordinal()
        .domain(["Female", "Male"])
        .range(["red", "blue"]);
    var genderDim = ndx.dimension(function(d) {
        return [d.gender];
    });
    var genderMix = genderDim.group();

    dc.barChart("#gender-balance")
        .width(350)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .colorAccessor(function(d) { return d.key[0]; })
        .colors(genderColors)
        .dimension(genderDim)
        .group(genderMix)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Gender")
        .yAxisLabel("Number of Students")
        .yAxis().ticks(20);
}

/*Subject specific pie charts for genders*/

function show_test_scores_by_gender(ndx) {
    var genderColors = d3.scale.ordinal()
        .domain(["Female", "Male"])
        .range(["blue", "red"]);
    var genderDim = ndx.dimension(function(d) {
        return [d.gender];
    });
    var math_score_by_gender = genderDim.group().reduceSum(dc.pluck('math_score'));
    var reading_score_by_gender = genderDim.group().reduceSum(dc.pluck('reading_score'));
    var writing_score_by_gender = genderDim.group().reduceSum(dc.pluck('writing_score'));

    dc.pieChart("#gender-balance-math")
        .height(200)
        .radius(90)
        .transitionDuration(500)
        .colorAccessor(function(d) { return d.key[0]; })
        .colors(genderColors)
        .dimension(genderDim)
        .group(math_score_by_gender)

    dc.pieChart("#gender-balance-reading")
        .height(200)
        .radius(90)
        .transitionDuration(500)
        .colorAccessor(function(d) { return d.key[0]; })
        .colors(genderColors)
        .dimension(genderDim)
        .group(reading_score_by_gender)

    dc.pieChart("#gender-balance-writing")
        .height(200)
        .radius(90)
        .transitionDuration(500)
        .colorAccessor(function(d) { return d.key[0]; })
        .colors(genderColors)
        .dimension(genderDim)
        .group(writing_score_by_gender)

}
