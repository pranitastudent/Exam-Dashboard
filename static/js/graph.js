queue()
    .defer(d3.csv, 'data/StudentsPerformance.csv')
    .await(makeGraphs);

function makeGraphs(error, studentData) {
    var ndx = crossfilter(studentData);

    /*Each Chart Function*/
    show_gender_balance(ndx);
    show_test_scores_by_gender(ndx);
    show_parental_level_of_education_selector(ndx);
    show_race_ethnicity_balance(ndx);


    dc.renderAll();


}


/*Gender Balance Chart*/

function show_gender_balance(ndx) {
    const genderColors = d3.scale.ordinal()
        .domain(['Female', 'Male'])
        .range(['red', 'blue']);
    const genderDim = ndx.dimension(function(d) {
        return [d.gender];
    });
    const genderMix = genderDim.group();

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
        .xAxisLabel('Gender')
        .yAxisLabel('Number of Students')
        .yAxis().ticks(20);
}

/*Subject specific pie charts for genders*/

function show_test_scores_by_gender(ndx) {
    const genderColors = d3.scale.ordinal()
        .domain(['Female', 'Male'])
        .range(['blue', 'red']);
    const genderDim = ndx.dimension(function(d) {
        return [d.gender];
    });
    const math_score_by_gender = genderDim.group().reduceSum(dc.pluck('math_score'));
    const reading_score_by_gender = genderDim.group().reduceSum(dc.pluck('reading_score'));
    const writing_score_by_gender = genderDim.group().reduceSum(dc.pluck('writing_score'));

    dc.pieChart("#gender-balance-math")
        .height(200)
        .radius(90)
        .transitionDuration(500)

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
        .group(reading_score_by_gender);

    dc.pieChart("#gender-balance-writing")
        .height(200)
        .radius(90)
        .transitionDuration(500)
        .colorAccessor(function(d) { return d.key[0]; })
        .colors(genderColors)
        .dimension(genderDim)
        .group(writing_score_by_gender);

}

/*Selector Bar Chart for Parental level of education and ethnicty*/


function show_parental_level_of_education_selector(ndx) {
    const parentDim = ndx.dimension(dc.pluck("parental_level_of_education"));
    const parentSelect = parentDim.group();

    dc.selectMenu("#parental_level_of_education-selector")
        .dimension(parentDim)
        .group(parentSelect);
}

/*Race and Ethnicity Bar chart*/
function show_race_ethnicity_balance(ndx) {
    let raceColors = d3.scale.ordinal()
        .domain([ 'A', 'B', 'C', 'D', 'E'])
        .range(['pink', 'yellow', 'orange', 'green', 'blue']);
    let race_ethnicityDim = ndx.dimension(function(d) {
        return [d.race_ethnicity];
    });
    let race_ethnicityMix = race_ethnicityDim.group();

    dc.barChart("#race_ethnicity-graph")
        .width(350)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .colorAccessor(function(d, i) { return i; })
        .colors(raceColors)
        .dimension(race_ethnicityDim)
        .group(race_ethnicityMix)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Race/Ethnicity")
        .xAxisLabel("Parental Numbers")
        .yAxis().ticks(10);
}