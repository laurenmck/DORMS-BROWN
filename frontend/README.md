# Term Project: **DAB**

# **1 Introduction**

## **1.1 Project Specific Details**

- Project Name:
    - Dorms @ Brown
- Division of Labor
    - Angela Xing (axing2) - Filtering
    - Lauren McKeown (lmckeown) - Reviews
    - Hannah Jeon (hjeon15) - User Authentication
    - Kathy Li (kli117) - Dorm Profile
    - Vivian Lu (vlu11) - Recommender System
    - Kiara Vong (mvong1) - WebApp Design
- Total estimated time it took to complete project:
    - 35 hours per team member

## **1.2 Purpose**

Dorms @ Brown, also known as DAB, will allow students to access information about different dorms (pictures, reviews, etc.), help them choose where they want to live, and help them find housing groups if they need to.

- What problem does your project try to solve?
    - There has been a lack of information regarding housing (don’t know what the rooms in each building look like, opinions of others who have lived there in the past, etc.), some students find it hard to form groups since groups have to be a certain size based on where they want to live
- Who does this problem affect? How?
    - Students: without ample resources to find what dorms best fit them, it is a hassle to find the right number of people for your housing group, the best dorm for your lottery time, and gain scope/expectations for your future living space
    - ResLife: if someone did not know they needed 6 people to fill a suite, they may receive many emails to request drop downs. Since this is mainly communicated through student-ResLife email interactions, it could be overwhelming for ResLife to get to each request manually. Ideally, with more information about each dorm, students will appropriately plan their housing group and lessen the probability of needing to contact ResLife.
- Why and how does your project help solve this problem?
    - We hope to create a website that would include features about the dorm (singles/doubles/triples/suite, communal/private bathrooms, pictures, distance, etc.), filtering options (ex. search by group size), and sorting options (ex. highest rated).
    - We would also include reviews, photos, recommendations based on their current lottery time slot, and even an option to find other group mates
    - All of these features would help solve the current problem because the culmination of factual qualities of the dorm, visuals, and subjective reviews will help create an informed decision for the users
- Why choose to solve this problem over others?
    - We chose to solve this problem over others because it seems like a yearly struggle to find bits and pieces off the internet about each dorm to see if it is a right fit. Seeing the lack of collective information in a single place, we decided that creating our own website will help decrease stress among the student body and even ease ResLife’s stress during the housing process.

## **1.3 Intended Audience and Intended Use**

- Who are your intended end-users?
    - Our intended audience is students at Brown University who are preparing to make decisions about what dorms they may want to live in for the next academic year. In particular, the website/application should help students have more knowledge about their housing options, such as what dorms are available based on their preferences, in order to make more informed decisions.
    - There are people outside of this intended audience who could also benefit from the app. For example, prospective students who are applying to/considering attending Brown may find it useful to get an idea of what dorms at Brown look like. However, this is not a major concern because certain features (such as group matching) can be limited to enrolled students, and the accessibility of information about housing can benefit people outside of the intended audience (students) without infringing privacy.
- How will the app fit into the lives of your users?
    - This website is mostly intended for personal use for students. Students will probably use DAB in the months prior to housing selection/group formation, either to research more about which dorm they would prefer to live in or as a way to find other group members for their housing group. Similar to the Critical Review, students may also use it throughout the year to know more about possible dorms they are interested in, even many months prior to housing selection.
    - Additionally, ResLife could use this website to keep students updated about housing information. This website could also have a page to guide new or confused students about the housing process so that less students email them about inquiries.

## **1.4 External Stakeholders**

- For each of the groups you mention, how might they respond to your project?
    - Students: since they will have more access to data/photos to make more informed decisions, they will be
    - ResLife: will hopefully limit the number of questions directed to res life during the lottery process
- For stakeholders who might oppose or be harmed by your project, how and why? How can you mitigate harm and conflict?
    - students whose dorm rooms are featured: this could be an infringement of personal privacy
        - mitigate harm by blurring out personal images and other personal items in the online photo
        - get students’ permission before posting their dorm photo on the web
    - Brown Bears Den: people will stop using their site and will use D@B instead
    - users: In the case that dorms are not separated by class anymore, an un-updated site that does not account for this would be harmed. They may believe a dorm is available to their class when the dorms class status has changed
- Are there ways you can compensate external stakeholders you interview or who otherwise assist you?
    - offer them access to the project for their own benefit

## **1.5 Scope and User Stories**

- What are you *not* planning on implementing?
    - Tour of each dorm in virtual reality
    - Dorm recognition from photos
    - 3D hologram of a dorm room pops up
- What are your app's user stories?
    - recommendation: users get recommended a dorm or a few dorms based on their lottery time slot
    - filtering: users can search for dorms and apply filters based on group size, kitchen, private bathrooms, etc.
    - photos: include photos of rooms from each dorm as well as the floor plans (Brown Bears Den only has floor plans)
    - reviews: for each dorm, there is a review section that allows people to post public comments
    - form: users are able to fill out a form that finds other group mates for them

## **1.6 Definitions and Acronyms**

- **DAB:** Dorms @ Brown

# 2 ****Overall Description****

## 2.1 **User Needs**

This section will reference any user research you’ve done and the requirements you’ve gathered. User research might involve interviews, general research, or consulting experts. From your research, you should gather a list of concrete needs your intended audience has and how your product will help address those needs.

Researching user needs is a great opportunity to confirm that your product solves an existing and significant problem. For that reason, **never ask leading questions** (e.g., “How do you usually find recipes for cooking? Would you be interested in using an app for that?”). This will bias user answers toward confirming your research goals. Better to realize you’re fulfilling a non-existent or insignificant need before starting a project than after putting hundreds of hours of work into it.

*Answer these questions (and feel free to use them when interviewing*:

- What are the most important tasks your users have to perform in the context of your product? (E.g., for my recipe app, maybe it’s finding an appropriate recipe based on ingredients and finding time to cook)
  - being able to view all the content needed to make an informed decision about dorms, as there is a lack of an abundance of informative data on the web
- What are the biggest gaps in current tools used by your users? (E.g., cookbooks don’t have sophisticated search functionality)
  - no pictures, photos, list of features, etc. We only have floorplans
- What general feelings do users express about the problem you’re working on? (E.g., people express frustration at how long it takes to find an appropriate recipe)
  - people are frustrated with the lack of transparent information about all dorms
- How often do users perform tasks in the context of your project (i.e., how often will they use the product)?
  - they'll most often use it before the housing lottery
- In what context will users interact with your product? At work? At home? In school? Some combination?
  - in school
- Are there secondary users? Do they have different needs? (E.g., makers of medical devices need to know the needs of doctors as well as the needs of their patients)
  - ResLife, students, and likely their parents (as they would like to know the living situation of their children)
- **Separate from user research: can you think of any ways your app might create user needs that didn’t exist before? (E.g., the addictiveness of many social media apps creates a “need” that didn’t exist before)**
    - This doesn’t necessarily disqualify your app, but is something you should think about!
- Any other useful information that doesn’t fit into these questions.

## 2.2 Assumptions and dependencies

- Technical dependencies:
    - JetBrain IDEs (IntelliJ)
    - Java Libraries
    - Jacoco
    - GitHub
    - Working computer for every developer, with compatibility with updated JetBrain IDEs
    - (user authentication we will be using ex. MongoDB, passport)
- Non-technical dependencies
    - Students will give consent to provide data
    - Brown will continue with the housing lottery
- Normative assumptions
    - Legal issues regarding the data we’re collecting
    - Users will not abuse the data provided
    - Edits of data are only visible from the user editing and data can not be falsified
- Financial dependencies
    - Continued free access to JetBrain IDEs through Brown

# **3 System Features and Requirements**

## 3.1 Risks

This section is one of the most important in your specification. In it you’ll identify the key risks your app creates for users, external stakeholders, and your project itself. **Make sure to specify when you deem risks necessary.** We are not judging you on your failure to overcome certain risks, especially ones involving a larger social, economic, and political context. We simply want you to be aware of them!

*Answer these questions*:

- Stakeholder risks (all entities who use or are affected by the app)
    - How might data used for decision-making within your app result in unfair outcomes for certain users or stakeholders?
        - our dorm matching algorithm might give inaccurate/not the best results based on the choices students make earlier in the lottery that cannot be predicted; this may cause confusion for the students
    - Which features of the represented groups do your app’s data not represent?
        - our app does not represent students who are looking into housing accommodations or students who are looking for off-campus housing
        - students going through the housing accommodations process can use this app to learn more about dorms but the dorm matching algorithm will not apply to these students
    - What limitations exist on stakeholders’ ability to manipulate the data relevant to them?
        - RES LIFE: all dorms on campus will be shown on this app, even ones that res life specifically allocate to students through special program housing or accommodations - res life does not do a good job updating this information ahead of time and will not have access to edit the info on this web app
    - Does the app benefit one group of stakeholders more than others?
        - this app benefits the students more than res life because it will help students feel better about knowing what their rooms are likley to look like before selecting them
    - Which data are publicly accessible?
        - no sensitive data will be used in this app
        - reviews from students and pictures of dorms will only be accessed by logging into
    - Is data ever harvested or used without stakeholder consent?
        - no, when photos and user data are collected through a user form consent is received from the user first
    - Are there situations when a stakeholder cannot inspect how your app came to a decision relevant to them?
        - if implemented: the algorithm to provide students a list of possible housing options given a lottery number can be inspected by analyzing the backend
    - Does your app disrupt community wellbeing in any way, such as undermining trust, communication, or participation?
        - n/a
    - Does your app make inefficient or unnecessary uses of resources and/or energy?
        - n/a
- External risks
    - How does your app fit into its social, economic, and political context? Does it actively work against systems of oppression (racism, sexism, classism)? How?
        - this app works against systems of oppression by working to give every brown student more information about the housing lottery. This way no matter who you know, you can still get information to make you feel more secure in your housing choice
    - Does your app rely on services that participate in labor exploitation or create environmental harms?
        - n/a

## 3.2 Data Requirements

In this section, you’ll specify which data you need to collect from your users and other stakeholders and whether you’ll store, use, or store and use the data.

**Pictures of Rooms/Common Areas**

- If you plan on using this datum, what function does it fulfill?
    - We plan on storing and using pictures of rooms and common areas
    - Pictures of rooms and common areas allow users to get a look at the inside of the dorm when deciding where they want to live
- What process of consent, if any, do you provide your user when collecting this data from them? If you don’t provide one, why?
    - We ask other Brown students to voluntarily fill out a form with pictures of their dorm room, and we include a statement at the end that explicitly asks for their consent to use these pictures in our project/on the webpage

**Reviews**

- If you plan on using this datum, what function does it fulfill?
    - We plan on storing and using the reviews that people leave for different dorms
    - This particular data allows users to see how other students feel about each of the dorms and allows them to leave their own comments/opinions
- What process of consent, if any, do you provide your user when collecting this data from them? If you don’t provide one, why?
    - The site will have a space for users to input their reviews, so leaving reviews is voluntary
    - While this process does not explicitly ask for their consent, it is implied that their reviews will be posted on the site

**Housing Lottery Times (optional)**

- If you plan on using this datum, what function does it fulfill?
    - We plan on using the housing lottery times for a specific person
    - Getting the housing lottery time from a user will allow them to see which dorms they could potentially get based on the time they have
    - We don’t plan on storing the data, we just plan on using it to allow users to see which dorms are potentially available, so storing the time wouldn’t be helpful
- What process of consent, if any, do you provide your user when collecting this data from them? If you don’t provide one, why?
    - The site will allow users to input their lottery time to see which housing will likely be available
    - Though this process does not explicitly as users for their consent, it is completely voluntary

## 3.3 System Features

*This section will change as you develop your project. You should write down your initial design before writing any code, and then come back and fill in the details when you’ve implemented your features.*

In this section, you’ll define the categories of functional requirements. This is subtly different from user stories: rather than defining what the user can do, you’ll define the high-level organization of your software components. The former is user-facing, while the latter is developer-facing.

*Consider the following*:

- What high-level modules define the functionality of your app?
- How will you separate your code into these separate modules?
- How will modules communicate with each other?
- How will you make modules reusable and generic when necessary?
- Are there any known bugs in your program?
- How to build and run your program?

**Backend:**

- Database: Firebase (Firestore) containing information on all the dorms on Brown Campus accessible through proxy in Java in backend
- User Authentication: verifies that the users are Brown University students and handles log in/sign up

**Frontend:**

- Welcome/Home page: Main page that contains a basic introduction and easy access to other sections of the website
- User state: keeps track of logged in users when page refreshes
- User profile page: user home page that contains their personal information including previous posts/reviews
- Review page for each dorm: Each dorm on campus will have a page with a general outline and pictures with additionally ability for users to rate and review the dorm
- Housing lottery page: An informational page outlining the housing lottery process for Brown students

## 3.4 Functional Requirements

*This section will change as you develop your project. You should write down your initial design before writing any code, and then come back and fill in the details when you’ve implemented your features.*

In this section, you’ll describe the modules (i.e., pieces) of your program that define the different feature requirements for your project. You can use your user stories to guide you, defining software components that will combine to fulfill each user story. This section will likely be the most extensive.

*Answer these questions for each requirement*:

- When during the user flow should this component be available?
- How does this component interface with the rest of the app?
    - Does it collect user input directly? Does it communicate with other components? External APIs? Backend database?
    - Are there security measures to prevent all but certain components from accessing it?
- How does it process data?
    - Algorithms, data structures, etc

#### USER AUTHENTICATION:

-	When user enters the home page, further authentication to prove that they are a current Brown student with a Brown email address is required for them to access the rest of the site
-	By clicking the log in button, user can input their Brown email account through Google authentication. This information will be sent to Firebase to be stored. User’s email address will be used later to communicate with the backend database through Firestore.
-	Upon signing in, the user now has access to all pages on the website including profile page. The profile page has basic information about the user such as their name and all reviews they have made in the past. The reviews are retrieved and parsed from Firestore database by a POST request. 
-	User can sign out through the sign out button in the profile page. User will have to log in again in order to access the pages on the website. 

#### FILTERING:

- Component Availability:
  - When the users are on the page containing all dorms, they should be able to filter based on a particular characteristic. For example, they can filter by room type (singles, doubles, triples, etc.) or location (north, center, south)
- Collecting User Input:
    - This component collects information from the users, and specifically, the filters
    - This information gets past into the backend through the post parameters — the filter type gets passed in (eg. room type, location, year, etc.) and the specific filter (eg. singles, doubles, triples, etc. for room type)
    - Once the information gets sent in the post request, the backend gets all the dorms based on the particular filters. The firebase database contains all the dorm information, so the backend accesses the room information from there. If the dorm has a particular characteristic, it gets returned to the front end.
- Security measures:
    - Users cannot access the page containing all the dorms and, therefore, the filter unless they log in. The user authentication prevents users from accessing unless they are logged in to their brown Gmail account.
- How does it process data? (algorithms, etc.)
    - Once the post parameters get sent to the backend, it gets parsed and turned into array lists. The program then iterates through the lists and all the dorms that have that particular characteristic are added to an array list that keeps track of all the current dorms.
    - The FilterDorms class has fields that keep track of all dorms and the current filtered dorms.
    - An array list of the filtered dorm names gets returned from the back end to the front end. Once the list of names gets returned, the dorm profile is displayed.

#### REVIEWS:

- Component Availability: This component will be available to the user after they are signed in to their brown account and after they have clicked into a dorm page
- Collecting User Input: There are two subcomponents to this section
  - showing user reviews that are in the system
    - to get the reviews for each individual dorm, this component communicates with an external API. Given the dorm name of the dorm profile that is clicked on, the reviews that are in the firebase for that dorm are fetched and shown to the screen [a review contains a dorm name, a star rating, an image (optional), and a text review]. The reviews for each dorm are fetched using a post request with the dorm name as the input and a list of reviews as the response.
  - allowing users to input a new review
    - this section of the component collects user input directly. The user can choose a dorm from a dropdown, choose a star rating for the dorm, input text into a text box and upload an image of the dorm if they wish. When the review is submitted it is added to the firebase database in the cloud after being sent through the backend by a post request.
- Security measures:
  - yes, there are security measures: only brown students can view or add a review
  - reviews can only be seen for a dorm when on the dorm page
  - users can only see their reviews in their profile page
- How does it process data? (algorithms, etc.)
  - this component processes data through post requests and useState() variables to update the state of reviews

#### DORM PAGES:
- this component is available when the user successfully signs in and selects a dorm to view
- this component interacts with the page of all dorms, such that clicking on one will reroute you to the designated page. it also interacts with filtering, as only the dorms with the appropriate features will appear
- this component does not collect user input per se (although it does for reviews; please refer to the section above). rather, we use Firebase to use pre-collected data about the dorms and display them to the user. this includes pictures, features, maps, floor plans, etc.
- for security purposes, the database is secure since it uses a private key that is not accessible. otherwise, the methods are private, which provides security measures
- it processes data in that it uses the /getDormsByID endpoint in the backend to fetch data from Firebase, then stores the information in a list. the floorplans are also handled as such, with specific cases for dorms with multiple buildings (e.g. young orchard, pembroke, etc.)

#### RECOMMENDER:

When the user clicks on the “Recommendations” tab, it should lead them to a page that contains a survey called “What Dorm Is Right For You”? There, we have curated a list of questions asking about aspects of a dorm a student may find important: in particular, room style(s), location, flooring, bathrooms, whether there is a common room, and whether there are elevators. Once the survey is filled out and submitted, the attributes of the user’s ideal dorm are put into a bloom filter and compared with all the available, recommendable dorms on campus (i.e., non-freshman, non-wellness dorms). The attributes for the dorms on campus are taken from a backend database (through firestore). The top recommendations are displayed on a new page along with a photo of the outside of the dorm. Working with the authentication, the recommendations tab cannot be accessed without login via a brown.edu email. 

#### HOW TO RUN PROJECT:
1. navigate to /backend and run "./run --gui"
2. navigate to /frontend/dab-app and run "npm start"

## 3.5 Testing Plan

In this section, you’ll outline your plan for testing your app. You don’t need to detail specific test cases, but you should give a high-level description of which features and potential bugs you want to test. You can use the functional requirements you outlined to structure this section.

Include instructions on how to run tests from the command line!

- High-Level Testing Plan
    - Backend Testing
        - data base testing
        - user authentication testing
    - Front End Testing
        - Selenium
        - had peers review and interact with the webapp, looking for faults in functionality

## 3.6 External Interface Requirements

In this section you’ll define how your app will interact with the “outside world,” including the user.

*Answer these questions*:

- How will your user interact with your app? Specifically, how will you make it accessible to visually, motor, cognitive, or otherwise impaired users?
    - If the site is hosted externally using a hosting service, the users will be able to access our website through the given web address. Otherwise, it could also be accessed locally through the github repo. To make our website accessible to everyone, we will be following the usual conventions of web accessibility such as using ARIA, semantic HTML, and careful color placement/emphasis. There will be instructions on how to navigate through the website and each section will be clearly labeled and separated in a non-cluttered manner.
- If applicable, how will your app communicate with external software?
    - This will likely include your database, since you probably won’t want to host it locally, but rather on a service like Google Cloud Platform or Firebase.

** PLEASE NOTE: if you have viewed the Buxton page and see that the slideshow is empty, this is NOT a bug! we simply did not recieve any submissions for the Buxton dorm page, thus the slideshow of images is empty. if, in the future, we recieve photos, we will add them!
## 3.7 Non-functional Requirements

Almost done! This last section will outline more ~nebulous~ requirements.

*Answer these questions*:

- What standards of performance must your product meet?
    - The website should be able to reliably display data about a specific dorm within seconds of the user requesting it. Depending on the number of pictures that need to be displayed, this could limit the speed at which the site could be loaded, but ideally, there would not be a significant delay.
- What standards of security & privacy must your product meet?
    - Because we plan to implement user authentication (for Brown students) to post reviews of dorms, there needs to be a secure form of authentication (ex: MongoDB, Firebase), rather than just storing usernames and passwords in a database. In terms of privacy, students should consent to have pictures of their rooms online (if the pictures contain their personal belongings).
- How “flashy” and aesthetically pleasing does your UI need to be?
    - The UI does not need to be extremely “flashy”, however, it should be easy to understand how to search/filter for the information that the user needs and how to post reviews.
- How accessible does your UI need to be?
    - Because the time and scope of our project are limited, we cannot necessarily make it accessible to certain groups (ex: implementing a screen reader for the visually impaired), but it should be accessible to anyone who understands how to navigate a website.
