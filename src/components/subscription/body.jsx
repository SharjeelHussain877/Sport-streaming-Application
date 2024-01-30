import './style.css' ;

export default function app (){
    return(
        <div className='container'>
           <div className="pic-div" style={{backgroundColor: "black" ,margin : 0 , padding : 0}} >
                <img src="https://th.bing.com/th/id/R.da0a19696aee0372e422d078fd853de2?rik=v%2fQGn6q29UVm5A&pid=ImgRaw&r=0" alt="" id="bg-img"/> 
           </div> 
           <div className="plan-div">
                <h1 id='plan-head' >Choose your plan</h1>
                <div className="main-card-div">
                    <div className="card-div">
                      <div className="topcard">
                        <h1>Basic </h1>
                        <h2>$ 7.99</h2>
                      </div>
                      <h3><span class="circle-checkmark">&#x2717;</span>HD Available.</h3>
                      <h3><span class="circle-checkmark">&#x2717;</span>4K+HDR Available.</h3>
                      <h3><span class="circle-checkmarkok">✔</span>Watch On your Laptop And TV. </h3>
                      <h3><span class="circle-checkmarkok">✔</span>Watch On your Mobile Phone And Tablet. </h3>
                      <h3><span class="circle-checkmarkok">.1</span>Screen You Can Watch on at The Same Time.<span>1</span> </h3>

                      <button className="select-plan-button">SELECT PLAN </button>
                    </div>

                    <div className="card-div">
                      <div className="topcard">
                        <h1>Standard </h1>
                        <h2>$ 10.99</h2>
                      </div>
                      <h3><span class="circle-checkmarkok">✔</span>HD Available.</h3>
                      <h3><span class="circle-checkmark">&#x2717;</span>4K+HDR Available.</h3>
                      <h3><span class="circle-checkmarkok">✔</span>Watch On your Laptop And TV.</h3>
                      <h3><span class="circle-checkmarkok">✔</span>Watch On your Mobile Phone And Tablet. </h3>
                      <h3><span class="circle-checkmarkok">.2</span>Screen You Can Watch on at The Same Time.</h3>

                      <button className="select-plan-button">SELECT PLAN </button>
                    </div>

                    <div className="card-div">
                      <div className="topcard">
                        <h1>Premium <span>🔥</span></h1>
                        <h2>$ 13.99</h2>
                      </div>
                      <h3><span class="circle-checkmarkok">✔</span>HD Available.</h3>
                      <h3><span class="circle-checkmarkok">✔</span>4K+HDR Available.</h3>
                      <h3><span class="circle-checkmarkok">✔</span>Watch On your Laptop And TV. </h3>
                      <h3><span class="circle-checkmarkok">✔</span>Watch On your Mobile Phone And Tablet. </h3>
                      <h3><span class="circle-checkmarkok">.4</span>Screen You Can Watch on at The Same Time.</h3>

                      <button className="select-plan-button">SELECT PLAN</button>
                    </div>
                </div>
           </div>
        </div>
    )
}