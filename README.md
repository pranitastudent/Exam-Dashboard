[Deployed Website](https://pranitastudent.github.io/Milestone-Second/)

# Data Dashboard- Examination Performance - Second Milestone Project
The aim of the 'Interactive Frontend Development' end of module project was to create an interactive data dashboard on a dataset of choice using D3/dc and crossfilter libraries. The website should reflect all of the skills gained in; HTML,CSS, JavaScript/JQuery and use of D3,dc and crossfilter libraries. The website is a showcase of a fictious dataset examining student exam performance based on; gender, ethnic race, parental level of education, test preparation and scores in ; Maths, Reading and Writing.

The website is an interactive data dashboard which incorporates the following fields; gender, parental education, ethnic race, maths, reading and writing scores. The dataset dashboard will use interactive graphs to show the relationship between these fields in order for the user to extrapolate data.


## User Experience
The website aims to inform users of the trends between gender, ethnic race, parental level of education, maths, reading and writing scores. The website includes a navigation bar where users can navigate to each graph and a reset button at the start where users can reset the graphs through scrolling up using the 'back-to-top' button. All the charts will render according to the field chosen.

## User Stories
<ul>
<li> As a user I would like to extrapolate the relationship between gender and  maths, reading and writing scores. Does one gender perform better in maths, reading and writing exams than the other based on the dataset? </li>
<li> As a user I would like to examine the relationship between parental level of education  and ethnicity. Is there a link between ethnicity and parental level of education?</li>
<li> As a user I would like to examine whether a correlation exists with students who perform better in one subject then go on to perform just as well in other areas by examining the correlations between : Maths Vs Writing, Reading Vs Writing and Maths Vs Reading.  </li>
<li> As a user I would like to examine whether there is a link between test preparation and scores gained in; Maths, Reading and Writing Exams.  </li>

</ul>

## Wireframes

My wireframes for the project were created using Justinmind Prototyper 8.6.1. The wireframes are saved as a pdf file. Each wireframe contains three mock-ups which include; desktops and for responsive design for tablets and mobiles.

[Desktop Wireframe](wireframes/desktop.png)<br>
[Tablet Wireframe](wireframes/Tablet.png)<br>
[Mobile Wireframe](wireframes/Mobile.png)


The final project differs from the wireframes as each chart contains a conclusion depicting findings in order for the user to clearly conclude what each chart shows. The stacked bar chart has been omitted for ethnicity and parental education as it doesn't provide any more data which can be concluded. The Reset button has been placed at the top
in the final website in order for the user to easily reset the graphs once the 'back-to-top' button is clicked.


## Features
The website is a single page website which contains a navigation bar for users to navigate between each section; gender balance examination, ethnicity and parental education chart, subject specific charts and test preparation charts. The navigation section code is adapted from the Traversy Media video series - 19th August 2018 [Responsive Landing Page using HTML an CSS - a little jQuery](https://www.youtube.com/watch?v=GJXXf3_dcng). The user can scroll to the top using the 'back-to-top' button and reset all the graphs using the 'reset' button if desired. The raw dataset is a csv file in MS Excel.
The 'up' button allows the user to navigate back to the start of the webpage. 

<ol>
<li> A bar chart depicting the number of female and male students will be produced and the user is able to select each gender through clicking on each bar representing each gender. The gender percentage is interactive and changes according to the gender selected and chnages according to the selection of fields for each chart. Hence the section is named 'Gender Balance Examination'.</li>
<li> Three pie charts will be produced to examine scores in Maths, Reading and Writing according to gender which are interactive on gender selection and hence named 'Subject Specific Examination.'</li>
<li> The ethnicity and parental education relationship examination will be depicted through a barchart. In order for equality and diversity the ethnic groups (A,B,C,D,E) are anomolysed and labelled group A-D. The parental level of education per ethnicity can be visualised through selecting each level of education using the selector, hence named 'Ethnicity and Parental Education Examination.'</li>
<li> The chart for Maths Vs Writing, Reading Vs Writing and Maths Vs Reading will be in the form of a scatter graph where each set of results can be visualised and the dataset points change according to gender selection and hence named 
     'Is there any correlation between how students score in each subject?.'</li>
<li> The chart for test preparation will be in the form of a line chart where test preparation against maths, reading and writing scores will be visualised through three line graphs and hence named 'Did students who completed the test preparation course gain more marks on average in each subject?.'</li>
</ol>

## Features Left to implement

<ul>
<li> The charts could include data on school meals to depict the correlation between school meals (free/reduced and standard) against examination score as a indication of economic status and examination performance. </li>
</ul>

## Technologies used

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"> HTML5 </a></li> HTML 5 was used to create the structure of webpage with the necessary elements.
<li><a href="https://www.w3.org/Style/CSS/Overview.en.html"> CSS3 </a></li> CSS3 was used to write custom css style the webpage with the necessary attributes.
<li><a href ="https://www.javascript.com/">JavaScript</a></li> Javascript is used to declare variables and functions.
<li><a href="https://getbootstrap.com/"> Bootstrap v3.3.7 </a> </li>  The Bootstrap framework is used to style the webpage alongside custom css and the grid system is adhered to.
<li><a href="https://jquery.com/"> Jquery </a></li> Jquery was used to create the collapsible navbar in toggle mode for mobile devices and for smooth scroll of the website.
<li> <a href ="https://jasmine.github.io/">Jasmine 2.7.0</a></li> Jasmine was used to carryout tests on JavaScript code.
<li> <a href = "https://git-scm.com/">Git</a></li> Git was used to push the files to the local repository. 
<li><a href="https://d3js.org/">D3</a><li>D3 library was used to produce the charts.
<li><a href="https://dc-js.github.io/dc.js/">dc</a></li>dc library was used to produce charts.
<li><a href ="http://square.github.io/crossfilter/">crossfilter</a></li>crossfilter library used to produce interactive charts.
</ul>

## Framework 
<ul>
<li><a href="https://getbootstrap.com/"> Bootstrap v3.3.7</a></li> The Bootstrap framework is used to style the webpage alongside custom css and the grid system is adhered to.
</ul>

## Testing and Validating

The HTML and CSS3 codes were validated on WSC validator and no syntax errors were found. The JavaScript was validated using JS Hint and no errors were found. The website was tested at various screen sizes which include mobile and tablet devices.   
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

### Graphs Testing

The graphs rendered well on all browsers: Mozilla Firefox, Google Chrome, Opera and Microsoft Edge.. 

## JavaScript Testing

The D3/dc graphs were tested to examine whether they function interactively and hence the JavaScript code is correct. In order to fulfil the JavaScript testing component of the project :
[test.js](https://github.com/pranitastudent/Milestone-Second/blob/master/static/js/test.js) was created so that Jasmine testing could take place. The Javascript code in test.Js is adaptation of 'Jasmine Challenges Drinks Game'whereby an age is inputted and the user gets a statement shown according to the age input. Each of the if and else if statements were tested
and all passed the Jasmine tests in [testSpec.js](https://github.com/pranitastudent/Milestone-Second/blob/master/static/js/testSpec.js). 

## Testing User Stories

A potential user/user who  wishes to examine correlations between genders and subject specific scores, parental level of education and ethnicity as well as test preparation and scores in each subject. The data dashboard allows correlations to be seen between gender and test results, parental level of education according to ethnicity, whether consistent performance exists throughout subjects based on results and a correlation between test preparation and scores. The user is able to conclude whether correlation exists between these data series across the testing areas of ; maths, reading and writing.

## Deployment

The site was deployed on GitHub.

   
## Credits

## Content

The basic design for Dashboard Data project was taken from The Code Institute's [Mini Data Visulaisation Project](https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/d8b66a1ffdb7442d9a83a64da3677dd3/91e01ded232a482a8c4729190f1d3839/?activate_block_id=block-v1%3ACodeInstitute%2BIFD101%2B2017_T3%2Btype%40sequential%2Bblock%4091e01ded232a482a8c4729190f1d3839)

## Media


###  Background Image

The background image was taken from [Photo by Element5 Digital on Unsplash](https://unsplash.com/photos/OyCl7Y4y0Bk).

### Fading Image

Image faded for aesthetics using [Fade-out Effect] (https://www.tuxpi.com/photo-effects/fade-image).



### Dataset

The dataset for this project was  fictious examination performance dataset downloaded as a csv file from [Kaggle](https://www.kaggle.com/spscientist/students-performance-in-exams).
The dataset was created by the 'SP Scientist' and is available on Kaggle.


## Acknowledgements

I would like to thank the The Code Institute for teaching me how to code using; HTML5, CSS3, D3, dc, crossfilter and introduction to the Bootstrap Framework. I would also like ot thank my mentor Rick Gallegos for his suggestions.

I received inspiration for this project through being a current educationalist who has an interest in possible correlations that may exists between ; genders, ethnicity, parental level of education  and whether test preparation impacts examination performance.                                           
