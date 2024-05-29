



function Navbar()
{
    return(
    
    <div class="navbar">
<div class="navbar__s1">
<h1 class="navbar__s1__tittle">Udemy</h1>
</div>
<div class="navbar__s2">
    <i class="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
<input placeholder="search for course here"></input>
</div>
<div class="navbar__s3">
<p> Courses</p>

<div class="MyLearning">
    <p>My Learning</p>
<div class="MyLearning__popup">
    <p>You didn't purchase any course</p>
</div>

</div>

<div class="navbar__s3icon">
<i class="fa-solid fa-bell" style={{color: "#000000"}}></i>
<i class="fa-solid fa-cart-shopping" style={{color: "#000205"}}></i>
<i class="fa-solid fa-user" style={{color: "#00060f"}}></i>
</div>
</div>

<div class="navbar__s4">
    <i class="fa-solid fa-bars" style={{color: "#000205"}}></i>
</div>

    </div>


)}

export default Navbar



