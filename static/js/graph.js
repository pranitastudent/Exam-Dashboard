
queue()
    .defer(d3.csv, "data/StudentsPerformance.csv")
    .await(makeGraphs);


function makeGraphs(error, studentData) {
    var ndx = crossfilter(studentData);

    /*To change these strings to integer values*/
    studentData.forEach(function(d) {
        d.math_score = parseInt(d.math_score);
        d.reading_score = parseInt(d["reading_score"]);
        d.writing_score = parseInt(d["writing_score"]);
    });

    /*Calling each chart function*/
    show_gender_balance(ndx);
    show_test_scores_by_gender(ndx);
    show_parental_level_of_education_selector(ndx);
    show_race_ethnicity_balance(ndx);
    show_math_score_to_reading_score_correlation(ndx);
    show_math_score_to_writing_score_correlation(ndx);
    show_reading_score_to_writing_score_correlation(ndx);


    dc.renderAll();
}


/*Number displays*/
function show_percent_of_each_gender(ndx) {

    function percentageThatAreEachGender(gender) {
        return genderDim.groupAll().reduce(
            function(p, v) {
                p.total++;
                if (v.gender === gender) {
                    p.count++;
                }
                return p;
            },
            function(p, v) {
                p.total++;
                if (v.gender === gender) {
                    p.count--;
                }
                return p;
            },
            function() {
                return { count: 0, total: 0 };
            }
        );
    }

    var genderDim = ndx.dimension(dc.pluck("gender"));
    var percentageThatAreFemale = percentageThatAreEachGender("female");
    var percentgeThatAreMale = percentageThatAreEachGender("male");

    dc.numberDisplay("#female-number")
        .group(percentageThatAreFemale)    
        .formatNumber(d3.format(".1%"))
        .valueAccessor(function(d) {
            if(d.total > 0) {
                return (d.count / d.total)
            } else {
                return 0;
            }
            return d.percent;
        })


    dc.numberDisplay("#male-number")
        .formatNumber(d3.format(".1%"))
        .valueAccessor(function(d) {
            if(d.total > 0) {
                return (d.count / d.total)
            } else {
                return 0;
            }
            return d.percent * 100;
        })
        .group(percentgeThatAreMale);
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
/*Scatter plot for math vs reading scores*/
function show_math_score_to_reading_score_correlation(ndx) {
    const genderColors = d3.scale.ordinal()
        .domain(["Female", "Male"])
        .range(["red", "blue"]);

    const mathDim = ndx.dimension(dc.pluck("math_score"));
    const scoresDim = ndx.dimension(function(d) {
        return [d.math_score, d.reading_score, d.gender];
    });
    const scoresGroup = scoresDim.group();

    const minMath = mathDim.bottom(1)[0].math_score;
    const maxMath = mathDim.top(1)[0].math_score;

    dc.scatterPlot("#math_vs_reading_scores")
        .width(450)
        .height(300)
        .x(d3.scale.linear().domain([minMath, maxMath]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel("Reading Score")
        .xAxisLabel("Math Score")
        .title(function(d) {
            return "This " + d.key[2] + " received " + d.key[0] + " in Math and " + d.key[1] + " in Reading.";
        })
        .colorAccessor(function(d) {
            return d.key[2];
        })
        .colors(genderColors)
        .dimension(scoresDim)
        .group(scoresGroup)
        .margins({ top: 10, right: 50, bottom: 75, left: 75 });
}

/*Scatter plot for math vs writing scores*/
function show_math_score_to_writing_score_correlation(ndx) {
    const genderColors = d3.scale.ordinal()
        .domain(["Female", "Male"])
        .range(["red", "blue"]);

    const mathDim = ndx.dimension(dc.pluck("math_score"));
    const scoresDim = ndx.dimension(function(d) {
        return [d.math_score, d.writing_score, d.gender];
    });
    const scoresGroup = scoresDim.group();

    const minMath = mathDim.bottom(1)[0].math_score;
    const maxMath = mathDim.top(1)[0].math_score;

    dc.scatterPlot("#math_vs_writing_scores")
        .width(450)
        .height(300)
        .x(d3.scale.linear().domain([minMath, maxMath]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel("Writing Score")
        .xAxisLabel("Math Score")
        .title(function(d) {
            return "This " + d.key[2] + " received " + d.key[0] + " in Math and " + d.key[1] + " in Writing.";
        })
        .colorAccessor(function(d) {
            return d.key[2];
        })
        .colors(genderColors)
        .dimension(scoresDim)
        .group(scoresGroup)
        .margins({ top: 10, right: 50, bottom: 75, left: 75 });
}

/*Scatter plot for reading vs math scores*/
function show_reading_score_to_writing_score_correlation(ndx) {
    const genderColors = d3.scale.ordinal()
        .domain(["Female", "Male"])
        .range(["red", "blue"]);

    const readingDim = ndx.dimension(dc.pluck("reading_score"));
    const scoresDim = ndx.dimension(function(d) {
        return [d.reading_score, d.writing_score, d.gender];
    });
    const scoresGroup = scoresDim.group();

    const minReading = readingDim.bottom(1)[0].reading_score;
    const maxReading = readingDim.top(1)[0].reading_score;

    dc.scatterPlot("#reading_vs_writing_scores")
        .width(450)
        .height(300)
        .x(d3.scale.linear().domain([minReading, maxReading]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel("Writing Score")
        .xAxisLabel("Reading Score")
        .title(function(d) {
            return "This " + d.key[2] + " received " + d.key[0] + " in Reading and " + d.key[1] + " in Writing.";
        })
        .colorAccessor(function(d) {
            return d.key[2];
        })
        .colors(genderColors)
        .dimension(scoresDim)
        .group(scoresGroup)
        .margins({ top: 10, right: 50, bottom: 75, left: 75 });
}
