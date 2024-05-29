import One from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"



function Popular(){return(
<div class="popular">
    <h1 class="popular__tittle">Most Popular Courses</h1>
    <p class="popular__subtittle">Pick The Best One</p>
    
    
    <div class="popular__container">
        <div class="course__card">
            <img src={One} alt="one"></img>
            <h3> python Master Class</h3>
            <p>Learn the skill</p>
            <p>4.9 ⭐⭐⭐⭐ </p>
            <p>599 <del>1599</del></p>
        </div>
        
    <div class="course__card">
    <img src={two} alt="two"></img>
        <h3> Java Master Class</h3>
        <p>Learn the skill</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>599 <del>1599</del></p>
    </div>
    
        <div class="course__card">
            <img src={three} alt="three"></img>
            <h3> Cyber security Master Class</h3>
            <p>Learn the skill</p>
            <p>4.9 ⭐⭐⭐⭐ </p>
            <p>899 <del>1899</del></p>
        </div>
        
            <div class="course__card">
            <img src={four} alt="four"></img>
                <h3> Networking Master Class</h3>
                <p>Learn the skill</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1499</del></p>
            </div>
        
        
        <div class="course__card">
        <img src={three} alt="three"></img>
            <h3> Java Master Class</h3>
            <p>Learn the skill</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>599 <del>1599</del></p>
        </div>
        
            <div class="course__card">
                <img src={two} alt="two"></img>
                <h3> Cyber security Master Class</h3>
                <p>Learn the skill</p>
                <p>4.9 ⭐⭐⭐⭐ </p>
                <p>899 <del>1899</del></p>
            </div>
            
                <div class="course__card">
                    <img src={four} alt="four"></img>
                    <h3> Networking Master Class</h3>
                    <p>Learn the skill</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1499</del></p>
                </div>
                <div class="course__card">
                <img src={One} alt="one"></img>
                    <h3> python Master Class</h3>
                    <p>Learn the skill</p>
                    <p>4.9 ⭐⭐⭐⭐ </p>
                    <p>599 <del>1599</del></p>
                </div>



    </div>
</div>


)}


export default Popular