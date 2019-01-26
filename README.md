# Data Dashboard- Examination Performance - Second Milestone Project
The aim of the 'Interactive Frontend Development' end of module project was to create a interactive data dashboard on a dataset of choice using D3.js and dc.js. The webiste should reflect all of the skills gained in; HTML,CSS, JavaScript/JQuery and use of D3 and dc. The website is a showcase of a a fictious dataset examining student exam peformamce based on ; gener, ethnic race, parental level of education, test preparation and scores in ; Maths, Reading and Writing.

 The website is an interactive data dashboard which incorporates the following fields; gender, parental education, ethnic race, maths, reading and writing scores. The dataset dashboard will use interactive graphs to show teh relationship between these fields in order for the user to extrapolate data.


## User Experience
The website aims to inform users of the trends between gender, ethnic race, parental level of education, maths, reading and writing scores. The website includes a navigation bar where users can navigate to each graph and a reset button at the end where users can reset the graphs in order to select the fields they requrie. All teh charts will render according to the field chosen.

## User Stories
<ul>
<li> As a user I would like to extrapolate the relationship between gender and  maths,reading and writing scores. Does one one gender perform between in maths, reading and writing exams than the other based on the dataset. </li>
<li> As a user I would like to examine  the realationship betwen parental level of education  and ethnicity. Is there a link between ethnicity and parental level of education?</li>
<li> As a user I would like to examine whether a correlation exists with students who perform better in one subject then go on to peform consistently in other areas for exmaple examining correlation between : Maths Vs Writing, Reading Vs Writing and Maths Vs Reading.  </li>
<li> As a user I would like to examine whether there is a link between test preparation and scores gained in; Maths, Reading and Writing Exams.  </li>

</ul>

## Wireframes

My wireframes for the project were created using Justinmind Prototyper 8.6.1. The wireframes are saved as a pdf file. Each wireframe contains three mock-ups which include; desktops and for responsive design; tablets and mobiles.

[Desktop Wireframe](/assets/wireframes/desktop.png)
[Tablet Wireframe](/assets/wireframes/tablet.png)
[Mobile Wireframe](/assets/wireframes/mobile.png)




## Features
The website is a single website which contains a navigation bar to navigation users to ; gender balance examination score chart, ethnicity and parental education chart, subject speicfic charts and test preparation charts. At the end of the website there is a reset which can be clicked to reset all the charts. The raw dataset is a csv file in MS Excel.

<ol>
<li> The gender balance examination will be in the form of a pie chart for each gender and users can click on each of the subject areas; maths, reading and writing to ascertain the average score of that particular subject per gender.</li>
<li> The ethnicity and parental education will be stacked bar chart depicting education per ethnic group. In order for equality and diveristy the ethnic group are anomolysed and labelled group A-D. The parental level of education per ethnicity can be visualised through clicking on each section of teh stacked bar chary depicting a level of education.
<li> The chart for Maths Vs Writing, Reading Vs Writing and Maths Vs Reading will be in the form of a scatter graph where each set of results can ve visualised through clicking on the data points for each subject.
<li> The chart for test preparation will be in the form of a line chart where test preparation against maths, reading and writing scores will be visulaised through clicking on each subject line.
</ol>

## Features Left to implement

<ul>
<li> The charts could include data on school meals to depict the correlation between school meals (free/reduced and standard) against examination score as a indication of economic status and examination performance. </li>
</ul>

## Technologies used

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"> HTML5 </a></li> HTML 5 was used to create the structure of webpage with the necessary elements
<li><a href="https://www.w3.org/Style/CSS/Overview.en.html"> CSS3 </a></li> CSS3 was used to write custom css style the webpage with the necessay attributes.
<li><a href="https://getbootstrap.com/"> Bootstrap v4.2 </a> </li>  The Bootstrap framework is used to style the webpage alongside custom css and the grid system is adhered to.
<li><a href="https://bootswatch.com/">Bootswatch</a></li> Bootswatch is used to create a free theme for the navigation bar.
<li><a href="https://jquery.com/"> Jquery </a> </li> Jquery was used to create the collapsible navbar in toggle mode for mobile devices and for smooth scroll of the website.
<li> <a href ="https://jasmine.github.io/">Jasmine</a></li> Jasmine was used to carryout tests on each of the functions.
<li> <a href = "https://git-scm.com/"></a>Git<li> Git was used to push the files to the local repository. 
<li><a href="https://d3js.org/"></a>D3<li>D3 was used to produce the charts.
<li><a href="https://dc-js.github.io/dc.js/"></a>dc<li>dc was used to produce interative chart.
</ul>

## Framework 
<ul>
<li><a href="https://getbootstrap.com/"> Bootstrap v4.2 </a> </li>  The Bootstrap framework is used to style the webpage alongside custom css and the grid system is adhered to.
</ul>

## Testing and Validating

The HTML and CSS3 codes were validated on WSC validator and no syntax errors were found. The website was tested at various screen sizes which include mobile and tablet devices.  The Javascript code was tested using the console ar various intervals and using Jasmine to examine whether the function tests pass. 
The website has been found to be fully functional and has been tested on the following browsers:

<ul>
<li> Google Chrome </li>
<li> Microsoft Edge </li>
<li> Mozilla Firefox </li>
<li> Opera </li>
</ul>

The website was tested on the following devices and the website was found to display all the coded elements and attributes:

<ul>
<li> Desktop </li>
<li> Laptop with HiDPI</li>
<li> Laptop with MDPI </li>
<li> Pixel 2 </li>
<li> Pixel 2L </li>
<li> Galaxy S5 </li>
<li> iPhone 5/SE </li>
<li> iPhone 6/7/8 </li>
<li> iPhone 6/7/8 plus </li>
<li> iPhone X </li>
<li> iPad </li>
<li> iPad Mini </li>
<li> iPad Pro </li>
</ul> 
<hr>

## Testing User Stories

A potential user/user who  wishes to examine correlation in exam performation the data dshboard allows correlation to be seen between gender and test results, parental level of education acorrding to ethnicity, whether consistent performance exists throughout subjects based on results and a correlation between test preparation and scores. The user is able to conclude whether correlation exists between these data series across the testing areas of ; maths, reading and writing.

## Deployment

The site was deployed on GitHub.

   
## Credits

## Content

The basic design for Dashboard Data project was taken from The Code Institute's [Mini Data Visulaisation Project](https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/d8b66a1ffdb7442d9a83a64da3677dd3/91e01ded232a482a8c4729190f1d3839/?activate_block_id=block-v1%3ACodeInstitute%2BIFD101%2B2017_T3%2Btype%40sequential%2Bblock%4091e01ded232a482a8c4729190f1d3839)

## Media


### Logo and Background Image

The Logo was taken from [Open Clip Art- Good Grade](https://openclipart.org/detail/191354/good-grade).

The background image was taken from [Photo by Element5 Digital on Unsplash](https://unsplash.com/photos/OyCl7Y4y0Bk).




#### Dataset

The dataset for this project was  fictious examination performance datset downloaded as a csv file from [Kaggle](https://www.kaggle.com/spscientist/students-performance-in-exams).
Th dataset was created by the 'SP Scientist' and is 


## Acknowledgements

I would like to thank the The Code Institute for teaching me how to code using; HTML5, CSS3, D3, dc, crossfilter and introduction to the Bootstrap Framework.

I received inspiration from this project through being a current educaionalist who has  an interest possible correlations that may exists between ; genders, ethnicty, parental level of education  and whether test preparation impacts examination performace.                                           
